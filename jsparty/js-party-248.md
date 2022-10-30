**Jerod Santo:** What's this? The start of the show? Yes, we've managed to successfully start the show. I'm Jerod, your internet friend, and I'm joined by a few of my regular panelist friends. Nick Nisi is here. What's up, man?

**Nick Nisi:** Hoy-hoy. How's it going?

**Jerod Santo:** It's going great. Friday afternoon... Again, off schedule for us, but it turned out pretty well last time, I thought... So we'll try it again and we'll see if we can do a JS Party on a Friday. \[jingle 00:02:47.16\] Amal's also here... A quarter tank Amal today.

**Amal Hussein:** Hi! Yes, it's \[00:02:54.26\] Rebecca Murphy Amal. It's Friday, Friday, gotta get -- " No, it's not. Actually I'm --

**Jerod Santo:** Oh, Rebecca Black. That's Rebecca Black.

**Amal Hussein:** Black? Murphy? I don't even know where I got that -- see, it's half tank, or quarter tank Amal. Yeah, no, I've had a good, but long week, and I'm very TGIF right now.

**Jerod Santo:** Right. Well, happy to have you here with us. And also, rounding out our cast, Amelia is here as well. What's up?

**Amelia Wattenberger:** Hey, hey! Excited for this Friday episode.

**Jerod Santo:** We're gonna do it segment style... If you're a regular listener, you know we have some recurring segments that we enjoy participating in. Today we're doing Story of the Week, the world-renowned and award-worthy Headlies segment... It's not award-winning, but it is award-worthy. That's what they're saying. That's what they're saying out there on the street. I heard it said just a few moments ago... And we're playing Pro Tip Time, if we have time for some pro tips. So we will start the show with Story of the Week.

**Jingle:** \[00:03:59.22\]

**Jerod Santo:** Story of the Week, of course, is our opportunity to talk about some of the goings on around the JavaScript and web dev community, and then, maybe argue if you want about which one's more important, better, or which one of us is smarter or better-looking. So I will start, because why not, right?

**Amal Hussein:** Yeah. Because you're the best-looking! \[rimshot 00:04:35.16\]

**Jerod Santo:** Hah! Rimshot on that one... Thank you.

**Amal Hussein:** Yeah, yeah. It's okay, don't worry about it. \[rimshot 00:04:41.26\] Oh, there we go. There we go. I've been waiting for that --

**Jerod Santo:** The soundboard is in full effect today.

**Amal Hussein:** I know, I've been waiting for that.

**Jerod Santo:** Okay... I'm about to announce my story of the week... "The Future of the Web is On the Edge."

**Amal Hussein:** ...of extinction. Just kidding.

**Jerod Santo:** That's it. That's the story of the week. \[laughter\]

**Amal Hussein:** Oh, googlification...? No, just kidding. Actually, that really ties very nicely into my story of the week. But anyways, let's continue with yours. So... On the edge, yes.

**Jerod Santo:** Okay, well let me explain this one first. So this is a post on deno.com, so disclaimer alert, they may have vested interest in making this be true, as they are one of these edge providers... But it's a post by Andy Jiang. I'll go ahead and just guess the pronunciation of your last name there, Andy... All about his thoughts on this trend that we are seeing, towards moving more and more of our compute, and maybe eventually our storage, to edge nodes. The CDN is no longer for static, it's now for dynamic... And this is a transition that he's watching, he's being a part of, and he wants to see more of. There are some problems, there are some things to get over, but his post goes into the details of why things are headed in this direction.

\[00:06:06.20\] You may take a look at this or have opinions on whether or not Andy's on track here... Are we actually moving the future of the web to the edge, or is this kind of one of those trends that's gonna come and go? What are your thoughts? Serve users? Does it serve developers? Is it just here to serve a few vendors who have these vested interests? Anybody? Literally, anybody can talk.

**Amelia Wattenberger:** My favorite thing about this is that I don't have to think about it... Right? you have all these systems where, as a web developer, I can just act as if they didn't exist, and then the user experience is better.

**Jerod Santo:** Right.

**Amal Hussein:** Yeah. I dig that. And that's like a useful thing, right? Because it allows us to really focus our energy into the areas and kind of domain influence that we have as web developers. But I would say for me, specifically, this is very exciting, because I think it's a huge win for users, and I think Fly.io is another very interesting company that our very own Divya works at; she's a platform engineer there. But Fly.io is taking that concept of a CDN and said, "Hey, your processing of data and compute on the server should also be localized and near your users, not just your static resources." So that's exciting. And I think this kind of shift towards having compute boxes closer to the users is really reflective of what the internet should have always been. It just kind of sucks that things kind of started in the Valley and the West Coast of the United States and the East Coast of the United States, and it's just kind of stayed there for a while, and now we're moving on, up, and out, in the words of the Jeffersons... So hopefully, this is a good thing, I hope...

**Jerod Santo:** So let me throw a little bit of a devil's advocate take on this. So at this time, at least -- I mean, Amelia said it's something she doesn't have to necessarily think about, and these things kind of.... You can either ignore it, and maybe your stuff will deploy there, but maybe it won't, or it's gonna happen kind of at a lower level... It seems like today it does require re-architecting a lot of existing things if you're going to take them there. I mean, if we talk about serverless functions - it's not like I can just take my monolith and just say "Now it's edge compute." And so there's a whole lot of code, a whole lot of apps, a whole lot of companies that are out there on the web today, that probably never will, or not with the current codebase, do that. And so until it can be completely seamless... You know, "Take my existing Django, or my Rails, or my Fastify, Happy, whatever my framework of choice is app that exists, and like serving users... Until I can actually just take that thing and just ship it around the world." Are we actually all going to go there, or is it just going to be like toy projects, new startups etc? Is it going to be the critical mass that makes it to the edge, or not? What do you think, Nick?

**Nick Nisi:** That's kind of what I was thinking... I don't have a ton of experience with serverless and all of this, but it'd be great if I didn't have to think about it ever, and it just --

**Jerod Santo:** Yeah.

**Nick Nisi:** It's the best thing to happen, and it just happens.

**Jerod Santo:** Right. Right now, today, you do have to think about it. You do have to plan for it. It's getting easier... I think the fact that containers and cloud-native technologies are allowing things -- like, Fly is not really serverless. Disclaimer, Fly is a sponsor of ours, but that's not why we're talking about them.

**Amal Hussein:** Yeah.

**Jerod Santo:** Fly is not really serverless. They have some serverless stuff...

**Amal Hussein:** It's just cool, new technology.

**Jerod Santo:** \[00:09:45.29\] Yeah, exactly. But it's like VMs, or it's like containers. It's like a runtime that you can run an entire web app inside of. But some of these things are just like streamlined, slimmed-down functions, and they have these functional architectures that require you to constantly be thinking about, "Does this run in Cloudflare Workers, or will it work on Lambda?" etc. So maybe we're just kind of like at the beginning of it, where it's going to happen underneath us, and that will be grand. Or maybe not.

**Amal Hussein:** Yeah.

**Amelia Wattenberger:** That's my hope, for sure, is "I never have to think about it", and then it slowly just works. And I think also the other devil's advocate is this is still enabling web developers to create more and more code that you have to send to users, which I feel very enabled, and I enjoy doing that... But I try not to read articles like this, that make me feel like it's an okay thing to do.

**Jerod Santo:** Alright. Well, at least you're moving at less distance to them, right? So if you're already going to have code shipped into the browser, and you're going to at least ship that code around the world to be close to your users, that's I think an unmitigated win. If that then encourages you to increase that amount of code - I don't know if that's more on you than on it, but maybe not. Maybe there's an unvirtuous cycle there. Good point.

That's one of the things Andy did in this post, is he talked about the performance of running compute around the world at CDN edge nodes... And he set up a test between Heroku and Deno Deploy; of course, that's their offering at Deno.com. But there are others as well. And he showed just like the time to first byte at these different locations around the world based on a single app server from Heroku in one place, and then against these edges. I mean, no surprise here, it was faster, because it's just geographically located near the end user, right? Which is cool. So we will link that post up for y'all to read, if you find it so interesting. But let's move on to the next story. Let's kick it over to Amal. What you got?

**Amal Hussein:** Yeah, this one's a really hot topic, and coincidentally, I was having a conversation with some friends last night about this topic of like monetization on the internet, and how we really need to figure out a way to do this cleanly, through standards, because we cannot leave our content creators in the hands of companies like Google, that are just very -- they have a very different, specific set of incentives, right? So this story is from Brave, it's from the Brave Browser team. For those of you who are like "Brave, the browser?", let me just give you a quick summary. So Brave is a browser that's been around for a few years now. It's been my primary browser on my personal machine, on my phone... It means some of my experiences on the web are not great as a result of it, because Brave is intentionally very privacy-focused, and they aggressively block trackers, and all that jazz.

One of the founders of Brave is Brendan Eich, who is the person who also created JavaScript, ECMAScript. And love Brendan, hate Brendan, it doesn't matter. I'm just stating he's one of the people involved with this project. He's been a little controversial in our community lately... And Brendan -- I was excited about this project, I still am, but there's a crypto elements to this, which I have just always ignored... But there is something called the BAT, Basic Attention Token, and so the idea is your attention is time, and we could potentially show you ads in a private way, and you can earn and get BAT credits, and whatever else. I don't really do anything with that personally, so I can't speak to that... But for me, it's just the best browser in terms of limiting your tracking footprint.

\[00:13:53.19\] And so what Brave came out with is this a bit like -- they're letting you now, just through the browser, opt out of those annoying cookie banners, right? ...which are getting like infinitely more complex, right? Because it just went from Accept or Not Accept, to now it's Accept or See the Options, that will bring a confusing menu that's worded --

**Jerod Santo:** We have six kinds of cookies, you know?

**Amal Hussein:** Yeah. Weird language... I mean, it's not the greatest stuff. So they've kind of launched this ability for us to just have one setting in our browser, and they will try to the best of their abilities to block all of the cookies. And one of the interesting things that they've pointed out in this article is that those cookie consent tracking, the consent form things, ironically actually track users, even though their whole goal is to not track. So even if you hit Deny, sometimes you're still getting tracked. You're trusting that they're doing what they say that they're supposed to be doing.

**Jerod Santo:** Right, because you've interacted with the consent banner itself, and so they're using that to track you. And there are a lot of extensions that go through and they'll click that for you. It's like a browser extension, which is a nice user experience, but it's not saving you from that privacy-tracking moment.

**Amal Hussein:** Exactly. That's exactly right. And so what Brave is able to do because they are building this into the browser and it's not a third-party extension or whatever else - they're just leveraging the \[unintelligible 00:15:23.04\] origin, they're like going deep, a layer down to not only like hide and disable the banners, any scrolling, limited scrolling, or anything to do with that, but they are also making sure that the cookies trackers themselves are not tracking you, which is awesome. And I was like "Yes!" Before I say more, I'm waiting to hear like cheers and excitement from all of you. You all are very mellow about this news... \[applause 00:15:53.15\]

**Jerod Santo:** Sorry, that goes on for like 45 seconds.

**Amal Hussein:** Yeah, it does. So yeah, what do you think, Amelia and Nick? Is this enough to make you want to use Brave? Nick is nodding no...

**Amelia Wattenberger:** Yeah, he is. Nick, you can go.

**Jerod Santo:** It's an audio podcast, Nick.

**Amal Hussein:** It's worth noting Brave is Chromium. It's a Chromium wrapper.

**Nick Nisi:** That's why.

**Jerod Santo:** That's why?

**Nick Nisi:** That's why, yeah. Pretty much.

**Jerod Santo:** Why is that a deal breaker for you? Just because of the homogeny, or what do you call it?

**Nick Nisi:** Yeah. I'm standing my ground. I have a Chromium browser installed for apps like this, like Riverside, that we're using to record this podcast.

**Jerod Santo:** That requires it.

**Nick Nisi:** Yup. But otherwise, it's completely closed. The one I use is Vivaldi, but I'm not a fan of Chromium browsers in general.

**Jerod Santo:** Yeah. Amelia?

**Amelia Wattenberger:** I'm not so moral in my stance against browsers... \[laughs\] I wish I were...

**Jerod Santo:** So you're just a Chrome user, is my guess.

**Amelia Wattenberger:** I am. I keep trying to switch, but it's like, you know, you've been using it for so long...

**Amal Hussein:** Yeah. Chrome feels like \[unintelligible 00:16:58.03\] Baby Gap.

**Jerod Santo:** What's that mean?

**Amelia Wattenberger:** I don't know what Baby Gap feels like... \[laughter\]

**Jerod Santo:** What's that mean?!

**Amal Hussein:** I mean, it's like Gap. It's like, Gap - like, everyone can walk in, all body shapes, sizes, whatever... Like, you can walk out with something, and so Gap is the lowest common denominator for many Americans in terms of like \[unintelligible 00:17:17.03\] But also, it's Baby Gap because it's noncontroversial and cute, but also just kind of like problematic...

**Jerod Santo:** Why is Baby Gap problematic? I don't understand... \[laughter\]

**Amal Hussein:** I mean, Baby Gaps are just kind of... I don't know.

**Jerod Santo:** Alright. Quarter tank Amal. Quarter tank analogy over there...

**Amal Hussein:** Quarter tank, yes.

**Jerod Santo:** Fair enough. So Amelia, I'm curious, what hooks does Chrome have in you that when you try to switch off to it, you're like "Yeah, I want Chrome back."

**Amelia Wattenberger:** I think a lot of it is things mostly work... So when I'm making websites, I can at least pretend that it works...

**Amal Hussein:** Yeah, so Stockholm Syndrome is what you're saying. Got it.

**Nick Nisi:** Except in Firefox.

**Amelia Wattenberger:** \[00:18:00.14\] Yeah, yeah.

**Jerod Santo:** Yeah. Works best in Chrome...

**Amelia Wattenberger:** Yeah. \[laughter\]

**Jerod Santo:** Yeah. So, I mean, I haven't had Chrome on this new machine, at all... I do have Brave on it. It's not my primary driver. I'm a Safari guy. I love Safari's shared tabs between phone and computer. I use it all the time. I can't live without it.

**Amal Hussein:** Is it weird that I didn't know that? But that's only because I've had an iPhone for like six months.

**Jerod Santo:** It's amazing. You open it on your phone, and then you go back to your desk, and then you click on it. And it's open on your desk, and you're like "This is amazing."

**Amal Hussein:** I think I've noticed that on my iPad.

**Jerod Santo:** Yeah. I just love that feature. So that integration for me is what keeps me there. But I use Brave for Riverside, and I use Brave for like software development stuff, because you get the Chrome DevTools built in. So the DevTools are awesome, they're way better than the ones that are in Safari, in my opinion... And you know what? I've tried Firefox over the years, and for me, it's just like Baby Gap. You know, I don't know what that means... It's just ugly every time I open it. It just feels ugly, and I feel bad saying that, but Firefox, you're just kind of ugly to me... And I can't use you because of that. And I'm sure I could theme you and make you pretty, but ain't nobody got time for that. \[jingle 00:19:09.17\]

**Amal Hussein:** Ain't nobody got time for that, yeah. I think my problem with Baby Gap is more that it just promotes consumerism in children, or something like that... But that's like a deeper problem. \[laugher\]

**Jerod Santo:** I love that she's still defending her analogy...

**Nick Nisi:** My kids are not excited to go to Baby Gap...

**Jerod Santo:** Let it go, let it go...

**Amal Hussein:** Yeah, I'm letting it go. It's fine. \[laughter\] What's really cool about what Brave is putting out there is that they're building this into the browser, giving users an option that's like trustable, and safe... There's no creepy extension that you're adding... But they also kind of point out that Google is taking some very aggressive steps to push forward some new standards, which would make all of this type of stuff difficult, right? So Google has been kind of waging this war, which is why they've been losing some market share; not enough, but they've been doing a lot of stuff that's not very good for user privacy. We'll put lots of links in our show notes. I think this should be its own discussion... But basically, there's a proposal that they have called Web Bundles. And Web Bundles has this manifest v3, and that would remove a lot of the capabilities that protect user privacy, that would enable this type of thing.

So it's going back to that problem where like, hey, Google's incentive for how they make money, and their market share for Chrome, with Chrome, and their ability to influence standards - we're getting into murky territory here, and there's not enough people, I think, left on the Chrome team, that I know of anyway, that are really like fighting this issue as hard as it should be fought, right? Because really, what's been going on at Google for many years is there's people inside, actively fighting for user privacy and trying their hardest to like push back on the business, right?

And so the idea is -- you know, the web was built to be open, we need to keep it that way... And so this is kind of actually really raising a lot of interesting, active points of contention within the standards community and the privacy community.

**Jerod Santo:** I agree. I think Nick's point is valid with regard to rendering engine diversity, and Brave's lack of that is that you're still Chromium, and so you're still doing that to the rest of the web by using it. You're not getting the diversity that you get with a Firefox, or even with a Safari, or with a Vivaldi, or with Lynx, which is a command line renderer, which is still out there...

**Amal Hussein:** But that's a different problem.

**Jerod Santo:** We have time for one more story. One more story. One more story. And it's gonna be -- who feels the most passion for theirs? Nick? Amelia? Who's really passionate? I know neither one of you probably are, by the way you wrote about them in the doc... Who wants to do theirs? We'll do one of yours.

**Nick Nisi:** Go ahead, Amelia.

**Amelia Wattenberger:** Nick, you're -- oh...

**Jerod Santo:** \[laughs\] Neither of them wanna do it...

**Amelia Wattenberger:** Okay, okay...

**Jerod Santo:** They're both gonna defer. Okay, Amelia, we'll do yours.

**Amelia Wattenberger:** \[00:22:10.28\] Okay, so mine isn't news, but it's a happening... So yesterday, I think Linear, which is some task tracking app, their marketing website got DDoS-ed... And so they shared a Figma file, which was their design doc for their rewrite of the marketing site... And I just thought that was really interesting. You could see everyone's cursors in there, there were like hundreds of people poking around in a Figma file... And they had like a whole Q&A; apparently, Figma also has spaces, so they were giving tours of "This is how we designed it..."

So I think some of the really interesting things there are like for a marketing site, how much are you getting that's not just like the static designs, right? As long as you can read the text and see the pretty pictures, that's pretty much all you need. And then I think they ended up like way in the positive; they got way more attention than they would have if they hadn't had their website go down... So that was cool.

**Jerod Santo:** That is super-cool.

**Amal Hussein:** That's hilarious and ingenious.

**Jerod Santo:** Yes, great marketing.

**Amal Hussein:** I want to be a fly on the wall in that room, when that decision was being made. Because I would have just gone on the table and I would have been like "Brilliant!" Because really, as a startup, you don't want to be wasting time; like, any time you spend on anything before you can get it in front of users and get feedback - that's precious time. So cut the middleman out. Do you even really need a real website? Let's just have this be a PDF. Let's just put the PDF on the whole page... \[laughs\]

**Jerod Santo:** Yeah, exactly.

**Nick Nisi:** And this was great marketing for Linear, because I hadn't heard of it...

**Jerod Santo:** Totally.

**Amelia Wattenberger:** Yup.

**Nick Nisi:** Literally right before this, I was admitting to my team how JIRA-illiterate I am... And this looks so much nicer.

**Jerod Santo:** That's a better way to build products, according to themselves...

**Amal Hussein:** It's awesome.

**Jerod Santo:** Yeah. Great job, Linear team.

**Amelia Wattenberger:** I think it's also -- sorry, we're probably out of the time... But it's better than a PDF, right? Because when you look at things on the web, they're behind these glass cases, and you kind of just go and look at what companies have built... But people could go in there, they could add comments, they could talk to each other... Which feels kind of like websites need to be more communal.

**Jerod Santo:** Yeah, it almost turned into like an MMO for a little while...

**Amal Hussein:** \[laughs\]

**Amelia Wattenberger:** Yeah. Exactly. Yeah.

**Jerod Santo:** Until they closed it. Like, "Let's all collaborate on this Firma thing, and talk about it, and stuff." It's crazy. That's the cool stuff of the web. Amelia, you win. Best Story of the Week. Congratulations.

**Amelia Wattenberger:** For sure. Hands down. Who cares about internet privacy, and... \[laughter\] This stupid thing, that's dead. Privacy has been dead for ten years! Why are we even talking about this?

**Nick Nisi:** I think I win by not playing.

**Amelia Wattenberger:** That's true. Nick wins. \[laughter\]

**Jerod Santo:** Well, I think we win, because we stopped Nick from talking about...

**Amal Hussein:** His beloved TypeScript. Ooooh...!

**Nick Nisi:** Nice...

**Amal Hussein:** Good play. Yes.

**Jerod Santo:** Yeah, we're all out of time.

**Nick Nisi:** Do you mean that project that turned 10 years old?

**Amal Hussein:** Aww...

**Jerod Santo:** And that's all the time we have left for Story of the Week... \[laughter\]

**Amal Hussein:** Wait, did TypeScript kill privacy? Is there like -- I said, "Privacy has been dead for 10 years." You said TypeScript turned ten...

**Jerod Santo:** Ooh...

**Amal Hussein:** I mean, there's only one logical correlation I could make...

**Nick Nisi:** Whoa... \[laughter\]

**Jerod Santo:** Yes. Breaking news...

**Amal Hussein:** TypeSkip -- TypeSkipped... Types-- oh, my God... TypeScript! Nick is like having a fit. He's like, "How dare you mispronounce my beloved TypeScript?" But yes, his beloved TypeScript... Yeah, no, so TypeScript killed privacy. You heard it here first, kids.

**Jerod Santo:** Yes. We're gonna start a flame war with that one. Alright, we've got to stop. We'll be back. Those are your headlines. We'll be back with some headlies (see what I did there?) right after this...

**Break:** \[00:25:51.28\]

**Jerod Santo:** Alight, it is time for Headlies, the award-worthy segment, which did have a theme song, but Kball laughed at it so much that I had to delete the file and never play it again... So no jingle for Headlies, but it is a game - and this is the first time we're going to have the game with multiple players. It's always been a one-player game. I played it against Nick, and then I played it against Kball... Here we have three participants.

So here's how it works... I have scoured the web for various headlines. I have also fabricated some headlines. Each headline also has a description, like the first paragraph from the story... And so I will read a headline, at which point each of you will have an opportunity to guess whether it's true or false. Okay? If you guess immediately, right after the headline, you get two points on the table. So you can either win or lose two points. You can then opt to hear the description, the first paragraph from the story, and after that description is read, now you can guess true or false, and you get one point or lose one point. So you have more opportunity to score points right after the headline, but you have less information, and then afterwards, less points, but more information.

Each of you will guess separately. So you're playing against each other, and we tally the points at the end of all the headlines. Whoever has the most points, wins.

**Amal Hussein:** What if I just copy all my guesses to be the same as Nick's?

**Jerod Santo:** Then you sabotage the game and it's not any fun. \[laughter\]

**Amal Hussein:** Oh. But am I going to be like in a different room when Nick is giving his answers?

**Jerod Santo:** \[00:30:16.09\] No. Each of you will go in turn, but I'll vary the turns, so that you can't just go after Nick each time.

**Amal Hussein:** Ah, dang it. There goes my plan. \[laughter\]

**Jerod Santo:** I'm glad you said your plan out loud, so now I can defend against it.

**Amal Hussein:** Okay, okay. Fine, fine. Fine.

**Jerod Santo:** Alright, are we ready? Round one of Headlies. "Apple's mixed reality headset to offer iris scanning for payments, logging in." There's your headline. So based on that alone, you should decide whether it's a true headline or one that's fabricated. Or you can say all defer till the description. Okay, so Amelia, what do you think?

**Amelia Wattenberger:** Yes.

**Jerod Santo:** Yes what? Yes, it's true? \[laughter\]

**Amelia Wattenberger:** Yes, yes. True, I think.

**Jerod Santo:** Okay, so you think it's true.

**Amelia Wattenberger:** Yeah. I'm gonna go with that.

**Jerod Santo:** Okay. Amal?

**Amal Hussein:** No. Too obvious.

**Jerod Santo:** You're gonna guess false. Okay. I will just restate - you're both wagering two points at this point. You could say "I need more information" and wait for the description.

**Amal Hussein:** Yeah, sure.

**Jerod Santo:** Alright. So Nick, what would you like to do? Do you want to say true/false, or do you want to wait and hear the description, the paragraph?

**Nick Nisi:** I'm gonna say false. If you ask Apple, they don't have an AR headset...

**Jerod Santo:** Do you want me to read the headline again? \[laughter\]

**Amal Hussein:** Hey, I only got one reading, so I would say if he gets another reading, then I want his points if he wins...

**Jerod Santo:** No. \[laughter\] You can't just take his points...

**Nick Nisi:** They're not gonna do -- no... No, no, no. A certain company couldn't even fabricate legs for a demo, okay? It's not -- they're not gonna be reading.

**Jerod Santo:** Okay, so... Round one. The headline is "Apple's mixed reality headset to offer iris scanning for payments, logging in." Amelia says that's a true headline. Amal and Nick both think that is a made-up headline. And the truth of the matter is that that is a true headline. So Amelia scores two points.

**Amelia Wattenberger:** Yes...!

**Jerod Santo:** And you guys both lose two points. So I guess, in a sense, Amal, you did get Nick's points. Just he also got them.

**Amal Hussein:** Oh, burn, Jerod... Okay, fine. Whatever. We can move on.

**Jerod Santo:** Alright, here we go. Next headline. "The US Department of Veteran Affairs postpones rollout of an electronic health record systems developed by Oracle under a $50 billion contract until the year 2030."

**Amal Hussein:** Oh, my God...

**Jerod Santo:** Nick, we'll start with you this time. You can guess, or you can wait for the paragraph.

**Nick Nisi:** Hmm...

**Jerod Santo:** I can also re-read the headline, if it would help.

**Nick Nisi:** I'm gonna say that that's true. It sounds just preposterous enough to be true.

**Jerod Santo:** Okay. Amelia, what do you think?

**Amelia Wattenberger:** I feel like it would take a very creative brain to come up with that, so I'm gonna copy Nick and go with true.

**Jerod Santo:** So true?

**Amelia Wattenberger:** Yeah.

**Jerod Santo:** I feel like she was fishing there. Like, she wanted me to blush...

**Amal Hussein:** Yeah, yeah, she's reading for body cues...

**Jerod Santo:** Like, "Oh, yes \[unintelligible 00:33:09.03\] And it did. It really did... No. Okay, Amal, what do you think?

**Amal Hussein:** Honestly, all I've been thinking about since I heard this headline is like "Gee, I wonder how they're designing their database schemas", because they better make sure that they have extensible architecture, so that they have a table that has a map for all the different diseases, because by 2030 we'll have a whole different set of different things to be worried about than we are today... So I'm like, "I hope this isn't like hardcoded." I don't know it's Oracle; it could go either way.

I'm gonna say false... I think the government would be - especially this close to election time, that's too big of an embarrassment to leak. I could give like a bunch of college students this as a hackathon challenge to build over the weekend, and it probably would still be HIPAA-compliant, so...

**Nick Nisi:** But that sounds exactly like what Oracle charges for... \[laughter\]

**Jerod Santo:** Doesn't it?

**Amal Hussein:** Oracle can't build a simple, HIPAA-compliant app? It takes them 10 years? Like, we have -- yeah... No, that's a canceled concept.

**Nick Nisi:** Yes, absolutely. That's Oracle's bread and butter.

**Amal Hussein:** \[00:34:10.19\] Yeah. Okay, so I will say no. I have faith in our government's ability to somewhat use our money a little more responsibly... But I could be wrong. Please don't prove me wrong.

**Jerod Santo:** Please don't prove me wrong. So the headline," The US Department of Veteran Affairs postpones rollout of electronic health record systems developed by Oracle under a $50 billion contract until the year 2030" is not real. That is a false headline.

**Amal Hussein:** Yes! Woo-hoo!

**Jerod Santo:** So Nick, negative two. Amelia, negative two, and Amal, plus two. So you're back at zero.

**Amal Hussein:** Good job picking that.

**Jerod Santo:** Nick's at negative four... So I will say, it was not a creative mind. What I did was I took a real headline and I changed the values. So it's actually true in a sense, except for it's not 50 billion, it's 10 billion, and it's not 2030, it's 2023.

**Amal Hussein:** Yeah, but still, I mean - my God... Anything billion to build an app like that - my goodness.

**Jerod Santo:** It's still $10 billion, and it's still delayed until June of 2023. I thought that a 10-year delay would be just preposterous enough that you couldn't think that... But it's our government, and it's Oracle, so I guess anything can be believed. Could you imagine announcing a 10-year delay though? A decade.

**Amal Hussein:** Yeah, is iOS even gonna still exist? Who knows...?

**Nick Nisi:** It doesn't sound preposterous...

**Amal Hussein:** It's like, you're building an iOS app for ten years... It'll be like iO-something-else in ten years...

**Nick Nisi:** 10-year delay in Oracle...

**Jerod Santo:** You're gonna owe a whole lot more in ten years...

**Nick Nisi:** This podcast is brought to you by Oracle. \[laughter\]

**Jerod Santo:** Probably never. Okay... So after two rounds of Headlies, Amelia has zero. Nick has negative four. And Amal has zero. So it's a two-way tie at the top...

**Amal Hussein:** Oh, okay.

**Jerod Santo:** You lost two in the first round, and you scored two in the second round.

**Amal Hussein:** Oh, okay.

**Nick Nisi:** This is shaping up to be just like all of our other games...

**Amal Hussein:** This feels like a really sad pointing scheme. Why do we have to lose points? Can't we just not gain them? But it's fine...

**Jerod Santo:** Yeah, maybe.

**Amal Hussein:** Yeah, it's okay.

**Jerod Santo:** I don' t know, I'm making this up as I go along, okay?

**Amal Hussein:** I think I'm enjoying Nick being at negative four right now, so it's all good. \[laughs\]

**Jerod Santo:** It's exponential. Alright, our next headline. Here we go. "Heroku reverses course, plans to reintroduce free plans after facing community backlash." Now we'll start with Amal. I will remind you, you can all wait and hear the paragraphs. Each one of these has a paragraph... But it's less points. So do you think that's true or false? Or do you want to hear the paragraph?

**Amal Hussein:** Yeah, can I hear the headline again?

**Jerod Santo:** The headline is "Heroku reverses course, plans to reintroduce free plans after facing community backlash."

**Amal Hussein:** Yeah, I mean, I would say that's likely true. The only problem is I haven't been following what Heroku has been up to... So I wouldn't be surprised if they took a dip in the market and then they're like "No more freemium. Compute is expensive now." And I don't know, I'm gonna just risk it and I'll say true.

**Jerod Santo:** Okay. Let's go now to Nick.

**Nick Nisi:** I feel like I would have heard about it, because I heard about them removing their free plans, even though I didn't have any reason to know about Heroku before that... And so I'm gonna say that it's false.

**Amal Hussein:** But you did hear about the free plans being redacted, right?

**Nick Nisi:** I did. Yes.

**Amal Hussein:** That's what I didn't hear about, because I don't follow Heroku anymore... So yeah.

**Jerod Santo:** Okay. Amelia.

**Amelia Wattenberger:** I agree with Nick. I feel like \[unintelligible 00:37:37.12\] so false.

**Jerod Santo:** False. Okay, so on Heroku reversing course we have Amal true, Nick false, Amelia false. Nobody wants to hear the paragraph that I painstakingly typed out as I made this story up...

**Amal Hussein:** Why don't you just read the paragraph anyway before you announce your result?

**Jerod Santo:** Okay.

**Amal Hussein:** And then maybe we can reassess. Can we have a bonus round if we want to change our minds?

**Jerod Santo:** \[00:38:01.08\] Okay, I'm liking this. Let's change the rules as we go. Here's my paragraph. This is a good one, folks... "After offering them for over a decade, Heroku announced in August that it will eliminate all of its free services starting November 28th. However, multiple sources inside Salesforce have told TechCrunch that Heroku GM Bob Wise will soon announce a course correction that keeps free plans available for accounts under certain conditions. The details of those conditions are still unknown."

**Amal Hussein:** Yes, yeah. I'm gonna stick with my same answer. I think it's true...

**Nick Nisi:** He already said it was false.

**Jerod Santo:** Yeah, I made it up. \[laughter\]

**Amal Hussein:** Oh, he said it was false? You said it was false?!

**Jerod Santo:** I said "I painstakingly made this paragraph up."

**Amal Hussein:** That sounded so believable!

**Jerod Santo:** Thank you! I wrote that.

**Amal Hussein:** My goodness. I was "Yeah, that sounds true." Especially if it's like leaked insider information... Oh, my God.

**Jerod Santo:** It's definitely believable, which is the basis of a good lie, right?

**Amal Hussein:** That's so good. I was like, "My god, Jerod, there's no way you made up that paragraph."

**Jerod Santo:** Thank you, thank you.

**Amal Hussein:** I'm so impressed.

**Nick Nisi:** You really had me panicking, because it's entirely possible that I would have just missed that news... Because I don't care.

**Jerod Santo:** Well, especially if it was a leak from inside the company, and not an official announcement...

**Nick Nisi:** Yeah.

**Jerod Santo:** That's why I kind of wanted you guys to wait for the paragraph... But you went ahead and guessed, and you got it right, Nick. Good job. So Amal and Nick got it...

**Amal Hussein:** No, no, no, Amelia.

**Jerod Santo:** No, sorry. Amelia and Nick got it right. Yeah. Same, same letters...

**Amal Hussein:** I don't follow Heroku, so I was like, "I don't really--"

**Jerod Santo:** So Amal's now at negative two, Amelia goes to two, and Nick ties Amal at negative two. So we have a tight race here, with Amelia winning currently. \[laughter\] Alright, there's two more left. Are we ready for the next round?

**Amal Hussein:** Yeah, I'm just sad that Nick is still negative... \[laughter\]

**Jerod Santo:** He's used to it.

**Amal Hussein:** But that's okay, that's okay...

**Nick Nisi:** Yeah. I'm very used to it. I don't win Jerod's games...

**Amal Hussein:** Aww... I'm sad... Okay.

**Jerod Santo:** Alright. The next headline: "Decentraland's reported to have only 38 daily active users in their $1.3 billion ecosystem."

**Amal Hussein:** Is this a Web 3 thing?

**Jerod Santo:** Decentraland is a Web 3 platform, yes.

**Amal Hussein:** Are you just trying to like drill me right now on a podcast?

**Jerod Santo:** \[laughs\] Okay, who wants to go first? We'll go back to Amelia. Do you want to guess now, or you want to hear the paragraph?

**Amelia Wattenberger:** Oh, I have 0% confidence in any answer. I want to hear that paragraph.

**Jerod Santo:** Okay. Amal, do you want to guess now or hear the paragraph.

**Amal Hussein:** I want to hear the paragraph.

**Jerod Santo:** And Nick, do you want to guess now, or hear the paragraph?

**Nick Nisi:** Can you repeat the headline?

**Jerod Santo:** Sure. "Decentraland's reported to have only 38 daily active users in their $1.3 billion ecosystem."

**Nick Nisi:** I'm gonna say that's true, before you read the paragraph.

**Jerod Santo:** Okay. So Nick goes in true before the paragraph. Now I'll read the paragraph. "What's going on in the Metaverse these days, you might ask? Looking at two of the biggest companies with over $1 billion valuations, one data point suggests that users may not be returning every day. According to data aggregator DAP Radar, the Ethereum-based virtual world Decentraland has 38 active users in the past 24 hours, while competitor, the Sandbox, had 522 active users in that same time."

That is your details. Now we go back to Amelia. What do you think, true or false? This is your last chance to guess...

**Amelia Wattenberger:** I'm going with true. That sounded just weird enough to be real.

**Jerod Santo:** Okay. And Amal, what do you think?

**Amal Hussein:** True. I mean, the only reason why I'm hesitating is because I wonder if you did another thing where you changed the parameter... You variable-ize the headline, where it's like instead of 38, it's like 100 active users, and so...

**Jerod Santo:** Right...

**Amal Hussein:** I hope you're not that mean though, so I'm gonna say it's true, hoping that you're not that mean.

**Jerod Santo:** Okay.

**Nick Nisi:** That is exactly what I was wondering, too... Because I feel like I heard something about this, but I don't know the details of numbers.

**Jerod Santo:** Well, the truth of the matter is that this one is true. I did not change any numbers. That is exactly what was reported. So everybody got it right. Good job, y'all.

**Amelia Wattenberger:** Nice.

**Jerod Santo:** Nick goes plus two though, and you guys only go plus one. I mean, for the round. So he goes back to zero. \[laughter\] So yeah, he's still at zero...

**Amal Hussein:** \[unintelligible 00:42:10.23\] I was talking about his final score. His final score is zero... \[laughs\] I'm sorry, this is just so funny...

**Jerod Santo:** \[00:42:24.16\] Well, you're at negative one, so I'm not sure --

**Amal Hussein:** It's like he never played. \[laughter\]

**Jerod Santo:** I love how she's laughing at you, but she's actually losing to you at this point...

**Amal Hussein:** No, what do you mean?! I'm like plus two.

**Jerod Santo:** Oh, sorry. I added, not subtracted. Hold on, let me recalculate. So you got negative two in the first round, and then negative two in the second -- oh, no, that's Amelia. You guys' names are too close.

**Amal Hussein:** Oh, yeah. Blame us! \[laughs\]

**Nick Nisi:** Amal and I were tied.

**Amal Hussein:** Blame us, Jerod...

**Nick Nisi:** I think I should be zero and she's negative one.

**Jerod Santo:** That's what I have.

**Amelia Wattenberger:** I think that's right, yeah.

**Jerod Santo:** Yeah, So you're losing still.

**Amal Hussein:** I'm probably still losing. No, for sure. Yeah.

**Jerod Santo:** Okay. That's why I was making fun of you, because you were laughing at Nick, but you're still losing.

**Amal Hussein:** \[laughs\]

**Jerod Santo:** I just thought that was funny. \[laughter\] So I was right. I was right to laugh at you. Okay. Amelia is winning, though...

**Amal Hussein:** Yeah.

**Jerod Santo:** And she has -- I had to go back to the top... The scoreboard is weird on this game.

**Amelia Wattenberger:** It's confusing.

**Jerod Santo:** She got it wrong, then she got it right... \[laughter\] Amelia has one.

**Amelia Wattenberger:** No. I have three.

**Jerod Santo:** Wait a second... Did I skip one? She got it right...

**Amelia Wattenberger:** Maybe I'm wrong.

**Nick Nisi:** I think you're right.

**Jerod Santo:** She got the first one right, the second one wrong... That puts her at zero. Okay, third one - right. Puts her at two. Yes.

**Amelia Wattenberger:** Hah!

**Jerod Santo:** Fourth one right, puts her at three. You're correct. Nick, keep the score for us, will ya?

**Amelia Wattenberger:** You're trying to take my points... \[laughter\]

**Nick Nisi:** Yes. Three, zero, negative one.

**Jerod Santo:** Alright, the last round. The last round. So if Amelia plays it conservative, she can probably walk away with this one... "Meta avatar legs demo created by Motion Capture, not Live VR." \[laughter\] And we will go -- \[laughs\] Sorry. We're losing it here. That quarter tank emptied out quickly.

**Amal Hussein:** Yeah...

**Jerod Santo:** We'll go to Amal.

**Amal Hussein:** Okay. So Meta has legs, and it's in VR...

**Jerod Santo:** Metatar -- Meta avatar legs demo... Did you know about the Meta announcement with Quest Pro and all that? That's what this is about.

**Amal Hussein:** I mean, I actively don't follow any news from Meta...

**Jerod Santo:** Okay... So here's the headline, as it reads: "Meta avatar legs demo "created by motion capture, not live VR." You might want to hear more information if you don't know what that's all about.

**Amal Hussein:** Yeah, sure. Please, more information.

**Jerod Santo:** Alright. So now we'll go to Amelia. Do you want to guess now, or do you want to hear more?

**Amelia Wattenberger:** That's absolutely the truth.

**Jerod Santo:** Okay, she's going true on a two-pointer. Nick, how about yourself?

**Nick Nisi:** Me too. I already made this joke in the Apple one, so I know it's true.

**Jerod Santo:** I know, I heard you...

**Nick Nisi:** \[laughs\]

**Amal Hussein:** Okay, I'm gonna cheat and say -- I'm gonna change my mind and I'm gonna just vote true. \[laughter\]

**Jerod Santo:** She's doubling back... We'll only allow it because she's in the last place currently...

**Amal Hussein:** I'm not in the last place...

**Jerod Santo:** Yes, you are. You're at negative one. That's last.

**Nick Nisi:** I think you should read the paragraph though, because it's such a hilarious story.

**Amelia Wattenberger:** I want to hear the paragraph, yeah.

**Jerod Santo:** A key segment of the Kinect keynote this week announcing that Meta's avatars would eventually feature legs was produced with animations created from Motion Capture, the company said. So they couldn't actually do legs in VR, so the motion captured them to demo what it's going to be when like when they can do legs in VR.

**Amal Hussein:** Wow... This is what I call an MVP thinking. It's like "We don't need a whole person, we just need half."

**Jerod Santo:** Yeah.

**Nick Nisi:** How do you do that though?

**Jerod Santo:** It's like the old saying, "Fake legs till you make legs."

**Amal Hussein:** Yeah, fake it till you make it. \[laughter\] Yeah, literally. It gives me a lot of faith...

**Nick Nisi:** \[00:46:03.15\] They got dragged when they had like the horrible avatars come out a few weeks ago, or a few months ago, or whatever... And then how do you just go up and say "This whole thing that we pivoted to - yeah, we faked it." How do

you do that?

**Jerod Santo:** It wasn't their best moment, was it?

**Amelia Wattenberger:** No...

**Nick Nisi:** The best thing though is you have to go watch The Carmack Unscripted. John Carmack just -- he just goes "Well, I told you if we weren't doing this by next year, I'd be disappointed, and I'm disappointed."

**Amelia Wattenberger:** \[laughs\] That's good.

**Jerod Santo:** Tells it like it is.

**Amal Hussein:** Yeah... It's probably best that I stay quiet, so...

**Jerod Santo:** \[laughs\] That's a good title for this show... "It's probably best if I stay quiet." After five rounds of Headlies, our new champion, first-time champion - it's Amelia. \[applause\]

**Amal Hussein:** Yeah!

**Jerod Santo:** And we'll be right back for some Pro Tip Time.

**Break:** \[00:47:00.06\]

**Jingle:** \[00:49:41.23\]

**Jerod Santo:** The award-worthy jingle...

**Amal Hussein:** I always think of like a dorky robot dancing whenever I hear that jingle...

**Nick Nisi:** Accurate...

**Amal Hussein:** It's like going up on the downbeat, you know... \[laughter\] Just kinda janky, uncoordinated... Anyways.

**Nick Nisi:** Accurate.

**Jerod Santo:** \[00:50:00.29\] It's kind of like that Steve Buscemi "Hello, fellow kids."

**Amal Hussein:** Not that you would particularly dance like that, Nick. I just meant the beats; the beats remind me of that. But anyways...

**Nick Nisi:** Full accurate...

**Amal Hussein:** \[laughs\]

**Jerod Santo:** Nick is a world-renowned karaoke artist, so I wouldn't sleep on his skills. This guy can sing...

**Amal Hussein:** What?!

**Jerod Santo:** ...so I'm guessing he can dance. If he can sing like that...

**Amal Hussein:** Dude, no way.

**Jerod Santo:** Oh, man...

**Nick Nisi:** Oh yeah.

**Amelia Wattenberger:** Can we get a demo?

**Amal Hussein:** Yeah, can we just do a karaoke podcast?

**Nick Nisi:** We should. We should do a karaoke segment.

**Amelia Wattenberger:** Oh, I'm busy that day... \[laughs\]

**Amal Hussein:** No, you're definitely showing up. Thank you, Amelia. \[laughter\]

**Jerod Santo:** We're gonna have to pitch it to the bosses upstairs... \[laughs\]

**Nick Nisi:** I went to JS Nation and React Summit in Amsterdam... I ruined my voice doing Kiss by Prince. It was epic, and amazing, and I loved it. It was the first time doing karaoke since the pandemic started...

**Jerod Santo:** Right...

**Nick Nisi:** So fun.

**Amal Hussein:** Well, I'm looking for a setup... So I'm going to hit you up for a recommendation, because I'm thinking I want to start having karaoke parties. It's like, winter's coming... I need some indoor fun activities to do with my husband and friends, so...

**Jerod Santo:** What's your go-to song, Amal?

**Amal Hussein:** Oh my God, there's so many...

**Jerod Santo:** I have to myself.

**Amal Hussein:** Fiona Apple, Criminal...

**Jerod Santo:** Oh wow, that's a hard one.

**Amal Hussein:** ...and like Landslide... Fleetwood Mac, Landslide.

**Jerod Santo:** Wow.

**Amal Hussein:** Yeah. I do have a nice singing voice... Like, when I actually try. I sing jokingly on this podcast, but I do like singing. And then another one is -- what's its face? Enrique Iglesias, Hero. That's like my sob... It's a very adorable song. "You... Can... Take... My breath away."

**Jerod Santo:** I'm here for it. Amelia, what are your go-to's?

**Amelia Wattenberger:** I'll just choose whatever is shortest. \[laughs\]

**Jerod Santo:** Whatever is shortest... Tequila?

**Amelia Wattenberger:** Yeah, exactly.

**Jerod Santo:** That's a good karaoke song... I'm not a big fan of Vanilla Ice's Ice, Ice, Baby. And I'm also pretty decent at Love Shack, you know...?

**Amal Hussein:** Nice...

**Jerod Santo:** I need somebody to be with me, because I'll play the male part, but I can't do the high-pitched Love Shack Baby part. I can do the low-pitched Love Shack Baby part. Anyways... Way off-topic. \[laughter\]

**Amal Hussein:** New segment, Karaoke Song \[unintelligible 00:52:12.26\]

**Jerod Santo:** What's your favorite karaoke song...?!

**Amal Hussein:** Yeah! TGIF.

**Jerod Santo:** That's pretty much what we're playing right now. Okay, Pro Tip Time. Amal, what's your pro tips?

**Amal Hussein:** Why'd you pick me first? Okay, my pro tip is actually gonna be a process; it's not going to be like a tool, or anything. It's something I've really started to do in my life, that has kind of really helped transform my day, as well as just my energy levels... I lead a very busy life and busy job... And it is keeping a daily journal. So what did I do, what am I what to do, what are some blockers... I have a little "rotonda" is what I call it, as well; I have another file that's just like ideas. Because if I don't write it down, it occupies mental space. And if I write it down, I can free my mind.

**Jerod Santo:** And the rest will follow.

**Amal Hussein:** And the rest will follow, exactly. En Vogue...

**Jerod Santo:** Sing it, Nick.

**Amal Hussein:** Yeah, sing it, Nick. Exactly. No?

**Nick Nisi:** I do know the song...

**Amal Hussein:** \[unintelligible 00:53:21.13\] Anyways, back to the pro tip... So daily journal is a really great way for me to decompress and detach from work. I just kind of really block out time at the end of my day to just get my thoughts down, and it's just really helpful. Then I can pick up the next day, and just start off where I left off, and I don't have to think about it.

And then I've started to do a little bit of -- I haven't done a good job of this yet, and I want to try to get better at it, but set like high-level goals, like "Okay, what are three things I absolutely have to get done today?" And then at the beginning of the week, "What are three things I absolutely want to get done this week?" So "By the end of this week, I want to do X", and "By the end of this day, I want to do X." That helps me prioritize, because I have a very big appetite for problems and doing things, and I think it helps me... I need to do a daily prioritization exercise, because I'm gonna always want to do it all.

**Amelia Wattenberger:** \[00:54:21.06\] Here's a question about your journal. I feel like I would have one and never read it, but probably the benefit is really in just writing it down...

**Amal Hussein:** Agreed. 70% of the benefit is writing it down. And then there's a huge benefit for me, just like "What did I do? Where do I pick up?"

**Nick Nisi:** Share the deets though. What's your gear? What's your setup? Do you use an app?

**Amal Hussein:** Yeah, a Markdown file, and I just do checkboxes...

**Jerod Santo:** Obsidian?

**Nick Nisi:** \[laughs\]

**Amal Hussein:** Yeah, Markdown file. That's like, Git controlled. I rarely push up and commit though... But yeah.

**Jerod Santo:** Why is that? Do you have a fear of commitment?

**Amal Hussein:** Yes, I do.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** No, I don't. It's really just -- I'm too busy, and I'm in a lot of meetings, so...

**Jerod Santo:** Fair enough.

**Amal Hussein:** But I don't have like a daily commit rule for this, even though I should. So yeah.

**Jerod Santo:** You could automate it.

**Amal Hussein:** Dude, I gave this tip to one of my direct reports and he set up a whole automation with macOS, and the thing just gets published automatically. I need to steal his setup, but I have not done that yet. And I should.

**Jerod Santo:** Alright, good pro tip. Journal it down. That way, when you start tomorrow, you know what you were up to yesterday, and get it going again. Nick, what you got?

**Nick Nisi:** Okay, so I don't have a lot of pro tips, and I'm pretty sure that I have said this one before... But I'm gonna pick it again if I have, because I actually wrote down, I actually blogged for the first time in two years.

**Amelia Wattenberger:** Oh, wow...!

**Nick Nisi:** So a pro tip - you can actually go further...

**Jerod Santo:** \[unintelligible 00:55:53.01\]

**Nick Nisi:** Yeah, exactly.

**Amal Hussein:** We could do a whole show on your blog posts. Just break it down.

**Nick Nisi:** Please, don't...

**Amal Hussein:** One whole hour...

**Nick Nisi:** Just breaking, eviscerating me on my writing... \[laughs\] No, it's about using git worktrees, and my git worktree flow, and why I love working with git worktrees. It's changed my life, and it's just so good. I do also go into some downsides, so I try and be well-rounded about it... But git worktrees - if you've ever had to do more than one thing at once, which I constantly have to do... Git worktrees.

**Amal Hussein:** Yeah, taking that Git knowledge to the next level is like the best thing that you could do for your mental happiness and productivity as a developer. Yeah, agreed.

**Jerod Santo:** Give us a quick TL;DR, Nick, on worktrees. What do they do for you?

**Nick Nisi:** Yeah, so all it does is like when you clone a repository, you're cloning it into -- it creates a working directory for you to like work on your code, and do all of that. Well, what I do is I clone a bare repository, which is how GitHub clones, or has the repos out there... They're basically the Git object database without a working directory. And then I shoehorn it to make that be like a home for me to put a bunch of working directories, so then I can have one that's called Main, and that's like my main checkout; so I always have like a clean state that I can check things from... And then I have one called Review, and that's where I like check out PR reviews to actually run the code, and do my due diligence on PRs... And then I just make one for each feature branch that I'm working on. And then I can be working on something, and they're like "Oh, we need to do a hotfix." I just create a new worktree real quick, do the hotfix in there... Don't even have to close my other editor. I just leave it open. I don't have to stash anything, I don't have to commit like a work-in-progress commit... I still do this all the time, but that's okay; that's a different story. And then I can just like switch over there, and switch back. It's fantastic.

**Jerod Santo:** Very cool. We'll link up your post, so that people can check it out in more detail. Alright, we're running short on time. I will give a quick pro tip, and then we will call it a show. Maybe the best show ever made. I'm not sure yet.

**Amal Hussein:** It's the greatest...!

**Jerod Santo:** I thought you were gonna keep going. I was giving you space.

**Amal Hussein:** I couldn't remember the song. It's like, that disco song... "He's the greatest dancer...", you know. So I was trying to do that, but then I forgot the lyrics.

**Jerod Santo:** "And there's no companion..."

**Amal Hussein:** Yeah, Oh, that one, too. That's another good one.

**Jerod Santo:** Yeah, that's a different song, but on the same wavelength.

**Amal Hussein:** I'm telling you, we need a new music segment for JS Party. We need to make this happen, Jerod.

**Nick Nisi:** I'm in.

**Jerod Santo:** We'll have to pitch it to the higher-ups.

**Amal Hussein:** Nick is gonna be in, and we'll find out he has a costume, a karaoke shirt, got a karaoke mic, with sparkles on it...

**Nick Nisi:** Get up a green screen, the smoke machine...

**Amal Hussein:** Yeah.

**Jerod Santo:** He may even have like a separate stage name that we don't know about \[unintelligible 00:58:39.03\]

**Amal Hussein:** Yeah. He won't respond to the name, Nick, because he has a karaoke name...

**Jerod Santo:** Yeah. \[unintelligible 00:58:44.20\]

**Amal Hussein:** Yes...! \[laughs\] "I'm not Nick, I'm Nicolas..."

**Jerod Santo:** My pro tip, real quick, is get a Pi-hole. Shut your piehole and get a Pi-hole.

**Amal Hussein:** What is a Pi-hole?

**Jerod Santo:** I'm glad you asked, Amal. I'm glad you asked. Pi-hole is an open source network-wide ad blocker that you can run on your LAN.

**Amal Hussein:** Oh, that Pi-hole? Yes.

**Jerod Santo:** \[laughs\] It's a piece of software that gets his name from the Raspberry Pi, although you don't have to run it on a Raspberry Pi. You can run it on anything that runs a Linux OS. And you set it up as your local DNS server, and it blocks ads and trackers at the DNS level for your entire network, instead of having to do it on a browser by browser basis, or inside of your Brave browser as an extension, or whatever other way. You just network-wide block the ads. You can also do other kinds of content filtering, you can tweak the dog-doo out of it, you can do whatever you want. It's really cool, it has a web UI... It's completely free, completely open source.

I set it up just the other day on our local network, and it's fun. They got charts and stuff, you can see how much stuff you've blocked... It feels good. Like, get out of here, ads and trackers! You can't even be on my network, man. So Pi-hole - get one, set one up. Worth it.

Okay... Question. Is this the greatest show ever made? Let us know in the comments, or tweet at us. Is it the worst episode of JS party you've ever listened to?

**Amal Hussein:** Ohh, not the worst...!

**Nick Nisi:** Certainly not...

**Jerod Santo:** Keep it to yourself, you know? We don't want to hear that.

**Amal Hussein:** No negative feedback! Only good.

**Jerod Santo:** We have lots of cool shows coming down the pipeline, tons of great guests, tons of good ideas, so stay tuned. If you haven't subscribed yet, please do subscribe. If you have and you enjoy it, share it with your friends. We always appreciate that. But that's our show for this week. On behalf of Nick, Amelia and Amal, thanks for partying with us. I'm Jerod, and this has been JS Party.
