**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I am very scared about what is going to happen in this game. Like, when you told me that you come up with a game while you're in the middle of like a whole fever, I'm just "Is this gonna be a fun game?"

**Justin Garrison:** It'll be fine. It'll be fine. I'm not gonna say it's like extravagant. Like, I just thought of it when I was like half asleep. I slept most of yesterday, because I was sick, and then... Yeah.

**Autumn Nash:** Also, is there a correlation between the amount of candy you eat and you getting sick in the middle of summer, sir? It's 90 degrees outside. How do you get sick?

**Justin Garrison:** I don't know... Maybe?

**Autumn Nash:** How much candy is left in the drawer, Justin?

**Justin Garrison:** Oh, I haven't filled it recently. I have cough drops in here right now. I'm trying to soothe my throat a little bit, and candy wasn't doing it. So it's just a different way to --

**Autumn Nash:** A different way to get sugar?

**Justin Garrison:** Yeah, pretty much. It's medicine, so it's fine. I can have more of them.

**Autumn Nash:** Your tiny bestie that lives at my house also says that. He's like "But a coughdrop? I'm sick." And I'm like "No, it's not how this works."

**Justin Garrison:** It was a good strategy though. I like it. On today's show we have Abubakar from GitLab. GitLab has -- we've been doing all the Git hosting providers, which is fun.

**Autumn Nash:** We're Gittastic over here, okay?

**Justin Garrison:** I mean I could put Git in like the show tagline, of like "Everything after Git." What's the next thing after Git push? It's a Git service, right? So...

**Autumn Nash:** How you maintain all of the code that you push...

**Justin Garrison:** Yeah. So it's been fun, because we had Gitea, we have GitLab today, and I'm working on GitHub, and we have... I think there's one other one that we're talking to you soon. So yeah, it's fun. This was a great conversation.

**Autumn Nash:** I didn't know there was another company outside of Gitea, GitHub and GitLab.

**Justin Garrison:** Oh, there's plenty of like random services that are open, or code dumps of "Hey, I can host a website and a file endpoint." You can do those things, and then you have a Git endpoint. But those things have grown much beyond just a web server and SSH. They've integrated code environments, and runners, and policies, and all sorts of stuff.

**Autumn Nash:** I know that everybody wants options, but at some point I feel like the code that you write is so valuable... I don't know if I would trust just anybody to host it.

**Justin Garrison:** I mean, the whole point of Git was you don't need this thing. But I do find it funny, where a tool that was designed for not centralization...

**Autumn Nash:** ...is centralized.

**Justin Garrison:** ...is definitely -- there is value in centralization. Everyone that wants decentralization, it's like "But actually, you can find things."

**Autumn Nash:** It's very much the cloud versus on-prem conversation. There are no absolutes for everything. There's a reason why people say "It depends." And sometimes decentralization is great, and sometimes just centralize it and stop being ridiculous. There's always kind of both ways.

**Justin Garrison:** \[00:07:54.12\] So yeah, so in this conversation we go through a little bit of GitLab in general, and also his kind of a journey at GitLab, which was just fun to talk about. So we'll jump into the interview, and then we will come back with that game that we were promising. We'll talk to you all soon.

**Justin Garrison:** Alright, thank you so much, Abubakar, for coming onto the show to talk to us about GitLab. Because I used to be responsible partially for GitLab internally, and I've used GitLab for projects for a long time.

**Abubakar Siddiq Ango:** Nice.

**Justin Garrison:** What are you responsible for over a GitLab?

**Abubakar Siddiq Ango:** Yeah. Well, actually, I think it was \[unintelligible 00:08:32.01\] completed ATS in GitLab. So I've gone through different roles, and seen GitLab evolve over the years. I did support, I started as a support engineer. And support is one of the most exciting roles as an engineer that you can have. You see real problems out there. So I'm currently a developer advocate for GitLab, and I collaborate largely with the engineering team, infrastructure team and the Alliance team at GitLab.

**Justin Garrison:** Does GitLab have like a call center?

**Abubakar Siddiq Ango:** Yeah.

**Justin Garrison:** Was it like a support role, or is that like email?

**Abubakar Siddiq Ango:** It's mostly via Zendesk.

**Justin Garrison:** Okay. And this is for hosted GitLab, right? So like the actual like gitlab.com proper.

**Abubakar Siddiq Ango:** Yeah. We support all of GitLab customers. So we have the GitLab SaaS, which is hosted on gitlab.com, which is a multi-tenant, where we have the single tenant, which is GitLab dedicated, and therefore self hosted. Those will host GitLab internally. So all of them have supported.

**Justin Garrison:** Cool. What has changed at GitLab over the last eight years? It's gone through a lot of different things, right?

**Abubakar Siddiq Ango:** Yeah, yeah. A lot. It's a lot of things that have changed. In terms of the product itself, I think we have evolved. We'll make new releases every month. It used to be \[unintelligible 00:09:50.18\] no guarantee there's a new release before. It was changed to make things -- some efficiency reasons. It was changed to, I think -- is it every Thursday of the month? I've forgotten the cadence now.

So GitLab has evolved from just being an application to get you from idea to production, to more like dev/sec/ops platform. And now, an AI-powered dev/sec/ops platform, because we are adding more AI features to make you not just okay to get -- like the name of the show, "Everything that happens after git push." So not just getting your application to production and monitoring, but also help using AI to build your applications faster on GitLab. And also security. It's first-class on GitLab now.

**Justin Garrison:** What does that mean? What does that actually integrate to say you do security?

**Abubakar Siddiq Ango:** Right from you pushing your code. Scanning. Container scanning. Static application security testing. DAST, Dynamic Application Security Testing. Compliance scannin, license scanning... All the things to ensure that the code you are pushing to your application is safe and secure. And also, if your organization has certain policies, "Oh, this has certain dependencies that you can use, these are certain licenses that you can use", maybe GDPR, or maybe, "Okay, we use Apache internally", or we don't. Those policies can be said. So all those scans can be done on GitLab, to ensure that your application meets every regulation, especially for regulated industries. They have more policies or more things they need to ensure are in place before the application gets to production. So all those can be done on GitLab.

**Autumn Nash:** How do you stop the scans from just becoming annoying?

**Justin Garrison:** I was like, "The struggle is real."

**Autumn Nash:** \[00:11:56.09\] It is. Automation is beautiful, and we want to make it where we're using automation to take the weight off of us manually doing things. But then it gets to a point where it's just so much noise that you stop paying attention to it. So how do you make sure that the scanning and the warning stays valuable?

**Abubakar Siddiq Ango:** Yeah, I think in GitLab one of the things we do is to have a security center where you can review all the scans. Like, okay, maybe certain severity; probably you're scanning your container, and you want to focus on the highest or the critical. Or maybe the medium. And you can also have your security team they have on the -- at the GitLab instance level, you as a developer can do your work, but you have your security team who can be notified "Oh, there's a new critical security issue that has been flagged by the system." Then they can review, and probably mark it as "Okay, this is a false flag." Then you can continue your work.

So it's the level of management and structure within your organization that will determine how it's useful for you, or if it's counterproductive for you. But with GitLab, it can make it useful for you as a person, your project, your team, or the instance as a whole, with your security team managing the whole security processes.

**Autumn Nash:** Can you turn it off? And also, I would like to know -- I would love to talk about your career progression, because I think some of the best engineers I've ever met are the ones that come from working in support, because you learn so much working in support... And I feel like you guys don't get enough credit. The amazing stuff that you learn, especially if it's the same product and you learn how to fix it for people... You guys become the real MVPs, because you know so much of what can go wrong and what people configure wrong. So can we talk about like your career progression and how you feel like that makes you better at your job? Because especially being like a dev advocate, I think people are really like "Is DevRel dead now?" But when you have the experience of support, and then you worked on the engineering team, you are so much more valuable, because you were in the trenches before.

**Abubakar Siddiq Ango:** Yeah, definitely. Yeah, I think my career started after school, from Nigeria. I was working in my alma mater. That's the Federal Polytechnic Bauchi, in northeastern Nigeria. And after working like five years, mostly doing network administration, managing the campus network, running -- that was back in the days when Ubuntu canonical was still sending CDs out there. So I used to move around with a number of CDs, and it was one of the reasons why the head of \[unintelligible 00:14:37.28\] were like "Huh, you are good with Linux. Let's give you an internship in this school." And from internship it turned to a full-time job.
And I was the type who likes to tinker with things, who likes to learn, who likes to experiment with things. Playing with Mikrotik routers, and a lot of things back then. So I was employed and I created the first website of the school, and so on.

But after five years, I felt "Ah, I need to try something new. I need to go out there and learn something new." There's this word we use in Nigeria, "local champion." Just within the school. So I need to see what is out there. That was when I tried to join GitLab as a frontend engineer the first time, because I did a lot of frontend engineering. I didn't get, but I tried a second time like "Huh, there's this --" Previously they called it service engineer. So there's a service engineer role. Let me try to get in as a service engineer. I did my interview...

And I used to tell a funny story. During the interview, or during my last interview, I was interviewing with the CEO of the company. And I was having serious network issues. The network was 3G then. So I had to step outside of the house, climbed a rock with my phone held up, with the earpiece attached to my ear to complete the rest of the interview. \[unintelligible 00:15:54.01\] They even offered to reschedule the interview, and I'm like "Nah, I'm not missing this opportunity. Let me do it that way."

\[00:16:05.06\] So I joined GitLab as a junior support engineer. More like "Okay, even if I would take a junior role, down from what I was doing before, it's fine. I'm learning new things, and experimenting." So I started as a junior support engineer, started supporting customers who are running GitLab on prem. That's, okay, probably they install it on a VM, or on a machine somewhere... You see different types of customers.

Then I was promoted to full support engineer, and then that was when Kubernetes was becoming more popular. Everyone wants to run something like Kubernetes. I was one of the first on the team to learn Kubernetes, because we were now having customers come in and say "Okay, we want to run GitLab CI runners on Kubernetes, so we want to deploy GitLab itself on Kubernetes." But then we've not really had a mature support for Kubernetes. But when we had our GitLab Helm charts and so on, we started supporting more customers using Kubernetes. So I was one of the ones that "Okay, let me go to CKA, let me learn so that we can support." So I became like the default Kubernetes expert, and also training some other team members on the team.

But while in support, I saw a lot of things, a lot of customers. I think there was one customer one time on a Sunday; we were paged to support the customer. And the call ran from almost midday my time til almost midnight. So we had to handover -- on the call we handed over from someone else to me, and we continued to call... Because when I say they HAVE to go back online... There was an issue, and they had to go back online before Monday morning. That was like the longest customer call I've had.

So part of working with customers, it gave me more reason to empathize, and also to support customer agents. For example, anytime I'm angry with my bank, and I call them, then I'm kind of like "Hm... I have experience with support. Maybe I should pipe down the anger and explain for them to understand", because I've been there, and I know some kind of pressure that they go through sometimes.

So that's a role, and because I've been a community person, being a part of the Google Developer Groups community since 2015, that gave me the experience of speaking with the community, developer community. And also with my experience in support. When GitLab started the developer evangelism unit, then I think Priyanka Sharma, the current general manager of CNCF, was the one that started the department then. And I felt like "Okay, maybe I should try developer advocacy, since I have a lot of experience in community."

So I switched to developer advocacy, really as a developer evangelism program manager. So I speak, I do a lot of content writing, and then I also have the team to manage programs. And we dogfood GitLab a lot. So everything we do is within GitLab.

So my experience, working as a support engineer, and knowing GitLab as a whole, helped me to organize the work of the team, and also make sure the team is creating the content and the speaking opportunity that it needs to do. So as a developer advocate, I've done quite a lot of things. Keynote speaking, I was a CNCF ambassador, and a Google developer expert for cloud, and so on. Yeah, that's been my progression so far.

**Autumn Nash:** I think it's important to not downplay the fact that you had to be in the trenches, solving people's problems, and you got that empathy. A lot of people can be technical, and that doesn't make you a good manager.

**Abubakar Siddiq Ango:** Yeah, yeah.

**Autumn Nash:** \[00:19:47.26\] But learning, for one, that empathy and seeing people like go through that struggle and stuff - it helps you to be better for your customers, and better help developers and customers use a product, to be a good dev advocate, and then it helps you to gain the empathy to be a good manager, because that is such an important part. And community is so important. So I think --

**Abubakar Siddiq Ango:** Definitely. Because you learn to communicate, you learn to write, you learn to listen, and you learn to solve problems. So it gives you a lot of experience to be able to even do other jobs.

**Autumn Nash:** I think that's also very pressing right now, because we are in an economy and a job market where people are maybe taking jobs that they wouldn't have considered before. And your story is "Hey, I had to take this job, but look at how it made me better." You know what I mean?

**Abubakar Siddiq Ango:** Exactly.

**Autumn Nash:** And that's really encouraging. I feel like if people are maybe a little down looking at jobs right now, maybe you can find something that will help you learn and gain that empathy, and then it turns out better... Because it's definitely a little demoralizing out there.

**Abubakar Siddiq Ango:** Yeah, it is.

**Break**: \[00:20:56.03\]

**Justin Garrison:** Going a little back to what you were saying at the beginning of the conversation, I want to talk a little bit about the requirements of GitLab. As things have changed over time, now that you're doing let's say more AI features -- because GitLab has development features, it has a web-based development platform, and it also has AI stuff. If I'm running GitLab on prem, what does that mean for my infrastructure? What does that mean for or what my requirements are? It used to just be a web interface and some storage. The old school GitLab was like "Oh, I can SSH and push some files up there", and a web interface to manage users or whatnot. And now you have Kubernetes runners, and you have these AI integrations. How has that impacted the infrastructure side of GitLab, for users that aren't running the hosted version?

**Abubakar Siddiq Ango:** Yeah, I think for self-managed users you have several options, and it depends on how you want your architecture to go, how your scale is. For example, you can just install GitLab on a $20 VM instance, and you'll be fine. Probably you're not doing quite a lot. But then probably you get to a point where "I think I need more." We have a resource that we call reference architectures. Because when I was in support, there was a lot of time where customers will come and say "Oh, we have 10,000 users, and we are hitting this edge case, or we are having these issues." So we created a reference architecture like, okay, if you have 10,000 users, or your are doing this type of scale within your organization, this is how you should probably set it up.

Or probably we have what we call GitLab Geo. You might probably need to use GitLab Geo, or you might probably need to add these changes to your system. Then we have Kubernetes, we introduced GitLab Helm charts there, like, okay, if you want to take advantage of the scale of GitLab Kubernetes, you can use our Helm charts to deploy the GitLab application itself on Kubernetes.

And there are certain settings or configurations, depending on your skill, that you can set to say "Okay, this is how your system will run. Now, as GitLab itself, the gitlab.com is running on Kubernetes, on GKE, and we dogfood our Helm charts. That way we are able to see all the edge cases, we're able to see all the issues, and we add those things we've learned back to the Helm charts for our customers to use.

**Justin Garrison:** Yeah, your Helm charts have been really good for a long time. I was running the Helm chart years and years ago, in Kubernetes clusters, that was self-hosted, just to see how you were setting up stuff. Because there was a lot of things you could tweak in there, where like "Oh, if you don't want Redis, you don't need Redis." You can take that section out and you say "Oh, Helm chart. No Redis persistent storages over here, or mounted externally."

**Abubakar Siddiq Ango:** Yeah, exactly.

**Justin Garrison:** All of those options made it a little easier to expand the system into areas where it's like "Oh, I need some of these things either as options, or I need them for scaling reasons." And your Helm chart was one of the very first really complex applications that I saw that started doing that, that was "Oh, this isn't just an install Apache, or install nginx with a couple of files." It's like no, you have 8 or 10 different components that all need to work together.

**Abubakar Siddiq Ango:** \[00:27:51.03\] Yeah, exactly. And you can decouple them to say "Okay, I don't want to use this." For example, I remember supporting a customer who was using Azure, and we had not fully tested our Helm charts then on Azure. I'm like "Okay, let me experiment." Created an Amazon account, tweaked the Helm chart, and added some costume features that you want, and be able to create a proof of concept for the customers to use. So we designed this to be highly customizable, and easy for people to tweak and scale.

**Justin Garrison:** Experimentation is so important, especially at that level of like "We've never tried it, so let me go ahead and see what happens." I feel like a lot of organizations, they take out the -- because experimentation is risk. And they say "Oh, well, we can't allow someone to have risks, because we don't know what they're gonna do to the environment." But you're not gonna learn.

**Abubakar Siddiq Ango:** Yeah, exactly.

**Justin Garrison:** An environment has to have people that are willing to put that time in and learn.

**Autumn Nash:** Proof of concepts and experiments are sometimes how the best features are either made, or made better... Because there's always a feature that customers have been complaining about, and product never hears about it until somebody tries it and they're like "This is a huge gap, and we didn't know it existed."

**Justin Garrison:** There's a lot of organizations that try to like shove that in hackathons. Like "We're going to have quarterly hackathons", or half-year hackathons, or whatever... But those aren't -- like, let someone solve the problem on their own time. You can't just time box it and say "Oh, only during this time of the year can you have an idea and an experiment." No. You have to be able to experiment year round.

**Autumn Nash:** That's why I think solutions architects are also really important, and they don't get enough credit, because when you're a really technical solutions architect, you will build a lot of proof of concepts for your customers, and that's how you find so many things that the documentation says this works together, but it doesn't really. You know what I mean? And you can really make that better for your customers. Because the worst thing is to say "Hey, go use this and it'll be great", and then it does not actually work that way. Plus, I feel like you can't make real recommendations for customers and you can't really design architecture if you're not building a proof of concept and seeing how it all works together, and how the features and changes of like software and SaaS products have grown, or made it better or worse. Because sometimes things can make it worse, and you need to give that feedback.

**Abubakar Siddiq Ango:** Yeah. And I think for GitLab, one of the advantage that we have as an open core company - we have the business side, we have the open source side - is our customers and users are able to like "Okay, I'm frustrated about this thing that's not working. Let me tweak it." Then subsequently, they push it to upstream. We've had -- I think most of our MVPs for our releases are usually someone, an engineer, a customer of a customer, who saw a feature that he was like "I need to fix this", or "I need to tweak this", and he contributes it. Because we have GitLab development kits that anyone can "Okay, let me quickly bring up an instance of this specific version of GitLab, test this thing, build it, run it and see how it works." Okay, then after the fix is working on my end or the patch, I release it out there. So it allows people to not just experiment with the product, but also actively develop the product and try new things.

**Autumn Nash:** That's awesome, because GitLab is getting free, I guess, development, but also, you're getting your customers to buy in that if something isn't there, they can go and contribute that, and then they feel part of the ecosystem also. So that's really cool.

**Abubakar Siddiq Ango:** Yeah. There's this sense of ownership they have. We have a dedicated contributor success team that does all the work to make sure it is easier for them to contribute. And for companies who want to actively contribute, we actually engage them, and even educate their engineers on like "Okay, this is how you can contribute or use some of the knowledge we have internally."

**Autumn Nash:** That's really smart, because it's very mutually beneficial, especially for GitLab.

**Abubakar Siddiq Ango:** It is.

**Justin Garrison:** Let's say I want to develop on GitLab... How do you go about testing? Because in a lot of cases you're like "I need to run it locally." You're like "I'm going to mount this web interface locally, and then I'm gonna tweak, the button's gonna be blue", whatever. But GitLab has a web console similar to - GitHub has Codespaces, or whatever is called... GitLab has a web IDE as well, but you're not running all of GitLab inside of that web console, right? So how are you going about doing some of that development? What does that look like?

**Abubakar Siddiq Ango:** \[00:32:06.02\] Yeah, we have what we call a GDK, GitLab Development Kit. It's huge. You can use it to bring up all the different \[unintelligible 00:32:11.23\] you need to run locally. More like you have in a minikube on your system. So you can bring up the GDK, you can set "Okay, this is the version of GitLab I want to test and run on my system." And then one way that will also support customers is - because when you build something and you push it, you probably create a fork of GitLab, and you push those changes to your fork. There are a ton of CI jobs that need to run. And that will probably eat into -- probably it will lead to CI credits you have on your account; let's assume you're probably using free accounts. We have a program where if you sign up with the contributor success team, you are added to a dedicated group to use some dedicated GitLab runners to build your job. So you don't have to use your own CI credits to do that. Because we've had complaints from a lot of developers like "Okay, I'm making this contribution, but I can't build them on my system, and I don't have CI minutes to do it." So once you join that group or are added to the group, you can take advantage of the CI runners that GitLab has.

**Autumn Nash:** It seems like GitLab is really good at listening to their customers, and I think that is like an underrated skill, observability and being able to listen... Because so many companies will make huge acquisitions and spend all this money to acquire software, and then not listen to customers. And like, why did you spend so much money to not listen to people...? So I think that's really cool that you're not only listening to your customers, but then you're like "Hey, we realized that open source is benefiting us, so now we're gonna go and invest." Because I mean, what you're saying - you've made huge investments into making it possible for people to make good contributions, too.

**Abubakar Siddiq Ango:** Yeah, definitely.

**Autumn Nash:** So it's evident that you've not just listened, but then you've implemented and you've really made an investment into making that easy for people. So I just think that is -- I hope other people that want open source contributions and help from community really listen to that, because that is awesome. And I definitely think that it sucks that you have to always bring it back to return on investment, but I definitely think that you will get a return on investment on that, for sure.

**Abubakar Siddiq Ango:** Yeah, definitely.

**Autumn Nash:** Even when it's just hiring, you already know a bunch of people that know how to work with your software. You know what I mean? So I think it's like really smart.

**Abubakar Siddiq Ango:** Yeah, I think getting people to contribute, especially your customers - because they are the ones running your application at scale.

**Autumn Nash:** Yes.

**Abubakar Siddiq Ango:** Yeah. So getting them to be able to contribute back to your software, they bring valuable knowledge, and some edge cases that your developers might not have seen, or might not have experienced. They have seen it, and they are able to give you that -- not just tell you in an issue, they are actively contributing.

**Autumn Nash:** Which is fire, because - I mean, think about it... When you sit there, you can design software, you can build it, you can think of every edge case, and then a customer will be like "I'm going to use it in this really weird way that you've never thought about it", and break it in like this tiny way that you'd never know about it... And not only are they finding that break, but they're like "Hey, let me fix it for you." \[unintelligible 00:35:21.29\] awesome.

**Abubakar Siddiq Ango:** Yeah.

**Justin Garrison:** I think giving back in that open source way is also interesting. It's something that GitLab does that I don't see many companies do. Or I don't know another company that has done it as like the handbook is open source. The GitLab company handbook, including what people are paid; there's pay ranges, and everything. It's handbook.gitlab.com, and you can just go there and see all of the things you normally would only see if you work at a company. And it had a lot of interesting guides for -- I remember there was like a DevRel section of the handbook, which was like "Here's how we do developer relations."

\[00:36:03.05\] And when I was working as an engineer, I'm like "What does that look like?" And they're like "Oh, we just open-source all of it, and we tell everyone like "This is what we're going to do. This is how we measure, this is what we're trying to do. And here's our goals", and it's all just part of that open source handbook, is being out there. And I feel like having the code open source is one thing. Having the how you do business is completely separate. It's like, that's a different level of being open and visible for other people to see.

**Autumn Nash:** I think that's kind of awesome though, because let's say I'm going to start my own startup, or just something, right? And I have no idea where to start. Somebody can go and look and maybe take some tenets of GitLab. Because think about it, how many times have we seen a company copy other people's tenets? But I think it's more than that. Where we are going economy-wise, and in tech, so many companies that used to fund nonprofit and open source are no longer funding, so it's going to cause like a major downturn when it comes to open source. But 70% of open source is infrastructure, or of infrastructure is open source. So seeing companies like GitLab that are good stewards of open source is going to be so influential moving forward. People that know how to get people to contribute, and to do it the right way, and to not just take from people, to really invest in that community, and to be good at community is going to be probably the only way that we keep open source moving forward.

**Abubakar Siddiq Ango:** Yeah. I think one of the conscious decisions GitLab made right from the beginning was -- I joined GitLab when the company was around 100 team members. I think now we've -- I don't know the official numbers, but we are well over 2000, if not more than that. So as a company that is not a work from home company, but a remote company, we had to have this culture of asynchronous communication, where my colleague in the Netherlands... I have a colleague in Israel, a colleague in Nurnberg. My manager is in New York. I have another colleague who is in California. Our time zones are varied. So to be able to communicate properly, we need to have a single source of truth for all the knowledge in the company... Like "Oh, our team just decided, okay, this is the policy we do." Handbook-first was the culture. Let's put it in a handbook. Even if it is not fully fleshed out, but we have some knowledge some way.

And then - which is still the case now - when people want to know something, you go to the handbook first. You search. There is even a term within the company, of "someone handbooked me." If you asked a question in Slack, and instead of the person to start giving you everything, and start typing, they will just give you a link to the handbook. So more like there's hardly anything you want to ask that is not in the handbook. If it's not there, and you just discovered it, just open a merge request, and someone will review it and merge it.

So that as synchronous communication culture made us that "Okay, everything should be documented." A single source of truth, which is the handbook. Not on Slack. Because Slack -- I think we have this policy of the messages on Slack are deleted after some time. But in the handbook, everything is persisted. And anytime there is something new, we go there. Okay, you want to learn about this strategy of GitLab?" As a team member, probably you just returned from \[unintelligible 00:39:27.23\] You can just go to the handbook. You know everything about the current OKRs. \[unintelligible 00:39:33.20\] or new things that have happened since you probably went to \[unintelligible 00:39:39.09\] Or you want to learn about the production infrastructure of GitLab. You go to the Engineering Handbook, the infrastructure handbook. So you get to learn a lot of things about GitLab.

When I was joining GitLab, one of the things I did to prepare for the interview was just to sit on the handbook page - that was like eight years ago - and I read as much as I could read, and attended the interview. More like I knew more about GitLab, even before joining the company.

**Autumn Nash:** I also think that's cool to create a culture of documenting things. Documentation and writing things down is so underrated... Because at some point you forget what you didn't know when you started. So when you're first learning something, write it down.

**Justin Garrison:** \[00:40:25.27\] Writing things down is different than making things accessible. Because at my first job I had a binder; that was the handbook. A physical binder, that if I had to go look up something I had it at my desk, and I'd pull it down, and I'd look through it, and I'm like "Okay, where's this thing?" And having something that is updatable by everyone at the company... Like, this is a Git repo; you know how to write some Markdown and add to it, or change things if something's happening, but then also being able to search through it... Those are important things. Because a lot of companies, that's like the HR vault, of like "Oh, you've gotta go talk to someone at HR if you want to know that specific policy." But then having a lot of GitLab available and open, not only internally at the company, but just like available online, is fascinated as a company culture.

**Autumn Nash:** Not just that, but having one source of truth that is easily accessible, that you can add to will stop it from getting outdated. And we all know that documentation and different policies - people don't understand them, or they don't update them, so they become useless.

**Abubakar Siddiq Ango:** Yeah. And the process of adding makes it easier to collaborate. "Oh, I have this idea of how we should work." I started \[unintelligible 00:41:36.14\] assigned it to a couple of my team members to review. Then discussions start. "Oh, maybe we should change this", or someone changed the wording, or added more steps. The whole collaboration happens in \[unintelligible 00:41:47.15\] that "Okay, this is fine." A VP or a manager, "Okay, this is good", approves it, and it goes into the handbook.

The main ideas is it must start with a merge request, and then collaborate within the merge request. Once everyone agrees or feels "Okay, this is right", it's merged, and it becomes part of the handbook.

**Autumn Nash:** Also, I think that something that we're not talking about a lot right now is - yes, we're not really hiring, and we're having like a really bad job market now... But when the job market gets better, companies like GitLab are going to set themselves wildly apart, because for one, you're a remote-first company to begin with, you've figured out asynchronous communication, and you have all these developers that are contributing to your stuff, that you know where they are, and they know how to use your stuff. So you've almost created your new new hires, your next new hires. Your future possibilities of hiring are fire.

**Justin Garrison:** Well, Abubakar, thank you so much for coming on and talking to us all about GitLab, and how things are run, and your role there. If people want to find you online, what's the best place that they should reach out?

**Abubakar Siddiq Ango:** Yeah, LinkedIn. Abubakar Siddiq Ango. And also my personal website, abuango.me.

**Autumn Nash:** Your story is super-cool.

**Justin Garrison:** We'll have those in the show notes, too. So thanks so much for coming on, and we'll talk to you again soon.

**Abubakar Siddiq Ango:** Yeah, thank you very much.

**Break**: \[00:43:14.26\]

**Justin Garrison:** Thanks again, Abubakar, for coming on and talking to us about GitLab. If anyone is out there running GitLab in your environment - I used to be semi-responsible for that, and their Helm charts were really cool. It's one of the really neat things that when I first started out with Kubernetes, and also being responsive for GitLab, seeing how you could run like a complex application was really cool. So go check those out. I'll put a link to the Helm charts in the show notes... Because it has all those kinds of tunable features, which I thought was really cool.

**Autumn Nash:** I think it's really cool, their model of getting community contributions and how you can tell they've invested a ton into making it easier for people.

**Justin Garrison:** Yeah, making it easier to develop the software, and test the software, and even the programs he talked about, about having runners... I never thought about that, where it's like oh yeah, once a piece of software has so many test suites, it takes longer to run the test suites than it does for you to like develop the feature. And you need a way to verify that. And having that as like a "You don't have to pay for all this compute to provide value back to us" is pretty neat.

**Autumn Nash:** Which, again, just shows that they're listening more than so many companies out there.

**Justin Garrison:** Alight. So for today's game, this is going to be similar to what we had in the past with -- I think we called it RTFM or something, where you guess what the project would do... But in this case, I had this idea because I use a couple command line tools often, and curl and wget are two that I use pretty frequently. And they're mostly -- they can do kind of the same thing each one. You could do similar things, but they're kind of a different use case, where wget wants to download a file, curl wants to get data. It's going to get the information out of a web file, or whatever. There's actually a new -- curl has a wcurl as a Bash wrapper, for like you can use curl as wget. It's just a wrapper that they're starting to ship with it. But for today I thought it'd be fun... Autumn, you can pick - do you want curl or wget?

**Autumn Nash:** Oh, gosh... I feel like I've used curl, and I haven't -- I don't. Curl...

**Justin Garrison:** Okay, if you've used curl more, then you will be guessing the curl flag. So open a terminal, and just type wget --help, okay?

**Autumn Nash:** I mean I also use wget just because of different scripting...

**Justin Garrison:** Actually, I'm gonna have to open the man page for curl... Because curl's help output's actually pretty small. So you're going to open the man page for wget, I'm opening the one for curl. And then you're gonna tell me a flag from wget, and I have to guess what that flag does.

**Autumn Nash:** Oh, this is gonna be so painful... Why are we doing this in our free time...? You're giving me work flashbacks.

**Justin Garrison:** I mean, I think a lot of people use these tools, and I don't ever remember... I was gonna use FFmpeg. FFmpeg is notorious for having way too many flags. But I'm looking for some of these curl -- yeah, there's so many.

**Autumn Nash:** \[unintelligible 00:51:07.09\]

**Justin Garrison:** Just do man wget, and you should get -- halfway down the page you'll start seeing the options. If anyone has never seen, I have my resume as a man page.

**Autumn Nash:** That is so Justin...
**Justin Garrison:** Yeah, no, it's always been fun. If you go to justingarrison.com/resume, you'll see my resume. It's formatted like a man page.

**Autumn Nash:** I love that you have like such ridiculous -- I don't even know what the... I don't even have a word. Like --

**Justin Garrison:** I saw that format from someone else, and I asked them, I was "Can I steal this?" and they said "Absolutely yes." And so I have been using that for a long, long time.

**Autumn Nash:** Okay, but how do you go for "Hey, here's my broken arm from a mosh pit, and here's my man page resume." It's just...

**Justin Garrison:** \[00:52:02.12\] Okay, so as an example for curl, do you know what the -k in curl does?

**Autumn Nash:** I don't know, I look up half of the stuff unless I use it all the time.

**Justin Garrison:** I know, right? We all look it up all the time. And -k is one that I know a lot, because I use it and abuse it... But it ignores the certificates. It's like, it doesn't matter if the certificate is valid or whatever, we're just going to excuse this... Because curl by default will check and validate the certificates. But you could do a --insecure is the full flag, and a -k is just "Get it out of here." And there are so many flags in this. This is probably a bad idea.

**Autumn Nash:** You know, every time you come up with something when you're sick, it's never -- or when you're taking a nap. I should just know that we've got ourselves in too deep.

**Justin Garrison:** Hey, my nap ideas are amazing.

**Autumn Nash:** They're either good, or like I'm deathly afraid of like what it's going to be. You're like "Let's go down the whole CNC list and come up with just --" What happens to you in a nap? You and Dr. Pepper in a nap, you almost come back with too much energy.

**Justin Garrison:** Okay, so I'm looking through some of these flags, and I think this is going to be more difficult than I expected... But we can still try it, okay? So do you have any flags -- do you see any flags in there for wget that you want to see if I can guess?

**Autumn Nash:** \[unintelligible 00:53:28.04\]

**Justin Garrison:** I mean, yeah, we're like requesting files from the internet.

**Autumn Nash:** Wget is really straightforward, I guess... What do you think -a is for?

**Justin Garrison:** Wget a?

**Autumn Nash:** No. That's like --

**Justin Garrison:** Well, I don't know it, so you can \[unintelligible 00:53:47.16\]

**Autumn Nash:** It's append, but I thought you'd get that, because it's like that in Python.

**Justin Garrison:** Oh, okay. Curl has a -a as well, which is also append... Which is I guess used for when you're uploading data. It's like "Oh, but also send this file", or send this data.

**Autumn Nash:** Well, it's to add it on when you \[unintelligible 00:54:02.07\]

**Justin Garrison:** But does wget have a send? Can I wget and send data? I don't know. I actually have never used that. Okay, so curl -F. Any ideas?

**Autumn Nash:** Firewall something? I don't know.

**Justin Garrison:** It's form data. You can submit a form...

**Autumn Nash:** I have never in my life memorized curl commands...

**Justin Garrison:** Oh, I know. This is not the point of memorizing it... But you can submit a form, like a web form with curl.

**Autumn Nash:** What about -w, for wget?

**Justin Garrison:** Is it capital W, or lowercase?

**Autumn Nash:** Lowercase.

**Justin Garrison:** I have no idea...

**Autumn Nash:** That's actually kind of useful. Await.

**Justin Garrison:** It's just like waiting for a return, like a timeout?

**Autumn Nash:** Wait for a specific number of seconds between retrievals.

**Justin Garrison:** Oh, so if you're hitting like multiple files. If you overload a web server, or something like that.

**Autumn Nash:** Yeah. So you don't basically DoS it and get like timeouts.

**Justin Garrison:** Yeah. I've seen -- there's a bunch of random stuff that's like very specific. Happy eyeballs timeout? What?! "Happy eyeballs is an algorithm that attempts to connect to both IP" -- oh, I did hear about this. It connects to IPv4 and IPv6. The algorithm is called Happy Eyeballs.

**Autumn Nash:** That's hilarious.

**Justin Garrison:** So it connects to both IPv4 and IPv6 at the same time. Basically, whichever one replies first, it's like "Okay, I'll use that one." Happy eyeballs. -H in curl? Remember that one? Actually, I occasionally do use that one.

**Autumn Nash:** \[00:55:40.20\] Which one's that? I'm trying to find a cool wget. I feel like in wget they're all very straightforward.

**Justin Garrison:** You've got your header information, sso if you want to send username/password in header, or x connect as, or host, or whatever... Host is probably the one -- I always use it... It's like oh, I have multiple websites on the same server, and I need to...

**Autumn Nash:** I'm kind of jelly that you got curl, because wgets are all very boring. There's no eyeballs. Like, that's a hard demand to follow. Like, how am I supposed to compete with that, Justin?

**Justin Garrison:** This isn't a competition. I mean, it is a game, but... I don't think either one of us have gotten any of them right yet, so... Junk session cookies is a flag. "When curl is told to read cookies from a given file, this option makes it discard all session cookies."

**Autumn Nash:** Clearly, the people that created curl were much more creative than the people who did wget.

**Justin Garrison:** I'm actually wondering if wget uses libcurl. I'm assuming it does, because libcurl is just the library. And I would assume that a lot of the things -- because, I mean, curl supports a bunch of newer protocols, but I'm wondering if they're just not exposed in wget. Location trusted... What's that...?

**Autumn Nash:** I also think it's weird that wget seems to have less commands, or maybe they just have less popular coomands...

**Justin Garrison:** Well, and I think the use cases are smaller. I mean, at least for me. Generally, I only use wget to download files, whereas curl I use it for like making random HTTP calls.

**Autumn Nash:** That's what I was thinking. I was like, you have to think of it in context of what they do.

**Justin Garrison:** Yeah. So okay -- oh, there's a -M... curl -M. What is that?! Like, the man page is like embedded in the file...

**Autumn Nash:** That's kind of cool.

**Justin Garrison:** It's just like instead of -H for help output, like this literally is -- but this isn't all of the man page. Alright, now I'm confused. I don't know what this manual is.

**Autumn Nash:** There's it zapper, kind of oh...

**Justin Garrison:** Oh, and there's also -- if you've never seen it before, there's a curlrc file that you can configure curl to like always do similar things, or always output in a similar way... So definitely check that one out.

**Autumn Nash:** Oh, that sounds cool. And actually really useful.

**Justin Garrison:** I remember discovering that... Yeah, because it's like, oh, I always use these three flags, and I can alias it, but also like the output I wanted a certain way... I don't have it on the system right now.

**Autumn Nash:** I think there's a PacMan command. "Arch Linux user should type the PacMan --"

**Justin Garrison:** PacMan is a package manager for Arch.

**Autumn Nash:** I know. But I mean, still, it's cool... Look, I was trying to compete with -- what is it, Open Eyeballs, or something?

**Justin Garrison:** Happy Eyeballs.

**Autumn Nash:** Yeah. I was literally searching "coolest wget commands", trying to like compete with your Happy Eyeballs. So PacMan and... Is it Zapper?

**Justin Garrison:** Oh, if we want to go into obscure Linux commands, we can...

**Autumn Nash:** But, I mean, it's not really like a wget command. Those are all really Linux. So what we've decided is wget - all their commands are very readable, and functional, and slightly boring, but... Functional.

**Justin Garrison:** That's fine, because you might want that. But now there's also a wcurl. If you want to have all the fancy curl flags and still have wget as a --

**Autumn Nash:** Which is really cool.

**Justin Garrison:** There's a way to grab them. Well, that game wasn't as exciting as I might have expected when I was half asleep, thinking of it, and trying to think of "Oh, what should we do?"

**Autumn Nash:** Justin's not allowed to come up with new games when he's sick.

**Justin Garrison:** It's okay, I'll think of another one next time. Thank you everyone for listening, and joining us on this episode. If you have someone you'd like to come on the show, or topics you'd like to cover, please feel free to email us at shipit \[at\] changelog.com, and we will talk to you all again soon.

**Autumn Nash:** Bye, guys!
