**Jerod Santo:** Hello, friends, I am Jerod, and it is time once again for JS Party. Today I'm joined by my friend, Amal. What's up?

**Amal Hussein:** Hi, Jerod.

**Jerod Santo:** Happy to have you here with me. Are you a Docusaurus fan girl?

**Amal Hussein:** I am. I am all for helpful abstractions. don't make me do the same thing twice...

**Jerod Santo:** There you go.

**Amal Hussein:** Just abstract it. So I'm very excited about this show.

**Jerod Santo:** I am as well. I'm a big fan of documentation. It's like one of the hardest, most gritty, laborious parts of the job, but like so, so important. And so I appreciate anybody who works on tooling to help us all write better docs, and so we're happy to have Sébastien Lorber here with us today. What's up, Sébastien?

**Sébastien Lorber:** Hi. I'm fine. And you?

**Amal Hussein:** Very good. Very good. Happy to have you. We've been trying to have you on the show for a little while, but you've had less than stellar internet quality. Now you have the fast internet, and we are good to go. So we've been excited for this particular episode. For those who haven't heard of Docusaurus - this is right off the website - it's a static site generator. It builds a single-page app with fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out of the box documentation features, but can be used to create any kind of site, like a personal site, a product, a blog, marketing landing pages, etc. That was news to me. I thought it was just about docs, but now it's more than that.

We'd love to hear your relationship to the project and how you got involved. I should say that 2.0 is like the big release this summer, a complete rewrite, and so if you've looked at Docusaurus in the past, it's worth looking at again today. Sébastien, how did you get involved with the project?

**Sébastien Lorber:** Actually, it was quite funny, because it's from Twitter; I saw that tweet and I just answered, and I got the job. Docusaurus is from Facebook, which is now Meta, and I'm not an internal employee. I'm just a freelancer working for them on the project... So I think it was a quite unique opportunity to be paid to work on open source, which is something I always wanted to do, and it happens that I was a good candidate for the job, and two months after having answered that tweet, I was able to start working on the project.

**Jerod Santo:** What was the content of this magical tweet that got you this work? Help the rest of us land such jobs...

**Sébastien Lorber:** This was \[unintelligible 00:06:03.13\] from Facebook, that tweeted something "We are looking for a contractor to work on Docusaurus... I didn't even know what Docusaurus was at this time, but it took a look and it looked interesting. I didn't know the project, so before consolidating, I tried it a bit, to be able to understand what it was about.

Documentation is not the most sexy kind of work that everybody dreams of working. It was not something I planned to work on at that time, but I thought the project was still interesting, so I wanted to get involved, and now I think I like the idea of creating nice documentation websites, and I see the value of having good documentation tools to create a greater developer experience... So I think \[unintelligible 00:06:55.07\] to get the job is that I had like maybe six years of React experience at that time, and also, I sent a few little pull requests with good test coverage and everything, really nicely done, so that maybe the others will be able to see that I'm able to contribute to his project... So now I did the job before having the job, so that I can get it officially.

**Amal Hussein:** That is so cool. So we've been talking on the show a lot about working in the open... Lately we had the famous, legendary Dr. Gleb Bahmutov on the show again recently, talking about his open source work... And Swyx has been on the show a few times, and he's a proponent of this as well, this idea of working in the open and all the wonderful benefits that it gives you; not in terms of just being able to showcase your work and being able to take your work with you regardless of who's paying your paycheck, right?

**Sébastien Lorber:** Yeah.

**Amal Hussein:** \[00:07:55.12\] ...but also just the credibility that it lends you, right? So I love that. The story is such a web 2.0 job story... "I saw a tweet, learned about this, did some open source work, proved that I could do the job, and then got the job." I love this. I would love to hear that kind of story more often.

**Sébastien Lorber:** This is exactly my inspiration, because I read maybe the "Build in public" -- no, it's not "Build in public", it's "Learn in public."

**Amal Hussein:** "Working in the open" or "Working in the public"... Nadia's book?

**Sébastien Lorber:** No, it was from Shawn Wang, Swyx...

**Amal Hussein:** Oh, okay. Right, right, right.

**Sébastien Lorber:** He created a gist about the topic, and then wrote a book about it, and I read it, and it gave me a lot of good ideas. I was already a contributor to open source, because I contributed to things like a bit of Redux, Apollo, Redux Saga, and many other libraries in the React ecosystem, but I was not an official maintainer of any of these projects; it was more opportunistic. When I had a bug in one of my projects, I fixed it. But reading the book of Shawn Wang, and many other things that were popular at this time on the internet led me to start creating content. I created my first blog maybe three or four years ago, and then started to post daily on LinkedIn, my React insights... And this led me to creating a newsletter for web developers, which today has 10,000 developers, which is called this thisweekinreact.com. And all this is somehow related, because I started to create content because I wanted to -- I mean, there are a lot of people that are knowledgeable, but they keep that knowledge for themselves, and never share anything... And I think it's somehow a shame that the knowledge stays locked inside the brain of clever people. Some people don't like social networks and things like that, so they don't share, but...

**Amal Hussein:** Yeah... I mean, in all fairness, I think -- we talked about this one when Gleb was here, but I personally think that it's a privilege to work in the open. I think it's a privilege to share, and it's a privilege to be able to have that kind of unfiltered relationship with your work... And not everyone has the time to do that, or the ability, or even just for work. A lot of folks that work at Apple, even communicating on social media is challenging, right? So it's super-privileged. So can you tell us what your role is on the project? And I'm excited to kind of get into the roadmap, and all the other stuff...

**Sébastien Lorber:** My role is actually to lead the project, because we are not a big team. It's basically mostly me doing most of the work, and there are some Meta employees on which I can ask them for feedback and reviews and advice, and more administrative things... But the somehow, I'm self-driven, and try to make the best to lead the project to something that works and is successful in multiple aspects, from cloud to marketing... And I think it's better to ask for forgiveness instead of permission. So this is a bit what I do with Docusaurus. I try to do what I feel is the right thing to do, and allocate the time as I think it should be. But it's not always easy, because there are things for which I need to ask the permission, and I don't know exactly on which task exactly I need to ask the permission and which task I can decide on myself.

So basically, it's me executing the project and reviewing the progress of the community, and organizing the open source work around the project, but I'm backed by the Meta employees that review sometimes my work, and give me advice, and things like that.

**Jerod Santo:** \[00:11:57.05\] Yeah. So I'm gonna ask a question, and if you don't want to answer it, I'll ask for forgiveness, okay?

**Amal Hussein:** Touché!

**Jerod Santo:** So most people that work on Facebook/Meta open source projects are full-time engineers with them. That seems like an abnormal -- maybe it's not abnormal, but it's just what the perception is... Was this staying freelance, or just contracting with them - was this your idea? Was it their idea? Are they like a full-time job, is it part-time? How does it work?

**Sébastien Lorber:** So first, you have to know that I am a freelancer for maybe five years. At the time I took the job, it was only for three or four months, and I thought there will be no more budget \[unintelligible 00:12:35.06\] and I took the lead of the project. In the beginning there was not even enough budget for me working full-time on it, and now the thing is I have my newsletter; my React newsletter takes me like two days a week, and I work only three days a week can Docusaurus. And I don't want to leave behind my newsletter, so unfortunately, I can't increase the bandwidth I spend on Docusaurus.

This is something I've always been clear about it, is that I won't be able to work five days a week on the project from the beginning... And for now, it has been it has worked quite well, I think. But now that the project starts to become a bit bigger, it's hard to review all the issues and the pull requests and things like that. I know that there are some internal employees at Meta working also on Docusaurus, but more on abstractions on top for Meta documentation websites, and they will likely take a bit -- get more involved in the project in the future to work on various things.

**Amal Hussein:** Yeah, that's a really cool story, and thank you for sharing that... Thank you for asking, Jerod. Good job. Like, Jerod Santo. Watch out Chris Williams, or Chris Matthews, or whoever that guy is on the news that has the Hardball show... You know, he asks hard questions... So Sébastien, you're kind of in this interesting situation where you're managing the roadmap of an open source project that's owned by a corporation, while you yourself don't work for that corporation full-time, because like you stated, you don't want to commit full-time right now.

**Sébastien Lorber:** Yes.

**Amal Hussein:** So what's it like managing that? And more so, can you tell us a little bit about the story of this project? Was it always open source? Did Facebook open-source it at some point? And what was the problem that it was solving for Facebook as well? So I asked you three questions in one question... Go!

**Jerod Santo:** \[laughs\]

**Sébastien Lorber:** Yeah. I will try to answer, but I was not there in the beginning, so I can't have the full context \[unintelligible 00:14:43.00\] others at that time... But I think the project was created maybe six or seven years ago, something like that... It was internal at Facebook. What they did at that time is that they had a lot of documentation websites to create, and it was not very scalable to create one documentation site for each project layout, so they wanted a tool to be able to create some kind of abstraction that permits to easily deploy new documentation websites without having to reimplement something from scratch. So what they started was to copy-paste a Jekyll template, but the problem obviously --

**Amal Hussein:** Did you say Jekyll?

**Sébastien Lorber:** Yeah, a Jekyll template.

**Amal Hussein:** Jekyll, like old-school Jekyll...? Wow, okay.

**Sébastien Lorber:** Yeah, but it was maybe six or seven years ago, so I guess there were not a lot of alternatives at that time. I don't think -- maybe Gatsby existed already, but I'm not even sure, so...

**Amal Hussein:** Oh, no, I don't even think that Gatsby was in the picture at that scale yet, but I'm more just like, even six years ago I thought Jekyll was kind of coming out of fashion... But maybe I'm wrong. But anywho, don't let me distract.

**Jerod Santo:** Yeah, we could sidetrack on that.

**Sébastien Lorber:** Yeah... I don't know. I've never used Jekyll, so I can't tell you...

**Amal Hussein:** \[00:16:02.23\] Yeah, we're sidetracking. It's fine. So back to your story.

**Sébastien Lorber:** So they tried to create some kind of Jekyll boilerplate, but they copied -- for each new documentation website, but it was not very scalable either, because if they want to add a new user experience to the template, then you had to copy-paste the change to all the documentation websites... So it was easy to get started, but once you want to end the existing sites, you had to port the change manually to each site, so the maintenance was not very scalable this time. So what they did is they had the idea of a React static site generator that would actually just focus on the documentation, and they created Docusaurus version one maybe five or six years ago; it was open-sourced.

I don't know if it was created before being open-sourced, or the opposite. I think it started internally maybe six months before being open source. I don't know exactly when it started internally, but it was open source maybe five years ago, I think.

**Amal Hussein:** Okay.

**Sébastien Lorber:** So they created Docusaurus 1, and the idea is that you just write Markdown files on a Git repository, and then you can run a command and it builds a static site. And you can customize some things, like the color of the nav bar, or many other things. If you want to add a bit of branding to your documentation site, it was possible to change the color, and add your logo, and footer, and things like that... So they had some configuration options. And you'd just run the command and then it builds your website, and there was another command that you can run if you want to deploy to GitHub Pages for free; you could easily do that as well. So this was the idea of Docusaurus.

So now maybe you wonder why there is Docusaurus 2. It was released maybe four years after the version one. I don't know why it took so long...

**Amal Hussein:** Yeah, yeah.

**Jerod Santo:** Real quick, Sébastien, before you get started - I've been doing some sleuthing and I'll just follow up on Amal's sidetrack. So the initial Jekyll release - 2008. Gatsby's first release was 2017. So Jekyll definitely -- by the time 2012-2013 hit, Jekyll had some five years, and Gatsby was still not invented yet. Now, there was Hugo, there were other options that definitely could have played that game, but nonetheless, I just thought I'd follow up with that.

**Amal Hussein:** Yeah. Thank you. Thank you, fact checker Jerod Santo. Points for you.

**Jerod Santo:** I do like the history of these things. It's interesting...

**Amal Hussein:** It is.

**Jerod Santo:** ...because we've lived through it, but it's hard to like place "When was this? When did that happen? Was this before that?" And certainly, back then there were less choices than there are now.

**Sébastien Lorber:** Yeah. I think the idea of JAMstack and things like that, and Netlify, and CI that \[unintelligible 00:18:56.06\] command with the deploy previews, and things like that - it didn't exist at the time. I think maybe when they were working on Docusaurus static site generators were not very popular. I think many people thought it was some kind of toy that you use to create your own personal website, but not anything more significant than that. So it was a good time to build another static site generator that will focus on documentation, I think.

**Amal Hussein:** For sure. It's kind of wild to think all of these things only have existed for a short number of years. It's like, my God, I can't even imagine what life would be like without them. But before we get into the second segment, I just wanted to quickly -- if you want to finish your thoughts on this v1, v2, kind of this really long gap... It's like, my God, is this thing JavaScript, or something? You know how JavaScript had a party with ES5, and then didn't show up to the party for many decades later...? \[laughs\] I'm just joking, but there's a very long period of time where there was no innovation, right?

**Sébastien Lorber:** Yeah.

**Amal Hussein:** So then Docusaurus comes back with v2, and it's like, "Bam! I'm here!" So can you tell us about that?

**Sébastien Lorber:** \[00:20:06.28\] Yeah. Somehow there were some problems with version one - it was not very flexible. I think the main difference that you would notice is that it was not very flexible; you couldn't really add good branding to your documentation website. So all the documentation websites in v1 kind of looked like each others. It's just that you could change the logo, the footer, the nav bar items, and colors, but not much more than that. You could customize your CSS by providing custom CSS, but you know, it's not very flexible. If you can't change the markup behind, you are a bit limited.

And also, a big difference in a technical perspective is that it used React at that time, but only on the server side. So React was never loaded on the client side, and it was a multi-page application, not a single-page application, so... It's like you did React, but only server-side. You used React as --

**Amal Hussein:** I was like, "What's wrong with that?" \[laughs\] I'm just joking, I'm just joking...

**Jerod Santo:** We'll get into that. Don't open that can, don't open that can.

**Amal Hussein:** I'm just joking. I'm sorry. I was like, "Yeah, it sounds like the right way to manage static content." But okay, whatever. We won't go there.

**Sébastien Lorber:** This is an interesting thing to --

**Jerod Santo:** Hold it, Sébastien... We don't want to dive too deep, too fast.

**Amal Hussein:** Okay, cool.

**Jerod Santo:** Because that's definitely on the list of things to talk about.

**Sébastien Lorber:** Yeah. This is an interesting thing to discuss.

**Jerod Santo:** Yeah.

**Sébastien Lorber:** So yeah, it was only used on the server, and React was never loaded on the client. So when you click on a link, it wouldn't give a single-page application navigation feeling; it was like you reload the page, like in Jekyll... And the application that didn't have the Java modules, or I don't remember exactly what it was in Rails; I think there was a system to be able to navigate that seamlessly between multi-page applications.

**Jerod Santo:** Yeah, Turbolinks.

**Sébastien Lorber:** Turbolinks, right.

**Jerod Santo:** Alright. Well, we will pause right here, it's time to take a quick break... And this is the best break teaser of all times, because we opened up a can, partially; we just kind of like snapped the thing open, but we didn't get the rest of the can open... And we're gonna open it up right on the other side.

**Amal Hussein:** Yeah. It's like if you have cats - you're like opening up a tuna can or you're opening up a can and they smell it, you know...

**Jerod Santo:** Right.

**Amal Hussein:** So yeah, so just stay tuned, kids. We'll be right back.

**Jerod Santo:** Smell that... Spicy, hot takes...

**Break:** \[00:22:34.09\]

**Jerod Santo:** So 2.0 has arrived... It looks great. I mean, the website looks great, the list of things it does looks great... So congratulations, first of all, on shipping a big rewrite. I'm sure that was a lot of effort, and took a lot of time...

**Sébastien Lorber:** Thanks.

**Jerod Santo:** And we talked about it a bit at the start, but one of the big features now is it is a single-page app, and Amal and I both had the same guttural response of like "A content-focused documentation site seems like the perfect fit for a statically-generated multi-page HTML thing." Don't you lose SEO? Don't you lose certain aspects? Don't you want your stuff to be fast and crawlable?

**Amal Hussein:** Perf...

**Jerod Santo:** It seems like though, looking through the site, that you guys have thought of all these things... So let's finish opening that can and let's just talk about it. Then we'll go through some of the other things that 2.0 has to offer.

**Sébastien Lorber:** Yeah. I think I can maybe talk for half an hour just on that topic, but... \[laughter\] You will see a lot of things on Twitter, there are people that say "Yeah, why do you want to use React to create a blog?" And there are memes - with you create a very complex thing with WebPack and TypeScript, and then you have a blog with just one article... \[laughter\]

**Amal Hussein:** It's because we love JavaScript. We addicted to it. We love it all the time. We want it in our veins. Give me more.

**Jerod Santo:** More, more, more.

**Sébastien Lorber:** So I think my position is that -- it's a bit simple... I think the navigation of a single-page application is great. When you click on a link, you can navigate almost instantly to the next page. Why is that? Because of the fact that it is a single-page application, we can prefetch the resources that are needed for the related pages. For example, if you hover a link, you can prefetch the React components from the page that you are about to visit. And once you click on the link, then it's almost instant, because you just have to do the client-side rendering.

I think this gives a great experience, and also, there are new features in React that will even improve things. For example, this is not something that is really officially mentioned, but I believe that the future of React is that you can start to render the next page that you are about to visit even before you actually click the link, because React with the new features with concurrent React you can somehow when there are multiple \[unintelligible 00:26:15.28\] in parallel, and you are able to somehow eagerly render pages that the user may never visit... So somehow it's a bit \[unintelligible 00:26:26.19\] potentially, when you click on the button, you could actually render really instantly.

**Jerod Santo:** What's so funny, Amal?

**Sébastien Lorber:** \[laughs\]

**Amal Hussein:** \[laughs\]

**Jerod Santo:** What's so funny?

**Sébastien Lorber:** I don't know...

**Amal Hussein:** I'm just laughing because it's like -- I kept waiting for you to say "Because React knows what you're thinking." \[laughter\] Because all you need to do is add this, put this little sticky sticker on the side of your users' foreheads, and React will just read their minds and prefetch all the links that they're going to click...

**Sébastien Lorber:** You joke, but there is --

**Amal Hussein:** There's some machine learning driving, I'm sure, that prefetching strategy. I'm sure about it. It was a half-joke.

**Sébastien Lorber:** There is a project called Guess.js, and it uses Google Analytics data to predict the next page that you are most likely to visit... And there is a Gatsby plugin for that.

**Jerod Santo:** I would you say it's fascinating, but man, that's just a whole lot of engineering...

**Sébastien Lorber:** Yeah...

**Jerod Santo:** ...when you could just let them click on it, you know? \[laughter\]

**Amal Hussein:** Yeah, and avoid using JavaScript, and just have it be static, and whatever else. No, actually -- so first of all, this is cool. I think it's interesting. You're leveraging precaching, and prefetching, and whatever else, so this optimistic kind of architecture... Which is great, but for me, all of that needs to be -- like, you need to be a little conservative with that, because your users might be on a mobile device. Are they on Wi-Fi? Are they on 3G? Are you prefetching a bunch of things on their data plan? Are you making their machine do more than it needs to right now, because they're low on battery? So you want to be conservative with that. It's a superpower...

**Sébastien Lorber:** \[00:28:12.16\] Yeah, I agree. So first, I want to mention that we don't do the prefetching if there is low bandwidth, or data saving, or whatever. We can prevent that. And then it will only fetch the components once the user clicks. So it's possible. Somehow, I think, yeah, for sure, it's a trade-off, because you can -- for example, even pre-rendering, I said that you can start to render out the next component of the next page, but maybe the user has a very bad CPU and wants to preserve the battery, so why don't you want to --

**Amal Hussein:** Correct.

**Sébastien Lorber:** It's not just the bandwidth, it's also the CPU.

**Amal Hussein:** It also comes down to the environment, right? We need to start talking as a community more broadly around digital trash, and compute power. Like, there's still trees and resources being used too, so there's also an element of needing to be environmentally-conscious. But anyway, so back to v2. So you made this migration and this shift to use React, and it was an intentional decision to not use server-side rendering, and whatnot... Can you talk to us a little bit about what were the driving forces behind that decision?

**Sébastien Lorber:** I wasn't that at the time, so I can't really say... I think maybe the decision to create Docusaurus v2 was decided maybe two years before I joined the project, so I don't know exactly all the context... But it's a Meta product, so they wanted, of course, to use React, because this is their \[unintelligible 00:29:40.12\]

**Jerod Santo:** Unify...

**Sébastien Lorber:** And also, I think there are some things that multi-page applications can do. For example, if you have an intercom button at the bottom of your doc, or some kind of chat widget or whatever, you can navigate from one page to another, and it's really annoying if the widget resets itself. For example, \[unintelligible 00:29:58.08\]

**Amal Hussein:** Yes.

**Sébastien Lorber:** So there are a lot of great developer experience on content sites that you still want to benefit from preserving the state when navigating from one page to another.

**Jerod Santo:** Right.

**Sébastien Lorber:** So I think it has benefits to have a single-page application navigation, even on a content website. But maybe the things will change because the browser APIs are evolving. I know that there are some APIs, like transition APIs, and shared element transitions, and many things like that that permits to animate the transition from one page to another. I don't know exactly how it works for the state, but maybe there are some workarounds... But I think it would be still a bit complicated to replicate the user experience of a single-page application for multiple use cases, including the chat widget that we have on the documentation website, for example.

**Jerod Santo:** So to be clear, on the website, in the docs, it says that for every page there is an HTML page that is generated...

**Sébastien Lorber:** Yeah.

**Jerod Santo:** ...and is available. So that's how you handle, for instance, SEO. Like, they're all different pages, but then this SPA is almost like a progressive enhancement, if you will, for like a more interactive usage of the site. Is that fair to say? It's almost like thinking of it that way is like an upgrade, but you don't have to have it.

**Sébastien Lorber:** Yeah, it's exactly like Next.js or Gatsby. So you render the page on the server, we render it statically, because we don't have any server-side rendering, so it's build time that we render all the pages, like a classic static site generator, and then the browser loads the HTML page, and then we load React on top of that page to enhance it with the single-page application.

\[00:31:50.04\] But I agree that this may seem overkill for a documentation website, and we'll actually take care of making it -- I mean, I care a lot about progressive enhancement, so for me, the idea is that almost all these documentation sites should work without JavaScript enabled. So you should be able to navigate across the pages to be able to navigate inside the documentation sidebar that permits to navigate inside your content... And you should be able to do many things; maybe there are some things that don't work, like being able to search or to toggle the dark mode. Those are not too critical, and you can consume the content without JavaScript.

**Amal Hussein:** Yeah. I'm really glad you said that, because I was gonna bring up this point about Curl, especially for content sites... Especially for developer documentation sites. Like, if I'm in my terminal and I just want to look up something, one of the things I really like about NPM, like NPM, the entire API catalog, similar to native built-ins from Unix - you just go to the man pages, right? So manuals; man short for manual, not man, like person-man.

**Jerod Santo:** That's the patriarchy, that name, though... Isn't it?

**Amal Hussein:** Right, probably. Probably.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** You know, our problematic ancestors or whatever, right?

**Jerod Santo:** Yeah, we should have some woman pages out there, shouldn't we?

**Amal Hussein:** Yes... Dude, I'm all about that. Yes. Why not?

**Jerod Santo:** \[laughs\]

**Amal Hussein:** So the NPM CLI - all the documentation is available to you right there; you never have to go to a browser. Same thing for being able to curl a website's documentation would be nice too, because I can just curl, pipe into whatever, and just -- I can do all my searching and grepping very efficiently from my terminal window. And so for me, it's like, I'm glad to learn that the SPA is like a shim layer, and there is a core HTML that's still generated... That's awesome. However, I guess for me it still feels like overkill, but it's okay; we can agree to disagree. I'm not gonna love every single thing about this project.

**Sébastien Lorber:** Yeah. Actually, this is not something that exists today, but what I really like is that there is a mode of Docusaurus that works 100% without any JavaScript.

**Jerod Santo:** Yeah, that'd be awesome.

**Sébastien Lorber:** For example, I have a pull request where it basically doesn't \[unintelligible 00:34:05.09\] like it used to do in the past...

**Amal Hussein:** Nice...

**Sébastien Lorber:** But there's some things that do not work currently with this model, for example the search... And I asked the Algolia team if they could maybe create an endpoint, so that if someone searches while JS is disabled, it will just submit a regular form to a URL where they could get the search results, and things like that.

**Amal Hussein:** That is so cool.

**Sébastien Lorber:** So I really care about all this, so that the experience can be almost 100% complete with JS disabled. But this is complicated.

**Amal Hussein:** It is.

**Sébastien Lorber:** There are some things... Even accessibility is not always easy without JavaScript, so...

**Amal Hussein:** Totes...

**Jerod Santo:** Well, hopefully over time Docusaurus can be a great example of somebody who's done this style web app, but has taken into consideration all these factors, and provided accessible, fast HTML for who needs it, and fancy JS transitions for who wants those... So I think that's really cool. We are getting a bit bogged down, because I think we just have different opinions on architectures here, but there's tons of cool features in this thing. The write your docs in Markdown, it's all MDX-powered, so you can embed code things inside of it... Why don't you move us down the path of what else Docusaurus 2 has to offer?

**Sébastien Lorber:** So we felt the idea was to be feature-complete with version one, so what we did is to have the advanced features like versioning. So if you want to manage multiple versions of your documentation, you can just create a snapshot copy of the current documentation, and then have two versions in parallel in the same Git branch. This is a bit different from other projects that use one version per Git target branch for the documentation, and I think it's interesting to be able to do both on a case-by-case basis, which is possible with Docusaurus.

\[00:36:00.05\] So for example, if you have two or three versions of your project in parallel, in the same Git branch, the thing is that you can port the change in your project to three versions of the documentation in a single pull request... So this is really easier to manage. For example, if you implement a feature in version two, and then backport it to version one for a reason or another, you can just submit one doc's pull request, and then you will be able to update version one and version two documentation in a single pass. So this is easier for maintenance.

And although we have support for a theme to be able to translate your website, it was also possible with the version one. How it works is that you can just adopt a file system convention so that you can put the translation files, the Markdown translated files in a specific folder, and then they will somehow override the content in English, if it's your main language... And you can run your website with a \[unintelligible 00:37:05.19\] on which you want to build the site, so that you can deploy, for example, the French site, or the English site, depending on your CI, or whatever you want. So these are some features of Docusaurus 1, but still are in Docusaurus 2.

And Docusaurus 2 brings the ability to have a plugin system, so this enables the community to be able to create plugins, to enhance the Docusaurus site with their own logic... For example, within Markdown files in a proprietary format, or XML files, or whatever they want is possible. So it's much more flexible, and also, we have a lot of teaming capabilities this time, unlike Docusaurus version 1, when it was not possible to customize the HTML Markup and you could just provide some CSS. With Docusaurus 2 you are able to overwrite somehow any React component that renders the UI. So if you are not satisfied with the default, you can always -- we call this eject, \[unintelligible 00:38:12.16\] which will create a local copy of the time component that you want to customize.

And there is also wrap, which somehow creates a React wrapper component around an existing one. So for example, if you have a component and you want to add something else before or after this component in the UI, it's possible without a lot of maintenance, because you don't have to create a copy of the original component. Because if you create a copy, you have to maintain it all the time, and it might break, because if we do a change in Docusaurus, maybe it will be affected by changes, and your \[unintelligible 00:38:57.12\] will fail if you upgrade, for example. So the more you customize, the more it's likely to break, but we try really hard to make it easy to maintain over time, and we try to constantly improve on this side.

So the idea of Docusaurus 2 for me is to really great-looking documentation websites for your project, without too much pain, and at the same time, have enough flexibility to add very strong branding, but not in an unmaintainable way. So I think this is why you can see today that there are some really big companies using Docusaurus. Recently we've seen Snapchat, Figma also, Supabase, and many other large companies like that. You can't even know that they have a Docusaurus site, because some of them really customize them... So even me, if I go to the site, I have to open the dev tools to be sure that it was a Docusaurus site. And constantly, every time I go to a website, I ask myself "Is this Docusaurus? I don't know."

**Amal Hussein:** \[laughs\] "Am I in the matrix? Is this real? Is chicken really chicken? What does chicken taste like?" So do you leave a little Easter Egg for yourself?

**Jerod Santo:** And when is Figma gonna send me my options?

**Amal Hussein:** \[laughs\] Yeah, on that sale...

**Jerod Santo:** \[unintelligible 00:40:09.11\] for the effort, you know? The 20 bills... I'll take one. Just give me one bill.

**Amal Hussein:** \[00:40:13.21\] \[laughs\] Okay, so first of all - wow, a lot to unpack there. So let's just take it from the top. Document versioning - so that's huge. When I heard about that, I was like "Oh, my God." Like, wow... Talk about solving a really big pain point for maintainers. This is something where -- unfortunately, it's one of those things where it's felt by the maintainer community, not so much the broader developer community... But it is a real problem. Maintaining versions of your documentation within the same repo, getting the npm publish to show that correctly, yadda-yadda-yadda, for every major version patch and minor version of whatever that you're supporting - it's like a huge undertaking to keep those docks in sync as well. So first of all, amazing, amazing feature.

And then like the translations piece that you're talking about - the internationalization support. So that's not necessarily new, but it seems like you have some enhancements that you've made to the core functionality in v2 - that itself is huge, too. Being able to kind of -- I love this idea of "What are all the things that you need to do to maintain documentation sites?" You need to maintain it in different versions, you need to possibly get it translated, people are gonna want to search it, so you have the search functionality as well... So it's like all of these things that everybody's doing manually in different ways, and poorly, you all have kind of abstracted and created these clean interfaces for the community to leverage, especially the maintainer community, because these are the folks that are doing the heroes work already... So anything we can do to make their lives easier is just a huge win. I'm so glad to hear about all the success and adoption. Looking at the website today, I'm seeing Mark Erickson, our beloved Mark Erickson talking about this, \[unintelligible 00:42:01.07\] from the Angular community, Supabase, Kent C. Dodds, you name it. All these people. Debbie O'Brien... So lots of folks kind of singing praises for this project... So kudos. Pretty good stuff. So what's the feedback that you've been getting about v2, in terms of kind of missing functionality, or things that could be improved? Can we talk about the part of the retro that's like what to improve?

**Sébastien Lorber:** Yeah, so I don't have a lot of bandwidth to work on Docusaurus, and unfortunately it's hard for me, because there are more and more issues and pull requests, and the large projects... I have some goals for Docusaurus, but it's difficult to execute them, because I don't have enough time to do both the community work, and the marketing, and the implementation of the huge features... But I think some of the most requested ones are a Tailwind theme... So the idea for me for a Tailwind theme would be that it shares exactly the same user experience as the one we have currently; maybe some UI details will change a bit, but we don't want to duplicate all the code that we did for the accessibility, the layouts and things like that. It's a bit too complicated to have to duplicate things, and somehow manage a new copy of all the work that we already did on the UI. So the goal for me is progressively to share most of the code in a separate package, which is agnostic of this style... You know, some React components that are here, that don't contain any class name, somehow they just contain the logic, they encapsulate the logic of the theme, but not the UI.

**Amal Hussein:** Yeah, this is all fantastic stuff. So we're going to talk about the plugin architecture, which is kind of the secret sauce for how all these big companies like Figma, Supabase were able to kind of create these Docusaurus sites without even folks like Sébastien knowing, right? So we're gonna talk about that, we're gonna talk about the community, we're gonna talk about the marketing, we're gonna talk about the roadmap... I'm super-interested to go back to the governance thing that I brought up earlier... So all this and more. We'll be right back.

**Break:** \[00:44:17.22\] to \[00:49:09.19\]

**Jerod Santo:** So it sounds like one of the things that makes Docusaurus 2 so usable in all these different contexts is that plugin architecture. Sébastien, can you give us some examples? You mentioned theming, so that one, I guess, immediately resonates in my brain. But what are some other things that you can do with plugins? And then we'll get into the actual way that you do them.

**Sébastien Lorber:** So first you have to understand that the core features of Docusaurus have been implemented with plugins. So we have three core plugins, which is the docs plugin to create the documentation section of your site, we have the page plugin, which permits to create landing pages on your site, and we have the blog plugin, which permits to create the blog. The docs plugin is somehow like the page plugin, in that inside you have a navigation sidebar on the side which permits to navigate across a set of documentation, and there is the versioning, and things like that. So all the features that we have created for Docusaurus that are opinionated to help the content-centric focus was our three plugins, and that's all.

If you want to create, for example, tomorrow, a new plugin, for example you want to create a digital garden, or \[unintelligible 00:50:16.06\] Obsidian thing, or whatever, you could build that with Docusaurus. We don't provide this officially, but you could. If you want to integrate with a CMS, you could also create a plugin and try to wire it to your CMS. Some people do that already. You have the freedom to create whatever you want.

The idea of a plugin is that you can read the source some, for example the source folder for files that you want to read as a source for your content, but it can be a remote source, if you want; we don't provide much tool to integrate with a CMS, but it's possible technically. And then once you have read the source, you can translate the content that you read from the source if you want to internationalize it.

And then from the translated content, you are able to create the pages. You add the pages to the plugin, it will create pages as a permalink, so that you have the final URL of the page. It has a React component that is supposed to render it, and it has the props that the component is supposed to receive. So the plugin is responsible to create the routes that it manages, and then the theme is supposed to render those pages.

We provide also a theme which implements the UI for the three content plugins that we created - the docs, the blog and the page plugin - that you can also override with the...

**Amal Hussein:** With your own version?

**Sébastien Lorber:** ...you can create your own components to implement your own theme, that works with our plugins, if you want. Or you can just take the existing theme and say, "Yeah, I don't like the footer of this theme, but everything else is fine, so I will just override the footer and implement something."

**Amal Hussein:** \[00:52:07.03\] Oh, nice. So that's the modularity piece, where everything is replaceable... So if I understood you correctly, you're saying that we have a core architecture that supports kind of smart defaults, and there's a turnkey experience, but all aspects of the core defaults can be overwritten, like down to the footer level, right? Which is kind of cool, yeah.

**Sébastien Lorber:** Yeah. It's not just the footer, you can actually override any file in the theme. So this is powerful, but at the same time, this is dangerous, because it creates an implicit API surface for Docusaurus, where for example if you decide to override a component and then in the next version of Docusaurus we decide to rename it, then your app will lose the customizations, so you will have to figure out why we decided to rename this component. So now, what we started to do recently is that we mark the components as safe to override or dangerous, and then the maintainer of the site decide for himself if he really wants to do something dangerous or not. I mean, it's not very dangerous in the end. Maybe the word is not correct. But if you upgrade Docusaurus, you have a risk that something will break.

So if you, for example, override a component and then when we decide to rename it in the next version of Docusaurus, you will lose the customization. So this is the danger. So somehow, you can break your site if you upgrade it, and you use the next version of Docusaurus, and then you can't build, because it fails, because you have components that do not receive exactly the same props, and things like that.

We have a lot of components and you can override everything, but there are some components that are more suitable to be overridden than others... So you have to use this powerful tool carefully, to make sure that the upgrades are not too painful.

**Amal Hussein:** Yeah, I couldn't agree with you more. Any amount of monkey-patching and/or heavy usage of undocumented API's - it's like, you can do this; this isn't in the docs, but you can. It always comes with a risk. It's always like "There be dragons" warning, and you should never be surprised when your stuff breaks. That being said, I'd love to hear about examples... Can you share any highlights of some cool customizations that have been done in the wild for kind of high-traffic sites?

**Sébastien Lorber:** We have seen quite a very different set of customizations. I think the most common ones - adding a command system at the bottom of your blog, or your docs. If you look at the React Native website, there is for example a rating system. You can rate the page on which you are, to say if the documentation is full or not.

I have seen a lot of customer footers too, because companies like to have their branding in the footer, and something that is quite similar to their main website. There are some customizations, and the fonts, and the colors, and many other things... It's very diverse. I think there is no --

**Amal Hussein:** Yeah. Imagination is the only limit, right? ...to some degree.

**Sébastien Lorber:** Yeah.

**Amal Hussein:** That's cool.

**Sébastien Lorber:** We have a page on the website which is called the site showcase. And you can take a look, there are maybe 200 sites there, and you can sort them by -- for example, we have added tags to each site. For example, if a site has a grid design, we marked it with a design tag, so that you can easily get some inspiration from great open source websites, and eventually \[unintelligible 00:55:45.04\] if you want to replicate what they did. So this is quite useful for the community, to--

**Jerod Santo:** Yeah, that showcase is great. It's very fun to just scroll through, and very impressive, all of the sites that are being built with this. I assume that the plugins are distributed just via Npm, if you're going to actually get that out there to the public...? Or how do you -- if I wanted to share it outside of my org...

**Sébastien Lorber:** \[00:56:09.24\] So for Docusaurus core plugins - they are all in the monorepo with the Docusaurus code. So the free plugins that we maintain are officially distributed on Npm and the Docusaurus org. Community plugins are published on Npm, like any other Npm package. So you can just npm-install them and install them. And also, we have seen some quite interesting plugins, for example for local search... For example, we use Algolia by default, which is a solution that we maintain officially... Algolia DocSearch, which is free for open source technical documentations and things like that, I think. But if you can't choose Algolia for various reasons - if you don't want to pay, or if you don't want your data to be owned by Algolia, you can install a local search plugin. And I think there are a few options, based on the value. So local search libraries, like \[unintelligible 00:57:03.19\] and things like that. There are a lot of different client-side browser search libraries implementing tokenization, and things like that...

So I think we have three popular local search plugins today. And also, for example, many websites want to document an API, and today I think we have two open API plugins to document your API, if you want to add this to your documentation website. And there is also Redoc plugin with Docusaurus, which permits also to use Redoc, which permits to document an API inside Docusaurus.

**Amal Hussein:** Yeah, that's so cool. I mean, the open API spec integration is very exciting... And it's like a no-brainer, right? That's so cool.

**Sébastien Lorber:** Yeah. The thing is, you don't ever need actually to use a plugin to implement this, because -- for example there is a site that I really like, it's the \[unintelligible 00:58:00.16\] website. They have a doc with an interactive API client, and they implemented this only with MDX. So just with MDX they built a really great developer experience, where you can just add your API token and then play with the API.

**Amal Hussein:** Wow...

**Sébastien Lorber:** And it's just because we can embed React components inside your doc, you can build already very advanced things.

**Amal Hussein:** That's very cool. So can we talk about the community, and just how they can kind of participate in the roadmap? Is there like an open roadmap somewhere where people can upvote, or they can see what's coming next? What's the community story for Docusaurus? Do you have a Discord channel? What are all the things?

**Sébastien Lorber:** We have a very active Discord channel where you can easily find help. And when you ask a question, generally, I answer, but you should join Discord because most questions are easy questions, and there are a lot of helpful persons in Discord that will be able to answer... So it's better if I keep my time to implement difficult features instead of doing too much support, because it's somehow endless...

So the Discord is very active, and I think we don't have a very clear roadmap because -- I mean, open source, it's complicated. There is also a new important bug that gets opened and steals the priority of something less priority, but more important... So I try to implement the important features, like supporting the next version of React and things like that progressively, when I have time. And once there is enough progress, then I will release it.

\[00:59:50.03\] Sometimes we discuss a bit about what kind of new features we want soon in Docusaurus, and when we release a new version, we mark some goals that we have for future versions of Docusaurus... But we don't commit to releasing, for example, a list of features in the next version of Docusaurus. I think what we want to do is maybe release three or four times a major version per year, and try to have at least a few major features in each major version.

The idea is that we don't block a release because a feature is not implemented, because you know, sometimes you decide three months before that you want to have this feature, and then you find out that it's not possible at that time because there are some blockers...

**Amal Hussein:** Yeah. Also, things change. Honestly, if you're planning things out three months in advance, sometimes it's like "Is that thing even still relevant?" The urgency factor is so understated when it comes to roadmap planning... It's like, is it still important? Is it still urgent? Because if it's important and urgent, usually you're getting to it sooner, right? So it's a natural selection of the roadmap almost. And by the way, I just wanted to give you a shout-out, because we had Matteo Collina and his co-founder, Luca Maraschi. They were on the show last week, talking to us about Platformatic DB, which is like this incredible new open source project that's like sane APIs, and sane conventions; they built in all these good standards into this library for a kind of more turnkey experience, and they are using Docusaurus for their sites... So just for what it's worth, they gave you a shout-out on -- or they gave the project a shout-out on the show last week.

**Sébastien Lorber:** Thank you. I didn't know they were using it, so...

**Amal Hussein:** Now you know.

**Sébastien Lorber:** Nice to know.

**Jerod Santo:** Now you know.

**Amal Hussein:** One more thing to add to the showcase... Although Matteo was like "I don't have good CSS skills. I had to google how to add an element to the page." He's like, HTML, CSS -- he's like, he lives under the hood.

**Sébastien Lorber:** Yeah... So about the showcase - it's not exhaustive, actually. We decided to not add sites unless they submit it... And currently, we are trying to streamline the submit process. You just have to comment in an issue and you say, "I want to be added. Here's my site, here is the source code. I want this title, and this description", and that's all.

**Amal Hussein:** Cool.

**Sébastien Lorber:** But the thing is, there are a lot of websites that are not added yet. For example, we share a snapshot, and Figma and others would submit their site, but it didn't happen yet, so...

**Amal Hussein:** Yeah. So this is how I know that this project is backed by a real company that's funded, versus like a starving startup... Because the startup doesn't ask for permission. They're like, "Oh, Figma's using our thing - Figma is going on our website." \[laughs\] You're so modest... You're so modest. You're like, "Well, you know, we're just gonna wait for them to submit..."

**Jerod Santo:** Somebody on Forbes.com commented once on an article and put our name in there... "As seen on Forbes. As featured."

**Amal Hussein:** Yeah.

**Jerod Santo:** You know, that's how startups do it.

**Amal Hussein:** Pretty much. "We have offices in New York, Boston, Chicago... Everywhere, all the places the internet reaches." \[laughs\]

**Jerod Santo:** Yeah. "We're a global company."

**Amal Hussein:** "Global!" \[laughs\]

**Sébastien Lorber:** The good thing about Docusaurus is that people know that it's used, because you can recognize most of the time the layout everywhere you browse.

**Amal Hussein:** Yeah. Like a bootstrap.

**Sébastien Lorber:** Yeah.

**Amal Hussein:** Remember Twitter Bootstrap? You could always tell what's a Twitter Bootstrap website.

**Sébastien Lorber:** Yeah. The problem is that the best sites - you don't often recognize Docusaurus, because they customized it, so... For example, if you go to \[unintelligible 01:03:15.16\] I think you don't know it's Docusaurus. If you go to the Figma plugins website, honestly, I had to double-check. I wasn't sure, and I was really happy to know that...

**Jerod Santo:** So what's the actual litmus test? What do you do? How do you know for sure it's Docusaurus?

**Sébastien Lorber:** You open the HTML, and there is a meta static site generator, I think, at the top of the file, so you know for sure that it's Docusaurus if there is this meta tag.

**Jerod Santo:** Okay, what if they stripped that out? They don't want to give you any props.

**Sébastien Lorber:** Yeah, they could strip it out, but I don't think there is a lot of value...

**Jerod Santo:** What's the next test? You have to have a fallback test. It's a cascading thing.

**Amal Hussein:** Source code...

**Sébastien Lorber:** Yeah, I can recognize from the CSS and HTML if it's Docusaurus, but...

**Jerod Santo:** I'm sure you can. That's how you know you've entered the matrix, when you can just see it for yourself.

**Amal Hussein:** \[01:04:09.11\] You know what though - speaking of code fingerprints... Code fingerprints are very real, y'all.

**Jerod Santo:** For sure.

**Amal Hussein:** I guess, when looking at ransomware and all this other stuff, they're able to find the patterns, so they know, "Oh, this group is responsible for this ransomware attack..." Because apparently, your code don't lie, you know? So your code always speaks for you. It's like, "Oh, this person wrote this code." But yeah, this has been a really fun discussion, and it's a cool project. I haven't used it myself. I've just always seen my maintainer friends rave about this project, and I'm like "Oh my God, this is so cool. It's solving so many good problems."

**Sébastien Lorber:** Yeah, really, you can try it. If you want to try immediately, you just have to go to Docusaurus.new in your browser... It works in CodeSandbox and StackBlitz, so you can try in five minutes. I made the tutorial very, very fast.

**Amal Hussein:** Nice...!

**Sébastien Lorber:** Really, in five minutes you understand the value of the project, so... Try it now.

**Amal Hussein:** That's so cool. Yeah, try it now.

**Jerod Santo:** Well, I'll say that it's obvious to me why so many smart people are singing Docusaurus' praises - Docusaurus' is a hard thing to say - Sébastien , because you definitely sweated the details. It's clear to me, even though you may have a different take on SPAs than I do, that you've thought it out, and you've actually done the hard work of like figuring out answers... Some people just pick an SPA and throw it over the fence, and don't care about their users. You clearly do. One example of that - in your own website's documentation you even go so far as like helping people pick their deployment targets based on how much work they want to put in, and how much money they have, kind of a thing...

**Amal Hussein:** Nice...

**Jerod Santo:** You do a really, really good job of being a great documentation site for a documentation site generator, which probably you feel like you have to, because it's about docs, but it's also clear that you want to, because you've put so much work in. All the little details... Really, really good job. It's an impressive project.

**Sébastien Lorber:** Thank you.

**Jerod Santo:** Definitely... I haven't used it myself, but I'm already waiting to. It's cool.

**Amal Hussein:** Yeah. It is cool. And also, can we plug your newsletter? It sounds like a really important project. And I've heard about it. I might even be subscribed, for all I know, honestly... But I have definitely seen something like -- is it "This week in React"?

**Sébastien Lorber:** Yeah.

**Amal Hussein:** Okay, where can people go to learn about that?

**Jerod Santo:** Dot com.

**Amal Hussein:** Dot com? Okay.

**Sébastien Lorber:** Thisweekinreact.com.

**Jerod Santo:** There you go. Don't make it too hard on us.

**Sébastien Lorber:** Actually, I created the website with Docusaurus...

**Jerod Santo:** Oooh...!

**Amal Hussein:** Nice...

**Sébastien Lorber:** Because I thought it was a nice idea to use the tool that I'm working on with Facebook, because it has nice internationalization features, and my newsletters is localized... So I have maybe 300 subscribers in French, and 8,000 in English, and I have to send every week the email in two languages.

**Jerod Santo:** That's cool.

**Amal Hussein:** Oh, my God. Okay. But honestly though, this is where I feel -- I am so excited to hear that, because I keep telling teams, like, being inclusive and being diverse as a business - it pays. Businesses that cater to multiple markets, multiple audiences, different kinds of people... That's a wider reach, just right there. I mean, my gosh, how many thousands of subscribers do you have reading it in French? And French is one of the most widely spoken languages in the world. So super-cool. I'm just -- wow, thank you for doing that.

**Jerod Santo:** So do you write it twice?

**Sébastien Lorber:** I write it in French first, and then I translate it in English, and it takes maybe half an hour. I try to do the quick translation. I use \[unintelligible 01:07:32.28\] to help me a bit, to get faster... But I'm not a native English speaker, and I do mistakes, and I think the audience forgives me, because the content is great... So that's what matters.

**Amal Hussein:** Yeah.

**Sébastien Lorber:** The newsletter in French and English could deserve its own talk, but maybe not on this podcast...

**Jerod Santo:** Sure.

**Sébastien Lorber:** But there are a lot of interesting things being in two languages. I try to make it sustainable, and for example, just in terms of sponsoring, I am able to get different sponsors for the French audience and for the English audience.

**Amal Hussein:** Yes. Again, it literally pays. It's a good business to be inclusive and diverse, in your audience, and your targets, and as well as in terms of the people that are writing, and doing the work... So kudos again. It's been an absolute pleasure, Sébastien. Seriously.

**Sébastien Lorber:** Thank you.

**Jerod Santo:** Yeah, absolutely. So listener, all the links to all the things are in your show notes. We've got Docusaurus in there, we've got the showcase in there, we've got thisweekinreact.com in there... Just click through and click through to check out what Sébastien is up to. On behalf of Amal, I'm Jerod... Sébastien this has been a joy. Thanks so much for joining us.

**Sébastien Lorber:** Thank you.

**Jerod Santo:** Docusaurus version two, y'all. Check it out. It's making moves... That's our show. We'll talk to you again next week. Bye, everybody.

**Amal Hussein:** Bye!

**Sébastien Lorber:** Bye!
