**Gerhard Lazu:** This is the second Kaizen, second series of improvements. 2,5 months later, 10 episodes later, here we are. I listened to the last episode yesterday (our first kaizen episode, episode 10), so I am picking up the discussion exactly where we left off... How about that?

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** Wow.

**Adam Stacoviak:** I'm gonna read the transcript.

**Gerhard Lazu:** As a listener, if you want this to make a bit more sense, then read the transcript, if you want, as Adam is doing; or maybe listen to that, I think it'll make a lot of sense. So a big portion of episode 10 we discussed about incidents, about having issues, and how do we share the learning within the team, how do we capture what happened, what the problem was, how do we have follow-ups for us to improve on. And remember when I was saying that it was either Adam or Jerod that deleted the DNS simple token...

**Adam Stacoviak:** Oh, yes...

**Jerod Santo:** Yes.

**Adam Stacoviak:** I recall that. We were trying to track that down, yeah.

**Gerhard Lazu:** It was actually me.

**Jerod Santo:** I had a feeling... \[laughs\]

**Gerhard Lazu:** Yeah, it was definitely me.

**Adam Stacoviak:** Well, I know it wasn't me... \[laughter\]

**Gerhard Lazu:** I did it.

**Jerod Santo:** Why? How? Tell us.

**Gerhard Lazu:** So when I've set up the new DNSimple token for cert manager and for external DNS, even though I created a new one, I was still using the old value. So there was a new token, but the value which I was using in the new infrastructure was the value from the previous token, from the old token.

**Jerod Santo:** It was the old one.

**Gerhard Lazu:** So when I deleted the old token, because that's what it was in DNSimple, that just stopped working. So things broke.

**Jerod Santo:** \[04:12\] I see.

**Gerhard Lazu:** But it gets a bit more interesting than that. Apparently, there's two sets of tokens. There's one token which you get by user settings and the user access token, and those are the ones that we were looking at the last time, trying to figure out why is this token missing, where is the token. But there's also account automation tokens, which is another submenu in a different page. Those were the tokens that I couldn't find the last time; I confirmed that it was definitely not there, so I worked all that out.

The more important thing was "How do we track this? How do we capture this so that in the future when this happens we know where to look?" We looked at a few incident management platforms, we discussed both FireHydrant and Incident.io; we even did a write-up. I say "we", it's a royal we. We did a write-up to compare the two, just like an internal one, to see why maybe choose one versus the other.

When we discussed in episode ten, FireHydrant was actually fronted by Fastly... Because the issue which we were trying to mitigate against was Fastly, it would have been a bad decision to choose a system that has Fastly in front when there's a Fastly issue, because you can't get to the system. So Incident doesn't use Fastly in front, so that was one of the reasons. There was a couple more... But using Incident, we created four instances so far. The first one was this. That's incident one - TLS certificates are failing to renew. What do we remember about that incident, Jerod? Do you remember much about it, do you remember about the experience, about looking at it? What do you remember about it?

**Jerod Santo:** Is this the one that comes into Slack and starts a new channel in Slack, and then you can update it there?

**Gerhard Lazu:** Yes.

**Jerod Santo:** Okay. So I remember that much... I don't remember anything else about it, honestly.

**Gerhard Lazu:** Okay.

**Jerod Santo:** How about you? You might have way more context than I do.

**Adam Stacoviak:** I remember the emails about it, in addition to the incident in Slack, of course... There were some emails about TLS expiring, and issues, and stuff like that.

**Gerhard Lazu:** Yeah, we had those. Yes, they were useful, but not useful from the perspective of "What is the problem? What goes into debugging the problem, and so on and so forth?" So there is the Incidents Slack channel, which by the way, is public to everyone... So if anyone wants to go in our Slack, open up Incidents, you can see what incidents we had, including the first one. There's a link. In our case, it's app.incident.io/incidents/1. That loads up the first incident. And you just log in with Slack, so that's a nice integration.

The reason why I'm asking this is because having run it and having captured this information, how useful is that? Just glancing at it - does it look useful? Is it something that you see going back to, referring to? That's what I'm wondering.

**Jerod Santo:** So you just heard how bad my memory is...

**Gerhard Lazu:** Mm-hm. That's why you write things down.

**Jerod Santo:** Right. So in the case of somebody saying "Haven't we had this problem before?" Or "Distant memory of TLS errors...", and I would say "Yeah, we have, but I don't remember anything about it."

**Adam Stacoviak:** Yes.

**Jerod Santo:** When was that? We're talking about July, we're now in September, so a couple months... It's just come and gone. Now, I think you've fixed it, Gerhard, so you probably remember it better than I do... I just kind of watched it happen.

So the ability to go back to it, which I now have scrolled back to it; it was July 12th. It just happened to be my birthday when this happened...

**Gerhard Lazu:** Happy birthday! \[laughs\]

**Jerod Santo:** Oh, thank you. Awfully belated there...

**Gerhard Lazu:** I'm pretty sure I said Happy Birthday back then, but now that you mentioned it...

**Jerod Santo:** Now that you know how bad my memory is, you can just retcon that for me... I'm seeing some details here about it, and if I could click through somehow to Incident.io from the Slack incident, then I'm sure there'll be even more information. But in this particular channel, or maybe -- oh, here we go. I've gotta click through to the -- each incident gets its own channel; so there's the Incidents channel, and then the incidents get their own channel... Which I can come and go, and I could read all of the details here, I think. Yeah. So now I'm looking at this, it's kind of loading in, screenshots etc. So it's great for just outsourcing your memory, I think.

**Gerhard Lazu:** \[08:14\] Yeah.

**Jerod Santo:** And that's about what I would use it for.

**Adam Stacoviak:** Yeah. I like the fact that there's a grand channel, an Incidents channel where you can go and see all the incidents. And I like the fact that it's public. So if you're listening to this, you're in Slack already, then just hop in that channel and you can just pay attention to what we're doing... Just for fun, or to ask question, or just be aware. So I think distributing the knowledge not just to insiders, but to externals who wanna participate or just pay attention, you can. That's cool.

**Gerhard Lazu:** That was one of the things which were top of my mind back then. Not only that, but I tried it, and now we're improving our understanding of this new thing that is in our Stack. What do we like about it, what don't we like about it? Stuff like that. How well does it work? Or at least we know where to pay attention when these things happen, when there are incidents... Because a lot of the time something goes wrong and you just don't know; I'm like "What's the problem?"

So I mentioned that we had four incidents since. But the second one - that was an interesting one... This is something that Jerod was trying to investigate, and actually, he even fixed it.

**Jerod Santo:** I did.

**Gerhard Lazu:** That was the PR\#378. Do you wanna tell us a little bit about that, the story behind it?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Testing Jerod's memory again. Here we go.

**Jerod Santo:** I'm now opening the incident to my memory... It was like a failure for the application to boot in production, or something... Oh, it's coming back to me. So this leads into Oban a little bit, doesn't it?

**Gerhard Lazu:** Yes, yes. Parker Selbert. Thank you, Parker; that was a great improvement, by the way. We really appreciate it. And I even captured this in a comment, in PR\#378, how much we appreciate you contributing this, and testing how reliable our system is. And in some ways, it failed in an unexpected way... But for me, the most important thing was to test how we use the incident management platform, how we capture these issues, how we work amongst ourselves, and how we have this memory written down of what happened and why it happened, and what we may want to do about it. That was for me the highlight. But what were you going to ask, Adam?

**Adam Stacoviak:** Well, I'm just looking down the Incidents channel now, and 1) I like the fact that we're describing it as memory, which I think is interesting... You know, some would say that incidents tend to be big things, not small things; I guess they're just incidents, that they can make them more grand than they need to be, basically. These seem to be like blips along the SRE radar, essentially. "Is this app working? Is there an error?" It's kind of interesting how this works out. But the question really is "Is the helpful summary that comes along with the incident?" So is there a precursor ceremony prior to this coming into Slack, or is this automated? Because that summary seems written by you, and that would mean that there's like a pre-incident to you, that you then declare an incident into Slack. How does that work?

**Gerhard Lazu:** Yes, that's correct. So /inc, that's the shortcut. And I forget what is the command, but if I don't type a command and I just press enter, it asks me what I want to do. "Do you want to declare a new incident?" "Yes, I do." I think that's like one of the first options. I fill in the details, like the title, a quick summary, Start, and that just creates a new channel. Then from there I have like a bunch of options; it has check-ins...

I don't wanna spoil it too much, because the episode that soon follows we will be talking with the Incident.io team about Incident and about our experience. So we'll have a whole episode about this - how it works.

**Adam Stacoviak:** What episode number is that gonna be, do you know?

**Gerhard Lazu:** 21.

**Adam Stacoviak:** 21. So it's literally the next episode. So if you're in the future and there's an episode number 21, just pause and go listen to that if you want to and come back. We'll just earmark it.

**Gerhard Lazu:** I didn't want to be too certain... Remember, 100% uptime?

**Jerod Santo:** Haah...!

**Adam Stacoviak:** It's near! It's on deck. I've been using the word "on deck" lately.

**Gerhard Lazu:** Right.

**Adam Stacoviak:** So in Slack you have /inc, which is short for /incident.

**Gerhard Lazu:** That's right.

**Adam Stacoviak:** You can do either inc or incident fully, the full name... And it creates/manages an incident.

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** \[12:01\] So when something happens, you create an incident here, you summarize it, it asks you some questions, there's some interactive process that Incident integrates with Slack to let us use the Slack channel Incidents, the Incidents channel, as our pointer to all incidents that happen now or in the future.

**Gerhard Lazu:** Correct.

**Jerod Santo:** So let's go back to this Incident 2, and let me tell the story, because it unravels a little bit from this Oban situation which you just thanked Parker... So let me tell that story, because our listener hasn't been in on it.

The last episode we were talking about Changelog.com and the open source codebase that runs it, and Parker was listening to the episode. Parker Selbert. So let me tell that story, because our listener hasn't been in on it. The last episode we were talking about Changelog.com and the open source codebase that runs it, and Parker was listening to the episode, Parker Selbert. And he is the author of Oban, which is a background job processing library for Elixir, which is a dependency of our codebase, but we weren't fully utilizing that.

So to tell that story a little bit, when I first wrote all the background processing stuff in Elixir, it was just happening by just backgrounding things with native Elixir functions and features. And that served us very well for many things, such as sending emails, and processing statistics, and anything you don't wanna do in a background job. I didn't need a background job library, which I thought was really awesome; I guess that lasted us four or five years without having to have a background job library... However, late last year we had Alex Koutmos working on some features, and one feature is the ability to edit your comments on the site, not have the original comment be emailed directly to the recipients; the notifications be delayed, basically...

So if I write a comment -- I think I have three or five minutes to edit that right away, just for typos, and... You know how you always know it's a typo right after you hit Submit, right? Even with the Preview. We have a Preview button, you can preview the markdown, you can look at it... And then you hit Send and then it's like, "Oh, gosh..."

**Gerhard Lazu:** Undo emails? The feature which I use the most. Undo. Undo.

**Jerod Santo:** Yeah, exactly. This is basically the Undo Email feature in our commenting system... And to do that, we have to say "Okay, delay the email notifications for this comment for five minutes, so that person has a chance to edit it." We don't wanna send out the original if they're gonna change it. So for that, Alex added Oban, which you can do exactly that feature. So Oban has a background processing library that's persistent, it uses Postgres as its persistence layer.

So Alex added that and said "Hey, there's a bunch of other stuff that we can cut over to Oban if you want me to", and I was like "Nah, I'll take care of that." And then I never did. \[laughter\] Thankfully, I didn't...

**Adam Stacoviak:** Because things happen...

**Jerod Santo:** ...because Parker was listening to that episode, and out of nowhere, he opens this amazing pull request, the one that Gerhard just thanked him for...

**Gerhard Lazu:** 378.

**Jerod Santo:** 378, where he basically goes through our entire website in best-practiced fashion Oban usage, removing some dependencies like Quantum, which was a cron scheduling thing, which Oban can do cron scheduling... All this cool stuff. So thank you for that. It was an amazing PR, and it was cool to see not just Oban being used more broadly, but also the guy who wrote it, so you know it's the right way to use it, versus me trying to use it with my limited knowledge... So that was really cool to see. And his reasoning was actually that, he was like "Here's a nice open source codebase that's using Oban. I want to be using it in the best way possible, so when people see it, they see best practices." So that's why he said he did it.

Now, the roll-out to that caused this incident, and it's all coming back to me... He had a typo in the production config, which of course it's only in prod... So none of our test environment runs it, in dev you're not gonna see it, in tests you're not gonna see it... And so I did all my due diligence except for in prod, and then we did our due diligence in prod when we deployed it, and everything broke. Now, this is pointing out this insufficiency in our deployment process, right Gerhard? Because this should have never went live. Is that right?

**Gerhard Lazu:** \[15:52\] Yes. So first of all, I'd like to thank Charity Majors for coining and popularizing the term -- I'm not sure about coining, but definitely popularizing the term "test in prod." Like, until you test in prod, you're not really testing; you're pretending to be testing. I'm being facetious now, because it's not quite like that, but the listeners that know this slogan, where it came from, from Charity Majors, know what I mean.

To come back to Jerod's point - yes. This release should have never gone out, in the sense that when the new version came out, because it failed to boot, it should not have been put behind a service, because it was never ready. It would never boot. For some reason, it was, and even to this day, I didn't spend enough time on this to understand why that happened... Because the system in this case being Kubernetes should not have updated the new pod; it should not have put it behind the surface, because it was never healthy. It never booted long enough, it never started. Why it happened? I don't know.

**Jerod Santo:** Yeah, because -- isn't this the way Kubernetes works? It's like, blue-green deploys, or something. It never went green, it should have stayed blue.

**Gerhard Lazu:** Exactly. Yes, it's a bit more basic than that, in that if a pod is not healthy and ready, it will not be put in the service... Because it's not healthy. It has to pass its health checks before it can be marked as ready. And it was never ready. These are the readiness probes. The readiness probes, which basically runs HTTP requests, I think -- yeah, they are HTTP requests to port 4000; there was nothing bound to port 4000, because it wouldn't boot for long enough. I mean, it actually wouldn't even boot; it would crash, because the content was wrong, so the app could never boot. And because it could never boot, how did the readiness probes pass? They never passed. And if they didn't pass, why was the pod put into service? That should have not happened. But it did.

**Adam Stacoviak:** So what happened as a result of that then? So the pod that was unhealthy was put into service... And what was the actual incident?

**Gerhard Lazu:** So the incident was that the origin was returning 503 responses. What that means is that the CDN, Fastly - it proxies these requests, it forwards these requests to LKE, Linode, where our app is running. And the origin in this case being LKE, our app running in LKE, was returning 503. This is Ingress NGINX. Ingress NGINX serving 503, the backend is not available, so the CDN was basically forwarding these requests.

Now, this actually affected only a subset of users. The CDN will serve stale content for all get requests. Obviously, not the dynamic ones, not like post, patch, stuff like that. But get, head - all of those, they will serve stale content. If you're logged in, because you're an author and you have like a token and a cookie, obviously, none of those requests will be cached. So the website will be down for each who were logged in. So Adam, Jerod, myself, when we logged in the app, we would see that it's down. But anyone listening to our feed, or podcasts, listening to episodes, they don't even see this. Browsing the website - they wouldn't see this, especially if they're not logged in. So that part behaved as it should, that was good, but obviously, we detected it and now we're alerting detecting it and we could see straight away that it was down.

**Jerod Santo:** Yeah, exactly. So it's kind of like a degraded performance is what it becomes, because there's certain endpoints, certain pages, whether you're logged in or logged out, that don't work... And I think it was actually a redirect that we were used to having there was failing because of a 503 when it finally hits the app, and so for certain people - I think it was for signed in people only, which is like, you want your signed in users to have their best experience, but they actually get the worst... It was just down for them. So that's what happened, and of course, fixing that was paramount. But according to the world at large, we were still up.

**Break:** \[19:30\]

**Gerhard Lazu:** One of the other things that we improved since episode 10 were more redirects at the edge, specifically in Fastly. So now we have www to the root domain to the apex, redirects in Fastly, and things happen very quickly, rather than going all the way to our app. HTTP to HTTPS redirects, which also happen in Fastly... And I think there are a couple more changes around the health checks frequency, because we were getting just way too many health checks. I think we were getting close to a thousand every minute, from all the Fastly pops...

**Jerod Santo:** Oh, wow.

**Gerhard Lazu:** ...and we've reduced that to about 300, maybe even lower; I forgot exactly how much it was. Actually, I can look it up. Let me click on this to see exactly -- oh, yes! See? Writing it down. \[laughter\] So our Ingress and our app - they were servicing 44 requests per second from all the Fastly pops, which means 2.6k requests per minute. It was quite a few things in our logs...

**Jerod Santo:** Wow.

**Gerhard Lazu:** And when we went down, we went to - let me expand the screenshot... We went to about 196. 196 per minute. So we had about 3 requests per second; more than 10x improvement. So we were placing way too much load, way too much strain on our origin. But the thing which I wanted to focus on is some of the improvements, some of the redirects, which we did in Fastly, and that was one of the improvements that Jerod wanted to make.

**Jerod Santo:** Mm-hm.

**Gerhard Lazu:** So can you tell us a bit more about that, Jerod? Why did you want to make them and how did that work? Because there was also a problem that Adam spotted. That was a good one.

**Jerod Santo:** So first, the why - we don't wanna serve anything over HTTP, because HTTPS everywhere. Let's not worry about it. Everything, always, every time. That's why you do it with Fastly, right? They just go ahead and take care of it in every case.

And then www - well, we just don't like it. Right, Adam? We just like the cleanliness of the Apex domain. I kind of despise the www in our address bar. Some of it is just like personal taste, but really what the problem is is both. That's the problem, more than anything. If we were gonna pick www and redirect that way - totally fine, technically, and SEO-wise, and all of that kind of stuff. But if you're gonna pick the other direction, which is the direction that Adam and I just like to go, and just go Apex domain - same principle applies; it has to be all the time.

So we had these issues where it's easier to go from Apex to www than the other way around. And it always had to do with non-standard DNS records; I always never know the details, but you're not supposed to CNAME an Apex domain, so they create these other kind of records that are not part of the DNS spec... Y'all know what I'm talking about.

**Gerhard Lazu:** Yeah, exactly.

**Jerod Santo:** So there's reasons why www on a technical basis is just easier to accomplish. Well, we didn't wanna do that; we don't like Easy mode, we like Hard mode... So nope. Get rid of them. We don't need them, we don't want them.

So that was happening at Fastly, but it wasn't happening universally... So Gerhard, you had kind of turned it on, turned it off over the course of time, because weird things would happen. One of those weird things Adam spotted, which is Safari would redirect sometimes, and then fail to redirect other times. And it would only happen in Safari. So only Adam and myself, every once in a while, would catch up on it... But in Curl everything is fine, in Google everything is fine, in Brave everything is fine... But Safari would fail to redirect.

\[23:59\] And the reason for that was that we had basically a bad conditional in our Fastly config, which would match every request, and add a location header to every request, even non-redirect requests... So you'd get like a 200 okay to Changelog.com route, and it would have a location header in there, which - most browsers are like "Well, I've got a 200. I don't need to look for a location header", so it ignores it. Well, Safari would not ignore it; they'd pick up on it anyways, so it caused some issues, with the redirects working -- redirecting where it's not supposed to. All sorts of weird things.

It took me a long time to figure that out, because you're not looking at the headers when you're looking at the response codes, and you look at the header -- you're a lot like a browser, right? When I see a 301 or a 302, then I look at the location header. But otherwise, I didn't realize "No, the location header is being added every single request by Fastly", so I had to go in there and rewrite that condition to basically have two checks. One is this request that's going to be redirected, and -- well, that was the one I added; it was make sure it's a redirected request in order to add the location header.

Lots of detail there, lots of little Fastly changes... Talking about testing in production - like, "Well, I'm gonna roll this one out real quick and see if that works", and scripting up requests to hit all the endpoints that I wanna make sure they had the right responses... But got that fixed, and now we're 100%, every single time. www gone, and HTTPS all the things.

**Gerhard Lazu:** That's right. I remember experimenting with this in production, and the last time when I've done this - I think i was like a year ago - I introduced at least an hour's worth of downtime... And it wasn't like constant downtime, which I think is more manageable; it was flaky downtime. It'd be down for five minutes, then up for two minutes, then down again for ten minutes... It was a terrible experience for users.

So this time around I used another domain, which I just had sitting... Because each and every one of us has at least ten domains that we bought, but don't use...

**Jerod Santo:** Right.

**Gerhard Lazu:** So I had one of those, and I tried setting a new Fastly service and configuring a few things, but I missed this... This one thing which was setting the location header, but the status code was wrong, I missed. So you're very welcome for that surprise... \[laughs\]

**Jerod Santo:** Right. \[laughs\]

**Gerhard Lazu:** It was like, "How sharp is Jerod? Can he figure this one out?" No, I didn't think that.

**Jerod Santo:** Well, what's funny - there's like a bias when you're going into somebody else's work, where with myself I always know my incompetence... But when I'm editing your work, I'm assuming every change is fully competent, with full knowledge... You know, I just give you way more respect than I give myself, so it's hard to find those flaws, because I'm like, "Surely, Gerhard knew what he was doing when he set this, so I must not know what I'm doing", because it looks wrong... So it takes me longer to actually be like, "No, actually he just made a mistake."

**Gerhard Lazu:** I really appreciate that, by the way, the respect part; thank you very much, Jerod. \[laughs\] That means a lot. But I do make mistakes, actually a lot... So a lot of the time I fix them so quickly that people don't even know I've made them. But trust me--

**Jerod Santo:** That's the key right there.

**Gerhard Lazu:** ...mistakes - there's so many I make. All the time, every single day. Hundreds and hundreds of them. Because it's essential to learning. Experimenting. At least that's how I see it.

**Jerod Santo:** So when you were describing your DNSimple findings earlier in the conversation, and now we have you guilty again, it reminds me of this amazing quote by Filipe Fortes. I'm not sure if he originated this or if he just has the tweet... But he says "Debugging is like being the detective in a crime movie where you are also the murderer."

**Gerhard Lazu:** That's exactly what it feels like. "I murdered the infrastructure. It's my fault, and I have to fix it. I messed it up. \[laughs\] Why, Kubernetes, why?!"

**Adam Stacoviak:** There's three people here... That closes the loop too, your mention of the extra domains hanging around and testing them, because I was like "What is that weird domain in Fastly?"

**Gerhard Lazu:** Yeah. Do you remember which one it was? Do you still remember it? It's a very special domain. That's my future.

**Adam Stacoviak:** Well, I didn't wanna call it out and dox you in case it was private, or something like that...

**Gerhard Lazu:** No, it's okay... It's my surname. But the TLD means a lot to me...

**Adam Stacoviak:** Gotcha.

**Gerhard Lazu:** Do you wanna check it out real quick?

**Adam Stacoviak:** Well, I was like, "What is this domain doing there?" It was interesting.

**Gerhard Lazu:** Yeah. It is a special one, I have to say. It is the future.

**Adam Stacoviak:** I went to it too, and I don't recall it being memorable in terms of going to it... I think it actually just said like -- yeah, "Pong." That's right.

**Jerod Santo:** It just replies with Pong when you go there?

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** \[28:10\] Yeah. Ping Pong, yeah. That's like an Erlang joke. Or not like an Erlang joke, but whenever you ping nodes, they respond with pong. And they respond Pang if they can't ping other nodes... So yeah, it's very relevant to the Changelog infrastructure and our app... But anyways.

**Adam Stacoviak:** I checked it out, I was like "What is this domain?" I'm like, "That's weird. Okay... Surely, Gerhard must know what he's doing..." \[laughs\]

**Jerod Santo:** I knew exactly what it was. As soon as I saw Lazu, I was like, "Oh, he's got a test domain out there he's been trying to futz with." Because it is kind of -- I mean, when you're basically editing \[unintelligible 00:28:38.17\] cache configs via a web interface... And they have some nice tools for diffing, and they'll do a static analysis and make sure that that thing is gonna actually boot, or whatever... But it's hard to replicate a production environment in a way that you can just futz around with a config, especially when you're putting conditions, and rewrite rules, and adding headers, and removing headers... And just doing that on your live production site causes all sorts of little downtimes, right Gerhard?

**Gerhard Lazu:** That's right.

**Jerod Santo:** So that was a good move.

**Gerhard Lazu:** That's exactly like -- okay, so the domain is lazu.ch. And ch is really special to me, but we'll talk about it another time.

**Adam Stacoviak:** Like today, or a different day?

**Gerhard Lazu:** It's up to you. You ask me the question, okay?

**Adam Stacoviak:** What .ch do you mean? Let's resolve this now. What is it?

**Gerhard Lazu:** Okay. So ch is a TLD for Switzerland. Switzerland is a really special place for me. It's the one place where I feel like home; it doesn't matter when I go, whether it's summer, whether it's winter... Every single opportunity I have to go there, I go there. DevOps Days Zurich happens today, and I think yesterday, and I was really bummed that I couldn't make it... Maybe next year. It happens once a year. It's a really special place, and it is a future home, for sure. It's also a present home, but it's more like a spiritual home rather than an actual physical home... But it's in the future. A few years, a couple of years... Who knows? But it's definitely there. We have to go as a family to Switzerland at least once a year. It's perfect. And this year was amazing.

**Jerod Santo:** Yeah, I saw some of your recent Insta posts, or your wife's posts as you guys were vacationing there, and I was like, "Their vacations look amazing. They're really good at photography and great locations", you know?

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** And there was nobody else around. It was just you. You had the mountains to yourselves. You essentially owned them.

**Gerhard Lazu:** Yeah. It's not many people out there, because it's so big and wild...

**Jerod Santo:** Pretty cool.

**Gerhard Lazu:** And yes, you have to reach these spots, but you get some nice and quiet places. You can be walking for hours and not see another soul... It's great. I love it there.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Anyways, coming back to the issue at hand - this ClickOps, Dan Mangum, in episode 15...

**Jerod Santo:** Yes, ClickOps.

**Gerhard Lazu:** He mentions it. That's a great one.

**Jerod Santo:** I love that.

**Gerhard Lazu:** Yeah. We were meant to write - or at least attempt to start - a Fastly provider for Crossplane. Didn't have time; too many things happened. But we must, must version control and GitOps our Fastly config. ClickOpsing is just - no. It's not gonna work.

**Jerod Santo:** Plus, they have their own little version of version control in there... So I'm in there, reading your comments and seeing what you changed, and just like you would, I would love to have that with all of our existing tooling and not have to go into their web interface, and blah-blah-blah.

**Gerhard Lazu:** Yeah, I mean, that's one thing. And I think this ClickOps nature of Fastly makes it easy to make certain mistakes, and it makes it more difficult to experiment easier... So experimenting is a little bit harder in how we create the surveys; I have to combine things... You can't just put everything together. I had to install binaries on a server which I had to set up as an origin, because it was that difficult to just combine everything together. I wish it was simpler. Much, much simpler. So yeah, that's one of the areas of improvement. There's too many, so we have to focus, I suppose. But that was a good story, I thought.

**Adam Stacoviak:** So just to call it out for the listeners - if you're listening to this and you're curious what the deeper story is, episode 15, ClickOps, Dan Mangum...

**Gerhard Lazu:** \[31:57\] That was a great one, so thank you, Dan. We will make it happen, for sure. Upbound Cloud, it's in the future as well... But anyways, let's leave that for another time, because this is one thing which I find myself doing - I get excited about so many things, and I wanna do everything, and it's physically impossible... So I have to focus a bit more. So let's do just that - let's focus a bit more on the incidents that we had, on the things that we've fixed, because that's what this episode is about.

Cool. So there were two more incidents which happened shortly after our second one, the origin, the PR\#378, and they all had to do with Linode networking issues and Linode LKE unavailability. I'll link it in the show notes, the specific incidents, which we called them out... But as a result, August 3, August 26th, incident 3 and incident 4... By the way, if you go to the Incidents Slack channel, you'll find them. You can click, you can go through them; they're publicly available on our Slack.

There was a couple of things there... The one with LKE was interesting, because our database, the backups and the restores when there's networking issues - they are not as reliable, which then prevents things from rebooting properly... So that was like an interesting one. I'm sure we'll come back to this, especially as we start looking closer to CockroachDB and a Fly PostgreSQL. That's very, very recent, so we'll leave that maybe for another time... But it's there.

The other one was around, again, CDN Fastly. The website was available 100%. 100% uptime on the Changelog.com via CDN. But our origin, our backend, the LKE one, in these periods, between the two episodes, between episode 10, which was July 15th, and this one, we had 99.69 uptime, which means we were down for four hours. So three nines - we can't even do three nines in our origin. We can do 100% on Fastly when Fastly is not down; that's great... But that was an interesting one to see and contrast and compare.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So this was a U.S. East issue. This is a networking issue in multiple data centers? When you say U.S. East, that's multiple, right?

**Gerhard Lazu:** I'm not sure how many data centers they have, but...

**Jerod Santo:** It's one region though, right?

**Gerhard Lazu:** It's a region, yes. So they don't have U.S. East 1, U.S. East 2, or...

**Adam Stacoviak:** I see.

**Gerhard Lazu:** ...you know, as other providers have. So I think it's a single data center, but anyways, it was affecting us, and it was like a region-wide networking issue. That was August 3rd, and August 26th there was like LKE issue. It was unavailable for about an hour, and things were failing in weird and wonderful ways... But again, if you're not logged in or if you're not doing any dynamic requests, any post/patch to the Changelog app, everything's fine, everything's up. There's a bit more latency, but that's it. That's what users see.

**Adam Stacoviak:** So Linode has a global infrastructure page where they show off the regions... I think it's one, marketing, but then two, obviously, informational... But if what they mean by U.S. East comprises Toronto, Newark, which is in New Jersey, and Atlanta, which is in Georgia - Toronto is in Canada - so that's multi-country, East Coast, Northern Hemisphere, North America... Well, I guess U.S. East might be actually Newark and Atlanta then, and Toronto is on its own. Maybe it's Canada East, maybe it's \[unintelligible 00:35:04.20\] or something, potentially... I don't know.

**Gerhard Lazu:** For us it's Newark, in New Jersey.

**Adam Stacoviak:** So what do you do then? When you have this kind of issue, how do you remedy? How do you plan for network downtime? One, you've got database backups that could go wrong, the reliability, as you mentioned, or even rebooting despite network issues... How do you SRE around this kind of issue?

**Gerhard Lazu:** So we touched up on this in episode ten, where we talked about multi-cloud... But I think for us it's even simpler than that. I started looking to Fly, like seriously looking at Fly recently, and they have a concept of running multiple instances of your app in different regions, very easily. And it works, but the problem is that for the Changelog app we have two - well, actually there's one very important dependency, and that's the -- you know what I'm gonna say, Jerod, right?

**Jerod Santo:** No.

**Gerhard Lazu:** The upload media volume.

**Jerod Santo:** Oh, yes.

**Gerhard Lazu:** \[35:56\] Until we have that, we can only run a single instance, because the volume is just local; it can only exist in a single region. Things get very complicated if we use multi regions. I know there are solutions, but the trade-offs - I wouldn't want to make them. It'd be much easier --

**Adam Stacoviak:** And that's a Linode thing, right? That's not a -- that block storage, essentially. That's what that is, is just local storage.

**Gerhard Lazu:** Exactly. Block storage, local storage... Yeah.

**Adam Stacoviak:** Okay. I wasn't sure if it was their block storage service, and it's local to that --

**Gerhard Lazu:** Yeah, it doesn't matter how it's implemented, or who you're using, whether it's Fly, whether it's Linode, whether it's GCP... In this case, a disk can only be attached to a single instance, and it's like a Kubernetes limitation as well, depending on the CSI driver... The point being, until we store our media, our files on an S3-compatible API (it doesn't matter which one it is), we are limited to running single instance because of this volume thing. So if we had that, if we stopped depending on local storage or block storage and we used this, then we could have multiple Changelog instances. And if a region went down, that's okay; we have two, three more running. So that sounds interesting.

**Jerod Santo:** So I've made the first steps in that directions, I just haven't made steps two through n at this point. And the first step was to identify the replacement library for Arc, which is the file uploads library we are using... Which does have S3 support, but has fallen into -- I don't wanna call it "disrepair", because it's working just fine. Let's just call it "unmaintained mode." I just don't wanna change and make progress on a library that's unmaintained, and I don't wanna maintain it either, at this phase...

There are some folks who've picked up the mantle and run with it, and it's actually a community fork called Waffle, which is being maintained by the communities. I couldn't remember it, I had to find it in my bookmark history or my search history, because Waffle does not come to mind when you think of Elixir file uploads. Waffle... I don't know. It should be like XUpload. That's how Elixirists name things. UploadX. So it took me a while to find it, and then I started to actually dive in and find out what they've been doing since then, the process it takes to swap it over... So I'm on that phase, of switching over to cloud uploads. So more to come. We're not there, but it hasn't been zero action by me on that.

**Adam Stacoviak:** That would include user-related stuff to like avatars, uploaded images to news items... Anything uploaded essentially into this - that would be no longer local; it would be in the S3-compatible, everything.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Yeah.

**Break:** \[38:30\]

**Gerhard Lazu:** There is one more thing which I wanna talk about before we tackle the next steps, which I'm a big fan of - what happens between episode 20 and episode 30. The thing that I wanna talk about before we cover next steps is the errors in Sentry that we've been seeing. So between July 15th and September, basically, between the two episodes, we had 3.2k errors.

Sentry makes it really easy to see exactly what's been happening in the app. 2.3k thousand of them are the undefined \[unintelligible 00:41:25.28\] And this is actually linked to the Erlang 24 upgrade that we did with Alex Koutmos three months ago. Alex, it's your fault... No, it's not. It's actually mine. \[laughter\]

One of the unintended side effects of that upgrade was that one of the libraries that we use - and Jerod knows more about this - is no longer working. So tell us a bit more about that, Jerod.

**Jerod Santo:** Well, I can tell you the rabbit hole I've gone down trying to fix it, which is that basically our Twitter Auth has been offline ever since then... Which so far only Mat Ryer seems to know about, so maybe he's the only one who uses Twitter Auth on a regular basis... Because he's always like, "I can't sign into the website." And I'm like, "Dude, just put your email address in there and we'll send you a magic link." And he's like, "Oh, you can do that?" Anyways... He really likes Twitter Auth. We offer GitHub Auth and Twitter Auth. Well, we did offer Twitter Auth for a while, until we upgraded to Erlang 24... And this crypto HMAC error happens deep inside of the ueberauth\_twitter library that we use. And it's a difficult situation, because it basically -- I don't know if "segfault" is the right word, but it just crashes the interpreter altogether. This is not a nice stack trace, and everything. It's deep down in there, but what it's saying, this crypto HMAC error, is not exactly the problem, I don't think... But it's very difficult for me to debug, because I have to debug it from inside of ueberauth\_twitter, the package. And that package doesn't handle the situation gracefully at all; it handed up the stack to me in order to debug... And I can't actually \[unintelligible 00:43:02.25\]

So that's as far as I've gotten... I've found out what the problem is. I think it's when it's passing in an empty session cookie, for some reason, and it's trying to HMAC an empty string, if I recall correctly... It's hairy down in there, but actually, it's just navigating the debugging which has made me not be able to fix it... So what I do is every couple of weeks I go check their repo and see if they've cut a new release, and then I upgrade, and I'm like, "Please, have it fixed..." and then it still doesn't work. Because I don't even know what issue to open at this point. It's such a small use of our website, and I'm pretty sure most of those things hitting that error are just robots hitting that route; they're not people.

So I haven't fixed it, I haven't opened an issue yet... I hope that somebody just upgrades the thing and it goes away. Maybe -- is Erlang 25 out yet? I don't know... What changed, Gerhard? What's going on in there? Because I can't figure it out quite yet.

**Gerhard Lazu:** So a function call that this library is making no longer exists. Crypto HMAC with an arity of 3, which takes three arguments - it's undefined in Erlang 24. It must have been removed. So we can go to Erlang 23, it wouldn't take much, really... But 24 - it came out in July; it's a much better one. So many improvements.

\[44:18\] Other than this, we haven't seen any issues. So it's a good upgrade to make. We are on the latest major of Erlang. Erlang 25 is coming out next year. They ship once a year, in the summer, June/July, sometimes May... But it's usually June. So I see two things. Either someone from the library just says like "Parker Selbert from Oban helped us improve things..." That was a great contribution, and that actually would be a nice reward for these episodes that we make, where we talk about these things...

**Jerod Santo:** Yeah, absolutely.

**Gerhard Lazu:** I would quite like that. And if that doesn't happen - not a problem. Maybe we just disable Twitter Auth. If there's not that many people using it... Sorry, Mat. I don't know what we do about that... \[laughs\] But if there's not many people using it, why don't we just remove the feature, rather than -- like, the majority of our errors are this. And we may have some other bigger errors, but we don't see them, because there's a lot of noise. So it just goes to good hygiene, good housekeeping... We either remove the feature or we fix it.

**Jerod Santo:** Right.

**Gerhard Lazu:** And either is acceptable. I don't mind which one it is, as long as the number of errors is going down, as long as we're improving this. What do you think?

**Jerod Santo:** Yeah, I'm pro fixing it, but I'm also -- it didn't cross my mind just to disable it in the meantime. I think that's probably the move - you disable it till you get it fixed; and we definitely wanna get it fixed. There's no reason not to...

And the ueberauth\_twitter is maintained; I don't' see anybody complaining about this. I feel like we're getting in a weird state that nobody else does, where -- I think that arity of 3 is the issue; it's passing in an empty string when it shouldn't be... Anyways, I feel like I could probably get to the bottom of it and find out that I'm actually the murderer somehow...

**Gerhard Lazu:** Maybe even just sharing the stack trace as we have it, and see what the developers of that library think or have to say. Maybe it's an easy fix, I don't know.

**Jerod Santo:** Yeah...

**Gerhard Lazu:** Maybe they don't even know this is happening, because we're the only ones having this problem, which is hard to believe... But maybe people are so stumped by it that they say "You know what - I don't even know how to report this issue."

**Jerod Santo:** Yeah... Part of it is my open source citizenship; I feel obligated to spend eight hours on it before I open an issue, because I know that I'm gonna take someone else's time... So I'm hesitant to open it. Although, on the other side, you're gonna save other people time if they have the same issue. But then I figure no one else has opened it, so maybe it is just me. I don't know, there's too many fields going on there.

**Gerhard Lazu:** Exactly. Well, that's why we do this, right? We think about improvement; how to improve things, even though it may be difficult... But it's that spirit of improvement, of contributing to the open source... Because otherwise, where would we be without it? I don't wanna think about that.

The other source of errors, which -- by the way, these are only three days ago... Ecto.Query.CastError. We had 700 in the last three days. And that seems a bit more meaningful.

**Jerod Santo:** Yeah. So this is a specific route. Your first point is well taken, because I haven't seen this one, whereas the other one, I knew about it quite well, because every time I look at Sentry, it's the top of the list. I haven't actually seen this one till right now, and it looks like it's a single endpoint. It's unsubscribing from the Founders Talk podcast, that's the route, and you're doing it with no email -- like, basically with a user ID that doesn't exist. So this is definitely a robot; that's why there's been so many of them. It's the same exact IP...

**Adam Stacoviak:** This show is really bad at this point then, because we have problems with the show...

**Jerod Santo:** Yeah. Everyone's trying to unsubscribe, we just won't let them. Like, when they hit Unsubscribe, it just errors out; they're like, "Dang it! I'll try again next time they email me." \[laughter\] No, these are all within hours of each other... So this is the same IP, same exact user agent, hitting the same exact route. It's definitely not a person. But I can fix this one pretty easily by basically just making that query a little smarter, and not erring. It'll just send them a 404, or something like that.

**Adam Stacoviak:** Send them through an infinite loop if they're a robot. Sent them to a -- crash their machine.

**Jerod Santo:** \[48:00\] Okay.

**Adam Stacoviak:** Instead of 404-ing it. That's too obvious.

**Jerod Santo:** Whenever anybody tries to unsubscribe from Founders Talk we just crash their machine?

**Adam Stacoviak:** Well, if they have this bot-like behavior, yeah.

**Jerod Santo:** So now I need a throttling library... This is too much work for a troll.

**Adam Stacoviak:** \[laughs\]

**Gerhard Lazu:** No, because I think we can see details. In Sentry, if you click the links, by the way -- and I can't add it in the show notes, but we can see the IP address which it's coming from; we can see the Chrome version, and we can see that it's using Windows 10. So if you're trying to unsubscribe and you're a listener of this, we are looking into it. \[laughs\] We know it's a problem. It's been happening for the last four days. Please hang on tight, we're fixing it.

**Adam Stacoviak:** I would recommend emailing editors@changelog.com and just saying "Please unsubscribe me manually."

**Gerhard Lazu:** Yeah, that's a good one.

**Jerod Santo:** This could be like a really MacGyver-style listener, who's like "I wanna unsubscribe. I realize they have a bug. I'm just gonna write a script that hits it every couple hours until it works, and then I'll be unsubscribed." Maybe that's what's going on here.

**Gerhard Lazu:** Apparently there's like a single user, and it's been happening 695 times in the last four days. Someone is really persistent.

**Adam Stacoviak:** What did we do to you? Gosh...

**Gerhard Lazu:** But one thing which I've wanted to say is that Getsentry made it easy. We get those weekly emails, we can see whether the arrows are going up or down... They have some nice things. I don't go there that often, but they have a performance feature which we don't even use; that's an interesting one. Also dashboards - they have like a new dashboards feature. But just looking at the issues, it's very easy to see which are the top ones which have been happening the most in the last 30 days, or within the timestamp. It's easy to see where you should focus first as far as application errors go. That was nice.

**Jerod Santo:** Yeah. What they don't do - and this is probably a config; I just haven't got it set up right - that Rollbar would do is the first time a new issue comes in, I would still get an email every time. And now with Sentry I get the weekly email, and I just don't get the "Hey, new error detected" email, which I figure is a standard feature that I just don't have set up... And that's why I probably didn't even notice this one, because I don't go there and check Sentry unless I'm experiencing -- or I get the weekly email and say "Dang. A lot of errors this week", and I go check it again. But I just don't have that set up right maybe... Are you guys getting emails on new errors?

**Adam Stacoviak:** I'm only getting the weekly updates...

**Gerhard Lazu:** No, only the weekly ones. So one thing that I can see on this issue - it's on the right-hand side, just underneath the number of events - is ownership rules. Import GitHub or GitLab code owners files to automatically sign issues to the right people. Maybe that would help? I don't know.

**Jerod Santo:** I don't know. I'll look into it more. Not interesting for this conversation, but just something that we have to figure out. I mean, we would be the owner -- just set yourself the owner of all new issues, maybe. And then maybe you'll get emailed. I don't know.

**Adam Stacoviak:** What is odd too, at least in this last report, was that Monday through Friday was low errors. It was Saturday and Sunday that was the error dates... Which is the exact opposite of -- at least WebTraffic. I'm not sure about ListenTraffic, if they happen a lot more on weekends... But I would suspect that week days are probably higher than weekends, in most cases, for us.

**Gerhard Lazu:** Yeah. That is an interesting one.

**Jerod Santo:** Well, the weekends, when you finally listen to that Founders Talk episode and you're like "I've gotta get off of this train..." \[laughter\] Unsubscribe, 695 times. I guess for the listeners' sake, Founders Talk is Adam's show. He does it all by himself, so we're picking on him at this point.

**Gerhard Lazu:** Yes, we are. Sorry. That was a \[unintelligible 00:51:26.14\]

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** I apologize. I apologize.

**Jerod Santo:** It's a great podcast; you should totally subscribe, and I'm not saying that facetiously.

**Gerhard Lazu:** You should, yes.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So what happens next? Next steps between episode 20 and episode 30. What is the first thing that you would like to see happen, Jerod? Let's go around. Or Adam, if you have one already queued up...

**Adam Stacoviak:** \[51:50\] Well, I know we've been talking about exploring more... I'm all about 1% improvements; I would say let's make progress on the front, not so much accomplish the front... But let's explore what it might be to consider something like Fly, considering their new hire recently, and their focus on Elixir; we're an Elixir stack, so it makes sense to explore the advantages of different platforms and how it works... And you know, 1) get around the networking issue that we had there, and so what if it could be multi-cloud... You mentioned Upbound and the ability to have a plane that goes across different clouds, and whatnot; so maybe that makes sense to continue to explore down. Or share what you've currently explored so far.

**Gerhard Lazu:** Yeah, that's a good one. So the person that Adam is talking about is Chris McCord, creator of the Phoenix framework. It's exactly what changelog.com the app is using... And he joined --

**Adam Stacoviak:** It was about two weeks ago, I think.

**Gerhard Lazu:** So a few weeks ago he joined the Fly team; I think that's great. There's a big commitment from Fly to Phoenix to Elixir to this ecosystem, which makes us very excited, because our app is using exactly the same stack, so that's great.

**Adam Stacoviak:** And I'll plug too, since we're dogging Founders Talk - I'll plug episode 80, with one of the co-founders and the CEO, Kurt Mackey, whom I think is a super-awesome dude. I think he's super-smart. He has great intentions, he's a developer at heart... He is a developer, obviously, but he's been iterating -- the title of the show is "Iterating to globally distributed apps and databases for a long time." He was the person who was behind MongoHQ, the naming issues... Long story short, turned that into Compose, which was eventually acquired by IBM... Exited that positively, continued to explore, and founded Fly.io. I'm telling a micro-version of the story. Y Combinator twice... Super-smart fella, so - a lot of respect for what they're doing, and I think their grounds there that they're tilling, I suppose; I'm trying to use farmers terms, or something like that... The grounds they're dealing with over there are grounds worth exploring.

**Gerhard Lazu:** In Ship It episode 18, in the show notes, there's a link to "Firecracker VMs on Metal, Oh, My!" This is Kurt Mackey's talk in March, earlier this year...

**Adam Stacoviak:** At Proximity, yeah.

**Gerhard Lazu:** The Proximity one. That was a really good talk. I've really, really enjoyed it... So if you wanna check it out -- that got me really excited about Fly and the infrastructure which they run... And I'm sure Kurt will be joining Ship It very soon.

**Adam Stacoviak:** Yeah. I think we barely scratched the surface of the ideas he has, so I think he's due a conversation with you at a deeper level on the tech side.

**Gerhard Lazu:** What about you, Jerod? Would you like to go next, your top thing?

**Jerod Santo:** Well, it's time to get our uploads over to cloud, but that one's on me... On you, Gerhard - I wanna see that Honeycomb test out integration sometime here real soon, because I did enjoy what Charity had to say on your episode with her, and I think that it sounds like a good place to hop in and try out Honeycomb and report back your findings to us and the gang.

**Gerhard Lazu:** Yeah, that's actually a good one. So this is one of the problems that I've been having since episode ten. I've had so many great conversations on Ship It, and I want to try so many things, and I do a little bit of this and a little bit of that...

**Jerod Santo:** Right.

**Gerhard Lazu:** ...but nothing long enough to land it. And that's something which I would like to be doing more of.

**Jerod Santo:** Focus.

**Gerhard Lazu:** Yeah, exactly. But there's so many exciting things, like - I wanna try Fly, and I wanna try Honeycomb, and I do, and I set it up, and CockroachDB, and I've set things up... But I haven't taken it all the way. So that's something which I would like to get better at.

So my top of the list - I really like what you've mentioned, Jerod and Adam, and I think this basically is more towards Adam... Is experimenting more, for sure; there is debugging the Kubernetes issue that we've been having since -- actually, since we've enabled Grafana Cloud and we've had more visibility into Ingress NGINX...

What we see - and this is, by the way, in a Rawkode livestream which is coming up, and it will be out, by the way, by the time you listen to this; I can add it to the show notes... It's that the tail latencies -- this is Ingress NGINX, our tail latencies to the app are really high.

\[55:54\] So our 90th percentile - this is Ingress NGINX to Phoenix, to PostgreSQL, the request coming back to NGINX, the maximum 90th percentile is 286 milliseconds. It's fairly high, but it's okay, not that high. The 95th one is 841 milliseconds, so almost a second. So some requests can take almost a second to come back, and that's fairly slow. But the 99th percentile - this is the long tail that I've been talking about - can be as high as a minute. So which requests are taking more than a minute to service?

**Adam Stacoviak:** Oh, my gosh... That's a long time, a minute... I mean, a full second is a long time. A minute is 60 times that.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** I'm just doing some math for you who don't know how time works.

**Gerhard Lazu:** Thank you. Thank you, Adam. So that's one thing which I would like to look into more, because one thing which -- I mean, I had many great conversations in these ten episodes, but the one which really resonated with me was the one with Justin Searls about reliable software, trusting your software, optimizing for smoothness, not speed. That was episode 16. So I would like to make Changelog the app, the setup, more reliable, more robust. I just want it to work as good as it can, for as many people as it can, even when things go wrong behind the scenes. End users shouldn't need to know about that, or see that. And if it does happen, let's just be honest about it, let's just have incidents, talk about it openly, and figure out how to do it better, how to improve.

So in my mind, how do we make it more reliable? How do we fail less? How are more available? I think we have made some great improvements, but I don't think we're there yet. I don't think we'll ever be there, but at least we'll be improving. That's where my mind is at.

**Adam Stacoviak:** Well, Kaizen, right? Come back to Kaizen. Speaking of Kaizen, behind the scenes we have a T-shirt design which is simply the Japanese characters that make up the word Kaizen, which I feel like is an adopted -- we rose this flag, Gerhard, so I feel like this is an adopted company-wide mantra, for me at least, ever since you've brought it up. We're now on Kaizen 2, essentially. This is episode 20 of Ship It, but surely, the second version of Kaizen for us. So if you're this far, this end of the show and you thought "These guys navel-gaze big time on the show", it's on purpose. It's on purpose. \[laughter\] This is about Ship It the show, this is about our infrastructure, this is about Changelog Media and how we progress the business; we're a podcast company primarily. How we think about infrastructure, how we conjure that into content that entertains, but also informs... And you know, this embodies this idea of continuous improvement. Kaizen.

So we do have a shirt coming out soon, it's the Japanese characters that represent Kaizen. It's a super-cool shirt, it's on a super-soft T-shirt... You're gonna love it, and I'm excited to wear that to represent this idea of continuous improvement and embracing that.

**Gerhard Lazu:** And on that high note, episode 20 is a wrap. Thank you, gents. It was a pleasure. Looking forward to the next one.

**Adam Stacoviak:** Me too.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Kaizen.

**Gerhard Lazu:** Kaizen.
