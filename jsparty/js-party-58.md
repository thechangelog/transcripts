**Kevin Ball:** Alright, Kball here. I'm here at Node+JS Interactive with my buddy Nick Nisi...

**Nick Nisi:** Hello!

**Kevin Ball:** We are here with Jory Burson, the standards liaison at Bocoup, and Amal Hussein, the open platform--

**Amal Hussein:** Senior open web engineer.

**Kevin Ball:** Senior open web engineer, as well as a veteran podcaster herself... Welcome!

**Jory Burson:** Hi, thanks for having us.

**Amal Hussein:** Thank you, hello.

**Kevin Ball:** We're excited to talk. We wanted to start a little bit exploring standards, because I think standards in Javascript is something that used to be a dirty word, and it's something that we've gotten worlds better about over the last 4-5 years. Can you give us the insider's view on what do standards even look like for us now?

**Jory Burson:** Yeah, that's a great point, and a point I hope to make in my talk tomorrow morning. We've kind of used the word web standards a bit as like a dirty word, in a way... There's a lot of history behind it, it's not exactly positive; you know, you kind of conjure up some bad vibes... But it's really changed quite a bit, and I have to give a lot of credit to some folks on TC39 specifically, like Myles Borins, Daniel Ehrenberg, Maggie Pint... Folks who've done a lot of outreach and bringing people into the fold, opening up that sort of black box for how decisions get made, how people can participate, that kind of things.

I think the tides are turning a little bit, maybe perception is changing - at least we hope, because it's actually quite a bit of fun, and we'd love to get more people involved... That's a big theme for the TC39 folks at this conference.

**Kevin Ball:** Yeah. So do you wanna open that black box a little bit for our listeners?

**Jory Burson:** Sure, yeah. So what can I share...? Some things that people might know - we meet about six times a year (TC39 does), but a lot of the work happens in the open on GitHub. You can go to our GitHub pages and track the proposals, track the conversation, see what people -- or bring your own proposal to the table, that's another possibility. All of that is pretty openly documented, and that's something that we really wanna emphasize.

At the meetings themselves a lot of debate happens, a lot of discussion, presentations about different kinds of proposals, and just sort of analyzing where might there be problems, where do implementers think that there are gonna be issues, and then providing the feedback.

\[00:04:06.13\] It's a process that takes a long time, and that's something that I think can't be overstated. A lot of folks get these ideas, they get very passionate about it and they wanna see it happen now, but we can't work at that pace when we're talking about changing the web. The web is a long-term platform, so we have to think about change management for it in a very thoughtful, pragmatic way.

The process does involve a lot of conversation, and getting a lot of people to think about it, debate, provide use cases, write tests... So that we know that the decisions that are being made are the right ones.

There's a proposal process that your listeners might be familiar with, where we have different stages. There are four stages; we start down at the very bottom with "Hey, this is an idea. Wouldn't it be cool if...?" and it can take a while to go from that stage to the final stage, stage four, which is everybody agrees that it's the thing to do. We have multiple examples of use cases, we've shown that it's not or maybe it might introduce a regression, there's tests for it, but once it gets to that stage, it's going to be in the next edition of the language, which is now produced on a yearly basis. So that can take a long time, and there's a lot of stuff that happens in-between, but it's very important.

**Nick Nisi:** You mentioned the GitHub, tc39/proposals. It's something that I have bookmarked and look at very regularly. I don't know the details of how things move, and that's one thing I was gonna ask... You said that you meet six times a year. Do proposals move between stages only at those times, during those meetings, or...?

**Jory Burson:** Yes, absolutely. They do a lot of discussion and work and championing and thinking and that kind of thing on the issues between, but it doesn't advance until the committee meets in person, looks each other in the eyes and says "Do we all agree that this is ready for the next stage?" That's really important, and I know that we wanna work in an asynchronous fashion and everything, but sometimes what it takes is everybody getting in the same room and saying "Yes, we're really on the same page about this."

**Amal Hussein:** "Yes, we can."

**Jory Burson:** "Yes, we can." \[laughs\]

**Nick Nisi:** You said anyone can introduce a proposal...

**Jory Burson:** That's right.

**Nick Nisi:** But then does it take somebody from TC39 to champion that? Is that how it works?

**Jory Burson:** Yes. Currently, Ecma International is the standards body that produces the specification, and members of Ecma companies can come and participate in the TCs. I do wanna make a pitch that Ecma membership is actually really affordable, and it's a pretty easy-peasy process to join... So if participating in standards work in a formal capacity is something that you're interested in, I'm @jorydotcom on Twitter, let me know; I'd be very happy to help you with your application, or whatever. Easy stuff.

**Kevin Ball:** And that's what it takes to be there? Because we were talking about there's all this in the open, but what Nick is saying - all the decisions are happening in this room with everyone. What does it take to be in the room where it happens?

**Jory Burson:** Two things. One is that you join the member organization Ecma, and the other is that you can be an invited expert, and we're actually really open to that as well. So especially if you're thinking about joining, let us know, because we would be happy to invite you to come see what it looks like in person.

\[00:07:58.23\] I think it's worth noting that it's a three-day event; the meeting has grown from maybe ten people -- it used to be less than ten people working on the standard, and now I think the last meeting we had like 60 people. We've gotta know who's coming, basically... It could grow to the size of a small conference if we weren't careful, but we do want to invite folks who are interested in participating to come do that as an invited guest, especially if you're thinking about joining... Or if there's an area that you would like to present to the committee about, we'd like to hear from you.

**Amal Hussein:** Yeah, I'd love to chime in here... The TC39 are kind of put on this pedestal, and to some degree rightfully so, because it's really hard work, but it's also really a self-selecting group of people. It's really tedious work, and the output is lovely. We have wonderful features like async/await that are implemented in all browsers, that work... But it takes a lot to get there, and I think one of the things that really makes the TC's decisions very cumbersome sometimes is that there's multiple stakeholders, the first stakeholder (and the most important one) being the users of the web; the users of the web platform are very important, and we cannot break this for them... So backwards compatibility is important, making sure that implementations of new features don't break the web, any significant portion of it anyway. So that's one stakeholder.

Another stakeholder is developers - people that are writing and using these APIs, these primitives. So does this make sense, is this intuitive, does this fit in with the overall language design?

Another very tough stakeholder is implementers. Can V8 implement this in a way that isn't gonna be a huge performance burden? And what does it mean if all the implementers were on board except for one? So there's multiple stakeholders that really drive home a really hard bargain, which is why you might see a bunch of things in proposal stages, but the reality is things that actually make it into the spec for real and make it across the finish line - it's a very small percentage of that... And rightfully so. It's really important to think about what we put into the platform, because once it's there, we can't undo it. A good example of that is even just like symbols that we choose; there's literally just a limited number of keys on a keyboard, and when we're looking for new symbols, we have to be really careful about picking that symbol, because once we pick it, it's gone, it's forever taken.

So there's a lot of really hard decisions, and it's really humbling work. Being at Bocoup and being exposed to standards a bit more closely now, as somebody who was kind of just, you know, a standard web developer, and who's now kind of working on the platform more closely, it's really humbling and it's very insightful.

**Jory Burson:** Amal makes a great point - sometimes what we have to say no to is more important than what we say yes to... And the nature of it is that we'll maybe get a dozen or more proposals for something, and maybe just one thing is ultimately what makes it through, because you can't say yes to everything; that's tough, and that may be part of where the negative press comes from... But it's important.

**Amal Hussein:** TC-thirty-nay... \[laughter\]

**Jory Burson:** Yaaaay!

**Amal Hussein:** And I'm okay with that personally, because the web is a public utility, it's something that's for everyone; it's how people pay their bills, it's how people communicate, it's people's only communication medium sometimes, if they're unable to communicate physically otherwise... So we can't break it, and we have to be careful with it.

**Jory Burson:** \[00:12:20.20\] That's right.

**Kevin Ball:** I'd be interested to hear a little bit -- Amal, you mentioned there are these different stakeholders, and there was some recent interesting discussion in the CSS world about the distribution of stakeholders and how it tends to be biased towards implementers... Is the same thing true in TC39? What is the balance of representation across different stakeholders?

**Jory Burson:** That's a great question. The nature of it is we could come up with a dozen different specifications, but none of it matters unless it gets implemented. So the power is really in the hands of the implementers. But we have quite a few folks from companies you would be surprised to hear - Airbnb, PayPal... There are a couple smaller companies like Bocoup, Tilde, for example... So I would say that \[unintelligible 00:13:15.06\] is another one. If I were to give it a percentage, I might say it's 50/50. I feel like it's 50/50. But the latter voices are still the implementers, because ultimately if they don't put it in, it doesn't matter...

**Break:** \[00:13:39.16\]

**Kevin Ball:** So let's go back a little bit and talk about the staging of things. I think there was some interesting stuff we were talking about maybe covering, in terms of when do you jump in on something, what do the different stages mean, and what happens if you start using something before it's fully solidified? ...that sort of area. So what are those stages and what do they imply for developers?

**Jory Burson:** Yes. I'm a conservative person, I'm fairly risk-averse, so my advice to people is don't implement it until it's actually published... But generally, if somebody wants to implement something in stage four, that's okay, that's a safe bet. Usually, if it's stage four, it's not coming out; it's going to be adopted in the final draft of the spec. It's when you start looking at things that are younger than that, less mature ideas, that you get into the super-danger zone... Again, the first stage being "This is an idea. You might want to implement it just as a test case, a proof of concept." By stage three we expect there to be tests, and some really solid use cases... And stage four - that's when you're in the safer zone.

**Kevin Ball:** \[00:16:18.10\] What's the process for making decisions about what's moving from stage to stage?

**Jory Burson:** What happens is somebody will author a proposal, and they will bring it to the meeting; a champion brings it to the meeting and just presents. There is discussion, and at the end of that discussion the champion might ask "What do you guys think? Do you think it's time? Can we move it to the next stage?" And the committee will say yes, or "No, we want to see more XYZ..."

Then the champion will take that feedback, or they'll get their green light to move it to the next stage, and then they have more work to do. That all happens on the champion's timeline, or whoever has authored the proposal; they move at the pace that they can move, that the group of people who feel like this is important can move. So it's not a timeline-driven sort of thing; it's about effort. And I guess it's time-intensive in like how much time does it take to get people to the table, to get the idea seasoned, if you will.

**Kevin Ball:** And to get that green light, is that a majority vote? Is that a unanimous consensus? What does that look like?

**Jory Burson:** We're consensus-seeking, so a lot of the times the question is "Does anybody oppose moving this to the next stage?" and a lot of times the answer is yes.

**Nick Nisi:** So really anyone has a veto power, almost?

**Jory Burson:** Yeah. Everybody comes to the table as peers, so anybody could say "I'm not comfortable with that", and that's just an opportunity to discuss the issue more acutely. The debate is very valuable, and people saying "Hm..." is not a bad thing. It's very healthy.

**Nick Nisi:** You mentioned tests are part of that, and I think Amal you're a big part of that... Can you describe what that is, what the process is around tests and how that affects a proposal of moving through the standards process?

**Amal Hussein:** Yeah, sure. TC39 maintains the official conformance suite for testing Javascript... Which means it's tests written in Javascript, that test Javascript. And I say that because these tests are run in different Javascript engine runtime contexts, so it tests how V8 for example, or JavaScriptCore, which is the WebKit runtime - how does it implement this feature? So we write tests which basically follow the specification, and we try to break things; they're tests that have invalid inputs etc. So we test the expected and we test the unexpected.

Those tests are then used by implementers. They basically import that project, run it in their own CI process, and it helps implementers when they're adding features to test their code. So it's this wonderful validation, and it's something that really drives interoperability; it's really important for making sure that JavaScriptCore's implementation of generators is the same as Chrome's, and it's not gonna cause weird bugs, and everybody wins. So it's to push web interoperability, but it also heavily speeds up the development process for implementers... Because if they have tests and they're not having to think about it or write their own, it really helps aid the process tremendously.

\[00:20:10.13\] I'm really proud to say that my teammates, Rick Waldron... Rick is technically my boss; he's my boss. My boss, Rick Waldron, my teammate Leo Balter, are maintainers for the project. It's a small body of maintainers... And I've contributed to that project as well.

**Nick Nisi:** Is it a custom testing platform? It's not like Jest, or something, right? \[laughter\]

**Amal Hussein:** It is not Jest, but it is Jest-like, in the sense that it's a light, very thin test harness that's used for the development purposes, but every implementation has their own runner and harness and all of that.

**Nick Nisi:** I see.

**Amal Hussein:** And for us it's very minimal and it's very unlike writing tests for like a web application, where you're trying to be dry, and reuse things, and you have a set of helpers... You're writing tests for the spec, which means that you don't have to ever really edit this test again. And every test has to be atomic, so literally one specification will introduce hundreds and hundreds and hundreds of tests, because every test file tests one line in the spec, and there might be multiple test files for one line even... So it's very atomic, very different. There's no concept of adding spy's or mocks... It's as minimal as possible. And even when you're testing features in ES6, let's say we're writing a test for async/await - we're not really gonna be using arrow functions or whatever... We're not gonna be using other ES6 features; we have to minimalize the usage of Javascript features in the specification year that we're testing for. It's a very different type of project, and I think we're gonna be writing a bit more about that on Bocoup's blog, what it's like to contribute to this.

**Jory Burson:** I think contributing is a great way to get familiar with the spec. If you really love tests -- Amal loves tests, I love tests... If you really love tests, it's a great way to learn the specification as well.

**Nick Nisi:** That's really cool. I honestly did not know that there is something out there that I can contribute to.

**Amal Hussein:** You can contribute, and you'll learn a lot for it... And it's a really wonderful gift that will outlive you and all of us, because the web is here to stay, hopefully...

**Kevin Ball:** It also sounds like it's a pretty low barrier way to get involved, because these things are so tiny and atomic that if you only have a little bit of time and you wanna learn about a little bit of the spec, you go, you write 3-4 tests, and you're in the door. You've started onboarding and you've started contributing back to not just open source, but to the entire platform of the web.

**Jory Burson:** Yeah. I actually wanna make a comment about other ways to get involved, beyond joining and going to these meetings, which are laborious... The test are a great way; contributing use cases, trying out some of the implementations in your own projects and providing feedback on that are all really effective data points. There's a couple of different efforts to improve documentation, and to get more feedback from different groups like educators, for example, like "What can we be doing to make the language more accessible to newcomers?" Those are all really important things to be talking about, beyond "What new crap can we put in this thing next year?" \[laughs\] Which is fine, but also we have a lot of crap, so... \[laughs\]

**Nick Nisi:** That's really good. I didn't consider getting those perspectives. That's a really good thing, to hear that that's happening... More than just getting features and syntactic sugar, and making my life easier, but actually "Does it actually provide benefit beyond that?"

**Jory Burson:** Yeah.

**Kevin Ball:** \[00:24:02.19\] I'd be curious to hear a little bit about what are the boundaries of what is and is not specified? One thing that came up in a recent JS Party that we were talking about was error messages, and the fact that the same error can have different error messages across every different browser. Where are the lines that are left up to the discretion of the implementer?

**Jory Burson:** That is a great question.

**Amal Hussein:** Yeah, I have so many thoughts on this...

**Jory Burson:** Okay, go for it.

**Amal Hussein:** So I wrote a bunch of tests for Atomics, which is this awesome new feature, it's a new built-in that's coming into the language, that basically brings threading to Javascript. It's sick, it's so amazing. Anyway, this was my first big stab at contributing tests \[unintelligible 00:24:46.03\] and one of my annoyances were like "Why are the messages not standardized?" and I kept harping on this; like, "This doesn't make any sense at all." My web developer brain -- I'm thinking adding logging, and messaging, it's all about having your namespaces, and making sure that you can trace things down to where they came from, and "How are you supposed to know the difference between the same error that's happening in Safari versus Edge?" Apparently, it's really difficult to standardize that... So reading through the specification you'll see that there's a bunch of things that have double square bracket, and those are kind of like internal implementation details. How they're implemented isn't specified, but how they behave is. So it's like behavior versus implementation.

There's some things that are left up to the implementers because they're writing the code, and that part is unreachable by Javascript. So the parts that we can observe are the parts that we test, which is that an error is being thrown; but the contents of that error are not really -- it's not really where the value is. It's just that when this thing happens, an error should be thrown; when this thing happens, we can assume XYZ conditions... So there's assumptions, and then there's like internal implementations, and then there's what's actually observable. It's multi-layered... It deserves its own discussion, and I think with implementers, because I think it's a fascinating topic.

**Kevin Ball:** If you're listening to this and you're an implementer, we wanna talk to you. \[laughter\]

**Nick Nisi:** Why are your error messages...?!

**Amal Hussein:** Yeah... I don't know, Jory - is there anything else that you wanted to add to that?

**Jory Burson:** No. I mean, I think you nailed it. It's one of those things where for a lot of people on the committee there's a desire to specify further, and then there's a lot of pushback the other way, and in the standards process itself it's all about that push-pull between like "Web developers want X, and implementers need to focus on Y, so what's the harmonious balance we can reach in between?" That's why it takes so long sometimes.

**Amal Hussein:** Yeah, it can take multiple committee meetings for one little thing to advance just partially, let alone -- because everybody comes back with... You know, lots of really smart people breaking down a problem and finding the holes.

**Jory Burson:** Yes. The most glorious bikeshed you've ever witnessed. \[laughter\]

**Amal Hussein:** I wanna make a community service announcement, actually, since we're talking about standards... This is something that I know Jory is extremely passionate about as well, but please, please, please stop using proposals in production...

**Jory Burson:** Yes... \[laughs\]

**Amal Hussein:** And it's a good segue into my -- You know, proposals are proposals, and they will change; they're almost guaranteed to change. \[unintelligible 00:27:51.07\] is a prime example of that. Babel makes it really easy for us to use these stage zero, stage one presets, but now since they've added messages and warnings saying "FYI, this is going to change. This is not real Javascript yet."

\[00:28:13.24\] So just understand that it's a major maintenance burden for you and your teams moving forward. Like, yeah, somebody might write some automated way to refactor it, but it's still something that you have to do, and it's still decisions that need to be made by product teams and QA teams, and... You know, it's just not worth it. Be responsible and only use real Javascript. \[laughter\] We should make like a "Real Javascript" sticker.

**Jory Burson:** "Keep calm and use real Javascript."

**Amal Hussein:** "Real Javascript. REAL Javascript."

**Kevin Ball:** What if you can make Michael Pollan reference, where you do the three things, like "Use Javascript, not too much, mostly real. Proposal stage three or above."

**Amal Hussein:** Yes! Only shop at whole foods Javascript. \[laughter\]

**Kevin Ball:** Use real Javascript, not too much...

**Nick Nisi:** I primarily write TypeScript, so I kind of go by that as the -- the new features, when they get added to that language, then I can start using them. Segueing into your talk a little bit - tell us a little bit about what you're gonna be talking about at the conference.

**Amal Hussein:** Yeah, sure. My talk is on machine-powered refactoring, so leveraging ASTs (Abstract Syntax Trees) to basically push your legacy code and the web forward... Your legacy code, and consequently the web forward.

The idea is that the web is an evolving, moving target, and we have - as Jory so eloquently pointed out - new specifications that are being added to the language... So the language itself is shifting, the web APIs are shifting, and new things are getting added; dependencies are getting changed, versions are deprecated, and you have code that you also want to deprecate. So we have all these changes that we need to make, and we need to really get comfortable with automating that process, and doing it in a safe way, and using tools that are better than RegEx, or simple Find and Replace.

**Nick Nisi:** There's nothing better than RegEx... \[laughter\]

**Amal Hussein:** Yeah, RegEx... If you say it three times, my brain will explode, so please, careful on the number of...

**Jory Burson:** RegEx, RegEx, RegEx...! Halloween! Maybe a Beetlejuice will show up. \[laughter\]

**Kevin Ball:** Well, isn't there a statement about that...? Like, any problem, you're gonna eventually reduce it to doing RegEx? Anything dealing with text...

**Nick Nisi:** And then you have two problems. \[laughter\]

**Jory Burson:** Yeah, yeah.

**Kevin Ball:** I mean, they're so powerful up to a point, and then you can get yourself in so much worlds of pain...

**Amal Hussein:** Basically, ASTs are this powerful thing that helps -- so when your code is basically processed by a language parser, it first gets broken down into a tree, and that tree is this predictable data structure, that then you can use to safely make changes to your code, and do an in-place regeneration... So those are the things that I'll be exploring tomorrow.

**Break:** \[00:31:23.03\]

**Nick Nisi:** There's a lot of tools around that, and there's even lots of ASTs... Do they all have similar data structures that they eventually get converted into, or do they all have their own subtle intricacies between them?

**Amal Hussein:** That's a great question. There is an effort to standardize ASTs and tokens in general, but currently there's a few different competing versions. Depending on what parser you're using - Esprima, Babel, Acorn etc. - they're all a little different, but as long as you're using the same one to make your changes continuously throughout your process, you shouldn't have any issues. It's when you're mixing things that you kind of get into trouble. But that's a great question.

**Kevin Ball:** What are the problem domains in which someone should look at doing that, and where does the line come where you say "Okay, this is not actually easy to do from a machine. We need to get a person involved"?

**Amal Hussein:** Yeah, that's a great question. If you have a change that is (I would say) queriable, and that's a finite and scoped problem... For example, we change the API of this class, which is now used all over our codebase, to take an extra parameter; so now I wanna refactor across the codebase safely - how would I do that? That's a good use case for an AST.

You can also leverage - in AST-based transformation - error handling, or adding in a code snippet or something like a marker for something that you wanna maybe do manually. If it's a 90% match for your use case, but you're like "Oh, I found something that's funny", that's something that you can also do. It's a little trick, but you can do that.

**Nick Nisi:** Yeah. I have a little bit of experience with this; I work on the Dojo project, and we have a CLI tool and a bunch of plugins for that... And of them is an upgrade tool. We've been making some drastic changes as we go, and we consolidated eight packages into one package, between versions. So one really easy transform was "Go look at all the imports, and if they match where this import was, change it to this." That's a really easy, finite one.

As we get more and more complex, another example is something where we have a component that still exists, but instead of it being a higher-order function that you would call, that returns a component, you just use it as a component. So I can go through and query the data AST, find out if it's being imported, what its name is, find that token in there and then see if it's actually being called or if it's just being passed as an argument. From there, I can't really refactor that, but I can output logging and say "Hey, you're using this here. It's changed. You should go in and fix that."

**Amal Hussein:** Yeah, and that's something that I get into, too. It's an ability for you to query your codebase, and understand "Where does the complexity lie? Where do I have seven function calls that are being made from one function? Where do I have 17 variables being defined?" It's a way for you to understand what are the patterns of your codebase, and then also take the opportunity to improve your custom linting rules as well.

\[00:36:06.01\] If you make a transform, or if you've deprecated some API or whatever, you can also use ASTs to extend out your linter to be a bit more custom to your team's conventions. Or you can use it to reinforce this bug from never happening. So if you ever fix a bug, you should ask yourself, "Hey, is there a linting rule, or is there something that I can do to automate this, so that nobody else has to ever fix this bug again? If the answer is yes, then go do that." Then the next question should be "If the answer is no, then can I write a unit test, so that our build will--" and then if the answer is "No, I can't write a unit test", "Okay, then can I write an integration test?" and the answer will definitely be yes.

So there's multiple layers for stopping regressions from happening, and I'm trying to automate that and make that as binary as possible. It just takes the human emotion and human time out of it, which is really valuable. Does that make sense to you all?

**Nick Nisi:** Yeah, definitely. That's not something that I had really considered. Either I haven't written custom linting rules, but...

**Amal Hussein:** Super-easy, come to my talk tomorrow. You'll learn how.

**Nick Nisi:** Yeah, awesome.

**Amal Hussein:** \[laughs\]

**Kevin Ball:** Absolutely. I imagine these talks are gonna be published online at some point...

**Jory Burson:** I was just wondering that myself, and I feel like I should know that, but I don't know that.

**Amal Hussein:** There are cameras in the back of the room, so...

**Jory Burson:** Yeah, I think they're all getting recorded...

**Kevin Ball:** So if you're listening to this, check and see if Amal's talk is up yet.

**Amal Hussein:** Yeah, hopefully...

**Jory Burson:** And they usually get them up really quick after the event.

**Nick Nisi:** Awesome.

**Amal Hussein:** Oh, that's nice.

**Nick Nisi:** Are there any tools or references or places to start for someone who is interesting in learning more about ASTs, that you'd recommend?

**Amal Hussein:** My talk on YouTube... \[laughter\]

**Nick Nisi:** Definitely.

**Amal Hussein:** And my link to my slides, which maybe we can include in the show notes, or something...

**Kevin Ball:** For sure, yeah. Send them over.

**Amal Hussein:** But there's also an awesome AST, which is kind of sparse, but I have a bunch of resources that I've put together when I was researching my talk, so I hope to add to that list.

**Nick Nisi:** Cool.

**Kevin Ball:** If you all have time, I'd love to poke at one other subject... Bocoup is an open source consultancy, which is a model that certainly fascinates me, but I think it's probably something a lot of our audience may be interested in as well... Can you describe what does that even mean? Open source consultancy, as compared to just an agency, or something else...

**Jory Burson:** That's a great question. Yes, we're a professional services firm, so there's a lot of different types of these kinds of companies, and different industries, and we serve the open source/open web tech industry. What that meant in 2009 when the company was first formed and what it means now is different, because everything changes, and you kind of have to stay with the changes. In 2009 it meant convincing people that Javascript was a language worth learning and using in enterprise; it meant teaching people a lot about new tools, like jQuery, that they could use to better work with the DOM, and that kind of thing... And it's evolved over time to include a lot of work on tools, and things that make life better for developers. Whatever happens with technology in the future, I think what Bocoup will be doing is whatever needs to be done in order to help advocate and improve the lives of developers - and users that they support, right? Because that's the other constituency that we care a lot about.

In practice today that means we're working a lot on infrastructure tools, and primarily the test suites, but also Amal's team... If you wanna plug \[unintelligible 00:40:11.27\] really quick...

**Amal Hussein:** \[00:40:13.23\] Oh, yeah. At Bocoup, our model is we have engineers that work on our reliability standards and testing projects with our browser vendors. Then some of us also still kind of do what Bocoup was really famous for, which is we make amazing web apps; but we've really evolved from making amazing web apps, which we feel like the community is really there, but we're pushing the boundaries now with computer vision and augmented reality, games interactive media... So web applications that have all of those components, that are a little bit more niche.

We're not really working on standard React Redux apps, we're working on really complex things that really leverage the web platform APIs heavily. Our expertise on these APIs really helps us help our customers, push the boundaries forward with what they can do with their web applications.

**Jory Burson:** To your point about what's really the difference between that kind of service versus an agency, where we try and serve is in that sort of longer-term relationship and commitment, not just to the product, but also to the technology, and helping companies understand what the lifecycle of that technology is, how to work with it in a healthy, sustainable, maintainable kind of way, versus "We need an application for our car rental company", which has more of like a marketing and advertisement focus to it. We're really there for the tools and the teams behind the tools.

**Kevin Ball:** \[00:42:11.14\] Got it. So you're doing consulting work, but focused on essentially open source infrastructure. "Here's how you're gonna be able to use these, here's how you plug into the web standards", and that sort of thing.

**Jory Burson:** Yeah, exactly. "Here's how to think about where your company is, and its transition to maybe becoming more of a tech company." That's the thing that's of concern right now for a lot of companies - "How do we go about our digital transformation (that buzzword), and how do we do it in a responsible way? Because we can't just go chasing the next best framework, or whatever... That's not really gonna get it done. How do we need to organize, how do we need to think? What are some of the things we need to learn, some of the things we need to let go of?" That kind of thing.

**Amal Hussein:** Last point on this, engineers at Bocoup are very unique, in that we have a strong web developer background, but we're also really involved with the web platform... And those two worlds - it's funny, they're operating on the same thing; web developers make things for the web, platform engineers make the web... Right? \[laughs\] But they're two different worlds, and the Venn diagram between those two is small, and Bocoup kind of interestingly fits in both of those worlds.

**Jory Burson:** Yeah, we definitely have tried to do that.

**Kevin Ball:** Neat. Anything else you all wanna talk about?

**Jory Burson:** Just how much fun I had getting to meet you two, and...

**Kevin Ball:** Yeah, this has been great, and I feel like I've learned a lot about standards, and a little bit about ASTs, and now I'm really excited; I hope I can make your talk tomorrow...

**Amal Hussein:** Hopefully.

**Kevin Ball:** If not, I'm gonna watch that recording.

**Amal Hussein:** Yeah, on YouTube. Hopefully we can include it in the show notes. And thank you very much for inviting us. It's been an absolute pleasure.

**Jory Burson:** Yeah, definitely.

**Kevin Ball:** Awesome.

**Nick Nisi:** Thank you so much.

**Jory Burson:** Thank you.
