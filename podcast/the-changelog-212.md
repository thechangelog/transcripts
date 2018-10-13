**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode \#212 and today Jerod and I are talking about SiteSpeed.io with Peter Hedenskog. Now, Peter is from Sweden, so if you listen to the intro it sounds a little different because you know what? We did it in Peter's native language.

We talked to Peter about SiteSpeed.io, an open source tool helping you to analyze your web speed and performance based on best practices, as well as timely metrics. We talked about the inception of the project, where it's going, where it's been, the history, and what you can expect.

We had two sponsors for today's show, Rollbar and Compose.

**Break:** \[00:00:49.00\]

**Adam Stacoviak:** Alright, we're back... We've got a fun show about performance, Jerod. Who doesn't love performance?

**Jerod Santo:** Performance matters.

**Adam Stacoviak:** Performance does matter.

**Jerod Santo:** I love performance. We're building a new website and we want it to be very fast, right?

**Adam Stacoviak:** How fast is it?

**Jerod Santo:** I don't know yet, I'm gonna have to run SiteSpeed on it after we get it launched. \[laughs\]

**Adam Stacoviak:** Speaking of SiteSpeed (SiteSpeed.io), we were talking to Peter, and the last name is said very differently in English as it is in Swedish... So Peter, welcome to the show, and tell us how you say your name.

**Peter Hedenskog:** Thank you. Yeah, I say it Hedenskog. \[strong Swedish accent\] Peter Hedenskog.

**Jerod Santo:** Peter - we'll say it Hedenskog.

**Adam Stacoviak:** Hedenskog. That's what makes sense to us in English.

**Peter Hedenskog:** Yeah, it sounds good.

**Jerod Santo:** So Adam, this show was brought to us by long-time Changelog listener and community member Justin Dorfman, so shout out to Justin.

**Adam Stacoviak:** Yeah, big thanks, man. This was actually on the front page of Hacker News, which I think he was excited about that being there and then wanted to make sure we talked about it on the show, because he's such a fan. But there's some sort of backstory to their relationship, is there not?

**Peter Hedenskog:** \[00:03:55.00\] Yeah, there is. Justin reached out to me a couple years ago when I started SiteSpeed.io, and I met him at conferences and so on... So yeah, we met.

**Adam Stacoviak:** Internet friends, so to speak.

**Peter Hedenskog:** Internet friends, yeah. Exactly.

**Adam Stacoviak:** That's good stuff.

**Jerod Santo:** Lots of good relationships can start with just internet friends, you know?

**Adam Stacoviak:** I'm your friend, Jerod. I'll always be your friend.

**Jerod Santo:** \[laughs\] Adam and I met on the internet just a few short years ago.

**Adam Stacoviak:** How long did it take us to actually meet face-to-face? Two years?

**Jerod Santo:** I started helping out in early 2013, and the first time we met was at Keep Ruby Weird, wasn't that? In November 2015...?

**Adam Stacoviak:** 2014.

**Jerod Santo:** 2014, so a year and a half.

**Adam Stacoviak:** Yeah, not bad. That's my shortest internet friendship prior to IRL, which was...

**Jerod Santo:** Oh...

**Adam Stacoviak:** I never say IRL, by the way... I just had to now.

**Jerod Santo:** I say it. I think I'm gonna need to say it.

**Adam Stacoviak:** Oh, boy... Anyways...

**Jerod Santo:** Well, thanks for the warm fuzzies, back to-

**Adam Stacoviak:** \[laughs\] Back to Peter. Peter, we like to show the listeners the backstory of -- something like this coming to be is kind of figuring out where you came from. Help us understand what your backstory is. How did you get into programming?

**Peter Hedenskog:** Yeah, so when I was young I was really lucky because my parents bought me a Commodore 64. I really wanted it, and I got it and I played games, but I started to do things like BASIC, and learn the assembler, starting like that...

I remember when we were going out for the summer in the summertime, and I can't bring my computer, but I loved programming, so I took my pen and my paper, and when I was away from home I used to write my programs on the paper, so when I got home I wrote it back on the computer and then I could run it and try it out. That's how it started.

**Adam Stacoviak:** That's not the first time we've heard that.

**Jerod Santo:** Yeah... Was that Matz, who didn't have any access, so he would -- no, he would just read books about programming languages, but never actually was able to program, because he didn't have a computer that could do those things. Is that what you're thinking of, Adam?

**Adam Stacoviak:** Yeah, exactly.

**Jerod Santo:** Yeah, similar.

**Peter Hedenskog:** Yeah, so that's how it started. But then I got older, and computers -- it wasn't so hot, so I tried out other things. I didn't know what to do. In Sweden, when I started to study at the university, at that time you could -- so, I failed a lot. I tried out many, many different things, but I failed totally.

I tried to be a chemical engineer, but I didn't like it. I tried business and economics, but I didn't like that. And then finally I started a course or a program about human resources management, so I thought I was going on that path... But then somehow I started to do programming again, and then I did it at the university, and then my first work was as a developer, building a website in Sweden. That's the short story.

**Jerod Santo:** What year was that, and what technologies were you using?

**Peter Hedenskog:** It was 1999, and it was Java. I used to love Java, but now I've been working with it for so many years, and there are so many other things that are refreshing and new now, so I try to avoid it.

**Adam Stacoviak:** I hear that Java's coming back.

**Peter Hedenskog:** Yeah, but why? I don't know why? \[laughter\]

**Adam Stacoviak:** The JVM.

**Peter Hedenskog:** Yeah... You know, you have the interfaces and the factories, and you need to do a lot of boilerplate code, instead of focusing on what really matters. At least for me, it's like moving to paradise when I started doing Javascript on Node.js, where you can actually do a couple of lines that actually do something. So yeah... I try to avoid it now.

**Jerod Santo:** \[00:08:10.28\] Yeah, less verbosity, but let's all admit that Javascript also has its pain points, as well.

**Peter Hedenskog:** Yeah, of course. \[laughter\]

**Jerod Santo:** All languages do. When you love a language, it's because you don't know it well enough. Then, as you know it better and better, you find all the little corners of it that drive you mad, but that's life as a programmer. So take us to SiteSpeed. Back in around the turn of the century you were a programmer doing Java, you said you had an opportunity to switch to Javascript and Node... Maybe take us from the point where you were doing Java at that first job, to finding Javascript, and to a point where you could build something like SiteSpeed which, as Adam said at a beginning, is a tool all about performance-testing websites.

**Peter Hedenskog:** So the first version of SiteSpeed was actually built in Java.

**Jerod Santo:** Oh, okay.

**Peter Hedenskog:** So I worked for Spray.se - that was like the Swedish version of Yahoo! at that time; it was a big portal. Then I worked for a small startup company for a couple of years, doing backend Java stuff. I worked for a C consultant for a while, and I worked with a big customer that had a lot of problems on their site. It was a customer that used a CMS and the people that were editing, they could change whatever - they could add extra Javascript, extra CSS, and whatever... So the performance of the site wasn't perfect, and since the amount of pages was enormous - we're talking millions of pages - it was hard for me as a developer to actually do something about it and find it.

The tools at that time didn't have a good way to find those pages that weren't working. So that's how I got the idea of SiteSpeed.io at that time. That was like a simple crawler, and then run a couple of performance metrics on each page.

**Jerod Santo:** Give us the year context again, and give us some of the tooling that was available, because I'm imagining you had Firebug, and you had YSlow, but I'm not sure exactly what year this is.

**Peter Hedenskog:** Yeah, so this must have been 2012, I think. We had YSlow, but YSlow wasn't perfect. What was cool about YSlow was that you could write your own rules. When YSlow was first rated by Yahoo!, so many things have changed - you have the mobile phone, and a lot of the rules weren't applicable in 2012. So I used YSlow, but I wrote my own rules, and then used SiteSpeed together with YSlow (like a SiteSpeed version of YSlow), and crawling a site, collecting a lot of URLs, and then running YSlow on them to get a metric. Then, when I found a page that wasn't so good, then we could report it and start fixing it. That was the idea, but I only started it like...

**Jerod Santo:** 2012?

**Peter Hedenskog:** Yeah, I had the idea of what I wanted to do, but I didn't have the time to do it, and then I got kids. And you know, in Sweden you have the fantastic thing that you can be at home for a long time; I got twins, so I was at home for almost a year.

**Jerod Santo:** How long was your paternity leave, Adam?

**Adam Stacoviak:** \[00:11:55.18\] Well, my paternity leave was not given by the government, it was given by me... It was maybe two weeks. I think I even did a little bit of work during that, but I was mostly just e-mail checking. I did not get to fully enmesh myself in the process, which did suck. Then obviously when I got back, there was a pile of stuff to do.

**Jerod Santo:** So you didn't get a year off to work on open source?

**Adam Stacoviak:** No, no year off for me. No, not at all.

**Jerod Santo:** So we're a little bit jealous, Peter...

**Adam Stacoviak:** Definitely.

**Jerod Santo:** ...but you had twins, which I'm assuming is a huge amount of work.

**Peter Hedenskog:** Yes.

**Jerod Santo:** It's nice that you had a year to raise them up. And you found yourself getting a little bit bored, is that the case?

**Peter Hedenskog:** Yes. \[laughter\] \[unintelligible 00:12:38.16\]

**Jerod Santo:** Cut to the chase.

**Adam Stacoviak:** I hope his wife's not listening to this.

**Jerod Santo:** Okay, rephrase that for me.

**Peter Hedenskog:** Yeah, so in Sweden you get a little money to be home with the kids, and that's perfect. Being home as a dad is fantastic. So I was home taking care of the kids, but having twins is a lot of work. It's a lot of work when they are small... You talk with the kids, and you hardly meet any people, and you don't do things with your head so much; you're only taking care of the kids. So then I tried to be up at night and started to do SiteSpeed, because you need to have something to stimulate the brain. So I was doing that, and it was cool. When you start a new product you don't have any users, you can do whatever you want... You can take it in your own pace and you can do stuff. That was really great.

**Adam Stacoviak:** What's cool about that is I think that's where the best ideas come from - whenever you're just sort of in your life. You're not sitting there at the computer, thinking "What problem is best for me to solve today?" I mean, sometimes that happens too, but you just kind of get into life, and before you know it, you start thinking more and more about this problem you're trying to solve, and you find new and interesting ways to take it to the next level.

**Peter Hedenskog:** Exactly.

**Jerod Santo:** And the thing about taking care of small kids - I've been through it a few times myself - is it requires a lot of effort and a lot of patience, and a lot of your time. But what it doesn't require is a lot of your mental exercises. So you have a lot of free brain time, but not a lot of free time, so you need an outlet for that. I said "bored" earlier, but it sounds like more like just mentally not challenged, so it doesn't seem like a good outlet for you, especially after you got the kids down to bed; now you can actually take those thoughts you've been having throughout the day and you can inject them into this project, which is probably pretty fulfilling.

**Peter Hedenskog:** Yeah, exactly.

**Jerod Santo:** So you said the first version was a Java, but I read the first version was just a shell script, so maybe there was even a pre-version.

**Peter Hedenskog:** Yeah, so it was a shell script, but the crawler was written in Java, because Java was the thing I did -- doing something really fast, then I did it in Java at that time. But it was a bash script, so it was super simple... But it's hard to... When it gets bigger and bigger, it's hard for people to help out if it's built in the shell script, I think. That was 1.0.

So I was crawling the site, and you could test a couple of URLs, and you were testing against the web performance best practice rules, YSlow in like a modified version. What's missing then was actually collecting reading metrics like how fast is the first ping time, or down content loaded time...

\[00:15:50.20\] So I built a super simple version in Java that was driving a browser in Selenium to collect those metrics. So you can use the navigation time API, and user time \[unintelligible 00:16:18.10\] API and now resource time API to get some metrics right from the browser. So that was the aim for 2.0.

Then I got help from my friend Tobias that I worked with at a previous company. I had an idea of what it would be like, and I did a rough version, and then he could make it better - making a good structure... And what's cool about it is we did a rewrite of the whole code to Node.js, and then I also did the first version, and then he did the more structured version. I think we worked well together because he got the structure and I could have the ideas and do the first version, and then he can help out doing stuff in a really good way.

**Jerod Santo:** That's interesting. It's always nice to have a partner in crime, especially when you're doing open source. 2012 - many years passed, so your paternity leave has been over for a while, and at a certain point that time becomes so precious, and you need help...

Give me his name again - what was his name?

**Peter Hedenskog:** Tobias Lidskog.

**Jerod Santo:** Tobias... Shout out to him for all the work he's put in over the years as well. Maybe give us that story, of how you got him involved into it, because what a lot of people with open source projects have is not very much help. And sometimes all you need is somebody else, not just to report a bug or to do a pull request, but to actually come alongside you and be a team on something, especially on ambitious projects. So it might be helpful for our listeners and for us as well to hear how did you get him so into it, and that story. After that, we'll cut out for our first break.

**Peter Hedenskog:** Yeah, so first off, I've been working mostly at night, and that works perfect when you are not at work. But when I was working, and I did fixing things and doing stuff at nights, the code quality isn't perfect, or isn't so good... But at least I solved the problems, I could do a new release and fix the bugs for users, so that's good, but the quality was really low at that time.

So that's good, having people that can help you out, and we can share things. And Tobias and me - we worked together, but we did actually -- he was tech lead or something like that for a customer, and then he was moving on to other stuff, and I was taking over that customer... You know, we got to friend and we got the perfect match, and then when I showed him SiteSpeed.io and he started to help out with a couple of things... He was also really interested in performance, and yeah... So it's more like on a friends' basis, I think; we have a good match, and then... But it's hard, he also has two kids, so it's hard to find the time.

**Jerod Santo:** Yeah. Real quick before the break, one last question - just to get a little bit more context around you Peter, as you work for Wikimedia on the performance team, you also call yourself a web performance geek, you are one of the organizers of the Stockholm Web Performance Meetup group (which has over 600 members - that's pretty cool), why is performance -- and you're gonna be preaching to the crowd a little bit here, but tell us anyways... Why is performance so important, and why is it something that you dedicate all of your free time to helping other people improve their site speed? For you personally - why do you think performance is such a big deal?

**Peter Hedenskog:** \[00:20:00.19\] I get really annoyed when things are slow, especially on mobile... You want to find information and you want to do stuff and things aren't happening, this makes me really angry. That annoys me. You know, you want to do things fast, you maybe want to find something or you need help - slow things really annoy me, actually. \[laughter\] I don't know if you guys feel the same...

**Adam Stacoviak:** What kind of car do you drive?

**Peter Hedenskog:** I don't have... I don't drive a car.

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** What kind of bike do you ride?

**Peter Hedenskog:** So I run... \[laughter\]

**Jerod Santo:** Do you run fast or slow?

**Peter Hedenskog:** Yeah, okay... Quite fast. \[laughter\]

**Adam Stacoviak:** That's funny. I figured we could judge your statement there based on your car, but I was way wrong.

**Jerod Santo:** Yeah... Backfire.

**Adam Stacoviak:** It's Forrest Gump on you... Just running.

**Jerod Santo:** Yeah, he's running. Alright, I think it's a good time to take our first break, and when we get back we're gonna dive more into SiteSpeed. We wanna learn not just what it does; we know that it helps you judge the performance of your site - not across just a single page, but crawling an entire website, which was the original reason why Peter wanted to created. He could use YSlow on a single page, but when you wanna automate that, you wanna crawl a whole site, he needed something more.

We're gonna talk about what it measures, how it measures it, and get into some of the nitty-gritty details of how SiteSpeed.io work. So we'll talk about all that after this break.

**Break:** \[00:21:29.09\]

**Adam Stacoviak:** Alright, we're back with Peter Hedenskog, and we're talking about performance, because who doesn't love performance? Peter, it had come to me that it would make sense to have something like this as a web service versus some sort of NPM module you can install, which is great, we love that version. And I'm just thinking, why not make this a web service, why not give the people out there, since it's so important to you, the choice to say "Okay, here's four or five pages that are really important to me. Let's track those pages' performance, and if they're not performing well, alert me."

I guess, take us to the idea of this SiteSpeed and where it's at, and why it's not a service like that?

**Peter Hedenskog:** \[00:24:01.17\] Yeah, let's start with the first. So I built a version like that that you could use... I got funded by the Swedish Internet Foundation to build that, so I could take three months off from work to build it. I built it, and it was working fine, and still works fine, but having something online, it takes so much time to keep it up and running, taking care of different instances... It was so much work, so I closed it down now, to be able to focus on 4.0, to make sure that it's going to be released. Because having something online like that, it's... Yeah.

**Adam Stacoviak:** So you think the efforts on the hosted version was premature then? Like, it's possible, it's just hard right now because the actual tool itself isn't evolved well enough?

**Peter Hedenskog:** Yeah, I mean... If you're working at a company and you really care about performance, you should host your own version. Because if you want to dump the data into something else and you want to make the graphs, and you want to make sure that you can get alerts when you want, and so on - an online version wouldn't help you with that. But our online version is more of making it easy for users that just want to try it out. But still, it was too much work for me, so I couldn't keep it up.

**Adam Stacoviak:** I guess maybe now would be a good time to really break it down. What actually is SiteSpeed.io? Is it a tool, is it a website? We know it's open source obviously, but what is it? Break it down for us.

**Peter Hedenskog:** Yeah, can I start with the new version? Because the new version is really cool.

**Adam Stacoviak:** Please do.

**Jerod Santo:** Can you release it before this show goes live? \[laughter\]

**Peter Hedenskog:** Yeah, probably...

**Adam Stacoviak:** He likes things fast, you know?

**Peter Hedenskog:** We'll release the alpha version, and the beta is going in a couple of weeks if we are really... Let's see. I don't know. It's vacation time now in Sweden, so we'll see.

**Jerod Santo:** Does that mean you'll get more work done or less work done on SiteSpeed?

**Peter Hedenskog:** It depends... I don't know.

**Jerod Santo:** So version 3.0 is the current "production version." Version 4.0, that's the one you're referring to, which is currently like a canary build. But just so everybody's clear, the features that you're talking about now, we're gonna talk all about 4.0, which is the near future, right?

**Peter Hedenskog:** Yes, exactly. Because 3.0 was a like a big blob. In 4.0, we - when I say we, I mean me, Tobias, and also Jonathan Lee; he's a team member now, so we have three team members, and that's perfect; we are looking for more, so if anyone wants to join, you can just tweet to us. Yeah, so we had a big blob, and we were using YSlow. YSlow, as I said before, the rules aren't applicable nowadays, so we want to change that. In the old version we were using PhantomJS; PhantomJS is a lovely tool, it worked perfect, but does not read browsers. We wanted to make sure that we were using a real browser to collect the metrics, because now with HTTP/2 you need to make sure that your tool can handle it. Because PhantomJS will not support HTTP/2 and so on.

So the thing we wanted to do is to split it into multiple different tools instead, so people can build their own tool on top of that, and we can build SiteSpeed on top of our tools. So the first tool now is the coach. The coach helps you and give you advice on what you can do better performance-wise.

\[00:28:06.03\] The coach knows a lot of things. The coach is like the new YSlow, but the coach will never give you false advice. The coach will say, "Oh, I see something that's fishy here. Maybe you should look into it", so you're still in the driving seat to make sure that it's okay. With YSlow it was rules, and rules are often made to be broken, right? You cannot find rules that are perfect, because you have desktop, and you have mobile phones, and you have small connections and fast connections and so on. But the coach knows all about that. The coach is more a tool to give you advice, so we are removing YSlow and using the coach instead. That's kind of cool, I think...

**Jerod Santo:** So the coach is a project that you all started for this version, 4.0. But like you said, these are all modules, so is this just a separate NPM package, or is this a browser plugin? How do you use the coach by itself if you wanted to?

**Peter Hedenskog:** Yeah, it's an NPM package, and it's also a browser plugin in Chrome that you can use. What it does is it executes some Javascript inside the browser - check and collect metrics and see how the site or the page is built. Then it uses a HAR file, a file that describes how different assets are loaded in the browser, and different timings, analyze that and give back some feedback to the user.

**Jerod Santo:** Okay... Go on, what other modules or what other sections are there for the new version?

**Peter Hedenskog:** Yeah, that's the cool thing, because that one you can use standalone, you can build a bookmarklet and you can build a plugin for Firefox. Yeah. So you can run it standalone and get the feedback for a page. That's one thing. Another fun thing is pageXray, because the HAR file format - the format that describes how different assets are downloaded by the browser - is quite hard to work with, it's not a good JSON format, so we tried to convert it to a format that everyone can understand, and telling you more about what the page is built upon, like how many Javascripts, how many CSS files and so on. So that's one thing, pageXray.

The third thing, that we were actually using in 3.0 also, is Browsertime. Browsertime is the thing that Tobias has been working the most on. It drives the browser, so it uses Selenium to start Firefox or Chrome and execute some Javascript to collect some metrics. Browsertime was originally focused on just collecting timing metrics, like timings from the navigation timing API, but now it just executes Javascript. So it's a Javascript runner inside the browser, and then takes the metrics back, and you can say "Test this page five times and give me the median metric of the down content loaded load time", for example. So it collects a lot of metrics.

Then on top of that is SiteSpeed. In SiteSpeed you have the crawler, you can send the data to Graphite (and soon InfluxDB), you can have your own performance budget, so you can run it in your build tool so it can check your site on the way out to see, "Okay, we can break the build, for example, if the site is too slow", or if you have a massive amount of Javascript, or whatever kind of rules you set up.

**Jerod Santo:** \[00:32:11.29\] That's really cool. You can use it almost as part of like a test suite, or like you said, like a pre-build... It's like, after you build, but before you deploy; you can integrate it with your CI, or something.

**Peter Hedenskog:** Yeah, exactly. It's output stack or JUnit XML.

**Adam Stacoviak:** It seems like that should be out there already. Like, performance should be part of testing.

**Jerod Santo:** This is it.

**Adam Stacoviak:** Is there anything out there like it at all now?

**Peter Hedenskog:** Yeah, there's one super great tool, and that's WebPagetest. Any of you tried it?

**Jerod Santo:** WebPagetest?

**Peter Hedenskog:** WebPagetest.org.

**Jerod Santo:** Yeah.

**Peter Hedenskog:** WebPagetest.org is built by Pat, a super great guy that now work on Google, but he started the project when he was working at AOL. That tool is amazing, it's really good; it's open source, it runs on Windows. WebPagetest is a service, so you use it online. Then there's build tools upon it that you can use; you can have an NPM module that collects the data... But SiteSpeed actually also uses WebPagetest, so you can run WebPagetest with SiteSpeed, and SiteSpeed drives WebPagetest, collects the metrics from WebPatetest and then dumps the data to Graphite or whatever you want. Or on the tests in your continuous integration.

I forget to mention that - SiteSpeed also wraps WebPagetest. So if you are having WebPagetest instances, you can drive it with SiteSpeed.io to collect the metrics. Because what's cool about WebPagetest is that you can also collect metrics from reading mobile phones. You can do that in SiteSpeed 4.0 also, but only on Android phones. With WebPagetest you can drive it on iPhone, so that's really cool, to collect metrics on real phones.

That's why we've integrated WebPagetest also, to be able to use it and collect the metrics... If you use SiteSpeed, you can run it standalone or you can use it with WebPagetest and have the same flow, break the builds on specific metrics or dump the data where you want it and create the graphs in Grafana.

**Adam Stacoviak:** That's the part I'm talking about, if there's that before breaking the builds, probably the CI process, because that's an interesting piece there to me. I mean, it's all interesting, of course. Testing not only if something renders properly based on database knowledge, but also the fact that the site speed isn't quite the same way it should be, and breaking based on performance - that seems new and interesting.

**Peter Hedenskog:** Yeah, there's been a couple of different projects. You can run a standard WebPagetest in SiteSpeed, and then I think... Yeah, so you actually need to use it with a real browser, so you need to SiteSpeed or WebPagetest. There's a couple other tools that use PhantomJS, and that's cool, but you cannot get the same timing metrics that will be okay if you use that. But I agree, that's really...

Where you should use SiteSpeed is you can either use it on testing your code on the way out, so you can make sure that you are not introducing regression on your performance, and then you can use it to monitor your site. So you can run it on production, and collect the metrics and create graphs and alert if you see something that happens.

\[00:35:59.18\] Some sites still have a C mess and you have people that can do whatever they want, and it's good to be able to spot that. Or you have ads, and you want to make sure that they run fast, and so on.

**Jerod Santo:** So let's talk about a performance budget. Is this something where everybody gets together and decides, you know, 300 ms is good for us in terms of a certain threshold of our page loading? When we talk about when a web page loads, you have a lot of different things that that could mean: you have time to first paint, you have DOM ready, you have completely loaded... You have all these different things, so maybe tell us how you'd go about stating a performance budget to break a build, and how granular you can be with those types of rules that you're giving there.

**Peter Hedenskog:** Yeah, so in the old version, and I think most of the tools I've seen has done it like you can set a hard \[unintelligible 00:36:59.02\] down content loaded need to happen within 1,000 ms, or you can set up to break the build if your amount of transfer size of the Javascript is like 200 kb, or whatever. And that's good in a way, but what we are aiming for in the new version is that you can catch regression. So instead of setting a hard limit, you can see "Okay, we are doing 10% slower than yesterday, or 10% slower than the last build", or "We have a 10% bigger Javascript file." So it's better to compare with the past instead. To have those limits works in some cases, but to be able to find stuff, it's good to have comparing and find regression, I think. So that will be part of the new version, to make it easier for people, because how can you decide...? You set a limit, and it's like "Yeah, who knows if it's the right limit or not?" It's better to make sure that you don't catch regressions, I think. That you can capture regressions, of course.

**Jerod Santo:** So previously you used PhantomJS and recent news around Chrome dev tools is this new headless version of Chromium, right? I can't remember what it's called - is it called just Headless? I don't know. But it's upcoming, and I assume that that's something that will affect you perhaps in a good way and perhaps in a bad way. What's your reaction to that news, that the Chrome team is gonna have this headless version available? Upcoming soon.

**Peter Hedenskog:** Yeah, I think it's really cool. I guess it will kill PhantomJS and other things. But I think it's good, because it's been missing, so that will be good. For SiteSpeed.io we can use it, and what's important to me is that we at least support two different browsers. Today we have Chrome and Firefox; we want to be able to use Opera, so we can test on mobile phones and test with Opera, because Opera is really big in Africa, and we want to be able to test that. And we want to move on with Safari... The rumor is out that Safari 10 will be able to be driven with web driver, so then we can use Selenium, and then in the future maybe we can also drive Safari on iOS; that would be really cool.

We'll always try to have a couple of browsers, but I think a headless Chromium is good, and it will be exciting to see what people can build out and how they can use it.

**Jerod Santo:** \[00:39:52.08\] Let's talk about who's using it, because the features, that you're delivering in the open source world - these are things that you probably have killed a few potential startups that would like to offer this as a paid service. It's so much value provided in the open source, and that's what we love about it. You mentioned on a recent blog post that's kind of like an annual review, some of your successes that you've had throughout three years - this was a 2015 review... And just the number of downloads that you were getting, the surprise of that... You had set a goal in 2015 for 25,000 downloads, and at the end of the year you found it was about 141,000 downloads, which is not quite an order of magnitude; it's definitely the new level of magnitude, but anyways, it's quite a bit more. Who's using it that you know of - big players or small players? The ones that are interesting to you.

**Peter Hedenskog:** Yeah, so I know quite many that use it, but I don't know if I can say the names actually, because I haven't okayed with them.

**Jerod Santo:** Oh, that's no fun.

**Peter Hedenskog:** I know... But there's a lot of people using it. And what's cool about it is that we have a Docker version, so last year when we tried to see how many downloads we had, we had almost like 40,000 Docker downloads. And that's cool, because the Docker downloads, then you get Firefox and Chrome at the same time, so you have like a perfect setup. We also have a Graphite version, where you can store your time series data. We have our own version, but you can use whatever version you have. If you have a Docker container and that container had 14,000 downloads, that's cool because then you only have like one version, you have a Docker running and you don't need to upgrade it; that's a good amount of people that actually run it and actually look at the data and use it, getting the most out of the tool, I think. So that's cool.

There have been a couple of companies that have talked about SiteSpeed at least, so... Marks & Spencer in U.K. (a shopping site) has been using it. They have talked about it in a conference talk, so I think I can mention them.

**Adam Stacoviak:** So for those out there that are slight fans of Docker - maybe they have dabbled with it here and there - what's the importance of having this as Docker images? Walk us through how someone would pull one of these images and actually make use of it?

**Peter Hedenskog:** To get something up and running, and you want to monitor the performance of your site, you want to have SiteSpeed. You run SiteSpeed maybe every five minutes, or ten minutes, or once a day... You can set it up in your Chrome tab or whatever tool you have. To run SiteSpeed, you need to have SiteSpeed and you need to have a browser. If you don't want a Docker container, you'll get an exact version on the browser, because that's good... Browsers are updating themselves all the time, and to make sure that SiteSpeed is working correctly, we release it with specific browser versions.

For example, it has happened in the past that Chrome and Firefox has done a new release and it's broken with Selenium, and everything's broken, but if you use the Docker containers you have a specific version and it will work fine.

So you have a Docker container for SiteSpeed, and then again a Docker container for Graphite where you store the data, another Docker container for Grafana, where you make the graphs.

**Adam Stacoviak:** So you're maintaining all these containers for Docker to make sure they work with the current version of SiteSpeed, or the current version of the browsers that work.

**Peter Hedenskog:** \[00:44:12.08\] Yeah... So actually, we have only SiteSpeed... In the new version we'll have a SiteSpeed container with specific browser versions; the other ones are the ones that you download, the official ones. So you just use Docker pull, Graphite, Grafana and you get that one, and you set it up. But right now, in the 3.x version, it is some hacking... You need to configure things, you need to set up Graphite with Grafana, and you're aiming for making sure that you can run one command and everything is up and running. So it's more easy to get things up and running.

**Adam Stacoviak:** So version 4.0 is making that easier?

**Peter Hedenskog:** Yes.

**Adam Stacoviak:** That's always good.

**Peter Hedenskog:** Yeah, you need to do a couple of things... If you do things manually, things are gonna stop working, so it's good to try to automate everything.

**Adam Stacoviak:** We're hitting our next break, but one thing we wanted to kind of follow up -- Jerod, this is just an eyeball for us... We're not really sure if your work on SiteSpeed got you your position at Wikimedia, but we'd love to learn more about that process for you, and also the background of what's going on at Wikimedia Foundation, and all that stuff... So let's talk about that on the other side of this break.

**Break:** \[00:45:45.14\]

**Jerod Santo:** Alright, we are back with Peter Hedenskog, talking about all things SiteSpeed.io, and next up we're gonna talk about his role on the performance team at Wikimedia/Wikipedia. But first, Peter, you wanted to give a shout out to somebody who's been working on a special integration with your new coach tool.

**Peter Hedenskog:** Yeah, I want to thank Matthew Harrison-Jones that built the Chrome extension for the coach, that's really cool. Also, after that he has started doing things for SiteSpeed.io, so that's really cool. People that start doing one thing and then do more things to our project - I really like that. Thanks.

**Jerod Santo:** We'll link up that Chrome extension in the show notes. So you've had this reputation, since 2012 you've been building SiteSpeed and you've been meeting people who are also performance geeks, as you call yourself. Ten months ago you started at Wikimedia on the performance team... So first we're interested if your work with SiteSpeed perhaps gave you a shoe in with Wikimedia, and then secondly I wanna hear about what it is that you do there, if SiteSpeed is being used by the company, and just any sort of behind the scenes at Wikimedia that you can give us.

**Peter Hedenskog:** I've been working with SiteSpeed.io for quite a while, or at least it seems so. So I applied for a position at the Wikimedia Foundation, and they were looking to add more people to the performance team. At the Wikimedia Foundation, one of the most important things as a developer is that every line of code you write is open source.

\[00:47:56.22\] When you start at the Foundation, it's a good thing that you have been working on open source before. And since I've been working on SiteSpeed.io, that was a really cool thing, I think... But you need to ask the people that hired me, but I think it was a good way in. Because you have something to show, and when we discussed this, you can show what you have done, so I think that's really good.

**Jerod Santo:** So give us a little bit of an insight into your day-to-day. What do you do as a member of the performance team? Wikipedia is in the top 10 (is it number seven?) of websites on the entire internet, so I would love to hear what your day-to-day is like working there.

**Peter Hedenskog:** Yeah, so we are five members of the team. It's Ori, Timo, Gilles, Aaron and me, and we do different... You know, it's a big site and we have different specialties. I work on WebPagetest - the other tool, not SiteSpeed.io - that we use to measure performance. We have been working on trying to do some technic testing where we test parts of the site or a couple of pages to see if we can find performance regressions.

I've built some open source tools around that, to measure the sites. I'm now focused on an extension to the \[unintelligible 00:49:29.20\] It's helping users to know if an article page on Wikipedia can be better for performance, to get a hint on what you can do and change things to make it faster. What's really cool about Wikipedia is that we have a lot of users that really care, and they create content and they do fantastic things, and if we as performance engineers can help them to make the site faster, that's the best thing... Because, okay, we have a couple of engineers; there's a really big site, and we have a really big amount of users, and if we can give them the tools to make the site faster, that's the best thing, because then we're empowering them to make it better. So that's what I've been working on the last months.

**Jerod Santo:** One of the major ways to increase performance nowadays is still - I mean, it's out there in production, but it's still kind of on the edge - implementing HTTP/2. Is that something at Wikimedia Foundation that you guys have done or are interested in?

**Peter Hedenskog:** Yeah, we have switched to HTTP/2. We did the switch - I don't remember now... It could be a month. You know that Chrome stopped supporting Speedy.

**Jerod Santo:** Right.

**Peter Hedenskog:** We moved to HTTPS a while ago - quite long ago - and then we were using Speedy because we needed to have Speedy to make it quite fast. And then when Chrome was shutting down Speedy we needed to move on, so then we switched to HTTP/2.

**Jerod Santo:** Any stories from that? Was it easy? Did it take a long time? Were there many bumps in the road?

**Peter Hedenskog:** I haven't been working on that... What was important for us was to make sure that we did the switch when we had the same amount of users that were using HTTP/2 as were using Speedy; we didn't do the switch too early so people are losing on performance. But I haven't been working on that, so I have no story on that.

\[00:52:04.22\] But it's cool, because HTTP is the future, but still, it will not solve everything; it's still problematic. You need to know what you're doing, and you need to make sure, because... Yeah. And also, the service that supports HTTP/2 have a lot of things to do to make sure that you can prioritize content, and make sure that the prioritizing is right, so the browser can start to render the content as well as possible. I mean, it's really early in HTTP/2's life. There's a lot of things that can be done, I think.

**Jerod Santo:** So one last question and then we're gonna talk about how people can get involved and help out with SiteSpeed.io. As a performance geek, give us this: if you had to talk to a total beginner or an outsider with regards to website performance, and you had to give three tips (you can only give three, you can't give four). Three tips, low-hanging fruit - what should I be doing to make sure that my website is fast? What were the three things that you would tell that person?

**Peter Hedenskog:** First, I would make sure that the cache shedders are set, so that assets are cached, so the browser doesn't ask for the same assets over and over again. For example, if you hit one page and then go to the next page and you use the same Javascript and the same CSS, the browser doesn't need to download it. That's really important, because if you don't do the request, then it will be much faster. So that's really good.

The other one thing that even with HTTP/2 is probably really important is inlining CSS. When I started a long time ago inlining CSS inside the HTML was like the most ugliest thing that you could do, because you needed to have some structure and you needed to have have the files, but on mobile, on a really slow connection, you want to make sure that the browser can start to render things really early, so you want to inline the critical CSS that can make sure that you can start rendering the page. So that's really cool, but still, that one is maybe not for a beginner because it's a little bit hard to make, but it's really cool because it's important.

**Jerod Santo:** With that one you have to decide what's critical and what's not. Because you don't inline all your CSS, it's just the critical stuff, right?

**Peter Hedenskog:** Yes.

**Adam Stacoviak:** Above the fold, so to speak, there's \[unintelligible 00:54:35.26\] when you say "inline", do you mean the head of the document, or do you mean actually inline in the elements, as a style attribute?

**Peter Hedenskog:** As a style. You do it in the head, right? You add the style... Instead of doing the request, you just inline it inside of the head. So when the browser is finished with the head, it can start rendering the page, because it's been setting up the CSS object structure.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Or you could be old school and just code it that way from the start.

**Peter Hedenskog:** Yes, of course. \[laughter\]

**Adam Stacoviak:** I love that.

**Jerod Santo:** Alright, what's your number three tip here?

**Peter Hedenskog:** Number three... Let me think about that. Number three would be for me to make sure that you only deliver things that you are using. A lot of sites deliver everything - you have 10, 20, 30 different Javascript libraries that are delivered to the browser and you maybe use 1% of it. On a desktop computer, like a fast computer that doesn't matter, but when you are on a mobile phone and you are on a slow connection, and you have limited CPU, a lot of Javascript will make your phone slower. So trying to minimize, or at least make sure that you are using the things that you send to the browser, I think that's important.

**Adam Stacoviak:** \[00:56:11.15\] Yeah. A follow-up to Jerod's question on those last two, since they... The first one is definitely closer to beginner; the second two seemed a bit more...

**Jerod Santo:** The second two are giving me impostor syndrome already.

**Adam Stacoviak:** Yeah, definitely. \[laughter\] It's something like, okay... What's the fastest - if those are focused on beginners, or just in general, three core things you can do... What are ways to identify what -- it seems like you say to send a minimal amount of HTML, CSS, Javascript on the pipe to the browser, regardless if it's mobile or desktop. But how do you define that, for one, and then tow, the inlining the CSS - you said to focus on what the browser needs to render first. How does one go about doing that? What do you recommend for that?

**Peter Hedenskog:** Yeah, so you can use tool. There's tools where you actually can get the CSS that are rendered; I don't have it in my head. But you're right, so maybe these recommendations are more for experienced users. I would say the first one, try to minimize the number of requests in the cache address is perfect, because that's quite easy. Then it will be to make sure that you are compressing all the text that you send, so that HTML, the CSS and Javascript is compressed. Because if you're compressing it and you're sending it over the line, it will be much faster. So that will be number two.

And then I would also try to focus on a simpler number three, that would be... But I mean still, if you are a developer, you need to make sure that you are only using the things that...

**Adam Stacoviak:** That matter.

**Peter Hedenskog:** Yeah, exactly, because that's in your... It should be in your blog, to make sure that.

**Adam Stacoviak:** I don't think when we say beginner we mean somebody who's never built the web before. I think when we say beginner maybe it's "beginner for web performance." Someone who's just slinging CSS, Javascript everywhere and they're like, "Oh, there's such a thing as performance?" and maybe you're like, "Well, hey, you should do caching, you should be concerned about inlining CSS, for example, or only sending down to the browser what you need for that particular page, not the Javascript and CSS for ten other pages. Just for what you're actually trying to render.

**Peter Hedenskog:** Yeah, so then I will say to start measuring, and that will be actually number one. Because if you don't measure, you don't know. It could be that you are super fast, and why should you spend time on trying to do things better, if you are fast, fast already right, so start measuring would be the first one.

**Jerod Santo:** I love that.

**Peter Hedenskog:** Both for beginners and for experienced... Start measuring, that's the best thing.

**Adam Stacoviak:** Start measuring.

**Jerod Santo:** I love that. We worked our way around to you promoting your tool. \[laughter\] You wouldn't be very good in Silicon Valley. You've gotta start with the promotion of the tool, and go from there.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Yeah, that's absolutely true. You've gotta measure before you can make wise decisions.

**Adam Stacoviak:** Well, on the note of promotion, let's promote something that's pretty important, which is help. You have a doc on the repo that I actually sent a pull request to while we were here on the show, which is the best ways to help. Money was at the very bottom, which, you know, it's not always all about money, but obviously, as you said before, you've got a wife, you've got twins, you've got a family, you've got things going on, you've got two team members that are helping you out, so obviously this is an important mission, and a mission that has more and more people jumping on board, so what's the best way for the listening audience to focus on helping, whether it's joining the team, whether it's contributing knowledge, whether it's advocating for support - how can people listening to this show take action today and step in and help out in whatever way?

**Peter Hedenskog:** \[01:00:04.06\] Yeah, perfect. Actually, money is not important to me, but I will start with other things first. If you are a developer and doing stuff there and you like SiteSpeed, I think doing a pull request would be perfect; we've been working at making it easier to tag issues, so you know where you can start and what you can take on, but it's always best to create an issue and talk to us first, so we can guide you through and discuss what you can do. Then making the documentation better, because right now we are lacking a lot of things, and helping us write tests, because part of the tools have really good tests today, but parts we don't have so good tests. So writing tests and writing documentation, that's perfect. Or helping us where we've done something wrong in the docs, that's perfect.

There's a lot of companies using SiteSpeed.io, and I'm so blessed, because I live in Sweden, I have kids, I have a partner, I work... I don't need money. But if you're using SiteSpeed.io, I would love for you to instead try to help people that are really suffering (like people in Syria) and trying to support the Red Cross and doing stuff like that instead, because there's a lot of people in the world that really need money, and you don't have to spend it on me or the people that work on SiteSpeed.io because we are really blessed, because we have money to take care of our families. It's better to help people that really need it.

**Adam Stacoviak:** On the note of I guess not so much exactly money, but maybe partnerships - have you pursued or are you open to partnerships with CI services out there? Earlier in the show we talked about automation; there's obviously different ways you can integrate this into various either open source things like Travis for example, or even paid services like sponsors of this show (Codeship, for example). What's your position there in terms of partnership? It might not be money, but it might be indirect support, so to speak.

**Peter Hedenskog:** Yeah, so we use tool today. We use Travis for example, so in a way Travis is supporting us, because we use Travis to check our builds. It's important for us getting support -- I mean, I would love to get some support, but it would not be for... I mean, it's important that they don't try to influence the product. I don't know if I have a good answer. We have been looking, but we are most looking into maybe a foundation to help us, to make sure that we don't have -- we don't want to have companies supporting us.

**Adam Stacoviak:** That makes sense. No ties, so to speak.

**Peter Hedenskog:** Yeah, exactly.

**Adam Stacoviak:** You wanna be agnostic in terms of how you conduct your business. It's kind of like politics, it could sway the vote, so to speak.

**Peter Hedenskog:** Yeah, exactly.

**Adam Stacoviak:** You don't want nobody lobbying you.

**Peter Hedenskog:** No.

**Adam Stacoviak:** That's good. It's good to know that about a person's character for one, and also a project's character, to kind of remain flat in that regard, so to speak. Let's ask a favorite around here, because we always love to hear about somebody's hero. We talked about where you came from, we talked about your Commodore 64, we even see a picture of you pushing your twins with a computer on it, so we know that you love what you do and somebody must have gotten you to love what you do. Who's your influencer? Who's your hero that got you where you're at? Someone you look up to.

**Peter Hedenskog:** \[01:04:06.19\] Yeah, I've been thinking a lot about that. It seems like almost everyone has a hero, right? But I think my hero is the everyday programmer. You go to work, you do your time, you build your stuff, and maybe it's not a cool product, but you do your time, you try to solve your problems... I really like the everyday programmer.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Was there an open source side to that question? The everyday programmer who also loves open source? Or just in general. \[laughter\] Because on your About page you say you're such a huge fan of open source, like that is the way forward... That's why I ask that.

**Peter Hedenskog:** No, I think being a developer or a programmer at work, focusing on your problems, I think that's so cool... That's how the world looks like today; you don't have to care about -- I care a lot about open source, but I mean, do your stuff at work, I think that's cool.

**Adam Stacoviak:** Cool.

**Jerod Santo:** In Washington DC we have a monument to the Unknown Soldier. You know that one, Adam?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I always liked that sentiment, I thought it was very poignant. Isn't it a tomb? Or a grave site of some unknown soldier who died at war, and we don't know who it is, but we honor that person.

**Adam Stacoviak:** Yeah, exactly. It was an unidentified soldier; I believe it might have even been a marine, and it's guarded 24/7, seven days a week by die-hard marines. I think it's only marines who guard it. I could be wrong, but it's a very prestigious kind of thing that they guard that tomb, and they're very diligent about how they march around it, very specific, and it's a big deal.

**Jerod Santo:** Wow... It reminded me of that, the everyday programmer, as a hero.

**Adam Stacoviak:** That's true, yeah. I think that's probably one of the best answers to that question, because it's not somebody in particular... It could be you, the listener, right now. It could be the person listening to this, thinking "I'm Peter's hero", and that's awesome. So congrats! That could be even me, Jerod. Who know, right? It could be you, Jerod.

**Jerod Santo:** We'll never know. Now we're gonna go, "Who's Serpico? I'm Serpico!" What's that movie...?

**Adam Stacoviak:** I'm Serpico!

**Jerod Santo:** That's right. \[laughs\] Well, we need to close this show before I dive us into movie quotes.

**Adam Stacoviak:** Yes, yes... That's a bad land, we've been there before. But Peter, one last thing for you - any closing thoughts for you, any advice you wanna share with the open source world? This is a chance for you to kind of put one last thing out there before we close out.

**Peter Hedenskog:** I think making something really easy to use. If I want to help out in an open source project and it doesn't work, or the readme is quite complicated, it scares me off. That's why I think... For example, I've seen the Firefox developer tools; they have made a new version where you can actually clone the repository and then you can hook it up with Firefox Nightly, and it is up and running and you can hack on it. And I think building tools that are easy to get up and running - I really like that, and I think that's a good thing that you should focus on.

**Adam Stacoviak:** Keep things simple. There's an acronym... KISS - Keep It Simple, Silly. I don't like the other version of that.

**Jerod Santo:** I was actually just thinking that exact same word, I was like, "silly."

**Adam Stacoviak:** Yeah, silly. I mean, who wants to say the other one? No one's stupid out there. There's no stupid questions, there's no stupid answers. It's the curiosity that moves things forward.

**Jerod Santo:** \[01:08:02.13\] There are silly questions.

**Adam Stacoviak:** There are silly questions, and sometimes those are fun questions... Who knows, right?

**Jerod Santo:** \[laughs\] Sometimes we ask those question.

**Adam Stacoviak:** Yes. Again, we're on a tangent... Peter, it was awesome having you. It was a great to hear about your history, where you came from... It was certainly interesting to hear how important this mission is, and obviously the things you do at Wikimedia Foundation, and kind of closing that loop for you with Justin. Justin, thank you for being a fan of this show and teeing up this question on ping. Jerod, on that note, we had a tweet - it was actually a response to somebody else, but mentioned us; they said that we seem to only do shows that are recommendations on ping. Is that true? Do we only do shows that are recommendations?

**Jerod Santo:** No.

**Adam Stacoviak:** We don't, right?

**Jerod Santo:** Every once in a while we'll lie a show up ourselves.

**Adam Stacoviak:** We're somewhat smart, we can... \[laughter\] The point is that we do really appreciate and really love an interactive audience, so that's just a way to open up and say, "We have our ideas for fun shows too, but we always are open to hear you, the listener's thoughts, and that's why we have github.com/thechangelog/ping." There's issues there... Put one down if you've got somebody that's an influencer to you, a show you want us to do, or pitch us an idea or a new project. We have Changelog Weekly that goes out every single week... Those are ways you can interact with us; that's our open inbox, so to speak. We're an open organization by and large, so that's just a way to say...

We have fun shows we line up ourselves, but we love it whenever you tell us about things that are interesting to you.

Peter, that's it for this show, man. It's been a blast having you. Where can people find you out? Where are you at on Twitter, where are you at on GitHub? We'll link these up in the show notes of course, but what's your handles there?

**Peter Hedenskog:** On GitHub it's soulgalore, and on Twitter it's @soulislove, so it's different.

**Adam Stacoviak:** Being sneaky, I see.

**Peter Hedenskog:** Yeah... \[laughter\]

**Adam Stacoviak:** Listeners, we'll link that up in the show notes, so find the show notes for this show. Fellas, with that, let's call this show done and say goodbye.

**Jerod Santo:** Goodbye. Thanks, Peter! Appreciate it.

**Peter Hedenskog:** Thank you, bye-bye!
