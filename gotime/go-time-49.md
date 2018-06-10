**Erik St. Martin:** Welcome back everybody for another episode of GoTime. Today's episode is number 49, and today's sponsor is Toptal.

Today on the show we have myself, Erik St. Martin, we also have Carlisia Pinto - say hi, Carlisia...

**Carlisia Pinto:** Hello, everybody.

**Erik St. Martin:** And Brian Ketelsen couldn't be here, but we are fortunate to have Johnny Boursiquot join us today.

**Johnny Boursiquot:** Good to be back!

**Erik St. Martin:** And our special guest for today, for all the [VS Code](https://code.visualstudio.com/) lovers out there, is actually the author/maintainer of VS Code. [Ramya](https://twitter.com/ramyanexus), welcome to the show.

**Ramya Rao:** Hey, everyone. Good to be here!

**Erik St. Martin:** So do you wanna maybe give everybody a little bit of a background of who you are and what you're working on? You actually work for Microsoft as well...

**Ramya Rao:** Yes. Like you already said, my name is Ramya... I joined Microsoft straight out of college about nine years ago in India. Four years later I moved to the U.S. here in Seattle. Ever since I've been in this group called Developer Division - we call it DevDiv. It's all about developers, developer tools, all the services that developers use and so on. I loved this group.

You finally get to be in a place where the product you make is useable by you. You are your own customer, and that's a different high altogether.

I've been in a couple of teams of in DevDiv. The first one was about developer content services; you know how you have MSDN, you have TechNet... Microsoft is a big company, so almost every team had their own thing going when it comes to trying to do content. We tried to consolidate everything, bring everyone up to speed, try to lose the hold on 10-15-year-old tools and try to use modern tools like Markdown, Git, and have a faster loop - write the content, get it out there.

So I did that for a while, then I joined VSTS (Visual Studio Team Services). That's like a collection of services needed for your application lifecycle management (ALM). So you have source control, you have \[unintelligible 00:02:52.22\] issue tracking, you have build for your continuous integration, you have release for your continuous deployment - all of these under a single umbrella.

If you think of the old-school Team Foundation Server (TFS), which used to be an on-prem product, VSTS is like a online offering of the same, but so much more. So I did that, and then I heard VS Code was spawning a team here in Redmond. Until then, VS Code was a team of about ten people in Zurich, headed by Erich Gamma. I heard they were forming a team here in Redmond, so I was like "I shouldn't lose that opportunity." I joined the team about a year ago, so that's how I came to be in VS Code.

**Erik St. Martin:** Were you using Go prior to starting on this plugin, or was this kind of like your intro to Go?

**Ramya Rao:** I hadn't even heard of Go, to be honest, before that. What happened was I joined the team, and right about two months before I joined the team, the person who wrote the Go extension had left the company... That's Luke Hoban, for everyone... A big shoutout for starting this whole amazing tool.

\[00:04:07.02\] So they decided, "Hey, let's give that thing to the new girl." \[laughter\] So there I was, new to VS Code, new to the VS Code extension story, new to Go, and I was the only maintainer/contributor for a while there. So yeah, that's how I came into Go.

**Erik St. Martin:** So do you like and love Go now? Do you use it for other things, now that you kind of were forced by way of building this extension?

**Ramya Rao:** I don't use it much in the day-to-day job because we don't get to use it in the product; VS Code doesn't use Go. But once in a while I try to write small programs and learn more about it.

**Erik St. Martin:** That's really cool. So VS Code - I think that's built on [Electron](https://en.wikipedia.org/wiki/Electron_(software_framework)    ), isn't it?

**Ramya Rao:** VS Code is built on Electron, yes. The way it started was initially about five years ago Erich and a few others were thinking about "Hey, let's look into having a developer experience, a coding experience in the browser, if we can do it, using web technologies", and that's how the [Monaco Editor](https://microsoft.github.io/monaco-editor/) came into being.

It was used in, say, the Azure portal for your \[unintelligible 00:05:20.20\] Azure websites online; Electron was used in IE11 in the debugging support - what you see there is Monaco. Then VSTS itself uses it, so you can edit code online - that's Monaco. And then I think right about that time Electron was gaining traction as well, and the team paused and thought "Which direction we wanna take?" Then, since Electron was right there, and then you had this editor, then things fell into place, and now you have VS Code, which is built on top of Electron.

That solves our cross-platform problem, and lets you write this amazing product using just web technologies. I love that one thing about Electron - you no longer have to write desktop applications, which is cross-platform; you no longer need to know the native technologies anymore. You know web tech, and that's all you need. And a little bit of \[unintelligible 00:06:16.20\]

**Carlisia Pinto:** We heard that some other code editors have an issue of performance and that it is due to - what's the name again? Electron. But VS Code does not seem to have the same performance issues. Did you tweak something to make it the Electron performance issues go away, or what we heard is not accurate and Electron has no performance issue whatsoever?

**Erik St. Martin:** Well, I think the differentiator is the editor that's written on top of Electron - I believe they're two separate editors, both written on Electron.

**Ramya Rao:** I think you're referring to [Atom](https://atom.io/)...

**Carlisia Pinto:** We didn't say that, you did. \[laughter\]

**Ramya Rao:** Oh, I didn't know it was supposed to be politically correct... \[laughter\] Yeah, Atom comes from the same -- and it is built on top of Electron. Yes, there is an opinion that certain slowness that you might see might be attributed to Electron, but I think it's just we have the time and smart design to go about building the product in a good way. The team has been contributing back to Electron as well when we saw the need for it.

We didn't do any tweaks just for performance, I believe, but Ben from the Zurich team would be a better person to answer that question. Yeah, nothing that I know of.

**Carlisia Pinto:** Okay.

**Johnny Boursiquot:** \[00:07:58.28\] Well, we shouldn't bash Atom too much... I think many of us still use that, because for whatever reason we like some of the mechanics in there. But again, we run the risk of starting the editor war, which I'm sure we will touch on at some point during this broadcast. But obviously... Personally, I've been using VS Code for the better part of 4-5 months now, and before that I was sort of a Vim die hard, _you will pry it from my cold dead hands_ kind of a user, and I still use Vim pretty much on a daily basis, but when I'm doing my Go development, VS Code has sort of become what I do pretty much on a daily basis, as well.

**Erik St. Martin:** I'm actually kind of surprised nobody kicked me off the show today, because I'm still a _you'll have to pry it from my cold dead fingers_ person. \[laughter\]

**Ramya Rao:** Personally, I... You know, to each his own. You sometimes get used to a certain tool and that works for you - good for you. Whatever makes you productive, and get the best out of the tool. All we say is give everything a try and see which works out for you.

**Erik St. Martin:** Yeah, looking at VS Code and some of the new lens stuff - it really looks enticing. But yeah, I use Vim because it's habit. Lots of things are really good nowadays. Before, when I used Vim a lot, it was because your alternatives are really clunky, swing applications and stuff like that... But now it's just habit, and I'm often SSH-ing into boxes and I can work just as efficiently through an SSH session as I can locally.

But yeah, some of the new editors really are enticing. The new lens stuff is really cool... I think that's what you call it, right?

**Ramya Rao:** Yeah, the _CodeLens_. You know what you should try? You should try the Vim plugin on VS Code. That might be an attempt to bridge and get the best of both worlds.

**Johnny Boursiquot:** That was the first plugin I reached out for, because... Basically, I have muscle memory with Vim, so the moment I saw that there was actually a plugin for Vim and VS Code, that was -- I honestly cannot use VS Code without that plugin in there; I'm just so used to the way you do things in Vim...

Somebody mentioned in the channel that there is a new editor that either has come out or is in beta... I think it's called _Gogland_. I have a hard time pronouncing it, I don't know how it's meant to be pronounced.

**Erik St. Martin:** I think it's _Gogland_.

**Johnny Boursiquot:** Right. I tried that, and honestly, it felt so heavy to me... It just gave me nightmares from my Eclipse Java days. I don't know, I tried it, but it just wasn't for me.

**Carlisia Pinto:** Yeah, _Gogland_ is really good, especially for people who are working with Scala and Java and Go at the same time. They're loving that editor. But they are the people who also love it... I also tried it and it wasn't for me.

I am at the moment suffering from _Editor Fatigue_. I like investing time on my editor to make it as performant as possible for me, and I've done that... I've optimized Vim for me, I've optimized Atom for me, and there was always something that wasn't good enough, so right now I'm giving VS Code a try, and I haven't done anything; it's very much bare, because I am fatigued. But I am still giving it a try. I am having some issues with the Vim plugin, because I get stuck in _Visual Mode_ and it doesn't shift from _Normal Mode_ to _Insert Mode_ and back to _Normal Mode_...

\[00:12:05.26\] Somehow the _Visual Mode_ kicks in and I think I am in _Normal Mode_, but I'm actually in _Visual mode_. So I can't go from _Visual Mode_ to _Insert mode_. Once I realized that, I clicked "I" ten times... Then I have to go and click escape to get into _Normal Mode_, and then click I or A to start typing. This has been driving me crazy. I don't know what I'm doing wrong.

**Erik St. Martin:** Can you do that in normal Vim, go from visual to insert? Now I'm questioning that; I don't know that I've ever tried that.

**Carlisia Pinto:** You can. If you can, I don't know how. That's exactly what happens - I don't know how I get into _Visual Mode_, but I'm constantly getting to _Visual Mode_. Then I wanna go to insert, thinking "Well, I am in _Normal Mode_, because I didn't do anything to put myself in _Visual Mode_, but I'm in _Visual Mode_, and then I can't go into _Insert Mode_. I have to -- oh, crap! Sorry...

Another thing that I wanted to say is that it's good to know that Visual Studio did something special with the design to make it perform and not have the same performance issues that other editors might have... And not to have the intent to start an editor war - especially because I was a huge Atom fan - but it's just good to know that if I stick with this it's not going to get bloated down the road.

**Ramya Rao:** Yeah. Performance is really important for us. We are really looking into every phase of this startup and seeing where we can improve, what's taking so much time. Another reason I believe it looks better or it feels better is the way we have our whole extensibility model. Our extensions run in a separate process than the main Visual Studio Code editor. This way - say you've installed some extension which for some weird reason takes a long time to do certain things. That does not block you from your normal editing experience.

This was a decision made very early on, to have the extensions being hosted in a separate process and not impacting the main experience. So that might be another differentiating factor.

**Johnny Boursiquot:** That might be the single best decision you've made in the entire whole thing. Honestly... Like everybody's saying in the chat and on the podcast, every single one of us experiences some slowness from our editors at some point, and it seems like as you use them, the longer you have them open, the slower they tend to get and the more memory they consume. It's like you're using Chrome, or something; at some point you're gonna have to reboot. But I've had very little of that with VS Code and I think part of that is because of that architecture of having things running in separate processes.

**Ramya Rao:** Another thing to note on your Vim concerns... I have a contact for you, so you can tweet at him any questions you have on the Vim plugin. Peng would be happy to answer. He spent quite a considerable amount of time getting the Vim plugin to the state it is now, as compared to 7-8 months ago.

**Carlisia Pinto:** I'm gonna do that, because it drives me crazy, and I think it's sort of what's keeping me from investing time to soup up this editor... Because I haven't made my peace with this Vim plugin yet.

**Erik St. Martin:** See, that's always the struggle for me, too. There's been a lot of the Vim mode things and stuff, but it's really unfair of me to look at a new project and just be like "Oh, it has Vim mode" and kind of look at it the same way I've had failures in other Vim modes.

\[00:16:05.22\] So I really need to install VS Code and take it for a test drive for a week with Vim mode, because I think Vim mode in other applications has gotten a lot better over the years.

Does anybody actually use Vim mode for -- I know Firefox had one; I think Chrome has an extension for Vim mode, too. Does anybody use that stuff?

**Carlisia Pinto:** I used it for five minutes.

**Johnny Boursiquot:** Yeah, same here.

**Erik St. Martin:** Yeah, I love Vim, but there are some things that are just easier to drive with a mouse. \[laughter\]

**Johnny Boursiquot:** Yeah, basically that was my Hammer moment. I'm like, "Yeah, I love Vim... Why not just use Vim in my browser environment, and everywhere else?" And then I'm like, "Okay, I can't use this everywhere... It's not really practical."

**Carlisia Pinto:** To move on from the Vim talk, there is a PDF with a bunch of shortcuts for VS Code. I'm not sure if it's just Vim, or is it VS -- I think it's VS Code in general. Does anybody have that [link](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)? Because I lost it.

**Ramya Rao:** We have something called Keymaps. If you're coming from Atom or from Sublime, if you want to use the old keyboard shortcuts that you're used to and you wanna install them on VS Code...

**Carlisia Pinto:** Really?!

**Ramya Rao:** Yeah!

**Carlisia Pinto:** Where!? \[laughter\]

**Erik St. Martin:** You've just made a friend for life. \[laughter\]

**Carlisia Pinto:** Yes, yes!

**Ramya Rao:** So if you have VS Code open right now, just search for "keymap" in the extension pane, and you will get one for Sublime, Atom, from Visual Studio, Emacs, Eclipse...

**Carlisia Pinto:** Oh my god... That's what I need!

**Ramya Rao:** NetBeans... There are a couple of them.

**Carlisia Pinto:** Of course at this point I forgot the shortcuts... \[laughs\] No, I really needed that. Awesome!

**Ramya Rao:** Yeah, the intention here was that if anybody is moving from another editor, we wanted to make it as easy as possible for you to get on board.

**Carlisia Pinto:** So where do I go -- so I installed that for Atom, which is what I used to use before. My Atom was all souped up. So where do I go now to see what those mappings were? Because at this point I forgot.

**Ramya Rao:** Just click on Atom Keymap, and on the right side you should be able to see more information about it, and there are links right there.

**Carlisia Pinto:** Great! Awesome.

**Johnny Boursiquot:** Live tech support, ladies and gentlemen. \[laughter\]

**Ramya Rao:** Oh, my god... Is this gonna turn into a customer support call now?

**Carlisia Pinto:** Yes!

**Johnny Boursiquot:** \[unintelligible 00:18:45.26\] let me open my editor... \[laughter\]

**Carlisia Pinto:** That was so my intention all along... It's like a customer support tutorial...

**Erik St. Martin:** And then she had Brad Fitzpatrick on just to get him to merge her pull request... \[laughter\]

**Carlisia Pinto:** And it worked!

**Johnny Boursiquot:** \[laughs\] Oh, man... So Ramya, one thing I wanted to dive a little deeper on is that... I think Erik mentioned earlier that there was a _CodeLens_, a new capability that was added earlier this year in VS Code. What exactly does that provide you under the hood as sort of a plugin maker? How is that different from what was there or not there before? What is the function of _CodeLens_? How does that help you, especially when it comes to Go?

**Ramya Rao:** _CodeLens_ in itself has been in VS Code for quite some time. _CodeLens_ in the Go extension is what was new. When I say new, it's not that that technology wasn't available before, it's just that nobody thought of implementing it in the Go extension.

_CodeLens_ for you is something actionable, something contextual. For example, is appears right about a function or a method, and it is in context to that function or method. You can have it for like how we have now for references, runtests, so on and so forth.

\[00:20:13.21\] Other extensions can do their own thing. For example, there's one extension I know in your package.json -- if you're doing Node, in your package.json it adds a _CodeLens_ about each dependency, saying what's the latest dependency (the version).

You could use it for any reason it's just that in Go we got the time to do it now, and now you see it.

**Johnny Boursiquot:** Pretty cool.

**Erik St. Martin:** You talked about _CodeLens_ being there for a while... What's some new stuff that has come out in the plugin or that you're currently working on that you're really excited about?

**Ramya Rao:** Currently some of the things I'm excited about are things that help you write your code faster, like stubs... You have an interface, and you get all the methods of the interface implemented with stubs in it. Somebody from the community has submitted a PR on that, so I'm excited about that.

In the same lines that are more stub-related things, extract method - that is something which I had my eye on for quite a while. I tried using [Go Doctor](http://gorefactor.org/), but that didn't work out for many scenarios. I'm thinking `guru` has a feature called _Free Variables_, I believe, so if anybody is interested, try out _Free Variables_ to implement the extract method feature. So those are the two things...

**Erik St. Martin:** Do you get a lot of outside contributions to this project? Are you actively seeking for people to help with some tickets you have open?

**Ramya Rao:** I am definitely actively seeking for help. There have been more contributions than before. When I write the release notes, it makes me so happy when I see more names than mine. I try to keep that balance.

For the past couple of releases, yes, there have been more contributions, and I would love to have more than that also. I'm here to help, figure out debug issues with you... That's how we got the _References CodeLens_, by the way... Somebody thought it was a good idea and started working on it, and he hit a blocker and then worked together... Then in the next 2-3 days we had the _References CodeLens_.

**Johnny Boursiquot:** That's awesome. So looking at the issue on the project, you have about 27 with "Help Wanted" on them, five of them which have been tagged as Easy, so it sure be pretty straightforward for somebody to jump in and at least look at some things, maybe contribute back.

One of the things I wanted to touch on - what are you actually writing your code in for the editor? Is it like TypeScript? What are you actually developing in?

**Ramya Rao:** It's TypeScript, yeah. All VS Code extensions are written in either TypeScript or Javascript, and then if you are trying to give language support, there is something called Language Service... I don't know if you've heard of the [Language Service protocol](https://langserver.org/), but Microsoft and Red Hat, and you know, there was a hackathon of sorts a year ago and then we came up with the Language Server protocol.

The idea behind this is you implement a language server once, and then you're able to use that again for multiple editors... You know, the ones that support language servers. So that you can write in any language you want, but extensions are TypeScript and Javascript.

**Carlisia Pinto:** I want to ask also, Ramya, how do you 1) come up with features to add to VS Code? and 2) prioritize what should go in at any given point? That makes me think of [Fatih](https://twitter.com/fatih) and Vim Code... Vim Code - am I saying that right?

**Erik St. Martin:** \[00:24:17.17\] [Vim Go](https://github.com/fatih/vim-go)?

**Carlisia Pinto:** Vim Go, thank you; I knew it was wrong. And he's a developer, he's developing all day long, and he does Vim Code; I'm sure - I don't know this for a fact, but I would think that pretty much his thinking goes "Well, I need this (or I want this), so I'm gonna put it in." And I'm sure he's listening to other people as well, but it's very much him making Vim Go the best editor for him... Which very much coincides with the rest of the community who are using Vim. How does VS Code go about making those decisions?

**Ramya Rao:** So initially, after Luke was done with the basic features like formatting, linting your build and so on and so forth, after that, when I came into the picture, initially my plan was I look at issues - the ones that were easy to do - and I just got started with that. That was my first one month of handling the project... Trying to get all the easy ones out of the -- you know, hit it out of the park.

After that I started going through the backlog, which is like about 100 issues, and then seeing "Where do you see the most passion from the community? What kind of issues have the most upvotes?" and I started targeting that.

In your completion, without even importing a package -- say if you didn't import math, you can type `math.` and you will get completion for that.

**Carlisia Pinto:** That is amazing, by the way.

**Ramya Rao:** Oh, thank you... That was one feature request where a lot of people were like "You know, it would be cool to have this!" and I'm like "Why not?" So that's my current criteria of deciding that - which feature requests have the most number of upvotes or the most number of passionate people saying they'd like to see it.

**Carlisia Pinto:** So you're saying that it really makes a difference when people are active and they go and they voice out their opinions and what they want to have added?

**Ramya Rao:** Yes, definitely. But at the same time, it's not the only measure. I know that there's one feature request for which there are 35 upvotes, but I still haven't gotten to that because implementing that with the current set is just gonna have a slow experience... So until there's like a faster solution, I didn't wanna jump into it right away. So it's a mix of all these things.

Then the other direction... Sometimes from the core VS Code product we release some APIs, some new features. TypeScript and Javascript is appointed by default by VS Code, right? And we support new language features. Now, it's up to the extension owners to get up to speed and implement them in their own extensions. So this is sometimes from the other direction - I get ideas that "Oh, VS Code can now do this, so I should implement that in the Go extension." So that is another way where things can happen. That is the one where you can keep up with the product, or else you end up in a state where you see that "Oh, VS Code can do ABC, but I don't see the Go extension doing it." So unless you play catch up with the Code product, you won't get to see those cool features.

**Carlisia Pinto:** Makes sense.

**Erik St. Martin:** Oh, so you actually have continued development just to kind of stay up to speed with the core editor itself...?

**Ramya Rao:** Yeah.

**Erik St. Martin:** That's kind of like a constant backlog, right? You wanna work on new features, but you also have to -- it's almost like technical debt, right? You have to make sure you stay up, because the longer you avoid implementing the new features, the further away that that gets.

**Ramya Rao:** \[00:28:05.18\] Yes. I think there is one debugging related feature which came about like that. There's a launch.json file; if you need to debug your code, you need to have that file, and that's where you add your configuration. Initially you had to just handwrite it based on some document; now you have snippets that you can use in that file. You can have a snippet for debugging your test function, or a snippet to debug your package... So the scaffolding is there, and then you edit the snippet. That was one feature coming out from the core product. The hook was that all the Go extension needed to do was implement the snippets needed and hook it up, and then you start seeing it in the debug configs.

**Carlisia Pinto:** By the way, does anybody wanna share with me their snippets configuration? Because I have zero. And I want snippets for starting a new function, or writing `fmt.Println` or something...

**Ramya Rao:** Oh, so one thing that can help you there is, I think - let me just quickly try it before saying that it's possible... You can say "insert snippet" in the command palette, and that will open up all the snippets that the Go extension can do for you or can give you.

**Carlisia Pinto:** Oh... Insert snippet...

**Johnny Boursiquot:** I'm trying it right now.

**Carlisia Pinto:** Me too... \[laughs\]

**Erik St. Martin:** I feel like I should have had VS Code installed before this...

**Johnny Boursiquot:** You should have... \[laughter\] You might have gotten some free tech support.

**Erik St. Martin:** "Erik converted to VS Code live..."

**Ramya Rao:** So those are the snippets that come out of the box from the Go extension, and then you can create your own as well.

**Carlisia Pinto:** So how does that work? For example, there's a snippet that's called "If" and it's for an if statement. So I type "if" and I do what? Tab? That's not working...

**Ramya Rao:** No, you don't type that, you just choose it.

**Carlisia Pinto:** Oh, I see. It's too much clicking though, for me... I wanna type like a couple letters, and Tab.

**Ramya Rao:** Yeah, that's possible as well. In the editor if you know what the prefix is, for example type `for` and I think there are two snippets for `for` that come up in your suggestions list.

**Carlisia Pinto:** Sorry, what do I have to type?

**Ramya Rao:** For the for loop, just type `for`, and it will suggest the snippets for you.

**Carlisia Pinto:** Yes... Oh, the first `for` that comes up is not a snippet.

**Ramya Rao:** It's a keyword. The second and the forth are snippets. So you differentiate them by what is the icon in the suggestion item. Those box kind of things are snippets.

**Carlisia Pinto:** So I have to type the downward arrow to get to the other ones. Is there a quicker way?

**Johnny Boursiquot:** You can map it.

**Ramya Rao:** There's a setting to show the snippet suggestion up top, or bottom, or in line... So you can play with that.

**Carlisia Pinto:** Really?

**Ramya Rao:** Yes.

**Carlisia Pinto:** Okay. So Preferences, Settings?

**Ramya Rao:** Yeah. Or `Cmd,` that's a shortcut. This is really becoming a customer support call. \[laughter\] I'm not even looking at Slack... Are people asking questions in Slack?

**Erik St. Martin:** No, they were basically joking about stuff and Carlisia's clicky keyboard...

**Carlisia Pinto:** I'm so sorry, I forgot to change my keyboard... Oh, my gosh.

**Erik St. Martin:** \[00:32:10.14\] Yeah, I usually trade mine out, too. I've got a mechanical keyboard...

**Carlisia Pinto:** It's the end of the show and I realized this... Sorry, guys.

**Johnny Boursiquot:** It's alright, you get geek creds for that. \[laughter\]

**Erik St. Martin:** I think everybody's trying to guess which Cherry MX you're using, based on the sounds of the clicking. \[laughter\]

**Carlisia Pinto:** Okay, I don't know if I should say or if I should let people guess... It's the brown one.

**Erik St. Martin:** Brown?

**Carlisia Pinto:** Yeah, Thor got it.

**Johnny Boursiquot:** There you go, Thor4 got it on the channel. There you go. I do wanna switch gears from tech support briefly...

**Ramya Rao:** Yes, please. \[laughter\]

**Johnny Boursiquot:** So you sort of took over from Luke right around October of last year, and now you're sort of effectively playing the role of product manager, and coding from what you're hearing, and doing your own triaging and trying to keep up with the language changes, and trying to keep up with VS Code changes... So there's sort of a lot going on.

Obviously, you kind of got thrust into this role - what would you say have been some of the biggest lessons you've learned from this experience so far?

**Ramya Rao:** That's an awesome question. Initially, when I started -- you need to know this was my first open source project as well...

**Johnny Boursiquot:** Well done!

**Ramya Rao:** \[laughs\] Thank you... I was very excited; the whole process, talking to random strangers and discussing code and doing PRs - it was an awesome experience, and in that, I think in the initial few months I got so carried away that I was releasing an update every week. I was like, "Oh, shiny new thing! I can do this!" and then do three or four things, boom! Update!

I kept doing that, and then the lesson I learned was that doesn't scale. \[laughter\] And also because, like you said, I was the product manager, the developer, the person going around fetching requirements, the tester, the customer engagement person... All roles into one, and that was a rush as well.

Coming from the previous teams where "You're just a developer. The team comes up with a design or a requirement, and then you discuss what the technical aspects are and then you go implement it, and then that's done!" But here, everything rolled into one and that was another high as well.

For a couple of months I absolutely loved it. I was checking my notifications every half an hour to see "Is there anybody asking something? Should I answer that? Should I say this?" It was hard for me to pace myself and get into a rhythm, but that was one lesson, that is "Slow down."

Now I release almost once a month; that's a much better cadence. I still reply to notifications once a day instead of every half an hour. So yeah, that was my lesson.

**Erik St. Martin:** I think the difficulty too when you think about it - when you're developing a product for your employer, there's usually a chain, a hierarchy, and you're reporting to somebody, and you're only responsible for making that person happy. They work out the details between you and other teams and how that's impacted, but with an open source project, literally thousands of people are now your boss and they all have their own priorities and things that they want and need, and sometimes they conflict, and you're like "How do I make everybody happy?"

**Ramya Rao:** \[00:36:03.04\] Yeah, that has happened, as well. At the same time - I've told this to a few people already... There was this one time that I was discussing this PR with a person, and I was like "You know, this won't work in this scenario, but this might be better", and then they go "Oh yeah, that's right! You're amazing" and then I almost teared up. I have nine years of experience, but this is so much better than any appraisal...

But yeah, I never knew that a simple thank you from a total stranger feels so good.

**Erik St. Martin:** That's awesome. And that's actually part of the reason why we try to do our \#FreeSoftwareFriday every week, too. You usually reach out to open source projects when you need something. We can't advocate enough... Just file an issue telling people how much you love the work they're doing. Or maybe share an issue; that could probably get pretty bloated... Thousands of people filing an issue, like "We love you! Thank you!" \[laughter\]

**Johnny Boursiquot:** Or just give them some props on Twitter, like most people do.

**Erik St. Martin:** Yeah. So I think we are probably well over our first sponsor break, so let's go ahead and break for our sponsors, because they make this show happen. Our sponsor for today is [Toptal](https://www.toptal.com/).

**Break:** \[00:37:22.00\]

**Erik St. Martin:** And we are back, talking to [Ramya](https://twitter.com/ramyanexus) from the [VS Code plugin](https://github.com/Microsoft/vscode-go). I think we've talked quite a bit about the plugin and about the future, and stuff... Do you guys wanna jump into any projects and news? I think the past couple episodes we haven't even gotten a chance to get around to anything... I think the list was piling up; I might need to go through some of the old show docs.

**Johnny Boursiquot:** Sounds good.

**Erik St. Martin:** So I found a cool project -- well, technically I'm not responsible for finding it; my brother linked me to it, and showed me how cool it is. It's along the editor thing, and hopefully Ramya won't beat me up because of it... \[laughter\]

**Ramya Rao:** Hey, I already said, to each his own! Use whatever you like. \[laughter\]

**Johnny Boursiquot:** \[unintelligible 00:38:39.29\]

**Erik St. Martin:** I thought it was really cool because it's also tied to Go. It's called [Gonvim](https://github.com/dzhou121/gonvim), and it's a GUI frontend for nvim written in Go. That's pretty cool. I haven't tried it yet, so I can't tell you whether I love it or hate it, but I just saw it and it looks pretty cool... Although I kind of wanna drink the Koolaid on the VS Code, so I'm think I'm gonna end up playing with VS Code before this. Other people can try this and tell me how much they love it.

Another cool thing that I just saw yesterday, which also came from Microsoft (the Azure team) is called [Draft](https://github.com/Azure/draft), and it looks really cool. It's basically a way of determining the type of application you're running, and automatically generating Docker files and the Kubernetes specs for it so that you can kind of locally write code and then run a command and have it kind of deploy out to a sandbox in a [Kubernetes](https://kubernetes.io/) cluster.

**Ramya Rao:** Oh, Docker reminds me - we have a Docker extension.

**Erik St. Martin:** For VS Code?

**Ramya Rao:** Yeah.

**Erik St. Martin:** Oh, cool. I wonder what features are in that for completion and things like that.

**Ramya Rao:** You should go check it out!

**Erik St. Martin:** I should... Even more reason to try it, I don't think I have a Docker extension in Vim.

**Johnny Boursiquot:** There you go...

**Ramya Rao:** So it's still in the beginning phase, so file a feature request on what you'd like to see and so on. It's Open Source.

**Carlisia Pinto:** \[00:40:13.01\] I just installed. It was that quick.

**Johnny Boursiquot:** Wow... \[laughter\]

**Erik St. Martin:** I've always tried to live by the philosophy like "Pull request instead of issue." If I'm able to address it, I'd prefer to try to add the functionality or fix the broken stuff myself.

**Johnny Boursiquot:** Better yet, both issue WITH pull request.

**Erik St. Martin:** That's true too, because then people can follow along. So I don't know when [GopherCon Singapore](https://2017.gophercon.sg/) was now... It was a couple weeks ago, I can't remember the dates, but the [videos](https://www.youtube.com/watch?v=vvu0df82SJI&list=PLq2Nv-Sh8EbZEjZdPLaQt1qh_ohZFMDj8) for that are on YouTube.

**Johnny Boursiquot:** Nice! How many talks were there?

**Erik St. Martin:** That's a good question... There were 17.

**Johnny Boursiquot:** Wow, that's a lot of videos to watch.

**Erik St. Martin:** Yeah. And admittedly, there are videos from other conferences that have taken place this year that I'm still really far behind on, and I don't quite know how to catch up. There's no more time in a day... Where do I squeeze these in? And now there's so many conferences and so much content being generated, it's like even if you watched one video per day you would never catch up.

**Johnny Boursiquot:** It's a good problem to have.

**Erik St. Martin:** It is. It definitely is.

**Carlisia Pinto:** So talking about conferences, we should also mention that... [GopherCon](https://www.gophercon.com/) is next month! I'm so excited!

**Erik St. Martin:** Oh yeah, because it's technically June right now, so yeah... One month away.

**Carlisia Pinto:** We should mention that the CFP for lightning talks is open.

**Erik St. Martin:** Yes, yes...

**Johnny Boursiquot:** What? Where is that?

**Erik St. Martin:** It is open... I'll pull up a link and we can drop it in the channel, and we'll drop it on Twitter too, just so people who won't listen to this for a week have an opportunity to see it. Are you gonna be at GopherCon, Ramya?

**Ramya Rao:** Yeah. Initially, I wasn't sure, but then Jana from Google reached out and she was like "You should be there!" and then I'm like, "Okay..." And I'm gonna be there.

**Erik St. Martin:** You should be there. We should get you your own booth, just for people to meet and greet and thank you.

**Ramya Rao:** Yeah, as long as it doesn't convert into a customer support booth... \[laughter\]

**Johnny Boursiquot:** That's exactly what I was thinking...

**Carlisia Pinto:** I cannot go to the booth... I'd be all customer supporty... \[laughter\]

**Erik St. Martin:** You put a sign there that says "Only love, no questions."

**Ramya Rao:** No, you can ask me any questions if you find me. And if you have your laptop or Mac with you, we can look at stuff.

**Carlisia Pinto:** Are you signed up for the Women Who Go dinner?

**Ramya Rao:** Oh, there's a Women Who Go dinner?

**Carlisia Pinto:** Oh, yeah...

**Ramya Rao:** I'm not up to date with it...

**Carlisia Pinto:** It's alright, I'll send you the link.

**Ramya Rao:** I should \[unintelligible 00:43:04.15\]

**Erik St. Martin:** Have you been to one prior, or will this one be your first?

**Ramya Rao:** No, this is my first GopherCon. But conferences-wise, I've been to Grace Hoppers, and then a couple of conferences here at Microsoft. So yeah, I'm looking forward to it.

**Erik St. Martin:** I'm excited; there's so many things that we're hiding behind the scenes... It's gonna be super cool. We're having a lot of fun with it. I might leak a couple of things too, or at least one of them, that I'm working on.

**Johnny Boursiquot:** You're teasing.

**Erik St. Martin:** I am teasing. That's kind of the fun... One of my favorite things about doing the conference and stuff like that is when you get to tease some of this stuff... Like when I drop pictures of the room keys, and things like that... It's so much fun to see how excited people are, like "Oh my god, I need one of those!"

**Johnny Boursiquot:** \[unintelligible 00:44:02.12\] half a dozen room keys from our last GopherCon.

**Erik St. Martin:** \[00:44:07.26\] I don't even know what we did with -- we had a box of a couple hundred of them I think left over from printing... I don't even know what we did with them. And there's been some swag we've donated to local shelters and stuff like that, like mugs and things like that... So I can imagine all these people who don't do technology walking around with GopherCon swag... \[laughter\]

It's funny though, like even wearing the swag, the amount of looks you get where people don't really understand why a grown man is wearing a cartooned gopher on his shirt...

**Johnny Boursiquot:** It's priceless. It's great. You get a weird look all the time with that.

**Erik St. Martin:** Yeah, I never even really give it any thought... I just wear the stuff, and occasionally people will ask me about it. So what else do we have?

**Johnny Boursiquot:** Yeah, I think we still have a few things on the list here. I see here a [High-Performance Go talk](https://www.youtube.com/watch?v=AOpprhr6C9I), with Assembly, from FOSDEM...

**Erik St. Martin:** Yeah, somebody from the Minio team spoke at FOSDEM this year, and they were doing some \[unintelligible 00:45:09.24\] stuff and everything using not normal assembly, but Go's assembly language to implement part of it. I watched the video, I was multitasking at the time, so I vaguely remember some of the details. I remember there were parts of it where they had gained something like 100 times performance by basically implementing the function itself in kind of assembly. Super cool, we'll link to that in the show doc if you're interested in that type of stuff.

**Johnny Boursiquot:** Yeah, I was gonna mention that Just For Func, the show that [Francesc Campoy](https://twitter.com/francesc) puts out (I think) weekly or bi-weekly - I'm not sure how often he's doing them now, but they're always fun to watch. The last one was about -- he wrote a text-to-speech server with gRPC and Kubernetes. It was [fun to watch](https://www.youtube.com/watch?v=XaMr--wAuSI&list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ&index=1), because I hadn't used gRPC before. I knew about it, but didn't quite know where it would apply to the things I do. It was interesting, he gave sort of a brief overview of the technology as he was live-coding the whole experience, and went on to deploy it to Kubernetes. It was kind of cool, end-to-end to see that project come together. It was very fun to watch. I definitely encourage folks to go and check it out.

**Erik St. Martin:** I have not seen that new one, but I love watching those things. He's such a trip!

**Johnny Boursiquot:** Yeah, he has fun with those.

**Erik St. Martin:** Do you watch the Just For Func series, Ramya?

**Ramya Rao:** I watched one... Does that count?

**Erik St. Martin:** \[laughs\] It counts, it counts... That's watching them. I'm pretty sure Carlisia watches them.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** That's probably one of the series that I try to make a point to watch. The conference stuff I almost have to pick and choose now, just because there's too much content.

I think somebody in here put something about DevOps day?

**Carlisia Pinto:** Yeah, it was me. I wanted to mention this a couple shows ago, and we ended up not going over the section, and last week I wasn't here... I really wanted to make sure to mention this talk that Kelsey Hightower gave at DevOps Days Austin a few weeks ago. Really, a huge shoutout to him for so many things, but especially for giving this talk. He goes into his background, his story, his coming of age story, how he got into tech and how he stayed in tech, and some of the experiences he had.

\[00:48:05.05\] I think it's a really worthwhile [talk](https://youtu.be/36S7N7OZSTI) to watch, especially for people who are fans of his, because you get to know him a little better. Nevertheless, I always think that software development is a lot about people, and you get a bit of insights on how someone can be so vulnerable and open up with stories that people usually don't talk about. And it's not sometimes because people don't want to talk about, it's just hard to fit in telling a story like that on a day-to-day basis or in a conference talk, so people don't usually get to hear those stories. I think there are a lot of people like that - not just minorities, but everybody has struggles; some people more than others, and some people perceive those struggles more than others and have a harder time, of course. Nevertheless, everybody's got struggles, and if you don't, it's good also to learn how people have challenges.

One thing that he said that resonated with me a lot was -- I mean, the whole talk resonated with me, and frankly I was in tears. It got really emotional, and good thing that I didn't mention this talk the day that I watched it, because I was going to really get emotional. But at any rate, he was describing an encounter he had with somebody... This white male was really surprised to see a black male coming to his house and do amazing work with technology. Basically, he probably never saw a black guy doing any type of professional work, just because where he lived, probably his contacts, no fault of his own particularly... That's how he was. And he was extremely surprised to see him perform at that level, and it showed.

Kelsey said something like, "You know, you've gotta give people a chance", and I'm quoting him: "People can change, and if you do it right, you get to watch it happen...", which obviously is a very positive take on these challenging encounters that we can have with people... People who look at us and say, "Well, I never expected you to be doing this...", or even doubt that we can do it or that we are doing it right at all.

One takeaway from that that I felt, given my own experience, was the beauty of watching ourselves change, going from where you don't know anything - you want to work in a field and you don't know anything; then you go through the process of learning, and that is hard... Then you get to start performing, then you get better, then you're teaching, you're mentoring... In that process, you become another person on the other side. Sometimes I look at myself and I go "Wow..." \[laughs\] So the process of also watching myself change is amazing... It's amazing that I get to watch that happen, and I don't take that for granted either. But anyways, I think it's a good talk to watch.

**Erik St. Martin:** \[00:51:46.15\] Yeah, I think it was a really emotional talk, and to hear that back-story... Those types of things are really awesome because they humanize these people. You start to realize that the whole "perception is reality", and we see people and we see what they're doing and we kind of paint this picture of who that person is and how they got there, and the whole myth of overnight success or what not -- you get to kind of see that struggle that people have endured, and you start to realize that we all live lives of struggle and everybody overcomes things in different ways.

Kelsey, he's had some kind of like threads on Twitter too, with kind of being more vulnerable and open about his history. It's just really awesome to see somebody you know that holds that position in the community kind of open up about his past. It humanizes people.

Same thing here - we have Ramya on this show about VS Code... This was your introduction into open source and introduction into Go, and all of these things... The picture you paint is often much different from the reality.

**Ramya Rao:** It's been a fun journey.

**Erik St. Martin:** Yeah. I would have guessed you had been writing Go and were like "Oh, I love VS Code, so I'm going to write a plugin", you know? \[laughter\] That's typically the way these things work. I'm really happy that it was handed off to you though, because it looks amazing, and even though I don't use it - yet; you may convert me... \[laughter\] I think when we had Edward Muller on this show, I believe it was the top two - Vim and VS Code were the top two editors people writing Go use... That's amazing.

**Ramya Rao:** That is a good thing to hear, because that also motivates me. That's the kind of feedback that helps you as a project maintainer/contributor to keep doing what you're doing... So that was good to know.

**Erik St. Martin:** Yeah, it makes you feel like the work you're doing is worthwhile, that you're helping a lot of people.

**Ramya Rao:** Yeah.

**Erik St. Martin:** That's awesome. Did anybody else have any other interesting projects, news, announcements, anything we wanna talk about before we move into \#FreeSoftwareFriday? I will take that as a no...

I don't know that you listen to this show, Ramya, but we talked about it a little bit earlier... Usually just before we close out the show we do something called \#FreeSoftwareFriday, where we just thank a person, a company, a project that makes our lives easier in the open source world, just to kind of give them the love and recognition. It does not have to be Go; often times it actually isn't, recently... But yeah, that's just something we do. If you have somebody, something that you would like to thank, you're welcome to join us; if not, that's fine, too.

Carlisia, do you wanna kick it off?

**Carlisia Pinto:** Yes, sure. So today I guess is the shoutout day to people, as opposed to software mostly... I wanna give a shoutout to [JBD](https://twitter.com/rakyll) (Jaana B. Dogan). She works for Google and she does a lot of Go work. She works mostly on -- I don't wanna say the wrong thing, but she does a lot of performance work and investigation about how Go can be improved as a language. To my understanding, she also is leading the Devex group, which is the Developer Working Group, which aims to make the onboarding experience better for developers, among other things.

\[00:55:54.26\] She has many open source projects that are amazing, and she has also a very good blog post related to Go. Her blog posts are a very worthwhile read. In other words, she's an amazing person, a really hardworker; I don't think she gets enough recognition and I wanna make sure we recognize her today.

**Erik St. Martin:** We all love JBD. She puts out some really great blog posts and stuff, too. I've learned a lot from her over the years.

**Carlisia Pinto:** And she also was on the show on [episode 22](https://changelog.com/gotime/22).

**Erik St. Martin:** Did you know that by heart or did you look it up?

**Carlisia Pinto:** I had to look it up; I wrote it down. \[laughter\]

**Erik St. Martin:** Because I think there was an episode where you called out an episode number somebody was on without looking it up, and I was shocked.

**Carlisia Pinto:** I'm sure I was shocked, too... \[laughs\]

**Erik St. Martin:** Once it's like two episodes ago maybe, I forget... I know it was just a few episodes ago... \[laughter\] How about you, Johnny?

**Johnny Boursiquot:** For myself, I've been using this debugging aid called q. I think it was ported from a project that originated from the Python community. y0ssar1an on GitHub - we can post the [link](https://github.com/y0ssar1an/q) - I think he ported that over. q is basically a better `fmt.Printf`, basically. I don't use a debugger; if you're familiar with [Delve](https://github.com/derekparker/delve) or anything like that... I'm not a big fan of debuggers; I'm more of the old-school print it out, log it out and then "I'll see when I'm in the program" kind of thing. For me, using q has sort of been a better experience for that.

The way it works is you'd have basically a terminal console open, and you just run `qq`, and what that does is it just opens a string that starts to output in a really nicely formatted way anything that you're pushing out from your code.

Back in your actual Go code obviously you import the q library, and then where you typically would do a `log.Printf` or `fmt.Printf`, you use `q` and then `q.q`, and then whatever it is you wanna dump out, and then basically that just appears on a string. It's nicely formatted, and it will sort of give you hints or metadata around where it is that you output the statement.

It's been really nice... I pretty much do all my debugging just by having that running and then just calling qq. I sprinkle that throughout my Go code. It's been a very nice aid for debugging, so shoutout to the developer who ported it over. I use it pretty much every day. Thank you.

**Erik St. Martin:** And how about you, Ramya... Did you have anybody?

**Ramya Rao:** Oh, I have lots. First, a shoutout to Luke Hoban for creating the Go extension to begin with back in November 2015. That resulted in me getting this awesome project to contribute to. So that's one...

Two is all the amazing people who've written these tools like gocode, `godef`, `godoc`, `gogetdoc`... All these tools that internally we use in the extension. Thank you for making these tools.

And my third and last one would be a big shoutout to everyone who's been creating PRs, logging issues, making sure that we are on top of all the good features in the Go extension. I love you all, thank you very much. And keep doing it! \[laughter\]

**Erik St. Martin:** \[00:59:56.27\] Mine today - I'm actually going to give a shoutout to a company, and that is actually Microsoft, because I think the past couple of years we've seen a whole new Microsoft. Your contributions to the Go plugin, VS Code itself, contributions to Docker and Kubernetes, they just acquired Deis, that Draft thing that just came out... I think we're really starting to see a lot of contribution and outreach and community involvement from the Microsoft team, and I think that that's really awesome and I'm really appreciative of the fact that they pay people money to work on these things that we get to use.

**Johnny Boursiquot:** Agreed.

**Erik St. Martin:** Did anybody have anymore they wanna throw in before we close out the show?

**Johnny Boursiquot:** A really big shoutout to Ramya for the work on the actual plugin. I think she deserves a shoutout, right?

**Erik St. Martin:** Without a doubt.

**Ramya Rao:** Thank you.

**Johnny Boursiquot:** Thank you, Ramya, for the work that you do, and we hope you keep doing it.

**Ramya Rao:** I sure will.

**Erik St. Martin:** And thank you so much for coming on the show; this has been a lot of fun, and we definitely wanna stay in touch and keep up with all the changes and additions to the VSCode plugin, and VSCode itself, because you're more aware of that stuff than we are.

**Ramya Rao:** It was great to be here. You can reach out to me, I'm on Twitter now... I haven't mentioned it much on the other podcasts that I was, but I learned my lesson. I'm on Twitter now, and you can give out my handle. You guys can ask me any questions related to the Go extension or VS Code in general; I'll try to answer. If I don't know, I'll definitely know the person who knows. I can forward your questions and queries, so feel free to reach out.

**Johnny Boursiquot:** Awesome!

**Erik St. Martin:** Thanks again for being on the show, and thanks to everybody who is on the panel today... Especially thank you Johnny for stepping in for Brian today. I always love having you on the show.

Thanks to all the listeners who were listening live, and everybody who will listen to this once it's produced. Big shoutout to our sponsor Toptal; again, show them some love, because they make this thing happen for us.

Definitely share the show with fellow Go programmers. If you wanna subscribe, you can go to GoTime.fm. We have a weekly e-mail that we're gonna be starting pretty soon, so go ahead and subscribe to that. You can follow us on [Twitter](https://twitter.com/GoTimeFM). If I don't run out of breath -- if you have something you wanna talk about on this show or suggestions for a guest, please file an issue on [ping](https://github.com/GoTimeFM/ping).

I think that's it... Goodbye, everybody, we'll see you next week.

**Johnny Boursiquot:** Bye!

**Carlisia Pinto:** Bye, this was fun!

**Ramya Rao:** Bye!
