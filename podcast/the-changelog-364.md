**Jerod Santo:** Val, first of all, welcome to the show... Secondly, I'd like to say that we were recommended to speak to you - or specifically I think about somebody who maintains Mongoose; it's probably not just yourself - by Abishek Ali. Is it just you?

**Valeri Karpov:** It's primarily me.

**Jerod Santo:** Okay, so then you are the one that was recommended... Abishek Ali in our Slack channel recommended that we talk to a Mongoose person, and then I looked up your GitHub and I saw "Wow, a prolific open source contributor." Your contributor graph was almost completely green, and I thought "Yeah, this is a maintainer spotlight candidate right here", so... Welcome to the show.

**Valeri Karpov:** Yeah, I completely green, three-and-a-half years and coming...

**Jerod Santo:** Is that an actual goal you're setting out to do, or just a circumstance of your life, or what?

**Valeri Karpov:** It's something that I just kind of started in 2016, and just kind of kept on going. I figured that you are what you do every day, so I'm gonna start writing open source software every day, and that's just how it is.

**Jerod Santo:** Well, that's quite a streak. Are you ever afraid of accidentally breaking it, or do you care that much?

**Valeri Karpov:** It's something that I don't have a concrete goal for. I was thinking I was gonna break it this year. I was planning on hiking Kilimanjaro in June with a couple of friends of mine, but unfortunately those plans fell through because my girlfriend and I ended up finding a good opportunity to buy some property here... So I ended up being like "I can't be climbing Kilimanjaro on a mountain where I have no cell reception whatsoever, while also the mortgage guys are trying to blow up my phone for documents." So I kept on going, basically...

**Jerod Santo:** Well, choices in life. You know, climb mount Kilimanjaro, or keep your GitHub streak going... You've gotta make choices.

**Valeri Karpov:** I had hoped to be the first guy to fix a GitHub issue from the summit of Kilimanjaro; that would be a cool claim to fame, but...

**Jerod Santo:** That would be pretty epic, I'm not gonna lie. That would be cool.

**Valeri Karpov:** These friends also - I traveled with them a lot... There was one time we went fishing in the Panhandle in Alaska, and I was like that guy that brought his MacBook to a fishing lodge in Yakutat, Alaska, that had no cell reception. The lodge technically had Wi-Fi, but it only worked one day of the week that we were there... But, well, I still kept my streak going.

**Jerod Santo:** Okay, so this is interesting... So it's not that big of a goal, but if you've gotta bring your laptop on a vacation, you're gonna get that done. That's pretty cool.

So let's talk about what you're maintaining. Mongoose, a very popular library, it's been going on for a long time... MongoDB. What do you guys call it, an ODM?

**Valeri Karpov:** Yeah, ODM. ORM - object-relational mapper, and ODM stands for object-document mapper. Thing pretty much ORM, but for MongoDB. Although I think ORMs make a little bit more sense for MongoDB than they do for ORMs with SQL. There's a very key difference between Mongo's seven-year standard ORM, which is that your documents in Mongoose or what your object looks like in Mongoose is the same as what it looks like in MongoDB. So Mongoose doesn't scatter your data across different collections for you.

**Jerod Santo:** \[00:04:13.29\] So tell me how you got involved in Mongoose. It seemed like you were with MongoDB, the company, for a while... Give us some of the back-story and how you got involved in this project, and still maintain it to this day.

**Valeri Karpov:** Yeah, so rewind all the way back to 2012, when I first started working with Node. I got into working with Node, started using Express, started using MongoDB... I really felt like it had clicked with me. But I started using the MongoDB driver; back then, the MongoDB driver required way too many callbacks for my tastes. At the time, you needed to pass in a callback to get a collection reference, and then use the collection reference to execute a find, in order to actually really do anything useful, or query a document from the database.

I remember I just stumbled across Mongoose one day... At that point it was still kind of a small project, sort of pseudo-sponsored by MongoDB at the time, but because the maintainer at the time, Aaron Heckmann, was an employee. I didn't work for MongoDB at the time; I actually had never met anyone who worked for MongoDB. I just started working with it.

Let's see... I still remember I put in a pull request for a project that I was working on at the time, that basically cut our codebase in half just by using Mongoose... So that kind of was where Mongoose really started to click for me.

So that project - a startup with some friends of mine, after I left my previous job - turned out to not work as well as we would have liked, so when I was on my out there, I had met some people at MongoDB at a hackathon... So I reached out to them, I ended up writing a blog post for them that was basically the blog post that coined the term MEAN stack. That ended up putting me on MongoDB's radar and kind of making it so that we had a good working relationship. So when the startup tanked, I joined MongoDB and I started working on some internal tools written in Go... So nothing to do with Node, which was not exactly what I wanted to be doing, but it was alright for the time.

Then I spotted an opportunity when Aaron Heckman, the previous maintainer of Mongoose, was leaving MongoDB. He left for a while, nothing happened, and he was still maintaining Mongoose, but then fast-forward to April 2014, after I'd been at MongoDB for maybe about 8 months, Aaron had left the company maybe about four months prior, and he sends out a message on Twitter saying "Hey, I'm looking for someone to maintain Mongoose." I was just mindlessly scrolling through Twitter on the AirTrain to JFK airport in New York... And yeah, I just saw that, I couldn't respond fast enough; I can probably still send you that tweet... So that's how I ended up taking over Mongoose.

It ended up being probably the most low-touch hand-over I have ever seen. Aaron just sent me some credentials to log into the Twitter account, get me GitHub access, Npm publish access... And I didn't really talk to him for another couple months until I ran into him at a Philz Coffee in Redwood City, California, after I had just moved there.

**Jerod Santo:** Wow. So kind of an opportunist; you were on the way to JFK, and saw the opportunity there on Twitter, and hopped all over it. Did you understand maybe the gravity of that move? I mean, you've been working on the project ever since. I don't know how much time and effort you have to put into it on a daily or recurring basis, but it's been your baby ever since; it's like adoption.

**Valeri Karpov:** Yeah, exactly. To be honest, when I first took it over, I didn't really understand what I was getting myself into... But then, over the weekend, the emails started pouring in from GitHub notifications...

**Jerod Santo:** Just like that.

**Valeri Karpov:** \[00:07:58.11\] ...and then I was wondering "Wow, what did I get myself into here?" \[laughter\] I just kept wading through it, kept chugging along... Probably about 3-4 months after I started working at Mongoose, I ended up switching to working on the Node.js team on MongoDB... So I was actually working on Mongoose, and the MongoDB Node driver as my full-time job. That was something that made it a lot easier to work on Mongoose at the beginning.

**Jerod Santo:** Absolutely. I'm looking at the license for Mongoose, it's still copyright 2010 LearnBoost. Isn't that Guillermo Rauch's company back in the day? I used Mongoose briefly, back when I was dinking around with MongoDB and doing some side projects with it, and just trying to understand document-oriented databases and whatnot. When the NoSQL craze really was hitting -- I don't know year that was... There was like a fever pitch for the hype cycle on NoSQL.

**Valeri Karpov:** Yeah, somewhere between 2011 and 2015. It's hard to -- there were a couple of peaks, but I think 2011-2012 was the big peak. I think around 2014-2015 things started dying down a bit. People started realizing that "You know what, NoSQL databases are amazing, but they also aren't the final solution to all problems that you have ever had."

**Jerod Santo:** Right. It goes back to Frederick Brooks, "There is no silver bullet", and this is yet another case of trade-offs, that have their pros and cons. Choose your tools wisely, but this is not a silver bullet that's gonna solve all of our data storage problems. That being said, they map to some situations better than a relational database.

I'm curious -- you coined the MEAN stack phrase... What was that - Mongo, Express... What was the A? Angular?

**Valeri Karpov:** Angular, yeah. Angular 1 back then.

**Jerod Santo:** Angular and Node. What's your current stack look like, if you were gonna start a brand new project web app? What would it be?

**Valeri Karpov:** I did actually recently start a brand new project at my day job, and it's MEAN, but with Vue instead of Angular... Nowadays they call that the VENoM stack, I think, which is absolutely the coolest stack name I've ever heard of. MEAN stack was good, but VENoM is pretty sweet, too.

**Jerod Santo:** VENoM is pretty sweet. I always wonder if there's just somebody in a tower somewhere, like an evil genius who just comes up with these stack names. Well, I mean, I'm talking to one of them now, because you coined MEAN stack...

**Valeri Karpov:** Yeah... I did not come up with VENoM stack. I think I actually saw that first on a Pluralsight course description. So yeah, it was some other evil genius. \[laughter\]

**Jerod Santo:** Well, you have a good evil genius laugh even, so you could be legit. So LearnBoost, the original copyright; you're the maintainer. The repo is actually under Automattic's organization, so there must be more to the story.

**Valeri Karpov:** Yeah, it's a long and interesting story. Basically, the IP of Mongoose has kind of long since diverged from the day-to-day work of Mongoose, so the reason it's under Automattic is it was originally written by LearnBoost; that was Guillermo Rauch, TJ the Express guy, Aaron Heckman was also there... It's hard to believe they were all in one company... But they were doing some sort of products for K-12 education, but accidentally ended up building the entire Node ecosystem...

**Jerod Santo:** \[laughs\]

**Valeri Karpov:** ...as kind of a side project.

**Jerod Santo:** I hate it when that happens.

**Valeri Karpov:** Express is not under Automattic, because it ended up getting bought by StrongLoop. I'm not sure how the IP worked there; the lawyers must have had a field day. So LearnBoost ended up pivoting to becoming like a cloud upload company, or online file storage thing called Cloudup, and then they got acquired by Automattic.

**Jerod Santo:** Okay. There you go.

**Valeri Karpov:** \[00:11:46.01\] So by virtue of that, Automattic took over the IP rights to Mongoose. So they still own the Mongoosejs.com domain name, they still have the repo underneath their org... However, I have not had much interaction with Automattic. There was one brief time when they accidentally took down the docs, because they were migrating it to HTTPS, so I had to find -- the person who pushed the commit was one of their sysadmins at Automattic, so I ended up finding him on Twitter and just angrily tweeting at him, like "Hey can you please reach out to me, I don't know what's going on with my docs site."

**Jerod Santo:** Wow... That's funny. Interesting that there's all these goings-on around the property and the domain name and all this... But on your day-to-day, in your life, Val, it hasn't really affected you too much, besides that one terrible day, and then Twitter to the rescue, at least, in terms of reaching out and getting to the right person.

**Valeri Karpov:** Yeah, exactly. Automattic has been very hands-off.

**Jerod Santo:** Do you ever fear that maybe someday they'll become hands-on and boot you? Could they boot you as a maintainer, do you think?

**Valeri Karpov:** That's a tough question. They probably could, and I wouldn't really have very much recourse...

**Jerod Santo:** Yeah, fork it and rename it...

**Valeri Karpov:** ...which is why I'm thankful that we have companies like Tidelift... One of the co-founders of Tidelift who I've met recently when I went up to meet the team in Boston - Luis Villa is one of the co-founders, if memory serves... He's apparently an expert on open source law, and he -- didn't he write the Mozilla license, or something like that?

**Jerod Santo:** Possibly. I met Luis at OSCON, but I don't know exactly his background... But I wouldn't disagree with you.

**Valeri Karpov:** Yeah, so Luis is a great guy to have on my side if that ever happens. But I don't really know, and I have seen no indication that Automattic wants to be more hands-on...

**Jerod Santo:** Yeah.

**Valeri Karpov:** Because as far as I know, they don't really work much (if at all) with MongoDB, and I don't think they use Mongoose, so I think they're happy to keep the project as long as it contributes positively to their GitHub stars and doesn't cause them any bad press.

**Jerod Santo:** Right. There you go.

**Break:** \[00:13:58.09\]

**Jerod Santo:** So let's talk about your life as a maintainer with Mongoose. I am surprised that you are pretty much the sole maintainer. "Used by", which is one of my favorite new GitHub features, to see all the dependencies of a package on GitHub - Mongoose is used by 736,140 other repos.

**Valeri Karpov:** Yeah, it's unbelievable. It's hard to imagine that many people.

**Jerod Santo:** I can't imagine that you're maintaining that many users by yourself. Do you have a team of -- I know you don't have a team of regular core contributors, but do you have helpers along the way? Are there people in your issues, triaging or anything, or is it just Val all day, every day?

**Valeri Karpov:** There have been people that have come and gone to help out with issues and new features. Let's see here... When I was at MongoDB I had a new grad rotation working on Mongoose at some point. The interns weren't working on Mongoose, but I did have some interns that were working on the Rust driver. That was fun.

\[00:16:13.01\] There was one time I briefly had someone as a contractor, a former colleague, working on helping triage issues. That worked okay for about a year, a year and a half, but he ended up moving on. Yeah, sometimes people come and go to help out, but for the most part it's been me.

**Jerod Santo:** I see you currently have 286 issues, but only one open pull request... So it seems like you're maintaining the cleanliness of the repository, at least on the PR side, or maybe you don't get very many PRs. You have 1,422 closed, so you definitely get some PRs... Are most of those issues questions, or off-topics, or are they outstanding things that you're gonna work on and you're just not getting many pull requests to work on them? Tell me the situation of the community that surrounds you.

**Valeri Karpov:** Generally speaking, most of the issues that are open are either features that I've kind of thrown into the parking lot for future consideration, or issues that data back to 2014-2015, before I took over, that I haven't quite had a chance to look at.

**Jerod Santo:** Gotcha.

**Valeri Karpov:** Every once in a while I kind of get through my issue backlog. It gets to the point where I'm back-pressuring down to issues from 2013-2014, and sometimes I actually find a legitimate bug in there, so I try not to close them.

**Jerod Santo:** Gotcha.

**Valeri Karpov:** There have been at least three or four bugs that I fixed over the last several months that have been like someone reported it in 2013-2014, before I took over as maintainer, and nobody really had quite the time to look at them, but it turns out there was something legitimate there.

**Jerod Santo:** Gotcha. So here we are, we're about five years into your maintainership, and you had some major releases as well; Mongoose 5 released back in January 2018... So you've been putting a lot of work into this; you have thousands or probably hundreds of thousands of users, and lots of issues, some pool requests, you're maintaining that... I'm just curious - what value do you get out of this part of your life? What's the motivation? You're putting a lot of work in; what are you getting out? Is it just intrinsic, or is there a financial incentive? What's in it for you?

**Valeri Karpov:** The financial incentive isn't bad, but I think what really got me started on Mongoose and what really keeps me going is that it's a project that I have ownership for and I feel a lot of responsibility for, and it's something that like I can run this project my way, and I don't really have to answer to a product manager or a CEO or anyone like that; I'm the product manager, I'm the CEO, and I get to work on it the way I want to, on my schedule, on my terms. That's what's most important to me. That's kind of like why I got into open source to begin with.

Working at a company can kind of wear you down when you don't get to code your way, when you don't get to prioritize the projects you want to prioritize.

**Jerod Santo:** That absolutely makes a ton of sense... Especially when you can have an outsized impact on, like I said, hundreds of thousands of people, your way. It's your ideas, it's your code, it's your project, and you are helping so many other people by putting the work in that you are. No doubt there's some serious value there.

Have you ever thought about hanging it up, or passing the torch? Tweeting out, just like Aaron did back in the day? "Hey, who wants Mongoose? I'm out."

**Valeri Karpov:** \[laughs\] I've thought about it. I'd probably have to vet the person that I would hand it off to more...

**Jerod Santo:** More than he did.

**Valeri Karpov:** ...but it's not something that I'm planning on doing anytime in the near future. I think the nightmare scenario is like an event-stream, or something like that. No offense to Dominic Tarr, but that one was a bit of a mess.

**Jerod Santo:** \[00:19:56.01\] Yeah, for sure. We had a whole episode on it. Dominic didn't feel bad, so I don't think you offend him, but... Definitely a thing that can happen. So you haven't really thought too much about hanging it up... What's your greatest challenge with this stuff? Is it time, is it knowing what to do next, dealing with humans?

**Valeri Karpov:** \[laughs\] A little bit of both. The hardest challenge -- there's no one challenge that's particularly overwhelming, but you know, some day-to-day challenges... Let's see. Software always changes, and even though Mongoose itself has gone through -- I don't think I have really changed the fundamental ideas of Mongoose, or the fundamental concepts; they more or less stayed the same. But the Javascript community around it has just evolved so much that now I have to be thinking about TypeScript, I have to be debugging bugs that only happen in Jest, because Jest is a weird Javascript runtime, not a testing framework.

There's always issues that pop up with people now that Docker is more of a thing. There's always weird things that pop up like "Hey, I'm writing MongoDB in Docker here, and how do I get my DNS to work properly?" There's always new little things that come up like that, always strange little surprises. Serverless has been another interesting challenge for Mongoose as well...

**Jerod Santo:** How so?

**Valeri Karpov:** One of the fundamental ideas of MongoDB is you kind of open up one connection and maintain it throughout the entire lifecycle of your application... But with serverless, that's not quite how things work. We needed to do -- there's always a little bit of quirks that come in when you reuse a connection between different serverless calls. So there's always little surprises of people saying "Hey, I'm running on Lambda and my functions hang, for some reason, after a certain amount of time." So figuring out what's going on there has proven to be tricky.

**Jerod Santo:** You told me about the VENoM stacks... So you're still into Mongo. What if you fall in love with a new data store? Could that be a problem with Mongoose? Just like "Well, I'm sick of Mongo" or "I don't like it anymore" or "I prefer this new and shiny thing", like CockroachDB, or something.

**Valeri Karpov:** Yeah, it's possible.

**Jerod Santo:** Not yet though.

**Valeri Karpov:** It hasn't happened yet. And a lot of the new databases that I've looked into - I like the fundamental ideas, but they just don't work as well as Mongo for what I'm trying to do. One thing that I really liked about Mongo when I first started is it's the first database that I worked with where running it was just a single command, just a standalone binary; you download a tarball, you run MongoDB, it works. I don't need to install Python 2.7.

I have a former colleague who's working on YugaByte DB, or something like that...

**Jerod Santo:** I've never heard of that one.

**Valeri Karpov:** It's kind of a distributed, Postgres-compliant SQL thing...

**Jerod Santo:** Gotcha.

**Valeri Karpov:** I'm not really sure what that one is. But with that one, I'm like "Hey, let me try this out." "Must have Python 2.7 installed. Nope." Done. I'm out. \[laughter\] Because I'm like "Okay, I went through all this effort to set up Python 3 for a work project I am working on, and now all of a sudden it's like "Oh, I have to set up a virtual env so I need to run Python 2.7, so I can just try this database." It's too much effort to just try one thing.

I've been looking forward to playing with Atomic, and I did back when it was something that you could run locally... And they have a lot of really cool ideas with Atomic, but the basic DX isn't quite there, because you have to point it at AWS. There's a whole long setup where you need to go through and be like "Okay, go into AWS, set up this IAM user, set up this particular thing, install this thing from the Amazon Marketplace, and now you can finally try Atomic." I'm like, "That's too much effort."

**Jerod Santo:** Too much stuff. Give me one command, or I'm out.

**Valeri Karpov:** \[00:23:57.10\] Yeah, exactly. And you know, it's 2019, guys; Go has been a thing for so long that there's really not much reason for you to not offer at least some minimal statically-linked binary that you can just run to test something out.

**Jerod Santo:** Right. It's interesting on the -- ease of use is a thing, but also just system administration when you talk about a data store. I enjoyed Mongo when I was dinking around with it, and I remember distinctly getting to a point where I'm like "Okay, I need to take this now into production", and I just am more comfortable -- I've been a Postgres user for pretty much my entire career... And I just was like "I'm so much more comfortable deploying Postgres into production. Not that Mongo -- I don't know if Mongo is harder, or easier, or otherwise, but when I got to that point, I'm like "Oh, this is another thing I'm gonna have to learn - administration of a new data store." And that for me -- similar to you, where it's like "Give me the one command, or I'm out. Or the statically-linked thing." I don't wanna install stuff myself, or I'm out.

For me it was just like "I just don't wanna learn to maintain something else, when I already know how to maintain this thing that works pretty well, and has added a lot of niceties around JSONB, and being able to store things in a little bit not normal form. So yeah, it's just funny how these different things catch up different one of us, you know?

**Valeri Karpov:** Yeah, exactly. And that's one of the reasons I continue to run Mongo in production, as well.

**Jerod Santo:** You know how, yeah.

**Valeri Karpov:** Yeah. I am used to it, I understand the tooling around it... Mongo has made it a lot easier with their Atlas solution, which is MongoDB as a service in the cloud; you just click in a web UI and all of a sudden you have a production MongoDB instance, with monitoring and backup baked in.

**Jerod Santo:** Nice.

**Valeri Karpov:** Yeah. MongoDB backups are so good. I'm so happy about that. It has really saved my company quite a couple of times. \[laughter\] Point in time snapshot recovery is amazing. Somebody accidentally fat-fingers and drops the database at 11:56. You can restore the database to what it was at 11:55.50.

**Jerod Santo:** Oh, really? Just right before then.

**Valeri Karpov:** Yeah, exactly. Much a lot like you know what ever clock skew minor time inconsistencies, but you can pretty accurately get what was the database like at this particular minute of the day, which is pretty amazing.

**Jerod Santo:** I talk to a lot of maintainers, and you're going strong here, five years in, and it doesn't seem like you have signs of burnout; you've got a GitHub streak going. You're ready to maintain this seemingly into the future, unless you fall out of love with MongoDB, which probably won't happen in this case... Or if Automattic kicks you out of the project, which also probably won't happen. At this case, do you have any advice, tips, tricks, things that make your life as a maintainer easier, that you've learned over the years, that you could share with us, maybe people who are struggling a little bit more? And maybe you are struggling, you just put on a good face about it, but what do you have for me in terms of ways that you go about doing what you do?

**Valeri Karpov:** I think the number one thing that helps keep me sane over this long time period was I learned very quickly that if I just respond to every GitHub issue as it comes in, I'm going to lose my mind. So no email notifications, none of that. I just respond to GitHub notifications in batch.

I just have a separate filter that filters all Mongoose traffic into a label in Gmail, and I just go through it maybe once or twice a week if I have time; sometimes with a glass of wine if I'm feeling a little too strung up. So yeah, that's one thing that's really helped keep me sane.

Mongoose does have a Slack channel, but I don't really check it as often as I would like, just because I realistically just don't have time to answer everyone's question. And there's a lot of people on the Slack channel that come and go and respond to questions as they can, but... Yeah, realistically, just being okay with the fact that you're not going to answer every single question that comes in on Stack Overflow or Slack. And if something comes in on GitHub, do what you can, take a look at it.

**Jerod Santo:** Yeah.

**Valeri Karpov:** \[00:28:04.17\] Also, setting up boundaries of expectations for issues on GitHub. The GitHub issue templates is something that I didn't adopt as quickly as I should have, but it's something that somebody put in a pull request for, and to be honest, it's been quite great, because it's kind of helped people see -- you know, people always say "There's this particular bug", and if I can't really reproduce it locally, if it's just a long, big paragraph of text that's saying "I'm just doing this one basic thing and everything is breaking", and I say "Well, we probably have a dozen tests that cover that case, so it's clearly not that. There's something else in here. There's some variable that you're not accounting for."

**Jerod Santo:** It seems like with a library that has both a language runtime, and it has a connection to another thing... You have a lot of moving parts in terms of what Mongoose has to do to do its thing. It seems like there's a lot of version mismatches that could just be problematic, like what version of Node are you running? What version of Mongo are you connecting to? What version of Mongoose are you using? These are things that probably if you have any of those older or outdated, you might run into bugs that have otherwise either been fixed already, or just don't happen with newer versions. A newer version of Node comes out... Do you have a lot of that stuff going on?

**Valeri Karpov:** That I don't really get affected by as much. For the most part, Mongo has been...

**Jerod Santo:** Pretty stable?

**Valeri Karpov:** Yeah, it's been pretty stable, and also Mongoose hasn't really been broken by a new Node version in a long time. I think the biggest one recently was the changes to the custom inspect functions; that caused a little bit of headache, but not too much.

Mongoose is not the only thing that's built on top of the MongoDB driver on Npm. There's a lot of other things that are built on top of the MongoDB driver on Npm, like Connect Mongo, or Connect MongoDB Session, the Expression Session stores. There's Agenda, the task scheduler... All these other projects.

And now what happens if you have an old version of Connect Mongo that's using an old version of the Node MongoDB driver, and then you take a MongoDB ObjectId object from this old version of the Node driver and pass that into Mongoose, which is using a totally incompatible version of the Node driver... That version resolution thing ends up being a bit of a mess.

**Jerod Santo:** So is that something that you've found out on your own, or did your users dutifully tell you about it when the bugs started hitting?

**Valeri Karpov:** No, these are just issues that sometimes pop up. They come up every once in a while, where someone is getting a warning message, and it's like "Wait a minute, where is this warning coming from?" "Because you're using this version of Mongoose. So why don't you just give me your 'npm list | grep mongo' and then we can see where that might be coming from?"

**Jerod Santo:** One thing you mentioned earlier and I was gonna follow up on it and I forgot to, but I'm remembering now - you said "I've been considering TypeScript stuff. As things change around me...", as the ecosystem moves more so than Mongoose moves, you have to consider new things. I was looking at the stats, and 99.3% Javascript, only 0.7% other, which is probably just the markdown files, or...

**Valeri Karpov:** Yeah, markdown, CSS...

**Jerod Santo:** Yeah, exactly. So this is a pure Javascript thing, and it has been, probably the entire time... What are your thoughts around TypeScript? Is that something that you're considering using, or trying, or...? What are your thoughts there?

**Valeri Karpov:** I've been tempted to try playing with TypeScript, but it's something that I haven't really found a use for yet. Mongoose would be one project where I would either be interested in someday supporting official TypeScript bindings, or maybe even porting parts of the project to TypeScript. But Mongoose is a very different project than most other projects.

\[00:32:06.29\] In my day job I would not recommend we use TypeScript, and I've been very adamantly opposed to us using TypeScript at all, because -- well, we don't really have a very deep codebase in my day job; things end up being pretty flat, where it's just "Okay, here's an Express API, here's a route handler." We've got a little bit of wrappers around it to make it so that if we use Async/Await with Express... And then you just write a bunch of functions; they don't really share too much logic, other than a database connection. They just do their thing.

Our UI also is relatively flat, passing data down. The component tree isn't too deep, maybe two or three layers... So putting in TypeScript for that -- there aren't really too many massive pieces of code in our codebase that share a function call interface with each other... It's more just "Okay, here's a big, wide front-end, here's a big, wide HTTP API", they need to be able to communicate with each other, and TypeScript doesn't necessarily help with validating that, because TypeScript is compile-time only, not runtime, so if you're relying on TypeScript to check the parameters coming into your Express API, it will check that it's technically correct at compile time, but a malicious user can still throw in a bad request.

**Jerod Santo:** Yeah, exactly. So we talked about tips and tricks... Let's talk about services or tools that you use with regard to Mongoose, or in any of your open source work. Is there anything that you think "I couldn't live without this... I'm so happy I adopted this pattern, this tool, this library, this service (whether it be free or paid)", that others might find and be like "Oh, I should try that for my open source project?

**Valeri Karpov:** There is this one tool that I built called Acquit back in 2015 that has been one of the most important things that I've worked with... And the general idea there is it compiles tests into documentation, so I can more easily maintain my docs. I wanna make sure the examples that I'm showing are correct, so it helps me stay confident that the changes to the documentation that I'm putting out actually make sense with the current API. So that's a big one.

**Jerod Santo:** What was it called again? I'm looking it up now. Acquit?

**Valeri Karpov:** Acquit, yeah. Like you're acquitted for a crime, or whatever. Or you've acquitted yourself well.

**Jerod Santo:** Gotcha.

**Valeri Karpov:** I actually use that to also write my two eBooks; now the third one that I'm working on is also still with Acquit. I have CI set up for my eBooks, which is pretty great.

**Jerod Santo:** Nice. You're ahead of the game on that one. So links to Acquit will be in the show notes. Anything else that you use, whether you wrote it or somebody else did, that you could recommend to somebody who's either writing similar libraries, or maintaining things as well?

**Valeri Karpov:** Well, I am a big fan of Mocha, the test framework. That's my go-to right now. I feel like it strikes a good balance of minimal API with just enough stuff to be useful. So I'm a big fan of that one... Although I guess I am technically on the Mocha core team, so maybe that's self-serving. \[laughs\]

Let's see here... I do love ESLint. It took me a while to warm up to it, because I was a little worried about it. I wouldn't say -- "worried" is kind of a weird term.

**Jerod Santo:** Concerned?

**Valeri Karpov:** What I wanted to say about ESLint is that for a while I just didn't think I could get too much value out of it, and it seemed pretty overwhelming to lint the entire Mongoose codebase, because the style was a little inconsistent when I first started... But once I got past that initial hurdle, ESLint has been quite great; it helped me catch quite a few bugs. And there's a pretty surprising amount of cool things you can bake into ESLint.

\[00:36:13.19\] The serve module on Npm - that one is also a pretty important module in my workflow. It's more of a command line tool for spinning up a web server, so just 'serve .' gives you a web server that just serves up the current directory over HTTP. That one is pretty amazing for testing doc sites, and I've been looking to migrate Mongoose over to using it... But most of my other stuff already uses serve. Serve is great.

Another reason why I really like it is it has really great developer experience baked in... Little things like when you run serve. it automatically puts the URL to your clipboard, so you can just go to the browser, Ctrl+V and all of a sudden you're looking at your directory.

**Jerod Santo:** I love when there's projects where you can tell that the person that created the project really uses it all the time, because those little niceties are there... Because they just think about them as they're building it out, and they're using it so much that they think "You know what would be nice? This little thing." And then they go ahead and add it. You can always tell when there's something that's kind of -- a tool that's beloved by the creator itself. That's awesome, I'm gonna check that out.

So let's focus now on some people. You've talked about some tools, links will be in the show notes to Acquit, Mocha, ESLint and serve, or course, for those interested... But what about other maintainers? Is there anybody you look up to, or appreciate, somebody who does a really good job maintaining open source software or writes a lot of software that you consider to be high-quality and you'd like to share them with us?

**Valeri Karpov:** Yeah. I'm always reading 2ality, or however you pronounce that... Dr. Axel's blog. Axel Rauschmayer. I don't even know how to pronounce his name. I've never spoke to him in person. All I know is that his content is great, and I really enjoy it.

Let's see here... Also, Gleb Bahmutov. I'm not sure if I'm pronouncing his last name correctly, and I should, because I'm Russian...

**Jerod Santo:** \[laughs\] Come on now...!

**Valeri Karpov:** I probably messed it up... But he's the VP of Engineering at Cypress. He also has an excellent blog. I've known him since -- he and I actually got acquainted because he found Acquit back when I first put it out. This was back in 2015, when he was working at Kensho, which was a startup that got acquired a couple years back... So I almost got a job at Kensho, but ended up passing -- well, ended up not getting the offer. Gleb and I have corresponded every once in a while ever since. His blog is great.

Another interesting little bit of back-story - I interned at Google back in the summer of 2009, when I was in college, and my mentor when I was there was a gentleman named Misko Hevery, who was one of the original authors of Angular 1...

**Jerod Santo:** I met Misko briefly... I think I was at the inaugural NG-Conf, and... Very smart guy.

**Valeri Karpov:** Yeah, yeah. So getting to work with Misko for a summer was pretty amazing. He taught me pretty much more about software engineering in 12 weeks than I learned in my first three years of college. So he was a big influence on me, and I look up to him a bit.

\[00:39:31.00\] Another guy who used to be on the Angular team, Vojta Jina... He originally wrote Karma. Karma is one of those tools that I really thought was \[unintelligible 00:39:39.21\] Karma was actually Vojta's Masters thesis project. He wrote a thesis about it, and then implemented it as an open source project. It actually got great adoption, as well... So it was really great to see that whole process that he went through to make that happen. I'm not actually sure where he is right now. Last I talked to him he joined Apple for a while. I don't know what he's doing now. But yeah, his Karma was a pretty amazing tool at the time, really ground-breaking.

**Jerod Santo:** Cool, Val. Well, last thing I wanna ask you is if you have a call-to-action or if you have anything in particular with regard to Mongoose...? Or I know you have some eBooks in the Javascript space that you'd like to have the community rally around you, support you, help you, get involved with anything? What would you say to the open source community out there with regard to you and the projects that you're maintaining?

**Valeri Karpov:** Yeah, check out my eBooks. I have an eBook on generators, and more recently an eBook on Async/Await. Just look up "Mastering Async/Await." The website is asyncawait.net. I've put that out about last June, and just kind of like distilling all the patterns that I've learned from using Async/Await, and before that co and generators over the last several years.

I think Async/Await will kill or change the way we think about Javascript, and Javascript frameworks in particular. A lot of Javascript frameworks, especially ones that predate 2015, one of their core tenants was to minimize the amount that you had to use callbacks. Now that we don't really need to use callbacks, Javascript is gonna have to evolve, and I think Mastering Async/Await helps you see how Javascript is going to evolve in response to Async/Await.

**Jerod Santo:** Awesome, Val. Thanks so much for coming on, thanks for all the work you do, and I'll just encourage you to keep up the great work and keep that GitHub streak going, man. It's long enough now, you can't stop. Keep it going!

**Valeri Karpov:** \[laughs\] Well, see, it's gotta stop at some point... Thanks for having me on, Jerod. It was great!
