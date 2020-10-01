**Jerod Santo:** Caleb, thanks for coming on Maintainer Spotlight. Thanks for being an open source maintainer. Why don't you tell me about yourself and what you've been maintaining?

**Caleb Porzio:** Yeah, so first, thanks for having me.

**Jerod Santo:** You bet.

**Caleb Porzio:** About myself... I do a lot of development; there's a lot of outside things we could talk about, but the development-related things - I quit my job about a year ago. I worked full-time at a web agency; it's a Laravel and Vue and React shop, and... I don't know, I wanted to -- at first it was actually just to take a sabbatical. I just wanted a break from programming. And about a day into that sabbatical I got hooked on this project that's now Livewire. We could talk a little bit about that later. So that's my main project, and it's been my main project for over a year now.

And then Alpine, a little JavaScript framework package thing, kind of popped up al ong the way, and now that's another project. They kind of work together, but those are my two big projects. Then a bunch of little side things...

**Jerod Santo:** Yeah, I've found one of your side projects fun and interesting. Gitdown...?

**Caleb Porzio:** Oh, yeah. Yup.

**Jerod Santo:** So Gitdown is a PHP markdown processor, but it's actually not; it's actually just a facade for the GitHub markdown API...

**Caleb Porzio:** Yeah.

**Jerod Santo:** That was awesome. That's a nice little hack. So basically, you just treat it like it's a markdown parser, but it's actually going out and hitting their API, is that right?

**Caleb Porzio:** Yeah. It's awesome. Markdown parsing is historically annoying. Any of the processors -they mostly work, but then there's little things about them that just break down. And I think my standard for markdown is basically GitHub. I mostly use it inside of GitHub, so I'm really familiar with the way it processes markdown. And they also offer all of their styling -- GitHub Primer is their CSS framework.

**Jerod Santo:** Okay.

**Caleb Porzio:** So yeah, I've found this API, I kind of stumbled on it and I was like "Wait a minute... You can hit a public API, send it markdown, and it'll spit back to you HTML as if GitHub already formatted."

**Jerod Santo:** It's like GitHub-flavored markdown.

**Caleb Porzio:** Yeah.

**Jerod Santo:** All their features, and everything.

**Caleb Porzio:** Yeah. You can opt in or out of GitHub flavor, if you want... Yeah, so I used it, and it was so easy. It's definitely the easiest way to get some quick markdown parsing. I used it, and I thought I'd package it up, and... Yeah. But that was one of those -- there's lots of those little fun side things that I have no real plans or big visions for, they're just fun and helpful.

**Jerod Santo:** Absolutely. I loved your warning in the readme. You say "Warning. This package is a fraud."

**Caleb Porzio:** \[laughs\] Yeah... There's a couple like that.

**Jerod Santo:** \[unintelligible 00:03:47.20\] markdown to GitHub. It's like "Well..." It's good that it says that upfront.

**Caleb Porzio:** \[00:03:56.14\] You know, they always start out being a fraud, like it's something simple that I do, where I'm like "I'll put this in a package, because I would want it in a succinct little package. I wouldn't wanna copy this GitHub gist, or something." But it's so simple. People will be like "Wait a minute, that's all the package is?" But then it always grows, as people find new optimizations and features and whatnot. They end up earning their own stripes.

**Jerod Santo:** Mm-hm. So I love that you took a sabbatical, or you quit your job and you wanted to get away from programming. Then you took basically one day off, and then Livewire begins. Are you just addicted to the game, or what's the deal?

**Caleb Porzio:** Yeah, I think a big part of it is addiction to the game. I thought that I would -- so we go down to Florida every spring... Well, it started last year, so for the sabbatical I thought this is the perfect break; I'm going to Florida for two months... I'm from Buffalo, so it's very snowy and \[unintelligible 00:04:47.06\] in Buffalo around this time of the year. And we went down to Florida, and I brought this stack of books... I brought a box of books, because I thought "This is gonna be it. This is gonna be real ME time. I'm gonna read books, I'm gonna fish, I'm gonna hike...", all these things. And I read three or four pages of one book the entire trip. I think I just have these hopes -- I don't know... But I love programming, and there's always a new challenge or a fun thing to dig into.

**Jerod Santo:** Yeah. That's me when I travel. I always bring a book with me when I travel, and then basically it's just like "Which book do you wanna carry around the entire trip?", because I'm never gonna actually read it. I finally get to my hotel and I'm so exhausted, and I just flip on the TV and fall asleep.

**Caleb Porzio:** Same thing. I gave up on the traveling-with-book thing. It's like, podcasts... All sorts of stuff for traveling, and I'm always way, way over-prepared for content.

**Jerod Santo:** Right. So let's talk about Livewire. I'm not very familiar with the Laravel community. We've done a couple shows over the years on Laravel, but for those who don't know what Livewire is - this is your biggest open source project. Tell us what it is, what it does, and why you began it on a sabbatical.

**Caleb Porzio:** Yeah, so Laravel - a great analog for Laravel is Rails. So if you need a mental framework - Rails, or even... I mean, Rails is definitely the closest, but Django, or ever Express... Any back-end framework.

**Jerod Santo:** Web framework, yeah.

**Caleb Porzio:** Web framework, yeah. So Livewire - it's a very unique thing, and nothing exists exactly like it. It got its inspiration from this project called Phoenix LiveView. Phoenix is another back-end framework for Elixir; it's kind of the Rails for Elixir. And I saw -- this is what spurred it, I saw a little blog post. They released this demo of Phoenix LiveView at ElixirConf, or whatever, and the concept was they used WebSockets... Or maybe I'll just describe what I saw that kind of turned me on.

**Jerod Santo:** Okay.

**Caleb Porzio:** It was like a back-end template that had echo statements in the back-end template, like you see in back-end templates. But then there was also this syntax for listening for a click on an element, and firing a method, but it was a reference to a back-end method. So it was super-weird... It looked almost like Vue.js or React, or something in the DOM, but instead of calling a JS function, somehow it called a controller method, and manipulated some state that presumably exists on the back-end, and then re-renders the template in the back-end and then swaps it out on the front-end. So it's this weird blurring of lines between back-end and front-end. And they used WebSockets to keep a persistent connection on the back-end.

So I was just floored by this idea. A lot of the things that I've been preaching, or the things I've been campaigning for in my career as a web developer -- I guess the arch of my career as a web developer was like \[unintelligible 00:07:55.11\] jQuery, CodeIgniter, BASIC stuff, vanilla PHP. Then I got into Laravel and started ramping up a little bit. Then I got into Vue.js, so I went hard into the JavaScript community and was basically building SPAs with a Laravel back-end. So that's kind of the peak of the arch.

\[00:08:14.08\] Then the slope down is me realizing that in many ways I wasn't better off, with all the complexity I'd taken on... So I started listening to a bunch of DHH stuff, Basecamp stuff, a lot of the people who are preaching about basically keeping it simple and stepping back from that. So that's like the second half of my career arch, stepping down from a lot of that craziness... That perceived craziness; it's not crazy for everybody... But sort of stepping away from the SPA architecture.

This was perfect timing. I was already embracing the back-end. I was going back to the back-end more, stepping away from the SPA. Then this came along, and I was like "Oh, my gosh. This is everything I ever wanted." It seemed like a "have your cake and eat it, too" type thing.

**Jerod Santo:** So you saw Phoenix LiveView, which is still very new, and is still either Beta, or out... I can't remember if it's like out-out, but still under heavy development...

**Caleb Porzio:** For sure.

**Jerod Santo:** And you thought "Okay, Laravel needs something like this."

**Caleb Porzio:** Yeah, exactly. I wanna do this in Laravel, so I'll build it. I'll see what happens in it. It really was just a proof of concept. It took me probably a day of fun hacking, setting up the WebSocket connection... It was pretty basic, actually. And I tweeted it out, this little proof of concept, and something like "This thing blew my mind, blah-blah-blah." And people really dug it, and it became kind of a mini-mini-Twitter sensation in our tiny little corner of the internet.

Then I was like "Well, I should turn this into --" People were like "Are you gonna package this up?" I was like, "Yeah, probably... But it might take me a week or two." Which is so funny...

**Jerod Santo:** Yeah... Or a year, or whatever it took... Yeah.

**Caleb Porzio:** I actually didn't launch anything publicly for another five or six months. That's a really interesting story in itself, that I'd love to go into... But yeah, I wanted to build it, and I did it, and it ended up actually taking a very different form. So it behaves different; it has some fundamental differences to Phoenix LiveView, that kind of emerged over time as we started using it, and making decisions.

**Jerod Santo:** So it's kind of like when a movie is inspired by a true story. Whenever they say "Inspired by a true story" you know this is a movie of fiction. It's not based on -- even "based", there's certain rules around what they can even say. "Inspired by" and then "based" on a true story... And then there's like an actual true story. So this is kind of like "Inspired by Phoenix LiveView", but by the time you were finished, or into production, it was different in the way that it goes about achieving similar goals... Is that what you're saying?

**Caleb Porzio:** Yeah. I used to reference Phoenix LiveView a lot, talking about... Because like "Oh, this is Phoenix LiveView for Laravel." But yeah, I don't do that anymore. It's so far from being anything but inspired.

**Jerod Santo:** So the tagline is "A magical front-end framework for Laravel." If you can describe what it does today without referencing Phoenix LiveView, how would you do that?

**Caleb Porzio:** Yeah... So all the taglines are garbage. I haven't updated them in a while. I need to really put my head to that. When it first started, it was all magical and new to me, so all the taglines are weird. They're like "A weird framework, that's magical, and will confuse you" and whatever. But yeah, so how would I describe it...? I guess there's two ways of approaching it. There's the magical bewilderment way, where you look at a back-end template that can somehow interact with the front-end and the back-end at the same time. So somehow -- like I described earlier, it's as if it's Vue.js, but you can call a method on the back-end, and everything will re-render, and magic will happen. That's one way of looking at it.

\[00:12:15.20\] For me, it's really more of like a framework, like an Ajax framework. It's a framework for making calls to the back-end, getting HTML, and changing what's on the page, but providing lots of helpers for that. So I guess it's still something I have a hard time explaining quickly, but if you're interested, we could walk through how you could arrive at Livewire naturally.

**Jerod Santo:** Let's hear it.

**Caleb Porzio:** Okay. So have you encountered the server-fetched partials pattern, or this pattern of instead of sending Ajax requests to get JSON, you send an Ajax request to get HTML, and then swap only a part of your page?

**Jerod Santo:** Yes.

**Caleb Porzio:** So this is the fundamental concept behind Turbolinks, pjax, and Intercooler... A bunch of these frameworks that do this thing. And if you go on GitHub and you open up the dev tools, and just look at the Ajax requests, everything you do on GitHub does this - it sends an Ajax request, and instead of getting JSON back, it gets a little snippet of HTML back, and then swaps it into the page in real-time.

**Jerod Santo:** Right.

**Caleb Porzio:** So I started using that pattern in my day-to-day development to kind of cure some of this JavaScript complexity, to keep the templates on the back-end... I started doing that a lot, and basically that is the fundamental concept behind Livewire, except instead of you having to go "Alright, here's a button. I'll use jQuery to register a click-listener, so that when this button is clicked, I'll send an Ajax request to get a new template of..." - let's say that it's a Refresh button on a list of invoices, or something. To get the new list of invoices in HTML, and then use .innerHTML to swap it into the page. Livewire just does all the wiring for you, and gives you a declarative API where you can say wire:click=refresh, or something. And then you'd have a method in the back-end called Refresh, that would manipulate some state and re-render the template.

**Jerod Santo:** Well, you're speaking my language, because we at Changelog.com use Phoenix on our back-end, and we actually use Turbolinks with Phoenix.

**Caleb Porzio:** Oh, nice. Nice.

**Jerod Santo:** So I'm not just familiar with the style of writing web apps, but I'm also pro. I think it's a great way to do it for many, many use cases.

So you've been working on Livewire, you've got lots of people interested in it, you have people using it... You also have Alpine.js, which you mentioned... I'm curious though, because you've quit your job a year ago, so I'm wondering - where is the money coming from at this point? Are you living on savings, are you building customer things with Livewire? What's the deal?

**Caleb Porzio:** Yeah, that's a great question. I will say that I maybe barely consider myself in a sustainable place. This started out as a sabbatical. I've been really in the financial independence and that whole community for a while, so I've already kind of taken on the habits of somebody reaching for early retirement. So I cranked up my savings when I was working full-time, and I was just kind of piling money away in investments...

And my standard of living is pretty low. My wife and I both -- we don't have any school debt, we share one car, we rent a small apartment... There's a lot of things about our life that just -- we don't need a ton of money. So there's that, there's also the pile of money sitting there, and so I went to take the sabbatical and thought "I mean, I can live for two months on no income, easily." So I did that, and then it just kept going, and at some point -- so I decided I'll never pull from savings. I'll never go into my investments. Anything I put in for 401K or anything like that - I'll never do that. If I get to that point, I'll get a job, or something.

So a) my wife is a photographer, so she brings in some money, where before it was always just kind of on the top, because I had the developer job, and now it's--

**Jerod Santo:** \[00:16:20.18\] Right. You were saving that, but now you're kind of living off that...

**Caleb Porzio:** Yeah, we're living off that partially. And then I started freelancing... But I didn't wanna jump into big projects that detracted from the work I was doing, so I started advertising... How would you describe it...? Almost like freelancing as a service, or a-la-carte freelancing.

**Jerod Santo:** What do you mean?

**Caleb Porzio:** I basically reached out and I was like "Alright, I wanna do mentorships an hour or two hours a week, where you're just getting on a call with me and I help you with what you're doing. You ask me questions, and stuff like that." So that was the first phase of freelancing, and I charged some -- I think I charged $150/hour. So it was a decent rate, and I just wanted extra money, but I didn't wanna really get into a real project. I didn't want something that's really gonna take my brain away. So I started doing that, and I still have some of the same mentoring clients. So I do a lot of little pocket--

**Jerod Santo:** Are these professionals? Are these people that are trying to get into programming? Who can, at an individual level, spend $150/hour for training?

**Caleb Porzio:** Yeah... So generally, they're professionals, and they're Laravel developers. I guess I've been fortunate enough that over time I've built a bit of an audience in the Laravel community. So it's kind of been my thing for a while now. So I've spoken at three Laracons, I'm speaking at two this year... So I have a little bit of a name in the community, and I've already done a lot of educating publicly, and I work for Titan, which is one of the top Laravel shops...

So that really was the power behind this, was that I already had this audience. So it wasn't just beginners coming to me, going "How do I program?", it was like, people who listen to my podcast and know how I think, and are already in deep on projects, whether it's for a company, or they're solopreneurs, or whatever...

**Jerod Santo:** Are they using Livewire, or are they just using Laravel?

**Caleb Porzio:** Now they're mostly using Livewire... \[laughs\] It's funny how that happened...

**Jerod Santo:** \[laughs\] That's because you're mentoring them, and you're like "Here, try this... This is awesome."

**Caleb Porzio:** I know... When I started it, Livewire wasn't in a place for me to recommend anybody use in production. I mean, I do mentoring for really anything, it doesn't have to be Livewire, and I really don't explicitly push Livewire on any of my clients. I do push Alpine. That's interesting, why I do that, but... Yeah, I'm mostly mentoring people who are already professional developers and have real production Laravel applications, yeah.

**Jerod Santo:** So what's Alpine, real quick?

**Caleb Porzio:** If you're familiar with Vue.js, it's very similar to Vue.js. So if you know how to use Vue, you basically know how to use Alpine.

**Jerod Santo:** Why not use Vue then?

**Caleb Porzio:** Yeah, right. So I had described how I started going a little bit away from the frontend-heavy world, and back to the back-end... Simple, little JavaScript sprinkles around my apps, to do little things, but not writing the entire template in Vue or React. So I'm pretty hard on that; using Turbolinks, and then vanilla JS for the rest... But I ended up in this place of like, okay, I don't wanna buy-in fully to a front-end framework, because -- I mean, that is it; when you're in a front-end framework, you've bought in. It owns your entire front-end, so you can't mix -- it's very hard to mix things. Your entire DOM is rendered from a virtual DOM, so you don't have control over it anymore. You've surrendered control to their paradigm... Which is powerful, but for me, I was stepping back from that.

\[00:20:00.24\] So that was \[unintelligible 00:20:00.24\] there's tons of power there; declarative UIs, where you can just set some state, you can manipulate state in your UI or UX... And then on the other end, I was in vanilla JS sprinkles land, and I don't know, I just felt like it wasn't sufficient. It was like I was back in the jQuery days for me, where I'm registering click handlers everywhere, and manipulating DOM elements, and it felt really imperative. It felt imperative, it felt brittle in a lot of ways, and just annoying. Not expressive. Vue is so declarative; you have a template -- and React, too. You have a template, and you can see in the template how things are attached to state, and then you can just worry about changing the state.

So I had felt kind of like in this middle place. And when I had reached out to people on Twitter, and been like "This is what I want. How do I get it?", most people said "Well, Stimulus is that." I'm sure you've encountered Stimulus...

**Jerod Santo:** Yeah, we had David on the show when he announced Stimulus.

**Caleb Porzio:** Oh, no way. Nice.

**Jerod Santo:** So I haven't used it, but I've spoken to him about it in some detail.

**Caleb Porzio:** Okay. Yeah, so Stimulus - if you read the docs, or the splash page, it's pretty much exactly what I'm describing. It's like, keep your HTML -- or what is it... Some behavior for the HTML you already have, or something like that...

**Jerod Santo:** Yeah, they're really good at their taglines, aren't they...

**Caleb Porzio:** Yeah, they are. Their messaging, their philosophy, everything is just spot on. So I'm already a big Basecamp fan, DHH fan, whatever, all those things, so this seemed right up my alley. And his philosophy on monolithic architecture and all this stuff I'm just totally on board with, and I wanted this to be the silver bullet. But for me, it felt -- well, I guess I don't wanna trash the framework, because a lot of people love it, but it just didn't feel good.

**Jerod Santo:** "I love everything DHH does, except Stimulus.js." \[laughs\]

**Caleb Porzio:** Honestly, that's pretty true. Yeah, for some reason -- it feels really imperative. It also feels like I don't even need it, because I end up writing a bunch of DOM manipulation myself anyway... So I don't know; it's a light framework. It's very unopinionated, it's very light...

**Jerod Santo:** Are you speaking of Alpine now, or Stimulus?

**Caleb Porzio:** Sorry, Stimulus. Light in the sense -- it's actually not light kilobytes-wise, but it's light in the sense that you end up having to kind of create your own patterns for things.

**Jerod Santo:** Gotcha.

**Caleb Porzio:** So anyway, Alpine is in my mind the perfect balance between those two paradigms - between this vanilla JS sprinkles in your backend-rendered app, and this all-SPA, Vue or React or Angular front-end that is a huge, huge ecosystem to buy into. So I wanted to keep all the good of that end, which is (like I had mentioned) declarative templates, and reactive state, and everything, but without the virtual DOM, without separate JS files for every component, without all that stuff.

So Alpine basically is an in-HTML framework. You mostly use it directly in your HTML, with attributes. And the attributes are prefixed with x-. So you declare an Alpine component with x-data, and then you pass in a JSON object, and that's your data for the component. So everything in that little DOM tree right there is all related to that data... And you can add on little x- attributes and interact with that data anywhere inside that component.

So if you're familiar with Vue, the analogy is the data property of a Vue component. Basically, I'd realized I want Vue, but I just want the data property, and I don't need anything else, and I wanna keep all the template stuff, so I can listen for \[unintelligible 00:23:47.01\] so you can toggle something on and off. Or v-bind an attribute, like a style attribute or a class attribute.

\[00:24:00.10\] So Alpine - you have x-data, and then you declare some state; let's say "show:false", that would be your state for the component. Then you could have (let's say) a dropdown, like just a div with some content in it. You could add x-show, and then -- well, you would pass in the state, so "show". In this case it's x-show=show. I should have used DIZ open, or something. So then you can add a button, and on that button you could say "x on click show=true" or "show=not show". So yeah, you can listen for events and manipulate the state, and then you can also declare DOM representation based on that state, if that makes sense.

**Jerod Santo:** Mm-hm. Well, it makes sense to me, because I'm staring at the readme. I'm not sure if it makes just in audio, but listeners, if you're confused, go to the show notes, grab the readme, and it will all make sense. This does seem pretty cool.

I was looking for the package size; minified and gzipped - 4.64 kb. Now, there's a sales pitch right there that talks to me.

**Caleb Porzio:** I know... Yeah, the first version was less than 3 kb. It's grown since then, but yeah, it's so slim. I wanted something that was just -- I felt like the things I wanted weren't that hard to accomplish. I felt like the things I wanna do, I don't need a virtual DOM, I don't need a template compiler, I don't need any of these things. I was like "What if I implemented Vue, but using native DOM APIs?" What if I just crawled through the DOM and I used .getAttribute( ), or querySelector( ), stuff like that, to get data out of the attributes. And then if I wanna set data, I can use .value=, or .classless.at, stuff like that.

So Alpine internally -- I don't know if there's any dependencies. There might be one dependency to make getting something out of an object easier, but there's no real dependencies. It's just me using my knowledge of DOM APIs to do what I need to do. So it ends up being a lot more lightweight than something like Vue, that literally has to take your entire HTML template and parse it out into an abstract syntax tree, build up this observable object thing, and then maintain virtual DOM diffs, and all this stuff that I just don't have to do.

**Jerod Santo:** Well, fact-check true. I'm on your package JSON; you have some dev dependencies, but there's an empty object there in your dependencies list... So Alpine - no dependencies. Very cool.

**Break:** \[00:26:50.11\]

**Jerod Santo:** So Caleb, the thing that caught my eye of what you've been up to - because like I said, I'm not deep in the Laravel community... And I'm now excited about Alpine, but I did not find Alpine until just now...

**Caleb Porzio:** Oh, really?

**Jerod Santo:** Yeah.

**Caleb Porzio:** That's funny. I think whoever reached out to me from the Changelog -- I don't know, maybe I just assume it's Alpine now. That's funny. I thought that this interview was basically because of Alpine.

**Jerod Santo:** You were incorrect, sir.

**Caleb Porzio:** That's so funny.

**Jerod Santo:** So I reached out to you, and it had nothing to do with Alpine, it had everything to do with Sushi. So this is our Maintainer Spotlight series, and I am very keen on new models of open source maintainer sustainability... And what I came across was Sushi. And I'll just say it again; our audience is like "What does this have to do with food?" No, it's a repo called Sushi, on your GitHub. And the thing that caught my eye was this package is sponsorware. I saw that and I was like "Huh. Sponsorware. What-what?" First of all, Sushi is what you call "Eloquent's missing "array" driver." I assume Eloquent is like an ORM, or something.

**Caleb Porzio:** Yeah, it's Laravel's ORM.

**Jerod Santo:** Okay. So it's a PHP library... But then it says "This package is sponsorware" and then you said -- oh, it's updated. You updated your readme.

**Caleb Porzio:** Yeah, I did.

**Jerod Santo:** Okay, so here's what I grabbed... This is not longer true, but it did say "Currently, this package is only available to people who sponsor me on GitHub. Once I have a total of 75 GitHub sponsors, I will make this package fully open source." And then it said "26 more sponsors to go" in parentheses. It sounds like you've hit your goal, because...

**Caleb Porzio:** Yeah, I hit it a while ago. I didn't update the readme... Imagine that. I hit it in like two days. Yeah.

**Jerod Santo:** Awesome. This is interesting. Right now, Sushi - you go there and you see the source code, and there's a sushi.php... I'm assuming beforehand it was just a readme. Tell me, first of all, about this idea of sponsorware. You talked about how you're trying to find ways of becoming sustainable without necessarily going to get a job again... And I'm wondering if this is a brand new thing you made up, or if there's other people doing this... It just seems like a new model that I hadn't seen before.

**Caleb Porzio:** Yeah, this is invented, but not just by me. My co-host on my podcast, No Plans to Merge, Daniel... We did a whole episode on just open source sustainability, basically. Our podcast is really informal, and we really just pick a stance, and the other person usually picks the other stance, and we just kind of hash it out, for the sake of hashing out an idea.

So my stance was there are tons of agencies and companies who are benefitting directly from open source software, and even advertising themselves as shops that write in that software. And the people maintaining the software are broke, and the agencies don't pay them any money. They're just rolling around in money, and these open source maintainers are rattling a tin can, begging for money... And this is funny, because I'm usually not one to take up mantles like this, but because I'm in this position, I totally feel it. I totally get it now that, "Oh, my gosh! It's really, really hard to make money in open source."

It's mostly you begging people, hoping that your projects gets big enough that an enterprise/something picks it up and either hires you, or maybe eventually you'll have a conference that you can sell sponsorships to, you can have logos on the docs... Or, really the most viable option, is educational materials; selling an eBook or a course. But I'm in this position where I get it now, and I'm like "Who's got time to make a course?"

**Jerod Santo:** Yeah. It's a whole other job, right?

**Caleb Porzio:** \[00:31:53.21\] Like, I'm buried up to my eyeballs in GitHub issues and PRs and everything... Yeah, shouldn't the work I'm doing right now justify the payment in itself? So that was sort of my position. It was like "Alright, Daniel, let's argue this. I think that there's this crazy thing where nobody's paying these open source maintainers, and I'm in that place right now, where I'm kind of living unsustainably... But I don't wanna be the one to go on Twitter and be like "Hey, everybody should pay me money."

So we started talking about some different ideas, and this really emerged from that discussion. There was a moment in that discussion where I was talking about Sushi, which -- that's kind of a funny package as an example for this... But I was talking about Sushi, and like "Yeah, I think I'm gonna open-source it..." So I posed to him this problem, I'm like "I like open source. I love the open source movement. I love everything about it. And something about charging for software and not making it open source feels weird to me. I've benefitted so much from people sharing projects..." So I don't wanna just say "Hey, this package is only available to my sponsors. It's one of the rare packages that I just keep to myself." I could do that, but something just felt off about it... And I'm restricting the growth of it. There's so many reasons that that's just not satisfactory. Every time I come to that decision in my head, I go "You know what - I'd rather not have the $200, or whatever, and I'd rather just everybody use it. I don't know..."

**Jerod Santo:** Right.

**Caleb Porzio:** When it comes down to dollars and cents, I'm never like "Yeah, it's worth the thousand dollars a month." It's like, it's not worth it. So I kind of posed to him this problem, I feel like any of the non-open source options are no good for me. And then the open source option as well. If you say "Hey, this is sponsorware. You have a moral obligation to be a sponsor if you use this." Nobody's gonna do it. That's just how it works. People just don't do that. Very few people do.

**Jerod Santo:** Not enough to drive sustainability across the open source ecosystem. There is some, but it's not gonna move the needle, so to speak.

**Caleb Porzio:** Yeah. So he came up with this, he was like "So what if you didn't --" He compared it to another -- I don't actually know the product, but let's just say Massdrop. Are you familiar with Massdrop?

**Jerod Santo:** No.

**Caleb Porzio:** Okay. I'm barely familiar, so I was hoping you were familiar, so you could check me on this...

**Jerod Santo:** \[laughs\] Sorry.

**Caleb Porzio:** Let's just pretend this is how it works... Or maybe Kickstarter, or something, I don't know; this idea that you don't release something until you have a volume, critical mass...

**Jerod Santo:** I was thinking about like a Kickstarter, kind of... You're basically pitching an idea, right?

**Caleb Porzio:** Yeah, exactly.

**Jerod Santo:** In your case I guess it's a library, so maybe you already had the software written, and you just kept it.

**Caleb Porzio:** I did.

**Jerod Santo:** Yeah. But ostensibly, you wouldn't even need to do that. You could go on your history and your good name, and say "Here's my idea for an open source library."

**Caleb Porzio:** Yeah.

**Jerod Santo:** Actually, I think Yehuda Katz did that a few years ago with a Kickstarter on some sort of a Ruby packaging thing, and he had a successful Kickstarter campaign. This kind of reminds me of that.

**Caleb Porzio:** Kickstarter is a good analogy. Yeah, so basically he had proposed that... Like, "What if you kept it just to sponsors until you reached a certain threshold? And then at that threshold of sponsors, or monthly income, or whatever, you release it open source?" And it was one of the ideas that felt like it came out of the clouds. I was like "Dude, that's it. That's exactly it." It's perfect, because it really answers all the questions for me. It checks all the boxes. It's still open source, so at the end of the day it'll be an open source project. If it's open source, it will be sustainable, because it will have already earned its keep... And yeah, and I get to make money. So I get to make money, and I get to have open source stuff. So I thought it was a great idea.

**Jerod Santo:** It's interesting, because the actual sponsorship goes to you, the person; it doesn't go necessarily to Sushi, the project... But they are backing you in order to open, allow you to open-source Sushi. This is GitHub sponsors you're using, so how many sponsors did you have when you first put up Sushi as sponsorware?

**Caleb Porzio:** \[00:35:57.22\] Yeah. I'll run you through the hard numbers and then we can talk causation and intent, things like that. Also, I wanted to note that there is tons of nuance in this whole open source payment discussion. That's why we did that podcast, because it's like "Well, what about maintaining the project, and not the first person who started it?" We can get there.

**Jerod Santo:** Right.

**Caleb Porzio:** Here's the brass tacks numbers for this little experiment. So my sponsorship tiers are $9 -- well, right now they're $9, $99 and $250/month. And $9 is - you get nothing.

**Jerod Santo:** \[laughs\] You get nothing and like it.

**Caleb Porzio:** You get nothing, you're just contributing to me... That's funny -- listen to my language, "You get nothing." You get nothing in terms of those perks that you're supposed to--

**Jerod Santo:** No additional things.

**Caleb Porzio:** Exactly. But you get the software I write every day. $99 is like the freelancer, or whatever, and you get a logo on the frontpage, and then $250 is you get a logo on every page of the Livewire docs and two hours of consulting... Which is actually a wicked deal and probably a mistake; we don't have to get into that.

So when I did this, I had 21 total sponsors, I think. I think I had one $250/month, one $99, and the rest were $9. So I did this, and originally on the podcast Daniel said "Yeah, make it like 40 sponsors as your goal", and I was like "40? That seems a little bit steep... But I don't know. Maybe."

So after the podcast, when I actually sat down to implement all this stuff, I realized "I've gotta just go for this. I've gotta go for it." 40 is not gonna move the needle that much for me. So then I thought "I'll do 50." And I actually wrote 50 in the readme, and right before I sent out an email, I threw 75 in. I was like "You know what - change it to 75." So I did that, and we hit it in -- I think I hit 75 in probably 24 hours.

**Jerod Santo:** Oh, wow.

**Caleb Porzio:** Yeah. So I have a pretty decent email list. I think that was really the main reason why this worked so well... And the idea was -- it was a pretty good idea, and it already had like 1,200 likes on Twitter, this little tweet of the idea... So there was already an audience ready for this. But yeah, I moved it from 21 to 75, and my monthly -- when I go into the GitHub Sponsors dashboard, the monthly number was $577/month, I think, was how much I had in GitHub Sponsors. I think by the end of it I had -- I don't even know... But now I have $1,900/month.

**Jerod Santo:** That's significant.

**Caleb Porzio:** It is. In a few days, I basically made like 15k for the year, on a small project that took me -- oh, man... I mean, it took me two hours to write the first version... I mean, total hourly is just so small for this small project. It's a one-file project. It literally is one file.

**Jerod Santo:** I saw that. Sushi.php. There it is.

**Caleb Porzio:** It's one file, it's just a novel idea, and it went from something that would have made me zero dollars, to something that contributed almost 20k to my income. That's not true; maybe between 10k and 15k. It was basically - I'll just say conservatively- a $10,000 endeavor that just kind of popped into our heads and then landed in my lap.

**Jerod Santo:** I would say that's a success story.

**Caleb Porzio:** Yeah, it felt like it. And it does, yeah.

**Jerod Santo:** Yeah, that's a pretty quick turnaround. Talk me through the marketing logistics of this. So you'd already put out the sushi idea and people liked it, so you already knew there was some interest around that.

**Caleb Porzio:** Yeah.

**Jerod Santo:** And then you turned around and you sent an email to your mailing list that said basically "Okay, I'm writing Sushi. If you want me to open-source it, I've gotta get to 75 GitHub sponsors." I'm wondering how much of this may have been because of the novelty of the idea. Because there's some of that... Especially that a lot of your backers might be indies and devs, and like "Oh, cool." Obviously, you can't necessarily quantify all this, but I'm just curious, how did you actually pitch this to your audience, and I'm wondering how much we could rinse and repeat this and have success for the people?

**Caleb Porzio:** \[00:40:12.04\] Right, yeah. So there's a lot of factors here. To give more details, the email list was 3,000 people... Which is a decent list, at least for me. That's my generic email. I've resisted segmenting my email list, so it's basically one giant list of people that I send an email to every so often, that are generally interested in the things that I do, and are generally in the Laravel community and aware of those things. And on Twitter I have like 10,5k followers. Actually, I had less than 10k before I did that tweet. I gained a bunch just from the tweet.

So the original Sushi tweet had 1,200 likes, which is probably in the top five tweets ever for me. I think it's worth mentioning that it's--

**Jerod Santo:** And this was just pitching the library, right? Not the sponsorware.

**Caleb Porzio:** Yeah, this was just the idea. It wasn't even a library. I just wrote this little thing-- it's just a library, yeah.

**Jerod Santo:** "What if I wrote this", right?

**Caleb Porzio:** Yeah. So I think it's worth mentioning that it did resonate strongly with a bunch of people... Like, above average. It wasn't my average idea, it wasn't my average project; it was something--

**Jerod Santo:** It wasn't Gitdown.

**Caleb Porzio:** It wasn't Gitdown, exactly.

**Jerod Santo:** \[laughs\]

**Caleb Porzio:** Gitdown would not have done this.

**Jerod Santo:** Right. Fair enough. That's good to know.

**Caleb Porzio:** So there was that. So I sent out that email -- and emails convert really well for things like this, and that's definitely an important note. I think if I just went on Twitter and said "Hey, this is sponsorware", it wouldn't have had the success that it had.

I have a tiny bit of experience with this sort of thing, launching something to an email group and seeing how that works. And this is how that worked.

**Jerod Santo:** Moving forward a little bit, because I think that does help color -- I think if we look now, you're at 83 sponsors. Now let's think about rinsing and repeating. So you've done this with Sushi, it's open source, everyone got access to that. Imagine doing this again. You'd basically just come up with a new idea, or write some new software and keep the repo private. Or I guess the repo has to be public, but the source files in there. Because there's a readme, and stuff.

**Caleb Porzio:** I kept the repo private.

**Jerod Santo:** Oh, you did?

**Caleb Porzio:** This was all minimum effort. I'm really glad I got to try this out without really caring about the project. I cared so little about this project I named it Sushi.

**Jerod Santo:** \[laughs\] I love that.

**Caleb Porzio:** It was one of those naming decisions where I was like "I'm not gonna stress. I'm just gonna do the first ridiculous thing I think about."

**Jerod Santo:** Well, the repo had to be public though, because I found the readme and it said "This will be open-sourced when I hit 75 sponsors." So the readme at least had to be out there, right?

**Caleb Porzio:** The readme wasn't out there, no. You found it when the readme was stale and it was public.

**Jerod Santo:** Oh... So I thought the readme was part of the marketing.

**Caleb Porzio:** No, so the marketing was all back-channel, emails and Twitter.

**Jerod Santo:** So you could do a thing where you actually create the repo public, open source, and just keep the source code out, and let the readme be part of your marketing. You could even have readme-driven development. You could have the API out there, everything except for the code.

**Caleb Porzio:** Yeah, right.

**Jerod Santo:** I thought that's what you had done, because I found it after you'd open-sourced it.

**Caleb Porzio:** That's almost an even better idea. That's something I thought of, but it was just so last-minute that I didn't worry about it... But you're right. And also, this idea is so simple. It's one of those cool ideas that's actually super-simple. The value in the idea is the idea, not the implementation... Where like Liveware it's both.

**Jerod Santo:** Implementation is pretty straightforward.

**Caleb Porzio:** Yeah, the implementation is simple... So I thought if I release basically my full vision implementation, like somebody would just write it for themselves... And in general, the community I'm in is nice enough to not just do that, but... But yeah, so what I did was -- keeping a repo private and open to only a few people is pretty tough, actually. The only free way to do it, like free and easy way, is adding people as contributors on the project, to your private repo.

\[00:44:08.24\] So I made the repo private, I added people as contributors... And so they actually had push access. People could do anything they wanted in the repo, but again, they're nice enough to not... But I just took all my sponsors, and every time I got a new sponsor, I literally copy and pasted them into the contributor's thing on GitHub. And then when I reached to 75, I just hit Make Public. So it was just simple and easy for me, I didn't have to deal with anything. But you're definitely right, having a readme, having docs, things like that, something that's like a marketing page for your project before it goes public is really nice.

I also wanna say, an important thing is that I gave the sponsors the software right away, and I think that's a big deal.

**Jerod Santo:** So even when you are at 75 -- you started at 25, so sponsor number 26 comes in, and they don't have to wait for 75. That would be the worst thing ever. Because I was thinking, what would be the threshold where it's like "I need 250." I'd look at that and be like "Well, you're never gonna get there, so I'm not gonna..."

**Caleb Porzio:** Right. Yeah, there's so much weirdness involved with that... Like "Oh, what if it takes three months? I paid $40, and the next guy--"

**Jerod Santo:** I'll wait until it gets closed, and then I'll pay...

**Caleb Porzio:** Yeah, right.

**Jerod Santo:** So I think that actually is required, and some brilliant aspect of the mechanism is everybody who sponsors gets access right now.

**Caleb Porzio:** Yeah.

**Jerod Santo:** And then when we hit the threshold, everybody gets access.

**Caleb Porzio:** Exactly. I think that's really key to the idea.

**Jerod Santo:** Yeah. So if you were going to rinse and repeat, let's say you come out with a new idea...

**Caleb Porzio:** I'm planning on it.

**Jerod Santo:** Oh, you are.

**Caleb Porzio:** I've got the idea. I'm already starting to talk about it, yeah.

**Jerod Santo:** And what's it called? Kale?

**Caleb Porzio:** It's called Project L.

**Jerod Santo:** Project L.

**Caleb Porzio:** This is one of the things that I've sort of done over time now, is like -- I punt on naming projects, because I always regret naming something too early. Livewire was originally Laravel LiveView, and then it was Lightwire, then it was... It took a while to get to Livewire. When I wrote Alpine, I wanted to punt on everything not important, so I called it Project X. So now all my projects are basically Project and then a letter. So this Project L is totally unnamed, and it's live -- it's a full app; it's my idea of the common denominator of all web apps built, what I would believe perfectly - like, what I deem is perfect, or at least really well thought out - in Laravel, with Livewire and Alpine. With full tests, everything. Totally a full-on app that you can have access to, read the source and go "Oh, I need infinite scroll" or "Oh, I need a data table" or "I need a date picker." Well, go to Project L and see where Caleb does that--

**Jerod Santo:** Yeah. Like a reference implementation of all the basics.

**Caleb Porzio:** Yup. Which to me is really the most valuable thing for a project. Docs are great, but I wanna see examples...

**Jerod Santo:** Same with me.

**Caleb Porzio:** Yeah. So it seems like kind of pushing that to the extreme, it's like "Why don't we just make the entire app, and that's the example?" So anyway, that's Project L, and I'm working on that in the background, and sort of tweeting about it as I go, little screen shares, and tips, and things like that. And my current plan for it is sponsorware, basically. I'm speaking at Laracon online at the end of the month, and so at Laracon online I'll release 1.0 of Livewire, and I'll release Project L only to sponsors, and I'll set a threshold and I'll tell everybody "It's open to everybody when I hit this threshold." And it'll probably be a pretty high threshold because of how much value you would get from it and how much work I'm putting into it.

**Jerod Santo:** Do you have a number in mind?

**Caleb Porzio:** The first one that popped into my head was 150, but that honestly might be low.

**Jerod Santo:** Yeah, that's less than double at this point.

**Caleb Porzio:** Right. Project L was the kind of thing that could be valuable enough that people -- like, forget about sponsorware. People would just gladly pay $10/month to get access to it. A decent amount of people. So yeah, the next number that popped in my head was 250, but then I'm like "That's a lot..." But who knows?

**Jerod Santo:** Yeah.

**Caleb Porzio:** The nice thing with all this is...

**Jerod Santo:** \[00:48:10.15\] You don't have to get to the threshold to be valu-- like, the fact that you give each person access means a) you don't have to hit that 250 to get value from yourself. It's not like you're waiting for 250, and then you hit the threshold and now you get your money, or now you can do your thing... And then b) each person doesn't have to wait for 250 either. They're like "Alright, I'll just pay for $10, or the $99 if I wanna be a big baller. Or the $250 if I'm a big-big baller." But that 250 threshold - you could set it out a ways and not really... It's not a huge risk to do that, I guess is the point.

**Caleb Porzio:** Yeah, it's really not at all. In fact, with Sushi, that was kind of my thinking. It was like "Alright, I'm gonna set it at 75. If we don't get there for a month and everybody forgets about this, fine." Everybody already has the software. And then when I do some other sponsorware that has a higher threshold, when we get to 75, I'll just be like "Oh yeah, by the way, Sushi is public, everybody, if you care." And then it'll be like another round of advertising for Sushi; it'd be like "Oh, cool. We forgot about that. But nice. Sponsorware pays eventually." So that's kind of the cool idea - I could set this to 250, and let's say we don't get there for five months; I do another project, and that gives it the steam to get there. You know, it's like this one number--

**Jerod Santo:** Yeah, it's additive.

**Caleb Porzio:** Yeah, yeah.

**Jerod Santo:** This seems like a really nice model for indie developers with many small(ish) projects and existing audiences of some kind.

**Caleb Porzio:** Yup.

**Jerod Santo:** I think people with less audience, maybe with one large project where they can't spin off new ideas very often, would struggle with this.

I'm curious, in your experience so far, have you had any blow-back, anybody say "This is a lame idea" or "I don't like you, Caleb"?

**Caleb Porzio:** Not a single person. I always get at least a hater or two on pretty much anything I do, and this-- I didn't hear any haters. Definitely not. It doesn't feel like a paywall. People get backlash on paywalls all the time, especially ones that started out as open source things, or whatever... But it just doesn't feel like a paywall, so people aren't that mad about it. They're like "Oh, well..." I don't know. No, I haven't gotten any negative reaction to it at all.

It's so perfect for me, because I think I kind of suck at every other monetization model. I know I'm good at building software. That's something that I'm good at, is building useful software, I guess. Everything else just seems like a gamble, and I don't wanna gamble on something unless I know it's gonna work, so I'm always like "Should I try this thing? Yeah, it's not worth the barely-any-money I'm gonna make. I'll just keep releasing things for free."

Honestly, this is the easiest and most reliable -- I think it's gonna be really huge, at least for me, and I hope for other people like me.

**Jerod Santo:** Well, many listeners of this show are maintainers like yourself, and I am sure -- because this sounds like it has been... Maybe if not a home run, at least a triple. This has been something that -- you know, we haven't found too many models that seem to be easily reproduced and working really well, without (like you said) a bunch of additional work. So either you become a marketer, or you become a support team, or you become a writer of documentation and help, or you become a mentor, or you become an entrepreneur and start a support business around it... Every single monetization strategy -- almost all of them require "And now I'm a businessperson. Well, I really wanted to try open source software..."

**Caleb Porzio:** I know.

**Jerod Santo:** \[00:51:56.14\] And so I'm sure that many of our listeners are gonna give this a try. And to the listeners out there, if you do try this, let us know how it goes.

**Caleb Porzio:** Yeah.

**Jerod Santo:** I think iterating an idea and trying it in different environments... "Oh, it doesn't work so well for me" or "It worked even better. Here's what I did" can really just help push the needle for all of us.

**Caleb Porzio:** I think worth mentioning - there's two real changes in perspective on the whole open source sponsorship thing that I had that led to this, that I think are worth mentioning, and I think you kind of touched on a little bit... First one being I switched my brain to realize that the software that I write is the value. That justifies money. So I'm not necessarily even saying there's an obligation or a responsibility. I think there is, but what I'm saying is that the software I write is where the value is, and when I write things in my perks, like "Get a free sticker" - which I did; I started that and realized "Nobody cares about the sticker, and now I have to ship all these stickers..." I just removed the stickers and I was like -- even that notion; perks are nice, and honestly, people need -- that's where sponsorware comes in. People need some incentive to sign up. They're not just gonna reflect to themselves on the value they derive from your open source software and hit that Sponsor button. Some will, but that's not gonna do it.

So for me, I changed all my language. I removed the sticker perk, I removed most of the perks, so that it was pretty blatantly obvious on my page that what you're doing is supporting me and the software I write. I also avoided language like "Buy me a cup of coffee", things like that, that suggest that this is just some side thing... I even avoided things like the opposite of that, like "Feed my family", because that also -- like, what if I make way more than what you need to feed a family? ...now I'm being disingenuous. Like, no. The work is what justifies the money. It's not that I have some obligation to make -- I'm not a pastor who has an obligation to not make too much, basically; or that people might think that, or something. Like, no. I'm making software that's valuable, and if I end up making a million dollars a year off GitHub Sponsors, I don't wanna feel guilty about it... So then I think it's fine, because I'm providing that much value to you.

So first it was a language and mental change for me. It was like, switch the language from "This is all side stuff, Patreon-style, buy me a cup of coffee" to like "No. I'm giving you valuable things, you're paying me for that. That's the transaction." So that was one shift, changing that language. Does that make sense?

**Jerod Santo:** Oh, absolutely. I'm looking at your sponsorship page now - we'll put that page in the links for anybody who would like to use Caleb as a model for what they are up. And I will say the $9/month individual perk is access to Sushi - so there it is, software, right? Here it is, use our software...

**Caleb Porzio:** Yeah, I've gotta remove that now, because everybody can access it... \[laughs\] Thanks for the heads up.

**Jerod Santo:** Yeah, everybody has that one. There you go. $99/month perk is logo/name/link listed on the readme and Livewire landing page. This is for a freelancer/startup. So again, this is not like "Buy me a cup of coffee", this isn't sending you stickers; this is like -- there's some business value there for them. And then $249/month - the perks are logo name listed on every single page of Livewire docs, and then two hours of Livewire consulting. So that one does have more of a quid pro quo, so to speak.

**Caleb Porzio:** So the $250/month is broken, because it defies everything I just said.

**Jerod Santo:** Yeah, so you need to update your tiers a little bit. But I really like what you've just said, and I think that is an important thing to remember - we're not out there panhandling for spare change, and we're not here to trade extra things. The tier system and the perks system always kind of rubbed me the wrong way as well, because... Especially on Kickstarter, you see all these perks - or on Patreon - and I start thinking "Man, they're gonna have to send out 25,000 T-shirts", or whatever it is.

**Caleb Porzio:** It's so much work, yeah.

**Jerod Santo:** It's so much that you're just building for yourself.

**Caleb Porzio:** I know that that is the fundamental change. I already do the work.

**Jerod Santo:** Right.

**Caleb Porzio:** \[00:56:06.12\] The $250/month tier to at least caveat why that exists with the two hours... Well, a) because I do want money, and that's a way that I can build up that. Just since I've launched Sushi -- so I have Livewire behind me, so that's worth mentioning, that it's not like all these people... I don't think I would get a $250/month sponsor for Sushi, just so everybody knows. But for Livewire, heck yeah. I've gotten like three -- I think three new $250/month sponsors; maybe two, I don't know. Which is a big deal. Those are the ones that really move the bottom line for me. And I thought "Well, yeah, so $250 is actually a deal. It's less than I charge for freelancing." For two hours of freelancing it's $300 for me. And it's a small amount. It could derail me from my trains of thought, and things like that, if I pile these up. But my thinking was - you'll notice that it's Livewire consulting. So it's consulting on a project that I built.

So my mind was like "Alright, I could use the extra money, and it will plug me into real people using my software", which is super-valuable. If I'm spending 8 to 15 hours a month working with real people, who are using my software in production in enterprise-style situations, that's huge. I would want every maintainer to have that. I would want every project I use to know that the maintainer is working with real people in the trenches. So that was kind of a reason why I did that, and why it seems off... But that's the justification behind it.

**Jerod Santo:** There is one aspect... I agree with that. I'll add to that and say that when you get a new agency or business at $250/month sponsoring you for Livewire, them being successful with Livewire is foundational to that continued sponsorship. If they end up not being able to get it going, or it doesn't bring them benefit, they're gonna switch to something else and they're gonna cancel their Caleb sponsorship perhaps... So you helping them be successful is an additional thing that's at play there, so I kind of like it. Maybe you just take out the per-month and you say "I'll give you six hours", or give them a flat number, or something...

**Caleb Porzio:** Oh, interesting.

**Jerod Santo:** ...so you can get involved with them, but it's not like now you're basically -- because you actually put a cap on your time at that tier. Because you only have so many two-hour sessions a month that you can actually divvy out before you are basically a consultant.

**Caleb Porzio:** Yeah, definitely. That's a really good point. If it was like just six hours, and there's your pool of sponsor time, it would communicate something else. It would communicate "You're not paying me for my time all the time." It would be clear that you're not paying for my time. The time is an added benefit of you committing to the project at this level.

**Jerod Santo:** \[00:58:50.23\] Exactly.

**Caleb Porzio:** So yeah, I do like that. It's definitely something I have to think through. So the second change -- the first change is the perks thing, and whatnot... The second change was -- and this is another Daniel one. He's good at this stuff.

**Jerod Santo:** You should be paying Daniel on the monthly.

**Caleb Porzio:** I know. \[laughter\]

**Jerod Santo:** Shout-out to Daniel.

**Caleb Porzio:** He works at the agency that I used to work at... Which means he's rolling around in money. No, I'm just kidding... \[laughter\] So his suggestion was "Change your language..." So my tier language was -- usually it's something like coffee, and then the next one is like Netflix, and then the next one is like... You know, it kind of goes up from there. And I forget what mine were. I don't remember what mine were. But you know, you're tempted to make it like "The smally, the mediumy, the biggy", or name it after like a fish, or something like that...

**Jerod Santo:** You're a fan, you're a hardcore fan, you're the biggest fan ever...

**Caleb Porzio:** Yeah, that's what it is. And he was like "Change the language to make it an expectation..." So rather than "How much do you want to pay me a month?" it's like "I'll tell you what I think your responsibility is to me, based on your position." Basically, if you're a hacker like me, you don't need to pay $100/month. $9/month is great. If all of us hackers did that for each other, that would be huge. But if you're a freelancer and you're using Livewire - I'm communicating that now just in the tiers.

If you're a freelancer and now you're looking at this and you're going "Well, yeah, I am a freelancer", you're not just seeing like "Yeah, $9/month? Great. Easy." You're going "The individual." Maybe I should call it "The hacker" even, or "The independent", whatever. And then the second one you would see "Freelancer." And I've already gotten response like this. People have even communicated with me that this works without knowing they're communicating that to me, by saying like "Yeah, I'm a freelancer..." I emailed somebody to say "Hey, can I have your logo to put on the site?" They a $100/month sponsor. And they said, "No, I don't need it. I don't need the recognition. I'm a freelancer and I use Livewire, so I'm giving you $100/month." I was like "That's great."

So that was a change... And then the big one was like "If you're an agency, you should be at this higher tier." I had somebody who was sponsoring me at $100, bump up to $250, basically because of the language change, where they went "Yeah, okay. That's right. I'll respect his expectation", I guess.

**Jerod Santo:** Well, those are some great insights. Caleb, thanks so much for talking to me today and sharing this experiment you've been doing. And all the awesome open source listeners, check out Livewire, Alpine; check out Gitdown, it's kind of cool... And definitely subscribe to whatever Caleb's up to to find out when Project L comes out. He's been teasing that relentlessly... We're all excited for it - reference implementation of all these things... I think that's a great idea, and my guess is it'll be a hit as sponsorware, as well.

Caleb, thanks for joining us. This has been very insightful, and a lot of fun.

**Caleb Porzio:** Awesome. Thanks a lot, Jerod. I appreciate it.
