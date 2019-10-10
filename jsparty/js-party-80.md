**Kevin Ball:** Hello party people, and welcome to another episode of JS Party, where every week we are having a celebration about Javascript and the web. I am Kball, I am your host this week, and I am joined by two of our regular panelists, who I'll introduce shortly, but first - we have an extra-special guest today, Chris Ferdinandi, who is often referred to as the Vanilla JS Guy, or as he self-described to me when I asked, "That jerk who argues with people on the internet." Chris, how are you doing?!

**Chris Ferdinandi:** I'm doing great, Kball. Thanks for having me on, man. It's great to be here.

**Kevin Ball:** Yeah, we're super-excited. And then our two panelists joining us again - we have Divya.

**Divya Sasidharan:** Hello!

**Kevin Ball:** And the one and only Nick Nisi.

**Nick Nisi:** Hoy, hoy!

**Kevin Ball:** You did it again, I love it. Where's the accent?

**Nick Nisi:** Hoy, hoy.

**Kevin Ball:** Perfect. Okay. So having Chris on as the Vanilla JS guy, our topic for today is, of course, vanilla JS... And a little bit of just Chris. Chris, can you introduce yourself and tell us about all the different things you have going on?

**Chris Ferdinandi:** Yeah, there's just a couple things... I am a self-taught web developer. I started doing this actually right around the same time as Divya. Her and I met right at the start of our respective careers at Artifact Conference in Providence, Rhode Island (super-awesome). We're both speaking there, by the way, this year, so if you guys can make it out there, I highly recommend it. It's gonna be awesome.

I started off my life as a developer knowing purely HTML and CSS, and partially out of a lack of ability to find meaningful employment, and also partially because as a self-taught developer I didn't feel like a real developer, because I didn't know Javascript. I started teaching myself JS, and somewhere along the way I transitioned from learning this stuff in jQuery to wanting to really understand how it all worked under the hood. And then when frameworks started becoming more and more of a thing, I started feeling more and more like they were just making all this stuff way too complicated, and just never really dug that whole thing. No disrespect, Divya, because I know you're all-in on Vue...

Over the last five or six years I've really become a specialist on all things native, plain, out-of-the-box Javascript. And one of the things I really struggled with early on was the fact that because it's not owned by any one group organization, there was no single source of documentation. The types of tutorials you'd find were varied in quality, and a lot of times you'd have to cobble together your own comprehensive education from a bunch of different resources. Stack Overflow can be awesome, but if you're a beginner, they can be sometimes a little bit hostile to beginners, and questions are deemed too like obvious or entry-level.

\[00:04:04.22\] So I started creating educational resources to help other people who were going through the same thing. It started off just me blogging about the stuff I was learning, and eventually evolved into a daily newsletter, than a set of eBooks, and videos courses, and eventually a full-on eight-week training program. Now I have this video subscription series thing I do, where people can code along with me in real-time and work on vanilla JS projects.

It's a lot of fun. I didn't expect this to turn out the way it did, but it's been kind of an interesting journey for me.

**Kevin Ball:** I was looking at your portfolio - you have guides, you have a podcast, you have a newsletter, which I was a subscriber to for a while actually, by the way, and then I stopped because I have too many newsletters.

**Chris Ferdinandi:** Oh, yeah. After a while, the daily volume can become -- once you know what you're doing, the daily volume can become a little bit much, so I totally get it.

**Kevin Ball:** Is there a coherent strategy? Is it just all things vanilla? Is this intended to be a full-time business, or this is a sideline? How are you approaching this?

**Chris Ferdinandi:** It's all things vanilla. There's not necessarily a super-focused "I'm just gonna double down on this one aspect of it." It's all of the pieces of vanilla Javascript. But for me, always with an eye towards simplicity. My primary audience is typically people who are early career developers, or people who have been working on the web for a while, but as designers, and are now looking to transition into learning a little bit of development.

It is currently a side business. It started off as one of those things where like I wrote a couple of things, and I was like "Oh, if I can make a couple hundred bucks off this, I'll feel happy." It is increasingly evolving into something that I hope will become my full-time job at some point... But yeah, for now it's my side hustle.

**Kevin Ball:** Awesome. We kind of got into the why behind vanilla for you, in terms of getting frustrated with the levels of complexity, and things like that... From an audience standpoint, from the folks who were out there learning, is there a reason why they should be focusing on vanilla JS?

**Chris Ferdinandi:** Yeah, that's a great question. There's a couple of things... Even if you eventually want to dig into a framework, like React, or Vue, it can be really helpful to understand the basics of the language that those things were written in and how they work under the hood. I have a lot of students who try to get into -- and I think Vue is a little bit easier to start as a total beginner and get up and running with, but in particular React, which is kind of the beast to contend with these days... It can be really difficult for a beginner to wrap their head around some of the paradigms and some of the core methodologies of how that framework works... And I've had a lot of students who have tried to do it, gotten stuck and confused, stepped back, worked with me on building up their fundamental vanilla JS skills, and then got back to learn React and found that it was way easier to pick up.

So if you're someone who thinks you wanna learn a framework and you haven't yet, learning the fundamentals will help you not only pick those frameworks up faster, but also write code with them better. That's a big one.

The other thing for me is even if you never wanna go down the path of a framework, or if you're kind of debating "Do I do a framework or not?", one of the other big things for me - and Divya, you and I may have some debates around this, or possibly some interesting conversations, but I think there's an argument to be made around things like the performance benefits of not using a framework. A lot of times people justify using them because you get performance gains from things like the Virtual DOM, and some abstractions that they built in... But my argument is that in many ways they actually hurt performance in some more meaningful ways, particularly when you're not working at Facebook or Twitter levels of scale. I think there's an argument to be made that if you're using these in a team environment, that can act as a form of gatekeeping, that keeps either beginners or people whose core competency is not Javascript from working with your codebase in a meaningful way, when they otherwise could.

\[00:08:02.15\] And then potentially depending on what you're trying to do, they can actually introduce more fragility into the project. I think a lot of times we turn to these tools to render markup when that markup would be just as easily rendered as markup on the server in the first place. I know you can use some of these tools at server-side templating things; I'm cool with that, but I'm thinking more about people use Vue or React to build a blog, and render the entire thing in the client. I think there's a pretty good argument there that that's better just served up as static HTML from the server.

I can dive into any of these topics if you want, but at a high-level these are the things I think about when I'm talking about why I think vanilla is such an important part of the ecosystem.

**Divya Sasidharan:** I think there's a really great article by Jeremy Keith, where he makes a very similar point, which is the idea of Javascript is not necessarily bad, but he's more an advocate for server-side Javascript, because essentially from the server you would do the rendering, and then you're passing static markup to the client, so the client is not doing a lot of work. So from a performance standpoint, you get wins from that, but you also get the niceties of writing a framework, because sometimes that's easy to componentize, it's easy to reason about for some people, for teams, and so on... So you kind of get the best of both worlds. You get the joy of vanilla without having to write vanilla, because you're still depending on a framework to do a lot of that work for you.

I thought that was a really great in-between, to be like "You know, we're not saying frameworks are totally terrible, but we're saying that frameworks are bad if you depend on it to do all of your client-side rendering. Because in that case for SEO it's not great, for performance not so great, and so on... Which I thought was a very salient point.

**Chris Ferdinandi:** That article is called The Split, by the way, so if anybody who's listening wants to go read it... It was a really insightful one. He talked about a lot of the stuff you just mentioned, Divya. Jeremy also -- this has kind of been his talking point for five or six years. I think Artifact Conf, where you and I were both at - the whole thing was resilient web design. I'm not saying anything new, I'm just in many ways parroting what a lot of much more smart and seasoned people have already said.

Is there any particular angle you guys wanna dig into this on, or anything I said that you disagree with?

**Nick Nisi:** Well, I'm curious what you mean by vanilla JS, to start... I technically don't write Javascript much anymore, and I don't think a lot of people do, because we're writing a lot of flavors of Javascript, and that might be something that you're running through Babel to get you tomorrow's Javascript... So it's not technically today, but... What would you define as vanilla?

**Chris Ferdinandi:** I actually wrote an article about this not all that long ago, because it is a little bit fuzzy. In the purest sense, it's literally just the native browser APIs and Javascript methods that come baked in with the browsers. But that almost implies that you never use plugins, never use helper functions, that you're hard-coding every single thing you do over and over again... And that would be absurd. So I don't think that's necessarily a reasonable definition. It's in many ways a little bit of like "I know it when I see it" kind of thing, and I often prefer to talk about it in terms of what it's not, rather than what it is.

For me, vanilla Javascript is not loading large libraries like Lodash, or jQuery. It is not using frameworks like React or Vue or Angular. But it could be using smaller helper functions, it could be using lightweight plugins that don't have any other additional dependencies, or third-party integration requirements. It could even be doing things like using Babel to parse some more modern Javascript into some older Javascript, or using something like Svelte, or hyperHTML to handle some of the rendering for you... And if you're not familiar with those tools, they do some of this stuff that React or Vue do, but they don't include a lot of the other stuff. They're purely focused on data reactivity and rendering, and they don't include a lot of the other helper methods and things like that, so they're a lot more lean; they weigh in at somewhere between 6 and 8 kilobytes instead of 30 gzipped and minified.

**Kevin Ball:** \[00:12:18.23\] Svelte is a really interesting example to dig into here, because it has a lot of abstractions, but they're all compiled away. It's compile time abstractions, rather than runtime abstractions.

**Chris Ferdinandi:** Yeah, and actually the article Divya mentioned talks about this a little bit too, where there's two different types of code. There's the code that the cost incurred by the user, and the type of code where cost is incurred by the developer or the server beforehand. Svelte clearly falls into the latter, Sass falls into the latter; running React of Vue server-side falls into the latter, where all of that performance hit, or all of the expense of using that tool is incurred not by the client. It never gets shipped to the client.

So yeah, I think a tool like Svelte - you're right, it has a lot of abstraction in it, but what you're ultimately serving up to the client is vanilla Javascript.

**Kevin Ball:** Interesting. So that addresses the performance overhead or overheads related to vanilla versus not vanilla, but it doesn't necessarily address the ease of entrance or the transparency. I haven't dug too deeply in Svelte, but it's going hard on the declarative component-based model and various other things that are not necessarily vanilla from a conceptual entrance perspective.

**Chris Ferdinandi:** You're absolutely right, I was. To be fair, I don't personally use Svelte; it's just not my ideal way of writing, developing code. I don't like a lot of kind of beforehand compilers. Honestly, I'm in many ways a developer dinosaur. My preferred way to work for the web is with a text editor and a browser, and I don't like a lot of tooling in the middle. But for folks who do, my biggest concern with the way we build for the web today is that we prioritize developer convenience over user experience...

And that's not always the case, and I know there's kind of this weird argument that happens where like if you make it easier for developers to build all these things, then they'll focus so much more on building all these great features for the user, but that's not really what often ends up happening. In reality, a lot of times you end up in a situation where Javascript begets more Javascript... So we end up with this massive behemoth that we have to manage and maintain, these crazy dependency chains that need to get constantly updated.

Jeremy talks about this in his article too, that I'm more comfortable with these tools because they don't incur any cost on the end user... But you do still have the gatekeeping concern, where someone who's not comfortable working with these tools or these methodologies is going to have trouble accessing the codebase and working with the codebase. So that's kind of like a "You were right, but I still am comfortable with them anyways" kind of responses.

**Kevin Ball:** Interesting. It sounds like then to me for you the biggest thing about vanilla is actually about what's the cost to the end user, and the entrance path ease of understanding is important, but maybe not your number one priority.

**Chris Ferdinandi:** Yes. I think it's a little bit of both, and a lot of it depends on the audience. But yeah, it is a bit of both. If I had to rank them, performance is part of it. Ironically, as a Javascript educator, I spend a lot of my time trying to convince my students to write less Javascript in the first place, too. So I'm often lobbying for using more HTML, using more CSS, and using a lot less Javascript. The talk I'm giving at Artifact in October is actually entirely focused on how we write too much damn Javascript and we need to stop doing so much of it. It's kind of a weird thing to say as someone whose whole business model is built around teaching people Javascript, but yeah... For me, vanilla is kind of an overall ethos around building things for the web, as it is a particular approach to Javascript development. And not everybody will agree with that, but when I think about it, it's about more than just Javascript.

**Divya Sasidharan:** \[00:16:10.07\] I was just wanting to ask in terms of like what are your thoughts towards optimizations like prefetch and so on, which try to improve -- which is kind of the Javascript being like "Let's have it all. Let's have our cake and eat it too, so that we can make sure that we're not serving the entire bundle, we're serving whatever only needs to get loaded for that specific request" and so on. Do you have thoughts on that process? If it useful etc.

**Chris Ferdinandi:** Useful? Sure. Anything that speeds up performance for the end user is good. But. I continue to believe that things like prefetch, things like code-splitting, even this obsession with single-page apps because you don't have to re-download all these files every time - those approaches exist in large part because we've made our websites too bloated in the first place. And if the codebases were smaller to begin with, if they used a different approach to the stack, if they shifted more of that weight to less expensive parts of the stack, a lot of these tools and techniques wouldn't be necessary in the first place.

So they can be great, lean on them when they make sense, but I would much rather as an industry we spend more time talking about how we can write less Javascript to begin with, how we can make the stuff we build more performant because we lean on the things that the browser is good at, and stop throwing so much of the stuff that it chokes at at it... If that makes sense.

**Divya Sasidharan:** Yeah. I'm actually curious... Going back to a previous point that you've made, because you were mentioning that we shouldn't lean on libraries like Lodash, and we should create helper functions and so on... Those are great, but there might come a point where you might be rewriting a framework, or rewriting pieces of a framework. If you want state management, or if you want something like Moment.js, or some helper function in Lodash, you might end up having to rewrite it. So yes, you get the benefits of performance, but you end up doing a lot of work rewriting code that's already been done.

**Chris Ferdinandi:** No, because -- there's a caveat here. I would not rewrite something that already exists in Lodash, as much as I would shamelessly steal it from Lodash... With proper credit, and everything. But I see people load the entirety of Lodash for a single helper function from that library, and Lodash provides mechanisms for you to extract just specific or individual helper functions out of it. And I am totally cool with that latter thing. I have a problem with you loading the entire - not you specifically, Divya - library just to use one or two things.

Back in the day, people would load jQuery just to add/remove classes from a few elements in the DOM, or just to get some elements and loop through them. And you don't need 30 kilobytes of JS just to do that. I'm comfortable with using third-party tools, I just think we need to use them more responsibly.

You mentioned Moment.js... There's an alternative, Day.js, that's only 2 kb and has a lot of the same API. It's a little more feature-light, but most people don't need the full feature set of Moment.js. They only need a couple of pieces of it.

This is the kind of thing I'm talking about - looking for lighter-weight alternatives when they exist, creating some of your own when they don't, and just maybe being a little bit more responsible overall with how we do things. It feels to me a little bit like web development is stuck in the Hummer days. Do you guys remember when the H2 Hummer was the status symbol car to have, and all the bros used to drive around in them? And now Teslas, and Priuses are more a thing, and people are a lot more focused on minimizing their footprint...

\[00:20:10.00\] And it feels like web development right now is stuck in the "We have all these big things just because we can." I'd like to see us get to a more -- I'll say environmentally responsible approach, both in the very literal sense, because there's a cost to hosting and loading and transporting all these JS files, but if you're just thinking about the web environment and the ecosystem in which users of the things we build have to operate, this stuff all comes with an expense for our end users.

**Divya Sasidharan:** Yeah. It's interesting that you mention environmental cost, because Alex Russell wrote an article about the "Developer Experience" Bait-and-Switch...

**Chris Ferdinandi:** I love that man...

**Divya Sasidharan:** Yeah, he talked about Javascript being the CO2 of the web, which is really nice... So in short, the whole vanilla JS is not so much about writing Javascript, but it's more a philosophy of how you approach web development to be more responsible about the things that you add to your project, and making sure that's maintainable, and so on.

**Chris Ferdinandi:** Yeah. I think it would be absurd of me to say "You always need to write all of your own stuff and never rely on third-party tools." I don't do that, I certainly wouldn't expect you to do that. I don't think that's a reasonable thing to say. And some people do argue that; I think that's preposterous. But yeah, it's about being a little bit more deliberate with your choices, rather than just always grabbing the popular, large, off-the-shelf kind of stuff.

**Kevin Ball:** I'm curious to play with that metaphor a little bit. Web development is stuck in the Hummer days... I guess thinking about what are the biggest frameworks - something like Angular is probably the H2...

**Chris Ferdinandi:** React and Vue, the H3...

**Kevin Ball:** Okay. And vanilla - is it a bicycle? Or where are we at?

**Chris Ferdinandi:** It depends on the flavor of vanilla you're using.

**Divya Sasidharan:** It's a Lime scooter. \[laughs\]

**Chris Ferdinandi:** It's some sort of an electric vehicle. The other part of this is it's not just -- so I've seen blogs that load basically nothing but HTML and CSS, and maybe just a sprinkling of Javascript for a little bit of interactive pixie dust... I've also seen blogs that were built entirely on React. It's a static site, but the whole front-end is running on React. And if you're really straining this metaphor that Javascript is the CO2 of the web, then I think those two different ways of building the same thing have very different carbon footprints. I've built entire -- the whole front-end is driven by Javascript before. When people buy my stuff - guides, videos, things like that - they get access to this course portal, where they can access their things, watch the videos, download stuff... The whole thing is Javascript-rendered. All of the markup is Javascript-rendered. And I can inline the entire CSS, the base markup and all of the Javascript to render all of the stuff -- just inline it in the HTML file and it gets served in a single 14 kb HTTP request, minified and gzipped.

So even though the whole front-end is built in Javascript, I'd argue that's still a much smaller footprint for the end user than if I had to load a framework to do that same kind of rendering. And that doesn't work for everyone, and it doesn't work for all sites, and I totally get that... But yeah, there's kind of like a gradation here; I don't think there's any cut and dry "That's bad. This is good", and I think you can make a clear argument that for certain large-scale sites using a framework does have some legitimate benefits. I think we lean on the idea that "Oh, at scale, at scale" way too often. I think a lot of the things people throw that argument at - they're not really building at the kind of scale that these tools were designed for. But that's a different conversation.

**Break:** \[00:23:55.07\]

**Kevin Ball:** Okay, welcome back to JS Party. Let's talk about another related topic. Chris, you're doing a lot of teaching, I know Divya you've done a lot of teaching and you're involved in that... So let's talk about how to learn, and how to learn Javascript. I think one fun place to start, given we have the guy who argues with people on the internet, and other things... This argument about starting with a framework versus starting with fundamentals. It's very easy to just say "Oh, you've gotta learn the fundamentals." It's kind of hard to argue against globally, but I think there are reasonable arguments both for and against what sequence you should do.

Let's throw that out and start with you, Chris - what are your arguments about what someone should learn first, and why?

**Chris Ferdinandi:** Okay. My general thesis here is that learning inertia is more important than doing things perfectly. I would much rather see someone use whatever approach gets them from "I don't know what I'm doing" to "I'm writing something that works, and makes me excited to keep doing this", whether that's using jQuery, using a framework like Vue, or working in vanilla.

I believe that I can teach people how to do that with vanilla really quickly. In fact, for a while I had to use this little "I can teach you Javascript in 20 minutes" kind of shtick, where I would take you from knowing nothing to writing a working little script in 20 minutes or less. But yeah, for me the biggest thing that kills learner motivation is trying to make something work and getting stuck and then not knowing what to do next. That's where most people give up. And I would much rather have you use jQuery, or use Vue if that gets you going faster and keeps that momentum going, if the alternative is you just quit.

I'm totally cool with the idea that people can back into the fundamentals, and a large part of that is because I learned with jQuery. I could not wrap my head around vanilla. I learned with jQuery, and then started doing the whole "Oh, if you do this in jQuery, you do that in vanilla" mental map.

So I think it's totally fine if that's what people wanna do. I probably am thinking people weren't expecting me to be so pragmatic about it, but... I think there are some really good reasons to jump into vanilla first, but I certainly don't think it's required or necessary... Or even the best approach for everybody. I know some people get it right away, some people find it really weird... I was just talking with someone this morning who -- she could not wrap her head around vanilla; she's been trying for weeks... And then she picked up jQuery and it instantly made sense for her. In her situation, I'd much rather she go down that path and keep at it.

**Kevin Ball:** Well, that takes the wind out of my argument, because you just echoed exactly what I would have said.

**Nick Nisi:** You're not letting us argue here. \[laughter\]

**Chris Ferdinandi:** I could be more dogmatic about it... I think the big argument in favor of vanilla these days is that -- like, five years ago it was really easy to make arguments that "It's really tough to do X, Y and Z in vanilla, and it doesn't work really well across different browsers, so having to juggle all these things...", but unless you're using a lot of the cutting edge stuff, that's just not the case anymore.

\[00:28:04.07\] You could argue that things like querySelector() and querySelectorAll() are absurdly verbose, and I would say "Yes, you're right. They are", but the power features are there, and they work really well across the browsers that people actually use today. It's easy to get elements in the DOM, it's easy to toggle classes on and off, it's easy to get attribute values and set attribute values. The harder things are usually the things that the frameworks abstract today, like managing state-based UIs, and dealing with data reactivity, and that sort of thing. That's why if you're gonna learn and you need a tool to help you, I think a helper library is actually a better choice than a framework. I don't see Vue -- no offense again; maybe React is the better choice here... I don't see frameworks aiding the learning process the same way that I see helper libraries aiding that learning process.

**Nick Nisi:** For sure. I agree with that, and kind of parroting a little bit of what you've said - back in the day...

**Chris Ferdinandi:** When I was a webmaster...

**Nick Nisi:** Yeah... \[laughs\] A lot of things that I would wanna bring in, like jQuery (well, sort of jQuery, but...), or the reason I would wanna bring in something like Backbone to work on an app is because I wanted that pattern and consistency that it would bring in. The main thing that comes to mind is creating classes, or doing object-oriented Javascript. Before ES2015 when we actually had the class, like sugary syntax, you could be doing classes one way here, and Dojo has a wrapper that lets you do it with multiple inheritance, and Backbone has their own way...

There were just so many different ways to do things, but that was a way to consolidate on a pattern and then use that throughout your codebase. Now we've kind of consolidated on the platform, which I think is much better, even though classes are kind of falling out of favor, which is probably a good thing, but... The platform is catching up to what we need and meeting those needs, and anything that it's not, helpers are definitely a way to go to bring that in.

**Divya Sasidharan:** I think one thing I find having taught people are new to development and so on, a big part about frameworks is the abstraction is really nice, because you can get going super-fast; they can build something incredibly complex-looking without doing a lot... Something really complex, with multi-page and routing and so on, without knowing a lot. That's super-nice. I've found, compared to when I teach actual fundamentals, that it gives people that immediate euphoria of like "I've built something and I was able to do this without knowing a lot."

The issue there though is that often times those abstractions take away from the learning experience as well. It gives you the niceties of like "Yeah, I've built something!", but then I always try to bring it back to be like "Do you know what's actually happening?", and then kind of showing the different steps of "This is what routing is. This is what state management is", and so on... Which to me - and I guess I'm speaking directly to my own learning and how I learn, and in general I think when I work with students (a lot of them are in university) they kind of want to have that, like "I've built something" sense... Because they're like "I don't have a lot of time; I have other classes, I have things to do", and so giving them that immediate satisfaction of "I've built this thing" and then teaching them slowly how the pieces fit together has been incredibly useful... Because then things click a lot better, because I'm like "This is what a scope is, this is what classes are, and this is why it's important... Because remember, you used it here. This is exactly what's happening under the hood."

It's not always successful, because sometimes people just don't care... Because they're like "The framework deals with it for me. Why should I care?" and then making that argument is really hard...

**Chris Ferdinandi:** \[00:31:59.26\] To your point though, Divya, a lot of learning material that I encounter tries to teach some of these high-level concepts in the abstract, and it's really hard to make it click with people until they actually see it in action. I think what you've just described, where you build this thing and then you back into how it's working under the hood - I think that can be a really smart approach. And that euphoria of making something that works out of nothing... My website is GoMakeThings.com, I love to make things, but I am really bad at building stuff with my hands. I suck at woodworking, I can't do plumbing, or metal work, or anything like that... But with web development, I can build stuff that actually does things, and it's really exciting and cool.

I remember the first time I got that "Wow...!" I took an empty document and made it do stuff; it's a feeling that's really hard to compare to other stuff. So yeah, anything you can do to get people into that space quickly, so they have that motivation to keep going, is really important.

**Divya Sasidharan:** Yeah, I think that approach that you see in old school movies like Karate Kid, where he has to go through -- I mean, it's obviously sped up, but you have to go through this process of proving yourself, and then you learn the fundamentals of "wax on, wax off", and you're like "How does this relate to anything?", it's so old-school, and it just does not resonate with students, or anyone really... Because you're like, "Oh, you have to learn all of these, and after a couple of years you'll finally be able to build the thing", and people just drop off after a while, because they're like "What's the point?" That's frustrating.

So from a teaching perspective, it's really important to get that hook of "Look, you've built this thing. Now let's move further and let's make that a little bit better, and let's sharpen your knowledge of how things work, how can you improve", and so on... Which is just a really great way of achieving success and encouraging people. Because it's really discouraging when people don't build anything. They're like, "Yeah, theoretically I know how the DOM works, and how to write some basic Javascript, but what's the point...?"

**Kevin Ball:** Talking about learning inertia then, because I think a lot of this is coming back to this thing - you need some movement, you need some momentum - what are the things that people are having trouble with that kind of stops that inertia in its tracks?

**Chris Ferdinandi:** Before we go down that path, I just need to thank you for saying "inertia". Whenever I use that, people are like "You mean momentum?", and I'm like "No. In the physics sense, it is inertia." So thank you, Kball, I feel vindicated as a person; I feel heard. Thank you very much for that.

**Kevin Ball:** By the way, my degree -- I almost commented on this... I did not get a CS degree because my first CS course was exactly the terrible things you all are talking about. My degree is in physics.

**Chris Ferdinandi:** \[laughs\] Oh, that's awesome. I love physics. I didn't study it beyond some high-school and entry-level college, but that's awesome. Yeah, so... Interestingly, when anybody signs up for my newsletter, they get an e-mail from me asking "What's your biggest challenge as a web developer?" I feel like I get a lot of responses back from people on this sort of thing. There is a huge variety in responses, but there is one response that comes back more than any other. It's at least half the responses I get... And it's some variation of "I don't know where to start. I am overwhelmed by the need to keep up with all the things" or "I don't know which framework to pick first."

There's this real pressure to feel like you have to just constantly keep up with this absurd change of pace that we have in our industry, and it's one of those things that makes web development really exciting. If you're someone who thrives on learning lots of new things, this profession gives you an opportunity to never be bored. But it's also where a lot of the burnout comes from, because people feel like they have to constantly keep up, and if you don't, you're gonna miss some important boat and get left behind, and your career will be terrible, and no one will ever love you, and you're gonna die alone with your cats. So that is literally the number one problem that I hear from people.

\[00:36:15.23\] A lot of the other stuff is a lot more on the nitty-gritty tactical stuff. Things like "I don't know when to use prototypes", or just these really minute details about specifically when you should use one approach versus another.

**Kevin Ball:** I'd actually love to dig in on this knowing what to focus on. Because I also survey folks on my newsletter about where your challenges are, and things in front-end development, and this is one of the number one challenges that people have - what should I be focusing on? How do I possibly keep up, or how do I make sense of where to start? And I have some opinions on that, but I would love to hear your opinion, Chris, but also from Nick and Divya. If somebody comes to you with that question, saying "Gosh, there's so much... Where do I start?", how do you even approach that?

**Divya Sasidharan:** The thing is - and in a sense the reason why I really love Vim - because it's not much different from writing HTML and CSS in Javascript. Yes, you have single-file components, yes, it bundles into Javascript and whatever, but from the core of it, you're still writing something that you're very familiar with. And so if you've ever done any web design or development, it's not completely new.

I start with that, because I'm like "This is your markup, and this is your Javascript", and often I don't even talk about the Javascript aspect of it, I just talk about the markup, and I'm like "Here's where you write your HTML", and start from there. Then you build on like "Okay, you wanna make it interactive. You wanna make this button click", and then you put an on-click handler... Which is not very different from doing it in Javascript. A little bit easier, because you can just put a "at-click", and then the event method name, versus doing document.querySelector(), which is annoying to have to write every single time. jQuery obviously makes it better. But I usually try to start from building blocks that way, and obviously, as I said, I'm super-biased, because I love Vue... But for me, it's just a matter of just making people understand what these pieces are.

Then I also try to talk about the other frameworks and what they do. Because often whenever I introduce Vue, people are like "What about React? Should I be learning React?" and I'm like "Well, it depends on what you wanna do. It's a stylistic thing. Ultimately, they bundle to the same thing, they do similar things, they have a virtual DOM etc. It's the same." It's just like "Do you want to write JSX? Do you want it more imperative? Do you wanna write your HTML, CSS and Javascript separately?" This discussion is more like framework choice than anything, and I'm like "I'm teaching you Vue because I like it. You can choose to use React. It's just a different way of writing things." You can even write Vue like React. I can show you how to do that... \[laughs\] Because that's possible; there's a render function and you can make it look exactly the same... But I think that's the core concept of it - understanding why you make decisions and being intentional about that.

Something we talked about earlier, which is being intentional as a developer - it's core to being a developer. Understanding and reasoning about why you're making a decision. Because it even starts at the beginning of your career, like "Why did you pick a framework?" It happens whenever you talk to someone, whenever you're like "I'm a React developer" Why are you a React developer? Why did you pick this framework? You have to know why and make decisions.

And saying "Oh, because someone else picked it" is not good enough. I guess it cuts it sometimes, but it's nice to be able to have that opinion... And developers are opinionated.

**Chris Ferdinandi:** I know Vue because Divya told me to learn it.

**Divya Sasidharan:** \[laughs\]

**Nick Nisi:** The framework chose me.

**Divya Sasidharan:** \[00:39:57.01\] The framework chose you, exactly. I mean, arguably, I ended up writing a lot of Vue because I joined a company where they wrote Vue, so it was like -- it's something I've wanted to learn, and then I joined a company where I had to learn it. Then I learned it, and then I was like "Oh my god, this is great!" I used to write React, and I was like "This is way better. I love it." I still think React is cool and everything, but I think Vue is cooler... But that's another discussion.

**Nick Nisi:** I kind of approach this question from a couple of different viewpoints... Mostly, is there something specific that you wanna try and solve? And if there is, then you should try and just work towards that and just do not care if the code looks terrible, because you can always go back and fix it later. Once you have something working, you will calm down, you will be less stressed and you will be able to go back and look at your code and tear it apart and understand it, and go from there.

If you're more talking about just learning something, like learning Javascript for example, I tend to pick things that are free, so you have zero investment to really get into it. And that can depend on how you actually learn. That's probably something that you yourself have to answer - do you learn best from a book? If so, maybe Eloquent Javascript. Would you rather watch video courses? Maybe Wes Bos.

But the main thing that I would pick is something that allows you to learn a little bit, and then try it, and then fail, and keep trying it. But not just being lectured to for hours; instead, have a little bit of lecture, have a little bit of reading, and then go in and try and do something very small, just to build that up and get that practice in.

**Chris Ferdinandi:** Nice. My background - before I was a web developer, I was an HR guy who used to work with software developers on career development stuff... So I have a little bit of a perspective here, just because I've seen folks go through this in my pre-developer life, too. I'll put this in the show notes too, but I wrote an article about knowing what to focus on some time back, just because I get asked this so much... And for me, there's like 3-4 core things. Some of them, Nick and Divya - you both already touched on. One of them - Nick, I think this is a little bit like what you were just talking about... This concept of "just in time learning."

This is a trick I picked up from Sara Soueidan whose name I almost certainly butchered, and Sara, I am so sorry. But it's this idea that rather than trying to learn all the things just to keep up with all the things... I usually hold off on learning something new until it's required for a thing I'm trying to accomplish. I didn't go out and learn Flexbox or CSS Grids just because they're the new hotness and everybody is chasing after them. I went and learned those probably a year and a half after a lot of people already knew how they worked, because they helped me achieve a layout that I was struggling with otherwise. So they provided an advantage that they didn't before.

Same thing goes for Fetch instead of XHR for making asynchronous Javascript calls. XHR was serving my needs perfectly for a really long time. And to be completely honest, when I learned Fetch, I decided I liked the XHR better and went back to it.

**Nick Nisi:** This is why I still don't know Vue.

**Chris Ferdinandi:** Right? A lot of these tools - they either don't solve problems I don't have, or there's no need for me to know them yet.

One of the other reasons you could advocate for vanilla Javascript first is that -- not that these tools ever really go away; there's still tons of places that build things with Angular. But you can see the cycle of new hotness, where Angular was THE thing. And then React came out, and everybody was like "Oh, forget Angular. React is way better." And then Vue came out and people like Divya -- and even myself; even though I don't use it, I look at the docs and I'm like "This makes so much more sense." Or like "Oh, forget React. Vue is better." Obviously, React still has a pretty dominant place, but you can see Vue's market share starting to grow and grow and grow...

\[00:44:06.06\] If you work primarily with vanilla Javascript, there's never this new thing you need to ditch your old thing to learn. I'm just constantly entrenched in the fundamentals and I never have to think about how I have to build the thing I wanna build. Not that I never have to think about how to build it, but I've got this foundational knowledge that serves me well across whatever I try to build.

Similarly, this idea of stable technology over the new hotness - the stable stuff is certainly less sexy, but it also potentially has more traction within a working environment. Companies don't wanna use the new thing, they wanna use the proven thing that they know is going to work for them. These days, Angular or React are good choices because a lot of companies use them, trust them, they've been around for a while... And in terms of employment, I have this concept I call "targeted listening". If there's a particular job you want -- I tell this a lot of times for beginner developers. If you know you wanna work at a certain company, or there's a type of job you wanna do, talk to people who do that job, look at job descriptions for the kind of roles you want. What sort of skills and technology are they looking for? If you wanna go work somewhere that says they want React experience, to me the no-brainer is to pick React. Dig into that, learn it, and then go interview for the job.

When I was first interviewing for my first web developer role, I was looking in-house at the company I was at, and I talked to the director of UX. I asked very specifically how they were approaching responsive web design, and she told me "Mobile is a fad, and one that I think is almost over. No one wants to do the thing that they built on their phones", and I literally, immediately just ended the interview and said it wasn't a good fit, and thanked her for her time and left, because I knew that wasn't a good fit for me.

I think paying attention to bigger trends in the marketplace rather than just jumping over to the next new thing... Mobile and responsive web design represented a really big shift in the way that the industry worked, whereas a lot of these frameworks are just tools to approach a particular set of problems in a specific way. But what they're all getting at is a bigger shift in the way that we build things, with state-based UI, and reactive data models, and things of that nature.

So for me, the specific tech choice there is less important, and understanding the shift in the way we do things is more important. I tend to follow some people on Twitter, and by reading blogs, that I think have a pretty good pulse on shifts that are gonna happen in our industry. And when they say something is important to pay attention to, then I tend to pay attention. People like Brad Frost, or Jeremy Keith, Ethan Marcotte, Sara Soueidan they're my compasses for when I should pay attention to something or not.

**Kevin Ball:** I wanna chime in just a tiny bit. You hit almost all of the points I was gonna say, so I don't need to say much...

**Chris Ferdinandi:** I'm so sorry, Kball...

**Kevin Ball:** Oh, no, no. It's actually better that you say it, because I harp on this a lot, and people are probably tired of me saying this... But I think the last thing that you said there is really important, which is look at the bigger picture, not the micro-picture. Look at what are the mega-trends, and if you look at all of these things, like Vue, React, Angular - they are all tapping into the same big trends, and they are all using some of the same fundamental models... And you will be much better off just picking one and focusing on it and getting far enough on it that you can kind of understand those bigger picture questions, than trying to spread your time.

\[00:47:48.18\] I see a lot of junior folks being like "Okay, I have to learn some React. And now I've gotta learn some Vue. And now I've gotta learn some of this, and now I've gotta learn some of that...", and I think you are gonna do yourself -- both you'll be less stressed, but also you will learn better if you pick one and focus on it, and go deep enough that you actually get a fundamental understanding of those bigger picture questions of what is good component design, and how does that work? How does a front-end app get architected? How are the different pieces fitting together? How do I deal with data flows, and all of these different things... The details are in some ways only important as a way to get to the bigger pictures and the understanding.

**Chris Ferdinandi:** Agreed. Guy Kawasaki tells this story that I'm going to bore you guys with right now, I'm so sorry... He tells the story of -- it's literally the history of ice. Back in the 1800's you used to have ice harvesters. If you've ever seen the movie Frozen, this is what that opening scene is, where the guys are cutting all the ice out of the frozen river and throwing it on the sleigh and that's how people got ice for their iceboxes; they would haul it down from the mountains and drop it off in people's houses. And then eventually, they figured out that you could manufacture it in these big factories, so they would manufacture it there and throw it on a horse-drawn cart and bring it to your house.

Then in-home refrigeration came around, and suddenly you didn't need any of these things because you just make ice in your house, or keep your food cold. But the crazy thing is not just that these shifts happened, but that almost no one who is in the ice harvesting business jumped into ice factory manufacturing, and nobody in the ice factory business jumped over into in-home refrigeration. They all missed these shifts that were going to completely change the way that their business worked, and they died out.

So when I'm thinking about what to learn and what to focus on, my biggest fear as a developer and as someone who advocates for the simpler ways of doing things is -- and I'm probably gonna undermine all of the points I made in this conversation, but my biggest fear is always that I'm in danger of being like that UX developer who said "Mobile is just a fad", and missing out on some big shift in the industry that completely makes what I do obsolete. I'd like to think that's not true, but it's one of those things that I'm always just a little bit cautious of in the back of my mind.

You know that Simpsons GIF about "Am I out of touch? No, it's the kids who are wrong." Sometimes I feel like that a little bit. These young whippersnappers like Divya with their Vue, and their JSX...

**Divya Sasidharan:** Ha-ha...

**Chris Ferdinandi:** Anyways, I don't know if there was really a point to that. I love that story, and for me it's just focus on the big picture, look for the trends, and make sure you don't end up being like that person who thought mobile is a fad.

**Break:** \[00:50:39.14\]

**Kevin Ball:** Alright, for our closing segment let us talk a little bit about our favorite vanilla JS tricks, or APIs, or that sort of thing. It's kind of a shout-out section, but specifically for vanilla JS. So you could plug a particular API, a particular trick, a particular resource, however you wanna go about it. Let's start out once again with our guest, Chris.

**Chris Ferdinandi:** \[00:51:55.27\] I have three. The first for me is querySelector() and querySelectorAll(). They were like revelations for me. They're kind of old news at this point, but those two methods and all of the other ones that rolled out at the same time brought this jQuery-like simplicity to vanilla Javascript, and it was such a pain to try and select elements in the DOM before that. They made it so easy. Those were like a real game-changer for me.

More recently, I had always kind of dismissed the arrayReduce() method as this thing that you could use to total some numbers in an array together and really not much else after that... Until someone explained to me that the thing -- for those of you who don't know, arrayReduce() will take an array and all of the items in it and reduce them down to a single output value. It never occurred to me that the output value could be an array, or an object, or some other thing.

I've now discovered that you can use arrayReduce() to do these really complicated things that would have required chaining a couple of different methods together, and it can just knock them out in one fell swoop. It's become this really powerful part of my toolkit, that I really did not appreciate until I saw a few working examples of things you can do with it. I'll make sure I drop some of those in the show notes, but a common example I like to use is if I had an array, and all of the items in the array were objects that contained the names of wizards from Harry Potter and the house they were in, and I wanted to get back an array that contained just the names of wizards from the Hufflepuff House, I could do that by using array filter and then array map, but with arrayReduce() I can knock that out in one operation. It ends up being about twice as fast as doing it with two, and you get some real nice performance wins there, too. I'll drop a link into the show notes for how that works. Just a super-powerful method that I'd never realized you could do so much with until a few months back.

And then whenever people harp on the whole "Well, a lot of these newer methods don't work cross-browser", one of my absolute favorite tools in my toolkit is polyfills. They're little snippets of code that bolt functionality into browsers that don't support things. If your browser doesn't support the .closest() method, you can polyfill it and it works everywhere.

I used to spend a lot of time checking what was in my code and dropping polyfills in... These days I use a tool called polyfill.io, which is the Ft Labs-created project that they open-sourced and provide for free... And it detects the browser the user is on, and it sends them a bundle of polyfills, just the ones that are needed for their browsers. It's a really awesome tool. If I'm on Chrome, I get back nothing (the latest version of Chrome), if I'm on IE 8, I get back a bundle of about 15 kb minified and gzipped of stuff. You can use things like promises in older browsers, and all of the new methods that wouldn't be supported in those browsers.

Those are my three... Just a handful of tools that I couldn't live without.

**Kevin Ball:** Awesome. On the arrayReduce() thing, I think you've been reading some of the same stuff I have. Actually, one of the things I wanna shout out - I'm just gonna shout out a couple of authors to read through... Though obviously another great author to read through on this is our guest, Chris... So if you haven't checked out his stuff, definitely check out his stuff; there will be links in the show notes.

Two in particular, and the one that that reminded me of is a gentleman named James Sinclair... He has been writing some incredibly good articles about writing functional Javascript and using things like arrayReduce(). And I think the example that you were describing now on arrayReduce() was from an article of his in May about how to use arrayReduce() for more than just numbers. He's been writing these incredibly in-depth, but also understandable articles that just reading them has upped my level Javascript, and particularly functional patterns in Javascript.

\[00:56:01.04\] The other author I want to plug is a gentleman named Eric Elliott. He has written a bunch of great stuff on Medium. I know that the hip thing now is to hate on Medium, but here's a bunch of good stuff on there. I think more recently he's been doing things like crypto and all of that crazy world, but looking back at his posts and digging through the stuff that he's written, there's a lot of great Javascript stuff in there. Those are my two quick plugs. They're both learning plugs.

How about Divya next?

**Divya Sasidharan:** Cool. Going off of Medium and various people writing about Javascript, I highly recommend Kyle Simpson's "You Don't Know Javascript." It's really, really good. And a lot of the times -- I mean, you think you're great at Javascript, and then you read his book and you're like "Oh, I actually don't know Javascript." That's generally my experience every time. I'm like "Oh yeah, I know this concept. Of course. It's just gonna be a reiteration of what I know", and then I realize that I don't actually understand it as well as I thought I did. It's disheartening, but also encouraging, because it means that I'm always learning... And it's always nice when I'm proven wrong, because it means I learned something new. I'm trying to take that approach; not to have my ego deflated or whatever, just to be like "Okay, I'm learning. This is good."

And the next one is this design patterns book called "Learning Javascript Design Patterns" by Addy Osmani. I think it was plugged by Emma and I a couple episodes ago, but... I really like that book and I've used it a lot. Before I got very deep into the framework world, I wrote a lot of vanilla Javascript and I had to learn how to do a lot of design optimizations, and create helper libraries, and so on... Which involved understanding how to design my overall Javascript. Because writing Javascript is one thing, but if you are organizing it, and you want another project to use it, or you're organizing Javascript in a wider project, that you want to have some kind of maintainability, you need to be able to organize everything well, so when you come back to it a couple months later you'll understand.

That book was incredibly useful. I used it so much as a resource... I just kept coming back to it, just understanding different patterns. The Revealing Module pattern is the one I use a lot, but he talks about different other design patterns, like the singleton, and whatever else... Which is actually really nice, because there's some computer sciency-ness to it, but it's directly applicable, so you don't feel like you're completely stuck in theory... Because there's clear examples of how exactly to implement them, and why they're useful, which I think is amazing.

And then the last thing is, of course, Artifact Conf. It's great, I love it. I was there, like Chris was mentioning, back when I was starting my career(ish). I had just graduated from university and I was trying to get professional. Or actually, I might have been in university, trying to get professional -- whatever, I don't remember...

**Chris Ferdinandi:** I do. You were in your final semester, I think, Divya.

**Divya Sasidharan:** Yeah, I think something like that. And then I got my first gig at Sparkbox, which was great. So yeah, Artifact Conf is great. You never know, you might find a good network and get your first job...

**Chris Ferdinandi:** Yeah, Artifact got me my first job, too.

**Divya Sasidharan:** Yeah, it's great.

**Chris Ferdinandi:** So awesome.

**Divya Sasidharan:** It's a great conference, it's a really nice mix of people who are super into Javascript, people who are super into web design... It's a mix of really awesome people. Yeah, go check that out.

**Kevin Ball:** Wow. Artifact Conf first ran in 2013, and it got you guys your first jobs... I'm feeling real old right now.

**Divya Sasidharan:** \[laughs\]

**Chris Ferdinandi:** You still have a lot more hair than me though, Kball, so feel good about that.

**Kevin Ball:** \[laughs\] It is turning grey, but I don't know if you can see that over Skype... Yeah, cool. How about you, Nick? What are your recommendations?

**Nick Nisi:** \[00:59:57.14\] Cool, yeah. I went with some cool vanilla JS APIs, and more specifically, most of them are tied to the browser, not to Javascript itself, so they won't be in Node... The first one I was gonna say was Fetch, but Chris said that he wasn't a fan, so... I'm not so sure.

**Chris Ferdinandi:** You can like your own thing, Nick. Fetch has a lot of upside.

**Nick Nisi:** I like it a lot. That's a promise-based API, and I really like that promises are just built into the browser now. That's a really nice feature, and now we're getting newer APIs like Fetch that are promise-based, so it makes it really easy to use with async/await. It's just such a joy to use compared to the old callback hell. So yeah, I'm excited about that.

And then two quick APIs are URLSearchParams. That's something that I've written things to parse the query params in a URL of my own, several times, in several projects... It's just built into the browser, so you can just use that now, which is really great.

And then the final one is the FormData API. This is really great because it will take a form element, you can pass a form element to it and it will grab all of the form fields in that form, and then you have this object that you can immediately send up. I specifically use this on forms where I also have files, like images, PDF files, or whatever you want to upload, that you wanna send up as well. This is the way that you can do that without having to do that crazy posting an iFrame trick, or anything else... You can just do it. It's really nice and simple to use. Those are just a couple things that are built in and ready to go in any project that you need.

**Kevin Ball:** Alright, thanks. With that, let's actually bring this to an end. Thanks again to our guest, Chris Ferdinandi. You can check him out at GoMakeThings.com. It has links to all his stuff. Or he's on Twitter... What's your Twitter handle?

**Chris Ferdinandi:** @ChrisFerdinandi. It's terrible to spell, so... Go to GoMakeThings.com and jump over there.

**Kevin Ball:** Go to GoMakeThings.com and you can find him from there on Twitter, if you want to follow him on Twitter. Here he argues with people.

**Chris Ferdinandi:** \[laughs\]

**Kevin Ball:** Excellent. Thank you Divya, thank you Nick... This closes out our episode for this week. All the different resources and things that we talked about will be in the show notes down below.

I do wanna make a quick shout-out to listening live and tapping in with us. I know in the generics stuff at the end Adam will tell you about it, but... It really does make for a lot of fun when you can interact with us and we can have more of a back-and-forth conversation, you can come to the Slack channel and chat with us. I had a couple people coming in today, and I'll shout them out Mark Reader and Rouzbeh Sarrafieh... Rouzbeh I'm sorry, I totally butchered your name, but... They're chatting with us a little bit in there. That could be you, and you could be shouted out on JS Party, so come join us every Thursday, 10 o'clock Pacific, 12 Central, 1 PM Eastern time, and chat with us live as we go. There's often little snippets and fun stuff that you don't get to hear on the recorded episode. If you listen live you will get to hear what we're talking about during our breaks, and all of that fun stuff.

**Nick Nisi:** The live listeners are what makes this a party.

**Kevin Ball:** Exactly! You, who are out there right now, Mark and Rouzbeh, you are making a party for us right now. With that, let's wrap up this party. Time to get going. Grab your coffee and your water and let's check it on out of here. Take care y'all, and we'll catch you next week.
