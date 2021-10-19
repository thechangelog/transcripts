**Emma Wedekind:** Welcome to JS Party! Today we are talking all things design systems, and I'm super-pumped about that. Are you guys pumped?

**Kevin Ball:** Oh, yeah!

**Jerod Santo:** So pumped! I'm ready to learn, because you all sound like experts to these things, and I very much just wanna learn from the experts.

**Emma Wedekind:** Well, as soon as Kball had suggested this topic, I was like "Yes, that sounds like a lot of fun", and I'm super-thrilled to be talking about it today. So I guess we can just kick it off... Since Jerod is new to design systems, what are design systems? Kball, do you wanna start? Because I'm sure you have some knowledge about this as well.

**Kevin Ball:** Oh, my goodness. I probably have a weird perspective on design systems, because I started from an engineering place, and then I went through design systems and building frameworks for design systems at a design company, but coming from an engineering background... So I can give my perspective on what a design system is, but then I wanna hear yours, because you're actually coming at it from the design side of things.

A design system is, essentially, as I think about it, a formalization of how you build things in a visual and interactive manner. So it's how do you, as a company or as an organization, what are the parameters that you're using in common to create consistent visual and interactive experiences throughout your application?

You can consider it as a set of libraries for visuals. Instead of creating just a standard set of components from a code perspective, you're creating it from a visual perspective, from a graphic perspective, from a design and branding perspective. I also think of them as a way to create a shared language, a way to have -- as you're exploring the potentially infinite variety of how things could look on the page, having some sort of set of commonalities that you can use to discuss things. So when you say "Hey, I want a modal", you mean the same thing that everyone else in your company - whether it's engineering, design, product, marketing - when they say "modal", they think the same thing that you think when you say "modal." So that's how I think about a design system. Emma, how about you?

**Emma Wedekind:** \[03:46\] I think from a theory perspective that was pretty spot on. It is a shared language, and it kind of formalizes our brand identity or our design principles into a living, breathing, tangible set of assets... Because on the design side we've got this -- ideally, you'd have a library of visual design components, like Sketch or Adobe, that you can actually use... I like to think of it as like a rubber stamp, where you create it once, and then you can stamp it into your high-fidelity mockups that you give to your engineers, if that's the way that you work. And then on the engineering side - we've got a component library, which we'll get into soon.

But yeah, I think you're pretty spot on. I think there is no industry definition... This is such a new field, and I think that's maybe why it's such a hot topic at the moment, because it's catching on; a lot of big companies are using design systems. Google has Material Design, and IBM has Carbon, and Airbnb... And so people are now seeing the benefits.

It's a little surprising we don't have an industry standard definition, but if I had to define it, I would say it's everything, from the design language - things like your brand identity, the tone that you use when you write copy for things, accessibility guidelines; it's the sketch or the design assets that you use to build mockups, it's also your component library, as well as your style guides, all the documentation on the website. It's all those things, kind of compiled.

**Jerod Santo:** That seems like a lot of stuff. Is there a certain size team or company where it's like "Now it's useful"? Because for small teams -- is it still useful for small teams, or for all sizes...?

**Emma Wedekind:** I think an important thing to know is that you might not need a design system. I think this is a pretty valid point to make... Because you hear design systems and you're like "Oh, I need one." Well, where they shine is really to unify multiple products underneath one brand identity. So when you think about Google, we've got Gmail, we've got Google Flights, we have Google in and of itself... So you have all these different Google products, and they all look and feel the same; that's a great use case for a design system, because you're trying to unify things into a consistent set of components and reusable assets.

If you're building a small application, or you're creating something from scratch - okay, that's potentially not the best use case for it... Because if you're not gonna be reusing these components all the time -- if it's like a one-and-done landing page, for example, you definitely don't need a site. But these big companies that have multiple products under a brand identity, when you think about the scale of these companies, they're generally pretty large.

When I was at IBM, a lot of my friends were on the Carbon team, and so they had dedicated engineering teams working on this. A lot of different engineering teams working on it. And while there are different models of team structure... For example, you've got this -- I forget if it's called federated... Nathan Curtis has some really great content on team structure for a design system. You can check him out on Medium and I'll link him in the show notes... But there's a couple concepts - you could have a core team building the design system, and having it distributed to the engineering and design teams, or you could have this (I think it's) federated model, where people are consuming and contributing to the system. It kind of depends... It's like, are you a large company with a lot of offerings, or are you a small company?

**Kevin Ball:** I would posit that probably it starts smaller than you think it does... And here's my thinking on that. One, I see a lot of companies that start off extremely engineering-driven, not thinking about design except as a "How do I make this a little prettier?" Something that you sprinkle on after the fact, which is in my perspective a very harmful way to think about product... But one of the results that comes of this is even as a small company, you have typically at least two - and probably three or four - different surface areas where people interact with you. You have your product itself that you've built. You have your marketing website. You have your social media presences. That's three at least already, and I see a lot of companies where those experiences are very disjoint; they feel very different.

\[07:53\] The marketing page looks nothing like the application... And this makes sense, because we as developers or we as the people creating these - we compartmentalize really well. "Oh, the marketing page - that's owned by the marketing team", or the marketer, in a small company. The product team is separate from that, they're not thinking about that. But users don't interact with you in that way. This is all you, in their perspective. So when we have that level of disjoint experience, that's harmful.

I would actually think about design systems similar to how I think about generalizing code. You don't wanna over-generalize upfront, because you don't know enough. The first time you build something, you don't know well enough to create a fully general/reusable library. But if you find yourself doing some of those same patterns over and over again, and in the example I just listed, thinking about the marketing side, application, mobile app - you're gonna have some similar elements. You're gonna have headers, you're gonna have your logos, you're gonna have the way that you lay out your copy. Those things are coming up.

In code, I think the rule of three is good, where if I'm doing something, the first time I'll do it, the second time I'll redo it, the third time I'll redo it, but I'm starting to say "Okay, the next time I'm doing this, I'm taking those three examples...", or maybe at that point, when I get to three, I'm taking those three examples and making something a little more general.

**Emma Wedekind:** Yeah, I think that's great. I wanna say too, just because you might not need a fully-fledged design system does not mean you couldn't have a style guide, for example, where you just aggregate all of these styles into some sort of written documentation. Let's say you don't need a full component library, a full Sketch kit, but you wanna make sure you're still using the same color hex codes, or type scale, or spacing... These things you can aggregate into a style guide even if you don't have the need for a full design system.

Another thing I wanna just quickly -- like you talked about, this "Don't repeat yourself", and the rule of three, but don't start for scale, too. If you know you need some semblance of a design system, don't build every component ever created. Build the things that you know you need, and iterate. It doesn't have to be 100% perfect the first time; you don't need to give it all the props you can possibly think of. Add things as you need them.

**Kevin Ball:** I do wanna poke a little bit, or ask you a question, Emma... You brought up something as a part of a design system that I really like, but I haven't seen done very often. You mentioned that the approach to copy - what's the voice in your copy, and those things belong as a part of a design system. I think that's brilliant, because so often we create designs with Lorem Ipsum, and when we put real copy in there it doesn't work... But I'm curious how you've seen that play out, or how you've approached that.

**Emma Wedekind:** Yeah... First of all, I don't remember where the sentiment came from that was like "Don't design with fake copy", because it's like a chicken and egg - your design relies on your copy, and your copy relies on your layout. They are kind of meshed, so at that point you need to do both simultaneously. And when we talk about content, we forget content plays in accessibility... Because accessibility is partially about everyone, regardless of circumstance, can use your product and achieve the same results. The word choices that we use within our applications can have an impact on accessibility. If we're playing in the global ecosystem and people from all over the world are using our applications, we need to make sure we're using language that anyone can understand if we're not translating... Which we should be; internationalization, and all of that.

But getting back to tone, one company who does content amazingly well and they have a whole style guide section just for content and tone is MailChimp. They are really, really good about that... Because when you think about what are the goals of your system, it's what kinds of emotions do you want your users to have when using your product? And those tie into design principles of -- I don't know... Trust. If I'm building a banking application, I want my users to feel trust. That will play into the tone that you use, and all of your text. It will play into the color palette that you choose, because colors elicit emotion as well... And we kind of forget these things. We forget there's a lot of psychology behind these kinds of things. I wonder if maybe that's a good Brain Science episode - The Psychology of UI Design.

**Jerod Santo:** Absolutely.

**Kevin Ball:** \[12:08\] I love that, because I describe front-end development to back-end people as -- like, in the back-end you're hacking servers, and in the front-end you're hacking brains. You are trying to figure out "How do I create an experience that causes people's brains to behave in some certain way?" ...whether it's get excited, feel trust, whatever it is. What we're doing with UI and interaction is really all about psychology. It's trying to trigger people into different emotional states and actions.

**Emma Wedekind:** Yeah. That's why we build products.

**Jerod Santo:** For sure.

**Kevin Ball:** So when you talk about that voice then, how does that get represented in the design system? Is it a set of guidelines, is it sample copy? How do you think about that when it comes to actually baking it into the system?

**Emma Wedekind:** Yeah, let's see... I just pulled that MailChimp's content style guide, which - again, we'll link in the show notes... And what they state is that "One way we write empowering content is by being aware of our voice and tone." And they go on to differentiate, "The difference between voice and those is all about placing yourself in your customer's shoes." What does that mean? In terms of voice, we're plain-spoken, so using simplistic language. They say they're genuine because they try to see all the challenges their customers are going through, and use empathetic language.

Maybe they don't include a lot of humor. Maybe for them, one of their brand principles is they wanna make you look professional. Why are you using their platform? You're using it to send business emails, and as a result, they wanna make sure that you feel empowered to be professional.

Some tips for that that they list here - using active voice. They don't use passive voice. Don't use slang; write in plain English. Use positive language, rather than negative language. I highly recommend checking out their content. They actually go on to say "How do you write blog posts? How do you write for social media? How do you write emails?" Definitely check it out.

**Jerod Santo:** This is really cool. It seems like you have to have -- I mean, this seems to build on a foundation of understanding your brand really well and who you are... And in a lot of companies, especially ones that are startups or young, they don't really know that right away. "We're still trying to figure out who we are", and it could take a long time. You redefine who you are, so you revisit... But does this assume you have some sort of foundational brand that you've established, or can you develop these out maybe alongside your brand? What are your thoughts on that?

**Kevin Ball:** I think Emma raised a really good point about you don't have to have everything figured out. You can do this iteratively, you can do this progressively, and going through the process of creating a design system might force some of that important but hard to pin down thinking about "Who are we and how are we defining ourselves in the marketplace?"

**Emma Wedekind:** Yeah, and I think too when it comes to innovation and design and development there's no one solution fits all. I think it's not my place certainly to come with my assumptions and say "This is the best way to do it." And the same goes for learning. We see a lot of "You have to learn the foundations before you jump into the more advanced things", and it's like "Well, everyone learns differently, everyone creates differently", so I can't sit here and say "You should do iterative versus linear approach."

For me personally, in my professional experience, I tried to skip the foundational things. I tried skipping all this brand foundational work, and it ultimately came back to me having to go rework a lot of the things that I had missed. So for me personally, I think a linear approach to establishing your foundation before you get into creating components and all of that - that is what I do in my personal job... Because my approach is "I can't add walls to my house without a foundation."

**Jerod Santo:** Well, you could, but then it would just fall over. \[laughter\] I'm over here thinking "What would actually happen if I did that?"

**Emma Wedekind:** Huh.

**Jerod Santo:** Bad idea. Bad idea.

**Kevin Ball:** \[16:01\] So I'm gonna turn around and take the opposite side of that... Because while I love that approach, a lot of times what I've seen a design system addressing the pain points of are the funhouse mirror effect of "We have almost the same thing all over the place, but it's just slightly different and it bugs the heck out of you and creates 20 million unique CSS files as you do different versions of what should be the same thing..." And in that case, I think simply taking the set of patterns that you have and boiling them down and extracting them up into a system that is consistent creates a ton of value, even without a ton of brand foundational approach... Because you're working from a de facto situation.

As Jerod points out, I think very few small companies have the kind of clarity of vision for their brand that might be nice to have as a foundation here, but they do have a lot of work on the ground, work that is out there in the form of components that have been developed, patterns that have been used... And those patterns are already in existence, they're just not formalized and they're being reused in different ways. "This time we've got 15 pixels of padding, and this time we've got 17 because of this situation. And this time we've got this", and all these different things where we can take those and extract them and come up and say "Hey, let's be consistent. Let's start to create a system that allows us to reuse our work, rather than having to do something from scratch every time, and be custom every time, or copy and paste and vary a little bit."

I think there's a lot to be said for that kind of pragmatic, derived version of a design system, in practice. If you have your foundations set, if you can take that time - wonderful. But feeling like you need that in my mind shouldn't block you from looking at your design system.

**Emma Wedekind:** Yeah, and I think it kind of all depends on "Are you starting from scratch with a product, or are you building from legacy products?" Because that's really gonna impact, if you've got a foundation to fix at all, or if you're just starting out with a blank page.

**Break:** \[18:13\]

**Emma Wedekind:** Alright, so in the first segment we talked a little bit about design systems in general... But now I wanna go a little bit deeper, and I wanna talk about component libraries, because we are JS Party... So let's jump into the JS side of things. Have you all worked with a proper component library before? If so, what type of component library did you work with?

**Kevin Ball:** Wanna go first, Jerod? Because I have lots of different things, but I talked a lot last segment.

**Jerod Santo:** I have used off-the-shelf component libraries. I've never built a component library from scratch, or internally. So I've used other people's component libraries. They're awesome, because they're plug-and-play in lots of ways, and there's certain levels of like "How can I reach down into this component and get to do things that are abnormal?" Some places make that harder and easier. I don't have strong takes on specifics, but... No, Kball, go ahead, man; if you've got lots of experience, let's hear it.

**Kevin Ball:** Well, the interesting thing about a component library is that, similar to a design system, it's a name or word that has been used at many different levels.

**Jerod Santo:** Yeah.

**Kevin Ball:** \[20:01\] So you could describe, for example, a Bootstrap, or Zurb Foundation, which I used to work on, as component libraries. They're primarily at that point CSS frameworks, with recommendations for how you set up your HTML; they may have JavaScript that you plug into, but that's not the key piece of it, or it's there maybe as a reference implementation. For those ones, then people will go and then make framework-specific libraries. I'll use Bootstrap, because it's the most widely known; there's Bootstrap Angular, there's Bootstrap React, there's Bootstrap Vue... There's all these different ports, which these are then very generalizable/extensible component libraries, where the goal is giving you a foundation to build on. Then you step into stuff that's built specifically for a particular framework.

Bootstrap originally was not very customizable, so it was a design system or design language plus a component library. Then it became more flexible, similar to how Foundation was for a long time, where it's a component library, but not a design system, in the sense that you were then implementing your design system using it. It's a set of tools to build on top of.

Then you have things like Angular Material or React Material, or things like that, where it is both a component library, where it's a set of things, and it's a specific design system, design language, implemented as a library. So depending on what you're thinking about, it can go up and down the chain there... Depending on what you're looking for.

Sometimes you want something that gives you a basics of a design system out of the box, like Bootstrap used to give you - or still gives you, I guess - but is extensible, is something that you can then change as you develop more and more of your own design system and your own approach. Sometimes you want something that's going to give you exactly your design system, you want something that's custom-built for your company.

So yeah, how you think about a component library - this is something that open source front-end stuff has gone way into component libraries. There's lots of these available; there's increasingly framework-specific ones available. A lot of them are really bad... \[laughs\] But yeah.

**Jerod Santo:** Well, what makes one bad? We don't need to name names, but I mentioned that being able to customize the components - there's certain libraries/frameworks that provide more or less ease of use, in that regard. You don't want to use the component as is, you want to be able to customize, and sometimes that's easier, and sometimes it's harder, so I would argue that easy customization is one aspect of a good library...

**Kevin Ball:** Yes.

**Jerod Santo:** ...but you said there's some bad ones. What else.

**Kevin Ball:** Customization is a huge one. Another big area to look at is how decomposable it is. Are there massive amounts of dependencies among all your different pieces of your libraries, such that you need to import the entire thing to be able to use it? Or are the pieces relatively decomposable, so you can actually only use what you need?

There's questions around responsiveness - how well does this thing work? Responsiveness and accessibility, which in my mind increasingly go together, because they're both about "How does this work across all the different ways that somebody's interacting with my application or site?"

**Jerod Santo:** Yeah. Where responsiveness relates to resource-constrained scenarios. So it's like a subset of overall accessibility, which includes ARIA attributes... And as we talked about in our live show, using buttons for buttons... Those kinds of things, right?

**Kevin Ball:** \[23:46\] Yeah. So the more the component library makes it easy to do that, it should have accessibility baked in from the ground up. If you're using a component from a component library, for stuff that happens within that component it should just work, and then you should be able to plug into it in a reasonable way, to create for example larger-scale keyboard navigation, and things like that. You should be able to have it make sense for when you're navigating within the component, but then also have it go in and out of that component well.

**Emma Wedekind:** Hm. Yeah, and I think there's something to be said -- you had talked about the two different types of component libraries. My first run-in with any type of component library was definitely Bootstrap... But I would market those kinds of things - Bootstrap, Zurb Foundation, those kinds of thins - as UI frameworks almost, because they're a little bit lighter weight... But there are also drawbacks with using design systems.

Material design would be something of like a fully-fledged design system. I know Carbon is a fully-fledged design system, versus Bootstrap and Zurb Foundation are UI frameworks, essentially... So there are definitely benefits, like this baked-in accessibility, especially with custom elements. You cannot create a custom dropdown using the native HTML element. You actually have to use div and span, and other non-semantic elements, and add in the extra ARIA to make it function the same as a visually-impaired user would expect... And that's tedious. So that's maybe a good use case for a UI framework, but the problem is that let's say you only need a custom dropdown. Do you really wanna import all of Bootstrap just to use one element? That's the other thing.

**Kevin Ball:** Yeah, that's why I brought up being able to import things piece by piece. I've seen a lot of application developers who will pull components from many different places, because they're like "Oh, I want THIS dropdown from over here, and I want THIS from that over there, and this from that over there", and having those feel consistent and look consistent across the board is a terrible experience.

So I think having an opinion, picking one can be hard, especially for someone who is not visually oriented to realize that having things that look somewhat different and interact somewhat different can create a jarring experience...

**Jerod Santo:** Plus page weight, as well as dependency bloat are two real problems there, because you have a lot of redundant -- each of those will have their own implementation, and whatever workarounds or things they had to do to implement what they do... And you'll have six versions of this IE hack etc.

**Kevin Ball:** Yes.

**Emma Wedekind:** And just one other note too to make to this is that another kind of almost downside of using one of these component libraries or UI frameworks is that if you don't customize it, it's gonna look and feel like every other app using it. I remember back in the day if you were using Bootstrap, everyone knew you were using Bootstrap. It was pretty obvious, right?

**Jerod Santo:** Yeah.

**Emma Wedekind:** That was one negative. But one thing I wanna mention - and we'll link this in the show notes and I'll put it in our Slack - is Chris Coyier wrote an article about who are design systems for... And when you look at the IBM Carbons and the Material Designs - are they for people to download and use in their products/projects to make them look and feel like IBM products or Google products? You could... But Chris goes on to say design systems can be for the company, and maybe they just open source it so others can learn. I thought that was kind of interesting.

**Jerod Santo:** It is interesting when platforms provide design systems. iOS has a design system that you are supposed to use... And then they have reference implementations, which are basically apps on iOS. And then they break their own design system in their own apps, and then things fall apart... But Material Design was supposed to be that, at first; it was like "This is how Android is going to look, and you should do Android apps this way, and it goes beyond Android." Or am I misremembering the history on that?

**Emma Wedekind:** I don't remember... But that gets into the design argument of like "Do you want your mobile applications to have a native look and feel, or do you wanna go the custom branding route?" This is something internally we're discussing right now.

**Jerod Santo:** Yeah, that's a big question.

**Emma Wedekind:** It's a big question. If you go the fully custom-branded route - you can - it's expensive as heck, I'll tell you that.

**Jerod Santo:** Yeah, because you have to reimplement things that you'd otherwise get for free from the built-in SDK.

**Emma Wedekind:** \[28:06\] Right, but then also your users are used to their native operating system paradigm for notifications, for things like that... And when you go and change it, you've gotta be certain that they're gonna understand it.

**Jerod Santo:** My hot take on that is go native, and build a strong brand inside of that as much as possible, but do not reinvent the wheel and try to be super-custom... Because it's expensive, you have to reteach your user, and you end up doing things -- it's kind of like when you're just inventing your own wheels for all these little things inside your own website. You do it kind of like -- I wouldn't say halfway, but just not as well as the built-in, because they've dealt with a million different scenarios that you have... So it's more naive, perhaps. What are your thoughts on that, Kball?

**Kevin Ball:** I think it's an interesting question... And it comes back to a lot about what is differentiating your product.

**Jerod Santo:** Right.

**Kevin Ball:** In engineering companies there's a lot of folks who say "Okay, let's just grab (for example) Material", because those are places where the reference implementations are wonderful. They have incredibly powerful tools that you can get just out of the box. And if your differentiator is around some service in the back that you're adding, and the design and brand is not something that you care about much - wonderful.

If you are a more design-driven company, if your product is one where the look and feel is something that is a critical differentiator, if you're doing something in e-commerce, or social media, or something where you want people to get the sense of "This is a unique brand", going that route is going to shoot you in the foot, because you're gonna constantly be fighting that original design. Because you're getting not just a component library of tools, you're getting a design system.

I think this is actually the key point to think about as you're looking at these - are you bringing in a component library as tooling? Does that component library have a design system that is associated with it? Are you okay with using that design system and not your own? Because for example newer versions of Bootstrap and Foundation (as you point out), those are UI frameworks to build component libraries, because they are designed to let you create your own design system. Older versions of Bootstrap, Material, things like that - these are implementations of a design system as a component library. They have already made all those decisions for you, and that can be fine if your value-add has nothing to do with design. But if you are doing design, you are gonna be fighting those frameworks the entire way.

**Emma Wedekind:** Yeah, that's something we're dealing with right now. We don't have a fully-dedicated team to building our system, and there's this internal struggle of like "Well, do we build ours off of other systems?" And my gut says if we're gonna build a design system, we shouldn't use someone else's design system and override it; that's so much bloat, and it's kind of defeating the purpose. But also, it's an expensive task to build a system from scratch. Like, "Are you okay with using someone else's at the expense of potentially performance, and maybe visual style? Or are you gonna go the fully custom route and make that investment?"

**Jerod Santo:** Have you crunched numbers on that, or have estimates of the difference of a start-from-scratch investment versus a build off of X, Y or Z investment?

**Emma Wedekind:** No, but that would be very interesting to study.

**Jerod Santo:** It would be.

**Kevin Ball:** It's one of those tricky places that we're so bad at in software, of comparing upfront cost and maintenance cost.

**Emma Wedekind:** Yeah.

**Jerod Santo:** A hundred percent.

**Emma Wedekind:** Well, I think the problem with systems too is that people think it's a one and done project... And I forget who said -- design systems are not projects, they're products serving products. Because you don't create at once and throw it over the fence. This requires maintenance and support.

**Kevin Ball:** \[31:59\] Yeah, I think that would actually be a really interesting area to dig into is what does it look like to maintain a design system? We've talked about some of the aspects that might go into building it, thinking about your foundation, your brand, composing, existing components... But as you go forward, what happens when you have something that isn't well accounted for in the design system? How do you evolve that? How do you change it over time? What's the process that you can do there without ending up back in the place where you have 20 different versions of the same component?

**Emma Wedekind:** Yeah, I don't know, but that would definitely be interesting to study. The problem is it's such a new field we don't really have the numbers on it yet.

**Jerod Santo:** Right. It seems like there's two aspects to maintenance as well, perhaps. You have the maintenance of the existing aspects of the system, and then you have extensions to where the system has not -- maybe it's just incomplete. So there's areas in which "Yeah, we actually didn't address this aspect of our business. We thought we were done, but we aren't done." And that's kind of maintenance, but it's actually like extending it... And then you also have the maintenance of like "Well, we are changing our mind on this aspect of our brand, or our business, so we no longer want to talk that way. We want to talk this way." So now going back and updating the existing system is probably a different aspect to maintenance.

**Emma Wedekind:** Yeah, for sure.

**Kevin Ball:** Well, that can be a really valuable use case, of having a centralized design system and component library, because if you've done that and you wanna update an approach, you update it in one location and sprinkle it out. You update your symbols in Sketch, you update your components in your component library, you do an Npm package update, or however you're managing your component library, and you're done.

**Jerod Santo:** It sounds like a wonderfully utopian idea. I wonder if it ever actually works in practice. \[laughter\]

**Break:** \[33:53\]

**Emma Wedekind:** Alright, so we've talked foundation of design systems, we've talked component libraries... Well, how do we actually document all these things, right? Now we're gonna talk about style guides. Kball, do you have any idea what a style guide is, and can you explain it to us, please?

**Kevin Ball:** That's a great question, do I have any idea what a style guide is? \[laughs\]

**Jerod Santo:** Enter BS answer right now.

**Kevin Ball:** Let me BS something... Well, I was actually going to ask you where you draw the line between a design system and a style guide.

**Jerod Santo:** Hm... I only know style guides in light of like code styles mostly. One thing that we do - because we do a lot of communications here at Changelog - is we have a repo called One Voice, just a private repository where we put different things we say, and how we say them... So I think of that as kind of a style guide for us. But I'm curious to hear what style guide means in this context, so I'll just reiterate Kball and say "Emma, teach us the ways." How do you differentiate?

**Emma Wedekind:** Yeah, in my professional experience a style guide is the documentation site that houses all of the links to your visual design assets, links to your component library... It tells you how to actually use these components, so it'll typically have code snippets, or at least link to some Storybook documentation for your components. It will list out your content guidelines, or your accessibility guidelines. It literally houses all of the things in one website, essentially.

**Kevin Ball:** \[36:02\] So to you then a style guide is the encapsulation of the design system in a website, for people to cruise and utilize.

**Emma Wedekind:** Yes.

**Kevin Ball:** Okay, cool.

**Emma Wedekind:** That's my professional consensus, given what's out there today. Now, a style guide could also just be a PDF that houses the aggregation of your visual design assets... So there's no proper definition, but in general it tends to either just be like an aggregation of visual styles; in general though it is the website.

**Jerod Santo:** Who builds these things inside of an organization?

**Emma Wedekind:** That's a great question.

**Kevin Ball:** Good question.

**Emma Wedekind:** I think it's generally the teams building up the components, for the most part... This kind of gets into this field of UX engineering, which is like a new role. UX engineers are software developers, generally front-end, who also have some stake in the design field, who can do coded prototypes, who generally work on building component libraries and style guides. That's what I am; I'm a UX engineer, even though I am a classically-trained software engineer, I just prefer the visual design side of things... And I'm the one building our style guide, and I love it because - I'm gonna be honest right now, I don't like working on legacy systems.

**Kevin Ball:** What?!

**Jerod Santo:** Confessions, with Emma Wedekind...

**Emma Wedekind:** That's the nail in the coffin in my career at the moment... Yeah, don't quote me on this. It's always fun to spin up a quick static site, and use Gatsby for a quick style guide, or there are awesome tools out there... Invision is one company doing great work in the design systems field, and they have a tool called the DSM, or the design systems manager. So if you don't wanna actually build your own website from scratch - with a static site, for example - you can also just go use something with a UI, like the DSM, to go and aggregate all those things together.

**Kevin Ball:** So if you are creating a component library to implement your design system, you're probably going to want to be displaying and testing it in some way that is not just in context... And I feel like -- you know, we sort of skipped over this, but stuff like Storybook, where you're showing them in context. That to me is a natural way to do a style guide. I'm creating these components already. I need a place to display them and show how they work. Well, that's my style guide, right?

**Emma Wedekind:** Yeah, and this is where you get into -- again, there's no industry definition for any of these things. There's another tool called React Styleguidist, which I'm gonna post in our chat right now... This I believe is just for React, so it's kind of in contrast to Storybook; Storybook can handle a bunch of different frameworks and libraries, I believe. But they're really great tools, and they're so easy to use.

I think with Storybook you essentially just add a Storybook file and you kind of define the different states for your component, and it'll allow you to go and actually play around with them, and see what props are needed. So yeah, I just posted those in our chat... But those are two that I would definitely recommend.

**Kevin Ball:** And depending on where you're at -- so we tend to assume, because we have this greenfields bias, that everyone is working in React, or some other very component-oriented modern front-end framework. But a lot of times folks working in legacy products are not. You may still be generating your templates etc. with some sort of back-end service. Maybe you're still using PHP, who knows...? And style guides can be a great way to see "Okay, how is this supposed to come out? How is the markup actually rendered? What is the exact CSS that is needed here, so that you can apply it in that case?"

Maybe you're using a modern framework for your app, but then your marketing site is built with WordPress, so you've gotta figure out how you apply those things. Having some place that you can go in and see what the actual code is, so you're not measuring pixels with an on-screen ruler, or things like that... You're actually just able to take the code and see what it should look like. It can be super-helpful.

**Emma Wedekind:** \[39:51\] Yeah, for sure. If you go to IBM Carbon, for example -- so one of the goals is we don't wanna have redundant information; you kind of wanna have one place for everything, that's the source of truth... And the way that they do it is they have a vanilla JavaScript web component code snippet, but then if you click on the link to the React or the Angular components, it'll link you to the live Storybook site. So they're not duplicating the code in their style guide, they're just linking to external -- not external, but the Storybook documentation for it... Which I think is a good approach. Interesting.

We have a question in the chat from Tony, who says "Do you have any stories about collaborating with designers/developers to create a design system?" I don't know, have either of you ever worked with a designer? Well, you haven't built design systems, have you? You've just consumed them, or...

**Jerod Santo:** \[laughs\] That's me...

**Kevin Ball:** You look at Jerod there...

**Jerod Santo:** Yup. I'm a no on that one.

**Kevin Ball:** I used to work inside of that design company called Zurb, and we were both on the Zurb Foundation framework, which was essentially an encapsulation of -- they were building out component libraries and style guides for folks, and they said "Hey, we keep doing the same things over and over again. Let's build a tool kit for building component libraries style guides, for encapsulating design systems." And in that context, I was then both working with the design team there to create -- Zurb ran primarily as a design consultancy, so we would use Foundation as a base point to build out style guides and design systems for companies that they had designed with... And in that context, we did a lot of back and forth around how to build things, how to create things.

One interesting caveat there is all of the designers at Zurb learn HTML and CSS, and some small amount of JavaScript, so that they can build these systems in the medium... But yeah, I think one of the biggest lessons there was in terms of needing to created shared language... Because a lot of times developers will talk in one way, and designers will talk in one way, and we'll say the same things -- like, if we say a modal dialogue, we're saying the same things, and that can mean something very different for a designer and for a developer. So creating an implementation of a design system using a component or putting it in your style guide gives you something concrete to point at, so that you can talk to each other, rather than talk past each other using those words...

**Jerod Santo:** Yeah.

**Kevin Ball:** And it lets you kind of iterate and go back and forth in a single, shared place. When the designed talks about spacing and the developer tries to implement it, you don't come back and you say "Wait, did we even have that conversation?" You're working in the same place, in the same system, showing it in the same way, and then going out and using it for an actual product.

**Jerod Santo:** Yeah. I haven't built design systems in the sense that we're talking about them today, but I've definitely worked many times with designers and other developers on implementing a design... And I would say that in my experience I've had way more success in my career working with designers who are -- I don't know what you call them, web-aware? They don't have to be front-enders, but if they have -- it's like, web-native? I don't know how you call it, but if they have the web in mind as they are doing their designs. And I think I'm just keying off what you said there - I think it's because we had the shared language and shared understandings of like "This is the way that the web works", then I've had much more success.

I've worked with super-talented designers, who are great at design, but they're just not web-focused, or they pre-dated the web, so to speak, so they're thinking in print, they're thinking in these other ways, and then they're translating that into the web... And I've had a harder time taking those and implementing them.

**Emma Wedekind:** Hm... I feel like often as front-end developers we almost expect our designers to have some basic knowledge of web. I would also argue that as front-end developers are working so closely with web component libraries, we should have some base knowledge of design, and we should be learning from each other.

**Jerod Santo:** For sure.

**Emma Wedekind:** \[44:08\] It's a symbiotic relationship, or it should be, and I'm definitely a proponent of working in real-time. Doing design critiques in code. Because otherwise you fall into this waterfall approach to software development, which is not exactly the most productive... And if you have the luxury of sitting next to your designer, doing these design reviews in your codebase, so that they don't have to provide you red line designs with all the things you need to fix. How tedious is it for them to go in the sketch and add all this red line, like "Oh, the padding should be a multiple of four, versus a multiple of three..." Instead, you can just have a quick conversation and change it in the CSS file.

**Kevin Ball:** Developer tools are your friend, and most designers can learn to use dev tools very quickly... So if you can hop in, you have a first implementation, you put it in there, you open it up, you have dev tools there, and you let them tweak these different parameters to show you what they mean... Because I find a lot of developers, particularly if you're coming from a back-end background, or some other non-visual background - we literally won't see the same things that the designers see. Spacing is a great example, and Tony is highlighting that. The way that designers think in terms of spacing is something that most developers who are not visually-savvy just will not see... So they'll implement a design and --

**Jerod Santo:** They'll think it's perfect.

**Kevin Ball:** They'll think it's perfect, and they'll bring it back, and the designer will look at it and it looks nothing like their design, because there are parts of it that are just completely passing through without being perceived... And being able to sit in a place and work together and show that difference hands-on makes a huge difference in being able to actually communicate.

You example of marking things up in Sketch - that is a recipe for disaster, because you're gonna get people fighting back and forth, and it feels like "Wait, I just did this for you, and now you're telling me it's all wrong", and whatever, rather than working together collaboratively to create something new.

**Jerod Santo:** I just wanted to mention dev tools, and to point out our friend Adam Argyle, who's been on the show, trying to create design tools in the browser... And I think we're starting to have more of these come about, but we have great dev tools in the browser, and it would be awesome if we had great design tools in the browser... So that it's not like the designer has to come over here and learn the dev tools, even though that's just the reality. And like you said, it's not like it's hard to do, but if we had more design-focused tools in the browser - which he was trying to do with that VisBug project, and I think it's going okay - that would provide... Or maybe if the dev tools could expand and maybe rebrand a little bit, so they're like "Tools for everybody in the browser", we have a common place to come together and have those conversations. That's all I wanted to add.

**Emma Wedekind:** I don't know if tools in the browser -- so there are a couple different design tools that actually can spit out code, which is really nice. One is Abstract, and Abstract is essentially like GitHub Desktop; it's a source control for your design files... And it's cool, because you can actually grab all the CSS from these components right in the app.

Framer is another super-cool tool. It spits out React components... I was skeptical of it at first, and then I tried it, and I'm all about it now. It also makes it really easy to add interactions to these elements, like animations... So maybe if your designer is really keen on adding specific animations to your components, and maybe you're not the best at CSS animations, you can work on these collaborative tools that generate code, and then you can take and obviously validate that it's correct. So I don't know about browser tooling, but there's definitely design tools that can help facilitate that.

Another quick, interesting point I think Tony is trying to make - he's talking about... I think he's getting to "Do the component themselves in a component library have to worry about spacing in relation to other components, or should that be the responsibility of the components consuming them?"

\[48:10\] Here's an example - let's say I have a button, and it's in a container. Does the button have margin on the outside, or does the container set padding in relation to the button? This is a very interesting idea, because I was having this conversation with someone at work the other day, about how -- oh, you know who it was? Mark -- I'm gonna butcher his last name; he's from Australia. He just gave a talk at React Conf, I think...

**Kevin Ball:** Dalgleish, or something?

**Emma Wedekind:** Yes! He gave a talk about that, and it talks about spacing, and how your components should not include any additional spacing. It should be the layout components that actually worry about laying it out. I thought that was a very interesting concept.

**Kevin Ball:** This is something that I think is kind of fascinating how it's evolved... Because prior to CSS Grid, and especially prior to Flexbox, we had very primitive tools for dealing with layout. So one of the key value propositions that Bootstrap and Foundation - which we talked about earlier - brought to the table was the grid; how you could lay things out, how you could create consistent spacing throughout your page or your application.

That technology has been more or less subsumed into the browser at this point with CSS Grid, and we have tremendous potential and possibility available for us there.

This kind of brings an interesting area of friction to talk about, which is in the development world we like to think about components as being things that are completely isolated. Stuff where we've got all of this incredible componentization technology so that you can have something that has no impact on anything outside of it in the page. That doesn't work when it comes to design, because we do not perceive pages, applications etc. in isolation of their components, we perceive them holistically. And so there are a bunch of different characteristics of design and of our style systems that need to be thought about holistically, that go beyond the bounds of the component. Things like spacing, things like sizing, things like color schemes.

When you create everything in isolation and you drive everything to isolation, you end up with things like the AWS dashboard, which is just this nightmare... Trying to use Amazon's stuff, from a visual perspective, it's a nightmare. It's so hard to understand what's going on, because everything is completely independent of each other.

So when we talk about stuff like spacing, that's something that is very holistic; it's something that you need to think about in whatever context you're looking at, whether it's at the full page level, whether it's a subcomponent... Maybe you have components that have multiple versions of themselves, depending on spacing; you have maybe a compact version of something and an expanded version of something. It's very hard to isolate these things down into the component, which means that either the component needs to be very flexible in terms of \[unintelligible 00:51:18.12\] different modes, or it needs to not be responsible at all for that spacing, and let that be set at a global level.

**Emma Wedekind:** Absolutely. That almost reminds me of that content discussion we were having, of like "Can you design in isolation, without seeing things in context, or not?" I don't know, that's really interesting. I don't know. Now I'm just like in a philosophical mood. \[unintelligible 00:51:41.29\] \[laughter\] I think that's a good philosophical note to end on, I feel like...

**Jerod Santo:** Yes. Maybe one last mention that this particular episode is going to have a boatload of awesome links in the show notes...

**Emma Wedekind:** A boatload.

**Jerod Santo:** So check those out, because all things referenced will be right there.

**Emma Wedekind:** Absolutely. Well, I hope you all learned a little bit more about design systems, component libraries, style guides, and I hope it was informative. I don't know how outros work on this show... \[laughs\]

**Jerod Santo:** Just like that... However you want it to end.

**Emma Wedekind:** Oh. I wasn't prepared for this...

**Jerod Santo:** Usually, we sing a song...

**Kevin Ball:** Yeah, if you wanna sing a song for us...

**Jerod Santo:** Usually, we sing the latest pop charts in unison, and Kball dances to salsa while we sing. That's how it usually ends... No pressure.

**Kevin Ball:** \[laughs\]

**Emma Wedekind:** Oh... I only sing in harmony, I'm sorry. This is just not gonna work.

**Jerod Santo:** \[laughs\] Okay, maybe next week.

**Break:** \[52:44\]

**Emma Wedekind:** Oh, goodness...

**Jerod Santo:** In the middle of that segment a gigantic hawk came and sat on my basketball hoop.

**Emma Wedekind:** What?!

**Jerod Santo:** It's gone now, but... Did you see me lean back and take a picture? Let's see if you can see this here.

**Emma Wedekind:** Oh, my goodness...!

**Jerod Santo:** That's right outside my window, and I wanted to get -- yeah, it's not gonna focus very well... I wanted to get my nicer camera out...

**Kevin Ball:** Oh, wow...!

**Jerod Santo:** Yeah, I mean... Dude, look at that thing.

**Kevin Ball:** Put that in the Slack channel.

**Jerod Santo:** I'll put that in the Slack channel. I wanted to grab my nice camera from over there and grab a good picture of it, and Kball was talking, so I was like "Well, I could probably just squeeze over there and do this...", but I didn't want you guys to think we needed a pause, or something...

**Emma Wedekind:** While you're talking about your basketball hawk, I'm gonna go take a quick break, but I'll be right back.

**Jerod Santo:** Okay. Sebastian asked "Don't you run ads during break?" During the produced show. During the live show, one of the other advantages of listening live - first of all, you get behind the scenes basketball hawks. Secondly, you don't get actual ads... Unless you want them. "Bandwidth for Changelog is provided by Fastly. Learn more, at Fastly.com."

**Kevin Ball:** No, no, no...

**Jerod Santo:** "We move fast and fix things here at..." \[laughter\]

**Kevin Ball:** Jerod, stop.

**Jerod Santo:** And we're hosted on Linux Cloud Servers...

**Kevin Ball:** Man, I have heard that shtick so many times.
