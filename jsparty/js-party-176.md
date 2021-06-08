**Emma Bostian:** What's up, party people?! We have an exciting episode today. We are talking about everyone's favorite programming language, which is CSS, and I'm very excited, because we are joined by one of my favorite Twitter acquaintances, but also we worked at the same place, at the same time, without ever having spoken... But that is Una Kravets.

**Una Kravets:** Hello! It's so funny that you say that, because I just recorded a podcast yesterday, where I'm interviewing someone who worked at IBM at the same time that I did, but it was just such a big company that we never kind of see each other... But hi, everyone. My name is Una, I'm a developer advocate at Chrome, focusing on CSS and DevTools, basically just trying to make the web platform a little bit better and more stylable for all the people that are trying to build on it today.

**Emma Bostian:** Yay! We're so excited. And Una and Adam Argyle have your own CSS podcast, so I'm thrilled that you were able to join us and share some knowledge.

**Una Kravets:** Yes, I have two podcasts, actually. I have the CSS Podcast, which is focused on CSS, and then I also host a podcast called Toolsday with my colleague Chris Dhanaraj, who also worked at IBM.

**Emma Bostian:** Yes, yes, yes. I knew Dhanaraj.

**Una Kravets:** Yes. So we've been doing that podcast for 5,5 years now. It's kind of crazy.

**Adam Stacoviak:** Wow. Congrats.

**Una Kravets:** I know, I feel old... It's not like a congrats thing, it's like a "Wow, we've been doing this for so long." But it's fun to record that podcast too, because unlike the CSS Podcast, which is mostly information that doesn't change, it's about the spec, this podcast is about tech tools. Things are changing all the time, and the tools that we used five years ago are just completely different than the tools that we're using today. So it's fun to see how that's evolved.

**Emma Bostian:** \[00:04:03.29\] Absolutely. Well, I'm excited to chat a little bit more about some difficult CSS concepts, but we're also joined by Adam Stacoviak, who is a big-time player in JS Party, but you don't often join us, do you, Adam?

**Adam Stacoviak:** Almost never, except for when it makes sense, which is almost never. \[laughter\] There you go.

**Emma Bostian:** Well, we're excited that you're here. I'd say we kick things off by just having a really quick discussion around why CSS has such a polarizing reputation. I've noticed this in the techsphere on Twitter. I personally love CSS; I think it's invaluable, and has a lot of strengths... And it's a lot more robust of a language than we give it credit for, but a lot of people either say one of those things - they either say it's too easy to be on the same level as JavaScript, or Java, or another language, or it's too difficult to learn properly, and they just don't understand specificity and all of those things. What do you y'all think about this polarizing issue?

**Una Kravets:** I think that a lot of it stems from this division that we used to have very clearly in design versus engineering... And I do think that some developers kind of equate CSS with design, and don't really think of it as engineering, which I think is very inaccurate. CSS is one of those languages that is very easy to pick up quickly and learn things like how to change a text color, but it is very tricky to master... And that's where we see a lot of the frustration now. Because I think what's happening is when you look at job listings, you will see "Requires five years of React experience and JavaScript." You're not gonna see as often "Requires semantic HTML and CSS styling experience." So bootcamps aren't teaching proper CSS and HTML semantics. They're just kind of focusing on what the resumes need to say to get a job.

So now we have all of these senior developers who have been working in the industry for years, who don't have a strong baseline for how to style things on the web, and it's because it's not as valued in resumes... And then you find these companies kind of struggling with accessibility, and with just getting things to have decent user experiences... And I feel like the web is worse off for it right now.

**Emma Bostian:** Yeah. And I think there are severe implications to not understanding CSS... One example I always like to give is this example from a book called Atomic Habits by James Clear, and it says "Imagine you're flying from L.A. to New York. If the pilot leaves from Los Angeles airport and adjusts the heading of the airplane just by 3.5 degrees South, you're gonna land in Washington DC instead of New York." And for those non-United States of America listeners, those states are not close. My point with this is that we get high-fidelity designs from our designers, and if we are not careful with implementing those designs are they're meant to be, in terms of respecting padding, margin, color properties, typography, our product is going to look vastly different, even though they're minor changes in your eyes.

**Una Kravets:** Yeah, and it's not even just about typography and color... It's about layout, it's about user experience, it's about overall the ability to implement components that are useful, and that work effectively... And this is core to building web apps and websites. But I think that when we equate JavaScript to logic and action, and then CSS to just a layer of design, that's where I think that there is a little bit of a disrespect for the craft of a website. I mean, it's very clear that user experience is the number one driver of users back to your product, and differentiator of your product... So I think that it's a little bit telling now, as we've kind of fallen into this trap of "Oh, we have all these developers who don't know styling anymore", how important this has become, to kind of reeducate people and bring back to the forefront of web development.

**Emma Bostian:** \[00:08:08.09\] It's also an accessibility issue, too. One common issue I see - and actually, this is a common interview question as well for frontend development roles, is "How would you visually hide something in the DOM, but still make it available to screen readers?" And a lot of people don't know this. Putting a display none on an element seems like a quick fix, but in reality that's going to make it inaccessible for people relying on these tools. So it has implications above and beyond just these "superficial" reasons.

**Una Kravets:** Yeah. And there's so much you can do with CSS to simplify your life... I've seen just so many JavaScript solutions that hack around basic things that you can do with CSS, if you just knew like a line of code or two... And to your point, Emma, there is this idea of certain properties affect the DOM and the accessibility tree and other things in very specific ways... And if you kind of skim over that or gloss over that, you might mistakenly make things completely inaccessible. There's also things like content that are visible to some screen readers. There's a lot of nuance in CSS, and I think this is where that whole idea of very easy to pick up and make some things like get a background and a certain text color - yes, but then with mastery of it, with the layout and all of the nuances for accessibility and semantics, that's where things get pretty interesting. And that is where I think the community has a lot of room to grow.

**Emma Bostian:** Absolutely. I would love to talk about a couple areas of CSS that we've found particularly challenging when we were learning... Because I remember sitting in my little office in IBM in Austin, Texas -- first of all, I studied Java in school. I was a computer science major, so I never fully learned web development. Ironically, I took one web dev class, and I've spent one day on HTML and CSS, and then the rest of the time on bootstrapping, PHP... So I never learned CSS. And I remember struggling immensely with position. Position fixed, position absolute... I did not understand the difference between those for like a year at least.

**Una Kravets:** Yeah. It's funny that you actually mentioned what you learned in school, because I also studied computer science, and we did Python and Java... And then I never really got a chance to learn web technology -- my web development class was Cold Fusion, and I never touch that now, even just like MySQL. But I do think that that is funny. I feel like in schools, when you learn computer science, you don't learn web development. You usually don't learn JavaScript. You don't learn HTML and CSS. I got to learn that stuff in a design class, kind of... But a lot of it was kind of like "explore on your own."

But yeah, I think the positioning thing is interesting... With CSS there are a few concepts. There's the box model concept, there's the cascade concept, there's encapsulation, there's compositing, composite layers... And all of these things are various concepts that help you to understand why the language is the way it is

So with positioning, I think that's one example where you're creating essentially a layer of information, where like an absolute position would position something to its immediate parent that has relative positioning in the document. So as that relative parent - or absolute parent; whatever the top-most layer for the positioning is - as that scrolls down the page, that absolutely-positioned element will move with it. So as you move around, a tool tip might be absolutely positioned to its sibling, and then as you scroll, that will move with it.

But then something that is fixed goes to the top-most layer of the root, and it stays on that page. It's funny, because now there's like this whole concept of position sticky, which will stay in scroll when you are at a certain point; you give it a top positioning. But then fixed - it stays on that page. So you can do some fun things like background styles...

\[00:12:01.10\] I saw this one example years ago - talking about college - when it was kind of new, like background attachment fixed, where as you scrolled, only one layer, the background layer moved, but the rest of the page remained the same. So it was kind of like, if you can imagine, a paper doll, and then the outfits are changing, but the head's staying the same. It was that kind of aesthetic.

**Emma Bostian:** That's an awesome analogy.

**Una Kravets:** Yeah.

**Adam Stacoviak:** Well, with CSS, the possibilities are just so massive. There's just so many ways you can style a website, an app... And I think that the reason why it gets so polarizing and so difficult to master is it's just so powerful. And when it's so powerful, it's hard to really know all the things. It's a mixture of design, it's a mixture of engineering, it's a mixture of all these different disciplines... And I tried even googling "What's a current CSS standard?" Is there a way, like "Here is the right way"? There is no right way for CSS. It's more like "Here's a bunch of standards that are adopted by browsers, and find a way to hack those together to make your interesting interface, or your creative ways to do things." Like position sticky, for example - that's a hacky way you can do that, it works, but finding what works in CSS is almost like digging for gold. You might find it, you might not.

**Una Kravets:** I think that this is not actually that much different than JavaScript, where there are a lot of different ways to do the same thing. And there are certain ways that are better for certain situations than others. So I think it's the same thing with CSS. Take a look at Flexbox and Grid, for example. With Grid - Grid is a great layout mechanism that can do the same thing that Flexbox can do, but they're sort of intended for different things. Grid is more intended for two-dimensional layouts, macro layouts it's really good at doing... But it can also do in-line, so like a horizontal menu bar the same way that Flexbox can do. Flexbox has a little bit more, I guess, flexibility, in some ways... \[laughter\] With things that are single-dimensional. So I'll use them for different things. If I have a more complex layout, I'm probably gonna use a grid. I can set the columns, and the rows, and the positioning of everything... And then with Flexbox, if I have an unidentified number of items, I might use that. If I want them to flow in a certain way, I can use a grid, too. But then with cards and smaller elements, I will usually use Flexbox.

I think this is similar to making a decision in what type of function to use in JavaScript to get an output.

**Adam Stacoviak:** Exactly.

**Una Kravets:** You can get an output array in a billion different ways.

**Adam Stacoviak:** Well, you need to experience. It's like any person using a tool, or a set of tools, or learning a set of tools. Over time you become a master because you've had experience with the tool, you understand the minimum and maximum capabilities of it, you understand the nuances of it, and then you know when to reach for it and how to master it over time, because you have that experience.

I don't know how you describe experience - you mentioned a job post, for example, recently; you were saying that five years of React experience and maybe not asking for that with CSS... I don't know why that's the case, honestly... But you only get mastery or even close to mastery with CSS, and I think that's pretty hard to achieve mastery, but - because you get experience, because you build complex interfaces. Not just once, but many times. So many times that you almost love-hate it, because you've just done it so many times and you really understand the tool.

**Emma Bostian:** I was just gonna mention, in the past I think there was such an emphasis on JavaScript... If we took a look at the interviewing process just a few years ago, it was heavily oriented towards JavaScript algorithms, data structures, problem solving... Now we're seeing this shift towards more all-encompassing in terms of technical interviews; you're getting asked to -- you know, "Here's a mockup. Can you create this in HTML and CSS?" I'm happy to see that shift, because now it feels a little bit more equal. But I don't know where this gatekeeping mentality of like "HTML and CSS are not as hard as JavaScript" and it's like, okay, the syntax is more simplistic, but that doesn't mean it's any less powerful.

**Una Kravets:** \[00:15:59.25\] Yeah. And I think another element of all this is the rise of component libraries and systems. I think Bootstrap is actually a really big reason why needing to learn how to style things was less important. I mean, I used to go to hackathons all the time, and everyone was using Bootstrap, because you didn't have time to build a UI like this, and it was also very limiting. So we have all these websites that look the exact same because they're all using the exact same component libraries and systems. And now bigger companies have their own design systems teams, and that's usually where you'll find more of the CSS experts.

I think it's interesting, because there's also a lot of different ways you can architect CSS, and one of those ways is called object-oriented CSS. That was initially pioneered Nicole Sullivan. Now there's a re-emergence of that, it's called Tailwind; it's one example of a product that uses those same concepts, of essentially you're -- instead of writing color red using a class, called cRed, or whatever. And I think that this helps developers who for some reason have a mental block about writing styles in CSS, and just wanna have that all in one page. It also helps with some things like if you don't have a really robust architecture for your app and you just wanna have it as simplistic as possible, and just keep it all in HTML and JavaScript; it helps with that. But when you want to go outside of that system, it makes it really difficult. So you end up running into the same issue again, of every app looks the same, with a different color theme... Because when you go outside of that boundary, if you don't have the skillset to make something function differently or be styled differently, what are you gonna do then?

**Adam Stacoviak:** Yeah. I wonder if we can look at how we got here though... Because you mentioned Bootstrap, and I think it's almost like the interface is a nuisance to a minimum viable product (MVP), like shipping something. And I think we got here because we had so many disruptions in web standards; we lived in an era where browsers were leapfrogging in terms of adoption of certain features. We have sort of stabilized to some degree now, but the reason why bootstrap came about was because writing interfaces was super-hard. And there weren't that many masters at it, so you needed an easy button; and the easy button became frameworks, or Bootstrap, or... There's a ton of other different ones out there. But the reason I think we may have gotten there was because it was very difficult. It's stabilized now and it's a little bit easier just to say in a coding interview "Make this mockup", and you could probably do it in an hour or two, maybe less, depending on how skilled you are. But we probably got here because of the need for an easier way to interface, because it was just so dang hard. It's not that it's easier now, but the standards have stabilized, in comparison. I can recall making rounded corners with images...

**Una Kravets:** Oh, yeah.

**Adam Stacoviak:** That was terrible. It was the worst ever.

**Una Kravets:** It's not only that they've stabilized, it's that they've enabled us to do so much more they've evolved. And I could really make an analogy here with jQuery, and how everyone used to use jQuery; when you'd google something on Stack Overflow, you'd not find an answer in vanilla JavaScript, you'd only find the jQuery solutions. So I think that it's analogous to that, where building components allowed the components that Bootstrap for example provided for us was just much harder to do than they are now.

But in addition to that, Sass and all of the emergence of what was Ruby-based, now Node-based, pre-processors now post-processors - those I think really put CSS on the map as a complex programming language, because you had loops, you had logic, you had all of these things, nesting, mixins, that are becoming something that is an integral part of the system for how we write code. And even though now pre-processors are kind of like phasing out, we still have a lot of logic that people used to process CSS with post CSS, and the spec itself is evolving to accommodate for a lot of the things that Sass provided us. For example, CSS variables that are true dynamic variables \[unintelligible 00:20:01.13\] That is something that completely changes the game, because you could use that within any function inside of CSS. You could use that as an updated value from JavaScript without changing the styling. You could definitely separate your logic and styling that way.

\[00:20:19.16\] Nesting is a spec that my colleague Adam Argyle is actually working on, to see how we can bring that to the web. The challenges there are like "How do we not break existing Sass implementations that have versions of nesting?"

There's a lot of really cool, powerful tools that we're now putting into the spec to give us the ability to create components and style things. And it's not just CSS. I also co-chair a WAWG community group called Open UI. And the idea there is "Why are forms so annoyingly hard to style still?" Why can't we have a range slider where you could change the background color? What about pop-ups? That feels like a common pattern. What about little toggle buttons? There's all of these things that are annoying, like select menus, dropdowns... So I think we're just now trying to really figure out how we can get browsers on board to create unified implementations and make this stuff easier to, as a base layer, put onto the web. Fix accessibility, stop people from building things with a million divs, and make it right on the web.

**Break:** \[00:21:22.26\]

**Emma Bostian:** Let's talk a little bit more about CSS specificity, because to be honest with you, when I was learning CSS, I did not understand that there is a mathematical formula that determines how our styles get applied based off of the type of selectors that we are using. Would you want to give us a high-level overview on what specificity is and why it's important?

**Una Kravets:** Yeah, so specificity is the way to make sure that you could write a style that applies to a specific set of elements, give that more specific instruction. Because CSS can be very broad, you can apply it to all of your paragraphs - that's one way to have specificity - or you could be more specific in what you are applying, so you could give it a class name, and then apply "For the blue class, I want all my paragraphs to have the color blue."

So specificity is pretty critical in how you write CSS, because it tells the browser when to apply styles and when not to apply styles; when to overwrite other styles that are applied, and when not to do that.

Actually, a very interesting concept from Harry Roberts is called "inverted triangle CSS", and it is an architectural paradigm of "You want all of your CSS to go from least specific to most specific." So kind of like inverted triangle - at the top least specific - and then only override little parts when you need to do that... If you can imagine that inverted triangle in your head as you're listening to this podcast.

**Emma Bostian:** Isn't it like the more specific selectors take more processing power to actually query for? I heard that somewhere, where like if you have a lot of selectors that are very specific, it's going to be a lot more performance-heavy. I don't know what the implications are of that, but...

**Una Kravets:** \[00:24:13.04\] Yes, and it's also very negligible. The general best practice is not to go more than like three levels deep. Also, if you're targeting something like a class of blue, you don't need p.blue, you just put .blue. So you don't need to repeat selectors. But generally, the three-levels-deep thing would be p, and the space .blue, space span would mean that within your paragraph you'd have something with a class of blue, and then within that you have a span tag. So when you have a space, that is a child of the parent within--

**Emma Bostian:** Right. Those are called descendant combinators, and this is where I wanna move us into these different kinds of selectors... Because I didn't actually know the words for some of these, but they're quite powerful. So what Una just mentioned is called a descendant combinator. And combinators are used to combine element selectors in a semantic hierarchy... So again, yeah, descendant combinators are delineated by space, so this will affect any child, even nested children. But there are a couple other combinators that you can use to select specific elements; one that you might see all the time is like the &gt; symbol. That is called a child combinator, but it only affects direct children.

Combinators kind of confused me when I started. I was seeing all these characters in CSS, and I'm like "What are they? I don't understand them."

**Una Kravets:** Yeah, I think that's a great thing to bring up. Back to the specificity thing - there are a lot of ways to tag an element. You could give it a class name that we mentioned, you can give it an ID, which is more specific, because you can only have one ID on a page; that's what you're supposed to have. Unique IDs. There's also attribute selectors as ways that you can attach styles to an element; so you could use data attributes to apply styles... There's a bunch. You could use ahref= and then apply certain styles to things that have links, or are links. You can get really specific in that sense.

But then you've just mentioned combinators, and this is like the next step of the specificity chain. So not only is it important how you tag something, but you could apply styles based on an element's siblings, so the things that are next to them, or its parent, by this top-down approach. So you mentioned that child combinator - so the &gt; sign is, say you have... I don't know, I'm using paragraphs here; we'll go with paragraphs. So you have a paragraph, and you want to apply a style to only its direct children. So say you have like a paragraph that is your first paragraph and it's called the .hero paragraph, and say you wanna apply the span tags within the .hero paragraph - you could use that direct child combinator.

So if you have a span tag with another span tag inside of it, it won't apply it to that style, because it's not a direct child of the top-most parent. You kind of protect it.

**Adam Stacoviak:** Yeah. Even the .hero though - if you're doing a blog post for example and you wanna style that first paragraph, where you don't wanna have to always add a class or a specific thing in there, you could just put a paragraph, and the styles know that it is the first paragraph, that is not .hero, for example, or class of hero, for example. And that's a great way to use that specificity to your advantage, so that you don't have to constantly, every time you're at that blog post, put \[unintelligible 00:27:20.01\] That would be painful.

And some people, they don't even have those skills, or they don't wanna know how to put a class on a paragraph. You just don't wanna teach that to everybody, so you wanna use CSS to give you the power to do it.

**Una Kravets:** And for that example, you could use something like first of type. So you could do like \[unintelligible 00:27:39.26\]

**Adam Stacoviak:** Exactly.

**Una Kravets:** ...and then where that also becomes even more handy is when you don't have access to control the markup. For example, I used to work in publishing, and everything was converted into HTML automatically, and it would add all these classes. There wouldn't be additional markups, so we would have to use specificity and sort of combinators of certain things to style that article, to style what paragraphs look like surrounding ads, and we'd get creative with :nth-child, and types, and things like that, to apply those styles.

**Emma Bostian:** \[00:28:15.22\] Yeah. And these are examples of pseudo-classes, actually. We have two other areas as they relate to selectors - pseudo-classes and pseudo-elements. Pseudo-classes - there are so many of them; I didn't realize until I was preparing for this show. Some of the ones that I use all the time are hover, focus, disabled, things like that. You have visited if a link is visited, but to Una's point, there's :nth-of-type, there's first child, last child, :nth-last-childs... You can even select the last four elements; if you have an unordered list and you want the last four elements or something to be a different color, you could do :nth-last-child and use -n+4.

There's a lot of math that goes into this that I don't think we take the time to learn... I'm not sure why. I think maybe because it's so easy to just slap a class on an HTML element and say "Okay, we're gonna use class." But pseudo-classes are so powerful.

**Una Kravets:** Yeah. When you really have a good grasp on this, you could do some creative things... For example, when I was working with this publisher, we had a section for credits. So you would have like a photoshoot, and you might wanna credit the hairdresser, or the model, the editor for the article... And just using nth types, this kind of syntax, I was able to say "Alright, if you have four or more people, make this view look in-line. If it's less than four items, less than four attributes, paragraphs, make it stack." And I didn't need to apply classes, doing JavaScript; you can just do it all in CSS.

Another cool thing that you can do is with these advanced selectors, like the general sibling selector - the general sibling selector is that wavy thing...

**Emma Bostian:** The tilde.

**Una Kravets:** The tilde, that's the name... \[laughs\] General sibling selector says like "Select any of a certain type that is a sibling to this element." So you can create CSS games, and you can use counters, and this general sibling selector to identify -- I made this game that was like a target game, where you have these divs moving up in front of a target, and you kind of have to click when the div isn't covering the target to get it, and you could use the counters to count it up... And then the general sibling selector would then style all of the siblings when that thing was hit. So it would stop moving, because it has a sibling that is in-line with that other element.

So you could do a lot of cool things. I'm kind of like \[unintelligible 00:30:39.07\] about I guess creative CSS. \[laughter\]

**Adam Stacoviak:** I think this is where it really goes from design-focused, Cascading Style Sheets, for example, to programmatic. Because once you do -- it's sort of like "If this contains X, then do Y." That's where you start to get into those engineering/programming kind of ways, and that's where I think maybe the divide we talked about in section one was really like -- that's where it comes from. Because once you get to a certain point, there is so much power in CSS that you can begin to program interfaces, and create games even. It isn't necessary to just say "bold this element", for example. It's not the case.

**Emma Bostian:** One thing I always struggle with though is like the cascade where it starts up at the parent level and trickles down, like styles do... But one thing I struggle with is like, okay, if a child is selected, I want the parent to take on this style. It's like, you can't pass it upwards. Is there a best practice for this type of situations?

**Una Kravets:** That is one of the biggest struggles in CSS, is just because of the way the cascade works -- the cascade is downward, so there is really no way to get the parent based on a child's adusted styles. It is something that we talk about in the CSS working group; it's just really hard to calculate.

\[00:31:58.23\] I think if that does happen, it might be like a direct parent. That is a lot easier than just doing a general parent... But it's not as useful, because usually if you have a style selected, like say when you focus on an Add to Cart button, you probably wanna style parent card, not the direct parent, which migh be like another div that has the paragraph in it and an image. So it gets a little tricky there, because you can't really go backwards of the latter.

**Emma Bostian:** Yeah.

**Adam Stacoviak:** It almost seems like an advanced mode. You might have an interface that's just pretty simple; it's a blog, it doesn't require interactivity as much as say an application might; or maybe you have an advanced mode and you could say "Well, in this advanced mode we have these newer specifications that allow us to be more experimental with the transfer of the cascade, for example, to go up versus just down."

**Emma Bostian:** Yeah, that's a hard problem to solve, and I hope one day we get to see some kind of solution... Or maybe I just need to rewire my brain to architect things differently. One area I'd love to quickly touch on is pseudo-elements, because I feel like they can be used for powerful things, but to be honest with you, I don't know the best use cases for them. So this is the other question I have... Typically, the pseudo-elements would be two colons before the keyword... But we don't need them anymore, right? We can just use one colon now, can't we? Didn't that change?

**Una Kravets:** Technically, two colons is correct, because it is a way to differentiate from pseudo-classes...

**Emma Bostian:** Oh, okay.

**Una Kravets:** ...but both will work. The browser will read them both the same way. It just fixes it for you.

**Emma Bostian:** Oh, okay. I love that. \[laughs\]

**Una Kravets:** The great thing about CSS is if you have an error, it will just not read that line of code. It won't break your entire applications. They can kind of keep going.

**Adam Stacoviak:** Yeah.

**Emma Bostian:** Yeah. Pseudo-elements are kind of interesting, because they're like a subset or like a piece of an element that you can do things to. First line, if you have a paragraph - I assume that's what that corresponds to. Or it would be like the first letter in a paragraph or a heading. Before and after are also really interesting, and I'm trying to remember what I would use these for. Let's say you have a piece of text and you've got like two lines on either side to make it look fancy, or whatever... You could use the pseudo-elements before and after to actually generate those lines. But what other use cases would we have for the before and after pseudo-elements?

**Una Kravets:** There's a lot. So the difference between pseudo-classes and pseudo-elements is classes act on a state; that state can be hover or link, which means that it's an unvisited link... Things like that. States. And then the pseudo-elements are parts of the UI. So with before and after you can put content in there, you could use it for arrows, you could have like a blank content, and then use it to make like a tooltips arrows, or any other decorative elements; you can use it for a background layer to create like a funky border, or to create like a blend mode on top of another element...

There's also additional pseudo-elements like marker, where you could style list item markers; that little dot - you could put emojis in it, or whatever you wanna put in it. But pseudo-elements let you style UI elements that would otherwise be inaccessible. So in a way, you can kind of think of this as like a shadow DOM, where the way to access them is through the pseudo-elements. You typically don't have access to that in the DOM. You don't have access to that marker in the DOM. But when you use the marker's pseudo-element, you can style that market.

**Emma Bostian:** I love that. I think that's a great explanation, and I didn't know that. One question I have is are these accessible to screen readers? I assume if you have textual content in the content property, that that would be accessible... But how does that work

**Una Kravets:** It depends, which is the fun thing. \[laughter\] I think that the newer screen readers do read out content. Older screen readers don't. So I don't know what the percentage of screen readers that do is; typically, that content is read out, but it's generally a best practice to not rely on the content within the pseudo-element for actual important text content. It's better for a visual layer, or something that's some kind of other treatment. I think like triangles for tooltips is a good example.

**Emma Bostian:** \[00:36:09.01\] Wow, that was heavy. I wish specificity was taught as like a concept... I feel like maybe nowadays it is being taught more... I don't know if specificity was a thing when I was taking my web development course in college, so... It can be a lot to learn if you're not aware that it exists.

**Una Kravets:** That's a problem.

**Emma Bostian:** It is a problem. It's a huge problem. It's like we're learning to drive a car without understanding what the things that we're doing are actually doing.

**Adam Stacoviak:** For me it was like the box model. I learned this concept you've mentioned, Una, earlier in segment one... I think if you have some of those core theory things around the way CSS works - not just specificity, but all the things - I feel like if you have that sort of undercurrent of your understanding of the tool and the language, then you really have a wide variety of the ways; not just tricks and hacks. I can remember even having a whole hacks file, where it was just like "This is where we put hacks" and once these things hit the spec, we'd delete them, or we'd change them, we'd encapsulate them.

But I think if you had that theory, those core concepts, the way that positioning works, or specificity works, and different things, then you could really use the tool much better. I think maybe a lot of people learned it by cargo-culting, or just looking at what somebody else does...

**Una Kravets:** Learn as you go, yeah...

**Adam Stacoviak:** Yeah, I feel like that's the way that a lot of -- at least that's the way I've learned. I didn't go to school for it; I read books... I took some notes before this started, because I was like "What was that first book I read around CSS?" and it was literally Eric Meyer on CSS. One of the OG books on the subject, and it was like forever ago.

**Emma Bostian:** I have it sitting over there... \[laughs\]

**Una Kravets:** I think I have it upstairs, too.

**Adam Stacoviak:** Yeah. And then Transcending CSS. These are early days of the language, and I think that that's how I learned even. It was just like "What are other people doing that have more experience than me, that I can l leverage?" There was no school for it, there was no "Here's the core principle theories of CSS. Go learn these and then be powerful." It was sort of like incremental, and learning iteratively, and sort of like scattered; it was never really like "Here's exactly how it works. Go do well."

**Una Kravets:** Well, it's funny that you mentioned this, because my team's been working on helping people to learn these things, and on the 18th of May my team is launching an online course called Learn CSS, which we will add to the show notes when that launched.

**Emma Bostian:** Yes...!!

**Una Kravets:** But it goes through this - it goes through the box model, the specificity, the cascade; a bunch of CSS concepts like inheritance, and sizing units, and colored layout, Flexbox, logical properties, which is a way to inject internationalization in your styles. It goes through \[unintelligible 00:38:48.09\] All those fun things like z-index, and making sure that things are layered on top of each other, like "What is compositing? Why is the index working or not working in one place or another?"

And then for the specificity part, it's one of my favorite parts, because we go through how to calculate specificity. With an element and a pseudo-element, that would be like one point of specificity; it's like your base layer. Well, actually the base layer is the universal selector, which gets no points, because that's like a star... \[laughter\]

**Emma Bostian:** No points for you!

**Una Kravets:** Yeah, no points. But then on top of that you could do classes; those get 10 points. IDs get 100 points, because you're now getting more and more specific... And then the important rule - you get 10,000 points of specificity. So when you're applying multiple selector styles, like if you did like a.myclass.another-class, and then an attribute of ahref: hover - that is 41 points. You can calculate and see what is more specific than another thing. And just like learning the nth syntax value, like how you do :nth-child, this is another thing to learn as like a micro-syntax of CSS. Within this language there's a bunch of these smaller, nuanced things that can really help you get a very clear understanding of why something is happening. People struggle with CSS because they don't understand why things are getting applied styles.

**Adam Stacoviak:** \[00:40:13.01\] Very true. Which is why you've got tricks and hacks, because it's like "What is working? How did it work? Why is it there? Why has it moved?" or "In Firefox it's this way, and in Chrome it's that way." "Why, why, why...?", essentially.

**Emma Bostian:** You know what I want - I want someone listening to build a VS Code plugin that will give me on hover the specificity calculation of a selector. Can someone build that?

**Una Kravets:** That's a good idea.

**Emma Bostian:** Yeah, that needs to be a thing. I don't have time to build it.

**Una Kravets:** I think with some of the newer techniques of like CSS-in-JS and CSS Modules, it's a little bit less critical, because you're scoping the styles to that element.

**Emma Bostian:** Yes, absolutely.

**Una Kravets:** So you don't have to worry about global styles in your app, you just have to worry about specificity within a component.

**Emma Bostian:** Yeah, for sure.

**Break:** \[00:40:52.26\]

**Emma Bostian:** So we've talked about specificity, we've talked about lots of other things regarding CSS, but now we're gonna talk about one area of CSS I feel like many people get excited about, and that is responsive design or responsive layouts using Flexbox and Grid.

Really quickly, let's talk about how we got here, because it used to be we needed floats to position things, and we had to use media-- I know those are like two different things, but then we had to use media queries to do breakpoints, and there was mobile-first... And now we've got responsive layouts with Flexbox and Grid, and you had talked about this earlier, Una, about the different use cases... But I always hear people like "Should I use Flexbox or Grid, one or the other?" I'm like "Well, you can kind of use both. You can use them in tandem. It kind of all depends on what you're going for."

**Una Kravets:** Yeah, totally. I think that was a good estimation. Even before media queries, it was tables, and you could do fluid tables; so you could have a layout that had two sidebars, and the center was fluid... And that was a table-based layout. And then CSS 3 really emerged about ten years ago, and that was where we got media queries, and all of those great ways to adjust styles, exactly as you said, to fit mobile, tablet, desktops etc. And now I even feel like that is getting a little bit outdated, because we're getting even more capabilities.

So media queries -- I like to think of responsive design as not just about screen size; I like to think of it as about user experience, making something responsive to the user, making it responsive to the form factor, and making it responsive to the container. We can get to that in the end, because that's kind of like the next era of responsive design, it's very much among us. I think it's just understanding the tools that you have, and knowing that you can very much combine Grid and media queries and Flexbox to fit your use cases.

**Adam Stacoviak:** \[00:44:03.25\] The place where the screen would end up has changed, and I think it's also how we got here too, because if you rewind ten years, we didn't have mobile as prevalent, we didn't have applications as prevalent. We had -- maybe the screen would change because people's literal screen they used for work or for fun... People sometimes used computers for fun; now many people just use their phone or a tablet for their fun, and not so much a computer itself. And I think over time that screen that essentially captured the users' interests was ever-changing. I remember it was 1024x768. That's how far back -- I can remember designing for that specific screen size, and like "What is this interface optimizing for?" And then this whole idea of like mobile-first, and things like that... That came because where we've put our applications, where we've put our interface had new screens to deal with, and that's why I think we maybe designed for desktop first way back, and now it's like "Well, when you design, you design for mobile first or for the smallest screen first." That's kind of how we got here, it was like this constant evolution, and maybe that's the downfall of CSS, it's that we are in a constant evolution... And now maybe it's a bit more stable, but the last 15 years has been like constant change \[unintelligible 00:45:14.18\] interface.

**Una Kravets:** But I think that that constant change is specifically to support our users and to support the use cases. As you mentioned, mobile usage has eclipsed desktop usage of most types of websites, specifically e-commerce, and we're seeing a lot of people shopping on their phone. We're seeing a lot of people coming online that didn't have internet access ten years ago, and the majority of those users are banking and using their mobile devices to access the internet.

So when we are building, there's this whole idea of mobile-first, simplifying the UI, making sure that content is king on your interface, and then expanding it from there. So when we do have these CSS adjustments, things that are added to the spec, it's very much intended to give developers the tools they need to create modern interfaces, as modern interfaces change. And now we're seeing foldable screens, so we need CSS to target foldable screens. What do we do there, when you wanna create a UI for those screens? And it goes even beyond that... Like, you're gonna hate this, because now it goes to user preferences; so you have to think about --

**Adam Stacoviak:** Dark mode, or not dark mode...

**Una Kravets:** Yeah. A dark theme, which saves battery life, you have to think about prefers-reduced-motion, first contrast, there's a battery saver mode that Adam was working on and prototyped in Canary... So there's a lot of different things that you can do with CSS to create more responsive experiences that are beyond just the screen size. And there's also performance things you can do with CSS, like with containment and content visibility, and have things not render until they're ready to enter the screen... So it's such a cool, evolving area that -- I don't know, I get really excited about where it's going. And now with container queries... I don't know, should we take a step back and talk about some of the \[unintelligible 00:46:58.24\]

**Adam Stacoviak:** Well, we're going deeper into responsive of course, but I think over the three segments here so far, that's where the complexity comes in. It's just so much to do.

**Una Kravets:** Yeah.

**Adam Stacoviak:** And you get, I suppose, to the need to understand those things when you get more and more experience, and/or do more and more complex work. Somebody building a blog is not gonna need to know most of that, at least.

**Una Kravets:** Well, somebody building a blog won't need to JavaScript either; they just need to use an existing template platform.

**Adam Stacoviak:** Right. And that's what I mean; that's why you had this graduated scale of where you need to sort of learn more about it, the way CSS works... But yeah, you get more giddy, I get more and more afraid. I have no envy for the spec writers, I have no envy for that at all. It's like, that's very tough work.

**Emma Bostian:** \[00:47:47.05\] Yeah, so one of the things that actually as soon as I thought about doing a CSS episode I wanted to run straight to you, Una, was because you published a YouTube video called "Ten modern layouts in one line of CSS", that totally blew my mind. And you used a lot of the heavy-duty CSS Grid (I don't know) functions...? Is that what they're called? Like minmax, fraction, repeat, clamp... Those things are all super-powerful, but I never fully understood them. Minmax is kind of a little bit self-explanatory, where you can set a minimum, what width or height or size, I guess, and a maximum size... But how is that different from clamp? What is the difference there?

**Una Kravets:** Yeah, that's a great question. I think something people don't realize is CSS has a ton of functions that give you some sort of output... And with these functions, like min, max, minmax - they're actually all different functions - you can do a lot of robust information in one small piece of code.

A simple example of a function that you would use within a grid is repeat. So instead of setting a grid template columns to 100px, 100px, 100px, 100px, you could do repeat \[unintelligible 00:49:03.03\] So you can just more succinctly write that all together. Then there's things like minmax, where you can set a minimum and maximum size for something to grow and shrink into... And on top of that, outside of Grid, there are also min functions and max functions, and the clamp function. And I wrote an article about that specifically... But this you could use for anything, like an element, and give it like a size, and what min will do is it'll read two different sizes - you could do like 100px, 50%, and it'll take the minimum of those two values, like which one's smaller. And then max is the opposite.

And then clamp will give you three values, where you set an actual value - so say I want my actual value to be 0.5vw, or 50%, and then you can set a minimum and a maximum to clamp it between. So if that 50% is smaller than, say, a minimum size of 100 pixels, it will clamp it to 100 being the minimum; and the max the opposite - if it's bigger than that, it will clamp it to max.

So you can use these for sizing, for typeface sizing; people will do that for font size... And then you can also use something like minmax within a grid, which sets a column or a rows minmax size to fit the space, because you have fluid grids... And you can use other keywords like autofill and autofit to have those elements fit or fill a space and give those more advanced, specific sizing.

**Emma Bostian:** What's the difference between autofit and autofill? Because they sound like they would do the same thing.

**Una Kravets:** Well, they don't do the same thing. They're very similar. So this is one that I always also have to look up, because I can't remember the difference... But autofit is when you have a full page and some items within it - say you have the Grid template columns; I'm just gonna take one from the \[unintelligible 00:50:54.14\] repeat, and then that's function, and within that you can have another function. So \[unintelligible 00:50:59.15\] you set your minimum of 150 pixels, your maximum of one fr, which is one fractional unit of remaining space... And then with autofit it will fit it so that even as it expands past 150 pixels, that one fr will fill that space.

With autofill you're going to take that baseline size, and as you expand, it's not going to stretch out to fill the remaining space. So that is useful when you have logos, or you have more set sizing that you don't want to fully fill out a parent.

**Emma Bostian:** Oh, interesting...

**Una Kravets:** So they're very -- one of those elements that I always forget the difference between, and I will just fiddle.

**Emma Bostian:** Yeah. To be honest, fractional units confused the living crap out of me. I can kind of understand it conceptually, but it's one of those things where I just don't get it. If I have like five elements and you have one fr on one of them, and two fr on the second, and then the rest don't have anything - I don't understand what's gonna happen. I'm very confused by Grid, to be honest... \[laughs\] I only use it for setting template columns, and rows, and that's about it. I don't understand fractional units.

**Una Kravets:** \[00:52:12.00\] So the fractional units - say you have a space... And the reason why we have fractional units is so that we have more flexibility in that space. Say we have like five divs inside of a parent, and if you have the columns being five one fractional unit, they'll all take up that remaining space. Now you remove a div and there's only four divs. Now each one of those will be a little bit bigger, because each fractional unit is a little bit bigger.

**Emma Bostian:** Oh, got it. Okay, cool. And then if something's like two fr, it'll take up double the amount of space as like the other...

**Una Kravets:** Exactly, yes.

**Emma Bostian:** Okay. This is my naivety here, but how is this different than percentages? I don't understand what the difference is there.

**Una Kravets:** So percentage is the percentage of the parent, right?

**Emma Bostian:** Okay, okay.

**Una Kravets:** And if you add or remove divs, they're all going to take that percentage size, so you have to adjust the percentage. With fractional units you don't have to actually do any adjustment and calculation of percentage, you just say like "I want all these to take up one fractional unit." Maybe you want like a hero to take up three fractional units to have more space than something else would have... So you could really start specifying there how much space you take up, without doing all the calculation.

**Emma Bostian:** Oh, my gosh... That's really cool, and I feel like I need to learn it better. One tool that I used to learn Grid originally was called Grid Garden, and they have one for Flexbox, too. I think it's probably the same creator, because it looks the same style; that was Flexbox Froggy. But are there other resources that you would recommend for learning Grid and Flexbox?

**Una Kravets:** Well, check out our Grid and Flexbox guides for Learn CSS... \[laughter\] That is our next sequel... I'll definitely share a link for that. MDN Docs are really good. I love reading MDN Docs for any of my CSS needs. Basically, when I have a CSS question, we'll go to MDN, which is developer.mozilla.org, and then I'll search in the Search box there, instead of just the general web search for CSS stuff.

**Emma Bostian:** Yeah, and I think actually CSS-Tricks, when I was talking to Chris Coyier about it, he was saying that Flexbox and Grid are their most looked up articles on their entire platform... And I believe it, because I access it at least once a day.

**Una Kravets:** I think it's because it's so ubiquitous...

**Emma Bostian:** Yeah.

**Una Kravets:** And that's something that a framework like Tailwind can't really help you with, because you still have to create generalized layouts and overall Grid and Flexbox UI's to still be able to use some of the object-oriented CSS stuff.

**Emma Bostian:** Yeah. It's so nice now that these tools exist, because I remember having to use Bootstrap or another framework, because building robust, complex grids was really just not possible at the time.

One question I have is about subgrids, because I think this is up and coming, having a grid within a grid...

**Una Kravets:** Yeah...

**Emma Bostian:** ...but it doesn't exist yet.

**Una Kravets:** Not yet. It's still work in progress. Subgrids basically will attach onto a parent grid, and allow you to use elements of that parent grid along with a subgrid. So there's like a pass-through component, and that is still work in progress, getting worked on/implemented.

**Emma Bostian:** Awesome. Well, I'm looking forward to some of the specifications coming down the pipeline. And yeah, I think this is maybe like a nice note to kind of end things on... But I feel like we've covered a lot of ground today... We talked about a lot of stuff.

**Una Kravets:** \[00:55:35.01\] Yeah. I think one last thing to mention is an experimental property that you can play with in Canary, with a flag turned on, and that is @container, which enables container queries. And container queries are sort of like the next generation of responsive design, because instead of relying on global media queries to adjust page styles, you can use a parent container size to apply styling to its children. So now something like a card can own all of its responsive information. You could put it in a sidebar, you could put it in a hero, you could put it in a product grid, and that component itself knows how to style itself based on where it lives in that page. It's going to change how we think of responsive design completely.

**Emma Bostian:** Yeah, that's something we actually had to build ourselves at Spotify. We had to build a custom hook to get the container queries... Because we've got the left sidebar that's resizable, and we have the friend feed on the right size which is resizable, and that main content container needed to obviously resize based on those two components... So we actually had to build like a custom hook for it, and I would be so thrilled if we could rip that out and replace it with CSS...

**Una Kravets:** Yeah, because it's super not-performant to have the browser do all the calculation for you.

**Emma Bostian:** Yeah.

**Una Kravets:** So I'll hit you up when that's good to go... And you can experiment with it now.

**Emma Bostian:** Yes, I'm sure that we will. That would be a fun hack day project. Awesome! If you all listening liked this, Una and Adam have their own CSS podcast; Una also has another podcast she mentioned, called Toolsday, with Chris Dhanaraj. We're going to link both of those in the show notes, as well as all of the courses and resources mentioned.

I'm so thrilled that we got to talk today... I really look up to you in terms of -- well, lots of things, but CSS specifically. You're one person I really admire, so I appreciate you taking the time.

**Una Kravets:** Oh, I appreciate that, because you're definitely someone that I look up to, and the community, and I love following what you're doing... And it's just such a joy to get to sit down and chat with you for the first time...

**Emma Bostian:** I know, that's so unbelievable this is the first time, even though we worked in the same building for a couple of years.

**Una Kravets:** I feel like there's so many people I met at IBM that I didn't really get a chance to work with until later... Which is ironic and funny.

**Emma Bostian:** Yeah, like Jason Lengstorf. How funny - people just think we knew each other from Twitter, I'm like "No, we worked in the same building." I knew him pretty well, and he's the reason that I got into speaking... Because I remember being like "Oh my gosh, you could speak for a living and people will pay for you to fly there? That's nuts!"

**Una Kravets:** That's exactly why I started doing it, because I was like "I wanna travel. That's what I wanna do with my life." And I also like tech. And there was this thing that combined those two... Which is awesome. And I just love meeting developers who are working on such different things around the world, because in those localities tech is completely different... And that's one of the \[unintelligible 00:58:27.19\] about conference speaking.

**Emma Bostian:** Well, I've enjoyed this episode... Just remember that CSS is beautiful and robust, and we need to all -- not defend it, but let's all preach that in the twittersphere. Let's improve the reputation, because it is an amazing tool.

**Una Kravets:** Hashtag CSS is a programming language... \[laughter\] Spicy takes...

**Emma Bostian:** I love it. That's gonna be the title of this episode. \[laughs\]

**Una Kravets:** Yes, yes...

**Emma Bostian:** Alright ya'll, I hope y'all enjoyed it, I hope y'all have a great rest of your day, and with that, thank you so much again.
