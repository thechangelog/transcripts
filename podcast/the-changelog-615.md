**Jerod Santo:** Well, we are back, with David Heinemeier Hansson. For the fourth time. DHH, you're always welcome on The Changelog.

**David Heinemeier Hansson:** Thanks for having me back once more.

**Jerod Santo:** Lots to talk about. Lots to talk about.

**Adam Stacoviak:** Where to begin?

**Jerod Santo:** Questionable even where to start. There's so many things. Let's start with Rails. I feel like Rails is having a moment, again. Do you get that feeling too, or...?

**David Heinemeier Hansson:** I totally get that feeling. I think Rails 7 was a real turning point. We set some new ambitions, and really took a different turn from a lot of the direction that has been followed otherwise. And now with Rails 8, we've doubled down, tripled down on doing things differently... And I think that's just resonating. Not that Rails is suddenly the thing that makes sense for everyone in every situation, but it is more clearly defined what we stand for, and how we're pursuing it, and I think that part is resonating. And I also think there's now a generation of developers who've been cooked in the JavaScript soup for long enough to realize that maybe it's time to look elsewhere for developer joy... And that's sometimes when you just have to wait.

If I look back on the last, let's say, 10 years of web development - 10 years ago you could have had some really nice stuff and it wouldn't have mattered, because the React train would have pushed everything out of the way and nothing would have been able to live beside it. And now that a bunch of people have gone through it, they've realized "Oh, do you know what? There are some areas we don't like it as much. It doesn't really fit here", or I just don't enjoy working with it. The conversation is suddenly open again. The window for folks to explore other technologies, including things that have been around for quite a while like Rails, that now has 20 years under its belt, has suddenly opened. And I think for me having the patience to wait for the pendulum to return to some of your positions is one of the real joys of having been around for this long. I've seen that pendulum swing a couple of times on some of these major evergreen topics that we love to discuss, like static versus dynamic typing, or anything else like that, where you can just see that pendulum, and it swings and goes to the one side, and then just give it two years, it's going to come back past you. And if you just stay consistent and you continue to elaborate on the things you believe, and advocate for techniques that you think are good - you know what? Eventually the pendulum is going to pass you. And then when it does - which I think is what is happening right now with Rails; the pendulum is right in our orbit - also have some humility, enjoy it for the limited time, and realize that in two years it's going to swing somewhere else.

**Adam Stacoviak:** I guess so. If you had to, say - let's take a note from a town hall recently. If you had to say five nice things about JavaScript, what would it be? \[laughter\]

**Jerod Santo:** That's a good one.

**David Heinemeier Hansson:** I don't actually have a hard time doing that. And I often say this with a bit of a smirk, but JavaScript is my second-favorite language. It's a distant second. Ruby is by far my favorite, but I enjoy JavaScript. Now, what I'll say with that is I enjoy the JavaScript that I get to write without all the build stuff, without all the pipelining... I enjoy the JavaScript that I can run in a browser, a modern browser, the ES6 plus stuff, with import maps, and all these other things that I enjoy. That's the version of JavaScript I enjoy.

\[07:59\] I don't really like the version of JavaScript with all the types crammed into it. I'm not a big fan of TypeScript, to put it perfectly blunt. But JavaScript as it exists in browsers today is actually kind of awesome. Now, I don't want to write my backend in it, but - do you know what? If I had to, for whatever reason, if Ruby didn't exist, I probably could do it, and I wouldn't be that discontent about it.

I think JavaScript is actually good. I think especially the fact that now we have the basic structures for object-oriented programming... I think this is one of the wrestling matches that have been going on in the JavaScript world for some time. It's like, how much do we even want object oriented programming structures in our language? Now, it's there. It's in there with ES6. So I get to write JavaScript that's quite similar to Ruby, just sort of a -- I don't know, a slightly lesser version, but existing in the same paradigm, in the same universe... And I enjoy it.

I mean, we have released Hotwire, which includes Stimulus, which is a framework for building interactive components... And then we have Turbo, which is a way of sort of getting away from writing as much \[unintelligible 00:09:08.10\] but combining those two things together, the JavaScript I now write for the web applications we build at 37Signals - it's a pleasure. I'm not like "Ah...!"

If you had asked me, I don't know, 2011, 2009, I would have gone like "I can't deal with JavaScript. Give me some CoffeeScript, give me some other syntax that kind of makes this passable." That's not true anymore. JavaScript today is good.

**Adam Stacoviak:** What is the JavaScript soup? Describe that. It might be obvious, but what is the JavaScript soup that people have been stewing in, as you said?

**David Heinemeier Hansson:** Well, there's the framework side of it, and then there's the build side of it. And let's start with the build side of it. The part of JavaScript I've really come to not enjoy is this idea that a lot of projects were set up with about a million dependencies, and if you left those dependencies alone and didn't stay on top of them for about five minutes, the whole thing just fell apart. This was actually the main motivating factor for me on the whole no build train. I went back to a project that I had written a bunch of JavaScript for. I think I was trying to move some JavaScript from maybe Basecamp to Hey. And that JavaScript depended on a bunch of things, and I wanted to move it over into a new project, and the dependencies just clashed. I was just stuck in this super-fight. There's so many things, there's so many packages. My node modules folder was, I don't know, 2,000 deep. And I just went "This is so frustratingly difficult to take a piece of software that I myself wrote not that long ago, and to bring it forward to something new, and to make it work.. I don't like that." Then the other part of it is all the sort of mechanical steps that you need.

I think things have gotten a lot better, but at the moment of peak frustration I had on that project we were on WebPack... And I think WebPack was amazing for what it was able to do at a certain period of time. And this is one of the reasons when I say soup, I say it halfway lovingly, because I have also come to accept the reality that a lot of progress depends on like an awkward phase. It depends on a complex phase. We're trying to do something new, and we don't yet know how to do it simply. And the only way we can do it right now is complicated. And I think JavaScript really went through an awkward phase in that regard. WebPack was part of that awkward phase. It was highly complicated to set it all up and get everything working... And now today we have things like ESBuild, and other tools that I think are following not just a better approach, but a better philosophy.

\[11:51\] ESBuild, for example, resisting a configuration file... I don't know, is that still true? I'm not sure. But when it first came out, they were like "We're not doing a configuration file." And I was like "Oh my God, that is beautiful." What an amazing constraint to put upon yourself, that the tool has to be so simple that all the options I need, they can fit on the command line.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** By the time we get into the WebPack configuration files we've actually already lost the plot. I love that kind of stuff. But even so, I don't enjoy the build pipeline. So the key component to getting out of the soup is to leave all that behind. We've been able to do that with that \#nobuild phenomenon, where we write to JavaScript and the file as it looks in my editor, that's the one we ship straight to the browser. There's no transpiling, there's no compilation, there's no chunking, there's no tree shaking... There's none of these techniques that were for a hot moment taken for granted, that you absolutely needed these things to build modern web applications, and you needed them to be fast, and whatever. And I look at that whole orifice of complexity and I go "You know what? I'm glad that there at least now exists an alternate path." Maybe there's some apps, and if you want to write it like that, you love TypeScript, and you need a compile of that anyway - okay, fine. I mean, peace be with that, as long as you enjoy it. I didn't. And as long as I have an alternative path here that doesn't include any of that nonsense, and I can just write JavaScript in my text editor - not even my IDE... I mean, I think there's a whole discussion there, too.

**Jerod Santo:** Sure.

**David Heinemeier Hansson:** I don't need autocompletion. In fact, I find it annoying a lot of times. I know that's not a majority position. Most developers will be like "What do you mean I can't autocomplete my things in VS Code?" But there's different ways of enjoying programming. And for a while, I felt the way I enjoy programming, which is mainly through a text editor, where I ship things directly and I don't have a ton of moving pieces, was not available in the JavaScript world. Like, that path was just blocked. It had hit a dead end, and the only way to do it was this other way, and I was a bit miserable there. And now I'm no longer miserable. I get to write for the web, I get to JavaScript, and I get to do it in a way compatible with how I like to program, which is just a wonderful place to be.

**Jerod Santo:** Let's hone in on that \#nobuild, because there's a big debate around that, and I think it's a microcosm of a bigger debate, which seems to be this dichotomy between developer experience and user experience, and like which one you put first. I kind of sit on that fence and I can see both arguments... I don't know have strong opinions. You obviously have strong opinions about darn near everything. So to somebody who says "Well, great, you're not going to bundle, you're not going to chunk, you're not going to tree-shake. You are putting yourself first." You're not putting your user first. H2 is supposed to bring us this reality. It hasn't. Look at the performance benchmarks etc. What's your response to that argumentation?

**David Heinemeier Hansson:** There's two aspects of that. One is facts, and the other is opinion. And I think when it comes to facts, a lot of people sit with a collection of facts that are simply out of date. They have not updated their premise as to whether things like HTTP2 works or doesn't work. Or they're relying on synthetic benchmarks that are not representatives of, for example, how I write modern applications. So I think getting your facts straight -- and sometimes it's not that your facts were wrong; like, they were accurate in 2015, in 2017. They're not accurate in 2024, because a lot of things have changed. And I think that's the thing that has excited me about developing for the web and using JavaScript in the last three to four years. The game has really, really changed.

HTTP2, of course - that predates that. And I remember the benchmark most people do refer to. I think it was Khan Academy, or something, that wrote something up from 2015, and they used a benchmark set where you're like "Oh, if you're including 2000 files, this is what happens." And I go like "Yeah, yeah, don't do that. That sounds painful." Like, why would you -- and it comes into the same idea of... If you're accepting the premise that JavaScript has to have this insane dependency tree where your Node modules directory is like two gigabytes full of hundreds of thousands of files...

\[16:18\] Yeah, that model of how to build for the web is ill-compatible with what I'm talking about. But you don't have to build like that. You don't have to have a Node modules tree that has hundreds of thousands of files and gigabytes of space. You can build in a different way. And this is how we build things at 37ignals. If you look at the main app where I really got to push the envelope on these topics, it's hey.com.

So hey.com is an email client. We compete with the likes of Gmail, or Outlook365, whatever. So we've got to do all the email things. And email, I think for a long time correctly was held up as an application that needed a very high level of fidelity for the user interface. It needed to be fast... It was sort of a desktop-y app on the internet. And people, I think, erroneously thought for a long time that the only way you could build something like that was with literally megabytes and megabytes of JavaScript. If you look at Gmail and how much they download, I think uncompressed it's 28 megabytes of JavaScript that it takes to load the whole Gmail interface... And I just go like -- I don't even... What? 28 megabytes of JavaScript? How many -- is that decades of man years that's invested in producing 28 megabytes of JavaScript? That just sounds wild.

And I also recognize, if that's the domain you're playing in - you have 28 megabytes of JavaScript - you've got to use all these techniques, that the 28 megabytes probably came from 100 or 500, and it was tree-shaken, and it was chunked, and it was all these other things.

I think hey.com, when we launched at least, had like 80 kilobytes of JavaScript. And that was including Turbo, it was Stimulus, it was about 120 Stimulus controllers, I want to say, it was Trix, our WYSIWYG editor... It was that bundle of stuff and it was -- I mean, just orders of magnitude less. And it did not depend on half of npm. It depended on very, very few things. And those things were sort of neatly packaged up. There was a handful of packages.

So when you build things that way, you end up with an application that might have - let's say for hey.com we have about 100 JavaScript files. That's not a hard problem for HTTP2. It just isn't. Again, the 28 megabytes, if you segmented that into individual files, and you were trying to download, I don't know, thousands and thousands of individual files, which was the false premise as I saw it that that original Khan Academy benchmark was based on - okay, I don't know what happens there. Probably there are some trade-offs. Are the trade-offs as clear as they've been presented? I also don't think so.

The fact is when you take a large bundle and you break it into smaller components, you get very different cache dynamics. Now, this is one of the reasons why when people use bundling, they also use chunking. It is a way to address the rate of change such that when you make one change you don't invalidate the whole thing, and now the user has to download it all again.

The way we build things - we have really optimized that part of the equation, that maybe you download a... Or not even maybe. You will download more files. Those files are tiny, but they are set for a far future expiration. They will last on your desk for however long the browser allows them to last, because most of them don't change. Most of the rate of change is in new functionality that's being introduced, or like one file here, and so forth.

So the whole premise that we're choosing between developer experience or user experience is false when you look at the whole picture of it. It's not false in the sense that I don't want to change anything about how I write my application, and I want all these dependencies, and whatever. Okay, there are some trade-offs. We don't have to do it like that. And we're presenting one alternative. Well, not even one; we're writing all our applications like this. We haven't started anything new that was using a built pipeline for four years, I think, maybe now at this point.

\[20:18\] We've made a bunch of application \[unintelligible 00:20:19.20\] we have several in development - they're all going all-in on no build. Not just on the JavaScript side of things, but also excitingly on the CSS side of things. Style sheets had that same phenomenon. We used Sass for many, many years. And Sass has a complicated build pipeline as well. And now we just use the CSS that the browser can ingest, because the browser's caught up on CSS, too. Now you have nesting, now you have all of these parent selectors... You have all the things that people normally reach for when there's build pipelines.

So it's just a false premise, and I think some of it is based on, as I say, facts that are out of date, and then some of it is based on "Okay, if you want the TypeScript thing, and if you want a lot of--" If you want React, for example, if you're all set on that - yeah, there are some different trade-offs. Maybe you can't make applications how I make applications. But then we can't make it that categorical, that "Okay, how we're building it means the trade-off is in user experience." It's just not true.

**Jerod Santo:** I think that's fair. If we go back to Rails 8's big moment and this pendulum swinging back, you said earlier that Rails has a set of opinions which are contrary and are going against the soup that we currently have existed in, and people are starting to look outside of that. Could you list off a few of the things that Rails believes, whether they're 20 years old now, or these are new ideas that are coming out with Rails 8, that really sets it apart from everything else?

**David Heinemeier Hansson:** Yes, let's start with the things that are evergreens, things that have been true since day one. The number one thing is probably the full stack ambition. That Rails doesn't try to be like one library you slot into a vast collection of other libraries that you have to go around selecting between a bunch of choices. Rails ships omakase, as we say. Chef's preparation. The entire menu has been set for you. You can do substitutions. You don't want this part, take it out. But when you show up on day one, someone has thought through all of the components that you need to build a modern web application, and has made sure that those components actually work together. That they've been configured to work together. You're not going to find "Oh, I wanted to use this thing, but it fits really poorly into the other thing." And now - well, that's up to you. You've got to figure out how to solve that problem.

We take a very ambitious approach to the web problem. We want to solve everything in one box, whether it is talking to a database, whether it's generating HTML, whether it's processing inbound requests, whether it's handling job queues, and asynchronous tasks, whether it's dealing with WebSockets, whether it's sending email, whether it's receiving email. Like, there's a lot here, actually, if you look at the total scope of what a substantial modern web application has to deal with. And I have depressingly found that when Rails was introduced, a lot of other people were also interested in the whole problem. If you look at someone like Django or other contemporary frameworks, we had the same ambition to try to tackle the whole problem. And somewhere along the way, I think particularly in the JavaScript community - I don't know if it was a lost nerve, or because people just thought it was too big of a problem, but we ended up in a space where there's a bunch of libraries to do all of those things. But it is your job as a developer to figure out how all this stuff fits together, works together, is optimized together... And then you end up in this unfortunate situation where every single JavaScript app seems to be like this bespoke collection.

\[24:00\] So jumping from one app to another, if you get a new job or you move between projects, it's actually quite difficult, because "Oh, we use a different ORM mapper here than I did in the last project, and here we use this frontend web framework..." So there's very little retained value from the skills you're developing in certain parts of the whole pyramid of libraries and frameworks you need to develop. And that is then exacerbated by the fact that the churn in the JavaScript world seems just to be turned to 11. Things go out of date instantly. I mean, sometimes they go out of date on developer Twitter, and that actually has very little bearing on what people are actually doing... I thought a great example of this was - someone had done a benchmark between something in Rails and ExpressJS. And the first thing the comments showed up to say - "No one uses ExpressJS anymore. They use Nuxt, or this other thing, or the third thing." And then I was like "Oh, wow, I thought ExpressJS was still the thing." And I thought, "Okay, maybe it's out of date." Then I looked at this other chart...

**Jerod Santo:** Everybody uses Express.

**David Heinemeier Hansson:** Everyone uses Express. Except for like the 10 people who comment on stuff.

**Jerod Santo:** There's like Fastify... Yeah, there's a couple of them.

**David Heinemeier Hansson:** There's both the reality of things churning incredibly quickly, and then there's, I think, also just a culture that churn is actually amazing. That we should all be using frameworks that were invented six months ago, otherwise they'd be horribly out of date and it's not best practice. And we have to accept that that level of churn has an immense cost. And in the Rails community we've said "That's not what we're interested in. We're interested in solving problems, and we want to use the best techniques we can do to solve them, so it's not like we're bound to the past." But if you learned how to use Active Record in like 2009, 15 years later those skills still have value. You've invested in something durable

And that is a dividend of trying to solve the whole web problem. We're not constantly replacing every part of it. So you can build on top of skills that you can have, and you can have the compound value of that.

So for Rails 8, we introduced a bunch of new things. There's some new things to learn. But we're not wiping everything underneath that. It's not a clean sheet of paper of "Now learn everything over from scratch." I think there's too much of that in the JavaScript world. Or at least there's not an appreciation that certain problems, once they're solved, not just well enough, but good - yeah, it'd be nice if we could leave some of the pieces of the pie just intact from one version to the other.

So that's one thing of it. Rails is wedded to the idea of having ambition for solving the whole problem. So we have all the frameworks, we solve frontend, backend, all the stuff. The other thing - and this is one of the things I've been harping on lately - is the idea that we want to solve the whole problem, and that solution has to be able to fit inside the mind of one developer. This is a one-person framework. I want Rails to be so powerful that you can basically build anything in it, but I also want the toolkit to fit inside not only my head, but anyone's head, such that someone starting tomorrow, they want to build a competitive, modern web application - they can do it alone, by themselves. They don't need these thinly sliced pieces of expertise. They don't need a frontend pipeline engineer on day one. They don't need even splitting frontend from backend in terms of engineering. They can say "Well, I just have a developer, and at some point when I build a bunch of stuff, maybe I have two, but they can do all of it." And that allegiance to the programmer, the web programmer as this integrated unit, someone who's dealing with the whole problem, I also find is quite rare.

Again, in the JavaScript world, they seem quite keen on separating frontend from backend, and here you have your GraphQL experts, and then over here you have your React experts... And maybe they talk, because there's some coordination, but they're not the same person. Rails really wants that to be true as late as possible.

\[28:13\] So when you start on day one, you can hold it all in your head. By the time you arrive at Shopify level, and you literally have thousands and thousands of programmers, and you're processing somewhere between 10% and 20% of all commerce on the internet - yeah, you can have some specialists. Of course you are. It's about delaying that moment.

And I think the Shopify example is actually great, because when Tobi started building Shopify - one Tobi.

**Adam Stacoviak:** One developer, yeah.

**David Heinemeier Hansson:** One developer. It was one Tobi that took Snowdevil, the original shop that he built, and turned that into Shopify. And then by the time that became like a $100 billion business - yeah, it was a large team. But it's the zero to one transition that killed the vast, vast, vast majorities of attempts at starting a new business.

It's not that most businesses go out of business by the time they're 100 billion. In fact, they get quite resilient at that size. It's that they go out of business because they don't produce something valuable that customers actually want to buy, at a timeline before they run out of money, or patience, or savings.

So when we have to choose in the Rails world who to optimize for, I optimize for Tobi on day one, not Tobi on year 12. Right? Now, what's fascinating with that choice is they're not actually so much in opposition as you would think. A lot of the optimization for keeping Rails small, slim, and integrated enough that it can fit inside one developer's head is also the stuff that makes it a joy to use, even at scale. Now, there are new problems. You have different problems when you have thousands of developers. And sometimes you even deal with frontier problems. You deal with problems no one else has had before. That to me, by the way, is the best definition of web scale, that you're hitting thresholds that no one's seen before. You actually literally have to invent some stuff. You have to invent usage at a scale that no one has done before you.

So they have those problems to deal with, but they also have a base that's really solid, that they can build on, that is welcoming to new developers, and can be a joy to use. I mean, it's hard to make a codebase with 5 million lines of code - I think that's what Shopify has at this point - as enjoyable for everyone to work on as one that's like 10,000 lines of code, or 5,000 lines of code... But you can keep a holder connection to that for longer.

So I think these are some of the evergreen, controversial parts of the Rails equation that are still true. And what's so fascinating to this for me is I thought it was obvious when I started Rails that full stack was the way to go. That you should optimize for the single developer. That convention over configuration was sort of a fundamentally better stance than the old way of you have to spend days setting things up. And I therefore thought that the entire developer world would come around to those principles. And Rails to some extent would just be kind of just a step on the way, and others would take the same ideas, and they would put those ideas into new incarnations, and Rails would have contributed to that evolution of the industry... But alright, not that we were going to be here 20 years later. And I've found the opposite to be true. I've found there is less purchase, to some degree, of these fundamental ideas today than there was in 2004. Now, some of it is that our industry is like a hundred times larger than it was in 2004.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** \[31:43\] But also, some of it is that these ideas are fundamentally at odds with how a lot of programmers think about the problems they're solving. They don't actually want someone to put the whole toolkit together for them. They want to do the bespoke thing. They don't actually want their skills to compound over time. They want to learn something radically new every six months. They don't necessarily care that much about an application they wrote five years ago still working, because they change jobs every 18 months. That, by the way, is the STDIN our industry.

**Adam Stacoviak:** So true, yeah.

**David Heinemeier Hansson:** So they don't get to pay the penalty for some of these decisions. So therefore we end up in a world where a lot of the things that makes Rails special is actually not what developers want.

**Jerod Santo:** Fascinating, fascinating. There are, definitely -- so I've been around the entire time as well, and there are people and projects that came after Rails that list specific things that Rails does in their inspirations. I think convention over configuration, for instance, has not just stood the test of time inside of Rails, but has actually permeated other projects. And then, of course, there's always those that rail against - pun not intended there - whatever is currently the status quo, because that's how they get the likes, the contracts... I mean, what's new is what sells. And so we're very much highly motivated to do that.

**Adam Stacoviak:** The unknown, yeah. Absolutely.

**David Heinemeier Hansson:** And I also think some of it is generational, and that is the fun part of it being around for so long. You see things in fashion, for example. Whatever, mid-2000s - all the socks, they had to be ankled socks, because we went from a phase where people used tennis socks, and they went up high.

Do you know what the most uncool thing to wear now is? Ankle socks. Do you know what the cool thing is? Tennis socks. Some of it is just like the generation that comes afterwards - they don't want to do the thing you did.

**Jerod Santo:** They want to do the opposite thing that you did.

**David Heinemeier Hansson:** They want to do the opposite. And I think that actually, to me, explains a large part of the affinity for functional programming. People went like "Oh, the old farts, they liked object-oriented programming. We've got to pick the other one." Same thing with dynamic typing versus static typing, right? That's that pendulum I was talking about. A lot of these things swing between two things. Fashion - ankled socks versus tennis socks. Jeans that kind of go out, or go in skinny jeans. They're also -- they're not hip. I mean, that's the worst thing to wear right now, right? So they swing. And you can look -- if you zoom out far enough, you can see that pendulum move back and forth between two points. Not 25 points... It's not that we go like bouncing all over the place. We just go from like "That generation had that thing they liked", then we swing back and we skip one. And this is how we help assert our identity as new people coming up.

Sometimes it kind of -- it's funny. And I think what's most funny about it is when there's no degree of self-reflection that that's what's going on. "No, no, no. Really! Ankle socks just are cooler!"

**Jerod Santo:** "They're just better."

**David Heinemeier Hansson:** "Wait, what are you -- no."

**Adam Stacoviak:** What kind of socks do you wear, David?

**David Heinemeier Hansson:** You know what? It's so funny, because I've used that example a couple of times, and now I do look at my ankle socks and I go like "Oh my God, I've gotten old. I need to change my entire drawer now with the cool tennis socks."

**Adam Stacoviak:** I'm wearing ankle socks, so... No shows, basically.

**Jerod Santo:** Oh, no shows. Well, I mean, that's a good move, because then people are thinking "Does he even have socks on?" I mean, "No sock or cool sock?"

**Adam Stacoviak:** Yeah. They're like "He's got sticky feet in there. Come on." \[laughter\]

**David Heinemeier Hansson:** But the other thing is you can just wait long enough, right?

**Jerod Santo:** That's right. Wait it out.

**David Heinemeier Hansson:** And this actually goes \[unintelligible 00:35:05.23\] Just wait it out. Give it another five years, we're back to ankle socks.

**Jerod Santo:** There you go.

**David Heinemeier Hansson:** And this is one of the reasons why when I look at some of these big things like functional programming versus object oriented programming, or static typing versus dynamic typing, I'm also like "Alright, do you know what? Right now, to some degree, my preferences - they're not the vogue thing." Functional programming has more of kind of like the hot, new thing, which is \[unintelligible 00:35:29.29\]

**Jerod Santo:** Yeah. Clout right now. Yeah.

**David Heinemeier Hansson:** Both of these things have roots going back decades and decades... And then the static typing now too really has a moment and a lot of people \[unintelligible 00:35:38.22\] I'm like "Yeah, do you know what? I'm just going to sit here and wait it out, and in three years object-oriented programming with dynamic typing is going to be the hot new thing."

**Jerod Santo:** Yeah. And you'll be here. You'll be here waiting.

**Adam Stacoviak:** That's right.

**Jerod Santo:** \[35:52\] Something else that's old, which Rails 8 is making new, which I'm excited about, is all these SQLite integrations into making -- doing a lot of the stuff where you used to have to rely on a Redis, or a Memcached, or something. Or in my case, a lot of times when I was deployed to Heroku, somebody else's service, I felt like one of the things that for me was grading with Rails is I would get to production, and then I felt like -- because I was building apps for customers. And then there'd be all these additional services that they would have to also add in in order to run that thing in production... I kind of felt bad about that. And so I liked, for instance, what Elixir was doing, where you could just run background jobs without having to have a Redis, or something like that. And Rails 8 is like bringing that into Rails via SQLite, which for the longest time - and maybe this is your fault, David, because unintended consequences, right? The convention of having SQLite as your test database, but using MySQL in production, which you probably decided that back in '04... For a lot of us, it made us think SQLite's a toy. You don't run that thing in production. But for use cases, it makes sense. You certainly can. And so now Rails is kind of embracing SQLite to do some stuff. Can you tell us the details?

**David Heinemeier Hansson:** Yes. So SQLite is exactly one of those beautiful moments to me where we take something old, that in a past context with an old set of facts could not be used for the things we use it for today. If I had tried to use SQLite in the way we're using it now in 2009, when the underlying technology was a spinning disk...

**Adam Stacoviak:** For sure, yeah.

**David Heinemeier Hansson:** ...like the Rust compilations that were the thing before we had SSDs and NVMEs and so forth... It wouldn't have worked. SQLite would not have been a great storage for caching, for example. It would just have been too slow. You have that freaking reader head on those disks that have to move. It just can't do it at the same pace that RAM can do it.

So SQLite, I think, started out with a certain context, and that context was largely embedded situations; you can put it inside your app for a single user - great, fine. And it was held back by this constraint that the underlying storage is quite slow, as it was before SSDs, and then also that compute was quite slow. So the amount of work a single machine could do in, say, when we started... The first box we started Basecamp on was a one-core Celeron 2.8 GHz machine. That machine today is two orders of magnitude slower than what you can buy for the same amount of money.

That means what in 2004 required 100 machines, and the coordination of how they access a shared data store and whatnot, can now be done by one computer. And there is a vast, vast simplification possible when you can remove the entire network layer of distributed computing. When you can run an even large application on one box. That is really, in many ways, kind of the golden ticket for simplicity, is to run one box. And that's what SQLite is optimized for. It is optimized to run on a single computer, on a local drive, and then it can actually be staggeringly fast. Almost unbelievably fast, expectation premise busting fast.

This was one of the things we found out when we started doing these benchmarks, is "Holy smokes, how is it that SQLite, for example for the cache use case, can be in the same realm as a Redis, that's moving things around purely in memory?" That's just incredible. And then it's even more incredible if you introduce that Redis or Memcached or whatever lived on another box, because now you're limited by the network layer... You take the network layer out and you're writing straight to disk... This is just incredible.

So real a-ha moment for me when you started putting all these pieces together. Computers have gotten so much faster. Storage have gotten so much faster, and so much bigger. I mean, you can now -- terabytes of storage is trivial in terms of cost. Again, wind the clock back 10, 15 years, it was really expensive to get terabytes of storage. And then it was also slow.

\[40:12\] So the fundamentals have changed, and Rails 8 is trying to reap the maximum value out of those changes, and rediscovering the best things from the past that we could only use in certain contexts, and then go "Well, things have changed. Now the context is so much wider." SQLite is no longer just a development database. It is a completely credible production environment for a lot of applications. Not all of them... But this is classic innovator's dilemma. So this is one of the things that happens. The innovator's dilemma is that a new entrance comes in. It starts looking like a "toy". "Oh, that's just for the low end." "Oh, that's just for the cheap stuff." And then step by step, it moves up the ladder, because it has a fundamentally paradigm-shifting advantage. For SQLite it is. There's no server. It's so much simpler to run. It is so much cheaper to run. You can run it so much wider. Unless you're working on that file, there's no overhead. There's no process even. And that just -- probably an order of magnitude in terms of simplification, of how you think about data, how you think about databases. And it's then no longer held backed by those constraints and we keep moving up the ladder. And we've moved up so far now that Rails 8 uses SQLite for literally everything out of the box.

We use SQLite for the jobs, the queuing backend, we use SQLite for caching, we use SQLite for the web sockets coordination... And obviously we use SQLite for the main database that your domain models are being persisted into. That's all of it, which means that the deployment story gets so much better, gets so much simpler.

You don't have to set up a MySQL server, and nurture that server, and feed it all the things that needs to be fed. No, you just have a bunch of files, and the only consistent or persistent process that you have is your application server. That has opened up all these other doors for lowering the cost of deployment. This is one of the things that Rails 8 is really a lot about, about the fact that you don't need platform as a service. Rails 7 - all about no build. Rails 8 - all about no PaaS. No platform as a service required. No Heroku necessary. Certainly not with all its extensions. Now you can use any $5 VPS, or your own server, or your own hardware, or whatever, to deploy. And you can move between these things.

This is the other thing... I have tremendous respect for Heroku. It's actually mind boggling how far ahead they were of the entire rest of the industry, and for how long. You would have thought that advantage would have been erased in a couple of years, and they had it for a decade.

**Adam Stacoviak:** Everybody's still trying. They're still trying.

**David Heinemeier Hansson:** They're still trying. And I think actually, even though the tragedy is that Heroku was left to rot... Right? It was bought by Salesforce, and they've left it to rot. I'm not saying there's no one there. I'm not saying the people who are still there are nice, kind, caring, professional engineers. All that's true. But you look at what happened between Heroku getting launched in 2007, and until they were bought - it was basically the world. They turned everything upside down. Then you look at what happened since Salesforce bought them, and now nothing's happened. So that's just a little sad, but whatever. This is what happens in the world of commerce. Things get bought, and they get stuffed inside some big bureaucracy... And I think it is our job, or I consider it to be my job as an open source software developer to go "Alright, all this great philosophy and even technology existed in this commercial project. Now that commercial project has been left to rot. Let's make sure we rescue some of those ideas." We're not going to go back to whatever the norm was before Heroku. Developers don't want to go back. They want to have like one command, deploy. With Heroku it was git push. With Kamal, it's kamal deploy. Okay, that's where we want to be. So let's bring those things out.

\[44:09\] And I think Rails 8 has really done it in a way I'm just incredibly proud of... Because the speed with which I'm able to start a new application, develop something basic, use some of the other new Rails 8 features like generating some authentication, and then taking that to production. Like full on, ready to go, ready to serve internet traffic. I have everything exposed here as a real IP to the internet. That path has never been shorter. And not only has it never been shorter, the fact that it no longer leans on some commercial subscription that you need - that just warms my heart.

I love commercial interest in all of these things. I think it's great that we have commercial companies who want to improve developer experiences etc. But my heart really is with open source, and I want the default to be able to be open source end to end. You should be able to start a new application, do all the development, deploy to production, run it in production, operate it at large scale, on an entirely open source stack. And then the commercial part is optional.

**Adam Stacoviak:** Amen.

**Break**: \[45:12\]

**Adam Stacoviak:** When you say no PaaS required, is that synonymous with no cloud? I mean, it's kind of how I read that, in a way... Is it not synonymous?

**David Heinemeier Hansson:** No, no. I mean, yes and no.

**Adam Stacoviak:** Where's the difference there?

**David Heinemeier Hansson:** I think in the past you were thinking "What would it take for me, if I wanted to have my own server?" I call up Dell and say "Hello! Can you send me an Epic box with 48 cores? And here's the address to the data center I want it delivered." The jump from getting that piece of iron able to host your application was kind of tricky. It was quite different from the Heroku path. Like, anyone could set up Heroku; far fewer people would feel comfortable setting up a physical box. I want to shrink that gap, such that the bare metal deployment scenario looks virtually identical to the cloud deployment scenario. That it's not a different category. It's using the same tools, it's using the same configuration, it's using the same method of thinking about it... But also, most people don't start by phoning up Dell to order a $5,000 piece of hardware. They go "Oh, I have an idea. I'd like that idea to get online." "Oh, Hetzner has a VPS for $12 a month, with a couple of cores and enough RAM for me to run it... I'm going to deploy there first."

So I think still the path for most developers will go through the cloud first. I want to make sure that when they do that, they don't end up getting locked in to a commercial platform, which I've seen time and again happen, including on Heroku, where some relatively large services suddenly have some very, very large bills that are making things quite difficult for them, and they kind of don't feel like they can get out. They feel like they're in too deep, and that would be a huge project to move off Heroku. I want to make it a trivial project.

So as I said, you can start in the cloud, because I think most people should. Now, what is cloud? I think there's a discussion there, too.

**Adam Stacoviak:** That's why I was asking that, because you said VPS in your prior argument or discussion about this, and then I asked the question... And I get what a VPS is. It is in the cloud. And I get that it's --

**Jerod Santo:** It predates the term cloud, though.

**Adam Stacoviak:** Right. Yeah, exactly. It's not EC2, right? It's not Amazon Web Services cloud, insofar as that when you come in here, you have an ecosystem of things to build upon. Whereas a VPS is a standalone server; you can then connect to other servers if you want to, and there may be other services, but is that cloud? Because I feel like that's more like a rented single machine.

**David Heinemeier Hansson:** I think that's very fuzzy, and I think there's one side of the aisle that wants to label everything that touches the internet cloud, because then all we argue about is sort of some nonsensical thing, and "Oh, we're all doing cloud. We're doing private cloud." Private cloud just blows my mind. That's such a nonsensical term. Because we've watered down the idea of what is cloud. For me, cloud is exactly as you say, EC2 with RDS and open search. That's cloud. That's what I think of as cloud. When I, for example, rent a dedicated box from Hetzner, in their \[unintelligible 00:49:23.05\] "I don't think of that as cloud." Now, it's obviously fluid. Where exactly is the line? Is it VPS, or -- is it droplet? Is it droplet cloud?

**Adam Stacoviak:** It's renamed. That's VPS renamed, as a cool name from DigitalOcean.

**David Heinemeier Hansson:** \[49:38\] A little bit, right? So I think it is all quite fluid. And also, fundamentally, I'm fine with that fluidity. I don't care. I just want you to have a path, a roadmap, a tool to get from A to B to C to D to E without it feeling like there are hard lines and hard walls. I want you to be able to start on a VPS, or a VM, or a dedicated box, and move every which way around them.

In the Kamal config, for example, that we ship with new Rails 8 installations - Kamal is the deployment tool that we've made default - it should be as simple as changing the IP deployment addresses. And that IP can point to the VM, it can point to the VPS, it can point to the dedicated box, it can point to your own hardware, and Kamal won't care. It'll be the same.

Now, part of the pitch for Kubernetes, for example, was that that was going to be true sort of at a broad scale, and \[unintelligible 00:50:29.05\] was not true at all. I've never, ever seen a Kubernetes installation of any sophistication being able to just, "Oh, we're on Amazon? Flip the switch, George. Ket's move over to GCP." "What?! No." That's like "Flip the switch, George. We'll start having the meetings about the meetings about how we can move out four years from now." That's what the Kubernetes migration path often is. And I was just like "Yeah, there's got to be a better way for that", at least for some style of application.

Now, again, I actually think Kubernetes is an amazing piece of open source infrastructure, and if you have it in your heart that you want to start the next AWS, or the next GCP, or the next even Digital Ocean, you should probably look into Kubernetes. You're going to be operating at that scale, and you're going to have hundreds of engineers, and it's going to be very complicated. Great. Kubernetes sounds wonderful for you.

I've looked at Kubernetes enough. We ran Kubernetes on AWS for long enough that I realized that is not what I want to do with my time. And it is not proportionate to the kind of problems that we have. Something far simpler is possible. And if that simplicity is achieved, we also get portability. And I think portability is actually less of a thing at super-high scale. It's not that common that huge applications and businesses move from one provider to another. Where I want to make sure that the portability is present is in the early days. Is that you start your startup, and maybe you start it on Heroku, whatever, or something else like that, and you could just move on. You don't get locked in. You don't get locked into a cost basis that's prohibitive.

**Adam Stacoviak:** Yeah. So it could be gradually. Let's give you a place to go. Let's not stick you where you've got to be at, where you've been. Where you want to go? Let's go there.

**David Heinemeier Hansson:** And this is the thing. I mean, I think one definition of cloud that perhaps is a little antagonistic is that cloud means lock-in. Cloud means proprietary encapsulations of simulacra of open source services. It means open search. It means - what do they call it? Is it open cache? I forget what the cache product is. But there are all these managed services that the cloud providers have, that usually have some sort of proprietariness to them, that you are not developing skills as an organization or an individual in the underlying technology, whether that technology is MySQL, or Redis, or whatever. You're using the managed service. And that is the key trap the cloud has for keeping you put. If you had developed a bunch of expertise in, say, MySQL, or Redis, or anything else, you could take that expertise and you could take it somewhere else. If you developed a lot of expertise in RDS maintenance, that kind of stays with Amazon... Which is, of course, exactly what they want.

Now, sometimes these things do break free. I think S3 is a great example of something that broke free, where S3 was Amazon's encapsulation of an object storage. That then became an industry standard, and we were able to migrate between these things. That's actually the migration we're doing for 2025. We're getting out of S3. We have -- what is it, eight petabytes or something in there? ...and we've got to get it out onto our own stuff. And what we're moving on to - something called Pure Storage; they have an S3-compatible layer. But a lot of times that's not what's happening. And especially, even worse if you get sucked into the Lambda nonsense; all the serverless nonsense.

\[53:58\] Not only is that usually highly proprietary, it's also usually the most ludicrously expensive part of the whole cloud equation, that really only makes sense if you have these extreme dynamic ranges where your spikes are 100,000 requests a second, and then you go down to five. Alright, fine. I guess it's great that you could buy things piecemeal. But if you have a steady state of load, none of that stuff makes sense. Of course it doesn't make sense. It's like buying your toilet paper one snippet at a time. They're not going to charge you what adds up to a whole roll, right? You buy that shit in bulk, because you know you're going to need it every day for a year going forward.

**Jerod Santo:** Yeah. I think there's a very small set of constrained applications that make sense under that model, and I think that the sales pitch is that everybody should be using that model. And I think those two things are not alike. I want to go back to SQLite, because I'm just obsessed with this idea... How much have you put it through its paces? I'm thinking of it and it makes sense, Redis replacement, CacheStore, PubSub... But you said even for the primary application database, to a certain extent. Have you put it through its paces? Do we know? Is there a line in the sand of writes per second or requests per second where you're like "Yeah, let's throw in a Postgres instead"?

**David Heinemeier Hansson:** Yes. So we have two commercial products in the wild that use SQLite. They are of the single tenancy nature. So the one product is Campfire, a chat system like Slack, where you get the code, and you can install it and run it on your own server. We boiled it all down to like a one-command setup, so that you can run your own instance of this chat system. And it runs on a single machine, and it runs SQLite. And we did a bunch of performance testing to figure out "Where are the limits here?" And I think the top machine we used was something like - I want to say... Was it 30 cores, or 24 cores, or something like that? And that got us to 10,000 concurrent chatters that were all saying something once a second, or something... So we pushed it quite far; much further than almost anyone who was using a single tenancy application ever would, in this circumstance.

But now we're getting curious. Of course, I'm getting curious. I'm like "Alright, it works for that case." It works for the case where someone buys Campfire and installs it on their machine and they can run up to 10,000 chatters. That's great. But we also make other SaaS products. Like, would it work for something like Basecamp? Would it work for Hey? Alright, maybe those are just beyond... But we're working on two new products right now where we're exploring exactly that question. How can SQLite work in a multi-tenancy setup? And there's some real appetizing benefits as to why you would even attempt that. And one of them is isolation.

So when you run multi-tenancy in SQLite, where each individual customer has their own database - first of all, none of the data is touching. You're never going to have "Oh, it bled into the other account." Even though with modern development techniques that's not the major thing. But what is a major thing is right now on any multi-tenancy app built on Postgres or MySQL exporting that data into a format where you could then import it again is not trivial at all. And a big part of that reason is that the primary keys - they're all intermingled.

So I have 10,000 customers. They just get primary keys assigned off the basis of like an integer that's incrementing. So the data doesn't kind of go back in quite as neatly as necessarily it goes back out... But if SQLite has the entire dataset for one customer, you could literally give them the file. You'd be like "Hey, here's the SQLite file that you've been building up on our service. Now it's yours." And then also, by the way, if you do a model like we're exploring, where that data could then run on your own instance of the app that we're building - that's pretty freaking cool. Now you could run that data in a SaaS setup if you want that, and you could take the data straight out and run it on your own server, if you prefer to have it in your own sort of setup.

\[58:04\] I really like the sound of that. I really like the idea that some of the scaling challenges that multi-tenancy apps run into, they run into because the whole system just gets too large. You look at something like Basecamp, it's just terabytes and terabytes of data, right? It's actually not -- it's still a hard problem. How do you make a database fast when you have tables that are terabytes in size?

**Jerod Santo:** Right.

**David Heinemeier Hansson:** You've got to do things with indexes, but at some point that even breaks, and if you're doing joins in a certain way that doesn't work... Some of those problems get a lot simpler when the data size gets smaller. So if you think of each customer having their own database, and you're mainly putting in text there, it's going to be uncommon, I assume, for -- let's even imagine Basecamp ran like this. Any individual customer would have - what, 100 megabytes? That's a huge account. Imagine 100 megabytes just of text, from one customer, right? Now, suddenly a lot of the scaling or tip over problems - they're just trivial. They don't even exist.

Now, at the grand scale, when you're using Postgres or MySQL, you have to do actually quite complicated things. Worst-case scenarios, you have to shard. Shard sucks, man. I mean, rebalancing shards, setting the mob, all the... It is very complicated. We have thankfully been able to resist that complication, because computers keep getting faster, and we keep getting bailed out by the faster computers... But by the time you reach, again, Shopify scale or something else like that, you need to shard. That's really complicated.

Then you need multiple readers, and multiple replica writers, and all the orifice of running distributed, synchronous data storages. Not for the faint of heart. Now, again, in most cases, that's not a zero to one problem. That's a problem when you have enough money to throw at it. But I'd still like to see that radically simplified. Could we get to a world where even at that scale, you could just use SQLite? Because it was all infinitely sharded to one database per customer? I don't know. So that's the other answer. The real answer is I don't know. I don't know what the upper limit is. I know what some of the theoretical limits are, and SQLite is amazingly, stupendously quick for the theoretical stuff.

**Adam Stacoviak:** I like the idea of the take it with you, you know, data sovereignty kind of thing for the customer... But it's also kind of like the aspect of serverless that you like, because it can spin down effectively to zero if the customer is inactive. There's no cost in the business. I mean, there may still be the service SQLite sitting there doing its thing, but it's not doing anything for that particular customer. And so there's no activity, there's no cost.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** That's the problem with something like MySQL, for example. So MySQL for us - we use the InnoDB table format. The InnoDB cache is a global cache. We're all sharing it. And that cache needs to be enormous for the database to be fast. So I need to essentially have everyone's data freaking in memory, or the bulk of it in memory, all the time, whether it's being accessed or not. Because if they do show up and I don't have it in cache and I have to do a table scan - well, bye bye, system. You're going to lock up the database. Which, by the way, is another really appetizing potential benefit here - every single outage we have ever... Not every single outage. The majority of outages we have ever had with our database was that somehow, some query from one particular customer tickled a tipover point where suddenly we're doing a table scan. And now we're table scanning a terabyte, and it takes down the whole database, because all the resources just go into servicing that query, and everyone else is on that same database. So yeah, good luck. Everyone else is screwed, because Paul had an unreasonably large instance in some case that we didn't expect, and we didn't design for, we missed a pagination thing... With SQLite, when each individual database is its own database, it's kind of quarantined. Maybe you can cause some trouble for your own little thing, but it's not going to cause trouble for everything else.

**Adam Stacoviak:** Have you looked into or entertained LightFS? So when you get to SQLite at scale... I call it SQLite. I'm sorry.

**Jerod Santo:** \[01:02:16.02\] Call it whatever you want, man.

**Adam Stacoviak:** Well, we talked to Richard Hipp at one point...

**David Heinemeier Hansson:** It's better than what the Prime calls it. He calls it Squeal Lite. I'm like "I can't listen to that. Squeal? What do you mean?!"

**Adam Stacoviak:** I just realized when I said it out loud, I said it differently than the both of you, and I was like "I need to apologize real quick."

**Jerod Santo:** We had Richard Hipp on the show and he told us how to say it, but I can never say it his way. Adam's done a better job of remembering it, but I just call it SQLite. I can't help myself.

**Adam Stacoviak:** I committed it to memory and I can't stop, so that's how it works.

**David Heinemeier Hansson:** What's the official way?

**Jerod Santo:** Like meteorite. He actually named it after meteorite. So it's like s-- say it, Adam.

**Adam Stacoviak:** SQL-ite.

**Jerod Santo:** SQL-ite. It's just a lot of syllables. Like meteorite.

**David Heinemeier Hansson:** Oh, really? T-I-L, man.

**Jerod Santo:** I know. He's a nice guy though, and he's like "Say it however you want." He's not going to dictate, or anything. But that's the original -- the original idea was meteorite.

**David Heinemeier Hansson:** SQLite.

**Adam Stacoviak:** SQLite.

**Jerod Santo:** Everybody thinks it was about light, but it wasn't about light. It's about --

**David Heinemeier Hansson:** SQL-ite.

**Jerod Santo:** ...ite. Yeah.

**Adam Stacoviak:** Which fed into this unintended consequence you alluded to earlier, in the fact that it was the default database for Rails... But when you went to production, you went to MySQL.

**Jerod Santo:** Right, because it was the light version. You should think it was light.

**Adam Stacoviak:** Yeah, it seemed like light, non-pro, non-cool, single-file, throwaway, toy... All those sort of synonyms.

**Jerod Santo:** So LiteFS, that's the cloud thing, right? That's the...

**Adam Stacoviak:** I believe this is--

**Jerod Santo:** Ben Johnson, right?

**Adam Stacoviak:** Ben Johnson. The work of fly.io as well. It's LiteFS. It's distributed SQLite. SQLite.

**Jerod Santo:** Way to say it your way. Now we're all going to be thinking about it the whole time.

**David Heinemeier Hansson:** We have not actually dug into any of that stuff yet. I am kind of... I'm of two minds here. On the one hand, I tremendously sort of celebrate what the team behind -- see, now I'm getting super-self-conscious about...

**Adam Stacoviak:** Just say SQLite. It's okay. I'm sorry.

**David Heinemeier Hansson:** SQLite, what they've done... It's three guys that literally for 20 years have just said "Hey, this is open source. You can look at the source, but we write it. We don't actually take patches. This is our thing." And it's amazing. I mean, it's incredible. Three guys who created the most popular database system in the world... And it's not even close. I think SQLite is just probably 100x or 1,000x more used if you count up all the individual databases than any other system out there. But it also means that if someone wants to use it in a different context, they do face some challenges because they can't just submit a patch. That's not going to get accepted.

So LiteFS is one example. I just spoke with the guys at Turso, who are doing LibSQLite, and they're essentially forking, trying to maintain upwards compatibility... But doing some forking because they want to do something similar, like what the LiteFS folks are doing. And it's a little -- I don't know yet what I fully feel about that, because I so respect what those three guys that made the original were able to do, and that they're still doing it. I mean, stamina out the gazoo here. But it's also cool to see this concept of a serverless database being pushed further. Now, funnily enough, with LibSQLite it's being pushed to a server. It's one of the things that's being forked.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** But I love all of it. I want to see this explored, and I also want to see a bunch of experiments. I think we are just now waking up to the fact that this little database engine can do far, far more than what we had in our head five years ago. We thought "Oh, embedded services - great." But for web application stuff it's development, it's testing, it's a tool. And now suddenly, it's not.

**Jerod Santo:** \[01:05:49.24\] Lots of cool ideas. One that I'm thinking of while you talk, if you had a multi-tenant SQLite-based Basecamp-like thing, and you had your phone apps, you could actually do offline-first with their own version of the database local, and then just synchronize back to the main one that everybody's sharing. And that could be a really cool way of easily, at a lower level than your application code, getting offline-first up and running, which would be pretty rad.

**David Heinemeier Hansson:** Yes. Now, I'll take one note here with what you said... You used the word "just" before the other word "synchronization".

**Jerod Santo:** It's just a little sync.

**David Heinemeier Hansson:** \[unintelligible 01:06:21.07\]

**Adam Stacoviak:** "Just a little sync."

**Jerod Santo:** \[laughs\]

**David Heinemeier Hansson:** \[unintelligible 01:06:24.01\] is just synchronization. That is a --

**Jerod Santo:** Just sprinkle some sync on there, Dave.

**David Heinemeier Hansson:** Yeah, just sprinkle some sync on it. That is one of the hardest problems that we have. And this is, I think, also one of the reasons why SQLite, for example, has been used on single tendency so well. If you only have one user, the syncing issues are less. But yes, I like that too, and I also know that that's what the Turso folks are exploring.

**Jerod Santo:** Is that what they're trying to do?

**David Heinemeier Hansson:** They're trying to explore what if you ran these SQLite databases on the individual boxes, but you were syncing constantly up to some cloud servers that were distributing... Now, you could get readers around the world. That's some of the stuff that the Fly.io folks were interested in. I understand they maybe wound down some of the investments they've made in that area... But the general concept is really strong. And I don't think -- I mean, we're only just starting to scratch the surface of what SQLite can do in web applications. And this is one of the -- I find it a little annoying when I talk about this, because people go "Well, SQLite is already the most amazing database that's been used. Like, it's not new." No, it's not new. But sometimes something existing, put in a new context, is new.

**Jerod Santo:** Right. And it is exciting. I'm super-excited.

**Adam Stacoviak:** It's like Keyser Söze, you know? Anyways, that's not a direct \[unintelligible 01:07:38.14\]

**Jerod Santo:** Don't spoil another movie for us, Adam. Come on.

**Adam Stacoviak:** Well, sorry about that. I do want to toot the horn of Turso really quickly. I've talked to Glauber... We were supposed to work with them. I think they're launching this month, something, and I haven't gone into their story enough. So we -- David, as you know, we're sponsored, so we have a lot of cool tech companies that work with us. And we were excited about this one. It didn't pan out. I think it's going to happen in 2025. Wow, to say that number is kind of crazy. But part of their "Why LibSQL" portion says - and it kind of references back to what you said; it says "To get to where it needs to evolve in regards to SQLite." SQLite. Gosh. "To get to where it needs to evolve, however, SQLite is open source", and as you said before, not open to contribution. "That's why we created LibSQL." And so they have something cool happening. I think what we're all sort of revolving around is this idea that there's something beneath the surface, further, that's worth exploring for SQLite. That there's more there, it's been there for so long, it's written by the greats of programmer world, like Richard Hipp and his team... They've been of the greats for so long. Dedicated. They've got these slow and steady mantras about the ways they work... It's trustworthy software. It's stable, reliable software, of decades and decades at this point. So let's mine those hills and see what's there.

**David Heinemeier Hansson:** And this is one of the things I'm just excited about with Rails 8. So if you wanted to use SQLite for a web application today, you have to know a fair amount of a little bit arcane knowledge about how to set things up in the right wall modes, and set the right pragmas, and do all the little tweaks... Because SQLite folks are really dedicated to backwards compatibility. So if you start a SQLite database from like 2005, it's going to load, it's going to do all the things. They really cherish that. Which means that to run SQLite in the way we would want to run it today on a multi-tenancy or multi-user app, you have to set a bunch of tweaks in it. And that was a little bit, I think, of a barrier for some folks that would start using SQLite that hit all these exceptions. Oh, I can't write right now. It just throws an exception. "Well, yeah, you've got to build up a thing, where you do a retry, etc."

\[01:09:57.19\] Rails 8 has all of that built in. It is fully configured to use SQLite to the best of its current ability, with all the correct pragmas and all the correct protocols of how to use that database well. And I think that's what's going to really help adoption - when you don't have to know all the little arcane bits and pieces and you can just rely on the fact "Hey, this is a database in a file, and it works." Awesome. Let's go.

**Jerod Santo:** Mm-hm. Yeah, very exciting. Well, we were talking about SQLite and this dynamic trio... I don't know \[unintelligible 01:10:28.06\] open source, but not open to contribution, it's making me think about open source...

**Adam Stacoviak:** Oh, gosh.

**Jerod Santo:** Of course, there's been a lot going on in open source, with relicensing, and with just thinking about the models... Of course, you're a big fan of the BDFL, Benevolent Dictator for Life model... And I am historically as well, but I do wonder what happens when your BDFL goes on a bender.

**David Heinemeier Hansson:** Are you referring to anything in particular? It boggles my mind.

**Jerod Santo:** What if DHH goes on a bender and just starts going scorched earth in something? He could really ruin Rails' reputation very quickly. Have you thought about this, David?

**David Heinemeier Hansson:** I have. Curiously enough, there's been occasion to ponder the model of open source recently... The whole WordPress drama, of course, was something I think brought a lot of folks to think about "What does the license actually mean? What about the norms?" This is one of the things we talk about in other realms of governance - how much is written in law and how much do we depend on a set of norms that we all just take for granted? And I think we had a bunch of norms that I took for granted about how open source collaboration works, that were - let's just put it politely - challenged in the WordPress drama. Things like retaliatory actions when it comes to code repositories, and so forth. When I suddenly think "Oh man, Rails really depends on RubyGems being an open, neutral platform, that is not engaged in kind of trying to push its own advantage in these ways." And the BDFL model I think too does hinge on a single individual. That is both its greatest strength and its greatest weakness. And we have to accept that those things come together as a package. There is no such thing as just a universally better governance model that does not have trade-offs.

The committee model has also been tried. You know what? I'll hold the accomplishments of the BDFL model against the committee model any day of the week when it comes to open source progress. If you think of most of the major projects that we all used and love, they have run under the BDFL model. And I've seen what happens to projects that get \[unintelligible 01:12:47.12\] down in unclear vision, unclear direction, a thousand cooks all pulling in their own direction... It's not great. We don't get the kind of software we want to use and we enjoy to use. A lot of that is downstream from a Coherent, uniform vision. And that just happens to be the model you get with the BDFL setup. Again, you should look at that and go "Does that mean it's always going to be flawless, or that we are never going to have WordPress scenarios?" No, of course it doesn't. In fact, if anything, what's remarkable about the WordPress drama is how novel it seems.

Why hasn't this been happening every six months all over the place in projects left, right, and center? Why is this one of the first instances of a project of that size getting embroiled in these kinds of debates? That to me, more than anything, is kind of one of those exceptions that prove the rule. And the rule is the BDFL model is amazing. And it works, if not flawlessly, then exceptionally well the vast majority of the time.

\[01:13:55.07\] And we don't have to speculate about this. We have literally three, four decades worth of prior art telling us exactly how well it works. And I think that's actually the most mind boggling thing to me about all of this. It's like, why? Why does it work? Why have we not had more spectacular failures? And it makes me appreciate that that was the way open source went. That this model that allowed open source to be competitive with closed source software to a large degree was downstream from exceptionally driven individuals.

Now, I think a lot of great open source is great now, because it's more than an individual. Rails has near 7,000 contributors to the main codebase over the two decades. I mean, that's a remarkable achievement. Although we also did just pull out an example that literally only has three contributors over 20 years. SQLite. So maybe that's not the be all end all of it. But the initial inception of almost every great piece of software sprung from one person's mind. And I think that's just something I'm very willing to accept. I'm willing to accept that there's no governance model that's 100% effective.

**Jerod Santo:** Sure

**David Heinemeier Hansson:** But also - I mean, if you pull on historical parallels here, why did we have the royal families in age of old? Well, we had them in part because as soon as the leader would die in, I don't know, prehistoric times, there would be a vacuum. And then there would be an absolutely terrifying bloodshed of people gunning for this. So we come up sort of as a civilization with this idea, "Do you know what? What if we just make it such that there's a lineage, and we can name the next 16 successors? So even if like the first five on the list are assassinated, number six, name is on the list - just go to that person." And you know what? Sometimes we're going to get a mad king. Yup. Them's the rules. Either we can have anarchy all the fucking time, or we can occasionally have a mad king. Let's go with the model that just only gives us a mad king like every four times.

**Jerod Santo:** How do you feel about the unified individual vision to start, and then when you reach maturity, scale, success, transition away from that? I'm thinking of Guido Van Rossum and I'm thinking of Python. And they seem like they've transitioned pretty well - I think there's probably been some bumps along the path - into a steering council now that they have him retiring. I mean, you're not going to live forever, David, so there has to be some sort of a next benevolent dictator, or something else entirely once you're done.

**Adam Stacoviak:** You need some lineage.

**David Heinemeier Hansson:** We need some lineage. Let's bring back firstborn rights here. It's a good question. And the reason I say that is when I look at Python and its vision -- I mean, tons of respect for Python. I have friends who Python's their favorite language, and I think it's really cool. And there's a lot of overlap in terms of philosophy, I think, between the two things. But you know what? When I look at that scenario, I don't look wistfully at the Python governance model, like

"Ah, I wish we had that in Ruby." If only Matt wasn't sitting there, giving thumbs up or thumbs down to every use of facing API change, I'd be so much happier. Ah, no... I don't...

**Jerod Santo:** Well, maybe not better, but a necessity for continued sustainability. Because -- I mean, unless you do find a taker over, who's another individual that shares the vision... I mean, but even Tim Cook doesn't share Steve Jobs' vision exactly, as we've seen, even though he was groomed for that.

**David Heinemeier Hansson:** Things don't last forever. I think we're also going to accept that. And I think part of it is that you're not going to -- there is no continuity with a committee that somehow fulfills what that original person brought to the table. And this is why I'm in no hurry to see that come to fruition. And in fact, we should rue the day when that's required. But part of this is that software development is such a new field. We're literally in the first generation of it. Like, so much of... All the programming languages we use - they're all alive; and not only alive, they have like another 40 years left on their clock, by just averages...

\[01:18:12.13\] Matz is not like 92 years old and we're like looking at sort of doing the handover in hospice. Now, again, the bus factor comes for all of us, either at the long end or the short end... But I don't know if we have the solutions. I don't look at any of the alternate models. I think the Apache Foundation is a great example of an alternate model. They have a very distributed and regimented setup of how they adopt projects, and so on. I also look a little bit - and I don't know, maybe this is offensive, but Apache is a graveyard, to some extent. A monument. I'm not saying that the projects don't evolve further. I'm saying like -- maybe graveyard, that's the wrong term. Maybe retirement home is a better term. This is where you put projects when "Oh yeah, Cassandra - today we're going to do exercise. Let's do a new release, Cassandra. You can do it."

**Jerod Santo:** \[laughs\] Oh, man...

**Adam Stacoviak:** I like this.

**David Heinemeier Hansson:** There's a little bit of that, I think, that projects -- I'm not saying it's impossible that you could hand things over. I'm saying it's difficult, and the examples I've seen feel more like the retirement home version than they feel like whatever idealized picture of democracy you might have in your head.

**Break**: \[01:19:27.21\]

**Adam Stacoviak:** Can I bring up a somewhat touchy side of this? Yes or no?

**Jerod Santo:** I'm not going to stop you.

**David Heinemeier Hansson:** \[laughs\] I thought we were already there calling out Apache Foundation a retirement home, but let's go. Let's go.

**Adam Stacoviak:** Well, this lasers back to you and Jason, and I think at the time, I believe - and I'm still trying to get back to this, because I knew your company as 37Signals from back in the day. I bought and read the book Getting Started, or Getting Real. Sorry.

**David Heinemeier Hansson:** Yes.

**Adam Stacoviak:** Because that's how I got started. But then I think you went away from the idea of 37Signals and you became just Basecamp, and now you're back to 37Signals again. But either way, that's past history. I'm still confused by that. Back in 2021, when it comes to the BDFL concerns, Rails came kind of close to some degree of an issue. And it wasn't direct, it was indirect. Y'all had an issue internally, there was a lot of crazy things that happened...

**Jerod Santo:** Y'all being 37Signals, not Rails, right?

**Adam Stacoviak:** Right. So that's why I brought that up. This was at the company Basecamp, because I don't think you brought back 37Signals until after this.

**David Heinemeier Hansson:** Correct.

**Adam Stacoviak:** If I can remember -- I don't know your history of the company closely, but I think so.

**Jerod Santo:** You're correct.

**David Heinemeier Hansson:** That's right.

**Adam Stacoviak:** But this was a big issue. There was a cancel scenario... So this was Rails adjacent, left of center, but it impacted Rails in the fact that there was a cancel culture attitude towards you, towards Jason... Towards anyone who stayed, basically, at Basecamp. And somehow that storm was weathered to have Rails 7 and to have this conversation, to have Rails 8. Like, you're not gone. So the BDFL model almost tainted the Rails world.

**David Heinemeier Hansson:** Do you know what? Whether it had been that model or another model, I think it would have been tainted nonetheless. If you look at some of the drama that's been having in the Rust world, that is less focused on the BDFL model, more focused on committee style, whatever - there's just as much infighting. The cancel culture came for that shit, too. There was no place that was safe to run. There was no place you could hide from that mob mentality.

So I think that is sort of an adjacent issue to "Do we run things on a committee basis or a BDFL basis?" But I do think it was an instructive time, because you do realize "You know what? It is possible to destroy things." And to destroy them in the service of what? Of a bunch of fucking nonsense that a few years later we look back in horror, upon like "What the F was going on in 2020, 2021?"

**Adam Stacoviak:** A lot of crazy stuff, yeah.

**David Heinemeier Hansson:** That was just a \[unintelligible 01:27:40.12\] batty nonsense time, and a bunch of things did get destroyed. Maybe not as many open source things as one might have expected, but yeah, we definitely brushed things with death, to some extent, on some of these projects... And I think to me, first of all, it's very satisfying to have outlived an attempt on your involvement in that regard, right? Like, this is something that gives me renewed energy on a continuous basis. "Oh, remember that one time they showed up at the house with pitchforks and torches, and you somehow made it through, and now we're doing better than ever?" Oh, man. I like that. So wherever you could draw a source of energy from.

But nonetheless, I think you're still correct in the fact that yeah, it's possible to tear things down. It is possible to destroy things. And I think - you point to that example. 2021 is one example of it. I actually think a better, modern example that's not a WordPress example, since we haven't actually seen fully how that plays out, is Redis. So Redis ran on a BDFL model, with \[unintelligible 01:28:43.02\] for 15 years, something like that.

**Jerod Santo:** A long time.

**David Heinemeier Hansson:** And he ended up selling it essentially to a committee-run -- I mean, it's a company, but they run the development as a committee basis. How's that going? Like shit, that's how it's going. Redis is turning -- Redis is yanked. Redis is now -- is it source available? Is that the bullshit they call it?

**Adam Stacoviak:** Yeah.

**David Heinemeier Hansson:** Or something like that. It's no longer open source.

**Jerod Santo:** Yeah, rug pull.

**David Heinemeier Hansson:** Here's an example of you went from BDFL to committee style, but on a very different premise, and I have no interest in Redis at this point forward. I think it's an amazing piece of software, I loved it for many years... If I'm starting a new project tomorrow, I'm starting it with Valkey, or any one of the other forks. I'm not going down that dark path.

So things don't last forever. And I think we can delude ourselves into thinking that because we have such a young industry. Do you think architects think "Oh, this building is going to last forever"? No, because they've seen literally the history of civilization. Build things, destroy things. Build things, destroy things. Or things just falling apart.

\[01:29:50.13\] We've been around, in our modern inclination for - what, 50 years? 60 at the most? Well, everything is still here. COBOL is still here. Fortran is still here. You can actually still compile and run those programs. We've not yet seen proper destruction. We've seen some degree of abandonment, maybe... But we don't have the timeline to really appreciate these things on. And therefore, we are liable to delusion that things are going to last forever. They're not.

**Adam Stacoviak:** Yeah. I didn't bring that up necessarily to call back to the moment, but more like Rails - because we haven't talked about... Rails had had an opportunity for --

**Jerod Santo:** Destruction.

**Adam Stacoviak:** ...some major change at the BDFL level. And I'm with you, I think there's a lot of pros comparative to the committee level. You don't even have to run an open source project to think that committees are bad. Try to make a decision with committees, and you know that -- it could be a church, it could be in your family, it could be wherever... You bring in a committee - now you need a leader, you need somebody who can define the vision, and collect people who believe in that vision and share that vision, and have shared beliefs... And the beliefs is not simply bestowed upon by the BDFL, but they are originated by someone who has command, someone who has vision, and others come on that journey. And that's okay with me.

But I think we're on this show, and Jerod and I both come from the roots of Ruby on Rails. And so to us, in our developer core, our developer green heart, it's Ruby on Rails. To me -- and I think you're the same, Jerod... And so when we talk about this, it's nice to know it's still there. It's nice to know that you've got Rails world, it's nice to see your latest keynote, it's nice to see this renaissance, this... What'd you call it, Jerod?

**Jerod Santo:** I just said it's having a moment, that's all I said.

**Adam Stacoviak:** Well, I said Rails renaissance, and you said something else in pre-show.

**Jerod Santo:** Oh, I don't know.

**Adam Stacoviak:** I don't know. It was cool. It was cool.

**Jerod Santo:** I say lots of cool stuff.

**Adam Stacoviak:** But Rails is still here, is still sturdy, and these old/new, reformed ideas that have been lines in the sand, convention over configuration, these things you've talked about in the show are true. And they weren't tainted or destroyed by this adjacent possibility.

**David Heinemeier Hansson:** Yes. And I think this is -- when I look back upon things like that, I look back upon them with... First of all, \[unintelligible 01:32:14.16\] nostalgia of how you sort of compress the past... But I also look back with joy and say "Do you know what? Whatever we survive--" I mean, it's a fucking cliché, but it does make us stronger. Rails is stronger because that happened; not just in spite of it, but because of it. We end up with a better structure. I ended up with more dedication after sort of just getting my bearings again, on like "Do you know what? Am I still interested in this?" So you're tested, right? You're tested. First of all, what are you made of? Are you going to fold? Are you going to just run away from the thing? Or are you going to rise up and face it head on? That's one thing. And then are you going to keep going? Do you want this? And that is a good question.

I mean, I've been doing Rails now for literally over 20 years. It is not unreasonable to raise the question "Do I even really want this anymore? Is it worth the fucking hassle?" I could just have said "Alright, fine. Here. Form a fucking committee. I'll give you the commit rights. Go see if you can do a better job. Go see what happens a few years in, if that's how you're going to run it." I mean, I'm not going to say it wasn't tempting for a hot minute... But then I also went like "No. No, no, no, no. I like Ruby. I like Rails. Do you know what? I'm going to fight for these things, and I'm going to continue to invest my energy and enthusiasm into a direction of this." And when we had the nonsense with the RailsConf stuff - alright, whatever. That's what you want to do? Great. I'll take my energy over here. We're going to come up with a conference. I'm going to help organize Rails world, I'm going to put my energy behind that, and let's just see how it goes. I think it went pretty well.

**Adam Stacoviak:** \[01:33:58.21\] Here's the problem with that idea though. David, you are capturing less than you created. I'm sorry, man... You've done it wrong.

**David Heinemeier Hansson:** That is the problem.

**Adam Stacoviak:** You're capturing less than you created.

**Jerod Santo:** You're going back to the mad king now.

**Adam Stacoviak:** Yeah. What a call out, right? That was a post that went away, but that was a bad/good call-out.

**Jerod Santo:** I think Matt is not in the best place mentally. I think he was backed into a corner there and lashing out at the wrong person.

**David Heinemeier Hansson:** And I can also see why.

**Jerod Santo:** Yeah. I mean --

**Adam Stacoviak:** not just that argument though. It comes back to the open source idea, which I think you outline well in your post, "Capturing less than you create", which is why I said that, to bring it back to this direction... It's that we don't have to capture it all. Like, we don't. Even with this network and this podcast, the media company that Jerod and I created - we don't capture every possible dollar that can come in the door. We say no to a lot of people, because we're not -- it's a not good term. Do you mind if I say one not good term, Jerod? Is that okay? We're not ad whores. It's a terrible term, and I hate saying it, and I only say it to people now on podcast, one time, in transcripts forever, that are git-committed, and it's in black and white forever... But we don't just say yes to everybody.

**David Heinemeier Hansson:** Oh, it's going to come up in your cancellation hearing in about three years, when the pendulum comes back around that. Just so you know, Adam, it is now in the official record.

**Adam Stacoviak:** It is.

**Jerod Santo:** Well, we can still edit this out.

**Adam Stacoviak:** That's true. We can.

**Jerod Santo:** We'll consider it in post.

**Adam Stacoviak:** That's right.

**Jerod Santo:** We'll have a committee decide if we should edit that out.

**Adam Stacoviak:** So we don't say yes to everything that comes our way... Just like in the scenario of our creations. We don't have to capture it all to bear all the fruits of our things we've made. I think that's just a sad way to think about it. And I agree, Jerod, I think that Matt is not in the best state. He seems like he's literally hellbound to be his state of mind, keeps coming out... Now there's this new thing, I think, this injunction that WP Engine is putting against him. He's going to be more quiet, he says in his latest post... But this idea that it's really about open source, and we've got this blended line of what open source really means, should OSI be the arbiter of these licenses, where is the line, what really is open source... We've got different licenses that have come out that try to be open source, source available... There's been all these different terms, and I think the thing that's under scrutiny here is this blurred line of open source that you have to come back to, just make the thing, and let whoever can capture the value, capture the value. That's the point of open source.

The freedoms to use it, the freedoms to show up, the freedoms to not show up, the freedoms to say F it and give it to the committee... That's the beauty of open source, and that's what I love most. But let's talk about capturing less than you create. Share what you feel there.

**David Heinemeier Hansson:** Yeah, so I think I have been \#blessed that other ventures in my life panned out well enough that I did not need to look envious upon folks using my creation to create value. I hope that even if things hadn't panned out well for me in my own endeavors, I would still be able to hold to that ideal... But I can also see the human, very human attraction to the idea that "Do you know what? I'm owed something. Someone built something on top of my creation. I should get a taste. I should get a cut of that." And I do think it takes some degree of dedication to not fall into that trap, because I do think it is fundamentally incompatible with what open source is.

I have decided that my involvement in open source is not going to be governed on market terms. Because in a market situation, in a commercial situation, I would totally act like that. Like, if we're having a contract here back and forth, I want that contract to be fair, I want my inputs to be reciprocated by your inputs... That's a different model, it's a different economic universe.

\[01:37:58.03\] And then I look at this universe over here called open source and I go "Do you know what? I do the commerce thing.

I do enough of that at my day job." In the open source world, I don't want that. I want this to be a gift exchange. I want to make gifts for myself first and foremost, and then I want to show up to the gift exchange like "Does anyone want this? Here, you can have it." And by the time I've given you that gift, it is yours. I don't get to tell you how to use it. I can offer my opinion, but it is just that. An opinion is not a contractual bound. The only contract here we have for all my open source is the MIT license. And that basically just says, "Don't sue me, bro. You can do whatever you want. There's no warranty here." But other than that, you can go build a hundred-billion-dollar business, and I will stand on the sidelines and I'll go "Yeah, that's awesome. Good for you." I'm not going to show up at the back door, "Hey, by the way. You owe me 8%." That's just not the model that I'm interested in pursuing open source with. And I also don't think that that's true for most people. Well, most open source developers, I should say.

I think most open source developers - first of all, they are human. And some of them are what I termed "starving open source artists". And they are tempted to think "Oh, my life would be so much easier if just this company that uses my software - if I could just get 0.01% of their revenues, I could pay for X, Y, and Z." That is a human attraction. But most of it stays there. They don't persecute that. They don't suddenly go "Actually, I should go ask them for it. Actually, they owe me that. Actually, unless they do, I will kick them off the plugin repository." That's not the order that most open source developers have followed.

**Adam Stacoviak:** Banned, yeah. I think the freedom in open source too is like the freedom to not force someone to do something else.

**David Heinemeier Hansson:** That's exactly right.

**Adam Stacoviak:** It's not just the gift exchange you mentioned, and the freedom to create for you first, and then to give away at the gift exchange... It's to say "You don't have to come to the gift exchange and give me money to get this thing", or somehow force somebody else, an entity, an individual or otherwise. That is the beauty and freedom of open source, is that you are not forced, and you shouldn't and can't force others. And if you believed in the truth of open source, you wouldn't try and do that.

**David Heinemeier Hansson:** That's right. I think that that is -- this is a voluntary exchange of gifts in both directions. I've mostly been persecuting this from the other side, right? I'm going to give you a bunch of gifts. You don't get to tell me what color the wrapping paper should be. You don't get to tell me how the shape of those gifts should be. I determine that because I made the fuckin' gift. I'm showing up here and I'm giving it to anyone who wants it. I'm not saying I won't listen to your feedback, I'm just saying you don't get to tell me what to do. That freedom - paramount.

Just as important is the other freedom. If you're going like "Well, here's one of my gifts", then it's a gift. You can't give it to me and then suddenly also say "Well, now I've given you the gift, you owe me A, B, C, D, E, F, G." If that was the case, then - I mean, we made a transaction. A gift is not a transaction, or that's not the kind of gift-giving I'm involved with. That's some nefarious shit right there. So if it's not a transaction, you don't get to declare your sort of secret side of the ledger here.

And I think that's what irks me and brought me to get involved with this whole WordPress drama in the first place, is I thought that a shadow set of obligations were pulled out of the drawer when someone happened to be successful, and then suddenly applied under all these spurious pretexts. "They're not giving back enough." Okay, do you know what? I mean, billions and billions of dollars have been created on the back of Rails' creation, and a ton of those companies have given back exactly zero. They have zero commits, they have zero donations, they have zero sponsorships, they have zero everything. Sometimes I look at that and I go "Hey, it'd be nice. It'd be nice if they would contribute a little more." But so what? Okay, there's a bunch of others who do. I'll just focus my energy and time on them. I'll focus my energy and time on the Shopifys, and the GitHubs, and the rest of the Rails Foundation, and the people who do want to be involved. There's enough of them. I don't have to find every unsqueezed lemon, and then just go like "Here's a baseball bat. Splat!"

**Adam Stacoviak:** \[01:42:12.03\] \[unintelligible 01:42:11.19\] I fully agree with that. So the thing I concern myself with, or leave some hesitation for, is that there's 100% a lot of context that's behind the scenes that we're not aware of. There may have been conversations, etc.

But then I'm like "That doesn't excuse --" What's the name of the show, Jerod? It's the wrong place to slap a person. We conversated about this, because we're podcasters, on a different podcast. And I used the analogy of Will Smith and Chris Rock. Like, you don't go on stage and slap somebody. And at that point it was a slap.

**Jerod Santo:** This was like day one.

**Adam Stacoviak:** Right. It was week one. It was WordCamp, it was the announcement of WP Engine being banned... I'm like, that seems -- like, it's cool. You have the right to do whatever you want with our keynote. But that's a weird place to slap somebody. Like, that's the wrong place to slap somebody. But then I'm like, this is just generally wrong. The way it's been handled, the initial release of the concern... All these things. It's just weirdly wrong. And then the people that pay the price is the potential fracturing, I suppose, if not complete trust fracturing of WordPress as it is... And it's just the wrong way to handle all this. Regardless of the context that may be missing, it just seems wrong.

**David Heinemeier Hansson:** I mean, I don't disagree with that... But then I also constantly try to check myself that - when we had our little kerfuffle in 2021, there were a bunch of people who just thought "They're just wrong", right? So I try to keep just an ounce of humility in that... But even so - I've also looked through all of it. I've looked through the complaint... I don't have a dog in this fight. I don't use WordPress for anything... We did, once upon a time. We don't anymore.

I like the idea that it's an open source package that's running 40% of the internet, or something like that. That's incredible. If anything, I'm biased to cheer for whoever brought that to life. So I'm biased to cheer for that. And I still look and go like "You know what? No." There's just some norms here... I don't even have to render a verdict on the total sum of everything to go like, okay, that part, taking over someone's plugin in the way it was taken over, and imposturing... That just violates every norm that I'm interested in having in open source, regardless of whether you're right or you're wrong on some other trademark questions or other things that are in there.

Now, again, said all that, I also do know that there are other people who would have the same conversation about the actions \[unintelligible 01:44:48.28\] that I took in 2021... So I kind of -- I try to do it with that distance, still having opinions about things. And I also do think some of it is not necessarily that deep. I think it's kind of you actually to say "There's a lot of context here that we don't know." Yeah, but also sometimes the answer is simpler. Here's a competitor to wordpress.com, that's doing really well, reportedly hundreds of millions of dollars a year in revenue hosting this open source thing... I can see the human response going "That's fucking bullshit. They make all this fucking money, and I don't get anything back to my projects. They don't give anything back. Now I'm gonna get them." I can recognize that. That's not an alien instinct. It's not something that is so far removed from --

**Adam Stacoviak:** I've said words like that. I'm sure my brain felt that way about things in my life, so I totally get it.

**David Heinemeier Hansson:** Exactly. So that's why I'm like, I can actually understand where these instincts come from. I don't think they're good. I think we have our instincts and we have our emotions, and I think we should try to check them with some intellect and some virtue and some respect for norms, and so forth... But I can understand where it comes from.

\[01:45:57.26\] So part of this to me, as I've been trying to walk the fine line of saying "Do you know what? I don't think this is good." And the reason I'm even getting involved is that it's not just not good for WordPress, it is not good for the entire open source world. If we're suddenly opening up this idea that at any one time someone can just show up and want 8% of your business if you happen to build on some open source software, that's gonna really put a damper on corporate acceptance of open source. And corporate acceptance of open source is good. We want corporations to use open source. This is not some sort of net zero pie here. When you have corporations adopting open source, they're way more likely to dedicate their employee time to improving that open source. That's certainly what's happened in the Rails world. The vast majority at this stage of contributions to the framework, certainly at the higher levels of contribution, they come from individuals who are allowed to work on that open source during work hours, paid for by a corporation, because that corporation sees a self-interest in improving the shared commons. That's good. We want more of that. That's how we get better open source, that's how we get better gifts, that we get a bunch of corporation thinking in their self-interest

This is where I like Adam Smith's immortal words here about "It is not by the virtue of the baker or the butcher that you get your daily meal. It is in their pursuit of self-interest." This is sort of the root of capitalism. And I get that capitalism has all sorts of asterisks to it perhaps. I don't actually subscribe to so many of those. But the reason it works is that we're all working for our own self-interest. Don't \[unintelligible 01:47:33.16\] Don't believe that the world is just full of all these completely altruistic super-beings and super-organizations that never think about themselves and their own benefits. We all do. The game is to set up rules in such a way that that self-interest promotes a common good. And I think that's what we've done almost to perfection in the open source world. I mean, certainly to an incredible rate of success. If you had asked anyone in technology, in software, in like 1989, "Hey, do you think in 20 years, 30 years all the important software that runs the internet (if they could imagine the internet) was gonna be open source?" "What do you mean open source? Like, people just giving software?" What?! No!"

**Adam Stacoviak:** No way!

**David Heinemeier Hansson:** "We'd have license fees. We'd have per CPU this, that, and the other thing", right? The fact that it works is a testament to incentives. And the incentives of open source are good. When the rules are known, there's stability about what the licensees mean, corporations are not fearing that they're gonna get sued if they contribute a little or a lot or not at all... That's all good. It is all part of that finely-tuned machinery that's producing more software every year than the world has ever seen.

So this is where I also just get into this -- there's this critique of open source. "It's unsustainable! Like, any minute now, any minute, it's gonna collapse." I was like "Do you know there's more software produced this year than there's ever been in the history of mankind, and a lot of it is ope -source?" Yeah, no. You're doing the chicken little thing. You have your own personal interests and agenda that you wanna push forward, that might be like "Corporations should pay open source developers more." Okay, fine. I guess you could take that position. But to take that position from like a chicken little perspective of the whole world is falling - it's just historical nonsense. Open source is in its best shape it's ever been in terms of number of contributions, strength of software, reliability of that software... All the things are freaking great. It's like, everything's amazing, and everyone is unhappy.

**Jerod Santo:** I think I'm sympathetic to that argument on the margins with individuals. I think that there are definitely open source maintainers who are feeling the stress and strain of the pressure and the guilt when somebody is using their software and they can't keep up with the issues, and the feature requests, and all these things, and they're working nights and weekends for free, for no reason, other than it's just pressed upon them. They're givers, so they've given a gift and they wanna make that gift as best as they can... And like that whole thing kind of - we've seen it unravel for folks over time. I agree with you, the machine itself is not that; it's not gonna just stop operating, and it is producing so much awesome stuff... But there are the individuals who are suffering because of, in many cases, a --

**David Heinemeier Hansson:** \[01:50:24.21\] Because of their own choices. This is why when we use words like 'suffering', which I don't disagree with necessarily...

**Jerod Santo:** Yes.

**David Heinemeier Hansson:** ...is that can describe that individual's feeling. You're here because you chose to be here, dude.

**Jerod Santo:** Right. And it's true. It's also easy to say when you have a healthy relationship with the situation. Like, there's unhealthy relationships that develop around these things, where it becomes very difficult for them to see that straight.

**David Heinemeier Hansson:** But it's also - like, that's your life task. Alfred Adler and The Courage to be Disliked. You know what? I can't solve that for you. You'd probably be disgruntled any which way \[unintelligible 01:51:00.25\]

**Jerod Santo:** Are people asking you to solve it for us?

**David Heinemeier Hansson:** Right, I think actually what a lot of these -- I mean, it sounds glib, and it's 50% glib and 50% real talk... Like, what you need is a therapist. You need to figure out your shit, man. You need to figure out what you're investing in, whether it's giving things back to you, and you need to stop doing the things that aren't returning to you. Sitting around moaning and whining about it... You know what? Not gonna lead to the outcome you want. I mean, as evidenced by the fact that people have been pissing and moaning about being unrecognized and unrewarded from open source work for literally decades. It has not changed the incentives, because it is not an incentive.

So again, I can have human sympathy. That's the whole starving open source artist thing. I can look at some humans and go "You know what? You're a really good developer. You make stuff that's valuable. That's really cool, dude." But also, it doesn't mean that that suddenly produces these extra license obligations of others. If you choose to be sort of at the mercy of donations, that's your choice. There are many other different ways of doing open source. You've chosen this one. Them's the rules, dude.

**Jerod Santo:** Right. So here's one where we're not talking about the marginal open source developer who's the starving artist. We're talking about somebody who's more like yourself, very successful, coming in your wake. In fact, I'm surprised you didn't capture any of the Laravel value being -- you know, Rails is an inspiration for Taylor Otwell's Laravel. And Fortune recently had this headline, "Exclusive: Laravel, an open source startup in Arkansas, founded by Taylor Otwell, raises $57 million from Excel." That's a lot of money. He has gone on the record to say he doesn't really need money at this point. He's posting pictures of his Lambo on the internets, and stuff. So just curious your take on Laravel raising a whole bunch of money. I don't know if you know Taylor or not. Is this a good idea? Is this a bad idea? Your thoughts.

**David Heinemeier Hansson:** First of all, I think Laravel is awesome, and I think it's amazing to see a bunch of Rails ideas expressed in the context of PHP. I did PHP for a number of years. PHP was what led up to me doing Ruby. So I do think there's some beautiful symbiosis there of sending ideas back and forth. I really like to see that. I also like to see different ways of doing things. I like to see people try crazy shit I would never attempt. And I will just lean back and go "That's going to be a good show. I am going to tune in to see how that one turns out." And I wouldn't want it any other way. I think life would be so boring if we all did everything the same way, according to all the same values, and trade-offs, and whatnot. So that's a long preamble for saying - yeah, I wouldn't have chosen that. I know the pressures that come with venture capital. I know what the math looks like. And the math looks like he's got a 10x, 20x that. Easy. That's a lot of money. Like, he's gotta turn this into a billion-dollar business.

\[01:54:10.10\] That's a lot of stress. I hope he's ready for all that. He may very well be. There are others who have done it and succeeded. But there are more who have broken their neck and failed. And I think this is something we at least just need to be realistic about.

We can look at that and go "Do you know what? Good for you, Taylor. I hope he took a bunch of that money straight off the table and into his own pocket and he buys another two Lamborghinis. You built something cool! I like Lamborghinis. You should try a yellow one and a green one. I can highly recommend. It's great." And then also be realistic about the fact, "You know what? Odds tell us this is not going to work." Because odds are that the majority - not just the majority, but the vast majority of all venture capital investments do not work. They turn businesses into dust. Because that is just what happens. Like, 1 out of 10 is going to be the slam dunk, it's going to be the unicorn. Then a couple of the others are going to be sort of these base hits that are usually merged, or sold off, or something else... And then the majority of them are just going to fail. And before they fail, they're going to be pushed to the brink of trying to make them work. And when that happens with developer tooling... We talked about Antirez and Redis. That's one outcome of things that can happen when some of these things get involved in that way. It's not the only negative outcome I can think of in that realm. I really hope that Laravel beats the odds. Not only do I hope, I'm fucking cheering. I want Taylor to succeed at this. I want Laravel to do well. And if he can make it work with some PaaS system that he sells to a bunch of PHP developers to do it - wonderful. I'll cheer. I'll go on the Lambo tour with you, Taylor. It's going to be great. But let's just be realistic about the odds. And I think this is where I've chosen - and Jason and I, for our business, have chosen different paths, that had different odds.

It's always hard to make a business work, no matter how well you do it. But there are ways to make it harder than other ways, and I think you're playing on like hardcore when you raise $57 million. Most of it does not pan out. So just sort of accept that. And then, okay, fine. Say it doesn't work out. Let's just imagine it blows up in the most explosive, exploitive ways. Now there's a shitty cloud that doesn't function, or trying to extort -- okay, PHP is still there. Laravel is still there. It's still open source. Someone else can fork it, take it somewhere else. Let's hope none of those things happen, and that the best possible outcome is achieved, and Taylor beats the odds, and all is good.

**Adam Stacoviak:** Good take.

**Jerod Santo:** Alright, last question from me is when is Rails 8 going to drop, man?

**David Heinemeier Hansson:** I'm looking at my calendar here... Very soon.

**Jerod Santo:** Very soon. \[laughs\]

**David Heinemeier Hansson:** So the first release candidate is out. We pushed that out on Friday, I believe. I think, if it's not going to be this week, then hopefully it's going to be next week. Unless we find something terminal... Well, we're never going to find anything terminal. Unless we find something serious that requires a long time to fix and I can't see it, because all the major -- well, not all. Many of the major Rails apps, they've been running Rails 8 in production for a long time. Shopify runs Rails 8 in production, GitHub runs Rails 8 in production, we run it for Basecamp and Hey... This is the dividend of modern Rails development, is that the new versions, they're generally exceptionally solid, because they're being run early at such an incredible scale that if there is a problem, Shopify is going to find it. GitHub is going to find it. We're going to find it. Either in ergonomics, because there's a lot of developers who have eyes on it, or in terms of performance regressions, or outright bugs, or something else like that. So we're just being extra safe here. Extra careful, which I think is good.

The quality has risen immensely. Those early versions, version 1, version 2... I mean, maybe you wanted to wait for the 0.1 version for that to be a little safe? That's not the case with modern Rails, and it hasn't been for a long time.

**Jerod Santo:** Coming soon to a terminal near you. Adam, anything left?

**Adam Stacoviak:** No, it's been fun. I'm glad we got to dig into some -- I'm glad to hear your thoughts on the way software works, some of the ideas that you're putting out there as the benevolent dictator for life of Rails... So we listened a lot in I would say the first half of the show, and then we spoke more in the second half of the show; we got to conversate a bit more, which I always appreciate... Because you have a lot of good things to say, and people want to just sit back and listen... But it's also nice to have a conversation, to push back a little bit and to raz.

**Jerod Santo:** We had a little bit of both.

**Adam Stacoviak:** So I like that. I'm happy we did that.

**David Heinemeier Hansson:** Kudos to you guys. Sometimes it hits play and it doesn't stop until like 27 minutes later. Occupational hazard of thinking about these things for decades, and talking about them and refining the arguments for at least as long.

**Adam Stacoviak:** And we want to hear those things. We also want to have some conversation, too. So I appreciate that... As part of this one at least. It was cool.

**David Heinemeier Hansson:** Awesome.

**Jerod Santo:** Yeah. Well, we appreciate you coming on.

**David Heinemeier Hansson:** Yeah, thanks for having me on again. I really enjoyed, as always. Thank you.

**Outro**: \[01:59:24.16\]

**Adam Stacoviak:** I'm just so excited about this idea that somebody was bold enough to leave the cloud.

**Jerod Santo:** Ooh...

**Adam Stacoviak:** That's really it. And you probably can't condense that into four minutes...

**Jerod Santo:** He can't do this in four minutes... Come on.

**Adam Stacoviak:** But I just wanna share my excitement in this conversation, because that's cool. You've kind of made homelabbing at scale cool.

**David Heinemeier Hansson:** Which to me is so funny, because it's exactly the same discussion as we had with SQLite. We took something "old", which was to run your own server, which - by the way, everyone did five minutes ago, until AWS sort of steamrolled the marketing hype to the max, and convinced everyone...

**Adam Stacoviak:** Uh-oh... Go to Changelog.com/++. It's better.
