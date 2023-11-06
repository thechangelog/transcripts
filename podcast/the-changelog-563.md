**Adam Stacoviak:** Let's talk about the last two weeks of your life...

**Matthew Sanabria:** Yeah.

**Adam Stacoviak:** What's happened? What's going on? How do you feel?

**Matthew Sanabria:** I feel good. I feel good. So the last two weeks I've left my job...

**Jerod Santo:** Where did you work?

**Matthew Sanabria:** I worked at HashiCorp.

**Jerod Santo:** I've heard of them...

**Matthew Sanabria:** Yeah. I was there for about five years.

**Jerod Santo:** That's a long time.

**Matthew Sanabria:** So it was a while. Four years, ten months, or whatever it was.

**Jerod Santo:** And what did you do there?

**Matthew Sanabria:** I started in support engineering, went to software engineering for TerraForm enterprise, got promoted there... I went that route. But when I left, I was pretty much the TerraForm Enterprise subject matter expert, working on TerraForm Enterprise. So yeah, software engineering... A bunch of Docker, Go, Kubernetes things... Yeah, pretty fun.

**Adam Stacoviak:** It's funny, when he said TerraForm there... I'm not even kidding with you, I legit thought you said tofu. \[laughter\]

**Jerod Santo:** You're kidding me, aren't you?

**Adam Stacoviak:** No, I really am not kidding you.

**Jerod Santo:** They don't have any tofu there.

**Adam Stacoviak:** I thought he said "I was on the Tofu Enterprise team..."

**Matthew Sanabria:** I ate some tofu, but I never used it. Yeah, that was a fun -- that announcement, the license change announcement was a very fun time at HashiCorp, I will say.

**Jerod Santo:** Tell us about it from the inside.

**Matthew Sanabria:** I mean, I wish I could come up here and say the inside was different, in the sense of like we were made aware, and we had all this notice, etc. It wasn't. We found out the same time you all found out. So from the inside...

**Jerod Santo:** Yikes.

**Matthew Sanabria:** Yeah. The same day that you all found out the announcement, that's how we found out... Which doesn't really inspire a lot of... You know, it didn't make me happy, I will say.

**Adam Stacoviak:** What we're not asking you to do, just to be clear, is to talk smack. I think what these podcasts serve as, in my opinion, is the facts of what really happened, and the sentiment, right?

**Matthew Sanabria:** Yeah, yeah.

**Adam Stacoviak:** It's less like "Oh, they're bad, and open source good..." It's more like "What really happened?" So that, one, we just know, as developers... Because there's an assumption from the outside, "Oh, people knew in advance, and this was orchestrated." Well, maybe it was at some level... So I just talked to somebody else in dev advocacy today, and she said they knew three days in advance.

**Matthew Sanabria:** Yeah.

**Adam Stacoviak:** So dev advocacy knew a couple of days in advance...

**Matthew Sanabria:** Maybe they did, but engineering didn't... Yeah.

**Adam Stacoviak:** But senior engineers on the tofu -- I mean, the TerraForm team didn't know.

**Matthew Sanabria:** Well, HashiCorp's an interesting company, because they're like a company of companies, if you think about it. They have multiple projects... Nomad, Vault, TerraForm console...

**Jerod Santo:** Tons of projects, yeah,

**Matthew Sanabria:** ...all of their projects. They have a bunch of projects. And each of those teams kind of operates in autonomy, by themselves. They contribute to each other's codebase, they have shared libraries and stuff... But for the most part, TerraForm is TerraForm, Vault is Vault, Nomad is Nomad.

\[00:07:56.09\] So from the TerraForm side, we were pretty shocked. And mind you, I was on TerraForm Enterprise, so our license and all that has never changed. TerraForm open source changed. So I wasn't on the TerraForm open source team. Maybe they knew in advance, but for me, on the TerraForm Enterprise team, we did not know in advance.

**Adam Stacoviak:** I guess it kind of makes sense, to some degree, that enterprise doesn't need to know...

**Matthew Sanabria:** Right. Right.

**Adam Stacoviak:** ...because you don't really - not so much care, but it's your underpinnings. You're upstream from the open source.

**Matthew Sanabria:** Yeah, yeah. And the customers that are buying the Enterprise product are paying for it, and they're going through that sales process anyway.

**Adam Stacoviak:** Right. I think though, when you make a major shift like that -- the story arc, quickly, for HashiCorp... Mitchell Hashimoto created it years ago when he created Vagrant; actually, a couple of years after Vagrant. It was successful enough to create a company that created products, that lived in open core, but also had paid models around it. It was very successful. So successful that they IPO-ed. You were a part of that company.

**Matthew Sanabria:** I was definitely happy for that, of course...

**Adam Stacoviak:** Right. Which is a great thing. And I think when you're at that level, you probably should communicate to the people around you in your company, to say "Is this a wise move? We are so ingrained, given that success, and the dev culture and the dev community..." TerraForm is such a used software that the community was like "That's not cool. We're gonna fork it and make our own thing." It was that impactful.

When you make software tools and products that are that impactful, you probably should ask for "Is this the right way to handle it?"

**Matthew Sanabria:** Agreed.

**Adam Stacoviak:** "Is there a better way?"

**Matthew Sanabria:** I mean, looking at the open source repos, there's definitely people that are happy to use HashiCorp's products, they love the products, they are very active on the issues, pull requests, and all of that... And yeah, there was a time where TerraForm was short-staffed, and there was a public readme update or an issue where they told the community "Hey, we're a little short-staffed in the next couple of months. We're gonna slow down our reviewing of open PRs." But that was communicated. And yeah, the community looks at that and says "Hey, what's going on with TerraForm?" But it was communicated to the community, and they were aware. They were kept in the loop. That's something that I would have probably expected to happen with the project with the license change... But that didn't happen. So I was kind of shocked about that. Like, you would expect that to have been communicated to the community more in advance, I guess is what I'm trying to say. So it was kind of a shock when it wasn't.

**Jerod Santo:** Did you leave because of that, or...?

**Matthew Sanabria:** That was one of the motivating factors of why I left. It was just the shift in the engineering culture; the move away towards that more product culture kind of did it for me. I mean, when I joined HashiCorp there was about 350 people. When I left, there was about 2000. And obviously, I went through the IPO with them and whatnot... So that was one of the reasons, too. It's like, you're no longer working on open source, you're working on source available, if you think about it, right?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's interesting though, because you feel that way even though you were on the Enterprise team.

**Matthew Sanabria:** Yeah.

**Adam Stacoviak:** So just because you're in a silo that isn't really benefited or involved in the creation of the open source, you still care.

**Matthew Sanabria:** Exactly. Because if you think about the enterprise, the whole point of the enterprise product is to be able to use the open source product in a way that you control in your own data center, in your own cloud, whatever. Use it in a way that you get the RBAC, you get the CI/CD kind of pipeline-ish aspect to it; you want to be able to use that. But at the end of the day, it relies on the open source product to even be functional, right? So when you take that out... I don't know, do you destroy trust? Maybe... I don't know. It's hard to say.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** How big was your team?

**Matthew Sanabria:** We were about 10 engineers in like June. Then HashiCorp did a layoff in June; then we dropped to eight engineers. And then a few of our engineers went on maternity leave, and then I left... So when I left, we were five. So seven if you count the staff, but I don't count the staff engineers in that.

**Jerod Santo:** \[00:11:55.24\] Yeah. So were your colleagues equally as shocked, were they also upset? What was the general vibe on your team?

**Matthew Sanabria:** Oh, some of them were pretty frustrated with it, some of them were like "I don't care. We're Enterprise, it doesn't really matter." That was kind of the vibe. Me, I was more so affected by it, because I was looking to transfer teams a year before that to an open source team, to specifically work on the open source product, and not the Enterprise product... And that team also had their license change. So for me, I was like "That sucks."

But the team sentiment was pretty good. Being close to the money is nice. TerraForm Enterprise made a pretty good revenue chunk for HashiCorp, and most people were like "We're okay. We're still making money. We're fine. We don't care about the license."

**Jerod Santo:** That's fair.

**Adam Stacoviak:** This might be TMI, but can you talk at all about your Slack message? Can you give an overview of it?

**Matthew Sanabria:** Yeah, I can give an overview of it. That was a good one. So like every company, HashiCorp has channels in their Slack, where they talk about the competition, or they have a Twitter feed channel... All that stuff, where you talk about what's going on in the industry around us. And there's one for competition. And OpenTofu came up a lot in that channel, obviously. People were like "Ah, they don't know what they're doing." Some people were like "Ah, they're gonna eat our lunch", and the sentiment was spread out. There were people that were like "They're gonna take our business", and other people were like "Nah, they're nothing."

And it was interesting though, but there was one message there that was like -- when OpenTofu finally announced that they went to the Linux Foundation, and they're trying to go to the CNCF, but then they announced their name change... Because they were OpenTF, and then they changed OpenTofu. When they announced that, someone posted that announcement in the Slack channel. And I replied, and verbatim what I said was "I wish them well overall, I'm rooting for them overall, but that name sucks." That's what I said. Verbatim, that's what I said. I don't like the name OpenTofu, never been a fan of it; that's fine. But that's what I said in the chat. And yeah, I got pretty good backlash for that comment.

**Jerod Santo:** Oh, really?

**Matthew Sanabria:** Yeah, I was shocked...

**Jerod Santo:** Why?

**Matthew Sanabria:** This was like two to three days before my last day at HashiCorp. So I had already put my notice in, and all that stuff... But I was just engaging in conversation. I was like "Hey, I wish them well, but I don't like the name", whatever. And I had backlash from that comment where I guess two days passed, and someone went to leadership and said "Hey, Matthews commented in Slack. They're not rooting for HashiCorp, they're rooting for OpenTofu. They want us to fail" etc. And I was like "What?! That's not even what I said." So that made it back to me through my manager, and I was legitimately just shocked. I was like "Wait a minute... What? What are you even saying here?"

**Jerod Santo:** Right.

**Matthew Sanabria:** Yeah. So that was kind of like an eye-opener to me. I was like -- that was a little weird in my respect, but... What are you gonna do...? Things happen.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So are you at Cockroach Labs now?

**Matthew Sanabria:** I start in like a couple weeks.

**Adam Stacoviak:** So you're actually representing them on your badge...

**Matthew Sanabria:** Yeah, I have them on the badge.

**Adam Stacoviak:** ...despite not truly -- what if they rescind their offer?

**Jerod Santo:** \[laughs\]

**Matthew Sanabria:** They could. They sure can. It's business.

**Jerod Santo:** That badge will be null and void.

**Adam Stacoviak:** It is business.

**Matthew Sanabria:** It's business.

**Adam Stacoviak:** What makes you excited about Cockroach?

**Matthew Sanabria:** Just the distributed systems problems that I'll be able to get into and solve. So comparing and contrasting it to where I was, and now... HashiCorp - great company. Cool people. Some of the nicest and smartest ICs I've ever worked with there, and good products. But they build the tools. They don't necessarily run the tools at the scale that the customers do. Whereas Cockroach, they create the database, they run the database as a managed service... So I'll get to interact with those distributed systems problems. That's what draws me there. So yeah.

**Adam Stacoviak:** Also some licensing issues there, too. Weren't there some licensing issues at Cockroach?

**Matthew Sanabria:** Yeah, so --

**Adam Stacoviak:** ...which is fair to change, and it's fair to protect.

**Matthew Sanabria:** But that's the thing, right? Like, with my comment in the Slack that we were talking about, people were saying "Oh, the license is good. You just want HashiCorp to fail." It's like "No, I'm not mad about license. What I'm mad about is the lack of transparency." And that's kind of what got me. And then the company I'm going to, Cockroach, they have the same license. They're under the BSL license as well.

**Adam Stacoviak:** \[00:16:19.29\] Yeah, I thought it was SSPL, but I'm probably wrong.

**Matthew Sanabria:** I think it's BSL. I've gotta check, too.

**Adam Stacoviak:** You're probably right and I'm probably wrong, but there's a lot of licensing we cover over the years, so...

**Matthew Sanabria:** It's so much...

**Adam Stacoviak:** ...so my licensing wires might get crossed...

**Matthew Sanabria:** And in the time that I left HashiCorp and before I started at Cockroach I've been like --

**Jerod Santo:** Unplugged?

**Matthew Sanabria:** ...in a break mode. I just gave myself a little time to, you know, adjust...

**Adam Stacoviak:** I think they've always been clear, too... Cockroach has always been clear about what they're trying to do.

**Matthew Sanabria:** But it makes sense. CockroachDB is a service that you're gonna run; a long-running service that's going to provide value to whatever applications you run. If you notice, the licensing conversations around HashiCorp have primarily been focused on TerraForm. But all of HashiCorp's license changed. Vagrant, Nomad, Vault, Console - all of them changed. So it's like, when you step back and you say "Why are people upset about the TerraForm license change" versus the other products, like Vault or whatever, it kind of breaks down where \[unintelligible 00:17:16.15\] are services, and TerraForm is a tool. So then when you apply that to Cockroach, or even Elastic - they're services that run.

**Jerod Santo:** Yeah.

**Matthew Sanabria:** TerraForm is a tool. I don't know if it made sense to change the license of a tool. It does make sense to change the license of a service. Because you don't want other providers providing that service on your behalf, and whatnot.

**Jerod Santo:** Yeah. And then fundamentally use it in a different way.

**Matthew Sanabria:** Right.

**Jerod Santo:** Right? Like, you're gonna plug into a service, and have it operated, or operate it yourself...

**Matthew Sanabria:** Yeah.

**Jerod Santo:** ...a tool you're gonna build things with, on top of, modify more etc. And so they are approached very differently, and so that's why the reaction was quite a bit different.

**Matthew Sanabria:** Agreed. Yeah, it was an interesting thing for sure. I mean, again, we don't know what's gonna happen. I just felt like -- I don't know. I don't know if the communication was fully thought through in that sense. You probably saw the FAQ pages... They kept adding FAQ messages there, and... I don't know, it's a weird one. But what I thought was interesting is -- so I downloaded OpenTofu, played with it, used it...

**Jerod Santo:** Despite the name?

**Matthew Sanabria:** Despite the name, yeah.

**Adam Stacoviak:** \[laughs\]

**Matthew Sanabria:** I just renamed the binary. It's fine. It's okay. \[unintelligible 00:18:26.23\]

**Jerod Santo:** We had a conversation in our Slack about the name as well. I bet everybody in their Slack had a conversation about the name.

**Matthew Sanabria:** Of course.

**Jerod Santo:** I thought OpenTF was a totally fine name.

**Matthew Sanabria:** I thought so, too.

**Jerod Santo:** But they wanted a cute mascot, apparently... And so they went with the Tofu. I think they probably wanted to get further away from the word TerraForm, or...

**Adam Stacoviak:** TF in particular. I mean, it's obviously --

**Matthew Sanabria:** I think it's enforceable through some sort of copyright...

**Jerod Santo:** Yeah, they probably had to.

**Adam Stacoviak:** Yeah. It's an obvious derivative of its predecessor.

**Matthew Sanabria:** Correct.

**Adam Stacoviak:** So, I mean, it's not like you could argue that it's just shortened to OpenTF.

**Jerod Santo:** I was also not a huge fan of the name... But go ahead. You were saying you ran it?

**Matthew Sanabria:** Yeah, I ran it, used it... First of all, I think they made a really smart decision -- if I were in their position, I'd do the same thing. If I was in their position of the companies that got together and started that foundation and all that, I would do the exact same thing they did. Why wouldn't you, right? Like, you have an opportunity there, you have people that are willing to throw in engineering time... And then there were a few quick win features that you could have added, like the encrypted save file and whatnot. So it made sense for them to do what they did.

**Jerod Santo:** So what do you think of their claim -- so one of the things that Josh Padnick said on the show was about the amount of effort dedicated to Terraform versus OpenTofu... And he stated, based on GitHub public activity on the repos, and who's actually working on it, a handful of people, and he was saying "We had 15--" I think they said 15 engineers at the time, I don't know, dedicating their full-time resources. Do you think that's a) accurate from your perspective, and then b) do you think that's going to really move the needle?

**Matthew Sanabria:** \[00:20:06.04\] I think that's relatively accurate if you keep to -- if you just talk about TerraForm open source as itself... Because TerraForm is kind of a beast of a tool, right? You have the open source binary that is responsible for like the graphing and whatnot, and then you have the providers that actually communicate with the APIs. If you look at the open source part of the product, then yeah, there's probably just a handful of engineers working there. But then there's various little ecosystem teams, CLI experience teams, provider teams... And then the team - I air-quotes the team - of TerraForm expands beyond that. But realistically speaking, the major providers - you're already partnering with like AWS, Google, Azure, all that, for those providers, so you're kind of already sharing that bandwidth. But if you just focus on the core, I think they're correct. There's only about a handful of engineers that work on the core core.

So can OpenTofu pull it off with their 15 or so engineers? I don't see why not... Right? I think my worry with them is a lot of companies are coming together to work on OpenTofu, and maybe for now the companies have an alignment on where they're going. But will that always remain? Hard to say. What happens when conflict arises and one company wants to go one way and one wants to go the other way? What do they do?

**Jerod Santo:** Yeah. One thing I was trying to drill down with him, which I don't think I ever quite got the question asked in a way that he understood it, was - it seems like they have a lot of logos, but not a lot of like guaranteed support. So it's like, how much of this is support in name only? Like "Yeah, we're behind you. Put our name on the website." But are we actually going to -- because it takes a lot... Not just up front -- you get the energy and the excitement and everybody to slap their logo on in the beginning, but over the course of years to support a project... Like, that's an ongoing initiative that requires dedication.

**Matthew Sanabria:** Agreed.

**Jerod Santo:** And how many of these companies are actually dedicated? Obviously, time will tell. But he didn't seem too worried about it, so... I don't know.

**Matthew Sanabria:** Yeah, I listened to that episode, I heard the question, I was waiting for a concrete answer as well... We didn't get like a super-concrete answer, which is fine. They're still early. But I agree, time will tell on that. I hope they can maintain it, because it's a beast of a tool to maintain. The people that work on TerraForm have been there for quite a few number of years, built up the context around it... It's a pretty decent, large codebase, and it's a complex problem domain. The whole idea of TerraForm is just you're graphing your infrastructure, and you're making API requests. So if you don't understand that whole idea of graphing and whatnot, and dependency resolution, it's gonna be a little bit of a difficult thing for you to contribute to.

**Adam Stacoviak:** The question is, will you be a contributor?

**Matthew Sanabria:** I think so. I've already contributed to some of the TerraForm providers. So I'll probably keep contributing in that respect. I think I have contributed to core, maybe like small little contributions, but nothing major to the core codebase.

**Adam Stacoviak:** Does Cockroach use TerraForm?

**Matthew Sanabria:** Yeah, they have a TerraForm provider, but they don't use it for their production infrastructure.

**Adam Stacoviak:** Gotcha.

**Matthew Sanabria:** Yeah. They're on Pulumi, I believe, last I heard.

**Adam Stacoviak:** We'll see, I guess. Right?

**Matthew Sanabria:** Yeah. Yeah, we'll see. At the end of the day, the infrastructure is -- if you think about it, it's a solved problem. We know what we need to do with it; we need to spin it up, and we need to manage it. The tool that you use - use the best one for your team, right? The one that's going to provide you the best benefit. That's the one you should be using.

**Jerod Santo:** I'm curious if you have takes on some of the more recent releases in the infra world, System Initiative, the stuff that the Dagger folks are doing... What's interesting to you?

**Matthew Sanabria:** Yeah, the Dagger stuff's interesting. I heard about them on the podcast, I looked at the website and whatnot... I haven't used it yet. I have not used it. System Initiative however I have used, I've contributed to, and I interviewed with them.

**Jerod Santo:** Okay. So you're excited about that.

**Matthew Sanabria:** Yeah, I'm very excited about the System Initiative stuff. Adam Jacob - great person. I think you had him on the show.

**Adam Stacoviak:** Yeah. We call him a friend.

**Matthew Sanabria:** \[00:23:55.23\] There you go. Perfect. Yeah, great, great people there. A couple former HashiCorp people that are there... I've talked to a few of them... They have a wonderful Discord, that if you are really interested in System Initiative, go join. They're wonderful people, they do everything out in the open as much as possible, and that's how I got involved. So I interviewed with them, didn't get that role, they went with someone else, because you know, startups... They're only like 14 people.

**Jerod Santo:** Yeah, they're small.

**Matthew Sanabria:** They're small, so they've got to be very, very picky, which is great. But then I liked the product, did the beta, went through the beta testing and whatnot, gave them feedback and all that... And then I contributed to their Podman driver, to run System Initiative on Podman.

**Adam Stacoviak:** Is it the future?

**Matthew Sanabria:** "Is it the future?" is a good question. I don't know. I like the ergonomics of it a lot. Honestly, it's very fun, because when you're thinking about infrastructure, the one thing that really left a bad taste in my mouth with TerraForm is when you're trying to find out what other resources you can use with this resource, it's very difficult. You need to know the name of the resource that you want to use. Like, finding the dependencies and the connections between them is tough. You have to look in their docs, and the docs are -- there's a lot. But with System Initiative you drag an asset onto the pane, and you know the dependencies that you can use with that resource. You know what can plug into it, you know what it can output to... And that's great. I thought that was cool. So from the visibility of how you can like build your graph of infrastructure, I think System Initiative is great in that regard.

Outside of that - obviously, they're still in very, very early release phase... So they have like a few UI things to smoothen out. But I don't know, is it the future? Again, the future will tell what the future is, right? \[laughs\]

**Adam Stacoviak:** Do you think it could be just a UI that others -- like, could it be a UI on top of TerraForm, for example? Could it become the interface that we begin to use to orchestrate services, and infrastructure, and stuff like that, rather than just being its own silo?

**Matthew Sanabria:** It's possible. They could open that up, because they have the capability, technically. Under the hood, all the assets are just TypeScript under the hood. So it's like a function you run; as long as you write it in that interface way, you're good. I think so. Would they want to do that? I'm not sure.

**Adam Stacoviak:** Well, that seems to be the most innovative thing, really, in what it offers.

**Matthew Sanabria:** Agreed.

**Adam Stacoviak:** It's the visual interface to connect the nodes, and see the dependencies... Rather than scouring through YAML, or whatever else you might have for configuration.

**Matthew Sanabria:** Exactly.

**Adam Stacoviak:** That's challenging, right?

**Matthew Sanabria:** It is. And the example they run you through in the beta is basically spin up an EC2 instance, security group, SSH key... You just put it all together and you see a graph in your AWS region and whatnot, and it's all graphed really nice for you, and you get to apply it... And similar to TerraForm, they have their graph-based way of applying, so dependencies get created first, and blah, blah, blah... Which is great. I like their extensibility, though. So for TerraForm, if you want to extend TerraForm, you need to contribute to the provider, if there's one; if there's not a provider, you need to create a provider. Build that binary, ship it. In the System Initiative side, you can just edit the TypeScript; you can go in there, drop TypeScript functions in, and now you have a new asset to manage. So from the extensibility side, I think they have a more extensible platform, for the average developer.

**Adam Stacoviak:** Right.

**Jerod Santo:** And you're an ops guy who likes TypeScript?

**Matthew Sanabria:** I don't actually use a lot of TypeScript. I use a lot of Go.

**Jerod Santo:** Because you don't seem to have a problem with that.

**Matthew Sanabria:** I don't. TypeScript's very readable... It's not my favorite language, but coming from another strongly-typed language, TypeScript works for me.

**Jerod Santo:** Happy to hear that. I just remember that one of the --

**Matthew Sanabria:** I think Kelsey was on, saying that he's --

**Jerod Santo:** Yeah, one of the concern is is that it needs to be multilingual; specifically backend folk, infrastructure folks aren't gonna want to use TypeScript, and so... Counterpoint.

**Matthew Sanabria:** I think if you're a good engineer, the tools matter less than knowing how to use them correctly.

**Jerod Santo:** Amen.

**Matthew Sanabria:** \[00:27:47.28\] That's what it is. So if they're using TypeScript, and I know how to use TypeScript to do what I need to do, why do I care so much? I'm using the thing. It's okay.

**Jerod Santo:** "I'm using the thing."

**Matthew Sanabria:** Yeah, I'm using the thing. So for me, it works out. Do I maybe wish it was something like Go or Rust? Maybe. But everybody knows TypeScript at this point. It's a pretty ubiquitous language. I think it's a good first choice for them, if they want to expand later.

**Adam Stacoviak:** It's got a wide footprint of users.

**Matthew Sanabria:** It does. It really does.

**Adam Stacoviak:** And so in that regard, that's smart.

**Matthew Sanabria:** Yeah. When you contrast it with something like Pulumi, who supports many languages - I don't know if that's the right choice. I think when you give people too many choices, you fall into that analysis paralysis situation where you're like "What language do I use? If this team's using Python, and that team is using Go, can they contribute to each other's stuff? Or am I creating silos?" So I don't know. I don't know the right answer, but we'll see.

**Jerod Santo:** Yeah. Well, it's a different thing. So one thing that Solomon said on the show about Dagger is like -- they were CUE lang, which is basically YAML on steroids; if you don't know about it it's a strongly-typed configuration language... And that was a real hang up for people, because they wanted more power... And so now they went the other direction - Go SDK, Elixir SDK, TypeScript SDK etc. And I wonder if -- like, that distinction is significant from a declarative YAML-esque thing to a programming language. But once you get to that point, the language itself is less significant, right?

**Matthew Sanabria:** Yeah, I think the win there is getting off of like the DSL for them, and then giving the opportunity to really just plug in whatever you need. I don't know if it's --

**Jerod Santo:** To write code, yeah.

**Matthew Sanabria:** Right, to write code.

**Adam Stacoviak:** Proprietary versus whatever is out there.

**Matthew Sanabria:** Exactly. Yeah, exactly. Because there have been a lot of people that I've -- I've worked with so many customers over my time at HashiCorp, that they asked for loops; proper loops in programming languages. And they had good use cases for them. And the HashiCorp \[unintelligible 00:29:48.13\] wouldn't really enable that in that regard. So... Yeah, it's interesting to see what's out there though. I'm excited for all the new tools, and I wish, when I was doing more ops work earlier in my career, a lot of these tools existed, because it would have gave me more choice. I was kind of stuck with Bash and Ansible in a sense...

**Jerod Santo:** Well, man, we appreciate you stopping by and telling your story.

**Matthew Sanabria:** Yeah, thanks for having me.

**Adam Stacoviak:** It was a fun deep-dive.

**Matthew Sanabria:** Yeah, I'm happy to chat about these things.

**Adam Stacoviak:** Well, I guess it was more of like a shotgun dive.

**Matthew Sanabria:** A plunge. It's a plunge.

**Adam Stacoviak:** We got a lot of stuff out there, you know?

**Jerod Santo:** We splashed it.

**Adam Stacoviak:** We splashed it, yeah. Sure. Splash.

**Matthew Sanabria:** No, I appreciate y'all having me. It's been great to see you.

**Adam Stacoviak:** Nice meeting you.

**Matthew Sanabria:** Nice to meet y'all, too.

**Jerod Santo:** You did it. You're off the hot seat.

**Matthew Sanabria:** That was fun.

**Break**: \[00:30:33.25\]

**Jerod Santo:** Alright, so Nithya Ruff, director of the OSPO at Amazon, is that right?

**Nithya Ruffnithyaruff:** That's right. The open source program office for all of Amazon --

**Jerod Santo:** For all of Amazon!

**Nithya Ruffnithyaruff:** ...AWS, and the stores, devices, other... The whole nine yards.

**Adam Stacoviak:** Everything. OSPO of OSPOs.

**Nithya Ruffnithyaruff:** OSPO of OSPOs.

**Adam Stacoviak:** My gosh. That is... That's gotta be a big thing, right?

**Jerod Santo:** And on top of that, you listen to the show.

**Nithya Ruffnithyaruff:** I listen to the show. That's an even bigger credential.

**Jerod Santo:** Right?

**Adam Stacoviak:** You think so?

**Nithya Ruffnithyaruff:** Yes.

**Adam Stacoviak:** I would think your credentials are your real credentials, but...

**Jerod Santo:** I'm excited about your credentials.

**Adam Stacoviak:** ...I'm so honored that you think that's an honor. Gosh.

**Nithya Ruffnithyaruff:** I am a huge podcast fan. I listen to podcasts on my walks, and typically podcasts of about 24 minutes to 30 minutes... And my goal every day is to do at least a 30-minute walk, so it really helps me kind of listen, learn and walk, all at the same time.

**Adam Stacoviak:** Every day 30 minutes?

**Nithya Ruffnithyaruff:** I try.

**Adam Stacoviak:** Let's talk about that for a second, because that is a big deal...

**Nithya Ruffnithyaruff:** Yes.

**Adam Stacoviak:** Too many people have health conditions and issues or whatever, and all they've gotta do is just walk... For 20 minutes, maybe 30 minutes every day. Just go enjoy the world, right? Just go and see what's out there. Bam, healthy.

**Jerod Santo:** There you go.

**Nithya Ruffnithyaruff:** The fresh air...

**Adam Stacoviak:** I mean, obviously, a little bit of diet changes if you want to... But like literally, your heart and your lungs, all these things change if you just are a little active.

**Nithya Ruffnithyaruff:** And they say small, micro habits add up...

**Adam Stacoviak:** Oh, my gosh... What kind of books do you read?

**Nithya Ruffnithyaruff:** ...and it's like compound interest. So over the course of a year, 30 multiplied by 365... All of a sudden you've walked miles that day.

**Adam Stacoviak:** People are not that excited about a 1% change, until it compounds, right?

**Nithya Ruffnithyaruff:** Yes. Yes.

**Adam Stacoviak:** If you have - oh, that's 1%. No big deal, right?

**Nithya Ruffnithyaruff:** Compound interest is fantastic.

**Jerod Santo:** Yes.

**Adam Stacoviak:** 1% today, 1% tomorrow - well, now you're... Do the math for me, Jerod. 2%...

**Jerod Santo:** Hey, ChatGPT...

**Adam Stacoviak:** \[laughs\]

**Nithya Ruffnithyaruff:** That's right. Where is ChatGPT when you need it? \[laughter\]

**Adam Stacoviak:** Exactly. Do this math for me. That's a good thing. Okay, cool.

**Jerod Santo:** Love it.

**Adam Stacoviak:** So what does it take to be the OSPO of OSPOs then? What kind of things do you see, what kind of stories can you tell us?

**Nithya Ruffnithyaruff:** What led me to being here, or whatever?

**Adam Stacoviak:** Sure, that too, but more so like what you're doing as the OSPO of OSPOs. I mean, Amazon is a massive company. I mean, I probably have something on my front door right now from Amazon...

**Nithya Ruffnithyaruff:** Yeah. Jeff sends me something every day.

**Adam Stacoviak:** Does he really? Okay. Well, that's nice.

**Jerod Santo:** Personally? Does he personalize it, or...?

**Nithya Ruffnithyaruff:** No...

**Adam Stacoviak:** Around my house I do save Jeff a lot, because...

**Jerod Santo:** Do you?

**Adam Stacoviak:** We all know is Jeff Bezos, but like... I just say "Yeah--" I just reference Jeff. I'm gonna talk to Jeff about x. If I want to change Amazon, I'm like "I've gotta call Jeff..."

**Jerod Santo:** \[laughs\] I've literally never done that. Do you do that?

**Nithya Ruffnithyaruff:** It's funny you say that, because every time I receive a package - and I order things constantly on Amazon - I always say "Oh, Jeff sent me something today." \[laughter\] My husband said "Who's Jeff?" I said "You know, the Jeff..."

**Adam Stacoviak:** \[00:38:17.27\] So we're of the same mind then.

**Nithya Ruffnithyaruff:** Yes.

**Adam Stacoviak:** So what does it take to run the OSPO of OSPOs? We know how big Amazon is, we know how influential it is... As a brand, and just of change. AWS has changed the way we compute. I mean, they were early on in the cloud, essentially creating and inventing it, but what is it like to be in that role? What does open source play in that kind of position?

**Nithya Ruffnithyaruff:** Open source is really central to how we build our products, how we build our infrastructure, how we build our services. It's a key component in everything we build. So all of our builders, all of our developers - we call our developers builders, because they're building something, right? Software builders. Our job in the open source program office is to make it dead easy for our builders to work with open source, so that from the time they consume, to contribute, to release, to distribute, to comply, or to engage with open source, we want to educate them on the easy way to do things, the norms of open source... Build it into our workflow, so that they don't have to open a ticket to ask us permission to use something, or work with something... So our job is to let them innovate with open source freely and openly.

And we also play another role, which is work with foundations, open source communities, projects, people, so that they know how to navigate Amazon. We help them navigate within Amazon as to who to connect with, who's doing what, from an open source perspective. And so we kind of are the bridge between open source community and Amazon. That's the role we play.

**Jerod Santo:** I would say historically, Amazon hasn't had the best reputation with regard to open source, at least from my purview. And I'm curious what your position is, and maybe you're helping change that image, or what you're doing to maybe change the way Amazon approaches open source... I mean, you all do a lot in the world of open source. I think that gets perhaps shrouded in other things, like the posting of open source projects, and commercializing of that, which is what we talked about more often, I think... What's your perspective on that?

**Nithya Ruffnithyaruff:** We want to do it through action. We want to do it through participating in communities by giving back, by supporting maintainers, and projects and foundations, rather than just telling.

**Jerod Santo:** Yeah.

**Nithya Ruffnithyaruff:** And so I hope you've seen over the years that we are showing up more in open source forums. We donate a lot of AWS credits, for example...

**Jerod Santo:** That's true, yeah.

**Nithya Ruffnithyaruff:** We do GitHub Sponsors... We support foundations like the OpenSSF, Apache Foundation, Linux Foundation, Project CNCF, that sort of thing. And we have lots of developers who are behind the scenes actually contributing to projects. It's never enough, because all of us consume a lot, so we have to keep working on that. And most businesses, not just Amazon, is challenged with business justification; why should I dedicate five engineers to doing this work? Because there's so many competing needs. Customer needs, and product development needs, and so on and so forth.

\[00:41:52.06\] So we work hard as an OSPO and open source marketing team, who's downstairs at our booth, to work with businesses, to educate them on why they should be involved, why they should contribute back, what's the business case for setting aside people to do it... So those are the ways we help the business do more with open source. But we have to have a good business decision and argument, because businesses know business, and they need the return on investment or justification for why they should be involved.

**Jerod Santo:** What are some of the things that your OSPO does to enable these different business units to adopt open source, to maintain open source, to do more? What are the kinds of things that helps them get there?

**Nithya Ruffnithyaruff:** One of the easy things OSPOs can do is to create easier policies. So in a very restrictive regime, you can make developers ask for permission, go to lawyers and ask for permission for everything they use...

**Jerod Santo:** Yeah.

**Nithya Ruffnithyaruff:** ...which will deter them from using open source. So we streamline and we make sure that a lot of open source licenses are already greenlighted, and that they automatically flow through the system without a ticket being caught, or permission being asked. So that's one easy way you make it easy for people to consume it.

We have relaxed some of the rules for contribution back. If it's a simple contribution, you don't even have to cut a ticket; you can just go contribute. Even for releasing software, we have something called simple releases. So if it is a sample, or a scientific work etc. you don't even have to cut a ticket; you can just release it.

And even the rules for reviewing bigger release of projects and stuff, we really work with the business to help them see what the business reason is for contributing, and how to run a successful project once you've contributed. Because you just don't want to dump it on GitHub and run. You want to be able to maintain it, build a community, a neutral governance, all that stuff. So we kind of make it easy in that fashion for business owners to know that we are here to support you, and make it easier for you to do open source.

A lot of times, teams don't want to do it, because they'll say "I don't want to go talk to our IP lawyer, and I don't want to have to justify why I need to do this." But if you take away all those excuses, then it becomes easier for people to go do it.

**Adam Stacoviak:** How long has the OSPO been in place? Has it been in place for years, half a decade, eight years? I mean, they've become more popular in the last, I would say five to eight years roughly... But that's probably even \[unintelligible 00:44:46.13\] More like in the last three to five. How long has this OSPO been in place?

**Nithya Ruffnithyaruff:** The Amazon OSPO has been in place almost since 2007-2008, believe it or not.

**Adam Stacoviak:** Really? So even further. Okay. So that's --

**Nithya Ruffnithyaruff:** Yeah. But it wasn't called an OSPO.

**Adam Stacoviak:** ...16 years?

**Nithya Ruffnithyaruff:** Yeah.

**Adam Stacoviak:** Okay...

**Jerod Santo:** What was it called?

**Nithya Ruffnithyaruff:** I think it was just called an open source office, open source strategy office, or open source approvers. My colleague, Henri Yandell, who is in my team, he started it. It was because, you know, the GMs and lawyers said "Please come, someone whose knowledgeable..."

**Adam Stacoviak:** Well, they probably cost a lot more money, right? Lawyers cost a lot of money. Attorneys... Right?

**Nithya Ruffnithyaruff:** Yes.

**Adam Stacoviak:** Per hour. So I would much rather have policy in place, that I can reference, than a lawyer that has to spend an hour to charge us $700 bucks. Right? And maybe that's even cheap for an Amazon type of attorney.

**Nithya Ruffnithyaruff:** It's funny you mentioned that... A lot of companies start their open source program office because they say "We can't have everybody go to our lawyers and ask questions." So if you have thousands of developers, all pinging them and saying "Can I use this license? Can I use this license? Can I contribute this? Can I release this?" It chews up a lot of valuable attorney time. So often, OSPOs kind of act as the front line, and we kind of act as the in-between developers and legal. And we handle a lot of the questions, and the issues, and the tickets.

**Adam Stacoviak:** \[00:46:19.04\] It's funny it's called Open Source Programs Office when it's that, right? It's essentially the gateway to legal; the cheaper -- not just that, but the way you described it just now...

**Nithya Ruffnithyaruff:** It's one role, yeah.

**Adam Stacoviak:** I'm not saying that's only the way it is.

**Nithya Ruffnithyaruff:** But that's how a lot of OSPOs get started... Because you have to do compliance when you consume open source. But then good OSPOs go beyond that, and actually make it easy to work with community, they go work with foundations, they publish, they speak, they share best practices, they help the company be a contributor and a leader in the community. So you need to take it past compliance, into really leaving something behind.

So yeah, I mean, the generic OSPO has been around for the last 10-15 years. Google, Facebook, everyone had an open source program office. There was a group called the To Do Group, which sits in the Linux Foundation, which came along and created kind of a support system for open source program offices to share best practices across teams. Because we are all trying to do the same thing, trying to make it easy for developers to work in open source; try to ease the legal burden, try to engage more, try to respect the norms of open source, be a good citizen... You know, all of those kinds of things.

**Adam Stacoviak:** What are some of the challenges that you face now? Today, this week, this month... What are some challenges you're dealing with, positive and negative? Like, positive challenges in terms of "We've got to get this done. This is a great thing", and also one's like "This sucks. We've got to just deal with this and make it better"?

**Nithya Ruffnithyaruff:** I think scaling what we do across the company is one of the challenges, because especially in a large company, when you have thousands of developers who you need to make aware of the policies and processes, and that we are here to help you, it's hard to get the word across. So we've been working on a program called Champions, where we have people in businesses become open source champions and enthusiasts. And so you have a local person that you can talk to, instead of coming to an OSPO all the time. Because OSPOs typically tend to be small, and they're serving thousands of developers. So today, we have 230 champions in the company, that help local businesses across Amazon have a local person who's an expert that they can reach out to, and they can then reach out to us if necessary. So scaling is a challenge.

The second challenge is open source security, and all the different places we need to get involved in from an open source security perspective. Working with OpenSSF, working with upstream producers... Working with our security teams inside the company, working with policy makers... There's a lot going on in security, so that's another big area of interest.

The third is AI. What's the role of open source in AI? What are the different artifacts in AI? How are they going to be licensed from an open source perspective? Working with OSI, and trying to get our arms around making sure that we have a standard for open source artifacts is important. And you know, with all of us using more and more models and more datasets, helping our legal team again, like we did for licenses, helping them review and approve model use, and dataset use is something we're trying to do. And finding good people to build your OSPO is always hard.

**Adam Stacoviak:** Yeah, it probably is.

**Nithya Ruffnithyaruff:** \[00:50:11.18\] There's only a small group of people that --

**Adam Stacoviak:** \[unintelligible 00:50:11.29\] that also like policy.

**Jerod Santo:** How did you land there?

**Nithya Ruffnithyaruff:** How did I land at Amazon?

**Jerod Santo:** Well, specifically in the OSPO, Director of OSPO. What brought you there?

**Nithya Ruffnithyaruff:** Yes, I've been working in open source for 25 years now. My first job in open source was at Silicon Graphics, working on open source strategy and support... And I loved open source. I fell in love, and I said -- because it's such an intersectional role of strategy, community, technology, law... And it's just fabulous. So I've been working in various companies in open source, and it was about 10 years ago I was at SanDisk, and my manager said to me -- I was the Director of Marketing there, and he said "You know, every time you work with open source, your eyes light up. Maybe you should go do open source for the whole company." And that kind of gave me the bug of "Yeah, maybe I should run open source strategy for SanDisk." And I started -- I pitched the idea to our SVP of engineering, and he said "Yes, we need someone doing that." So I became the first director of open source strategy at SanDisk, which then led to becoming the Senior Director of Open Source at Comcast for five years... So I started the OSPO there and built it all the way... And then when Amazon was looking for someone to lead their OSPO, they came to talk to me. And I loved the challenge of the scale of Amazon, and the width and breadth of things that they do... And it's an open source geek's dream to kind of look at all of the different use cases, and how will we work in open source. So here I am.

**Adam Stacoviak:** There you go...

**Jerod Santo:** It's a good story.

**Adam Stacoviak:** It's a fun journey.

**Jerod Santo:** What was that pitch like? Do you remember it? When you pitched the SVP of engineering back in the day...

**Nithya Ruffnithyaruff:** Yes...

**Jerod Santo:** You sold him.

**Nithya Ruffnithyaruff:** Yeah. I basically wrote a one-and-a-half-page document which said "Open source is so important; even though we are a hardware company, software is very important to Flash. And Flash hardware cannot function if storage stacks and open source IO does not know how to use the Flash speed..." Because most software stacks in those days were optimized for hard drives.

**Jerod Santo:** Yeah.

**Nithya Ruffnithyaruff:** And I said "We need to change the software ecosystem around us if we need to get Flash to be fully optimal, working with software. And I know the consumer group which works on USBs is trying to do that, I know our enterprise group is trying to do that, this group is trying to do that... We need to be involved in the Linux Foundation, we need to work with the Kernel, we need..." So he said "Yes. And we need to coordinate and leverage each other's work, and we need to do it in a more intentional way, rather than everybody going off and doing their own thing."

**Jerod Santo:** Yeah.

**Nithya Ruffnithyaruff:** And with that, we became members of the LF, we started working more closely with all the storage subgroups, and the Kernel, and started recruiting more open source-friendly people, we started doing compliance better, we started showing up at shows, and...

**Jerod Santo:** Huh. It's a good sales pitch. I would have bought it as well.

**Nithya Ruffnithyaruff:** That was fun.

**Jerod Santo:** Yeah, that sounds like a very challenging coordination.

**Nithya Ruffnithyaruff:** \[00:53:55.02\] Yeah, it was, because I still had to work with all these different divisions, and understand that engagement with open source, and where they were, what their obstacles were, what were the commonality across these teams etc. I didn't own any resources, I didn't have a team; I was working with a CTO, and trying to help the company. But now I have a team, so it's so much nicer to be able to scale, and have really smart, smart people at Amazon, who help me get this work done.

**Jerod Santo:** Yeah. Curious what your guidance is, coming back to Amazon... I'm an engineer at Amazon, I have a library that I've written, that facilitates something inside of our service... It's generic, I could open-source it; I come to whomever and say "Hey, I'd like to open source this." What is the guidance like? "You will do this, you will license it that way, it will be under this organization on GitHub, it will have this kind of a readme..."? I mean, do you guys step by step help people through this?

**Nithya Ruffnithyaruff:** Yes, precisely.

**Jerod Santo:** What does that guidance look like? What do you say?

**Nithya Ruffnithyaruff:** They typically have to write a document. We are big doc writers at Amazon. So they have to write a doc to get approval from their business, their manager, and their business owner, that this is okay to open-source. And typically, their business line lawyer may be involved in approving that. And then once it's approved, they come to the open source program office, they help them go through security review of the code, they help them do something called -- it's an open source project called Repo Linter, which looks through your code and makes sure that you haven't got keys and proprietary information etc. So it sanitizes it.

We helped them attach an Apache 2.0 license, we make sure that they have a readme file, code of conduct etc. And then my I have a GitHub team also who administers our external GitHub - they help them cut a ticket to open a repo, put it in the right org... We have a samples org, we have a lab org, where all the lab papers are published... And so they'll put it in the right org, and they'll also monitor the org, making sure it has a proper maintainer, issues are not stale... That we are being good citizens on the project.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Cool.

**Adam Stacoviak:** That's a bit of a ceremony, I would say, right? It's still somewhat intimidating to have to go to your manager and be like "Hey, this is cool", because you kind of have to be vulnerable of it, right? I guess you are anyways when you're introducing code into the world, you're being a little vulnerable with your work, but...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** But you're like "Hey, this thing is valuable enough..." Then you said the business line attorney might have to approve it...

**Nithya Ruffnithyaruff:** Yes.

**Adam Stacoviak:** And they start to come to you for more stuff...

**Nithya Ruffnithyaruff:** Yeah.

**Adam Stacoviak:** It's a lot though still yet.

**Nithya Ruffnithyaruff:** I think you have to be thoughtful if it's a full library and a full project, right? You need to be thoughtful about what's the right thing to do. And one of the right things to do is to resource it correctly if you're open-sourcing it, so that it can be maintained properly. Very often teams will be very enthusiastic about open-sourcing, but not commit to maintaining it.

**Adam Stacoviak:** Yeah, for sure.

**Nithya Ruffnithyaruff:** And so we want to make sure that the business is fully behind it, and there is a good, sound reason why it's the right thing to do.

**Adam Stacoviak:** It's like a liability in a way even too, right? A liability in the fact that you have to show up. It's one more thing to commit to; it's one more yes that you can't say no to later on. It's a liability in that sense that, from the business perspective, as Amazon, you have to say "Yeah, this makes sense, not just to open-source, but for us to open-source it."

**Nithya Ruffnithyaruff:** \[00:57:58.07\] Yes, yes. And you know, small little things that you want to release, like sample code, or something. We really don't do that much due diligence. But if it's a full-blown project, we've released Bottlerocket, and Firecracker, and Finch, and projects like that. We really want to make sure we do it right. We owe it to open source to do it right, and not just throw it over the wall.

**Adam Stacoviak:** Let's say there's a case where this library you've written, Jerod, is generic. It's useful to some, but y'all say "Well, it makes sense to be open source, but not from us." Do you allow that person to put an open source on their own, if they've written it on company time, or for company resources? Is there ever a time whenever it's like "It's not right for us, but it's okay for you."

**Nithya Ruffnithyaruff:** I haven't seen a situation where we've said "It's okay for you to go off and do it on your own." Because if it's done on company time, we need to make sure it's done right. If it's their pet project they've been working on in the weekend, something to do with dairy farming, or something different...

**Adam Stacoviak:** Right. You'll never get into dairy farming...

**Nithya Ruffnithyaruff:** But farming is getting into open source.

**Jerod Santo:** I was gonna say, you never know what Amazon might --

**Adam Stacoviak:** I said that facetiously, yes.

**Nithya Ruffnithyaruff:** But there is a project in the Linux Foundation around farming.

**Jerod Santo:** Is there?

**Nithya Ruffnithyaruff:** Yeah.

**Jerod Santo:** That's awesome.

**Nithya Ruffnithyaruff:** Yeah.

**Jerod Santo:** Well, I mean, Amazon is a -- I don't know if it's a conglomerate, but you're definitely... The organization expands into areas where you may have -- I mean, Whole Foods is an example...

**Adam Stacoviak:** For sure.

**Jerod Santo:** ...where all of a sudden now you're a grocer. And so maybe there are competitive things that you don't know about, but you eventually will. I don't know.

**Nithya Ruffnithyaruff:** And we need to do due diligence to make sure that it's not something that we need to care about.

**Jerod Santo:** What are some of the darlings of Amazon open source? Like, if you were to name like "Here's our biggest open source projects." You listed a few there. Or like the ones that the OSPO really loves, like "Ah, a shining example of Amazon open source." What are some examples?

**Nithya Ruffnithyaruff:** I think if you go on AWS Open you'll see some of the projects listed there, and blogs. Clearly, Bottlerocket, Firecracker, Finch, FreeRTOS... What else? Those are some of the ones that I can think of off the top of my head. But we contribute to a lot of different projects. Like OpenJDK, we take what we do inside the company to harden it, and to make it easy to use, and we provide it as Corretto, which is an open free distribution for everybody to use. So there's lots of really fun things like that that we contribute to.

**Jerod Santo:** Well, we appreciate you stopping by and chatting with us.

**Adam Stacoviak:** Yeah.

**Nithya Ruffnithyaruff:** Thank you.

**Break**: \[01:00:48.21\]

**Jerod Santo:** Alright, well, we have Jordan Harband. Hey, man.

**Jordan Harband:** How's it going?

**Jerod Santo:** Good. Good, good.

**Jordan Harband:** Thanks for having me.

**Jerod Santo:** You are an open source maintainer at large, mostly through the JavaScript side of things... Tell us about yourself.

**Jordan Harband:** Yeah. Let's see... So I maintain 400-450-some Npm packages, as well as Nvm. They account for like 5% to 10% of Npm's download traffic, which is terrifyingly high. I've been on TC-39, which is the JavaScript Standards Committee, since 2014. I was an editor of the spec for three years.

**Jerod Santo:** Long time...

**Jordan Harband:** Yeah.

**Jerod Santo:** When do you sleep then?

**Jordan Harband:** Hah! Well, in between open source and taking care of my kids, I squeeze in a few hours here and there.

**Jerod Santo:** Wow... 450 repositories. Surely, those don't all require active maintenance.

**Jordan Harband:** No, the vast majority of them are effectively done, and only need occasional dependency updates, and things like that. So it's that/8020 thing. 20% of the packages take 80% of my time. The rest are pretty self-sufficient.

**Jerod Santo:** Okay. From the TC-39 lens, when is Temporal coming? When can we use this?

**Jordan Harband:** Yeah, so "When can we use it?" is the right question. So Temporal has been stage three for two years now. Stage three usually is the time to signal "Hey, browsers, you can ship this. Users, you can start using it." However, Temporal has had what we call normative changes, like observable changes from JavaScript for almost every two months since it got stage three...

**Jerod Santo:** Why is that?

**Jordan Harband:** ...which to me tells me it's not ready.

**Jerod Santo:** \[01:05:58.23\] API changes, or what do you mean?

**Jordan Harband:** Some minor API changes, some semantic changes... It's because it's such a large and complex proposal that it was largely impossible to thoroughly review it before it got to stage three. Everyone \[unintelligible 01:06:10.22\]

**Jerod Santo:** Tell Adam what it is. He doesn't know what it is.

**Adam Stacoviak:** School me.

**Jerod Santo:** School him.

**Jordan Harband:** Have you ever written code with the date object in JavaScript?

**Adam Stacoviak:** Yeah.

**Jordan Harband:** So you may realize that the date objects sucks. It is awful. Its API is terrible.

**Adam Stacoviak:** I haven't used it enough to know that.

**Jordan Harband:** That's fine.

**Jerod Santo:** It lacks a lot of things.

**Jordan Harband:** Yeah. It's like mutable, so you can change it all the time, which means it's hard to keep track of where things are, it can't be trusted... It has really poor support for localization and all the different time zones in the world, and it's really hard to do date and time math that's reliable, and so on.

So Temporal is a proposal that was originally championed by the Moment.js maintainers. It basically provides like -- I think it's seven new globals, that are all under the Temporal object, that allow you to do reasonable date/time operations. And so it takes a lot of inspiration from actually a Java library called Joda-Time. And although I'm not a big fan of Java, or taking inspiration from Java, this actually is a Java library that's done things really right. And we've still, of course, made some tweaks to make it fit JavaScript idioms.

**Adam Stacoviak:** You don't like Java?

**Jerod Santo:** \[laughs\]

**Jordan Harband:** That's a topic for another time.

**Adam Stacoviak:** Okay, alright... Fair enough...

**Jordan Harband:** But either way, you'll be able to create a timestamp, effectively, as one object. You'll be able to create -- like, your birthday; that doesn't have a time associated with it. So you'll be able to create just a day, year and month, and that's all it represents. You'll be able to create a duration, like an object that spans two timestamps. And you'll be able to do reasonable things with that. So it's going to make working with dates and times infinitely easier and less painful in JavaScript. So I'm very excited, as are a lot of other people, about being able to use this proposal.

**Jerod Santo:** As am I... Hence I say, "When can I use it?"

**Jordan Harband:** Exactly.

**Adam Stacoviak:** Okay, so it's in the third phase...

**Jerod Santo:** They've been working on it for a while...

**Jordan Harband:** So the stages are zero through four. Four is when it lands in the spec. Three is usually when things start shipping it, when you can use it.

**Jerod Santo:** Browsers...

**Jordan Harband:** And it's been in stage three for two years. But we just had a TC-39 meeting two or three weeks ago, and that was the first TC-39 meeting since it got stage three, that there were no normative changes to it.

**Jerod Santo:** Okay, so it's settling down.

**Jordan Harband:** Yes, so it's settling down, exactly. And I'm holding my breath, because if at the next TC-39 meeting it doesn't have any normative changes, that's when -- so I'm a polyfill maintainer. I have like 100+ different polyfills for language features. So if in the next TC-39 meeting it doesn't have any normative changes, to me that tells me it's ready for me to start implementing it as a polyfill.

**Jerod Santo:** Yeah.

**Jordan Harband:** Which, you know, everybody can have their own signals. You don't have to rely on just what I say.

**Jerod Santo:** Sure.

**Jordan Harband:** But if I feel like it's worthy for a polyfill, that's when I'm going to start recommending people use it in production. Because at that point it's stable enough.

**Adam Stacoviak:** Is it available to use, but just not stable, so you shouldn't use it, basicaly?

3? That's exactly right. There are polyfills out there, but they don't -- typically, a polyfill tries to be as backwards-compatible as possible, so you can use the new feature in the oldest possible environments. The polyfills that are currently available don't have that as a goal. They're just trying to replicate the API with modern features. So that's good enough if you happen to be supporting just the latest Chrome, or something... But most production web apps need to support farther back than that in every browser. In addition to that, there's those API changes I told you about. So that's why I would say you shouldn't have been using it in production yet.

**Adam Stacoviak:** Yeah.

**Jordan Harband:** But now that the API is settling down, I'm hoping that will change, and we'll be able to start using it.

**Jerod Santo:** Okay. When your polyfill is done, let us know; we'll have a big JS Party, and we'll all celebrate.

**Jordan Harband:** Absolutely.

**Jerod Santo:** So the Moment.js folks actually obsoleted themselves, or will you still need something like that?

**Jordan Harband:** They will have, once Temporal is usable in production.

**Jerod Santo:** You just completely don't need it.

**Jordan Harband:** They unfortunately, in my opinion, they announced that Moment is done, essentially, like two years ago.

**Jerod Santo:** Yeah.

**Jordan Harband:** And I don't think they used the term deprecated, but essentially --

**Jerod Santo:** Unmaintained...

**Jordan Harband:** ...they're saying "You probably should stop using Moment. We're not going to change it anymore. Go use Temporal." But because Temporal wasn't quite stable yet... Like, I wish they had saved that kind of impact --

**Jerod Santo:** \[01:10:11.07\] In that statement later...

**Jordan Harband:** for the moment when it's stable. But nonetheless, all of those things will become aligned at the point where Temporal is stable and ready to use.

**Adam Stacoviak:** So you have closed doors and people waiting outside.

**Jordan Harband:** Exactly. Long line of people waiting outside.

**Adam Stacoviak:** Give me the Black Friday Temporal day, right?

**Jordan Harband:** Exactly right. And it is coming.

**Adam Stacoviak:** Mad rush, let's use it. Okay.

**Jerod Santo:** Certainly there's a lot of people that are still using Moment.

**Jordan Harband:** Absolutely. And I have a library that I maintain as well that uses Moment, and I'm going to migrate it straight to Temporal. People have been asking me to migrate it to Date Functions, or the other alternatives out there, and I just didn't want to do two migrations. Because the instant Temporal is usable, everything else is obsolete. So I'm just going to wait until Temporal is the thing I can migrate to.

**Jerod Santo:** So that'll be exciting. That'll be an exciting day.

**Jordan Harband:** Absolutely.

**Jerod Santo:** Thinking about your open source and your life and your lack of sleep... Are you able to make money off of this? Have you been -- I mean, because you're kind of crucial at this point to the Npm ecosystem as a human, it seems...

**Jordan Harband:** Yeah, I mean, I would say that the amount I make off of my projects is -- I'm very grateful for it, and it's enough that if I were single and in my 20s, I could do it full-time. But I am not single, and I have kids, and I'm not in my 20s, and it just doesn't cover the bills. So I've done the math, and if my most lucrative package -- like, I look at my most lucrative package, and then I look at my most used package, and if I extrapolated all that out for all my packages, I would be able to do open source full-time. But at the moment, that's not the case. So I would definitely be very happy to see a world where all of the profitable corporations that are using people's open source packages, mine included, are able to contribute even a tiny fraction of their profit. At that point, I think it will become a much more viable world for open source maintainers.

**Jerod Santo:** What accounts for the diff between those two things?

**Jordan Harband:** I just think because there's no -- so this is capitalism, the world we live in, which means that there's only two levers you can apply: capital and regulation. And there's no regulation that's forcing anyone to contribute to their tech infrastructure, their open source tech infrastructure. You could perhaps look at fiduciary duty, and say that they do in fact have a requirement, but it's not enforced in that way, at least.

**Jerod Santo:** Right.

**Jordan Harband:** So without the regulation, there needs to be a capital incentive for them to do it. And there is one, it's just a really hard one to --

**Jerod Santo:** It's visible sometimes.

**Jordan Harband:** Yeah, it's invisible. It's really hard to talk about it in a way that's quantifiable. You can point to it and be like "You have risked this amount of money because you didn't invest in this thing." It's really hard to demonstrate an ROI or impact to the bottom line.

**Jerod Santo:** Right, right.

**Jordan Harband:** But absolutely, I think it couples to everyone's bottom line, in that if you don't maintain your infrastructure, it's going to crumble and fall apart, and then there goes your company.

**Jerod Santo:** So when we go back to your packages and talk about the most supported, and then the most used - those are different, right?

**Jordan Harband:** Yeah.

**Jerod Santo:** Why is the most used not the most supported?

**Jordan Harband:** I think part of that is because most of my packages end up being people's transitive dependencies. So most of my stuff isn't like Babel, or ESLint, or WebPack, where people are choosing it. Most of my stuff is chosen by the maintainers of those packages, or three or four levels deep. And so even though my code is in almost every application on the planet, the number of people that have chosen me is very small.

**Jerod Santo:** Right.

**Jordan Harband:** And so I think that's a big part of it. I think also that the specific organizations that have chosen to give back are just going to always use some subset of what's out there. And so what I'm seeing, I think, is that the ones that are most supported just happen to be in that subset. Like, I don't know if there's a good rationale for it. It might just be the way it is.

**Jerod Santo:** Yeah. I kind of see it as like a movie, and you have your Scarlett Johansson, and then you have your audio engineer, and it's like they're both crucial... And maybe she knows that this is the best audio engineer in the world, and so "He's coming with me", or whatever, but the studio doesn't --

**Jordan Harband:** \[01:14:17.07\] And I think that's exactly right. Like, when everyone watches the Academy Awards or whatever, everyone pays real close attention to the best actor or actress, but they don't pay as much attention to the best sound guy, or the best costume person, or whatever... Even though the industry knows that those are the best people and really wants to hire them.

**Jerod Santo:** In fact, even at the Oscars I think they have like the engineering style Oscars have their own separate banquet the day before, or whatever...

**Jordan Harband:** Exactly. Because they know that's what people wanna watch.

**Jerod Santo:** ...and they don't air it on TV.

**Adam Stacoviak:** Right.

**Jerod Santo:** So it's kind of that same problem, but in a different situation.

**Jordan Harband:** Yeah. But the crucial difference here though is that that's a business, an industry, and the money that comes in from the actors, the well-known faces does in fact filter back to all the people who support it. But in open source, no one's paying any money for the software, so there's nothing to filter back to all those transitive authors... Which is in fact why I really like sites like Tidelift and thanks.dev. They are the ones -- like, GitHub Sponsors and Open Collective and so on are great, but Tidelift and Thanks.dev really focus on kind of surfacing and filtering the money through to all the transitive dependencies. So folks like me, who are the backbone of all of these projects, actually see some of that support. Whereas with GitHub Sponsors, people don't know who I am to go click on me and support my stuff.

**Jerod Santo:** Right.

**Adam Stacoviak:** How can we get you more well known to the people that use you via transient dependencies?

**Jordan Harband:** That's a great question.

**Adam Stacoviak:** How can we get to that visibility?

**Jordan Harband:** I wish I knew the answer to that.

**Adam Stacoviak:** Okay, that's the hard question here.

**Jordan Harband:** Certainly I think part of it is the kind of -- the skills that it takes to be a good engineer are very different than the skills it takes to be a good manager, and they're very different from the skills that it takes to be a good influencer or promoter. There's overlap, but they're all distinct skill sets.

**Jerod Santo:** Yeah.

**Jordan Harband:** And some people have the skillset to go and make a Twitch stream every day, or write blogs periodically, or tweet the exact right hot takes, and so on... And I don't have zero of that skill, but I just don't have enough of it, I think, to get the audience that I would need to get that visibility.

**Jerod Santo:** Right.

**Jordan Harband:** And I don't know if it's necessarily a good idea for me to assume that that's the only path I can follow. But I certainly haven't dived deep and tried to become an influencer in that way.

**Adam Stacoviak:** I don't know if this is our doing, Jerod, but we've just had the maintainer and creator of Asciinema on the podcast.

**Jordan Harband:** Awesome.

**Adam Stacoviak:** And one thing we kind of like did heavy-handedly, at least I did, and I think you agreed, because you didn't --

**Jerod Santo:** I agreed that it was heavy-handed, or...?

**Adam Stacoviak:** You didn't be like "Dude, don't do that." I was like "Hey, Changelog audience, let's make his dream to work on Asciinema more full-time a reality." And he has a GitHub Sponsors page, and we linked to that... That's the only conduit for which he's taking money from the community to say "Hey, you support me in this effort to do this thing. And you see the big picture, but it's gonna take time to get there."

**Jordan Harband:** Yeah.

**Adam Stacoviak:** We added two. If the number uptick is our doing, we added two. From seven, to nine.

**Jordan Harband:** That's great.

**Adam Stacoviak:** Is that great?

**Jordan Harband:** Well, it's great in relative terms... So it's sort of like if you have someone starving, and you give them a tiny piece of bread, it's great for them. It's not enough, it's not sufficient... It shouldn't be great, but it still is.

**Adam Stacoviak:** It's the right direction.

**Jordan Harband:** Yes, it's the right direction.

**Adam Stacoviak:** It didn't go from seven to five.

**Jordan Harband:** Right.

**Adam Stacoviak:** They weren't like "We're taking it back because of what you said", you know...?

**Jordan Harband:** And seven to nine - that is great. It's just nowhere near sufficient.

**Jerod Santo:** Yeah, exactly.

**Jordan Harband:** So if I happen to get a new sponsor from this conversation, that's awesome. It's just, it's not one new sponsor that's going to move the needle. But if enough people do it, it will matter.

**Adam Stacoviak:** I think that the folks that should be paying you probably are profitable corporations, that leverage the dependencies for which you are a transitive dependency of.

**Jordan Harband:** \[01:18:01.29\] Absolutely. Yeah. I agree.

**Adam Stacoviak:** It's not truly the listeners, but the listeners that have influence at the places they operate at, and have you as a dependency in their graph. And that's what I think our request is, is examine that; be aware of it. Because if not, what will happen to you -- if this doesn't change in the next year, or whatever timeframe... How does that change how you operate open source?

**Jordan Harband:** Yeah. I mean, before I get to your question, I think when somebody sponsors me, or they ask "Hey, can I sponsor you?" I'm always appreciative. I say "Yes, of course. Thank you. It really means a lot." It's validation for me. Even if it's $1, it's still that somebody cares enough to vote with their wallet.

**Adam Stacoviak:** Right. Feedback.

**Jordan Harband:** That matters. However, if you really want to help, go tell your employer. Because once you get a company starting to put money into these sorts of things, the incremental difference to putting more money in is so small, but it's like that first -- getting through all the boilerplate of getting the finances approved, and getting the money pipeline hooked up, that's a pain in the butt. But once you've got that hooked up, you can add more money, you can pay different people... Like, it becomes a much more permanent thing. So that's what I'd like to see.

And then -- so your question is, if this doesn't change fast enough, what will happen? Well, I'm gonna have to keep getting jobs that aren't full-time open source, and keep trying to squeeze it in... And as a result, some of the things I really want to or need to work on, are going to keep falling by the wayside.

I mean, there are specific tasks, large tasks that I have wanted to do for years, and have not had the time to do it. I'm the maintainer of Enzyme, and we don't support React 17 or 18 yet, because I've been the only maintainer on it for seven years, and I haven't had time to set aside a whole month or two to do it. But I've had 100 employees of companies post on the repo, saying "This is blocking us. We're gonna have to spend a whole developer month to migrate our test suite to RTL", or something. It's like, "Well, have your developers help me fix it." And not one company has actually put money or time towards this problem. It could have been solved four years ago, but it's still not solved. I can justify taking a few hours or a day to work on something. I cannot set aside all income for a month. That's just not realistic.

**Jerod Santo:** That's a nonstarter.

**Adam Stacoviak:** That's uncalled for. Will you quit? Will you ever break?

**Jordan Harband:** I hope not.

**Jerod Santo:** \[laughs\]

**Jordan Harband:** I haven't yet.

**Jerod Santo:** How long have you been doing it?

**Jordan Harband:** I mean, I have an unbroken GitHub streak dating back to 2014...

**Adam Stacoviak:** What does that mean? Lay it out.

**Jordan Harband:** I've committed and/or reviewed code and/or emerged code every day since 2014.

**Adam Stacoviak:** That's an amazing --

**Jordan Harband:** It's a long time. Yeah.

**Jerod Santo:** Are you sure you don't have a robot doing it for you?

**Adam Stacoviak:** Gosh...

**Jerod Santo:** \[laugh\]

**Jordan Harband:** I mean, it's a system that's incredibly easy to game and cheat. So for me it's more of like a meditative thing...

**Jerod Santo:** It's a personal thing. Yeah.

**Jordan Harband:** ...where it's like, some days I do a lot, but most days I'm just kind of checking in, I do a few updates, I triage some things, I move on. And it's the way I kind of myself regular.

**Jerod Santo:** Very regular. 2014, man... You're coming up on a decade.

**Jordan Harband:** Yeah, it's a ways. A couple years back GitHub made these 3D prints of your contribution graph for a specific year, and they mailed it out to select maintainers... And I went ahead and went on the site, that's like skyline.github.com or something, and you can download them for any year. And so I have a whole \[unintelligible 01:21:27.06\] now of my entire streak that's on my desk.

**Adam Stacoviak:** That's cool.

**Jordan Harband:** It looks really cool.

**Jerod Santo:** Send us a picture of that. I want to see -- we'll include that in the show.

**Jordan Harband:** Absolutely.

**Jerod Santo:** That's spectacular.

**Adam Stacoviak:** That is cool.

**Jerod Santo:** So thanks.dev is cool, because they're actually -- tell us what they do. They generate where you send your money to based on your dependency tree?

**Jordan Harband:** Yeah, so both Tidelift and thanks.dev. You give them your lockfile, your manifest, and then they figure out your entire dependency graph, and then you just put money in and then they distribute it out. And thanks.dev gives you some granular control about like how deep you can go, which probably appeals to some, but actually hurts me, because I'm towards the bottom of that graph... But nonetheless, it's good to have more competition out there, more sites trying to get maintainers paid.

**Jerod Santo:** \[01:22:16.25\] Yeah.

**Adam Stacoviak:** But what do you know about their algorithm?

**Jordan Harband:** Not much.

**Adam Stacoviak:** You said earlier that you're in -- rephrase it for me. Something like you're in all software, or a large majority of software out there...

**Jordan Harband:** I am in most, I think, JavaScript applications, even a little bit. Like, if you go and type \[unintelligible 01:22:32.17\] in almost any JavaScript application, my name will be in there. Not everyone. And it might be in there for one package, it might be in there for 50, but it's in there somewhere. And it might be an inconsequential piece, right? Like, I'm not trying to claim that I am an irreplaceable part of most Javascript -- or of even any JavaScript applications, right? It's just that I happen to be in there.

**Adam Stacoviak:** Yeah.

**Jordan Harband:** Something I've done has made life easier for somebody along the way.

**Jerod Santo:** He's contributed.

**Jordan Harband:** Yeah.

**Adam Stacoviak:** Have they spoken at all, Tidelift, about the way they distribute those funds, how they weight it?

**Jordan Harband:** I don't know if they talked about the specific algorithm and how they weight it, but I'm sure they -- I mean, they've been doing it for a long time, and they have their Upstream conference... Last couple years, I was part of their keynote; this year, actually... Talking about how I took over packages when a former Npm author, a prolific author decided to kind of delete his GitHub and quit the ecosystem...

**Jerod Santo:** I recall, yes.

**Jordan Harband:** ...and so I was able to take over a dozen or so of his very highly dependent packages. So I think that -- so the specifics, I don't know. And I think they tweak it, right? I've seen the amounts change over time. I think that the goal -- like, Tidelift has a more kind of enterprise-focused goal, which is like, you depend on these things, and you need them to have a certain amount of security, and responsiveness, and so on. So in turn for maintainers doing those tasks, they get a portion of the money.

Thanks.dev - I don't have to do anything to get it. So that's more of like a patronage/gratitude-based model. And so in that regard, you can support more maintainers. Because they don't have to do anything to do it, but you're not necessarily getting as much out of it as you would through Tidelift. So it kind of depends on your preferred approach... And if I'm talking to a company who's in a generous state of mind, I would encourage them to do both.

**Jerod Santo:** Have you considered sponsorware?

**Jordan Harband:** I mean, I've thought about it every time I've seen authors try it... I mean, I remember -- like, I grew up in the late '80s, early '90s, where shareware was a big thing, where you'd get all these games, and you could use them for free, but they'd kind of bug you and be like "Hey, if you send us five bucks, we can turn off this annoying warning."

**Jerod Santo:** Sure.

**Jordan Harband:** And I appreciated the spirit of it. It let me try out the software, but... I didn't have any money as a kid, so I just ignored the warning the whole time. And very rarely did I end up, when I had the money, get to the point where I was like "Sure I'll pay for this." It just kind of didn't -- because I kind of think of it as free. So I don't know, there is some solution out there, hopefully, to --

**Jerod Santo:** The nice thing about sponsorware specifically is that -- I'm thinking specifically your example of Enzyme, and all these engineers want this feature, this upgrade, or whatever, call it what it is; this bit of code to be written. And they work for companies, like you said, who could definitely afford, right?

**Jordan Harband:** Yeah.

**Jerod Santo:** And so you developed that in a closed source environment, but available to all your sponsors. And so if they're a sponsor, they're already in on it. And then you set a threshold, "If I get to this many sponsors, it goes out to everyone." And so they can get their early access, they can afford it; it's not a kid who wants to play with a toy. It's a well-funded company; they can get access now. Obviously, this does require you to invest, because you've got to build it first, but...

**Jordan Harband:** I think it's a chicken and egg thing.

**Jerod Santo:** ...there is money at the end of the -- if it's a desirable thing, there's money at the end. And because it's a sponsorship, it raises your baseline, right? Because now they're a monthly sponsor.

**Jordan Harband:** \[01:25:52.26\] I think that that would work really well if I had the sort of direct software, like Babel, ESLint, WebPack. I don't think it would work as well for my transitive packages, which are a majority of them. But I think also, even if it's something like Enzyme, I think that in order to spend the time to make something that would be compelling enough to want people to pay for early access to, I'd need to be able to pay for my time. And so that's the chicken and egg thing, where if I had some companies show up and be like "We will pay you money for this early adapter, but you have to keep it exclusive for us for six months, or something", then I would do it, because it would get it done faster than no money. But I'm not going to just do it and then like dangle it like a carrot; that feels like it violates the ethos of open source to me a bit.

**Adam Stacoviak:** I can see that...

**Jordan Harband:** And that's part of the challenge, because the philosophy of open source and the reality of capitalism are contradictory. But somehow we have to mesh them, because of the world we're in.

**Adam Stacoviak:** Right. How -- these issues, I'm assuming, with Enzyme...

**Jordan Harband:** Yeah.

**Adam Stacoviak:** People saying "Hey, can I upgrade this and that?" Have you reached out to that company? Not just those developers, but like done some proactive outreach to criers, the squeaky wheels that want, but can't have...

**Jordan Harband:** I have, actually.

**Adam Stacoviak:** ...because you haven't built it yet.

**Jordan Harband:** I've had conversations with three or four companies... I even had a conversation with one or two very large, big alphabet letter companies, and it's just never materialized. I had a company who I met with the manager and some of their engineers, and we talked about what it would take, and they decided that it would take about the same amount of time to migrate to RTL, and so they just did that instead. And -- I mean, that's their decision to make. But if it was the same amount of time, they could have done it, not had to change their test code, and benefited everyone. And sponsorware-esque, I guess, I would have been happy to slap companies' names on there. I'm happy to show appreciation and help market somebody that's helped me do something good. But it just never worked out.

**Jerod Santo:** Yeah, we may be thinking about sponsorware slightly differently. So this is a model wherein --

**Jordan Harband:** You're talking about like withholding a change...

**Jerod Santo:** Yes. Providing that not for them to advertise, but for them to be -- it's like early access, but then when you reach a certain threshold of sponsors overall, you're just gonna put it out to everybody, no matter what. So it's kind of like a little bit of a middle ground...

**Jordan Harband:** Totally.

**Jerod Santo:** And it works well, at least for a few people, but they tend to have more product-oriented open source. So definitely not for your transit dependencies. I thought maybe with Enzyme, it would be a situation where if you have 100 engineers like "Hey, we want this", it's like "Well, that's worth money to somebody."

**Jordan Harband:** And I think it would be. I think Enzyme would be a good fit for that model. It's just that unless I have the work complete...

**Jerod Santo:** No, I get it. You'd have to invest.

**Jordan Harband:** Yeah.

**Jerod Santo:** Which is not the easiest -- you can't always do that.

**Jordan Harband:** Exactly.

**Jerod Santo:** Yeah, totally.

**Jordan Harband:** But I appreciate the creativity. I mean, you've gotta consider all options.

**Jerod Santo:** It's an interesting idea, a way of going about it. Not all of your projects are going to be funded necessarily. You look at an artist, or a musician, or a film, certain -- you have one hit, and that powers the rest of your things. So maybe you have one project that's letting you work on the other ones.

**Adam Stacoviak:** Can you lay out your open source income streams?

**Jordan Harband:** Like what they are?

**Adam Stacoviak:** GitHub Sponsors, Open Collective... How do you structure it? How does it come into your pocket --

**Jordan Harband:** Yeah, so I have a GitHub Sponsor for my personal account, I have one for -- and then I have an Open Collective for two of the GitHub orgs that I also have hooked up through GitHub Sponsors, through that Open Collective. I'm on thanks.dev, I'm on Tidelift, I'm on stackaid.us... I think that's it. But I'm pretty much willing to sign up for anything that might bring money. It's just anything that requires a heavy marketing effort from me is something that has to pay out in turn, and very few of the things have. I would say Tidelift and GitHub Sponsors and Open Collective and Thanks.dev, in that order, have been the most lucrative for me.

**Adam Stacoviak:** \[01:30:07.22\] Tidelift first, huh?

**Jordan Harband:** Yes, by a large margin.

**Adam Stacoviak:** Okay. That's good. Good for you. I like their model of the dependencies of the dependencies... Because all too often do you have a great, as you mentioned, influencer... I'm not saying that these people have been, but Shawn, WebPack, etc. these things have been -- they've been great at promoting the project and getting the awareness, but they're also sitting on top of the other shoulders, of other folks, that - it's not filtering, too.

**Jordan Harband:** And there's not enough money even coming into WebPack, let's say, for WebPack to compensate its own developers, and also to significantly compensate its entire dep graph. If there was, I would hope that they would do it. But there just isn't. And I know that that's the case for Babel. Babel has barely enough.

**Adam Stacoviak:** And you can't expect them too, either.

**Jordan Harband:** Exactly.

**Adam Stacoviak:** I mean, you're all sort of waiting for the same customer, basically, in a way.

**Jordan Harband:** Exactly. Yeah.

**Adam Stacoviak:** What a problem.

**Jerod Santo:** It's a hard problem to solve.

**Adam Stacoviak:** Wow.

**Jordan Harband:** Yeah.

**Jerod Santo:** Well, I'm happy to hear that 20-year-old single Jordan could at least do this...

**Jordan Harband:** Yeah, it's encouraging.

**Jerod Santo:** That's actually better than most people are doing. But a lot of us are out there getting our eight bucks a month from our sponsors, and that's it.

**Jordan Harband:** Exactly right. But it is worth noting that it takes such an outsized level of reach to get to that point, where I could have a roommate in a studio apartment and cover my food and my drinks for the week. It's better than most, and I'm grateful for it, but it's still not anywhere close to sufficient. We need to be in a world where somebody providing public value, a public good, is able to live their life without disruption. And that's not where we are right now.

**Adam Stacoviak:** Yeah. What would you change about Tidelift, about GitHub Sponsors? Because it's all about distribution and awareness, and you're only one person. They have a company, in both cases, profit in both cases... I assume Tidelift profits. They have marketing, they probably have marketing dollars they spend, they do upstream, they do a lot of outreach... What would you change about, I guess any of the things you use, to make it better for you and for others?

**Jordan Harband:** Honestly, I think it's just a pipeline problem. What I would change, if I had a little regulatory magic wand, is I would make the US and the EU require that profitable companies - only profitable ones - donate or contribute let's say 1% of their profit to their open source infrastructure, period. And you can do that with time or with money; you can sponsor conferences, and that counts... It'd be very liberally interpreted. If something like that were to happen, companies would just do it all over the world, because it's simpler than trying to separate out the money. And on top of that, there would be so much money that companies like Tidelift and Thanks.dev and so on would already be there to fill the gap and like provide that accountability - the government would require a form or something - and can help filter the money to the right folks. I think that would just solve this problem.

**Adam Stacoviak:** \[01:33:08.12\] Okay.

**Jordan Harband:** Because like I said, capitalism - we have capital and regulation, and unless we can -- I can't come up with a big enough capital incentive that's convincing enough, but regulation could do it.

**Adam Stacoviak:** Profitable companies.

**Jordan Harband:** Yeah. So if your company doesn't make any money, you're good. As soon as you start making money, for every dollar you make, a penny has to go towards open source stuff.

**Adam Stacoviak:** There's a lot of very well known, well used, a lot of value even created by the company that doesn't make money. They lose money.

**Jordan Harband:** Absolutely.

**Jerod Santo:** On purpose.

**Jordan Harband:** And you could argue that they might even make money off of that. Great. 1% of that could also go...

**Adam Stacoviak:** Sure.

**Jordan Harband:** I'm not precluding them making money if they've made open source.

**Adam Stacoviak:** Regulation is challenging. I see where you're going with that. I think regulation means --

**Jordan Harband:** Yeah. I flexed that magic wand.

**Adam Stacoviak:** Yeah, I know you did. I'm hypotheticaling this a little bit. You might get into a world where it's like "Well, we don't want to be profitable" or "We're not profitable."

**Jordan Harband:** We're already in that world. That's what companies do to try and ditch taxes.

**Adam Stacoviak:** Yeah, exactly. It's like a loophole of sorts.

**Jordan Harband:** That's why HBO shelves shows and writes them off, right?

**Jerod Santo:** Ah, I know. Isn't that the worst? Like, completely finished movies, literally just --

**Adam Stacoviak:** Not released.

**Jerod Santo:** They could just release that on BitTorrent for the world to have today.

**Jordan Harband:** Totally.

**Adam Stacoviak:** It makes no sense.

**Jerod Santo:** They deep-six it.

**Jordan Harband:** Yeah.

**Adam Stacoviak:** And that's your only change? Regulation?

**Jordan Harband:** I mean, obviously, I would make many changes in the world if I had that kind of power... But I think that as it relates specifically to the funding of open source, I think that one change would be the most impactful.

**Adam Stacoviak:** Could GitHub or Tidelift do more? ...I guess that's my sub-question.

**Jordan Harband:** Always.

**Adam Stacoviak:** What could they do more off?

**Jordan Harband:** Well, I think Tidelift, all they need to do is get more subscribers, and that's --

**Adam Stacoviak:** Come on, Tidelift.

**Jordan Harband:** ...a human problem, a sales challenge. GitHub is in a position where they can do a lot more, but Microsoft would have to be willing to pump a lot more money into it post acquisition than they seem to have been doing lately. For example, I don't think GitHub Sponsors is really staffed right now inside GitHub...

**Adam Stacoviak:** There's at least one person...

**Jordan Harband:** I think they might have one person.

**Adam Stacoviak:** We talked to her.

**Jerod Santo:** We talked to her in Vancouver. They were looking for people.

**Jordan Harband:** There should be more than -- there should be like a team of 20 people on that product, and I don't think there is. So a lot of things at GitHub seem to be understaffed at the moment.

**Jerod Santo:** How about Npm? How is NPM looking?

**Jordan Harband:** From my external view it seems wildly understaffed as well.

**Jerod Santo:** That's what I would also agree with.

**Jordan Harband:** A lot of things they need to fix, and the people working there, who are doing great work, are very overworked.

**Adam Stacoviak:** What a world, man...

**Jordan Harband:** I know.

**Adam Stacoviak:** Stop talking. I don't want to hear any more of this stuff. You're starting to scare me.

**Jerod Santo:** Alright, well, let's shill your links now. GitHub Sponsors - how do they hit you up? What do we do? Github.com slash what?

**Jordan Harband:** Ljharb. I'm that on everything.

**Jerod Santo:** Ljharb. If you use JavaScript, you probably use his code. If you are in an organization that profits from that JavaScript, maybe throw him a bone.

**Jordan Harband:** That's right. Type npmfund into your Node codebase, join Tidelift, throw some money at thanks.dev... I mean, just pick one or more ways and try and get your company to contribute. Certainly do so yourself if you can, but it's much more impactful to take your employer's money than yours.

**Adam Stacoviak:** For sure. Thanks, man.

**Jerod Santo:** Yeah, I appreciate it.

**Jordan Harband:** Thanks for having me.
