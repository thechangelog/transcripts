**Amal Hussein:** Hello, JS Party listeners. It's me, your host for the week, my name is Amal Hussein, and this is JavaScript Party... Oh, wow. That sounds weird. JS Party, a weekly celebration of JavaScript and the web. With me today is someone who I've missed so, so dearly... It's been a while since we've been on a show together. We've both had a lot of life happening in different ways, but I'm just so happy that you're here now, and back... Good life, not bad life. But anyway, so hello, Nick. Welcome.

**Nick Nisi:** Ahoy-hoy, Amal. I missed you, too.

**Amal Hussein:** I missed you, I missed you a lot. So very excited. And we're back together again, talking about a really amazing topic today. We're gonna be talking about Core Web Vitals, and we're going to be meeting the new kid on the block... INP. Pretty mouthful to say it - Interaction to Next Paint. A lot of alphabets are going to be mentioned in today's show... No alphabets will be harmed, hopefully, in the making of the show, though... And so with us today are two very, very special guests. Really, it's an honor to have them here as kind of true shepherds of, I think, the Core Web Vitals and the project as a whole... Annie Sullivan. Hello, welcome.

**Annie Sullivan:** Hi. Nice to be here.

**Amal Hussein:** And Rick Viscomi. Welcome.

**Annie Sullivan:** Hi, thanks for having me.

**Amal Hussein:** Yes, happy to have you both here. So if you could tell us a little bit about yourself. You're both on the Chrome team at Google... Annie, you're a tech lead, or a technical lead, TL... I don't actually know what the T and the L specifically stand for at Google. Is it tech lead? Tech leader?

**Annie Sullivan:** Tech lead, yeah.

**Amal Hussein:** Tech lead, okay. So you're the tech lead for Core Web Vitals, which is huge, and amazing... And Rick, you're a developer relations engineer working exclusively on web performance, so you're really familiar with a lot of the community pains, and all the things. You do all the advocacy teaching... You have to deal with the rest of us. \[laughs\] So I think we're really excited to have --

**Rick Viscomi:** Sorry...

**Amal Hussein:** ...yeah, both of you here. So why don't you tell us a little bit about yourself? Annie, do you want to start?

**Annie Sullivan:** Yeah, so I'm a software engineer on Chrome Web Platform team. I lead the speed metrics team, who develops the Core Vitals metrics, and we also lead Chrome's work with the Web Performance Working Group on performance APIs. We have a new API called Long Animation Frames, but also existing APIs resource timing and navigation timing.

**Amal Hussein:** Very cool. And what's it to be a TL on the Chrome team? That feels a really hard job, specifically because you're the nerd boss of all the nerds. That's a big deal.

**Annie Sullivan:** It's so much fun. I think at Google you don't really get to be the boss of anyone, but you get to really help a lot of people... So my team is awesome and amazing, and they've got all these ideas, and just kind of helping them get everything running in the right direction, and enabling them to do really, really cool work. It's so much fun. For example, we \[unintelligible 00:03:50.23\] my team to figure out how to make long tasks more debuggable... And he came up with this whole real thought around that tasks aren't really the right breakdown, that we should be looking at frames... And he made this long animation frames concept... And really just being able to support him and getting it out there, it's really exciting.

**Amal Hussein:** Very, very cool. And you've worked at Google for 19 years? Is that correct?

**Annie Sullivan:** Yeah, it's been a long, fun journey.

**Amal Hussein:** That's amazing. Yeah, that's another podcast. We'll have to have you back and tell us about what it's to kind of ride that wave. I'm sure you have amazing stories. And So Rick, hello, and welcome. So please tell us about yourself.

**Rick Viscomi:** Sure. So I lead the web performance developer relations team, which is part of Chrome, and I'm basically responsible for helping developers understand how to make their websites faster, and succeed with Core Web Vitals. I work with Annie and her team, as well as the other cross-functional teams that together work to make the web fast.

**Amal Hussein:** That's exciting. It also sounds a very hard job, right Nick?

**Nick Nisi:** We're ultimate herding cats...

**Amal Hussein:** Pretty much. You're talking to all of us about our JavaScript, and needing to kind of trim some of that... So it's a hard job.

**Rick Viscomi:** Yeah, there is there an inherent tension that I feel developers when I say "We need you to make your website faster", it's "But what about all of the other things I need to do on my website? I need that JavaScript, I need that third party." So I guess my job is to convince them that there's that trade-off to make.

**Nick Nisi:** Is that what it usually comes down to, is "You should delete some JavaScript, and then you'll be good"?

**Rick Viscomi:** It helps... I think we have to really use data to make an effective argument, that you're using it in an inefficient way, or you're not using it at all, and it would help your performance if you removed it. My favorite thing to do is an A/B test, even if it's a local Web Page Test run, with and without something.... I find that that really opens up people's eyes to the costs of what they're doing on their website.

**Amal Hussein:** \[05:58\] Oh, God... I just had the most weird mental visual about performance auditors and advocates and engineers... In the sense that it feels we're in the matrix, and web developers are just addicted to JavaScript, and you guys are the agents that just show up and try to curb the addiction... Just being "Put it down! It's possible! You can do this! Walk away! Ship less JavaScript!"

**Nick Nisi:** The matrix version of the Bobs from Office Space.

**Amal Hussein:** Exactly.

**Nick Nisi:** "What would you say you do here, JavaScript?"

**Amal Hussein:** Exactly, exactly. Oh, my gosh. Well, Annie and Rick, we're thrilled to have you here, and we have a really packed show. We have a very ambitious agenda of talking points. We're going to hopefully talk about what are Core Web Vitals, and we want to dig into INP, which is going to be an official Core Web Vitals soon; March soon, right? Like, very soon, Annie?

**Rick Viscomi:** Weeks away.

**Amal Hussein:** Weeks away. Weeks away from being official-official, so \[unintelligible 00:07:00.16\] for that. And we want to talk about the ecosystem, and tooling, and rollout, and all kinds of stuff. How do you measure? How do you test? So lots to discuss over the next hour... But first, we wanted to kind of set some definitions briefly... Just because not everyone's familiar with the way things work under the hood for browsers. Right? So there's words main thread, event loops, long animation frames, which Annie used in her intro, by the way... It was probably the first time anyone's ever used long animation frames in --

**Nick Nisi:** It's very laughable.

**Amal Hussein:** Yeah, deep browser internals in their intro. Some pretty hardcore nerding out, Annie. But you know, so we want to kind of set some terms. So we're gonna first start with the first term before we dig in... So Annie and Rick, what's the main thread?

**Annie Sullivan:** So the main thread is generally where all your code runs when you run JavaScript, or when you add things to the DOM on a web page. And in general, the way that the programming model of the web has historically been designed - you run some code, and it just runs immediately and blocks all user interfaces. So you'll see a lot of stuff in performance guidance, "Don't block the main thread. Don't hog the main thread. Break up the main thread. Get off the main thread." And so we'll talk a lot more about what that means for users, and why all these things are important.

**Amal Hussein:** Yeah, great summary.

**Nick Nisi:** So what about event loops? How would you define that?

**Rick Viscomi:** Well, I think the best place to send anybody who wants to learn more about the event loop is Jake Archibald's talk, it's called "In the loop."

**Annie Sullivan:** It's so good.

**Rick Viscomi:** I still refer back to it; it's many years old, but it still holds up. It's also really effective with the way that it visualizes the event loop. You can literally think about it a wheel turning, and at any point you're at a different phase in the loop. One way that I could describe it is it is the process that the browser uses to accomplish work that is on the main thread. There are tasks that need to be executed, there are visual updates that need to happen on the screen, and things that happen in between at various times... So the event loop makes sure that the tasks keep happening, and the queue is consumed, and work happens in a timely fashion.

**Nick Nisi:** I always relate this to a video game loop, whether that's more confusing or less confusing. It makes more sense to me, because a video game constantly has to check the status of everything, and then issue updates. And the browser is doing a lot of the same thing.

**Rick Viscomi:** Exactly. Yeah, there's work to do, and then there are updates that need to happen... Sometimes there isn't work, sometimes there aren't updates, and the event loop just turns and doesn't actually do anything when the browser thread is idle... But eventually, things will come in. For example, a timeout script will just pop in out of nowhere and then get added to the task queue, and it will need to happen, and so on the next turn of the event loop you can discover that work and execute it.

\[09:55\] It really helps to think about the event loop in this way because of -- if you ever heard of the double RAF, the double request animation frame - why is it double? Why don't you just do it once? And it only clicked until I saw Jake's explanation of it, and where the request animation frame actually executes - right before the layout and paint work. And so by letting it turn twice, you can make sure that you update at the time that you expect. So it's a helpful model to think about the web browser and the main thread.

**Amal Hussein:** That was a really excellent summary, so I just wanted to say - points, Rick, for explaining that in a way that was much less scary... And hopefully, we can do a deep-dive on that with Jake. I think it's a great topic to dig into. It could take a whole hour really talking about it. Alright, so next on our list, what are long animation frames?

**Annie Sullivan:** Yeah, so going back to the concept of an event loop being a video game loop, right? A video game has a frame rate, and I think we forget a lot, a web page also actually has a frame rate. It's producing frames when things are animating... So on this video, every frame of the video, the webpage is producing a frame. When we have an animation, it produces a frame, when you interact with the page, it produces a frame. Your button gets highlighted, or whatever; the menu shows up - that's a frame.

The word frame is overloaded, iFrame, but here we're talking about an animation frame, which is just a type of frame continually playing. And a long animation frame is just one that took kind of too long; more than the user would have liked.

**Amal Hussein:** So it's beyond the threshold of what's considered -- what is it 60...? I'm forgetting the metric now.

**Annie Sullivan:** 60 frames per second would be a 16.6 millisecond frame. And I think depending on the use case, you can have a different threshold for a long frame. A response to a user interaction, an individual user interaction, all of our \[unintelligible 00:11:50.03\] says it should be within 100 milliseconds. So if somebody clicked in that frame, then really a long frame is over 100 milliseconds.

If you're trying to play a video game, it's only 16.6 milliseconds. But your movies run at a lower frame rate... So there's some given in what is expected there. And if you do have a game or a movie or an animation, you want to have a consistent frame rate. Be better to run at 20 frames per second than to run at 60 with an occasional giant hiccup.

**Amal Hussein:** Yeah, no, that makes a ton of sense.

**Annie Sullivan:** And long animation frames are just kind of a way to say "Hey, what happened when the animation frame was too long?"

**Amal Hussein:** Yup, that makes sense. Thank you.

**Nick Nisi:** Next on our list is another overloaded term in computer science and with browsers - responsiveness.

**Rick Viscomi:** Yeah, so I can take this one.

**Amal Hussein:** Yeah, and it's worth maybe noting that responsiveness means a lot of things in a lot of contexts, different contexts... And maybe we want to focus on what does it mean in this context?

**Nick Nisi:** Exactly.

**Amal Hussein:** In the context of today's conversation.

**Rick Viscomi:** Exactly. We're not talking about responsive web design, where if you resize your browser window, things fluidly fill in. So responsiveness in this context is about when the user does something on the page, how long does it take for the browser to respond to that input? And so you can think of interactions a key press, or a click, or a tap on a touchscreen, as the user intending to do something on the page. They expect something to happen near instantly. Annie mentioned 100 milliseconds is generally the threshold that we look at.

And so we want to make sure that the amount of work that happens between the user doing something and them getting any sort of visual feedback, that's just the next frame that paints, that happens as quickly as possible. Ideally, under 100 milliseconds, but as we'll get to later, the metric that we use to measure this is actually permitting 200 milliseconds or less as the responsiveness threshold.

**Amal Hussein:** Makes sense. And yeah, that was a trick question for me, because I was -- we're going to use the word responsiveness a lot, and I really wanted to make sure people knew what specifically we meant. So thank you, Rick. And so our last kind of definition that we want to kind of put up front is interactions. So what are interactions?

**Annie Sullivan:** \[14:09\] Yeah, so going back to-- there's different time limits you want in an animation frame, depending on what the user is doing. A user interaction, at the base level, is an interaction with the page. And we're defining this for the purposes of interaction to next paint, and for the purposes of Chrome Performance API as what we call a discrete interaction. That's a tap on a touchscreen, a click with a mouse, or a press on the keyboard.

When my team went to go and make a formal definition for interaction, one thing we realized is that there's actually two user movements there. You press the key down, and then you lift your finger up. And so when we're counting interactions, we're being super-careful not to penalize the web page if I took too long to lift my finger up. So there's some complexity there. But overall, it's just a tap, a click, or a key press. We're not including continuous interactions scrolling, because those are a lot more complicated to measure, and a lot harder for web pages to act upon, because we have this thing called GPU accelerated scrolling, where a lot of the scrolling isn't controlled by the webpage, if that makes sense. So Chrome is kind of under the hood handling that for you.

**Amal Hussein:** Wow. That's so cool. Yeah. I was curious why scrolling was left out. I was like, that feels like a huge area where we see a lot of jank, you know... And so thank you for explaining that. Alright, so we're gonna dig into Core Web Vitals now, just kind of at a high level. We'll get into kind of the specifics in a bit more detail next, but for now, can either view kind of broadly define what are Core Web Vitals, for the person who maybe has never heard of this thing? And why did this concept of Core Web Vitals become a thing in 2020?

**Rick Viscomi:** Yeah, so Annie, maybe I can take the what are they, and then you can give the context on how we got here. So Core Web Vitals you could think of as health metrics for the web. The word vital invokes that imagery of taking your pulse, or something like that. So we want to make sure that the web pages and web experiences that users have are good and healthy. And specifically, the performance metrics we look at are loading performance, and that is measured by the largest contentful paint metric, interaction responsiveness, and if you're watching this right now in maybe let's say March 2024 or later, that metric is Interaction to Next Paint. But historically, since the Core Web Vitals started, that has been the first input delay metric. And the third one is layout stability, which is measured by cumulative layout shift. So Annie, do you want to talk about how we got here with Core Web Vitals?

**Annie Sullivan:** Yeah, so I've been working on web performance for a really long time. Before I led Core Web Vitals I led performance testing and tooling for Chrome, and my team and a lot of other teams at Chrome, we're really trying to hit the best ground truth for user experience metrics. Historically, the onload event for the page has been the page load time, and that has a formal definition of being like the time when all the resources were loaded, and the DOM was parsed, and all of that. And it turns out that it doesn't necessarily correlate with what the user is seeing... So then we have all these different attempts to get closer. DOM content loaded is a bit closer, it turns out, but it's still a formal definition that's not based on the user. Speed index is really great, but we can't measure that in the field. First Paint is actually pretty well correlated. First Contentful Paint is better correlated. Largest Contentful Paint is even better correlated... But I think as you're listening to this, you're like "Wow, that's a lot of stuff." Right? And we were just kind of like putting all this stuff out there, other people were putting their ideas out there, which is fantastic... But if you try to dig into web performance and what's important, the fact that what we're trying to do - what we're trying to do is make pages load fast - is just totally overwhelmed by the fact that there's about 7 million ways to measure that. And so what we really wanted to do with Core Web Vitals was try and go back and go front and center, what's the user experience we're trying to measure, and also really center that around the user, and ideally we're measuring that in the field.

\[18:15\] When you just go and look locally on your phone, or your computer, generally as a developer we're quite well off, and things look great. Or maybe we're not including all of the production, third parties and stuff like that, so things look great. So we wanted to focus on key moments in user experience for real users. And that's why we really drifted towards this -- that's why we decided to do this Core Web Vitals program.

**Nick Nisi:** I'm curious how -- when we're thinking about this, the thing that always comes to mind immediately for me is something like Lighthouse in Dev Tools. I don't think that that's it. How do you actually interact with this stuff as a developer?

**Rick Viscomi:** The tools that a developer might use to measure their Core Web Vitals?

**Nick Nisi:** Mm-hm.

**Rick Viscomi:** Yeah. So Annie touched on field data. And what that actually means is collecting data from your real users visiting your website, and seeing how their experiences are distributed. Because there was no single number that can really describe the full, diverse spectrum of experiences. We assign things like percentiles. We'll say the 75th percentile INP experience is some specific number in milliseconds. But really, that's saying 25% of them are slower than that. So when a developer tries to debug their user experience, they'll test it locally. They might use a tool like Lighthouse, or they might use one of Google's services like PageSpeed Insights, that runs Lighthouse under the hood... Those tools I would more think about as "I know my site is slow. How can I make it faster?" Lighthouse will give you actionable guidance to say "Here are some opportunities we've identified." But where I think it gets confusing is that there's also a Lighthouse score. And developers love to gamify the score. They want to get the highest score. It's beating the game to get 100% in Lighthouse. And that metric, the score itself comes from the performance metrics that are under the hood in Lighthouse. So you'll get, for example, a Speed Index score, a total blocking time score... And all of these things together are computed into this aggregate, weighted Lighthouse performance score. I think part of the confusion is when that turns green, people feel their job is done... When really, you've just done all the things that Lighthouse could find that are wrong on your page, with whatever the test configuration was.

Maybe you just loaded the page and didn't interact with it at all. You didn't find out what the INP issues are. You didn't scroll down; if you did, maybe you would have seen all these layout shifts of things loading in below the fold. So that's what's really so important about field data, is to see what are the users actually doing and how are they impacted by these performance problems, that are almost lying in wait that the tooling might not expose to should you not think to go and test them yourself.

**Amal Hussein:** That's really, really great points, Rick. I mean, performance measurement is an art, and a science... But it really is its own field of study... Because you really need to basically be a real user, you need to kind of make sure you're testing all the scenarios, really thinking about devices, latency, all this stuff... What else is happening on that hardware... There's so many different factors. And Annie, thank you so much for walking us through that history of "Hey, there's so many different ways we can kind of gauge "Is this turkey cooked?" I can put a measure here, I can put a measure here... Where the right place...? And so I'm glad we've kind of landed on these three things, four things now.

How has this sort of changed over time? Because we have Largest Contentful Paint, which seems like it's been stable. Cumulative layout shift as well. First input delay seems to be the kid that's on the way out now, in favor of INP... And so what are their changes have happened over time since 2020? Is this in?

**Annie Sullivan:** \[22:04\] Well, those are kind of the major changes as far as what is the metrics that we measure. We try to keep that as consistent as possible. We find that the less changes we tell developers about, the more they're able to focus on the things that are really important. So we try not to make big changes.

We have really focused very hard on figuring out, without taking giant changes, let's make sure that we can listen to feedback from developers, and help them act on it. So most of the time when we take feedback, we're improving our tooling, and we're improving debuggability, but sometimes - like, right after the Core Web Vitals announcement, we got a lot of feedback from frameworks that were doing server side rendering, that if you have the LCP exact same rendered exactly twice, we count the second one instead of the first one. And for us, we were like "What? Why would you do that?" And they were like "Server side rendering, it's kind of a big deal", hydration... This is really important for performance, and if you want people to do this, then you need to have the measure show --

**Amal Hussein:** The second one?

**Annie Sullivan:** The first one is when the user actually saw the content... Yeah, the user saw the content, and then nothing has changed for the user... So in that case, that was really good feedback. And what we do when we make a change like that is we run a live experiment on Chrome Traffic,a nd we can see "How many websites' scores are actually changing?" And for that change, it was way less than 1% of websites were actually impacted... But it was really important for people that were trying to make this specific performance improvement to have the metric treat that correctly. So a lot of the changes that we make or the shifts over time are these really small and subtle things that impact a small percentage of traffic, but they really matter for developers.

**Amal Hussein:** That makes sense. So has there kind of been a case that your team has come across, where the numbers look great on paper, all these metrics look great, but the app still performs poorly? Is that a use case that you have come across yet?

**Annie Sullivan:** I think not entirely. At some point you can just have an app that's not great. It has great overall numbers for performance and user experience, but it's got misleading content, it's spammy... These types of problems still happen. The reason why we have three metrics and not one is because they kind of balance each other out. If you try to game Largest Contentful Paint by popping random stuff in all over the place, then you'll have bad cumulative layout shift. If you try to game it by freezing the UI, then you have bad fit, or bad INP. Rick, any thoughts there?

**Rick Viscomi:** Yeah, I was gonna say, it would seem like a bug if the app feels slow, but the metrics are all saying that it's fast... And that's really one of the guiding principles of Core Web Vitals, is that these metrics are grounded in the user experience. And as the metric gets worse, so does the user experience, and the other way around as well. So we can think that if the user experience is poor, and it's in conflict with the metric, we will try to fix that. That is something that should not happen.

**Amal Hussein:** Yeah. That makes sense.

**Nick Nisi:** Could it be gamified -- Ricky mentioned the scores are aggregates, some score that you mentioned was an aggregate; good is based on some percentile of how the web performs as a whole in that. So I'm just trying to think, could I get a job at WordPress, and make a really bad WordPress plugin that just brings down that score for a majority of the web, and then gamify it that way?

**Rick Viscomi:** Why? Why would you do that? \[laughs\]

**Nick Nisi:** To make my site look better, because it doesn't use -- I don't know, I'm just throwing out an example.

**Rick Viscomi:** So I think the distribution thing is about the experiences on your own site. It's not like where you stand in relation to other websites. It's really like everybody's in it just for themselves, and evaluated on their own performance.

**Nick Nisi:** Got it.

**Rick Viscomi:** So don't slow down anybody else to make your own site look faster.

**Amal Hussein:** Yeah. That's so funny. Yeah, Rick is like "Why?" Listen, we're developers. Okay? We're here to push your limits and boundaries. You guys are the platform.

**Nick Nisi:** If it can be gamified, it will be.

**Amal Hussein:** \[26:17\] Right. But speaking of incentives and pushing things forward... So Core Web Vitals do impact SEO, right? And for me, when that happened, I was just like -- you know that GIF, where you have the kid that's like "Yes!" That was me, because I was like "Finally, we have an actual business incentive that's going to hopefully drive performance work at all these various companies." Because for a very long time it was this uphill battle, trying to sell it to product and business. We need to work on performance; performance is important. No one is thinking about that. It's like this afterthought, where the app's shipped, and it's been months, and then there's this panic crunch to try to improve performance, because there's some user feedback coming in... No, we need to bake in kind of performance monitoring into our daily process, not -- brush your teeth daily, not once a year, right? You know what I mean? So can we talk about this tied to SEO? And I'm like "Whose idea was that?" Smart... Yeah.

**Rick Viscomi:** So there is a wall between Chrome and search, and so there's not a lot that we can say about the ranking incentive... I can quote for you verbatim what it says in the search docs.

**Amal Hussein:** Gosh darn it, Rick. I was hoping you'd leak some trade secrets, insider information, you know...

**Rick Viscomi:** You almost got me. There is a doc that I can point you to. The title of it is "Understanding Core Web Vitals and Google search results", and there's a sentence in there that I think is really clear. It says "We highly recommend site owners achieve good Core Web Vitals for success with search, and to ensure a great user experience generally." So I want to focus on the last part of that sentence, which is what I can talk about - ensuring a great user experience generally. And something you said, Amal, was interesting, around the business value of performance. And so my hope is that developers and business leads do see the intrinsic benefit of optimizing web performance.

Let's take search off the table for a second and just put that over there. When you make a website faster, it basically creates a more frictionless experience for users to use your website. If you want them to convert in some way, to buy your products, or to sign up for your newsletter, or listen to your podcast, then having a more frictionless experience is one way to ensure that you can improve your conversion rate. And so that's what we're trying to convey to people with some of the case studies that we've shared. Other people have succeeded at it. Other people have had their business metrics that they care about; maybe that's ad revenue, or other sorts of things that I mentioned... And so web performance is just one way of -- I've called it like greasing the funnel. If you have a marketing funnel, and you want to bring people all the way to the end, performance is that thing that will make somebody decide that they don't want to use your app anymore. So anything that you could do to ensure that they have a good, smooth experience is just good for you. You make more money, let's say, it's good for your users, they're happier when they're using your app, they're not rage-clicking around or anything that... And it's good for the web ecosystem as a whole, because it's seen as a more healthy place for people to do their business.

**Amal Hussein:** Yeah, I mean, it makes perfect sense. There's been numerous studies that show this very quantifiable data. "You you improve your performance by this percentage, and your revenue suddenly goes up by this other percentage", right? Especially for e-commerce websites, checkout flows, all kinds of things. Users are dropping off less... There's so many actual other incentives besides SEO... But it feels SEO is the thing that really stuck with a lot of businesses, and I think for me what's exciting is we've had this upward trend since I think Core Web Vitals -- right? Both being able to actually measure, and have some actual direction on "Okay, I've gotta work on this performance thing. Where do I even start?"

\[30:08\] So having these three horse heads or whatever, the alphabet soup, having that is helpful, and then also just being able to measure that over time, and then have business support... I feel like the web has been getting faster, despite JavaScript apps getting bigger.

**Annie Sullivan:** And I think that one thing that's been really cool that we didn't really think about is like Chrome and search recommend these user experience metrics for good user experience, right? There's kind of that alignment. And then we have this thing called the Core Web Vitals Tech Report, that kind of shows how individual platforms and things are performing on those... And those platforms, sometimes they say "Hey, we've been working really hard on this. We have great baseline user experience, just like Google recommends", and I think that's really exciting. It makes it easier to make good choices as a developer as well.

**Amal Hussein:** Yeah, absolutely. So I guess, do Core Web Vitals makes sense for every type of website? Specifically, I think about games, versus SPAs, versus MPAs, and static sites... The whole kind of gamut of web architectures, right? Do Core Web Vitals make sense all the time, in all of these use cases?

**Annie Sullivan:** So Core Web Vitals are designed to provide kind of like a baseline... And they are mostly focused on web content. So if you're reading the news, or an informational article, they're really great for that. And then where it's difficult to just give any sort of metric generically about the user experience is any sort of long-lived app. In a web app that's recording a podcast we probably care about the frame rate, and that's not part of Core Web Vitals So this app should be monitoring additional metrics.

But one thing that I see - I get to look at a lot of the broad data, and a lot of people that say "I have a long-lived app. The load time doesn't matter, because people spend a lot of time in it", and when I actually look at how much time is spent in apps, it's a lot less than you would guess. So I think if you do have an application, and you do think that Core Web Vitals aren't relevant, really actually monitor - how much time do people spend in it? How many times do people do page loads? And really do a good overview of that. And then also think about -- what we do on our team, we have Core Web Vitals and web performance APIs. And it can be a little bit difficult to measure Core Web Vitals in JavaScript, because we have these lower-level APIs. We give you information about every single interaction, not just the one that was the slowest. We give you information about lots of different paints. And the reason why we do that is what if your app is a chat app, and it involves people typing for hours? You probably are going to want to have a lot of metrics about how that went, differentiate key presses from taps and clicks...

And so if Core Web Vitals aren't appropriate, ideally you have a pretty hardcore application and you're doing your own performance metrics, but you can still use these APIs that underlie Core Web Vitals.

**Break:** \[33:12\]

**Amal Hussein:** So let's dig into these metrics, INP being the first one we'd love to kind of focus a little more on, since it's newer... So what is INP? INP is standing for Interaction to Next Paint. That's what's going to be officially a new Core Web Vital in the upcoming few weeks. So we're recording this February 28th 2024... So what is INP?

**Rick Viscomi:** I'll take it. So INP, you mentioned Interaction to Next Paint. It is the responsiveness metric of the trio. And the best way to think about it is how quickly the page is able to handle user input. It looks at all of the interactions that happen throughout the page lifetime, and it takes approximately the slowest one. So if a user has a really bad, slow interaction experience, you can generally think of it as that amount of time. And the thresholds that you can use to think about whether this is good or slow is 200 milliseconds and below is considered good. Anything over 500 milliseconds is a really poor experience. Things in between, we categorize as Needs Improvement.

There's nothing to say that you couldn't have a bucket even more into the tail of -- if it's slower than a second, then it's really, really bad. I find it some sometimes helpful to break it up that way. But I say it's approximately the slowest, because it does have some built-in tolerances to applications with lots of interactions, like those chat apps where you're typing and typing... So the slowest one in every 50 interactions is effectively ignored. It's kind of like a grace interaction. Maybe that was a fluke, it doesn't usually happen like that, maybe the user forgot about that slow interaction in the grand scheme of having hundreds of them... So we're not going to get hung up on the absolute slowest. There is going to be some built-in tolerance.

**Amal Hussein:** So what's a good score? And specifically, how are interactions like "I'm uploading a file on Dropbox, and that might take 10 minutes", for example. How do interactions like that get weighted against users trying to click a button and nothing's happening, you know?

**Annie Sullivan:** Yeah, so a good score is 200 milliseconds, and then there's a question of like "Well, if an interaction should be 100 milliseconds, why is 200 a good score?" There's a couple of reasons for that. Low-end mobile and very low-end network type things - still, the machine might not be capable of a response within 100 milliseconds. And then the second reason is that we have multiple interactions. So if you have a whole lot of user interactions, we're taking - not the worst, but almost the worst. And so if you're at 200 for almost the worst, most of those interactions are under 100. So that's the reason that 200 is a good score.

\[38:08\] And then what about very long interactions that take a really long time? I think this is where we get into what is Interaction to Next Paint really, really measuring? And it's right there in the name. I click, I tap, or I press a key, and the next paint, the next animation frame shows up. So I get some immediate response. And if you think about this - like, you press a button, and then the button appears de-pressed; that's like the key down response, and then you lift it up, and it shows that activated state. If you have a really poor INP, we've actually seen buttons where you click it, and then four seconds later the activated state shows. And that's what the UX actually says people want in 100 milliseconds. They don't expect any action that they've ever attempted to be completed in 100 milliseconds, they expect some feedback, like the computer is doing something. They expect that very quickly. And so that's what interaction to next paint measures.

So what if you do have something that takes a long time? A file upload, a request to the server... You should be showing user feedback and keeping the main thread free for the user to know that the site isn't frozen while it's doing that.

**Amal Hussein:** Yeah.

**Nick Nisi:** So it's really independent of what you're actually doing.

**Annie Sullivan:** Yeah.

**Nick Nisi:** It'd be more like if I click a button, and I immediately show a spinner, that satisfies this.

**Annie Sullivan:** Yeah.

**Nick Nisi:** And then whatever action I'm actually trying to do -- I could be throttling that to wait to see if something else comes in, for example, and I could throttle that for two seconds, but I would still be safe within that if I indicate to the user that something has happened.

**Annie Sullivan:** Yeah. And then a lot of people ask me "Well, what about if I just delay everything and I never respond to user interactions?" And the thing is, let's say you have a -- it actually is two seconds of solid JavaScript that you're not throttling, right? The user is going to click again. And then the second interaction is gonna get frozen, waiting for the first one, so you're still gonna get punished on INP, so don't do that. Actually break up your tasks, so you can show a real spinner and have it animate.

**Amal Hussein:** Yeah. And so can you walk us through like why this is better than FID, which is first input delay, and why this is -- it seems like this is replacing FID. Is that a correct assumption, or understanding?

**Annie Sullivan:** Yeah. So interaction to next paint - why is it replacing FID. When we started this whole Core Vitals program, we were number one more focused on mobile. It was going to be mobile-only, and we extended it to desktop, because it was so successful... And also, interactivity on the web was a lot worse. So we just wanted to have a baseline. Only about 80% of sites could meet that baseline at launch, where first input delay is only the first interaction. And the main thread is free enough that your interaction starts to get handled by the browser - that's all it measures - and it wants that to happen in a reasonable timeframe.

And a couple of really great things happened after the launch of Core Web Vitals. We extended the desktop, but also, developers at scale really fixed a lot of problems with first input delay being so slow. I think frameworks really changed the way that they do hydration, to allow it to be interrupted by user input. And this solved a huge percentage of the FID problems. Also, in Chrome we identified that - you remember how you're supposed to use a meta viewport tag, and that'll disable the tap to zoom, where you double tap and it zooms on the page? We identified some situations where developers weren't doing that, but we could stop doing the tap to zoom anyway. So we fixed that problem. And with those two problems being fixed, most of the interactivity at load, the delays before the input, were resolved. And we actually didn't expect it to go that quickly, or to be that few problems that needed to get solved. But we felt like there's still a big problem with interactivity on the web. If you do look at just the raw values of interaction to next paint, one in 100 pages, both on mobile and on desktop, have a freeze for over a full second when you try to click and just see the next frame. So we still think there's a lot of work to do, which is why we decided that we should launch this next metric and let developers know about these problems.

**Nick Nisi:** \[42:26\] I have another question... I'm just trying to clarify things for myself with this, but - let's say that my site has an awesome snowing animation that continuously happens. Does INP get confused by that? Or does that somehow -- like, because it's continuously updating?

**Annie Sullivan:** Yeah, so that's a really interesting question that has kind of like a deep technical background in Chrome. As the Chrome of performance team, and especially our graphics team is looking at "How could Chrome be better?", over the last years a lot of what we've done is we've said "Hey, you should just use CSS animations, or you should use composited animations." Basically, the compositor is able to make that snow happen no matter what's happening on the main thread. The wrong way to do it is to have some JavaScript code that slowly moves the snow around, and updates the DOM... If you do it the wrong way, when there is a user input, and it takes 100 milliseconds to handle, that extra 100 milliseconds is gonna get added on to your animation, right?

**Nick Nisi:** Yup.

**Annie Sullivan:** And then also, if your animation takes five milliseconds, it's going to extend the response to the interaction to like 105 milliseconds. And so if you did it the wrong way, we're going to count it. But what we do - if you do it the right way, and this is why it took a long time to develop the metric... You have a user interaction, and we in Chrome look at what changed; was there damage to the DOM, is what we say. Like, did your interaction result in a need for a paint? And then we track which paint that was, and we hook the interaction up to the right paint. So you can't speed up INP by doing a composite of animation, but if you do your animations well, and you use the compositor, then you're not gonna have any penalty on INP.

**Nick Nisi:** Okay, got it.

**Amal Hussein:** I'm just LOL-in, Nick, in my head, pretty, pretty hard right now... But that was an awesome question. And so I think some of the other benefits would probably be that INP isn't limited to kind of the first load, right? And FID was. Because you're not able to really measure much after the first load with FID, right? But people who are in longer sessions, there's all kinds of interactions that kind of unfold over time, and I feel like INP is able to kind of capture some of those in a more meaningful way.

**Annie Sullivan:** Yeah. And as much as I said before, your sessions aren't as long as you think they are. They are decently long. On average --

**Amal Hussein:** Annie, stop breaking hearts. Stop telling truths. Everyone has this fantasy of -- everyone's like "My users are spending hours on my app. Hours and hours. It's the first thing they do every day."

**Annie Sullivan:** They spend 90% of their time after the page is loaded. So 10% of their time is spent loading the page, and then 90% of the time is spent after the page is loaded. So they do spend time, and it's important to capture what's happening while they're using the page.

**Amal Hussein:** Right. That makes sense.

**Nick Nisi:** So Rick, what are some common INP pitfalls?

**Rick Viscomi:** Well, really anything that slows down your interaction; either the event handler itself, so when a user clicks and you have a click handler, how long does that take to run? And also, even if your click handler was instantaneous, it could still be blocked in this input delay phase, because your main thread was just busy doing other stuff. So I kind of look at it in these two different types of problems, where "Was your interaction slow? Or did it just happen to coincide with some other things going on?"

\[45:48\] I recently equated it to a road having potholes on it. It's the quality of the road that could also slow down the experience or make it a worse experience, but also, if your car is just really beat up, that could slow down your experience and make it worse, too. So technically, some things that could affect that are really huge DOMs. If you have a query selector in your JavaScript, and it needs to either look through the DOM, or affect lots of things in the DOM, it's a function of the number of elements in it. And so if you have a huge web page... The one that I look at most is the HTML spec itself to really test this problem out, because it's gigantic. If you try to test that page out, you'll hit every sort of performance bottleneck you can imagine.

Another thing is really just having too much JavaScript. It's okay if you need JavaScript to run your app, but it's good to think about it in terms of "What needs to happen immediately? What's the work that I could defer to later?" ...in terms of what is needed to render the initial view of the webpage? Things like setting up your analytics maybe just have a really lightweight thing to maybe batch up some of the interactions that you need to log back, or anything that's not going to affect the user interface itself could probably happen later. And that's also where we come to some of the optimization techniques, which are literally setting the priority of the work that you want to do on the main thread. And that's one way that you could tell the browser "Do this before that. This is really critical, because it affects the user interface. We need it to happen as soon as possible", versus "This is just something that could happen in the background. Whenever you get to it as okay."

So it's not that I want to downplay JavaScript on the web as like the bane of our existence in web performance; it's really important to having really rich experiences. But it's just about using it responsibly, and not overloading your page with too much JavaScript... Because even just to download and parse and execute it has its own performance costs and implications. And the compilation time itself is something that could trip you up, even before you get to the part where you have to execute it.

So it's really just being conscientious, and tracing your page, looking at what is actually happening on the main thread to understand it. Without it, you're really just guessing and going by feel. Like, "If I click something, is it fast? I don't know, it was fast to me..." Everybody kind of has their own interpretation of it. So what's nice is to be able to use objective measures and look at things objectively using tracing from the performance panel of Chrome DevTools to get a really good idea of what is happening at the lower level.

**Nick Nisi:** And is that what you mean by prioritizing things? There's not some built-in thing where I can say "This is not important. It can run whenever you're not busy", but it's more about looking at what is actually important and making sure that that just gets done or gets prioritized in your own unique way, compared to the other thing that's not important?

**Rick Viscomi:** Yeah, there are things that you can do as a developer to say "This is the point in my application code where everything that happens after this could probably wait till later. It doesn't have to happen now. I would rather have a paint happen to the screen to show to the user." And so you could add a yield point in your code. Something as easy as a set timeout with zero milliseconds is one way of implicitly yielding back to the main thread. But you could do more declarative things, to say "The work that I'm about to do is super-high critical priority", using something like the Post Task API from the Scheduler API. And then whatever you pass in there as arguments could be setting those different priority levels to make sure that the work is clear to the browser, what relative priority it should have with other things. Even the things that you don't explicitly say are low-priority, it will fit in with the other work that happens, like a timeout, for example; a timer fires and it has to do work.

**Nick Nisi:** I have never looked at the Scheduler API, so this is fascinating...

**Amal Hussein:** Yeah, it's a pretty cool low-level API, and I was actually gonna say, it was a fantastic explanation, Rick. Is there a work box equivalent to that, where there are some nice higher-level abstractions that developers can use to really, I would say more declaratively add this into existing web apps, frameworks, libraries? Because I think for me this is a missing link for us, specifically around our thinking and thought process around how we develop apps.

\[50:05\] Scheduling is not really top of mind. And it's not a capability or skills gap, it's just it's just not part of the culture, not part of the discourse. So we're talking about scheduling here... How do we get this to be more mainstream and more adopted? For me that's through something you download through npm, usually. It's the gateway drug. \[laughs\] So I don't know... Thoughts on this? I'm curious.

**Rick Viscomi:** Well, I have good news for you. There is something that you could download from npm.

**Amal Hussein:** Tell me.

**Rick Viscomi:** So there's a polyfill for the Scheduler API. Some of the newer features like the yield method are available in the polyfill. It'll fall back to something set timeout if needed, but yeah, you can install the polyfill itself and then get the benefit of these APIs by kind of using this wrapper around it. So it's available in the Google Chrome Labs organization on GitHub, under the repo Scheduler Polyfill.

**Amal Hussein:** And when the full API is going to be available across, kind of - is there a timeline for when this is going to be available on most browsers, or...?

**Rick Viscomi:** I could speak for Chrome... Yeah, I know that the Yield API is available in origin trial, and we're hoping that it will be available later in 2024 in Chrome stable.

**Annie Sullivan:** I would also try to think about whether your framework might be considering itself helping you schedule and prioritize things... Things like React Suspense boundaries, they're designed to help you say what's important, what needs to show up right away, what can be async... So I would definitely also look at what framework you're using and the documentation around that for scheduling and priorities.

**Amal Hussein:** That makes sense. Yeah, I think the React team had a whole -- yeah, they're building a scheduling API into React, which I thought was really ambitious, considering... That should happen in a browser, I think. It's much better for that to happen in a browser, because then that's not compute that you're fighting -- like, you're not fighting for resources on the main thread. You know what I mean? Annie's nodding, for those who can't see Annie's face.

**Annie Sullivan:** Yeah, I do think the teams are talking. The people that work on Chrome scheduling definitely talk to the React team, and I think that the TL;DR there is very complicated.

**Amal Hussein:** Yeah, I can only imagine. I mean, and kudos to them for even trying, to be honest. That's a very ambitious thing to try to do at the JavaScript layer... But yeah, glad to see that that spec is kind of moving along on the standards track. We'll put a link to the origin trial for folks, if you're interested in enabling that for your domain. So that'll be in the show notes.

So I think -- I don't know, anything else we want to dig into about INP, Nick? Any other burning INP-related questions? I mean, you kind of touched on this a little bit; I have one tiny one, which is - like, there can be many INP's on a given page. And let's say you have one really bad one. How does that affect your total overall aggregate score?

**Annie Sullivan:** Yeah, so in general there's almost always fewer than 10 interactions on any given page load... But some page loads do have a lot of interactions, and for those page loads, we basically - as Rick said earlier, we kind of throw out the top of -- we take the maximum up to 50, and once we get to 50, we throw out the top. Then once you get to 50 again, we throw out the last. So it's essentially the 98th percentile. And the reason we do that is -- like, if people are interacting with your page 50, 100, 200 times, they probably are forgiving some level of outliers. And so we do drop the outliers.

**Amal Hussein:** Oh, wow. That's so cool. Yeah, it's like a cool statistics problem to be solving. Yeah, so I think we can move on to -- we'll cover these really quickly, just for the interest of time... But LCP and CLS. So LCP is Largest Contentful Paint - so what is that, and what is content here? What counts as content on the page as well?

**Rick Viscomi:** \[54:09\] I think this is more of the traditional web performance metric that people would think about in terms of like a loading performance metric. So Largest Contentful Paint - there's three parts of that that we could look at. The fact that it's a paint metric means that it's user-centric; something actually happened on the screen that a user will notice. The fact that it's a contentful paint, to distinguish from all the other paints, means it's not just like the background color changed. To a user, that's like nice feedback, to know that the page is loading, but it's not why I came to this website. I didn't come here to see what background color you're using. I came here to read something. Or if I'm reading a news article, it's helpful to see that the hero image has loaded. And so it's the largest piece of content that we're using as the measure of the page has loaded to the state where a user might feel like it's ready to be used. This could be your h1 element, sometimes it might be a logo or a paragraph of text, or that hero image...

So we're trying to use this as a way of saying "The user feels they can use the page now. What they came here to do can be accomplished from this point forward." And it could change. So if you look at a filmstrip of how the web page is composed over time, sometimes you'll get an h1 showing up pretty much immediately, but that image takes a couple of seconds to load. So initially, you might get an LCP candidate of that h1, and then that is then subsumed by the image once it finally loads. So it's really the final LCP candidate that matters to us.

There are some corner cases where if a user interacts with the page while that image is loading, that's a signal to Chrome or any of the implementations of LCP that the user feels like the page was ready enough to use, so we're not going to look at any other LCP candidates after that point. This is why it really matters to look at field data or metrics from real users, because then you can see things the h1 as your LCP element some percentage of the time, versus the image... You can find really interesting user behavior patterns; like, if somebody arrives at your page from a deep link, you might want to prioritize the images further down the page. And one of the common patterns that we see is lazy-loading of images. And as a rule of thumb, we say "Well, you'd want to lazy-load everything below the fold." Well, in these corner cases, sometimes things that are below the fold are the images that need to load immediately. And so having that analytics data to know where the common causes of LCP are, or the elements themselves is really helpful.

So LCP is one of those metrics that I think a lot of people will immediately identify with as like "Oh, this is a loading performance metric. This is what web performance is all about." But it's important just to remember, this is one of three Core Web Vitals metrics, and it's really the combination of all of them that we use to say that this was a good experience on the webpage.

**Amal Hussein:** So I just was curious, why something under the fold would need to be -- could you just double-click into that? I don't think it was clear to me why we would need to prioritize an image that's below the fold. Because I think for me - like, when LCP hit the scene, it was really forcing developers to think about "Focus on above the fold, above the fold." That's when we really started getting obsessed about making sure that we're loading things and prioritizing what our users can see... And there's all kinds of rich metadata tags that started landing in the HTML spec, and script tags, and image tags... All kinds of stuff to kind of prioritize things. But yeah, when would you need to prioritize something that's below -- because it's slow, and it takes time, or something else?

**Rick Viscomi:** Yeah, I don't want to give your listeners the impression that you have to care about every image on the page, and they all need to load fast to cover your bases, in a way. I only bring that up as a corner case for the times where above the fold content might not be your LCP. \[unintelligible 00:57:48.10\]

**Amal Hussein:** I see what you're what you're saying. Okay.

**Rick Viscomi:** \[57:53\] So if you have a deep link, like somebody copies the link to a heading that's halfway down the page, and then there's a graphic there to describe like a piece of documentation or something - that's a case where unfortunately on the server side you don't know what that URL hash is, so you can't really prioritize it dynamically, but you might say "Well, that's going to be my LCP element 50% of the time. Most people arrive at this page from some other website that's linking back to it in the deep link down there." And so I might lazy-load everything but the top three images on the page, and then that one that's halfway down, because that's just what my analytics tells me happens to be the most common LCP candidate.

**Amal Hussein:** Yeah, no, thank you. I think that's what you just said the second time around... Because I'm pretty sure you said that the first time around, it just didn't click for me --

**Nick Nisi:** Same.

**Amal Hussein:** ...was the - it's the entry point. It's how we got here. If you're deep-linking to another part of the page, then you need to kind of think differently about what loads first. And I think that also plays into your URL strategy, and all kinds of things around how are you using query params to kind of communicate things, or headers... There's all kinds of ways to pass along that data to your server, but it has to be part of your strategy, or else you can't really action on it, right? Very cool.

Oh, man. Rick, you're making me think about stuff that's kind of -- because with performance it's first of all very humbling work, right? But it's like, there's this - how do you put it...? There's like level 1, 2, 3, and I feel like a lot of people , once they get started, they kind of zoom through 1, 2, 3... But then there's 4, 5, 6, 8, 9, 7. You know what I mean? And those are -- 8, 9, 7 is a funny ordering, but that's the stuff that I feel gets... That's where you hire performance experts, because it's actually really hard to do this well for complex web apps. And this is why performance - again, it's a field of study, it is a vertical within tech... It is something I think we need to kind of make more space for formally within organizations. It's hard to kind of master it all as just a "regular engineer".

**Annie Sullivan:** Well, we work really hard to kind of codify best practices. For example, that example that Rick came up with, one of the things that actually happened was a person in our team had a blog, and it was getting in this deep technical content in the bottom of the page. And they had their own kind of implementation of webvitals.js that was logging extra stuff, and then they were like "Oh, it's useful. It's telling me this", right? And then Rick's team added to webvitals.js, "Here's an attribution section." And it kind of encodes the things that we all found useful and helpful, as we're talking to lots and lots of people that are debugging this stuff, like "What is floating to the top?" So in this case, if you just look at the attribution part of webvitals.js, you can get a lot of ideas about what do people actually find helpful.

**Amal Hussein:** Yeah, no, that makes sense. Well, thank you both. You're both schooling us, so we appreciate... Us and hopefully lots of other people. So maybe we move on to CLS. Nick, what do you want to know about CLS? ...besides it's also easy to pronounce, compared to LCP, and INP, and FI-- I don't know. CLS feels like it rolls off the tongue a little bit more easily, you know...

**Nick Nisi:** Yeah. Well, I guess starting with what it stands for. I assume it's not Clear Screen...

**Annie Sullivan:** It's a Cumulative Layout Shift. And so going backward, layout shift is the kind of unit here... So what we're talking about is an unexpected shift in content as the page is being laid out. So we have an API that reports individually every time the content shifts. And it reports that kind of as a fraction of the viewport, essentially. Essentially, half your screen moved, that's a bad shift. 0.5. Whereas like a tiny little pixel shift could be 0.1. And cumulative means we sum up those shifts, because they tend to happen in bunches, in a really jarring pattern.

\[01:02:11.16\] And originally, cumulatively layout shift just summed over the page lifetime. But as we talked about before, some pages have really long lifetime. We've all had this meeting page up for like over an hour. And that's not fair to pages that are long-lived. So we rejiggered the algorithm, and we thought -- we actually did a ton of UXR, like when are these unexpected shifts the worst for people? And it's like when there's a big burst of them. And it might happen in a shorter or longer time period, but it's usually over five seconds. Either I'm trying to scroll through a news article, and it's like boom, there's a big ad. Or I'm loading a page and it's -- or there's a single-page up transition and it's doing this big, funky thing.

And so we basically ended up using a windowing algorithm, that kind of as shifts are happening within a small timeframe, frame to frame, they pile up into this big window. And then eventually, we cut it off at five seconds, and when we take the worst window of explosion of layout shift, and we report that as the score for the page load. And the reason we cut it off is sometimes people have animations that are counted as shifts, because they're injecting stuff into the DOM in a really weird way.

**Nick Nisi:** So is this where -- would you be, for lack of a better word, gamifying this metric by using a... What are those things called, like a skeleton loader, where it's kind of like gray boxes?

**Annie Sullivan:** Yeah, so that's really interesting... If your gray boxes are fully aligned to the content, the user sees this like pop, gray boxes, content falls into it... And when you go and talk to people that have pioneered grey boxes, they're like "There's user experience research that users really benefit from these boxes?" It actually is a user experience benefit... So it's really interesting, sometimes people ask me "Isn't somebody gaming this by like straight up making their pages load faster sometimes?" and I'm like "Well..." I do think there's a user experience benefit to that type of skeleton, as opposed to having the content shift in, like \[unintelligible 01:04:13.13\]

**Amal Hussein:** Yeah. I mean, instead of like an app shell, that's like a component shell, right? And ideally, you hopefully know how much space you need for that component... And so I get it. I think the reason why - like, when skeletons first became popular, like seven-ish years ago, the psychology that was cited behind it was that people are more comfortable when they when know what the shape of the page is going to be, you know what I mean? So they're just like "Oh, don't scare me with a blank page with a spinner, and then completely change everything on me. No, if you're gonna show me a loading state, show me what I can expect." And they're like less turbed by content changes if you give them boxes first. I'm sorry, I don't know why I find this hilarious.

**Annie Sullivan:** Yeah... But if you think about seven, eight years ago, what we're actually seeing is mobile phones showing up in places of the world that people didn't have internet before, website properties that are international... Trying to give these people a good experience with a lot lower connection speed, right? And so those boxes really do help. And that's where that UXR is based.

**Amal Hussein:** Right. Yeah. I just -- no respect. Sorry, no disrespect. Not a Freudian slip. No disrespect to skeletons. Skeletons are great. And I feel like Slack was one of the -- was it Slack, Figma, Envision app? I don't know, one of those companies was one of the first that I think really kind of started doing conference talks on it, and pioneering it... Yeah, I mean React built the whole API around it, Suspense... Angular is doing the same now, deferrable views... And so yeah, it's exciting, exciting stuff. Happy users is what we want.

\[01:06:10.15\] Okay, so we could probably be talking for another three hours, y'all... But we have limited time, so we're gonna kind of go into crunch mode here, and try to land this plane gracefully... So Rick, I'm really curious if we can give folks some actionable items. So we've talked a little bit about tooling, measurement in the field versus "lab data" from tools like Lighthouse, PageSpeed tests etc... So how do you now kind of - instead of just doing this one-off measurement, how do you build this into your daily workflow as a dev team, where you are tracking these Core Web Vitals in your CI builds, and you've got maybe dashboards, or you've got reports going to your VPs? I don't know, but the whole point is, brush your teeth every day, not like when your SVP calls the panic button because some bad user feedback came... Right? So how do we get this implemented into our workflows as engineers?

**Rick Viscomi:** I love that analogy... I've also heard it called like eating your vegetables, having good web performance hygiene... So if I could just give one piece of advice, it would be go check out the documentation on web.dev. We have every sort of guide and resource you might want to look up about what are the Core Web Vitals, how do I improve a specific metric? What tools should I use? So if there's just one entrypoint, make it that.

The rest of your question could be kind of complicated. I know that we're wrapping up, so I'll briefly summarize to say "You need to know if your website has a performance problem, first and foremost, before you dive in and start optimizing everything." The easiest way to do that is using the Chrome user experience report. I know that sounds biased, like "Hey, the easiest thing is to use something from Chrome." But I really do think that it's extremely -- it lowers the barrier to entry to getting real user data. It's free, first and foremost, it's really fast, and it's available for over 10 million websites. All you have to do is go to PageSpeed Insights, PageSpeed.web.dev, type in your URL, and we'll tell you how fast it is. At the page level, if it's available; if not the origin level, which is the whole website. And so we can tell you how your three metrics are doing, how the overall assessment is... And that is really a good way for you to know as a site owner whether you have work cut out for you or not.

You could also use a tool Search Console. So they have a Core Web Vitals report, and it's also broken down by the metrics. And I'm pretty sure Search Console will also notify you if you have a problem in any one of these metrics. So if you're not actively looking at it, then they'll reach out to you and make you aware of it. But honestly, it's what you said earlier about just like doing the right thing from the start to make sure that you're not in a space where your users are already having poor experiences. And so the local testing is really where it starts, in an ideal world.

So once you're creating your application, or adding new features, doing testing locally to make sure that you're not making the experience significantly worse. So doing things like A/B testing, doing tracing locally, using things like throttling, just recognizing that the device you're using is not necessarily the device your users are using, to make sure that you're putting yourself in their shoes and just trying to slow down your network artificially, or use a smaller screen size, or slow down your CPU in ways that will more realistically represent the user experience, just to make sure that you are catching these things before they happen.

One tool that I really to use is the Web Vitals Extension. So if you install this in Chrome, it will log to the console in Chrome Dev Tools what the Core Web itals performance metrics are, at any given point. And it also includes this attribution info that Annie mentioned earlier. So you can see not only how slow was it, but what was causing it to be slow, and all of the different component phases. So that's kind of the quick answer, but there's so many other tools that I could recommend, from different run tooling providers, to different lab tools... There's just so much in the web performance space to help developers. It's really just starting with a good piece of documentation that contains the wider landscape, and for that I'd recommend web.dev.

**Amal Hussein:** \[01:10:10.28\] Very cool. And hopefully - you know, we want to make space on this show to kind of talk to these different companies that produce these performance monitoring tools, have them on the show... There's some really cool stuff that they're doing. For example, PageSpeed Test has been on my list for a while. I would love to kind of talk about that. Speed curves, another really cool -- an amazing tool that I would love to kind of have on the show. So thank you so much for sharing that, Rick.

There's no magic bullet, right? I think that's another takeaway here. Performance work is constant. It's like cleaning your house. It's neverending, and there's no magic bullet. So I think sometimes we're reaching for the magic bullet, and we just have to budget for the work instead.

**Rick Viscomi:** Yeah. I'd also emphasize that it's kind of like a team effort. It's up to everybody in the entire web ecosystem to make performance better, from you, the site owner, to the framework you're using, or your CMS, the browsers that your users are on... There's a lot that Chrome is doing to make the web faster across all these millions of websites... But everybody needs to understand and care about the performance metrics for the entire ecosystem to be lifted.

**Amal Hussein:** Makes sense. So for websites that are behind an off wall, how does the Web Vitals report help those users to surface? I would imagine that they can't, but you tell me.

**Rick Viscomi:** You're asking if there's -- I don't know, like facebook.com, where you have to be logged in to experience it, are we able in a dataset like Chrome User Experience support to measure those experiences? So the answer is yes.

**Amal Hussein:** Nice.

**Rick Viscomi:** At the origin levels, all of those experiences will be bubbled up to facebook.com. And you could see what percent of your LCP is considered good from all of those other user experiences. What you can't do is get page-level insights in the public dataset, to say "How did a user perform on Rick's profile page?" That's just a little too much information, and it's not publicly-accessible, the webpage itself, and so therefore the data that's made available by Chrome is not either. But this is one of the limitations with public data, which is why private, first-party ROM is so important. Not only because of the visibility of data, but the depth that you can go into as well to be able to slice through all these diagnostics, and also the dimensions that you can look at between different user populations... So it's really necessary to not just see "Am I fast or not?", but why is really the most important question. And for that, you need a lot of data, or good tooling.

**Amal Hussein:** Yeah, that makes make sense. And this is why third party tools exist; or as you said it, first party tools, first party for the app. And you look like you wanted to say something, so...

**Annie Sullivan:** No, I just get really excited about all the different tools.

**Amal Hussein:** Okay.

**Nick Nisi:** I think it's interesting that so many of these tools that both Rick and Amal have spatted out, I didn't know about any of them... And I've been building for the web for a long time. So I've unintentionally had blinders on to a lot of these things... Which is probably very similar to a lot of developers as well. So with that, what we've been talking about has been very Chrome-specific, given the audience here; it very much makes sense. But how does this translate over to other experiences in other browsers? Or does it?

**Annie Sullivan:** Yeah, so this is a really good question. My team has really worked hard to try and make it so that every Core Web Vital is based on an open web standard. The standards are all on the Web Performance Working Group. And we are seeing -- Mozilla has done some really fantastic work over the last few years. They've got big chunks of the event timing API implemented, and they've got Largest Contentful Paint API implemented... So you can get Largest Contentful Paint in Firefox now. We're super-excited about that, and it's really cool.

\[01:14:11.17\] One of the things that we do internally in Chrome is we try to improve Chrome's performance on LCP, and Firefox is working on that as well. And that's really cool to see, all the work that they're doing on that. Apple and WebKit are not really as focused on web performance APIs, and I think that's one thing that we try to communicate to people... There's a reason there's multiple engines, right? We only control the Chromium engine. And so if you as a web developer really care about WebKit, supporting this, you need to go tell them, because they don't do what we tell them, otherwise we would just be one engine. So I if people want to see this in WebKit, definitely let the WebKit team know.

**Amal Hussein:** I'm not on speaking terms with WebKit right now, but in general, yes... \[laughs\]

**Annie Sullivan:** I mean, their DevRels ask periodically on Twitter, things that, like "Well, what do you want to see?"

**Amal Hussein:** Yeah, I'm just kidding. It's not WebKit's fault. It's just a business decision. I'm referring to the whole EU Web Apps debacle, which - whatever, different show. So speaking of other browsers, and just in general I'd say community critiques - so I wouldn't be doing my job if I didn't ask a hard question to both of you, which is... Obviously, Google's business is the web, right? And a healthy web is good for Google's business. And luckily, that's a great incentive to have for users. That's really -- for the most part, there's alignment there for users... And when I think Google pushes what I think are really great ideas, things like Core Web Vitals, sometimes there's pushback from the community, like "Oh, Google is just trying to do Google things. Google is just trying to be a boss of the web", and this and that... And so I'm just curious, as folks that clearly I think have their hearts and minds in the right place, and their incentives align towards user experiences, how do you all kind of -- what's your response back to that kind of criticism from folks in the community, that Google's being Google, and Google wants to do Google things?

**Annie Sullivan:** So I've been at Google - I think I mentioned before - 19 years. I'm here because I'm able to do really big, ambitious projects, and I'm able to do those things that really align between me and Google improving the user experience on the web. But at the same time, over the years, as we see different types of criticism, I think it's really important that because we're able to do such big, massive things, that people do have voices and criticism, and that they're able to kind of publicly say, either in a standards body or just in their Twitter feed or whatever, that they're not happy with us, that they think we should do things differently. We take criticism really seriously, and we think it's really important to understand and to process it and to take it into account. So if people are critical of Google, I'm happy to listen.

**Amal Hussein:** That's great. Spoken like a good benevolent leader. I was about to say dictator, but I was like "No, wait a second. That's not right." \[laughs\] That's awesome. That's great, Annie. And yeah, I think it's a sign of a democracy. I love the White House Correspondents Dinner, where everyone gets to openly make fun of the President, while the President is also in the room... That's just the sign of a healthy democracy. Right? So ultimately, it's really important to be able to push each other, and hold each other accountable, and be checks and balances for each other... Because no company, no situation, no entity is perfect. We're all better together. So thank you for that amazing answer. And so Rick, do you want to kind of close us out with a very Kumbaya question? Which, by the way, earlier when you said -- you said "If there's one piece of advice I'd have to give to everyone...", I fully was expecting you to say it's "Wear sunscreen." \[laughter\]

\[01:18:02.27\] I was so confused when you were talking about performance things. I was like "Wait, what? What about sunscreen?" But Rick, what I want to know is what do you want everyone to know about why this is important? Why this monumental task, this humbling work of web performance is never ending; what feels thankless work, but it really isn't - why is this important? Why should we care? Why should we care and why should we take on the work of making our other stakeholders at work care?

**Rick Viscomi:** I think to properly answer that I have to talk about the macro, and then the micro. So at a macro level, a faster web is really good for everybody. All of the players in the ecosystem benefit from a healthier web. And so on a particular website, when you have a faster site, you're going to get more conversions. And that's a really effective way to convince people who care about web performance, or might not care about it yet, to invest in it. And we have all these case studies that we can point out. I don't think we've dropped the website wpostats before, but that is a great place to just send somebody who's maybe on the fence to convince them web performance does drive more user engagement and conversions. And that's why we're all here, doing business on the web, whatever it might be. And I'm using the term business loosely. Even the bespoke personal blogs, or whatever it might be, we're just trying to share content with each other. And so performance is one of those metrics of user experience, and we want people to be able to consume our content in as frictionless a way as possible.

And it can come down to other things like the design of the page, how accessible it is... And in some ways, performance is a form of accessibility, because when things are prohibitively slow, users cannot access it. So that's really the micro level, is we're trying to provide the best possible experiences for every single user who's visiting our site. We're going to do the best we can. It's a really hard job to get fast websites 100% of time, but that's why we have a 75th percentile. We're going to do our best. It'd be great if we could get P90, P100, or P99 even, but I think we just have to make every possible user experience as fast as it can be. And we don't know unless we're measuring it, to be honest. So we need to measure these user experiences, and then share best practices with each other.

If you have a successful case study about how you made your website faster, and all of the business metrics that you saw get faster as a result - or sorry, not faster, but better as a result - share that with the community, because that is really valuable information, that will also convince other people. And then in this viral effect, more and more people will care about performance, and not only understand why it matters, but how to improve it. So that's the best piece of advice I can give, is to share your knowledge, share your experiences.

**Amal Hussein:** And sunscreen. Right?

**Rick Viscomi:** Eat your vegetables and put your sunscreen on.

**Amal Hussein:** So well said, Rick. And a rising tide lifts all boats... Just such a great note to end on. And it really does take this collective community knowledge to improve. That's the really humbling thing about the performance space, there's so much to it that you realize that it takes a village. It takes expertise from different people, it takes -- there's no hero in this story. We all have to chip in. And so thank you both so much for educating us. Nick, didn't you learn a lot? I learned a lot.

**Nick Nisi:** I sure did.

**Amal Hussein:** I learned a ton.

**Nick Nisi:** Yeah. There's a lot that I need to go dig into.

**Amal Hussein:** You and everybody else. You are not alone here, Nick.

**Nick Nisi:** I need to optimize my snowfall.

**Amal Hussein:** \[laugh\] Yes. No JavaScript for that. Yeah, and actually, speaking of optimization, Party Town. That's another show, that's another really cool tool. I don't know, it's like black magic. They've been on my list for a while, that I'm like "I really want to have them on." But anyways, so thank you again, Annie and Rick. We're gonna have lots of links in the show notes. Thank you all so much for listening. Where can folks reach you if they want to kind of get in touch, or if they have questions? Annie, do you want to start?

**Annie Sullivan:** Yeah, I'm @anniesulli on Twitter, and Threads, and LinkedIn... Yeah, I think that's the best way to reach out. Rick?

**Rick Viscomi:** I'm @Rick\_viscomi on Twitter. That was during a time where I didn't know what the naming convention was for handles on Twitter ten years ago.

**Amal Hussein:** I was gonna say, that's so corporate. I love it. It's like enterprise Rick on Twitter. Love it. Alright, everyone, have an amazing rest of your day. Cheers, all!
