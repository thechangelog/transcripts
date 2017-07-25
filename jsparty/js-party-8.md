**Rachel White:** Hello! Welcome to JS Party. I'm Rachel White, and we have a special guest for you this week with us. I'll let her introduce herself.

**Tracy Hinds:** Hey, I'm Tracy... I'm here with y'all today. Thank you for having me.

**Rachel White:** And then obviously, Mikeal's not here, and we also have Alex.

**Alex Sexton:** Alex Sexton, Virgo... Um, this is probably not true; I have no idea what my sign is.

**Rachel White:** Cool! We have a lot of cool, fun things -- I don't know cool, we have exciting... Semi-exciting, semi-cool, semi-fun things to talk to you about today. We're gonna talk about documentation, what makes for good documentation, non-blocking UI rendering, and then we're gonna talk to Tracy about the current state of Node.js and what is being a community/education person like, and what's going on this year with Node.

Cool, let's jump right into the documentation. We're gonna talk about what makes good documentation to you; how do you prefer to go about adding documentation to your projects, what are some best practices, what are projects that you like...? Who wants to start?

**Tracy Hinds:** I'll jump into it a little bit, because this is something that's just been this wonderful, sort of serendipitous week of hearing a lot about documentation. I was doing research for learning Node and kind of looking at the survey stuff that we had gotten from last winter's survey... As I was reading through all of this data that we had it was really odd, because I kept reading about what docs people were using to help learn Node. Some people were saying like, "Oh yeah, these docs are great!" and then I'm seeing other people saying, "Docs are terrible, they're substandard. What's going on?" and I was just like "What docs -- they're being really vague about it."

What I found out when I dug into it was that they weren't referring to the Node API doc. They were referring to docs from authors with NPM packages.

**Rachel White:** Oh...

**Tracy Hinds:** Yeah, so it was just this really interesting -- like, I knew that the documentation has been a struggle for us in Node, and so when they said that, I was like "Oh my god, that makes so much sense", because a number of prolific authors in the community early on were contributing to Node itself, so they were doing a really good job with documenting their own projects and packages, and that ended up educating a lot of people on best practices for what you should be doing, because they had to watch these projects evolve.

**Rachel White:** Yeah.

**Tracy Hinds:** But part of that was -- it kind of brought into the question for me, because when I started writing Node, I remember like "Wow, these API docs don't make any sense to me. They make all of these assumptions", because a lot of the people who had written them had written other programming languages prior, so they kind of assumed that you knew these constructs... So yeah, I was like "Oh, so I have to dig into this", because it's really hard for me to believe that people thought that they weren't naming the Node API docs as the thing, and they are much better now... But they still need work, because they're not entry-level.

**Rachel White:** So basically the community poll gave you results that a ton of people weren't actually using the documentation that you wanted them to?

**Tracy Hinds:** \[laughs\] Yeah.

**Rachel White:** \[\\00:04:00.26\\\] I feel like whenever I'm writing or working with a new language or project and I'm jumping in, if there's good documentation (which we'll talk about later) then it's super helpful, but I think that something else that people don't take into consideration is people have different learning styles too, so if there's other ways that people give you examples, you're gonna go and check those other sites.

**Tracy Hinds:** Yeah.

**Rachel White:** Or if there's sites that have -- this is kind of dumb and a little ridiculous, but I know that often when I was doing more frontend stuff and I needed to know CSS or HTML questions, you always get... I feel like the worst results come up first on Google. You're gonna get those W3Schools and the Stack Overflow questions that are giving you the information that you don't want... I don't know. How do you think that a good way to remedy this problem could be?

**Tracy Hinds:** Yeah, that was my first -- I think Mikeal and I talked about this a while back, and our data definitely backed it up. It's sort of this -- like, if you don't write good documentation, then you don't get to choose where people are going to get the information to understand your project. So I don't know about other projects in Javascript, but I know in Node what ended up happening is the majority of people who were learning Node then are learning it from going to Stack Overflow, and combined with documentation.

What's really interesting about that is a lot of our collaborators aren't the ones answering questions on Stack Overflow.

**Rachel White:** That's true.

**Tracy Hinds:** So then it's even more so -- like, if you're seeing a bunch of people who are sort of talking about good practices in writing Node, they are not necessarily... Like, we're not leading that effort in Stack Overflow; it's whoever has the energy to be answering questions in Stack Overflow, which is super awesome, but yeah...

**Rachel White:** Well, Stack Overflow also has that difficult to attain barrier of entry where you're not able to contribute until you've participated a certain amount of time, and vice versa. It's like one of those weird situations where you can't be a part of a thing until you're a part of a thing, but how do you get to be a part of a thing?

Now I'm actually wondering... Do you think that there's a responsibility of maintainers to not only write good documentation but to also maybe -- if you see somebody in the community that is stepping up and taking part, to be able to build upon the good work that you've already done - do you think that there's a responsibility to maintainers to be able to take that and kind of like bring it into the process...? Where if you're not finding what you're looking for here, here are other recommended resources that you should take a look at...?

**Tracy Hinds:** Well, Myles Borins and I were talking about this yesterday, and we were talking about like -- something that I struggle with for resources and education is there are so many ways to learn, even just online, not even in person... It's going to people who write blog posts, they're googling for it, Stack Overflow... And even Stack Overflow now has this really cool thing where it isn't just the questions section, they actually have example sections now... I think it's called documentation, and it's starting to be just plain examples. It's not just docs; what we think of docs often times are more like a definition, a How To, or a Getting Started... But I consider those documentation, I think it's really great.

\[\\00:07:52.02\\\] For me, it's like I want there to be one source of truth. Also, having started in Python, I find that it's really easy for new learners, if they don't -- they're not inundated with so many places that they have to look at... But in Node, at this point, I don't think we get to choose that. So instead of trying to control it, it's like maybe we encourage people - maintainers, contributors, that if there's a place that they like to hang out, then they should voice their knowledge. "We have this place that you can go in the Node GitHub repo that you can go to ask for help. It's /help."

That's great, but as I've said, Stack Overflow is the number one place people are asking questions for Node, and it's kind of built for that. So that's great, but then maybe we should be encouraging people - what we consider subject matter experts - to be contributing there.

**Rachel White:** Yeah. So aside from just finding the good documentation and the places that people can go, now I'm starting to think about the actual process of writing the documentation, and what are good practices that people can use while writing their code in order to make it easier on them in the long run.

I know personally previously I've used DocBlock type stuff while I'm writing to describe the actual things that are in the code, but I think Alex writes a lot more code than you and I do nowadays, so maybe he can give us some better insight into this...

**Alex Sexton:** I'm not sure I can. \[laughter\] Specifically what are you looking for more insight in?

**Rachel White:** So do you do anything while you're in the regular dev process of working on a feature or a codebase, in order to make it easier for documentation at the end?

**Alex Sexton:** To be written?

**Rachel White:** Yeah.

**Alex Sexton:** Okay, sorry, I was misunderstanding... So documentation has levels, you know? The minimum documentation I feel are publicly documenting the function signatures of the public API of any software, right? So it's like "Here are all the functions and their names, and here are the arguments that they take, and here's what it returns." Does that make sense?

**Rachel White:** Yeah.

**Alex Sexton:** That's the minimum viable documentation, I think. Anything below that is useless; you have to just read the code, it's not longer documentation. So one thing that's become more popular in the past six months to a year is typing Javascript. So for Javascript-specific stuff, if you use Flow or if you use Typescript, you can generate that documentation automatically.

Stripe uses types as like a build step and builds them out. We don't gain a lot of built time error checking, because a lot of it is too nebulous -- there's not a ton of third-party library support for this stuff... But the thing to gain from it is just automatic documentation for every API signature across all of our code.

So I think that something like that can be really useful for getting -- automatically updating documentation when code changes is a pretty important thing, I've found, because documentation becoming outdated is actually maybe worse than something not being documented at all. So when you have types built directly into the code, those things get updated automatically on every build; the docs just get built with the code.

But then on top of that, you kind of have to have -- then it becomes a cultural thing. It's like, "Are you allowed to ship something without writing words about why it works the way it works and how you might use it, or examples of how you might use it together?" At Stripe we actually have (I think we call it) a frontend explorer. So we have a bunch of components, and some are really generic... It's a button, or a date picker, or something like that... But some are like "This is the thing that you use in the selector for the settings where you change your avatar to..." -- like, it's very specific, but you still want to document that, so this is a place where you can throw example code of the different settings that you can put on it, and it will then automatically render that stuff, and then pull in all the types and render all the function calls.

\[\\00:12:30.11\\\] A new developer at Stripe can go to this page and say, "I need a menu over here that I have to do... Let me look at these menus. Do I need to write a new one? Can I look at these?" So that's fully cultural, past the mandatory typing though. I think it's a good culture to build, it's extremely important.

**Rachel White:** I agree. Tracy, or I guess either of you... What are some codebases that you've used that you are increasingly impressed by how they handle their documentation?

**Tracy Hinds:** For me, honestly... In Javascript I was trying to chat with some people today about what they were inspired by, but I'm still blow away by MDN and the process for that, because they also make it so incredibly easy to contribute back to it, which I think is incredibly important, because a lot of people - and I learned this painfully, early - forget that docs are living and that there's bugs, and they need to be fixed... Right?

You're just like, "I assume, very naively, that oh... It's the documentation, it's correct, so I must be doing something wrong." And then I found out very quickly that that wasn't the case. So that's tough, and that's in Javascript, right?

Django, you know... \[unintelligible 00:13:53.26\] was giving a great talk earlier this week - and he and I were both in Python before... You know, it's tough to beat that when it comes to that level of project - you've got versioning, I believe you have it in multiple languages, which I think we'll talk about a little bit later... You know, spoken languages...

**Alex Sexton:** There's also a book... There's the Django book too, right?

**Tracy Hinds:** Yeah..

**Alex Sexton:** ...that gets updated along with the code, I think. Python has ReadTheDocs.io, right? Isn't that a thing?

**Tracy Hinds:** Oh, yeah.

**Alex Sexton:** Kind of like a central repository for different projects docs. I think NPM kind of becomes that for a lot of Javascript projects, because you write the readme with the docs in it, and then NPM hosts it, and you end up hitting the NPM homepage... But the ReadTheDocs thing is nice, because it's versioned, and all that kind of stuff. So you can kind of go back in time and see what the docs were for your version... They may be more uniform, as well...

**Tracy Hinds:** Yeah, I've used ReadTheDocs at least at one company, and especially it was because the founder, Eric Holscher - we worked together at Urban Airship, so we were using that... We were \[unintelligible 00:15:01.25\] It was great. I'm not super stoked about writing RST, I much prefer markdown, but in terms of that, it's really useful. The documentation in ReadTheDocs is incredible... They're at least practicing what they preach.

**Alex Sexton:** Yeah, I agree. MDN is a really good example of just something that has persisted over time and continuously gets better. I know Janet \[unintelligible 00:15:31.18\] out in Austin is, I believe, full-time on MDN. I believe there are other people that are full-time doc writers for MDN, so... Once your company gets big enough, it definitely makes sense to hire technical writers and spend a lot of time putting effort into making it better and better.

**Tracy Hinds:** Yeah.

**Rachel White:** And communicating with the technical writers, not just giving them code and being like "Have fun!" \[laughs\]

**Alex Sexton:** Yeah.

**Rachel White:** ...as I say with resentment, and Tracy knows why. \[laughter\] I wanna bring up Johnny-Five as an example for a special exception to documentation... Not because I'm biased and I love NodeBots -- well, yeah, I am biased and I do love NodeBots, but I think that the reason that I love NodeBots so much is because of how good the documentation is.

\[\\00:16:26.24\\\] It touches on the API for using it, it gives you visual diagrams on how to use it, there's code examples for so many different microcontrollers... So you can come into it with so many different ways of your preferred learning style, and there's something there for everybody, and... I don't know. I think that's probably my favorite. It makes me very happy.

**Alex Sexton:** I'm gonna toot Stripe's own horn a little bit, but Stripe is pretty well known for good documentation of their API, which is a little different than what we're talking about... But as a company, if you have something that people have to integrate into their software, you need pretty good documentation on that.

And one thing that Stripe does - that a lot of people still don't do, but people catch on to every once in a while - is if you have a Stripe account and you're logged into it, there's a bunch of data that you have that's specific to you, and you have your test keys and all that stuff to hit the API... So if you then go to the documentation page and you're still logged in, all of the docs are kind of automatically made specific to you. So any of the documentation calls - if it's a curl or a Ruby call or anything; you can look at it in different languages - you can just copy and paste it and run it, and it is correct for your user, and the data that we show you that it returns is the data from your actual account, with some scraping.

**Tracy Hinds:** Wow.

**Alex Sexton:** So it actually makes it to where all of the documentation is kind of living, in the sense that it's actually making calls - to some extent; we don't make charges every time you look at the charge page, but it really brings people into a quick, firm understanding of what they need to send and what they need to come back, because they can copy and paste and verify that the data looks the same, and all that kind of stuff. That's been really successful for us, and I would encourage everyone to steal that idea.

**Rachel White:** I encourage everyone to steal that idea, too. It would make everybody's life easier.

**Tracy Hinds:** Yeah, that sounds amazing.

**Rachel White:** That's what happens when you write good documentation - it encourages people to have a good connection with your product or what you're trying to get people to use, and then they'll tell other people about how great it is to use... So there's really no excuse for having bad documentation, other than... I don't know.

**Tracy Hinds:** It's work! \[laughter\]

**Rachel White:** Yeah, other than that it's work.

**Tracy Hinds:** It's a lot of work... \[laughter\] It's like whether you're doing the right thing, and you have \[unintelligible 00:19:01.19\] to do it.

**Rachel White:** Yeah, true.

**Tracy Hinds:** I mean, I'm saying that that's an excuse sometimes. Sometimes there's just not enough hours in the day, unfortunately. And that seems like it's often the first thing to go.

**Alex Sexton:** It's also true that in your first iteration of your application (or business or whatever you're documenting), the documentation kind of flows out because you have such a small service area, and you don't have any -- I mean, it's kind of like greenfield in code, you just write whatever you want. But as soon as you update something, now you have to manage both the old and the new, and then you update more, and the service area grows, and by the time you're 3.0, the docs are massive, all the examples are out of date... It's kind of a snowball of work. You would assume that since... You kind of touched on this before, Tracy, that docs are living and you have to keep updating them, because the code -- even if the code wasn't changing, you'd probably still need to continuously make them better. But the code is changing, so you have to keep updating them based on the changes in the code and making them better, all while not breaking anyone's workflow, or anything like that.

\[\\00:20:13.26\\\] So the work actually increases over time. It feel like, "Oh, I wrote all the docs. Now I only have to do little updates in the future", but I feel like it kind of is this early big spike, and then it drops off, and then over time it far surpasses... Eventually you're a massive -- if you're successful and you have 12 people full-time, documentation writers and programmers and all that kind of stuff.

**Tracy Hinds:** Yeah, the living dark situation is definitely -- I found it to be a problem that people don't make that-- or if there's a mixed, like a conflict in manage expectations, because I think there was for a time... James Snell spent an exorbitant amount of time updating a lot of the docs (I believe it was at the beginning of this year) for Node. Part of that was that there had been a ton of updates and releases... And people aren't pulling open source code for Node now; they're looking at the docs, which you would expect from a mature project, but the docs weren't keeping up quick enough, so then you had people arguing, saying "No, this is what the docs say", and I'd be like "The docs are out of date." We're working on it, but that's really tough, you know?

**Alex Sexton:** Yeah, for sure. One way to try to fight against that that accidentally occurs somewhat in that thing I was talking about at Stripe where we run actual calls to code to try to generate the example output of our API endpoints is that we have to build the docs and run tests against all of the different calls. Essentially, if we have docs that make a call that is no longer compatible with our API, the tests will fail. So we may not have new information in there, but we can - and 'guarantee' is a very poor word to use here - somewhat try to check with tests that all of our documentation continues to currently run.

All documentation should have an example and it should have a known output, and you should run all of those examples as tests, and if that output no longer matches, then you need to update the docs and the tests should fail. So that can be not insanely difficult. As long as you can extract out the examples from the documentation and run them separately, then that feels like a pretty simple few lines of running all of the examples files in the example folder, or something. Give it a shot.

**Rachel White:** Alright, I think it's time for a break. When we come back, we'll be talking about non-blocking UI rendering.

**Break:** \[\\00:22:57.25\\\]

**Alex Sexton:** And we're back. During this next section, we're going to be talking a little bit about maybe a segment light about concurrency in the UI thread, or non-blocking rendering techniques to make the browser not lag whenever you try to do things or render things (render other things) or scroll.

\[\\00:24:00.00\\\] We've talked a lot in the past about maybe network performance, and we talked somewhat last week about isomorphic Javascript. As a refresher, isomorphic Javascript is a name that was given to code that renders on the server and the client by \[unintelligible 00:24:17.15\] at Airbnb back in the Backbone days when we used to do it the hard way. So isomorphic Javascript refers to Javascript that you can render on the server, and then whenever the page renders, the frontend code "rehydrates" (this is the word we use) all of the nodes that are already in the DOM, and then things start working, magically.

So you have a server side render, you get SEO, you get fast rendering. You might not get fast thing to work, so if your Javascript still takes a really long time to parse and execute then none of your buttons work yet, but maybe your links do, or something like that; it'd be cool.

The last section of that is more along the lines of in-app... Like, during the execution of the application and the use of the application, we still do a lot of rendering and re-rendering. And React was pretty big -- so in the Backbone days you would say "There was a change in my view. Let me kill off the HTML" -- or like, either you did it by hand, like with jQuery, you updated something, or you said "Let me kill everything in this entire view", and then inject all new HTML into there. That as sad for many reasons, especially performance and layout and all sorts of things.

In the React world, the whole magic was the virtual DOM. You did a DOM diff on the virtual DOM - the previous state, the new state, and then you'd only re-render the parts that changed, and that was a pretty big deal.

But we still are in a world where a lot of times you're switching pages, right? You click on the menu button and the URL changes, and you render a totally different page with almost -- like, only the menus match. DOM diffing doesn't do much for you there, because the whole DOM is a diff. Actually, in early React, in early Ember versions of this DOM diffing stuff for large refresh page changes like this were a big problem, because so many things would mismatch the diff that it actually became faster to just replace the HTML instead of actually going into each individual place and updating... Like, "Let's change this \[unintelligible 00:26:34.19\]" and then update every single attribute on it to be something else, and then update all the content inside of it, rather than just pulling it all away and throwing in new code.

So where I think we're headed in this interesting space that is coming out of the need for faster, lighter-weight, cooler animations and all sorts of stuff is concurrency and non-blocking, and piecemeal rendering. So we have the native little API in the browser called requestAnimationFrame. requestAnimationFrame is a tick, right? It says "Every 12 milliseconds I'm gonna call you." Pretty regularly, but much better than setTimeout, or setInterval, or whatever is gonna do. Those can vary wildly in timing. But if you do a requestAnimationFrame, you get every 12 milliseconds. That way you can get 60 fps. If you do an animation that works inside the requestAnimationFrame, then you can get a 60 fps animation.

When we're talking about rendering, much like you want to fit any animation you're doing inside of the requestAnimationFrame 12-millisecond block, you wanna fit any rendering that you're doing in your page inside that block as well, otherwise you're going to stop that requestAnimationFrame from being able to be called. You're going to stop the browser from being able to scroll smoothly; you're gonna stop anything that is in the UI thread - the rendering, the layout, all that stuff - from being able to happen, until you're done running your code.

\[\\00:28:13.03\\\] In React, a lot of times we have DOM diffs and things like that and re-renders that take a lot more than 12 milliseconds. So even though we have this fast, cool virtual DOM diffing thing, we're in a situation where we're lagging the browser and we're causing jank and all that kind of stuff because of the rendering style... And it will take 30 milliseconds to render everything, or 300 milliseconds if it's crazy.

So the future here, I think, is in concurrent or non-blocking rendering engines. React has been working for a long time on this - it's called React Fiber. Other engines are also working on this... There's Ember Concurrency, which is not only for rendering; it can be doing other things. You're doing less than the UI thread, but it's not necessarily a piecemeal rendering of the DOM. But there's a good gist that I'll put in the show notes about what React Fiber is, when you can expect it... There's a talk at React \[unintelligible 00:29:18.00\] There's a team at Facebook that works on React, and they've been researching how to make this good for like two years, and it's finally pretty close.

The first version will be completely backwards-compatible, and then in the future they'll kind of like start adding more primitives for deferred updates. You can also imagine, you wanna update something that takes longer than a frame of time to do, and then you wanna update it again before it's even done, so you actually end up with this big, long stack of things that has to pop off each time, and it blocks... So if you're gonna change something and you haven't got to it yet, and then you give it another event to change it, it will just throw away the middle thing and be able to just go straight to the ending. All sorts of advanced architecture for rendering like that, which really brings Javascript rendering much closer to the way that it happens on native devices, which I think should make performance a lot better. I just talked for a lot of minutes...

**Rachel White:** Yeah, I enjoy the "Is Fiber Ready Yet?" (isfiberreadyyet.com) This is like the most helpful site for a technology that's going to be available soon but isn't, because it shows you all of the things that have been done already for passing tests, and then the ones that are close.

Oh god, there's children crying. Sorry...

Then there's also the failing ones, so if people were involved in it and wanted to fix it, they probably could. That's pretty neat.

**Alex Sexton:** Yeah. And kind of harkening back to the documentation thing, the site IsSomethingReadyYet - it goes back all the way to AreWeFastYet (probably the first one), and it was Firefox trying to catch up their rendering engine to V8 and Safari and stuff like that, I think... Or any of the SpiderMonkey versus V8, and stuff like that.

But then there was one for docs too, right? Do you remember? In order to get MDN listed above the W3Schools sites, it's like AreWeFirstYet -- that was it... AreWeFastYet and then AreWeFirstYet, and then there was kind of an explosion of AreWeSomethingYet. IsFiberReadyYet is a good one, too. Anyway, that was a tangent.

**Tracy Hinds:** Yeah, while you were talking, I was trying to figure out -- I am always curious to see when something like this is coming along if there's like a not-framework version of it, because I came from the tiny percentage of people who were trying to write Javascript without using a major framework, which turns into the no-framework framework... But I'm not seeing any incremental rendering packages that would be worth... I'd love to hear about it if somebody knows about it \[laughs\].

**Alex Sexton:** \[\\00:32:09.27\\\] The idea of incremental rendering assumes you're doing -- maybe the reason why is because it assumes you're already using a library to do batch rendering, right? So it's kind of like a thing to undo a thing you added.

**Tracy Hinds:** Right, and also there might just be too much going on.

**Alex Sexton:** Honestly, if you're from the world of web components and "let the web APIs do everything" and all that stuff, where you're rendering HTML and CSS inside web components and they work before the Javascript executes, the browsers already do rendering in this way. That would probably be your answer - don't use any framework... Use web components I think would be the standard's small, no-library version of this... Or very similar, I think.

**Rachel White:** Right. We're gonna go to another break.

**Break:** \[\\00:33:07.02\\\]

**Rachel White:** So we're back! Next, we're gonna talk to Tracy about what it is like to work for the Node Foundation, what's going on with Node, what does she do - she's just gonna tell us all these good things about her job and the community. So tell us what it is that you do exactly for the Node Foundation.

**Tracy Hinds:** Oh my goodness, okay. So I am the education community manager... I get to wear a bunch of different hats. It's sort of along the lines of what people -- a lot of people don't realize what the Node Foundation does or what it's like to work full-time in open source.

A couple things I'd like to say first is that there is not as much coding as you would imagine, and sometimes that's sad... But a lot of the focus is around people, and sort of working on helping people collaborate together, especially when it's really tough for them to do so. The other part of that - the Node Foundation itself is this mass of different groups that work together.

There's the Node Project itself, which is comprised of the TSC, which is the Technical Steering Committee. Under that (I believe that's the way it's structured) is the CTC - Core Technical Committee. Those are people who are working on the codebases in different working groups for the code that makes Node run, as well as documentation, evangelism and things like translation.

Then there's the Community Committee, which is very newly chartered. That is a place that was created that I helped get chartered at the beginning of this year, after we'd worked on it for quite some time, to give voice to community. So that's really interesting, because a lot of programming foundations don't have that level of voice.

\[\\00:36:01.00\\\] Community is a very weird, ambiguous, handwavy word because it's communities - it's a whole ecosystem of groups around the world, and it can be people who are writing NPM packages, or it could be projects like Express, or... The TSC is part of the community, as well. Then you have all of these events, like Node School and NodeBots, who have helped keep Node a thing.

When their code isn't changing a lot or we're not really hearing a lot from the core project itself, there are people who are still around the world, using this in production, and using this for fun, and they still need to learn this code, so those communities are really helping keep that there.

That's nice, because advocation also fits in there. As we're growing the foundation -- there's also the board. The board is this group of corporate members and representatives from individual members of Node, who come together on a monthly basis and work together in between those meetings, to sort of figure out and support the project the way it needs to. Their responsibility is more towards legal, making sure that the foundation is protected - because I think a lot of people don't realize that as individual programmers, we put license on things for a reason, and part of that is that you can be sued. Some of that liability is provided by the foundation... That and administrative stuff; helping to encourage companies that they should have people who are writing Node full-time in their offices. And that's really nice, because that means that a lot of us have jobs working in that, because that can be hard to come by in other programming languages, and I think a lot of people take that for granted.

**Rachel White:** Yeah, I was gonna say... We work together, IBM Watson, and you were trying to help shape a lot of the community stuff while we were there. And then when you had the opportunity to join the Node Foundation, it just seemed like a perfect fix. I know how much you generally - or not generally, GENUINELY - care about users and community, and fostering growth of people that want to further just get more people interested, and then also help strengthen what's already there.

So I guess touching on that, what kind of things do you do at the Node Foundation to maybe help spread the word about Node to existing developers that may not be familiar with it, and to people that are starting out? Because isn't Node the largest-growing open source community that we have right now, out of any language?

**Tracy Hinds:** By sheer numbers, yes. There's all these different ways to measure it. It can be like interest... Node - a lot of people are really interested in writing it, and there's like a volume of people... Just by that quantity, Node is really popular. Then there's really cool orgs like Rust, that are doing a really great job with community and documentation and teaching, but there's just way less humans in that so far.

For us, it's that we have this great opportunity and a lot of people wanna learn, but we have to make sure that -- as we've grown, we have to be more deliberate about what we're doing, because we're not just growing to grow.

We want the codebase to be good, we want it to be stable, we want more people to wanna contribute, so that it sustains itself, and part of that is making it a better place to hang out and participate, and also making it easier to write that code.

\[\\00:40:09.17\\\] There are concepts in Node that can get incredibly complicated and the learning curve can get steeper, but you have to know how to write Javascript to write Node, and I don't think learning Javascript is that difficult either, but there is definitely a lot of places that we can work and improve, both in Javascript onboarding, as well as Node onboarding, to make that better.

A lot of this year for me, the roadmap that I wrote out for education, is education and community. We need to work on the Getting Started. There are other programming languages I'm really envious of, because it's a huge investment. You have to spend time on multiple people working on this, on writing curriculum, on writing getting started guides, on working on the website so that it is easily discoverable to find these things and having it in official places.

Again, a conversation I was having this week was around supporting the community in a better way. We notice that our online chat mediums like Slack and IRC, the survey data showed us that most people don't think that it's good quality, but they don't know where else to go to have that kind of interaction to get help. So I had a really enlightening conversation with the Community Committee yesterday about maybe, instead of choosing Slack or IRC as an investment for that, that the problem is not so much -- we need a place to go hang, and talk about LeCroy... It's like, we need a place where we can go ask questions about Node and get an answer that helps us, so it's support. It's actually like what companies are using, right? Some companies use Slack, some use IRC, but if you have questions and you need to learn, who do you go to? Not everyone has an awesome network of developers that they can ask questions to, so we need to figure out a way to provide that.

**Rachel White:** That is a good point. I think that it's interesting to point out too that you can be a contributor to shape the Node ecosystem without contributing code. One thing that I have always appreciated with what the Node community does is they just want everybody to help; they want people that can be technical writers for stuff, they want people that have done community building before or have done evangelism before, to just come in and make things more welcoming. By doing that, I think that the codebase will eventually be able to be more accessible to a lot of entry-level or more junior people, as well.

**Tracy Hinds:** Yeah, this is something that we -- everyone talks about like "We need better docs." Well, there's only so many hours in the day, and a lot of times the people who need to be writing those docs are the people who are also writing that code. The person writing that documentation needs to understand what they're writing about, so it's really tough because we need to find a way, as you've said, to include more people with the talents that they have.

Technical writing is a really special skill, and we need more of that. We could also use project managers, we could also use designers, because design is a better user experience. It's also aesthetically more pleasing to people, and it can attract people to a project, it can also help display information in a different way than just words on a page... And then there's folks who maybe have a skill in technical writing via translation, because that's not just gonna be copying and pasting and changing out the words, it's the nuance of the different languages that you've got there as well. And we need all of that, and so many projects need this.

\[\\00:44:28.27\\\] You need to start approaching it from the point that of course developers are important to the project, they're writing code, but maybe we've ignored the other roles for a bit. So it's nice to be able to have this making space for everyone there, and saying that "We need all of you."

**Rachel White:** Definitely.

**Alex Sexton:** Node can be a little bit difficult to jump right in, even if you wanna write docs and you're a good technical writer, but maybe a good advice is that there's a long tail of projects, and Node's documentation is better than, let's say, 99.5% of them, or something like that. There is a project that you use every day that you know well that needs better documentation, so if you wanna just get your feet wet, go try to submit a pull request that's just docs for someone. I can tell you as someone who maintains a few libraries, I immediately merge every pull request that looks like that... Unless the information is wrong or whatever, but then I just work with the person.

But it's so helpful when other people come and help on your project. So if you have projects - even multi-thousand star GitHub projects have some lacking documentation, and it's pretty rare for someone to just say like "No, I don't want more information on how to use this." So get your feet wet there, and then work your way up the ladder, if you want.

**Tracy Hinds:** Yeah, I mean the first thing that I look for when people are asking to help out with education is - and that's a little secret - I go and look at their repos and see if they've documented anything, and see how they're writing that out. I can just tell so much more about your project if you've documented it, and if there's no documentation, I think that also says something, too... And maybe unintentionally, but if you know enough at least that you've accepted pull requests from people who wanted to help you, you're encouraging people to help maintain projects, and you're doing a better job too, as a maintainer.

**Rachel White:** I was talking on muted, but I said "Definitely." So what is in your future for the rest of the year? Other than all of the things that we've just talked about, are you gonna be going to conferences to try and help out? Because I know you were doing a lot with that last year. What are you gonna be involved with for the rest of the year that we see going forward?

**Tracy Hinds:** Well, the big focus right now - my world is very much centered around shipping the Node certification. This sounds a little backwards, but after that it's going to be focusing more on Getting Started in Node, and making sure that these resources for people to get to the point where they feel like they're confident in taking the certification exam - we have to make sure that that's in place. And also looking towards programs that are providing these things.

Informal education is how most people have learned Node up until this point, and there are exceptions to that, such as training, but community colleges, universities - they're not really teaching it. There is a very small subset of code schools who are teaching Node as well. I love Javascript, I love full-stack Javascript, I love the luxury of not having to context-switch, so I wanna see more people be able to do that, because I really do think that that helps more people learn. So that's the rest of my year, among many other things.

**Rachel White:** \[\\00:48:18.29\\\] Cool, alright. Well, I think that's gonna be all that we're gonna talk about for our segments, and now we're gonna move on over to our picks of the week. Alex, do you wanna go first?

**Alex Sexton:** I'd love to go first. My pick this week is called Prettier. It's by James Long (JLongster). He put out Prettier a little while ago... It is a code formatter. Much to everyone's surprise, there are a lot of code format checkers, ESLint and stuff like that, or there used to be JSCS, and JSHint would do some of it... But there wasn't anything that could take Javascript and absolutely always perfectly re-render that Javascript in the exact way that you wanted it to be rendered based on your rules.

There's some prior art with GoFormat and ReFormat - that's from Rust, or something... Anyways, it is a code formatter, and it just went 1.0. It's actually already in use by a bunch of very important -- let's see: React, Jest, immutable-js, Haul, Oculus, Cloudflare, I think Facebook uses it... A ton of people already use this and it's not very old. So it just went 1.0, it just gained the ability to have some options around whether you want semi-colons and a few other different things, which really sparked some 2009 conversations on Twitter... But regardless, I think it will end up being a pretty standard tool that everyone just includes. And you can kind of get rid of the notion that anyone could ever commit any code that didn't follow your style guide. It's cool.

**Rachel White:** Tracy, you can go next.

**Tracy Hinds:** Sure, okay. My pick is Free Code Camp, and I think at this point a lot of people have run into it in some way or another. They're producing so much content which I find really helpful, they have really great blog posts... But in itself, it's sort of an online bootcamp and it has a ridiculous amount of coding challenges. I like the way that they've set it up, because it really allows people who are starting from nothing or next to nothing in terms of programming knowledge, and it builds you up with structured challenges. You can actually build up to getting certifications for frontend and backend and dataviz.

\[\\00:50:58.26\\\] Once you've met all of those hours - and this is free, as far as I can tell; I've not experienced a paywall of any sort - you get to move on to working on real-world projects, pair-programming with somebody else who's at the same point that you are. And this includes - you get agile user stories, so you have to learn about that, which I think is really valuable for getting a job. And the work that you're doing is on real non-profits who have requested this work happen for websites or their apps. After that you get a certification. The team at FreeCodeCamp is actually helping you with interviewing challenges as well as part of this, and I think at the point where you're done with this, you have over 2,000 hours of work invested in this, so it's not a joke.

I love how it covers the full range of skills and challenges that you would face as a programmer getting started, so I think this is really powerful.

**Rachel White:** Alright, my pick of the week is actually from Stripe, and it's not me sucking up to Alex. They are starting this new digital magazine publication called Increment, and the editor-in-chief is Susan Fowler, who we know left Uber and is now going to be working on this publication that is essentially going to be a quarterly publication that deals with the ins and outs of writing code and dealing with distributed systems, and the interactions between teams and version control and code reviews...

I think that it is going to be really interesting and really insightful to people that may stick to their one siloed team and don't necessarily interact with other teams, to get a really insightful and exciting way to find out how good, effective teams are structured and can work together successfully.

That's it for this week, we're done!
