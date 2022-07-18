**Gerhard Lazu:** So our listeners have been hearing me talk about the changelog.com ops and infra for a bunch of years now... And as fun as it is for me, I also like to mix it up. I'm a fan of a big story, of a long story, that keeps twisting and turning, but I'm also curious, and especially in the last few months, I've been very curious to know how others are doing it, how others are running the ops and infra behind podcasts. And with that in mind, I'm super-happy to welcome Jason and Jon today from Transistor.fm. Welcome!

**Jon Buda:** Thanks. Hello.

**Jason Pearl:** Thanks for having us.

**Gerhard Lazu:** So I've been a longtime subscriber to Justin's newsletter, at least 2018... But I'm sure it's been actually even like a few years before. And that's how I've been following the Transistor.fm journey, from the idea to its creation. I know, Jon, that you and Justin, you kicked it off... And it's been great to see that happen. So tell us more about that journey for you, Jon. How did it start? Why Transistor.fm? Take it away.

**Jon Buda:** It started back in 2017. I was working at a different company. I was working for Cards Against Humanity, actually in Chicago, and I had previously worked on a podcasting platform back in 2013, I think it was, for a couple of years. And that kind of didn't turn out great from my end. And Cards Against Humanity was doing a holiday project that they did every year, and part of that was having a podcast. They were going to record a podcast and sponsor for a year, the Good News Podcast, which was just all good news, because at the time -- and I mean, it's still happening, but news was terrible. So instead of them signing up with a different podcast provider, I had wanted to actually get back into podcast hosting anyway, so I sort of just like had been hacking around on some code, and trying to build something again... And I sort of told them that if I could finish enough of it by the time they wanted to launch it, they could just use that one.

So that was sort of where it started. And that was just me. And then Justin reached out to me early 2018... And we'd been friends for a while and wanted to work together; we met, I don't know, back in like, 2015, I think, at a conference. We stayed in touch... And he'd been wanting to sort of put his energy towards building something else, and you know, trying to start the year and build something new, and work on a product. So he asked me if I wanted to partner up and do this thing. Initially, I was very hesitant, just because I kind of had been burned in the past with partners, and kind of wanted to try to do it on my own... But after thinking for a little bit, I was like, "Well, I'm a developer. I don't really know how to do marketing. And Justin is amazing at it, so it kind of makes sense." And from there, it just kind of took off.

We just did a 50/50 split for ownership, signed a bunch of paperwork and made it official, and worked on it throughout 2018, and officially launched in August of 2018, with kind of a testing/beta phase before that.

**Gerhard Lazu:** Okay, that sounds like a very simple journey, in a way. I really like how real and simple and easy you make it sound. I know there are like so many twists and turns and challenges... But when two people get together, they have an idea, say "Okay, we're going to make make this work, yes? Yes." That's it. That's all you need to get going. And then, you know, you start dealing with things as they come at you... Because there's so many things that came at you, I'm sure about that.

One of the people that came your way is Jason. So Jason, tell us, how did that happen? How did you enter the Transistor.fm scene?

**Jason Pearl:** I lived in Chicago for like a dozen years. I've known Jon for a good portion of that. We actually wound up working out of the same office for a little bit. When myself and a couple of friends were working on a video game that we were supporting, Jon started working out of our office, and then Jon started working at Cards Against Humanity... At some point we wound down the video game project, and I took a job with Jon at a Card. And I worked there about a year or so, and then I wound up moving from Chicago to Cleveland, sunny Cleveland, Ohio. So we stayed in touch since then, and I had a job in the interim... And we'd been talking, sort of as Jon and Justin got Transistor really going, and it sounded really interesting to me... And I found myself looking for something. I was like contemplating looking for like a big tech job, and I was doing the interview prep, and delete coding, and all that nonsense... And Jon and my friend Mike came to visit me in Cleveland, and we were talking about a project they work on and he jokingly said, "Hey, do you want to come work on it?" I'm like, "Actually, that does sound pretty awesome." So I wound up taking a job at Transistor as the first non-Jon engineer.

**Gerhard Lazu:** \[08:24\] Non-Jon engineer, okay.

**Jon Buda:** That was like, almost a year ago, right?

**Jason Pearl:** Yeah, I think it's like 10-11 months.

**Jon Buda:** Yeah, I mean, speak. Speaking of things that came along with starting Transistor... Justin and I both recognize that that hiring Jason was like one of the biggest decisions we made. It's probably the biggest expense we have, but completely worth it. Like, it's a little stressful to be like, "Yeah, should we hire this person, pay them a bunch of money and hope it works out?" I think those types of things, you just have to jump in, take a chance... And it's been great. I get to work with friends all day. \[laughs\]

**Gerhard Lazu:** That's okay. How many of you are there now?

**Jon Buda:** Just four, total. So Justin, and I, and Jason, and Helen, who is in England, as well.

**Gerhard Lazu:** Helen.

**Jon Buda:** She does customer support. Customer success... Yeah.

**Gerhard Lazu:** I was listening to -- I think it's episode 135. What's the name of the podcast? Let's see. 135... The saas.transistor.fm. Who runs "Build Your SaaS?" Who runs the podcast?

**Jon Buda:** Justin and I started it. We basically started it from day one, kind of documenting our process of starting a company together. We were recording like once a week, I think, for a long time, but it has since kind of slowed down as we've just grown the company, and Justin does more interviews now there with other people... But we'll keep doing podcasts together, on and off. Jason and Helen both hopped on one...

**Gerhard Lazu:** That was a very good episode. That's basically the four of you. That's even like the picture for that episode, 135. It's a great one. It's an insight in how you work, how you get along with one another... That was great, because people are at the - well, you start with them and you end with them, and then everything else just revolves around them... You know, how they interact, the little quirks that everyone has, and can you make it work. Preferences, so on and so forth.

So I know that you launched a really big thing recently, and that's what got me talking to Justin, because I always wanted to talk to him. And that was like the perfect excuse, like "Okay, tell me more about the free podcast website builder that was launched." And that's how we started talking even about this episode. I said, "Okay, but my interest is mostly ops and infra", and Justin said, "I know the right two people for you." And that's how he introduced us. So you launched that - it was, I think, a month ago, two months ago? It was very recent.

**Jason Pearl:** Yeah, I think it was about a month ago.

**Gerhard Lazu:** How did the launch go? How was that for you?

**Jason Pearl:** Yeah, it was good. A lot of people signed up. It's an interesting product, because it kind of spawned from something we were building, or built for the main product... But it was like an opportunity to provide something for people that aren't already Transistor customers to sort of experience some of the other things that we have to offer. But since this could function with Transistor podcasts or non Transistor podcasts, it was just like a nice way to do that. But it's gone well, I think we're approaching like 150 signups.

**Jon Buda:** Yeah, something like that.

**Gerhard Lazu:** Okay.

**Jon Buda:** I don't think we experienced any major hiccups, really, with the launch itself.

**Gerhard Lazu:** From the outside, I've seen a lot of interest on Product Hunt. I'll add a link to the show notes. Again, 7,000+ subscribers... A lot of interest in it. And I was wondering, what impact that launching that have on the platform, on the Transistor.fm platform, on the infrastructure, on how you do things, the prep work... What went into it to roll it out?

**Jon Buda:** Specifically for Product Hunt?

**Gerhard Lazu:** No, no, no, for like the whole feature to get it out - what impact did it have on your Transistor.fm infrastructure? Was there like any work, was there lots of coding? What did that look like from your perspective, the ones that were building it and then shipping that new feature?

**Jon Buda:** \[12:09\] Yeah, I mean, there was a lot of lead-up to the launch. I wouldn't say the launch itself impacted us much, as far as like any problems with traffic, or spiking of CPU or database or anything like that... But leading up to it - it's funny, because we actually did a bunch of infrastructure work the weeks before the launch, upgrading various parts of our infrastructure that we use... That was mostly Jason, yeah.

**Gerhard Lazu:** Who did that work, was it Jason? What did you have to upgrade, Jason? Tell us about it.

**Jason Pearl:** I think the whole project is interesting, because Jon built and continued to maintain it as like a sole developer... So a lot of it kind of reflects those decisions, which are all great decisions, but it's not overly complex. So we're hosted on Elastic Beanstalk on AWS. So really, it was just kind of upgrading to the latest version, because we were on an older one. So there's all kinds of like fiddly little bits, but ultimately it's just kind of updating what Jon had built previously.

**Gerhard Lazu:** This is Elastic Beanstalk, or something else?

**Jason Pearl:** So we're still on Elastic Beanstalk, yeah. They switched from -- so we were previously on the old version of Amazon Linux, so we had to move to the new version, so there was a bunch of -- we had to switch from Upstart to SystemD.

**Jon Buda:** We also upgraded our -- we use Caddy as our web server, which provides us free SSL certificates for the custom domains which the websites run on. If you want to add your custom domain, you get free SSL, so...

**Gerhard Lazu:** Caddy v1 or v2?

**Jon Buda:** We were on v1 for a long time, which is very old, but it was totally rock-solid. We upgraded to v2, and that's also been great. It was pretty painless. The configuration is just incredibly simple.

**Gerhard Lazu:** I still have some v1's running. Don't tell anyone, okay? Hopefully, no one's listening to this part...

**Jon Buda:** It ran rock-solid for years for us.

**Gerhard Lazu:** Same for me. But the v2 upgrade didn't happen part of this launch, right? Or like as a run up to it. That happened a while ago, the Caddy v1 to v2.

**Jon Buda:** I'm actually forgetting the timing of it. I don't know if we were working on it during the launch, or we did it right after, or right before. I kind of forget. No, we were doing it, I think, simultaneously.

**Gerhard Lazu:** Okay.

**Jason Pearl:** We had kind of like a little bit of downtime between actually finishing it and launching it, so... This is like something that had been needling us for a while, so we took that opportunity to work on it.

**Jon Buda:** It was one of those things where Amazon kept sending us emails, saying that version one of Amazon Linux is going to be deprecated and removed and not supported anymore, and they just kept sending us emails with the date, and we're like, "We should probably upgrade..."

**Gerhard Lazu:** It worked, because you upgraded... As annoying as it was, it worked. \[laughs\]

**Jon Buda:** Yeah. There's still some pain points with it, but...

**Gerhard Lazu:** So caddy got upgraded, the Amazon Linux OS got upgraded... What else?

**Jon Buda:** We upgraded to Rails 7, and along with that we upgraded to Ruby 3.

**Gerhard Lazu:** Okay.

**Jon Buda:** We were on Ruby 2.6 and Rails 6.1.

**Jason Pearl:** Really just a ton of stuff at the same time, which is--

**Jon Buda:** Yeah, we did a lot of stuff at once. And honestly, it worked out pretty well. I don't think the site was down.

**Gerhard Lazu:** What made you upgrade from all these versions at once? You were just about to launch... What prompted you to upgrade those things? Because you would think that the closer you get to a launch, you want to go with a system that you've been running for a while, and you weren't happy with it, you've done some load testing, whatever, whatever... Or at least you are confident in what you run. What prompted the upgrades? And I'm sure it wasn't just the Amazon emails; there must have been other things.

**Jon Buda:** \[15:43\] It had just been in the back of our minds for such a long time that we had finished the new websites feature - it was done, and it was actually live, we just hadn't launched it yet... I think Justin was working on all the marketing pieces for Product Hunt and everything else, and we had a week or so to kind of mess around with some new stuff... I forget what it was; it was like we wanted to upgrade Rails, but we couldn't, because we were on Ruby 2.6, which wasn't supported by Rails 7, so we had to upgrade anyway... But you couldn't upgrade the old version of Elastic Beanstalk to Ruby 3 without upgrading the entire platform version... So we did that, and then you know, it was like, "Well, if Caddy 1 is old, we might as well upgrade that." Yeah, I don't know, maybe it wasn't the smartest idea, but it came together.

**Gerhard Lazu:** You did it like -- it was like one big push and you got them all upgraded, and everything is the latest, I'm assuming now, and fully supported, right?

**Jon Buda:** Yeah.

**Gerhard Lazu:** Because I know that Amazon keeps sending emails when they want to stop supporting things, and they want to make sure they do everything they can to make people aware that "Hey, unless you upgrade, we will not support this."

**Jon Buda:** Right, right. And you know, we have a staging environment, so we deployed all the new stuff to that first, to make sure it worked... And then with Elastic Beanstalk, you actually just deploy a new application, and then sort of just switch the name servers, or the switch the domain to point to the new load balancer, and you're kind of done.

**Gerhard Lazu:** So is this Rails app - is it for the whole of Transistor.fm, or just for the website builder? Sorry, for the podcast website builder.

**Jon Buda:** It's the whole app.

**Gerhard Lazu:** The whole app, everything. Wow. Okay.

**Jon Buda:** We have one app. That's it.

**Gerhard Lazu:** That's crazy. Guess who else has a single monolithic app? We do. \[laughs\]

**Jon Buda:** Nice, yeah.

**Gerhard Lazu:** It just work so easy. It's just so easy. Why did you pick one app? \[unintelligible 00:17:29.03\] told you that? Why did you pick a single-app approach, Jon? Because I think it was your decision, right? To have a single app.

**Jon Buda:** Well, it was just me working on it... \[laughs\]

**Gerhard Lazu:** So that's easy, okay...

**Jon Buda:** I didn't want to maintain multiple things. I just didn't feel the need to have multiple little microservices that all talk together.

**Gerhard Lazu:** Is this a Chicago thing, because people in Chicago like Ruby on Rails? Is it that, or is it something else? Because of Basecamp, 37Signals, all that heritage...

**Jason Pearl:** I mean, I'm sure it's part of it.

**Jon Buda:** Part of it, maybe. I'm just so used to using Rails, and building things that way. I mean, we sort of had separate apps at Cards Against Humanity for this big eCommerce and shipping platform we had... You know, it just wasn't necessary. It was sort of like pre-optimizing for something, and it just became kind of a headache after a while. It really didn't need to be separate apps. But mostly just because it was me and it was just easier.

**Gerhard Lazu:** That's a great answer.

**Jon Buda:** I don't know if Jason agrees with that. I think he does.

**Jason Pearl:** I think for the most part. We flirted with the idea of building the free podcast website project in a separate project. We'd started that way. But ultimately, it just made a lot more sense as a singular app. So we kind of rolled it back in.

**Jon Buda:** Yeah. I mean, the free websites are -- I mean, it shares the same code, same infrastructure, same dashboard layout really as the main app, so it just kind of made sense.

**Gerhard Lazu:** Okay.

**Break:** \[18:57\]

**Gerhard Lazu:** So how long have you been running the single Rails app?

**Jon Buda:** Since late 2017.

**Gerhard Lazu:** Right, so since the beginning.

**Jon Buda:** Yeah, since the beginning.

**Gerhard Lazu:** And you're still on it... Okay.

**Jon Buda:** It's the same codebase, yeah. I mean, I can go on GitHub and look at the first commit; it was like, I don't know, March of 2017, or something.

**Gerhard Lazu:** So what was it like for you, Jason, to go into this single codebase, single repo, I'm assuming? What was it like to get onboarded with it?

**Jason Pearl:** It's a pretty standard Rails app. I mean, that's kind of the beautiful thing about Rails... Like, if you've worked on one, you sort of know how things are laid out, you know what folders to hold what. And I've worked with Jon before too, so I know where the bodies are buried.

**Gerhard Lazu:** I see. \[laughs\] Did you find any?

**Jason Pearl:** It's not too bad.

**Gerhard Lazu:** Are they that well hidden? Or are there no bodies, Jon? Which one is it? \[laughs\]

**Jon Buda:** Yeah, there's some bodies. I think you've found most of them... It's always interesting being a solo developer on an app... It's like, you've gotta get a little bit vulnerable to let someone in and just like rewrite a bunch of your code...

**Jason Pearl:** And on the flip side of that, you've gotta tread kinda lightly, too.

**Jon Buda:** Yeah, yeah. I mean, you know, the things that Jason redid are much better, let's just say that. There's a lot of things that I just couldn't put the time and effort into, because there was just a lot of other stuff to do... So having Jason on board to sort of push that along, and... And teach me new things, too, and just make things much better.

**Jason Pearl:** It's always easier to do a version 2. Everything Jon worked on was kind of a blank page. There were some components that were ready to get rebuilt. But yeah, overall, everything worked generally pretty well, so we've just been tightening up things and then adding new features.

**Jon Buda:** Yeah. Jason has been writing a lot of tests for things. He'll come in and work on some part of the app, and write tests for it more than I would have, just because I think I was, I don't know, trying to finish it up faster... So it's in a much better place than it was.

**Gerhard Lazu:** What about -- I mean, I know this is one thing which I didn't like one bit about Rails and how it used to work... Background workers. That used to be so complicated. Like, to do background workers properly in Rails was such a pain. And this, I'm talking 10-15 years ago roughly, give or take a few... Has that changed much? Is it easier? Do you still struggle with that? I mean, first of all, do you even use background workers?

**Jon Buda:** Yeah, we use it a lot.

**Gerhard Lazu:** Okay. What's it like?

**Jon Buda:** I don't know. Personally, I think it works pretty well. We use Sidekiq on top of Redis as like a queuing system, which - I think Sidekiq is still pretty much the go-to for that. I know there's other ones that have come along or have been improved, but... I think when I first discovered the background workers, I was like "Oh yeah, this is a big improvement." Because you know, Ruby can get slow, and Rails can get kind of slow, and... Yeah, we have a lot of workers running. And we have scheduled jobs that run -- basically like cron jobs that run in Sidekiq as well, that run every hour, or ten minutes, or five minutes, or once a day...

\[24:10\] All of our audio processing happens in a background job... API submissions to different podcast directories, uploading to YouTube and all that... And emails are all background jobs... So I think it's pretty seamless. I don't know when it got easier, necessarily. Maybe Rails 4 or 5, or something. Certainly when Sidekiq came out.

**Gerhard Lazu:** I think the big announcement was Rails 3 and Ruby 2 when I was doing it. I think Ruby 1.8, that's the one which I had most experience in. 1.9, and then 2.0 came along, and wow, everything was so much better. But still, it had its own challenges. And the green threads - I still remember those green threads. Oh, my goodness me. Like, don't get me started. And then you have like multi, like these monoliths running, because they couldn't use all the CPUs that were available... And then a bunch of weird stuff was happening. And then you had like supervisors, and then you had --

**Jon Buda:** Oh, yeah...

**Gerhard Lazu:** What was it called? Proc... There was a proc file, I forget which one you were using at the time... I don't know, like a bunch of things are coming back. But again, this is like --

**Jon Buda:** Yeah, there were like Rails observers that did something...

**Gerhard Lazu:** Oh, that as well. Oh my goodness me.

**Jon Buda:** I don't even know if those exist, but...

**Gerhard Lazu:** Yeah. So it was stuff like that. Many things which were making background jobs just complicated. And some people were using the database... I forget what -- delayed job? Oh, my goodness me, delayed job was like such a complicated beast.

**Jon Buda:** Rescue I think is another one...

**Gerhard Lazu:** Rescue. That's the one. That's the one that I remember that was before Sidekiq, and I was like, "Oh look, there's this cool new thing, rescue. And now I need Redis. Oh, my goodness me. Okay, so let's set up -- what is this Redis thing?" And Redis just came along at the time... That was the time when I was like, you know, in this space. I had my fun, and then I just moved on to Go, and Erlang, and Elixir, and other things. And then I focused on infrastructure. That was the inflection point when I had a decision to make - is it infrastructure, or is it development? And I went with infrastructure for many, many years.

Okay. So are there any ops, or infrastructure stories worth telling from last year? Some bodies that you discovered maybe, or some big battles that you fought, and you won, because everyone's still here? \[laughs\] Anything like outages, or migrations gone bad, or backups that never restored? I don't know, anything like that.

**Jon Buda:** I don't know if we've had any major outages with the app itself. But most of the issues we run into are with third-party integrations.

**Gerhard Lazu:** Can you give you a few examples?

**Jon Buda:** Lately, it's been email.

**Gerhard Lazu:** SendGrid? SES?

**Jon Buda:** Mailgun. We actually are trying to switch to SendGrid, which is bringing up other issues. Mailgun has just been having like issues with their API, or their SMTP server, where it's just a bunch of emails are airing out, and then they had a major outage, I think a couple of days ago, which kind of prompted us to try to switch. That's been one of them. We use Backblaze to store the majority of our audio files; their B2 service. Over the past couple of years they've had a number of issues where uploading to Backblaze is just incredibly slow. It'll take, you know, ten minutes or more to upload like a 30 megabyte file, which is kind of ridiculous, right? So those happen in the background, but they also -- you know, if they take long enough, our queuing system just backs up, right?

**Gerhard Lazu:** I'm having the same issues, by the way. It's not just you. And do you know what fixes it?

**Jon Buda:** Restarting.

**Gerhard Lazu:** Restarting the upload fixes it. But then, because as you know, the large files have multiple versions, then you will basically end up having all those files which started, but never completed, so then you have to clean those, because they will count towards your storage... But that's something which I have noticed, that if you -- I basically Ctrl+C; I just use the B2 CLI, upload various files, and large files, and when I do that, I'll use CTRL+C to start again, and it goes fast.

The most annoying part is when it gets like to 80%, and then it goes dog slow. And it can take, as you mentioned, 30 minutes. What? For like 100 megabytes?

**Jon Buda:** \[28:11\] There were some times where it was -- it was pretty bad, where people just couldn't upload. So customers were getting annoyed, we were getting annoyed... It had something to do with like the pod we were on within their infrastructure; something was degraded, and...

**Gerhard Lazu:** The storage pod. We have a lot of Kubernetes listeners; this is not a Kubernetes pod. It's a storage pod. A Backblaze storage pod, just to clarify.

**Jon Buda:** A storage pod. Backblaze. So I think probably -- when you notice yourself restarting and uploading, it probably chooses like a different endpoint to upload through, or something like that. We haven't really had many problems with them lately. I think they've kind of fixed a lot of that, at least from our perspective. Those have been the biggest.

I mean, early on - this was before Jason - we had an issue with Caddy where it was trying to renew certificates with this mode that would not work through Elastic Beanstalk's load balancer... So all of a sudden, all of our certificates just expired. Even the Transistor.fm one. So nothing worked for a while, and it was like the middle of the night.

**Gerhard Lazu:** When was this?

**Jon Buda:** I think this was probably 2019. Probably 2019.

**Gerhard Lazu:** So not last year. No big outages last year.

**Jon Buda:** No, I don't think so. Yeah.

**Gerhard Lazu:** I thought I just caught you there. \[laughs\] No, we're not that kind of a show. But please, carry on... \[laughs\]

**Jon Buda:** No, I mean, with caddy - I basically was talking directly to Matt, the guy that created it... And he helped me out. It was basically like, "Yeah, run this, disable this method of authorizing a certificate, and it should work fine." Which it did.

**Gerhard Lazu:** Who was this?

**Jon Buda:** This was Matt.

**Gerhard Lazu:** Matt Holt, the creator of Caddy?

**Jon Buda:** Yeah, I was talking with him directly, basically.

**Gerhard Lazu:** Matt, shout-out to you.

**Jon Buda:** He was very friendly.

**Gerhard Lazu:** Caddy is amazing. A big stamp from me.

**Jon Buda:** I love it. Yeah. I mean, I think that's one of the benefits of having a big monolith. With a big monolith app it's a lot simpler; there's a lot less that can go wrong. So it's been relatively calm, from our perspective, I think. I mean, we're mostly engineers and developers, we're not really ops people... But we do it, because we have to. We don't have a dedicated ops person. I don't know, I think we sometimes enjoy it; we sometimes enjoy it. It's like another challenge that you can conquer or whatever, right? It's like, "I'm not gonna give up on this until it's finished, and it's fixed, and it's working." But it's definitely not our favorite part of running Transistor.

**Gerhard Lazu:** So what I'm hearing is that a handful of people do not need a dedicated ops person. They can do dev and ops, while not focusing too much on ops. They don't need a platform team, they don't need a platform... They can have a bit of fun with it, and the only requirement is to keep it simple. Do I hear it right?

**Jon Buda:** I think so.

**Jason Pearl:** It sounds right.

**Gerhard Lazu:** Okay.

**Jon Buda:** Hopefully nothing goes wrong during this recording, because it's just Jason and I, so...

**Gerhard Lazu:** Alright, if some something was to go wrong... So this is very interesting - if something was to go wrong, how would you know that something went wrong?

**Jon Buda:** Well, let's see... We have error notifications set up with the Sentry, that get posted into Slack.

**Gerhard Lazu:** Okay...

**Jon Buda:** We have our customer support channel through Crisp, and if something went wrong, people would start messaging us immediately. Or posting on Twitter.

**Jason Pearl:** We've got some monitoring with \[unintelligible 00:31:32.08\]

**Jon Buda:** Yeah, we have some basic downtime monitoring, or uptime.

**Gerhard Lazu:** What do you use for that?

**Jon Buda:** Partially, it's Crisp, actually has some built in. Amazon would also let us know I think if --

**Gerhard Lazu:** Those emails?

**Jon Buda:** Yeah, if Elastic Beanstalk was -- if something was happening, like the load balancer couldn't reach our EC2 instances, I think we'd get some notifications.

**Gerhard Lazu:** I have also seen CloudFlare, especially for your median CDN. How does that fit in the whole picture? Because I'm assuming that's what serving -- well, I'm not assuming; I checked. CDN Transistor.fm, it's advertising itself as Cloudflare. Where does that come in the mix?

**Jon Buda:** \[32:12\] That's our main audio and media CDN. So audio files and most of the images are being served from Cloudflare by way of Backblaze. Backblaze and Cloudflare are part of the -- I think it's called the Bandwidth Initiative...

**Gerhard Lazu:** Yeah, I remember that. I love when they announced it.

**Jon Buda:** Egress to Cloudflare is free, from Backblaze... And then we're on a paid Cloudflare plan that allows us to do a number of things with, you know, DNS and a bunch of configuration. So yeah, most of the heavylifting for all the audio is through Cloudflare. I think that's a piece that we still want to work on. So that's one of the pieces. And I know Jason is kind of interested in taking this on, but... That's one of the pieces that, let's say, our Rails app went down. Right now, it still depends on the Rails app to do a redirect after we record some information about the listener who downloaded the file... But there are ways to get around that, and sort of just have everything run through Cloudflare without having the need for the Rails app. So let's say the Rails app went down, the RSS feeds are also cached in Cloudflare. If the audio files were to also not need the Rails app, then the app could go down and people could still listen to the podcast.

**Gerhard Lazu:** But today if it goes down, that doesn't happen.

**Jon Buda:** That would not happen.

**Gerhard Lazu:** Okay. Because I've seen -- so this is the media.transistor.fm. There's a redirect, there's a location being sent.

**Jon Buda:** Yeah.

**Gerhard Lazu:** Okay, I get it. And then even though it comes through CloudFlare, that must be like a proxy, like a pass-through. Cloudflare just forwards the request. If the origin or the backend is not up, it can't service the request, and it's that redirect to CDN...

**Jon Buda:** The redirect happens in Rails, yeah.

**Gerhard Lazu:** Yeah. Okay, got it.

**Jon Buda:** Cloudflare is pulling from Backblaze, so yeah... I guess if Backblaze went down too and the file wasn't cached in CloudFlare, then we'd have some issues, but...

**Gerhard Lazu:** Okay, okay. I remember when we put a CDN in front of the of the main app, and you know, if the app is down, the CDN will serve stale requests. In our case, it's Fastly. Now, it doesn't obviously service the dynamic requests. You know, it doesn't know how to process a post... It's mostly the posts that it can't do anything about. So those will error. And I think we still serve, like, for example, our news, our impressions... You know, when someone clicks a link, to see how many people clicked a link, for example. But that's all our own. We don't forward that to anywhere. It's just within our own stats, and that still uses the app. But apart from that, if the app is down, it's all good. We just service stale cache.

**Jon Buda:** Yeah.

**Gerhard Lazu:** Now, what if the CDN goes down? What happens then? I'm curious, in your case, if Cloudflare goes down.

**Jon Buda:** We were just talking about this yesterday, actually... It wouldn't actually be that hard for us to switch to a different CDN, if we had to. I think, really, all we would have to do is update the redirect in the Rails app to point to a different CDN domain, and then fire up a CDN that reads from Backblaze. So we could we could switch to Fastly, or StackPath, or even use CloudFront, all of which are much more expensive than Cloudflare. But I think if we had to, we'd be okay pretty quickly.

**Gerhard Lazu:** Okay, that's interesting.

**Jon Buda:** Hopefully, Cloudflare doesn't go down, because it runs half the internet at this point.

**Gerhard Lazu:** Well, you'd be surprised... It did have a few hiccups along the years... As did Fastly, by the way. We had our first Fastly outage in five years last year. We did a whole episode on it. And it wasn't just us. The BBC, The New York Times, The Guardian... So many -- you know, much bigger sites went down, not just us. We went back up in 21 minutes, they didn't. So anyways, there's a whole episode where we talk about this. It was a sunny day, not too dissimilar from this one.

**Jon Buda:** Oh, that's too bad.

**Gerhard Lazu:** Yeah. Moving on... How much traffic do you serve in a month through Cloudflare? And I wouldn't ask you this if I wasn't prepared to trade you our numbers, the changelog.com numbers.

**Jon Buda:** \[36:13\] Let's see, on average, I think it's like --

**Gerhard Lazu:** In total. So in a month -- like, for example, in the month of May, how much traffic did Cloudflare serve?

**Jon Buda:** I could look it up, but I think it was like 750 terabytes.

**Gerhard Lazu:** Wow... That's, that's... That's a lot.

**Jon Buda:** I think that's on the lower level, too. I actually talked to another... I don't know if you -- I think he might be the CTO of a different podcasting company, that also runs Rails and also uses Cloudflare, and they were like in the multiple petabytes a month, which is kind of wild.

**Gerhard Lazu:** Really? Wow... That's big. Okay. So for us, it's 45 gigabytes.

**Jon Buda:** Okay. Yeah. That's a big difference.

**Gerhard Lazu:** Okay, that's not the reaction I was expecting though. It's 45 terabytes. Seriously, it's not gigabytes. \[laughter\] But still... Yeah, it's like an order of magnitude, and a bit. One and a half.

**Jon Buda:** Cloudflare has been great. I can't speak for Jason, but I think they've been great. They keep adding really cool features that we haven't really used, but...

**Gerhard Lazu:** Which is your favorite Cloudflare feature? Go on, I'm very curious.

**Jon Buda:** Oh, I mean, we have haven't even used so many of them...

**Gerhard Lazu:** The one that you use, and that you love.

**Jon Buda:** I mean, we just use the CDN, really.

**Jason Pearl:** We were we were looking at Pages...

**Jon Buda:** Yeah, we were looking at Pages, and then there's Cloudflare Workers - I feel like we could probably do something with workers if we moved all the media stuff over to Cloudflare, entirely.

**Gerhard Lazu:** Those redirects - there's something there. Cloudflare Pages and redirects - I think there's something there.

**Jon Buda:** Yeah. I mean, it seems like you could build entire apps within Cloudflare now.

**Gerhard Lazu:** But I don't think you would do that. Like, based on what I've heard - no, no. Rails is here to stay.

**Jon Buda:** Yeah, I mean, not unless it made sense. I mean, if we wanted something to be running on CloudFlare that didn't require our Rails app to be up, then possibly. But I don't think we necessarily have any ideas yet.

**Jason Pearl:** There's definitely things that can make sense to run isolated. Things I think about it on that side is just like an audio processing service. So you just like ship it to metadata, and it has access to the files; that would be interesting. Yeah, it works out \[unintelligible 00:38:21.27\]

**Gerhard Lazu:** So if you were to do one improvement -- no. Actually, no, no, because I'm sure there are few improvements are already in flight. Can you tell us the thing that you are improving, that you're excited about? Whether it's the infrastructure, whether it's the app, whether it's the deployment, the pipeline, the tests... Anything, really.

**Jason Pearl:** We made a small quality of life change recently... Like, we were shipping automatically to staging, but we did a manual deploy for production, and now deployment to production is just the merge in Git, and it's been it's been nice. It saves you ten minutes of staring at the screen.

**Jon Buda:** Yeah, it's been nice.

**Gerhard Lazu:** Okay. It can be maybe your local configuration, something that, you know, you went from Ruby 2 to Ruby 3 and you've seen some change... Or you're building on top of something that you've done recently... You know, things that you're looking forward to, or that just happened, that the recent... Basically, the improvements, the quality of life; it can be that, sure.

**Jon Buda:** One that Jason worked on a little while ago was improving our importing process for a podcast. So when you sign up for Transistor and you're coming from a different provider, you can drop in your RSS feed and it'll import the entire podcast for you into Transistor. Previously that was happening synchronous, like all at once; it was basically just like a background job was running and importing everything, all at once. Sometimes that took a couple of minutes for a small podcast, sometimes it took an hour for a big podcast, and it was just something running in Sidekiq for an hour. Jason split that up so that it basically did everything asynchronously. So it'll import all the information from the feed, but then processing the episode would just happen in a queue, so that you could actually process multiple episodes at once, for an import, and it would finish -- it finished probably like ten times faster, at least.

**Jason Pearl:** \[40:15\] This is probably one of the things you were alluding to when you were talking about background processing... Like, even with Sidekiq, running, running something for an hour is not great. And then you kind of have to look and see what's running before you deploy, so you don't squash it, and then not get the job back. So this is nice; everything runs in under a minute or two.

**Jon Buda:** Yeah, things can fail better, you can pick up where they left off... Previously, it was like import or fail, and it would sort of just like -- it would let us know, but it would be stuck in a weird state.

**Gerhard Lazu:** So a merge deploy straight to production, a big Sidekiq job was split into multiple smaller jobs, which complete quicker... I think if we have one more, that will be amazing.

**Jason Pearl:** The other interesting thing about making imports faster, and concurrent, was that certain places are not huge fans of you pulling 5, 6, 7 audio files simultaneously... So we have some very specific rate limiting for a service or two in there.

**Jon Buda:** Let's see... Another improvement we made?

**Gerhard Lazu:** Or that you're thinking of making, that's maybe in the works. That also works.

**Jon Buda:** Well, I mean, back to the Cloudflare discussion... That is one thing that we're thinking about, but would be a big change for us, and an expensive change, just because of the feature that we need in Cloudflare is actually part of their enterprise plan. But that would have more to do with like improving podcast analytics, making analytics collection and audio serving independent of the Rails app.

**Gerhard Lazu:** Yeah, I know what you mean.

**Jon Buda:** That's going to be a bigger change, but it's something that Jason and I have talked about a lot, and I think Jason is excited to work on... But we'll just have to figure out if it makes sense to make that jump, and when.

**Jason Pearl:** I also think that might be something that might not be Rails, but we'll have to...

**Jon Buda:** Jason is also a big fan of Go, so he wants to write some more stuff in Go.

**Jason Pearl:** We've got a small tool now, but it's for developer usage to build --

**Gerhard Lazu:** Receiver CLI?

**Jason Pearl:** It is. That's correct. It was originally the experiment that we kicked off to make a standalone application to serve the website, and it used a Go version of Liquid template engine... But ultimately, we rebuilt that in the Rails app. But this gives people the ability to develop locally your whole array of Liquid templates that go into a theme, and see what that looks like against the production environment before submitting it.

So we're flirting with the idea of, in the future, letting folks build their own themes with Liquid, but right now they're just kind of embedded in the application. But there's no good way to build a new theme for somebody that doesn't have the Rails app spun up. So this gives you the ability to do that.

**Gerhard Lazu:** Moment of truth... How long does a code change take to make it into production, from commit to production?

**Jason Pearl:** It got worse recently... \[laughs\]

**Gerhard Lazu:** It's because of your tests, Jason. You have to stop writing tests. \[laughter\] That's what it is.

**Jon Buda:** It can be a matter of minutes, really. I mean, we deploy multiple times a day sometimes. I think what Jason was alluding to was the upgrade we made on AWS. When we upgraded our Elastic Beanstalk version, we switched load balancer types, and for some reason, when we deploy to production now, it takes like 15 minutes or more to finish the deployment. And all of it is due to the deregistration/registration of the instances behind the load balancer is just slow as hell with two instances. On one instance, on staging, it's fine; it takes like a minute.

**Jason Pearl:** \[44:00\] Network load balancer registration is slow.

**Jon Buda:** For whatever reason there's like a bunch of configuration that is supposed to work and doesn't.

**Jason Pearl:** Well, essentially -- I mean, it's rotating machines, because with a single instance I think it just throws up its hands and says you're gonna have an outage. And with multiple machines, it deregisters, waits for the deregister, and then upgrades that machine and then puts it back in. So that process takes forever.

**Jon Buda:** Those timeouts are supposed to be configurable, but don't seem to do anything. And like I said, we're not ops experts, we're not AWS experts, by any means, so it's possible we're missing something. I don't know. But you know, there's people we could talk to, but it was -- Jason banged his head on that for a long time, trying to fix it, and we're just like, "Well, we're just gonna go with this." So if we sped that up, we could get code changes out in a matter of minutes.

**Gerhard Lazu:** How long do the tests take to run?

**Jason Pearl:** It's a pretty fast test suite.

**Gerhard Lazu:** And how many do you have? If you have two, then that's okay.

**Jon Buda:** No, it's like 30 seconds...

**Gerhard Lazu:** 30 seconds. Okay. Are these integration tests, or is it just unit tests? What type of tests do you have?

**Jason Pearl:** It's all unit? That's a good question. I don't know how many we have. I wanna say like \[unintelligible 00:45:08.02\]

**Gerhard Lazu:** Okay. Yeah, we have something like that. Up to 1000, roughly. The last time I looked, 600 and something it was for us. Okay.

**Jon Buda:** We try to keep them quick.

**Jason Pearl:** Usually, when I start somewhere, one of the first things I work on is trying to speed up specs. There'll be a couple that are sitting there at 30 seconds, but the whole suite has always run well under a minute.

**Gerhard Lazu:** You said specs.

**Jason Pearl:** Yep.

**Gerhard Lazu:** And that's reminded me of Rspec. I love that thing. Even to this day, I haven't seen something better than Rspec. Seriously. The DSL, the simplicity... That's one thing which I miss from the Ruby world.

**Jason Pearl:** You might be surprised that the DSL now has changed significantly, but also very nice.

**Gerhard Lazu:** In a better way?

**Jason Pearl:** I think so. There's like a lot of \[unintelligible 00:45:56.26\] stuff quite some time ago, but now they've gotten rid of that. Less magic.

**Gerhard Lazu:** How long does the app take to boot? Because Rails was known for slow boot times for a long time. This was a decade ago. Maybe it sped up. Maybe Ruby 3 sped up.

**Jon Buda:** Yeah, it's improved over time. It only takes a couple seconds.

**Gerhard Lazu:** Really? Seconds?

**Jon Buda:** Yeah, it's quick.

**Gerhard Lazu:** Wow. And even like to start serving requests? Okay, that was Go. I mean, Go takes like no time at all. Within seconds it's ready. Rails used to take 30 seconds, a minute; that was normal. You know, to load everything... Okay.

**Jon Buda:** It's improved.

**Gerhard Lazu:** Okay, good.

**Jon Buda:** I remember those days.

**Jason Pearl:** The first time I ran a Go web server, I had to look up what the symbol meant, for the timing. Because it's like microseconds, or something like that.

**Gerhard Lazu:** Exactly. Nanoseconds even in some cases... Exactly. It's like, it's there. Okay.

**Break:** \[46:54\]

**Gerhard Lazu:** Is there a service that you couldn't live without? Like, in your stack, something that you use, that you could not do without.

**Jason Pearl:** FFmpeg...

**Gerhard Lazu:** FFmpeg? Okay, that's the bread and butter. Okay.

**Jon Buda:** That's a good one, Jason.

**Jason Pearl:** That would make everything very difficult. It's funny too, because when I started -- I haven't done any audio stuff, I haven't really spent any time looking at podcasting... I'm looking at FFmpeg and I'm like, "There's got to be a better way to do some of this than shell out to this tool." And there absolutely is not. FFmpeg is great.

**Jon Buda:** It turns out it's the best tool for everything. It is kind of amazing... I mean, obviously, we rely on FFmpeg, but it's kind of amazing that all this software is just open source, for us to use... None of this would be possible if all these libraries weren't in existence, and we couldn't just use them. So I don't know, sometimes when I think about that, it's kind of amazing that we can get away with building a company that provides us a living, built on free software.

**Jason Pearl:** Yeah.

**Gerhard Lazu:** I'm pretty sure you just said "Open source is amazing." And I don't think anyone disagrees with that. I mean, oh my goodness me; it changed our lives, for sure.

**Jon Buda:** Yeah, absolutely.

**Gerhard Lazu:** Well, I'm glad that you mentioned FFmpeg, because there's something that we've been working on for a while, and Jerod and Lars, they have all the details... I think we're very close to stop using FFmpeg, and rewrite everything that we need in Elixir as a library; like an ID3 for the tagging, and... We actually even have an episode where we talk about it, what the plan is. But we're not far off from actually --

**Jason Pearl:** \[54:04\] You'll have to point us to that episode, or put it in the show notes, because we're looking at tagging, which is challenging.

**Gerhard Lazu:** Oh yeah. Now, you will need to switch to Elixir, from Ruby. Phoenix.

**Jason Pearl:** Is there a good built-in tagging library, or did you build it?

**Gerhard Lazu:** We are building it. It's not finished... I'm convinced it's going to be open source, because we don't do anything else other than open source. There's no closed source in what we do. The infrastructure, the setup - everything is out there. And we talk about it extensively, we blog about it... And this will also -- as soon as it's ready, it will come out.

Now, this is episode 61 by the time listeners are listening to it, which means that the Kaizen episode 60 came out. Every ten episodes we talk about the improvements that we do at Changelog, whether it's the infrastructure, whether it's the ops side... You know, all the improvements that we do. That's why they're called the Kaizens. The concept of a continuous improvement.

And we mention it in episode 50, and I think we're going to mention it again in episode 60. It's not ready to be shipped yet, but by episode 70 we should be in a better place. And I know FFmpeg - it's such a huge dependency, and it's the one thing which we just need to install ourselves, and there's -- you know, it's just complicated in a number of ways. But it's also so powerful.

**Jon Buda:** Were you using it mostly just for tagging, or conversion, or...?

**Gerhard Lazu:** I think it's just tagging. I don't think we convert anything.

**Jon Buda:** Okay.

**Gerhard Lazu:** I think the episodes, when they get uploaded, they're already in mp3 format. Do you do conversion?

**Jon Buda:** We do, yeah. Multiple different types, really. I mean, we don't use FFmpeg for tagging at the moment; we're using a Ruby library that is super-old, and it'll never be updated.

**Jason Pearl:** And we might be switching to--

**Jon Buda:** We let people upload audio in wav, mp3, m4a... We actually let people upload video files now, that all get converted to mp3. And then on the flip side of that, if someone uses the YouTube integration, which automatically uploads their episode to their YouTube channel, it will actually convert it from mp3 to - I think it's an mp4 video file, with like a background image interlaced at like one frame per second, or something like that. And then it uploads it to the YouTube API. So yeah, all that.

**Gerhard Lazu:** I remember there was one feature that I think -- I forget her name... Not Holly. The fourth person.

**Jon Buda:** Helen.

**Gerhard Lazu:** Oh, Helen. I knew it was an H, but I didn't how it continued. Okay, Helen. Thank you. So Helen was mentioning about that feature; I think was in episode 135 I heard her speak about that. You know, what it was like launching it, working on it, so on and so forth. So I remember that, and that's something new, which I didn't know that Transistor.fm did, in that you can upload your podcast to YouTube as well... Because there's a lot of benefits to having podcasts on YouTube, on top of all the other platforms that Transistor.fm supports. And is that Justin's idea? Because he's onto something.

**Jon Buda:** I don't know, we've had that around for a while. I don't remember how it came about. Yeah, I don't know. It might have been a collaboration... Justin's big on video. He talks about YouTube a lot, and how it's a huge platform for podcasting now.

**Gerhard Lazu:** I agree.

**Jon Buda:** Which I think is surprising, to me at least, because I don't really watch podcasts or listen to music or audio on YouTube. But I know plenty of people do.

**Gerhard Lazu:** It's very convenient, especially if you have YouTube premium. I know that Elon Musk doesn't have YouTube premium. That was a very interesting tweet, and it came out a few few weeks ago. I've been using it for a few years now. I used to have YouTube Music as well.... And I can either watch any conference talk on YouTube, and when you have premium, you just put it in the background, and you listen to it. And then if you do that, and you're already subscribed to like a bunch of channels which do conferences - it's usually conference channels - then you can subscribe to podcast channels as well, because it's all there. And then because the background listening works, you don't have to have it running. Music as well, you can have video and audio... And then it does that nice switch between quality... So it is a go-to destination, and it's like all in single place. And it's convenient. So if you pay for YouTube Premium, why wouldn't you use it for podcasts as well? And if you want to see their faces, you can do that. I think it's a good idea. Their reactions, and the emotions behind people talking...

\[58:26\] I think it is becoming an increasingly important element, especially since, you know, in the last few years everything changed. It's not that common to work with all the people in the same place. And Zoom, and Discord, and Slack... It's the norm these days. We end up being in the browser, or you know, an app.

**Jon Buda:** Yeah. I mean, that's how we operate.

**Gerhard Lazu:** Talking heads. \[laughs\]

**Jon Buda:** The four of us have all never gotten together, so we're gonna do that this fall...

**Gerhard Lazu:** Never?

**Jon Buda:** Never.

**Gerhard Lazu:** Wow... Do you plan to?

**Jon Buda:** In October we're gonna get together, all four of us, finally.

**Gerhard Lazu:** Whereabouts?

**Jon Buda:** In Montreal.

**Gerhard Lazu:** Okay.

**Jason Pearl:** We sort of triangulated the central spot between us.

**Jon Buda:** It's sort of the central point for all of us... So yeah, that'll be fun to finally hang out together.

**Gerhard Lazu:** What's October like in Montreal? Is it nice?

**Jon Buda:** We'll see. I don't know.

**Gerhard Lazu:** Okay.

**Jon Buda:** I think it's okay...

**Gerhard Lazu:** Let me know what's it like. I've never been.

**Jason Pearl:** Maybe chilly...

**Jon Buda:** from what we read, it's a lot less tourists, so that'll be good.

**Gerhard Lazu:** Okay.

**Jon Buda:** Weather-wise, I don't know. It could be anything, really. Who knows these days...?

**Gerhard Lazu:** And are you taking the whole week? What's the plan?

**Jon Buda:** Yeah, we're going to do a week, and just, you know, hang out, talk about the future of the company, maybe plan some stuff... Just kind of see how it goes. Just spend a bunch of time together.

**Jason Pearl:** Gotta get a whiteboard.

**Jon Buda:** Yeah.

**Jason Pearl:** We'll whiteboard some things. \[laughter\]

**Gerhard Lazu:** That is a good idea. Well, I am involved this week with a team off-site, and the hotel - it was very important to have a meeting room, so we can all meet at the same place, so we don't have to travel anywhere. It was important to have breakfast, a nice breakfast, so that we can have breakfast and then we can start meeting. A whiteboard - I made a special request, make sure it has a whiteboard, and a TV, so that we can, you know, show some slides, or you know, have a bit of fun if we want to. And split the days - have a bit of fun, have a bit of work, have a bit of alone time, people want to hack on things... So yeah, that's top of my mind right now, because that's what's been happening these past few weeks, and what's going to happen for us next week.

**Jon Buda:** Cool. Yeah, I'm looking forward to it. It's kind of amazing how well it's worked out without us meeting. You know, I've hung out with Jason before, obviously a bunch, and hung out with Justin... I've never met Helen. Because of COVID, I didn't see Justin for probably two years, or more; more than two years. We were going to try to get together in the spring of 2020, and that was cancelled, and then it was just like -- I finally met up with him in Canada, January of this year, for the first time since like 2019, which is crazy.

**Gerhard Lazu:** Wow.

**Jon Buda:** But it was good, because like -- Americans couldn't go to Canada, they just weren't allowed... But it's amazing how well it's worked out really, having everyone be remote.

**Gerhard Lazu:** My impression is that you being such a chilled bunch has something to do with it. You come through as very relaxed, very easy-going. I cannot imagine any drama, even if the app goes down. "Yeah, we'll fix it." And then five minutes later, it's fixed. Something like that. That's how I imagine an outage happening.

**Jon Buda:** Yeah, there really hasn't been any -- I mean, yeah, I don't think there's been much drama. Do you, Jason?

**Jason Pearl:** No. This is the least dramatic place I've ever worked.

**Jon Buda:** I mean, if it goes down, it sucks... But generally, if we explain it well enough to the customers who are asking about it, they understand, which is kind of great. No one's like, "Oh, give me my money back" and all this stuff.

**Gerhard Lazu:** What if the Backblaze pod gets deleted, and all the mp3 get lost? What happens then? \[laughs\]

**Jon Buda:** Yeah, that could be a problem.

**Gerhard Lazu:** I'm just thinking like the worst thing... So do you have a backup for Backblaze? A backup for the backup? You know, the first rule of backups - restore them. The second rule - have a backup.

**Jon Buda:** \[01:02:08.01\] Yeah. I think there's a backup in place. We should check that. They have a new replication feature too, which just came out.

**Gerhard Lazu:** Yes. I was meant to beta test it, I just did not have time for that. One thing which - sorry, Backblaze, I really meant to; if you're listening to this, I really did.

**Jon Buda:** That would be the probably the most catastrophic thing that could happen.

**Gerhard Lazu:** If you think about the worst thing and you're prepared for it, it will be good.

**Jon Buda:** The database is backed up, and multi-zone, and all that stuff. But obviously, the code's in GitHub and... Yeah, losing the most important part of the podcasts would probably be a big problem. \[laughs\]

**Gerhard Lazu:** So we used to have a backup of our backup, but not anymore. And that's something which I'll need to look into. I mean, AWS S3 is what stores all our mp3s. We do not back them up. That's it. It's just that. Now, we do have them in a couple of places; Dropbox, things like that. And I know that we have like a bunch of them. Not all of them, but a lot of them are around. But what we need to do is obviously back-up the back-up. We know it restores, but we don't have another back-up. And maybe we go to Backblaze, or R3... That's an interesting one. I was going to ask about that, but we can leave it for another episode... Because as we prepare to wrap up, what I'm wondering is your most important takeaway for the people that stuck with us all the way to the end. Jason, do you want to go first?

**Jason Pearl:** I mean, like you said before, or at least like what our team is doing - keep it simple, if you can. I've definitely worked on much more complex infrastructure, I've worked on teams that have Pager Duty installed and everybody does weekly shifts... This app is easy, easy to maintain, easy to know what we've built. There's not a lot of failure points, and it's been great.

**Jon Buda:** Yeah, I would agree with that. Keep it simple, expect things to go wrong. If they do go wrong, try to stay calm and don't point the finger at anybody, because it's everyone's issue, and at the end of the day, it's also probably not that big of a deal. And then hire people that you get along with.

**Gerhard Lazu:** How do you do that? I think that requires another episode. How do you hire people that you get along with? Because you don't know until you hire them.

**Jon Buda:** That's a good question. I don't know, I've only hired friends.

**Gerhard Lazu:** Hire friends. \[laughs\]

**Jon Buda:** Hire friends. That's probably a tough one... I don't really have an answer for that, but it makes a huge difference, because you're gonna be working with those people every day. If you can get into an argument or a discussion and not yell at each other, and find some common ground, it's definitely better to do that with people you can enjoy being around.

**Gerhard Lazu:** Does hiring slowly have something to do with it? Because you hired slowly, right? You've grown slowly. You've taken your time. You haven't 2x-ed in two months.

**Jon Buda:** Yeah, we have never really wanted to do that. I mean, that didn't really appeal to Justin and I. Neither of us really want to manage people unnecessarily. I mean, Jason and Helen kind of, you know - they manage themselves for the most part. We're not like holding their hand and telling them what to do, and counting the hours they work, and all that stuff. We hired when we kind of felt like we had to, or felt like it was really the right time. And even that was a tough decision. But I don't think we really want to get that much bigger either. You know, we're not going to immediately take funding and hire a hundred people. That would change this company so much that it wouldn't even be recognizable.

**Gerhard Lazu:** I think there's a lot of it there. The calmness, the easygoingness, you're doing this to improve your quality of life... I remember, Justin, you keep mentioning this - you're doing this, you're doing Transistor.fm for a reason, and the reason is to have a good life, to enjoy life, to take things easy. That's what you're optimizing for. And then guess what? Things are easy. There's no drama. Things are quiet...

**Jon Buda:** Yeah. I think that was a decision. Even day to day, it's like, I built this and Justin built this because we wanted to have a calmer life, and be able to take breaks, and I think we extend that on to Jason and Helen, too. Even during the day, it's like, "Well, I need to take a break, or take the rest of the day off and do something else" and that's totally fine.

**Jason Pearl:** It has come in handy with a toddler in a COVID-infected world.

**Gerhard Lazu:** Yeah. It had its challenges the last few years. Okay. Well, what I can say, gentlemen, is that I enjoyed this very much. Thank you very much for your time. I cannot wait to have you back, to hear more stories from Transistor.fm. I think it may be a while, because things are happening very calmly, very gently on your end, and that's a great thing. There's no drama.

**Jon Buda:** We'll try to document all of the massive issues we have, if they come up.

**Gerhard Lazu:** Yeah. But it's also like interesting things... Because things are happening so slowly and so calmly, there's no big "Oh, outage this, outage that" or "This went down." You upgrade when you definitely have to, you don't push the boundaries that much, because - why? You'd create issues for yourself.

Kubernetes - I haven't heard that mentioned once, apart from when I mentioned it. No interest in that beast, you know, to tackle it. You're keeping simple tech that works, that has proven itself. There's so many experienced people in this, and apparently, it's great for serving hundreds of terabytes per month. It works. I love that.

Thank you, Jason. Thank you, Jon. Looking forward to next time. Have a great one.

**Jon Buda:** Thank you.

**Jason Pearl:** Same. Have a good one.
