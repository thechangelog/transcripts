**Divya Sasidharan:** Hello, JS Party listeners. Welcome to another new episode where we talk about JavaScript and argue about everything JavaScript. I'm your host, Divya, and with us today we have a wonderful panel. We have Kball...

**Kevin Ball:** Hello!

**Divya Sasidharan:** And Nick Nisi...

**Nick Nisi:** Ahoy, hoy... \[laughter\]

**Divya Sasidharan:** And also we have Jerod with us...

**Jerod Santo:** What's up!?

**Divya Sasidharan:** Cool! So for today we actually are doing a format that's really similar to what we did before. In a previous podcast episode we talked about all the things that browsers can do, from what is upcoming proposals, to proposals that have come through... And this week we are actually talking about things that browsers cannot do, despite users wanting it to do all these things. This question particularly comes in from Glenn R. Goodwin. Thank you so much for your question and your request for this particular episode.

We will particularly be talking about what is stagnating in browsers, what particular browser technology has remained the same, and has continued to be a pain point. For this, we will start by talking about APIs that were not developed, or that never saw the light of day...

**Nick Nisi:** I think we have to start with the Web Coffee API, just to tie into the last episode on this... \[laughter\] My favorite, apparently...

**Divya Sasidharan:** Yes, the Web Coffee API...

**Jerod Santo:** I think the big win from that episode is we did manage to rick-roll at least one person...

**Divya Sasidharan:** Did we really?

**Jerod Santo:** Yes. One person who admitted it freely online, so... That means there's probably ten silent rick-rollees that we haven't heard from...

**Kevin Ball:** At least.

**Jerod Santo:** ...but yeah, that was a big win for me personally.

**Divya Sasidharan:** Yeah, definitely. So maybe a good point to start is to talk about a very big one, an API or web spec that has never been developed... Personally, my annoyance is with input elements and form attributes, because that has been a pain point for a very long time, and input elements have not changed much in the last 20 or so years.

**Jerod Santo:** What's missing? What would you love to have there? I agree that there hasn't been much change, but what's the pain?

**Divya Sasidharan:** I think it's just the way of styling it. I think styling is still a pain. It's frustrating that a lot of the interactions are not native, so you have to add extra styling to make input elements easy to interact with, because a lot of the browser attributes make it really hard to work with. It adds extra burden for the developer to add all these extra things, because they have to style it, they have to add interaction using JavaScript if they wanna make things work in a certain way... Which I think is just a lot of work.

\[00:03:53.25\] I think one thing that we'll talk about in a bit that is related is the button attribute. It's related to forms, in a way, because every form has a button; even though you use input type button, it's still a button... But one of the things that I'm annoyed by with buttons specifically is that I always have to do button cursor pointer, which I'm just like -- everyone has to do that. It should be default by now. And there's so many others within input elements that are just really terrible to style. What do you all think?

**Kevin Ball:** I 100% agree. That has been a pain point forever. That said, there is some progress. There's the CSS appearance property that I just saw an article go by around (that I can link to) where so long as you can ditch IE11 - and let's be honest, if you're not supporting governments and massive enterprises, by now you should be able to ditch IE11 - then you can style more. You can style checkboxes, you can style radio buttons, you can style switches doing these things that used to take ridiculous hacks... Now you can do it with just CSS. I'll drop a link in the chat and in the show notes for that, but... There has been progress.

**Divya Sasidharan:** It adds a way for you to style it?

**Kevin Ball:** How exactly does it work? Now, that's a good question... It makes it--

**Divya Sasidharan:** It makes it easier to style? \[laughs\]

**Kevin Ball:** I think the biggest thing was it adds pseudo-elements before and after to inputs, which lets you do a lot of stuff that you used to hack around by having to do a container, and another element, and whatever...

**Divya Sasidharan:** Got it.

**Kevin Ball:** So if you wanna do a custom-styled checkbox, it used to be that what you'd have to do is hide the real checkbox and add elements that fake out those checkboxes. Well, that's still kind of what you have to do, but you don't have to actually add those elements anymore, because now they have pseudo-elements.

**Divya Sasidharan:** Actually, that's really interesting... I used to do that for checkboxes and radio buttons... Estelle Weyl gives a really good talk about -- I think it's titled "The Humble Radio Button", and I heard her talk very recently at a conference I was at. You need one single CSS property that will just remove all styles, which is -webkit-appearance: none; and that automatically removes default styles... Which I'm kind of embarrassed that I didn't know that, because I would always just position absolute it, and then display none, and then always move it really far away, and then restyle the entire thing. And if you use one single CSS property, it just automatically removes it, and then you can just add on top of it... Which is really cool. I mean, granted, a lot of the input properties should be easily styleable, without you having to do a lot of extra work, but... I wish more people knew about that.

**Jerod Santo:** Yeah. It still feels like a hack, but it is better.

**Divya Sasidharan:** Yeah, it definitely is. I think I remember at the most recent Chrome Dev Summit Google was mentioning that they've tackled input elements to make it better, but I don't know if it's -- I think it's still browser-specific. So if you're using Chrome, then they have styled input elements, so it's prettier, and it's almost material design-like... But again, it's super browser-specific, which I think doesn't fully address the problem, which is creating a standard around input elements across browsers. Because what got us here in the first place was just that every browser was fighting and never really came to consensus over what they agreed upon...

So every browser had specific implementations of what worked and what didn't work. Some browsers will put padding around certain input elements, while others won't, and you always have to identify those edge cases, which is really frustrating. So I don't actually know if Chrome fixing that is pushing standards forward...

**Jerod Santo:** \[00:07:48.01\] Even where they've moved on input elements, for example adding additional types, like type=number, and stuff like that, you have different implementations across browsers, like you were talking about... And then you also have it being like -- it's almost like the uncanny valley of a good input. You're like "Oh, cool, I could use number, but it has these seven limitations... So it doesn't work the way I want it to, and it's not that easy to customize."

Anytime that most developers are throwing out elements completely, wholesale, and just doing their own thing with select boxes, anytime you go beyond a very simple select, most people grab a widget that just completely replaces it, and is built with divs, or some sort of weird thing - that's a place where I think the browser vendors (or whoever; the powers that be, the W3C and whatnot) have let us down.

**Divya Sasidharan:** There's of course also the hope that if browser standards around that were better, then we don't have to always reach for JavaScript... Because technically, with a bit of HTML and CSS, you should be able to get pretty far. But because a lot of these input elements are really hard to style and work with, you end up having to reach for JavaScript. Or you need to know CSS super-well to get around a lot of these hacks, which I think ends up dividing the community, in a sense, with people who are like "You should know CSS so well that you can hack your way through input elements", and others who are like "Browser standards suck. We're just gonna rewrite an entire input element from scratch, without using the standards at all."

**Jerod Santo:** Exactly.

**Nick Nisi:** I have to admit, I had no idea that you could get this far with CSS without appearance stuff. That's really cool

**Divya Sasidharan:** Yeah. It's a neat trick, that I think more people should know about. I tweeted recently, being like "More people should know about it."

**Kevin Ball:** While we're talking about CSS, and CSS that we've been wanting for - in this case - eight or nine years, what about container queries?

**Divya Sasidharan:** That's true. What is the status of container queries at the moment?

**Nick Nisi:** Can you describe container queries?

**Kevin Ball:** Never gonna happen...

**Jerod Santo:** Never gonna happen... \[laughs\]

**Divya Sasidharan:** Yeah, maybe it's worth describing it, yes.

**Jerod Santo:** Never gonna let you down...

**Kevin Ball:** Okay, so I can give it back. Container queries are a perhaps more natural way of thinking about responsiveness. I've found a post about the origin story... The discussion actually started in, I believe, 2013. The idea is instead of having this idea of a media query, where we look at the size of the viewport to decide how we want to influence CSS and lay it out, perhaps we should actually look at the space allocated to an element or a container, and lay things out inside of it based on that... Which makes a ton of sense, because you shouldn't need to have global knowledge to be able to style a particular component you should only need to know how much space does that component have available to it, and lay it out in that way. So it makes a ton of sense.

I believe that it has a lot of technical challenges. There's all sorts of different things... Oh, no - looking at this article, actually, it started back in 2010; that's when they first started talking about it. So it's been ten years that people have been talking about this. It's never gotten anywhere. I think there are some proposals to do something that is sort of like this, but it's never gone anywhere... And it would completely change the way you could think about front-end development, and responsive design, and all of that, because suddenly you could design components that were themselves responsive, without having to have a global understanding of the page. So you could ship naturally-responsive sets of component libraries where you could plug them into whatever space you have available on your page, and count that they would render in a reasonable way.

**Divya Sasidharan:** \[00:11:48.06\] Yeah, that's fair. I think whenever you do responsive design or anything it's frustrating that you always have to seed to the parent, and the parent needs to tell how much width it has, and then every child element can then be like a percentage of that... Which is really frustrating, because then you always have to go up this stack to figure out who the parent is, and what the parent sizing is... And it can lead to really frustrating edge cases, especially when you're dealing with one specific component only that needs to do one particular type of style within a layout. So I agree.

I think there was rumblings of moving that forward with CSS nesting, but I'm not sure that went farther than -- because from what I'm seeing, there's a W3C proposal for CSS nesting, but that was closed, so... I don't know if that's gonna move forward. And Chris Coyier wrote an article similar to Zach's article about container queries (this was in 2019), about the fact that we still don't have them, which - yeah, very frustrating.

Alongside that, there are some other things that are not implemented in browsers. I think one of the things that is often talked about, especially in the JavaScript side of things, is Web Components. That comes up whenever we talk about frameworks, because frameworks are arguably a reimplementation of Web Components, or a specific implementation of Web Components. I think React got a lot of criticism for that... What do you all think in particular to that?

**Nick Nisi:** I like the idea of Web Components. Last time I looked at them though, the implementation just seems way more complicated and difficult than it needs to be, compared to something like React.

**Kevin Ball:** I think the biggest barrier is that folks have really come around to loving the declarative model of programming that most modern frameworks provide... And the implementation of Web Components is (at least the last time I looked) entirely imperative. So there's a mismatch. What I have seen is "compile to Web Components" type things, so that frameworks that offer this declarative programming model can then compile down to Web Components. And as we see growth in runtimeless or very light runtime frameworks like Svelte, I think that becomes more of a model, where Web Components can become essentially a compile target, where you are building whatever you want, in whatever programming model you want, and then you compile it down to a web component that can be shipped as a reusable thing.

I'd be curious actually to look at -- I don't know if it's possible to do Web Components with Web Assembly, but it might be really interesting to see if there is the opportunity to create frameworks in non-JavaScript languages that allow you to build reusable Web Components.

**Divya Sasidharan:** That would be really cool. I like the promise of Web Components in the shareability of things... Because when we talk about frameworks, what happens is that if you write a component in React, it's really hard to embed it in a separate framework like Vue without creating all this extra wrapper and spaghetti code around it, so that it works automatically. It's less work for you to just recreate that in that framework. So Web Components was super-nice as a concept, because it was this ability for you to create a component that you can easily share, and someone could just pull it down and it automatically works, in whatever framework or whatever project that they're using.

But I think there was a lot of disagreement as to how that would work... I think the implementation details or something like that, with regards to it. But the thing that is cool is that Web Components did introduce the shadow DOM, which has a lot more potential. And I think shadow DOM has been something that the community has picked up on. Web Components not so much. But certain aspects of Web Components are actually pretty useful.

**Kevin Ball:** \[00:16:01.09\] Do you wanna explain shadow DOM?

**Divya Sasidharan:** I'm so bad at explaining shadow DOM... Can someone else do it?

**Jerod Santo:** It's like the DOM, but there's a shadow...

**Nick Nisi:** It's like the DOM, but it's like a containerized version of it, that's not able to affect the outer page that it exists in... So you can style and run JavaScript and manipulate things as if they were global, but they're only global to that shadow. I don't know if you call an individual on a shadow, or whatever, but... Only to that component. So then you can have styles and JavaScript running that only affect that element and can't actually read outside of that, so they can't have any effect on the outer page.

**Divya Sasidharan:** Yeah. So it's sort of like a DOM within a DOM, so that you can do things globally without doing things globally, which I think is the upside. So you don't have issues with scoping in closures, which tends to happen when you're trying to do weird JavaScripty things that only affect one single part of your application. So that's a really neat aspect of it... Which you can use in browsers today, I believe.

**Jerod Santo:** One of the things that Glenn mentioned in his request for the episode is discussing some of the why's behind some of the stagnation, and things that haven't come to pass, or we don't think are going to come to pass, or very slowly coming to pass. I think with each particular feature or aspect of browsers and the web it's probably a different answer... But with Web Components one of y'all linked in a very interesting, scathing piece about the broken promise of Web Components...

**Divya Sasidharan:** Oh, yes...

**Jerod Santo:** ...which was written in 2017, so a bit outdated... But in this piece - we'll put that in the notes and I'll read just this one section from it, because I think it does indicate some of what can happen when you work inside this milieu of standards bodies, plus independent companies with browser implementations, so the web as it is and how it moves... And he asks himself, and then he answers, "What's the broken promise?" This is about Web Components; he says "It's obvious they're nowhere to be seen. That's the biggest problem." This was 2017. He says "The promise of feeding the process of progress is unfulfilled. By their sixth year they spawned a total of six standards. Two of them are already deprecated; only one major browser is committed to supporting them." And then he disses on Opera for a second; I'll skip that... Then he says "The other broken promise is the one \[unintelligible 00:18:32.28\] in the internets these days, interoperable custom components without vendor lock-ins." That's the one that got him to write about Polymer, but... I think there's something there.

Web Components is complex. It's difficult to get buy-in to an implementation, or to an architecture, or to strategy, when you are trying to do it for everybody. You have design by committee necessarily, which is why there were six standards, two have been deprecated... It just never has congealed into something. Some of the things when it comes to the stagnation is just the nature of the beast, I think, of what we have, and the way that the web does move forward. There's no dictator. And when a dictator starts to scooch themselves into place like a very popular browser that implements things on their own and says "Oh, this will be the standard", we give them the side-eye and we start to look for alternatives... So I'm curious what your thoughts are on that aspect, of at least the big movements, like Web Components. So this is not like the focus attribute, this is a big, big thing.

**Divya Sasidharan:** I think one of the things that made it really hard was just -- so Web Components has been pushed forward for a very long time. I don't even know when it started, but I feel like it's over ten years. And Polymer was created as a way of implementing the Web Components spec. There's a lot of intricacies to Polymer, so there's a lot of decisions that Google made in terms of how they think Web Components should be implemented.

\[00:20:09.00\] So when you're working with Polymer, it's very specific. And in a way, I think that is what might have moved people away from Web Components as a whole - just a disagreement on implementation details. And then when Polymer was created, it was a way of moving the spec forward, but Google was leading the charge on that, which meant that they were calling all the shots with regards to how the implementation was gonna be done, and how the syntax was gonna look like, and so on... Which I think might have been counter-intuitive in terms of pushing the spec forward.

The idea was to push it forward, but in making decisions, they did not push it forward... Because there was more disagreement, and people overall just didn't like how things were done. So you had that fragmentation that happened, which no one could decide how things were supposed to be implemented... One, because it's a really complex problem. Not only are you dealing with JavaScript, you also have to deal with CSS scoping and how that's gonna work.

**Jerod Santo:** Right. It's a huge problem, it's very difficult to solve that.

**Divya Sasidharan:** Exactly. And then that leads to -- with React, they're moving CSS Modules forward... Which is sort of a piece of Web Components, but very different from Web Components in and of itself. And CSS Modules is more a result of React, and the framework and the challenges that they face when you're building React applications... So again, the moment you work on a framework and you make decisions, and you're trying to push standards forward, the challenges or the problems that you're trying to face and solve are so specific to the thing you're working on.

**Jerod Santo:** Right. Plus then you get all the armchair quarterbacks like us, just sitting around criticizing, like "Oh, you're failing at this, you're failing at that. You should do it THIS way. This does not solve my particular use case." It's a hairy situation.

**Divya Sasidharan:** Us developers have way too many opinions. I think that's a problem. We'll tell you all the reasons why this is wrong, but we won't give you solutions. We'll be like "You fix it."

**Kevin Ball:** There's a couple of pieces that make this particularly tricky. Most web developers do not have the context or understanding of what actually is hard or easy to do within a browser... So we often will come with unreasonable requests... On the flipside, I think most browser developers are not doing web development actively, and a common criticism of the standards bodies here is that they over-represent browser vendors, rather than the users \[unintelligible 00:22:38.29\]

**Nick Nisi:** It is really just a tool to look at static documents, right? That's what a web browser is...

**Divya Sasidharan:** \[laughs\]

**Kevin Ball:** I don't think even the browsers think that at this point...

**Break:** \[00:22:51.01\]

**Divya Sasidharan:** So we were just talking about Web Components and various other things, like container queries... Are there any other things and APIs that you think haven't moved forward? I can propose one, which is I think dates on the web still suck, and working with dates is still terrible... Because I often have to be like "Oh, I have to work with this date. I'm gonna pull in Moment.js" and it's a giant library, and automatically my project just jumps in size and the performance goes down. It's pretty dreadful.

\[00:23:56.25\] But I do know there's work that's being done there, so I do wanna acknolwedge that. I see in TC39 that Maggie Pint and a couple of people are working on that, moving dates forward and making that much better... But currently, if you wanna work with dates, there's a lot of issues with it. I don't know, how do you guys solve that, or what are your experiences?

**Jerod Santo:** Well, there's OkCupid, there's Match.com, there's Tinder... I don't know, there's lots of choices for dates on the web, aren't there?

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** Moment.js historically has been how I've done it...

**Kevin Ball:** Yeah, which is, as you highlight, a huge pile. It's 100 kb, or something.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** I haven't \[unintelligible 00:24:30.11\] there's ways of grabbing parts. I know there's a date events library which is kind of like Moment, if it was just piecemeal... Or that's a bad way of saying. Moment if it was a-la-carte. But I feel like even the Moment team -- because I was kind of ripping on Moment maybe a year ago on this show, and somebody emailed and said "By the way, you can..." Moment has done some work in making it kind of grab different sections. Now, I never went and double-checked that, but I assumed that it's made some progress.

**Divya Sasidharan:** Oh, it's in packages, so you can--

**Jerod Santo:** Yeah, so you can at least say "Well, all I want is the formatter."

**Divya Sasidharan:** Yeah.

**Nick Nisi:** There's also built-in tools now, like toLocaleDateString, where you can provide it a locale, or I think it'll just pull the browser's native one, and then you can provide it options for specifically how you want to format that. That's the main thing that I usually want from Moment, just a way to format it... But I've used this and it's pretty nice, being able to do that just built-in.

**Divya Sasidharan:** Oh, neat. I haven't used that. I think there's alternatives to Moment. I think I've used Luxon JS, which is a bit smaller than Moment... And I believe in some Eleventy examples Zach uses it as well in those things, just because it's much smaller and much easier to work with than Moment.js. Moment is actually pretty to work with, it's just the size that's part of the problem.

**Jerod Santo:** Yeah, I've really appreciated Moment's API from the beginning when I first found it. I was like "This is a great API. I love using it", so no dissing on the engineering or the design side... It's just that it became the kitchen sink for all things related to time, and that ends up pulling in a substantial amount of...

**Divya Sasidharan:** And considering that everyone uses dates at some point when you build a web application, that seems like it should be out-of-the-box, included in the browser, or the browser should have a spec or an API that makes it easy to work with... But that hasn't happened, and it's only recently -- I think people have pushed it for a long time, but I actually don't know the politics of why that has not moved forward until very recently.

**Kevin Ball:** I will say while JavaScript's Date is particularly bad, I don't think I've ever worked with a language where dealing with dates and timezones and all of that mess was something that made me happy.

**Divya Sasidharan:** That's a fair criticism, yeah.

**Jerod Santo:** Ruby...

**Kevin Ball:** Ever Ruby, I always cringed every time I had to deal with...

**Jerod Santo:** It's way better.

**Kevin Ball:** It is way better. JavaScript is particularly bad, I'm not arguing that. I'm also just highlighting that our expectations may need to be tampered down a little bit. This is a really messy problem, because it is not a clean abstraction. There's so many weird edge cases when it comes to times and dates and all of these things, and getting an implementation that makes it feel clean may not actually be very possible, or may at least be very hard. Moment does pretty well. Moment is pretty darn good on that front.

**Jerod Santo:** The advantage of server-side languages is that they can augment the language itself without sending additional kilobytes down the wire. Python, Ruby - they all have these extenders to the built-ins, or the standard library, and you can make the APIs as extensible and readable and expressionful as you want, but you're not making your user pay for it. Maybe you are in server memory heap allocation, and that all adds up, but it's not like, you know, time to paint.

**Divya Sasidharan:** \[00:27:59.21\] I think it'd be better if it just worked in browsers, instead of having to be like "I need a server to fix this for me."

**Jerod Santo:** Agreed.

**Divya Sasidharan:** So that would be ace.

**Jerod Santo:** Quick, real-time follow-up - the thought I was having about Moment actually is Luxon, and team \[unintelligible 00:28:13.20\] helped putting the dots together... And you mentioned Luxon, Divya; that is actually written by one of Moment's maintainers, and is kind of like a lighter-weight thing.

**Divya Sasidharan:** Yeah, Moment is a great library in terms of implementation, it's just the size that I think is-- because I think at the time when they created it JavaScript needed something to work with dates... So I don't believe that performance and size of package were considered at all. I'm not sure, I have no idea; I'm just hypothesizing here, but... I think that as people are like "Hey, this is a problem. We care about performance now. We wanna make sure that just because we're dealing with dates, our application is not giant." That's front of mind for a lot of people.

Alright, I think we talked a lot about dates, and I don't actually know how much more we can talk about that, because we've covered quite a lot of ground with that. There's lots of other APIs that have not been developed... Let's pick another one. Let's start with accessibility, because we've talked about this on the podcast before, but I think there's so many things with regards to accessibility that are not very well done in browsers at the moment, so it makes it really hard if you're visually-impaired or if you have difficulty with movement... It makes it just impossible to work on the web. That's particularly also because it is, again, on the onus of the developer to do a lot of those things, so browsers don't have automatic ways to optimize for use cases that make it super-accessible... And because of the burden it puts on the developer, people don't tend to focus on it or put a lot of effort onto that.

Are there things that you all feel browsers could do better in terms of improving accessibility, making it a little better, or encouraging developers to work with accessibility, and so on?

**Nick Nisi:** I think going back to making forms and form elements easier to work with is probably the biggest thing, because if I can just use those, the accessibility is built-in. But if I have to write my own, or manipulate it in some cruel way, then it falls on me to get that right, and that's where it gets a lot harder.

**Jerod Santo:** Yeah, good point.

**Divya Sasidharan:** Yeah, that's fair. I also think -- I don't know if this seems very extreme, but I do think it would incentivize people if there is a motivation to build accessibly. For instance, if not having an accessible site harms your rankings in SEO... Because then that automatically makes people realize that that's something they need to work on, especially if you're e-commerce or if you depend on revenue in any way; then you would have to build accessibly, because you wanna make sure that your SEO rankings don't fall behind, and that whenever people search, they see your stuff because it's accessible. Does that feel too extreme?

**Kevin Ball:** Well, I think there are some interesting things here... There is a question of "How much do you want to force things on people?"

**Divya Sasidharan:** Sure, yeah.

**Kevin Ball:** One challenge with this, and something I was gonna bring up with one of the reasons why we sometimes don't see progress that we'd like to is that the number one imperative of all of the people working on this is "Don't break the web. Don't break backwards-compatibility." There are websites that have been up for 20 years that are still readable, and are ugly as sin, but they are still readable, and they still work, and that needs to continue being true.

\[00:31:40.02\] That said, I think there are transformations that they could do. There's this Reader View approach that Safari and Firefox have done, where they will ignore a bunch of the elements and CSS on a page, and just make it readable... And I think that that's something that -- maybe it's in a mode, or I don't know, but certainly Chrome could learn from and do something interesting on. There's stuff we could do around contrast ratios... So it's entirely possible to create websites right now that are essentially not readable by anyone who has trouble with colors, and there could be some sort of browser mode that just forces that, and if it makes the website ugly - well, so be it.

There was an article that I'm including in my newsletter this week that looks at a number of these. Some of the items they also bring up are things like fixing focus styles, forcing that to be there... Because one of the lovely things that so many folks do when they start a new site is get rid of focus styles because the default focus styles are ugly...

**Nick Nisi:** Outline none.

**Divya Sasidharan:** Yes, yes...

**Kevin Ball:** And that just makes the website inaccessible along a number of different ways...

**Divya Sasidharan:** Yup.

**Jerod Santo:** I feel like Nick is laughing a little too hard about this... Are you guilty of this one, Nick, or what's going on over there?

**Nick Nisi:** Oh, man... My first pull request to the Dojo project was for the mobile site, and I set "outline none" on all of the elements, because it looked ugly. It was rejected, luckily... \[laughter\]

**Divya Sasidharan:** I've definitely done that. I think sometimes when buttons have that little outline when you click on them, and then I purposely remove them because they're really ugly - that's very inaccessible, because... Yeah, how else if you're going through it with a screen reader can you know something is highlighted?

**Kevin Ball:** I think this is why we need to push more things down into the browser and more things down into libraries... Because your average developer is not going to be an accessibility expert, they are not going to be using a screen reader... And in an environment where -- I don't know what the percentage is, but something like 80% of web developers have five years of experience or less... And in a growing field, we can't expect that this is solved by education. This has to be something that we solve by baking it into things.

**Divya Sasidharan:** Yeah, definitely. I think also, interestingly, just the way that we think about accessibility as the -- so I know there's lots of people that talk about how we need to think about accessibility as a first-class citizen and build that into processes as you're building sites, but it's really hard, because when you go through a site with a screen reader or any device that helps you navigate a website, versus looking at it visually, they are two different experiences... So it's really difficult to build for that, especially if people are like "I want something that's beautiful, and that's amazing, and interaction is really cool..."

So from that perspective, it's just really hard for some people to get on board with it, because to them - they're like "Well, our user base for people who are coming on using various devices is super-small, and therefore we don't wanna build for it."

But one of the things I've found recently was this concept of an accessibility object model. With accessibility, there's the accessibility tree, which is how if you're on a screen reader you would navigate through a website... Which is slightly different from the DOM tree, because the DOM tree exposes everything, and the accessibility tree parses the pieces that are very important for interaction. But the accessibility object model is this idea of creating a completely separate, almost like a DOM, so to speak, where you can build a website from the ground up, where it focuses on how that experience will look like... Which I think is interesting, because then you're no longer looking at the visual element of it, of how the page looks like, but how a page is navigated, and then building from that perspective... Which I think is a really interesting way of thinking about it. I have no idea at what stage that is. There's a spec for it. It is unofficial, and I don't actually know what stage it's in... But it's interesting just as a way of thinking about accessibility and building for accessibility, or getting people on board with building for things.

\[00:36:27.16\] Overall, I still think that browsers themselves need to have implementation in-built, that optimizes for that. Because when you rely on developers to do a lot of that work, the chances of them doing it are super-low... Because they're gonna optimize for developer ergonomics, what works for them, their own use cases... You know, if I were building a website, I'd build for someone who has a similar experience to me, rather than someone who doesn't... Because it's very hard to look outside of your perspective.

**Kevin Ball:** It is. And the earlier you are in your career, the narrower the perspective that you have, just by necessity. You're doing everything you can to understand the basics, and starting from what you can see and touch and feel. So if we want accessibility to be something, we either need to have it baked in or have it be something that you are forced to see and touch and feel from the beginning.

**Divya Sasidharan:** Yeah, definitely. There's so much that needs to get done there. Are there proposals that are happening within browsers to improve accessibility in the browsers themselves, that I haven't mentioned?

**Kevin Ball:** I think the accessibility tree is a big one...

**Divya Sasidharan:** Yeah, that's the only one that I'm aware of. I'm sure there's lots more, I just feel like -- it's worth checking out. I'm sure if you did a search, you could find it maybe... Or just dive into the depths of W3C specs... Which is also accessible. You can go onto W3C and see all the proposals from the entire history of W3C, including the retired ones. It's actually really fascinating to see what people have proposed until now.

Alright, let's look at something else, which is -- I think it's worth talking about SVG as well, with regards to this... I really like SVG, because it's a really great way of animating. it's very easy to work with, compared to when you do Canvas things... Because Canvas is fast, because it's WebGL, but also interacting with images is very difficult, because it's a completely separate -- it's outside of the DOM tree altogether... And SVG is really nice, because you have the different components, you can draw really easily the browser's canvas, rather than a separate canvas element... But for some reason, SVG is still not a first-class citizen, so to speak. People still use CSS, and hacks, and things around that to do things.

**Kevin Ball:** I think one of the big things is that the set of thing that you can do in SVG and the set of things you can do in HTML are close, but there's an uncanny valley where some things just don't work quite the same; some things don't work in one or the other... And I saw something fly by, I believe it was in Firefox. There's work underway now to unify the rendering pathways for SVG and HTML, which would potentially fix that problem of the subtle differences there.

It's fascinating, because SVG as a spec is essentially like HTML. It's another document language. It's arranged the same way, CSS is supposed to work the same way, JavaScript should work the same way... It should just work. And it doesn't quite.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** And there's also subtle differences depending on how you use the SVG. Are you in-lining the SVG? Are you using it in an object, and do you get like a shadow DOM of your own there? Are you just dumping it in an image? There's all these subtle nuances that make it hard to just use it in the same way.

**Divya Sasidharan:** \[00:40:14.16\] Yeah, definitely. I don't actually know what the current work for SVG standards are.

**Jerod Santo:** I've been trying to look that up as we talk here... SVG 2 Working Group.

**Divya Sasidharan:** Yeah, SVG 2 I think is the one that's currently being...

**Jerod Santo:** The W3C candid recommendation for SVG 2 is October 4th, 2018.

**Divya Sasidharan:** Okay.

**Jerod Santo:** I don't know if that means they haven't changed it since then. I do not track these things personally.

**Divya Sasidharan:** Yeah, I have no idea.

**Jerod Santo:** I'm poking at a black box; I hope a scorpion doesn't come out and bite me here...

**Divya Sasidharan:** \[laughs\] SVG 2 editor's draft, 4th December 2019... So I guess that second version is ongoing, or at least in talks. I'm very unfamiliar with standards work, just being on the outside perspective.

**Jerod Santo:** Mm-hm. I think most of us are.

**Divya Sasidharan:** So is there anything else that you feel like we should mention, that we haven't mentioned already?

**Nick Nisi:** I think in terms of accessibility, one thing that is going right is I think that there is more of a focus on it in DevTools, in surfacing problems. So when you hover over text on the screen, it'll tell you the contrast ratio, and whether that's good or bad in Chrome. And then things like the Lighthouse scores, and...

**Divya Sasidharan:** Right, that's true.

**Nick Nisi:** ...incentivizing you to improve those by gamifying it almost to developers is pretty good. So that is good work, and I think that it should be recognized.

**Divya Sasidharan:** Yeah. I really like the Lighthouse scores as a way of highlighting just your score with regards to accessibility, just because it surfaces it, and so people see that automatically in their dashboard when they pull up their Lighthouse scores... So that is an important thing. It's not super-harsh, but it is something to encourage bringing up that number and improving that altogether.

**Break:** \[00:42:10.01\]

**Divya Sasidharan:** So I guess we'll dive into our next section. We're doing shout-outs. Does anybody wanna volunteer to start, or should I just pick a name? Kball, do you wanna go first?

**Kevin Ball:** Sure. I'm gonna shout out a series of articles that have been getting published over at Smashing Magazine by Rachel Andrew.

**Divya Sasidharan:** Nice.

**Kevin Ball:** Now, for those who aren't familiar with Rachel Andrews, she is possibly one of the world experts on CSS Grid. She was instrumental in getting the spec to happen. She's also the editor-in-chief of Smashing Magazine. When I've met her in person at a conference - just a delightful person. So she's all-around amazing... And she has been publishing a series diving into understanding CSS Grid, that is absolutely phenomenal. So if you have not yet taken the leap to learn CSS Grid, or you've started and you're confused about some things, or whatever, I can't recommend highly enough diving into this series. I'll link all three of them in the chat, and we can put them in the show notes. There are three so far; I don't know if there's going to be more after that, but...

**Divya Sasidharan:** Oh yeah, she just released one.

**Kevin Ball:** It's phenomenal...

**Nick Nisi:** It's like you're speaking directly to me.

**Kevin Ball:** Yeah. Rachel is an incredible writer. All of the articles, she just does an incredible job of breaking things down, making them understandable... And she can dive deep. She can go everything from "Here's the high-level of how you're using it", down to "Here's the underlying mechanics that the browser is using to do this, and how they're similar or different to other things." It's amazing. So start with this on CSS Grid, but really, if you go to Smashing and you filter based on her articles, which - let me see if I can figure out how to do that, so I can drop that list as well - it's just all gold. It really is.

**Divya Sasidharan:** Yeah, I think Jen Simmons also has a ton of resources on CSS Grid. I remember listening to a talk by her and just being like -- I walked in thinking I knew CSS Grid, and I left not realizing I don't fully understand CSS Grid... \[laughs\] One of those. Which is good. Which means it was a very good talk, because you're like -- you want to have your confidence shattered sometimes.

**Jerod Santo:** Oh, yeah. That's how you grow.

**Divya Sasidharan:** Exactly. Alright, Jerod, do you wanna go next?

**Jerod Santo:** \[00:47:37.28\] Absolutely. So I've found this amazing little project called Rotary Cell Phone. It is open source, do-it-yourself. Rotary Cell Phone, built by Justine Haupt. Shout-out to Justine for this amazing little project. I just thought it was so cool, I wanted to give her a shout-out. One thing she says is she answers "Why? Why would you build a rotary cell phone?" She says "Because in a finicky, annoying touchscreen world of hyper-connected people using phones they have no control over or understanding of, I wanted something that would be entirely mine, personal, and absolutely tactile, while also giving me an excuse for not texting."

**Divya Sasidharan:** Interesting.

**Jerod Santo:** So this thing's fully functional.

**Divya Sasidharan:** Whaaat...?

**Jerod Santo:** She can use it as her phone, and her plan is to do just that. She says it's not just a show intel piece. "My intent is to use it as my primary phone."

**Divya Sasidharan:** That's amazing.

**Jerod Santo:** "It fits in a pocket, it's really compact. Calling the people I most often call is faster than with my old phone, and the battery lasts almost 24 hours." We will link up that article. She puts out open source the design, her build notes, gotchas, the CAD files, and then she screen-grabbed, she took pictures as she went along of building the actual board, and putting it all together. I was just so impressed by this project.

**Divya Sasidharan:** That's so cool!

**Jerod Santo:** Yeah.

**Divya Sasidharan:** That's commitment right there.

**Kevin Ball:** Oh, man... I can imagine, every time she gets it out, it's a conversation.

**Divya Sasidharan:** Oh, for sure.

**Jerod Santo:** Absolutely.

**Divya Sasidharan:** No one would wanna steal it. That's actually also the upside. \[laughter\]

**Jerod Santo:** I don't know, I wouldn't mind having it... But yeah, if you don't know what it is, it looks like a kitchen timer, or something; like a Pomodoro timer with a little antenna on it.

**Divya Sasidharan:** Yeah. I mean, I would steal it, and I'm sure all of us would.

**Jerod Santo:** So for the kids out there, a rotary phone was an old-style phone where you actually had the nine digits in a circle, and you had to crank the thing around so you'd go 9... And then it had to roll all back. Then you'd go 3, and it rolled back... I'm not sure how she says she can do things faster with that, but...

**Divya Sasidharan:** Does this assume you have to know this number, or can you look them up? How does this work?

**Jerod Santo:** That would be a blocker for me...

**Divya Sasidharan:** I need more information.

**Kevin Ball:** Oh, that would be kind of interesting, to figure out -- so she has additional buttons there, right?

**Divya Sasidharan:** Yeah.

**Jerod Santo:** Any speed dial?

**Kevin Ball:** I wonder if there's speed dial, or there's -- like, I could imagine you setting up at least nine, if you do one-digit codes, but you could have two-digit codes for people.

**Jerod Santo:** Yeah, she does say she has a speed dial. She says "If I wanna call my husband, I can do so by pressing a single, dedicated physical key, which is dedicated to him. No menus. The point isn't to use the rotary dial every single time, which would get tiresome. The people I call most often are stored, and if I have to dial a new number or do something like set the volume, then I can use the fun and satisfying to use rotary dial." So yeah, speed dial built right in. She went all out.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** That's delightful.

**Divya Sasidharan:** That's super-cool. Yeah, that's awesome. Alright, we'll definitely have to check that out. Nick, what do you have for us?

**Nick Nisi:** I have two small shout-outs that I would like to call out. First one is Tim Pope. Thank you for the Fugitive plugin for Vim. It's been redefining the way that I use Git within Vim. Now I do so much within Vim without using the command line... So I don't feel like I'm getting too far away from the CLI, which is good, but it does make things a lot easier.

And then I was going to recommend a talk by Tatiana Mac, called "How privilege defines performance." And I would just recommend following her on Twitter, because she's a really great person, who talks about privilege, and just a really... Really awesome person to follow. She did speak at the NEJS Conference last year, and... She gave this talk, and it's a wonderful talk, so definitely check it out.

**Divya Sasidharan:** Awesome. I watched that talk, it was really good. And I think it's recorded as well, so there's ways to watch it. Cool! Alright, I have one pick, which is - because we're talking a lot about standards, there's an article I came across called "Understanding the ECMAScript spec", which is a walkthrough... It was written by Marja Hölttä. I don't know how to say that name...

**Jerod Santo:** It sounded good.

**Divya Sasidharan:** \[00:52:12.23\] Okay, cool.

**Jerod Santo:** I don't know how to say it either, but...

**Divya Sasidharan:** \[laughs\] It's really hard saying names when you've never heard it before.

**Jerod Santo:** It is.

**Divya Sasidharan:** But essentially, this article walks through how an ECMAScript spec reads... Because if you've ever tried to read the spec, it's really confusing. There's a lot of jargon, and there's a specific format, there's things that they talk about... And so this kind of walks through the different sections and what to look out for, how to just read the entire thing as a whole. And it's part one, so I imagine there's like -- is there more parts? Did I even-- no, there is not. It was released on the third of February. I just assumed there'd be a new one, because it's been like two weeks. But I imagine the next one is coming, since they called it part one... Hopefully there'll be a part two. But it's really enlightening, because oftentimes when we talk -- I mentioned earlier, whenever it comes to standards, often developers are left in the dark, because we are not in the process of talking about standards, we don't know how to read standards, we don't know how standards are done half the time... Which is ironic, because the standards affect us...

I believe this was written by the V8 team, and I think TC39 overall has been trying to be more open with their process, because they've realized that they have a pretty poor image in the community in terms of just the lack of connection they have with the community... So I think there's a lot of improvements being done. This particular article is definitely showing that. I have no idea if this is related to the TC39 team at all, and if they're involved in this. They probably were, I imagine... But it's nice to just be able to understand some aspects of things. So if you find a spec - like, we were talking about the date/time thing that's currently being worked on - it's interesting to just go in and look at it, and then use this as a reference point to be like "What exactly does this thing mean?" and read through that overall. So that is my pick for the week.

My pick closes out the show overall. Thank you all for listening, and tune back next week.
