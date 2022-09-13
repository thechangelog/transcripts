**Amal Hussein:** Hello, JS Party listeners. We have a very special guest in the house today. I think we might be calling this episode "The doctor's in again." So doctor... Doctor -- I feel the need to have an accent. Dr. Gleb Bahmutov, welcome. \[laughs\]

**Gleb Bahmutov:** Thank you, Amal. Good to be here. Hey, everyone.

**Amal Hussein:** Do you like my Russian doctor accent?

**Gleb Bahmutov:** It's almost next to Doctor Zhivago, the same kind of...

**Amal Hussein:** \[laughs\] Yeah. This is why drugs are bad, kids... Anyways, I just wanted to also welcome my lovely co-panelist, Divya. Welcome!

**Divya:** Hey! It's good to be here.

**Amal Hussein:** I missed being on the show with you. It's been a hot minute, girl... I've seen her, we got to hang out in California. Same thing with Gleb. Gleb was at my house this past fall... He's overdue for another visit... But Chris is the only person here who I haven't actually got to see in person, so... Chris, welcome.

**Christopher Hiller:** Hi!

**Amal Hussein:** \[laughs\]

**Christopher Hiller:** Yeah, actually I did see you in-person before I knew you at - I believe it was like the Node...

**Amal Hussein:** Oh, in Vancouver?

**Christopher Hiller:** In Berlin...

**Amal Hussein:** Oh, in Berlin. JSConf EU. Oh my God, that was such a crazy --

**Christopher Hiller:** No, it was Vancouver, yeah.

**Amal Hussein:** Okay. I did go to Berlin too, so if you were there, we might have seen each other in a crowd... Stared at each other from across the room, Careless Whisper starts playing... No, just kidding. Just kidding. Happily married, both happily married people... Anyways. \[laughs\] Chris is like "What's going on...?"

**Christopher Hiller:** Sorry, I'm so slow, I didn't even catch that.

**Amal Hussein:** That's okay. Don't even worry. Again, don't do drugs... Don't do drugs.

**Christopher Hiller:** You have drugs?

**Amal Hussein:** No comment...

**Divya:** Are you on anything?

**Amal Hussein:** No comment. No, I'm just joking. Listen, I'm just a stressed-out 30-year-old.

**Divya:** It's a judgment-free zone here. I mean, at least here...

**Amal Hussein:** I'm just trying to get through this podcast, y'all, okay? Don't get me distracted. So Gleb. Welcome, Gleb. We're so excited to have you. So we're gonna be talking to Gleb about a few things today. Gleb is kind of like this super-prolific person in the community. He's like an educator, he teaches, he contributes to a ton of open source projects... He really helps lead the way. He's kind of created a couple of niche expertise areas for himself. I think he's a subject matter expert (SME) on testing, all things testing, but I also think he's a pretty good SME when it comes to a lot of different Node libraries and utilities. You've created a bunch of stuff that I've used at companies... It's such a treat to go through my package.json sometimes and just look at all the authors, and I'm like "Oh, I know you, I know you, I know you..."

**Gleb Bahmutov:** That's true.

**Amal Hussein:** I'm like, "Thank you, friends!" No, but you're really kind of this really incredible person in our community, who has been such an expert for so long. Also, you've really been so generous with your time and knowledge. All of your slides, everything is available on your website, you have an awesome blog that's been going for years... I refer to your old blog posts and I send them to more junior engineers that I know, where I'm like "Here, this is a great place to learn about this concept, or that concept..."

\[00:06:19.02\] One thing that came up recently was negative testing. I used one of your blog posts about negative tests, negative assertions... So you're awesome; I love you, Gleb. You're also a good friend of mine; just on a personal level, lots of love from me... But in your own words, can you tell us a little bit about yourself? Oh, of course, and then Cypress, right? One of the lead maintainers and contributors to Cypress. You're not doing that full-time anymore, but you're gonna tell us a little bit about yourself now, so... The floor is yours, Gleb.

**Gleb Bahmutov:** Thank you, Amal. It's good to be here, and you are way too kind to me.

**Amal Hussein:** It's true.

**Gleb Bahmutov:** You know who's a Superman? Superman. Not me. I don't want the job. Honestly, everything that I have achieved - the blog, open source - is because I was just looking around and I was like "No one has this utility. I should write it for myself." And all we do right now is putting it out there, so we don't have to pay for hosting, we don't have to care about private repos, and subscribe to a continuous integration service, private source control... Because we have tools like GitHub, and JavaScript, and the Npm ecosystem. And I used to be working on C++ projects, where you have five libraries that you use, and if you wanna add a sixth one - well, guess what? The first two now don't compile, or don't link properly. Or if you upgrade a version - well, you're probably out of luck, because this version is incompatible.

So as soon as I moved to Node and I started working with JavaScript, I was like "This is so good. I can just grab something off the shelf, use it, and add something else, and they still work. And then add ten more dependencies and they'll still work." And people complain about JavaScript and how fast it's evolving, and it's like "Well, you might as well try other language environments, and then you'll complain when nothing is getting done..." Like, there are no changes. There's a change every couple of years, but there's no user-driven systems, tooling, all the jazz that we love, honestly.

So that's all I've been doing, and I've been doing it for a while - just open-sourcing my work, reusing it at my dayjob, and kind of supporting users that use it for their dayjobs. That's it.

And I will add one more thing - I'm not generous with my time, honestly. I'm not. And I'll tell you how to not be generous. So let's say I have a repo, and you're using it, and you have a question. Now, you'll find my email and you email me directly. And I get these emails every day. "Oh, I'm using this. I have a question... How do you do this?" I will actually reply with a blurb of text that I have, a template in my inbox that says "Sorry, I cannot answer private support questions. It doesn't scale, because ten other users will have the same question. Open a repo issue, ask it in a public Discord/whatever channel, and I'll answer there." And I probably know the answer already. I'll just find it and send a link. But you need to do it publicly. So then, ten other users will find it, will benefit...

I cannot be generous with my private time. It just doesn't work. So the system is to do everything in public. And a lot of people now swear by it. They do work in public, where even with your dayjob you do something, or you prep it, you're trying to kind of \[unintelligible 00:09:47.25\] the field... You do it in public, and then you do your dayjob in private. And I'm really amazed by people that do that, because it's so -- I wanna say beneficial with your time; you get so many benefits from this... I wanna be like that, right?

**Amal Hussein:** Yeah.

**Gleb Bahmutov:** Stingy with your private, generous with your public work.

**Amal Hussein:** \[00:10:09.20\] Yeah. That's a really cool paradigm, for sure, and I think it requires a certain amount of vulnerability as well, which is hugely important... But yeah, so I think the goal today is there's so much to unpack with you... I wanna hear about your back-story, I wanna hear about your story with Cypress... Especially now, kind of being in a position where you can look back. I wanna hear about you and I, and how we have a story together about Cypress, which is kind of actually key, which is why I feel like I'm like maybe a secret hero of the internet, because I helped make this connection or something, and we improved our testing infrastructure as a result... Anyways, it's fine. I'm trying to take too much credit. But I also wanna get into Cypress.

So we'll be getting into kind of a lot here in our three segments, so let's maybe start with some of the Gleb questions. So can you tell us about how you got involved with Cypress? Because I think a lot of you were pretty prolific before Cypress, but I think being a part of Cypress and then also being part of scaling it and open-sourcing it - I feel like you kind of rode a different level of hockey stick fame in the open source community... So tell us a little bit about that.

**Gleb Bahmutov:** I'll preface it with a thing... I did not write Cypress, right? Cypress was a child of Brian Mann, who is still leading Cypress, the company, who's absolutely hardcore developer, genius with respect to testing tools, knows everything in and out... I just came to Cypress very early. And I came there because I used Cypress for a year while it was still private beta. I had a need for it because we needed to test a web application back at some startup where I worked... And we looked around, and we used all sorts of tools, like PhantomJS, Karma... You name it. And nothing was reliable.

**Amal Hussein:** The dark, old days... Oh, don't remind me.

**Gleb Bahmutov:** The tools kind of had a tough time with modern web applications, where you click a button and then the application would load data, and then show the data. And you always had to like "Oh, wait five seconds, the data will be there." The dynamic applications presented problems for tooling that kind of operated outside of the browser, like Selenium WebDriver. It just sends commands to the browser, like "Find a button." Then sends the command "Click on a button." In between, the application can completely re-render the button, maybe disable it while it's fetching new data... So by the time the click arrives - boom, you're out of luck, and it's hard to understand why it has failed.

So Cypress operates in a browser, which presents its own technical challenges, but I think they're smaller than trying to operate with machine from outside.

So I got onto private beta access, tried it for a while, and just loved it. We started using it, I started promoting it... It's a good topic for a conference talk, because everyone hates testing, and everyone's like "Oh wait, you're gonna do a demo that shows how to solve it in a nice way? Yeah, yeah, definitely come in." And I did meta presentations, we've done with Amal a workshop in Boston, unit testing and end-to-end testing...

So a year later, Cypress the company raised some money, invited me... You know, it's always a gamble to join a company working on dev tooling, because it's not a field where people throw money at you. It was still before Vercel, Gatsby days.

**Amal Hussein:** Yeah, it was definitely in the era before all these dev tools started to get VC money. It's interesting to see, as soon as companies start to realize how expensive it is to staff and maintain and retain engineers, all of a sudden dev productivity is really important to businesses... Which is great; it's a win/win for us. But it's so funny that it's taken them this long to catch up.

**Gleb Bahmutov:** Testing always has the smallest budget, right? If you think about the marketing department versus testing, the marketing department is huge. The testing department is small. And I always joke about this, because the marketing department sells you dreams, and the testing department crashes them, like internally; it just kills them.

\[00:14:08.24\] So when people realize how much money they waste by a bug, affecting the production, affecting their reputation... All of a sudden, they're like "Wait, we have to invest in better tooling. We have to invest in training." It becomes a very logical decision. It's no longer like "Move fast and break things." It's more like "What are the best tools that you can use so that you move fast while not breaking things in obvious ways?"

**Amal Hussein:** Right.

**Gleb Bahmutov:** And then, immediately we had to figure out how to survive, and we decided to open-source Cypress itself, because no one would write tests using a tool that can just disappear, right? The startup fails, and the tool is gone, and then all your tests are gone. Poof. Or the startup decides to charge you ten time more money for the license, and you're like "Why?"

So we open-sourced Cypress, we figured out we're gonna make money off additional services, like recording the test artifacts, like videos, screenshots, test results. Maybe running tests in parallel. That was my first big project at Cypress, making parallelization happen.

And so Cypress is doing that. We're doing it pretty well, I wanna say... Obviously, I don't know the numbers for the last year; I left Cypress. But they seem to be doing very well. I joined a much larger corporation now, and I'm using Cypress from the other side. I used to work on Cypress itself, on the dashboard integrations; now I'm the head of automation department, we write hundreds of tasks, we maintain them, and I see Cypress and the dashboard as a user 100%. So I'm very happy with Cypress, I'm very happy with my automation team...

And now we can talk about everyone's career, because I know everyone who's listening is probably thinking "Okay, it's all good... How do we find a better job? How can open source help my career?" Should we talk about this, Amal?

**Amal Hussein:** We can definitely talk about this, but I also wanna make sure we talk about the open-sourcing journey for the project... Because you did open-source it, and that was, I think, a huge... It was kind of a monumental thing for the project, because by open-sourcing it, all of a sudden it wasn't this private tool that some random startup was saying like "Trust us!" It was like, "Okay, here, take the core. You have the core, it's open source. Here's a bunch of other services that you can buy if you wanna support this company, if you wanna have a better integration suite." But I thought that was really, really cool.

**Gleb Bahmutov:** A huge part was is Brian Mann just convincing the company. Once you raise some money, you are no longer owning the thing. No matter what people say. Investors will own a huge chunk, and will actually determine where it's going, honestly. You cannot just say "Oh, we're gonna open-source the thing." Right?

**Amal Hussein:** Oh, I know. It's run by the board.

**Gleb Bahmutov:** It's run by the board, and... You know, Brian convinced people that open-sourcing is a great decision, because otherwise there's this risk and nobody is gonna use you as a tool. From a technical perspective, open-sourcing means a bunch of things. Everything from making sure that whatever you open source only has all the licenses squared up. You're not using third-party dependencies with private licenses... Everything -- you have to have a licensing contribution agreement for everyone who contributes. You have to clean up the repo and make sure that anyone who wants to submit a pull request can actually do that.

To me, open-sourcing is almost like -- you know, imagine you have a car, and you wanna bring it to a car show, and you wanna pop the hood so that other people can look into it, right? Well, you probably need to make sure that under the hood things are in order, and look good, and you can be proud of it.

**Amal Hussein:** Yeah, that makes sense.

**Gleb Bahmutov:** So we've done, for a couple of months -- just cleaning up things, organizing them, putting them all in one place, so it's not like ten different repos...

**Amal Hussein:** \[00:18:05.04\] Okay. I have a burning question for you on open source, and then I wanna hear from Divya and Chris, because I've been super-chatty \[unintelligible 00:18:09.02\] here... But I always wondered, when you open-source a repo, what do you do with your Git tree? Specifically, if you're removing stuff when you're cleaning it up to be open source, the ref log is gonna not be your friend here, because people could in theory go back. So what do you do? Do you start a new Git tree? If so, what about all that fidelity that you are losing? So I'm just curious...

**Christopher Hiller:** So what I've seen happen is people just zap it. Maybe if they need that, the old info, they keep it in the archive somewhere... It would be interesting to know what Cypress did there, because I have no idea. I could imagine I would be the kind of person who'd wanna go and massage the history and spend a week just fixing up change sets, and reordering things like a crazy person... Which is a thing I like to do.

**Amal Hussein:** Oh my God, that's like signing up for the worst kind of pain... I mean, I love my ref log, but I do not like being in there.

**Christopher Hiller:** I do a lot of whacky stuff with my Git history...

**Amal Hussein:** We should do a show on it.

**Christopher Hiller:** Yeah... But what did Cypress do there?

**Gleb Bahmutov:** I believe they kept the whole history of the main repo.

**Amal Hussein:** Whow... Okay...

**Gleb Bahmutov:** And I'm trying to kind of check that really quickly... I do believe you can see all the way to the first--

**Amal Hussein:** Initial commit.

**Gleb Bahmutov:** Initial commit.

**Amal Hussein:** Dang.

**Gleb Bahmutov:** I know, I know. You can find it. And the first commit was something funny... I've done it before, I swear. It was something like -- Brian, like "Okay, first commit is gonna be great..." Kind of like starting with a testing tool.

**Amal Hussein:** And it was like several different languages, right? It was like CoffeeScript, \[unintelligible 00:19:59.20\] ThisScript, ThatScript, NancyScript... Like, all the scripts. How many languages was in the --

**Gleb Bahmutov:** \[00:20:07.05\] It was just CoffeeScript, because it started, let's say, probably like seven years ago, when ES6 was not a thing, and the only language you could use with modules and sane semantics was CoffeeScript. And I have to say, CoffeeScript was my bridge, because I used to be a C++, then C\# developer, and I could never program in JavaScript. To me it was like a bowl of spaghetti code all the time. And then I discovered CoffeeScript and it made sense. And when I saw Cypress, I was like "Oh, it's written in CoffeeScript." I was like, "Gotcha!"

And not only the tool was written itself in CoffeeScript, you could write the tests -- you can probably still write it (I don't know) in CoffeeScript. Like, your spec files could be CoffeeScript. And it's like super-clean syntax... It actually looks very nice.

So CoffeeScript was the way to go, and slowly moved to ES6, and then to TypeScript. So now I believe the tool is pretty much all TypeScript. I don't know how you feel about TypeScript, but... It's there.

**Amal Hussein:** I've come around to it...

**Divya:** Same. Me too. I think the best way to see it is not comparing it to JavaScript. Just seeing it as a completely different language.

**Amal Hussein:** Agreed!

**Gleb Bahmutov:** All I wanna say is ts-ignore is my favorite comment. I'm not gonna fight you, I'm just "@ts-ignore next line", whatever... \[laughter\]

**Amal Hussein:** Do you have a hotkey in your keyboard and just go \[unintelligible 00:21:22.18\] "Just shut up, TypeScript compiler! Take that!" That's the thing... I'm very angry at that TSC. I'm just angry at it a lot, and I always just timebox myself. So I'm a fan of pragmatic TypeScript, which is definitely a philosophy... We'll put a link in the show notes to a blog post from Mark Erikson on this which I love.

So pragmatic TypeScript is basically just timebox yourself on TypeScript... And know that you are trying to make a completely dynamic language static, and sometimes the two things -- they just don't happen, okay? It doesn't. And sometimes you spend way too much time making complex generics when you just need to just do an ignore or an any. And a key example of that is expressive things like Lodash; trying to type that - it's like, forget about it, you know?

**Gleb Bahmutov:** Yeah.

**Amal Hussein:** So I think we wanted to get into one more thing before we break, which is how open source is good for your career. That's something you wanted to discuss.

**Gleb Bahmutov:** Yeah. I want to discuss it, and I want to rant about conferences these days, but...

**Amal Hussein:** We can do that.

**Gleb Bahmutov:** Okay. So if you start open-sourcing things, then first of all, you have a record of your work that anyone can look up. So next time you get to a company and you go to interview at a company, you can point and say "Okay, this is what I read and write. We can discuss that. This is why I've done it." But it's no longer "Oh, I've done this thing, but I cannot show anything, because it was private to my company." So now, all of a sudden, discussions are concrete. And they can pretty much replace the whiteboard coding interviews, because - like, why? Why would you -- like, I would never give someone a whiteboard coding interview right now \[unintelligible 00:23:01.28\] "Here's my open source project. This is what I contributed, this is my commit, and we can discuss it." It makes a lot more sense.

So this is the great part - it removes this whole problem with interviewing, this whole nervousness, this whole on-the-spot thing. Okay. So that's great. But another thing that will super-charge you after a couple of years probably if you keep it up, is that you're gonna be invited to join the companies just based on your open source work. People will email you a LinkedIn, or whatever... Just talk to you and say "Hey, why don't you come on board? You know this tool, you've done this awesome job right here... Why don't you join us?" It's this huge change. And you just have to keep it up with the open source work. Will it happen on the clock? Probably not. But it probably will happen.

But there is another, I would say complementary work to just programming. Programming is great. Coding is great. But you have to write. You have to write blog posts, you have to write presentations, you have to promote your work, you have to explain it. And you'll benefit yourself from doing it, and other people will understand what you're doing. The number of people who are gonna look at your source code is probably single-digits; maybe someone reviews your pull request, maybe someone digs into how the library works... Very small. But if you write a blog post saying "This is how you do" (let's say, in my case) unit testing, or testing a Node program, or testing a CLI program, or testing a website." The number of people who will read it could be thousands.

**Break:** \[00:24:42.11\]

**Christopher Hiller:** So moving from open source careers and kind of back to this open-sourcing Cypress question... Cypress is - last time I checked - permissively licensed, and I was curious how Cypress arrived at that... Because a lot of companies in similar VC-funded situations will choose essentially anything but a permissive license, because they don't want some competitor to go and take the source code and run with it. So how did you get to -- I believe it's even MIT. How did you get to MIT, and how has that worked out?

**Gleb Bahmutov:** Yeah. Excellent question. So yes, Chris, Cypress the test runner itself is licensed under MIT license, just like all the plugins that Cypress does. All the integrations with particular tooling that it has. All the reporters, and CI integrations, and all that. It's all MIT-licensed. One reason is because I'm in Cambridge, Massachusetts, down the street from the MIT University. So that's obvious; that's one answer. No, but the serious thing --

**Amal Hussein:** \[laughs\] Oh, my God... Gleb, are gonna start a counter for your dad jokes? Listen, internet, and people who don't know Gleb very well... You don't understand how much of a dad joke pun master Gleb is. He could just whip them out like "Bang, bang, bang-bang-bang." So we're gonna have to start to count them... \[laughs\] Anyways, okay...

**Gleb Bahmutov:** The MIT University has nothing to do with it. Cypress as a company was founded in Atlanta, Georgia, right next to Georgia Tech University. So MIT would not play a role.

\[00:28:05.10\] But yes, for two reasons... One, it's the most permissive license where the companies that are gonna use it are not gonna be afraid of using it. They're not gonna say "Oh, can we use it just for our open source, or public website, or internal tooling?" No. So the wide adoption was the goal, and the MIT license allowed the widest adoption, we felt.

Another thing, speaking about competitors - Cypress the test runner is now used by Cypress the dashboard competitors. If you go to BrowserStack, you can run Cypress, and the results will be written on the dashboard. If you use AWS Amplify, you use the test runner, and they will show you results on their dashboard. \[unintelligible 00:28:47.17\] same thing.

And Cypress the company is okay with competitors just like showing the results of the test runs, and kind of competing. The goal was to get as many developers as possible using the tool.

**Amal Hussein:** That's smart.

**Gleb Bahmutov:** So even if some developers are gonna look at results in other dashboards, it's fine. And it also is very difficult stopping people from just using any kind of Mocha-compatible reporters in general. So Cypress is built on top of Mocha, so all the reporters are working, so if you wanna generate \[unintelligible 00:29:25.19\] and just show it on your CI, fine. So it's not even the commercial competitors; you're competing against people just hosting their own report results. So the wide adoption is better.

**Amal Hussein:** Gleb, you just said Chris' trigger word, Mocha.

**Gleb Bahmutov:** I know, I know...

**Amal Hussein:** Chris, what's it like being in a Starbucks? \[laughs\] Like, "I'll have a Mocha Frappuccin--" Okay, fine, no. So yeah, Chris, for those of you who may not be familiar, is one of the lead and core contributors of Mocha, the world-famous, backbone, highly-used, never-thanked-enough test runner, that's Node-first, and is awesome, and has been around for ever, and is battle-tested, and has a really simple, easy API that's open and extensible. I'll stop the advertising now. But that's what Mocha is.

**Christopher Hiller:** I haven't worked on it for a year...

**Amal Hussein:** You haven't? Okay, fine. This is news to me, Chris... But you did. You did for a very long time.

**Christopher Hiller:** But I did, for like a good five years.

**Amal Hussein:** Yeah. That's a really cool answer, and very strategic of Cypress.

**Christopher Hiller:** Yeah, thank you.

**Gleb Bahmutov:** By the way, can I add just my personal opinion about Mocha, Cypress, AVA testing tools, Playwright, Selenium - you name it? So imagine all the people writing web applications - they all need to test. The number of people actually testing their website/web application completely is very small. The majority of people test maybe some part, it's too hard, they give up, they probably stick to just unit tests...

So I myself envision this giant pie; and only a thin slice of the pie is eaten by the end-to-end test tools. So if Cypress captures 10% of the pie - perfect. I'm happy. If Playwright captures 20% of the pie - no big deal. There's plenty of pie to go around.

**Amal Hussein:** To go around. I would agree.

**Gleb Bahmutov:** Exactly. Use any tool that you like, just make sure your website is working so I can freakin' use it. That's it.

**Amal Hussein:** Yeah.

**Gleb Bahmutov:** It was wide adoption, and even if some market share of test runs results will be captured by a competitor to Cypress the company, that's fine. No big deal.

**Amal Hussein:** Right. And that's because Cypress - for those who might be wondering, Cypress is an open source project, the core is open source, there's lots of modules and plugins that are also open source, some maintained by Cypress, some maintained by the community... And the company itself makes its money off of its dashboard subscriptions. That's what we're talking about here. And basically, because they've open-sourced everything, it's also enabled other competitors like AWS Amplify, for one, for example, to show those results, right?

**Gleb Bahmutov:** \[00:32:08.15\] Exactly.

**Amal Hussein:** And to kind of compete with their dashboard product. But I think they've taken a really strategic bet around scale, and so I think that's really, really smart. And I think when developers are the ones who are advocating, you've done something right. And I think for me that was -- what I've found most interesting about Cypress was just it really solved a big need that we had in our community, and we had a lot of pain doing similar things... But then also just mass adoption, across the board. Startups, Fortune 500's, Fortune 50, Fortune 10 companies... I mean, it's kind of wild.

And I think for me what's really interesting about all this is I think it shifted the needle on where we are right now for -- like, our testing philosophy has shifted, I would say, from where we were five years ago, from where we were ten years ago. And I think for me Cypress has been a key part of that shift. And we have a lot of frontend engineers who listen to us, and I'm teaching this to my own engineers that I lead at work as well, that really, when people think about integration tests, for me, I think of that as like anything within your own repo boundaries. So if you have a frontend repo, or if you have a source directory with all your frontend code, everything in that is your boundary. Everything. So making sure all of that is harmoniously working together - that is an integration test. And a true end-to-end test is actually going outside the bounds of your repo, launching something for real, not mocking or \[unintelligible 00:33:35.29\] anything... And those are really expensive tests to maintain.

So end-to-end tests I feel like they get this bad rep because I think more people don't focus enough on integration tests. And really, you wanna have a \*bleep\*. Oh, sorry. You wanna have a whole load of integration tests, and you wanna have a handful of end-to-end tests, that act as smokes. It's a smoke test; it's just to make sure everything is working. Because in theory, if everybody's taking care of their little house, if they're taking care of their boundaries, then the kind of testing that the connection points are still working is all you really need to deal with the true end-to-end test.

So can you talk to us a little bit about that shift in testing methodologies and philosophies, and how things are changing, like the ratio of unit, and integration, and end-to-end, and also our understanding of integration tests is sort of changing... And Cypress I think has really enabled that story, at least for the teams that I've been on...

**Gleb Bahmutov:** Amal, excellent, excellent runway... Okay, so if you write a small piece of code, you probably will test it, and those tests are called unit tests. They're kind of like little drills. Then maybe you have a couple of components and like your frontend, and you write integration tests, where you don't have a backend, maybe you test how a couple of components work together. But when you put your frontend, and backend, and databases, and whatever else you might have in the system, and then you test it like a user - go to a URL, click on a button, log in, create a project, and so on - both are end-to-end tests, and they go for the whole system.

Now, you might still stub some calls, for example to the payment system, or to like the email system, but it's fine; the majority of calls should go through and exercise your whole thing. And it's incredible how much broken stuff you find, even if all parts work individually very well, and are fully-tested.

So right now, I work at Mercari U.S, which is this online marketplace. You can sell your existing stuff, you can buy furniture, including shelves... The furniture will be delivered to you, Amal... It's nice.

**Amal Hussein:** Yeah. Are you trying to get back at me because I -- I had a job offer from Mercari, and I had to sadly turn it down, and it was really upsetting...?

**Gleb Bahmutov:** I'm just making fun of people delivering furniture to you just now...

**Amal Hussein:** Okay, got it. I was like, "Wait, wait a second... What's going on?" Okay, yes.

**Gleb Bahmutov:** \[00:36:02.09\] Imagine you buying furniture from someone else, some other person or store. And you have to pick it, make payment... From multiple providers. You can find a delivery service... Another company will go and deliver, and so on. So imagine how many systems actually work together to make it happen, and when you have thousands of users every minute. So imagine how you test that. We have, let's say, probably like 600 end-to-end tests in our dev environment.

**Amal Hussein:** True end-to-end.

**Gleb Bahmutov:** True end-to-end - create a user, log in, create an item, buy an item, arrange delivery, track it, and so on. So imagine - in theory, everything is working, but you constantly find "Okay, our furniture pickup service that's responsible for organizing, a third-party, is returning an error. Why is that?" Okay, now go investigate. Or it's back. Why is it back? What are the tooling for you to track it down?

Our suggestion service that kind of gives you shipping suggestions if you're selling an item and you have to ship it - you can use a postal service, you can use FedEx, or you can use whatever. DHL... There's a service responsible for suggesting which option to use, and how much it would cost, and the wait. All of a sudden it's not responding. Right? End-to-end tests allow you to find all these issues, that should not be there, because you did test both services in isolation, but together in this whole deployed environment some things go wrong.

So I think the biggest thing about Cypress was someone who is working on the frontend, or backend, or working as a tester, could come in and write a test very quickly, and see it run, and understand why it failed, or why it succeeded, or what has happened during that test. I think that was the revolution - you could come into a new job and in the first day, boom, show how the full system is working or not working. It's fine either way. But I think that was a revolution. You did not have to suffer through tooling, and versions, and installation, and running it on CI... You could be successful in one day.

So I was impressed myself, and I hope the users who tried it are also impressed. And that's what's really nice to see still. I'm still a big advocate for Cypress, every day.

**Christopher Hiller:** This is kind of what my take on the situation is - Cypress was really the first end-to-end testing tool that focused on the developer experience, and not just... This is a tool for the QA team.

**Gleb Bahmutov:** Yes.

**Christopher Hiller:** And what it did was it kind of caused this shift left, where developers are now saying "Oh, writing these functional or these end-to-end tests is part of my job now." And that wasn't how things were before. You'd have a QA team, and they'd work with their tools, and you wouldn't touch them. But now you do.

**Amal Hussein:** Yeah, because nobody in developer land wanted to touch anything with Selenium in the word... And it was all just super-hard. Everything was written in Java, too. It was all this Java. It's like, "What is going on?" Yeah, I couldn't agree with you more, Chris. And that shift left is something that's still happening at quite a few companies, as well. I think that's still something that we're in the middle of as an industry. It's not universal.

**Gleb Bahmutov:** Yeah. And it still is in progress. And I'll tell you an example. So it used to be that Cypress would only do end-to-end testing. You visit the URL, you find a button, you click on it, and then the website would contact the backend, and then show results. Excellent. So now, Cypress released something called component testing. So imagine you're a developer and you work on a date picker that fetched available date intervals, when you can schedule something, like a pick-up. Okay. Well, how would you test that? It used to be that you would use something that runs in Node, like Mocha, Jest, AVA, and so on, that would emulate the browser, that would render your component in this DOM emulation, and then you would have to know specific framework things for --

**Amal Hussein:** \[00:40:19.14\] The secret handshakes, I call them...

**Gleb Bahmutov:** The secret handshakes with that framework, and the testing tool \[unintelligible 00:40:24.16\] say "Fire a click event, and then turn the wheel, so that the framework does its processing, and then renders results in this thing that you don't see, because it runs in complete DOM emulation."

**Amal Hussein:** Don't forget to hold your breath either. You have to hold your breath, and then touch your nose, and wiggle your toe three times...

**Gleb Bahmutov:** And sacrifice a goat... The whole shebang, you know...

**Amal Hussein:** The whole shebang, right. Exactly.

**Gleb Bahmutov:** So Cypress folks were kind of thinking "Okay, well, why don't we take that component - React, Angular, Vue, whatever - and we already have a browser that we control, and we'll just mount that React component, and then start React as \[unintelligible 00:41:03.04\] web application." So instead of mounting your whole app when you visit the URL, you mount that component, and you also hook into that, so you can pass a property, or a spy. But other than that, after that, after you mount it, it runs as a full application, so you can use the same commands for clicking, for typing, for observing the network, for stubbing the network, for checking the results, all in the browser, all using the same standard commands. Use all the dev tools, use all the debugging tools that you want, right there. And you're using a real browser, so you can see everything.

This version of Cypress has support for React, Angular and Vue. I'm super-happy to see it, because it shifts the testing all the way to the left, so that the developers, while working, can see the thing. And this also allows you to do things like - okay, well, if I'm testing a button, I have to find the button. So how do I find it? So now, developers have to think about it, because they're writing this component test. If I click on a button and it shows a pop-up with some text, how do I check that pop-up? Well, you need probably some kind of label, or area attribute, or even a data test attribute so you can find it. So developers now start adding and think about the stability of the code and components. And once that's done, they can write end-to-end tests so much simpler, because everything is testable, everything is findable. And QAs who come in, they can say "Yeah, I see this component, I see aria-label, I'll select using aria-label, I'll observe a network call..." It makes end-to-end test writing so much simpler, because you shifted left so much that now everything makes sense. Nothing is black box, and nothing is like "Well, I don't know how it works." \[applause\]

**Amal Hussein:** It's not over.

**Gleb Bahmutov:** Pretty impressive.

**Amal Hussein:** Alright, alright, alright... Enough with the shenanigans, for real... That's amazing. And whoa, right?

**Gleb Bahmutov:** Yeah.

**Amal Hussein:** Talk about pushing the needle and shifting the conversation... Making it easy to actually visualize your tests, have it be part of your iterative development workflow... And I think then taking that and saying "You know what - hey, Node environments, maybe not the best place to do frontend testing for components, right? Let's render them in a browser." It's one of the things that's always bugged me. I'm like "PhantomJS --" Not PhantomJS. What's it called...?

**Gleb Bahmutov:** No, PhantomJS was the first one.

**Amal Hussein:** First PhantomJS, and then there was the other one. Dominic's...

**Gleb Bahmutov:** Jsdom?

**Amal Hussein:** Jsdom, thank you. Yes. Jsdom, right? I'm like, come on, people. We are reinventing the wheel. Let's just use Node tools for Node testing, and let's use browser tools for browser testing. Like, how do you know your images are rendering? How do you know your CSS is working? It always speaks to that JavaScript hungry-hungry-hippo phase that we're going through as a community... Like, anything that can be done with JavaScript, will be done with JavaScript, regardless of whether it's a good idea or not... So anywhoo... I'm ranting now.

**Christopher Hiller:** \[00:44:13.01\] I feel like those headless browsers, like your Phantom, they really filled this niche, because it was a need...

**Amal Hussein:** There was a need. There was a need. But we've evolved past it now though. We have better tools.

**Christopher Hiller:** Well, it was slow. It's still slow. It's slow to start a browser.

**Amal Hussein:** Oh, it is. There's that, yeah. I get that.

**Christopher Hiller:** And if you want that quick feedback loop, then you have this thing that runs in Node, that fakes a browser, and is really weird, but people love it. So...

**Amal Hussein:** Honestly, that is the biggest pushback that I have ever gotten, from trying to always make that pitch to teams... It's like "Well, it's so slow to launch a browser." Like, literally, that's the excuse that I get. And I get it. I get it, people, I get it. But you know what - we have computers; we have compute. We have fast MacBooks. And there's cloud computing, and there's caching, and using ASTs to run the right set of tests, and such and such. I mean, we should leverage these things. I get it, it's not one terminal window, but it is the right thing to do for our users at the end of the day, and the right thing to do for the help of our code and our applications... So you know, I'm just putting it out there.

**Gleb Bahmutov:** You're right. And you have to talk about what's the speed that you're trying to optimize - the initial speed of starting the test tool and getting to the first result, or the speed of your development cycle. Because these are different things. I have a whole presentation about -- we're optimizing for this initial run of a test. "Oh, it's 10 milliseconds versus 10 seconds." I was like, okay, but what if something fails? How fast can you debug it? Oh, it's a black box and you have to -- and then there's a browser API that you're not sure if it's implemented, at all, or correctly... Versus seeing it in a browser. What's the speed of debugging something that fails in CI? What's the speed of maintaining the test, and then someone else who hasn't written the test comes in and has to change it, or investigate a failing test, when you already left the company? What's the speed of that? Let's not optimize for something that you can just leave open on your computer and it just sits there, re-running the tests as you work on it.

So to me, it's like, think about the speed you're optimizing for, because it might surprise you. And all the comparisons - okay, if we're ranting, let me rant about this.

**Amal Hussein:** Rant, rant, rant!

**Gleb Bahmutov:** The most popular things on the internet are framework X versus framework Y, where we say "Here's a list of a thousand items and let's virtually scroll for it, and - look, this framework X is like 10 seconds, this one is 30 seconds." And it's like, okay... Is that the speed we're really optimizing? That's the use case, that every user will scroll very quickly? Okay... How come you're not using the speed of development, the productivity of development, or something else? And guess what - because it's so hard to measure. But yet, everyone is going through these flame wars... Is it 2 kb versus 10 kb of initial JavaScript? Okay, I understand it might matter in some context, but let's not just say "This is the only metric."

**Amal Hussein:** Yeah, I get that. There's so much to unpack here... To kind of summarize, Cypress has really pushed the needle for our ability to have good DX, and maintain our tests, and also be able to test more things with it, not just integration and end-to-end tests, but actually component tests, right? And that's really exciting.

**Break:** \[00:47:50.19\]

**Divya:** So we talked a little bit about Cypress and the various testing frameworks, the history of that and how it came to be, but what is upcoming, or what are the innovations that are sort of on the horizon for Cypress?

**Gleb Bahmutov:** So I already mentioned component testing. That baby is out there, it's growing, it's becoming a nice person on its own... But there's something else that I would say is huge. So usually, you have to be a developer to write a test. And a lot of people will ask "Well, can't I just interact with the website and record the test this way? No code, or low-code tooling." And Cypress has added what's called a Cypress Studio, where you can just interact with the site, and it spits out the code right into your spec file, you can inspect it, modify, and so on. And they removed it in version 10, and it caused chaos. People were crying, people were cursing, people were throwing furniture out of the window, like "Why did you remove this no-code kind of recording tool?" And Cypress, the company, the developers said "It's kind of hard to fit it in with the big architectural changes we've made, so maybe we'll bring it back. We have to justify it."

I personally was always against that tool, because it's hard just to record a good test by interacting. Because you only can record actions on the page, rather than actions and assertions, which is a big part of a test. Anyway, that thing aside, Chrome the browser team has created a recorder. If you open in Chrome the dev tools, there is a new panel. It's experimental, but it's there by default, called Recorder, where you can click a button and record the interaction with your site, and then export it as a JSON or as a Puppeteer, which is another test runner tool from Google. Okay... Cypress has released --

**Jingle:** \[00:53:32.20\]

**Amal Hussein:** I'm having a lot of fun with soundbites. I've never touched this button today. I was hoping this would be a very quick TIL, but it was like a dramatic one...

**Gleb Bahmutov:** It is dramatic.

**Amal Hussein:** But here for it, nonetheless...

**Gleb Bahmutov:** It's fine...

**Amal Hussein:** Resume, please...

**Gleb Bahmutov:** \[00:53:54.24\] So the Cypress team has just released Cypress Chrome Recorder Extension. You install it in your Chrome browser, then you go back to the recorder panel, you record the test by interacting with the site, clicking, typing and so on, and then at the end you can export it as a Cypress test, and it has all the Cypress commands. You just edit it, you add maybe assertions of what you expect for each step, or at the end to have on the page, and it's done.

So Cypress Studio is gone, but they replaced it with this Chrome extension... Which actually might make more sense, because you might be already on a site -- let's say you see a bug, right? Right there in the browser you just start recording it, go all the way to the bug, export as a test and say "This is a reproduction for the bug. Now make it as a small regression test."So I'm really excited about that.

**Divya:** Nice.

**Amal Hussein:** That's really awesome. That's very cool. I mean, I feel like product owners everywhere are rejoicing; they're dancing around a pole somewhere, celebrating... \[laughs\]

**Gleb Bahmutov:** That's how I dance... That's the only way to dance!

**Amal Hussein:** I'm thinking about like \[unintelligible 00:55:03.10\] Anyway... Chris, you've been giving me so many disapproving looks... Every two minutes you're just like nodding in disapproval. Like, what's up with that, dude? Don't hate the player, hate the game, okay?

**Christopher Hiller:** You're sensitive...

**Amal Hussein:** I am? I am. Anyways... Let's not talk about this on air. \[laughs\]

**Divya:** Maybe this is a good segue to talk about the wider community... Because we talked about the online open source community, but of course, developer communities are not just online, they also are in-person sometimes, or in certain communities that are outside of projects and software... Like conferences, and podcasts like the one we're on now...

**Gleb Bahmutov:** Well, I just wanna remind everyone that the people you can interact as a professional -- not just people at your company or your school or your study group. We have truly gone global, especially during Covid, where you actually interact with people a lot more being online, attending online conferences... Which is probably the only upside to the Covid epidemic, was how much people actually said "Yeah, we don't have to all fly ten hours to this place so that we can listen to 20 talks and then all fly back." It became acceptable to have online conferences, which I personally find incredibly rewarding... Being at work, and then looking at the schedule and saying "Oh, I'm just gonna watch for the next two hours conference talks online."

But I have to say that I don't like all aspects of online conferences as a speaker. So I'm gladly doing online talks; you invite me, I'll do it. But it takes work. It doesn't take any less work to prepare a presentation if you're doing online. It probably takes more, because you have to deliver --

**Amal Hussein:** It's more. You can't wing it.

**Gleb Bahmutov:** Yeah. And you have to deliver in front of a green screen, literally... You have no audience reaction; it's absolutely much harder emotionally than being at a conference, and feeling excited, and you see everyone, and then you discuss it... No, it almost happens in vacuum. But it's still fine to do it. Of course, being at an in-person conference has its perks, right? You're there, you travel, you have a speaker dinner, and so on... But online, it doesn't have it. So - trade-offs.

What I want to encourage everyone in the community to take advantage of are not just online conferences, because usually they have like a free track, or they publish talks afterwards... It's a lot more professional now than in-person conferences. But take advantage of workshops. So during Covid, you had to do workshops online, so a lot of people actually stepped up their game. They are better prepared, they know what to do, they know more specifically how to interact with each person... But online workshops are much better than they used to be before Covid, because you had to improve.

\[00:58:05.01\] But I wanna take an issue with some conference organizers... Not only they invite me to do online talks, which is fine; they want to invite me to do online workshops, for free. Usually, it's like, "Oh, can you do it for 2-3 hours?" I'm like, "2-3 hours is a huge chunk of preparation."

So it's fine, I've done it a couple times, I encourage everyone to attend online workshops if it's available. I'll do one for Testing For Good, which will be in October, organized by Sauce Labs. 2-3 hours about testing using Cypress, end-to-end and component...

**Amal Hussein:** Ooh, I'm gonna get my team on that.

**Gleb Bahmutov:** It's gonna be a good conference. I just want the conference organizers to be a little more respectful, and say "Okay, the workshops that we're giving for free will probably limited in scope", because it takes a lot of work, and it's harder to justify. But if you're attending, definitely take it as a chance. If you can attend any workshop online, definitely attend it. It's a good thing.

**Amal Hussein:** Yeah. And to be clear, Gleb isn't talking about Sauce Labs in particular. Just in general, free conferences in general; take care of your people. Yeah, I totally agree, Gleb, especially because you do a lot of speaking... And you're speaking at a few different interesting things... I have a bunch of people from my company that are actually gonna be at NG-Conf, and I'm excited... You're gonna meet people that I work with, and you'll be doing a workshop at NG-Conf... You've also started Cypress.tips, which is like a new website where you're like "Alright, y'all, I keep doing this tech support... Let me organize my thoughts and also try to get paid for all the time that I've sunk into all this..."

And I love your YouTube channel, too. You have all these bite-sized videos... It's awesome. It's like, you solve a little problem and you make a 3-4 minute video... It reminds me a lot of like RailsCasts, or Egghead, but like the free version on YouTube... Although I think RailsCasts is free, and has been for almost a decade now...

**Gleb Bahmutov:** Amal, can I interject? Yes, I'll be at NG-Conf this weekend. I'm only doing a workshop and flying right after. I'm not even going to the conference; I just don't have time to stay there.

**Amal Hussein:** I see...

**Gleb Bahmutov:** So if you're not taking my workshop... And I'm working on the content, finishing it just now, because of a component testing for Angular that came out; that section is new.

**Amal Hussein:** Interesting. That's awesome. For what it's worth, this episode is gonna be dropping after NG-Conf, or during NG-Conf, and after your workshop, because your workshop is next Monday, so... Time warp, again. But yeah.

**Gleb Bahmutov:** Okay, I remembered... Yes, I do have a YouTube channel, and I have the biggest playlist of Cypress tips and tricks videos that I make, because every time I see something - yes, it's one thing to write a blog, but sometimes it's better just to see it. So I code up both solutions, you can see literally Cypress on one side, code as I change my code editor on the other side, and my head kind of floating there...

And I'll tell you - you said it reminds you of Egghead videos... Yes. And you know why it reminds me? A long time ago, Egghead invited me to do a course. I submitted a couple of videos... The course was supposed to be about dev tools, or something... And we argued so much about editing each video, and re-recording, and re-recording, and like "Oh..." and "Can you remove this pause?" And I was like, "I'm not doing it for you. That's it."

**Amal Hussein:** Oh, God...

**Gleb Bahmutov:** Because if we talk about economics, it makes zero sense. That's why I started Cypress Tips. So I give pretty much 95% of everything I create for free out there on YouTube, my blog and so on. But if you talk about Egghead, they take the chunk of money just for hosting it. If you talk about conferences, in-person, every workshop there - the presenter who's teaching a workshop gets 50%. That's the standard rate. So imagine whatever you pay for the ticket to attend the workshop - the presenter only gets half of it. So if you subtract all the expenses, nobody is gonna be a millionaire by working themselves to death during workshops. So finally, I was like "Okay --" Well, it was part of my job, teaching everyone, making sure everyone's successful.

\[01:02:29.12\] When I left the company, I said, "Okay, enough. Why don't I create a nice course about Cypress?" And I've done it, and I've hosted it for free. If you go - and we'll put a link in the description - to BlazeMeter University... So BlazeMeter is a company doing a lot of testing. BlazeMeter University hosts my Cypress Version 10 Fundamentals Course. Absolutely free for everyone. And then on my Cypress Tips, I created two other courses; one is complete, it's all about Cypress network testing. Hands-on exercises using network testing, \[unintelligible 01:03:06.17\] And I'm working on another course that you can already purchase, and it's work in progress, so you can see new videos and new lessons as soon as I post them. It's all about Cypress plugins. How to extend the functionality of Cypress using other tools.

**Amal Hussein:** That's awesome. And we're gonna give JS Party listeners a promo code to get 15% off of any of Gleb's courses for the next three weeks.

**Gleb Bahmutov:** Yeah.

**Amal Hussein:** Three weeks from when the episode drops, which will be someday in -- I think September 1st or September 2nd is when this episode drops. So probably for most of September...

**Gleb Bahmutov:** Yeah, why don't we do the whole September?

**Amal Hussein:** Let's do all of September, yes. Testing September.

**Gleb Bahmutov:** Exactly.

**Amal Hussein:** jsparty. And then we'll put the link in the show notes to Cypress.tips, and "jsparty" will be your promo code for 20% off. And yeah, support a maintainer. I'm definitely gonna be getting my team on that, so... Thank you in advance.

And what else...? To kind of wrap up here, I'm curious -- I like asking this question to a lot of what I consider very prolific open source maintainers... If you could wave one magic wand - about the internet, about development, about whatever, testing... Anything goes, that's technology-related - what would you wanna change?

**Gleb Bahmutov:** Honestly, I like the complexity, alright? We have all this kind of history of the internet, and it grew, layer by layer, over 31 years now... And it became this nice little system of libraries, tooling, websites, technologies... I would not change a thing. A lot of people kind of say that JavaScript needs a standard library. Not just a couple of math and so on, but a big library, so you don't have to include Lodash or Ramda in every project that you work on. And I kind of see why people would say that... So maybe the one consensus decision would be just to have Lodash available by default. And I'll tell you why - Cypress, the test runner, by default, bundles and includes Lodash, Bluebird promise library...

**Amal Hussein:** jQuery...

**Gleb Bahmutov:** jQuery... It used to have Moment. They removed Moment, because it was way too big for what it was supposed to do... Right? It's so nice when inside your code you just "Hey, here's a Lodash method. Just use it and move on. You don't have to install nothing." So if there was one change - just include Lodash by default into the browser.

**Amal Hussein:** \[01:05:40.14\] Agreed. I'm +1 on that. Like, yes to all of this... And in our chat we were gossiping about you. Chris was like, "Cool. I don't understand how you make all this content and have a separate dayjob." I would agree, Gleb. I don't understand it either.

You have a lovely wife and kids who you also spend a lot of time with, so I know you're a family man too, and you also do a lot of volunteering with different environmental groups, and groups that are trying to do something about the climate crisis... So you definitely have a full life, and we just wanna say thank you for everything that you do. The internet is literally a better place.

Oh, wait, we didn't tell people the story of me, you and Cypress... What the hell? How did --

**Divya:** \[unintelligible 01:06:20.19\] extra credits...

**Amal Hussein:** Yes... Well, I'll say it really quickly. I invited Gleb to a podcast on Cypress - this is maybe six years ago now, five years ago? I don't know. Some long time ago... On Web Platform Podcast, which is where I've been podcasting since 2012. The project is kind of actually kicking back up again. We paused for a few years... It's been a long-running, pretty successful podcast on the Web platform. We'll put a link to the episode. But I invited Brian and Gleb. So that was Gleb's first introduction to Brian, and I invited Gleb as a guest panelist with us, to interview Brian, because of how much Gleb loved Cypress. And I was like, "Hey, Gleb, now is your chance. Come meet Brian." And shortly after that he ended up working with them full-time.

So I would like to take a little bit of credit for accelerating what I think would have happened anyway... But that was a pretty cool little story, for all of you...

**Gleb Bahmutov:** Thank you, Amal, for that, and for the story. I just wanna point out that -- you know, your first job out of college, out of bootcamp probably has to be on the strength of your resume, whatever. Courses you took, open source projects that you can show... But after 2-3 jobs you probably wanna look at your career and make sure that you are invited by people you worked with, or interacted, or collaborated with... Because those things will probably lead you to places that you enjoy more than blindly applying at a company, and when joining it's like "Oh, I don't like this product, I don't like the technology, I don't like these people."

So the more you interact, the better impression you have, the more positive person you are, the more chances you'll get to actually work with people who like you, and you like them. That's it.

**Amal Hussein:** Amen. Well, can't end it on any better of a note... So with that, we'll give it a wrap. Thank you everyone for listening. We'll be back next week, as always. Special thanks to Gleb, of course, and Divya, and Chris... It's been really, really, really fun, y'all. I had a lot of fun with the soundboard too, so you know...

**Divya:** Hah! Clearly... \[laughs\]

**Amal Hussein:** ...another kind of plus there...

**Christopher Hiller:** Sorry for making faces at you, Amal... I'm sorry.

**Amal Hussein:** I mean, you know, Chris... Apology accepted... Although I am trying to find the outro, and there is no outro music, so we're gonna outro to the intro. Alright, everybody... Bye... \[laughs\]

**Gleb Bahmutov:** Bye-bye!

\[01:08:58.26\]
