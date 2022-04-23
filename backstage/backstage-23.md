**Jerod Santo:** Alright, we're backstage, and I'm Jerod. I'm joined by Parker Selbert of Oban fame. What's up, Parker?

**Parker Selbert:** Hey! Nice to be here, Jerod.

**Jerod Santo:** Nice to be here as well. We're both here, we're both having a good Friday, I hope... I'm doing alright; I've got a little bit of a cough, but hanging in there... And excited to talk to you today about your project, because hey, we've been using it; we've been open source leeching off of it (as you do) for a couple of years now... And listeners of our Ship It podcast probably heard the story of you listening to Ship It, finding out that we were using Oban in some sort of incomplete fashion, and then slipping into our PRs, as it were, and fixing up and extending our use of Oban on our Changelog.com repo, which was pretty cool for us.

It's cool to have somebody listening to the show be like "Hey, I wanna get involved and create a real valuable contribution", and it's just a beautiful thing. So again - I know we've thanked you for it already, but I'll thank you again here on Backstage for doing that... And really, for building this thing which we use for -- it ships our episodes, it runs our stats, it does comment notifications... It does all our background things, so thanks for it.

**Parker Selbert:** Yeah, you're welcome. And you're welcome for some great fodder for Ship It in the - was it Kaizen?

**Jerod Santo:** Yeah, the Kaizen episodes. Yeah, we always look -- I mean, one of the things why we open-source, even back in the day, was obviously because we've built our careers on open source, so it felt weird to be closed source... Even though we didn't really think anybody really would care so much about our website being open source, but...

**Parker Selbert:** No, people reference it all the time.

**Jerod Santo:** They do. It's actually been pretty cool. It's probably the most well-known open source Phoenix app that's just like a simple CRUD web app that runs a production website. I think it's been useful for people for that reason, because it is almost copy-pastable at times, because it's just the kind of websites that most people build, right? There's not much actually going on there.

**Parker Selbert:** Yeah. There are a few other pretty notable, bigger open source Phoenix apps. Plausible is another one, for analytics people... And it's the only one I can think of at the moment, but I know there are a few others. And most of them tend to use Oban, which is cool...

**Jerod Santo:** Yup.

**Parker Selbert:** And I figure -- especially for the Changelog, I know people are looking at this all the time. So whatever is there should be at least somewhat idiomatic, because people are looking into it as a resource for learning. And it should be up to date, and pretty much by the book \[unintelligible 00:02:40.20\]

**Jerod Santo:** Yeah. Not the way that we were doing it; the way that you would do it.

**Parker Selbert:** Well... It's not your fault. I think Alex Coutmos \[unintelligible 00:02:47.16\]

**Jerod Santo:** \[laughs\] It was Alex's fault, yeah.

**Parker Selbert:** I'm gonna blame Alex for all that.

**Jerod Santo:** That's what I try to do, at all times... You know, how many lines of code can I get Alex to write so I have someone else to blame when things go wrong...?

**Parker Selbert:** Yeah.

**Jerod Santo:** He did introduce it, because we worked with Alex to build our comment delay feature. Really, comment editing was the idea that he came in to do... You know, Twitter can't get it done, but we got it done much more quickly than Twitter could. Famously, they're working on it now. But you've got that problem of "Okay, if we're letting somebody edit their comment..." And really, our implementation is just for typos and stuff. Not going back later and addending, like you do on Reddit. I don't really like the edits on Reddit; like, you'll come back to the post and here's like three edits, and they decide to write a book because their comment gets popular. I think that's not so cool. But this is just for typos... And you always see it after you hit Submit.

**Parker Selbert:** Oh, sure.

**Jerod Santo:** \[00:03:43.10\] And what that required us to do then was basically delay our comment notifications, because we don't wanna get those non-edited versions sent out and then they wanna change it right away. So before that, it would just send immediately -- it would background, but it would just use Elixir features to background it and send off the comments. And then once we added the Edit button, it's like "Well, we've gotta delay the actual notification by 5 minutes, or whatever we decided was the comment window." And that's when Alex was working on that feature, and that's when plain, old Elixir/Erlang features just weren't cutting it, and he's like "Hey, can I use Oban?" And I was like -- I had actually heard of it from... Is it Uku? I think it's Uku, at Plausible.

**Parker Selbert:** Yeah.

**Jerod Santo:** Him and I were doing a jam session, coding on a feature that I wanted for Plausible. We're plausible customers...

**Parker Selbert:** Oh.

**Jerod Santo:** And him and I pair-programmed on a feature on a livestream a couple of years ago, to -- I can't remember what it is; I can't remember the feature. It was some sort of real-time thing... No, I know what it was; it was a notification in the case that your website gets spiked, like by Hacker News or something... And we were building that, and he was showing me how he was using Oban. I hadn't heard of it prior. And so I was like, "That's cool." And he really spoke well of it.

Then when Alex wanted to use it, I was like, "Well, if it's good enough for Plausible, it's good enough for us. Sure, go ahead. And Alex thinks it's a good idea... Why not? Go ahead and use it." And so he was the one to blame. But it definitely served that purpose very well.

He even asked me at the time, "Do you want me to go and convert all your other backgroundy things?" And I was just like "Nah..." Parker will do it eventually... \[laughs\]

**Parker Selbert:** Eventually... It eventually came through.

**Jerod Santo:** Yeah.

**Parker Selbert:** I think one of the other things that I had removed there was Quantum, which is still pretty popular and used in a lot of places to do cron, but it doesn't -- I don't wanna speak badly about things too much, but it just... When you have multiple instances, it doesn't tend to hold up very well.

**Jerod Santo:** Yes. And I had felt that. So I was using Quantum for -- the main purpose of Quantum was to run our publishing queue. So the way that we log news, which - our episodes also go through this exact same flow, is we have this very simple queue that gets set up. You can schedule inside of the queue, but... You can basically just push things to the front, put them at the bottom... And the idea there is -- you know, we log the news, but we don't log it throughout the day oftentimes. Like, I'll hop in and just queue up 4-5 things. A lot like a buffer. But I don't want them to go out immediately; I'd like it to dole it out throughout the day, so it's more of like a thing that refreshes every hour, or something like that.

So that queue basically has some rules in it for publishing, and the way that we run it is with Quantum; it just wakes up once a minute and decides if it's gonna publish anything that minute. And then there's logic around how to spread it out etc.

So that was Quantum... So I definitely have felt that problem, because when I would connect to our server to futz with stuff, as I tend to do, I would open up IEX, the shell, inside of the context, and Quantum would start again, and it would try to publish news. So I'd have the production news publishing thing going on, and then my shell also trying to... So there were times -- there was a weird bug, which I never found, where every once in a while it would post one notification twice. It wouldn't actually publish twice, but it would notify twice... Specifically to Slack. So we have like a Slack notifier for new episodes, and it would publish the news item, and it would sent to Slack "New episode!" And once a quarter, it would double-post that. And I always thought it was because Quantum somewhere had two instances -- like, there's no singleton thing. Like, there was two of them at some point, somehow, and there's a race condition that I never checked... That's disappeared, by the way, with Oban. So I definitely felt that with Quantum, which is basically like a cron scheduling library. Cron-style.

**Parker Selbert:** A cron scheduler, but it's not persistent. So the difference -- so Oban uses Postgres as the source of truth, and therefore it's pretty hard to have duplicates when you have a centralized place where you're putting things, with all the uniqueness constraints and checks.

**Jerod Santo:** Right.

**Parker Selbert:** \[00:08:03.29\] And Quantum has to coordinate through distributed Erlang to figure out who is leader, and it's therefore subject to split-brain kind of setups. But signing into the IEX situation happens to people with Oban as well.

**Jerod Santo:** Oh, it does?

**Parker Selbert:** So there are particular -- well, not necessarily that you'll get duplicates of something, but you know... You don't really want your shell to start running jobs, usually.

**Jerod Santo:** Right.

**Parker Selbert:** You put some checks in place...

**Jerod Santo:** Yeah. I haven't noticed it since. So I wonder if maybe the way Alex set it up, it doesn't do that... Or I wonder if it just doesn't -- maybe it's not chatty; maybe it's still doing things, but... I haven't noticed it since.

**Parker Selbert:** I think there's a check, actually, that when it opens, it says "Am I in an IEX shell?" And if it is, then it just doesn't start running any queues, that kind of thing.

**Jerod Santo:** Smart. There you go. I like that. I had another train of thought that I just gapped on... So take me back to Oban creation time. It's been a while... I wanna talk about what you're trying to do with it, because it's interesting, and it seems like very much following after Mike Perham's footsteps, to a certain degree, with the Sidekiq stuff, which he had much success with... I wonder how that's going etc. But tell us about building Oban, maybe even your Elixir journey etc, in brief. How you got into it and why you built this thing.

**Parker Selbert:** Sure. So the Elixir journey - I don't know if it's that different that other people who used to be in the Ruby community, and kind of wanted to push out a little bit...

**Jerod Santo:** So you're one of us.

**Parker Selbert:** Yeah. But I started with Elixir back in 2013, so I've been exploring it for a long time... And then got into it and introduced it for professional work probably six years ago. So it had been a while there.

And the company that I had contracted at for a long time, and which I'm an employee at now, dScout, was a Rails app, and he had run into lots of different load problems, as people do...

**Jerod Santo:** Yeah.

**Parker Selbert:** ...and had pushed the boundaries of what Redis can do as a cache, and it wasn't working out. So I managed to convince the rest of the team and the people there that Elixir would be a good fit. And that actually worked out really well. The problem that that sort of introduced is that we did a lot of background work through Sidekiq in the Rails side of things, and we wanted to shift work over to the new Elixir side of things. And so I started making a port of Sidekiq called Kiq. And that went pretty well. We still have just a couple of things that run on that that haven't been moved over... But as part of that, we were using Sidekiq Enterprise on the Rails side, and there were features there that we just couldn't replicate, or didn't have. And as part of the license agreement, you're not allowed to reimplement them, so that kind of left us in a place where we needed those features, but there was no tool that had those features. So in free time, outside of work time, I started a new project.

Redis, around Redis 5, introduced this notion of streams. Streams were kind of Kafka-esque. And I don't mean that in the way people usually say Kafka-esque, with like the whole metamorphosis thing, but really like inspired by Kafka.

**Jerod Santo:** Okay.

**Parker Selbert:** And the idea was that you just had a stream of jobs, or a stream of events, and then you could handle those events at any particular place, adn then augment them and kind of push them back through. And that's directly what led to Oban. So it was kind of the combination of Sidekiq style queues and jobs and workers, but then having them stick around and actually be persistent.

So a lot of the stuff that makes Oban as powerful as it is for doing uniqueness and workflows, and the things that people really want to use it for, is because it's in Postgres, and it keeps the jobs around after they ran... Which means that for a cron job I can say "Did I run this job an hour ago?"

**Jerod Santo:** \[00:12:05.17\] Right.

**Parker Selbert:** I don't rely on some side effect.

**Jerod Santo:** Like, built-in observability.

**Parker Selbert:** Yes, totally built-in observability. And that's what led to the open source version. And of course -- I don't know, people just keep asking for things...

**Jerod Santo:** \[laughs\] That's how it works, man...

**Parker Selbert:** ...and the more adoption you have of an open source project, the more weight that's on you as a maintainer, because you want to help people, you want to fix bugs, you want to add features... And really, it's hard to make that sustainable. So we -- when I say "we", I mean Shannon, my wife and partner in our company, Soren, which we had ran for 11 years...

**Jerod Santo:** Okay.

**Parker Selbert:** We used to do consulting.

**Jerod Santo:** Now I get it, Sorentwo. Sorentwo...

**Parker Selbert:** Sorentwo, yeah. There are two of us.

**Jerod Santo:** Because you and your wife are married, obviously, because that's how she's your wife, but also business partners in this Soren business, which was a consulting thing you guys did.

**Parker Selbert:** Yes.

**Jerod Santo:** I'm tracking.

**Parker Selbert:** And we stopped with the consulting and then kind of pivoted to where we were productizing Oban to support the open source side, and also just hopefully make it into a sustainable business. So that's where the Oban Web and Pro stuff comes in later.

**Jerod Santo:** Cool, cool, cool. So that reminds me of what I was thinking before, that I lost - and this is the nice thing about Backstage, is we just let it fly... So we won't edit that out, we'll just loop it back in and make it part of the conversation. So we recently just switched to Fly. In fact, we haven't talked about it on Ship It yet; we're gonna do Ship It episode 50, because our Kaizens are every ten... So I think Gerhard is on like 47 right now... Anyways, we're recording soon, but we are now on Fly...

**Parker Selbert:** Wow.

**Jerod Santo:** ...and managed Postgres as well, so we've made that switch. Kubernetes - goodbye. I guess I'm breaking news here... Hopefully, Gerhard doesn't mind me scooping him...

**Parker Selbert:** It's news to me. I'm excited for this.

**Jerod Santo:** Yeah, it's cool. And I'm excited as well, because it feels a lot like Heroku felt, and I was just like a Heroku lover for years, and still am in many ways... I just love that style of platform. And Fly has that feel, where it's like "Fly logs, Fly shell, Fly SSH shell." The SSH thing is new to me... Or Fly SSH console... Anyways, I'm still learning. But one thing that's cool about Fly - and you know, if you listen to Ship It, you know that on our Kubernetes setup we had so many problems with Postgres inside of Kubernetes... We ended up being like single-instance Kubernetes people, which is like - you know, it should be clusters, and stuff. But we were down to like one application instance, one database instance, and then of course we had local storage, which was also holding us back, so we switched over now to S3, and we can now easily switch to Fly, because there's no local disk there.

Anyways, I say all that to say this - when we switched to Fly, Gerhard was like "Hey, do you wanna crank up the nodes?" Because that's the advantage, you can just scale it up. And I thought, "What could go wrong here?" And I was like, "Well, Oban is probably smart enough to handle that, right?" Because everything's in Postgres, so it shouldn't be a problem to have all these application instances running, because you have that single point of truth... And so I was like "Sure, man. Crank it up." And we cranked it up, and everything's been running just fine... And I think that's the advantage of having the architecture that Oban provides, is you have everything in Postgres, so you don't have to worry about duplication and those kinds of problems across your nodes.

**Parker Selbert:** Yeah. Scaling -- well, I guess there are different types of scaling. There's parallelism, and then there's sheer volume. And there have been improvements over the years for both... Because there are some companies that run 25-30 nodes, all running Oban jobs. But even at dScout we routinely autoscale up to (I think) 12, when we have surges of videos and things that we have to process...

\[00:16:02.08\] And then there are also some companies that run 50 to 100 million jobs a day... So there's a volume happening there that amazingly Postgres hold up with pretty well. But it's awesome that you're on Fly. We've also -- so the Oban Pro site is hosted on Fly, and all of our private packages are hosted on Fly. And we actually do it as a multi-region thing. So we have nodes in Australia, and then one in Tokyo, and in Europe...

**Jerod Santo:** Nice.

**Parker Selbert:** ...so that it's globally distributed. And it adds some extra complications to how you have to architect your app.

**Jerod Santo:** At the application level even?

**Parker Selbert:** At the application level.

**Jerod Santo:** How so?

**Parker Selbert:** If your database is in -- unless you're doing replicated databases, which...

**Jerod Santo:** That's what I was wondering. If you had a single Postgres instance, are you like routing your writes, or...?

**Parker Selbert:** Yes, pretty much. Yeah. We have a single instance in Chicago, which -- hey, when you live by Chicago, it's very snappy.

**Jerod Santo:** It's nice, right? Yeah, yeah, yeah.

**Parker Selbert:** But you can't do roundtrip calls to Postgres from Sydney, Australia, or you're gonna be in a world of hurt. So we actually just route any requests that have to touch the database to Chicago... Which is a pretty minor part. Say fetching packages - we cache everything using an RPC call at the edge node, and then it does the license check from there, and then pulls stuff, and caches it locally for packages, that kind of thing.

**Jerod Santo:** It would be cool if Fly could provide that kind of a layer, where you could set that up... Because I think the 80/20 rule - I think 80% of us will have that kind of a setup eventually, where it's all these app instances in one database, and reads can go from anywhere, or anything that needs to hit, or especially write to the database should go through this specific route. And it seems like that wouldn't necessarily need to be an application-level concern. If there could be some sort of a mesh layer or routing layer at Fly's level or at the platform level. I don't know. How much of it is conditional on business logic, and stuff?

**Parker Selbert:** They have this relay thing that you can do, so that when calls come in... I think their demo is partially -- they've kind of shown it in Rails, but there are also Elixir libraries specifically for it. Like, it knows if it's on the primary node, and if you're doing your write. But when it sees that you are, it switches that to an RPC call automatically, where it tries to bundle those... I think it's pretty actively worked on by some of the guys over at Fly, like Mark Ericksen and Chris McCord.

**Jerod Santo:** Cool. So it's pretty good, and probably getting better. I think that Fly's platform so far feels novel. It feels like it's new in many ways, in terms of user experience. You can tell there's a lot of rough corners, and yet you can see a lot of potential there. So it was kind of fun to be in somewhat early still... I mean, it just takes a while to build out a lot of the creature comforts of a platform, as a developer, as a user, and there's definitely areas where you're like "Okay, this could use some work." But it's fun to be there early...

**Parker Selbert:** Oh, yeah.

**Jerod Santo:** ...and to be involved with some of the people who are working on it and provide feedback for those things. It's been fun. We're just getting started, but it's been cool.

**Parker Selbert:** It's impressive how much they've built, and how much momentum and buzz they've managed to get. But I've experienced the rough corners... You mentioned Heroku before, and there are certain things that as a long-time Heroku user you just kind of expect.

**Jerod Santo:** Yeah...

**Parker Selbert:** Like, I get automated backups on my Postgres database, right?

**Jerod Santo:** Right.

**Parker Selbert:** Or I can just hook up a log drain, right? ...but they're not quite there yet for those things.

**Jerod Santo:** Yup. I think there's a lot of low-hanging fruit there. I think they know they're not there on lots of things, so I expect massive improvements in certain ways as it gets going. And then eventually, it's again, the 80/20 rule, or it's like the polish rule. It's like, at a certain point, Heroku has been polishing for so long that it's hard to get that level of fit and finish... But at this point they can make huge gains in probably a short amount of time on those kinds of things.

**Parker Selbert:** \[00:20:00.29\] Well, Heroku -- it's funny... So Oban has to work for pretty much anybody who can run an app. So if you have a Postgres instance and an Elixir app, you should be able to run Oban. But there are very different categories of that. You can have a clustered app where you're using distributed Erlang to send messages between nodes, which is how you would want to do a lot of pub/subby kind of stuff. Or you could be in a pretty vanilla situation where there's no PgBouncer kind of thing in front of Postgres, and then you can use Postgres for pub/sub. But because Oban has to work in any of those situations and you can't necessarily determine whether they are clustered, or whether they have PgBouncer, there's a lot of work to do, like lowest common denominator kind of coordination between things.

**Jerod Santo:** Hm... Yeah, that sounds like a lot of effort there. So how's the business side going? Are you getting there? Mike's Sidekiq fame kind of set the standard of like "This can be done", at least in Rubyverse you can get it done... In Elixir land - I don't know. I know there's lots of successful businesses operating on Elixir and Phoenix, and so there's money there, there's success there, there's apparently load and scale there; just talking a little bit about a few of your users... I wonder how much of it translates into Pro and Web.

**Parker Selbert:** Yeah, we didn't know at first either. I mean, the Elixir community compared to the size of the Ruby community is quite a bit smaller... And it's really hard to estimate the size. I mean, you can look at, say, stars on GitHub, or package downloads and things like that, but it's really hard to tell how many companies out there are using something in production.

**Jerod Santo:** Right.

**Parker Selbert:** And I think it's actually gone surprisingly well...

**Jerod Santo:** Awesome.

**Parker Selbert:** We're very pleased with it. It's not going away any time soon. It more than sustains the open source development side of things.

**Jerod Santo:** Can you quit your job?

**Parker Selbert:** I can't say that here.

**Jerod Santo:** \[laughs\] Are you thinking about it?

**Parker Selbert:** Yeah, we're not there... We're not there. But I think the Elixir community is healthier than I would have even guessed. So I can say that much.

**Jerod Santo:** Hm. I can definitely say that I've been pleasantly surprised by how many folks are using Elixir as well. I would say growth-wise it hasn't wowed me in terms of over the last five years, like how that goes... There's definitely more momentum behind a few other languages at the moment, but I think the quality of Elixir folks is super-high. Everybody I've met and spoken with and worked with in the community has been just stellar people. So definitely a solid community, and I'm sure there's people out there tracking \[unintelligible 00:22:56.18\] tracking businesses using which platforms and which languages.

Now, most companies reach a certain level of scale and success - they don't have just a single thing going on. There's usually polyglot things happening across these larger companies, for sure.

**Parker Selbert:** For sure.

**Jerod Santo:** But I'm happy to hear that there's enough people using it and making money off of what they do in order to turn around and upgrade to the Pro and the Web deal. Do you wanna talk about the differences, so people understand where it breaks down?

**Parker Selbert:** Sure. I wanted to say one thing real quickly... There are languages like Python and JavaScript that are of course just killing it; there's huge, huge communities...

**Jerod Santo:** Yeah, yeah, yeah.

**Parker Selbert:** And every once in a while, for a while - my wife and I were discussing, "Why didn't we build it for JavaScript, or whatever it is?" But then you look, and - that's a massive community, with widely different experience levels... I don't know, there's something that's safe and tame about Elixir. Just the tightness of the community... Which actually has made it a little nicer. I mean, we have about ten open issues at most, ever. Not 100, not 200. So it's not this overwhelming swarm of problems.

**Jerod Santo:** \[00:24:19.19\] Right. Well, I can speak to that a little bit from a podcaster's perspective, because we've also invested in communities... And we've been asked to create an Elixir podcast umpteen times. I've always been very pleasantly surprised - maybe not surprised, but I just feel like there's lots of good Elixir podcasts. I think for a small community, Elixir has podcasters.

**Parker Selbert:** Over-represented.

**Jerod Santo:** Yeah. There's good shows to listen to. We don't really have anything to add. So I've always just said "Nah, we can't really..." I had one idea for a show that I think would be a unique value to the Elixir community, but I never executed on it. But we're in the Go community, we're also in the JavaScript community, and I'll put air quotes around "JavaScript community", because it's so big and diverse that we've had a harder time curating and fostering what feels like community for JS Party than we have for Go Time... Because the Go community - which is large at this point, but there's a tight-knit factor with Gophers, which I also see in Elixir, where it's just been easier to create a community, or be part of the community. Feel like you are part of it.

**Parker Selbert:** Yeah.

**Jerod Santo:** Where JavaScript is like - you know, a person who writes backend Node APIs all day, and a person who's working solely in React, or maybe they're building full-stack websites and writing CSS and designing stuff, they don't have all that much in common. So it's been a little bit harder to feel like there's a community there, because it's so big.

**Parker Selbert:** Yeah. It's a highly fragmented community, and I can see -- I don't know, I'm die-hard Vue, I don't wanna hear anything about React, so I'm not gonna listen to this episode.

**Jerod Santo:** Yeah, exactly. \[laughs\] Yup. Well, Vue is well-served for podcasts as well. That's the other thing that's nice about JS, because the community is so large that there's sub-tribes; you can hang out with your little sub-tribe.

We've always tried to pull everybody together, kind of "the more, the merrier" attitude, and I think that we're succeeding there. I think JS Party is serving the web development community at large, but it's just been harder to make it feel like -- it's almost like when there's less of us, it matters more. It's kind of like band of brothers. We're the Elixir folk, and nobody else is, so we're tight-knit.

Anyways, I can see the draw of larger... Python - again, so diverse, in terms of opportunities for customers though... But happy to hear that you're having success. So break down Oban and where you drew the lines for paid versus free, and all that jazz.

**Parker Selbert:** So the original plan was to only have Web. So Web is a live application, which was very early adopted \[unintelligible 00:27:03.03\] We went through all the growing pains associated with that. And that was pretty much always a thing - I mean, for three years - but it felt a little bit limiting. We kept adding certain features to open source that were definitely enterprisy side features, and then we'd get requests for things like workflows and batches, and the kind of things that seem obviously like nice additions, but you can't really bundle that with a web view, which is just a nice dashboard to control things...

**Jerod Santo:** Right...

**Parker Selbert:** So where do you put it? You can either put it in open source and then sort of lose the ability to monetize that, or kind of carve it out. So the reason that Oban is on 2.0 is there was a split from 1.0 to 2.0 where some things were carved out, and then a whole lot of fixes and features and changes went in there, and we split out a couple of those things into the Pro packages. And Pro has been a pretty big focus since then, and has grown quite a bit.

\[00:28:08.25\] So web is the UI, and Pro adds things that you could do with Oban on your own, but it makes them a lot easier. So doing batches with callbacks, doing workflows, which is like a directed graph where there's dependencies between jobs, and they only execute at certain intervals... And dynamic cron, so you can define, say, a cron schedule per account or user... Things like that. Things that just build on whatever the open source version is.

**Jerod Santo:** So how does Pro work with regards to the logistics? Is it just a license? Is it a separate package that you have to have like auth to get at, or how do you actually handle distribution and protection of your Pro deal?

**Parker Selbert:** So it's kind of both. So there's a license to -- well, we host our own Hex repository. So there's Hex.pm, and people publish their Elixir packages up there. We have our own host, which is just wrapped in our Elixir application, which actually sounds like a bigger deal than it is. It's a very small amount of code. And we publish packages that are identical to a Hex.pm package, but we put it in S3 as a secure location, and then when somebody signs up for a license, they get a key. Eventually, they can have multiple keys, and we can manually do that if people have a large team and they want to share them.

But when you go to install -- so you add the repo as a known source, and you provide the license key, so when you go and fetch Oban Web or Oban Pro, it checks the license key. If you have access, it relays it back down. But it's distributed as just another package that you install along with everything else.

**Jerod Santo:** Gotcha.

**Parker Selbert:** Same thing for web. It's totally standalone, so it doesn't have to hook into the asset pipeline, it doesn't require you to install JS libraries or styles or anything like that. It's all self-contained.

**Jerod Santo:** Okay, so Web is running alongside your own infrastructure. It's like a web view of your Oban.

**Parker Selbert:** Yes.

**Jerod Santo:** It's not like a hosted service where your Oban is hosted elsewhere, or sent anywhere. You're not hosting that.

**Parker Selbert:** We're not in that business. We don't want access to anybody's data.

**Jerod Santo:** That sounds nice. Yeah, keep it off -- don't go into hosting. A lot of people go into the hosting side, where it's like "Okay, if you wanna host it yourself, cool. But if not, we'll host it for you." But I guess for a background job thing it doesn't really make as much sense to do that.

**Parker Selbert:** Yeah. And especially the fact that it integrates with your database. It's one of the nice parts. I want to do these things in a set of transactions, and I also want to insert my jobs as part of that same transaction.

**Jerod Santo:** Right.

**Parker Selbert:** And I think when you look at other tools that are built on Redis or built on a standalone thing, like Factory, you don't have any of those guarantees, because you can't put it in the transaction. You don't get a logical backup with your Postgres database. You can't replicate it to, say, staging, to see what things were like in the past. So you get some benefits there too, just from the integration side.

**Jerod Santo:** Do you ever get any Postgres pushback? Like, "Hey, Oban looks sweet. We're using Elixir, but we like Mongo" or "We're actually backed by FaunaDB", or whatever. Is anybody ever like "Postgres is my blocker?"

**Parker Selbert:** No. Not once.

**Jerod Santo:** That's awesome.

**Parker Selbert:** But I will say that if you go and just look at the download counts for Elixir packages and you look at Postgrex versus like the MariaDB or MySQL, it is like 100 to 1... I don't know, it dwarfs it. But the only two requests or kind of comments we've gotten are 1) around CockroachDB, like "Is this compatible with CockroachDB?" And I think so. I don't know. They have a Postgres wire protocol...

**Jerod Santo:** Well, they claim to have wire compatibility with Postgres, so...

**Parker Selbert:** \[00:32:07.12\] It could be, but we haven't tried it.

**Jerod Santo:** I guess maybe the onus is on them to be, sort of...

**Parker Selbert:** Yeah.

**Jerod Santo:** Like, it wouldn't be because you tried to, right? You haven't tried to do any Cockroach things...

**Parker Selbert:** No.

**Jerod Santo:** You're just saying like "Well, they allege to be wire compatible with Postgres, so it should work..."

**Parker Selbert:** Yeah, it should work, but we haven't tested it. And the other one is SQLite. People asking about "Does it work with SQLite?" And I can say the answer is definitively no. But we've shifted so that there's an -- it's called an \[unintelligible 00:32:38.01\], but it's essentially the adapter. All of the database interaction stuff goes through that, and it is conceivably possible to write a SQLite Oban engine, and it should work.

**Jerod Santo:** So you're not using any Postgres-specific features that might limit that.

**Parker Selbert:** Oh, we use a ton of Postgres-specific features, but they're all encapsulated either through the engine, or plugins. And plugins do things like cron as a plugin. You can think of \[unintelligible 00:33:07.13\] as consuming jobs, and plugins modify or insert jobs. Aside from what people are just doing by themselves.

So there are a lot of -- like, there are advisory locks, and there's use of use of SKIP LOCKED... There are definitely Postgres-specific stuff in there. But not much pushback.

**Jerod Santo:** That's good... It makes sense, I think. All defaults account for a lot of it. It's like, "Well, this is the default, so use it."

**Parker Selbert:** You get performance questions, for sure. People will say "What's the load going to be from this on my database?"

**Jerod Santo:** Sure.

**Parker Selbert:** And some people run a separate, dedicated database just for jobs...

**Jerod Santo:** That's when you've got some scale right there. You've got a lot of jobs going on for that to matter.

**Parker Selbert:** Yes, for sure.

**Jerod Santo:** So Web is 39, Pro is 69, Web + Pro is 99... Dollars per month. I should be more explicit there.

**Parker Selbert:** Yeah.

**Jerod Santo:** What's the breakdown been? Do most people just go whole hog, or are there people that just want the WebUI? I'm just curious, because it's interesting to know, like, is it worth having these distinctions?

**Parker Selbert:** Yeah, the majority go for the bundle. I would say 9 out of 10 go for the bundle. And then the other 1 out of 10 -- I think we probably have like 2 Pro alone, and everything else is either the bundle or just Web. So you do get people just using Web.

**Jerod Santo:** Yeah, I could see where the web by itself might be attractive, but then once you're looking at the Pro, you might as well just get them both, right?

**Parker Selbert:** We used to do it where instead of selling the packages separately, we did sort of a "You tell us how large you are, and..."

**Jerod Santo:** "We'll tell you what it costs." \[laughs\]

**Parker Selbert:** And it was one or the either. It was either you're solo or you're a business.

**Jerod Santo:** Gotcha.

**Parker Selbert:** But Oban doesn't phone home, and we have no way to tell how many servers people \[unintelligible 00:35:05.07\] and it's good for when you're getting started.

**Jerod Santo:** Right.

**Parker Selbert:** And then business was you have two or more servers. And it was very clear that people's self-reporting didn't really match up with...

**Jerod Santo:** Reality.

**Parker Selbert:** ...reality, yeah. So we thought "Well, the real value isn't in people just self-reporting what the size is. There's value in what the products are." So better to split them up.

**Jerod Santo:** Yeah. So do you have a freedom number calculated out on that bundle? How many bundles it's gonna take... Do you have a countdown on the wall, like "We're 75 bundles away from freedom"?

**Parker Selbert:** Yeah, we've got a number.

**Jerod Santo:** \[laughs\] I love it. How far away is the number, percentage-wise? Are you 30% of the way there? 50%? 80%?

**Parker Selbert:** See, it kind of depends on -- growth is just like anything; growth is not very predictable. So it's not like "Well, it's another week."

**Jerod Santo:** Right, right, right. That's why I asked for percentages, like based on bundle count, or subscriber count.

**Parker Selbert:** \[00:36:08.08\] Yeah. We're 60% of the way there.

**Jerod Santo:** Okay.

**Parker Selbert:** I'd say.

**Jerod Santo:** That's hopeful, man. That's awesome.

**Parker Selbert:** Yeah. It's going well. You're getting me to spill secrets here.

**Jerod Santo:** Well...

**Parker Selbert:** They'll get me in trouble.

**Jerod Santo:** Nobody at work is gonna listen to this.

**Parker Selbert:** That's true. I don't know if anybody at work is a Changelog++ subscriber, so...

**Jerod Santo:** That's right. They'll need to start working on that subscription, and working on our own freedom number of Changelog++.

**Parker Selbert:** Which - okay, I'm gonna flip it and ask, how is Changelog++ working out compared to doing the ads with the regular published versions?

**Jerod Santo:** Not even close.

**Parker Selbert:** No?

**Jerod Santo:** Nah. It's like 1%.

**Parker Selbert:** Wow, okay.

**Jerod Santo:** And that's just top of the head math. It's probably not exactly 1%. But I will say that podcast advertising is lucrative. So it's competing with a larger number. So we do very well, we're successful, we're happy... We already have freedom, so we don't really need a freedom number. But yeah, Changelog++ is awesome, and it's for our hardcore listeners, and we love to do it. We don't really push it very much; we're not relying upon it, and we don't expect it to ever overtake. I mean, maybe -- I think if Changelog++ overtook our advertising income, it's because the advertising industry collapsed. And not the other way around. \[laughs\] Which could happen, you know? Podcasting could stop being lucrative.

**Parker Selbert:** A major disparity...

**Jerod Santo:** Yeah, there's a major disparity there. Obviously, I think in the case that we had a situation like that, like if our podcasts depended upon it, I think we'd have a lot more subscribers. And I think that the way that we throw Changelog++ out there, it's like "We would love for you to subscribe, it's cool, we love to have extras for people, and get rid of the ads and all that... We would love your support", but it's not going to make or break us. And I think if it was like "Hey, by the way, we lost all of our advertisers, because - whatever; market crash, or whatever happened... Spotify scooped everything up and aren't distributing the money, it's become a YouTube situation", I think we'd have a lot of our listeners at that point step up and support us. So I think it would change the calculus. But for now - no, it's not gonna overtake advertising revenue... Which is fine.

**Parker Selbert:** I will admit, so I've listened to The Changelog since - I don't know... When Chris Wanstrath was on there in \[unintelligible 00:38:36.17\]

**Jerod Santo:** Way back... Way back!

**Parker Selbert:** ...and I don't do Changelog++. And I have no good reason for it. Actually, I support several Elixir podcasts, I donate a lot to open source...

**Jerod Santo:** This is quite a confessional? What's wrong with you, man?! No... \[laughs\] Are you a Master feed listener at least?

**Parker Selbert:** No.

**Jerod Santo:** Oh, man... You're killing me, Parker...

**Parker Selbert:** I've dabbled into various ones. I've listened -- I'll get the names wrong. I've listened to the JavaScript one, and I've listened to the Go one, and the AI one, and I listened to Ship It...

**Jerod Santo:** Yup.

**Parker Selbert:** ...but I don't do Master feed.

**Jerod Santo:** So Backstage, the show that you're on right now, is not just for Plus Plus. It's on the Master feeds. So it's hidden from the public insofar as it doesn't have its own feed. But you don't have to be Plus Plus to listen. You just have to be a Master feed listener, or obviously, visit the website. So this will not be just to our Plus Plus people, it will be to slightly more people; probably an order of magnitude more.

**Parker Selbert:** Oh. I conflated Plus Plus and Master feed.

**Jerod Santo:** Fair enough. Only you're not an insider here, Parker. Come on. You're a long-time listener, but not a long-time insider. So Backstage is a show -- I think this is episode 23; we would love to do it more often. It's a show that we do that is not just for Plus Plus people, but it's for people who have kind of like bought in and are more of the super-listeners. They subscribe to the Master feed, so they get every single show we publish...

\[00:40:08.05\] And the reason we did it originally was to kind of be a carrot for the Master feed. Because obviously, we would love everybody to subscribe to all of our shows, and just pick and choose the ones to listen to each week... And so we thought if we had some unique content that's only on the Master feed, maybe that will get more people to subscribe to it, and that's why we put it there.

Plus Plus gets obviously ad-free, they get higher bit rate mp3s... So if you're on like an audio file, you get slightly higher quality audio, although all of our stuff sounds pretty good, I think. And then they also get extended episodes. So we don't really do bonus episodes for Plus Plus, which is probably what you thought this was, but we'll do like another ten minutes that we cut for everybody else, throw it on at the end... Sometimes we have -- we've been doing lately, and we haven't published very many of these, but for the Changelog, Adam and I will actually come backstage for the half an hour leading up to the show, and talk about... Sometimes we talk about the show we're gonna have, sometimes we just BS, and then we record the actual Changelog with the guest, and then we'll take that Backstage and put it at the end for the Plus Plus people. So that's kind of what Plus Plus is, in terms of what you get.

**Parker Selbert:** I have to say, I've never once thought "Man, the quality of this Changelog podcast is so low. I wish I had a higher quality recording."

**Jerod Santo:** \[laughs\] Well, I appreciate that. We want it to be awesome quality for everybody, but... Some of that was actually spurred on by Gerhard, because he's such a quality fiend that he's like "Hey, can you guys have flak, or whatever?"

**Parker Selbert:** Oh, I can see that.

**Jerod Santo:** And I'm just like, "Well, we have other concerns. We don't want our mp3's to be too large", because some people have bandwidth constraints, some people have pay-by-the-megabyte plans, other people listen on the website, and when you hit Play, we want it to start playing right away... So I can't just crank up the bitrate for everybody. But for Plus Plus people, which is way less distribution etc. and obviously, these are people that can afford to support us financially, so they're not financially constrained in that way, then we'll crank up the bitrate for them.

But yeah, I think all of our stuff sounds good. I'm not much of an audio file in terms of -- at a certain point I can't tell the difference when you just keep cranking up the audio quality.

**Parker Selbert:** Not much of an audio file says the man with the microphone and \[unintelligible 00:42:20.21\]

**Jerod Santo:** I have an ear for audio, but I'm not like a -- you know, certain people listen on our record players still, and they're like "Oh, the vinyl sounds better." Gerhard is more of that brand of human than I am, is my point.

**Parker Selbert:** Yeah. The thing with the record player, the thing that gets my wife and I for a record player is that --

**Jerod Santo:** Oh, you're a record player person. Okay.

**Parker Selbert:** Just sometimes. Just sometimes.

**Jerod Santo:** Okay.

**Parker Selbert:** But you have the record, and it's this large, and you've got --

**Jerod Santo:** It's cool. Yeah, I get the physicality angle for sure.

**Parker Selbert:** And the minor notes, and the art, and the lyrics, or whatever else are there...

**Jerod Santo:** Yeah. I'm sold on that argument. It's the ones that say it sounds better than a CD... You know, CD quality is pretty much, objectively, mathematically the highest quality audio in terms of the original sound...

**Parker Selbert:** Yeah.

**Jerod Santo:** And people claim that vinyl is... I think they're deceived. But if you're claiming you like the physicality, or... It does sound different. You can say, "Oh, it's warmer. I like that warm sound." I'm like, "That's cool. Do it. Just don't tell me it's better, or higher quality."

**Parker Selbert:** Yeah. I think everybody should just be scientific and A/B test themselves at some point.

**Jerod Santo:** They should.

**Parker Selbert:** I actually did this years ago as part of like an mp3 training community before nobody did that anymore...

**Jerod Santo:** Okay...

**Parker Selbert:** Because people would argue about "Should it be 0, or would 2 be okay?" and that kind of thing. And there's a huge size difference between them. So like "Alright, well, I'll just get some good headphones on and then just switch between these until I can't tell the different."

**Jerod Santo:** Right.

**Parker Selbert:** And you just know for yourself whether your ears can even pick that up.

**Jerod Santo:** \[00:44:00.03\] Well, for instance, the public version that we ship of all our shows is 128 kbps. And the Plus Plus version is 192. And for me, even with studio monitors on, I can just barely tell the difference. But Gerhard is like, "Oh, this is much better. I would love it to be 256." And I'm like, "Alright..." I just can't do it. So obviously, people's ears work differently, and some are more highly tuned to changes than others.

So you're almost there on your Oban -- you're 60% of the way there on Oban for life... What are you doing to get the final 40%? Are you just working on the deal, making it better, serving your current customers? Does your wife get involved at marketing things that you guys try to do, or growth hacks? How are you growing it?

**Parker Selbert:** No growth hacks. The best thing - and this is not gonna be a surprise to anybody - is writing. Writing about it, talking about it - that does way more than shipping features, which I think anybody who's tried a startup or whatever it is would tell you. There's that Plausible chart that they show every once in a while, about what was happening at Plausible when there was one engineer and he was coding, and then what happens when the partner came on, and then there was marketing.

**Jerod Santo:** Yup.

**Parker Selbert:** And that's where it starts going up. So the best thing for us to do would be to write more and teach more. And that's actually two of things that we're shifting the focus. So one is starting to do training... So at ElixirConf EU in June we're doing a full-day training session, and as part of that we're preparing a lot more written material and guides and that kind of thing. So that is the second part, is just making it easier for people to learn.

**Jerod Santo:** Yeah.

**Parker Selbert:** So writing guides is not always the most fun thing to do, but really rewarding for people to actually learn how to do things and bring people in that way.

**Jerod Santo:** Yeah, those boring, high ROI things. It's actually a really good return, but it's just not cranking out a new feature, getting in a flow state and coding it up, which is what you probably wanna be doing.

**Parker Selbert:** I was talking to Alex Coutmos yesterday about this -- not that, but about the notion that planning, like doing technical planning or technical writing is really important, and a long-term reward. But as a developer, as a programmer, you don't get that kind of dopamine at the end.

**Jerod Santo:** Right.

**Parker Selbert:** You don't get the red/green "Oh, it worked. Look, I made that work" kind of buzz from it.

**Jerod Santo:** No, you don't.

**Parker Selbert:** And I think that's what slows us down.

**Jerod Santo:** Yeah. And in fact, I think writing is one of the most painful of all endeavors, because it's like --

**Parker Selbert:** \[unintelligible 00:46:44.21\] to work on instead.

**Jerod Santo:** Yeah, exactly. I'd rather just talk to somebody. It's so much easier. In fact, a lot of my half-written blog posts - I just say them out loud on a podcast, and that actually gives me the satisfaction I would have had from having to sit down and write it out; I'm like, "I'm never writing that blog post. Now I've just said it on the podcast, \[unintelligible 00:47:01.11\]"

**Parker Selbert:** It will be transcribed, you're good.

**Jerod Santo:** Well, we do do that, actually. We turn back our transcripts sometimes and we pull them out and put them in a blog post... Because why not, right? Yeah, I've likened, much to my wife's chagrin, who she's birthed six children, and I always tell her that writing is like giving birth, and she's like "You have no idea what you're talking about." \[laughs\] I'm like, "You get it, but I'm still gonna use the analogy", because that's how painful it is for me. And I do enjoy -- I mean, there is some satisfaction at the end, especially if people appreciate it, but the process of writing prose is to me pure pain, and the process of coding is pure joy. And I don't know what the difference is.

**Parker Selbert:** Yeah.

**Jerod Santo:** Do you have any insight on what's the difference?

**Parker Selbert:** I really think it's that little dopamine bit at the end, because you'll publish something --

**Jerod Santo:** Like progress along the way, or...?

**Parker Selbert:** \[00:47:57.16\] Yeah. The last big release or set of releases we had, which I think was in February - yeah, I know it was in February, because we made the horrible mistake of publishing it on Super Bowl Sunday. We used to release Friday; we would do the release, and do the announcements, and if there was a blog post, do that. And we were a little slow, so like "Well, we'll just do it on Sunday. People aren't doing anything on Sunday anyway." That was wrong. That was a very bad idea.

**Jerod Santo:** \[laughs\]

**Parker Selbert:** It launched to crickets. Okay...

**Jerod Santo:** Even Friday is not the best day to launch anything.

**Parker Selbert:** No, Friday is terrible.

**Jerod Santo:** Yeah.

**Parker Selbert:** So Oban has a Slack channel; it's just on the Elixir Slack, but there's the Oban channel there...

**Jerod Santo:** Sure.

**Parker Selbert:** ...which has a pretty good number of people in there. And there are very obvious trends to the way that a week flows. People purchase things on Monday and Friday. Very few in between the week. People have a lot of questions on Tuesday and Wednesday, about things that they're working on... That's when people are getting stuff done. And almost nothing happens on the weekend.

**Jerod Santo:** Right. Yeah, the only argument for - we're talking about technical publishing, right? Like publishing developer things.

**Parker Selbert:** Yeah.

**Jerod Santo:** The only pro weekend argument is "Well, you have less competition for mind share on the weekend." So there's less people around on Twitter, on Hacker News, on Reddit, on Changelog News etc. There's less people around, but the people who are around have less to look at. So you might hang out in the mindosphere, in people's minds a little bit longer on the weekend, because there's just not much going on...

**Parker Selbert:** Yeah.

**Jerod Santo:** But other than that -- I mean, the other argument against it is like "Hey, no one's doing anything, so why are you publishing on a Friday or a Saturday for?"

**Parker Selbert:** Yeah. Well, that's kind of what our thinking was. "They're not publishing on Friday or Sunday." Well, I feel like we learned a lesson on that one.

**Jerod Santo:** Yup. Skip Super Bowl Sunday next time you're publishing. Now, you said "Well, it's Sunday... It's not Super Bowl Sunday, it's the Oscars. Nobody watches the Oscars... We'll publish on the Oscars." And then Will Smith comes and slaps that idea right on its face...

**Parker Selbert:** Yeah.

**Jerod Santo:** Which was the best marketing that the Oscars could have had probably in the history. And Chris Rock drilled it, right? He said "Best moment in TV history", or something like that.

**Parker Selbert:** Yeah. And he sold out all of his shows on his subsequent comedy tour. So I think it worked out in Chris Rock's favor entirely.

**Jerod Santo:** Yeah, he came out looking pretty good through that whole deal, I think. Okay, Parker, what else? Anything else?

**Parker Selbert:** Up to you. I mean, it's your show. If you have anything you want to ask, I'm here. Happy to help.

**Jerod Santo:** Well, how well do you know our application at this point? You probably just looked at it that one time and moved on...

**Parker Selbert:** I've looked at it more than once.

**Jerod Santo:** Okay.

**Parker Selbert:** But how well do I know the application - not super-well.

**Jerod Santo:** Yeah, not super-well. Better or worse than our Plus Plus strategy... \[laughs\] Well, then my questions would be more like "How could we deploy Oban more, or better?" But you probably don't know what we're all trying to accomplish, so that's a hard question. My other question would be like "What might we get out of Web or Pro?" Because I'd love to support you, but I just don't even see much value for us, maybe because we're just the casualest of users. So those would kind of be the things that I'd be curious about, but it might require some domain expertise in what we do and what we're trying to do, which you may not have.

**Parker Selbert:** Yes, I don't know anything obviously. I mean, I'm familiar at least with what the app does. I've submitted news before, I've got an account, listened to podcasts, I get the weekly newsletter... So I'm familiar with all that, and I think a lot of that is already using different parts of Oban. But I don't know if you'd have much benefit from Pro. There are some subtle things, like if you happen to restart during a long-running job, it will use a lifeline plugin to rescue it. There are little things like that. But compared to a company, like dScout for example, where you have a large team of engineers and we're running hundreds of thousands of jobs per day, it's really important to go into the dashboard and then tweak things, maybe scale a queue up or down, maybe pause something, search, find out where errors are... Things like that.

\[00:52:23.24\] If you're not sending that volume of jobs, or you are comfortable and everybody just has Postgres access, it's not quite as appealing. I hate to unsell the product, but \[unintelligible 00:52:33.29\]

**Jerod Santo:** Yeah. Fair enough. Let me ask you a different question then, since you're in Elixir land. So we've worked with Lars Wickman, as I try to call him by his actual name...

**Parker Selbert:** Yes. Lars was the one who was asking about the SQLite version.

**Jerod Santo:** Yeah, of course. He's always trying to make it as simple as possible. We've worked with Alex Coutmos, both busy people, with lots going on... If we were looking for more help, for an Elixir dev to come and work with me, or under me, so to speak, in terms of me directing, where do you turn for Elixir devs that would be freelance for hire, or consultants? Are there places, are there people you know? What do you think? Sorentwo? Can I get half of Sorentwo? \[laughs\]

**Parker Selbert:** We're not in that business anymore, thankfully...

**Jerod Santo:** I know you're out of it. I know you're out of it.

**Parker Selbert:** Which is really, really nice. That's actually a harder thing to do than you would think. It's hard to find good contractors for anything, especially in the Elixir community, partially because there's such a crunch on jobs. There's a lot more demand than there are people to fill it... Which is a good place for all the contractors and freelancers to be in. But yeah, you have to see - are there any Elixir podcast hosts which you guys could contract with. And I think they're all employed...

**Jerod Santo:** Yeah, exactly.

**Parker Selbert:** Or product people, at this point.

**Jerod Santo:** Yeah, it seems like all the great Elixir devs have great Elixir jobs.

**Parker Selbert:** I think so, yeah. We've actually just had this whole conversation about trying to find people. We at dScout use some contractors from Poland, because they have a very vibrant Elixir scene around Krakow... Which is great. But even they have only so many people that you can use. So where do you grow, where do you find more people? Where do you find people in the U.S. timezone?

**Jerod Santo:** Yeah.

**Parker Selbert:** So I realize you've asked me a question and I've just said "Yes, it's hard."

**Jerod Santo:** Now you're asking me the same question. \[laughs\]

**Parker Selbert:** Yes.

**Jerod Santo:** That's one way to handle a question, is to ask it back. I don't know, that's why I asked. Yeah, it's tough... Also, people you can afford. I mean, we're a small business, and we can't employ at the same salaries as these larger tech companies who are making bookoo bucks. It doesn't mean we don't want to, it just means we just can't compete at a certain degree. Or we can hire at those rates, but we just do way less work, which ultimately can be unsatisfying for us... So it's difficult from that angle as well, because everybody's so well employed... Which we love, but it makes it harder to employ them, which we don't love as much.

**Parker Selbert:** \[00:55:22.22\] Yeah. We would love to hire just a little bit of contract work, like "Oh, we wanna make these changes to the platform." So not necessary to like Oban, or Oban Pro, or something itself, but to the hosting platform. Right now there's a newsletter, so that we can give people email updates when there are gonna be account changes, but nobody can opt into it. That's a very small feature, but where do you prioritize that when you have all these other things going on? It's hard to find somebody to just plug into all that.

**Jerod Santo:** Well, there is a call for our listeners... So if you are a Changelog Master feed junkie and you're listening to Backstage because you subscribed to Plus Plus or Master, and you're an Elixir dev, hit up -- well, hit up me first, but then maybe Parker also. We'll give him the leftovers... Talk to me, and if I don't think you're a good fit, maybe Parker can -- I'm just messing around.

Yeah, let us know... Or if you know somebody who knows somebody who's available, we are definitely interested in speaking with Elixir devs about doing some work. And Parker is too, so let us know.

**Parker Selbert:** Somebody recommended to me recently -- somebody who has a lot of open source projects, I will say, said "Just watch for people that drop a big PR on you, and just reach out to them. Send them an email directly and say "I love what you did. Can I pay you to do some other work?" Apparently, that works out.

**Jerod Santo:** Well, that's what we're doing right here, Parker... \[laughter\] You dropped a great PR on us, I'm trying to hire you... You're not consulting anymore, so failed on one, but I'll keep trying with other people, and we'll see what happens.

Cool, man. I appreciate you coming backstage, hanging out, I appreciate you building Oban and making it open source so we can use it, even if we don't get much value out of your Pro and Web accounts. I think the Web would be cool, just as a nice-to-have, so I can check out my stuff... But it just works, so it's kind of like "Do I need to look at it if it's just working, so far, so good, without looking at it?" But it's pretty cool that you're making a business out of it and thriving, to a certain extent, to the point where I hope you get that magic number in the not-too-distant future. If and when you do, definitely let us know; we'd love to celebrate with you.

**Parker Selbert:** Thank you. Thanks for having me, and hopefully that does happen sometime in the future. I would love to celebrate with you.

**Jerod Santo:** Alright. Cheers.
