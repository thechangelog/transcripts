**Amal Hussein:** Hello, JS Party listeners. This is Amal here today, I've got a very special show... We've got Nick Nisi on the show with me today. Hello, Nick.

**Nick Nisi:** Hoy-hoy. How's it going, Amal?

**Amal Hussein:** It's going! I'm in Mexico, and so I apologize for any audio awkwardness, team -- or team... I'm so used to talking to my workmates. Sorry for any audio awkwardness, listeners. You are really my team; just like an extended JS family team. Right? So I apologize for that. But we've got Debbie O'Brien on the show with us today. Welcome, Debbie. Hello.

**Debbie O'Brien:** Hello. Thanks for having me.

**Amal Hussein:** Yes, we're so excited to have you. Thank you so much for finally coming on -- I shouldn't say finally, but I feel like we've wanted to have a show about Playwright. It's like been on like our heads forever. And then we finally got our act together enough to ask you to come on the show, so... Thank you for coming. So Debbie, I already spilled the beans about Playwright. I guess that's what the show today is about... Can you tell us a little bit about yourself?

**Debbie O'Brien:** Sure. So yeah, my name is Debbie O'Brien, I'm Irish, but I live in Majorca, and I work for Microsoft as a senior program manager, with a focus on advocating for Playwright. So basically helping to build a community, making sure that everybody in the world knows about Playwright and loves Playwright, and gets to use it, and basically just - yeah, build that community up. So that's what I'm basically involved in. I don't know how far, how much more you want to know about me. I go running around the island of Majorca, and cycling, and I spend three hours a day doing sport, and... You know...

**Amal Hussein:** I want to ask you a really, like, "please don't judge me" question, which is "Where is Majorca?" And then also tell us about what was life before Microsoft? How did you end up there? What were you doing?

**Debbie O'Brien:** Sure. So Majorca is a very small island. If you've heard of Barcelona in Spain, you just go across the water... Many people have heard of Ibiza. Ibiza is a smaller island of the Balearic Islands... So I could basically cycle around the island in a day; it'd be a good couple of hundred kilometers, but I've done it.

Yeah, so before Microsoft, I was working a lot with open source. I worked at a company previously called Bit. It's a company about components. And before that I was working at Nuxt. You might have heard of Nuxt, as in the meta framework on top of Vue. And then before that, I was working at agencies and other small companies here on the island of Majorca, mainly in the hotel industry, because that's what this island has, right? It's all tourism.

So yeah, it was a lot of fun... Very involved in the frontend... When I worked at the agencies, for example, my mission was to create really good websites for hotel chains, and try and make sure there was great performance, add testing, teach their developers how to have better code... So I was constantly fighting for developers to do testing, right? And then I always had like managers saying, "No, we have no money. Why not just remove the testing and we'll sell it at this price, and we don't need to do testing?" And I'm like "Arrghh...!" So yeah, very frustrating. So it's nice to actually work now in Playwright and enforce testing on the world... \[laughs\]

**Amal Hussein:** Yeah, you're amongst your people.

**Debbie O'Brien:** Yeah, but it's about making testing easier, right?

**Amal Hussein:** It really is. Yeah. Now you're not only amongst your people, you're actually part of helping shape that story for developers, who are your customers in this case.

**Debbie O'Brien:** Yeah.

**Amal Hussein:** So first of all, Playwright - I feel like it's like 1960 and the Beatles have come out with, I don't know, their second album, or third album, and it just feels like Microsoft just keeps coming --

**Debbie O'Brien:** I wasn't alive then... \[laughs\]

**Amal Hussein:** Yeah, neither was I, in all fairness... But the point is, I don't know, it's like one hit after another in terms of like large-scale open source projects that are gaining a ton of adoption. I was just looking at the GitHub page this morning... 44,000 stars. That's huge. 44,000 stars is huge.

**Debbie O'Brien:** And we want more. So if you haven't starred us, star us, because we love stars; we live by stars. If we don't get stars, we don't get paid, so make sure you give us stars. \[laughs\]

**Amal Hussein:** \[00:06:01.02\] They get paid in stars. You heard it here first.

**Debbie O'Brien:** We get paid in stars, yes. \[laughs\]

**Amal Hussein:** So besides getting paid in stars, what is Playwright? Can you just tell us what is Playwright in your own words, and for some of our listeners who may have not been familiar with this project?

**Debbie O'Brien:** Never heard of it.

**Amal Hussein:** Yeah, never heard of it.

**Debbie O'Brien:** Sure, yeah. So everyone should have heard of Playwright. If not, then you're not following me... No, seriously. So Playwright is about getting end-to-end testing, automated end-to-end testing on the browser. So you have a website, for example - and I didn't know if you've ever worked in the frontend world where you manually-tested your application, as in you opened up a form and you manually filled out that form, and pressed the Send button, and then you saw there's an error, and you went and fixed it, and then you manually went back and started doing it again, and found another error... And this is time-consuming, right?

**Nick Nisi:** Is there any other way to test?

**Debbie O'Brien:** \[laughs\] There wasn't at the time, but now... \[laughs\]

**Amal Hussein:** It's like, "Why are you encroaching in my job? \#jobsecurity" \[laughter\]

**Debbie O'Brien:** But it is actually -- like, I live very much on the edge of technology, and I live in the world that not everyone lives in, which is I do everything that's like out there, that's new and shiny. But not everyone is. And I spoke to developers at conferences who are still manually testing their application, who are still manually filling in that form. And we need to stop, and let those people have a better life, because they don't realize that there is an alternative, and it's gonna make their life easier.

So by automating your tests, basically you write that test, and then every time you run that test, the Playwright or the test is going to actually fill everything in for you, so you don't have to manually do it. And computers are much faster than us at the end of the day, right? So it's gonna get done so much faster, and then you're gonna find out that error, you're able to fix it, and then take your whole application, a massive application -- it's impossible for you to manually-test your whole application, right? So automating your tests - that's basically what Playwright is about. You do that, writing tests is going to be easier, testing your application is going to be easier... And I think for me, personally, it's about trying to get developers to write tests, because there's a big thing, right? We hate tests. We don't want to do tests; we don't have time to test. And trying to get that stigma away and change the culture, so that actually people do tests as part of their development phase... Because then you can walk away on a Friday happy with your code, knowing "You know what - my code is good, because I tested it, and I know it's good, and I can spend my weekends feeling good, knowing on Monday I'm not gonna have any problems."

**Nick Nisi:** Dream...

**Amal Hussein:** Yeah, no, I mean, absolutely. And the way you're talking about Playwright - first of all, I have like a different understanding of the name Playwright now. Thank you for helping me see the light on that. It's the playwright, I get it. It's like the -- it's the thing that runs and --

**Debbie O'Brien:** The person who writes the play, yeah...

**Nick Nisi:** I love it. I always assumed that the name Playwright came from its origin, like playwright itself, and its origin, which does have some history with another project called Puppeteer.

**Debbie O'Brien:** Yeah.

**Nick Nisi:** Is that a play on that project?

**Debbie O'Brien:** It is as well, yeah. Basically, a Puppeteer, like the puppet master, who makes the puppets do all the work... And then Playwright started as a fork of Puppeteer. But the creator of Puppeteer is working on Playwright, so that fork then went to a completely different direction, like all forks \[unintelligible 00:09:25.27\] they are very close together, and then they just go completely different, right?

Then playwright is the person who writes the plays, and the player uses the puppet master to do that... So it's like we're above, on top of that, putting it all together, right?

**Nick Nisi:** Yeah, I really like that.

**Amal Hussein:** \[00:09:43.23\] Yeah. So I have to ask, because I know our listeners are also curious about this as well... This project was forked from Puppeteer... So what was the driving factor for that, or -- versus just contributing to the same open source project? Because I think one of the things we hear often about open source is like the benefit is you can carry your resume around with you, right? And then you can continue to work on stuff, regardless of where you're working. So was it like "Hey, we want to add certain features, and we want to take the project in a different direction"? Was that the driving factor?

**Debbie O'Brien:** Yeah, I don't have all the details, because I wasn't part of the team at the time... But at the time, the team were in Google, working on Puppeteer, and Puppeteer was open-sourced... But Puppeteer was made for what Puppeteer was made for, right? And Microsoft wanted to invest in testing, and they needed a team to help build something, because of -- we have a problem in the industry when it comes to testing; we don't have a lot of amazing solutions out there, so it made sense to find amazing people who already have experience in automation, right? But now you've got to start with something, so you start with a fork of Puppeteer. But Puppeteer wasn't made for testing, right? So that's why it has some problems if you're going to do testing. But because the person who created Puppeteer is working on Playwyou take that fork, you know the code, it's your code, you built it, so it's easy to modify it to do what you want it to do, to build on it... Which is how Playwright has grown so fast, because it has that --

**Amal Hussein:** Strong core.

**Debbie O'Brien:** ..solid base, and a very strong team as well, that have been working together already, for many years, and were able to build Playwright to do exactly what it was required to do, which is automated browser testing.

**Amal Hussein:** Wow... That's super-neat. So what do you see as like the unique value props that Playwright brings to the table? What is it uniquely bringing to the table where it kind of shines above the rest, in your opinion?

**Debbie O'Brien:** I think there's so much, and that's the cool thing, right? So first of all, very simply, you've got being able to test across multiple browsers. So even if you're on a Windows computer, you can test Safari. It'll just run all your tests on any of those, also emulating your mobile devices. It's not the same as a mobile device, but it's a very good emulation. So you can now test against mobile Safari etc.

Then you've got tests running in parallel, which means it's super-fast. And we don't have time, right? We want to get things done, we want our tests to just run super-fast. If you run them all in parallel, obviously it's gonna run much faster, because that means they're all running when they're ready to run. I'm not even explaining that very well, but it doesn't have to wait for the other one to finish.

**Amal Hussein:** Yeah, it's maximizing compute.

**Debbie O'Brien:** Exactly. So you don't have to like have that coffee break for 20 minutes and wait for the tests to pass and then come back.

**Nick Nisi:** That's really cool. I didn't actually know that it -- or I didn't realize maybe that it ran things in parallel, or that it could. I've used Playwright before for testing, and I always used it in headless mode, so I never really, I guess, acknowledged that. But it probably was...

**Debbie O'Brien:** Watched it. Yeah.

**Nick Nisi:** If you do do it in non-headless mode, or in headed mode, I guess, does it just pop up several windows and show you everything happening all at once?

**Debbie O'Brien:** Yeah, but I would say the best way to really see it in action is to use the VS Code extension. And if you open the example to-do app that comes with it - so that's going to load the tests into one file, and you'll see it start maybe on test one, and then you'll see maybe test six will run, and then test three will run, and it's all in different orders, and it's just like going really fast, as opposed to going 1, 2, 3, 4, 5, 6.

**Nick Nisi:** Oh, cool.

**Debbie O'Brien:** That's probably the best way to see it, because you can actually go, "Oh, I can see what's going on", right?

**Amal Hussein:** Yeah, but talk about like having something that forces your tests to not reuse state, and like forcing them to be sandboxed... I think the first project in the JavaScript community to do that type of tests run in parallel and at random was Ava. That was a headless project that also ran in Node; not a cool browser testing tool, but it does run in a Node environment. And I remember when teams were switching from Mocha to Ava, not only did they get the speed gains, but all of a sudden a bunch of new flaky tests appeared out of nowhere, and it was because their tests weren't sandboxed, and they were kind of relying on the state of the previous test.

**Debbie O'Brien:** Yeah...

**Amal Hussein:** \[00:14:03.27\] So the fact that -- it's so cool to parallelize and force that kind of sandboxing... But I think what a cool problem to solve for browser tests, because I think that's like a very unique feature; in order to run things in parallel like that, you need to have a bunch of very fancy setup in your CI, and it just feels like Playwright kind of smoothed it...

**Debbie O'Brien:** I'm going to jump in here and say the word "test isolation."

**Amal Hussein:** Okay. Test isolation.

**Debbie O'Brien:** Yeah. So isolating your tests means that --

**Amal Hussein:** This thing that I'm describing, in many words...

**Debbie O'Brien:** Yeah, it's like you're trying to get the word out, right?

**Amal Hussein:** Yeah, yeah...

**Debbie O'Brien:** So it's basically - how I would explain it is if you think of an incognito browser window - when you open that incognito window, no links are coming over from a previous window, right? Everything is fresh, everything is new. And that's basically how you can imagine it, right? So everything is isolated, which means that when you run those tests, no state leaks from one test to the other, which makes your test less flaky. You don't have to clean up after the test, because a new browser, a new test isolation, a new browser context is created every time you're running your test. And it's super-cheap to do it. It's not like this is a really expensive process, right? ...which is how it's made really fast. But yeah, it means if you want to share something across a lot of tests, you can do that with fixtures, and... Page object model is another one, for example, that people know of... But let's say fixtures, which is what we recommend - then you can kind of say \[unintelligible 00:15:34.25\] But it's using it each time, as opposed to "Okay, here's my test, and I want you to use tests A's --" No, no, test A and test B are two different tests, running completely different, and don't talk to each other ever.

**Amal Hussein:** Right. And I love that, because state is like the hugest -- did I just make up a word? It is the hugest source of test flakiness in general; like, state issues in your tests. They just cause flake. And there's lots of different kinds of state. Even just like you thinking the DOM is ready when it's not, or you thinking that this image is loaded, but it's not, or whatever it is. There's so much.

**Debbie O'Brien:** I see, and that's where auto-waiting comes in.

**Amal Hussein:** Yeah, I know. Tell us about auto-waiting, Debbie.

**Debbie O'Brien:** Yeah. So Playwright will auto-wait for something to be ready on the DOM, so you don't have to think or calculate "Oh, this needs three seconds to be able to be clickable", right? Playwright is just going to wait, it's going to do all that for you. So you don't have to worry about that. Now obviously, if you have something that's going to take 10 seconds to be clickable, then you have a problem in your code, and Playwright test is not going to wait that long, and it's gonna say --

**Amal Hussein:** And your user experience, I would say... \[laughter\]

**Debbie O'Brien:** Exactly. So now it's time to fix your code, not your tests. But you could manually put a timeout if you felt you need it for whatever reason, until the code maybe is fixed. You could do that. But in general, Playwright will wait for everything; you don't have to set timeouts, it gets done for you, and that makes it really easy, because you just have to concentrate on writing a test and not having to think about all this setup.

**Nick Nisi:** This is encroaching on my trademark sleep method that I add to every test suite...

**Amal Hussein:** Nick's like "If I ain't sleeping, it ain't sleeping." I don't know... \[laughter\]

**Nick Nisi:** No, this is really great, and there's a lot of cool things. One thing I wanted to ask about though, because I was kind of fibbing when I said that a manual test is the only way to go, or the only way I've gone...

**Amal Hussein:** I couldn't tell you were fibbing, Nick.

**Nick Nisi:** I know.

**Amal Hussein:** I have like a Dear Nick letter that I'm writing to you... \[laughs\]

**Nick Nisi:** I'm somewhat old-school, in that I have been around long enough that I was using other tools like this, that were specifically like using - I think it was called... Well, Selenium, but I think a WebDriver was the underlying like API, or whatever... And I'm curious, is Playwright built on top of that legacy, or is it doing something different to orchestrate these browsers?

**Debbie O'Brien:** It's doing something different. It's using the Chrome protocol. I don't know too much about it; I couldn't go too deep into that. But yeah, it's not using WebDriver \[unintelligible 00:18:09.09\] protocol instead. If you know about those, you'll know the difference...

**Nick Nisi:** \[00:18:16.29\] I don't... So it's okay... \[laughter\] Like, it does support more than just Chromium browsers too, that's an important thing to highlight.

**Debbie O'Brien:** Exactly. So all browsers, WebKit, Chromium, and even Opera etc. So it can run on all browsers, which is basically what you want to do. So yeah, it uses the Chrome protocol to be able to do that, if that makes sense.

**Nick Nisi:** Coming from that legacy, and hearing that it doesn't use Selenium is like a breath of fresh air... It's like "Wow, it might actually be stable and work really well."

**Debbie O'Brien:** Yeah... No, you can't like use Node. That wouldn't be good.

**Amal Hussein:** Yeah. Well, we're gonna get into all this other good stuff, with features, and I'm super-eager to kind of -- you just drop a big bombshell, Debbie, which is like multi-browser support... We can't open that can of worms without going deep, so I want to just leave that for the second segment. We'll be right back, everyone...

**Break:** \[00:19:09.13\]

**Nick Nisi:** Do Debbie, you mentioned that Playwright supports multiple browsers. I thought that'd be a good place to dive right in, in the new segment... So do you want to talk about that a little bit?

**Debbie O'Brien:** Yeah. I guess you could say very, very easily -- say you're using your config file, in Playwright... You can literally just -- it's actually there; you just have to uncomment out the other browsers. And if you're using the VS Code extension, which I haven't even told you about... But from the VS Code extension, it asks you which browsers you want to install, and you just select the browsers flavor. Playwright will then install those browsers for you. So you don't even have to have these browsers on your computer, right?

**Nick Nisi:** Oh, nice.

**Debbie O'Brien:** You've now got these browsers, and Playwright will run the tests on all those browsers that you have decided you want to run them on. So if you are having problems on, let's just say Safari, because sometimes people have problems with Safari... \[laughter\] That means that when you go to production, without having to do any extra work, your test is going to run across all those browsers, and you're going to find those Safari bugs before you go to production. You're going to be able to fix it, it could be a tiny little CSS issue - normally there's a CSS issue - and then you fix that, and it's going to work in Safari, and all your users are going to be happy, right?

So yeah, as well as mobile. You can test across mobile responsiveness, make sure everything works on those emulated devices as well. So just being able to spin up any browser without any effort, without actually doing anything, without opening another website or tool, you just literally -- it just works. It's just easy.

**Nick Nisi:** Yeah. Does it support branching within those browsers? So if I'm writing a test on some specific feature... Let's take Riverside, for example, because this is the app we're using to record this podcast... And if I were to run the tests across all browsers, when I get to probably 99% of the tests in Safari, it would pop up a message that says "This works best in Chrome", or Edge, or some message like that.

**Debbie O'Brien:** \[laughs\] Yeah...

**Nick Nisi:** So is there like a way to be like "In Safari--" or "Skip these tests if Safari", or something like that?

**Debbie O'Brien:** \[00:22:11.29\] So there actually is, believe it or not.

**Nick Nisi:** Nice.

**Debbie O'Brien:** So for example -- I'm going to give you an easier example, so you can kind of picture it, and a lot of users can picture this... You take navigation, you want to test the navigation menu of your website, right? And then you want to test it on a mobile device. The mobile device has a hamburger menu on most websites. So now it's a little bit different. The user experience is different, because what does the user have to do? They have to click this hamburger menu, and then they can click the About page. Then on the About page, if they want to go to the menu again, they have to click the hamburger menu again, and then they click the Features, or whatever page they want to go to next, right?

**Nick Nisi:** Yeah.

**Debbie O'Brien:** So when you write that test, previously you might have written two tests, and say, "Use mobile" and the other "Use desktop" kind of thing. But you don't need to do that; you can write one test, and you can use the "is mobile", right? So you just pass it in; when you're writing your test, you'll have a page, and you can write in page, and then comma "is mobile", and then you put that. If it's mobile, click hamburger menu, and then you go on to the next - whatever it is; click on the About page. And then if it's mobile again, click hamburger, and then click on the Features page. And you can do that with other things as well.

So once we know what you're using, what device etc. then you can kind of test it in. So I've never done the "If it's Safari", but I'm almost sure you can do that, because you can do "is mobile", so I'm imagining you can do the same thing there. So that's what I would suggest.

**Nick Nisi:** Yeah. And you have full access to the entire browser, right? Or to the JavaScript global namespace for that instance, right? So you could probably check something--

**Amal Hussein:** The user agent...

**Nick Nisi:** Yeah, exactly. You can check the user agent.

**Debbie O'Brien:** Exactly. Yeah.

**Amal Hussein:** So just so I understand this... There are still limitations for OS, I would imagine, right? For example, if you're on a Windows computer, would you still be able to launch a Safari instance? I don't know, this is a genuine question.

**Debbie O'Brien:** Of course you can.

**Amal Hussein:** What do you mean -- oh, my God. Of course you can? This is amazing.

**Nick Nisi:** What?! You just blew me away.

**Debbie O'Brien:** Of course you can. \[laughter\]

**Amal Hussein:** Please explain this black magic, Debbie...

**Debbie O'Brien:** I mean, Playwright installs those browsers for you, so it spins up an instance of those browsers... So it's got everything it needs. I mean, think about it - your tests need to run on CI, right? So how are they going to run in CI? So you're able to run up in like headless mode on CI, so you're able to run any browser from anywhere. So it doesn't matter what system you're using, you can spin up a Safari browser, and run the tests across Safari, and any other browser; not just Safari has the problems. \[laughter\]

**Amal Hussein:** Wow... What about Edge?

**Nick Nisi:** I didn't even think of that, but...

**Amal Hussein:** I know. Mind-blown, right, Nick?

**Debbie O'Brien:** Yes, Edge runs on Chromium. So Edge and Chrome both run on Chromium; and Safari runs on WebKit, so it's running up an instance of WebKit, which is the Safari browser. The engine, basically, that is used.

**Amal Hussein:** Yeah. Remember old Edge, non-Edge HTML...? Or maybe it was HTML, and now I'm getting confused... But the version of Edge before it was Chromium. I mean, granted, I think that whole browser is more or less deprecated at this point, but I mean, I'm sure it's still in use... And so would you be able to test on an old Edge or an IE? Is that possible, or is it specifically strictly for modern browsers?

**Debbie O'Brien:** I have no idea. I've never had to deal with that problem.

**Amal Hussein:** Yeah. I'm jealous...

**Nick Nisi:** We just dropped support for IE 11 in June, when IE 11 officially died...

**Amal Hussein:** Yeah, it's probably strictly modern, which makes sense, right? Like...

**Debbie O'Brien:** Let's not resurrect the dead... \[laughs\]

**Amal Hussein:** \[00:25:51.22\] I know... But you know, you'd be surprised; government people just have to support governments; believe it or not, the testing surface is still a little wider... But that being said, this is a really powerful superpower. Being able to easily test across multiple browsers, and having that parallelization set up kind of turnkey, out of the box... That's really solving a huge pain point for developers, Debbie. It's tremendously exciting.

**Debbie O'Brien:** And you don't have to have those browsers downloaded on your computer.

**Amal Hussein:** Correct.

**Debbie O'Brien:** Say Firefox - and there's nothing against Firefox. I just don't use it. It's amazing, but I don't use it. So I don't have Firefox, but I test across Firefox, and I have no Firefox on my machine. So it's kind of cool. You don't have to like "I'm going to download all these browsers, and then open each one, and then...", you know...

**Amal Hussein:** Right. But in terms of debugging, what's your debugging story like if you don't have Firefox downloaded, but you have Firefox being tested in Playwright, and you have an issue with Firefox? So what's the debugging story at that point? Do you have to go and download Firefox? Or can you use the instance that Playwright creates to debug?

**Debbie O'Brien:** Yeah, you don't need to download that browser on your computer to be able to debug, because you don't need to. You can debug straight in the actual browser that's -- there's a couple of ways of debugging. I use the VS Code extension, which is absolutely amazing. So from the VS Code extension, I can actually debug that test. I can open that test, and I can set a breakpoint in VS Code itself, and then I can step through it, and I can see what's going on, where the error is, and then debug it right there and then. Maybe fix that code, whatever it is... It could be a small CSS issue, or JavaScript undefined, something... Fix it, and then re-run that test again, open it up... It'll show me, if I want to - I can press Show Browser, so I can visually see it open up Firefox. I can say "I only want to debug in Firefox", because maybe it's passing on the others, so I don't wanna waste time running the others. I'm focusing on this one. So I'll say "Only Firefox. Let's run debug mode, and let's debug that." Okay, then that works, and then I can rerun all the tests and all browsers again, to double make sure.

But as you're running it with your browser, you can see the different browsers coming up, and you know the difference between WebKit, Chromium and Firefox. You can visually see it, and you know which one is that you're watching going through it.

But yeah, you can also use the terminal, and you can use the debug commands as well, if you don't want to use the VS Code extension, for whatever reason. Maybe you're just a terminal person, or maybe you're using a different editor, right? There's a couple of different options of debugging... So it's kind of cool.

**Amal Hussein:** Yeah, super-cool.

**Nick Nisi:** And that really highlights a really important point and perk of something like Playwright... Because I'll tell you, we have a lot of React tests in our app, and for a majority of them we're using Jest plus React testing library, which is kind of giving us this test from the users' perspective thing; you have a screen object, and you can \[unintelligible 00:28:57.09\] how it's actually rendered. But it's not rendered in a browser, it's rendered with jsdom, and so it's not like a real environment. It's not often, but things do arise that are not actually happening, or happening in jsdom and not happening in an actual browser... And then when we go to debug it, which is quite often, it's like, the only thing that we have is screen.debug, which spits out a bunch of HTML, and it's like "Well figure it out from there..."

**Debbie O'Brien:** Yeah...

**Nick Nisi:** And with auto-generated classes and stuff... It's like, "What is going on...?" half the time. Whereas Playwright gives you this amazing ability to test in the actual environments, and when things go wrong and you're like "I'm trying to click this button." Well, you can spin it up in that instance, like actually see it run, and immediately see "Oh, that button is disabled. That's why it's not clicking" or something like that. Like, it's just so easy, and so much more practical to do that. So it's a big benefit of why we're looking at moving over to this, because that would just save so much time.

**Debbie O'Brien:** Yeah, and you're talking about a real click, as opposed to an emulated click.

**Nick Nisi:** Exactly.

**Debbie O'Brien:** It's a little bit different to actually a real click happening and a kind of fake, environmental kind of emulated click. So they can behave a little bit different.

**Nick Nisi:** \[00:30:13.09\] Precisely.

**Debbie O'Brien:** One thing you also mentioned there was Testing Library, right?

**Nick Nisi:** Mm-hm.

**Debbie O'Brien:** And I know there's a lot of people out there that are big fans of Testing Library; I used to use Testing Library as well. Did you know, did you watch their last/latest release video, where we worked with Kent C. Dodds to bring in Testing Library-inspired API, so that we can have that same kind of Testing Library feel of get by roll, get by test ID, get by title, get by alt, etc?

**Nick Nisi:** No, I did not know this.

**Debbie O'Brien:** There you go. \[laughs\]

**Nick Nisi:** That makes converting so much easier.

**Amal Hussein:** Yeah, this is starting to sound like -- it's like an infomercial for libraries, open source libraries. This is like "Did you know...?" No, I didn't. Oh, my gosh. So infomercial continuing here... First of all, I'm just kind of amazed at the words that you've just said, Debbie...

**Nick Nisi:** That was genuine though.

**Amal Hussein:** It was, it was, of course; all of this is genuine. No, Debbie, hold on... Did you just say "Did you watch the video of the release?" I'm like "Damn, open source libraries are coming out with videos now when they release?" That's like taking it to another level.

**Debbie O'Brien:** Playwright is. Of course it does, yes. Every month we -- we create a video every single month; there's a release every month, and we'll create a video and show you the new features and everything that's new.

**Nick Nisi:** That's cool.

**Debbie O'Brien:** So if you're trying to like keep up of the changes...

**Amal Hussein:** Just watch the video.

**Debbie O'Brien:** ...you can just watch the short video... Which we do try and keep it short; the guys will go through it and tell you "This is what's changed. This is what's new; this is what we recommend. This is the best practice." And then you can just watch that, and then you go, "Oh my God, I need to change my code. I need to do this." Or "Oh, that's a really cool feature I didn't know I could. use. Now I can use it." Or maybe there's nothing new that you particularly are interested in... But there's a ton of features all the time, so it's really cool to watch those videos and keep up to date with the changes... Because the latest changes, like the testing library-inspired API - this is going to help you write better code, because now you're accessibility-first. And we haven't even got into the other tools that I'll mention in a second, which is like the generator and the VS Code extension for choosing the right locator. So if you don't know which locator to use, because you're new to testing, and you're like "What do I use? Do I use \[unintelligible 00:32:21.29\] What do I use?" So the selector is going to pick it for you; you just have to click and hover over the page, and it's going to take that and it's going to give it to you, and you know, "Okay, this is a get by roll link, the name is about." And then you copy that into your test, right? Rather than trying to think, "Oh, I need to write my test, and I have no idea what to do."

And then if you get one that says "Get by roll" -- and maybe it's a CSS selector. I don't think we will give that to you, but say you had that. That's a kind of really bad selector, right? So something is missing in your code; maybe your code is not accessible. So now you need to improve your code to try and actually give an accessible role to something, so that the code is better. The test is going to now help you write better code. So that's like the cool thing I think about the new changes to the new API that came out in the latest one.

**Amal Hussein:** Selectors, yeah.

**Nick Nisi:** Yeah.

**Amal Hussein:** Yeah, in the latest release. And what number is that?

**Debbie O'Brien:** 1.27.

**Amal Hussein:** So that's really cool... And I'm curious, this kind of multi-browser support, this forced accessibility, sanity checks, making sure that by your code being accessible to the tests, it's also accessible to a user that may be using a screen reading device... So that's incredibly awesome. What are your other favorite bits of magic, Debbie? Because it seems like, from listening to you for the past however many minutes, it really does seem like Playwright has taken some of those very common problems that developers face when writing browser tests, and really -- how do we smooth over that pain? You mentioned some VS Code integration, and some other things... So can you talk about some of your favorite things? I know there's too many to cover in this podcast, but we'll just pick your favorites.

**Debbie O'Brien:** \[00:34:10.00\] Yeah. Okay, I want to speak about two. And then I'll put it in half, and then you're gonna go "Tell me about the next one!" Right?

**Amal Hussein:** Okay, okay. Yes.

**Debbie O'Brien:** So I'm gonna stay in the first one, and then when you're ready for the second one, you go, "I want the next one now!"

**Amal Hussein:** Alright, I love it. It's a first in/first out queue.

**Debbie O'Brien:** Yeah. But before I even go in the first in and the first out, just remember, the VS Code extension is going to make your life a lot easier when you're getting started, because now you're right inside VS Code, you get a little green button with a triangle, and you press Play, and that runs your tests for you. So you don't have to open terminal at any stage to write your test, run your test, debug your test.

**Amal Hussein:** Oh, wow.

**Debbie O'Brien:** So now the question is, "How am I going to write my tests?"

**Amal Hussein:** That makes it friendly for many people.

**Debbie O'Brien:** Yes, exactly. So now the writing of tests, because that's the hard bit, isn't it? It's like "I don't know where to start. I'm new to testing, I don't know what to do, I don't know which locators selectors etc. to use... How do I actually get a test written." And this is where code gen comes in. So code gen is a test generator, and again, you can use the terminal if you want, you can just \[unintelligible 00:35:14.25\] or right into VS Code you can just click the button that says to record a test. When you click that button to record a test, in your VS Code it's going to open up a new test file, and it's already has started the test for you, and it's going to open up a browser window. Now, inside that browser window you can write in the browser whatever page you want to go to, like JS Party... And that's going to go to that page.

So now we're on that page, and your test has started to visualize that; you can see go to page, etc. Now I want to click on the -- I don't know, on the About link. So I click on the About link, and then it's going to go \[unintelligible 00:35:50.01\] that's gonna be written for you. And now I'm on the About page, and say maybe I want to test that the heading is there. \[unintelligible 00:36:00.18\] JS Party, whatever, and then go down and check each kind of thing. Maybe you want to check that the image is there, you could get by alt text... And you can just click; as you're clicking along, it's going to write that test for you.

So you have done no work, you have not written any code; all you've done is be a user, and you have clicked on the page to listen to this podcast, press the Play button, and make sure that Play button is there, for example... And then you go to your tests, now you've got a full test written, and then you can press Play, and play back that test, visually see it by clicking on the "show browser", and now you can see that that test works.

Now, you will have to go and change a little bit of code, because you don't have the web-first assertions. So it's click kind of methods, but say you clicked on -- I said we're going to click on the title, which is \[unintelligible 00:36:53.04\] JS Party... So now you kind of want to change that and say \[unintelligible 00:37:00.10\] JS Party, to be visible. So that's the little modification now that you need to do, because we at the moment do not generate assertions, we generate user actions, like clicks, and feel, and type etc. right? But if you do click on it, it's gonna go into your code, and then you can just modify it. So it makes it a lot easier, because you don't have to worry about "How do I get started?"

**Amal Hussein:** Yeah, yeah.

**Nick Nisi:** That is so cool.

**Amal Hussein:** I love that experience as well, because you would think a feature like this would be used by people who maybe aren't developers. But actually, this is assistive to developers that just want to get a foundation that they can modify, right? So you're like "Where do I start? How do I structure this test? What's the user flow? Here's a rudimentary version that you can then improve." I love that workflow, Debbie; that's a really cool workflow, especially like - you know, if it's a Friday afternoon, and I'm three hours before the weekend, and I've gotta write this test... Sometimes you just need a little bit of a push, or a little bit of a cheat, right? But this is a cheat in a good way.

**Debbie O'Brien:** \[00:38:06.12\] Yeah. I literally say to people, it's gonna take you five minutes to install Playwright and write your first test and have it running. And this is not even me telling you the second feature, this is me just jumping ahead --

**Amal Hussein:** Oh my God, I know, I know...

**Debbie O'Brien:** ...to kind of conclude in that five minutes... You can then run your tests on a GitHub Action workflow, because that comes out of the box included when you're installing... So now you've got a GitHub Actions workflow running, so you literally just push your code to GitHub, and now on every PR, your test is gonna run for you, and you don't have to do anything to set that up. It just works.

**Nick Nisi:** That's so cool.

**Amal Hussein:** Yeah. That's the beauty of an integrated platform, is that you can like really smooth over those... You can preemptively give your users a better integration with all your suite of tools... That's the very cool integration between VS Code, GitHub Actions, Playwright, and GitHub itself. I mean, you know, GitHub Actions is a feature on GitHub, but y'all get the point...

**Debbie O'Brien:** Yeah. And TypeScript - because it's TypeScript-first... \[laughs\]

**Amal Hussein:** That too, yes. No fiddling with config files. That's awesome. You just said Nick Nisi's buzzwords, so we pretty much lost him for another five minutes... He'll be daydreaming about TypeScript... No, but Debbie, so much to get into... I'm excited to hear about the second thing, and more.

**Debbie O'Brien:** Okay. \[laughs\]

**Amal Hussein:** Also, I've got to ask about Cypress. Our listeners are going to be like "Well, what about Cypress?" and so we will have to ask you to kind of summarize for us what Playwright has that Cypress doesn't, so that folks can wrap their head around the delta a little easier... Yeah, so we'll get into all of that and more after these short messages.

**Break:** \[00:39:49.00\]

**Amal Hussein:** Okay, Debbie, that was quite the cliffhanger that you left us with. We were running through your list of favorite things, and there's too many to cover in this podcast, so we're letting you drive, drive us down your list... So let's get back into it. We talked about multi-browsers support, we talked about approved selectors, accessibility, improvements that usher good decision-making... All these kind of cool, new features. Can you tell us about more of your favorite things?

**Debbie O'Brien:** Okay, so let me give you an example, right? So you run your test on continuous integration with GitHub Actions, or whatever -- I'm saying GitHub Actions, but actually, it integrates with everything else. You just have to add that config file yourself. GitHub Actions is out of the box, but it runs on every other CI as well. So you're running a test in CI, and it fails in CI, it runs locally, it fails in CI, so now you're like stuck. What do you do? What would you do in this instant? How would you fix that test?

**Amal Hussein:** \[00:42:21.25\] I mean, I'd have to find the test locally; I'd have to run it, do a lot of grepping...

**Debbie O'Brien:** But it works locally?

**Amal Hussein:** I don't know, I'd have to look at the combination, like the matrix, to see which permutation in CI does it fail, and then how do I reproduce that locally? I don't know. It's tough...

**Nick Nisi:** I would start adding sleeps. \[laughter\]

**Debbie O'Brien:** Timeout everywhere. Yeah, that's a good one.

**Amal Hussein:** Console log everywhere...

**Debbie O'Brien:** So this is why my other feature is very cool, and it's called a trace viewer. So you can run the traces, actually run automatically, without you having to setup anything; traces will run on the first retry. So when your test runs, the first time it fails, Playwright will run it again, and say "Maybe there was something up there. Let's run it again, see what happens." It fails again. Now it's going to go "Okay, I'm going to create a trace for you of your whole test." So now you have this trace. And what is a trace? It's basically a PWA of your whole test. And you download this as a zip file.

Now you run this PWA, so it's now a little mini application running, that you can actually step through. So if you're thinking of the Chrome DevTools, you have the timeline at the top, right? So you've got a timeline of your test, and you can go through, and it shows a little screenshot image of every step of the test, everything that happened, with all the events at the top, in different colors- a click event, a fill event etc. Then on one side, you have every single event that happened, every click event, or whatever you did in that test, and you can click on each one, and now it's going to open in the middle a box, and that box is going to have -- it's a DOM snapshot. So now it's not an image snapshot, it's a DOM snapshot of each moment of your test.

Now, that DOM snapshot, because it's a DOM, it means you can open Chrome DevTools or whatever dev tools you're running, and you can open that up and you can literally like see what's going on, see the CSS, and you can actually picture and play around with it, and almost fix it. But then you also have, on the other side, the console log network requests, plus the actual test file. So you can even see the test code without even having to open up your editor. You could send that to someone and they could literally go through it and say, "Oh, look, this failed, because the mobile view is out of viewport, so the test has failed because the menu is there, but it's out of viewport and \[unintelligible 00:44:48.29\]

**Amal Hussein:** The test doesn't have a handling for mobile... Yeah.

**Debbie O'Brien:** Exactly. But you can visually now see this. And that was an easy one to see, but you can actually see it... So it's much better. Now, you can still record a video if you want to. People ask us, "Oh, we want to record videos." Go ahead. If you want to record videos, they're really heavy... They're kind of like -- you just kind of play a video. But why not have something that you can interact with, and actually open the dev tools and like really play around with? ...because that's much, much more better than just a video, right?

So that's the trace viewer. It runs, as I said, on CI, on the first retry, but you could also actually run it locally. So if you are going through something that you can't figure out, and you're debugging it, and you're getting really frustrated, you can actually put the tag --trace on, and then when your test fails, you can show the report, you know you're gonna get a full report, and you get the trace at the bottom, and you click on that trace, and now you can actually open that up and you can walk through and step through your test and see, "Oh, I see what I was doing wrong. I was testing for this, but I really should have done that", or whatever.

**Nick Nisi:** That is awesome.

**Amal Hussein:** That's super-cool. I was going to just ask them, "Does it do this for every test?" But no, there's a flag that you have to turn on. But that's great, because then you get that extra richness only when you need it.

**Debbie O'Brien:** \[00:46:05.21\] Yeah... Because you only want it if your test fails.

**Amal Hussein:** Yeah. And do you know if the things line up visually, so that it shows you "Here's the traces that we're collecting, and here's the assertions", and so you know that everything is green until you get to these sets of traces where things start to go haywire? Do those things line up? Is there there like a timeline where you can see?

**Debbie O'Brien:** So it'll go through everything, and then it'll say, "Here, Playwright stopped here, and this is where it broke, to this point." But then you can see what happened, and what happened before it to cause that. And maybe it was a network request. So maybe your test failed because the API is down. But you will see that API request information, and you'll be able to go, "Ah, we have a problem with the API." Because maybe when you test it locally, it ran, everything worked. The API then dropped, and then you run it on CI and then it kind of failed, right? So you'll be able to see into the console log the network requests... And that's what makes it powerful. That's something you don't get in a video, right? You don't get that information.

**Amal Hussein:** No, you don't. You've taken the video and kind of inverted it; what we're getting is a video of what's happening underneath, under the hood, what's happening below the surface of the iceberg, which is really how developers can make an educated guess towards -- like, that's how we come into the picture in terms of fixing it.

So I'm mind-blown by this, because I can see teams building a whole workflow around this, where they have the traces automatically get generated, and maybe published, and sent somewhere, and analyzed... And you can even parse the traces, if you really want to... You can build a robust workflow around reporting failures and flakiness for companies like where I work, where that type of flakiness in reporting is actually a really big deal. We have whole systems that track flaky tests, and when they started to fail, and why... So that's really, really -- I feel like for me, that feature alone is worth its weight in gold, so that's very cool.

**Debbie O'Brien:** Yeah. And the idea is that you should have less flaky tests.

**Amal Hussein:** Absolutely.

**Debbie O'Brien:** You should absolutely almost never really need this feature, because it's literally only going to be needed if you're really struggling because something went wrong, right?

**Debbie O'Brien:** Yeah, that makes sense. So in terms of like running your tests, what's the recommended best practice for CI, for teams that have to maintain lots and lots and lots of tests? Is there some setup or config that's recommended, or do you all let teams do whatever they want to do? I'm curious if there's any just guidance from your team on that.

**Debbie O'Brien:** I mean, obviously, I will say, use GitHub, use Azure, because you know... But every team has already got their CI setup with whatever they've got it set up with... So you don't have to leave your CI environment, and now change that just because we will give you GitHub Actions out of the box... Because we're integrated with them, and it makes sense, right? But we have documentation for the other CI. So you just go to that documentation page, and take that configuration example and put it into your configuration of your CI, and then you'll have that running on whatever it is you're using.

So there's not really like "We recommend this", or... I mean, yeah, we recommend GitHub, of course we do, but we understand that the world is not all on GitHub Actions or Azure... So it's totally fine; Playwright is open source, so you can use it on whatever you want.

**Amal Hussein:** Yeah. All you other clouds can still exist. Just kidding... \[laughs\]

**Debbie O'Brien:** Exactly.

**Amal Hussein:** Yeah, there's room for everybody. That's really cool. So we have to kind of bring up the elephant in the room, but I really didn't want to make this show about how Playwright is not Cypress. So we're towards the end of the show... I want to ask if you can give us a summary highlight of how Playwright is different than Cypress... For many folks like myself, who I've been longtime Cypress user, and it's a tool that I know, it's a tool that I've used at multiple companies etc. And so what's the kind of -- folks who are curious about Playwright, why should they be more curious? And more specifically, what does Playwright have that Cypress doesn't, that will make things easier for users?

**Debbie O'Brien:** \[00:50:22.28\] Okay. So yeah, Cypress is great. I used to use Cypress for many years, so I come from that world as well. We are newer, so therefore the community is smaller, which is my job, to grow the community. So Playwright's been around for about two-and-a-half years now, so obviously, we do not have as much workshops out there, and examples, and videos, and stuff, which we are working on and we will have, and thanks to our ambassador page, you'll be able to find more content there, if that's what you're looking for.

When it comes to differences, I guess browser support - now, I know that Cypress has recently added WebKit support, because they're using the Playwright WebKit to be able to get that... So they're kind of a little bit on par, I guess, when it comes to the browser testing thanks to our open source work, of course...

Then there's other things, like multi-language. So this is something that I think is very important if you're working with a team of many developers who work in different languages. So you can use Playwright in JavaScript, TypeScript, or you can use Playwright in .NET, or you can use Playwright in Java, or in Python. So you now have a team, and maybe - Nick, you're a Python developer, and Amal, you're a C\# developer, and I'm TypeScript. So now we have different applications, because companies have different applications, and you want to write the test and the code that you're comfortable with. So you write your tests, we all write different tests, and they're all different languages, but we have the same library, the same API, the same -- everything works the same. So if I read your test, I would understand it; just the syntax is a little different, so I might struggle kind of writing certain syntax, but I could read your test and understand it; you could read my test, Nick, and understand it. And I think that makes it really important that you have one workflow, one way of doing things, one library that people are just -- you just have to learn Playwright, and now you can work--

**Amal Hussein:** Across the stack.

**Debbie O'Brien:** Exactly. And having that, rather than one on one, another, another, and then you've got all these problems, and the front end is doing this, and the backend developers are doing that, and then it's like a mess. So that's the first thing I would say that I think is really important, is the multi-language support.

Another thing that Playwright does really, really well, that I know other frameworks have struggled with is being able to test across multiple domains. So imagine a chat application that opens up two browser windows, and you need to be able to write in the chat and then go to the next window and answer back, and go to the... You can actually do that in Playwright. It just works. You don't have to set up anything, it just works.

Another thing is iFrames, right? If you want to test an iFrame, maybe there's a YouTube video on your website you want to test, for example, or whatever iFrame... Netflix has a chat application in there, which is set up to an iframe. You want to be able to go into that iFrame and test that. That just works, you don't have to do anything. It just uses the frame locator instead of the page locator. So yeah, that basically works out of the box.

And then obviously, parallelism for free; so you don't have to pay for anything, it just works, which means your tests run a lot faster. I know some charge you for parallelism; that's why I say free, because you'd have to pay. Some make you pay.

And then let me think... Obviously, the trace view, or the tooling around it, which just means if you're using things like say VS Code, that all the integration that goes on makes a very good developer experience, but then you've got the trace viewer for when you're having problems, and trying to debug etc. And I don't even know any of -- there could be other differences out there, but I would say maybe if you're having problems testing across multiple domains, testing across iFrames... If your tests are running slow, or you have flaky tests because of test cleanup, etc. then Playwright's just solved all those problems for you... Because it just works, right? I like to say "Playwright just works." You don't have to do anything, it just works.

**Amal Hussein:** \[00:54:09.07\] That's really great. And that was a really great summary and rundown, Debbie; thank you so much for that. Disclaimer for the open source projects, or the non-mega-corp-supported projects - parallelization being something that maybe companies like Cypress charge for. Obviously, a lot of the work that Playwright does is subsidized by quite a large corporation, and so for smaller companies, that is their one path to getting funding and/or supporting their staff. So open source projects by large companies are great, but they do subsidize a lot of really great things, and we all get to benefit from that subsidization, obviously, as a community... But I just wanted to say that no shame in Cypress'es game, right?

**Debbie O'Brien:** No, for sure. For sure.

**Amal Hussein:** And to be fair, I don't think you meant that at all. Just to be clear, I'm just reiterating that myself. But I'm amazed, I'm personally very excited to check out Playwright. I think it's always really refreshing to hear about tools like this, that are really evolving where the community is, right? Community is now generally at this bar, and so now projects like Playwright are coming in and elevating the bar even further, to kind of say, "Okay, we've all started to understand how important end-to-end tests are, and browser tests are, and integration tests that are run via a browser", right? All those things are different, but all of those things can be used by these same tools... And now we kind of are collectively norming around certain things, and so we're collectively solving our problems, and further creating better and better abstractions... So I feel like Playwright is really in that evolution, it seems like at this point maybe even best in class in terms of certain user experiences... So I'm very excited to check it out, and thank you so much for spending time with us today. I mean, Nick, wasn't this cool?

**Nick Nisi:** It was. And yeah, I mean, just to reiterate what you were saying, this is solving problems that maybe you didn't know that you had, and making things so much easier... Because testing UI is hard, and we have great tools...

**Debbie O'Brien:** Used to be hard.

**Nick Nisi:** Used to be hard, yes. \[laughter\] It gets easier with tools like this, exactly.

**Amal Hussein:** I love that. Debbie's like "It used to..."

**Nick Nisi:** It really lets you test in the environments that these are actually running in. And we've had lots of ways to do that over the past, but I've used Playwright, and this class of tooling just seems like the most stable by far, and you get consistently good results from it. Back like 10 years ago, when I was trying to do this stuff, when these tests would fail, it was like "Okay, did they actually fail, or was it just the tooling, did that just like crap out?" And that doesn't seem to be the case anymore with these tools. So it's just so good to see this being pushed forward, and I hope that this, and tools like it get lots of widespread adoption, because it is really the best way to test UI, because you're doing it in the place where the UI runs. So thank you for making this tool.

**Amal Hussein:** Absolutely.

**Debbie O'Brien:** Yeah. Well, I didn't make it, so I won't take full credit...

**Nick Nisi:** Well, you and your team...

**Amal Hussein:** This is the royal you. The royal you of the Playwright team.

**Nick Nisi:** Exactly.

**Amal Hussein:** Yeah, the royal you.

**Debbie O'Brien:** \[laughs\] But yes, we have an amazing team behind it.

**Amal Hussein:** For sure, for sure.

**Debbie O'Brien:** And also the community, and I want to kind of say as well - Playwright is very community-driven. We are open source; yes, we are Microsoft, but we are open source, which means that we rely on the community to file issues, tell us about problems that they're having, features that they're requesting, up-voting it, so that we know that this is what the community wants us to do, this is where we should put our efforts and stuff. And also, there's been a couple of people who have contributed as well and helped us out, which has been great as well... So yeah, the community is everything to us, and the more people that become part of this community, the more amazing the tool is going to be... So I would say everyone, come and be part of the community.

**Amal Hussein:** Yeah.

**Debbie O'Brien:** And star us on GitHub.

**Amal Hussein:** \[00:58:01.26\] Right, right. So if people do want to get involved and learn more about the project and learn about you, what are some good resources for them? And then also, are there any workshops online, or any free videos? What's the best way for someone to just get started and start learning?

**Debbie O'Brien:** Yeah, so Playwright.dev is the website, and it's got the Get Started section, which will take you to writing your tests in five minutes; you'll have everything up and running. Then if you want to know more, there's a whole community page, you can go there, and it will tell you about contributing, it will also give you videos, the released videos I was talking about, there's a section of released videos... There's conference talks; if you want to just listen to me all day long, you could totally do that, talking about Playwright... So there's loads of videos there, and then there's some live streams that are in there as well. We will be building more kind of upcoming, like not workshop, but like small, "learn how to do this" kind of thing; that will be coming, so follow the YouTube channel for that. Follow Twitter. I know there's a bit going on these days, but yeah... Follow Twitter for any new release information that's coming out, or LinkedIn; we're on there as well.

**Amal Hussein:** And then watch the release video, right? It feels like that's a good learning tool...

**Debbie O'Brien:** There's a new one coming soon.

**Nick Nisi:** Yeah.

**Debbie O'Brien:** Yeah, there's a new one coming soon, so check that out.

**Amal Hussein:** Okay. 1.27...

**Debbie O'Brien:** 28. 28 is coming.

**Amal Hussein:** 1.28. Oh, my God.

**Debbie O'Brien:** 27 is out, and 28 is coming... So you've got to keep up with us, you know?

**Amal Hussein:** I know, I know. Oh, my God.

**Nick Nisi:** We'll have links to all this in the show notes.

**Amal Hussein:** Yeah, we'll put links to everything. Alright, Debbie, so last question for you before we wrap... If you could have one feature, or wave a magic wand that's Playwright related, what would be your wish?

**Debbie O'Brien:** I'd want it to generate the assertions for me, so I don't have to manually change those clicks into assertions. So I'd want it to know that if it's a title, nobody's going to click on that title, so make it to be visible. If then I want it to be something else, I can edit that later. But that's almost like 90% of the time I just want something to be visible on the page, and if it's not clickable, I want it to just automatically be visible. Yeah, that's my number one.

**Amal Hussein:** That's a solid number one, yeah. And that's also very meta, right? Because you just went from -- you're like "Oh, automate it for me. Don't make me manually do it."

**Debbie O'Brien:** Yeah. Make my life easier, right? I want to go to do sports. I don't want to be sitting editing stuff.

**Amal Hussein:** Playwright for President, you know? Your heard it here first, everybody.

**Debbie O'Brien:** Yeah.

**Amal Hussein:** Again, Debbie O’Brien, it's been an absolute pleasure. Thank you so much for joining us on the show. We'll be back next week with even more good stuff. I'm not going to spoil the surprise, so y'all just listen... But we've got a great show next week as well, so... See you all, everyone. Take care, bye-bye!

**Debbie O'Brien:** It's been fun. Bye...!
