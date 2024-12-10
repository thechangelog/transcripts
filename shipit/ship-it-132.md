**Justin Garrison:** Hello and welcome to Ship It, the podcast all about everything after git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** It's been a week, y'all... I want to say good, but I don't even know if I can lie at this point.

**Justin Garrison:** You're here. You're here.

**Autumn Nash:** We showed up...

**Justin Garrison:** It's November 7th right now as we're recording, and we are here, we are recording this... I think it comes out at the end of November.

**Autumn Nash:** We are here, and we are sober. Be proud of us.

**Marc Boorshtein:** Well, what's \[unintelligible 00:03:03.28\]

**Autumn Nash:** Thank God me and Justin don't really drink, because it would be wild...

**Justin Garrison:** The third voice you're hearing is Marc Boorshtein. He is the CTO at Tremolo Security. Welcome to the show, Marc.

**Marc Boorshtein:** Yeah, thanks for having me.

**Justin Garrison:** We were talking a little bit on LinkedIn about what you're doing with running Kubernetes in the public sector. So can you ask us specifically what infrastructure or software you're responsible for?

**Marc Boorshtein:** Sure. So here in the DC area, it's kind of a unique place. We've got a lot of different governments, a lot of layers of government... So what we do, at least here, is we run an identity system for first responders. So go back 20 years, 9-11, airplane gets flown into the Pentagon, and you've got units responding from Arlington County, where the Pentagon is, city of Alexandria, DC, Maryland, all these different jurisdictions. And they can't talk to each other. Like, I'm not even talking about digital communication; their radios don't work with each other.

**Autumn Nash:** That's wild.

**Marc Boorshtein:** Yeah, it's wild to even think about. And so one of the many things that came out of that was a report that basically said here, especially in the DC area, because of how unique we are here in the national capital region, we need to have a way where everybody can talk to each other. Because it's not just the different jurisdictions that need to talk to each other, but the jurisdictions work with the feds, work with military police, because you've got large military presence here, work with state governments... So there's all these different layers of interaction from a public safety standpoint. And so they've built a -- there's this big, giant grant that came out of DHS, Department of Homeland Security, specifically out of FEMA. So they're the people who, whenever there's a natural disaster, they're the ones who respond to it. And so this big, giant grant for all sorts of public safety stuff. And one of the things that came out of that was a fiber network that could survive another 9-11 type attack if the commercial internet went down, so that there was still a communications backbone. And so they built it, a nice giant pipe, worked beautifully, and nobody wanted to go on it, because they didn't want another username and password.

**Autumn Nash:** That's crazy.

**Marc Boorshtein:** So they have this big giant network nobody wanted to use.

**Justin Garrison:** So they all use Google single sign-on, right?

**Marc Boorshtein:** Not even, no. That would have been awesome. That would have been amazing. No, this is -- so we first got involved with this in 2011, when we first got involved. It was actually kind of funny, because I had just left my full-time job to work on Tremolo, and I was at a pitch contest, a mass challenge. So I was up in Massachusetts with my partner, and I was working for a consulting company at the time, that dropped this thing in my lap. And I was like "You've given this away. There's no way I can implement this and be profitable." And I got back and started talking to my customer, and I was like "Tremolo could do this." And they're like "Okay, let's pitch it to them." And the sun, the moon and the stars aligned, and they're like "Okay, let's do it." It worked beautifully. But it was Active Directory. And with Active Directory, local government typically is very, very Microsoft-focused. So everything from their on-prem, all the way up to the cloud is almost entirely Microsoft, at least in this region. Different regions are going to be different. But at least my experience has been most localities are very, very heavily Microsoft-focused.

And so they had Active Directory, and if you've ever worked with Active Directory, the only way to get two Active Directories to talk to each other is to just take all the firewalls and throw them out the window. So they didn't want them hooked up directly into this thing, they didn't want them talking to each other... Active Directory -- I mean, that's the keys to your entire kingdom. So you don't want to just like "Yeah, we're just going to merge these things and make them all work together." That's a little dangerous.

So we came in and said, "Alright, we can link these things together in a secure way." At the time, we were doing everything via LDAP virtual directory. So if you've ever worked with an LDAP directory, you take a proxy that knows LDAP on the front... Think of like an HTTP proxy, but for LDAP. So it talks LDAP on the front, and then it talks whatever you need on the back, and creates this big, virtual tree. So we created this environment where it was this big virtual tree of all these different infrastructures... And then we were working with - at the time, I think it was SharePoint 2011... And so we had to integrate that in, which was a whole kind of fun.

\[00:08:04.29\] And we got it all working beautifully, and so they're like "Yes, this is great. We want to move forward." And then I learned about government procurement. So it took us almost two years to get the procurement group, and we finally got it up and running...

**Justin Garrison:** For them just to be able to say "Yes, we want to pay for this, and you can go ahead."

**Marc Boorshtein:** Yeah. And it was just going through and figuring out who are we going to buy it through... Because if you've ever sold something to like a large company, you've had to go through like a reseller... CDW is a big software shop that you might have to go through. Insight's another big one. Synnex, broken off of Insight... But if anybody who's listening knows who any of these names are, I'm sorry. Good people \[unintelligible 00:08:48.08\]

**Justin Garrison:** You've already \[unintelligible 00:08:49.22\] trigger words on this episode with \[unintelligible 00:08:52.14\] proxies...
**Marc Boorshtein:** Yeah... And so this was our first customer, and we were just like -- I'm sitting there, texting my partner, like "Do we have a bank account? Where do we put the money? What do we do with this?" So it took about two years to kind of go through that minutia of all the different layers of procurement. And when we went live, we went live with five different jurisdictions all over LDAP. And it was an LDAP virtual directory... And what was really interesting was at the time, they were saying, "Well--" The grant that was paying for this - it was a very specific grant called UASI, U-A-S-I. And the goal of the UASI grant was all of this money that was being spent to build out this infrastructure was supposed to be temporary money. Like, it wasn't meant to fund it indefinitely. It was meant to fund it to the point of maintenance. And then at maintenance, the localities take it over. And so the assumption was that we were going to build it and then hand it off to someone. And so they wanted everything to be as Microsoft focused as possible.

Now. at the time - this is before we were an open source company, or had any open source projects or anything. So at the time we had a virtual appliance. Containers before there were containers. And it was built on CentOS 6, and we drop it in... They were like "Well, can you give us a physical appliance?" and I was like "Well, I'm just going to buy something off at Dell.com, spray-paint it red, put my logo on it... You're going to get better prices than I am. So just buy it and let us deploy it." So we did that, and we didn't have an interface at the time. It was all just APIs. And so we built an interface for them based on .NET, and it was the ugliest interface. I'm bad at interfaces. I wish I still had a screenshot of it, but imagine the most ugliest HTML marquee... It was bad. But it worked, and people really liked it, and we got off the ground. And we went through like three data centers before we finally were able to go live. They just kept moving us from data center -- initially, they didn't have hardware for us, so we had this hand-me-down hardware, and they're like "So you're going to have to put a hypervisor on there." I'm like "So VMware?" They're like "No, no. We're not giving you anything like that. No, you get to go with Hyper-V." I'm like "Okay, I've never done that before..."

And I'm sitting there in the data center, deploying it, and then they moved us to another data center, and then finally, when we went live, they ended up putting us in a third data center. And so we finally go live, and ironically -- so I was telling you about this big network, right? Our first app that we went live with didn't run on that network. It was hosted on the commercial internet. So yeah, we were like "Okay, you know what? Whatever. A customer's a customer. We don't care. It's an app."

\[00:11:56.26\] And so we went live with it in July, 2013, and it was one of these things where the people who started using it were like "What do you mean I don't need another password?" It didn't compute with users. SSO wasn't a big thing at this point. This is when we were competing with -- at the time it was Netegrity, and then they were bought by CA, Oracle Access Manager, ForgeRock... A lot of these legacy identity names. And so SSO was still not something that was super-common.

**Justin Garrison:** And in this case, your app that you put on the network, people are coming to use it, you have this LDAP proxy, and that proxy is going to each group's own Active Directory service. So it's like the user just exists, and they just need the full username @ whatever domain, with their password, and they don't need to sign up again. So you're just proxying all those back to whichever LDAP. You're a proxy, you're a router at that point. You're like "Oh yeah, you go over here. We'll figure out if that is the right password, with the hash, and then we'll send it back and say yes or no."

**Marc Boorshtein:** Exactly. No hash though. No, we got the password, we just handed it back off to \[unintelligible 00:12:55.28\]

**Justin Garrison:** Of course. \[unintelligible 00:12:59.16\]

**Marc Boorshtein:** Thank you for the benefit of the doubt, but no... \[laughter\] And it was painful. I mean, our biggest pain point was networking and it was certificates... Because certificates expire, nobody tells us anything, and we don't know until the user starts complaining.

**Justin Garrison:** And at the time it would take a month to get a new certificate signed.

**Marc Boorshtein:** It didn't take a month to get -- getting the cert was actually pretty easy, because... I mean, it's AD, so it's all self-signed certs.

**Justin Garrison:** Sure. I meant like a publicly-trusted... Yeah, okay.

**Marc Boorshtein:** Yeah. But what would happen is people would start complaining that AD is broken. And so I came from a background of having to deal with broken certs all the time. And so we had built into the technology the ability to just suck the cert right in. But I still had to like go in and do it. And at the time, the monitoring that was in place was capable of doing something that would be like an LDAP synthetic transaction that could tell us it was broken... But the team I was working with had no idea how to do that. And every time I tried to explain it to them, they'd be like "So this isn't HTTPS... No." And the way the networking was set... It never worked. And they would always say "Yeah, the monitoring says everything's okay." And I'm like, "But I can tell you, customers are complaining they can't log in." And so we're in this place where it just -- it was bad. We were in a bad place. And as technology got better, we did a really fun job of getting it into our system. I mean, this is a system that's been in production now for over a decade, and it's not been static at all. Like, it's just been growing and growing, and changing with what's been available. And I've been very lucky, because as a customer, when I say "We should try this new technology", and you would think they'd be risk-averse, because we're talking about public safety systems, they'd be like "No, we trust you. You're telling us we should try this. Let's try it." So I'm very lucky to have a very forward-thinking customer.

And so we slowly migrated. We went from an all Windows infrastructure besides our Linux VMs, to then our portal moved from .NET and that fugly interface to a nice bootstrap-based Java interface... And then we eventually got rid of AD, and we moved up to Azure, and we went from being just like these virtual appliances that we installed in ISOs, to running on - I call them faux containers, where I had Ansible playbooks that would deploy everything... We would deploy it all from scratch. I could point it at an empty Ubuntu server and the whole thing would be running. And as that was happening, we got rid of the virtual directory.

\[00:15:57.11\] So as ADFS, Active Directory Federation Services became more common among the jurisdictions, we were getting rid of the virtual directory components, which really made things nice... And then when we moved to Azure, we did something really cool, where we took over all monitoring, and we stopped playing this "Okay, well, there's an ops team, and a dev team..." Like, "No, we're just going to own everything. This is our problem now."

And so we were able to build out a Prometheus infrastructure that I now knew when there was a problem before my customers did. And we were running those synthetic transactions, and we had a dashboard, and we had alerts, and it was tracking things. And that was the first time -- so that was about 2019, and that was like the first time where I felt like "Wow, I really know what this infrastructure is doing." And it was all automated. It was amazing. It was beautiful.

**Autumn Nash:** I feel like that type of observability is what people should be shooting for. Like, at the end of the day, tech is a business, right? You want your customers to be happy, and you want to figure out what they're experiencing before they do. The fact that people are just like asleep on the fact that it would make it so much easier to iterate and make your product better just boggles my entire mind.

**Justin Garrison:** Well, I mean, the big part there too is like the org chart matters of who's getting the alert, right? Because if it's the ops team getting the alert, and then they have to go wake up the dev team, that's not fast enough, and that's not actually helping. You're just putting someone else in the middle. And I know devs don't typically like to carry pagers, and they're always been resistant to that, but also it makes the product better when they do.

**Autumn Nash:** Are there really dev orgs where they don't carry pagers?

**Justin Garrison:** Oh, yeah. Oh, yeah.

**Autumn Nash:** How do I get into those orgs? Where have those jobs been my whole life?

**Justin Garrison:** Any listeners right now, if you are a dev on an application and you don't carry a pager, or at your organization the devs don't carry pagers... Yeah, it is a big thing.

**Autumn Nash:** I need to know.

**Justin Garrison:** Even in 2024, almost 2025, that is absolutely still a thing.

**Autumn Nash:** I also think it depends on how big the feedback loop is. There's some applications that even going through the feedback loop of ops, and then dev, it would still be better than waiting till you get a ticket from your customer, or until people just decide to move off of your stuff. You know what I mean? Like, even in the worst case scenario, it's better than the way that so many very high-quality teams in FAANG land are taking their product feedback from customers. Sometimes I'm just like "What do y'all do?" Like, if I can google -- like, if you are using a technology and I can google other people asking you about my problems that you haven't addressed on multiple forums, what are you doing?

**Justin Garrison:** To this day, the single best alert I ever set up in my life was before I went to bed, the night Disney Plus launched, and I put a "if this, then that" alert on Twitter to say \#DisneyPlus is down. And that woke me up before my alerts did.

**Autumn Nash:** But that's what I'm trying to say, though... Go get an RSS feed. You can take that data from Stack Overflow. There's so many ways to understand where your customers are struggling... And half the time we work on things that aren't even that impactful to our customers, because you're not getting the right feedback loop. Getting that proper feedback loop - you know what to prioritize. You know what I mean? You know where to put your dev hours, which is the most expensive thing you have. So it just baffles my mind that -- there are things that you can do to automate it that make it so easy... And there's so many tools out there and free ways to collect that data, and people are just like "I don't want to be better at my job." "What?!"

**Marc Boorshtein:** Well, and that was one of the things that was so difficult about this. So bringing it back to public safety, all of the public safety people that we work with, if it's something that is really life or death, they have manual fallbacks, and they're trained that if the technology doesn't work, don't \*bleep\* with it. Just fall back to the manuals. Because people die.

\[00:20:03.15\] So our feedback -- like, you would think we would know immediately that "Oh, we can't get into the thing." Well, no. They just switched over to the manual, and then \*bleep\* to the CIO at the weekly meeting a week later. So we don't actually find out there was a problem sometimes until like a week after it happened, or two weeks after it happened.

**Justin Garrison:** Yeah. They worked around the issue. They needed to get something done, and they're like "I don't have time for this. Someone is in danger", right?

**Marc Boorshtein:** Yeah. So it became imperative for us not just to -- from a convenience standpoint, but sometimes we didn't even know if there was a problem. Like, if we weren't running synthetic transactions to make sure what was happening, we wouldn't even know that there was a problem.

**Justin Garrison:** Was this application in -- was this in the hot path for like 911 calls, or was this a dispatch afterwards?

**Marc Boorshtein:** No, no, no.

**Justin Garrison:** Okay.

**Autumn Nash:** That's just such an interesting use case, because sometimes -- I love technology, and sometimes we get excited about solving problems that are some random problems that I don't know if anyone really asked for it... But that is such a cool use case because you're really impacting, making things better for people, but it's still deeply technical. Like, there's only so many original ideas still left in the world, and the fact that you solved such a cool, important problem is really neat.

**Marc Boorshtein:** Thank you. I really appreciate that. So the theme with public safety is that they very siloed industry. I mean, even more than a lot of enterprise tech that you're used to, it's not used to working with other systems. It's not designed to work with other systems.

**Justin Garrison:** I mean, they built a whole internet for it. It's a private fiber network that no one else is allowed to use, so that we can...

**Marc Boorshtein:** Well, and even then, you're dealing with an industry that's just very used to one being very slow for updates, and slow for changes. I'm not going to shame the big giant company that does this. It's a company that if I told you who they were, and showed you where they are, you'd be like "Oh, that's them?" And they were so isolated that when we first integrated the SSO system with them, they're just like "Well, can't you just sync everybody's passwords into one AD and let us run that?" And it's just like "No, we're talking to 20 different jurisdictions across three States, and the district of Columbia. Do you want to tell their CIOs to do that before you close the deal on this software?" And like - "Yeah, no. We don't want to do that." So... Very isolated.

And then because we deal with the feds, federal standards for security -- I always like to say in the battle between compliance and security, compliance wins every time. Like, it always wins. Security never wins in that battle.

**Autumn Nash:** Shouldn't they almost go hand in hand, though? It's so weird to me that they are always treated as two separate issues. I know logically we know that, but they're just so separated... You would think that a lot of compliance would also be like, I don't know, mandating or influencing because of security... And it's so odd that there's such separate subjects, which make -- you know what I mean? Like, you're just sitting there, like, "What's the point if you're not going to talk to each other?"

**Marc Boorshtein:** Well, perfect example. So CJIS, the Criminal Justice Information System - this is the IT security standard that the FBI puts out. So if you're going to work with their systems, you have to comply with this set of features. So here in the DC region you get arrested, your picture goes into a database, and we provide the security for that database. Well, one of the things that CJIS says is that you can't have access out to public networks from the workstation that you're working on to do this, because they don't want you exfiltrating these photos to somebody, right? That makes a lot of sense... Except - remember how I said every jurisdiction uses Microsoft? Well, starting in 2020, that became Azure, and Azure AD, and Entra.

\[00:24:07.17\] So instead of us handing you off to the ADFS running inside of the corporate network, we started handing everybody off to Entra, and Azure AD. So Azure AD is now rebranded Entra, if anybody is listening and hasn't caught the new documentation.

**Justin Garrison:** I was not up to date on that, thank you.

**Marc Boorshtein:** Yeah, that's only like six months old. So most clouds - and I will shame Microsoft on this one... Most clouds have some kind of direct connect. I forget what AWS calls it. So you don't go out to the public internet. Large enterprises don't go out to the public internet to get to their EC2 instances. There's a direct connect with Equinix, or something else, to do that.

**Justin Garrison:** It's either a direct fiber, or even like a virtual appliance VPN, something like that.

3:Right. Microsoft has this for Azure, but not for Entra. You have to go to the public internet in order to authenticate to Entra. There is no way to bypass that, which is bonkers to me on multiple levels. But that's the way that they set it up. So now I'm explaining to these cops, "Hey, you need to open up all these firewall ports to go talk to--" And of course, Microsoft - it's not just one URL. You've gotta whitelist 30 different URLs. And you can't do it by IP either, because they're all dynamically generated IPs. The range is 0.0.0.0 through 255.255 --

**Justin Garrison:** Here's the Microsoft block of IPs...

**Marc Boorshtein:** Yeah, exactly.

**Justin Garrison:** I think Microsoft still has the /8, right?

**Marc Boorshtein:** Exactly. But in that particular instance, I was like "Look, you can either hand everybody their own username or password, or you've got to get an exception to this rule." That was the one instance where security won out. But Autumn, to your point about security versus compliance, why is this a thing - because a lot of the compliance rules aren't written with our integration ideas of today in mind. They're written on a very narrowly-focused. But when you look at it from a broader picture, it's like "Well, that's not going to work."

And so that's been a big part of our fight, when we work with the Feds especially... We had one federal agency - that'll go unnamed - that they were originally going to integrate us as an identity provider to make it easier for the localities to access their systems. So we have federal users that access locality systems. But because we already have all the localities integrated, this one group wanted to go the other way. And they're like "Are you guys level four certified?" "No, not at all." The cost to do that is through the roof. And they're like "Yeah, no, we're not going to do it. We're just going to hand out usernames and passwords." And it's like, "But there's no MFA there." "Yeah, but your compliance is going to be too much of a pain for us to deal with, so we would just rather do it with usernames and passwords." And we're just like "Really? This is what you want?" They're like "Yeah." "Okay..." So it happens all the time, and it's painful to watch.

**Break**: \[00:27:22.17\]

**Justin Garrison:** Going back to the infrastructure you're setting up, because basically, you stopped selling most of it like 2019, or whatever. You had all this automated and you were starting to go into like this open source. But previously, you were setting up a lot of stuff there, it's all AD integration, it's adding more replications, it's giving people the identity on this network for first responders... What happened after that? What changed, or what are you doing since then?

**Marc Boorshtein:** COVID was -- I don't want to say COVID was good in any way, shape or form. It really accelerated the understanding of the need for identity infrastructure, because everybody switched to work from home. So I'll give you an example... So our primary customer for the caretakers of the system is Fairfax County, Virginia. So about 1.1 million people. We're larger than eight states. And we tend to take the lead on all of the regional initiatives around here. And so in a county of 1.1 million people, they've got a very sizable county government... And I was one of like ten people who had a VPN. Of the, I think, 3,000 people in IT, I was one of 10 that had VPN. They weren't handing out laptops in 2020. They were still handing out desktops.

**Justin Garrison:** And all of that identity still is based on network access. Even the VPN is like "Oh, you have one of our IP addresses? We trust you. You're good."

**Marc Boorshtein:** Yeah. And so COVID happens, work from home happens, and all of a sudden, identity matters. And they're getting rid of ADFS, they're moving up to Entra... They're building out that identity infrastructure. And so that gave us the ability to be a lot more flexible, because we could ditch our legacy virtual directory technology that we were working with.

So that happened. The other thing that happened was Kubernetes. We had tried to do Docker containers in 2015, and it was one of the most beautiful failures I've ever seen. It was such a cluster that we were like "Okay, you know what? We're not touching this Kubernetes thing until we can use a managed service." And I've been doing Kubernetes since 2015, so I feel comfortable deploying Kubernetes. And I'm like "No, I'm not dealing with this until we've got a managed service to go with." And so we finally moved up to Azure. It was one of these things that "We're going to move. We're going to move. At some point, we're going to move." "Oh, the contract's up. You need to move us into Azure in the next 30 days... Go!"

**Justin Garrison:** The data center contract?

**Marc Boorshtein:** \[00:32:03.10\] The data center. Yeah. The data center contract with the county had expired. So we kind of did a lift and shift, where we got everything into Azure, where it was still running on VMs. And then at that point, when we were on Azure, it was like "Okay, well, we can Kubernetes now." So we got started with Kubernetes, and we did our first rev on Kubernetes, and moving to Kubernetes was so much harder than we thought it was going to be... Which no one has ever said before.

**Justin Garrison:** This is still Windows and .NET, or...?

**Marc Boorshtein:** No, no. This is all entirely Java at this point. There's no .NET anymore.

**Autumn Nash:** When did you switch from .NET to Java?

**Marc Boorshtein:** So our backend was always Java. The only part that we had that was a frontend was a .NET frontend. So that switched over to Java in about 2017, 2018. And then we actually got rid of a separate portal application. The original architecture was the portal application, was a J2EE web app that communicated to OpenUnison APIs using mutual TLS for security. And then in 2018 we got rid of that, switched over to an AngularJS frontend, where your frontend was all in the frontend, and it communicated directly to the APIs using tokens, and we proxied those APIs back. So there was a DMC in there. And that really simplified our architecture, because now we didn't have to worry about this portal thing anymore.

And then we moved over to Kubernetes in 2021. We went live with that. And that was great, because we had automated the heck out of everything. Like, even to the point where we had a system in place that if Ubuntu patched a library that was on a source container, that would trigger the rebuild, get it deployed into dev... We had the automation in dev watching that... Now, dev didn't run 24/7 for cost reasons, but I would know that there was something that changed. I could just fire up dev, do a quick eyeball scan, see that everything was working, push into prod. It was great. We had automated our monitoring... And then once we had that going for a while, we then decided to move into GitOps, and to move all of our manifests into Git.

**Autumn Nash:** Can you tell us more about how you automated it?

**Marc Boorshtein:** Yeah, so almost everything was Azure DevOps. So Azure DevOps is Azure's GitHub Actions, basically. And so we were able to put in place a combination... I mean, it was a bit of a Rube Goldberg machine, but it worked beautifully... Because we're the vendor, right? Because we're a software vendor. We're not just a professional services. We were the vendor that took on ownership of this, rather than this being our primary product. So we were able to integrate it into our vendor systems in such a way that when we knew Open Unison got patched, that would then trigger a webhook that would patch a private Git repo, which would then trigger Azure DevOps to run, and to rerun the build, push the container into Azure registry. And then before we went to GitOps, it would patch the dev Kubernetes instance, the dev AKS instance, and that would then get the ball rolling.

Then when we were happy with everything, we just had a simple script that would run, that would take the version that was running inside of dev, and patch all the manifests in prod to move everything over. And so it was all very clean, very easy.

**Justin Garrison:** Is the backend of Azure DevOps like an open source tool? It's not just like Jenkins, or Spinnaker, or something like that. Like, it's a custom thing, or...?

**Marc Boorshtein:** I don't know.

**Justin Garrison:** Okay. I wasn't sure. I don't know, I've never used it, so I was kind of curious there.

**Marc Boorshtein:** Our stuff is all a YAML/Bash amalgamation. But yeah, that's a good question. I don't know if it's an open source backend. I don't think it is.

**Justin Garrison:** I think it's something custom, but I never actually looked into it, so I was kind of curious if you know.

**Marc Boorshtein:** \[00:36:17.05\] Yeah...

**Justin Garrison:** The second question there is the move here from -- we have this push-based pipeline, to a pull-based controller, right? A GitOps controller versus... You could still store manifests in Git, in Azure DevOps, you could still do a lot of the same things, but the push versus pull is a difference. Why did you feel like you had to move to that? What was the leading thing? Like, this is going to be a bunch of work, it's going to change how we do things... What were the benefits you projected that you were going to get out of it?

**Marc Boorshtein:** So there was actually a really specific reason that triggered it. It was one of these things that we always wanted to do as long as we had time and budget... But what the actual thing that triggered it was we wanted to have a secondary instance. So when everything started, we were very heavily focused on this fiber network. Stuff that was running on the fiber network. Stuff that was accessible via the fiber network. And we had a couple of apps that were hosted on the internet, but for the most part, everything was on this fiber network. Well, times change. I mean, it's been 20 years, and most of the apps have moved to the commercial internet. At the same time -- we're at the point now that... Like, if America turned off our internet, the world would survive without us, from an internet standpoint. I think that's true. I don't think I'm making that up. I think that happened in the last decade.

**Justin Garrison:** Even if US East one goes down, half the world stops. I don't know.

**Marc Boorshtein:** Well, that's a little bit different, but just from the bytes going across the wire... I think at one point - I want to say it was sometime around 2010 - there was a threshold cross where there was enough cable infrastructure and backbone around the world that if somebody severed the US from the physical internet, the global internet would continue. And that's kind of true here in the US, too. The backbone of the internet has just gotten more and more and more -- especially here in DC, where you can't throw a rock without hitting three data centers.

So people became less reliant on this idea of a backbone network. Commercial services became more and more important to government services... And so more and more of our applications started running on the internet, including some of our critical public safety applications, or SaaS solutions on the internet. Also, the identities we were working off of were all coming from Azure. They weren't coming from some AD, they weren't coming from some ADFS that was running, or some ping federate server that was running on that. They were all coming from Azure. So there was no tie anymore to the NCR net, except for the NCR net only application. So somebody said "What if this network goes down? Now what? Does that mean all of these critical services go away because this network goes down?" And not to belittle the engineers who built an amazing network, with multiple redundancies and all this other stuff... But that's a failure bug. So they said "We need to have another instance of this." I was like "It's all self-contained..." It's not rocket science. It's just a bunch of web apps, at the end of the day. But I'm not maintaining configuration manifests between two different clusters, right? That's a losing game. I'm never going to win that game.

So that was the main driver to say "You know what? We're going to move from everything stored as manifests inside the API server, to GitOps. So that way we can have these two instances of this environment in two different regions, that could survive an outage of the NCR net."

**Justin Garrison:** But GitOps isn't a requirement, because you can have two DevOps in two different regions with a Git repo that pushes both places, right?

**Marc Boorshtein:** \[00:40:01.10\] You could, but this is the way we wanted to do it. We wanted to be able to say "Here's our manifest", because if we need to rebuild this system quickly, we want to be able to say "Here are all the manifests. It's ready to go", without necessarily saying -- we're not using like a Terraform, or a Pulumi to build it out. We're relying on Kubernetes APIs. The manifests themselves are all fairly static. These are not -- the infrastructure to handle this is really not all that complicated. It's a web app, it has a database, it has a message bus... There are a couple of different apps that are integrated with it... But you've got a frontend app, you've got a backend app, you've got a few different APIs... We're relying on a combination of Azure's secret management, and the database and whatnot, but... It's not a stateless app, but it's a most -- like, the critical parts are fairly stateless. So GitOps was a good route for us to be able to go that way.

**Justin Garrison:** Does Azure have the -- I literally do not know this. Do they have like a GovCloud sort of thing, like AWS does? Is that where you're running this?

**Marc Boorshtein:** No. It's all commercial.

**Justin Garrison:** It's all commercial.

**Marc Boorshtein:** Yeah, it's all commercial.

**Justin Garrison:** As a group building something that is very sensitive, information-sensitive and critical to a lot of people's livelihoods, I guess... I mean, just in general, this is emergency sort of services... How have all of the security vulnerabilities of Azure impacted you over the -- I mean, you've been there for quite a while.

**Marc Boorshtein:** We've been there since 2020. So we've been there for about four years.

**Justin Garrison:** Right. Which - they haven't gotten less over time. And I'm kind of curious, how does that impact what you're doing? Because if you're not in a special cloud environment -- like, you can protect all you want about your applications, but if the underlying... There was literally just like, you can read another accounts database, like in Cosmic, or whatever it was. It was like "Oh, we've found this thing, and people could read across accounts without any security guidelines whatsoever." How does that impact you, and what you're doing, and what you're thinking?

**Marc Boorshtein:** We haven't really been impacted by any of the Azure-specific security... Like, the Cosmo one didn't impact us. The log4j was a big one for us, because we're Java-based... That was a weird day, because I've got other contracts inside the county that use us... And I got up and I started looking at Twitter, and I was like "Oh, log4j. Oh, great. Well, let's see what's going on..." I'm like "Oh, holy \*bleep\*. Wife, please go drop the kids off. I'm not going to be -- I've gotta focus on this now." So that was a day. But Azure's issues from a security standpoint - we've mostly been insulated, just because we haven't used the services that have gotten beaten up that badly...

**Justin Garrison:** I mean, you're running Java and Kubernetes. This is a pretty good service area.

**Marc Boorshtein:** I'm not accepting any hate for Java and Kubernetes. It works beautifully.

**Autumn Nash:** Thank you. Tell him. Tell, him.

**Marc Boorshtein:** Yeah. Java, Kubernetes, okay? They love each other.

**Autumn Nash:** See? I like Marc.

**Marc Boorshtein:** Yeah, we're cool.

**Autumn Nash:** He understands me.

**Marc Boorshtein:** And we as a company, Tremolo, we've been doing the whole SBOM thing since way before it was popular. Our releases going back at least seven or eight years, our goal is always to have goose eggs on the scanners when we cut a release. It doesn't stay that way more than 30 seconds, but at least we try. You know, Bart, with the cake - at least he tried to toss it in the trash. So we're constantly staying updated from that standpoint, protecting the front door...

No, the pain that we tend to have when it comes to Azure is they change stuff all the goddamn time, and they're constantly deprecating things. A template that I use to deploy an AKS cluster within a year is completely unusable. And they just have this tendency to make these breaking changes...

\[00:44:08.29\] And it's not like Kubernetes itself that's the problem. It's like "Oh, well, we're changing the way we're doing log aggregation to this thing." And it's like "I just want to run a Kubernetes cluster. Can I just run a Kubernetes cluster? Is that okay?" And they're constantly making those small types of changes that just make automation difficult, it makes life infuriating...

I'm doing a talk next week in Salt Lake City, and I need a Kubernetes cluster. And I've got all these free Azure credits... I went to launch it, and I couldn't access my ingress controller. I couldn't access ingress NGINX. It wasn't a network policy. It was just, you know, KubeNet, so there was no policies to be had. It wasn't a networking issue from me to the IP address, the public IP... The health probes looked like they were working. I could not access it. I was like "What's going on here?" So I have found that Azure, when it works well, it works really well. I feel like they took the people from AWS that failed at interface design, and built their interface for Azure Cloud.

**Justin Garrison:** You're saying that the failed AWS designers are Azure's --

**Marc Boorshtein:** Yeah.

**Justin Garrison:** Wooh...

**Marc Boorshtein:** I know. And I don't like tossing shade, but... So I'll give you an example. We use Azure Secret Manager. And on the AWS side, I'm a big fan of Param Store. And Param Store - it's got kind of a clunky interface, but as long as you know how to do the path-based process, you can narrow it down, and it works fine. You can't do that in Azure. There's no way... So you're just hitting Next, Next, Next, if you've got to go through the UI and do something.

**Autumn Nash:** That's a spicy take, but I can't wait to see how this is going to turn out, because it's not going to be good. Like, if that's how you feel now, give it six months, because the other one is not going to be better...

**Marc Boorshtein:** Yeah. So Azure has definitely had a lot of challenges. One thing I will give Azure big props on - so we're using their MySQL database, and they needed us to migrate from one offering to their new offering. And we don't have a large database, but it's kind of critical data. So I'm trying to figure out how to do this, they're like "No, we want to get on a call with you", and I'm like "Oh God, we're going to have like 500 people on a call, none of which actually know what they're talking about, and they're all sales reps." And I got on the call, and they had really smart people on there, who knew what they were doing, and they said "Yup, we understand what you're worried about. This is the right way to do it." And it worked without a hitch.

And I will say, I was not expecting that based on past experience, and they knocked that -- that migration, it did exactly what they said it was going to do. It did a one-time migration, plus live data, so we were able to get the whole thing up and running... And then we were able to pick a date to do the cutover, and everything worked beautiful. And I was like "Y'all - props. I'm not going to lie. I had zero confidence that this was going to go off without a hitch." And the only reason we had any downtime is that I was an idiot.

**Autumn Nash:** You were like zero confidence. You were like "I had no hope, but y'all pulled it off."

**Marc Boorshtein:** I had none. "Y'all did a great job." And the only reason why we had downtime was my own stupidity. I made a mistake. Otherwise we would have had zero downtime. It was beautiful.

**Break**: \[00:47:52.24\]

**Justin Garrison:** How is -- the applications you're running... Because this is more than just identity now, right? Is this still focused on identity for those districts, for first responders, or is this beyond that?

**Marc Boorshtein:** So we've got a couple of other apps in there that we manage. So the main one is an open unison instance that does the identity side, plus the portal. So that's the main application. We have a Mattermost; it's a kind of a Slack clone. We rolled that out. We call it regional chat. I love it, I think it works great, but the thing is, we're competing with Teams. So it's kind of hard to -- which is weird to me, but it's kind of hard to be like "No, don't use teams. Use this thing instead." Because even though everybody loves teams, it's there, and it works 99% of the time. So that never really got the traction we hoped it would. We run a wiki.js instance that we use just for random stuff that we need to be able to host documentation on... So those are the big ones. We have an email server, which is actually kind of fun.

**Justin Garrison:** But Office 365 is right there. What's the --

**Marc Boorshtein:** No...

**Justin Garrison:** You're running your email server in 2024.

**Autumn Nash:** Everybody that can't see Justin's face... Before he said that shade, the smile on his face was so big. For context... Before he even got it all the way out, he was like mid laugh. The smile was like half of his face.

**Justin Garrison:** I'm trying to understand. You're like "Oh, Teams is over there." But also, you have Office 365. There's some email servers.

**Marc Boorshtein:** No, you're more correct than you think.

**Autumn Nash:** He wasn't trying to understand. He led you into the shade. He was like "Come walk with me."

**Marc Boorshtein:** Oh, no. I went willingly. I knew that was coming. I wanted to see if y'all called me on it.

**Justin Garrison:** What's the email server? What are you running? You're a dev company?

**Autumn Nash:** Wait, wait... Marc was like "I went willingly. I was so down. Like, I can't with y'all."

**Marc Boorshtein:** So, okay, there's a story here. So SharePoint is now SharePoint Online, right? So one of our largest customers for this service is a regional SharePoint system that we have provided SSO for for five or six years. It was an on-prem system. And we had to do some fun stuff to make that work. Well, they got sick of managing a SharePoint system. They wanted to move it online.

**Justin Garrison:** Yeah, no, this is like day one. Don't run your own SharePoint server.

**Marc Boorshtein:** Right. And this is the second iteration. So they wanted to move to SharePoint Online. When you do SSO -- so Azure has this concept of B2B, company to company, doing some kind of SSO, and B2C, company to customer. Well, we're an SSO system, right? We're an identity aggregation system. So in theory, what we would want - excuse me, you go to SharePoint Online, and they bounce you over to us to authenticate, and then we route you over to the right thing. That's a problem on two layers. The first layer is if you're a tenant inside of Azure, they just go straight to you. So I put in my FairfaxCounty.gov email address, they just bypass our system. IAMS is what it's called. The National Capital Region IAMS program. Identity and Access Management. So that was the first issue, which wasn't that big of a deal, because we still had stuff to do with provisioning.

\[00:54:08.20\] The second issue is the U.S. federal government. So I mentioned that we're running in a commercial tenant. So is the SharePoint. Feds do not run in commercial tenants, and you cannot invite a guest into your tenant if you're commercial.

That is government. So we had two issues that we had to deal with. One, we don't just maintain a broker with other identity systems, we also maintain what are called external accounts. So maybe you're a contractor, maybe you're working for an NGO, a non-governmental organization, but that works with governments, that you aren't part of our SSO party. So we maintain a credential for you. And so we have those credentials as well.

Now, we integrate with the federal government, so we can authenticate any U.S. federal user. So the question was how do we get Azure to recognize us as an identity provider? The other thing that we ran into that's a technical issue is you can say to Microsoft "Hey, for tremolosecurity.com, go SAML to them." The problem is, is that we have to prove that we own tremolosecurity.com, because they don't want somebody proxy attacking. And I get that. But they also have no mechanism to work around that. Like, they have very specific exceptions... Okta, as an example, can get around this.

So what we ended up having to do was for U.S. federal users and these external users that don't have jurisdiction accounts, we had to create an email domain alias that would be recognized. So we run an email service... We had to completely re-architect everything to make sure it was isolated. But we run an email forwarding service where you have to have an email, otherwise it gets rejected. So you have to know the email of the person that you're sending it to. It has to exist. It'll forward it to them, so now when we register the invitation with Microsoft, it's at our domain, instead of their home domain. So they're still using their home domain credentials, but they're using our email forwarding service. So we don't maintain email boxes. We have to forward it. But that was a whole other bit of fun, because we were originally doing it with just straight up SMTP, and it worked fine when we first went live, and then three weeks later people stopped getting emails, and we found out that basically if any email comes from any of the three major public clouds, it gets blocked by everybody. So if it comes out of Azure, it comes out of Google, if it comes out of AWS - it doesn't matter, it's getting blocked.

So we ended up going to AWS and saying "Okay, well, we'll forward everything to SES", and that solved the problem, because now we were able to rewrite it with all the right headers and everything, and then it went up to SES.

**Justin Garrison:** Is this actually like a VM running an email server, or are you forwarding this to the -- because you need that trust, right? Email has this huge network of "What IP address am I receiving this on? Are you spam or not?" Because it just gets abused. It's just an open thing that's on the internet. And so someone signs up and they say "I'm a contractor. I don't have this account. I need to sign up, but I'm going to sign up under your domain. I'm still going to get the email forwarded to me through Amazon's service that goes back to my actual proper domain, but then when I sign in, I'm signing it under your subdomain, because that is what gets trusted here, of "Yes, I own that subdomain, even if the email comes back to me."

**Marc Boorshtein:** \[00:57:56.08\] It's a bit of a Rube Goldberg. It works really well. Once we got the whole "Okay, we can't send the emails ourselves.

We have to go through an SES-like service to send it out." And once we got that and all the headers and everything figured out, it works beautifully. But no, it's a container that runs in cluster. We've got everything locked down with network policies. And that particular container has no service account. So it's got no -- if that thing gets compromised, you can't get out of it. You can go out to the internet, but you can't hit the API server, you can't hit anything from inside those containers, and there's no identity. So even if you had access to the API server, there's nothing to abuse. There's no keys.

**Justin Garrison:** But I mean, they have the emails that flow through.

**Marc Boorshtein:** Yeah, the emails flow through...

**Justin Garrison:** Which is like the thing that people would probably want from that.

**Marc Boorshtein:** The only thing that it is is it's notifications. It's "Hey, you've been invited to this tenant. Somebody updated this doc."

It's not like a general purpose.

**Justin Garrison:** But, I mean, you're collecting email addresses of where -- not necessarily SES would know where it's going...

**Marc Boorshtein:** Well, an email address on its own doesn't really count as PII, because it's not associated with anything. You have to have - I think it's three pieces.

**Justin Garrison:** Yeah. And I think going all the way back full circle to this -- email's not a good identity. We've used it as identity for so long. It's like...

**Marc Boorshtein:** No. It's a terrible identity.

**Justin Garrison:** Yeah. And that is one of the problems that - yeah, this thing has to exist somewhere, because that is like the still method of getting information to someone in some form... We don't have another system that does that. But also, it should not be your identity at all.

**Marc Boorshtein:** No, never. And I always talk about, to everybody that'll listen - do not use email address. It's an anti-pattern. Names change all the time, for a bazillion different reasons.

**Justin Garrison:** Yeah. Domains change, and all that.

**Marc Boorshtein:** Domain \[unintelligible 00:59:52.00\] People change their names. It's not that uncommon of a thing. It's a pretty common thing, in a lot of different contexts.

**Autumn Nash:** Dude, nobody talks about the fact of when you get divorced and then you change your name... You can't change your email, so you're just stuck with it forever.

**Justin Garrison:** You're stuck with that. Yeah.

**Autumn Nash:** Yes. It's so annoying. I'm like "I guess I could redirect it", but it would be such a pain in the butt. And you have to have so many logins... It's such a bad idea.

**Marc Boorshtein:** So there's name changes for that, there's transition... There's a bazillion -- people just say "I don't want this name anymore." Names are a terrible way. Human names are a terrible way for computers to identify \[unintelligible 01:00:31.26\]

**Justin Garrison:** I didn't even pick my name, right? My parents decided it was a good name.

**Autumn Nash:** Exactly.

**Marc Boorshtein:** Exactly. There are a lot of people who say "I don't want the name that my parents gave me." And who the hell am I to tell them no? It's a terrible identifier.

**Justin Garrison:** So you're in Azure, you've got GitOps going... What's next for the system? What are the new improvements? What are you looking at for the next five years?

**Marc Boorshtein:** Oh, five years...

**Justin Garrison:** I mean, we don't have to talk about all five years, but in general, what's the thing that you're going towards?

**Marc Boorshtein:** We're in a pretty steady state right now. We're always adding new applications. The big thing that I really want to do - so Open Unison has two ways that you can configure it. The legacy way, which is XML embedded in the container, and the new way... And it's not really that new; we've done it for a few years now. It's CRDs running inside of the cluster.

**Justin Garrison:** Custom resource definitions, for anyone --

**Marc Boorshtein:** Yeah, custom resource definitions. Exactly. So today, I've got different variations of Open Unison for different roles inside the system. I've got an identity provider, I've got a provisioning system... I used to have a -- those are the only two roles we have anymore. We used to have a virtual directory, and we used to have a proxy.

\[01:01:52.02\] So those are their own codebases, that if I want to make a change, I've got to run a build, generate a new container, push that container out, test it out, and then move it over. And that's a long cycle. That could take a couple minutes to go through that long cycle. In which case now I start looking at Twitter or Blue Sky and my mental health goes to the \*bleep\*.

So what I would ideally love to do is convert that to the way that most people run Open Unison today, where there's this one base container and everything gets pulled in dynamically as a CRD. It's hot... It's not just awesome, but it's live, right? I make a change and Open Unison is itself an operator, so it sees the change and picks it right up. And so then I could also move all those manifests into the same repo that stores all of the operations manifests. So I can have one giant repo for everything.

So that would be where I'd like to go in the future. Right now we're in the process of changing our interface, which I'm really happy about, because we have had the same bootstrap-based interface for like 10 years almost... And we're switching to -- if anybody who's listening uses...

**Justin Garrison:** It's like Bootstrap V2?

**Marc Boorshtein:** No, we're switching to a nice, beautiful, Material-based UI. We rewrote the Open Unison UI to use React with Material.

**Autumn Nash:** If I ever have to do frontend, like React, Material is my favorite. It's the only one that doesn't give me full hives. It is the best.

**Marc Boorshtein:** It was an adjustment for me, because I'm not a frontend developer by trade... But I like it. And it's just fast. I'd never realized how slow and clunky our old interface was, until I started using the React-based one. I was like "Oh my God, this is so quick."

**Autumn Nash:** It also is very user-friendly. It makes more sense to my brain than a lot of the other frontend ways of doing things.

**Marc Boorshtein:** Yeah. So that's going to be the next major project, is finishing up the interface revamp. We're already pretty bleeding edge on a lot of things... We've already externalized our secrets management. I'd like to switch. Right now we're using CSI Secret Provider. I want to switch to External Secrets Operator. That'll make it a lot smoother, because with CSI even if you're working off of secret objects, you still need something to trigger the mount of the secret in order to sink in the secret.

**Justin Garrison:** If it's a file...

**Marc Boorshtein:** Yeah. And so External Secret Operator removes that step, so we're probably going to move to that at some point. So that'll be a big deal. And then whatever new infrastructure people come up with next. If it turns out to be better than Kubernetes... We've been around now for a decade; we've gotten to the point where people just expect us to work, and are totally underestimating how hard it is to run an infrastructure... Like "Well, this just works. Can we outsource this to someone?" And our customers are like "No! Are you insane?"

**Justin Garrison:** You're like "It works because I'm good."

**Marc Boorshtein:** Yeah. This isn't easy. So yeah... So let's see what the infrastructure world comes out with next.

**Justin Garrison:** Marc, thank you so much for coming on the show. I have one last question for you... Are you using Flux or Argo?

**Marc Boorshtein:** Argo.

**Justin Garrison:** Argo. Okay.

**Marc Boorshtein:** I'm a GUI guy. I'm enterprise. I love my GUIs.

**Justin Garrison:** Yeah. I mean, in the GitOps war or whatever it is out there, there's a lot of opinions on either side, and I'm just kind of curious. I think I've seen more and more people going towards Argo now.

**Marc Boorshtein:** Yeah. And I'm actually talking at ArgoCon next week about multi-cluster identity in Argo.

**Justin Garrison:** By the time this comes out, it'll be two weeks in the past, so...

**Marc Boorshtein:** Two weeks. So I've already talked about Argo. \[unintelligible 01:05:47.17\]

**Justin Garrison:** Awesome. Well, thank you so much, Marc, for coming on the show. Thank you, everyone, for listening this week, and we will talk to you again soon.

**Marc Boorshtein:** Thanks for having me.
