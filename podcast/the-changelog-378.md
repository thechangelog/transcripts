**Jerod Santo:** Shout-out to Brian \[unintelligible 00:01:47.21\] for requesting this episode. We definitely wouldn't have come across Anders or his work had it not been for Brian submitting this show request on Changelog.com/request. Thanks, Brian. I hope you enjoy this conversation.

We have Anders here, a researcher who's working on cryosphere processes such as glacier sliding, sediment mechanics and sea ice deformation, many of which words I don't even understand the words, let alone the research... So Anders, thanks for joining us.

**Anders Damsgaard:** Thank you very much for having me, Jerod and Adam.

**Jerod Santo:** This conversation will focus around your Scholarref Tools, which it seems like very much scratching your own researcher itch and dealing with pesky internet websites and difficulty of gathering academic papers.

Let's start off with your academics in general. Tell us about what you do, what cryosphere processes are... Help me out here.

**Anders Damsgaard:** Yeah, fair enough. I like to do research in kind of the Arctic setting. I'm very interested in understand how ice sheets and glaciers respond to climate change, and how rising temperatures result in changing sea level. And in order to understand that kind of change, we really need some good tools at our disposal. Some of the best tools that we have are \[unintelligible 00:03:05.24\] models for glacier and ice sheet flow. These are computer models on a quite big scale, and different things go into the models, for instance the temperature budgets, precipitation patterns and ocean change... And then you get the behavior of the glacier ice sheet out as an end result. That can inform you a little bit about how different environmental factors and climatic change manifests itself in glacier and ice sheet sea level rise.

**Adam Stacoviak:** What's interesting about this field - which again, I'm nowhere near you, I'm just a novice, somebody who is curious, I would just say - is that you can go back in time... Ice is essentially some level of a time machine when it comes to research. Is that what got you into -- what piqued your interest to get into this field?

**Anders Damsgaard:** \[00:03:58.25\] Yeah, it's definitely -- it's actually climate record also, because you have snowfall, of course, being precipitated on the surface of the ice, and then you have layers upon layers being compacted. So if you try to drill through these ice sheets, it's actually going back in time, and just like tree rings, you can count out as individual years of precipitation. So it can go back thousands of years and understand what happens in terms of precipitation change and climate change, also going back in time. So that's the direct measure on the ice sheets themselves within the ice... But you can also look at previous extent of ice sheets and see how they grew from the Northern latitudes and spread on Northern America and the European Lowland, and you can see how it just drastically reshaped the surface during previous glaciations.

We know from the past that these ice sheets can really cause massive change on a global scale, and we're trying to wrap our heads around exactly how that happens, physically speaking.

**Jerod Santo:** What does the actual data collection look like? Do you go out there with a measuring stick, or what kind of tools are used?

**Anders Damsgaard:** Some people do that. Some people simply go out into the field and hike with a good backpack, and look at the different deposits left behind by the glaciers, but other people also look at remote sensing datasets, so they can discern some of these features from satellite data... For instance visible imagery.

Other people look at geophysical measurements. That would, for instance, be radar measurements taken by airplanes or satellites that fly over the ice sheets, and you can learn a lot about the interior and exterior of the ice sheets in that way.

**Adam Stacoviak:** It's probably good to have a lot of data points to collect from, because not one piece of data will give you enough information. You can begin to assume and obviously track if you've got an aerial view that's giving you, say, coloration, or a radar, as you'd mentioned, that gives you one data point. But having physical specimens, or whether it's data gathered through metrics, or sensors etc, it's gonna give you a full spectrum view of what's really happening there.

Let me ask you guys both kind of a funny/off-topic question... And you might laugh, so don't laugh too hard. What would you do or how would you feel if a library burned down? A very important library.

**Jerod Santo:** Like the Alexandrian library, for example?

**Adam Stacoviak:** Pick your library, whichever one is your favorite. Would you be upset?

**Jerod Santo:** Yeah, of course.

**Adam Stacoviak:** So it occurred to me just in this last moment that if these glaciers have this kind of data in them, and they are melting, basically not being there anymore, unmeasurable, unresearchable, it should be alarming, right? Because these are basically records of our Earth's history, to some degree showing us our past and potentially our future based upon data. So that should be alarming.

**Anders Damsgaard:** It definitely is. Specifically in that regard, mountain glaciers in the Alps, or other places - they are the ones that would be most affected in that regard, because they are isolated records in remote locations. It takes a lot to melt away a higher ice sheet, but the smaller glaciers themselves are definitely susceptible to that kind of risk.

**Jerod Santo:** I'm curious what your specific work is with regard to this topic. No doubt, as Adam said, different data points, different people doing different kinds of research... I'm not sure if you're going out into the glaciers yourself, or you like to sit back at your computer, like I would, and let the data come to you... But what specifically are you personally researching and what are the results of that kind of research?

**Anders Damsgaard:** I work on improving the physical mechanisms and physical parameterizations in these ice sheet models. I'm sitting in front of the computer, trying to understand and model this system to a better degree than we can do today... So specifically what I'm working on at the moment is the fact that the glacier is actually not really governed by how the ice itself flows.

\[00:08:12.19\] You probably both know that glaciers and ice sheets move from high altitudes to lower altitudes, because ice is a viscous fluid. But it's actually not to a primary extent the ice flow itself that really controls how the ice sheet moves and why it moves in the patterns that we see... But instead, it's actually sediments like sand, and clays, and gravel, and stones at the base that are very weak, because we have a lot of melt water down there. So these sediments are actually breaking, and what we see on the surface is actually an expression at the base of the ice sheet of where these sediments are failing and where they are weak, and where they actually are contributing to lubricating the glacier flow.

These physics are actually not very well understood, and more or less not included in the models that we today use to quantify the sea level rise in future climate scenarios. So the estimates that in the year 2100 say that we will have maybe half a meter of sea level rise, maybe one meter of sea level rise, they are based on more primitive models... And it's really hard to exactly quantify these maybe less or maybe more important mechanisms such as the one that I'm working on.

We really have to be smart about our computing, and we have to be very efficient also, because the computation costs are just very, very large. I've worked a lot with GPU computing, and it's really painful, I have to admit, but there is also a lot to be gained when you have something that's working, and working efficiently.

**Adam Stacoviak:** Well, the good news is that it's 2020 and not 2012; I don't know if you saw that movie, 2012... I mean, I know I laugh when I say that; it's not very funny if it actually happened... But that movie really was kind of interesting because you had this scientist, and this data, and this prediction, and they thought it was crazy... I'm not gonna spoil the plot of the movie, but bad stuff happens, basically. We don't want that to happen, so we want someone like you, in the cockpit of the software, and the metrics, and improving these -- you said they're physical mechanisms, is that what you said? The physical hardware?

**Anders Damsgaard:** Yeah. Actually, the physical processes. One other physical process that we need to understand better is for instance how the ocean melts the glacier. It's not a simple matter of the physics that happen when you put an ice cube into a warm cup. It's not really the same, because you also have turbulent mixing of the warm and cold water masses in the ocean, and you have a lot of weird dynamics going on... And you can't obviously model every water molecule; you need to make generalizations. That's where a good understanding comes in, so we can make the right simplifications, but still grasp the important mechanisms.

**Adam Stacoviak:** It kind of reminds me a little bit of quantum physics too, where you -- again, I'm out of my pay grade here when I talk about this, so this is just from a curious standpoint... But basically, if a car is moving, I can predict that the car will move from this point to that point if I can tell that it's moving... But at a quantum physics level, you're predicting a massive amount of possibility, so to speak, because of the way particles move. At a very small level, this seems very similar, where your research is sort of keying into the particular particles to make large-scale assumptions, and in some degrees you're saying that we're making these assumptions on generalized data, rather than the specific particles and how they react to small-level physics.

**Anders Damsgaard:** Yeah, that's exactly right. You have to make the right simplifications, so you really can do something with your insight, and actually apply to bigger purposes.

**Jerod Santo:** \[00:12:04.14\] Do you also have to focus in on specific glaciers in order to do real-world results? Because it seems like, in my layman's understanding, I would think that different glaciers and different geographies, under different circumstances, are gonna also react differently. So that's probably a challenge as well.

**Anders Damsgaard:** Absolutely, and we already see that happening today. For instance, on the Antarctic continent there is one area which is immensely affected by current climate change, while other glaciers are actually growing. So there is a lot of regional variability, and just because the setting is different, that actually means a lot to the outcome.

**Jerod Santo:** Does that mean you need to produce different models for different geographies, or how do you attack that?

**Anders Damsgaard:** Yeah, you can do test cases for smaller subsets of an ice sheet, or you can try to model the entire thing, maybe at a reduced resolution, or something like that. But there are usually trade-offs with either approach. It's kind of the same as if you're trying to model the ocean; you can try to model everything with really big cell sizes and coarse resolution, or you can try to model a smaller, regional ocean basin, with much higher resolution. But with the regional model you have problems at the boundaries, because the ocean also needs to flow across a smaller surface, so you need to be smart about what you do.

**Jerod Santo:** What I find maybe - I don't know if "ironic" is the right word; maybe unfortunate... It's that here we have this need for advanced technical research in order to improve our abilities to make these models, to get accurate predictions and results, and we have a field of academics who are bumping up in your case against these technical hurdles of what is really kind of a -- ancient is not the right word... But old-school, non-technical field of sharing and publishing, and all the things that you think "These people should be bleeding edge, because they're on the bleeding edge of their research." Well, it turns out the scientists aren't software people. I mean, not in every case. And there's just like tons of Academia, and may I say bureaucracy in certain cases...

There's lots of reasons -- same thing with the government publishing of open data that belongs to the citizens, and it's in formats that are inscrutable... That seems like a terribly unfortunate circumstance, where it's like "You're just wanting to do your research, but now you're writing your own tooling in order to collect that information you need in certain cases. Is that just the state of the world? What are your thoughts on that?

**Anders Damsgaard:** Well, I specifically had the problem that it was hard to -- or it took a lot of time to get all the publications together that I would need to have access to during my research. Often, when you are stepping into new research areas, you need to spend a lot of time to sit down and really check the literature.

I would say pretty much anybody who has gone online and tried to look for papers and so on - they've probably felt frustrated at some point... Because the web pages of many of these publishers are just horrible. They are extremely bloated, and slow, and you have to often struggle to find PDF download links... Because PDFs are still a good way to just having precise copies of papers on your own machine. And every publisher is different in exactly how they set up their web page, and so on... So I've found that to be quite a struggle.

I chose to spend a little bit of time to sharpen my toolset and build something that could help me get around all of these issues and streamline the workflow... And I guess many of your listeners are probably the same way. We probably all have a set of dotfiles which we just very much value and continuously tweak in order to just get rid of little hurdles that might occur every day in our workflow.

**Jerod Santo:** \[00:16:08.06\] I'm curious if you are unique amongst your peers in your research, or if you are commonplace in terms of somebody who is doing climate science, glaciology, and yet spends time writing scripts, software programming basically, in order to help them along in their way. Do a lot of climate scientists have your skillset, or are you unique? How did you get these programming skills?

**Anders Damsgaard:** I'd say a lot of climate scientists are actually pretty good programmers. When I was at \[unintelligible 00:16:39.13\] in the U.S, I was at this climate modeling facility, and people have been writing Fortran programming there since the '60s... And they know everything about making really efficient code. So a lot of people in that sub-niche are actually pretty good programmers and do everything they can on the command line.

But I did my undergrad in a Geoscience Department, and there it's the stereotypical image you have of bearded professors in old-fashioned shirts, and they have no idea about doing really efficient use with a computer. So there are a lot of different groups out there that just have a very different workflow and a very different skillset.

**Jerod Santo:** Do you know if there's any initiatives out there to pair these people with software developers? I know we see huge strides made if you pair a developer's skillset with a designer's skillset, or a product's skillset with a developer's skillset... It seems like a scientist who doesn't have the software chops that some of the climate scientists, or more technical modeling scientists have - pairing those people with a skillset like a software developer could see huge gains for both participants. Is that a thing?

**Anders Damsgaard:** Yeah, it actually is, in bigger projects. And I completely agree it's very good to combine very different skillsets. So for some of the bigger modeling projects out there, they actually hire dedicated scientific programmers to do things like automated testing, and proper documentation in the code... Things like that, which make life easier and which are commonplace in modern software development.

Actually, something like version control is pretty recent in the modeling community, I'd say, so of course, there are so many benefits to having proper development pipelines that, and so on; that's just a complete necessity in modern development. So a lot of good things are coming out of combining people with different skills.

**Break:** \[00:18:59.19\]

**Jerod Santo:** So you were bumping into this problem with your research, of going out and getting the publication's PDFs, in most cases - probably almost all cases - and you wrote in your post about the announcement for the Scholarref Tools, that the common tasks you're doing, including downloading PDFs of publications, and getting references into your bibliography... And you said, "However, I'm not a fan of navigating the slow, bloated, tracker-filled and distracting web pages of academic journals and publication aggregators", so you came up with this solution. Why don't you tell us about it?

**Anders Damsgaard:** Yeah, so I've been working on something similar for a little while, and I just decided to properly wrap this up so it could be more useful for me and maybe others as well. That's what gave birth to the Scholarref Toolset. It consists of a few tools which can be chained together. They're written in an old-school way. They're based on the Unix philosophy, so everything should be text-based, and each tool should do one thing and do it well.

The idea is that there are different tasks that are common in this kind of work. One task is, as you mentioned, Jerod, you need to get a reference for a publication. Say you read a nice paper and you want to cite it in a paper that you're writing. Most journalists use something called LaTeX, and you would need to get something called a BibTeX reference. The traditional way is to go to the journal web page, download the text reference in this BibTeX format, which is kind of like JSON, but not exactly... And you would then put it into your own bibliography, which is just a massive text file, paste it in there, and then cite it from your LaTeX document.

The problems with that kind of workflow are actually many. As you mentioned, I'm not a fan of the journal web pages, as I wrote in the blog post, but also there are more practical issues in terms of the formatting of these references. So even though they share this common BibTeX format, they're actually very different in content. For instance, the author's first name might be written out, or they might be abbreviated, and often journals that you want to submit your own paper to will only accept one type of author styling. And the same goes for the journal name. That also needs to have a consistent style... So there are a lot of things that you need to go through once you get a hold of this reference from the journal webpage.

I've found out that there's this API publicly-available, which I can simply query from a search query. That actually works really well. Alternatively, I also make it possible to just feed in a PDF document. One of these tools in the Scholarref Toolset will try to extract the UI, which is the unique identifier for that publication. So you're not getting any kind of wrong results. The last thing you want is to get the reference for the wrong publication, and even worse is if you don't manage to actually correct that mistake before submitting.

\[00:24:12.18\] I've tried to make these tools modular so in some instances you might only need the UI of the publication, in other instances you might need the full reference in a consistent format... And finally, in some cases, you might actually need the PDF itself.

Another benefit from keeping these tools really minimal and simple is that they are quite portable, so they have very minimal dependencies on the host system, which makes them easier to distribute. And secondly, it also makes it possible to work with them from your favorite editing environment. For instance, I'm a guy that likes to stick to old-school terminal text editors, vi specifically. And there are \[unintelligible 00:24:58.10\] set of keys and get the reference in a very convenient manner. You can do that in pretty much any editor that you can think of, because these are just shell scripts, so that just makes them much more portable than many other solutions.

**Jerod Santo:** I can tell that you're a vi person, because in your editor integration section under Emacs it says "Don't know, figure it out yourself." \[laughter\]

**Anders Damsgaard:** That sums it up.

**Jerod Santo:** That sums it up.

**Adam Stacoviak:** I like that, it's a good response.

**Jerod Santo:** Yeah.

**Anders Damsgaard:** Yeah, but most people know how to do that kind of stuff anyways, so it's kind of just teasing a little bit.

**Adam Stacoviak:** Right.

**Jerod Santo:** So there's these three main tools, and they're all under the Unix philosophy. They're just shell scripts...

**Anders Damsgaard:** Sure.

**Jerod Santo:** ...and you talk about the importance of POSIX. I thought maybe it'd be a good opportunity for those who aren't aware of that that maybe you explain why that matters, what POSIX means, and then of course why shell scripts, when you could reach for more powerful tools nowadays. I'm just curious of your thoughts on your own tooling.

**Anders Damsgaard:** Sure. POSIX is a standard which really exists to create a common platform for these computing interfaces. Back in the day you had quite a few different Unix variants, and many of these would have their own implementations of basic tools, and they start with different options. For instance, the GNU toolset, which is common now in Linux distributions, is really expanded with a lot of command options and so on that are not necessarily the norm on other systems. So if you want to have something which is really portable beyond just a specific environment, you need to adhere to the broadest common standards, and those would be the POSIX standards for scripting and for the different tools in the Unix environment. So that's why I chose to go with those tools.

Also, something like just a POSIX shell is much more rapid than a more complex shell interpreter like Bash, or ZSH, or something like that. So by keeping it minimal and adhering to these strict standards, you should also get very good performance, besides the portability... So that's a definite advantage.

**Jerod Santo:** I didn't get a chance to look at the source code, and I'm curious how large lines of code -- how big are these individual tools? Because at a certain point, a POSIX shell can become unwieldy. It's a sharp tool, you can cut yourself with it... And I know myself having cut my teeth in Perl and Ruby, I very quickly will just -- I'll start with just a shell script, and then anything beyond ten lines and I'll go reach for a scripting language.

**Anders Damsgaard:** Sure.

**Jerod Santo:** So I'm curious how complex these got.

**Anders Damsgaard:** Oh, these are quite simple. Most of the source code is actually \[unintelligible 00:27:47.18\] the help text itself, and version info, and so on... So the scripts are really minimal. But you're absolutely right, if you want to do something complex, you should go for Python. But then again, something like the lag just from starting a Python program is quite significant.

**Jerod Santo:** \[00:28:05.25\] You mean startup lag, by the time you type the command in...

**Anders Damsgaard:** Startup lag, specifically.

**Jerod Santo:** Yeah.

**Anders Damsgaard:** And of course, if you want to do anything which has a lot of iterations - which these tools don't, but if you wanted to do that, then Python is not ideal, of course... Yeah, you really need to pick the language appropriate for the job, and shell scripting was the appropriate thing for this, I think.

**Jerod Santo:** The other decision that you have to make, which you have made, is when to formalize a project and make it a public thing, make it an open source, available thing. Many of us have random scripts laying around on our machines; I know I've written plenty of things that will never see the light of day... And sometimes you write them just enough to take the pain away, but not enough to take other people's pain away... And so you know, then you never get the limelight, you never get to come on the Changelog, but you have your own little scripts. I'm curious, what was the process of writing these? Did you have it formalized for a long time, or you just didn't have the help text? What made you eventually say "Okay, this is very useful for me. This can help out hundreds, thousands, who knows how many other researchers out there. Feeling these pains, I'm gonna go ahead and put the extra effort in." Because even a thing that's almost ready for the public is not ready for the public. A lot of the window dressing, so to speak, is the effort, as you probably realized in this project, if you haven't had other open source projects. So when did you decide to formalize it and take it public?

**Anders Damsgaard:** Well, to be completely honest, I just put up a new web page and I needed something to put on my blog. \[laughter\]

**Jerod Santo:** I love that honesty.

**Anders Damsgaard:** But you're absolutely right, it takes a lot of time to wrap things up and present things in a coherent manner, and to make things nice and presentable, and adding niceties such as help texts, and so on. That takes a lot of time. And you're absolutely right, I really want that -- it would be great to see that people openly share little niceties that they've \[unintelligible 00:30:02.01\] for themselves... Because there are so many clever things people invent out there, and it's just a good idea to share that.

**Adam Stacoviak:** The one interesting thing here I think with this conversation, and specifically what you've written here, is that it's not on GitHub.

**Anders Damsgaard:** Yup.

**Adam Stacoviak:** I almost thought you released this so that you can declare and advocate for self-hosting your own Git, which - I'm really curious why you're doing that...

**Jerod Santo:** For your next blog post.

**Adam Stacoviak:** And I would say even a follow-up to that would be -- you know, for those listening to this and thinking "I wanna get into this" or "I wanna check it out" or "I wanna reference it to my research friends" or whatever it might be... Will they be disappointed to see that self-hosted Git and there's no collaboration, or seemingly no collaboration, because it's not on GitHub? GitHub is generally social, and you're against social networks, to some degree.

**Jerod Santo:** Before you answer that, Anders, I'll just say - as a casual observer who's interested, I'm probably not gonna have to use your software, but it was like "Oh, this is cool..." I admitted freely a few minutes ago I haven't read the source code, and if it was on GitHub, I would have by now, because it's a click away, whereas this is a Git clone away; just another step... I would have been able to click on the files, and seeing your scripts, and maybe learned a thing. So that adds some salt to the conversation here. This self-hosted Git, what's the decision there?

**Anders Damsgaard:** Sure. Well, to address your comment about clickability - I actually have a web front-end for the GitHubs that I have.

**Jerod Santo:** Ooh...

**Anders Damsgaard:** It's a little C program that writes the repositories out as HTML, and you can actually go and click and look at the source code, and so on.

**Jerod Santo:** Touche!

**Adam Stacoviak:** It's actually pretty cool, too. It is pretty cool.

**Jerod Santo:** I didn't see that. I'm seeing it now.

**Adam Stacoviak:** Nice styling on this as well. I can almost see this as being kind of a -- like, if somebody took this and said "Let me do a CSS restyle of GitHub..." Like a CSS Styles, or -- what is that style sheet replacement?

**Jerod Santo:** The old Zen Garden? CSS Zen Garden?

**Adam Stacoviak:** \[00:32:04.15\] Well, not like that, but where you can actually put it into Chrome, or Brave, or whatever browser you use, where you can actually restyle a website, so "Make GitHub look like this."

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** This is very hacker. GitHub is not very hacker these days.

**Jerod Santo:** Firefox had a whole scripts thing... What was that called? It's probably still out there. Our listeners are hating us right now.

**Anders Damsgaard:** Sure.

**Jerod Santo:** Anyways, User Styles? I don't know...

**Adam Stacoviak:** User Styles, there you go. Good job.

**Jerod Santo:** Okay, so touché, Anders. You got me on the clickability. I'm just now seeing that.

**Anders Damsgaard:** In terms of collaboration there is not a lot of the Git niceties, such as an issue tracker, there is not open pull requests, and things like that... None of that is there. And in the readme for the Scholarref Tools I invite people to contribute changes by sending patches over email.

**Adam Stacoviak:** Uh-oh...

**Anders Damsgaard:** So that's the old-school way of doing it.

**Adam Stacoviak:** Wait, hang on...

**Jerod Santo:** You and Linus, yeah.

**Adam Stacoviak:** So you wanna modernize the way that research is done, yet... \[laughter\] Yet you wanna rewind time when it comes to source code control and the way that software has evolved for collaboration.

**Anders Damsgaard:** Well, modernizing does not necessarily have to mean that you put a fancy GUI on top of everything, and just put lots of JavaScript and CSS just to completely drench whatever information you're trying to convey.

**Adam Stacoviak:** Is that how you describe GitHub?

**Anders Damsgaard:** No... \[laughter\]

**Adam Stacoviak:** I'm just pulling your chain. I guess what I mean by that is it's sort of socially-acceptable that GitHub is not so much THE way, but it is a way to collaborate, and it's a collaboration tool... So you're sort of going against the social norm here.

**Anders Damsgaard:** Sure. Well, I definitely am open for collaboration on this project, and any of my other software projects... Which used to be on GitHub, but I pulled them down because I was not really happy with where GitHub was going as a company.

Thinking about the web as a whole and where the web is going, it doesn't really make sense when, you think about the architecture, that everything should become more and more centralized. I think the web should really be a distributed thing, and there is nothing with my source code and so on that stops you from just copying everything and starting on your own on GitHub, or wherever... Because everything is very liberally-licensed. More liberally than the GPL, for that matter.

So yeah, I think there are lots of reasons to look beyond these mega source code databases, because it doesn't have to be that way. I don't personally see the massive benefits of that.

**Adam Stacoviak:** Has there been any thought -- that's just totally a tangent, so forgive me... But has anybody, or have you put any thought into this idea of the traits and attributes, that feature set (I suppose) that GitHub offers, in a decentralized way, where you don't have to have this kind of repository where it's controlled by a large corporation, in this case? ...previously ran by tried and true hackers, that sold their company to Microsoft... Which isn't a bad thing; there's nothing against that, it's a choice everybody makes, so there's trade-offs... But the point is that I can recall a day when GitHub was ran by - and I'm sure it is; geez, I'm saying negative things here... GitHub's great. It's hard work. I'm not trying to shame anybody here, but it is now owned by a corporation and not by three hackers who got together for beers anymore. It's grown, it's changed...

**Jerod Santo:** Sure.

**Adam Stacoviak:** ...and so that can't be glossed over. It's not the way I suppose it is these days... How do you get to a point where you can kind of have your cake and eat it too, so to speak, when you want to have your own \[unintelligible 00:35:43.17\] but provide collaboration opportunities the way that GitHub has socially-normed collaboration when it comes to source code and open source?

**Anders Damsgaard:** Well, of course, it will always be a trade-off... So because you kind of leave many of these GitHub niceties behind, you might also put yourself at risk with damaging any collaboration that might otherwise present itself. But then again, if people are interested enough, you get pull requests which go beyond just correcting basic typos, and things like that...

**Jerod Santo:** \[00:36:20.24\] Right.

**Anders Damsgaard:** If people want to contribute and really make something significant and provide some significant changes to a software project, I think they'll get in touch no matter what the communication platform is, to be honest.

**Jerod Santo:** Yeah, so I have a couple of thoughts on this. First of all, we should note that GitLab because of this - it was self-hosted, it was supposed to be federated with regards to collaboration... There's been Gitorious, there's been other software projects that were basically like "What if we had GitHub's niceties without the GitHub?" Of course, GitLab has turned into another large corporation that services the enterprise, and I think so far their open, social, public side has not taken off like their enterprise side has -- or, I should say, like GitHub's has... Many hackers out there running their own instances of Git, for sure, and they just make that trade-off.

I do agree, to a certain degree, Anders, where what GitHub and the bringing together of all the developers in one place has provided for projects is visibility and casual contribution niceties... But software collaboration was happening before at GitHub, you just didn't see it, because it was emailing patches around, it was behind the scenes, and it wasn't quite as public.

I think to a certain degree, people who are serious and benefitting from the software, and already understand Git tooling - they can get around the hurdles, that is "This is a non-GitHub setup." That being said, you're probably missing out on some people who would contribute, but aren't, and may start off as a casual contributor and turn into a more serious one.

I was curious, Anders, if your move off of GitHub was around the Microsoft purchase, or if it was before or after that; if that was a major contributing factor in your move away.

**Anders Damsgaard:** Yeah, after the Microsoft purchase I started looking around, and I actually was on GitLab for a little while... But you know, just realizing that these corporations are acting in the interest of shareholders... Which corporations should totally do. That's the thing. But you don't have to constrict yourself to that framework. So just thinking about the alternatives out there, with self-hosting and so on - that was just kind of my ration to that.

I looked into what it would actually take to set up something like that, and it was extremely easy to get up and running, so I just went with it. And so far, so good.

**Jerod Santo:** So is the C program front-end that you're using - is that open source and available? Did you build that, or did you find it?

**Anders Damsgaard:** I didn't. So yeah, that's open source. It's called StaGit, and it's a very minimal program, very nicely written also.

**Jerod Santo:** One thing that's fascinating - of course, we've tracked the acquisition of GitHub by Microsoft since the day it was announced, and we've had many people on the show since then, and different reactions... And my personal reaction thus far - it was kind of a wait and see, and now we're a couple of years into it, and I think in terms of the product that is GitHub.com, it has improved dramatically since then. I feel like the relationship between the corporation and the community has improved in many ways since then... So I've seen mostly positives from that acquisition.

That being said, there are casualties along the way. Adam, I interviewed Ned Batchelder for our Maintainer Spotlight series, Ned told me a story of a guy who was like a -- I told you about him; he was like this traveling contributor... Remember that? He would pick a project for three months or so, and he would contribute to that project heavily, not casually. He'd get all into it, he'd make major contributions, and then he'd move on to the next project. It's just the way he did open source, which was very unique. And his name is Loïc Dachary, I think is how you say his last name in French; a French fella.

\[00:40:11.08\] And Ned had benefitted from his contributions and was just kind of singing his praises, and I said "We should get Loïc on the show." And the other day I went looking for Loïc, and he's not on GitHub. I couldn't find him. I found his website, and he left GitHub. Similar to Anders, he closed his account... And his was specifically the day Microsoft acquired GitHub; he was gone.

I'm curious if he's still doing open source. He's not doing it on GitHub like he was, so there's definitely been downsides along the way.

**Adam Stacoviak:** I think similar in nature, in the way you might do what Anders does here, which is research glaciers for this deep data; you can sort of hypothesize where things are going based upon past, present, and potentially the future... People are doing similar aspects of that towards open source, and then also GitHub. What suffers from this is, I would say, the improvement to software, and then as an effect of that, the human race, because our lives change and get better or worse because of new software in our world to do different things, or in this case do research... You sort of get to this point where the loss really is at the open source level. GitHub is there, trying to do one thing -- and this is totally not even a GitHub show, gosh...

But anyways, we're in this mix here where you have this sort of love/hate for this corporation that owns it... And I'm kind of with you, Jerod; I didn't have the same opinion at first, but when you said "Let's wait and see", I said "I agree. Let's wait and see." And I think most of the things that have come from it have been fairly positive... But what you see is -- and I'd love to talk deeply with Anders and others, like Loïc, to see what specifically has their open source life been like since leaving GitHub, and is it worth the loss that the software/community/open source would benefit from to leave, to not participate.

Because everyone's there. And when I say "everyone", it's only in masses, not everyone. The critical mass is there, so you, Anders, and others, have decided to not participate.

**Anders Damsgaard:** Sure. Well, on a personal level it really is about control. For instance, say that you have an Android phone and you upload all of your photos to Google Photos. Once you're in that kind of framework, it's really hard to migrate away from it, once you have invested in it. And of course, you can always push your Git repositories elsewhere when you have a local mirror, but modern software development on GitHub is not just the code, it's everything around it that we discussed. It's the issues, it's the pull requests, and the wikis, and all of that... And to my knowledge, it's a far bigger issue to move that around to a different platform in the case that the GitHub corporation and Microsoft decides to take the platform elsewhere. So it's about keeping that control, and it doesn't have to be the way where you just give it up for free to this corporation, but actually keeping it to yourself is kind of an advantage, in my opinion.

**Jerod Santo:** Which is the beauty of Git and distributed version control - as long as you don't extend into the full feature set, or you're willing to give up certain aspects of the feature set, like GitHub issues, you are still in control. They are hosting a version, a snapshot, or many snapshots of your code over time... But as long as you don't couple yourself to that corporation, you can always go set up your own deal (StaGit), because you have everything, and moving away is feasible. Maybe it's gonna be more painful the more you buy in, but it's still feasible at any moment... So when something bad happens, you are free to leave. Whereas with other things - they have everything. They have your data; you don't have your data, they have it. It's on their computers, not yours. At least with Git it's on both computers.

**Adam Stacoviak:** \[00:44:11.07\] That's actually the exact beauty of Git - there is multiple copies, and someone can recover it should something happen to one of the versions of it elsewhere, or the nodes of it elsewhere, the copies of it elsewhere.

I'm curious, Anders - this may be going one more layer deeper - are you against having your code on GitHub? Did you wipe all of your code away? Did you just sort of like vacate and stop being there, or did you delete?

**Jerod Santo:** I deleted, for the purpose of not confusing people that were interested in specific projects. So I specifically shut down everything to the bare minimum, pretty much. So for me it's not just about the code itself, which of course you can have distributed among multiple platforms at the same time, but it's also about providing access patterns to the platform.

You know the saying that if you're not paying for it, you're not the customer, but you're the product being sold... And GitHub is not providing this platform to the users out of their heart's goodness. There has to be some kind of money involved, of course, because it's a corporation. So the wheels have to turn, and they're making money somehow. Just like Facebook and the others.

**Jerod Santo:** Well, it's worth differentiating GitHub from Google with regards to their business model. GitHub's business model is more straightforward. It's a freemium model, versus an advertising model. GitHub is making money off of their more power users and organizations paying them monthly a certain amount of dollars in order to have more features... Versus Google, where everything is free and they're making it via advertising. So it is different in that regard, insofar as you are the customer if you are a customer. It's a freemium model, so they give it away to people who they want to eventually become the power users. So it's a little bit less behind the scenes in that regard, because their business model is more money for features.

**Anders Damsgaard:** Sure. I absolutely agree with that.

**Break:** \[00:46:21.00\]

**Adam Stacoviak:** What are the ideal users for this tool? I mean, if we're looking at who could become a drive-by user - not a contributor; that's a more difficult path, as we've mentioned... But a user seems a little easier - Git clone, that's pretty possible. But who's using this tool and what's needed in this space?

**Anders Damsgaard:** I'd say the typical user is probably not afraid of the command line, specifically because these are shell scripts. It takes a little bit of fiddling to make it work with whatever you're editing your manuscripts in. So people would probably be familiar with a little bit of coding, and many people are that today within academics, and so on, especially in the technical sciences. So I'd say if you're not afraid of the command line, give it a go and see what happens.

**Adam Stacoviak:** What do you say to the idea of climate science dabblers? I'm a curious person; we have a show called Brain Science, and I'm brain science-curious, at least... And I've actually listened to quantum physics books, and I've listened to -- and I say "listened to" because I listen to books a lot more than I read books, but it's still reading, in my opinion... I've listened to large-scale lectures about actually how time works, how we travel through time and the actual physics of time... So I would say I'm maybe in that wheelhouse, although I'm not really digging into climate science... But for those who might be similar to me, or somebody who's curious like I am, they might come across not so much this tooling, but the space, the need for more brains in such an important space to say -- if the sea levels rise by what you said earlier, which was half a meter, in the next 100 years, well that's a problem.

**Anders Damsgaard:** Yeah, definitely. And as long as people have an interest, like yourself, in sciences and what's going on there, there are definitely a lot of contributions that can be made by people like you.

For instance, a lot of the modeling tools that are out there under open development - I'd say the far majority of them are developed openly. And a simple contribution to some of these models could be to take a look at the source code, and just check it out and kind of get a feeling for what's going on.

They often have quite good documentation also, that kind of helps developers or people that look into the source code to try to understand how it all works... And maybe you find something that's missing, maybe you find something that you as a person with your background could contribute to maybe the development, or maybe the code itself... Maybe a way of optimizing some kind of algorithm, maybe you know a lot about a certain set of test tools...

For instance, it's pretty easy to get things up and running on Travis and similar CI platforms, so it doesn't necessarily take a lot of effort to get different models up and running on these testing frameworks. That allows the developers behind these models to really make much more clever development as they go, because they can see if the intended changes do the correct thing that they wanted to do.

\[00:52:24.07\] So there are a lot of things that maybe people with purely developer backgrounds can contribute just from their skillset to these kinds of models and communities... So we're all opened arms in that regard, and I think people would be very well welcomed to that community.

**Adam Stacoviak:** That's good to hear, because sometimes when you get into certain fields -- I've heard this at least from Mireille, the co-host on Brain Science with me, about the brain science field, the neuroscience field, that it can be kind of...

**Jerod Santo:** Cliquey?

**Adam Stacoviak:** Her word was "catty", but just sort of like arrogant, I suppose... Maybe these are just putting words into her mouth; I don't think she said this verbatim... But basically, the effect was that "I know a lot..."

**Jerod Santo:** Unwelcoming.

**Adam Stacoviak:** Yeah. Not very welcoming, because there's a lot of specific research, specific opinion formed from research, and a lot of gatekeeping, so to speak, when it comes to entrance and participation. And even credential checking, like "Which letters do you have after your name? Okay, you're not welcome", kind of thing. So that's not the case here, or not so much... Or it is, but it's not so much. \[laughter\] I'm always saying based on his face. We've got video here, so I'm seeing Anders' face as I speak; he's like "Well, there kind of is...", just with his face, so... Use your words.

**Anders Damsgaard:** There can definitely be sharp elbows between maybe different models, competing models. People want to make the most precise model out there, and so on. There will never be a precise model, just from the nature of the problem, but there is a lot of competition, and so on... But if your intent is to just provide a positive contribution to a project as an outsider, you would be very welcomed. I'd say you're not in there to break something, and if you're trying to, you'll probably be told off in a nice way.

**Adam Stacoviak:** Right. Are you trying to be right, or are you trying to solve the world's problems?

**Anders Damsgaard:** Exactly. \[laughs\]

**Adam Stacoviak:** Like, if you're a scientist trying to be right, then your right may not actually be THE right.

**Anders Damsgaard:** Exactly. There's another saying, "All models are wrong, but some are useful."

**Jerod Santo:** Hm, I like that one. There's another saying, "All models are wrong, except from mine. Mine's right." \[laughter\]

**Adam Stacoviak:** Good one, Jerod.

**Jerod Santo:** So maybe as a closing topic, which there's no clean segue to, but I think will be enjoyable regardless, is that you have published some really awesome photography on your website. You're not gonna find it on Flickr, you're not gonna find it on Instagram -- well, maybe it's on Instagram, I don't know; you're not on social networks... But you're gonna find it on Anders' website, which we of course have linked in the show notes... And before we started recording, we were talking about the need for an analog, or for something completely different. And while you're not out in the field, gathering this glacier data, you're sitting at your computer gathering data, you still get out and you take photos... So tell us about that hobby and how you got to -- I mean, in my layman's opinion, you're really good at it. Your photos are really high-quality... Tell us about it.

**Anders Damsgaard:** Thanks, I appreciate that. Yeah, so I think it's very important to have something which is distinctly different from your day job... And most of my hobbies are also computer-centric, so I decided that I needed something in my life, which is analog and away from the entire thing. So I started getting into photography, buying the latest megapixel camera monster, and then I ended up sitting in front of the computer doing post-processing anywhere in these images...

**Adam Stacoviak:** Oh, come on...

**Jerod Santo:** Aah...

**Adam Stacoviak:** What's the megapixel monster you're working with? What is that?

**Anders Damsgaard:** It was a Sony \[unintelligible 00:55:50.00\] It was the original one.

**Adam Stacoviak:** Gotcha. Well, that's an amazing camera.

**Anders Damsgaard:** It is... But I sold it, because I ended up just sitting at the computer, doing spots healing in Photoshop anyway... So now I'm using film cameras and I'm developing pictures in the darkroom, in a spare bathroom that we have...

**Jerod Santo:** \[00:56:12.05\] Oh, that's cool.

**Anders Damsgaard:** ...completely analog, in the red lights, like a dad from the '70s, or something like that. So it's a lot of fun...

**Jerod Santo:** Is it exciting? I only know that world from the movies... And in the movies they got the shot, but they're not sure if they got the shot, and it's gonna reveal something that's intrical to the plot... And they have to wait. The waiting to see if you really got what you'd needed - is there joy in that, or is it just annoying?

**Anders Damsgaard:** Oh, there definitely is a joy to that, as long as you're not a press photographer or something like that, I suppose... But it kind of forces you to be very deliberate, and also forces you to be very methodological in your image-capturing process, because you have to get it right, and you're spending money every time you click the shutter, because you're running through film... But it's slow, \[unintelligible 00:57:00.27\] which involves your physical presence; you have to make sure that the chemicals are mixed right, and stuff like that. You can experiment with a lot of different things in the process... So it's a lot of fun, and it's nice to have a complete break from the usual.

**Adam Stacoviak:** Yeah. One of your series that I liked a lot was the one on patterns. I think what's interesting in this world is - I noticed this when I got a drone and started doing a little bit of aerophotography - right outside your home, just go outside 100 feet away from your home, or 100 meters, whichever system you use (pick a length), and if you can get 100 feet up, or 300 feet up above the ground, you'll see something very different than you will see on the ground. I love that about the world, how there's just patterns and unique things... Or when you zoom in at a very micro-level, how things look differently than, say, just a few feet away. That's so cool... And I love these galleries you've got going on here; you've got the different landscapes, and stuff like that... It's pretty cool.

**Anders Damsgaard:** Thank you very much. Yeah, it's definitely healthy to look under the surface of just everyday things, or just very far away from the surface, to get a new viewpoint... It's healthy for the mind, I think. That's also why I chose to go with black and white, because it's just a different way of seeing the world, that's not common to normal vision.

**Adam Stacoviak:** Yeah, absolutely. What advice would you give then to those listening, who are like "I don't have an analog"? How did you find this analog for yourself and what has been the benefit to your career? Or I guess just less about career focus than what is your life? How has it changed your life?

**Anders Damsgaard:** Well, I just wanted something that got me out of the house, basically. It kind of allows me to take something home when I'm away from my usual environment. People looking to do some kind of new hobby for themselves, which could be some kind of analog thing - maybe just try to explore what makes you happy, and what clears your mind from the usual churn. So just try out a lot of different stuff and see what sticks.

**Adam Stacoviak:** Jerod, I wanna point the question to you - or somewhat of a statement, I suppose - and you can respond... What I've appreciated is what I assume is one of your analogs, if not many of them, is your love for riding on a tractor and planting trees, and taking care of bees. That's such a cool thing... So what's your analog, Jerod?

**Jerod Santo:** Well, you've just said it.

**Adam Stacoviak:** Is that it?

**Jerod Santo:** I mean, I have a lot of things I do... I do a lot of things in the real world; I play basketball a couple times a week, I coach sports, kids' youth sports... But as far as like -- I like to get my hands in the actual dirt... And I didn't know this about myself until I accidentally bought an acreage a few years back, which is a longer story that I'm not gonna tell here today... But I love planting trees specifically, and nurturing them and watching them grow. I've probably planted on our land maybe 400, almost 500 trees over the last four years... And just thinking about what they're gonna be 10 years from now, 20 years from now, and then ever after we're dead and gone... That heritage or that legacy is really cool, and I never would have thought I'd be into that kind of a thing until I got out and started doing it. I was like "Wow, this is really enjoyable."

**Adam Stacoviak:** \[01:00:18.06\] Yeah.

**Jerod Santo:** So that's me.

**Adam Stacoviak:** The dirt... Something cool about the dirt is actually it's alive. I don't know if anybody can speak to this, but there's a lot -- our soil, so to speak, there's a lot of living organisms in there, microorganisms that are very important, and what we do in today's society is basically covered up with cement... Here in Houston we call it the cement village, or cement jungle...

**Jerod Santo:** Concrete jungle?

**Adam Stacoviak:** Yeah, concrete jungle... Because we just are fascinated with just covering up our amazing soil with cement. It's terrible.

**Jerod Santo:** It goes back to that Counting Crows song, "They've paved paradise and put up a parking lot."

**Adam Stacoviak:** Oh, man... There you go. That's terrible.

**Jerod Santo:** So Anders, one last question on your analog, because I don't understand this world at all... When you switched to film then, and you're doing them in the dark room, how do you then get them back into digital format to put them on the website? Are they scanned, or how does that work?

**Anders Damsgaard:** Yeah, I scan them.

**Jerod Santo:** Okay.

**Anders Damsgaard:** That's the easiest way to do it to deal with reflections, and so on... So scanning is the way to go.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** They got us locked in, right? These machines, these machines...

**Jerod Santo:** Yup... You're subject to them.

**Adam Stacoviak:** It's how we're communicating now...

**Jerod Santo:** You finally escape, and then you go digitize it and put it back onto the machine... \[laughter\]

**Adam Stacoviak:** Well, at least you're minimizing though, right? You're minimizing the amount of exposure to the digital world, which I think is pretty important. It's an interesting thing to even think about - minimizing your exposure to (I guess) limited data. Because even here - we have a lot of data informing us about this conversation and these relationships in this conversation; I can see all of you, we're on Zoom and we can see each other's faces, but it's still a limited dataset. We're not in the same environment, we don't hear the same cars or things passing by, we don't hear similar things... There's a lot of things we're sharing, but not a full spectrum of data, and I think that's kind of bad. You're misinformed about the life you're living and who you're living it with. There's more data to be had.

**Jerod Santo:** So what you really want is smellovision.

**Adam Stacoviak:** Smellovision.

**Jerod Santo:** You wanna be able to smell what I'm smelling right now. \[laughter\]

**Adam Stacoviak:** You had to go there... We're too far in. We're too far in.

**Anders Damsgaard:** Yeah.

**Adam Stacoviak:** What do you think about that, Anders? The limiting of digital exposure. Is that a thing you thought about?

**Anders Damsgaard:** Yeah, definitely. For instance, I'm trying to minimize my cell phone usage at the moment. I think it's just healthy to step away. We didn't evolve to be constantly stimulated by electronic devices. Our brains and mental presence is really \[unintelligible 01:02:54.03\] to slower encounters and to more in-depth conversations than you might get from flickering through a social feed, or something like that... So it's probably worth just stepping away a little bit and feeling yourself, and trying to engage in other things as well.

**Adam Stacoviak:** What have you read to inform that opinion of "We haven't evolved to be stimulated by digital devices?" Is that just an opinion, or how did you -- what I'm really trying to get at is is there any book you can reference, that you've read and you're like "Man, this blew my mind. This is not how we should evolve", and you're on a street corner, on a soapbox or something like that, telling the world...

**Anders Damsgaard:** No, I'm too busy with research to really read much extra than that, but just thinking about the timescale - we are several millions of years old as a species, and the digital revolution is not even a blink of an eye. So there's no way that our physical form really has adapted to any of that, so it definitely makes sense to just take it slow sometimes.

**Adam Stacoviak:** Well, clearly we can keep piquing our curiosity and go deeper and deeper, but... Let's leave it there. Anders, thank you so much for "Do what you can to limit your exposure to this digital world", but still sharing this unique toolset, and your love for photography, and your care for the future of our world, which could be resulted in more water or less. It'd be terrible if there was more, though... We need to keep the ice where it's at.

**Anders Damsgaard:** Thank you very much for having me, Adam.

**Break:** \[01:04:35.28\]

**Adam Stacoviak:** It's my slogan for when I run for office, "We need to keep the ice where it's at, okay?!" \[laughter\] And everyone will adopt that.

**Anders Damsgaard:** Exactly.

**Jerod Santo:** What's funny is your seemingly anti-social move of not being on GitHub, which you think would reduce your visibility, has actually backfired and now you're getting because of it. \[laughter\]

**Anders Damsgaard:** Yeah, it's true.

**Jerod Santo:** Because the tools are cool, and it was like -- when I first went to your website, I thought "This guy is interesting." I watched your video of your research, I'm like "Alright, interesting guy..." Then I went back to Brian's request and he's like "And he's on self-hosted Git" and I'm like "Oh, so there's kind of like two facets", and I was like "Okay, that's a good guest right there." So that aspect of it which was anti-social became social.

**Anders Damsgaard:** \[laughs\] Cool.

**Jerod Santo:** Yeah... So I'm sorry, it backfired.

**Anders Damsgaard:** Yeah, it totally did. And now I'm on a podcast...

**Jerod Santo:** And now you're on a podcast. \[laughter\]

**Adam Stacoviak:** Exactly!
