**Mat Ryer:** Hello and welcome to Grafana's Big Tent. I'm Mat Ryer. Welcome to the podcast all about the people, community, tools and tech around observability. Joining me today, Tom Wilkie, co-host. Hello, Tom.

**Tom Wilkie:** Hello, Mat. How are you?

**Mat Ryer:** Good, mate. How are you doing?

**Tom Wilkie:** Very good. I'm looking forward to seeing Oasis live.

**Mat Ryer:** I can't believe it. Tickets go on sale. This is reunion after - how many years is it?

**Tom Wilkie:** I was at their last ever gig at Wembley.

**Mat Ryer:** Why?

**Tom Wilkie:** Just purely coincidence. I didn't know that like they basically announced the day after I saw them live that they'd broken up.

**Mat Ryer:** Wow. And so you're going to go back and see them?

**Tom Wilkie:** It is funny, because my wife texted me and said "I'm not going to see Oasis." But that was how I found out that Oasis were getting back together.

**Mat Ryer:** I'll go with you, mate. I'm definitely going to go and see it.

**Tom Wilkie:** I thought you were more of a Blur fan.

**Mat Ryer:** No...

**Tom Wilkie:** No? But you are Northern.

**Mat Ryer:** Yeah, true. There you go. Oasis are the Northern ones, aren't they?

**Tom Wilkie:** Oh, okay. That shows my knowledge, doesn't it? Yeah.

**Mat Ryer:** Yeah. And actually, let's introduce our guests. We're joined by Torkel and Mitch. Welcome to the show, Torkel.

**Torkel Ödegaard:** Yeah, thanks. It's a pleasure to be here.

**Tom Wilkie:** Torkel, this isn't the first time you've been on the podcast, is it?

**Torkel Ödegaard:** I think it's the second time.

**Tom Wilkie:** Yeah. Okay, good.

**Torkel Ödegaard:** Yeah.

**Tom Wilkie:** We did the live recording in season one, in Whistler. You were on that one. Good. Well, welcome back.
**Mat Ryer:** And we're also joined by Mitch. Mitch, what's your real name? Because Tom's changed my notes to say everyone's last name is Wilkie.

**Mitchel Seaman:** Yeah, I was hoping you'd introduce us all as Tom Wilkie, Torkel Wilkie, and Mitch Wilkie.

**Mat Ryer:** Yeah.

**Mitchel Seaman:** My real name is Mitch Seaman. I'm a longtime listener, first time guest.

**Mat Ryer:** Welcome to the Big Tent. What do you do in a Big Tent? Sit down on a...

**Mitchel Seaman:** Camp chair.

**Mat Ryer:** Camp chair. Pull up a camp chair, have some s'mores...

**Mitchel Seaman:** So you're really in on the American camping.

**Mat Ryer:** Yeah. Yeah.

**Tom Wilkie:** I've no idea what a s'more is. Yeah, I think Mitch is probably the only one here that has ever actually had a s'more.

**Mitchel Seaman:** Do you know what Rice Krispie Treats are?

**Tom Wilkie:** Yes. I know what a Rice Krispie Treat is. Yeah.

**Mitchel Seaman:** Okay. This is my chief American export in Sweden. I get to introduce every Swede to Rice Krispie Treats, and it blows their mind.

**Tom Wilkie:** I didn't realize they were American. I'm disappointed now.

**Mat Ryer:** They're not s'mores though, are they? That's not what a s'more is.

**Mitchel Seaman:** No, completely different. But they're both American desserts.

**Tom Wilkie:** We don't have graham crackers in the UK. So when people say "Get a graham cracker", I'm like "What is that? Is it like a Jacob's cracker that you have with cheese?" Because that's just weird.

**Mitchel Seaman:** Yeah. I see people make them on digestives. Which is...

**Mat Ryer:** I've seen someone do it in a microwave; two digestives, marshmallow in the middle, pop it in the microwave... That's the modern, city way of making s'mores. You're not allowed naked flames.

**Mitchel Seaman:** And no chocolate.

**Tom Wilkie:** I know that we're supposed to be talking about observability, but whilst we're talking about biscuits, I recently got a jar of Biscoffee paste. It's like peanut butter, but made of Biscoffee biscuits. That's dangerous. I had to throw it away. I was eating it with a spoon.

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** I'm not sure how you're supposed to eat it, but yeah, that got thrown away very quickly, because it was... Have you had the Biscoffee paste before?

**Mat Ryer:** What, is it like they've turned biscuits into a liquid form, for like space?

**Tom Wilkie:** It's like the same consistency as peanut butter, but it just tastes so good.

**Mitchel Seaman:** They sell a special version of this at Trader Joe's in the US.

**Tom Wilkie:** Oh, do they?

**Mitchel Seaman:** This is the store -- when I go back, I come back with a suitcase of Trader Joe's stuff. Dark chocolate peanut butter cups. Just like --

**Tom Wilkie:** This podcast is not sponsored by Biscoffee or Trader Joe's, just to be clear. Although we are open to being sponsored by both of you.

**Mat Ryer:** Yeah. When I go to the US, I go to the British shops, and I just buy the British stuff... Because it's imported.

**Tom Wilkie:** Baked beans, and sausages, and...

**Mat Ryer:** Yeah. It's better because it's imported. It's more expensive.

**Tom Wilkie:** It's got air miles. Yeah.

**Mat Ryer:** Yes. I like my food to have a bit of carbon weight behind it. You know what I mean?

**Tom Wilkie:** So what are we talking about today, Mat?

**Mat Ryer:** We're talking about Grafana 11. Grafana is 11 years old. Can you believe it?

**Tom Wilkie:** Is it really, Torkel?

**Torkel Ödegaard:** No, we had one year with two releases.

**Tom Wilkie:** Oh, I thought you were going to say we skipped 13, or something. But I guess we haven't got there yet.

**Torkel Ödegaard:** Actually, we did have one year where we skipped A release, I think, as well. So I guess in December this year it should be 11 years old.

**Tom Wilkie:** Oh, wow.

**Torkel Ödegaard:** Or the first release next January is going to be the 11th... Because the first release was in January, 2014.

**Mat Ryer:** That's amazing.

**Mitchel Seaman:** Did you think you'd be working -- when you started Grafana, 10 and a bit years ago, did you think you'd be working on it 10 and a bit years later?

**Torkel Ödegaard:** No. God, no. It was like a hobby project that maybe would be somewhat useful in the team I was working in... So I had no idea.

**Mat Ryer:** It's a hobby project that's got way out of hand.

**Torkel Ödegaard:** Yeah, definitely. Very hard to keep up with all the work now.

**Mat Ryer:** Yeah.

**Torkel Ödegaard:** But it is kind of fun though, in the sense that my day-to-day isn't radically different from the early days, in the sense that I still mostly code, look at PRs, help teams with some tricky changes maybe... But yeah, it is still looking at UX challenges, and UI things, and trying to make Grafana a little bit better every day.

So it's been a very kind of consistent team. It's just like "Yeah, what small improvement can we make today? And what long term."

**Tom Wilkie:** I guess there's a few more podcasts you have to appear on now than 11 years ago.

**Torkel Ödegaard:** Yeah.

**Tom Wilkie:** So Mitch, you're the director of product management for Grafana... Did I get that right?

**Mitchel Seaman:** \[05:53\] Yeah, exactly. I was going to mention, Torkel was my first manager. I feel like that was the only unwelcome interruption in your career that's otherwise just doing great frontend development. You got out of that job pretty quick.

But yeah, I was one of the first couple of PMs that joined. I joined just after Richard Lam, who reported to you at first, right, Tom?

**Tom Wilkie:** That's right. Yeah, I traumatized him by making him report to me for a few years.

**Mitchel Seaman:** Yeah. Richard's job was to set up the cloud product, and my job was to create Grafana Enterprise; basically, start to turn this open source project into a product we can make money on, in order to sort of fund open source.

**Tom Wilkie:** How long ago was that? Four, five years ago now?

**Mitchel Seaman:** Yeah, it's four and a half years now.

**Tom Wilkie:** Wow, wow. Anyway, enough about memory lane. What is new in Grafana 11, Mitch?

**Mitchel Seaman:** Yeah, so at a high level, the things that we were trying to do in Grafana 11 -- and a major release in many regards is just another release, but we always try and sort of punctuate, like "Hey, at the beginning of the year, what is it that we're trying to accomplish?"
So for Grafana 11, we wanted to make sure we helped newer users to monitor and troubleshoot more easily... And newer is a pretty broad term. This could be newer, or it could be just users who are a little bit less patient. We're sort of past the early adopter stage with Grafana, where you have a lot of tinkerers who are happy to sort of get into the weeds... And so we just want to iron out some of the rough edges. The biggest rough edge is learning PromQL and LogQL, sort of executing your first query.

So there were some big improvements there, with Logs Explorer and Metrics Explorer. Then we improved managing Grafana as well, so making improvements to auth, and the way that you'd set up things like single sign-on... We also created a really nice tool to migrate from Grafana open source or enterprise up to Grafana Cloud, which is great for a bunch of reasons, and free for most people. We always like to say "Whatever else is happening in Grafana world, we are always working on new data sources and new visualizations." So we had a bunch of new data sources; PagerDuty and a lot of databases. SurrealDB and a handful of others. And some more panels and better features in panels.

And then the big thing which happened, which we're constantly working on, but it's the sort of part of the iceberg that's more underwater, is making Grafana itself a lot more extensible, and sort of refactoring our backend to make it much easier to build applications that look and feel just like regular features in Grafana.

**Tom Wilkie:** Let's start with the first one you mentioned, the ease of use features. I think you're referring to the new Explore features, right? Torkel, you actually built the first prototype for the Explore Metrics, didn't you?

**Torkel Ödegaard:** Yeah, so that was the feature that I was most excited about in Grafana 11 as well, is this Explore Metrics feature, that kind of really tackles the getting started experience. But also, the thing I like is that it targets both kind of the new users, but also really experienced users, in that it kind of does a lot of work for you, and you don't have to write your Prometheus query. You can look at a metric from all its possible dimensions, and break it down or group it by all its possible dimensions, without having to sort of build a complex dashboard, add a bunch of group by variables, do a lot of work.

So even if you're an experienced PromQL user, you can actually get a lot of mileage out of this UI as a way to troubleshoot, and find what actual kind of pod is causing a spike in a heavily aggregated graph. So my proof of concept started by doing that, by doing this kind of automatic group by. So having a single Prometheus graph, that is heavily aggregated; just one time series. And then I added a way to group it by one dimension, I started with one dimension, and had that split out into separate graphs.

\[10:00\] And then I added being able to look at it from all possible dimensions at once. So you get a latency short, group by data center, by namespace, by job, by maybe URL endpoint etc. So you can actually see what part of those dimensions is contributing to a spike.

**Tom Wilkie:** I can vividly remember when you were working on this, because you were sitting next to me in London at the time.. And you were so excited about it, and I was so -- I remember day one when you showed me it, and we had a bit of a chat about it... And then day two, you came back and you're like "Well, I did all these things." And day three, even more. I just remember how cool that was.

**Torkel Ödegaard:** Yeah, most of it was done during an offsite, leadership offsite, where I didn't pay much attention to what you and others in that room were saying, because I was just so into this... Because I saw it bridging such a huge gap in terms of kind of - yeah, getting to sort of the end goal; what do you actually want to use when you're troubleshooting? Like, yeah, being able to sort of quickly go from a graph to seeing what's actually causing this spike I'm seeing in the graph. So yeah, being able to do that without having to manually jump to explore, and modify the query, or build detailed drill down dashboards. But just have Grafana do it all for you was just kind of - yeah, really magical. Yeah, and this was just a quick proof of concept. We decided "This looks really promising. Let's build a team around it", and that's what we did. And we launched it as one of the headline features of Grafana 11.

**Tom Wilkie:** So I consider myself to be a PromQL expert, and very modest as well in my Trumpian way... But even I find Explore super-useful. You can take a histogram and get to the heat map of that histogram in the new Explore Metrics so much quicker and easier than you can if you try and write the correct query, and get the right group bys, and configure the panel yourself... So I've actually found myself using it almost on a daily basis, even though I can do the PromQL myself.

**Torkel Ödegaard:** Yeah, the heat map feature is really embarrassingly hard to do in panel edit still... But in Explore Metrics you get it for free, which is really nice.
**Tom Wilkie:** And so this was like January, I think, when you did the first prototype, and you were showing it to people... And then we had a hackathon - I think it was March, was it, Mat?

**Mat Ryer:** Yeah, yeah.

**Tom Wilkie:** And you'd taken the inspiration from the Explore Metrics to build Explore Logs, right?

**Mat Ryer:** That's it. So it was the same idea, looking at what they've done in Explore Metrics and this new way of looking at it. And Cyril came to me just before the hackathon... How do you say Cyril's last name?

**Tom Wilkie:** Tovena, yeah. We had him on the podcast in season one, and he talked about focus a lot in his very French accent... So I encourage you to listen to that podcast. We might've had to bleep it out though.

**Mat Ryer:** They may have bleeped out when he said that word, yeah. I don't know how to say his last name, because every time I ask him, he answers in French. And I really need it in English. So that helped, the way you said it Tom. Tovena. Yeah, so Cyril said "What if we did the same thing as Explore Metrics, but what if we did that for logs? What does that mean?" And obviously, there's data in logs that Loki is already pulling out. There are labels, so you know which pod it came from etc. And also, there's fields within logs. If you've got structured logs, or there's other kind of ways of getting data out of the actual logs themselves, what if you just throw all of that up and just show the histogram, just show the volume of logs with those properties?

And it just worked out really well. It's just the same idea transposed. And that one did win the hackathon. And then again, a team was -- there was already a team that jumped on this, and just did a fantastic job to get it out for public preview at OpsCon, which was -- yeah.

**Tom Wilkie:** \[14:02\] Because we launched it at OpsCon, which was what?

**Torkel Ödegaard:** I think we launched it at GrafanaCon.

**Tom Wilkie:** Sorry, GrafanaCon. We launched it at GrafanaCon, in Amsterdam. What date was that? It was only like six weeks after the hackathon, wasn't it?

**Mitchel Seaman:** Yeah, it was in mid-April.

**Tom Wilkie:** Yeah. So, I mean, such a quick turnaround.

**Torkel Ödegaard:** Yeah. It was part of the GrafanaCon keynote. And I think that it's probably the quickest we've had a headline feature kind of come from idea to being on stage, demoed in front of like a GrafanaCon audience ever. But that was the fun thing of having a company driven by hackathons.

**Tom Wilkie:** Yeah. We're just doing the prep work for OpsCon now, which will be in New York in the end of September... And the winner of the last hackathon is going to be in the keynote. I'm not going to say what it is though, because that'll be for a future podcast episode.

**Mat Ryer:** It's very cool though.

**Mitchel Seaman:** I thought it was so electrifying on stage too, because it solves this fundamental problem. When you open Grafana every once in a while, you're just looking at a blank screen. And there's such a big difference between, okay, I'm looking at a query editor. Even a great query editor, it's still sort of a blank canvas. So to see some query, any query executed, and to be able to click around and start to explore is a more engaging experience, especially for mortals like me, who are not PromQL experts and inventors of the red method, or whatever.

**Tom Wilkie:** I think we've really kind of like broken down a mental barrier in Grafana now, because this is also one of the first Grafana features that's very data source-specific. This is an experience dedicated for Prometheus, dedicated for Loki, and now with Tempo and Pyroscope as well. Torkel, am I right? We've not really done anything like that in the past, have we?

**Torkel Ödegaard:** No, no. I think that there have been some features that have had limited sort of data source support, but not like a main feature where we thought "Let's build it for Prometheus only. Let's start there. Let's really nail this problem. Let's think about other data sources in the future, if ever... But let's just see where we get to if we only focus on one data source and one problem."

**Tom Wilkie:** Yeah. And it turns out we get pretty far. When you narrow down the space of challenges, you can build such richer solutions.

**Mat Ryer:** But that's what's so good about the hackathon. It lets you do that. You get to just forget everything else. We build these great, big, complex machines and these complex systems, and we tie our hands in all sorts of ways, we make decisions, which we then live with... And so there is something -- there's no rules in the hackathon. You can just do whatever you want. You can hack on anything. You can just break anything you want.

**Tom Wilkie:** I mean, laws still apply.

**Mat Ryer:** Oh, that was not made clear.

**Tom Wilkie:** From your local territory. Don't break the law.

**Mat Ryer:** Yeah, okay. Good advice.

**Torkel Ödegaard:** I just want to sort of clarify one thing... That doesn't mean that all of the things that we're developing in these apps are going to be exclusive to Prometheus and Loki. I think some parts of them; maybe not the full workflow, full experience, but we can learn from what we're doing there, and try to look at sort of "Is there parts of it that we can apply to other data sources?" And specifically maybe in dashboards.

So one of the things that we're looking at in the future is "Can we do a dynamic group by, for example, as a generic feature that other data sources can support as well?" So the outcome of this is not going to be only limited to those data sources. I think there's going to be learnings that we can apply to others as well.

**Mitchel Seaman:** Yeah, definitely. Or even some of the features. Torkel, I remember the colored dots at the top of the screen, that basically follow from one step to the next in an exploration process... I think a lot of people saw that right away and saw value in it, but they said "This shouldn't be isolated to this one experience or this one data source." So now people are experimenting with things like "Oh, what about like a follow me feature or enhancement to Grafana Incident, that lets users keep track of where they've been, so they can go back?"

**Torkel Ödegaard:** \[18:11\] So before we move on, the thing that I just want to highlight about the Logs app... It kind of blew me away as well in what they managed to do in this hackathon project and in the weeks running up to GrafanaCon. I'm a big fan of Loki, but I've always struggled remembering the query syntax, even after working on the Loki query builder. You can do so much with it. The options are so vast, and it takes a long time to really troubleshoot using Loki, creating different queries, and just having that all done for you, detecting patterns, doing the group bys... It's just bridging such a huge gap in both learnings, but also time, and actually kind of - yeah, doing that manually.

**Mat Ryer:** Yeah. That's what's so great about it. And I think other improvements, too. Mitch, you mentioned also improvements to managing Grafana itself. Tell us a bit more about that.

**Mitchel Seaman:** Sure. Yeah, behind every Grafana user who's trying to learn PromQL for the first time there's a team of site reliability engineers who have sort of set up the observability tooling. Especially in a bigger company, you've got a core team - maybe it's five or six people - who know something about observability and know something about operating our stack. And actually, for those of us kind of working on Grafana, those are the people we talk to the most often, because they're trying to offer really good service to their users. And we want to make sure that we're providing them with good tools as well.

So the things that we focused on this time around also had to do a little bit with ease of use. So we shipped a new UI for single sign-on. SSO and auth in Grafana has always been pretty pluggable in the application itself, but a little bit complex.

Like, you had to configure it in Grafana's INI configuration files... So we moved that over to the UI, and made it possible to configure without restarting Grafana... And it's basically just part of a broader move to make setup of Grafana more of a provisioning process, as opposed to sort of a heavy file-based configuration.

But I guess the thing that I was the most excited to present, and definitely the most nervous to demo, was the cloud migration app. This is something we hear about over and over again. "Hey, I'm running open source", or from customers "I'm running Grafana Enterprise. I see all this interesting stuff that's happening in Grafana Cloud. How do I migrate over?" And so far, what we've said is "Well, we have an HTTP API for every Grafana resource. So if you tally all those up and execute a bunch of individual requests, you'll be up and running in no time." But it turns out that's a bit of a barrier. So we started making a tool... The focus was to be able to press one button and migrate my entire Grafana instance into cloud... Which in one sense, we're just calling those APIs, but there's a lot of little complexity there.

For example, every data source that you configure - and there could be hundreds in an instance - is configured with a password, or a token. And we can't just pull that. It doesn't come back from the Git API. It's encrypted. And so the team did a whole bunch of work to make it possible to migrate a data source along with its credentials to cloud. Making that secure, making it performant was a big deal.

The other thing is, well, if you're on, say, a private network, or even like -- I was running Grafana in the demo on my local compute... I was querying a Prometheus that doesn't have access to the internet, or it's not accessible from the internet. So we had to invent a feature, a PDC that allows Grafana to establish an SSH tunnel to that local network, from an agent that you run on your own network... And so we wanted this migration tool to also work with PDC.

**Tom Wilkie:** \[22:06\] What does PDC stand for?

**Mitchel Seaman:** Private Data Source Connect.

**Tom Wilkie:** Oh, okay. That makes sense.

**Mitchel Seaman:** There's a long-running debate about whether data source is one word or two at Grafana.

**Tom Wilkie:** A hundred percent it's two words, yeah.

**Mitchel Seaman:** I think we mostly say it's two, but everywhere in the codebase it's one word. This is the difference. But yeah, so making the cloud migration tool also work alongside private data source connect has helped to basically take care of these two big barriers for people to be able to use Grafana Cloud and migrate easily. I think those were the kind of the two big ones. We had a handful of other auth improvements, and ease of use improvements for admins as well.

**Tom Wilkie:** I think one of the most requested features in the GitHub for Grafana is subfolders as well, wasn't it?

**Mitchel Seaman:** Oh yeah.

**Tom Wilkie:** Can't forget subfolders...

**Mitchel Seaman:** That's true. You could call that a management feature for sure, but it's something that affects everyone. Obviously, it took a huge amount of work to make this feature happen, because folders, as it happened - Torkel, right? - were dashboards, are dashboards...?

**Torkel Ödegaard:** Yeah... Well, our first iteration of it - we had an idea that they were dashboards, in the sense that you could sort of create a better hierarchy there. Like an overview dashboard would be actually like a container as well. But then we did kind of abandon that idea, but they still kind of lived at the same dashboard -- we never truly refactored away from it, so they still lived in the dashboard table, which created all sorts of headache later on.

**Mitchel Seaman:** Yeah. So two years and thousands of hours later, you can now put folders in folders... Which - subtle, but very important. The team right now is also working on restoring dashboards that have been deleted... It's a bit of a teaser for 11.3. But features like that are surprisingly challenging to execute. Once they're there, it's obvious they always should have been.

**Mat Ryer:** Should have just let them put a slash in the name. Sorted.

**Mitchel Seaman:** That was part of the conversation.

**Mat Ryer:** I'm sure, yeah. No, those kinds of things...

**Tom Wilkie:** That's how the folders work on our wiki, isn't it? It's just a slash in the name.

**Mitchel Seaman:** Yeah. The one kind of slightly maybe more grandiose or broader thing that we're actually trying to work toward with folders and organization and management is we really want an organization, even a pretty big one, to be able to operate well, with all the users having the right permissions, in just one Grafana instance or one Grafana stack in cloud.

So the team, since the Grafana 11 release, has been adding functionality to folders as well. Things like being able to easily grant a user access to administer a folder, but only view other folders, so that teams can kind of have their own space, to do their own observability, to set up their own data sources and dashboards, but not step on other people's stuff. So it's a lot of little steps that are sort of building toward that conclusion.

**Mat Ryer:** Yeah. And it's interesting there's a sort of theme of like more grown-up features needed, as more and more people start using Grafana. But there's always a big bunch of improvements to the everyday, the data visualization stuff as well, isn't there?

**Torkel Ödegaard:** Yeah. That's something that we always do. We add some new options to visualizations... I'm always hesitant to sort of -- like, every new feature to visualization needs to really prove itself. I can come in quite late in some PRs and say "But is this really needed?" Because one thing that ever from the start of Grafana I've been so worried about feature creep. It's so easy to just say "Oh, a customer or a couple of users want the feature, so let's build it." But if you say yes to everything - yeah, it turns out like a mess. And Grafana already has so many features, already has so many options in panel edit, for visualizations especially.

\[26:00\] So yeah, it's always a hard thing to know which new option. Especially if it's a UI option, I get really kind of "Yeah, is it really needed?" But many times the answer is yes, because it solves a very broad problem that many users and customers have.

But yeah, so I think the Canvas panel has a new button feature; you can sort of add buttons and actions, which is really cool. The XY chart, kind of GA... This is a really flexible kind of charting/graphing panel that is much more kind of flexible in what types of data you visualize. It's not just time series. You can have anything on the X and Y axis, and it's kind of geared towards non-time series graphs.

Yeah, and a bunch of new data sources, mostly I think on the enterprise side, but... Missing something, Mitch?

**Mitchel Seaman:** No, I think those are the highlights. Yeah, I feel like whatever else is going on in Grafana - like, I might have grand ideas about organizing teams and resources, or we're working on a new app platform thing, or some big new feature... Whatever else is going on, there's always this steady stream of teams in Grafana who are shipping and improving data sources and panels. These are the roots of the company. And it's funny how much -- we were joking earlier... Internally, we talk a lot about sort of the new stuff, the flashy stuff. But when it comes time to communicate a release, I'm always excited and I'm always impressed with what the data visualization team is working on, and what the data sources team is working on. Because it's just -- it's bread and butter. I think this is what Grafana is known for. We've got PagerDuty, Sumo Logic, and a bunch of database data sources...

The only other thing I'll mentioned is in a community with like millions of users, everybody just needs to do three things with the app, but everyone needs to do a different three things... And so yeah, that's kind of the trick, and that's the reason why panel edit can get a bit verbose.

**Mat Ryer:** Yeah. But people shouldn't feel bad if you get a no, or if an idea doesn't make it... But where do the ideas come from? How does that happen? And how do you choose what's important, what's going to make it in?

**Mitchel Seaman:** The short answer is everywhere.

**Torkel Ödegaard:** Yeah, we collect feedback from -- obviously, GitHub is the most direct place. We look at like how many thumbs up does a GitHub issue have, how many comments... Obviously, we get also lots of feedback from customers that use Grafana through Grafana Cloud, and Twitter... And occasionally, when we have conferences, we also get lots of people ideas that can influence what we build.

And I think also a lot internally. We are super-heavy users of Grafana, and through these hackathons and teams just trying to solve their own problems and their own pain points, we come up with a lot of good ideas.

**Tom Wilkie:** We also have paying customers that sometimes ask for things. Let's not forget to mention them...

**Torkel Ödegaard:** No, no, yeah. Definitely.

**Mitchel Seaman:** There were two features in particular in Grafana 11 which are really interesting, because a customer, a big customer's requested them... But then they sort of ended up being really interesting for the community. So Torkel, you were alluding to the button panel... But this is -- so a customer said "Hey, we have an old IT monitoring tool that we have a really handy button that allows us to start, stop or restart the server." And we said, "That sounds really dangerous." They said "We really want it." So we said "Okay, how about this?" What if in our most flexible panel, the Canvas panel, we give you the option to create a button? And that button doesn't just \[unintelligible 00:29:44.03\] You can use it sort of like Postman; you can hit an API, and we'll give you even some basic auth, and things like that. But it turns out there's something very powerful about being able to put an interactive button on a Grafana dashboard. Why not turn on or off your lights, or start the engine in your electric car, so it heats up in the winter? Any number of things. So it's become really interesting there.

And then cloud migration was another one. We're hearing about this from a lot of customers who want to migrate to cloud, but it turns out, especially in the early iterations, it's a really useful tool for even a hobbyist who just wants to migrate over into the free tier of Grafana, and stay there forever, but just have a public instance they don't have to manage.

**Torkel Ödegaard:** \[30:24\] Just on that point, Tom, the customers asking for features... That's usually how some changes go. Like, there's a PR up, someone on the database team maybe added a new option for something, and I come in, "This is stupid. Why are we building this?!" \[laughter\]

**Tom Wilkie:** "Because sp and so and so asked for it", yeah.

**Torkel Ödegaard:** Yeah. But -- and then it's like "Oh, there's actually this group of big customers asking for this." And then I kind of "Oh, maybe it's not so stupid. It makes sense."

**Tom Wilkie:** Yeah, once you've got the context.

**Torkel Ödegaard:** Yeah, yeah. You have to have the context. Yeah

**Mitchel Seaman:** Some of the teams are working on having a bit more structure as well. The last thing I've mentioned, the data sources team in particular - it's pretty concrete, like "What data source should we build next?" So they just put out an early version of a public roadmap. So members of the community or anybody can go in and see what data sources are coming up, or request new ones, or volunteer to make them. Because anybody can make a data source. So some interesting stuff happening there, too.

**Tom Wilkie:** And you've alluded a couple of times... I think, Mitch, you mentioned the app platform, and Torkel, I think you mentioned scenes as well... Mitch, at the beginning you spoke about extensibility, and the work we've been doing to make Grafana more pluggable, more extensible. What happened in Grafana 11 there?

**Mitchel Seaman:** Yeah, so from the perspective of a developer or somebody who's interested in building things on top of Grafana - and that could be for a number of reasons. We have a bunch of partners we work with, who want to build the Redis app, for example, or they want to build specialized apps for monitoring, or for people who want to make data sources or other plugins, we improved the SDKs and a lot of the tooling that's available to those developers.

So the app SDK itself is simpler, better scaffolding tools and better example apps. So it's like, I was able to get started, and I don't fancy myself much of a software developer. We improved the quality of our component library... So there's some easier components that you can build into apps... And then notably, Torkel, another project that you worked on is the scenes library, which basically breaks down dashboard components like panels, or the time range picker, into full-on components that you can put into applications. This is the secret behind why Mat and Cyril could build the Logs app so quickly, for example.

So there are a lot of really improved tools, but I think that's sort of the part of the iceberg that's out of the water. What's happening in the background is that every new product we're shipping in Grafana Cloud, or a great number of the new products we're shipping, are apps that sit on top of Grafana. They're independent, and we need to be able to independently build and release and operate them. So we're in the middle of this huge refactor of Grafana's backend to make Grafana itself, the application, more extensible. That means benefits for us internally, it means benefits for us operating Grafana at scale, but that also means that third-party app developers or people who operate Grafana themselves are going to see a lot of the benefits as well.

**Tom Wilkie:** Yeah, that's a really good segue into the kind of inside baseball section, right? So there's been a lot of changes in the way we build Grafana in the last year. What kind of things have we started doing differently at Grafana Labs?

**Torkel Ödegaard:** Well, the biggest thing is really how we ship software now to cloud. And sort of do that regularly, every week, every day almost, depending on what change -- and have that be the way we build software... Like, okay, this has to work on cloud first. And then do monthly - or I'm not sure how often we do the open source release.

**Mitchel Seaman:** \[34:05\] Yeah, every two months we do a minor release that introduces new features, and then in the intervening months we do a scheduled patch release that's just bug fixes.

**Tom Wilkie:** And this means the quality of the software we're releasing, the open source software - it means it's been tested with our cloud users beforehand, right? So it's meant we're starting to move quicker, it's meant we're releasing higher-quality software... And as an engineer at Grafana Labs, you can discover issues with new features that you've built significantly quicker than waiting for a release and waiting for someone to upgrade, and then use the feature, and then report a bug... Now we find out about it in cloud.

**Mitchel Seaman:** Exactly, yeah. There's always been internally a little bit of a difference between some of the new apps that we're building in cloud, and Grafana... Which was that Grafana was stuck to this monthly or every six weeks release cycle, and that made it really hard for us to get feedback, and most importantly to test reliability before the software went out to a really broad audience. Yeah, Grafana 11 was the first major release... I mean, as much as it hurt the secret \[unintelligible 00:35:05.21\]

**Tom Wilkie:** Yeah, so what does a major release mean in these days, when we're releasing all these features into cloud?

**Mitchel Seaman:** Yeah, exactly. It sort of took the wind out of the sails of the keynote a little bit, because cloud users are sitting there like "I've had access to this feature for the last three or four weeks." But it meant that the release itself was way more stable. We're talking like cutting bugs by a significant margin, and just seeing faster upgrades as a result, as people gain more confidence.

**Tom Wilkie:** That is super-cool. So how are we managing that kind of flow of changes in Grafana? We're launching stuff into cloud on a daily, weekly basis... When does that make it into the hands of our open source users and our enterprise users? And how do they get access to that?

**Mitchel Seaman:** So some of the specific dates and timings are in the details, but I'll do my best. We have released channels in cloud. So we have a fast channel, which upgrades roughly daily, we have the stable channel, which upgrades weekly, and then the slow channel, which upgrades monthly. And then Grafana open source and enterprise release on that sort of bimonthly cadence, at least for new features. So the releases are sort of cycling, and we'll get features into, for example, the stable channel, I think that were from the past (again) week, roughly... But yeah, the minor releases will get software that has been running in Grafana Cloud for at least a week. I think that's sort of the cliff notes.

**Tom Wilkie:** That's for the binaries, right? But on top of that, we're also feature flagging different features.

**Torkel Ödegaard:** Yeah. Technically, this all works through heavy usage of feature flags. So all new features and changes are kind of done behind feature toggles. The tricky part is bug fixes. They are not usually behind feature toggles. So there are, of course, bug fixes and small changes that can introduce bugs. But the interesting part - when a problem is encountered in a new feature, it usually means just, yeah, disable that feature toggle. And this applies to both cloud customers, on-prem customers and open source customers.

**Tom Wilkie:** And I guess for the major release we're just turning all the feature toggles on, are we? Is that what we're doing?

**Torkel Ödegaard:** Yeah. And that's kind of what we mean by GA now, in a sense. That means that the feature is on by default, usually.

**Mat Ryer:** Yeah, you mentioned you can't do it for bugs. Why would someone want to turn a bug back on?

**Torkel Ödegaard:** Well, I mean, some bugs can affect different people, and have different severities. So I guess by solving a small bug, you maybe introduced a bigger bug. But yeah, we don't have feature toggles for those.

**Tom Wilkie:** Or maybe you've named the bug. Maybe it's your pet bug. Maybe you look forward to greeting that bug every morning. I have a spider in my house called Fred.

**Torkel Ödegaard:** \[38:00\] That's actually a problem now, when we are working on this kind of new dashboard architecture, and Scenes, and replacing the old dashboard architecture is that sort of -- we're getting a lot of sort of complaints... Not a lot, but some, where we have some changed behavior due to bugs in the old architecture, that people have sort of grown accustomed to and now expect to be a correct behavior. But yeah.

**Tom Wilkie:** Actually, I can remember when we switched the feature flag on in our staging environment for the new Scenes architecture, and I remember about an hour later we switched it off again... And then a few days later, we turned it on after we'd fixed -- and it went through that cycle for a good number of weeks until it finally stuck. But that's the benefit of feature flags, is they're very easy to turn on and off. You don't have to rebuild the software, you don't have to do a massive redeploy... It's much more lightweight, and de-risks the whole process.

**Mat Ryer:** Yeah, it changes how you develop as well, doesn't it? You're not developing in a destructive way to something else. Sometimes you build something alongside it, which is a good way to do it anyway, sometimes.

**Tom Wilkie:** So there's one feature, one kind of inside baseball thing we did in Grafana 11 that took seven years, I think.

**Mat Ryer:** What?

**Tom Wilkie:** ...that no one's mentioned yet. Torkel, do you know what I'm talking about?

**Torkel Ödegaard:** Is it the Angular?

**Tom Wilkie:** Yeah... Tell us about the Angular deprecation.

**Torkel Ödegaard:** Yeah, well -- I mean, Grafana, as we said in the beginning, is soon 11 years old, and through that time, technologies have changed. So in the early days we started with a JavaScript frontend framework called Angular 1. So there's a new modern Angular that's not the same library. So this is a library that Google deprecated, completely kind of abandoned and replaced with a new version of Angular, that is completely different. But anyway, so we started switching and rewriting Grafana to React starting in 2018... And piecemeal replaced component by component, and also started working on a new panel and plugin architecture based on React... And it just took a long time, because I've likened it with replacing all the parts of a car as it's speeding down the track. And also being compatible with all the car extensions that people put on their cars in Grafana plugins, which has been very challenging.

So at Grafana we try really hard to not break existing setups, and existing plugins, and existing dashboards, because we want people to upgrade; to get new features, take advantage of new capabilities. So having a really strong focus on backward compatibility has made this process take a lot longer than it would have otherwise... Because we need to make sure that everything still works. And old plugins, even though they're written in Angular, might still work.

But yeah, so this journey is now finally at an end. We're still kind of toying with how to fully remove it, in a way that sort of -- well, at least open source, and maybe on-prem customers can install Angular support as a plugin. So they could sort of -- because that's one big problem now, is that sort of customers actually have to rewrite their old plugins into React, and that takes time.

**Mat Ryer:** ChatGPT could probably do that, though \[unintelligible 00:41:27.26\]

**Torkel Ödegaard:** Yeah, probably.

**Mitchel Seaman:** That was a lot of the work this year, was reaching out, and it was almost like doing a full inventory of all of the plugins.

And we don't have a real visibility into what plugins people use, but this is one way to find out specifically what plugins people are using, especially those that used Angular. So it was like a big effort of reaching out to every developer of every plugin that included Angular code, and getting their kind of collaboration. There was actually a lot of interesting care and feeding. In fact, you were asking where the ideas come from... We added a lot of features to panels like time series, for example, or our new mapping panel, the world map panel, to replace the old Angular panels that we had before. Like, really getting to parity, and bringing plugins up to date.

**Tom Wilkie:** \[42:16\] I like that you mentioned the world map there, because I was always wondering, do we have like a Moon map and a Mars map panel as well, or...?

**Mitchel Seaman:** I bet you could put those in. This is the most customizable map tool I've ever seen. Like, you can draw shapes on the map... I actually wouldn't be surprised.

**Torkel Ödegaard:** You could just use another resource pack.

**Tom Wilkie:** It wasn't a serious question, but...

**Mat Ryer:** Well, you really could.

**Tom Wilkie:** ...now I know you can. So Grafana could officially be on the Moon if we wanted it to be.

**Mat Ryer:** Yeah. I don't know if world map is specific enough, because it doesn't mention which world...

**Tom Wilkie:** Oh, fair point. Yeah.

**Mat Ryer:** So if you want to be future-proof --

**Tom Wilkie:** \[unintelligible 00:42:47.26\] very much a many worlds interpretation, aren't you?

**Torkel Ödegaard:** That's why open-ended.

**Mat Ryer:** Oh, it just works on any world. Yeah. Use your world.

**Mitchel Seaman:** Didn't \[unintelligible 00:42:56.06\] land a probe on the Moon using Grafana?

**Tom Wilkie:** Using Grafana. They were using Grafana whilst they landed \[unintelligible 00:43:04.09\]

**Mat Ryer:** They used the Canvas button.

**Mitchel Seaman:** You want Martians operating Grafana...

**Mat Ryer:** They clicked that Canvas button, yeah.

**Tom Wilkie:** So we're coming up towards the end of our time now... But before we go, what are you working on now? What does the immediate future hold for Grafana? What's going to be in Grafana 12? Not to spoil a release that's like nine months away...

**Torkel Ödegaard:** Yeah, well... I can tell you some things that I'm excited about. And now that we're kind of wrapping up this new dashboard architecture and migration to it, we are actually at a point that I'm really excited about, where we can explore really impactful new dashboard features and changes, which we haven't done in a long time, just because the old dashboard architecture was still too entangled in that old Angular way of working.

So that's kind of what the new scenes architecture does, is like get completely rid of that and now makes it more easy to add more dynamic features. And one of the things that excites me there is making it easier to build more dynamic layouts of panels, maybe tabbed layouts, and more flexible positioning of panels that could make defining dashboards as code easier. So you don't have to position every panel individually, and having it more be sort of an open - like, "Yup, as long as this panel is 300 pixels high and 400 pixels wide, I'm happy." And then the layout system will kind of position panels depending on your screen size, and take advantage of more height if that's available, or squeeze them if there's lots of panels you want to show. So it makes it a lot easier to do conditional panels, and more dynamic features like adding a Group By, which will add more panels depending on how many dimensions there are, say. So exploring the things that new layouts will enable makes me excited.

**Mitchel Seaman:** \[45:06\] For sure. We're talking a lot internally about making Grafana easy to operate and extend in cloud, which of course means nice things, like speed and reliability in the codebase, but also, there are some cool opportunities that come out of it, like the ability to search for any resource in Grafana by a lot more attributes; so making search faster, more powerful, and a little bit more accessible.

And then I think a lot -- I sort of wake up in the morning thinking about how to help users who have more scale, and users who have less patience than what Grafana supports today. So being able to sort of pave the paths in our product, sensible defaults, avoiding that empty screen, better guidance... Basically, moving advanced features into advanced mode.

And on scale, we talked a lot about as code, but also, I had mentioned a little before about helping a bigger org to do observability at scale, and organize teams and stuff in Grafana according to what makes sense to them.

**Tom Wilkie:** You also alluded to a data source roadmap. Do you happen to know which ones are coming soon?

**Mitchel Seaman:** Okay, so there are a lot of plugins coming up, but before I said, there's some that have just come out. So the data sources team in the background has made some improvements to the way that they ship and manage data sources, that's made it possible to ship a lot really quickly. So just listen to this list. These are data sources that have come out so far this year. And for reference, we usually put out four or five data sources. We've got PagerDuty, SurrealDB, DynamoDB, the Infinity plugin is supported, CosmosDB, Yugabyte, Catchpoint, Cloudflare, Adobe Analytic, CockroachDB, Netlify, Drone, Zendesk, and Atlasian status page. We're talking 15 data sources in the first half of the year. So there are a lot coming out.

Yeah, up next, we got some nice ones: Greylog, Google and Amazon managed Prometheus, CoreLogix, Vercel, Pingdom... Basically, we're getting to the end of the long tail of observability tools. We're spending a lot of time covering databases, like direct integrations to databases, so you can visualize application data, and then we have some really interesting forays into developer tools. There's probably even more stuff in the public roadmap, but there's a lot happening in data sources. It's almost like a different podcast.

**Mat Ryer:** That sounds great. And if you want an up-to-date view, Mitch, what's your phone number? Just in case anyone wants to...

**Mitchel Seaman:** The American or the Swedish?

**Tom Wilkie:** Or street address, so they can just turn up at your house.

**Mat Ryer:** Just go around and ask Mitch. Well, Mitch, where do you brunch? Where do you brunch? They could maybe meet you for --

**Mitchel Seaman:** There is a really nice cafe around the corner.

**Mat Ryer:** There you go. Go there.

**Mitchel Seaman:** I can't say it. I don't want it to get popular.

**Mat Ryer:** Meet Mitch there. No, but really, how do you discover what data sources are available?

**Mitchel Seaman:** It's on GitHub in the Grafana org. So yeah, github.com, or Grafana projects, and there's a view. Maybe we can put it in the show notes.

**Mat Ryer:** Let's put it in the show notes. I was about to say that, Mitch. Beat me to it.

**Mitchel Seaman:** Great. You could set up a cool bitly.

**Tom Wilkie:** Oh, is that still a thing?

**Mitchel Seaman:** Yeah. I still use it. I use a URL lengthener, because I like to use \[unintelligible 00:48:01.29\] Do you know what I mean?

**Tom Wilkie:** It just adds like a stutter.

**Mat Ryer:** Just adds loads of stuff to it. It's just massive. It's a megabyte. I'm like "Check out this link. Here's a floppy disk." \[laughter\]

Okay. Well, sadly, that is all the time we have for today. Thanks to our special guests, Torkel Wilkie, Mitch Wilkie, and Tom. I'm apparently Mat Wilkie... Thank you for listening. We'll see you next time on Grafana's Big Tent. Get your bass guitars ready if you're going to play along at home. Here we go.
