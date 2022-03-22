**Mat Ryer:** Hello, and welcome to Grafana's Big Tent, the podcast all about the people, community, tech and tools around observability. I'm Mat Ryer, engineering director at Grafana, and I'm joined by - it's only VP of product at Grafana Labs himself, Prometheus maintainer, and you wrote Cortex and Loki too, originally, didn't you, Tom?

**Tom Wilkie:** Well, not all of it. I had some help, but yeah...

**Mat Ryer:** Oh, that's nice. Welcome to the podcast.

**Tom Wilkie:** Thank you very much.

**Mat Ryer:** We're joined by another Matt - Matt Toback, VP of culture at Grafana Labs, and a long-time Grafanista. How long have you been at Grafana, Matt?

**Matt Toback:** Coming up on seven years.

**Mat Ryer:** Wow...!

**Matt Toback:** And hi, Mat.

**Mat Ryer:** Welcome.

**Matt Toback:** Hi, Tom.

**Tom Wilkie:** Hi, Matt.

**Mat Ryer:** So somebody at some point got together and decided the world needs another podcast, right? There just aren't enough podcasts. Why are we gonna do a podcast? Why is Grafana doing a podcast?

**Matt Toback:** That's a good question, yeah... Well, I took a look at my workload and thought, "Well, what I really need is another couple of hours a week where I have to talk to you two." \[laughter\]

**Mat Ryer:** Well, Matt, didn't you do an internal podcast? A sort of secret, internal one...

**Matt Toback:** Yes, I did.

**Mat Ryer:** So how did that start?

**Matt Toback:** That's right, I guess that was kind of the beginning of this. We started growing really fast, and there was people and stories - and I think I like people over tech - that weren't really getting shared... And it was just long-form conversations with people at the company. People started listening to it and liking it, and I think Tom finally listened to it, and we were like, "Oh, maybe these kinds of stories exist well outside of the walls of Grafana", and I think we just wanted to share it.

**Tom Wilkie:** Yeah, one of the things we do here is try and be as transparent as possible. We try and expose the inner workings at Grafana Labs... And I thought your podcast was amazing, Mat, and I thought we should just literally publish them as they stand... And that, I think, was the genesis of this.

**Matt Toback:** I think also with the observability thing we get to -- I don't know, everyone's all the different tools that are out there, and Grafana gets to touch a lot of things... But everyone's just trying to solve these problems kind of independently, or themselves, and they're using pieces of it... Why do you have a wrench?

**Tom Wilkie:** I don't know... I always have something on my desk to keep my hands busy.

**Matt Toback:** Is that one of the tools that we talk about when we talk about observability?

**Tom Wilkie:** No, this is one of the people we're gonna talk about.

**Mat Ryer:** Did you use that wrench when you wrote Loki, Tom?

**Tom Wilkie:** This -- I mean, why do I actually have a wrench? I'm carbonating some beer in the other room, and I need to tighten up the flanges with my wrench. Is that even a thing...?

**Mat Ryer:** So it's interesting you mentioned the stories outside of Grafana then... This podcast isn't just about Grafana, is it? We don't want it to just be a Grafana podcast.

**Tom Wilkie:** No. One of the things I'm really excited about is being able to invite members from the community, members from competing tools... And I think that's why we wanted to call it The Big Tent Podcast, because at Grafana Labs it's more than just about the technology we build. Grafana is one of the few pieces of software in the world that connects and touches hundreds of different projects, and I wanna use their platform we've got as a way of shining a bit of a spotlight on some of those projects.

**Matt Toback:** I also wanna go outside of just the vendor or the project side, because the people that are actually using all this stuff - their story is very different than the story that we tell. We're super-inclusive, and it surprises when someone's using some combination of things in a completely different way than I expected, and doing something really cool with it. So I want them to have a voice here at some point, just saying like "Oh, thank you, project, and thank you, vendor, and thank you, tool, but this is actually how I do it", and I want them to show off... Because this is stuff that people legitimately spend their own time to try and solve a problem with, and that's cool to me.

**Mat Ryer:** \[00:04:09.29\] So what is the big tent then? Maybe we should explore that. What do we mean at Grafana when we talk about the big tent?

**Tom Wilkie:** What is the big tent? It's a great question, and it's kind of somewhat ill-defined, almost intentionally. We take a bit of a different approach with the Grafana project, and with other projects inside the company, where we don't just naturally assume everything we touch is golden. Not necessarily every solution to a problem should come from Grafana Labs. The approach we've got about being a little bit more inclusive to new ideas, and being able to bring together different technologies and systems and communities under one roof, and that one roof is normally Grafana; the ability to visualize data from multiple backends in one place.

But I think it's more than that, because we're trying to apply the same technique to all of our projects, and basically every interaction we have. When we go and talk to our users, we don't necessarily tell them "Well, you've gotta change everything you're doing." We try and work in a much more inclusive way and accommodate their current practices inside of our technologies and projects.

**Matt Toback:** I've started to think about big tent also sort of on a timeline that it feels like it creates something that's actually resilient to change. Even Grafana, in internet years, has been around for seven years; no, eight years now. That's absurd. But then also, Prometheus and the whole cloud-native swing dramatically changed the way that I think a lot of people are doing things. And there's gonna be one more. I think that if you get too firmly planted in "This is the way to do things", you will be the dinosaur of the last wave. And I think that for me, big tent is about saying "Okay, this other stuff still exists, but also there's new stuff coming. Don't be too closed off to what the kids are doing."

**Mat Ryer:** So what can people expect from Grafana's Big Tent Podcast?

**Tom Wilkie:** First off, this is not just gonna be about the things we're working on at Grafana Labs. It's not gonna be releases of various projects, and things like that. It's gonna be interviews with people in the industry, in the communities, it's gonna be discussions broader than just technology... I'm really looking forward to the episode on remote work, for instance. Grafana Labs has been a remote-first company its entire existence. It's not something we've really talked about a huge amount... And some of the things we've learned doing that, and some of the techniques we use, and some of the ways we organize ourselves - I think they're really interesting. So it's gonna be broader than just "Look at this cool monitoring project."

**Matt Toback:** \[00:07:50.08\] I like the idea also of talking about open source, and open source as a company, and the question that we still get, even as we've grown, like "How do you make money? Why is open source part of the strategy?" I think that's great, because I think we can talk about it both in tech, but also saying why we think open source is a means to actually be different, and why it's closer to where people actually are right now. So I'm excited about that; I think that'll be cool. The remote work one - I'm excited about that, too.

**Mat Ryer:** Yeah, I'm quite interested -- someone had an idea of doing one called "Not just noobs", where it talks about mistakes that we make still today as quite senior (some of us more senior than others) engineers. We still make mistakes, and sometimes they're quite silly mistakes as well... And I think that's quite nice, to show people that that's sort of normal.

I remember when I first started, every time I made a mistake, I would think that I failed something, and I would kind of feel shame from that. Over the years, you sort of realize "Yeah, that's just normal." It's more about how you react to those mistakes, and how you adapt and fix and learn from them. So I'm excited about that.

**Tom Wilkie:** Are we gonna invite people who wanna be on the podcast in this opening episode, do you reckon?

**Mat Ryer:** Yeah, good idea.

**Matt Toback:** We put a list out there of people that we want. \[unintelligible 00:09:15.21\] I would like you to be on this pod."

**Mat Ryer:** Ah, we can just do a wishlist. David Hasselhoff. I used to love Knight Rider.

**Matt Toback:** Are we only doing Davids?

**Mat Ryer:** Yeah, we'll start with Davids, and then next season... Actually, this is quite a funny story; this is true. There is inside Grafana's internal Slack, company Slack, there is a Daves channel, that is all the Daves --

**Matt Toback:** I thought it got shut down.

**Mat Ryer:** Has it? Have we defeated the Daves? \[laughter\] Did it get shut down?

**Matt Toback:** Is that gone?

**Mat Ryer:** Apparently, you weren't allowed in it unless you were called Dave. But if you were called Dave or any variant of that name, you could join this secret channel.

**Tom Wilkie:** Or you were admin on Slack.

**Mat Ryer:** And apparently, when it's won -- this is a rule of Dave's club; I've infiltrated it and found this out... It's one Dave's birthday, it's all Daves' birthday, and they all celebrate whenever it's a Dave's birthday.

**Matt Toback:** Mat, do you think that we could have our own channel?

**Mat Ryer:** Oh, we could do it. How many Matts do we have?

**Matt Toback:** Actually, I would like to do a channel with just Matts with two t's.

**Mat Ryer:** Oh, so I probably wouldn't even get into that one then, would I?

**Tom Wilkie:** The Daves channel still exists, and unfortunately, the latest message in there was from \[unintelligible 00:10:30.03\] \[laughter\]

**Mat Ryer:** \[00:10:33.23\] Saying "Okay, I'll leave."

**Tom Wilkie:** As far as I can tell, he's the only non-Dave in there though...

**Mat Ryer:** This could be a regular segment of the podcast - we just go around the company Slack and read out things that people have said... \[laughter\] To be fair though, honestly, of all the places I've worked -- I mean, the company culture I think is a great culture; it's so nice, and everyone I speak to is welcoming, and nice, and they're funny, and charming people.. And you know, you do find some gems in Slack. There's some great channels, non-work channels, that you can hang out... And some of the content is just great. To be fair, maybe we could actually have a little regular segment where we --

**Matt Toback:** Could we call the segment Safe Space, where we take things that people wrote, thinking it was in a safe space, and we put it out on the internet?

**Tom Wilkie:** Yeah. Personal stories that they didn't want to go out very far, yeah.

**Matt Toback:** Have you joined Prometheus, But For Memes? That's a good one.

**Tom Wilkie:** I refuse to join that channel. I think people need a place to vent without me present.

**Matt Toback:** Yeah, yeah.

**Mat Ryer:** I appreciate that. There's a lot about you in that channel. And as we said, we are excited to speak to you as well. So if you've got an interesting story, or you wanna get involved in Grafana's Big Tent Podcast, please get in touch. Tom, how should they get in touch?

**Tom Wilkie:** I think you have to do a stamped, addressed envelope to BBC Radio -- no, wait. That really dates me, doesn't it?

**Mat Ryer:** Alive and kicking...

**Tom Wilkie:** So... Bigtent @ grafana.com, and we'll get in touch from there.

**Mat Ryer:** Yeah, great stuff. Thank you very much, it's exciting. I'm looking forward to this. How often are we gonna do an episode, by the way? Do we know?

**Tom Wilkie:** We're gonna try and (I think) go for weekly, aren't we?

**Mat Ryer:** It's a lot.

**Matt Toback:** Two weeks.

**Tom Wilkie:** Every two weeks. \[laughter\]

**Mat Ryer:** Yeah.

**Tom Wilkie:** Bi-weekly. Is that two a week, or every two weeks?

**Matt Toback:** Both.

**Tom Wilkie:** We could do it fortnightly, and then Americans won't understand it.

**Mat Ryer:** \[laughs\] So every two weeks we're gonna get a podcast out, so please like and subscribe. That's what the kids say. So do that, please...

**Matt Toback:** Like and subscribe, like and subscribe...

**Tom Wilkie:** I'm just frantically registering that email handle.

**Matt Toback:** I was gonna ask...

**Mat Ryer:** Well, in case someone else gets there first...

**Matt Toback:** We could make it before they hear it, right?

**Tom Wilkie:** Yeah, I'm just doing it now.

**Mat Ryer:** Yeah. This isn't live, is it? So it's probably quite safe. Okay, thank you so much for listening. Tom Wilkie, Matt Toback, thank you very much. It's been a pleasure, as always.

**Tom Wilkie:** Thank you, Mat, thank you, Matt.

**Matt Toback:** Thank you, Mat.

**Mat Ryer:** And we'll see you next time on Grafana's Big Tent.

Break: \[00:13:19.10\] to \[00:13:39.08\]
