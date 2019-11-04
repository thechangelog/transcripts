**Kevin Ball:** Okay, hello JS Party people! It's me again, Kball, and I am here at JAMstack Conf sf. I am here with Phil Hawksworth, who is a developer experience engineer at Netlify, and the MC, the host, the man in charge here at JAMstack Conf.

**Phil Hawksworth:** Uuh. Well, the man in charge is pushing it. Other things - that was bang on. But man in charge, I wouldn't even dare to claim that. But yeah, I get to introduce the people, which is a lovely thing.

**Kevin Ball:** You keep things flowing and moving.

**Phil Hawksworth:** Yeah, exactly. It's been fun.

**Kevin Ball:** Yeah, it seems like a great conference so far.

**Phil Hawksworth:** Yeah, I've been delighted. We were expecting it to be a lot of fun. I guess this is the fourth version of this in just one short year, so it's been happening very quickly... But yeah, I was expecting it to be fun, because I got the chance to help curate the content, know that we could invite really amazing speakers, and then also got this huge privilege of being part of the committee that reviewed all of the papers... So we opened it up this year for some of the talks to come through a CFP, and the quality of the submissions has been fantastic. So I think we felt pretty confident early on that it was gonna be a good event. It's been a lot of fun, it's been great.

**Kevin Ball:** Yeah. Well, the ecosystem around JAMstack is just exploding. It's huge.

**Phil Hawksworth:** It is, and it's growing all the time, and that's one of the things that first of all makes working in JAMstack exciting, because there are lots of tools and companies which keep on emerging, and they're not things that you then see and say "Oh, I wish I was using that", so I have to ditch what I was doing; often they can be complementary. So you start to kind of add more quivers to your bow, quivers to your arrow, or whatever that expression is... So you get more of these tools that you can then leverage. But the other aspect to this is that it means the people who are at this event - the vendors, the sponsors, the people participating - were all kind of digging in the same direction, even though some of them are kind of competition for each other... But everyone is trying to raise the water level, so it's the rising tide that lifts all boats kind of thing...

**Kevin Ball:** Yeah, exactly.

**Phil Hawksworth:** So this ecosystem, as you say, is thriving right now. It makes the whole environment a lot of fun to be in.

**Kevin Ball:** Yeah. I've been tuning in a lot to this recently, but I know some of our listeners may or may not have had the chance to play around with JAMstack, and since you literally wrote the book on JAMstack, recently published - last year? Late last year?

**Phil Hawksworth:** \[00:03:57.27\] Earlier this year.

**Kevin Ball:** Earlier this year... Maybe you can do a great one or two-minute explanation of what JAMstack is and why it matters right now.

**Phil Hawksworth:** Sure, yeah. I'll do my best without reciting an entire book's worth of stuff... Some people might think of "Well, is JAMstack the new word for static sites?" And yeah, kind of... But yes and no, because it's much broader than that. We've been building things with static assets for a really long time. Before things were dynamic, we were putting files on web servers and serving those directly, and that was nice and simple. Things got more complicated as we got more dynamic, and that's been great... But this is kind of a return to simplification, and that's possible because the environment - the ecosystem, as you put it - has grown up, the tooling around this has gotten so much richer.

So JAMstack - JAM stands for Javascript, APIs and Markup, and it really is trying to find a good way to build modern web applications and sites using prerendered Markup, and served without web servers... And that sounds really counter-intuitive, the "served without web servers" thing... Because really, one of the huge attributes of JAMstack sites is that since they're pre-generated, prerendered, you can serve them in their entirety form a CDN. I mean, realistically, they're very portable; you could serve them from anything. You prerender a bunch of assets and you put them wherever is convenient, so that's a really portable, nice thing... But their superpower is that they can be entirely served from a CDN. So whereas previously you might have thought "Well, I'll pre-generate some of the things, but I'll have some dynamic aspects as well. Some of my things I can put on a CDN" - you've gotta manage that slight headache of "What goes to the CDN? When? How do I update all of these things?" and you're in kind of mixed territory.

**Kevin Ball:** Yeah.

**Phil Hawksworth:** With a JAMstack site, every deploy is a deployable, immutable, atomic deployment. It's this set of assets that you put directly to the CDN, and the lovely thing about that is that now there's all this tooling that's propping up to make that deployment process as simple as possible. So it unlocks all kinds of crazy possibilities.

**Kevin Ball:** Yeah, it's part of a couple really interesting trends going on. We've got these ideas around "How much can we precompute, so we don't have to ship as much stuff over the wire?"

**Phil Hawksworth:** Yes.

**Kevin Ball:** And then these ideas about "How far out can we put things? How close to the edge can things be?", so that if I'm in Latin America or Africa on a slow network connection, I can still get it lightning fast.

**Phil Hawksworth:** Exactly. You struck upon it perfectly there. We talk about decoupling a lot... There's headless CMS, and you hear the word "decoupled" quite a lot; ultimately for me it's this ability to put some distance between the complexity, the cogs turning to generate the view of a site, and the user who's consuming it. I like the complexity to happen in my house, not in the user's house.

**Kevin Ball:** Yeah. Where you have control, and it's on your timeline, and they're not waiting for that to happen.

**Phil Hawksworth:** Yeah, exactly. So if you can do all of that work ahead of time, and then when the user comes along all of that work is done, it gives you the chance to have this great performance, and resilience as well... And as you mentioned, getting things as close to the edge, and the right edge, the correct place, where the user is - that's what CDNs are great at. So if we can get content out there with low friction, nice and easy, then that's just wonderful performance.

**Kevin Ball:** Yeah. It also has some fun security benefits, and other things. I invited people on -- this may have been a mistake, but I invited people on the show a while back to try to hack my website.

**Phil Hawksworth:** Oh, okay... \[laughs\]

**Kevin Ball:** Which -- it's a static site. It's a JAMstack, essentially, though it is deployed on a traditional virtual server. My new site is now on Netlify...

**Phil Hawksworth:** Oh, it is?

**Kevin Ball:** ... and I'll invite them to hack that all day long. That doesn't even scare me. \[laughs\]

**Phil Hawksworth:** Yeah. That's the thing... Sometimes when I talk about JAMstack, I have this diagram where I compare the traditional or a dynamic stack, and all of the lines and boxes that are in there, the bits of infrastructure, and then a JAMstack site, which is served directly from the CDN... And it's a bit of an oversimplification, but it does show how much complexity there is in one versus the other. I sometimes kind of make this slightly smart ass comment that there's no server more secure than the one that doesn't exist.

**Kevin Ball:** \[00:08:08.15\] Yes!

**Phil Hawksworth:** If you take infrastructure out of the equation, there's less surface area to attack, there's fewer things to have to scale, fewer things to deploy to... All of these moving parts - if you can get them out of the equation, it just makes everything go much faster, and as you say, much more secure. So I love the fact that you're encouraging people to try and hack your site on Netlify. I should introduce you to our infrastructure team around the corner and see if they raise an eyebrow...

**Kevin Ball:** \[laughs\]

**Phil Hawksworth:** But no, I think you make exactly the right point - if it's static, if it's pre-generated and it's removed from the complexity of where your handle is cranked to generate that thing in the first place, then the attack vectors are just removed.

**Kevin Ball:** Yeah, there's no way to get to it.

**Phil Hawksworth:** Exactly.

**Kevin Ball:** What are some of the other benefits that you highlight? So we've talked about performance, getting it out there, we've talked about security...

**Phil Hawksworth:** Yes.

**Kevin Ball:** ...where complexity is living... What else do you highlight when you're talking to folks?

**Phil Hawksworth:** Well, one of the things that I think is a real benefit - and this is one of the things that actually led me to it in the first place... I used to work at a large digital agency, so the projects were often quite complicated; working with big brands, who have lots of infrastructure, and what have you... This approach, aside from having those other benefits you mentioned, actually really reduces the time to market. The time to actually develop these things can be far reduced. Because again, you're simplifying every bit of that lead time, every bit of that process.

So you take out some of the maybe more exotic skills and the exotic complexity and technologies in that stack...

**Kevin Ball:** I no longer have to manage Kubernetes, and my hosting, and my this, and my that...

**Phil Hawksworth:** Exactly, exactly.

**Kevin Ball:** I just push a site.

**Phil Hawksworth:** Kubernetes is a wonderful thing, but I never want to have to deal with it. In the background of the infrastructure, in things like Netlify, that all exists, but I never need to touch it, thank you very much. So it means that we can find developers. So it means that we can find developers who are really talented at front-end things. We can find talented front-end engineers with Javascript, HTML, CSS skills, brilliant SVG animators, all of those people who can now become so much more empowered and have much more impact. We don't have to worry about them shoe-horning their technologies and their codes into the output of some other big monolith, which sometimes can be a bit of a frustration...

So it kind of takes the shackles off a little bit, and it means that engineers can be so much more impactful and so much more rapid about it. And when you start to pull at that particular thread, it means that we can start building things that we can put in front of clients in a realistic way, much sooner. We can start to share the work as it's being developed in a real context, and it just increases the confidence in what we're building, and reduces lead time. So it's really an exciting thing as a developer, and I know that a lot of people here at the conference are developers who are enthusiastic, as they enjoy the experience of building in this way.

**Break:** \[00:11:02.10\]

**Kevin Ball:** Let's talk a little bit about the A in the JAMstack, because what we've talked about a lot here is the J, the Javascript, and M, the Markup... And we can do some things in a pre-computed way; I could move my CMS from being in WordPress to being in Git, or something like that... But sometimes you still do need some sort of interaction, interactivity, authentication, things like that... So how does that play in?

**Phil Hawksworth:** Well, that's such an excellent question. Actually, you remind me of a very important point, and that is that even though there's the J, the A and the M in JAMstack, you don't need to use all three...

**Kevin Ball:** Right.

**Phil Hawksworth:** ...in the same way as you might be building on the LAMP stack, but actually you didn't use a database... You might not have been using MySQL, but you're still on the LAMP stack if you're using those other technologies. That's very much the case with JAMstack as well, because I consider a site that maybe doesn't hit any APIs, or maybe doesn't have any Javascript at all, but it's prerendered from a CDN - that fits perfectly for me in the JAMstack world. However, when you're talking about APIs and the things that you might want to leverage there, the world is your oyster a little bit... Because you can be calling APIs, maybe getting content from content services, or pricing engines, or goodness knows what else... Like image optimization services, like \[unintelligible 00:13:02.15\] You could be pulling content in through those APIs at build time if you want, so you kind of compile things and you're consuming APIs then, and then prerendering everything, and then maybe serving things that have no Javascript and no API usage in the front-end. Or you can push the lever a little bit further, and maybe you're doing that, but maybe you're wanting to add some interactions with some third-party services from the front-end that make sense to happen at interaction time.

That's when Javascript and APIs start to come into play, where you can use things like progressive enhancement, to start to say "Okay, now we've got this level of interactivity, and we can be calling on this huge suite of content APIs or other services", and they're just popping up all the time now; it's becoming so much more popular. I really think that is kind of inheriting a superpower, because in the same way that you didn't want to be managing Kubernetes, I don't want to be managing authentication services. I'll screw that up. I don't want to be managing database services for the same reason. So being able to have vendors and services that provide that through APIs, and they've got teams who specialize in just that, and they've got SLAs that say "This is gonna be the uptime for this. This is how secure it's gonna be..." They've got expertise there. You get to onboard that through using their APIs, without having to become an expert in the deeper, gnarly business under the covers of that, and just get to be proficient in using their APIs, and that's just like inheriting these superpowers, and that excites me a great deal.

**Kevin Ball:** Yeah, yeah. So there are two pieces of that that I'd like to dig in. One that I think is really insightful and really important is the APIs don't have to be at client-side. I love the idea, and I think Gatsby has probably gone the farthest in this direction...

**Phil Hawksworth:** Yes.

**Kevin Ball:** ...but having essentially a data pipeline that happens at build time, where we may be storing these things in a database somewhere, but we can precompute and prefetch, and sort of use that to generate our outcome.

**Phil Hawksworth:** Yeah, yeah.

**Kevin Ball:** And as you say, the user doesn't have to see that complexity, or that time lag, or anything along those lines. So there's a ton there, and I'd be curious of your thoughts on the direction that's going, and where the boundaries of that are.

**Phil Hawksworth:** Yeah... And it's such a tricky one, because there are so many wonderful tools available to us now that do incredibly powerful things client-side, and there are so many Javascript frameworks and libraries that do really powerful and exciting things... And it's tempting to use them for everything.

**Kevin Ball:** Yup.

**Phil Hawksworth:** And I'm a big fan of all of those, but I think one of the most important skills is in knowing how to choose when to use what. I'm a bit of an old web hippie... \[laughter\] I'm traditional; I like meaningful URLs, I like getting things off the render path as much as possible...

**Kevin Ball:** Preach...

**Phil Hawksworth:** \[00:15:52.06\] Yeah, do as much as you can upfront is kind of where I start from, and I think that's a really sensible place to begin - "How much can we do ahead of time, so we don't have to do it later?" is a great way to approach it. But then you still have the ability to enhance things later on.

I think on projects that I've worked in years ago, when I'd be working on maybe a traditional stack, you just assumed that everything was gonna be dynamic by default; cogs would be turning at request time, always. But then, as you start to think "Well, how can we scale it? How can we make it more resilient, and all these things?", you start to look for opportunities of things that "Oh, maybe I can take that and make that static, and start to cache certain things, and what have you." And you start to do that. But that does leave you in the position where you have to figure out what's dynamic and what's static all the time, and you have to figure out how you balance those two. So what I prefer to do is invert that, and say "Okay, this project will be static...", and by static I mean pre-generated and then served from a CDN, "...and that's gonna be my default."

Then you start to think about every feature, "Can this work in that way, or can it not?" And it's amazing when you start thinking of it that way how many creative ways you can find to -- "Oh, actually I can pre-generate this", because the friction in pre-generating is so low now, that I can do that many times. I can do it quite frequently.

**Kevin Ball:** Yeah.

**Phil Hawksworth:** So that takes you much further, to something that feels kind of (I'm doing the air quotes) dynamic... But eventually you sometimes hit something that "Oh, actually now it does need to be dynamic." And until you reach that boundary, there's no point to make something dynamic. I think it's much better to make it pre-generated as much as possible.

**Kevin Ball:** Yeah... So where's the boundary?

**Phil Hawksworth:** Yeah... \[laughs\]

**Kevin Ball:** The one obvious one I can think of is essentially logged in experiences. A place where you only have access to content if you have authenticated in some way.

**Phil Hawksworth:** Absolutely.

**Kevin Ball:** Though I do find myself wondering, "Are there ways to pre-generate some of even that?"

**Phil Hawksworth:** Yeah, and I absolutely think there are... But that moment of authenticating - that's the perfect place to start to think about using Javascript and APIs. And again, there are these services now that we don't have to roll our own; there are identity services, authentication providers that you can use, with things like Javascript web tokens, and different authentication methods that can then unlock either access to routes to things that have been pre-generated - that's a common path... Because sometimes you and I might visit a URL and after authenticating get things that are personalized just to us. And maybe those have been generated at request time, or embellished at request time through some kind of progressive enhancement.

But you might equally find that you and I might visit the same URL, which is private, and maybe has targeted content for us after we've logged in, rather than very individual content... So in that case you can start segmenting the content, pre-generating that, and then all you're doing - and I should be careful saying "all you're doing" and using words like "just"... But what's happening there is you're doing the authentication that then allows people access to the URLs which would be pre-generated for them.

**Kevin Ball:** Right, right. So that is content that is not personalized, but is gated, essentially.

**Phil Hawksworth:** Exactly, yeah. And targeted. So there's this spectrum of personalization, whether it's localized, translated, internationalized, segmented, right the way down to personal.

**Kevin Ball:** Yeah, yeah.

**Phil Hawksworth:** So it's another one of these scenarios where it's a use case thing. It is very easy to default to "Oh, it's targeted content, so it has to be dynamic." But if you look at your project closely, often you'll find that the level of personalization is actually maybe six different variants, or something of that nature. Well, I can pre-generate that, and then I can have the authentication and the rooting be something which is dynamic and happening at request time through Javascript and APIs.

**Kevin Ball:** Interesting.

**Phil Hawksworth:** And that's a path that we see very often.

**Kevin Ball:** \[00:19:58.04\] Yeah. Okay, to dive into that specifically... Most because I want it, right...?! That's something I am looking at right now with my new site, "How do I handle this case?"

**Phil Hawksworth:** Yeah, yeah.

**Kevin Ball:** So if I'm using, for example Netlify - and I'm asking you Netlify not just because that's what you represent, but because that's what I'm using, and it's freakin' amazing...

**Phil Hawksworth:** Yeah, yeah. You're right.

**Kevin Ball:** ...how would I do that gated route?

**Phil Hawksworth:** Right. There's a number of options for you there. I don't want to turn this into a Netlify advert, but what the heck, I'm closer to that than other things... So Netlify do provide an identity service, so that you can turn that on and you can start to introduce gates through to your content... And that can leverage a bunch of different identity providers as well. Or you can use one that's rolled right into Netlify. But that ultimately gives you - for want of a better word - a Javascript widget, that will set an authentication cookie for you at the point you go through that login flow. And at that point, you can use that to enable access to different parts of the site.

**Kevin Ball:** Got it. So I know we don't wanna just be all in Netlify, but essentially I think of Netlify as I'm pushing up a bunch of files.

**Phil Hawksworth:** Yeah.

**Kevin Ball:** Can I specify somehow which of those files require what authentication?

**Phil Hawksworth:** Absolutely, yeah. In Netlify land this is done through -- it's such an easily overlooked thing actually, but the redirects API at Netlify is really powerful. The redirects API - just very briefly - is available to you as a developer through a simple configuration file. So you can either put it in an \_redirects file, right as part of your code, which means then of course that it's version-controlled, along with everything else, as it evolved; version-controlled from end to end is just another superpower...

**Kevin Ball:** Whoaaaa...! The Holy Grail of software development.

**Phil Hawksworth:** Exactly! Yeah, how did we survive without it...?

**Kevin Ball:** Yeah, and now all of my routes that used to be independently managed on my NGINX config or whatever are just living in my codebase?

**Phil Hawksworth:** Yeah, exactly.

**Kevin Ball:** Thank you!

**Phil Hawksworth:** So they live in there, or you can put them in a Netlify TOML file. Again, same thing, but just organized slightly differently. In their most basic form, those allow you to specify redirects. You can say "Okay, paths that match this, go to there, please." And you can also specify things like the HTTP response code. So I can 301 or 302 things through from one place to another. I can also specify things like custom 404 handlers at different routes, which is kind of a mind-blowing thing after you've used it for a while, because it means that... Yes, you have a default 404, but at particular parts of your site, maybe you've had a flash sale, or there are certain things that are open, that are available at certain times - if those go away, you can 404 things there and handle that differently, so you can display different messages. Or you can even redirect those to other things. It gets kind of gnarly and fun.

The other thing that happens in this redirects API is that we can conditionally set authentication rules there. So you can say "For this path, someone arriving at this URL - they have to have been authenticated with this kind of a role before they come through", and then it's the job of the authentication widget to allow and specify that role. So it all lives in there, and it's programmatically controllable... But ultimately, you're creating content and then giving people access conditionally to it.

**Kevin Ball:** Got it. So in the redirects you would say "If they have this type of role, let them through. Otherwise redirect."

**Phil Hawksworth:** Exactly, exactly.

**Kevin Ball:** Okay, brilliant.

**Phil Hawksworth:** And that redirects API also does things like localization and internationalization. We don't want to put everything in there, so you've got User-Agent Sniffing, or anything like that, but we can absolutely conditionally do things differently, depending on people's language settings or their locale, which is great for things like localized sites. So you pre-generate with your static site generator all of your content, in all of the languages that you want, and then you can rout people based on where they are or their language settings to those routes, as they request it. And all of that redirection is happening at the edge, at the CDN nodes, which is why internally at Netlify we actually refer to our CDN as the ADN (Application Delivery Network), just because it has that extra slight bit of logic that you can start to build applications on, so... It's interesting.

**Kevin Ball:** That's a topic that I wanna dig in more. Everything you say, I'm like "Oh, I wanna dig more into that."

**Break:** \[00:24:30.12\]

**Kevin Ball:** One of the big questions in my mind is essentially how much can we push out to the edge? What can be there? Because it's not just content. You can have authentication out there, you can have some amount of routing out there...

**Phil Hawksworth:** Yeah, yeah.

**Kevin Ball:** Where I sort of run into challenges is what about data? I was chatting with -- I'm blanking on his name now... Brian--

**Phil Hawksworth:** Brian LeRoux?

**Kevin Ball:** Yes, Brian LeRoux... Earlier (or yesterday), and we were talking about one of the big challenges is "Okay, how do you update data in a JAMstack application, and what pieces of that can live where?" I kind of wanna get your sense on where's the line? What can't we push out to the edge?

**Phil Hawksworth:** Yeah, that's such a good question. Dynamic data is a very interesting one. I'm thinking about Netlify for the context of this. We don't have our own database service or data store; that's not the business we want to get into. We wanna be the glue layer that allows you to stitch those things together. So when it comes to where you stash data and how close to the edge it gets, it kind of depends on the service you end up using. Some of them are more readily distributable than others, but very often there is an origin that you're hitting there...

**Kevin Ball:** Yeah.

**Phil Hawksworth:** ...so you're eventually gonna start to bump into that. And it really -- I hate using this phrase, "it depends", but it kind of depends... Some services are in good shape to distribute that, and distribute the data around the edge, and so those requests are themselves being routed through and served by something which is close to where the user is requesting them, but not all of them have the same kind of profile. So you're kind of leaning on the provider a little bit there.

**Kevin Ball:** Yeah. Is there anything else that doesn't make sense to push out to the edge?

**Phil Hawksworth:** Well, I don't know... I'm focusing so much on trying to do that, that--

**Kevin Ball:** \[00:28:03.23\] Yeah... Or flipping that around - as you have pushed more and more things, and you come from this perspective of "default push it out", and then ask yourself "Is there something that I can't?", where else have you run into (even if it's not impossible) friction in moving to this paradigm?

**Phil Hawksworth:** I think it's content that updates very, very frequently. When people are keen to do things like push notifications, and opening WebSockets, and those kinds of things - that gets to be a bit more challenging. When you need to centrally manage state somewhere, that gets to be kind of tricky, because you need some central resource for that. So that starts to get a little bit more challenging.

I need to level up a little bit on where Lambdas are going. People ask "JAMstack - is that serverless? Serverless - is that JAMstack?" and I kind of think of the two as just really good friends. They're really complementary...

**Kevin Ball:** That's one way you can build your A.

**Phil Hawksworth:** Yeah, exactly. Absolutely. Yeah, totally. And there's some fun things you can do with that. But yeah, it feels like things like Lambdas are starting to get more powerful for how they can do something approximating sockets, and those kind of things. I need to level up on that. There are smarter people who can talk about that stuff than I. But yeah, anything that has to do with state management gets to sometimes be a little bit tricky, when it's something that needs to be unified across the system. Real-time messaging layers, and those kind of things - that gets to be a little bit less of an obvious fit, I think.

**Kevin Ball:** Yeah, that makes sense. Well, and there's kind of an interesting thing when you talk about data updating a lot, which is incremental builds, and things around that.

**Phil Hawksworth:** Yeah... Yeah.

**Kevin Ball:** And I feel like that's something that some of the big JAMstack stacks (so to speak) are working towards, and saying "Okay, how can we do incremental builds?", but that enables a lot more. Because if your data is updating very rapidly, but each update only requires you to rebuild a small portion of the site, you're probably fine... Whereas if each update requires a complete rebuild, it's a little harder.

**Phil Hawksworth:** It's true... Yeah, lots of people are working on this problem, or this challenge, I should say. But it's absolutely right to call this out as kind of a limitation of a pre-generated model. If you're working on a news organization that has three, four, five million pages, your builds are gonna get long, and you latency matters, time-to-publishing matters, so it's not such a good fit. So this idea of incremental builds is -- I don't want to use the word "Holy Grail", but it certainly is a very important...

**Kevin Ball:** It will unlock a whole other level of who can use this.

**Phil Hawksworth:** Massive. Exactly. It's a really big deal. And there are ways that you can creatively get around some of these things. Again, once you start to stitch together some of the tools that we got to play with in creative ways, you can work around some of this... But ultimately, having true incremental builds unlocks all kinds of new things.

Different static site generators strive differently for this, and get closer to it than others, but ultimately, if you're talking about running a build which is gonna understand the dependency graph of every URL on there, and know if there are related articles, or tags that are different, or if you make one file change in a template file, it impacts everything - understanding that, and being able to target the right things to regenerate...

**Kevin Ball:** That's a big problem.

**Phil Hawksworth:** ...it's a non-trivial challenge, yeah. And then you get into the realms as well of "Well, now if I've solved that, I'm still getting to the point that I need to understand how I cache things between builds. So this kind of intra-build cache...

**Kevin Ball:** Yeah, where does that live.

**Phil Hawksworth:** Yeah.

**Kevin Ball:** And if you're integrating multiple data sources as well, you've got to manage the dependencies between those...

**Phil Hawksworth:** Right. I've been having quite a lot of fun playing with things in this territory a little bit... Mostly in the kind of "What do I cache between builds?" situation. I guess it's a lesser-known, kind of secret - don't tell anyone; this is between you and I...

**Kevin Ball:** \[00:32:08.24\] \[laughs\]

**Phil Hawksworth:** ...that in Netlify there is a means to cache things between builds. Now, this is not a thing that we've documented, but we use it, and you could use it, too. For instance...

**Kevin Ball:** Okay, where do I find that? \[laughs\]

**Phil Hawksworth:** Yeah, so the key is that between builds, when we -- let me explain... So the first time you run a build of a project on Netlify, it will install all of your dependencies, and then it will run your build. We stash those dependencies...

**Kevin Ball:** Right. Yeah, I noticed that.

**Phil Hawksworth:** Yeah, so that speeds up the subsequent builds.

**Kevin Ball:** Oh, so that means you have a caching layer somewhere.

**Phil Hawksworth:** Somewhere... And we very deliberately haven't documented that and exposed that. We haven't locked it down, but we haven't exposed that. And the reason we haven't exposed that to everyone is that as soon as you start managing your cache between builds yourself, it's a very easy footgun.

**Kevin Ball:** It's very easy to f yourself up.

**Phil Hawksworth:** Exactly. It's very much a "buyer beware" kind of scenario. However, you absolutely can use that. I've built a few proof concepts, just exploring that a little bit, so that I could shard my site. I've built a site which was a Hugo build, which is already very fast in terms of its generation speed... But I've kind of segmented. I was like "Well, I've got a new section, and I've got a blog section...", so depending on which parts of the site I updated, I ran a slightly different build, and then I cached things into this layer, between the builds. It's a little bit clunky, but it's absolutely possible. And I think once we start seeing ways to ease that use of the cache in between builds, then this becomes a little bit more approachable. And the reason I mention this now is that just yesterday we announced build plugins for Netlify at the conference... And those allow programmatic access to different parts of the build lifecycle.

So whereas before all you could say is "Here's what I'd like you to execute during the build", there's lots of things that go on outside of that. There's getting the cache, initializing the build, all the way through to the post-processing. Now what we're gonna say is "You can write plugins which are just bits of Javascript, they're just Node, that you can either dispute as Npm modules, or you can keep privately, but ultimately you can hook into different parts of the lifecycle."

One of the aspects of that is exposing the cache. So having a plugin which could, for example, make requests to where your data sources are, and stash those into cache, so that then when your build gets to run, that's already there. That's really nice, because it's convenient, but also it means that we can start to say "We'll cache that for however many seconds you like." So content that you know doesn't update very often - you don't need to request that every time you run your build. So we can start to squeeze down the length of the build and optimize for that, and you can start to do all kinds of things with getting things in and out of the build cache, and... It's a fun playground. I'm really excited about building stuff with that.

**Kevin Ball:** That is really interesting. Can you introspect it, essentially? Now I'm thinking about this problem of "Okay, how would I even go about this...?" I'm using a third-party framework, I've just built this new site using Svelte and Sapper, and I'm playing around with that, which is super-fun... But I can't pretend to understand all the dependency paths. Would I be able to, for example, say "Okay, let's keep data on which files change and which output files change", and sort of map that over time, so then I can start to derive a dependency graph.

**Phil Hawksworth:** Oh, that's interesting, yeah.

**Kevin Ball:** Essentially, rather than thinking of it top-down, of "I'm going to figure out how to do it", I'm gonna observe it empirically, and say "Okay, I have observed that these files influence these things, so until I change something about my site structure, I can make these assumptions."

**Phil Hawksworth:** \[00:36:06.06\] You absolutely could do that. We're not gonna give you the code to do that, but...

**Kevin Ball:** But the hooks are there.

**Phil Hawksworth:** The hooks are there. The important thing is that if you can write a Javascript function to consider what's changed when, think about what the dependencies are, if you can inspect that through the Javascript function that you've written, you can absolutely introduce that into your build logic, so that before you actually execute the build, you can have that level of introspection beforehand, that says "Okay, now I need to run this build command, or maybe this build command, which is different, depending on what's changed." That's an interesting use case.

You see, every time I talk to someone about build plugins, another idea kind of springs forth... And yeah, if you can build it, it can be run as part of the build lifecycle now.

**Kevin Ball:** So in that build lifecycle then, can I look at what's in the cache, and output it?

**Phil Hawksworth:** Yes, you can.

**Kevin Ball:** Because I wouldn't know yet how to write the final version, right? But what I'd wanna do is first write an observation, "Okay, look, these things have changed since my last build, and here's what's in the cache, here's what's after the cache."

**Phil Hawksworth:** Exactly. This is still in private beta. The private beta was just announced yesterday. But one of the utilities we're absolutely gonna have is an easier cache API. And when I talk about cache, I'm talking about the intra-build Netlify cache. So in that way, you will be able to inspect what's in there, and then take action accordingly.

So yes, I expect the plugin to be done and finished by -- I don't know, this time tomorrow maybe...?

**Kevin Ball:** \[laughs\] Maybe by the time this airs.

**Phil Hawksworth:** Okay, fair enough.

**Kevin Ball:** We'll see.

**Phil Hawksworth:** But yeah, it's fun stuff to start playing around with, and I've seen so many different bits of imagination used on this, whether it's like "Okay, once I've done my build, I can inspect what's come out of that as well, so I can maybe do a Lighthouse test against it, and start reporting about that over time..." That excites me. The idea of not just getting a score for my site, but tracking it over time...

**Kevin Ball:** And linking it back to particular commits...

**Phil Hawksworth:** Exactly. Being able to see "Okay, our performance took a hit here. What was the cause of that?" and then being able to track that back to a Git commit. Again, it comes back to this Git all the way, from end to end; so many good opportunities... So yeah, I'm excited about it.

**Kevin Ball:** That's really cool. I wanna be very respectful of your time, and you need to get back pretty soon...

**Phil Hawksworth:** I probably do, yeah, before they need to get another speaker on stage, and it will be a free for all.

**Kevin Ball:** Okay, so one final question I'm gonna put out there...

**Phil Hawksworth:** Yeah.

**Kevin Ball:** So a lot of what we've talked about in terms of the benefits of the JAMstack are benefits for developers, benefits for end users. One of the areas that I have questions - and I know there have been folks at this conference talking about this - is what about other parts of the business? For example, if you're interacting with the marketing department, you're interacting with the content department, folks who are doing this, folks who are not using Git and having stuff on there - how developed is that ecosystem, and what still needs to be created there to make this as seamless for them as it is for us?

**Phil Hawksworth:** Oh, that's a great question. It's getting richer and richer all the time. When I first started working in this space I was very enthusiastic about static site generators, and I love writing markdown, and putting some YAML front matter, and committing it to Git, and then doing a little happy dance...

**Kevin Ball:** It's beautiful.

**Phil Hawksworth:** Yeah, it's great. But a content author never wants to touch Git. And frankly, a content author should never even need to know that Git exists. So one of the things that kind of came along a bit later were tools like Git-based content management systems, and one of the talks actually here at the conference was by Shawn Erquhart, who's the lead for Netlify CMS. The Netlify CMS is by no means the only Git-based CMS that exists... But what tools like that do is they're aiming to close this gap between writing markdown and submitting it to Git, and then having your continuous integration do all of its magic... Closing that gap between that and the content authoring experience.

\[00:40:11.28\] Netlify CMS, for an example, gives you an authoring experience that looks like what you'd expect, can give you an instant render of what your page will look like - is it gonna apply the same templates for that page in real time, as you're typing? But behind the scenes, all it's doing is it's poking content into your Git repository. So as a content author, you're writing content in a structured way, you're seeing the result immediately, but when you hit "Give me a preview of that", you don't know that behind the scenes it's making a pull request, pushing that to a repo, making sure that your content is managed and version-controlled with your code, and all of those things. You're just working seamlessly on top of that. And more and more tools are arriving to make it feel like "Oh, it's the context that I want to work in as an author or a marketing person, or what have you." So that's one example.

I think another real strength of JAMstack sites is how immediate you can get a real-life, real context preview into the hands of stakeholders.

**Kevin Ball:** Yes... Branch previews? I was talking about that with Katie earlier...

**Phil Hawksworth:** Yes.

**Kevin Ball:** It's brilliant!

**Phil Hawksworth:** Yeah, and it's one of those things - when you start using it, you think "How did I do this before?" But you just get spoiled...

**Kevin Ball:** I have one site doing this and one site that is using old-school staging environments or whatever, and oh my gosh... I just wanna get out of that as soon as I can, and \[unintelligible 00:41:35.01\]

**Phil Hawksworth:** Absolutely. Yeah, and it's incredible, because there are so many big, reassuringly expensive, trusted blue-chip products that try and do all of this for you... And if you've got maybe a big, expensive CMS, and a big site that you're going to roll out, you'll want the production environment, and the staging environment, and the QA environment, and they have to be in lockstep. They have to be--

**Kevin Ball:** Managing things, and "Oh, this went out to staging, but then it was disapproved by this person, but these other things need to go out..."

**Phil Hawksworth:** Right. Yeah, and since each one of those is infrastructure, and it's its own infrastructure, strictly speaking, that needs to be a perfect facsimile of each other, a part of infrastructure, so that if you do see something in your staging environment, you're 100% confident that that's how it'll behave in production. Managing those things is difficult. I think lots of \[unintelligible 00:42:25.13\] by that before. I worked on projects where the lead time to get content deployed - content, mind you, not code - has been many weeks... And that's from a dynamic, large enterprise kind of piece of software.

The situation we're now in with JAMstack - and many vendors, but I'm particularly thinking about Netlify here - is that we work on this branch model on Git. So if you want another environment, you create another branch, and then those builds go to that URL... Realistically, that's all on the same infrastructure. It's all being served as production, which means that if you see it there, that's how it will behave. And we're not reinventing methods of forking and branching and creating versions, we're using something that exists already, which is designed for that, and that's Git.

So the point that we're happy with what's being deployed onto the production - a feature branch or other, or a staging branch - it gets merged in, and your deployment is done. So that means that you can create these views of what your feature is, what your latest content change is, and share that with a URL (a unique URL, or a URL for that branch) with whoever needs to see it, and be absolutely confident that what they see is what they'll get. And for me, that's really empowering.

That has reduced the overhead on so many projects that I've worked on in the past... And that's actually been the real a-ha moment, because yes, developers - we love to have a nicer developer experience, and that's great, but realistically, the thing that really matter is, well, ultimately the users, but before we get to them, the stakeholders. Are they gonna be happy? Are they gonna be confident in what they're seeing and give you the thumbs up so you can get something live? And increasing the visibility of what you're working on and reducing the lead time and getting changes that you're working on into the eyes of the people that need to approve it - that's a game-changer. So for me, that's one of the super-powers of the JAMstack, I think.

**Kevin Ball:** Wonderful. Thank you so much, Phil. This has been fun!

**Phil Hawksworth:** Thanks for having me. It's great to chat.

**Kevin Ball:** Yeah, absolutely.
