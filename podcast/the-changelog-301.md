**Jerod Santo:** I'm joined by Dan Taylor and Steve Dower. These guys are doing Python at Microsoft... Who knew...? I didn't even know there was Python at Microsoft, and it sounds like there's not just Python at Microsoft, there's like a long legacy of this. Dan, Steve, first of all, welcome to the show.

**Dan Taylor:** Thank you. Thank you for having us.

**Steve Dower:** Yeah, happy to be here.

**Jerod Santo:** Let's go back to the beginning a little bit. You guys have been at Microsoft for a while... Tell us about Python and its roots in this company.

**Steve Dower:** Yeah, Python at Microsoft has such an interesting history. I've been there for about six years, coming up on six years now, and it was going before my time. I don't remember the details; I've heard the stories and the rumors. There was some part of like Windows Server 2003 or something that shipped in native Python, so we briefly shipped Python in Windows for some database server -- I don't even remember what it was now at this point. That went away at some point, someone upgraded and went to a different language.

We briefly flirted with the idea of "Let's implement Python on top of the CLR, and that became IronPython, along with IronRuby, which ultimately became the dynamic features of C\# that came out of that... So it wasn't a complete bust of a project...

**Dan Taylor:** And I heard some of the features in the debugging area also came out of that. We reused some of the APIs for the PyDev Debugger, and things like that.

**Steve Dower:** Certainly, yeah. There's a lot that came out of that project. After that, it was kind of wrapped up on the Microsoft side and pushed out and taken over by the community, by the way. There's people still pushing IronPython along, still making releases, they're getting their Python 3 support together.

After that was when we kind of turned around and said "Hey, this thing that we do better than anyone else right now is tooling, and Visual Studio is far and away one of the best editors on the planet. This is like 2008, 2009, 2010 kind of era, "Let's invest in Python support there."

\[04:03\] So there was this tiny little team, totally under the radar, building Python support for Visual Studio, and shipping an extension, which was known as Python Tools for Visual Studio. From there, Dan can probably pick up on how we've grown since then.

**Dan Taylor:** Yeah, so I've also been at Microsoft for going on seven years now, and most of the time I've worked on Visual Studio in various areas, and only in the past year did I join the Python team. The reason I came over is because Python is growing so quickly at Microsoft, and there's a lot of momentum behind it. Now we've got these great tools in Visual Studio and Visual Studio Code for Python developers; we have this very fully-featured rich set of tools, and as a team, we're all bound together by this mission to make Python developers more productive, make the Python language itself more successful, and contribute back to the community.

**Jerod Santo:** Going back to this idea of a small team, flying under the radar, getting Python into the system, so to speak... This is something that we hear a lot about and we see with open source tooling, or languages, or whatever it is, where rarely is it a top-down decree "We're going to do Python." It's usually a grassroots effort, maybe somebody did something and didn't ask permission, but they were gonna ask forgiveness later... Is that something that happens frequently at Microsoft? Is this like a rare occasion? How does it usually work when new open source comes in? I know it's different now than it used to be.

**Steve Dower:** Oh yeah, it's a totally different place than it used to be. I mean, easier to ask forgiveness than permission is one of the core Python design principles, so it's no big surprise that we went that way, and started just releasing this product and telling people that "Yeah, you can do Python before your upper management even heard about it." But it's not really that common, and even now I don't think it's that common, because the decree has come down, and it took a long time to get there.

Certainly in the early days we had fights with lawyers, and many discussions, and working lunches with lawyers to try and teach them about this open source thing that was going on, encouraging them "Hey, go read this Apache license, go read this MIT license, see what you think about them, figure out how Microsoft can release code under these", instead of going off and inventing our own brand new licenses, which some people may remember we also did for a period.

**Jerod Santo:** Oh, really?

**Dan Taylor:** I think it's also -- as you said, a lot of it is about education and helping people understand... You know, I think a lot of people were scared about open source - a lot of companies, not just Microsoft - as it started to gain in popularity. And as Steve says, it's helping people understand why is this a good thing, why is this beneficial, and as they learn more, they become more supportive and helpful towards what we've been doing.

**Steve Dower:** And we're at this awesome point now where we have automatic systems for releasing open source projects, all of the kind of governance and tracking of licenses and dependencies, it's all kind of automated throughout the company. We can self-provision GitHub repositories these days, with MIT-licensed code, provided we're meeting the guidelines that are set around that... And there's still some restrictions, but employees get to make that decision. We aren't running everything through some central location that gets to approve or disprove anything; it's a totally different company, it feels like, in so many ways, than it was back when I started, and certainly people that have been around longer have even -- they're even more impressed at how different it is.

**Dan Taylor:** There's a lot of systems set up to support and help open source projects flourish at the company. There's systems if you wanna create a new open source project, how to do that, and they're really there to support all the teams.

**Jerod Santo:** Very cool. Let's talk about Python itself, and exactly what Microsoft is doing with Python, for Python, and who is using Python, in what aspects... You guys see your customers.

**Dan Taylor:** \[08:04\] Yeah, let's go ahead and talk about that. So Python has been growing very rapidly over the past few years, and if you read the Stack Overflow blogs and surveys, it's the fastest-growing mainstream language. I think as of this year, 38% of respondents indicated they're using the Python language, and that's been growing rapidly over the past few years... So it's got a lot of people, and it's still growing fast.

I like to talk about three different main types of apps or developers that are using Python. One of them is the data science and machine learning that's driven a ton of growth with Python recently. The other one is web development. A lot of large companies, a lot of big websites are built on top of Python, and that continues to be a very popular, very productive language.

Then the other one is just automation, scripting, tests, IT operations, system management... Python is a very productive language to work with, so a lot of people find when they need to automate some of their workflow that Python is the right tool for them.

I also need to mention that with people learning to program these days, Python is actually one of the best places to start if you want to learn to program. A lot of people in school, a lot of students come out of school knowing Python, and a lot of people who are in their professional career and wanna learn a new programming language are coming to Python.

At Microsoft we really wanna enable all of that, so we have our tools in Visual Studio Code - especially if you're doing some lightweight scripting, that's a great place to start. Then we've got tools in Visual Studio, which for the large, more "hardcore" uses of Visual Studio... Especially if you're already a Visual Studio developer using C++ or C\#, for example, and you wanna mix Python in with that together in the same project, Visual Studio is a great place for that because we can do cross-language debugging and other features like that.

And then we're also working to enable people in the cloud who are, for example, doing machine learning projects, to be able to run their Python code in the cloud, we do batch training to be able to do all that stuff.

**Jerod Santo:** Thinking about education a little bit - what do you think it is about the language itself that lends itself well to first-timers and even children learning it, and a lot of the bootcamp schools, and a lot of the getting kids into code will be focused on JavaScript because of its ubiquity, or maybe Ruby because a lot of the syntax melts away and it can look kind of like English...? But Python, like you said, is very popular for that as well. What do you think it is about Python that makes it good for teaching?

**Steve Dower:** I always like to position Python as having this very shallow learning curve, that then quickly jumps up to a point where you can do all kinds of magic, amazing stuff. I compare it to C++ in that respect, as well. When you get into C++ template and metaprogramming, you can do absolute magic, and it's amazing, and I love it. But C++ still has that sharp learning curve to be able to use any of that, because there's like angle brackets everywhere. Python doesn't have that. You can write really simple English-looking code, that reads nicely, in Python. I've certainly seen papers that have taken Python code and renamed it pseudo-code and not actually changed any of it at all, because it reads just like pseudo-code that most people would wanna use. But as a library developer or as a framework developer, you can make objects and classes that do really amazing things, but look very natural and read very natural, and it's not quite the same as -- like, Ruby gets used a lot for DSLs, and it's amazing for that; you never actually change the semantics of Python. You have this consistent language, that always behaves the same - equality is equality, less than is less than... It doesn't do weird things.

**Jerod Santo:** \[12:12\] Like the operator overriding, and stuff...

**Steve Dower:** Yeah, which you can totally do.

**Jerod Santo:** It's just not in the -- community doesn't do it.

**Steve Dower:** Exactly.

**Dan Taylor:** There's a saying in the community about things being pythonic. The community always strives for things that look pythonic. It's got a very good set of idioms and ways that people use it, and it feels very natural. There's this joke that Python is pseudo-code that runs, you know? Personally, I don't know what pythonic means, but I know it when I see it, and everyone else seems to have that same impression there.

**Steve Dower:** It does just mean that you know it when you see it. We probably shouldn't share this, in case people apply for jobs with our team, but one of the interview questions I like to use with people who will be Python developers is "Here's a sample of code. Tell me what's not pythonic about it", and it's amazing to see the range or responses. Some people who haven't experienced a lot of good Python code look at it and go "It looks mostly fine." Some people look at it and go "I can't -- take this away, I'm about to vomit" because it's such an artistic thing, that when you learn it and you feel it, then the code feels right and it looks right and it smells right... But you only learn it through experience, and by seeing good code...

We make a big effort to make sure that all the code coming out of Microsoft is Pythonic in a way, because we know that people will see our code and go "Microsoft did it. They have good people there, it must be good code", so we try and make sure that it is actually good code.

**Jerod Santo:** Isn't there documentation around -- I'm thinking of like PEP 8, or are there specific documents that say "This is the Python way"?

**Steve Dower:** PEP 8 strictly describes if you're checking in changes through Python itself. It often gets picked up, and Python developers say "It must be done this way", which is true if you're working on Python itself. You don't have to use those guidelines to be pythonic, and in particular the 79 character line limit is totally relaxed for everyone else.

**Jerod Santo:** But if you're working on Python proper, that's what it applies to.

**Steve Dower:** If you work on Python proper, then we still -- there are people who work on it using 80-character widescreens, and if you extend too far beyond that, then they're going to have a harder time reading the code. So we still have that restriction on the project itself, but yeah, PEP 8 is a generally good set of guidelines for things that are gonna look right, but... It's not like Go has that really strict formatting, that you must get the formatting right; other languages have really well-defined defaults for what looks good... Pythonic is about so much more than you can describe. It's not just "You put a space before this, and a space after this." It really is -- you know, don't use a class there when a function will do. It goes so much deeper.

**Jerod Santo:** It goes deeper. Well, I was gonna ask - you mentioned Go, and they have a tool, go fmt, that will actually reformat your code. So you can write it however you like, and then it'll put it into format. Unfortunately, it uses tabs, so I can't -- the dude cannot abide... But that's just one man's opinion. Elixir is adopting a similar thing; there's a tool (I think) in Elixir 1.6 which adds a formatter. Is there anything similar in Python? Could you even have that, or is that against the grain in the Python community?

**Steve Dower:** You can, and there's actually a tool that's come out recently that's suddenly shot up in popularity; it's called Black. It's actually written by one of the core developers, who I believe has just written it for himself and his own team at work... But that is a very strongly opinionated formatter that has basically no configuration, and the idea is that you run it on the code and it will make your code at least consistent, so that everyone's code looks the same going in. So it's the same kind of theory as go fmt.

**Dan Taylor:** \[16:10\] We actually have integration with Black coming up in the upcoming release of Python Extension for VS Code. The developer of that Black extension actually contributed a lot of the integration.

**Jerod Santo:** Would that be something you guys would consider adopting internally at Microsoft, or does it go against Microsoft's culture? Because to me, the advantage of a tool like that is if everybody adopts it, right? The fact that in Go pretty much you can expect people to have that format - that makes it very useful, even if you don't like the style very much, because everywhere you go it's the exact same code style. So tools like Black - well, interesting in the small; really, their value shines if the entire Python community - I realize that's a huge statement... But maybe the majority would actually get involved and say "Okay, let's use Black style."

**Dan Taylor:** Well, certainly, as Steve said, it's been this huge rise in popularity for that Black tool. I don't think prescribe in particular what developers at Microsoft that use Python use. The nice thing about Black as a team is fully empowered to say "Hey, we want all our code to look like this. We're gonna choose Black." With our tools, we say "Go ahead, you can choose to use that, and we'll make it easy for you to integrate that into your coding experience."

**Steve Dower:** Yeah, and the reality is teams are doing so many different things that it's really hard to enforce any kind of style. As kind of an extreme example, we have teams that are building and releasing samples and publishing them on the documentation site, and we'd really like those to be formatted nicely. We've also got a huge number of data scientists who are writing Python code that's gonna be run once and never seen again...

**Jerod Santo:** Yeah, scrappled together.

**Steve Dower:** ...and if anyone comes out and says "You must always run your code through Black" and that becomes like some edict from above, now the data scientists are going "How do we do that?" and it doesn't even really matter.

**Jerod Santo:** Yeah, it doesn't matter...

**Dan Taylor:** We have tools like... Pylint, for example, is another popular tool for at least detecting -- there's a lot of style errors and warnings in Pylint, so one of the big things is we let you customize exactly which set of rules your team is gonna use. I think if you turn Pylint on, it strictly follows that PEP 8 syntax, but a lot of people will say "We like this rule, we don't like that rule."

**Jerod Santo:** You can configure it, yeah.

**Dan Taylor:** Yeah, and so teams will use that.

**Steve Dower:** We'll say we don't like a lot of the rules too, and recommend... We have a file that we suggest the teams to say "If you follow these, then it will be acceptably good. There might be more rules that you wanna turn on, but this is the bare minimum." "Please stop using CamelCase" is a basic example. \[laughter\]

**Dan Taylor:** I love CamelCase, but when I joined the team, Brett Cannon, who's our dev lead for VS Code, and Steve as well, have slowly started to beat the CamelCase out of me.

**Steve Dower:** We're winning him over.

**Jerod Santo:** \[laughs\]

**Dan Taylor:** Well, so many libraries use snake\_case, and it starts to look weird if you're not.

**Break:** \[19:12\]

**Jerod Santo:** It's interesting how our tastes change over time. I was very snake\_case for a long time, and I despised CamelCase. I was that far on the side. And now I'm like "Meh, CamelCase - not so bad." I look at it and I'm like "It looks alright." That's why I feel like top-down style guides, like forced styles just feel so constraining; I can't even internally keep my internal Jerod Santo style guide over the course of five years because my tastes change... It's just an interesting phenomenon.

Anyways, Steve, you've been a contributor to Python itself. You mentioned PEP 8 - you must be following that, at least when you do your work on Python. Is it Python core, or...? Tell us your involvement with the project.

**Steve Dower:** Yeah, so I along with four other engineers that we have working at Microsoft am one of the volunteers - although I guess I'm party paid by Microsoft in order to do this - who work on the CPython project itself. So that's the core interpreter, all of the core libraries, everything you get in the standard library... We have a team of - I think on paper we're like 80 or more people, and at any one time there's probably 20-30 active developers who are contributing in some way to Python. But this is entirely CPython, outside of Microsoft; it's a volunteer gig. It's myself, Brett Cannon, Barry Warsaw , Eric Snow, Dino Viehland - all paid employees at Microsoft, and we have our jobs to do there, but we also get time to volunteer on this project as well, and we're supported in doing that, for a variety of different things. But overall, it's such an important project that to leave it in the hands of either volunteer donations - there's a donation drive going on now for the Python Software Foundation to keep that running... I mean, Python is too important to leave in the hands of donations like that, so having Microsoft say "Yes, we'll employ people who are working on this and keep them working on it" is a great thing to see.

**Dan Taylor:** It's actually exciting because it's also one of the few languages that is kind of purely driven out of community roots. Most of the other languages were created by a company, and I think Python grew out of the community more or less, and it's very popular these days.

**Jerod Santo:** Absolutely. How is that managed, in a practical sense? We know some companies allow open source Fridays, or there's like 20% time... Where do you draw the lines between Steve the do-gooder Python community member working on Python and Steve the Microsoft employee working on Python? How does that all play out?

**Steve Dower:** I have strongly considered getting multiple baseball caps - one with the Microsoft logo on, and one with the Python logo on...

**Jerod Santo:** \[laughs\] And which one are you wearing right now?

**Steve Dower:** I have so many conversations with people where I need to be explicit about which hat am I wearing right now.

**Jerod Santo:** Yeah, it's a hard problem, right?

**Steve Dower:** \[24:03\] Yeah, and in particular for me. My kind of main role with the CPython team is maintaining a lot of the Windows support, and so I do a lot of the builds, I work with a couple of other guys who are focused on that as well, to keep Python running well on Windows, which means I will talk to other teams at Microsoft about you know, the CPython installer is doing something weird; I mention installer, and they look at me and go "The Visual Studio installer?" I go, "No, no, no, the CPython installer. Different hat. Let me change the hat for this."

**Jerod Santo:** Right.

**Steve Dower:** So I don't actually have that hard a line between my contributions. It really is as needed for me. Other people do. Brett, for example - and I think he's talked about this publicly, so I won't get in trouble - has a very clear "This is the time that I spend each week on CPython work."

**Dan Taylor:** I think it's every Friday.

**Jerod Santo:** Is it every Friday? Because that's a very clear line, right?

**Steve Dower:** Yeah, and "If you email me about Microsoft work on that day, you're not gonna get a response on that day because I'm not doing that work." It's very individually-managed; it comes down to how your manager feels about it, and what value is coming back out of that for either the community as a whole, or Microsoft and how that's valued.

**Dan Taylor:** Yeah, I don't think anyone's really breathing over your shoulder at Microsoft anyways, and watching what you do every day... But yeah, with Brett, I've definitely tried to meet with him on Friday and he goes "No, not talking..."

**Jerod Santo:** "No, I'm doing my Python work on Friday."

**Dan Taylor:** Yeah. Slippery slope.

**Jerod Santo:** That's pretty cool. We track a lot of the sustainable side of open source, and like you said, Python is way too important to be just donations-based, especially when -- when you see the donations coming in, you're thinking "How many corporations are doing very well because of this completely free to them programming language...?" We've seen some companies pick up and actually hire or pay full-time salary people whose entire purpose is to work on a specific open source project. Is there anybody doing that inside of Microsoft? Are there conversations being had, like "Wow, maybe this does make sense", in cases where it makes sense? Hypothetically, Steve, if it made sense for you to just pour all your time into CPython, would that be a conversation that would be had inside of Microsoft, or not?

**Steve Dower:** Yeah, that would certainly be a conversation to have... At various points in time maybe more or less feasible. Certainly when I started contributing, that was never gonna happen. At this point, who knows...? The more that Microsoft comes to depend on Python, the easier it is to say "This is important to us. We should have someone on it full-time, who's not even doing Microsoft work anymore, because indirectly this is." We don't currently have any of those. I don't know that that's a policy to do it or not do it...

**Dan Taylor:** Right now, as I mentioned, our team is growing quickly, so I think we do wanna get to that critical mass where we can have people who are dedicated to contributing directly as their full-time gig. A part of that is we need to have a large enough team that we can sustain that well, keeping the team moving forward.

**Jerod Santo:** Yeah, and productive.

**Dan Taylor:** We wanna make sure that we're able to deliver the tools to Python developers, and keep those sustainably growing, and then meanwhile giving back to the community... But absolutely, it would be something that we would love to do.

**Steve Dower:** And ultimately, when you have however many hundreds of thousands of users we have for our tools, there's enough feature requests to keep us busy until the end of time... So saying "We're gonna do less features for these things that we own and work on this thing that a lot of people own..."

**Jerod Santo:** That's a non-starter, right?

**Steve Dower:** It's not so much a non-starter, but...

**Dan Taylor:** It's a hard balance, right?

**Steve Dower:** Yeah, it's a tough balance, and it can be hard to explain to people why we think this is more important than the feature that you're asking for from Visual Studio or Visual Studio Code.

**Dan Taylor:** \[28:05\] Because the editor is the one people first directly interact with when they're writing Python... And as I mentioned, it's about helping them be as productive as possible, so the editor is kind of like that top line thing where if we can help them get their code written, give them the right IntelliSense, give them the right warnings... That has a direct top of the funnel impact to people.

**Jerod Santo:** Right. So let's look to the future a little bit. Dan, maybe you can tell us about the future of Python at Microsoft, and with regard to the tooling, and Steve, maybe the future of the language, where it's headed, and the community.

**Dan Taylor:** Yeah, so as I mentioned, we've got two... Three -- well, four main products.

**Jerod Santo:** Two, three, four... Do you wanna do a five? \[laughs\]

**Dan Taylor:** Well, there's a lot of different teams and I could probably pick a fifth one out there...

**Jerod Santo:** Yes, I'm sure you'd have no trouble on that. \[laughs\]

**Dan Taylor:** We actually do consult with a lot of teams across Microsoft who are doing stuff in Python, so there's many more than four or five... It's just really how I choose to bucket them in my head in terms of products. We've got our Python extension for Visual Studio Code, we've got our Python workload in Visual Studio - those are similar.

The Visual Studio Code extension originally started as a community-developed extension; it was created by a developer in the community, Don Jayamanne, and we actually hired him and brought him onto the team at Microsoft and republished the extension as Microsoft. That came from the community, and now we're giving back to the community, making the team around that bigger. But the big thing we're doing with Visual Studio and Visual Studio Code - we're actually consolidating a lot of the core IntelliSense and debugging engines that are powering the two products. We wanna make IntelliSense much richer, much more feature-complete, much faster, make sure you get all those warnings and errors as you type... So that's been our big priority right now in the immediate term for those two products.

There's some other things that people want. Once we get through that stuff, a lot of people have been asking for remote development; "Let me target Python in a Docker container, running in the cloud, so I can access the petabytes of data I have without having to pull it all down on my laptop."

**Jerod Santo:** Yeah, exactly.

**Dan Taylor:** That's very next on the horizon for us, to look at stuff like that. Actually, if you look at our GitHub page for VS Code, our Python extension for VS Code, that's the top up-voted thing, with over 200 up-votes... So we have people screaming for that kind of stuff, and we want to get past that.

We've also got our Azure Notebooks, hosted Jupyter notebooks. Right now that's a free offering, where you can go and run your Jupyter notebooks in the cloud without having to download and install all that stuff.

**Steve Dower:** Where do I go for that, Dan?

**Dan Taylor:** That's on notebooks.azure.com. Thanks, Steve. \[laughter\]

**Jerod Santo:** I'm supposed to team up for those; I wasn't doing my job over here. \[laughter\]

**Dan Taylor:** So right now that's a free offering, but you know, a lot of people of course wanna be able to put more powerful machines behind that, be able to do more powerful things, so we're looking at "How do we enable to do more workloads in Azure?"
The fourth product was just Azure itself. We wanna help people get their code running, Azure functions, Python on Linux, a lot of the machine learning workloads, and stuff like that.

So those are kind of the key areas that we're really trying to move forward.

**Jerod Santo:** Very good.

**Steve Dower:** And if I can bring that up to six products, like you asked for...

**Jerod Santo:** I don't know -- did I ask for them, or did I just enumerate them...? Go ahead.

**Steve Dower:** SQL server embedded Python, recently. 2016 and 2017 releases of SQL server come with an install of Anaconda in them. You can write stored procedures in Python and run those queries, and they'll all run on the server. You have access to NumPy, Pandas, Skicit-learn on the same server as where your data actually is. So if you do wanna do a lot of that pre-processing and it's in SQL database, then that option is already there. That was really exciting.

**Dan Taylor:** \[32:06\] Yeah, I forgot to mention that the actual really cool thing about that is they actually Git-compiled the Python code down to the SQL engine... So you can actually get really good performance out of that if you're running inside of SQL server. And you can kind of copy and paste code from your local Python project and move it over to the SQL database side.

**Jerod Santo:** Interesting.

**Steve Dower:** Yeah, and the other one that I'm really excited about is Visual Studio Team Services right now, which is -- you know, it took a bit of time to convince them, but they've now gone "Hey, Python is really cool, isn't it? Why aren't people building and testing their Python apps on our continuous integration stuff?" We got in touch, and basically said "Here's why", and they said "Okay, we'll fix it!" And they fixed it, so now you can spin up, build definitions on Visual Studio Team Services... Windows, Mac, Linux, whatever version of Python you want. Be building wheels, running tests with pytest, whatever you want to do. It integrates with GitHub, it has its own set of private repositories if you wanna use those; there are more and more exciting things coming for that that I can't talk about yet, but I am really excited about VSTS.

**Dan Taylor:** I bucketed all those together in one product in my head - it was Azure. \[laughter\]

**Jerod Santo:** So you go from four to six as you unpack that bundle...

**Dan Taylor:** Yeah, yeah... There's a lot of good support for Python in Azure, and as Steve mentions, there's a lot more coming. Teams are increasingly coming to us, rather than us having to go to them.

**Jerod Santo:** So you guys are off to PyCon here... Actually, you're gonna run out of here and pack your bag.

**Steve Dower:** I am going straight home after this, unpacking and flying out at like Oh-God-thirty tomorrow morning.

**Jerod Santo:** So real quickly, tell me what's going on in the Python community, Python language... What's fresh there?

**Steve Dower:** So Python 3.7 is basically just completely locked down. The fourth beta is out, we're gonna have a release candidate soon, and then the final release of that will be out within two months, I think, or thereabouts; I don't have the schedule in front of me. That has got -- I don't know that it's the most dramatic and exciting release we've ever had, but it's looking really solid. There's certainly a lot of improvements in initialization, which a few people are interested in... But it's really significant there.

Data classes is one of the big ones. So when you're writing, if you just want a simple class to hold a couple of values, just like a few fields, you find yourself writing you know a def init and default values and getters, setters, you know, a hash function, comparison functions... We've now got a type in there on a module that you can basically inherit from, and specify just the names in the class, and you don't have to write any code, and you'll end up with like a fully defined class that may have default values for those, it'll do comparisons, it'll do hashing, and just generate all of that boilerplate code for you.

**Jerod Santo:** That's cool, for sure.

**Steve Dower:** \[35:07\] So that's coming in 3.7 shortly. We're already discussing stuff with 3.8. There's been a lot of robust discussion on the mailing lists recently, a lot of exciting potential coming... I have no idea what's in and what's out at this point. It's so early in the cycle that people are throwing ideas around, and we're discussing them... Some of them have kind of gone to votes, and ultimately, Guido van Rossum, our benevolent dictator for life (BDFL) is gonna decide on those and say "I think this is good for Python" or "I don't think this is good." It's just exciting to see what he likes the sound of, and that'll be what's going towards 3.8 in about 18 months.

**Jerod Santo:** Very cool. Well, Dan and Steve, thanks so much for sitting down with us, and thanks for coming on the show.

**Steve Dower:** Yeah, thanks for having us.

**Dan Taylor:** Thank you.
