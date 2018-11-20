**Adam Stacoviak:** Angie, we are definitely not deep in the weeds on Drupal, so we're coming to this show in high hopes that you can catch us up on all things Drupal. I think I can go back to potentially when Leo Laporte started TWiT; I recall that brand new site they launched, and this was maybe 2006 through 2008 range, somewhere in there; that's where I really saw Drupal be really well used... But at the time I was using WordPress, was really getting into front-end development, CSS, design and things like that, and I just never find myself getting into Drupal very far... But Drupal has such a rich, rich history, great people; you're obviously a core contributor and core committer, co-author of books... The list is long, so help us understand. We have an audience who's not very familiar with hearing more Drupal news... Catch us up. What is it? What are we missing?

**Angela Byron:** Yeah, sure. Well, I try to explain Drupal in a couple of different ways. The biggest way that I find to explain it - I call it a "framlication".

**Jerod Santo:** A what?

**Adam Stacoviak:** A "framlication".

**Angela Byron:** Yeah. There's a lot of projects that are frameworks, and they're for developers, and they expose APIs, and they are meant to be used by people who'd write code for a living and they're fine with that. And then there's applications that are meant to be used by non-technical users, who don't know anything about the code, but they know how to fill in forms, and press buttons, and make things happen that way. Drupal is kind of at this interesting intersection where it is an application, it's a content management framework, there's buttons to click, there's forms to fill out, there's content to be modeled, this kind of thing... But then at the same time, it offers robust APIs and extension points that allows developers to really get into it.

So it kind of started as a project that was by developers for developers. At the time - this project started in 2001, so at the time, cutting-edge things like RSS, and stuff like that... It kind of attracted this developer audience, who then wanted to make it as flexible as possible.

\[00:04:11.03\] So there's extension points for everything under the sun, there's 30,000 modules that you can use to add different types of functionality to it, and the whole thing is done in a really well-architected way, so you kind of use the same concepts throughout.

An application like WordPress, if you want a photo gallery, there might be 70 or 80 different photo galleries you can pick from, and you pick which one is closest to what you need. In Drupal, you will build your photo gallery up, and you build it by using an image field module that will add images, support to upload things, you'll add a view, which displays images in a grid or in a listing, or something like that, you add a pager, and you add these other things... So you really customize it to be exactly what you want. For the most part, all of that is done without writing any code. But if you want to take what's there and then extend the crap out of it and make it really custom, or have it integrate with some external system, or you want it to output all of the data as JSON, so you can use a decoupled front-end, or a mobile app, or something like that in front of it, you can also do all of those things.

I like to say that Drupal is for -- if you were a VCR kid back in the day, you know your parents' VCR would blink twelve and they didn't know how to fix it, so they'd call you over... And every VCR is kind of different, but you can kind of figure it out, like "Okay, well I'll press buttons, and there, it's fixed." So if you're okay tinkering with things and you kind of get a charge out of that, and kind of figuring out how stuff works, I think Drupal is a really great solution. It is not at all a good solution if you want a website up and running in five minutes that you never have to touch again. That is not what Drupal is for. For that, lots of other things - WordPress, Squarespace, other types of things would be a better fit.

**Jerod Santo:** Sure. I have just a little bit more experience Drupal than Adam. I had one experience on a client contract where I was basically extending an existing Drupal installation; this was probably in the 2010 range... And my takeaway then -- first of all, I had a successful install and extension, so I accomplished what I needed to accomplish... And everything seemed like it was pretty well organized, it wasn't that hard to understand, but there was so much there. I was like, "Wow, this is like you walk into a library and you see all those books." It felt that way. It felt like, "Wow, this place has a lot of books."

I'm always curious or I'm always interested in the architecture of things and why things are the way that they are, and like why WordPress is the way WordPress is, and why Drupal is the way Drupal is... A lot of times we can tease that out of its history, and especially with open source projects, it's like "Why does it exist in the first place?" and sometimes you can kind of tease why the architecture or why it is the way it is because of its original goal... So can you help us understand that genesis story of where Drupal came from? I know it was around the turn of the century; it's been around for a very long time. By the way, also, 40k contributors... This is maybe the best-kept secret in open source. This is a huge community, right? But where did it come from and why did the creators create it?

**Angela Byron:** So I wasn't around for these days. I came into the project more like 2005, but back in 2001, basically how it started is the project founder Dries Buytaert basically wanted a website thingy so that people in his dorm could communicate to one another about what types of things were going on. So he built this thing in PHP and MySQL, because at the time that was the cutting-edge technology... \[laughs\]

**Jerod Santo:** It really was, yeah.

**Angela Byron:** \[00:07:48.20\] Yeah, and kind of like built this thing, and then others of his friends - because he was in a computer science type of program - contributed to it. Then he was very inspired by what Linus was doing with Linux, and kind of the open-sourcing of that, worked a bunch on Linux stuff as well, and so he really wanted to make his project open source. And at the time, the only other real open source CMS back then was PhpNuke, and I don't know if you still have the battle scars from dealing with that whole mess, but...

**Jerod Santo:** I definitely had a couple of run-ins with that one...

**Angela Byron:** Yeah, yeah. So PhpNuke was this very monolithic -- it was driven by one developer, monolithic, did all the things built-in, and it was kind of a big mess... No offense to the people who -- I'm sure they worked hard on it... I used it, it worked, it was THE thing to use back then, but it was really large and clunky and insecure and all of these different kinds of things. So Drupal came in to be the opposite of that. We wanted something that was modular, and flexible, something that had a really solid architecture, something that was well-documented, something that was easily extensible by developers...

I remember PhpNuke had these websites, like PhpNuke hacks, and by that what they meant is "Find this file, go to line 119, and start editing it, and then make it say something different than what it does." And then God forbid you use two different hacks and they collide with each other, and the god forbid again, you upload...

**Adam Stacoviak:** And 119 is no longer the hack line. You've gotta act accordingly.

**Angela Byron:** Right, yeah. And then a security update comes out, and then you have to figure out how to get the security update with your hacks... It's just kind of a mess.

**Adam Stacoviak:** Oh, the days, yes...

**Angela Byron:** Yes, yes... Sorry, I should have put a content warning before I started talking about that, because some people are like "Nooooo...!"

**Adam Stacoviak:** Some people are on the floor right now, crying from unexpected autobiographical memories they have totally purged, but you brought back into existence.

**Angela Byron:** Yeah, I'm sorry. I apologize on behalf of my web development brethren. So that was kind of the age. Drupal really set out to be absolutely not any of those things at all. Drupal shipped with a very small core offering, which basically had some basic functionality handled, like user logins and permissions, and roles, and stuff like that... It handled the ability to post content, the ability to -- I don't even know... Again, it was before my time. But some basic functionality to be able to maintain content through web forms, and stuff like that. But it was all built with the premise that we don't know what people are gonna do with this thing; we wanna make it super-flexible, so what shipped with core was very small. Then if you wanted to do more things, like, say, be a recipe database, or be a ratings and reviews website or something like that, you could still do that, but you would install these add-on modules, and then the add-on modules would be able to extend the Drupal core system just through the APIs, and not through having to have PhpNuke hacks kind of site.

A lot of developers really got interested in this, so the early days of it were developers being like "Oh, thank god this is open source and it's not this monolithic, horrible thing. Yay!"

Early days, back in 2004 I wanna say, Howard Dean ran for president, and that didn't end up working out very well, mostly due to him...

**Jerod Santo:** Yeah, I remember -- didn't he have this chant he was doing, and that basically ruined his entire run?

**Angela Byron:** He did some kind of a scream, or something... It's really funny how our threshold for what gets you throw out of politics has shifted, let's say, over the last several years...

**Jerod Santo:** I know... I was just thinking, Howard Dean gotta be rolling in his grave. Or maybe he's still alive, but he's gotta be angry.

**Adam Stacoviak:** He ran for presidency of the United States?

**Jerod Santo:** Yup.

**Angela Byron:** Yeah, yeah...

**Adam Stacoviak:** Okay... I was thinking maybe president of Drupal, or something like that.

**Angela Byron:** No, no, sorry...

**Adam Stacoviak:** This is a big deal. Okay...

**Angela Byron:** Yeah, he was a presidential candidate. He got pretty far, but he attracted a lot of these young technologists who were very passionate about somebody with half of a clue, like, maybe becoming president... "Oh my god, wouldn't that be me...!?" So they started this grassroots political campaign, and they used Drupal to do it.

\[00:12:02.09\] So what they did is they built what's called a distribution of Drupal, which means like a pre-setup version of Drupal with a bunch of things already done. Kind of like, you know, you can build a Docker container that already has this version of PHP, and this version of that, the other thing. Drupal has this concept of distribution, so you can say "I want these seven modules, and I want these settings set this way, or whatever, and then you can kind of cookie-cutter out websites based on a template.

So they built one of these for the Howard Dean campaign - Howard Dean Connecticut, and Howard Dean California, and all these different locations would spin up a Drupal site, they all could talk to one another, so people were able to log in to each of the different sites, and share content with one another, and it was the first time that technology was really used to power a political campaign, and that kind of got Drupal on the map, honestly.

The other thing that got Drupal on the map is kerneltrap.org, which was a big Linux news site back then, also adopted it... So that got a lot of Linux nerds really super-excited about Drupal, as well.

So yeah, that's what got Drupal on the map. And I came in very shortly after that, so I got to miss those beginning parts, but I got to hear about it kind of, and then I kind of accidentally got into this project just as it was taking off... And these days, grammy.com uses it to run the Grammies during the busiest traffic day of the year for them, a lot of sports websites use it, government websites use it, non-profit websites use it... Anybody with what we call a "ambitious digital experience", whatever that means, tends to use Drupal for it, because it's scalable, it's flexible, it's customizable, and it's become a household name in a lot of different areas. We're running 2% of the web right now, which is pretty significant...

**Jerod Santo:** Not too bad, yeah.

**Angela Byron:** ...considering that it's not for like cat blogs, and stuff like that. You can build a cat blog with Drupal, but that would be like swatting a fly with a Cadillac, or something. You don't need that--

**Jerod Santo:** Right, it's overkill.

**Angela Byron:** Yeah.

**Jerod Santo:** So just a quick follow-up for those following along, in the show notes I did link up "2004, the screen that doomed Howard Dean" YouTube video. So if you want to catch up on your history...

**Angela Byron:** \[laughs\] Great, so we can all study up on our history, and what used to end a political career back in 2004.

**Jerod Santo:** Yeah.

**Angela Byron:** Good stuff.

**Adam Stacoviak:** Are we gonna have that in the show notes then?

**Jerod Santo:** Yeah, that's gonna be in the show notes for you all, so go watch that. It's only like a minute.

**Adam Stacoviak:** Okay. I wanna catch up with that.

**Jerod Santo:** Yeah, catch up on that. So what brought you to it? You said you came in right after that first wave of adoption, and the groundswell of people thinking "Okay, Drupal is something I have to catch out." What about you personally? Why did you get involved? What attracted you to the "framlication"? Did I get it right?

**Angela Byron:** \[laughs\] Yeah, sure.

**Jerod Santo:** ...and then why have you stuck around so long?

**Angela Byron:** That's an interesting story. I first got a computer when I was like 16, which was a lot of years ago, let's just put it that way... It was back when Debian Linux fit on 7 floppy disks. It was a long time ago.

**Adam Stacoviak:** Oh, floppy disks...

**Angela Byron:** Yeah, good times... So I learned about open source and Linux and all that kind of stuff back in like the mid-90's, and just fell in love with this idea of like "Holy crap! All these smart people kind of band together and they work really hard on this problem, and then they give the solution away for free, and then anyone can take it and modify it if they need, and this is such incredible benefit for humanity - the educational institutions, non-profits, non-government organizations, everything." So I got really, really interested in open source and Linux and all these kinds of things, but I thought I was not good enough to actually participate in an open source project, because I figured you had to be like Einstein, or something to do that.

\[00:15:49.21\] So I looked up to all these dudes who were running the open source world -- or I think it was still called "free software" back then... And just in awe of what they were accomplishing, but kind of felt like I was on the outside of that and could never really break in. So Firefox, back in the day, set up a Drupal site for SpreadFirefox.com, and it was a really interesting website that allowed anyone to upload, say, posters, or post events of things that were happening at their campus, or this kind of thing, to try and do a grassroots marketing campaign around Firefox... And I'm one of those people that goes around viewing source on every website I visit, because I'm just curious how it works underneath... And I saw the name "Drupal", and I had never heard of it, but I kind of made a note for later, because it was like "Oh, that's neat. Drupal is powering that thing. Cool!"

Many, many years later, I was just graduating my final program in a community college, and they announced that there was this program - this was in 2005 - called "Google Summer of Code." Google Summer of Code, for those who don't know, is where Google pays you a stipend over the summer to work with an open source project, and you basically take something off of their hit list, or you propose your own project, or something like that, but you basically work three months embedded in an open source community, and then as long as you do a good job and you don't slough off, then you get money. Yay, money! And code, and everything.

So the idea is programmers don't have to go flip burgers over the summer, they can instead flip bits, you know? It's a pretty good system.

**Adam Stacoviak:** Nice...

**Jerod Santo:** I like that.

**Adam Stacoviak:** \[unintelligible 00:17:24.00\] burgers.

**Jerod Santo:** Was that their marketing campaign, or did you just come up with that one yourself?

**Angela Byron:** No, that's theirs. No, I'm not nearly that clever. But yeah, so I saw Drupal on the list, and I figured "What the heck?", so I applied and got accepted.

**Jerod Santo:** Awesome.

**Angela Byron:** Yeah, and once I was on this side of the "You must be this smart to contribute to open source", I was like "Oh, crap! Anybody can do this!" and people are super-grateful when you come and you're like "Hey, I know how to test things, and I know how to write documentation, and I know how to test this core patch, and I know how to do this...", and I found that people were incredibly gracious, and incredibly welcoming, and I just kind of dove in head-first.

Then I got kind of way too into it. I was on the webmasters team, and the security team, and the documentation team, and the core developer team. I got REALLY into Drupal, because it was basically like ten years' worth of excitement build up, and I just went crazy, and went helping with everything.

I ended up getting a job out of that, which I thought -- you know, I figured once Google Summer of Code was done, I would go write boring .NET accounting applications, or something; I didn't know what I was gonna do. But instead, I actually got a job doing open source in this thing that I loved, in this community that I loved, and it was amazing. So I try really hard -- now I have a much higher profile in the community because I worked my butt off for like... 13 years it's been? Jesus!

**Jerod Santo:** Wow...

**Adam Stacoviak:** In the trenches, for sure.

**Angela Byron:** Yeah, so I try really hard to help other people who are facing that sort of impostor syndrome wall, because it definitely held me back, and I think it holds back a lot of people that would otherwise be really into what we're doing, but don't think they're good enough to contribute.

**Jerod Santo:** Well, you're amongst friends, because that's exactly part of our mission with the Changelog - to break the veil of open source, and make it more open and show the community that everybody has value and can contribute, and when we are that way, everybody benefits.

**Angela Byron:** Yay, that's awesome!

**Jerod Santo:** So that's an amazing story... I'm happy that once you got past -- and I had a similar experience. It's so scary, and you feel outsidery, and "How do I do this thing? These people are all better than me" kind of feeling... And then you realize there's so many ways to contribute, and there's so much value that you can provide. I'm excited that -- first of all, your excitement is a bit contagious, so I'm getting excited about Drupal all of a sudden... But I love that once you got into it, you just went all-in and made a career out of it. That's amazing.

**Angela Byron:** Yeah, if anything's worth doing, it's just overdoing, basically... That's how I live my life. But yeah, and it was also helpful because the attitude was so great. I've been part of communities where the attitude is "Oh, you don't know about the blah-blah-blah module? Pfft, whatever..."

**Jerod Santo:** \[00:20:19.09\] Right, RTFM...

**Angela Byron:** And in this community it was the opposite. It was like "Oh, you don't know about the blah-blah-blah module?! Well, let me tell you about it, because it's awesome, and then you'll know about it and we can talk about it!" That really, really helped, and I think that that kind of mentorship built into the DNA of the community is really important, and that predates my involvement, but I definitely have tried to shepherd that forward myself, and seen amazing efforts by other people in the community to shepherd for those efforts as well.

**Adam Stacoviak:** What's interesting is that your story of going from impostor to contributor to full-time open source predates most of the stories we shared here on the show today, which are I guess maybe current stories, and it seems like a trend that's happening today, meanwhile it happened to you - I don't know what year; I'm just guessing 2008-ish, 2009-ish, based on just trying to track your history there?

**Angela Byron:** Yeah, I guess my first job would have been in 2006...

**Adam Stacoviak:** Okay...

**Angela Byron:** Yeah, but I'd say when I became a core committer, that was 2008; that was a big deal, leading up to the Drupal 7 release... Which was one thing I was gonna mention - if the last time you tried Drupal was 2010, you really should maybe look at it again, because we have been working on it since then, and it's a bit better now... \[laughs\]

**Adam Stacoviak:** What do you think has kept you in Drupal? Obviously, you've got a lot of passion and there's energy, but there's only so many things like that that can keep you there... The community, the tech... What is it that keeps you or has kept you? ...or I guess hooked you is probably a better term, because -- I mean, you didn't try to leave, did you? You stayed, so something got you...

**Angela Byron:** Yeah. By the way, we call the extension points in Drupal "hooks", so you accidentally made an epic Drupal pun, so... Nice lead-on.

**Jerod Santo:** Oh, nice job, Adam... \[laughter\]

**Adam Stacoviak:** I've done my homework, Jerod...

**Jerod Santo:** \[laughs\]

**Angela Byron:** I would say it's probably a combination of things... And I would say three things, but I might end up saying four things, I'm sorry. The primary one is definitely the people. We go to DrupalCons, which we have a couple times a year, and it's like a family reunion, a lot of times, and it's like, people are there, and they're hugging each other because they actually like each other, not because they're trying to make some kind of a signal, or something like that... It's genuine.

Also, the point at which I got in the community -- I went through some really tough personal stuff at the end of 2015, 2016, and I realized that my friends that I know from the Drupal community are actually my friends, and some of them I've known for like a decade, and all of them kind of coming up and helping me in various ways, cooking me waffles, or whatever... It's just a really amazing community, and I love being part of it.

Part of it too is just there's such smart people there and I learn new things all of the time. There's people who are very passionate about, say, accessibility, or about making JavaScript work in a modern way that's friendly to new developers, and all these different things that people are interested in, so I get to learn about all of this stuff that I wouldn't if I was still building my own custom CMS's, which is what I did after the PhpNuke age, because I was like, "Nope!" But if I was still doing that, I would still be in my little silo, and I wouldn't know all these great things about internationalization, and all the different aspects of Drupal that it kind of covers for you, and security, and all these kinds of things.

So constantly learning new things, and then... I think the technical problem is really interesting as well, because you're building for multiple audiences. Every time you build a feature, you have to think not only about "How are we gonna write the APIs so that developers can extend this where they need to, and the classes and objects and stuff are all named in a way that makes sense to people etc.?", all those problem space... But then you're also thinking about "How would a non-technical content author use this feature?"

\[00:24:19.15\] They're not gonna know anything about modules, or functions, or any of that stuff. They're gonna be presented with an interface, so how do we build an interface around this brilliant piece of technology, so that they understand it and they can use it? And I find that dichotomy really interesting and challenging, and I don't know if that comes up in other projects that are based around just one of those audiences.

**Break:** \[00:24:47.18\]

**Jerod Santo:** Alright Angie, you teased four points, and you gave us three... I feel like there's one more reason why you might be sticking around the Drupal team, so... What else have you got?

**Angela Byron:** What is this, holding me accountable to the things I say...?

**Jerod Santo:** \[laughs\]

**Angela Byron:** I would say the fourth point is actually my employer and my job. I work for Acquia, and Acquia is a startup that is co-founded by Dries, the BDFL or project lead of Drupal. So the BDFL is my boss. No pressure. But I somehow lucked into, well I didn't luck, I lucked in, and I also worked my butt off for many, many years... But I have this job where I basically get paid full-time to make the community awesome. That involves flying around the world to sprints, and sitting with developers, and getting whiteboards, and "Let's figure out how we're gonna solve this really tough problem", or it involves talking to the different initiative teams, trying to figure out what they're trying to build, trying to communicate that in a way that humans can understand it, and trying to figure out how to unblock them from being awesome. Sometimes that's promoting the work that they're doing, sometimes it's we plan a sprint for them in some locations, sometimes it's "Let's fund this expert to just bang out this piece of code that's blocking everybody", or whatever it is.

My job is basically to find the toughest problems for Drupal and solve them... And it's amazing. And Acquia was really supportive of me as well when I went through a crappy time... So yeah, I think it's that combination of the people, the learning new things all the time, the - whatever my third point was... \[laughter\]

**Jerod Santo:** It was a long time ago.

**Angela Byron:** That was like ages ago. There was like a break in between. But anyways, it's a combination of all those things I think that really got me involved and keeps me involved in Drupal, and excited about it.

**Adam Stacoviak:** I asked you what hooked you, but I think maybe what might be the answer for those out there in the community of Drupal might be many like you, with the kind of energy and enthusiasm, and it seems like you're a super-kind person, so...

**Angela Byron:** \[00:28:02.21\] Oh, thank you.

**Adam Stacoviak:** Tell us about the community piece of things. Are there many you's out there, with the kind of care and enthusiasm and - I don't know, just... Cool person? \[laughter\] Is that what keeps people there?

**Jerod Santo:** Are there more cool people?

**Adam Stacoviak:** Is there more than you?

**Angela Byron:** No, I'm the only cool person. \[laughs\] Just kidding, no...

**Adam Stacoviak:** What do you think keeps others, basically?

**Angela Byron:** There is a lot of cool people in Drupal.

**Adam Stacoviak:** Well, you mentioned the conference, which seems to be just never-ending, and huge... How big does that conference get, DrupalCon?

**Angela Byron:** Yeah, so DrupalCon is a really great experience. There's about 3,000 people who come to DrupalCon North America, about 1,500-1,800 that come to the European one, so they kind of go every other... DrupalCon is a really great experience though, because you get to sit and listen to people talk, and these are people that you know from the community, and you get and sit and have drinks with them, or work next to them at a sprint, or this kind of thing.

My favorite thing about DrupalCon, in addition to the knowledge sharing and the hallway track and all that stuff that's at any conference really, we do a -- the last day of the conference is called The Contribution Day, and that's where we have basically two huge rooms, ballroom-style rooms in the conference center, with tables set up everywhere. One of the rooms is for new contributors. In that room, they do a section at the beginning of the day that's like "Here's how to get the development environment set up. Here's how Git works. Here's how the Issue key works. Here's how to make your first patch", and that kind of thing.

Then they pre-fabricate a bunch of issues that would make good first patches for somebody, and then there are mentors that walk around in brightly-colored T-shirts and basically work with the people there to make sure that they're getting some value out of the experience.

The other room has people who are established in Drupal, and tables are all set up so that, say, "This table is working on media. This table is working on configuration management. This table is working on automated testing", or whatever it is... And you just go to a table that has a label that you're interested in, and then ta-da, you're working with the three people who know everything about that, and you just get to join in with them and they're happy to have you.

And then mid-way through the day, the people who have just written their first patch, they get to come into the big room with everybody else, and we co-mingle. And then my favorite, favorite thing is we pick one or two of those patches and we do what's called a live commit, so someone like myself or one of the other core committers will get up on stage and do a whole song and dance... This is usually where I find out all the ways that use Git incorrectly, because I hear this dramatic gasp from the audience when I type something, like "Okay..." \[laughs\] So I basically use fear-driven Git, that's my thing.

Basically, we do drum-rolls on the tables and stuff, but we actually do a patch review live, and talk about it and then commit it to the software, show their name and the commit log, and all that kind of stuff, so... And people just get super-excited and they leave feeling like they've contributed to something bigger than themselves, and everybody -- it's just a really great way to feature awesome people. We get the people who wrote the patch up there, the people who mentored them up there, the people who provided a real view up there to kind of show that it's not these one-off rockstar people that are getting this thing done, and it's actually -- it takes a village to get a change made, and stuff... So that's a really, really fun experience, and I look forward to that every time.

**Adam Stacoviak:** It's a portion that requires, as you had said, somebody to show up - these people that knew all the things... So I think of it from one lens, which is like "Great! The people who have been around, know all the things, they show up." That's kind of required for some of the interaction you just mentioned there. And without going a little too far into the "what keeps people around" aspect, but I wanna know, once you're past a certain stage of a project, or your involvement, or your knowledge space of it, you kind of get bored, maybe you move on... What is it that makes those types of people show up?

\[00:32:12.11\] Because that's a really important piece to community that I feel like, Jerod, that Drupal has just done well... And we haven't covered it much; not because we don't care about it, but just somehow, someway this news isn't bubbling up to us, or we're-- I'm not really sure, but maybe you can give us a purview into what makes these types of people show up, so that you can have new contributors, you're gonna have these experiences you just described.

**Angela Byron:** I mean, to a large extent it's the same factors I described earlier that keep me involved, also keep these people involved. We are trying to be better; I wouldn't say we're perfect yet, but we're trying to be better about not burning people to a crisp, because that's usually what happens when someone's really passionate about something - they work and work and work, and then they start turning into patient zero, making everyone else around them burnt out on Drupal as well, in their behavior and in the way their interact, and things like that.

So we've tried a number of different things. One - built into our governance structures, at least for core (we're still working on this in other areas of the project), we have what are called provisional maintainers. A provisional maintainer is someone who you think would make a great maintainer, but maybe either they aren't ready yet, or you're not quite ready yet to see them in that position... So we bring them on as provisional maintainers, so they can try out what it would be like to be a maintainer, so they can commit patches, they can review patches, this kind of stuff. But it's sort of done with the idea that that's like a mentored position. Then once they've met or exceeded the threshold, then everyone's like "Oh, this person is great!", and they become a full-fledged maintainer.

Having that provisional maintainer thing is useful, because it sort of puts it in the back of everyone's mind, like "I should definitely have a replacement for me at all times." And as long as you have someone in that provisional slot, then it lets you kind of go "Phew" a little bit, and you don't feel as responsible for everything when you know that there are other people to carry the load. So that's one aspect that we've done.

Another thing that we're playing around with - this first happened in the Drupal Association, which is the non-profit foundation, that is responsible for the website, and marketing, and all the things around the Drupal project, except for the code... They started doing term limits, and then overlapping terms, and stuff like that. So the idea that when you sign up to be, say, the security working group lead, or you sign up to be on the community working group, or something like that - that is a fixed position, so you can choose to extend it if you want, if you're still feeling good about it, but there's also a way to gracefully roll off, if this is no longer your scene... And I think that helps a lot with combatting that, because it gives a maximum amount of burnout that people can be subjected to, and it gives people a way to save face when they're just like "I can't with this anymore." So that's been really useful.

I think also we have a lot of people who care a lot about people in our community, so we have the diversity inclusion initiative, we have the community working group, and they are really trying hard to make the community a welcoming and open place for people, and to take people aside when they're not making the community like that, and try and work with them, just be like "What's going on? How can we help?", this kind of thing.

I think all of those different things add up. And I wouldn't say we're perfect. We've definitely had some very high-profile flame-outs in our community, but I think that the people there are well-intentioned, they're really trying hard to make it a place where people come, and you know, if you need to take time off, that's awesome; we actively encourage that, please do that.

\[00:35:59.15\] But you still get people - and I was one of those myself - who are just like "I have to stay, because nothing will happen if I don't!", this kind of thing, and an overwhelming sense of responsibility, and stuff... I think we're just a bit smarter about that, because it's an old project; we've seen people flame out like this multiple times, so I think trying to catch it earlier, when we can, or taking people aside, when we can - those are different ways we combat it... But I don't think we have this down by any means, but that's some of the strategies we employ anyway.

**Jerod Santo:** It sounds like the community definitely has its scars over the years... Any open source project that's gonna be around for 15, 16, 17 years - like you said, humans are gonna human, so we're gonna have issues...

**Angela Byron:** Yeah, exactly.

**Jerod Santo:** ...but it sounds like you all are doing a lot of the things right, or well, and that probably comes from time and experience, but it also comes from caring and trying. You're not gonna do things well if you don't care to, or if you don't try to. That sounds like a spectacular aspect of the Drupal community. While we're talking about the people and how awesome they are, probably a good chance to mention Gabe, and thank him for getting this show put together. Gabe - help me out with the last name, Angie... Is it Solis?

**Angela Byron:** Solis.

**Jerod Santo:** Gabe Solis - without him, this conversation would not be happening. Gabe - long-time listener. He suggested Drupal when we put a tweet out a couple weeks back, asking "What are things that we should be covering that we're not covering?" and he mentioned that we haven't really done anything on Drupal... Now, much to my surprise, I was like "Dang, we really haven't talked about Drupal ever", so we got in touch with Gabe... And props to Gabe, because we asked who would be a great person to talk to, and most of the time that's when people will say "I would be pretty good at talking about that..."

**Angela Byron:** \[laughs\]

**Jerod Santo:** Most people do that, which is fine, and it's often the case... But he didn't say that. He said "Actually, Angie Byron would be a spectacular representative", so thanks Gabe for listening and for helping us put this show together.

**Angela Byron:** That's awesome. And Gabe - what he does in Drupal is he co-leads the API-First initiative. This is the initiative that's working on Drupal's underlying REST API, working on putting JSON API support into core, working on making sure that when you write a decoupled front-end or a mobile application or anything of that nature that's consuming data out of Drupal, or putting data back into Drupal, that you have a wonderful and fun time doing so. Asterisk - we're still working on it, but you know... \[laughter\]

**Jerod Santo:** Well, that might be a good segue in the modern Drupal, or what Drupal looks like in 2018, and I guess (gosh) it's almost 2019. The people who are just coming to the project, and maybe they have just heard this show, and they've heard the history, and probably the awesome community, and is like "Okay, that's something I can get into...", what should they find? What kind of technology is there? Where is its sweet spot? What does Drupal look like nowadays?

**Angela Byron:** Sure. I'd say what Drupal has focused on a lot more in recent years is filling out -- I mentioned before that Drupal used to be a very small core, very unopinionated, and very bare-bones. It was basically like "Here's a box of legos, dump it on the table. Have fun with that!" I'd say what we focused on in more recent years is, okay, so we still want the box of legos, and we still want the ability to put the legos in different places, and all this kind of stuff, and build the castle, or the canoe, or whatever it is.

However, there's certain things that 80% of websites are gonna want, for example the ability to upload images... \[laughs\] Lately, it's been the ability to moderate content, so build content in a draft mode before it's published, and have control over who's allowed to move things from Draft to Publish, and these kinds of things. The ability to do a page layout building experience, and some of these other kinds of things.

So what Drupal has really concentrated on in the last, I'd say - this is since 2011, so seven years, eight years almost - is really making the core that you download something that is usable out of the box to build a good chunk of sites, so that you're really only needing to go to the contributed modules or custom modules for stuff that actually is kind of off the beaten path. So for your average content management experience, it's all kind of built in there and ready to go.

\[00:40:13.24\] Drupal 8 is the current version of Drupal we have. If you used Drupal in 2010, that probably would have been Drupal 6... Which was a great release, don't get me wrong, but Drupal 7 and 8 really focused a lot on the usability piece of things... So you wouldn't recognize the interface at all anymore, I don't think. And it's also really focused on making the out-of-the-box product a lot more feature-filled, to the point that we just had the Drupal 8.6 release a couple of months ago, and it ships with a demo that shows what Drupal can actually do... Because that was one of the biggest things - you'd install WordPress, and it's immediately obvious what WordPress is and what it's for, and then you install Drupal and it looks like an ugly blog from 1996, like Slashdot, or something... It's like, "Why would I ever use this thing, when I can use this other thing?" So it was not doing a good job at all of really highlighting Drupal's strengths, which is the ability to create structured content, so you can create these things called entities, the entities can have discreet fields on them, of different types, like a numeric field, a date/time field, a geographic field, storing lat/lon, or whatever... All kinds of different things.

Then you can enter content in a structured way, you can mix and match the content out -- say, you can just post the whole thing as one piece of content, or you can say "Make a sidebar block that pulls in the title, the teaser, the author" and that's it. You can output the entire thing as a JSON feed... It's very flexible in what it allows you to do, but we weren't highlighting that aspect of Drupal at all.

Drupal ships with a little demo called Umami - a fake restaurant website. So it ships with some sample content, with some images, so you get to see what Drupal's media experience is like, you get to see how we built out the content types and the relationships between the content types... So I think recipes relate back to articles, or something like that; they use some kind of a reference field to show off that. They're working for Drupal 8.7 on a multilingual demo, really showing off that capability of Drupal, because that's pretty unique, something that we offer that a lot of people don't really know about, which is -- you know, why not show it off?

And then as the media and layout experiences get more and more fleshed out -- right now those are both kind of offered in an experimental way, because we're still actively working on them, but as those get finalized and production-ready, then you'll see those things going to the demo as well. So that's something I'm really excited about.

My role in Drupal is I'm a core committer, but I'm also a product manager, so my job is to keep an eye on what all of our various competitors are doing, keep an eye on what our users are complaining about, keep an eye on the gap analysis between those two things and figure out where we should be focusing our efforts.

I'm really excited about this direction change, because it basically eliminates 30 hours of messing around, downloading modules and configuring them just so, and whatever, with every site build. You just download it, it's ready to go, and then you work on the really interesting parts of your site, that are not like "How is the content author gonna put stuff in here?" So I'd say that's the biggest directional change.

I could talk too about some of the development initiatives we have going on at the moment, if that's of interest to people, or if you want more of like a high-level things, it's basically like "Make it more powerful out of the box", is the biggest directional change.

**Jerod Santo:** \[laughs\] Make it more powerful... That sounds like a high-level goal right there.

**Angela Byron:** Yeah. \[laughs\]

**Jerod Santo:** "Let's make this thing better!"

**Adam Stacoviak:** It seems kind of Rails-ish in a way too, where it's sort of convention-by-configuration, but not quite the same configuration...

**Jerod Santo:** Also a different level of abstraction, but similar--

**Adam Stacoviak:** Yeah, exactly, but similar roots in terms of ideology.

**Angela Byron:** \[00:43:57.27\] Yeah, and what's interesting about it too is even though we are, say, configuring a default experience that will work for like 80% of people, you still at all times need to be mindful of that 20%, because that 20% is very vocal, and definitely does not wanna be cut out from being able to do the crazy things that they wanna do.

**Jerod Santo:** Yeah.

**Angela Byron:** Back in 2007 or 2008 or something, there were people that were building little tiny Drupal distributions that fit on a USB stick, that could be shipped to a disaster area so that they could just plug a USB stick in and start gathering data of all the different people who were in need. People do all kinds of crazy stuff with Drupal. They use it to run ship lines, and stuff, or what's coming up on the TV -- all kinds of things people use Drupal for, so we don't ever wanna reduce the amount of flexibility you can do with Drupal, but at the same time, at the end of the day, most people just wanna put their content in it and get it out and have it not look like crap; that's the dream. \[laughter\] And also have the experience not be super-frustrating... So I'd say that's mostly been the big shift.

We've also built a lot of new powerful developer features in Drupal as well, like the configuration management aspect... Everything can be exported, and then moved from dev, to stage, to live via Git, it's all in yaml files, and that kind of thing... And the API-First Initiative, which I mentioned, which Gabe is part of... And some of the other ones are very focused on that developer audience. We definitely don't forget about them ever, because they're the people doing the work, so they definitely care about the stuff that affects them...

**Jerod Santo:** Sure.

**Angela Byron:** But yeah, the directional change of like also really prioritizing the content author, aka "the victim of Drupal", who' gotta use the thing that you set up every day...

**Jerod Santo:** The victim... \[laughter\]

**Angela Byron:** We're making sure that they actually have a good experience. Because when they don't have a good experience, they're gonna gripe to the IT people and they're gonna replace the thing with something else, so... We want them to have a good experience.

**Jerod Santo:** I'm curious from a product manager perspective you mentioned that one of the things you do is keep an eye on competitors and see what they are up to, and I'm just wondering what's the most apples-to-apples comparison of a competitor. I think people would think of WordPress, but there's definitely some differences there with origination, and... WordPress was a publishing platform that people have definitely molded into more of a generic CMS, but when you think of Drupal's competitors, what's the top three that you're like "These are things that pretty much do the same thing, and maybe do it in a different way"?

**Angela Byron:** It's interesting, because while we're still in this framlication mode - we'll see what the future brings, but while we're still in framlication mode of trying to reach all ends of that audience, I'd say our big three competitors are everything from enterprise CMS, like Adobe Experience Manager, that end of things, to WordPress; we're seeing WordPress in different competes, and stuff like that... All the way to something like Contentful. And Contentful is a purely data modeling back-end that you then pipe out to JSON.

I would argue the advantage of Drupal is that it can be all three of those things. But if you want only the decoupled back-end thingy-thing, Contentful might be a better choice for you, but... I like Drupal because I'm fundamentally a very lazy person, I'll just be outright with it... And I kind of feel like I often get clients that don't know what they want... So this allows me to learn one thing, and then when they want just a basic website set up, it's like, boom-boom, done! "Oh, and also it needs a photo gallery." "Okay, great." Click, click, click. "Oh, and also it needs to integrate with Salesforce." "Okay", well that's a click, and a couple of codes, and that kind of thing. It's really flexible that way. And then "Oh, now my CEO got this Blackberry from 1992, and he wants to make sure that can work with it...", you know this kind of thing. \[laughs\] It's able to evolve with the changing needs of a site really easily, which is awesome.

So that's kind of where I would say we look at our competitors, it's kind of the range of those different things.

\[00:48:10.10\] I would say things that are not our competition would be things like Squarespace, Wix... Those would definitely be like down-market for us; those things that are like -- you're building a five-page website and you wanna do it in four seconds, and you don't wanna think... We're not in that space. We're not in the space of Tumblr, or things of that nature. But I would say for anything above that, that is definitely the area that Drupal plays in. And yeah, it's fascinating to look through some of the case studies at Drupal.org and see how people are using Drupal, because it's used everywhere.

**Break:** \[00:48:50.07\]

**Adam Stacoviak:** So I would say developers are probably lazy to some degree...

**Jerod Santo:** Big-time lazy.

**Adam Stacoviak:** ...we have maybe a large audience of developers -- I'm just assuming some things here, having done 320(ish) of these show before, so... I kind of have an eye for what our--

**Jerod Santo:** We might have the laziest audience of all podcasts. \[laughter\]

**Adam Stacoviak:** Yeah, exactly... In a good way, of course.

**Jerod Santo:** \[laughs\] Said with love.

**Adam Stacoviak:** So I'm imagining there's a skillset that's been built up by most developers, that they can reuse or easily move to something else if they wanted to. This excitement, this community, this energy you bring, Angie, may be a surprise, potentially, to a lot of listeners of this show... And they're thinking, "Geez, well what does it really take to be a Drupal developer?" What skills do they need to have? Maybe they've already got them, and it's like "I don't have to go relearn something new... I've already got the necessarily skills." Break that down for us.

**Angela Byron:** \[00:52:05.06\] Sure. Well, I should say that Drupal is still written in PHP, and MySQL, JavaScript, that kind of thing in general... I would say the skills you need generally speaking though - you don't wanna start coding with Drupal until after you've tried to do everything you can without coding. And what I mean by that is that often people come into Drupal, and they're a PHP developer, or they're a Java developer or whatever, and they come in and they're like "I know how to code. This is gonna be great." So they immediately go in, find those extension points, and start going crazy. That is not the right approach for something like Drupal that has this huge community of contributed modules and 40,000 contributors and all this other kind of thing, because usually, whatever problem you're trying to solve has already been solved by somebody.

**Jerod Santo:** Yeah, that's awesome.

**Angela Byron:** And they've been solved not only in a way that solves your problem, but in a way that solves general problems, and that's where we get into the flexibility of being able to handle all these different use cases. The Views module is a fantastic piece of art, and this is something that ships in core now... But the Views module is essentially a UI around an SQL query builder, more or less. So you can create listings of content, of users, of taxonomy terms, of whatever you have on your site, products for e-commerce, that kind of thing.

You can filter those products to say "I only wanna show ones that have this tag" or "I only wanna show ones that are by this author, or this kind of stuff", you can sort them, you can do all the things you can do with SQL, and then there's a layer on top of that where you can say "How do I want that output to be displayed? I want it to be displayed as a grid view" or "I want it to be displayed as a table, with sortable columns", or "I want it to be displayed as a sidebar block", many different things... A calendar, whatever. And learning that one piece of Drupal saves you an infinite amount of time doing anything that you'd be doing in code, because you just click these things together in minutes, and then your site all of a sudden starts looking like your actual site. So those kinds of things.

There's some learning curve to go up, that are kind of like "drupalisms" that we do in Drupal, that you would not necessarily be used to if you knew SQL by the back of your hand and you were already a confident PHP developer. That can actually get you into trouble sometimes with Drupal.

So I would say first make sure no one else has already solved this, or that there's not already a generalized tool to solve problems like the ones you're trying to solve. Then after that, if you write your custom code that is some PHP development, we use object-oriented PHP in Drupal 8. It follows all the PHP-FIG standards, which for people who aren't PHP people that means nothing, but basically, it looks a lot like every other modern PHP application, so it's nice, because when you come into it, you can be like, "Oh, yeah, I know how this works." So lots of classes, lots of PHP files with little bits of code in them, that kind of thing...

You also generally build a user interface for any functionality that you're adding, so there's hooks and stuff like that for that, so you can easily expose, say, an admin page for your piece of functionality, that has a bunch of form elements in it; there's an API for that. And then if you wanna be fancy, you can also add in some CSS and JavaScript that gets pulled in there. You wanna be careful about that though, because again, Drupal, an infinitely flexible thing, we want all of the output of Drupal to be (what's called) themeable, so that means it's overwritable... Just because you picked green buttons or something for your thing doesn't mean that every site is gonna have green buttons. So we actually run everything that's output to the screen through a theme system, and that allows individual site authors to build their own customizations over what you're providing.

\[00:55:57.02\] I would say the actual mechanical tools required to be a Drupal developer are quite similar to being any kind of web developer, really. I mean, there's PHP, but if you know Java or Ruby or any other language, PHP is pretty easy to pick up. It has a lot of dollar signs in it, that's about it. \[laughter\]

**Jerod Santo:** Dollar signs is simple.

**Adam Stacoviak:** As you were describing it, I was not gonna ask, but I wanna ask it now, so this is a slight break in here for this...

**Angela Byron:** Sure.

**Adam Stacoviak:** It seems like you could be an extreme PHP-type person to help build out some of the deep innards, maybe...

**Angela Byron:** Yes...

**Adam Stacoviak:** And then maybe somebody who's not - and I don't wanna say this in a negative - not really a developer; somebody who's kind of developer-esque... Familiar with, but maybe not comfortable with building out modules and hooks and APIs, but somebody who understands the web language and can put things together... Is that accurate to say?

**Angela Byron:** I think that is accurate to say. I think if you're gonna become a core developer, you definitely need to know the inner guts of PHP, and all that kind of stuff... If you wanna do that, we would love to have you, but that's something people only usually do after they've already--

**Adam Stacoviak:** It's not required to be productive on day one.

**Angela Byron:** Not at all, no.

**Adam Stacoviak:** Okay.

**Angela Byron:** And we do go out of our way, because again, the non-technical user is one of our primary audiences; we call them "the site builders", the people who don't know -- they would never be able to write their own SQL query, but they know how to click together a block in Views, showing hot content, or whatever. They know how to click that together. So I would say most of the time when you're building something in Drupal, you should be able to do it without writing any code, and then the areas where you can't do things without writing any code, usually there's a module already available for that, say bibliographies, or podcasts, or something like that... You could find modules for those kinds of things. And in the event that your use case is so specialized because you're integrating with some third-party AS400 that was invented back in the 60's, then there's API to do that stuff, and then you do need to start writing PHP.

**Jerod Santo:** It sounds awesome.

**Angela Byron:** Yeah! Why not, right?

**Jerod Santo:** That's right.

**Adam Stacoviak:** Let's talk about -- here's the one hiccup I always find in that case of the site builders, as you mentioned... Maybe that's the word; I think that's what you said...

**Angela Byron:** Mm-hm.

**Adam Stacoviak:** ...is -- you've got your dev environment, and then you've got your deploy process and you've got this live site. What's the scenario there for someone who's not really that familiar, who can put things together but is like "Do I FTP this thing?" What's the process to take it from a dev environment, or as you mentioned, different output being themeable, or adopting this theme system...? How do you give someone the skills to play, have fun, built out, maybe even tinker and solve some true problems for their business, and then get it out there, actually usable?

**Angela Byron:** You can upload everything with FTP still, if that's your workflow. Most of our users, especially in Drupal 8, are a little bit more advanced than that. They use often times Git to do their deployment workflows; they keep their website files underneath a Git repository, and then they will commit stuff to the dev environment, and then cut a tag, and then cut that over to production. So that's often times how people do it.

There's also a PHP tool called composer, which is kind of similar to Npm or something of that nature, that allows you to say "I require these and these and these Drupal modules, plus these external libraries, plus this, that and the other thing", and a lot of people use Composer in their deployment workflow, like Composer Update to get all the new code, then commit that to Git, and then fire it over... You don't need to do any of that stuff. If you are a totally non-technical user -- again, we cater to both audiences. If you're totally a non-technical user, then the way you would do that is there's a user interface for the configuration management system; so you would click-click-click-click to change your site all around, add some content types, add some blocks to the page, change some themes, do whatever configuration you're going to do, and then you go to the screen, you click Export, you get a little zip file full of yaml files, which is all of your site configuration, then you go over to your production website, you upload that zip file, it extracts it automatically for you, and it says "Here's all the crap you're gonna change. Are you sure you wanna do this?" and you say yes, and then boom! Your stuff is live on production.

\[01:00:15.15\] Again, everything in Drupal pretty much has both a developer-friendly way - we have a tool called Drush, which is a Drupal shell that can automate all of this stuff; you can run it in shell scripts, and it can enable modules for you, or update configuration, or all kinds of things. They have commands for just about everything. So you can go that route, or you can even just click everything together yourself if you wanna do that... So it really caters to both audiences.

**Adam Stacoviak:** I'd say many audiences. There really isn't an audience that Drupal doesn't cater to. I mean everyone from \[unintelligible 01:00:44.07\] wants to get as deep as a core committer, or someone who wants to be a site builder... It seems like the type of developer that is catered to from Drupal is to some degree infinite.

**Angela Byron:** Yeah, it's interesting, because Drupal 8 was our big pivot point as a project. This is where we started embracing all these modern best practices with using object-oriented PHP, prior to that it was all procedural language, mostly because PHP just wasn't very good at object-oriented programming until about that time. It started adopting external tools like Composer, and all these -- I could list a bunch of PHP libraries that you don't know... Symphony is one of them; it's like an underlying framework for starting HTTP kernels for applications, and stuff like that... But we shifted focus from Drupal from being kind of a "not invented here" sort of attitude to "Hey, let's get off the island and embrace the best solution for every problem that we have." So some of the stuff does make sense for us to do ourselves, like the whole entity system that I talked about, but some stuff, it's like "Let's just use Guzzle, because it's really good at parsing web service data, and doing that kind of thing, so we'll just let that handle it.

That transition though to adopting modern best practices, object-oriented programming, this kind of thing - it did cause a big rift in the community a few years back, when Drupal 8 first came out... Because our users up until that point have been a lot of like "I know how to copy and paste code and modify it, but I don't really know how it works", that kind of stuff. So they can make a module based on copying and pasting some other module and kind of messing with it, but Drupal 8, with using object-oriented programming, and Composer, and all these new things, requires a bit more upfront learning if you're gonna be doing development stuff on it. That kind of scared a lot of people, and they didn't know if they can make the jump or not. Fortunately, many people have made the jump, and people who were already developers - they love it, so we don't have to convince them. It's mostly the non-technical "Site Builder++" people that knew enough about PHP to be dangerous, but not really enough to be a core developer. They struggled a lot with that transition, and some of them still do. So I would say that that's one area that we definitely have to watch, and make sure people are okay when they're making this jump.

Fortunately, the site building experience between 7 and 8 is very much the same. You just get more cool stuff in Drupal 8, so that's really nice. But for people who were doing any kind of coding stuff, there was that transition... But the nice thing is once you've made that transition... You know, Drupal 8 is built in the same way you'd expect any other modern application to be built, so that's really powerful. Once you level up your skills, it only helps you for anything else you're gonna do.

**Adam Stacoviak:** Where do you think the community is growing most at? Is it site builders, users, people who need to build sites using Drupal, or is there a parallel to even contributors or those joining the community to be -- I don't wanna say developers, but somebody who's helping drive the project at a technical level. Where are you seeing your growth, and where are you seeing maybe plateaus, where are you seeing hockey sticks? Help us understand growth, generally.

**Angela Byron:** \[01:04:03.12\] I think we saw a few major changes. It's almost a 20-year-old project, so we've been through a lot of major changes. One major change used to be where the business would make the decision that "In order to maximize efficiency, we're going to choose a content management system." And then they give that task to the IT department. Then the IT department would go and look and a bunch of different things, and then they would pick one. In that kind of scenario, Drupal does really well, because they can see the power of it, it's flexible, it's got APIs for everything, we can extend it easily to whatever weird, new requirement is gonna come down the pipe... So Drupal would often score really well, and in fact a lot of times how Drupal got into these larger organizations that you would necessarily expect to find it is because there was a techie at that company that was tasked to find a tool that did a thing, and they found Drupal, and then that took off like wildfire within the organization.

But there was a shift that happened a few years back - maybe as many as ten years back, I don't know - of letting the "victims" of the CMS be involved in the selection process. The person who has to use that thing every day to add boring press releases - those people, having them involved in the process. That makes a ton of sense. Any agile development thing is like "Have all the stakeholders in the room when you're making big decisions." It's like - totally, it makes sense. But Drupal at the time would fall down absolutely flat in that situation, because it was a tool built for developers; it didn't have a WYSIWYG editor, it didn't have the ability to upload images out of the box... All of these different things. Because you know, from a developer point of view, it's like "I could download that. I know how to get that, that's no problem."

So we saw Drupal struggling a lot during that period of time, so that was one of the driving things to focus so much on the user experience and making sure that it is full-featured out of the box, so when you do stand Drupal up next to anything else, it looks and acts about the same, and then they can focus in on the stuff that makes it different. So I'd say that's one huge trend.

Another huge trend that happened in the recent years is the mobile thing. You know, "Back in my day...", I'm swinging my thing on my stick, and shaking at the kids on my lawn, whatever... But back in my day, it was like -- we had a deal with 800x600, then 1024x768. Or I think that even came later. At first, it was just 640x480 and 800x600, and then "Whoa, whoaa, man... Now we've gotta deal with three screen sizes? What is this...?!"

**Adam Stacoviak:** Well, hang on a second... For those listening, she's talking about resolutions for screens...

**Angela Byron:** Sorry, yes... \[laughs\]

**Adam Stacoviak:** Just in case...

**Angela Byron:** We used to have screens, and they were apart from the computer, and you had to -- \[laughs\]

**Adam Stacoviak:** Right. Responsive design has arrived, it's not going anywhere... It's a thing, and it's just the way it is now, and it's very difficult to enter the space today and not assume that's how it is, because you've got TV's, you've got mobile phones, you've got tablets, you've got -- you just can name all the IoT-related or connected devices that have some sort display... A watch that's just like a 2x2 screen on your wrist... So the screen is infinite.

**Angela Byron:** Yeah. So you have no knowledge of how what you're creating is gonna get consumed, at all, anymore. You never did - people could always do different things - but today especially it's not possible.

**Adam Stacoviak:** The web was confined, and now it's free... To roam.

**Angela Byron:** Yeah, now it's free. And it's wonderful that it's roaming, except all web developers everywhere are crying into their soup, but you know, that's what it is. But what was great about that is we were uniquely poised - not necessarily accidentally, but sort of accidentally - to take advantage of this... Because Drupal has always been built by nerdy people who care about things like semantic markup, or whatever, and they care about things like structured data... So when the requirements now became like "Oh my gosh, we have to have a separation of presentation and logic... How do we do that?" It's like, "Oh, well we've already had that since 2002."

\[01:08:04.17\] And when it became like "We need structured data so that on the mobile app we can create a smaller view of this thing, that doesn't have all the doohickeys and the fields...", it's like "Oh, well we've already got it in the database that way, so we'll just output it slightly differently." So that was really great. Drupal was able to really meet the needs of modern web development really easily that way.

The one area that I'd say we're struggling in a bit is in the JavaScript area. I don't say we're struggling - we're working on it, but this is an area where people will look at this and be like "Mmm..." Because originally, JavaScript - again, back in my day, shaking my stick on the lawn - was something you used to make annoying alert boxes, and that was pretty much the only thing you did with JavaScript. Then Ajax was a thing, and then Gmail was a thing, and then "Wow! This language actually has some legs to it!" and stuff.

**Adam Stacoviak:** Right.

**Angela Byron:** So we did eventually see the value of that, so we adopted jQuery back in 2007, I wanna say... Which was really cool, actually, because it kind of put jQuery on the map, and also got us up and running with a JavaScript framework that people could use to build neat, dynamic UIs, and stuff like that. But a lot of that legacy code now is still showing, ten years later, where it's not quite so fun anymore. So we have a team working on implementing a redesigned admin experience with React, and using modern JavaScript practices, and introducing perhaps a build step, or introducing different types of things, maybe figuring out how we're gonna render things if we're gonna do it on the client side, or if we're gonna do it on the server side. So this is a really interesting place that Drupal is in right now, where we've kind of formulated this as a formal initiative, it's the Admin UI in JavaScript Modernization Initiative, and they've built some prototypes in terms of "Here's how React works, how it can work with Drupal", this kind of thing.

People are already building decoupled Drupal sites, so that's nothing new, but trying to design a core framlication that's infinitely flexible in React is a totally different problem than building, say, a website front-end in React. So that's been a really interesting process, to see those different things come together. The modernization of our JavaScript is something we're actively working on, but we're definitely not there yet, so if you are a JavaScripty person and you look at Drupal, it'll make you plug your nose, but don't worry, we're working on it.

In the meantime, there's a lot of great energy around that initiative, and they're really trying to build the admin front-end in a way that adopts modern best practices in the JavaScript community, just like we did with the PHP community with Drupal 8... Trying to build it based off like -- I think it's called Create React App, or something like that. It's like a standard best practice way that people will start building React applications. They're using GitHub instead of Drupal.org as the main development hub - these kinds of things, to try to really meet JavaScript developers and that JavaScript community where they're at, and get them involved in Drupal that way.

Dries has always been really great at -- the phrase is "skating to where the puck shall be", so he's really good at spotting these trends and trying to spin up initiatives, make sure Drupal is there to meet it... Because Drupal kind of got its start by being cutting-edge and being at that outer edge of all these things. It's great that that continues, and even almost 20 years later we're still working on this stuff.

**Adam Stacoviak:** I was gonna ask you what your biggest challenge is. It sounds like that maybe just answered it... Is that the biggest challenge right now for Drupal?

**Angela Byron:** I think another big challenge is just the way -- this is sort of a pendulum swing. It's sort of like how client server, versus peer-to-peer, versus client server - that's a pendulum swing that goes back and forth. There's also a pendulum swing that goes back and forth between picking something that does 80% of what you need, maybe not exactly in the way you want it, but you can extend it to make it better, versus just starting from complete scratch and building your own custom thing.

\[01:12:05.24\] I think we're right now in a pendulum swing where a lot of people are hiring JavaScript developers, JavaScript developers wanna build a front-end in exactly the way that they wanna build it, they wanna talk to a back-end that gives it exactly the information that they want out of it, and these kinds of things, and they would look at something like Drupal and say "Oh, that's too bloated for what I want." So that's an interesting area that we find ourselves in, because there's trade-offs. If you build a custom thing, you definitely can't get a non-developer site builder to click around in an admin interface and add additional columns and add additional blocks. That requires talking to a developer and getting them to change some code, and then now you've got the block where you want it on the page.

It also issues a lot of the advantages of Drupal, because Drupal's theme system supports -- I think we have AA rating accessibility markup; not AAA, but AA rating accessibility markup, so we've already solved all those hard problems. You get something out of the box in Drupal that is very useful on a screen reader, even the dynamic bits and pieces that we have, like the toolbar, and whatever - they're all vetted by the accessibility team before they go out. So you throw out all of that, you throw out the themability...

**Jerod Santo:** That's excellent.

**Angela Byron:** Yeah, it's awesome. It's so exciting to see how people just spring up from the community and they're like "I care about this thing!" and you just get out of their way and they do amazing things for you. It's really cool.

**Jerod Santo:** Mm-hm. Especially when something that you think is important, but you also think is maybe boring to implement, or not the highest priority, but to somebody else it is the highest priority, and then everybody gets the benefits of it... That's the great stuff.

**Angela Byron:** Yeah. I mean, we're a huge open source project, and we've got even on just core, there's like 4,500 developers. It's huge, it's geographically distributed, and there's a lot of volunteers, so they come in, do one thing and then leave and never come back again. We've had to handle this by -- the core development process introduces these things called "gates", which like "A patch doesn't make it into core unless it satisfies these gates." There's a security gate, an automated, testing gate, we have to make sure we don't introduce a bug twice... There's an accessibility gate, a usability gate, and I'm forgetting some of the other ones... A front-end markup gate... All these kinds of things to make sure that all the new code, even though it's written by 4,500 people who probably never met each other, that it still works and conforms the same way when it gets integrated. It's something we take really seriously, because -- they are no longer running it, but the White House was running Drupal for many years... So that's like the highest target site you can think of.

**Adam Stacoviak:** It's a big deal, yeah.

**Angela Byron:** Yeah, it was a big deal. We try very hard -- we have a lot of "enterprise" (in air quotes) users, and so we try really hard to incorporate best practice standards that work for them. We have a security team that handles not just the core itself, but all of the contributed modules, and they will issue what are called security announcements, they use the CVE system, all the stuff. We do it on a scheduled, regular cadence, so everyone knows "The second Wednesday of the month is gonna suck for you...", those kinds of things. \[laughter\]

**Jerod Santo:** It's nice to know.

**Angela Byron:** But that way you know when to buy pizzas for your whole department or whatever, that kind of stuff. We've learned a lot. Basically, this project sprung up organically; it was one dude's brainchild, and then other people found uses and values out of it, they contributed back to it, other people found even more uses and values and they contributed... It's just grown organically and it's become this amazing thing that people use for all kinds of stuff.

I love that when I fix a bug in Drupal, I'm also fixing it for like the ACLU, or Amnesty International. It's like, "Yes, this is great!"

**Adam Stacoviak:** \[01:15:59.09\] Wow. That's one thing that really gets you, right? When you can make a change or an impact that seems so small, because it's "open source" or free time, or volunteer, or whatever, that you can impact literally millions of people's lives. I mean, that's the easiest way to pay it forward, right? As you said, flip some bits, versus burgers, and boom - you impact millions. That's so cool. I love the fact that you're so focused on the longtail. Nothing you've said is short-term goals.

**Angela Byron:** Right.

**Adam Stacoviak:** And you don't even seem to be phased by what might be today's challenges, which is why I kind of framed it that way. What are you challenged by today, because it seems that you have personally the right kind of attitude, but corporately, as a culture and as a community, the right kind of attitude to persevere through it might seems like hurdles or roadblocks to the next step, to get past those and focus on the longtail... Because you have such a wide, diverse user base, contributor base, and that's so awesome to hear that. I'm pleasantly surprised, Jerod - I don't know about you, but I didn't quite expect this level of just happiness for such a cool community. \[laughter\]

**Jerod Santo:** You thought you'd come on here all depressed, and be like "This is the worst..."

**Angela Byron:** They give us great drugs, I'll tell you that... \[laughs\]

**Adam Stacoviak:** I wasn't sure what to expect.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And I'm personally just that surprised by it. How about this - let's close this way... I'm sure there's somebody or many people listening to this, probably tons of Drupal fans who've been there since the beginning, maybe tons that this is their first experience, or they've heard of it before, but they just don't know the back-story, and they're like "Where do I go to keep up?" So where does someone go that is keeping up or wants to keep up? Where do they go to keep up with Drupal?

**Angela Byron:** There's a Drupal.org/planet. Planet Drupal is kind of a good starting point. That's where people will talk about new modules that they're working on, or they'll talk about different events that are happening, this kind of thing.

Also, if you could -- there's Drupal user groups that get together all over the world, and I think the best way to really learn about Drupal is to meet some of the people involved. Because the first time that you say "Drupal" in front of another human and they don't go like "Bless you!" or something, and it's like "Wow! Oh my gosh, there's people who know about this...!" So I would say if you have access to a local community, go there; go to a local camp or a local user group meetup, something like that, because... I mean, obviously, it's a big community, there's lots of places, but I've never been to one of those - and I travel a lot - and not felt a warm, welcoming presence from everybody there. So I'd say that's a great way to get involved. If you can make it to a DrupalCon, that's even better. You can be part of that sprint experience, and all that kind of stuff that we talked about.

If you're looking for online resources, I'd say Drupal Planet is probably the widest range, that will get you everything from really super-technical, in-the-weeds articles, to kind of philosophical things and all kinds of stuff... And the Drupal Association also would be a good source of high-profile case studies, different initiatives the community is working on, and that kind of stuff.

**Adam Stacoviak:** Awesome. We'll drop a few of these links in the show notes, so if you're listening, don't pull over now; wait till you get back, check the show notes. We also obviously do awesome transcripts - thank you, Alex, for making that happen - and the rest of the community... I mean, Hacktoberfest has been huge, Jerod, for us; I'll put that out there. You've been -- how many PR's, Jerod?

**Jerod Santo:** I'm burning a hole in our merge button.

**Angela Byron:** \[laughs\] Nice!

**Adam Stacoviak:** It just says "Mer" now...

**Jerod Santo:** We've been pleasantly surprised by the community support. That's right... It is now "Merged" button, because everything's merged.

**Adam Stacoviak:** \[01:19:46.20\] Yeah. So our transcripts are open source, you can contribute back that way. If we've said something that seemed unintelligible, go to the transcript, if it's there - you can just search "unintelligible" and easily get a PR that way. If it's still the month of October, maybe you get five of them and you get a T-shirt for Hacktoberfest...

**Angela Byron:** Oh, wow...!

**Adam Stacoviak:** Hey, do it for the LOLs, do it for the greater community, and just make this conversation easier to read. Likewise, our show notes are also open source, so if we've said that has a link, that you're like "It needs to be in the show notes", go to the show, and there's a link that says "Edit on GitHub." You can fork it, add it back, get a PR really easy. Easy way to get into open source. We are kind, we are friendly, we appreciate your support, obviously, for our show notes and transcripts. And likewise, again, these links will be in the show notes, so check that.

Angie, any closing thoughts? It's been such an honor to talk to you... You've got so much energy, you got me fired up for a Wednesday... I love it, way more than I expected, and I love that, too...

**Jerod Santo:** Ditto.

**Adam Stacoviak:** ...so help us close by just sharing any final thoughts around what you've experienced here on the show, or parts of your community that we just need to know more about.

**Angela Byron:** I really like the format of this show. You always get kind of stressed out about any public speaking kind of thing, but I just wanna say you guys make it really literally like a conversation. It's like I'm talking to old friends, even though we've never met, and I love that very much.

I also love the idea of encouraging your listener base to improve the transcripts, because those are so helpful, both to people who can't listen, for whatever reason... Also, I'm sure people take those and probably translate them into different languages, so...

**Adam Stacoviak:** Not yet. Not yet. Jerod, we haven't dealt with that yet...

**Angela Byron:** Oh, well there you go! There's a PR for you. \[laughs\]

**Jerod Santo:** That'd be cool.

**Angela Byron:** I'm so happy that Gabe put us in contact with one another, because this has been a great experience.

**Adam Stacoviak:** Yes. Let's close by saying "Thank you, Gabe."

**Jerod Santo:** Thanks, Gabe!

**Angela Byron:** Woooo, Gabe!

**Adam Stacoviak:** Thanks, Angie. Great talking to you.

**Angela Byron:** Thank you. Yeah, you as well!
