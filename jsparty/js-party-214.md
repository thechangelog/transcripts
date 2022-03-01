**Jerod Santo:** Hello, friends... It is Jerod and I am here for another JS Party. You know, we did a show on Vite, and then we decided "Hey, Vite. Let's talk more about Vite", because you know, vite means quick. We wanna talk more about Vite, so we're here to talk more about Vite, specifically Vitest, and some other cool stuff going on.

My co-host today is Nick Nisi. What's up, Nick?

**Nick Nisi:** Hoy-hoy. How's it going, Jerod?

**Jerod Santo:** It's going very well. So you were on the Evan show, and now here you are... So you are a Vite expert at this point.

**Nick Nisi:** Very exciting.

**Jerod Santo:** Very exciting. Well, maybe not total expert, but we brought a couple of experts on to talk to us about these things. We are joined today by Anthony Fu. Welcome, Anthony.

**Anthony Fu:** Hello! I'm Anthony.

**Jerod Santo:** Good to have you. You're a core team member of Vue, Nuxt and Vite, and also the creator of Slidev and other cool tools. So that's quite a litany of things you're up to.

**Anthony Fu:** Thanks.

**Jerod Santo:** And we also have Matthias \[unintelligible 00:03:12.19\] with us. He goes by Patak, you may know him as patak.dev, at his website, and @patak on Twitter and elsewhere... Welcome to the show.

**Patak:** Hey. Really nice to be here. Thanks for the invite.

**Jerod Santo:** Great to have you. You're also a Vite core team member, a Vue team member, and you work at StackBlitz, but you don't work on StackBlitz. Do you wanna tell us about that situation? It's pretty cool...

**Patak:** Yeah, I joined a few weeks ago, and I'm working now full-time on Vite and the ecosystem. Vite is kind of in the critical path for StackBlitz, they're going to use it a lot. It's pretty cool to be able to spend more time in open source now.

**Jerod Santo:** Yeah, that's really cool. It's a growing trend in our ecosystem. We have full-time open source maintainers sponsored by corporate backers, and you are another one added to that list. We were just talking before the show that our friend Zach Leatherman also recently went full-time on his frontend static site generator, Eleventy, working at Netlify -- he already worked at Netlify, but now he's not gonna work on Netlify, he's just gonna work on Eleventy, full-time... And that's super-rad. So congrats to Zach, and to Eleventy, and really, to all of us. When that happens, I feel like the whole community wins... Don't you guys think?

**Nick Nisi:** \[00:04:26.07\] Mm-hm.

**Anthony Fu:** Yeah, totally.

**Jerod Santo:** So y'all work on Vue things, Vite things, lots of things... Anthony, you also -- I just wanna embarrass you a little bit. You were recently ranked on the State of JS 2021 as a person who people read, follow or want to highlight for their work. 137 people put your name in. I think it was a write-in, wasn't it? So they actually had to go out of their way to write your name in. How did that feel? That had to feel pretty good.

**Anthony Fu:** Yeah, I'm really flattered to see this. Totally unexpected to see my name there... And yeah, just like -- I don't know how to say... I just want to thank all the people that are supporting my work, and also put my name inside of the survey.

**Jerod Santo:** That is super-cool. And I'll also say, to pat our own backs a little bit, JS Party, the second most listened to podcast in the State of JS survey takers, up from number four last year; so that's a big win for us. And Anthony, who knows - maybe in 2022 you'll be even top on that list of people that are helping other people out. That would be cool. But I'm sure, just to be mentioned is quite an honor.

**Anthony Fu:** Yeah, thanks a lot.

**Jerod Santo:** Alright, so we're gonna talk about Vitest. This is a project y'all both work on... But first, we'd like to know how you came to be core team members on Vite, and all these various Vue and Vite-related projects. Let's start with you, Patak - how did you get involved with these projects?

**Patak:** Actually, Anthony has a lot to do with it, because I was working in a project and I started to contribute to VueUse, that is a project from Anthony... And he was kind of amazing in how he managed open source and contributions. So we kind of started there, and I wanted to get more involved, because there was a very good response from their side... And I got to contribute a bit to Bitpress, and then I started to contribute to Vite when Evan was finishing the Vite 2 version, at the beginning of this year, after a massive sprint that Evan did. Then I got involved, I think at the right time, when the Discord was created, so there was a lot of community work to be done... And I love to do that side of it; working with the ecosystem to see all the integrations are working correctly... So I got more and more involved in that regard. And when Evan created the team, then Anthony, me and others were selected to start... Now I think they are 7-8 people in the team.

**Jerod Santo:** That's quite a lot of people. So what is it about Vue, Vite, this ecosystem, this community of people that attracted you in the first place? Why are you hanging out with Anthony and Evan, and what is it? Is it the tech, is it the people? What attracted you?

**Patak:** I think there are several things... In particular the Vue community and the Vite community now, but also Vitest - they are very collaborative, and it's really great to work in these communities. And also the tech - I started to get more involved in Vue because of Vue 3; when that was getting finalized, there were a lot of interesting RFCs that were being discussed... Vue 3 is amazing, so it really attracted me, that particular part. And then from there, Vite - there is a lot to say why I was attracted to Vite...

**Jerod Santo:** But you were gonna hold it back. You were gonna make us ask. \[laughter\] Let's tease that out, let's go to Anthony. So Anthony, how did you first get involved with Vue and eventually Vite? What attracted you to this community?

**Anthony Fu:** \[00:08:09.28\] I just enjoy creating apps using Vue, and then when the Vue Composition API comes out - it's in the RFC phase and people are discussing this... And there was a community plugin called Vue Composition API - I think basically it's the plugin that enables composition APIs in Vue 2. So you can use at that times, with their plugins.

So then I created VueUse \[unintelligible 00:08:37.22\] So at that time I kind of think "Okay, this is a good time for people to migrate from Vue 2 into 3. So I would like to make the migration easier." VueUse is compatible for both Vue 2 and 3. In Vue 2, it's relying on the plugins I just mentioned about. And sometimes, there's a misalignment in Vue 3 implementations of the composition APIs and their plugin. So I created a pull request with it, but the maintainer thinks \[unintelligible 00:09:12.11\] for a few weeks or months... So I kind of think "Maybe I can take that job." Basically, the work is kind of simple to align the API design with Vue 3, so I created an issue saying "Okay, I volunteer to maintain this project, and I have \[unintelligible 00:09:31.06\] I have contributed before." So then Evan comes here and says "Okay, that's great", and he gave me the permission to maintain it. Then I became one of the members of the Vue team.

So yeah, I think that's basically \[unintelligible 00:09:46.04\] from Evan - that really encouraged me a lot to do more stuff with the Vue ecosystems. And also then about Vite - it's become a bit natural... Things like if you build apps and the Vite experience is really great, so like we are kind of like trying it out and really like it, so getting more involved with the community, and then just becoming a team member of it.

**Jerod Santo:** What strikes me about this - and he's not here, so we can talk about him; last week he was here, so it was harder to say these things... But it seems like Evan's leadership is really on display, how he inspires people to come alongside, work with him, but also like "Here's a new idea, here's a new thing I'm building. Come build it with me. And then by the way, here's some ownership in terms of agency." Why don't you -- like, who's idea was Vitest, and how did that core team or you guys... Tell us who all works on Vitest. First, I should say it's a blazing fast unit test framework powered by Vite... There, now we all know what we're talking about, even though the four of us already knew; but now we all know. That's what it is... How did you two come to work on that, and whose idea it was?

**Anthony Fu:** I think this comes from \[unintelligible 00:11:01.00\] meetings. So this is the thing that Vite kind of lacked, to have better integrations with Jest. So at that time Jest didn't provide async transformations and ESM support, so one of the other team members saw that, who was working on Jest/Vite integrations that were trying to use Vite as a transformer of Vite. But with the lack of functionalities it could be really hard to do it.

So in the team meeting of Vite we were trying to discuss how should we recommend a user to use, regarding of the testing. Jest essentially duplicated all the plugins, all the configurations you do in Vite. And if you have a custom Vite plugin in store, but you also need to write the transformations for Jest in order to have the same behaviors when running the code.

\[00:11:58.15\] So as a result of the meetings, we basically cannot recommend any of the test runners at the current stage for Vite. So I think the only solution would be the end-to-end testing libraries, for example like Cypress or \[unintelligible 00:12:11.23\] But that's not really unit testing; it's like firing up the whole process, and it will take a lot of your CI time. So then Patak comes up with the name called Vitest... So yeah, maybe you want to talk about how you came up with that name.

**Nick Nisi:** Excellent name, by the way.

**Patak:** It's strange, because before that team meeting -- these meetings would normally be weekly, and we are talking about all the features that we are accepting or rejecting in Vite, with Evan and the rest of the team. So as Anthony said, we were discussing this, and 3-4 months before that I was using the Vitest name; actually when I was creating a \[unintelligible 00:12:54.02\] or in Vite, I will have in my local folder, I would name it Vitest... Just because I will say Vite, and Test, and then I started to collapse it at one point.

Then when we were discussing this, we had some notes, and I put Vitest with a question mark at the end in a meeting... And Anthony sees that, and in the other chat he goes like "Who wrote Vitest?" And directly goes and grabs the package name from Npm that was free. It was strangely free, because Vite was for a long time there already... So yeah, the team meeting ends, Anthony disappears for 3-4 hours, and then gets back saying, "Hey, I have a proof of concept", and starts already like "Please invite me", and I see that he was already kind of running tests and everything, doing some very Anthony thing there.

**Jerod Santo:** So in terms of the project itself, right there on the homepage there's a big warning sign - Vitest is still in development. It says "It's not recommended to migrate your current testing setups yet. You can try it out in new projects if you're willing to get involved and help us." And it looks like they do have a few other people on the team; shout-out to Aslemammad, Vladimir and Ivan as well. They're on the homepage.

**Patak:** Yeah. Joaquín also.

**Jerod Santo:** Did I say that right?

**Patak:** Yeah, yeah. And Joaquín also \[unintelligible 00:14:20.23\]

**Jerod Santo:** Oh, and Joaquín, okay. Gotta get Joaquín on the website.

**Patak:** \[unintelligible 00:14:24.10\]

**Jerod Santo:** \[laughs\] Very good. So how long have y'all been working on this? It sounds like it's ready, sort of, but migrations not currently recommended. What's the situation in the state of the software?

**Anthony Fu:** I think from the first line it's been like two and a half months. Actually, about the implementations, this idea comes from long ago, that when I was working with Pooya, the leader of Nuxt, to work with the integrations of Nuxt, to use Vite as the build tools of Nuxt 3. So the main problem is that when you do the server-side renderings at \[unintelligible 00:15:03.29\] which is kind of inconsistent with the dev environment. So Pooya comes up with the idea "Let's use Vite as kind of like the bundler." We called it dev bundlers. We actually \[unintelligible 00:15:20.20\] request to Vite to transform all the modules individually, and then constructing them into one single file, so that \[unintelligible 00:15:30.17\] to render the result.

And then maybe we can just escape the IO part. After we transpile the modules, we can just \[unintelligible 00:15:43.11\] them right away. So I came up with the project called Vite Node, basically to run some modules with Vite transformations, and then running in Node.

\[00:15:57.24\] So then it comes to Vitest, so then I think "Okay, maybe I can create new test runners based on Vite." So I used Vite Node as foundations, and to evaluate the modules. Basically, it was the initial thing, and then we put the assertion library \[unintelligible 00:16:16.03\] and also the Jest snapshots, the package to mock with the snapshot features from Jest.

So basically, we kind of wanted to create a one-stop test framework that I think test runners other than Jest don't provide. For example, you don't have snapshot features in Mocha or AVA. So then I put up the repos and invited the team members of Vite and Patak with me to help with the first MVP of the test runners. \[unintelligible 00:16:51.18\] is the idea really working? So we kind of think, "Okay, maybe we can open it up for our sponsor to have an early assess to our codebase." \[unintelligible 00:17:03.09\] stable parts, we open-sourced it, and then I think currently we have six team members of it, and people really contributed a lot to this project.

So I think at the current stage, I can say that -- I think the experimental stage is more like... I would like to keep it experimental because for some features breaking changes I would like to make it more well-designed. So I wouldn't be afraid to like because this is stable and I'm afraid to introducing breaking changes, or the great features would take a long time. So I think the current stage is that we just want to make it for a while, for more space for us to make it better.

**Patak:** Yeah. Something else that is important is that these messages kind of target the right crew, let's say... Someone that if they find an issue, is willing to go and at least open a proper issue, with \[unintelligible 00:18:09.23\] in the repo, and maybe even go and dig in the code, get in the community. Not exactly someone that will try Vitest and then send an angry tweet because something didn't work correctly. So maybe in a few years, or even less, but I think that at this point it's important to leave that message there.

**Jerod Santo:** Kind of like the Google move. Gmail was in beta for 12 years, right? \[laughter\] It was a long time in beta, and it's like, "Well, hi guys. We're still in beta." It's like, "Hey, it's still experimental. Don't angry-tweet us." But that doesn't mean it's not perfectly usable for people who are ready to adopt the tools. So you're setting expectations and you're also maybe guarding off less experienced or intrepid developers who are willing to dig in and help out maybe.

**Patak:** I think that what Anthony mentioned about how it started with a closed beta, with the sponsors - I think that that was a very interesting \[unintelligible 00:19:08.21\] It was important also because the people that joined were already this kind of crew. So they got involved, they were really excited about testing, and giving us feedback... And they, actually, some of the team members, are from that initial group. And then, as days went on, we started to also invite people from the Vite ecosystem, because it was very good if we had people from Solid, from Svelte, from all the framework, who came and checked that integrations were working correctly...

So that initial part I think was kind of important to even get a more -- I don't know; more time, like Anthony said, to cook it more slowly at the initial months, let's say, of Vitest.

**Break:** \[00:19:58.00\]

**Nick Nisi:** So thinking about Vitest, I wanna contrast it a little bit to another popular testing framework like Jest... And kind of understand some of the differences and some of the similarities. Is it pretty close to out-of-the-box supporting a lot of the same features? Maybe in different ways, but is there anything that you'll miss from Jest, or that you get as an added benefit in Vitest?

**Anthony Fu:** Yeah, I think for the design of Vitest is heavily inspired by Jest. Me personally, I'm really enjoying using Jest... So it's just a little bit like some pinpoints that we had and we cannot solve it at that time, or we cannot constantly provide user to have a tool for us to work with Vite.

And one of the features that I kind of want most, that are already in Jest, is the snapshot. Jest snapshot is really great to support people like me; I'm a really lazy guy, so I would like to write only the input, but not the output. I want the program to automate it for me, and then I can check if the result is good, and then I can commit it.

Other times it's just the lack of the ESM support; some people migrate back to Mocha or other test runners... So then I kind of lose the capability of using snapshots. So this is the first thing that I considered to have it in side of Vitest.

Initially, just putting libraries, already mature libraries together, and then formalize some integrations. So I brought up the jest-snapshot package, and I brought the Chai, and then Sinon, to have integrations to them. So then I'm kind of starting to migrate the tests for VueUse, from Jest, as a process of dogfooding, to see what is lacking.

So then I see, "Okay, the interface of \[unintelligible 00:23:31.07\] from Chai is not very similar to Jest." So it would be like \[unintelligible 00:23:36.01\] and then you have the result in it. But in Jest, you have two equals, or \[unintelligible 00:23:44.16\]

So that's kind of a subtle difference, but if you have a large codebase, you have to replace up, and some of them that is not really replaceable... Like find and then replace - some of them you cannot do it. So I kind of think that maybe I can just create utility functions that just rename the function to bound to that instance. So I'm kind of starting with some basic API stats to match with the Jest API. So I don't need to change my testing codebase that much.

\[00:24:16.17\] I have a file called jestcompat in our codebase, and put in -- I think there are only five or six functions, and I just leave it there. It seems like that's all I need. So then contributors come in, and fulfill all the -- I don't know how many, but maybe 50... So those APIs to match with Jest. That would be really great. That would also be one of the great things in open source that people can contribute and improve the software, so you can focus on different things.

**Nick Nisi:** Yeah, that's great. Another question that I had was -- it kind of dives into the weeds a little bit of the way that you traditionally run code before Vite, and then with Vite. Am I understanding correctly that Vite is using more native ES modules, and that's one of the big differences in the way that it's doing its building and bundling?

**Patak:** Yeah. During build, you can think of Vite as like an opinionated \[unintelligible 00:25:19.05\] That is kind of like the traditional, battle-tested setup... But during dev, we don't bundle anything.

**Nick Nisi:** Okay...

**Patak:** We just start the server, and the browser is going to start requesting first the \[unintelligible 00:25:32.29\] and from there all the files, and Vite is kind of a smart server that is going to automatically transpile your TypeScript, JSX, and give something that the browser can actually consume. And as you said, for that it's using ESM modules directly natively.

**Nick Nisi:** Okay. So I guess one of the questions that I have - and this comes up for me personally, because whether we should or not, we rely on mocking in some pieces of our app for testing... And specifically module mocking. Is that something that you can do with Vitest?

**Anthony Fu:** Yeah, we already support that.

**Nick Nisi:** Oh, nice.

**Anthony Fu:** Yeah.

**Jerod Santo:** The answer is yes.

**Anthony Fu:** It's actually made by the team member Vladimir. He contributed a lot on the mocking side...

**Nick Nisi:** Nice.

**Anthony Fu:** And he's working with \[unintelligible 00:26:21.29\] to create several projects. One is called TinySpy, and one is called TinyPool. So for us to integrate - yeah, I think that will be really great. So our team members providing some package for us to make Vitest also better.

**Jerod Santo:** Nick, give us an example of in your test suite when you would do module mocking, and when it's useful. I'm not here to pick on you; I also mock things, so I'm fine with it. I think it's pragmatism, and all things in moderation. So you can definitely shoot yourself in the foot, but there's gotta be reasons why it's useful. When do you guys do it?

**Nick Nisi:** So an immediate example that comes to mind right now - we're actually doing a lot with XState. So we have some components that are using the useActor hook; this is a React project, by the way... But it's using that to get access to the instance of the XState machine. And then it's querying its context and its state values to determine how to render the component.

In the tests we kind of short-circuited that and instead of setting up the state machine and getting it into a particular state to test everything, we just mock the useActor and have it return the exact state that we want it to be in for that test, and the exact context that it has, and things like that. And so - yeah, that requires us right now effectively doing jest.mock, XState, and then we return a mock function for useActor that returns exactly what we want.

I was curious how -- not to dive too deep into the weeds of it, but if it's using more like native modules, is that something that you can get into and do that runtime replacement of "When I import this, actually give me this"?

**Anthony Fu:** \[00:28:08.11\] Okay. So actually, it's a little bit complex. Things like the resolving in Vite is different from Node. Vite is targeting browsers; every import is rewritten into some URL. So in Vitest we're trying to mimic this behavior, so all the plugins can work exactly the same. So we will rewrite your import, and then to do some sort of transformations from Vite.

For example, since Vite supports TypeScript, JSX, \[unintelligible 00:28:41.12\] Vitest also does. So if you import a .ts file, so we will send that file to Vite to transpile it, and then to run the code inside of Node. And then in that file, every import will be also \[unintelligible 00:28:59.18\] to Vite to also run that.

So we have some sort of externalization strategies... For some dependencies we don't transform it, we just use the native ESM to import it. So in Node modules you don't expect plugins to transform it, so we can just do that for performance.

**Nick Nisi:** Very cool.

**Jerod Santo:** So most of the Jest things there -- and of course, Jest, expect compatible APIs, so very familiar to you if you have used Jest or are using Jest now. You have Jest-Snapshot, like you mentioned, Tinyspy you mentioned... It really feels like a batteries-included kind of a setup, even the built-in mocking, stubbing and spies. Is that kind of stuff very opinionated in terms of "When you use Vitest, you're gonna use these things"? Or is it like "Here's what we have set up for you to use. But if you don't like Tinyspy, swap in your own mocking library. If you don't like Jest style tests, you like more unit test style, then swap in other things"? Is it swappable, or is it opinionated? Or both.

**Anthony Fu:** I think some of them are opinionated and some of them swappable. For example, for environments you can use jsdom, or there is an alternative called happy-dom, which I think is smaller and performant compared to jsdom; so you can choose. And also, we don't have the global import. So for example, if you install Jest, you have \[unintelligible 00:30:27.07\] from Vitest especially. But we also have options that are called globals; you can \[unintelligible 00:30:42.02\] to have the same behavior as Jest.

And I think one thing that I would like to mention is that things like we are using Vite, and with Vite we know the module graph of all your project and your dependencies. So we can actually see that, okay, if you change the source files, we know how many tests is linked to this source file. So we can do smart virtual model, I guess. It'll be a little bit like the HMR, but for tests. So when you change the source code, we know which tests should be run, so we run them instantly.

And things like Vite is on demand. We don't bundle your code. Instead, we only just retransform the source code you changed. Everything else stays the same, so it'll be really fast. We made this by default. So if you run the tests, it will run all your tests once, and then it will enter the watch mode. A little bit like when you start up with a test, or like Vite, it will fire up your console \[unintelligible 00:31:52.13\]

\[00:32:00.05\] A small trick is that we will check if it is running a CI. So you can have the send command; if it's running the CI, it will just run the code and retain the result with the process call. But if you are in a terminal, you type it, and the terminal is interactive, we will enter the watch mode.

**Nick Nisi:** Nice.

**Patak:** One thing there that I think that is a massive advantage of Vitest - this thing that Anthony is telling about, HMR, that is extremely fast because of how Vite works... And the feedback loop that it enables is really amazing to develop. In the same way that when you change some colors, you can change it with the slide, and you see how it is applied. If you have Autosave on in Vite, you can do that and you will have the same feeling as you have in the dep tools.

So for tests, this also kind of applies, and you will have the feedback right there. Later, there could be work to integrate this more with \[unintelligible 00:33:02.11\] or your IDE... So in the same way that you have TypeScript errors, and your linked errors, you should have your tests errors right there, as you code. Kind of like a Wallaby experience. So I think this is really important, and is part of the same philosophy that Vite is going for.

**Jerod Santo:** That's super-cool.

**Nick Nisi:** That would be really nice.

**Jerod Santo:** Shut up and take our money. \[laughter\]

**Anthony Fu:** Yeah, it's open source.

**Jerod Santo:** Yeah, I know this...

**Anthony Fu:** \[unintelligible 00:33:33.28\]

**Jerod Santo:** It's a meme. It's a meme. An old one, apparently. So what I think is cool about this, and the tech, of course - I like how the Vite team came together and said "What is missing from this ecosystem?" and Vitest was the obvious thing that you all decided like "Okay, this is a thing that is worth us investing in a first-party, official, what-have-you, from-the-core-team solution to this particular thing.

Are there any other areas in the world of what Vite is trying to do that are currently lacking, where it's like "Okay, next up we're going to work on--" Now that Vitest is "done", is there anything else where it's pretty clear that the Vite team wants to invest in another project of this similar scale, that's currently missing?

**Patak:** I don't think that we should give Anthony more ideas until Vitest \[unintelligible 00:34:24.22\] \[laughter\]

**Jerod Santo:** Okay, okay... Fair...

**Patak:** Yeah, I don't know... There are efforts like ViteBook... Storybook is also working on that, so maybe Storybook will maybe start working on Vite... Cypress started to use Vite a lot... So I don't think that the Vite team is the one that has to complete all these pieces.

**Jerod Santo:** Sure.

**Patak:** This in particular, as Anthony said, was really hurting adoption, because it was one of the main pain points that when people asked, we didn't have an answer.

**Jerod Santo:** So in light of that, why not build it right in?

**Patak:** In Vite?

**Jerod Santo:** Right into Vite. You've got Vite, you've got a full test suite runner right there inside of Vite.

**Patak:** The thing is that the philosophy of Vite is trying to be a small core, and then have a powerful plugin system based on Rollup, so the ecosystem can do this kind of stuff. We are the ones doing it, but it could have been others.

I think that is important, because maintaining Vite already is a lot of work, and if Vite core starts to take small responsibilities, maybe it's going to become unmaintainable.

**Jerod Santo:** Fair enough. I could argue both sides. I think that's fair. That's definitely fair. Anything else on Vitest specifically before I change subjects on your guys?

**Anthony Fu:** Yeah, I just want to mention... So we have not recommended to use it, in terms of like -- there's a lot of people using it, or migrating from this, \[unintelligible 00:35:58.00\] \[laughter\]

**Jerod Santo:** Right.

**Nick Nisi:** \[00:36:02.00\] I'm hoping to ignore that error pretty quick here...

**Jerod Santo:** Yeah, exactly.

**Patak:** \[laughs\]

**Nick Nisi:** Or not error. That message, honestly. \[laughs\]

**Jerod Santo:** Wink-wink...

**Anthony Fu:** So far, from the feedback we see \[unintelligible 00:36:12.03\] or in discussions, most of people are getting quite a lot of performance boost. Also I think currently Vue just switched the default version to 3, and also there's a new create vue command... So it now has a Vitest preset, which is great. So if you do the create vue npm -- I think it's npm create vue. Npm init vue. And then you can have a pop-up to say "Okay, if you want to use Vitest." I also see that quite a lot of projects are already using Vitest for testing. We have a list on our website.

**Patak:** Yeah. Things like Cypress, for example, is starting to also recommend Vitest, because it plays nicely with their story of using Cypress for browser testing, and Vitest for node testing.

Also, circling back to the beginning of the discussion about the State of JS - these surveys, we have to take it with a grain of salt... But Vitest was in the top of the Interests chart, so that was kind of nice to see.

**Jerod Santo:** Lots of interest. Well, from the Vue and Vite core team and community out to the world, it's just been like high-quality project one after the next. So congrats to all of you all for all the work you guys are putting into these things. It makes sense why people are writing your names into the State of JS, and people are interested in Vitest and in Vite... Because it's really cool, the work product that comes from these teams. So I guess congrats to the entire community and to you two in particular for all your hard work, because it's really paying off, and I would say that the open source community really appreciates it.

**Break:** \[00:37:59.18\]

**Jerod Santo:** So next up, let's talk about Slidev. Now, this topic was actually requested... Let me give a shout-out to Adam Young, who requested to have you on the show, Anthony, to talk about Slidev. He says "It's an interesting app of web tech that I have never seen before." So this is presentations for developers. Do you wanna give us the skinny on this project \[unintelligible 00:39:06.01\]

**Anthony Fu:** Okay. This project comes from my -- kind of like excuse to escaping from preparing slides. \[laughter\] You know, preparing slides is really a hard experience...

**Jerod Santo:** Yeah.

**Nick Nisi:** Every developer presenter has that pain.

**Jerod Santo:** Totally.

**Anthony Fu:** Yeah. So as developers, you will have code in slides, and something that the code might be a bit long, and you want to emphasize/highlight some of the lines when you are talking... And the highlight should move, or something else. So I tried PowerPoint and Keynote, and also Google Slides, and I think they are kind of good to making slides, but not very good for developers, for some reason.

\[00:39:54.00\] For example, if you want to highlight your code, you cannot do that inside of either of this software. You need to either make it as an image, as a snapshot, or there's some service to highlight your code with in-line styles of them. So you can paste them inside your notes, but then it comes to the highlighting. At those times, I kind of find it tricky to have a square, a little bit semi-transparent, white, so that however \[unintelligible 00:40:28.19\] So I will have two blocks inside of it, so I have a little gap. At that gap, that code will be highlighted. So when I want to animate, I can move those two blocks up and down, so I can highlight my code. But you know, that can be really time-consuming, and if you want to change your code, you have to do all the process over again. That's kind of my experience when preparing tech-related slides.

I think after two or three slides, or talks, at the third times I kind of think "Okay, maybe I can make one using the web technology." That's \[unintelligible 00:41:10.12\] so I can style with CSS, so I can animate them using code, using JavaScript. So I'm trying to mess up with the Vite and use the Markdown to present the contents of the slides, and I think that's where the \[unintelligible 00:41:30.03\]

So then, even though I use these tools and life is getting easier, but creating content is still a painful process. So when I'm tired to prepare notes, I will go back to the code of the Slidev tool, adding more features to it, something like that... So then I kind of add the features I want to record the slides, and also my face... And sometimes, some of the conferences ask you to record them separately; so you have to record your face and slides separately... And that could be a bit hard to configure... Like, how do you do that? I still don't find a proper way to do; all I know is that I have a really wide recording screen, and one is my camera and one is my screen, and then I will do the processing to \[unintelligible 00:42:25.01\] one video into two... Something like that. So I kind of searched for the right APIs to involve with the cameras and the mic, and then I made the features that you can record your screen and face separately or together, whatever you want, inside of the Slidev web app. So that's kind of the story... So maybe the more talks I do, maybe the more features Slidev will get.

**Jerod Santo:** That's the move. Everybody has to invite Anthony to keynote at their conference. Just line him up with talks, and so we'll just watch Slidev get better and better. \[laughs\]

**Anthony Fu:** No, no. Thank you. Please don't. \[laughs\]

**Jerod Santo:** Well, it's the kind of tool that speaks directly to its audience. It's for developers, you land on the homepage... We should talk about your caution tape, because you also do that here... I think it's a move of yours, to say "Please, it's in heavy development. Experimental. Warning, warning. You do not actually wanna use this." Which maybe that's some reverse psychology and it makes us all wanna use it even more. We're like, "Hm... I'm not supposed to use this. I'm totally gonna try it."

But the fact that it's just Markdown right there, and the separation of the content from the design... Because we get so bogged down, like you said; when you're building these slide decks and you're trying to present your content, and you're thinking about what it looks like, as well as what you're saying... And it just becomes onerous to produce that. But when you can separate them and easily borrow some people's themes, just swap them in, change the themes and write your content in Markdown, which is what we're used to writing documentation, and blog posts, and our notes, and our to-do's... Darn near everything at this point is written in Markdown. Very attractive proposition, I think. This is a tool that speaks to developers. Speaks to me, at least. Nick, Patak? Agree?

**Nick Nisi:** \[00:44:16.05\] A hundred percent. I have been in the same boat, where I can't stand trying to get code to look right in Keynote... And I don't wanna do that, and I am so familiar with Markdown and just love writing everything in Markdown if I can. And this is just the perfect way to bridge that and just have it going. I've used tools like this before, including some that will present directly in Vim...

**Jerod Santo:** Hah!

**Nick Nisi:** ...so I don't ever have to leave Vim... That's really cool, being able to just parse that out into individual slides and then go back and forth. But this obviously does so much more, including the ability to actually run code.

**Jerod Santo:** Right.

**Nick Nisi:** That is pretty cool. Do you wanna talk about that a little bit more?

**Anthony Fu:** Oh, so at that times I was trying to do presentations for Vue Composition API. So one of the core features of Vue is the reactivity. You basically maintain the relationship of your data; of your state, I guess. So when you change some of the states, your view will change. And also, you can have some sort of computing property.

One property \[unintelligible 00:45:20.08\] So once you update the state, the commit will be changed. This way you have a single source of truth. So when I want to present it in a reactive way -- so I kind of think, "Okay, maybe I can use things like - there's already a Vue app. Vitest is built on top of Vue 3, so I can use Vue components inside of it to do something interactive. So when I talk about these slides, I can click the buttons, and maybe the number will bump to 1, or 2, or it will change some behavior or layout \[unintelligible 00:45:55.15\] So this one, I can make this really interesting. Or more expressive to what I'm trying to talk. And also, this is what you've got, where you actually do it yourself to create the app. So I can have part of your app or a part of the result inside of my slides, which I think is great.

And I also like -- one cool thing is that I could deploy the slides into a website, so that the audience can try out themselves. So I can have a playground, and you can see what your input would affect the result.

**Jerod Santo:** So many features... Export to PDF, PNG, you can export to a single-page app, like you said, record the presentation, presenter mode, drawing and annotations, editor integrations... You must do a lot of talks, man, because you've got lots of features in this sucker. \[laughter\]

**Nick Nisi:** I was going to ask about presenter mode... How does that work? Presumably, you can have the presenter running on one screen maybe, and then in another browser window have the presentation view. Are they kept in sync? And how does that tech work?

**Anthony Fu:** Basically, at the core of Vite it uses a WebSocket to do the hot replacements, to notify the clients which module has changed, and what components you should reload. Basically, I kind of reused that WebSocket to share between two instants of the web. Actually, when you open up the presenter mode, it will be actually \[unintelligible 00:47:28.11\] so I can change the view differently. So with that, it will connect back to the server, and the server will pass this message to the slides. So when you press next slide inside of a presenter, it will basically sync between two instants.

So with the web tech, you can actually have it on your phone, so it will kind of expose the servers to your local network, you can connect it inside your phone, so you can use your phone to control your slides on your computer.

**Nick Nisi:** Nice. That's cool.

**Jerod Santo:** That is cool.

**Patak:** \[00:48:04.18\] One thing there - as a user, that presenter mode was amazing to give a talk. It makes things so simple. When you have all the nodes there already, you can put the camera mode... I did a recording and it was so easy to do it with it. It's an amazing feature of Slidev.

**Jerod Santo:** Well, and an open source project, like all of these things... And a way to get involved on this one - it looks like there are some official themes and some community themes. But if you have a design eye, or if you wanna practice your CSS skills, it sounds like a fun place to get involved would be to submit and create themes. Because once they are out there and usable, it's so easy to swap in between and pick your favorite theme. It sounds like a great way to get involved. Is there any other things that you're looking for with regards to Slidev and community support?

**Anthony Fu:** I think that people are really helping a lot. For me, it was actually the project that I made for myself. And then it's in open source... I think it's good to open source it, and then people might use it. And also, people contributed a lot of new things, features, bug fixes to it... So basically, in current stage I would think it will be into maintenance mode, I think. Basically, you'll see me back to working on it when I'm starting to prepare another talk. \[laughter\]

**Jerod Santo:** Gotcha.

**Anthony Fu:** Luckily, I have no talk currently.

**Nick Nisi:** Conference-driven development.

**Jerod Santo:** Conference-driven development. Okay, so it's pretty much done... Still experimental, according to the website, but pretty much done... \[laughter\] And may have some new features, but not really looking for heavy development support. Themes will be cool, but it's kind of a thing that you did yourself in open source.

One last question for you... Coming in from the audience, Danny Feliz asks "How can you be so productive? Does antfu7 have a dozen developers committing to his account?" Tell us some of your secrets, because you're prolific at this point. How are you so productive?

**Anthony Fu:** I don't know... Maybe I can split into multiple ones...

**Patak:** That's also my theory. That's also my theory.

**Jerod Santo:** Alright...

**Anthony Fu:** For me, I'm the number seven of the Anthony, so maybe next time you are seeing the other one. \[laughs\]

**Jerod Santo:** Ah, so it's like multiplicity.

**Nick Nisi:** That's why you keep dropping. It's a different one. \[laughter\]

**Jerod Santo:** There we go...

**Anthony Fu:** Okay... So back to seriously... I'm just really enjoying working on things. I think there's a lot of different \[unintelligible 00:50:27.26\] they are liking my work, or thanks emails, or have some sort of events... Also, I'm kind of really enjoying doing things, and to explore something that isn't there before. So I would like to see, "Okay, this one plus this one... What will be the combinations?" I think that sort of thing. So I think that's the thing that keeps me doing it.

\[00:51:09.02\] Regarding maintaining those project - I think \[unintelligible 00:51:11.04\] I have a very great committee behind. People are helping me out. For Vitest, we have six-member teams. Actually, I have \[unintelligible 00:51:23.05\] the projects keep running very fast. The members are still maintaining the pull requests, and the issues, to the release. So I think similar to other projects we've used, we have ten(ish) members, and we have many functions, and many people to contribute new functions to it. I think that's it... I think that's how open source makes me really enjoy working on it.

**Jerod Santo:** Well, we're surely enjoying you working on it as well, because all of the fruits of your labor are enjoyed by many people in the community, to the both of you. I think these are really cool projects. Slidev, check it out (sli.dev), Vitest lives at vitest.dev. Of course, all the links to all the things, as well as where you can hook up with Patak and Anthony on the internets will be in our show notes. They both do open source, they're both sponsorable, so if you want more cool things from these two, definitely consider sponsorship as well. Fellas, any final words? Patak, Anthony? ...before we call it a show.

**Patak:** Thanks a lot for the invite. It was great. I think, as Evan said, you have to try it. So try Vitest, and feel the difference.

**Jerod Santo:** Nick, anything to say before we hang up?

**Nick Nisi:** I would echo that. That's been my experience, and you will be blown away how fast your dev environment can be, and your builds can be.

**Jerod Santo:** And your tests can be.

**Nick Nisi:** And your tests, yes.

**Anthony Fu:** Yeah. I just wanna thank everybody. I think it was a great discussion.

**Jerod Santo:** Well, we really enjoyed it; we appreciate you guys spending time with us. Thanks again to Adam Young for requesting this episode. We do take requests, just like any good wedding DJ does. So head to JSParty.fm/request and let us know what you wanna hear about on the pod. That is the best way for us to directly serve the audience, by doing the shows that you all request. So we are happy to do that, we appreciate good ideas for show, we appreciate all 12 of our live listeners. This has been JS Party, I have been Jerod Santo... We'll talk to y'all next week.
