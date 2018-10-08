**Adam Stacoviak:** Dan, we're just shy of a year catching back up with you personally. We met you a year ago, and the term cloud native was, to Jerod and I, and maybe even most of the world was still becoming new, and we were still learning about it. I think we actually even opened up the conversation with like "Dan, what's cloud native?" and I think now people tend to know what it is.

Without going too deep, because I wanna cover a lot of the subject, but kind of give us an update of like the last 9-10 months since we last spoke. What's been going on with the CNCF?

**Dan Kohn:** Yeah, the Cloud Native Computing Foundation has been going like gangbusters. I could pull out the exact numbers, but we've grown from something like 8 to 26 projects during that time. We've grown from about 100 members a year ago to we're just about to hit 300 members. Our events are growing like wild, where we had 1,500 people in Berlin a year ago, and then 4,300 in Copenhagen a couple months ago, and we're expecting 7,000 in Seattle in a couple more months...

So on almost any possible metric -- 3,000 unique contributors to the Kubernetes project, and the amount of money, our end-user community has grown from 20-something members to 59 today. There's just a huge level of growth and adoption and engagement.

But on a more technical level, we could actually dive into the cloud native, what it means for a second, because CNCF had a process with our technical oversight committee where we argued about and came up with a definition.

**Adam Stacoviak:** Oh, nice.

**Dan Kohn:** \[00:04:02.27\] It's a little dense, but it's only four sentences long, so I would read it to you if you're interested.

**Adam Stacoviak:** Let's do it!

**Dan Kohn:** Okay. And you can find this by searching for "CNCF Cloud Native definition". It says:

"Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments, such as public/private and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure and declarative APIs exemplify this approach. These techniques enable loosely-coupled systems that are resilient, manageable and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably, with minimal toil. The Cloud Native Computing Foundation seeks to drive adoption of this paradigm by fostering and sustaining an ecosystem of open source, vendor-neutral projects. We democratize state of the art patterns to make these innovations accessible for everyone."

**Adam Stacoviak:** Well, you were right about being dense, that's for sure.

**Jerod Santo:** Is that only four sentences? \[laughs\]

**Dan Kohn:** It is pretty dense, yeah. It was five maybe...

**Jerod Santo:** Okay, five.

**Dan Kohn:** But man, we argued over it for months.

**Adam Stacoviak:** I can see why.

**Dan Kohn:** Yeah... \[laughs\] But the perspective I would give on it is -- and one thing that's interesting about it is, you know, people associate cloud native with Kubernetes, and Kubernetes is the leading platform, it's the biggest project in CNCF, it's one of the highest-velocity projects in the history of open source, right now basically second only to Linux itself... But what is interesting about that definition is that it doesn't say Kubernetes and it doesn't even mention orchestration, where Kubernetes is an orchestrator.

What I like about the definition is that it's saying that over the last ten years, a lot of leading companies have separately run into the same scaling challenges, both scaling their applications on the web, but even more scaling their development teams. And when you look at companies like Twitter, and Yelp, and Google, and many others, they've all needed to come up with a series of solutions that have actually kind of converged together, and now a lot of that learning is getting put into software... And that software, as opposed to having to go pay someone tons of money for it, is available for free to anyone as part of the open source community.

**Adam Stacoviak:** I think what's interesting, too - Jerod, when we did the Istio show a few back, just kind of seeing how, Dan, as you laid out, Kubernetes being the most popular, with the highest velocity, second to only Linux, which is really kind of crazy, because just a couple years ago the fight was essentially still "Will it win?" and obviously, since then it has... But going down the cloud native trail map, which was really interesting in that show, which we'll link up to in the show notes... Kind of at each layer, as Kubernetes and CI and orchestration and observability and service mesh - as each of these become more and more standardized, you kind of see the winner, essentially, or the preferred ways to do things, sort of creep in to each of this trail map, which this trail map is really great... It was great for illustration, but also great to talk through, to see how --

**Dan Kohn:** I really appreciate that, and we're pretty pleased with that, as people found our stuff very confusing until we started printing that out. I will mention, if you go to l.cncf.io (Landscape CNCF) there's a link at the top to both the trail map, which is sort of the recommended path of how you can approach cloud native... And we say, look, the very first step is to containerize, and then you wanna do CICD, and only third should you be implementing orchestration and looking at these other more advanced technologies.

\[00:08:07.16\] The trail map is the front page, and when you flip it over, if you get our printout, we have this insane cloud native landscape, and that has over 570 different open source projects and closed source products from all of these different vendors around the world. It kind of represents the ferment and the excitement in the space. But without that trail map, the landscape can feel a little overwhelming.

**Jerod Santo:** We were kind of joking around before we hopped on with you, Dan, about this being an accidental kind of a cloud native month on the Changelog, because we had the Istio show, then we talked about a segment -- really a conversation around microservices and monorepos, and then last week I had a great conversation with Paul Fremantle about Ballerina, which is kind of a cloud native programming language, culminating with this conversation with you...

So it's been a lot of coverage, and I guess to our listeners out there who aren't that into this stuff, stay tuned, we will diversify yet again, have on fear.

**Adam Stacoviak:** Yeah.

**Dan Kohn:** But that is a great line-up, and I hope Paul might have taken credit for the fact that he's actually the person who coined the word "cloud native" about 4-5 years ago.

**Adam Stacoviak:** Did he really?

**Jerod Santo:** He did not take credit, he was too humble.

**Adam Stacoviak:** He's very humble, yeah.

**Jerod Santo:** We did not tease that out of him.

**Dan Kohn:** \[laughs\] Yeah, so among other claims to fame...

**Jerod Santo:** Well, we kid because it wasn't on purpose, we didn't decide to go all cloud native recently; it just kind of happened, so it seems like -- you know, we always joke that if software is eating the world, Javascript is eating software; it seems like on the backend, operational side, this cloud native idea - I mean, evidenced by 500 projects or entities in your landscape - is really eating a lot of software... So there's just tons of stuff to cover. Is that what you're experiencing? With the massive growth of CNCF, it seems like that's definitely the case.

**Dan Kohn:** Yeah, I would just say a flat yes to that. I will also mention, by the way, that Node.js is a sister project of CNCF and the Linux Foundation... So we're really thrilled to see the growth there. It's also the JS Foundation, which has a lot of other core projects, like jQuery in it. So certainly Kubernetes is a great way of running your Javascript apps on the server.

**Adam Stacoviak:** On that note, I would say too stay tuned, because listeners, we will be at -- I think the invite is still open, Dan; you'll have to correct us if we're wrong, but I think we're still invited to KubeCon + CloudNativeCon, and we definitely have representation being planned for Node + JS Interactive, which are the next bigger conferences y'all have here in the fall, which is exciting.

**Dan Kohn:** Oh, that's great. Yeah, I'm really thrilled to hear that. We're gonna be setting up podcasting booths on the floor of KubeCon + CloudNativeCon, because there's so much interest here, and we really do wanna facilitate getting this message out to a wider audience.

**Adam Stacoviak:** That's exciting. This is news to me, and I'm excited about that. We've done something similar when we've gone to Microsoft Build, or a few different events there, where they've actually given us reserved space to do, and help schedule, and just really plan our content well... So that's awesome to hear.

**Dan Kohn:** And we're gonna be in the Washington State Convention Center, which is where--

**Adam Stacoviak:** The same place, yeah.

**Dan Kohn:** ...I think back in the end of May or June. So it's wild now to be filling up that kind of space. We actually -- still with too much left, we have 143 different sponsors lined up for that event, and we're not gonna be announcing the schedule for another two weeks, but I can say that based on the slots we have available for three days, and the number of submissions, we had a 13% acceptance rate for the papers...

**Adam Stacoviak:** Wow.

**Dan Kohn:** So it really just speaks to the level of interest in this community.

**Adam Stacoviak:** \[00:12:05.29\] The conference alone has got to be several folks' full-time day jobs to just manage - not only the sponsors, but 7,000 people. When I was there in December in Austin, that was around 4,200; the next one was in Copenhagen, you said 4,300, and now you're adding another -- a little shy of 2,000 people or so to the next U.S.-based conference. You're not only scaling your technologies, but also obviously scaling in the community, and that means having a community and a conference that can actually sustain that and entertain it, and make it worthwhile to spend whatever money it is, and the time involved to come there and actually get a benefit.

**Dan Kohn:** Yeah, and we are very cognizant that for the sponsors it's a significant outlay of money... I mean, we do offer great deals for small startups, but companies spend a lot of money on this for those 7,000 people; most of them are flying in, they're taking times away from their families, it's the hotel and such... So there are real expenses there.

So we're really -- but we do see the conference activity of CNCF as being one of the core aspects of community building, that because all these communities mainly exist online, that ability to come together at least once, and for a lot of people, they'll do both North America and Europe, so twice a year... It makes them so much more effective online when they can kind of connect together that e-mail, or what otherwise might seem a mean Slack comment, and could kind of see the right humor behind it.

And I definitely wanna give a big shout-out to the Linux Foundation events team. We're able to leverage that same events team that puts on the open source summit, and Node Interactive, and others.

It is a little crazy that literally just 18 months ago we were in Seattle for our event and we had 1,000 people there... So to go 7x in two years definitely has required staffing up, and just the whole set of different processes and approaches on it.

What's been really nice is that we get to keep iterating. If we just tried to create a new 7,000-person event from scratch, I think that would probably be impossible. But the fact that they are growing, and we can see the things that work, and things we wanna do differently... And I particularly wanna give a shout-out to our two co-chairs. These are leaders in the community who we bring on, and put a significant amount of effort into managing the program committee, and picking keynote speakers, and organizing the submissions into coherent tracks.

For our event in Shanghai and Seattle, that's Liz Rice of Aqua Security and Janet Kuo of Google. They've just been doing fantastic work on organizing all this. It is quite involved, though.

**Adam Stacoviak:** Just because we're on the subject, and not that it's completely pertinent to the conversation, I'm just kind of curious in the moment, since we're there... The last show, Jerod and I did some bag-of-the-napkin stuff where we were talking about memberships, and just kind of trying to really grasp the amount of money being put into the foundation, and the future essentially of Cloud Native... But I'm kind of curious, the conferences, as it relates to being a profit center, and maybe how it helps financially the ebbs and flows - is that a big player in it, or is it sort of a breakeven...? How do you treat conferences? I'm just really curious.

**Dan Kohn:** Sure. We're not trying to run them at a huge profit. You certainly can go to a fancier conference in terms of the quality of the food... We don't want it to feel opulent, because we think that would be wrong for a community conference. But the reality is that, in particular Seattle, has grown so much that it will spin off some meaningful profit this year.

And what's nice is that CNCF as an organization, we're part of the Linux Foundation, we're non-profit, so first of all, we don't have a way of collecting profits. I don't get a bonus or a commission or anything like that...

**Adam Stacoviak:** \[00:16:15.14\] Right.

**Dan Kohn:** But more to the point, our leaders, our membership, and particularly our governing board, which is primarily the platinum members, don't want us to run a significant profit. So we try and keep like a 5% reserve, just out of some financial conservatism. Then the rest of the money we're investing back into the community.

One example of that - I think people might be aware that we've rolled out this... Actually, now that I think about it, I think we were just planning to do it when we spoke a year ago... So let me give you a quick pitch for the Certified Kubernetes Program...

**Adam Stacoviak:** Okay.

**Dan Kohn:** Kubernetes is open source, it's available for free; anybody can just download it and run it... But kind of like with Linux, the majority of people who use it are gonna use it via a distribution or via a hosted platform. So there's this concern that as people make changes to it, does it remain Kubernetes? How can you avoid having it fork in an unhelpful way?

CNCF is working very closely with the Kubernetes community and community's leadership, and put together a conformance program. What's neat about it is all of the tests for it are open source and are built into Kubernetes itself, and are the tests that are always being run. But then any company that has a distribution, or an installer, or a hosted platform - like Google Kubernetes Engine, or Elastic Kubernetes Service on Amazon - can run that conformance suite, upload the test logs to a public GitHub site, and then we mark them as conformant. That's both a sort of mark that customers should look for, it also gives them the additional permission of using the term Kubernetes in their product name...

And we've gotten just insane, fantastic participation and engagement in this program, where we launched it literally a year ago in Austin, and now have 67 different companies that have gone through this process. So we've just been able to swoop up the entire industry.

And what's neat about it is that although the vendor itself self-certifies and uploads that, any future user can come along and run that same conformance test suite, and confirm that nothing has changed since they certified. So there's kind of a crowdsource aspect to confirming and validating that certification.

And then in addition, the certification when you do it is good for a year, but it goes away unless you certify a newer version. So we're specifically trying to avoid issues where people jump off the release train and don't keep up with the newer features.

So both of those have really been quite positive aspects of it. One of the challenges is that there's some technical debt built up in the Kubernetes community. All new features that come along include conformance tests to cover them, but some of the initial features, as they were deployed, didn't have conformance tests.

As an example, even though CNCF doesn't normally fund actual engineering and development, we do have the resources right now that we're working with an external test development company, and trying to fill out some of those conformance tests for earlier work. And that's just one of the ways that we can kind of help out the community and help all this work better together.

**Jerod Santo:** What's the motivating factor for the 60-something companies to go through this process? Is it to legitimize their products and services in the eyes of potential customers?

**Dan Kohn:** Definitely, yeah. You really don't wanna be out there with a non-certified version of Kubernetes. It would be the most natural thing for a customer to say "Why aren't you certified? Why did you fork it?"

**Adam Stacoviak:** \[00:20:19.04\] Yeah, because it would almost be as if if they were anti being certified, what are the motivations for that? That might mean they're sort of anti the direction that CNCF and Kubernetes and Prometheus and all these others, the directions you're heading, essentially, for some reason, are against it... Figure out why.

You mentioned also being able to use the Kubernetes brand name in product services, too.

**Dan Kohn:** Yeah, so that's an extra carrot. There's no requirement to do that.

**Jerod Santo:** Gotcha. So is the conformance simply technical? Is it a test, pass the tests? Or is there also a financial requirement, or agree to do certain things?

**Dan Kohn:** Yeah, the requirement is to be a member of CNCF, and so for a small startup, that's $7,000/year. But there's actually a couple non-profit or community distributions of Kubernetes, the equivalent of Debian in the Linux world, and they have free certifications.

I will mention one other area that we're funding or investing in that's been really pretty neat as its own open source project, and that's called Dev Stats. You can see it at devstats.cncf.io. It's a system for keeping track of contributions and pull requests and issues and aging really trying to just keep up on the project, and particularly where Kubernetes is now split between about 30 special interest groups trying to track which of those things are kind of falling behind, or might need extra help, or need to invest more effort in things. And then also kind of which companies are making contributions, which developers...

How it works is pretty neat, where there's a great free service called GitHub archive, that takes all 80 million or so GitHub repos that are public and every event that's happened to any one of those... And what's amazing is we download that terabyte or so of data, and then we throw out 79.99 million of them and just keep the 80 or so Kubernetes repos plus the 100 or so other repos for the other 25 CNCF projects... And we go through all of those and do a bunch of analysis and put it into a time series database using Postgres, and then have a Grafana frontend to it that allows you to do these queries and visualizations and such.

So that's a project that we built out; a CNCF contractor works full-time on it, named Lukasz Gryglicki, in Poland. But he and I started this about a year ago, and the initial version was perfectly fine, but the real value has been iterating it over the course of the last year with the Kubernetes community, as they've had very specific, detailed requests for understanding different kinds of processes and graphs and such.

So that's just another area where CNCF can invest in development infrastructure, that then hopefully allows the community to function better.

**Jerod Santo:** Yeah, that's very neat; I was just pulling it up as you were talking about it, and it allows such tracking as hourly activity on GitHub, different stats around the communities, summaries, there's issues ages, all those kinds of metadata around these projects. I can see this being useful in general for any project.

**Dan Kohn:** \[00:23:55.16\] Yeah. I would emphasize that it's an open source project on its own, and so for other projects that would like to get these statistics we'd really encourage you -- there's a couple that have started doing it, but we'd encourage you to give it a try, and if you do run into issues, kind of porting it over to your project. You can just file open issues on the repo with us, and we're happy to work with you on it.

But as an example, we have the statistic that across all 26 CNCF projects there have been 40,086 unique contributors to them. It's really pretty amazing; I mean, that's obviously a massive number, but it's also just neat to be able to track all of that.

**Adam Stacoviak:** It's the first time I'm seeing this. This is really - like you said, Jerod - useful for not just Kubernetes and CNCF, but other projects as well. This is really cool.

**Dan Kohn:** Yeah. It also builds on GitDM, which was originally written by John Corbett of Linux Weekly News, and Greg Kroah-Hartman, the stable kernel maintainer... I mean, we're building on a lot of other work that was done here. We're using Grafana -- I mean, obviously, all this great open source software, like GitHub Archive, and Grafana, Postgres, and such...

I also will give a shout-out to Packet, the bare metal hosting company who contributes free server resources for us to run all this. It's kind of an involved process to go through all of that data, and every now and then we make changes to it and have to rerun everything from scratch... And we can actually do that in just a couple hours on one of these 48 way servers.

**Jerod Santo:** Well, we're big fans of GitHub Archive. We've been using that for years to generate our Changelog Nightly e-mail. There we're only concerned about the most recent 24 hours events, specifically star events... I love seeing other people use the same data set for wildly different ways, and this seems like a very useful way of going about that... So very cool. I'm glad it's open source. I think a lot of people can definitely benefit.

Check it out - devstats.cncf.io (link's in the show notes). Click around, and if it's interesting -- it's kind of like GitHub Pulse on steroids; do you remember that Pulse is, like, trying to get the idea of what's going on with this project lately?

**Adam Stacoviak:** Yeah.

**Dan Kohn:** Oh, definitely.

**Jerod Santo:** But this is like for the entire history of these things. It's very neat.

**Dan Kohn:** Well, in particular for something like Kubernetes where it's across many different repos...

**Jerod Santo:** Right, you can aggregate it. Exactly.

**Dan Kohn:** Every file of all 80,000 files or so are supposed to be owned by a specific SIG, but that mapping isn't transparent, so the fact that we're able to do all that in a more complex project really lets you dive in in a more detailed way.

I guess one other project I might mention - I referred to it before - is CNCF's Interactive Cloud Native Landscape, and that's at l.cncf.io. This was kind of a personal passion project; it partly came from getting so many complaints about that crazy static Landscape document with more than 500 boxes on it... But also, just as I tried to stay familiar with this space, for any given project that I'd hear about, I would always do kind of the same set of searches - look it up on GitHub, how many stars and contributors did it have, then look it up on Crunchbase, and say "Oh, well, the company behind it - how much funding did they get? When were they founded?" that kind of thing.

And so this is, again, a free open source project and service that does all that for you. One of the powerful aspects is just a lot of filtering and sorting that we built into it. For example, if you're looking at it, and over on the left side under Example Filters, if you click Open Source by Age, since you're kind of historians of open source, you've been following this space - it's pretty interesting to see "Oh, here's the project in the cloud native space", and then if you click on Postgres, you can see "Oh, that was founded 22 years ago, and its latest commit was this week", which is really such an extraordinary level of success and engagement.

\[00:28:09.18\] And then the next two are MariaDB and MySQL, and of course, they're forks of each other, so they were both founded 18 years ago. And then going forward, you see things like Ceph, that's 17 years ago, and NGINX, and MuleSoft, and Puppet, and others.

So that's one view... But then another one that's kind of fun is click on Open Source by Stars - okay, you can see Kubernetes is number one there, with 40,000, but things like Elastic and Ansible, Redis, Serverless, Grafana... And then another neat one is Offerings from China, so that you can see that we're up to 55 products and projects that we're tracking. We have a total of 18,000 stars, the companies behind them have a market cap of a trillion dollars, and have raised funding of 158 million dollars.

**Adam Stacoviak:** Yeah, I'm glad you said that, because on the top there I couldn't help but notice it says "You are viewing 578 cards with a total of 1,227,438 stars." That's as of right now, I'm assuming... "With a market cap (get this) of 7,2 trillion dollars, and funding of 19,8 billion."

**Dan Kohn:** Yeah, it's really quite a number.

**Adam Stacoviak:** It's good to summarize it, but that's gigantic. You were mentioning just China had a trillion... 7,2 trillion market cap.

**Dan Kohn:** Yeah, and what's fun about it -- so as you look at different views, that's updated, and then what's neat is that we go to Crunchbase and to Yahoo! Finance every night and fetch the updated data...

**Adam Stacoviak:** Wow.

**Dan Kohn:** So we're essentially doing a lot of scraping, and then this automatically updates every day.

**Break:** \[00:29:56.28\]

**Adam Stacoviak:** So what I find kind of interesting looking at this Interactive Landscape is that the corporate economies out there, which is in a lot of ways what this represents - sure, it's startups, but it's economies of scale for different businesses, places of employment, new technologies, but the sheer dependence upon open source and the health of those communities, right? You see this gigantic market cap which we've just sort of like glossed over to some degree, and then the investments that went into it to make it happen, but... While it's very informative to what the landscape represents in terms of the companies and the projects and the influences, and the stars, and the start dates and all that stuff, what it really represents in some cases or maybe behind the scenes is the significance of the dependence of open source, and the reliance on the health of those communities, and... CNCF is operating very healthily, but that's what it represents to me. What do you guys think about that?

**Dan Kohn:** I totally agree. I think you will recall that I helped co-found the Core Infrastructure Initiative...

**Adam Stacoviak:** \[00:31:59.27\] That's right.

**Dan Kohn:** ...four years ago, and you previously had David Wheeler on the show, talking about the Badge app project, and I co-created that with him; that's the way of open source projects talking about their health, and things like the buzz factor, and licensing, and other kinds of stuff. And by the way, for any project to graduate CNCF, they're required to get that passing Best Practices badge. The first two projects this year graduated - Kubernetes and Prometheus.

But I think it is fair to say that I've seen now the entire range of open source projects, from extremely unhealthy ones, like OpenSSL, prior to Heartbleed, when you just had a couple very underpaid developers, and huge (almost universal) reliance on it across the industry, to kind of the most healthiest projects, which Kubernetes basically falls into, where you have dozens and dozens of the biggest companies in the world that are eager to fund it and move it forward.

**Jerod Santo:** Yeah, the discrepancy between those things... And just thinking about -- you know, OpenSSL was a blind spot, and one that hopefully we all learn from, and a lot of these initiatives came out of Heartbleed; it was kind of an eye-opening moment. And just thinking, you know, 20 billion dollars funding these 578 cards here... Are these repos? I don't know exactly what a card represents necessarily. Does each one have a repository or a grouping of repositories?

**Dan Kohn:** It's a grouping. So it's either an open source project, or a closed source product.

**Jerod Santo:** Gotcha. So 500+ of those adding up to a funding of around 20 billion dollars is a lot of money, and there are so many other projects - maybe because they're not infrastructure, but that are struggling to get 100k scratched together to support what they're doing, or heck, $5,000 for some of their needs... So I just see this huge discrepancy between kind of the rich and the poor, even in open source, which makes me a little bit sad, but it's just kind of the state of the world.

**Dan Kohn:** Yeah, I would love to say that whatever that 1%, 99% concept doesn't hold, but I think it really does, in open source... And of course, if you look at 80 million open source projects on GitHub, it's only the 0.01% that would ever really be interested in or qualify for coming into CNCF, or being a Linux Foundation project like Node or such. So I do think there's a lot of interesting efforts out there on crowdfunding and otherwise, to try and support this... But certainly, the Cloud Native community where it's an infrastructure -- fundamentally, it's an infrastructure play, and lots of real companies out there are very comfortable paying for infrastructure. The economics seem more solid.

**Adam Stacoviak:** It's just a lot easier to get them on the sale; it doesn't take much, they're used to it, as you said... Whereas others, their reliance on open source is, in a lot of cases, informal, and is done through insider working groups; even CEOs or people in charge are not even that aware... You know, I'm not saying that everyone is like this, but it seems to be some of the cases in non-infrastructure plays, essentially, where you may not really be aware of how much you're depending on open source, and yet your business thrives because of it.

**Dan Kohn:** Yeah, it's my view that's it's essentially -- there was a nice description of transistors 30 years ago that you have to waste them, or your cost structure will kill you, if you waste millions of them to make your TV screen look slightly nicer. It is my view today that if you're -- so every company is becoming a software company, software is definitely eating the world, but if you're not building on top of open source, it's essentially gonna be impossible for you to stay competitive and to keep up.

\[00:36:09.13\] So I'm certainly eager to see more solutions that help companies understand all of the open source dependencies, all the library dependencies that they have, both closed source and open source. I think that's absolutely essential from a security standpoint. And then look at helping to have some funding solutions to go with that. The Linux Foundation is definitely actively investigating that space.

**Jerod Santo:** It seems like an easier sale as well, in terms of like if I'm upper management at a profitable company and I have a budget for infrastructure costs, and I'm used to paying, historically, licenses, or paying for software, that is now being provided as open source - that just opened up a huge aspect of my budget, and it's because of open source that it opened it up... So maybe I don't put the entire budget into open source, but maybe I divvy it out and say "Okay, because I would be paying for licenses for this stuff, and this is better software than probably the proprietary stuff, because of the wisdom of the crowds, or just the joint efforts across all these different smart people... Well, it's not much of a stretch to then pour back into that, and really support it."

**Dan Kohn:** Yeah, I totally agree.

**Jerod Santo:** So you've had massive growth, both on the members side, which - help me with the verbiage... Member are the companies that are putting their money in...?

**Dan Kohn:** Exactly.

**Jerod Santo:** And then you have the project side... Is that what you call it? The Kuberneteses, and... The projects.

**Dan Kohn:** Right. But also the Envoys, and Jaeger, and Helm, and NATS... Those are all open source projects licensed under Apache 2.0, that anyone can engage with

**Jerod Santo:** So you've moved from 8 to 26 projects, and from 20 to 59 members, roughly, in those numbers, repeating them back to you...

**Dan Kohn:** That was in user members.

**Jerod Santo:** Oh, okay, so there's another party--

**Dan Kohn:** So of our almost 300 members, 59 of them are end-user companies, folks like Bloomerg, and eBay, and JP Morgan and others that are using these technologies internally, but are not vendors.

**Jerod Santo:** Okay. Alright, that makes sense. So 300 members - is that the number then?

**Dan Kohn:** 292 as of today.

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** I rounded it in my...

**Dan Kohn:** We're almost there, yeah.

**Jerod Santo:** I was writing down your stats and I must have rounded that one up. Well, the point is that we've talked about the massive growth, but I wanna talk about specifically scaling to the projects and what's provided... So far we've talked about funding; CNCF offers -- these foundations offer kind of a host of services to the projects. You've moved from 8 to 26, so is the foundation itself also scaling with regards to operations, staff, the needs...? Are these projects putting more stress and strain on the foundation in order to support them?

**Dan Kohn:** Oh, definitely. We've needed to hire more people, and then we've just needed to standardize a lot of processes. CNCF started with just Kubernetes, and then it took six months or something for us to get Prometheus. Then I think Fluentd was number three after like eight months. So during those phases, if you needed something, you would just send an e-mail to me or our Chief Operating Officer, Chris Aniszczyk, and say "Hey, can you help us with this event?" "Oh, I need to set up an account for so and so." "Oh, I'm having this issue."

That worked fine at first, but I think almost like any organization or software company, you just have to put processes in place going forward. So we have something we call the Service Desk, and it's just a ticket tracking system... But any of the maintainers of any of those 26 projects can in principle ask for anything -- I mean, conveniently, we've had the budget so far that we haven't needed to turn them down for a lot or for much at all.

\[00:39:58.28\] But the specific requests tend to be -- I mean, a lot of them are just like super-minor things, like "Oh, can we have an official Kubernetes slide deck that people can do community presentations without having to use their company's slide decks?" Or for Prometheus, it was "Hey, we wanna run a community event for about 250 people. Can you help us organize that, handle all the money for us for the sponsors that wanna come in, help us sell it, and such?", and so we're very happy to do it.

And then, you know, presenting to our end-user community, engagement there... All of our projects are very eager to be involved in KubeCon + CloudNativeCon, so although we do have this competitive track system, we also have slots, internal deep-dive slots for each of the projects... So they definitely appreciate that opportunity to get in front of the audiences.

We do a lot of work with them on social media, on press relations and analyst relations, on giving them some kind of tracking on how things are going...

I mean, one way of thinking about it is that if you're a big company, like a Red Hat or a Google and you have an open source project that you're trying to promote, for commercial reasons, your company can provide you with a set of services. But what we're suggesting is that for a lot of core cloud native projects, it's much better for it to be hosted by a neutral foundation... But you're still gonna want those services, so we try and provide a lot of those same things.

I mentioned the certification process, and we also offer training courses with it. And then thankfully, it hasn't been that involved yet, but also offer a variety of legal services around trademarks, contributor license agreement if they want that... We generally recommend that projects instead go with a DCO (developer certificate of origin), which as you may know, originated with Linux. So we just work with the projects here...

But the sort of bigger picture is that what a foundation needs to provide has certainly changed significantly in the last 20 years. When Apache started up, it was a huge deal to have a source code repository, to have a web page, to have some basic kind of continuous integration infrastructure... And today, basically any open source project can get that for free from GitHub, from Travis, CircleCI and similar kinds of services... And we actually encourage them to do that. We don't try and move them over to our infrastructure, but we do try and provide a set of services that remain useful.

**Adam Stacoviak:** I saw a headline a few days ago - and I think this question is more so an outsider looking in - about Google kind of handing over some of... Since we're talking about the infrastructure involved in serving -- I think it's Kubernetes at large, not so much CNCF, and I know you kind of get questions of like this that might be not exactly CNCF, they're more Kubernetes... And I saw a headline where they stepped away from the infrastructure and donated a bunch of Google Cloud credits - I think it was nine million dollars in credits, which is huge... But I think more so the question I have is around how the responsibility of maintaining is spread across other big players. Is that kind of what that play was about? Is that happening? Is the responsibility of maintaining Kubernetes on that infrastructure side held well across the board, or is it sort of lopsided?

**Dan Kohn:** Let me dive into that... And you saw both the announcement and also kind of an annoying TechCrunch clickbait headline...

**Adam Stacoviak:** They got me, they got me.

**Dan Kohn:** Yes, "Google stepping away from Kubernetes", which was not at all correct.

**Adam Stacoviak:** Right. We almost logged that, I didn't do it.

**Dan Kohn:** \[00:44:05.22\] Well, yeah. And for what it's worth, even the content of the article didn't have that as well, but obviously, the headline writer gets compensated by clicks, and that's what -- you know, maybe their A/B testing got more clicks.

**Jerod Santo:** It seems like TechCrunch is moving beyond their core competencies in covering these technical things. I'm not gonna go there, but... I see a few articles on there, I'm like "Are they writing about this? This seems like nerdier than they're supposed to be writing about..."

**Dan Kohn:** Yeah. The counter-argument is that the headline writer was completely successful, because you saw that headline and not the other 20 that got written up about it. But the first piece of background is that Kubernetes was originally a Google project, it was founded in Google as a piece of infrastructure to share a lot of the expertise that they'd built up over the previous 15 years with their internal kernel orchestration system called Borg... So I draw this story of saying, well, you know, they came up with Kubernetes, and it was literally just four years ago, the first commit to the repo; so this is not an old piece of software, although the engineering and the ideas behind it were all built on that previous system.

And at that moment, they had kind of four directions they could have gone - they could have kept it as an in-house proprietary offering, which would have been analogous to Amazon's Elastic Container Service, and they realized that that would definitely have limited its adoption. They could have open-sourced it and kept it under Google control, which is essentially what they've done with Go... And Go is a fabulously successful language; many CNCF projects are written in it, many other projects... People have a lot of respect and confidence in Rob Pike's architectural choices.

The next level that would have been more open is they could have come to the Linux Foundation and said "Hey, we think this is really an important project. We'd like there to be a Kubernetes Foundation." At the end of the day, the Linux Foundation probably would have said "Sure, fine. We'll do that for you." But they actually chose what I consider the most open path, which is they said "We would like there to be a foundation, we'd like Kubernetes to be the anchor tenant, but we think that it's only a core part of the solution, and we'd like to foster a whole ecosystem of projects around it." That was the Cloud Native Computing Foundation.

I think it's fair to say -- I've spoken Craig McLuckie and Sarah Novotny, who were two of the key Google people through that whole process, that CNCF and Kubernetes' growth has far, far exceeded their original expectations or even their hopes from when they did that three years ago. But as part of that, it starting out as a Google project, the Kubernetes community then needed to put together a governance and a process and a leadership structure, and that took them about a year and a half, and they had a lot of arguments and disagreements.

What's interesting is that CNCF doesn't impose that on any of our projects. There is no CNCF way the same way that there's an Apache way. Instead, we ask that each of our projects come up with a governance process. We are willing to help them with it, and we do help them with it if they ask for it, and we ask that they document it. So they should have a governance.md file or the equivalent, and they follow that process that they've laid out.

That governance process was the last step for Kubernetes to graduate in March... And when that happened, there's several Google people on the steering committee, which is ultimately in charge of Kubernetes... But they're not a majority; there's no company that has a majority... So they gave up kind of governance control at that point. But then this was the kind of remaining issue, where to build Kubernetes, the actual software development infrastructure, is a huge undertaking... Unlike Linux, where most kernel developers can try something and recompile it right on their machine and see the effect of it on their own machine.

\[00:48:17.03\] To really work with Kubernetes often requires a multi-server cluster of machines... So every pull request that comes in triggers a continuous integration run across many different machines, and that, for historical reasons, had always run on Google Cloud infrastructure. So that meant that, because they were internal Google accounts, that no external person from another company could manage that or be involved in that.

So it was a somewhat involved process, and this is exactly the kind of role that CNCF was happy and eager to take... But Google went back and calculated how many runs that they're doing. And it was a little tricky, because they were conflating together their own service, Google Kubernetes Engine (GKE) with the Kubernetes project, because they originally hadn't been separated. So they have estimated that they think that nine million dollars in cloud credits will support the Kubernetes development for the next three years.

But the thing to understand is that they essentially have already been spending that money over the last three years as well, they just weren't really getting credit for it. So with this announcement is kind of externalizing a function that they had already been playing. But that said -- I mean, they are real credits; we have an account, and it has a lot of zeroes on the number of credit available. And then the key thing that it allows is that within the Kubernetes community there's a SIG testing group, and within that there'll probably be a new sub-SIG that focuses just on this infrastructure, that non-Google people can also participate in that administration.

But that said, Google in no way is stepping back the Google folks who have been responsible for the infrastructure until now; they continue to actively be involved in it and expect to continue to be indefinitely.

**Adam Stacoviak:** The way you frame it is so much different. \[laughter\] That's why when you read TechCrunch headlines sometimes -- I mean, I've read good articles on there, but then I've also read ones that are like "Uhm... I mean, that kind of seems like you're putting words in somebody's mouth." And in this case, based on your response, it totally was, because it seemed like a slap in the face; almost as if they've been putting so much in, and now it's time for others to step up, which I think was paraphrasing some of the content from the article... It was just like, "That can't be true."

**Dan Kohn:** I will say, if you re-read the article it actually got a lot of the tone right. It was really the headline that just puts you in a certain frame of mind. And you know, we do a lot of press outreach, and we've worked with that reported, and others... The reporters don't write their own headlines, but it's just a challenge of operating in this space.

And obviously, people are busy, so most folks really don't have the time to read the article if that headline did not give a good view on it. But I can confidently say that Google is as engaged as they ever have been. They're thrilled with the growth of the community, the level of adoption and engagement, and this is really answering a call from the community. It's essentially the last piece of the Kubernetes project that was Google-specific, that now Google does not have any more ownership or control than anyone else... Except that Google continues to contribute a huge amount of development and pull requests and fixes and such... And so that's the way that anyone has control in an open source project - by doing the work.

**Break:** \[00:52:08.27\]

**Adam Stacoviak:** Dan, the CNCF does - as you know, because you're a part of it, a leader of it - a bi-annual survey that sort of surveys the landscape... And some of the insights from that essentially is, you know, serverless is on the rise; we kind of see that, Jerod and I, as part of this show... On JS Party we're covering that, on this show we're covering that... Kubernetes is dominating, which this whole conversation was about the growth, that's clear... But then you also have cloud native production usage exploding, and some of the top challenges not being technically how to deploy containers. What are some of these things you wanna dive into that we can kind of cover from this survey, that are insights for you, that particularly stand out?

**Dan Kohn:** I would love to say that it was just this shocking result, and it really changed my thinking about where CNCF should be focused, and what we should be doing. But I'm kind of pleased to say that it was kind of more of the same. I mean, just the fact that we see so many actual end-users at our conferences... That it's not just vendors talking to each other. All the folks that we're talking to are talking about "Yeah, last year I was really looking at Kubernetes in the lab, or originally Docker, to try and speed up some of my development processes, but now we're beginning to move these into production and we're looking at how to move more and more of our apps over to it."

So I think yeah, the production using growing 200%, evaluation 372%, 40% of the enterprise companies we talk to are running Kubernetes in production - these are all pretty fantastic indicators of the engagement and adoption.

I guess one other piece that I would mention that I'm particularly passionate about is continuous integration and continuous deployment. That was the keynote that I gave in Copenhagen, arguing that continuous integration is actually probably the most important part of the cloud native architecture, that it's the thing that provides the most dramatic value to organizations that are not already doing it... That basic kind of sandy test of "Is my software working? Can I redeploy it? Can I quickly make changes or improvements or fixes and get it out there to customers, where they can benefit from it?"

**Jerod Santo:** What percentage, if you had to hazard a guess, of corporations who are involved in the CNCF, or that are on your purview, are in the category of not having that step, not having CI/CD going on, and can benefit from it? How many aren't doing it today?

**Dan Kohn:** I think zero are not doing any kind of CI/CD. I mean, I think the kind of organizations that are reaching out to CNCF and getting involved are the ones who realize that this is important, and that they need to get engaged and focus on it. We use this crossing the chasm metaphor; you may be familiar with the chart where we talk about our graduated projects as being suitable for the early majority, or which are known as the pragmatists. We really think that 2018 is the year that Kubernetes crossed the chasm.

Then we talk about our incubating projects, or aiding to be ones, as being suitable for early adopters, and our sandbox projects, the more immature being used by innovators or techies. But I'm very cognizant of the fact that at least half of businesses out there, those folks that are called the late majority and the laggards, have really not started down this path at all. And you know, they have a huge amount of benefit in front of them, and then they have a big competitive challenge, that their competitors are gonna be out there with just much faster development velocity.

I mean, it's great to say "Oh, here's the efficiencies of better packing your applications into a fixed number of servers", but we think that the huge change, the huge benefit is just faster update cycles on your software, about being able to respond in a more agile way.

**Adam Stacoviak:** Ship on green is a big deal to teams once they get there, to be able to -- our team is much smaller, but I only have our example, and we do have CI and CD in place here at Changelog, when we deploy, but very small in comparison to some of the other projects that may ship hundreds of times in a week... And what a change that is for velocity, and for instant gratification towards innovation or getting a win that day or that week, rather than like "When's the next deploy?" kind of thing.

**Dan Kohn:** Yeah... And this was my keynote talk in Copenhagen; I'll include a link to the slide deck. It was titled "How good is your code?" So in a world where you are dependent on all of these libraries, and a lot of those libraries do have security bugs, and issues that come up that you do need to fix, it's just absolutely essential that you'd be able to redeploy your software... So I draw the analogy that it's almost like a science, that you have a hypothesis that this change you just made to your code is great, but until you can actually pass your tests and redeploy it, it just isn't a real thing yet.

**Jerod Santo:** I was just seeing on Twitter, somebody that we know, Adam - I can't think of their name right now, who it was - talking about deploying on Fridays, and how it's a bad idea deploying on Fridays, and all that kind of stuff... And I was thinking like, "Aren't you deploying like all day, every day? Why is Friday special still?"

**Dan Kohn:** Etsy got a reputation a few years ago for first of all doing more than 50 deploys a day, but one of their ideas is that every new employee, including non-technical ones, would make a commit, a live to production on their first day of work.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Nice.

**Dan Kohn:** You know, of course you have to to have a test process and a Q&A process and other kinds of things, that you have the confidence that that can occur without anything breaking... But I think it really is a great model; not that every company can quite live up to that yet, but at least to try and move towards.

**Jerod Santo:** So as we look a little bit towards the future, Dan, one of the questions we asked Jason McGee of Istio was about this landscape, really a lot of the change that's happening, all of these projects coming in, this idea of like different layers of this cloud native stack, and where certain things start to formalize... He mentioned that basically we've come to consensus that containers are a good thing, and that Kubernetes is pretty much winning its layer; then you have service meshes, you have networking things, you have serverless...

There's lots of other stuff that's either patching together lower layers, or sitting on top, and one of the things I asked him and I'll ask you as well, as somebody who's interested in this stuff but does not have like a vested interested in like figuring out provisioning, or figuring out orchestration or service meshes, but would want to eventually -- like, I love the benefits of the cloud native lifestyle; I want to be a cloud native, right? When do you think this is all gonna shake out, or maybe coagulate around a certain happy path... Or maybe choose your own adventure a little bit, but less churn, less friction, less stuff changing all the time?

**Dan Kohn:** Oh, I definitely think so, and I do think there's huge cognitive overhead in this interactive landscape. I mean, I will tell you that the landscape, the 570 projects - it's been described at times as helpful, as overwhelming, and as the hellscape.

**Jerod Santo:** The hellscape. \[laughs\] That's... One way to paint it.

**Dan Kohn:** \[01:01:43.10\] Yeah. \[laughs\] That's by a leader in our community, I might add. But I'll leave him anonymous for now. I think the simplest solution for it is, especially if you're a startup, if you're a small organization, if you're coming in from a greenfield perspective, it's very likely that you're gonna use a vendor for these things, and that vendor might be a hosted cloud provider, it might be an enterprise software company that helps you run things on your own bare metal... And one of the great roles that those vendors take is that they pick the projects and the offerings that they think are ideal for their customers, and it's very likely, as you get started in this space, that whatever the vendor puts together for you - maybe your favorite cloud provider - is gonna be perfectly fine... That to get up to speed on it, to get your logging working, and monitoring, and these other kinds of things, that you can dive in and work with almost any of them.

And then, if you just find that your monitoring solution - maybe it's a proprietary monitoring solution that you're paying too much money for, or maybe it's the vendor's proprietary monitoring solution on their cloud, and you don't feel like it gives you enough flexibility, or doesn't let you hook into all of your services the way you'd like it to, then it's a relatively natural step to look at that CNCF trail map and say "Oh, I guess I could be looking at Prometheus." And maybe your vendor is already just offering a hosted version of Prometheus, and you're either using it or it's easy to switch to it. But I really want to avoid this implication that you have to be familiar with all 570 options.

There is this concept by actually a former professor of mine at Swarthmore named Barry Schwartz, "the tyranny of choice", that having more options does not necessarily make you happier, and it certainly makes it just overwhelming to try and make any kinds of decisions.

So the CNCF projects in general somewhat represent a happy path, where we can confidently say, hey, if you choose our graduated incubating projects, we know they all work, we know that there's real end-users adopting them, we know that there's vendors out there who are eager to support them, your issues are gonna get responded to; you know, maybe not that your pull requests will get accepted - we can't go that far - but that it's a pretty safe bet to engage and get invested in those communities.

And then that's the other way to look at it, which is, okay, if you wanna just go entirely open source -- one of my favorite examples here is the company Bloomberg here in New York, who they just don't like working with vendors. They wanna have all their expertise internally, they download 100% open source, and they make it work for themselves... So CNCF represents a great spotlight and indicator for them of a set of projects that they can have confidence in the communities behind them.

**Adam Stacoviak:** That's one thing I see that you do very well, especially with this interactive landscape, and just several other things we've gone through, like the dev stats - you're doing a great job of bubbling up the right information to make good choices... And you're not making the choices for the community, you're making aware of who's getting involved in cloud native and all that it is at all levels of the game... And to me it's like, you're just doing a great job of sharing the right information, so that folks like us can say "This is the direction for us to go" or "This is a project that makes sense for us", or areas where we can get involved, or just like you said, have confidence in our choices, rather than feeling like the CNCF is just saying "Here's the best. Go use these."

**Dan Kohn:** Yeah, forcing you to use it.

**Adam Stacoviak:** Yeah.

**Dan Kohn:** So thank you for that... I mean, I think it probably comes somewhat from my own perspective of having been the chef technology officer of a couple startups, and co-founder of a couple others, where it's hard to make these choices. I've made them in the past, and to some degree, I've made them incorrectly. So there's also some humility built in here, that I don't have the confidence that I can guarantee that every project involved with CNCF will be perfect for every end-user out there.

\[01:06:07.21\] One of the kind of nice aspects of our philosophy is that we specifically don't have the approach that there can only be one project per box. An example right now is Linkerd and Envoy are both very capable service meshes, but essentially, you're only gonna choose one or the other.

**Adam Stacoviak:** Right.

**Dan Kohn:** Or another one is Containerd and Rocket. And when we see that there's multiple offerings out there, we've been very willing - or the Technical Oversight Committee has been willing to adopt multiple ones.

**Adam Stacoviak:** Well, I think, to rewind a little bit, that's kind of how it began - the question was "Will Kubernetes win?" versus the other options, and eventually, I believe the reason why you can probably stand firm in that is that you know the community will eventually choose a winner, or select their own that makes sense for them... And maybe there's one or two or three winners, so to speak, but you don't need to choose, you know?

**Dan Kohn:** Sure. And another way of looking at it is, you know, Mesos kind of had been the winner before Kubernetes came along, and I think Kubernetes just largely supplanted it... But the reality is that there are still real very substantial companies out there with massive Mesos implementations. And interestingly, if you're like a legacy brownfield enterprise and you're thinking "Oh, well I need to containerize and I wanna go with Kubernetes", there's a huge advantage to you doing that; you're gonna see big efficiency gains in your servers, and development velocity and such... But if you've already invested all of this effort to get Mesos up and running, and it runs perfectly well on your data center today and you've trained your teams on it and everything, the marginal value of you switching is really low. You'll probably do that eventually, maybe you'll start with a small Kubernetes cluster for a few of your apps, and then maybe over time you'll move more and more...

Stripe had an interesting story where Mesos was working for them, but the cron functionality that they needed wasn't getting the attention and love it needed in Mesos, so they switched over to Kubernetes. Julia Evans has a great blog post about that, that I'll post in here. They have invested in it, and that's worked out well for them.

But what's nice with the CNCF projects is that even in that scenario, you still can and should evaluate our other offerings. So Prometheus is also the leading monitoring application not just for Kubernetes, but also for Mesos... Fluentd for logging works great with Mesos.

So we definitely are not trying to lock you into certain technology choices. The metaphor we use for that - for the landscape and for the trailmap - is that it's a kind of preferred path, or like a particularly well trodden, well lit path, but that all of us are trying to reach the same goal of getting to cloud native; that's the destination, but there's many different paths that you can take to get there.

**Adam Stacoviak:** What's upcoming for you or for CNCF, or any of the projects involved? What's maybe something that's either not well know, or something you can tease that's coming up in the near horizon? This is barely September, we're just a few days into it - what's upcoming that you can tease on our show as we close.

**Dan Kohn:** \[01:09:30.14\] Sure. So I think the biggest thing that I would say and that we didn't have a chance to chat about so far is the level of engagement and interest from China. That has been somewhat of a surprise to CNCF and to me. Huawei was a founding platinum member, but since then we've added two others - Alibaba and jd.com, the two biggest e-commerce retailers in China. And then we've added Baidu and Tencent and ZTE as gold members. Then dozens of silver and smaller companies.

So partly as a result from that huge level of engagement, we're launching our first ever KubeCon + CloudNativeCon event in Shanghai, November 13th to 15th. So if you're in China or really anywhere in Asia or Australia and you haven't yet been willing to come to Europe or the U.S., I'd love to see you in Shanghai. We're gonna have 100% of the talks - the keynotes and the sessions will have simultaneous interpretation into English and Chinese.

It's really just a neat process to see -- we also just had our first two projects that originated from China (where the majority of the development was by Chinese people) that were adopted into CNCF. That was Harbor, a container registry, contributed by VMware, and then a really impressive key-value store called TiKV, that was built by a company in Beijing called PingCAP. So on really all the different levels of engagement with China - training, our service providers, our certified Kubernetes, we're seeing that level of interest from China just skyrocket.

And then, as I mentioned before, we would love to have people attend our KubeCon + CloudNativeCon event in Seattle. That's the flagship event. It's probably gonna be 7,000 people. We have very good likelihood of selling out. So if it is something you're thinking about, if your organization is investing in these technologies or seriously considering it, we would love to see you there and definitely would recommend signing up. It's KubeCon.io.

**Adam Stacoviak:** Good. We'll be there as well. That's December 10th to 13th, in Seattle, at Washington State Convention Center, which - we've been there; it's great, it's easy to get to, it's certainly great to be in... So if you can, make it out.

Dan, thank you so much for your time. It's been a pleasure catching back up with you. Congrats on all the progress, to you and the rest of the team. I know it's a massive team behind you; you're not the only person doing this work, because if so, then you'd have some issues...

**Dan Kohn:** \[laughs\] Definitely the case.

**Adam Stacoviak:** But you definitely can see the right directions for everything, and we love playing a part with you in terms of catching up and being able to update the community on new things happening and where this is heading.

**Dan Kohn:** Awesome. Thanks for the chat.

**Adam Stacoviak:** Thank you, Dan.

**Jerod Santo:** Thanks, Dan.
