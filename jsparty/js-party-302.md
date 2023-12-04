**Amal Hussein:** Hello, everyone. It's me, your host, Amal Hussein, back on a real mic. Still not home... One more day till I'm home in my own bed. But I got my act together and I have a real mic, using a Rode microphone... Very exciting, and super-excited, of course, about today's show and today's guests. But before I introduce them, let me introduce my co-pilot for the day, Nick Nisi. Hello, welcome.

**Nick Nisi:** Hoy-hoy, Amal. How's it going?

**Amal Hussein:** It's going, it's going...

**Nick Nisi:** You sound fantastic.

**Amal Hussein:** Thank you. Yes, I'm - yeah, I just came back from Iceland... I've been in the United States for less than 24 hours...

**Una Kravets:** Ooh...!

**Amal Hussein:** Yes, yes, exactly.

**Nick Nisi:** So jealous.

**Amal Hussein:** I know, it's very exciting, very exciting. But what's more exciting is I think our guest today, and our topic... And so everyone -- we're listening to JS Party, you all know that; a weekly celebration of JavaScript and the web. And with us today to celebrate the most beautiful part of the web the most misunderstood, but the most important and impactful, and just - not even the dessert, it's the... I don't even know; it's the icing on the cake, it's all the things. We're gonna be talking about all the new things in CSS world with our resident expert, Una Kravets. Hello, welcome, Una.

**Una Kravets:** Hello! Thank you so much for having me. I think one of my favorite things ever lately is talking to JavaScript developers about CSS and UI, and how much it has evolved in the last few years... So I'm very happy to be on the show. Very excited to be here. I will say, I have been on the show for Frontend Feud lately, which has been fun...

**Amal Hussein:** Yeah. A reigning champ, too. CSS Pod, you know? Not surprised. I mean --

**Una Kravets:** But I haven't been on the chat with y'all yet, so I'm excited to be here.

**Amal Hussein:** I know. I was Una, you're probably the person who's actually been on the show the most, statistically.

**Una Kravets:** No way...

**Amal Hussein:** Yeah, I think so. I think in totality, and definitely for this year, because I looked that up, and I was whoa, you've been on the show a lot, but we haven't actually talked to you in a non-competitive way. We're always putting you on the spot, so it's nice to see --

**Una Kravets:** A very competitive show, quote-unquote...

**Amal Hussein:** Quote-unquote, right. But anyway, so even though our audience might be familiar with you, can you please tell us a little bit about yourself?

**Una Kravets:** Yeah, of course. So hi, I'm Una, and I lead the UI Dev Rel team at Google, which is a part of Google Chrome; we work on the web platform, and we mostly focus on making it easier for developers to build robust and really interactive and beautiful web experiences... And the whole goal that we have is to help developers make things easier... So make it easier to build things that are performant, accessible, work well, look fluid, they want it to... Because the web is a hard place, and it's constantly evolving. When we stop evolving, then things get stagnant, and we want to keep evolving and meet developers where they are.

**Amal Hussein:** Yeah, absolutely. And I would say that for me the most exciting innovations I've seen on the web platform have actually come out of the CSS Working Group over the past few years. It feels we were getting not a ton of innovation in CSS, JavaScript was getting a lot of love, and then all of a sudden now it's CSS is having its shining moment, and same thing for HTML; a lot of really great work happening to improve interoperability, and give some love to form elements... It's very, very exciting stuff. And so that's what we're here to unpack with you today, which is catch us up on all the new CSS things... Because I'm really embarrassed to admit this, but this is for me -- it's not my Achille's heel, but I'm just so pulled into JavaScript infrastructure, and architecture, and all these kinds of other problems that I don't get to spend enough time finessing with CSS and mastering it... And one of my goals this year is to become a CSS ninja. I don't know if those two words have ever been put together, but I want to be that girl. I want to be that girl. In my head I can be that girl, but I'm not there yet. So I'm hoping that this is the entryway/gateway show to get me there.

**Una Kravets:** Well, I will say one, there's a lot to talk about.

**Amal Hussein:** Okay...

**Una Kravets:** But also, I think that something I've seen in the JavaScript community is this sort of disregard almost of CSS, because it's viewed as not as serious. It's not like you're using it to build logic. But there's a lot of stuff that you have to do in JavaScript right now that's moving over to CSS in a much more declarative way, that's actually a lot more performant, because the browser can handle it, that's easier to make accessible, because the browser can handle it, again...

**Amal Hussein:** Oh, yeah.

**Nick Nisi:** ...and so I think that the best way to level up your skill set as a developer, especially as someone who focuses on JavaScript, is to learn about and utilize these new CSS primitives... Because they make your life easier. They make it easier to architecturally write styles, to have logic imbued into components, to build interaction... There's so much here that I -- this is why I love talking to JavaScript developers about the UI space, is because it's so hard to do stuff in JavaScript.

**Amal Hussein:** Yeah, you're womansplaining to a group of people that have been using hammers when they should be using needles, you know what I mean? Really...

**Nick Nisi:** It really feels like anything that I figure out at some point that I can do it in CSS over JavaScript, it's like "Oh, sweet. I get that for free." I don't have to think about it, it just works, and it's going to work in a platform way that feels like it's meant to be that way, rather than me trying to handroll something weird in JavaScript. So I always love that.

**Una Kravets:** \[06:17\] Yeah. And it's not just making things easier that you can do in JavaScript, there's also new features that you just couldn't do it all on the web platform before. New colors. And before, we had expanded color spaces that you could set as backgrounds, or as text colors... You just physically couldn't get that color to appear in your website. You could get a photo onto the website that you're serving, where your user can see that color, but you couldn't make the background match the photo. There's so many new things...

**Amal Hussein:** Yeah, that is so cool. And just really mega kudos to the browser engineers that have really worked on this really difficult stuff... I mean, oh my God, can you imagine writing C C++ to create composites, to manage a rendering engine? It's basically like a pixel gun, but using low-level programming languages to write that. I can't even imagine what that's like... So just kudos, kudos, kudos to them as well. Thank you. Thank you to all the folks funding this work as well. I know folks from companies like Igalia, and Bocoup have also just generally been contributing to the web platform... And so just, you know, let's keep that going.

So before we dive into CSS - I'm sorry, I'm really distracted by your background, Una. I just want to take a minute to acknowledge... You have this wall of conference badges, and great plushies... We'll see if we can get a screenshot of this to folks... But yeah, can we just take a minute to acknowledge how awesome your background is? \[laughs\]

**Una Kravets:** Thank you. I have a little space in my one-bedroom apartment that I walled off... And it works really nicely. I just made a little office in it.

**Amal Hussein:** Yeah. Well, it's lovely. All my conference badges are shoved into some plastic bin somewhere... So I'm going to display them now in full glory.

**Una Kravets:** This is like a less than $20, one of those accordion hangers... It was really cheap. And I just put all the badges on it, so...

**Nick Nisi:** I'm gonna do a beaded doorway... \[laughter\]

**Amal Hussein:** A beaded doorway with conference badges... Yeah.

**Una Kravets:** I grew up in a house with a beaded doorway.

**Amal Hussein:** Oh, gosh...

**Nick Nisi:** Awesome. \[laughs\]

**Amal Hussein:** Alright, well, so I'm following the list of 20 "What's most exciting and impactful." It's a blog post that came out on the Chrome Developers site, and Una is one of the authors. And so we'll put a link in the show notes, so Una, feel free to pick a random one to start with... Or we can go in order, or we can go with your favorites... Your call. So what do we want to start with?

**Una Kravets:** Okay, so I will give you categories, and you tell me what category you want to start with. How does that sound?

**Amal Hussein:** That sounds excellent, and I'm gonna let Nick pick, because... Yeah.

**Una Kravets:** Yes, love it. So the first general category is architectural foundations of CSS. So this is things nesting, or scope, or cascade layers, things like that; or trigonometric functions... That's a whole underlying architectural foundation of writing CSS. The second category is components. So we could talk about all the new work in the component space, like popover selectless, that's still getting worked on. \[unintelligible 00:09:25.06\] so that's a little bit more experimental right now. Popover did land, and a lot of animation capabilities with that. Interaction is another category. So we could talk about view transitions, and scroll-driven animations, and animating in and out, so entry and exit animations, and \[unintelligible 00:09:39.12\] from display none... That's a whole category. And then responsive design I'll give you as the last category. That's everything that's like container queries, logical components with has, everything in that space. There's new media queries, too. So I think that those are four high-level categories that probably the listeners of the show would be the most interested in.

**Amal Hussein:** \[10:01\] Yeah. Oh, that sounds great. Well, Nick, tough decisions to make...

**Nick Nisi:** Oh, it is... I thought for sure one of the categories was going to be just color, in general.

**Una Kravets:** We could talk about color, too. Color is a whole category, so we could start with that.

**Amal Hussein:** We could end with color. That could be our desert. How about that?

**Nick Nisi:** Okay, yeah. Colors is definitely the one that frightens me the most, just because I have no idea what the difference is between them all. And I think we've talked to Adam Argyle about it before, and it's still just -- straight over my head.

**Una Kravets:** So let's just start with color, because I could be quick about it. I think the best way to find out the answer to that is to play with dev tools. We have really good dev tools for color. Color is very ahead and very behind at the same time, because you have these new color spaces that you can use, OKLCH or OKLAB. And those tend to be the ones that are generally considered the best color spaces to use and to mix colors.

**Amal Hussein:** Wait, what are color spaces? We're gonna have to level this talk down a few notches...

**Una Kravets:** So if you've ever used RGB, or HEX, which is RGB, or HSL... HSL and RGB are two different color spaces that you could work in. And now we have the capability to have a much wider number of color spaces that you can create colors in, but also interpolate between colors. So for things like animating color, or transitioning in a gradient, you can set what color space you're doing that in. And in the color world, there's also this new color function that's in all browsers, which is called color mix. And color mix lets you take two colors and mix them, using a percentage of each. So you can create these dynamic color themes with one color, and create the complement of it. You could create alpha mix percent of it by mixing with transparency, and now we have relative color syntax, that lets you take channels from that color and shift them.

So there's a ton of new color capabilities, there's great dev tools for picking color... The web color picker is still behind dev tools in Chrome Dev Tools, because you can't pick like the OKLCH color space, these HD color spaces in the default color picker, which needs to change, ultimately... But the tooling provides it. And yeah, Adam was on the show, and he probably has a lot more to say about that topic, because he is a resident color expert and knows all the things about color... You can also follow the work of Lea Verou and Crystal Lee, who've been working on the color spec for a long time, and they have color tools too, Color.js... So we can add some links for the show notes, but... The thing to know about colors is we have new color spaces and color functions to help you dynamically create color themes. And the last piece of that, which hasn't been implemented yet, is contrast color. So being able to automatically have contrasting colors based on a list of colors that you provide.

**Amal Hussein:** Wow. It's basically a design system; it's like a turnkey design system where you're able to just say "Here are my base colors. Now just give me the right contrasts." That's so cool. And what about accessibility? Is the accessibility built into the generated contrasts? Are they accessible by default?

**Una Kravets:** Right, so that's the thing that's been most hotly contested in the Working Group, is how those percentages or that accessible number that swaps the colors is determined... Because I'm sure I've talked about this, but there's existing color contrast algorithms that some argue are outdated; they don't work great with some types of colors. And there's work to be done, that's being done right now, to generate new contrast algorithms... But those haven't been adopted yet by law, those haven't been formalized and finalized... So there's sort of this space in between, where you can specify... I don't know what the state of this actually is. I used to be a lot more involved. But that was a discussion when I was more involved in it, was being able to specify the contrast algorithm, but then there's a default algorithm the browsers provide... That contrast work has not been implemented yet.

**Amal Hussein:** \[13:57\] Yeah. Wow, I'm fascinated by this personally, because I think this pattern of okay, we have a default behavior, but then give developers an out, let them override it, pass things in... I'm really glad we're trending towards that direction, because for example there's something going on right now in the Web Components space, where they're trying to have a shadow DOM out. The exact term is escaping me, what the name of the spec is, but basically, we want to be able to break encapsulation for shadow DOM, if we choose to. And the reason being, developers have lots of good reasons for wanting to do this. And I say yes, but the purists are like "No, this is bad!" But at this point, it's very clear that developers want this, and need this, and hopefully it's going to happen. I think it's on the way to happening now. But this idea of "Okay, give me a default behavior, and then give me a patch, give me a ladder out", I think that's a good compromise... Because it's very hard to predict how people are going to use something... And so I think for me extensibility and flexibility have to really be the key in order to get adoption.

**Una Kravets:** One of the biggest challenges in standards is figuring out how to make things future-proof. So that's one thing... We currently are facing a situation where we might have a change in contrast algorithms, that will in the future potentially be the standard... But what happens if there's another change in contrast algorithms when we've done more research as a society, and we know more about how the eye works? So that's always a challenge.

I'm also part of the Open UI community group, which is trying to work on this component space. And so creating a solution for one component will eventually cascade - no pun intended with CSS - to other components. So we figure out how to do a dropdown, a select list; how does that work with a combo box? How does that work with different types of selects, and multiselect? And what does that all look like in combination?

So really, the goal is to create primitives that can be reused, but make sense and aren't too vague. It's a fine line... And I think with the color work it's a great example of making it so that you can have control, but also opening it to the future, and future-proofing it.

**Amal Hussein:** Yeah, yeah, that makes a ton of sense. So insightful. Thank you for sharing. So colors - yay, new stuff. We'll put links in the show notes to all the things. So I guess we're gonna move on to our next category, because we can yo-yo. I'll pick the next category, and then you can do the next one, Nick...

**Nick Nisi:** Sure.

**Amal Hussein:** I'd love to talk about the foundational stuff. That feels like a good place to start.

**Una Kravets:** Okay, so with foundations, there's a lot of things. I think some of the most interesting things are nesting. So nesting is something that is now in all browsers. That's something that we didn't even think we could add to browsers, but our engineers are awesome, and the Chrome engineers, the Firefox engineers, the Safari engineers - hats off to all the hard work that's being done there.

So we can now have nesting in CSS. That's an architectural thing where you can have a component, and then -- say you have a card. So before, you'd have to have card, and then card.title, and at the bottom of your stylesheet, specificity, you'd have all the container queries, and media queries, or if you have container queries, too... Now you could nest that all inside of a card. So if you're familiar with SASS, that's something you can do in SASS also, is you could nest styles.

It makes the code a lot neater, it makes it a lot more legible... Especially with the nesting of states, like hover and focus... And then also your modifiers, like your media queries, or container queries, and your other at rules - those will automatically go at the bottom of the rendered CSS. So that's one of the number one features developers have been asking me for a long time.

There is a key difference in the way that testing works with CSS versus SASS, where with CSS you can't do nesting of strings. So in SASS you could do loops, and you could have interpolation of class names; because it's a preprocessor, it's going to process all that out into a single name, before it's read by the browser. So you can get these actual like BEM-style nesting; if you're familiar with BEM, it's block element modifier naming class convention. And you can't do that. You can't have named classes in CSS. So that's just a thing to note. Another neat thing with nesting is that it could potentially reduce your file size.

**Amal Hussein:** \[18:27\] Oh, yeah.

**Una Kravets:** So it could reduce the characters, and that's something that we're also potentially looking into, is "Could we add this to minifiers as something that improves the file size of your CSS?"

**Amal Hussein:** Ooh, retrofitting nesting via tooling... Oh, I love that. I mean, it makes sense, right? It's like dry CSS, basically.

**Una Kravets:** Yeah.

**Amal Hussein:** Oh, man. That's so cool.

**Una Kravets:** So that's another potential behind the scenes thing too, with some of these architectural updates. It might not be something that you necessarily have to author, but it could be a little enhancement, progressive enhancement under the hood. But this one, I like authoring with, because I love being able to nest without having to require an additional dependency and build system tool to do it. I just do it with CSS.

**Amal Hussein:** And is that available on all browsers now? Like, it's not just a Chromium thing. It's in Firefox, it's in WebKit...

**Una Kravets:** Nesting is in all browsers. When it initially came out, it required an ampersand for classes that don't have any syntax, like a dot, or a hash, or anything... So if you have a main with an h1 inside, it would require and in front of it; and space h1. That requirement is being removed, and landing in all browsers with the update, where you -- it's called look-ahead nesting, where you don't need to have the ampersand for components that don't have this syntax. And that's a change, but it's cool. So that's landing and is available cross-browser.

**Nick Nisi:** Is places like canIuse.com still go-to resources for this usage information?

**Una Kravets:** CanIuse should be a good resource. There's also MDN, that looks at browser compat data. There's a whole initiative called Baseline, which is partnering with MDN to highlight things that are newly interoperable, or things that have support in all browsers. So that's something that you could also look at to get a sense. And they're growing in the number of pages that they support...

**Amal Hussein:** Nice.

**Una Kravets:** I can talk more about foundations, sorry, but I was like "Okay, nesting." \[laughs\]

**Amal Hussein:** Yeah, we could talk more about foundations. I want to pivot real quick, because I wanted to ask this earlier, and I'm sorry, listeners, if this is too much of a shift, but I have ADHD, so forgive me... So I just really want to go back to - you mentioned future-proofing. So it's really hard to future-proof for the web. And I'm curious how much you all leverage origin trials to really get user feedback in the wild. And for those who are not familiar, origin trials are really cool. They came out of Google, but I think you can do it on non-Chromium browsers too now. I think Firefox has it, where you basically say "Hey, I want to use this experimental feature." So instead of a user having to go into the browser and click the setting, it will just automatically -- it's like a feature flag for the web. If you register your domain, that experimental feature will be turned on specifically for users that log into that domain using that browser... And so I'm just curious, have origin trials been helpful in ironing out some of these kinks with these new CSS features?

**Una Kravets:** It really depends on the feature. I will say origin trials are used a lot less for CSS and UI features than they are for JavaScript features. I mean, for whatever reason that is, there's definitely a ton of user input. The features are in nightly versions of browsers, or the experimental versions, like Firefox Nightly, or Safari TP, or Chrome Canary, for a few cycles before they're stable, usually.

\[21:52\] And also, within the Working Group there's a lot of people who are experts in the field who provide feedback... But it depends on the feature. I have worked on features that had origin trial; some of them landed, some of them didn't. They tend to be more of the - what's the word? ...spicy features, contested features, that will get origin trials to kind of iron them out.

**Amal Hussein:** Yeah, yeah. Well, because nothing beats user feedback, right? That's the thing.

**Una Kravets:** Yes.

**Amal Hussein:** It's very hard to argue -- I mean, nerds can argue all they want, and bike-shed all they want, but then when a user says "No, this is great", it's very hard to argue against user feedback. So that's why I find origin trials really important and good for shutting down nerd debates.

**Una Kravets:** User feedback is great for ergonomic feedback. So how easy is this API to understand? Is it solving your use case? What exactly is your use case? Creating a list of requirements for a feature is something that we can get from user feedback. But in terms of the future-proofing, we don't know what's going to change the future. So that's something that you need to think about from the start. Do you know the metaphor with accessibility being a blueberry muffin?

**Amal Hussein:** I don't know that metaphor.

**Una Kravets:** I feel so bad, I'm totally blanking on who said this... This was a couple of years ago at a conference... But the quote was like "If you're baking a blueberry muffin, you can't just add the blueberries on at the end. You have to bake them into the muffin. And that's how accessibility is - you have to bake it in from the start." So when we talk about accessibility, or think of it that way, it's kind of like with future-proofing these APIs, you have to bake it in from the start. It's hard to retrofit sometimes.

**Amal Hussein:** No, that makes sense. Well, thank you; I can take us off this tangent. We can go back to foundations, back to our regularly scheduled programming. \[laughs\] Thank you for that insight, Una. So what else is in that category of foundational stuff, I guess?

**Una Kravets:** A fun one is that we now have trigonometric functions in CSS. So you can use trig functions like cosine, sine, all these trig functions and the calc function in CSS... So you can create cool, organic interfaces. One demo that I had made was like a popover with a radial menu, where things move in a circular pattern around the button, like a Pinterest menu... And you can calculate position based on sine and cosine, like around a circle that way...

I've seen a lot of awesome demos from Ana Tudor and other people online. Bramus Van Damme has some cool demos too, where you can create cool shapes... And I love to see more organic sort of interfaces. So trig functions are cool. You don't have to calculate the styles in JavaScript, and then send that information back to CSS to position things. You can just do it in CSS, which is awesome.

There's advances to nth selections. You could do like nth of type, which is neat; just like an asterisk there. So that's useful if you have -- say you work in publishing and you have an article, and you have interspersed, either ads or other types of things in between... You can target things a little bit more cleanly. I used to work in publishing, and that's the thought that I had... I was like "Oh, you could skip those."

Scope is another one. That one's only in Chrome right now. This one lets you scope your styles. So it's a little bit more accurate to a section. This is what you'd want to do with -- in JavaScript if you keep your styles in one file, oftentimes it will scope it. So it'll give it a class name that's specific to that file. So if you don't have access to that and you want to do it a different way, or you have multiple things you want to scope within the same file, then you could do it in CSS. That's just one of those missing features that is now provided without additional -- what do they call it? Dependencies, that's the word?

**Amal Hussein:** Yeah. So can we double-click on that? So scoping - what does scoping look, if I were to try to scope something? Because I'm trying to think of scoping like - I think of scoping as adding inline styles to an element. That feels like a way of scoping in CSS. Or using a very specific ID, or class name. So what's the value-add here for ways that people have been scoping in the past? What's the value-add now? Is there just like a way to scope more elegantly, I guess?

**Una Kravets:** \[26:01\] Yes. So there's different ways to do things; there's no real way to scope right now in CSS. The way that you do it is you add classes, or you do something else, that you have to kind of overwrite it, or make your own solution. So I think this API will mostly be used by libraries, and people who are developing systems for CSS... But the way to do it would be to add scope rules that you can then scope things. Like, add scope for a light theme, or a dark theme, or add scope to a card. And then things inside of that card would be isolated inside of that scope. And then you can also have donut scope, where you pop out of the scope.

So this is an API that is something that I'm not even that deep into, but it's something that's missing from the platform, which provides native scoping capabilities.

**Amal Hussein:** Hm. It's like reverse Shadow DOM.

**Una Kravets:** Yeah, yeah, but for CSS. You can create your own enclosed scope. I think that this is a good time to note too that it might feel like there's a lot of stuff to learn, a lot of capabilities, but you don't have to use all of them. Use what makes sense for you. And there are some APIs that are landing that might be more useful for, say, library developers. There's some that are more everyday UI friendly. So there's so many things to consider browser support your personal browser matrix, what your needs are...

**Amal Hussein:** I feel everyday UI currently needs to be an internet cafe for frontend developers...

**Una Kravets:** Everyday UI...

**Amal Hussein:** I'd get my Java from there, you know... Java beans...

**Nick Nisi:** There's a lot of things like that in JavaScript too, that land and you're like "Okay, how am I going to use this?" And it's things symbols, or generator functions. Symbols in particular seem like a more library-specific thing that you probably wouldn't use every day. And this feels like the --

**Amal Hussein:** Atomics... \[laughs\] You know, build my CRUD app with atomics...

**Nick Nisi:** When I first saw it, and saw the description in the article, I was like "How is this different than nesting?" But I think that the light and dark example helps me to differentiate between when I'd use one or the other. So that was really cool.

**Una Kravets:** Another thing that's in this category is also cascade layers, which might also seem like it does the same thing, but it does very different things.

**Amal Hussein:** Oh, yeah, that is cool. That is very cool, especially for third-party development, and in general... Yes, I was very excited about cascade layers. But you can tell everyone about what they are.

**Una Kravets:** Nice. No, I'm glad that you've found use for it, because I think --

**Amal Hussein:** Extremely.

**Una Kravets:** ...that's one thing you either see and you're like "This is exactly what I needed", or you don't really know how to use it. But basically, it lets you control the cascade. So while we're talking about specificity, before cascade layers, it's all one layer for the developer; you have access as the developer to essentially one layer. There's also other layers, like the user agent styles, like what comes from Chrome, or Safari, or Firefox. And then there's user custom styles... That's so funny, \[unintelligible 00:28:57.27\]

**Amal Hussein:** I was gonna say, do you have bubbles popping up on your screen?

**Una Kravets:** It's the Apple update. Also when I do this, it will do a -- it does like a... I'll just sit here like this, and eventually it'll happen. \[laughter\] If you know, you know.

Cascade layers let you control the cascade... And that means anything inside that layer is only going to be scoped to the specificity of that layer. And definitely \[unintelligible 00:29:25.04\] There's user agent styles, there's users custom styles, and then there's developer styles... And now within the developer or authored styles you could have different layers, so they don't have unexpected overrides somewhere else. But you also have to know how to use layers, because you might be like "Wait, the specificity is over here, but it's in a higher layer..." It'll win, because you're layering it to win. So it can be a great way to organize your code. It's also something that you have to learn how to use right, or you might not realize what it's doing... But yes, another tool in the arsenal of foundations.

**Nick Nisi:** \[30:01\] I have a question on this... The layers like the user agent layer and like the components layer - those makes sense to me, and maybe it's because I'm familiar with the concept through Tailwind. I think you can specify different layers within that. And I could be wrong, but the way that I think about that, at least in terms of Tailwind, is "This stuff is going to load first, and then it's going to apply this stuff." So that specificity will be controlled by that. Is there a way to control if you had several different layers that are all your own custom ones? Control "This one's going to take precedence over this other one."

**Una Kravets:** Yes, that's exactly what it does.

**Nick Nisi:** Oh, cool. How do you control which one loads first, I guess? Or orders first?

**Una Kravets:** So at the top of your file you'd have at layer, and then you would list it in a row.

**Nick Nisi:** Okay.

**Una Kravets:** So you could do at layer third party code, normalized, base styles, components, and then you could nest layers, too. So you could have components on header, components on footer, and nested within that layer. It will still be ordered within that layer, but it might be more neat than writing header, footer, comma etc.

So yeah, it's a one-liner where you could set up all your layers either at the top of your file, or it'll be at the moment that the layer is created. So you could have at layer, I don't know, say base, and then have all the styles, and underneath that, in another file, have at layer footer... And then base will come before footer, because it's how you authored it. But to just have control in your main.css file, you should just at the top have your layers in order.

Another note is unlayered styles will always win over layered styles... And this is one of those future-proofing things where it's easier to add layers to your codebase by making them beneath your other custom styles. So third party code, normalized, resets - those sort of things can be layered, and not override your new styles. So the decision was made by the Working Group to have them have lower precedence when you've layered, than your unlayered style, so it's easier to add code.

**Amal Hussein:** So great for design system teams, too... Because that's one of the struggles right now with many design systems teams, is they really want to be able to force - not JavaScript; they want to bang important their CSS... I mean, let's be honest, these are JavaScript developers, so they're probably using JavaScript for their CSS...

**Nick Nisi:** I feel called out.

**Amal Hussein:** ...but it's besides the point. Okay... \[laughter\] And so it's like "Okay, well, how do I get these darn developers that are using my components to stop futzing about." I want my spacing, I want my padding, I want my rules... And so that's always a struggle. Design Systems teams that I've worked with in the past - their Northstar is "We don't want any CSS anywhere in the app. We want you guys using our classes, or our components, and that's it." And I get that, but it's hard to enforce that. So I feel like layering is gonna really help set those boundaries for teams... But also, more importantly for me it's - I've written a decent amount of third-party code; either we're writing an SDK that lives on someone else's machine, or lives on someone else's site, or vice-versa... Or I'm using third-party code... And so I feel like this really helps me organize that story as well, like how do I not have a clash unintentionally. And sometimes going with full Shadow DOM is a bit heavy, right? And it also has some other trade-offs... So I don't know, this was super-exciting for me, and I'm really glad to see it landing. So is it in all browsers now?

**Una Kravets:** Yeah, so this also landed last year in all browsers, so it's available since 2022.

**Nick Nisi:** Oh, nice...

**Una Kravets:** And it's funny that you mentioned bang important, because that's another thing that I don't think most developers understand how it works...

**Amal Hussein:** Please educate us, Una.

**Una Kravets:** \[33:54\] So I think that most developers think that adding important just makes that line of code have higher specificity than other things... And that's because that's all the control that we currently have. But what bang important does is it actually inverts the cascade and creates a new layer. So that means that if you have user agent styles with bang important on it, they will have the highest possible precedence. More precedents than the developer styles with bang important on it. And that means that user agent styles, users custom styles that had important on it, have a higher precedence than developer authored styles with important on it.

**Amal Hussein:** To be clear, were you talking about the user like Una has some settings, and Una's custom Chrome settings are going to be bang important...

**Una Kravets:** Yes.

**Amal Hussein:** Yeah, because the precedents is like user styles, then browsers styles -- I don't even know. Browser styles, and then...

**Una Kravets:** Browser styles, users custom styles, and then developer's authored styles.

**Amal Hussein:** Oh, okay.

**Una Kravets:** And then it inverts for important. So important things are then developers important styles, users custom important styles, and then user agents important styles. Okay? Does that make sense?

**Amal Hussein:** When would a user agent ever be so loud where they're like "Listen, I'm Mozilla and I want it this way"? When would that ever happen?

**Una Kravets:** I think that there's a few importants for language directional things...

**Amal Hussein:** Yeah, that makes sense.

**Una Kravets:** ...and I think some components. Some just default "Make the web work" things.

**Amal Hussein:** Yeah, that makes sense. I can totally see people messing up Arabic, or Urdu, or something like that, and being like "No--" Yeah, developers would want to have it go from left to right, as opposed to right to left, or something that... So that makes sense.

**Una Kravets:** Yeah. You can't change left to right to go right to left, or something... \[laughter\]

**Amal Hussein:** Yes, yes. You can't break the web for users. Got it.

**Una Kravets:** I don't know if that one specifically -- I don't have it in front of me, but I know there are some. Very few. And they're for good reason.

**Amal Hussein:** Of course.

**Una Kravets:** But with layers, that also means that we invert the cascade for bang important. So if you have your base layers that are your lowest precedence layer, and you have something that's important on the base layer, it's going to have more precedence than something that is unlayered, that has important on it... Even though that's technically a higher layer without important on it. So inverts the cascade.

**Amal Hussein:** Okay, great. So this is definitely a podcast where you want to make sure you had your morning coffee, and...

**Una Kravets:** I have a diagram that I can share with you, that makes it a lot more clear.

**Amal Hussein:** Okay, we'll put this in the show notes.

**Una Kravets:** Yeah. I also have a YouTube video about this.

**Amal Hussein:** We will put that also in the show notes. So nobody has to worry about Inception... Because I feel like I'm in Inception every time I talk about layers, and inversion... I'm like "Okay, I'm here now... And now I'm not here, because I'm in this other place. And now we're also in this other place." It's very mentally -- it's hard. But that's why we have you on the show, to help make it less hard.

**Una Kravets:** But CSS is easy...

**Amal Hussein:** It is, yeah. You know, we need T-shirts that say that, Una... \[laughter\] We need a marketing initiative around that. Because trust me, you have developers over-engineering with JavaScript that can't do basic CSS... So we definitely have a bit of a marketing problem here. But alright, so is that it for foundations? I think probably yes, for stuff that's new...

**Una Kravets:** I think it's okay, yeah.

**Amal Hussein:** So the next category's on you, Nick Nisi.

**Nick Nisi:** Oh. Well, as someone who fancies themselves a React developer, let's talk about components.

**Una Kravets:** Okay, cool. Components are an area that I'm very, very excited about... There's been smaller updates to browser components, there's some bigger ones... I think that the biggest thing that has landed this year is popover so far... Which is only in two browsers, Safari and Chrome. But popover is an attribute that lets you create elements that live in the top layer... So that's one thing that you get for free; you don't worry about z-index. It lets you get keyboard navigation for free... So you could Tab in, Tab out, you get the double toggle, Escape key management... You don't have to handle any of that. And if you have a default popover, you could set it to manual so it doesn't do this, but you can get free light dismiss, or click away. So when you click away, it closes that popover; you get all of this very declaratively.

\[38:18\] You can also have actions to close, you could do toggle, popover actions... And you don't have to have any JavaScript to manage all of these different states and create these components. And it's so cool, because the way you write it is very declarative. You just put popover as an attribute on the thing that's popping over. And that could be like a tooltip, or a menu, or a chat box, whatever you want it to be. And then you give that an ID, and then the button that opens it, you would just have the popover toggle target equals that ID. And that's it. And you have a popover. And it's very, very cool... It is a behavioral thing, so you still have to add semantics if it's a menu. If it's something like a dialog, you probably want to use the dialog element... And if you are creating a list of options to select, or working on another element called select list - which is a little bit earlier in the stage; it's not actually landed stable in any browsers yet... But that will allow you to create customizable dropdown menus, where you could make any arbitrary content inside the dropdown without having to break it and build it from scratch, or use a library. You just do it in the browser also. That's the goal, to do that declaratively.

**Nick Nisi:** And obviously, you can fully style that.

**Una Kravets:** Yes, exactly. So you could recreate the GitHub dropdown where it has Merge, Commit, and some descriptions, like blue, and there's a checkmark... You could do all of that. I've built a ton of demos. I can share the link to that Codepen collection also, where I created the Airbnb selector, where it's a bunch of countries... And it's just all inside of a select list element, with a select option element that may or may not stay, so that shows a reflected option, and you could choose to hide or show whatever you want in there, style it any different way you want... And then the button to open it you can also style. So there's these different pieces.

**Nick Nisi:** Awesome.

**Amal Hussein:** Wow. So just to be clear -- so first of all, I'm just mind-blown at this, because I'm thinking of how much JavaScript and CSS and HTML can be deleted from the web, now that this is built-in, legit... And just to clarify this, this is a little bit of a crossover between HTML and CSS, right? Because popover is an attribute that you have to put on an HTML element.

**Una Kravets:** That's HTML, yes.

**Amal Hussein:** Yeah, so you need that attribute. And there's no kind of equal something. It's just an attribute with a default value. There's no properties that you assigned to that attribute, right?

**Una Kravets:** Right. So that's just the attribute, and then you have some events, like popover, toggle target... There's other attributes that you can add. The CSS part of it is that you have a new pseudo-class called popover open, which works similarly to the dialog open class, but it's specific to popovers... And that's required to style the popover when it's open. And then there's other new CSS that lets you style the interactive popover. And that also works for dialogues, it works for any element that you're transitioning in, from displaying none, to the page... Which is things starting style; it's an at starting style rule, so you can tell the browser what the state is before it animates in. So if you have a popover that starts at the bottom of the screen, off screen, and it goes up to the middle, you'd want it to say that it starts at the bottom. So you might have a transition where you're translating the X or Y from 100%, like off screen, to zero. So that's one thing you could do with starting style.

Then you have also this new ability to animate discrete properties, where that means you could animate to and from display none, content visibility, and add that to the timeline of the animation. So now you could have opacity being on the timeline of animation, along with display, going from \[unintelligible 00:41:54.25\] to display none. And then there's also the overlay property, which lets you animate things like the backdrop, and kind of tells the browser that you want something to stay in the top layer while it's animating. So it doesn't hide right away. And then animate, it is also staying in the top layer throughout the animation. So there's a couple of CSS things that are working in conjunction with the new component things.

**Amal Hussein:** \[42:24\] Yeah. I mean, this is so cool. And my gosh, just having this built-in... I'm like, why did it take this long to have this? Because we've needed this a long time... So why 2023, Una?

**Una Kravets:** Well, there's an answer... \[laughs\] We've been wanting this for a long time, but over the past few years, especially the past seven years up to 2021...

**Amal Hussein:** Seven years... Yeah, welcome to the standards world, right? It's like "15 years later..."

**Una Kravets:** Right. I think it's eight years, actually. Chrome specifically, and other browsers probably as well - I just don't know the details as well - have been going through a pretty robust rendering engine update under the hood, while we've all been using Chrome. It's called RenderingNG; there's different parts, like LayoutNg, and other features... But it's enabled stuff, specifically things like container queries, to be written in a way that can be decently performant. Not all of it is hugely performant that we add to the browser... But the new rendering engine allows for it to have a solid solution. And there's also a lot of boundaries that are sort of put in place for something like container queries, where you have to have containment... And those features - like, features built on top of other features. So we had to have containment first, which lets you isolate paint, or style, within the DOM. And then on top of that, you could build another feature, like container queries, that lets you create these different styles.

So I think that that's a big part of it. Standard takes a long time. The components work is sort of separate from all that; it just takes a long time to try to make dropdowns customizable. But then at the same time, there's been updates to the rendering engine that have enabled us to build things in at a faster rate, that are more performant.

**Amal Hussein:** Yeah, yeah. No, I get it. This stuff's hard, and my question was really part rhetorical... But I really did appreciate hearing that answer from you, in the sense that --

**Una Kravets:** \[unintelligible 00:44:12.24\]

**Amal Hussein:** No, I did and I didn't, in the sense of I get that this is hard, and I think it's important for people to know why... And so I appreciate you sharing that context. For me, I'm just curious, how many popovers can you have on one page?

**Una Kravets:** I mean, you can have --

**Amal Hussein:** So there's a pseudo-class, I guess. How do you specify -- do you just use an IDE or something to further specify this if you're working with a pseudo-class?

**Una Kravets:** It depends on how you write it. You can have popovers open other popovers.

**Amal Hussein:** Popover inception, okay...

**Una Kravets:** Well you would have to open a popover, and then open another popover... But yeah, you can do that. Default popovers will close others.

**Nick Nisi:** Is there a z-index?

**Una Kravets:** In the top layer. \[laughs\] But yeah, it depends on how you write it. By default they'll close others; you could change that. It's up to the user.

**Nick Nisi:** This is awesome. Forget about AI taking our jobs, it's CSS coming to make sure I never have to write another selector.

**Una Kravets:** It makes our job easier. Come on, fireworks... \[laughter\]

**Amal Hussein:** But for job security, of course JavaScript engineers are still going to make it complicated, so don't get too excited, Una, you know? Just because you give people good solutions doesn't mean they're gonna take them, okay?

**Una Kravets:** Yeah... Like I said, there's a lot to talk about. I feel like we've already been talking for...

**Amal Hussein:** A while.

**Una Kravets:** ...probably the good part of the hour, and we're just --

**Amal Hussein:** Just scratching the surface. I know. For the sake of time, we're gonna have to start to stick with your favorites, I suppose... Right, is there anything else new in component land?

**Una Kravets:** There's a couple of smaller things... So also in -- well, there's one more big thing on top of that first. Anchor positioning - it's similar to select list, not in browsers yet; it almost landed in Chrome, but there was a big chunk of feedback that came in the CSS Working Group to make a lot of changes to the spec, and it had to go back to the drawing board... And a lot of the features that are in Chrome now - I think all of them - are staying, but there's going to be new features added that make anchoring better. And a lot of - well, anchor positioning lets you anchor things to other elements... Which is used widely --

**Nick Nisi:** \[46:18\] Would that be like a tool tip, or...?

**Una Kravets:** Tool tips. Even like notifications, menus, a little profile icon... And the other cool thing is you could declaratively have the layout of that change, if you run out of screen space, for example - so you could use the viewport to actually reposition it without any JavaScript. You don't need to have libraries. You could do this all in CSS. Even in a line of code \[unintelligible 00:46:35.28\] just to autoflip. And it's so cool, and part of the new proposal is a tether pseudo-element, so you can create an arrow which would then auto flip to match the flips. You don't have to do any of that in JavaScript; you don't have to rewrite all these rules of resize observation, and all of that, scroll observation for your popovers, your little tooltips... It's going to be something you can do in CSS and HTML; connecting it in HTML with the anchor, and then applying the styles in CSS. Or you could connect them in CSS, too. \[laughs\]

**Amal Hussein:** It's a whole new world. It's a whole new world. I'm about to start singing some Disney tunes here soon... It really is a whole new world.

**Nick Nisi:** Dibs on Jasmine.

**Amal Hussein:** Nick...! \[laughs\]

**Una Kravets:** I'll call it a golden era for web UI.

**Amal Hussein:** Yes, yes. Oh, I love that. Oh, that's a great talk title, Una. That'd be a good keynote.

**Una Kravets:** I've definitely used it in slides.

**Amal Hussein:** Yeah. I would watch that keynote. That's fascinating. So should we move on to -- let's see, I guess I'm next for categories... Interactivity I think sounded good. And maybe we can end it with the container stuff, since that's I think the last one... The media stuff. But yeah, interactivity - what's new there?

**Una Kravets:** Okay. So with interactivity, the first one is the linear easing function, which is a really cool way to create custom easings and animations. So you might be familiar with linear as a easing function for animations, which means it goes straight from zero to one. That's a keyword; linear keyword. Now you can use linear as a function, and have an unlimited list of values that actually plots values in a chart. So you can create bounces, and create other cool transitions. And if you want to play with it, I recommend Dev Tools, because in Chrome Dev Tools there's a tool that lets you do the linear easing function, and there's a couple of defaults that you can play with in there, and then move things around. So that's neat.

And Jake Archibald also created a tool, Linear Easing Generator. I'll try to get a link for the show notes. And it's available in Chrome and Firefox right now. It's a linear function.

**Amal Hussein:** That's very, very cool. And what do you see as a practical use case for this, for developer teams? What JavaScript am I going to delete, basically?

**Una Kravets:** You're going to delete any custom easings. Well, you can't do this right now in CSS.

**Amal Hussein:** Okay, I see.

**Una Kravets:** So if you wanted to create some custom bounce easing or other type of easing, you'd have to do it in JavaScript, and then animate that way. Or have a library. You probably are using GSAP or another library to do this kind of thing right now.

**Amal Hussein:** Makes sense. Wow.

**Una Kravets:** Another neat thing is scroll-driven animations landing in CSS. So those are in Chrome right now... And that enables you to create what it sounds like, which is scroll-based animation experiences. So instead of just time-based animations, where it relies on a timer, it can apply the animation based on a scroller. So your scroller could be the viewport, have things animate in and out, and fade in, or anything. It's CSS, so you can style it anyway. You can create sticky elements, like kind off go in, and then when you hit a certain point in the scroller, they scroll away... So you can create these really cool sort of scrolly-telling experiences, without any JavaScript. You could do without any other dependencies, in CSS. You get a lot of control there; all the scroll-driven fun that you could want.

**Amal Hussein:** \[50:10\] That's so cool. I mean, I can see so many different use cases for that. Essentially, it's just giving us a hook into an event, right? And we get to now do whatever we want when we have access to that event. That's really neat.

**Una Kravets:** Yeah. So two cool things. One is I want to share a site with you called scroll-driven-animations.style, and that is by Bramus VanDamme who put together a bunch of demos, and there's videos on how to use this, and lots of examples here. So that's really cool.

Another cool thing is that if you use this new API, which you can use in CSS or in JavaScript, it is much more performant than the current existing JavaScript way to do it, because you are not hogging up the main thread. This is browser-accelerated. And there's also an article from Yuriko on our team who works with partners, who did a case study on that. So there's also performance benefits to using these new APIs; not only developer experience benefits, but also performance improves.

**Amal Hussein:** Yeah. So essentially, I think the magic of this was that you could previously do this with JavaScript, but you're now able to do this purely in CSS. And from what you're saying it's GPU-optimized CSS, which is the way we want to go, right?

**Una Kravets:** Yes. And I think that the main thing isn't just like "Oh, you can do it in CSS and not JavaScript", it's really letting you separate your application styles from your application logic. So you don't have to -- currently, there's a lot of confuscation, because you just couldn't do things in CSS and HTML declaratively before. You had to have styles mixed in with your application logic. And that's something that I don't think makes a ton of sense as we move forward into application development. So I think that not only are there these developer experience benefits, performance benefits, but it also lets you better architect your application.

**Amal Hussein:** 100%. I could not have said that better. So let's see, we are on interactive... We've covered so much ground, and my head is spinning... I think we have room for a few more things. So container queries, or media queries - what's new there?

**Una Kravets:** Well, last thing in interactions is view transitions, but I'll let you explore this on your own... They do involve JavaScript; they're just a new way of transitioning between states, that are magical -- yeah, view transitions.

**Amal Hussein:** Oh yeah, we've talked a bit about that on the show, and we'll link to the notes. We haven't done an extensive deep-dive, but it's really exciting to see frameworks like Astro and Svelte start to ship with the support. It's very cool.

**Una Kravets:** Yeah. And then the last one is --

**Amal Hussein:** I was gonna say, do you want to just do a quick one-liner for folks just on what view transitions are, from your words, from your mouth, I should say...?

**Una Kravets:** I would say -- I know that we're running out of time, so I'm trying to just... But view transitions, they let you transition between states, and then customize how that transition is applied. So it's essentially a browser-managed interaction where you could just wrap a remove event or some other DOM event in a view transition. So you do document \[unintelligible 00:53:20.13\] and it's magic; it's pure magic when you start using them, because it creates this really smooth shift from one thing to another. You can use them within components, it doesn't have to be a full page transition. And they currently work for single-page apps, within your SPA... And we're working on multi-page apps. So that's next, so you can transition between pages.

**Amal Hussein:** Yeah, server-rendered, which was -- you weren't able to do that, but now because you have access to the browser events, you can do that, which is very exciting. Alright, so container queries, or media queries, or whatever. Responsiveness. Responsive design. ResD. What's new there?

**Una Kravets:** Lots of stuff. Responsive design's -- I get loopy after a while talking about this stuff, because there's just so much stuff...

**Amal Hussein:** \[54:09\] It's a lot. This is like a PhD thesis in CSS.

**Una Kravets:** Yeah, I feel like this could be four different episodes.

**Amal Hussein:** Yeah. I mean, it's years and years of standards work, right?

**Una Kravets:** Yes... And so much engineering time.

**Amal Hussein:** Oh, yeah. And you're doing a fantastic job, by the way, so just thank you for making this simple.

**Una Kravets:** I'm just here to relay. Okay, so with responsive design, I've been framing this as a new shift, a shift in the way that we can now think about responsive design, where before, developers really thought about responsive as like screen sizes. That was a huge shift. That whole era of being able to create styles for mobile, and for desktop, and tablet, and having to think about all these different form factors... Now, we have new capabilities that let you rethink the way that you imagine responsive design, because you're no longer relying on the viewport, the global viewport information to apply these styles. You can look within the page and apply styles that way. And you can also create more logical components.

So container queries allow us do just that, where you can have all of your styles sort of written in a container mode, where you're looking for the actual size of the parent. So that element can be in the sidebar, it could be in a main list, it could be on a page as a hero. And all of those styles can be self-contained in that element, which makes sense with how people write components today in frameworks... And that's also another big shift, because we used to have these page view styles and then these component-level logic, and that didn't really mix. Now you can do these component-level logical pieces. So you can restyle something based on how much space it has. And that can go as narrow as -- I have a demo where I have a responsive button. So you have a button that shows just an icon; when that gets a little bigger, that icon gets more detail. And when that gets a little bigger, it gets a little plus sign. When that gets bigger, it gets some text that says Add to Cart. And eventually, it'll show the whole text. And then that could live inside of a responsive card; that could live inside of a page that has a responsive grid. So it really grows and grows and grows. You can have things really broken down. And that's very, very exciting and a huge shift in how we think about building responsive interfaces.

And then you can combine that also with macro layouts, like have the whole page use media queries to look at the media, and the viewport size, where it makes sense, but then have the containers take on their custom styles. And there's a lot that you can do with container queries. There's also style queries that are in Chrome, which let you query for custom property values... So that's something that I think will get more useful over time too, as that evolves a bit more. But then one thing that I think is really exciting is using that with the has selector. Have you heard of has?

**Amal Hussein:** I have, yes. It's been out for a little while now... But for folks who aren't familiar, do you want to just tell us what that is?

**Una Kravets:** Yeah. So has is a selector that lets you look for the presence or state of children within an element. And that could be figure has fig caption. And then you could style a figure that has a fig caption with a border, so that it's separated from the rest of the text. You could look for states. If a form field has an invalid field, and then create an error message that you go from display none to display block, when that happens. You can check for the quantity of children using nth-child. So you could do quantity queries, to be like "If it has five or more children, style it this way. If it has fewer, style it that way." So you can create different grids using has. And you can use has on that element, on the parent element, so it's kind of like a parent selector. You can use has on any of the children inside the parent, or siblings around it... So it's really, really powerful, and it lets you self-contain this logic. You could do "If the inbox has 10 or more items, show the pagination bar", and style it that way.

**Amal Hussein:** And you needed JavaScript to do this conditional querying in the past, right? How would you even do this with CSS without has? You couldn't, right?

**Una Kravets:** It's very, very, very hacky, yeah.

**Amal Hussein:** \[58:04\] Okay, very hacky. Yeah, that makes sense. Yeah, has is nice. I was really excited to see that. I feel like has was one of the first things that came out a few years ago, and I think it was still Chromium at the time, but I was just excited to see something new from CSS... And the hits have just been -- they've been coming since then.

**Una Kravets:** \[laughs\] The hits.

**Amal Hussein:** Yeah, they really are hits. And what you were just describing around the new way of doing responsive design - that's really phenomenal. What a time to be starting a greenfield application, or to be rearchitecting or cleaning up your CSS... That is fantastic. And do you know if that is available on all browsers, all evergreen browsers now? Or is that just limited to a few browsers?

**Una Kravets:** So size container queries are in all browsers as of February of this year. They landed in the last browser on Valentine's Day.

**Amal Hussein:** What a gift. \[laughter\]

**Una Kravets:** What a joy... And then has is almost on all browsers. It's landing in Firefox 121, which goes stable in the end of December. So by the end of this year we're going to have has and container queries in all browsers.

**Amal Hussein:** What an exciting time to be alive, really. I mean, I feel like I have to ask an obligatory AI question... Like, Una, do you think AI is gonna help us write better CSS?

**Una Kravets:** I think when AI learns how to write CSS... \[laughs\] AI writes notoriously bad CSS. It does good to-do apps. It can do that. It's very bad at CSS.

**Amal Hussein:** Don't you think it's because it's learning from the Internet, where there's a lot of bad CSS?

**Una Kravets:** Yes.

**Amal Hussein:** Okay. That's what I thought.

**Una Kravets:** That's it.

**Nick Nisi:** I shouldn't be relying on it for my gradients, then...

**Una Kravets:** We've got to teach it better.

**Amal Hussein:** Yeah. Gosh, well, Una, this has been so insightful and so educational. I can't even tell you. Thousands of people are going to benefit from this, so thank you, thank you, thank you. And thank you for just generally being a freaking -- you're like the ambassador of the web. Oh, it happened! Yay! That's so cool. You just did a heart.

**Una Kravets:** I did it!

**Amal Hussein:** Yeah. I chose not to do this, because I wasn't sure what was going to happen... And now seeing it work on your machine... For those of you who are like "What the hell are they talking about?", Una just made a heart with her hands, and then just hearts appeared on her screen, like magic. Because it's 2023. Yeah, your OS is getting cool, I guess... So yeah, just like the frickin' ambassador of the web, in the best of ways. You're just a fantastic ambassador. You're always putting out demo apps, and content... And I just want to say, thank you so much for everything that you do, and thank you for making everything accessible and approachable. Thank you for just being awesome. Thank you for existing. Thank you for teaching us... I mean, I could go on and on.

**Una Kravets:** Wow, that's so nice.

**Amal Hussein:** I mean, it's so true though... Right, Nick?

**Nick Nisi:** I totally agree. Yeah.

**Una Kravets:** No, I really appreciate all you do also for the web community. I feel like it's awesome to see this kind of community spring up around also your podcast. It's great. So thank you for having me on the show. I feel like the web is evolving, and we have the same goals of helping people learn about it, and come together

**Amal Hussein:** Yeah, absolutely. And I want to close out with this thought, because you said something really insightful earlier, that I wasn't able to double-click into, because it would have taken us on a huge tangent... You talked about how a lot of these new CSS primitives allow engineers to architect and organize their code, and have a better separation of concerns, where their styling is not mixed in with their logic... And I'm like "Hell yeah. I want that world." And so can you just double-click into that a little bit? Because I thought it was so insightful.

\[01:01:58.27\] I do think that is something that we don't really think about enough, which is how do we separate those concerns, and keep our styling encapsulated, and to some degree even progressive, right? Like, how do you have progressive experiences based on what device they're using, based on what's available on their browsers etc. We're not really thinking about that progressive strategy either, and so I'm just curious to hear your thoughts on this.

**Una Kravets:** I will also say these are my personal thoughts on it. When I talk about this separation of application logic from application styles. That's very much my take on it, so I don't want to be speaking for the browser when I talk about that...

**Amal Hussein:** I'm here for your take though, that's the thing. I want to put a big fat mic on your take... So we're both here for your take.

**Una Kravets:** I think that that's the goal. I am not here to try to tell people to write less JavaScript. I'm trying to help people write applications that are architected in a way that makes sense, and write scripting where there are actual event changes, and you need to connect things, you need to actually send data, you need to manage the DOM state, or manage other parts of the DOM. That makes sense for me for writing scripts.

Where it gets murky is when you have to have an additional library and write JavaScript to do styles, like scroll animations, where you have to write a bunch of logic to do scroll observers, and resize observers, and a bunch of visual DOM observers have nothing to do with logic. All of that is muddy, and messy, and prone to errors. And the whole idea behind the component effort was to reduce the accessibility errors on the web platform, because people are just recreating these components, and missing things, because they're so complex to get right in terms of accessibility. There's so many different states to manage. And it shouldn't be a burden on the developer to have to think about and manage all those states every single time if it's such a common pattern. And that's where I think that the browser and the web community can help.

The web should be able to take on a lot of those common logical needs, and provide hooks for developers to hook into when there's event changes, send forms, all that stuff... But then not require developers to have to reinvent the wheel each time. And especially in a world where -- that's the future world that I imagine. You have this language that applies the styles, then you have your semantic language, which is within HTML, and to hook things up, and then you have your logical piece of the web, where you're building applications, you're sending server data, or you might be building DOM... All those things make sense in JavaScript. Not everything makes sense in JavaScript. Changing the color of a button when you click on it... If there's an event change, like a state change - yeah. If it's a hover style, or something, maybe not. But you should be able to change the event, change the DOM state in JavaScript, and then apply all the styles that hook into that DOM state change in CSS. That's the world that I see, and we're getting to... And there's just a couple of things that are missing.

I think also a big change is the architectural needs right now for the web platform. We need container queries, we need people to start aligning the way that they're building components with the way they're styling them. It's still a bit of a disconnect there. So I hope that a lot of these APIs will help bridge the gap, make sense in ways that make sense, and improve the legibility and the maintenance of our systems.

**Amal Hussein:** Amen to that, yes. And that's your keynote. Was it the golden age? That's the golden age keynote.

**Una Kravets:** The Golden Ages is CSS?

**Amal Hussein:** Yes, that's the keynote right there. So yes, yes, yes, I want that future. And thank you for distilling all this complex data for us. Our show notes are going to be worth their weight in gold, so please, everyone, check them out. For folks who want to hear more about this and learn about this important topic, you can follow Una on Twitter. She's an amazing person to follow, but also, you can listen to her podcast, right? You have a podcast. Do you want to tell us about that?

**Una Kravets:** \[01:06:09.18\] Yeah. So I have a podcast called the CSS Podcast. This season Adam, my co-host, and me are covering common CSS questions like "Why isn't my percentage working?" or "Why is this image stretching?" So that's kind of where we talk about CSS stuff more. But then also, if you want to follow along, web.dev and developer.chrome.com are where our team writes about these topics. And we will do an end of year little wrapped review thing, like "What happened in 2023." So I'm excited for that moment, because putting it together really gives me perspective on how much has changed... And a lot of it is stable, and it's really cool to see how far we've come in a year. I thought we did a lot in 2021. We did even more in 2022... We've done even more in 2023 for the web. So as you said, Amal, it's a really exciting time to be a developer.

**Amal Hussein:** I'd say alive, but yes, that too. Definitely a developer.

**Una Kravets:** Yes. To be alive, but --

**Amal Hussein:** Great time to be writing JavaScript, because hopefully you'll be writing less of it. And also, by the way, if you're a JavaScript developer and you felt attacked by me, it's because I'm frustrated. I'm frustrated at our community, because we refuse to learn this other part... It's like saying "I want to be a doctor, but I don't want to talk to patients", or something like that. Or "I want to be a doctor, but I don't want to touch anyone." It's ridiculous. We are engineers writing for the web. We have to learn CSS. Period. And I speak to myself, by the way, before anyone else. But it's just this thing that we just refuse to take seriously, and it really, really impacts our users, it impacts our code, it impacts our ability to deliver elegant and simple solutions... It's so many things. It limits our ability to evolve and keep up with all these great features... Like, if I'm still writing CSS like it's 1995, and it's 2023 and all these cool things are coming out, I'm just so behind on the curve, right?

So yeah, everyone, we've got to get it together, kids, okay? Take this stuff seriously. Follow Una, follow Adam, listen to their podcast, check out the show links... And we just want to say thank you again. So Nick, any last words before we call this a wrap?

**Nick Nisi:** I think you nailed it. I 100% agree with everything you said. Una, thank you so much for coming on and talking about all of this. There really is so many exciting things that I didn't even know were there... And the problem with me -- I wanted to bring this up, and I won't get us onto another tangent or anything, but I end up treating CSS these days a lot I treat JavaScript, in that I don't look at what's coming new in JavaScript, I look at what's in something that I can use today. And that's for me "What does TypeScript support \[unintelligible 01:08:48.27\] Please support those features."

**Amal Hussein:** \[laughs\] Of course he had to bring up TypeScript. OMG.

**Nick Nisi:** That wasn't even it. I was gonna say, when it comes to the CSS features, I look at what Tailwind supports, and I code that way.

**Amal Hussein:** Oh, my God... Can we -- by now I hate Tailwind, by the way, everybody... I'm gonna say that on air.

**Una Kravets:** I went to this React conference and had some -- it's a lot of React community folks...

**Amal Hussein:** You had a triggering experience? Just kidding... \[laughter\] Just kidding.

**Una Kravets:** Well, I heard a bit of that, which is like "Oh, for CSS, if it's not in Tailwind, I'm not going to use it." That's sort of the world --

**Amal Hussein:** So sad...!

**Una Kravets:** But that's why I started meeting with Adam Watham from Tailwind monthly, to make sure that Tailwind is aware of the features. They've been adding a lot of the features as well to that system... I feel like whatever works best for you, you should use. So as a proponent of the web platform, I want to make sure that people like you, Nick, who rely on Tailwind to tell you what's new in CSS, have access to these new features as well. \[laughter\] I do think you can't do everything in Tailwind.

**Nick Nisi:** Agree.

**Una Kravets:** I think it's a great tool for prototyping other cases where it could work well with the team as well. There's a lot of benefits to it. But I do think that there's a point at which you can't do every single thing, and you're going to probably benefit from learning some of the features that you can't access in Tailwind, that you can do in CSS.

**Nick Nisi:** \[01:10:16.03\] A hundred percent.

**Una Kravets:** So I feel like that's something that we can better as a community, is just to educate ourselves more on what's out there.

**Nick Nisi:** Yeah. And for the record, I don't think that you can effectively use Tailwind without really understanding CSS.

**Amal Hussein:** Oh, I think the internet's gonna prove you wrong on that, Nick... \[laughs\]

**Una Kravets:** That's my issue with Tailwind, is people don't understand what it's doing sort of under the hood.

**Amal Hussein:** It's magic...!

**Una Kravets:** So they'll memorize these Tailwind classes, but they won't know the property value pair, which takes the same amount of characters to type \[unintelligible 01:10:46.13\] for what it is... \[laughter\]

**Nick Nisi:** I agree, I agree.

**Una Kravets:** But I don't hate on Tailwind. I think you use the tool that's best for you.

**Nick Nisi:** For sure. For me it's just an easier way to conform.

**Amal Hussein:** I have no shame on hating on Tailwind for what it's worth, just for the record. I am obviously not Una. We're different people, different opinions...

**Nick Nisi:** For me it's just an easier way to get a team to conform to a design system, because --

**Una Kravets:** Or you could have a design system.

**Amal Hussein:** Yes. Thank you. Thank you for saying that.

**Una Kravets:** But a lot of it is like "It depends." And if that's what works best for your team, then it's what works best for your team, and you've made the educated decision and trade-off.

**Amal Hussein:** Yeah. And I'm putting my tech lead hat on... Just understand the costs of your abstractions, kids. Okay? Everything has a cost. And waiting for Tailwind to add a feature when it's available on the web platform - for me, that's too high of a cost. And so just putting it out there... But yeah, it's probably best that I end this podcast now, because I don't want to continue dragging on. It's a tool, again, making -- my beef is with the API, it's not with the people behind the tool. So thank you for everyone who work on it.

**Una Kravets:** There's some things that are easy to add to Tailwind. You could easily add one-liners, like text wrap balancing. It's harder to add things like scroll-driven animations. It's harder to add things like scoped styles for the user to use. That's not a part of the Tailwind system, that's a part of how you write your styles, that probably include Tailwind. That's kind of also a thing where you don't get access to everything that the web provides if you rely on one library.

**Amal Hussein:** Yeah, that's very well said.

**Nick Nisi:** Yeah. Like I said, I think that you definitely have to have a firm understanding of CSS to use it effectively, and to understand when it makes sense. But the key point is CSS is definitely worth learning, whether you use it or not, through Tailwind or not.

**Una Kravets:** I'm waiting for the --

**Amal Hussein:** This is the last time I'm giving you last word, okay? Just putting it out there... \[laughs\] He first brings up TypeScript...

"Oh, wow, that's so cool."

**Una Kravets:** I've been trying to get these fireworks to show up, but they won't show up; I'm doing the double thumbs up.

**Amal Hussein:** Maybe because you're smiling and you're doing a thumbs down. So maybe if you -- okay, so now we're being bad podcast hosts, because we're just messing with our videos...

**Una Kravets:** Oh, there we go...! I got the fireworks.

**Amal Hussein:** Okay, that's exciting. Alright. Okay, everyone, amazing show. Thank you to our guest. Please, please click on the show links, learn CSS... We love you all. See you next week. Cheers!

**Una Kravets:** Bye!
