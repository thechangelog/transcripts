**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today's episode is number 44, and our sponsors for today are Toptal and DataDog.

Today on the show we have myself, Erik St. Martin, Carlisia Pinto is also on the show - say hello, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And our special guest today probably needs very little introduction, but a member of the Go team, Brad Fitzpatrick.

**Brad Fitzpatrick:** Hello!

**Erik St. Martin:** Hi Brad, how are you doing?

**Brad Fitzpatrick:** Pretty good.

**Erik St. Martin:** So for anybody who may not be familiar with who you are, do you wanna give a little bit of background on who you are and the things you're working on?

**Brad Fitzpatrick:** I've been working on Go for maybe 5-6 years now, and I kind of work on the open source-facing part of the public project, the standard library, I run the build system... I kind of touched a little bit of everything over the years.

**Erik St. Martin:** And you're to thank for most of the HTTP stuff...

**Brad Fitzpatrick:** Yeah, a lot of the standard library -- I did all the HTTP client and server, for both HTTP/1 and HTTP/2, and...

**Brian Ketelsen:** DB SQL...

**Brad Fitzpatrick:** Yeah, the database stuff, the exec child process stuff, some of JSON... Here and there, just cleaning up everywhere... Can't change too much nowadays, but before Go 1, things were much more fluid.

**Brian Ketelsen:** Back in the good old days...

**Brad Fitzpatrick:** Yeah.

**Erik St. Martin:** So you mentioned one thing that is interesting... There seems to be a set of Go team members who work on internal problems, Go as it relates to projects inside Google that use Go, and then some team members that focus more on the external community level stuff. Is that true?

**Brad Fitzpatrick:** Yeah, I mean... Well, back in the day there was just the first three or four people, and then maybe like eight or nine people, and everyone kind of did everything, including internal stuff and external stuff. But as Go has grown in popularity both outside and inside Google, we've kind of started to specialize more. So there are definitely some people now who never really go into the open source world, and they kind of stay within Google and just work on Google-specific libraries or Google-specific performance problems.

Sometimes you'll see people make an appearance in the open source world with some miscellaneous bug fix or performance improvement, and that was probably their first foray into public, and they've been debugging something for weeks internally, so...

We're trying to change that, so that Google-only contributors spend more time in the open source community if they kind of feel uncomfortable there... Because there's different tooling and different processes and stuff... But we're just kind of getting started on maybe doing that every three months or six months or something, having a week or two of what we're calling kick-off time, like when the tree opens again for a new Go release, making sure that the Googlers internally are also involved with that.

**Brian Ketelsen:** I've noticed that you've pretty much become the public face of open source Go. Any issues that come across, you're the person who's triaging them; dashboards go down, builders go down - you're the person that everybody's talking to. It's interesting to see how that has shaken out over the years. Is that something that you elected to do, is that something you were elected to do, or did it just kind of happen?

**Brad Fitzpatrick:** It kind of happened... Then, at some point, Russ or Ian or a group of people just kind of officially decided it was so, and I said, "Okay, well it's already kind of de facto", so it was announced officially. That's kind of how everything in Go happens. You do something long enough and you become the de facto leader; the kind of "you touched it last" problem.

**Erik St. Martin:** Yeah, that creates that buzz factor issue though too, sometimes...

**Brad Fitzpatrick:** Yeah, that's a current problem. I'm actually having my first child soon here, and I will be taking some paternity leave. That's a different type of buzz factor I guess, but I've been trying to ramp up some other people to help take over the builders and dashboards and stuff like that.

**Brian Ketelsen:** That's the best news ever.

**Brad Fitzpatrick:** Yeah, it'll be fun... Although I'm missing [GopherCon](https://www.gophercon.com/), but I guess that's a good reason.

**Brian Ketelsen:** Yeah, we'll give you a pass for this one, it's okay.

**Brad Fitzpatrick:** Okay. I just wish it was all livestream, so I could watch it from home.

**Brian Ketelsen:** It was last year.

**Brad Fitzpatrick:** Oh, was it?

**Erik St. Martin:** Yeah, the main room - all the keynotes were livestreamed; the side sessions weren't livestreamed... But yeah, we'll still work out details and we'll probably livestream part of it, so we'll give you a pass. A wedding doesn't count, because a wedding you can reschedule... \[laughter\] But you can't reschedule the baby.

**Brian Ketelsen:** You can schedule babies.

**Carlisia Pinto:** You could have timed the baby. Brad...

**Brad Fitzpatrick:** I know... But you know, I did time it such that it comes out right at the Go 1.9 release, so... \[laughter\] I don't know if that's good or bad, but at least during the 1.9 release freeze I won't have to worry so much about it.

**Erik St. Martin:** So is the 1.9 release's codename gonna be the same as the baby's name?

**Carlisia Pinto:** Yeah, it's like two births.

**Brad Fitzpatrick:** I don't know, we haven't really had codenames for the other releases, so it'd be weird to start now.

**Brian Ketelsen:** Well, you've gotta start a tradition somewhere. Everybody else does codenames for releases \[unintelligible 00:05:57.21\] I think we need some cool names in Go. That's what we're missing.

**Brad Fitzpatrick:** File a proposal. We have a proposal process.

**Brian Ketelsen:** Yeah, I'll file a proposal... We know what's gonna happen with that.

**Erik St. Martin:** Delete! \[laughter\]

**Carlisia Pinto:** Actually, it seems Brad does so much of the work of interacting with people... Why don't we talk a little bit about what the process is like for people to contribute...? There's a recent blog post by [Steve Francia](https://twitter.com/spf13), but I think it's good to discuss it on the air. By the way, Brad, can you approve my pull request? I just put it in last night... Please? \[laughter\]

**Brad Fitzpatrick:** Well, actually we don't officially take pull requests yet - that's one thing I need to be working on sometime here.

**Carlisia Pinto:** I don't know, what is the thing that I did called? I made a change... The CL. What does CL stand for?

**Brad Fitzpatrick:** ChangeList. It's actually this [Perforce](https://en.wikipedia.org/wiki/Perforce) terminology from back when Google used to use Perforce.

**Erik St. Martin:** I remember Perforce.

**Brad Fitzpatrick:** Go is now on its fourth version control system, and I think Perforce was the first one. It was like Perforce, Subversion, then Mercurial and now Git. But throughout all these transitions, we keep updating our tools to feel like the original tool, so all the terminology is still from way back in the day. It's really weird.

**Carlisia Pinto:** Alright, but let's not change subjects... Can you please approve it? \[laughs\] Whatever its name is...

**Brian Ketelsen:** The CL.

**Brad Fitzpatrick:** You should probably ping it, because sometimes I lose things, and this is something I need to fix. I need to fix my dashboards, so everyone can help out and see older things. Right now, unfortunately, a lot of the times I only see things that are at the top of my inbox. If you ping it, it will come back to the top.

**Erik St. Martin:** I love how Carlisia waits till you're on the air to put you on the spot... You can't say no live...

**Brian Ketelsen:** Pretty epic.

**Carlisia Pinto:** And the CL is just to include GoTime on the website.

**Brad Fitzpatrick:** Oh, you know what? I did see that this morning.

**Brian Ketelsen:** That's CL number 41146...

**Carlisia Pinto:** So go ahead and press the button.

**Erik St. Martin:** She's like, "We'll wait." \[laughter\]

**Brad Fitzpatrick:** I'm at the wrong computer, so...

**Brian Ketelsen:** You're awesome, Carlisia.

**Carlisia Pinto:** But in any case, why don't we hear from Brad what the process is like? You were talking about submitting a proposal... Are there cases where submitting a proposal is not necessary? For example, I submitted that CL, but I had to ask Steve Francia, "Hey, can we add it?" and he said, "Yeah, go ahead and submit a change", so I did it.

I didn't open an issue... If I hadn't talked to Steve, should I have opened an issue first? Or just submitting a CL is fine, if it's something super small like that?

**Brad Fitzpatrick:** If it's super small, just do it. We even made our proposal process be pretty light weight, because we knew that even if we wrote a really formal proposal process, people would ignore it or not read it anyway. So we made the proposal process start out with you just file a bug and start talking, and if we deem that your proposal is too complicated and it requires a little bit more formality, then we send you the proposal template and have you write a formal proposal.

Most of the time, we just immediately say Yes or No, and we don't make people go through the whole "write a design document" phase.

**Carlisia Pinto:** Okay.

**Brad Fitzpatrick:** Yeah, your thing is probably not controversial. I imagine someone, or me, will click _Accept_ later.

**Carlisia Pinto:** Okay, thank you. So I actually saw a piece of code that I want to add, but I don't even have a use for it, personally... I just think, "Wow, it'd just be complete if it existed." When I submit a proposal, do I need to have a strong use case? Or if I don't have a use case, can I submit it anyway and say "Hey, I think it should be here"?

**Brad Fitzpatrick:** We have a fact that I added a while back that was "Why isn't X in the standard library?" Basically, it says we have too much stuff in this standard library and we kind of made a mistake adding so much, so please do not add more stuff to the standard library unless it's very important. So generally we would say, "No, please add it on GitHub instead."

**Carlisia Pinto:** What do you mean, "Add it on GitHub instead"?

**Brad Fitzpatrick:** Well, you said you have something that you want added for completeness, but you don't really have a use case yourself...

**Carlisia Pinto:** Yeah.

**Brad Fitzpatrick:** So if you're proposing adding that thing to the standard library, we would probably be saying No, especially if there's no reason for it and you just wanna do it for fun. We don't generally add to the standard library just because we can.

**Carlisia Pinto:** But then you said "Add it somewhere else instead?"

**Brad Fitzpatrick:** Yeah, like put it somewhere that you can run `go get`. The problem with the standard library is we can't really fix things quickly and we can never change things and we can never remove things, so you're much more flexible if you just add it on GitHub.

**Carlisia Pinto:** Like my personal project...

**Brad Fitzpatrick:** Yeah, or there's other places... You can get your own domain name and make a fancy name for it. I have [go4.org](https://go4.org/) for miscellaneous Go utility functions that I need in lots of projects, but I don't necessarily want to add to the standard library... So I'll add other cool stuff to go4.org.

**Carlisia Pinto:** Oh, that's cool.

**Erik St. Martin:** I should use mine for that, too. I registered gopher.af a while ago... \[laughs\] And I still haven't found a use for it.

**Brad Fitzpatrick:** Ever since I registered that domain name, go4.org, I get so much spam from people saying, "Hey, I have a similar domain name. Are you interested in purchasing this one?" and they're all just terrible. They're all just random letters and numbers and gibberish. I'm like, "Well, it's true, I did order something that's pretty much gibberish, but..." No, it's my inside joke.

**Erik St. Martin:** I always hate that, when people try to sell you... And the other thing I find too is if you search for a domain and you're sitting on it, you're like "I wonder if I should buy that" and you go back, it always seems to become like a premium domain with a higher price, and you're like "Seriously?!" You have to be prepared to buy right then, otherwise you're at risk of them jacking the price on you.

**Brian Ketelsen:** That's my problem.

**Brad Fitzpatrick:** If you search through the register search forums, then they know. You have to search via Whois directly, or something, so they don't know that you're searching for it.

**Erik St. Martin:** Shopping for domains through Whois first... \[laughs\]

**Carlisia Pinto:** Yeah... Search for it on the terminal.

**Brian Ketelsen:** I always go to the registrar with my credit card.

**Erik St. Martin:** So you had mentioned the 1.9 release, too... What are some of the things that you're working on specifically for 1.9? Anything you can talk about yet?

**Brad Fitzpatrick:** \[unintelligible 00:12:35.16\] seeing how little code I can touch in the tree for 1.9. A lot of stuff I'm doing is really all about getting the community more involved in bug triage and code review triage... Because as Go grows both internally and externally, the number of bug reports we get and the number of changes that people send in just keeps growing and it doesn't really scale when there's only a couple of us doing reviews, because we spend all of our time triaging bugs and doing code reviews...

So I'm trying to make it easier for the community to get involved, so they don't feel intimidated, they know the process, or we have better dashboards telling them what needs attention...

We made this wiki page called [Gardening](https://github.com/golang/go/wiki/gardening), which is just all the kind of gardening tasks that people can do if you have five minutes or ten minutes to kill and you wanna help Go out. We try to say, "Here's a list of either GitHub queries for issues that might need attention" or "Here's the recent code reviews", "Here's the sorts of tasks that you can do that might only take a few minutes but it would move something along."

**Carlisia Pinto:** Where is this list?

**Brad Fitzpatrick:** There's a list at golang.org/wiki/gardening. Various open source projects use this phrase "gardening" as kind of like a background cleanup task you can do... Because you know, gardening and picking weeds never ends. There's a whole bunch of tasks listed there.

Maybe we had to label "Waiting for info" on a bug and reviewing the bugs on GitHub labeled "Waiting for info" and seeing "Should this be closed? Did this timeout? Did the OP get back to us with the requested information?" Kind of just moving bugs along and pinging them when necessary...

If someone sends in a code review that has the wrong commit message format, telling them how to format their commit message, telling them that they forgot tests, finding typos... There's lots of easy things you could do that are unrelated to whether the patch is actually correct, or whatever.

**Erik St. Martin:** Here's an interesting thought... Usually for the release cycles [Dave Cheney](https://twitter.com/davecheney) puts together a presentation, and multiple meetup groups present that.

**Brad Fitzpatrick:** Yeah, the global release parties.

**Erik St. Martin:** Yeah, so I wonder if some sort of shared presentation like that could be put together and it could be used as content for meetups? A lot of meetups are always looking for content, so each person could present and maybe turn it into like "Hey, we don't have anything to talk about this month, let's have a gardening party, where everybody triages some stuff", and they do it once every other month or something like that, and it becomes a collaborative effort, and people can kind of metor each other, people who have never done it before.

**Brad Fitzpatrick:** That's an interesting thought. Maybe I should try that out at the Seattle meetup sometime here.

**Carlisia Pinto:** That reminds me too that a lot of languages have Bugmash, right?

**Brian Ketelsen:** Bugmash, yeah.

**Carlisia Pinto:** We don't have that yet. Brad, what do you think of organizing something like that?

**Brad Fitzpatrick:** I don't know what this is.

**Carlisia Pinto:** So this like like - correct me if I'm wrong, Brian - taking a couple days and saying "During these couple days..." -- well, first of all, the maintainers have to come up with a list of issues to be taken care of. We just do a global effort and say, "During these couple days, we're going to come together and just smash bugs."

**Brad Fitzpatrick:** Oh, I see... Like a bug burndown, or a fix-it week, or something like that.

**Carlisia Pinto:** Exactly. Each language, each community has a different name.

**Brian Ketelsen:** Yeah, the emphasis though is to create engagement in people who previously may not have had some, so... Rather than spending the five minutes to fix the tiny bug yourself, you spend 20 minutes making it really easy for someone to get in and do it who hasn't committed patches before.

**Carlisia Pinto:** Exactly.

**Brad Fitzpatrick:** This is something that's actually been on my to-do list for the last three months now, I guess. One of the things I was supposed to do last quarter is do a blog posts saying how to contribute to Go and how to get involved with this sort of stuff, but I keep putting it off because I want more dashboards for people to use to make it even easier... But at some point I just need to say enough is enough, "What we have is good enough for people to get involved."

**Erik St. Martin:** Yeah, and I think the argument too is I think the Bugmash or -- there's another name for it, Ruby had one... I don't feel like it was called Bugmash... It was something along those lines. But that's a lot of times for people who want to contribute the code, and a lot of people when they're just getting started out aren't familiar with the codebase and how things work, and they don't really have the confidence to contribute, so I think you won't get as many participants in those types of things as you will in like "Hey, you may not wanna jump in and contribute code, but you can contribute in these ways." By doing so, that will familiarize them with the project and the components and things like that, and then maybe build the confidence that way.

One of the things I've seen in meetups too is a lot of people -- it takes them a long time to get the confidence to submit a changelist. They're always afraid that they're gonna get beat down... And sometimes you do, but people take it different ways. I think helping with the gardening is a way to build that confidence where you're familiar with the contributors to the project, you're familiar with who works on what and what are the right questions to ask, and the stages tickets go through, because you're used to being involved in that process.

**Brad Fitzpatrick:** We at least have the Slack channel now for reviewers... The [reviews](https://gophers.slack.com/messages/C029WG6AM) one on the GopherSlack, so people can hang out there that are triaging stuff and doing gardening.

**Brian Ketelsen:** I didn't know this existed.

**Carlisia Pinto:** I did not know that existed either... But I think any community effort to bring people together and have a little bit of support to get over the hump of getting set up, and having the motivation to get set up, because they know there's going to be a list of issues that are easy enough for them to do the first time around is huge.

For example, I had never contributed to Go at all, but yesterday I took a little bit of time to get set up, and it was like "I wanna add one line of text, but I have to get through this whole set up"... Which, by the way, was very simple. It took a little bit of time, but it was very simple.

**Brad Fitzpatrick:** I personally hate our contributing process and that document that's so long and it scares so many people... There's not really many steps, but there's so many words around it that people see it and they just run away screaming and say "Why don't you use GitHub?"

The answer is we probably should... I mean, when we transitioned to GitHub, it was kind of a really quick, forced migration because code.google.com was shutting down, so GitHub was the obvious place and they had the bug tracker, but we weren't really ready to give up Garrett, because code reviews on GitHub historically have been pretty terrible. They've gotten better over time, but we really liked _Gerrit_. So we said, "Okay, well we'll use GitHub for the issue tracker, and the wiki and stuff like that, but the code review - we'll do it in _Gerrit_ and GitHub will just be a mirror." But it's probably time that we wrote tooling to accept GitHub pull requests, and at least for now convert them into _Gerrit_ changes automatically, so the review would happen on _Gerrit_, _Gerrit_ would still be the upstream... But if someone only knew the GitHub flow, they could stay within the GitHub flow and send new PRs, revisions on the code review and then we just transparently update the _Gerrit_ CL. So probably we need to do that to start, but...

**Carlisia Pinto:** Yeah, because like I was saying, it was not hard to do, but it took a little bit of time, and it was a time that I broke down; like, I would read the paragraph and then do one thing, then go do something else... Like, "Argh! I don't wanna go through this whole thing!" So I went back and forth, and finally in a few hours I completed all the steps. But it's something that you have to do one time, and it's very demotivating if you're just going through that whole process, the whole text to just do one thing that's small.

Now that I went through it, I pulled the code, I put down the blog, the website inside the Go project... If I wanna make a documentation change, it's so simple. I just sync. It's business as usual. I start a branch, and -- I don't know the terminology, but using the Git terminology, I just push.

Now that I have it there, it's super simple. I just have to find, "Okay, what contributions can I make, based on what's out there that you need?" That goes back to my point on having some Bugmash event - that'd be super cool.

**Brad Fitzpatrick:** Yeah, well now that you've spent the hours setting it up, now you need to fix a bunch of bugs to amortize that time.

**Carlisia Pinto:** Exactly. \[laughs\] Got my time's worth.

**Erik St. Martin:** The other thing that people might not be familiar with if you're just looking for stuff is there's a _Help Wanted_ tag in the GitHub for Go.

**Carlisia Pinto:** Yeah, I was going through that right now.

**Brad Fitzpatrick:** People always ask for us to use that more; they want more things... But I'm kind of against that label because we never seem to be able to use it correctly because there's never really a great definition of what it means. People want like an _Easy_ or a _Beginner Friendly_ label, but the problem is what is easy for one person is totally different for another user.

If something was truly trivial for everyone, it would have been fixed by now. We never really know -- and _Help Wanted_ is kind of a silly label too, because we want help on every bug. I've been using _Help Wanted_ more and more lately, but I basically just add it to everything... Which is fine, but I don't know. I feel like people should feel free to jump in and grab anything.

**Erik St. Martin:** Yeah, there was a project that I contributed to and I can't remember what it is - it might have been Ruby, or something... Their label was _Bite-Sized_, or something along those lines, which was kind of more like you could fit it in in one sitting - most people anyway - rather than bigger implementations like _Generics_ - you might do _Help Wanted_ because you want people's opinion's on it, but that's certainly not something a new person is gonna sit down in an hour just to get a contribution...

**Brian Ketelsen:** We need a _GenericsMash_.

**Carlisia Pinto:** I wanna say something about the _Beginner_ label... I had an experience - when I was first starting to learn Go, I went to this big open source project, and they had a label for beginners (or _Easy_ or something) and I was going through the issues and I'm like "Holy smokes! This is hard. If this is _Beginner_... Wow. What is _Intermediate_? It's like rocket science kind of stuff." So it really scared me away, but I've been working with programming for a while, so I gave it a chance after I learned, and I can understand this stuff now.

But like Brad was saying, if you label something that sounds like beginner level for you, it could be very complex for somebody else coming in. You can really get people freaked out. You've gotta be careful with those labels, but I like the idea of labeling based on bite-size or time chunks... That's good.

**Brad Fitzpatrick:** Well, a lot of times you don't know until you get in there, how gnarly is gonna be.

**Carlisia Pinto:** True, that's another thing.

**Erik St. Martin:** So I think we are a little overtime for our first sponsor break... Let's go ahead and take that. Our first sponsor for today is Toptal.

**Break:** \[00:24:30.22\]

**Erik St. Martin:** Alright, so we are back, talking to Brad Fitzpatrick. We were talking about Go and contributing before the break, but one thing I wanna lead into is you've always got these cool hobby projects going on... What's something cool you're working on right now?

**Brad Fitzpatrick:** I mean, I moved to Seattle recently, so I've been working on lots of miscellaneous home automation stuff. We got a bunch of Z-wave light switches, and I got some \[unintelligible 00:25:31.23\] security cameras and I've been working on doing my own motion detection...

Actually, it was the last GopherCon that I gave a lightning talk about my motion detection security system. That's something like, whenever I have a few minutes I try to improve that a little bit.

**Erik St. Martin:** Are you doing that in Go, or are you just using [OpenCV](https://opencv.org/)?

**Brad Fitzpatrick:** No, it's almost all Go. I have a little Go server in the house that connects to the cameras, and gets their compressed MPEG stream of the video, and then I stream it outside of the house to a cloud instance that has more compute power. Then I have little FFMPEG child\_process that decodes the video, and it also does the EDGE detection that is built into the FFMPEG. Then I just output the raw pixels over standard out from FFMPEG and I read the raw pixels out of FFMPEG with the EDGE detection and I compute the delta over time of where the EDGEs move, and once it crosses certain thresholds and certain zones of the video, then it starts recording.

It's always recording the last 5 or 6 seconds, even when there's nothing in little rolling ring buffer, but once there's motion, then I start streaming it to an object on cloud storage.

I have little processes in the background that go and generate GIFs from them, little two-second GIFs, selecting the right frames to make the most interesting GIF possible. Then I can send those on Telegram, or whatever. It's kind of fun.

**Erik St. Martin:** You have all the raw video streaming out of your house to the cloud... Your ISP must love you.

**Brad Fitzpatrick:** I have Gigabit, it's cool...

**Erik St. Martin:** That's awesome. Speaking of projects that are over people's heads - I don't know whether I could build something like that that does all the EDGE detection and things like that... That's awesome. You need random captions for the GIFs, too...

**Brad Fitzpatrick:** Yeah, I was thinking of throwing it through the Google Vision API or something, and identifying objects... I found some cats that were playing on my front porch the other day, because they set off the motion detection. There was like a black cat and a grey cat that were chasing each other...

**Brian Ketelsen:** That would be cool! So you could get a text message that said "There are cats in your backyard."

**Brad Fitzpatrick:** Cat alert.

**Brian Ketelsen:** I like that.

**Erik St. Martin:** The other thing too, you always have the skyline pictures... Are you doing something with that, or is that just kind of like in a set interval and you're just storing them?

**Brad Fitzpatrick:** When I first moved in, I wanted to do something with that. There were all these cranes in Seattle, and I wanted to have a time-lapse of all these new skyscrapers going up... So I put a camera on the roof, and I have a picture every minute uploaded to a cloud storage. I'm up to like 780,000 of these 8-megapixel JPEGs, so I wanna do something with them. I've been trying to think of fun ideas, a little web app to let you drag your mouse around and have the sun follow your mouse, or track planes or boats, or let you sort by hue, so you can get the sky in different colors... But I don't know, I haven't spent time with that. I have the data, which was the tedious part, and now that I have it, I need to do something fun with it.

**Erik St. Martin:** You know, it's really good that you work for a cloud provider, because I don't think anybody would want to have the bills that you probably have for it... \[laughs\]

**Brad Fitzpatrick:** It's not too much at all. I think it's only 150 gigabytes or something.

**Brian Ketelsen:** It's not bad.

**Brad Fitzpatrick:** Yeah, it's not bad at all.

**Brian Ketelsen:** That's half of my iTunes library. \[laughter\]

**Brad Fitzpatrick:** Do you still collect music?

**Brian Ketelsen:** I did for a long time, now I don't even use iTunes anymore.

**Brad Fitzpatrick:** I just sold my car and I found my old iPod... One of those big ones that had a rotating hard drive in it, and it was still in my glove compartment hooked up to the car, because the car had this iPod connector cable in there... And I had basically my college music snapshot on this 80 gig disk, and it hadn't been updated since then, but it was still working.

**Brian Ketelsen:** That's so awesome... I found a Sony MiniDisc in my drawer yesterday or the way before, and I have absolutely no way to know what music is on it. I'm sure it's really epic, but I have absolutely no clue.

**Erik St. Martin:** I'm sure you could probably Craigslist the drive or something for it... Somebody's bound to have one...

**Brian Ketelsen:** Yeah, if I cared...

**Erik St. Martin:** I've got probably a portable hard drive or two with music on it, but I held onto it for the longest time, because I'm like "Well, what if I actually need the MP3s?"

**Brian Ketelsen:** Your Napster collection?

**Erik St. Martin:** Now it's too easy... You can stream from any device; Bluetooth in my car, and Spotify from there - problem solved. I don't need MP3s.

**Brad Fitzpatrick:** I found a box of my earliest programs from the Apple 2 on these five-and-a-quarter-inch floppies, and I had no way to read them, but somebody on the internet said, "Oh, I have the hardware for that. I can image them and send you back the raw data", then I figured I could put it in the emulator, or something. So I sent him off, and never heard from the guy again, and I tried to ping him every six months and say, "Hey, do you still have the discs? Can you send them back?" Nothing, so...

**Erik St. Martin:** Aw.

**Brian Ketelsen:** Aww...

**Brad Fitzpatrick:** But it's okay. They are probably dead anyway.

**Erik St. Martin:** Or, have you had your identity stolen recently? \[laughter\] He found something good on there and he's like, "Oh..."

**Brad Fitzpatrick:** No, those programs - they were not good.

**Erik St. Martin:** I still miss some of those days, too... I always ask people when they say they have the five-and-a-halves, it's like "Do you have \[unintelligible 00:31:04.06\]?" I betcha you can get that in the emulator now...

**Brian Ketelsen:** You guys are so young... When I was a kid, we had to type in our applications from the back of Byte Magazine, and when you turned off the computer, the app went with it.

**Erik St. Martin:** You had to type it in every time you wanted to use it?

**Brian Ketelsen:** That's right. I didn't even have a cassette deck to store when I first started computing.

**Erik St. Martin:** Yeah, that's definitely before my time.

**Brian Ketelsen:** Mom would come in and she'd be like, "You need to shut that off." "No, no, no... We're not shutting anything off." No, no, no... That was a lot of typing.

**Erik St. Martin:** I do remember having 28k baud modems. Actually, mine \[unintelligible 00:31:42.00\] where like if you wanted music, you wanted the whole CD, you had to leave it on overnight and hope that nobody disconnected the phone line... You woke up in the morning, "Noooooo...!"

It's funny though, because generations now probably don't even realize the irony. When a lot of us started out with the internet, you called up the internet, right? The internet was served over telephone lines, and now telephone is served over internet lines.

**Brad Fitzpatrick:** Have you guys watched the TV show "Halt and Catch Fire"?

**Brian Ketelsen:** No.

**Erik St. Martin:** Only a couple of episodes.

**Brad Fitzpatrick:** Okay... It follows the late '70s and '80s computer industry, and I think season two is about a dial-up ISP, kind of like a BBS system company that they're building, and the whole thing is super nostalgic... It's a pretty good show.

**Carlisia Pinto:** That is a good show. I also didn't watch all the episodes, but I need to go back to it. Thanks for the reminder.

**Erik St. Martin:** What was the HBO one that was about startup life?

**Brian Ketelsen:** Silicon Valley?

**Erik St. Martin:** Yeah, there was that one and there was another one. Yeah, I think Silicon Valley was the one. That's hilarious...

**Carlisia Pinto:** That's hilarious.

**Brian Ketelsen:** I can't watch it... It's too close to home.

**Erik St. Martin:** It's like, "Yeah, one guy took the money and then I think he killed himself", and it's like, "No, wait... Maybe he didn't take the money. Oh, I'm forgetting..." \[laughs\]

**Carlisia Pinto:** I think they did it really well, they did a good job consulting with whoever they consulted with.

**Brian Ketelsen:** Probably Brad.

**Erik St. Martin:** It was Brad behind the scenes.

**Brian Ketelsen:** Yeah.

**Carlisia Pinto:** Probably. So we were talking about storage, and of course we need to talk about -- I don't know how to pronounce it... [Camlistore](https://en.wikipedia.org/wiki/Perkeep)?

**Brad Fitzpatrick:** Yeah... The temporary name that was not temporary. I always thought I was gonna rename that one day.

**Carlisia Pinto:** Yeah... I watched a little bit of your video, and I understand that it's an acronym.

**Brad Fitzpatrick:** Yeah, so this was the project that got me into Go, actually. I was working on Android at the time at Google, in Mountain View, and the bus ride between San Francisco and Mountain View, on a good day, takes 45 minutes, on a bad day takes like two hours.

So I had sometimes four hours to kill on this bus, and I could either hate my life or I could write code... But I needed something to write, so I had this idea that I wanted to build the storage system to end all storage systems to backup all my stuff and archive all my content from all these social networking sites. I have tweets places and photos places and blog posts in other places... I wanted to have all of my stuff, all my backups and files and content, and all my websites hosted out of this thing.

I knew the data model I wanted, I knew the protocols I wanted; I had kept a bunch of notes... So then I had to actually just build the thing and I had to choose what language I wanted to use, and I googled the options: C++, Python or Java... I had written enough in all of these languages to know I definitely did not wanna write in any of these languages...

C++ is basically only usable if you have a giant standard library like Google and you have a good build system like Google, but otherwise the tooling for C++ is kind of painful. I'd written enough Python and Perl to know that it's not really great to write servers, because you have to either do lots of callbacks and all this sort of stuff, or you have really terrible performance... And I was writing Java for Android at the time, and I just had enough Java in me that I was just kind of done with it.

This was about the time that Go was coming out, so I decided I would prototype my idea in Go first. I got into that riding on the bus, which was great, because I didn't need the internet, I had good (enough) tooling at the time... This was before the `go` commands, so you had to use makefiles, but it still compiled so quickly that it wasn't too bad... And I kept finding problems of things that were missing in the standard library and things that the HTTP package didn't get right, so I just started sending changes off to the Go team, which I guess at the time was Ross and Ian and Robert. Ross kept approving my HTTP stuff, and I kept sending more, and eventually I just switched to the Go team full-time.

I got an email from [Rob](https://twitter.com/rob_pike) one day, and he was like "Hey, do you wanna do this full-time?" I had already done Android a few years at that point and it was pretty obvious that Android was here to stay... It wasn't a crazy idea anymore, so it was time for a new crazy idea. But now it looks like Go might be here to stay, too...

**Carlisia Pinto:** And now it's time for you to ove on...

**Brad Fitzpatrick:** I don't know... I don't know what I would do.

**Brian Ketelsen:** Yeah, I remember very specifically... Probably mid-2010, there was a good, solid time period where every change in Go was driven by a Camlistore change. It was easy to follow it like clockwork.

**Brad Fitzpatrick:** All the HTTP stuff kind of came out of there, the database stuff came out of there, a lot of changes in the Strings package... Even `strings.Contains()`, and very basic things like that.

**Carlisia Pinto:** So I took a look at Camlistore from watching your videos, and it's really cool. We have a few questions from listener ZelenHunter; his question about Camlistore specifically is "Will you go back to actively developing Camlistore?" I saw that you did have a release this month, but does that mean you're actively back to working on it?

**Brad Fitzpatrick:** No, I actively review stuff that this other guy, Mathieu works on. He works on it all the time. I'm still kind of watching and involved; I don't write as much code on it as I used to. Maybe when I go on my paternity leave I will do that instead of... In my breaks. We'll see.

**Carlisia Pinto:** Do you see it ever becoming a solid product?

**Brad Fitzpatrick:** I mean, it's pretty usable and solid right now. Every release we do gets a little bit more mainstream and a little bit more usable. I think two or three releases ago we did this launcher... If you go to Camlistore.org/launch, we have a little form that creates you your own instance running on Google Cloud.

**Brian Ketelsen:** That's cool.

**Carlisia Pinto:** That's cool.

**Brad Fitzpatrick:** So then it came out, but it was like at a ugly IP address, and the security was over an HTTPS cert that was self-signed, and then I went off and I worked on [LetsEncrypt](https://letsencrypt.org/) support and I added that to the Golang. I worked with this other guy who implemented Acme, but then I made this Autocert package that's a Golang x/crypto/acme/autocert... So we added that to Camlistore as well.

Now Camlistore can get a LetsEncrypt certificate but we needed to do a domain name automatically, so when people created their own instance, they had one. Then we created this DNS server that you get a subdomain of Camlistore.net automatically, and we have a little protocol that's like Acme, and we'll give you any subdomain that you can prove that you have the key pair for; so you get like kind of an ugly domain name which is like a fingerprint of your key, .camlistore.net, and we'd automatically do a tie-in DNS server, and then you request a LetsEncrypt cert for that.

The end result is you go through this wizard and you say `create vm`, and then 40-60 seconds later you have a running instance with a fully-trusted cert and domain name.

**Brian Ketelsen:** How do you get around the subdomain rate limiting for LetsEncrypt? Because they have a pretty strict 20 subdomains/week limit.

**Brad Fitzpatrick:** We don't have that many users, so we haven't really had that problem yet.

**Brian Ketelsen:** Okay, but be warned... It's coming.

**Erik St. Martin:** Challenge accepted.

**Brad Fitzpatrick:** Yeah... Well, at that point we'll help people to bring their own, or send them through some domain creation flow elsewhere.

**Carlisia Pinto:** Another question from this user is "How is the core Go team dealing with burnout?" I'm not even aware that the Go team has a burnout issue, but I thought it was a good question to ask in case this is the case. Can you talk a little about that?

**Brad Fitzpatrick:** Yeah, it is getting a little bit repetitive. I know [Andrew](https://twitter.com/enneff) - he went to work on Upspin because he kind of needed a change... You know, you do the same thing for years and years, and it kind of gets a little repetitive.

I'm kind of there myself, because I think Go 1.9 will be my 10th or 11th Go release, not counting all the point releases in the middle... And it's a little frustrating that you can't fix a lot of things and you keep seeing the same bug reports and the same proposals over and over and you have to keep duping all these bugs and say "Sorry, we can't change this", or "This would have to wait for some sort of Go 2"...

I try to mix it up and do different tasks occasionally, and focus on different things... The HTTP/2 stuff I did for Go 1.6 was a good distraction, because I got to actually write code and think about new types of problems. Now I'm doing all these dashboards and stats on community interaction, which is interesting in some ways... And I've been focusing on [Kubernetes](https://kubernetes.io/) defining all of our build infrastructure and all the microservices that run the Go build system... That's kind of been fun to learn about Kubernetes, but yeah, I definitely go through periods where things are very repetitive and boring, and then I have to find something new to do for a while.

**Erik St. Martin:** Do you think that the frustration with not being able to change, and things like that, might help motivate more of a 2.0, or at least getting the thought process and talks going on about what 2.0 might look like?

**Brad Fitzpatrick:** Yeah, I think we're all kind of feeling that or getting in that -- feeling that we probably need to do one. I don't know, it's been almost... Go became an open source project in November 2009. I think Rob was saying that if he were to do a Go 2, ten years would probably be a good time.

Personally, my biggest concern is that another language would come out and would have goroutines. I feel like goroutines are Go's real feature. No one else does lightweight threading really well. Other people have copied the good tooling, but the go type system is incredibly interesting. If someone came out with a language with very good tooling, that was still kind of simple and had goroutines and made writing servers very easy, but it also had a more powerful type system...

**Brian Ketelsen:** Have you guys seen Crystal yet?

**Brad Fitzpatrick:** Which one is that?

**Brian Ketelsen:** Crystal is the Ruby-alike that's written in C or C++ and it's fast as hell, compiles down to native... They've stolen all of goroutines and channels, the whole works, and it is actually really fast. The standard library still needs some work; it's not 1.0 yet. I was playing with it a weekend or two weekends ago, and it does feel like Ruby, and it is fast as greased lightning. It'll be interesting to see...

**Erik St. Martin:** I always like tinkering with new languages.

**Brad Fitzpatrick:** Who's behind it?

**Brian Ketelsen:** I don't remember... A small group in Europe, maybe.

**Erik St. Martin:** That's [crystal-lang.org](https://crystal-lang.org/).

**Brian Ketelsen:** It's sponsored by... I can't remember. Manas.tech is the company behind it.

**Brad Fitzpatrick:** That's promising, that there's more than one person.

**Erik St. Martin:** It's always fun just to even poke at other languages... What are some of the other ones that we've poked at over the years, Brian? Pony, Nim...

**Brian Ketelsen:** Pony is not for me. Nim is fun... What are the others? I've played with Elixir... Elixir is not different enough for me.

**Erik St. Martin:** I mean, you're right there - goroutines are really awesome. I remember the first time I discovered that you can just use them at will... When you recommend that to people, they're like "How many of these can I have?" "As many as you need." "Wait, there's not some kind of cap?" "No, just keep using goroutines."

**Brian Ketelsen:** "How many do you want?"

**Brad Fitzpatrick:** I was following both Rust and Swift... Both of them were flirting with the idea of adding lightweight tasks or goroutines or fibers or whatever you wanna call them, and both projects kind of gave up on it and said, "Well, it's a little difficult, and I think pthreads are good enough... Maybe we'll think about this later."

Everyone kind of keeps thinking about it and not doing it. Somebody else will do it, I'm sure.

**Erik St. Martin:** Oh yeah, I think it's a guarantee somebody will do it, it just becomes a question of who - is it a new language, or does it get adopted into the new version of a current language...? But I think it's hard not to at least consider it with the accelerated growth that Go has seen over just a couple of years.

I think that other prospective new languages at least have to question "Why are people so drawn to that language?" and start to adopt some of those things.

**Brian Ketelsen:** Well, going back to Crystal for a minute... Crystal has the recipe for some good success, because people enjoy the Ruby syntax a lot (some people do) and adding things like goroutines and channels to that seems like it could be a good recipe, but when you play with it, it just doesn't all click like Go does.

**Erik St. Martin:** It sounds fluid, yeah.

**Brian Ketelsen:** Yeah, I've heard many times... One of the core competences of Go is that it's written to be read, and most languages just aren't. Go is optimized for people to read that code, and it has such a huge impact on your productivity... It's hard to describe how hard it would be to replicate that somewhere else.

**Erik St. Martin:** I think from the other side too, people don't wanna try the language because they want something they feel is complex... It tickles that part of you brain, like "Oh, I need to learn something super cool and complex", rather than what they feel is like an easier language. So it's hard to break that barrier to be like, "No, it doesn't matter your skill level, you're still gonna love it. I promise."

**Brad Fitzpatrick:** Did you guys see YouTube is working on that Python runtime written in Go? I think [Grumpy](https://github.com/google/grumpy)...

**Brian Ketelsen:** Oh, yeah.

**Erik St. Martin:** Yeah, yeah.

**Brad Fitzpatrick:** That'll be interesting to see how far they get. It'll be also interesting to see if other languages use Go as their runtime.

**Erik St. Martin:** Yeah, last week we actually just discussed a project we saw where somebody was implementing the Ruby runtime in Go. I don't know how far along it was, but we did see it.

**Brian Ketelsen:** Weren't there two of them? Two different Ruby runtimes in Go?

**Erik St. Martin:** One of them was a Ruby-like language implemented in Go, and the other one was supposed to meet the actual Ruby spec.

**Carlisia Pinto:** We're talking about languages now, but I'm dying to ask, and other people are asking, as well... Is there any prospect, and how good of a prospect is there if the answer is yes, for Go to have _Generics_? I'm asking this because obviously a lot of people want to know, people ask all the time, and my understanding is that there has never been a No to this question. I think the door has always been open to that possibility.

**Brad Fitzpatrick:** Yeah, I think everybody basically wants it; there's not very much anti-generic sentiment on the team. I think we would all like it if we could put algorithms in the standard library, and more containers and data structures in the standard library, or somewhere in some shared library, even if it's not built in the standard library. But there hasn't been a great proposal...

Ian Lance Taylor has written I think five or six proposals at this point, and every time he generally rejects his own proposals. He has even implemented a few of them... So he's probably the one that will figure it out. I don't know if it will be his seventh or eighth proposal he writes... \[laughter\] But I think he's getting closer. He seems to like each one of his proposals a little bit more.

**Carlisia Pinto:** And this is Ian who?

**Brad Fitzpatrick:** Ian Lance Taylor. Ent@golang, or whatever. He's Ian Lance Taylor on GitHub.

**Brian Ketelsen:** He's mostly responsible for the GCC port of Go.

**Erik St. Martin:** Yeah.

**Brad Fitzpatrick:** Yeah, and he wrote the gold linker. He knows everything about signals and linkers and all this kind of hairy stuff that I don't know.

**Brian Ketelsen:** The magic stuff that I wanna ignore.

**Brad Fitzpatrick:** Yeah... Whenever there's some really bizarre UNIX question, like "Here's a process control group with a TTY session leader and something gets a signal and something dies, blah-blah-blah...", he's like "Well, of course... In UNIX, this page of the specification does that, except from that version of UNIX, blah-blah-blah..." He knows how UNIX works and how low-level things work, and he also thinks a lot about languages, so...

The summary is -- I imagine if there's a Go 2, it would have _Generics_. I don't think we would do a Go 2 without _Generics_; it wouldn't be interesting enough. It would be too big of a change to do a Go 2 and break things without it being worth it. I imagine there probably will be a Go 2 at some point, I just don't know about timing.

**Erik St. Martin:** Yeah, and I don't think you wanna tell everybody "Generics in Go 3", when they see how long it takes to get to Go 2. They'll know it's never gonna happen.

**Brad Fitzpatrick:** I also think if there's a Go 2, we can't pull a Python 3 or a Perl 6 and kind of nuke the world and expect things to be okay.

**Erik St. Martin:** Oh, yeah...

**Brad Fitzpatrick:** I think any -- I mean, I haven't really thought about the details, but I think if in Go 2 any time you import something, you're allowed to import down... You're allowed to import and use a Go 1 package, but Go 1 packages can't import Go 2 packages, because semantics would be different. I think somehow we have to make the ecosystems coexist, to some degree.

**Erik St. Martin:** That's interesting. I think we passed up our second sponsor break, so let's go ahead and take that. Our second sponsor for today is DataDog.

**Break:** \[00:50:13.06\]

**Erik St. Martin:** Alright, so we are back, talking to Brad Fitzpatrick. We were just talking about a vision for Go 2. Did anybody wanna jump into any interesting projects and news they may have seen this past week? I've got a good one that I saw...

**Brian Ketelsen:** I have a good one too, so... Go ahead. You go first. Actually, I've got three good ones.

**Erik St. Martin:** You've got three good ones?

**Brian Ketelsen:** I've got three good ones, so you go first.

**Erik St. Martin:** \[unintelligible 00:51:46.11\] all the good ones?

**Brian Ketelsen:** Nope.

**Erik St. Martin:** So I hope I don't butcher his name, but I saw a project called [periph.io](https://periph.io/) by Marc-Antoine Ruel. It's an alternative to [Gobot](https://gobot.io/). It doesn't need any supporting libraries or CGO and things like that... I was chatting with him a little bit about it, and I guess it can do bit banging in the Mhz range. We actually have him scheduled to be on the show in like two weeks, so we'll get into more detail... But really awesome for doing GPIO and I2C and SPI... You've just got one-wire implemented into it too, so if you're messing around with BeagleBones or Raspberry Pi's and doing GPIO stuff, that's a really interesting project to check out.

**Brian Ketelsen:** Sweet... Making barbecues. \[laughter\]

**Erik St. Martin:** I know... It stinks, because I decided for the meat probes and stuff, like "Alright, I'm just gonna use just a straight ARM processor, just do embedded C", and then I saw that, and I'm like, "Aw... I kind of want a single board computer again now."

**Brian Ketelsen:** It's okay to change... It is absolutely okay.

**Erik St. Martin:** It is.

**Brian Ketelsen:** So I have a cool project and a shoutout that I wanna make... One of our listeners was listening to GoTime while hiking across the Alps, and sent us an email last week about his code generation tool, because he knows how much I like some code generation...

This code generation tool is at [github.com/dave/jennifer](https://github.com/dave/jennifer), and unfortunately radio is not good for pictures... However, we'll try to find a way to post the picture of Dave standing on top of some giant Swiss Alps mountain, flashing us the Peace sign because he was listening to GoTime. So a shoutout to you, Dave... That's awesome. I think GoTime is probably the perfect thing to do to get you through the humdrum of hiking through those boring Alps.

**Carlisia Pinto:** Does Dave have a last name?

**Brian Ketelsen:** I don't know Dave's last name. I would have to dig up my email to find out Dave's last name.

**Erik St. Martin:** What does "It is GoTime" announcement sound like after you've climbed a mountain?

**Brian Ketelsen:** \[laughs\] Heaven. It sounds like heaven. So that was one. Then the other awesome announcement is from [github.com/myitcv/react](https://github.com/myitcv/react), and that is React bindings for [GopherJS](https://github.com/gopherjs/gopherjs). Now it offers Preact support, which is awesome, because Preact is so much smaller than React... So I am really looking forward to getting some downtime and playing with GopherJS React bindings.

These are specifically cool (these are from Paul Jolly, by the way), because they do code generation for all the yucky stuff. So you just implement a couple interfaces and then type `go generate` and it generates all of the Go code, which then gets transpiled into GopherJS code, which talks to React or Preact.

**Erik St. Martin:** Brad, you're doing a bunch of GopherJS stuff too, right?

**Brad Fitzpatrick:** Not so much... Mathieu, who works on Camlistore, is starting to transition more of our stuff to GopherJS and to use React, and I kind of look at it and it makes kind of some sense, but I haven't used much of it myself.

**Erik St. Martin:** I think React has made me love doing web apps in Go. Before that, it was like a Rails thing, like "Oh, but doing the frontend's hard...", but React is just too easy to build the UI on top of a Go API.

**Carlisia Pinto:** So Dave's last name is Brophy.

**Brian Ketelsen:** Oh, thank you. Dave Brophy, you're absolutely right.

**Carlisia Pinto:** Don't thank me, thank [Florin Patan](https://twitter.com/dlsniper).

**Brian Ketelsen:** Oh, good job, Florin! That's why we have a pool of listeners in the GopherSlack, to help us out.

**Erik St. Martin:** Yeah, why are we the hosts? They seem to know more than we do.

**Brian Ketelsen:** I know. Kind of funny, isn't it?

**Carlisia Pinto:** They totally do. We just wing it. They do the work, we wing it.

**Erik St. Martin:** Is this you, Brian, who dropped in the "Is Go 2 actually happening?"

**Brian Ketelsen:** No, that was not me.

**Carlisia Pinto:** It was me.

**Brian Ketelsen:** Is that on Reddit?

**Carlisia Pinto:** Yeah. Reddit has a huge thread titled [Is Go 2 actually happening? If so, when will development start?](https://www.reddit.com/r/golang/comments/65rqi6/is_go_2_actually_happening_if_so_when_will/) It's very long.

**Erik St. Martin:** Interestingly, we just talked about that, and what it might need to include, and roughly the timeline... You were kind of saying the ten-year mark probably seems right, but it sounds like discussions would be had about what it needs to look like, and proposals and stuff like that would happen in the meantime.

**Brad Fitzpatrick:** I have a fun thought exercise for you guys... If you did a Go 2 and we remove stuff from the standard, what would remove or how much could you remove?

**Erik St. Martin:** Oh, interesting. I feel like there's probably a good amount that can be removed... Probably like 30% or so, based on the things I've written and how little I use components. That's also hard, because how many people use the components that I don't use...?

**Brad Fitzpatrick:** Do you need a bad SMTP client implementation?

**Brian Ketelsen:** Nope.

**Erik St. Martin:** Nope.

**Brad Fitzpatrick:** Do you need X509?

**Brian Ketelsen:** No... We don't need Archive, we don't need Compress, we don't need Container...

**Carlisia Pinto:** I've been X509, actually...

**Brian Ketelsen:** They don't need to be in standard library, though... They can still live somewhere else.

**Carlisia Pinto:** Yeah.

**Brian Ketelsen:** My threshold for standard library inclusion is probably more like "We could get rid of 80% of what's in here, not 30%."

**Brad Fitzpatrick:** So here's the even crazier question - could you get rid of HTTP?

**Brian Ketelsen:** Yes, absolutely.

**Brad Fitzpatrick:** But this is where people differ. A lot of people say that having built-in HTTP is interesting, but I think it's kind of a maintenance pain.

**Erik St. Martin:** Yeah, and that's where the dilemma comes in, right? Because being in the standard library has its advantage because, for example, I remember starting out doing Go - it was ridiculously easy to do HTTP stuff, because I didn't have to find a library for it, or write one, or which one of the 15 is the canonical one, that people use? But also, the more that's in the standard library, the more that has to meet the Go 1 guarantee, right? It's not able to be changed. So moving it out allows things to move at a quicker pace.

**Brad Fitzpatrick:** Yeah. The most interesting thing about having things in the standard library is you center the whole ecosystem around certain types. Everyone uses `time.time` and `time.duration`, or `context.now`, you know? Rather than saying, "Oh, which context package do you use?" or "Which time package do you use?"

This is why we even added DatabaseSQL originally to the standard library, because we were watching and there were like four or five databases that had totally different interfaces on GitHub, for MySQL versus SQLite, versus some Postgres... So we added it to Go 1 just to kind of unify the ecosystem to feel the same way. But I don't know... So what's the minimum standard library you could have?

**Carlisia Pinto:** I think in answering that question you also have to think about usability, and even this listener, Chris Benson, just mentioned about marketing, how HTTP in the standard library is good marketing for Go. And before even reading that, I was thinking exactly that. One of the biggest hallmarks for Go is "Look, this is such a good server-side language! It even has HTTP right in the standard library. It's so easy to boot up a server with Go!" So even though it might be a pain to maintain, you have to weigh that out with, okay, it's how much does it do for attracting people and for usability?

**Erik St. Martin:** Yeah, I think you you have the usability side of things, but I think that people agree on things... Even, say like the Ruby world - there's a lot of common packages people use, and those are just the things the community uses, or the agreed upon thing, and they're not part of the standard library. I think having some of these canonical \[unintelligible 01:00:17.00\] time and context, and things that are probably gonna be shared. Those types of things I think are needed, not necessarily what you do with them... Like say, for instance, HTTP. Anything that abstracts the network stack, syscalls on the operating system, and Matt Layer in the GoTime FM channel mentioned all of these, too.

Those things I think are needed, especially for adoption, because a lot of people - and you brought up the point too, Brad - aren't familiar with the Linux internals and how some of these signals are handled, and syscalls, and capabilities and things like that. Abstracting those away definitely helps adoption.

**Brian Ketelsen:** One of the things we have to keep in mind is way back in my earliest Java days, you had to pick the Java framework that you were going to use. Basically, you had to pick your standard library. Was it Apache Commons, was it Java X? And if we take too much out of Go's standard library, we're going to fragment the community by forcing groups of those other packages that work well together, and that might be strange.

**Erik St. Martin:** I think there's a lot of interesting tools coming out now though, to find packages and tooling, right? A good example, and we talk about it all the time, is -- it's escaping me... The plugin we use in Chrome...

**Brian Ketelsen:** [Sourcegraph](https://about.sourcegraph.com/)?

**Erik St. Martin:** Sourcegraph, yeah. That's a really interesting thing too, to find packages and see how they're used and see how many other people are using them. So is the problem really that they have to be in the standard library, or is it that we just need better ways to finding these things?

I think the difficulty comes in maintenance though too, right? If it's in the standard library - this is kind of playing devil's advocate back the other way - we can guarantee maintenance. I remember several MySQL drivers in the early days that just got abandoned, and you're like "Okay, so which one's popular now? Let's migrate."

**Carlisia Pinto:** I think maybe the issue of finding might not be the biggest issue. You might be able to find things, but then you have to decide which one to use, and what criteria do you even use to judge? I don't know... Just going back to the HTTP case, I'm picking on it - I can't count how many times I've seen people asking "What framework should I use?" and the veterans would say "Just use the standard library, it's that simple. Even though you have to do a little bit more work to get values or params, just use what's in the standard library", and people go "Yeah, okay... Even though there are so many frameworks for HTTP.

**Erik St. Martin:** So what is the Go team's stance on the promotion of other libraries outside of the standard library. For instance, as a thought experiment, if these things did not exist, people would probably look to the Go team to point them towards the things they should be using. What's the Go team's stance on things like that? If there was another HTTP library that was somehow better, would the Go team direct people towards that? Or do you try to stay out of other people's projects and the promotion of them?

**Brad Fitzpatrick:** I mean, we don't have a policy for or against it. Mostly we stay out of it because we don't really have the time to do unsolicited code reviews around the community. We used to promote - and we still promote - the [miekg DNS library](https://github.com/miekg/dns). Whenever someone has some kind of esoteric DNS needs, we say "here is your esoteric DNS package that does everything." So yeah, we definitely refer people when there's an answer.

**Erik St. Martin:** I think as long as there's guidance from the veterans towards things, that they should be used... I don't know how much -- I kind of wanna go through one night and just look through it and check off ones I don't think would be useful.

It'd be cool to do a survey through the community and see what everybody agrees on.

**Brad Fitzpatrick:** I don't know if you need a survey. You have the whole corpus of GitHub code, right? You can look at imports and see... We have the data in GoDoc.org, I just don't think we're using it well enough.

**Erik St. Martin:** That's true too, yeah.

**Brian Ketelsen:** I think we should just put all the packages on an island and let them fight to see who gets to stay. \[laughter\]

**Erik St. Martin:** Break a broomstick...

**Brian Ketelsen:** If you don't have the skills, you're not staying.

**Erik St. Martin:** It would be interesting to see how much of different packages are just not used at all, or used very little. That's hard to judge, too... When you think about trying to do the machine learning on that, how do you train it? Maybe some things like HTTP are just inherently used more based on the type of software we write.

**Brad Fitzpatrick:** I was horrified recently to find that a lot of people are using this package I wrote for -- I wrote a memcache client, and it was one of the first things I wrote in Go. It was kind of an exercise in writing a package, and I don't think I even ever used it myself, but I wrote a bunch of tests and I started a real memcache server as child\_process, and the tests, but it doesn't perform well... It doesn't pipeline requests on the connection, so if you have lots of activity going on, you'll get all these new TCP connections to your memcache servers, and stuff.

\[unintelligible 01:05:48.13\] Google Cloud customer recently, and then some other Google engineers started debugging this library and filing bugs against me that this code that I basically never used was inefficient, and I was like "Crap, now I have to go maintain this thing."

**Brian Ketelsen:** Delete it.

**Brad Fitzpatrick:** Well... But the, you know, our package management tools are kind of nonexistent or suck, and so then I would break lots of people, and I would cause even more problems.

**Brian Ketelsen:** Left-pad...

**Erik St. Martin:** So playing along the lines of the thought experiment, rather than a standard library, what part of the language itself, the syntax, would you do away with if you could start over in Go 2?

**Brad Fitzpatrick:** I recently proposed that we drop complex numbers.

**Erik St. Martin:** Interesting.

**Brad Fitzpatrick:** I mean, they're in there because I guess Ken really liked them, but if you survey all the code that exists anywhere - inside Google, on GitHub etc. - nobody uses them.

People, for fun, implement the mandelbrot set, or something, but other than that they don't have very many valid uses.

On the other hand, lots of things relatively use bigints, and those are kind of a pain to use because you can't use + and - and the built in operators; you have to call all these methods. So we're kind of in this weird position where complex numbers are first class in Go, but nobody uses them, but big integers used in Crypto and stuff are not easy to use.

There's another proposal from Rob to make bigints just be automatic. The int type, rather than being 32 bits on 32-bit machines and 64 bits on 64-bit machines, it's just... An int means a bigint, and you implement it as efficiently and possible, and you have the compiler prove things, so if the compiler can prove it's never bigger than 64 bit, then it's actually a 64-bit int, but if it's unprovable, then it's a bigint behind the scenes.

**Erik St. Martin:** I think my first thing that I would get rid of is `new`.

**Brian Ketelsen:** `new` vs. `make`?

**Erik St. Martin:** I mean, most people don't use it, so it usually only confuses newcomers, right? Most of us just declare a literal and get the pointer to it. And you find that a lot of people coming into the language, it looks like there's multiple ways of declaring stuff, right? You can do `var name =`, you know... Whatever the value is, add & or you can do the quick short declaration operator, or you can do `new`... I think there's too many ways, so it's hard -- we always want consistency in the code, right? So that's probably something I see from newcomers all the time, where it'll get mixed in this confusion, what they use when, and... Although I do find it kind of ugly when you see an empty struck literal being declared and getting a pointer to it... You're not initializing it with anything; why are you using the literal? How about you, Brian? Is there anything you'd get rid of, you'd X first thing?

**Brian Ketelsen:** `make`... \[laughter\]

**Erik St. Martin:** So then, what would your proposal be to declare things, like slices and arrays?

**Brian Ketelsen:** We already have lots of ways to declare memory... I don't think `make` adds anything to the bundle, and it just adds confusion. This is coming from someone who teaches Go. Why do we have to make slices and why do we have to make maps, when we declare everything else with var?

**Erik St. Martin:** But the interesting thing here though is that you can also declare capacity, right? And in some cases that matters.

**Brian Ketelsen:** I'm not arguing whether it's useful, I'm just arguing that I would change it somehow. I don't have any solutions.

**Brad Fitzpatrick:** Well, if Go 2 had _Generics_, you can imagine slices and maps being a type in a package in the standard library, and you can set bytes.new, or slice.new, or maps.new, or something like that.

**Erik St. Martin:** Yeah, that's true, too.

**Brian Ketelsen:** See?

**Erik St. Martin:** Yeah. How about you, Carlisia? What would you ax?

**Carlisia Pinto:** I can't think of anything, but I really like your idea Erik, to get rid of `new`. I'd vote for that.

**Erik St. Martin:** Yeah, and it's just rethinking the way things are declared. There's just a lot of ways till you run across many of them... A lot of people who have been around the language have their standard way of doing things in different use cases, but...

**Carlisia Pinto:** I have one. The naked return - is it called that?

**Brian Ketelsen:** Oh, yeah.

**Carlisia Pinto:** We need to get rid of that.

**Brian Ketelsen:** That's good.

**Erik St. Martin:** I used to use that all the time when I first started programming Go, and now I never use it.

**Brad Fitzpatrick:** Yeah, it's a little unfortunate that naked returns and named result parameters are coupled... But yeah, naked return could probably go. Or let's say you have a function that returns a time.time, an error, and you just wanna omit -- you only wanna return the error, you just want the zero value of everything else; right now you have to say "return time.time{},error". So there's various proposals that let you use an underscore or something there to also mean the zero value of any type, or you can also imagine something like return just the error, and omit all the other arguments.

**Erik St. Martin:** Oh yeah, that'd be interesting.

**Brian Ketelsen:** Yeah, I like that.

**Erik St. Martin:** That's one of the things I'm talking about with the declaration... I don't really care for the empty struct literal, like the time.time{}... It adds no context, because you're not initializing with anything. So that'd be really cool, to be able to use just the zero value in kind of a quicker, short form way. I don't know what that would look like, because I'm not a language designer, but that would be useful.

**Brad Fitzpatrick:** There's also some weird things in Go, like ranging over a string gives you the UTF-8 code points, rather than the bytes of the string, and it's the only thing in the language really that ever assumes that strings are UTF-8. So it's kind of this weird \[unintelligible 01:11:56.22\]

**Erik St. Martin:** Yeah, that's interesting. And I guess that that would become a problem too, because some of the libraries assume the output is a string, rather than a slice of bytes, so you're kind of stuck there.

**Brad Fitzpatrick:** I think that's one of the other big things that needs to be changed, the fact that slices of bytes and strings are so identical, but also so separate that you have to have the whole bytes package and the strings package that are duplicated, and switching between those worlds is so expensive... I don't know. It's really gross.

**Erik St. Martin:** That happens a lot because most packages end up assuming you want to deal with strings so your package takes in your string and then it does a bunch of stuff as a byte slice with it and then returns you a string but the problem is when we start glueing those libraries together we have it wrapped around of this conversion doing  from strings and byte slices.

**Brad Fitzpatrick:** Actually, I had a proposal way back to rechange the language in the whole standard library to assume there was a type that meant a readable view of memory. A string promises that nobody in the world can ever change it including you and a byte slice says you can change it and other people could be changing it but there is no type that basically accepts either a byte slice or a string. So I had a proposal back in the day to add a view of memory type. So you could write a function that accepted either a byte slice or a string and did some operation on it but you were not allowed to write to it and maybe somebody else owned it. So I prototyped the whole standard library with it and [Russ](https://twitter.com/_rsc) even implemented it for a while or he implemented enough of it to decide he didn't like it. I think the docs are still online at x.godoc.appspot.com. It's kind of fun to look at what the standard library would look like if the type existed.

**Erik St. Martin:** That's interesting. So basically it could  accept a string or a slice of bytes. You just wouldn't be able to write to it you could only read.

**Brad Fitzpatrick:** Yeah, I had this [mem](http://expgodoc.appspot.com/pkg/exp/mem/) package and there was a `mem.rw` type and a `mem.ro` type and so the read only memory type or the writable memory type.

**Erik St. Martin:** I'd be interested to actually see that proposal.

**Brad Fitzpatrick:** I just pasted a link in the Slack channel to the docs for it.

**Erik St. Martin:** Alright, everybody wanna do _Free Software Friday_?

**Erik St. Martin:** I am gonna take silence as a _Yes_. \[laughter\]

**Carlisia Pinto:** Yep, let's do it.

**Brian Ketelsen:** Sorry I was muted because of all the various saws in my house right now.

**Erik St. Martin:** Oh your construction?

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** Every week we'd like to give a shoutout to projects or maintainers of open source software to show the love. So this week Carlisia do you want to kick it off?

**Carlisia Pinto:** Yeah, so this week I wanna give a shoutout to the [Changelog](https://github.com/thechangelog/changelog.com) website. It's a piece of art and especially I'd want to give a shoutout to Jerod because he is the main lead on that project and I especially love the _Search_ feature. It makes me so happy. If you are a listener and you are interested in any subject related to Go you can go to the Changelog website - the GoTime website and do a _Search_ for that and there might be one or more episodes that talk about that. It's fantastic. You may find a reference to it in the shownotes or you may find episodes that talk about that topic.

**Brian Ketelsen:** Nice!

**Erik St. Martin:** How about you Brian?

**Brian Ketelsen:** Well I have done this before but I am gonna do it again because it just makes me happy. [Buffalo](http://gobuffalo.io/docs/getting-started) for web development. It just cannot knock out a website any faster in Go than you can with Buffalo and somebody asked me in the Buffalo channel on Slack today whether anybody had any production use and I thought Gosh I've had that GopherCon website in production since the beginning of the year, the [GopherAcademy](https://www.gopheracademy.com/) website, the GopherTrain website... I probably got 5 or 6 Buffalo websites in production and they are all just humming along so beautifully.

**Erik St. Martin:** It seems like the GopherCon and GopherAcademy website are staging environments for any cool project written in Go. We had [Caddy](https://caddyserver.com/) running way early and we shouldn't have had it in production.. and ah let's launch the GopherCon website with it...

**Brian Ketelsen:** Why not...I have a good eye for picking these things I am telling you.

**Erik St. Martin:** We had [Hugo](https://gohugo.io/) among the CMS stuff and \[unintelligible 01:16:50\]. How about you Brad did you have anybody you'd wanna give a shoutout to?

**Brad Fitzpatrick:** No, no I am busy reviewing Carlisias code review... \[laughter\]

**Brian Ketelsen:** Ship it! Ship it?

**Carlisia Pinto:** It worked! Nice, thank you!

**Brad Fitzpatrick:** Yeah, no problem.

**Erik St. Martin:** I did not have one this week because I hadn't been doing a whole lot of new stuff. I just give a shoutout to all the people who are contributing libaries for sensors and things like that for Arduino because on last minute notice Brian and I were able to throw together something very quickly to stream barbecue data for when we do our pig.

**Brian Ketelsen:** It was so awesome. It was epic. Best Easter ever.

**Erik St. Martin:** I love some of the conversions though I think that need a CRC between the chips because I don't think like 4 billion degrees is a thing. \[laughter\]

**Brian Ketelsen:** That's how you get the caramelization on the skin.

**Erik St. Martin:** Right. It's like alternate simmering right there.

**Carlisia Pinto:** We were so fast this time and we are not gonna talk about the Docker name change?

**Brian Ketelsen:** No. We are not talking about the Docker name change because we don't want Brian's blood pressure to go any higher than it already is.

**Carlisia Pinto:** Let it go...

**Erik St. Martin:** \[laughter\]

**Carlisia Pinto:** Alright then.

**Erik St. Martin:** Alright so with that a big thank you to everybody on the show especially to Brad for coming on. Huge shoutout to our sponsors for today [Toptal](https://www.toptal.com/) and [Datadog](https://www.datadoghq.com/). Definitely share the show with fellow Go programmers, coworkers, friends. You can subscribe by going to [GoTime.fm](http://gotime.fm) we are on [Twitter](https://twitter.com/GoTimeFM). If you have suggestions for topics, questions for guests or you wanna be on the show hit us up on [github.com/GoTimeFM/ping](https://github.com/GoTimeFM/ping).. And with that, goodbye everybody and we'll see you next week!

**Brian Ketelsen:** Thank you Brad!

**Brad Fitzpatrick:** Yep! Yep!

**Carlisia Pinto:** Goodbye!


























