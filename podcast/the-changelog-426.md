**Jerod Santo:** I am joined today by two friends, Guillermo Rauch of Vercel, and Amal Hussein of JS Party (that's the way I'll introduce you), a regular on JS Party; you may know her voice if you're a listener to that... Welcome to the show, friends.

**Amal Hussein:** Hi. You may call me Lady Amal of JS Party, good sir...

**Jerod Santo:** Okay, Lady Amal. \[laughter\] And Guillermo, thanks for joining us on the Changelog.

**Guillermo Rauch:** Thanks for having me.

**Jerod Santo:** We are excited today to talk about the web, a beloved platform by all three of us here on this call... And we're gonna talk about where the web has been, why it's important, and maybe even cast forward and talk about where we think it is going. Guillermo, your reputation in my mind is a person who's always on the edge of what is happening today and tomorrow. Long-time listeners of this show may recall you were on the Changelog back four years ago now; it doesn't seem like it was that long ago, but time flies... Talking about Hyper, talking about now... HyperTerm it was actually called at the time... Now and ZEIT, which I introduced you as CEO of Vercel - Zeit/Vercel, same company; rebrand, rename. Vercel is what it's called now. That was a long time ago; you were also more recently on JS Party, talking to Divya and myself about Next.js and what's going on there... But welcome back to the Changelog, I guess. It's been a long time.

**Guillermo Rauch:** \[03:59\] Yeah, it's been, and the web has continued to evolve, and things have gotten better every day; I'm happy to talk about some of the trends that we're seeing and what the journey has been, but also where it's leading.

**Jerod Santo:** Absolutely. Well, we're gonna talk about what's been going on recently in the web, but first we wanna talk about the web as a platform itself, because as I mentioned, we're all here advocates for/fans of the web. In fact, Amal has a podcast called The Web Platform Show... Is that what it's called?

**Amal Hussein:** Podcast. The Web Platform Podcast.

**Jerod Santo:** The Web Platform Podcast.

**Amal Hussein:** We keep it pedantic and simple.

**Jerod Santo:** There you go. Changelog trivia - we were once TheChangelogShow.com, so things change, but the web is also changing... Amal, in your opinion, what's so special about it? Why is it different, why is it better than other platforms out there? Why do you dedicate your life and your work and your resources towards the web platform?

**Amal Hussein:** Yeah, I think only need to have a conversation with me for about five minutes before you realize that I love the web; I think the web is the best. In fact, my husband is actually an engineer that works on mobile platforms, and our house is like Mr. and Mrs. Smith...

**Jerod Santo:** A flame war?

**Amal Hussein:** Yeah... \[laughter\] Mr. and Mrs. Smith of team web vs. team mobile. He's always making fun of me, and he's like "Well, you know, at least I have a predictable roadmap." And I'm like "Well, you know, at least I have choice and freedom." \[laughter\] Freedom! But anyways. So the web is quite literally, in my opinion, I think the greatest thing we've accomplished as human beings... And it's simply because our archive of information, our access to each other - we've been able to make the world a better place because of the internet. Of course, there's downsides, but the best thing about the web is that it's an open protocol; that means you use standards, and you can try to hook into it without any kind of middle person, sans your ISP provider... That's the middle man that people are often trying to kill.

It's the open web, and the reach of the web is like no other, and it's very important that we keep the web open and accessible. During the pandemic, the web has shown that it's even more important; it's interesting to see companies starting to reinvest in their testing infrastructure for the web, and taking their web presence a lot more seriously. We're realizing this is this critical thing, and maybe we got a little excited about native apps for a little while, but there's no beating the good old-fashioned open web. Curl from anywhere, reach from anywhere...

**Jerod Santo:** There you go. That resonates with me, especially the permissionless aspect of it. Guillermo, what's your take on -- I mean, you've been doing web dev for so long now.

**Guillermo Rauch:** Yeah, I'll add to that that -- so the web has this native way of connecting ideas through hyperlinks, that I consider to be one of the most powerful inventions ever. I'll echo what Amal said with regards to it's a huge accomplishment of agreement between lots of different parties that'll have this standard for connecting applications, documents, websites, literally anything through hyperlinks and a set of protocols to drive them. So there is that aspect that continues to be the thing that inspires me a lot.

When we launched Vercel, the main idea at the beginning was this idea of deploying very quickly, getting this deploy preview, and this URL to share your product with your teammates and with anybody that you wanna collaborate with. So all about this idea of "Let's expose a hyperlink quickly, earlier in the process." And I continue to be inspired, because I see so many people taking advantage of this optimization of how it can work. We nowadays share lots of Notion documents in our workplace; we share Calendly URLs for scheduling time with people.

\[08:17\] So this idea of the web is an open platform that is connected so easily between strangers and organizations... And what you talked about, which is that I don't need permission to publish this new way of sharing calendars or sharing documents, or sharing product previews. It's all built-in. And I think no other platform has gotten there.

I know that links work to some extent with native apps, but it's always a huge mess. I don't know if I'm ending up on the web, if I'm ending up in a native app, and there's three or four interstitial modals that tell me download, or pay, or Face ID...

**Jerod Santo:** Hopping in between them.

**Guillermo Rauch:** So there's nothing like the web in that ability to connect ideas, people, applications and documents.

**Jerod Santo:** Absolutely. I will name-drop VRBO, which is like a vacation rental web -- think of it like an Airbnb for vacation rentals... And they have a website which has the URL of a vacation rental, and you can share that URL. My sister shares it with me on iOS, inside the Messages app, and I click on that, and it takes me to Safari, which takes me to the App Store to download their app... And I don't want their app, because I already know there's a web page that represents this... I click back to Safari, I'm actually looking at the web page right there, and all they will put on their mobile-detected version of their web page is just the first picture (not all 37 pictures of the place), and then "Download the app on the App Store." And I'm like "This is not what I want in life. This is terrible."

**Guillermo Rauch:** Yeah. It's not what we were promised. At the end of the day, it comes down to user experience. I wanna tap, I want to get this experience... If it's limited because I need to grant more permissions to the system, or I need to log in, or I need to pay for something, I think that's understandable.

**Jerod Santo:** Yeah, give a reason.

**Guillermo Rauch:** But it has to be a smooth transition. I think only the web can do that today, and it's still to be seen whether PWA is what takes us all the way through that transition... But I would say any company will see better results when they give their customers ultimately what they want, which is - in my case, I just want to see a vacation rental right away. And if I want it rented right away, that's even better. You can make that happen.

**Amal Hussein:** Yeah. I have to echo -- a couple shout-outs to some web APIs that I think have helped smooth the link communication in mobile apps... The Web Share API - I don't know if y'all are familiar or remember it. It's not that old. Essentially, it's a way for you to share information, with anything, from your phone. So you can actually implement it, which is really nice. It works beautifully on Android and iOS. But I think for me the walled gardens, like the areas where you're interacting with the web through a device that's perhaps owned by a proprietary company, and the company has interests in you using their app store... I feel like the web has had a really tough battle, both with devices getting smaller and faster, and better to use, and the long arc of the web - how long it takes for things to get updated etc. Not all websites really caught up with it, so you don't have this graceful, beautiful, out-of-the-box experience.

So there's just so many uphill battles that I've seen for the web. We're still very much in the thick of it, specifically also for new internet users, like folks coming online for the first time. There's millions of people in Brazil and in India coming online for the first time every year, and they're kind of learning about the internet through apps. And when I say apps, I mean native apps that come pre-installed on their low-end devices. And I can say the same thing about my younger siblings, that are much younger than me.

\[12:17\] So the web has a lot of catch-up to do, I would say, in certain areas... But obviously, if you take the accessibility of the web and you kind of supercharge it with the powers of native apps, that's what you're supposed to get with progressive web apps, and potentially projects like FUGU from Chrome.

**Guillermo Rauch:** Yeah. Another thing I'll add there - you were mentioning there's these APIs that are really powerful and they exist... I think what we're gonna see over the next few years - we're gonna catch up to the reality that you can actually create a much better mobile web experience today than you probably realize. And these are some of the things with Next.js and Vercel we're working on - making it easier and easier to get to that point... But when I look at the mobile web, I see a lot of low-hanging fruit. I see APIs that exist that are not being leveraged; like you mentioned, there's Web Share, and there's many others that could be used, that are even supported in iOS.

I see just low-hanging fruit in the sense of like it's clear that the development team or the creator has been thinking desktop-first, and then there's this kind of mismatch of capability that -- and all these people might still want to request the desktop site, because this function that they're used to using on desktop is not on mobile... So even though responsive web has grown a lot, and people love it, and it's like "Oh, I'm gonna make everything responsive, I'm gonna make things mobile-first" - it doesn't really materialize. I still see all through the web that there is missing capabilities on mobile, or things just seem more optimized, and better thought through for desktop. So I think it's gonna change, specifically around verticals like e-commerce, where there is demonstrably more growth in pageviews and growth of pageviews on e-commerce sites and mobile.

Now, conversion is probably much better on desktop, or if the user chooses to install a native app... But that's in a lot of cases because we haven't engineered the web well enough for mobile. Performance is not there, so that's another low-hanging fruit example of -- a detail I like to point out is a key difference between native apps and mobile websites is just how smoothly taps work, and how smooth the transition is to the next pane, or thing that you're revealing, or whatever...

**Jerod Santo:** Right...

**Guillermo Rauch:** And that's not a battle that you're losing because native has all this low-level optimizations, GPU, whatever... In a lot of cases you haven't even tried to optimize your mobile website. A cool example here is hover styles delay taps on iOS, especially hover styles that have been left from desktop that have CSS transitions. So you tap, and iOS tries to show you the entire transition from nothing, to hover, to the next state; and it's taking hundreds of milliseconds. So that battle you didn't lose because "Oh, that Swift UI with M1 chip is so fast, and the web can't compete. We need Web Assembly 3.0." No. That's just because you can't optimize for mobile web.

So that's what I'm really excited about. I know that iOS won't give us every API that we want, and they have conflicting business interests, and security concerns... But even today, we can make things so much better.

**Jerod Santo:** So that might come down to tooling, to a certain degree, because a lot of those things that lack is not because the lack of thoughtfulness or desire by the developer, or the team, or the company...

**Guillermo Rauch:** \[16:13\] Absolutely.

**Jerod Santo:** Oftentimes it's because of priorities, and constraints, and money... The externalities, so to speak. And they just don't have either the knowledge they need to even know how to accomplish what you've just described, how to avoid that thing that looks clunky, or they don't have the time to do it... And tooling really helps there. So we can talk about the web platform, but then you can also talk about web development as the principles and practices.

So from your two's perspective, in 2020, as we're turning the corner to 2021, what was the state of the art in web development? I know that there's debates about "What is state of the art?", but in your guys' opinion, currently - not where it's gonna be tomorrow, or next year; but in 2020, what are people using, what are common practices? Catch us all up, or at least give your vantage point of what you think is modern web development today.

**Amal Hussein:** Do you wanna start, Guillermo?

**Guillermo Rauch:** Yeah... Obviously, I wanna preface by saying we have a pretty opinionated viewpoint, in that we create a React-based framework, Next.js. It's obviously very popular. But at Vercel, our platform works on top of the web platform, on open standards. We let you import projects like Next.js, or any other modern frontend technology. So in that sense, we're also not opinionated. But what we try to do with Next.js is we want to create the state of the art, from our point of view, or the art of the possible. What's the best possible developer experience that we can give people, and what's the best possible end user experience. From those ideas, we invest in the framework to embed them.

So from the perspective of developer experience, I think, the state of the art is clearly collaborating on top of React components; I mentioned collaborating because one of the modern trends is for companies, organizations, teams to agree on a shared toolkit, a designed system, a set of reusable components that they can build sites, applications, prototypes from, and they can do so very efficiently.

React has enabled the web platform developers to agree on a standard to encapsulate that look and feel in behavior. The best example here is we used to have templating languages, especially on monolithic server-side-first frameworks, like Ruby on Rails etc. And to a great extent, a template language can combine both HTML and CSS into reusable little functions that output strings, and then you have ways of sharing components with a certain look.

What React has done, in my mind, has been this introduction of a greater possibility of composability, especially with hooks. Now we can encapsulate look, and also behavior. We can even take hooks and share the behavior part and apply them to different components. So it's like playing with Lego bricks that have effects; Lego bricks on steroids, so to speak.

\[19:39\] To me, the state of the art looks like teams that don't just know JavaScript, HTML and CSS, they also know how to encapsulate that knowledge into reusable components. React is a platform, it's a reality in my mind. And I mention React as a platform because React embeds things that are not very intuitive if you come from imperative JavaScript, or even other programming languages where you have to embed these concepts of purity, and there's rules of hooks. So these shareable behavior bits that I've talked about - they have rules that are not necessarily rules of the language. How closures work or not work with hooks is always something that trips beginner developers in React.

So to me, the React platform is here, it's real, it's making people really productive, it's making developers happy... Now, the other side of the coin is is it making users happy? Because we have all these sophisticated libraries, and you use a lot of JS, and you can render on the client side, and all these things - it doesn't mean you have good performance. That's where I think we're kind of waking up a little bit from the hangover of single-page applications, huge monolithic bundles, only using client and not leveraging server-rendering and pre-rendering. That's where a lot of the new trends over the last couple of years, one of the things that made Next.js very popular to begin with was we gave you server rendering and pre-rendering out of the box... Whereas when you used React as it came from Reactjs.org, you had to assemble it together with WebPack, and then you didn't have any server rendering or pre-rendering capability.

The state of 2020 is we've gotten a lot of power, but we're starting to use it in the ways that are really performant for end users... And the trends that are interesting to me there is somewhat of a return to the server-side rendering world, but slightly different, because with JAMstack we have server rendering at build time, which is certainly interesting if you have things that are fairly static. We have server rendering through serverless infrastructure, with Lambda functions, like how Vercel handles Next.js over site rendering... And you can combine and mix and match technologies like this to make really performant websites. That's where there still is a battle, and Web Vitals are now coming into the equation to allow us to measure properly what performance means... Because really until 2020 we didn't have a good idea of how do we quantify web performance. So I'm really happy that that's also part of our future.

**Break:** \[22:47\]

**Amal Hussein:** Listening to you, I was like "Oh wow, you're describing so many of the things that I practice on my own..." Like, inside of teams, or within our company, things that we practice... I'm like "Yes. Check, check, check. That's great." But that being said, I think for me, +1 to everything that Guillermo's shared... However, I'd like to kind of maybe -- not pushback, but I would say my counter is that I think React definitely pushed forward this whole model of componentization, and I think it's taken it to the next level.

I would say React specifically for me is -- the API is just getting, I would say, more and more confusing, and/or maybe is trying to do too much, with concurrent mode and all this other stuff. I'm not quite sure I'm personally on board with that just yet, and I'm speaking as somebody who's used the tools since early days, and who's generally a long-time user.

So I would say that it might be kind of the beginning of a shift; kind of a pendulum shift is what I see happening, where folks are gonna be going a little more pure. So I think React really did a wonderful thing of bringing inside of this crazy land of templating and custom domain knowledge, where you're mostly using JavaScript, mostly using CSS, mostly using HTML, but all in JavaScript.

But I think now we're realizing there's a lot of performance gains to be made by reducing complexity even in the tooling layer. So do we really need virtual DOM? I'd say no. Do we need all these other things? You can architect yourself out of problems that maybe React is trying to solve. So in that sense, for me it's like an asterisk on that. I don't think React is going anywhere, especially with the arcs of the web... But that being said, I think for me - I wanna go back to the tooling discussion; I think the secret sauce is all in the tooling.

I think abstracting away complexity for developers actually also means a better and healthier web... Because a developer is not gonna test something on every browser, or make sure the web pages are accessible. So the better our tooling gets, and the more widespread that tooling can be, the better the entire web will be. So I think we need to really focus on our tooling, and shifting. We need to focus on shifting; shifting people forward en-masse - how are we gonna do that? That's the biggest challenge of modern web development, and managing legacy code, and practices. We're not all on the same set of tooling... And we don't need to be. But ultimately, the web is moving forward, and more so the way the web is accessed is moving forward; devices are getting smaller, the web is in more places now... I have like 50 things in my house that are connected to the web, for example.

So we just need to think about how we're gonna keep moving our code forward with the web. I think tooling is a big part of that, so "How do we distribute that tooling?" is the question... More effectively than we are now. Because I think it's very siloed right now. I think the modern web development level for me is too much of a bubble. I don't think it's as widespread as we think it is.

**Jerod Santo:** Well, we're definitely on the inside of the bubble, and listeners to JS Party, and Amal's podcast - we're definitely on the forefront of that. But for people who haven't been so close to the edge... Guillermo, you mentioned JAMstack, you mentioned pre-rendering - these are things that are going on. I think the concept of pre-building with all the data that you have before you deploy is a thing now that's very popular, very much a modern move. Of course, it's also a legacy move that we've just -- we have changed it with JAMstack, right? We're kind of decorating, we're doubling down on saying "We can do way more than just your blog posts, spit out into HTML before you put things out", and that's why the advent of things like Gatsby - and a lot of the stuff you're doing at Vercel, and with Next.js, which is a hybrid approach - is popular... But can you give the old JAMstack 101 to folks, Guillermo, and just get us all on the same page with what that means and what it implies?

**Guillermo Rauch:** \[28:26\] Yeah. And I like what Amal said with regards to tooling being the fundamental investment that we need to make. That doesn't stop at React, but component systems like Sveltes and Vues are also extremely suitable for the modern web... And what we're seeing there as well is that there's frameworks being created on top, that facilitate a lot of the features that people actually need in their day-to-day to build robust web applications and sites... So Nuxt for Vue, for example, and SvelteKit for Svelte... We're seeing this kind of new category of tooling emerge on top. Next.js I think was an early mover with React, but we're seeing Nuxt for Vue, and we're seeing SvelteKit for Svelte. And that touches on the concept that you're talking about now, which is they're all hybrid frameworks.

And for those of you that are familiar with JAMstack - JAMstack was a movement or principle that said "Well, the web should be static...", but not static in the sense of just do everything on the client-side with JS, meaning you give an empty index.html file that loads some JS, but also within JAMstack is two other ideas. One, that you should pre-render content, so you should just have it in the HTML, and two, that you should use a CDN. If you can stick to pure JAMstack for everything that you do, you're probably gonna have some performance benefits that are not negligible... Because in contrast, you could have a monolithic server in one particular region, that doesn't scale horizontally, especially if you haven't invested a lot in your DevOps, and clusters, and so on... And then you might or you might not have installed a CDN, and you might or might not be caching in that CDN correctly.

So what JAMstack brought was a set of constraints that said "Well, it will be static, and it will be cached at the edge." The problem with that, as it turned out, is people have also very good reasons for dynamically rendering pages.

**Jerod Santo:** Amen.

**Guillermo Rauch:** And also, sites of a certain size can not just pre-render every page... And together with all of that, when we're talking about mobile web versus native, a tremendous advantage that I see for the web is that when you tap on a link, it can render just in time the page just for you, without you having to have downloaded a massive application with all the possible code paths, not just for you, but for every known language, every known variant, every experiment, and every other cohort of users.

The web has this magical -- and it goes back to my concept of the hyperlink... You go to this hyperlink, and it's almost like a black box; you don't know what's gonna come out on the other side. And that has this beauty of "I can give you the specific set of code, I can give you the specific HTML, and the specific CSS for what you need, just in time, at that very time." And that's only possible if you combine ideas of JAMstack with more traditional ideas, like server rendering.

So this concept that we pioneered with Next.js, this is what frankly drove and got us the attention from Google Chrome's team, that started contributing directly to Next.js, because it matched very well what they'd seen internally at Google as being the best ways to scale really large sites and really large applications.

\[32:14\] It's always with a combination of CDN caching for the parts that are known to be static, but also leveraging what I call the power asymmetry of the world, which is - the average mobile phone in India, which is the Xiaomi Redmi phone, is not gonna be as powerful as a server's pre-warmed with all your application code, sitting on a data center. And not only will it not be as powerful, but by transferring some of the rendering load to that powerful server, you reduce the battery life, you reduce the download amount they are putting on that device.

So I think one of the ways forward for the web will be to acknowledge that there is no silver bullet where you say "Oh, if I make everything static, and if I JAMstack this or that, I'm gonna get great performance", because you might also limit the ability to customize, personalize and create very dynamic content just for a certain user, context, country, language at a certain moment... But not only that. As I mentioned with Web Vitals, one thing that we've learned as well in 2020 - and before that, but it became very clear in 2020 - is just because a CDN can give you HTML really quick doesn't mean that you're gonna have a fast website.

The example I like to give here is when Facebook launched the new Facebook.com built entirely on top of React, which was supposed to be this engineering marvel, because the open web is so introspectible and debuggable, a developer went ahead and inspected it and realized that they weren't even using CSS that much. They weren't using box shadow, and they were using spacer divs.

And the box shadow one was particularly puzzling to me, because I remember the old days of the web, where we didn't have the box shadow property, and we had to use background images... Or not even background images, we had these image tags. And Facebook was doing that because they realized that for that particular element that was floating on the screen, box shadow had really bad performance.

So performance is not just a matter of like you downloaded that box shadow property in-line into the HTML really quickly from the edge. That obviously is gonna help. But then begins this other complete new box of surprises, or Pandora box of performance. And that's where the Web Vitals metrics that Google has created are extremely helpful... Because if you are experienced with backend engineering, you know that one of the easy things to measure in this pipeline is "Okay, I'm gonna measure the p99 percentile distribution of response times and render times." In fact, github.com used to include this in their status page. Status.github.com would show you the mean page render time, the p95 page render time etc. And you would say "Okay, it's 300 milliseconds." And you're like "Okay, that's really good." It's like two blinks of an eye, or whatever. The threshold of attention, or whatever.

But then you realize "Okay, I gave that to the web browser, and now the web browser is struggling with rendering box shadows, or Intercom widgets, and GDPR pop-ups, and all the layout is shifting, and there's three cookie banners, and another one to accept the terms of service... Actually, that one is fresh from today.

\[35:54\] Today I went to a website... This is a marketing website. And it was presenting two blocking modals. One to accept Terms of Service, and I was like "Terms of Service of what? I'm just visiting this website." And the other one is a massive GDPR modal. And both of those things kind of came in a little later...

**Jerod Santo:** Right. You're just starting to see it, and then they pop in.

**Guillermo Rauch:** Exactly. So the first paint, the browser is just spending all this effort in making that first paint, and then it interrupts itself with all this new JS and CSS and HTML that paints on top... And then the background rendering continues. So this world - we cannot understand it with a single metric.

**Jerod Santo:** That's an insta-close by me.

**Amal Hussein:** Yeah, for me too.

**Jerod Santo:** I'm not even wasting my time with that. I'm on to the next tap, because there's plenty of web pages out there, right?

**Guillermo Rauch:** Yeah. So the Web Vitals invention for me is a breakthrough... And it's very important to mention here that they're heuristics... Because the only thing that could truly help us here is an AI that tells us "The website feels good." Or you just look at your business metrics, or something like that. But Web Vitals are three; one says Cumulative Layout Shift. That's really important, because when you load something on the client side, that the pre-rendered page or server-rendered page didn't know about, then the layout becomes really messy. And that was a lot of effort on the \[unintelligible 00:37:21.27\] "Oh, I did all this effort to paint this pretty picture, and then you're telling me that I have to split it in two and create this new rectangle in the middle, because an ad loaded, or so on?" So that one is Cumulative Layout Shift, it's one of the Web Vitals.

Then we have Largest Contentful Paint (LCP). That one is super-interesting, because with single-page applications one of my personal pet peeves was that they always render into a spinner. So it's like, if you're doing edge JAMstack etc. it's like, the edge is really fast time to spinner. And that's not really gonna help your business. If I go to Amazon.com and I have really fast rendering of a spinner, then that's not really good. So that would be like the first paint of the pipeline. But what you're most interested in is how long does it take until the most meaningful paint has been made? So the one that has the products, the Buy button etc. And that's LCP, Largest Contentful Paint.

And the other one that I'm really interested in too, with all this new, modern web tooling that we're talking about, is that if I press Buy, will the website respond at all? Because sometimes it doesn't do anything, because the JS isn't loaded... Or - I don't know if you've ever seen this - it takes you to the top of the page with an anchor, because the href has an anchor... So you press Buy, and it just goes to the top and it doesn't do anything until JS loads. Or even worse --

**Jerod Santo:** Is that because the anchor doesn't exist yet? Like, that element doesn't exist yet when you're clicking it?

**Guillermo Rauch:** Yeah, the element has not received the on-click handler yet...

**Jerod Santo:** Oh, it hasn't been tied together. Gotcha.

**Guillermo Rauch:** ...so all it does is just go to the top. People use the anchor tag, but there's not really anywhere to go, because the Buy button is supposed to do something on the page with JavaScript. So First Input Delay refers also to the fact that you might click, and it might not do anything for a very long time, because it's still working through loading all the JavaScript. And a stat that gets thrown around a lot, but I think is worth reiterating, is when you take that phone from India, and just the mere act of loading JS, just downloading it, parsing it and compiling it, that could take 20 seconds for something that the iPhone can do in a couple hundred milliseconds.

\[40:01\] So that First Input Delay Web Vital is like "Okay, I'm gonna tap, and it's gonna respond to my input very quickly", which is what most people want. And I'm gonna caveat this by also saying this \[unintelligible 00:40:18.17\] but at least now we say, okay, these three core Web Vitals we must all agree that they have to have really good values... So much so that Google is gonna start ranking pages incorporating these measurements. Which kind of also closes a chapter on AMP in some ways, because we all probably remember that AMP was not received very favorable, because AMP had this property that you could be on a Google carousel only if you've built with AMP.

But what's interesting -- and the reason I was never too upset with AMP is that I could tap on those things, and I could tell that they were infinitely faster on the web... At least from my experience. And mostly, it was due to pre-fetching and other things. But what's nice is that what came out of AMP was them realizing, for example, that layouts had to be stable.

So this new Cumulative Layout Shift Web Vital comes from that learning of - look, what makes an AMP page be fast, one of the components is that they thought very deeply about a more constrained layout system that made it less likely to have a layout shifting around when you first load the page. So in some ways, the circle is now closed, and we can say "If you're good at these three core Web Vitals, then you'll have this optimal placement in ranking, because you're making a fast website. So it's a way of kind of submitting the proof back into the internet that you have a really fast website.

**Amal Hussein:** Wow. That was like a 101 in web performance...

**Jerod Santo:** There you go.

**Amal Hussein:** Like a digestion pill in web performance, or something like that.

**Jerod Santo:** \[laughs\] I'm still chewing on it.

**Amal Hussein:** Web developers, learn. Wow.

**Jerod Santo:** Is Web Vitals finalized? Do they agree upon it? Is there argumentation about --

**Guillermo Rauch:** I'm pretty confident that they're set, because my understanding is that - and you can fact-check me on this - I think I heard March, but the Google algorithm will start incorporating the core Web Vitals. Web Vitals are many, but the three that I talked about are the core ones... And yeah, I started going through this tangent, because we were talking about JAMstack, and one of the things that comes out of that movement is that, you know, at the end of the day your edge caching a static HTML is not gonna do so much for performance as you might initially think. In some cases, it's super-good, and it helps tons etc. But there's that, and there's also that a personalized web - and this is my personal opinion... I think the way to beat native is for Facebook to render a newsfeed just for you, that's optimal with the \[unintelligible 00:43:18.16\] of their ads, and the content, and whatever, on mobile, they have to download hundreds of megabytes of code. They basically pre-download every possible user journey. And then the updates are also super-heavy as a result.

I can tell you - hey, go to Guillermo's Facebook.com; you've never seen it before in your life, and it can render just in time; with all this amazing code that's been pre-loaded in the cloud, I can render the perfect optimal page for you. And that's a property I think we need to -- if we want the web to win, I think we need to maximize our utilization of that property, because it's a non-starter.

\[44:05\] Mobile native has opposite advantages. In some ways, raw CPU computation, or maybe GPU access, or whatever - they might beat us. But on that specific super-critical dimension, the code distribution of redeployment and that first initial paint could actually be where we destroy mobile, native.

**Amal Hussein:** Right. I mean, it matters so much with data usage, especially in...

**Guillermo Rauch:** Totally.

**Amal Hussein:** ...developing countries, where data is currency. I mean, it's like that in the U.S, as well; I shouldn't really say developing countries. It's more like data is really currency, and people are very conscious of how much their apps are updating, and which websites are "fat".

**Guillermo Rauch:** Totally.

**Jerod Santo:** Right.

**Amal Hussein:** But I totally agree, the web wins on versioning and distribution, hands-down. It's interesting, this Web Vitals -- I think Google has been playing around with some of these metrics for quite a few years now in terms of what's important, with like time to first meaningful paint... There's several acronyms over the past six years, and I've kind of stopped paying attention, because I just profile--

**Guillermo Rauch:** Yeah, FCP even. We used to talk about First Contentful, and now it's Largest... Which makes sense. But they iterate a lot.

**Amal Hussein:** First Meaningful... Right. They iterated a lot, and that's fine. It's all good. Going back to your earlier point, nothing is one size fits all with the web.

**Guillermo Rauch:** Totally.

**Amal Hussein:** And I think for me, going back to our earlier discussion around what makes a world-class team, or a world-class software project - for me in 2020 or 2021 it's software that's progressive; truly, truly progressive at its core... Which means that you are handling for different capabilities on different devices within one codebase... So that you are able to do progressive enhancements and progressive -- what's the opposite of enhancement? Dehancement? I don't know, I'm trying to think of the--

**Guillermo Rauch:** Degradation?

**Amal Hussein:** Right, degradation.

**Jerod Santo:** Yeah, graceful degradation.

**Amal Hussein:** Thank you, yeah. Because really, that's how you're gonna win across the reach of the web... Because that's the unique challenge that we have developing for the web - we don't have these known devices and known constraints, right?

**Guillermo Rauch:** Yeah. What you mentioned about data really resonates with me, because I've heard... I'm from Argentina originally, and I've heard outside of the bubble -- and there's always bubbles; web development is a bubble... In my country, where I grew up, which is outside the city of Buenos Aires, I was outside of the bubble. But even the province of Buenos Aires is a bubble relative to the rest of the country. And I've heard stories from other places in the country where people are like "I'm gonna go back to the town where I can connect to a certain Wi-Fi to download the app. Then I can leave and use my worse data plan to then interact with the app." And there's all these constraints; you have to deal with this long tail of users... From our perspective they're long tail. But if we align our software adequately and we empathize with those other use cases, then we make our software reach places that we didn't even think possible.

That's what I think WhatsApp did really well. WhatsApp got massive distribution in Argentina. One of their first clients was a mobile Java-something-like client, that was less than a megabyte to download... You have to really empathize with all these massive numbers of people that actually can consume your content if you distribute it correctly to them. I think that's another power of the web that will be hard for an app store ecosystem like iOS to compete with.

**Amal Hussein:** \[48:18\] Yeah, I agree. I would say though, to push that further, there's some really interesting things coming to the web platform, Temporal being one of them... For those of you who use projects like Moment, or other date-time libraries, timezone management tooling, it's being able to actually get that in the browser natively; it's huge. I think Temporal is in stage three... Or sorry, they're hopefully going to be advancing to stage three. It took a long time, there's lots \[unintelligible 00:48:50.27\] But we'll link it in the show notes, you can check it out. It's just date-time support, and timezone support coming native to you, which is nice.

**Guillermo Rauch:** And that's a real example too, by the way, of the power of the browser in so far -- there's a lot of code that has already been written, has already been loaded by the web browser instance, that why would you try to then ship more code that is not loaded yet, that has to be downloaded, parsed, compiled, loaded, to do the same thing that the browser already has?

This is one of the key things on the web that we also need to leverage. One of the recent optimizations that we made to Next.js was just more advanced polyfilling, such that we are not giving gigantic polyfills to browsers that already support the modern JS syntax features. It's just an example of -- the browser has already loaded V8, with the capability to use, for example, the class syntax. However, you're investing all this work to pre-compile into another type of syntax, and make your bundle a lot larger, and then not really re-utilizing that which has already been loaded. And that, by the way, is another subtle advantage that the web has against native.

When iOS needs to load a new app, it's just basically like a sandbox of untrusted code that is being run by the app developer. And very little of that is shared with other instances of other apps. However, when you leverage primitives of the web browser, the web browser is already optimized for caching and rendering a lot of different things, like the font atlas, and different capabilities of JS engines. It might already have even parsed and compiled and cached your previous bundles from another page visit.

The moral of the story is try to use what's already been loaded, and don't try to download it again. You're never gonna beat the software that's already running on a device.

**Break:** \[51:15\]

**Jerod Santo:** So where do we think this is all headed? There's definitely things happening, exciting stuff... There's things that we've learned in 2020 and run-up to it, things are happening culturally around the web... We've seen a lot of the large players really take a stranglehold culturally or socially, even just in terms of web traffic. The pandemic has been an interesting thing to watch. It's been very much a "rich get richer" kind of a situation, with the large players such as Facebook, such as Google, such as "Insert FAANG stock here" really booming, and really taking a large share of the value out there on the web.

We've seen people pushing back and trying to decentralize, move things to other places etc. That's on websites. But in terms of the web platform, are there people making moves to provide more opportunity, more tooling, ways of letting the little people have their place, and do things on the web, and flourish like a lot of the big players are flourishing right now?

**Amal Hussein:** Oh my gosh, this is such a big question... Do you want us to be here all day, Jerod?

**Jerod Santo:** \[laughs\] Answer in 60 or less.

**Amal Hussein:** Yeah... Okay, do you want my 60-second answer?

**Jerod Santo:** Yeah, I'll ding you.

**Amal Hussein:** Be customer-focused. That's my answer. Ultimately, the web is powered by people who love your products, your websites, your apps... So build for your customers first, and focus your efforts around your customers, your users, and you'll never go astray. I see too many developers getting either hung up on just things that are really not user-facing, and I think it'd be a really good example, and we might get in trouble for this, but TypeScript...

**Jerod Santo:** Uh-oh...

**Amal Hussein:** TypeScript -- if I could put a survey out there for the number of hours that developers have spent fiddling with their types, and making something work for a system that... Like, quite frankly, what TypeScript has done is incredible, but the reality is there's always going to be gaps. And we see that with Lodash, and others. The beauty of JavaScript is just never gonna really fully be expressed with TypeScript, right?

So just don't spend time on things that your users are never gonna experience. Focus on optimizing the code that is running in the browser for your customers.

**Guillermo Rauch:** I couldn't agree more. I even have a similar opinion of TypeScript. Our teams love TypeScript.

**Amal Hussein:** Oops... Sorry, Jerod.

**Jerod Santo:** I have no horse in this game, so...

**Amal Hussein:** No, you don't, but you know... We have a lot of TypeScript fans, I'm sure.

**Guillermo Rauch:** \[56:02\] And I like TypeScript as well.

**Amal Hussein:** Yeah. I don't dislike it. I mean, I'm starting to like it.

**Guillermo Rauch:** I'm actually a huge nerd for correctness systems, and proof construction software, and proof checkers etc. But the thing that I'll say is -- and I've kind of updated my thinking on this recently... I used to think TypeScript is a trap for not thinking about the customer and thinking always about your type constructions, spending endless amount of time on the beauty of your type constraints, with no regard for whether you're over-constrained in the state space of possible valid programs, or whether you're doing the opposite, which is writing plain JS, which is under-declaring all the possible, correct ways of using your software.

So I think there's always a balance... JS + unit tests constrains the valid programs to be executed to a certain extent, but that's not enough, so introducing TypeScript is a great thing; it's incremental, you can adopt it progressively... But you can get into this pit of "All I'm doing is focusing on over-prescriptive correctness of a limited version of my software, which I haven't even given to users yet."

But the reason I say I updated my thing is I realized "Well, you could argue that for abstractions, too." People have a lot of times fallen for that bit of like "You know, I'll write a better React" or "I'll write a new state management library for React." So I think the type of developer that will not use TypeScript wisely might be the same one - and this is my current hypothesis - that was also doing a lot of activities, or libraries being written, or whatever, and not thinking so much about the end user first.

**Amal Hussein:** Oh, like the "not invented here"? That's another one... That's another 60-second one for you. People who don't leverage open source technologies and try to reinvent the wheel... A lot of folks really -- I mean, oh my God, the examples I could give you, but I won't... But really, just use open source.

**Jerod Santo:** But aren't many of those great open source libraries actually reinventions of the wheel? Isn't that how we progress?

**Amal Hussein:** Sure...

**Guillermo Rauch:** We could get into that... That could be an infinite -- you know what I've been saying recently? And I really stand by this is, in my mind, the introduction of the idea of a component as a primitive, together with functions, classes, strings etc. feels to me very fundamental. It feels to me like when we invented atomic theory in the 1800's, we never looked back, and we're not currently trying to reinvent atomic theory.

Fun fact - React has this atomic structure icon, so the metaphor even goes there... But I think that answers why I think -- you know, at some point you realize "This makes sense. This is an industry-agreed standard. This feels fundamental. I'm not gonna try to reinvent it", and there's the pointless "not invented here" of "You know what - I'm gonna write a better Moment.js today." And there's the standards coming out, and there is data fence, and there's all this other -- maybe there's no true space.

**Jerod Santo:** Oh, that would be a terrible idea.

**Guillermo Rauch:** Yeah, but I was gonna say - maybe there's no true legitimate space. Maybe there is. Maybe right now there's someone that is solving it for the domain of internationalization, or something that I haven't considered previously. However, we could agree with a certain degree of certainty that that wouldn't be a good idea today. So I think picking your battles with invention and creativity...

I like Bret Victor's motto/mantra here, which is "Inventing on principle." So if you have a principle that has not been thoroughly applied to a certain domain - like direct manipulation, in his case; that he can alter a visual representation directly by manipulating that representation. So "Okay, my principle has not yet been applied in the domain of TypeScript. Then there's room for invention there."

But broadly, I agree with Amal that -- I agree and disagree. In some senses, I think TypeScript has created new ways of wasting time...

**Amal Hussein:** \[01:00:19.04\] Yeah, I agree, it has created new ways. But I just wanted to say that I don't hate it. I was late to the game. Every time I do a big refactor and my app compiles perfectly, I feel a lot more confident now with TypeScript, let's say, than I did with JavaScript. Real talk.

**Guillermo Rauch:** Yeah. And also, the question about JS still being there I think is so important, because the agility of JS when you're experimenting, when you're playing with what an API could look like... Even when you wanna give something to a customer before you know what you wanna build; there's still so many good places for it, and I think we can't be dogmatic about putting TypeScript everywhere... So yeah, I would certainly agree.

**Jerod Santo:** I'm ready to make my first prediction for 2021, now that I'm sitting here and listening to you two... And I'm gonna go ahead and predict that TypeScript will have reached the top of the hype cycle, begin its way down...

**Guillermo Rauch:** No, actually--

**Amal Hussein:** No, I don't think so.

**Jerod Santo:** The takedown pieces -- oh, the takedowns are coming.

**Guillermo Rauch:** No, I think there's more.

**Jerod Santo:** You think there's more?

**Amal Hussein:** Nerds be nerds. Have some faith.

**Jerod Santo:** I think the takedown pieces are gonna -- "Why I switched off TypeScript is gonna be the new blog post for 2021."

**Amal Hussein:** Oh, my God...

**Guillermo Rauch:** No, I think TypeScript, the good parts -- this is my guess...

**Jerod Santo:** Oh, I like that.

**Guillermo Rauch:** ...and I'm not an expert.

**Amal Hussein:** Yeah, pragmatic TypeScript. Thank you very much. I wanna push pragmatic TypeScript as well. TypeScript, the good parts.

**Jerod Santo:** Someone needs to write that book...

**Amal Hussein:** Yeah.

**Guillermo Rauch:** It's already happening. I recently saw an article -- or I think it was a \[unintelligible 01:01:45.23\] resurfacing... Type checking has a cost in terms of performance. So there's already a case to be made about using TypeScript in a certain way to maximize type-checking performance, for example. And I think I've already seen some takedowns of specific features. I think we're gonna see that, but at the same time I think it's gonna continue to stick around, because so many people that are maintaining larger projects have not yet started using it. The type system is an area of intense research and innovation on its own. So I think we're gonna see more and more interesting features and capabilities.

Another thing I'm excited about is AssemblyScript, the subset of TypeScript that can be compiled to Web Assembly. I think we're gonna continue to see traction there. It's gaining support for closures... So it's basically saying "This thing that almost looks like JS is compiling to this tremendously optimal standard that you can execute in safe sandboxes at the edge of the network." That stuff isi gonna blow up, I think.

**Amal Hussein:** Yeah, I agree. I think that's gonna be huge. Edge computing in general, and edge everything has been growing. But I'll leave our listeners with this one thing - feel free to reinvent the wheel, just do it on your own time, I would say. As long as your website is not optimal for your customers... You know, you wanna make the web a better place for them, so that they feel better about using the web on their shrinking, tinier, devices. So reinvent the next big thing on your own time, you know?

**Guillermo Rauch:** Yeah. And that's why I was saying I'm so excited about the Web Vitals... Because it'll create the possibility for people to say "Look, this metric is not looking good for us." I'm gonna invent on that principle. I'm gonna say "This new thing got us out of this problem", and that's having that kind of end user impact that you're describing. We're inventing not necessarily because there's a better abstraction, or better ergonomics, but we're actually benefitting users, too.

**Amal Hussein:** Agreed.

**Jerod Santo:** Love it, love it. Well, Guillermo, thanks so much for coming on the Changelog. Amal, thanks for being my wingperson here today.

**Amal Hussein:** Yeah, wingperson, or winglady is fine, too.

**Jerod Santo:** Winglady. I like that as well.

**Amal Hussein:** Yeah. We establish that I am milady, or whatever.

**Jerod Santo:** Milady of JS Party. Thanks to both of your passion for the web platform, for continuing to push it forward while dragging us along in our best practices, and helping us to invent things, but inventing them on our own time; I like that. I think I might go invent something right after this show, on my own time, right there.

**Amal Hussein:** Yeah, you should.

**Jerod Santo:** Thanks for coming on the show, we really appreciate it. We'll talk to you guys next time.
