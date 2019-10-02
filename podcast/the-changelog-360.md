**Jerod Santo:** Let's start off with how you describe Postman to somebody who asked you about it today; our listener may or may not have heard of the thing... What do you describe it as - an API client? What's your description?

**Abhinav Asthana:** It started out as an API client, but it's evolved to what we call an API Development Environment. That gives you all the tools that you need to build and test and document APIs. It has a special flavor to it; it's a collaborative development environment, so while you can always use it as an individual, you can also work collaboratively with your team.

**Jerod Santo:** As it says on the homepage, "the only complete ADE system"; we all know what an IDE is (Integrated Development Environment). I presume it's a new term you all have put on Postman, the API Development Environment (ADE). Is that an acronym you all made up?

**Abhinav Asthana:** Yeah, yeah. We are trying to come up with something... You would always say "It's an API client and five other things." It would be like everytime you say it, people always remember only the API client part. So for most of our history we were just an API client; for 3-4 years as well it was a side project. Then as we expanded the product, as people started asking us more and more things, we were like "Okay, what are the other things that developers use, and we can go off of that?" We were like "Okay, you have integrated development environments for your code, and you have API dev environments for everything that goes into building an API..." And these things integrate with each other. Our view was that you have your IDE, and you have your ADE, and they work seamlessly together.

**Jerod Santo:** So I guess back when you guys started, when Postman was an API client, if somebody had told you that in 2019 you'd be raising 50 million dollars in a series B financing round around this API client, would you think that was crazy to hear back then?

**Abhinav Asthana:** Pretty crazy. The circumstances in which I started Postman was I kind of got out of what I was doing before, with a rapidly-shrinking bank balance, with six months of rent left...

**Adam Stacoviak:** Scary.

**Abhinav Asthana:** Yeah. \[laughs\] Banks start charging fees when your balance goes below a certain amount, and I was like "Postman is doing well, it's a good side project", but I wouldn't have imagined the journey at all, from that point onwards. It's been a pretty crazy ride.

**Jerod Santo:** \[00:04:07.06\] Did it start as the typical developer "scratch your own itch", or were you looking to serve other people from the start?

**Abhinav Asthana:** It was primarily for myself; I'm a typical scratcher in each project, and I was inspired by others' "scratch your own itch" projects. It's not the first time I tried this thing. I have a lot of itches, certainly. I actually listed down ten itches, and I'm like "Let me actually build something which solves my own unique itch." There were other clients back then, and I was like "It's not really fitting the bill", and "I like this thing versus that thing." You have to be a little picky to -- I mean, developers are picky, and I was picky; "I don't like this for this reason, and that reason...", and then I was like "Okay, I will build this thing", which became Postman. I put it up on the Chrome Web Store and it turned out that this was shared; the pain was shared, the itch was shared by a lot of other developers.

**Jerod Santo:** Well, I shared your pain and I used Postman back in probably version 1.0, when it was a Chrome extension. Was there a Chrome extension pre-Chrome Web Store, or was there always the Web Store? My history is missing.

**Abhinav Asthana:** Yeah, it was always on the Web Store. It started out on the first version of the Chrome platform as a browser extension. An interesting thing that Chrome did was it allowed you to launch a web page with increased privilege levels inside the browser. So it kind of turned Chrome into an application dev environment, because you could access certain APIs that normally a web page won't have access to. And I realized that you can send local host calls by building a web app, and that could be distributed to other people... While other clients - I think at that time Haul-IT, or some other things - were web-only clients, and you couldn't access things behind a firewall, and stuff.

So I found that kind of interesting things -- I mean, other clients on Chrome were doing that... But it appeared on the Chrome Web Store, and then it evolved into a packaged app that Chrome had. That was the second version of the platform.

**Jerod Santo:** I think that's when I jumped off the Postman train personally, because it started to solve problems that I didn't have anymore. I'm kind of like the simple "Just give me the REST client thing..." Yeah, the Chrome app, with Chrome OS, and the Chrome apps became big, and Postman - big, new version, sign-ins, sharing... All these things that apparently millions of developers love, but I just didn't happen to be one of them.

**Abhinav Asthana:** Yeah, I mean, you can ignore all of that and continue using it that way. Respecting everybody's opinion has been a core philosophy. If you don't wanna do something, you will just not be bothered about it. In fact, there are millions of developers who prefer things one way or the other, and we try to find a path that they will go on; so you can ignore all of it, continue using it as a REST client, but eventually we were surprised by how much value people got from using Postman in a collaborative way, and having an account, and stuff...

As I said, all of this has been a crazy ride, we just didn't know ourselves... And everything that we've built in Postman has come from -- you know when people are like "I really want this", that's when we actually build it. So it's been an evolution, and of course, there are some things that people like, and some things people don't like, and it's been okay.

Some people think that Postman has been in existence for more than ten years, like they've been using Postman forever... \[laughs\] So we just sort of tell them, "No, no, it was not Postman. You were using something else." \[laughter\]

**Adam Stacoviak:** Let's go back a little further then to the itch. What specifically was the itch in the early days of Postman that you were solving for? What is the core problem set maybe now, or even earlier, for API developers?

**Abhinav Asthana:** \[00:08:08.19\] I saw a very basic problem... When you're compiling and running code, that whole loop can be done on your machine. You run a program, you know if it has problems or not. If it's a website that you're developing, you load the website in the browser, and if the page works, you know; if it doesn't work, your browser console tells you. But with APIs things become a little interesting, because things are running on somebody else's machine. And I saw that basically to debug APIs and to work with either your own APIs or somebody else's APIs you had to kind of send a lot of API calls, you had to tweak parameters, you had to work in places when you didn't have complete documentation...

So whether you were figuring stuff out for yourself or for an application that you were supposed to build on somebody else's API, you were just working a lot with APIs, and none of those existing tools -- people would write call commands, you would have a bash history of call commands, and the better developer would be who has a bigger bash history, because "Oh, I wanna send you those calls." And I'm like "Why is that happening."

Or somebody had their own codebase, where they had documented some things in some way. So it's all these disparate ways in which people were working, and I myself saw, doing different things at different times -- I really wanted to just debug and work with APIs in a little bit more pleasant way, just remembering the API calls that I had sent before; nothing more than that. And I don't have to remember parameter number 26 in a big API.

**Jerod Santo:** And pretty printing the responses was big for me back then. Just auto-format the JSON response (or the XML, whatever it is) and make it easy for me to read, and then just say that, and just rerun it whenever I want.

**Abhinav Asthana:** Yeah. So you have the terminal and then you'd scan through the response, and your eyes would start watering, looking at what comes out... I saw what I was doing - I would take the response, put it into an HTML file, load the JSONView extension in Chrome and it would pretty print the whole thing, and I'm like "Oh, that's pretty cool." But that was like four steps. So I was like "Okay, I want all of this in a nice little package. This thing seem to be something I'm doing a lot." That was the first itch.

I think a related problem which got us into building stuff on the collaborative side was when I was with Ankit, my co-founder and CTO, at Yahoo! We were building this application together and we were consuming an API, and there was no documentation... We'd have to figure out what the API was and we'd run over to our manager's desk, like "Where is the API? What is the latest version of it?", and he'd do something and show us "Okay, try this parameter, or that parameter." And I was like "I don't wanna run to somebody's desk to find out what things are." So that communication problem, and working with APIs a little bit more pleasantly was the base problems that I was looking to solve back then.

**Adam Stacoviak:** You were using this as a solo developer, Jerod, or you were using this in a collaborative environment where you needed to work with other devs to fine-tune the API?

**Jerod Santo:** I would just use it solo, where I would use it to tinker, to prod at an API, and then get the certain response back, and then save that particular request for later, so I could try it again. Or when I'm developing my own APIs, of which I'm often the only consumer, so that I can replay things and make sure that -- you know, you can almost run test suites that way. So I was just by myself.

I think when the collaborative tools came in, and the Create an Account stuff, I was just like "Well, there's a little bit more here than I wanted", and I started looking for other things, but... The law of large numbers - the more people you serve, you're gonna have some people that it just doesn't quite fit, and for me at that time I just jumped off the wagon. I have looked at it recently, and -- oh boy, it's changed quite a bit since then. But yeah, I was using it completely in a solo context, and so the collaborative tools did not appeal to me... Where I'm probably less than half of 1% of people who are like that. Most people are not like me; most people are in teams more often than not.

**Abhinav Asthana:** \[00:12:15.25\] Yeah. So I don't wanna harp on that a little too much, but our hypothesis was that it's gotta be a pretty sad API that's gonna be used by one person. \[laughter\]

**Jerod Santo:** Guilty. I write the saddest little APIs there are.

**Abhinav Asthana:** People who upload a video on YouTube and there's one view. Again, I don't wanna zero in on that... Because we saw that generally, when you're building an API, there's a split between back-end and front-end. The API is supposed to be consumed by other people, and there are a whole host of flows that kick in, because APIs allow you to build bigger, modular pieces of software, which are generally built by teams. So that was our hypothesis, and we wanted to respect the individual developer's workflow.

**Jerod Santo:** Sure. And a fair one. Like I said, I'm an abnormal in that way; full-stack developer working on small contracts. I am both the front-end and the back-end; so I write the API, and then I write the API client, and that's pretty rare, I think.

What I always wonder is - you have this nice, little side project, people are using it, you're putting more and more into it, and your bank account is dwindling, you've got your day job, and you're wondering "Do I pull the trigger? When do I dive into this, and raise money, or start charging money, build a team...?" Those are sometimes the hardest decisions, it seems. What was the trigger point for you that you said "Okay, it's time to make this real"?

**Abhinav Asthana:** I didn't think any of that... If you enumerate it that way, it's ridiculous to start a company. Why would anybody do it? It's like you're laying on a bed that looks pretty neat, the mattress is fluffy, but the mattress gets pulled out the second day. And there's a bed of nails there, generally. \[laughs\] So I didn't think any of that.

I think I really enjoyed that feedback loop that I had while working on Postman. I loved building something that I had as a problem, and I would give it to somebody and they would say that "Hey, you solved this problem for me", and that was the best feeling. Of course, you can't live on feelings alone, and I tried a lot of different ways to sustain the project. Postman had a Donate button, and I think that less than 0.0001% of people ever donated. I tried putting some sponsors in. At that time there was \[unintelligible 00:14:42.23\] got acquired.

So I tried a whole bunch of things, but primarily what got me into doing Postman -- so I quit my job. I was like "Okay, I don't know what I'm gonna do, but I know I like working on Postman and I don't want to work for a big company or any company for a while." So I picked up a consulting gig, in which interestingly I had to design a smartphone app. I always played both hats in the previous company I was at - I was a UX designer, a UI designer, as well as a programmer... So for making money on the side, I was like "Okay, I can pay rent and I can sustain myself, so I'm gonna do this for two days a week, and for five days a week I'm gonna work on Postman, and let's see where it goes."

Ankit at that time was working in Mumbai, India, and I was in Bangalore, so I booked a bus ticket; I was like "I can't afford a plane ride, because Bangalore doesn't really go down so I'm just gonna go to Bombay and I'm gonna get my head straight, and stay with Ankit and see where it goes. So there were no plans of building a company; it was just "I wanna work with somebody I like." That was my hope, that Ankit would eventually join. "And I want to work on something that people love, and we'll see where that goes."

**Adam Stacoviak:** \[00:16:10.20\] Ankit being one of your co-founders.

**Abhinav Asthana:** Yeah.

**Adam Stacoviak:** So you were on the road to your very first co-founder. What was that like? When did you feel like the next step was, your next co-founder? ...which is a name I can't pronounce.

**Abhinav Asthana:** Abhijit.

**Adam Stacoviak:** Abhijit.

**Abhinav Asthana:** Yeah. So Ankit, Abhijit and I had this interesting relationship. I was an intern at Yahoo!, working with Ankit, and Abhijit was an intern working with me at my first company. So we knew each other through this intern/employee relationship. Ankit and I started working together; during this time when I quit my previous startup, I got a call from Google saying they want to feature Postman on the Chrome Web Store as one of the featured apps on the new platform. That was a very encouraging sign, and I think that's when Ankit and I decided to look at things a little bit more seriously, much more than a side project, and we started looking at people who might be excited about working on it, maybe on the side.

We had a bunch of things, like we had this interceptor plugin, which the two of us just couldn't maintain on our own. We found out that Abhijit was in Bangalore, and Abhijit and I had worked \[unintelligible 00:17:26.01\] so we kind of picked him out... He was at Walmart Labs and we found he was in the city; I sent him a note saying "Hey, we're doing this thing. Do you wanna work with us?" and he's like "Yes." And that's it. \[laughter\]

**Adam Stacoviak:** Just like that. "Yes!" That's the response you want when you ask somebody a question like that. "Do you wanna work with us?" "Yes. Yes, I do."

**Abhinav Asthana:** \[laughs\] Yeah. The next thing was a pull request, I think, so...

**Adam Stacoviak:** So the very first iterations of Postman was an open source project, it was a Chrome app, and because of the notoriety of it, being so used, and then obviously the call from Google, it sort of perked your ears up (and others' too) to say "We should probably get serious about this." At that point you weren't really making any money, it was just an open source tool... Is that right?

**Abhinav Asthana:** Yup. And we tried a lot of different ways. We tried to bootstrap the project, and at that time I think Postman transitioned -- so we tried a whole bunch of ways; we tried donations, sponsorships, and... One thing I wanted to do was I didn't wanna go into raising money too early at all. That was a fact I learned; if you go into the market trying to raise money and you're still like "Okay, I have a prototype, and stuff" \[unintelligible 00:18:38.27\] too late, and it's very painful, and I didn't wanna do that. So I was just looking for ways to sustain ourselves, and the donation bit didn't work out, as well the sponsorship didn't work out... So we introduced this in-app purchase called Jetpacks at that time. The idea was that you buy this $10 in-app purchase and it'll give you access to automation capabilities that Postman has.

The funny thing in adverts was that you have a postman going on a bicycle from door to door, delivering mail, and then you get this cool, new version of postman, with jetpacks, and he's flying around your town, delivering mail. That was the imagery we had which gave Postman its logo. That made a bit of money... And our grand plan was that we were gonna be maximum five people working on this thing, and let's figure out what are the most important problems we can solve. It was enough if you translated dollars to rupees in India; you can pay rent and eat. Like being ramen profitable, that's the term now, which I learned a little later.

So we were ramen profitable then, and that's when we had investors reach out saying that "Hey, you guys have a lot of traction. We heard about you from other folks... Have you thought of starting a company?" At this time we were not really incorporated. It was just like the three of us working together.

**Adam Stacoviak:** \[00:20:11.28\] What's interesting here is I heard donations, which is interesting... And then Jerod, you mentioned earlier their recent announcement of 50 million dollars series B. So from donations to 50 million dollars in a series B - it's an interesting story, to consider donations being a monetization strategy to bootstrap, to where you're at now. It's gigantically different.

**Abhinav Asthana:** Yeah. I wouldn't recommend it...

**Jerod Santo:** \[laughs\] You wouldn't recommend the series B or the donations button?

**Abhinav Asthana:** \[laughs\] Actually, either... Depending on which spectrum you're at. Both of them have their pros and cons. Money always comes with...

**Jerod Santo:** Strings attached.

**Abhinav Asthana:** Strings. Always. As long as you're aware.

**Adam Stacoviak:** It's wise of you to wait a little bit too, because I'm sure that you were in a position where you probably could have (for lack of better terms) sold this prototype, or at least this big idea. But what you did was you built in some worth. You self-vested your own long-term worth, and you probably retained a good portion of the ownership because of that.

**Abhinav Asthana:** I think it was a good decision. I had offers to have me as an employee in other companies, or do Postman on the side, or acquire Postman as a portfolio of another suite of API products. There were offers to come to the U.S. and stay in the Bay Area...

I've been coding from the sixth grade till 2016, and I was the CTO. The CTO title at early-stage companies is the guy who does all the work, generally, because there's nobody else who can be hired at that point... And then there's a person who does the sales and marketing side. So I was the person who would be in the background, and I was happy doing that; I loved coding, I loved programming... And what I saw was somebody else could be the creator of an idea, but if it's your idea and you have a particular vision of the idea, you can't give it to somebody else and expect them to execute like the way you are thinking about it. And I was not taking ownership of that idea, and I was like "Okay, somebody else will do the talking, somebody else will do the marketing." So that had been with me since school days. I would have a friend of mine - all of them are still friends, and great people... But I was like "I just wanna code." So with Postman I was like "I think I've seen this go south in so many different ways that I'm not sure whether I'm gonna be great at it, but I'm pretty sure that I'm gonna be better than everybody else I've worked with", and I just decided to stick with it.

**Jerod Santo:** Was that hard for you, stepping outside of your comfort zone to accomplish that?

**Abhinav Asthana:** A lot. When you're spending 15 hours in front of a computer and then you have to spend 16 hours in front of people... \[laughs\] It's a very big change. But I'd say it helped a lot, and I started seeing the value in starting to empathize better with who is using the product. The first thing I did when we eventually raised our seed round was I bought a ticket to the Bay Area, I visited people who were using the product, people I had corresponded with, and they were like "We are using the product this way and that way..." So I literally saw Postman running on their screens, and then I heard their stories about how they're using Postman, and it just blew me away. I was like "That is the bit that I was missing."

Then I started getting more into being open to talking, and listening, and... Eventually, of course, you have to learn to lead, and stuff. But it was a journey, I didn't learn it in a day, and I don't think I got any of it figured out... But it's a journey, and it's been good for us.

**Adam Stacoviak:** \[00:23:58.18\] It's interesting how sitting down with a user of a product you're building or have built, and how motivating that is to you, because you see them using it, and not only do you get that feedback loop going, but you kind of have this -- we're all in this, in some way, shape or form, to be in relationship with other people... And that way you're able to actually reach out and help other people solve their problems with your tooling... And I can't even imagine how motivating that was for you, to actually see people face-to-face using Postman.

**Abhinav Asthana:** Yeah, it totally changed my perspective on what Postman was. Of course, I liked it as a side project, and it was fun to work on it, and I knew it had value... But once you see how passionate people are about the thing that you've built, you actually feel more responsible for it. It's not like you can think of anything -- we are very conscious of breaking changes; even for \[unintelligible 00:24:53.11\] I can say "Okay, you can go and use Postman that way", still... And you wanna respect that.

When people have invested a part of their life in learning a product that you've built, they've built workflows around it, there are mission-critical things that are happening... I think once you meet them and you see that there are real people using the product... I mean, we have more than seven million users on the website... But what is still important is the stories and use cases of each one of them. It made me more responsible, and I did the same thing with every single employee at Postman since then. We fly them out and we hold meetups. And of course we tell people "This is what Postman can do", but a lot of it is for us to just know what they're doing with the product.

**Break:** \[00:25:49.01\]

**Jerod Santo:** Abhinav, you've mentioned the seven million plus developers right there on the homepage; three hundred thousand plus companies using this, a hundred and thirty million plus APIs... A lot of us build things similar to Postman, or we have tools, we have open source projects, we've got our hobbies, and we'd love to have more people using them. We don't wanna build that one little API for one, right? \[laughter\] Nobody wants to build that, except apparently me... But how did you get here? Because seven million people is just a large amount, and you've had a lot of success over 2012-2019 (seven years). There had to be a tipping point, or some sort of hockey stick; maybe there were some features you added early on... Tell us some of the insights that you've learned, maybe in retrospect, or maybe you knew how to get so many people using and loving this tool.

**Abhinav Asthana:** Absolutely, yeah. It's been something -- I'll be analyzing, looking back, and we have some observations that we then projected forward, and I think with the last four years a lot of them have just turned out right. Our first insight was that building APIs means groups of people working together; and now you would say "Of course, building software means groups of people working together", but we saw that APIs are a different way to combine larger pieces of software.

\[00:28:13.08\] You can take open source libraries, and you can mesh them in, and do includes and requires, and say that "Okay, my software is more capable because it has these libraries." And what we saw is this proliferation of this way of working through APIs, and that's how fundamentally software was getting built. In 2012-2013 I think ProgrammableWeb listed out a few thousand APIs, but the number of APIs, looking at it from my experience at Yahoo! or at other startups, or from the people that we were talking to, it seemed a lot.

Everybody was building APIs internally, for their partners, for public platforms and stuff... And we saw that as building APIs required groups of people to come together, how do they share what they're working on, and how do they make their workflow a little bit better? So we invented this concept of a Postman collection, where you could basically put together API calls - it could be any set of API calls; it could be your calls that you debugged, and the five calls that don't work for an API. Or these are the 50 API endpoints that my API has. Or this is a definite use case of my API working with Slack's API, or Stripe's API. So we said, okay, the way developers work (or the way we work) is you're kind of in this mode of debugging, testing, combining, and you want to share that with somebody else.

And the way to do that is -- you don't wanna build formal documentation for it; you're not gonna share a repository for it all the time. You don't wanna write documentation for it, because -- forget use cases, you don't even have documentation for the API that you have built so far. So collections became a very lightweight way for people to share what they were doing, and that established a workflow between groups of people.

You could create a collection in Postman, you could download it as a JSON file, or upload it as a link, or create and run a Postman pattern and share it with others... And what created was this inherent viral loop in the product, that if you want to recommend using Postman to somebody, not only you're telling them to use Postman, but you're also adding value to what they're doing. Again, taking the example of a back-end developer - you tested your API in the Postman API client, and you wanna give it to a front-end developer and say "Okay, here's a set of calls that you can use." Put a collection, share it with them, and now they're a little bit ahead. They don't have to rediscover all the things that you have discovered.

So what we saw was this started getting traction, not just with internal developer workflows, but also companies like Box, and Microsoft; even back then, totally unprompted, they started sharing collections publicly, and started talking about it. I think good developer tools have always had word of mouth traction, but this also added this layer, essentially this network of people that was coming together to build or work with APIs using Postman. We saw that grow pretty fast, and then we just kept iterating on the product to enable more and more collaborative activities.

In 2016 we launched this concept of a team library, where you could share collections that you're working with, all in one page. It kind of becomes a shared API repository for your team. Then it eventually evolved into this concept of a workspace, where you can invite people and work with them in real time, like the way you work on Google Docs, or Slack, for all the things that you're doing together. We feel that was one very strong thread that ran through to help Postman grow.

\[00:32:10.15\] And along with that, just adding more tools to enrich everybody's workflow. Now Postman can test for hundreds of different kinds of APIs. It already supports so many different kinds of protocols, and so many different ways of working with request bodies, and stuff. So we continued all of that, we added more tools to cover more of the workflow. You can create mock servers in Postman, you can build documentation in Postman... And I think the only other thing I'd mention is that we knew this nature of developers to try to tinker with the tool, to do things a little bit more efficiently, so we built this Javascript-based runtime in the product, which gave rise to other use cases like automation testing, and chaining, eventually leading up to integrations with CI/CD systems and whatnot.

So we always kept the tool extensible. It was collaborative, so people could share things, and that has helped us grow. At this point, actually, we have to discover use cases now from people. Like "Okay, what are you using Postman for?" and we know a little bit better.

**Jerod Santo:** I think the collaborative stuff is on point. I wanna come back to that, because I'm not sure I understand what you mean by "There's a Javascript runtime inside of the tool." Can you tell me how that plays out?

**Abhinav Asthana:** Yeah. Imagine that you have an API that you wanna test across (let's say) 50 different variations of input parameters. So in an API client you can create 50 requests, or what you can do is you can create a collection and you can have that request be dynamically created for those parameters, and you can loop through it. Postman has this concept of a pre-request script, that can run before you send the request, and a post-response script, which we call a test script. These two things are pieces of code that you write, Javascript code.

**Jerod Santo:** Gotcha.

**Abhinav Asthana:** So any single thing that you do manually, it can automate it. If you wanna send a bunch of API calls, you want to write test automation, you want to chain together API calls, like take the data from one API, put that into another API... If you wanna get a CSV dump, and then be like "Okay, I wanna run this API for 10,000 iterations for just data transfer jobs." We built all of these automation capabilities on top of that runtime, and it gives you access to certain abstractions within Postman; you can get access to variables, you have a bunch of APIs available for collections... So it gives you a lot of that ability to mold the tool.

**Jerod Santo:** Yeah. That sounds really powerful, thanks for explaining that. It wasn't connecting, but now I totally understand what you're saying, and that sounds like -- especially with power tools, they need to be malleable. If you can dream it, you should be able to do it, especially for developers, so... That's really cool.

Back to the collaborative bit - I mean, I guess it kind of seems obvious, but I don't think about these things so explicitly all the time. Collaborative tools are inherently viral, because you have to share them with the person that you're collaborating with, and if they haven't learned the tool yet, then they're being exposed to it, right? Like "Here. Here's a Postman collection." "Oh, what's Postman?" "It's this thing." They have to basically spread it in order to do what they need to do for their job, to collaborate... Unless they're like me and they work in a silo.

So I guess the takeaway there is if you're building collaborative tools, and the sharing/collaborative side is hard, then you're not doing yourself any favors whatsoever. You mentioned the collections - was that a thing you formalized around, and made it really easy to just share a link and pass it on? Was there anything that you did around the landing page for the person who's not a Postman user, who gets a collection passed to them? Share some insights on how you guys really smoothed that out and made it shareable.

**Abhinav Asthana:** \[00:35:58.18\] Yeah, yeah. These were all observations. As I said, everything that we have built comes from observations, or generally what people want... And it's a little bit different than what people say they want. We noticed that people would download these JSON files, put it into a repository, and then they would have -- I mean, people still do that. They're kind of doing that over and over again. And a repository kind of works, but generally when you're working across different teams you don't have access to the same repository. When you are sharing a public API, Microsoft is not gonna give you access to their codebase repository.

So there was this notion of sharing of a collection, and people would describe a sequence of steps that they would do, and we just thought of making that set of steps simple. The first iteration was you can upload a collection as a link, the way you share a Google Doc. You get a link and then you can open that link, and now you can use Google Docs with that thing loaded. So you could do that with Postman through the Share a Link and then Import Flows.

Once we did that, then we saw documentation pages appearing, where people would list out "Go and download Postman, click on this link, click on this button etc." and we said "How can we simplify that?" So we built this Running Postman button, which - you click the button, a page opens up, and you click a button on that page, or sometimes if it's a Javascript-enabled button, then it's one click to click that button and then you open Postman... And the collection gets preloaded for you.

A comparative experience there against developer documentation was if you see most API documentation, it has these call commands. So you will copy that call command, put it inside the terminal for one API. Now, if the API has 200 endpoints, you need to do that 200 times, multiplied by the number of times you have variations on that API. We just simplified all of that, and people saw a lot of value in that and it just spread more. We've always seen more forms of collaboration coming up.

For internal teams this itself is not sufficient. They want that - okay, if somebody else updates a collection, then I should get an update right away. If somebody's endpoint changes or somebody makes an update to documentation, then I should just know right away. And we were like, okay -- we imagine people working in these real-time workspaces. What you see is what you get, and the system should automatically store revisions for everybody, and you can diff and merge and fork, all of that.

We tried to simplify what the software does for you, to enable you to collaborate more and more in different settings... And it's still an ongoing process. There are social rules that come into play. There are some companies that are very transparent, and will invite you to their workspace, you don't need access control; but there's some companies who are like "No, we want these rules. We don't want people to see all workspaces, or all collections. We want a different repository for this set of people, and different data access for that set of people."

Now we have been studying these social groups inside companies, and how that intersects with software development workflows. The first instance of that which we found out was through a collaboration around public APIs.

**Jerod Santo:** Yeah. Once you get into private APIs, especially with access tokens, and responses... There's probably lots of stuff that sensitive, and you at least want good access controls around who sees what, but then also - have you had any pushback...? I don't know, does Postman store those collections on you guys' infrastructure, so now you have some burden of holding on to other people's sensitive API data as well?

**Abhinav Asthana:** \[00:40:08.16\] Yeah, yeah. That's one of the risks that come with any SaaS cloud-based service. We have certain best practices, we have tried to bake certain defaults in the product. There's some stuff that will just not be stored in our servers by definition. You can store API keys and passwords locally, it will not be synced up. So there are lots of these different safeguards that we have had to put in, and people weigh those against the value that they get in terms of a better workflow.

**Jerod Santo:** Many SaaS companies who are providing similar services that you are with regard to sensitive data have tried the on-premise model - GitHub Enterprise, Npm famously (or maybe infamously now) have had their two separate products, the public and private package repositories... Is on-premise something that you've thought about, or do you offer it, or have you tried that route?

**Abhinav Asthana:** We don't have an on-prem version for the cloud-based or the syncing stuff that we have, but all of our tools run on-prem technically, because Postman is a desktop app that you have on your infrastructure. We have a command line tool called Newman, that can integrate with your CI/CD build, and that is an open source tool that you can integrate within your firewall, and it runs on your servers. So it's kind of a hybrid model, if I may say, where the tools themselves run mostly on your systems. But for a full-scale on-prem solution - that's something that we think about, but it's not been a high priority so far.

**Jerod Santo:** Because of the effort put in, because your customers aren't asking for it...? I just wonder how seriously you've thought about it.

**Abhinav Asthana:** Customers haven't really asked for it. I think generally there are more concerns around how do you access those APIs, and we don't access those APIs; we don't get anything \[unintelligible 00:42:11.01\] from the client to somebody's APIs. It totally runs on your infrastructure. So they have more concerns there, like "How are you accessing our APIs?" and we don't have access to your APIs; you have access to your APIs.

**Jerod Santo:** So you store the collections, but the bits inside the collections that say "Hit this server on this IP address" or whatever it is, is internal to their network, and the result of that never comes back to your cloud sync. Is that what you're saying?

**Abhinav Asthana:** Yeah. I mean, by default it's turned off. You can turn it on if you want to keep it open.

**Jerod Santo:** Gotcha.

**Abhinav Asthana:** So all these controls are there. It's been something that we talk about with people, and they weigh the pros and cons of what they're getting.

**Jerod Santo:** So this CLI - you said its name is Newman. Please tell me this is a Seinfeld reference. \[laughter\]

**Abhinav Asthana:** Newman was the postman in Seinfeld.

**Jerod Santo:** Yes... "Hello, Newman..." I'm all over that reference.

**Abhinav Asthana:** Newman had a line -- so I'll maybe share a bit on why it was called Newman. So Newman had this line; I think what he was telling Jerry Seinfeld was "Jerry, do you know, this mail - it always keeps on coming. It just never stops." So we had this whole notion that Newman is running in the background, running these automations non-stop, coupled with your CI/CD bit... And it was this reference to the postman always having to work in the background.

**Jerod Santo:** Nice. I think Cliff Clavin was also a postman, but he spent all his time at the bar, so that would have been a bad name.

**Abhinav Asthana:** \[laughs\] Interesting. And people like Newman, generally...

**Jerod Santo:** Well, Jerry hated Newman, but everybody likes him, so it's fine.

**Abhinav Asthana:** \[laughs\]

**Adam Stacoviak:** Jerry really did hate him, didn't he?

**Jerod Santo:** Yeah, Jerry hated him a lot. Despised him.

**Abhinav Asthana:** Yeah. \[unintelligible 00:44:10.28\] If it's running tests, imagine that your test fails \[unintelligible 00:44:16.28\] tells you that five things are not working.

**Break:** \[00:44:26.20\]

**Jerod Santo:** So we've talked about where Postman came from, what it was, what it's turning into... Maybe we could talk a little bit about your vision for the future. Right now you do pitch it as the most complete ADE. Or maybe it's the only ADE, because you guys made up the acronym, or maybe not. That being said, there's some competitors out there... You're now saying "Use Postman to build your APIs. It's a fully integrated shareable environment." Tell us more about what it looks like today, what features you're adding, and people can expect if they check it out.

**Abhinav Asthana:** So I was talking about collections before, and as we started understanding a bit more on those collaborative activities that people do when they're building APIs, we saw that people take a lot of different paths. Postman of course prescribes one particular workflow, but it's not the workflow that they have, or they want to have. There are lots of variations in how people build APIs.

The other thing we saw was Postman always was about testing APIs, or building APIs, or an API dev environment. The word API itself was never in the interface for a while... \[laughs\]

**Jerod Santo:** Oh, yeah?

**Abhinav Asthana:** Because you always had requests, history...

**Jerod Santo:** Was it like REST client? Was that what it used to be called, a REST client?

**Abhinav Asthana:** It was called a REST client, but it was implied that when you are sending a request, it's an API request.

**Jerod Santo:** Sure.

**Abhinav Asthana:** So we saw that people would take that leap from seeing a collection as a group of things to "Okay, it's representing API documentation" or "It's representing an API test suite." So you're like, okay, now should we -- what is an API, generally? Do we know how is this abstraction represented in the minds of our users? And we said, "Okay, we should see APIs as a combination of these three things", which we eventually found out being recently talked about in this book called Continuous API Management, as APIs having an interface, an instance and an implementation. So an API has a running instance - that's the thing that runs that code. Then it has an interface, which are the endpoints that are described, and then there is the implementation, which is the codebase, which is executing that thing.

So we looked at this particular definition and we saw that essentially this whole process of building APIs is going through the cycle of design, developing, testing and deploying... And people essentially need some direction on how to go about it.

\[00:48:19.16\] So we looked at all of these different activities, and said, okay, Postman is gonna define the notion of an API, and it's gonna help people go through this workflow. And along this workflow, you will connect all of these different tools and techniques that you use in building that API. So now you have this API tab inside Postman, and you can create a new API, you can give it a name, you can give it a version, you can define the API through a schema; we support OpenAPI, GraphQL, RAML, and a bunch of other things... And you can generate Postman collections out of that schema, and those collections could then in turn be turned into mock servers, automation test suites, documentation, monitoring... And it gives you this place in which you can really see all those things that an API is, and connect to other things where an API is being represented.

So it kind of brings together a lot of these other disparate workflows that existed outside a Postman, into Postman. It streamlines a lot of those build steps people are already doing, and people just feel more comfortable, that "Okay, all of these things are in one place."

That was our first iteration of it, and of course, we can talk about how it has evolved into more things.

**Jerod Santo:** When did you guys add SOAP support? Because I'm sure that's pretty popular.

**Abhinav Asthana:** \[laughs\] SOAP - actually, we wanna support it as a schema as well.

**Jerod Santo:** Oh, really? I was mostly joking.

**Abhinav Asthana:** \[laughs\] No, actually the launch plan was to support SOAP and GraphQL at the same time.

**Jerod Santo:** Oh, was it?

**Abhinav Asthana:** \[laughs\] Because so many APIs are still in SOAP; people don't know. The interesting thing about APIs is that it's very hard to get rid of an API.

**Jerod Santo:** Yeah.

**Abhinav Asthana:** You have to deprecate an API over a long period of time, unless you are Google, which is -- you know, you find out on Hacker News that the API you're using is no longer available.

**Jerod Santo:** They just turn it off the same day, right?

**Abhinav Asthana:** Yeah... But otherwise, you need to transition clients off, and you need to really work through a deprecation plan. So a lot of mission-critical APIs are SOAP APIs. In fact, a lot of the best APIs are built on top of SOAP APIs, and a lot of GraphQL APIs are built on top of REST APIs. And it's like totals all the way down...

**Jerod Santo:** All the way down. It sounds inefficient, but what do I know...?

**Abhinav Asthana:** You know, a lot of software development is basically working around the constraints of an organization that builds software before you... It's like looking at a tree trunk. You look at the first string and you're like "Okay, this is what happened in the first iteration." Then I wanna build a ring around it, build a ring around it, and every new technology adds a ring around it; it doesn't replace anything underlying.

**Jerod Santo:** Right. You're only ever adding on top, and it's kind of like scar tissue - the more you add, it becomes thicker, harder, more rigid and more difficult to deal with... So yeah, that's just kind of a fact of the world at this point.

**Abhinav Asthana:** And our view is that all those APIs are valuable, all those layers are valuable, and we want to enable developers to work with all kinds of APIs across all sorts of different constructs. So if you have a legacy API, if you have a legacy API, if you want to transition out of that legacy SOAP API to a GraphQL API, you should have SOAP and GraphQL collections testing both APIs in the same place. If they're in different places it's just harder to do those things. Or you can build a mock server for the older API, and then document that and get it tested, and then you'll transition into a new thing.

I think all those cases are valuable. In fact, billions of dollars are spent in digital transformations every year, which is basically everybody just trying to figure out what was done ten years ago.

**Jerod Santo:** Yeah. So in addition to your Javascript runtime you could add a Fortran runtime, or a COBOL runtime.

**Adam Stacoviak:** Come on now.

**Jerod Santo:** \[00:52:14.22\] Come on, support everything.

**Abhinav Asthana:** \[laughs\]

**Adam Stacoviak:** Fortran it!

**Abhinav Asthana:** That's the line. I think if there was one advice I had to give to open source developers, I'd be like "Talk to your real users."

**Jerod Santo:** Yeah. So you have this funding, you have Postman as it is... Surely when you talked to those investors, they weren't interested in Postman as it is; they were interested in some future for Postman that isn't here yet, but their money will help you get it there. So what does that look like if it comes to fruition, and does everything that you hope it will do? What does the future of Postman look like?

**Abhinav Asthana:** Postman aims to be the collaborative platform for all APIs which an organization builds. So within the enterprise or within a company that's building APIs or consuming APIs, that's the place that you go to. And you can branch out into other things, use other tools, but that's the place where you essentially work with APIs. So we want Postman to be synonymous with anything API-related.

An extension of that is as APIs also help businesses and developers collaborate in building software together, Postman is something that we expect to be the network of all APIs published \[unintelligible 00:53:38.27\] effectively. That's how we built the Postman API network for public APIs, and we have Postman Pro and Postman Enterprise for essentially internal APIs.

**Jerod Santo:** Well, you're on your way. You also have the second annual Postman User Conference coming up, so... A lot moving and shaking there. Tell us about this conference. Postman enthusiasts around the world... What's the deal here?

**Abhinav Asthana:** As I said in the beginning of our conversation, we love meeting people; that's when you realize how the product is being used, and hopefully we can share a few things that we have learned. So the Postman User Conference is a way for some of the best practitioners within the Postman Ecosystem to share their practices and knowledge with other members of the Postman community.

We had a great first conference last year, and now we're holding a second iteration of that. We expect it's gonna continue expanding. We host meetups and events across the globe now. In fact, a lot of our events are held by people in the community themselves, so it's a way to bring them together, share best practices, share what we are building for the coming year... And hopefully everybody has a good time.

**Adam Stacoviak:** Yeah. Conferences are pretty interesting for brands like this. We see a lot of that happening quite a bit now, and it's certainly a good place to meet up, as you said earlier, face-to-face with some users, which is super-motivating, but at the same time very rewarding in the process, to just bake in deeper relationships.

Maybe now that we're closer to having a full understanding of Postman, its inception, to its history, to how you've grown to where you are, maybe paint a picture for the future. Where is API development going? What are some of the tooling happening that you're seeing is on the forefront of enabling teams to better collaborate, to better manage, to better version etc.

**Abhinav Asthana:** \[00:55:51.26\] Sure, yeah. First of all, we believe that APIs are essentially the building blocks of modern software. Now you kind of get this massive power of functionality, and storage, with cloud-based tools available to infinitely scale up anything that you want to use. So I think APIs as a general trend will continue to be those building blocks for modern software.

Another related trend that we see is everything is kind of API-fied, in a way. Businesses are APIs, governments have APIs - that is a lot of data that is exposed through APIs, that is useful in social contexts, or other things that we can't even hypothesize.

If you look at all the data dumps that governments all across the world expose once a year, those are all becoming APIs where you have real-time information coming from things on the ground. So that's the other bit we see...

I think consumers will have more power due to APIs. That's something that is not talked about as often by companies, because they want to of course give you applications to work with... But if we go back to that hacker mindset, that you could go into an application, tweak it to your own needs, now things have become much more -- it's like your iPhone; you can't really do anything with it if you can't tweak it, and stuff. And I think APIs give that ability to consumers, to tweak things to their advantage. I think that hopefully pressures companies to build more and better APIs.

I think privacy and the debate around data is a big thing. All the debates that we have around data these days are all essentially about APIs. APIs are available for you to put in data, but it's very hard for you to know all the ways in which a company is tracking you. So I think that conversation about this debate between applications and consumers, and what role APIs is gonna play is gonna be important. So that's the context - we feel APIs are very fundamentally important to the software world going forward.

I think in terms of tooling I would divide it into two parts: tools for building APIs and tools for consuming APIs or using APIs. Postman plays a role in both sides, and I think that's where one of the advantages of Postman also comes in. And I missed one point that we'll probably talk about it.

I think for building APIs, cloud-based tools, development environments have done a lot recently... But really thinking in terms of APIs is still (I'd say) lagging behind. It's very hard to model an infrastructure. It's very hard to reason about the conceptual architecture of something... And no tools have been built; it's more like a spaghetti that is in your principal architect's head, and we're still trying to reason, okay -- we went to microservices, but if you visualize a whole bunch of microservices, it looks like a mess. So I think tools there, in terms of reasoning conceptually about APIs, need a lot more work. We default to using schemas and text editors, which I am not that excited about.

In terms of using APIs, I think we see a lot there happening that we didn't anticipate. Out of that millions of developers that we feel use Postman, a lot of them are first-time developers or first-time users of APIs. These are people in marketing, sales success... I saw an article on a conference about how journalists can use data APIs to write better stories, and describe how to use Postman for that.

So I think anything that makes APIs accessible and more usable... I think Zapier comes to mind, how you can connect things; IFTTT comes to mind... I think they're still in those early stages of really just connecting things, but not really applying APIs to build powerful applications, and I would like to see more things there.

\[01:00:03.26\] And I think more generally, how the general non-developer, who has not invested five or ten years of their life in understanding code, how can they break down applications or this way of working when you're working with code - I think that needs a lot of work, and I see that class emerging. There are developers who just know what's going on, and they know how to fix things, how to build things, and the rest of the people who just know how to turn their machines on and off again, so... I think something needs to be done there.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** You mentioned using APIs is a big thing for you. I would imagine that's probably where your network, your API directory comes into play. One part is understanding that an API exists, and potentially an extension to that would be ways people are using these APIs. So this network, this directory you have - is it APIs that only use Postman, or is this sort of agnostic in terms of its APIs at large, that people or brands are sharing and consuming?

**Abhinav Asthana:** It could be any API. They just have to publish on the Postman platform. We try to verify them, so we want to make sure that the company that has built the API is publishing on the platform, unlike an unmoderated list... Because with using APIs, you also want to get the latest version of the API, that's secure, and things like that.

So if you are a company, you can have a Postman account and then publish a bunch of collections. We don't really care whether you built the API using Postman or if your team uses Postman. We just want the API to be there in a form that can be consumed by other Postman users. And it's a free service.

**Adam Stacoviak:** You also say on top of that it's the most authentic collection, so I would imagine there's some sort of vetting process in there to ensure that the API is the latest version, usable etc.

**Abhinav Asthana:** Yeah, we have a dev rel team that actually builds relationships with the teams who are publishing on Postman. As I said, one of the criteria is that if you are publishing -- if you're Paypal and you want to publish on the Postman platform, we'll only let Paypal do that. We don't wanna have somebody else represent Paypal, and we look at that as a vetting process.

In terms of the collections themselves, after you publish the first one, then you can update and add more. That's really up to the publisher. We don't go into that level of granularity. It would be too much of vetting, I'd say.

But over time we want to build -- we are actually in the process of building more social tools for the community to be able to rate APIs, be able to fork them, be able to submit use cases back to the publisher, and really come together to say "Okay, this is a good API" versus "This is a bad API."

**Adam Stacoviak:** Yeah. Right now it seems all you're doing really is just linking out to their developer docs potentially. It doesn't seem like most of the pages are actually on the Postman website. You're just sort of like a link directory for APIs, essentially.

**Abhinav Asthana:** Yeah, the website version is a little bit behind. The app version, if you go to Postman and click on the New button and see the API network in there - that's the one you publish to. And we have a new version coming up pretty soon that will be updated; a dynamic portal, effectively, where you will be able to search for publishers, and they will all be listed on the Postman portal. You would not be directed to other things.

We started to just see who's publishing with the Run in Postman button, and those are the first entrants into the official network. The web version will go through refinement to better build the user experience out. As of today, the Postman app gives you a ready way to consume these APIs, in the app itself.

**Adam Stacoviak:** \[01:04:03.08\] Gotcha. Very cool. Well hey, congrats on the 50 million. I mean, from donations to 50 million and series B - that's huge.

**Abhinav Asthana:** Thank you. I have to pinch myself, as always.

**Adam Stacoviak:** \[laughs\] It's still real. You're not dreaming.

**Jerod Santo:** You're awake.

**Abhinav Asthana:** Yeah. I always say, we never really went for a funding milestone as a marker for success, and I think we have a long way to go.

**Jerod Santo:** It's a milestone though.

**Abhinav Asthana:** Yeah. And Postman still has some -- I think 1,000 feature requests open on our public tracker, and I don't know what timeline we'll get to it. Either we'll close it or we'll refine it. There's so much to do that I think we are excited about the journey. There's lots more to do, but yeah, at this point it feels awesome.

**Adam Stacoviak:** Well, it was fun hearing the journey, especially just the early days of raw and unprofitable to where you're at now. It's interesting to see the path that people take in scratching their own itch and actually seeing success. And I would say even also to that, changing the way something like this actually operates. You're making a big dent in the dev world, so we appreciate that.

**Abhinav Asthana:** Thank you so much. It's been great. It's been amazing, going from that first version, to seeing people use it and share their stories with us... It feels great. And the credit goes to the team. I've been on this call, but there is a big team out there now; we are about 150-people strong across San Francisco and Bangalore. We have people across the globe now - in U.K, Portugal, Nigeria...

**Jerod Santo:** How many engineers?

**Abhinav Asthana:** About 75 engineers now. An interesting fact I'd mention is that most all of our sales are self-sale sales, so people buy the product through the product. We don't do outbound sales.

**Adam Stacoviak:** Sweet.

**Abhinav Asthana:** Yeah, so... Keep developers happy without annoying emails, that's the goal.

**Adam Stacoviak:** Except on the enterprise side, of course.

**Abhinav Asthana:** Yeah, the interesting thing with our motion has been that people reach out, saying "We want the enterprise product, because we see so many people using it. What do you have?"

**Adam Stacoviak:** Right. Very cool.

**Abhinav Asthana:** It's something that we're learning from other companies - Atlassian, Slack... I think we're still focused on building a valuable product. It might change in the future; I'm sure there will be a CEO or a CTO who's not day-to-day using Postman, and we'll have to email them. \[laughter\]

**Adam Stacoviak:** Thank you so much for sharing your time and your story with us. We appreciate it.

**Abhinav Asthana:** Thank you so much. Thank you for having me here.
