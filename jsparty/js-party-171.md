**Jerod Santo:** Hello, everybody out there! I'm Jerod, your internet friend, and I am here for a JS Party. Excited to have Feross back on the show. What's up, Feross?

**Feross Aboukhadijeh:** How's it going, Jerod?

**Jerod Santo:** It's going pretty well. And we also have a special guest, Carson from Big Sky Software. What's up, Carson?

**chg:** How's it going, guys?

**Jerod Santo:** Excited to be here and talk about HTMX and HyperScript, and... Let me set the stage, because I feel like there's a stage to be set in this case. So there's kind of this -- I don't know if it's a bifurcation... There's kind of two extremes of where people think web development is heading. One is kind of like the old way made new, the other way is kind of the brand new way... And we've had a couple of shows on The Changelog just this year that have represented both sides. Back on the first episode of The Changelog of the year, on a show called "What the web could be in 2021 and beyond", Amal and myself were joined by Vercel CEO Guillermo Rauch to talk about where the web was headed... And the conversation there is very much focused around JAMstack, prerendering everything, computing on the edge, those kind of concepts. And then the most recent episode of The Changelog was completely opposite; it was called "The future of the web is HTML over the wire", and that is episode \#435... And that's more of a server-side approach. "Hey, let's push more to the server, let's send HTML down the wire, and let's simplify and do things that way."

So we have kind of JAMstack advocation going on, and then we have server-side rendering, HTML, less JavaScript, less things on the other side. So that leads us to this show right here. In fact, we were asked to do this show by a fellow by the name of Rajasegar Chandran, who very much is interested in HTML over the wire, and he thinks that HTMX is the way to go, hence Carson.

\[04:19\] So what Rajasegar said was HTML over the wire is the future of web development, and HTMX is the only library that's doing it right, because it's language and framework-agnostic, which means you can use it with any server-side platform, like Rails, PHP, Phoenix etc. So that's his take, and he asked to have Carson on the show and talk about it, so here you are, Carson... And here's HTMX.

One of the things you told us in the chat, Carson, is that you're here to tell us we should be writing less JavaScript... So go ahead, let us have it. Why should we write less JS?

**chg:** I know, I know... So I have to ask your listeners and the viewers to just suspend this belief for a little bit, or give the other side a fair hearing here. I don't wanna present HTMX as the way that all future web developments should be done. It's just not that. But I do think that it's a reasonable approach for a lot of websites that are being built today, often with much more complex technology.

I agree with your listener's comment that -- I mean, obviously, I think HTMX is the right way to do this sort of development with HTML over the wire... HTMX is not based on WebSockets, which Hotwire (which is put out by 37signals and DHH), and they obviously have a huge amount of reach, so I think they're a big driver of the conversations that we're having right now around this... But their approach has always been tightly integrated with the backend. So the backend needs to understand what's going on with WebSockets... Or in the case of Turbolinks, an earlier sort of rendition of this idea, the backend had to understand an awful lot about exactly how Turbolinks was working. Not a ton, but enough...

So I came at this problem from a slightly different perspective, which was that what we need to do rather than coming up with some integrated backend/frontend solution - and there's a bunch of these; Livewire is another example - is think about HTML, and think about removing the limitations that HTML had imposed on it, and see if we can get enough UX expressiveness out of plain HTML just by removing those constraints. That's the direction that HTMX is coming from. It's backend-agnostic, so it works with anything.

I've found a lot of people on Django, for example, which has traditionally been under-served by frontend libraries. Also Go, and some of these smaller languages that have embraced HTML because of that agnosticism, and this idea that we're improving HTML, we're not trying to give you a total solution for your system.

**Jerod Santo:** Yeah, it's worth noting that when I talk about these two directions, you have these two extremes, of just like "We should go that way, we should go this way." Most of us don't live on either one of those extremes. Most applications are hybrids, or they've tried this approach, they've tried that approach, "I'm not totally sold..." So you have kind of like the hard push in one direction, kind of a hard push in the other direction... Some of them have commercial reasoning behind them, some of them have maybe nostalgic reasoning behind them...

We all have our reasons, so we're not here to say one true way, because there are no one true ways. We're here to talk about the concepts, the tooling, and help people become more informed about how they should write their next web app, or what they should try next to learn when it comes to staying relevant and staying productive.

Now, I wanna turn to Feross for a moment and ask you a personal question, Feross... Do you write a lot of JavaScript?

**Feross Aboukhadijeh:** Yeah, I actually start by installing a minimum of one thousand npm packages before I begin.

**Jerod Santo:** \[laughs\] Okay... So how would react if someone said you need to write less JavaScript, Feross?

**Feross Aboukhadijeh:** Honestly, jokes aside, I actually think that in general I'm trying to reduce the amount of JavaScript I write, because more code is more things that can go wrong, it's more potential bugs, it's more fragility in the system. So I'm actually all for hearing out this approach and giving it a fair chance.

**Jerod Santo:** \[08:18\] Nice. So let's describe HTMX - this is Carson's take - on web app development, in the frontend at least, right? ...because it's backend-agnostic, so this is not a full-stack concept; it's a JS interaction replacement or tool... Go ahead - what is HTMX, for those listening? We've been talking about it, but...

**chg:** So HTMX is a dependency-free library. It's about 10k now. I wanted to keep it under 10k, but I couldn't do it, unfortunately... And you can include it via CDN. You don't need to have a build step to include it if you don't want to. And what it does is it gives you attributes that allow you to specify interactions with a backend server over AJAX, or SSE, or WebSockets if you want to. There's not the focus on WebSockets that you get in some other frameworks, it's mainly focused on AJAX, just because that works, and it's easy enough to figure out.

An example of this would be if you've got a button, you could put hx-post on it, and give that hx-post attribute a URL, for example "clicked". And when that button is clicked, an AJAX request will be issued to that URL. And then the response from that is expected to be an HTML response. That response can then be swapped into the DOM using other attributes. If you don't specify anything by default, it swaps it into the inner HTML of the button... But you can say, for example, hx-swap equals outerHTML. Or append, append inside... There's a bunch of different options for these attributes, which are -- I tried to base them on the standard options in JavaScript or in the DOM API that were already out there.

But you could also target another element... So a very common thing is to have a button that targets some outer div, because it's gonna do some action, and then refresh a bunch of state on a server that I'll need to get rerendered... So in that case you might use hx-target equals the ID outer div. And then on that outer div you would put an ID outer div on it, or whatever; main, or whatever you wanna call it.

So it just gives you these tools that allow you to issue AJAX requests, get HTML back, and then swap that content into the end of the DOM, in some way. And you do it all declaratively. There's a JavaScript API, but it's not focused on the library. And motivationally, the way to think about it - again, I'm coming from this perspective of let's improve HTML... The idea is "Why should only anchors and forms be able to issue HTTP requests? Why should only click and submit drive those requests?" That's not the world that we live in anymore. Why should only get and post be available in forms? Why should you have to replace the entire screen when you do these interactions? HTMX is trying to remove those limitations, increase the expressivity of HTML as a HyperText, and with that see how far we can push this from a UX perspective.

**Feross Aboukhadijeh:** That's really cool. It's sort of like you're saving the developer all the boilerplate that they would otherwise have to write to attach an event listener onto a button, and then send a fetch to the server, and then in the response you have to write code to change the DOM. You're sort of just saying "These are the types of changes that most people are gonna wanna make to the DOM, and these are the types of requests they're gonna wanna send, and we'll just kind of make it really easy to do those with HTML attributes." Is that the right idea?

**chg:** Yeah, that's right. The idea, philosophically, is to stay within the original model of the web. Maybe we'll talk about REST and HATEOAS later on in the show, but there's this original model for the web where there are HTTP requests going out, and we were returning content and rendering it... So HTMX is an attempt to move back to that model, for many websites.

\[12:23\] And it turns out you can actually do a fair amount with that model, much more than you might expect at first glance. There are some examples that we could talk about a bit later, if you'd like, that I think show off just how much you can accomplish with this simpler model.

**Jerod Santo:** It's interesting... I agree with Feross that you are removing a lot of the boilerplate, a lot of the mistakes that can be made, and you are doing less code that way. You're making declarative functionality possible in HTML, that wasn't previously possible.

Now, before this show we were talking about beards, and your grey beard there... And Feross has a beard; it's not quite grey yet. And I don't keep it nice and clean, but if I let it go, I'd have some grey in my beard as well. I've been around for a while, and I've written a lot of that style of code. It reminds me of the old on-click handlers, where you through a function on your on-click, and you do it; it just takes away a lot of the junk that you would have to do to get that done. I've found over time, doing a lot of websites that way, that it sprawls. You have functions sprawling, you have event handler sprawling... And there's not much structure beyond the HTML tree structure. You have duplication, and stuff like that. So does HTMX offer anything to help with those particular problems of scale? Think of scale in terms of not number of users, but breadth of features on a website.

**chg:** Yeah, I mean -- it's a problem. This is a problem of the old jQuery approach, where you would end up with a mess of event handlers. And part of that, I think, revolved around the way jQuery was laid out. The idea of a separation of concerns where your event handlers lived somewhere else, and your HTML was over here... And I think that was a mistake. We can talk about why I think that was a mistake in a little bit... So that made these applications very complex to understand. So I think that was part of it.

I also think that if you focus in - and you can make this mistake with HTMX - too much on micro-interactions, and you have just really gnarly dependencies, and you don't think of it more as "I'm just gonna refresh this whole div, and that's okay. I'm gonna tell the server I want a state change, and I'm gonna take everything that was rendered on the server back, and rerender this particular part of the UI." If you do that, then on the server side you can factor your templates out correctly, and have a reasonably manageable backend. Yes, it's possible to write a snake's nest mess of code in HTMX, but if you're doing it right, you should have well-factored backend templates, and a reasonable URL hierarchy, against which you can issue these requests and rerender what is necessary.

So I think it pushes that factoring to the backend, so you have to properly factor on the backend, there's no doubt about that. But you can do that. That's an achievable engineering goal for most people. And then the question becomes "Is that good enough for what you're trying to achieve from a UX standpoint?" And maybe it isn't. If you're doing a 3D game - no, it's not the right thing. But it might be the right thing for your settings page. Maybe you don't want all the insanity that's necessary to maintain all that client-side state in your 3D game on your settings page. So your settings page might be more amenable through this style of programming.

\[15:46\] HTMX, because it's a front-end only library, it doesn't require very much on the backend of you. It's easy enough to just sprinkle it in where you want. And that's another thing that I would say about HTMX - I would start in any web app I was building with just a DOM (I would use Rails, or whatever was available) web app, a web 1.0 style application. And then I would look in my app where the most value could be added to the application with fancier UX, and trying to achieve that with HTMX. And if it didn't get over the hump, then maybe I'd look at another library to help me out.

So I would look at it more incrementally... And while there's certainly the danger that you ran into previously, of just having a snake's next of callbacks and so forth, properly-factored backend templates - they can be just as clean as a properly-factored frontend library.

**Jerod Santo:** Right. Yeah, I think a lot of us run into YAGNI problems... Because it is hard to know what you're going to need.

**chg:** Sure.

**Jerod Santo:** And a lot of the decisions that we make is like "Well, I don't know where this application is gonna end up, so I'm gonna pick the most powerful thing. Maybe I'll pick an Ember, because this might become an ambitious web application. It's not ambitious right now, but I don't know what my desires will be in two years of my clients", or whatever it is. So we pick the biggest hammer in the toolbox first, just because we're not sure.

**chg:** Yeah.

**Jerod Santo:** But oftentimes you realize over time "Actually, my web app is not all that ambitious after all." A lot of websites have - let's just call them humble needs in terms of those kind of things, and so we end up with a power tool. Maybe all you needed was a little skilsaw, or something like that. Maybe that is a power tool; I don't know tools very well. But you know what I'm saying? I like the sprinkled in approach, kind of the incremental approach of starting simple, even going to Feross' philosophy there of less code, less things, less features. Keep it simple. As little as possible to accomplish what you know you need today, because you're not guaranteed tomorrow. And I think a lot of our technical debt and our huge overhead and our spaghetti is because we big solutions to small problems, just in case we have a big problem later.

**chg:** One thing that I've noticed in the tech industry - first of all, you can't blame people for it. If you go and you look at job posts now, it's all React.

**Jerod Santo:** Yeah.

**chg:** If someone came to me and said "What should I learn, HTMX or React?", my first question to them would be "Well, are you trying to get a job, or do you have a job at which you wanna accomplish something? Do you have enough chops and enough cred at that job to do things a different way?" And if they're really just looking for a job, you've gotta learn React. Nobody ever got fired for learning React, right?

In our industry in general, you know, "What's the new thing? What's the new thing?" So these approaches like HTMX, which are maybe based on slightly older concepts - it doesn't have as much sizzle maybe as some of the newer stuff. That's one reason why I think that there's a not necessarily technical advantage, but a marketing advantage for Hotwire, because it's using WebSockets, and WebSockets are exotic... Whereas to me, the majority of web interactions don't need to be over WebSockets, and we can just use AJAX; AJAX works great. But now this is not as cool of a library, because it doesn't feature WebSockets quite as prominently. It's easier to set up, easier to use, but it doesn't necessarily market as well... Which is fine. I've made my peace with what it's gonna end up being. \[laughter\] It is what it is.

**Feross Aboukhadijeh:** Sometimes it seems like the cost of using the cool stuff -- it's like, the code that you write with the cool stuff is almost deprecated as soon as you write it. I feel like you can build really cool stuff with React and with that whole ecosystem. I'm building a site in Next.js right now, and it gives me a lot of cool stuff out of the box, and for the right kind of app, it's wonderful.

But a lot of what you end up having to use in that whole ecosystem - you use these modules that are changing really fast, and they feel like they're kind of always in beta, or sometimes you've gotta pull in an alpha version to solve some problem... So you have parts that are just... Some of them are not ready quite yet... And you just know when you come back to that project in a year everything's gonna be broken or needing updates... Whereas something like this, it sounds like -- I mean, correct me if I'm wrong... It doesn't seem like it's gonna move that fast on me, and it's gonna be kind of the same when I come back in a year. Is that right?

**chg:** \[20:17\] Yeah, I mean -- I don't know... Not to wax too philosophical, but HTMX really is the successor to intercooler.js. And intercooler.js has been around since 2013. And when I did HTMX, I wanted to do two things - I wanted to clean up some of the mistakes that I made in intercooler.js, and I wanted to remove the jQuery dependency, so that you could just use HTMX without anything else. But it's not changed -- I don't wanna say it's done-done, but aside from bugs, and maybe some small improvements anywhere, this is my proposal for web development. And there's not gonna be an HTMX -- you know, certainly there'll never be a 3.0, and I doubt there will ever be a 2.0, because I think I got the APIs... You know, the way that I wanted to do it is reasonably close to correct.

Some things that I threw in - there's an extensions mechanism in HTMX. So if you have some need that it isn't needing, you can create an extension and hook in to the event cycles, and do whatever you wanna do. If you go to the reference page, there's an extensions reference that shows some of the things you can do with that... So that takes some pressure off the library. It's functional enough as it is to build a reasonable web app, but if you wanna use morphdon or something like that, there are some plugins that you can use around that.

And then HyperScript was another thing that -- I did HyperScript, and HyperScript is much more speculative than HTMX... But I did that to take the pressure off of adding features to HTMX, so it can be a stable way to build apps... And it's backend-agnostic, and hopefully it's just gonna work for the foreseeable future with web apps.

So definitely a more conservative approach, in the sense that I'm not trying to get things wrong and then rebuild everything, and all that sort of stuff... But I think it addresses that concern that you're gonna have with some of this newer stuff, where a year from now goodness knows what it's gonna look like.

**Break:** \[22:22\]

**Jerod Santo:** Carson, some of these things are better felt than telt... Unfortunately, you're on a podcast, so you're gonna have to tell us...

**chg:** Yeah, sure.

**Jerod Santo:** But you do have a good example, a search example, which at least gives the gist of what does it feel like to work with HTMX on an actual feature. Can you walk us through, verbally, some of the way it works?

**chg:** Yeah, sure. We're gonna look at the Active Search example. You can go to HTMX.org/examples and click on the Active Search example there if you wanna take a look at it... But this is a great example, because it shows interactions that normally you would feel like would require a fair amount of JavaScript to implement, and in fact you end up being able to implement in a fairly clean manner just using attributes.

So it's an active search, and what that means is you've got a text input, and you're gonna have some table of results which filters down as you type into that... And many people would -- you know, you could implement that client-side... There's a million ways to skin this cat, but you could also implement it on the server-side. HTMX is gonna do this on the server-side.

So the way that it works is fairly simple. You have an input, and that input is of type text, and it has a placeholder that indicates "Start typing here to search." The attributes - it has four HTMX attributes on it, the first one being hx-post. So that posts to /search. So whenever on an input, the default trigger for an action is gonna be when it changes. We're actually gonna modify that trigger here, for reasons you'll see in a second. But if that's all that you had on this input, if you tabbed out of it and a change event fired, it would issue this request to search.

The next attribute on it is hx-trigger. The hx-trigger attribute has the following values in it - keyup (it's gonna trigger on key up). Changed - a modifier to the keyup argument, and that is telling HTMX "only trigger a request if the value has actually changed." So an arrow key (a right arrow or a left arrow for example) won't trigger a request because the value of the input hasn't changed.

And then finally, there's a delay: 500 milliseconds, and that debounces the request, so that you're not sending a request on every keyup, which obviously is not a good idea. So this is the mechanism in HTMX to debounce events. So after 500 milliseconds, if not receiving a keyup, it'll issue this request.

The next attributes is -- we don't wanna target the input, obviously; we're not gonna want to replace the input. Instead, we're gonna replace a table that's just below the input... So we target the search result -- we actually target the body of the table via an IDE. So the body of the table has the IDE search results, and so our AJAX target uses the standard CSS selector syntax. It says hx-target="#search-results" to say "when you get stuff back, put it into there."

And then finally - and this isn't necessary, but I like it for this example - there's an hx-indicator attribute, and what HTMX will do (that, again, has a CSS selector as a value for that attribute) is while a request is in flight, it will show that element in the DOM. So that element is hidden by default, and during a request, HTMX will automatically add it, will automatically show it.

So those four attributes - if you go down below that, you can start typing; just hit "a", or something like that, and you'll see it issues a search. A little indicator pops up while the search is in flight, and then lo and behold, below in the table you're gonna get all the results that match that. And this is all done on the server side, with a server-side rendered template. I have to admit, for the examples on the website we're using a mock. We're using a [Sinon.JS](https://sinonjs.org) mock server, so that we don't actually have to have a real backend... But the code is written in the same manner as it would be. So everything else is hooked up as normal.

\[27:55\] So this lets you do Active Search. If you go to Google and you start typing, then these search results just pop up automatically. This is a good example of something that -- how many attributes? Four attributes. Not very much HTML. And this could add a lot of value to a lot of user interfaces that I interact with anyways, on the web. Anytime there's a table that doesn't offer an active filter, I think to myself "Man, I wish these guys knew about HTMX." And maybe on the backend all this would really involve is maybe factoring out the template for the search results body of this table, and it'd be good to go. So you could add this functionality with very little code.

**Jerod Santo:** Yeah. On the backend you could just detect if it's an AJAX request and send only the search results table rows; but if it's a regular get request, if you're using gets, with query parameters, if you're using that search -- well, it's an hx-post, so maybe that doesn't work... But you could have it so that the entire page with the query parameters would load with that table filtered if you hit Refresh, for example, and still have the value there.

**chg:** Yeah... So there's another attribute which is called hx-push. Is it hx-push? Push-url? I think it's hx-push-url. That'll do exactly what you're saying - it'll take the URL and it'll push it into the actual nav bar. Then you'll get that behavior where it's exactly like if you add it as a form. So if you're really trying to be disciplined about progressive enhancement, for example, that might be a good way to do it. Then you'd have copy and pastable URLs, in that case. So that's another attribute that would improve it here.

And then I should say that HTMX includes headers, so that you can differentiate "Oh, this was an HTMX request." You can even see what the request is targeting, you can do a lot of stuff like that with a library. It will try and give you enough information to make these decisions server-side.

**Jerod Santo:** Yeah. Let's take just a common edge case, or a common corner case even is just empty results. Complicate this a little bit more.

**chg:** Yeah, yeah.

**Jerod Santo:** A lot of times you get no search results, so this isn't even really an edge case. This is just like the empty case. How would you accomplish that? Would there be more attributes, or would you just return different HTML?

**chg:** There are a few different ways to skin that cat. If you can't jam it into the body, the tbody if that isn't acceptable, you could trigger an event. So you could use a header to trigger an event and write a JavaScript or a HyperScript handler to maybe show a message, like some sort of growl style message indicating that there are no results. There's also an out-of-band attribute that you can put on the content that you stream back, and that will tell HTMX "This content is not destined for the normal target. Instead, swap it in somewhere else in the DOM." So if you had a place where you were showing alerts, for example, you could use the oob swap -- hold on, let me make sure I'm not... Hx-swap-oob attribute on content that you are returning from the server, to say "This needs to go somewhere else in the DOM." So you could use that to show an alert of some sort, indicating that results.

Another thing that you could do, another way that you could skin this cat is to replace the entire table. Wrap a div around the whole thing and then just include that alert at the top, and don't even render a table; render some other HTML. That's often one of the best approaches, is just to expand your target until it's big enough, and that'll keep it simple. Maybe it's not as sexy a UI as a growl message or something like that, but if it's not worth the time and complexity to invest in that UX, then it's a perfectly acceptable approach.

**Jerod Santo:** To me it just screams for server-side integration though... Doesn't it? I mean, I know you wanna be agnostic, but are you just gonna provide plugins for all the popular frameworks, or something? Because I would wanna write the server-side to do the detection of "Is this HTMX?" I'd like to have tooling on the server-side just to make that dead-simple. I'm assuming you could accomplish that with a Rails plugin, a Django plugin, a Phoenix plugin etc.

**chg:** \[32:04\] There's a Django plugin for HTMX, and I expect there'd be more of those... But I really wanna stay disciplined about HTMX not committing to a particular backend... And I'm fine with that. There are people that know Django, or Rails, or whatever the Go web server is, really well.

Even with something simple like Sinatra, you can do a lot with just raw HTMX. Yeah, you have to look at headers and so forth, but it's not crazy. So as long as your server-side API is reasonable, it's not too bad. But I do agree -- I think that one thing that comes up a bunch is the XSRF, the cross-site scripting tokens, which every server-side framework does it a little different... So for something like that - yeah, you're either gonna have to figure out how to do it, or hopefully there'll be a plugin.

So my hope is -- you know, I released HTMX last summer, I think in June, so it's relatively new. Intercooler has been around for a long time, but -- so my hope is that as people pick it up, they'll develop the server-side helpers that expose a lot of functionality, whatever the native flavor of that backend is.

Some people are also using it to build their own frameworks on top of it. For example, Ben Croker has something called Sprig, which is built for Craft CMS on PHP, and it uses HTMX to deal with the frontend, but then it feels much more like Livewire is my understanding. I have to admit it, I'm not a PHP person.

So that's an example where someone is using HTMX to achieve something with much tighter integration with the server. But HTMX is never gonna be that. It's just trying to complete HTML. It's fixing the features that are missing in HTML, and that's it.

**Jerod Santo:** Well, that leads to a question from the chat - are the hx attributes extensible? Is HTMX extensible? If you feel like it's incomplete, I can add my own custom attributes that interact with it.

**chg:** Yeah, it is... You can plug in -- it's extensible. So there's an extension mechanism, and you can add your own attributes if you want to. It gets a little dicier when you wanna do things... For example, if you wanna have your own swap mechanism, there's a hook for that. But when you start talking about the internals, I have to put those hooks in place. If that hook isn't there, you might be kind of out of luck.

But the events - it does have an extensive event system, so that gives you a lot of control over requests, and so on and so forth. So you do have that ability to extend the library... And that was intentionally done so that I'm not tempted to keep in functionality; just keep dumping stuff in and grow the library too large. I wanted to keep it pretty focused on this. HTML-driven server interactions concept.

**Jerod Santo:** The more I look at this, the more it makes me think about Tailwind, and its rise to popularity now... Because Tailwind is really putting utility classes in your HTML. You're writing more HTML and less CSS. You have your classes, and you're doing all your customizing the look and feel right there by adding or removing certain classes... And here you have basically that concept again, with HTMX, and you're writing these additional attributes. So you could probably get away with, in a small application, maybe pulling in Tailwind, pulling in HTMX, and writing only HTML. One single page, one file, all HTML, and come up with a somewhat sophisticated web application without writing any CSS or JavaScript.

**chg:** Yeah, I agree with that, and I do think that there's a conceptual synergy between Tailwind's and HTMX... And HyperScript too, which we'll talk about maybe a little bit later. They're all designed to be in the HTML. They're HTML-centric, in the sense that you work with HTML, you don't work with some other file.

\[36:10\] One concept that I'm trying to push to codify that concept is this idea of locality of behavior. The idea here is that -- and I mentioned this earlier, that I thought in jQuery, when you're dealing with jQuery applications, the separation of concerns. Everyone knows about separation of concerns, right? "Oh, we've gotta separate our concerns." Well, Tailwind's CSS is not separating those concerns. It's kind of saying "Nah, we're not gonna worry. We're gonna just put the stuff there in the HTML." And HTMX is similar in that sense, in that there isn't a larger focus on the separation of concerns, but rather there's an emphasis on what I am calling locality of behavior. And the idea here is that the behavior of a code unit should be as obvious as possible by looking only at that code unit.

So if I have a button that does a thing, I don't wanna have to look in ten different places to know why the button looks like it looks, or what it does. And that was a problem in jQuery, DRY... I think this gets at what you were talking about earlier, where it's like "What is going on in this app?!" You just couldn't figure out what this darn button was doing, and maybe some crazy selector in some JavaScript that lives goodness knows where was what was hooking up the event handler.

So locality of behavior is the terminology that I'm trying to use to describe this idea. You put the behavior of the button on the button, not elsewhere. And that violates separation of concerns; it also, to an extent, conflicts with DRY (don't repeat yourself), because you may embed -- in jQuery anyways, you could hook up a behavior to multiple buttons by using some crazy selector... But that was its own problem.

So this is, I think, another design consideration that developers should keep in mind when they're designing their systems. Ideally, we want locality of behavior. We wanna be able to look at a button and understand what the heck it does.

**Feross Aboukhadijeh:** I like that a lot. It's like the opposite of spooky action at a distance.

**chg:** Exactly, yeah.

**Feross Aboukhadijeh:** You wanna be able to look at the code and figure out what is going on, and have that entire file kind of self-contained. Yeah, and it doesn't necessarily mean that you have to repeat yourself, right? I mean, if you're doing something in a bunch of different places -- I don't know if HTMX supports some way of reusability.

**Jerod Santo:** Yeah, that's what I was wondering, too... Is that all server-side?

**chg:** You can... In HTMX, most attributes are inherited from a parent. So for example, if you have five buttons that all target the same div, you can move that AJAX target up to a parent div, and then they'll all inherit, in the normal CSS way, that behavior. So that's the mechanism in HTMX for achieving not repeating yourself. But that does violate DRY. That can get very complex, if you move it too far away from the buttons in question. So you have to ask yourself...

And these are design principles. There's no hard and fast rule we can apply here; we just have to use our own best judgment to determine "Okay, this has gotten too crazy. I'm gonna move this a little closer, so that this particular code unit is understandable."

**Jerod Santo:** Yeah, otherwise you put your abstractions on the server-side and you render them. So you have your button function that spits out the same HTML six times, and you call it, but the logic is in a singular place... So you can accomplish that with a server-side rendering.

**chg:** Yeah.

**Jerod Santo:** When it comes to server-side versus prerendering, there are certain things that server-side can't do... Very well at least. Offline-first, for example, working with other API clients, like "Now I have an iPhone app that also needs to use the same logic. Well, I've been sending HTML down the wire this whole time; now I have to build an API." So multi-client is problematic. I think offline-first is problematic... Some distribution -- you know, if your customers are in Japan and your server is in New York City, you've got just laws of physics fighting against you...

\[40:15\] So like you said at the top, this is not the solution for every problem, but when it comes to those kinds of things, is the answer "Just go with a Next.js, or with a prerendering kind of a thing"?

**chg:** Yeah, and I think it's important -- and a lot of people will get confused; maybe we can move into talking about REST and HATEOAS from this point... A lot of people, when I say "Oh, just use HTML", they think "Oh, now my mobile client has to parse HTML. Are you a lunatic?" Well, yes, I'm a lunatic, but that's not what I'm saying. Those are two separate things to consider. And I'm not saying that at all. I think you should have two separate -- for most apps, of course... And it just depends, of course... You should have two separate APIs; you should have a JSON API, which should not be RESTful, by the way, and we'll talk about why that is. It shouldn't be RESTful; you should have a JSON API... And the you should have your web app. And maybe that web app on the backend even uses the REST API internally, I don't know. Typically, I would just access the database, because that's gonna be faster... But those two need to be decoupled from one another, in my opinion.

And the reason for that - and this is to get into that conversation about REST - REST has kind of had its ups and downs in the web development world. People now still use the term REST, but they don't really mean it when they say it... I think it's just come to mean any JSON API. What's the query language that Facebook --

**Jerod Santo:** GraphQL?

**chg:** GraphQL, thank you. I always confuse that with jQuery. That's not RESTful. If you're creating an endpoint with GraphQL, you're moving way away from the original RESTful concept... And that's explicit. I think that people understand that, right? And that's the right thing for that style of API. And the reason for that is that REST and HATEOAS - that was a description of the original web model. That was not a prescriptive "You have to do things this way." It became that later on, but it was originally a description of the way the web worked in web 1.0, dumb web navigation. And for historical reasons, that became part of the discussion when XML was used for APIs. I'm old enough to remember when people used XML for APIs, in JavaScript, believe it or not. AJAX, believe it or not, has XML in it, right?

**Jerod Santo:** Right.

**chg:** So when they were designing these XML APIs, they had in their minds the normal interaction, and they adopted a lot of the terminology around it. So there were these arguments about whether or not an API was RESTful or not, and there's this hierarchy of RESTfulness, and so on and so forth. And that was all somewhat plausible when you were using XML rather than HTML... But once we flipped to JSON, JSON is not a hypertext, it's not a hypermedia. Once we made that flip, my opinion is that the conversation became somewhat ridiculous, and a little bit of cargo culty... Because once you've made that move to JSON, where you're in a world where there's no markup, there's no hypertext here, now you're in a world that is much more like the old \[unintelligible 00:43:28.08\] And the APIs that you're working with - they're data APIs. And you want your data API to be as powerful as the data API we have to our databases. You want that same functionality. You don't want to be doing what the web did. The web was RESTful, and you don't want that anymore.

My take on this is that you need to separate those two things from one another... And the JSON API is just gonna have a very different behavior and different characteristics than your web API, than the web apps interaction with a properly-functioning RESTful backend.

\[44:05\] So REST makes sense when you think about interactions with HTMX a ton, because hypertext is the application. There is the engine of application state. But when you're interacting with JSON, that's just no longer true, so you should drop that baggage. The industry has been staggering towards that for the last 5-6 years.

**Jerod Santo:** So in the typical case of a -- let's just call it a technology startup, where they're going to have a web app, and they're going to have a mobile app, which is iOS and Android, or whatever... And then maybe the real hips will have a command line interface.

**chg:** Yeah, sure.

**Jerod Santo:** You say that's two APIs... There's a web API, and there's like an app API. Versus - I have one API, and it serves a web app client, it serves an iPhone client, it serves an Android client... Because they're fundamentally different things?

**chg:** They are fundamentally different technical characteristics. Your web API - you need to get little things right. You've got Active Search here; you've gotta get all these little interactions right. Maybe they do various things, maybe there's an out-of-bounds swap that happens... Whatever it is, there's a lot of churn associated with your web app as you build it out. And if that churn goes through your API, then it's brutal. That's why we've moved, as an industry, towards these more generalized frontend query languages, because that was such a nightmare. When they tried to do RESTful APIs with good RESTful endpoints, you'd be on version 35 of your API before you even shipped 1.0 of the web app, because you'd gone through so much churn.

And your web app, to be a good experience for the user, needs that; it needs very specific, highly-tuned queries that are best done on the server-side with SQL, or whatever it is. So that is a different use case than "Oh, I'm giving this API out to the general world, it's gonna be rate limited, because the general world does crazy stuff, and maybe it needs to be very general, so it doesn't change very much." And that is fine, but that's a different technical use case, very often. \[46:20\] you could ask for endpoints. Neither HTML or JSON, and it just never went anywhere. It didn't produce good APIs. I don't wanna say that was a mistake, because we were all trying to figure it out, but it just didn't work out that well. And I think that, again, is evidence of this distinction. A web app needs a small -- not necessarily a super-small, but a really specific and highly-tuned API to perform well, and then your general API that goes out to your clients, maybe your command line, maybe to your mobile apps, whatever it is. That just has a different set of technical requirements.

**Break:** \[46:55\]

**Jerod Santo:** Alright, Carson, you have mentioned HyperScript a few times, but we haven't hit the nail on the head. What is HyperScript? Tell us about it.

**chg:** HTMX is solid... I think it's the right thing. \[laughter\]

**Jerod Santo:** Okay...

**chg:** And HyperScript, in contrast, is much more --

**Jerod Santo:** A little mushy.

**chg:** It's speculative. It's a much more speculative project. I'm a programming languages person, so it's always dangerous when -- I'm like "Oh, I'll solve this with a programming language." It's turning out pretty well. And the two projects are related to one another. They're designed to work well together, but they're not required. So if you just wanna use HTMX and vanilla JS or whatever - that's fine. A lot of people use Alpine.js with HTMX, and that's fine. But HyperScript is an embedded programming language; it's a frontend programming language, and it's designed, like HTML and like Tailwind, to be embedded directly in HTML.

So you write your code, you write event handlers directly in HTML... And you do that with the underscore attribute, by default. That's the one that we use. I took idea from -- I don't know if you remember \_js...

**Jerod Santo:** I do.

**chg:** Yeah, \_js. I thought that was pretty clever.

**Jerod Santo:** Jeremy Ashkenas... replaced by Lodash over time...

**chg:** Yeah...

**Jerod Santo:** Not replaced, but usurped, I guess, is the right word. \[laughs\]

**chg:** Yeah, right. But I thought it was really clever that we took underscore, because that's a valid identifier, and it's the shortest, most unobtrusive identifier available... And I looked around and said "Well, I'll just take the underscore attribute, and this will be the underscore attribute JS of...", whatever. You know, if you have a button, for example, and you wanna add some code to it, you say underscore, and then the syntax of HyperScript is pretty unique... It's pretty unique, I'm not gonna lie. It's based on an older scripting language called HyperTalk. How many people here have heard of HyperTalk?

**Jerod Santo:** I've heard of HyperCard... Are they related?

**chg:** Yeah, they are related. There you go... We've got someone who's heard of HyperCard.

**Jerod Santo:** Yeah, but I don't really know what it is. I know a lot of people who've been around...

**chg:** You would have a grey beard if you grew it out...

**Jerod Santo:** Yes... Or at least I listen to a lot of grey beards, and I think they speak very highly of HyperCard... Was that in the '80s, or when was that?

**chg:** Yeah, HyperCard was late '80s and early '90s, and it was a sort of predecessor to HTML. It was available on the Mac, and recently I've just gone on a binge of buying old HyperCard and HyperTalk books. HyperTalk was the scripting language for HyperCard... And you can search around, I think there's HyperCard.org, which has an old reference. It's cool, old vintage stuff to take a look at.

There were some features that were in Intercooler I didn't wanna make part of the core of HTMX, but I still wanted to have a story for them... And I thought to myself "Well, it's always fun to make a programming language... Let's do that." And one of the things that I noted was that a lot of the attributes that I was removing from Intercooler.js were event-related... So I thought to myself "We need an event-oriented programming language", and there aren't a lot of those. But I remember when I was a young man doing work in HyperCard, and there was a really cool programming language called HyperTalk, that had event handlers baked into it, and a really nice way to work with events. So I started a programming language based on that concept, and you can check it out at HyperScript.org.

The way it works effectively is, you know, if you've got a button and you wanna do something, as an attribute you say "underscore equals" and then you embed a string. And you can say "on click" or on whatever, do something. And that something is gonna be specified typically in a very English-like language. So HyperTalk had this natural language style to it, and I'm copying that for HyperScript.

\[52:14\] So if you go to the docs page, the first example says "On click, put "I was clicked into me." And that's a very HyperTalk-esque thing to say. What that would do is when you click that button, it'll put the string "I was clicked" into the button. "Me" means "this", effectively, if you're used to JavaScript. So there's a working example there that you can click on.

So what's the advantage of this versus just doing an on-click handler and writing a little bit of JavaScript here? That's the first thing you're gonna say. Well, the advantage here is that this syntax can handle any type of event. So HTMX fires a bunch of different events in different parts of the cycle of requests and replacements and so forth. Unfortunately, there's not a general way to hook up a handler directly on a button or on a div or whatever to handle those events. So the HyperScript syntax is more general, and you can handle not only the canonical DOM events, but you can also handle events triggered by other libraries. HTMX, if you have a drag-and-drop library that fires events or whatever - you can embed all that directly in your HTML, without having to put them in either a jQuery event handler or somewhere else, or in a vanilla JS block somewhere, where you add the event handler somehow.

It's all embedded directly, so it once again satisfies that locality of behavior concept that we were talking about earlier, where you can look at this button and know what it's doing in a way that you can't if you just use the standard technologies that are available to you.

**Jerod Santo:** I think this is really cool. It makes me wanna show it to my kids. This is the kind of thing where - and I've taught the foundations of web development to young people, and even to some older people, and it's like, the HTML - easy. The CSS - a little bit harder, but we get it. But then it's like JavaScript - boom. Punch in the face.

**chg:** Right...

**Jerod Santo:** And I would use jQuery to kind of ease that tension a little bit, because they had already learned their CSS selectors, so now we can use those to grab an element, and then fade out is a pretty easy thing to think about.

**chg:** Right.

**Jerod Santo:** But this is even more local and more human-readable, and maybe even intuitive, to say something like "on click add fade me, then wait 200 milliseconds, then remove me." That's the kind of way you think about it there, right?

**chg:** Yeah. And in fact, you could do exactly what you've just said - you could say "On click, transition my opacity to zero." So you could just write that; that's valid HyperScript, and that'd exactly what you're talking about - it would transition the current element's opacity to zero.

There's a bunch of commands and so forth that you can do, and it's based heavily, but in some ways loosely on HyperTalk, influenced obviously by JavaScript as well... But it has some interesting syntactic features. For example, you can use CSS literals directly. So you can say, for example, "On click add .foo to me", and that'll add the foo class to the current element. So the .foo is a literal value in the language that allows you to refer to that class directly, without having to use strings or whatever. There's a bunch of literals that are available for you to use in the language. So it's trying to be very frontend-focused, very DOM-friendly, as well as very event-friendly. So you can do all sorts of crazy stuff in it...

And there's one feature that I wanna talk about, if you wanna get into it right now... So this is all kind of neat, it's a cute little toy language, but there is one really neat trick in the language that we can talk about.

**Jerod Santo:** \[56:01\] Well, in the last episode I was lamenting to Nick about having to write some AppleScript, because that language is verbose and ridiculous... And there's a hint of that here. Is HyperTalk potentially also an inspiration for AppleScript? But AppleScript is more verbose, and this makes more sense. The "do this, then that"... In AppleScript you're like "tell application Keynote to focus itself, and then do this..." There's some of that there; I'm wondering if they had similar roots.

**chg:** Yeah.

**Jerod Santo:** Okay.

**chg:** They're both derived from HyperTalk, that's exactly right. And HyperScript, just like HyperTalk and like AppleTalk, can get out of hand if you're trying to do too much with it. So this is a scripting language; this is for glue code, and for gluing stuff together with events. It's not for creating a massive -- you don't want a massive codebase of this. That's not the idea here. The idea is to be able to capture small events, and maybe forward them or do simple interactions with the DOM.

Now, what you do once you've been given this power - that's between you and your god. The idea here is not to write a ton of HyperScript. It's when necessary, to write a bit of scripting in a place that's obvious, once again, following that concept.

**Feross Aboukhadijeh:** One thing that comes to mind whenever I see programming languages like this that are really similar to English, natural language--

**chg:** Natural language...

**Feross Aboukhadijeh:** And I haven't really worked in them for too long, so maybe this is just a silly question... But because it's so similar to English, do they try to go off and just write things that the language doesn't understand? If it's like an English sentence, I might start adding other words that seem like "Oh, the computer understands what I want. Why can't I say these other words that should be obvious?" How do you give them feedback on that, and how much of a problem is that?

**chg:** Well, I'll tell you in about a year, when people started using the language more extensively... I think that's definitely an issue. But I would say that HyperScript favors read time over write time, so it's not intended to be necessarily trivial to write this code. What it is intended to be is trivial to read it. So once it's written, it should be very clear what it does, and the idea there is to favor read time over write time, because read time is -- you know, the vast majority of code is read many more times than it is written. So that's a theory; this is a little bit of a meme language, so I don't wanna say that that's not a problem at all... We'll see how it goes.

There are people who are very passionate about HyperTalk, so my hope is that there's a kernel there that we can capture with this language... And once again, I'll just kind of hem and haw and say "Oh, read time, when this problem comes up.

But if I can -- do you mind if I spend a little bit of time talking about the cool feature of HyperScript?

**Jerod Santo:** Please do, because you teased it, and it would be remiss of us not to let you talk about it now.

**chg:** Okay. So one thing that's really interesting about HyperTalk is that it is what I am calling async-transparent.

**Jerod Santo:** Okay...

**chg:** And what that means is that you can write and mix synchronous and asynchronous code together and not have to do any sort of annotations or work with callbacks in any way. So if you go to the docs page and you click on that first button, what you'll notice is that after two seconds it reverts back to "click me". It changes its text and then it reverts back to "click me." And the way that that's happening, if you scroll down just a little bit further, is that there's actually a little bit more code in there. So what HyperScript actually says is "On click, put "I was clicked into me" and then wait two seconds. Then put "click me" into me." So what that code does is it puts the string "I was clicked into me", and then it waits two seconds. And then after two seconds, if passed, it puts "click me" back into the button to revert to its original state.

\[01:00:08.20\] And the wait-two-seconds command - you can wait in HyperScript, you can throw a wait wherever you want... And that's the equivalent of, in JavaScript (that we're all used to) a setTimeout( ), where you would call set timeout 2000, or whatever, and do something after the fact. In HyperScript you can do that, and it will just work. So the HyperScript runtime figures out whether or not a particular statement, or even an expression - without getting too technical - is asynchronous, and it will delay the execution at a high level of whatever statements depend on that until that expression or statement completes.

So you can mix both synchronous and asynchronous code together. You can have an asynchronous function, and call it; as long as it returns a promise, then that promise will be resolved before HyperScript continues. So the internal runtime of HyperScript resolves promises, and also (and this is without getting too deep) creates promises, depending on what your stuff does. So you're able to just write code that may be synchronous or asynchronous in a normal, linear fashion, without doing any sort of annotations, without changing... Bob Nystrom, the Dart guy, @munificentbob I believe is his handle on Twitter... What he would call the color of the function. So to him, I think he calls asynchronous functions red functions, and synchronous functions blue functions. Well, HyperScript collapses the difference between those two... So you don't have to think about whether or not your code is synchronous or asynchronous.

And if you scroll just a bit further down, you'll find an example that changes the string that is put into the button to a fetch. So this all seems kind of dumb, like "Oh, great. You can wait two seconds. Who cares?" Well, if you scroll a little bit further down, you'll see an example where we issue a fetch; and that's an actual AJAX or a fetch request to the server, which is asynchronous. Nonetheless, we can treat that as if it was a synchronous call in our HyperScript. So we can write HyperScript that says "on click, fetch the click message, put the result into me..." And result - we can talk about that later. "...wait two seconds, and then put click back into me."

So you can introduce asynchronous code to your event handler, without having to do any craziness. Without any callbacks, without any promises... explicit promises, and without any annotations. So this I think is the really cool technical aspect of HyperScript. This is what I think differentiates it from a lot of other approaches. Alpine.js I think is a great piece of software, but this in my mind is one of the big differentiators between HyperScript and Alpine.js. Pretty crazy, huh? \[laughs\]

**Jerod Santo:** It is...

**Feross Aboukhadijeh:** Yeah. Is one way to think about it like you're kind of automatically putting in a "wait" keyword in front of every function call, so if --

**chg:** Yeah...

**Feross Aboukhadijeh:** ...it happens to be async, you'll just automatically await it for the user, without them having to think about "Oh, do I have to put a wait here or not?"

**chg:** Yeah, that's one way to think about it. It's promises under the cover. I can walk you through the code if you're interested at some point. It's a little bonkers... But it works. \[laughter\] But yeah, you could think of that as like everything's awaited. And the way I would say it is all the promises are resolved before you evaluate something, before you execute a given command and move on to the next one. There's not a spin loop or something like that. We're using the JavaScript promises API to make all that work, and the internals of HyperScript had to get turned inside out to make all that work... But it does. It's a miracle of miracles. It works.

So it lets you in write very clean (in my mind, very clean) asynchronous code, that is very close to what beginners, who don't necessarily wanna think about asynchronicity, would wanna write.

**Feross Aboukhadijeh:** \[01:04:01.15\] What's the downside of this approach? Maybe this how JavaScript should work. If we just magically, automatically awaited every function call, then what would be the downside of that? One thing I'm thinking off the top of my head is that meme that you can't launch two things in parallel. You can't create two promises and then await both of them, because as soon as you do one, it'll immediately await that one, and then it'll do the next one and await that one...

**chg:** Yeah, so if you wanna do that style of programming, there's a keyword... The one asynchronous keyword is an async prefix, where you can say on a command "This command is asynchronous, so don't block on it. Just evaluate it, but don't block on it."

There isn't right now in HyperScript a good way to say "Here are three things that I want done in parallel. Await on all of them, but wait till all of them are complete." And that's something that you can do with the promises API. So HyperScript - that's just not a use case that has been designed for yet in the language. But that's not the vast majority of usages of promises. Usually, we're calling fetch, or using Axios or whatever to get some data, whatever it is.

Similarly, if you have events that are coming in - so I add a class to an element, and now I wanna wait until the transition is complete... That's an asynchronous situation. So in HyperScript you can say "Add a class to me", and then you can say "Settle me." And that will listen for the transition to complete. That's an asynchronous callback, and when it completes, then HyperScript continues. So this lets you do that style of programming.

And actually, if you're willing to really get nerdy about it, there's a link to event-driven control flow, ill jam that in the chat.. which shows that this is pretty intense HyperScript, but there's a loop... \[laughs\] This is crazy; I don't even know if this is worth talking about, but... There's a loop that will loop until an event is received. You have two buttons, basically, to paint a picture... You have two buttons; you click on one and it'll start pulsing. It'll start adding and removing a class that makes it basically pulse red.

There's another button that'll send an event to that button, saying "Hey, stop pulsing." And the cool thing about this, the really interesting thing about this, is that the button that is pulsing will complete a pulse before it stops, because the repeat loop in the event handler on it completes a full loop before it checks if the event has been received.

So this is an example of event-driven control flow, that I think can enable some pretty interesting stuff. There are some really cool examples. They're not all up yet, but there are some really cool examples around this.

We have event-driven control flow, which is enabled by this async-agnostic runtime. It all just kind of falls out of it. Pretty interesting stuff. And what's a little unnerving about this is if you click the "stop from pulsing" button, and the button has just begun to pulse, it won't stop until it finishes that pulse. But that addresses a problem that you'll often see in web apps, where something will finish, and then immediately some animation or whatever just halts. So you get an immediate swap, or just this kind of flash of -- it just doesn't feel right. Well, with HyperScript and this async runtime, you can let that animation complete, and then go on smoothly.

**Jerod Santo:** ...and stop it. Yeah.

**chg:** Pretty intense. A little intense. Sorry, guys. I'm excited.

**Jerod Santo:** That's alright, fascinating stuff.

**chg:** I'm very excited about this.

**Feross Aboukhadijeh:** I like intense. This is really cool.

**Jerod Santo:** Yeah. Well, this has been an awesome episode. I like how we have kind of the practical, pragmatic approach to building web applications with HTMX, and then we have the experimental, intense, intellectual side, and whacky side, with HyperScript.

**chg:** Pretty whacky... \[laughs\]

**Jerod Santo:** So there you have, listener - both things to check out. Of course, everything Carson has referenced will be in your show notes, so definitely click through and check out all the things.

Carson, thanks so much for coming on the show and talking to us about all these concepts and what you're up to. It's cool stuff.

**chg:** Yeah, thank you. I appreciate you guys. I know this is a little outside the normal bounds of a JavaScript podcast, so thanks for listening.

**Jerod Santo:** You bet.

**Feross Aboukhadijeh:** Super-cool. Thanks for coming in and showing all this to us.

**chg:** Yeah, no problem.

**Jerod Santo:** Alright, thanks for listening, everybody. We'll talk to you next time.
