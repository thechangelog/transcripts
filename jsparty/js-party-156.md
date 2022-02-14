**Amal Hussein:** Hello, party people! We're back again this week, and it's a very exciting show. It's like a throwback show and a reflection show. It's a good kind of end-of-year show. We have a very special not-guest today... And I say not-guest because he is a not-guest; he is Chris Hiller. You may know him as b0neskull. We're gonna be talking to him -- well, he's a panelist, obviously. Well, maybe not obviously, if you're listening for the first time... But we're gonna be talking to him about an important project in the web ecosystem called Mocha; it's an npm package that is a test runner, and it's an important package and an important project because Mocha's celebrating its 10-year anniversary. And for a JavaScript package to have survived ten years and still be relevant is kind of miraculous.

We're gonna learn a little bit about what's the secret sauce to its success, as well as dive into what's it like to maintain a project that has such a long arc, where folks are using it across multiple Node versions, and what's it like to even maintain something like that... And we're also gonna learn about what's it like to make your maintainers happy. So lots to dive into, so welcome Chris, and we're joined by Divya, as well. Hello, Divya.

**Divya:** Helloooo...!

**Christopher Hiller:** Hello!

**Amal Hussein:** Chris, talks to us about Mocha... How did you get involved with the project? Or actually, before that, can you just define what the project is in your own words?

**Christopher Hiller:** \[03:58\] Yeah, so Mocha is a test framework. There's a test runner component of it, so you can run Mocha on the command line, and it will run your tests... But mainly, it's a framework. What that provides is an API for you to use to organize your tests, and it also provides a reporting structure, so you can actually get the output of what happened when you run those tests. That's the main part - it's ways to organize your tests, and the reporting output.

**Amal Hussein:** That's really great. It sounds simple... What do you think has been the key to Mocha's longevity within the ecosystem? If I remember correctly, when Mocha was making its way into the scene it was Node-first, and I think people were just starting to take Node seriously within companies, and you were starting to see Node.js get adopted here and there for people's non-critical production projects... So what was it like? Actually, you weren't part of the project, but I'm curious if you knew what the secret to its creation and its success has been.

**Christopher Hiller:** Yeah, so as we have established, it's kind of old. Node is not much older than Mocha. But in those early years, there weren't too many choices for test frameworks. It was one of the first, and I think it has that advantage of being first-to-market. So it was one of the first ones, and it focuses on Node. It's written in Node; that's kind of its sweet spot... And it just really was one of the first tools out there. It also brought with it - and this is part of the history I don't quite have a handle on...

So there's another test framework called Jasmine, which I think is about as old as Mocha is... But they both have a very similar API. They call it BDD, or behavioral-driven-development style API, where it's supposed to be very declarative... Also, Jasmine was focused on the browser. So I think maybe what happened is that API from Jasmine inspired Mocha's API. But Mocha was focused on Node instead of the browser. So it really introduced Node users to this style, and a lot of people seemed to like it.

First, personally, when I saw that API, I was like "Well, it's kind of odd. I'm not used to writing tests with describe. I'm in another language." I came from Python, or what have you... So we would write a suite known to be called Suite, and we'd have the test that we called Test, and it was also kind of an introduction to this idea of callbacks. So if you're, again, coming from another server-side language, maybe like Python, you probably don't have a lot of closures you're passing around. In Mocha you have your declarative API, and you're passing a function, and within that function then you're making more functions, and it was just kind of, in some ways, a very gentle introduction to this callback style. Also, a lot of people really like this declarative type of API. So by virtue of being one of the first, I think it really took off.

**Amal Hussein:** \[07:56\] Yeah, that makes a lot of sense. I actually do remember that distinctly, where we were using Jasmine, and then Node came along for being compliant with -- you know, you could write Jasmine-style tests for your Node apps... So there wasn't this -- so JavaScript developers got this cool burst of productivity, because they got to write JavaScript in the server for the first time, because it's this experience where you're always developing in two different languages, and now all of a sudden you have an isomorphic app, or a universal app, or a full-stack JavaScript app. Or as many developers would now call it, just an app. \[laughs\] We don't even have to give it a fancy name. But I remember that was super-cool.

It's funny to hear you talk about this, the inspiration behind these APIs, because Jasmine is super-influenced by jQuery... To bring everything back to jQuery. So it's interesting how you have these echoes of influences...

**Christopher Hiller:** Right. And Mocha, and maybe Jasmine as well - again, this is where I'm not sure of the connections, but at least I know Mocha was influenced by RSpec. I'm not a Ruby person, so I don't really know, but I do know that RSpec is a test framework for Ruby, and it kind of looks like Mocha. So if you were running tests in Ruby, you could come over to Node and say "Oh hey, look at that." And the original author of Mocha, TJ, he may have been a Ruby developer before he moved over to Node; I'm not sure. But I know there's that connection as well.

**Amal Hussein:** That's super-cool. Before we dive into anything, I'm super-curious, how were people testing their Node apps before Mocha? You may or may not know this... And then also, how do you, as a library author of a testing framework, test your framework in that language? It's this meta problem...

**Christopher Hiller:** I'm not sure, really. I came to Node about the time I came to Mocha, so maybe about five years ago... So I'm not sure what people were using to test before then. I imagine a project like Tap, or Node Tap, or something... It was pretty old... I know there was one a long time ago called Node Unit, and I think that didn't really take off... So I'm not entirely sure.

**Amal Hussein:** I'm dying to know, how do you test your testing framework? It's this super-meta problem of circular referencing... You can't use Mocha to test Mocha. Or can you? Or do you? How does that work?

**Christopher Hiller:** Yes, yes. You can use Mocha to test Mocha, and we do.

**Amal Hussein:** Is it safe though? \[laughs\]

**Christopher Hiller:** Yeah, I mean - the world's not gonna explode, or anything. There's not gonna be some rift in the space/time continuum because Mocha is testing itself, or anything like that. I think all test frameworks do this. I'm not sure of one that actually didn't use itself to test itself. Of course, Mocha is unit tests, and essentially, when Mocha's running its own tests, it will say "Okay, Mocha", and then there'll be a test, and it'll go, and this unit test will pull in bits and pieces of Mocha, and it will test the units. So it's just like any other unit test against any other app; it's just like a module. You can just pull it in, it's a library, and you instantiate classes, and run methods, and stuff. That's it.

But when it comes to testing, more end-to-end type tests, what we do is we have Mocha fork a copy of Mocha. Then we make assertions about the output, and there's various different ways we do that.

\[11:52\] Further, testing Mocha in a browser context - so there's a test runner called Karma, which some of you may be familiar with... And Karma is a way to, I suppose, just automate the opening of a browser and execution of tests, or what have you. So it's not a thing like a Selenium, where you would mimic a browser user, and you would move the mouse around, and click on things; it's not for that. It's more of a unit or end-to-end test type thing.

So Mocha uses Karma to test itself in the browser. And the way you do that is you pull in a plugin, and that plugin is called Karma Mocha, and that adds Mocha support to Karma. So it's kind of this weird thing... Mocha depends on Karma, and Karma Mocha, which depends on Mocha... So there was a little bit of fiddling we had to do to get that to work, but... Yeah, it's like, Mocha can use the ecosystem around it to help test itself. That's one of the examples.

Another example of this is somebody wrote a GitHub Action to add annotations to Mocha test failures when you send a pull request. So if you send a pull request, a test fails, it will send this information to the GitHub Actions API, and it will display the test failure in-line, under the line of code where it failed... Which is really cool. And that's something that somebody built for Mocha, just for their own use, not for Mocha's use; I saw it, and I was like "Hey, that's cool. I'll use that."

So we find stuff that people build on top of Mocha, or build for Mocha, and a lot of the times we find we can use it for our own purposes. It's really neat.

**Amal Hussein:** Super-cool. That is awesome. Just hearing how -- I feel like there's this back-channel universe in maintainerland, where folks that have projects within the same ecosystem, they're constantly collaborating... It's just really interesting to hear you talk about the back-story there.

**Divya:** It's also really interesting because this often ascends from userland, that you're competing against other frameworks out there; it's like "Oh, we're Mocha, and if you use Mocha, you can't use these other testing framework, or whatever." Which seems to not be the case, because a lot of the times they feed into each other. So if Mocha introduces something in another testing library, it would be like "Oh, that's a really great idea. We're gonna use that." And it's sort of an ecosystem that feeds itself... And I'm hearing less of that competitive streak that users tend to assume is the case, where you're like "Oh, you're a competing testing library." But no, you aren't, because oftentimes just because a user picks one over another, it doesn't mean that one testing library suffers as a result, which is interesting to see.

**Christopher Hiller:** Right. That's a good question... If there's any competition, I feel like it comes from the users, who are really enthusiastic. You see that with frameworks; somebody's gonna be really into Vue, and write some blog posts about how React sucks, or something like that. And you'll see that from time to time, just with (I suppose) any other type of project where there are multiple choices in the same ecosystem, and you could go either way... But yeah, certainly, we share the ideas...

If you pull in a JavaScript testing framework, there's two styles. There's this Mocha/Jasmine/Jest style, with this BDD thing, and then there's the Tap style, or the AVA style. And there's these two things, and there's like two camps. And there may be some -- I don't know... There's definitely people who prefer one or the other of those styles of writing tests; that's a thing. But again, it's just a preference.

\[16:18\] I maintain that it really -- at the end of the day, it does not really matter which of these testing frameworks you use, as long as your team likes it... Because they all work. They're all gonna test your code. And if you are getting really worked up about one's better than the other - I mean, find something better to do; find something else to worry about, because any of these are gonna be able to test your code. And a lot of the testing frameworks out there in JavaScript are all mature now, the popular ones. They've been around the block, so it's really hard to go wrong with any of them, I think.

**Divya:** Do you ever hear, as frameworks have taken on more popularity and so on -- there's testing libraries like Jest, for example, that are very specific for Snapshot testing, and so on... Have you ever seen conversations around how Mocha doesn't necessarily address certain things that other libraries have, and that it should, but it doesn't?

**Christopher Hiller:** Yeah, sure. Mocha doesn't come with an assertion library. Pretty much every other framework does. So every other framework is gonna have some way to make an assertion; Mocha doesn't. And I'm sure from day one people are like "Well, why don't you add an assertion library?" I said "Well, that's kind of a design choice." You wanna let a user choose, essentially. And it keeps the project smaller.

So there's stuff like "Mocha doesn't do X out of the box", and it doesn't. Well, it's because a lot of people don't necessarily need X out of the box. And if they want to do X, it's no so hard to get it working. You can get Mocha working with pretty much anything that I've seen. Somebody's got a way to do it, and it's more of a design philosophy. It's not a batteries-included project, it doesn't really need to be; there are plenty of people who are happy with that. I'm happy with that. If you wanna do snapshot testing, you can use Mocha to do snapshot testing; it just doesn't do it out-of-the-box.

**Divya:** Right.

**Christopher Hiller:** So there's a lot of things that Mocha and the maintainers have said no to, just because it's --well, somebody's written this already, and it exists out there, and it doesn't need to be part of the core library. Again, if you're talking about "Well, Mocha doesn't do X" - yeah, but it can... You're pulling in another library to do it, that's all there is. So in my mind, it's not a huge deal, because there is such a huge ecosystem around Mocha.

**Divya:** It's actually really interesting, because I have personally only ever used Mocha with an assertion library; I've never just used Mocha as is... So I'm genuinely curious if there is a common scenario where people use Mocha without an assertion library, or they always reach for one.

**Christopher Hiller:** I see most people using them, yeah. The most popular assertion library out there is Try, and most people seem to wanna use that. You don't have to, because Node comes with the assert built-in, so you can just use that if you don't wanna bother with it, and it's fine. But --

**Divya:** Yeah, so you don't have to necessarily bring in an assertion library, because you could just use Node's native assert for that... But I think Chai does introduce some niceties with regards to an API that some people like.

**Christopher Hiller:** Yeah.

**Amal Hussein:** \[20:02\] Yeah, I love Chai so much... I have to say though, I feel like Mocha is -- I'm so happy to hear the maintainer's practice is this resistance model... Because it's so easy to want to make your tool do everything, have it be like the kitchen sink... Or like a Swiss Army knife, where it does ten things badly, nothing well... But I would say the plugin architecture for me is what I think has made Mocha still relevant, because I think people can continue extending it and extending it, because it's got such a strong core framework.

What do you think has led to the success of managing to still be relevant today? Because it's amazing how it's still extremely popular, as are the packages that came up with it, like Chai, and all these other things. Do you think it's the API being simple, or is it something else? Or is it just that it was the first to market, and it got early adoption?

**Christopher Hiller:** It's a combination of those things, I think. I think it's pretty simple if you're writing code in Node, and your project is pretty small... It's pretty fast once your project gets very large. We've recently introduced some ways to handle larger test suites, but... Yeah, it's pretty stable; I like to think so. We try not to break stuff, we try not to add too many things... We try to adhere to semver as closely as possible... And we keep up to date with new Node versions.

Part of it is just being actively maintained. If people weren't looking at it, it would die by the wayside, because you wouldn't get security patches, and all sorts of things. So just being maintained is a good thing there. You may see other test frameworks - and I'm not going to name any names, because I'm not really sure, but maybe they haven't had a commit in six months.

But you know, Mocha is -- there's been times when the foot's been off the gas pedal a bit... But we're still working on it, and still trying to make it better. Another one of those things is we try to -- it's kind of complex, but we do still support IE11. When I started with Mocha, it was actually not even written in ES5. It was ES3-compatible, so that means it would run in IE6, or something... So it's really kind of kept support for those older browsers for quite a while. And we've been able to maintain that support without too much of a hassle, but supporting older Node versions can be a little more difficult.

We try to now - once a Node version goes unmaintained, within some time period thereafter we drop official support. It doesn't mean it's not gonna work, but we just take it out of our CI build.

**Amal Hussein:** That's so cool. It's such a good segue into what I wanted to ask you about next, which is - how many versions of Node do you support right now? And especially if you're supporting IE11, what's that even like, to support the latest version of Node and then going back X number of -- do you just have to practice restraint when you're writing the code, essentially? Like there's just like no new JavaScript, basically...

**Christopher Hiller:** So up until a few months ago it was--

**Amal Hussein:** No Babel, no build tools, no-- \[laughs\]

**Christopher Hiller:** \[23:52\] Right... Up until a few months ago we did that with the help of ESLint. So we have code that is not going to be run in the browser, and that's the command line interface. So in that code, we could use things like const and let. But in the code that got shipped to the browser, we could not. So we would have this \[unintelligible 00:24:17.19\] ESLint config that says "You can use ES2015 in these files, but not these files." So that was kind of the status quo for a long time.

Several months ago we actually ended up pulling in a build tool, so now we can actually use modern JavaScript anywhere, and it all just gets transpiled and rolled up like anything else. But yeah, that's where it was at. It was like "Okay, you have to use var, you can't use the class keyword", in all of this code that would get shipped to the browser. It was inconvenient, but not so frustrating that it was really holding the project back, I think. What would hold the project back more is having to support older versions of Node, actually... Because there's certain incompatibilities, there's missing language features, and because there was not a build step for so long, we didn't wanna add a build step for Node, and we still don't have a build step for Node. But it's a little more difficult, because if we do wanna use ES2015 or even newer stuff, like async/await, if we're gonna support all the way back to Node 4 or something (I don't know), we're not gonna be able to do that.

So yeah, we did support very old Node versions. That's not the case anymore. I think I'm happy with that as a maintainer, because it's just another thing I don't need to worry about. There are versions of Mocha that work with Node 0.10, or 0.8, or 0.12, and you can go out there and download them and run them, and they work, and great; there you go. So you're set, right?

So I don't necessarily think that we have to keep support for versions all the way back to Node 0.4, because there are Mocha versions that support this, and if you for some reason are starting new development, and expect it to run in Node 0.4, then you've got bigger problems. So you can just go use the Mocha that runs in that version if you want. But I don't see it being necessary for us to keep supporting. However, in the case of IE11, people are writing new code that needs to run in IE11 for whatever corporate reason, and that's just kind of the way of things right now. So we still support IE11.

**Amal Hussein:** Oh, wow. Well, you heard it here, folks... Maintainers having user empathy. It's so nice to hear that y'all are going the extra mile to support people who also need to support IE11 use cases... So it's just really great to see that type of forward-thinking -- because it's really not everywhere in the ecosystem. I don't wanna name names, but there is one popular maintainer that uses arrow functions, and just really doesn't give two craps about anything, and they have widely-adopted packages. And I'm like "WTF?" \[laughs\] So you care about people, and whatever else... So I'm really happy to hear that. Jordan Harband, he's very on the same -- he writes ECMAScript 3, and he's like the editor of ECMAScript, and he doesn't even get to write modern JavaScript for his packages...

**Christopher Hiller:** Yeah... He's much more extreme than I am though, so...

**Amal Hussein:** Yeah...

**Divya:** \[27:51\] I think there's probably one huge reason to go back to your comment earlier, Amal, about the longevity of a project... Because it's really easy -- and I think this is a common scenario now, where you look at a project, and if something is old, it's like "Oh, it's been around forever", and you want something new, and you want something that's up to date... But I think if you look at just projects over time, the ones that have cared a lot about backwards-compatibility and making sure that things work, and that users remain satisfied, this particular project can see its way through the course of like a project lifecycle, however long that is.

That speaks to whether or not that project will be around in five years, or ten years... Which I think is very taken for granted, in a way, where people just assume "Oh, we're using the latest tool, so people will use us, and will continue to use us..." But I think this is just the general with being a human, which is that you forget that your future or your current is gonna be your past at some point... So you don't really think about that, and you're always like "Oh, it's obviously current", but moving forward, the syntax might change, and the thing that you built is no longer edgy... And will you continue to keep that standard, keep it backwards-compatible? The answer is oftentimes no.

**Christopher Hiller:** Right. Yeah, backwards-compatibility is important to Mocha in a very specific way. So what we try to do is not cause a major -- I mean, we have major releases, right? There are things that have to break. But unless there's some terrible bug where it's like a false positive or a false negative type situation, we don't want tests that used to pass - we don't want them to start failing. Or tests that were failing - we don't want them to suddenly start passing with a major release.

So changes that happen -- I mean, personally I'm just totally anti. I don't wanna ship anything like that. I wanna maintain backwards-compatibility. I want tests that -- you know, assuming you've upgraded your Node version, I want tests that you wrote in Mocha, six, seven majors ago, or whatever. Mocha is version eight now. We want those tests to still work, if there wasn't something wrong with them. But that's what we focus on, making sure that a change that we make won't cause a bunch of people - and there are a bunch of people that use Mocha; we don't wanna cause a bunch of work for other people to go back and have to fix a bunch of tests, because we decided "Well, the API isn't pure enough here, and it's just not right, and we just need to change it." That's not okay. So that's how we look at it.

**Break:** \[31:05\]

**Amal Hussein:** Alright, so Chris, and Divya... Wow. Mind - blown. We're talking about empathy, we're talking about writing code - two of my favorite subjects - and we're talking about doing good by our users, and it's a really good segue into our second segment, which is how to be good to your maintainers. Chris has been a maintainer of this project for almost five years - or five years - and he's been around long enough to know what makes for good open source stewardship. And when I say "stewardship", I mean as a user of an open source project we're all kind of stewards of it, whether it's just we're reporting bugs, or hopefully supporting the project in some way... So with that said, Chris, tell us about what makes you happy as a maintainer; how does \[unintelligible 00:32:41.10\] of your project make you happy as a maintainer, to be specific?

**Christopher Hiller:** It's a couple things. One - maintainers are those that have an interest in fixing other people's problems. Maintainers like good bug reports. So a clear reproduction plan. What not to do is "Hey, I am encountering this error with your project. When I do X, it does Y." But the X is pretty vague, you don't share any code, you don't share -- Stack Overflow calls it MCVE, or something like that... Minimal complete -- I don't remember what it's called for. But it's just like, the simplest way you can reproduce this problem. That would be great.

So what I would wanna do... If you have some bug, I would want to see "Oh yeah--" If it's in code and it has a particular setup... If it's not trivially reproducible, if I can't just take this code and copy and paste it, and run Mocha and make it happen. If there is more to it than that -- so maybe you have an integration with some sort of other project or framework... And I think this goes not just for Mocha, but lots of open source projects. So if you're using project X, with Babel, or something - you need to give us a repo, and that repo should have all of the stuff in it that you need to reproduce the problem. It should have a package.json, it should have Babel in the dependencies; I should type "npm install", I should run npm test, and "show me the problem."

Now, maybe \[unintelligible 00:34:29.07\] I wish there was an easier way to do this... And I'm sure there are even cloud services that you can just setup in this way. Maybe you don't even have to go and get a repo and publish it on GitHub and send me to it. Maybe you can just go to something like CodePen, or I don't know... Some site up there that allows you to do this sort of thing; you just throw that in the browser, I can go and take a look, I can reproduce it. That would be awesome. That's what I'd like to see.

Furthermore, I might not have the time - or maybe it's like an edge case or something, and it's like "Okay, yeah, that's a problem. I agree. It should be fixed. I don't really have time to do it. Can you fix it, please?" And I love it when somebody says "Okay, yeah. I'll send a pull request." And they send a pull request, and they fix it. And the pull request -- they read the contributing guidelines, and it says you must add a test if you add any code, or change any code; it'd better have a test. And if they do all that stuff, I love it. It's just like "Follow the rules. Help out." It's your project, too.

So you've found a bug, you're telling me about the bug... I want you to fix it, I want you to get involved. I'm not gonna be able to do it. You're not paying me for support, right? I love it when people help out like that, and they help me say "Yes, that is a problem. And yes, I would accept a pull request to fix it." That's awesome.

\[36:02\] So that's one way you can help. Issue tracker, and you are very vague, or I can't just glance at the thing and... Think about a rubber duck. The rubber duck is reading your bug report. Is that rubber duck gonna be able to reproduce your bug? If you can't reach in there only using the information in there and reproduce the issue, it's not very helpful to the maintainer. So with issues like that, they'll just sit there. I'll say "I don't know. I need more information", and then I don't get any more information. Then there's a bot that comes along and says "This is issue is stale" and it closes the issue eventually. And we have to use bots like that; it helps keep us sane. There's some people that don't; some people are happy with a repo with 5,000 GitHub issues in it. There's some people who hate the things that automatically close issues... Well, the issue doesn't get deleted; it's still there. If it's still a problem, then somebody come along and fix it, or comment, or send a pull request, or something. Just because the issue is closed doesn't mean it's fixed, right?

So I don't know... There's a lot of things you can do. I think a lot of them, unfortunately, are unwritten. Certainly, each project has its own rules, or own contributing guidelines, but people don't read these, most of the time. I guess I wish there was just better education around general etiquette, general "how to be a good open source participant." I would be happy with even requiring people take some sort of class or something before they can start bothering people on GitHub. I don't know; that's just something I just thought of. But if you can go and you can get some education and understand "Well, this is how maintainers expect you to behave, and this is how you can be helpful, I would love to see something like that, and make sure that there's a baseline that people participating on GitHub can understand. I don't think that's ever gonna happen, but it sure would be nice.

**Amal Hussein:** It's really funny you say that, because I was having this conversation, ironically, with Jordan Harband, as well as Maggie Pint, a few months ago... It's a project I don't have time for, but I would love to work on this one day. Essentially, I really think there should be a badging program, where people get a community badge for not being a douche bag, and it's like a COC-wide thing. It's like an unofficial COC, essentially, but using GitHub org for it... And having folks be able to read the manifesto, or guidelines of how to be a good contributor and user of a project, and then they get a badge, they get added to an org, and then maybe people with a badge get prioritized by maintainers, because they know "This is somebody who signed a code of conduct, and they're being a nice person."

In the event that someone is a problematic person, they would get their badge revoked, or whatever. There's incentives for people not to be a\*holes, basically. It would be nice to have something like that. But I totally agree... The entitlement that I see with people is just out of this world. People just feel so, so entitled... Like "Oh, this is a bug. Fix this. This is my problem, I need you to drop everything and do it now." And then there's also a lot of miseducation around what is GitHub even... People see issues, and then they think all of them are like "Here's like 5,000 things that are wrong with this project." I've seen that before. It's like, "No, no, no. That's just the backlog." Lots of issues is a good thing... Kind of. \[laughs\]

**Divya:** \[40:15\] To the previous point, around how to write good issues - that's been a perpetual problem where oftentimes someone is like "It doesn't work in this particular thing", and then you're like "Can you give me more examples? What machine are you on? What system are you running?" People don't automatically give you that information, so the issue templates are really useful, and I know lots of projects use it as a way of when you open a new issue, it sometimes gives you a prompt, whether it's a feature request, or a bug report, and then it gives you sort of a markdown template of how to write things... But I often find that that can also be a hurdle, because often when people see a template, they're like "Ugh... I have to write this in markdown, and that's really annoying."

I talk about Vue a lot, but I've found that Vue's issue template is actually really neat, because when you open a new issue, you're taken to a page that's not on GitHub. It's sort of a webpage that has a form, so it looks a little clearer as to what you're filling in... Because when you fill in markdown, usually you're just typing in straight the details, and you sort of have to parse it yourself. At least in the GitHub view.

So this kind of pulls you into a different form. So you see all the forms you need to fill, and you're a bit more intentional. And I think the part I like the most about this specific one is that at the top it tells you "Hey, did you read the docs? Did you watch tutorials? Did you ask this question on the forums? Did you do all these things?" And if your question was not answered, or if you believe it has to do with an implementation detail, then open the issue. Sure, people still can open the issue regardless, but I like that callout.

For example, that happens a lot in open source projects where someone will say "Oh, there's an issue with your API", but they had a typo, or they didn't use it in a proper way... And it's really frustrating for a maintainer to go in and then realize that... Because you're like "I could have been doing this other thing." But it's like a different kind of work. So it's shifting the onus back on the user.

Amal mentioned this a little as well, the fact that people who use open source projects often assume that the work is free... Because it's free, so I can expect a lot from the person who's building it. But I think people always forget there's no such thing as a free lunch, so someone's gonna do the work, and someone has to bear the brunt, and it's really frustrating.

I'm actually curious, GitHub Sponsors - has the introduction of that had any effect on Mocha development and how exactly you plan funding, and splitting up responsibilities, and so on?

**Christopher Hiller:** Are we using GitHub Sponsors? I think we have a button there...

**Divya:** Yeah, I think you have a button... But I don't know if you're using it.

**Christopher Hiller:** Yeah, I don't think we're actually using GitHub Sponsors. I think it just goes to our Open Collective page. Mocha was one of the first collectives on Open Collective, so we get donations through that platform. Right now we are in the process of finding a UX/UI designer-type person to work on our website and help us with our documentation, and organization thereof, and all sorts of cool stuff... So we're gonna use some of the donations to fund that work. It's work that nobody's gonna come along and just do for us.

\[44:01\] So GitHub Sponsors - no, we haven't really used it. I think we added the link to Open Collective there. But yeah, donations are cool, and they help us do stuff like that. None of us are trying to make a living off of -- not like Evan You. We're not trying to live off of the work we do on this project.

**Amal Hussein:** Evan You is like the most baller person I know of... I don't know him personally. Quite literally, super-baller. He's just like "Yup, I'm gonna make a developer salary, and it's gonna be doing what I love, on my terms... Thank you very much. Sign here, please."

**Divya:** That's not a common scenario. It's so hard to have a steady income through open source. I actually don't think that there are many people out there who are able to have that. It's very rare.

**Christopher Hiller:** Yeah. It is kind of like the Holy Grail.

**Divya:** Yes. Yeah.

**Christopher Hiller:** It's what we wanted for years, to get enough funding that I could go and quit and just do this, and essentially be my own boss. But things don't really work out that way most of the time.

**Divya:** The closest is just if you work at a company and you're paid to do open source work... And that's kind of not -- I mean, I don't consider it the same thing, because you're not managing the finances in that case; the company is. But I think that's been the closest, most accessible to people, to work at a company that works on an open source project, so you can be paid to work on open source.

**Christopher Hiller:** Yeah. I think it's the most realistic...

**Divya:** Yes, definitely.

**Christopher Hiller:** Whether or not we should settle for that is another question.

**Divya:** That's a good point, yeah.

**Amal Hussein:** Yeah, that's a very good point. We've talked about what's helpful, especially when reporting issues, and we've talked about what not to do a little bit... How about if folks are interested in becoming a maintainer, or helping out occasionally, like a side-gig maintainer... Like, hey, I'm not full-time on this project, but sometimes I respond to issues that are duplicate -- you know how folks, a lot of newbies especially, they don't check the issues; they don't check to see if there's a pre-existing condition, if there's a pre-existing issue; they file a new one, so maintainers have to often close, and dupe, and link...

So if I wanted just to be helpful and answer a bunch of open questions - like, is there a path for me, or is that annoying, or is that helpful? I'm just curious, how much help is welcome, and at what point is it just annoying and obnoxious? Because it is time to onboard people; the unfortunate downside, but...

**Christopher Hiller:** Yeah... I mean, I can speak to how I see that. It's not gonna be the same for other projects. But first, "Thank you for wanting to help; you're probably not gonna enjoy this..." Triaging issues is not that much fun, especially if you'd rather be coding... So yeah, there's that.

I've had some people who've come along and said they're interested in it, but it never really sticks. I think in order for that to happen -- like, it's really hard to triage the issues, unless you have a deep understanding of the codebase, unfortunately. We have ways to automatically label issues, and some of that is the issue templates. But you need to understand the project to understand really how serious something is. So that's kind of our hurdle... And you have to get there first, and then you can look at the issues.

\[48:04\] So there's a handful of maintainers of Mocha, and we all look at the issues, but nobody's just sitting there all day, looking at the issues. I don't think people just wanna do that. I don't think that's fun for a lot of people. Maybe for some people, but a lot of people who would rather be coding - it's just not so much fun.

So to get that level of knowledge where you can become a maintainer, you really just need to look at the issues, find some open bugs, and fix those bugs. Because if you are working on triaging stuff, you're gonna have so many questions for the other maintainers if you don't understand the project. So that doesn't really help that much. Because the time we would have spent triaging the issues ourselves is now spent helping you triage the issues. So you really need to be able to be self-directed and have this level of knowledge. So you've gotta get in, you've gotta send pull requests, you've gotta fix stuff... You know, if I see somebody that sent and had merged several pull requests, maybe even just one or two really significant ones, I will go and ask them, because they've demonstrated that they can navigate the codebase and they can be helpful... And that's all we really need.

I wouldn't say it's a really high bar, but it's just one that people aren't -- they don't really have that time for. It's very rare that I'll get multiple pull requests from a single person. Nadia has a book, what is it called?

**Amal Hussein:** Nadia Eghbal, Working in Public.

**Christopher Hiller:** Yeah, Working in Public. I read that recently. It goes over some of these ideas about casual contributors, and how in certain types of projects - she calls them stadium projects, where it's very few maintainers, and many, many users. Mocha is one of these; these sorts of very casual pull requests people that come along once and send a pull request don't end up really contributing much, and can in fact be problematic, because it's just like more work.

Mocha right now - it has 50 open pull requests, and some of them are very old, because we haven't really had time to look at it; they're either trivial, they're maybe not well-written, maybe they're missing tests... People send pull requests and you never hear from them again... So it's a heck of a situation that we have ourselves in on GitHub, I think. A lot of projects have issues like this.

**Amal Hussein:** Wow, I never thought that pull request and run was a concept. It's a bit of \[unintelligible 00:51:05.07\] never come back... \[laughs\]

**Christopher Hiller:** Oh, yeah.

**Amal Hussein:** I thought people would wanna be eager, and would wanna get that merge in. Gotta get those points, right? Gotta get those green marks.

**Divya:** I think it sometimes depends... I've not done this exact thing before... I've done a pull request, because I was using a library - I forget what it was; I think it was called \[unintelligible 00:51:30.03\] I forget what it does... But I remember putting in a pull request and being excited about it, because I was like "Oh, you should support this particular currency", or whatever... And the maintainer did not reply for a long time... To the point where I just stopped caring.

I switched jobs, I was no longer working on the thing, I couldn't be bothered about the thing anymore... And I think months down the road the maintainer was like "Oh, can you update this?" and I was like "It's been months. I don't really wanna go back and remember what I did, and have to --" It's a lot of cognitive load.

\[52:07\] I think there's a back and forth process here, for sure... Meaning that sometimes maintainers can't get to certain things, but sometimes I prefer having a bot tell me that; so if there's a bot that's like "Hey, thanks for your PR. Someone will be in touch with you. It'll take a while, just hang in there." It's better than not hearing anything... Because I think when you don't hear anything, it's very discouraging... Because now I'm just like "I don't really wanna submit a PR ever again to this project, or engage in any way..."

I think as much as I like to think there's an idealism of doing things because you want to, or because it's for the overall community good, I think there's a sense of "I'm doing this because it will help me, and my thing..." which comes into open source often. A lot of contributors to libraries are like "I'm working on a thing for work, or for myself, and doing this thing will help my use case." So there's some selfishness associated... And also, sometimes the selfishness has to do with "I want to have my name on the list of contributors on GitHub." Like in the stats.

So I think it's fair to acknowledge that sometimes, and take that into account, especially when we're looking at contributions, whether that be merging them in, asking people to update them, or following up overall... I feel like I said a lot in there, but... Yeah.

**Christopher Hiller:** You know, you'd send a pull request, and it sits for six months or a year or longer, and then somebody comes along and says "Hey, can you update this?" and you're like "You don't even bother responding", right? So yeah, a) that's what happens, but b) that's fine. Because you don't care anymore, and they didn't really have the time to look at it. So it's fine, and that's just how it is. It's like, whatever.

If we have these old pull requests, maybe I'm still interested in it, and I'll ask and say "Hey, do you have time to look at this? If not, just don't reply, and then we'll do whatever with it."

**Divya:** yeah.

**Christopher Hiller:** In her book, she said something like she did analysis, and they found 90% of contributors across all of GitHub were one-time contributors, or something like that. So that is a challenge... Maintainers are hard to come by. People who are dedicated to the project and just set a -- I mean, I think a big time is just setting that time aside for it, and wanting to do so... Because there've been periods where I have not wanted to touch Mocha, and I didn't. There was nobody breathing down my -- I mean, certainly people are in the issue tracker like "What's going on?", but nobody else was telling me I had to go do it. It's hard to find that... But I think it's also hard to find somebody who's willing to stick it out.

If I wanna give myself any credit, I've stuck with the project for five years... So that's cool, and not everybody will do that. Many have come and gone.

**Divya:** Yeah. From a user standpoint who's contributed PRs before, I'm one of those people who've contributed once or twice, and that's my main thing... And a lot of it has to do with what was the reception like when I did contribute the PR, and the back-and-forth process of the review, and liaising with the team as to how to merge that thing in...

\[56:02\] And there's oftentimes where it's this strange relationship that you have with -- when you work on a project, sometimes it's one person, in which case the relationship is fairly straightforward, but oftentimes there's a team of people, and then there's you... So the team will have to review it, and the team will also be like "How does that fit in with what we're working on?" And then it's sort of like -- you're like an outlier person, who contributes to the thing... And there've been times when I feel when I feel awkward about that.

I think this was specifically -- I contributed to DuckDuckGo back when their... I actually don't know if they changed it, but this was like 3-4 years ago, a while back, when their repo was public, and they were accepting submissions... And there was a really awkward process, because I made a change, and then there was some discussion, but I wasn't part of that discussion, because I wasn't on the core team, so I wouldn't know what was happening, because they were like "We talked about it separately, and we decided to go down this route." And I was like "Do you want me to do that work, or are you gonna do that? I don't understand, because I'm not there."

So there are times when as a user, you feel this sense of like where do you stand with regards to the project... And also, to be honest, this sense like "I don't think anyone cares if I wrote this or not. I would write it, and then no one would care. They would forget who I am." Which kind of sucks from a user standpoint, because you don't feel as invested thereby.

**Christopher Hiller:** It's true. And I think that some of it is even reputation. If you have made yourself known somewhere else, maybe people recognize your username and they'll give you more attention. I've definitely had that happen, where I sent PRs and people will actually respond pretty quickly. And I was like, "Oh, cool." And I send plenty of drive-by PRs, because this is something I want fixed... It's a bug, and so I'm trying to fix a bug. Sure.

But I think trying to build -- if you are a library author, trying to build relationships with the people who maintain the libraries you depend on is cool. And the other way as well. Mocha doesn't use TypeScript, but TypeScript uses Mocha. So all of TypeScript's huge test suite - those are Mocha tests. So I know that they're a big user of it, so trying to cultivate a back-and-forth with the TypeScript team has been very beneficial for both of us.

Recently, I knew there was a Mocha issue in the TypeScript repo, and so I went and I sent a pull request to fix it, and of course, it got attention right away, and it got merged quickly. That's probably not most people's experience sending a pull request to TypeScript.

**Amal Hussein:** Yeah... Look at you, Chris... You're in the HOV lane on GitHub. I love it.

**Christopher Hiller:** It is. I mean, it's social media; that's reputation.

**Amal Hussein:** \[59:27\] Right, right. Well, you know what - it's been such a pleasure to talk with you about all this, and it's been super-fun... I'm so happy that such an important project has such (I would say) forward-thinking leaders and leadership. Like Divya said earlier, it comes down to forward-thinking and avoiding fads, and really being in it for the long haul for these projects to have the level of adoption that they... And it's been really great to learn about that.

I think one corny joke that I've been holding back on for the past ten minutes... Can I do it?

**Christopher Hiller:** Am I gonna hate it?

**Amal Hussein:** No, no, it's not that one.

**Christopher Hiller:** Okay... We'll put a secret link into the show notes for what the other one is about. I won't say it, I promised Chris; I already used up my token for the day, essentially... But anyways. \[laughs\] So the joke is "Once... Twice... Three times a PR!" \[laughs\] You guys know that song...

\[song excerpt 01:00:40.19\]

**Divya:** I have no idea what the song is... \[laughs\]

**Amal Hussein:** Oh, my God. Alright, then... You know what --

**Christopher Hiller:** Is that Neil Diamond, or something?

**Amal Hussein:** I think so. It's one of those classic singers... \[Lionel Richie\] But yeah, that should be your goal. If you're interested in actually contributing, it'd be nice to get over the hump and stick with that... But anyways, thank you so much for your time, Chris; it's been amazing. Where can people find you on the interwebs?

**Christopher Hiller:** Well, @b0neskull, and I'm on GitHub. I also have a website that I never post on, which is boneskull.com. Otherwise, I hang out in some Slacks... The OpenJS Foundation Slack is one, so you can go and sign up for that. Also, there's a Mocha Gitter chat room; that's our official chat room, so you can pop in there as well... And those are some good places to find me. And on Twitter, you can tweet at me, @b0neskull, with a 0 instead of an o, because somebody took it already... They signed up for Twitter once, and posted one tweet about eight years ago, and they won't give me the username. Anyway...

**Divya:** Aww...

**Christopher Hiller:** Anyway, so @b0neskull on Twitter.

**Amal Hussein:** I thought the zero was intentional, you know...

**Divya:** Yeah, me too.

**Amal Hussein:** I'm learning things today. I like the zero. It's pretty cool.

**Christopher Hiller:** It's pretty elite, I mean...

**Amal Hussein:** Yeah. \[laughs\] Alright, that's it, folks. We'll catch you next week. Thanks, everyone...!
