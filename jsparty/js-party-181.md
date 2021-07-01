**Emma Bostian:** Hey, party people. Long time no talk. I'm super-excited for today's episode, because today we are joined by the wonderful Angie Jones, who is absolutely notorious for her amazing work with testing. I'm thrilled to be talking to you today, Angie. How are you?

**Angie Jones:** I'm great, how are you doing?

**Emma Bostian:** Good! No complaints here. We also are joined by Nick Nisi. Nick, how are you?

**Nick Nisi:** Hey! Hoy-hoy. I'm glad to be here, and really excited to meet you, Angie, and excited to talk about some testing.

**Emma Bostian:** Yes, absolutely. Cool. So let's kick things off by -- Angie, if you could just give us a little overview to yourself and your experience with testing, and a little bit about Test Automation University... That would be fabulous.

**Angie Jones:** Alright, so I am a principal automation architect, and I've been doing development and testing forever, quite a long time at this point. Most of my roles have been very specific test automation roles, where I come in and I help teams to build up their testing process, and strategy, and the actual framework, and teach them how to test their code.

I've done this full-time at several companies such as IBM, and Twitter, LexisNexis... I also consulted with quite a few companies as well, your Amazons, and Disney, and a lot of the enterprise companies. I travel all over the globe when the world is opening back up, so I do have a few gigs coming up... But yeah, I travel and do workshops at companies, and essentially teach people how to build better quality code.

**Emma Bostian:** \[00:04:02.26\] That's wonderful. It's so funny, when I hear anyone asking about testing, I'm like "Angie. Angie is the expert in testing." So I'm thrilled that you could join us.

So you mentioned that you primarily do test automation, and I'm curious why would we wanna automate tests? Why don't we just do them manually every single time?

**Angie Jones:** Testing is something that is not regularly taught in curriculums. So it doesn't even matter what route you took; if you went to university, bootcamps, self-taught - whatever. Nobody's really talking about how do you test your code. So it's something that a lot of newer developers don't really understand how to do, or why to do. So just like you asked that question -- I get that a lot, people are like "Why would I spend time automating this? That's gonna take me forever. I wrote my feature, I clicked the button, I see that it works, and I'm good to go." People don't really understand the why of this until later, when they've been bitten.

So the why is because unless that was it and you're never touching this codebase again, there's gonna be some regression. You're gonna add more to it, you're gonna refactor stuff, you're gonna delete stuff, you're gonna do a lot of different things with your application, and that one thing that you tested last month may be affected by something new that you've added today... And you don't know that because you're only manually testing what you added today.

So you automate this so that you have a regression, a suite of regression tests that you can run and make sure "Okay, when I added this and I thought that it didn't touch anything else, I can be sure of that, because my test will say "No, girl. It actually breaks this other thing over here." So it kind of saved your butt. Not kind of, it definitely saved your butt. It also gives you a lot of confidence to be able to refactor your code if needed, because you know your tests have your back.

So this is essentially a capture of what your application is supposed to do, kind of like documentation if you will, that is your source of truth. So you can go in and you can confidently change things, and refactor, and add new features, run those tests, and you're good to go. Without that, I always see people very hesitant and scared. You've all been there, I'm sure, where there's certain areas of the codebase, if you've gotta touch it, you're like Hail Mary three times before you do it... \[laughter\] Well, you don't have to do that if you have some tests in place. Go for it, and your tests will let you know if it still works.

**Emma Bostian:** That's so funny, because Angie and I both worked at IBM. It was my very first job, and I remember it was probably like my second week on the job, straight out of Computer Science degree, I didn't know what I was doing, but I thought I did... And I pushed to the main branch and I broke everyone's dev environment... And I got a very angry call from a very angry Scottish man who said "Well, do you not know how to run tests? Did you write any tests?" And I was like "What do you mean? What is testing? I've never learned about this." And ever since that day, I'm like "Okay, I've gotta learn...

**Nick Nisi:** You know, very similar situation for me, too... And I think that the fact that it's not really taught in traditional computer science degrees or things like that - it got built up as this big thing to tackle in my head, and so there was just this mental obstacle to overcome before I could even really write tests... Because it was like "How do I even do that? Am I testing the right thing? What testing framework should I use?" Of course, I started with Java, so it was JUnit to start with that, but it got built up as just this big obstacle to overcome mentally before I could even really feel comfortable writing tests on my own.

**Emma Bostian:** \[00:08:00.21\] Yeah. I remember - before I joined IBM as a full-time, I had an internship where I was automating the installation of WebSphere Application Server on z/OS, and even today I still don't know what that means. But I essentially had to learn Python and then used that to automate the installation of this application server on the operating system Z. And I remember having no idea why I was doing it, but I could watch the things happening in the UI, like "Oh, button clicks. Then we go to the next modal." It was like going through a wizard, and I'm like "Okay, that's pretty cool", but it seemed very labor-intensive.

At my last job, at LogMeIn, I was doing frontend work, because I'm a frontend engineer now, and we were using Jest with Enzyme, and I actually quite liked it; learning how to mock state was really cool... And then now at Spotify we're using mostly React testing library. I really like that. But something I still struggle with to this day is kind of understanding what should be tested.

Correct me if I'm wrong, Angie, but I don't think you need to go for 100% test coverage on every single line, because there are some things that don't need to be tested, and I struggled with figuring out what those things are.

**Angie Jones:** Yeah. I have a whole talk on this. It's called "Which tests should I automate?" I've come up with essentially this matrix, if you will, that helps you determine this. And you're absolutely right, going for 100% coverage - one of those things that sounds good in theory, but in practice... Meh, not so much.

What people fail to realize - and I see folks all the time. They'll write their test, but they put so much more care into writing their feature code and just kind of treat tests as if it's throw-away code, when it's really not. You have to use the same guidelines, the same clean coding practices and things like this... Otherwise -- when you really think about what tests are, they are guarding your features. They are the source of truth on if this works or it does not work. So you can't half-ass this. Or you can break your stuff in some pretty severe ways.

So try to cover everything, especially if you're gonna do crappy code. This is something else that you have to maintain in addition to your feature code. Whether you do it well or not, it's still another codebase. It's another software development project. If it's integrated \[unintelligible 00:10:36.06\] This is code, right? You have to maintain it.

So trying to do everything just gives you a lot more stuff to maintain and a lot of noise. A great indicator is when you have your build fail because of some text, and the team looks at it like "Oh, okay, we don't care. Go ahead and ship it anyway. Just ignore the test." Well, why is that test there? That's a great moment to ask yourself.

So I tried to move that a little earlier in the process, to say "Okay, I wanna write this test. If the build fails because this fails, do I care or not?" You might not care. Or you might care, but not enough to stop the build.

So there's various things you can do... In this matrix I essentially have you evaluate your tests for four different things. One is the cost efficiency of writing it, the value that it brings, historical context around it - so is this one of those spaghetti type areas that has a lot of bugs in it, or is this running pretty solid and we rarely see any issues here? And is it covered by other things?

Sometimes we have multiple variations, but the heart of it, what we're actually testing, is covered. So we don't have to go bananas by adding a million tests with all of these different variations, or whatever.

\[00:12:11.29\] So given that, you kind of give scores to these things, and then I have you rank them, so not only do you see which has the highest score, meaning I need to automate it, but you have to sort it, so you know "What I need to automate next" kind of vibe, and what are the things that I thought -- because I have people do a gut check first... Like, "Do you think you would automate this?" And you end up saying yes to almost everything, and then by the time you get the score, it's like "Oh wow, that's really not worth automating, and I would have thought it was."

**Emma Bostian:** Definitely. It's funny, a pilot on an airplane wouldn't take off without doing a pre-flight check, so why would you ever publish software that hasn't been tested? It's funny, because you talked about how "Oh, testing isn't necessarily taught in curriculums", which was definitely the case for me... But I think of testing as kind of on par with accessibility, where they're always thought as an afterthought. Now it seems like more attention is slowly being given to these two areas as like areas of importance... Especially -- we'll talk a little bit later about test-driven development. But yeah, I guess it's so overwhelming to -- like, where do you even start learning some of these things? It can be a little overwhelming,

**Angie Jones:** Exactly. And I used to be a teacher at a university, so I was an adjunct professor teaching Java programming. I saw it for myself, there's not enough room in the semester to include lessons on testing, especially not in depth. So I was trying to kind of integrate that into every lesson. For example, if I gave them exercise to do in class, I'm like "Call me over when you're done", and I'd go and break it, basically, to show them that you have to keep these things in mind.

A lot of people don't have Angie who's teaching them, that sort of thing... So they lock it. And it's one of the reasons why I started Test Automation University. So this is an online platform where all the courses are dedicated to testing. Not just JavaScript. All languages. And it's free. All the courses are absolutely free there. Self-pace, video and transcripts, and "Here's where you can go", where you're like "Okay, I need to know more about testing" or "I need to know how to use a certain testing framework", or something like that.

**Emma Bostian:** That's great. And for any of you listening, we are linking all of this in the show notes, because it's definitely something you wanna check out. The fact that it's free is so invaluable... Definitely take advantage of that.

Nick, I see you definitely have had some experience with testing. What is that?

**Nick Nisi:** Yeah. Well, earlier in my career I was working on Dojo, and with the folks behind Dojo. For that, we used a tool called the Dojo Object Harness. It was very memorable, because every time your tests would fail, there was actually an option in the UI for it where it would have the Homer Simpson "DOH!" that would play every time... And that would get really annoying. But it was kind of fun.

And then from there, working on Dojo and going into Dojo 2 and such, we created a testing framework called Intern, that would kind of mix a lot of the more modern testing features that you now come to use in like Mocha, and Jest, and things like that... More of like the -- I forget the style of it, but \[unintelligible 00:15:43.18\] rather than just test and expect, things like that. Behavioral-driven maybe is more of what that's called. Anyway... We created that, and some tools on top of that to kind of drive web driver support... Because that's where we're focused, is browsers specifically, and running those, and really being able to test that the browser is actually doing what we want, rather than just this individualized unit of code as inputs and outputs.

\[00:16:13.28\] So we had some test runners that were kind of promise-based, but built on top of Selenium Web Driver. And now those tools are kind of taken over by other more advanced tools like Cypress, and even Testing Library to an extent. And that was kind of an interesting thing that I have been looking at, is kind of how - at least from the frontend side - the testing game has changed a little bit, to where I'm not really thinking so much about unit tests, and I'm thinking more about almost integration tests. And it's kind of more the Kent C. Dodds -- his name comes to mind when I think of how that goes, and I think it's because of React testing library and the prescription for tests that that provides.

**Break:** \[00:16:57.16\]

**Emma Bostian:** So let's talk a little bit more about the different types of testing. Nick, before the break you had mentioned -- was it integration testing or regression testing? Or both? Probably all of the above.

**Nick Nisi:** Where is the line? That's another fun question...

**Emma Bostian:** I know. There are so many different kinds... We've got -- the ones that I'm aware of at least, are unit testing, regression testing, integration testing and end to end testing. Am I missing any of the big ones, before we dive into them?

**Angie Jones:** You have your API testing, and you also a nice, fancy layer on top of your end to end, which is visual testing, which I specialize in... And this is really cool. I would love to talk a little bit about that at some point, if we have time.

**Emma Bostian:** Absolutely we do.

**Nick Nisi:** Yeah, I would love to learn more about that, for sure.

**Emma Bostian:** Yeah. So end to end testing is -- or let's start with the smallest unit, which is unit testing... So unit testing - they're meant to test small components, right? So if you have a modal, for example, you might have like modal.test.whatever. If at Spotify I wanna do Web Components, we always have a test TypeScript file for every component. And this are meant -- like if it's a modal, to see whether or not it actually renders properly, if it's supposed to be visible, or if the text is correct, and things like that. Are there any misconceptions about unit testing? Because I feel like this is one area where people can get really minute into details, and maybe this is where they should refer to your matrix, Angie, because -- like, I struggle here to be like "Do I really need to test that a component actually renders?" It's funny, looking through our codebase, I'm like "It renders." And it's like, "Why is that always the first test? Do we really need to test that it's rendering?" I don't know... \[laughs\]

**Nick Nisi:** \[00:20:07.13\] Usually, that's the one I set up just to make sure that I actually have the test runner set properly. \[laughs\]

**Angie Jones:** Yeah. And \[unintelligible 00:20:11.17\] or they won't ever get started. They need that one test just to feel confident...

**Emma Bostian:** It's funny, because I'll be writing a test, and I'm like "Okay, there's definitely something wrong with it. It should break." And then it passes and I'm like "Did I do something wrong, or am I just smart? I don't know..." That's maybe why test-driven development is good. Again, we'll talk about that in a little bit, but... It is always good to see your test go from failing to successful, and unit testing is kind of -- at least for me personally, unit testing was the most comprehensible type of testing for me, because it allowed me to focus on one small piece of the UI, as opposed to like an entire use flow.

**Nick Nisi:** Yeah.

**Angie Jones:** Yeah, I like that. It's very narrow... Because when you're trying to test something bigger, that's where a lot of confusion comes in, and you start going down a rabbit hole. So I really like -- for a unit test, it's kind of like "What's the smallest thing that you can target here?" Let's get away from any other dependencies, and things like that... So it's not a whole lot of setup, and all of that. Very focused. And if one of those fail, you know exactly what's wrong, so I really love those.

**Nick Nisi:** Would you say from like a frontend testing perspective that the smallest unit you could test is like a full component itself? Or would you dig deeper in?

**Angie Jones:** It depends on what you call a component. If the component includes a field and a button, then those are two different units, in my opinion. I could exercise that field with quite a few tests. I could also execute that button, and depending on if it's supposed to have various states, like disabled, or whatever, I could exercise each one of them. So I would say unit testing at the frontend level would be down to the individual elements, and then in my opinion, the integration of that is the component, if there's multiple pieces.

**Nick Nisi:** Yeah.

**Angie Jones:** Some widgets -- like a date picker, for example. I might consider that, one thing. So my unit test would be there. Versus all the selection of a certain date, or the arrows, back and forth. I wouldn't wanna get that granular. It's like Emma said... It varies, and then you start getting confused, like "Alright, where do I start?"

**Nick Nisi:** Yeah. I don't know, maybe it's just my perspective, but the frontend always adds an extra layer of confusion to it too, because I always feel like I'm walking this fine line between writing good, smallest unit possible tests for whatever I'm trying to test, but also trying not to get too into the weeds with the implementation details of that component. And I think kind of what you mentioned, Angie, with testing disabled state, or maybe testing whether specific roles get set... I kind of like that idea, because then it at least lets me hook into things that I would really want to see in the actual product, as opposed to like "Oh, this div is now positioned over here", or whatever. Things that are too implementation-specific, but not really providing me a ton of value.

**Emma Bostian:** And I think a lot of what you've just mentioned can be solved by visual regression testing, or visual testing in general, and we'll let Angie tell us more about that. Actually, let's just cover it now, because it fits into this conversation. Angie, could you tell us a little bit more about visual testing?

**Angie Jones:** \[00:23:58.04\] Yeah, so it works whether you wanna do unit testing, or if you wanna do more of an end to end type testing... Let me tell you what it is, first off. So visual testing is where it takes a picture of your application and its desired state - it saves that as a baseline. So when you're first writing that test, you know how you look at it as a human being and you're like "Yeah, that looks good..." Alright, boom. That's your baseline. And so then when you run your regression test, it will take another screenshot and it will compare those two screenshots together, to determine if there are any differences there. So that's visual testing.

Now, you can run this at like the component level. Say you have a storybook library with all of your components - you can run that visual test against... And I consider that like the unit test of frontend testing. You can run this against all of the various components to make sure in isolation they all look like they're supposed to look. You don't wanna just leave it there, because we've all seen where things start overlapping, or different viewport sizes, they're bleeding off the edge of the page, and stuff like that. So that's where you would test your full page.

Now, I'm gonna say, with your frontend there's so many things that can go wrong, that if you don't do this whole visual piece, I often question "Why are you even testing the frontend at all?"

So the frontend - when you are at that level, you're testing not just the functionality, because you could have tested that at a lower level, right? You're also testing the display of stuff. That's what the browser is for, to display \[unintelligible 00:25:52.02\] present some output. So you have to verify that presentation. Otherwise, why are you even on the browser?

And unfortunately, a lot of the testing tools - they're amazing, but they all work with the DOM. If you ask them "Is this text present on the screen?" they're not looking on the screen, they're looking on the DOM to see if that text is in the DOM. And it's gonna say "Yes, it's there."

What I've seen millions of -- not millions, but quite a few places where the text is maybe the same color as the background, so you can't even see it, or it's bleeding off the edge of the page, it's hidden by some other element that's overlapping it, it's upside down, it's whatever - there's a million things that can go wrong, and we've all seen these things before, especially when you start changing the viewport sizes. And that's the challenging thing about frontend development. You all know this - all of the different browsers, all of the different viewport sizes, breakpoints, and stuff like that... So it's a great way to test all of those things without having to write a ton of code to try to do so.

**Emma Bostian:** Yeah. I think we forget sometimes that it's not just about "Does it work from a functional perspective?", it's like "Does it work visually as well?" I develop a desktop application, so it's not like I can go and test this on every single browser and every single viewport, so it's important... We actually have in our pipeline, we actually have our visual regression or integration snapshots that say "Hey, something's up. You might wanna check this out", and we have to make sure \[unintelligible 00:27:31.09\]

**Nick Nisi:** I'm just thinking of a very specific example of where this kind of testing would have saved me in the past... And I was working on kind of a composite component that had a lot of different pieces to it, and I ended up adding a very subtle, grey background to one piece of that. And I pushed it up and then the others on the team were like "Hey, why did you add this background to it?" I'm like, "I didn't." Because looking at my monitor, which was, admittedly, not the best, it couldn't distinguish that from just the regular white... So I'm starting at it and I'm just like "I cannot see that." But I feel like a visual regression would have been able to easily point that out to me.

**Angie Jones:** \[00:28:16.02\] Exactly.

**Emma Bostian:** I love that. I think visual tests are some of my favorites... Because I do remember the snapshots that would give you like a DOM printout, and it's be like "Your snapshot is not the same." You would look at the DOM changes and have to accept them, or reject them... But it was just recently, I think, that I really started noticing the fact that we were doing visual regression tests, and it's only been at Spotify that we've done it. I hadn't done it at IBM and I hadn't done it at LogMeIn. But it's so useful, especially -- when we think about design mockups, sometimes engineers forget that being pixel-perfect does make a big difference, and they're like "You know, it's just a couple things are off." One of my favorite examples is from the book Atomic Habits by Adam Grant, when he talks about if a plane takes off from LAX and it wants to land in New York City, and the pilot decides to turn the headwind just like two degrees in the sky, the passengers aren't even gonna notice. It's like a very minute change. But it makes a big impact, and they're actually gonna land in Washington DC, which is not anywhere close to New York City.

So these seemingly minute visual regressions can compound, and then you have a massive amount of technical debt that needs to be fixed. So it's very important.

**Angie Jones:** When people think about the visual part, they might think -- you know, the small cases, like "Okay, yeah, text is not perfectly aligned. Big deal..." But I've seen some visual bugs that literally affect people's bottom lines. Some examples - I was on an OpenTable trying to submit a restaurant reservation, and I clicked this modal, and the modal popped up, but I saw two buttons, and they weren't in the middle, one, so I didn't know what to do at first, and I started looking around... And they were in the upper-right corner, and they weren't aligned, but there was no text there saying what these buttons were for, or anything like this. So I immediately am thinking like "Okay, I'm making a reservation for seven people... We're gonna ball out. We're gonna buy drinks, we're gonna buy food..." And I was thinking "How much business is lost because I can't even complete this reservation?"

Another one was on Instagram, where it was a sponsored post, but all of the text was overlapped on each other, and kind of jumbled, so you couldn't read it. There was no picture there... It was awful. And I'm thinking like "Someone paid to have their content shown like this, which means they're gonna ask Instagram for a refund, and probably not trust that product for their marketing needs anymore."

So these are very real consequences to these visual bugs. It's not just a "Oh well" kind of thing, or small, minute stuff. It's definitely worth looking into as part of your strategy.

**Emma Bostian:** That's so true. It's like, once we add dollars signs to things and people start taking it seriously, it's like -- accessibility as well was one area where no one wanted to invest, and then especially the EU got hit really hard with new regulations, and then we started seeing lawsuits coming out about inaccessible websites, and people getting sued... It's like - well, testing, I don't know if you can necessarily get sued for that directly, but it is a result of a lack of testing that these regressions or incorrect integrations are happening... And especially, like what Angie said, if you're working with sponsorships, your reputation and your income are on the line there.

**Angie Jones:** \[00:31:56.19\] Yup, exactly. And visual testing can -- if we think outside of the box, it can help with even stuff like accessibility testing. My company Applitools, that's one of the features that's available in the visual testing... It's "Okay, now I have these two pictures of your application and I'm comparing... You're good to go, but did you know you're not following accessibility guidelines? Because there's not enough contrast between this text and its background." So that's really helpful information you might wanna know before shipping this out.

**Emma Bostian:** Absolutely it is. Let's talk a little bit about regression testing, because we actually run manual regression tests every two weeks, around two-week sprint cycles... And at the end of every cycle, when we're about to release, all of the squads get together with this huge spreadsheet and manually regression-test things.

So regression tests are basically tests that ensure that anything you've committed to be published is not going to break anything that already was performing well. So my question for you, Angie, is like - we have all these different types of tests... I'm confusing now regression and integration... Because they're very similar, but integrations are a little bit different.

**Nick Nisi:** Very common... \[laughs\]

**Angie Jones:** Yeah, regression tests are any of your kind of tests - your unit tests are regression, or integration... Regression just means that you run these over and over. This is not new functionality, not new tests... I'm just running it again on our old stuff. That's your regression.

**Emma Bostian:** I learned something new today, and I'm excited about that. Okay.

**Angie Jones:** Good. \[laughs\]

**Emma Bostian:** Fabulous. It only took me how many years of professional software development... But integration testing isn't showing that, like, when you have something new, it integrates cohesively with what exists currently... Is that true?

**Angie Jones:** Yeah, making sure different components are integrated successfully.

**Nick Nisi:** I was just gonna ask, with integration - would you also have portions of it mocked out? Or where does mocking come in in your thoughts?

**Angie Jones:** Yeah, so your mocking - I like to mock things that are like... One, if I'm doing some integration with like a third-party system... I don't wanna test their stuff. Like, I barely can test my stuff. I don't wanna \[unintelligible 00:34:10.14\] So let's say you have some integration with Twitter, or something like that. You don't wanna be on the Twitter app, and all of that. So you would kind of mock maybe your API request to Twitter, or something like that, and just essentially focus on your application versus the other part of that.

Other ways people mock is if you have kind of these various development teams that they may work together, but you're working on your piece, Emma, and Nick, you're working on your piece, I'm working on my piece - well, I wanna test my piece, but I'm waiting on you. So I don't wanna wait on you, I'm gonna mock your piece out and test my piece. And I'm gonna mock Emma's piece and test my piece, just to make sure I'm holding up my end of the contract. You probably are gonna mock my piece, and whatever... But that can't be your end solution. So you do that for your kind of "I did my due diligence, you did yours." Somebody needs to actually integrate these together to make sure that they work in real life. So you would then have some additional integration tests that maybe actually put us together and exercise some scenarios.

**Emma Bostian:** So mocking definitely confused me when I started out... I'm gonna spew out an analogy, and tell me if this is correct. So if we're building out, let's say, a buddy feature, whether this is -- let's say the Facebook buddy feature, where you can see who's online and chat with people. Let's say that you're testing the actual components that render whether someone's online. It's like, you don't care necessarily about the API request that's being sent to grab all of your friend information. You just care about, like, given the response that you get back, a list of friends - is it rendering properly? That's kind of what a mock does. It's just giving you this mock data or fake data.

**Angie Jones:** Yeah, exactly. Exactly.

**Emma Bostian:** Awesome. And Nick, you mentioned end to end testing, and this is the biggest umbrella of testing -- or the biggest type of testing, because you're actually going through user flows. Or am I mistaken?

**Angie Jones:** \[00:36:19.11\] That's gonna be your most complex one to write, and the longest to run, and the hardest to maintain, so you try to have very few of those. I wouldn't at all recommend making this the heart of your test suite. I believe you should have mostly unit tests, some integration tests, and a couple of very critical end to end flows.

**Emma Bostian:** There's nothing more painful than having flaky end to end tests, because I've had this issue where it's like, I have to retrigger build over and over, not because my code is messing antyhing up, but just because the pipeline is so inundated, and they break...

**Angie Jones:** I just wanted to take a moment to define that for anyone who's listening and might not know "What are they even talking about, end to end?" So that's where you take a scenario, a real scenario; so you're not just making sure that you could select the date, but maybe you're selecting a date as part of a longer form, for example booking a flight. So you would take that from the beginning... So you come to the application, maybe you log in, you search for flights, you choose one, you select the one you want, you go to the payment, and now it's complete. So you take a customer journey, where there's some goal that needs to be met, and you go through all the steps to make sure that works.

Now, when you're doing your end to end testing, I do recommend like, alright, go ahead and do all of that on the UI, but when you're testing a certain piece -- maybe I wanna just test checkout. I don't wanna write an end to end flow just to test checkout. So that's when you start using what I call \[unintelligible 00:38:07.05\]

So is there a way that I can maybe make an API call or something to essentially get my app into the testable state that I wanna test? And I feel like that's where people go wrong with frontend testing, is you're doing too much on the frontend. That's why our tests become long, and flaky, and fragile, because you just have too much going on here. I don't wanna search for flights when I'm trying to test payment of flights, right? So let's just maybe make an API call where we add this thing to the cart, or something like that... And then I can just go to the UI, make sure that looks right, do the payment, boom, I'm done.

**Emma Bostian:** That's really great. I love that, because -- I always think about like... Yeah, an end to end test is a scenario; I think that's a really great way to put it. Because I just thought like "Oh, it's just testing an entire user flow." It's like, no... Like you said, you don't care about searching through an entire list of flights; you care about how the checkout works, because that's where your business could fail. Or making a reservation, right? That's awesome. Nick, what were you gonna say?

**Nick Nisi:** I forgot, but I do have another question... So with this -- when we were talking about integration testing and mocking, we were kind of talking about how, you know, given this set of inputs, I can mock that out and say "This API will always return me this." So is this where you would create that scene or scenario to actually verify that "Yeah, they're still sending me the same shape of data", and kind of put it together here?

**Angie Jones:** Yeah, you've gotta do that part. Mocking has its place, but that cannot be your end-all strategy... Otherwise - yeah, that API changed, and you had no idea, because you were still just using the mocked response, and that's when stuff starts falling apart.

**Nick Nisi:** \[00:40:01.06\] Yeah. I feel like this is a good place to say things like - interfaces that TypeScript can give you are a good way to know if this API or this third-party tool that I'm using gives me an interface that shows me what they're using, and I'm coding against that, maybe I can catch it earlier by noticing that I no longer match the data that's coming back. But that's overall a good thing.

But yeah, the other thing I was gonna say is, in my experience with end to end testing - this is always the one that I kind of fear the most... And it's because they're the most complex, with the most number of small pieces that can go wrong, that just totally break it, and they take the longest. So they end up getting run less frequently.

**Break:** \[00:40:42.27\]

**Emma Bostian:** So we've talked about quite a few different types of testing, but one concept or paradigm that is gaining popularity is test-driven development. Angie, can you tell us a little bit more about what test-driven development is?

**Angie Jones:** Yeah. So this is one of those things that people love it or they hate it. There's \[unintelligible 00:42:23.07\] I'm not one of those types of people, although I think it is a fantastic technique, but you're okay if you don't go that route. So what it is is where you write your tests first. And this officially drives the design and the development of your feature.

Let's say for example you needed to write a login form, you needed to write some component; a login form. So you would first write your test that says -- whatever; it enters the username, it enters a password, and it clicks the button, and it should then navigate to the homepage, or something like that. So that might be your test. You write that test out.

Then you would develop just enough code to make that test work. Usually, TDD is -- I haven't seen many people do it on frontend tests. I see they mostly do it on backend, very small unit test type of thing. But you could definitely do it on frontend like this, the scenario I just gave. But the idea here is you don't get to write code unless you have a test that is dictating that I need this code in order to pass. So your tests always start out as red, because you don't have the code yet, and you write only enough code to get that test to pass.

\[00:43:58.25\] This helps you with staying focused, not over-engineering the problem, and also making sure you get some regression tests at the end of all of that. So you keep going down this cycle - you write enough for that scenario, and then you think, "Okay, what about if they entered the wrong password?" Well, that's another test you then write what should happen. "Okay, I'm expecting this error. Alright, now I get to go write the code that makes that test pass, makes that possible." And you continue this cycle until you feel like you've developed the feature, and covered all your bases.

**Emma Bostian:** I can't tell you how many times that would have saved my ass, because my team in particular - we build these really new, high-priority features in the desktop app, and when we have millions of monthly active users, it's really important that we don't over-engineer our code, and that we don't forget things. And it can definitely be maybe not as exciting for some people to jump in and do tests first. A lot of engineers wanna just get straight into the problem, and that used to be kind of how I thought about it as well, and sometimes still do... But to Angie's point, you shouldn't necessarily be writing any additional code than what you need to solve all of these design problems. It would have saved my ass so many times.

**Angie Jones:** Mm-hm. And we realize a lot of assumptions that we make as well. So when you start with this approach first, I find myself sometimes jumping ahead of the gun, meaning I implemented too much. You find yourself doing that a lot.

Even in that one case where I said "Okay, you need to log in." So when you go in, you're supposed to write the very smallest, most minimal thing you can do to make that pass. Say if my login is "angie" and my password is "jones", then I'm supposed to literally kind of hardcode that into that, because that makes that test pass. And you only get to write more as you come up with more scenarios, like it's a different username and password, or it's the wrong one. That's when you start adding your conditionals, and stuff like that... But we have a very bad habit of jumping right to "Okay, if this, then that..." It's like, "No, no, no." Take a step back. Only the most minimal amount of code to get that particular test to pass.

**Nick Nisi:** So let me ask about that scenario then... Breaking it down to just like the first step. I'm thinking from like a frontend test, so login - username and password, and then hit the button. To do any of that, the first thing I have to do probably is find the username input. So when I don't have any code written for that component yet, how would you even start that off? Would you just like --

**Angie Jones:** Oh, I love that question so much. This is why I love that question... Let me tell you, frontend folks - we have a very, very bad habit of not putting unique identifiers on our elements. And this makes your code really hard to test, it makes it really hard to automate. Because to automate this, you need to be able to get to that specific element. And yeah, I can use some CSS selectors and stuff, but you want this stuff to be as unique as possible. I don't wanna say "Find me the button" and then when we add another button it's like "Oh, well maybe find me the first button", and then we put another button later on and like "Oh, now it's not the first..." You see where I'm going with this?

**Nick Nisi:** Absolutely.

**Angie Jones:** So if you have an \[unintelligible 00:47:35.01\] on there that says "Login button", then in my test I can say "Okay, find the thing that has ID "Login button", click it, find this etc." That forces me to then when I implement those elements, I have to put those buttons in order to make the tests pass.

**Nick Nisi:** \[00:47:57.11\] One thing that I've seen recently -- I can't remember where I saw it, but it was taking that exact same scenario where you have something unique like that, but instead of being like an ID of a button, it was maybe like a role, or some kind of accessibility on there, so that you're searching by that, but you're also enforcing that you actually have the accessibility requirements that you need.

**Angie Jones:** I like it.

**Nick Nisi:** I love that.

**Emma Bostian:** Absolutely. So if someone is building out a React application from scratch and they want to create some tests - let's say unit tests - what type of technology should they be looking at for their project?

**Angie Jones:** You mean like testing tools?

**Emma Bostian:** Yeah, tools. Because there are quite a few that you could use. How would you know which to choose over another?

**Angie Jones:** Yeah, it's time to get kind of like these frameworks out there, these frontend frameworks \[unintelligible 00:48:46.21\] Now I have so many, it's like, which one do I choose? I think there's a couple of things to keep in mind. For the most part, all of them kind of work the same, where they're querying the DOM, allowing you to interact with some elements, and reading from the DOM, that give you some information back. So all of them kind of have that in common.

There's some of them that offer more codeless or low-code type approaches as well. For example, Cypress has a Recorder, Selenium Web Driver - they also have a Selenium IDE version, stuff like that. So if you maybe want, I don't know, your manual testers to write some frontend tests, maybe that's an option for you. There's some drawbacks and limitations with that sort of approach. But if you have dedicated test automation folks, or your devs are gonna write some tests, then you might wanna go with one of the coded solutions.

And with that, till you start thinking "Okay, what do I have to cover? Is this something I need to cover on various browsers? On various devices even? I wanna make sure it works as a web app on my mobile phone, too." Stuff like that. So making sure those capabilities are there as well.

I also like to make sure there's some support. So with so many of these new ones popping up all the time, it's really tempting to chase what's new and hot, but I've learned the hard way -- I've had to tell my development teams, like "No, that literally came out last week. There's no documentation, there's no support. If we run into any kind of issue, there's no one we can call." Not only that, sometimes people are doing this stuff as a hackathon, or a fun side-project, and then they go often do something else with their lives, so you don't even have anyone maintaining this.

So that's definitely something to consider as well, like what's the community around this. Is it something that's trusted, are there people you can bounce ideas off of, go to if you have questions? Is it open source, where we contribute if we need to? If it's not, if it's a vendor, what do they have over the open source options that would make it worthwhile?

**Emma Bostian:** That's really great advice, yeah. Absolutely. Nick, do you have any other questions before I ask Angie one last one?

**Nick Nisi:** So you mentioned at the beginning that you do a lot of consulting, coming into companies and setting up test automation... I was just gonna ask a personal question, and I know it would be set up specifically to the problem you are trying to solve, but given free range, what's your ideal testing stack?

**Angie Jones:** \[00:51:48.10\] Hm... Y'all not gonna like this, because I'm on JS Party, but I'm a Java girl. \[laughs\] Java is my fave, so I like that. I love Selenium Web Driver. For JavaScript, I really like Cypress, so I work with that when I need to work with JS teams. I'm gonna put my visual testing in all of those stats, because if I'm gonna do frontend testing, it just makes sense to test the appearance of it, right?

I like Mocha, I like Chai, I like in the Java world JUnit... API type of stuff - there's like Supertest, and Nook... Is it Nook or Nock? Emma will get us the thing, with the link...

**Emma Bostian:** I will.

**Angie Jones:** \[laughs\] But you can use that for your API testing; I really like that. In the Java world I like REST Assured for API testing... Cucumber in different scenarios... There's also BDD - we didn't even touch on that; that's a whole other beast. And \[unintelligible 00:52:51.26\]

**Nick Nisi:** Cool.

**Emma Bostian:** That's awesome.

**Angie Jones:** How about you, Nick? What do you like?

**Nick Nisi:** I rarely get to choose, but I've really been liking the mentality that Testing Library has kind of forced me to think in, in terms of like --

**Angie Jones:** Sorry, I forgot about Testing Library. I like that, too.

**Nick Nisi:** Yeah, I'm approaching it more from a frontend side, for sure. That's where I spend most of my days... But I really like the idea of -- I'm not writing tests to test the code, like the inputs and outputs of the code, I'm really writing tests to verify that given user input in this way, the user sees something in this way... And Testing Library is a good introduction to that, and I'm kind of curious if I could just go further, easier with something like Cypress, to give me more control over that... Because a lot of times with Testing Library it's writing out a lot of code, it's running in JSDOM, and it's always just checking the DOM, and I'm kind of having to guess as to whether I'm actually doing things correctly... Whereas with something like Cypress, I can run the Cypress visual browser and watch it run the tests in front of me, and I can see "Oh, wait, I'm not clicking the right button right there" and then adjust the test correctly.

**Angie Jones:** Yeah.

**Emma Bostian:** Cypress allows you to back-track in time too, to different snapshots... Is that right? Or am I thinking of something else.

**Angie Jones:** Yeah, when you write it, it'll run through each step, and then when it's done, you can say "Click on when I entered my password" and it'll show you what was going on when you entered your password, and all of that. So yeah, it's pretty neat. It's pretty neat.

**Nick Nisi:** Yeah.

**Emma Bostian:** So my question for you, Angie - for someone interested in getting started with testing, what's the biggest piece of advice that you wish that you had when you were starting out?

**Nick Nisi:** Great question.

**Angie Jones:** It's more than just tech. And that's the answer for a lot of things in this industry. You have to have a culture that embraces this type of mindset. Otherwise, you're kind of off doing your own little side-project, and you have no support, no one else is contributing, no one cares, and it kind of just gets abandoned and it's a big flop. I've seen that lots of times.

You have that eager kind of person that's like "Oh, we should test the things, and I'm gonna start us up our test framework, and I'm gonna bring in Cypress, I'm gonna do blah-blah-blah", and your builds are failing because you integrated them, because no one else is contributing or cares, and they're breaking stuff... And then it's like "Cut those stupid tests out. We've got features to ship." And then it just kind of gets abandoned.

So I would focus on why you want to do it, and what's the goal you expect here. One of the most common goals is fast feedback. We wanna be able to make sure our application hasn't regressed, and we want that information very quickly. So with that goal in mind, all of your actions should follow that. The tools you choose, how you write your tests, what you even test - all of that stuff, you have that goal in mind... And you make sure that the team is aware of this, and they're on board with it. So there may need to be some kind of launch learning sessions or something for the whole team, where we understand the risks, the value-add that testing brings, and kind of get everybody on board, and then we move into how to implement this.

**Emma Bostian:** That was wonderful advice. I wish I had learned about testing when I was starting out... Although, to be honest, I feel like I would have been overwhelmed, because at the time I didn't even know web development, but I was in a web development position... Hah! So it just probably would have been a lot.

But if y'all are interested in learning more about testing, I'm gonna link all of Angie's information down below, including the Test Automation University link, which you should absolutely go check out.

I wanna extend a huge thank you to you, Angie, for joining us today and sharing your knowledge. I learned a lot. I learned that regression tests is just essentially an umbrella for many different types of testing... And we're also gonna link Angie's talk about how to know which tests should be automated in the show notes, so I highly recommend checking that out.

**Nick Nisi:** I cannot wait to go watch that.

**Emma Bostian:** So thank you once again.

**Angie Jones:** Thank you so much for having me. This was fun.

**Emma Bostian:** Yeah, you're welcome. Have a nice day, y'all.

**Angie Jones:** Okay, bye-bye.

**Outro:** \[00:57:21.00\]

**Horse JS:** Do you want to start a YouTube channel together called JavaScript?
