**Kevin Ball:** Hey there, KBall here at Fluent Conf reporting. I'm here with Brian Douglas, developer advocate at GitHub. Brian, how are you doing?

**Brian Douglas:** I'm doing very well.

**Kevin Ball:** Awesome. I saw you speak yesterday, talking a little bit about GraphQL and things like that... Can you tell us about your talk and how it went?

**Brian Douglas:** Yeah, so I got the opportunity of doing a lightning talk at Fluent Conf; we had a handful of lightning talks, and my talk was focused around exploring GraphQL in your API... And it goes back to -- I work at GitHub now, but prior to GitHub I worked at a company called Netlify, who is also a sponsor here at Fluent Conf... And I got the opportunity to do some research and development around getting GraphQL into our API. My talk kind of covers how I didn't want to actually own the backend to get GraphQL to work, and I got a lot of pushback from our backend teams to adding GraphQL, because at the moment GraphQL is really valuable for frontend developers... So I just talked about my experience and how I got GraphQL working at Netlify, and how I use GraphQL at GitHub now.

**Kevin Ball:** One of the things you said that was really interesting to me was that an upcoming version of the GitHub API is gonna be all GraphQL?

**Brian Douglas:** Yeah, it's actually already out. Version 4 is out, it's public, you can use it. Version 3 is what you would know as the REST API, and then version 4 is the GraphQL API. The cool thing about it is that version 4 is the last version. With GraphQL you can make changes to your API without breaking certain things... Outside of like name changes, we do have some breaking changes coming up in the next few months that we happen to change the names of endpoints, but other than that, the breaking changes are -- you just either add to GraphQL... You don't really need to remove things.

**Kevin Ball:** Awesome. So for folks who aren't familiar, can you give us just a quick rundown on what GraphQL is and how it differs from traditional APIs?

**Brian Douglas:** \[00:03:52.05\] Yeah, so GraphQL came out of the Facebook team. Lee Byron and Dan - I forget Dan's last name... Dan and a third person who also escapes me. Lee is probably the most public-facing GraphQL team member. They came up with a spec to interact with the backend that was different from REST. Graph being graph database, QL being query language - so GraphQL is just another way for your mobile team, your frontend team to interact with the API that doesn't have to be a RESTful way.

**Kevin Ball:** Yeah, one of the things that interests me a lot about it is it's almost flipping your paradigm on your head. So instead of crafting your API around your backend representation, your models that you are exposing as resources, you are allowing the frontend to say "Here's the data I want right now.... Just give it to me. You figure out the rest."

**Brian Douglas:** Yeah, that's the cool thing about it. As a frontend developer - and I was a long-time frontend developer at Netlify and the previous companies - though I had the capacity to go back and do backend changes, I continued to have to go to the backend teams and say "Hey, this endpoint is not producing the right payload; I'm missing e-mails for this user... Can you add this?" and then the process of like waiting, and requesting...

I think of backend changes as like the equivalent of frontend developers and copy changes - no one wants to do them, but you're gonna have to queue those up, and a junior developer or whoever has to crank through those. And now everything's in the payload, and as long as you whitelist it on your GraphQL endpoint, you can now just define your schema on the frontend, or if you're doing mobile on your client, and you get what you need, and everybody's happy on both ends.

**Kevin Ball:** Nice. Now, in your talk, you talked about introducing GraphQL as a wrapper (with a w) and in JS Party we have a long history with joking about rap, and things like that, because it's a party about Javascript, and we're all nerds, so we're terrible at rapping, but we try ocasionally...

**Brian Douglas:** Okay.

**Kevin Ball:** But can you talk about that wrapper concept? How is that you introduce GraphQL as a wrapper around an existing API?

**Brian Douglas:** Yeah, so I had this long pun -- and notice I've never ever actually mentioned hip-hop or rap... That was kind of like my ploy in giving the talk - don't address the slides, but talk about wrappers as in the GraphQL... So wrappers - to explain for the listeners - is if you think of like API gateways, like GraphQL gateways instead, so you're taking your normal REST API and you're wrapping it into a GraphQL schema... So one, it's a third-party that doesn't have to break or deprecate anything on the REST side, but you're just exposing GraphQL for any sort of frontend consuming.

I built a wrapper using \[unintelligible 00:06:26.27\] to be able to prototype GraphQL on my frontend, to be able to consume that in what at the time was a React Native app. From there, I was able to 1) check the box \[unintelligible 00:06:38.13\] React Native app, and then 2) I didn't have to get complaints from the backend team saying "Hey, you're dropping all this code in here for us to support, and you are just gonna go do your frontend thing and disappear... So I was able to support my prototype and then go back to the team and say "Hey, GraphQL works. Here's the metrics. Everything's the same. Here's all the things we can unlock if we use GraphQL going forward."

**Kevin Ball:** So... So that I understand - what you're essentially doing then is your gateway calls back to your REST API, pulls whatever sets of resources it needs to expose, kind of caches them in some way, and then exposes them via GraphQL?

**Brian Douglas:** Yeah, and the caching - that's something that a lot of people are talking about now, and GraphQL Europe's literally happening at the same time as Fluent Conf, so I'm sure a lot of cool conversations will happen around that... But a company like Apollo - actually, Meteor is Apollo's project... Or vice-versa - Apollo is Meteor's project... And they do caching for you within the Apollo 2. Peggy had a talk about Apollo in general and what it does there, so that's what handles the caching, but everything is the same. So if you do caching on your backend already, every time you hit your GraphQL endpoint and you're hitting the API on the REST side into your gateway, if you've hit already, the caching exists. So all that is the same, unless you wanna pull it to the GraphQL side, and I think now those \[unintelligible 00:07:56.17\] happening on the GraphQL gateway side are conversations and solutions that are happening now... But prior to that, everything you did with REST - exactly the same.

**Kevin Ball:** \[00:08:06.12\] Nice. So it feels like, in a lot of ways, this is part of the evolution towards more complex frontends... And as we've tried to do more and more on the front-end, we've then had to think more and more about data, and you have stuff coming like the Elm architecture, and Flux, Redux, Vuex - all these different ways to do it. Is GraphQL a replacement for those? Does it play nicely with those?

**Brian Douglas:** Yeah, that's a conversation that a lot of people -- there's a lot of popular blog posts that get really popular, but don't really have much substance to it, where it's like GraphQL is the replacement for REST... I don't believe that's the case. I think GraphQL is an enhancement to REST, and if you \[unintelligible 00:08:42.16\] you're still exposing stuff the same way... And we zoom out a little bit more of like what's happening on the frontend; there's more infrastructure going to the frontend. For example, now we have things like Webpack that are just making everything magically happen on our frontend, and we're bundling down to like HTML and CSS like in the good old days... And I think as we're speaking, Brendan Eich is gonna be speaking on the main stage... He's one of the grandfathers of the web, and they've been doing it like that for years, and now we're revisiting that by using things like Webpack, and now with Redux, and we're managing all our data on the frontend, and we have the... I like the term "backend for your frontend" type of deal... So I think GraphQL is just enhancing that conversation, where now you no longer have to worry about actions and reducers, now you're just worrying about queries and mutations. It's a different paradigm, but I think I could see GraphQL expanding into other frontend architectures and being more of like a thing that people are gonna get more serious about in the next few years.

**Kevin Ball:** Absolutely. So let's talk a little bit about that in terms of maturity. You said a lot of the questions around caching and things like that are still getting figured out, but it also sounds like you've been using this stuff in production for a while. How mature is the system? How mature is the ecosystem? If people are thinking about getting in, are there any barriers in those woods?

**Brian Douglas:** Yeah, so it came out of like public beta; now it's public, no longer beta as of last year, GraphQL... In the fall of last year. That would have been at the last GraphQL Summit that just happened in San Francisco. At that point, a lot of companies had started attaching themselves to the GraphQL space, and announcing that they'd been using GraphQL secretly on side projects... So as more and more people get it in production, which it seems to be quite a few people - large companies we've heard of, Airbnb being one of the recent ones announcing their GraphQL experimentations... And GitHub has been one of them, since prior to the public beta; we've been using it internally for a very long time, and now going forward a lot of our public API usage and new features are going to GraphQL-only...

So specific features, mainly due to problems that we have -- I was explaining actually to another person at lunch about one of the common problems I have as a GitHub user, as an employee now and also as a previous user of the API, is that as soon as you start testing the API, you hit rate limits right away... It's like, "Oh, crap, I didn't mean to hit that 100 times." So now I have to wait an hour to hit that rate limit. But now with GraphQL you don't get that problem; you can solve that problem a little easier by rate limiting within the schema that you're defining. If you want repositories, we're gonna give you 100 repositories, and you have to \[unintelligible 00:11:31.19\] after that point. So it's just built into the API at that point.

**Kevin Ball:** Interesting. Yeah, I remember trying to set something up where I was not using the built-in widget, but I was trying to show how many stars or something like that, and I was hitting the API, and any sort of public-facing website that has any amount of traffic hits the rate limit almost instantly. So does this get you around that?

**Brian Douglas:** \[00:11:52.27\] Yeah, we're working on some creative things -- I actually work on the GraphQL team at GitHub, but I'm following close enough... I'm actually fairly new to GitHub within the last six months, so I got in at a great time, apparently...

**Kevin Ball:** Yeah, that must have been a crazy ride...

**Brian Douglas:** Yeah, it has been a crazy ride; it's been an interesting week, I guess... I'm not sure when this podcast will come out, but yeah... We'll look back and read all the blog posts years from now and be like "Huh, I was there..." But as far as the GraphQL stuff... A lot of people were doing really interesting things; I think this is the year where people are starting to talk about the solutions and the problems that they have solved.

A part of my talk was the fact that I couldn't use Mongo as part of my GraphQL schema in my Rails app, and that everything that's built pretty much cookie-cutter Rails app, it works with GraphQL, but anything outside of that doesn't... But within the six months of me submitting and getting and getting accepted and doing my talk, Mongo works in like the cookie-cutter Rails Gem. So I think a lot of other things -- Apollo recently came out with their Apollo 2.0 earlier this year... Now caching is built in as part of the solution for that.

Schema stitching is another thing I briefly mentioned in my talk. Now that's like a trivial solution that people like Prisma are solving, and they have really good guides and tutorials around that... And when I say schema stitching, it's literally taking two different schemas or APIs and merging them together. I have a whole other talk that I've given at GitHub Universe about taking the GitHub API and using your regular API and just merging the GitHub API as part of your API and backend from GraphQL... So it looks like everything is coming from the same source, but in reality you can combine multiple sources in one endpoint.

**Kevin Ball:** Pretty cool.

**Brian Douglas:** Yeah.

**Kevin Ball:** So, as you said, it's been kind of a crazy week. Is it verboten to ask you about that? I mean, there's been a lot of discussion online, "Is this the end of GitHub as an open thing?" vs "Well, you know, Microsoft has actually been a pretty good steward the last few years..." What's the vibe from inside the building?

**Brian Douglas:** I think \[unintelligible 00:13:49.05\] Nat Friedman is gonna be our future CEO; nothing's finalized at this point... But he had a really good post at -- I think we have a short URL, it's like git.io/nat/hi. He put it on GitHub Pages, he started up a whole site... Nat is a talented developer, he has led the Xamarin team...

**Kevin Ball:** Which I've heard only good things about, by the way. I've never used Xamarin because I'm not a .NET guy, but my friends who are in .NET, they swear by it.

**Brian Douglas:** Yeah, same here. I haven't touched .NET nor know much about Xamarin, but everybody I came into contact with in the last week, who have been pinging me and texting me and telling me "Congratulations" only do nothing but rave about our new CEO. So internally, we're all very excited and we're looking forward to how we can influence Microsoft. Satya -- it's a public announcement, but he's looking forward to seeing how GitHub can rub off on Microsoft, rather than vice-versa. So we're very excited about what we can do now that we have Microsoft as...

**Kevin Ball:** ...the corporate angel?

**Brian Douglas:** Yeah, the corporate angel... Mother Microsoft is what I've been saying.

**Kevin Ball:** Yeah. Another question that's sort of more GitHub-related than GraphQL-related, and if you wanna just stay on the tech side, just push back on me, but... Something that's been going around a little bit as a controversy is the value of a GitHub profile as a resume, and the ways in which on the one hand it is a relatively open way to demonstrate competence and skills and various other things, on the other hand it unfairly biases towards those who have basically free time to invest in that... Does GitHub have a stance on this?

**Brian Douglas:** I don't know if GitHub has a stance... I know a lot of hubbers have tweeted publicly about their hiring practices, which is all the same within GitHub... Like, when I was hired at GitHub, no one looked at my GitHub profile.

**Kevin Ball:** That's a pretty powerful statement.

**Brian Douglas:** Yeah... And it's funny, because as I was doing my second pair programming interview, I alluded to my GitHub profile, and the interviewer actually mentioned "Yeah, I actually haven't seen your profile, because we don't actually look at your profile." So we love people who have lots of contributions on GitHub, and are using it actively and are part of our open source community.

\[00:16:07.15\] It's a really great way to see what other people are working on, other cool projects that maybe somebody I'm following on has contributed to, and maybe because I know them, I can reach out to them directly and be like "Hey, I saw you work on X or Y. Can you give me a mentorship or help me into that project?" But as far as hiring practice, GitHub is not gonna be the next LinkedIn. LinkedIn will be the next LinkedIn, and GitHub will continue to be GitHub.

**Kevin Ball:** And they'll both be owned by Microsoft.

**Brian Douglas:** Exactly.

**Kevin Ball:** \[laughs\] I think GitHub is a great positive signal, but it's a terrible negative signal. If you've got somebody who has an amazing GitHub profile, they're probably gonna be pretty good. If you've got somebody who doesn't, that doesn't tell you anything about them. Maybe they've just worked in the closed source world.

**Brian Douglas:** Yeah, and if I could do a shout-out to one of my interns for the summer... She actually wrote a blog post about \[unintelligible 00:16:52.22\] contribution graphs onto wood. It was part of one of her first projects as an intern at GitHub. I helped her out with that, she got help with Katrina Owen and \[unintelligible 00:17:02.21\] as well, who are both hubbers... And it's funny, because I look back at -- she printed my business card... They're business card shapes and she printed them out, and I look back at my last year, and I had two weeks off in August, and that's a proud signal for me to see that "I had two weeks off, with no GitHub contributions", and I that I can say "Okay, I had a work/life balance because I spent two weeks in London just exploring." And I think Katrina actually had the same experience too, when she noticed like two years ago when she was kicking off Exercism - or rather three or four years ago - she had nothing but dark greens... But in the last year she's got some pretty healthy days off. So it's a good testament to see "Do people really truly like work/life balance?"

But with that being said, we don't look at GitHub profiles as GitHub... So if you wanna work for us, check us out, regardless if you have a profile or not.

**Kevin Ball:** Another GitHub-related question, while I've got you... And I know you said you've been there only six months, and I'm asking you to represent the company in a lot of ways, but... One of the things that has been getting a lot of discussion over the last year or so is the complicated relationship that open source has with money, and ways of funding developers to work on open source... There are folks who are putting up Patreon accounts to try to fund their open source work, there's now this company Open Collective that is trying to provide ways to fund the project as a whole, rather than as an individual... It has been highlighted in one of our recent podcasts that GitHub has not really done very much to support that type of thing. There's no ability to do, for example, a Buy License button on an open source project, or something like that. Is that something that you're aware of? Is there a corporate policy around that? Is that something we might see more of in the future, where GitHub might support open source developers in ways of funding their projects?

**Brian Douglas:** Yeah, there's not much I could speak about on what GitHub's doing to solve the problem, within a roadmap, but I do wanna point to Nat Friedman who recently had an AMA on Reddit, and the question was posed to him, and his response -- he actually was either affiliated or started a company that actually paid for contributions outside, or something... You'll have to go back to the post; there's a good summary of his AMA out there... But it's something that actually piqued this interest, and I know it's something that's piqued a lot of interest, and I know a lot of other companies are doing really good things.

Open Collective is very successful with the Webpack community and they're doing great things. I think GitHub is really paying attention to a lot of those things, but I can't really speak on what our solution is. I think there's a lot of good solutions out there that people should really look into, and a lot of them that you have named.

**Kevin Ball:** Now, both GitHub doesn't have to worry about direct monetization as much, because there's lots of indirect ways that Microsoft can monetize off of what GitHub is doing... And anytime there's a big change, there's an opportunity for re-examining...

**Brian Douglas:** Yeah.

**Kevin Ball:** \[00:20:03.12\] As a developer advocate, I know there are lots of developers who would love you to advocate for ways to get money to open source.

**Brian Douglas:** Yeah. I'm a developer advocate at GitHub, but I'm also helping with the GitHub developer program as well, which has been in existence for a little bit, but it's still getting its feet off the ground; it's been established way before even the Microsoft inkling of the conversation started... But if you wanna be part of the GitHub developer program and you're looking to get closer to GitHub and find out more information about new API releases, changes, the whole GraphQL thing, we do workshops that we funnel directly to the program; you can sign up at developer.github.com/program. I would love to talk to with you. I'm literally doing tons of interviews in the next week with current members, and finding out what they're looking to get out of a program of this nature.

**Kevin Ball:** Anything else you wanna touch on?

**Brian Douglas:** No. I'm @bdougieYp at Twitter, and I'm at Fluent Conf.

**Kevin Ball:** Awesome. Thanks, man.

**Break:** \[00:21:04.10\]

**Kevin Ball:** I am here talking with Aimee Knight, former professional ice skater turned full stack developer. Aimee, how are you doing?

**Aimee Knight:** Very good. How are you today?

**Kevin Ball:** Life is great.

**Aimee Knight:** Good. Same.

**Kevin Ball:** So you're speaking tomorrow morning... Can you tell us a little bit about your talk?

**Aimee Knight:** Yup. So I am not super deep-diving into CSS anymore because I'm at a new job now... But I was at Warner Brothers for about two years, and I was doing frontend there, so I'm back to full stack now... But while I was at Warner Brothers -- I guess the talk is a deep dive into CSS and how the browser renders your style sheets. The back-story on that is, you know, when I first started programming, Javascript was the part that really scared me, and CSS was like "Oh, this is super easy... Just change a color here and there", and Javascript was the part that I was really scared of. But then somewhere, you know, kind of like my progression as a developer, I felt really confident with my Javascript and my ability to debug my Javascript, and like you give me a problem with Javascript, eventually I'm gonna be able to figure out a solution, and I'm gonna be able to reason about it and tell you if it's not working why it's not working... But as I got more advanced with CSS, I did not feel that way.

\[00:23:59.07\] I felt like I was just blindly throwing darts at a dartboard half the time, and when I got to Warner Brothers - really amazing designers, and they hand you something and you have to implement it, I really felt like I couldn't call myself a frontend developer, because I could implement the logic all day for the Javascript, but I just felt scared sometimes when they'd hand me these designs... I was like "Oh my god, I don't know how I'm gonna be able to do this..."

Long story short there -- also, with Javascript, I'm kind of one of those proponents for understanding the language before you really deep-dive into the framework, so I wanted to apply that same reasoning to CSS, so I figured if I really want to be able to debug my CSS, I need to understand at a lower level what's happening; so I wanted to understand how the browser is actually parsing my style sheets... So I started going into that, and then I also wanted the talk to be a little bit more practical, and common problems developers face... So that's the stuff I dug into.

**Kevin Ball:** Awesome. I'm excited to have CSS on the stage at a conference like Fluent, because I feel like in our industry it's often devalued and pushed aside.

**Aimee Knight:** Exactly. I was very much one of those developers, and when I got to Warner Brothers and some of the people that I worked with -- I gained so much respect for some of their designers, because their CSS skills were amazing... And I wanted to be able to do that as well. Just in my whole process to learning -- you know, still Javascript is my go-to and I would much rather write Javascript than CSS still to this day, which is why I'm back to doing full stack and not CSS, but... Other stuff I talk about in the talk, too - it's important to understand when to reach for CSS and when to reach for Javascript, because the browsers are implemented in such a way that although you can do the same thing in Javascript, you're gonna get a lot better performance if you use CSS to do certain things. That's another thing - it pays to understand how to do these things, because it's the most efficient way to do them.

**Kevin Ball:** Yeah, absolutely. At some point Sarah Drasner tweeted about the team that had reimplemented position absolute with 2,000 lines of Javascript...

**Aimee Knight:** \[laughs\] Yes, yes.

**Kevin Ball:** Reimplemented a buggy version of position absolute...

**Aimee Knight:** Yeah, exactly.

**Kevin Ball:** So yeah, it really helps to understand your tools, and I think CSS often ends up being undervalued because many people coming into development are used to thinking about things logically, rather than visually...

**Aimee Knight:** Yup, yup.

**Kevin Ball:** ...and it's a language that's really designed for the visual, which has different constraints and different design choices.

**Aimee Knight:** Yeah, and I know for me, you have to think about CSS differently than you think about Javascript. When you're writing CSS, sometimes you do want things to be global, and you do want inheritance, and you want the cascade. With Javascript, you usually want to try to isolate things... So you have to think about it very differently.

**Kevin Ball:** Yeah. There are a few isolated cases, having to do with team size and project size, where completely isolating your CSS makes sense... Because you don't want one person on this 100-person team to break something that someone else on this 100-person team implemented, and what have you... But most people are not in that situation... And visual consistency is important, and what the cascade in this global vision can give you is that kind of visual consistency.

**Aimee Knight:** Yup. I guess another cool thing too is for people -- and there's a lightning talk that I want to try to get to when we're done, and they're gonna go into more of something called Houdini... Have you heard of this?

**Kevin Ball:** Oh, yeah.

**Aimee Knight:** \[00:28:04.17\] I have a slide or two about that, but... You know, that's another thing -- I think CSS is getting more and more attention now, and it's becoming "a little more cool" with stuff like that, where you can more low-level and play around with things, so I'm excited about that, too.

**Kevin Ball:** Yeah, the idea of being able to polyfill CSS perfectly is super exciting.

**Aimee Knight:** Yeah, and implement new things, too... We have the ability to do that in Javascript, but we haven't had the ability to do stuff like that with CSS.

**Kevin Ball:** Yeah, one can imagine a Babel-like project built on top of Houdini for CSS, of "Okay, this is how we're gonna push this spec forward", and you implement it before the browsers do.

**Aimee Knight:** Yeah, exactly. We'll be able to give them feedback, and say what's valuable, what maybe isn't so valuable, and stuff like that.

**Kevin Ball:** Awesome. So you said now you're doing full-stack... Is it all Javascript?

**Aimee Knight:** It's not... I lean more toward Javascript. It was a banking application - more like a startup... So I work for a place called Build Technologies, and the application is in the fintech space, which is finance... And so we integrate with banks. What we do - if anybody has ever taken out a construction loan or renovation loan, the process for that is very different than if you just get a loan for like a mortgage on your house, or something like that. The construction process - you don't get the money all up front; they release funds based on inspection progress, so you get X amount of dollars...

Banks in the past were doing this all with Excel spreadsheets and stuff like that. They entered the space 3-5 years ago, and have an automated way for people to do this, and... I've worked on a couple of startups here and there, and a lot of people work for startups, and sometimes I will say "You drink the Kool-Aid or you don't", and I've always been envious of developers who have drank the Kool-Aid where they're at, because I've been at various startups and I haven't drank the Kool-Aid... But where I'm at now, I've definitely drank the Kool-Aid. I am pretty passionate about what we're doing, and excited about what we're doing.

But to answer your question - on the frontend we have a lot of legacy Javascript, jQuery, some very old stuff (a framework) called CanJS, and we're at a very old version of it... But we're writing new stuff in React, and then we have some stuff in Node on the backend too, and some stuff in Python... Honestly, I took the job because I really love my teammates, and that makes all the difference in the world. Then two, it's actually been really interesting, and dare I say fun to work in more legacy Javascript like that.

I make the joke, it's kind of like playing the game KerPlunk, \[laughter\] where you have to very carefully pull the stick out so all the marbles don't fall all over the place... Because the React code has tests, and we're starting to write end-to-end tests for like the legacy Javascript, because we have this one method, and I think I posted a picture of it or something on Twitter -- the amount of complexity is like 120...

**Kevin Ball:** Funsies...

**Aimee Knight:** Yeah... So all that to say, I've actually kind of enjoyed working in the codebase, because you have very interesting constraints there. If you need to go in there and mess with this \[unintelligible 00:31:57.24\] is like 120, and you need to go in there. I'm a very precise person and I enjoy that, and so you have to really take your time when you're in there, understand what's going on, and you kind of have to be a little bit careful about what you're doing... It's been fun.

**Kevin Ball:** \[00:32:17.06\] When I look at the industry at large - the sexy stuff is all the brand new projects using all of the new frameworks and what have you, but how many codebases... I mean, this stuff changes, the cutting edge changes every year or two; nobody can rewrite their apps every year or two, so the vast majority of our code is legacy code.

**Aimee Knight:** Yeah. I don't know, I really enjoy it. There's actually a consultancy startup in -- I'm not sure where they're based in; they're called Corgibytes. I listened to one of the developers there do a talk a while ago, and they do really legacy stuff... The process that he describes seems a little bit like what we're going through, and it's been very interesting. I've kind of enjoyed it.

**Kevin Ball:** Yeah. So I'm curious to poke a little more, because I do training where I work with teams to figure out how they connect from their legacy codebase to the new hotness, whatever it happens to be... And sometimes that's as much as like "Let's teach you how to refactor your massive single style sheet into Sass, and use a frontend build system for the first time" and things like that. So when you got there, were they already using React for some pieces, or have you seen how that process has evolved?

**Aimee Knight:** They had some stuff already, but very minimal. As I've been there, we've been doing more. The process that they went through - and this was before I started - a little bit while I was there... Kind of the bridge that we were using is TypeScript. They hired a consultancy to convert everything over to TypeScript and start integrating -- so we have a portion of the application that's still just plain, old jQuery, a portion of it that's Can, and now the new stuff in React... So TypeScript has kind of been the bridge to get us into more modern Javascript, even in the legacy stuff, and then also the hope there is without testing that at least we have some IntelliSense now, and we can start writing interfaces and stuff, so that it's a little bit easier if we need to go and clean stuff up... You know, maybe if something is not being used, or what needs to get passed to it, and stuff like that. So that's been a bridge, and I've enjoyed working in TypeScript. It's been pretty fun, too.

I think too it's a good thing for people -- you know, you don't feel too far behind; you're working in an older application, at least you're getting to write some newer Javascript that way, even if you're using an older framework.

**Kevin Ball:** To go in a different direction, I am a little fascinated by your story of coming from being a professional athlete, essentially...

**Aimee Knight:** \[laughs\] Sure, yeah.

**Kevin Ball:** ...and I was looking at your website... It wasn't that long ago. You went through a bootcamp in 2014, and now you're speaking at conferences, keynoting, speaking on a podcast, JS Jabber, all sorts of stuff... So one, what has that process been like for you? And two, for other folks who are looking to get into the industry or just getting started, what are your thoughts and recommendations?

**Aimee Knight:** Yeah, I sometimes get goosebumps about it, because it was one of the best decisions I've ever made, and it's absolutely -- I know Tracy Lee is going to give a talk about this... It has changed my life in so many different ways and so many good ways. But the back-story on that, for people who haven't heard - so yeah, I've spent the majority of my life as a competitive figure skater, and I went to college, but the plan was kind if just that I was gonna coach for the rest of my life... My parents did not really push me too hard academically, and I thought, you know, "Yeah, I probably will just coach..." This was my life.

\[00:36:17.23\] I traveled around competing, and I made it really far, but -- my junior year in college is when I kind of thought, you know, I had been through so many injuries, and I just kind of wanted to do something very different than what I'd done all my life... But at that point it was too late to change majors. So I finished out what I was doing, and I started working for an advertising agency, so I ended up doing marketing type stuff, and that's how I kind of got turned on into programming.

There was a developer that I was working with, and the story really was that I was doing marketing/project management; it was a very small agency, so we'd wear a lot of hats... And we had our won site which was written in ExpressionEngine, and we had changed addresses, and the phone number had changed, and I got tired of asking the developers to go in and update it... And we couldn't actually change it like just in the CMS portion, we actually had to change some stuff in the code... So I went home one weekend, I thought "I'm so tired of asking this... I'm gonna figure out how to do it myself." And I did that, and I was hooked. I had to make the changes on the live site, but I was absolutely hooked.

So a couple weeks of that, I started going back to school for a second bachelor's degree, but just not going fast enough... I started going to meetups and talking to other developers. The stuff that I was hearing at the meetups they had no clue about in school, and so that's when I decided to do the bootcamp route. I went to a six-month one in Nashville, and I was one of the very first cohorts; I was cohort 4. I really got in at the right time, I think, and it has changed my life in so many ways... Whether it be able to -- one of the very empowering things for anybody, not just a woman... But to be a woman and be able to support myself - there's so much freedom in that. I've just bought a house...

**Kevin Ball:** Awesome! High five!

**Aimee Knight:** Thank you. \[laughs\] Like, being able to support myself in these kinds of ways is incredible, and amazing... But that's just kind of like the small part. It has changed kind of the way I view the world. I love our community and all the different people in it, and it's changed the way I think about problems and think about the world, because of just the way I break things down, kind of question things, and not always take things at face value, and really dig into them...

Another part too is I skated for so many years and I learned in my twenties that my personality just kind of thrived on having something I'm passionate about... So that was another thing. After skating, I knew marketing was not cutting it. I needed something to really dive into, something beyond just like a 9 to 5, and programming did that for me, and it still does. I love it.

**Kevin Ball:** That's awesome.

**Aimee Knight:** I just feel super blessed. Like, how many people get to do something they love, and they get paid to do it, it's their job...? Yeah, it's awesome.

**Kevin Ball:** \[00:39:53.27\] Absolutely. I think the tech industry and programming have certainly been very good for me in my life, and one of the reasons I'm now doing more teaching and training is I wanna enable that, because it's one of the few jobs that you can get right now where you can come in without a degree, you can self-teach or go through one of these bootcamps...

One thing that I've seen recently that I really love is this new thing Lambda School that Austen Allred is doing, where they don't even charge you up front. They only charge you if you end up in a job making at least 50k a year, and then it's a percent based on your income, so it's guaranteed to be affordable.

So you can come in, you don't have to go through a degree, you can self-teach or go through one of these bootcamps, you can get yourself a solid upper-middle class income, sometimes even better, you can do it from anywhere...

**Aimee Knight:** I'm always very careful... People who wanna get into it -- I'm very cautious of making sure you get into it for the right reasons. It's very much a career - especially in web - where you always have to keep up on what's going on... Somebody gave me the advice, and take it for what it's worth, but I think there's a lot of truth to it - be very careful about moving into the industry if it's not something that you would find yourself doing as a hobby, too. Like, you need to take a break and you don't want it to consume you... But it moves so fast that -- I'm very careful how I say that, but...

**Kevin Ball:** Exactly. Not everyone has the luxury to be doing that type of thing as a hobby.

**Aimee Knight:** Yes, that is very true, too.

**Kevin Ball:** I think we exclude a lot of people if we say you've gotta be super-passionate about it to do it. It is completely legitimate to do this as a job, but be aware that you're gonna have to invest a lot of time keeping up and learning. So you can do that because you're passionate about it, and that's awesome, you can do that because that's part of what you signed for for a job... You do need to be aware of it, that that is something you get in this industry.

**Aimee Knight:** Yeah. Maybe it's like listening to a podcast on your drive-in, or on your commute in, or something, but... Yeah, just those little things. You've gotta be aware that it's not --

**Kevin Ball:** It's not one and done, like "I did my studying and now I can work the rest of my life, doing it..." - no, it's a constant effort of learning.

**Aimee Knight:** Yeah, and if you're that kind of person that thrives on that, I think it would be a great career.

**Kevin Ball:** Awesome. Anything else you wanna highlight or talk to? I know you mentioned you're doing some stuff with podcasting... We love podcasting.

**Aimee Knight:** Yeah, so I listen to The Changelog... If anybody wants to check out the Javascript Jabber Podcast - I do that, too. Check it out.

**Kevin Ball:** What kind of stuff do you cover? I mean, Javascript, obviously, but...

**Aimee Knight:** All kinds of Javascript. Obviously, it's a Javascript podcast, so we try to focus on Javascript, but we sometimes talk about soft skills stuff, and we'll talk about tech in general... I will say this too, my \[unintelligible 00:42:53.26\] are open because being somebody who entered into this field, I got so much help from so many people... I'm just eternally grateful to them. Sometimes I think it can be very intimidating as a new person to go to a forum, or something like that... So it may take me a while to get back to people, but feel free to shoot me an e-mail or a Twitter DM or something like that and I'll do whatever I can to try to personally help you. It's not a scalable solution, so like I said, it takes me a while sometimes, but I've been an intimidated person before, and sometimes it's that personal touch that people need.

**Kevin Ball:** That raises actually a really good question - another conversation we were having is -- so we now have a lot of these bootcamps and things that are really good at getting people to entry-level, but the growth path from entry-level to mid, senior tech lead, something like that is much fuzzier...

**Aimee Knight:** Yes. \[laughs\]

**Kevin Ball:** As I said, you seem to have been doing quite well at it. You're coming out and speaking at talks, you're keynoting places, you're on the podcast... What are your recommendations for folks who maybe they've gotten into the industry, they've been there for a year or so, and they're trying to say "How do I get to the next level?"

**Aimee Knight:** \[00:44:09.18\] Man, that's a hard thing, and I always preface advice I give with "This is what worked for me. I don't know that it will necessarily work for you." There's a million different ways to go about things, but I've never been really focused on mid, senior, stuff like that. I will find something that I'm excited about, and I will dive into that, and that's how I progress. I am very much of the "junior dev for life" mentality.

We were talking about you've gotta be careful not to burn yourself out... I'm in it for the long haul, so I try to keep a "slow and steady wins the race" mentality. That would be my advice: slow and steady wins the race, stay excited, guard yourself so that you don't get burned out, so you can stay excited and you can keep progressing.

**Break:** \[00:45:13.16\]

**Kevin Ball:** I am here with Bryan Hughes, technical evangelist from Microsoft, @nebrius in all things online (Twitter, GitHub etc.) and long-time open source contributor, primarily in Javascript. Bryan, how are you doing?

**Bryan Hughes:** I'm doing pretty well, thanks for having me on.

**Kevin Ball:** You bet. So you gave a talk this morning...

**Bryan Hughes:** I did.

**Kevin Ball:** Can you tell us a little bit about it?

**Bryan Hughes:** Yeah, so the talk was an introduction to TypeScript. TypeScript is something I've been using for about two-and-a-half years now; not surprisingly, I started using it when I first started working at Microsoft... Before that, I worked at a series of startups; I've been doing Javascript for a long time, but just not TypeScript... Although back in the day, before I graduated college, I was a C++ developer. So I started on C++, I came from that static typing world, and then of course I moved to Javascript, and there's a lot of things I really liked about Javascript even early on... Well, once I actually got to know it, as opposed to what I had heard from other people who were kind of ragging on it.

Once I actually got to know it, I was like "There's a lot I really like about this...", but I missed static typing. That was the one thing that I didn't like. I felt like I had lost the safety net that I was so used to... So I was just immediately drawn to TypeScript whenever it first came out, and when I moved to Microsoft, I had a chance to actually use it in production and see the best practices, the proper ways of using it, not just little Hello, World and things like. I was like, "This is really, really great. I love this!"

So yeah, I've been talking about it in addition to using it. My talk today was titled "TypeScript in Practice" and it was sort of an introduction to TypeScript the way I wish that I could have had it back then. I talk about the language, some... I don't go into a lot of detail, but I talk about it some, and more importantly, I talk about all the other things, all those other considerations and questions that we come up with whenever we think "Should we use a language?" such as "How do I incorporate external code? How do I use it in React with Webpack? How do you get all those integrations stuff? What are the best practices?"

**Kevin Ball:** Yeah, all the nitty-gritty guts that go into not just doing a tutorial, but using this thing for real.

**Bryan Hughes:** Yeah, yeah.

**Kevin Ball:** Nice.

**Bryan Hughes:** I think it went well, I got a lot of good feedback on it, and it's a topic that I'm really passionate about. I really love TypeScript.

**Kevin Ball:** Yeah, one of the things I love about TypeScript - and I'm not really a big TypeScript user - is the way that in contrast to some other attempts to add typing to Javascript, it is really a superset of the Javascript language. So you can drop Javascript in and it just works. It makes it a lot easier to migrate and to just start using.

**Bryan Hughes:** \[00:48:16.04\] I think that's really one of TypeScript's greatest powers - it is a superset \[unintelligible 00:48:19.06\] I think that design decision came very early on, of course, and I think it was informed by a couple of historical events. No technology ever exists in a vacuum... And one of the things about TypeScript is it was one of the first compile-to-Javascript languages to become popular after CoffeeScript, and I think that's really important.

CoffeeScript - it's easy to criticize a lot of its design decisions. I was personally never a big fan of it, but it was really important, and I think we should give it a lot of credit in that it sort of invented the whole compile-to-Javascript phenomenon. We wouldn't really have Babel the way it looks today without CoffeeScript, because it pioneered it. But it did, of course, have a number of drawbacks, I think the biggest one of which (as you were hinting at) is that it was an all or nothing. If you wanted to use CoffeeScript, you had to rewrite your entire codebase, and that's just not very attainable. I think that was one of the big complaints, especially when most people actually started using it.

**Kevin Ball:** And the \[unintelligible 00:49:20.08\] but it was still valid syntax. So you'd do it, you'd think it was gonna work, and you'd spend an hour or two or three figuring out "Why the heck is my code..." - not that I ever did this, or anything... \[laughter\]

**Bryan Hughes:** Oh, of course not, of course not. But I do also seem to recall that it was technically an ambiguous grammar too, which is something you don't normally see in languages...

**Kevin Ball:** Yeah, problematic.

**Bryan Hughes:** So the designers of TypeScript definitely saw this context, but also I think coupled with the context of Microsoft in general, and how we are now versus how we used to be. Microsoft has a very long and questionable history, especially in the web world... And you know, we're very conscious of how we're perceived now, and I think there's a lot of effort from a lot of us to try and (I guess, in a way) right the wrongs of the past... So we're very conscious, not just of the technology we've created, but how it's gonna be perceived, and what its role and place is gonna be.

So when we were looking at designing TypeScript -- we're very conscious of our own history with the web, and also we're just paying a lot of attention in general to how users actually perceive this technically, but also kind of socially... Given that people have a lot of feelings about CoffeeScript, and we wanted to avoid those comparisons. We also wanted to avoid the comparisons of like "Oh, Microsoft just wants to bring C\# to the web" or something like that. \[laughter\] And TypeScript is not C\#. Especially when you dig into it, it's very different than C\#. I actually see TypeScript trip up C\# developers about as much as I see them trip up vanilla Javascript developers... Kind of like when both sets are just kind of starting to learn that.

**Kevin Ball:** Right.

**Bryan Hughes:** But I do think it's a really great language, and once you get over an initial learning curve, it really accelerates productivity, which probably sounds a little contradictory... Most people think "Oh, static typing means I have all this overhead... There's so much more work I have to do now", and it may be a little bit true at first...

The analogy I always like to make is that's a lot like unit tests. Unit tests are overhead, right? They are that. We can talk about it in all sorts of different ways, but it is overhead at the beginning... But once we get them in place, we save so much time down the road that it actually does save us time. We're really not adding work, we're shifting work from the debugging phase more to the design phase... And I think TypeScript does the exact same thing. We do a little bit more work up front, but it saves us work down the road.

**Kevin Ball:** When we're especially seeing the rise of typed languages for web development as more and more complexity moves to the front end, and moves to things that are being developed in Javascript or Javascript-like languages, compile-to-Javascript languages, things like that... We're seeing that with that additional complexity, having some additional support can be pretty useful.

**Bryan Hughes:** \[00:52:02.04\] Yes, and I think VS Code is a really good example of this. TypeScript was in a way kind of also developed to really help out the VS Code team... Because that codebase is actually a lot older than VS Code itself. It started off as an online editor called Monaco. I wanna say it was maybe part of the Azure portal; I don't actually quite remember, but I know it was part of our online property, and not actually -- it wasn't originally developed to be a desktop editor. It was when Electron came around that we were like "Hey, wait, we've got this really good online editor... I think we could do things here", but there was so much more that had to be added, and as the project kept growing, it was kind of becoming unmanageable. So we brought TypeScript in, and now it's back to being a really manageable codebase.

I wanna say it's about half a million lines of code, something like that these days... It's not a small codebase at all, and I think once you get to that size, not using stating typing is unattainable.

**Kevin Ball:** Yeah. Well, I saw online - I don't know if this just came out as being public knowledge or not, but the whole Office 365 suite of products is being rewritten in Javascript using React Native, for different devices and things like that... And I would assume when they say Javascript, they probably mean Typescript.

**Bryan Hughes:** I would assume so, as well. I have no inside information on that. Microsoft - we're a big company, and a lot of things I tend to learn on Twitter, the same as everyone else.

**Kevin Ball:** That's where I learned it...

**Bryan Hughes:** Yeah, the same thing with the GitHub acquisition. So I have no inside information on this, but I would be pretty surprised if we didn't use TypeScript for it.

**Kevin Ball:** I wanna go in another direction... I saw in your -- I don't remember if it was your website or your bio, but that you've done some stuff in the IoT world, and I'm gonna guess that was with Javascript or TypeScript...?

**Bryan Hughes:** It's a longer story than that, but the answer is yes, for the last several years. I actually majored in electrical engineering in college, so I started doing hardware in like 2001, kind of thing... So well before the term IoT existed, and before even the Arduino existed, kind of thing... So I didn't start doing Javascript on hardware. Whenever I graduated though -- I graduated with a PhD in 2010 (PhD's take a while), and 2010 was not a particularly great time to be in \[unintelligible 00:54:12.23\]

**Kevin Ball:** You don't say...

**Bryan Hughes:** Yeah, right... \[laughter\] There was this whole recession thing that happened...

**Kevin Ball:** Yeah.

**Bryan Hughes:** So it was actually pretty tough to find a job, especially since I didn't go to a top ten school. So I ended up working for a startup, doing pure software. I was actually writing Java. During that, we ended up having to do some Javascript work as well... I actually remember, this was an eight-person startup kind of thing, so we sat in the room - because the entire company could fit in one room - and we were like "Alright, so we need to do some stuff with this whole new HTML5 thing people are talking about... Anyone know Javascript in the room? Anyone...? Anyone...? Alright, new guy, you get to do it." \[laughter\] So that's kind of how I got started. So I was very much thrust into the software world -- or the pure software world, I should say.

**Kevin Ball:** And just to ask, your PhD was also in electrical engineering?

**Bryan Hughes:** Yes, it was. I've been coding since the late '90s, so I'm definitely not new to software, but I didn't expect to go into pure software. But I did for a while, and then I went to JSConf U.S. in 2013, and that was a pretty transformative conference. There were a couple people from the Johnny-Five project - for those who are unfamiliar, it's a Node.js robotics framework for \[unintelligible 00:55:23.10\] that's totally a cyclical definition...

**Kevin Ball:** Javascript robotics.

**Bryan Hughes:** Javascript robotics.

**Kevin Ball:** \[whispers\] Robotics in Javascript...

**Bryan Hughes:** Yeah, and this was like the early days of the project... I think the project was less than a year old at this point, but I was like "This is awesome!" I did stuff in like a four-hour workshop that would have taken me two weeks in Assembly, which is what I did in college. That kind of drew me back in, so I got involved as a collaborator on the Johnny-Five project; I maintained Raspberry Pi support for it. The Raspberry Pi was the first platform supported that was not part of the initial set that Rick Waldron created, too. So I guess that's kind of my biggest claim to -- well, I don't know if it was my biggest claim to fame, but a claim to fame, in any case...

**Kevin Ball:** You are the Johnny-Five Arduino supporter, is that what you're saying?

**Bryan Hughes:** Raspberry Pi.

**Kevin Ball:** \[00:56:12.07\] Sorry, Raspberry Pi.

**Bryan Hughes:** Yup.

**Kevin Ball:** \[unintelligible 00:56:12.20\]

**Bryan Hughes:** \[laughs\] Totally understandable.

**Kevin Ball:** So you are the Raspberry Pi Johnny-Five supporter, to this day?

**Bryan Hughes:** Yes, to this day.

**Kevin Ball:** And you did the original implementation as well?

**Bryan Hughes:** I did, I did.

**Kevin Ball:** Many people have to thank you. \[laughter\]

**Bryan Hughes:** Yeah, it's really cool to see how many people have used the software that I wrote, and all the cool stuff that they've created with it. There's so much creativity out there. If you know Tomomi Imura, just as one example - she used a Raspberry Pi and Johnny-Five (my software) and she created this automated cat-feeding system that had cat facial detection and all those other really awesome stuff, and I'm like "That's amazing...!"

**Kevin Ball:** That's pretty cool.

**Bryan Hughes:** So it's really cool, especially in the IoT world, working on this kind of frameworks and how we can enable people to do so much cool stuff, and especially a lot of really cool art.

**Kevin Ball:** Yeah. I'm kind of curious what you see happening in that direction, because I feel like IoT has gotten a lot of buzz, and it's very accessible in a lot of ways now. You can get a Raspberry Pi - I don't know what the current going cost is, but it's $50, something small... You don't need to know anything but Javascript, because you can run it with Johnny-Five, and just start making stuff. So where is this gonna go next?

**Bryan Hughes:** It's an interesting question, I think... We're definitely in a hype phase of IoT. It's actually a little different than the hype that I have seen for other technologies in the past. I very much remember the HTML5 hype bubble, and \[unintelligible 00:57:45.01\] was a hype bubble... You know, cryptocurrency may be kind of a similar hype bubble...

**Kevin Ball:** Hm...

**Bryan Hughes:** I'm not gonna comment one way or another, I don't know it deeply enough... \[laughter\] And I know people have a lot of very strong opinions.

**Kevin Ball:** There are some strong opinions there.

**Bryan Hughes:** Yeah. But you know, there's definitely kind of this hype bubble. I don't really see the hype around IoT as a bubble though, and that's because the underlying tech and the underlying market is actually very different than the others. IoT as a market - people actually creating products - is very old; it's not a new thing at all. People have been doing it for decades, in fact. It's just the way we do it, and more importantly who is the ones doing it - that's what's changed... As hardware has become a lot more accessible, you don't have to be an electrical engineer to do it anymore.

Electrical engineers have been doing this kind of work for so long, so the market has already been proven with IoT. We know that there's a market for this. It's just a matter of making it easier to do and bringing in new developers, so that we can create more products. It's not necessarily that we can do new things now... I mean, a little bit - the cloud helps with that - but I think that with IoT it's basically old-school hardware with new cloud things... Which is really the same thing that we're seeing in mobile, and web, and everything else.

Cloud is nothing new exactly; we've had servers for a long time. What it does though, and why it's powerful, is that it makes it easy.

**Kevin Ball:** Right, and cheap.

**Bryan Hughes:** And cheap, yeah. So lowering that barrier to entry is super important, because that's where we start to get new ideas built on top of it. But I think IoT is the exact same thing... It's just making this thing that's existed for a long time easier. And yeah, I think the Raspberry Pi, Arduinos and all that play a big role, but also things like Johnny-Five, and the fact that you don't have to write this in C anymore, or Assembly even.

**Kevin Ball:** Right. You have a little bit of a web development background, suddenly you can get started, start playing with it.

**Bryan Hughes:** Yeah.

**Kevin Ball:** I wanna touch back to something related to kind of how you got into software, because one of the things I love about our field is that people can come into it from all sorts of different backgrounds. You don't need to go and study computer science for four years to get into software, so can you talk a little bit about your trajectory, getting into the software industry? It sounds like you've been coding for quite a while, but that wasn't what you studied, so how was it getting in, how was getting going, and what's kept you around?

**Bryan Hughes:** \[01:00:02.06\] It's definitely been a trajectory... It's interesting how reflecting on it now I see how market-driven I was, in a lot of ways. Back when I was in high school - I took AP Computer Science back then, so I had formal computer science training early on... But I was like "Well, okay, I really like this..." I actually also thought about going to the theater because I was really good at technical theater, but I didn't wanna be a starving artist... Both of my parents are musicians, so I kind of know...

**Kevin Ball:** I actually know a surprising number of musicians who code to make money to support their lifestyle as musicians.

**Bryan Hughes:** Yeah, I know... Like, if I'd seen this 15 years later, it might have been a different decision. But it was a little harder to get into coding back in the '90s. But the other thing was -- so I graduated in the summer of 2001 from high school, which means I started looking at college at the fall of 2000, spring of 2001, and I'm interested in coding; I really liked coding.

**Kevin Ball:** But that was the death of the bubble... "What are we gonna do...? Nobody's gonna study computer science... You'll never be able to get a job..."

**Bryan Hughes:** Exactly. It was like "Is this even gonna be an industry in five years?" I had no idea. So I was like "That would be the worst idea ever, to go into computer science in 2001." So I was like "Well, I really like my physics class", so we kind of went over some basics of electrical engineering... And there was also theater, but I decided "No, I want a more stable career", so electrical engineering was it.

**Kevin Ball:** Nice. And then going along, 2010, yet another recession... Man, you've had the best timing.

**Bryan Hughes:** I know, right?

**Kevin Ball:** And you ended up at a startup?

**Bryan Hughes:** I did. Actually, I had two competing offers at the time. One was from Intel, and the other was the startup that I actually ended up working at. And I decided to try the startup thing; I was kind of interested in it. This startup was called Particle Code, something that I think no one ever knows. We had a beta product when we were acquired, type of thing. But it was a really cool product.

It was a 2D isomorphic gaming engine, cross-platform. So think Unity, but for 2D isomorphic, and specifically on mobile. And mobile in 2010 was a very different world, you know? Android and iPhone were the big up and comers, so we supported them. That was like one of our big things, like "Hey, you can get onto these new things where there's not much support, but you can also support Blackberry and Symbian, and kind of what at the time was your base market." And the way we did this was you would write it in Java - a subset of Java; we supported the whole language, but not the whole JDK.

**Kevin Ball:** Right.

**Bryan Hughes:** Then we had our own SDK as well, so you'd write to that in Java, and then we'd cross-compile it to whatever language the platform was on... So to Java in a couple of cases, but also to Objective-C, C++... And eventually we were like, "Well, mobile HTML5 as well."

**Kevin Ball:** One of the things I love about startups in particular as a way to get into the industry is if you're in a startup, there are no barriers. If you're willing to do it, go do it, because there's always more to be done than there are people to do it.

I kind of got into the industry in the same way. I studied physics in college, got out and said "I don't know what the heck I wanna do, but it sure isn't physics..." I ended up at a startup, and I was doing basically testing, but they had software, and I was able to first write test harnesses, and then start mucking around, because it's a startup. Anything you're willing to volunteer and sign up to do, you can learn to do and go do it.

**Bryan Hughes:** \[01:03:12.16\] Yes, and no one's gonna complain, because that's less work for everyone else to do, and everyone else has so much work at startups... It's kind of a cool thing; that's another thing I love about it - we end up doing all these different things, and we really kind of like stretch ourselves a lot... We're not just like "Oh, I am the Node.js API person. I don't do database stuff..." That's not an option. So it really kind of pushes us to learn, because we have to; if we don't do that, the startup goes under.

**Kevin Ball:** Absolutely. It's a great way to break into the industry.

**Bryan Hughes:** And I think a very valuable lesson, too. I think there's a lot of valuable lessons to be learned at big companies as well, but they're a different set, to be sure.

**Kevin Ball:** So for anyone looking to get started in -- let's pick either IoT/robotics or TypeScript, where do you recommend they start out?

**Bryan Hughes:** So far, on the IoT side, definitely Johnny-Five. You can go to johnny-five.io, and there's the API docs and all that. We're really good about documentation for that project. Documentation has always been a really big goal of ours, because especially when we were starting out, we were targeting beginners, people very new to hardware, possibly even new to coding in general... We've put a lot of effort into our documentation, so there's a lot of examples there, there's documentation about all the boards, some tutorials, and guides, and everything else. So that's a really good place to start.

**Kevin Ball:** Are there online simulators, so if I don't have a board, I can still start playing with it?

**Bryan Hughes:** That one's a little trickier. You can do it in Johnny-Five if you know how to muck around... Essentially, reusing our test harness, but it's not particularly interesting. I would say the best thing to do is to go get an Arduino. They actually do make some pretty affordable kits, where you get an Arduino, plus a couple of censors for maybe like $50.

**Kevin Ball:** Awesome.

**Bryan Hughes:** And also, I just recommend it especially for hardware; the cool thing about hardware is that it's tangible. There's a physical thing, and you can touch it and feel it. Getting an LED to light up is the Hello, World of hardware, but it's so much cooler than seeing some text in a console. It makes the typical software Hello, World so boring.

**Kevin Ball:** You'll never go back...

**Bryan Hughes:** You'll never go back, yeah. So I definitely recommend getting hardware, because there's this tangible factor to it that makes it real.

And as far as TypeScript, TypeScriptLang.org is the main website. It's got a lot of pretty good information. Also, some of the key folks working on it, whose name is escaping me all of a sudden -- but he has a blog... Daniel is his name; I can't remember his last name. But he has a blog, and he is talking about it a little more in depth as well, so that can be a good location.

I think there's some books out there as well... I actually don't learn well from books, so I don't really keep track of what the current books are, but I think there are some O'Reilly books out there.
