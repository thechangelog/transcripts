**Amal Hussein:** Hello, JS Party listeners. We are back with another fun show today. And I'm so excited about today's show, because we're talking about one of my favorite topics, which is low level web primitives, but also functional, useful ones. So we'll get into that in just a second... But I'm also excited because it's my first show co-hosting with Jessica. Hello, welcome, Jessica.

**Jessica Sachs:** Hello, hello. Really excited to talk about design systems.

**Amal Hussein:** Yes, yes, absolutely. And how are you doing today?

**Jessica Sachs:** I'm okay. I'm actually sick... But relatively okay. I'm coming down from it.

**Amal Hussein:** Okay. Yeah, it is the season here, springtime in the Northeast. But our guest today is none other than Cory LaViska, who's the creator of this pretty prolific library called Shoelace. Shoelace is a forward-thinking library of Web Components. We'll learn all about it. And it's also evolving into kind of -- it's going through like a metamorphosis plus-plusing into kind of something called Web Awesome, which is going to be part of the Font Awesome family. Many of you know Font Awesome, it's been around a long time. Awesome tools, services, all the things. And so Shoelace is joining, or has joined the Font Awesome family, and is also evolving to kind of be a higher-order design system. So we're going to learn about all of that today... But first, we're going to introduce our guest, Cory. Hello, Cory. Welcome to JS Party. First time, right?

**Cory LaViska:** First time, yeah. Thank you so much for having me.

**Amal Hussein:** We're excited. And so for our listeners who might not be familiar with you, can you tell us a little bit about yourself?

**Cory LaViska:** About me? Oh, I wasn't prepared for that. I was gonna talk about Shoelace...

**Amal Hussein:** I know, I know...

**Jessica Sachs:** I know. You're involved.

**Cory LaViska:** Yeah.

**Amal Hussein:** We could talk about New Hampshire, you know? ...which is where you're from. Which is a special place for me as a Massachusetts person. I'm fascinated by New Hampshire.

**Cory LaViska:** I'm probably one of the very few people in the world who live in New Hampshire and work in tech, at least in my experience... \[laughter\]

**Amal Hussein:** Oh, wow...

**Cory LaViska:** I think there's like one other person I've met in New Hampshire that's like "Yeah, I work in tech, too." I'm like "Oh, really? We should we should be friends."

**Amal Hussein:** Well, no, there are people who work there; they just commute into Massachusetts for work, I feel like. There's definitely a huge commuter...

**Jessica Sachs:** It's true.

**Amal Hussein:** ...there's a commuter pool of people.

**Cory LaViska:** Yeah. That's unfortunate, that they have to go down there to do that.

**Amal Hussein:** Oh, my God... \[laughs\] Alright, so the beef begins. Okay, y'all --

**Cory LaViska:** We're starting strong.

**Amal Hussein:** Quick aside, quick aside... New Hampshire - the motto of New Hampshire is "Live free or die." Car Insurance is optional. No state sales tax, so everyone goes and buys their expensive MacBooks in New Hampshire, and saves money on that... I mean, New Hampshire is - I don't know... It's an interesting place.

**Cory LaViska:** We put liquor stores on the highway, just to accommodate you guys, so...

**Amal Hussein:** That's right.

**Cory LaViska:** Enjoy.

**Jessica Sachs:** Thank you.

**Cory LaViska:** Every camping trip... You're welcome.

**Amal Hussein:** Anyways... \[laughs\] Oh, gosh.

**Cory LaViska:** Wait, is this about New England, or is this about --

**Amal Hussein:** \[laughs\] We should talk about the web at some point. Anyways, no, back to you. Jessica, your last dig at New Hampshire, and then back to Cory.

**Jessica Sachs:** Oh, I was gonna ask, have you ever read the book "A libertarian walks into a bear"?

**Cory LaViska:** I haven't.

**Jessica Sachs:** It's about a Reddit group taking over a city in New Hampshire. It's a true story.

**Cory LaViska:** Oh, I am familiar with that, but I haven't read the book. But yeah, that was lame.

**Jessica Sachs:** It's freakin' hilarious.

**Cory LaViska:** That was lame. People shouldn't try to take over states like that.

**Jessica Sachs:** Cities. Yeah, cities.

**Amal Hussein:** I think people should also generally have car insurance, but you know... \[laughs\]

**Jessica Sachs:** Yeah. They didn't have a fire department, and that became a problem... That was the moral of the story.

**Amal Hussein:** Anyways, so Cory... About you...

**Cory LaViska:** About me... Well, I'm from New Hampshire. Did we mentioned that at all? \[laughter\]

**Amal Hussein:** We did.

**Cory LaViska:** So I've been working in software since the early 2000s - man, I just aged myself really badly there - which feels like forever ago. And early on in my career I kind of just made a weird decision. I love the web, I loved what it was all about... Build something and you could access it from anywhere. And I just sort of bet all my chips on "I'm just going to work on the web." I never got into macOS development, or Windows development, I just stayed everything on the web.

So early in my career I got tied into A List Apart kind of group of folks who were very much like pro-platform, web standards... We went through the browser wars, and web standards were always this thing that just made so much sense. And fast-forward to modern times here, web standards is something that I still believe a lot in... And that's sort of where I guess -- that's maybe a good segue into what we're gonna be talking about, because Shoelace, and now Web Awesome... This project is really about web standards and the continuation of that journey. So... I feel like I'm rambling.

**Amal Hussein:** \[00:05:49.18\] No, definitely not. No ramble. I mean, it's my kind of ramble, but also just making -- you know, because building blocks on the web are not useful on their own... But it's like, okay, now when you compose a set of things together, you can do a thing. All of a sudden there's a utility aspect to this. And for me, what you've created with Shoelace is this incredible utility of like low-level common behaviors that most people who are writing web apps need, right? All the things you would think would be in a design system... But you've used Web Components to create those low-level primitives, which means that these can be consumed by people who are just doing vanilla JS, people who are using React, who are using Vue, who are using Angular, who are using Solid... You name it. You have just all these consumers, and I think that was kind of the intent for Web Components, is to be these low level baseline primitives. So with that said, could you tell us a little bit about what inspired you to create Shoelace?

**Cory LaViska:** Yeah, so if we rewind to the very first iteration of Shoelace, it wasn't anything like it looks like today. It was basically a replacement for Bootstrap. And back in the day, if you remember, Bootstrap was -- everyone was using it; everything looked like Bootstrap, and it was just everywhere. It was ubiquitous. And the thing I noticed was most people were using it from the CDN, and if you wanted to customize things, there was a SaaS version, and you could change like one or two variables, and it was like "Oh, great. Everything..." But nobody did that, for some reason. People were afraid to build steps, and so they downloaded from the CDS, or just copied and pasted those script tags and link tags, and then they would go and create their own stylesheet.css, and just start overriding everything. And so if you want to change a primary color, that's like 400 lines to change it in every single component, and it was just a nightmare.

So this was back in the day of like IE 11, and custom properties was starting to become a thing... So it was very, very early. And so Shoelace 1.0 was very bleeding edge. Can I create something that's very much like Bootstrap, but load it over the CDN, change a couple of custom properties, and have -- so I get rid of all those extra customizations, and now I just have this whole custom library of components. So it started there.

And then fast-forward a few more years, IE 11 is now dead, Web Components - there's a history there, but they were suddenly available in all browsers... And my thought was "Can I reinvent this to give people custom HTML elements", that were still a little bit bleeding edge at the time, but if you load this over a CDN, customize a couple custom properties, now everything just works. And the answer was "Yes" and that was incredible. That was the magic right there.

And to what you said - yeah, you can load it in any framework and it just works. You don't need a framework, you just import this thing, and start using your custom HTML elements. So that to me was the magic, and it just spiraled from there. I built a couple elements... I think Button was the very first one I ever built as a web component... And it just was like "Hey, that's cool. Let me try and input form controls. And yeah, that works great. Well, what else do we need?" And then people just started kind of picking up on that, and they're like "Hey, it would be great to have this." And I was like "Yeah, that would be kind of fun."

So I've actually started building this because I wanted to build stuff with Shoelace, and it turns out that people were so into it, and they kept requesting things... And the next thing I knew, I'm basically building this for everybody else... Which is great, because so many people decided that it was fun, it was easy to use, they liked it... I think it's almost gotten a little bit out of hand, right? I mean, we've got like 50-something components, now we're teaming up with Font Awesome and we're building this into a whole design system product... It's pretty incredible what we've been able to do with Web Components on the platform now.

**Jessica Sachs:** I was looking at the installation, and it just looks very much -- like, set base path. It's like second line in the installation guide. And with the history that you just said, it makes a lot of sense. I'm like "Oh, cdn.js deliver.net/" It looks exactly parallel to what we used to do with Bootstrap. And that history lesson really sets in context the docs.

**Amal Hussein:** Absolutely. So I'm curious, why the name Shoelace? What's the story there?

**Cory LaViska:** So it's a play on Bootstrap... And I think only like 10% of people get that.

**Amal Hussein:** Oh...

**Jessica Sachs:** I did not get that. I get it now...

**Amal Hussein:** JS Party listeners, you're in the 10% Club. Welcome. Congratulations, everyone. That's so interesting. That's actually very smart. It's a little too smart.

**Break**: \[00:10:16.16\]

**Jessica Sachs:** How long was the Bootstrap era? Like, if you want to give people some context.

**Cory LaViska:** I feel like we're still kind of in it a little bit. We're maybe at the tailend, but I feel like we're still --

**Jessica Sachs:** If you don't count WordPress.

**Cory LaViska:** If I don't count WordPress... \[laughs\] It felt like forever. I don't know exactly how long it was, but I remember it being... I mean, gosh, I didn't personally jump on the Bootstrap until I think 3.0. That's when things started clicking for me. I was like "This is fantastic." jQuery is at its peak, Bootstrap comes out... 2.0 I was like "Meh..." 3.0 came out, I was like "Yeah, I can get behind this." And then I think after that, it sort of started to taper off.

**Jessica Sachs:** I'm so sorry... Like, 2008, 2011? Where are we, timewise?

**Cory LaViska:** Yeah, right around in that era. Yeah.

**Jessica Sachs:** Okay, all the way through 2015, I would say? Less and Sass...

**Cory LaViska:** Give or take.

**Jessica Sachs:** Yeah. Cool. Thank you.

**Amal Hussein:** So I just kind of want to set some context here before we move on to kind of like the evolution of Shoelace, around kind of the usage of Web Components and how beneficial they really are for people building design systems. So first of all, as of May 2024 - so 657 million monthly hits on JS Deliver, which is huge... And that number has just been growing astronomically. Two years ago you were at like 100 million, now you're more than 6x that, which is amazing... And I don't have the latest stat, but I know up until about a year ago 17% of pageviews on Chrome were registering some usage of Web Components. So this is kind of like the sleeper hit on the internet. It's actually much more widely used than people would think. And this just goes to show there's the reality, and there's the tech Twitter bubble, and the fad bubble, and what teams at scale are actually choosing to use...

And Microsoft, which is where you actually were - yeah, Apple, everybody... But they have a fantastic design system built on Web Components called Fast, and it's open source, and people should check it out. It's pretty rad. But teams at scale are choosing to kind of build it once and use it everywhere... Which makes sense, just even from like a dollars and cents engineering spin. But can you talk to us a little bit about kind of this - like, why there's, I don't know... I feel like there's so much -- Web Components still feel so misunderstood in the thought bubble space, in certain parts of the community; I wouldn't say all. But what's the resistance there, in your opinion? Why are people struggling to embrace?

**Cory LaViska:** Yeah, that's a good question. When I got into building with Web Components, I was working with a company that we had teams that were building in Angular, teams that were building in Vue, teams that were building vanilla... And we had a design systems team that had an Angular.js design system that was obviously getting phased out, because Angular.js at the time was kind of dying... And we're like "Do we have to build this four different times? That doesn't make sense." So Web Components came in, and we're like "We can finally do this. Let's try it. Let's see." This was very early. Still kind of tail end of IE 11. "Can we do this?" And so there was polyfills, there was all sorts of things... And none of the stuff that we need these days, but this was super-bleeding edge, super-early... And I had a chance to work with all these different teams. I even think we had some React users back then, too. And I actually didn't see a whole lot of resistance internally once the value was shown.

\[00:17:42.28\] So one of the problems that we had was we said "Here's our design system. You can use our Angular.js components. If you don't want to use that, you don't have to." So the company was very big on autonomy. Do what you want, but you have to adhere to these design standards. And if you want, use these tools. And so the tools were only Angular. So the folks that didn't want to use the tools could reinvent, whatever. That's a lot of duplication of efforts. And at the end of the day, when we were able to give them the same buttons and all these same components, but they no longer had to create them themselves, they started to realize the value pretty quickly. And when things actually worked, we kind of proved that it's possible to do.

And I think the greater resistance that you're referring to is the people out in the wild that really, in my experience, they've never really played with them. They've heard a lot of the custom elements, like v0 stuff, that - there's a history with Web Components where Google was trying to push things a little too hard, a little too fast, and the v0 spec wasn't well received. They sort of backpedaled, and then v1 came out, and they got a lot more feedback, and things have improved drastically since then.

So I think there's still a lot of misconceptions about what custom elements are today... And I actually hate the term Web Components. I use it because everyone knows what it is, but custom elements really make more sense, because you're building custom HTML elements. You're not building React components, Vue components, Angular components. And I think a lot of people still - they don't appreciate the platform. We as an older generation of web developers who grew up with the browser wars can appreciate them. Yeah, that's not coming off the way I wanted it to come off at all...

**Amal Hussein:** Yeah...

**Jessica Sachs:** So I joined Stencil about a year ago. And I had recently left Ionic, but when I joined Stencil, I asked my componenty design system friends, I was like "So I'm working on a Web Components framework", and they all kind of like go "Ooh... Hm..." And I was like "What?" They're like "Web Components are dead." I was like "Web Components are dead?" They're like "Yeah, they never really lived."

And then as I joined Stencil and I saw the people who were using our stuff, I felt the way Amal felt, that we were living in a bit of a maintainers-only tech bubble, trying to predict the future of the newest technologies, rather than looking at the actual people who are using it, and then also looking at what the technology does or doesn't do. And I pulled up a blog post just now that Brad Frost wrote, and it's called "The design system ecosystem." And it's probably the most comprehensive -- have you seen it?

**Amal Hussein:** Yeah, Brad Frost - I have his books; I really should have his picture in my office, like a fan girl, or something... But yeah, I really appreciate all his thinking around design systems.

**Jessica Sachs:** He has like an eight-level breakdown of all the different parts... And it really speaks to -- I don't know, I would say the things that people think are necessary, like the framework-specific implementations, as well as like the core design system layer, which is where I would say Shoelace fits in. I'm going to use his definition, which contains the common organization-wide UI building blocks for both design and development. And that encompasses things like "How are we going to do theming, accessibility?" Those kinds of decisions... Before eventually getting to the optional technology-specific layers and smart components layers, and a bunch of stuff like that. So I don't know, I pasted that link in the chat. I think it's -- I have to read this blog post seven times. It's so dense.

**Amal Hussein:** Yeah. We'll link it in the notes. And can you tell folks what Stencil is, for the folks who might not be familiar?

**Jessica Sachs:** Sure, sure, sure. I wanted to ask Cory about this later, probably, which was Stencil, versus Mitosis, versus Lit... Those are three large Web Component-first -- actually, excuse me; Mitosis is not. It was created by the people who created Stencil. But trying to solve the problem of "I would like to write my thing once..." Cory was saying "We had to re implement stuff four times for every framework. That doesn't make sense." And so those three frameworks - Lit, Mitosis, Stencil - were created to solve that problem using mostly Web Components. And then Mitosis has a little bit of a web-componenty past, and they went the opposite way. They were like "We're not going to use Web Components this time." Anyway, I wanted to ask Cory at some point about those three things; maybe at the end.

**Amal Hussein:** \[00:22:11.24\] Yeah. I mean, I feel like we know what horse -- well, we do; maybe our listeners don't. So Shoelace is using Lit, right? It's built with Lit, which is cool. And we've had Justin \[unintelligible 00:22:22.23\] on the show before, and Lit is a little library for helping you write Web Components. It's super, super-thin, super-awesome. Fantastic. Love it. But anyways, so thank you for telling us about Stencil, Jessica. So I think kind of getting back to the evolution of Shoelace here... So now you have all these low-level components, like color pickers, checkboxes, buttons, inputs, ranges etc. Very useful stuff. Tabs, tags... And so now tell us about what's happening with Web Awesome.

**Cory LaViska:** So I was chillin' at home, working, and I get this Twitter DM from a guy called Dave Gandy. And I happen to know Dave, not personally, but I knew of him through Font Awesome, which I have used for years. I was one of the Font Awesome five backers on Kickstarter. And it was just like "Hey, how's it going? Shoelace looks pretty cool." And so we got to talking, and fast-forward... And I think our visions aligned. I was at the time working at Microsoft on an internal design system also using Web Components, and Shoelace was kind of just chugging along as a side project... And Dave offered to generously fly me out to Bentonville, and meet with him, meet with Travis. Both of them are co-founders of Font Awesome, and they're just awesome people. And we realized that our vision for what we could do with Web Components as a design system, as both an open source product, and eventually a premium offering on top of that - because we have to eat, right? We have to pay the bills... It really aligned. And that's sort of where things all kind of fell together.

So we partnered up and decided that if we want to do Shoelace right, what are the next steps? Well, first of all, rebranding. That makes sense. Let's keep it on brand. So Web Awesome, Font Awesome... Second of all, we're gonna need a team, because it's a lot for one person to just kind of do in their spare time. So even if I'm full-time, it's still a lot. So we now have a team of four that work full-time on Web Awesome, to build it into something that I never could have built completely on my own... And I'm really excited and thrilled to have this opportunity. And the Kickstarter that we launched last -- well, that finished up last month... I think it surpassed all of our expectations. We set a goal like $30,000, and it came in at like $720,000 of early backer pledges. So it surpassed like $720,000 in early backer pledges. That's a lot of people that signals to me that want something like this, where you get this design system that you can use anywhere. And of course, we're adding a bunch of stuff on top of that, so...

**Amal Hussein:** Yeah, that was crazy. So you had this Kickstarter, you were like "Alright, our goal is to raise $30,000", and then the community was like "Here, take $700,000 more", or something like that that. It was so amazing to see that.

**Jessica Sachs:** The date picker was the 700,000 goal, and everybody was just like "More money! Until we get to date picker, we're not done."

**Cory LaViska:** That was the one, yeah.

**Amal Hussein:** Yeah. "We don't want to write that again. Nobody wants to." Yeah. I mean, that's definitely the one thing -- I cannot wait to see that land. Like, seriously, Cory? That was very strategic of your team. \[laughter\]

**Cory LaViska:** Me too.

**Amal Hussein:** \[00:25:47.20\] But yeah, so you're sort of working on this full-time, with kind of the transition of -- it was kind of like an acquihire process, I'm assuming, with Shoelace and... I mean, this was like an open source project that you worked on as a side thing, and then it became really popular, and you made an active decision to like "Okay, I want to work on this full-time", and the Font Awesome team was like "We want to hire you help us evolve Font Awesome's product offerings", but also just - "We can kind of help continue this platform of building really great, free and open source kind of web primitives."

**Cory LaViska:** Yeah. When they came to me, it's one of those things where -- there's always money involved, people are always trying to... And as a business coming to invest in something like this, you know that there's a bottom line. And the thing about Font Awesome is these guys are genuine. I go out there and -- I wasn't meeting people for like a business opportunity. I was meeting brand new friends that were just like "It's less about that, and more about like we just want to build cool shit together, and we want to do it with people that are like us, that think like us, that have the same beliefs... And it's not so much about the money. That really is a means to an end. We need to support this team. We obviously need to make a profit at some point. But it's really more about "No, we're gonna hire people because they're very talented, they're very awesome", and that's what we've done. We've assembled a team... I was number 18 in the company, and I think we're now a little bit over 20. But there's not a single person in that company that I wouldn't just hang out with and just have a good time with. We do that twice a year, and everybody there I feel like they could just as easily just be friends; you just know this person, and... It's just a very unique experience. It's nothing like the corporate environments that I'm used to. Everyone feels genuine. If you need help, someone's there to lend you a hand, ask questions... It's kind of a dream come true in that way.

**Amal Hussein:** It sounds like you landed a dream gig. That's really exciting. Congratulations.

**Cory LaViska:** Super-awesome group of people. Thanks.

**Jessica Sachs:** So quick question... Does the -- I was gonna call it an acquisition. How would you like to call it? A rebranding? Merging? How would you describe --

**Cory LaViska:** I think rebranding is probably the most appropriate. I mean, you're changing the name there to something that's definitely a lot more on-brand... So yeah, rebranding is probably good.

**Jessica Sachs:** So the one FAQ on the Kickstarter that makes me curious of the structure of the company is "What if I'm already a Font Awesome pro subscriber?" That FAQ. And it says "If you're already a Font Awesome Pro subscriber, and if your rewards include a year of Font Awesome Pro, your subscription can be extended by a year." Does that mean that the whole model of like every company that's currently using Font Awesome is going to be affected by this awesome -- oh God, I used "awesome" as the adjective...

**Cory LaViska:** We like that word, so you can use it as much as you want. \[laughs\]

**Jessica Sachs:** Okay, okay. Okay. Is it going to be affected? What happens to existing users?

**Cory LaViska:** So you're saying if they backed the Kickstarter, and they were an existing customer, basically, right?

**Jessica Sachs:** I'm just saying if they're an existing customer, period. How is the rebrand gonna affect them for Font Awesome Pro people?

**Cory LaViska:** Okay, so there's two separate products though.

**Jessica Sachs:** Okay.

**Cory LaViska:** So there's going to be Font Awesome as a separate product, and Web Awesome is a separate product.

**Jessica Sachs:** Okay. Cool, cool, cool. I wasn't straight on the way that the rebrand affected both sides of the business. Cool.

**Cory LaViska:** Yeah, maybe we should do a better job of clarifying that, because that's a good signal that maybe we weren't as clear as we should have been.

**Jessica Sachs:** Yeah, just in the FAQ it sounds like the whole thing is \[unintelligible 00:29:30.21\] together in the rebrand.

**Cory LaViska:** Okay. Good to know, I appreciate the feedback.

**Jessica Sachs:** I'm so sorry. I'm so sorry.

**Cory LaViska:** No, you're fine.

**Amal Hussein:** So in terms of like the business model - and by the way, congrats on landing at a place that has found a way to do open source sustainably. That's huge. And it's also just very impressive. And yeah, I was reading somewhere on Font Awesome's website that since they became a commercial entity, they've increased their open source offering by like 300%, or something like that. That's just also "Yay." So that being said, what is the model like with Web Awesome? If I'm a paid subscriber, what do I get?

**Cory LaViska:** \[00:30:12.20\] Yeah, so clearly, open source is important, and like you said, the Font Awesome side of things has increased the free offering significantly. One of the things Dave likes to say is "We're one of our own best competitors." So the more we add to free, the more we kind of... But for Web Awesome, we're going to do the same thing; we're going to continue to add a lot of free things. Just from the Kickstarter stretch goals we're looking at 14 new free components that we're going to be adding. So we have our work cut out for us, but we're busy on doing those things.

And the Premium Package, we have so much good stuff coming, and a lot of it's already been built. But we have a themer that basically lets you just go in there and turn some knobs and just create a whole theme to match your existing brand... There's a lot of details that are involved in that, that - I don't want to bore you with too much, but you can pretty much tweak anything that you want from that, and then go back and later and change things.

So if you create a site today, and you're using the Web Awesome components and whatnot, you can go back later. Think CSS Zen Garden. Again, I'm aging myself, but you can once again go back in and change those knobs and not have to rebuild your website, which is something that people seem to be doing a lot these days... Like, "Oh, we need a new website." "Well, let's just rebuild it." "Wait a minute, why don't we re-theme it?" So that's, I think, the most exciting aspect of it to me.

And then there's -- gosh, there's so much... There's the Pro components that we're -- I think there's whole businesses around things like data grid, and charting libraries, and stuff like that. So these are some of the things that we're going to be building into Pro. These are things that you'll probably be paying for anyways. We're not putting inputs and radios and checkboxes behind a Pro label. We're giving you a lot of really good stuff for free, but we're giving you the stuff you'd probably be paying for anyways, at the premium level.

**Jessica Sachs:** Yeah. Like AG Grid. AG Grid is an entire company built around the data grid. And you guys are bundling it in. Same thing with charting libraries. Does AG have a charting library? Do you know, Cory?

**Cory LaViska:** I don't know off the top of my head, no.

**Jessica Sachs:** It's okay. But there are many paid charting libraries. So entire companies spun out about these components.

**Cory LaViska:** Yeah. I know I bought a number of Highcharts licenses over the years, and now here we are, building charts. So...

**Amal Hussein:** Yeah, it's like, watch out, world... And I don't think any of those are built with Web Components, so just in terms of extensibility, and compatibility, and all that other stuff... It's definitely very exciting to see you all entering that space. And just also regarding theming, one of the really cool things, what I really love about Shoelace, which is I guess the root dependency of Web Awesome, is that there's this separation that you get between how something should function and how something should look, right? And I think theming is that -- that's the magic sauce. Everyone has their own buttons, their own menus, their own this, their own that, but functionally, these things should all work the same. It just makes sense for users. Users shouldn't have to learn how to use dropdowns every time they use a new website... So I just love that.

So getting into kind of the lower level primitives for the library... Actually, you tell me, Cory - should we stop calling this Shoelace and start calling it Web Awesome. I don't know. I've always known it as Shoelace, so you tell me how we should be referring to it for the rest of the show.

**Cory LaViska:** Yeah, I mean, we're officially Web Awesome. We still maintain Shoelace, too. We're gonna keep maintaining that for a little while, but... Yeah, Web Awesome is not yet released. We are looking at next month for a pre-release of -- I call it the 3.0 alpha for the early backers that were on Kickstarter. But yeah, we're all-in on Web Awesome at this point.

**Amal Hussein:** But in terms of how the API should function for, people who were on Shoelace that were on version two, which is what's out right now... And let's say when three comes out, functionally things should still work the same. Theming should still work the same, event management, setting attributes... Whatever it is, all of that should still generally work the same, right?

**Cory LaViska:** \[00:34:23.12\] Mostly, yeah. I mean, we're going to change tags. sl doesn't make sense in the Web Awesome world, so we're going to change the HTML tags. So the sl button becomes wa button. There are a few things that we're going to be breaking, but for very good reason. When Shoelace first came out, for example, form-associated custom elements - that wasn't a thing. We didn't have those APIs. In fact, my partner who works on the dev side at Web Awesome, Connor Rogers, he just wrapped up finishing migration from our own bespoke form submission library, if you will, to form-associated custom elements. So there's things that do you have to change to basically align better with the platform. Because again, we're bleeding edge, and some of these things didn't exist in the past.

There are a few other things that we're breaking for very good reason, but for the most part, we're being very cautious and we're being very careful not to pull the rug out from under people. So if you're using Shoelace today, a pivot to Web Awesome free is not going to be that difficult for you. And as we go through this, we have a pretty extensive changelog that says "Hey, this is something that's broken. \[unintelligible 00:35:27.06\] Here's how you update", and none of it's very difficult so far. So I think that'll be the case as we get closer to an alpha launch.

**Amal Hussein:** That makes sense. Are you gonna ship some helpers to kind of help people migrate, like AST-based transforms, or something like that? Is that something that y'all are thinking about?

**Cory LaViska:** I think we're gonna see what our early backers, what friction they have. If we see a lot of trouble in a specific area, we'll address that. But we're joining to worlds. We have a lot of Font Awesome customers who have never seen or heard of Shoelace. And now they're all "Web Awesome? What's this?" So we have a ton of new users... But I still care a lot about the open source users who were Shoelace from the start; there's a lot of folks who have just been there for years... And I don't want to upset them. So I kind of want to hear what they have to say before we -- you know, we're a small team, so we want to be careful where we dedicate our effort to. So yeah, if we see friction, we'll address it.

**Jessica Sachs:** Doing AST transforms is not an easy thing to do well. It's easy to do it like on one codebase, but getting it to scale up correctly... I would not jump headfirst into that unless people really need it.

**Cory LaViska:** Yeah. And especially since a lot of our users are CDN folks, and so there's no build step there... So we would -- yeah, I don't even know what that would look like. I think the key is probably going to be mostly documentation first, and if we still have trouble, then we'll see what we can do. If we have to backpedal an API, or something like that. There's a lot of unknowns.

**Amal Hussein:** You make some really good points there, and it just goes to show my own bias... Because you were kind of optimizing for no build step with Shoelace and Web Awesome. Like "Here, drop these tags into your HTML doc, and you're good to go." Right? And that's the world that we were in many years ago, and hopefully the world that's gonna be coming back to us in the future. We're hopefully boomeranging back to this world where we're trying to kind of, if we can, avoid build steps, where we can. I think that's where things seem to be heading anyways. We've paid the complexity cost a little bit...

**Jessica Sachs:** Nope. I don't wanna --

**Amal Hussein:** No, I mean, I think builds steps are still important...

**Jessica Sachs:** I disagree... Strongly...

**Amal Hussein:** Yeah, we can agree to disagree here. But what I'm saying is that we've paid the cost here with having kind of build steps, and like all these complicated intermediaries that we have with writing code and shipping code. And so I think people are kind of looking to compress that. The no-compiler trend I think has kind of been a slow one, but there's been like this -- the snowball effect, I feel like. Slow snowball effect there.

**Jessica Sachs:** \[00:38:03.09\] People are discussing it, I would say... And then I'm very much on the "You will always probably want a build step." For reasons. At least one kind. Like, browser list would be my number one thing for a CSS library. Something to polyfill selectively I think is a really heavy thing for a CSS library. But anyway, if you want more information, I would say --

**Cory LaViska:** But what if you could have both?

**Jessica Sachs:** If you could have both?!

**Cory LaViska:** So you have people who do want that simple just copy and paste; whether they're prototyping or shipping that to production, it doesn't matter. So we want people to be able to just get out of the box, start using it and not worry about it. So that's where the CDN comes in. We have an auto loader. If you're using five tags, it'll just load those five things. If you're using 10, it'll load those 10. But then there's also the NPN installation, where you can install it, you can run it through your build step, your bundle will tree-shake... So we actually offer both; so you can have the best of both worlds. And I think that's important, because you can't please everybody, but we have -- another thing that we like to say is "Put the pain on those who can bear it."

**Jessica Sachs:** Okay...

**Cory LaViska:** That's actually not the full quote. That's a paraphrasing of it. But the point is, we are in a better position to do the hard stuff one time, and let the users do the easy stuff. So we'll handle all that. If you want to do it with CDN - fine. We can offer that. If you want to do it with a bundler, fine. We'll offer that, too. Our build step handles that, so you can choose to either have a build step or to not have a build step. So like I said, best of both worlds. We want to accommodate everybody. We don't want to say "Hey, we only offer a CDN. You're stuck with that. Just use that." No, because there's some good tooling enhancements that can come when you import an NPN module, and you get Typescript, and you get all these cool things... We have a custom element manifest file that you can get in there and link it up to VS Code, that you get autocomplete as you start typing in tags... So there's a lot of cool stuff that we do. You don't necessarily get that over the CDN, but it's there if you choose to go a little bit further.

**Jessica Sachs:** Yeah, that makes so much sense. And in the modern world I think you have to do both things. We've seen recently people don't even support a CDN install. Most everybody assumes you're using NPM, and that you're building it yourself. And I think you want the best of both worlds. That's super-smart.

**Amal Hussein:** Yeah. I think not every single organization has this group of world-class JavaScript developers that can be dedicated to do all the crazy complex things. And keeping up with JavaScript build tooling is kind of like a full-time job at large organizations. Whole teams dedicated to that. So what I'm saying is I don't think build steps like minification, all this stuff to kind of like optimize your code - I don't think those are going away. But I think with type annotations coming native to the language, with all the improvements with CSS, all the things that you used to need something like Sass to do, you can now just do with native CSS, whether it's nesting, variables, all this stuff. There's just kind of a shift for kind of -- the platform is catching up, so we can reduce complexity. And I think we should try to be reducing complexity where we can... Because yeah, this stuff takes time. It's time, resources... It's a lot of things. So yeah, I'd love to shave down on that complexity where we can. It also makes it just a more inclusive ecosystem, where you don't need a PhD in dev tooling to be productive... Which I feel like for a while, you did. We're getting better, we have better abstractions with dev tools now... But remember the days of WebPack config? Or even taking it further, with --

**Cory LaViska:** Yeah. "Should I use Gulp? Should I use Grunt? Should I use WebPack? Like, what are all these things?"

**Amal Hussein:** Oh my God, yeah.

**Cory LaViska:** I was painful.

**Amal Hussein:** \[00:41:46.21\] Yeah. And what you reminded me of with kind of this transition to Font Awesome is you're bridging beyond the world of Npm, in the sense of you're now connecting with a whole class of developers that are creating for the web, and a wider array of -- it's a wider stack. People who are building WordPress sites, people who are building... Like, all the things. You're outside of the Npm bubble when it comes to web apps. Does that make sense, Cory? That's pretty cool, that you're inheriting this huge customer base now.

**Cory LaViska:** Yeah... And something that you said a little bit earlier, about "Things take time." That's a really good point. And I think that goes back to an even earlier question about the whole Web Components, like how are these received... You know, CSS is a great example. We have nesting in all major browsers now. Maybe a little too evergreen for certain production things, but we're so close. In another year or two it's going to be a non issue. And custom properties, sort of - they're not the same, but in many ways they're better than Sass variables. So I've actually been Sass-free for years. Ever since I've been in the Web Component world it's like "I just don't need that anymore." I would love nesting, but I'm willing to give up that extra build step and that Sass overhead to just use pure CSS again. And I'm pretty happy with it these days. And I think people have been pretty receptive to that. They're very excited to see a lot of the things landing. There's math functions in CSS, there's so much going on there. We have grid now... But I think Web Components are like that too, and they're just much more of a complex beast, and they're not as well used and known... But as people start to realize these are platform things, these aren't just like -- this is not just magic. This is not another framework we're throwing at you. I think we're going to see the same thing, where people are so open to CSS, the modern CSS, they're going to start becoming more open to modern solutions like Web Components, custom elements, and they're gonna start feeling more comfortable with them. They just really haven't had that exposure like they do with something like CSS.

**Jessica Sachs:** I've also been Sass-free for years...

**Amal Hussein:** \[laughs\] This feels like some kind of a Sass Anonymous meeting...

**Cory LaViska:** Confessional?

**Jessica Sachs:** Yeah, yeah.

**Amal Hussein:** It's like, "I too have been Sass-free for six months", you know? \[laughs\]

**Cory LaViska:** \[unintelligible 00:44:00.07\]

**Amal Hussein:** Right, exactly. Exactly. That's pretty amazing.

**Break**: \[00:44:06.25\]

**Amal Hussein:** Okay, so we can't get into the specifics of the API interface, I guess, for this 3.0 release, because we haven't been there yet... So we'll kind of reference 2.0, because they'll still be a lot of overlap. So you support theming, and like customization, and all this stuff... Another really cool thing is that -- well, specifically this is I guess for folks who are using React and who are also using Shoelace, and hopefully in the future Web Awesome... You created a set of React components, like just simple wrappers? And I'm just curious, was that because of limited Web Components support, or why not just use the custom elements directly in JSX?

**Cory LaViska:** So that was because of limited react support, yes... Which has been solved in React 19, finally. We kind of promised that, I feel, since 16, and they kept kicking the can, but it's finally coming... So that's a huge, huge step forward. But the other thing is React users sort of live in a bit of a different world. Everything just looks a lot different. So the wrappers give them a more idiomatic experience; they can just use them as JSX components, or React components, whatever you want to call them... And they just feel a little bit more natural.

So I don't think we're going to be taking those away anytime soon. I'd like to think that a few years down the road, maybe React 23, 24, 25, maybe we'll finally get rid of those, because custom elements - they're becoming more ubiquitous, people are more familiar with them... There are little differences that would exist for a React user that might be a little bit more uncomfortable. So until those get ironed out, I think we're going to continue offering those. The work's done, there's minimal effort to maintain that, so there's no reason why we would just take that away.

**Amal Hussein:** But for Vue and Angular folks can just like drop in the custom elements, and that's it. Everything's turnkey, right?

**Cory LaViska:** Yeah, for the most part. I mean, with Vue -- there's for example binding in Vue. Native form controls - it's a one directive thing. And with custom elements you have to have that event listener. So for example, we have that Shoelace module which we need to get translated over to Web Awesome, where you can import that, and you can use our custom directive for simpler binding for custom elements in Vu.

So there's minor things like that, that we still put a little bit effort into making them a little bit easier for folks to use... But we actually -- we may have some magic to make that just work with Web Awesome. So if that doesn't work, we're going to offer the custom directives. But if that does work, then great. Things will just work.

**Amal Hussein:** And Angular... I'm hoping that this is truly turnkey, because I know they do have built-in support for custom elements... So please tell me that's the case. Is there any heavylifting that Angular users have to do to start integrating this?

**Cory LaViska:** You're asking the wrong person. I don't use Angular, and I haven't used it in a long, long time...

**Amal Hussein:** \[00:48:14.14\] There is support on your website for Angular. \[laughs\]

**Cory LaViska:** Yeah, there is. So that page was contributed... But no.

**Amal Hussein:** Okay.

**Cory LaViska:** I think most of it works. I'm not going to try to \[unintelligible 00:48:23.23\] through the details of the few things that are iffy. They do work, just necessarily not every piece of it connects exactly like an Angular component would. And so those details I'd have to get back to you on.

**Amal Hussein:** Okay. Yeah, I'm looking at the configuration - yeah, there's still a little bit you have to do. But I think once that's done, it's plug and play after that. So what happens with the synthetic events layer in React? How do you manage that crazy eventing -- the mishmash between like events that are coming from these native Web Components? The world of React that's working in synthetic events - how do you handle that?

**Cory LaViska:** So for the wrappers, you mean?

**Amal Hussein:** Yeah, for the wrappers.

**Cory LaViska:** Because they pretty much do that. Yeah, they act as a bridge. And I can't take credit for the actual work that goes on under those wrappers. That was all the Lit Labs team who created that package to just do that mapping for us. And I'm very thankful to them, because as a small team, if we had to maintain something like that, I don't know that we'd have that support.

**Amal Hussein:** Okay, got it. That makes sense. So you're using the Lit to React kind of wrapper under the hood. Okay, that makes sense. So what happens with something like Solid? So they're using JSX, but they translate those into DOM elements... is it just - the things just work?

**Cory LaViska:** I hear very few complaints, and I know Solid is getting pretty popular out there... I haven't heard any complaints. Again, I wish I had more time to actually get down and build random apps with all these different frameworks... There's just too many to keep track of. So what we try to do is be very responsive if we hear an issue; if something like that comes up, then we'll kind of dive into it. And that's something that Connor does a really good job of. He just loves digging into those hard to reach issues.

So if anyone does have a problem with a specific framework, please do just post it to our -- currently our Shoelace issues, but pretty soon it will be our Web Awesome issues board, and we will definitely get it addressed. We've worked with a few different frameworks kind of passively to address some of these things that maybe the edges were a little bit rough, and we worked with them to smooth things out the best we can... And nobody's not been receptive to "Hey, we want to get this to work better with custom elements." This isn't a Shoelace thing, this is really like a platform thing. If we can work with a framework to improve their support for custom elements, that's a net positive for everybody. So far we've only met great people in that regard.

**Amal Hussein:** Yeah. Do we want to go back to the Stencil versus Lit versus... Mitosis? I don't even --

**Jessica Sachs:** Mitosis.

**Amal Hussein:** Mitosis, yeah. I've never even heard of Mitosis, so I'm excited to learn about it.

**Jessica Sachs:** Sure. I can give some more backstory on the other ones... At least the Stencil/Mitosis thing. So Builder.io made Qwik, but also made Mitosis. And two of the founders of Mitosis were Adam and Manu, and they built Stencil at Ionic. So they left Ionic to go to Builder.io, and then they solved the same problem in a different way. And that was my Mitosis. History lesson. But anyway, Cory, what have you been paying attention to in alternate implementations of this "write once, run anywhere, web component" component problem space?

**Cory LaViska:** \[00:51:46.16\] Well, it's funny, because Shoelace 2 was actually written in Stencil... And down the road it switched over to Lit, and there's a post out there that you can search for and read if you're interested about that... But what I wanted to do is - for me, Stencil was a little bit of magic. I wanted to be a little bit closer to the platform. I started writing my own web component-based class and turn it into this little micro library... I was like "I want all these features, I want declarative templates, and I want --" There's a whole bulleted list of things that I wanted to build. And so I started putting those in there, and what I realized is I ended up with something that was about the same size as Lit, it wasn't nearly as good as Lit, and I was like "You know what, why don't I just use Lit? Because I want to build components, I want to build this design system starter kit. I don't want to build a Lit, or a Stencil." And so that's where I realized "This is dumb. Let's just focus on what I care about, and get rid of that. Let's just go with the simplest thing."

And at the time there's hybrids, there was \[unintelligible 00:52:48.11\] was there, but I think it was still kind of early-ish... But Lit was just the most obvious choice, and so I've kind of made good friends with that community, and kind of just stuck with it. I don't see a big reason to change. But there are some pretty cool libraries... If you're a React developer, I think Atomico is more of a newer web component library, where it uses more reacty kind of APIs. So there's a lot of cool - I'm gonna call them libraries that you can use to create custom elements with these days. So yeah... I haven't had any experience with Mitosis though, personally. Sorry.

**Jessica Sachs:** It's fine. It's a pretty cool concept. I feel like it's the -- there's also TanStack, which is pure vanilla, and then thin wrappers. And I feel like Mitosis is closer to that implementation-wise, but... Yeah, it's very compiler-based. They launched a website yesterday, which I've found kind of interesting. I still am hesitant to use it in prod. For people's nervousness on how prod-ready do I think it is? I would not use Mitosis in production. But I find the website that shows different compilations - write it in React, see it in Vue, see it in Angular. Write it in Angular, see it React, see it in Vue. That I find interesting. But again, it's a compiler. It's not a standard, a platform standard that you can trust to be production-ready.

**Amal Hussein:** Interesting. And what's their goal? I'm just curious... Who's the intended user base, I guess?

**Jessica Sachs:** I feel like the intended user base would be -- I don't know, like TanStack instead of being written in vanilla, would be written in React. And then cross-compiled at Tanner's build step. Or you have a company that has really strong React developers, and then there's one team that is really strong Angular developers, and you would like to have a design system that works in both. You would do it at the compile step instead of using the platform. It's attractive to some people, yeah.

**Amal Hussein:** It's interesting. Yeah, that's interesting. It's always really nice to see people exploring different avenues. I think there's always gold that comes out of it irregardless. So that's very, very cool. Thanks for sharing. So yeah, so Cory, what do you feel like is a big takeaway that you want to kind of share with folks around using Web Awesome, in terms of it bringing value into their stacks, and also just soothing over a lot of the common problems that we all have when designing web interfaces?

**Cory LaViska:** Yeah, for Web Awesome free, there's kind of no excuse. There's no monetary barrier. Why build your own buttons, right? We do the hard work and we give you a very easy way, a good API to theme them... And if you want to go with pro, you'll get a lot more. You'll get those components that, again, many of which are their own separate businesses out there. We're building something that we want, not to lock behind a paywall, but we want people to just use it, have fun with it, and then "Hey, support us if these things are helpful to you, if these advanced components and these advanced theming mechanisms and other things that we're adding on top of it are useful, for a ridiculously low price."

\[00:56:08.26\] I mean, I think it's not uncommon to hear that Font Awesome is underpriced for what they offer, and Web Awesome is following the same path. We're probably one of the better values for the things that you're gonna get. That's what we're doing, we're building these things for you to just get on there and just use, and if you want more - awesome. Be part of that cause. I don't have a solid "Oh, wow", kind of what I want, but...

**Amal Hussein:** It's okay. We're workshopping. It hasn't even been released yet, so...

**Jessica Sachs:** Yeah. I mean, I would say there's free versions of Web Awesome, there's paid versions of Web Awesome... Go out and try it. If you want the paid components, if you fall in love with the button, consider the chart. If you fall in love with the form, consider the chart. Consider the data grid. Heavy, heavy stuff.

**Cory LaViska:** Yeah. I'm not a good salesman, I'm not a good marketing person, and whenever I start to sound salesmany, I just feel like "Oh, this is just so lame." But the reality is we don't want to be that company. We want to be that open source company first, and it's like "Well, this is a means to an end. How do we get from here to there and continue doing this?" And we're building this stuff for our users. They're the reasons we exist, they're the reasons why we're going to continue to exist... And we just want to build really good, efficient, well-performing, accessible things that you can use.

We are building oh -- I can't say the L word. We are building the small toy bricks that you used to build much bigger sets out... You know what I mean?

**Amal Hussein:** Okay, yes.

**Cory LaViska:** We're building those things, so you can build the bigger sets... And that's what we enjoy doing. And so if we do that right, you can just pick that up. Let me ask you a question. If you're building a website from scratch, or an application from scratch, is the first thing that you do to think about like "Well, what color should my buttons be?" No. You just want to throw buttons in there and worry about all that stuff later. So if we give you all those pieces, and you start assembling them, and then you can go back later and start changing those themes, and all that, worry about all that other stuff later...

The first thing they tell you to do if you're creating a startup is like build an MVP. Make it work. Who cares what it looks like? It can look like complete garbage. If you can make it work, that's your first step. So we're giving you those blocks for free, and you can do all that with those, and then you can add all these other layers later on, which I think is kind of unique. You don't have to worry about building all these pieces; you just put them all together, and then the next thing you know, you have something functional. You can worry about how it looks, you can start customizing, you can just build on top of that.

So I don't know, I genuinely love building these things... And the team that we've assembled is just as nerdy about that. This is the stuff that we love to do, and it's probably very boring to most people out there. This is not a conversation I'd have with a stranger on a plane. They're like "Well, what do you do for a living?" "Uhh, you know... Yeah..." But it's stuff that we really nerd out about and we enjoy doing... And for the folks out there that find it useful, we appreciate that. We appreciate the opportunity to serve you, and to give you all these cool tools to build things with.

**Amal Hussein:** My only advice to you all would be - my unsolicited advice - drop the free. I would say it's Web Awesome and Web Awesome Pro. I think you drop free. I think you want to build branding around and get traction around Web Awesome. And you already have so much traction around Shoelace, and you're now opening this up to like an even bigger community, which is exciting... But I would drop Free. That's my unsolicited advice, Cory.

**Cory LaViska:** I like that.

**Amal Hussein:** I think that's like a leaky abstraction. You guys can use that internally, as people who work there, but...

**Cory LaViska:** Yeah, I think for the Kickstarter we definitely use Free and Pro to differentiate, but... I like that. I'm gonna bring that to the table and see if that's something we can do. Web Awesome Free - it just sounds like...

**Jessica Sachs:** It's too long.

**Cory LaViska:** I don't know, like "Oh, I'm getting a half-hearted version of it." Yeah, it's too long. But yeah, I'll bring that back to them and see what we can do about that.

**Amal Hussein:** That's great. And now I just want an attribution credit on the website, okay? Just kidding.

**Cory LaViska:** \[01:00:11.09\] Yeah, yeah. Free License.

**Amal Hussein:** For life. Just kidding.

**Cory LaViska:** We'll give you a free license to Free. That I can commit to right now. \[laughs\]

**Amal Hussein:** Oh, awesome. Great. That's great. I'll take it. I'll take it. That's great. No, Cory, thank you so much... We're excited to kind of see this thing launch, and get some legs, and we'll have to have you back to kind of talk through some of the details for some of these fancy new components... I can't believe you're making a date picker, and -- oh, my gosh...

**Jessica Sachs:** Data grid, date picker... I'm so there. I'm so there.

**Amal Hussein:** Yeah, you have to tell us about all the pain points of making a standardized date picker that works everywhere, that's responsive and accessible and all the things.

**Jessica Sachs:** I'm super-stoked.

**Amal Hussein:** That feels like God's work in some ways, you know?

**Cory LaViska:** Yeah... Date pickers are complicated, because there's date picker, and there's date range picker... So there's definitely a lot of details that we have to iron out there. But like I said, we have our work cut out for us, but we are not averse to challenges... And this is what we do. If it was easy, we probably wouldn't be doing it.

**Amal Hussein:** Yeah, that's right. That's right. That could be your sub-tagline, you know?

**Jessica Sachs:** "If it was easy, we wouldn't be doing it."

**Amal Hussein:** "We wouldn't be doing it." Right. Exactly. So we're doing the hard work for you. See, we come up with like all these fun taglines for Web Awesome.

**Jessica Sachs:** "You already know how hard this is."

**Amal Hussein:** Yeah. Oh, I love that.

**Cory LaViska:** That's the funny thing... If you sat down and said "I'm gonna hire a designer and a developer to develop a single component..." Ask anybody who's a potential customer of Web Awesome and say "How much would that actually cost you to get that?" And then not only to just build it, but then to maintain it, to write the tests for it, etc. And I think that you'll find that, while I'm getting like 50+ components, plus all these Pro things, plus the themer - to me, that's a no brainer. The value is there. So that's why I say -- when I say we're probably underpriced, I think we're definitely underpriced. And I just hope other people see that... Because, you get a lot for free, but for what we're asking for Pro, you get so, so much more. So...

**Amal Hussein:** Yeah, there we go.

**Cory LaViska:** So I hope everyone likes it.

**Amal Hussein:** Yeah, no better way to end it. So again, congrats.

**Cory LaViska:** Thank you.

**Amal Hussein:** Thank you for making Web Components cool, and functional, and useful, and bringing utilitarian value to them. It's really exciting. And yeah, just good luck on the sustainable open source business model. It's just very promising, and just very encouraging, and I hope other libraries can follow suit, and follow your footsteps in that way. And yeah, Jess, any closing thoughts from you before we wrap?

**Jessica Sachs:** The sheer number of these components... Like, oh, man. I can't even count easily. That's why I haven't said it the whole show. You guys are doing amazing. I'm super-stoked.

**Cory LaViska:** Thank you.

**Jessica Sachs:** Thank you so much.

**Amal Hussein:** Seriously.

**Cory LaViska:** I appreciate that.

**Amal Hussein:** \[01:03:03.10\] Thank you. Thank you.

**Cory LaViska:** We have a lot more to add, so...

**Amal Hussein:** So where can folks get in touch with you, and also just learn more and follow along with the project's progress, and all the things?

**Cory LaViska:** So if you go to WebAwesome.com, that's going to direct you currently to the Kickstarter page, but in the near future that's gonna direct you to the project's website.. And if you want to follow me personally, it's @claviska on Twitter... And I will continue to call it Twitter until I'm dead. But yeah, that's probably the best place, so... I appreciate it. Thanks again for having me.

**Amal Hussein:** And if they want to come visit you in New Hampshire - is that an open invitation?

**Cory LaViska:** It's a small state. Just --

**Amal Hussein:** Can they come and burn a tire with you?

**Jessica Sachs:** Oh, my God...

**Cory LaViska:** Wow, okay... We're gonna circle back to that.

**Jessica Sachs:** Whow...! \[laughter\]

**Amal Hussein:** Listen, you guys are taking this as an insult. It's not an insult. This is just par for the course --

**Jessica Sachs:** It's just culture?

**Amal Hussein:** Yes. Thank you.

**Cory LaViska:** We love our New England siblings, all those sibling states, especially the ones that are not as -- no, I'm not gonna say it.

**Amal Hussein:** Not as liberated? \[laughs\]

**Cory LaViska:** We just don't like the way y'all drive up here. So if you could stop being maniacs on the highway, that would be great.

**Amal Hussein:** You know, we are absolutely maniacs on the highway. I'll take it. I'll take it. I'm not even going to try to argue that. Every time I'm driving in the Midwest, where there's sane roads, and grids, or whatever, I'm like the maniac that's like doing \[unintelligible 01:04:30.08\] or doing crazy things. People are just like "What is wrong with you?" I'm like "Don't blame me. I grew up driving in Boston. Just don't blame me. Blame Boston." You're not aggressive, you're not moving. That's the way it is.

**Jessica Sachs:** Austin is insane, by the way. Oh, we can let you go...

**Amal Hussein:** \[unintelligible 01:04:48.14\]

**Jessica Sachs:** Yeah, so I just started driving down here, and what's crazy is everybody goes about 10 to 15 miles below the speed limit. It's insane. I've never lived in a place -- Cory, you're nodding. Have you driven down here?

**Cory LaViska:** Where's down here?

**Jessica Sachs:** Oh, Austin.

**Cory LaViska:** In Austin. Yeah, so I lived in Round Rock for about two years, actually.

**Jessica Sachs:** Yeah, I'm like 15 minutes from Round Rock.

**Cory LaViska:** Yeah. So I think you have two types of drivers there. The ones you're describing, and then you have the people from mass, that are also on the road there, which... But yeah, it's definitely interesting. Like, people actually - ,like they'll stop and let you pull out. They'll be like "Yeah, no, go ahead." They'll even block traffic. They'll stop, block the traffic behind them and be like "Yeah, no, go ahead. Go ahead." They're so friendly.

**Amal Hussein:** Wow...

**Cory LaViska:** But yeah, it's a different world.

**Jessica Sachs:** It's wild. I saw a semi-truck weave like it was a Corvette. And usually, there's like -- it was bizarre. And he weaved through traffic, the freakin' 18-wheeler. I was like "What in the --" Usually there's a sticker, "Call About my Driving." No sticker. There was no sticker there. You did not wanna... Yeah, I was freaking out. I was like "What is happening...?"

**Amal Hussein:** Oh, gosh. Alright, well, next week on US Driving Weekly... Compare driving habits across the United States of America. Thank you again, Cory. It's a pleasure having you. I can't wait to see all the awesome things you guys release... And yeah, that's it for this week, folks. Have a good one, y'all... Cheers!
