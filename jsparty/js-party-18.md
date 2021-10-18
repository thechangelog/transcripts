**Mikeal Rogers:** Welcome to JS party, where it's a party every week with JavaScript. I'm Mikeal Rogers.

**Alex Sexton:** I'm Alex Sexton.

**Mikeal Rogers:** And our guest today is Paul Frazee. Say hi, Paul.

**Paul Frazee:** Hey, everybody.

**Mikeal Rogers:** Awesome. So we've got Paul on to talk about the Beaker Browser, which we'll get into a bit later, but first we're just gonna discuss this new Node.js user survey. Everybody heard about Node.js, everybody know what that's about?

**Alex Sexton:** Only if it's pronounced NodeDotJs...

**Mikeal Rogers:** Yes, NodeDotJs. There actually is somebody very prominent who always says it that way... It just takes too long to say. I think that we can just call it Node.

Anyway, so there was this great Node.js user survey; about 1,400 people were surveyed at the end of 2016. It took quite a while; I was still at the Foundation while this was happening, obviously, so it took a while to synthesize the results, but now finally all of the results and some big summaries and all the data are out there, and it's been getting a lot of traction. A lot of people are talking about it.

Any initial thoughts or remarks about this from you all?

**Paul Frazee:** Kind of interesting, 50% of people are using containers... That's a nice little insight there.

**Mikeal Rogers:** I always forget -- not everybody has listened to every podcast where we've talked about a survey, but there's a really good issue of the Changelog, actually, where me and Nadia came on and interviewed somebody about the GitHub survey... And one of the things that we got into was that it's very important to quantify -- you're never gonna get 100% of the people, and you're not even gonna get like a perfect distribution of people, so it's important to just quantify which section of the community that you've got in the survey, right?

One really good thing in Node is because you know that the community is doubling every year, if you ask people how long they've been doing Node, you'll get a really good idea of what the distribution is of the people that you ended up surveying. With stuff like this you tend to get people that have been using the language like two years or more. That's a longer-term, slightly more engaged 25 percentile of the community. And of that section of the community, half of them are using containers... Which I think is not that surprising, but I guess kind of surprising.

**Paul Frazee:** Do you think it should be more, or less?

**Mikeal Rogers:** Well, I think it's surprising just in that there's a lot of people using Node.js and just doing front-end stuff, and a bunch of them showed up in this. A big portion of the 50% that said no to containers just aren't doing any back-end stuff...

**Paul Frazee:** Right, right.

**Mikeal Rogers:** \[03:57\] And how many of them are just deploying with Now and they don't even know that that's in a container, right? There's already a lot of services that are like -- the containers are so hidden from you and so pushed down in the stack that you don't even know. Yeah, so that was a bit surprising... That's pretty huge, all things considered.

I'm glad that the Foundation is talking about China a bit more. I tried to talk about this, but China is the fastest-growing section of Node.js users, and probably just developers in the world, to be honest. It's crazy. There are a lot of users in China. There's like over a million Node.js users in China now, which is something like 12% of the entire community. We picked up a bunch of them with the survey, so that was cool.

**Alex Sexton:** We have a link that we'll probably share on the page if you're reading the summary, or something... The Hacker Noon kind of rolled up with some of the things, and I feel like they asked some questions about -- or rather they have like 39% of respondents are using containers for front-end development. Then they have some things like -- where is this? I've gotta zoom in... "Are you using Node primary development-focused, full stack, versus front-end?" and stuff like that. I feel like the number I want is "How many people only use Node during your build step, versus as a server?" \[laughter\] I think that number would be extremely interesting, and I don't think I see that here.

**Mikeal Rogers:** Well, you could figure it out from the data, though... Because they shared the data. There's a graph here that basically says "What is your focus?" and there's Back-end, Full Stack, Front-end, DevOps, Desktop Applications, Mobile, IoT and Security.

**Alex Sexton:** Right, that's their job; they might program Python and then use Node for developer tools \[unintelligible 00:06:09.07\]

**Mikeal Rogers:** Yeah, so these are all just checkboxes, right? What you really wanna know is how many people checked the front-end box and not the full stack or back-end box. How many people only checked the front-end box? That's the one we wanna know, right?

**Alex Sexton:** No, I don't need -- like, I'm a full stack developer, but I don't write Node servers at my job, like I do for fun, or whatever. But at my job, Stripe is a Ruby stack for the most part, so I mostly write Ruby if I'm writing back-end. So I would consider myself a full stack developer, but my day-to-day is writing JavaScript that either runs in Node as a build step, or JavaScript that runs in the browser.

**Mikeal Rogers:** Well, it looks like this question was posed in the context of using Node.js, not in the context of like "What kind of developer are you?"

**Alex Sexton:** I would be interested in the exact wording...

**Mikeal Rogers:** I believe the wording was "How was your organization using Node.js? What is the focus of your Node.js usage, specifically?"

**Alex Sexton:** Okay.

**Mikeal Rogers:** Yeah, which is like -- full stack is just such a weird one, because it's like... If you click back-end and front-end, is that not just full stack? \[laughter\] Yeah, but it's interesting that the full stack metric here actually outpaces the front-end metric.

**Paul Frazee:** What would you think it means if I just say I use Node.js for my front-end?

**Mikeal Rogers:** I like the desktop application, mobile and IoT stuff was on here too, because it makes front-end really mean JavaScript front-end. If your front-end is an Electron app, you're gonna click the desktop application box... So that's great.

**Alex Sexton:** \[07:55\] Mikeal, I know you used to have numbers on downloads, but it still feels like based on what gets downloaded from NPM, that over 50% of all use of NPM is for building front-end tooling, right?

**Mikeal Rogers:** Well, the metrics on downloads from NPM are a little bit harder to contextualize than you would think. What you kind of have to do is that you've gotta look at how much these things are depended on, and basically try to filter out what you would expect the number of just things being pulled in as a dep is from what you might call a edge dependency, like something that somebody directly pulls in and uses. Express is like an edge dependency. People don't add it as a dep in a module that they push up very often. And when they do, that module is probably like a full application.

Express is a very good indicator of "How many downloads are happening for this particular web thing?" I think Yarn is an edge dependency that is probably an accurate interpretation of people that are probably doing some frontend stuff, that are touching one of those.

But Babel gets pulled in by other toolchains, Webpack gets pulled in by other toolchains, and when you look at their download metrics, they can be pretty astronomical because they're sitting below the stack in so many different applications. So yeah, it's a little bit harder to quantify what's going on there... Also, the front-end dep chains appear to be longer -- the dep graphs appear to be longer than back-end, so that means that their download metrics are going to be dramatically larger just on average.

A good example of this is like -- Request is depended on quite a bit, and it's depended on directly quite a bit, but there are small dependencies of Request, because it's broken into a bunch of modules, and those modules are depended on by almost nobody but Request, and they have astronomical download numbers.

**Alex Sexton:** If you look at the top 10 JavaScript libraries that are distributed across the Alexa top one million, Yepnope is like number 12 or 8 or something like that; it's extremely high up there, and virtually no one put on their page, but Modernizr put it into Modernizr, and now it's one of the top scripts ever distributed on the internet... But I just leave that other part out whenever I tell people that I wrote it.

**Mikeal Rogers:** \[laughs\] Exactly. That's why I think that -- when you're trying to quantify people, download metrics are a really problematic metric to look at.

**Alex Sexton:** Can you give like several years of talks about download metrics?

**Mikeal Rogers:** No, I'd give several years of talks about growth of package ecosystems and growth of users, and the users are quantified not by the download metrics.

**Alex Sexton:** It's the spin... Every week, the spin...

**Mikeal Rogers:** No, I actually -- so when the Foundation put out the eight million number of users, I was kind of on my way out of the Foundation, and people really went after it and were very skeptical of it... And I'm really confident in that number. There's a couple reasons for that. One is it's a very good number from NPM that gives you a very good indication of actual users. It's basically like NpmJs.org website impressions, unique users that have engaged over a particular amount... Over I think like a three months span. So it's a very good indication of how many people are engaging with the NPM website.

\[11:53\] You can even use NPM without using the website, but chances are in a three-month period you're going to engage with it if you're a user... Unless you're in China. And there's a bunch of reasons for that, but before we get into that, we also have metrics on the NodeJS.org website, and because it's localized in so many different languages, it gives you a very good indication of the geographic distribution of Node users. It doesn't give you a great indication of how many users, because you can just user Node.js and never ever touch the Node.js website. There's not really a reason to go there. But it gives you a great distribution.

**Alex Sexton:** Yeah, just docs are on there.

**Mikeal Rogers:** Well, so we did not have metrics on the API documentation until about a month ago... \[laughter\] Yeah, so this is the website minus the API docs, because they're often in their own section. But anyway, because you have that 12% -- because you know that the market share is about 12% and you know that that market share is basically missing from the eight million number, you can go like "Oh, okay... Well, do we know how many independent users are in China?" It turns out that we do, because virtually every Node.js user in China is a part of this forum called cnodejs.org, which is basically like a forum where people are speaking in Chinese, and they're supporting each other, they're answering different tech questions, and a lot of the answers to those tech questions are just in time translations of different module or API documentation... But yeah, it's just a resource that virtually everybody is engaged in, and their metrics really do back that up. They can give us metrics on how many active users that they have, and then we can look at "Is that number 12% of that eight million number?" We've been able to do these correlations for years now, and the NPM number has always just kind of tracked perfectly with what we think the user metrics are.

So I'm much more confident in the number of users of Node.js metric that I've seen -- we have better data there than I think any other language has, I'll say that. Anyway, that's not really about this survey, but... \[laughs\]

**Alex Sexton:** Yeah, I guess the reason I brought all that up is I'm skeptical a little bit of the data about -- because of the massive amount, what I assume is in the area of 50% of people who only use Node as their build tool, but still use Node, like, how does that skew this stuff?

There aren't a ton of people doing builds inside of containers compared to people running servers in containers, I imagine, but... I mean, not that it's not done; I do it, personally, but it's just more overhead for building a static asset.

What does the containers number go up to if you take out the build tool only people? I don't know, I just feel like because the two communities are there, it would be really much more interesting to see this data split on those two points.

**Mikeal Rogers:** So I did try to do this analysis once... Actually, there was a conference that you put together, I believe...

**Alex Sexton:** Correct. Front End Ops Conf.

**Mikeal Rogers:** Yes, exactly. And one of the things that I did in that talk was that I parsed through GitHub data that figured out how many people are interacting with packages, and then I came up with some fuzzy ways to figure out if it's a frontend or a backend package...

**Alex Sexton:** This is what I was talking about whenever I made the joke, like 10 minutes ago.

**Mikeal Rogers:** Yeah. It's not the greatest, but it was kind of good enough, and what you saw was that front-end packages had far more people engaging with them than back-end packages, and that their growth was actually a lot higher. NPM - I don't know if they're getting this from their download metrics or if they have a way of determining front-end packages and then they can segment the users on the website, because that would give them a very good indication of how many people are only engaged in front-end stuff.

\[16:10\] They've said that they estimate that a little over half of Node users are doing front-end stuff. I don't think that they have a great way to figure out if they're only doing front-end stuff, which I think is what you want...

**Alex Sexton:** Well, I mean, primarily it would be fine...

**Mikeal Rogers:** ...but that's just really hard to determine. As Node.js becomes a build tool for anybody building a website, the web is definitely larger than people that write back-end, period. We know that.

**Alex Sexton:** And there are a lot fewer options.

**Mikeal Rogers:** Yeah. One of the slides in this deck is just a bunch of logos, a ton of corporate logos for different companies, and at this point... Can we just put up an empty slide that says "People not using Node.js?" \[laughs\] Isn't that easier and more accurate?

**Alex Sexton:** Yeah... I'm always skeptical of those things, too. I'm old school, jQuery crew, but it was amazing how many logos were the same across Dojo, MooTools and jQuery's websites. It's like, "Oh yeah, IBM uses jQuery. IBM uses Dojo. IBM uses" -- well, IBM never used MooTools... \[laughter\] But I think I pushed at the time for jQuery to remove IBM's logo, because they were very clearly a Dojo shop. They had tons and tons of contributors to Dojo, and their marketing sites used jQuery, so it was like "Oh yeah, IBM uses jQuery", and I really didn't feel like that was fair.

I'm interested does the skunkworks labs team, for people at X company use Node, or it's like the API that that company is known for built on Node? Because you could say Stripe uses Node for sure, but we don't have any production services - that I'm at least willing to mention here - that use Node. Does it make sense?

**Mikeal Rogers:** Yeah. This was something that when I was at the Foundation I had to talk with analysts a lot about. Analysts heard for years about how enterprises are adopting Ruby, and what it always was was like "Somebody is using a test framework somewhere written in Ruby", and it wasn't like they were actually moving off of Java, and it took a while to convince them that "No-no-no, people are building production applications with all of their traffic in these enterprises running through Node", this is not just like a thing in their front-end toolchain, although they do have it in their front-end toolchain somewhere.

But I think outside of enterprise and outside of tech analysts that care about enterprise, a much more interesting story to me is what's happening with front-end development. I think that this very huge shift in how we build front-end applications and how much basically software infrastructure we're able to build up and evolve over time and continue to inter-depend on, that being applied to front-end use cases into the broader web is just a much more interesting story to me than people building microservices that are sitting in front of their old, ancient Java apps; that's not very interesting to me.

I know that there's a lot of weird identity politics about "Node.js is back-end, and we're whatever framework is cool right now", but at the end of the day I think that one of the greatest successes for Node.js is going to be the change that happens in the front-end web, that is facilitated by the platform.

**Paul Frazee:** \[20:04\] One of the interesting side effects to that is that it's also starting to really dominate my time in Bash... Because you have so many build tools that you're running from the command line that are just Node.js packages, but I'm starting to have a lot of commands showing up that people make, and it's an NPM install. Right now, that's the main way I get new commands to use inside of my command line.

**Alex Sexton:** One benefit is that it's cross-platform.

**Paul Frazee:** Cross-platform, exactly.

**Mikeal Rogers:** I think that's really the main benefit. One is that you have this dependency network that you can tap into. So you have all this software infrastructure, you don't have to build everything from scratch, but two is like --

**Alex Sexton:** You know how to write Bash.

**Mikeal Rogers:** Yeah, you know how to write Bash... There's a lot of great things about Python, but Python never had - and still does not - have a great cross platform story. They're still pretty \[unintelligible 00:20:54.06\] on Windows, and so is Ruby, and so is -- like, a lot of languages just never really did the work to be a first-class citizen the way that Node did in 2012.

**Paul Frazee:** Of course, Windows is trying to change that with their UNIX stuff. I don't know, I haven't tried that - has anybody here tried that?

**Mikeal Rogers:** I have... It's not there yet. The problem is that like, as a subsystem, if you treat it like a better VM or something, it's quite good. But as soon as you wanna use it like a regular Windows thing and have it tap into that sub-file system, things go a little haywire.

Anyway, I think one thing, Alex, to point out is that this survey definitely picked up a section of the community that is more back-end than what you would think of as the average. Look at the number of respondents that work with databases directly - that's really high. It's like 95%. I think it's the kind of people that wanted to spend 20 minutes filling out a Node.js survey are gonna be more like back-end people.

**Alex Sexton:** Yeah. I mean, I'd be in the 5%. I don't think I ever touch production databases, at least.

**Mikeal Rogers:** I try to write a database about every month from scratch, but...

**Paul Frazee:** You know, what I'd be interested to see is which databases people are using with Node.

**Mikeal Rogers:** There was data in the survey that was conducted the prior year on that... A lot of MongoDB still.

**Alex Sexton:** They're a billion dollar company now, right? I think they just hit it. Just insane...

**Mikeal Rogers:** Yeah, full unicorn status.

**Alex Sexton:** Yeah, wooot!? I mean, for what it's worth, Stripe does not use Node, it does use MongoDB.

**Mikeal Rogers:** \[laughs\] Not to store financial transactions... \[laughter\]

**Alex Sexton:** We store them there... We just store them a couple other places, too. \[laughter\]

**Paul Frazee:** I've been hearing that Mongo has really ironed out a lot of those bugs at this point. I don't know if that's true, I haven't used them, but that's the story they're trying to get out there. It's like "Yeah, we had growing pains", but you know, they made a lot of money, they got to be as big as they are, and then they put in the engineering effort necessary to stop losing data. If that's true, there you go.

**Mikeal Rogers:** The real thing was just like for the longest time - and maybe they've changed this, but even after they added good transactional integrity and they could make those kinds of claims, it wasn't enabled by default. And as soon as you enabled it -- MongoDB is pretty slow, and one of the reasons why people gravitated towards this for so long was because of these claims that they made about how fast it was.

Some of them were quite absurd, though... I remember there was a blog post about how MongoDB is faster than Memcached for writes. The reason is because Memcached has a response when you write, and the protocol for MongoDB didn't have a response for write. You just write it to the socket and you're like "I bet it's stored." Basically, what this metric was testing is how fast can you write write messages to a socket.

**Alex Sexton:** \[24:13\] UDP versus TCP... \[laughter\]

**Paul Frazee:** Yeah, the UDP of databases...

**Alex Sexton:** Stripe had a back-team for a little bit to do work on this, and for the most part he did this on his own.  Kyle Kingsbury, better known as Aphyr, has a tool called Jepsen, and Jepson tests this type of stuff on databases, and it has a series called "Call me maybe." If you search for "Aphyr Call Me Maybe", there's some really good stuff on how good Mongo is, with what settings... So essentially, in order to make Mongo safe, you have to put it on the absolute most max settings, even though three down is called "Guaranteed Safe", or something... \[laughter\] So you have to go two past Guaranteed Safe to get Guaranteed Safe. But I don't know how much is public or not, so I shouldn't say too much, but Stripe has been on MongoDB for a long time, and because we have a lot of dependencies there, we're slower to upgrade than someone who's using it as a pet project. And I think we've seen a lot of great performance improvements, even on point release updates to Mongo, and that's been encouraging, at least... But every few years we're like, "Should we keep this?"

Generally, the benefits it gives are good enough, and we're good enough at keeping it up and we run enough game days to know that when it goes down, we can \[unintelligible 00:25:51.11\] In 3.2 they swapped out the underlying subsystem for something or other, and I think that made a huge difference.

**Break:** \[26:09\]

**Mikeal Rogers:** Alright, so now we're gonna dive into the Beaker Browser. Paul, why don't you give us some history here? I know that you've been working on this for quite a while now, so give us some history of why you started the project, what the mission is, and then we'll get into some of the more recent developments.

**Paul Frazee:** Alright, cool. We started Beaker about a year and a month ago; we actually got started at the Decentralized Web Summit. Right before that, I had spent about two years working on Secure Scuttlebutt with Dominic Tarr. Secure Scuttlebutt is a peer-to-peer social network...

\[28:16\] So Dominic had come up with this really cool, cryptographic network for exchanging different feeds of JSON, basically. The technology kind of feels like -- it's these logs of data, so it's almost like a Twitter, right? Everybody has their own feed, and they publish these JSON blobs, so we took that and said, "Okay, we could make a little peer-to-peer social network on that, and let's see what happens.

So we got that to work, and we got a little community going, and it was really cool and definitely a great learning experience, but around the time - about a year ago - I was getting to the point where really one of the big goals I had was "How could we make it so other people could build on that tech?" Because the peer-to-peer stuff is really cool, but it's also like "Yeah, we have a peer-to-peer app, but it's not part of a platform, and it doesn't really change the situation that much." We wanna be able to have not just a peer-to-peer Twitter, but also peer-to-peer email, and a peer-to-peer Reddit, and a peer-to-peer whatever. You wanna get away entirely from the services model if you're interested in decentralization.

So the stuff we had done with Secure Scuttlebutt was really cool, but it was hard for other developers to hook into the stack and start making their own apps. So I walked away from that and I was thinking "Okay, we have Electron now, and Electron is a really nice wrapper around Chromium", so it would be nice if we could just take that and just go ahead and build an entirely new browser off of it and then take some of these new protocols that people are working on (I've got a yelling cat out here) and just add them into the browser, make them new native web platform tech. You know what, I've gotta get this cat, give me a second.

**Mikeal Rogers:** \[laughs\] Alright, that was hilarious.

**Alex Sexton:** If only Rachel could be here...

**Mikeal Rogers:** Yup...

**Paul Frazee:** Right, so that was the idea. And when I started on it, I said "I'm gonna branch out from just Secure Scuttlebutt", I'll take a look at some of the other protocols that were being worked on, and the Decentralized Web Summit was a really good timing because it was a bunch of different protocol teams getting together to talk about what they were doing.

IPFS was there, the Dat Project was there, I remember Mediachain, a couple of different blockchain-based things, Zooko was there with Zcash... So I talked to a lot of people, started to try to gauge interest for this idea, like "Hey, what if we had a browser we could throw all these things into?" So that's how I got started.

It took maybe like six months to get a browser UI on top of Electron, get all the basics working, and then I integrated IPFS and Dat, and then over time I just took IPFS out and focused on that, and kept on packaging it and fixing it up, and now we have Beaker.

**Mikeal Rogers:** Awesome. You mentioned that there's a bunch of different protocols that people are experimenting with right now... Which ones have you gone down the rabbit hole of supporting and which ones have you kind of solidified at this point?

**Paul Frazee:** \[31:40\] The three I could speak most authoritatively on would be Dat, Secure Scuttlebutt and IPFS. Dat and IPFS are basically variations on BitTorrent. They're really similar and they're both really solid technologies. I know about the different blockchains, at least like at an arm's distance I could tell you how they work, but I haven't gone too deep into them. I'm kind of waiting for the blockchains phase to stabilize a little bit and maybe get away from the proof-of-work; I'm not a huge fan of proof-of-work. But pretty much the two that I think are the most interesting right now are Dat and IPFS.

**Mikeal Rogers:** And do you support both of those protocols right now?

**Paul Frazee:** No, actually not at the moment. This is an interesting thing, and actually we're really open to hearing from other people about this... Dat and IPFS are really, really similar. They both use the same mental model from BitTorrent, which is this idea that you have crypto addresses, so either like a hash of the content or a public key, and that is now like the basis of your URLs. Then you share some files on this network, and other people that download from you can then rehost for you. So as you have more peers in the network, there are more hosts for a piece of content, so the network sort of automatically scales up to make sure that any files that gets popular, you can find it quickly and nobody has to give away a lot of bandwidth.

So they're so similar that for a while we supported both, but at one point we kind of stopped and said "How do we communicate to users which one they ought to use?", because maybe the biggest difference between them is that IPFS is really narrowly focused - or mainly focused, I'll say - on static pieces of content that are addressed by content hashes. I think they maybe tend to use a SHA-3 (don't quote me on that), and then Dat tends to focus much more on archives of data that change over time... So those are addressed by public use. Now, just saying that probably puts three or four people to sleep, so I don't know how we would say it inside the browser, that's like "Oh yeah, well obviously I wanna use IPFS for this particular case", so we ended up dropping it because we just didn't really understand how we'd be getting a lot of benefit to users other than the fact that you might be able to browse two protocols, and maybe the content that you wanna use is on IPFS and not Dat. So we're relatively happy with it right now its let us stay really focused and we're just gonna keep on -- we'll stay light on our feet; if IPFS end up blowing up, we'll get it in there.

**Mikeal Rogers:** It's almost like you're just waiting for someone to send a pull request. \[laughter\]

**Paul Frazee:** Yeah, yeah.

**Mikeal Rogers:** Okay, that's really interesting. So you said that Dat is very good at data that changes over time... I'm a regular web developer, I wanna shove my application into Dat and host it on this network - what does that workflow look like right now?

**Paul Frazee:** Well, from the perspective of using the software, it feels a little bit like using Git, it feels a little bit like using NPM. You have this area that's like your local staging area, so you could work on your website... Your website is just a folder on your computer somewhere, so you'll be working on it and making these local changes to it, and that's the staging area there and you can open it up on the browser and work on it, and then once you're happy with it, you hit the Publish button and that's pretty much the whole story. At that point, your browser, in the background, makes the changes available to the swarm, and anybody that's subscribed to that swarm (which happens if they visit their site), they'll pull down the updates you've made.

The point that we're trying to hit is that it feels just like using tools that we're already super familiar with, so that the peer-to-peer network by and large is hidden from you, and if it's working really well, it should feel pretty magical.

**Alex Sexton:** So how similar would you say this is to season five of Silicon Valley?

**Paul Frazee:** \[laughs\] You know, some pretty bad stuff goes down inside season five, I'm gonna say 99% same thing... We had to cover up a lot of scandals while we were working on this thing. \[laughter\]

**Alex Sexton:** \[36:11\] It's the better internet, right? That's what the current -- whatever. Anyways... I guess we talked a little bit about the what and the how, but in your least tinfoil hat way, explain why someone would be interested in using it.

**Paul Frazee:** Yeah, I think actually you've gotta throw away the tinfoil hat, right? Because the tinfoil hat version would be "It's censorship resistance, so the government can't take you down", or the other one would be -- I mean, there's some interesting things to be said about that, but the main reason that you take these techs and you put them into the browser is that you want to make it do new, cool things. So for Beaker with these peer-to-peer techs, you can create a website off of your computer, and it's just a button inside the browser. You just hit Make Me A New Website and it's gonna allocate a new domain for you, and then you can immediately share the link with somebody and you're done; you've created a whole new website.

That principle ends up actually being really interesting, because because it's so easy to make a website like that, it actually even exposes some web APIs. So an application that you're using on your computer can actually then use the peer-to-peer network to publish files or to consume files, and that's how you set the start of a stack for building applications that don't need services at all. You're just having these totally peer-to-peer applications, and now you can have better personal privacy because you're exchanging files directly from one computer to another, and you can do some cool open source stuff, because whenever you're using the applications, all of the source code goes down onto your computer.

You go to a Dat website, there's no service somewhere that you're having to talk to; you've got all the source code, so you can actually work that website and create a whole copy of it that you control, and you can just start modifying it right away.

So the privacy story is really good, but so is the open source/open architecture story. If we can really flesh out that entire stack, we can get to the point where you don't have to use these databases that are on somebody's server somewhere, which is what you could call a data silo. It's somebody else's computer. Now you're just publishing content by writing it to your computer, and you control the keys that say that you're the author, and then other people get the files off of you and now you're totally in control of your presence on the web.

**Alex Sexton:** Okay, what-- I -- I'm trying to-- Hm, that was a really good sentence. \[laughter\] If I am malicious - let's talk about that. How many people do I have to pretend to be before I control your content maliciously, or something? Is there a quorum type situation, am I GPG signing everything I write so it's authenticated? What is that whole security system work like? Because if there are enough malicious people and a small enough site, it seems like they could kind of change all the content of that person's website, since they're sharing the bulk of it.

**Paul Frazee:** The key there is that there's no number of people that would start to do that. It's not like there's a civil attack or anything that you could do to take over somebody's website. The way it works is that each website in the Dat network has a key pair, and the public key accesses the address of it. So instead of an IP address, you use a public key address. Then there's a private key, and that private key is controlled by whoever generated the site, and they keep that private key protected.

\[39:55\] Anytime that they change the site, the sign the update that they push out into the network, so anybody that's looking for a website and wants to make sure that it's an authentic piece of content from that website, they check the signature of that content against the address of the site they try to look up.

**Alex Sexton:** I see. So the prime thing to know there is that the address is the public key, which means that you can't spoof a different private key... I mean, you could make a totally different website... So how recognizable are -- so if the website is just a public key, what stops me from, say, "Oh, here, go to Paul website" and it's just my website that is an exact copy of yours, but now it's my public key. Is there SSL certs, is there EV? How do we manage the whole identity situations? Ring of trust, that type of stuff.

**Paul Frazee:** That's an interesting question, because we actually could start to get into ring of trust, or other trust ideas at some point. What we've done at the moment -- first of all, just to answer the very basic of your question... The public keys are 64 characters long; they're hex strings so you're never gonna be able to look at it and say "Yeah, that's the right address."

**Alex Sexton:** Yeah, right.

**Paul Frazee:** I would argue that that's probably usually been the case also for IP addresses, too; similar story - you never would send out --

**Alex Sexton:** Right, which is why DNS is so important, with SSL certs, right?

**Paul Frazee:** Right. So we don't have anything quite like SSL certs yet, because that's a whole big social enterprise to have SSL certs existing... So what we've done is we do have a DNS solution, and it's kind of a hack. Let me think how to describe this well... We make you run an HTTPS server; so if I have BeakerBrowser.com, you have to run an HTTPS server, and then under a .well-known folder you put it a file title "Dat", and this file has the key to the raw URL for the Dat that you wanna have at that address. So what happens is whenever I try to type into my browser "Dat://BeakerBrowser.com", what Beaker will do is it'll contact HTTPS://BeakerBrowser.com and it'll look for that well-known /dat file. If it's there, and if a valid Dat URL comes in with the content of that file, it'll then go ahead and say "Okay, that's the Dat address you're trying to look up."

**Alex Sexton:** So it kind of piggybacks off the centralized system just as a kind of verification system. It makes sense.

**Paul Frazee:** Yeah, yeah. It gives us the security we need, it's relatively easy to deploy... We thought about doing something with DNSSEC, but DNSSEC doesn't really have the adoption or the confidence in the community that I think really would make that a good long-term solution, and you can only use DNSSEC like three top-level domains; there's not a whole lot of adoption out there, so we decided that this would be a good compromise.

**Alex Sexton:** That's cool. That's a tough problem to solve. So what is the premise -- you do this full-time as a business and you sell it off? Did you get a grant? Do you just have a bunch of money from the lottery and you're looking for fun?

**Paul Frazee:** No lottery yet. Actually, I'm gonna break that up into two answers. The first - Code For Science is the team that's actually building the Dat protocol. They are a non-profit, they're grant-funded.

**Alex Sexton:** That's Max still, or...?

**Paul Frazee:** \[43:55\] That's Max Ogden, he runs that, and Mathias Buus is the lead protocol engineer, and you'll know him on the web as "Mafintosh." I think it's the Knight Foundation, Sloan Foundation and maybe others that have funded them.

**Alex Sexton:** The Alfred P. Sloan Foundation? I don't know if that's the same one \[unintelligible 00:44:20.08\]

**Mikeal Rogers:** This week we're on NPR instead of The Changelog Network. \[laughter\]

**Paul Frazee:** Yeah, actually I don't know if it's the same one...

**Mikeal Rogers:** It is.

**Paul Frazee:** Okay, cool. They're non-profit; they're specifically focused on helping out (I would say) governments and academics scientists and things like that, help them with data archiving. That's the mission for the Code for Science and the mission for the Dep protocol. So we showed up with the Beaker project and really liked what they had done with the protocol and liked working with them, so we went ahead and said "Okay, we're gonna apply this into this browser, as well." So we're a separate group making the Beaker Browser. We're Blue Link Labs, we're a for-profit, and we're bootstrapped so far. It's myself and a co-founder, Tara Vancil, and we are planning -- basically, what we're done to try to fund ourselves is put together a public super-peer... This is a website Hashbase; you can find it on Hashbase.io.

The idea with this is that this is a peer-to-peer network and it does really great with your content if you're popular. But if you don't have anybody that's subscribing to what you've done, if you turn off your computer you're not gonna be able to seed the files for it. So you need to have somebody on the network that you can trust to actually keep your content online.

Hashbase is basically a peer up in the cloud that you can push the files to, and then you can comfortably turn your computer off and know that other people will still be able to find it.

**Alex Sexton:** So it's kind of like a centralization of -- it's an unfortunate side effect, but I don't think it's a bad idea; it's a good idea. I think the decentralized thing is important not as a default thing, but not necessarily as a constant... Especially with content that goes out.

**Paul Frazee:** I do actually agree with your point there that decentralization as the default is the good starting point. We actually have two answers for you on that, because I think there is a fair point \[unintelligible 00:46:50.02\] First of all, what we call Hashbase is a fungible service; fungible, like you can completely replace it at any point, and we think that's actually really important for this whole idea.

It's similar to a federation, with the idea that one of the services that does it is just as good as one of the others, for the most part. Hashbase is open source, and we'll probably make variations that are totally compatible with it that are easier to self-deploy. And yeah, it is a service that is being run by somebody else, but you could easily jump off of our version of it and onto some other public peer service, some other super-peer service and nobody would even know, because what this service is offering you is totally in the background. There's no data silo on this thing, it's just a little utility that kind of handles work for you, hidden in the background. We think that's actually really important, because so much of what we're doing is geared towards decentralization, so we wanna make sure that people understand that.

\[47:57\] The other answer that I have about the centralization aspect is that for my money I think probably where this all leads to is people being able to run service at home, like a little box, a piece of hardware that you can plug in and just forget about, but it'll keep your content online in the same way that a public super peer would, and then you have just a much better privacy store. You can have one of these home pieces of hardware sitting there and doing a search query for you and you wouldn't have to talk to Google for it. So that's the sort of thing that's gonna take some time, because you actually have to get the software put in the right place, and the hardware has to be built, or at least you have to find a good desktop somewhere.

**Alex Sexton:** And everyone puts it behind their 10-year-old Linksys router.

**Paul Frazee:** Exactly. And then ideally, they just forget about it. Because you don't have to keep it up to date, or anything.

**Mikeal Rogers:** Awesome. This has been great. I think we've gotta start wrapping up the show now, so we're gonna get into picks. Everybody have personal picks that they brought... Why don't we start with you, Alex?

**Alex Sexton:** This week I'm gonna go with another internationalization pick. I think I started this season off with an internationalization pick, but -- GlobalizeJS is a collection of tools for number formatting, messaging formatting, and currency and all that kind of stuff. More importantly though it does parsing, which is one of the harder things to do. I'm typing in numbers that have commas as decimal points, and then trying to turn that into a number in JavaScript is a much harder thing that rendering formatting something with MomentJS, or something. The same is true of dates; it can parse dates in a similar way... And that's really difficult.

That's been a lifesaver for me in my real job this week, and lately. It's completely backed off of the CLDR, which is the Unicode Common Locale Data Repository, and that's where they keep the standard set of all the locale information. It's great. It's what Twitter uses to localize their website, if that's helpful... It's actually a JavaScript Foundation project, previously the jQuery Foundation.

Interestingly enough, the message format implementation inside of it is mine, that I wrote, but at Stripe we don't use that one, we pulled in a different one before we added Globalize, so we don't use my library... But it doesn't count. Alright, that's my pick.

**Mikeal Rogers:** \[laughs\] Alright. Paul, do you have a pick for us today?

**Paul Frazee:** Does this have to be a module? Can it be a service? What are the rules for this?

**Mikeal Rogers:** It can be anything. It can be a book, it can be a passion... It doesn't even have to be in tech.

**Alex Sexton:** Oil powder...? \[laughter\]

**Paul Frazee:** You know what, give me a second. Can you do yours first and I'll think of something for you?

**Mikeal Rogers:** Sure, sure. Mine actually is in tech this time; I'm just gonna throw out non-tech things. It's called Semantic Release. I've just been kind of feeling the weight of maintaining a lot of modules that people use, and as I've been writing new codes and new modules, I've been thinking about ways that I can automate things a bit more up front and do some work up front to make the longer-term maintenance of it a lot easier. One thing that I've been using is this tool called Semantic Release.

Basically, if you use Commitizen and do these proper commit messages, denoting features or fixes and stuff like that, Semantic Release will just automate the releases entirely. The pushed to NPM and everything will just happen automatically. This is really great when you combine it with a couple other tools. For these new modules that I'm running I have 100% test coverage, and I point cover all that, and I'm using this cool tool called Commitizen, so there's actually like an NPM command to write proper commit messages; using Husky, which is a way to install Git hooks into a project when you're messing around with it locally...

\[52:20\] So you can kind of verify all this stuff and give people a really easy path to contribute, and then as I'm pulling in patches, I can tell if it's completely tested, and as soon as it lands with these proper commit messages, the entire release process is automated.

It's really hard to get to this kind of level of nice tooling automation in existing projects, so it's not gonna help me out with requests any time soon, but I'm really loving it for my new projects... So check out Semantic Release on GitHub. Paul?

**Paul Frazee:** Well, I don't think I've got a pick for you, but I will say I am enjoying watching Game of Thrones' last season. If you haven't heard about it, it's a little show on HBO... \[laughter\] Real fun. I highly recommend it.

**Mikeal Rogers:** \[laughs\] Yeah, I had not heard of it.

**Alex Sexton:** Can you spell that?

**Paul Frazee:** There's a guy George R.R. -- I don't know... Is it Martinez? I think... Look it up, it's pretty cool.

**Mikeal Rogers:** I think it's Dinklage.

**Paul Frazee:** Oh, yes!

**Mikeal Rogers:** \[laughs\] Alright, that's our show. Thanks for everybody on the live stream and everybody listening at home. Thank you all! Goodbye!
