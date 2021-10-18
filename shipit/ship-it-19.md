**Gerhard Lazu:** Emile, tell us, how did the Traefik idea start?

**Emile Vauge:** Yeah, it started six years ago. At that time I was a developer... And I was working on a microservices platform which was quite complex. I needed to manage 2,000 microservices. It was microservices where early there were not that many tools to handle microservices at that time, and 2,000 microservices - you cannot do anything manually. It has to be automated. And I needed to automate the rooting aspect, the networking aspect through each of those microservices... And at that time, existing reverse proxy, it was not possible to automate things. You had to basically write a configuration file for those reverse proxy, restart it, and that's it. So if you had to do any change, you had to restart it and you had to generate the configuration file.

So that's really what was the pain point at that time - automate the reverse proxy. That's something I started to work on, but it was a side project. So yeah, I started to do a few lines of code in Go, then \[unintelligible 00:03:56.21\] and then I was just passionate about it.

\[04:01\] A few months later I had something, I had a project, and it was Traefik. I decided to open-source it, and I was like "Yeah, maybe it will interest a few people in the world, because maybe a few people will hit the same pain that I did." But I was not expecting anything.

Surprisingly, the success was here. The project was on the front page of Hacker News, and it changed everything. So it was completely unexpected. From a side project it went to a real open source project with a community around it, with external maintainers, external contributors in only a few weeks... So that really was how everything started.

**Gerhard Lazu:** That is a great story. So what I'm hearing is it started as a problem that you had, and apparently many others had as well... I think. That's one of the reasons why it became so popular, right? You've definitely hit something that others had, too. 2,000 microservices? I can't imagine that. That sounds crazy. That is a very big deployment. Where was this running? I don't think Kubernetes was using production back then, so how did you run those 2,000 microservices?

**Emile Vauge:** Yeah, at that time it was kind of crazy... And early. At that time, of course, Kubernetes was not even here; it was only the beginning of Docker. And so we were using Docker and Mesos, which was already production-ready, and you had already a few companies with big deployment on Mesos, like Twitter or eBay, I think...

**Gerhard Lazu:** I remember as well Apple was a big Mesos user...

**Emile Vauge:** Exactly, yeah. So yeah, we started with Mesos. The first version of Traefik did have Mesos support with Marathon, and also Consul, Etcd, Docker... A few things. But of course, Kubernetes came later. I think a year after we added Kubernetes support, and... Yeah, it changed everything, once Kubernetes was here.

**Gerhard Lazu:** Yeah. That makes a lot of sense. And also, what I'm realizing now is that the service discovery - that Traefik is like a first-class citizen (it works so well) - must be coming from this, where you have 2,000 micro-- like, how do you even configure them? How do you make sure the config reloads instantly, without needing to run any commands? I mean, it just has to work like that, because otherwise -- I mean, it's madness, right? 2,000 things? Wow. Configuring that many things is just so difficult. And things come and go all the time... There's always some sort of churn. New versions... Okay, that's interesting.

So since you started Traefik in 2015, what things did you get right?

**Emile Vauge:** I guess building an active community around the project from day one was definitely something we did right... And today I learned that it was not easy to sustain it. So yes, we started a project and some people came to contribute and became full-time maintainers, and the community is super-strong on Traefik. And I think this is definitely something that is extremely complex to achieve. I learned that. So it was kind of a mix between being lucky, having the right idea at the right time, but also being able to handle a community, which is complex... Because everybody wants to contribute, but everybody wants to govern the project, everybody has different ideas... So it is kind of complex. And usually, you have strong personalities in these communities, so you have to learn a lot of diplomacy to handle it in the right way. I think it was done very nicely with Traefik... I think so.

**Gerhard Lazu:** Yeah, that makes a lot of sense. I always thought that it was those graphics and drawings which were really good. I always remembered those; I was sure that the success was basically that. By the way, who did those drawings? Was it you, by any chance?

**Emile Vauge:** \[08:05\] No, it's a friend of mine who is also a developer... But he's doing some design as a side project, so yeah.

**Gerhard Lazu:** Traefik was so approachable because of that, and I'm pretty sure that that mentality was seen throughout everything else - polite, correct, inclusive, but also approachable. And I think those drawings captured it really well. So the thing which really stuck with me over the years is how consistent they have remained and how well they were able to explain some complex problems and some complex concepts. So I really enjoyed them, by the way. Whoever your friend is, he or she is doing an excellent job, so keep at it. It's great, I love them.

Okay, so - I don't know many projects that have hundreds and hundreds of alphas and betas, but Traefik is one of them. I went to look at the repository and I counted 500 alphas and 800 betas, and some of the alphas and betas were being cut and made available multiple times per day. What is the story behind that? Why so many alphas and betas?

**Emile Vauge:** That's a good question, and I think you are the first one to count everything on the repository... \[laughs\] So there is one good reason - before the 1.0 we were using a continuous deployment solution, and basically every commit, every PR was generating a new beta. So everything was automated. And we were thinking at that time that there were so many contributions from many people that they just wanted to have this version right on time, right when the PR was merged. So that was the reason. And it was also very easy to do right; you could just generate a Docker image, you'd just push it and that's it. It was basic.

And then later we started to structure a bit more the release cycle, and we decided that it was time to just release only, for example, three or four big releases in a year, because it was easier... Now that it was in 1.0, it was easier for a company to manage the release and the upgrades. So yeah, that was it.

**Gerhard Lazu:** I mean, that's exactly what I was expecting, and this is one of the signs, if you do continuous delivery, continuous integration right. You have many, many artifacts. Now, you may choose to make those artifacts publicly available, or they can be more hidden, but you will have those artifacts, regardless whether they're visible or not. And maybe some people - there's like a dev channel, or a nightly channel, or whatever where every single commit... And that's exactly the way it should be - every single commit produces an artifact; people can test it, people can run performance tests.. All sorts of things. They're so valuable. And the quicker you can produce them - well, guess what, the more contributions it will get. Because people can see the results of their work straight away. That is amazing.

And the structure thing makes perfect sense. Once you get a bit more structured, once more people get involved, you want to reduce some of that noise, or at least separate it. So that makes perfect sense. So what did you use at the time for the CI/CD system, do you remember?

**Emile Vauge:** Yes. And that's an interesting topic, because we changed at least three or four times the chain. We adapted. I think we started with Travis plus Docker Hub. Pretty basic. And after a few months we \[unintelligible 00:11:26.27\] were lasting like 50 minutes. We were hitting the \[unintelligible 00:11:33.09\] of Travis, so we changed to Cycle CI, and it was a big error... And then we changed again to -- we just changed to Circle CI, which was better... And then we ultimately changed to Semaphor CI, which was super-interesting, because we divided the time by ten, I guess, adapting our tests to Semaphor... So it was extremely performant, and probably a bit more basic. You know, you had less command on Semaphor... But that's fine. We were doing everything with our own script... So yeah, we migrated to Semaphor, and then we connected to the company Semaphor, and then we became friends, and so they gave us some server... And that's it.

\[12:22\] So we had to adapt several times our CI... And even today, it's kind of complex, because we have a build that is generated on the fly for each PR, with each commit, and it allows us to test everything. It allows the contributor to test everything. As you said, as soon as the PR is merged, we generate an experimental build that everybody can use... So yeah, I think we are really on top of the CI. It is super-important to us, and it allowed us to manage crazy amounts of contributors.

**Gerhard Lazu:** You're right. I'm exactly of the same opinion, and I'm glad that you're seeing in practice the same thing. If you get that right, many things will start happening as a result of that. Super-important. So - big fan. Thank you for sharing that.

What about from the perspective of things that didn't go so well - but let me make it a bit more positive. What about from the perspective of learning from failure? What failures did you learn from in the last six years from Traefik, or in Traefik? Things that you wish you had done better, or things that in hindsight were not as good ideas that you had?

**Emile Vauge:** Two things come to my mind. I mean, of course, we did way more mistakes, but two--

**Gerhard Lazu:** The ones that stand out.

**Emile Vauge:** Yeah, two things. So the first thing - I will continue my story that I was talking about... We did build a great community, which is still super-active. But over time, I also founded a company behind the project; I also hired a whole team which is working full-time on it, and today we are 40 people. 40 people are working full-time on Traefik. Not the whole team are developers, but a good part of it. And when you have a team working full-time on it, the project is going super-fast, and it's becoming more and more difficult to follow from when you are an external contributor. And with time, we've found that it was really complex to sustain external contributions, with the internal team going so fast.

I don't think we did any big mistake, but what I learned is that it was possible to create a great community from a bad project, and to create a big community, but as soon as you go professional with it, it was not that easy to sustain. So that's something important we learned - sustaining a big community is not that easy than just starting it. That's my take.

And another thing, a mistake, I guess, that we made is the big gap between 1.x and 2 branch on Traefik. We decided at that time that many things were not that great with the architecture of the 1.x branch, so we wanted to revamp the project basically. I'll just give you one technical example. For example, in the 1.x branch we had some integration with Kubernetes using the Ingress specification... And the Ingress specification is pretty basic on Kubernetes. And as soon as you want to add some options, you had to use annotations. And this was really an issue, because annotations can become a mess, because it's not a structure. It's just annotation. And if you want to do something complex, it becomes a mess. So we decided that "Hey, in Traefik 2 we will support Ingress, but also our own CRD, which will allow us to do some complex stuff on Kubernetes without annotation, which is a pain." And surprisingly -- so we were sure that the community will be okay with that, and we were wrong. The community just wanted to have Ingress... Most of the community, of course; some people were okay with CRD, but most people just wanted to have some Ingress.

\[16:21\] So that's one mistake we did. We were convinced internally, in the company, that CRD was the thing to do, but that was not what the majority of the community was thinking... And we learned from that. Sometimes you have a disconnection between your team and the community, and you have to work on that every day. You have to avoid disconnecting your team from the community every day. And it's a real \[unintelligible 00:16:46.04\] It's not easy to do. So the connection between a company and a community - it's a lot of work.

**Break:** \[16:55\]

**Gerhard Lazu:** I'm really glad that you mentioned the relationship between the community and the company and the product, because I know how important that is. Not only it's important, but it's very easy to get them out of sync, and then the product goes in certain directions, or the community goes in different directions... And they just get out of sync. And it's not nice. It's friction, and tension, and you have to address it at some point if you want to be successful as a project. Because it started as a project, it started as this idea, it's a great idea, but how do you sustain it as it grows and as it becomes more complex?

So what did you do to reconcile those differences between Traefik the company, Traefik the product... Traefik the products, because it's like an experience and it has so many components... And the internal team. How did you reconcile that? Work in progress?

**Emile Vauge:** Exactly. I mean, it will be work in progress... There is no deadline. It will be always work in progress. You need to work on that every day, as I said, if you want to sustain the connection. One thing we did among others is creating a group of the most active contributors. Kind of a private group, where we would have a specific connection with those. It's called an ambassador, the ambassadors group, and we share with the, some ideas, for example, we have for the roadmap. We discuss with them about this roadmap, we get their ideas, their feedback, we try to have them on board for private betas prior to everyone else... So we try to have a really specific connection with those which are the most active ones. So that's something we created because we really wanted to be sure that an active contributor would receive something special from us, because we do care about them. So that's really something we wanted to create for a long time.

\[20:03\] Another thing we did is have a specific process to handle all the input we had from the community every day. To give you an idea, we have so many contributions, PRs, issues, posts on the forum, on Twitter, on Slack. This is so active that we need to have a specific process every day to handle everything. Other than that, the queue is becoming so huge after a week that it's not even manageable anymore. So we need to have a dedicated team to handle all the issues and PRs every day. And that's an every day work.

So it's not a joke... As soon as the open source project is big - I mean, you just have to invest in it even more. And you have to have big dedication on it. So yeah, that's how we are dealing with it. We have strong values on it. For example, we don't want a PR to last forever, because it's kind of discouraging for external contributions. And of course, we did some mistakes. Some PR did last for six months. We got some super-complex PR, and you know, it needs some time; internal discussions, external discussions... It's not that easy to get some external contribution. But we try to be as fast as possible to encourage people, or at least to not discourage them... And it requires a lot of work.

**Gerhard Lazu:** Yeah. I can definitely relate to that. Not only that, but I can see -- I wanna say how important it is, but it feels like I'm not conveying the importance of it significantly enough. So most people think that shipping is where it stops, right? Like, get the code done, get it out there, and that's it. Well, actually, that is the beginning of a very hard and long process, which maybe never ends. If you're really successful and your success keeps growing, it's just like, how do you sustain it? It's really hard. And what about keeping everything as lightweight as possible, so that you don't waste time on a heavy process. But if you don't have a process - well, what are you even doing? You're left, right, and up, and down... You don't even know which way is up or down, because you're swamped with all these things.

So what does the system look like for you? Do you have a JIRA? I hope not... I don't know. Do you have JIRA to keep track of things? How do you track things?

**Emile Vauge:** So we do track things using GitHub, mainly. GitHub is the source of truth for everyone on Traefik. But of course, we use internal tools like Notion for a document, or this kind of stuff... But yeah, GitHub is the main source of truth.

**Gerhard Lazu:** Okay. So when you receive, for example, a Tweet or a Slack, do you convert it into an issue, or a discussion on GitHub? What happens with that?

**Emile Vauge:** Yes. If it makes sense, we convert it into an issue, of course. Because this is the only source of truth on Traefik, the issues and the PR. Of course, the issues are the only source of truth. We don't have an internal tool to have private issues, or this kind of stuff. Everything is public, and everything is on GitHub.

**Gerhard Lazu:** And do you have a Signal repository, multiple repositories? How does that work?

**Emile Vauge:** So for Traefik we do have -- that's a good question. I guess we could call it a single repository, and especially now, we do have some plugins in Traefik v2. So they come in a separate repository, each plugin. So yeah, it's a singular repo, I guess.

**Gerhard Lazu:** Do you do any repo syncing, anything like that behind the scenes, so that you centralize all the issues in a single place? Or do you just open issues, for example, for a plugin, in the plugin repo, and then you have a view that merges them all together? How does that look?

**Emile Vauge:** Yeah, every repo has their own issues. Sometimes we do have some connection between a few issues, between different repos. Traefik is having its own issues, relating another issue on another repo, sometimes on another project, maybe even driven by Traefik Labs...

**Gerhard Lazu:** \[24:07\] Okay. So one thing which I noticed is you also started using GitHub Actions a bit more in the last year, six months... Six to twelve months.

**Emile Vauge:** Exactly.

**Gerhard Lazu:** Why did that happen? That was interesting to see.

**Emile Vauge:** I think the team at that time was really excited with the GitHub Actions, and they really wanted to take advantage of it. It allowed us to just continue what we were already doing with internal scripts, basically, with just Actions. So I don't think we are doing anything crazy; it just helps us orchestrate things in the build and deployment process... But yeah. So nothing crazy, but it is replacing scripts we were using.

**Gerhard Lazu:** Yeah. So it's a bit more than a script, because I had a look at especially the documentation workflow, which I haven't seen before. So you have this concept of the \[unintelligible 00:24:58.14\] which I found really interesting... And there's like different types of ants which have different roles in this colony, and that actually maps to the tools that you use to keep everything together. For example Structor, which is a type of an ant, creates multiple versions of Mkdocs documentation. That's interesting. And Mixtus creates PRs and documentation changes. And there's like a whole list of these. That's a really interesting idea. How much do you know about that? Were you involved with that? Because your team is big, and things are changing all the time... How much do you know about this specific aspect, which I've found fascinating?

**Emile Vauge:** So I don't know every specific aspect of it, but for example, we are dealing with so many contributions that we needed to automate everything as much as possible. The only stuff we didn't automate are the reviews of the PRs, of course.

**Gerhard Lazu:** Right, the human element. You need humans for that, yes.

**Emile Vauge:** Exactly. Exactly. But that's it. The rest is automated. So yes, the documentation, everything is automated. We needed to keep track of all versions of Traefik, because you know, when you only have one version it's easy. But when you have 20, you have to keep track of everything, because not everybody is on the latest, of course. Some people are still using the 1.0, or I don't know... So yeah, we needed to automate everything. For example, Mkdocs was not supporting multiple versions initially, so we created something on top of that which allowed us to generate a new version once we need it, and keep track of others using the branch of the repo. So that's pretty basic. But it means that we did create it, we do maintain a lot of small tools like this, that are allowing us to automate the whole process.

**Gerhard Lazu:** Yeah, I think this is unavoidable. The bigger the community, the more successful the project, the more it spreads, you need more automation, because it's unsustainable to do these things manually. I love that. That just makes not only sense, but it's a joy to see it in the real world and see what shape it takes based on whatever needs you have. So I really like that.

I also liked your release cycle. I thought that was really interesting. You mentioned it in the first part of the interview, you mentioned about having three to four minor releases every year. I thought that was great. That makes perfect sense. So can you tell us a bit more about how do the minor releases work, how do the patch releases work, and also, what about the majors? Because currently you're on v2; that's been around for a few years, I think... And v3 - that's an interesting one. But let's just focus a bit on the release process itself, which I've found fascinating.

**Emile Vauge:** Alright, so it's pretty common, I guess... We have, as you said, bug fixes, minor releases and major releases. We just followed the semver versioning system. We do approximately 3-4 minor releases per year. Basically, once every three months. And of course, in minor versions - it needs to be backward compatible, no breaking change.

\[28:05\] For example, if we need to add something new, it has to be without any breaking change. And with the bug fixes - we have different types of bug fixes, which correspond to different types of issues, with priority issues, I guess... So we have a mechanism where -- for example, if we have a vulnerability discovered which is pretty concerning, we tag it at priority zero, which means we have to release it today, the fix. Just... Today. That's the rule.

**Gerhard Lazu:** Now, that is something really powerful... Because you saying that, it means that your pipeline for all the supported versions has to be fast. It can't take more than a few hours, all of it... Because if it takes more than a few hours - well, you can't release it in a day. It's just impossible, because there's only so many hours in a day, and you have so many versions to patch, and it has to work in parallel. So this brings a couple of follow-up questions. How many versions do you currently support?

**Emile Vauge:** So we support officially the latest minor version of 1.x, and the latest version of 2.x. So we support the two last minor versions of the two branches. So that's what we are doing.

**Gerhard Lazu:** Okay. So the priority zero fix, which has to ship today - it has to actually ship in two versions.

**Emile Vauge:** Yes.

**Gerhard Lazu:** Okay. What about the other minor releases? Do you still patch them, or you only focus on the latest minors for each major?

**Emile Vauge:** We do focus on the latest minors, because otherwise it doesn't make sense. As minors, they are backward-compatible. You should just upgrade to the latest minor. That shouldn't be an issue. So that's what we are doing.

**Gerhard Lazu:** That makes a lot of sense. I also think that it makes perfect sense to only ship bug fixes in patches. Does that mean that even if you add a new feature, which doesn't change anything from the codebase, would you not add it in a patch release? I think you wouldn't, that's my understanding. You wouldn't add a new feature...

**Emile Vauge:** No.

**Gerhard Lazu:** Okay, you wouldn't.

**Emile Vauge:** No, of course. In patch releases we never add a new feature. Never, never.

**Gerhard Lazu:** That makes perfect sense to me. Okay. Well, I'm glad that it makes sense for Traefik as well. Okay, that's great. So when it comes to new minors that you ship every three months, how long do you support them for?

**Emile Vauge:** We support them until the next minor, plus a few months. I don't remember exactly the exact numbers. We do have something in the docs to explain that... But yes, once the new version arrives, we support the previous version for a few months, and then we stop.

**Gerhard Lazu:** Okay, okay. And do your users know when to expect new versions? Do you have like a release calendar, or anything like that?

**Emile Vauge:** Not really. Ideally, we would love to have that, because it's easier. But in fact, we try to not communicate an exact date of release. Why? Because we always have external contributions that we were not expecting, and usually it comes at the last minute, and usually it leads to a discussion, "Huh. This one is interesting. Maybe we should just wait a bit for the next minor and include this one, because it will be great for many people." Sometimes we just delay a bit what was planned, and sometimes we just postpone this one to the next release... So yeah, we adapt.

**Gerhard Lazu:** Yeah, it makes sense. I think a release calendar makes sense from the perspective of communicating what to expect, and when. If you know that, for example, you're going to ship a new minor in (let's say) three months, or six months, and then there will be a feature freeze in five months, any new contributions, no matter how amazing, they'll have to wait for the next one. Why? Because you have to have those discussions; you have to run all the testing, you have to get all the betas, alphas, RCs, whatever you need to do, so that the community is aware of what's coming and they can actually get excited about it.

\[32:12\] And who knows, maybe someone else will have another idea and say "Hey, have you thought about this?" And then that contribution becomes even more amazing, because it's being discussed and it's been out in the open for a while longer before the final implementation lands, in a shipped minor. So that makes sense.

So what would make Traefik bump to a major version? We know how minors get bumped... What would Traefik make it bump from v2, which is currently, to v3?

**Emile Vauge:** In our minds -- I mean, as soon as a new feature leads to not being backward-compatible, it has to be in a major. As soon as we need to do major changes in the architecture itself, this leads to a major release... So this kind of stuff. This makes a new release necessary, or this makes this kind of features wait for the next major release. That's what I mean.

**Gerhard Lazu:** Okay. So let's imagine that you have a big feature coming up, which - maybe it's a new feature, like it doesn't change anything, but it's a big difference in how the software behaves. Would you put that in a major, or would you ship that in a minor?

**Emile Vauge:** In a major. If it's something big, that changes the way the software behaves, definitely a major.

**Gerhard Lazu:** Okay. Even if it is backwards-compatible, it doesn't really matter, because it's significant enough to deserve its own major. Okay.

**Emile Vauge:** Yeah, yeah. Because it could have some side effects on many aspects, because it's extremely complex to -- now Traefik has become kind of complex, and as soon as you change significantly the architecture or something inside Traefik, it will have some side effects. So it could be kind of crazy to do that in a minor, to be honest.

**Gerhard Lazu:** Yeah, I'm with you. I'm with you. So if you can't tell by now how passionate I am about releases, shipping, you're just about to find out... If you can't tell by now. How do you apply semantic versioning in Traefik to, for example, config, or plugins, or even like the API? What does semantic versioning mean, and something not being backwards-compatible? What does it mean in the context of Traefik?

**Emile Vauge:** That's a good question, but for example on the API, between two minor releases, the only thing that we accept additions to the API. No changes, only additions. So if you have new features with additional, for example, parameters in the API, that's fine, because it's perfectly backward-compatible, so that's okay. That's the rule we follow. Same thing for the configuration. The configuration should be perfectly backward-compatible, so it's okay to add some new parameters, some new fields, some new annotations... You just have to continue to work with what was existing before.

**Gerhard Lazu:** What if the behavior of an internal component changes? Is that the public API? Something just doesn't behave the way it used to because you've made the change... But the API hasn't changed; it's just the behavior changed.

**Emile Vauge:** It depends, to be honest. There is no definitive answer. Sometimes we change some of the behavior, but it's on purpose, because for example it's fixing something, so that's fine. But if it changes the behavior and if it could lead to unexpected things to users, then we don't do it. Or we do it, but adding a flag, typically.

**Gerhard Lazu:** A feature flag.

**Emile Vauge:** A feature flag, or something.

**Gerhard Lazu:** Yeah, that makes sense. So when we say Traefik's API, what I understand by that is how things get configured and discovered, so how Traefik does it. That's my understanding. Are we thinking about something else when we are talking about the Traefik public API?

**Emile Vauge:** \[35:49\] We also expose a REST API to update or change the configuration. So we have, I guess, what we could call a real API... But yes, typically we have an API, but we can also configure Traefik through a configuration file, through annotation in Docker, or whatever, through a configuration file on Kubernetes, or through a KV store with Etcd or Consul...

**Gerhard Lazu:** All those are APIs.

**Emile Vauge:** Yeah.

**Gerhard Lazu:** What about the plugins? What about the APIs and the plugins used to integrate with Traefik? The providers, or -- I think you call them providers, right?

**Emile Vauge:** We have a different type of plugins, in fact. We have provider plugins... And what is a provider plugin? If you want to integrate Traefik to a new orchestrator, for example, you will need to write a provider plugin. So the provider plugin will be a -- we need to connect to this orchestrator, or get some configuration, and so on. This will be the role of the provider plugin. But we do also have some middleware plugins, and the middleware plugins are here to intercept and modify requests on the fly. So that's two different things in Traefik.

Right now, the plugins integration is extremely new. It has been here with local plugins in the 2.5, and plugins themselves are here in the 2.x branch... So we don't have from now any strong versioning mechanism inside plugins, but we have started to -- we already have a framework here to implement that in the future. So that's what we have.

But for example, you have two ways to use plugins inside Traefik today - you can use plugins that are on our marketplace, so that are published on our marketplace, and you can use private plugins. So with private plugins you can do whatever you want. No version check whatsoever. You are free. And of course, if you use our marketplace plugins, we do generate some hashes for every build; so you can't touch plugins whatsoever, because it would change the hash... So we have some ways to ensure that if you use plugins from the marketplace, they are untouched. So it's a way of versioning plugins with a hash. That's all we have. We don't have, for example, minor versions of plugins yet.

**Gerhard Lazu:** Okay. That makes sense. But the plugins - do they use some APIs that Traefik exposes, and are those APIs part of your public API? Because that's like Go code, right? From the perspective of Go code, those interfaces - are they part of your public API that must be backwards-compatible between minors?

**Emile Vauge:** Absolutely.

**Gerhard Lazu:** Perfect. It makes sense. Again, for some projects I know it doesn't make sense, but I think this is important, because I just wanna know where you stand. And again, I love it.

**Break:** \[38:43\]

**Gerhard Lazu:** Changelog.com is a traditional three-tier monolithical application that runs on Kubernetes. We have a proxy in the front, we have the app itself, and we have the database. Fairly standard. One thing that we have been noticing - or I have been noticing, to be precise - is that we have some long-tail latencies in our proxy. Some requests, once they hit the proxy, they can take up to 40-50 seconds, while the 95th percentile is around 300-400 milliseconds. We'll have a whole debugging session, with Rawkode David and Marques from Equinix Metal around this... Because the stack is Kubernetes. So you have Kube Proxy, you have the database... There's so many layers there.

I'm wondering, if we were to use Traefik as a proxy, could it help us understand a little bit more why the requests are slow? At least from the proxy perspective.

**Emile Vauge:** One of the biggest pain points of users with microservices platforms -- so microservices are bringing so much to developers and to DevOps, whatever; but they are also bringing complexity. And finding the root cause of an issue is always kind of difficult, and could be a nightmare. So to answer your question, with that specific issue, finding some sporadic long request is always an issue. The best you can do with that issue is with Traefik you can enable distributed tracing, for example with Jaeger, OpenTracing, Zipkin, or whatever. And the best is to have tracing in all your services and in front of all your applications, database included. With that, at least you can see if your request takes some time in a specific service, or in the database, or whatever.

But sometimes it's even more complex. Sometimes the requests are slower inside the reverse proxy. You have a few requests that are so much slower; it could be a nightmare. One of the reasons, among others, is that some requests are using an older version of TLS. For example - but just an example - which implementation is slower? Or some TLS requests are using a specific cipher. Which is slower? Again. And it could be a nightmare to find. So the best way, in that case, is - with Traefik, you go on the dashboard, you can see the metrics in real-time, you can also export your metrics in real-time in any system - Datadog, Grafana, Prometheus. And the best you can do is enable the logs and you will see when you have a slow request in the logs, for example if it's a TLS request, which ciphers it uses, this kind of stuff. It can help.

But there is no magic. If you only have ten requests over a million which are slower, Traefik won't tell you "Hey, this is the reason why those ten requests took some time." You will need to find the root codes of that with the help of Traefik.

**Gerhard Lazu:** That is super-helpful, and what I do know is that our 99th percentile is a lot higher than our 95th percentile. So 95th, as I mentioned, 300 to 400 milliseconds. 99th, sometimes the spikes go as high as 40, 50 seconds. And that's what I need to understand - why does the 99th percentile from a proxy perspective take that long?

You mentioned something really interesting around services, and I'm wondering if you're thinking services from a Kubernetes perspective, or services from the perspective of putting Traefik in front of, for example, the database, so that requests -- because I know Traefik can proxy TCP requests. So is that what you're thinking, putting Traefik in front of the database and in front of the apps? So not just using the reverse proxy, but also using it for the services themselves.

**Emile Vauge:** Yeah, exactly. Services as a generic term.

**Gerhard Lazu:** Okay.

**Emile Vauge:** So in front of your application services, like Kubernetes, but also in front of your database.

**Gerhard Lazu:** Okay, that's really interesting. And are there CRDs that I would use? How would I configure this in the context of Kubernetes for Traefik?

**Emile Vauge:** It depends.

**Gerhard Lazu:** It depends. Okay.

**Emile Vauge:** Yeah. If you want to do this in front of your database -- specifically, it depends on how you are deploying your database, is it inside Kubernetes or not?

**Gerhard Lazu:** It's just \[unintelligible 00:43:59.00\]

**Emile Vauge:** \[44:01\] Yes. So if this is the case, you need to have something that handles the tracing in front of your database. I mean, it depends on the database. Some databases have some integration with those tracing systems, some don't. In this case, you need to have something in front of that.

**Gerhard Lazu:** Yeah, that makes sense. Okay. And can Traefik be the something, or would it need to be something else.

**Emile Vauge:** No, you can also use Traefik. So in that case, it wouldn't be an Ingress controller, I guess. It would be a bit different. But yes, it could be that.

**Gerhard Lazu:** Interesting, okay. I'll check it out. That's really interesting. Okay. So David and Marques, I know that you're not listening to this, because this will come out after we record, but just to let you know, I was thinking about this just before we did the recording. Okay.

So this is our own very specific problem, but I'm sure that you have a much broader perspective on the Traefik community. What other big problems are you seeing in the community, and what are you thinking about them, or how are you thinking about them?

**Emile Vauge:** This is the big question, because with Traefik we are talking about a really small \[unintelligible 00:45:02.06\] in the networking space. It is a reverse proxy thing, or the Ingress controller. But it's tiny. The networking space is so much bigger. And in fact, we've found that with the rise of microservices, the crazy exponential growth of the number of applications you have to deal with are -- not only you have to automate the reverse proxy in the networking space, you need to automate all the networking space. Basically, that's what we've found.

Another interesting aspect we discovered is that we do think that in the future, now that Kubernetes has won the orchestration war - there is no word on that, right? Companies are either testing, or migrating, or already using Kubernetes in production today, and they will be using Kubernetes even more tomorrow.

The big pain point that we are seeing coming is the number of Kubernetes clusters is just going to grow exponentially. It's already difficult to manage one Kubernetes cluster, but imagine if you have to manage ten or a hundred. It's crazy. And today what do you have to handle a hundred Kubernetes clusters? Nothing. You have to basically orchestrate all those Kubernetes clusters together yourself, and that is something that is pretty interesting. We do think that Traefik Labs being a networking expert as a company, has something to play in that space... Because having multiple Kubernetes clusters is just a big distributed system with wires between all those clusters; basically, if you control the networking aspect between all those clusters, that's fine. You handle everything. And that's what we think about the future, and that's what we think that will be the big pain in the next few years - how to handle all those Kubernetes clusters now that Kubernetes is a standard.

**Gerhard Lazu:** That's a really interesting perspective, because you're right - we ourselves only have one, and we're possibly the smallest team you could have; just a few people. Now, I'm already thinking of having another one. Like, a \[unintelligible 00:47:18.28\] cluster that manages all other clusters. So I'm wondering whether you're thinking about the management of Kubernetes clusters, whether that's your perspective, or the connectivity of Kubernetes clusters. What are you thinking about?

**Emile Vauge:** Everything. You can think about Kubernetes federation, that's one solution to handle several Kubernetes clusters as a management perspective, but also connectivity to those clusters, interconnectivity between those clusters, end-to-end security from users to all those clusters... All those aspects. High availability between all those clusters. How do you do a blue/green deployment between two clusters, or between a hundred clusters? This kind of stuff.

\[48:02\] So today it's almost impossible to do it simply. I mean, it is impossible to have something simply. You have to gather a gigantic number of software and platforms to make it work, and that's an interesting problem that we want to tackle at Traefik Labs.

**Gerhard Lazu:** That's a big problem space, and you made me really curious now, so I'll keep an eye. That sounds really interesting. So coming from this big problem space, coming to a smaller problem space - or not problem space, but like a space... Which is your favorite Traefik proxy? Because Traefik is so much more than just a proxy. By the way, if you've made it this far and you don't know what Traefik is, just go and check it out. There's so many aspects to it. But if we look just at the Traefik proxy, the 2.5 version, the latest minor, which is your favorite feature, Emile?

**Emile Vauge:** In the whole Traefik, reverse proxy - yeah; there are so many aspects... At least we have four categories, I guess. You have the routing, load balancing categories, the security aspect... You said the auto-discovery, the dynamic configuration aspect, I will say... And then finally, the observability aspect. And this has a lot of features in every of these categories. So it's kind of complex. But I guess one of my favorite features is one of the oldest, I guess... It's the LetsEncrypt integration. Traefik is natively integrated with LetsEncrypt, and this allows users to generate automatically TLS certificates for securing all those connections end-to-end. And this is one of the features that made Traefik so popular. You can get certified TLS for free; verified TLS certificate for free. And it's kind of magic when you see it work. So that's one of my favorite features in Traefik.

**Gerhard Lazu:** Okay. So this is unexpectedly interesting, and the reason it's unexpectedly interesting is because today we have Ingress NGINX and Cert Manager, which from what I'm hearing, Traefik is handling as a single component. That's interesting. Now, there's a certain requirement that we have with the certificates. Those certificates, especially the wild card ones, then we have to synchronize with the CDN. It's all running in Kubernetes, it's all self-contained, so that sync is happening, part of the same system, and it's like a closed system. Does Traefik expose those certificates? ...the private key, \[unintelligible 00:50:22.04\] in a way that we can upload it easily to using an API to the CDN? Is that available? Are those certificates available, do you know?

**Emile Vauge:** In theory, Traefik is connecting to the CDN itself. It is configuring itself the CDN, to create the DNS entry, for example, to validate your \[unintelligible 00:50:43.02\] certificate. So you don't have to do anything in that specific use case.

**Gerhard Lazu:** \[50:50\] I think I'm thinking about getting hold of the values of the public \[unintelligible 00:50:53.01\] and the private key, so that we can upload them to the CDN. Because Cert Manager, that manages the integration with the certificate provider - LetsEncrypt in this case - via DNS, so Cert Manager is integrated with DNS, which then gets a LetsEncrypt certificate... And then we have a job basically which automatically synchronizes the resulting private key in a certificate...

**Emile Vauge:** Yeah.

**Gerhard Lazu:** So we synchronize those with a CDN via the API. Because the CDN is running outside of Kubernetes. So Kubernetes is just like our origin...

**Emile Vauge:** Oh, okay, okay... Because you want to have the same certificate on the CDN.

**Gerhard Lazu:** Exactly, yes.

**Emile Vauge:** Okay, okay. So yes, basically you would have to do the same with Traefik.

**Gerhard Lazu:** Okay.

**Emile Vauge:** It would work the same, but you would have to do it.

**Gerhard Lazu:** Okay. So as long as I can access those values, that's all I would need, and that means I would reduce one of the components, or remove one of the components, and simplify the whole setup. I love that. That sounds great. Okay, so one more reason to look at Traefik. Wow, okay. Not that I needed it, but still. Okay, that's interesting.

So as we are wrapping up, as a listener, if I have to remember one thing from this conversation, what would that be?

**Emile Vauge:** So at Traefik Labs, as we already talked about during this podcast, we have a really strong connection with our community... And this is something I'm extremely proud of. Because first of all, it's not easy, and also, once you succeed in doing that, you get so much from it. So much. You get some feedback, you get some criticism, you get some angry people, you get many stuff. But that's super-important. And it helps to build some great tools together.

So yeah, I would love to encourage people to create this kind of communities even more and more in the future... Because at the end of the day, that's probably the best way to build a successful and useful product for your users. So yeah, that's my take-away. Communities are probably one of the hardest things to build and sustain, but the reward is huge.

**Gerhard Lazu:** From my perspective, that is a sign of a true cloud-native company and product. If you believe what you've just said, that's it. Because cloud-native is all about the community, all about the people. That's one of my focuses as well in this -- actually, that's my central focus for this podcast, the people behind everything that we do. Because if you don't nurture those relationships, if you don't look after those people, what do you have? A bunch of tech that goes outdated, and nobody wants to use, because it's horrible. Because it's not made for people, it's made for machines. It's made for - whatever. It doesn't really matter, because nobody cares. So that's it, that's a great one. I love that. Thank you, Emile. Thank you very much.

**Emile Vauge:** Thank you.

**Gerhard Lazu:** I loved having you. Looking forward to a next time. This was too good. Thank you.

**Emile Vauge:** Cool. Thank you so much for your time, too. Happy to discuss in the future.
