**Safia Abdalla:** Welcome to JS Party, everyone. Today's episode is super-exciting. We're talking about, once again, everybody's favorite topic. I always feel like every time I come on as MC, we're talking about a super-fun topic, and today's topic is documentation.

My working title for it was "What's up, doc?", like from the cartoons...

**Nick Nisi:** Nice!

**Safia Abdalla:** I don't know if Disney is gonna come down and rain hell upon us for using that... \[laughter\]

**Jerod Santo:** I think it's worth finding out. I think we should try and see what happens.

**Safia Abdalla:** I know, we should test that. Joining me today, we've got Nick Nisi, we've got Chris, we've got Jerod... Howdy, everybody!

**Jerod Santo:** Hello!

**Nick Nisi:** Hello!

**Christopher Hiller:** Hi!

**Safia Abdalla:** I wanna just dive in with what I think is the most important question to answer whenever you're trying to start any documentation effort, whether it's in open source, or in your company, or wherever... How do you get people to actually care about documentation in general? We're all busy people, busy developers, and sometimes documentation is one of those things that's at the bottom of a list of concerns, and maybe not even on it... So how do we get people to put it towards the top and start dedicating more time and money to it? That was a tough question, and it's okay if the answer is "We have no idea." \[laughter\]

**Christopher Hiller:** Yeah, that's my answer... I mean, getting your company to care about testing - that's maybe a little easier sell, with all the studies around how an agile workflow and continuous integration can help you... But documentation - there isn't that science there. It's tough. I have no idea how you get that to become important, unless you build your organization out with a culture that says "This is important to us" and make it a core value.

**Jerod Santo:** I think it starts with individuals, and I think specifically you have to first convince yourself that this is important, and I think many of us fall down there. I know I certainly have, in the past. Some of that is because I work on such small teams... In fact, often a team of one, so that documentation almost always exists either in my head, or on in-line comments, which are actually worth their weight in gold if they are contextual and not out of date over time... So that's one way of slowly convincing yourself that documentation is worth it, is to return to your code after 6 months, 8 months, 12 months, and realize that it's insufferable and you cannot understand what's going on without some good in-line documentation, and then branching out from there...

\[04:24\] But we all just have to convince ourselves that it's worthwhile, and like you said, Safia - or maybe it was Chris - the ROI, the benefit is not super-tangible or immediate, and a lot like with tests... Although, like you said, with tests, regressions, eventually the upper management or the decision-makers realize "Okay, this is going to reduce our total cost of ownership." I wonder if there are such studies around documentation.

But I think we have to convince ourselves first, and that can sometimes be very hard to do as well, because it's not the funnest thing to do, it's often the last thing that we do, and if we're not writing our stuff specifically for a broad audience, we often think "Do I really need this?" and the answer is lots of times yes, even though we tend to decide no.

**Safia Abdalla:** Yeah, you bring up a good point that I started to think about, which is what are the financial returns for having good documentation for your codebase, and I don't know, again, if there's anyone who's done anything quantitative around this, but I imagine that when you're thinking about onboarding or implementing new features or refactoring, the more documentation you have, the less time those very pricey developers spend trying to figure out how to do something, and the more time they spend doing it, because the documentation is already there.

Again, I'm not sure if there's any solid research on that, but if anyone is listening live and has heard of some research on this topic, let us know on the Slack or on Twitter; I'd love to see more and learn more about -- more regress evidence for that.

**Christopher Hiller:** I think it's important to point out there's internal documentation, and then there's client-facing "This is how you consume our API" type documentation, and I can see those being two very different efforts, with different people involved, and different priorities.

**Nick Nisi:** And I think that one thing that becomes a problem is once you convince yourself that you need the documentation and you get it written and it's all nicely written, things don't stay the same; things will change over time, and there's often times not really an automated way to know whether the documentation is updated or needs updating, so then it becomes just this terrible black box out in the world that may or may not be accurate, and nobody really wants to go spend the time to update it, because it's often very verbose and just a lot of work.

**Jerod Santo:** The only thing worse than no docs is wrong docs, right?

**Christopher Hiller:** Yeah. We found at an old company of mine -- we had a very complex software product, and we had people doing basically guides or tutorials... You know, reference documentation, how-to's, and a big part of this would be creating actual "Here's a screenshot, here's a video (in some cases) of how you get X thing done...", but it doesn't scale when you're developing rapidly. Things need changing all the time, and the faster you wanna release - well, you're going to be waiting for the documentation team to make their new screenshots, and... Oh, my god. That's difficult. I think at some level it means maybe you shouldn't be making software that's so complicated, and have a user interface that's much more discoverable and obvious... But that's a barrel of something.

**Jerod Santo:** \[08:18\] I was thinking about this, and I actually saw a funny tweet this morning from @khaliltweets, who is a JavaScript developer. Maybe you'll know him from -- is it Nested Loops, the reggae style JavaScript band that performs at JS Confs sometimes? Interesting guy, and I think he's on the Reactive Podcast, which is pretty cool, as well. And it was just timely, so I jotted it down... He said "It turns out not writing documentation when you write internal libraries creates a huge hurdle for onboarding developers. Who knew?"

That's a fact, and you only learn that in retrospect, when you see those new developers coming in and fumbling over things for too long because you assumed your internal libraries were self-documenting code, or whatever we tell ourselves. \[laughter\] That comes back to bite you.

**Nick Nisi:** Yeah, on Dojo, when we hire our new developers at SitePen, we do have them go through the Dojo documentation, and we do often learn a lot from that, and get tweets -- or not tweets, we get PRs made to...

**Jerod Santo:** \[laughs\] Whole tweets...?

**Nick Nisi:** ...to our repos. Yeah. \[laughs\] But the benefit of having it be in the open, like with an open source project, is that you get to kind of outsource that a little bit, too. We have a Discord set up, and we'll often get "I tried to do this step in the documentation/tutorial and it didn't work. Can you help me out?" It helps us to pinpoint the locations where things are wrong, and then isolate those and fix them. But that's not something that can happen on closed projects, so... There's problems there.

**Safia Abdalla:** Yeah, I've had experience with documentation in both the open source ecosystem, and then on project and internal work and stuff like that, and it's always easier to make documentation a big effort in the open source ecosystem, because a) it's often big companies who are consuming your open source library, so when they are the ones who have to come in as the outsiders to figure out how to use something, they're way more invested in funding or supporting work to document it. And then b) there tends to be a more fun and welcoming culture around documentation in open source. There's conferences like Read the Docs, or I know projects that have done things like documentation sprints where everyone just comes in for a sprint that's like a week long and nobody writes any code, all you write is documentation. It doesn't matter if you're an ace developer, or a designer, or whatever, everyone's just focused on writing documentation... And I don't think there's that same kind of a) need and b) structure and methods for pushing through documentation in closed companies.

One of the best companies I've worked at where they had really great documentation was at a large financial institution, and I remember I was 17 years old, I'd gotten an internship as a software engineer with this company the summer before I started college... And on my first day there, they linked me to their documentation page, and they had literally every line of code, every concept, every tool, everything outlined in their organization. And then they also didn't just have the code documented, but also the financial and the non-technical side of things documented too for their engineers. And for them it was two-fold - they were doing a lot of hiring and working with contractors, so they needed that documentation in place to have people on board very smoothly and be productive quickly.

\[11:52\] There is also another interesting dimension to it - it was kind of part of their auditing process, where they would have to show this documentation or have documentation written out for the software that they produced, whether it was internally or for external customers. I think there's that interesting pressure when you have an external auditor coming in and documentation is one of the things they look at when they're trying to figure out if you're up to compliance or standards. So maybe that's what we need - we need a giant body to come in and audit everybody, to make sure you have docs written. \[laughter\]

**Jerod Santo:** Um, no, thanks. \[laughs\]

**Safia Abdalla:** I was obviously joking about that. That'd be horrible.

**Jerod Santo:** I know. I'm curious if the auditing was the impetus or the reason for the documentation culture, or if that was something that perhaps emanated down from the founders... Just from your take, from an intern's perspective - where did that culture come from? Was it there from the beginning? Was it there because of auditing? What was the actual reason for it?

**Safia Abdalla:** It definitely felt like a big part of it was for auditing. One of the things that struck me about the organization in general was that so many of the technical decisions that were made, and the project management decisions were dependent on auditing requirements, and compliance, and regulations, and yadda-yadda. It was like a whole other world, where -- and I think in that situation, in the world of finance, it's completely rightful for them to have a lot of regulations and compliance to uphold... But that was a huge impetus for a lot of the decisions they made around documentation, and testing, and what kind of -- and this is probably a common one that people have heard of, but what kind of open source packages they use, and stuff like that.

**Jerod Santo:** I'll call out Chris here in the chat room, since you're also here on the call, Chris, talking about test suites as kind of a proxy, or maybe a low-fidelity documentation that at least has the advantage of less likely to be outdated, versus pure pros. Do you wanna expand on that, Chris, or does that pretty much explain what you're talking about there in the chat room?

**Christopher Hiller:** Yeah, so you mentioned the tweet about not writing documentation... It creates a problem for onboarding people. Somebody in that thread mentioned that -- basically, they ask "What's the matter? Aren't the tests good enough?" \[unintelligible 00:14:22.13\] Well, they don't really replace actual documentation... However you feel about that, I don't really have an opinion. But assuming your test coverage is good and your build is green, then the tests reflect reality. Well, there's nothing that says, English or whatever language that you're describing your API with, is necessarily correct. There are ways to run CI against example code, and that would be a good way to catch problems and suggest to somebody working on the documentation that this area needs to be updated because the examples broke, so I need to readjust my assumptions about how this works, and maybe change my phrasing or whatever I need to do to change the description of the API surface... But there's no automated tooling to make sure your documentation is current and correct in that way.

**Safia Abdalla:** \[15:48\] That comment brings up a really interesting distinction, the comment specifically about "Well, isn't your test suite a good enough documentation for your code base?" and I think it helps to determine, whether it's an open source project or an internal project, what is the audience and the goal of the documentation... Because I think what tests replace is API documentation, and then you've got other types of documentation that your project might need, which is things like preference guides, or play-by-play tutorials, and things like that.

Often I think it's not a gap of documentation in general - although that is the case - and it's more about a specific type of documentation that doesn't exist because people aren't aware of the audience that they need to serve with that documentation and what the goals of that audience are.

So I think it's interesting, because you have to exercise this whole other part of your brain that's all of those writing principles you learned from elementary school onwards, like "Figure out who your audience is", learning what they want, appealing to their emotions, catering your language to them, and all of that stuff which I think is interesting in a kind of fun breakaway from the coding part of things. But yeah, that's been my observation, is that it tends to be more about figuring out who the people who are going to be reading your documentation are, and what it is they want, and moving from there.

**Jerod Santo:** I was just thinking about this premonition of somebody asking "Isn't your test suite somewhat good enough to be your documentation to that?", perhaps I would say "What test suite are you talking about? What are these tests you're referring to?" \[laughter\]

**Nick Nisi:** Or it's often the case where you're committing on a project and the tests aren't -- not all of them pass, and people just don't even rely on it at all... That's another problem.

**Jerod Santo:** Yeah. It's like outdated docs, tests that don't pass, you just ignore them. "Well, that one's been failing for months. Just leave it."

**Safia Abdalla:** \[laughs\] "It's just a flake. A ten-month-long flake", and then there's the case where although your coverage number might be pretty high, your tests are actually not a good reflection of the intricacies of your API, because I think that's sometimes where it might be at odds - you might be covering lines of code in branch statements, but you're not really getting at like "I don't know how I feel about that statement that tests our documentation, because I don't think--" There's things that are in people's brains that aren't captured by tests, even good coverage tests. I'm not explaining myself very well right now, but hopefully you all and everyone listening understands my jumbled words.

**Nick Nisi:** And the test might not be written in a way that you would really interact with that code... Unit tests, for example, would be trying to test a single unit, and that may not be how you necessarily work with it, and maybe the code doesn't have higher-level tests, integration \[unintelligible 00:18:50.10\] or they don't have them with as much fidelity as the unit tests, for example.

**Safia Abdalla:** Yeah, that's a great distinction.

**Jerod Santo:** Maybe we can get into this during the tooling section, but I am thinking of at least one or two efforts out there, going back to this idea of really documentation that stays up to date, and perhaps is executable -- I think there's tools where you have, at least for in-line docs, contracts between the documentation and the functions that are exercised... And Chris, you were talking about working that into CI - I know there's efforts there; I can't think of what they are off the top of my head, but maybe I can find them during the break... Where people are actually having this relationship between the code being described and the comments or the in-line docs that are right above it, and you can actually run those through and at least make sure they're not wildly outdated. Kind of cool.

**Safia Abdalla:** Yeah, I know exactly what you're talking about, and I also can't think of the name, which is...

**Jerod Santo:** Perfect. \[laughs\]

**Safia Abdalla:** ...rather unfortunate in this case. That being said, we are about a third of the way through and there's a lot to discuss and share. We're gonna take a break, but right after the break we're gonna start to answer a question that's probably musing in you all's mind, which is let's say you've got everybody committed to documenting some code - what are some tools you can use to start making the documentation effort easier in your code base? All that is right after the break.

**Break:** \[20:20\]

**Safia Abdalla:** And we're back! In the last segment we talked about how you can get people to start caring about documentation in your organization. Now we're gonna talk about something else that's also interesting, which is "What kind of tools can you start to use to make writing documentation easier and get people to adopt it more readily?" Anyone have recommendations for documentation tools they like in particular?

**Nick Nisi:** I think markdown has been phenomenal for documentation. It makes it so easy to write docs that look good and have syntax highlighting, specifically with GitHub readme's, and things like that. It just makes it really easy to have decent-looking docs from the go.

**Safia Abdalla:** One of the ones that I wrote down was Styleguidist, which is a documentation tool for React components, and it allows you to spin up a live server and develop your React component and document it using a markdown file in one go. The place where I've had experience with that is actually in the open source project I helped maintain called Interact. We've got Styleguidist documentation set up for our React components, and one of the biggest benefits of it actually ended up not being related to documentation at all, but related to getting new contributors onto the project, because what it allows us to do is spin up a quick live server with the documentation where new contributors can start to fix bugs or add features to a single component in a silo away from wherever that component is used in the app, and that makes it really easy for people to focus on the things that need to be fixed or addressed, and not have to worry about like "Oh, this component is used here, so I have to go in this file to fix it..." - no. It's just, "Here's the component file, here's the markdown file, here's the command you run to set up your live server... Be free! Write the docs, write the code!" \[laughter\] It's magical.

**Jerod Santo:** "Fly, little bird..." This is really cool. I haven't seen this yet, so I'm just over here, kind of munching on its docs, or at least its sales pitches on the homepage... React - the component style development I think has been a boon for opening up tools like this. Isn't there a Storybooks tool, as well? And just like this idea of interacting with the code and the outputted product, as well as reading the documentation in-line... It almost reminds me a little bit of literate programming. Is anybody familiar with the concept of literate programming? It was gaining steam I think probably 5-10 years ago, with people like Jeremy Ashkenas and others, but I haven't heard about it recently. Is this something you all are familiar with?

**Nick Nisi:** No.

**Safia Abdalla:** Yes, it's the notion of kind of -- I'm a bit familiar with it in one specific context, but I'll let you explain it for everybody else.

**Jerod Santo:** \[23:55\] I'm only surface-level familiar with it as well; I have (I guess) consumed some literate programming, but I've never tried to write it. I think it was Donald Knuth that invented it or at least described it, and the idea is that the program should tell a story, much like you would write a novel, or a narrative... So alongside, interspersed with the code, is snippets and examples and prose that really kind of weave a story to describe what this code is doing. The programs that I've seen documented in this way have been -- it's almost an art; I think that's probably the reason why it's talked about and done, but isn't massively used... But we'll definitely link to more information on that in the show notes.

Just looking at the React style guide -- and I think the most popular project that I remember that was documented in a literate programming style was CoffeeScript, or maybe it was Underscore... Jeremy Ashkenas was the creator of Underscore.js and CoffeeScript, and he was a big proponent of literate programming, so you'll see some of his stuff documented in this way, and if I can find one I'll throw that in the show notes too, because it's definitely a different style and something to appreciate. I think it's very difficult, much like writing a novel - it's very difficult to weave a tale around your code, and not exactly agile... As your software changes, I'm sure your story must change as well. But that being said, seeing this React style guide and seeing the description right in there with the code and with the examples, it reminds me at least of this style of docs.

**Christopher Hiller:** I've seen that style, the literate style of documentation, and it's pretty cool... But if we're having trouble getting people to write documentation at all, this literate programming just seems like a higher level of effort... You know what I mean?

**Jerod Santo:** Yes.

**Christopher Hiller:** It looks harder than just even writing basic docs.

**Jerod Santo:** That's why I think I appreciate it. It's like aspirational documentation.

**Safia Abdalla:** I can provide a little bit of insight in that... So it's really funny that you mentioned that, because the open source project that I maintain is actually a project called Interact, which is -- we call it an interactive notebook app, but the idea is that you can... It's a desktop application, and there's also a web app version, and you can build literate programming documents. You can have notes interspersed with executable code cells that you can run as code that you would usually run. The way that it's mostly used actually is not by programmers, but by data scientists and analysts to document their analytics code. So when you're doing some kind of research and you've written up some script to do some math or something like that, you would use literate programming to explain how you derived the math, how you derived the parameters for the particular code that you're writing, and just kind of like -- it's almost like writing a proof for math problems, and... Did I hear a few people shudder, because of the fear?

**Jerod Santo:** No... That was just an interesting comparison.

**Nick Nisi:** But now that you mention it...

**Jerod Santo:** Yeah, shudder... \[laughter\]

**Safia Abdalla:** Yeah... So I think the context I've seen it used in the most is not to document APIs, but it's more to document references or situations where you're actually using a particular library, or... Here's a good way to put it - where most of the effort to come up with a particular bit of code is behind the scenes, in situations where you're doing machine learning, and you've done a lot of parameter tuning beforehand, and you've figured out what parameters you need for a particular model and now you need to write some plain text in English to explain that to whoever is reading it... And things like that.

\[28:06\] I think it's got a time or a place. I'm a big advocate for it, obviously, because I work on this open source project, but I think it's a really interesting paradigm... Not just in the example I gave you, but also in early education, teachers really like to use it when they're teaching kids how to code, because it allows you to make a worksheet that explains what a particular piece of code is, and have your students fill in the code that they need to program, and all that.

It's one of those things where I think it's got applications outside the world of engineering and more in the world of where other disciplines start to interact with software.

**Christopher Hiller:** If it's good for early learners, do you think it would be good for tutorials, or writing guides, or maybe even something like in the way that people use Glitch now? Would that be something...? It seems like if you wanna run one of these things, you can run a Jupyter -- because this is Jupyter-based...

**Safia Abdalla:** Yeah, it is.

**Christopher Hiller:** If you have this workbook, can you run it -- you probably can't just run it on your web like a documentation, right? You'd have to download the runtime, and all that...

**Safia Abdalla:** There's a service called Binder, which is a back-end as a service for these types of documents, that allows you to connect to all of the compute resources that you need and the execution resources that you need to run it. The way I've seen it applied is when somebody is running a tutorial workshop on a package or something at a conference, they will write up their tutorial in a Jupyter Notebook, put it up on the web, spit it up to point two Binder, which is this resource-as-a-service, I guess, and then just have folks interact with that. So you can run it in the cloud, and I think Azure has a service where you can run Notebooks in the cloud too, and it's getting to be pretty integrated with different cloud providers, too.

**Christopher Hiller:** Yeah, there's also this thing that npm seems to partner with called RunKit. It used to be called something else, I can't remember, but... Yeah, whenever you view a module on npmjs.com, you can click "Try it in RunKit" and it will load up like some example code in essentially a Notebook. I don't know, this is probably unrelated to Jupyter, but it's kind of a similar idea. But I haven't seen people use this sort of thing very often, so maybe there's something that is preventing people from wanting to use a notebook for guides and tutorials.

**Safia Abdalla:** Yeah. I know it's pretty popular in the Python world, so it might just be a methodology that hasn't been completely translated to JavaScript yet... But I'm working on that, so... Yeah.

**Jerod Santo:** One of the aspects or the characteristics of the Python community is a huge emphasis on spectacular docs. If anything, I love the idea of cross-propagation of ideas, like the good stuff... Let's spread that around all these different environments. If us JS folks could steal anything from the Python folks, it would be their documentation - not just the results, but just how much they value it, and I think Read the Docs is a great example of that.

So what about more traditional things? I mean, for API docs or for library documentation... Chris, you have Mocha... Is Mocha documented with JSDoc? Is that still what people use pretty much? Is it up to snuff? What's the situation for traditional library or -- like in a library API and not like a REST API style docs... Is it still JSDoc?

**Christopher Hiller:** \[32:08\] Essentially... JSDoc popularized this idea of doc strings, and tags in your document... So you'll use a multi-line comment, and then there you'll have "@" something, like @param, and you can use this tag and describe your parameters. So there's a few things -- JSDoc has been around for a long time, and it has issues as a... So it's two things; it's kind of like a specification for these tags you can use, but it's also a thing which you give it your code and it poops out documentation. So it's problematic as a tool, because you can't really consume it programmatically-- anyway...

People have tried to write replacements for JSDoc, but the problem space in JavaScript especially, because it's a dynamic language, is it's difficult enough that all of this institutional knowledge or whatever you wanna call it - the problem domain that JSDoc has attacked over the years is so wide and complicated that these newer projects that are trying to do the same thing are really having a tough time getting the coverage across all of these different tags. Even some projects have written custom tools, and they'll define their own custom tags.

Angular - I remember this is the first one I saw... Angular 1, or what have you. They wanted to document, so Google had Google Closure, which was a compiler, but it also consumed these JSDoc tags, and I don't quite understand the history of that, but for reasons-- I think it was that the dependency injection model didn't really make a whole lot of sense to what JSDoc was doing... Angular had to write its own tool, and have its own doc strings, and it would parse its source code and output it to an API documentation. And it was so specific, such that if you were writing an Angular library or a third-party module, you couldn't really consume what the Angular team was using to describe their own code... So it's just a really difficult problem with JavaScript to generalize and get coverage and be able to describe in these tags, because JavaScript is so expressive, like everything that your language can do.

TypeScript though, and Flow, and those sorts of things - I am seeing too many tools around it, but I can only imagine the story is better there, simply because you have types... And because you have types, and they're kind of self-documenting, and all this, that solves quite a few of the problems, and I would imagine it's much more easy, essentially - I mean, I can only guess, because I haven't seen any code, or anything - to generate API documentation from TypeScript sources than from JavaScript... Because all you have in JavaScript are just these tags and these doc strings from JSDoc.

\[35:57\] A long time ago -- JSDoc came out probably in the ES3 era, and it's had to evolve ever since then... It's a tough nut to crack for JavaScript, and I don't think there are really -- there's no real killer tool that has come out since, that has just disrupted (for a lack of a better word) what JSDoc is doing.

Mocha uses JSDoc, it works okay... I'm not in love with it, but we have some API documentation which is automatically generated from our doc strings and our code comments... And that's cool, that's actually a fairly recent addition; we had the doc strings, but nobody ever bothered to run it through the documentation generator.

It'd be nice to have something that -- I don't know, it seems to work well enough for our means, but I can definitely see, maybe, if we wanted more flexible templates and things like that, because JSDoc really is the whole can of worms; it' input/output templating etc. That's the story I have for Mocha and JSDoc.

**Nick Nisi:** I can speak to TypeScript a little bit, because it is a little bit of a different story there, better or worse... There is a tool called TypeDoc that is very much the JSDoc syntax, but you don't have to fill out nearly as much because it can just ask the TypeScript compiler "What's this type?" So if you're naming the params, you can have a code comment above your function, and then say "@param" and then just give a description of what that is, and it will figure out "Oh, that's a string" or "That's a boolean" or whatever, based on the types. And that's really cool.

The TypeScript compiler itself has the ability to pass it a token and say "Give me JSDoc comments for this if it has any", and it will return you the JSDoc comments and then you can parse that yourself if you're just using the compiler API... So it's easy to build out tools.

And then kind of going back to JavaScript a little bit, the TypeScript compiler itself can take JSDoc style comments and actually infer from that the types in your JavaScript code, and I think that's what Webpack is doing, where they're adding JSDoc style comments with types about everything, and then they're getting the type support that they need without converting fully to TypeScript by having TypeScript parse the JSDoc comments for that information.

**Safia Abdalla:** I'm curious to know, with TypeDoc, do you know if there's good support for generating documentation from TS doc strings in a monorepo of packages? This is a very specific problem that I've been running into since yesterday, trying to get JSDoc to run against the monorepo...

**Nick Nisi:** It has been a while since I've looked at it, so I can't really speak to that, unfortunately.

**Safia Abdalla:** Okay. When we talk about some of the problems with JSDoc, that's one that I ran into recently, where it's kind of -- the standard hasn't caught up with some of the more modern project scaffolding methodologies.

**Nick Nisi:** Yeah. And one thing that we do with TypeDoc is we take the -- so TypeDoc has the ability to parse your code and then generate this object that represents your code and everything in it, and then it will pass that to a renderer and render everything out. We actually don't use that, because I think we didn't like the way the default TypeDoc renderer looks... Instead, we have it output a JSON file that has everything in it, and then we parse that ourselves into a custom renderer, and then render our docs from that. It just gives us a little bit more information, a little bit more customization that we can do, specifically around making it easier to search and find docs faster.

**Christopher Hiller:** That doesn't sound like a trivial undertaking.

**Nick Nisi:** No... \[laughs\]

**Safia Abdalla:** Alright, we are coming up close to the second third of the hour. This was a really interesting segment, I learned a ton. I know I'm gonna (as soon as I get home) start to investigate TypeDoc and see where I can start to use it in some of the documentation work that I'm doing.

In our next segment we're gonna come back and talk about some examples of documentation that exist out in the wild that are really great, and leave you out with some inspiration. All that, when we're back.

**Break:** \[40:26\]

**Safia Abdalla:** And we are back for the third segment. We're gonna talk about some examples of documentation that is out in the wild that we really like. Does anyone wanna share some of their favorite documentation?

**Christopher Hiller:** I do.

**Safia Abdalla:** Please do.

**Christopher Hiller:** I had just said that I didn't have anything, but then I thought of something... And I just wanted to say it before anybody else did. I really love MDN. It's not the prettiest thing in the world, but it's something I can really count on to have accurate information. They help you understand the history of the JavaScript API, and the effort at MDN is just phenomenal, and I love it. I'm glad that it exists, I'm glad people kind of stopped going to W3Schools and are often looking at MDN now.

**Jerod Santo:** Yeah. Do you remember when MDN first launched, and there was a concentrated effort to get its search rank above W3Schools, and they came out and said "Everybody link to MDN from their personal websites, and from blog posts, and from Stack Overflow and whatnot, so that we can get this to rank higher than W3Schools", and it worked. It was pretty cool, because it's markedly better.

**Nick Nisi:** And I think they're working on making it as a parsable output as well, so you can ingest pieces of the documentation into your own stuff if you need, which is really cool.

**Jerod Santo:** That is cool.

**Safia Abdalla:** Oh, that is neat.

**Nick Nisi:** But I really like that you can just figure out something that you need, like "Oh, how do I use Fetch again?" and you just type "fetch mdn" into your search and you're there. It's so great.

**Jerod Santo:** \[44:03\] Well, speaking of API docs, I think I'll give a shout-out to Stripe, who I believe changed the game with regard to how people were documenting APIs as services; the way that they have example code that's executable, it's copy-pastable, snippets, for not just a specific language, but all supported languages, including Curl, in case you have quite picked a language yet, and just the information architecture... I think a lot of companies have come behind Stripe and basically jacked their style, which is great for the world, because it's very easy to browse, easy to peruse.

And Stripe always sweat the details... They do this little thing where they'll integrate your personal info into the documentation if you're signed in, so if you're perusing their docs signed in and they have a code snippet that requires an OAuth token or whatever it happens to be, they will actually put your test API key into the Curl code, so that you can actually copy-paste it and not have to swap it in yourself.

I love Stripe's docs, I always have, and I think they really drilled it with a developer-focused API, and I think that a lot of different companies have taken Stripe's example and run with it, and that's awesome, too.

**Safia Abdalla:** I guess following on with Stripe, one of the documentations that I wanted to mention was actually Twilio's, which kind of adopts similar philosophy to Stripe. You've got your copy-paste snippets for a lot of languages, it integrates them with your personal key codes... And one thing I really like about it - I think Stripe does this, too - is it's goal-oriented documentation. So when you head over to their homepage, one of the first things you see is it says "Hey, do you wanna learn how to make phone calls with Twilio? Do you wanna learn how to send text messages? Do you wanna learn about WebRTC?" So it comes in catering to what the end goal is, and I really dig that.

**Nick Nisi:** Yeah, and one that I really like is Chai. I was just trying to think of one, and one that I ended up using quite a lot because we use Chai for a lot of our assertions is that, and I just appreciate that it's really easy to search for the different types of assertions, because that seems to be always the thing that I'm forgetting about... You know, is there something more specific than strict equal that I can use? And it makes it really easy to find that.

Now, with TypeScript I get a lot of that for free, because I get auto-completion and it just lets me know that, but also it pops up with the doc comment, which is basically the same stuff that's on the website, and it just lets me know...

**Jerod Santo:** Another good one that I think of, that I use often and always appreciate is a little DOM library called UmbrellaJS. This will be a good example if you are writing a JavaScript library that has somewhat of a small surface area, just a bunch of simple functions that you can call. The things that I appreciate about this - think of it like a modern jQuery, just smaller and a little bit less functionality... But everything can fit on one page, and that's a nice little hack for people who don't wanna build a search function into their docs, but want it to be all searchable - just put everything on one page if your surface area is small enough, and we can Cmd+F or Ctrl+F our way to finding what we need without having to go page to page. That's a nice little feature, without writing any code, which is my favorite kind of feature.

**Safia Abdalla:** Yeah. And one of the things I noticed that I really liked about this UmbrellaJS website kind of links back to a previous topic of conversation - it's got a little link to their test suite, so you can run their tests and view the execution right next to the documentation, basically. That's super neat.

**Nick Nisi:** Oh, that's cool.

**Jerod Santo:** \[47:55\] Yeah. It's a well-designed site altogether. UmbrellaJS.com, we'll link that one up as well. And I didn't have a chance -- I was gonna hop over and see how they're actually building their docs, if they're using a tool, but it might just all be... I'm looking at their website now, and it looks like it maybe is just all handwritten documentation in HTML, so probably not generated... Although this doesn't look like handwritten HTML, so... Maybe. Check that out. Because lots of times you can say "Oh, that's really great. I wish I could just have the same thing", and you find out they're using a tool, and you can use that tool as well... But maybe not the case here. Either way, a great example to emulate.

**Nick Nisi:** This isn't really an example of great documentation, but it's a great add-on to documentation, and that's CodeSandbox, or similar tools. We use that on Dojo for our tutorials, and you can walk through everything without having to set up an environment at all. You just click this link and you're set up with a full environment, with an editor, with completion and everything right there, and then you can change the code and run it... And just getting that immediate feedback can often be the big difference that makes you understand something that much quicker.

**Jerod Santo:** Probably a good time to tease our upcoming show on CodeSandbox, don't you think, Nick?

**Nick Nisi:** Yeah. Totally not my intention there... But we're gonna be talking about CodeSandbox next week, with Ives van Hoorne, so that will be a show to check out.

**Jerod Santo:** Stay tuned for that.

**Nick Nisi:** It should be a good one.

**Safia Abdalla:** Yes, a fun episode. Mark your calendars, make room, don't schedule anything during that time. Be there.

**Jerod Santo:** One tangentially related tool that I will point out - if you're on macOS - is a tool called Dash. It's not documentation, but it's a tool that wraps documentation. The cool thing about it is he's an indie dev and he's gone and normalized all kinds of API docs that fit directly into a singular tool... So whether it's JavaScript, or even the MDN docs, or SQLite, or jQuery, or Git - you name it. React... They've been normalized into a singular place, which are then taken offline, and it has a really slick interface. I love it on airplanes, because you don't have to worry about the internet, even if you have it being slow, or if you don't have it, then you have your docs with you at all times. It's a free app with in-app purchase, but something definitely worth checking out. I don't know if there are cross-platform or other platform alternatives, but there's something great about having a single access into all kinds of API docs, and then also having them offline. It's just killer

**Christopher Hiller:** Yes, Dash is awesome. Ever since I've found Dash, I've used it religiously. It's pretty much the only way I look up anything. I highly recommend it if you haven't tried it yet.

**Nick Nisi:** Yeah, and the website for Dash does mention a tool called Velocity, which is a Windows equivalent for that.

**Jerod Santo:** Nice.

**Safia Abdalla:** \[50:53\] I wanted to give a shout-out to another documentation resource that I thought was great, and is actually GitHub's... And I would say it's not necessarily their API documentation, but more their how-to's and their reference guide. I think they do a really good job of having the text content that's (I think) on docs.github.com, and then they've got their video content on their YouTube channel, and they do a really good job of making sure that Git is super-accessible to people, in addition to obviously providing the GitHub web app.

**Nick Nisi:** Yeah, that documentation is super-helpful. If you need to tell somebody how to do something specific with Git, GitHub usually has documentation for that, so you can just send them a link.

**Jerod Santo:** A couple of guides I'll also mention here as we get towards the end - if you're looking for examples of not just API docs, or web service docs, but guides, and you're saying "What does a good guide look like?", I will throw out two... The first one is Ruby on Rails guides, which are spectacularly useful; very great architecture of the way they're laid out... High-level, and yet they'll drill down into specific as you need them, or they'll link out to specific code samples, or to specific sections of the actual API docs if you wanna learn more.

And then secondly, GitHub has great open source guides as well, which are very high-level. They're kind of an intro to getting into open source, and how to git, and how to do these different things, but they're very well laid out and very well-written, so another place to look for inspiration, if you're looking for how to write good guides.

**Safia Abdalla:** Yeah. Those are all really good resources. Thank you so much for joining us, everybody. Hopefully, this conversation was inspiring and formative, motivating, and you got everything you needed to go out and start writing some documentation, whether it's open source, or closed source... Whatever source it is.

Thanks again for joining us. You can find links to all of the things that we mentioned at the description below, and we will see you next week.
