**Jerod Santo:** Alright, we are here for a party. I am Jerod. I am joined by Kball and a special guest. What's up, Kball?

**Kevin Ball:** I'm here, I'm ready! I've got my coffee this week, so we're set.

**Jerod Santo:** Micro frontends... Is this a term, Kball, that you've come across before?

**Kevin Ball:** Oh, I even wrote a post about it at some point. The Good, the Bad and the Ugly. I'm in a Micro Frontend Slack channel that I don't participate in, but because of that post -- and I think, Michael, you were in there, too...

**Jerod Santo:** Oh, really?

**Kevin Ball:** Yeah. So I let them know we're doing this. So if there's any micro frontenders in the live audience, say hey in the -- well, you could say hey in the Micro Fronted Slack if you want, but we also have the Changelog Slack...

**Jerod Santo:** That's right. So we're joined today by the man who's writing the book - or has written the book but it's not quite completely out; it's in Manning Early Access, but will be out very soon - on micro frontends... Michael Geers. Michael, thanks for joining us.

**Michael Geers:** Hi! Thanks for the invitation.

**Jerod Santo:** We are happy to have you, we are happy to discuss new trends, new techniques, new terms, and try to dive into them, explore them from our perspective, and hopefully help the audience as well figure out what is up with micro frontends.

Kball has some exposure... I have enough exposure so far, as I've been perusing through your book, Micro Frontends in Action... But before we get into the concept, let's get into you, Michael, a little bit, and what brought you to this place to write the book. So just share real quickly your career experience, and when you were exposed to micro frontends, or when you invented the term... I'm not sure of the background, so help us out and help us all get on the same foundation.

**Michael Geers:** I didn't invent the term, so...

**Jerod Santo:** Okay.

**Michael Geers:** I'm Michael, I'm a software engineer from Germany, and there I work for a company called neuland - Büro für Informatik. We specialize in building e-commerce systems. This is where I came across this architecture for the first time, I guess. I think the first project we did was in 2014, where we were faced with an e-commerce project. It was more than 30-40 people, and we needed a way to scale this development in a good way, that was able to let us grow.

We implemented a technique which we called verticalization, so having multiple teams. We had five teams at this time, and each team built one piece of the e-commerce system from top to bottom, so everything... And then we integrated in the frontend layer. This was our first project.

\[00:03:59.06\] Then at this time the term micro frontends wasn't around yet. I think it came up two or three years later in one of ThoughtWorks' Technology Radar episodes.

**Jerod Santo:** So you were doing micro frontends, but there was no term for micro frontends.

**Michael Geers:** Yeah. People were calling it self-contained systems, or frontend integration for verticalized systems. Many companies were doing it; companies like Spotify talked about these kind of organizational structures for a long time, but they didn't use the term micro frontends for it, because it didn't exist.

**Jerod Santo:** So what year was that, when you started playing around with this architecture?

**Michael Geers:** In 2014 we did our first project, and then we did a couple of them the years after.

**Jerod Santo:** Okay. And it was successful for you, so you decided "We're gonna keep going down this path", and then I think 2017 was an important year surrounding that?

**Michael Geers:** Yeah, in 2017 I had a little bit of time off; I had a little bit more breathing room on one project, and then I sat down and had the feeling that I should write up the things we've learned doing these kinds of projects... And the term micro frontends just was used by the ThoughtWorks folks, so I created a website called microfrontends.org, where I describe how we are doing it and how I think this concept can play together with more than web technology like JavaScript frameworks, for example.

**Jerod Santo:** Gotcha. Alright, so enough background... Let's get into the concept and unpack it for folks. What's your executive summary? When someone says "What's a micro frontend?", what do you say to that?

**Michael Geers:** \[laughs\] "What's a micro frontend?" ...yeah, it's not really one specific thing. I'd like to talk about micro frontends style architecture; this is the thing I've just explained, so having multiple teams which are working end to end, having frontend developers and backend developers and data science guys all in one team, and multiple of these teams... And all of these teams deliver their piece of the frontend.

Let's pick a real example... We are doing e-commerce and we have one team who is dedicated to search, so giving the customer the best search experience. Or we have another team called Team Inspire, for example, whose job it is to inspire the customers. So they do promotional stuff - banners, teasers, email newsletters, but they also do recommendation strips other teams can embed into their pages... So we have different teams, working on different aspects, and we need a strategy to assemble all of this together in a way that feels good for the customer in the end.

**Jerod Santo:** Hm. So it's more about team structure than it is about code structure? ...or is it like the code structure follows the team structure?

**Michael Geers:** I would say both have to align to make it successful. But for us, it's very much about the team structure. You could implement micro frontends in a team with you and five of your friends, but I wouldn't recommend this architecture just from a technical motivation. So we always do it to scale projects and to be able to develop features faster, so having cross-functional teams be more effective than one frontend team, and microservices teams below that frontend team, for example.

**Kevin Ball:** That is actually very similar to the lessons I think have been learned in the microservices community, right? It's very similar, in that microservices are not usually solving a product or a technical problem, they're solving an organizational problem, where it's "How do we coordinate between all of these different pieces?" To be honest, that's a world where I have much more direct hands-on experience (the microservices world), as compared to micro frontends... But there's some interesting things that have been learned there, that I'm curious if we can apply or figure out what the equivalent is in micro frontends.

One example there is that in microservices the trade-off that you're making is you're trading off developer simplicity and organizational alignment. The downside or what you get instead is you get more operational complexity. You've got to deal with all of these different coordinated services, and deal with coordination problems and various other things... So what's the equivalent trade-off in the micro frontends world? What do you get, and what is it that you're giving up, or that you're having to take on when you adopt a micro frontend approach?

**Michael Geers:** \[00:08:25.23\] I think it's quite comparable. So micro frontend, as microservices, are also distributed systems. Developing a monolith is always easier than running a distributed system with multiple groups of teams that have to coordinate with each other.

The trade-offs are different in the aspect that we now have to think about assembling a frontend out of pieces, which we wouldn't have to do if we just implemented a monolithic frontend. And with this assembly of multiple pieces you also introduce redundancy... Which you do with microservices as well, but with microservices this redundancy is only server-side, so you can offset the redundancy by increasing your server capacity, for example... Which you can't do if you're putting more load on your customer's browser, for example. If you have five teams, and all five teams use different JavaScript frameworks, the browser (your customer) has to download them and has to cope with all of this code... So you have to do a lot more planning in the frontend than you have to do in the backend.

**Kevin Ball:** Yeah. So because everything is coming together in the browser, the level of decoupling you can get is potentially lower. You have to do more upfront planning to figure out what are your integration points, so that you don't overload the browser. Interesting.

Following on on that, one of the things that microservices did is it changed where default lines of where problems are. You had to be much more clear about your integration points and contracts of integration, and in that world it was the APIs. You had to be very clear about your API structure, consistency, backwards-compatibility, how are you doing that... What's the equivalent in the micro frontend world? Where are the new fault lines between these different micro frontends? Where are they having to connect, or what are the things that you have to suddenly get crystal clear on?

**Michael Geers:** I think APIs -- like with microservices, you also have APIs as contracts between the teams in the frontend. So if you are agreeing to integrate a recommendation micro frontend from another team, you have to know how to speak to this, how to initialize this fragment, for example, which has to be documented, and you have to deal with what happens if this fragment breaks. So do you provide a fallback, do you have a strategy for providing fallbacks in general...?

**Jerod Santo:** So you mentioned that if you are building a web app with five of your friends, you probably don't need this architecture... Where is the sweet spot of an organizational size or team size, or maybe teams count, where all of a sudden the payoffs become bigger than the drawbacks, and it becomes worthwhile to adopt this style of architecture?

**Michael Geers:** I don't think there's a perfect size for it, but I think when you're running a monolith or having one team and you're thinking about splitting this team - so you have multiple options, like doing a frontend/backend split, for example, this is a good point to at least look at the micro frontend's architecture as an alternative; so having two teams that are both cross-functional, and have full stack in each team.

The smallest project we did was with ten people, and we are running an e-commerce shop with two teams. One team handled everything before the checkout, and the other team did the checkout and the self-service area of the e-commerce system. So this worked also really well.

**Jerod Santo:** \[00:12:10.24\] So with the frontend/backend split, you tend to split more on technology or skillset... Whereas with a cross-functional split, you're splitting on the function? Give everybody some examples of a cross-functional team split, because I've never done that. E-commerce - one team is working on the cart, and the other person is working on auth? What's a cross-functional split look like on teams?

**Michael Geers:** Yes. As we focused on e-commerce, we have a pattern that is applicable for many of our e-commerce customers. The thing that works really well for us is looking at the customer and the way the customer takes throughout the e-commerce system. He starts at the homepage, and then looks around, doesn't know what he's wanting to buy, and comes in the decision phase having picked three products, for example, deciding which one would fit best. When he decided, he goes into the checkout flow and moves on. We draw our boundaries or out team cuts along these lines.

We have one team that handles everything after the customer made his decision. We try to do the cuts from the customer need point of view, so the jobs the customer needs to have done in order to finish the thing he's looking for.

Another example, if you're building a banking site, for example, you have an area where you can check your balances, do your money transfer... But you might also have an area where you can do your financing, or look at--

**Jerod Santo:** Like reports, or...

**Michael Geers:** ...housing loans, for example. And these areas are two different areas. In these companies, most of the time there are also different departments in a classical way of speaking. So doing the cut from the user's perspective and the mode the user is in when he enters your site works well for us.

**Kevin Ball:** Interesting. So there we're talking about lines that are split more or less along a route, or along a segment of the site, where it's like--

**Jerod Santo:** You'd almost look at your top-level nav and say "Here's this part of our team and here's that part", based on your navigation almost... Right?

**Michael Geers:** Yes. So classical pages are a really good indicator for "Here's a specific task the user wants to know", so getting informed about one specific product, for example. These are typically good boundaries... They are not perfect, because on one page there are things that are going on across teams; so on the product page we might also see recommendations, or see shipping information, which is not the primary goal of the team who does the product page, for example. So you have to do some Assembly, in some cases... But in general, pages are a good indicator.

**Break:** \[00:15:10.28\]

**Kevin Ball:** Michael, just before the break we were talking about the ways that we can divide these out... We can divide them out by route, or by specialty, sometimes you might have a nav team... Those different division points have different implications for how you might do integration, so can you talk us through some of the different types of integration that folks have come up with? I know there's some server-side solutions, there's client-side solutions... What is the spectrum of options that people are using here, and what are the trade-offs involved with them?

**Michael Geers:** Yeah. As you mentioned, the decision if you want to integrate server-side or client-side is essential, because all of the tools following this decision will be different... And I think we have two things we need to think about. The first thing is if we divide on page level, so we have two pages owned by one team, and two other pages owned by the other team; this is pretty straightforward - you create a link between these teams, the teams need to know the link to the other team, and then they can link to there, send a user over, and the user can go back.

For server-side this is really easy, and for client-side there are tools that implement essentially a meta-routing framework. You have one application shell, and inside of this application shell you have two single-page apps - single-page app from team one, and single-page app from team two... And if you're navigating inside of these single-page apps, everything is normal. If you want to cross boundaries, the meta-framework kicks in and clears one of the single-page app frameworks and introduces the framework from the other team. This is page transition, moving from one page to the other.

The second concept is what we often call fragments - or includable micro frontends, or whatever - if we are talking about composition. So having one page with UI fragments from different teams on the same page, that you need to assemble a markup, in essence. So you have one team that for example delivers the product page, and they want to implement the recommendation strip. There are different techniques for doing this.

We are using server-side includes, which is a really old concept, available in all of the lab servers. We are using NGINX for it... Which essentially is an HTML you put into your markup, and the NGINX web server will fetch the markup from the URL from the other team (who provides the recommendation strip), loads the markup, puts it into the page and then assembles the page and sends it over to the customer. So in the browser of the customer you don't notice anything from the Assembly.

This is the server-side aspect, and if you're going client-side for composition, the technique we are using is Web Components. Essentially, each fragment is a web component; the API of the web component is available and known to the team that includes it, and the other team which owns the fragment provides the implementation... So they can implement the recommendation strip in any way they want, load libraries, whatever, but the other team doesn't have to know about the internals of the web component, of the custom element, in essence.

So these are the techniques we are using... There are also more sophisticated libraries or platforms out there which will handle this stuff I talked about in a more easy-to-use way. A prominent player is the framework called single-spa, which is the meta-router framework, but also companies like Zalando, which in Europe is a big e-commerce player, that published a tool called Tailor, which does server-side integration. There's also a library called Podium, which is in a similar spirit...

**Kevin Ball:** \[00:20:05.20\] So when you do these different types of integrations, like for example in your Web Components-based integration, how does that impact deployment? For example, one of the micro frontends changes - can you do an isolated deploy, or you've got to package everything together and deploy everything? How does that work?

**Michael Geers:** Autonomy and being able to test a deploy your piece of the user interface of the system yourself as the team is one of the key factors... So it's very important for us, at least, that the teams are able to deploy, to update, to move on with their UI without having to coordinate with the other teams.

So the recommendation fragment, for example - if the team owning it wants to add new functionality, they can do it; they just have to publish the new JavaScript or the new markup generation pieces, and integration happens at runtime, so the other teams shouldn't notice any change from the integration perspective.

**Jerod Santo:** Nice. And then for some of the server-side coordination pieces - is that similar, like they can independently deploy?

**Michael Geers:** Yes. There's the SSI technique, or when you talk about CDNs Edge-Side Includes (ESI) is a comparable technique. It's something that runs just before the page is delivered to the customer. The pieces are assembled just before they go out, so you have the possibility to dynamically-assemble, if you want.

You can also implement caching when you say, "Okay, the navigation only changes every five minutes", for example. It's easy to do HTTP caching beneath this integration layer.

**Kevin Ball:** Interesting. So at this point we're back into the operational complexity...

**Michael Geers:** Yes.

**Kevin Ball:** So if I'm understanding you correctly, you have a set of independent web servers that are serving these independent micro frontends, and they might just be static files, or they might be PHP, or Ruby, or whatever servers that are doing this... And then you have a server that's running NGINX or something else that's doing this Edge Side Include, that's stitching everything together, and then that's what's talking out to the final client?

**Michael Geers:** Yes. The ESI or SSI is the step that gets done just before the complete markup gets sent to the customer, to run that in the browser.

**Kevin Ball:** Interesting. Okay. That's kind of a runtime stitching...

**Michael Geers:** Yes.

**Kevin Ball:** Are there build-time stitching? So if you were doing JAMstack-style precompilation, things like that... I know Chris brought up JAMstack in the chat, but -- like, if you're doing a Gatsby-style precompile, or a Svelte style precompile, are there solutions to do that at a micro frontend level? ...that does essentially server-side includes, but it then pre-builds everything and publishes out the final frontend to a CDN, or something.

**Michael Geers:** After you stitch together the user interface parts you can do it, but I think -- at least from the values we associate with this architecture, we wouldn't be able to do the independent deployment, I guess. So for us, we don't do integration at build time, we're only doing it at runtime, to give every team the opportunity to update and release their user interface as they feel, without having to push a button to "Please assemble everything together, in a new form." Which could be an internal feature for an assembly service, for example, an optimization you could do in there... But we are not doing this.

**Jerod Santo:** Yeah, I can see where it would make some sense to still be able to deploy autonomously, but basically request at a certain point in time everybody else's micro frontends that you need in order to deploy the entire application, and just go... Or whichever ones have changed. You could probably get as fancy as you want with that, but maybe it's solving a problem that -- it was a premature optimization. If you guys have been doing this for years in this style, and haven't run into that as a need, do you think that that's something other teams might desire, or is it just kind of a non-issue in practice?

**Michael Geers:** \[00:24:17.04\] We are running quite large platforms with this technique, but we are not at Amazon's scale, or whatever... So it's definitely possible that things we are using are not built for doing much larger integrations. You need more optimization in the integration points than we are currently practicing.

**Jerod Santo:** One thing that happened with microservices was a bit of a brush fire of adoption when people started to use them and talk about them, and advocate that style of architecture, because it seemed to solve a need that so many organizations had, or thought they had. It turns out you can make a big ball of mess with microservices, just like you can with a monolith. That being said, I'm curious if there are other teams in organizations maybe bigger or smaller than the teams you've been working with, that are adopting micro frontends, or at least testing the waters.

**Michael Geers:** Yeah, in the last years I could see a lot of adoption, or companies coming out and saying "Okay, we also did this for a long time, and we also didn't call it micro frontends, but this is how we do it." Companies like IKEA, or I mentioned Zalando before, which is a big German e-commerce player - they also did it way before the micro frontends term was a thing. Spotify - the spot streaming service; \[unintelligible 00:25:41.18\] also uses this technique and promotes it strongly... But also large players, like SAPs, or the enterprise companies; they published in October a tool to do micro frontends integration. More platformy style, not in the way we do it, but they also are playing around with this concept and integrating different applications into one, with similar techniques.

**Kevin Ball:** So when that zeitgeist happened, people then suddenly were all encountering whole new failure modes with microservices, that weren't really there for monoliths. One of the big failure modes is this sort of coordination problems, and if you get an error on one - how that cascades through the system, or especially if you have poorly-planned time-out regimes... You can have one timeout that triggers another timeout, that triggers another, and just kind of bring down all these systems with cascading problems. And that then sparked new systems, like Kubernetes, and it sparked different approaches.

What are some of the equivalent things going on in micro frontends? What are the new failure modes that we're seeing, and then what are the new approaches or systems that are addressing those failure modes?

**Michael Geers:** Interesting question. The most obvious one is one system is down and it's not able to produce its frontend, for example, and there you need the concept of providing a fallback, or at least thinking about cases where different parts of your page might not be present, or might be slow, or whatever... So having to wait for the slowest fragment when you're doing server-side integration is definitely something you didn't have to do before, because the data was fetched in one piece, rendered and then put out, and now you have multiple teams doing all of this at the same time. When one team is slow to plan, at least, so "How long do you wait until you do a final delivery, when you decide to leave this one out?" This is one failure mode.

One thing -- when we do this kind of projects, we use a concept which is called self-contained systems. The idea of having the system that a team owns be as self-contained as possible, holding its own data, not using a central data store together with the other teams... We do replication in the background, for example; so we have one team who owns the master product database, for example, and they also do the UI where the people from the company can enter new products... And all other teams also need product data; not the full database, but at least a name and an image, maybe a price... And we do replication between the systems to cope for the case of one team failing, so that we don't have this cascade of one thing goes down and the other teams have to deal with it, other than losing the UI parts, that will definitely be gone when one team goes out.

**Kevin Ball:** \[00:28:37.01\] So in this case, adopting micro frontends forced you into a microservices architecture as well.

**Michael Geers:** Definitely, yeah. Definitely a huge amount of power. Also, people coming from the microservices world, which say "Okay, this thing you are now calling 'micro frontends' are just microservices with UIs, which we were promoting for a long time, but nobody implemented them."

**Kevin Ball:** Oh, interesting. So are there situations in which you have micro frontends that aren't tied into microservices?

**Michael Geers:** I've also talked to people who are -- while we are using the term micro frontends, and we are practicing it, we also associate this system with a team, and we try to do the team as cross-functional as possible... But you could also use the composition techniques as \[unintelligible 00:29:30.25\] for example the application shell, just in the frontend; just doing a classical backend, for example, but having multiple frontend teams sitting on the same backend or GraphQL data or whatever, and just using the micro frontends techniques to assemble pages and distribute frontend work to multiple teams. This is also something that's quite possible, but it's not the thing we are doing.

**Kevin Ball:** Yeah. That's really interesting. One thing that it makes me wonder too now... So one of the techniques that I've seen coming out (I think Facebook is doing this, and some other folks) is around trying to prevent data cascades on the frontend by essentially bundling up -- having components own their own data queries, but then having a pre-processing layer that bundles up those queries and puts them at the top level... Relay coming out of Facebook did this, and I've seen a couple folks addressing alternative stuff that is not tied into Facebook's ownership... Is there anything like that in the micro frontend world, where you could essentially have each micro frontend -- if for example you were doing what you've just described, where they're all talking to a GraphQL database, so there's a unified back-end layer that they could all talk to, even if underneath that GraphQL you might have the data being sourced from different microservices or whatever...

Is there any way these micro frontends can, for example, publish their data needs such that the stitching layer, the aggregation layer - whether it's single-spa, or whether it's server-side integration, or something like that - can pull up those data needs and fetch them in a single query or a set of single queries?

**Michael Geers:** \[unintelligible 00:31:00.11\] I think you could build it, but I haven't read from someone who did it... So you're opting for other priorities. You are accepting a single backend, and I think you are in a tighter coupling mode, so your language - what is the product - has to be the same across all teams. The thing we are advocating comes more from the domain-driven design world, where you accept that the term product means something completely different when you talk to warehouse people, than when you talk to marketing people; they think about the product in completely different ways. So dividing the data model into multiple paths is the thing that might get into your way if you're trying to build large applications where people don't talk to each other this way.

**Break:** \[00:32:02.07\]

**Kevin Ball:** One thing you mentioned in that last bit, Michael, was around wanting to really allow teams to go their own way and make their own decisions, and all of that sort of thing. But that can also potentially lead to catastrophic performance implications. One of the early criticisms I saw of micro frontends is it now becomes really easy to have a frontend application that's loading all of React, and all of Vue, and maybe even all of Angular, because each team is making their own decisions... And suddenly, you've got megabytes of JavaScript going out to your browser.

So 1) how do you mitigate that, and 2) what are the practices you've started seeing? Are people actually doing that, or are people doing sort of a partway along the spectrum, where they at least agree on a shared framework? "Maybe we're all gonna use React" or "We're all gonna use Vue." What are you seeing in that sort of space?

**Michael Geers:** Yeah, so the feature of being able to use everything together - which is the thing we pull out to demonstrate the amount of autonomy that this architecture should provide - is the first thing that jumps to mind for many people to react to this in this "Oh my god, the site will be slow" way. And in practice, I haven't seen projects where you open one page and five frameworks are loading just to do one simple micro frontend, for example.

In the teams we did, creating a notion or an awareness for performance was always a critical first step. So getting your performance monitoring, talking about performance budgets, how large should a product page be, for example - these are all discussions we shouldn't have too late in the process to get everyone on the same page.

So measuring your performance is key number one, and then you can talk about reducing the framework load, or implementing restrictions, for example... And we had different setups, so we had one project where we said "Okay, everyone is on React. React is our default framework, and we will allow for teams to upgrade independently, but also upgrading should be done within three weeks", for example.

So you might have periods where an older version and a newer version of React are used in tandem, but in the most time everyone uses the same library, and it only has to be downloaded once, for example.

Another interesting trend we are starting to see is the appearance of smaller libraries. In the common project we are using Preact and Hyperapp, so two different frameworks. We have five teams, and some teams use Preact, some teams use Hyperapp, and these frameworks are so small that the effort on centralizing this framework - Hyperapp is one or two kilobytes in size, and everything else you build will be larger than Hyperapp... So this becomes a non-issue. You don't have to talk about the bloat, because you're not using something that introduces bloat.

I think trends for stuff like Svelte or Stencil, which would use the framework overhead completely - so the code grows linear to the amount of features you build - will play in this direction even further... So you minimize the overhead.

**Kevin Ball:** \[00:36:02.05\] Yeah, it does seem like runtimeless frameworks like Svelte are a perfect match for this...

**Michael Geers:** Yes!

**Kevin Ball:** ...because you can bundle down your components, make them into web components or what have you; you don't have to ship a big runtime, and it really does grow with your feature size. You don't have that fixed overhead of the runtime.

**Michael Geers:** And by the UI component structure you have code splitting built in, I guess, so you have different teams, and each team only delivers the stuff that's necessary for their page... So you don't have one team that builds a complete JavaScript bundle for all the pages, which you manually have to implement code splitting as well.

**Jerod Santo:** How do you deal with things like inter-micro-frontend communication? ...if that's a thing. I know you're supposed to be as decouples as possible, but in the real world things happen, and certain data or events or things -- is pub/sub the best practice, or how do you guys actually deal with when you do need to communicate between multiple micro frontends?

**Michael Geers:** Yeah, \[unintelligible 00:37:00.20\] so having an event system is definitely a way to go. What we like to do is piggyback on the native features of the browser, so using custom events, for example. If you're including the recommendation strip, for example, and an event occurs inside of this recommendation strip - maybe a customer marked the product as whatever, and the other page wants to know about it - the fragment was included and the micro frontend can just bubble up an event, which is published in the documentation of the micro frontend, and the team that uses it can react to it... Yeah, so I think having a parent/child situation, or doing just plain events on the window document, so publishing an event there and allowing everyone to read from there sounds like a good way to doing it.

**Kevin Ball:** So essentially an event bus style approach.

**Michael Geers:** Yes.

**Kevin Ball:** Interesting.

**Jerod Santo:** What about code sharing? We talked a little bit about code sharing, but when it comes to not necessarily libraries that are third-party dependencies, or component frameworks and whatnot - code sharing between teams, business logic share between teams, database/GraphQL things - is there a known best practice for how you go about not reimplementing 16 wheels if you have 16 micro frontends that build into an application?

**Michael Geers:** Yeah... So the way we do it -- distributing business logic, so logic specific for a use case as a component that multiple teams can use is something we try to avoid. We have some areas where we think "Okay, I've built a complex thing and I couldn't use a standard Npm library for it; I had to build it on my own, and I don't want other teams to build it" - then we allow publishing this library to other teams, but we encourage the people publishing it to run it as an internal open source project. So do proper versioning, do proper documentation and everything that comes with it to enable other people to (in the worst case) fork it and run with it, so that we don't introduce coupling by shipping a poorly-documented library that suddenly everyone relies on.

**Jerod Santo:** That sounds smart.

**Kevin Ball:** Yeah, I think it forces you -- I mean, in the same way that microservices forces you to be very strict about your API versioning and the contracts that you make there, this forces you into those same levels of awareness and concern for publishing UI components.

**Jerod Santo:** Yeah, it's kind of a "slow down to go faster" thing, because there's a certain rigidity and thoroughness (for a lack of a better term) required in order to do this correctly and well, that will slow you down in the small, but if it all works out to allow for these advantages of team autonomy and the other things you spoke about, Michael, ends up on a large being a win, even though in these small, little ways you're actually slowing down, for instance to really document the API of this thing.

**Kevin Ball:** \[00:39:56.28\] I think that's why it comes back to this being really an org structure thing, rather than a product thing, right? You implement these approaches when the communication challenges of your org structure get large enough that you reap a lot of benefits by shrinking things down into isolated teams... And then you have to formalize the communication structures across those teams, which include code, and places where you're sharing things... But because communication overheads rise exponentially with the number of people, that can be really valuable beyond some point. And it sounds like, Michael, you've seen that value even be ten people, where you can split across two teams and suddenly you see a pretty big increase...

**Michael Geers:** Yes, definitely. Coming to a decision with five people is much easier than coming to the same decision with ten people.

**Jerod Santo:** Any other words of wisdom or experience you've gained, maybe things that you've put in the book, that we haven't talked about today, that you would love to talk about?

**Michael Geers:** We talked about shared libraries, and the biggest shared library we have in all of our project is (you mentioned) UI components. So we have a design system, from the start, for all teams to use... And we're distributing it as a library, as an Npm package, for example, that other teams can use, pick the UI elements they need, and use it inside of their micro frontend's UI, to at least have the same building blocks for everyone to create a UI... Which does not say that every UI feels the same. There's also UX stuff, and talking, and distributing knowledge, creating a shared vision between teams that have to be done on an interpersonal way... But having a design system I think is crucial if you want to build something larger which should go out to your end customer.

**Kevin Ball:** Yeah, that's huge... Because one of my biggest concerns when folks started talking about micro frontends - and it's actually a concern also related to this whole global CSS vs. CSS-in-JS, and things like that - is if you're not careful, you create a set of disjointed experiences, and people interpret user experiences, they interpret your product, they interpret your company holistically. They don't think about it isolated in the same way developers do... So having something like a design system that can weave it all together and make sure that at least from a visual, and hopefully at least from parts of your experience level, it feels consistent, is huge.

**Michael Geers:** Yeah.

**Jerod Santo:** Well, the book is called "Micro Frontends in Action". As I mentioned at the top, it is part of Manning's Early Access program. Michael is putting the final touches on the books, so it'll be complete soon... If you are interested, thanks to our friends at Manning we do have three free copies of the eBook that we will be giving away. So just pop up in your show notes, leave a comment on the episode page in the discussion.

I will receive that comment, Kball will get it, Michael will get it... We can start a discussion in the comments about micro frontends. Share your thoughts. Do you think this is a good practice? What are your concerns? Questions you may have that we didn't answer on the show, you can ask Michael directly. Each person who comments will be entered to win a free copy of the eBook.

We also have a discount code off of Manning's entire catalog. This is incredibly generous of them. If you use the code "podjsparty20" you will receive 40% off your purchase. That's not 20% off... That 20 in the code means 2020. You will save 40%. So if you want the print book, or if you're trying to get something else from Manning, you can use that and save a bundle on their awesome books.

Michael, thanks so much for joining us today. This was a great conversation, and I think a great intro for me to micro frontends... And frontends in general -- what's a frontend? \[laughter\] And Kball, thanks for playing wing. You had a lot of great questions.

That's our show, and we will talk to you next time.
