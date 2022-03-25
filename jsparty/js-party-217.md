**Jerod Santo:** Oh yes, friends, you know what time it is... It is JS Party time once again. I am Jerod, and I am joined by my good pal, Nick Nisi. What is up, Nick?

**Nick Nisi:** Hoy-hoy! Hi, Jerod.

**Jerod Santo:** We have a special guest today, don't we?

**Nick Nisi:** We do!

**Jerod Santo:** He's a return guest, he's a very special guest. He's a long-time friend of ours and a co-organizer of the Nebraska JavaScript meetup, and the world-renowned NEJS Conf, which is now on hiatus/retirement. Who is this mystery man? It's Zach Leatherman. We are going to talk about what you're up to, Zach. So Zach is a person, he works at Netlify, he's an online guy, he's been doing web work for many years, and is the creator/lead maintainer of Eleventy, which is a very cool static site generator.

Zach has been on the show a while back with Nick and Divya, talking about static sites. I think that was in the before times, like 2019. Maybe even before our final NEJS Conf that happened. So it's been a minute...

**Nick Nisi:** It was, it was.

**Jerod Santo:** Was it before? Yeah. I think we probably teased the NEJS Conf, sold some last-minute tickets there on that episode.

**Zach Leatherman:** Oh, that's true. Yeah.

**Jerod Santo:** But nothing to sell here today.

**Nick Nisi:** Well...

**Jerod Santo:** We're here to talk about Eleventy, well.

**Zach Leatherman:** We need to make YouTubebucks.

**Nick Nisi:** I'm kidding.

**Jerod Santo:** YouTube bucks, yeah. \[laughs\] So where shall we start? Let's start with Eleventy, what it is, why you created it... Take us back to the beginning. We don't have to go deep into the whole history, because I guess we have that other episode... But tell the folks what Eleventy is, and where it's been and where it's going.

**Zach Leatherman:** Yeah, Eleventy is an open source project that I started in 2017, I think... So it predates me working at Netlify, it predates a lot of the things in my professional career. Originally, I just created it as a way to facilitate making websites for myself. Some of the original NEJS Conf websites were built using Eleventy, and my personal website I think was one of the first ones that was launched with Eleventy. Even before that, it was a Jekyll site, and even before that it was a WordPress site. So this is a very old website, a very legacy site that I had, and I've been maintaining since 2006, or something like that.

So it really needed to work for projects that were already sizeable, and had already a bunch of content on them. So it's kind of a tool that was created to facilitate my own itch, if you will. And a lot of things came from it since then, but... Yeah, it was really just for me originally.

**Jerod Santo:** Yeah, the story from there really is interesting. I have a small confession to make... So I guess our relationship predates Eleventy as well. We've been online acquaintances, friends and co-organizers for a long time, so I've always been watching what you're doing, interested in what you're doing... And when Eleventy first came out, I didn't get it. I was like, "Yet another static site generator. There's Hugo, there's Jekyll, there's JavaScript things..." and I was like, it's cool that you wanna scratch your own itch, but I was just kind of like "Is anybody gonna use this?" Even though I liked it, because I was friends with you, and I was supporting, but I was secretly like "I don't get it. There's so many of them." And I couldn't be more wrong with the success of Eleventy. Everybody loves it.

What do you think attracted folks to it? It's simple. It's trying to be simple, I know that... But a lot of these projects you kind of figure out what they are along the way, and I'm sure you have done that, but what do you think attracted folks to Eleventy that aren't you?

**Zach Leatherman:** That's a very good question. I think I had some of the same surprise going into the project as you did, just in terms of people wanting to use it. There's a couple of different reasons. The popularity of JAMstack I feel like facilitated a lot of Eleventy's success, and sort of hitching our wagon to Netlify in that regard. I think another one is the decrease or the -- I don't wanna say the final stage, but a lot of folks are moving off of Jekyll, and Eleventy and Jekyll share a lot of architectural roots. Eleventy was sort of based on Jekyll. I love Jekyll. Jekyll is amazing. And I wanted something very similar in the JavaScript world.

**Nick Nisi:** That was really what caught my eye with it, because I had built stuff with Jekyll before, but I didn't like that I totally didn't understand Gemfiles, and Ruby, and that whole rigmarole. And then I saw everyone getting really excited about things like Hugo, and I was like, "Yeah, but I don't really wanna learn Go to run my website." And I was just dabbling with just like a custom, homegrown Gulp script that would put things together. Not that my site has anything on it or is remotely popular, but it was just fun to play around with.

That was what caught my eye... I remember specifically talking to you, I think \[unintelligible 00:06:59.21\] one time, about this side project. I don't even know if you called Eleventy yet. But you were like, "Yeah, it's kind of like Jekyll, but JavaScript." I'm like, "Oh, yes! That sounds amazing."

**Zach Leatherman:** Yeah, and I feel like a lot of the JavaScript static site generators before didn't really follow a lot of the Jekyll architectural patterns that were really good. A lot of them tried to reinvent the wheel from scratch, and I think that I appreciated and saw the value in what Jekyll provided, and wanted to improve on that if I could.

**Jerod Santo:** I think there's a lot of value in just taking good ideas from one place over to another... And then of course, over time, you start to find out what could be better, and you grow, and you change it and you adapt it. But just saying "I like this thing over here. I'm gonna take it over to this other place where I'd rather hang out, and build a similar thing." And it benefits all those people who maybe they didn't know Ruby, or know what Jekyll was, and you did, because that was like the previous thing, that everybody was using Jekyll for probably a decade, whether you wrote Ruby or not.

And then, like Nick said, Hugo came along... Of course, since then, Gatsby -- and there's lots of other things that have gotten VC-funded... There's a lot going on in the space. But even though I was kind of side-eyeing, like "Oh, a little bit of a wheel reinvention in JavaScript? Cool." I loved the name from the start. That was the thing, like... Is Eleventy like a Will Ferrell thing, or is it a -- or maybe from Austin Powers, like "eleventy billion dollars"? Where did the term "eleventy" come from? I feel like it's like a comedian that made it popular, but maybe not.

**Zach Leatherman:** There's a couple of different pop culture things that I feel like have overlapped with the name... But originally, for me it came from a story that my grandma told me about when I was younger; when I was learning how to count, I would say "One, two, three, four, five, six, seven, eight, nine, ten" and then "eleventy, twelvety, thirteenty..." And it was just a confusing way that I used to count, because the numbers eleven and twelve don't make sense in English...

**Jerod Santo:** Right. So you've been working on this your whole life then...

**Zach Leatherman:** Yeah, based on that one story... \[laughter\]

**Jerod Santo:** Yeah, exactly. I'm not sure why it resonated with me. I thought it was like a -- maybe it's a line in some sort of a movie as well, but as soon as I saw Eleventy, I felt like it was familiar and yet cool.

**Zach Leatherman:** It's in Lord of the Rings...

**Jerod Santo:** Oh, it's Lord of the Rings.

**Zach Leatherman:** It's in Lord of the Rings, they have elevenses, which is like the hobbit's second, third breakfast, or something...

**Nick Nisi:** Yeah...

**Jerod Santo:** Right...

**Zach Leatherman:** There's a couple of different, very similar overlaps. And it is actually an Italian clothing brand, too...

**Jerod Santo:** Oh, wow.

**Zach Leatherman:** ...which cracks me up, because it's like a premium... Like, to me the name is a little bit jokey, right?

**Jerod Santo:** Yeah, silly.

**Zach Leatherman:** It's kind of whimsical... But yeah, this Italian clothing brand is top-tier, very expensive clothing if you go out and search it. So it's not really the same vibe that I was going for.

**Jerod Santo:** Have you ever issued them a DMCA Takedown request? \[laughter\]

**Zach Leatherman:** No, and I'm hoping that they don't do the same to me.

**Jerod Santo:** Right. Moving on.. Please don't go after us, expensive Italian clothes brand...

**Zach Leatherman:** I mean, I have the outlet in that I spell it differently, but you know... I can always just go with the 11ty, but yeah...

**Jerod Santo:** Right. Which is cool, too. There's a cool factor there, for sure. So tell us about the meteoric rise in usage... Because all of a sudden -- I mean, I think because it was easy to get start with, a lot of people started building their first website with it, or their new side projects... And it seems like for me as an observer it was just a fun, easy thing to use, and so the UX, if we're gonna get serious, was high-quality. So people liked to use it, and they liked to talk about it, and because it was alongside their new site or alongside their new project, it's like, "By the way, built with Eleventy." And I think that kind of gave it a head of steam. Do you agree with that, and was there anything else that you think contributed to it?

**Zach Leatherman:** I mean, yeah, I would say that for a certain style of site... So there are a ton of frameworks that have really gained in popularity - you kind of mentioned it a little bit earlier - and frameworks that have taken investment. Gatsby and Next.js come to mind very specifically... And Eleventy, for whatever reason, has been able to position itself as the alternative to those. And it's mostly just in the way that the framework is talked about. I don't know if I really set the tone in the single-page applications versus multi-page applications architecture discussion, but the big thing about Eleventy for me is that it wants to exist in that same automation space, but not in the overly-automated, solving-too-many-problems-for-you space, that can get into leaky abstractions.

There's a lot there, but I would say the huge popularity of these spa-based frameworks, single-page application-based frameworks, and an alternative to that, where it gives you more control over the output, in terms of Eleventy doesn't do anything that you don't want it to do. We don't inject even a meta-name generator. You can't tell that an Eleventy is an Eleventy site unless you have access to the source code to generate the site.

So if I go to a website on the internet that was built with Eleventy, there's no guarantee that I could even know that it was built with Eleventy. And that's a much different architectural idea, in stark contrast to your Gatsbies and your Next.js'es, because they have so much client-side bulk associated with the sites that you generate that it's very easy to tell how those were made and what they were made with.

**Jerod Santo:** Nick, did you rebuild your blog in Eleventy?

**Nick Nisi:** I did, yeah.

**Jerod Santo:** How did that go?

**Nick Nisi:** I got tired of not remembering how Gulp works... \[laughs\] And there was something fraught with the way that I would sync things up, because I was just shelling out to rsync to move things over, and I got very scared of that... So not to shill Eleventy and Netlify, but I now build with Eleventy and it just auto-deploys with Netlify. And it's very easy, and I don't have to think about it, which is amazing.

**Zach Leatherman:** I'll admit that my site wasn't even on Netlify until a couple months ago... And I was using Eleventy since the beginning, but it was not a small task to migrate my entire existing site from my PHP-based host before to the static site that I have now. But it actually ended up being much easier than I thought. And I should have done it much sooner. But now I'm on Netlify, and hey, it works great.

**Jerod Santo:** Right. What were some of the concerns? Were there dynamically-rendered pages going on in certain places? I mean, sure, over the course of more than 10, 15, 20 years a site gets a certain amount of cruft; you just threw up a page back in the day, and you don't wanna break it. But what all did you have to do?

**Zach Leatherman:** It was a much bigger task to migrate from WordPress to Jekyll than it was from my PHP site to Netlify, because all of that work to make things static was already done even before I migrated over to Eleventy. I would say the biggest problem for me was I had a few test pages that were just like testing how different web loading things work. So I had a bunch of asynchronous CSS tests, and web font tests... And I think a lot of folks probably know me for web fonts more than Eleventy. So yeah, I don't know. I just had a lot of test pages out there that were using PHP as a way to sleep a resource before it returned the content... And yeah, there's just a lot of those.

**Jerod Santo:** So did you have to turn those into Netlify functions, or what did you end up doing with all those dynamic responses? Just get rid of them?

**Zach Leatherman:** No, they still exist. I kept them on my existing host and I just use a proxy redirect to serve all the content.

**Jerod Santo:** Gotcha. So you didn't ditch your old host.

**Zach Leatherman:** No, but from the frontend it still looks like everything's on zachleat.com.

**Jerod Santo:** Right.

**Zach Leatherman:** So you wouldn't be able to tell that I was still running on my old web host, but it still is, yeah.

**Jerod Santo:** It's an invisible proxy, but it's not as if you could just turn off that old hosting at this point, because you still have some end points, basically, that are serving up responses.

**Zach Leatherman:** I mean, if I wanted to migrate those over, I could, but it was just so easy to use a redirect to point to my old host and not do any of that work, so I didn't. \[laughs\]

**Break:** \[00:15:26.24\]

**Jerod Santo:** So when you started Eleventy you did not work at Netlify.

**Zach Leatherman:** Correct, yes. That is correct.

**Jerod Santo:** And now you work at Netlify, correct?

**Zach Leatherman:** Yes.

**Jerod Santo:** You're like at this interrogation... \[laughter\] And where were you the night of January 30th?

**Zach Leatherman:** All of these facts are correct. There were four lights...! Four lights! \[laughter\]

**Jerod Santo:** So... The reason I ask is because I wonder, did you get that job, do you think, at least substantially because of Eleventy, or was it just a nice-to-have for them?

**Zach Leatherman:** Yes... I mean, Eleventy was even less popular then than it was now, so...

**Jerod Santo:** How long ago was this that you started there...

**Zach Leatherman:** It's hard to say. I've been at Eleventy for a little over two years, and I would say a lot of Eleventy's success in the last two years is partially - I mean, at least partially - tied to Netlify. It's just a lot of legitimacy we get from having our logo on Netlify's homepage etc.

**Nick Nisi:** I think that, like you said, it is kind of a perfect match, and calling -- I don't know if you would agree with this, but calling Eleventy just a static site generator seems a little misleading, because you can really be dynamic with the content that you're building through it. And that really seems to line up with the whole JAMstack push that -- I don't know if Netlify coined that, but they've been big proponents of it.

**Jerod Santo:** They did.

**Zach Leatherman:** Yeah, I mean - I would say the dynamic pieces that have been added to Eleventy in the last year or two have been solely to satisfy use cases that I was working on at Netlify. So a lot of the features that have been added in to make Eleventy more dynamic were Netlify-driven things, for Netlify's marketing site. Maybe we're getting ahead of the game a little bit, because before I even started at Netlify, I was working on Eleventy and I was basically introduced to Netlify through some web font consulting work that I was doing with Smashing Magazine.

I don't know if you remember, one of the very first big JAMstack migrations was the Smashing Magazine site. So I basically was introduced to Mathias Biilmann, CEO at Netlify, working on and helping on the web font loading for Smashing Magazine. And I was just doing that in my spare time, too. So there was some cross-over... I mean, obviously, Eleventy and Netlify share a lot of goals, but I would say the origin of me getting into or connecting with people at Netlify was through web fonts... Which is maybe strange, but yeah.

**Jerod Santo:** So that, I think, delves a little bit more into what makes Eleventy special from my point of view, is that I think you have a very specific view of the world, Zach, as a developer and as a web engineer, and have honed that in very specific skills and way of building websites; very performance-oriented, very user-first, very (I guess) equality-focused, like geographic equality... These kind of things. The obsession over making your web font loading awesome for everybody is something that you've made a name for yourself doing that kind of work... And I think it follows that Eleventy is very much -- because it's your side project, scratching your itch to build your own websites. Like, you build websites in a very specific, and I think desirable way, and I think that's injected into what Eleventy is. I don't wanna ask you to comment on that, because it's maybe asking you to talk about yourself a lot, but Nick, does that resonate with you? That feeling of "Zach built this, and Zach builds good websites, and so Eleventy generates good websites"?

**Nick Nisi:** Agreed. Yeah. And Eleventy really doesn't get in your way, in my experience, with that. You can do a lot of different things with it, and there's a lot of different starter kits, and all of that. But I'll be honest, when I started converting my stuff over to it, I went to your GitHub and look at how yours was generated and kind of went from there.

**Zach Leatherman:** Yeah, I think there's something to be said about having built websites for over 20 years, and knowing what changes and what doesn't change over time, and trying to stick to as much of the platform as you can, because that has the most longevity. I mean, the thing that is maybe a little strange for Eleventy in terms of a framework is that I want it to exist for at least ten years. I don't wanna have to migrate my personal site to anything else for at least ten years, because I feel like a framework should have that amount of longevity.

**Nick Nisi:** You should round that up to 11.

**Jerod Santo:** \[laughs\] Right, round it up to 11. Love it!

**Zach Leatherman:** Why didn't I do that...? See, Nick, this is why you need to pay me for your YouTube bucks, and I need to pay you for consulting. \[laughter\] Anyway.

**Jerod Santo:** Your rounding.

**Zach Leatherman:** Yeah. I just want it to last a long time. I don't wanna have to redo my website in a new framework every couple of years... And I feel like other folks probably feel the same way, especially with side projects that they're working on.

**Jerod Santo:** I don't know... Nick, do you feel that way? I feel like redoing your blog is one of your hobbies.

**Nick Nisi:** Yeah... I mean, I use it a lot to learn new things, but I haven't done it since I switched to Eleventy.

**Jerod Santo:** There you go. But I'm with you, Zach... I think unless you're doing it to learn, or you have the spare cycles... Some people just like to tweak, and change, and rewrite their website... And I think it's a great playground for doing those kinds of experiments as your own domain, your own little spot on the web. But at a certain point, it's like "Do I wanna be porting this over and over again, because I have to, because this framework or this tool disappeared? Or it is stale, or it no longer generates fast enough for my liking..." Nobody wants to be backed into that corner. We wanna be able to opt into it, sure, but to be forced into it...

Once you've been abandoned a couple times in the open source world as just a user - and I've been around long enough to have lots of projects come and go; I've got dependencies that don't exist anymore etc. It's kind of a once bitten, twice shy. You want things to last, because it's a lot of work, a lot of toil when things disappear out from under you. So I think I'm with you on that front.

**Nick Nisi:** There's also just a lot of ways that you can extend Eleventy, too. I've only scratched the surface in my little bit of dabbling with it, but some of the cool things that you've done, Zach, that I have followed really closely are things like -- isn't it generating like the Open Graph images automatically? Isn't that part of your Eleventy build?

**Zach Leatherman:** Yeah, on my personal site I have some dynamic Open Graph images that show you -- in some cases the Lighthouse score for the page...

**Jerod Santo:** Nice.

**Zach Leatherman:** ...which I thought was kind of neat. And - yup, just like the web mention count, and just a bunch of other metadata for the page.

**Jerod Santo:** So is that all build time stuff that Eleventy does then?

**Zach Leatherman:** It's a mix of build and runtime stuff. Since Netlify added on-demand builders, that lets you run a serverless function and then cache it until you run another build, a lot of those Open Graph images are generated using those.

**Jerod Santo:** So it's kind of like a build time/run time hybrid at this point.

**Zach Leatherman:** Yeah, I feel like that's the way a lot of sites are gonna start going, especially as they grow. Yeah, just to increase the speed of your builds as much as possible... Because the speedier the build, the more dynamic a site can feel, in my opinion.

**Jerod Santo:** So for comparing against Gatsby - because that's just a frame of reference a lot of people have - Gatsby really optimized for speed of the site... So like Lighthouse 100 or whatever, right out of the box, which is cool... I'm sure Eleventy has similar goals or things that it'll generate best practices etc. And then it came time at like building large sites, and then Gatsby basically moved that all kind of server-side, proprietary. I mean, there's open source things, but they're building a business around it, and really, build time is what's kind of a feature for their business. I think they might be pivoting, and stuff... I haven't paid that close of attention now. But I'm curious, if Eleventy scales linearly, like a Jekyll blog, or are there any fancy things of like as your site gets bigger - you have probably a pretty big site over the years, but let's say you've got an e-commerce store with 100,000 pages, or something. Does it get to be slow builds over time?

**Zach Leatherman:** I mean, yeah, for sure. You can't have 100,000 pages on your build without that slowing down a little bit...

**Jerod Santo:** Come on, Zach...!

**Zach Leatherman:** I mean, let's be honest here... I will say that I think Eleventy has the best story in terms of the amount of performance you can get before you need to switch to at least a partially dynamic build. Just as an example, I have a Twitter archive that has like 35,000 page build, that comes for my site. I host an archive of all of my tweets... And I don't remember what the last build time was, but it's a couple of minutes on Netlify... Which is pretty good. But you can't move any route that you want in an Eleventy site to be request time, or as I mentioned in that on-demand builder pattern, where it is still at first request time, but then it caches it for repeat views.

**Jerod Santo:** Right. Just once. Mm-hm.

**Zach Leatherman:** So theoretically, you can go as high as you want in that respect, because the pages are generated on that first request, and it's not generated at build time.

**Jerod Santo:** Yeah. Especially if you're generating a site map, and that's submitted to Google, and you just let a Google crawler basically be your cache primer. It's gonna crawl it probably before a visitor... And so the visitor is probably gonna get a faster page; but even if not, that first request, depending on how much is going on there, should be pretty fast.

**Zach Leatherman:** Well, you can write your own serverless function to do site crawling that you want to, because you can trigger those serverless functions based on different build events that happen. I mean, you could even do that in-house if you wanted.

**Jerod Santo:** So the other aspect of this - we're gonna talk about full-time on Eleventy at Netlify; so you've been working for Netlify for a few years now, but more recently you went to working on Eleventy at Netlify, or maybe for Netlify. I'm not sure exactly how it works. And I know that you're very careful about these things. Eleventy is not a Netlify project. It's an open source Zach Leatherman and friends project, right?

**Zach Leatherman:** Yeah. So there was no ownership or control transferred when I started to work on Eleventy full-time. Yeah, all the IP is still owned by me, and if Netlify were to go away, or if Netlify decided to stop sponsoring Eleventy, I would still retain all of the rights to it. And it helped in those discussions to have Eleventy pre-date my employment at Netlify as well, because when I moved to Netlify originally, that was in my employment contract that I still would maintain ownership of Eleventy at that point. So it wasn't a hard discussion to have. Everyone at Netlify was super-supportive of that, and they see the benefit in Eleventy sort of speeding up its development and feature delivery to Netlify as well. So it's kind of a win/win, which is interesting, and I think pretty rare for an open source project.

**Jerod Santo:** Yeah. So I wanna bring in now this post you wrote - I guess it was October '21, which is 18 months ago(ish). "Who pays for web frameworks." And you were thinking a lot about sustainability models, because I think at the time you were thinking about sustainability for Eleventy. You want it to last for 11 years, as Nick said.

**Zach Leatherman:** Yup. \[laughs\]

**Jerod Santo:** So how are you gonna get that done? Because even though it has helped you get this job, and you can work on it sometimes, this is prior to this new arrangement. It wasn't your job. This is a passion project, and it's been a thing you've built in your hobby, as most open source projects are, right? So you looked around and you wondered, "Okay, who's funding development of a lot of different things?" and you made a nice table laying out a bunch of projects - Angular, Astro, Gatsby, Eleventy, Jekyll, so on and so forth. We'll link to it in the show notes for people that want all those details; and they may or may not be up do date. But at this time you still hadn't really figured out what you wanted to do. You said "I don't have the answers" in your conclusion. "I definitely wouldn't agree that Eleventy has figured out our sustainable monetization strategy, but I do really admire the success that Vue has had solving this exact problem."

So Vue has done it through public donations, or through Patreon and Open Collective style. Did you try that move? Did you have Open Collective? And did you then decide "I'm gonna try to see if Netlify will let me do this", or did they just like "Hey, Zach, why don't you just work on it?"

**Zach Leatherman:** So Eleventy has had an Open Collective for a very long time, and that was prompted by a conversation with Rob Dodson, who used to work at Google. He was instrumental in implementing web.dev on Eleventy. One of Google's big web development properties runs on Eleventy right now, and he suggested very strongly that I should start an Open Collective to help with that sustainability story. So we've had an Open Collective for quite a while, and in some regards I would say it's a little controversial that we've had an Open Collective. I wouldn't say it's super-controversial, but the way that I'm using the Open Collective right now is I don't feel like the best way, especially given the new arrangement with Netlify.

Originally, I was using the Open Collective, given that I had a job and I was working at Netlify and I got some time to invest in Eleventy features prior to this arrangement. I was using the Open Collective as like a sort of fallback nest egg, so if I were to lose my job, then I would look for a new job, but also use that, and work on Eleventy full-time in the meantime. And that's still kind of my plan moving forward.

We've used the Open Collective funds for some things, to pay for the different bills that come in on the project, but... Yeah, that's kind of the mindset that I've had for the Open Collective right now. I don't know if that's the best way to do it, but I feel like having some reserves in that regard is a good investment as a fallback strategy for the project. So that's kind of how I thought about the Open Collective prior to this Netlify arrangement, and I feel like that might change a little bit.

**Jerod Santo:** So what's the controversial part, besides the fact that you're not sure if you're doing it right?

**Zach Leatherman:** We just weren't spending the money.

**Jerod Santo:** Yeah. So that I did notice. You have raised $52,000 over the course of the project, which is not chump change. That's serious money. It's not a salary, but it's serious money. But you've spent $1,100 of that. So there's this balance that's sitting there. And that, you said, is controversial, or it at least maybe piques people's interest, or raises their eyebrows, or something.

**Zach Leatherman:** Well, we've had a few folks ask about it... Like, "Why aren't you spending the money?"And that's the story.

**Jerod Santo:** Yeah. \[laughs\] Well, you think maybe your sponsors might wonder that, right? The Open Collective sponsors. Like, "I'm supporting you." Or "Why should I support this project? You're sitting on 50k. Do you need my money?" Maybe I could see that angle.

**Zach Leatherman:** Yeah, that's valid criticism. I don't really feel like I have a great story for that. I feel like the other side of the coin is that some of these projects are better about maintainers removing the funds and not really telling a good story about what the funds are being used for. There's a lot of trust that goes into donating to an open source project, and I would say that I haven't seen too many folks cancel their Open Collective contributions... Because I do really want folks to understand that it is an investment in the longevity of the project. So I don't consider this Netlify arrangement to be something that will probably exist for ten years. I mean, if it did, that would be awesome, but I think if we're all honest, I don't think that that will be a thing that will exist in ten years.

That is kind of a fallback strategy for me at this point, and I'm open to discussing it with folks if they have concerns about that. But I do feel that my mindset is changing a little bit with this new arrangement at Netlify, and I'll probably start to use the money in a more community-organized way moving forward, as I feel more comfortable with the arrangement moving forward. It just feels so weird to me... Like, the entire thing just feels surreal and weird. And even just like the last 3-4 weeks that I've been doing -- because I'm on my fourth week of this open source arrangement right now. Every day still just feels strange. It was a thing that I had to sneak in after hours... Like, I went from less than ten hours a week on this project to like now I'm doing 40, and I have to physically stop myself from doing more than that, so I don't overwork... Because it's just like -- I love it so much. \[laughs\] I just don't know how to... I don't what to say too much about it, but yeah.

**Break:** \[00:34:18.29\]

**Nick Nisi:** How did that transpire then? Do you have to figure out how to justify the extra 30 hours that you get to spend a week on it, in terms of getting that offer, or accepting to work on it full-time? How did that go about?

**Zach Leatherman:** That I have to promise roadmap things?

**Nick Nisi:** Yeah.

**Zach Leatherman:** No, there wasn't any external influence over the roadmap. I feel like I'm an adult, and the people working with me are adults, and there's a certain amount of understanding that goes into it, without having to say it out loud. I understand that the work that I'm doing should benefit Netlify in some way, and so I want to help Netlify succeed, so that I can continue with this arrangement that's working so well for the Eleventy project. So I don't know, they didn't really say anything, but it's in my interest to help Netlify succeed, so that I can keep doing this.

**Jerod Santo:** Sure. Was this your idea, or their idea?

**Zach Leatherman:** That is another question -- I feel like that's hard for me to know, because there were so many little discussions that went into it over years. I've worked on netlify.com, which was an Eleventy site, and that was my previous job at Netlify. We would work on new features to facilitate netlify.com requirements, and it became like "Well, it'd be great if I could have more Eleventy time, because then I could deliver more features, which would make Eleventy more attractive to more projects, and potentially drive more projects to Netlify." So it was kind of like a back and forth.

I would say that my previous boss, Lauren Sell, had a lot of background in open source, and she has a lot of experience with open source foundations, and she really pushed for this to happen, and I don't think it would have been possible without her selling it at a higher level. But it's hard to say... Like, I've asked for this for a while, and it happened. So I don't know... It's hard to say whose idea it was.

**Nick Nisi:** That's kind of what I was getting at with my question, that I asked poorly... It was kind of how it transpired; so that kind of answers it a little more.

**Jerod Santo:** I think you're definitely trailblazing. Of course, Rich Harris is doing similar things with Svelte... Where it's like, we're not really sure how these relationships will play out, or should, and can, in a way that's known, because this is a relatively new thing. For you it's very new, but for the world of open source maintainers, there's been some isolated incidents, but oftentimes it's either started inside the company and you get to work on it full-time... But it's Kubernetes, and you're gonna work on it, because that's what the company. But this is like you brought it in, and you're gonna take it out, and then you also get to work on it while you're there... And there's just lots of -- I need you need to have a very good relationship with the employer, which it sounds like you do, in order for the trust to be there, for this to actually work out over a course of time... Because if you didn't, there could be situations where they're like, "Hey, it would be cool if Eleventy did this." And this is like something you're diametrically opposed to. And it's like, "Zach, add this feature." And you're like, "I don't want to." And it's like, "We're your boss", and it's like, "It's my project..." That kind of stuff -- I'm making it very obvious, but those kind of things could play out over time. And I think there's still the risk of that, but if you're walking together, hand-in-hand, and have this mutually assured path that you trust each other, then those concerns are probably less and less.

**Zach Leatherman:** Yeah, I think that there's a huge amount of trust on both sides... And that trust was certainly built up over my years as a -- I don't wanna say regular employee, but a non-open-source employee. So yeah, I think there is a lot of truth to that, for sure.

**Jerod Santo:** So as Nick and I said on the episode with Anthony and Patak, When you weren't here, we were talking about you... It seems like to us - we both agreed - that this is like a win. It's a win/win/win, because when Netlify wins, Zach wins, and the community wins... Because now there's adding fuel to this fire. Eleventy now gets 30 extra hours - we're just roughly speaking - of attention every week, that it wasn't getting before. That's --

**Nick Nisi:** It's huge.

**Jerod Santo:** ...very valuable, right? And then everybody who uses Eleventy, they just get to come along for that ride. They're getting basically their favorite site generator program worked on 30 hours a week extra... That's so cool. What kind of stuff does this unlock? Are there features you've been waiting to build and now you're like, "I've got the bandwidth now"?

**Zach Leatherman:** Yeah, this is opening a lot of doors for things that I would have never attempted before... And one that just came up in the last week was this Browsersync removal. So we have this Browsersync dependency, and it's not maintained as frequently as I would like, and it's aging a little bit in terms of the browser support that it has, and the \[unintelligible 00:39:40.22\] that comes with aging browser support... So in the last week I completely stripped it out and rewrote the entire dev server in Eleventy. And that was something I never would have done prior to this full-time arrangement, just because I would not have had the bandwidth to maintain that dependency, I would not have had the bandwidth to develop that dependency... But it npm-installs way faster to get rid of it, and there's been a bunch of huge project benefits that are gonna come out of this. I mean, I have a big wall of sticky notes of the same style of feature that I'm looking at moving forward... So in just one week, a huge example, we completely rewrote the dev server from scratch. And there's gonna be a lot more examples of that moving forward.

**Nick Nisi:** I saw something about TypeScript support...

**Jerod Santo:** Ah...! You've gotta throw some money in, Nick...

**Zach Leatherman:** Yeah, I don't wanna make any promises, but I have been thinking about Deno support in Eleventy.

**Jerod Santo:** Okay...

**Nick Nisi:** Nice.

**Zach Leatherman:** Yeah. That's on the table.

**Jerod Santo:** What will go into that?

**Zach Leatherman:** First we've gotta get ECMAScript modules. We don't have ESM right now, and that's definitely on the table for something we need to do in the short-term, because that's where the entire JavaScript world is moving. So yeah, we need to do that first. That's a \[unintelligible 00:41:11.11\]

**Jerod Santo:** And then other things which you haven't thought about because you had to do that first anyways, so... \[unintelligible 00:41:16.01\] any deeper on that feature...

**Zach Leatherman:** Yeah.

**Jerod Santo:** That would be cool. So is it largely yourself that has worked on Eleventy during its run, or have you had any major contributors that have come and gone, or stuck around? I know some projects establish a core team... Has Eleventy been mostly you, plus some friends?

**Zach Leatherman:** Yeah, we've gotten a fair number of contributors. I would say that we've had huge contributions. And most of that is a personal failing of mine. I didn't have the bandwidth to reveal large pull requests. That's a huge limitation when you only have 8 to 10 hours a week maximum to work on a project. Reviewing a large pull request is a hefty chunk of that time. So it's hard to cultivate a team when you can't have huge contributions come in. So I don't know if that answers the question, but yeah; I wish it wasn't just me, but it is mostly me at this point.

**Jerod Santo:** I sense like you have more bandwidth now, but perhaps because Eleventy has this backing, you might have less people that are either willing, or interested in doing those large pulls. Because it's like, "Hey, Zach's working on it." Maybe it's just more requests and less pitching it... I don't know how that will play out.

**Zach Leatherman:** Yeah, that's kind of been the thing that I've been thinking about a lot in the last couple weeks, is how people perceive the project, and how that can affect how folks interact with the project because we have this backing. I don't know if I could make any claims about trends that are happening, but...

**Jerod Santo:** It's still pretty early.

**Zach Leatherman:** ...I'm fine for folks to ask me. \[laughs\] It's fine for people to ask me if they wanna contribute, and if they want me to work on something. I'm open to all feedback.

**Nick Nisi:** That was a reference to the tweet about the types as comments.

**Jerod Santo:** This is a subtweet on a podcast? Please, help us laypeople in on the comment here. What's going on?

**Nick Nisi:** I quote-tweeted TypeScript about how huge it is that stage zero proposal for ignoring type annotations in JavaScript itself, and Zach replied with something along the lines of "This has me looking at TypeScript for the first time."

**Jerod Santo:** Hm... Don't do it, Zach. Don't look at it.

**Zach Leatherman:** I've been not willing to get on the TypeScript bandwagon, just because it didn't fit the core platform requirements that I would have wanted for a long-term investment, and I felt like it needed to be a long-term investment if I wanted to make it. So if they added to the language, then for sure I'll look at it.

**Nick Nisi:** That kind of echoes something that I think Ryan Dahl said on a Changelog podcast with you, Jerod, about, you know, maybe one of the regrets of being TypeScript support out of the box. But that probably changes the equation too if this goes forward.

**Jerod Santo:** So explain this proposal, Nick, and the implications. Because I think I'm tracking, but I might not be, which means our listener might also be wondering what's this type annotations.

**Nick Nisi:** Yeah, so the TypeScript team, and Microsoft, and other places like Bloomberg, \[unintelligible 00:44:22.04\] and a couple of other places are getting together for a TC39 proposal to allow for JavaScript to basically ignore type annotations, so the TypeScript syntax, and just treat it as comments, so that I could copy and paste TypeScript code and it would run just as regular JavaScript in your dev tools; or I could effectively write TypeScript and run it with no build step in between.

**Jerod Santo:** Right. So you have instant platform compatibility because it just ignores all the extra stuff that TypeScript adds.

**Nick Nisi:** Right. But there are trade-offs for that, because it could go a lot of different ways. I could have wrong type annotations, and then the code's just weird... Any by having that in there, it immediately makes everyone who's writing JavaScript have to also know enough TypeScript to ignore those as comments. But I guess you have that problem too if everything is written in TypeScript, so...

**Jerod Santo:** Mm-hm. Plus stage zero, so we're talking about eight to ten years from now.

**Nick Nisi:** Yeah.

**Jerod Santo:** But more recent than that, Nick is working on a JS Party podcast episode about this conversation, so hopefully we'll pull together some folks and put together a show about it, so we can talk about it. But yeah, stage zero - as Chris Hiller said, "Don't get too excited about anything stage zero", as we've been bit by that.

**Nick Nisi:** That is one of the things that I would like to be able to do, is someday write my Eleventy.js in TypeScript. I'm so spoiled now with type annotations and helpers from my editor that it's harder when I don't get that.

**Zach Leatherman:** Yeah, we've had some JSDoc style contributions come in. So some of that is in there, but... Yeah, we do have someone that's very passionate about that, contributing to the GitHub...

**Nick Nisi:** Awesome. And it's great that that's another app too, that everyone can win from. So yeah, kudos.

**Jerod Santo:** So any other big plans? You have this wide open space in front of you, and you've talked about a couple of things. One thing that landed quickly, another thing that you're thinking about working on... But any other big plans on the corkboard or on the wall that people can look forward to, coming soon to Eleventy?

**Zach Leatherman:** I don't know, in the next couple weeks I wanna work on improving our serverless bundling, and there'll be a lot of improvements that come out of that, especially around incremental builds and creating the best dependency map of the content that I can, so that I can generate the best, smallest serverless bundles that I can.

And really, more investment around asset pipelines. I feel like that's maybe one of the most controversial things that Eleventy doesn't have yet; I feel like a lot of folks expect it. I mean, we have an image plugin that handles our image processing, but CSS, JavaScript - all that kind of stuff, we might take a not necessarily stronger default approach, but at least some plugins to allow folks to have a better story, a better official Eleventy story there.

**Nick Nisi:** Just for those who aren't aware - that's like doing some kind of pre-processing to non-JS files, like CSS and images, things like that...?

**Zach Leatherman:** Well, there's gonna be a lot of discussion that goes into that. I feel like a lot of bundlers right now assume JavaScript as default, and that's not really the direction that the Eleventy community is going, and that's not really something I'm personally interested in... So yeah, we'll probably start with an HTML-first bundler, rather than having to import everything via JavaScript. So yeah, I don't know if that answers your question, but hopefully...

**Jerod Santo:** So an HTML-first bundler... Can you grab one and use one? Are you gonna write a bundler? What are you referring to?

**Zach Leatherman:** Well, I think that's up in the air right now.

**Jerod Santo:** \[laughs\] Come on, Zach, we're trying to pin you down on something here...

**Zach Leatherman:** Did you wanna pin me down...?

**Jerod Santo:** So lots to think about, lots to considers, lots of ins, lots of outs... Only in your first couple of weeks. So you haven't gotten that far down the road. You've been focusing on this dev server thing.

**Zach Leatherman:** Yeah, I've been working real hard on the dev server.

**Jerod Santo:** What about a merch shop? Are we gonna get some Eleventy merch? I mean, you could get some stickers, get some T-shirts... That's what the people want, Zach.

**Nick Nisi:** Yes.

**Zach Leatherman:** Yeah, I mean... It's been a long-standing, almost running joke that Eleventy doesn't sell stickers online, and it's almost exclusively because I don't want to have to do anything.

**Jerod Santo:** You've got nothing but time. Come on, it's sponsored! \[laughter\]

**Zach Leatherman:** Yeah, I don't know... Would folks rather have stickers, or they'd rather have more features?

**Jerod Santo:** That's a legitimate question that we should poll the audience... \[laughs\]

**Nick Nisi:** \[unintelligible 00:49:05.10\]

**Jerod Santo:** "Yes, and. Yes, and."

**Zach Leatherman:** Yeah, I don't know... I wish we did have a merch shop, but I just don't wanna bother with it, to be honest. If someone else wants to do it, then maybe.

**Nick Nisi:** I just want some opossum swag. It would be amazing.

**Jerod Santo:** Yes... So here's an idea that we've had at Changelog, which lines up with this... We have a merch shop, we've taken the time, we've gotten fulfillment etc. It sucked. We don't wanna do it again. What if we could just provide that as like a thing that open source projects could just do? And then you maybe have a landing page where you can get a bunch of different swag from your favorite open source projects. We wouldn't do it to make money, we'd do it to make it easy. And then we would just have the fulfillment pipeline, like "Send your stuff to this place", which is what we do. And then let it go out from there. Maybe that's something that we could put together and provide that as a service.

**Zach Leatherman:** I mean, even if y'all took a cut... It'd be fine to me. I just don't wanna do it.

**Jerod Santo:** Yeah. Just to cover the headache. That's something we've thought about. The more people we talk to, maintainers that say what you've just said, the more it seems like something that people would really value. So maybe we'll do that.

**Nick Nisi:** That is a good idea.

**Zach Leatherman:** Yeah, I would be a fan of that. I mean, it does kind of get into the larger thing of like all of the different monetization things that folks can try to get sustainability for their project... And I don't feel like swag is necessarily one of them. I mean, it needs to be a piece of the pie; you have to do like ten different things to have a super-sustainable project. And that's, again, where it comes back to Vue.js - they do all of that stuff, and they do it well.

**Jerod Santo:** Unfortunately, I think your arrangement, while awesome, doesn't necessarily scale to the greater open source community. I think it adds to the list of things that you could potentially try to get done. You know, like "Here's our arsenal of sustainability techniques. See which ones apply to your project and try to do them. Maybe in the order of the most sustainable." Because there's two aspects to sustainability - there's how much it brings in, but also how much it adds to your workload. And there's a balance there. The swag brings in a little bit of cash, but now you're a professional swag shipper outer, and that takes time. These things take time.

So yeah, there's lots of things, but I think what we need to provide maintainers is like "Here's some options. Here's circumstances they work well, not so well etc." And I think this whole full-time employment, but free to work on open source thing is like -- it's the cat's pajamas, but it's also probably the hardest one to get set up.

**Zach Leatherman:** Well, I would say that it's super project-dependent. It really depends on the project and what overlap you have with existing businesses that are selling products around it. The biggest decision for Eleventy was not necessarily whether or not to go full-time open source, but it was whether to have discussions to take investment to work on the project. So I had some investors contact me - I don't know exactly when it was, but last year - to start discussions about an investment in Eleventy, and I don't really feel like for the 10-11 years sustainability story that I wanted to have, that I wanted to cede control in that way. So I didn't even have those discussions at all, because I knew it wasn't gonna be what I wanted for the project long-term.

So there are some hard choices to make, because at that point I didn't have a full-time open source arrangement. It was just "No, I don't wanna do that." So yeah, there are some very hard choices that folks have to make, and I feel like most folks are taking investment to work on their project, but that's not what I wanted to do.

**Jerod Santo:** So let me provide one idea for you before we let you go. It's both a way that you can spend some of that capital that you're sitting on, and maybe make some money, and provide something awesome for the Eleventy community... And you're already good at it. It's called Eleventy Conf 2023.

**Zach Leatherman:** \[laughs\]

**Jerod Santo:** Come on, Zach...!

**Zach Leatherman:** I mean, we've had discussions about that. I feel like I have conference organizing experience, so...

**Jerod Santo:** You do.

**Zach Leatherman:** ...I think it is inevitable that we'll have an Eleventy conference.

**Jerod Santo:** Awesome.

**Nick Nisi:** Yes...!

**Zach Leatherman:** It definitely won't happen this year, but yeah, 2023 maybe. I think it's definitely in the cards.

**Jerod Santo:** Well, if you wanna send some tickets to friends, we're not gonna stop you.

**Zach Leatherman:** Ask some friends to help me organize...

**Jerod Santo:** \[laughs\] Nick would love to. Nick would absolutely love to.

**Zach Leatherman:** Don't everybody volunteer at once! \[laughter\]

**Nick Nisi:** I actually would, yeah. I'd love to.

**Zach Leatherman:** Nick can MC...

**Nick Nisi:** Oh, I don't know...

**Jerod Santo:** Oh yeah, Nick is an excellent conference MC. He has no shame. He'll wear anything, he'll say anything. He will layer on the puns, and he loves to just make the room sit there in silence and roll their eyes. It's like his favorite moment. So that's a good skillset, Nick...

**Zach Leatherman:** I also really enjoy Nick doing those moments... \[laughs\]

**Jerod Santo:** That's probably the one thing I miss the most about not having an NEJS Conf, is Nick in a costume, just dishing out bad puns for hours on end. That was always the best part of the conference for me.

**Zach Leatherman:** \[unintelligible 00:54:23.08\] and replay them... \[laughter\]

**Jerod Santo:** Yes...

**Zach Leatherman:** It's incredible fuel.

**Nick Nisi:** My favorite part was just staying up all night the night before, with some crazy idea about doing some video... The first year was some weird CSS thing that was horrible...

**Zach Leatherman:** That's an anxiety-coping mechanism, Nick...

**Nick Nisi:** Yeah... \[laughs\]

**Jerod Santo:** Unfortunately, it's anxiety-causing for the rest of us, as it's like 7 AM the next morning and we're all like "Where's Nick?! The conference starts and our MC is sleeping in..."

**Zach Leatherman:** He stayed up all night...!

**Nick Nisi:** Not just that, I had all of the badges.

**Jerod Santo:** Oh yeah, you did. So many fun freak-out moments when you're at a conference... But here's one thing that we did well - we had a great team of six of us, I think; lots of people. And the old adage, "Many hands make light work" absolutely was the case. I couldn't imagine these people that run conferences with one or two organizers. It's just like, get a lot of people involved. It's a lot easier to manage.

Everything else we did on Hard mode. Brand new venue every year, brand new theme every year, internal challenges that we didn't even say out loud sometimes, like "Can we make this happen?" You know, that kind of stuff. But I think in terms of organizer count, I think we've put that on Easy mode, because we've had so many awesome people working on it.

**Nick Nisi:** For sure.

**Jerod Santo:** Alright. Anything else -- Nick, did you wanna ask Zach anything else before we let him go?

**Nick Nisi:** You got around to Eleventy Conf. I think that's a good place to close.

**Jerod Santo:** I think that's where we wanna close. Eleventy Conf 2023.

**Zach Leatherman:** Sounds good to me.

**Jerod Santo:** Alright, you heard it here first, folks... A scoop. Zach Leatherman will be throwing Eleventy Conf in 2023. \[laughter\] He bets his life on it... No.

**Zach Leatherman:** Oh, no...!

**Jerod Santo:** We can hopefully look forward to that. Of course, look forward to all the cool stuff coming to Eleventy thanks to this new arrangement. I hope, Zach, for your sake, for Netlify's sake, for everyone's sake, that it goes really well, and that it continues to let you just focus on this thing.

So all the links to all the things will be in the show notes. We'll hook up with Zach's post about web framework payments, as well as Eleventy's site, as well as the Open Collective... So if you're interested in learning more about Eleventy and what all Zach has going on, check out the show notes, for sure.

Zach - dude, this has been so much fun. Glad to have you back. It's been too long. We need to get you on the pod more regularly. You know, we do some debates and stuff... We have a debate coming up that I think you might be interested in. It's called "Were SPAs a mistake?"

**Zach Leatherman:** \[laughs\]

**Jerod Santo:** And we'll be debating both sides of that argument.

**Zach Leatherman:** Which... Side... Would... I... Be... On...? \[laughter\] I'm in!

**Jerod Santo:** Okay, he's in! And don't forget, we also have potentially that type annotations episode coming soon. Lots of good stuff coming down the pipeline pretty soon. We'll have Jen Looper and Ali Spittel talking about learning web development, so lots of cool shows coming soon. But that's all for this week.

This is JS Party, I've been Jerod, and we'll talk to y'all next time!
