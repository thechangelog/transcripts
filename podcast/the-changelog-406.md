**Adam Stacoviak:** So we're here with Kayla Cinnamon and we're talking about the cool thing, the new Windows Terminal; it's the new command line experience, it's recently 1.0, which is super-cool... Welcome, Kayla.

**Kayla Cinnamon:** Oh, thanks for having me.

**Adam Stacoviak:** I reached out to you - I think it was in April, I wanna say, prior to the 1.0 release. I think it was like 0.9, and you've got monthly releases, and monthly blog announcements, and stuff like that... So you've been pretty busy.

**Kayla Cinnamon:** Yeah. We still release monthly, and now we have two different builds that we push to. We have a Preview build, and the stable builds from Microsoft Build. That's a lot of builds...

**Adam Stacoviak:** A lot of builds... \[laughter\]

**Kayla Cinnamon:** Yeah... So we push an incremental update, like 1.1, to Preview. And then once that's baked in Preview and a lot of the bugs are ironed out, then we'll move it over the stable. So that's kind of our process right now. So the latest is 1.1 moving to stable, and 1.2 coming to Preview.

**Adam Stacoviak:** This is about a year old, right? So Windows Terminal, 1.0 now...

**Kayla Cinnamon:** Mm-hm.

**Adam Stacoviak:** But it obviously started at zero, or nothing, no version; it was about a year ago... I think it was at 2019 Build when you announced this, is that right?

**Kayla Cinnamon:** Yup. At Microsoft Build 2019 we announced it in a keynote. I think it was Rajesh Jha's keynote... And we had the whole promo video. And it was funny, because we had to cover our booth name until that keynote happened... So we were just kind of awkwardly standing there, representing Windows Subsystem for Linux until our announcement came out, because we couldn't really talk about it... So it was just kind of funny, because we put a black piece of paper over our booth name, which was kind of funny... Yeah, so we announced then, and announced it as like the new experience, like this is the new thing for Windows command line.

**Jerod Santo:** Why is the Windows Terminal an important project at Microsoft, for the company and for you personally? Why do you wanna work on it?

**Kayla Cinnamon:** So for a command line experience on Windows - no one's really touched it or changed it in 30 to 40 years coming up...

**Jerod Santo:** It's a long time.

**Kayla Cinnamon:** It's funny, because a ton of developers use it daily... And it's just this old tool that nobody messed with. Because if we changed too many things, then we would break some automated process that needed to launch the console window, in a certain place on the screen, with a certain padding, and font size... And if we changed any of that, those processes would break, and then we would get in trouble... So that's why we had to start a new terminal and get a whole, fresh, new experience.

And since this is people's daily driver, they're in the command line all the time, it's something that needs to be refreshed and maintained. So that's why it's important. And then for me, why I really like working on it - I was brought onto the team for the UI, so designing the tabs, and how everything looks, and how people will interact with it... So that was just -- it's cool for me, because I worked with very few people, so I have a lot of stake in what it looks like, so I felt like I've made a lot of impact, and then a lot of people have started using it... So it's pretty cool for me to see the impact that I've made as an individual on the team, which is really cool.

**Adam Stacoviak:** You also have a master's degree in that stuff, too - Human-Computer Interaction. So it's something you can really go back to theory and science around the thing, too.

**Kayla Cinnamon:** Yeah. And all the books I've read, and how -- like, I did a lot of web design, and mobile design, and how things are more intuitive when they're placed on certain places on the screen, or contrast, colors and all that fun stuff... So it's cool that my studies related directly to my role, which is really cool.

**Adam Stacoviak:** Yeah. Even more so, how important reviving something that hadn't been touched, as you had said, 30-40 years... To get a chance to touch something that's such a daily driver for developers; it's a big deal to revive it.

**Kayla Cinnamon:** Yeah, absolutely. And it was funny - when I came on the team, they were like "You're gonna do the UI for the command line", and I'm like "Isn't the command line literally the opposite of the UI? It's just the black box..." Then it was kind of a challenge of "How do I bring in my knowledge in making it still the command line, and as minimal as possible, but still useful? " So that was just kind of interesting, because at first I was like "Isn't that the point, is that there isn't a UI?" So yeah, it was just a really cool challenge to apply to the project.

**Jerod Santo:** So what kind of UI is there?

**Kayla Cinnamon:** There's the tab strip on the top, which is the biggest part of the UI. I worked directly with the WinUI team, and they basically made the tab control for the terminal. So I worked with them like "Here's what we'll need. Here's some designs that we thought of", and then worked with them for designs that they've thought of... And then that's kind of how the tab strip came to be. And then we implemented stuff like the dropdown after that, which was already built-in... And now the stuff I'm working on, I'm designing the settings UI; so I have full control over what that looks like, and then any UI element on the terminal. So the search box I also did by hand... There's just a few smaller things, but it's still as minimal as possible. If you take the tabs strip off, it's just the box, so...

**Jerod Santo:** Mm-hm.

**Kayla Cinnamon:** Yeah, it's an interesting challenge.

**Jerod Santo:** It looks like you're also working on some stuff -- a lot of times the UX and UI are different, but can be intertwined, and a lot of that experience, or the way you interact with the program is the integration into the other aspects of the operating system. So I see you're adding things like Alt+Click to open a pane, and you're also adding -- what's the one that seemed more like an integration? Oh yeah, opening the Windows Terminal - Right-Click from the context menu there, integrations into the broader OS... Which aren't exactly UI -- I mean, they do have their own interfaces, but they're definitely really tying it in and making it accessible and available where you need it.

**Kayla Cinnamon:** Yeah. And our goal is to make it as intertwined and ingrained in Windows as possible, so it doesn't feel like a separate app anymore. It feels like you're just launching the command line and it's just in Windows Terminal. Eventually, we want it to be like a default setting; so when you launch CMD, it will come out in Terminal. That's a goal that we have, I think it's on our 2.0 roadmap. So we're aiming to get that in by 2.0. But then it will feel like part of Windows, rather than this extra terminal emulator I installed on the side, and I can only launch it from launching Windows Terminal, rather than the traditional ways that you do it on Windows.

**Jerod Santo:** What's holding it back from being there today, where you can at least opt in - maybe not by default - on new installs, but opt into the new one when you launch the command executable?

**Kayla Cinnamon:** Since this is a Windows change, we have to wait for the Windows release cycles to go through, which are much less frequent...

**Jerod Santo:** Oh, I see.

**Kayla Cinnamon:** So we're working with that release cycle, which is why it's taking a little bit longer.

**Adam Stacoviak:** It makes sense. Where did you draw inspiration from when it comes to rethinking? Having touched something that's that dated, I'm wondering, did you scrap all the things, did you begin brand new? What was the state of the slate when you actually started to make new things for Windows Terminal?

**Kayla Cinnamon:** So we are actually using a lot of the code that's already in Windows for the original console, because our team owns both the original experience and Terminal... So a lot of the code that lets you -- it reads from the shell any responses of text going in/text going out, and then processing it; all of that code is reused in Windows Terminal. I think you can actually see it if you go into Task Manager and you see what's running for Terminal; you should be able to see conhost, and then that is the same thing that would be running in a regular console. So we've used that in terms of receiving data from the shell, and then on top of that we've built our own rendered, so we're able to render things like emojis or other UNICODE characters, UTF8, characters from other languages, coding ligatures, all of that stuff... And then we've also utilized the GPU for that renderer, so it's a lot faster.

This is actually like a fun fact - if you're running a build and it's in the original console and the text is appearing on the screen, it will actually go faster if you minimize the console, because it's using a lot of your CPU... Which is just like a funny thing. So if you wanna build something faster and you're in the original console, just minimize the window. But yes, we used the GPU for our renderer, so that was like a new thing on top...

And then on top of that, we've added the XAML elements of the tab strip and then the dropdown... So we took what we already had instead of reinventing the wheel, because that has been battle-tested for 30-40 years, and now we just needed to change the chrome around it. So that's kind of where the divide happened.

**Adam Stacoviak:** Was a lot of this bringing many worlds together? You know, Command Prompt, PowerShell, WSL, in terms of profiles, and stuff like that... Was it more of like "Let's make a new experience, a new world for all these things to play well together and unify the experience", is that what the goal was?

**Kayla Cinnamon:** Yeah, especially because with WSL people will use both Ubuntu and PowerShell. The way it was originally - it's window on top of window, regardless if you have two PowerShell Windows or two Ubuntu Windows, or something... So this was just easier in terms of managing those windows and having it all be in the same UI. And then getting more exposure to stuff like Windows Subsystem for Linux. Because if you downloaded Ubuntu and maybe forgot about it, or you didn't know you could put it in the terminal, or any other shell you wanted - like an SSH client you could put in there, so it would launch your SSH connection in a profile... Or if you wanted to run a batch script, you could do that.

So it's just kind of unifying what it means to be a command line application on Windows, which is pretty neat. And then it's like your go-to place. You don't have to think of like "Oh, this project is over here, in this application; I need to go launch that in a separate window." It's kind of just bringing your workflow together, which is really nice.

**Jerod Santo:** Well, since you brought up unification, I'm gonna give you a feature request that will unify the experience across WSL and Windows... And I'm fully realizing this might be more of a file system concern, but if you all could support forward slash for your directory separators, versus a backward slash, I think you'd have developers around the world rejoicing at the unified view of directories in the command line with forward slashes. What do you think about that?

**Kayla Cinnamon:** I think I've heard that one before, definitely...

**Jerod Santo:** \[laughs\] Well, I'm certainly not the first one to have desired it...

**Kayla Cinnamon:** I don't know who to ask for that... I think there's a solid backward-compatibility reason why we can't do that.

**Jerod Santo:** I'm sure there is.

**Kayla Cinnamon:** I don't quite know, but I feel like we would have done it by now if we could... That's just where I think it would happen. But our teams are not -- we would not be the right place for fixing that. I think that's like a hardcore Windows --

**Jerod Santo:** No, that's like a file system thing.

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** Yeah, and Microsoft's dogged pursuit of backwards compatibility definitely makes changes like that darn near impossible. If you think replacing cmd.exe is tough, I'm pretty sure that just the assumption that the directory separators will be backslashes is probably hardcoded into millions of programs around the world.

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** But it'd be pretty sweet...

**Kayla Cinnamon:** Yeah... \[laughs\] And like you're saying, we can't ever get rid of cmd.exe because of all that backward compatibility stuff, and we can't change the default of -- you have to enable the terminal in your settings to be default eventually, because some people... Or if it's automatically launched by an application, it wouldn't be in Terminal for those backward-compat reasons... So here's a little dance we have to do around those kinds of situations, where the window has to appear as it was 30 years ago, because whoever wrote that code is no longer around, but it's not broken, so no one's gonna go mess with it. So we have to make sure that we don't break a ton of people when we do this.

**Adam Stacoviak:** Which makes it even harder to talk to people like Jerod who want that, or suggest things like that, and you can't do it... So you've got these--

**Jerod Santo:** Or we're just unreasonable people. \[laughter\]

**Adam Stacoviak:** What I mean by that is it makes your job even more difficult to go into a new era for something that has been tried and true for so long, so stable for so long... But kind of wrap everything else into one and bring a unified experience, given these constraints that, to some degree, seem to hold you back a little bit. Did you experience that a lot, or is there like a list of things like, "These are all my constraints we can't -- we just can't do the cmd.exe", for example?

**Kayla Cinnamon:** Yeah... I think when I joined, I was like "Oh, can't we do this?" Because I didn't know anything, I was fresh out of college... And they were like "No, because backward compatibility." I'm like "Okay." And I'm like "But what about this?" and they're like "No..." So you start to learn like "Okay, there's only certain things we can mess with, or certain experiences that we could change", and then you understand the full picture of "Okay, this is something that's heavily relied on between not only people, but systems, and code that just executes."

So it's interesting that you're no longer dealing with only people, you're dealing with computers interacting with your own thing, which is just a whole other way to think about it, which is kind of cool.

**Adam Stacoviak:** Was it frustrating, or was it one of those things where you have constraints and it's like "This is a challenge"? Or was it like "Oh, my gosh... One more thing I have to dance around"?

**Kayla Cinnamon:** \[laughs\] Yeah, I definitely looked at it as more of a challenge. I'm like, "Okay, if we can't do it this way, how do we resolve this pain point without breaking all that other stuff?" So I definitely saw it as "Let's find a different way to do it." Because there's always a way to do something, so it's just figuring out how... Which is fun. I think it's a fun part of the job.

**Adam Stacoviak:** When it came to new design interactions and UI, when you thought about stuff like that, how did you research or feel good about directions you wanted to take things that you have? Who were the people that you relied upon for information? Was the Preview tried and true for you to really learn? Did you ship with something kind of scrappy that eventually turned more useful? How did it work out?

**Kayla Cinnamon:** So when I joined in February of last year, the team had a lot of stuff already figured out; they just needed the UI on top. And they've -- I say "they", but it's "we" now... We've owned the original console for a while, and some changes were made about 3-4 years ago, and then after that people started asking for background images, and GIFs, and color support, and font support, and all that fun stuff... So a lot of the data was coming from requests like that. And then we started molding the terminal into things that everyone has been asking for for multiple years...

Rich Turner always told me "I get emails all the time about this feature or this feature", and that's how we were able to figure out things to put in there. Plus, what's really cool about Terminal is that it's a product for developers, and the team is made of developers. So if the devs on the team don't find something useful, or they don't like it, or it's not a use case, it's kind of nice to just sample size from our own team, because they are developers and they use it to develop it, which is just kind of like a funny inception thing...

So that's kind of where our sample pool came from, and a lot of stuff was on Twitter, in tweets that Rich was getting... And then it molded into "Let's just get something functional out." So the first -- Windows Terminal 0.2 was not pretty. It's really gross-looking. We had like a really big plus button, you couldn't drag the title bar... It was really duct tape and popsicle sticks. It was really held together by not too much. So then we were able to have people start testing it and building it, and start developing on it, and then issues were being filed on GitHub, and then we ranked our priority list of features based on responses on GitHub.

Then it went from "Here's the stuff that we knew we wanted from the last three years." Now that things are in motion and you can open the dropdown and get a new tab - that worked, it just looked really gross. It looks much better now.

**Adam Stacoviak:** Right.

**Kayla Cinnamon:** Once we got that basic functionality in, then it turned into "What are people requesting on GitHub? What are people requesting on Twitter?" and then "What are we wishing we had?" I wanted a settings UI since day one, and I've made three different designs of it, and my hackathon project was coding it... We've just wanted this settings UI for a really long time; it was just more of like dev resources of "Let's get it working first, and then add the niceties on top, like a UI, and stuff."

So that's how we operate in terms of getting features. It's a lot of "What are the top most reacted-to GitHub issues? What's the most duplicated issue that we get coming in?" We aggregate lists of these things, and that's what forms our roadmap after that. So it's really a community-driven thing... Which is really cool, because then we just kind of give people what they want, which makes us feel really good, and then it's also stuff that we want, so it's really just a nice ecosystem that we have. So that's the process.

**Break:** \[19:53\]

**Adam Stacoviak:** So let's talk about the design process of things. When you think about search (as you'd mentioned), when you think about leading with function, and then coming back and layering on form, what's your personal design process? Do you have a team? Are you running rogue and solo? What's the process for designing the interface?

**Kayla Cinnamon:** So when we first started, when we first were designing Terminal itself, I worked with a designer at Microsoft, and we worked together on "Here's the functionality that we want, here's the gist", and I had some mockups that I made, and then he made it look like an actual Microsoft product... Because I was only there two months at this point, so I didn't really know what I was doing... And then we were only able to work with him until when we announced in 2019, when we first announced. From there, I've just been kind of on my own in terms of designing. So I use FIGMA, and what's nice about FIGMA is that there's packages you can get that Microsoft controls, so checkboxes, and switches, and close buttons and all that stuff - you can make stuff look like it's a real Microsoft application, because it will, eventually...

My process for the search box, for example - I looked at Visual Studio and Visual Studio Code to see how they did it and how it worked... Because a lot of stuff that we operate on, we try to make very similar to VS Code, so that it feels like you're using a Microsoft thing...

**Adam Stacoviak:** An extension, yeah.

**Kayla Cinnamon:** Right. So rather than it feels like two different teams made this -- which, you know, two different teams are making them... But you want it to feel like a unified experience, so we tried to follow a lot of what VS Code has already done. So I modeled the search box after what they've done, and then changed it to stuff that is available in the for all of our UI elements. I used those controls from the FIGMA package to design what it would look like, and the functionality piece of it - a lot of it came from how to search work in the Consul, and then what else can we add on top that's familiar to VS Code users. That's kind of the process. And then I just show the team, and I'm like "What do you think?" and they're like "It looks great!" I'm like "Cool! Go code it!" They're like "Awesome!" and that's the process. So it's a pretty one-man job right now.

For the settings UI, I've been spec-ing -- this is the stuff I've been working on lately, and doing the mockups. A lot of the stuff is from what the WinUI XAML controls are. And then just in terms of layout and organization and how does it feel as a user, what navigation makes sense for the settings UI, and where would I think font face would be, in terms of like a setting... That kind of layout - that's the stuff I've been tackling now. But in terms of what it looks like, it's pretty standardized to the WinUI controls, because we just use their toolkit.

**Adam Stacoviak:** Yeah. What a thing FIGMA must have done though for -- I'm not saying that you're not a designer or an interface person, but from an interaction standpoint, you may have less deeper experience and knowledge around interface, and maybe in particular Windows interface design... Letting FIGMA help you with those parts, that look standard, look like Windows, look like other systems, and let you laser in on your area of focus, which is like interaction, user experience, flows, user desires, as you'd mentioned, people emailing about different things like "Hey, I want this feature, or that feature", and kind of giving them what they want, as you said... That's such a cool tool to use, where you don't have to be the interface designer, but still be the interface designer.

**Kayla Cinnamon:** Yeah. I like to think of it as like a graphic designer would make what the checkboxes look like, or what the font face would look like, and stuff like that... And then I would do more layout and experience of what it feels like to use the application and where stuff is organized... And then making sure the colors line up and it's cohesive. That's kind of where I come in. Which is really nice, because I'm not a graphic designer; I can't make icons. My art is really, really bad... So it's nice that that's kind of already done for me, and I'm just organizing everything in a way that makes sense in terms of the user experience standpoint.

**Jerod Santo:** My own personal terminal path -- actually, OS path... So I started in Windows, and then in college I went to Ubuntu on my laptop; then I went back to Windows as I entered the workforce, and I ran that for a few years. Then I went to macOS, and that's where I live today. And over the years I've considered going back to Windows from time to time, just as everybody looks at"the grass is greener", right? And the reasons why I stopped was like "Well, they just don't care about the terminal", which is pretty much the main thing I care about. The reason why I switched to macOS is because it was just like Linux, only it had a nice UI. That was pretty much it.

**Adam Stacoviak:** Done. Sold.

**Jerod Santo:** And I didn't have to keep reinstalling my -- what was it? The wireless card's drivers every time the system updated. On Ubuntu, back in the early 2000's, it would just destroy your wireless as soon as you upgraded anything, so I got sick of doing that... And I was like "Well, Microsoft just doesn't care about the things that I care about", which was the terminal, the command line, that experience specifically... I would also argue the forward slashes -- just kidding... \[laughter\] Just bringing that back up.

Windows Subsystem for Linux was the first time I started to change my mind, and I was like -- not change my mind about Microsoft, but realize that Microsoft had kind of changed its mind about developers, from my perspective... And this renewed interest in the terminal, and this rewrite from the ground-up is more evidence that Microsoft really cares about these things now... And I'm just curious how the developer sphere received your big 1.0 and this new application. Are people loving it? Do they still grumble? What's the community response been like from people maybe like myself, who likes Windows but doesn't go back historically because of the terminal, or people who have just been Windows users the whole time and kind of quietly despised the old command prompt. Are they happy about it?

**Kayla Cinnamon:** Yeah, so the overall sentiment has been pretty positive. I get a lot of tweets saying "Thank you so much for your work on this. I can finally use it, because X feature came in at whatever release point." So I feel like with every release we open the terminal up to a wider audience, because we're reliving those pain points of what's missing... And there's still a ton of stuff missing. We know that, and that's why we still have jobs, because it's still under development... But I think with the 1.0 it was really big because it was officially a stable app, that we knew would likely not crash on you... Which is important, especially if you're doing command line stuff; you've really gotta make sure that's a stable application.

So that was kind of big, because then enterprises can go in and get it, and rely on it as the daily driver. So that was where the 1.0 was really big... But with every incremental release, when we add new stuff, it unblocks a subset of people. Every month it gets a little bit better. And we still get responses of like "I can't use this, because X feature is not there." And it's on the roadmap and we're working towards it... So that's kind of nice for us to know, like "We will get there, eventually", and it will be something that you can use.

So since it's still such a new product, and we only have about five developers on the team... So it's a really small team, and we're just working as fast as we can...

**Jerod Santo:** Hah! What are the major blockers for folks? If you had a shortlist of things that are obviously not there yet, that gets requested all the time...

**Kayla Cinnamon:** Yeah, so Settings UI is a big one. A lot of people don't wanna open a JSON file, which is valid. Also, opening administrator tabs next to non-administrator tabs - that's another big one. Or run the terminal as another user - that's a big one as well.

A big one that we unblocked was the right-click open in Windows Terminal Windows integration, where you can right-click on a folder in a file explorer and it would show up. That was a big one that a lot of people were asking for. I know Quake mode is another big one, where you would hit a hotkey and then the terminal would open at the top of the screen and you could do something really quick, and then you could toss it away...

**Jerod Santo:** Oh... I thought you said Quake mode, like the video game Quake...

**Kayla Cinnamon:** Yeah, that's where it comes from.

**Jerod Santo:** Is that what it's called?

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** Oh, this is like a HUD. It's like a drop-down.

**Adam Stacoviak:** Yeah.

**Kayla Cinnamon:** Yup, yup.

**Jerod Santo:** Okay, I retconned your word, I thought you said Quick Mode. I was like "She surely didn't say Quake", and then I was like "Oh, she said Quick." And now I'm both wrong and stupid. \[laughter\] Please, continue.

**Kayla Cinnamon:** We're working towards Quake mode now in terms of...

**Jerod Santo:** Good pronunciation...

**Kayla Cinnamon:** ...ways to run your terminal. So in 1.2 we have Focus mode, which is removing the Chrome of Terminal. So it's really just the box, it's just the text box. There's no tabs. Everything I worked on is gone, essentially. All the UI.

**Jerod Santo:** How rude...

**Kayla Cinnamon:** I know. And it sits on top of any window. So that's a stepping stone towards Quake mode, because then when you launch Terminal, maybe you don't want all the tabs, and stuff, and you want it to appear on the top of all of your Windows. So that's one step that we're making towards that.

I'm trying to think of other big things that are missing... A lot of pane stuff - when you can split Terminal into multiple different panes in a tab. Resizing those with the mouse you can't do yet, but that's another one...

**Jerod Santo:** Okay...

**Kayla Cinnamon:** I'm trying to think of what else... These are things that we're actively working on, so these are top of mind.

**Jerod Santo:** That's a pretty good list right there...

**Kayla Cinnamon:** Yeah. Oh, and default Terminal is a big one. If I type cmd, I want it to launch in Terminal. That's a really big one as well.

**Jerod Santo:** So what is the executable? Is it terminal.exe, or how do you launch it directly?

**Kayla Cinnamon:** Wt.exe. Windows Terminal.

**Jerod Santo:** Okay. Couldn't you just alias that in your own machine? Not you Kayla, but whoever wants that feature - couldn't they just alias?

**Kayla Cinnamon:** Yes. We have command line arguments...

**Jerod Santo:** Or a shortcut, yeah...

**Kayla Cinnamon:** So you could do wt and then do "split pane", or "new tab", and "profile name", and all that stuff. So you could launch Terminal in a specific configuration, and pin that command alias as something in your taskbar, or something on your desktop, so when you double-click on it, it launches Terminal in that config, which is really nice.

A lot of people are in the habit of typing PowerShell or typing cmd, and then that's where the pain comes in; it's launching -- my traditional workflow is not compatible with Terminal yet, because I'd have to change what I look for.

**Jerod Santo:** Gotcha.

**Kayla Cinnamon:** Or if they have automated things that launch cmd or something and they want it in Terminal, then that's where things get dicey.

**Adam Stacoviak:** So it's still in a world where it's several ways in, several ways out of Windows Terminal, or the typical path that developers are using.

**Kayla Cinnamon:** Yes... I think I understand your question... \[laughter\]

**Adam Stacoviak:** Well, meaning that there's certain flows that are just launching the command prompt directly, versus Windows Terminal, because it had never been there before.

**Kayla Cinnamon:** Right, exactly. Yeah. So it's just kind of integrating it better into people's workflows... Because our goal is not to change what people do for us. We would like to change to be useful for them. That's the goal. It's just like unblocking those types of things are the top requested features.

**Jerod Santo:** Well, speaking of developer-focused features - nice to see you've got GIF and image in the background text Windows support. These are the things that really matter... \[unintelligible 00:32:57.14\] we want it to look tight, and you guys definitely addressed that particular need.

**Kayla Cinnamon:** Yeah, so the background image support was actually done by a community member on GitHub. We have been focusing on "Let's make this thing usable, get it working, and then add the cool stuff on top." But someone wrote all the code for GIF support and image support in the background, and we're like "Okay, sweet." So we just added that in. So that's kind of where that came from.

So to me, all the cool stuff comes from the community. The retro terminal effects, where you can get scan lines and have the text glow, so it looks like an old CRT display - that was from a community member; we didn't do that. But the code was so good that we had to put it in... So that's why that's there.

And then tab reordering - that was a community member, too. I remember, we were at Ignite and he did it on the show floor, he coded the tab reordering...

**Jerod Santo:** Wow.

**Kayla Cinnamon:** And then he came over and showed it to us, and we were like "This is so cool. Please make a PR."

**Jerod Santo:** When that happens, that's when you just offer the guy a job, right there on the stop, don't you? You're like "Wow..."

**Kayla Cinnamon:** He works on Microsoft, just not on--

**Adam Stacoviak:** Too late.

**Kayla Cinnamon:** Yeah... Not on our team.

**Jerod Santo:** Well, steal him from his team \[unintelligible 00:34:08.07\]

**Kayla Cinnamon:** \[laughs\]

**Adam Stacoviak:** "Are you looking to switch teams...?"

**Kayla Cinnamon:** Yeah, right... \[laughter\] Yeah, so all the cool stuff comes from not us. That's where my mind's at. The terminal is very cool, so yeah...

**Jerod Santo:** And you make it all possible. None of this cool stuff could be cool if it weren't' for the base terminal.

**Kayla Cinnamon:** Right. Yeah, that's true.

**Adam Stacoviak:** Which is something to mention, too - the fact that this has been open source since the beginning. We've kind of glossed over the fact. Sure, you had an announcement, and this is new, and it's replacing, it's the new experience, but it's also been open source, so I'm assuming that based upon you looking to VS Code and things happening there that there's a lot of things happening around Microsoft tooling that is open source, and there's a lot of fruit from that... And you're kind of describing at least one of them now, which is community contributions.

**Kayla Cinnamon:** Yeah. So I personally see a huge shift towards open source inside Microsoft, and a lot of teams have come to us saying "Oh, we wanna open source X thing" or "We're creating this new project and we want to open source. How did you do it? What are the good things that come from it? What are the best practices that you recommend?", all this stuff. And it's cool, because I guess -- I believe we open sourced the first piece of Windows ever, which was the bit that shows the text and command console, the conhost chunk that was always shipped in Windows; we open sourced it... So it's kind of cool how we've had such an impact... And a lot of the benefits we get are finding bugs right away. Everyone who files issues, they're basically testers for us, which is awesome, because then it's just making the product better, and finding stuff that we couldn't find before.

A good example is people who use German keyboards, or type in other languages - it's very difficult for us to test that if we don't have a German keyboard... Or we don't typically type in Japanese, or something... So they are able to find those types of issues and file them, and then we can go hunt them down and fix them; but we wouldn't have found them on our own, because we don't have those types of resources... So that's kind of cool, in terms of we have thousands of just testers, which is awesome, because it benefits everybody when we fix all those bugs.

And then also the feature request priority list. Our priorities come from GitHub, and that's because people are commenting on issues or filing new issues, and we interact with the community every day. We only work in GitHub. None of our code is anywhere else. We have our developers go through the same process that any other community member would go through in terms of submitting code... So we try to make it as even of a playing field as possible between us and the community member, so it feels welcoming... And then we get those really good contributions - the background images, and the retro terminal effect; I love that one, it's so cool.

**Jerod Santo:** That is cool.

**Kayla Cinnamon:** It's really a community, which is really awesome, and it only can provide benefit to the terminal, because you're having people read the specs that you're writing, or help you think of use cases maybe you didn't think of, and it's just like a really big team is kind of what it boils down to, which is really cool.

**Adam Stacoviak:** I really started to pay attention more closely to VS Code even, whenever I saw more Go developers using it. Bill Kennedy in particular; there was particular Go support in VS Code, and that was like a turning point... So it made sense to treat the same thing here with Terminal - when you get more community members to make it their own and solve their own needs, or just to be more fun to use, like put some of your own personal flair into it, or desires into it, when it comes to making it fun to use... It would make sense that it becomes more of a staple for developers to use, rather than thinking "Well, there's only the command prompt, there's nothing else out there", and they can now begin to adopt Windows Terminal for their day-to-day driver.

**Kayla Cinnamon:** Yeah. And then make it their own too, with all of our customizations, and stuff. So yeah, we hope it is a fun thing to use, and it helps benefit people's workflows.

**Jerod Santo:** Plus, once it goes into Windows proper, into the stable OS release - I mean, just having a little bit of your code inside the OS, or like shipping alongside Windows updates... How cool would that be? ...from somebody who doesn't work there. Just a user of Windows, writing some code, that -- I assume if Terminal is optionally a default, that you're gonna actually ship the Terminal app alongside the operating system, right?

**Kayla Cinnamon:** So we're still working on the implementation of that. Another proposal that we have is shipping a stub package, so then when you click on it for the first time, it will go install Terminal from the store, and then make it the default... So it wouldn't necessarily ship inside Windows. But if you do make changes to the conhost bit of our repo, which is the stuff that's in original CMD, then your stuff goes back into Windows and ships regularly. So there is still opportunity to write code for Windows...

**Jerod Santo:** \[laughs\] Okay, you saved it.

**Kayla Cinnamon:** ...but it's the conhost stuff, rather than Terminal.

**Jerod Santo:** But that stuff hasn't been touched for 30-40 years.

**Kayla Cinnamon:** Yeah, so we update conhost for bug fixing, and then if there's anything that can benefit terminal, that could also benefit CMD or PowerShell or the original Inbox experience... We're working on a lot of performance improvements right now, and that stuff will go back into Windows , too. So it's not necessarily like new features, it's more like maintenance and performance improvements.

**Jerod Santo:** Well, speaking of that, I've found a funny bit in your readme, which I thought I'd bring up, because it made me chuckle... Which is -- you know, new contributor onboarding is a huge part of open source, and a lot of times people run into things that you just weren't expecting they'd run into... And I'm assuming this has been run into plenty of times, because you have an FAQ, only there's one item in the FAQ...

**Kayla Cinnamon:** Oh, no... \[laughs\]

**Jerod Santo:** So it's really just a frequently asked question itself... Which is - people apparently are downloading the project, they're building it, and they're running it, and they're saying "This looks just like the old one. This is terrible. This hasn't been touched for 30-40 years." And it turns out both codebases are in the same Visual Studio project... And people are accidentally launching the wrong one, or building the wrong one...

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** ...and getting all sorts of confused.

**Kayla Cinnamon:** Yeah, so when we first announced, a big issue that was being filed multiple times per day was "It still looks like the original", because people would build it and then assume "If I ran CMD, it would launch in it", and that's not the case. So we put that there a long time ago, and I guess we just haven't taken it out... I guess it's still useful, because we don't get that issue filed anymore... But it was just kind of funny how we were like "No, you have to launch Windows Terminal..." It was just an education thing. But yeah, there's still funny stuff in our repo. Some of our commit messages are really funny, or like responses on -- some of our comments are really funny...

The release notes are pretty good. Dustin Howett, he's our developer lead - he writes our release notes, and they can be pretty comedic, too. So yeah, we try to have fun on there; we try to make it a welcoming community, just because we're normal people, too. We're all just trying to make a good product, so we just try to keep it fun.

**Break:** \[41:40\]

**Jerod Santo:** So maybe you can help us out with some terminology here... This is something that Adam and I struggle with a lot, which is terminal, shell, command line... All these terms - these are inter-related things. A little context on Changelog News - we have topics, and we're also covering things that you run in a command line context, shell tools, terminal tools... We have a topic for each of these, and it's always a game of chance to pick the right one. Is this a terminal, is this a shell...? Kayla, can you help us? Do you know these terms inside and out? I'm hoping so; maybe you don't. I don't know them very well. What's the difference between a shell and a terminal, or a terminal and a command line, or a console, in the case of the old conhost? Do you know these terms?

**Kayla Cinnamon:** Yes.

**Jerod Santo:** Can you help us understand them?

**Kayla Cinnamon:** Yes. So this was explained to me on repeat for the first three months of my job, because I didn't know...

**Jerod Santo:** Okay.

**Kayla Cinnamon:** And what's really awesome is that people from the Windows community have it backwards from people in the Linux community...

**Jerod Santo:** Oh, fun.

**Kayla Cinnamon:** So there never really is a great answer to solidify what it is. But the way that we use it is that the terminal is the UI, or the thing that you interact with, that appears on the screen... And then the shell is what's running in the backend. So for us, we would say Command Prompt is the shell, or PowerShell is the shell, or Ubuntu... And then it's running in a terminal, a terminal emulator; that could be Commander, or Windows Terminal, or any of those...

And then console we use as the same thing to mean as like a terminal. So it's the UI on top. But we just say "console" because it helps differentiate between the inbox Windows version, compared to the Windows Terminal...

**Jerod Santo:** Okay.

**Kayla Cinnamon:** So the console should also be the UI in the front. But it is confusing, for sure... But that's how we split it up. So whenever I say "shell", I'm referring to Command Prompt or PowerShell, and then terminal or console would be the thing that renders the text on the frontend. So the shell only is able to receive data and send it, and then it interprets it and then sends it back out, but it doesn't know what it's getting... Or, sorry -- this is definitely difficult to explain. The terminal in the front only receives and inputs data. So it doesn't know what's happening. If you type "ls", the terminal is just sending "ls" to the shell, and it doesn't know what's happening. The shell interprets "ls" as like "Okay, list the stuff in your directory", and then outputs that text. Then the terminal is like "Oh, I have output. Let me display it."

So the terminal has no clue what's happening in the shell behind it. It's just only there to display the info, and the shell is the one that's processing it in the backend and knows what to do with that information. So that's kind of how that differentiates... But I'm pretty sure if you're on Linux it's backwards, or if you're on Windows it's backwards. One of them is not the same.

**Jerod Santo:** It depends on which way you're looking at it, yeah. Which OS you think is backwards.

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** So what about a command line? Is that just another word for the interface?

**Adam Stacoviak:** I would have said that would be Command Prompt too, because that might mean you're at the prompt. You're where you would enter text. Similar to command line, for example.

**Kayla Cinnamon:** Yeah. I would interpret that as whatever executable you're running in the shell. So you could run something.exe, and that's your command line. So Command Prompt is how I would interpret command line as well...

But you could also do command as part of the command line, like ls, or dir, or any of those...

**Jerod Santo:** Right, individual commands...

**Kayla Cinnamon:** I think that's more of a stretch, but that could also be something... I guess that's more of a command, rather than a command line... \[laughter\] Now I'm just talking in circles, but...

**Jerod Santo:** That's how you end up. I've done this before...

**Kayla Cinnamon:** Yeah... \[laughs\]

**Adam Stacoviak:** And that's how it happens right there. That's how people get confused. If you're confused listening to this, then hey...

**Jerod Santo:** Adam and I have talked circles around this...

**Adam Stacoviak:** Join the party.

**Kayla Cinnamon:** Yeah. And some people will say that I'm completely backwards, and completely wrong, so it really just depends on what your background is.

**Jerod Santo:** Right.

**Kayla Cinnamon:** So you're probably fine on what your layout is on Changelog, because it probably makes sense to some people.

**Adam Stacoviak:** I don't know. That's our problem. We have so many options...

**Kayla Cinnamon:** \[laughs\]

**Jerod Santo:** Well, the problem is we're not internally consistent...

**Adam Stacoviak:** Yeah...

**Jerod Santo:** ...even between the two of us. Or even between myself last week and myself now. I'm like "Before I used a terminal, but this is more of a command line..."

**Kayla Cinnamon:** Yeah.

**Jerod Santo:** So listeners out there, if you have a resource, the canonical place that defines these terms, or if you agree with Kayla, or if you wanna explain it for yourself, holler at us. We'd love to hear what the listeners think on that particular subject. It's a tough one.

**Kayla Cinnamon:** Yeah, definitely.

**Jerod Santo:** Well, hard rotation away from difficult jargon, on to a topic that we've been talking about. Man, Adam - is this becoming the font show? The Font 2.0 Show?

**Adam Stacoviak:** It might be.

**Jerod Santo:** Kayla also runs the Cascadia Code Project at Microsoft, which just like FiraCode, is a ligatures font. So tell us about Cascadia.

**Kayla Cinnamon:** Yeah, so when we were designing Terminal and we had the idea of the new Terminal, we wanted it to feel like a new, fresh experience. We wanted this to be like "This is what's new on Windows. This is the new command line thing." And when we were working with our UI, the tab strip and all of that, it still didn't look new and fresh, because the font that we were using was Consolas, which is the font that's been around for 20-30 years... And it's funny, because the largest real estate on the screen of Terminal is the text. That's the thing that takes up the most amount of screen space, is the text... So we figured we're gonna need a new font if we want this to look new. So then that's kind of where the effort came from of "Why are we making a new font, and how is it related to Terminal?" That's kind of where Cascadia Code originated from.

And then we previewed it at Build, and we just called it Cascadia Code, because we were thinking of what to name it, and Cascadia is the code name that we used for Terminal inside Microsoft. Before we named Windows Terminal, it was called Project Cascadia, and there's still some references to that in our GitHub; some of our folders and code packages and stuff are called Cascadia... So that's where it came from; it's an homage to Terminal. And then the Code part is to help indicate that there are programming ligatures in side. FiraCode or Cascadia Code - those will have ligatures. So that's where the name came from, and why it was made.

So we worked with a font designer and finalized the name after Build... Because then people saw it and then started calling it Cascadia Code, and we were like "Well, we can't change it now, because now everyone knows what we've just been calling it internally..." So we finalized that name, and then launched both a ligature version and a mono version, so Cascadia Mono, that doesn't have ligatures.

So yeah, I'll keep going on how we released... After that we added PowerLine glyphs, so you can use it with PowerLine, and a bunch of box-drawing glyphs, so you can have more of your stuff displayed... And then we added the Latin-1 character set after that, which was a bunch of Latin-based languages... And then the latest thing we added last month in June was font weights. So now you can have bold, or thin, or semi-light, or light, or any of those... Which has been heavily requested. Because the font itself is a heavier font.

I personally like semi-light, which is one step below normal, because the normal is pretty thick anyway... So that's the latest thing that we added. But what was interesting is we wanted this to be the default in Terminal, because we wanted the experience to be fresh, we wanted it to be new; we didn't want Consolas to be the default. So we actually ship Cascadia Code and Cascadia Mono inside the Windows Terminal package, and then set Cascadia Mono as the default font. So you can switch between them if you wanna turn ligatures on and off; you don't have to go install something new. It's already included in the Terminal package, which is really great. But if you want the PowerLine glyphs, that's a separate font. So that's on GitHub - we have a GitHub repository for Cascadia Code as well.

So that's how we ship... And then a funny thing that happened is the second we made Cascadia Code the default, there was an uproar on Twitter, because we turned on coding ligatures for everybody. And we didn't even think about it; my daily workflow is GitHub, or Git, in the command line. I write code and then use Git to push that to GitHub. So that's what I use Terminal for. Ligatures never really appeared on my screen, so I didn't really think much about it... But then there was this whole thing of like "This is not accessible." Ligatures are technically not accessible, and we needed to make sure that Windows Terminal was accessible... So we very quickly - either the same day or the next day - shipped a servicing update that changed the default to Cascadia Mono, which doesn't have the coding ligatures, and that's why both are shipped in the package, because we did a flip. And then some people are relying on Cascadia Code now, and we can't just take that away, because then it'll go back to Consolas after that...

So that was just a funny thing to happen... And it wasn't even something that we thought about, because we were just so used to it. But this is why it's so great to have this community, because it's like "No, no, no. Back up", and we're like "Oh, okay. Sorry, sorry. We just fixed it." And then that's also what's nice about having a really quick release cycle, is that we could ship updates within a few hours, which is kind of nice.

**Jerod Santo:** Yeah. Quick fix to a problem that you didn't foresee, but that was immediately obvious as soon as people started using it, right?

**Kayla Cinnamon:** Yeah. It was a really good learning experience, and it wasn't even something that we thought of... But it's great that it was brought up so quickly. I think it was brought up the day we shipped that update, or the day after, and they were like "No, no, no, you can't do this", and we were like "Oh, okay..."

**Adam Stacoviak:** Yeah. Ligatures are definitely -- you have to get used to them. So it's not like you just switch to them like "Oh, that's great." And I didn't even think about that, Jerod - it's been like three font(ish) episodes technically later I'm finally understanding you've got Mono and Code, so the Code actually meant the ligatures...

**Jerod Santo:** Oh, man...

**Adam Stacoviak:** So thank you, Kayla, for finally drilling that home for me. I didn't quite grok that, that you've got the Code and the Mono, so Cascadia Mono is simply just for Monospace font, while Code has the code ligatures. That totally makes sense now. Three shows later, I'm finally getting it, so...

**Kayla Cinnamon:** There you go.

**Adam Stacoviak:** \[unintelligible 00:54:34.23\]

**Jerod Santo:** Welcome to the party... To the code party...

**Adam Stacoviak:** There you go. I mean, it would make sense that I just -- I guess I would just think you just ship it all and you get the code ligatures for free, so I don't know... I guess to turn them off you need the Monospace version, sans code ligatures... Yeah.

**Jerod Santo:** That's right. But you couldn't call it Cascadia Sans... That's a whole other thing, right?

**Adam Stacoviak:** That's right.

**Kayla Cinnamon:** Oh, yeah. It would look like Comic Sans, which is not something we'd want.

**Jerod Santo:** That's how most of my code should probably be - in Comic Sans, honestly...

**Adam Stacoviak:** And speaking of these past shows we've done - we've talked with Nikita on FiraCode, and in your special thanks, in your doc, you've got a thank you to that project in terms of the coding ligatures... So - awesome there.

**Jerod Santo:** So are you using their ligatures then? Are you pulling them in to Cascadia?

**Kayla Cinnamon:** That is a great question.

**Jerod Santo:** Or do you know what the thank you is for, just for the inspiration?

**Kayla Cinnamon:** Yeah, I think either we pull from them, or it's a thank you to them. Our font designer set it up, and we did it so long ago I honestly don't quite remember how that happened. I wanna say -- because they're open source as well, I wanna say that we ingested those... But I'm not entirely sure.

**Jerod Santo:** Okay.

**Kayla Cinnamon:** That was so long ago.

**Jerod Santo:** It's all good. They either directly inspired or directly contributed; either way, the spirit of open source.

**Kayla Cinnamon:** Yeah.

**Adam Stacoviak:** Well, I think what it does, for sure - and while we're talking about it again - is that it's clearly 1) an aspect of the interface that we need to pay attention to. 2) can have, as we've just said through my silliness, is that you can have a coding ligature version of it, which is super-cool - that's the point of it, to sort of enhance the experience as a developer to get special features from the font (font face) in your interface... But just how important this thing is, the font that you use, how important that is to developers. Even rewinding back, that's a big part of what you were trying to do with Windows Terminal, is not just give it a facelift and new features, but kind of evolve the interface, and a big part of that is 100% the font, the choice of it.

**Kayla Cinnamon:** Yeah, definitely.

**Jerod Santo:** Don't mind me, I'm just over here, trolling through Cascadia Code on GitHub, trying to find out, are they actually using their ligatures, or did they -- it says "Thanks for the FiraCode OpenType code for the coding ligatures", which makes me think maybe you're using the same system that he uses in order to generate the ligatures... But maybe it just means for the ligatures themselves. Anyways...

**Adam Stacoviak:** Yeah. Well, this begs to be like some sort of standardization across different font faces, different typography; in this case Cascadia, in the other case Fira, that you can have that OpenType code, as you've just said, Jerod, to enable "Hey, you want this style of font? Great. It can have these ways to have the coding ligatures."

**Jerod Santo:** It's like unsolved mysteries for open source... Only in our world we can just go ask Aaron Bell, and he'll tell us exactly the truth. He'll solve the mystery real fast, won't he, Kayla?

**Kayla Cinnamon:** Yeah, he would definitely know. He's our front designer, so he would definitely have the answer.

**Adam Stacoviak:** And a fantastic one. Shout-out to Aaron Bell, @aaronbell on Twitter if you wanna hit him up... But definitely, type design and typography is what he does. That's awesome.

**Kayla Cinnamon:** Mm-hm.

**Jerod Santo:** So Kayla, we know the settings UI is coming down the pipeline, and you have a list of things that are in the works... Anything else folks need to know about? What's the best way to play with Terminal, get on the Preview train or the official train...? What's the touchpoints for folks who would like to try this out, or maybe contribute a feature, or just follow along and watch as it gets better and better?

**Kayla Cinnamon:** Yeah, so there's a few different resources that we have... You can download the Preview, or just plain Windows Terminal from the Microsoft Store... And if you don't have access to the Microsoft Store, we also publish those builds on GitHub, under the releases tab. So if you can't get the Microsoft Store on your machine, you can get it that way. You would just have to update manually; if you wanted the latest updates, you'll have to update manually if you get it from GitHub, whereas the store should handle it for you and give you those updates automatically.

The difference between the two is in Preview - that's where we ship the latest features first, and then a month after they've been in Preview, we move them over to Windows Terminal proper; that way all the bugs have been ironed out and it's been tested, and all that... And then you'll get the new stuff. So if you're someone who wants the newest features as soon as they come out, you don't care if it's a little buggy, you can go on the Preview branch... Or if you really care about stability, then you can get on the Windows Terminal branch, and you should get the new stuff a month after we announce them. So it just depends on what your needs are and what your preferences are in terms of getting the new stuff... But all the newest stuff will be in Preview first, and then migrate over to stable.

And then in terms of knowing what's going on, we have a blog, and that's at devblogs.microsoft.com/commandline, and I write a blog post for every release that we have... So if you are curious about what new features have made it into Preview, and then migrate into stable, I iterate through the big features on there, and explain how they work, and how to get them working, or what's new, and all that stuff... And then also, I'll tweet random terminal things that are happening. Or sometimes I'll do a poll; if we're figuring out a default setting, I'll do that on my Twitter... So that's a really good place to go to as well.

And then in terms of providing feedback and doing feature requests in issues and stuff - the feedback link that's in Windows Terminal (in the dropdown at the bottom I believe it says Feedback), that will take you directly to GitHub. So if you don't know how to get there, that's one way to do it. Or I'm sure you could just google "Windows Terminal" and the GitHub should show up very quickly.

If you see a bug, we highly encourage you to file it, or if you are like "Man, I wish I could do this", please-please file a feature request, because that's how we operate, through GitHub... So that's how contributions can happen.

And then also, if you wanna comment on specs that are being written, and provide your opinion, or if you wanna look at some PRs that are in progress and try to contribute there, you can comment on those. We do value comments and issue filing, and creation of PRs. Everything counts, and we truly value all of that. So those are some ways that you can contribute, too.

**Adam Stacoviak:** Very cool. We'll drop some links in the show notes for listeners to follow along. That way they can take suit, as you'd mentioned there... And Kayla, thank you so much for your time today. It's been awesome.

**Kayla Cinnamon:** Yeah, thanks for having me.
