**Gerhard Lazu:** David, welcome to Ship It! You're back!

**David Flanagan:** I am. I'm very happy to be back. I love your show, I love talking to you... So yes, thank you for inviting me back again.

**Gerhard Lazu:** Do you like just talking on Ship It, or do you also like listening to Ship It? That's something very interesting for me personally.

**David Flanagan:** Yeah, I actually have the Changelog Master feed on my Overcast app, and I listen to pretty much everything. I think all the content is great. I listen to Ship It, I listen to JS Party, Go Time... The whole shebang.

**Gerhard Lazu:** Okay. Last memorable episode that you listened to from the whole Changelog network? Which one was it?

**David Flanagan:** That's a tough question...

**Gerhard Lazu:** The one that you enjoyed the most then.

**David Flanagan:** I'm not sure. I've got conference fog on my brain, so nothing is even popping into my mind.

**Gerhard Lazu:** Right. Okay. I forgot about that, actually. You're right. See, that was very incosiderate of me. So you've been enjoying yourself for a few days in Hamburg at the Container Days. That was September 5th and 7th. And conference fog... How can I forget? How many conversations did you have at this conference?

**David Flanagan:** I have lost track. There were two pretty packed days. We were just constantly having conversations... There's a lot of people here. I think Containers Days - it must be around 600. It could be more, it could be less, but it feels like it's a hundred person conference, and it's just been great session after great session. So there's been a lot of conversations, a lot of Kubernetes, a lot of containers, and of course, I do a lot of content in that ecosystem, so people like to come up and say hello, and talk about Klustered, and Pulumi, and stuff like that. So I've had probably north of 100 conversations, and it's been great; it's just great to get feedback from people, and see what they're doing as well, because that's stuff that I can take and apply to our Pulumi product roadmap, but also what I'm doing with YouTube, I'm trying to produce more content to answer more of these questions. So it has been \[unintelligible 00:03:55.23\] but that is always enjoyable.

**Gerhard Lazu:** \[04:01\] Yeah. Wow, that is a pro right there... Like, my last one was 50, and that felt too much. If you can push 100 - oh, my goodness me. Okay... Like, you don't remember what you had for breakfast yesterday morning, or even this morning, nevermind which is your last favorite Changelog episode. So sorry about that, that was very inconsiderate of me... \[laughs\] Exactly. Well, it's just beer, right? Maybe... I don't know... It's Hamburg... \[laughs\] What did you have for breakfast, by the way?

**David Flanagan:** I haven't had breakfast, to be honest... I'm not a breakfast-eater. I just wait for lunch. I don't know why. I'm just always going through the habit of just getting up, having -- I drink four coffees in the morning, and that'll do me. Then I'll have something at lunch.

**Gerhard Lazu:** I see. There's more choice for lunch, I'm sure. Better choices as well.

**David Flanagan:** Yeah. Well, I'm in Hamburg, and there's a lot of Kebab shops, and the people that I've been meeting have been telling about their favorite kebab shops, and what I should order, so I felt a duty to go and sample the local Kebab... And it's been nice. And the local beers, of course.

**Gerhard Lazu:** Very important. Very important. So going back to the conference, and the sessions... Did you speak, by any chance?

**David Flanagan:** I did not speak. I'm here to do a workshop, which is a few hours from now. I think that's why I was able to have so many conversations. I didn't have to go and hide in a corner and focus on my content and my talk and be prepared. I was able just to kind of navigate, chat... I even went through all the sponsor booths, just talking to people and being like "Hey, tell me what you're up to." And of course, talking to the people that were giving talks, and trying to ask questions... And it just leads to lots of conversations. And I wouldn't have been able to do that if I was giving a talk as well. So that's been quite a perk to this event; I didn't have that pressure, I didn't have to isolate and focus and prepare. Although, of course, I have a workshop now, and instead of preparing, I'm sitting here, talking to you. But it'll be fine, it'll be fine.

**Gerhard Lazu:** You're relaxing, okay? You're relaxing, you're taking your mind off it... So that when you go there, it'll just go nice and smooth, because you're not stressing about it.

**David Flanagan:** Yeah. When it comes to Kubernetes, I don't think I get stressed anymore... Especially for this workshop, where I've already broken the six clusters, and I'm just giving them to people and I'm trying to help them learn about the deepest, darkest parts of Kubernetes, and trying to take them through that journey. I know this content so well... I'll be good.

**Gerhard Lazu:** So this episode is coming out after your workshop, so I think it's safe to talk about all the ways in which the clusters are broken, so we're not helping anyone by talking about this. This episode will come out, I think, end of September, so a few weeks from today. So can you tell us more about the workshop? Like, what do you have prepared for people?

**David Flanagan:** See, now I'm gonna have to check my notes... So there are six broken clusters. And I've done things differently this time as well. Normally, what I would do with these workshops is I would try and have them run a many-kube cluster locally, and then I'd give them like a magical URL that applies all the breaks to the clusters over our local machine. What I've found delivering that at conferences is you are 100% at the mercy of the Wi-Fi at the venue... And that sometimes works, and it sometimes doesn't. But with a lot of these images coming from Docker Hub, which now has rather strict rate limiting based on the IP address, when you're got 30 or 40 people pulling down the same images in quick succession multiple times, it doesn't work. So for this Klustered workshop I'm actually working with Instruct.com. Do you know Instruct?

**Gerhard Lazu:** No, I don't.

**David Flanagan:** Okay, that's alright. Instruct.com is like an online learning platform. Basically, you write some scripts and some YAML files, and people can go to a web page, and it spins up the environment for them, and they get a terminal, and they get a browser tab that they have, and all those kinds of things. So it allows me to completely automate the entire provisioning of the cluster... And then all the people in the workshop are gonna have to do is come along, and go to the URL, and they get the cluster, and they can just start debugging right away, and then the only Wi-Fi I really need is for them to do a very simple, web-based SSH connection to the machine.

\[08:16\] So I'm hoping it's gonna work much, much better; this is the first time we're doing it, but I'm quite excited. I've got six broken clusters, and I've made some of them beginner-friendly. I'm gonna kind of guide them through... But there are a couple of particularly meme ones as well...

**Gerhard Lazu:** Okay... So it goes everything from very easy to impossible, maybe impossible to solve.

**David Flanagan:** I hope not impossible to solve. I hope I've not pushed it that much. But I do require people to have -- you know, it's not just Kubernetes knowledge that you need on Klustered. You need a very strong foundational Linux knowledge as well, because these are kubeadm clusters. Misconfiguration on the Linux host can lead to see these problems in your Kubernetes cluster, and I wanna be able to expose that.

Some of the breaks also target the control plane, so they're not even gonna be able to run kubectl commands, which means they're gonna have to get into "Alright, how does that Kubernetes cluster even work?"

A lot of people don't know that when you run kubeadm everything is running in a container via something called a mirror pod, or a static manifest that delivers the mirror pod. So they might just be like "Um, this is hard", but they will learn an awful lot. And I'm gonna guide them through as well; I'm not just gonna give them the clusters and say "Good luck!", because that would be harsh. But it's nice, yeah.

**Gerhard Lazu:** I'm suspecting that this is your way of checking how much attention have people been paying to your Klustered series. And if people have been watching them, they'll breeze through this... Is that it?

**David Flanagan:** Yes. There's no new breaks. These are all breaks on previous episodes, so if people have been attentive and paying attention, they will know. But one of the things that I always find very interesting about Klustered is we're 43(ish) episodes in now, and we have had repeat breaks, of course, because the people that joined me on Klustered haven't watched all the clusters. They've maybe seen one or two to get an idea of the format... And so repeat breaks are inevitable. But what I find fascinating is that they're all debugged in very different ways, depending on the experience of the person that's on fixer side of it. Some people naturally pick up control plane issues, and Linux, and they're good with that, but then when it gets to the Kubernetes API, they fall down, and then other people the inverse of that. So it could be the simplest break in the world... And "simple" in quotes, because obviously nothing is simple unless you know it... But it's all down to serendipity as well. There's a lot of luck, and do you see the right error message? Because I'm talking about conference fog in my brain, right? I can't tell you what I've ate or anything for the last two days. But when you stick a camera in someone's face and give them a broken Kubernetes cluster, there's just a life fog. Like, you can forget everything that you've ever thought you've known, because -- you know, it's hopefully not scary, but there is a sense of pressure, and that kind of pressure can cause you to forget even the simplest things.

So I love repeat breaks, because I love to see how people approach them, and how they are different from what they've seen in the past. I always tell people, it doesn't matter if you repeat a break and we've seen it 1,200 times, because the fixing is what is important. The knowledge and the experience of the people on the other side of it that we wanna transfer to the audience, not necessarily "How did I break Kubernetes?" Because sure, people can take that away if they want. But it's the debugging, that understanding Kubernetes that we wanna share.

**Gerhard Lazu:** That is a good one. I think I've mentioned this to you before we started recording, but I'm going to mention this now for everyone else listening... This episode was suggested by Andrew Welker. He suggested we talked about Klustered, and Rawkode, and a couple of other things... So I can see the appeal of Klustered beyond just Kubernetes, because people are learning about different ways of solving tough problems, that may be simple to some, because they know the solution, and really difficult to others, that they wouldn't even know where to start.

\[12:15\] So I really like that appeal that there's way more than one way, and the person's personality shows through. And the person's experience, and how they think... So I can see the appeal to that. But I'm wondering, where did the idea behind Klustered come from? And before that, maybe we should answer what is Klustered. Let's start with that - what is Klustered, and where did the idea come from?

**David Flanagan:** Yes. So Klustered is the show that I have on my YouTube channel, so the Rawkode Academy... And the idea is that I provision some bare metal clusters and I give them for people to break. Now, there's a couple of rules... There used to be a couple of rules, but there's now a couple of rules. You have to make sure the cluster can be fixed. Obviously, we don't want you just to give people the burnt out rims of a car and say "Good luck, drive home." We want them to be able to try and actually get the application working. And the goal is really, really trivial. All you have to do is take a pod, which is running in the default namespace, and update the image from v1 to v2. That's all you have to do. It's very simple. However, you're not always given a working Kubernetes cluster with a working API server, and there's a lot of things in Kubernetes. The API surface of Kubernetes is huge. So if you want to find ways to stop that pod being scheduled, or running, or passing probes, there's many, many ways that you can break that.

So we give them the challenge... We get people to break it, and people fix it with me live on the YouTube channel. So that's what Klustered does. Now, the idea - wow, it was a long time ago... During Covid, when I was starting to focus on my YouTube channel, I was talking to people at virtual events, using all of these online platforms - Slack, and Discord, and Twitter... And I've seen that there's a lot of really beginner-friendly content on Kubernetes, like how to deploy your first pod, how to do auto-scaling... But from the operational standpoint, the people were always looking for more resources on how to their CKA, the Certified Kubernetes Administrator training from the Cloud-Native Foundation. And I thought "Well, I've done that test, and I know the format of it..." You know, you actually get broken clusters, and you pass the test if you're able to kind of get them working. And they give you some pseudo production-like outages like renewing certificates, and some other stuff. Maybe doing an upgrade of a cluster from one person to another.

And I always thought that there's a lot more to operating Kubernetes. And I've always worked with bare metal; I've worked for companies that have done Kubernetes for the last six years, always in a bare metal environment. I've never been able to take advantage of managed Kubernetes clusters. I've always just learned that stuff the hard way. When we had outages, I had to go and debug it and fix it. And I thought, "I wonder if I could fix a broken cluster if I gave it to somebody." And I was talking to Walid Shaari, who also does a lot of content via GitHub repositories on passing your CKA. And I said to Walid, "Would you join me on a stream and we're gonna fix some broken Kubernetes clusters to try and show people how to pass the CKA?" And he agreed, slowly, but we had a lot of fun. We passed out the clusters to people in the community, they broke it, and that format lasted for a little while. We have changed it since then.

So that's kind of how it started... It was just a random idea about producing CKA material, I managed to talk someone else into it, and we took it from there. The format has changed... What I've found was the original format I'd get two people to break it, and one person joins me and we fix it as a team. But it's very hard to get people to come on and fix a broken cluster, because again, there's pressure, and it's stressful, and they don't want to look silly, even though I try to encourage people that there is no looking silly. We google stuff all the time.

\[16:13\] That's one of the other secret lessons from Klustered that I love, is that we wanna help set better norms in our industry. I feel like we have this kind of hero culture in technology, where we celebrate the people that know everything... But really, we all spend a large chunk of our day just going "I don't know, I'm going to go find the answer." And I think experience is how quickly we find that answer. And I want people to share that on the streams. Like, don't secretly google off-camera to find an answer. Just say "I actually don't know, and this is how I will find the answer", whether that's Google, or Stack Overflow, or Kubernetes docs. Let's show people that, because that's really valuable information. We wanna show people how to get answers to questions that they don't know the answers for. So yeah, really cool lessons from Klustered.

**Break:** \[17:01\]

**Gerhard Lazu:** So one thing which I wasn't expecting Klustered to be in the beginning - and maybe this was part of the changes that the series went through - was how much of a group effort it is. People are encouraged to talk to one another, right? Like, heckle one another, have fun, and that's what I think most people are missing. It's not about the problem, it's about coming together, solving problems that are maybe hard on the surface, but if you approach it in a certain way, if you get others involved, they can not only be easy, but also fun. And that is the one thing which I really enjoyed, like "Hey, this is fun. It's supposed to be fun, it is fun, dang it, and it will be fun." So that is my take-away...

And I think one of the last episodes was like the community vs. Rawkode. I wasn't expecting that... Like, "Hey, the community vs. what?! Now way..." So tell us a little bit about that episode.

**David Flanagan:** Yeah. But before I go into that, I'll tackle the first thing you said there... Yeah, it's supposed to be fun. It's the first thing I tell people before we go live. It feels competitive, but it's not competitive. You know, feel free to taunt each other in the chat, and leave little tips, and have some fun with it. But it's certainly not competitive; our single mission on Klustered is just to share how we debug clusters. So yeah, I'm glad that it comes across as fun; it definitely is fun.

And the audience is always super-engaged.

\[20:04\] The other thing I tell people is pay attention to that chat, because again, you've got a camera in your face and you're staring at a broken cluster - you're not gonna see the typos. It's just not gonna happen. Your brain is too busy trying to work out what is going on, and you're gonna miss the simple things. And the chat is great for that. The chat have always got their eye on the ball; they see stuff that not even I see when we're looking at broken clusters.

So it's very collaborative, and yeah, I love the way that we all kind of pull together. We're all rooting for each other in Klustered. Nobody wants anyone to feel horrendously. We want people to succeed, but we want to have some fun in the process.

Now, the community episode - it's definitely something we're gonna do more of. Like I said, it's hard to find people that are gonna come on Klustered, because a) we just don't have a lot of people that have been operating Kubernetes for a long time. It's 6-7 years old, but the majority of people are still new to Kubernetes. We're still seeing adoption of Kubernetes. We're not in that stage where everyone has been doing it for a long time.

And it's scary... So I was looking for ways where - while I still want to produce content so people can keep learning stuff, but I needed to find a way to do it that doesn't rely on me finding two teams every single week, or two individuals to join me. So we have done in the past, which was Rawkode vs. the community, which is where I just provision six clusters and literally put the kubeconfig online, and said "Anyone that wants to go and smash this thing up, go for it", and I had no idea what they were gonna do... Possibly the worst episode I've ever done, just for my own mental health, but definitely fun in the process... Because it was scary. I was the one that had to try and fix these things. And I thought, "Why don't we turn the tables here?"

We have the technology where I can break the clusters, and I can invite anybody on to fix it. Unfortunately, I use Teleport for access to all of our clusters, with GitHub authentication... So literally, I was able to go live on a stream and say "Post your GitHub handle in the chat and I'll add you to the cluster." And people were able to join the session, and it has like a pairing capability, so I could join to see what they're typing, and show that on the stream... And I just had two people to dial in. And I had a good number of people that were interested. I think we had eight people join in total, and they've worked their way through a couple of the clusters.

So it's an interesting dynamic. I like that I was able to kind of flip that around and challenge people to come on... So yeah, it was good fun.

**Gerhard Lazu:** Who won, the community or Rawkode?

**David Flanagan:** Rawkode won...

**Gerhard Lazu:** Always.

**David Flanagan:** That last cluster was super, super-difficult... I was very mean, and I'm never using this break again... But also, I wanted to share something. With Kubernetes authentication we have something called the authentication credential helper. This is for cloud providers like AWS, and Google, and Azure, where they're using OpenID Connect and it has to have a separate process outside of kubectl that speaks to that service, that identifies them and comes back. However, there's no restrictions on what that credential helper does, or what it is, so I compiled my own credential helper, which I conveniently called "metal auth helper". And what it did was return the valid credentials, but it also spun off a background job that went and destroyed the cluster every time they executed kubectl.

**Gerhard Lazu:** \[laughs\]

**David Flanagan:** So essentially, I did my own code execution through the authentication helper, and people just had no idea where the changes were coming from... So yeah, harsh.

**Gerhard Lazu:** Wow, I think you must have a special brain to be coming up with these things... And I can imagine you in the shower - because you don't have breakfast - thinking "Hm... What am I going to do next...? I know... I'm going to delete the cluster as someone authenticates. Wouldn't that be fun...?" \[laughs\] Alright.

**David Flanagan:** \[23:49\] Well, you know, most of my ideas come when I'm walking my dog. When I switch my brain off and I walk my dog, I always have random ideas for breaks... But I don't think that's the cruelest break we've seen. We had another break, maybe four or five episodes ago, the medal of the year... And that contestant - I can't remember who it was; I feel really back... It'll come back to me. I think it was Josh Anderson from Zapier... He spun up a new cluster on AWS, on his own dime, on his own account, but replicated all the node names and modified the kube config on my cluster to point to his remote cluster. So we spent the first 30 minutes debugging a cluster that wasn't our cluster, and we had no idea.

**Gerhard Lazu:** Wow... \[laughs\] That's crazy. Okay... That's a cool shout-out. Now, talking about cool shout-outs, going back to our listener that suggested this episode, Andrew Welker - he's suggesting that we talk about Unicode in the context of Klustered. And I'm sensing there's a good story there. I missed it... So what is that link between Unicode and Klustered? Do you remember?

**David Flanagan:** Yes... I will never forget...

**Gerhard Lazu:** Okay... \[laughs\]

**David Flanagan:** Remember how I said there were no rules at the start, and now there are rules? So there is a no Unicode rule, for a very, very good reason. I invited one of my friends - he's a platform engineer at Skyscanner in Glasgow. So we actually organized some local Glasgow user groups together at one point. I know him very well. And I thought, "Yeah, you should come on and help us out." He's also the co-lead of SIG Autoscaling on the Kubernetes project. So he knows his Kubernetes. And I saw he was having some cool autoscaling breaks, and we'd see something nice and fun in a cluster. And that episode got to the point - I think we were about 2,5 hours in, and I was visibly exasperated; you could actually see me just getting tired and fed up. I swore a lot...

**Gerhard Lazu:** Which episode is this? Hang on, I have to watch that again. \[laughs\] That sounds great.

**David Flanagan:** Yeah, I'll give you the link for the show notes.

**Gerhard Lazu:** In the show notes. Thank you.

**David Flanagan:** If you search for "klustered Guy Templeton"... It's the one -- I was fixing it with Guinevere Saenger, also from the Kubernetes release team... And at one point I'm just like "Guy, I need to pick up my kids and get them into bed. Can you please tell me what is wrong with this cluster?" And he decided just to give us another hint, rather than telling us directly... He said "Oh, the DNS config is wrong." So I've got an old cluster, and in the current cluster, side by side, toggling between the tabs, looking at the same core DNS config fail, and there's no change. I'm like, "Are you lying to me, Guy? This is the same." And he turned around and he said "There's a few pixels different."

**Gerhard Lazu:** \[laughs\]

**David Flanagan:** And I think at that point I literally uttered the word "You mother--"

**Gerhard Lazu:** Table flip.

**David Flanagan:** And I was like, "Okay... I think I know what this means." And CoreDNS is authoritative for kubernetes.svc.cluster.local. So I start searching in VIM, and it doesn't come up. And, "Oh, that's weird." And it was because the c in cluster wasn't a c. It was a Unicode character that looked like a c. So none of the DNS in our cluster worked, because it was resolving to some random domain, which was not the one that we were trying to speak to from our app to our database server. Ever since then, the first rule of Klustered is "You're not allowed to use Unicode in any context there."

I also have a talk that I gave, called "What I learned fixing 50+ Kubernetes clusters", and I always, always started with the same video clip from that session. It's just basically me swearing for 30 seconds as I jump from scene, to scene, to scene... Just to give people a bit of context about -- I can't explain how frustrating things were getting. It was a long stream, but it was fun. I think it was enjoyable. People reference it because it's funny.

**Gerhard Lazu:** \[28:02\] So while we can't recreate that moment in the context of this episode, in this podcast, I'll make sure to put the link in the show notes, because it'll be fun to watch. So not in your car, not with your kids, but when you have a moment and you want to do something else. Okay, that's a good one. Great story, thank you for sharing.

One last thing... Who won in Chainguard vs. Chainguard?

**David Flanagan:** Chainguard.

**Gerhard Lazu:** Yeah. There was a Klustered episode, "Chainguard vs. Chainguard. Who won?"

**David Flanagan:** Yeah, that episode was serendipity as well. Chainguard were lined up to compete against another team, who unfortunately had to drop out because a couple members got Covid... And I tried not to cancel the episode, and Chainguard had been hiring way out lately. They went from zero people to 50 people in a matter of months... And I was like "Surely you've got enough people for two teams." And they were like, "Okay..." So we managed to get two teams from Chainguard.

That was another great episode as well. It's fun, especially because it brought that dynamic of colleague versus colleague. And I say it's not competitive, but when you're coming up against your teammates, you make it a little bit extra competitive, and I feel like that's a really good one to watch as well.

If I were going to recommend any other episodes, there's always two that I love to mention as well. There was one episode - and again, complete serendipity - with Thomas Stromberg who was an engineer at Google and maintainer for minikube, so really strong Kubernetes knowledge... And Kris Nova, also famous in Kubernetes for their hacking and all the things that they do with Kubernetes clusters.

Kris Nova did some kernel hacking, and eBPF, and recompiling glibc to hide processes... Really crazy stuff. But she was up against Thomas Stromberg, who had also done forensic analysis of intruder detection machines at Google. And he busted out this kit, took a snapshot of the desk and all changes in the last 48 hours, and I don't think anyone else on this planet would have been able to fix that cluster. Thomas did.

I always tell people to go watch that episode, because there is a lot of lessons to be learned from that. I keep meaning to write some of them up in a blog, but time is never on my side... But I always encourage people to go watch that episode.

And another really good, fun one, if you wanna see teams enjoying it and not taking it too seriously, was the RedHat vs Talos Systems. They're now Sidero Labs, but their RedHat team removed the executable bit from `chmod`, and `kubectl`, and `perl, and a whole bunch of other utilities, and the Talos team actually couldn't execute any commands on their machine. And I won't give away the fix on this, because people may be sitting there thinking "How would you fix that?" Either go watch the episode, or google the answer... But again, another episode where it's just light and fun, but you learn a ton in the process of seeing how cruel people can be with these systems.

**Gerhard Lazu:** Yeah, that's a good one. Okay. So speaking about things which are broken and need fixing, should Rawkode.academy, the domain, be working? \[laughs\] That was a facepalm moment right there, for those that are listening...

**David Flanagan:** So I am currently building the Rawkode Academy website, because I wanna make my content more discoverable. So far I've relied purely on just word of mouth and YouTube's algorithm, and people searching for Kubernetes content to find it and I've only recently decided that actually I really want people to be able to google our Kubernetes content and get results, and that means I need a website, and building up SEO... I also wanna do more with the content. I started hiring people to type up show notes, and do editing to dense the format down to small, hopefully viral videos we can share on YouTube. So I'm starting to invest more time and energy into making the content consumable to more people... Because it's quite hard to set aside 90 minutes or two hours for some of these episodes, and I appreciate that... But again, there's so much to learn from the way that people handle these problems that I just wanna be able to make it consumable in maybe like 15 minutes or 30-minute chunks, for people that just want the highlights.

\[32:22\] The Rawkode Academy website is part of that... I have been building it, and it was online for a couple of weeks, but I've also been migrating all of my DNS and domains away from Cloudflare, so currently, things are in motion, but currently very, very broken.

**Gerhard Lazu:** Okay. Well, where did you migrate to? I know that we talked about that briefly on Twitter; you were asking about recommendations. Who did you choose for your DNS?

**David Flanagan:** So one of the constraints that I set to myself is if I'm gonna move all my stuff, I wanna be able to do it properly this time. I wanna configure DNSSEC and really make sure that things are secure, and I set all my DKIM and SPF records for mail delivery. It's very easy to just set some MX records and hope that it works. But actually, there's a lot more that you need to do there. And for the domains where I don't receive email, I wanna be able to actually set SPF records, so that it's not used for spam.

I don't think people realize how easy it is just to send email as any arbitrary domain on the internet. It's not hard to send that email with sergey@google.com. Very easy. And these SPF records and DKIM records are how we combat spam, and other things. So I wanted to do it all properly, and that meant that I needed to set DNSSEC up; it's actually quite tricky. It usually involves a manual step, because you have to have your domain registrar create a bunch of key -- no, you have to first have your domain, set the name servers on it, then on your name servers set all of the key records, and then propagate that public key back up to the domain registrar. So there's a chicken and egg problem almost... And I actually moved all of my domains from Dynadot, which was my previous registrar, to Gandi, because Gandi was the only API that supported patching the name servers without updating all the contact records and setting like a renew price guarantee... And I'm like, "No, I can handle that manually. I just want to automate the name servers."

So yeah, I did a massive migration to Gandhi, which had a Terraform provider. I then bridged that to Pulumi, and I published -- there's now a Pulumi provider for Gandi that I published to the Pulumiverse. That allows me to patch all the name servers; I'm using Cloud DNS on GCP, which allows me to -- it also has a Terraform provider, and we have a Pulumi native provider, so I'm using that to then create all of the DNSSEC records, and I then I'm patching that straight back up to Gandi. So I it all automated. It's all public on github.com/rawkodeacademy. There's a Rawkode Academy repository, a project directory, and then my DNS automation there. So I'm really happy about that, actually.

**Gerhard Lazu:** That's really cool. So I'm hearing Google DNS part of the Google Cloud -- Google Cloud DNS, that's it. And Gandhi as a registrar for their DNSSEC integration through the API.

**David Flanagan:** Yeah, they have a really strong API. Dynadot did have an API, but it was XML-based, and I actually did write a Pulumi provider for it... And then I realized, "I'm just too old to be messing with XML anymore." They also have this really annoying rate limit; you can only have one request in flight at any one time per API token... And I thought, "Well, that's just not gonna work." So yeah, Gandi seems to be very developer-focused, the API is great, it's JSON/REST-based, and I'm super-happy with it.

There's also an open source community called go-gandi, who have developed a Go SDK for the Gandi API and the Terraform provider. So they've been able to bridge that to Pulumi. I mean, it took me an hour; it's really easy to take a Terraform provider and export that to Pulumi, which meant I could write TypeScript or Go code for all my infrastructure... So yeah, the end result is great, it's automated, and it means that if I ever did want to move my domains again, it's a lot easier.

**Gerhard Lazu:** \[36:10\] Okay, so domains are taken care of, you have this. I think that there is a Rawkode Academy course coming, on SPF, DKIM, DNSSEC, and all of those things. That's what I'm suspecting. What about the website? What about the rawkode.academy website?

**David Flanagan:** So yes, it was hosted via Cloudflare Pages. I'm now in the process of moving it to Google Firebase, which also offers static hosting with a CDN around the world, so I get a very similar experience... But I haven't completed that part yet. My plan is to do that tomorrow. I have a bit of time at the airport, and I'd like to take on these simpler tasks that otherwise I probably just wouldn't prioritize. So yeah, I'm gonna move that over to Firebase hosting, and just keep things in Google as much as possible.

I also have a Kubernetes server that I run on Scaleway, which is my favorite managed Kubernetes provider. They let you change every single API server flag... And you know me, I like to tweak and hack around... And I haven't found any other provider that lets me do that.

A lot of my automation and rebuilding on Temporal, for my YouTube channel - I don't know if we talked about this the last time, but my YouTube channel is automated, every single component of it. When I want a new episode, it's a YAML file that I commit to Git, and then that change gets picked up, it goes through some functions that go to YouTube, schedule the event, and once the event is scheduled, it generates a thumbnail, it uploads it to YouTube... Whenever I modify a description for a guest, it goes back and retroactively updates every YouTube description with the new details... The automation is really cool, but it's a bit dated now. I haven't been maintaining it for the last year. And while I've been at Pulumi - the startup world is pretty fast-paced, so I've not had as much time as I would like... But I wanna take some time out to do that all in Temporal, which is a really cool workflow execution engine, with state built in; essentially like a fancy state machine with Actions... So yeah, I've got a lot of stuff, and I've got a lot of course ideas, yeah. You're right. Showing people how I do a lot of this automation; it's something that I wanna share, and my plan is to start a new weekly segment where I actually build all the automation in public and show people what I'm doing.

**Gerhard Lazu:** Wow, that sounds really interesting. Okay, so you're shipping it like a pro, that's what I'm hearing.

**David Flanagan:** Yeah. I mean, there's a lot of automation here, and a lot of -- I'm using Dagger quite heavily now, which has replaced my entire GitHub Actions workflow from start to finish... So yeah, there's a lot of cool stuff here that I think would be really useful and beneficial to people if I could show them how I'm working on it and changing it over time.

**Gerhard Lazu:** Two thumbs up from me. I would give more if I had, but I only have two, so they're both up... It sounds amazing. So I have a serious question... Is Rawkode Academy your path to the director or professor title? Professor Rawkode, or director Rawkode? Director of Rawkode Academy? \[laughs\] You haven't thought about it... Seriously? Well, I would have...

**David Flanagan:** Well, the Rawkode Academy is a registered company, so technically, I'm the director of the Rawkode Academy.

**Gerhard Lazu:** Right. Director of content. \[laughter\] And courses. And students.

**David Flanagan:** Yeah. I mean, I don't think I can arbitrarily add professor to my title. I think I would need to maybe go back to school. So I'm not gonna do that. But I do wanna invest a lot more of my effort into the Rawkode Academy. My plan is for that to in five years time be what I'm working on full-time. And if I can get there quicker, then great, but I think realistically, it's probably four or five years out...

\[39:59\] But I would just love to be in a position where I can work on these courses and make them available to people. I've done a lot of learning with courses over the last six months. I did a course on Teleport, which is like ten hours of livestreamed workshops... And I've been doing the same with BGP, showing people how BGP works, because networking is hard, and BGP is a superpower... But I'm slowly realizing that video content, again, isn't maybe the best way to deliver a course. The message by the academy website when they come in is like "How can I make things a bit more interactive?" And again, I'm speaking to people I'm instructing, saying "Hey, can I build out something on this platform? What does that look like?" And this workshop that I'm doing in a few hours is a test of that model, and hopefully I can actually make these available online for anyone to just come along and - when they make a decision "I want to learn Kubernetes", I have the option of saying "Well, you can go watch this course on YouTube, you can go and do the interactive labs on Instruct, or maybe you just want to read article versions of it." And I wanna make sure that the mediums are there to cater to anyone, on their learning style... So that will be a big focus for me over the next 12 months.

**Gerhard Lazu:** Okay, that's a good one. Coming back to titles... Technically, I'm Lord Gerhard. Technically. Because I have a small plot of land somewhere in Scotland... Which, again, technically, makes me Lord Gerhard, but only in Scotland. Have you considered that? Lord David...

**David Flanagan:** Lord David. Yeah, actually, I have a friend, who I won't name, who have done something similar. They registered a plot of land to get a title, and they only ever use it when they build hotel rooms, because they feel that they're gonna get upgrades. And I don't know if that's true; I haven't challenged or asked them if that works regularly... But yeah, we have some very interesting laws in the U.K. where you can get these titles... I haven't considered it personally, but I do think it's a good bit of fun.

**Gerhard Lazu:** It was a Christmas present, and not by myself to myself... A friend thought it was funny, and it is funny...

**David Flanagan:** It is, yeah.

**Gerhard Lazu:** So ten years later - bam! The first time I've used it was in a Ship It episode, just to mention that I could, but I never did... \[laughs\]

**David Flanagan:** Yeah. Well, you could also buy an acre on the Moon, and then you would be an interstellar lord. So maybe that's your next move, to go universal.

**Gerhard Lazu:** It is in the Dagger future. It is. \[laughs\] I think everybody should get a plot on the moon, that joins Dagger. That's a great idea, actually. I will propose it, and see what Solomon things about that idea. \[laughs\]

Alright... So you've mentioned the Rawkode Academy courses. I know there are three out already; you mentioned the BGP one I'm yet to watch... The red background makes it very serious, and it draws my attention between all that green that is the Rawkode Academy... You have one on InfluxDB and Teleport. What other courses are you thinking about? You mentioned Kubernetes... That feels like a very big topic.

**David Flanagan:** Yeah. Definitely Kubernetes, there's gonna be more stuff coming. I'm working on this workshop using the lab-based platform gave me a lot of ideas for how I can take real-world production issues and try and expose them to people in a way where they can work through it, and debug them, and see how that goes... So there's definitely going to be some variation of a Klustered course available publicly, I'm pretty certain; probably within the next month or two.

And really, I try to keep my courses relevant to what I'm working on, just so the information is fresh in my head. So there'll be content around building event-driven systems with Temporal. I'd love to do something with Dagger, because I'm using Dagger an awful lot right now... So again, it's the thing that I'm using and I'm finding interesting, like "Okay, let's make this available to other people."

\[43:53\] So I think once I start my streaming sessions weekly, where I start to build out all this automation, the courses will be a product of that, where I start to condense that information down... So you'll see courses on Kubernetes, you'll see courses on Temporal, you'll see courses on Dagger... And I've been doing a lot more with Thanos for metric collection, and with Loki. Something cool about that recently was I built my own URL shortener using edge functions. Really, really simple. Anyone can write that in like an hour. But what I wanted to do was make sure that I had really good metric collection, so the edge functions actually write out structure logging in JSON format, which I publish to my Loki instance, and then I have some rules in Loki that generate metrics on an hourly basis based on the hits, so I can actually show how many people click on each of these links.

And as I move towards Rawkode Academy being a source of income for me over the next couple of years, being able to automate reports with Grafana, to send them out to my partners and sponsors, giving them the information that they need to continue to support me is really important... So again, all these things that I'll be sharing with people are just driven by my own use case, but have much broader applications, hopefully.

**Gerhard Lazu:** That's a really good idea, because you're living this tech; you're using it in different ways... It starts as like a real-world implementation. You know, "Hey, I've used Teleport to solve this problem. I could have used a few other things, but this one seemed to serve my needs best." And "Oh, Temporal - this is the problem that it's solving for me." And again, I really like that real-world-based approach, because you can have fun with it... But then how do you transition from those early learnings into doing something production-like? And even if Rawkode Academy doesn't work right now, we can do Ship-It-driven development that by the time the episode comes out, it will work, and that will be a great story to share, for sure.

**David Flanagan:** Well, there's my bold claim them - I will have the Rawkode Academy website online before this episode ships.

**Gerhard Lazu:** See, there you go. That's how work gets done. That's how commitments get made. But these are fun ones. These are not the "Oh, you have to get it done." No, no. But it will be a great story nevertheless.

**David Flanagan:** You're right. I am building a production system. Even though it's for my own use case, and it's not gonna have millions of hits, it's gonna be modest traffic, but it is a real production application. And what I really love about it as well is I'm using Pulumi for a lot of that, so I'm actually driving product feedback back to Pulumi, because I'm making Pulumi do things that maybe it wasn't supposed to be doing originally, and then building new providers and trying to integrate with new PI.

So I love that I'm able to join my passion project, which is my academy, with my dayjob at Pulumi, pushing these tools together, and just showing people that you can bend the usefulness of applications to suit your needs in \[unintelligible 00:46:54\] ways. I really love that I was able to build the Pulumi provider for Dagger, and just have all my workflows do Pulumi ops inside of a container-based system, and be able to run them locally. So it's nice that my dayjob and my passion project allow me to drive both forward at the same time, and produce feedback.

We've done some really cool stuff at Pulumi with Kubernetes, and I hope that my feedback on the stupid things I'm doing with Pulumi and Kubernetes is really helping make that easier for other people. It's very -- I keep saying "serendipity", but it is; I get to do both things at the same time, and push both forward, which I love.

**Gerhard Lazu:** That is a great combo. And speaking of which - have you seen other people do things that you weren't thinking of, and that surprised you in a nice way? With Pulumi, with Kubernetes, with all those integrations?

**David Flanagan:** Yeah, there's definitely some really interesting stuff that I see the community doing. We started the Pulumiverse last year, which was like a neutral home on GitHub for Pulumi providers and community contributing code, where we try and support them, through automation and making it easier to publish the providers and the binaries... And we're seeing more and more people contribute there, which is great. With regards to what I see people doing weird with Pulumi is that --

**Gerhard Lazu:** \[48:06\] Or interesting.

**David Flanagan:** Yeah, sorry. Interesting. Interesting things I see people doing with Pulumi is using it as a replacement for make, which has been interesting... Because they're using the new command provider, which can run local or remote, as the situation commends... And yeah, I see people using that in their local environments, where they run a pulumi up and it tries to do go build and go install, and then maybe build a container image and push it. That's not something that I've considered myself with Pulumi, but I think it is an interesting use case... And I think showing that in turn and sharing it in turn with Pulumi gives them food for thought, and it's like, "Okay, people want to do this. Can we make it easier for them?" And again, we're driving that kind of product discussion around it.

We're also seeing the Kubernetes operator being used in new and wonderful ways as well... My use of the Pulumi and Kubernetes operator is only to deploy to Kubernetes, but we're seeing more people deploy their cloud infrastructure in that environment. I think on the tails of what Crossplane are doing, people are like "Oh, I could do that with Pulumi, with the operator." So they can attach the IAM identity from your pod within your EKS Kubernetes cluster to your AWS Cloud API, and allow that to create S3 buckets, spin up functions, and really build these really cool, specific controllers for your own stack and your infrastructure, inside of a Kubernetes cluster speaking to your cloud APIs directly... And that's a really novel pattern.

And I love what Crossplane are doing as well, and I'm really excited to see people doing that with the Pulumi operator as well. I'd say those are really cool avenues, worth exploring.

**Break:** \[49:54\]

**Gerhard Lazu:** So in this sea of choice that we have today, as if the CNCF landscape was not vast enough, how would you recommend that people go about choosing what to use? ...whether it's Pulumi, whether it's Crossplane, whether it's Dagger... Because they all serve different purposes, and sometimes this is not obvious. People just don't know what to go with. Like, Teleport vs Tailscale... There's so many. Again, it's a sea of choice. What would you recommend to people trying to make those choices for their production environments?

**David Flanagan:** That is a very difficult question... Let's see if we can break it down into two rules. The first rule is just always pick Pulumi, because I work there, I'm biased, and I'm gonna encourage people to always pick Pulumi.

**Gerhard Lazu:** Pick Pulumi, okay. That's it. First, number one. Number two? \[laughs\]

**David Flanagan:** The second one is pay attention to the industry. We get different types of customers, developers, teams, organizations. If you're risk-averse, then you always have to track what the community is doing. That's going to mean following the projects that are CNCF-incubated and graduated projects, because you know they're gonna have a support lifecycle, with neutral ownership and vendoring, and there's a lot of resources out there.

Now, it could be very easy for less risk-averse teams that are very curious... I put myself in that camp. I see new technology, I'm like a magpie, I have to go and play with the thing, put tires on it, and see what it does, and how it's different... And you may think that there are better technologies, that are more esoteric, but they're gonna be lacking in community support and documentation and tutorials... And you really need to drive those things forward.

So it depends where you are on that risk aversion scale. I think it's a safe bet to go with CNCF projects. Use Prometheus, use Thanos, use ArgoCD, use Crossplane, because they will be supported, and they've got very active and healthy communities.

\[53:55\] Now, other projects will have healthy and active communities. We still have the Apache Foundation, and you may find that you wanna go down that route if you're a JVM shop. Again, you're gonna have ties closer to that. So I don't have any great insights, but just understand where you are on that scale, and stick with the communities that fix your own stack... Because you're gonna understand how things work. A Java company switching to a CNCF stack might be difficult, because it's all Go-based, and things that we do in the Go ecosystem are very different, and you may wanna stick with the Apache Foundation. Very tough question, but I love it.

**Gerhard Lazu:** That is very solid advice, I have to say. Very solid advice, thank you. Defnitely helpful for people that are strugglign, like many do, because of the choice. It's just like, "What do I choose?" If you have two things to choose from, it's easy. Not that one, then the other one. But it's not that simple, right? You could just end up choosing all the time, and not settling on anything. So how do you find something that you feel "Okay, this is me. I'm here. I'm setting up camp here." What needs to happen for you to get to that point, and feel that "Yup, this will do me"?

**David Flanagan:** Well, yeah. I mean, let's pick two example, because I think they highlight this problem very well. One of them is you wanna pick a time-series database. You've got many options. Apache Kudu is one that is available from the Apache ecosystem. If you're in the CNCF's ecosystem, we don't just have Prometheus. We've also got M3, and we've got Thanos, and we've got Cortex. And from Grafana - I can't remember the name. Apologies, Grafana folks. But they're all very similar, and they're all Prometheus derivatives... But how do you make that decision? You do have this impossible decision.

And then of course, if you move out of those three ecosystems, there's InfluxDB, and there's Timescale, and I'm sure there's a couple more. And they're all great projects, and they're all worthy of adoption, but they all come with their challenges.

So yeah, I don't know how people make that decision. Very, very tricky one. Obviously, Prometheus, and sticking within that API, you can transfer a lot of knowledge, but the operational aspects of Cortex and Thanos and \[unintelligible 00:55:57.21\].

Then there's the streaming ecosystem, we're seeing a lot more event-driven stuff in the CNCF... And again, if you're in the Apache ecosystem, maybe you wanna go with Kafka. And if you're in the CNCF ecosystem, you're probably gonna be more attached to NATS. However, we have a new contender, Redpanda, which is delivering phenomenal stuff. We have a Kafka-compatible API, but writing it in C++, with a WASM engine... But you may wanna go for something that's battle-tested, and that can be RabbitMQ. So again, how do you make that decision? I think it's tricky for everyone. I'd say between us, we have a lot of experience here, and I still struggle to make some of these decisions. So hopefully, other people don't spend too much time on it, and just try and pick something that leans into their ecosystem and works from there.

**Gerhard Lazu:** Yeah. I'm all for making small steps in a direction that seems right, and never commit to getting there. And that means... "No, I will use that" - you can't start like that. You say "I'm going to try this. It's close to what I'm doing today..." It won't change everything, because those things are very expensive, when you start changing 90 de-degree course corrections.

So try making very small, steady changes of direction, and see if it's better or not. What is your fitness function? That's what I would say. How do you know if the change that you're introducing is a good one? And maybe focus on that, so that you can answer "Yes, this is better" or "No, it's not better." That's just like very gently going in a different direction. And you should never make the big migrations, because I think it's a very expensive way of learning, and the risk is super-high. So you should be making smaller learnings, and smaller adjustments, because too big is just too much risk.

And I think even with us - you can end up your whole time just picking things, and learning about things, but never really using anything. So how does David make the choices for his production, that need to stick for a couple of years? David, that is in the thick of it all. I think that is an inspiring one to watch. At least it was for me, and it is for me...

**David Flanagan:** \[58:04\] Yeah. Really sound advice there, making sure that you're taking small steps, and not doing any big migrations. Those never pan out, right? We know this now, and I think this is why we're seeing new architectures emerge. Microservices and event-driven architectures really give you that flexibility... Or ports and adapters, whatever ecosystem you come from; they name it all a little bit different. But these allow you to be more flexible with these decisions as well. When you start having very loosely-coupled systems, or event-driven bus systems... I mean, you can even replace the bus; you stick a proxy in front and you write that to two buses. And then those buses have different subscribers, and you can start to replace those subscribers, or even duplicate them in some way... As long as they all have their own data store and you're not making that cardinal sin of writing everything back to a single data store, you do have that flexibility to be very agile in the way that you try out these systems and go "Alright, we're actually gonna run M3, Thanos and Cortex for a month, and we're gonna see which one gives us the most operational pain, and then drop the other two. It's very easy with that architecture to build, to do that.

We're also seeing a split or a divide, I think... There's a lot of companies that are just going all-in on a particular cloud and using every managed service in the world... And then there's the other side, which is the Kubernetes ecosystem, and doing everything agnostic. And I'm curious to see how that pans out in a few years as well. I mean, the cost of all these managed services on cloud providers is extortion. I personally could never justify it. But maybe I've just not been lucky enough to work for a company that's got the budget to do that. Maybe that would be the simpler life, I'm not sure.

**Gerhard Lazu:** That's a good one. Okay, okay... So I'm thinking about conferences; that's how we started, and that's how we are gently ending... You're at Container Days right now, just about to start your workshop... Hopefully, I got you relaxed and thinking about other things, other than your workshop, hopefully... You'll tell me how it worked in practice. What other conferences do you have coming up?

**David Flanagan:** So I have a couple more, and then that'll be me finished traveling for the year. I try not to travel in November and December. However, I do have OSMC in Nuremberg in November; that's the Open Source Monitoring Conference... Where I will be showing people how to provide a rich developer interface to Prometheus custom resources by using Pulumi. I think one of the superpowers of Pulumi is that -- I love Pulumi TypeScript. We have this wonderful type system that works with our Language Server Protocol and our editor of choice, meaning you can tab your way through all of these resources without ever really knowing what they look like... And I think that's wonderful. So I wanna share that with that community, and do more with Prometheus.

I also have NDC Oslo in two weeks' time, where I'm doing my "What I learned fixing 50 broken Kubernetes clusters" talk. So that's gonna start off with that wonderful two or three-minute video of me crying and swearing, and then sharing the high-level knowledge transfer that I personally got from clusters. That's looking at what I've learned about the Linux operating system, what I learned about the networking stack, what I learned about eBPF, and how I structure that learning and how I can share that with more people. I really love giving that talk. I think it's fun, it's light, and again, I'm all about sharing knowledge with the people also.

**Gerhard Lazu:** Okay. What about the one in Edinburgh? We missed one.

**David Flanagan:** I forgot my own conference...

**Gerhard Lazu:** \[laughs\] Yes. Yes, people. David has his own conference, and he forgot about it, so make sure you show up. It's gonna be great.

**David Flanagan:** Well, I'm not speaking at it, so it just slipped my mind. But yeah, I'm organizing KubeHuddle. This is a very community-focused Kubernetes conference in Scotland. It's October 3rd and 4th in Edinburgh, at the Edinburgh International Conference Center. So I'm really excited... We've got 28 speakers coming to share their knowledge. When I started planning it, I only really had one idea. I mean, it started with a tweet; let's just get it out there. I tweeted "There should be a Kubernetes conference that's community-focused in the U.K." And then literally, three days later I had a venue. I was like, "Crap, this is happening." So I had to learn how to organize a conference. It's been really hard, but I'm really excited and really happy with what we've delivered.

\[01:02:28.02\] My main idea to start with - it has to be a two-track conference, because I want this conference to 1) have a track that caters to people that have never seen Kubernetes before. I think that's really important, and I had to remember, even though it's not my own personal content that I want to see, but 80% of our community -- arbitrary number that I'm throwing out there, but 80% of our community is new to Kubernetes. We're still very early in that adoption cycle.

But the other track was going to cater to the other 20%. So these are talks that are advanced, or at least intermediate towards advanced... Because I wanna be able to attract Kubernetes contributors. In the UK and Ireland and Europe there are a lot of people that are working on Kubernetes daily... And I don't think that other Kubernetes conferences are a great place for them to go and share ideas, because they're so big that they always cater for the 80%. So we have a track dedicated to these hard things as well, and... I'm really lucky, we do have a lot of Kubernetes contributors coming, and I'm looking forward to be able to give them a venue and a place where they can sit and share ideas about what's next for Kubernetes and how do we drive the project even more forward. Because it's fast-paced, and changes are happening, and I think we need to provide the forum to speed up those discussions.

So I'm very excited. It's gonna be great. And you're presenting as well... So I'm really looking forward to seeing you in-person again, and again, to say hello. And we have a lot of other great speakers.

**Gerhard Lazu:** Hang on, hang on... I have to do David. "Oh, crap! I'm presenting?! No way, I have to do my talk. Dang it!" How long do I have, David? \[laughter\]

**David Flanagan:** You have 26 days, now that I'm counting.

**Gerhard Lazu:** That's plenty. That is plenty. I have time, I have time. Phew! I forgot about that conference, dang it. \[laughs\]

**David Flanagan:** Well, yeah. I mean, I was gonna say, we have the brightest and best minds in the Kubernetes ecosystem joining us, so...

**Gerhard Lazu:** Not me, no... \[laughs\] Since I forgot about it, obviously... Right. Okay, so what I want to know - again, I think this could be possibly the last question... Can we get Caleb on Ship It this year? Because last year we couldn't. He was three weeks old, and I know that because it was KubeCon North America... So can he talk, so that we can get Caleb on Ship It?

**David Flanagan:** Hey, he's got a few words... I'm very proud to say that he is saying "da-da", he can say "Tah",and he can say "Mama". He's gonna be one in two weeks' time. He just started walking, which is super-scary, because the minute they start walking, they have mobility, and they can reach and grab things...

**Gerhard Lazu:** That's how it starts...

**David Flanagan:** The words will be coming thick and fast soon. He's definitely exploring and testing a lot more new sounds, and words, and stuff. So yeah, I'm sure we'll be able to get Caleb on at some point to say hello.

**Gerhard Lazu:** We can just get him to say hello. Or da-da. Kubernetes would be amazing, if you can make him do that...

**David Flanagan:** Yeah, once I get home I'll spend a few days...

**Gerhard Lazu:** Or just Ship It. Ship It is enough.

**David Flanagan:** Ship It.

**Gerhard Lazu:** I will settle for that. That's okay. Ship... It. Okay? Very important... \[laughs\] Alright.

**David Flanagan:** I will work on Kubernetes and Ship It. Whatever he says first, I'll get you a recording and you can just patch it in.

**Gerhard Lazu:** That will be amazing. That will be amazing. Okay, so what I wanna say is good luck for your upcoming workshop. I hope there will be a recording of it, so that we can share it... Thank you very much for joining me today. Again, these conversations are getting better. I think - I think - both of us are having so many of them that we are improving. I think that's what's happening here. We're getting better at talking... Alright.

**David Flanagan:** Well, I think you bring out the best in people, so you're definitely helping me out.

**Gerhard Lazu:** Thank you very much. I appreciate that. I'll take that as a great compliment. Thank you, David. I look forward to speaking with you next time, and keep it light, keep it fun. You're doing a great job.

**David Flanagan:** Thank you very much. I really appreciate that.
