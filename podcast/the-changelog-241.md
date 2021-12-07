**Adam Stacoviak:** Welcome back, everyone. This is The Changelog and I'm your host, Adam Stacoviak. This is episode 241 and today Nathan Sobo, one of the founding members of the Atom editor team at GitHub joins the show. Nathan takes us all the way back to the beginning - where it came from, the founding team, how it was formed, the problems it solves, on through to 1.0 and beyond.

We've got three sponsors today - Linode, Hired and Compose.

**Break:** \[01:02\]

**Adam Stacoviak:** Alright, Jerod, this is a show... I think we've been a year and a half-ish planning on this, to some degree. What do you think?

**Jerod Santo:** We wanted to talk about Atom for a long time.

**Adam Stacoviak:** A long time. We've been talking to Katrina Owen behind the scenes about this show, and just various conversations to find the right person to share this story, and Nathan... Nathan's the person. How are you, Nathan?

**Nathan Sobo:** Doing great.

**Jerod Santo:** Nathan Sobo, a founding member of the Atom editor team at GitHub. We love to go deep into the history of projects, especially when they're as epic as Atom is, and hear about the beginnings. Tell us about the start of Atom and your relationship to the project. Did I say it's a text editor? I think I said that...

**Adam Stacoviak:** I think you said it.

**Jerod Santo:** Y'all know Atom... It's a text editor, open source... It's very cool. Go ahead, Nathan.

**Nathan Sobo:** See, I think the start for me would probably be different than the strat for GitHub. I've wanted to build a text editor since right after I graduated from college. I graduated in 2005 and I went to work for one of my professors. I was taking one of his comp ling classes, and the first thing that he had me do was to take this first-order logic model of English grammar and make it work.

It was a logical model, so he was basically programming in first-order logic, and he wanted me to take his logic and animate it and actually turn it into a real program that functioned. So one of my first tasks in doing that was to parse the first-order logic language that he had created, that was only sort of working in his mind or working on paper; at the time I was a super big fan of this blog called Lambda the Ultimate - you guys ever heard of that blog?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Not me.

**Jerod Santo:** It's way over my head. I started reading it and I felt like I should go make a CRUD app, or something.

**Nathan Sobo:** \[04:02\] Yeah, and it was way over my head for the most part at the time, but some of it I understood, and all that was interesting to me. They talked about this formalism called parsing expression grammars, which was top-down, recursive descent parsers with memorization. So I ended up grabbing a framework that was based on that - there were a couple at the time - and it was such a mind-blowing distinction between that and the lex and yacc situation that was going on in my compilers class a couple years prior to that, that I got really excited about parsing expression grammars.

Somewhere along the line I came up with this idea that it would be really cool to have a text editor that had one of these parsing expression grammar engines baked into it, so that in a really convenient way you'd be able to express the grammar for any language, and then the editor would give you a parse tree, and you'd always have access to that.

I started to have that idea in my back pocket, and then I later moved to San Francisco, and after living there for a little bit, I'm like "Okay, I'm gonna start working on this text editor." I started with the grammar piece, building this parsing expression grammar engine. I got a certain way into it, and I open sourced it. It was this thing called Treetop, which is a parsing expression grammar framework for Ruby, and open sourced it. Then I got busy with other stuff for a while and basically it never became a text editor; it always stayed like a parsing library.

But that desire to build that system that was sort of syntactically-aware editing stayed alive in me. A while later I decided, "Okay, it's time. I'm gonna do this." My plan was to move to Boulder and work half time for Pivotal, and then the other half of the time work on this open source text editor that I wanted to build. I talked to a friend of mine and he said, "That sounds great, but you should go pitch GitHub and see if they wanna hire you to build this editor."

I tracked down Chris Wanstrath, the CEO of GitHub at the Million User Party, which was like a crazy, raging event at (was it at Mighty?) some club in San Francisco. I tracked him down and pitched him kind of quickly on this idea, and he had remembered me from Treetop - I gave a talk at RubyConf 2007 that he was at. So he was intrigued, and he said, "We gotta get coffee."

A couple days later I met him and Cory Johnson (another GitHub employee) for coffee, and they revealed to me that they were also interested in building a text editor, and in fact had been building one for a few weeks actively at that point... Although Chris had sort of dabbled with another editor called Atomicity - well, the same editor, depending on how you look at it - in years prior. They were getting serious about really doing it. GitHub was in this big expansionary phase where it was taking off, but it was still like... I mean, if I was employee 50, it was still pretty small, but it was clear that GitHub was taking off and they were kind of excited about broadening the horizons and seeing what else they could do. So this text editor that Chris had always wanted to build was on that list.

**Jerod Santo:** I'm just looking at the libraries.io page for your Treetop project; you said it just stayed the library, but never became the text editor that you wanted it to be. We shouldn't discount what a success story it really is if you look at the dependent repositories on this: you have Chef, you have Less, you have some Basecamp projects depending upon it, you have Andrew Cantino's Huginn, which was previously on the Changelog... A lot of projects using Treetop, so no surprise that Chris would know you from that. Interesting how you built yourself a little bit of a resume of somebody that can do this kind of work.

**Nathan Sobo:** \[08:11\] Yeah, I never really intended it to be anything other than a text editor, so it's kind of weird how that worked out. And the weird thing was that I never really worked on it. I wrote it, gave a talk about it, and then this guy in Australia, Clifford Heath, took over maintenance of it and I never touched it again.

**Jerod Santo:** Wow. That's the beauty of open source right there - worldwide, somebody in Australia you never met, and he can pick up the ball and run with it. That's really cool.

The Wired article -- Atom was featured in Wired around the 1.8 release date, which was middle of 2015, and then that article states that Chris Wanstrath had imagined this editor; he loves Emacs... Emacs, of course, very powerful, but written in Lisp, and you extend it by writing Lisp. Chris wanted kind of an Emacs style thing with modern web technologies, and he had imagined it in 2008.

**Nathan Sobo:** Right.

**Jerod Santo:** So then we find him meeting up with you in 2011... It sounds like at that time it's starting to gain steam. How did he pitch it to you? I know you pitched him on the idea of a text editor; what was his initial description of "Here's what we are building. We'd love for you to help us. This is what it's gonna be like." What was that pitch?

**Nathan Sobo:** Well, pretty quickly they showed me this video of it. They gave me the basic rundown of "It's gonna be a web-based editor", and at that point the editor I wanted to build was aligned with him in sort of every way spiritually, but the idea of building on web technology had not occurred to me. When he told me about it, I was almost ready to be like, "No, thanks. I'll go build an editor not on web technology." I wanted it to be mainly that in native code with like a Ruby extension interface.

So he pitched me on this web thing, they showed me this video with the cool La Roux, that song "In For The Kill", that was really popular at the time. \[laughter\]

**Jerod Santo:** Okay, does this video still exist and can we watch it?

**Nathan Sobo:** It probably does, somewhere... Yeah. I can probably try to dig it up and see if it's in my email, or something. Chris probably has it. But it was this demo of the prototype that he and Cory had cooked together using Ace, which they had already been using on DotCom. Ace is another web-based editor interface, and they were doing it in a Safari or Webkit window on the Mac, with this very primitive bridging to the Objective-C layer. They cobbled together something pretty cool pretty quickly, actually.

That was sort of my intro to it, doing interesting things with just online (if I recall correctly) and then they booted up some little JavaScript with like an asteroid ship flying around inside the DOM and like shooting DOM nodes... \[laughter\]

**Adam Stacoviak:** I think I recall that... You could plug in a page and destroy a page with this thing. Is that what you're talking about?

**Nathan Sobo:** Yeah, totally. So they were destroying their text editor from within with this little ship flying around. I think that was in that video... It all kind of blurs together, but...

So then they sat me down and showed me the code, and it was kind of funny... It almost felt like they were more worried that I was gonna judge their code harshly than determining whether or not they wanted to hire me to work on this thing.

**Jerod Santo:** That's weird... That's backwards, right?

**Nathan Sobo:** Yeah, but I kind of didn't let on... I just kind of noted that to myself. \[laughter\]

**Jerod Santo:** Good plan, don't tell them.

**Nathan Sobo:** \[11:52\] So in pretty short order, it was like I had an offer to -- I mean, it went from my plan to move to Boulder and work on it six months a year and then consult six months a year... And that plan was a bad plan, because it involved underestimating the cost of living in Boulder and the cost of building a text editor. But anyway, I went from that to getting hired to just build open source stuff full-time. It kind of blew my mind, and I was incredibly excited.

But my girlfriend at the time (now wife) - I had already kind of told her, "Yeah, we're moving to Boulder, we're doing this", so she was so enamored with the idea of moving to Boulder that we still ended up moving to Boulder and I just worked remotely for GitHub... Which was a mixed bag. It was really lonely for a while, just working on this secret project, kind of all by myself out in Colorado. Anyway...

**Jerod Santo:** \[unintelligible 00:12:52.24\] what I was just thinking about, which is here you are, you're in Boulder now with your then girlfriend, she's very excited, you probably wanna be outside enjoying the mountains and what not, but you have this ambitious project on your plate, and you just said that you're the only person working on it.

**Nathan Sobo:** Me and Cory were both working on it actually, so there were two of us.

**Jerod Santo:** Okay, so there are a couple people working on it, but a small team...

**Nathan Sobo:** Yeah.

**Jerod Santo:** And it's an ambitious project. I mean, just to pin some timelines, this is end of 2011, call it 2012... 1.0 shipped in 2015, so we're talking about a three, four-year period. How do you start? When you just sit down... You've got Treetop, but that's written in Ruby; you're not gonna reuse that, I wouldn't think so. Ambitious project - where do you start and then how do you order and prioritize features when you're first getting that off the ground?

**Nathan Sobo:** Well, they had a little bit of code that was already running that was built on top of Ace. If I recall correctly, one of the first things I took an interest in was "Can we make this thing behave like Vim?" So I started thinking about that and researching that. That's like a crazy place to start, I guess, but pretty quickly the idea for the key binding system came together...

The logic was like, "Okay, if we're gonna do Vim..." -- and that was more like, "Okay, we're just sort of trying this idea on for size." The idea was that the editor should be radically extensible; that was what everybody wanted. So I thought, "Okay, if this thing's gonna be radically extensible, let me think of something that feels like a real challenge from an extensibility perspective, which would be like really nailing modal editing, and then what problems would we need to solve to overcome that challenge."

The key bindings were sort of the first thing that came to mind. The idea of associating key bindings with selectors and then bubbling keyboard events up the DOM and matching against those selectors, and basically integrating tightly with the DOM for key bindings, and then we needed multi-stroke bindings... So we started working on this Vim idea pretty early on in the thing, and then at some point I just got frustrated with Ace. I don't remember why; probably because I was full of more hubris than I have now, after being beat up by five or six years of this process... And I was just like, "Let's take control of this thing. We wanna control the editor itself - the actual editor, rather than cobbling things together with Ace."

And there were APIs that were missing that I remember wanting... I don't remember honestly the specifics of what lead to that probably hasty decision. From there it was like, "Okay, let's load a file and get in on screen. Now let's get a cursor. Now let's move the cursor around." It was very "feature at a time", and we probably worked on it for maybe a year, or multiple months before we started working on it full-time.

\[16:01\] What drove us is basically what we were used to from other editors that we were dying not having... That was kind of forcing us out of Atom, back into Vim (the editor I was using at the time), and just taking those features off one by one.

That was sort of what drove the agenda, and it was pretty fluid. Of course, we couldn't spend that much time on any one thing. It was like, "Get something quick, working." I think Atom, especially right after we launched, before 1.0, but even to this day -- although I think we've either dealt with the worst of the issues or have a few, but performance was not anywhere close to the top of my mind during this early period. It was just like, "Get something working."

**Adam Stacoviak:** Who was the user at this point? Was it more like you two, you three...? Who was the base you were trying to build for? Obviously, developers at large, but who was the first user you were building for?

**Nathan Sobo:** Yeah, just us. That was it. It was like, "Can we make an editor that we can tolerate working in for a day?" and then -- it's too bad, I should have studied these timelines... But Chris was one of the earliest, earliest users. I remember him posting something to GitHub with like a screenshot or something, of him deleting his emacs.rc, which filled me with a good feeling of like, "Okay, Chris is really on board with this thing."

**Adam Stacoviak:** Wow.

**Jerod Santo:** Where was Cory coming from? You said you were a Vim user.

**Nathan Sobo:** Cory was also a Vim user, I think... Although he was really involved in Lua, I remember that background. He wrote a pretty cool Lua hack for the iPhone that would let you build iPhone apps in Lua. So I think he had also sort of a similar background in lightweight text editor-y things... Although he had some background in game development; he worked for Maxis. But we were both in Vim at the time. I don't remember his editor history prior to that. And I had spent a lot of time in -- Vim was actually a pretty new adoption for me at the time, and it was part of what was motivating this editor urge that had been dormant for a while... Being so excited about what felt like boundless potential of Vim and Emacs, and so frustrated with like, "I don't wanna learn this Vim script."

It just felt really annoying to me to have to worry about learning that language to do anything. As a result - I got pretty proficient in Vim, but I always kind of felt held hostage in my own editor, or something; their NERD tree... I had a bunch of plugins, and sometimes they'd break and I'd have to figure out... You know, I always felt like I wasn't in full control, and that really drove this over the edge to actually do it.

**Jerod Santo:** I'm with you on that. I'm a Vim user from back in college years, so almost 15 years now I've been using Vim, but I'm one of the only people that I've ever met - maybe you're number two now - who has a very good working knowledge of Vim but still is frustrated and doesn't love it and would prefer something else.

And NERD Tree, and plugins that are slowing things down and breaking up... I've always felt comfortable in Vim, but I've never felt like this is the end-all-be-all, which is what a lot of other developers do - they get into Vim, they learn it really well, and it is the best thing ever for them, and I've never felt that way.

**Nathan Sobo:** And to be clear, I respect them, and Emacs, but I never did feel in control, if that makes sense.

**Jerod Santo:** It sounds like it started very experimentally. Of course you were gonna experiment with architecture early on, but even the features were very -- I don't know what you would call them... Organic? Or maybe even call them ad-hoc? Just like, "What do we love from these other things?" or "What are we missing from these other things?" Did you have an idea, like "We need to hit this"? Did you have milestones, or was it like Chris would email you guys every once in a while and say, "How's it going?" and then you'd give him an update? I'm just curious on the internal structure of how you go about building something like this, because it took a while, and so far it's turned out really well. Maybe we can learn some new things from you.

**Nathan Sobo:** \[20:13\] So I'd worked for Pivotal previously, and it was... Pivotal is all about XP, so you sort of have this backlog of individual things you wanna make happen, and you do the minimum thing that could make that thing happen. I mean, there's probably more sophistication to it than that, but that was my attitude.

So to start with, it's like, "Okay, if you don't have a cursor, you can't edit text", right? Those features just wrote themselves. "Get text on the screen, get a cursor moving around, get the text editable", but then there were some things that we planned. I was like, "Okay, we wanna have multi-cursor support - let's do that early, because if we don't, then everything's gonna assume one cursor and it will evolve in the wrong direction."

There was a little bit of strategy involved there, knowing that we wanted to support soft wrap folds - all those basic things... Those were things that I did early because I knew that to be a respectable text editor, at least in my own eyes, we would need to support those features, and that they were weird enough in their impact on how APIs looked, that getting them in early was really important.

But it took us a whole... I mean, Atom still, honestly, if you don't add something like Nuclide or some of the other extensive packages, the core of Atom is still a pretty basic feature set, and none of it is hyper original in terms of the features themselves. We needed a command pilot, a way to run commands - that had its own web-oriented twist in Atom, but that was a feature that other lightweight text-editory rather than IDE-ish editors had; a tree view... I mean, it was all pretty obvious stuff that we needed to be productive. It was like the stuff that we used in Vim poured over to Atom for the most part early on.

Find and Replace saw an iteration... I was enamored with this text editor Sam that had this crazy regex language for doing searches, and searches within searches, and crazy stuff... So our original Search and Replace interface was kind of like command line-y. Another guy, Ben Ogle (who joined later in the project) was like "This is ridiculous" and wrote something that looked a little more like what Sublime offers, which is a little more GUI-oriented.

But in terms of deciding what to do when, it was pretty loose... Just whatever felt intuitively the most pressing need, or the thing that was missing most. It proceeded like that for a really long time. In terms of what the MVP we were gonna ship was - this is probably a testament to my youth and hubris at the time, but I wasn't even really worried about that, at all.
It was like, "Chris told us to just build something awesome. He gave us no timeline", and he didn't really even -- I mean, early on he did check in more regularly, but as GitHub heated up and things got busy, the duration would get longer and longer between check-ins from him, and I don't even think a lot of people at GitHub knew what the hell was going on and what we were doing. I have to assume most people just assumed it was never gonna ship, which was never my intention.

**Adam Stacoviak:** It seemed to me like a big R&D situation where you've got a lot of dreams, you've got a lot of talent to bring this to fruition, but you really had to poke at various different things in terms of features or ways to go to catch your ground. In a lot of ways it seems like you were very much in R&D, rather than knowing exactly what you wanna build. Because if you know exactly what you wanna build, you can build it faster.

**Nathan Sobo:** \[24:05\] I don't know... I had a pretty strong sense of what I wanted to build. I think the trouble is how to build it. I don't know, maybe we should have built it faster. A lot of times when I'm in a bad state, I'm like "Oh I suck... This is taking me so long, and it's still not even where I want it to be."

The plan for me, the rough, back of the envelope plan - a lot of this still isn't even done - was this hyper-social, hyper-collaborative editor, and with the syntax awareness stuff which also isn't in yet, (although it's in progress, and we can talk about that later).

So I had this vision of like a really good general purpose text editor that looks like Textmate or Sublime, but is extensible and flexible like Vim or Emacs, plus having this layer of syntax-awareness that's scriptable baked into it, plus being hyper-collaborative and social coding-aware, which is what I pitched Chris on and what he was excited about, and having real-time collaborative editing. That was my list. That was actually like my MVP for a really long time. But then the MVP of the MVP is like, "Well, we need a usable text editor if we're gonna do anything, period."

I honestly don't even think Atom was exceptionally usable the day we made it public. I mean, it was traumatic to me to launch it, because in a lot of ways I was embarrassed by it...

**Adam Stacoviak:** Wow, that's interesting.

**Nathan Sobo:** But I think it was good ultimately that we did, because I think you gotta develop things in the heat of public scrutiny. I mean, it's not comfortable, but I think it was critical to us, informing our decisions going forward from that point.

**Adam Stacoviak:** What's the saying, if you ship something you're not comfortable or if you're slightly embarrassed about what you ship then it's a good thing, because there's always room to improve...? Do you know what I'm talking about, Jerod? There's a term, there's a phrase out there, something like that.

**Nathan Sobo:** I think it's like "If you're not embarrassed when you ship, then you waited too long."

**Adam Stacoviak:** Yeah, that's it. That's exactly it. And on that note, that's a great place to pause, because we have our first break coming up. So let's take this break, and when we come back we're gonna dive much deeper. I love the direction we're going... We'll be right back.

**Break:** \[26:28\]

**Adam Stacoviak:** Alright, we're back with Nathan... We were talking about this awesome text editor, Atom. Nathan, you've got a great history with this project. I love how serendipitous it was that this all came to be. We've been talking about the direction it's gone, how you've gotten there, the feature set, the R&D, the initial inspiration, but now you've got some years behind you... The current version is 1.14, I believe - is that correct?

**Nathan Sobo:** Yeah.

**Adam Stacoviak:** And then you've got a team behind you... What is the landscape of the Atom team now? It was you and Cory; now who's involved?

**Nathan Sobo:** Should I give you the succession of how it's grown over time, do you think?

**Adam Stacoviak:** Yeah, please.

**Jerod Santo:** Yeah.

**Nathan Sobo:** So it was me and Cory, and then working on it for the longest time before it launched, Kevin Sawicki is another githubber that was working on some other apps that ended up being used internally, but kind of never reaching the light of general population... He kind of joined our team, chewing at the edges at first. I remember one of the first things he did is he wrote a wrap guide package, which to this day is its own package, which is kind of funny, because it should probably just be a feature in the text editor. It doesn't really warrant a package, it's just a single line (80 characters, or whatever). That was one of the first things he did, is implement this wrap guide package.

He kind of merged into the team, and for the longest time it was us three. Then at some point we acquired another company, Easel.io. Ben Ogle is the head of that. That was like a cool, web-based graphics tool that I think went through Ycombinator, and we acquired them. So he joined their project and he brought a brand facing -- I mean, I've always been really end of the brand too, but he actually executed on it, and that was as we were getting closer to being launched publicly, so kind of defining our user-facing story, changing us from kind of a project to a product... A lot of that, I think, had to do with Ben, and he made a huge contribution there.

So then we launched, and -- God, I'm worried I'm gonna forget people; also the chronology... At some point, Cory left the project to do some other stuff, and it was smaller for a while. Then, interestingly, my sister's boyfriend multiple years earlier had wanted to work on this other project with me, and he was a physicist and had only ever programmed in Fortran. I just gave him basically access to the repo and was like, "Okay..." He started making contributions. He taught himself JavaScript, and Ruby, and started going to town.

Right before I joined GitHub, that year before I'd spent multiple months... I was working on this other project, so he joined me. He was just out of college at that point, and we worked together and I sort of mentored him. Then, one of the last things we worked on together in sort of this mentorship phase was my idea for an incremental parser.

He got really intrigued by the idea, read a bunch of papers from Berkeley, and while I was starting Atom and building Atom, he started working on that system - an incremental context-free, grammar-based parser. So at some point we hired him, after him doing a period of contracting, and then the next team member was this guy Antonio Scandurra.

**Jerod Santo:** Great name.

**Nathan Sobo:** Yeah, great name, great guy. He opened a pull request -- actually, I think it was an issue where we didn't support... Our soft wrap lines didn't support preserving the indentation level on the soft wrap segment of the line, which in retrospect was terrible, but we hadn't gotten around implementing that. So he had pinged me on an issue and was like, "Hey, I'm using Atom. I wanna fix this problem. Do you have any guidance about how to fix it?" and I brought up this idea about phantom tokens... We went back and forth one or two times, and then he had a pull request that was super high quality that he opened, and he sort of just committed himself to building stuff for us for multiple months.

\[32:23\] I don't remember what string I had to pull, but we finally hired him as a contractor and then eventually as a full-timer. So he joined the team.

In the past year and a half we've hired Katrina, \[unintelligible 00:32:40.07\], Michelle Tilley and Ash Wilson to work on GitHub integration, which is something that we've always wanted to do, it's just been a really long time coming. So those three are working on that, and I'm really excited about what's coming together on that front.

We also hired a Windows expert... So where is the team at today? I don't know how interesting that whole narrative was, but we kind of have a group that focuses on what we call 'the platform of Atom', which is the part of Atom that other people are building on. It also bleeds into just the basic barebones Atom installation. That's me, Antonio, Max and Damian; Damian also has a focus on Windows stuff, although he's starting to delve into connecting to this language server protocol that Microsoft got going, and that's going pretty well. That's the core set of people.

Then we have another team of three people that are working full-time on this GitHub integration, Git Interaction. Then we have Simon, who's our designer, and he kind of bounces around between us and Electron. The story of Electron is actually pretty interesting too, we could talk about that as well.

**Adam Stacoviak:** It sounds like this is like a full-on product team now, which is what I was trying to get at... You started out serendipitously reaching out to Chris at the Millions-Something Hackathon - I forget what that was exactly..

**Nathan Sobo:** It was like a Million User Party - \[unintelligible 00:34:14.27\]

**Adam Stacoviak:** There you go, right. So you track him down, you're like, "Hey man, I've got an idea. This is what I'm known for." He says, "Okay, cool. You're employee number 50." You and Cory are hacking on this thing, you have really not much of an aim in terms of like inspiration from Chris saying "Hey, go do this"; it's just more like "Build the best editor you can."

**Nathan Sobo:** Right.

**Adam Stacoviak:** And now you've got, as you're laying out here, a full-on team that's very product-focus. You've got GitHub integrations going on, you've got various pieces around platforms, different platforms going on, being extracted from Electron - that full story there...

**Nathan Sobo:** Yeah, so Electron's got a whole team on its own, which it was originally just me and Cory and Kevin, as well. Well, Chang... So yeah, a big sub-story of this entire thing is like how the hell are we even gonna do this, because when Cory pitched the idea of this hybrid desktop web app, the technology did not exist to do that. We had something cobbled together with the Webkit views that you can do inside of Cocoa applications, but it was not cross-platform, so that was like a massive...

**Jerod Santo:** Why didn't you guys just use Electron?

**Nathan Sobo:** Exactly. I wish it would have existed.

**Jerod Santo:** That's what I would have done.

**Nathan Sobo:** Yeah, so I remember just trying to figure out "How the hell are we gonna do this?" I'd done some C++ in college, but it definitely did not equip me to dig into the Chromium codebase and figure out... Our original integration with the underlying operating system all went through this Objective-C to JavaScript bridge; that was something enabled by the Webkit API, only on the Mac.

\[36:00\] And it was all synchronous because we didn't have an event loop, and it was just cobbled together... And for the longest time I was like, "We've gotta have access to the NPM ecosystem", and if we were gonna have access to the NPM system, that meant we had to have Node APIs, because all those modules use Node APIs, top to bottom.

So if we were gonna have Node APIs, that meant it had to be V8, and if it was V8, that meant it had to be Chromium. So I really quickly set my sights on getting this dream of this mashup between Node.js and Chrome working, because what we had wasn't cross-platform. They knew it was a priority for all of us, and it didn't have an event loop and the library ecosystem was tiny and the whole point of having that thing in JavaScript was to tap into this huge library ecosystem.

So we started with this Chromium embedded framework, which was like a step in the direction of Chrome, but it sort of abstracted us away from Chrome. Then I started poking around and researching, trying to dig up what I could find on who did Node and Chrome integration, and I found this project from the Intel research laboratory in China, Node Webkit. You may have heard of it; it's like a competitor to Electron.

I downloaded it, I built it, or whatever... It was really early in that project's evolution as well, and Atom just was crashing. We couldn't keep Atom running, and I remember poking around in some IRC channel and at some point Cheng - who had been an intern at that Intel open source technology center - emailed me and said, "Hey, I love GitHub, blah-blah-blah... I wanna work for you guys." So at that point we had like one Skype call with him and we could barely communicate, because I don't speak Mandarin and he spoke English but it wasn't a lot.

I think I emailed Chris and I was like, "Hey, we have to contract this guy." Somehow we managed to contract him, and at that point it was like... The communication was barrier I knew was so high, the timezone difference was massive, and so at that point I was just like, "Here are the specifications: I need access to Node APIs from inside of a browser window, and from a callback, from listing the directories on my file system I need to be able to mutate the DOM; it has to be seamless. Go for it." That was sort of how Electron was born.

I think we've gotten some criticism for not iterating on Node Webkit, and honestly it wasn't intentional. It was more like, "Okay, I had this person that wanted to work with/for us and be paid by us, but I couldn't communicate with -- and even if I could communicate with, he was in a different timezone." I just needed a simple target to aim him at, and that basically was "Build me a system that's custom-designed for exactly the needs of this application, solves no other problem and is only responsible to us", because that was all we had time for.

So we didn't really know it was gonna become Electron. We called it Atom Shell. He wanted to call it DireWolf, but I'm like, "I don't wanna call it DireWolf..."

**Jerod Santo:** DireWolf?

**Nathan Sobo:** Yeah...

**Adam Stacoviak:** That's a bad name.

**Nathan Sobo:** \[unintelligible 00:39:22.01\] Game of Thrones, but yeah... \[laughs\]

**Adam Stacoviak:** Right on... DireWolf makes sense then.

**Nathan Sobo:** Yeah. So it was Atom Shell for the longest time. It was just the shell of Atom, which is where Electron came from, the orbital shell stuff.

**Jerod Santo:** We actually did an entire show on Electron back in August of last year or so. For those who want a deep, deep dive with Zeke Sikelianos, about Electron's history, which some of it overlaps a little bit, of course, because as you said, you guys pulled it out... I remember what is Atom Shell, it might have even been public at a certain point, but that's episode \#216. We'll link that up in the show notes, so for those who want to continue down the Electron path, check out that episode, as well.

**Nathan Sobo:** Great.

**Jerod Santo:** \[40:05\] It sounds like you had a lot of -- I mean, obviously you had a lot of challenges, and it sounds like even harder than I was thinking it was, so... Trying to build a desktop class and a desktop app with web technologies post-Electron, like I said, is a relatively straightforward endeavor. In fact, you even empowered other people who were competitors - in the sense of competing text editors - to get to where they wanna go much faster than you all could, because the platform wasn't there yet.

I'm thinking about performance, but I'm sure there's probably other ways, as well... Have you found even today, even with Electron, now that it's abstracted and stabilized and worked on by many people - have you found that there's an uncanny valley or major drawbacks still with using web technologies in building desktop apps? What are your thoughts on that?

**Nathan Sobo:** Performance still is a challenge - although we can go into why I don't really think it's actually that big of a deal. - but other than that I don't really feel an uncanny valley surrounding it. Most of the facilities that we need from the underlying operating systems are available or pretty easy to get access to through native extensions which you can just load via NPM. So I'm pretty happy... AP-wise, even now we're working on taking advantage of some new APIs in Chrome that completely change the game of the text editor rendering and make things so much more efficient, that just weren't available.

**Jerod Santo:** Do you have an example for that?

**Nathan Sobo:** Yeah, one of the biggest challenges was there was no way for me to detect when an editor became visible, because the editor could be anywhere - it could be embedded into someone's package on a tab, and then someone switches tabs and that editor is invisible. And then some piece of state changes - that changes the font size, which changes the line height etc. So I need to perform all these measurements for a variety of reasons in order to render only the visible text; not all the text, but only what's visible for the DOM, because the DOM can't handle 10,000 lines of text.

So anyway, when the editor becomes visible, if the \[unintelligible 00:42:23.01\] or the font size has changed, I need to remeasure... But I had no API available to me until this latest version of Electron that we're upgrading to, that could tell me "Oh, the editor has become visible." So for the longest time we had to poll. That's always the debate and the challenge for me; I don't know, maybe I should follow a "worse is better" philosophy more, but I really wanted the editor to be self-contained, so that if you put the editor on the DOM somewhere, the goal would be "it works.' We haven't always achieved that, but that was always the goal. It needed to detect for itself if it became visible. I didn't want the user of the editor to have to inform it.

Anyway, that API that now will let us do that is this thing called intersection observer, which just landed in Chrome. But it's just kind of crazy to think -- and there are still things like "What if I wanna observe the computed style of a particular node and be notified when it changes?" That would be really nice for the editor as well, because then no matter how it got styled, I would be able to detect if the computed font size (blah-blah-blah) changed and remeasure. But as of now, there's no way to do that.

To me, that's probably one of the key frustrations - just hitting places where still as amazing as they are, and as many amazing things as web APIs enable, there are sometimes these holes where there's something I need and I can't get it. Measurement - another one. At this particular character, what pixel position is that at horizontally, considering ligatures etc. There's really not a good API to answer that question efficiently, short of putting the content on the DOM and asking it the question.

**Jerod Santo:** \[44:06\] Right. We definitely hit up against that one as well. Let's go one last question on the technical side and we'll hit up into our next break. We have lots more to talk about, including your favorite packages and themes and must-haves, and we also wanna talk about the future - I'll ask you to project a little bit into the future for us for Atom. But on a technical level - this is the superficial technical level... Because just looking at the repository, you have 75% CoffeeScript and 25% JavaScript. Now, CoffeeScript has fallen out of flavor with many developers, especially with ES6 and such things adding many of its features... I'm curious about the history on CoffeeScript and the current team's opinion of it.

**Nathan Sobo:** The history was when I showed up, n weeks into Atom's development, they were using CoffeeScript (Chris and Cory). At that point in time, I think all of GitHub.com's codebase was then in CoffeeScript. You've gotta kind of transport yourself back to what 2009 or whatever point this decision was made. I mean, ES5 was - for a Ruby programmer, at least - "Ugh, god... I gotta assign crap on the prototype... What is this?!" So CoffeeScript to Ruby programmers - which is what we all were - seemed so appealing; it seemed to fix a lot of problems, it made things more convenient, and it seemed like a cool idea.

Fast forward five years-ish, JavaScript's evolved tremendously, and you're right, CoffeeScript has kind of... To me, it feels a little like a dead end. It's not standard, it's worked on by way fewer people than JavaScript; every feature that it offers that's a positive is now in JavaScript and there are plenty of things that it does that drive me up the wall. So our official policy is no new CoffeeScript. Now, there's instances when we have to dig into some stuff that's written in CoffeeScript, and it's a small change and I'm not down to run this Decaffeinate script and clean up the output to get it converted over; it's just not what I'm up for that day. But slowly but surely, we are gradually converting everything to standards-conformant JavaScript. That's the official policy at the moment.

**Jerod Santo:** It was kind of a file-by-file basis.

**Nathan Sobo:** Right, or more like library-by-library... But occasionally file-by-file, like in core, and stuff like that.

**Jerod Santo:** Interesting. One last question - this one seems like it's a non-sequitur, but it's gonna loop in all the way back to when you said you brought on - I can't remember his name, but the product-focused, kind of the brand...

**Nathan Sobo:** Yeah, he's no longer with us, he's moved on to other brands. That was Ben Ogle.

**Jerod Santo:** Okay, so Ben Ogle. So Atom has a great brand, it has a great design, the marketing pages are really good, the documentation is really good, and I'm just curious about the naming - was it Atom from the beginning? I know Electron got renamed from Atom Shell to Electron... We love naming stories, so tell us a little bit about the brand, the design, the naming.

**Nathan Sobo:** So the original name of Chris' project was Atomicity, and I do not know why he named it that... I don't really get it; I should ask him. But it was Atomicity, and I believe before I was hired they'd made a command line script to launch it from the terminal. And they're like, "Atomicity is really long", and they just made it Atom. Because remember, at the time you could launch Textmate with 'mate', you could launch Sublime with 'subl', so the simplest shortening of Atomicity was Atom, and then that name was like "Oh, that's a much better name."

\[47:58\] So right around the time I was hired I think we renamed the repo to Atom, and just did the rename. And then the branding just kind of grew out of that, because we were interested in the atomic era... Atom, it's this physics thing. So the '50s kind of came to mind, and retro-futurism isn't exactly new, but we really liked that angle of the atomic era. From that, I think we hired an illustrator at some point. It didn't really pan out, but he did some really cool Atom graphics - wallpaper and stuff, that were sort of in this retro-futuristic theme.

I remember making Pinterest boards with all these posters from general dynamics from the '50s... You know, those cheesy advertisements that were hand-drawn, about how the world has a better tomorrow, the house of tomorrow etc.

We had different people involved... The GitHub animator - who I think is still the lead animator at GitHub - did some graphics for us, but they seemed just a little too cartoony. At some point we worked with another designer inside of GitHub and gradually evolved toward that simple Atom disc. I don't know if that gives a good narrative... We have the Atom video, a little commercial we did for 1.0.

**Adam Stacoviak:** I love that video, it's so awesome. I \[unintelligible 00:49:23.26\] so I'm not sure if somebody inside the Atom team that do this stuff, but even when you zoom out further, you've got GitHub universe, and you've got GitHub satellites... You've got this sort of like physics perspective towards naming with GitHub these days. Atom is one of the smallest types of structures we have in our universe, and you've got obviously planets and satellites... You've got this sort of space/physics perspective towards naming.

**Jerod Santo:** Electrons...

**Adam Stacoviak:** Yeah.

**Nathan Sobo:** Yeah, I don't know how that really emerged. Atom was named that before a lot of those themes came out and a lot of those themes were named. There was this wallpaper running around inside the company, the GitHub Universe wallpaper where there were different planets. One planet looked like HUBOT, and the other one looked like Octocat... I think that sparked a lot of excitement.

I actually have to talk to designers to get a sense of how intentional all this has been. But Atom was accidental to some degree, because it was Atomicity.

**Jerod Santo:** It's always intentional when they write up in the history books, you know?

**Nathan Sobo:** True.

**Jerod Santo:** "We thought of it all a long time ago. This was a plan that we had laid out and we're just executing our plan."

Well, I teed up a break earlier and we didn't take it because we wanted to ask you about the name, so let's take that break now, and on the other side - Nathan's favorite packages, we'll talk about themes, we'll talk about the ecosystem and the future of Atom. We'll be right back.

**Break:** \[50:57\]

**Jerod Santo:** Alright, we are back with Nathan. So we were having a fun conversation about Atom. Nathan, I'd like you to talk a little bit about where we are today and where we are going. You probably have thousands, maybe a million -- I don't know, you have lots of users, you have people who love Atom; you also have a lot of people who are holding out. They love their Vim, perhaps their Sublime Text, and they're waiting for X, Y or Z feature or performance to improve, or these other things. So tell us the lay of the land in terms of where Atom is moving.

**Nathan Sobo:** Yeah, it sounds great. Milestone zero for me has always been that we need to be a fantastic, just basic text editor. Yeah, we're super extensible and you can do crazy stuff in Atom that really isn't possible anywhere else, but as a user (not a package author) I've always wanted it to feel smooth, feel lightweight and fast. I think we've improved dramatically from even when we went 1.0 on that front, and there are improvements landing in every release or every other release, but that's something that we're gonna be continuing to focus on to round out, at least for the first few months of this year, and I still think we can keep working on it.

In terms of scalability, we have a bunch of architectural changes coming that I think are gonna scale us up to multiple gigabytes of text. We're already up to 40-50 megs before there are problems. And it's not just gigabytes for gigabytes' sake; I think when you increase the value of n, you end up discovering performance problems that while not egregiously bad at smaller file sizes, are kind of like this sort of low-grade sand in the gears. So that has been a focus and will continue to be a focus, and it's an incredible amount of work to get there. So that's one piece of it.

Then, transitioning out of that to basically add some of the first real big features that have landed in Atom for a long time... First and foremost on the roadmap is pretty nice Git, and starting the beginnings of then, but it will then continue to be iterated on Git and GitHub integration - basically being able to open up a panel, see what's unstaged and staged, stage lines back and forth, discard hunks, create commits with the nice Atom editor, and then more interesting interaction with understanding collaborative state on GitHub. My dream, although it will take a while to get there and this will kind of be like v1 iterate to that dream is, for a lot of tasks, you won't really have to leave Atom to do a collaboration. It will take a while to get there, but that's where we're headed. So that's one area for expansion that I'm really excited about.

**Jerod Santo:** So by collaboration are you talking about like a Google Doc style, "I'm looking at mine, you're looking at yours" and we're live editing the same file?

**Nathan Sobo:** That's definitely something I wanna do; that's not really in progress yet. I did a bunch of research in that area, so that I can't really put a timeline on. I can definitely say that more async style traditional GitHub collaboration will be happening this year. I think there will be a natural outgrowth from that into the real-time stuff. There's been a huge debate in the team of just even how real-time is presented - are you like full-on pair programming? And if that's true, what do we do about things like the app that you're working on is on one person's computer; when you run that app, what happens? Etc.

\[56:09\] So when it gets into real-time - and it's definitely somewhere I wanna go - I see it as maybe to start with this little flirtatious outgrowth from some async collaboration like you're already having on a pull request or something, if that makes sense. You're going back and forth in comments, you're seeing that stuff come in, and then you're like, "Alright, why don't I just code with you" and then for a more limited scope working together. But that's all a twinkle in my eye right now.

**Jerod Santo:** The GitHub integration is, as you said, underway...

**Nathan Sobo:** Right.

**Jerod Santo:** ...so you're talking about not just Git operations, but actual integration into your public and private repos, and maybe pull requests and issues - is that the kind of stuff you were referring to?

**Nathan Sobo:** Exactly. And I'm really excited about what it's gonna be like to get a sense of like, say I have a pull request opened and I'm editing some text, and someone comments on the pull request and I'm in that file and I just see a little thing pop into my gutter, like "Ding! Someone commented." Just this sense of immersion in the collaborative experience has always been what I pitched, even to get hired; It has taken a while to get to the point where I felt we could even start on it.

**Adam Stacoviak:** Any concerns with distractions at that point, though?

**Nathan Sobo:** Well, we'll have to see. \[laughter\]

**Adam Stacoviak:** Yeah... I mean, I could just think of the age-old cartoon which is like a programmer there with spaghetti in his mind, interrupted, boom! Spaghetti's gone - that type of situation. So it's like, that little notification might be like a whole new problem.

**Nathan Sobo:** Oh, totally. Maybe you won't want that notification; some people will, some people won't. Maybe the whole idea is terrible, but I think what is true is if I'm viewing people's comments on my pull request in my text editor, I'm gonna be happy about that.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Yeah, me too.

**Nathan Sobo:** Because it means I can respond to those things in situ; I don't have to tap over to my editor and deal with it. So just an entire integration of that entire flow for Atom users is our goal.

**Adam Stacoviak:** Any plans for pairing type stuff?

**Nathan Sobo:** I don't know... There's nothing planned. There's dreams... I mean, Antonio is still in school and has to do a thesis in Italy, so he's probably gonna work on researching the real-time text collaboration technologies. There's operational transformation, there's also conflict-free replicated data types... Those are kind of like the two leading theoretical foundations we're working with, but I don't know... We have a pretty nice server-backed end for a lot of valuable stuff, so we're starting there. But that's the more async world.

I grew up as a programmer pairing and I still pair a decent chunk of the time, so I'd love to make that work someday.

**Jerod Santo:** Around the performance concerns, you mentioned that you guys are going at extremes lengths to test performance bugs and to isolate them and find different ways you can improve performance. Do you have anything else in terms of performance that you're gonna also be working on over the next year or so?

**Nathan Sobo:** One of the ways that we're addressing performance at long last is by dropping key pieces of the system down into C++, which is great, because V8 is written in C++ and has a pretty extensive API from that native side of things. So far, we've basically dropped a menagerie of balanced tree implementations and splay tree implementations down to C++. For example, the patch layer is this data structure that aggregates change; so in the text buffer, when you open a transaction and then just make random edits anywhere in the file, at the end of that how do we report to eventless scenarios what the aggregate effect of all that change was, and the answer is not like diff, the before and after. That's been a structure we've had in C++ for a few months now.

\[01:00:01.10\] Something that's been there longer is the marker index, which is a data structure that tracks logical regions. If you have a word highlighted and then you paste text above that word, making sure that the highlight remains stable over that word and we understand the impact of that change on that region... Those are the kind of things that have been there previously, and what we're working on now is taking more down into C++, so actually dropping the entire text buffer implementation down to the native layer, and doing - where possible, because in some cases if you're at a remote file system and different packages do different things, doing the I/O from the native layer, storing all the text as this giant, immutable buffer and then representing changes made as these patches that I described previously that are aggregated sets of changes that are composed on top of that underlying immutable text - that will be the gateway to this feature we call Snapshots. That's basically like, "Let me freeze the contents of the buffer at a point in time", and that gives us something stable that we can implement find and replace, scanning and populating an index of where the results are...

Where people search for "space" in a multi-thousand-line file or something crazy, we still block on that, so that will get us that in the background.

**Jerod Santo:** Nice.

**Nathan Sobo:** And then, the thing I'm most excited about is Snapshots are the gateway for what we're gonna start to do hopefully in the next few months here - to integrate Max Brunsfeld's new parsing system into Atom in a proper way. The parser needs, obviously, a stable input stream; the stream can't be editing out from underneath it. \[unintelligible 01:01:42.15\] will enable the parser, and we already have some pretty cool prototypes going. But the idea is to achieve that original dream that I had back when I started Atom, of always having a syntax tree available for any language you're happening to be editing, so that packages can do things like "Oh, let me inspect if there's like a has\_many class method call in this class that I'm looking at here, and you can just walk the parse tree to do that at any point in time. Then that code could create a database and figure out what the columns are.

I think the combination of ad-hoc package code with a really reliable well-formed syntax tree can produce some pretty cool stuff. That's another thing I'm pretty excited about.

We currently use this reverse-engineered Textmate syntax highlighter, and it's not the fastest thing in the world. I think Textmate's is probably faster than ours, but no matter what, they're all based on Oniguruma regexes... It's just not that fast, whereas Max's parser can crank through a jQuery in 40 milliseconds, I think.

**Jerod Santo:** Wow.

**Nathan Sobo:** And then each additional edit is incremental, which means you type and you only pay for the kind of changes that you made. So each additional edit is like 1 millisecond, or something.

Our budget is about 16 milliseconds for any action to happen in order to feel responsive. We're kind of within that budget, and I'm excited about what we'll be able to build on top of that.

**Jerod Santo:** Yeah.

**Nathan Sobo:** The other big theme that will be supported both by this integration of this new parser and also some work that other team members are doing on talking about a language server protocol that VS Code started is just moving more in the IDE direction in terms of having those kinds of integrated, language-aware features. But I wanna be careful to keep Atom feeling lightweight, feeling more like Vim or a Textmate, and have those things unfurl as needed, but then stay out of your way when they're not. I wanna keep that vibe of a text editor.

**Adam Stacoviak:** That's a good move.

**Jerod Santo:** I agree. That's the Holy Grail. It's like, "Give me the power features when I want them or know I need them, but don't feel like they're your huge, honking IDE. Keep it light, keep it fast."

**Nathan Sobo:** \[01:04:04.28\] Right. Another thing we're working on right now actively is startup time. The technology we're using is this thing called V8 Snapshots where you can, with some limitations, run a bunch of JavaScript Load and run a bunch of JavaScript, and then tell V8, "Hey, serialize your state", and you get this blob of binary. Then, when the Atom is born, it can be born with this blob of already evaluated JS just there, in memory.

So we're actively working on that right now. We had to go through every package that was still using jQuery from the good old days, and remove jQuery because it does all this DOM interaction when it's evaluated. That was breaking our snapshotting, but that's finally done.

I don't know, I still have this pretty big passion, and people may doubt it because it's taken a while, but these are big problems to solve to get this thing feeling like a Sublime. I mean, it's never gonna be Vim, because it doesn't write on the terminal and its core wasn't built in the late '70s, early '80s, but I think we can feel a lot lighter and snappier, and that's always a goal.

**Jerod Santo:** So you have a lot of big goals in performance. It sounds like you're putting a lot of efforts into that. Project for us... This is maybe a five, six-year-old project now in terms of like heavy development. Project out, double it; go five years from now. In your perfect world what is Atom then, both in terms of how it works, and then also its place in the programming community? Are you going for utter world domination? What's your goals?

**Nathan Sobo:** Utter world domination really doesn't matter to me. If people are happy using whatever they use, I'm happy for them, and as a programmer I would never wanna, like -- yeah, whatever; it's fine... Use what works. So world domination doesn't matter, but my goal with Atom has always been to build the editor that I wanna use for the rest of my career. And until it is that definitively, I'm not gonna stop. Honestly, it is gonna probably take another five years, at least.

One big dream is "an IDE-but-not feel" - a text editor, but have the same power as an IDE, but then also democratize that experience. Use a simple JavaScript DSL to define the grammar for some newcomer language, and you've got really awesome facilities that are the foundation for doing refactoring or further semantic analysis etc. So definitely moving into those kinds of language-aware capabilities - that's one pillar of it.

The other pillar is never having to leave Atom to do your day-to-day work, in programming land at least. I don't know if everybody at GitHub agrees with me on this (I haven't asked), but I would like Atom to almost feel - if you wanted it, if you opted into that layer - collaborative, to feel like an extension of the GitHub experience, if that makes sense. A collaborative development environment is my thought. An environment for developing that inherently acknowledges that there are multiple people working on whatever you're doing at the same with you, and exposes valuable information about what's going on, and puts you in touch with those people at appropriate times; it keeps you away from that information when it would be distracting, as you brought up...

But yeah, what does that look like? And that's a little hand-wavy right now; I think we're just starting to explore that, but yeah, "social coding in your editor" is another big vision, and then of course, fast, snappy and lightweight.

**Adam Stacoviak:** Always.

**Nathan Sobo:** And of course, real-time collaboration. That's part of that big vision. I mean, the vision I've always had is -- I've loved pair programming at Pivotal, just hanging out all day, two keyboards, two mice and one monitor, working with somebody. I think it's a really powerful paradigm, and it'd be great to enable an online version of that.

**Adam Stacoviak:** \[01:08:13.02\] What's the next step for someone listening to this that's like, "I could actually hack in this area; I wanna get involved with this project." Is it a GitHub thing, is it an open thing to the community? I know you've got the Flight Documentation -- what's it called?

**Nathan Sobo:** Flight Manual.

**Adam Stacoviak:** Yeah, I think that's a great way to get involved to learn about things about Atom, but what other ways do you provide inroads to provide onboarding contributors and inviting people into the community? Do you have meetups around this? What's the community aspect of this like?

**Nathan Sobo:** I guess there's multiple levels of it. The project itself, Atom, is super modular by design. The idea is that, as much as possible, anybody that wants to make something possible in their text editor, that they can do it basically via Atom's API. We have thousands of packages that are published right now, and a lot of the core features in Atom, like the tree browser, the tabs, find and replace, the thing that brings up the \[unintelligible 01:09:15.15\] the file search - all these things are implemented as packages.

So a great way to get involved is implement a better one of those, or implement some new piece of facility. You don't need anybody's permission, no one has to merg your pull request. You can publish that tomorrow and people could start using it and getting value out of it. So that's one layer, the least friction layer of collaboration.

The next one would be opening a pull request on either Atom Core or one of our hundreds of different repositories that comprise the finished system, when it's all combined together. All the different features are pulled out into their own packages, etc.

I think we're getting better, but historically there's not that many of us, and there are a lot of people that wanna get code merged. So the problem sometimes with that is we're inundated with pull requests, and we don't have time to make forward progress on the core of the system and review every single PR and merge it in a timely manner... Which is why if a package is bugging you, fork it. Maybe we'll just adopt the entire replacement that you create, wholesale.

We maintained a package of Vim Mode, and somebody forked it and made Vim Mode Plus, and now I think in the readme we just link everybody there.

**Adam Stacoviak:** Wow.

**Nathan Sobo:** And Autocomplete, same thing - Autocomplete Plus. Autocomplete was junk, and someone replaced it and now it's part of Core. I think in general as an open source model, that kind of modularity approach is ideal, because it means people can do whatever they wanna do. I mean, all the way up to Facebook, that's basically built an entire IDE in the form of Nuclide, on top of Atom. When we're writing the C++ code, I use the Nuclide debugger; it's really great. It connects to LLDB, it gives me a graphical view of it...

\[01:11:08.05\] They've got a diagnostic system to relay linting reports, they've got their own tree view - they've completely replaced Atom's tree view with their own thing. They've got their own command T (Cmd-T) that has all kinds of cool features... And we're talking to them about upstreaming some of this stuff, but obviously they have the priority of serving Facebook as an organization, building their IDE tooling; upstreaming is part of that, but they have a lot of other things to do.

Anyway, that's an example of how far you can take it if you want to. I've heard Go Plus - I haven't actually used it because I haven't written Go, but that gets really great reviews in terms of facilities that it extends Atom with. To me, that's the best place to start - build a package.

But there is that things, like if there's a particular missing feature or piece of Atom that's driving you bonkers... I mean, we merge quite a few pull requests constantly, but there's just always more created than we manage to merge.

**Adam Stacoviak:** Well, if you're listening to this, if you haven't been there yet, Atom.io - a lot of good information there. I love the video, too. We didn't even cover the video, but we're a little late on time to go deep into that. Just going back into that whole '50s, nostalgic advertising... I love the creativeness that you all have on the GitHub team to do the new branding around your done stuff on Atom, and universe and satellite. It certainly fits the bill, so to speak.

**Nathan Sobo:** Thank you.

**Adam Stacoviak:** Well, thank you so much for coming on this show, Nathan. It's been a pleasure talking to you. I know that it's been a long road, and we don't blame you for the timing; as we've said a couple times during the show, you have had a hard job to do what you've done. You lead a great team and you've done something really awesome, so we look forward to the future of Atom right along with you. Thanks for coming on the show, man.

**Nathan Sobo:** Thank you so much!
