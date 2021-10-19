**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with JavaScript. We're gonna talk a bit about Web Components conferences and processing today. Cool, fun stuff!

**Rachel White:** Yaay!

**Alex Sexton:** Did you say Web Components conferences, so conferences specifically for Web Components?

**Mikeal Rogers:** Yes, that's the topic; those aren't two topics.

**Rachel White:** I love the conferences about radio buttons. \[laughter\]

**Mikeal Rogers:** Alright, so... Let's get into Web Components and custom elements, and things.

**Rachel White:** Shouldn't we say who we are?

**Mikeal Rogers:** Oh yeah, that's right, that's right... People don't know who we are. I'm Mikeal Rogers, we've also go Alex Sexton - say hello.

**Alex Sexton:** Hello.

**Mikeal Rogers:** \[laughs\] We've also got Rachel While, say hello...

**Rachel White:** Hello!

**Mikeal Rogers:** We just brought the pace way down. It's getting like smooth jazz pace now.

**Alex Sexton:** I actually think, Mikeal, that your lag is high today.

**Mikeal Rogers:** Oh really, is that what it is?

**Alex Sexton:** Yeah.

**Mikeal Rogers:** Okay.

**Alex Sexton:** Everyone else seems to be normal, and whenever we talk to you, it takes you a long time to reply.

**Mikeal Rogers:** I apologize. Alex, why don't you tell us what Web Components are, and what the whole deal is with custom elements, and what the hell is a Shadow DOM?

**Alex Sexton:** Web Components are the Web standards version of kind of the popular component-driven model that people like to develop web applications in today. So the best way to think of Web Components, in my opinion, is to think about the current web platform, and think about how the things are implemented behind the scenes.

In the past, we've had a button element - or a radio button element, or a checkbox, or a select menu - and in the really early days this wasn't true, but for the last long time, if you were to go look at the browser implementation of a select box or an input element, it's just HTML, CSS and JavaScript behind the scenes. It's implemented in the web platform, but it's behind this opaque thing called the button, or this opaque thing called the select menu. Because of that, there was this disconnect on what the browsers could offer you, versus what other web developers could offer. Because of this, we wanted to shorten and smallen that gap, and that's what Web Components are for.

Web Components are so you can make your own button, that has not quite an opaque of an API, but you can make your own components that are standalone that you can pull into a page and use just as if you were using a button or a select... You could use the Alex button or the Mikeal button, or the Mikeal select, or the clock, or the social widget component. So kind of like the React world or the Ember world where you're making these discrete components that have their own APIs and then using them as units of development - you can do that. It didn't necessarily come from that, it came before both of those were super popular ideas, but it certainly has taken a longer ramp time as the standards track normally does.

\[03:56\] We can get into some of the technical implementation details of how this works, but I also think you might have mentioned the Shadow DOM already, and that's really just the DOM that exists inside of the component, rather than to the developer once they're using your components. So if you think about the old button, technically there's a span and a div or whatever inside of the button, but that's not exposed to developers. In that same way, whenever you build the clock component, you don't have to expose all the different spans and divs and things inside of your clock component; it just is a clock, and it's not necessarily CSS-selectable from outside.

**Rachel White:** So is it just rendering these components in a cleaner way than having to append all of those other things that exist inside of the regular component?

**Alex Sexton:** Well, everything still exists. You could take away the idea of Web Components and Shadow DOM, and it would just be a larger DOM with a lot more stuff in it, with a lot more CSS scoping, and there's a lot more chance for bleeding together of certain things... But yeah, there's nothing super special about them which is why they're so important for the future.

Right now a lot of the React and Ember model relies on whole, massive libraries being able to run and execute prior to be able to see or use anything on the site, where these Web Components can. Since they utilize more of the web stack, the web stack can do a better job of rendering them instantly without as much work and execution of JavaScript and all that kind of good stuff. So it is more of the web platform... Which isn't to say that -- as time goes on, I think Ember and React can start to kind of merge their different strategies to where you can write React-like code and end up with Web Components, which I think is totally possible.

**Rachel White:** So I'm trying to read this as you go through, because I've honestly -- I hear the term Shadow DOM thrown around a lot, and...

**Alex Sexton:** It's a very cool word!

**Mikeal Rogers:** \[whispering\] Shadow DOM... You have to whisper it.

**Rachel White:** It's one of those things, like, if you ask me what the Shadow DOM was, I could make up a lot of stories about what it definitely isn't... The site that I'm looking at right now is from the developers.google.com site about the primaries in getting started with the Shadow DOM, and they're talking about Light DOM versus Shadow DOM, and they're showing an example that has a little bit more robust write-up or markup in it for the Light DOM version...

So with the Shadow DOM, are you even seeing the other components, if I was gonna use DevTools and inspect it just like out of the box?

**Alex Sexton:** Yeah, DevTools I think allows you to currently inspect Shadow DOM of Web Components, not of native browser components. The whole idea is that you can have a CSS class in there called button; it literally updates all the button tags, and you no longer have to have a super specific CSS class name added to that. I mean, you probably should - whatever. The whole idea is that it's completely scoped inside that web component; that way, everybody can style their own Web Components however they want and there's no worry about collision of those things.

**Rachel White:** Okay, I guess that does make a lot more sense of you're thinking of React...

**Alex Sexton:** Especially if you're pulling in components from other people. So if so-and-so styled this button and so-and-so styled this clock and whatever, in the React world there's a higher chance for collisions. Even the box model - one relies on the newer box model, and one relies on the... Things like that are going to all change.

**Rachel White:** \[08:06\] Cool, so why is this stuff important to know, for people that don't know what it is?

**Alex Sexton:** I think it's unfortunately a longer-term vision for the web than it would have been if people didn't make such good userland libraries to do similar things... I think there's this very similar world to where we live in, an alternate universe where React didn't come out and Ember didn't do the component version of their views, and Web Components really takes off.

I think Polymer and Web Components get confused a lot. Polymer is kind of like a library on top of Web Components that allows you to do a bunch of extra stuff, like the React and Ember libraries would kind of offer you, including building and fallbacks, and all sorts of fun stuff. But I think if w want to get to a world where the web works as well as native applications on bad internet connections in slow mobile browsers, then I think the Web Components vision is one of the only ones that literally can do that as well as a native application, because it is using native code in order to do the initial renders, and it can do layout better, it can do far less JavaScript execution before it can render... And all sorts of things. It's able to utilize the web platform in a much more efficient way, which means that you can serve a wider audience and have a faster, better experience.

**Rachel White:** Cool.

**Mikeal Rogers:** So you mentioned React and Ember, and a few people do stuff kind of like this, right?

**Alex Sexton:** Well, it's fundamentally different...

**Mikeal Rogers:** Yeah, but you can create a class and then you get a constructor that happened when you create these elements, right? Which is great, and you have ways to do that in all these different abstractions, but you didn't have a way to do it natively... Other than the CSS scoping stuff, which is brand new - you can't really do that very effectively with tooling; it's really hard... Are there any aspects of Web Components that actually just give you abilities that you just never had before?

**Alex Sexton:** People talk about element-level media queries instead of window-level, and the Shadow DOM can kind of give you an approximation of that, which is nice...

There are different lifecycle events that don't necessarily occur anywhere else, except for in these components. A lot of the things that are available to you outside now were created for the purpose of Web Components. The template tag was created for the purpose of this, as well as the Shadow DOM is separated from the Web Components spec, so you can kind of use it outside of Web Components, I assume. I don't know. It can land in browsers beforehand, so I assume you can.

Some things we already use are a part of that... I don't know. Some of it leaks back into the top level. I need to look it up, but I'm sure there are a few things.

**Mikeal Rogers:** Yeah, I'm actually some Shadow DOM stuff in a thing that I'm not using Web Components at all for, and it's really useful just for that element-scoped CSS stuff.

**Alex Sexton:** Yeah.

**Rachel White:** Yeah... \[laughs\] Are we done talking about Web Components?

**Mikeal Rogers:** So there was a question in the chat... "Did Google start this?"

**Alex Sexton:** I think while the Google people were the ones -- this all came out of the Web Manifesto, I believe... That was a large amount of Google people, and I think the core authors of this specification started at Google, but it is not a Google-only thing; it is a specification in the W3C that has passed and is real and is in multiple browsers, and things. So I think it is OF Google, but not solely BY Google.

**Mikeal Rogers:** \[12:03\] Right, right. I think you addressed the Polymer thing, where people tend to conflate this with Polymer... And Polymer IS a Google thing, very directly. But this is much larger.

**Alex Sexton:** I think one of the core problems there specifically was in the beginning no browser implemented Web Components, but you could effectively use them if you used Polymer... So for a while the only way to use Web Components was with Polymer, and I think that history caused this conflation, versus other similar situations that that didn't happen in.

**Mikeal Rogers:** Yeah, that's kind of funny thing though when you think about it, because one of the big benefits that they continue to talk about is that you don't need a bunch of JavaScript in order to do this... Like, you don't need this giant library, that's the benefit, and then people are conflating it with this giant library to do it before it was in the spec.

**Alex Sexton:** Yeah, I think it is pretty fundamentally different though... The size of Polymer is pretty different than the size of Ember or similar things... But also, you can get initial renders and working things before you have full Polymer execution. You can see the page because it's CSS and HTML, and the JavaScript hasn't executed yet, and that is, I think, a pretty fundamentally different thing that the other stuff.

**Mikeal Rogers:** Well, do you think then that -- like, we talked a bit about React and Ember eventually moving their implementations towards using Web Components - do you think that this is going to be something that we just change the way that we build our tools on top of them, or is it actually a new enough model that it's gonna change the tools that we build? Are we gonna build very different tools in React and all of that, in order to take advantage of this?

**Alex Sexton:** I definitely don't think that you could just take the current React and throw Web Components over the top of it, but you could take a very similar... Like React 16 (or whatever we're on) -- no, they have 16; let's call it React 20 - they could theoretically change a bunch of the API, and then be outputting different things at the builds, but it would be a pretty huge leap. I wouldn't actually expect it to really happen. It would be more like, some new person says "Okay, the initial renders for Web Components are insane, but I don't like writing Web Components. Here's this very Reacty model that can do these things."

One of the fundamental things that Web Components adds is the ability to do some of the data binding that some of these libraries do via DOM diffing and re-rendering every time. I think that is actually another interesting reason to use it... Not necessarily like a killer, because a lot of that's very fast and can get faster, but it's certainly an interesting thing where you can kind of bind two sections together. You can bind properties on attributes of the Web Components to the inside of the Web Components.

But yeah, I wouldn't expect that React or Ember ends up with a Web Component version, but someone would do the React for Web Components and it's called WeAct or whatever, and that becomes a cool, popular thing.

**Mikeal Rogers:** Interesting, very interesting. I'm trying to play out in my head how much of the web affects this. Like the way that you use Stripe, for instance, or I was using the Tito embed the other day... You get this JavaScript include, and then you kind of use this custom element, and right now it has to do all this crazy stuff to find that element and do a bunch of stuff after load... Is it really gonna change the model of how that kind of stuff is implemented, where when you're like, "Hey, include my custom element in your page" - is it gonna work really differently and a lot smoother than it does today?

**Alex Sexton:** \[15:51\] Yeah, I think there are HTML imports which I don't know if have made it into browsers yet... And there are a few things that make a lot of those things really cool. I have implemented a long time the Stripe.js credit card form as a web component just internally to try it out, and the amount of work that I have to do to style safely and do all the third party JavaScript things in the current world versus the Web Component world is pretty vastly different.

And the speed at which our component can kind of render and then be attached, versus execute the JavaScript and then be injected is also pretty different. If we know one thing about the performance of checkout pages is that everybody who's ever tested it is like "This matters a lot." So I think it could be a pretty good fundamental change in the direction of rendering, and I think that's what a lot of -- a lot of the cool wins are the modularity and the composability and the scoping and all those things that we've had trouble with on the web whenever you're building a larger application, and I think those will be the things that people think about more than some of this stuff.

The fundamental turn is that things can render and exist prior to JavaScript executing, so the server-side rendering isomorphic stuff changes in the way -- like, you don't necessarily need to do rehydration as much as you can... Just like render things as Web Components and then the JavaScript can run after.

**Mikeal Rogers:** What is rehydration? You just ran right over that one...

**Alex Sexton:** Oh, sorry. Rehydration in a server-side render... So the competition to Web Components in the world of frameworks these days is that you can get Node.js to render your entire page, and as long as that is a deterministic output, you can 2HTML it and then serve it as the initial load... So no JavaScript has run, it's just CSS and HTML, and you can see the entire page. None of it works yet, but you can see the entire page. And then because that same render function can then run once the JavaScript has executed, it can come up with the exact same deterministic DOM that Node.js did, and instead of killing the whole page and then re-rendering it with the client-side JavaScript, it can just kind of attach itself to the server-side rendered thing and say "We claim these elements as the ones that we would have rendered had they not already existed." Kind of like a re-render that occurs in React all the time; a basic property of React is that if you try to render something and all of it is still there, it's no-op, it's kind of the DOM diff. It's "What's the diff between this Virtual DOM that we've created based on all the data and the one in the actual window? And if there's no difference we won't do anything, but we'll kind of know that all these things are attached to all of our handlers and stuff like that."

That's what rehydration is... It says "We can just attach ourselves to a server-side rendered page without re-rendering it", and that is a pretty good -- like, if you need speed, if you're a content website and you need speed and SEO and all that stuff, you should absolutely be doing server-side rendering with rehydration.

**Mikeal Rogers:** Well, you just mentioned SEO, which means it's time for a break and we get off this topic... \[laughs\] So we're gonna take a quick break and when we come back we're gonna talk about conferences.

**Break:** \[19:30\]

**Mikeal Rogers:** Now we're gonna get into conferences a little bit. JavaScript has an amazing conference scene... There's a million little community conferences out there, it has really exploded in the last few years. We're just gonna talk a little bit about speaking at conferences, and if you're thinking about going to a conference, what to look for; if you're thinking about applying to speak what to look for, and maybe even a little bit about what it's like to run a conference.

**Rachel White:** I would say if someone is looking into wanting to start attending some JavaScript conferences, the best thing that they could do is go to JSConf.com. It's the JSConf family of conferences, and I'm pretty sure what that means is first there was JSConf U.S., and it was started by Chris Williams, and there's this whole family of other conferences, and it has a strict code of conduct where you're nice to everyone, there's no racism, misogyny, making assumptions about people, sexism... It's just super welcoming, it's really fun, it was always at a great location... And then as people started attending these conferences, they were like "Wow, it would be really awesome if we had this conference where I live!" So Chris started allowing other people to have conferences under the JSConf family, and the way that you would be able to do that is if you've attended a JSConf, so that you know how they run, you know how that runs, you're able to branch off.

Now there's like - I'm trying to count really fast - twelve that are JSConf\_WhateverCountryThey'reIn. There's a JSConf\_US -- well, there's not a JSConf\_US anymore for now... There's JSConf\_EU, which Mikeal and I will be going to - I'll be speaking - and there's JSConf\_AU in Australia... There's so many.

If you listened last week, Juan talked about JSConf\_Columbia... They're everywhere. And there's not just the JSConf namesake ones, there's also RobotsConf, there's JSUnconf, there's Cascadia, there's Empire... There's a lot of other ones that are under that umbrella, and it's usually 2-3 days of just really well-curated talks and workshops with a bunch of people that are like-minded. It was the first conference that I ever attended in 2014, and it pretty much changed my life due to the people that I met there, from seeing them speak, and the people that inspired me to go out of my comfort zone and try and do more with JavaScript robotics, and just try and be a better programmer. From there, here we are today... \[laughs\]

There's a lot of really awesome resources, and a lot of these conferences also have diversity sponsorship, so if you are from a marginalized group or underrepresented minority, you can often attend at a severely, severely discounted rate, often sometimes free.

**Mikeal Rogers:** That was a great breakdown.

**Rachel White:** Thanks!

**Mikeal Rogers:** I don't think that we could have done that nearly as well. Alex and I are both people that Chris helped out getting our events off the ground in that JSConf family. For me NodeConf and JSFest, and for Alex TXJS. But yeah, that's a great group of conferences... Even the conferences that aren't "JSConf family" are really directly influenced by that whole thing.

\[24:00\] There's all kinds of new events popping up all over the place, and you can really see the difference in the content and how people are treated... A lot of the code of conduct stuff that is now pretty standard in conferences really started with JSConf\_US a while back. Alex, do you have anything to add?

**Alex Sexton:** Me? This Alex?

**Mikeal Rogers:** \[laughs\] Yeah.

**Alex Sexton:** Yeah, sure. I have to talk...? Mikeal and I were both on staff for some of the earlier JSConfs with Chris, and I just wanted to share a story about -- I think it was in Arizona and it was the morning of JSConf, the first morning, and everyone had to come register. We were laying out badges and putting together bags for people to do, and I remember Chris and Laura scrambling to get everything right and putting everyone in their places, and then I look over and in the corner Mikeal has this coffee grinder Mason jar contraption, and he's just grinding his own coffee in the corner... \[laughter\] And he was just like "I can't help you guys until I'm done grinding my own coffee" and then pouring it over in this corner... That's maybe one of my favorite Mikeal JSConf stories.

Actually, maybe I have an observation that I don't know if it's true... It feels like the actual peak of conferences maybe occurred like two years ago, not now. Does that feel right? I feel like it was almost zero, and then JSConf\_US -- I mean, there was like Ajaxian before that, and some jQuery Camp, things like that...

**Rachel White:** So what you're saying is the decline of conferences started when I started speaking? \[laughter\]

**Alex Sexton:** I'm not trying to imply that, I'm trying to directly state it as fact. \[laughter\] No, I feel like there was kind of this explosion of conferences that was non-linear. 2010 was almost zero, and then by 2014 or so you had a ton of city-based conferences, and I feel like a lot of those have fallen off and now there's again maybe a little more specialized, like React Confs or different things like that.

**Rachel White:** Yeah, I think that it's definitely getting more specialized... I think there was one year when there was Cascadia and TXJS and JSConf\_US, and now we aren't gonna have Cascadia, we're not gonna have TXJS, we're not gonna have JSConf\_US, there's not gonna be a JSConf\_Iceland... There's only gonna be, I think, Dinosaur, there's the one in Omaha put on by the \[unintelligible 00:26:55.21\] there's the Techlahoma ones...

**Alex Sexton:** Techlahoma - they're a group. Since we've mentioned Techlahoma, they have like a family of different events. They give constant learning and meetups, as well as... Oklahoma - their conference isn't called Techlahoma, I misspoke, but you can look them up. Sorry, I interrupted your entire thing.

**Rachel White:** It's okay. I think that it's getting a lot more spread out, and there's not really any -- I mean, it's hard to put on conferences of that scale... I think that the closest that I've been to where I felt that really -- I mean, every conference that I go to is pretty much... They're all really great, but there's just something special that hasn't been matched for me aside from Nordic.js. Nordic.js goes all out, and it's a different environment obviously because it's not here in the United States, but it's great...

\[28:05\] I think that there's also a lot more speakers now. People realized, "Hey, people are doing that, I wanna do it too." I mean, that's what I did. I guess this is a good segue into how you can speak at conferences.

Jenn Schiffer was like, "Hey Rachel, if you wanna speak at conferences, you should just submit a talk", and I did, and it got accepted, so I had to build a robot... And then I spoke at JSConf last call, and it was awesome. I was like "This is fun!"

I think the best thing about speaking is being able to get people excited about something that they may not have been exposed previously, and inspiring people to try something new, or that they are capable of doing whatever it is that you're talking about. I think that there's this weird stigma that people that speak at conferences are a little bit like -- what's the right word that I'm thinking off...? Like we're special, or like it's something that is hard to achieve, but I don't really think it is, as long as you apply yourself and you're passionate about what you're speaking about.

**Alex Sexton:** Yeah, I agree. I also got into speaking via just the open section of conferences, where you don't even submit a talk... It wasn't a five-minute or lightning talk, but I think it was like a 15-minute style, just... People sign up throughout the whole day, it's a third track, and I think if you wanna get your feet wet, that's a really good time to go and try it. Then maybe speak at a local meetup, and then submit a talk. If you wanna just go slowly, absolutely, if you're interested and you think you can do it, then just submit.

I have a game I like to play - speak/attend/stream. We'll say three conferences - which one would you attend, and which one would you stream?

**Mikeal Rogers:** Oh yeah, good play.

**Alex Sexton:** Mikeal, you're up.

**Mikeal Rogers:** Well, you gotta throw the conferences at me, right?

**Alex Sexton:** Oh, I have to give you the three conferences? Okay... \[laughter\] Ajaxian 2009, the second Pirate Themes JSConf, and TXJS 2015. \[laughter\]

**Mikeal Rogers:** Oh, let me see here...

**Rachel White:** This is a horrible game...

**Alex Sexton:** So you're not interested...

**Mikeal Rogers:** So attend would be TXJS, because I'd like to just relax and enjoy Austin and not have to give a talk. Speaking would definitely be the early JSConf's, because there were just a lot of perks of being a speaker back then, even more than today probably. And stream - Ajaxian, because who gives a what...?

**Alex Sexton:** That was the only conference, that was the jam...

**Mikeal Rogers:** It was huge, though... The difference between in a thousand-person conference seeing a talk live and seeing it streamed, it's just not that big.

**Alex Sexton:** Yeah, but that was the first time you had John Resig, Douglas Crockford, Brendan Eich and one of the Andrew Dupont, all on the same stage, just arguing about frameworks or whatever...

**Rachel White:** That sounds terrible.

**Alex Sexton:** Exactly! It was the first time something that terrible existed, which is kind of like a car-wreck situation. I thought it was pretty magical at the time, even though I wouldn't attend it currently. 2009 was a different lay of the land.

**Rachel White:** I guess somebody asked about non-JS conferences, and I really haven't actually attended many non-JS conferences, so I'm gonna defer to you two. I've heard good things about OSCON and some other things like that, but...

**Alex Sexton:** \[32:02\] It's a pretty different beast, I think... There are lots of full-stack conferences, and the core language conferences of almost every language are usually pretty great. Ruby has some... I think a lot of the conferences in JavaScript that are great actually kind of stem from the style of conferences that the Ruby community -- and Chris has admitted as much that I don't which Ruby...

**Mikeal Rogers:** RubyFringe.

**Alex Sexton:** Yeah, RubyFringe is kind of where he was like, "Hey, this is a cool model." So I think a lot of the Ruby conferences are really good, as well as some of the full stack conferences. Go has a good conference (GopherCon), and all those things. I think there are lots of good community, and kind of the more open source(y) languages often have similarly valued conferences.

**Rachel White:** Yeah, I've heard excellent things about StrangeLoop, which is in St. Louis, and FullStackFest in Barcelona, and RevConf in Virginia, and a bunch of those other ones that don't really focus on any specific language.

I think that you can get a lot more interesting hybrids of talks when you have that kind of balance, even though I don't know, because I haven't gone to any...

**Mikeal Rogers:** So I would say that there's really kind of two classes of conferences that you really have to look at and treat differently. One is the community conferences that we've been talking about, which - the whole JSConf family is really like "developers in the developer community decide that they wanna do a community event for that community."

Then there are really huge events that are run usually by media companies...

**Rachel White:** Like the O'Reilly ones...

**Mikeal Rogers:** Or by Google, or somebody like that. They're very, very different, and if you're thinking about speaking, I would say that speaking at an O'Reilly event is more likely to maybe get you a job or to talk to people that will hire you, potentially, than a 200-300-person community event. But if you're looking to make friends and become more engaged in the community and really have a community impact, attending or speaking at the smaller community events is just a world different. Also, in terms of quality of content, the quality is much higher in the community event, because they don't have a bunch of sponsored talks that they had to sell in order to make the funding model work. They don't have -- look, me and Alex have been running conferences for a long time, and for a while, if you were running a JavaScript or a Node event, you were the only game in town; there weren't any media companies. So these huge companies would come up and they would give us a bunch of money, and they didn't really ask for all the stuff that they ask for now.

Now they don't sponsor a lot of the smaller events because there are these bigger events that are willing to give them a booth. We don't have booths at these conferences.

**Rachel White:** You know what? The bigger events are - hold on, get ready whoever is editing this; I don't know if this is a word I'm allowed to say... They're like such a circle-jerk. It's the same people doing the same stuff at every O'Reilly thing. Sorry, O'Reilly, just saying... If they're recorded, how are they gonna charge a grand for a ticket, and who is even going to those? Is it just other big companies?

**Alex Sexton:** I have some answers to that, having participated in some of that... So when a ticket costs a grand, people are not paying for the tickets. I think that is a fundamental reason why the audiences are very different at the two different conferences - it's people who often put up their own money to attend a community conference, versus people who's company have sent them to a conference to learn things.

\[35:56\] So if you're gonna send someone to a conference, you wanna send them to the most reputable one that you can find, and O'Reilly is a very reputable name in tech education. There are very big names on that ticket. And of course, those people give the same talk every time, because you can't give 300 different talks in a year if that's your whole job, or whatever.

So I think you end up with an audience that cares a little less because they're not invested, which isn't to say that there aren't tons and tons of people who care a whole bunch in those places... But I think the environment becomes different because it isn't a bunch of people who are necessarily all on the same page.

I want to be very clear that it's fine if you're a developer who goes to work, programs, isn't interested in spending all your own money in going to a conference, and just go do the things that you love more. I think it's perfectly acceptable and good to have the wide gamut. But I think one of the reasons the community conferences are different is because the motivation for going is not "My work is sending me here", it's "I wanna learn all these things myself."

**Mikeal Rogers:** "And I wanna meet these people..."

**Alex Sexton:** Right, yeah.

**Rachel White:** And I guess you're gonna get exposed to more passionate talks, versus pitchy talks, so that makes sense. I'm a jerk.

**Mikeal Rogers:** I'll also say that you would think that a thousand dollars for a ticket, and in some cases the O'Reilly events have like $100,000 for the Platinum membership as well... You would think that they were just raking in money and that's why a lot of the quality was really low, but on the organizing side, every time you go into a new 500-person bracket - when you go from 500 to 1,000 people, or 1,000 people to 1,500, you move away from a lot of different venues and catering options, and all of the things that you can do end up costing more money/attendee for lower quality.

Once you get to the size that like a Google Next is, where there's 10,000 people, those sandwiches cost $40, and they're terrible... And there's just no way out of it. You're locked into it because there's only three places on the West Coast that can hold you, and they know that they have you over a barrel.

So a lot of what we're talking about for the quality being higher for the smaller side is a lot of the funding side of it too, where you can make a lot better choices. If you do a 200-300-person event in Portland, you can get the greatest food in the whole world brought to the event. It's so good! But if you do a thousand-person event in Portland, your options are actually pretty slim and terrible.

**Rachel White:** Dinosaur.js did something pretty awesome last year for food, where they just rented a bunch of food trucks and had everybody walk to a big park, and it was nice. But that's a smaller community conference, so that's where you get that.

**Alex Sexton:** So if I had one piece of advice for conference organizers around food is be VERY careful of food trucks. Pretty much every food truck situation, including Mikeal's first foray into food trucks, ends up with a line that is not gone by the time lunch is over. So you really have to plan either a food truck that can pre-make everything and just hand things out to people, or get so many food trucks that they can handle the concurrency of enough people.

By far, the majority of food truck situations end up poorly, which is why I have avoided them at TXJS. Even though food trucks are delicious and it's a really good idea, it's very hard to manage. So if you're running a conference, be very aware of that problem.

**Mikeal Rogers:** So here's the tip - you have to find a food truck that also does catering. So if they say specifically that they also do catering, they don't just come and park there, then in their prep kitchen they know how to make a ton of something and then show up with all of it and everybody can eat right away.

The event Alex is talking about was NodeConf 2012, and we actually did two different food trucks, one of which was very good at that, and everybody ate and got out of there in time, and the other one didn't process the line for an hour and a half, and we had to push everything back.

**Rachel White:** \[40:04\] I'd like to circle back really quick to people that are interested and wanting to speak at conferences... So I know that in New York there's this really great thing that Tracy Hinds and Justin put out called Right To Speak, where people get together and they have abstract ideas, or just maybe even a few talk topics that they're interested in workshopping, and trying to help people flesh them out.

I would suggest if you are interested in speaking, don't do it unless you're super passionate -- not "Don't do it...", "Don't do it unless you're like..."

**Alex Sexton:** \[unintelligible 00:40:43.16\] Don't!

**Rachel White:** Don't do it unless you're actually really legitimately passionate about what it is that you're talking about, because there's nothing worse than somebody that's there obviously just because they wanted to go to a conference and they thought that they could speak because everybody else was doing it, and they get up there and it's just like the driest, painful thing to watch.

Aside from that, I would also suggest reading a lot of abstracts. Go on past few years of conference sites, see what the talks look like that people have written, see the tone that they use, tell the story that you're trying to tell... Don't just tell me what it is that you're going to teach me; I wanna know why you wanna teach somebody that.

I did some proposal reviews for Empire, and you would be so surprised -- well, you two wouldn't be so surprised, but everybody out there that thinks that they can't write an abstract... Let's say you get a conference that has 300 applications and there's maybe only 30 speaking slots; I guarantee you two-thirds of all of those submissions are gonna be terrible anyway, because it's people that are just like putting in a sentence where it's like "I want to talk about React components" or "I think it would be really neat to talk about currying", or something.

The people that actually put in effort are the ones that have a way better chance than people that are just throwing their hat in the ring for the sake of it.

**Mikeal Rogers:** Yeah... Before I kind of stopped organizing conferences (because I was kind of burning out on it), the main advice that I put in the CFP every time was "Tell me a story." It should have a beginning, a middle and an end. I don't need to know about the technology, I can read the docs for that... And a lot of the abstracts just look like an outline of the documentation. What I wanna know is "Why did you create it? Why did you decide to use it? What is that narrative that makes this a compelling thing to learn and to get into?" If you're just telling me what the documentation says, I could do that when I leave.

The job of a speaker is not to teach everybody in 20 minutes how to use something, it's actually to teach them why it's compelling enough that they would go home and continue to learn it.

**Alex Sexton:** Yeah, I think that's exactly what I was gonna say... As a speaker and as someone who chooses speakers, I absolutely would be fine if everyone walked away having learned nothing, except from being inspired to go learn more. "I saw the value proposition in X, and now I want to go read the docs. I gained enough motivation from that talk in order to go put in the work to actually learn it."

Anyone reading documentation to you for 20 minutes is not going to be compelling, and it's a waste of money for the most part. So I totally agree - definitely inspire people, give them the -- and I don't mean like slimy-wimy, "everybody is great, everyone is a special unicorn type inspiration." Those talks can be very good too, I'm not against those talks, but I mean really talk about why you're excited about something and how it changed things for you, or something like that... Or why it's important for the web, or something. I think those types of talks really go over much better.

**Rachel White:** \[44:17\] I wanna hear about the journey, not the steps.

**Alex Sexton:** Yeah.

**Mikeal Rogers:** That's a good way to put it.

**Rachel White:** Cool.

**Mikeal Rogers:** On that note, I think we can take a break now. When we come back, we'll get into the project of the week.

**Break:** \[44:33\]

**Mikeal Rogers:** Alright, this week's project of the week is p5.js. Why don't you tell us about this, Rachel?

**Rachel White:** Sure, so p5.js is a JavaScript (I'm gonna say) omage, because it's not a direct port of processing. I guess I have to start by telling you what processing is. Processing is this open source thing and an IDE that's super old - it's about 14-15 years old, I think - and it was made explicitly for people that were beginners in programming and visual artists to use something to make some really cool visualization stuff and graphics and art.

It's built on top of Java, it uses simplified syntax, and basically what it does is it lets you export your projects as desktop apps for either Windows, Mac or Linux. So you can't really show it on the web, though... It's like a standalone thing.

The power behind it is really great; it has great FPS, you can build some really robust things, but you can't do things on the web. So somebody build another port of it, which was actually John Resig and some other students, to make Processing.js.

Processing.js is a more true port of processing to JavaScript. You don't have to totally rewrite your code, you use Processing.js to take your processing files and be able to run it in HTML5. It uses regular expressions to convert the Java into JavaScript, and it lets you have some pretty mingled JavaScript that's not readable afterwards, but you get the same effect and it runs on Canvas.

So in comes p5! P5 is a really awesome, accessible library made my Lauren McCarthy, who was at NYU ITP and the Processing Foundation, which deals with Processing.js and a lot of other ports of processing to other languages. What they wanted to do is they wanted to make it so that people could do the same kind of things that you would do with processing, but a little bit looser written. So it's not gonna be exactly the same with all of the super involved animations you can do with your regular processing, but with p5 it lets you write more natural JavaScript to do some really cool stuff in the browser, involving a lot of shapes and interactions, and artsy stuff. It's all Canvas-based.

\[48:19\] There's a bunch of other plugins that you can get for it. There's the p5 library, which is just the regular access to the shapes and stuff, but there's also p5.dom, which lets you interact with HTML5 objects outside of the canvas. You can do video/audio/webcam input, text... I was messing around with the video one, it's really cool. It essentially grabs each pixel in the video and maps it to a drawn instance of whatever shape that you use and hides the video. It makes basically an animation of whatever video you give it to, but with shapes instead for each pixel.

There's also p5.sound, which uses web audio stuff, and you can do playback and effect a lot of the stuff on the canvas that you would build art with there. There's p5.serial, which lets you do serial communications with stuff and lets you interact with it with p5... There's so many. There's also bots, which was made by Sarah Groff-Palermo, who's a New York-based dev who's at Kickstarter...

There's speech, there's geolocation... There's just so much stuff that you can do, and the best thing for me is you don't necessarily even need to understand JavaScript to jump in and use it. I've seen a lot of people that are just starting out as game devs who are used to Unity and some C\# stuff and they heard that you could do some fun stuff with P5.

The reference material on the site is awesome, the examples are awesome... It's just really neat, especially for people that are interested in doing some more creative coding and finding out what they can do with Canvas.

There's another person who teaches at ITP named Daniel Shiffman who has a really amazing YouTube channel called The Coding Train, and they make video tutorials every week that goes from the beginning of basic p5 stuff to super advanced things like Perlin Noise, which is an algorithm that allows you to create true randomized noise for cool glitchy -- well, it's actually used mostly for like terrain generation. They're really good videos and it explains it in an accessible way. If anybody is interested in trying out that kind of stuff, I highly recommend checking out those resources.

**Mikeal Rogers:** ITP is so cool... Everything ITP ever does is just rad. Clay Shirky is still a teacher there... I've known a few people that have gone through there and done their program, and it's just this amazing mashup of code and art and thinking about social good... It's pretty rad.

**Rachel White:** Yeah. It's also very expensive, so if you don't wanna go to ITP but you wanna mess with the tools that people there use, p5 is a good start, three.js is a good start... Those are all good places.

**Mikeal Rogers:** Awesome. I'm gonna play with this later today, actually... I've been meaning to poke around with some art stuff.

**Alex Sexton:** The music notes on the back of the web page are pretty fun, too.

**Rachel White:** Yeah... People that are super -- this is like a challenge that I'm going to give... If you have never really tried to do anything artsy or you're just a JavaScript dev and you build web stuff all the time, I would love if you tried to make something neat with p5. Because if you know JavaScript in and out with your heart, then you should be able to do some really awesome stuff with -- a lot of p5 stuff is just iterating through objects to place shapes randomly.

\[52:11\] Please make something with it and tweet it at me, because I just wanna see what other cool things that people can use to do this. I also think it's a really good accessible library for people that are trying to try something new, and wanna try and make something every day... Because you could make something with this in like 15-20 minutes, just like a little code sketch, and it's gonna help you get used to regular JavaScript, but also a new library that makes pretty art.

**Mikeal Rogers:** Sweet. Alright, are we ready for picks? Do you have your picks ready?

**Alex Sexton:** Totally.

**Mikeal Rogers:** I hope you all do. I'll go first - mine is kind of a shameless plug, actually... I stopped organizing events a little while ago, because it was too much work, but I did now kind of take on this new event that we're trying out, called Slideless (Slideless.com). The idea is that no slides, it's a 15-minute talk that's really telling a story within a theme. The theme for this first one is "What is your superpower?" We'll have some great talks about that, without any slides, that people can just get up and do their narrative.

If you're interested in attending, it will be in San Francisco in July. Tickets are out now, and I'm still looking for a few talks, as well... If you have an idea for a talk on that team, get a hold of me.

**Alex Sexton:** My super power is calling Mikeal Rogers' bullshit.

**Mikeal Rogers:** \[laughs\] That's a really limited power. That requires me being around...

**Alex Sexton:** Yeah, it is unfortunate...

**Mikeal Rogers:** Very portable...

**Alex Sexton:** \[laughs\] My pick is a person, it's Mike West. Mike West is not that visible outside of the web app security world, but has a massive impact on the security of the web. I don't know if he's an official - I assume he is - of the Web Application Security Working Group, which is a W3C group... He kind of drafted a ton of the security stuff that currently is being added to the browsers in the last five years, including CSP and a lot of the cookie updates and header changes and things like that... Subresource Integrity, all these different cool security upgrades.

I would encourage you to both follow Mike West on Twitter, as well as follow the web app sec mailing lists, because they're not actually that crazy. I think they're somewhat followable, and that's pretty fun and cool.

**Rachel White:** Cool. My pick this week is a person and a book. Sarah Drasner released this book on O'Reilly - since I said so many nice things about O'Reilly conferences earlier, I wanna say nice things about this book, actually. I also apologize if I said her last name incorrectly...

She released this really cool book on SVG animations. I know that we briefly touched on SVG stuff on one of the other picks, which was like DataSketches... But if you were wondering "How do I make SVG animations really pretty? I want better UX implementations." Her book was released within the past week, and I think she said it's the number one new release for programming books on Amazon. It looks great, so if that's something that you have more questions about, check it out!

**Alex Sexton:** Awesome.

**Rachel White:** Now I'm gonna go eat a horse. \[laughter\]

**Mikeal Rogers:** And with that, we're all done for the week. Thank you all for tuning in. Rate us on iTunes, check us out live every week on Fridays. You can go to changelog.com...

Goodbye, everybody! Thank you very much!
