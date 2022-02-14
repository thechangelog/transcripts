**Adam Stacoviak:** Rico, it's 4 AM, and we're excited, because normally we do this show at 2 o'clock PM our time, but it's 4 AM your time... How do you feel?

**Rico Sta. Cruz:** Well, you know, I haven't really had coffee yet, but I'm really excited to be here. I didn't really expect anyone would nominate me; basically, someone just mentioned on GitHub that you should have me on your show, and I got a notification thing and I said "Hey, why not? I've been tuning into the Changelog and I'd be excited to do it", so here I am.

**Adam Stacoviak:** It was kzap on GitHub, a fellow Philippines native with you, Andre Marcelo-Tanner, I believe... Is that right? And he had lots of great things to say about you - different talks you've given, the things you've done, everything from the phenomenal cheatsheets, Devhints.io, which is awesome, and various other projects we'll talk through... That's awesome.

**Jerod Santo:** Rico, we have to apologize for the 4 AM wake-up call, because like kzap, you're over there in the Philippines and I was not thinking about that when I scheduled our regular 2 PM time slot, so thanks for waking up for us. Why don't you help us out by understanding really the vantage point of open source and software development over there in the Philippines?

**Rico Sta. Cruz:** Very interesting question. The guy who nominated me (kzap), he's actually part of a local Slack group that we have, called PHackers.com; just Philippine tech hackers... Which is pretty good, because it's only in the last few two years maybe (2-4 years) that we were getting people online, and people are starting to congregate online and... The way Philippines is - it's pretty fragmented, there's lots of cities, and we have some meetups, but it's not as active as it would be in other countries, so a lot of things happen online.

But we do also have local meetups for interest groups like JavaScript and Ruby, so it's very nice to see that people are actually getting interested into open source, especially now that the open source community is getting pretty big as well.

**Jerod Santo:** Very cool. The main one I believe that you're a part of is the Manila JavaScript community meetup... It sounds like a lot of folks are interested in that, and you've got some big speakers, as well as yourself talking about such topics as "Why is npm slow?" - of course, we'll get a little bit into npm down the road, but... Great to hear that there's at least a start of a local community where people are getting together and doing cool stuff.

Before we get to the major topic, which we want to talk about your cheatsheets - these are things you've been working on for a long time and you finally gave them their own home on the web at Devhints... But before, let's hear a little bit about you, Rico. Tells us a little bit of your origin story; how did you get into the software game, what was that all about?

**Rico Sta. Cruz:** Actually, my background is more into graphic design, and I was doing a lot of UI and web design before I got into this whole web development thing. Once upon a time, my day job was doing plain web design without any sort of coding. Then I met some very interesting people who are way smarter than me, who are into this thing called Ruby, which was very new to me. So I gave it a shot, and we cofounded a small startup a couple of years ago. It basically started from there.

I didn't really have any professional experience with web development at all before this, and suddenly I was there doing Ruby, doing Sinatra, and Rails, and all these things with the help of some other people who have a lot more experience than me. That's pretty much it.

Eventually, I started being somewhere in between. I was a developer/designer, and that was 2009, I think... I was just kind of the person who would like to make things, and every now and then I'd make a project and realize how easy it is to get things online, now that we have Git, we have GitHub and all these platforms.

\[08:05\] I remember asking my friend, "How do you get something out there? Is there a process?" and he told me "Well, I don't know. Push it out there and tweet about it", and that's what we did. \[laughter\]

**Adam Stacoviak:** That's funny, we've been hearing that for years... We've started this podcast in 2009; that's been somewhat of the maintainer/open source inventor feeling, as like "I created it. How do I market it, how do I share it with the world?" That's generally what people did, but part of the motivation for us to do this show, and the blog we've done in the past, the newsletter we created was to shed light on the interesting things happening in open source.

**Rico Sta. Cruz:** Oh yeah, a lot of times people would ask me "How do you get a project out there? How do you get it popular? How do you get people to look at it?" and there's really I think no good answer to that one. Sometimes you never really know.

**Jerod Santo:** I was hoping you were just gonna school us and give us all the tips and tricks right here.

**Adam Stacoviak:** What worked for you? What were some of the things you did that seemed to work?

**Rico Sta. Cruz:** I could tell you a couple of things and what I think worked, but I can't really say if it is what contributed to success... One of the interesting anecdotes I would tell my friends is that there would be times where I would pour my heart and soul into something that I really like doing. I would basically make an entire compiler of JavaScript, because that's what I like to do, I like to tinker around with compilers. I've built js2coffee based on another AST generator, but the thing is these are the things that I like to do, these are the things that I would stay up all night sometimes just to build... And sometimes the smaller things that seem like they don't matter -- I made a small progress bar, and suddenly that's a lot more popular than something I've put so much effort into.

You just never really know which things would become popular. But I think what really helped in general is you have to understand that the people who go to your project on GitHub or on your website are not necessarily people who would be using your work. So your intention should be "How do I make something and explain it in a way that would interest people?"

Let's say for example you're making a React component, and you might be talking to someone who's not really using React, but if you tailor your readme or your website in such a way that makes it seem like "Oh, this is actually an interesting one and I might be using it right now, I might be using it in the future, or a colleague might like it..." You know, you have to sell what it is you're building in your documentation. It's not just describing what it is and how to use it, it's also telling an interesting story.

**Adam Stacoviak:** Do you have any examples of what an interesting story might be? You say "selling" - what does it mean to sell someone in a readme?

**Rico Sta. Cruz:** It's actually very straightforward, I think. I mean, you would see a lot of projects out there, and they would be wondering why people aren't really looking at it, but there's usually no examples or no screenshots, which is kind of a bummer.

Compare that something that even though it might be a simple project, but it has a very clear screenshot describing what it is, at a first glance, in 30 seconds, instead of a readme, and you kind of already know what it is.

**Adam Stacoviak:** \[12:01\] Well, for you as your nprogress project, since you've mentioned that, I think the landing page for that is just perfect because you've got four examples there, you click it and you see it literally in progress. You see it working, which is the point. I think that's sort of like the "Get to the point", it's kind of what you mean by selling.

**Rico Sta. Cruz:** Yeah, exactly. It's something that you go through the website and in 20 seconds you know what this thing does.

**Adam Stacoviak:** Yeah. I was thinking about this for us, Jerod, because we use Turbolinks.

**Jerod Santo:** Yup... As far as using nprogress.js?

**Adam Stacoviak:** Yeah. Well, it says right there, "Perfect for Turbolinks, PJAX..."

**Jerod Santo:** Doesn't Turbolinks 5 have that built in?

**Rico Sta. Cruz:** Yes, Turbolinks 5 has that built in now.

**Jerod Santo:** We have that feature, Adam, it's just our website is too fast, you never see it.

**Adam Stacoviak:** I never see the progress bar because it is just that fast.

**Jerod Santo:** This is a humble brag. \[laughter\]

**Adam Stacoviak:** Our code is on GitHub, so if you wanna check it out, you can.

**Rico Sta. Cruz:** Cool.

**Jerod Santo:** I was gonna say it's not anything that we did that's special, there's a lot of...

**Adam Stacoviak:** It just started there...

**Jerod Santo:** ...very smart people that made it fast that weren't us.

**Adam Stacoviak:** That's from the Ruby community, right?

**Jerod Santo:** Which one, Turbolinks?

**Adam Stacoviak:** Turbolinks, yeah.

**Jerod Santo:** Yeah, it came out of Ruby on Rails, but it's a standalone thing now. Speaking back to your point there, Rico, about demo-able... I mean, we share a lot of projects; like Adam said, it's what we do. They're rarely ever our own things; we're trying to help other people get the word out about what we think they're doing which is interesting... And so in the days of analytics, especially with Twitter metrics and stuff, we can know after the fact what did and did not resonate with the community of people that at least follow the @changelog handle on Twitter, and what I've seen in the last probably two years - it used to be somewhat avant-garde and now it's commonplace - is the rise of anymated gif's in order to embed a movable, demo-able, visual thing right there at the top of your readme, which I think probably today if you had to pick one thing that would sell a project, is a high-quality animated gif that actually displays the value proposition of what this thing does before you get to all the details, its technical merits, how you use it, and stuff. It's just like, "Here you have on nprogress.js", like "Let me see it right away." And if you can't do it on your own website if you're on a readme, animated gifs are a great way of doing that.

**Rico Sta. Cruz:** Oh yeah, and it's very true, and it's also very portable, because they show up on GitHub, on npm, on Twitter, and pretty much everywhere. So that's absolutely great. It's actually pretty interesting to see how much just developers love animated gifs and emojis. I didn't expect it to happen that way.

**Jerod Santo:** It was funny, because the first one -- I think my first exposure to emoji... And Adam, maybe you can recall this, too - I think it was when Apple added them to the iPhone keyboard back in iOS 4, or something. I mean, besides the old emoticons... And then like Skype had some weird-looking smiley faces. Besides like the typical smile, laugh, blah-blah-blah, like the full icon set.

At first I was very down on them. I thought these were for kids, and silly, and I don't know... And then over time, they just swayed me. Does that resonate with you guys, or was I just curmudgeon to start with and you all thought they were awesome from the start?

**Adam Stacoviak:** \[15:47\] I'm with you... My at the time girlfriend, now wife, Heather, she was before the Apple swing; it was when you had to actually install that separate keyboard. It was like an app you could download, and you had to go into your keyboard settings and add this Chinese or Japanese -- it was some sort of...

**Jerod Santo:** Character set?

**Adam Stacoviak:** Yeah, some sort of character set that you had to add. It was like a special thing. And it was sort of like kludgy, and I can remember seeing weird characters, and I couldn't see the things because I didn't have the keyboard in place. So this is pre-then. I'm like, "Are you and your friends talking in these emojis, or whatever these things are?" I didn't get it. Clearly, I'm born in 1979, because I'm showing my age. But... I think they're cool.

**Jerod Santo:** What about you, Rico?

**Rico Sta. Cruz:** Well, we've got people putting emojis in commit messages, putting them on blog posts, and pretty much anywhere you can squeeze in an emoji. Command line apps all have emojis now, so it's actually pretty interesting just how much emojis have been starting to ingrain itself into open source developer culture.

**Jerod Santo:** Absolutely. And that's another thing, if we talk about things that optimize for the retweet or the star in terms of... You know, projects will put an emoji in their description, and there's something about it that just -- I don't know if it's just a visual aid, or... You find the right emoji that represents your little library or whatever, and it gives it an extra little boost.

So it's funny how it's pretty trivial aspects... I mean, for people who -- the developers who reach you like about meritocracy, and like "What's the technical merits of this thing?" and very much the numbers and the tech and the architecture, but at the end of the day we're all very much just sold by animated gifs and emojis.

**Rico Sta. Cruz:** Well, I like to think we're still about the usefulness and the merits of projects, and those are just things we use to convey them.

**Adam Stacoviak:** Not at all.

**Jerod Santo:** I would like to believe that as well. \[laughter\] As with all things, the truth is probably somewhere in the middle.

**Adam Stacoviak:** I think what's interesting too, to go back to the earlier conversation around the vantage point you have on open source, and you mentioned how the community is getting driven, and how recently the Slack was formed and there's community being formed, what do you see as community drivers for you in the Philippines? Do you feel like the United States or Europe, do you feel like they're more advanced? Where do you see the Philippines in your local area in terms of developer community?

**Rico Sta. Cruz:** Okay, so whenever I go to meetups in other countries, one thing I would really notice that is different from here - it's something about culture as well of people being in a room with other strangers, and there are some cultures that welcome this kind of setup pretty openly. You would go to meetups in other countries and they would be more like parties, they would be very social gatherings, and this is wonderful.

The thing about our culture here in the Philippines is a lot of people are pretty shy, a lot of people aren't that outgoing, so as a result sometimes they don't get a lot of people attending meetups, or when they attend meetups it's just a different kind of vibe than it would be in other places. One thing I think is great is now that we have online communities, we're starting to get people out there connecting to more people, not just offline, but also online. I think that's great, because it really goes well with our culture of being reserved people.

\[20:02\] I remember a couple years ago there would be a lot of great talent, there would be people who are really great at what they do, but you'd just never really hear about them because they would never go out, they would never really put themselves out there. Now that we have more avenues to express ourselves - we've got Facebook, we've got Twitter - I think it's just fostering this really good sense of community.

**Jerod Santo:** Do you find that you're less shy, more outgoing, more confident online than in real life? Does the community reflect you in that way, or do you feel like you're somewhat different from your surroundings in that regard?

**Rico Sta. Cruz:** I don't really know... There are times where I would feel a little more seclusive, there are times where I would feel pretty outgoing. Just like any other person, I probably have different moods and swings... So I'm not sure I would be a good representation of everyone.

**Jerod Santo:** Looking back a little bit to the sale side, which is a term that probably a lot of us don't love, like selling your open source projects or getting people interested (whatever you wanna call it), you mentioned that you really came from a design perspective into software and open source, and that's very much reflected in all of your work. If you go to devhints.io, and then on your others projects, RSCSS.io, and the JavaScript one (which is very similar), they all have very thoughtful and aesthetically pleasing design. That seems to also play to the strengths of getting people interested in your work. Have you found that to be something that resonates with folks in terms of the design effort you put into it?

**Rico Sta. Cruz:** I can't really say definitively that it's yes or no, but there are people who would say that it is; there will be people who would say that they are more interested in something because it doesn't look ugly. So I definitely think there's something there. Like I said, I came from a background of design, so sometimes just to make an open source project is probably one of my excuses to design something, so... Yeah.

**Jerod Santo:** Yeah, I think from that perspective I'd say you're very fortunate, because there's many of us - and I can put myself in this particular bucket - where I have a taste for design, but no ability to create it. Lots of times that will stop me from releasing things, or I dread creating the super simple website that I know this thing needs, because I'm gonna struggle so much by not living up to my own standards in design.

It seems like so many open source projects could benefit so immensely from design help, and there's like this chasm that we need to bridge between the two. I don't have any real answers on how we could actually bridge that - Adam, maybe you have some ideas...

**Adam Stacoviak:** I think I'm observing what you're observing. I'm assuming, Rico, that the documentation sites you've got there for like rsjs is homegrown... Is that homegrown, or is that something that you pulled from somewhere else?

**Rico Sta. Cruz:** Yes, it's homegrown. It's powered by a project called Docpress, which a couple of contributors have helped me put together.

**Adam Stacoviak:** Just like Jerod said, I think that you come into your documentation, your sites - even nprogress was a very aesthetically pleasing site. I think what you see there when you have good design is not so much like "Oh, because of the good design, I love this project", it's more like the thoughtfulness, the care, the intention is what comes across in those moments. Because if you go to somebody's projects that -- not that using the default GitHub pages designs as bad, there's nothing wrong with it at all, it's a great starting point, and it may be a great forever point for some projects, but going above and beyond like Rico has shown this person has a significant care for how this project is perceived to the community, so it deserves an extra look.

**Rico Sta. Cruz:** \[24:27\] I see.

**Jerod Santo:** Maybe not even just care, but also skill, to be blunt... Because the sentiment that I'm displaying is like "Even though I do care a lot, and I have the thoughtfulness, and maybe my API design is spectacular and I'm good at things like that, or the CLI interface is really easy to use, so I have user experience, but I just can't put together the design", and I'm just using me as a proxy for people who are in this particular situation - maybe in that case it's like "Well, just use the GitHub pages default theme and just rock your API design right upfront there", but... Rico definitely has a design skill that -- I guess I'll just say it's enviable.

**Adam Stacoviak:** Yeah, I like it, I want it. I want it to be mine. Very enviable. So you mentioned Flatdoc; I didn't look at the details further in this... So this is powered by -- Flatdoc is the fastest, as you say in your sales process; you have the fastest way to create a site for your open source project. That essentially is a JavaScript framework that fetches the pages, like markdown and stuff, but then you also have this theme option as part of this. We'll get probably into it further, but maybe before we hit the first break, give us a tee up to this one.

**Jerod Santo:** And also Docpress... There's lots of stuff to move in here - Flatdoc, Docpress... Tee us up.

**Rico Sta. Cruz:** Docpress is a very small library that basically takes a bunch of markdown and makes a website out of it. It's not a new idea, but it is an implementation that I did, and trying to make it in a way that is very simple and extensible. There are other projects that do the same thing, but this one's mine... \[laughter\] Anyway, a couple of sites that I run, like rscss.io, have been built with the help of Docpress. Docpress itself has been built with the help of some other contributors, which is very nice, because they also started using Docpress on their own sites.

**Adam Stacoviak:** Gotcha. When you said -- before I heard you say "something-doc", and I looked into my notes and I saw Flatdoc, and I made a mistake... So it's Docpress, and then you also have Flatdoc. So they're completely different projects, obviously. Are they similar in any way?

**Rico Sta. Cruz:** Yeah, they are similar in the sense that they make websites out of documentation, but the way they do it is a little different. Flatdoc is more oriented towards things that are pretty small, things that can fit in one page, and Docpress is more for things that would fit into more pages, like a small book or an API documentation.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** I think in that regard you're definitely using your design skills for the greater good here, because you create something like Flatdoc, which is a very nice-looking theme, and it's responsive and all these things, and you can just use it for your project, so in that sense you're taking your design skills and allowing them to transfer to others, so there you go. You can have those enviable skills of Rico Santo on your project.

**Adam Stacoviak:** Yes. They are mine; I will now use Docpress every time. \[laughter\] I love the design, it's definitely -- it's perfect for docs, in all honesty. I think that it's clean, it's simple, and it focuses on the necessary content, so I like it. Very good job.

**Rico Sta. Cruz:** Thank you, thank you. There are a couple of other projects out there that do the same thing, and probably even better. For example, GitBook is very similar to Docpress... One of the things that really interests me as well, that I might be making a couple of things, but other people were doing better, or put more effort into it - that's just kind of how it is, but it feels humbling to be part of that collective effort of many people across the globe, just honing an idea, making implementations of it, and even if other people will be using other projects, like you would be using GitBook instead of Docpress, I kind of feel like I still had some part of it in some way into shaping the idea of what, say, a documentation site generator would be.

**Break:** \[29:00\]

**Jerod Santo:** Rico, the thing that I knew you for prior to kzap telling us we should interview you is your cheatsheets, which I'm a sucker for a good cheatsheet; I love learning by example, I love that TL;DR pages project that blew up on Twitter maybe a month ago. Adam, remember that one? It was saying main pages are too dense and difficult to read; I don't think that's necessarily true, but they hide the examples at the bottom; that's absolutely true. Let's have a new thing that's just examples - I love all that, and I've enjoyed your cheatsheets for some time.

Tell us the story of this, because you finally have a proper Devhints.io, it's like a thing now... But these cheatsheets have existed, so give us the back-story on this project.

**Rico Sta. Cruz:** It used to be just a humble repository with markdown files, so if I have notes on something that I'm learning, I just put a markdown file with the same project name... And for some reason, some people started starring that project, which is very strange. It basically had a readme of two characters, which is a smiley face, just to really drive in the point that I wasn't really expecting much of it.

It started getting traffic, and I decided to put it online on my website, on my personal domain; I didn't really notice for a while, and when I came back to the analytics, it turned out that it was getting traction and people were starting to actually link and starting to tweet about it... And I figured it's probably time that I make it into a full-blown website. So just very recently, I launched Devhints.io, which is basically the same thing as my old cheatsheets website, with a shinier coat onto it. Basically, a domain name where you can just type in devhints.io/something, like /react, or /es6, or whatever it is... That makes it a lot more convenient, because I would sometimes give my cheatsheets to my colleagues, and with such a long URL to type, like my domain name ricostacruz.com/ \[unintelligible 00:33:04\] so on and so forth. Now we just have Devhints.io/ react.

**Adam Stacoviak:** Certainly nice for just pointing somebody to, you know, /sass, /react, and for those just looking for a refresher on certain things, like if you go to /sass, you're doing Sass style sheets... It's very easy to be like "Oh, that's how you do variables" or "Oh, that's how you do nesting, that's how you implement an extender etc." That's really -- not every language is the same, so you can probably rinse and repeat that for most of the different languages, but if you go to React for example, you've got different components and some of them are more complex than others... And the design is pretty awesome, but you can go there very easily and just point anybody to it (obviously) and they get kind of a bird's eye view of what you can expect with certain common implementations in the language.

**Rico Sta. Cruz:** \[33:59\] Oh yeah, and I do like how it's very bite-sized. You could go to any cheatsheet on Devhints and digest and soak up everything, in a minute. One of the things that I'm trying to do is run a Twitter account where I just kind of tweet a random Devhints page with a random snippet, for a daily TL;DR sort of thing.

**Jerod Santo:** That's a good idea.

**Adam Stacoviak:** I like that, especially now that you've got 280 characters to work with; it gives you a little bit more room for shorter code examples, or at least something that can be bite-sized in a tweet, with maybe a value proposition and a URL.

**Jerod Santo:** Just as a sidenote, I think the 280 character limit has been quite a nice change for accounts that aren't personal accounts... That's fine too, but actually our @changelog account or our @GoTimeFM account - these have room to breathe, especially when we're like tweeting about a show; you can actually put some stuff in there now, whereas before it was like you had these emoji, because you don't have characters to represent things, and it was like squeezing every last character... So yeah, another great example is we can fit to tweeting out some TL;DRs, or some tips and tricks; you can actually fit a little bit in there. At first I was like, "Whaaat...?" and then I was like, "Not bad... Not bad at all."

**Adam Stacoviak:** I'm not sure if everybody knows this either, but I literally do not touch our Twitter account. Aside from the occasional response and/or direct message response or something like that, Jerod handles it all, and I'm always super impressed with his abilities to be tongue-in-cheek with certain things, and just funny in certain things... You do a great job of using these 280 characters really wisely, because some people can just go on on a tangent, or even overuse the characters... But you use them wisely; you use them to give the tweet more room to breathe, as you said.

**Jerod Santo:** Oh, thanks.

**Adam Stacoviak:** A little sidebar there... You're welcome, buddy.

**Jerod Santo:** \[laughs\] Thank you. Rico, one of the things that I did back in the day - when I was first learning Vim specifically - was I searched for cheatsheet PDFs, and I would print one off, and I'd like have it at my desk next to me, and I remember also when I was learning Ruby... And I would just say like -- I would have loved, loved, loved to have this website back then, because this is exactly what I was looking for, and they were impossible to find. And the ones that you found were either abandoned, or the person that put the PDF together wasn't very good at design, so it was hard to read them and stuff. So I'm basically just maybe complimenting you on this project, but also wondering if these are meant to be printed, or if you've put thought into print stylesheets and how all that would play out...

**Rico Sta. Cruz:** A couple of people were asking me that, but it actually isn't that easy to implement for Devhints. I'm hoping to get print stylesheets in there sometime, but at the time being we don't have that.

**Adam Stacoviak:** Maybe I can ask this then - do people really wanna print these, Jerod? I mean, the day you mentioned was several years ago.

**Jerod Santo:** This was probably like 12 years ago, but I don't know if that--

**Adam Stacoviak:** Well, I gave you "several" to not make you so old, but anyways...

**Jerod Santo:** People still print stuff, like reference...

**Adam Stacoviak:** Do they?

**Jerod Santo:** Don't you?

**Adam Stacoviak:** Rico, when was the last time you printed something?

**Rico Sta. Cruz:** When I was renewing my passport I needed to print some forms...

**Adam Stacoviak:** See? Exactly... The only time I print things is when I'm returning things to Amazon.

**Jerod Santo:** Like to put it on a shipping box?

**Adam Stacoviak:** That's right, yeah. I will fight somebody over printing something; I'm saving the trees -- no, I'm just kidding. I just hate printing, so I just wonder if like... Is anybody asking you to print these things?

**Jerod Santo:** Just me. Well, he said a couple people...

**Adam Stacoviak:** \[37:58\] Two people. Okay... Two people. Anyways, I'm just playing devil's advocate here. I was just thinking like, do people print these?

**Jerod Santo:** No, I get it, and I agree that printing is on its way out. I feel like if you're trying to learn something and it's complex... I mean, if you look at all those different things you can do in Vim - I'm still learning Vim, after 12-13 years of using it - and you want to commit it to memory, print it off... Even, heck, if you're \[unintelligible 00:38:23.09\] retentive laminate it. Lamination is great.

**Adam Stacoviak:** Whoa...!

**Jerod Santo:** And maybe it's because we're schooling around here, Rachel owns laminated things... And it's nice to have a nice, hard reference. Have it there at your desk - physical thing, you can reference it, you don't have to flip your tab back and forth. There's value there.

**Adam Stacoviak:** I can't disagree with that, and I won't.

**Jerod Santo:** But don't print these, because they won't look very good. Tell us about the technical implementation. You mentioned they were markdown files; I'm assuming that they're still a GitHub repo. Is it collaborative? How do they edit it? Who creates these cheatsheets? Tell us all that stuff.

**Rico Sta. Cruz:** Yes, it's collaborative. There's more pull requests than I can manage... And like what you said, it's a repository with markdown files in it, and we've got Jekyll, which is GitHub Pages' default plug static site engine. At the moment, that's working pretty well for us. So what that does is we just push a bunch of markdown files into a repository, then GitHub Pages will take care of turning it into a website with a bunch of templates, and that's how it is, pretty much.

**Jerod Santo:** There's some aspects here that it feels interactive. I mean, maybe it's just all in HTML search -- because like, the first thing you have here is the search bar. Is that just filtering content on the page, or there's no backend here?

**Rico Sta. Cruz:** Yeah, that's a very lazy implementation; the search, as you know, is not very good, which is something that I'm hoping to push some improvements on some time next year.

**Jerod Santo:** So it's all static, all rendered... Keep it simple, man. I like that.

**Rico Sta. Cruz:** Absolutely. There's no server-side component or anything.

**Jerod Santo:** So 17 open pull requests... This is a new cheatsheet, cheatsheet added for pm2, added cheatsheet for Bulma, added C\# 7, create angular2+... I mean, these are almost all new cheatsheets or changes to existing cheat sheets. And that's the pull requests; there's 181 issues, so there's probably other suggestions and bugs and whatnot, but are these places where you would accept help if somebody were to come through and say "I'm the cheatsheet master", or is that something you like to keep close to the chest? The management of this seems like an interesting aspect of it.

**Rico Sta. Cruz:** Oh, no, definitely. It's not something that I'm keeping to myself, and there's a lot of contributions into Devhints; a lot of people will contribute anything from small typo changes to new sections to totally new cheatsheets, and I totally welcome that because I can't write everything. You've mentioned, I think, 180 issues, so there's probably more than when I last checked. Most of that are people requesting, "Oh, can you put a cheatsheet for...?" whatever their favorite library or language is. Sometimes I don't even know these languages or libraries, so it would be very helpful if other people could put together something, put together a pull request.

**Jerod Santo:** Well, you are not lying, because I'm looking now at the open issues, and they're almost all cheatsheet requests: Mercurial, Polymer 2, elm, Rust, Markojs... One says "APP\_NAME\_HERE" They didn't actually figure out they were supposed to put the app name right there... Actually, two of them. Anyways...

**Adam Stacoviak:** \[42:01\] I think something interesting too, Jerod, is something that comes a little closer to the hacker heart of Changelog.com is José Valim contributed an update to the Phoenix cheatsheet, which was to use proper directory structure for Phoenix... So you kind of have this language creator, somebody who is playing heavily in Elixir and Phoenix saying "Oh, let me help you out here." It's already in place, somebody has already contributed, but something's been updated and somebody like José comes by and says "Oh, let me send a PR for this." That's awesome.

**Rico Sta. Cruz:** That's actually pretty interesting... As you said, José Valim is one of the people who have put together Elixir as a language. Phoenix was the project of someone else (Chris McCord), but anyway, I worked with these two guys before, because when they were building Phoenix and Plug and their error pages, they took a template that I did, started up with that, and I basically told them "Hey, why don't we build one from scratch?" and I built something and contributed to Plug and Phoenix with their help.

I was really surprised to see José Valim's name in a very recent PR in Devhints, because I didn't tell him anything about the project... I'm really surprised to see like "Hey, you stumbled upon my new project." That's pretty cool.

**Adam Stacoviak:** Any pressure to change the name, considering it began as Cheatsheets, now it's Devhints... Any concerns there around branding, or just name collisions?

**Rico Sta. Cruz:** Well, I didn't really wanna call it like "RicosCheatsheets.com", but... \[laughter\]

**Jerod Santo:** It still says "Rico's Cheatsheets" when you hit the Devhints homepage.

**Rico Sta. Cruz:** Yeah... The main idea behind getting a domain name is to get people to be able to type it from memory, so I just tried to pick something that was easily rememberable and not taken, so I went with Devhints.

**Adam Stacoviak:** I didn't notice that, Jerod. It does say that. It's the headline, "Rico's Cheatsheets."

**Rico Sta. Cruz:** Yeah, I didn't wanna lose the homegrown feel of it, because at the end of the day, 95% of this is stuff that I typed out, and I'm not gonna deny, a lot of these cheatsheets have a bias towards some approaches that I feel would be better -- I mean, they are kind of opinionated in some way, so I just thought like "Yeah, maybe I'll keep that headline in there."

**Jerod Santo:** Yeah, just a signal to people that "Yes, this is community, yes, these are all open source, but these are Rico's cheatsheets, alright?" \[laughter\]

**Adam Stacoviak:** One thing I was noticing too was the process of writing a markdown file, which can be kind of tough if hand-type a table, like you may have to for (I believe it's) the zsh cheatsheet. So if you go to devhints.io/zsh, you will see what I'm talking about, and right there at the top with the markdown version of this it says Expressions... Luckily, we have potentially sites online that make it a little easier to actually create a markdown table, because it's fairly cryptic to read as markdown... But rendered, you've got this beautiful-looking table, but it's essentially a heading and some supported content that gets designed out.

Considering how simple I guess the style guideline may be in terms of how you implement a new cheatsheet, have you had any pushback Rico? Do you actually have a styleguide? I know you have the contributing document, but is there anything that says more clearly "Hey, when you create a heading that's H2 in a markdown and follow it up with a table or a code example, expect that to fall in line or fall into this grid and it'll look beautiful on the site." How do you instill good guidelines for people to follow?

**Rico Sta. Cruz:** \[46:23\] Good question. There's actually a cheatsheet for that...

**Adam Stacoviak:** Is that right?

**Jerod Santo:** Oh, snap!

**Adam Stacoviak:** Is it called Guidelines?

**Rico Sta. Cruz:** It's called Cheatsheet-Styles, and I think it's the link from the contributing.md file.

**Jerod Santo:** I see it there.

**Adam Stacoviak:** I'm looking at it now. Okay, nice. So you've got variance, you've got h3 sections... Interesting.

**Rico Sta. Cruz:** Yeah. It's not like a super well thought out documentation, but it seems like it does its job for now. A couple of people are submitting their cheatsheets and I'm actually very pleasantly surprised that they all look good without me helping them out.

**Adam Stacoviak:** Well, I mean, it's a Jekyll site, so that's fairly easy, aside from maybe, say, getting the right Ruby in place, or Gems in place; there's still some things people trip over. Aside from something like that, getting Jekyll to run is fairly painless, but being able to see even the online documentation, like this URL we're looking at, which is Devhints.io/cheatsheet-styles and comparing that to its counterpart in the repo, you can kind of look at the markdown and say "Well, this is how it's gonna look once I ship it or once it's rendered on the site." It's good.

**Rico Sta. Cruz:** Yeah, so what I really like about how everything is set up in Devhints is that I try to make it so that it's optimized to authorship a very easy thing to do. I basically just wanna go from idea to cheatsheet, just by opening Vim, typing a couple of things out, and then suddenly it's a cheatsheet. Like you said, it's all markdown, there's not much special about it.

**Jerod Santo:** Looking at this, I can't help but think back to the good old days - if you guys will go with me - of Defunkt's cheat tool. Do you guys remember that?

**Adam Stacoviak:** I do...

**Jerod Santo:** I don't know Rico if you were around back then, but Chris Wanstrath -- I can never say his last name.

**Adam Stacoviak:** Wanstrath.

**Jerod Santo:** Wanstrath (Defunkt) - of course, well-beloved hacker and one of the co-founders of GitHub - used to have lots of really awesome open source projects. One was called Cheat, and Cheat was a command line tool that did basically exactly as described, cheatsheets from the command line; they were text-only, you'd type "cheat Rails" or what have you, and it would pull them right there in for you. This is very much in the same vein as that, so I can't help but think "When is Devhints coming to my command line?" That's what I want - I want cheats in my command line, because Chris' thing is long closed down, and this is maintained, and it's got great design and tons of information. Are you bringing it to the command line?

**Rico Sta. Cruz:** Interesting that you mentioned Defunkt's Cheat, because that was one of the things that I was also referring to and one of the things that was I guess an inspiration for Devhints. Like you said, it's not been maintained for a little while; I don't think the website's working right now, but yeah... This is one of the things that I was referring to when making Devhints.

For the command line - it's interesting, I've been actually thinking about this, like "What's the best way to bring it to the command line?" and the way I do it at the moment is you just use a command line browser like w3m or lynx, and Devhints is mostly just markdown and it's mostly just simple HTML; they come out pretty great in the command line as well.

**Jerod Santo:** \[50:07\] Well, that's a good hack for now. I think ideally I'd love to just type like "hint es6" and then have like an actual ncurses-based rendered thing that's like native. But I'll try that here... So you can just -- I'll use lynx, and just put a full URL in, /es6... Should I allow cookies? Oh, man... Am I allowing cookies? Hopefully, that's a -- eh, not bad. Got pagination there... I haven't used lynx since I was a kid, so that's cool. Good idea, I like that.

**Adam Stacoviak:** And you just have it handy? Lynx is just handy for you?

**Jerod Santo:** Lynx should be default on most UNIX's.

**Adam Stacoviak:** Oh, is that right? I didn't know it was baked in. I wondered if it was something you had to app.get or homebrew...

**Jerod Santo:** Maybe -- it's actually in user/local/bin, so maybe I homebrewed it, I don't know.

**Adam Stacoviak:** Okay.

**Jerod Santo:** But what was the other command line based browser you mentioned there, Rico?

**Rico Sta. Cruz:** w3m.

**Jerod Santo:** I don't know that one. That's a new one to me, w3m. Is that a newer one, or older...?

**Rico Sta. Cruz:** It's newer, but it's still pretty old. I remember using it back when I couldn't get X Windows to run in Linux... So it's been out there for a while.

**Adam Stacoviak:** That's an interesting concept too, to use a text-based browser and the command line implementation of that to just essentially browse a fairly simple markup site. The markup for this site isn't very complex. I would say it's a good temporary; I'm not sure it would be a good long-term, but I could be wrong. Some people just demand more, and if you don't give it to them, they'll create it on their own.

**Jerod Santo:** One thing you could do just to like "How could you get it done really quickly?", even if you weren't Rico, if you're just like "You know what, I could hack a command line tool around this" is -- does a markdown file exist on the Devhints domain, or is it just the rendered HTML?

**Rico Sta. Cruz:** It doesn't on the domain, but it does on GitHub. It's all just a wrapper, so you could just fetch it by HTTPS, I guess.

**Jerod Santo:** Yeah, you could just resolve it just from the -- because all the naming is very conventional; this is similar to how we do our transcripts, where all of our names are basically conventional around showtitle-slug.md, what have you... So you could just write a little wrapper that basically goes to GitHub, you could type "hint" and then "es6" and it just resolves Rico's repository, the raw version of the markdown, and then parses it, and then displays it in some sort of good fashion there.

**Adam Stacoviak:** Yeah, all these markdown files are in the root, so...

**Jerod Santo:** Easy peasy.

**Adam Stacoviak:** Right?

**Jerod Santo:** Somebody do that. Tweet at us, let us know about it. Any last thoughts on Devhints before we switch subjects on you?

**Rico Sta. Cruz:** Well, do check it out and tweet about it, and contribute something if you see something that you could edit or something you could make for it.

**Adam Stacoviak:** Any call to creators out there that are like "You know, my thing has to be in every hinter..."? What's the best way? I guess you probably just--

**Jerod Santo:** "My thing has to be in every hinter", who thinks that? \[laughs\]

**Adam Stacoviak:** I would imagine that... Like, if I'm the creator of Elixir, for example (José Valim), I would make sure that all my hints are in your base.

**Jerod Santo:** \[laughs\] You've gotta give José credit, man... He's everywhere. The guy is everywhere.

**Adam Stacoviak:** He is everywhere, yeah.

**Jerod Santo:** So what's the best way to get your projects' cheatsheet in Devhints.io?

**Rico Sta. Cruz:** A pull request.

**Jerod Santo:** \[54:01\] A pull request... But you've got a lot of them pull requests; how do you float to the top of the pile? How do you get an easy merge button?

**Rico Sta. Cruz:** Good question... I'm just trying to clear out the pull request queue right now, actually...

**Jerod Santo:** While you're on the show?

**Adam Stacoviak:** I was just seeing, they're going away right now... \[laughter\] That's a good call to action, actually, to say -- I'm imagining that a lot of these pull requests are not so much "Rico required", right? This is something where if you care about others getting leveled up, then lend a hand to clearing out some of these issues, or at least giving some feedback, additional eyeballs, so to speak... "Yeah, Rico, this looks good. You should merge it."

**Rico Sta. Cruz:** Yeah, definitely, and that doesn't just go for my project; I think that goes for every open source project out there. One of the easiest ways to contribute to something is just lend a few eyeballs into whatever is out there, a couple of issues or a couple of pull requests; give your review or give your thumbs up.

**Jerod Santo:** Absolutely... Just maybe give me a quick moment to give a shoutout to Chris48s, who has contributed greatly on our transcripts by basically doing that - he was just doing some transcripts, and you can fix some \[unintelligible\] words, or add links, sometimes proper nouns don't get transcribed correctly... And I gave Chris the commit bit, and now he's actually merging other people's pull requests and helping out quite a bit. So thanks, Chris, and Rico, maybe something that you can look into is find somebody who's excited about Devhints and helping out in the PR's, and then hand them the keys and let them manage those pull requests and take a little bit of the weight off yourself.

**Rico Sta. Cruz:** Yeah, absolutely.

**Adam Stacoviak:** I have to say something too, because I saw the two PR's get closed earlier this morning, and they both had "Thank you for your changes, they're live here" - very our style, very intentional, very clear, and Chris, thank you so much for that. To wake up to some pull requests being merged that we didn't have to manage is very appreciated. It's nice having that burden spread, that's really sweet.

**Break:** \[56:30\]

**Jerod Santo:** Alright Rico, so a couple other projects that you are up to, we mentioned them when we were talking about your design and your different documentation-based generator tools... You have RSJS, which is a Reasonable System for JavaScript Structure, and then you have RSCSS, which is - you can guess it - a Reasonable System for CSS Stylesheet Structure... So have opinions, and are willing to lay them out there for people, which is always appreciated when people have well thought through opinions.

Tell us about these two projects, why you decided to put effort into these, and really the message that they're trying to send.

**Rico Sta. Cruz:** The first one out of the two is RSCSS, that came first... Which is, like you said, the Reasonable System for CSS Stylesheet Structure, which by the way, coincides with my name's initials.

**Jerod Santo:** Oh, nice.

**Rico Sta. Cruz:** Anyway, so the way this was born is we were just doing things at work, we were just making CSS the way we usually do, and we just kind of felt like there must be a way that we could standardize the way that we do things. So basically, RSCSS is a system that grew organically with us doing CSS one way and then thinking "Oh wait, let's improve it this way" and so on and so forth, until it became RSCSS.

At some point we just kind of felt like "How do we get new hires to absorb all of this knowledge that we have with how to write CSS?", so I figured like "Okay, why don't we just write some guidelines that we could show to anyone?" It's a very small document, it's something that you could read through in 30 minutes or less, and it's basically how RSCSS was born. Anytime that someone would ask "How do you guys write CSS?", we go "Oh, just check out RSCSS.io."

The way it grew is it was out of our frustration of other CSS structures out there as well. A very popular one out there today is BEM (Block Element Modifier). It does its job very well at the expense of being overly verbose, at least that's how and some of my colleagues feel about it. So RSCSS is kind of a middle ground where we try to take the ideas of writing modular Atomic CSS, but trying to make it so that it's not as verbose and not as -- something that would be more friendly to your fingers, with less typing involved.

**Jerod Santo:** We did a show recently with Adam Morse about Tachyons, and -- what's it called, functional CSS, Adam?

**Adam Stacoviak:** Yes.

**Jerod Santo:** Yeah, and so this whole movement -- I'm familiar with BEM, as you've mentioned... There's other ones, like OOCSS, and what's the other one...? SMACSS maybe? I don't know, there's so many. But would you classify your system as kind of like BEM Light? You said there's Atomic and modular - is it about components? Maybe just give us some of the highlights of what you think are good ways of doing it; we don't have to go through every particular aspect, but maybe high-level...

**Rico Sta. Cruz:** Alright, good questions. So when we talk of Atomic CSS or modular CSS, it's not necessarily conventions or a way of doing things, but it's an idea of how you build \[unintelligible 01:03:39.29\] and compartmentalize components. There are things you mentioned, like BEM and OOCSS and SMACSS, and RSCSS itself - they're ways to make sense of how you implement this idea of making things modular and componentized, and how do you formalize them into naming conventions and how you write your class names and such.

\[01:04:09.17\] And yeah, in a sense you could say that RSCSS is kind of like BEM Light, in the sense that it solves a very similar problem with something a little less verbose. But yeah, it's less feature-rich than BEM, but at the same time I think it's a very welcome -- I think it's good that it is that way, because it's easier to write.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Yeah, it definitely seems like -- I'm not sure if I would call it BEM Light though, because it doesn't have the underscore identifiers and stuff like that, some of the key attributes that come with BEM - unless I haven't gotten far enough into the guide yet, but... It seems less framework and more like a guideline, I guess.

**Rico Sta. Cruz:** Exactly.

**Adam Stacoviak:** And I think you even say it in your documentation that it's not a framework, it's more like "This is kind of what we do that works for us, and maybe you would like it, too."

**Rico Sta. Cruz:** Exactly.

**Adam Stacoviak:** I think the components -- being very specific, where you say "A component will be named with at least two words, and then obviously elements are inside those, so we're gonna name those with one word, and would prefer to use the child attribute for these reasons, the child selector wherever possible..." I think you're stating some of your core reasons for it and giving visual examples.

I also have to compliment you on doing a great job of using readme's very well. This is a great example of a project using a readme very well to sell it, as we said in the first part of this show... Which is you give an introduction, what this is, what this isn't, and you agree with a continue link, and then a continue link from there... Each step just takes you a little further into essentially navigating GitHub readme's throughout the project. Pretty cool.

**Rico Sta. Cruz:** Thank you, thank you.

**Jerod Santo:** One thing you have here which I love when people do this -- and a lot of times they'll call it an FAQ and then they'll answer questions, but you actually have a note section with pitfalls, apprehensions, and then other resources that people can go look at. I love when people are presenting an idea or a system or something that they believe is potentially good (or good in certain circumstances) and preemptively - or perhaps maybe do the feedback - they list "Here are the downsides." Because so much of what we see is like "This is a panacea, this is a silver bullet, this is the best way ever", and we know that there's trade-offs and there's pitfalls. So I love that you have those clear and available to anybody who's looking for them.

**Rico Sta. Cruz:** Yeah. One of the things that I also like doing in the same idea is whenever I make a project and make a readme for it, I make sure to link other projects that have a similar goal to what I'm doing, and mention how mine is different. Like you said, there are a couple of people who would be writing things in a way like "Here's our solution, here's why it's so great", but they kind of fail to go to the side of "What about other projects? What do they do that you're not doing? What are other solutions that are out there that are different from what you're doing?"

**Jerod Santo:** I think when it comes to CSS, many of us are like "Just give me some sort of system. I just need something, because the Wild West leaves me in a terrible position." Having a system in place, at least then we can all follow a convention and live with the ups and downs of the particular system.

\[01:08:12.10\] With JavaScript it's way more flame wars... I mean, that's just in my experience. With CSS we're like, "Okay, this could be better than BEM, or worse... I don't know. But it sounds cool." With JavaScript, all of a sudden \[unintelligible 01:08:23.22\] So you have RSJS, which is a Reasonable System for JavaScript Structure; it's living off of RicoStaCruz.com, so it doesn't have its own domain like the other one does, and you said the other one came first... So I'm wondering where you are with RSJS and if people have given you the feedback about it, that probably I'm expecting will come if it hasn't yet.

**Rico Sta. Cruz:** Right. So we build Rails apps at work... We build Rails apps, and we write a bunch of JavaScript for those Rails apps, and one of the things that we couldn't really figure out is how do we organize everything that we write? How do we organize all those JavaScript files? Because Rails doesn't have all those conventions; it just gives you a file, like application.js says "Put your JavaScript here", which is not very helpful. Anyway, so again, just like RSCSS, RSJS is a bunch of guidelines that we had, built organically, based on what we thought worked, what we thought didn't work, and it's kind of an iterative process until we settled on "Okay, this is how we kind of think about it."

Now, it's not like something that you could use on everything, because obviously there's probably so many ways to write your JavaScript... Someone who would be writing a single-page app would be doing things a little differently than someone doing a more traditional Rails app. So anyway, this is one of the ways that we try to manage our JavaScript in an app that is a bit more traditional, and I just kind of thought, like, why not write it into a small document as well, so there's just more formality into the way we do things?

**Adam Stacoviak:** Before we ask a couple more questions, I wanna go back into RSCSS, because Jerod, you were mentioning the pitfalls, apprehensions in other resources, and I have to say I clicked on those links and I found them, and I got lost... And I loved it. \[laughter\]

**Jerod Santo:** You got lost in the other resources, or where did you get lost?

**Adam Stacoviak:** In his resources, and so I wanna make it clear just for those listening thinking like "Okay, how is this close to BEM? Is it not BEM, is it BEM?" You give a great example on your Other Resources section where you say BEM is nice, but \[unintelligible 01:10:58.05\] I think you mentioned its verbosity in comparison to maybe your short form, which is very BEM-like, I guess, except for... You're essentially giving an example of how BEM works (or B-E-M, or however you pronounce it; I just say BEM because it's easier); you've sort of given a component example of how it would work in BEM and how it would work using your conventions. I like that, that you share that there, so we'll link it up in the show notes... But for those listening, can you kind of give us a verbal walkthrough of that to some degree? Because with BEM, you might say for a component - which has to be two words - "site-search" in this example, using a hyphen between the two words, and then you would say... You know, if you had some sort of variant to it - if it was full, or if it was partial, or if it was minimized, you might, say, put the class again, "site-search--full", in the case of your way, you would just simply have one class "site-search" and then a modifier class of just "-full" and then beneath that, anything that's inside of that component would not have site search again and then \_ \_, if you're all following me... You would just simply have the one single keyword, which is part of your description.

\[01:12:22.02\] I think that's kind of interesting, because it does -- that's where I kind of got tripped up. It's like "When do you include the \_ \_, and when should I not?" Coming back to you're using child modifiers or your child selectors, and then the syntax, now it is a little bit more clearer to me.

**Rico Sta. Cruz:** Yeah, and one of the things that I wanted to emphasize with RSCSS is you just write class names as you probably would have when you were starting to learn CSS. So you wouldn't have things like \_ \_ -- and you wouldn't have to remember where an underscore goes or where a dash goes...

**Adam Stacoviak:** That was the hardest part at BEM for me, honestly. I like it visually, but the practicality of it, it made sense after I went away and came back, and I was like "Where does this go again? How do I resume building up this component?" That kind of thing.

**Rico Sta. Cruz:** Yeah, that's one of the reasons why we wrote it as well.

**Adam Stacoviak:** What's the theory on two words? Why two words?

**Rico Sta. Cruz:** It's just a way to differentiate itself from elements which would have one word. There's not really much science to it, it's just a convention that we could implement so that when you look at a classname you know what it is. It's two words - oh, it's a component; it's one word - oh, it's an element; it starts with a dash - oh, it's a modifier.

**Adam Stacoviak:** And coming back to RSJS - this is very similar to... You're obviously trying to accomplish a similar goal, which is "You know, this isn't a framework, this is kind of a guideline of how we write JavaScript."

**Rico Sta. Cruz:** That's true.

**Jerod Santo:** And also specifically for non-SPA's. When I was talking about a lot of the argumentation that happens, it's usually around how to structure single-page applications. So actually, this is something I haven't seen... I have myself what I believe is a reasonable system (which I have never written down) for structuring JavaScript in these more (let's just call it) classic server-side rendered -- you know, what DHH lovingly calls "JavaScript sprinkles" types of applications, and I've never seen anybody else... I've never seen anybody (I can't say anybody else, because I've never done it) write down a system for those, similar to how we have ideas around how to do them with single-page apps, so that's interesting.

**Rico Sta. Cruz:** Yeah, thank you. That's precisely why we wrote it... Just to get things formalized into an actual document, which are probably just kind of knowledge floating around between the team, and now we have a document that we \[unintelligible 01:14:59.10\]

**Adam Stacoviak:** I think something that's admirable with the type of developer I assume you may or may not be, Rico, is that it's one thing to be a developer that gets it and can implement it themselves, it's another thing to be the kind of developer who can then distill that into coherent documentation that looks good, is publicly accessible, it embraces the idea of open source and community, and shares that with the world. That's a whole different kind of person, and that's you, and I appreciate that, because we need people like you to sort of distill down the trial and error stuff that all bloody knuckles -- you know, so many people have bloody knuckles, but don't share why or how they avoid that in the future, and you seem to do it so well.

**Rico Sta. Cruz:** Right, thank you. I'm actually glad that there's a lot more people who are also interested in putting things into words. I've got a lot of developers publishing their thoughts on Twitter, Medium and pretty much everywhere; I'm very happy to see that people are writing down their thoughts.

**Adam Stacoviak:** \[01:16:07.14\] With these two projects in particular, since this is the last segment here, is there any community involvement with this? Since this is your bloody knuckles trial and error, so to speak, and it's your guidelines, how does the community get involved or participate?

**Rico Sta. Cruz:** Very interesting, because RSCSS has been translated in a couple languages; all these languages I don't speak, so it's been very humbling to see people just contribute their own translaions of it.

**Jerod Santo:** Awesome. So far Chinese, Thai, Japanese, Spanish, so there's still plenty of languages out there... If you have a native tongue and others can learn from Rico's experience, that's a great way to help out. I assume the actual content of the documents is -- I wouldn't call it necessarily static, but these are your findings, so it's not necessarily that you're looking to expand or change, unless you all learn something new at your work... Is that correct?

**Rico Sta. Cruz:** Yeah, and in a sense, I would like to think of it as more or less complete, and if there's any more additions to it from this point forward, it would probably be more clarifications.

**Adam Stacoviak:** So there's actually a Translations branch... Is that where the translations live? How does this get implemented, this translations portion? So that if we have somebody listening that's like, "Hey, I speak two other languages, I can probably help out with something" and they wanna look at it, how do you go about helping to translate?

**Rico Sta. Cruz:** They can fork the repository, make some edits, and they could publish their own version of the website, and I can link it.

**Adam Stacoviak:** Okay.

**Rico Sta. Cruz:** It's pretty easy... There's our documentation in the repo on how to do these things.

**Adam Stacoviak:** Gotcha. So the intention is then for someone to fork it and host their own version of it in a different language?

**Rico Sta. Cruz:** At the moment, yeah.

**Adam Stacoviak:** Gotcha. Okay.

**Jerod Santo:** I'll just say that there's a Russian translation, and a French translation, and some other translations sitting in Rico's PR... So there's a theme happening here, and I think what Rico really needs is somebody - and maybe more than one person - to just help him out at his GitHub and provide a little bit of help and grease the skids and keep these projects going, because there's activity, there's improvements, there's lots of people who are wanting to help out, and that's a lot for a single person to handle. So if you have some bandwidth and you can help him out, there's a lot of low-hanging fruit in terms of ways that you can have a beneficial contribution to the community. I would advise somebody out there to hook up with Rico and help him out with some of these PR's.

**Adam Stacoviak:** I like that, and we'll definitely put the links in the show notes, so if you're listening to this, the easiest way to do that is to not try to rewind or fast-forward and find the link we mentioned... Just go to the show notes, it's there.

**Rico Sta. Cruz:** \[01:19:05.14\] Thank you, guys. It goes not just for my project, but for pretty much everything you use in your everyday life, in your open source life; all projects on GitHub could use a set of eyes just to look through the comments, look through the issues, look through the pull requests and leave a note when you feel like you've got something to say.

**Adam Stacoviak:** Absolutely. Well, Rico, thank you so much for your time today, and just again - I'll say it again, just sharing those trial and errors, the bloody knuckles, the guidelines back to the community there; they're so important... And if you're out there and you're listening and you've got Rico-like type things in your brain and you haven't shared it yet, the first thing to do is what, Rico? Create a repo and share it, right? Just tweet about it - that's the advice you were giving with "Create open source and share it." Is that what we should share with the rest of the community?

**Jerod Santo:** There you go.

**Rico Sta. Cruz:** Absolutely, just put your stuff out there. It's so easy.

**Adam Stacoviak:** Just put it out there... And tweet at Rico; we'll link his Twitter up in the show notes and whatnot, and he'll retweet it for you, because he's that nice.

**Rico Sta. Cruz:** Absolutely.

**Adam Stacoviak:** Alright, Rico, thank you so much for your time today, man. I appreciate it.

**Rico Sta. Cruz:** Thank you so much for having me.

**Adam Stacoviak:** No problem.
