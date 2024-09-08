**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. My name is Justin Garrison, and I'm your host, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Good. This was a good interview.

**Justin Garrison:** This is fun. It was not at all where I kind of expected the conversation to go, but I had a lot of fun with it.

**Autumn Nash:** I thought so, too.

**Justin Garrison:** Had you ever heard of System Initiative before?

**Autumn Nash:** I hadn't. I spent some time listening to Adam's interview, because I really like the Friends interviews, because I always think they're really interesting... And his life was wild; just his whole -- like how he got here, and the different things, and... Who would have thought that cartels and ISPs could be related, and... So I was really excited to see what he came up with next, because it just seemed like he had so many cool, like "Hey, I was really into this, and I ended up doing this." You know, what a way to have a career just built off of like --

**Justin Garrison:** Well, and people think that there's a single path for any career... It's like --

**Autumn Nash:** I think that's like the most toxic part about engineering, is everyone's like "And you have to have this background, and do LeetCode..." And I'm like, all the coolest people I've met in technology have the craziest, like, a roundabout way of getting here, you know?

**Justin Garrison:** Yeah. I also like that you brought up the cartels and ISPs, because that ties into my outro... And so we'll have fun talking about that.

**Autumn Nash:** Wow, Justin. Wow.

**Justin Garrison:** Teasing it. I was like, you brought it right up.

**Autumn Nash:** It's always a rollercoaster with you.

**Justin Garrison:** So today on the show we have John Watson and Scott Prutten from System Initiative. They're both infrastructure engineers. And System Initiative is a new idea and way of managing infrastructure, which I had played with last year in their early betas. I literally have their... Where was it? Oh, I have their... Oh, man, I put it away. I have coasters from their... They called it Team One, or something like that. It was like people that beta-tested it. And so I was beta-testing it last year, so I knew a little bit about it, and knew it was eventually going to be a hosted service... But they've come a long way, as any startup product does, in a year. So I was really excited to jump into this with John and Scott.

**Autumn Nash:** That's really cool.

**Justin Garrison:** Yeah. So let's go ahead and just go right into the interview, and then we're going to come back and talk about a couple of different topics. Some long reads, as I'm going to label this one.

**Break**: \[00:06:18.11\]

**Justin Garrison:** Thank you so much, John Watson and Scott Prutten, for coming on the show today to talk about what you're doing with System Initiative, and some things that I've found really fascinating about how you are building it and how you're hosting it.

**Scott Prutton:** Thanks for having us.

**John Watson:** Thank you, thank you, thank you.

**Justin Garrison:** Can you just start usually by -- so we start by what infrastructure or applications or software are you responsible for.

**Scott Prutton:** So John and I are both responsible for running the SaaS operations of System Initiative. Broadly speaking, it's a pretty traditional app. We have some services, they talk to a database, they communicate to each other over NATs... And we're responsible for making sure all of that, and all of the supporting infrastructure is up and running. So load balancers, databases, multiple environments, all the build and CI/CD stuff... Kind of the whole thing, we do it all. So yeah.

**Justin Garrison:** If people are listening to other Changelog shows, Adam's been on a couple of times recently on various shows... Can you describe System Initiative for people? We know the rough architecture of it, but what does it do? What's it for?

**Scott Prutton:** Yeah, there's a slide that Adam reads out to us every week, that has a really succinct 30-second elevator pitch that I don't have memorized, so I'm going to butcher that... But I like to think of it as like a hands-on way to design and build your infrastructure. I worked as a cloud architect for years, and most of my job was like drawing diagrams, and showing them to people, and then building what was in the diagram. And I like to think this removes some of those steps. And it basically is the diagram is your infrastructure, and whatever's in the diagram is a real thing, somewhere in the cloud, that you've built and you're hosting. So it's that kind of tool. How do you feel, John?

**John Watson:** \[00:08:08.18\] I think it's - yeah, pretty much what Scott said. There are a lot of tools out there that let you kind of create an architecture diagram, right? But none of them actually let you interact with the architecture. They're separate. So maybe you use Terraform to make infrastructure changes, but then reference a static architecture diagram, that you have to update frequently, and things like that. So System Initiative basically pulls those both together. So you can interact directly with the infrastructure, create VPCs, restart EC2 nodes, run SSM documents against different autoscaling groups, various other things, directly against the diagram... Which is pretty cool.

**Justin Garrison:** And a lot of that assumes that, I guess, you have those APIs to do that automation. How would I do System Initiative for on-prem?

**Scott Prutton:** I mean, effectively, everything we do is a function running on a graph. So if it has an API, we can integrate with it in some meaningful way. So if you think about the diagram, and it's a bunch of boxes with arrows pointing to each other... Let's say the box is an EC2 instance. Under the covers, there's functions that we run, that integrate with the AWS API, and say "create EC2 instance", "delete", etc. So depending on what you're using on-prem, if there's some available API that we can talk to, you can build components and assets, and basically design the whole thing to work and run whatever functions it needs to run to create and have the infrastructure be managed.

So it's not just AWS that we're managing. You can interact with Docker images... I know that John's been starting to tinker with Google Cloud... There's some other small integrations that we've built... I've built some stuff with GitHub... So if it has an API, if you can interact with it programmatically, we can make it happen.

**Justin Garrison:** Where does that border end for "Hey, I'm going to create an EC2 instance, and then I want to SSH in and run a command?" At some point you could do that a variety of different ways, and there are, I guess, API-ish things that kind of expose that. But where do you see System Initiative stopping?

**Scott Prutton:** I know that Adam has like a lot of opinions about this. We've talked about this specific thing in particular... He would love it where you could click on an EC2 instance and we could just open a shell like right to it. And that is totally possible, because AWS has tools for that kind of thing. I think where we've been focusing, and how John and I have used it is primarily around like designing your infrastructure and deploying it. We actively manage the SaaS instance of System Initiative using another instance of System Initiative. So it's out there, and this is how we do our day-to-day work inside of it. And that's kind of where our focus has been. But what the tool can do today is, I think, very different than where it might end up in a year or two. There's a lot of opportunity there.

**John Watson:** One thing that we haven't really talked about is like the tool is basically like an authoring tool, and an architecturing tool. There's two very separate concerns within the application, that are both key cornerstones to the value proposition. So not to turn this into a sales pitch or anything, but basically, as Scott was saying, you can author support for basically anything that has an API. And what that lets you do is imagine against the EC2 assets or the EC2 kind of components, you can add your own custom functions. So imagine you ran a Java app on an EC2 node, for example, or an auto scaling group. You could write your own custom business function, or private function, whatever you want to do, to say "Log on and delete this dodgy file that says the health check's passing." that's how most -- everyone knows there's dodgy files... So whatever your business function is, it will let you do it. You author the function, and it will go on, and you can run that as like a runbook.

\[00:12:08.29\] One of the ways that I've been using it is like I wrote a function for us internally that runs an SSM document against all the EC2 nodes in a particular group or function, and hits USR2 code against the binaries that are running, and it will bump the log level, and that's how our internal applications will respond. So if you're running your application differently, or -- you can write something that interacts with them.

**Autumn Nash:** How did you guys end up at the startup, and what did you do beforehand?

**John Watson:** My story is genuinely true. I was working for another startup in Manchester, and someone in the internal infrastructure engineering chat posted the job and said "Look at this ridiculous, out there, reach for the stars kind of thing that none of us can kind of get", and I was like "Hang on a minute..." And I applied for it, and got it. And that's genuinely true. I got the role. And I had heard about System Initiative in the first place.

**Autumn Nash:** I feel like you are so much fun, between the fact that you've got a mustache as a joke for a picture, and then that job story... You have to be so much fun to work with. That's awesome. What about you, Scott?

**Scott Prutton:** I worked at another startup as well, and it was a database company... And it was weird, because -- I don't know, I feel like I didn't really know or care that much about databases, but I worked at a database company, so it wasn't a great fit... But I knew somebody on the inside here that convinced me to apply for the same job as John. And when I interviewed with Adam, I told him to his face that I didn't think what he was doing was actually going to solve the problem. I was like "I think you described the right problem, but I don't think this solution is really the right solution, but I'm willing to give it a shot." And he was cool enough about me telling him he was wrong that I was like "Maybe I want to work with these people." And everyone else that I interviewed with was like -- it was almost more like "I want to see what we can do, because it seems like a really solid group of people, and a cool idea." I'm bought in now, but I was a detractor when they hired me.

**Autumn Nash:** I think that's almost good, though... Having different varieties of opinions in the room, and people that are willing to listen, and people that are willing to question you, and to want your product to be better. Maybe if you completely didn't agree with the idea overall, but like - that's how you make things better when someone's not going to just like kind of "yes-man" you, you know what I mean?

**Scott Prutton:** Yeah, for sure. Like, disagree and commit. Everyone gets a chance to say your opinions, pick the path, and go down the path, for sure.

**Justin Garrison:** Wait, did you work on Amazon before?

**Scott Prutton:** No.

**Justin Garrison:** \[unintelligible 00:14:48.29\]

**Scott Prutton:** I've read some stuff... Yeah, yeah, yeah.

**Justin Garrison:** Oh, I'm sorry. I have I have PTSD from disagree and commit for RTO, and... \[laughter\]

**Scott Prutton:** Yeah, I worked as like a manager for a while, so I picked up a lot of like fun buzzword sayings that I can throw around when I want to, you know...

**Justin Garrison:** So at this point you're both there, and you've bought into this idea of what System Initiative can do for infrastructure management so much that you're hosting your SaaS with it. You said you had another version or another copy of System Initiative that is hosting this initiative. So it's kind of self-hosted in that way, right?

**Scott Prutton:** Yup.

**Justin Garrison:** You kind of said the basics of it. It was EC2 instances, with NATS in a database, right?

**Scott Prutton:** Mm-hm.

**Justin Garrison:** How does that work when you're doing that for a SaaS? Is it a multi-tenant application? Are you running multiple versions per customer? Are you -- I mean, I guess it's coming \[unintelligible 00:15:50.00\] So it's like, you're getting there.

**Scott Prutton:** \[00:15:52.16\] Yeah, we're getting there. It is multi-tenant. There are some version of the future where we might run - I won't say like instance per customer, unless somebody really, really wants that... But maybe some like hybrid, they host part of it in their cloud... Most of the infrastructure is very standard, but we have our engine that runs the functions that anybody can write. We use Firecracker to spit out VMs, and run isolated code. So that part's a little unique. But yeah, it's pretty standard otherwise.

**Justin Garrison:** You're managing Firecracker yourself on EC2, not doing it through Lambda?

**Scott Prutton:** Yeah, exactly. So we built this whole thing - we call it Veritech. Adam and friends are -- whoever builds a service gets to name it.

**Autumn Nash:** That's awesome.

**Scott Prutton:** Yeah. So I can't remember now where Veritech is from, but it's from like an old anime.

**John Watson:** It's like a robot or something, right?

**Scott Prutton:** Oh, Robotech, I think. Is that it?

**John Watson:** Yeah, yeah.

**Scott Prutton:** So yeah, we have we have a thing called Veritech. It creates cyclones. Cyclones are basically a little server that runs inside of a Firecracker VM, that runs the untrusted code, and then returns the response back to Veritech. So John and I built like a VM instance that we spin up on demand. We have a whole pool of them listening, waiting for work, and they're single use. So you send code to it, it runs the code, and then it tears itself down. So we can run like thousands of these in like a second, more or less, get a lot more throughput. It is what Lambda uses under the covers, but we have a lot more control over it. We don't have to worry about timeouts, and cold starts, and those kinds of things. It's pretty cool.

**Autumn Nash:** What's it like going from solutions architect to infrastructure engineer? Because you're the first person I've ever met that has the same background as me... And I think people side-eye solutions architects and think that they're not super-technical, which is a total lie. But yeah.

**Scott Prutton:** Yeah, I've done everything. I started in QA, and I was a manager, and I was an enterprise architect, and like a software architect, and a cloud architect... And I was a manager at my last job for like a month, and then the team I was hired to manage was like disbanded. And then they're like "You're an engineer now", and I was like "I guess I'm an engineer now." And I rediscovered my love for building things there, and it was like "This is what I really want to be doing." So I don't know, I fell into not engineering roles just by like inertia, and being the loudest voice in the wrong place, I think. So yeah, I don't know... I feel like I have the chops, and I'm not afraid to use them.

**Autumn Nash:** It's good that you're good at disagree and commit. I think that's an important skill.

**Scott Prutton:** Yeah, for sure.

**Break**: \[00:18:37.16\]

**Autumn Nash:** What are you guys both most excited about with the future, with the startup? Because it sounds like a really cool idea.

**John Watson:** I think for me it's like "Yeah, we're hosting a SaaS with our own product", which is certainly unique. There's not many companies doing something like that. And that was awesome; what a milestone. And now we're in like the management phase, and we're still kind of learning how to effectively manage what we've built, which is pretty fun. I was talking about actions earlier, and I think that's like absolutely a cornerstone of the fun bit of the product. You could have created the infrastructure in any other -- well, any AIC tool if you wanted, but you can't interact with it the way that we're doing it. So in my head, I'm thinking like "The interaction phase - how can I manage it super-flexibly, and interact with it and manage it in ways that I couldn't before?"

**Justin Garrison:** What was something surprising while you were building that out, that you're like "Oh, the tool can't do this thing that I need, or we should be able to do, or we were able to do with other tools"?

**John Watson:** Traditionally, you write some AIC, and it represents your infrastructure. And it's like "Cool, archive that." Right? "Now I'm going to write a pipeline to rotate all my EC2 nodes" or "I'm going to write a pipeline to \[unintelligible 00:23:43.07\] do something", various other things. You know the deal. You've run GitLab, or CircleCI, and a lot of those interactions you can just do directly against the infrastructure in a pretty nice way.

So imagine what you wanted to do was run a health check, and then when the health check passes, execute something. So we can orchestrate that. It's not really like a pipeline management tool, but you can do some of the pipeline orchestration directly against the infrastructure in context, if that makes sense.

**Justin Garrison:** You bring up an interesting point that I think has kind of been repeated with tools over the years, at least from my experience, where - like, early on config management days, it was like "Oh, everything's going to be Puppet, or Chef. That's the source of truth, and everything needs to be declared there." But then people would go around it, because like "Actually, I don't want to learn Puppet module syntax" or "I don't want to learn Ruby to do this. So I'm going to go do it in Bash. And I'm going to do it somewhere else, and I'm going to have a for loop that does this thing outside of the tool", and then your source of truth is no longer the source of truth. It's like true enough for some things, but not for everything. And that happens with containers; people can shell into a container and change things, and it happens in Kubernetes, and it happens over and over again, because the source of truth is not holistic enough for the entire environment. And that's not something that -- like, System Initiative is still the source of truth for the things under its control, but I could still go in and SSH and do those things outside of it, right?

**John Watson:** Of course, yeah.

**Justin Garrison:** So what makes System Initiative a better source of truth?

**John Watson:** Here's an example. You've got a security group, and the security group is "Allow all traffic on \[unintelligible 00:25:29.18\]

**Justin Garrison:** But for some reason it still doesn't work. I still cannot hit 80. Why?

**John Watson:** Yeah, yeah. Security groups are the pain of my life. It's always the security group; that's a rule.

**Autumn Nash:** Or DNS. Don't forget DNS.

**John Watson:** Yeah, yeah. Okay, fair. Fair, fair. And it's like, we've got these things internally called refresh functions. So inside the application holds a state of what that resource actually looks like inside AWS. So it hits AWS, EC2, I think, the security group \[unintelligible 00:25:58.02\] pretty much. And then it holds a copy of that JSON representation directly against the asset.

\[00:26:07.21\] So imagine you have an incident, all the houses are on fire, and it's like, it's always a security group, or I don't know... And somebody changes it in the incident. You could see that in the resource definition in that panel.

There's still some work in the future for us to -- we've got this thing called the attribute panel, which is basically like user inputs. And when you created the security group, you would say \[unintelligible 00:26:28.26\] And then the resource representation in JSON would have that additional security group that was added during the incident.

We're still working on how we would sync that back into user managed attributes, but you still would be able to see the representation that "Hang on a minute... We had an incident. We changed something. Should we put it back?" So in System Initiative it kind of exposes that delta at some level, and you could rerun the action that's lik "Update security group", and it would push it back to the original.

**Justin Garrison:** And that's the thing with all of these tools where something changes outside of something that I originally had intent to change. If I'm running Puppet on a host and I say "Put this file on disk." Like, I'm not managing Etsy hosts, but I'm doing resolve conf. So once someone changes Etsy hosts, it breaks me, but my Puppet manifests don't know anything about it, because like, I wasn't looking at that file. I didn't touch it. That's not me. That's something else that manages Etsy hosts. And the same thing happens with these tools over and over again, even with cloud APIs, where like if I'm setting the security group and I had two rules on it and someone adds a third, that rule wasn't me... Should it also manage that? Or I guess in some cases the refresh function is going to say "This is different." It knows that something changed and it has to find an intelligent way to say which pieces changed... Because everything changes all the time. This isn't like "This is easy because one rule changed in my environment." No. There's logs going everywhere, there's things that just change. Instances come and go. How do you do that intelligently?

**John Watson:** So if you think about the Terraform version of this, when you do an apply, it's like a three-way diff. It's what's in the code, what's in the state, and what's reality, and you have to smash everything together and go "If there are changes that aren't in the code, we need to get rid of them", et cetera, et cetera. It's just another way to describe the same problem. The product doesn't do it today, but it's very realistic that we can get to a point where we're just periodically refreshing and looking at changes in the environment and just saying "Hey, this is different." And how it could surface to the user - maybe that's a choice. Maybe some things it has like auto reconciliation, where it's like if somebody adds to these rules, delete them. Or maybe it pops up and says "The environment's different than what you've said here. Do you want to make the environment look like what's here, or do you want to make here look like the environment?", to try to make it like a real time representation of what's actually up there... And you kind of make a choice then "What's the source of truth? Is it the infrastructure or the representation of the infrastructure?"

**Justin Garrison:** And that's the Kubernetes control loop model, right? ...where it's like "Oh, I own this deployment \[unintelligible 00:29:11.20\] and that's pods, and I will make it look exactly like this back over and over again." And then that's been extended; so cross-plane exists as a thing that creates infrastructure, and it has control loops that say "Oh, go make that security group for me, and reconcile it over and over and over again." And the two things that I've really struggled with is, one, API limits in any cloud. Once you're saying "We're just going to refresh this all the time", and then you're like "Oh, I have a hundred --" Like, once you have two, it's fine. When you have a hundred, you're like "Oh, guess what? The cloud doesn't let me do that." And at some level you can only raise your API limits so far. So you have to take a balance of like "Well, what am I able to do, and what is actually possible?"

I think Kubernetes did a good thing here of like it tries not to by default manage things outside of itself too much, or at least not in reconcile loops. Load balancers are one of those things where it's like it will constantly check those, but it tries to do it in a way that's like "I'm not going to hit API limits for load balancers." But the second thing is that copy of what is true. That diff of like "What do I think the state is" versus "What does the cloud think the state is" versus "What does the Linux file system know the state is"? Just like all these versions of truth around. And reconciling that is always computationally expensive, at some at some level of complexity or some level of scale.

**John Watson:** \[00:30:36.00\] Sure. Yeah.

**Justin Garrison:** And I don't think that the Terraform "shove a JSON file in S3" is necessarily the right model either, but I also don't think that it's Etcd. And there has to be some other middle ground to make it so lik "Oh, this is truth enough that this isn't going to fail for me." Or it should fail a fewer amount of times.

**John Watson:** I think what's very different about what we do is that ours is not really a three-way diff, it's like a two-way diff, because we don't have a code representation of the infrastructure. Like, what the UI is serving is the representation, and in the backend it's just a giant graph. And the graph has nodes and edges that describe all of the different components that build up what you actually see. So it's a diff between those two things.

**Justin Garrison:** But the UI representation is like some form of code. I'm not like writing HCL, but it does need to diff that into -- it's Postgres under the hood, right?

**John Watson:** We store the actual data of -- like, a node on the graph gets stored in Postgres, but the actual graph itself, the whole thing, it's stored like piecemeal, basically. And addresses to nodes are stored in Postgres. But it's not like a relational database; it's like a math, like a -- I don't know how to say graph without saying graph.

**Autumn Nash:** Is it a graph database that's putting information -- like, but the actual information from those nodes are being stored in Postgres?

**John Watson:** Yeah.

**Autumn Nash:** Wiz is built on a graph database. Is it the same kind of concept, I guess?

**John Watson:** It sounds similar. The actual like information from the nodes on the graph -- on the graph, they're just an address, and the actual hashed \[unintelligible 00:32:20.04\] and hashed bits are the address, and the rest of it's just shipped off into Postgres, or in memory, or on disk. We have layers of where we store them, depending on like how quickly you need it.

**Autumn Nash:** Your actual graph, is it a database? I guess - I don't know - it's a data structure, but like they actually have graph databases? Is it like --

**John Watson:** No... Probably not in the way that you're describing it, or I'm misunderstanding and I don't know.

**Justin Garrison:** And that was one of the things I was curious, because Postgres is storing the data, and then the application is putting the links between them. Because it's not like -- not Node.js. What's the -- Neo4j. Neo4j has a graph database -- or the graph database layers on top of Postgres. It isn't what you're actually doing. You're storing the data and metadata about the endpoints, and then you're linking them together in the application.

**John Watson:** Kind of, yeah.

**Autumn Nash:** Yeah, because some applications will actually have a graph database, like Neptune or something, and then I guess it could either just store it in Neptune, or I could store it somewhere else after. But it holds all the relations between the different entities.

**Justin Garrison:** How is that different than storing that in a JSON? Like, you said, you can store it on a file system. So I could store this on a file system, and then if I squint, it looks a lot like Terraform, at some point. I'm like "Oh, it's a big JSON file", and then I can pull out the nodes out of it. Like, that's what I'm kind of trying to reconcile in my head.

**Autumn Nash:** The graph would be more accurate with you changing it on UI, I'm guessing, and keeping all those relationships straight and accurate, I would think.

**John Watson:** Yeah, you could make arguments about "Are you transforming HCL into some other representation on the backend?" Like, it's not human-readable. It's like a data structure. I mean, I guess it's human-readable if you try hard enough, but... You know. Yeah, so it just gives us access to be able to like walk the graph and do diffs about the relationships of the things that are there, understand conflicts, and know how to make changes between change sets.

\[00:34:17.10\] We have a model very close to Git, where you have like a head, and when you want to make changes in the infrastructure, you open a change set, make changes, and then basically push the changes onto the graph, and it reconciles and does what it needs to make that the new reality, and push it up to whatever cloud or whatever you're interacting with.

**Autumn Nash:** How do you make sure it's all secure without kind of shooting yourself in the foot at the same time? Because I feel like it's either -- like every automated security or automated anything, it's like, you want to automate things to make your life easier, and then at some point it makes it harder. So how do you reconcile all of that?

**Scott Prutton:** It's very hard to keep it secure. That would be my honest answer.

**Autumn Nash:** You're giving something -- the permissions to make things and delete things, and interact with each other... So how do you --

**Scott Prutton:** You mean between the components in the graph?

**Autumn Nash:** Yeah. Well, I mean, not just that, but it can make an EC2, right? It can make all these different infrastructure pieces.

So how do you then keep them secure that something can't go in and, I don't know, make a hundred EC2s on one of your accounts, or...? You know what I mean? Like a bad actor isn't doing --

**Scott Prutton:** So the hardest thing probably for us as a company to protect from is user-written code; unprotected, just raw TypeScript or similar, that we execute on behalf of users... And that's why we went down the road of Firecracker. Because that's basically the Lambda model. So we could have went for something lik, I don't know, a Kubernetes deployment running some pods, and each function runs inside its own pod. And we felt that this Firecracker model will scale better, and should in theory - because of the VM layer in the orchestration it should be more secure for us and our customers.

So security on that front, I think like all of the networking rules are written -- like, we've done it basically from absolute fundamentals. There's no networking controller on a node for us. There are specific IP routes that are permitted for each VM, through to public access, through to the OTel collector... And there's absolutely no way that is -- I don't want to say realistically feasible, but there are inhuman people on this Earth that might make it possible to cause like East/West traffic between different function executions. So it's basically impossible for them to interact with each other, within reason. You're asking how do we protect from the components influencing each other, hat's kind of what you're asking?

**Autumn Nash:** Well, I mean, also a human can be like "I'm going to go and --" I feel like it's weird how sometimes customers will use your product, and you think they're going to use it in a straightforward way, and then all of a sudden they're like "We want a thousand VMs", and like you don't want them to take down someone else in the process, or a malicious actor to just DoS attack you, you know?

**John Watson:** I'm very fortunate, because Scott is great, and I've never looked at what he's done in our workspace and been like "Dude, what is wrong with you?" So that's amazing. But each -- so we've got this concept of workspaces and change sets. So I hope this answers your question... Basically, that if you're collaborating on a change set - so imagine Scott's doing security groups, I'm doing the compute, and we're going to create this infrastructure, a bit like the way you would git apply it to head, or git apply it to main, it would be like, I'd try and apply it and it'd be like Scott gets an opportunity to review it before it goes into head and that stuff actually gets created. It's a very Git-like model. And there's various -- we're still to implement, or there's a bit of work that needs to go in on RBAC. So different roles, like viewer, editor... I don't know, applier... I don't know what they might be called. But that would improve that kind of posture, like you've got in Git.

**Scott Prutton:** \[00:38:27.26\] And let's say somebody starts using the product and they try to create 10,000 EC2 instances all at once... I mean, we have pretty rudimentary resource limits and things on the size of the VMs that we create, and like throttling, and how many we can run at a time... So ideally, all that happens is that it takes a long time for them, and other people aren't really slowed down by it... But that stuff can always become more sophisticated, and we can do rate-limiting, and try to distribute workloads and that kind of stuff as well.

**Justin Garrison:** One of the things, Scott, you mentioned earlier about making the diagram, the infrastructure or the more truth infrastructure representation is I love drawing and diagramming, and every job that I've had, when someone's like "I'm describing the thing to you", I'm like "Can you draw me a picture?" Because I want to see it. I want to see what you're talking about, and I want to understand it better in a picture form. But one of the things that sucks in pictures, and I've never found a good way to represent it, is things that happen over time. Things that need to happen in series. And I used to work in animation, and I loved animation for this. Like, I've started drawing my own animations of like "This is how this thing changes", because it's showing you the thing over time.

And one thing we can't do easily in a static representation of a diagram is like "I need to go from architecture A to architecture B. How do I get there?" And in our heads, as administrators and architects and as developers, we know the steps that we need, and I'm assuming you would have to build some of that logic into a function that owns that migration process. If I'm migrating a database or something, or I need to do table schema changes, the database can handle most of that stuff. But there are things that it's like "Oh, I have to do this in a certain step. I need to make sure that application two is deployed everywhere, I need to make sure that the database schema has migrated, and I need to make sure that application one is gone." Right? Like, you need to do those things in an order. How does System Initiative handle things like that order for things that have to happen over time?

**Scott Prutton:** Sure. It's a good question. The way things mostly work now is determined by the relationship between different nodes. So if I have a VPC and I have subnets and I have route tables, and I want to create all of those at the same time, the subnets rely on output from a VPC. I need the ID to know where to create the subnet. So just that relationship alone is enough to tell us when the create actions, for example, need to get run.

**Justin Garrison:** So if I want to delete a VPC, you're telling me System Initiative can properly find the ENI that's still stuck attached to an EC2 instance, and delete it properly?

**Scott Prutton:** Theoretically...

**Justin Garrison:** I don't think that's possible, but it would be lovely if that actually happened. I'd say "delete the VPC", and it all cascades properly in order.

**Scott Prutton:** If it's on the graph, and you can see it, you can queue up the deletes appropriately and make it go. I mean, we're still limited by the nature of physics in AWS APIs, both equally limiting... But yeah, a lot of how things work today is just based on relationships. We've talked about more sophisticated systems, that let you describe something, maybe like a workflow, or to define the order of actions and maybe make decisions about "Run action B if action A fails", those kinds of things... But for the most part, it's just like "I need this to exist before I can make this next thing. So I'll wait till it exists, take the output, make the next thing", and just kind of walk down the path.

**Justin Garrison:** \[00:42:10.16\] And that still assumes that I'm the creator of those nodes, right? Like, I can't point it at my AWS account and say import. Like, you go figure out everything I made. Or can I?

**Scott Prutton:** Not yet. But that's definitely something that we want to do. Both like importing existing infrastructure, like I want to pull in a single VPC, or like "Hey, walk through my account and bring it all in, and show me what it looks like." I feel like that that's kind of the dream. And we have all the things in place. Running a refresh means basically going and getting information about it, so... I think we can get there. I think it'd be really cool.

**Justin Garrison:** Yeah. And that makes a lot of sense to me, that it was always kind of the dream of Terraform, to like - hey, you technically could do the same thing of "Terraform, go look at the API" and then spit out the HCL that would give me that thing. But a lot of times how those things are structured dependencies-wise, of like "I need the variable from here to go into the variable of the other thing" is not a direct one to one, and Terraform could either go "Everything's a variable" or "Nothing's a variable" or it makes that -- how do you tie those things together, it's really difficult in a textual code representation.

**Scott Prutton:** For sure.

**Justin Garrison:** And it seems like it could make a lot more sense in a visual, "These things are linked." Whether you need it to be a variable or not doesn't matter.

**Scott Prutton:** Yeah, absolutely. I think it makes a lot more sense in this kind of model.

**John Watson:** I really want to reflect back on what you were talking about, Justin... You know, deleting a VPC; there's an EC2 and a subnet, and there's an ENI attached to that EC2 instance, right?

**Justin Garrison:** The struggle is real.

**John Watson:** Yeah, yeah. That's a legitimate infrastructure problem. So within System Initiative, we have these things called edges and nodes. So edges are basically what you can connect between different nodes. So your EC2 has an edge for subnet, and that connects to the subnet ID of the subnet component, if that kind of makes sense.

So imagine in your world, you're like "If I try and delete that whole thing right now, there's nothing that tells the ENI to delete first, because there's no edge." And what you would do in System Initiative, you'd select the whole frame, you'd hit Delete, and it would fail. And then as a user, what do you do? You're empowered to go into the authoring, add the relationship, add the socket to both sides of the equation... So you could put it on the VPC, for example, and you'd also put it on the ENI. Connect them, and then the system would understand the relationship in that graph database between the two objects, and be able to orchestrate the delete more effectively.

I'm pretty passionate about this, because it's super-empowering. You can legitimately fix that problem in like 10 minutes, contribute it back, and then everyone benefits in the same way you do, in a similar kind of manner to Terraform modules. It's just a lot less like tedious, and you can see the result super-quick.

**Justin Garrison:** I don't think we have enough time to dig into that collaboration model, because I do think that's really interesting. Not only the collaboration in contributing back to those functions, but the collaboration of two infrastructure people looking at the same diagram, and acting on the same... Change set? What's it called?

**John Watson:** Yeah, change set.

**Justin Garrison:** Change set. So being able to do both of those things adds a lot of questions to me. Contributing back a function in System Initiative to say like "I want to extend this" immediately in my mind, working at enterprises for 20 years, is like "Do I have to get approval from OSPO for this? Is this code contribution? And if it doesn't go through GitHub, am I still doing the same thing?" All of those questions get answered to me as like a process and an open source quote-unquote person, "What does that mean for my contributions into that ecosystem?"

\[00:46:15.13\] But then the other thing of just like the speed of learning, of being able to basically pair program on infrastructure at any time with those sort of like share and collaborative links of like "Oh look, here's the picture. This is the change, and this is how it's going to be different. Does this look good to both of us?" And again, it's outside of that Git PR workflow, which we've all come as like "This is the standard for infrastructure, is you have to make a branch, modify it, push it, someone looks at your text and then says, "Yeah, it looks good to me" and you ship it." And then something else breaks down the line that says "No. Actually, the state of the world was too different than what you thought it was."

**John Watson:** So for me, when I joined System Initiative -- Scott, you said you didn't originally completely buy in. For me, I almost was anxious that I couldn't do git branch, write some code... It was safe... You know? And it was like a static reference that I could look at. Whereas in SI, you create a change set, and if you think of the change set as a branch, it's probably very intentionally not called branch, to not cause confusion; it's like a live simulation of what would happen if you merged it. The values of propagating and stuff through the change set, like your IDs and things. And it would know that that ID doesn't exist yet, because the resource hasn't been created. So you can see that. And it's almost made me uneasy, you know? But once you use it, it was pretty amazing.

**Justin Garrison:** So where should people go to try it, to use it and say like "Hey, this is the thing. I'm interested in what you're talking about"?

**John Watson:** So we've got a community of amazing Discord users, that you can join there and have a chat with us, join a call with us. And we're running a pre-release for users, and you can drop us an email, and we'll give you access and you can play and have some fun.

**Scott Prutton:** Yeah. Tell them the podcast sent you, and we'll hook you up.

**Justin Garrison:** The coupon code for free is SHIPIT, and... \[laughter\]

**Autumn Nash:** The best part about John explaining that whole part that he just did was like you can see the genuine excitement and passion that he has for it. He leaned in, and his face --

**Justin Garrison:** He leaned in and brought the mic closer. He's like "You have to hear this part."

**Autumn Nash:** He leaned in, his face was excited... Like, it's really cool when -- like, sometimes we just have to take a job and you have to do something that you're just building stuff. But when you can be like genuinely excited and into it, you build like even cooler products. So it's really cool that you were genuinely so excited to talk about it and passionate about it.

**John Watson:** I would love to say I'm an amazing actor, but I suck at acting. It's genuine.

**Justin Garrison:** It's true.

**John Watson:** Yeah. I'm really, really, really excited for some of the people I previously worked with, and everyone in the community for SRE and platform to try it. And yeah, I'm excited. It should be good.

**Autumn Nash:** That's awesome.

**Justin Garrison:** Well, thank you both so much for coming on the show and talking to us all about System Initiative and kind of how that infrastructure works and how you're hosting it yourself. This was great.

**Scott Prutton:** Yeah. Thanks for having us.

**John Watson:** Thanks so much.

**Autumn Nash:** It was nice meeting you guys.

**Scott Prutton:** Yeah, you too.

**Break**: \[00:49:40.08\]

**Justin Garrison:** Thanks again, John and Scott, for coming on the show and telling us all about how the infrastructure works and generally how System Initiative thinks about infrastructure. I like that they're self-hosting, or at least managing the SaaS version with the tool itself, because that dogfooding always works out well.

**Autumn Nash:** Yeah, I thought that was really interesting the way that they're dogfooding their own product, which means they've -- I feel like you catch a lot of bugs and different things that way. And you know that your product -- I don't know, it just makes it a more mature startup to me, because they're using their own stuff to run the service.

**Justin Garrison:** Right. When I worked at AWS, everyone came and told me all the things they hate about AWS. I was like "You don't hate AWS as much as the AWS engineers." Because AWS was built on AWS, and they know all of those edge cases, as much or more than any customer. And it's one of the superpowers that I've always thought that's AWS has over other cloud providers, where AWS is built on AWS almost all the way down to the bottom, there is a layer that is just raw infrastructure. But GCP isn't built on GCP. It's built on Borg.

**Autumn Nash:** It isn't?

**Justin Garrison:** And Azure isn't built on Azure, it's built on Fabric Manager.

**Autumn Nash:** Really?

**Justin Garrison:** Yeah, they don't use their own tools... Which I was always like -- there's this disconnect around "Oh, you should have access to this." It's like "No, you should just build on the thing that you're telling customers to build on."

**Autumn Nash:** That's wild. I did not know that.

**Justin Garrison:** Yeah.

**Autumn Nash:** I also think that you better understand why things are built a certain way when you have to use -- so you start like building something. It's never a straightforward, best practices way. Like, you always try your best and then there's something weird that happens, and some weird edge case, and you have to fix it and iterate.

**Justin Garrison:** Right. And you build something for yourself to like say "I want to solve this problem."

**Autumn Nash:** Yes. But when you're passionate about solving that problem, and you know it's a problem, and then you use it, you have a different buy-in to fix it right, you know?

**Justin Garrison:** Yeah. I think the big disconnect comes when customers use your -- they have different assumptions and different ways they want to work, and different things that they want to do, and you're like "I built this tool to solve the problem that I had. And now a customer has a different problem. Now we need to expand a lot of those assumptions." And I think that that's where it's really exciting to see how things have grown, and even things in the past like Terraform, and config management tools, they've all kind of done this where it's like they solved the problem, and then a lot of other people used it and did bad things with it.

**Autumn Nash:** I don't think they talk about that enough when you're going to school for being an engineer, about how you can have all the good intentions in the world, and then somebody uses it and you're like "But why?" But also, I think when you're building at a certain scale for you to use and dogfood, and then you make it open for other people to use it, you're always going to get a lot of different edge cases at a scale. You could have customers using it, but if they're not using it at a certain scale, it's always going to be, I don't know, hiccups later, when it gets to a bigger scale that you may not have...

**Justin Garrison:** Or just the boundaries around a tool. It's hard to draw those boundaries, because you're like "I want all the customers."

**Autumn Nash:** Exactly.

**Justin Garrison:** And things like Kubernetes have been used for all these things... It's like, maybe you shouldn't be using Kubernetes here. I understand you like how this functions, or you're familiar with this, but at this level just go do a different tool.

**Autumn Nash:** That's why this product especially is interesting, and just having a background as a solutions architect... There's so many times where people are like "I use this" and I'm like "But why? Why do you use this?" And they can't tell you why they use it, or they'll be like "I use this and I love it, but I have this and this and this problem", and I'm like "Do you love it though...?" I think that you don't realize that there's other products out there. And sometimes it would be like a service I worked for, and I'm like "You don't know the right database for you" and they're like -- but it's not though.

There's a reason we have all these tools, and there's a reason that so many tools are built from like compute power, or like infrastructure tools, or database tools, and there's such a variety, because sometimes they don't always work for everything.

**Justin Garrison:** \[00:56:32.25\] I mean tools are sticky, because you're like "I know how this tool works, so I'm going to stick with it." And problems are often invisible, because we get used to it as we build the problem ourself; and we're just like "Oh, that's not actually a problem." No, no. No one else has that problem. You built this on yourself and you should go use a different tool.

**Autumn Nash:** It's also why it's hard when you internally build everything for yourself. Sometimes you want to have the old simple stuff that you built yourself, and then sometimes it's like "Dude, at some point we need to not build everything ourselves." It just depends.

**Justin Garrison:** And that's also hard, because there's fundamental pieces of that tool structure that are old and crusty and useful, but also are so esoteric that they shouldn't be used, because they're also -- like, you can use the new and shiny and not have anyone come in and know how this works, or you can use the really old and crufty and not have anyone come in and know how it works.

**Autumn Nash:** Dude, nobody talks about that struggle. Nobody talks about - like, you're not getting kids out of college that know how to do in-depth Bash.

**Justin Garrison:** I was working for years as an engineer and I found out that one of our fundamental tools at this company was built using stow. I didn't even know what the --

**Autumn Nash:** What is that?

**Justin Garrison:** The stow command on Linux. It makes a bunch of symlinks for you from a file system. And it stows things in a directory hierarchy. And I didn't know what this was, and it was a foundational piece of most of what we were doing at this company. I was like "I didn't know this existed. I did not know what this was." There's just so many, I'm sure, edge cases around -- someone's like "You probably shouldn't use this as a tool for this thing that you're doing." And we were using it for like the basic intents, but at a scale that I don't think a lot of people were doing. And so those sorts of things are also edge cases where like - yeah, sometimes you do need to move off of an old thing.

**Autumn Nash:** Yes. And it's hard to know when, when everything you have is built in that, or you've been doing it for so long.

**Justin Garrison:** So for today's outro we're gonna talk about a couple of books, some longer reads, some things that are kind of recommendations or summaries around a thing. And since I teased it in the intro, I'll go first, because my book is called The Dark Wire. And Dark Wire is a book all about how the FBI in the United States ran a quote-unquote secure phone network, mostly for criminals.

**Autumn Nash:** Oh, this is so shady, but I love it.

**Justin Garrison:** It was kind of amazing. And I was interested in the technology aspects of it from a book perspective... And it obviously goes into a lot of the stories around like the horrible, bad things that criminals do when they think no one's watching. Like, if you're a bad person and you're like "No one can ever see my message, and I can plan anything I want." And a lot of it was talking about like large drug deals, but also like kidnapping and killing people, and all sorts of different things. I was like "Oh, this is interesting."

But the fascinating thing about it to me was the fact that like this was literally the entire startup. It was a quote-unquote startup that ran a cell phone network that had their own devices, and they said "This is all the way secure for you. Everything about this is secure." And then they had a back door that just sent all your messages to the FBI.

**Autumn Nash:** That's wild.

**Justin Garrison:** So every message they sent was sent back to the FBI. And it started in San Diego. These people in San Diego were approached by someone. An old secure network shut down because they got hacked, I think, by the French government... I'm losing some of the timelines. But basically, there was competing, secure networks. One of them shut down and they all kind of fled to Anam, which was the network that the FBI ran. But then also like another network shut down, and then the FBI went after another one and closed them down... So everyone had to flee to their network that they were running. They're like "We're the only secure network left."

**Autumn Nash:** \[01:00:16.09\] That's genius.

**Justin Garrison:** And the problem, the reason they shut it down - this was like two years ago, 2022-ish they shut it down, and it ended up being the largest worldwide sting arrest in a single day ever in history, because they got all these people... Because they said, they're like "Actually, the problem is we're too successful. This startup that we're running, that no one knows is run by --" People that worked at Anam didn't know they were...

**Autumn Nash:** What?!

**Justin Garrison:** They didn't know. They thought they were working for enterprises, and enterprises want backdoors into messages, and they're like "Oh, yeah, sure. We'll add that feature, because it's enterprise." No, no. Everything was going back to the FBI. So engineers were building this stuff that were like "Oh, this is cryptographically secure. It's going to go over here", and then it gets --

**Autumn Nash:** What?! So they were working for the FBI and they didn't even know they were working for the FBI?

**Justin Garrison:** Exactly. Yeah. So it was completely hidden.

**Autumn Nash:** That is wild.

**Justin Garrison:** And so the thing is, they were at this point where they grew too much, and they're like "This startup is too successful. Too many people are going to --" And they started giving access to different governments around the world, in different ways that other people couldn't see... Because as an FBI, they weren't allowed to wiretap U.S. residents, but the rest of the world was game. And so they were like "Oh, this is for everyone else." And they were sending hints to other people like "Hey, you might want to go check this container, at this port. It's loaded with drugs."

**Autumn Nash:** Have you ever seen the show American Greed?

**Justin Garrison:** No.

**Autumn Nash:** Beth would love that. Tell her about it.

**Justin Garrison:** I'm sure she would.

**Autumn Nash:** It sounds... That is just wild. I feel like it's American Greed --

**Justin Garrison:** This is in real life.

**Autumn Nash:** Yeah. Well, it's about real life, and it'll be like crazy; it'll be like "This guy BSed his way through being a surgeon, and now he's like operating on like patients, like as a neurosurgeon." And then this dude put a huge life insurance policy on himself and decided he wanted to leave his family and crashed his like plane and showed up like 10 years later. It's wild. But it's like all these really crazy, like, things. But that sounds like that, but with technology, and the FBI, and I'm just like "I would totally read that book." That sounds wild.

**Justin Garrison:** Yeah. The secure side of it was really fascinating to me, of like "Oh, this is this is just all backdoored", and how it worked. And really, they picked a date and they're like "Hey, this is too successful. We have too many messages and we can't go through them, and we can't be responsible if someone's going to try to kill someone, to be like "The FBI got this message" and we didn't do anything about it."

**Autumn Nash:** I wonder if that was like so stressful. Can you imagine seeing all these messages and you can't do anything about -- oh, my goodness.

**Justin Garrison:** And there's not just -- like, there's pictures, there's everything. And they get all the metadata about who they called... So they're building these networks out of being able to see these graphs of how people communicate.

**Autumn Nash:** I feel like that would be very interesting, but also -- do you know how they talk about how like therapists or like nurses like take on a lot of that like heaviness...

**Justin Garrison:** Yeah, that burden.

**Autumn Nash:** Yes. And like just like the Facebook moderators, you know how they have to have a human moderator for some things...? Can you imagine the things that they saw, and that they knew were happening, but had no control over stopping?

**Justin Garrison:** Yeah. So literally, they said "Hey, everyone that knows about this, we're picking this date", and I think it was like June something, and they're like "We don't care if you're ready or not. You get ready." They gave them like a month advance, or two months of it, like "Here's all of the information about all the people that we have, that you should probably go check out." And so they had like a worldwide sting of like thousands and thousands of people that were just like "Oh, yeah, no, we got all your messages." And they had to find, in a lot of cases, like court cases. Those messages weren't good enough, depending on country laws and stuff, because they're like "Oh, well, this wasn't a legal wiretap", so they had to get like real world evidence. So they had to stalk people too, like "Oh, I know where they are, because I have GPS from their phone, which they don't know that I have. But I can then go take pictures of them doing this deal" or whatever. So it was really interesting in just like how pervasive it was and how much nobody knew. And everyone thought "This is the most secure thing."

**Autumn Nash:** \[01:04:09.04\] You know how it's like one of those things where you're like "If we just had more information, we could fix all this." And then all of a sudden you have too much information, and... You know what I mean?

**Justin Garrison:** And they had to shut it down. Yeah.

**Autumn Nash:** It's almost like I hope they find a better, efficient way to redo that at some point, because it seems like it could be a lot of good... But at the same time, you could see how that would be very costly, but also just like heavy, like a human toll also.

**Justin Garrison:** Yeah. And there's so many questions I have about just like legality of a lot of things, for like "Oh, this is other countries, we don't care." And I'm like "This is humans", and I don't know.

**Autumn Nash:** Well, not just that, but when they say that they don't wiretap Americans...

**Justin Garrison:** \[laughs\]

**Autumn Nash:** And the fact that you would then have so much evidence to justify getting -- you know what I mean? Like, you started off wrong, but at some point you could definitely have a roundabout way of gotten enough information to make it legit.

**Justin Garrison:** In the book they call it that -- like, they even had pieces in the software to like remove people or not track people \[unintelligible 01:05:08.12\] because they were like "Oh, actual lawyers are using this, for like just client confidentiality. And we can't we can't have that information, because that does violate a lot of things." So they were saying that they were like "Oh, we had these things that like these numbers, we don't track GPS." You have to trust people at some point; like maybe, maybe not, I don't know. Like, you just lied to a lot of people...

**Autumn Nash:** I feel like certain keywords, and stuff... I'm just like, if you're hurting little kids, or like doing horrible things, it should just be fair game.

**Justin Garrison:** Yeah. It was really interesting. I wish it kind of went more on the technical side of things.

**Autumn Nash:** I'm going to go read that.

**Justin Garrison:** But I listened to it and it was a fun, just kind of like as I was doing dishes and stuff, of like hearing what was going on... But it was also just really kind of depressing, because I'm just like "Oh, this wasn't fake."

**Autumn Nash:** See, I don't know. As a mom, though... You know what I mean? I don't know if there's some things where like -- I had to stop watching as many ID shows, because it was giving me more anxiety. It's so interesting, but also, like, the world is horrible. I don't know.

**Justin Garrison:** Yeah.

**Autumn Nash:** Okay, so my book is "A Mind for Numbers: How to Excel at Math and Science, Even if You Flunked Algebra." So what I really enjoy about this book is it teaches you how to be a more efficient and effective learner, and it talks about why your brain needs certain things. I know it talks about science and math, and that doesn't seem as much software engineering, even though there is a lot of obviously computer science in like math and engineering. But I love that it talks about, for one, very like famous big thinkers. Like, it talks about Thomas Edison, and how Thomas Edison came up with these clever tricks, and then Salvador Dali, the artist, ended up using some of his concepts. And like Albert Einstein, and all these great thinkers. And like if you look back at like Albert Einstein for a long time, Albert Einstein was not successful in physics. Like, he actually like got a bad grade in high school, and then he worked a crappy job that was like doing patterns, and he was miserable... And then like he went from getting a bad grade in physics to having the theory of relativity taught.

So it's like, I think it's really encouraging for people whose brains work differently, or you think it does, but really, essentially, your brain is doing what it needs to do to process it... So it's just really interesting taking breaks, or just doing things that your like brain doesn't need to think about. Like, I would always be like "Oh, I have to go pick up my kids" or "I have to go do some chore" or something in the middle of the day... And like "Oh, I wonder if that makes me a worse engineer." But really, it probably makes you a better engineer, that walk that you take, because it helps your brain to do all that stuff like in the background. But it's just so many different cool ways of like how to be an effective learner, how to -- like, it's cool to see how many like things that maybe your brain's doing that maybe Albert Einstein or some cool thinker that you may really admire also did. So I really enjoyed it.

**Justin Garrison:** \[01:08:09.13\] Cool. I like their cover. I like the math equation on the cover.

**Autumn Nash:** Yeah. It's a really good book, and it's not boring. I think a lot of self-help books are icky, and a lot of books about -- I don't know. This just book is like really fun. It's got a bunch of -- it's weird to say it's fun about learning, but I like learning. But it's just a lot of really cool historical things, and just ways that people used to kind of hack their brains, that you can also use those tips and tricks, and I don't know, maybe validate...

**Justin Garrison:** You would probably like the book Thinking, Fast and Slow by Daniel Kahneman. Fantastic, fantastic book. But it's a really big book.

**Autumn Nash:** Tell m more. See, this one's not that bad.

**Justin Garrison:** Yeah. Thinking, Fast and Slow, I read it once and I want to read it again, but it's like an investment.

**Autumn Nash:** See, I've read this book more than once. I haven't read the whole thing, but I keep reading different parts, and I'll probably read it all the way through... But like this book and me - look at this book. It's been through some things. This is like one of like the best $9 I've ever spent, because it's like -- I think not only is it just learning tips and tricks, but you're also, like, it validates what your brain already does, so like you kind of let your brain do its thing more.

**Justin Garrison:** Yeah. And that's exactly Thinking, Fast and Slow. Thinking Fast and Slow is a book that's explaining -- because he has like a Nobel prize or whatever for like his research on how the brain works. And it's literally like when you're talking to someone, interacting with someone in real time, that's thinking fast, and you have to think of things without thinking about them. Like, you have to just say something without thinking about it. But then when you go and marinate on something, or you write documentation -- one of the things I love about thinking slowly is writing documentation, and writing things out, because it makes me just slow down to the keyboard speed. Like, how fast can I actually type something out? And that just makes me have to think of my words better, and think of how clearly those ideas connect. And thinking slowly about stuff is a different way of going through it.

**Autumn Nash:** Also, that validates a lot of like -- think about like learning engineering in theory, and then actually using it. Or like when you learn a concept in theory, and then you have to teach it. It's always a different way of deeply learning something. So I think all that really supports that.

**Justin Garrison:** A Mind for Numbers sounds really familiar to "Where Good Ideas Come From", is another book. This one's shorter, and sounds a lot aligned with like -- it talks about real world people that were doing things, and how...

**Autumn Nash:** Yes, that's the part that I really enjoy. But it's also wild... Like, my son's autistic, and just finding out how many people like, Sebastian Bach, Beethoven, Albert Einstein... I think like as a neuro spicy person and growing up with like -- you know, when we grew up, you were just like the weird kid, or the kid that did stuff unconventionally, or... I would always solve math problems completely different than everyone else would, and they'd be like "Well, that's wrong, because you solved it a different way." And I'm like "I got the same answer, and I was faster than you."

And then seeing the way that my sons are growing up now that we know more... It's wild, because I think we got made to feel bad for being like the neuro-spicy kid, and then you find out like all the best inventors in history were these kids who thought differently, you know? So it's cool to see like how so many great thinkers and revolutionary like inventors also think differently.

1:And the "Where good ideas come from" is all about that crossover. When you're going from "I know this field really well, and then I'm going to go do something else." And you're like "Oh, I can apply some of the things I learned in this completely not the same field, into this new area." And that book goes into things like Darwin wasn't like a biologist. He started learning other things originally, and then he's like looked at animals, and he's like "Oh, actually, what if this is related to that other thing I was doing? And what if like evolution happens in animals, too?" And that sort of like notion of just like these, how you pull things from other fields that you were an expert in, and you just like find things on the edges... That's where a lot of those ideas come from.

**Autumn Nash:** \[01:12:21.01\] Which is also wild, if you really think about where like things are going in tech right now, with the whole \[unintelligible 01:12:24.24\] and like people... I feel like we all know that our interviews suck, but that's how we interview, like with LeetCode and all that kind of stuff... But how many people are you missing out on because their brain is different, and they may not -- you know what I mean? But those are the people that could completely change and build that really cool product, or... You know what I mean? Like, how many cool people do we meet at like Scale, and they've got like a theater background, or some other background, and they are amazing engineers, you know? And like how many of those people will we lose out on with this whole like new attitude, you know?

**Justin Garrison:** Well, there's two sides of that. The people that you don't hire because they don't fit the mold of what you think is a good, functional person inside your organization, but then also the people you do hire and don't listen to.

**Autumn Nash:** Yeah.

**Justin Garrison:** There's two sides of that coin, of just like "Well, you're in the door, but we want you to fix this box."

**Autumn Nash:** That is very true.

**Justin Garrison:** "And you don't go outside of that box, because I don't want your ideas about how that product could change."

**Autumn Nash:** I've experienced that a lot. I think that's very valid. That's something I would not have thought about. That's very valid.

**Justin Garrison:** And that's something that - like, I've been in enterprises for over 20 years. I always struggled with that sort of process and what my boundaries were as a developer, as a system engineer, whatever. Whatever the title was, they're like "That's the box you fit in. Don't go talk about this other thing."

DevRel kind of expanded that a little bit, because I was like "Oh, I'm in product, and I've just got to like learn new things", which I really enjoyed, but it didn't have impact on the product backside of things. And that's something I'm learning more about at a startup, first time at a startup, where I'm just like "Oh, I can go have impact anywhere", and I don't have the same boundaries around my title or my impact, and ideas... Which has been a lot of fun for me in the last eight months.

**Autumn Nash:** I think that that's one of the coolest part of the way that your brain works, is you're always like "And I tried this cool thing, and then I did it, and then I learned this", and I'm just like, "How many companies lost out on the way that your brain works because they tried to fit you in a box?" It's crazy what people will sleep on because it's not familiar to them.

**Justin Garrison:** Right. And you see it a lot from especially large tech companies, where people leave and they go to a startup, because they're like "Hey, they didn't listen to me for this product, and now it's a billion-dollar company." And for some large companies, they're like "That's not us. That's not our identity. We don't want to do that thing. We don't want to be associated with that", whatever. There's plenty of reasons. But then also, like, it's money that you could have had, that you don't have. And maybe it's not enough money for large companies to care about. Like, millions of dollars to a big enterprise is like "Eh... I could save that if I just deleted my VPCs properly."

**Autumn Nash:** \[unintelligible 01:15:04.12\]

**Justin Garrison:** Bringing it all the way back... Yeah, you can save that money --

**Autumn Nash:** I love when you throw a little bit of shade. It makes me so happy.

**Justin Garrison:** Yeah. But yeah, no, I do think that -- "Where good ideas come from" is one of those books that I've read multiple times and I'm like "This is fascinating how this works." But yeah, "A mind for math" sounds interesting. I have a math degree, so I'm kind of like --

**Autumn Nash:** I still just -- my brain just hurts when I think about that. You went to school for a whole ass math degree.

**Justin Garrison:** Well, but like I started from the beginning. Like, I had no math background, and I started from like algebra one in college.

**Autumn Nash:** That's wild.

**Justin Garrison:** And I was just like "Oh, I don't know any of this stuff", because my high school was really bad apparently, and did not teach me any of it. And so I was just like "Hey--"

**Autumn Nash:** Preach! Me too, me too. They were like "We're going to try this new math in Hawaii", in a school that already sucks.

And then they're like "Oh, it was terrible. We're going to change." "Well, thanks... What do you mean, sir...?"

**Justin Garrison:** \[01:16:06.08\] "Hold on a second... This is still \[unintelligible 01:16:07.03\] For me, I went to a private school, and the high school doesn't exist anymore. The school was so bad that it shut down. But my wife went to public school, and when I was talking to her, I met her in college, I was like "What did you learn about? I don't know any of this stuff." And I was just like "Oh, my school just didn't teach me anything."

**Autumn Nash:** So they paid extra for them to not teach -- see, this is...

**Justin Garrison:** Well, yeah, my mom was a teacher, so it's like you get to go to a private school for free.

**Autumn Nash:** Oh. Okay, good. At least she wasn't paying for it.

**Justin Garrison:** Yeah. It was one of those like loopholes of like "Oh, you're rich." And I'm like "Well, no. My mom's right there."

**Autumn Nash:** Well, because it's funny, especially having like neurospicy kids... It's crazy. Like, I could send them to these expensive private schools, or -- but what are you really getting? Because there's no like programs for kids that are neurospicy in those private schools.

**Justin Garrison:** Yeah. There's so much less resources in that environment.

**Autumn Nash:** Yes. But you're paying college money. Like, it is wild.

**Justin Garrison:** And yeah, anyone that talks to me that's like "Oh, private schools have better educations", I'm like "I am proof that they are not." That was not my experience. I went to private school from - what - fifth grade, all the way through college, and got my master's degree, and...

**Autumn Nash:** And I bet you your mom probably like stayed at that job so you could go to that school, too.

**Justin Garrison:** Oh, yeah. Absolutely. She was there for a while so that me and my sisters could go to that.

**Autumn Nash:** And it's wild, because people are over here working two jobs to like put their kids in those private schools, you know?

**Justin Garrison:** Yeah. And then I talked to my wife about all the things that she learned in public school from the education in the classrooms, and outside of the classrooms, that I didn't learn about. There's so much more to learn in high school. My class was 42 people; my graduating class in high school.

**Autumn Nash:** Oh, gosh.

**Justin Garrison:** So yeah, I didn't learn a lot of things.

**Autumn Nash:** Like, we were like 500. It's wild. And I was on a tiny island, Justin. What was going on...?

**Justin Garrison:** So it's fun. But yeah, just, we wanted to go and share some books that we recently read, or reread, and were interested in, for anyone else out there that is interested in those same things... Because there's a lot more out there than just what's on the internet and social media.

**Autumn Nash:** I love a good book.

**Justin Garrison:** Yeah. I listen to all my books. I can't read. Which I also found out about myself fairly recently... But I have one of those -- I forget what it's called. But when someone tells you to like picture something in your mind - there's no picture there. Like, someone tells you like "Picture an apple", and like, it's just black for me. Like, there's nothing there.

I can think of things about apples, and like metadata about apples basically, but I can't -- I don't see anything.

**Autumn Nash:** I like how you said that, metadata. That's wild. I just assumed everybody \[unintelligible 01:18:43.15\]

**Justin Garrison:** And a lot of people -- like, my whole entire family, they're like "Wait, you don't see an apple?" I'm like "No."

**Autumn Nash:** How do you meditate?

**Justin Garrison:** I sleep.

**Autumn Nash:** My brain's just too loud to meditate.

**Justin Garrison:** I can't close my eyes and like not sleep. It's just --

**Autumn Nash:** You are narcoleptic, okay?

**Justin Garrison:** That's what it is. But yeah, no, and so like thinking differently about things is one of those things where it's just like "Oh--" My wife is always like -- I'm a terrible speller. And she's just like "Well, just spell out the word in your head." I'm like "Why would that help? I can't see the word." She's like "Why don't you see the word?"

**Autumn Nash:** I'm a terrible speller, too... Which is why it pisses me off that they're integrating all these new machine learning and AIs into spell check, and it's made it worse... Because I'm like "I need you!"

**Justin Garrison:** Yeah, every time I second-guess myself when my browser underlines something, I'm like "I'm pretty sure that's the right spelling", and I have to go look it up in search, and it's the right spelling. Then I've got to go add it to my browser library...

**Autumn Nash:** Yes, me too.

**Justin Garrison:** Thank you, everyone, for listening. Oh, I forgot. This episode's going out, I believe -- I think it's in September. I'm going to be in London at a conference, SRE Day, in London. I am speaking at the conference. I'm also hosting a conference called TalosCon, for work. I try not to mix this podcast and my work, but I love to meet people that listen to the podcast in person. So if anyone is in London, listening to this podcast and wants to come to -- TalosCon is a free one-day conference for my work, that is all about Kubernetes and Talos as an operating system, which is what we do. And then SRE Day is just generally about SRE-type topics, which I'm fascinated on in general, because I was also historically an SRE.

So check them out. I'll put those links in the show notes, so anyone could sign up and come if you're in London, or around, in a travel area of London. I'd love to meet you in person, so please reach out. And we will talk to you all soon.

**Autumn Nash:** Take me to London in your suitcase.

**Justin Garrison:** I have so much computers I'm bringing... You won't fit. Look at my CD stack. I'm burning CDs for the conference. This is all our swag.

**Autumn Nash:** Who even does that?

**Justin Garrison:** I know, right?

**Autumn Nash:** I love it. Just... Who does that? It's great.
