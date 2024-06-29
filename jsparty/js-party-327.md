**Nick Nisi:** Ahoy-hoy. It is time for another exciting JS Party. I'm your host this week, Nick Nisi, and joining me today is Jerod Santo. Jerod, what's up?

**Jerod Santo:** Oh, you know, just trying out new browsers, as we do, Nick, as we do... Download them all. Gotta download them all.

**Nick Nisi:** Yes. It's a collection. Yeah, for sure. And speaking of new browsers, we're talking about a - well, not so new browser; I've been using it for quite a while... But it's a browser called Polypane, and we have its creator, Kilian Valkhof on. Kilian, how's it going?

**Kilian Valkhof:** Hi. I'm very stressed out, to be honest... Just to get that out of the way. I'm in the middle of getting a mortgage, and it's going about as well as you can expect.

**Nick Nisi:** Not the best time to get a mortgage.

**Kilian Valkhof:** No, it's all very interesting... But yeah, that's life. \[laughs\]

**Jerod Santo:** That is life, for sure.

**Kilian Valkhof:** But other than that, I'm good.

**Nick Nisi:** Awesome. Awesome. Well, yeah, good luck with that.

**Kilian Valkhof:** Thanks...

**Nick Nisi:** Why don't you tell us a little bit about yourself?

**Kilian Valkhof:** Yeah, I'm Kilian, I'm a web developer from the Netherlands, I've been building websites for a very long time... Started all the way back in Frontpage, building my own sites as a kid, then grew up a little bit and started building websites for other people. When I was around 16 I started a web agency, so just building websites, and then later iPad apps and iPhone apps... Because when I started, those things didn't exist. Did that for quite a long time. I was always building apps on the site, little tools that I myself needed, Polypane being one of them... And then in 2019 I quit the agency, and I started working on Polypane full-time. So that's what I've been doing for the past five years now.

**Nick Nisi:** Nice. Yeah, it's awesome... We should probably mention what it is. It is a developer-focused browser built on Chromium, I assume... And yeah, why don't you tell us what it is?

**Kilian Valkhof:** Yeah, sure. Well, I mean, I always enjoy listening to other people describe it, because it's great to -- you know, I get very myopic about it, because it's all I see, all day, every day... So kind of the important stuff just sort of disappears for me. But I'll try. So Polypane is a browser for developers, you said, and it's a browser for developers in the sense that it provides all these tools that you need to build good websites and web apps. That means that in Polypane you don't see your webpage just in a single tab, but you see your web page in as many different sizes as you need. So that can be different mobile phones, or tablets, or all the way up to 4k screens. And you can resize them all inside your window, so you can really see them all. And then anything you do in one of those screen sizes - which I call panes, and that's where the name Polypane comes from - anything you do happens in all of them. So you see your sites in all these different permutations, but it's you're interacting with just a single tab. So it's a massive speed boost while you're developing, because you no longer have to, for example, resize your browser to check if the mobile site still works, or flip your browser or your operating system to dark mode or back to light mode to check your light and dark mode... Because you can show all of those things side by side.

\[00:08:14.01\] So you can have a really good overview of everything or all the permutations of your webpage. And then on top of that, I have all these other tools for things that you need to care about as a developer. So there's a ton of accessibility tooling, where it tells you "These are the things that aren't working well right now, and then this is how you should fix them." Because I think that's a very important parts of in particular accessibility.

There's a lot of resources and things that tell you how not to do stuff... But then when it comes to how to actually do stuff, it's either "It depends", or "Here's five options", and you figure out which is the right one for your situation. So I try to be very prescriptive, or as prescriptive as I can, because that way developers can actually fix the things, make it better for people, and still get the ticket done, still make the deadline. So that's Polypane in a nutshell. I could go on, because there's hundreds of other features, but let's pause there for now.

**Nick Nisi:** Okay, awesome. I want you to go on eventually, because I learned something new in there. I've been using Polypane for a while, and other developers-specific browsers, and just the built-in dev tools in other browsers, Chromium browsers, Arc, Firefox and other ones... And in what you were saying, I just learned something new. I didn't realize that in Polypane -- you know, when you open it up... I have my website opened up in it right now, and it starts -- at least on my end, it's three different sizes: mobile, tablet and laptop. And that's how I primarily use it. But my site does have a dark theme and a light theme, and I did not realize that I could set the "prefers dark mode" per pane... Which is awesome, because I've just been switching back and forth. So I learned something new. I think that as we go, there's probably a million other features that I will learn about... And yeah, so that's really cool. Jerod, have you used any browsers this before?

**Jerod Santo:** Well, yes and no. Not very much. I mostly stick to Brave for development, and Safari as my daily driver. I used to use Firefox, and I have used Safari's dev tools... But at a certain point, the Chrome team's DevTools set themselves apart... And that's what I want. But I don't want Chrome directly, and so I use Brave in order to get that. Now, I've been using Polypane for at least 45 minutes, and I will say that, while I was hesitant to download it -- because Kilian, full disclosure; Nick told me about this tool probably six months ago on a show, when we were just talking about our web browsers that we use... And I didn't sign up for it at the time or downloaded it, because I was "Oh, man... Gotta have an email address, and a code and stuff just to even try it out?"

**Kilian Valkhof:** I mean, I have an email address... You probably have multiple...

**Jerod Santo:** I've got all kinds of stuff. But that's the problem, is "Do I want one more thing, just for a single episode?"

**Kilian Valkhof:** Sure.

**Jerod Santo:** And the answer then was no. But now I'm "Well, the creator's coming on. I have to at least try the thing." And so I've been using it, in earnest, for about an hour as I'm developing on our website, and I've gotta say, man, it's pretty cool.

**Kilian Valkhof:** Thanks.

**Jerod Santo:** I having the different panes up, the defaults... And I can see you can add other ones if you have specific sizes or breakpoints that you're particularly caring about. That is cool. And then the synchronization is cool.

**Kilian Valkhof:** \[00:11:48.10\] So that's one of the features that I could dive into. So Polypane does the thing you expect - you can add panes that are iPhone 12, Pixel 8, whatever. But, because Polypane is a browser, it has access to all of your CSS. So I also parse your CSS and get all the breakpoints that you've written in your CSS, and you can make panes from your own breakpoints. So you can test all the things that you actually explicitly designed for.

**Jerod Santo:** That's cool. So how do you do that...?

**Kilian Valkhof:** So you can press Command+B.

**Jerod Santo:** Oh, I see it in the file. Create panes from CSS breakpoints.

**Kilian Valkhof:** Yeah.

**Jerod Santo:** Or Command+B is the shortcut. So you're taking me the shortcut way. That is nifty. Bam. Uh-oh... Now I've got a bunch of panes.

**Kilian Valkhof:** Yeah, that can get very -- a very long list. So whenever there's more than, I think, 10 or 15 breakpoints, Polypane goes "Are you sure you want to do this?" Because with 15 panes you're not going to get a real overview. So what I do instead there - so for example, the Polypane website itself has 24 breakpoints, which is way too much. I didn't code that very well, but it is what it is... So when you try to open 24 panes, Polypane goes "Well, do you really want to do that? Or do you just want to see panes in the range of breakpoints?" So it takes all your breakpoints, and then it buckets them into five groups, and then it takes the average of each group as a size for a pane. So then you only add five or six panes, but you still get the full range of all the breakpoints you designed for.

**Jerod Santo:** Yeah, that's very cool. So I'm looking at our admin right now and it looks we have 10 breakpoints. It's actually manageable. Like, if I just scroll sideways, I have a pretty big monitor, and I maybe eventually would just close a couple of these... But it's definitely a cool feature.

I also the synchronization. You scroll one and they all scroll. I find that to be very cool, but I'm glad that you can also just toggle that one off... Because at first I was "This is awesome." Then I was "Actually, it's a little bit distracting when I'm just trying to test a form out, is to have them all moving." So I was "You've got to be able to turn that off." And sure enough, it was pretty easy to find that. So overall, super-impressed. I can tell you been working on it a long time, because it seems you've sweated a few of the details that a version 1.0 probably wouldn't have.

**Kilian Valkhof:** Well, so by the time I released the 1.0, I had already been working on it for four years as a side project... So for example, that breakpoints stuff was already in 1.0, but then many of the other things weren't. So since I've been able to work on it full time. I've definitely added a ton of features and a ton of improvements.

**Jerod Santo:** And does it have the built-in Chrome DevTools in there, or are you doing your own thing?

**Kilian Valkhof:** Both. So it's built on Chrome, and as you mentioned, the Chromium DevTools are really good. So it would be stupid to go "Nah, you don't need those." So you can use those if you want. But the Chromium DevTools have one major downside, and that is that the model for the Chromium DevTools is that one web page has one DevTools. So that kind of falls apart if you have your site shown in multiple panes, because now you can only ever edit one pane at a time, which is not the experience you want. You see all these panes, but you really want to just be interacting with your website or your web page, and it doesn't matter how many times it's shown.

So I've also built my own dev tools. So I have my own elements inspector, and my own console, and what they do is they consolidate what happens in all of the panes. So with the Polypane Elements panel you can inspect and edit DOM elements across all your panes. So you can very quickly change some text, or change some colors, or change some font sizes, and see how that works across all your panes, eliminating the resize to check if everything still works problem. And then the console is kind of the other way around, where if you have console messages, they all end up in the same console, and then rather than showing the same message three times, once for each pane, I also check if each pane emits the same message, and then I combine those.

\[00:16:25.21\] So in the console, if you do a window.title, then you just get one return value, and then if you do a window.innerheight, you get three, if you have three different panes with three different heights. So I'm trying to make sure that you can use the stuff that you're used to, that you're super-familiar with, and then also provide you with what I think is a better experience.

**Jerod Santo:** That's cool stuff. Nick, what part of Polypane are you using the most? You've been using it longer than I have. I've got 45 minutes under my belt. What are the features that surfaced to you? And obviously not dark mode, but what else?

**Nick Nisi:** Yeah, clearly... So one big thing that really got me into looking at it is another feature that you have, I think in your info panel... Yeah. The social media previews. I was working on those panes for a while, for "What's it gonna look if I share a link to Twitter, or to Facebook?" And at one point, I think Twitter had dev tools that would show you what it would look like, and --

**Jerod Santo:** The Twitter Card Validator, or something that.

**Nick Nisi:** Yes, that's it.

**Kilian Valkhof:** Yeah. So it's very ironic that -- so Twitter has those, Facebook has those, LinkedIn has those... And they've all been abandoned for years. They're extremely out of date, and they usually don't even validate in the same way as the actual sites do... But they're still online, and they're still mentioned in all the documentation.

**Jerod Santo:** Yeah. I was just using LinkedIn's the other day, as I was tweaking stuff, and in the validator - I think they call theirs Post-something... I don't know what it's called. In theirs, our stuff looked great. And then I'd go put it into the actual post editor and paste it in there, and it would pull it in and it would look terrible. And I was "Well, obviously, the validator is what I would want to work... But now what do I do?"

**Kilian Valkhof:** Yeah, so LinkedIn recently changed the design of their embedded links, where previously they took your \[unintelligible 00:18:29.00\] image and they displayed it very large, just a Twitter card...

**Jerod Santo:** Yes.

**Kilian Valkhof:** But they got rid of that, presumably for engagement reasons... Because apparently, it's also a whole thing where links in messages in LinkedIn are suppressed, so you've got to put the link in the comments to make sure people even see them...

**Jerod Santo:** They don't want you to click on links. They don't want to leave LinkedIn.

**Nick Nisi:** It's the worst...

**Jerod Santo:** I know.

**Kilian Valkhof:** So now if you share a link, you also get a tiny little image, rather than a big one.

**Jerod Santo:** That's exactly what I was looking at. But if you go back to their validator, it still shows the big one.

**Kilian Valkhof:** Yeah. So I keep my social media previews up to date, whenever I find that there's a change, just so that things are pixel perfect and things do match up with reality, and not with the 20% hack projects of one guy at LinkedIn that left 10 years ago thinks it should look like.

**Nick Nisi:** I appreciate that. And that makes it really easy, because you get to see X/Twitter, Facebook, Slack... Slack was a big one that I was working on for a while... And just being able to see all of those. You mentioned they don't the engagement of you clicking a link out, and I just - I hate that so much. It's the worst. And I hate that people play that game, instead of just abandoning --

**Kilian Valkhof:** We all got tricked into that, right? With the advent of social media. It was "You can share everything, and we'll make it super-easy, and connect the world..." And now it's "Um, stay. Don't go anywhere."

**Nick Nisi:** Yeah...

**Jerod Santo:** \[00:20:09.11\] Right. It's like, we want people to come to our websites... How do you do that anymore? I'm at a point now where for Changelog stuff I'm just starting to think what if we just stop posting announcements about our new episodes? Let's just stop. Because the upside is so minuscule at this point, to the amount of effort, especially with the APIs getting locked down, so you can't even auto-post... You have to go manually post. And they don't want you clicking on the links anyways, and no one's there anymore, they're all scattered everywhere... And so huge effort, and very, very small upside for us humble, indie creators. It's like, we just want you to come to our websites.

**Kilian Valkhof:** Exactly.

**Jerod Santo:** But no, they don't.

**Kilian Valkhof:** We just all have to go back to RSS.

**Jerod Santo:** Yeah...!

**Nick Nisi:** I'm all in on that. I would love that.

**Jerod Santo:** We've just gotta get everybody doing it, you know? How do we do that? Well, we go to LinkedIn and say "Use RSS!!" and then we link out to a thing that they can't click on. Anyways, off topic. Where do you see that feature, Nick? I can toggle it on... Is it in the Info panel?

**Kilian Valkhof:** So if you press Command+K, and then type meta...

**Jerod Santo:** Oh, you've got a \[unintelligible 00:21:19.21\]

**Nick Nisi:** See, I didn't know about that either.

**Jerod Santo:** You're learning. \[laughter\] We're learning so much. This is cool.

**Nick Nisi:** I will say, another reason I came to looking into these is kind of what Jerod said -- like, I'm a big fan of Chrome's DevTools. But I have not wanted Chrome on any of my machines for years now. So finding other ways to do that... I Arc a lot. I don't developing within Arc, for some reason. I don't know, it just -- I don't know. I'm starting to use Arc more as a daily driver too, so that's maybe clouding it... But I really liked the idea of having a browser that is my reference browser, where I'm going to look up information... And for years that's been Safari. But then I specifically just want somewhere that I can Command+Tab to, that is not the same browser that I'm currently using. So I wouldn't want to Option+Tab to Safari, I'd want to Command+Tab, because it's just more natural. And so a dedicated browser just for that is super-appealing to me. And that's the main reason I started looking for a solution this, and then I saw this, and I think I saw one other one... But the tools that it gives me that, being able to see the social media previews, and being able to see the multiple panes at once are really, really enticing. And you can turn those off. I forget what it is... Is it just B --

**Kilian Valkhof:** Just B, for browser. \[laughs\]

**Nick Nisi:** Yeah. It makes sense.

**Kilian Valkhof:** I mean, shortcuts are difficult, man... \[laughter\] At some point you just run out of keys, and you're "What do I do now?"

**Nick Nisi:** But yeah, that lets you go just full-screen, single pane, a normal browser, and then... Like, a lot of times things that I'm working on might be -- I'd refer to it as the backend of the frontend, where it's not really UI changes, so I don't care to see five different panes, and reload all five every time... So being able to just consolidate it down to the one pane, and then kind of basically looking at the console, or interactions and making sure that that actually works... And it's really nice being able to switch between both of those. I am curious though about -- so you decided to work on this, and you've been working on it full-time for quite a while now... What led you to decide that you're just going to build a browser?

**Kilian Valkhof:** \[00:23:59.01\] So as I said, I've always been building small tools for myself... So I wrote an image compression GUI, I made a charting library using SVG at some point... So I've always made stuff that I needed, and then this was just personal frustration, and seeing -- at the time I started this project in 2015, back then Sketch was the hot new thing, and something Sketch did, which was really cool, was artboards. So whereas Photoshop was still very single image-centric, you defined your size of your webpage, and then you'd start designing that single thing, and then if you also needed a mobile design, you opened a new file. Whereas in Sketch, it would just be one huge canvas, and you would add a bunch of artboards side by side for your desktop, and your mobile, and your tablet, and whatever... And when doing that, what I noticed was that it was really easy, while designing, to see the relationship between the different sizes for specific elements... And that was really helpful in making sure that everything was consistent, and that everything looked nice... Because at that time, none of the apps had things design tokens, or variables or whatever. None of that existed yet. So I really enjoyed that workflow. But then I went back to the browser, and I was back to dragging my browser back and forth... And stuff that starts to really irk me at some point, where I'm "This is just dumb. Why am I doing this? This is the 50th time that I've done this today, and I'm sick of it..." And that's where the idea came from. Like, "What if I just duct-tape three iFrames together and add an address bar? What happens?" So I did that, and it was fun, it was nice to use, and it was just some tool that I built for myself, that -- you know, I was playing around with Electron, so it was a good excuse to try out Electron some more... And essentially, that was it for a while. It was just three iFrames, an input field, and some styling to make it look nice... But the first version had a Reload button, that was just an unstyled button that said Reload... It was just for me; it didn't have to be pretty. Since then, I've spent a very large amount of time making sure that the rotation of the Reload button actually rotates properly... But back then I didn't really think much of it. I used it, and then at some point I compared my hours for comparative projects, and using my duct-tape tool I was 60% faster than using Chrome... And that was the point where I was "Okay, I need to do more with this. This is interesting. This is just the crappiest first version that you can imagine... What if this was even better? What would that mean?" So that's where it really got going.

**Jerod Santo:** And is this your full-time gig now?

**Kilian Valkhof:** Yup.

**Jerod Santo:** And at what point did that happen?

**Kilian Valkhof:** So essentially right from the get-go. So I said I had a web agency; I stopped doing that in 2018. Then I tried to give myself a month off, and I made it two and a half weeks, and then I started building all the stuff that you need around an application, user management, and payments, and a marketing website, a cool launch video, just to make sure that all of that got built.

\[00:28:00.18\] And then I launched in May of 2019, and I gave myself a year to make sure that it worked. And if it didn't, I would just find another job, or try something else... But it did work, and I was able to pay my bills from it. So I've been doing it full time from the get-go, which is not something I necessarily recommend people do. Like, it's not necessarily something to emulate, or the way to build something this, but it's how I did it.

**Jerod Santo:** Why do you think it worked for you, that wouldn't work for others?

**Kilian Valkhof:** Luck?

**Jerod Santo:** Yeah. I mean, you had sales right away, or...? I mean, you must have just been making money right away.

**Kilian Valkhof:** Yeah, so Polypane is a subscription product, because I do need to be able to pay groceries, and I also need to make sure --

**Jerod Santo:** And mortgages...

**Kilian Valkhof:** At some point mortgages, yeah... And one of the downsides of a browser is I can't build it, and then ship it, and then never touch it again. Because a month later, there's a new version of Chromium, and if I don't update to that one, then within two months it's just super-insecure to run. And within half a year, it's terribly outdated. And then within a year, all your users who have more modern browsers than you... So it's something I continuously need to update. But yeah, that also meant that I had income from the get go.

**Nick Nisi:** And you mentioned it's Electron... And I've never done Electron development before, but what I do know about electron, I guess, is that it's a wrapper around Chromium. Is that accurate to say?

**Kilian Valkhof:** Yeah, so the way you can think of Chromium is that -- or of Electron, is that you have Chromium to display pages, and you have nodes to interact with the operating system, and then you have a bunch of glue code to orchestrate all of that. So there's Electron APIs to create windows and resize windows, and then there's Electron APIs to request the dock in Mac, or to add a window menu, or to send notifications... So all of the stuff that you want to be able to do in an app, that's what Electron provides, and then they use Chromium on one side and Node on the other side to make that happen.

So the interesting conceit there is that Node and Chromium both use V8, the JavaScript interpreter. And what Electron does is they make sure that's both the version of Chromium they have and the version of Node they have, that they use the same version of v8, so that there's a single interpreter for all your JavaScript.

**Nick Nisi:** And is that then what you're using for Polypane, or are you bringing your own V8/Chromium?

**Kilian Valkhof:** No, that's what I'm using for Polypane.

**Jerod Santo:** So is this a one-man show, or have you hired? Are you expanding? Do you just code all day? Do you do support requests all day?

**Kilian Valkhof:** I would to be able to code all day... Yeah, so it's mostly a one-man show. I bring in freelancers as needed for the stuff I'm not good at, or I don't want to do, or don't have time for... And at some point I plan on expanding with employees. My previous company also had employees, which is why for the first couple of years I was fine running it on my own... Because working with people is great, but being responsible for other people's families is very stressful... But yeah, so for now it's just me with some freelancers here and there. And then in the future I might expand.

**Nick Nisi:** I want to go back to the tech of it a little bit, and talk about it... The UI of it. It's a very nice UI; it looks a browser...

**Kilian Valkhof:** \[laughs\] Thanks, yeah.

**Nick Nisi:** ...with a lot of extra features.

**Kilian Valkhof:** ...that's the idea. \[laughter\]

**Nick Nisi:** \[00:32:07.14\] If you told me it wasn't Electron, I would believe you, because it doesn't really look Electron to me... I mean that in a good way. But I'm curious what goes into developing the UI of a browser. What are you using?

**Kilian Valkhof:** Sure. Yeah, so all the browser UI is React. So it's just another webpage; it's turtles, there's web pages in web pages in web pages in web pages. And that's all there is. Interestingly enough, other browsers are also more and more built with JavaScript... But yeah, so the UI is just all -- it's all React, outputting HTML with just plain CSS for styling... So as I said, I started this in 2015. Back then it was React 0.14 that I was working with. And right now it's React 18, so I'm just keeping it up to date... But there's a lot of layers.

**Nick Nisi:** TypeScript?

**Kilian Valkhof:** No TypeScript. I am not a trained computer scientist. I just play one on the internet. Again, when I started, TypeScript wasn't a thing, and then adding it to a project that's already underway for five or six years at that point for just me working on - it doesn't really... Like, the value proposition isn't that strong, I think. Everyone's fine to disagree with me on this, and that's fine. But for me, it was like, I can spend a lot of time adding types to the code that just I myself am writing and reading all day, and that's not going to give me a lot. So not yet. If I have more people, undoubtedly that equation will change.

**Jerod Santo:** Nick is smiling, but he's actually crying on the inside. \[laughter\] Me over here, I'm smiling, but I'm actually smiling on the inside as well, because I think that's entirely reasonable, and a sound choice. Who wants to spend time adding types when you can actually be pushing your product forward? Nick?

**Nick Nisi:** Yeah, I'm really enticed, but...

**Kilian Valkhof:** I think Nick is now but increasingly scared of clicking any of the buttons in Polypane... \[laughs\]

**Jerod Santo:** Yeah. And Nick, you were just saying how well this thing works, right? It's very nice software, it looks good, it runs well...

**Nick Nisi:** I was excited when we were have you on, Kilian, and then Jerod was "Yeah, I'll join and be a wingman." I'm "Yes, we're going to talk about this browser that's written in React, and I presume Typescript." And now you just gave Jerod all this fodder...

**Kilian Valkhof:** Sorry.

**Nick Nisi:** I know, it's okay.

**Kilian Valkhof:** We'll just have to lean into it.

**Jerod Santo:** Yes.

**Nick Nisi:** \[laughs\] Your reasoning is totally sound. My only pushback, I guess, on that - and it's not a lot of pushback - would be yeah, it's just yourself, but it's also yourself from years past, that you have to remember all of these things... And it might help with that. But I also understand, the ROI isn't very apparent going back and adding them after the fact. So I can see that.

**Kilian Valkhof:** Yeah.

**Jerod Santo:** There was an entire world of applications that existed before TypeScript, and they were just fine, Nick...

**Kilian Valkhof:** Oh, no... \[laughs\]

**Jerod Santo:** We're all big boys and girls, we can handle ourselves, and... We just write good software without it. It's not that hard.

**Nick Nisi:** Nope. False. False.

**Kilian Valkhof:** And sometimes you just want a little type coercion. Just a little.

**Nick Nisi:** TypeScript accounts for that.

**Kilian Valkhof:** \[laughs\]

**Jerod Santo:** If you're asking for permission, "Sure, I'll let you do a thing that you could have done without me..."

**Nick Nisi:** \[unintelligible 00:35:38.22\]

**Jerod Santo:** Sorry, Nick, we got you double-teamed here.

**Nick Nisi:** I don't wanna play anymore. I'm going home.

**Kilian Valkhof:** \[00:35:49.14\] Well, then can switch gears, because the thing that makes Polypane feel native-ish isn't React, but it's actually a lot of CSS... Because there are a lot of things that native applications do, that web pages don't do by default, that you can spend time on to make sure that your Electron app feels much more native. And that's things making sure that users can't select all the text. Because that's not something you can do in a regular app. If you press Command+A in Keynote, it's just the text on your page that gets selected, and not all the buttons. If you press something, usually something happens on key down, and not on click, on key up. But on the web, you can click a link, and then as long as you hold down the mouse, nothing happens... And then when you release, something happens. So that's webby. But on a desktop app, as soon as you press down, the action happens. So it's all these little things that make sure that the interactions that you have in the app, that they are appy, instead of webby. And you can do that with any framework; you just need to make sure that you pay attention to it.

And then there's also stuff you don't realize... Like, whenever you have a menu item in a menu, and this works on all operating systems, as soon as that menu item ends with three dots, an ellipsis, it means that clicking that menu item will open a dialog of some sort. And this is true for all applications, and you probably never realized that. And there's not a "Welcome to macOS. If you see a menu item with three dots, this is what happens." It's just something that is there, and you as an app developer need to pay attention to stuff that, to make sure that you fit into all these things that users either consciously or unconsciously expect from apps. And it's fun doing that, and it's fun doing that across platforms, because things are slightly different...

And then some things are just very unspecified. A thing that I still struggle with is the casing of menus. That's just all over the place, including in first party native apps. Do you use capital case, or do you use sentence case? It's just, whatever feels right in the moment; I just need to make sure that I'm consistent.

**Break**: \[00:38:39.24\]

**Jerod Santo:** Well, here is a feature request that exists at the cross-section of operating system consistency and keyboard shortcuts. So on macOS, every browser - except for Polypane, I believe - will switch tabs using Command+Shift+left bracket and right bracket.

**Kilian Valkhof:** There's like five different ways to switch tabs. But I'll add the sixth one.

**Jerod Santo:** I see in your shortcuts that there is a Command+Option+right and left, using the arrows... That's in your list of tab shortcuts... Which works just fine. But Safari users me - it works in Chromium-based browsers, Firefox also... So let's add one more, Kilian. Just a feature request...

**Kilian Valkhof:** Sure.

**Jerod Santo:** When you get to it, no rush.

**Kilian Valkhof:** What was it again, four keys that you need to press?

**Jerod Santo:** No, just three. Command+Shift+left square bracket to go left a tab, and Command+Shift+right square bracket to go right tab. The reason why this is nice is you don't have to actually leave \[unintelligible 00:45:41.00\] to put your hands down on those little arrow keys at the bottom right-hand corner. It's actually fast \[unintelligible 00:45:45.16\]

**Kilian Valkhof:** Oh, yeah. Fair enough.

**Jerod Santo:** So... Just when you get to it, no rush. I'm still on my 14-day free trial, so...

**Kilian Valkhof:** I'll also add Vim bindings at some point.

**Jerod Santo:** \[laughs\] Okay, now we're talking. You know that's on Nick's list of questions, for sure...

**Kilian Valkhof:** I mean, you wouldn't be the first people to request these.

**Jerod Santo:** I think that's slightly more difficult than this particular keyboard shortcut, but... You'd have to tell me.

**Kilian Valkhof:** Yeah.

**Nick Nisi:** Because it's Chromium, I believe there's a way to run Chrome extensions... So could you just install things like Vimium?

**Kilian Valkhof:** Yes and no. So the thing is that the extension codes in Chromium, even though it is all JavaScript under the hood, it is very much tied to Chrome's processes. So Chrome, for example, has the concept of a tab. But Electron doesn't have the concept of a tab. It just has the concept of a web content, which is a thing that renders web content. The result of that is that Electron has to reimplement essentially all the APIs that the Chrome extension API has, to make sure that you can map that not to tabs, but through the API, pretending your web contents are tabs, and then into Electron.

Now, that isn't complete. So Electron doesn't implement all the APIs. Some of them wouldn't make sense, some of them are very difficult, some of them are very dependent on how you actually want the thing to work... And then there's also manifest v3, which is like "Let's reimplement it all over again in a very different way."

So right now, Electron has some support for a subset of manifest v2 APIs, and then a much smaller subset of support for manifest v3 APIs. The result is that there are some extensions that work, but many also don't, because they use APIs that just haven't been implemented yet, and that also can't be implemented in user space.

**Jerod Santo:** \[00:47:58.26\] Sounds complicated. Sounds tricky.

**Kilian Valkhof:** It's tricky. I am using a third-party library to add some additional APIs, called Electron Chrome Extensions. So if that's something you want in your Electron app, you can check that out. It has a specific non-free license for commercial software, which is fine... And then I'm also adding some APIs myself. So I'm trying to expand that projects as well.

**Jerod Santo:** Why don't you share some more of the nerdier tiny little things that surely Nick doesn't know about? Like the features that you've toiled away at, but maybe are hidden, or people don't know.

**Kilian Valkhof:** Yeah. So do you know there's Web Vitals testing in there?

**Jerod Santo:** No.

**Kilian Valkhof:** Okay, so you can turn on Web Vitals Testing - in the top-right there's a three-line menu. If you open that up, you can show Web Vitals. And what that does is it adds a little icon at the bottom of each pane, that you can hover to show your Web Vitals once they are recorded. And then the neat thing is that that will also get the public crux data for any public URL. So your local host won't be in there. But any public URL Google collects Web Vitals data, and then you can query that API for \[unintelligible 00:49:19.21\] and I switch between them depending on the pane size.

So you can compare your experience with the average of the world, and then see "Okay, 80 percent has a good CLS score, and then the remaining 20% is acceptable, or 15% is needs improvement, and then 5% is bad, and that's fine, but for some reason, on my device I'm always scoring in the poor category... So why is that?" And then you can further find the elements causing the CLS by clicking the icon in the Web Vitals panel. And that works for all the Core Web Vitals, and then I also show the other Web Vitals.

**Jerod Santo:** I love it.

**Kilian Valkhof:** So that's a neat little feature. It's particularly interesting to have that crux data, because - we're all developers... Before this show started, we were discussing how recent our MacBooks are... Mine isn't, but it's still probably top 10 percent of performant devices. And that means that in regular usage, I'm never going to run into Web Vitals issues. I'm always going to be in that green area, because my device is super-fast. But seeing that crux data, you can see "Oh, actually, my device is super-fast, but 50% of the people that visit this page, that have the same experience that I have." And you can act accordingly; you can see what you should be focusing on, and what's worth focusing on. So that's a neat feature. You can press Cmd+G, I think, for guides, and that will add --

**Jerod Santo:** Oh, it toggles the rulers?

**Kilian Valkhof:** That will add rulers to all your devices, and then you can have grids overlays, or column overlays, so you can be pixel perfect. Yeah, I mean, I could go on... \[laughter\]

**Jerod Santo:** We were just letting you. Keep going, keep going.

**Kilian Valkhof:** Sure. So there's also an option to overlay an image on top of a pane. So if you have a design, or if you make a screenshot, you can put that on top of your pane and see the differences. And then like any way you want. So there's an onion skin where you can drag left and right, there's a mode where you can highlight the difference between the two images... So anything that's different will be highlighted, and the rest will be either black or gray. You can see them side by side... You know, just giving you all sorts of options to compare to an image. But then what a lot of people also want to do is compare to other web pages. So you can also do that; you can have two panes, and then for one pane you can turn off the navigation sink. So that will prevent that pane from having its URL updated to match all the other panes.

\[00:52:27.14\] And what you can do then is have like a production site and a staging site next to each other, and then every other interaction can still be synced. So you can still be clicking on the same thing, or typing the same things, and it'll happen on both sites, but it'll actually be different URLs. So you can use that to make sure that staging still works the same way, or maybe you're reimplementing a design in a new framework or whatever, and you need to make sure that there's no huge differences... So that's a neat feature, that a lot of people ask for.

And then what I really is all the different emulation options that Polypane has. So there's dark and light modes, of course, but there's seven other media features that you can also develop for it, that will make your site better for all sorts of users. So you can emulate forced colors, which is a Windows mode that changes all the colors on the screen to predefined palettes. So your websites, but also the start bar and all the apps, they'll be -- everything is now green text on a black background, and links are yellow. And then the entire operating system is like that, including your website.

**Jerod Santo:** Yeah, it's funny, I just turned that on on Changelog.com/news, which is our newsletter, which exists on a web page, but also gets -- a different rendering of it gets sent out via email to a bunch of people. And that email, especially in Outlook specifically... I think Outlook365. I don't know, the online version of Outlook. Microsoft just overrides all your CSS and makes it look -- and it's funny, when I turn on forced colors on that pane, it looks a lot like our email looks inside of Outlook. Because all the links went -- ours are green, but now they're blue, and it just overrides everything... And it's like "Well, can I still read it?" And the answer is yes. So I'm happy right now.

**Kilian Valkhof:** Yeah, so usually the issues you run into with forced color modes are things like SVG icons, that haven't changed, or that changed to the wrong color... Or when you have a slightly more designed design, where different parts of the site have different background colors, and that's what you used to differentiate different parts... Well, that differentiation is gone when all the background is black.

So what you want to do for that mode is to add some more borders. And they can be transparent, and that means that you don't see them whenever you just visit your site normally. But then you turn on forced color mode, and forced color mode overwrites the color of the borders. So they go from transparent to green. And now suddenly, you have that differentiation back for people using this mode. And it's essentially a zero-cost feature to improve your webpage for -- the most recent numbers, I have 1 in 25 people using Windows have this on. It's not a huge number, but it's probably significant if we want to have 98% browser support, which is a common value that people strive for... Well, this is like 4%. So it's well within the range of things you would want to realistically support, and it's not a lot of work to do... And using Polypane, it makes it really easy to test this, and to just quickly make sure that "Do I need to add a border here? Okay, I'll add a border and move on with my life."

\[00:56:06.12\] And there's prefered contrast, there's print styles, there's reduced motion, there's reduced data - which isn't actually a thing yet, but I'm hoping it will be soon. That's a way for users to tell you that they would prefer not to use all the data to load your webpage. So don't autoplay videos, don't load multi-megabyte background images, stuff like that. So that makes it really easy to test all these permutations, and I think that's really powerful.

**Nick Nisi:** One that I really like that I'm just seeing is automatic dark theme. I'm thinking of that as an extension like Dark Reader, or Noir, that would automatically apply dark theme, and I can see how my page would change. I can see just on my dark theme itself, it slightly changes things, which is kind of cool.

**Kilian Valkhof:** Yeah. Also, dark mode is actually built in Chromium version of that Dark Reader extension. They shipped that for Android, I think, a couple of years ago, and then they shipped an emulation for it I think last year somewhere... And I only added it recently, because first I was like "Well, it's automatic dark mode, so you're not going to be able to design for it", because it's just a bunch of heuristics that Google has decided to add to light mode websites if they don't have a dark mode. So there's nothing you can do if it looks bad. Sure, you can try, but there's not like guidelines. But then one of my users, they requested it, and they were like "Yeah, but people are gonna use this, so I need to make sure that I can see what it looks like. Even if I can't influence it super-well, I need to see it. I'm not gonna design for it, but I need to at least have an easy way to see what's going on.

**Jerod Santo:** So this person is a masochist, probably.

**Kilian Valkhof:** Well...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** It's just pain. You're just gonna feel the pain. You can't affect the pain, but you want to feel it.

**Kilian Valkhof:** Yes, but they're right, and that's one of the many learnings of Polypane, is like "I can have opinions, but users are probably right."

**Jerod Santo:** Oh, I just realized there's a very nice pun there with the poly pain, because I'm actually over here... I went quiet for a moment, because I'm over here toggling all these emulators on, and seeing how my website doesn't look good in various ways... I'm like writing notes, like "Okay, fix this..." I'm feeling some pain.

I'm feeling the iOS app developers right now in light of the new iOS 18 personalization stuff... I spent all this time and money on a very nice app icon, and someone's just gonna turn it green... Yeah, exactly. They're just gonna crank up some sort of neon green on it, and then you're like "No...!!" I don't want to know. I don't want to know. Do what you want to do on your device, but don't tell me about it.

**Kilian Valkhof:** \[laughs\]

**Nick Nisi:** I was gonna bring that up specifically, as like this is the time for users to really mess up designs with all of this...

**Jerod Santo:** Yeah. That's alright. Give the users the power back, why not? Until they can't find your button, and they're like "Your button disappeared", you know? It's lik, "Well, you turneded on that toggle."

**Nick Nisi:** Yeah... I mean, this is a total rabbit hole, but one thing I was just thinking of is I can turn any brand's color -- I can turn the YouTube logo this bright pink color, or this red color. Or right now I have a gray color. I'm running the Developer beta... Is that a security risk, that I'm no longer confident looking at a phone that that is the official YouTube app, or official whatever?

**Kilian Valkhof:** \[00:59:54.23\] So the developer beta can now also hide the app names, right?

**Jerod Santo:** Yes.

**Kilian Valkhof:** So I'm sure you could do a PWA with a bank logo, and no name...

**Jerod Santo:** For sure. We've gotta guess the right color. I mean, because it's your own device... Like, unless you hand your phone to somebody else, you can trust the color scheme on your own device, because you probably set it, right?

**Nick Nisi:** But it applies broadly to every app.

**Jerod Santo:** I know, but as a malicious actor, you'd have to guess the color of gray that you're using or something, in order for you to sneak on something that's not the actual YouTube app... Is that what you're saying? Like, I can have a non-YouTube app that looks like the YouTube app, it's just gray?

**Nick Nisi:** I don't know what I'm saying, honestly... \[laughter\] \[unintelligible 01:00:33.00\] But if I wanted to do that, like Kilian said, I would just have a website that loads the regular YouTube logo in hopes that it would apply the filter in the same way for whatever, and then it would just not stand out.

**Jerod Santo:** Right. Here's the flaw in that technique. Nobody installs PWAs. Come on.

**Kilian Valkhof:** That's true. \[laughter\]

**Jerod Santo:** Oh... Too bad. You almost had a good one.

**Nick Nisi:** So Kilian, what's coming up for Polypane? Any exciting features coming that you want to talk about?

**Kilian Valkhof:** So I released Polypane 19 roughly a month ago, like three, four weeks... And that was a major version. So major versions for Polypane - I have a completely arbitrary rule, but whenever I upgrade the Chromium rendering engine, that's also a new major version for Polypane. And then everything in between is just 19.1, 19.2, etc. But I wanted to release Polypane 19 in April, however, there was a bug on Linux where if you had a sufficiently fast Linux device, the Electron apps would crash when you maximized them. Now, this wouldn't replicate in virtual machines, because of some race condition, and them not being fast enough to trigger them, or whatever... So it took a while to get that reproducible and sorted by the wonderful Electron team... But that meant that my 19 release got pushed out, pushed out, pushed out, and now we're a month later and the next version of Electron just got released yesterday. So I'm in the middle of preparing the release of Polypane 20, so that we're back with the most up to date rendering engine, Chrome 126. However, that means that I haven't had the chance or the time to build cool, new features yet... But I'm just going to release it, because I think keeping that rendering engine up to date is worthwhile in itself. And Polypane users deserve a breather as well... Because if I just keep releasing ten new features every month, maybe that's going to be annoying for them if I just keep doing that. So I'm going to do a small release...

**Nick Nisi:** More...! We want more.

**Kilian Valkhof:** I have plenty of plans for the rest of the year, but this one's got to be small. One neat thing that I've built for this release is a very common accessibility problem that people find is that where developers think they're doing the right thing, but that actually ends up being annoying to users... And it's specifically - say you have a link with an icon in there. And then that link goes, for example, to the home page. So in that link, you have the text Home, and then you have an image of a cute little house. But because you're a good developer, you know that images needs alt attributes. So it's a cute little house, so you give it the attributes of home.

So we see that icon or that link, and it's a cute little icon, and home. It's clear, that's a link to home. But if you then go to that link with a screen reader, what the screen reader is actually going to say is "home home." It's going to add that alt text to the rest of the text of the title. And that's annoying. Do you want to go to "home home"? No, it should just say "Home."

\[01:04:13.14\] So I had to write something where for a given -- and that thing that's read out is called the accessible name. And I show that throughout Polypane; in the outline panel you have an overview of your headings and your links. That all shows the accessible name. So that's the name that gets sent to assistive technologies, and that's also the name that Google thinks your elements have... So that's the thing you should care about, not necessarily what you see on the screen. But I had to -- so I wrote a function that takes a string like that, and then figures out how much duplication or how much repetition is happening inside of the string. And that's actually a very interesting problem, because if you look at the sentence "home home", it's trivial to see that, yeah, it says home twice. But try programming that. That was -- it was pretty complex, but then that also made it fun... So I made something that walks along with the characters, and then as long as there's a match for this substring further along in the string, it keeps growing until there's no longer a match. And then it moves on to the next section, because you can have multiple repeating parts, and that's also not good... And then if there's no match, it just tries the next set of characters...

So I wrote that, and now I have a really cool function that gives me a percentage of the repetition inside a string, and then also the repeating segments. So now I can just tell people "Your accessible name says home twice"...

**Nick Nisi:** Nice.

**Kilian Valkhof:** ...which is one of those things where -- like, if you say it out loud, it's a super-small feature. Like "Yeah, thanks, browser. I see that, too. I'm not an idiot. I can see home home." But then actually converting that code is complex. But now it's something -- I use it in all the places where I show accessible names... And it also works for more complex repetition. So it actually is really helpful, and it also -- because it's a warning, it's much easier to see if you're just scanning through all your headings... So that's coming.

**Nick Nisi:** Very bold of you to not have AI on your roadmap in 2024...

**Jerod Santo:** I appreciate that, actually.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** He wrote an old-fashioned fuzzy string-matching function.

**Kilian Valkhof:** Yeah. AI is interesting... So my target audience is developers. And AI is notoriously bad at being correct... And so the combination of that is I could spend a lot of time building a super-fancy Polypane Copilot or AI assistant that you can ask questions to... But then if it gets one question wrong, a user is never going to use that feature again. And the probability of it getting it wrong at some point is 100%. So it doesn't make sense for me right now to work on AI features, because it would just be wasting time. Maybe that changes at some point, but there's other stuff I don't like about the way AI things are going right now... There's huge issues with copyrighted materials, there's huge issues, very huge issues with energy usage and sustainability, that I just don't feel comfortable with pushing onto people. I don't think that's going to be the right way to do this, so I'm waiting it out. And I think -- yeah, we'll see. I use GitHub Copilot, and it's very useful... But yeah, it does lie, it does come up with stuff that doesn't exist. And I can recognize that, and deal with it... But yeah, so it doesn't feel like the right time or the right thing for now.

**Nick Nisi:** \[01:08:24.05\] Yeah, definitely. I was mostly joking, and fulfilling an obligation to bring up AI on every show, just like Typescript and Vim... \[laughs\]

**Kilian Valkhof:** It's one of those things where --

**Jerod Santo:** He's a three-trick pony.

**Kilian Valkhof:** \[laughs\] So I'm of two minds, of like "Should I write a blog post on the Polypane blog?" where it's essentially like "We're not going to do AI for now, for these reasons." So quality of the answers, sustainability, copyright issues... Is that a thing that I should do? I feel strongly about that, and what I've seen from the users that I interact with, they're mostly in this camp as well... But then the internet at large seems to think that AI will solve all our problems, and we don't need junior developers anymore... So I don't know. What do you think?

**Nick Nisi:** It'll kill your VC prospects if you do write that post...

**Jerod Santo:** He's bootstrapped and profitable right now... Who needs VC?

**Kilian Valkhof:** I haven't needed a VC in the last five years.

**Jerod Santo:** I think if you feel strongly about it and you'd to stake a claim, then you should absolutely write that blog post. It's better than people just thinking maybe you're sleeping on it, or are apathetic... You're actually like "No, this is our stance." Plus, you can also just give that to people like Nick when they ask you about AI features, and be like "Here's our stance on AI." \[laughter\] I don't know, I would write it if I were you. Actually, I probably wouldn't, because I always talk about writing stuff and I don't write it... So if I wouldn't write it if I were you, but if I were not me being you, if I were actually you, you should write it. Yeah.

**Kilian Valkhof:** Yeah. I mean, then again, that blog post will be less inflammatory than if I wrote a blog post that's "Here's why we don't use TypeScript."

**Jerod Santo:** Yeah, that one you need to write, and you should name-drop Nick Nisi specifically in it. Then we'll have a good old-fashioned flame war.

**Kilian Valkhof:** \[laughs\]

**Nick Nisi:** I think it's fine... It's fine. \[laughter\]

**Jerod Santo:** \[unintelligible 01:10:28.13\]

**Nick Nisi:** One question I did want to ask is - you said you've been working on this full-time for a couple of years now... And so that got me thinking. If this is the main thing you're working on, how do you stay on top of features that are good for developers, web developers, specifically, because you're not technically working on a lot of web development if this is your full-time thing? But then you are, because this is built on a lot of web technologies... So then it got me asking, can you use Polypane to build Polypane?

**Kilian Valkhof:** No, and I hate that.

**Jerod Santo:** \[laughs\] Why not?

**Kilian Valkhof:** Well, because then it will be websites inside websites, inside websites, inside websites... But yeah, so one of the things in Polypane is that whenever you're hovering over something, you can just press option, and it will inspect that element for you. It'll give you a tooltip, and the image dimensions, and the tooltip will have the color and the dimensions, and if it's \[unintelligible 01:11:33.13\] and all these things that are super-useful to quickly see... And I got used that myself, and it's incredibly frustrating. So I do it all the time, and I'm like "Why isn't it working? Oh, wait..."

So yeah. So I do stay up to date, because I need to implement a lot of this stuff. So in the past week I implemented support in my dev tools for starting style, which is a new thing that lets you animate things when adding them to the DOM, which previously wasn't possible without JavaScript, where you would add them to the DOM, but they would be hidden, and you would add a class name after it's been added to the DOM, but not too fast, because then it counts as the first page... Lots of complexity.

\[01:12:25.20\] Now you can just say "This is the style, but this is the starting style. And the starting style was opacity zero, and the regular style's opacity one, and there's a transition." And now when you add that element to the page, it will automatically fade in. And that's super-nice, and I needed support for that in the dev tools, or I wanted support for that in the dev tools... So I needed you to build that. And in order to build that, I need to understand how it works. In order to understand how it works, I need to build a little prototype that I can then also use for testing the feature. And the result is that when I launch Polypane 20 early next week, that will be one of the first browsers that has support for starting style in the dev tools. Because Chromium doesn't have that yet.

**Nick Nisi:** Nice.

**Kilian Valkhof:** So that's how I stay up to date. I need to build all this stuff. \[laughs\]

**Nick Nisi:** That's awesome, and sad, that presumably the number one Polypane fan can't use Polypane for their day to day work... \[laughs\]

**Kilian Valkhof:** I mean, I can use it for the website, which I spend a lot of time on as well... So it's not a total loss. But it is literally a daily frustration for me.

**Jerod Santo:** You could have had a free license too, I mean... It's such a shame. \[laughter\]

**Nick Nisi:** So Jerod, you've been using it for 45 minutes.

**Jerod Santo:** Longer than that now. Almost twice that. I've been clicking around the entire show. That's why I've only been halfway paying attention. No offense, but I'm kind of engrossed. Yes, you were gonna say something beyond just the fact...?

**Nick Nisi:** Yeah, I was gonna ask what - is there some killer feature that might entice you to keep it, or add it to your collection of web browsers on your...

**Jerod Santo:** My repertoire? I don't know. I think it's mostly just a lot of nice little things. Obviously, using Brave monthly is free, so it's going up against that, whereas Polypane - it's going to cost me nine bucks a month on an individual plan, 39 bucks a month on a business plan... So anytime you're competing with free, you have to provide a lot of value, I think. And it's definitely a lot of little things that I'm enjoying even just clicking through on the debug tools, and just toggling them on and off, and just seeing what happens is pretty cool.

**Kilian Valkhof:** Again, I haven't even mentioned that there's 14 different debug tools.

**Jerod Santo:** I know that, because I've been clicking through them as we go, and I'm like "Holy cow, there's so many things." Simulators... Yeah, this option click thing that you just told us about is totally rad. And I can see the accessible name there for some of our stuff... At the end of the day, it has a lot of stuff that I like as a web developer... And so definitely interested. I'm gonna use the -- I've got 13 and a half days left on my free trial, and I'm gonna keep using it and see at the end of it if I'm like "You know what - it's worth paying for", or maybe not.

**Kilian Valkhof:** Yeah, that's the way to go.

**Jerod Santo:** So the jury's still out. Yup.

**Nick Nisi:** Nice.

**Jerod Santo:** Of course, Nick, you'd probably just have your boss paying for it, right? Easy decision.

**Nick Nisi:** Me?

**Jerod Santo:** Yeah.

**Nick Nisi:** I have been paying myself --

**Jerod Santo:** Out of pocket?

**Nick Nisi:** Out of pocket. I've just looked up - since October 28th of 2021.

**Jerod Santo:** Don't work at a well-funded company, Nick?

**Nick Nisi:** Going up against free on those things, so... \[laughter\]

**Jerod Santo:** Alright, alright... I assume, Kilian, that a lot of your customers are businesses, aren't they?

**Kilian Valkhof:** \[01:15:51.03\] I mean, I have a pretty healthy mix of freelancers, individual developers... I don't always know if they pay for it themselves or their employer pays for it. Yeah, I think a fair number do pay for it themselves, for various reasons. There's "The boss doesn't think it's worth it", all the way to "I'm afraid to ask", to "I want to use it for personal projects, so it's mine. It's not theirs."

**Jerod Santo:** Yeah.

**Kilian Valkhof:** And then on the other hand I have enterprise customers that just take many licenses at once... So it's a pretty healthy mix. I do try to add educate individual developers about business purchases, because if I don't, they'll compare it to their Spotify Premium license or account.

**Jerod Santo:** Yeah, exactly. Anytime you're like "Compare it to a cup of coffee", it's like "Don't do that. Don't compare it to your cup of coffee."

**Kilian Valkhof:** No. So I'm trying to help them, one, make the case towards their employer, but then also help them realize that if they save probably 10 minutes per month using Polypane, then it's already paying for itself. So that should be an easy equation, at least for your manager. For your manager, it should be a no-brainer. And then if it's worth it for you personally, that's a different discussion, and that's also not something I can tell people, because it's your money. But if it's your manager, they're already paying for your time. So if you get more done in the same time, you are more valuable, and you're probably significantly more valuable than the $9 per month that a Polypane license costs. So that's a pretty easy equation to make.

And then yeah, it lends for some, and it doesn't lend for others. And it also differs, because of course, at least here in Europe, you can't just get rid of people that quickly, but you can get rid of tooling quickly... So if budgets get tighter, then it's easier to get rid of tooling than to get rid of people. So yeah, so you do see that; if there's a slight economic downturn, like the beginning of COVID, or late last year, when all the big companies decided to fire everyone because of AI, or whatever... Yeah, so I do see that, because tooling is just one of the things that gets called first... But yeah, other than that, a pretty, pretty broad spread.

**Nick Nisi:** Yeah. I notoriously -- I like paying for software, I'll be honest. If I want to invest in something and learn all of your shortcuts, the thousands of shortcuts and all of that...

**Jerod Santo:** So many shortcuts.

**Nick Nisi:** Yeah. Then I want to have a safe, a warm and fuzzy feeling that it's going to be around in a year. For free tools, that's less the case, in a lot of situations. So I like that personally, just knowing -- like, there's a lot of hard work that went into building something this; I would love to have an idea like this someday, and do it, too... Not a browser, but...

**Kilian Valkhof:** I mean, so I also see this, that as -- like, it's a subscription and that's annoying, but it's also a mutual promise. As long as you keep using it, I'm going to keep updating it, and this is the way to make that work. And because it's a browser, there's not really another way to make that work, I think... But I fully intend to keep my promise for many, many years.

Yeah, I usually jokingly say, when I launched version one, I had a roadmap of five years' worth of features. And now we're five years along and I have a roadmap of five years' worth of features.

**Nick Nisi:** Nice.

**Kilian Valkhof:** So it never ends.

**Nick Nisi:** \[01:19:52.24\] Yeah. Another tool I was just thinking about this with was Raycast. Raycast is a tool that I use day in and day out. I was an Alfred user for a long time, but I liked the appeal of Raycast, because you can build extensions in JavaScript, and it's got a lot of -- it just sherlocked a lot of other apps that I was using, things like window management and all of that. But there was no way to pay them, so I felt like "I'm typing in all of this data. Am I the product here? What is going on?" But then they came up with that, and actually made it appealing with syncing, and I have at least three Macs that I'm always thinking everything to... So day one that was an immediate "Yes. I can finally support it." I don't feel like I'm the --

**Kilian Valkhof:** The product.

**Nick Nisi:** ...the value here. Yeah, the product. And yeah, so I like that a lot. One more thing I wanted to bring up is we talked about this, we talked about browsers on Changelog & Friends quite a while ago. Jerod, Adam and I. And this is where I brought up Polypane in the beginning, I think... And after having presumably heard that show, you said you'd love to come on and teach us how to properly say it... Because I think that Adam specifically was having these problems.

**Jerod Santo:** We kept saying Polyplane, didn't we?

**Nick Nisi:** Polyplane, that's right. \[laughter\]

**Kilian Valkhof:** Yeah, yeah. So this is one of those things where English isn't my native tongue, but in Dutch saying Polypane is very natural, because of the repeating p. So apparently in English the L in the middle really screws things up and makes it very difficult...

**Jerod Santo:** It does. I practiced a few times before hopping on here, just to make sure I didn't call it Polyplane in front of you... Because I didn't want to do that. I didn't want to offend you that way.

**Nick Nisi:** I was hoping you would, so I could bring this up. But now I just had to \[unintelligible 01:21:37.17\]

**Jerod Santo:** Oh, I've been on top of it the entire time, you know? And now that I've found the pain pun...

**Kilian Valkhof:** It's easier, right?

**Jerod Santo:** I'm stuck now. Yeah, I like Polypane now. And obviously, using it, the name does make sense. I mean, it's all about the panes, you know? But yeah, just as a native English speaker, for some reason I see that word and I just say Polyplane.

**Kilian Valkhof:** It is what it is.

**Jerod Santo:** It is what it is, you know?

**Kilian Valkhof:** So there is one other way to pronounce it, which isn't the right way... But poly is Greek. So you could also use the Greek pronunciation. So you could say Polypane.

**Jerod Santo:** Oh, Polypane.

**Kilian Valkhof:** Yeah. So it's like Persephone, the name...

**Jerod Santo:** It's kinda cute...

**Kilian Valkhof:** It's also like -- it's not Persephone, it's Persephone. Someone made me aware of that... "You could say it this way." It's kind of fun. But then even fewer people would get it... So it's just Polypane.

**Jerod Santo:** Fair enough. I like Polypane. I think it does a little bit remind me of polyps...

**Nick Nisi:** I was gonna say that... \[laughs\]

**Jerod Santo:** ...which is not a good association. So I'll stick with the pain. The pain factor. But cool tool, man. Congrats on the success. It's not easy to build what you've built.

**Kilian Valkhof:** If you want, I have one more feature, one more thing that might win you over, Jerod...

**Jerod Santo:** Okay...

**Kilian Valkhof:** ...and that's called Portal. And I launched that earlier this year.

**Jerod Santo:** Okay. Is it a video game?

**Kilian Valkhof:** Portal is a video game, but Polypane Portal is a different thing. So the major downside of Polypane is that it runs Chromium. Not that it runs Chromium, but that it runs only Chromium. And we're all very good web developers, so we don't just test our web page in Chromium, but we also need to test our web page in Firefox...

**Nick Nisi:** Totally.

**Kilian Valkhof:** ...and Safari, and on the Android phone that you never have charged, and on your iPhone that is now in neon blue... And those things you still need to do one by one, and that's super-annoying. So you either don't do that, or you half-ass it, or you wait for users to complain and tell you like "It doesn't work on my Android phone from three years ago." Like "Yeah, I have one of those somewhere..."

**Nick Nisi:** \[01:24:00.02\] All of the above.

**Kilian Valkhof:** So what if that was easier? And that's what Polypane Portal is. So what Polypane Portal does is it opens a proxy for your localhost, and it makes that available on a public URL.

**Jerod Santo:** Okay.

**Kilian Valkhof:** And then it shows you a QR code for it, so you can open that in all your other browsers. You can open that on your phone, you can open that on your tablet, and you can have them all spread out on your desk. And then anything you do inside Polypane happens in all of the devices around you.

**Jerod Santo:** Simultaneously?

**Kilian Valkhof:** Simultaneously. So you can click, you can scroll, you can type...

**Jerod Santo:** Oh... That's a cool demo.

**Kilian Valkhof:** You can even hold Option inside Polypane and it will show the pop-ups in all of the devices. And you can even edit the styles with the Polypane Elements panel, and it will change the styles in all the phones you have, and all the devices and browsers you have connected. So that means that you get to touch everything in one go. So now you can actually test everything, rather than having the aspiration to do so.

**Jerod Santo:** Very cool.

**Nick Nisi:** I'm giving a talk in two weeks, and I'm wondering how I can exploit this for having everyone --

**Jerod Santo:** For much gain?

**Nick Nisi:** Yeah.

**Jerod Santo:** Yeah, you just put the QR code up there, and then they all load it on their phones, and then you take control of their phones, and click stuff...

**Nick Nisi:** Install a PWA...

**Kilian Valkhof:** Well, so you can't really install something, because you need to stay on the domain. But if you have a URL with "Never gonna give you up"...

**Jerod Santo:** I was just gonna say, rickroll 'em. I mean, that's just too easy.

**Kilian Valkhof:** You can have them go to a page and be like "Oh, you can see this and this now", and then click a link somewhere and boom, everyone has --

**Jerod Santo:** Boom...!

**Kilian Valkhof:** ...everyone has a rickroll on their phone.

**Jerod Santo:** Make sure the conference Wi-Fi is solid and you're good to go. That's how that one backfires, is just loading spinners the entire way...

**Kilian Valkhof:** There'll be like one guy in the back that's like "Never gonna give you up..."

**Jerod Santo:** Yeah... \[laughs\] Yeah, he'll be on the cell signal instead of Wi-Fi, and he'll load it up. That is cool. That is cool. So is that Polypane Portal - this has server-side implications for you?

**Kilian Valkhof:** Yeah, yeah. So there's two ways of running a portal. One is on your local network, and that means that it stays on your device, and it just makes it available to all the other devices in your same network, and it shares your IP address. So that's essentially useless outside of the network. And then the other is a public URL. It's like a funny three-words sentence, \[unintelligible 01:26:35.11\] kind of like a for sale preview or a Netlify preview...

**Jerod Santo:** Sure.

**Kilian Valkhof:** And that's a relatively short-lived server that then proxies everything to your device.

**Jerod Santo:** Very cool. Yeah, I mean, you're getting there. You've impressed me. I'm not sure if you sold me, but you've certainly impressed me.

**Kilian Valkhof:** Excellent.

**Jerod Santo:** Nick, anything else you wanted to mention before we call it a show?

**Nick Nisi:** No. Kilian, we'll have you back on when you do the TypeScript rewrite, and... \[laughter\]

**Kilian Valkhof:** It'll be just one and a half hours of me crying, like "Why...? Why...?!"

**Jerod Santo:** While Nick laughs... \[laughter\]

**Nick Nisi:** No, I think it's a really cool tool. And obviously, I've been using it for years now, and really enjoy it, and... Yeah, I'll give you the last word.

**Kilian Valkhof:** Yeah, everyone can try it out at polypane.app, and let me know what you think. I genuinely enjoy getting all the feedback.

**Nick Nisi:** Awesome. And thanks so much. Thanks, Jerod, for coming on as well, and we'll catch you next time.
