**Nick Nisi:** Hoy-hoy. Welcome to JS Party. I'm your host this week, Nick Nisi, hoy-hoy again, and I'm joined by Amelia Wattenberg. Amelia, what's up?

**Amelia Wattenberger:** Hoy-hoy again.

**Nick Nisi:** Yes! Welcome, excited to be on the show with you again... And we have some very exciting guests, and we're gonna be talking a little bit about CSS. But first, we're going to be talking a tiny bit about CSS, maybe, I should say. But first, let me introduce them... And the first one is Martine Dowden. Martine, how's it going?

**Martine Dowden:** Hi! How's it going? It's been good.

**Nick Nisi:** Good. Good. Tell us a little bit about yourself.

**Martine Dowden:** Well, I'm frontend UX/UI developer, currently CTO at Andromeda Galactic Solutions, and I basically do frontend UX/UI stuff, and I'm focusing on accessibility and CSS,; those are my two big areas, I guess.

**Nick Nisi:** Awesome. Awesome. And let me just say that Andromeda Galactic Solutions is like the coolest name for a company, ever. \[laughter\] And joining you as well is Michael Gearon. Michael, how's it going?

**Michael Gearon:** Yeah, it's going good. Yeah, hi, everyone. Nice to join you.

**Nick Nisi:** We're excited to have you. Tell us a little bit about yourself.

**Michael Gearon:** So I'm a UX designer/frontend developer living in South Wales in the UK; at the moment, interaction designer in the public sector... So working through those complicated challenges of the public sector and all the services it involves.

**Nick Nisi:** That sounds exciting. We had both of you on today to talk about a book that you've written, and that book is called "Tiny CSS projects." That little bit of CSS that we're going to talk about today. So why don't you tell us a little bit about the book?

**Martine Dowden:** It's 12 chapters, and each chapter takes a concept in terms of like UI things that you might see, whether it's a layout, or more of an element that you might see commonly... So think like your profile cards, right? That's a concept we see everywhere. And so for each of those projects, we looked at what are some common CSS patterns that we use, and some of the common CSS techniques that we use, and tried to figure out a list of projects that were really common, that are often used on websites, and then those main concepts in CSS, things that we need to know in order to effectively use it, and come up with 12 projects that can be done.

And then the user can either read it for learning the CSS techniques and apply them and just follow along and write the code, or they can alter it to their -- you know, so it can work as "I'm learning how I would design this thing", or "Here's a reference on how I would go about getting started on something like that", and a jumping point for it for altering, you know, for their purposes later on on a website. It's been a really fun book to write.

**Nick Nisi:** I bet, yeah. And I've been looking through it, that chapter specifically about the profile... I forgot what it was exactly called; the profile section... The profile card. That was very insightful and exciting. I was just picturing myself the next time I need to do this - this is such a perfect reference for it, whether I'm just like going through it to learn the CSS, or just pick out parts of it that is like "Oh, how would I do -- how should I properly do a circular avatar?" or something like that, and pick and choose from that. So I really, really liked that. It's just such a perfect reference for things like that.

**Amelia Wattenberger:** So I love the idea of little projects. Is the audience for your book supposed to be people who are totally new to CSS, or people who are looking more for reference material, who are more intermediate or advanced?

**Michael Gearon:** \[05:46\] Yeah, so we're saying that those readers are even new to CSS, or may have done it as like a request, that they don't normally code and CSS, but they like have to go out the way to cover a gap... So the idea behind it is lowering the barrier to say, "Anyone can pick up this book and learn about CSS." So yeah, it's like for the beginners who just have that interest, may have heard about it, and want to get stuck into a project.

**Martine Dowden:** The other thing we did is the chapters build on each other. So like the first chapter is going over the real basics, and then as you move on through the book, the concepts get a little bit more complicated and a little bit more involved, and we start tying them together. So it can be for somebody who's never touched CSS, who's been forced to touch CSS against their will - because nobody's ever had to do that - could definitely work their way from the start up. Or if it's somebody that already knows CSS, or already knows some, could totally use it as a reference for "How would I do that one thing that I can't remember how to do, or that little trick that's obnoxious, and I can never remember?" There's always those little things. So it really just depends on where you are on the spectrum. But it's totally usable for both crowds.

**Nick Nisi:** And I feel like those things change so often -- well, not really so often, but like they just improve so much. If I never looked at a reference for anything like this again, I'd still be using an image to do my rounded borders. But you know, there's new and better and exciting ways to do these things, and I love that this calls out how to do those.

**Martine Dowden:** I've always thought of CSS as pretty stable. Very little gets deprecated, and very little goes away... But there was the one thing, and it actually bit us in the middle of the book... The eternal adage for those who've done CSS for a while was "You'll never be able to select a parent based on the child." That was the phrase forever. And then we're about halfway through writing the thing, and has comes down the line. And we're like "Now I can actually do that." So we ended up having to rewrite some sections because of that, because it's like "Oh wait, no...! It's gone. I can no longer say that."

**Amelia Wattenberger:** Yeah, that's something really nice about writing a book about CSS, where -- you know, I wrote a book about d3, and there's new versions coming out... So you know, you have to rewrite parts of it every now and then. So whenever a new version comes out, I'm excited, but also super-frustrated that they changed anything. \[laughs\]

**Martine Dowden:** Yup... I do a lot of Angular as well, and I have that same problem. Every workshop, everything is like "And gotta run the updates..."

**Michael Gearon:** This book doesn't go with too much of the newest CSS properties, so it's well established CSS properties, and values, and those sort of things that are probably not going to go away, but maybe people haven't got a complete awareness of that existing.

Chapter four looks at a multi-column CSS module, and creating like a multi-column layout, which I would say most people don't know about, but exists in CSS.

**Martine Dowden:** Oh, and it has forever.

**Michael Gearon:** Yeah, it's raising the awareness of things that you might not know about CSS.

**Nick Nisi:** Yeah. And I feel like -- everyone's experience varies, but it feels like a significant portion of my career, whether I want it to or not, is always trying to abstract away CSS, in some way or another... And I did notice that I didn't see any CSS-in-JS pieces in here, which is refreshing.

**Martine Dowden:** We did that on purpose. We wanted to focus really -- and so the last chapter, we were going to touch on pre-compilers, specifically. I mean, there's \[unintelligible 00:09:29.29\] but we'll do it in Sass, because it still seems to be the more prominent one... We'll touch on that. But the idea was to really show the concept in CSS itself, because then, whether you're using a pre-compiler, whether you're doing CSS-in-JS, whatever, the important bit is understanding the concept; after that, you can abstract it to your own environment, do what you want to do with it. But if you don't understand the core, the base, you're still going to be struggling, right?

**Nick Nisi:** Absolutely.

**Amelia Wattenberger:** Yeah. Like, building a strong foundation that other people can then go on to build on top of.

**Martine Dowden:** \[10:03\] Exactly.

**Michael Gearon:** Yeah, I think that people learn CSS through frameworks, and don't learn what CSS is, but they learn "Oh, add this framework and you can magically add classes", and then you've got this webpage that's complete and looks fine, but you might not actually understand what's going on behind the scenes. So it's a conscious decision to not talk about frameworks, or naming structures too much. It's more about just learning the basics and getting that right. And then when you do want to go out and experiment with the frameworks and those sort of things, you actually know what's going on.

**Nick Nisi:** Yeah, absolutely. That touches on something that I guess I relearned recently, when I was talking to some of the more junior members on my team about Tailwind specifically. They're using Tailwind in their projects, and that's a divisive thing, whether it's good or not, that I don't want to get into... I like it personally. But they were talking about how it's actually difficult to know what to do with Tailwind because it maps so closely to CSS. Like, you really do have to know CSS to know "If I want to center this thing - well, there's the different CSS ways to do that, and then I just have to look up the translation to a Tailwind class." Whereas in other projects, where we're abstracting a lot of that away, and you just set a prop on, you know, a React component, and then it takes care of that internally somehow... But the prop is more named to like "Oh, I want to center this thing." And it's not like, "Oh, I want to have like a flex with all of that stuff." So it just really reminded me how much a good foundation in CSS -- how valuable that really is for things like Tailwind, but also just for diving a little bit deeper on everything.

**Martine Dowden:** Yeah. If you're using Tailwind, I would assume you don't have the crutch of important -- just, you know, because that's such a common pattern, right? You can tell the level of a developer who's touched a piece of code and how much they love or hate CSS by just doing an important count. Like, those two metrics will give you a nice "What was the level of the developer and how much do they hate CSS?" \[laughter\]

**Amelia Wattenberger:** To show you what developer I am, I have definitely used important in Tailwind; it is possible. \[laughs\]

**Martine Dowden:** Oh, it is? Wow, okay...

**Amelia Wattenberger:** Yeah. \[laughter\] So one thing that I think a lot of developers never really dive too far into are the different layout mechanisms for CSS. I think they learn -- there's absolute and there's relative, but they don't talk about like flex, and grid, and how are these things different, and what is inline block, first block... So I'm curious how much space you devoted to that in the book, because I feel like it's this rabbit hole that could be as large as the container you put it in.

**Michael Gearon:** Yeah, definitely. We basically cover most, if not all of the layouts. So we do cover Flexbox, we cover the multi-column layout module, we cover grid, and then we also cover float, which Martine, I'm sure you want to talk about float. We used to use float a lot, and now we use Flexbox and grid; but float hasn't gone away... So yeah, I think Martine is probably best placed to talk about float, because she wrote the chapter all about float.

**Martine Dowden:** Yeah, float... I have a soft spot in my heart for float, because I spent years fighting with it, and now that I know that we have other layout capabilities... There's so many things it's really good at, but because we've spent so many years fighting with it, using it for things we never intended to, it got a really bad reputation... And it has its intricacies, but we spent a considerable amount of time actually talking about those layouts. We also talk about the differences between position absolute and relative, and how they interact, which is often one of the bit more complex pieces as well.

I think like the first four, five chapters -- except for the first one, which goes over how to just do properties and classes and stuff, I think three or four chapters after that are pretty much the core focus is layout.

**Michael Gearon:** \[14:10\] Yeah, it definitely does take center stage, layout, in some sort of way... And you know, we do go through that confusion between when to use Flexbox and when to use grid. I don't think that's always clear, the differences between the two... And they can be used interchangeably, but there's clear differences between grid and Flexbox, and it's definitely something we explore.

**Martine Dowden:** I feel like those two are the new hammer... Like, float used to be the hammer, and now I feel like those two have become the new hammer.

**Nick Nisi:** That's exactly what I was gonna say... Float is my hammer, because I hadn't learned -- up until earlier this year I was still supporting IE 11.

**Martine Dowden:** Oh, I'm sorry... \[laughs\]

**Nick Nisi:** I know... I'm not sure if they had grid support. I don't think they did. But that's the level of progression I got to, was there. And now I'm trying to learn grid on top of that. But right, now everything looks like a flex to me, and I could just do that... And I feel the same way right now with container queries. I see a lot of excitement around that, but then I look and I'm like, "Well, I can't use it because Firefox, so I'm gonna ignore this for a year, or whenever it comes out for that, and then I'll look into it again."

**Amelia Wattenberger:** It's funny how our growth as developers is stunted by the size of application we work on. I can only be as good as the browsers that I have to support.

**Nick Nisi:** When you put it like that... \[laughter\]

**Michael Gearon:** It's really interesting, actually, about browser support... And this is something that we had to be able to talk about, is how far back do we go with browser support... And we consciously decided not to support Internet Explorer; we thought that that's \[unintelligible 00:15:49.21\] and let's move on... Because otherwise, this book probably wouldn't develop as much as it could have, if we looked back at Internet Explorer and made it work for a browser that we're trying to move away from, for the last decade, it feels like...

**Martine Dowden:** Well, and Microsoft discontinued IE, officially; like, it buried it, put a tombstone on it...

**Nick Nisi:** In June. On June 15th.

**Martine Dowden:** And I threw a party, I won't lie, and it was like "This means I never have to talk about it ever again. If you're still using it, that's on you." That's my stance on the thing.

**Amelia Wattenberger:** You're probably used to it not working.

**Martine Dowden:** But for your comment about IE and grid - IE 11 did support grid, but it supported a non-standard implementation. So it was the worst of all the worlds, because it did support it... Ish. \[laughter\]

**Nick Nisi:** That really is much worse.

**Break:** \[16:41\] to \[17:54\]

**Nick Nisi:** So in the last section we mentioned that IE 11 had a non-standard grid implementation... But maybe let's dive deeper and talk about standard grid implementations... Specifically a chapter that's covered in your book, all about laying out with CSS grids. So why don't you tell us about what we can expect to learn in that chapter?

**Michael Gearon:** So you can learn about, first of all, what grid tracks are, so how we can structure our grid... So like the first step when using CSS grid is just creating the full structure, so setting rows, setting columns... Then we progress into looking at some CSS grid functions, so looking at the min/max function, and also the repeat function...

So the repeat function is quite an interesting one, because you can say, "In grid, I want two, three, four, whatever columns, or rows, this size." So to improve the readability, you've got the repeat function, which is quite a nice, interesting feature of grid.

Then we explore like how to size your grid. And again, it touches into something which is fairly new to CSS, which is the fractions unit. The fractions unit is specifically for grid. The fractions is a way of saying "Oh, this column should have 1/3 of the spacing", and then you can say, "The rest of the columns, or the rest of it should have two thirds." Which is, again, an interesting one.

And then towards the later parts of the chapter we look at accessibility, and what the implications when setting up a grid, and thinking about the way you structure your grid - does it logically make sense if you were going to listen to it on a screen reader, and not visually, but actually... You know, does the underlying structure match what's visually shown? So yeah, it's quite a lot going on.

**Amelia Wattenberger:** I love the focus on accessibility. I feel like that's something that's really easy to skip over, especially in a book where it's not really visual, and you can't show the graphics of it. One thing I'm curious about is how did you choose the examples for these chapters? And also, how did you get to a place where you're like "This is the right way to do it"? Because I feel like there's so many different ways to do these things in CSS.

**Martine Dowden:** So for choosing the actual project, there's a little bit of what -- it's that game of what concepts... You know, you're marrying up "These are common patterns, these are common UI elements that we see", and bearing up, "Okay, with these common patterns and UI elements, what can I build, and what techniques would I use?" And then based on that, you can kind of divvy up into, "Okay, this would work well for this sort of chapter, this would work well for those sorts of chapters." So it's a little bit of the game in terms of figuring out -- either we already had the concept and had to come up with the project, or we had the project and we're "Okay, what concepts match with this project?"

And then in terms of the right way, we tried to pick for implementations that really showed a clear forward path of how you would utilize this particular property, or this particular element, and getting a little bit more complex into the book in terms of "Okay, we show the basic implementation in this chapter", and maybe in a chapter down the line we might show one of the bit more intricate implementation of that same concept, or whatever.

But basically, trying to keep for what is going to show clear code, and for any given chapter, would there be a more efficient way of writing it sometimes? Are there things that maybe in the real world we would have done slightly differently? Probably, just because we're trying to show a concept, or we're trying to show a particular technique. Generally speaking, those things are called out when that happens, but at some point, you have to make a decision to be able to show the code, right? But CSS is no different than any other language; there's always seven ways till Sunday to lay something out or to do something; there's very few times where it's like, "Nope, this is the one and only way to do this."

**Nick Nisi:** \[22:05\] So you're saying you could use flex here? I'm trying to make a joke... \[laughs\]

**Martine Dowden:** In the grid chapter, you could... You'd end up with a lot of extra divs and a lot of extra code, but you technically could achieve that layout with the flex, yes.

**Amelia Wattenberger:** Or you could just have like 20 images. \[laughs\]

**Martine Dowden:** Oh, we could just go back to tables and slice and dice; it'll be fine. \[laughter\]

**Amelia Wattenberger:** Exactly. The good old days...

**Martine Dowden:** Talk about not accessible at all...

**Amelia Wattenberger:** I love the graphics. I'm just looking through this chapter... I think they're really -- they look great, and I feel like they're really informative. How much time did you all spend on making the graphics to support concepts?

**Martine Dowden:** It depends on the graphic...

**Michael Gearon:** It depends on the complexity. Some of them, especially in CSS grid, I think like one of the first -- it's a little bit further down, but when we're talking about grid structure, and it shows quite a few concepts... So it looks at what does a track row look like, what does a track column look like, and then the positive numbers and the negative numbers - there's a lot of trying to communicate in one graphic... It took a lot of fiddling, but we managed to get something where it's working.

I think one of the nice things with writing for Manning is that we've got this process of going out to readers and getting their feedback... And we've had that feedback, say like trying to improve the clarity of the graphics as we're going along, and we were kind of coming back to these chapters and making those tweaks, to try to improve them forever.

**Amelia Wattenberger:** Yeah, that's really great. One of the things that I've found really difficult with writing a book is -- like, the code is in one place, and then the book is in another place, and then if you want to update the code, how do you update the book? What's a seamless process for that? Did you all have like a sane pipeline for that, or did you also find it a little bit maddening?

**Martine Dowden:** We have GitHub, we have the manuscript, we have -- no, it's... I really wish there could be a "Pull this directly from my GitHub and auto update", but that's not... It's copy-paste, and then... Then, of course, the text editor wants to capitalize the beginning of every single line of code... Right?

**Amelia Wattenberger:** Oh, no...

**Martine Dowden:** It's exactly the mayhem you would imagine it is.

**Michael Gearon:** Yeah, it's often a Slack message that's saying "Oh, can you go and update this code in GitHub?", and then I go off and update the code in GitHub... So a lot of communication, a lot of kind of -- once it's out there, it looks like we've done a good job, but behind the scenes - chaos.

**Nick Nisi:** It does look really good. That was gonna be one of the questions that I ask, is how you maintain the manuscript and the code together. And I guess that's exactly what I was expecting for an answer.

**Martine Dowden:** We did get smart and we are working in Google Docs, so at least we don't have versions of the manuscript floating. So at least there's that.

**Nick Nisi:** Yeah.

**Amelia Wattenberger:** Final-final.

**Nick Nisi:** That was gonna be my next question, is what do you actually use to write? So Google Docs; that's very interesting, and fantastic. Such an easy way to collaborate.

**Amelia Wattenberger:** I think especially with the two authors, and also the publisher - it seems like the right way to do it, as opposed to the emailing the files back and forth...

**Michael Gearon:** And, you know, we're all over the place in terms of geographical. Martine's over in America, I'm in the UK, our editor is kind of in America, but a completely different place... And yeah, I think then we've got another one or two editors in a different place altogether. So it's truly like a global book that's being formed here.

**Amelia Wattenberger:** Oh, that's so fun.

**Nick Nisi:** So going through this chapter, I see a lot of things that I need to go and visit back to. I'm looking specifically at the -- what's it called?

**Amelia Wattenberger:** The template areas?

**Nick Nisi:** Template areas. Grid template areas.

**Martine Dowden:** Yeah...

**Nick Nisi:** That's super-interesting to me, as someone who doesn't know grid...

**Martine Dowden:** \[25:58\] I personally prefer that to doing the numbers, because I can name my areas. And especially -- I mean, I know it's very ASCII-art-ish, but when you're laying it out in the code, you end up with your "Here's what I have on my first row, here's what I have on my second little row", and it's all named. So from an understanding where my stuff's gonna end up, I find that that is visually a lot nicer to comprehend. Now, obviously, not all use cases you're going to be able to use that technique. But if possible, that's the one I tend to lean towards and prefer, because it's so much easier to process, at a glance, "This is what my layout is" in one place.

**Nick Nisi:** So is that going to, then with any -- like, the one that says author, for example, in this, that has it over to the right and the second row, all the way to the right... Is that saying that any DOM element that you give a grid -- I forgot what it's called... A grid area called author - it's just going to put it there, it's always going to exist over there? Is that how that works?

**Martine Dowden:** Correct. But if you put that on two of them, they will be on top of each other in that area.

**Nick Nisi:** Okay. That's fascinating, though.

**Michael Gearon:** I think what's quite interesting on grid areas as well is that if another person comes along at a later date to manage your CSS, it's a little bit more clearer if you said like "Here's the header." You know, if you've said header, you go "Yeah, I know where headers should be on the webpage, so I can imagine that layout." You know, when you say like footer, it makes sense; you would expect at the bottom. Although that could cause complications, because you can quickly create a very confusing layout if you said, "Oh yeah, my template area, I'm gonna call it footer, at the top", and you put the header in there. So it could be potentially quite confusing, but if you're logical, then you can create a layout which makes sense for someone else to come along and go, "Oh yeah, I see that structure, that layout."

**Amelia Wattenberger:** This comes up a lot with the CSS-in-JS, and Tailwind, where the web doesn't make sense anymore... Like, if you look at the source on a web page, you have all these hashes that make sense to computers, but not necessarily to humans. So I like that theme. Sorry, Martine...

**Martine Dowden:** I was just gonna say that it all boils down to naming. It's the same reason you don't name a class blue, right? Because inevitably, whatever was blue, somebody's going to change the design and it's going to end up some other color, and now you have a class blue that turned into something orange, or whatever the case might be. But I think not necessarily specific to grid, class naming is just as difficult and just as important as variable naming in JavaScript, or whatever other language... And focusing on the semantic rather than what it does is really, really helpful when you're writing your own CSS.

**Michael Gearon:** And then what's quite interesting with the grid area is you can then combine it with like a media query, just to say as the layout changes, as your browser \[unintelligible 00:28:49.22\] or wherever that media query changes, you can then update the grid template area to say, "I want to rearrange that layout to make more sense, so you could have a different experience for mobile as you would for desktop."

But then it comes back to the point around accessibility, that if you change the template areas too much, then the way it's been coded could be different than the visual order, so the two can fall out of sync a little bit. But it is interesting how you can use a media query in conjunction with this to create different layouts pretty quickly, to suit different devices.

**Nick Nisi:** Yeah, that's fascinating.

**Amelia Wattenberger:** Oh, that is interesting. Do screen readers read in the DOM order, or in the grid area?

**Martine Dowden:** In the DOM order. And it's true with flex too, especially when you're dealing with reversing, and those sorts of things. Whatever the DOM order is, that's what's gonna get read; or even -- the easy way, if you're not a screen reader user, to see is if you're tabbing through links in a project, you want that tab order to be logical from top left... Like, at least for English speaking, from top left to bottom right. And so if your grid now magically has this element that in the HTML \[unintelligible 00:29:58.00\] at the bottom, but you've placed it at the top, your tab order's going to go all sorts of which way inside of your grid, while your screen reader is going to read it in the DOM order as well.

\[30:11\] So there's a misconception that only blind users use screen readers. That's not exactly the case, right? You might be using a screen reader as a support for helping you understand what's on the screen, in which case you're looking at the screen and listening to the screen reader, and so you really want that DOM order in that layout to make sense, so you can follow along, if that makes sense.

**Nick Nisi:** Mm-hm. In terms of accessibility for grids, is there anything beyond layout that you need to be aware of?

**Martine Dowden:** That's the big one... I mean, you want to always make sure your reflow works. So if you do like Ctrl+Shift+Plus, and you're blowing stuff up and shrinking stuff down, you always want to make sure that that works, because of magnification on a device. Those are probably your two big things with grid. It's just a matter of testing at that point.

**Nick Nisi:** Yeah. What's that? \[laughter\]

**Martine Dowden:** It's that thing we do in production -- what? No... \[laughter\] It's not the thing users do in production?

**Break:** \[31:12\]

**Nick Nisi:** Okay, so another chapter that we wanted to touch on from your book, Tiny CSS Projects, is the sixth chapter, which is about creating a profile card. So this one does a lot in terms of like the overall CSS that you'll use, and I just got really excited. We talked about this in the first section, like, this is such a cool, contained component, that has so much in it, and it's something that I have totally written before, and will write again, in little pieces of it... And so why don't we dig into it and talk a little bit about what it is and what we're going to learn?

**Martine Dowden:** \[34:11\] So basically, I mean, whether it's a social media thing, whether it's an account thing, whether it's a manager, personal preferences thing, inevitably, most applications at some point have some kind of profile. And so this is kind of that stereotypical profile card where we have the picture of the person, or an avatar for the person, and then their name, and then what they do... We ended up putting things like their profession, and stuff like that, but depending on the application, it could be anything. The point isn't necessarily the content at that point; it's to show how you would display the information for that person. And that very stereotypical avatar info may be some links, right?

**Amelia Wattenberger:** I like this chapter, to talk about the chapter after we talked about the last one, because it seems like this is the one in which it introduces Flexbox, right?

**Martine Dowden:** Yeah, that's the one where we use and abuse Flexbox for absolutely everything, just to show what it can do, what are the things that can be done with it, what are the various properties to use with it, that sort of stuff. Because the interesting thing with Flexbox is it can get used for layout purposes, but also like for positioning elements relative to other elements... So things that we used to do, like having to calculate the exact margin of elements to be able to spread out -- the nav, where you spread out all the pieces across the screen, so you give a fixed width to each of the things, and God forbid you gave them an inline block, and so now you have to account for that one pixel weird thing that inline block does when you're doing... You know, spreading it out based on percentages... Flexbox does all that for you now, and it's so much nicer, and so much more robust than that little game was. But we show how you would use it to like center something on a page, or to center a div... The quintessential "How do you center a div?"

**Amelia Wattenberger:** We've solved it! \[laughs\]

**Michael Gearon:** It's 100% my favorite two properties in probably CSS, is align items and justify content, and just use the value center, and just see the magic of it just centering up. It's just amazing.

**Nick Nisi:** I use those all the time, but it's a constant battle of, "Oh, I want to vertically center this, and I put the wrong one in, and then I put the right one in..." Or I put the right one in, and then the wrong one in, and then the right one. It's like a USB, it's like some quantum state, I have to be in three states before it actually works... But all that to say I can never remember which one does which. \[laughs\]

**Martine Dowden:** Well, and then if you flip, if you do flex direction column, and you change it from being on the X axis and the Y axis, you're behaving differently on the two, yeah.

**Amelia Wattenberger:** So y'all have a good mnemonic for -- like, one is in the axis of flow, and one is in the other axis, but like, align items and justify content... None of those words make any sense to me.

**Martine Dowden:** So I don't have any mnemonic, but if you go to CSS Tricks, there is a cheat sheet for both flex and grid, that are absolutely brilliant. I still reference them when I forget. Those would be -- because it has the visual drawings of what's going on with it. It's a question of you already kind of understand what grid and flex do, and just need that refresher of what the properties are and how they work... That's a great one to look at.

**Nick Nisi:** Yeah, and the other piece of that is align items versus align content. And the same for justify. I can never remember

which one of those.

**Michael Gearon:** \[37:42\] One of the other interesting things we cover in chapter six is around custom properties. So custom properties - again, fairly new, and definitely a hot topic... So custom properties is a way of setting variables in your CSS. So you can say in your body element, "Here's like my primary color, here's my font", and you can kind of set up all these variables and then in your CSS you can kind of reference those variables. What that means is is in terms of maintainability, you can make that change once, and then it can have that effect then for the rest of your CSS, which is really powerful, and I think it's just a really super-interesting property that we've got now.

**Amelia Wattenberger:** I think those, along with like calc, and min/max, and all of the math CSS functions, CSS methods - I don't know what they're called - are so powerful. I've used those greatly, all the time.

**Martine Dowden:** The custom properties are also really powerful for doing themes. Because then what you do is you set for your themes -- you know, you just write your CSS with your custom properties, and then you just change the properties for each theme, and go forth and conquer. So that makes theming so much easier than it used to be... And it means I don't have to remember hex codes, because who remembers hex codes...?

**Nick Nisi:** I love that. Another thing that I really like is -- like I mentioned earlier, picking out examples of this, of like "Oh, the profile picture, or the avatar that is being used in the profile card." Like, in the past, I might have done that with like a div, and then a background image, and all of that... But this is using the image tag, which is accessible, and you can add an alt text attribute to it... And just giving me that idea of how to style it properly and accessibly is really great, in a real world example.

**Martine Dowden:** Well, the object size is really powerful too, because now you've got, you know, being able to adjust the image. The same way that background allowed us to have cover for quite some time now, you can do that on the image now, which didn't use to be the case. And that's really what allows that to be possible, because otherwise if you're trying to make a rectangular picture square to be able to round your corners and get a legitimate circle, and not some \[unintelligible 00:39:57.00\] monstrosity, you kind of needed that. So that technique of using the background color just as much as a handful of years ago was pretty much kind of how you were going to do that... Because we didn't have clip path at the time, and we didn't have any of the other, you know... So that's what you had.

**Nick Nisi:** Yeah.

**Amelia Wattenberger:** I'm curious -- I feel like your book goes into depth so much... Did you all learn anything while writing the book? Or is this mostly knowledge that you already had?

**Martine Dowden:** There's a couple properties for me where it was like "Oh, it can do that?" Or like, "Oh, there's a value for that?" There's always details that you learn writing stuff, because you know, I'll be referencing something to go make sure I'm correct, or make sure that I'm not saying something dumb, or double-checking the CanIuse, like "Oh, this is now fully supported. I didn't realize that." You know, those sorts of things.

For the most part, the core concepts I think we already both pretty well knew it was -- once you get into the weeds, into the details, where you always end up learning something new.

**Michael Gearon:** Yeah, 100%. I think we knew what was going on, but it's like working out what's actually the case right now, and what was the situation. And it's like working out. "Which bits do we include? Which bits we don't include?" and those all decisions. But yeah, for the most part, we had the underlying knowledge.

**Nick Nisi:** Is there anything that you didn't include, that you wish you could have? Maybe because support is just not there yet, or it's not completely finalized, or something like that...

**Martine Dowden:** I think container queries for me...

**Michael Gearon:** I was 100% gonna say the same thing, container queries. \[laughter\] But you know, that kind of took off like halfway through writing this. That's just the situation. But yeah, container queries, 100%. I would have loved to have covered that.

**Martine Dowden:** \[41:50\] I think user invalid as well, for me... Just for forms. Because we already have - like, you can check that input is invalid, but user invalid bridges that gap to somebody having interacted with the property. And so now you can have "has user invalid show my error message", which completely changes the game and means that you can show error messaging using CSS. Well, you still have to handle the accessibility side of it, but in terms of the show/hide and everything else, you're down to a CSS solution, without having to do -- and then for animations and stuff, it becomes a lot nicer, and things like that.

So the user invalid for being able to not yell at the user the instant they load the page, because the thing is invalid, would be really nice. But I think only one browser supports it at the moment. I'd have to double-check.

**Nick Nisi:** Yeah, Firefox. I was just looking it up, because I have not heard of this... But this is amazing.

**Amelia Wattenberger:** Yeah, I feel like there's so many hacks where we reached for JavaScript in the past that CSS is slowly taking over all of this ground, and I appreciate it.

**Nick Nisi:** But it feels like so much of a contained way of doing it, right? It's just like, "Just use this attribute" or whatever it's called, and you're done. You don't have to bring in some library, and do it in some specific way.

**Amelia Wattenberger:** Oh, just import... \[laughs\]

**Nick Nisi:** Yeah.

**Martine Dowden:** npm install. It's the solution to everything -- no, no.

**Amelia Wattenberger:** Is there any chapter here, or concepts where you feel like it would have really saved you a ton of time and effort when you were learning CSS? Like, "Oh, if only I had been told X five years ago..."?

**Martine Dowden:** Forms.

**Amelia Wattenberger:** Interesting.

**Martine Dowden:** Because of styling radio buttons, and styling dropdowns... And understanding why CSS wouldn't let me do the things I was trying to do I think would have saved time and frustration a lot.

**Michael Gearon:** Martine, I think you've definitely committed to that, because chapter 10, about forms, is our longest chapter as well, coming in at about 41 pages. So yeah, Martine is definitely committed to sharing her findings on forms.

**Martine Dowden:** They're complicated. That's all there is to it. They're just hard.

**Michael Gearon:** Yeah. For me, I think, grid, Flexbox, those sorts of things... When I learned CSS, they didn't exist. I learned it, obviously, as we go along. But I feel like now having grid and Flexbox kind of in a project format, for me personally, I kind of liked that approach of doing something visual, and kind of seeing something, and how that CSS can affect the layout... I think that's the useful thing. This is why I kind of like this book in particular, is you're focused on a project and you learn the CSS as you go along. So it's just a personal preference of how I like to learn CSS.

**Amelia Wattenberger:** I 100% agree.

**Martine Dowden:** There's a goal or a reason, right? Because it's so hard to learn something if you don't know what you're applying it to, or what it's for, or what the reason is... Because I can get told I need to know advanced algebra in order to be an architect for a bridge, but if I'm getting taught the math to architect the bridge while building the bridge, it's a lot nicer. Probably not as safe, but a lot nicer. \[laughter\] Probably a bad example.

**Amelia Wattenberger:** The quick wins are so important, right? When I'm learning something, I don't want to just read a reference manual; I will lose interest within 30 minutes. But if I'm making something and kind of see how those apply, I'm going to be motivated to keep going.

**Nick Nisi:** Exactly.

**Amelia Wattenberger:** It's really nice.

**Nick Nisi:** Yeah. And having practical examples. Because maybe I'm looking up something specific, like, "Oh, I want to use this specific property", but then I see a real-world example and it's like, "Oh, maybe I'm wrong in my assumption that that's what I actually want", and I can see "This is a better way to do it", or a more accessible way. That's one thing that I always come back to. So just being able to compare and pull out pieces from little contained projects like this is so nice.

**Martine Dowden:** Actually, that's one thing I wish I had been told early on in my development career, is "Don't bother trying to read the specs cover to cover. Go find the piece you need out of the spec, when you need it."

\[46:09\] Trying to read specs cover to cover before you start coding the language is a fool's errand. Like, I wish I'd been told that. Because the nerd in me went straight for "Oh, you're gonna learn the WCAG specification. Good. Let's go read the spec." And I tried to do that with XSLT, and... Yeah, no. No.

**Amelia Wattenberger:** It's ambitious.

**Nick Nisi:** Yeah.

**Martine Dowden:** In fairness, I did not make it through. \[laughter\] But the hours I spent before I started... You know, I wish somebody had told me that was not the way to go.

**Nick Nisi:** Some of the other projects in here include like a web newspaper layout, hover interactions, we talked about the profile card... There's a whole section on float, which is awesome. I want to dig into that a bit more. A checkout cart, the big forum section, which is also something that I really need to go through... And more. And then you talk about pre processors as well, to end the book. So there's a lot that we can pick up and learn from all of these little projects in here. In terms of the book, it's not officially out yet. Is that right? It's in Early Access still.

**Michael Gearon:** Yeah, so it's early access. There's 10 chapters released right now. We're working on the last two chapters, whilst going back and refining, and taking on board all that feedback. So as we discussed earlier, the great thing at the moment is we're getting feedback as we go along, and making those adjustments. And then yeah, so the idea is I think it's going to go for the Big Bang sort of publication sometime early next year. So yeah, still a lot of activity going on.

**Martine Dowden:** You don't need to be to be special or have anything to be able to get into that early access. It's available through the Manning MEAP program. So you just sign up and just know that it'll be -- you know, it's the pre-release version, so yeah, there's typos... You know, we're still refining. And I think the pre-sales are up on Amazon, I think now, as well. When you buy the pre-release version in MEAP, it does, I think, the ability to go ahead and buy the paper copy for whenever it comes out... I think. Don't quote me on that.

**Nick Nisi:** It does, yeah. I was just looking at it.

**Martine Dowden:** Okay, there we go.

**Nick Nisi:** I'm a big fan of these, because when I see these books -- sometimes the ideas are so fresh, and so exactly what I need right now, and I don't want to wait... So I love that there's this ability with the MEAP program and things like that, to be able to just get at it... And you know, with the understanding that there might be things that change, or things that are broken, or not exactly as fine-tuned as you'd want... But you really get the gist, if you need. And if you're going to pick and choose like pieces of it too, it's such a good resource. Any final thoughts about the book, about CSS, about CSS-in-JS?

**Martine Dowden:** \[laughs\] There's a lot of -- so I laugh at the CSS-in-JS because it all boils -- I mean, there's religious wars over that, and over frameworks, and stuff, and it's like, do what you need to do to get your project done. But if you have the time and you want the knowledge, learning the core basics of CSS will help you in any of those scenarios, and is definitely valuable, regardless of what technique you're going to be using and/or applying it within. I think that'd be kinda all opinions about it, those other religious wars aside... Because they exist for a reason, right? They exist to solve a problem. But the end-all-be-all is if you have the time and want the knowledge, learning the actual CSS underlying all of that will definitely be helpful, regardless of which technique you're using. Michael, how about you?

**Michael Gearon:** I couldn't sum that better up. Like I said, CSS is probably, or definitely - I'm not gonna go with definitely, but I'm pretty sure it's not gonna go away anytime soon. So I feel like I can be confident in saying "Yeah, you can pick up this book, you learn one of the three underlying principles of a website; you know, HTML, JavaScript, and then CSS." And you should be able to get a little bit more the idea of how to start a web page, what's going on, kind of understand that magic a little bit better. You kind of know what's going on, rather than being that developer or that person who said, "Oh, can you make this change?" and you're trying to hack it together. You can get a bit of a better idea of what is actually going on.

**Nick Nisi:** Absolutely. And yeah, I think that really understanding that all of those libraries, and you know, whatever you're using, it's boiling down to this, right? There's always these new features coming out... It's much slower than what we're used to with JavaScript, for example, but there's a lot of features that come out. And I think just keeping abreast of what is out there, and what problems are being slurped into CSS itself to solve - it helps you make better decisions about "Well, I don't really need this anymore, right?" In JavaScript, that's Leftpad, right? We don't need that really anymore. But CSS kind of has the same thing, and just kind of understanding how those problems are solved, and when you no longer need to externally solve them is a good thing to keep on top of.

Alright, well thank you so much for joining us today. We'll have links in our show notes - links to the book, links to some of the topics that we've talked about. Definitely go check it out, and enjoy writing CSS. We'll catch you next time.
