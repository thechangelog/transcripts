**Jerod Santo:** Hey-hey, you know what time it is... It is JS Party time. I am your internet friend, Jerod, and I'm joined by my friend, Kball. What's up, man?

**Kevin Ball:** Hello, hello. Enjoying summer, and glad to be here.

**Jerod Santo:** Happy to have you, as always. We have a special guest with us today, it's Jess Sachs. What's up, Jess?

**Jessica Sachs:** What's up?! Glad to join the party.

**Jerod Santo:** Happy to have you at the party, and shout-out to our new friend, \[unintelligible 00:02:30.12\] Pretty cool. Jess, you are a staff engineer at Cypress, you lead the development of Cy Component Test Runner, you're a Vue team member, you're a maintainer of Faker.js, you're doing all sorts of cool stuff. Where should we start with you?

**Jessica Sachs:** Let's start at Faker.

**Jerod Santo:** Okay.

**Jessica Sachs:** I just got off stand-up, so it's fresh... \[laughter\]

**Jerod Santo:** Alright, let's start with Faker. This thing goes way back. The .js doesn't go back so far, but I mean, Faker is a library that was, I think, written in Perl, there's a Ruby version, there's probably a version for Python... This idea is one that pretty much every ecosystem needs, and you are one of the maintainers on the JS version, which is why we want to talk about that. But let's talk about the idea of Faker in general, like fake data. Why? Why would you want this?

**Jessica Sachs:** So fake data, why - because we want to test our code with realistic data, because we're lazy. And because Faker is really just a giant dataset with little methods to get at the dataset. It's a pretty simple idea. It's great for things like performance testing, load testing, and then I use it for my component-driven development workflow, if I'm working in tools like Storybook or Histoire or Cypress Component Testing. So that's why I became acquainted with it, is when I was building components and I wanted them to look realistic, I started using Faker.

**Jerod Santo:** Now, you didn't write Faker. You started using Faker, and now you're a maintainer of Faker. There was like a big hoopla around Faker...

**Jessica Sachs:** There was a hoopla.

**Jerod Santo:** \[04:07\] ...back in, I think, January?

**Jessica Sachs:** Yeah, January... Was it 4th? Yeah, I think it was January 4. It wasn't January 6th; that day would be cursed. But yeah, I had just taken a break from Cypress, where I worked full-time; I kind of burned out for a minute... And I opened up my laptop and it was like somebody DMed me. He goes by Shini -- Shinigami. He DMed me and was "Hey, did you hear about this?" And Marak had deleted the repository of my favorite library. I used Faker all the time, and I was "Oh, no. What am I going to do with all this free time I have? I guess I could be part of this effort to make sure this package doesn't die, so my workflow can live." So I went ahead and got involved with the community maintainership that surrounded Faker. I don't know how deep -- where do we want to go with this? It ended up being on top of Hacker News, which is crazy.

My involvement - let's tell the story, I guess. There's a company called Shepherd, and they had the most recent fork of the repo. And they decided that they were going to become the latest, because they needed to continue to use the package. They had the latest snapshot that existed before Marak deleted it, and we went ahead and added developers to the project, and added a roadmap, and fixed a bunch of issues. Yeah, it was quite an exciting time.

I was responsible for all of the public communication, and reaching out to Open Collective. It was like such a sensitive topic. We were getting issues -- just pounded with issues being like "This fork is illegal. You guys should be ashamed of yourselves. This is not what open source is supposed to be." I had to lock a lot of issues. But I don't know, dealing with sensitive topics is something I think I'm very good at. It was very interesting. It was a very interesting two weeks, I would say.

**Kevin Ball:** So there is sort of this really interesting question of you have a package that has been owned by someone for a long time, and they've been using it... What was the license on the original Faker?

**Jessica Sachs:** Sorry, it was MIT.

**Kevin Ball:** It was MIT. So there's no -- they've explicitly said, "Take this and do what you will with it." And then they tried to remove it. Like, what is --

**Jessica Sachs:** I didn't call my lawyer. We didn't get that far. But one of my best friends was an assistant attorney general, so it was always in my back pocket. Like, if I ever had to do it, I would call Diane and be like "Diane, I've got a problem." And she's a huge nerd. She's a huge, like Magic the Gathering nerd, and we would have sat down and talked over it... Which gave me comfort, because we were getting a lot of threats... And you know, I reached out to Marak, and he just responded with a GIF. That's all I got. I'd never talked to him before in my life. But yeah, I reached out to him, got a GIF back, and I was like "Okay, very nice."

**Jerod Santo:** What was behind the threats? Like, not what were the threats themselves, but why were the threats coming?

**Jessica Sachs:** I don't know. It's a very interesting philosophical question. It's like, the people that were doing that were generally in the payer/maintainers camp. When I say payer/maintainers camp, they believe in open source. And here are this team of eight really accomplished open source developers - like, I'd been professionally writing open source code for an open source company, for Cypress, for two years at that point. And I had a Vite core team member with me, and then two other team members at the time... And everybody had experience in open source. Somebody would say something like "Inexperienced, random people just come in and take over the project." And I was like "If anything, we're not inexperienced in open source. This is our job. The reason we're interested in this package is it's our primary... We use it day to day. I teach Faker when I give workshops. Like, I teach this. I have a vested interest in making sure it goes well." I don't know why people who care about open source were very much against it. That was always confusing to me.

**Jerod Santo:** \[08:21\] So I'm very much -- I'm pro open source. I'm for that continuing to exist, and I have been; my career has very much been built around and on open source technology, working with open source people... And so these are very much my people. And I feel like I understand a lot of that dynamic. I think maybe where I'll be like "Okay, where could they potentially be rubbed the wrong way?" and maybe it was just like -- maybe the name not changing, or something like maybe "Why don't you just have a new name, or something?"

**Jessica Sachs:** Exactly.

**Jerod Santo:** Because it's not as if Marak came up with Faker, which is a very old thing. But I mean, I could see where it's like most of the time - not every time, but often when a community takes over a project that's dead or abandoned, there's some sort of like a community rename or something. And I can see where maybe that would have been a move you could have done. It didn't rub me the wrong way at all, but I'm just wondering if maybe there was some sort of grudge held because it was like "It's a takeover!", you know?

**Jessica Sachs:** Yeah. Because it was a direct copy of the repository. And since then, we have - what, 800 pull requests merged? I should pull up the metrics before I speak, but... Yeah, we have like 800 pull requests merged, or something like that... And Shini and the team have done a significant amount of making it their own. Previously, there was no official docs site. Like, there was no official docs site for Faker, at all. There was a third-party one that somebody made on their own, because we couldn't get docs done for Faker when Marak was owning it. So he had a package that had no official documentation or official types. It was all ES5. So we made it our own; we did absolutely not just copy somebody's code. It is now in TypeScript, it is now being re-architected again. And we've done - what, one major version release since then? I think maybe we're at two. We've done quite a bit of making it our own.

We kept the name, because that's the name of the concept, not the name of -- and it was the JavaScript implementation of that concept. So we kept the name... There were a few different rewrites that sprung up, but I feel like that's JavaScript's bad habit, is to rewrite things that don't need to be rewritten.

**Kevin Ball:** Totally.

**Jessica Sachs:** We were just like a set of developers who wanted to continue using our favorite package, that somebody had decided to delete.

**Kevin Ball:** I feel like some of the dynamics here are -- from what I understood of it; and I was outside of this, just reading third-party stuff. Like, he did this as a protest about not getting paid. And I found a quote from him in some article, which we can link, where he said, "Either send me a six figure yearly contract, or fork the project and have someone else work on it." Which is what y'all did. And I think one of the interesting factors here is, I think some of you who are maintaining, you are paid to work on open source. So in some ways, this did the intended result of transferring this into being paid work by some of the companies that are benefiting from it.

**Jessica Sachs:** Absolutely. Yeah. You know, I get paid by Cypress to work on test, and test-related projects. Faker is one of those things. And I have a big architectural dream of having a very nice Cypress-Faker integration. And Cypress would benefit from that. And mainly because they paid me to work on Faker, right? Like, I was on PTO a little bit. I was on a mini sabbatical. But I was a Cypress employee when I did all this Faker work. So I think it had the intended effect that he asked for.

It's very difficult... You guys are actually very learned on this topic, before coming on the podcast. Most people don't know. I was running Vue Boston yesterday, and I talk about Faker whenever I talk about component-driven development. And most people were not with it; they hadn't followed it, as the saga unfolded.

**Jerod Santo:** \[12:10\] Right. Well, we did do a show on it back in the time... I think it was called "What's in your package.json?" And we didn't specifically -- we kind of avoided some of the nitty-gritty details of Marak and Faker itself, and used that as a launching point for a larger conversation with Tobie Langel, who's an open source strategist. Chris was on that show, Feross, and Amal... So that's a good one to go back for people who maybe missed it and wanted to hear not just the details of the drama, or the saga, but also some of the struggles that we have as a community, open source writ-large, and some of the ideas around how we can work together and work with corporates and work with the community to maybe bridge some of these gaps that are in our ecosystem, mostly around sustainability. So that's episode 210. We'll just put that in the show notes for folks who want a little deeper dive. Of course, we didn't have anybody from the community maintainer team there that day, but we have you here today.

So Faker is in very good hands it sounds. I mean, the core team has like nine people maintaining it... That's great.

**Jessica Sachs:** Yeah.

**Jerod Santo:** And it's been actively maintained, documented, rearchitected... Was there any sort of mechanical change for users of Faker? Like, did you just have the npm repo takeover, or did you have to say, "Hey, update your package.json and point to the new Faker?" How about people that were using it at the time? Was there a hiccup at all?

**Jessica Sachs:** We had a major version bump where we changed how you import it. So we supported named exports all of a sudden, instead of just CJS. So there was that... And then previously, the way the bundle was exported, like - as was the fashion when Marak wrote it, we would build a browser bundle that you could just import from a CDN. But that isn't how most people use it. Most people use it as like a require time Node side package. So we changed some of those things, on how you just import it to start. That was the only big, big breaking change, and then all the types are now bundled, so you got to delete a line from your package.json, which I always find satisfying.

**Jerod Santo:** Which everybody loves to delete, right?

**Jessica Sachs:** Yeah.

**Kevin Ball:** I was noticing... It looks like Marak's package is still on npm somewhere...

**Jessica Sachs:** Yeah.

**Kevin Ball:** And it's getting lots and lots of downloads for what looks like an empty package. Is there a new location that you have to point to, or...?

**Jessica Sachs:** Yeah faker-js/faker. So we have an org now called Faker.js, and then there's a sub-package inside that called Faker. So if you go to github.com, you would go to the faker-js location.

**Jerod Santo:** And it makes sense. There's a lot of people still downloading that old one because it's the kind of library that you set up in your development environment for testing, and you use it...

**Kevin Ball:** And you don't update.

**Jerod Santo:** ...and it's not like you think about it constantly, like "Ah, I need keep this thing up to date", unless there's like some sort of fake data you wish you could generate, that you can't, and you're like "Well, I wish I had this feature" and then you're like "Well, I'll go check the updates." And then you're like "Wait a second, this thing hasn't updated for nine months." And then you maybe google it, find the new one etc. So it makes sense that a lot of people are probably still on that old npm package.

**Jessica Sachs:** Yeah. I have a lot of old example repositories that are using the Faker just as one word. I yesterday installed the old version \[unintelligible 00:15:29.19\] It is what it is. I mean, over time we think the downloads will drop off. The fact that we have documentation is probably a big draw for people to use it...

**Jerod Santo:** \[laughs\] I think that's a nice feature to have.

**Jessica Sachs:** Yeah.

**Jerod Santo:** "How do I use this...?"

**Jessica Sachs:** During the transfer, I've been kind of like searching through to make sure I get this person's name right... I would like to say that Indeed is our biggest sponsor by far, and they were with us the whole time when we did the Open Collective transfer. And you were talking about the previous episode, and the problems that open source has as a community, and the Open Collective was probably the biggest point of tension, and making sure we transferred all of the outstanding balance to Marak. That was really hairy. We were a little bit afraid of getting that wrong. And I wanted to say that Indeed themselves, really, they were the biggest sponsor, and they were like "Two thumbs up. We're very glad that you're doing this." I was very happy for that.

**Break:** \[16:38\]

**Jerod Santo:** It seems like what you're most passionate about these days is testing, specifically component testing, or I think you said pre-show component-driven testing, or component testing driven development; I don't know what you said, but it was something to do with being driven. So drive us down the road a bit about component testing...

**Jessica Sachs:** So yeah, a small secret about me, even though I started in QA and I work at Cypress, I actually don't like testing at all.

**Jerod Santo:** Oh, no.

**Jessica Sachs:** Yeah. I mean, I do it...

**Jerod Santo:** Why not?

**Jessica Sachs:** Why not? I don't know, do you like testing?

**Kevin Ball:** I was gonna say, Jerod, do you like testing? I feel like testing is -- actually, there are situations where testing can be useful, but generally, it's a necessary evil; not something I look forward to.

**Jerod Santo:** I would say there's a satisfaction to like all the green dots in a test suite. That feels good. But getting there, I don't enjoy the process. I like the end result. But yeah, I don't really enjoy the process all that much. So you got me.

**Jessica Sachs:** Yeah. I don't like testing, but I also am in it for the satisfaction. So there's something called component-driven development. If you go to component-driven.org, you'll see a website that defines an open standard called CSF, the Components Story Format, and it talks about this world in which you can drive your development starting at the smallest little buttons and inputs and stuff, all the way up to a page. And you build in isolation these components, and then when you stitch them all together, you end up with the website, in theory. And that was championed by mostly the Storybook team, that opens standard. And that is what I get excited for. And in particular, the fact that Cypress or a browser-based test runner gives you the ability to mount this component in this little sandbox, and drive its development to completion, and then it's accidentally testable. That's what I like. It's like, after you finish your work, or maybe you scaffold out the blocks, the little tests, but you don't really do anything in them - after you finish all the CSS and whatever in your sandbox, you can just add .click, .get, and build out this test almost immediately. That feels really good, that I have to do so little work to get test coverage... And it's so satisfying to like see it, click and tap and move. That's what gets me. That's what I like about component-driven development, and then component testing in the modern age.

**Kevin Ball:** \[22:32\] Can you explain a little bit more what you mean by "accidentally testable"?

**Jessica Sachs:** Accidentally testable - it surprises you how little work it takes to test after you get it mounted. I like to break down component testing into three phases. It's get the thing on the page, mounted; that's phase one, is like get it on the page. Interact with it - click it, get it, get different elements, buttons, whatever, and then assert that it looks the way it's supposed to. Like, make sure that the overlay is closed when you hit the X button. So those are the three phases. So mounting it is the hardest part, and getting it and interacting with it, and then asserting on it - that's the easy stuff. But mounting it is the hardest part; making sure that it's like rendering properly, with all the props, events, whatever you want your components API to be. That's the hard part that everybody struggles with. Once it's mounted, once it's built, everything else is like cake, and it's accidental almost how easy it is to do. That makes me happy.

**Jerod Santo:** So some of the tooling that you were working on - is it helping provide the mounting process? Like, getting past the hard part?

**Jessica Sachs:** Yeah, some of the tooling I'm working on... So I built the Cypress Component Test Runner with a team of like kind of a five, six people... And it uses existing mounting libraries like Vue Test Utils, or the same logic that testing library uses for Svelte components or React components. It's basically the same code. And then you take that and you mount the component with it. And then Cypress just does its Cypress thing, and it already has support for getting and clicking on elements. So Cypress went the hard way, which is end-to-end first, and use the existing API that works for end-to-end tests, and said "Okay, but what if instead of a page you just tested a component?" So that's the stuff that I worked on for the last two, two and a half years.

**Kevin Ball:** That's really interesting, because we do a lot of end-to-end testing at my work using Selenium... But we have to do that across -- yeah, get the whole page up, figure out how you're mocking all your data on the backend, so that it's loaded properly and goes through that whole piece. And most of our frontend testing is there because most useful frontend testing is this interactive piece, that's not really very unit-testable in the same way. Yeah. So what you're saying, essentially, is cut off just the component piece of that, but still do the browser-based approach to testing that makes sense for UI.

**Jerod Santo:** So component testing is almost like unit testing for your UI then.

**Jessica Sachs:** Some people mix them up, but yeah. Some people conflate them as the same thing. But yeah, I view component testing as the thing where your subject under test is a component. The thing you're asserting on is a component. And you can do unit-testy things with that, just like you could, in theory, do unit-testy things in an end-to-end test runner. Like, if you put your application on window, you can suddenly call all these methods.

**Jerod Santo:** Sure.

**Jessica Sachs:** You could, in theory, do unit-testy things in that environment. But the component test runner in Cypress was built for component development. And the things that are coming down the pipeline are built for component library authors. So things like changing right to left, or left to right. You know, I work with Wikimedia on occasion, because they switched to Vue, and I do component development stuff... So I get a ping every once in a while, and they show me what they're doing with their component workflow... And so I was like "Here's Cypress. Let me help you out."

\[25:59\] Because naturally, your intuition is to build a harness -- as a developer, when you're trying to build a component library, your intuition is to build a harness that allows you to play with your components in certain ways. And that's what Wikimedia did, you know, without any of my opinions. They built a website that allows you to play with your components, and change languages, change the flow of the page from left to right, to right to left, change into dark mode, stuff like that. And that's the stuff that I hope is coming down the pipeline at Cypress over time. And these are things that Storybook already has support for via plugins. It's a shared problem, I think.

**Jerod Santo:** So if component testing is at least conceptually akin to unit testing, where you're isolating... You're isolating a single; in this case, your unit is your component, right? So you're isolating, and then you have end-to-end testing, which is like, you know, fire up the whole page, and drive at everything... Is there an in-between land where you're maybe doing like a multiple-component integration? Are these things so isolated that you don't have to do that? Or do you still need to test the interaction between multiple components? Because I imagine they're nested, right? I don't just imagine, I know in many cases they're nested. And so this one is affected by its parent, or by its children, etc.

**Jessica Sachs:** Yeah, you want to exercise the component as it wishes to be used in your application. So if you are building a component that is designed to work with its parent in a very specific way, then absolutely you should be -- in the test for the child component, you should absolutely be using the parent component with it, right?

Sometimes - like, let's take a data table where you have to use a particular row component with the table, right? The row component barely makes sense on its own. What is a row if it's expected to be used with a parent? It doesn't really matter.

**Jerod Santo:** Right.

**Jessica Sachs:** I call this testing like a user. But when you put on this user hat, you're actually like your coworker; the coworker is the user, not the end user. And so you're setting up your integration test. I hate the word integration test, because most things are integration tests... But you're setting up this integration test where you're trying to make sure that you're using your subject under test, the row, in a production-like way, alongside its data table parent, for instance. And yeah, that means you're isolating, but at the same time, does it even make sense to isolate? What is a row without its data table? Nothing, really.

**Kevin Ball:** Now, a similar question related to this... I think oftentimes you'll have components that are responsible for loading particular types of data, and then orchestrating a set of child components in some way based on that data. And I think for simple cases, you can isolate all of your rendering components from the data load, and then you just pass in data in your story when you're doing it. But if part of what this parent is doing is orchestrating around that, how do you think about that for component testing?

**Jessica Sachs:** Yeah... So the first thing is that when I write component tests, I barely look at the source code. So I look at what the user sees, where the user, if it's a very technical, like if it's a -- where the user is first, the end user. So I pretend that I'm not a developer; I pretend that I'm completely non-technical, and I look literally at the screen, at the component. And I might look at the network tab as the ins and outs of it. If we have, let's say, a product list that infinitely loads products when you scroll to the bottom - let's take that - I would use my eyes, look at the page, and say I get a page worth of data, and then I scroll to the bottom, it should show a spinner when I get to the bottom of the page. That's a test. After, it should eventually resolve, and then it should make a network request. I don't test that it should make a network request, I set up the environment such that the network request will return. Cypress has the ability to do this, so does Mock Service Worker, if you're not using Cypress. I make sure the server will respond - the fake server, basically - and then eventually I should get another list of products, if I have stubbed out the environment. That's generally the kind of test I write.

\[30:07\] So I'm not thinking about how the code is written... You can actually -- you can barely tell the difference between a Vue component test and a React component test that I've written, which is another good way to think of it - it's a complete blackbox. I view that as a very healthy sign.

**Jerod Santo:** Yeah, implementation details are just the details, right? What you're testing is the functionality, or the way that it looks, and works. And if you write your tests against the innards, then you're writing brittle tests, and you're gonna rewrite those tests when you decide to swap out those implementation details. So that's very wise.

**Jessica Sachs:** Yeah. And when you're doing things that are computationally fun or exciting, like let's say testing a regex against something, like form validation, it might make sense to pull that out into a JavaScripty file that's agnostic to the fact that it's going to be run inside of a component, and refactor your code such that you can easily unit-test that code. And I would do that in a Node-based runner, not in a browser-based runner, because Node-based runners are faster. So I would be using Vitest, I would be using Jest, or Mocha for that kind of a thing.

**Kevin Ball:** Yeah, that's exactly the line we've been talking about a lot at my work, is "Okay, what are the sets of things that make sense in a unit test environment?" and it tends to be very logic-driven, something like that; something that you can completely divorce from the visual that it's influencing from the DOM exactly. And then end-to-end tests as we're doing right now, which are essentially component tests, except we don't have quite the level of isolation you're describing, which has me excited to go off and figure out how to set that up in our system. But for stuff that is rendering in the DOM, that is how the user perceives it, regardless of the details.

**Jessica Sachs:** At Cypress we believe that most people's end-to-end tests will probably be covered by component tests. With the infrastructure we've provided, very few things -- multi-page is the line for me between component and end-to-end. If you were to ask me "Should my test be a component test, or an end-to-end test?" I'll be like "I don't know. Does it go to multiple routes?" That's the line for me. Or multiple systems, for example? Or are you trying to hit production? Like, there are different -- end to end sometimes means I'm going to hit a staging environment that is like hosted on a CDN somewhere.

**Jerod Santo:** You can host certain things on DNS; it's not performance, but I know that people have shoved a lot of stuff in the DNS, even though I know that was just a completely miss-speak on your part.

**Jessica Sachs:** Yeah, so it's like -- if you're hitting multiple routes, if you're going to visit multiple pages, that's the line for me. Or if you're trying to test the integration between multiple systems, and the way you're doing that is through the front door of the application. I like to call like, you know, the website, the front door.

**Kevin Ball:** Oh. Do you have other house metaphors?

**Jessica Sachs:** Other house metaphors?

**Kevin Ball:** If that's the front door, you know...

**Jerod Santo:** Oh, there's a back door?

**Jessica Sachs:** Yeah... Back door would be like the API itself.

**Jerod Santo:** Oh, the back door was that password that you left in there, that you didn't tell anybody about, so that you could always get in later? \[laughs\]

**Jessica Sachs:** Right...

**Jerod Santo:** Every good system administrator leaves themselves a back door... Like "Oh, you just have to type test1234 and you'll get right in."

**Jessica Sachs:** On occasion we'd have shared passwords for like educational resources and stuff like that, like if I'm trying to help somebody out... And my shared password is always my now-defunct - like, this is the reason I can say this... My last company was in travel ads, and they shut down immediately when the pandemic hit, despite being profitable for so many years. But travel ads was not really a good market in 2020. We have an alumn Slack group now, and everybody knows the password. I don't know, I find that to be a nice little -- when I made a Neopets account, let's say, that was like the company Neopets account... I went ahead and everybody had the shared password.

**Jerod Santo:** There you go, there's your backdoor right there.

**Jessica Sachs:** That's actually where I learned HTML, it was the Neopets programming guide.

**Jerod Santo:** Oh, wow.

**Jessica Sachs:** Are you guys too old for Neopets?

**Jerod Santo:** No.

**Kevin Ball:** Probably not. I might be too not-cool for Neopets. \[laughter\] When did Neopets happen? '99...

**Jessica Sachs:** It was like 2000-2001. It was all Flash games... Kids like me...

**Break:** \[34:12\] to \[36:18\]

**Jessica Sachs:** My favorite thing about the Neopets HTML guide was the audio segment. It's like, you could do so many annoying things... And cursors. Custom cursors and audio - those are the tags that I miss the most. You would have a shop... You could make your own little shopkeeper, and theme it with backgrounds and stuff... I very much miss the ability to put obnoxious things on the web

**Kevin Ball:** I mean, I feel like you can still put obnoxious things on the web. You just need to host them somewhere...

**Jerod Santo:** Have you ever been to themostannoyingwebsite.com?

**Kevin Ball:** Oh, gosh... Don't do it now.

**Jerod Santo:** Don't do it.

**Jessica Sachs:** Okay, okay. That's the one where you can't close anything, or do a simple task... You're supposed to fill out a form, and it becomes impossible...

**Jerod Santo:** Yeah. Feross built that. He's one of our panelists... And he basically uses every annoying feature of the browser that you could possibly use... And just like recursive loops things...

**Jessica Sachs:** It's art.

**Jerod Santo:** It is art.

**Kevin Ball:** I feel like he did it at least partially to advocate for closing some loopholes...

**Jerod Santo:** \[laughs\] That's very smart.

**Jessica Sachs:** One of the things you have to be good at when you're building test runners that are like mainly browser-based is exploits of the web. And in particular iFrames. You have to really know yourself with iFrames. And before working at Cypress, I worked at that ad tech company, and I've done some very bad things on the web to make pop-ups happen. Some very morally questionable things.

**Jerod Santo:** Ooh... And \[unintelligible 00:37:43.09\] you for so long. \[laughs\]

**Jessica Sachs:** I mean, I don't work there anymore. And the company's gone, so...

**Jerod Santo:** Okay... So all is well that ends well, I guess. But what are some of the iFrame gotchas? Or do you currently have any zero days you want to share? \[laughter\]

**Jessica Sachs:** \[38:01\] You want a release...? No, there was one guy like - bless him for fighting back, because I was such a junior developer; I had no morals, I did not have a seat at the table at the time in my career... And it was a very important time. But the worst thing I did - and there's this Chrome guy that kept patching all of it, so we're good; like, none of us a zero day. But we did a pop-under technique, which is like when you close your window, it's behind, and we did pop-under technique that utilized alerts in PDFs. So you would click on the browser, it would attempt to open a PDF, and refocus using alert. It was a terrible thing... But some very nice guy on the Chromium team was patching all of, so... He kept me employed, and then also, I don't feel that bad about it.

**Jerod Santo:** The old cat and mouse game.

**Kevin Ball:** It's an arms race.

**Jessica Sachs:** It's exactly how we would describe it. And we had our own competitors, that were eventually acquired by companies like Trivago, that were doing very similar techniques, and it was like who could find the pop-under technique faster, us or the competitors? It was very toxic. Not good for the web overall.

**Jerod Santo:** Yeah.

**Kevin Ball:** This is what they talked about when they say the smartest minds of our generation are working on ad technology...

**Jerod Santo:** Right.

**Kevin Ball:** Nowadays it's working on pyramid schemes, so you know...

**Jerod Santo:** Hah!

**Jessica Sachs:** Is that a Web 3.0 burn? It sounds like a Web 3.0 burn.

**Jerod Santo:** It's Web 5 now, so I don't know where you guys have been.

**Kevin Ball:** I think it's like Web 1.5 It's at least down 50%.

**Jerod Santo:** \[laughs\] Well played, Kball. Well played. We're just happy to hear you're no longer trying to do pop-unders, but you are trying to make the web better now by helping people do these awesome component tests. When you say component-driven development, can you paint a picture of that? I know you touched on it, but I would love to have you return to that and explain maybe like what that process looks like step by step to somebody who says "How can my components drive my development?"

**Jessica Sachs:** Yeah. So instead of running, let's say like -- I'm going to use Vite. Instead of running like vite serve and going to your index.html page that contains your website, the homepage, instead of starting your web development by looking at your application, you start your web development by mounting a component by itself in isolation, in an environment such as Cypress, Storybook, Histoire, some of these story-driven components. And you will write - if you're using Cypress - a test that does nothing but mount your component. And you're driving your web development with your mocks on the left side, and your little sandbox environment on the right side. And so it's almost like test-driven development. You're not using your application. You're application isn't on the left side, it's your little sandbox. And this leads to a very pure development experience, because it's a pain to -- you don't have all of your application at your disposal, and so you have less rope to hang yourself with, is a good way of thinking of it.

So instead of having this very domain-coupled environment... Like, your application probably hydrates itself with some network requests. And so if you're building in your application, you may pull from those network requests on window. Or if you have some sort of local storage that always has the data available for you, you might be pulling from that. And so you wind up with a very coupled component, if you were to only develop in the website, in your eventual web application... Versus if you're developing in your sandbox, you're providing all of the data via props, or a component hierarchy if you're using a lot of providers, for example. It just leads to a better API design and a better component, more pure; you're giving it all of the information it needs, versus it being very easy to just break outside of your sandbox and grab things from wherever you need them.

**Kevin Ball:** \[41:57\] I've definitely noticed when working in an environment with Storybook or something like it, the design of components just shifts, and people get much more rigorous about thinking about data flow, and not just pulling in API calls everywhere... It becomes much, much cleaner.

**Jessica Sachs:** And it becomes testable, right? Because you know the ins and outs of the component, and you don't need to fixture an entire application to get your component into the state that it was expected to be in when you built it.

**Jerod Santo:** You mentioned Histoire... And I just stop on that word and I just think, "Histoire..." What is this? Help us understand.

**Jessica Sachs:** Yeah, Histoire... It's the French word for story. And it was built by one of the Vue core team members \[unintelligible 00:42:39.09\] is his name on GitHub and on Twitter. Basically, we wanted to make a Vite-based Storybook alternative that embraced single-file components, and gave a very natural DSL for building out stories. So instead of having the normal storybook API that you might be used to, it allows you to define multiple variants and stories by using components inside of your single-file component.

In Vue, for example you have let's say three different sections. You have a template, which defines markup, you have a script, which defines business logic and runtime code, and you have a style block. And you would also now have the ability to now have a story tag, for example. And so Histoire was very friendly towards Vue users - it was written by a Vue core team member - and Svelte users, for example. So the DSL I think will be very natural for those kinds of users, that don't use JSX all the time.

**Kevin Ball:** So you mentioned focusing on single-file components... So then is it primarily aimed at -- I guess those are the two frameworks I'm aware of that have that compilation step with single-file components... So probably not supporting React, or - does anyone use Angular anymore?

**Jessica Sachs:** Aww... The Angular community uses Angular.

**Jerod Santo:** They do, they do. In fact, we've had somebody write in and say, "Hey, you guys are hating on Angular too much. You need to give it some love." So Kball, come on, man...

**Kevin Ball:** You're right. You're right. I think actually the back-story there is -- my impression anyways, is that Angular is much more used in large enterprises... And I have never worked in such a place, so I've never run into that, so that's very much not in my mindset.

**Jerod Santo:** Fair.

**Kevin Ball:** But I think very large numbers of people do work in those locations, and they may well be doing lots of very cool stuff with Angular, and I just don't end up running into them.

**Jessica Sachs:** Yeah. JavaScript is such an interesting world, because we fragment -- like, we're already a section of tech, but we also then sub-fragment down into these framework lines... And the Node even is over here being like "Aah...!"

**Jerod Santo:** Right.

**Jessica Sachs:** I remember -- so JavaScript is not my first language. I came into JavaScript and I was like "So where are the official docs?" \[laughter\] And somebody just like laughed at me. My tech lead just like laughed, and I was like "What do you mean there's no official docs?" I came from Objective-C, where the official docs literally are on your computer, like offline. Objective-C is the predecessor to Swift, so if you're writing anything Cocoa, OSX land - that's for the audience - that was my first language ever. I was a manual QA for iOS. I was very shook when I realized that JavaScript had no official...

**Jerod Santo:** Ha-ha!

**Kevin Ball:** I mean, pros and cons of not being owned by a single company, to some extent.

**Jerod Santo:** Yeah.

**Jessica Sachs:** But aren't we all owned by Google? Chrome owns our soul...

**Kevin Ball:** These days, that seems more and more true, but...

**Jerod Santo:** You know, everything is peaks and valleys. And so we're peaking there, and then there's going to be a rebellion, and we'll move in a different direction. And it just takes the -- there's these process. When you're around long enough, you see things move across... And yes, I think it's true today, but I think it's going to be less true ten years from now; that's just my own prognostication.

\[46:04\] Now, speaking to this - this is an interesting point about the fragmentation inside the JavaScript "community", because we have another show called Go Time, which is like for the gophers. And JS Party and Go Time are very much in the same image, but they're in different communities. And I'm involved in both of the shows, and so one of the things that I think we've struggled with JS Party, and we would love to crack this nut, is we wanted to create a show for like everybody who has anything to do with like JavaScript and the web. And that's proven to be difficult.

On the Go Time side, Go Time gophers - they have more of like this milieu, this - maybe just more tight-knit. They have more of a common community, or ethos, whereas in the JavaScript world there's so many little "camps", or just areas of interest. And you have like -- you know, people think that we don't talk about CSS; well, we could definitely talk about it more, but we do. But it's not in our name, but yet we want to create a place where everybody can hang out together. And that's proven to be difficult, I think because of what you're talking about there, Jess, where there's just kind of like -- first of all, there's a lot... I mean, darn near everybody who does web has some sort of angle into JavaScript, and like they're completely different people, in different situations. Kball doesn't think anybody uses Angular, people at large corporation X think nobody uses Vue, or something. Right? So it's weird.

**Jessica Sachs:** It's super-weird. The fragmentation is giant. And then you add TypeScript, right? And you're like "Oh no, we're ECMAScript party now..." \[laughter\]

**Jerod Santo:** Right. Well, Nick Nisi has been working very hard to change us into a TS Party, but we rebel.

**Jessica Sachs:** But there is so much fragmentation. And it's not even like Web Party, right? Because Node.

**Jerod Santo:** Right.

**Jessica Sachs:** You run into developers... One of my co-workers has been very lucky at Cypress to work with some rock stars. \[unintelligible 00:47:58.18\] and he is Node Party all the way, and Node and TypeScript are his passions. Not interested in CSS. There are so many different ways you can specialize in JavaScript, in the web ecosystem... Yeah, in the Node or or web ecosystem...

**Jerod Santo:** Right.

**Jessica Sachs:** ...and the divide is not in the language, right? It's where you spend the most time solving problems. It's like, do you care about making things pretty? Then you're probably going to go deeper into CSS? Yeah, there's so many different ways to specialize... And it's hard.

**Jerod Santo:** And you may feel like you're not welcome at a JS Party... But you're totally welcome here. That's I guess some of the hurdles that we have to overcome. And we could do better, of course, in diversifying what we talk about. Of course, we have a rotating panel, so we have our people who have different views into the world... Chris Hiller, for example, is very much more on the Node backend side of the world... And yet, it's hard. It's hard to create what we feel like is a community, a JavaScript and web community... Because I can't even say like web; like, Node, and Robo...

**Jessica Sachs:** ECMAScript community. There you go.

**Jerod Santo:** Yeah, ECMA.

**Jessica Sachs:** That's cute term...

**Jerod Santo:** There's no ring to it. You know, ES Party? I don't know.

**Kevin Ball:** I think that is the challenge, right? If you're doing Go, there's a few different things you might be doing, but you're probably working in a server environment somewhere, you're probably doing something where performance and sort of multi-processing or multi-speed, or scalability -- multi-thread scalability is important. The range of problems that Go is typically used for is much smaller. Whereas JavaScript is just used for everything, essentially.

**Jerod Santo:** Yeah. It's so general-purpose.

**Kevin Ball:** There's people doing ML in JS. It's not as common as doing web development or something else, but it's everywhere. And so it creates this like big, fractious environment. It's like the United States. The United States has people from everywhere, and we can't get along, because we all have such very different backgrounds and priorities, and other things... Whereas a smaller country, with less diverse population often seems more cohesive, even though, you know, they may not be accepting of outsiders; but because there aren't that many, it works fine.

**Jerod Santo:** \[50:18\] Right. Good analogy.

**Jessica Sachs:** What I got was JavaScript is like the United States. \[laughs\]

**Kevin Ball:** 50% are aiming their guns at the other 50%. \[laughter\]

**Jessica Sachs:** That's fine. I'm going to use that.

**Kevin Ball:** Heading towards societal breakdown... No, this is not a good week to talk about parallels to the United States.

**Jerod Santo:** Well, there's no saving this conversation from there... We could wrap it, or we could try to switch topics... I don't know. What do you think, Jess? Switch topics?

**Jessica Sachs:** Yeah...

**Jerod Santo:** Alright. I've reached the end of mine. Do you have anything that we haven't talked about? Anything else that's exciting you, or you haven't mentioned? ...you're "Man, I wish we would have talked about this project, or that thing..." Or back to Neopets. What do you wanna talk about as we close out the show?

**Jessica Sachs:** I guess I would like to close out the show by talking and just being very excited about the conferences that have seemed to start back up. My last month, June was conference season for me. I got to go to Vue Amsterdam and VueConf U.S.

**Jerod Santo:** Nice.

**Jessica Sachs:** This month for me was really invigorating, because I got to meet all of the people I met online... And so it seems to be continuing. I know Vue Japan's going to be remote. ViteConf is also going to be remote. It's the first ever ViteConf, I'm very excited. But the other conferences I have - Vue Toronto and Svelte Summit, they're both in-person, so I'm going to be in Stockholm next month. No, no, two months; September 8th, and 9th I'm going to be in Stockholm. I'm pretty pumped to meet everybody in person. I got to hang out with Debbie O'Brien. She just joined Playwright, and so we were talking testing, and I was talking theory with her, and that was really cool, getting to share those in-person moments.

**Jerod Santo:** That is exciting. Kball, are you getting back out?

**Kevin Ball:** I am gradually working on my both immediate and extended family to expand how safe we feel with traveling. I did my first plane trip since the pandemic last month, to a small event. I unfortunately canceled going to a large conference this month, because we just did not feel safe yet. I mean, it's complicated, and I'm glad there are both conferences starting up in-person and some that are still remote, because there are people with all sorts of different levels of risk tolerance, immune compromise, other different things, and there is still a heck of a lot of disease out there right now. But reading the tea leaves and navigating a family situation, I don't think it's going to happen for me this year. But I'm very hopeful for next year.

**Jessica Sachs:** I'm happy you said that, actually, because we're also considering reining back in, after paying attention to -- I probably got the Omicron BA2 strand in late April. And so June, I was very much within my immunity window. You know, call your doctor... That's what I did. And I was very happy to be able to go out safely after getting the antiviral as well. My COVID experience, I was very lucky to be -- very lucky... I have epilepsy, I'm very loud about this, and my doctors were like "You absolutely need the antiviral in", so I was able to get it. And so while my immunity is waning, we're reevaluating again. And I oftentimes feel pressured by people to go out there, and I'm happy you said that, Kball. That makes me feel a little bit better about making decisions for myself.

I would also say that remote workshops and stuff - I think I would like to do more of a hybrid approach next workshop I do. I think the next one I have scheduled is Vite Toronto in November. Who knows what it'll be like...? I did in-person, VueConf U.S, and while I liked the in-person connections, I was able to reuse my remote format. I didn't have to change a thing. And I think it made for a better workshop overall. It was like a collaborative Miro board, with all these different post-its, and everybody got to just pile on... And I really liked the remote-first approach the workshop took; I liked the end result once I moved in-person, and I think it could be hybrid. So I might ask the organizers if I can do a hybrid, and make it more accessible to people.

**Jerod Santo:** No harm in asking, that's for sure.

**Jessica Sachs:** Yeah, for sure.

**Jerod Santo:** Well, Jess, thanks so much for joining us, having this awesome conversation. What's the best way folks can hook up with you on the remotes, on the interwebs? Is it Twitter? Is it your website? Help people reach you.

**Jessica Sachs:** It's Twitter. My website says "Do not email me. Go to Twitter."

**Jerod Santo:** Okay.

**Jessica Sachs:** Yeah.

**Jerod Santo:** Well, we'll have the links to Jessica's Twitter account, as well as her website, and not her email... But everything else will be in your show notes, as well as all of the things discussed on this particular episode. So check the notes for links to Histoire, to some stuff with Marak, to the JS Party 210, to component-driven user interfaces... All the things. Svelte Summit as well...

**Jessica Sachs:** Put the Neopets HTML \[unintelligible 00:55:09.25\]

**Jerod Santo:** Yeah, hook us up with the link to that guy. There it is, it's coming into the chat. We'll put that in the show notes, for sure. On behalf of Kball, I'm Jerod, and this has been JS Party. Thanks again, Jess. You're welcome back anytime. That's our show for this week. We'll talk to you all next time.

Outro: \[55:34\]

**Jerod Santo:** Let's break right here, natural break. We can pick up -- actually, I want to pick up on the Neopets on the other side, I don't know.

**Kevin Ball:** At that time, I was playing text-based MUDs, rather than HTML-based stuff, so...

**Jessica Sachs:** Hm. MUDs are something-Dungeon?

**Kevin Ball:** Yeah, Multi-User Dungeon. It was basically the text-based predecessors to MMO RPGs.

**Jerod Santo:** Oh, okay.

**Jessica Sachs:** Yeah, yeah.

**Jerod Santo:** 1999? Is that the timeframe?

**Jessica Sachs:** Yeah.

**Kevin Ball:** Yeah. Neopets is '99, I think.

**Jerod Santo:** I was playing GoldenEye on Nintendo 64. Just obsessed... Obsessively.

**Jessica Sachs:** I was very bad at at FPS'es, until I played Battlefield IV. So it took me a long time to really get into FPS'es.

**Jerod Santo:** I've fallen out of FPS'es, but I was into them then. But now they're just like - they're online, and like eight-year-olds will just smoke you, and then do that thing where they like hump on your face, and you're just like "Why am I playing this?" \[laughs\]

**Kevin Ball:** The only time I ever played FPS'es was in college. My freshman year of college I was in a dorm with like eight dudes...

**Jerod Santo:** Doom?

**Kevin Ball:** And they were really into Counter Strike.

**Jerod Santo:** Oh, Counter Strike, yeah.

**Jessica Sachs:** Okay. CS Go, yeah.

**Kevin Ball:** So like I had a year in my life where I did a lot of Counter Strike, and basically never since.

**Jerod Santo:** I had some Counter Strike in college as well.

**Jessica Sachs:** The Cypress founder actually went semi-pro and won a few tournaments...

**Jerod Santo:** Wow.

**Jessica Sachs:** Yeah. I was like, "Huh. Counter Strike."

**Jerod Santo:** Who would have thought...? Alright, let's do our third segment here. So I want to actually pick up where we left off, with Neopets, for a minute... Because why not, right?

**Jessica Sachs:** Okay.
