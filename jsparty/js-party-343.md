**Kevin Ball:** Hello, JS Party people! Those lovely, familiar BMC beats mean that this is another episode of JS Party, your party about JavaScript and the web. I'm Kball, I'm your host this week. I'm joined by my friend, Jerod, Jerod Santo. How are you doing?

**Jerod Santo:** I'm doing well. How are you doing? I am excited for this, actually. So Jerod, in case y'all don't know, is behind every JS Party episode. He's one of the original Changelog folks... Even when he's not hosting, he's got his ear on what's going on. And so today, I'm excited to actually turn the camera around, take a deep dive into Jerod. Sometime last year we did a dive into another one of our panelists' toolbox. We went into Nick Nisi's toolbox, and we covered a bunch of fun stuff. Nick is a tool geek. I think we could have spent that whole episode looking at his vim dotfiles, or other things like that. But today, we're going to dive into Jerod's toolbox, and I'm kind of a little excited to see how different it is, given that Jerod is not just a developer, but he's also a business owner, a long-time podcaster, all these other things. So Jerod, let's go.

**Jerod Santo:** I'm excited, man. I am your guinea pig, your lab rat, I am a dead frog covered in formaldehyde, ready to be dissected by you, Kball. Let's go, dive deep.

**Kevin Ball:** Okay. Well, so let's start with coding, because that's what everybody here has in common.

**Jerod Santo:** That's where it all starts, man. A hundred percent.

**Kevin Ball:** That's where it all starts. So what tools do you use?

**Jerod Santo:** Okay, so long journey... I mean, the text editor is the primary tool that I think of when it comes to coding. Old school vimmer - I've told this story before - but I was forced by my college teacher, my programming 101 teacher, and 102, to use vim. He said "You're going to SSH into a Unix box, and you're going to code in Vim." He said something like "Pico or Nano are great editors if you are writing an email to your grandma. But if you're gonna write code, you're gonna use vim." And so I learned vim, not because I saw some fancy video on YouTube, but because I just didn't have any other choices, Kball. I had to learn vim if I wanted to pass my class.

**Kevin Ball:** I mean, same, to be honest. I learned vim -- it was a Fortran class, I think, taken as part of my either EE, or physics, or something like that.

**Jerod Santo:** Yeah. So I don't know if I would have made it over that hump, because it does have that steep initial learning curve, had I had a choice. But I did have a choice, I made it over the hump, and my college teacher was very proficient in vim, and he would live-code in class. And we would watch him and be like "Oh wow, you can really move fast if you get good at this thing." So that was also motivating.

So I learned vim, used it for many years. I still use it off and on all the time, mostly in the terminal, mostly SSH into a machine. That's my go-to in-terminal editor. However, I do like a nice graphical user interface specifically for text editing, and so I picked up TextMate back in the day, eventually moved over to Sublime Text, and Sublime Text 2... Never hopped on the VS Code train, although I have installed and I have used it.

I used Sublime Text for a very long time, and nowadays, I have recently, within the last six months, switched to Zed, as I find it the only other Sublime Text alike that is fast enough, and light enough that it feels Sublime-esque. Sublime was always just faster than all the other ones. And VS Code started fast, and then has slowly gained, in my opinion, some weight... And so I've been using Zed, and really -- I still keep Sublime Text launched, just for one-offs. You still can't beat it, in like I'm just gonna open up a buffer, and do some stuff, and do some text manipulation, and then just get rid of it; it's still faster. But for project work, I'm chilling in Zed.

**Kevin Ball:** So let's dive into Zed a little bit. What does it look like, for somebody who hasn't used it?

**Jerod Santo:** Zed is very much an editor in the ilk of VS Code or Sublime Text. I mean, it's gonna look like that - project file directory on the left, buffers on the right... Here I am, stuck in the middle with you... I don't know how you would describe it; it's a text editor. It's built by the major developer that worked on Atom, inside of GitHub, Nathan Sobo, and it's built from the ground up to be really fast. So that's why I appreciate it. It also has fancy things built right in.

But very much, I think, feature for feature, it's gonna feel the most like VS Code, but in my opinion, a little bit faster, a little bit better. So I've been using that open source now. So that's rad.

**Kevin Ball:** Nice. What's the plugin story for Zed?

**Jerod Santo:** \[00:08:04.15\] Well, now we're gonna get into Jerod's toolbox... And I am not really a plugin guy. So there are plugins, I have a few, I installed some stuff... It's fledgling, I would say. It's nowhere near what VS Code has. So if you are a plugin person, nowhere near what Vim has, or NeoVim, just because it's a pretty new editor, and a pretty new community, and they've been building the extensibility story after they built a few of their other stories up. So it's like bare bones in there, and a lot of first party stuff. So they're trying to batteries-include that sucker. So a lot of it, I just don't care about; it's built in. But if you are heavy into plugins and extensibility -- like, snippet support just landed recently, which was holding me off for a long time, because I do have some snippets that I use commonly, and I just couldn't even use them in Zed... That's there now. So like it's getting there, but yeah, plugins are probably the current thing that's limping along in that ecosystem, just because it's a pretty new editor.

**Kevin Ball:** And I see on their blog, their latest blog post is "Introducing Zed AI." Are you using the LLM-based coding tools inside of Zed?

**Jerod Santo:** Yes. So they first built Copilot right in when Copilot kind of got big, and then they realized there's more to life than Copilot, and so they made it to where you can switch in different models, different tools... And then they've just recently launched like a first-party Zed AI. So you're plugging into their deal... I think it's gonna be a paid arm. It is a business, so they're trying to find ways of making money. I think Teams is one of those ways, and I think that AI is another one of those ways that they'll make money off of this editor.

I just plug it into LLaMA 3.2, and so I do use LLaMA inside of Zed, but you can use whatever model you like. ChatGPT, Mistral etc.

**Kevin Ball:** Alright. Well, so staying on the software train for a little bit, any other tools outside of editors that you find yourself going to?

**Jerod Santo:** The Terminal. I mean, I'm a big Terminal guy. So we could live in the Terminal for a while, if you want to.

**Kevin Ball:** Do you use Tmux? Are you one of those who are like "Oh, I need my custom Terminal setup"? What does it look like?

**Jerod Santo:** Not so much anymore. I was definitely a tweaker and a configurator as a youth, when I had the free time and the desire to like really make my system look cool. I used to have one of those Terminals that would come down from the top. Did you ever have this one? Iit was a hotkey away - they're probably still out there - and it was like a heads-up display for your Terminal. So you would just like hit a hotkey and it would slide down over the top of your other stuff and you'd be like coding, and then you'd hit it again and it'd just slide back up again. And when I worked in an office, that was cool, because like people would see that and they'd be "Wow, this guy's hardcore."

I don't care about such things anymore... So I use built-in Terminal.app. I don't have iTerm, I'm not using WesTerm, or Kitty, or any of the fancy stuff that Nick Nisi thinks is rad. They are rad, I'm sure, but Terminal.app is just good enough for me.

I'm a long-time Tmux user, and I use Tmux mostly via a configurator tool called Smug, which if you have been around long enough, you're a Tmux guy, right?

**Kevin Ball:** I am.

**Jerod Santo:** Yeah. So do you use a configurator? I know they're like a Tmux desk sessions thing...

**Kevin Ball:** No, I have an old Tmux config that is like embedded in my brain and fingers, that I have passed down from machine to machine over probably decades at this point.

**Jerod Santo:** Yeah, most of my configs are kind of set in stone, because I'm just like set in my ways... So I don't really need to -- I'll add a new function into my BashRC, or whatever it's called, ZSHRC at this point, once a year; I'll add a new function and be like "Oh, that's a nice quality of life improvement." But I've got so much built up over the years that I don't think about it as much anymore.

\[00:11:57.06\] However, Smug is a Tmux configurator... So there's also Tmux Sessions, which is a plugin for Tmux that does a similar thing, and there's an old Ruby gem called Tmuxinator, which is where I got started. And it's basically like "Define your Tmux sessions in a YAML file or in a list of YAMLs", and you can start up Tmux with all your settings into a project, bam. And then you can suspend it, restart it, et cetera, et cetera. And so Smug is now basically a rewrite of Tmuxinator in Go, which means universal.

**Kevin Ball:** It's actually fast?

**Jerod Santo:** Yeah.... Well, not just that, but it's not going to -- you don't have to do the whole gem file thing. There's no gem install, you don't have to know which version of Ruby is this... "Oh, I've got to get a different version of Ruby..." Universal binaries for the win. I think it's just like brew-install Smug... And I use Smug to control Tmux, and then you're inside Tmux, obviously. But my Tmux is pretty basic, you know? It's just like a couple open - not tabs; what are they called?

**Kevin Ball:** Panels...

**Jerod Santo:** Yeah, a couple open panels, switch between them... Just basics. But I do use it all day, every day.

**Kevin Ball:** There is something interesting there in terms of -- I feel like being a developer, you have to be learning all the time. But I have a bandwidth for how much I can learn in any particular time... And stuff like my tools - it only changes very slowly, because it's good enough.

**Jerod Santo:** I agree, and I think it's the kind of thing -- I think the toolbox analogy is really fit, because when you're first getting started, you've got like this empty box, and you're like "Okay, I need a bunch of tools." And so you go out and you find them, and you test certain ones, and you find the one that you like... And then you have to learn how to use that tool, and you configure it, and you tweak it, and you customize it. And so it's like, "Now I have this tool." You're not just gonna throw that out. You're gonna hold onto that sucker, and then you're gonna go find another tool, and eventually your toolbox is kind of full... And at this point in my career, and probably yours as well, it's like, I might change a tool here or there, or tweak one like every quarter, or once a year, or... You know, I get excited when I have a new tool. I'm like "Hey, I grabbed one", because I just -- I've got a full toolbox. I don't really need to be acquiring anymore.

**Kevin Ball:** Absolutely. I will say, the sort of rise of the AI-assisted coding stuff, and how now with something like Claude or Sonnet and things like that - it really is good enough that if you don't start figuring out how to put that in your toolbox, you are getting left behind... So that's been a forcing function for me.

**Jerod Santo:** Me too, and I'm probably slightly behind the curve, even from you, on that... I am using them, but I'm sure I'm not fully leveraging -- because I haven't tested all of the different ones and made sure I'm using the best one. I haven't tried Cody, I haven't tried Claude... I have tried Cursor; I don't want to -- maybe get into AI later. But I've tried a bunch of these things, but I'm also kind of like a vanilla LLM user at this point. Kind of also letting some of it shake out...

**Kevin Ball:** Totally.

**Jerod Santo:** And these funded companies build the tools better, to where it's like "Okay, this one's amazing. Go get it", you know?

**Kevin Ball:** Alright, so we've talked about terminals, we lived in the terminal a little bit... Anything else that are go-to's? Do you have -- maybe let's get into dev frameworks and coding languages.

**Jerod Santo:** Sure.

**Kevin Ball:** Do you have a go-to for quick scripts, versus product, versus what have you?

**Jerod Santo:** Yeah. So Changelog.com is all Elixir. So it's using the Phoenix framework. I've been maintaining that codebase and advancing it since 2016, which is probably the longest single codebase of my career. As a contractor, I've worked on projects and then moved on, or - I think I've maintained something for a few years... I did have long-term customers, so maybe like three or four or five years would be like the longest I worked on a single codebase... But I've been on this one since 2016, so that's coming up on eight years, I guess... And it's all Elixir in the backend, and HTML-oriented. I'm very much an HTML-oriented web developer, with JavaScript sprinkles...

\[00:16:03.07\] And that's the way I like it, and that's the way I've written it, and that works just fine for me. There's no SPA framework in the frontend of Changelog.com. And that's languages. Now that's for, I guess, product. That'd be a product, right?

For one-offs and scripts, I still usually just start with Bash, and then go immediately to Ruby, as soon as I'm outside of Bash. I just can't get more expressive. You can do a lot in Elixir, and I have like two Elixir scripts I wrote, and I'm like "There's just more ceremony here." And Ruby, for text manipulation, and looping, and command line stuff, and shelling out and getting a result, and then... I know I've spent time with sed and awk, and I can do all those things, but Ruby for me is just way faster to get that stuff done.

**Kevin Ball:** Totally.

**Jerod Santo:** I still -- even if I have to do some math that's not immediately obvious to my head, I just go to the terminal, hit \[unintelligible 00:16:56.16\] and there I go.

**Jerod Santo:** Yeah, seriously.

**Kevin Ball:** It's so fast.

**Jerod Santo:** It's the closest you get to your thoughts becoming code. Your pseudocode is basically like add a dot here, and some curly braces, and now it's actual code. And for me, that's just probably never gonna be replaced, also because I've got so many years writing that language before I went to Elixir, that it's just so easy to get stuff done. So yeah, I've got a ton of Ruby scripts just all over my hard drive.

In the terminal, I guess one other thing I didn't mention, a very cool tool that I added in my toolbox last year is Atuin. Have you heard of Atuin?

**Kevin Ball:** I have heard of it. I have not added it to my toolbox yet. So talk through it.

**Jerod Santo:** Yeah, this is a very cool one. It's basically like - I like a tool that just upgrades your life and doesn't require anything else. Like, there's no learning curve, there's no adoption really... This is a shell history upgrade, basically, built by a gal named Ellie Huxtable. We've had her on the show a couple of times. She's web smart, and a great, great user experience person. And basically, the up arrow or the control R, searching your shell history... If you've done that, which we all have a hundred times - like, this just basically improves that in every possible way.

And so you install it, it runs in the background, and it takes over certain keystrokes in your terminal, in order to have fuzzy search on your shell history, a lot like FZF would be, if you configure that yourself, but it's very pretty as well... And then it also offers advanced things. I don't care about like syncing your history across machines and all this kind of cool stuff... I'm a one-machine person, so I don't really have that problem... But if you had a desktop and a laptop and you went and shared shell history across everything, she has a service that encrypts that, and synchronizes it around, and... It's an awesome cool. It also provides stats, which is fun. You can look at your most used commands and stuff like that.

**Kevin Ball:** So for someone who absolutely depends on Ctrl-R or Cmd-R just working, is it a drop-in replacement?

**Jerod Santo:** Yeah.

**Kevin Ball:** Okay.

**Jerod Santo:** There's one little thing that it changes, which is really just like an orientation thing that took me a minute, which is when you Ctrl-R, Cmd-R, whichever one it is, which - for those who haven't done this before, this provides backwards search of your recent commands, so I can hit Ctrl-R and type L, and it'll be like LS; L, something else, you know? And you can like pick that one and just hit Enter and it'll execute. And so this is very handy.

When you do that in classic terminal, it'll just like do it right there where you are, and when you do that with Atuin, it will bring up kind of a reverse chronological list... Not reverse chronological; reverse last in/first out list, your most recent used, going upward, that match the current search. And because of that, it moves your search down to the bottom of the screen. And so it literally just moves it from where it was, to the bottom, and that just took me maybe a couple of days to -- it bugged me for a day or two, because I'm used to it just being... I'm staring at it, and now it moves it down to the bottom. Other than that, which is a tiny thing, it's a drop-in replacement, and it's better in every conceivable way. So I just installed it and run it and haven't looked back.

\[00:20:17.11\] So try that one out, and maybe if you do have any issues that it changes -- because those of us with longstanding habits, it doesn't take much to be like "This ruined my life in one minor, nitpicky way", and that's sometimes enough friction to be like not worth it for us... So I'd be interested to hear your results... But man, I installed it and have not looked back.

**Kevin Ball:** Alright. Well, I just installed it. I'll let you know.

**Jerod Santo:** Cool.

**Kevin Ball:** It doesn't appear to have broken my Cmd-R. Ctrl-R. So...

**Jerod Santo:** So that's a big one that I installed probably within the last year. Other than that, I'm pretty vanilla terminal tools, besides Tmux, Smug, Atuin.

**Kevin Ball:** Let's talk maybe about some of the other non-software things then... Because you have this other side of -- you're a small business owner, you're a podcaster for longer than almost anyone... What are your go-tos? Let's start with podcasting, maybe. What are your go-tos there?

**Jerod Santo:** Sure. So in software world, as you know, Kball, we use Riverside to record, and that's a web app that we pay for. It's a software as a service web app that puts I think almost every newfangled web technology into play in order to have a really nice experience for us. And that handles a lot of the problems that we used to have to work around. It used to be a lot harder to podcast. We had Skype, and we had multiple enders, and we had this, that, and the other thing, call recorders, blah, blah, blah... Riverside has really simplified the tools that we need. And we've been using that for a couple of years now, pretty successfully.

There are competitors to that, which are also good... So lots of cool tools in the podcasting space. And then we take the recorded stuff and we do all our editing in Adobe Audition. Now, there's a lot of tooling around that now that didn't exist before as well, around editing specifically, whether it's Descript and the ability to read the transcript, delete words out of the transcript and it edits the audio, which is just a really cool idea... But for us, we've been doing it this way for so long that we just prefer kind of the power and control that we have in Audition, that you give up when you use some of these online tools for editing. So everything goes into Audition, all of our files are synced via Dropbox... So we don't think about Dropbox very often, but it's just a core piece of our business, 100%. Long-time users of that.

And then everything else in terms of publishing is all just self-built. So I built an open-source web app, the one I mentioned, that does everything from like we have an mp3 file, to completely published, syndicated, promoted, blah, blah, blah, blah, it's all just coded up. So a custom tool.

**Kevin Ball:** Gotta love those custom tools.

**Jerod Santo:** Oh, yeah. Well, the nice thing about them is that they're custom. \[laughs\] So it's both a gift and a curse, right? So we can do whatever our hearts imagine. And we've done some really cool stuff. Our transcripts get synchronized over to GitHub, and they're open-source on GitHub, and so you can actually help improve them there... And then if you improve them there, they get synchronized back, they get sucked back into our database. Stuff like that. We do a lot with chapters and with mp3 metadata that you couldn't do elsewhere... So we've been able to really customize it to be exactly the way we want.

And then the curse is, if we want something new, we've gotta build it. You have to build it all, you know? If it's broken, I've gotta fix it. If we want it, we've gotta build it. And so it's that onstanding gift and curse of custom software. It's really paid dividends, though. We were on WordPress back in the day... And look at us now. I mean, we could have been a WP Engine customer. We would be so mad right now.

**Kevin Ball:** \[00:24:13.13\] Oh, man. Well, and you clearly have not fallen into the common developer challenge of rewriting the platform more often than you publish.

**Jerod Santo:** No. We couldn't do that because we publish five or six times a week. I'm not that fast of a coder. But we definitely thought about doing some rewrites. And of course, when you built something eight years ago, it has its warts. The technologies that you pick are no longer best in breed... I actually think I picked a pretty good tech for this, but... I'm actually very pleasantly surprised that I don't have any sort of itch. I think there was once when like "Should we go JAMstack with this?" Because it's so static content; a lot of it's static content. And so pre-built HTML makes a lot of sense.

And we're not doing that. We're doing caching. We do some stuff, like our mp3s get pushed to R2, and then CDN from there. So there are -- and our feeds as well, which are just massive XML files at this point... Because we want to put all of our episodes in there. So we have like 12-megabyte XML files that we're serving up, which does get slow, even with a fast programming language, if you're dynamically producing that each time.

So we pushed those off to R2, and then we serve them from the CDN from there. So we've done a few things that are JAMstack-ish, but I definitely have thought, once or twice, "Maybe we should just switch to an entire JAMstack approach." And it's never been worth the lift, because there's so much surface area to the app at this point. Like, you think it's a simple app, and it is, and then you go look at all the different stuff it does, and you're like "It's just a lot of stuff here that I have to rewrite."

**Kevin Ball:** It's simple in the surface area it exposes to people, but there's a lot of complexity under the covers...

**Jerod Santo:** Totally.

**Kevin Ball:** At the risk of diverging too far, are there features or functionality that you want to add to the app, that you're looking for in the future?

**Jerod Santo:** Well, we definitely want to provide -- I think there's definitely some stuff we could do with our transcripts and our episodes that are language model-focused that would provide value. Similar to just like a really upgraded search functionality, where you can say questions like "Have they ever talked about JAMstack on JS Party?" and just get an answer. Versus "I'm going to go search."

We did have somebody who built a thing like that, but it was more like "Talk to an LLM version of Jerod and KBall", and with our personalities. But the end product, you play with it for five minutes and then it's done. You're like "Okay, that is what it is." But I think having a librarian, so to speak... Because we have thousands of episodes now, and we get questions like "Have you guys ever done this show?" and I have to go find it through the search functionality, or not. And then be like "I thought we did, but I can't find it." I think we could definitely build something there. That's a big one that would be cool, but just a nice to have.

And then one thing that we really want to do, and we have taken steps towards with our custom feeds, but haven't gone totally, is like bringing our membership program completely onto the site, and off of the Supercast, which is another tool we use for our memberships. That would be cool.

**Kevin Ball:** That would be cool. Yeah, complete custom, put up filters, maybe LLM-based filters... Is this about this, or that?

**Jerod Santo:** Right.

**Kevin Ball:** Then you get real expensive, so they've gotta be paying.

**Jerod Santo:** Right. Yeah, exactly. I did build custom feeds this year, which was something that our subscribers have asked for for a very long time. One small wrinkle in our membership is, for instance, if you're just a JS Party listener and you want to support JS Party, you sign up for Changelog++, it feels good, you support us... But because of the way Supercast works, they can only take one of our feeds and turn that into the private feeds for everybody.

\[00:27:54.15\] And so we have a Master feed of our Plus Plus content that we send to Supercast. And so all of a sudden now, you have to get all of our episodes, instead of just JS Party. Which is - you know, people understand. I'm like "Sorry, that's just the way it works. Please just delete the ones you don't like." Or if you can find a podcast app that provides filters inside the app - which there are real nerdy podcast apps where you're like "I want to subscribe to this feed, but only if this string matches", or whatever... Please do that instead.

And so that was a bummer, because we say "It's better", but when you sign up and you're like "This is actually worse than what I was doing before", besides the bonus content and the ad-free... So now that I've built custom feeds, it's solved that problem. You can go in and create a custom JS Party only feed, and subscribe to that. And I thought I had to bring everything first party to get that done, and then I realized "Why?" Just build the custom feeds feature, and let -- all I needed on our app was to know if you're a Plus Plus member. And because Supercast uses Stripe, it's our Stripe account, I can just hit the Stripe API, figure it all out.

And so I'm kind of sidestepping, which has been really nice, because it lets me solve that problem for folks... But then I'm like "Now I don't have less motivation to get off Supercast", because that was one of the major reasons I wanted off... And now it's mostly about money... Because they take a little bit of money, which is fine, but we'd obviously save some by not having to use them. And just that autonomy, and like complete control of the experience... Which are less motivating than custom feeds. So that's part of the app this year, and people are loving it; they're loving it.

**Kevin Ball:** Yeah.

**Jerod Santo:** Anyways, we're upstream now. Take us back; take us back to the main river.

**Kevin Ball:** I mean, I think it's fun to think about -- we talk about selecting your tool chest... But as a business, you're building your own tool chest as you go, right? Your business is not this software. This software is the tools for your business.

**Jerod Santo:** Yeah, a hundred percent. And you have to decide, just like anything else, "Do we build or buy", you know? And there's a lot of off the shelf tools. There are way more now than there were in 2016 and 2015, when we made this choice... Where it's like "Would I build a custom platform today?" Probably not. It would depend on what exactly we're trying to build. But we do some partner broadcasts... So we produce Grafana's Big Tent. And for them, we're just like "Go sign up for Transistor." It's a great service. Fireside was another good one that just got acquired by John Nunemaker, who's a friend of ours... And so that one's gonna be getting better. But there's options, and most people do not need what we built back then. But now that we have it, we use it to make our business better.

**Break**: \[00:30:37.14\]

**Kevin Ball:** Let's talk a little bit about the business... Because I would bet there's a fair number of people here who want to run their own business in some form or another. Maybe it's just a freelance business, right? Getting out from under people's thumbs... What are the tools you use to run the business? What did you use back when you were contracting? What would you lean on if somebody's in that -- or what's in that side of your tool chest?

**Jerod Santo:** Right. Okay, so obviously you have things like payroll and invoicing, and then you have collaboration, and communications... And I can go a little bit through checklists on that. So we use FreshBooks. Adam - for those who don't know Adam Stacoviak, my business partner and co-host of The Changelog, he signed us up for FreshBooks probably a decade ago. And we've always used it. I used Harvest when I was a contractor. I really liked Harvest. Had lots of flexibility, and it was also simple. They had a really -- I think they're still doing their thing. I always talk in the past tense, because I don't use it anymore, but it sounds like they're dead, or something. I'm sure you can go out there at getharvest.com and check it out today. I really liked Harvest for invoicing, but FreshBooks is what Adam was using, and - totally serviceable. Good service, I don't know. There's my review. It works well for invoicing.

We use Gusto.com for payroll, and they're great, because they provide all the -- kind of all the things that small businesses need, but don't want to have to hand roll. HR stuff, vacation stuff, blah, blah, blah, blah, built into Gusto; taxes etc.

Dropbox is a big one, as I already mentioned. We use that for all of our file sharing, and stuff. And then everything else is like Slack... Zulip, we've added for our community now. We're kind of transitioning over to Zulip. And I can't think of anything else. What else is there for our business, Kball?

**Kevin Ball:** I mean, you really don't -- depending on what you're doing, you really don't need that much. I run my whole side business off of FreshBooks also, and Google Suite, essentially.

**Jerod Santo:** Right. Yeah, I guess we do use Google Suite as well for email and docs.

**Kevin Ball:** And it's pretty much all you need for -- for something like consulting, or I'm doing coaching, things like that... You need a way to communicate with people, and you need a way to bill people.

**Jerod Santo:** Yeah, totally.

**Kevin Ball:** And whatever service you're delivering. So a way to deliver your service. That's kind of it.

**Jerod Santo:** Right. And I think on the sales side, or the customer side, Adam has tried multiple CRM tools over the years... I'm not sure if we've ever landed on a CRM that we've been like "This is the one for us." But we aren't a typical sales team either. So I'm not sure what you would say about that. I just don't use it. I know I've been signed up for lots of different services over the years, like "We're gonna try this one now. Okay..."

**Kevin Ball:** Yeah. I mean, it depends, right? And as you highlight, as your business scales, depending on what you're doing, you need different things. But to get started, it's really not much.

**Jerod Santo:** Yeah. I mean, all you've gotta do is ask yourself "What am I doing here?" and then "How do I do each thing?" It's like "Well, we are selling ads." We're selling these sponsorship campaigns. So we have to be able to sell one, produce one, and then invoice somebody at the end of the day. And so you figure that out. And it's like "Well, we're hiring somebody." "Okay, we've gotta be able to pay them." And you figure that out. So you just kinda add these things as the needs arise.

And then there's so -- I mean, to I guess Silicon Valley and the greater tech industry's credit, there's a lot of good services you can build your business on nowadays, to where it's not that hard to get started. It's really not. You have a plethora of choices, there's competition, prices aren't too bad... You can start a small business relatively easy and cheap using internet-based tools.

**Kevin Ball:** \[00:36:18.11\] Yeah, it's shockingly easy. I feel like the core problem is figuring out what is something you can sell that people wanna buy.

**Jerod Santo:** \[laughs\] Yeah, that's still the really hard part, isn't it?

**Kevin Ball:** I mean, yeah. I mean, that's the core of things. But all these operational headaches that you used to do, capital you need, all this other stuff, for most businesses - not a big deal.

**Jerod Santo:** There's options, yup. So that's podcasting tools, business tools... What other kind of tools do you wanna talk about?

**Kevin Ball:** Whatever kind of tools you've got, man... Alright, well, how about as a podcast listener? You mentioned geeking out on more extensive tooling... I'm still on Apple Podcasts. What do you use?

**Jerod Santo:** Oh, we've gotta get you off there, man...

**Kevin Ball:** Alright.

**Jerod Santo:** Actually, it's gotten a lot better, but...

**Kevin Ball:** Tell me the tools. What should I be doing?

**Jerod Santo:** So I'm a big fan of indie podcast apps... And I think that you can find one that you can fall in love with. And I like to be able to have a relationship with the person who's building the tool. That's one of the reasons why Zulip is so cool for us. We're like "We know the Zulip people now." And if there's a thing that we wanna talk about with them, we can just talk about it. Whereas if you don't like something about your Apple Podcasts... You know, go take a long walk off a short bridge. You might as well, because you're not gonna talk to Apple about it, you know?

**Kevin Ball:** \[unintelligible 00:37:27.04\]

**Jerod Santo:** So I can tell you which podcasting app I use, but there's a whole bunch of small ones that are really great. Overcast is the one that I use. Pocket Casts is really cool, and Open Source... Owned by Automattic, so...

**Kevin Ball:** So "open source", in quotes?

**Jerod Santo:** Sure. \[laughs\]

**Kevin Ball:** I mean, after what they've been doing, what do you call that anymore, right?

**Jerod Santo:** Yeah, I don't know. Good question. I mean, it's MIT and everything like that, but Matt's proven himself to be... I don't know, kind of unreliable. What's the word for someone who's uncertain? You don't know what he's gonna do next.

**Kevin Ball:** I mean, WordPress is theoretically GPL.

**Jerod Santo:** It is GPL, right? So now it's just trademark and services. I don't know... It's getting murky, for sure. But as a Pocket Cast user, it's just cool that it's open source. You can watch them build it. You're not necessarily -- I wouldn't go any further than that myself, but it's just cool that it's out there. And what's interesting was that it wasn't open source. Matt Mullenweg buys it via Automattic, and he open-sources the thing. So the guy used to have a lot of street cred with me. That's why I'm very confused at this point. Because I thought that was very cool.

**Kevin Ball:** Maybe he went on one of those ayahuasca trips that has everybody freaking out.

**Jerod Santo:** Yeah... \[laughs\] Yeah, he was enlightened, and he saw the light, and he wanted to change his ways. I don't know. So that's a good one. There's Podcast Addict, there's Castro... There's all these ones. And they just have -- specifically, the thing that I like about them is the chapter support. It's the ability to use the advanced features, and all the new burgeoning podcasting namespace stuff...

So the podcasting community is trying to innovate and change and make podcasting better, but because Apple and Spotify kind of have a stranglehold on those audiences, it's hard. And so the more people we get using the indie apps, who are actually innovating and trying new things, then the better off the whole ecosystem is of open podcasting. And so I'm always in favor of the open side of podcasting, even though we exist everywhere... But I'd much rather have you on Apple Podcasts than Spotify, because Spotify is like the worst way to listen to podcasts. I just can't understand it.

**Kevin Ball:** I've just been on Apple Podcasts by default, right? I've been there for so long. Why not? But alright, I'm inspired. I'm going to pull my phone out and install Overcast.

**Jerod Santo:** \[00:39:54.10\] Okay, cool. If you're listening to this on Spotify, there's better worlds out there, I'll tell you. There's podcast apps that support chapters in such a way that as a podcaster, I can name a chapter, I can add a link so that when you're looking at that chapter, you can click on the name of the chapter, and follow the link to the thing that we're talking about. So if we're discussing an article that we just read, I can put the link to the article in there, and you can click on it and read it while we talk about it. And I can attach imagery. So while that chapter is active, it takes over your cover art for the podcast that you're listening to. And so I can reference a diagram, or a meme, and put that meme in your podcast app while we talk about it. Spotify won't let you do that. So if you want better...

**Kevin Ball:** Better memes...

**Jerod Santo:** You want the better memes, man. It's all about the memes. Anyway, that's my sales pitch for indies. Plus you support independent developers, which feels good, you know?

**Kevin Ball:** Totally. Bringing this back around... So we've talked about coding, languages and dev frameworks, podcasting, running the business, other good stuff... I realize when we talked about coding though we barely touched on JavaScript. And we are on JS Party. So when you're writing JavaScript, what are your go-to libraries, frameworks etc?

**Jerod Santo:** Oh, Kball...

**Kevin Ball:** I'm gonna kill your street cred right here.

**Jerod Santo:** You're gonna get me called out as an imposter on JS Party. As I said earlier, I'm a JavaScript sprinkles person, but I'm also a "right tool for the right job" person, so I've definitely used React, and I actually went out and chose to pull React into a project. And so it's not like I'm just anti. I do not like single-page apps. I don't like to use them, I don't like to write them. Saying this as one of the people who wrote one of the early popular single-page apps to exist when I rewrote the Grooveshark Flash app, which had millions of users in HTML and JavaScript back in like 2012, 2011... No, it was pre -- yeah, 2010. So I server-rendered HTML and JavaScript. What do I use? I use all the built-in stuff, mostly. So I use the DOM APIs, querySelectorAll(), I'll write small functions that wrap that...

Our app right now, Changelog.com, which like I said is eight years old, uses a jQuery-alike called UmbrellaJS, that was like a super-light version of jQuery's API, and event handlers and callbacks and all the stuff that people think is terrible practice today.

I don't have a favorite frontend framework, because I just don't use them. There's an unpopular opinion. I haven't used any. I mean, I've used React... I've done toy apps, but I don't really count those. And so I just use JavaScript, man. I don't use TypeScript... I like Node.js, I've used Deno, and I like that... Node.js, I think, is a great platform, and I've used it successfully multiple times. I really like it. And if JavaScript was a little bit more ergonomic for me, I would probably use it even more. It's gotten better. But I also have a longstanding -- I remember it in the old days, so it's hard for me to have that change of emotion around it, you know? I'm on JS Party because I love web development, I love the web platform. I'm not a JavaScript lover, and I'm a TypeScript hater, you all know that. So there you go. You called me out, there's where I stand. I don't really use frontend frameworks, Kball.

**Kevin Ball:** Well, I was going to look and try to see how much JavaScript is there on Changelog.com.

**Jerod Santo:** Not very much.

**Kevin Ball:** And the core app.js, if I load the homepage, it's minified, but I get a grand total of 64 kilobytes.

**Jerod Santo:** That's not bad, right?

**Kevin Ball:** That's not bad.

**Jerod Santo:** Yeah.

**Kevin Ball:** That's not much.

**Jerod Santo:** \[00:43:48.01\] \[laughs\] I don't want much. I want my webpages to load as fast as possible, to as many people as possible in constrained devices... And if I can get away with it, I would use zero. Not because I don't like it, because I think that that's ultimately a more rock-solid and fast experience for most people. So I sprinkle it on, in the form of, I guess, 64 kilobytes.

**Kevin Ball:** I think maybe more for the player. I'm trying to figure out... That looks like that's loaded separately.

**Jerod Santo:** The player I think should be bundled in, though.

**Kevin Ball:** Is it?

**Jerod Santo:** Yeah.

**Kevin Ball:** Wow.

**Jerod Santo:** It just looks like it's not. And we used to use Turbolinks to make a single-page app-like experience, but I actually have also removed that, just because people aren't really browsing our website as we wanted them to back when we first built it... When we had a news feed, and we thought there would be commentary, blah, blah, blah. And you'd be listening to a show and checking out different stuff. And so we wanted that player to stay, and so we built a Turbolinks-based SPA-like experience where the URLs change, but you're not reloading the whole page... And we rocked that for probably six years, and I took it out just last year, because it's just not the way people used our website, and it's just additional bloat... And had a few things where it would introduce little bugs here and there, that were manageable, but if you can just not have that class of problems, then why not? So I took that out as well. The player is the majority of the JavaScript, and then you have some stuff like some overlays... There's not much.

**Kevin Ball:** There's really not. I mean, I'm looking at this, I'm looking at my network tab right now, and my extensions are injecting more JavaScript than your website has.

**Jerod Santo:** \[laughs\] That makes me feel good, Kball. I like that.

**Kevin Ball:** Alright, so go-to tools - no JavaScript.

**Jerod Santo:** Not no JavaScript, but just enough. Just a pinch.

**Kevin Ball:** Just a pinch.

**Jerod Santo:** I don't have a go-to frontend framework. If I was gonna build something today... I have used Svelte recently. I take that back. I wouldn't call it my go-to framework, but I use Svelte, and I thought "This thing is cool." So that one got me. I would probably grab SvelteKit or Preact, maybe. It just depends on what I'm building, of course. But the chances of me doing a single-page app, unless it's like I'm building a Gmail competitor or something - very low; very low.

**Kevin Ball:** More likely a Spotify competitor...

**Jerod Santo:** Someone should replace Spotify. Just for podcasting.

**Kevin Ball:** Just for podcasting.

**Jerod Santo:** Yeah, I've got no problem with the music player. And it's gotten better on podcasting. They're supporting transcripts now, and they do support chapters halfway, which is better than it used to be. It used to be no way. So it's not like they aren't trying, but when they do, they do it their own way. Like, you're gonna write the Spotify version. They're not gonna adopt an open standard. It's always like some engineer had to show off inside Spotify, and build their own spec, you know? That kind of stuff makes me mad, too. Anyways, now I'm just rambling and ranting...

**Kevin Ball:** Now we're rambling... I think we've wrapped the gamut of tools. Is there anything you use on a daily or weekly basis that we have not talked about yet?

**Jerod Santo:** Well, we briefly mentioned AI stuff... And I have recently switched my standard usage off ChatGPT. So I was just a ChatGPT for standard usage for the first two years. When did it come out? November, two years ago? So not quite two years. Call it 18 months. And then LLaMA 3 just got good enough, and so I'm out there beating the drum of like "Why not use the open-ish version, versus the purely server-side thing?" And so I've cut back on my ChatGPT. I still have it on my phone, I use it mostly for like "Create me an image of this thing", because it's just so easy...

**Kevin Ball:** Totally. It's so good.

**Jerod Santo:** It's so fun, too. My wife absolutely loves that feature. In fact, she's on the free plan, I'm on the paid plan for ChatGPT... And so she gets like three a day, two or three a day... And so she'll prompt like two or three and then she'll be like "Can you paste this prompt into your phone and send me the picture? Because I want a fifth, sixth and seventh attempt at this image." The maddening part about those image generators is they just can't spell right. Have you noticed this?

**Kevin Ball:** \[00:47:55.08\] \[laugh\] Yup.

**Jerod Santo:** Because they're not actually spelling words.

**Kevin Ball:** Yeah, you cannot put text in there.

**Jerod Santo:** No. I mean, you can, but they're going to spell it wrong, and it's going to be weird. And you can tell it "Nah, you spelled that wrong." And basically, it's like "I don't know how to spell. I'm just drawing pixels", you know?

**Kevin Ball:** Yup.

**Jerod Santo:** Which is hilarious, but... Needs to be fixed. So I use it for that. But I've installed Olama on my MacBook, and I'm using a desktop app called Enchanted, which is basically a ChatGPT-esque GUI for interacting with various LLMs. And you can configure it which one to use via server URI, similar to the way you can with Zed or VS Code or Vim. And so I have it using LLaMA 3.2, and I've been pretty happy with that setup for just "Answer my questions and generate some text" and whatever. I'll ask it coding questions...

I'm still not -- I haven't figured out using the coding tools inside of the code editor quite as much. Because I started off just like "I'll go ask ChatGPT and I'll come back." I did that for a while, and that's where I kind of feel like I'm vanilla, and I'm probably behind the curve... Zed has some stuff where you can like highlight a thing, and then like send that in as context and stuff, but I just haven't gotten that far. I'm sure you could probably help me with some of this.

**Kevin Ball:** Yeah. I mean, that's one of the places I've found Cursor to be really ahead of the curve, in a couple of ways. One is their sort of ability to let you specify context, and you can like add files and add them to your context and things like that... But the other thing they have that I think is really nice is they have their own custom diffing model. So you get something back from - whether it's LLaMA, or I love Sonnet as a tool here, or GPT 4.0, or whatever kind of LLM model you're using. But then applying that to your file correctly is actually not always trivial. Like, they're not always giving you good diffs. And so what Cursor has is they have their own proprietary model that is like "Take this thing that comes back from the LLM and turn it into an actual appliable diff." And that seems to, I think, make a big difference.

Now, Zed may be doing something similar... It's pretty clear that that's a need, and so I would imagine that anyone who's building a business around this is gonna be building those tools. That is one of the places where the open source variations on this really fall short. They are just not nearly as good at applying the changes that come back.

**Jerod Santo:** Yeah, they're pretty good at just being a chatbot, and doing what ChatGPT basically does... But yeah, turning it into an overall wrapped product has always been where open source tends to lose. I did download Cursor... It just bugs me that -- I understand why they're like "We need to just be our own editor." To me, as a product person, I totally 100% get that. And I think if they continue to do what they're doing, they'll get it to where it's good enough. And it is a VS Code fork, so it's not like it's completely foreign to anybody... But it's just a crappier editor. I mean, it is. And so I don't wanna switch all my things in order to go get that experience. However, I did have a memory leak in a Node app that I built, and I didn't put any work into this memory leak; I just knew it was a Chromium thing... Like Puppeteer... Eventually, Chromium is just leaking memory and it would crash my app server, right? And it just started crashing. It would crash like once a week at first, and then it started crashing like once every couple of days, running as a server on Fly... And I would just get sick of the crash reports. Crashing is no big deal, honestly, because it just reboots the thing and it comes back up again... Anyways. I was like "I don't really wanna deal with this memory issue problem. I'm not freeing something here or there... I'm calling const when I should call letter..." I don't know what I'm doing, I realized, and that's \[unintelligible 00:51:36.29\] But I just gave my file -- it's just like, server.js, I just took my Node app and I just put it into Cursor, and I just said "I've got this memory problem." And it's like, "I'm gonna rewrite this for you." And then I was like "Yeah, that looks like it might fix the problem." Pasted it in, haven't had an app crash since. So... Super-successful with that project, but I just didn't like --

**Kevin Ball:** \[00:52:00.23\] It's not -- yeah, well, and I have a similar problem, right? So I use the Vim bindings, because - of course... And it's slow. It's just slow. And the undo, the implementation or the interaction of the undo with the AI completes is broken. It's totally borked. So if I'm editing something where I'm just like "I wanna go in, I know the change I wanna make, and I'm gonna make it", it will still open up new Vim in a terminal. That said, for larger-scale transformations...

**Jerod Santo:** Worth it.

**Kevin Ball:** ...it's totally worth it. And you can do multi-file transformations, you could do a single file, where you're like "Refactor this to do this." I've done similar things where I'm like "This is broken. It does this. Fix it." And it'll just do it.

**Jerod Santo:** Yeah. And you look at the code, and you're like "Actually, this is pretty much -- had I known that, I would have wrote this", you know?

**Kevin Ball:** Yes.

**Jerod Santo:** And it didn't even know me. It's just writing code. And I'm like "Yeah." And I'll just go ahead and accept that.

**Kevin Ball:** And the thing is, you can't turn your brain off with it, because it will still do things wrong, or it'll misinterpret or whatever... But it's as if you had a really junior developer you could delegate to, you're like "Go write this code for me.

No, that's not right. No, that's not right. Change this, do it this way. Okay, great. Go." But it's so fast.

**Jerod Santo:** Yeah, they're getting there. It's gonna get there. It's just not knowing exactly what it looks like in the meantime, and what's worth your while and what's not... And so I'm just kind of like still waiting into the deep end; I'm not like deep into it.

**Kevin Ball:** They've also got the scaling issues. So Cursor has had their Hacker News moment, or their blow up online moment, or whatever... And because they do things like route stuff through their own router, so that they are proxying for you, and they have their diffing models, they're running their own models and stuff... Like, traffic goes through their servers, and they're a small team. And so when they get hit with these massive surges of traffic, they don't always handle it well. Sometimes it's like moving through molasses.

**Jerod Santo:** Mm-hm. Well, that's just a time and money problem. Money and time will fix that one, eventually.

**Kevin Ball:** Yeah. They will solve that. But yes, it is interesting, once I've made my brain shift to "Okay, I can do this work..." And it's interesting going into -- I went into a legacy project the other day, I was like "I don't remember how any of this stuff is working." And it was so convenient to be able to just load it up in Cursor, ask the chat "What is this doing? Okay, change it to do this thing", and have it just work. I'm a believer now. I'm a true believer. This stuff is -- it's imperfect, it's broken, it's not intelligent per intelligence... It's probably the biggest breakthrough in terms of coding productivity I've seen in my lifespan.

**Jerod Santo:** I think that's fair. I was trying to think back if there have been other major breakthroughs, but...

**Kevin Ball:** I mean, I guess there's the long, slow rise of open source stuff and API availability, right? So it's not new that we're making things easier for software developers, because - like, if you want to start a new service now, you can integrate with every other service out there very quickly. Just throw up open source -- you know, it's shockingly fast to get a very powerful application. Log in with your Google account, send email, do this, do that...

**Jerod Santo:** So much stuff.

**Kevin Ball:** You could set that all up in a few days. Things that would have taken weeks and weeks of custom code back in the day. So there has been an accumulation of improvements over time. But in terms of a single step function change, it's shocking.

**Jerod Santo:** Yeah, I was thinking, the first programming language that was above assembly, or something... But even those were probably smaller, incremental changes, that eventually became big in terms of productivity, compared to this, which seems to be -- although there are steps along the way... But at the end of this, the productivity boost is going to be just astronomical across the world. For sure, for sure.

**Kevin Ball:** Well and I hope it leads to honestly more businesses that are not software businesses able to do what you did, if like "Hey, we're building our own tools for this", because the tools out there aren't there yet. Or they're not good. Or they don't handle our niche use case. That's, I think, the really cool thing about these tools, is they enable a swath of software development that probably wouldn't have happened before because it wasn't economical.

**Jerod Santo:** Yeah, well said. I hope so. I think that will probably happen. And if it's anything like past innovations, it will produce not less work, but more work, just at a different layer of the stack.

**Kevin Ball:** Yup. And it'll take time to get there. It takes time to adjust, but I think we will. Anyway, that's a good tool closing, right?

**Jerod Santo:** Oh yeah, man.

**Kevin Ball:** You bring your tools in, you had your toolbox, but this new tool - it's worth pulling into that toolbox.

**Jerod Santo:** 100%. At the end of the day, if you're trying to build something, the toolbox is just a means to the end, you know? Like, I would happily throw it out if I could get the end result without it. Wouldn't you, Kball?

**Kevin Ball:** Mostly. I like a few of my tools.

**Jerod Santo:** Maybe there's a little bit of joy in there, sure. Maybe I would hesitantly throw things out. But I think overall, I'd be willing to part with pretty much all of my tools in order to get the end result faster, cheaper, and without cutting my finger.

**Kevin Ball:** Absolutely. Alright. Well, let's call that a day. Thank you, Jerod.

**Jerod Santo:** Thanks, man. Thanks for dissecting my tools, and calling me out on the frontend, man. Everyone's gonna think I'm an imposter now. Thanks. If this shoe fits...

**Kevin Ball:** I was gonna say, no lies detected...

**Jerod Santo:** \[laughs\] No, that's just true. It's how I feel, you know?

**Kevin Ball:** It's all good.

**Jerod Santo:** So it is what it is.
