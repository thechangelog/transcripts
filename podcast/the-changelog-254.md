**Adam Stacoviak:** You're listening to The Changelog, a podcast featuring the hackers, leaders and innovators of open source. I'm Adam Stacoviak, editor-in-chief of Changelog. In this episode we talk to Gerhard Lazu about the infrastructure behind Chanelog.com and how we deploy. If you're just catching up, we relaunched our new brand and new site on Phoenix and Elixir October 2016 and we needed a better way to reliably host and deploy the site. That's where Gerhard came in. We go over all the details and decisions in this show.

Alright, we're back today, talking about the Changelog.com infrastructure. Jerod, when we rolled out this new site, one of the things we wanted to do was have continuous integration, continuous deployment and a whole new infrastructure on Linode and a bunch of servers. We recruited somebody that's super awesome; Gerhard will tell us about the back-story of the last several months of how we deploy.

**Jerod Santo:** Yeah, absolutely. Gerhard Lazu is with us... Gerhard is very much the man behind the curtains, so to speak, of our new infrastructure. The reason that is -- it goes back a few years, actually.

Gerhard, we met in 2014... I'm not sure exactly how we met you; I'm sure it was on the internet, but you actually blogged for Changelog.com back in the day, all about Ansible and Docker, and that was our very first time meeting you. Do you recall that situation?

**Gerhard Lazu:** Yeah, I remember that actually really, really well. I remember when Docker first came out and not many people have heard of Docker, but everyone was getting excited because it was solving a tough problem - the problem of dependencies and the problem of reproducible builds and runtimes.

Ansible was something really interesting and it had a lot more in common with my prior approaches than Docker itself, specifically -- and I think that's how you actually came across my name, again, in the context of the new Changelog and Erlang applications.

I've built this deployment tool called Deliver (very aptly named). Deliver was just a Bash script, really - a fairly complicated Bash script - which at the time was meant to replace Capistrano, and I think for our real Ruby listeners, they will know the deployment tool, which maybe is still the case today; I don't know, I haven't really watched that space too closely. But Capistrano inspired me to build Deliver, which was later used for Erlang deployment, and some users might know it as eDeliver.

\[00:04:05.05\] And since the new Changelog application was Elixir and was Erlang-based, eDeliver was mentioned even I think on the Phoenix blog as a deployment tool for Phoenix.

**Jerod Santo:** Let me stop you right there and I'll add some color to that situation. As many of you know, we did a complete rewrite of Changelog.com website and CMS last year, in Elixir and Phoenix. We have shows about that - a couple shows last year, Adam, on Elixir and Phoenix, where we give a little bit of information about the back-story around that.

When it came time to actually deploy that application, I was very much green, or a novice. My background is very much not dev ops. Back when we used to call ourselves sys admins, I was a network administrator and a server maintainer - a system administrator, back in the day. So I'm very comfortable with the command like, I'm very comfortable with dealing with servers, I've deployed many LAMP stacks, I've deployed many Rails apps, I've deployed mail servers and relays and stuff like that, but when it came time to take our shiny new application and get it out there for everybody to use, I didn't know what the best practices were...

So I went searching and I may have actually found eDeliver, Gerhard, on the Phoenix website... But there were a handful of tools at the time - this is about June/July 2016, and I found eDeliver, as you said, and it seemed to be best of breed at the time (I'm not sure if it is anymore) for deploying Erlang applications. When I found that - it was based on Deliver, as you said, and on Deliver I found your avatar, and I've recognized your avatar because you had blogged back in 2014 for us about Ansible and Docker... And I thought, "Do you know who would be a lot better at this than I am? Probably the guy who wrote the tool that everybody's using."

I didn't realize at the time that eDeliver was based on Deliver, but you weren't actively a part of that project, or maybe you were for a little while; you had some commits, so I thought you were working on eDeliver, but it turns out that was just based on your project... Is that right?

**Gerhard Lazu:** Yeah, that's correct. eDeliver was actually a fork of Deliver, but the ideas which it had - the ideas about SSH-ing into multiple hosts in parallel and running commands and all that, that was actually one of the core fundamentals of Ansible, and that's why I kept joking how Ansible was something that Deliver could never be, because it had a community behind and it was later sold to Red Hat for like 100 million... So I missed that boat, and that made Deliver a lot more popular, and then maybe I would have sold it for like 100 million... But the point is that the principles which Ansible was based on were these really simple approaches, just like to managing hosts, and that's the thing which attracted me.

I realized how Ansible was like a natural continuation of Deliver, but obviously with a much stronger community around it and a lot of attention at the time... And it just made sense. It was like an easy switch, because mentally it fits how I would approach deployments.

**Jerod Santo:** What's interesting about that is Deliver and eDeliver attracted me because, like you said, they were a series of shell scripts. Coming from my experience - and I fought you tooth and nail probably a little bit as we went... We laughed how old-school my approach to everything is, because a bunch of shell scripts to me is my history of deploying apps. Usually, I just write a new one each time and just rerun it to push out a new version, and stuff like that.

\[00:08:05.25\] So that was very attractive, but yet once we got started, we didn't end up using either of those tools to deploy Changelog.com. I wanted to mention I e-mailed you first 3rd July of last year, 2016... And once you said that you were interested, I sent back an e-mail with a list of our needs and our wants, and then things that I wasn't sure about, and a timeline -- and I wanna bring it to the timeline, because it's funny in retrospect, and I think probably everybody who works in this industry can laugh at timelines, and the naivety sometimes of developers...

So this e-mail is 3rd July, and...

**Adam Stacoviak:** What year?

**Jerod Santo:** Of 2016, last year.

**Adam Stacoviak:** Okay.

**Jerod Santo:** But in the e-mail I said as a timeline, "We want to launch in July. We have a lot of content to import into the new site, so having it up and running in the next week or two will help us keep that timeframe." Then I said, "It'd also be cool to publish our work somehow to share with others and give you some props." This show is a part of that publishing, and we also have some other ways we're gonna go about publishing as well, but I just think it's funny how I was like "Let's just launch it in a week or two", and we were very much -- when did we launch, Adam? October?

**Adam Stacoviak:** October, yeah. And even then, it was like weeks and weeks of focused content migration, content updating from old stuff that we had - old posts, old podcasts that just kind of needed to be massaged, that was in a WordPress database that got pulled over to this, and transpiled the markdown... That whole process. It was a lot. Tagging, adding guests, adding hosts... All this new stuff the CMS has, as it just wasn't there before.

**Jerod Santo:** We were 90% done, which meant we only had 90% left to complete... And I don't want to act like it was Gerhard's fault that we didn't launch right away... It was all us. But timelines are funny.

And Gerhard, to that e-mail -- first of all, you were interested, you were very excited about making the approach public, because that's something that you're been about open source and sharing what you work on, sharing your findings... And you sent me a list of questions. Neither one of us probably remember the list, but I know because I've just looked it back up. You sent us 17 questions to get started.

**Gerhard Lazu:** \[laughs\] That sounds like me, yeah.

**Jerod Santo:** I'm trying to paint the picture of what it's like to work with Gerhard, because you're very thorough, you're very goal-based, and you made sure that we documented everything. Take us a little bit through the process of how you went from, "Okay, here's somewhat of a random stranger on the internet that I'm gonna help deploy an Elixir/Phoenix application with a Postgres database", to having a finalized system that is our infrastructure and that works. How did you even know where to start with me?

**Gerhard Lazu:** Well, I suppose the first step was making sure that we keep the "What?" from the "How?" separate, because they're two distinct things, and for someone such as yourself, Jerod, it's very easy to mix the two; it's natural for you to think about the "How? How are we going to achieve something?" in the context of what you're trying to achieve.

For me, the first thing was to focus and drive out all the answers to my "What?" questions, just to understand what you're actually trying to get out of this... Because if you're just wanting to deploy an application, you would have done that yourself; it was a lot more than that, right?

You needed the entire infrastructure to be configured and set up in such a way so that it can be easy to update, to manage, and so that you don't have to worry about a lot of the details that go underneath.

\[00:11:52.18\] For me, the most important thing was to understand your approach, and also how you see infrastructure and how you see deployment, because based on that we could have gone so many different ways... Just like look at Deliver, eDeliver, Capistrano, Chef, Puppet and all these tools which are used for deployments. There are so many ways to skinning the cat, but the point is figuring out what works for you, what you're comfortable with... You keep alluding to the old-school approach and to the Bash scripts, and this was something that was easy for me as well; it was a mental model that worked well for me, I was comfortable with, and I have already used it in a couple of production deployments. These are just like WordPress websites and different backend applications... It was something which I'd worked on over the years and it just made sense for me, so I knew that it would make sense for you as well.

Knowing the "How?" part fairly well and understanding the mechanics, I could steer you towards the "What?" and driving out to the important things, such as for example back-ups. Is availability important to you? How important is it and what limitations/constraints do we have when it comes to the infrastructure? Do we have API calls or do we have servers which come and go on a daily basis, or do we have something which is more permanent?

The 17 questions which you mentioned were just like a conversation starter about how you see the world and how you see Changelog working in the big picture, because you went from like an old infrastructure, an old setup, which was working well in some respects, but it had some drawbacks... So you wanted to address some of the drawbacks, but also keep a lot of the things which worked well.

This wasn't like a greenfield project, in the sense that you already had your Changelog workflows and we had to build something that would support those workflows.

**Jerod Santo:** Yeah. Just to give a bit of an idea - the questions coming back were not "Which version of Postgres are you running?" and stuff like that. It was these big-picture goals. For instance -- I do have the list here, and we don't need to go into detail on these, but "What would you like to happen when the website goes down? Are you set on Linode? (that was something I had mentioned in the e-mail)" - that one's a little bit specific, but... "Do you wanna see logs from specific or all components?" Stuff like that. It's higher-level questions than you would expect at first, even though there was many of them, and like you said, they were conversation starters around what we need, and not necessarily how we want those needs to be fulfilled.

**Gerhard Lazu:** Exactly... And also the process - this fits fairly well in a process which I'm very familiar with, specifically using a story backlog of stories, and you separate things into features (stories which have business value) and chores, which are stories that are required for the well-running of the team, of the project, and also bugs, regressions, or just stuff that you have already delivered, you've already gotten business points for, in terms of business value... However, if some bugs were introduced and stuff which used to work no longer does.

In that process we used Pivotal Tracker, which just embraces this process of learning and discovery and sharing what you learned. That worked well for us, because we were a distributed team; it was just a few of us, and we had very limited time. I, for one, only had half an hour every day. That was it. That was on a good day.

\[00:15:56.29\] So what can you possibly achieve in half an hour and do that every single day, so that in like a month, two months you get to this point where you can switch the infrastructure on and you have all these high picture goals dealt with and addressed. So knowing what to focus from a user perspective - your users and you yourselves are users of this thing - helped me prioritize things and helped me just figure out what makes most sense... Because as I said, there are so many approaches, and they all have their own merits.

Based on what I knew and based on the constraints, it was the sensible thing to do, the right thing to do.

As years go by, I realized that learning about things and accepting that you will never know everything and you will always discover something new, and you will have forgotten things, you will make mistakes -- so working a way that embraces this is really helpful. Also, sharing your learning as in sharing your decision-making and involving everyone else around you is also very important. So in that respect, in our case having Pivotal Tracker - having that tool to capture all this context, to capture all the commits, to focus on what we're trying to achieve and to keep us on point every single time I would start in the morning, I would have that half an hour to do what I was trying to achieve...

Also, having the conversations and having this delay -- it was a time delay, because I'm in London and you're in... You're in...

**Jerod Santo:** I was waiting for you to say... I'm in Omaha, Nebraska.

**Gerhard Lazu:** In Nebraska.

**Jerod Santo:** Or as you called it in an e-mail, Oklahoma... \[laughter\] Which is close enough...

**Adam Stacoviak:** Close.

**Gerhard Lazu:** And Adam was there in the picture as well, and I think you had also someone working on the design of the website...

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** So you had all these people, some I haven't even met - I mean, we two have, but I haven't met the others, and I haven't actually even talked to them over e-mails...

**Adam Stacoviak:** I could not even be real; I could be fake.

**Gerhard Lazu:** Exactly, right? Yes, how do I know that? You could be like a next version of Siri, or Alexa. \[laughs\]

**Jerod Santo:** Adam's alternate personalities.

**Gerhard Lazu:** Exactly. So working with a team like this, it required an approach that would make sure that everything we've designed and everything we did, there's always there -- when you forget or when you wonder "Why was this done in that way?" or "Why is this thing missing?", there is always something to go back to and to try and understand... To understand why we made certain decisions. And a lot of the teams and a lot of the codebases which I've worked on and with are lacking this, which is so important a year or two years in. People change, they come and go, and the tools change, right?

So how do you preserve the original intent and how do you preserve what matters over time? This is one solution; I'm not saying it's the best. It's the one which works well. I'm prepared to change it when I will learn that there's a better approach, but for the time being, given the constraints and given the goals, this worked well, I believe.

**Jerod Santo:** Gerhard has a talk he's given called Not Working Together, which we'll link up the slides to that (they're on Speaker Deck) in the show notes. Gerhard, is that a talk that was taped? Do we have a video of that? Or are you gonna do an encore presentation? What's the deal with your talk?

**Gerhard Lazu:** I'm not sure if the talk was recorded. It is only a 10-minute one, which is a fairly short one. It was given at the London Ruby user group and it was given I think in November of 2016, I believe (I'm not sure). It was trying to capture exactly this - how do you approach working in a team which doesn't work together? I pair every single day, and I've been doing that for many, many years. I switch teams on a regular basis...

\[00:20:22.22\] Having worked with many different teams of different sizes - I've been working with Pivotal and for Pivotal for many years now, I've been working for IBM for a while, and they themselves have been consulting for all sorts of small and big companies and enterprises... How do you keep the context and keep everyone involved and engaged, and keep the information and the knowledge and the learnings flowing?

In a way, make sure that when you finish a project or when you move off, all that knowledge isn't lost. That taught me a lot about how to approach things in a way that is like a team effort; it's not one person, it's not one approach... It has to work for everyone.

Sometimes it's more difficult than it sounds, but ultimately it works really well when you engage everyone around you, and you make sure that everyone is committed and involved in everything that we do. How can you do that? You can't have rock stars and superstars just going off tangents and doing their own little thing. So in this way, sharing everything, being able to switch approaches and being able to consider other things I think is necessary.

Coming back to our own little setup, in comparison to most of the projects that I've been with, this is very simple and very small, and it has to be approached differently. You cannot use -- well, you could, but it doesn't make sense to use a big platform as a service like Kubernetes or Cloud Foundry, or even like Docker Swarm or Mesos (there are so many these days). They have their own place and they have their own advantages, but in this context, considering the old-school elements, it just didn't make sense.

**Jerod Santo:** Well, let's pause here... I have two thoughts - first of all, we're gonna get into the infrastructure that we came up with and talk about some of the details so that people can see how it all works and why we came to those particular conclusions... But also, I'll tee this up for you and we'll ask it on the other side of the break - we talked about this list of questions that you started asking, and I told Adam I very much hopped on the Gerhard train and I was like "Okay, just take me on your process and I will follow", kind of kicking and screaming along the way, of course... But the question that I think people are probably thinking (or I would be thinking) is "Oh, Gerhard knows which questions to ask, but at a higher level, how can I get to a point in my understanding where I know what questions need to be asked, in order to come up with something that fits my scenario?"

**Adam Stacoviak:** Coming up after the break, we ask Gerhard how he knows what questions to ask when setting up an infrastructure that has particular needs. We also talk about why Pivotal Tracker, believe it or not, is a crucial tool for his process, how we're using Docker, and the distinct units that make up our CI flow. Stay tuned.

**Break:** \[00:23:48.15\]

**Jerod Santo:** Gerhard, what I teed up for you before the break, which I'm still curious about, is how do you know what questions to ask when you're tasked with "Setup an infrastructure for this particular need"? You asked me 17 things... That was just the kickstart; I'm sure there were lots of questions that you asked throughout the process, but how do you even know where to start, because if I can know where to start, then I won't need somebody else to ask me the questions -- I don't need you anymore. But how do you know it? You just experienced it so many times that you just...? I won't answer for you, go ahead - how do you know which questions to ask?

**Gerhard Lazu:** I think a big part of that is experience, definitely. But also, we have to go back to the first question, which is "What are you trying to achieve? What are you trying to do differently than you're already doing or you already have been doing? Are you trying to continue the same process, are you trying to introduce a new process? What matters to you? What is important?"

A lot of the times people just don't answer that basic question, and obviously they can never achieve what they intend to achieve, because they haven't even stopped to think what is important to me. If you start looking at the tools and picking your tools before you even know what you're trying to achieve, how can you be successful?

I suppose focusing on what really matters, such as for example "Do you care about daily backups? Do you need daily backups?" - that's one thing. Is there any legacy content to migrate? What type of content?

Just trying to understand the problem, and you're here -- basically, it makes you outline where you are and what you know, and being very clear about what you don't know.

**Jerod Santo:** Yeah, and another "for instance" on that... Just thinking about to our situation specifically with Changelog, which -- these are things that Adam and I know almost inherently because we live it in our work and in our process... We know things about what we need that you don't know as a third-party coming in... So one thing that I said to you, which I think you keyed off on early on, is that if we have a couple hours of downtime, now we're gonna be mad about it. A couple of minutes, we're fine. A couple hours we might be upset, but our business doesn't tank. It's not like Amazon where for every second they're down they're losing X millions of dollars in revenue.

So I said something to you like "These are our goals, these are our needs. Of course, we don't want any downtime. We wanna know about it as soon as the website is down, but if the website does go down, it's not going to put us out of business...", unless it never comes back up again. \[laughter\]

**Adam Stacoviak:** Or if it happened frequently, then it might be bad.

**Jerod Santo:** \[00:27:41.03\] Sure, but just knowing that we don't need those five nines or six nines, or I don't know how many nines people need nowadays... That was something that informed you on the type of solutions that you could come up with, and frankly, in that case, things that we don't have to do, which other people might have to... So we can come up with something less complex than you would otherwise, if we required that "always on."

So insights like that - that's why your questions were like, "What would happen if the website went down? Do you want daily backups?" You also asked us about legacy content, you asked us about existing relationships... We have service providers that we work with: Linode, Fastly and others, so we had conversations around those things, because of course, that's gonna limit certain choices, as well.

Before we get into the guts of it, the Docker and the Ansible and the core CI and all that good stuff and the way it all works, let's get back to the process a little bit, because on the other side of the break you mentioned working remotely together and the situation with the constraints that we were in, and how we used Pivotal Tracker to communicate this process... And this is not meant as an ad for Pivotal Tracker by any means; this is a tool that Gerhard likes and I was happy to use... But tell us, because people hear that we use Pivotal Tracker, and perhaps that's just like, "Okay, that's fine, that's how you do things... Where's the real goodness out of that?", but for me it was the went about using Pivotal.

This would work just as well with another tool like Trello, but it's how you use it, which to me was unique, because I've been on lots of projects that use tools like these, and you had a certain level of thoroughness and particularness with how we went about it that ended up -- as we were doing, I was thinking, "Man, he sure is a little bit umm how do I say it persnickety particular about how this tool is being used..."

But at the end of the day I saw, "Oh, there's a lot of value there, because now we know everything's in there." Go ahead and break out for us how you go about this communication with Pivotal and why that was so important to success.

**Gerhard Lazu:** First of all, I've used many different tools, but Pivotal Tracker is the one which embodies the extreme programming process the best. Understanding the extreme programming process is important, and Pivotal Tracker is the tool which is a means to an end, not the end in itself. And that's important to remember - it doesn't matter what you use, it's just a tool; it's your process, which you mentioned.

For example, separating the "What?" from the "How?" - "What are we trying to achieve and how are we trying to achieve them?", just keep the two separate. When you define the stories, the units of work, the perspective is always "What are you trying to achieve?" - not being prescriptive about how that will be achieved, or how should people go about their jobs... That's not how to approach a story. It's always focusing on "Who benefits from this and what are they benefitting from in the first place?", describing the "Why? Why are we even doing this in the first place?"

Once you do that, once you have this beginning of a story, then you have the place where all this context can be attached. For example, developers, software engineers, they go and make code changes, and the commits, how they change code, can be linked to a story. That is very important, because then you can see how things are changing and the business context in which they are changing.

Also, we also have conversations about things, about how we're approaching things, we're making decisions all the time... A lot of them are not worth capturing, but some of them, especially the crucial ones -- and again, you need to be sensible about it, I suppose... Not everything is important, but you will know when something is worth mentioning. I think a lot of it is discipline, to be honest... Taking the time and having the discipline to capture those things, and trusting that eventually someone will be very thankful that you've done that.

\[00:32:10.24\] I suppose it's the same approach to commits, right? Maybe those are easier to understand... When you do your commit summary, how do you do your commit summary and why do you do your commit summary? There are some very good blog posts out there which go into great detail about this. But the point is the same - knowing why you are doing certain things and why they are important, and having been in situations in which you wished there was more information, you wished the "Why?" was captured - "Why did this happen?" I can see how it happened, maybe, if I can understand the code, but WHY did it happen?

A lot of the time, the WHY gets always missed, whether it's the business WHY, whether it's the code WHY, whether it's the infrastructure WHY... But it's very important, because then we have this workaround in some place - and we have many workarounds actually in quite a few places - but there's always a good reason, and the people that did those workarounds were not stupid, they were not trying to make your life difficult; they had to make certain trade-offs. Understanding what those tradeoffs were and understanding why they chose something is the most important thing, not what was chosen.

**Jerod Santo:** Yeah... I think the word "discipline" that you said there is excellent; I wish I would have thought of that, because that's exactly what I was trying to describe. In fact, you're so disciplined with the way that you put everything into the project, in Pivotal Tracker, that I even wondered "Was this guy in the military, or something?" Because it's like that level of discipline that you don't see in too many people with the use of a tool, like "I'm going to use it this way, I'm going to use it this way every single time, and everything is going to go in the way that we plan on it." And I think it's because you think about the Pivotal Tracker project differently than I was, and that other people perhaps do, in that I didn't see any value in it as an artifact, as a documentation or a reference point once the project is over with or once it's moved on to other phases, I think of it -- maybe it's because of the way that I use even Trello... It's almost ephemeral; things come and go and they move around. Adam and I open and close boards all the time.

We use them undisciplined, but you were using it in such a way that either it lives in the code or in the commit history, or it lives in the Pivotal Tracker project as open and closed tasks and chores with conversations and histories. We're gonna use that and we're gonna refer back to things as documentation at the end of the day, and I've actually used it that way since you know "Why did we do this?", and I go back into the project and I see exactly why, because like you said, the WHYs were captured in there, but they wouldn't have been if you hadn't been so disciplined, because I would have e-mailed you or talked to you about it on Skype and forgot about it much later.

**Gerhard Lazu:** Exactly. I think that summarizes it really, really well. I think everything starts from a very simple concept, and that is it's not about you, it's about everyone else around you. If you're doing your job in a way that will always, always benefit the others, then that will start changing the way others around you approach their work, and they will behave the same, which means that you will benefit from what they do. So the selfishness is removed from the process, and that changes the team dynamics in a way that I think makes the team and the workplace a great, great place to be in.

\[00:35:51.18\] Everything is pleasant, everyone knows everything, everything is easy to find, if you forget a thing, it's fine, you can always go back; if you make a mistake, it's not a problem, because everything around it is built in such a way so that either someone will learn from that and will improve things, or you will just discover something that no one has thought about before. So you can't mistakes -- not any mistakes which are bad; everything is a learning opportunity, and everything you do you're sharing with everyone around you.

It does take more effort, it is more difficult, but it's so much more satisfying. Even open source - all the tools which you use, it's other people doing things for everyone else, because they believe it's the right thing to do.

**Adam Stacoviak:** One thing on Pivotal - I use this tool, and again, as Jerod said, this is not an ad for Pivotal Tracker, although I do have some extreme appreciation and respect for the tool because it requires you, Jerod, as you mentioned, the discipline, the attention to detail, the particularness - it requires that of anybody leading a team through this, whether it's two people or ten people... There is a way you use Pivotal Tracker that gets you the result you need, which is thoroughness through a process.

I used it in an agile process and with two people; I'm just kind of curious on -- maybe this is going too far in the weeds to it, but why this tool is the choice you choose...? Is the feature set of the tool, or is it because it's so rigid in how you use the tool to get to the goal of completing a feature set, or something like that?

**Gerhard Lazu:** It has it drawbacks, and it does have its sharp edges, as any tool does. However, from all the other tools out there, it's the one which - as I said - embodies the XP process the best. And shifting our focus a little bit from Pivotal Tracker to something else that we're using, which is Ansible and Docker, both of those. They're simple, and they are -- for example Docker, it makes it really easy to get started and it handles with compartmentalizing states and just ring-fencing around dependencies really, really well.

It has a lot of features; it's added so many features in the last months... Most of the new features I'm not even familiar with. But the point is, when it comes to sandboxing the runtime and making the runtime reproducible, Docker does it really well for developers. It's really easy to get started with it.

Now, Docker is a lot more than contain-- ugh, I can't pronounce this word; this is a difficult one... Containerization - is that correct?

**Adam Stacoviak:** That's right.

**Jerod Santo:** I think you were trying to say Moby. \[laughter\]

**Gerhard Lazu:** Moby, yes. Well, now it's called Moby, you're right. I still go to docker/docker...

**Jerod Santo:** I do, too. In fact, I was looking -- Gerhard, as you know, our Docker instance had an issue, we had a bug, and our deploys were failing... This was right when they were at DockerCon a few weeks back, or last week - I don't know when it was - and they had just renamed Moby, and they redirected docker/docker to moby/moby, and I was in the middle of trying to find a Docker bug, and all of a sudden I found myself on this Moby repository, but I hand't seen the announcement yet, and I'm like "Who's moby/moby?" I didn't know what was going on...

**Adam Stacoviak:** Somebody was messing with your DNS, man...

**Jerod Santo:** I didn't know what was happening, and then I went and checked Twitter and I'm like, "Oh, okay. Now I know what happened to me."

**Adam Stacoviak:** There you go...

**Jerod Santo:** Anyways, you were saying containerization...

**Gerhard Lazu:** Yes, that's correct, containerization. So when it comes to containerization, it's really simple and easy for developers to just use it. There are other technologies, such as for example Garden, which I'm fairly familiar with; maybe most of the listeners aren't, but the point is Docker isn't the first one, but it's the one which made it really easy, and even though they've added a lot of features which I think are moving it away from what it used to be, it's still the easiest way to get started.

\[00:40:24.26\] It's very self-contained, it's very predictable... Yes, it does have its bugs, as we've discovered and as we've seen, yes, there is some fragmentation and some things which I wish they were better, but overall it works well.

We didn't have a lot of issues with it. We had some... It's impossible not to have any issues, because it means you're not using it, you're not changing it, you're not updating it. So we have come across a few bugs. Did it take the system down? I don't think so.

**Jerod Santo:** No, it did not.

**Gerhard Lazu:** The deploys failed, yes. There were some instances which piled up, of changelog.com, the database had too many connections, but it was fairly easy to just stop it and start it, and get the pipeline unstuck, and off it went.

**Jerod Santo:** Right. Real quick, while we're -- I know we moved a little bit past Moby, but while we're still kind of in the situation of Moby, Adam, we should mention that we had Solomon Hykes confirmed to come on GoTime on 18th May.

**Adam Stacoviak:** Yes, that will be a live show.

**Jerod Santo:** A live show. Go to changelog.com/gotime to subscribe, or -- do you guys know we have a master feed? Changelog.com/master. Just get all of our shows; they're all good.

**Adam Stacoviak:** They're all good. Get them all.

**Jerod Santo:** So if you're listening to this before 18th May, subscribe. If you're listening after 18th May, well, you missed a live show, but the published show will be coming out soon. It might even be out there, so go listen to that... All about the rename and that whole deal. I just mentioned that as a sidebar.

Gerhard, real quick, before we get to the next break... Because on the other side we're gonna talk about what went well and what didn't go well.

One thing we haven't done yet is just to give the lay of the land with regard to what is the Changelog.com infrastructure. If you had to give a lightning talk about not how we went about doing it, but what we ended up with; describe to somebody what it is and how it works, give us that. We know there's Ansible, we know there's Docker, but explain it to Adam like he's five.

**Adam Stacoviak:** That's right. I'm five. Help me out.

**Gerhard Lazu:** Alright, Adam. So ci.changelog.com is what manages all the infrastructure, and the application lifecycle as well. It's powered by Concourse - it's this newish CI, and the runtime, as I've already mentioned, is Docker. Ansible does all the heavy lifting, so we have Ansible playbooks, and they capture the configuration for a specific host type - the application host, for example, or the CI host, and those hosts get configured accordingly.

When it comes to the application - our listeners already know - it's Elixir, which is running on top of the Erlang VM, which runs inside a Docker container. PostgreSQL is the database, Elixir connects to the PostgreSQL. There's NGINX in front, NGINX proxies request to the Elixir application, and in front of all of that we have a CDN - we're using Fastly for that, and that's fronting and distributing all the static content, all the MP3's, all the episodes and all of that.

There are two repositories, both hosted on GitHub. One of them is the infrastructure repository, which contains all the code, and basically all the glue, holding all the services together, and the application which is already open-sourced, the changelog.com application.

\[00:44:06.11\] When it comes to the services that we used, all the credentials are stored in LastPass; that's where all the credentials are stored, and when we configure out CI, we pull credentials from LastPass. Either one of us can just pull the credentials by the LastPass CLI. We configure the CI using this tool called Fly; it's self-contained and it's very easy to use and fairly self-explanatory, and I think that's it. What did I miss, Jerod?

**Jerod Santo:** I think you didn't cover backups, but you said the CI...

**Gerhard Lazu:** Oh, I see.

**Jerod Santo:** So one thing just to be clear - Linode is our host, so we have a Linode VPS; we have two of them... The main one, which is the Changelog.com, and then the one that hosts the utility application, which includes the CI.

It's just worth mentioning that each of our distinct units - our application server, our web server and our database are separate Docker instances on that one same host.

**Adam Stacoviak:** It's a pretty beefy server though, the main one.

**Jerod Santo:** Yeah... Nice and fat.

**Gerhard Lazu:** And it's underused... Greatly underused.

**Jerod Santo:** Yes. One of the advantages of this - and this has been a desire of mine very much from the start - is we may never have to scale out. We can probably just continue to -- well, we're not utilizing the server as is, but we can probably just only have to scale up, and we may never have to scale out, at the traffic levels that we get, and the speed of Elixir and the beefiness of the Linode VPS that we're on. I think that's excellent, because it keeps our infrastructure very simple.

**Gerhard Lazu:** And the CDN in front makes sure that the content is properly distributed, and all that... So yes, that is a big, big advantage. Also, the backups... Having a single instance, it's really simple to just basically archive everything - the whole application, the whole database, everything; the whole lot. And you have this massive tarball, and you store it on S3; it's a full backup, it's self-expiring, which means that after so many days or so many weeks you can configure your S3 buckets where we store the backups to self-expire the objects. It makes it really easy to pull any backup and just restore it, and you have a full copy of the entire Changelog.

Now, it would be not too difficult to store it on different hosts, right? If you had like a database host and whatnot, but it would still mean more components, and you have network in between, and all that stuff... Which complicates things.

So it's simple; we could have downtime, but it'd be fairly easy to redeploy and reconfigure everything, the entire Changelog, on any VM, or on any cloud instance - it doesn't matter where, it doesn't matter which provider.

**Adam Stacoviak:** That was my next question... A listener might be thinking, "Well, you chose Linode...", which is a great partner of ours, but if for some reason that relationship changed, or for whatever reason another cloud was better for us, or for whatever reason we needed to move - whether it was for redundancy, a simple migration or whatever, being able to move to a different cloud... So that was part of the 17 questions, I'm assuming, or a part of the early requirements set...?

**Gerhard Lazu:** Yes, that is correct. I did ask if you want to use multiple cloud providers for redundancy, or if you have any preference... However, you will need backups. It doesn't matter who you're hosting with, you do want to have full backups. I mean, data corruption, data loss... All sorts of things can happen. It's not just downtime that you have to worry about. And full redundant backups, stored off-site, are important.

\[00:47:58.25\] Now, not everyone can do them... Some systems are too big and you just can't do them. However, for the Changelog and for the majority, 99% of the systems out there, you can do full backups. So I have the whole push towards microservices and all that, where you have smaller components... Because the components are getting too big, they have too much state, too much knowledge and too much responsibility, and it's really difficult to have all this in a single place, and how do you even back that stuff up? How do you recreate it? How do you scale it?

So it's different tradeoffs, but we definitely do not need a distributed "always available, always on" sort of system, so why have one in the first place?

**Adam Stacoviak:** I'll also mention that our AWS bill is quite inexpensive, too. I just searched my e-mail real quick to look at the latest bill and it was $4,76. So you're seeing that they self-expire these backups... How many days do we go back for self-expiration? Do they eventually just delete themselves, or how does that process work? Do we store just endless amounts? Do we have last year's backup there? How far back does it go?

**Gerhard Lazu:** When we configured it - I think Jerod configured this - we decided to go with seven days. So every day we take full backups, and I think there are close to 11-12 gigs. So we have seven times that, and when you set up the bucket, as you can version bucket, you can configure different policies on the bucket, and different options... One of them is just like expiring objects which are older than a specific time period.

That means that you don't have to manually, or even have like an automated tool or CI or whatever job to delete things, or cron job or whatever might be the case... AWS takes care of that for you. It's fairly simple; all the data incoming into AWS S3 is free, so you don't pay for that.

If we were to restore from backup, the bill in that month would be slightly higher, but that doesn't happen a lot.

**Adam Stacoviak:** Yeah... That's a bill you'd gladly pay, too. We say it ourselves, "Thank you. Here's the money."

**Gerhard Lazu:** Exactly. So when it comes to restoring from backup, that's something which we need to automate. We did have a couple of stories we did manually, just to make sure that everything works and it's still correct, so to speak... But we still have some outstandings, such as automating this restoration process. As you know, your backups are only so good as your restore process is, and right now it's manual. It's well-documented...

**Jerod Santo:** And it's used...

**Gerhard Lazu:** And it's used, exactly, because I think you use it fairly often, Jerod.

**Jerod Santo:** Yes. So it's manual right now, but I will pull down our full backup. By the way, there are about 17 gigabytes now, so it's growing... But yeah, we just have seven or eight of them up there. I'll pull down the whole thing and extract it into my development environment and use it... For two reasons. First of all, it's a manual process to make sure our backups are still working. That is worse than an automated process, but it's better than no process.

Secondly, because I like to develop with real data that has recent episodes and all the imagery that we've uploaded... So I will do that - not on a weekly basis, but every other week or so.

**Adam Stacoviak:** Man, I would love to have that. I didn't even know that you were doing that. I want that. I need that.

**Jerod Santo:** I'll hook you up.

**Adam Stacoviak:** You know somebody, right?

**Jerod Santo:** I do... I know a guy behind the guy... We can ask Gerhard how to do it.

**Adam Stacoviak:** After the break we talk about why Gerhard chose Ansible and Docker over something like Kubernetes. We also talk about our potential lock-in to the hosting provider we chose. Linode, as you may know, is a partner of ours, and everything we do at Changelog is hosted on Linode servers. But the question is "Are we locked in, or are we free to move to another hosting provider if we want?" This question brought up our tie to Docker - are we locked in to only using Docker? Stick around to find out.

**Break:** \[00:52:22.04\]

**Adam Stacoviak:** Gerhard, in the break we often ask some questions, and before the break, Jerod was teeing up sort of this restrospective lookback to see what went well, what didn't go well, and kind of like see how we can move towards the future. That got me thinking about the episode that we haven't released yet - which is coming up very soon - on Kubernetes... And I've just been thinking about this whole conversation... What you've built for us seems very bespoke, very particular for us, and since that Kubernetes' conversation, I've been thinking "Why didn't Kubernetes fit for us?"

Maybe in your own words, what questions do you often get asked whenever you build something specific like this that isn't Kubernetes or Cloud Foundry or X (whatever it might be)?

**Gerhard Lazu:** When I started with Ansible and Docker in 2014, Kubernetes I think was only just starting, or not even started; it was very early days. The idea existed, but I don't think the product existed. Kubernetes came a really long way when it comes especially to statefulness, handling stateful data... I think it came a long way.

When it comes to data services, and PostgreSQL specifically -- I mean, even now I believe Kelsey Hightower recommends to not run any database inside the container. We do that, and it works well, it's alright... It is a production system; we didn't really have any issues, but I know there are many, many reasons why it's a bad idea. But it works. In some cases, it works.

With the latest Kubernetes version - I believe it's 1.6 - I think it's almost there as far as we are concerned... So we're very close to being able to actually use it. The question of complexity still remains. I mean, Ansible is fairly simple. When you look at what we have - I know it's not public yet, but I hope it will be very soon - it's fairly simple, and yet still things go wrong.

The Kubernetes service is very big; the community is different, of course, and I'm not suggesting that we can compare Ansible and Kubernetes, but as solutions for what we need, Ansible was easier at the time. I knew it better, I had less questions about it... It fit the old-school mentality fairly well.

I think now that Kubernetes is much more mature, we can start considering it, and very slowly we can start migrating components across, why not? But you will still have these extra layers of things, and all this documentation to go through and understand and to keep up with changes as they happen. What we have is simple. Imperfect in many ways, but it works.

**Jerod Santo:** \[00:56:18.04\] I'm just getting to learn our current stack, Stack... I mean, are you gonna switch me to Kubernetes all of a sudden?

**Adam Stacoviak:** \[laughs\] Well, I'm not pushing for it. I guess I'm playing the advocate out there who's listening to this show thinking "I've been hearing nothing but good things about Kubernetes, or other systems out there that essentially help you..." -- they basically took the 17 questions (I'm assuming; this is all assumptions)... Assuming that the 17 questions that Gerhard asked originally was something that the overall community of Kubernetes asks (or something like that asks) when saying "Let me automate your infrastructure. Let me build out your infrastructure and make it very command-driven", as we'd heard about on that show, rather than maybe -- not so much the complexity, or even in your case where you say "simple", Gerhard... To not have to do it yourself or think through it yourself and remake the wheel each time.

You seem like a master craftsmen with lathe, where Kubernetes may not be generic, but it's a global system that fits a lot of problems pretty well, and it's evolved over the last year.

**Gerhard Lazu:** Yes, I definitely agree with that. All these platforms as a service... I mean, I work on one day in, day out for many years now, which is Cloud Foundry... There are some similarities; again, they are not the same. It's difficult to compare, because they're not like apples to apples. The point is just as VMs and all the virtualization used to be a great thing, a new thing, and this exciting thing many, many years ago, so are all these platforms as a service, and they're maturing and they're coming to a point where it's easy to run your WordPress.

It's still not straightforward, you still have to jump through a few hoops and adapt a couple of things, and I think for a lot of people out there they do make sense... But when it comes to Elixir, when it comes to Erlang, when it comes to Phoenix, even though we don't use a lot of the Erlang VM features, I think because of all the content which we have and the way our workflow works and is, it makes easier to use something like this, because it is very bespoke.

When you're trying to do migrations such as this, I think you need to be careful as to how much you're changing... Every single thing should be a stepping stone. It shouldn't be too big, because you will never finish it. It has to be small enough. And yes, it will never be the right thing, because you don't have time to keep up with the right thing. As long as you're moving in the right direction, that's what matters. And I think we are, right? We are using containers, they work... We might not be using Kubernetes, however we're much closer to using it than we were a year ago. I think that's the point.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** If I were to set this entire thing up myself, we would be tied specifically to the VPS, because I would have installed the entire system directly on the "hardware", and a migration to anything different would have been a huge undertaking that we probably would have said, "It's not worth our effort." But with this system, Gerhard has set us up to have the flexibility and the capability of moving not just hosts, but container platforms -- well, maybe not container platforms... I don't know, Gerhard, could we switch off of Docker?

**Gerhard Lazu:** \[00:59:45.27\] Runtimes. Yes, you could. You definitely could. Docker is not -- so one thing which I'm trying to emphasize (and maybe I'm doing it poorly) is that we haven't been focusing on the stack. We haven't chosen Docker for its features, we have chosen Docker for what it offers us based on the goals. Based on the goals and based on where we were, it was an easy step, it was an easy transition. I think that's important.

Making steps small enough and manageable enough so you can keep doing them consistently, and you can keep moving towards where you're trying to get to... Because that changes in itself. Changelog today I'm sure is very different than it was a year ago, right? You have more shows, you have more content, you have more listeners... So the Changelog landscape is changing, right? Pun intended.

Same thing for all the containers and all the platforms. One day, I do hope that my "homegrown system" can be replaced easily with something that just handles all the complexities itself. I would very much like that. I would very much like that to not have to work at a low-level, but work at a high-level. As soon as systems are generic enough and easy to consume enough, we will do that... Because it's like a flow, right? It's never static, you've never arrived. You have to keep moving and you have to keep going, because the landscape is changing. So you need to put yourself in a position where it's easy to do that, where it's easy to respond to change, it's easy to shift and move.

Kubernetes - yes, it is the biggest and the greatest thing today, but I can guarantee that two, three years from now it won't be. There will be yet another big, great thing. If you've learned anything in the years of computers, it's that every 5-10 years the landscape is completely different.

**Adam Stacoviak:** That's the hard part.

**Jerod Santo:** Yeah, why is this thing written in Elm? I mean, come on.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Come on already, why aren't you guys using React? By the time I say that, it will be Preact, or it will be the next big thing. There's always a next big thing, and we like to talk about the next big thing, and sometimes we like to use the next big thing, but often times life is better two steps back from the edge. You watch the edge, you keep up with the edge, you talk about the edge, but you talk about it from a little bit of a distance.

**Adam Stacoviak:** The safety.

**Jerod Santo:** Yeah. And it's all about needs. If you said, "Hey, let's switch to Kubernetes", my first question would be "Well, what do we gain?" Besides to tell people, "Oh, it's built on Kubernetes", and that would be cool...

**Adam Stacoviak:** The cool factor.

**Jerod Santo:** So you gain the cool factor, let's not discount that; it's real, right? Especially when you run a media company all about keeping up with open source software... You don't wanna get too far behind. But what would be the tangible benefits of doing that, and can we measure those against the cost of change?

So where I would have ended up is usually the ROI on those changes would have been far too low, because the change would have been expensive... Whereas where we are now, which feels very nice -- as Gerhard has said, we've reduced the cost of change by keeping things simple, small and as containerized as possible, so that if we do have a huge benefit... Maybe I'm wrong and all of a sudden we need 40 instances across multiple regions, maybe we scale out real fast... Well, I think Kubernetes is probably positioned to do that better than our setup, but what's the actual gain of switching? Those are the kind of things that you've gotta ask yourself.

**Adam Stacoviak:** If you think where we came from, though, which is sort of what our retrospective is, like where did we come from -- we used to deploy a WordPress via rsync; we version-controlled the theme itself and shipped that to GitHub. It was essentially just an rsync push, so to speak, through SSH, to the server, and it dropped what was there and replaced it, and that was us updating the site before in terms of how it worked.

It was WordPress -- and then you had to go in and do WordPress themes, plugins and things like that. Nothing against the WordPress landscape or the stack that is that - it's great for some people - it just didn't fit our future. That's where we came from. It just didn't fit the hacker to the heart mindset that we have now.

\[01:04:16.06\] Now -- Gerhard, thank you. You've definitely taken us into the future, so no knock against wood at all, what you've done, just the comparison of like -- some people have to be thinking "Okay, you did this... Why did you go bespoke, versus go "mainstream Kubernetes"?"

**Jerod Santo:** Right. Well, I think Kubernetes isn't mainstream.

**Adam Stacoviak:** Well, it's becoming... It's certainly the name now...

**Jerod Santo:** Amongst large corporations, right?

**Adam Stacoviak:** Sure, yeah.

**Jerod Santo:** You see all the big names using it, but where are the one-off agencies, the small startups? I think they'll get there as well.

**Adam Stacoviak:** This is that year, I bet.

**Jerod Santo:** Okay, you heard it here first. Adam Stack - on the record, this is that year.

**Adam Stacoviak:** This is that year.

**Gerhard Lazu:** I think it's very easy and it's very exciting to focus on the tools and focus on what it's cool, and it's very easy to forget - even I do that myself... They're just like a means to an end; they're not the end in itself.

Just as I said about Pivotal Tracker before, it's not about using Pivotal Tracker, it's about using something which helps you follow a process which has proven itself time and time again, and it fits really well most development scenarios and most themes. Same thing with Kubernetes or Cloud Foundry or whatever the next big thing will be.

Right now they're still very smart; they still require -- I don't know the Kubernetes stack as well as I know the Cloud Foundry stack, but there are many complex parts which are put together and have a very specific role, and they mostly work well, but sometimes they don't. I get to see a lot of the scenarios when they don't work well, I get to debug those scenarios, and it is complicated. You need a lot more people to maintain a system like that.

So the question would be "Why do I want this 6, 7 hosts, these two instances or whatever VMs deployment of a platform as a service to manage this one application? It doesn't even make sense." Of course it doesn't. So then you go to a hosted solution, and there are many companies which already do that; they offer Cloud Foundry, Kubernetes... We could go to Google directly and say "Hey, can we just run this on your Kubernetes deployment? That would be ideal", and you would find yourself that that migration from where we are now is easier than if we had gone from the WordPress days.

So it is just a transition, and we are going towards the future. However, as Jerod said, the future is always a few steps ahead, and you have to pause and be mindful of the landscape, because it keeps shifting and moving. What was great yesterday or today, it won't be so great tomorrow; there will always be drawbacks, and we never know all the failure scenarios because it hasn't been in production long enough.

So it's discovering all these things, letting it mature as some say, and then, when we are comfortable that we're gaining enough making that change, but always focusing on what is important for us, how easy it is to achieve that, and is it worth it? Because it maybe never will make sense to go to Kubernetes; maybe what we have now is enough.

**Jerod Santo:** Real quick - we were talking about our migration from WordPress and where we come from. Humble beginnings, Adam... If you recall, before WordPress there was Tumblr.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** WordPress had a lot of Tumblr baggage in the form of a whole boatload of redirects from old Tumblr URLs to WordPress URLs...

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** \[01:07:57.27\] Now, Gerhard, you know we brought with us a lot of redirects as well, and some of the fun of getting the new system set up was you and I kind of debating about how we go about implementing those and where they fit into the Stack, because of course, with NGINX in front and the application routing, and a CDN, we could deal with those in multiple places; we ended up having NGINX do it. But Adam wanted me to bring the Tumblr reader along with us, too...

**Adam Stacoviak:** I'm a pack rat... A data pack rat.

**Jerod Santo:** Yeah, you're a little URL hoarder... \[laughter\] He wanted to keep those redirects from years and years ago, and I had to show him - "No one's hitting those, man... It's not a worthy effort." But we did bring with us a bunch of WordPress redirects, which I hope was worth the effort.

Real quick, because we're getting low on time - Gerhard, let's do our quick retrospective, and the three of us together can talk about what went well, what didn't go so well, where we were lacking, where we were great... What are your thoughts?

**Gerhard Lazu:** I think our biggest achievement was capturing the entire lifecycle of the infrastructure in a pipeline. We have Concourse to thank for that - the Concourse Ci (the URL is Concourse.ci - a very convenient domain). It allows us to have a bird's eye view of everything: backups, infrastructure updates and deploys... And it makes it easy to plug into Slack or S3 or any resource which allows us to very quickly assemble a view which makes sense to us.

It's easy to see when something works and something doesn't work, and it's easy to just cue in other backups, cue in other deployments if you want to do it manually. A lot of this stuff is automated, it just happens; you don't even have to think about it... And I think that is a big shift. Going from rsync to something which not only does it for you, but it gives you a bird's eye view... It's so valuable.

**Jerod Santo:** Absolutely. And some of that - which we didn't explain exactly how all that works, but every time we push to master on our public GitHub repo, Concourse kicks in and runs that pipeline for us and does a redeploy. So we very much have that desire, from a developer's perspective, "Just let me Git push, and get out of my way", but we also have the insight -- like you said, there's a dashboard that Concourse provides; we can go and watch the pipeline run, watch it fail, watch it get stuck, or whatever it's gonna do - most of the time it passes - and react as necessary. That's very cool.

The backups work very well, we have notifications that work very well with regard to deploy success and failure, site down, we're using Pingdom for that... There's a few other checks in there, not just for the website being pingable, but also for some performance, like how many milliseconds does it respond with - that kind of stuff, which is all provided via Pingdom.

All of our logs are in a single place, which is really nice... So anytime there's something going wrong, we can go to one dashboard (we use Papertrail for that) - everything logs to Papertrail, instead of into a syslog or into their own containers, or what have you. So we have a unified logging interface, which is great when things go wrong as well.

Those are all features that I'm not sure if we mentioned all of them so far... And all that works really well. In terms of things that work well - all of that works really well.

**Adam Stacoviak:** \[01:11:48.00\] I like it when I push to master and it just goes... It's really great to be -- I'm less in back-end code like you are, Jerod, so I play more of a wingman, very much an assistant on our application... Mostly on the design front, usually, content front, things like that, so it's nice to not have to have done something complex to be like "Okay, can I deploy?" Whereas with past applications, without this CI pipeline, I had to have an SSH key, my machine needed to be configured properly... Whereas now it's like "Okay, I Git push to master and I walk away."

**Gerhard Lazu:** Exactly, and that's just like the surface, and every single (modern) CI will do that for you... But concourse goes a lot deeper than that, and a lot of the features which are like at its core we're still not using. For example, every single build runs in its own container. All the containers that we use to run the builds, they are using Docker images, which we produce, which we maintain, and they're on our Docker Hub account. So it embraces this concept of container, and everything that runs inside Concourse does so in containers.

Now, when it comes to Docker and the image format, most don't know that Concourse actually is using Garden. So it's not using Docker; it's using Docker images, but it runs the containers inside Garden. That's actually the containerization technology behind Cloud Foundry. It just goes to show that it was a choice that we made early on, and we made it knowing this factor (me knowing this fact). And we have this Docker image format and the container image, which allows us a level of flexibility and a level of repeatability which was not possible before. That's why whether we use Docker or something else it doesn't really matter, and we choose and use different things based on what makes sense. But the container itself I think is here to stay. Whether it's going to be Cloud Foundry, or Kubernetes, or whatever else, the container as a concept is very valuable, and we are definitely on the bandwagon on that hype, the container hype.

**Jerod Santo:** We're on the container hype.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Yeah... Get on that hype train. So real quick because we're short on time, Gerhard, in your eyes, and I'll share one as well, but what's something that isn't working so well or didn't work well through the process?

**Gerhard Lazu:** I think one thing which I wish -- sorry, do you wanna go first?

**Jerod Santo:** No, I was just gonna make a joke about my SSH keys... Go ahead.

**Gerhard Lazu:** \[laughs\] Yes, that's the one thing... \[laughter\] Jerod was too old-school for some of the new stuff.

**Jerod Santo:** My SSH key was so old-school that a lot of the more recent versions --

**Adam Stacoviak:** Oh, I do remember that.

**Jerod Santo:** Yeah, I literally couldn't log in; I got rejected because my keys were too old... Actually not just by our new stuff, but by other servers that I'd been managing all of a sudden I could no longer log in... Because I think Ubuntu, our recent kernel update or some recent version of the SSH daemon would not accept my keys any longer, so... Talk about kicking and screaming - Gerhard actually rolled his eyes pretty hard when he realized how weak my SSH key was. He says, "How often do you rotate this?" and I said, "Rotate it? Why would I do that?" \[laughs\]

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** "...then I gotta change it on all the servers I control." But...

**Gerhard Lazu:** That was a fun one, yes. You're right, that did not work well.

**Jerod Santo:** That did not work well.

**Gerhard Lazu:** No. I think one of the things which I wish worked better - it didn't work so well - is this homegrown stuff, the homegrown stack. It had some pain points, specifically about some components not interacting very well together. We had the Docker incident, I believe, and I wish -- well, it's a difficult one because the pipeline and our system could not have healed itself, so to speak; I mean, healing just basically means stop it and start it again. The majority of the times that actually fixed it.

\[01:16:09.05\] I don't know, I haven't used it as much as you have, Jerod, so I think you or Adam would be in a much better place to answer this question.

**Jerod Santo:** Right. Yeah, so I think from our perspective - and mostly it's mine, because Adam, like he said, plays more on the front-end, and when things are not going so well, it usually means dealing with them, I think that mostly it's not really technology that didn't work well; I think that it's knowledge transfer.

We have everything in the Pivotal Tracker that we did and that we set up, but it's not like it prognosticates problems and how to fix them, right? So basically it's that because you are the architect of this system and I've been following along, but not necessarily internalizing every aspect of it like you have, when things do go wrong, I'm very much either kind of troubleshooting in the dark (I've been doing that for many years now, so I can find my way out of problems), but then I feel like "Oh man, now I gotta bug Gerhard because I can't figure this out, or I'm afraid to live update this, or stuff like that."

So mostly it's social and not technical, where I've felt that feeling of "Oh, I don't wanna nag this person, but I don't have the confidence to make this change; I just wanna make sure that I'm correct before I do it." So I've had a few of those instances, but not many,

**Gerhard Lazu:** Well, in response to that, I do have to say that I really enjoy this stuff; I really love infrastructure and how everything fits, and that's why I love doing it even in my free time, because I learn things and I do things differently than I would do in my day job. I do hope that not before long we will move to a hosted system, so if we moved away from the infrastructure as a service and we move towards a platform as a service such as a hosted Kubernetes or a hosted Cloud Foundry - and again, there are many companies which do that, some better than the others... But the point is if you have people that manage this and it's a well-documented and a well-known process -- Heroku, for example. That was the first platform as a service - the first popular one, for sure... So if you use something like that, some things would be easier and you wouldn't have these problems. But at the same time, you'd need to invest a lot of time moving your workflow, which requires local state and local storage to something that everything is stored in different systems, and you have like stateful services and you query them and stuff like that.

It would complicate the application a lot, and you'd need to do things differently than you do today, which you're very comfortable with... So you have to ask yourself what do you wanna change? Do you wanna change how you deploy things and how everything fits together, or do you wanna change your day-to-day Changelog workflow.

**Jerod Santo:** I just wanna change me. \[laughter\]

**Gerhard Lazu:** You want to automate you.

**Jerod Santo:** No, if I just -- the more and more I get it... That's what I was joking earlier about - I'm just learning this stuff, Adam... Because I am. I'm figuring it out, I move slowly towards a level of autonomy, where I get the confidence that you already have, and I know the solutions that you may already know, so when things do go wrong, I just understand how to take care of them. That's what I would prefer, and that's why, like I said, it's not a technical issue with the process or the solution, it's just kind of an institutional thing that takes time to fix. Because I don't love infrastructure and management of those things, but I do enjoy them enough that -- to keep things simple and to have us focusing more on what we love to do, which is really producing content and creation around software development and enriching the lives of developers... I just wanna get the confidence that you have, and I think over time that just happens... For me. So that's what I want.

\[01:20:22.11\] If I don't wanna do that, often times for my clients, I just have them set up on Heroku, because that way they don't rely upon me to play that role that I'm currently relying upon for you. It's just like, "I'm stuck, help me!" So it's great in that sense, but for us, I love that we can have so much control and get our hands dirty with regards to how we run everything.

**Adam Stacoviak:** That'd be an interesting conversation to earmark, Jerod... The developer experience aspect of Kubernetes, or "the Gerhard way", which he did for us, or something like Heroku, which obviously they're all different workflows for different types of applications, and where their pros and cons lie.

**Jerod Santo:** Yeah. Well, I think that we're hitting up against our time here, Gerhard. This was a great conversation. Of course, maybe we didn't say it, but thank you so much for everything that you've done for us and with us.

**Adam Stacoviak:** Yes, absolutely!

**Jerod Santo:** It's been a heck of a ride, and I'm glad that we've made a new friend out of it. In fact, I got to visit Gerhard in London when we were there for OSCON, so I got to go to the Pivotal offices and play some ping-pong with them, show them how to play ping-pong... \[laughter\]

**Gerhard Lazu:** I remember it differently, but go on, you're the guest... \[laughter\] Sorry, you're the host, I'm the guest, so we'll just go with it.

**Jerod Santo:** That's right. It's our show, so we can say whatever we want. \[laughter\] So yeah, just from us and from the Changelog, we thank you so much for everything that you've done; it's really awesome. Any last thoughts from you on this, or some key takeaways, or anything you'd like to say before we close up?

**Gerhard Lazu:** I've enjoyed it more than you think. I got a kick out of it, because I got to help you and I got to see validate some of my ideas and some assumptions which I had. As a key takeaway to our listeners, I would say always, ALWAYS focus on what you're trying to achieve - that would mean knowing what you're trying to achieve - and do not focus on the technology and don't focus on your tools, because they're means to an end, they're not the end in itself. You have to know them and you have to love them, but they're just there to help you.

**Adam Stacoviak:** Well said. Gerhard, thank you so much for your time today, thank you for all you do for the open source community, and especially thank you for what you've done for us here at the Changelog. It's been awesome working with you, and thanks for coming on the show today, man.

**Gerhard Lazu:** It was my pleasure. Have a good one, everyone!
