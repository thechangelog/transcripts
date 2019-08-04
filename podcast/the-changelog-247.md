**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 247, and today Jerod and I talked to Jason Laster about Firefox Debugger and DevTools. We talked about the back-story of Firefox, Firebug, the new Debugger.html, why React and Redux make a good fit for developing Debugger as a standalone application, community efforts and also how to get started.

We have three sponsors: Linode, Toptal and GoCD.

**Break:** \[00:01:07.19\]

**Adam Stacoviak:** Alright, we're back with a fun show today, Jerod... This time talking about something from Firefox, debugging DevTools, this fun thing; Jason Laster's coming on, kind of peeling back the layer of the history of some things for us, and hopefully sharing with us where they're going.

**Jerod Santo:** Yeah. Well, we're all excited because if there's one thing that developers love, it's tooling, and it's DevTools specifically, because they're approachable, you can dive deep into them, and of course, they help us do our jobs better. I'm very excited to talk about this.

Jason, thanks for joining us, and real quick, a shout out to Brian Clark, who teed up this conversation. He in fact said "Have Jason on", and "Have James Long on" as well...

**Adam Stacoviak:** Which we did.

**Jerod Santo:** He opened this issue on ping back when he worked at Mozilla, and Brian is a technical product manager for the Firefox DevTools over there, so thanks Brian, and Jason, thanks so much for joining us.

**Jason Laster:** Yeah, I'm thrilled to do it.

**Jerod Santo:** We'd like to start off with a little bit of history, because I feel like Firefox has a rich history in DevTools, specifically Firebug, which we all know it's a third-party add-on release by Joe Hewitt, back in 2006... It really kind of kicked off tooling inside of the browser; before that it was just -- you'd throw in an alert in there and you'd see \[object Object\] pop up, and you'd just wanna pull your hair out... A rich history, and a lot has changed over the years, but before we get into that, Jason, tell us about -- you work for Mozilla... Give us a little bit of just the background of you at Mozilla.

**Jason Laster:** Sure. I've been at Mozilla for one year now, and prior to that, I guess it all began for me when I graduated college. I did this retreat called Recurse Center, which is just this magical place where you can go for three months and contribute to open source, explore a new language, anything like that.

**Jerod Santo:** That used to go by a different name?

**Jason Laster:** It used to be Hacker School...

**Jerod Santo:** Yeah, I remember that! What did they rename it? Recurse?

**Jason Laster:** Recurse... I think it has this resonance with a developer, like "We're recursing into something", and frankly Hack School just didn't really work well if you were crossing the border and you wanted to tell the border agent like "Yeah, I'm going to Hacker School." \[laughter\] It doesn't work.

**Jerod Santo:** \[00:04:05.16\] A very practical problem with that name.

**Jason Laster:** Yeah, at least that's my understanding of it.

**Jerod Santo:** Okay, so we have definitely heard of that, and people rave about it.

**Jason Laster:** Oh yeah, you meet the most amazing people. They have fellows come in, like Marin, who works on CodeMirror and ProsMirror, and Jose Valim who's worked on Elixir... I got there, and I had just graduated college and done a little bit of programming. I knew I hated that feeling when you're working on something and it just doesn't work and you're not quite sure why... I thought I could spend a little bit of time just getting involved in open source so that would never happen again. That's how I stumbled upon working on REPLs for Ruby and Python, and realizing that you can actually do this stuff, it's possible. I was kind of hooked.

I had wanted to get involved ever since, and then when I started working in the web, it seriously made sense to go to DevTools in the browser, as opposed to maybe like a REPL for Ruby, or something. Two years ago I started working on a Chrome DevTools extension, and I realized then that while you can do a lot in a tab, like the React DevTools and what not, what was really cool was if you could do something in the tools themselves - in the inspector, in the debugger... And the day I figured out that that was open source was just -- the rest was history. It was really neat.

**Jerod Santo:** So since you're somewhat new at Mozilla, with Firefox, we'd like to cover a little bit of the back-story of where the DevTools have been - and where they're going, of course, will be a large meat of this conversation, specifically the Debugger, which is very interesting. But just real quick - do you work on all the DevTools, or are you specifically on the Debugger? Or do you cross tooling?

**Jason Laster:** Yeah, most people on the team will cross tooling, work on the console, the inspector... I joined primarily to work on the Debugger, and since then I have been working on this rewrite. I'm one of the expectations in that, while the other tools are interesting for me, I really wanna stay on the Debugger, and I'd like to see it change quite a bit, because I think there's a lot we can do. So I see myself staying on the Debugger for some time, at least until we make some progress.

**Jerod Santo:** Until you're done with it...

**Jason Laster:** Yeah, yeah. \[laughter\]

**Jerod Santo:** Because you're never done with software, right?

**Adam Stacoviak:** That's right. That was sort of a trick question, wasn't it?

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Or a trick statement, I should say.

**Jerod Santo:** Right. So let's paint a little bit of the back-story... Even though you just got there, Adam and I know a little bit, we've been around -- Firefox, as I stated before, really broke in (for me at least, and I hope this resonates; I think it does) with Firebug back in '06, and as it got popular... Even though they're add-ons, the ability to make add-ons to Firefox really allowed developers to open up the browser...

**Adam Stacoviak:** To tinker...

**Jerod Santo:** Yeah, and to go inside and to actually move beyond the alert debugging that we were tied to.

**Jason Laster:** Sure. Yeah, that was my experience, as well. I distinctly remember installing Firebug, and then everything seemed like it was possible. The first inspector, everything was there.

**Jerod Santo:** \[00:07:48.20\] So back at that time, Firefox had a huge mindshare with developers, and Firebug was it, it's what you used; it was best-in-breed tooling. Then - I'm not sure exactly when it was; I searched for this real quick and couldn't find it - Chrome comes out, Webkit begins to have -- Chrome and Safari have Webkit, you have the Webkit Inspector, the DevTools coming there, and really the perception of Firefox is that - maybe perhaps because it was third-party, or... The first-party tooling really wasn't really there, and Chrome DevTools really took off and became, at least today I would say in my mind, the Juggernaut in the DevTools space... And I was curious about your take on that and maybe even insights on why that happened from your perspective.

**Jason Laster:** Sure. Firebug was really good. To this day, it has features that we don't have in Firefox DevTools, and frankly, Chrome doesn't have either. So I think there was this mentality at Mozilla that the community is really powerful, and can do a lot. So Firebug had employed some people... My manager now, he was one of the first people to work on Firebug, which is unbelievable.

**Adam Stacoviak:** Wow.

**Jason Laster:** I tell him ideas I have in the future, he's like "Yeah, we did that", and it's really hard to thump 'em.

**Jerod Santo:** That's gotta be awesome, to have someone with his experience around.

**Jason Laster:** Yeah, I had to confess a couple months into working with them that he was kind of my hero, and that was a nice moment. We were both drinking, and... You have a lot of people around when you're at Mozilla who have done things that just blow your mind. The history of computer science kind of like blows through some of these people. We can get into that later on, but sourcemaps, and even Emacs and Version Control and what not.

But Firebug was really successful. They had a great contributor team, lots of contributions, and I think that fit the mentality at the time that this problem was mostly being handled, probably up until Chrome DevTools got started, and started really refining it. Maybe two, three years ago, a larger team got formed - that's my understanding - around DevTools in the browser as a thing that employers would work on and built out.

The other piece of this was Firefox OS. Because Mozilla was working on both a desktop app and a mobile operating system that was built on the web platform, there was this split focus. So there was this amazing tooling built out called the WebIDE that allows you to work on a mobile app, OS even, through this tooling, in Firefox. But I would wager a bet that because of this split focus, it was harder to keep up. And with Firefox OS becoming less of a focus, and then not becoming a focus, at the beginning of last year we've been able to make a lot of progress just improving the quality of the UI and the experience within Firefox DevTools.

**Jerod Santo:** So the refocus makes a lot of sense... I guess - and maybe this question is "above your pay grade", but the decision to refocus (maybe you don't have insights on this, but maybe you do)... Was there like a "holy crap" moment, like "Everybody is using Chrome now"? "Where did our core audience go?" because developers and techies and nerds - us folk - were Firefox's bread and butter, its champions for years and years, and there had to be a moment where it's like "Everyone's using Chrome DevTools now. What are we gonna do?" Do you think that happened?

**Jason Laster:** \[00:12:16.27\] Sure. \[laughter\] I think you have that recognition internally. I think both put really exciting tech, great features, and it doesn't resonate. On the flipside, you look at the larger product and you realize, "You know, we really wanna think through some of these experiences." So I'm not sure if it was 18 months ago or two years ago, but Bryan Clark joined the team (he'd been at Mozilla for some time) and we really got a product mentality - full-time design... And just internally there was a recognition that we could do better.

I think that's true for DevTools at large. Products like Atom and Nuclide and VS Code, and Chrome DevTools has a full-time designer, but that wasn't really a thing three years ago... So about the same time three years ago we're like "Hey, these tools built for developers aren't any different than tools built for other humans. Let's apply some of the same practices and really focus on the experience - help beginners, but also help advanced programmers do what they're trying to do."

**Jerod Santo:** Yeah. That's been a welcome change recently that I have noticed... Like you said, treating these things as if they're designed for humans, and not like "It's okay, they're developers. They'll put up with whatever." "Let's focus on design and tooling, even down to compilers and to error messages and these kinds of things that we're seeing out of like the Elm community, and now it's starting to move its way through."

The compiler and these things can be human usable, and that makes people like them. It kind of seems like "Duh!", but at the same it speaks a little bit to the maturation of our industry I guess, but it's definitely welcome.

**Jason Laster:** Yeah, I'm one of those people who believes that things could be radically different in 2-5 years. I tell my parents that I'm working on Photoshop for the web. I don't mean DreamWeaver, but I just mean that there's gonna be this degree of fluidity when you're working in a language that has typechecking and Elm with error messages, and the way in which you can design a page will feel more fluid, and hopefully the same thing as you're developing a new widget or component for your app. That's where I see us going, but with that mentality we still have a long way to go to really nail it.

**Jerod Santo:** So while we're still camping out on the history, I have to bring up 3D View, because at a certain point I switched to Chrome in the Webkit side, and I use Chrome DevTools even to this day... And there was one reason why I always fired up Firefox, and that's because 3D View was a fun gimmick. It was like not even useful, kind of useful -- maybe that's why it's gone now... But it's gone! And for those who don't recall, 3D View was this cool part of -- I think it was a first-party, part of you guys' tooling, where you could basically tilt the web page on the side and see the DOM built out based on nested tree structure. You could see it in 3D. So it was helpful, kind of... Sometimes you'd see something's too far nested, or it's not actually inside the Elm that you thought it was gonna be, but it was really a cool tech demo. I was recalling that as Adam and I were prepping for this and I thought "What happened to 3D View? It's no longer there."

**Jason Laster:** \[00:15:55.28\] Yeah. So I recently saw a screenshot from -- I think it was Firefox 17... I'm not sure when that was released, but it was one of the earliest versions of a DevTools that we built - it wasn't Firebug - and you're looking at the Inspector and you see the markup view, which is that DOM tree. And then on the right in content is the role view. We didn't have a debugger, I'm not even sure if it had a console, but it did have 3D View in the bottom. So I just have to believe that it was one of the first things that was built, and it was like "Hey, this is pretty rad. Let's get a topography view of your page, and I think it's a great example of something that's cool, but it didn't help people in the same way that probably a more focused tool would.

For instance, I was talking to one of the people who works on the Inspector the other day about just Z indices. If we have three elements that are all the same dimensions on top of each other, can you see the two below the top one? You can't really see that. And even if they overlap a bit, can you find a way, with our tooling, to inspect or put a magnifying glass on that second layer? It's kind of difficult with something like Tilt View, which... I don't know. That's probably not the solution, but...

**Adam Stacoviak:** Well, people are still exploiting the box model, too. I don't think it exactly clearly identifies the box model, because it's not particularly trying to show the padding and all that stuff, but you can see the layering, so you can see the hierarchy and you can see what's above one another... That to me seems very useful, but maybe as Jerod said, it's just a gimmick, but not really.

**Jerod Santo:** Well, like Jason said, it's kind of useful, but not useful enough to be something you grab at all the time. But I actually like that idea of the Z index view, because let's face it... When people wanna crank the Z index on something, they'll put like 10,000 on it, so that raises that element -- I don't know why; I do it too, I guess... You can just crank it up really high. Right, it's like "This thing has to be on top!" And then if you want something that's actually gonna be a Z index higher than that, now you've gotta go find where they put it... It would be cool to have something like that. And just a pro tip for people out there, like 1-2-3 works, you know?

**Jason Laster:** Yeah, and there's like in Tilt View some element way off in like the clouds, and you're like "That doesn't really..."

**Jerod Santo:** Yeah, exactly! "Does it need to be that high?" You know 1 is higher than 0, it still works, but...

**Jason Laster:** Going back to Tilt, I was told in the early days that the toolbox, which is everything in its own window, was always v1, and v2 was supposed to be like Photoshop again, where you have those panels that are all over content and you can move them around and play with them, and lots of highlighters everywhere. Obviously, that came to be probably for the reason that it's very hard to implement and not really clear why you do that, but I think from the beginning there was this idea of like "Maybe we can directly visualize or edit/manipulate the DOM, the page you're looking at."

**Jerod Santo:** Yeah, I really think that your description of the split focus with Firefox OS -- because here you have an example, you said it was v1, there was supposed to be a v2... You have good ideas but they're not fully fleshed out, they're not explored. So perhaps because of that split focus, perhaps because the thought that community will carry certain aspects... So I'm excited to see that Mozilla with Firefox DevTools has double backed down their efforts and hired people... You work on the Debugger, and that's your gig - that's awesome.

So we wanna talk about the present - where it's at, the new Debugger, it's React and Redux, modern tooling, can it run anywhere? So I have a lot of questions around that, and we will talk about those after this first break.

**Break:** \[00:20:12.00\]

**Jerod Santo:** Alright, we are back, speaking with Jason Laster about the Firefox Debugger and the DevTools in general. We got a little bit of the history in the last segment, and we see this renewed focus over the last couple of years from Mozilla on making Firefox DevTools great, and really a first-class, first-party effort in the Firefox ecosystem. One of the ways that that's happening is that, of course, you have an open source project that makes tons of sense - that's Mozilla Styles, open source - but this is not a project inside of the Firefox repo; this is it's own thing - Debugger.html (we'll have a link in the show notes to the GitHub). It lives on its own repo, and it has its own little ecosystem around it, so tell us about that.

**Jason Laster:** About a month or two in, Bryan realized that we could attract more contributors by virtue of being in GitHub in our own repo. Initially, it was always about an experiment - can we move quickly and try this new React/Redux architecture? But two months in, he came to us and said, "You know, in the early days of Firefox it was expected that every engineer would have about six contributors; that was how you got the leverage." And that had gone down over time, but by using these modern tools, React and Redux, which people understood at being in GitHub, which means a contributor could get started by doing Git clone, NPM install, NPM start... We could really talk to more contributors again. And that's what we've pulled off, and that's what's been so exciting in the past year.

We've had over a hundred people help out and get involved, which is just way, way more people than we were seeing in the mono repo previously.

**Adam Stacoviak:** You have your own org, DevTools.html - you've got lots of cool stuff there... Perf.html - I'm assuming that's performance, and that's spot on... Debugger.html, of course, you've got DevTools Core and a bunch of stuff here, even Debugger Docker. You said you primarily camp out in Debugger though, right?

**Jason Laster:** I do.

**Adam Stacoviak:** And you also mentioned the old way - maybe just give us a two-minute old way of how it was working, mostly for those maintainers out there thinking "I should mono repo this thing, that's the way to contributors", but in actuality maybe it's a more distributed model, a more broken down model where you're sort of better defining... Can you help us understand what was wrong with the old way?

**Jason Laster:** So there was a lot of right about it, too. The mono repo would allow you to clone Firefox, and then in one patch you could change the Javascript engine, Javascript Debugger server, and then the client, which was incredibly powerful.

\[00:24:05.17\] Now, the downside - and this is a lot like Chromium today, which is one tree as well - is that when you do that clone, you're pulling down like five gigs, a lot of it history, and then when you do the build, you're taking another 30 minutes maybe. And then to see your change, you actually have to do a Firefox mock run to open your own version of Firefox.

The process was incredibly powerful, and allowed big things to change all at once, but it didn't appeal to maybe a contributor who just wanted to get started really quickly, and try something before dinner. If all you're doing is working on that really cool UI feature for the Debugger, you don't need to change the DOM directory, or you don't need to go into the Javascript directory and fiddle with some C++. That just isn't helpful.

In fact, that's really scary, right? In most projects, the JS directory is where your Javascript code lives. In our project, the JS directory is the C++ that compiles. It's insane.

**Jerod Santo:** Right... Well, a web browser is a huge project, huge beast, so it makes sense that you wouldn't wanna get the mono repo for new contributors. So to be clear, Firefox DevTools has seven top-level tabs - Adam mentioned performance, you've got the Debugger tab - so it might make sense to say "Well, let's have a DevTools repo, that's just the DevTools, that houses all of those." Was there a conversation around -- you know, when you break out of the mono repo, how small do you do?

**Jason Laster:** Yeah.

**Jerod Santo:** Because you're just representing a single tab.

**Jason Laster:** Yeah. Initially it was just "Let's see if we can do this experiment, and then of course we'll go back to the mono repo. That's where everything lives."

At this point -- maybe let's say we started in March of last year. Around December we, as a team, realized "You know, we can go much faster if we're in GitHub. There's no going back. But how do we bring the other tools to GitHub?" It's a challenge, because some of them aren't necessarily ready for contributors; they really haven't been refactored to React, they don't have the documentation ready to get started, and we really built out that infrastructure for the Debugger to run in a tab that we would have to apply to the other tools. We've started doing that.

The net monitor obviously runs in a tab, perf.html runs in a tab... But other things like the Inspector still are work in progress, the console is still a work in progress.

**Adam Stacoviak:** So they're essentially isolated apps then...?

**Jason Laster:** Within Firefox, you might treat them as one application, but when you split something out, you can really say "This is one app, with maybe some shared libraries." And the shared libraries - everything has become a little bit difficult, but so far it's been possible.

**Adam Stacoviak:** This is a big risk then, to break it down to that level... You're going from what you knew before, to get back to, let's just say mindshare, developer mindshare - let's even throw the word again in there, because I think you mentioned it too... But you really took a risk to break down your old model that had its benefits, obviously, but there were areas where you just weren't attracting the new contributors, or drive-by contributors, those who wanna just jump in on smaller things or some of the things you've mentioned there. You took a big risk to go this route. Was there a lot of discussion about risk/reward in that scenario?

**Jason Laster:** \[00:28:00.25\] Absolutely, and it's still a contentious discussion. Now, we've had some successes in the past... For instance, Nick Fitzgerald maybe three years ago made the Sourcemap library which is on GitHub, and everyone uses it for mapping, from a generated file (a bundle file) to the original files. VS Code uses it, I believe, Chrome DevTools forked it... So we have experienced doing open source outside the tree, but never at this scale, and we're still trying to figure it out.

**Adam Stacoviak:** What's with the .html piece on all these? Is that to sort of identify to those passer-by's, like "Hey, I can pull down Debugger.html" and, as you mentioned before, it can run in its own tab, it can - for lack of a better term - be its own application, with some shared libraries, but when it's inside of Firefox it's part of a single app, basically. Is that what it's supposed to mean? What's the idea there?

**Jason Laster:** I'm glad you asked. It's that, but it's a lot more than that, as well. Before the rewrite, the Debugger was largely written in two technologies that are so Firefox - XUL and JSM. I'll just take a minute to explain and you'll see why it was so important that we go about this. The history of Firefox was add-ons, a large part. Firebug - incredibly successful add-on, and other add-ons as well. And XUL is what underpinned these add-ons. It stands for XML UI Library. It was kind of like what you would build if you were a browser and wanted shared libraries before there was maybe like React or Angular.

What XUL let you do as a browser is to find new elements. So instead of building your select tag or your input, you'd have a dropdown, or you might have a tool tip or pop-over, written in XML with embedded Javascript, but you wouldn't worry about that because anybody could just use them.

Now, it's worked really well for the add-on story, which would just run Firefox, but fast-forward to 2016, and we've got this really complicated app, built largely in XUL, and we didn't know what to do. There wasn't really a path forward, because it was really difficult to debug; it'd be really scary if you had to make a change to one of these components. So we wanted to do something that was HTML, web friendly, and not a browser technology, and that's where the idea of HTML came from.

The other technology was JSM, which is Javascript, but once again, only runs in the browser, behind the scenes, in a special context, and it's privileged. So this privileged Javascript can do all of the things you're told you shouldn't do: it can create context menus, cross-origin requests, speak directly to the browser, and you just list it out and... It's wonderful if you have that superpower, but once again, you try to go anywhere and you can't run a JSM file; that's not gonna work.

And then you look at your frontend and your backend and they're calling these methods that are only available in that context, so we really wanted to focus on web technologies that could run anywhere, and that's one of the reasons why we did this rewrite.

**Jerod Santo:** You just brought back a huge amount of memories from my college days, because I remember I looked at XUL - this was when I was a fledgling developer - and I wanted to hack on Firefox somehow -- like an add-on, or I don't remember... But I remember back then - I was just getting started - I opened up some XML and I was trying to follow a tutorial, and I was completely overwhelmed by XUL. I remember a feeling of -- it wasn't impostor syndrome, I was actually an impostor. I did not belong there. And I just forgot all about that until you started talking about it.

\[00:32:15.23\] So with that being said, HTML is much more accessible for people than something that's -- I don't wanna say proprietary, because I'm thinking it wasn't, but specific, right? Like, vendor-specific tooling, whereas here it's like "Hey, it's HTML, okay?" That brings with it its own baggage, which we'll talk about React and Redux and stuff, so it's not like it's not complicated...

**Jason Laster:** Sure.

**Jerod Santo:** ...but it's kind of signaling, "Hey, you're welcome here."

**Jason Laster:** Yeah. I mean, it was funny because I hadn't seen any of this until I joined, and the existing Debugger is written in XUL and everything - I'm like "Okay, this is well written." It was written by very good engineers. And then you begin debugging something and you don't have that separation. If you try to step into function.bind or .apply, you're not gonna see the code behind it. But you step into a function defined in a XUL context, and all of a sudden you're in this XML file, but there's Javascript there... So you never had that separation and you never had the polish that would go into something like a select element.

So it was like this uncanny valley of like "This is incredibly powerful. You can just write in HTML as declarative." But you know, given a choice, I would choose React. \[laughter\] And I think a lot of people would. \[laughter\]

**Jerod Santo:** Sure.

**Adam Stacoviak:** Well, it makes sense when you say things like modern tooling too, whenever you describe a hackable debugger for modern times. This modern tool in these modern times you have referred to in this conversation, and also in some of your language... It makes sense.

**Jason Laster:** Yeah.

**Jerod Santo:** Let's talk a little bit about the end product, because debuggers are somewhat controversial amongst developers. In fact, I was kind of confessing to Adam before the call that I'm not a debugger person. I'm very much a... I guess I go slower, in terms of I just do outputs and log variables to the console and then expose them as global var-- I'm a console person, let's just say that... Kind of a puts debugger, if you're in Ruby land. \[laughter\] And honestly, mostly because GDB was my first run-in with a debugger, and again, it was an impostor syndrome. I actually did not belong in GDB land. I could not figure it out for the life of me, so I've always been like -- not anti-debugger, but I'm just not gonna reach for one.

So maybe give your pitch, because you're obviously a debugger person, you're building one from the inside out. They are definitely powerful, but why would I use the debugger, as opposed to the old-school style that I'm still using in my day-to-day work?

**Jason Laster:** I've been working on that answer for probably the past two or three years, because...

**Jerod Santo:** Oh, good! This should be good then.

**Jason Laster:** \[laughs\] Yeah. No, I have a lot of people come up to me and confess that they're not debugger users, and we've done Twitter surveys, and I'd say the majority of people probably use a console right now. You look at -- oh god, I forgot what the book was... I think it was "Programmers At Work", which was like "Founders At Work", write-ups on various programmers like Larry Wall. And many of them would ask, "How do you debug?" and I'm like, "No, I print, and I use my mind." And I do see that split, because I'm trying to think about the debugger as a product with users, and I think half the people would prefer to have a tool that helps them visualize and contextualize this information. That's where I fall.

And the other half, they either want something quick, like "I'm gonna print this one thing. I know what I wanna find, and that's gonna work", or they wanna think about it, and that's a different way of approaching the problem - all valid, but what I'd like to find a way to do is blur the two... It's like, "What are the best things in the console that come from logging, and what are the things that you can only do in the debugger?" and find a happy medium.

**Jerod Santo:** \[00:36:22.14\] Yeah... So what are some of the only things that you can only do in the debugger?

**Jason Laster:** Well, the console is great if you know what you're looking for. For example, if you're logging a render function and you're saying like "Hey, I only wanna look at this one value, this prop in React render." Console is great because you can say "Alright, we've got ten logs that probably have ten renders, and my number went from 2 to 20, and I could see how it stopped." So you get this over time perspective. With the debugger, if you're not sure what you're looking for, like you're not sure about the API, you're not sure if you can call that function. Like, user.update - does that take two parameters? Three? What happens if I try each one? The debugger is perfect for stopping in time and exploring that space, and then moving on.

**Jerod Santo:** So the ability to stop in time is really the -- you set a breakpoint... You can stop at this specific line, and it stops the world right there, and you can inspect and dork around from there.

**Jason Laster:** Yeah, totally. And it's not just at a line, although I think that's the most common. But you can say like "Stop at this line, in this scenario", with a conditional break point. Or we're trying to do other ways of stopping, so that you can pause on an exception, or a DOM breakpoint where an attribute changes, or an XHR breakpoint, or on a click... The one that I really wanna do is "Pause when this value is undefined." Because how many times do you get "undefined is not a function" and you're like "Where is this?" Or you've got your render and you're like, "Yeah, I didn't expect it to render with false, but when did it become false?" and you don't really know the context of where that thing was set.

So if it could help you stop at the right time, then you can probably figure out what's going on a lot faster.

**Jerod Santo:** Yeah. I feel like you're in a great position to do a lot of good when you're building a debugger, especially if you have an eye for design and user experience, because undoubtedly there's a lot of power in there, but it's hidden under the covers, or under the shroud of mystery, perhaps. \[laughter\] And I like your idea of blurring the lines, because somebody who's hanging out in the console and they just aren't getting the answers that they need, the answers might be over there in the debugger, but how are they ever gonna know first of all that the answers are there, and then secondly how to go about getting them? So are there any answers from you or even from -- I'm starting to think about Egghead, or Khan Academy, or anybody else teaching programming, or teaching... I know there's DevTools courses, but are there concerted efforts around education with a debugger, and also making it more approachable?

**Jason Laster:** Yeah, I think so. Going back to the history again, I think there was this idea of Firefox vs. Chrome vs. IE back in the past, and these days there's a lot more collaboration. So we're talking to the Chrome team, we're really talking to the Edge team, and then we're stealing each other's ideas. Nuclide has a debugger now, VS Code has a debugger now, and we can borrow the best ideas.

The other way that I think good ideas are bubbling up is that frameworks - they also know more about the running application. A lot of these browser debuggers assume you're writing vanilla Javascript... It's "Here are the variables on all the data, here's the file with everything"; you have a call stack with maybe 50 frames, maybe 100 if you're doing something really crazy...

\[00:40:13.26\] But the framework knows a lot more about your application just by virtue of having some structure. So what we're trying to do is reach out to them, and if you're paused and you're looking at a variable and it's an immutable object -- hey, we can format it a little better so you don't see all that immutable wrapping stuff, you just see "Here's your record with the values you care about."

**Jerod Santo:** Yeah, I like the trend of the larger JS frameworks having their own tooling inside of DevTools, whether it's Chrome, Firefox or otherwise, because like you said, they can have the intimate knowledge of the way the framework works, so it helps expose things.

**Jason Laster:** Yeah. One of the arguments for going from XUL to something like React, which is what we chose for our frontend, was that... You know, we can look at it two ways - either we're the browser and we're gonna build the best web platform, or we're gonna be part of the community, and hey, if we're using React and Redux and Immutable and other tools, we have sourcemaps as well with Webpack and Babel, we're more inclined to work more closely with them, because we're feeling the pain and we're part of the community, we're gonna try to improve that story as much as possible as well.

So these days, as we think about 2017, now that we have a new Debugger UI and a really good console and what not, our goal is to say, "Can we take the React development experience and build the best tools for them?" Not because we don't care about Angular and we don't care about other tools, but sometimes it really helps to be hyper focused and say "Hey, we care about this. Can we try out some things that worked really well here?" and then apply some of those learnings.

**Jerod Santo:** Very interesting. Well, we're hitting up against our next break. We have more details to discuss... We would like to talk a little bit about React and Redux, the choice, the implications and what that's meant for the project, as well as look at some other stuff you're doing with the debugging protocols and this idea of, as you say in the readme, "developing a broader community that wants to create great tools for the web" and exactly how you're going about doing that. So we will pause here and we'll discuss those things after this short break.

**Break:** \[00:42:38.27\]

**Jerod Santo:** Alright, we are back. Jason, modern tooling - the big choice was made at a certain point. Probably when the thing got started was "What kind of Javascript app will the debugger for Javascript apps be?" It turns out you chose React, you chose Redux. We wanna talk about that decision, as well as what that has meant - has it been a win? Have you been faster? The reasons for it. But before that, I'd like to ask you a meta question, which is... Historically - and by that I mean the last five years or so, maybe ten years - the Javascript ecosystem has moved so quickly, and frameworks have come and gone, and tools have come and gone... It's difficult to pick a horse in a race, and React in the last couple of years seems to have grabbed the mindshare a little bit (a lot of bit). In fact, I just mentioned this, Adam, in the last issue of Changelog Weekly - which, by the way, if you're not subscribed to Changelog Weekly...

**Adam Stacoviak:** Do it!

**Jerod Santo:** \[00:44:15.07\] What's wrong? Just do it - changelog.com/weekly. We linked to a thing called Reactide, and the comment that I added is it seems that React has hit critical mass, because any time there's an IDE for your JavaScript rendering engine, \[laughter\] it seems like this is a sticky. So just your thoughts, because you guys jumped on the React bandwagon, and I would be afraid to go all in on something like that, because maybe there's something better coming next. Do you think React is "winning" in the Javascript frontend space?

**Jason Laster:** I think it was the right decision for us, and I give James Long a lot of credit. He from the very early days identified this as something exciting, and blogged a lot about it, and got to know Christopher Chedeau and Dan Abramov quite well. So he did the early evangelism and planning for the rewrite. He actually got Redux into the Debugger before we started .html, so we were in a really good spot when we started the rewrite of the components.

What works really well for us is that the Debugger is one application, but it's also a lot of components that each do their own thing. The call stack is very isolated from the scopes and variables view, which is, once again, really different in the editor and in the tree. And if we do it right, then other people might wanna use these components as well.

I remember getting started on the Ruby REPLs and I wanted to build a frontend, but where do I even start? It was just so much that you'd want, and... If we play our cards right, these components could be reused in other projects so you could start up faster... Showing our call stack, showing variables, the tree - all these things are very reusable, and might not even be tied to a language, because like "Hey, here's some building blocks for building your own developer tools."

**Jerod Santo:** So it's worked really well for you... You dodged my question, \[laughter\] it was a nice dodge, but...

**Adam Stacoviak:** You put him on the spot, he had to call it a winner.

**Jerod Santo:** That's the fun... Well, he said it works well for them. \[laughs\] It feels like there's a congealing, and I'm not saying nothing new is gonna come out, but the excitement... React is old enough now that if it was a typical hype cycle, it would now be in like the trough of disillusionment. People would be hating it now. It should be the next thing already, but it's still here, so as watchers of the community we start to wonder "Maybe React actually is gonna be the thing in Javascript for the next five years", or something like that.

**Jason Laster:** I think that's a reasonable question at least. I know as a browser company we're looking for things that are -- maybe there's a different React, but we like these ideas of rendering out to our component, and that probably will be around.

**Jerod Santo:** Yeah...

**Jason Laster:** I think it's too soon to say in some ways. Things like Elm are doing so much, and Ember will really help you if you're building out an application and you care more about the server piece for instance, and deploying in the CLI. Those are things that just aren't concerns for us... So if you're just looking for this component model, then React is really appealing, and you can use 100% of it, as opposed to maybe 40% of Ember or 40% of Angular.

**Jerod Santo:** \[00:48:07.16\] Right. Very good. Let's leave that topic there, I think we've covered it well enough. Let's talk about this idea that it runs everywhere. One of your major pitches of why the Debugger is interesting is that it runs everywhere. Of course, it's the Firefox Debugger, but what does it mean that it runs everywhere, and why is that attractive or interesting to folks?

**Jason Laster:** Our dream is to build one debugger that could run in its own application. Imagine spinning up a debugger, like clicking on an icon and there it is, running in Electron, and pointing it at any Javascript runtime. Obviously, you can debug Firefox, but you can also debug Chrome or Node, or an app on your phone, whether it be like iOS or Android. That's appealing for a couple reasons - one, you don't have to relearn a tool or use a tool you don't wanna use, just because that's the only way to debug like, I don't know, a Node app.

The other is that you can be even customizing that tool a lot, so if you've got a standalone app, it begins to feel like Hyperterm or Atom where you say, "You know what? I'm using this all the time. I'm gonna build out some plugins or use some plugins that are really awesome and that customize my experience." So the direction we wanna go in with these tools is say "How do we built out an ecosystem for this app that's built with React, immutable below (or maybe Typescript)?" and then the team can say "Alright, these are the plugins of choice" and all of a sudden you don't just have a Javascript debugger, but you have a debugger for React, for Typescript and whatnot... And you can just do so much more in that world.

The other piece is if you're at a company like Facebook, or -- I come from Etcd - Stripe, you've got a lot of frontend engineers and you've got your own internal tooling and libraries, so if we could do something where you could quickly build out plugins or settings that work really well for your app, now we can make these companies' lives a little bit better as well.

**Adam Stacoviak:** Does that mean that this is an extendable app then, or it will be? What phase are we in with Debugger?

**Jason Laster:** \[laughs\] So we do the development in GitHub, and I'm primarily running it in a tab, like you would if you built any React app with a Webpack development server, you name it. And you can point it at Firefox, point it at Chrome, and it speaks over a websocket to these browsers. But that's not how we wanna ship. We wanna treat Firefox like a deploy target, just like we would treat that Electron app, like a deploy target.

So with Firefox we try to do a weekly deploy where we make a bundle and then we make a commit into Firefox where it gets the most up to date, latest greatest stuff. When it comes time to ship the standalone app - which I've always thought we're one month out... We'll see, hopefully sometime maybe June, maybe this summer, and then we'll treat that as another deploy target.

We're still working with that Webpack dev server talking over a websocket, but we could do a continuous deployment to the standalone app, and a weekly or daily release cycle to Firefox.

**Adam Stacoviak:** Yeah, because you'd mentioned Hyper as a point of reference and maybe even some inspiration; it seems like maybe that's where you're heading, potentially.

**Jason Laster:** Yeah... I think that they showed that if you build your app with React and Redux, that gives you a lot of extensions for plugins, so it's really easy to put something in the React middleware for instance, and wrap a component like a terminal tab, or the prompt... And it's just as easy to do that with Redux, where you can have a hook before the action is dispatched or after the action is dispatched, to do some good stuff.

\[00:52:22.19\] I don't know if that will be the direction we're going, but that's definitely how I see these plugins being built.

**Adam Stacoviak:** Going back to the second segment of this show, talking about the naming schema .html - 1) it's an invitation, but 2) it's also saying "No longer XUL, more modern tooling"... Does that mean that the other tabs in developer tools are taking a similar direction, or is it simply "This makes sense for Debugger to be potentially a standalone app, run anywhere, have many targets, be shippable with even Electron or something like that"?

**Jason Laster:** I don't know how applicable that is for the inspector, for instance... This is getting into the nitty-gritty; the Debugger protocol is pretty consistent, well established between Firefox and Chrome and what not. The Inspector protocol and some others as well - much, much crazier. We'll see.. I think Perth has a route forward to do universal performance measuring and their tool is beautiful and they're doing some really good stuff there. Network Monitor - probably the same story; Consul - probably the same story. The Inspector - probably not right now, but maybe it's too soon to say.

**Adam Stacoviak:** So the way to run Debugger as a standalone app now is you're cloning the repo, you're pulling it down and you're writing in a tab, essentially, and via some background configs you're pointing it at Firefox or whatever other Javascript runtime, but the future will be different...?

**Jason Laster:** Yeah, that's true. One thing that I'm really excited about is that we can tweet out that we wanna work on a dark theme, or we wanna work on search, and people can come in and Git clone Yarn install - we've started using Yarn install recently... Yarn start, and that launches this app which from there you can do all your settings, turn on some features, turn on a dark theme, and then click a button and that connects to Firefox and you see the tabs, or it connects to Chrome.

So we really focused on bringing people in and getting them started really quickly. It's like less than five minutes.

**Adam Stacoviak:** So that's UI-driven, not so much config-driven, and this connecting to different--

**Jason Laster:** Yeah.

**Adam Stacoviak:** Okay. That was one question I had in the pre-call with Jerod... Back to the "run anywhere" thing, I was like "Okay, what does this mean then? It seems like most of the documentation isn't..." and Jerod said "We are developers, dude... You're gonna pull this down", so I kind of felt like an idiot. I was like, "Well, I thought with the 'run anywhere' maybe you had like a developer focus, like if you wanna contribute and push code back, or what not..." But then you also have the user focus, and it seems like there was some user focused documentation missing, but maybe it was all in one. So I was sort of lost on "How do I actually begin to use this unless I'm in Firefox?", basically.

**Jason Laster:** Yeah, sure. User focus just hasn't been a thing yet, and it's never been as important as shipping the new Debugger in Firefox, which has always been the goal. There's just so much UI that every time you think you're done, you're like "Oh, gosh..." Hovering on a variable, "Wow, there's so much more there." Or searching through code and what not - there's more you can do...

But yeah, the user focus I think is a really exciting angle. In that direction, our goal with Node, for instance, is to add something like a debug command, like debug.js, that would invoke Node on your behalf and open the Debugger, so you immediately have the Debugger open and you can add your breakpoints, or whatever.

\[00:56:12.14\] We might even go down the direction of doing some editor integrations, as well. Because we have this Redux backend, the entire API for driving the Debugger is in Redux. There's like an action for Add Breakpoint, there's another action for stepping, like Step Over/Step In... Everything that you wanna do is exposed this way. So it'd be really easy to build out an Atom plugin that just drives Firefox or drives Chrome. It's just like "Connect", and then you're connected to a tab, and you get the really beautiful Atom UI you might want... Which is totally different than our React components, but shares the utils and obviously shares the Redux backend.

James worked with Tom Tromey, who is on our team and who's very involved in the Emacs community; I think he was the guy who built out the initial package manager for Emacs... And the last summer we've put together a demo of our Debugger running in Emacs with a separate Node process. It had everything -- kind of like GDB in a way, where you're using shortcuts to add breakpoints, and then you can step in, what not... But it just showed me that all this stuff would be possible once we launch, and then we can continue, build out the plugins and engage these different communities that would like to have a really good Javascript Debugger in their editor, or wherever.

**Jerod Santo:** Just last episode we had Kent C. Dodds on the show and we were talking all about community around open source, first-time contributors, making it easy and rewarding for people to get involved in really building that out... So maybe I'm more aware of it than I usually am, but just looking at the readme that you have here, you guys have really done a good job of making the projects very approachable, just in a few ways that I will list out.

You have development guides, all broken down into these different sections that you were talking about - themes, prefs, flow, logging... You have like a step-by-step, "Here's how you get started, and then once you get started, here's how you can actually claim an "up for grabs" issue, for instance. We're happy to help." Very inclusive... You have a contributing guide, you have a code of conduct, you have a slack, you have a community call every Tuesday, there's a DevTools call every Tuesday... All ths stuff is just right there for people to see. So I guess not really a question, but I just notice that you guys are really putting the effort in here...

**Adam Stacoviak:** An observation, for sure...

**Jerod Santo:** Yeah, and hopefully it's paying off.

**Jason Laster:** Oh yeah, for sure. I look at a couple metrics as often as I can, and one of them is how many contributions come from the community versus Mozilla, and in July - October that was around one-third/two-thirds... One-third from the community is a really good ratio, but at this point it's now two-thirds/one-third, so we couldn't be here now if it weren't for people getting involved and playing a really big role. That means function search and variable search, even the tech search largely came from the community. Our tabs came from the community...

Previewing was one of these funny ones, because in order to hover on a variable and figure out what to show, you need to parse the Javascript and figure out what the logical expression is. So if you're hovering on var A=2, when you're hovering on A, it's like "Okay, I've got A in scope, I can go get that value." But if you're hovering on this.model and your cursor is on model, "Oh gosh, I need to figure out what the entire expression is, this.model."

\[01:00:07.09\] That's been a really fun feature to work on, because many of our contributors who've been around for three, four five months saw some of these features that are described out and are issued as like "Parse the Javascript and figure out an expression", or "Figure out which scope we're in, and it's possible a variable's shadowed by another variable. So A is 2 in this context, but 3 in that context. Let's go get the right one", and they're like "Can I please do that? That looks really cool." And all of a sudden we have this preview that... I wanna confirm this, but I'm pretty sure Chrome is into doing things in the space that we are. For instance, it's really neat to shadowave; if you hover an A, in the inner scope you're gonna get a different value than the outer scope has posed like two in both cases. Or if you pause in onclick, and then you mouse over, which is a totally other function, that should be inert, but in most cases you're mousing over the same variable, like this is, in both cases... And we're gonna show the pop-up, because hey, we're not checking what the scope is; we don't know what the lexical scoping is at that level... But because we built out this community, all of a sudden we're doing polish because it's cool, and that's like the CSS, with tabs... We don't have the time to really get in and make sure everything lines up beautifully, but they do. They know those things, and same with Preview.

**Jerod Santo:** I got stuck when you said that you have to parse the Javascript... You're not parsing the Javascript with your own Javascript, are you? I hear Firefox has a good Javascript parser built in.

**Jason Laster:** Yeah, right...? \[laughter\] I'm so glad you asked this.

**Jerod Santo:** In fact I just got stuck there and was just thinking about that for the last few minutes, so hopefully I was the only one and everybody else was following you.

**Adam Stacoviak:** I followed.

**Jason Laster:** No, no, no. This is the nerdiest details that gives me the most excitement at this point, so I'm really glad you asked. A month and a half ago, maybe two months ago, we decided to use Babel on the client, in addition to React and Redux, to parse the Javascript, and that could not have been a better decision?

**Jerod Santo:** Really?

**Jason Laster:** What we realized when we started using it was Babel has a plugin for everything. We wanted to parse the code that people are actually writing these days, which could be... I don't know, Typescript, or Flow, or obviously all the Babel plugins for new Javascript features - and if we handed that code to the Firefox parser, it'd be like "Oh, you're doing what? No!" But Babel gets it. And the other thing is Babel's API is such a joy to work with, that all of a sudden we're doing these things like "Hey, your cursor is in this scope, but..." - once again, we're shadowing another variable on another scope, and that stuff is just really fun to do.

**Jerod Santo:** Client-side Babel, that's pretty rad.

**Jason Laster:** Pretty cool. I make things like building an outline view, or function search... Fun again.

**Jerod Santo:** It probably beats that regular expression you had previously. \[laughter\]

**Jason Laster:** Yeah, that's what it was. \[laughter\] That's the best practice.

**Jerod Santo:** How did I guess?

**Jason Laster:** It's like, "Oh, I see a column... Maybe that means we're in an object. Okay... Let me look at the left column. Oh, that's the key! Great!"

**Jerod Santo:** What could possibly go wrong?!

**Jason Laster:** \[01:03:45.27\] Yeah! And we can tweet out that we're using Babel, and we're recently started using Jest and Prettier... When we can get more involved in a community with our tooling, it's so exciting! Those are the things that really get picked up.

**Adam Stacoviak:** That's my takeaway from this call... When Jerod asked - I think it was mostly in the break there, but this new type of open source as the ping repo mentioned from teeing this show up was how you've embraced -- you've sort of let go of older models of how you typically did things to embrace (for a lack of better terms) the community and going into the trenches, which is something we say right here a lot... Going into the trenches with everyone else. Because if you look left and you look right and you're in a trench and no one else is around, you're in the wrong trench. So you've gotta be in the trench with the right people to help them, otherwise you're just in it alone, probably getting shot or ambushed.

**Jason Laster:** \[laughs\] Not good, not good.

**Adam Stacoviak:** No, it's not the place to be.

**Jason Laster:** Yeah... That makes me think of when we were getting ready to launch, about a month ago. Firefox was on a six-week release cycle, and we have nightly addition and what not... I personally have never done a good job of keeping track of where I am in that cycle, so I'm constantly surprised, like "Oh gosh, I've got two weeks and we've gotta release this thing? Okay..." And we were in that spot a month ago, and looked at the to-do list and it was like 30 issues, and you just know that some of these things become more issues, because that's how it goes, and you wanna polish... And as I was looking at the schedule, "Ten days... This is not good", and had I sat down and just worked around the clock, I could have gotten like 12 of those done, but instead I just began pinging people who'd worked on the project actively in the past month, people who worked on it actively two months ago but I knew had school work or something else, and I was like "Hey, can you help out? You did some tabs work; these are the things we need there. You did some search work..."

God, I remember the source tree needed some stuff with sourcemaps, the domains mapped well with Webpack... "This is it, here's the issue... Are you interested in helping us get ready for launch?" and it was just... It was killer. It was the most fun we had; everyone came in and shipped in... It was fun, it was good, and that kind of thing would never have happened had we not put the work in and built out those people who care about the project, who know about it and can help us out, jump in the trench.

**Adam Stacoviak:** What's a good place to ask for a call to action? Speaking of trenches, speaking of the community, where are some good inroads. I know that you used a different word versus Help Wanted, but what's the term you use for certain issues, like Come Help Out, or something? How can people step in, those who are listening to this show and are like "I wanna get involved, this sounds cool. I wanna reach Jason and the rest of the team, to make this thing that they're talking about in this show"? What's the best ways for people to onboard and help out?

**Jason Laster:** We used to call these issues "Up For Grab" issues. We recently switched it to "Available Issues", to be a little bit more international. It turns out that Up For Grabs does not translate well...

**Adam Stacoviak:** Okay.

**Jason Laster:** If someone's interested in getting involved, I would love it if they stopped by our Slack room and just said "Hey, this looks like a good project." We've got a really great team of about five, six community members who are eager to mentor and get involved with holding your hand on that first issue... But we've also seen most of the people come in and, once you do that Git clone, Yarn start, you're running a React app and you can use any dev tools you want. You can inspect it and see "Oh, that's the HTML", or you can use the debugger that ships with Chrome or Firefox to debug it.

I've seen people get involved in like 20-30 minutes and immediately help us, add flow to a file or pick up a UI bug and run with it.

**Adam Stacoviak:** \[01:08:07.01\] I might wanna suggest, instead of "Available", I think the standard term, Jerod, is "Help Wanted", right? Is that a pretty common standard, or is that not a standard these days for inviting folks to jump in. We use "Help Wanted", right?

**Jerod Santo:** Yeah, but I don't know what's best or standard, but I've seen that, I use that, but "Available" probably is just as good. Maybe "Help Wanted" translates poorly and we just don't know it yet. \[laughter\]

**Adam Stacoviak:** It very well might.

**Jason Laster:** I don't know, but I kind of like "Help Wanted."

**Jerod Santo:** Yeah? Then take the advice...

**Adam Stacoviak:** Well, that's what I see a lot of people using, and at least that's what I thought was a standard. When I saw what you all call it, which was "Up For Grabs", I was like "That's kind of cool, too."

**Jerod Santo:** It's "Relax... Okay, do you wanna grab that? Just grab it..."

**Adam Stacoviak:** Yeah, "If you don't grab it, I'm gonna."

**Jason Laster:** I know there's a website, UpForGrabs.com (I think) and they list out projects that have issues that are up for grabs. The reason we went with "Available" was we don't want to say "Hey, these issues are for the community and these issues are for us." We want as many issues as possible to be available to work on. And for us, "Available" means, "You know, we've thought through the UX, and we have a spec for what we're looking for and what that end state is." We could even include a patch so you can say "Here's the component and the function we think you can work on. Here's a solution that we think will work", but it's just pseudo-code, so it may work, it may not.

A lot of these things just come back and make the project better. For instance, we were trying to do a dark theme, and we do RTL and translations as well, and it was a really sad day in October when we were looking at a project and we were like "Man, we haven't translated any of the strings", and Bryan was ready to go to his manager and be like "You know, I think it's important to ship... We'll do translations later." But translating and being international and global is a real value of ours. When we thought about doing the work, we didn't have a good of doing translated strings in what we call the launchpad, in the local development mode. So instead of saying "Okay, for internationalization we're going to do it in Firefox in the mono repo", we found a way to get that done in the launchpad, and then file like 20 issues that were like "Translating the source tree", "Translating the scopes"... And same thing with the dark theme, and that brought people in as well.

So if we can make things available and have really good docs, really crisp descriptions, then we all win. It's easier for us to work on, and it's also easier for people to jump in and help out.

**Adam Stacoviak:** Yeah. We're getting close on time, but I wanna give you a chance to give a final shoutout to those listening. Anything else we may have missed... We'll put everything we've talked about in the show notes so our listeners know about that, but any last resource or piece of advice you wanna share back to the community before we tail off?

**Jason Laster:** Um...

**Adam Stacoviak:** Just debug?

**Jason Laster:** Just debug. \[laughter\] Oh, I'll give one tip, and this is a shoutout for Chrome DevTools and browser DevTools at large - if you're interested in seeing how the Inspector works or how the Debugger works in Chrome, you can undoc DevTools and then do Cmd Option + I, and it opens another DevTools that allows you to inspect the former one.

**Adam Stacoviak:** Wow...

**Jason Laster:** And for Firefox, you can open up DevTools, go to Settings and then there's a little checkbox for Browser Chrome Debugging. You go to Developer and then you can select a menu item called Browser Toolbox, and with that DevTools that's opened, you can actually inspect our tabs, Firefox's tabs UI, and you can change the URL bar to like pink.

\[01:12:14.29\] So as a final shoutout I'd say do one of those two things, check out what's happening under the hood, how your browser's working, how DevTools is doing what it's doing... You won't regret it. It's really fun, really accessible, and you won't look at development the same again.

**Adam Stacoviak:** There you go, make sure you do that, those two things. We'll have your Twitter and Slack and all that stuff in the show notes, so if anyone listening does that, give Jason a shoutout. Jason, thanks so much for taking the time to come on. Thank you for your passion, for doing what you're doing, and turning the Jerods of the world into potentially debuggers - who knows? \[laughter\] We'll see. Thanks for coming on the show, man. Much appreciated.

**Jason Laster:** Yeah, thank you for having me.
