**Kevin Ball:** Hello, JS Party people! Welcome back to another week of partying about JavaScript and the web. I'm Kball, I will be your host this week, and with me today to discuss the State of \* surveys, where \* = CSS or JS, I have the one and only Jerod Santo. Hey, Jerod.

**Jerod Santo:** I thought we were gonna be the stars.

**Kevin Ball:** We could change it up - State of the Stars Survey...

**Jerod Santo:** \[laughs\] I thought we were just gonna talk about how we're doing.

**Kevin Ball:** How are you doing, Jerod?!

**Jerod Santo:** I'm doing quite fine, thanks for having me.

**Kevin Ball:** You're a star. Alright, the other friend/panelist/star joining me today is the one and only Nick Nisi. Hello, Nick!

**Nick Nisi:** Hoy-hoy. How's it going?

**Kevin Ball:** Making it through. We are in 2021 now, for real; not like the last episode that I recorded for 2021, when we were recording it in 2020...

**Jerod Santo:** We were faking it.

**Kevin Ball:** So excited to be here. Last year was a \*bleep\*, but we made it! By virtue of speaking or listening to this podcast, you made it. You are here, in 2021, and we are gonna talk about what's changing in JavaScript and CSS, and we're gonna jump into that by looking at the State of JS and State of CSS surveys that were done and published at the end of last year. There's a State of JS 2020, a State of CSS 2020... And one of the fun things about that is we can actually look at the differences between what was going on in 2020, what people said, and what was going on in 2019, talk about those trends... We can prognosticate about whether or not they missed something...

\[04:03\] But yeah, let's start with just kind of talking about those surveys, because we've talked about them before... What strikes you guys when you think about these surveys? I know when we talked about doing it, some folks were like "Oh, those surveys..." and some folks were like "Yeah, those surveys!!"

**Jerod Santo:** I like surveys, I like to look at data... And I appreciate the work that goes into these surveys. We've of course broke them down in the past, and... Doing surveys is hard. In fact, we at Changelog have thought about doing surveys, and talked to folks about doing some surveys, and we were always like "Do we really wanna do surveys?", because it's tough to do well, and you open yourself to all sorts of criticism, which - I don't like criticism. I just prefer to be a star...!

So I just appreciate Sacha and the team and everybody who works on these, because it's tough to do well, and they've come under some criticism because of how they've been conducted over the years; I'm sure we'll dive into all that, but... I do enjoy just looking at what's going on and seeing the changes over time, and then talking about it. I think some of these things have to be taken with a grain of salt, but that being said, it's good conversation pieces.

**Nick Nisi:** Yeah, and I really like that it validates all of my conceptions about JavaScript and CSS of today.

**Kevin Ball:** That's sweet.

**Nick Nisi:** And when it doesn't, then I don't like it.

**Jerod Santo:** Then it's biased.

**Kevin Ball:** That's the real value of surveys, right? The ones that tell you that all your priors are correct, and all the other guys/girls' opinions are wrong.

**Jerod Santo:** Yeah. You can just survey yourself and then you'll bat 1,000. Sample size one, all the answers are correct... Moving on.

**Kevin Ball:** Well, and that is one of the interesting both critiques that have been leveled at these surveys, but also one of the things that they've worked on and done well - how do you determine what's the sample for your survey? Who is being surveyed? And if you're doing a scientific survey with the purpose of trying to prove something, then you wanna figure out what the population is that you're trying to understand, and survey a representative sample.

Here we're trying to kind of get a sense of just the broadest possible swathe of the web, and I think they've taken the spray and pray approach, which is like "Okay, push this in as many directions as we possibly can, so we can get the most possible data, and worry a little bit less about does this accurately model any particular population within the web dev community." As a result, we have lots of data to look at. As you do this, do be a little bit careful in drawing conclusions about the representation of all of JavaScript or all of CSS.

One of the things they do do nicely is they print out the demographics of who it was that answered the surveys, so that you can see who is this representative of, and if you come in with a feeling about what the web industry looks like, or what your company looks like, you can get a sense of whether or not this data is likely to be representative of you.

**Jerod Santo:** Plus, you have to ask yourself how much does it really matter, as well. You know, like "So other people are digging this particular technology... Does that mean that I need to be using that technology? Or does that mean that I'm less than because I use this other technology?" It's worth understanding what other people are doing, what they appreciate, what they're moving away from, what they're moving towards... But all those are just data points for you and your life and your work and your team to make decisions. So that's why we say "Take it with a grain of salt, because even if this survey was 100% the actual facts of the world of JavaScript and CSS, that doesn't mean that it informs your context whatsoever."

So - grain of salt. Still enjoyable to look at, and of course, confirming your priors is always fun, so... You know, we're here to see if TypeScript is doing awesome, or...

**Nick Nisi:** Oh, yeah. We don't have to look.

**Kevin Ball:** We know... \[laughter\]

**Jerod Santo:** We just know...

**Kevin Ball:** I mean, the new government website that just was relaunched after the inauguration - folks were tearing it down. It's using jQuery. Not a problem. So they're still like -- that's one of the wealthiest governments in the world doing their website, and they're using jQuery. So if you're using jQuery - no shame, even if it's not showing up in this survey. Lots of different stuff there.

\[08:11\] Okay, cool. So before we dig in, we've talked about values, pros and cons, but the team behind these surveys has also talked a little bit about what they want to do moving forward. I know some of the big changes that they made coming into 2020 from 2019 was they improved the breadth of demographics that they were looking for, and they did a lot more in terms of pulling in information from the community about learning, where to learn from, what good resources are... Which I think highlights that strength point you were talking about, Jerod, of using this as a place to get a sense of what people are doing, and kind of explore, rather than use it to try to tell yourself if you're doing good or not. What are some of the other things they've said they're gonna do?

**Jerod Santo:** I mean, it's worth giving a shout-out to Sacha Greif and Raphaël Benitte - I believe that's how you say his name - who is really the team behind both State of CSS and State of JS; they've been doing it for many years, so this is very much a labor of love. A lot of people pitched in this year, so they have a special thanks on their website, including some folks doing translation, so that's really cool...

And we've had Sacha on this show, I believe. We've definitely had him on the Changelog, and we've talked about the trials and tribulations of doing surveys; the way that his branding - or I should say their branding - and design is so good that it gives them a lot of clout, which is why some of the criticism comes with the clout, when you say "This is the state of this", you are making yourself authoritative, and they've done a really... I mean, their websites are always spectacular. So shout-out to all that.

And they also know that it can be improved, year by year, just like anybody would do with a project that they care about. So like you said, Kball, they've made some improvements this year... Sacha recently tweeted that he wanted to do some new stuff in 2021 for the next round, which I'm sure will be coming out soon... At least the survey part, maybe not the results. They wanna start measuring disabilities among respondents, which of course would help us with our LI decisions, our accessibility decisions and information around that, improve the translation process... Of course, the more languages you can get to, the better sampling you can have of the world writ large, not just the U.S. and English... They want to do a better job of highlighting minoritized voices, whether by gender, race, geography etc. and the results through data visualization.

So just a few things that he put out that they would like to do this year, and just continue to improve and refine what these surveys are.

**Nick Nisi:** I do like that they see the criticisms that come from this and they respond to it, honestly and openly. That's really reassuring... Because it's a hard problem to solve, no matter how you look at it. Coming from a conference organizer perspective - you know, we always strive for having really good, diverse... In both people that are coming, the speakers and the opinions that are being thrown out at the conferences, trying to have a diverse opinion across all of that. It's not easy, but it's much easier when it's a finite set of people, like 10-20 speakers that you're picking out, and trying to set the tone with that. With this, you're trying to expand beyond the audience.

They call it in a blog post, that they're two white guys trying to do this on Twitter, which is predominantly white male, and trying to reach out through that... And it's hard when you're trying to get thousands more, as opposed to like 10-20 more for a conference.

**Kevin Ball:** \[11:38\] Yeah. And if you look at the demographic trends that they have over time, they are trending more diverse. They're getting a wider range of folks from different countries around the world, they started measuring primary languages, and they're getting more and more diversity there... There's somewhat more gender diversity... There's definitely room to grow on that dimension, but they're acknowledging it as an issue and they're moving in the right direction.

**Break:** \[12:08\]

**Kevin Ball:** Alright, so coming back into it, let's talk about what stood out in the State of CSS survey and what you're taking away from it. Let's start with you, Jerod - when you looked at this State of CSS 2020, what did you notice? What stood out to you?

**Jerod Santo:** For me what stood out is that people who responded to this survey (let me preface that), they generally like CSS quite a bit... Which is somewhat funny when we talked about a few weeks back why people complain about CSS so often. Because even since that conversation, I put a post out on Changelog.com as well, just reviewing some of the reasons that we thought, I've seen so much complaining about CSS over the last few weeks just on Twitter alone, that it seems like it's like the whipping boy - or girl, depending on how you think of CSS - of the community. There's just so much complaining, and rabble-rousing, and debating... It's just like, wow. Very interesting.

\[16:24\] And then the survey says people are generally pretty happy with CSS, which I think is appropriate and cool... Because let's face it, it's a very powerful set of tools and technologies, and there's so much that people accomplish on the web, and build amazing things. I just love going to a website and being like "Wow, this website is amazing. The person that put this CSS together really knows their stuff." That's such a great feeling, and celebrating that.

So just seeing that, you know, of course, there are things that could be better, there are things that are hard to learn, things that are hard to use, waiting for browsers to support X, Y or Z... There's all these little intricate details. But in general, people do like CSS, and that was just really nice to see. And then secondly, I think the trending thing is no surprise, because we've been talking about it recently... It's that Tailwind has really taken over the mindshare, I think, of the frontend CSS space in 2020.

**Nick Nisi:** So you think that that's -- does that support the idea that people love CSS?

**Jerod Santo:** I mean, it's a CSS framework, so... They love it. \[laughs\]

**Nick Nisi:** Well, you don't really write CSS with it... \[laughs\]

**Jerod Santo:** Well, like I said, there's reasons why it's difficult, and one of the things that Adam said on the show we did - referencing back to our episode we did late last year with Adam Wathan of Tailwind CSS, why it has been difficult and it can be difficult to really feel like you've mastered it is because the best practices have not historically congealed to a place where it's like "Here is how you do it." There's different takes, a lot of experimentation, things go in and out of style, technology changes... You know, responsive web design really shook up the CSS best practices landscape; but that was probably a decade ago now.

And the utility classes are starting to be something that a lot of people are congealing around. Of course, Tailwind provides that set of utility classes, and so it seems like a radical idea. You know, Tachyons, Bulma is another one... There's a handful of these things over the years that have been saying "Let's do CSS with these utility classes, which seem they're non-semantic etc. and it really makes things better, and it seems like that's starting to become -- I don't know if it's a best practice, Kball... What do you think? It's becoming popular-er, and Tailwind is leading that charge.

**Kevin Ball:** Yeah, I think similar to what we've seen in the JavaScript ecosystem, there are ongoing both questions and trends around what are the right abstractions to use. And the types of abstractions that are gonna make sense in a CSS environment that is visual, and spacial, and essentially intended to apply to wide varieties of screen dimensions, and things like that, the problem space of CSS - that's a very different problem space than you encounter in JavaScript, so it's not surprising that the ideas about what's gonna make sense there are not the same.

I think we went a little overboard on the semantic CSS approach because it modeled closer to how we were used to thinking about things in more imperative programming languages like JavaScript... And that turns out to have some challenges when you shifted into that visual space.

I wanted to jump back a little bit to what you said about people liking CSS, because I think it highlights one of the challenges in this type of survey... I think there might be a selection bias. The people who chose to take the State of CSS survey - they break down demographics by reported skill level and CSS proficiency, and 61% of the people who answered this survey consider themselves experts, with expert being defined as "Able to style an entire frontend from scratch, following a consistent methodology."

\[20:18\] That body of people have likely already put in a tremendous amount of work learning the mental models of CSS... Which, as I mentioned, CSS is a very different problem domain and mental model than most other programming domains you're gonna end up with... And I think that might be the source of a lot of hate. A lot of the folks who hate on CSS - they have not made that shift into understanding the mental model. And because it's different, it feels painful; it's raw, it doesn't work right for how their heads are set up.

So I think we should 1) use this to say "Yes, there's a large body of people out there who do love CSS", and for good reason. It's an incredibly powerful and interesting language, and I think that mental model is actually a really interesting one to wrap your head around... But not necessarily take this as representative of the community as a whole. Because everyone who hasn't climbed that learning curve, from what I can see, they didn't take the survey.

**Jerod Santo:** Yeah, really good point. And perhaps a bright spot for those who are banging their head against CSS right now; maybe you're just getting started. It is one of the first things that you learn, as well. HTML and CSS, and then JavaScript. I think you should learn them in that order.

HTML you can actually pick up in a day or two, because once you understand the sideways tree... I'm saying the basics; it takes a long time to master, of course. But it's so approachable... Like, "Okay, here's a tree structure. We nest things inside. We give them names. Take a cheatsheet, memorize these elements", and then attributes, and it goes from there. We learn forms, that kind of stuff. You can pick that up in a day. I have taught it to people and they have had no problem. Mentally, they're just like "Cool!" and they're excited to come back for day two.

And then day two - I used to do a three-day real basic web development class, and it was like day one, HTML, day two, CSS, day three, how to make something hide in JavaScript. So it was like the most basic JavaScript you could do. Day two, come back and now it's time to start talking CSS, and it can be a real struggle at first. Like you said, that mental model is not mapped as easily, by anybody probably... By most folks at least.

But these experts, the 60% who can do it, they've made it through that way - they like it, they enjoy it. They're productive. And so for those of us who are in the mucky-muck, trying to figure out the mental model, trying to figure out why it doesn't look the way that we want it to, if we power through and persist and persevere, likely at the end of that tunnel is a technology that a) is very powerful, and you can accomplish a lot, and make money, and make cool things, and all that, but b) you'll probably end up liking it.

**Nick Nisi:** One thing that the survey doesn't -- I'm not sure, I haven't found it at least - tell me is the preference towards more straight, more traditional CSS... Or I would even put Sass in there... But you're writing more like, you know, "Here's my style files" versus "Here's my very tool-optimized CSS that I'm writing either with CSS-in-JS, or with PostCSS, or some other tool that's helping me to write better CSS, that's maybe more scoped to a specific component that I'm working on, or something. It doesn't really tell me if there's a preference more one way or the other when I look at this. Have you seen that?

**Jerod Santo:** There's a little bit with the CSS methodology section, but it's not exactly what you're talking about...

**Kevin Ball:** Yeah, that's where I was going. There's a little bit in that breakdown of technologies and methodologies.

**Jerod Santo:** The methodologies are really like BEM vs. SMACSS vs. object-oriented CSS etc. Utility CSS or Atomic CSS. But it doesn't say like thinking in components like with CSS-in-JS, or anything like that. That's actually its own separate area. So I don't think it addresses directly what you're referring to, or there's no traditional cascade, or I don't know what you call the way that we historically did it... What do you call that, Kball? The cascade style, or nested...?

**Nick Nisi:** We call that CSS. \[laughs\]

**Jerod Santo:** Yeah, just CSS. Just start slapping stuff out there.

**Nick Nisi:** \[24:26\] But that could lead one way or the other. Like, do you actually like CSS? Or if you're writing this very different variant that is hyperscoped, and gets rid of the cascade, and is in -- I mean, not necessarily in JS, but it's not traditional CSS, and it's kind of changing the rules of CSS... Is that making someone like CSS more, because it's making it easier to use? And also, is that kind of making people feel like they're more of an expert, because there's so much tooling that you have to setup beforehand?

**Jerod Santo:** Hm... These are great questions that I have no answers to...

**Kevin Ball:** Yeah. No idea. I think one interesting thing in this space that actually contrasts it a little bit with the JavaScript space, is - especially if we look at the changes and how much people are using different things, there has been dramatic change both in the libraries and tooling space, but also just in the underlying features of CSS. So there's a dramatic increase in folks using CSS Grid. There's a dramatic increase in folks using customer properties. And those are things that allow you to do stuff that you used to need a lot of tooling to do. And in some cases, they let you do things that you basically couldn't do at all, even with tooling.

So there's quite a bit of innovation in what the underlying platform supports and how much people are able to use that... At the same time, there is also this change in framework; there's a lot of people using Tailwind. That's dramatically changing. Many moves towards these sort of, as you highlight, the more functional and utility-based CSS, and away from some of the more semantic CSS frameworks... And there's increasing amounts of CSS-in-JS. Folks using Styled Components, folks using CSS modules. There's a lot of movement in both dimensions of that.

**Jerod Santo:** One of the areas that you mentioned movement, which - I don't even know what this is... It's object-fit. Can you describe what object-fit is?

**Kevin Ball:** Yes. So object-fit... Let's even look it up. So this is basically around how you can display images and videos at particular sizes within their containers. For example, if you have images with different aspect ratios, that all are gonna have to go into a single container, or a single component, how does it make sense to do those? Do you want to trim them? Do you want to have them cover the space? Do you want to have them be resized, so the entire thing is fit? Those used to be so hard to do... And you'd have to basically do a lot of hackery to try to get it. Now you have a single property where you can say "Okay, for this one - I want it to be contained", which means that the entire image should fit within this space, and shrink it until that's possible. That may mean white space on the outsides in one dimension or the other, but that's fine.

Or you can say "I want this to be covering the space", in which case it will trim a set of things, but it'll make sure that it's covering the entire thing. So it's giving you fine-grained control of how images and videos are resized to fit their containers.

**Nick Nisi:** And particularly for images like -- I can remember times in the past where I inappropriately would use a background image, because I wanted that kind of feature... And that's not very accessible. So in this, you can use an image tag, or video, like you said, and then just set this property and get the same result.

**Jerod Santo:** Pretty cool. I did not know about that one. I will answer to using it in the 2021 survey.

**Kevin Ball:** \[28:14\] That gives us a good jumping off point - what did you all take from this survey, of things that you want to either start using, or at least dig into and learn about?

**Jerod Santo:** Object-fit. \[laughs\]

**Kevin Ball:** You're a star, Jerod...

**Jerod Santo:** Yeah, there we go... I'm gonna be an object-fit star next year. Honestly, at this point I think the groundswell of interest, and talking to Adam on the show, I think Tailwind CSS is on my list of things to actually pick and try on a real project, versus just toying around with it and reading about it and then moving on. So that's on my to-do list. And I wouldn't say this survey made me think that, but I was already kind of thinking it, and then I see this, and I'm like "You know what - let's give it a shot", so I can talk about it in more expert terms and not just armchair/quarterback terms. So that's something I'm definitely gonna do here soon.

**Nick Nisi:** I would say the same. I've been using Tailwind on my continuously-evolving blog I just never post to...

**Jerod Santo:** I didn't know you had a blog.

**Nick Nisi:** Because I don't post to it. I just change the technology that runs it.

**Kevin Ball:** You have fallen into that classic developer blunder where to get started with a blog you have to build yourself a custom blog, and you end up in this never-ending loop of iterating and tuning, and never publishing.

**Jerod Santo:** That's right. You only have one post every couple of years, and it's about how you rewrote your blog engine, you know?

**Nick Nisi:** Yes... \[laughs\] That's totally me.

**Jerod Santo:** So that's your goal for this year, you're gonna rewrite it again with Tailwind?

**Nick Nisi:** I've already started, yeah.

**Jerod Santo:** Oh, okay. \[laughter\] Why wait...?

**Nick Nisi:** But Tailwind 2 came out and it has a dark mode now, so I need to figure out how to integrate that before I can actually post anything. I can't post anything without a dark mode...

**Jerod Santo:** That's true.

**Nick Nisi:** Yeah, I think that's interesting... I will say that day-to-day what I write is React, and specifically a lot of the components that we're using are stylized Material-UI components, from the Material-UI React library... And in a lot of ways I don't end up writing CSS a lot. I like writing CSS, but I don't end up doing it because I get to play within the components that they provide, which is like a box component, for example, or a Grid component, which gives me a Flexbox style grid that I can lay things out with... And in Box I can set specific margin and paddings. I like that because when I'm not writing straight CSS, I know that what I'm writing and the way that I'm styling things on the page is conforming to the overall design system that we have... And I like that I have those guardrails on me, and I know that I'm only ever reaching out to real CSS when I have something that doesn't fit within those guard rails... So I have like an extra justification for that. I would be interested to see how that evolves. This is my first experience with it, and I wonder where stuff like that will be next year.

**Jerod Santo:** My largest active project is Changelog.com, and the CSS on Changelog.com was written not by myself, but by Cody Peterson and his team, and it's modified and extended by me now. And it's BEM. And I hit my head against it enough, especially when it comes times of like "Hey..." -- it's almost like I need more componentization, and BEM is not providing it. Or maybe \[unintelligible 00:31:19.11\] I'm not here to throw neither BEM nor Cody under the bus. It's just the state of the world that I'm in.

I just find myself being like "I wanna use this thing over here", and in order to get that done, I just feel like it's way harder than it needs to be, so I'm excited for the utility styles idea, and see if that eases some of my pains with my current site.

So I'm thinking about just taking the main design of Changelog.com and just seeing if I can port it, look for look, from its current over to Tailwind, and just see what that process is like. That's kind of the working plan.

**Kevin Ball:** I'm also doing most of my -- well, when I'm working in the frontend these days, I'm doing most of my work in React, and Styled Components, and largely using an existing design library to the extent possible... So I don't get to play with this stuff as much as I used to. But I think one of the really interesting areas that to me is only really getting explored by a subset of folks is the extent to which you can use custom properties to enable that type of almost state-driven component.

\[32:24\] In your example, Jerod, I imagine a lot of those BEM classes have hard-coded values in them, and that's part of what makes it hard to move them over to new locations, where things are slightly different. But one of the really cool things about custom properties is you can actually -- like, they are scoped, in the same way that CSS is scoped, and they cascade... So if you were to rewrite those all using customer properties, then you could have whatever their container is in the new location override those customer properties and have it essentially work in both locations.

I think there's some really, really interesting stuff there, and I've only seen a few people digging into that.

There was a post I've read recently, that I can dig up for the show notes - it was talking about the ways in which you can actually use CSS custom properties to communicate state in general to your UI, and using it as a way to, for example, communicate... You could set up an API that actually is -- what the API returns is a set of CSS custom properties, and you plug those CSS custom properties into your site, and it ripples through, because it communicates a set of state. A bunch of other interesting things that could happen there... So I feel like that's an area that is ripe for some more tooling and some more exploration about the possibilities.

A lot of the use cases I'm seeing out there right now for custom properties are pretty straightforward. They're replacing Sass variables, which is great. I mean, being able to do what we used to do with Sass variables in CSS is phenomenal, don't get me wrong...

**Jerod Santo:** For sure.

**Kevin Ball:** ...but I think there's something that has potential to allow us to reimagine some of the ways we write CSS and do some really interesting things.

**Jerod Santo:** That sounds fascinating. What if I have prefers-reduced-motion turned on? Will it still ripple through, or will it just... \[crickets\]? The joke wasn't even worth trying a second time... \[laughter\] But I tried it anyways. Sorry, I just got \[unintelligible 00:34:27.02\] "it just ripples through your site." I was like--

**Kevin Ball:** Maybe I should have said "it cascades through your site."

**Jerod Santo:** Thank you. Much better.

**Nick Nisi:** What does that mean?

**Jerod Santo:** It's kind of like a ripple effect...

**Kevin Ball:** ...except playing on the cascade...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** I write modern CSS, I don't know what cascade is anymore.

**Kevin Ball:** \[laughs\] Right.

**Nick Nisi:** I think next year -- maybe not next year's, but this survey in 3-4 years will just continue to become more interesting because of... Specifically, I'm thinking of Houdini, and exposing a CSS parser API, and some of the layout stuff that they're bringing... It's gonna change what you can do with CSS, and it's gonna make it so powerful... And it's gonna be really interesting to see how that trickles into the everyday CSS frameworks and libraries that we use, and what that will mean in the future for styling the web.

**Break:** \[35:16\]

**Kevin Ball:** Okay, let's get back into it and dig into the State of JS 2020. Nick, I know there was something you had your eye on there...

**Nick Nisi:** And to see how TypeScript was doing...

**Kevin Ball:** And what's the story?

**Nick Nisi:** Surprise... It's on top! \[laughter\] It's on top. Yeah, since 2017 - in fact, every year of this survey except for the first year (2016) it's been in the first place for the preferred flavors of JavaScript. In 2016 it was in the second place. But it's remained in the first place, it's very popular, and it's pretty cool seeing that it has nearly 88% of respondents really approve of it, meaning that they are interested in it, or have used it or would use it again... Which is extremely high. We don't really have things that get that much universal approval, except for on this podcast.

**Jerod Santo:** \[laughs\] I don't like it. Just kidding... \[laughter\] No reason. I'd just like to state that.

**Kevin Ball:** I didn't take the jump for a long time, and then at my job, when I started there, a year and two months ago or whatever, they were using TypeScript, so I started making the jump... And now I don't know how I'd live without it.

**Nick Nisi:** Exactly. It's painful to write regular JS now.

**Jerod Santo:** Why? Because you have Stockholm Syndrome?

**Nick Nisi:** Probably... I've used Vim for ten years, and for most of that, Vim was just an editor that really didn't give me much help. I didn't have completion turned on at all for anything... And I would just write straight JavaScript, and I'd have so much of the state of what I'm working on built up in my head; I would just be reciting it from memory. And of course, I've gotten older now, which means I probably can't do that anymore, and the tools have just gotten so amazing that now I just rely on it for everything. And I'm constantly trying to figure out ways to creatively use TypeScript to make sure that things that normally aren't autocompleted can be autocompleted, to make my life and everyone else's life easier... Because I also can't spell. And I constantly just write things incorrectly, and I get that checked in, and I realize later that I misspelled something. I'm talking about things that aren't type-checked, like keys to things.

**Kevin Ball:** I will point out that function names get misspelled still. And autocomplete in some ways actually makes that worse, because people will misspell it.

**Jerod Santo:** \[40:08\] You propagate the misspelling?

**Kevin Ball:** People will misspell it once, and then they'll just keep it going through everything.

**Jerod Santo:** Nick, I think at this point if Vim is doing most of the work for you, maybe your employer should just reduce your salary and make donations to the Vim working group... Don't you believe that's the case?

**Nick Nisi:** We're gonna have that stricken from the record, Jerod, but... \[laughter\]

**Jerod Santo:** Real developers have all the APIs memorized, don't you know that? Come on, man... You've gotta have it internalized.

**Kevin Ball:** No. Remember, Jerod, it's about the value being provided; it's like the value-added tax, right?

**Jerod Santo:** I agree. Vim is providing a lot of value. \[laughter\]

**Kevin Ball:** He might internally choose to pay Vim, but that's a black box to his employer. Or it was, until this podcast.

**Jerod Santo:** \[laughs\] Nick chooses to pay Vim by making mentions of it on podcasts.

**Nick Nisi:** Oh, my God...

**Jerod Santo:** It's promotional. He's promoting it.

**Nick Nisi:** I'm like the guy from Office Space; I talk to Vim, so that my employer doesn't have to.

**Jerod Santo:** Your employer doesn't have to... \[laughs\] Well, I think your employer would appreciate that... Let's hard-transition away from TypeScript, shall we? \[laughter\]

**Kevin Ball:** Sure. Jerod, what did you notice?

**Jerod Santo:** People more and more do not thing that building JavaScript apps is overly complex. I said that in a confounding way... People think it's getting less complex. From 2016 to 2020, opinions have started to shift. Maybe we're starting to see some -- I don't know what you call it; centralization around certain things? Maybe the Cambrian explosion of frameworks and tools and build tools and stuff started to kind of congeal around generally speaking React and WebPack and other things on the periphery of that... I don't know. Why do you guys think that is? Has it gotten less complex in the last four years? Because the opinions around it, at least according to this survey, are that it's less complex now. Or "I used to think it was complex and now I don't", or "I didn't take this before and now I took it, and I don't think it's complex." But overall opinions going to disagree with that statement, that it's complex. I don't know why.

**Nick Nisi:** I would think that there's a huge correlation between thinking it's complex and writing your own WebPack config, versus using something like Create React App and just getting to work on your project.

**Jerod Santo:** So back in 2016 we all wrote our configs, and now we've just been using that config for the last four years, and it feels great.

**Nick Nisi:** Exactly.

**Jerod Santo:** That's factual for me. Good point.

**Kevin Ball:** Somewhat related to that - I think there has been a rise in what I've kind of called meta frameworks, or higher-level frameworks. So this is things like Next and Nuxt, or Gatsby, or other things, where we're basically building -- you know, there's still innovation happening at the level of the frameworks of React, or Vue, or Angular, or Svelte, or what have you... And we can talk about Svelte a little bit, because that was one of the fun stars of this report... But there's also been tremendous emphasis on going one level up and saying "Okay, we're going to wrap up a lot of the common problems that people are solving over and over again with these frameworks, and just provide standardized ways to do them." That I think has dramatically simplified the experience of building an app.

I don't know if I saw in this survey -- it was probably there somewhere; I can look for that as we speak, but... I think the adoption of those libraries has gone way up, probably looking at this graph, in that same time span of 201-2019.

**Nick Nisi:** Yeah. And Next.js overtook Express as the most popular backend framework, which was really interesting.

**Jerod Santo:** Hm... Why do you think that happened?

**Nick Nisi:** I think for a lot of the reasons that we've been talking about. It just provides a more cohesive experience for putting things together... And it kind of puts those rails in place a little bit for you to follow... So it feels like you're doing the right thing. Whereas Express can be like a Wild West of stringing things together.

**Jerod Santo:** \[44:14\] Yeah. Less decisions to make. So my criticism of the early Node.js JavaScript web-based community, back when I was more on the Ruby side of the fence, was that it was so micro and library-focused that it was like assembling a transformer from parts. You had to pick everything, you had to make all your own decisions, and that's really empowering to a lot of expert-level developers, because they already have well-formed opinions and they know what they like and they don't like, they know what works well in this case and what doesn't... But for the rest of us, it's kind of like "I don't wanna make 1,000 decisions before I can say Hello World, or slightly better than Hello World. Before I can start my first dynamic web page." And there was way more configuration and choice than there was convention and opinionated things.

We've definitely seen more opinionated frameworks and tools coming out over the last few years in the JavaScript space, and JavaScript developers adopting those things. And I think that that makes you feel like the whole process is less complex, because just way less decisions to make, like you said, Nick.

**Nick Nisi:** Another interesting thing that I saw on the backend satisfaction survey was the decline of Gatsby. It dropped five places in a year. It's almost like it got hit by a meteor, which also dropped five places.

**Jerod Santo:** \[laughs\] Well-played...

**Kevin Ball:** Those are two falling stars at this point... And it's hard to tell, because a lot of these items that are being put in here in 2020 - it's just got a lot more data; there's a much broader dataset being put there... But I think there was a lot of disillusionment with Gatsby in this last year. There was a lot of people refuting the performance claims and saying essentially that they were gaming the benchmarks.

**Jerod Santo:** Yeah, I guess the thing that ties those two particular frameworks together is that they're both open source, but venture-backed... Are they venture-backed? Or at least business-backed; I know that's true. I'm not sure if Meteor was venture-backed or not. But when we mix those things together - business concerns, open source concerns - it goes back to the open core problem of what goes in the open source and what is a commercial feature... Which every open core style company has to decide over and over again.

Gatsby is not typical open core, but it's like open build... Or I don't know how you call it. Anyways, the commercial side and the open source side definitely have that give and take... So I'm not saying that's the reason why these things are falling out of favor, I'm just saying it's interesting that both of those frameworks have that in common.

**Kevin Ball:** Yeah. Though the counterpoint is Next.js is primarily backed by Vercel, and they are also a for-profit business... Though they, I think, sell more general-purpose hosting, so it's not just about their framework, where Gatsby - I think their business stuff was all just about the framework.

**Jerod Santo:** Yeah, it's like, Vercel has enough of a dividing line between Next.js and their hosting services; that may be somewhat that conflict of interesting, which is effectively what we're talking about. It doesn't mean you're not doing it right, but that conflict is there and you have to navigate that. Maybe their conflict is not quite as tightly tied, because Gatsby is Gatsby, so to speak.

I'm not sure what the details behind Meteor's business model was, because I was never in that community... But yeah, a lot of these things do have corporate backing, whether they're tied to the product or not. It's just that it seems like when you're tied directly to the product, it's more difficult to navigate that relationship for people.

**Kevin Ball:** \[48:10\] Yeah. And in Gatsby's case, I think, you ran into a very specific conflict of interest, where the product was about speeding up the build, and so if they did a good job at speeding up the build in the open source project, the project became more obsolete. So you not only have decisions to navigate, but you have direct conflict between what's better for the open source project and what's better for the business.

**Jerod Santo:** Mm-hm. But Svelte on the other hand...

**Kevin Ball:** Svelte was the rising star here, in terms of coming out of nowhere in 2019, and being the top-ranked frontend framework for 2020. Just slightly beating out React, which had kind of been on and off holding that top stop for a while. Vue stepped in the top spot for one year in 2018... And really, they're all kind of bunched towards the top. But yeah, Svelte is kicking butt and taking names.

**Jerod Santo:** Yeah. It's worth noting that this is based on overall satisfaction, interest, usage and awareness, and that the percent differences are like 1% or 2% here or there... So it's not like 40% more people chose Svelte over React. We're talking literally in this case it's 1% difference on the satisfaction chart. It's 89% for Svelte, and 88% for React. But yeah, definitely the new kid on the block last year, and top of the block this year.

**Kevin Ball:** And one of the other interesting things there is the vast majority of those folks are not saying they've tried it, they liked it and they wanna use it again. They're instead saying "I've heard about it and I'm interested."

**Nick Nisi:** I know why it overtook in 2020. There's a blog post that they have, from July 17th, called "Svelte loves TypeScript", where they \[unintelligible 00:49:59.19\]

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Stop it! \[laughs\] Don't do that to us. Oh, that reminds me about a good blog post we should write... "JS Party loves TypeScript." \[laughs\] Is that all I've gotta do to get number one?

**Nick Nisi:** Apparently...

**Kevin Ball:** The other really interesting thing looking at this overall rankings chart is the extent to which both Angular and Ember have crashed and burned over the last few years. Ember was never one of the super-top frameworks, but Angular - I mean, look at them. They've gone from 2017, 66% satisfaction/interest/usage or however that's getting broken out, down to 42%, second from the bottom.

**Nick Nisi:** This is where the bias of this survey kind of shows, though... Because I still feel like - just from my own anecdotal experience - Angular is king in the enterprise.

**Jerod Santo:** So if you guys are looking at the rankings chart and you're on the first tab, you're looking at satisfaction, you have to click over to Interest and Usage. So when you click over to Usage, it changes things quite a bit.

**Kevin Ball:** Oh, I see how that is.

**Jerod Santo:** So Angular \[unintelligible 00:51:08.26\] 56% usage. What Svelte is topping is the satisfaction and the interest. It's definitely not topping the usage, because it's still pretty new. So you've gotta click through. Angular is still greatly used, but the satisfaction is down.

**Nick Nisi:** There we go.

**Kevin Ball:** Yeah, that makes sense. So Angular is number two in usage, but second-to-last place in satisfaction.

**Jerod Santo:** Yeah.

**Nick Nisi:** I totally buy that.

**Jerod Santo:** Well, some of it is like - you're forced to use a thing at your job. That's a real thing. It's like, "Well, we're using Angular, so you're gonna use Angular." Whether or not it's on merit or not, we just have bad feelings when it's like "My boss made me do this." And the more and more enterprise you are, the less and less agency you have as an individual developer to choose your tools. So anything that's big in the enterprise, I think is naturally gonna struggle in a satisfaction survey. That's just my opinion.

**Nick Nisi:** \[52:01\] Except TypeScript.

**Jerod Santo:** That's just your opinion... \[laughter\] Actually, no, it's not, because it did really well. Darn it.

**Kevin Ball:** That is an interesting point, because if I look at these graphs side by side, the satisfaction and the usage, Angular's satisfaction numbers plummet when their usage numbers skyrocket. So a lot of folks are suddenly having to use this thing, and ain't liking it.

**Jerod Santo:** So one cool thing as we're going a bit meta about the charting - one cool thing they've done this year is they've integrated some qualitative data as well, which is like random shout-outs from different developers... Which I think is really cool. Whenever you're just staring at charts and data and numbers, you can get kind of that blank stare, and sometimes misery things; but as you scroll some of these, they'll have different people giving their qualitative picks...

For instance, Cassidy Williams on the Opinions section - her pick was Ben Hong. So she links out to Ben Hong and gives them a shout-out and says why he's awesome stuff for the community. So I think that was a nice touch this year, adding those little things... Because it breaks up the data and it also allows individual voices to be heard, versus just like "Here's what everybody said."

**Nick Nisi:** And when you've actually filled out the survey, I thought it was kind of cool that they showed you how you ranked compared to everyone else who's previously taken it. So if you -- it said "Oh, you know, 3% of what our typical survey user does", in my case, and in some cases.

**Jerod Santo:** Oh, that's neat. They tell you at the very end, or they tell you right after you answer?

**Nick Nisi:** At the very end, I believe.

**Jerod Santo:** Okay. Because I'd use that to change my answers... Like, "Hm, what's this one...?" That would be bad.

**Kevin Ball:** That would be bad. Cool. Well, the same question we asked on CSS - based on this, anything you are particularly looking to check out this year? And Nick, TypeScript is not a valid answer for you, because I know you've already checked this out.

**Nick Nisi:** \[laughs\] Yeah, I'll go first and say that I really wanna try out Svelte. I've seen not just this, but blog posts about it, and overall in just random Discords and Slacks that I'm in, it does seem like it's a satisfactory library that people generally like to use... And I wanna know why. So I need to play around with it.

**Jerod Santo:** I gave Svelte a try back in 2019; I did a talk at All Things Open about it, just like an intro talk, and so that allowed me an opportunity to dive into it and to build a little thing, like a little one-page app with Svelte, that I used at the conference... And it was lots of fun; I really liked it. I just haven't revisited it yet. So looking at this and just thinking in general, a technology that I am gonna give a shot this year - I've never used Next.js myself. I like the idea of a hybrid, mostly JAMStack, but also with some backend possibilities, and pre-rendering a bunch of stuff, but then allowing for updates... I think it looks like it's a very flexible tool, that is up my alley, so I'm gonna give Next.js a try. Or at least I want to. What about you, Kball?

**Kevin Ball:** Yeah, so I have tried Svelte, and I have played with Next a little bit, though nothing serious... Both phenomenal pieces of work, so definitely check those out and enjoy them. The one that I'm actually looking at, that I'd heard show up a little bit on my radar before, but that I haven't tried out, and it showed up at the top of the satisfaction list for the testing category is the new Testing library that I think it was Kent C. Dodds putting it together. I think he put it together as a part of writing a course... But I've heard a few things trickling through, and it looks like the people who are trying it are loving it. So that's on my radar for this year - trying out the Testing library.

**Nick Nisi:** I have tested that.

**Jerod Santo:** What's it called?

**Nick Nisi:** Testing library.

**Kevin Ball:** I believe it's called Testing library.

**Jerod Santo:** No, seriously, what's it called? \[laughter\]

**Nick Nisi:** I have tried it, and it's pretty nice. I like it a lot.

**Jerod Santo:** So you've tried it, Nick... Is it different, or new? I'm most familiar with Mocha; what's different about it? Why would I be more satisfied, or why would I give it a shot?

**Nick Nisi:** \[56:13\] So I'm probably gonna get this totally wrong, but it seems like it's a tool written to help you write tests in the way that I think Kent C. Dodds prescribes, which is writing a lot of tests that are most integration-style tests. And I've only used it in the context of React, so it gives me this render method that I can call, and I can render any component that I want... And then I have the screen object that I import, and from that screen, it's basically like my computer screen. So I can do queries to find things... It just makes it really easy to traverse the DOM, get at what I want, and then I use a Jest -- what are those libraries called? A Jest assertion library that adds in a whole bunch of -- like, testing library-specific, or DOM-specific assertions. So I can just say "Expect this element is visible", and when I fire this event - and the testing library makes it very easy to fire events on buttons or whatever - then I can assert and expect that a button or a modal is now showing up.

So I'm testing from the perspective of the user, rather than just writing unit tests, which might not really represent the state of the application.

**Kevin Ball:** So it's closer to something like a Selenium, or that type of testing?

**Nick Nisi:** Yeah, but not doing anything with regards to the Selenium APIs - I forgot what those are called. You're not controlling a browser, you're still just like -- it has a virtual DOM and you're working within that virtual DOM to manipulate the DOM nodes with it. But not a real browser.

**Jerod Santo:** Which probably keeps it pretty fast. It might be worth getting Kent on the show. I haven't heard about this, and I definitely think it's interesting if you have a new testing library - first of all, we'll get our crack team of marketers on the case and we'll get Kent a better name for this thing... Unless it's like THE Testing library; then I guess he's already dominated the industry. \[laughter\]

**Kevin Ball:** But if you search for "testing library" right now, it's number one.

**Jerod Santo:** Alright, maybe he wins, and we don't need to rename it.

**Kevin Ball:** That might actually be pretty brilliant.

**Jerod Santo:** \[laughs\] But in 2020 or 2021 to come up with a new testing library and then have it be enjoyed by many people - it has to kind of have its own view of the world. So I think maybe it'd be a good show, bringing him on and talking about it. Would you use it alongside a unit testing library, or can it also just do unit testing as well?

**Nick Nisi:** Yeah, I'm using it within Jest. So I'm writing typical Jest tests. I have some unit tests interspersed within there as well, but then most of it is driven through Testing library and rendering my components that way.

**Jerod Santo:** Neat.

**Nick Nisi:** So it's more of a replacement for -- now I'm forgetting the name of that library that was really popular in React. Do you know what I'm talking about?

**Jerod Santo:** Let's see... There's Cypress, Playwright, Storybook, Puppeteer, Mocha... I'm just reading the different testing libraries on the web page. Ava?

**Nick Nisi:** No... I cannot believe I can't remember the name of it.

**Jerod Santo:** WebDriverIO? \[laughs\] Okay, I've exhausted the list...

**Nick Nisi:** And I'm googling for it and I can't find it, so it's not--

**Kevin Ball:** Maybe it was just in your head, Nick...

**Nick Nisi:** Enzyme. That's it.

**Jerod Santo:** Oh, okay.

**Nick Nisi:** It's more of a replacement for Enzyme.

**Kevin Ball:** Alrighty. Well, Kent, if you're listening, hit us up. We'd love to have you on the show to talk about Testing library.

**Jerod Santo:** Absolutely. One more thing I wanna try this year on build tools - ESBuild.

**Kevin Ball:** Oh, yeah.

**Jerod Santo:** Pure speed, baby. I love it. Let's just go as fast as we can. And this is the Go-based JavaScript build tool that's high on satisfaction and pretty new; I think it came out last year. Very low on usage. 6% usage, because it's new... And pretty low on awareness - 26%. But 94% satisfaction. So I definitely wanna give that a try, because the faster things build, the better, in my humble opinion.

**Kevin Ball:** \[01:00:08.05\] Yeah.

**Nick Nisi:** And this year, I think in April, the last version of Node that doesn't support - I think that's 10.x - the ESModule syntax will be end-of-lifed. So then we will have that in Node for sure, everywhere. So it'll be really interesting to see how that works, and kind of along the whole lines of the FredKSchott pipeline, seeing how that grows over the next couple of years.

**Jerod Santo:** Yeah. How up to date do folks run Node, just generally, Node developers - are they generally on the latest major release, or do people stay behind?

**Kevin Ball:** I suspect it depends on whether you're writing Node apps, or you're using Node as a way to render a web application?

**Jerod Santo:** I'm referring more to like apps.

**Kevin Ball:** I don't know.

**Jerod Santo:** Okay. I guess I'm asking a question--

**Nick Nisi:** I can tell you that we're \[unintelligible 01:00:57.19\]

**Jerod Santo:** "How would you know?" Well, we could take a survey...

**Kevin Ball:** Yeah, I'm not confident in our ability to get representative samples after all... In our surveys nobody liked Reggaeton; I mean...

**Jerod Santo:** \[laughs\] I mean, come on...! That actually might be representative. Nick, I ask you because you're a little more plugged into corporate America than I am; just generally, Node developers, in your experience - not a survey - do people generally wanna keep their Node apps running the latest Node, or do they lock one version and they're running Node from three years ago, or what?

**Nick Nisi:** I've seen a lot of both, but mostly I think that it tends towards trying to run the latest LTS version.

**Jerod Santo:** It makes sense. Well, definitely we should see a pick-up of things like ESBuild and Snowpack and whatnot after April. So I would expect the next survey to have -- because the interest is high and the satisfaction is high on these things, you'd expect that you should spike, so maybe we can check back next year on that front.

**Kevin Ball:** Sounds good. Well, with that I think we have sufficiently beaten these surveys to death. Thank you both, gentlemen, for exploring this, for not sticking too much in TypeScript land when we were talking about everything else, and for joining me in the bad puns.

**Nick Nisi:** It's popular, I can't help it.

**Kevin Ball:** Alright. With that, we're gonna sign off. Thank you, JS Party people. Enjoy your week. We'll catch you next week with another party. Remember, we record live on Thursdays, 10 AM. Jerod will tell you that again, but really - join us. It's what makes this a party - it's when we're all hanging out on Slack. Y'all are making fun of us at the same time as we're making fun of us. It's a good time.

Alright, take care. This is Kball, signing out!

**Outro:** \[01:02:40.22\]

**Jerod Santo:** I've gotta decide if I'm gonna leave that ripple part in or take it out... \[laughter\]

**Nick Nisi:** With all of the white space, the white noise...

**Jerod Santo:** Yeah... All of it just standing there... First of all, I fumbled it. Then it wasn't fun anyways. So it's like a double-whammy. It's hard to say prefers-reduced-motion off the top of your head.

\[prefers-reduced-motion. Yeah, that was really difficult\]
