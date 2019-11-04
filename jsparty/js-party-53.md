**Jerod Santo:** Welcome back, party people. It's Jerod here, back again; two weeks in a row you get to have me as MC, but don't worry, I'm not the only panelist on the show. We also have Kball in the house - what's up, Kball?

**Kevin Ball:** Yo, yo! Excited to be back.

**Jerod Santo:** Hey, it's been a while. What have you been up to?

**Kevin Ball:** Breathing smoke over here in California... So if you hear me sneezing and coughing, that's because we're literally breathing smoke. I'm inside, but it's still bad.

**Jerod Santo:** And for the listeners' sake, you are relatively safe in your current home in position, correct?

**Kevin Ball:** Yes. The fires are a good couple hours away from me, by driving... So I should be fine. Just breathing smoke at very unhealthy levels.

**Jerod Santo:** Well, we are happy to hear that at least you are safe, if your body but maybe not your lungs. We have an awesome guest today, a UX engineer at Google, and kind of an indie dev. This show came out of the episode that I was doing with Feross about BitMidi, and on that show I mentioned that we rarely get pinged by indie developers or people who have cool projects that wanna get them seen by others. We are most often pinged by recruiters and PR people and representatives for CEOs and such things of startups, and a lot of token projects, as you can imagine... And in light of that, Adam was listening to this show - Adam Argyle - and emailed me and said "Hey, I've got a thing, let's talk about it." Adam, first of all, thanks for joining us on JS Party.

**Adam Argyle:** Absolutely! I'm so stoked to be here. Y'all are so cool! This is awesome!

**Jerod Santo:** Well, thank you for that. We think you're cool as well, that's why we invited you on. In fact, you had a very cool demo on stage at Chrome Dev Summit. Tell us about yourself, tell us about your work, and we'll get into [VisBug](https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en), which is your project that we're talking about here in just a few minutes... But let's start with you, Adam. Tell us about yourself.

**Adam Argyle:** Yeah, cool. I've just been building apps in this industry for a long time. I was hacking on websites before Flash and Flex came around, and I jumped on that bandwagon. I was building all these big, robust Swifts with robot legs and MVC patterns back in the day, and I got pumped on Swift's native platform, so I was pushing Flash apps onto your iPhone... They were not very good, but I was doing it anyway. \[laughter\] And I'm just a web fanatic, so I happily pivoted into the web, and I've been kind of going along with everybody else. I wrote a bunch of jQuery stuff; I still like jQuery. I wrote a bunch of Backbone; I'll write Angular 1, I'll write Angular Infinity, I'll write React - I don't care. And that's kind of why the tools I build are as web components. If you ask me what I wanna use, I wanna use the least amount possible.

\[00:04:15.04\] So yeah, I'm a UX engineer on Google Cloud. That's kind of a cool role. It's probably worth a whole other conversation about what that even means... But here's a little secret - this demo and this tool I built has kind of becoming a dev realm on Chrome. So you're probably not too surprised, as I'm an outgoing weirdo that's passionate about the web, and I'll be focusing on UI and CSS, so I'll be the first person that's like "CSS is cool! Hey, let's build stuff with CSS! Watch me move boxes around." Y'all think boxes are hard to move, and I'm like "No, they're fun!" So that's kind of where it's going, where I've been in a decent amount of short time. That's pretty good, I think.

**Jerod Santo:** Very good. Excited about that new position... It definitely seems like you are right in there as you call yourself an outgoing weirdo, which we appreciate.

**Kevin Ball:** Yeah, I was gonna say...

**Jerod Santo:** Yeah, I love that.

**Kevin Ball:** That's perfect for our show: "Outgoing weirdo who loves the web."

**Jerod Santo:** Yeah, really. Can you come back every week...?

**Adam Argyle:** Yeah.

**Jerod Santo:** We saw you on the stage at Chrome Dev Summit. First of all, tell us about that. Let's talk about Chrome Dev Summit. Give us maybe even a quick report of what news came out there... We know that your tool, VisBug, was part of one of the keynotes, but surely there's a lot going on, so can you do the Chrome Dev Summit report in 90 seconds or less?

**Adam Argyle:** Yeah, I'd love to. That demo - I got asked to do that demo last week, and that was crazy. The demo gods blessed me; I was practicing... That was crazy; that wasn't supposed to happen. The talk was supposed to happen with Jason Miller, and that was going great. Then I was supposed to have a booth in the forum, and that went great. And honestly, this tool is so weird... I mean, I call it Designer Vim sometimes; it's not as complex as Vim, but it has the same mentality. It's modal. You switch to a different tool and your home row changes. In this case it's not exactly your home row, it's kind of the arrows in your manipulator commands... But it's really similar that way. So I was like, there's no way people are just gonna be like "Yeah! Keyboard!" I thought for sure there was just gonna be tons of like "Okay, where's the panels? Where's everything that I'm used to? Where's the GUI that I can click up and down on an arrow?" If I had built that stuff, I would have never had this tool done in like five months.

So I've only been working on this tool for like 5-6 months, started out tiny... Anyway, I ended up pitching it to some people on the Chrome team, I was like "Where's the designer tools?" and they were like, "Yeah, we've been there. We tried that." I was like, "Okay, can you send me what you did?" And they were like, "Okay..." And they sent me all these old files and all these old videos and all these old design sprints... Brilliant work. They were doing exactly what they were supposed to do, but they failed in a couple of really interesting ways, and they sent this email like "Hey, yo, if you can solve this, we're interested." I was like "Whoa...! I have an opportunity. People have tried something and they failed..."

Anyway, so I was driving home one day, and basically the massive problem was -- among other issues, the biggest one was the documents in flow. If you're grabbing corners of things and moving them around, it's unpredictable; you don't know what could happen. So you'd have a user experience moment where it just went instant jink... And it was like turbo-jink; it would add a 250 margin to something, and that was just like, "Well, okay. That's not gonna work." And I was just driving home and I was like, "Man, the arrow keys are each side of a node. Why don't I just start there? Up adds margin to top, down adds margin to the bottom. How far can I run with this keyboard thing...?" And it turns out that little keyboard scenario - there's a matrix of possibilities, and it turns out each tool that it's geared towards, the matrix is fitting really well. So I pitched higher and higher up at Google, and I eventually pitched to Dion Almaer who was the first person to recognize what I was going for, which was a simple tool.

\[00:08:07.28\] Many engineers who'd see my tool, they'd go "Well, why not make a design tool?" or "How do I get the code out?", which is -- not that these aren't valid questions, but they're basically like... In our industry, we reward complexity more than we reward simplicity. And I get it, because complexity is really fun. It's shiny. We're like moths to complexity, I feel like, as engineers. So what I wanted to do is -- I've been a design lead before, I've been a product lead, I've been a front-end lead... I make a lot of decisions as a front-end designer; I want designers to make them. I feel like they're the better team to be making these decisions anyway.

I'd seen these patterns where I'd sit down with a designer, and I love this, because they always bowed to me like I'm some magician... But they'd be like, "Can you increase the font size on that thing two pixels?" And I'd go over to my code and be like "BAM!" and then Browsersync would live reload it on their page, and they'd be like "This is crazy." And so I'd always be like this translator and at the end of the day, I was like "After all these years, I've pretty much only translated font size and padding and margin." I was like, "How do I just get this into their hands...?" Because obviously, the dev tools -- apparently it is too much; if it's your first time popping that open, it does look like under the hood of a car. That's really overwhelming, and I just wanted to abstract a lot of those implementation details away, and let people fiddle.

I feel like I took that question and ran with it a little bit... \[laughter\] So yeah, Chrome Dev Summit, the report - so far I've been so pleasantly surprised because of how weird this thing is I built. I think people understand its value more than they care about the interface, and the interface is -- there is a small learning curve, but I'm telling you, 30 minutes into it, you're done. And at that point, you're sort of flexing its really powerful skills that it has, which are like this multi-select -- there's some multidimensional array operations that you can do with it that are super-cool, and I'm just waiting for YouTube videos to come out where people are like "Watch this!" then 30 seconds of what I could do with VisBug, and they're gonna be like "Multi-select over here, select this thing, do a couple commands, and BAM!" They're gonna have rearranged this page, and restyled it... And you're gonna be like, "What just happened?" So my tool basically still is surprising me with what it can do, but its original goal was simplicity. That's why you double-click to change text, that's why you can drag an image in, and it just swaps... That stuff should have been available a long time ago, and I don't know why it wasn't.

It's also kind of funny - a lot of the tool's functions are literally like the querySelectorAll.style.whatever that we write every day... It's so simple the way that it's built under the hood. Anyway...

**Kevin Ball:** So there's a lot of stuff in there that we could explore, in different ways... \[laughter\]

**Jerod Santo:** Definitely a lot there...

**Adam Argyle:** I'll slow down, y'all. I promise.

**Kevin Ball:** \[laughs\] Well, you're excited, that's good. So one thing I wanna explore a little bit, if y'all are interested, that is maybe not specific to this tool, but it's this concept of complexity and simplicity... Because I think one of the reason we as engineers are often drawn to complexity is that it's actually easier than simplicity.

**Adam Argyle:** Yes!!

**Kevin Ball:** If I have five different possibilities here, while it may be more work time to implement all five, it's a lot easier, because then I don't have to make a decision; I just do them all. And I don't have all this emotional burden of having to decide what to cut. But when you do that, you end up with crappy products. So in my mind, coming from a dev standpoint, that's one of the places where I've seen the design perspective often be better... But I'd be curious, since you've worked across design and development, do you find that something that designers do a better job of, or is that ubiquitous?

**Adam Argyle:** \[00:11:56.08\] Great question. Yeah, in design land, complexity -- you know, I think that they... "They", why do I even say -- designers, I think, have maybe traditionally been happy in their X/Y coordinate land, but they're getting bored, and that's why we're seeing these 25 new tools right now to pick from, where it's like developers giving their Legos to designers. They're like, "Look, come join my complex Lego landscape. I'll give you levers, and you can try to use this to build something."

I think designers are hungry... I think they're hungry just to be more included, and to make more decisions, which is part of what I wanted VisBug to do.

**Jerod Santo:** Yeah. It's also one of the most inefficient collaborative points in the web stack - that integration between the designer, the front-end person and the back-end person. If those are actually different people -- like, the more that becomes the same person, the more efficient the process is, and that's because we have inefficiencies in the integration points between those roles. You say why we see so many new tools - well, a lot of the new tooling, specifically React-style applications, allow us to componentize and to programmaticatize (I made that up; it's a terrible word) the design process, right? And bring them closer together.

And I like your point there that designers have been in X/Y land and have gotten bored - I definitely think that designers desire to do more than what they have been doing, but also from a business industry perspective, where a lot of costs are in implementing your websites is the integration between those roles; if we can cut those out or smooth those over, you're saving everybody time, you're saving everybody money, and you're really empowering people in all three roles.

**Adam Argyle:** Yeah. So here's where VisBug's a little different. I completely appreciate these tools; in fact, I early-adopt them. I just like design tools. What I notice though is that these are the most complex design tools that have ever come out. In the front-end world, we're using frameworks that are the most complex frameworks that have ever come out. And I'm looking at all this stuff, and I've got a brother who's in school, he's learning, and I talk to designers who feel like they have no power on the web, and I'm like "We just need something simple."

You mentioned simplicity means you have to cut stuff, and that's essentially what I did. I was like, "What can I do that's simple?" There's a Flexbox tool in VisBug, and that tool doesn't let you do only a couple properties... And I have this 80/20 rule with VisBug; a lot of its early mantra was "If I can do 80% of some tasks on the web with this tool, I feel successful. I don't need it to do everything to be successful." There's just nothing even available for people in like South America, or in other countries... Here's the other point - my target isn't Google designers; my target isn't trying to help big teams scale their work up. The goal is to empower just anybody that normally has a barrier between their mental desire and an implementation detail... And I just was trying to break that barrier; it's almost like I pulled the caution tape off of the web page, which felt like paper that was behind glass, and I've taken the glass off... And it's almost like, "Hey, these things are tangible." Because the reality is they're not. You're not actually clicking on design layers, but the illusion is all that I wanted to bring; I know that enough people have Photoshop skills, or designer skills, and then they come to the web and those skills are just gone... And I wanted to port over their mental models, and their strategies, and their patterns, and just lightly manipulate those models to fit the DOM. Because the DOM is interestingly appropriate as a render layer, and it has the concept of groups.

**Kevin Ball:** \[00:16:00.11\] I'd love to explore that idea a little bit more, because -- to be frank, I'm a little bit of a skeptic; I don't wanna rain on your parade here, but there's kind of this core underlying difference in the way that things are modeled, in for example Sketch or Illustrator, versus in the DOM. So the DOM is fundamentally a tree structure, and your location in that tree has a lot of different implications, whereas -- I mean, I'm not a power user of Sketch or Illustrator, but their models, as I understand them, are much more flat, and I can group things, but I don't have that kind of hierarchical tree structure in the same way.

I took a bunch of notes as I was playing around with VisBug, and a lot of the times when I found something that behaved completely unintuitively to me, it had to do with that separation, where I was trying to apply my mental model from Sketch, which is very flat... But then it would jump to a different place in the DOM and totally distort itself, and be very weird.

**Adam Argyle:** It sounds like the Move tool, yeah.

**Kevin Ball:** Yeah, I found that playing with the Move tool, in particular... Yeah. In fact, my note is "Move was 100% unintuitive. \[laughter\] It jumps things around the page oddly..."

**Jerod Santo:** 100%, Kball? Come on, that's a lot of percentages.

**Kevin Ball:** ...to me.

**Jerod Santo:** \[laughs\]

**Adam Argyle:** Up and down are confusing. Left and right are very predictable, and you can't really mess up with left and right. No, I totally agree. The good news is I have plans on how to make the UI provide better feedback, so that you're getting something more about what you expect, instead of like, press a button and "Surprise! Was that what you wanted?" Well, there's a plan there to make that better.

**Kevin Ball:** I mean, version 1.0 is obviously gonna have a lot of rough edges, but the interesting question to me is like "What is the right model for a tool there, because those actual underlying implementations are different in a way that matters? Should the tool be trying to shield that? Should the tool be trying to guide you from one mental model into the other? How are you thinking about approaching that?"

**Adam Argyle:** Yeah, good call. I have a two-part answer, and I'll keep the first part short, which is that a fun way to see what VisBug is is it's like you're opening up someone else's design file, that they superbly organized it.

**Kevin Ball:** That may be overstating my DOM skills. \[laughter\]

**Jerod Santo:** He's talking about me there... Kball, not you.

**Kevin Ball:** Yeah. Well, your HTML may be superb.

**Adam Argyle:** It's good enough, right? And it's generally better than what designers do, because they're moving so fast... I mean, front-end moves fast too, so naturally, both teams are a little sloppy, but the fun part about that comparison is to say "Yeah, you didn't author the file." So when you hit up in the Move tool, you don't even know what the tree structure was. So you're actually just like spelunking and breaking things, which I think is fun, but also if you have a goal in mind, it can be frustrating.

So it's kind of interesting there. Definitely, every time you launch the tool, if it's your first time on that page and you didn't author the document, you have a learning curve to just learn the tree structure, because somebody did organize it really tightly, and the design file could be very similar; a very organized designer will have very clean and clear labeled groups, and a tree structure, especially if they're using symbols, and they have nested symbols, and things start to get really crazy inside of Figma as well... They're working towards a similar methodology.

**Kevin Ball:** I was trying it on my own website, so in theory I did author that DOM tree. \[laughter\]

**Jerod Santo:** In theory. \[laughs\]

**Kevin Ball:** In fact, do I still remember how it is without looking at the code? No.

**Jerod Santo:** Right. When it comes down to actually implementations, six months ago you is pretty much like a complete stranger, right? That's what we learn when we revisit our code, or our DOMs, or whatever it is... It's like, it basically could have been a complete stranger that wrote this. You're just over there, trying to remember your part, too.

**Adam Argyle:** I am. I'm like, "Oh, man..." Do you remember the question and might pop it back up?

**Kevin Ball:** \[00:20:04.29\] The high-level question was like what should the tool be trying to do? And I think this relates to some other areas... Some of the things that I noted that were really cool were things like the accessibility notes, and I found that applying shadows and tinkering with those was really interesting and cool how it worked. I think -- part of that is gonna be where are the bugs and where are they not, but part of that might hint towards what is the key value prop of a tool like this? What are the areas where it's going to be super-helpful, and what are the areas where perhaps it's a square peg in a round hole.

**Adam Argyle:** Cool. Okay. This makes me wanna talk really quick about Firebug. You know, they compared it that way on stage because that's how I pitched it to them; I still think this is the strongest way to think about VisBug - it's inspect, dissect, explore and play... Everything that you have about the dev tools, which is not where you go build your website... It's where you go to understand an issue, it's where you go to make a tweak in an ephemeral way, and it's where you go to poke, and play, and tweak, and tweeze, and whatever... And I'm like, "Designers don't have that at all", and there's no reason they can't... It's just that they don't write Javascript, and they don't really have an open source community type, so I was like, how about I bring something really similar to that model, where I'm not gonna compete with Sketch; I'm not even interested -- I think those tools are phenomenal, plus you have all these other really advanced tools coming out I just wanted something that could offer subtleties at first...

So at first it was a nudge tool; you just sort of nudge things. Then, through research, I was asking designers, I was like "What do you do when you open up the dev tools? What's your typical task?" They were like, "Well, I just go look at the font size, or I go double-check the HEX." Then I would look at the extensions that designers had installed, and it was like a ruler, and a thing that just told them the font size, and I was like "Hah, I can make that stuff just pop up on hover. That's a piece of cake."

So it sort of like snowballed out of me researching what designers were doing, and then I started to give them tools that I wanted them to have... Because I have this mentality that I want designers to make more decisions; that's like a core desire of VisBug - designers need to get into the weeds, they need to feel the chaos of production in a different translated language on mobile, at 320 pixels wide, and they need to be able to recreate that, simulate it, and poke it, and fix it, and have power there. They need to make more decisions, because it's on us right now, it's on the front-end dev, and I don't think front-end devs like making that decision... So how do we get them in there, get them in the chaos?

**Break:** \[00:23:02.12\]

**Jerod Santo:** Adam, you described VisBug as "A design tool that makes the DOM the source of truth." Let's explain to people so that they've watched the demo -- first of all, the demo is in the show notes; it's a short video, you can see it in action, and that's probably the best way to get an idea of exactly what VisBug is today... But for those who haven't, we'll describe it a little bit in detail; first of all, it is a Chrome extension, it is an open source thing today, that you can download and try. It puts a little icon in your upper right side of your address bar, just like a lot of Chrome extensions do. You click that on a web page, and it pops open a pallet of tools. Kball, you played with this this morning - do you wanna give the rundown of maybe what the first use experience of VisBug is? And we can talk about some of the different tools it offers to designers, so that it can actually get into that DOM, that source of truth.

**Kevin Ball:** \[00:24:29.21\] Sure. The pallet of tools at the top - you've got the gridlines or guidelines, which is pretty sweet; you select the tool, hover around your page, and it will show you gridlines for whatever you're hovering on... I went and checked out my website, the blog, and it's got a bunch of these cards, and I can see "Oh, here's my clear container of where the central container is, here's how the cards are laid out, here's how the images are sized", and it sort of shows me alignment across things, and all sorts of fun stuff.

Continuing down, there's an info tool that basically you hover and it tells you a little bit about whatever it is you're hovering over... So it'll give you essentially the CSS selector for it, which includes both a tag and some classes. It'll show you high-level the -- I'm not sure exactly how it's picking which CSS properties it's showing...

**Adam Argyle:** Oh yeah, I'd love to interject really quick there...

**Kevin Ball:** Yeah.

**Adam Argyle:** That's a set that I was like, okay, what are designers interested in and what are they not interested in? So I maintain an object that specifies the properties that I think designers are generally interested in, and that to me is signal versus noise; I just cleared out the noise, and gave them a quick signal.

**Kevin Ball:** Okay, cool. It's pretty interesting, especially because I've got -- in some situations there are sizes that are sized because they're a size and then they're a relative size to that, but then it's just translating through; I'm seeing 12.8 pixels on one of my sizes, which...

**Adam Argyle:** Oh, that's probably because you've got a _rem_ or an _em_ and I'm using getComputedStyle(), and it's just turning it into a pixel. I'd like to actually put _rem_ or _em_ there. I want designers to use those units. I want designers to use those web units; it's a goal of VisBug eventually.

**Kevin Ball:** Definitely. I use REMs pretty much exclusively, so that is exactly what that is. Anyway, so it's pretty cool; it gives you sort of a very quick visual scan of what the signal properties are that are going down there. Moving down, there's an accessibility trigger, which - this was one of the coolest things to me looking at it; as you hover over things, it'll give you info about the color contracts, and if it meets particular accessibility guidelines... Particularly accessibility is an area where there is a lot of missing tooling right now; it's too hard, you have to be too much of an expert, so having this very quickly showing me the color contrast and stuff like that - super-cool.

Continuing down, there's a Move selector, which as I mentioned, I've found it completely unintuitive to use, tinkering with it... Now, okay, I see what you mean about it - left and right is a little bit more intuitive; if I do up and down... I mean, part of the weird thing is down is not the inverse of up, so if I do up and then I do down again, it doesn't take me back to where I was; it's just totally messes up the page.

**Adam Argyle:** You know, that's probably a bug in my Move tool. So what I do is I pop you into the parent when you hit up, but you know what - I should probably pop you into the parent next to the sibling that you left from, so that down was intuitively back in. And then if you hit right a couple times and find yourself next to the other one, and you hit down, you'll jump into it again. But you're right, it's very -- it's like you're flying blind, right? You're like "I'm gonna hit arrows until maybe I go back to where I was." I don't know...

**Kevin Ball:** \[00:27:42.09\] Yeah, I almost wonder... I mean, this is coming to where this thing could go, but I wonder if as you're doing -- for example, Move right now just highlights the element that I have selected, but it'd be cool to have a slightly different color highlight that actually shows me the relative structure, so I could see those parents, I could see those things... Because then I have a more visual representation of what my DOM is.

For example, I'm now working on a layout where I have some columns for structure; this is an older website, it's not CSS Grid, so it's using a foundation-based grid, and then interior containers. But to a designer, they're not necessarily thinking in terms of those columns yet, so it may not be immediately visually obvious that that's the structure that makes sense there. Particularly I think there's a lot of things that in the pre-CSS Grid world we did to implement structures that are quite unintuitive in terms of how they lay out to the DOM, if you're not familiar with that... So having that visualized in some way as I'm moving things might be useful.

**Adam Argyle:** That's coming. I have a branch where -- I call it "Richer Dev Tools Integration", and I also call it a second-screen experience. I do have a design panel branch where next to elements I've put a design tab, and when you click that, you pretty much get a blank screen at first, but anything you select becomes a simple layer tree. So you don't get this full DOM elements list, you get a simplified version that you can twirls open and then expand, but its intent is to help facilitate this sort of like -- what you're saying here is "The DOM - I can't see it. Maybe I could feel it, but that's not good enough", and I agree. There's advances coming here. I love this review though, this is awesome.

**Kevin Ball:** Yeah, I'm happy to give a review. I love playing with tools, and as you may have guessed, I'm a little opinionated on these.

**Adam Argyle:** Good, bring it!

**Kevin Ball:** Next, coming down to the margin -- we have Margin and Padding tools, which allow you to add margins on left/right/top/bottom; I actually found it, once again, completely unintuitive. It's inverted from how I would expect it based on--

**Adam Argyle:** I tried it inverted... I did, and I actually undid it. Because yeah, I know what you mean - in an X/Y coordinate tool... Anyway, I tried it, and it was even more unintuitive, and I was like, "Nope. Going back." \[laughter\[

**Kevin Ball:** Yeah, it makes sense, because in an X/Y coordinate tool, if I use the arrow keys, I am expecting to do it in -- in the web world it would be essentially translating, absolutely.

**Adam Argyle:** Yes.

**Kevin Ball:** Whereas in these scenarios, we're manipulating our margin and padding. So if I were to invert to do that, you'd have to go into negatives, and do all sorts of interesting things... So I definitely see -- this is an area where it felt like the medium of the... Like, what the tool is doing and what it looks like it's doing are not a great match for each other... So I don't really have a good sense of the right way to do that. Maybe it's visually expose the whole box model there, similar to -- what makes that intuitive in DevTools is you can actually...

**Adam Argyle:** Yeah, the orange and green highlights?

**Kevin Ball:** Yeah, you see those, so maybe you could do something where you add some sort of background there. Thinking about the implementation for that - it's probably non-trivial to get that to work, especially if people are using their own backgrounds, but...

**Adam Argyle:** No, I actually think that feature is not difficult. It's in my list of features in the GitHub issues; I think it's valuable, as well. It's just like another additional SVG custom element that it will place, and it will get sent to you know the getBoundingRect or the node that's selected and it could just draw itself. It's really probably an hour or two to get a little proto version of that.

**Kevin Ball:** It makes sense. That's an interesting highlight... So if you're visualizing these things by throwing SVGs on there -- I haven't looked at what you're doing, so let me throw up the... I'll throw up the DevTools as I'm playing with this... Oh yeah, so you're dropping -- what are we doing...?

**Jerod Santo:** So you can turn the DevTools on VisBug, but can you turn VisBug on the DevTools?

**Adam Argyle:** \[00:31:52.13\] Interesting... Not yet. Oh, you know what - you will be able to. A thing we might eventually get to talking to more is that Chrome is interested in design tools in Chrome proper... So consider VisBug a canary that I've released into the wild... And we wanna observe it, we wanna learn from it, and we wanna take what people are finding are its biggest powers, and bring those into Dev Tools proper, because there's things that VisBug can't do because it's just a custom element on the page. It has hit limits, and when I get into the depths -- so I have a meeting later today with a Dev Tools PM... And there's certain stuff I can't tell you that is crazy exciting! Just know that there is some stuff coming--

**Jerod Santo:** Don't tell us there's things you can't tell us! Tell us things that you can tell us...

**Adam Argyle:** Too late. Adam, cut that out... Yeah.

**Jerod Santo:** You're teasing us. So while Kball digs in -- did you find it? Did you find what you were looking for?

**Kevin Ball:** Yeah, so that's really interesting... Correct me if I'm wrong, but it looks like you've actually got a custom component down there, like a Web Component type thing, that is absolutely positioning the visuals for this on top of where it is.

**Adam Argyle:** Yup. That's pretty much how the illusion happens.

**Kevin Ball:** That's really interesting, because that lets you do all sorts of interesting magic without messing with what's there.

**Adam Argyle:** Yeah. The little pink label is a custom element, the selected bounds is a custom element... Everything's a custom element. It's really fun, and...

**Kevin Ball:** That is interesting.

**Adam Argyle:** ...they've been really a pleasure to work with. I've been building with them for a long time, too; this isn't my first rodeo with Web Components.

**Kevin Ball:** Cool! Maybe we can dig into it a little bit there... But if you want, I'll keep doing my quick review...

**Adam Argyle:** Yeah, sorry.

**Kevin Ball:** Oh, no worries. So then there's a Flexbox Alignment tool, which --

**Adam Argyle:** It's so cool!

**Kevin Ball:** It looks pretty cool. I think if I didn't already have a mental model for Flexbox, it would probably be pretty confusing, some of the pieces there...

**Adam Argyle:** Yeah, give me a quick little breakdown; unpack that for me. Or we could do it on the side, I don't know; we could burn through here if want also.

**Kevin Ball:** Actually, I'm not sure that it is. Let me see... So the alignment feels very intuitive, when I just change things around.

**Adam Argyle:** Like up, down, left right, just to align it... Just like the Path Finder tool. If people are familiar with the Path Finder tool and the design tool, imagine that hitting right took you from top left to top center; and you hit right again and you're in the top right; you hit down, you're in the center of the far right middle, and you hit left, and now you're in the center-center. It sort of abstracts away flex-start, flex-end, align-items, justify-content. It's just like you don't have to care. And it does distribution, too; I don't know if you've seen that one...it's just click left and right a little.

**Kevin Ball:** I was just playing with that.

**Adam Argyle:** I did something the other day, I was looking at somebody's website and they had a LI list, and they had numbers in there, and it's like a list of 50 items... And the numbers were really hard to read, because they were ragged right. They were just at the end of the line of the content. So I clicked the LI, I clicked the link of the LI and the little label there, highlighted all of them, went to the Flex tool and hit Shift+Right and spread them space between, and now all of the numbers were brilliantly lined up for me to read on one row, and all the text that they were related to was on the left... And it looked like magic to the person I had done it, but all I did was with a keystroke did a Flex space between.

**Kevin Ball:** Cool. I think the thing that I found unintuitive on that is manipulating distribution and direction only works on a subset of the things in my page, and I think that has to do, once again, with that hidden structure of, you know, if it's just a list - great; and if it's not - well, it doesn't actually behave in the way that I want. This thing that looks like it should be able to shift in that way is actually constructed differently.

**Adam Argyle:** \[00:35:44.11\] Yeah. It needs sort of a companion tool that's set to come out as well, which is something to help me resize... Because yeah, the Flex tool - it feels unintuitive if you can't vertically center something, but that is probably because the container is at the same height of the content, so there is no concept of vertical centering there. If you could change the height though, hit Shift+Down or Shift+Up and increase the height of a container, and then use the Align tool to put it in the center of there, that might feel more about the relationship where you're like "I'm setting some space with the container, and then I'm directing my children and I'm telling them how to behave."

**Kevin Ball:** Nice.

**Adam Argyle:** But yeah, I feel you... There are some oddities in there still, and also, here's a secret - I'm just gonna say this on the air because I don't care - there's a huge bug in that tool that nobody has pointed out yet, which means that nobody has dug into it super-deep. So here, ping me on Twitter if you find the bug. I'm telling you, there's a massive bug there that's like a huge usability issue that nobody's complained about. I'll fix it, I've got an issue logged, but anyway... Ping me if you find it.

**Kevin Ball:** The secret usability issues... Continuing on down, there's a Hue Shift and a shadow-applying tool; each one you just put it on, you can key-stroke things... There is what looks like an absolute positioning; I haven't played with that one.

**Adam Argyle:** Yeah, that one is an escape hatch. That's like, look, whoever's here and is trying to execute some sort of an idea, and they're just like "Look, the DOM is killing me" or "I just don't care." Maybe they just don't care, and that's fine... And that tool just lets them -- so you could go to a page, delete a whole bunch of stuff, and then grab that absolute tool and move things around. Or you could just move things off the DOM viewport, and then bring them back on and do entire rearranging stuff... It's an escape hatch.

**Kevin Ball:** That's pretty interesting. Yeah, playing around with it, it works really well if I'm using the mouse. I grab it, click it, I can just drag an element to wherever on the page and it positions relative and gets it there. I've found that if I use the keyboard stuff it actually doesn't work very well, because --

**Adam Argyle:** Yeah, it's a little funky, because you have to hold Alt to remove a top specifier.

**Kevin Ball:** If I go left, and then I go right again, I would expect it to move back, and it doesn't...

**Adam Argyle:** I should fix that, yeah.

**Kevin Ball:** ...because it's applying left and right.

**Adam Argyle:** It's applying left and right, yeah, and that's what I mean like you have to hold Alt and hit left to remove values from the left. So it's like, I agree, that one was following the consistency pattern of margin, and it should revert out of that and it should move into an X/Y coordinate. Yeah, that sounds like an easy fix, too. I agree with you here.

**Kevin Ball:** Yeah, simply probably just always manipulate left and top, rather than doing left and right, because you end up with collisions.

**Adam Argyle:** Yeah, I concur.

**Kevin Ball:** Let's see... There's a Font Styles, where you can manipulate size, alignment...

**Adam Argyle:** Yeah, font size... All the kerning and typography stuff is right there.

**Kevin Ball:** Inline edit, which is, of course, super-slick. Search, which is kind of interesting... You can search by selector, you can search by just like images, or button, and it will try to find stuff... I did notice on there that, once again, it's a place where not knowing the structure can make things unintuitive. If I search for images, it will highlight image tags, but not divs with background images, which--

**Adam Argyle:** Uuuh, feature requests... \[laughter\] Real quick, you can drag an image over a background image with my tool.

**Kevin Ball:** I can drag an image over a background image... I'm not sure...

**Adam Argyle:** If you drag an image onto the page and there's a background image in the space where you're dragging to, it'll traverse up the DOM, looking for something specified about a background image, and if you drop, it'll swap it there. It's kind of the only magical thing that the tool does that really did somebody a favor, as it crawls, yeah anyway.

**Kevin Ball:** Interesting.

**Adam Argyle:** And that one's really cool, because basically you go to a homepage and there's a big header there, right? And it's almost always a background image, so that they can fit it to contain, and some other sort of stuff... Which made it not available to be drag-and-dropped, and I'm like "Well, that's no fun..." I wanna be able to go to a homepage and be like "Boom! I'm on the front page now", or whatever it is that people are trying to do.

**Jerod Santo:** \[00:40:11.15\] "I'm on the front page now..." \[laugh\]

**Kevin Ball:** "Put my image there. I'll send you a screenshot of your website with me on it!"

**Jerod Santo:** "Mom, I'm on the New York Times front page today." \[laughter\]

**Adam Argyle:** Right?! I mean, the funny thing is... Originally, when I was building this, I was like "I'm sort of enabling people to troll and be rude, and maybe make fake stuff", and then I was like, "Wait a sec, whoever made Firebug did this waaay before me." I just sort of made things a little easier, but I haven't really enabled as much destruction and chaos that you can cause as you can with the Dev Tools, so I don't feel bad about it yet.

**Jerod Santo:** The fact is that the web, since its inception, has been one of the greatest trolling platforms ever created, so you are not the first. Trolls have dominated the web for many years. I'm excited that in your hover descriptions on the pallet, as you hover on a tool, it will show you what the tool is about... And your little image that's like a gif that shows it in action has got the DeLorean going on, it says "Great Scott", so I think you've got some good taste at least.

**Adam Argyle:** I'm a retro nerd. I want a floating skateboard; that'd be so cool.

**Jerod Santo:** Don't we all...? And especially we want that little pizza that you put in the microwave and it comes out a big pizza...

**Adam Argyle:** \[laughs\] Yes, please.

**Jerod Santo:** Come on, future, where are you...?

**Adam Argyle:** So real quick on that search tool - yeah, there's a couple keywords in there you can say, like images and text, and basically I have a little hash map that says "What is text?" and they look for spans, or whatever. That code is all totally visible. But there are some insanely rad plans for that search tool, and I wanna share them with you really quick, because it is a power zone that is soon to be -- I keep pitching it similar to Alfred. Did you both use Alfred?

**Kevin Ball:** No... Also, I just tried to write text and it hung my Chrome tab.

**Adam Argyle:** Yeah, I'm not surprised. It's --

**Jerod Santo:** That's hilarious, because I'm in the exact same scenario, where I was like "Did my computer just freeze up?" because I just tried typing text in this thing... \[laughs\] No offense, but we definitely have a 1.0 here. This is fun.

**Adam Argyle:** Oh, yeah. This is like early access. I'm calling it like "It's stable, but feature incomplete." You have access to querySelectorAll() there, and you can totally do destructive things... So yeah, the text one, if your DOM is huge, that's a big crawl. But anyway, Alfred was a sort of Spotlight replacement; it was like a Spotlight enhancement. It's almost like slash commands. Actually, here, let's think of it in terms of slash commands. That search bar - think about doing "translate to German", and what I do is I would take "translate to" as a registered string, and then someone would register a function for that. So if somebody puts that query in, I'll pass German to their function and pass the DOM to that function and let that function do whatever it needs to to translate things to German. And I wanna do things in the accessibility realm.

Basically, I want slash commands in that search thing to dynamically import a function that applies something to the DOM, which makes it very open-ended and extremely powerful for people to do really cool, custom stuff. So there's been desires for "focus all things on page with a focus ring", so in one view I can see what are tabbable notes, and I can see them in one view.

Another one would be "Show me what it would look like to a keyboard navigator who's blind", and so the whole DOM would flatten and become one column, and you could see it in one visual forest view of what your accessibility might look like to someone, without initializing a tool that has to crawl it and speak it for you; you could sort of preview these things.

Anyway, that's the teaser I wanted to share - there's a couple of magic words now, but the goal is to add a whole bunch of new keywords in that search thing, so that while it's also programmatic selection, it can be programmatic manipulation and simulation, so that the chaos can be brought to the designer, so the designer can have and feel power in that moment. It's about giving designers the ability to simulate and empathize, and tools to make decisions on top of that. That's a core belief.

**Break:** \[00:44:21.04\]

**Jerod Santo:** Adam, we talked about empowerment, and you're definitely all about designers... I'm gonna bring the question -- maybe it's the lazy question, maybe it's the silly question, the one that you mentioned every software engineer upon looking at your tool asks... I've just gotta ask, because it's the first thing I thought, so I'm very cliché and fitting into stereotypes, but I thought "How do you actually get this information back out?" I mean, I feel like that's empowerment - I'm a designer, I go to the web page, I click on the margin tool, I hit the up arrow three times, and those margins look way better. How do I actually communicate that then back to whoever is doing the development? I can't tell them "Hey, margin up three times." \[laughter\] The cool thing about Dev Tools is you can say "Hey, three more pixels" and then they go ahead and do it, but.. All this manipulation is awesome.

**Kevin Ball:** That was your first question? Because my first question was "Where are there gonna be Vim bindings?"

**Jerod Santo:** Oh...! That's a much nerdier question. \[laughs\]

**Adam Argyle:** Or one of mine is I really want multiple cursors in the DOM. I wanna be able to double-click my brand name, hit Cmd+D, find all instances, and rename it.

**Jerod Santo:** What would you rename your brand?

**Adam Argyle:** \[laughs\] I don't know. Something super-cool, because naming is easy...

**Jerod Santo:** Ad Rock

**Adam Argyle:** Yeah, I don't know... These are just fun features, yeah.

**Jerod Santo:** We all have all questions... I appreciate, Adam, that you ask yourself things, like "When am I gonna be able to do this...?" But for me, that's the first thing I think... Is that a design goal of this tool, it's just not there yet? Is it there and I don't see it? Let's get the data back out to people... Because that's empowerment, right?

**Adam Argyle:** I agree. And yeah, it is - it's a really popular question, and it's totally an engineer question. Most designers who see it, they're like, "How do I get into the Sketch?"

**Jerod Santo:** They're moving the other way.

**Adam Argyle:** Yeah, I just wanna leave that on the table, but --

**Jerod Santo:** I like that. That's a good question, too.

**Adam Argyle:** I agree. I'm like, "I don't' know..."

**Jerod Santo:** \[laughs\]

**Adam Argyle:** In fact, actually, we do have ideas there. We have ideas like publish the Gallery. Do you guys know what Gallery is?

**Jerod Santo:** No.

**Adam Argyle:** It's Google's recently released InVision sort of tool. You post comps, you can have conversations about them, version management of the comps are up there, and that sort of thing. So the idea would be you go to production, you manipulate it, you push it to the same place that you were pushing your comps before production existed, and now instead of you managing some uncanny artboard, where you're chasing production with your design tool, which never matches up one-to-one, and usually you have to dumb your work down from your design tool for the one that was in production... You now can just go straight to production, make a manipulation and push an image up to a screenshot-sharing tool, or just wherever you guys are having conversations about designs, and have the conversation right there.

But let's talk about how to get the code out, because there are more things I'm gonna build for designers, but I wanna talk about how to get the code out. Right now there is one way - I call it crude, even though it's fine... And if you think about how you get your code out of Dev Tools, it's crude. What do you do? Sometimes you select more than one line of CSS and paste it, or if you're in Javascript land and you're in the console -- I do this all the time, eager evaluation is basically a DOM REPL now. So I'll do a lot of work right there in the console, and I'll get a whole functional chain working, and I'll grab it and I'll paste it in my editor and skip a whole bunch of work... But it's still copy-paste, right? I'm still doing my work in the environment, and then I copy my values out.

Okay, so how does that work with VisBug today? VisBug has the -- we talked about the inspector tools, like the style inspector... That style inspector tool, if you've made a modification to the page, will report the modification. In addition to that, if you hold Alt and you click that style, it basically puts it there like a sticky, it pins it; so you can pin those style cards.

\[00:49:57.01\] Consider this scenario - you've gone to production, you bumped up the font size of the header, you bumped down some margin over here, and you did a couple of tweaks and tweezes; you changed some text colors. Now you go back to your style inspector tool, you hover over those notes and you hold Alt and you click, you hold Alt and you click, you hold Alt and you click.

Now, in that scenario, depending on if you're a designer or an engineer, you're gonna have a next step. If you're an engineer, you could just copy the values right out of there, just as you do traditionally. If you're a designer, what I'm pitching them is screenshot that and make the best JIRA ticket that they've ever seen. Give them a JIRA ticket that says "I modified it. It should look like this. Here's the values that I want." Anyway, that's the current, crude way.

There's better ways coming, and I can talk about a couple of them. Do you wanna chat about those?

**Jerod Santo:** Yeah, go ahead.

**Adam Argyle:** Oh man, how much can I tell you...?

**Kevin Ball:** \[whispering\] Tell us the secrets, Adam...

**Adam Argyle:** Yeah, one of my original pitches -- okay, so are you all familiar with the Changes tab in the Dev Tools?

**Jerod Santo:** No. Are you, Kball?

**Kevin Ball:** Changes? No.

**Adam Argyle:** It basically shows a diff of what you've done in CSS. In the Dev Tools, right now. It's really cool. So when I was pitching it to the Chrome team, I was like "Yo, okay, so I went in, I modified a page with VisBug, and then I go down to the Changes tab, and the Changes tab shows a diff of all my work. Then I hit Export, and the Export takes a screenshot before and after of each node, creates a diff, puts it in a zip, and I ship that stuff to the dev." They'll get this bundle of changes requested, with values in it, that they want, in this interesting diff with visual -- that's what I pitched them, and they were like "Oh yeah, that Changes tab - you're the only one that uses it." \[laughs\]

**Jerod Santo:** Where is this Changes tab?

**Kevin Ball:** Where is it? I don't see it.

**Adam Argyle:** \[laughs\]

**Jerod Santo:** I want to go to there.

**Kevin Ball:** Oh, I've just found it.

**Adam Argyle:** Bottom console drawer, hit the snowman. Yes, in the snowman next to the console.

**Jerod Santo:** What? Snowman next to the console? Are we using the same Dev Tools, you and I?

**Adam Argyle:** The three vertical dots...

**Jerod Santo:** Okay, that's the snowman?

**Adam Argyle:** You know, it's a snowman, sure...

**Jerod Santo:** Well, a snowman usually -- the lower dots are bigger, just FYI.

**Adam Argyle:** \[laughs\]

**Jerod Santo:** Okay, More Tools, Changes.

**Adam Argyle:** Yeah, Changes.

**Jerod Santo:** Cha-cha-cha-changeees...

**Adam Argyle:** Go into the Dev Tools, go to the Elements panel and manipulate some CSS through the Elements panel and go back to the Changes and you'll see what you did.

**Jerod Santo:** You've gotta be kidding me.

**Adam Argyle:** In case you forgot, right...? I think the big value there was like "Oh, crap, I tweaked so much stuff; I don't really remember what was there. Please, tool, can you surface something for me?" and boom, there it is. It's all rolled up for you in a nice little-- and it looks like a diff, right? It's super-cool. So I was like, "Let's leverage that!" Plus, let's imagine we're using in that case -- so we shipped this zipped diff off; well, here's cool idea number two, because Local Overrides is really cool... What if I go to my bank's website, I enable Local Overrides, I modify it because it looks like crap, and I make it look a lot better, or at least more tailored to my own experience; I save those changes al Local Overrides, and every time I visit that web page, my styles are reapplied.

**Jerod Santo:** That sounds nice.

**Adam Argyle:** They were like, "You dream real big." \[laughs\]

**Kevin Ball:** I wanna put on my skeptic's hat again, because I'm a big skeptic on this, for a couple of reasons...

**Jerod Santo:** Because they're gonna change their stuff, and you're gonna be back out there with the snowman again.

**Kevin Ball:** Exactly. Looking at the Changes tab for the first time, I just went to my website to try it out, and tinkered, and yeah, I get a diff of all of the minified CSS... Which is all in one line, so my diff is this unreadable blob, where 99.99% is--

**Adam Argyle:** Wait, does it have the curly bracket in the bottom left, that will pretty-print?

**Kevin Ball:** Nope.

**Adam Argyle:** Oh, lame.

**Jerod Santo:** I was looking for that, too. It's at least useful in development though, Kball, so...

**Kevin Ball:** Yeah, it might be.

**Adam Argyle:** The diff breaks it out of the one line though, right? I can't remember...

**Jerod Santo:** No, that's all in one line, because I'm looking at ours and it's just one super-long line.

**Adam Argyle:** Well, here's my tip - if you all think this is valuable, let's push it...

**Kevin Ball:** This is why they buried the Changes tab down in the corner...

**Adam Argyle:** Well, no, and that's what I'm saying, too - no one uses it, so they're not really enhancing it. If we find this thing to be valuable, start using it and start complaining.

**Kevin Ball:** \[00:54:08.23\] The big picture question, once again, coming back to this, is the web and the way that the web renders is structure-dependent, but the visual changes that we are making -- the structure is different from the visual structure. The rendered visual can have a completely different conceptual model for somebody just looking at that and trying to manipulate it, than the underlying code. That becomes more and more true as we move to more and more complex front-ends. Old school vanilla HTML/CSS websites - you're gonna get pretty close. Today, if you look at somebody's React code, the layers of components, the layers of higher-order components, the way that stuff is getting composed together -- like, if I make a change right now that depends on the current rendered structure of this HTML, that can be dramatically different tomorrow because we shifted things around... So making that jump, that map, to me, highlights -- or thinking about the fact of that change is gonna in my mind guide where is the tool gonna be really useful and where is it not.

**Adam Argyle:** Yeah, let's talk about that really quick, because this tool is not trying to empower advanced Google developers or advanced React engineers. The way that they work - yeah, this is kind of conflicting with that, and to me that's okay, because these folks who are doing these modern development strategies have a pile of tools already. And you who don't? It's the 90% of the web that's building things not with those tools.

I know that these things are really important to us right now, but VisBug is very much not trying to give more power to the people that already have a ton.

**Kevin Ball:** Well, I'm just thinking about the designers working with those people. If I'm a designer working with a React team... Either I have to know a lot about React, which some designers do... There's more and more folks saying design level should be a component library that is a set of React components... But that gap is in many ways widening.

**Adam Argyle:** So that's okay, good call; I think this segues into this empowerment conversation we wanted to have. I see two drastically types of design tools that need to come out. One is extremely complex and robust, and designers are getting in and are contributing to the engine; they're understanding the system - that's system-level design understanding, right? And if you think about that too, that's also very much applicable to certain teams, that that's valuable, too.

The opposite spectrum is what VisBug did. VisBug is like "I need something that goes in there and just doesn't care. That's why in the demo I call it punk-rock, because if it's React or Angular -- basically, if there's DOM on the screen, VisBug will let you feel like you clicked it, and it will write some inline styles on it. And if the framework behind there should have got some REM value from the designer, you can have a conversation where maybe they go from VisBug into Framer X or whatever... But I've wanted to empower people who just currently feel like there's so many barriers between their mental decisions that they wanna make about that page, and then getting it done.

For example, margin and padding and spacing in a designs system - those are actually complex problems to solve, because one change may impact a drastic other set of things. And also, real quick, I'm surprised developers like this tool, because I've given a whole bunch of people the ability to look under the covers of what we've been doing really easily... But yeah, one of these things is designers should be able to go in there and just be like "Look, this just needs to be a bigger font size, and I don't care about your system. You can about your system, and I'm glad you care about this system, homie, because that's the relationship we have. You want me to be visual and build something that's elegant and fits across various screens and is respectful to accessibility... You like the system, and many of us just wanna do the visual", so I built something that was on the complete opposite side of this spectrum. It's like, I ignore all complexity, I go direct to source and I poke it, and I just move it, and I don't really -- at this point it doesn't care about implementation details...

\[00:58:36.08\] So yeah, part of it is empowerment. I'm trying to empower pretty much everyone else... Because those really, really advanced tools are very isolated and secluding-feeling; they're extremely powerful, but they're very complex and they have very specific use cases... And yes, that's meaningful. Our industry needs that, I totally agree; that's why it's saturated. But what's not saturated is simple tools that help a designer or a developer facilitate a new type of conversation.

We were talking earlier - I have this vision of a designer calling over a dev, like all timidly, "Hey, I was trying to modify this thing, and it's not doing it with VisBug; I don't know why. Can you help me?" and the dev steps over and they open up the Dev Tools and they inspect it with the more rich feedback that they get from there, and they're like "Oh, I see this little thing here. Let me help you understand just this small thing about the DOM." Now your designer and your engineer have a common ground, and they're sort of like mutually interested in this thing called the DOM, because what we've done is we've not made an abstraction, which is what most of these other design tools do - they have to abstract... And you know, that's what a design tool -- it's like, Sketch is an abstraction... They're both in the end environment. This is the first tool where designers feel like some sort of like tinker tools in the end environment, and developers can come in and be like, "Yeah, let me help you understand what this end environment is. Isn't it kind of weird?" So I really hope that this helps designers grow and get more interested.

I originally pitched VisBug as like a gateway drug into the elements panel, as well. I want them to feel like they've got a lot, but they don't have it all, and that now it's a little less scary once they've ramped into some DOM... Instead of no DOM to all the DOM, it's like, "Here's some, and now you can go get deeper if you're interested."

**Kevin Ball:** This raises kind of an interesting question, and this is a question that I think is worth talking about for designers, which is the extent to which we should expect designers who are designing for the web to understand HTML and CSS. I worked for about a year and a half at a design studio called ZURB, where every single designer codes HTML and CSS; that's part of what you do. And on the one hand, it's saying "Okay, we're gonna force all of our designers to become unicorns." That's problematic. We keep raising the expectation, raising the bar. On the other hand, there's this question of knowing the medium for what you're working for. You wouldn't expect somebody to design for print, who doesn't understand paper and ink, and thinking about those things. You wouldn't expect somebody to become an architect with having never seen construction materials and worked with them a little bit. You don't have to be an expert, but you should know--

**Adam Argyle:** It really helps you to know a little bit, yeah.

**Kevin Ball:** Yeah, you should know the medium that you're working with. So if we view this tool as an entree into that, I think that's really valuable; I also wonder if you can push people even more to the Dev Tools, and push people even more to that "Hey, I noticed that you're manipulating the margins on this. Let's actually open up that Dev Tools tab and show you what that looks like in the box model."

**Adam Argyle:** Yes, right?

**Kevin Ball:** \[01:02:09.19\] Because I think the more we -- we wanna keep it simple, we wanna not expose people to more than they have to be exposed to, but in the name of empowering designers, if you're gonna try to empower designers for the web, the most empowering thing you can do is help them understand HTML and CSS... And maybe Javascript, though I think that's actually less key for a lot of the visual piece. If you start talking about interaction design, that's another whole layer where Javascript is super helpful.

**Adam Argyle:** Well, and I'm hoping that this basically... Since this is the first open source tool for designers - and there's probably others, but this one is based on Javascript, and it lives in the end environment, and that's really unique, because designers don't get that opportunity to shape a tool. They generally get a tool rained down on them, and then they get a bunch of marketing that's like "You should use this tool and give me $500 because I built it for you. Isn't that awesome? You can build your own stuff, so here, pay me, because I built it for you."

That's been working, and it's fine, but this was especially interesting in that I want designers to shape this themselves. I'm dying to tell designers, like, go to GitHub, and I don't necessarily want you to fork code, but I want you to go dream in issues, and I want some rando in the world to fulfill your dream. And I want designers to know what open source is like, I want them to help build their own tool, because they don't have that opportunity. And you're right, I hope that this is a spark, I hope that this is the start of what Firebug did, and we see this proliferation of additional tools.

You mentioned an interaction tool - please, someone out there, if you're listening, copy what VisBug did and make a really rad inline, in the end environment interaction tool. It's not impossible. The DOM is a phenomenal renderer, and you can do really cool things with it. Somebody push that.

So that's the goal here - I want the design community to realize that they could, if they went there, and I want them to get a taste, and hopefully make some hungry, and then they start having feasts. We'll see... We'll see if that happens, but I'm hoping since it's built on Javascript, a designer can be, like, having drinks with a friend, and like "Man, I went and logged this issue, and I really like this feature, but I really don't write any Javascript" and their homie is like "Well, I write Javascript. Let me build that for you." And they go in there and they execute the thing, and all of a sudden two people are working together again; they're building a tool for themselves, but then they realize other people want it too, and... Open source is so awesome, right? You both know this, with the fiery passion of a thousand suns, right? But designers don't. How do we share that moment? How do we share that feeling and that community and that core...?

**Jerod Santo:** You have at least a thousand suns in fiery passion right there, which we definitely appreciate. So how do we do for designers what many of the tools, open source, Dev Tools, these things inside the web browser have done for developers? What a great question.

**Adam Argyle:** Yes, yes...!

**Jerod Santo:** Hey, what a great first attempt!

**Adam Argyle:** Thank you.

**Jerod Santo:** \[01:05:17.13\] This is very cool. I'm glad that we can give you some live first impressions, some bug reports in our chat room, there's feature requests happening... Kball, I think maybe you need to pop open GitHub and fork this repo and contribute; you have so many awesome suggestions for Adam.

**Adam Argyle:** Agreed! Oh, we didn't talk about architecture either, did we? Oh, man. Whatever, we'll get there.

**Jerod Santo:** No we didn't. We'll have to have you come back on, but we're hitting up against our bumper of time, so... Final words from you about VisBug, about what you're trying to do, maybe a call to action for people who are interested...? What are your final words for us in the community?

**Adam Argyle:** Yeah, final words - hey, developers, go show your designers what this can do. Go double-click some text. And don't stop at your designers; I want you to go show your PMs, I want you to go show your UX writers, your content writers... Anybody that participates n your front-end, I want them to feel like they can go understand and inspect, and feel like they can tweak this.

And this is the other thing - I want you to tell those designers, go make a GitHub account, go put an issue on this repo, and go watch what happens as other people want that feature too, and start to get involved in GitHub. I want designers on GitHub. There you go, that's sort of the final thing.

**Kevin Ball:** Designers on GitHub. Amen! Working with designers who learned to code was so empowering for them, and the more they got into it, the more excited they were about doing more of it... And particularly, once again, HTML and CSS - it feels like this big barrier to go and learn those things, but the conceptual models for HTML and CSS are not that different from your visual models. Javascript - learning to do things imperatively, all that stuff, that can be a big mental leap, though it's not as bad as I think sometimes gets perceived to be... But just to the level of starting to play with the medium, starting to play with HTML and CSS - it will open the world to you.

**Adam Argyle:** I completely agree. I couldn't say it better myself; this is just lowering the bar, so you get a little bit of taste of what the DOM is, and hopefully you get hungrier and hungrier, and then you can be participating in richer and richer ways in the process. Designers, make more decisions! Let's get you in there!

**Jerod Santo:** Let's get you in there, indeed! Well, that is our show, folks. Thanks so much for listening, and we will see you on the other side.
