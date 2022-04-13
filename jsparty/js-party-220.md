**Jerod Santo:** Hey-hey-hey, it is JS Party time, and I am your internet friend, Jerod. I have with me one of my good friends, it's Kball. What's up, man?

**Kevin Ball:** Hello! Good to be back on, and I'm excited for this game we're gonna play.

**Jerod Santo:** I'm excited as well. Now, let me as you a question, Kball - do you believe in deja-vu?

**Kevin Ball:** I think it's a human phenomenon. We notice things, it feels like "Oh, I've seen this before", but...

**Jerod Santo:** What it actually is... Yeah.

**Kevin Ball:** It's part of our brain, right?

**Jerod Santo:** That's true.

**Kevin Ball:** It's in there.

**Jerod Santo:** It's in there. I ask because I'm having a little bit of deja-vu right now. Let me tell you... A year ago, right around April Fool's, we did a JS Party episode, just myself and Nick. And I invented this silly game called HeadLies, where I tested Nick's ability to detect what is truth and what is falsehood in headlines around the web. And here we are today, it's just you and I, it's April Fool's tomorrow as we record, last week as we ship, and we're gonna play that same game.

So in honor of me giving Nick a gift that day, I thought I would give you the same gift. This is for you. This is for you, Kball. Just me and you.

**Kevin Ball:** Okay, I'll take it.

**Jerod Santo:** Oh, you couldn't hear that?

**Kevin Ball:** No. Not in the slightest.

**Jerod Santo:** Son of a gun...

**Kevin Ball:** \[laughs\] I saw you doing a little dance, and I'm like "Okay..."

**Jerod Santo:** I did the same thing that everybody does when they're newbs. I didn't go live. Let's start again, and I will play it back so that you can feel it.

**Kevin Ball:** Okay. And then I've gotta know how Nick actually did, so that I know where is the bar.

**Jingle:** \[03:20\] to \[03:31\]

**Jerod Santo:** Now do you get it? \[laughs\] Now he's into it...

**Kevin Ball:** I dig it, yeah. \[laughs\]

**Jerod Santo:** You'll notice I --

**Kevin Ball:** It worked a little better when it wasn't just you bobbing over there and me just hearing silence, right?

**Jerod Santo:** You're like, "Why is he bobbing his head?" You'll notice I used the Dr. Evil version, not the official Will Smith version. Due to recent events I'm way more on Dr. Evil's side this week, than \[unintelligible 00:03:48.29\]

**Kevin Ball:** And you weren't before?

**Jerod Santo:** I've always been a Dr. Evil fan... So yeah, absolutely. Well, it is just the two of us, but before we get into my silly game - and I'll tell you... I'm pretty sure - I didn't go back and listen - Nick lost. I can't remember by how much, but I remember rubbing it in quite a bit... So you can expect that in your future as well, unless you are a better lie detector than Nick Nisi.

**Kevin Ball:** \[04:16\] Having planned the game, you may have your finger on the scale a little bit there... You know, favors the house...

**Jerod Santo:** Okay, we'll see. The house does usually win. We'll see what happens. Before we get into the headlies, let's talk about some headlines, just so folks have some actionable, informational takeaways from this episode... And the first one we want to discuss is - brand new, finally released, it was in release candidate for a while, but out there in the while just as of a couple days ago, React 18.

**Kevin Ball:** Yes!

**Jerod Santo:** Now, I know you guys use React at Humu, right?

**Kevin Ball:** We do, yeah. We use React. Actually, my manager, our head of engineering used to lead the React team. So we have kind of the inside track to what are the best things to do do with React. But yeah, this is an interesting release, because I feel like on the one hand, it contains stuff that they've been talking about for almost five years now. A long time they've been talking about concurrent rendering, and how do we do this, and Suspense, and yadda-yadda-yadda...

**Jerod Santo:** Right.

**Kevin Ball:** And on the other hand, I was reading through the release and they were like "Yeah, this probably won't affect you right away. Frameworks are gonna pick it up and it'll happen behind the scenes. But the short-term impact - you'll probably stay with what you've been doing."

**Jerod Santo:** Right. So where the rubber hits the road, in a production app, what version of React are you all on?

**Kevin Ball:** We're currently on the latest 16. We were talking about updating to 17... We're still EOL-ing IE11, so we can't get to 18 quite yet, because it doesn't support it. We've been talking about -- they say "We'll do best-guess effort to keep IE11 working, but we're not gonna officially support it", so we're kind of asking ourselves how lucky do we feel... But I think we're very close on the last few big enterprise customers that are still using IE, getting them off of that... So I think we'll probably go to 17 until we get them off, and then move up to 18.

**Jerod Santo:** Very good. So for those who are not in the know and don't have one of the old core team members heading up their company, haven't been paying attention to React 18... So from the release notes, the big headline features - out-of-the-box improvements like automatic batching, they have new APIs like starTransition, streaming, server-side rendering, with support for Suspense, and then the concurrent stuff, which like you said, has been in the works for a very long time, and is really like a fundamental change to the way React works under the hood, and one that they want you to know about.

So it's kind of an interesting thing, where it's like, it's under the hood, you're gonna benefit from it, but it's not one of these things that's like black box, don't worry about it. It's kind of like, "Well, you should kind of understand how React is working in this new way." So I don't know if it's a leaky abstraction, but it's like a purposefully leaky abstraction. Do you think that's fair to say?

**Kevin Ball:** Yeah, I think so. Because I think - if I'm reading what they're saying right, they're saying "This is complicated, it's something that you probably don't want to be managing as an application developer, but it's something that is going to subtly change the way things behave, and that frameworks and libraries and things are going to increasingly take advantage of." So you should understand what it's doing behind the scenes, so if you run into one of those subtle changes, or you run into a bug due to one of those subtle changes, you can debug it.

**Jerod Santo:** Right. So I'm just curious, when you said you have EOL IE11 - do you have a countdown timer to the day? When is the day that you can finally drop that sucker?

**Kevin Ball:** Well, so I think Microsoft has said June 15, 2020. That's what Nick just shared again in the chat.

**Jerod Santo:** \[07:57\] 2020? That's in the past.

**Kevin Ball:** Sorry, 2022.

**Jerod Santo:** Okay.

**Kevin Ball:** I misspoke. June 15th, 2022.

**Jerod Santo:** So we're like a couple months away from that.

**Kevin Ball:** Now, of course, when you have Fortune 500 enterprises paying you millions of dollars, and they say --

**Jerod Santo:** They're not gonna drop it on June 15th, 2022.

**Kevin Ball:** "We still want it", then you say "Okay, well how do we move you along?" So I actually don't know off the top of my head what our internal date is. As much as we're trying to use Microsoft's EOL as a \[unintelligible 00:08:25.17\] to get everybody off of it, the reality is customers do in some senses have the final say... But it should be close to that timeframe.

**Jerod Santo:** Alright... Well, looking forward to close to June. I'm sure there's plenty of people out there waiting for this one to officially drop, so they can eventually drop. Anything else to say about React 18 before we go to the next headline?

**Kevin Ball:** No, I think that's it. I mean, I think the automatic batching will probably help a number of places.

**Jerod Santo:** That's a performance concern mostly, right?

**Kevin Ball:** Yup. And actually, a lot of concurrent... Like, it's not really about --

**Jerod Santo:** New features.

**Kevin Ball:** ...functionality, new features... It's about smoother abilities to, for example, make big updates without interrupting your main thread. So as people move to concurrent rendering, you're less likely to have the situation where like I'm typing and there's a big change, and my input changes. So type-ahead search, for example. If you have type-ahead search that's rendering a whole bunch of new results, and you do that... If you're not careful today, you can do that and your type-ahead freezes periodically, as it re-renders those results.

**Jerod Santo:** Yeah.

**Kevin Ball:** Concurrent should make it really easy to not have that be a problem. So I think it's a really useful tool for making things better without changing any sort of fundamental model of how you're approaching things.

**Jerod Santo:** So in the chat room Ogabe has a question regarding IE11. Maybe you can \[unintelligible 00:09:47.19\] this one. I don't know exactly the answer. He says "When we can drop that, we can basically drop the old Safari, Firefox and Chrome versions too, which means WebPack won't be necessary anymore?"

**Kevin Ball:** Ooh...

**Jerod Santo:** What do you think about that? That's probably an "It depends."

**Kevin Ball:** Yeah. It's very much an "It depends." So there's a couple pieces to that question. So there's "Can we natively use ES modules and not have to bundle things at all?"

**Jerod Santo:** Right.

**Kevin Ball:** Generally, from what I've gathered, folks are still kind of recommending bundling for maximum performance in a lot of situations, even if behind the scenes you're loading for example your sub-bundles with ES modules. Having everything split out entirely I think is not still the happy path there.

**Jerod Santo:** Which was kind of the promise of H2, right? It was like we wouldn't have to do that for peak performance anymore, but it just seemed like it never really came to fruition.

**Kevin Ball:** Yeah, and it's mostly there... If you're not doing too many modules, you're doing things pretty simple, you could probably get away with it. If generally you have a good performance budget and you're not shipping that much JavaScript, you could probably get away with it. I suspect people are still gonna want to be bundling for peak performance in production for quite a while.

**Jerod Santo:** Especially if they're already using TypeScript or other tools. If they already have that build step, then it's like "Well, WebPack is giving me this, but also, it's giving me that, and this other thing that I like to use as well."

**Kevin Ball:** The other thing you can do - and something that we shifted to - is use Vite, which in development uses straight ES modules, and is way faster. The dynamic update and all of that is so much faster than with WebPack. And then it bundles things with Rollup, and you can use the same config to do your local dev using ES modules served straight, super lightning fast, then bundle for production using Rollup from the same config, and ship everything out.

We shifted to that three months ago, six months ago, and it has massively improved our developer experience over WebPack. So if you have a very large application and your local WebPack recompile times and things like that are annoying and painful, definitely look at migrating to Vite. It was not a drop in migration for us. Now, we had a pretty custom config... If you're using a WebPack config pretty much directly from Create React App, or something like that - there's probably an easy migration script. But if you have a pretty custom WebPack config, then yeah, you may have to do some work. But it's been a massive developer experience improvement to ship to Vite. Vite, pronounced Vite - it's from French, and I believe it means fast... And it is.

**Jerod Santo:** \[12:29\] Yes. Vite rhymes with suite. That's my way of remembering it. Nick Nisi says Vite rhymes with feet. I'm like, "That's just gross, dude." Why not go suite? \[unintelligible 00:12:37.26\] Well, speaking to the older versions, I think Ogabe's point that we both missed on was that, well, those were auto-updating. IE11 is kind of the last holdout, and with official ES module support, it seems like IE11 is the last big red on Can I Use that people are still probably using. I don't think anyone's really stuck on an old Safari, unless they have like an older iPad that just won't upgrade. I know one of my sons has an old iPad that can't get iOS 14, I think, and he's left in the dark for many things in the modern web and native world.

So heading to our next headline - and this is another release. It's not quite here yet, I guess, when you're listening to this. If you're listening live, it's not live. If you're listening on the feed, then it has gone live, and that's Redwood.js. It goes 1.0 on April 4th.

**Kevin Ball:** Yes!

**Jerod Santo:** So you've had your eye on this, Kball, because you were talking about bringing some Redwood folks back on...

**Kevin Ball:** I have.

**Jerod Santo:** I actually haven't heard much about Redwood since our initial show. We had Tom Preston-Werner on the show back when he first announced Redwood. I think that was episode 119, and this is episode 220. So a hundred episodes ago. Have you heard a lot about it in the interim, or is it just kind of like poking its head back up again?

**Kevin Ball:** I have not. So it doesn't seem to have gotten nearly the level of buzz that for example Remix has. And I think part of the reason is it's a little bit further of a step from people are already doing. Let's maybe do a quick refresh on what Redwood is. Redwood is a React framework that is kind of trying to do a Ruby on Rails for frontend type of thing. So leaning into things like generators, convention over configuration, trying to do the whole stack for you and make it easy.

They have some abstractions that are interesting and possibly unique - or some of them unique, some of them not - that we could go into, but that's kind of the idea. I think TPW was big on Rails earlier, and he wanted to recreate that out-of-the-box, things just work for you, it-feels-simple experience, that to be honest we don't have in very many places in the frontend world.

And yeah, I don't think it's gotten -- it is a little bit bigger of a step from where people are, because it is a different take, and I haven't heard nearly as much buzz in the web community about it. That said, part of their announcement is they're talking about all the people using it, the startups that are built on Redwood and have raised money based on it, things like that... So it's clearly getting used, but I haven't heard as much. But I'm hoping actually that -- so I think it's really cool. I've missed in the frontend world that just out-of-the-box, it-just-works experience that I remember from the early Ruby on Rails days. That was magical, when I first started doing that on the server... And if they get it right, it will feel magical to have that again on the frontend. I don't know if they've nailed it or not, but I'm hopeful, and I hope this announcement gets them some deserved attention and gets people using it.

So I just listened to the Remix episode; I wasn't on the episode. It sounds like Remix - they're calling it "center stack", which is a way of saying "We know we thought of it as a frontend framework, but we don't really have all that much backend stuff yet." That's kind of the way I was reading that \[unintelligible 00:16:02.09\] It seems like Tom and the gang, they're more like a full-stack, frontend-first, but full-stack; it's a hybridy thing, kind of like Next, but more full-stack even than Next is. Am I reading the room right?

**Kevin Ball:** \[16:19\] Yeah. So my take on Remix - and I was digging into this; I'm actually working on a blog post based off of that episode, because I think it's a really interesting take on things. So I think Remix is really trying to solve the server-side rendering/client-side rendering uncanny valley when I ship over stuff, but then I have to hydrate it... That whole space.

**Jerod Santo:** Right.

**Kevin Ball:** That's what they've been focused on, and they do some pretty interesting things in terms of their routing to set themselves up for that, and in terms of how when you navigate, what actually gets rendered. Everything is actually rendered on a server, but it feels like it's client-side, and it's only doing the minimum possible set of things.

So that's where their focus is... But they don't have, as far as I could tell, any abstractions at all around how you're storing your data... They have a little bit about how you're loading it, but really only how do you tell the router what needs to be loaded, so that it's only doing the minimum possible thing and it's loading things in parallel. Whereas Redwood has a whole kind of abstraction built around "How do you package up components with the data they need?" Actually, that part is pretty similar to what Remix is doing in terms of specifying the loaders, but then they have a bunch of opinions about "Okay, you're gonna do GraphQL, and we're gonna provide you the things that you need to do that. And we're gonna bundle a GraphQL server on the server-side, so that it's easy for you to set things up there. And we're gonna make it really easy to work with Prisma, and have that as an opinion."

So it's kind of trying to do the whole thing of -- like, what you might do with a frontend and a Node server, and doing all of those different things. Make that super-easy, front to back. And kind of let you -- I'm not 100% sure, but I think they have either client or server-side rendering, and they sort of seamlessly do that depending on what state you're in. So yeah, I think they're trying to be full-stack in that sense, whereas Remix is trying to say if you had a separated frontend and backend before, but your frontend was either server-side rendered or client-side rendered, they're trying to bridge those two together and make it feel more client-side while actually doing things on the server.

**Jerod Santo:** Yeah. I think Remix is in an interesting marketing position, because on one side they're like "We're replacing React Router, but we're not a React framework." They're trying not to get pigeon-holed too hard. "We're frontend, but no - we're center-stacked." And I think Kent's very wise in the way that he's trying to position this for longevity and success. It's interesting to see how people talk about what they're working on, and don't wanna get put into a corner, right?

**Kevin Ball:** Totally.

**Jerod Santo:** And be thought of as a React framework. Because I don't like React. Not me, Jerod, but anybody who doesn't like React might just dismiss Remix altogether. And they wanna avoid that.

**Kevin Ball:** I feel like Remix has honestly taken a relatively small, but powerful set of concepts and implemented them really well. And it'll be interesting to see then based on that do they keep building on that same set of abstractions? They're talking about having these bundles that you can pull in, but that might not be owned by Remix... It'll be really interesting, as you say, to see their strategy as they evolve. But they feel much more like -- they have three core things that they've gone really deep on and made work really well... Whereas Redwood is trying to do a whole bunch of stuff for you, and make it feel easy to do those things.

**Jerod Santo:** Right. On the other side, maybe Redwood might get pigeon-holed as Rails for JavaScript.

**Kevin Ball:** Might.

**Jerod Santo:** But maybe that's a good thing. \[laughs\]

**Kevin Ball:** Rails is still extremely popular and extremely powerful... I think if they manage to successfully pull of Rails for JavaScript, they've got a winner.

**Jerod Santo:** So when can we expect this blog post to go live? What's the status? ETA me.

**Kevin Ball:** So I was hoping to get it this week or next, but we just did an engineering reorg and I've got a whole bunch of stuff that's kept me super-busy.

**Jerod Santo:** Gotcha.

**Kevin Ball:** I'll try to get a draft for you... I have some time tomorrow to work on it, so I'll try to get a draft for you by sometime next week.

**Jerod Santo:** Okay. So maybe by the time you're listening to this, Kball's anticipated blog post might be out there. We're not gonna make any promises here, but...

**Kevin Ball:** No promises.

**Jerod Santo:** But Redwood.js 1.0 should be out there April 4th. They have a big launch week, we'll link to that... And yeah, expect -- not gonna promise, but expect more Redwood content on JS Party here in the coming weeks.

**Break**: \[20:45\]

**Jerod Santo:** Let's move to our last headline... And this one seems very interesting. MDN Plus. "Make MDN your own." So that's Mozilla Developer Network; or at least that's what it used to be called. Is that still what it's called? I think so. And they say in this announcement that it's one of the most trusted resources for information about web standards, code samples, tools and everything you need as a developer to create websites.

I still remember when there was this big push to replace W3Schools with MDN, and I think we've successfuly done that. I find MDN at the top of most searches that I used to find W3Schools. I'm sure they still rank highly for a few things. But they say in "In 2015 we explored how we could expand beyond documentation to provide a structured learning experience. Our first foray was the learning area", which I've never heard of myself, "with the goal of providing a useful addition to the regular MDN reference and guide material. In 2020 we added the first frontend developer learning pathway", which I also was not aware of. "We saw a lot of interest and engagement from users, and the learning area contributed about 10% of MDN's monthly web traffic", which is significant.

They go on to say "These two initiatives were the start of our exploration into how we could offer more learning resources to the community. Today we are launching MDN Plus", which, you know, MDN++ would have been a better name, but we've already used that one...

**Kevin Ball:** \[laughs\]

**Jerod Santo:** "Our first step to providing a personalized and more powerful experience." So basically, they have new features and they have subscriptions. First, your initial response, and then we'll go into a little bit about the plans and what they're offering. When you hear about this, what do you think? Is this cool? Is this weird? Exciting? Bad?

**Kevin Ball:** \[23:56\] I don't know. So I hadn't heard of this before you put it out. It hadn't made it across my radar. It feels like they're going after freeCodeCamp, in some ways. Like, "We have all this web traffic, people who are trying to learn this... Let's put a bunch of tutorials together", and things like that.

I love to see innovation in that space, competition in that space. I think there's more opportunity in the web development world than ever before, and in my mind it's one of the most -- it's the best class to get into a middle class lifestyle. Or sorry, the best path to get into the middle class lifestyle that exists today. You can learn on your own, you don't have to pay, you don't have to be credentialed... You just have to learn and show you can do the work, and you can get a reasonably-paying job or contract opportunity doing web development anywhere in the world. You just need an internet connection and a laptop. That's amazing. So more ways to help people learn if they're high-quality, which MDN historically has been very high-quality...

**Jerod Santo:** Yes.

**Kevin Ball:** That's phenomenal. That's great. I don't know. I don't feel like I'm the target market here, as somebody who's been -- I've been in the industry almost 20 years at this point. I'm not doing your average tutorial right now.

**Jerod Santo:** Yeah, you're looking for the reference. That's all you need, is the reference guide.

**Kevin Ball:** I just need the reference. But yeah, if they're doing high-quality tutorials, that sounds great. Now, I'm looking at -- right now it's free, I think...

**Jerod Santo:** Yeah, let me lay out their offering. So of course, the MDN reference guides are always gonna be free, according to what they say. And I think we can take their word on that. They're not paywalling all their reference pages; if that's what people think it is, it's not that. So that, I think, would be slimy, and I would not be for that. This is additional things.

So there is what they call MDN Core, which is you sign up, it's free, but you have an account. So it's kind of like a test driving deal. And then they have two paid subscriptions, MDN Plus 5, and MDN Supporter 10. So five bucks a month or ten bucks a month. Of course, they have annual plans etc.

What those get you is additional features that they're building. There's three headline features that they offer as part of the subscription. One's called collections, where you can basically pick your favorite articles you wanna save, and get to them quicker. I don't know, it seems like a bookmark also does this feature in your browser. Firefox already has this feature called Bookmarks... But I don't wanna belittle it.

**Kevin Ball:** I wonder if you can share collections, or things like that.

**Jerod Santo:** Possible.

**Kevin Ball:** This could be an interesting way for teachers or others to do curation.

**Jerod Santo:** The second one is notifications, which I think this is a pretty cool idea. So they say "From tutorial pages to API references, you can now get notifications for the latest developments on MDN. When you follow a page, you'll get notified when the documentation changes. CSS features launch, APIs ship, now you can get a notification for significant events relating to pages you want to follow." I think that's pretty cool, especially if you're waiting for an API to go golden, or official. You don't have to check on it.

So that's cool, notifications. And then the third one is offline. So they have this progressive web app that gives you access to MDN web docs even when you lack internet access. So you can go offline, you can go on an airplane, and you can go fast etc.

So that's the value exchange... But I think also built in here is - we saw what happened with Mozilla's last round of lay-offs, and the shake-up at MDN.

**Kevin Ball:** That's actually where I was starting to think... Mozilla has been struggling on the business side.

**Jerod Santo:** Right. If this could provide some revenue...

**Kevin Ball:** This provides revenue. It gives people who care about the work that they do a way to directly support them, which is something that didn't really fully exist. I mean, I guess you could in theory donate to the Mozilla Foundation, but I feel like a lot more folks are willing to buy something, even if it's only nominal value, in the name of supporting, than regularly donate.

**Jerod Santo:** Yeah. So it could be a good thing for the whole community. Of course, the onus is on them to convince people to sign up and get those memberships going, but...

**Kevin Ball:** Totally.

**Jerod Santo:** \[28:19\] I don't know if these three -- I'm also not the target audience, but I'm trying to broadcast my thoughts into a targeted audience. I'm just not sure if these three things provide that much value. But maybe it's just a starting place.

**Kevin Ball:** So I to this day pay for a Medium subscription, and I do that specifically because I want to support explorations in other ways to help authors monetize. Not because I actually get enough value out of that Medium subscription that I might pay for just that value.

**Jerod Santo:** Sure.

**Kevin Ball:** And actually, recasting this as a way to support MDN - I might be willing to pay for this pretty much purely for that. And the features are bonus, maybe... But if they've given me a way to show support and make sure the MDN team is more sustainable, I might do that.

**Jerod Santo:** Yeah, totally. Well, it's not unlike our Changelog++ membership, where we try to provide some value with that. Ad-free feed, you get extended episodes, and we have higher bitrate mp3's... But we realize that actually those things probably don't balance out what you end up paying on the monthly. We wanna add more to it, and make it more valuable, which I'm sure MDN is the same place. We'd love to have more features and more bonuses for people who are subscribers. But people that support us with Changelog++, they do it because they love our shows and wanna support us.

**Kevin Ball:** Totally.

**Jerod Santo:** I mean, that's pretty much to a one. Maybe there's a few that are like "I really hate ads, and so I pay for it." That's cool, too. But I think that's probably gonna be a lot of at least the early subscribers to this, are the people that are like "I've gotten lots of value from MDN over the years, and here's five bucks a month. I appreciate the value."

**Kevin Ball:** Totally.

**Jerod Santo:** It'll be interesting to watch.

**Kevin Ball:** I'm looking at this right now, and they call that out pretty explicitly. They say "MDN is a part of the daily life of millions of web developers. For many of us, MDN helped us with getting that first job, or helped land a promotion. During our research, we've found many of these users, users who've felt so much value from MDN that they wanted to contribute financially. We were both delighted and humbled by this feedback. To provide folks with a few options, we're launching MDN Plus" etc. So they're leaning into that. "People get value from this, and they wanna support us already. So here's a way you can do that."

**Jerod Santo:** Right. Alright, those are your headlines. They're all true, these are all real headlines. When we get back from the break, I have some other real headlines, and I also have some headlies, and we'll see if Kball can detect which is which... Right after this.

**Break**: \[30:42\]

**Jerod Santo:** Alright, it is now time for the world-famous game show. That's a lie... It's called HeadLies, and unfortunately, our regular jingle guy, Mat Ryer - his head has exploded to three times the size. He's requiring me to send him only the brown M&Ms, fees out the wazoo, no royalty-free anymore... So I had to create my own jingle, and I apologize in advance. Here it goes.

**Jingle:** \[33:50\] HeadLine or HeadLie, you've gotta decide! HeadLine or HeadLie, give it a try! HeadLine or HeadLie, guess what's inside! HeadLine or HeadLie, I'm out of words that rhyme...

**Jerod Santo:** Thank you, thank you.

**Kevin Ball:** Alright.

**Jerod Santo:** You get what you pay for around here.

**Kevin Ball:** I was gonna say, how big are those royalties...?

**Jerod Santo:** \[laughs\] Yeah, exactly. We'll have Mat rewrite it. We'll just splice in a better one later. If you want better music than that, Changelog++... \[laughter\] Oh, goodness. Okay, here's how this game works. I have gathered a bunch of real headlines, as well as the first paragraph of the story. Then I've also generated some fake ones. I've written both the headline and the first paragraph of a fake story. I will give you the headline, at which point you can guess whether it's true or a lie. If correct, you get two points. If incorrect, I get two points. It's me versus you.

**Kevin Ball:** Okay.

**Jerod Santo:** Now, if you want more information, you can request the paragraph, at which point I will read you the first paragraph. Then you can guess, but it's only one point. So you cut your point opportunity.

**Kevin Ball:** And if I get it wrong, how many points do you get in that case?

**Jerod Santo:** I get one. So it's still even. So you're just lowering the stakes with more information, basically.

**Kevin Ball:** Got it. So I lower the stakes with more information. Okay.

**Jerod Santo:** There are ten rounds. At the end of the tenth round we'll see who has the most points.

**Kevin Ball:** Okay. I've gotta come into this with a strategy here... I feel like, generally speaking, unless I'm confident, I wanna lower the stakes.

**Jerod Santo:** Okay. That's a good strategy.

**Kevin Ball:** I'm a risk reduction type of fellow. That engineering mindset right there.

**Jerod Santo:** Okay. Well, we'll give you the first one and we'll see how you feel... And we'll go from there. Are you ready?

**Kevin Ball:** As ready as I'm gonna be.

**Jerod Santo:** Okay. "Man says he hacked airline website to find lost luggage." Would you like to guess, or hear more?

**Kevin Ball:** Man says he hacked airline website to find lost luggage...

**Jerod Santo:** That's right.

**Kevin Ball:** So I'm gonna outline my thinking here.

**Jerod Santo:** Okay, let's hear what you're thinking.

**Kevin Ball:** On the one hand, I see no way that a man can actually do that. On the other hand, you just said "Man says that..." And people will claim all sorts of crazy stuff.

**Jerod Santo:** \[36:08\] So you're on the fence then.

**Kevin Ball:** I'm on the fence, so I'm gonna ask for more information.

**Jerod Santo:** Alright, here's the story. A 28-year-old software engineer called Indigo, which is a low-cost carrier, for help, after realizing that he had swapped his bag with a co-passenger. But after Indigo refused to help him trace the other person, the man was able to retrieve information about him from the airline website." So he tracked the guy himself.

**Kevin Ball:** I'm gonna say HeadLies. That's a lie.

**Jerod Santo:** Drum roll, please... Incorrect! That's a true story.

**Kevin Ball:** Holy smokes! Okay. So Indigo's website was so bad he was able to hack it and figure out who the other -- wow. That's impressive.

**Jerod Santo:** Yes. This is according to bbc.com. I'll link up the stories for folks to go read the rest of the story... But yeah, that really happened. Now, he is just claiming -- and I think they're claiming he did nefarious things. He said actually the information was kind of publicly available. It reminds me of that HTML politics story from a few months back. I can't remember the details, but... He said there was no actual hacking; he just got the information because their website is so bad.

**Kevin Ball:** I struggle to believe that that was possible, but once again, he's just claiming, so I don't know.

**Jerod Santo:** Yeah.

**Kevin Ball:** Alright, so this is setting my \[unintelligible 00:37:22.24\] I'm gonna have a pretty bad over-under here. \[laughter\]

**Jerod Santo:** Alright, so after one round, the score is Jerod 1, Kball 0. Are you ready for your next headline?

**Kevin Ball:** If I get swept, is there anything particularly bad? \[laughs\]

**Jerod Santo:** Yeah, you can't be on the show anymore. You're just off.

**Kevin Ball:** Hm... With that as my outcome, I'm gonna just start flipping a coin here...

**Jerod Santo:** \[laughs\] It is a 50/50 chance. "Blockchain.com raises new funding at 14 billion dollar valuation." Would you like to guess for 2, or would you like to hear more?

**Kevin Ball:** Do I have any knowledge about the timeline of these headlines? Were these gathered in the last month, or could they be going back indefinitely?

**Jerod Santo:** So I gathered them today. That doesn't mean they were all written today. But I will say, they're all pretty recent, yeah.

**Kevin Ball:** Okay. I'm gonna say a lie, for two reasons. Here's what I'm thinking. So number one, I've already guessed a lie, and you said there's a distribution, so...

**Jerod Santo:** So you're \[unintelligible 00:38:18.27\] you're counting cards...

**Kevin Ball:** I'm playing the numbers game a little bit... But then the other one is we have been in a bear market on crypto and other stuff. There was huge amounts of hype last year, late into the last year, but pretty much this whole year it's been going the wrong direction. So if these are likely to be relatively recent, I like my odds for this being a lie.

**Jerod Santo:** Okay. Drum roll, please... Incorrect! It's 100% true.

**Kevin Ball:** \[laughs\] Oh, I'm doing swimmingly here.

**Jerod Santo:** Okay, so the reason why I included this is because it also surprised me, for the exact same logic. I'm like, how are they raising a 14 billion dollar valuation? This was just -- March 30th was this article, so yesterday.

**Kevin Ball:** There's always a bigger sucker, I guess, and anytime that I think I have too low of an opinion of folks, I'm wrong, and they could actually be worse.

**Jerod Santo:** So the full first paragraph is "Startup Blockchain.com said it raised new funding that values the company at about 14 billion, more than doubling its worth, in a sign that cryptocurrency firms still enjoy the favor of investors in turbulent venture capital markets." And that is off of Bloomberg.com.

So after two rounds, the score is Jerod 3, Kball 0. I'm having a great time. I hope you are as well. Okay, headline number three... There's ten of these, by the way. We're three tenths, or 30%, for those who are good at math, of the way there. Next headline...

**Kevin Ball:** The pain will continue until morale improves.

**Jerod Santo:** "Leaked Apple memo describes the company's plan to go fully remote by 2025."

**Kevin Ball:** Oh, that's 100% false. There is no way that Apple in particular, having put as much money into real estate as they have, is gonna go fully remote."

**Jerod Santo:** Is that your final answer.

**Kevin Ball:** That is my final answer.

**Jerod Santo:** \[40:15\] Drum roll, please... Ding-ding-ding-ding! You got one!

**Kevin Ball:** Okay. Phew!

**Jerod Santo:** Were you nervous though? Just a little bit. Just because you've been wrong.

**Kevin Ball:** Just a little bit. But also, I live in the Bay Area, I have seen the crazy things they do for their real estate... Yeah, they're not gonna do that.

**Jerod Santo:** Yeah, they just dropped a lot of coin on that new spaceship campus.

**Kevin Ball:** Totally.

**Jerod Santo:** Do you wanna hear the fake paragraph I wrote about it?

**Kevin Ball:** Sure, yeah.

**Jerod Santo:** "The Verge has obtained an internal email from Apple's CEO, Tim Cook, in which he reacts to numerous complaints from Apple employees about the Cupertino-based organization's return to office strategy. Cook urges people to be patient, and says that plans are underway to take the company remote as soon as it makes sense."

I feel like that was a pretty good description by me... Okay, next one. Good job. It's not Jerod 3, Kball 2. So we've got a game.

"Woman arrested for car theft drove another stolen car to court appearance, according to Dublin police."

**Kevin Ball:** That is so delightful. It appeals to so many things that even if I'm wrong, I'm gonna have to go true.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** That is delightful.

**Jerod Santo:** Final answer?

**Kevin Ball:** Final answer.

**Jerod Santo:** \[drum roll\] It's true. Good one!

**Kevin Ball:** \[laughs\] I love it. Let's hear the full story though, because that's great.

**Jerod Santo:** "A woman was scheduled to make a court appearance on Monday in Dublin after being arrested for stealing a car. How did she get to said court appearance? The 41-year-old woman identified as (I'll leave her name out) used another stolen car to get to said court appearance, Dublin police announced on Wednesday."

So it kind of just repeats the story, but... Yeah, she stole a car to go to court about a stolen car. So after four rounds, you've now taken the lead. Jerod 3, Kball 4. You're redeeming yourself here. Okay, headline five...

**Kevin Ball:** Clearly, going with my gut rather than asking for more information is working out better here.

**Jerod Santo:** Yeah. I feel like Nick wanted more information more than you do. You're just going after it. We'll see if your strategy pays off.

**Kevin Ball:** Contrary to my stated strategy at the beginning, but you know, I'm gonna draw from the anecdotes of four, and call that data, and keep leaning into this.

**Jerod Santo:** There we go. Headline five. "First patient to communicate via brain implant asks to hear Radiohead album."

**Kevin Ball:** \[laughs\] That's delightful, but I think it's false.

**Jerod Santo:** Final answer?

**Kevin Ball:** Yeah.

**Jerod Santo:** \[drum roll\] It's false! Now, here's the kicker though... So two points for you. You now have six, I have three. You're soundly beating me, which I'm not appreciating... 90% of this headline is true. I just changed the band.

**Kevin Ball:** Nice...

**Jerod Santo:** He actually wanted to hear Tool. "In the first study of its kind, scientists were able to communicate with a late-stage ALS patient using a brain implant and neurosignals. Among the few requests he painstakingly communicated was a desire to listen to a Tool album, and loudly."

**Kevin Ball:** I love it. It's even more delightful that there is truth in the lie.

**Jerod Santo:** Yeah, exactly. I just changed it to Radiohead. Okay. Well, now you are doubling me in points. Let's see if we can get back on track. Headline six. "Exxon is mining Bitcoin in North Dakota as part of its plan to slash emissions."

**Kevin Ball:** \[laughs\] Oh, dear... I want this to be a real article, but I'm gonna say false again. Actually, no. It is just wild enough -- it's crypto-wild...

**Jerod Santo:** You're on the fence. Do you wanna hear more?

**Kevin Ball:** Okay. Yes, I'll listen for more.

**Jerod Santo:** Okay. "For over a year, Exxon has been working with Crusoe Energy Systems, a company based in Denver, said the people who asked not to be named, because details of the project are confidential. Crusoe's technology helps oil companies turn wasted energy or flare gas into a useful resource." For one point now.

**Kevin Ball:** \[44:14\] I think this is one of those where they're doing something like that, but it being for crypto is just too perfect, and I think you \[unintelligible 00:44:22.01\] so I'm gonna say false.

**Jerod Santo:** Okay. \[drum roll\] I'm back, baby! That one's true.

**Kevin Ball:** \[laughs\] That's amazing! Oh, there are so many people getting scammed by this crypto thing...

**Jerod Santo:** Alright, Kball has 6, Jerod has 4. We have four headlines left.

**Kevin Ball:** Alright.

**Jerod Santo:** Number seven. "Research shows TikTok videos contribute to a rise in cases of girls with tics."

**Kevin Ball:** I'm gonna go with false. I think I saw the same study, but it's not tics.

**Jerod Santo:** \[drum roll\] I'm sorry, that is incorrect.

**Kevin Ball:** Oh...! Alright.

**Jerod Santo:** Same study, but it was tics.

**Kevin Ball:** What fun would it be if we're not close.

**Jerod Santo:** So this is tics, like t-i-c-s. Not -- I don't know what you're thinking.

**Kevin Ball:** I know, but I feel like I saw it and it was related to depression, or anxiety, or something like that.

**Jerod Santo:** It's actually Tourettes. So there's Tourette videos... I've seen -- there's one girl in particular; I saw a lot of her videos where she's sharing her experience with Tourettes, and she has tics, and stuff... I'm sure there's plenty others. It says "Tourette videos posted on the platform continue to draw many viewers, and doctors say teen girls keep showing up at their offices with functional neurological issues." So kind of a sad thing; it's a strange side effect.

**Kevin Ball:** I wonder if it's actually leading to a rise in it, or it's leading to people recognizing it and going to see a doctor when they otherwise wouldn't.

**Jerod Santo:** Yeah, potentially. I don't know.

**Kevin Ball:** I struggle to see what the mechanism would be for that. Tourettes is --

**Jerod Santo:** It's a neurological thing. I don't know if it's like --

**Kevin Ball:** It's a neurological thing. It doesn't feel like something that's gonna be amenable to peer pressure, or something. But if you've had some weird thing going on with you, and then you see this person describing it, you might say "Oh, maybe this is something I can get treated. This is actually a thing."

**Jerod Santo:** Right. Yeah, potentially. By the way, we will link it up; that's off of Wall Street Journal. We'll link up all these for people that wanna dig into more details. This is just the first paragraph. But with that wrong answer, now it ties the game. It's 6 to 6. If nothing else, we're at least making it interesting.

**Kevin Ball:** I was thinking that if I manage to win that, I would be in a winning position and I could win just by driving everything to one point. But now I have to really make decisions.

**Jerod Santo:** You're too strategic, but your strategy failed by getting that one wrong. Alright, number eight. "Mark Zuckerberg says it's reasonable that the Metaverse isn't a place, but a feeling." \[laughs\] Sorry... I'm not laughing because of the headline, I'm laughing because of your response to the headline. So don't try to read my face, it's not working.

**Kevin Ball:** No, no... \[laughs\] Oh, Zuckerberg...

**Jerod Santo:** Do you want me to repeat that?

**Kevin Ball:** No, I don't need a repetition, I'm just trying to...

**Jerod Santo:** \[laughs\] Do you wanna lower the stakes to one?

**Kevin Ball:** I feel like he has too much command of the message to actually do that. So I'm gonna say false.

**Jerod Santo:** Final answer?

**Kevin Ball:** Yeah.

**Jerod Santo:** \[drum roll\] You are correct. It is not true. Darn it...

**Kevin Ball:** Have I told you my weird Zuckerberg connection?

**Jerod Santo:** No, you haven't.

**Kevin Ball:** Actually, I have two weird Zuckerberg connections.

**Jerod Santo:** I wanna hear them.

**Kevin Ball:** One, a startup that I worked at early in my career called Causes was co-founded by Sean Parker and Joe Green... Joe Green being Zuckerberg's freshman roommate. And we had connections into Facebook and we actually leaned heavily into that Facebook viral crack when they first launched. We developed what was for a very long time the largest non-game application on the Facebook platform. Anyway, so I had that weird connection.

\[47:57\] But then later weird connection... So my wife's family is Jewish, and we don't practice very much, but we do go to the synagogue for Yom Kippur. And it turns out that the synagogue that her parents belong to, that we go to for Yom Kippur is the same synagogue that Zuckerberg goes to. So a couple of years in a row we would kind of creep in for the end of -- we would go for the end of services; basically, the end of Yom Kippur, as they're closing the heavens and doing all the different pieces. People who are more observant will be there all day for services, but we'll just go towards the end. We would sneak in there. And two years in a row, Zuckerberg snuck in at about the same time, and he was within a row of us.

**Jerod Santo:** Oh, wow.

**Kevin Ball:** And we're just sitting here and being like "This holiday is about repenting. I hope you're repenting, fella..." \[laughter\]

**Jerod Santo:** Well, it's interesting. You and Zuck are quite close, it seems. Almost friends even.

**Kevin Ball:** Apparently so. It's like that whole six degrees of Kevin Bacon, or whatever.

**Jerod Santo:** Right.

**Kevin Ball:** In this case I guess it's two degrees of Zuck.

**Jerod Santo:** Yeah. There you go. Two degrees of Zuck. So this one was almost true... I just changed what he said. So he did say that the Metaverse isn't a place, but a point in time. I changed it to a feeling. He said that on the Lex Friedman Podcast.

**Kevin Ball:** Interesting.

**Jerod Santo:** So you know, he was saying stuff, but he was just saying something different. So with that, you take the lead.

**Kevin Ball:** Okay. But yeah, when you said that, my head just started saying "Hooked on the feeling..."

**Jerod Santo:** Yeah, there you go.

**Kevin Ball:** And I couldn't imagine him saying it.

**Jerod Santo:** No. He would sing it like \[unintelligible 00:49:24.20\] I was trying to do robot and I just stopped. I just stopped midway. I'm like, "No, Jerod, don't do the robot thing. You're terrible." I wish I would be better at being robotic, but I'm just such a human.

Okay, I lost my tab... Here it is. Well, you're up 6 to 8, so you could slow-ball it and force me only into a tie, if you're gonna play the meta game... Because there's only two left. So you can go one and one, and the best I can do is a tie... But you could also be boring to do that. So I won't tell you what to do...

Number 9. "Google Search's new "Highly suspect" label helps you question the source of a story." So Google Search has added a new label, "Highly suspect". Helps you question the source of the story.

**Kevin Ball:** I know they've been doing work around that... So I heard a rumor that Nick Nisi lost. So if I force to a tie at worst, I have beaten Nick, which is the same as a victory for me. So I'm gonna ask for more details.

**Jerod Santo:** I 100% agree. Okay, more details. This is wise. This is very wise. So if you can't beat me, you might as well beat Nick Nisi.

**Kevin Ball:** I mean, yeah.

**Jerod Santo:** That's a good strategy. "Google's adding a new "Highly suspect" label to search results infrequently sourced by other publications, the company is announced today. Anything from local news, stories, interviews, announcements and even press releases will be eligible for the new label being added to the search results preview image, in the case that zero or very few websites are linking to it."

**Kevin Ball:** Hm... I'm gonna go with false, and here's why. I think the description as stated, which is about zero things linking to that article \[unintelligible 00:51:02.08\] against real-time, and I know that one of the big areas that they're trying to think about here is actually real-time and how you support things. So I suspect that they're doing something similar, or like this, but that algorithm rings false to me, so I'm gonna say false.

**Jerod Santo:** \[51:17\] \[drum roll\] Well played, it is false. So it's almost true, but I changed the label. So they have a new label, it's called "Highly cited", so I just inverted it. They have a new "Highly cited" label, which helps you know that a source is highly cited.

**Kevin Ball:** Is trustworthy, yeah. That makes a ton of sense.

**Jerod Santo:** Yeah. So if it has more links to it, then it's highly cited. So like, "Hey, these other people are citing this." I just changed it from "Highly cited" to "Highly suspect" to \[unintelligible 00:51:49.09\] But you drilled it, so another two for you...

**Kevin Ball:** Just one.

**Jerod Santo:** Yeah, just one.

**Kevin Ball:** But that's good enough. Victory is mine, Jerod.

**Jerod Santo:** This is true. Which makes this last one purely for funsies. You have 9 points, I have 6. There is nothing I can do to catch you... But I can catch you with a wrong answer on number 10, which is "As Docker gains momentum, it hauls in a 105 million dollars series C on a two billion dollar valuation."

**Kevin Ball:** That is either old or false, because I think they -- and I don't remember... It's either old or false. They're bigger than that at this point, I think. I'm gonna say false, and go with that. And I don't need to go deeper, because I've won.

**Jerod Santo:** \[drum roll\] Gotcha! That is true.

**Kevin Ball:** Alright.

**Jerod Santo:** And recent. As of today, actually. They've just announced it today.

**Kevin Ball:** I could have sworn they were already at least series C. But it doesn't matter...!

**Jerod Santo:** \[laughs\] Final score, Jerod 8, Kball 9. It's hard to even utter the words, but you, sir, are the HeadLies champion.

**Kevin Ball:** Excellent.

**Jerod Santo:** Congratulations. Do you have any final words?

**Kevin Ball:** I will endeavor to do very little evil with this. Does this mean I get to host next time?

**Jerod Santo:** Sure.

**Kevin Ball:** Alright.

**Jerod Santo:** I would love to play. I've never been able to play before. I always come up with the game. See, I thought it would be cool...

**Kevin Ball:** Alright. So as champion, I will give this gift to you in a future date. I will host HeadLies.

**Jerod Santo:** See, I thought it would be cool if we had multiple people playing. So you could have -- each person guesses what they think it is, and then they have like a running score. But it's always just been on a show where it's just the two of us, me and you.

**Kevin Ball:** Well, we'll see what happens. But I'll do that for a future episode.

**Jerod Santo:** Alright, very cool. Well, that is our show for this week. I guess happy April Fool's day, for those who celebrate, myself excluded. If you enjoyed this, let us know. If you think HeadLies is the worst show I've ever come up with, then keep that to yourself, you know? \[laughter\] But if you like it, definitely let us know. \[unintelligible 00:53:59.13\] I am Jerod, and this has been JS Party. I guess we'll just talk to everybody next week.
