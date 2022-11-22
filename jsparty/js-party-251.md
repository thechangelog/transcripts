**Amal Hussein:** Hey! Alright, JS Party listeners, I'm sitting here literally dancing. We've got dancers, we've got dance-bombers, I don't even know... Somebody's like dancing behind us still... So it's me, Amal, I'm here with you today, and we have such an awesome show ahead. A very special guest with me today, Estelle Weyl. Literally, the person who helped co-author The Definitive CSS Guide. Super-duper SME on the web platform, especially the CSS and HTML parts of the web platform. I feel like your job, Estelle, is like literally like teacher; teacher of the internet, or something like that. That's your job description. Because you've literally just been teaching and educating developers for just - how long now? Decades. I wanna say decades, but --

**Estelle Weyl:** I started my first blog 15 years ago, so in 2007.

**Amal Hussein:** Wow.

**Amal Hussein:** That's when I taught people how to use the Firebug debugger, which was the first developer tool.

**Amal Hussein:** Oh, my gosh...

**Estelle Weyl:** Yeah. So it's been a while... And I view myself as an interpreter of specifications.

**Amal Hussein:** Oooh...!

**Estelle Weyl:** Yeah, because the specs are written for browser authors, and very few people go and read the specs... So I wanted the subtitle of -- CSS: A Definitive Guide, the fifth edition is coming out probably in March. We're finishing it up right now. Eric Meyer is writing most of it, but I'm helping him, and I wanted to subtitle it "We read the specs, so you don't have to."

**Amal Hussein:** Nice.

**Estelle Weyl:** O'Reilly put the kibosh on that, but they did say they would put it on the back cover.

**Amal Hussein:** Oh, very cool. Oh, I love that. Why did they put a kibosh -- that's such a great tagline. Like, "We read the specs, so you don't have to." I would buy that book. Like, take my money. Come on, O'Reilly...

**Estelle Weyl:** I hear for search optimization reasons. The presentation layer of the web is going to get more hits.

**Amal Hussein:** Ah... Got it. Got it. Got it. Okay. AlSEO gods, you win. We already did an implicit warm intro for you... Can you please just tell our listeners who are you, what do you do, and tell us a little bit about your background, Estelle.

**Estelle Weyl:** So my name is Estelle Weyl, and you've got my last name correct, thank you very much; few people do. I have three jobs right now, kind of. As I said, I am co-authoring the fifth edition of CSS: The Definitive Guide. I am also writing Learn HTML for web.dev. So the first five sections are out, the next five sections should be coming out in about three weeks... It'll be a total of a 20-section course, and even though it's Learn HTML, it's really targeted towards beginners, all the way to super-advanced people who don't realize that they don't know things.

And then my full-time job is working for Open Web Docs. So Open Web Docs is a nonprofit, open source -- we maintain open source projects. And the open source project we're focused on is maintaining Mozilla Developer Network, or MDN. So MDN is part of Mozilla, but we actually do our team of four and a half people. It's not that we have a half person, we have one person who works halftime for Mozilla and halftime for us.

**Amal Hussein:** Yeah.

**Estelle Weyl:** \[06:02\] But we have four full-time and one part-time, and we do 63% of the code reviews, and we do 11% of the PRs... So 89 -- I can do math. 89% come from other people, but those are people who find typos, which we love the fact that they're doing that, but we're the ones who do the major changes. Like, if the side navbar has changed, and the layer has changed, and there's now page types...

One of the recent projects was changing every occurrence of VaR as a keyword in JavaScript to const or let...

**Amal Hussein:** Wow...

**Estelle Weyl:** So that was 26,000 occurrences. That was an MDN and Open Web Docs partnership to get the community to do the -- I don't know, it's like 860 PRs to get those... So we are at 20,000+. I'm looking right now at that PR. That PR number is a week old, and it's 21,875. So I'd say we're probably at 23,000 right now.

**Amal Hussein:** Wow...

**Estelle Weyl:** Yeah.

**Amal Hussein:** That's how frequently the docs -- literally, the docs that help... This is like the stuff that everybody has opened on a tab, or if you're like me, several tabs... So first of all, what an incredible and humbling background. Really, Estelle, I'm such a fan girl; you have no idea. you're someone who I've admired for many years, for a very long time; I've had the opportunity to meet you a few times in-person as well... You dig into stuff, you nerd out, and not only do you nerd out, but you help elevate all of us while you nerd out about stuff. So everybody wins here.

I'm curious, before we get into like the meat of the show - so we invited you here to talk about some of the new stuff that's happening with CSS and HTML, we're here to learn a little bit about how things get into the web... So we often in the JavaScript community think a lot about TC 39 and that whole process... So CSS and HTML are also managed through working groups similar to ECMA, which is the specification of JavaScript... And so can you tell us a little bit about how we get things into CSS land? What's the process for them showing up in the browser? And then there's like WHATWG, which is another body for HTML, which I always mispronounce...

**Estelle Weyl:** So I call it WHATWG. I don't know what their name actually -- who knows exactly how to pronounce an acronym anyway...? So the way WHATWG - I guess that's what I'm calling it today - was created is the specification group, this W3C was focused on making XHTML. So I don't know if you remember XHTML, but XHTML was basically coding HTML with XML syntax, which meant requiring lowercase elements and attribute names... And it required closing all elements, and it was very strict. Whereas there was a division, and people wanted to make it more loosey-goosey, because before, browsers basically -- if you put up anything, the browsers will render it. There's a few tags - like, if you open up a style tag, or if you open up a script tag and you don't close it, or a text area tag, the browser is going to think everything that's coming up afterwards is part of that text area styler... But everything else is pretty much like, if you don't close it, it \[unintelligible 00:09:28.23\] it's fine. You don't put a head in your document...

**Amal Hussein:** It's very forgiving.

**Estelle Weyl:** Yeah, very forgiving. So these two camps divided, and then everyone basically said "No one wants to write XHTML anyway, because it's really ridiculously hard..." So everyone went with the WHATWG, but it's still included, all of the features of XHTML, basically, just being less, I guess, pedantic, or less strict. So there's a doctype. The doctype -- it's not called doctype anymore. I can't remember what the word is... Because someone corrected me when I said doctype. They're "No, it's a document --"

**Amal Hussein:** \[10:08\] It's not doctype anymore? This is like news to me. Oh, it's a document type? \[laughs\]

**Estelle Weyl:** Yeah, something like that.

**Amal Hussein:** Okay.

**Estelle Weyl:** I can actually look it up...

**Amal Hussein:** Sure. Yeah. Go ahead.

**Estelle Weyl:** So do remember how you were saying how you have MDN open in several browsers?

**Amal Hussein:** Yes.

**Estelle Weyl:** I actually have the Edge browser...

**Amal Hussein:** I have it open in several tabs.

**Estelle Weyl:** Yes. So I actually have it as a search engine.

**Amal Hussein:** Are you serious? Can teach people how to do that? Maybe that's its own show. We'll put a link... I don't know if you have a blog post...

**Estelle Weyl:** So basically, it says you can choose what you want as your search engine, whether you want it to be DuckDuckGo or something else. I'm not gonna say Google. Y'all say Google.

**Amal Hussein:** \[laughs\]

**Estelle Weyl:** So originally, it's Edge; it was Bing. Who wants Bing as a search engine? So I set my default search to MDN. And whenever I type something in the URL, it searches for MDN. But my homepage is still Bing, so if I type something in the URL, like the big search thing in the middle of the Bing page, the homepage, then I can actually search Bing... Which isn't always that helpful. MDN is actually much more helpful. So let's type in doctype and see what they call it.

**Amal Hussein:** Wow. Okay, so first of all, mind-blown right now. This is like the ultimate pro tip for developers. It's like, just change your default search engine to be MDN... Because really, that's where most of your work-related searches are going anyways. It's your work computer, so... Yeah, that's awesome.

**Estelle Weyl:** So I do it in my Edge browser. My main browser is Firefox. You said yours was Brave...

**Amal Hussein:** Brave, yes. I said that offline, if anybody was curious as to how Estelle knew that. \[laughs\]

**Estelle Weyl:** I personally don't like the CEO of Brave. I like their browser, but I will never use it.

**Amal Hussein:** Oh, yes. Yeah... Okay, alright.

**Estelle Weyl:** But I use Firefox, because they're much more secure. And then the app that we're using to record this - it says it uses Chrome only, and I'm like "Oh no, Chrome..." And then I tried getting my audio and video to work, and I have so many security features put into my Chrome browser... Because one, I don't use the Chrome browser at all, but I definitely block everything... But I couldn't actually get this app to work in Chrome.

**Amal Hussein:** Right. Oh, that's so smart though. That's like a good hack. If you have to use Chrome, go aggressive on the security flags. For what it's worth, Firefox is my default at work, and on mobile I use Brave and I use Firefox Focus, which is like an awesome, for mobile -- like a shopping site, or whatever. You just close it, you don't have to worry about things even moving between sessions... But anyways, we digress. So bring it back to CSS... \[laughs\]

**Estelle Weyl:** Okay.

**Amal Hussein:** Not just CSS. So WHATWG is the standards body for HTML. What is that for CSS?

**Estelle Weyl:** So CSS, it's the CSS Working Group.

**Amal Hussein:** And is it like open? Can like anybody join, question mark?

**Estelle Weyl:** I am not a member of the CSS Working Group. A lot of people think I am... But I'm actually not.

**Amal Hussein:** Oh, wow. This is a shock.

**Estelle Weyl:** Yeah. So I know a lot of people in the CSS Working Group, but there's different sections to the CSS working group. So originally, CSS 1 - I guess it was created in 1996. It was Håkon Wium Lie and Bert Bos were like the two people who created it originally... And they created some features, and then it became a working group, and then there was CSS 1, and then there was CSS 2, and then there was CSS 2.1... And then there was quote, unquote, CSS 3. But CSS 3 is not actually a thing. There is no CSS 3 specification.

**Amal Hussein:** I thought this whole time that CSS three existed, because CSS 4 was like this really big deal a few a few years ago... Remember? Everyone was talking about "CSS 4, CSS 4!" So there's no 3?

**Estelle Weyl:** There is no 3. And there's no 4...

**Amal Hussein:** There's no 4?!

**Estelle Weyl:** Nope. There's no 5; there's not gonna be a 6 either. It's a living standard. So WHATWG, the HTML - it's not HTML 5 anymore, it's HTML the living standard.

**Amal Hussein:** Wow...

**Estelle Weyl:** \[14:11\] And CSS is also a living standard. I don't think they call it that, but if you look at certain things... Like, CSS Flexbox has CSS flexible modules one, and then it has two. And Grids has one, and then two. I believe Subgrid is in two. Colors - I think we are at... 4 is a candidate recommendation, which means it's been approved, but they're working on -- I can actually look... So if you look up -- you know, get your browser to have MDN as your default...

**Amal Hussein:** Search engine.

**Estelle Weyl:** Yeah. So I'm gonna look up just Color... Oh, it's gonna give me color. I don't want color; I want color as a value. Okay. So color data type, the specifications - I can just click on specifications, it goes down to specifications... It's CSS Color module level 4, but I believe they're working on 5, which has new colors... Let me see... No. Lab LCH... Okay, Lab, and HWB are actually -- they're new color functions, and they are in CSS Colors level 4. Let me just double-check that that is...

**Amal Hussein:** okay. This is like a real-time search, I love it... \[laughs\]

**Estelle Weyl:** Yeah. So the CSS Color module level number 4... So it's not CSS 4, it's Colors level four. It was last published two days ago. Okay. It includes some new color types. So it keeps going, and then they approve that version and they start working on it. So they're probably already working on a fifth version of something... I'm not sure if Colors is one of them. I don't think so.

**Amal Hussein:** Okay.

**Estelle Weyl:** But don't quote me on that, because I'm not actually in the CSS Working Group. I never thought about working for the specifications, because I attended a spec session one time, and it was a fascinating discussion; we spent one hour talking about HTML imports. And the topic was - if you have an HTML import with a JavaScript function, let's say named foo, and that imports a file that has a JavaScript function named foo, that imports another file that has a JavaScript function named foo, which imports the first file, which foo function wins?

**Amal Hussein:** \[laughs\] This sounds like a --

**Estelle Weyl:** Mind blown...

**Amal Hussein:** Yeah, Google senior staff engineer that only works on CSS interview riddle... Like, OMG...

**Amal Hussein:** Yeah. There were 12 brilliant people in the room talking about this for an hour, and I'm just like "Whoa...!" It sounds so simple and so basic, and... You have to think that there's billions of web pages, and this could happen to any web page, in any language, on any device. How do you handle this?

**Estelle Weyl:** Yeah, that is some really insanely cool stuff. For me, the CSS and HTML spec, especially CSS I feel like is so deeply complex, because it's literally just - it's what tells the story of visual rendering on the web. And then you have to respect -- like, CSS has to play nicely with HTML. And HTML is content-based, and content is as complex as the human language scheme, right? Like you said, Mongolian, Japanese text, Mandarin text, Arabic text, English text, French, Spanish, accents, no accents... Right?

**Estelle Weyl:** Right.

**Amal Hussein:** So how does CSS play nicely with something that's so -- so there's a big permutations list, which is really fascinating to even think about... But yeah, I get that. So we're gonna dig into some of the new CSS features in the next segment. We're gonna try not to like nerd out too much, because this is a Pandora's Box topic, right? Because it is literally going into like rendering engines, and browser engines, and it can get complex... So I'm gonna try my best to reel it in, but no guarantees.

**Estelle Weyl:** \[18:06\] I just want to add one more thing before we cut off, because this is actually really interesting... Remember how we were talking about what WHATWG is, and how that is the HTML living spec...?

**Amal Hussein:** Yeah.

**Estelle Weyl:** Now, Ian Hickson is the one who started the WHATWG, and he's actually the former editor of the list specification, the CSS list specification, because they are so tied together. Like, HTML had to figure out -- you know, the language attribute is put into your HTML, but the language attribute has to impact the CSS of what bullet type you're going to use.

**Amal Hussein:** Oh, yeah. Those are very intertwined.

**Estelle Weyl:** So they're very intertwined, because you can't actually put a Mongolian bullet point with HTML/ That can be done with styles. But what I will do during our five-minute break in between is do a test and see if I use Mongolian as a language, will the bullets come up as Mongolian or not? I don't know.

**Amal Hussein:** \[laughs\] We'll find out. Stay tuned!

**Estelle Weyl:** That's a type of nerdery that I get into.

**Amal Hussein:** Yeah. It's just going into the deep bowels of the web. It's like the 80/20 rule. It's not even 80/20 in this case, because it's -- the web has to work for everyone... And so we have to consider every type of use case, because the internet is a utility, it is an important utility. It's part of how people communicate, and do business. And so not having support for Mongolian is not an option, because there's an entire nation of Mongolia, and they matter, they count, right? So it's fascinating. So anyways, we'll be right back, everyone. See you after these short messages.

**Break:** \[19:43\]

**Amal Hussein:** Okay, Estelle... So you left us on a cliffhanger. Where did we end up on that "Does this work on the web?" question?

**Estelle Weyl:** So during the break, I tested a CodePen, and I put in an ordered list... I made the language Hebrew, and I put one word in Hebrew, and then I checked to see what the list items, the bullets look like. So one of the versions is the default decimal, and one of the versions I have the type attribute saying "A", so it should be letters... And nothing happened. So then I put an ordered list in -- or CSS rather, I styled the ordered list to say "list style type Hebrew." If you're looking at the CodePen, you'll want to remove the dash that makes the CSS fail; remove that dash, and wait a second, and it will update, and you will see the number 729 and 30 in Hebrew as the bullets.

So to add to that, if you want some HTML trivia, the value attribute goes on the LI, and you can change where it starts counting. I always thought that it went on the OL, but it actually goes on the LI. And so all subsequent numbers will -- it'll continue on from there. And the type attribute goes on the OL itself. There's five choices, but useless style type, because it'll override it. However, important to note, because this is really pedantic - if you're writing a legal document, such as if you're a lawyer, you want it to be numbered correctly, even if the CSS doesn't come through... And that's when you do want to use the type attribute. So include the type attribute if it's a legal document, or if you want it to show up even if the CSS doesn't show up. But it really has no impact if you're using CSS, which you should be using. Sorry for going down that rabbit hole, but that's why I write stuff...

**Amal Hussein:** So wow... Estelle, we're in the rabbit hole, for sure, but we'll put a link in the show notes to the CodePen, so you all can see what we're talking about... But this is -- it's fascinating. It's about ordered lists, and unordered lists, and how they manage their children, and how languages are affected by that, and blah, blah, blah... But it's really just an insight. It's a small, small sliver into the complexity of the web platform, and the complexity that needs to be handled... And so I think maybe some empathy for all of you when it comes to thinking about standards bodies, and why do things take so long... Well, it's because we really have to consider every use case for the web... And that's not negotiable, right?

**Estelle Weyl:** Right.

**Amal Hussein:** It doesn't matter. The Internet has to work for everybody. And it can't break. It's a functional utility.

**Estelle Weyl:** If you go back to that import discussion, import was in the standard track many years ago, and I actually gave a talk on how to write custom elements, or web components using HTML import. I gave the talk at a conference, and then they dropped the spec, because they could not -- I don't know if it's that example that I gave, not knowing which file would use foo... But it was some type of issue like that, where it couldn't be resolved, so they came up with a completely different spec. And you'll see -- like, if everyone remembers App Cache, that went by the wayside. So it was a spec that came out, it wasn't tested out enough, it wasn't tried by enough engineers... Engineers, everyone probably knows Jake Archibald's article "App Cache is a douche", which basically killed App Cache. I can now see you googling... \[laughs\]

**Amal Hussein:** \[26:19\] Oh, yeah. I am. It's fine. I'm not gonna google though...

**Estelle Weyl:** Yeah

**Amal Hussein:** This is fascinating. So HTML imports were -- I had such hope for them. I was like "Can this be a thing? Can we make this happen?" Because if we got that to work, it would have really been a game-changer for simple web development. But I'm just -- I was just so sad to see that spec die.

**Estelle Weyl:** But we got something in return, we got slot and templates.

**Amal Hussein:** Okay...

**Estelle Weyl:** We can do it, it's just different. But the interesting thing - and this might bring us to the next topic - is @imports in CSS. We were always told to never use @imports, and now we actually should use @imports, because browsers now support cascade layers. And the easiest way to import a third-party script and put it into a cascade layer is to use @import, because you can't actually use the link tag to put something directly into a cascade later.

**Amal Hussein:** Okay.

**Estelle Weyl:** So I think that brings us to the next topic, and you probably want an intro to the next topic. \[laughs\]

**Amal Hussein:** Yeah, I'm burning to talk about this... \[laughs\] That's okay, that's alright; I've just given up on like us not going into rabbit holes, because this whole topic is just a minefield of rabbit holes, right? It's like, how deep does it go? Guess what - very deep.

**Estelle Weyl:** Very deep.

**Amal Hussein:** But anyway, so new CSS features... So there's so much that's been going on, and I wanted to just intro this discussion with an overview of this initiative that's been going on, that's now been rebranded as Interop 2022. But there was Interop -- I don't know, I feel like there were so many Interop efforts going on. I was even involved in some of these many years ago, when I was working at Bocoup, working on very important interop issues, and fixing, and helping browser engines work more uniformly across the board... And there's projects like Test262, which is maintained by the TC39, which I've contributed to, which help essentially test JavaScript's implementation of JavaScript... In JavaScript... It's so meta.

So you're writing tests in JavaScript that are run by engineers writing C++ engine code; the JavaScript tests are written to test new JavaScript features... So interoperability is super-important, and there's many ways that we can achieve interoperability. One of those on the web platform is project called WPT, Web Platform Tests, another project that I've also been involved with in the past. So Web Platform Tests is an incredible project that helps browsers run tests. And is this blue? Is this red? I don't know; is your blue the same as my blue? I don't know. Like, how do we surface that? We can use robots, and machines, and screenshots, and all kinds of fancy tooling to ensure that a blue in Chrome is the same blue in Firefox, right? And it's not just blue. Blue is a small example. It goes deeper than that; like, the list views... CSS list - do those work correctly? It's pretty much every single web API is testable. And those tests are actually written in HTML, CSS and JavaScript. And so if you're actually interested in contributing to those projects, they are open source, open for contributors; you're welcome to go make the web platform better, help find bugs between browsers... And you can also look at interoperability ratings.

**Estelle Weyl:** I'm looking at the Interop right now, and when we started the Interop 2022 in January, Safari was the lowest, at 58%, and Firefox was the highest, at just around 70... Yep, 70.1. And Safari was at 59. And now the range is 85.8 to 90.7.

**Amal Hussein:** \[30:09\] Wow.

**Estelle Weyl:** So we still have two months left of the year, but they're really moving forward. Cascade layers is at 100% interoperability. Viewport units, web compatibility - I don't know exactly what that stands for... Viewport units is 100% across the board... Firefox is still at 96% for cascade layers, so I'm not sure which single test is failing, but I could click on it right now if there wasn't a cat on my arm...

**Amal Hussein:** So what Estelle is talking about are basically - there's the overall interrupt, so how do things work across browsers as an overall percentage... Like, what's the score for Chrome versus Firefox in terms of the number of how far they're straying from the spec, right? And then you can actually look at specific features. It's like, okay, for cascade layers, is there 100% interop? Does it work 100% the same across the board for all browsers? And the answer can be yes or no.

A project that I actually worked on on the JavaScript side is called Test262 Report, and we'll put a link in the show notes. That actually shows you the interop for JavaScript features across the board, for different browsers. Super-cool. Can you tell us, Estelle, how interop has been driving new CSS features, as well as improving CSS support across the board, between all these browsers?

**Estelle Weyl:** Well, what's really exciting about all the browsers working together, with I believe still Bocoup as well, and Aegalia, is that they've promise to get these things done. So browsers used to be "I'm focusing on this, and I'm focusing on that." But now they're all agreeing to focus on specific things, so we know we can use them by the end of the year.

I've been waiting for the dialog element forever. The reason the dialog element has been taking so long is accessibility concerns. Like, where do you put the focus when you close a dialog element? Where do you put the focus when you open a dialog element? These are accessibility issues that really all the browsers had to agree on it, because it needs to be the same in the end.

I'm looking at the interop right now, the lowest is 94% to 99% interoperability for the dialog element, with the support of the inner attribute on content behind it. That should be automatic. So I'm like "I'm oh, it's at 99%. I can start writing about it, and talking to people about it, and getting people to implement."

I've spent the last 8 years, 12 years telling people "Don't use dialogues" because of the accessibility issues. I know that the spec focuses on accessibility and makes sure that things are fairly accessible. There is stuff that's not accessible, like Canvas... Good luck making that accessible. I mean, you can, if it's just a static picture, and you can provide an ARIA label description, but you can't actually make something that's changing accessible without updating ARIA live regions, and is it worth updating ARIA live regions, depending on what you're creating?

I can be pretty confident that the dialogue element is somewhat accessible, and I no longer have to put up red flag warnings every time I use this element, or create a React component that does the exact same thing as a dialog element. And we don't need to create a React component that creates a dialogue element, because we have it now in HTML.

**Amal Hussein:** Yeah, I couldn't agree with you more on that... I mean really strengthening our primitives enables us to also ship less code and focus more on the business logic and the things that we can uniquely do as engineers for our customers, right? Wasting cycles on solving solve problems is not a productive use of time, and quite frankly, it's not the best use of time for our users either, right? So I think that's hugely exciting.

So getting into some of the things that you find really exciting, that's new to CSS - do you want to walk us through, for example, the :has() selector feature, that's pretty new?

**Estelle Weyl:** \[34:08\] Okay. So the :has() selector - we've been talking about a parent selector since forever... And so now the :has() - let me see if it's on the interop... I know it's in the interop, I just don't know where it is in the interop. So I'm not seeing it, but... Oh, but I could just go to MDN and look at browser compatibility, and see that it is everywhere. It still says a flag in Firefox, but I know that I tested it in Firefox, and it worked perfectly fine. So it must be some edge case where it's -- because I know I didn't enable this feature.

So maybe the BCD needs to be updated, or maybe I am not fully with it... But the :has() is not actually a parent selector. It's called a relative selector, because it chooses things other than parents. So you could, with CSS, say, "if this h2 has three sibling H2's after it, then style it this way." So you could, before, by doing 'H2 nth last of type 3n+1 that would basically say nth last of type n + 3'. So it would do like the third from the last one, the fourth from the last one, and the fifth from the last one will be styled a certain way. But it could only be if it was all the same type. So all H2's.

The relative selectors, which is the :has(), which is known as the parent selector, and that's what people are thinking it is, can do that, too. So it's not just "Does it have this as a child, or a grandchild, or as a descendant?", but it's also "Does it have this following it, that is of a different type?" So the :has() is colon has, open parentheses, close parentheses. Inside those parentheses - basically, it's a functional selector. It takes a forgiving list of relative selectors. So let me first go over what a forgiving list is...

**Amal Hussein:** Okay.

**Estelle Weyl:** When you include a list of selectors... So let's say it's just regular selectors, and you have a p, H2, foo bar  no comma if it has nothing in --

**Amal Hussein:** And foo bar is like a class here, or what is foo bar?

**Estelle Weyl:** It's just the word foo bar.

**Amal Hussein:** Oh, just the word foo bar. Okay.

**Estelle Weyl:** It could be a foo bar element; that's valid. Because you can create a foo bar element. If it has a period foo bar, or a pound sign foo bar - totally valid, because it could be a class, or it could be an ID. But if you put colon in front of foo bar, or double colon in front of FUBAR, it's not just that that's not valid, because foo bar is not a class or a pseudo class, it invalidates the entire selector list. So when you put a selector list like that inside of parens, normally that's called a normal selector list. Those are not forgiving. If you put a selector list like that, that has something that's invalid inside a not, or inside an is, or inside a where, or inside a has...

**Amal Hussein:** Is it like an or statement?

**Estelle Weyl:** It's a forgiving list, and it says, "If we don't understand something, we're just going to skip it. We're not going to fail everything." So the IS and the were was super-useful, once they were supported, to test new features, because if you have a new pseudo-element, or pseudo-class, or a browser-specific pseudo-element, like let's say '::/maz/scroll/thumb' I don't know if that's an actual element, I just made that up... But the thumb of a scroll bar, or the thumb of a range, WebKit will have a WebKit in front of it, because they all have different, basically shadow DOM to create these widgets... You can style those, but if you put that in a selector list, and the browser doesn't recognize it, and it's invalid, it ignores the entire selector block.

\[38:18\] So that's why in the past, we used to - you'll find in all codebases they'll have the exact same style repeated over and over and over again, because each one has a different selector, targeting a different browser in front of it. Now you can do is: and put the maz and the Webkit prefix together, so you can style the thumbs the same way in one block, because of this forgiving selector list.

So that's what a forgiving selector list is. So :has() takes a forgiving selector list. You can include stuff that doesn't exist in a specific browser in that list, it'll be fine. But a relative selector list is one that starts with combinator. So in CSS, your combinators are like a space, a greater than sign, a tilde and a plus, right now... Those are called combinators, and basically, the :has() assumes -- if you don't have a combinator, it assumes that there's a space in front of the selector in the :has(). So it assumes you mean child by default... Unless you put a plus, which means a JSON sibling, or a tilde, which means any sibling coming after it, not just the next one.

So that's how it :has() works. So :has() does more than just parents. So just realize that you don't need to put a combinator in, but it will put the space combinator in for you. So if it's not doing what you think it's doing, that might be why.

**Amal Hussein:** So Estelle, that's a really interesting explanation of the technical constraints of how to use it and whatnot... So can you give us an example of why someone would want to use the :has() selector? Like, what's an actual practical use case for it?

**Estelle Weyl:** So an actual practical use case for it is - there is one other thing that acts like the has, which is focus within; is something inside focused. But you don't want it to necessarily have focus. So focus within was super-powerful; you can open up -- I created the navigation for William Sonoma for all six brands and their navbar originally; I don't know if they've changed it back, because I don't know if they understood what I did... When you tab into a navigation bar - so if you go to the web.dev Learn section right now, and you Tab into the navigation bar on a narrow screen, you don't see where the mouse is, because it's going through all the links, but it's not showing up, because you never opened up the widget. And the thing is, you can open up with JavaScript, but you need to know that the person tabbed in there. But you can just do that with CSS; you can do 'LI:' the name of my sidebar, focus within, make it visible.

So on William Sonoma, when you are in one of the navigation bars, and your focus -- you've tabbed into there, the dropdown menu will be open. So focus within is like a parent selector saying "If the parent of the the ancestor -- I'm an ancestor of something that has focus. Make me visible, or do whatever you want to me." Similarly, has says "If I am the parent or the ancestor of this thing that's happening (and it's not just limited to focus), if there's a child that's invalid", like let's say there's a form control, and you want to show that form control, because there's something invalid, you can do it that way.

\[41:42\] Or we have the target pseudo-class, which is super-cool... But that's limited to just target; you can use it for similar things to target, as saying when you're focused on this, when the page has gone down to this section, scroll down to the section on purpose, do this thing with it, but if you continue scrolling down... So you can do a combination of many, many things... But the example on MDN is, "Is h1, h2 or h3." So if an element has an h1, h2 or h3, and it has as a next sibling an h2, h3 or h4, then give it some extra margin.

So basically, it's combining what you would -- normally, you would do SaaS, you'd say h1, h2, h3, and then nest inside the plus h2, plus h3, plus h4... How'd you get to that parent though? Like, you wanted to give the margin to the previous sibling. You wanted to give the margin to the previous sibling. So you could h2, like I said before, if you use 'nth last of type', you can go back up the tree. But if it's a different type, you can't. So here it's like a byline; you'll have a byline that has an h1 followed immediately by a paragraph. But if you want to style that h1, based on the fact that it has a paragraph after it. How'd you do that?

**Amal Hussein:** That's like a conditional...

**Estelle Weyl:** This is what :has() does for you. Yeah.

**Amal Hussein:** I see. Oh, fascinating. Okay, alright... Well, we have cascade layers, there's some new stuff with HTML... We're gonna take a quick break and then dig into those topics. So we'll be right back, everyone.

**Break:** \[43:22\]

**Amal Hussein:** Alright, Estelle... So wow, that was super-deep, and... Oh my gosh, there's just so much complexity. I'm just still mind-blown at how deep the rabbit hole goes. It really goes deep. We've been talking about this for a while, but it gets pretty deep. Another maybe really cool feature that I've been hearing about, but I don't really know much about yet is cascade layers. And you mentioned in the break that once you learn about cascade layers, you're never going to use bang important again. And I'm telling you, bang important is like my saving grace when I'm really frustrated and I'm working on a big application and I'm like "I just want this to work", and I'm too lazy to go figure out why this isn't working; bang important saves the day for me. So can you tell us, what are cascade layers, and why do they make bang important irrelevant?

**Estelle Weyl:** They don't necessarily make it relevant, but they make it so that you don't need to fall back on it. So what cascade layers does - well, let me explain a little bit the cascade.

**Amal Hussein:** Okay.

**Estelle Weyl:** So I think people understand selectors, and that the more specific a selector is, whichever selector is most specific, every property can only have one value. So if you say the color of the text is blue, and then the text of the color is red, which one does it pick? It picks the one with the most specificity. However, if you don't style anything at all, the color is going to be black. And where does that come from? That comes from the user agent stylesheet.

So there's three sources of style sheets. There's the user agent, the user, and the author, which is you, the developer. \[46:05\] So you're really only concerned with the developer, because for some reason, everything always overwrites what the browser is saying it wants. So you can have your own stylesheet. Very few people do. I don't really worry about it much because of the cascade.

**Amal Hussein:** Okay.

**Estelle Weyl:** Now, the cascade says, "Whatever the browser says is least important, then the user, then the developer styles. Then developer important, then user important, then browser important."

**Amal Hussein:** Okay.

**Estelle Weyl:** So why browser important? Browsers don't really put many important things in. One thing that it does put important on is a password has to have hidden text.

**Amal Hussein:** Yes...

**Estelle Weyl:** You can't, as a developer, say "bang important, make this text visible."

**Amal Hussein:** Password visible, yeah.

**Estelle Weyl:** Yeah. It will not do that for you. So you just understood with that is one example how the cascade works. It's user agent, user...

**Amal Hussein:** Browser.

**Estelle Weyl:** And I think that's the order, but I never do user, so I could possibly be wrong, but I don't think so... Then developer, then developer important, then user important, then browser important.

**Amal Hussein:** Browser important. Right. Okay.

**Estelle Weyl:** The only thing you can really control is the author styles. But the thing is, what happens is everything cascades together. So if you have a third-party scripts that - you know, if you have a third-party widget that comes with CSS, that CSS is conflicting with your CSS. So what cascade layer does is it creates an order similar to the way we have user agent, user and developer, but it's something that you can control. So you can basically say that, "I want the styles from this block to be in my first cascade layer, and I want the CSS from Bootstrap to be in my second layer, and I want this to be in my third layer, and I want these things are unlayered." So you can basically say, "This widget coming in from a third party goes into my first declared layer."

So you can have exactly how you have the cascade layers between user agent, user and developer, you can have the same type of cascade order within the developer layer, or author layer, of Bootstrap, Component x, and your own styles.

So what happens with the cascade is if the user had put '#main#container#foobarInput backgroundColor red' if you had put 'input backgroundColor blue', yours went out. Even though the specificity of theirs is higher than yours, it doesn't matter because they're in a different cascade layer; they're in the user layer.

Let's say you have a bootstrap, and you have things that are reliant on Bootstrap, but you want to override it. You can actually put it in the first layer, and then your new styles will override it, and you don't have to worry about what the classes are... Because everything you just did, just overrode everything there.

**Amal Hussein:** Right.

**Estelle Weyl:** Because if they put '###' which is the specificity of 300, your 001 will override theirs, because your cascade layer came later. That's why you don't need to use important, because if you just stick the cruft, or this third-party widget which is giving you cruft, into cascade layer, whatever CSS you write, if you're targeting that element, it will be more -- you know, there's still inheritance. If it's inheriting, you have to actually target the element. If they're targeting the element and you were just hoping it would inherit; but you don't have to use important, you just put it in a cascade and you don't have to fight that specificity war. Specificity wars with cascade layers are a thing of the past.

The thing is, if they put an important in their cascade layer, then just like user important is more important than author important, and the user agent is more important than the user and the author important, the earlier cascade layer is more important is more important than the other important.

**Amal Hussein:** \[50:15\] Yeah.

**Estelle Weyl:** So a useless piece of trivia is that important... Important is actually a flag. Most people think it's a keyword, but it's a flag.

**Amal Hussein:** Whaat...?!

**Estelle Weyl:** So if you put bang space important, it actually still works. So I documented it as part of my job for Open Web Docs, I documented important on MDN, and I think it's the only time important has actually been fully documented. It's a rabbit hole.

**Amal Hussein:** Yeah. Literally, read the docs. Wait, but hold on... Are you saying that like important literally was never documented until you just documented it? Also, this is like the segment of repeated words, because we've said important three times in a row; important, of important, documentation of the documentation... Like, yeah. Anyways...

**Estelle Weyl:** So in the specification there is no section that discusses important fully. There's one sentence that says, "The important flag", that's how I found out it was a flag... So I went and I looked and tried to find... It could, I just didn't find it.

**Amal Hussein:** Okay.

**Estelle Weyl:** So I did document important as best as I could, including playing around with the fact that you can put spaces in between the bang and the word important. Yeah, so it's a flag; bang is a flag, with the keyword important.

**Amal Hussein:** Okay.

**Estelle Weyl:** So that's useless trivia. Back to cascade layers...

**Amal Hussein:** \[laughs\] Honestly though, points for saying the word important 30 times, in a way that was actually meaningful... \[laughs\] Not just nonsense. But yeah.

**Estelle Weyl:** I have very important skill sets...

**Amal Hussein:** Uh huh... Okay... \[laughs\]

**Estelle Weyl:** So back to cascade layers. So how do you declare a cascade layer? The best way to declare a cascade layer - so we've been told to never use @import inside a style, because... I can't remember why we were told, but it's been supported since forever, and we were always told "Use link instead." You can't link into a cascade layer, but you can import into a cascade layer.

So if you don't have control over a style sheet, you can't -- you know, if you can't write to it, you can't put the whole thing into a cascade layer. So you have to import it into a cascade layer. So what you do is you do @import, the name of the file, and then layer... And you can either give it a name, or not give it a name. Layer is a functional notation. And you can either put the name of the layer or not put the name of the layer.

The order of the cascade layers is the order in which they're declared. So we've always been told that @import has to be the first thing in your style block. That is not the case; there's two things that can precede it, which is the content type and the cascade layer. So you can put those in front of it, and you do want to put it in front of it, generally. You can do an import directly into a cascade layer, but the best way to control your cascade layer order is to do a cascade layer declaration before everything, and just say, "This is the order of the cascades that I want."

**Amal Hussein:** Okay.

**Estelle Weyl:** The neat thing is, let's say you're doing something on mobile - you can actually put the cascade declarations within a media query and say, "On a narrow screen, I want this one to be more important than on a widescreen." The thing with cascade layers though is once you set the cascade order, it's immutable. You can't change, there's no trick to changing the order of the Cascade layers.

**Amal Hussein:** Oh, yeah, JavaScript developers can't be smart and then in runtime change the order or something, right? What does it, document write, or script write...? You know what I'm talking about, that document write, script write, where you can like edit things real-time for rendering engines - you can't do that here.

**Estelle Weyl:** Right.

**Amal Hussein:** Okay.

**Estelle Weyl:** So the way I actually tested it when I was originally testing it, is I like to do this thing where I style my style... So I make my style visible...

**Amal Hussein:** \[54:09\] Okay, so I didn't even know you could style your style. So I think Wes Boss had this recent viral tweet about this, and you're like "I've been styling my styles since 1999, kids. What are you all excited about?" What is the styling of the style? Explain, please.

**Estelle Weyl:** So I did a CSS workshop for Frontend Masters. It's since been archived, but it's still available if you search for my name. But I did another version of it, and it was 1,400 slides that were -- about 700 were interactive. And because it was a 34-hour workshop, they never actually edited it, so it never went live. But the slides are available if you go to estelle.github.io/css. Just remember my name, Estelle...

**Amal Hussein:** Yeah, we'll put a link in the notes. Yeah.

**Estelle Weyl:** github.io/css. It's from 2018 or 2019, I think. So it's a little bit dated, but it's still super -- most of it is still super-useful. But all of those slides, the way I made them interactive is I just put a style in the document. I said, "Display the header block, the head of my HTML display block, then display none on everything other than the style that has content editable attribute on it."

**Amal Hussein:** Ah, okay...

**Estelle Weyl:** So by putting the content editable attribute on it, I made the style block editable. And when you style it, when you edit the CSS itself, it's like a live CSS editor. You can do this on CodePen as well, but that is how I show examples.

**Amal Hussein:** Yeah, I think that's so cool, because I think most developers - at least I do anyway - just go ahead, open your DevTools and just play around... But that's so much more work sometimes, because you've got to find the element, then play around with that... So being able to actually work in that real time, that is super-cool. Is there like an example that you can give us a link to, so our listeners can check that out?

**Estelle Weyl:** Yeah, give me one second and I will pull one up.

**Amal Hussein:** Yeah, awesome. Yeah, we'll do that a sync, but there'll be a link in the show notes.

**Estelle Weyl:** So when I'm doing that workshop, and people are learning, like I'm explaining it, they can actually play with -- it doesn't work as well for selectors, even though I do it with selectors... You can change the selectors and you can say, "Hey, if I'm selecting every fifth element, the list items will change below it." If you're changing the background color, the deck for custom variables, if you change the values on slide like five - I'm just making a number up; I don't know which one it is - the entire deck will change colors.

**Amal Hussein:** Got it. Wow. That's pretty powerful.

**Estelle Weyl:** So that's styling the style. And the reason that I can do that, not just that you can actually style your style, is the content editable attribute.

**Amal Hussein:** Okay.

**Estelle Weyl:** So the content editable attribute is actually -- it's been around... I know that I used it when I was doing IE5 on the Mac. So that would be 2003, 2002, maybe 2001... I don't know, it was a long time ago. So the content editable lets you edit text. So you can add that to a div and make it content editable.

The thing with when you add content editable - normally you need to add a tab index to something to make it focusable. If something has content editable, it enters into the focusable order, so you don't need to add a tab index to content editable.

And then when I was diving into this, the thing that I've discovered is that content editable is an enumerated attribute. So there's a difference... Most people think that content editable is boolean, and with boolean attributes, if the attribute is present, it doesn't matter what the value is. What is a boolean..? Hidden I thought was a boolean, but it's not.

**Amal Hussein:** \[58:07\] Is it a string? It's a string, because it's an HTML attribute...? I don't know...

**Estelle Weyl:** No, no. So the difference between boolean and enumerated is boolean is either true or false. So its presence means that it will be true, its absence means that it's false. With XHTML, when we were -- way back, it feels like three hours ago, but it was probably 15 minutes ago in our conversation, we were talking about XHTML and how it was strict. So when we were doing XHTML style, you had to put a value in for a boolean attribute. You don't have to put an attribute in for boolean attribute; just its presence makes it -- oh, a good one is required. Something is either required or it's not required. There's no other options. So required on an input is a boolean value. If you put required = required - yep, it's true. But if you put required = false, it's also true. If you put required = 27, it's also true; it's still required. So people think that they can put required = false and it'll be false, but no. You actually have to remove a boolean attribute for it to be false.

Enumerated is different. Enumerated by definition means that there's -- like, you can see the word number in enumerated... So it means that there's a number of valid values. So content editable I thought was either true or false, but it isn't. It's enumerated. And a lot of times an invalid value on an enumerated value will be the same as the truthy value, even though the truthy value isn't necessarily true.

So content editable is a weird one, because if you put content editable = content edible, which is not a value for content editable... I get prizes for saying "content editable" 15 times in one sentence as well... If you put content editable as a value, it basically changes to inherit. So inherit is not a valid value of content editable, but that is the default value when it is invalid, I believe.

**Amal Hussein:** Yeah. Let me just frame stuff for our listeners.

**Estelle Weyl:** Okay.

**Amal Hussein:** So just in case, because I think we made a jump over to HTML without really transitioning this conversation, and I wanted to make sure everyone knew that --

**Estelle Weyl:** Okay, sorry.

**Amal Hussein:** Oh, no, it's okay. Content editable is an HTML attribute, and we're not talking about HTML; the hidden property and all of that - those are all things that go in elements as well. So that's another attribute. Just in case it wasn't super-obvious, because...

**Estelle Weyl:** It can happen.

**Amal Hussein:** ...the relationship blurred. But it can happen. It can happen to anyone.

**Estelle Weyl:** Okay.

**Amal Hussein:** Yes. Back to you, Estelle.

**Estelle Weyl:** We went from styling the style, which is CSS, but it's actually style is an HTML element...

**Amal Hussein:** It's an HTML element... Yeah, that was our bridge. That was our land bridge.

**Estelle Weyl:** Yeah.

**Amal Hussein:** It's where the worlds meet. You know, there's an HTML block that gets CSS inside... And that's how the two hold hands... Anyways. Yeah, okay. So this is like a nursery rhyme for developers that I've just made up on the fly. So excuse my singing, and bad lyrics...

**Estelle Weyl:** Nothing personal, but keep your day job. \[laughter\]

**Amal Hussein:** Dang it... Dang it! There goes my retirement plan, Estelle. You're just busting dreams over here. What's going on...? Yeah, alright... Songwriter Amal was never gonna be a thing...

**Estelle Weyl:** I think just with a little bit more work on it...

**Amal Hussein:** With a little more practice, it could work...

**Estelle Weyl:** You know, we're geeks, and we would probably totally go for it, and it would become viral.

**Amal Hussein:** Oh, yeah...

**Estelle Weyl:** I totally think you should do it. I totally think that that's --

**Amal Hussein:** Yeah, nursery rhymes for developers... Okay, let's do it. It's gonna happen. Okay, so back to you, Estelle... For real this time

**Estelle Weyl:** So back to content editable... So content editable has two values, of true and false. So you'd think it was boolean, but it isn't boolean, it's enumerated. There is possibly a third value coming, but that's on hold.

**Amal Hussein:** So it's like it's an enum list, right? It's not an actual -- but you know what I mean. It's an enumerated list. Like, "Value zero is true, value one..." Or these are the list of valid values, and those values are part of an enumerated list, and we're extending it to include other things than true and false.

**Estelle Weyl:** \[01:02:22.16\] So the default value of it not being there - well, it depends.

**Amal Hussein:** Oh is the default value editable?

**Estelle Weyl:** The default value -- if the attribute is present, the default value is true. If the attribute is present with an empty string, it's true. If it's present with an invalid value, such as content editable, it is -- so if you say "content editable content editable", or "content editable = foo bar", it is inherit. But inherit is not an enumerated value. And the reason it's enumerated even though it has only true and false is one, because an erroneous value is not the same as the default value of it being present and empty... And Bocoup, your former company, is working on standardizing a new value called plain text only.

So plain text only, I believe -- let me see... Plain text only indicates that the element's raw text is editable, but rich text formatting is disabled. But that is not supported in any browser yet, but Bocoup is actually working on getting that implemented, and it's not yet in the spec, so I think it's going to be behind the flag when it comes... But we might have a new value. And that's why the fact that it's enumerated is important, because it's going to be another value. But the important thing to learn also is that the invalid value is different than the empty value. So that brings us to the hidden attribute... So the hidden attribute actually has a new value. And the new value is until found.

**Amal Hussein:** Okay, until found. Interesting. So inherited in this case would really mean it's coming from the user style's agent, is my guess, or whatever defaults are in the browser...

**Estelle Weyl:** No, this is not CSS. This is an HTML --

**Amal Hussein:** Oh, wait, wait, sorry. Oh, my God, here I am... Oh, my God... I knew this was HTML, but I'm using a CSS methodology to think about what inherited means. This is where like the blurred lines kind of -- because CSS, again, it might probably be obvious for many people, but just in case... It actually stands for Cascading Style Sheets... So yeah.

**Estelle Weyl:** So hidden until found - element will actually take up the space on the page, but the content will not be visible. And with JavaScript -- so basically, there's a when focus lens on the hidden until found; there's a before match that happens, which is an event...

**Amal Hussein:** Oh, wow.

**Estelle Weyl:** Yeah, it's an event. And that changes the state until -- it's basically hidden until found; it's been found, so it's not hidden anymore.

**Amal Hussein:** Interesting.

**Estelle Weyl:** So that's coming to a browser near you. I can tell you the browser support - it's not in Firefox yet, but it is in Edge and Chrome... And I believe it is in the Interop, so it should be in Firefox and Safari probably before -- you know it's coming.

**Amal Hussein:** Oh, wow. Very cool. Very cool.

**Estelle Weyl:** That's a very cool feature. And that means that hidden is not a boolean attribute, it's an enumerated one. And that's why, as pedantic as my discussion was about boolean versus enumerated, it's actually super-important... Because you don't necessarily know -- basically, my suggestion to people is when you have an enumerated or boolean attribute, do not put a value, unless you check that value and you know that it is correct... Because both -- like, boolean is definitely true when it's present, definitely false when it's not present; that you don't need to remember at all. But if it's enumerated, you actually have to remember exactly what the valid values are. And so if you just don't put a valid value, you just leave it empty, it'll default, usually, to the value that you thought it was supposed to have.

**Amal Hussein:** \[01:06:11.23\] Like the truthy value... But isn't that on like the spec authors? I don't know... This is where I feel like we're getting into parts of the spec where the intuitive factor is pretty low, right? Like, it should work this way, but actually, it's this other way... And that just like goes back to HTML and all the -- you know, I've heard some crazy stats about browser engines and how so much time is spent between converting strings to numbers, and back to... You know, strings and numbers get translated like a million times, and a part of our processing time for parsing HTML and JavaScript actually is just going to that... So there isn't like type standardization, essentially; that's something that -- or maybe I'm trying to simplify something that's not simple. I don't know.

**Estelle Weyl:** You're actually comparing JavaScript to HTML, and to CSS.

**Amal Hussein:** Yeah, which is its own beast...

**Estelle Weyl:** Well, JavaScript is not forgiving at all. If you make a mistake in JavaScript, JavaScript doesn't work. If you make a mistake in CSS, it just skips on to the next thing. It's just like, "I'm not going to deal with that. I'm just going on."

**Amal Hussein:** Right.

**Estelle Weyl:** If you make a mistake in HTML - there's some mistakes which you can't recover from, such as I mentioned earlier, not closing the style tag, not closing the script, or not closing the text area. I don't know if that's it, but that's pretty close to it being it. Maybe the picture element - I don't know; I guess it will be an invalid picture, and it would show the contents inside the picture. Or video. I'm not sure, I haven't tried those. Now I know what I'm going to be doing this evening, because that's my life.

**Amal Hussein:** \[laughs\]

**Estelle Weyl:** The important thing is... The reason that they have the difference between enumerated and boolean - they actually made it really easy. It's just like, you put the attribute there without a value, and you're good to go 98% of the time. But that 1% when it's failing, you just have to remember that maybe it was an enumerated value. But if you don't have a value on that enumerated attribute, it is going to do likely what you thought it was going to do. Like, hidden until found - yeah, hidden = until found. Usually, when you put hidden, if hidden is true, it is hidden, right?

**Amal Hussein:** Yeah.

**Estelle Weyl:** If you don't put hidden, it's not hidden. And so you're only going to put a value on it when you know that you want until found. So they did really make it easy for us.

**Amal Hussein:** I see.

**Estelle Weyl:** But I think the lesson that we learn here is there's so much in HTML that -- it's so incredibly powerful.

**Amal Hussein:** We've got to learn it. We've got to spend the time.

**Estelle Weyl:** We have to take the time to learn it. I dive into a lot of these things in the web.dev/learn/html. I talk about content editable not that much. I do provide an example of styling your style... I don't talk about cascade layers at all; or I do a teeny bit, even though it's in HTML. I talk a lot about accessibility. And the thing is, we haven't really talked about accessibility for many of these things. But the thing to note is that HTML, for the most part, is by default accessible. There are some not accessible features in HTML, but if you actually use the right elements for the right behaviors, you're going to by default have an accessible site. If you remember to put your alt attributes with descriptive text... And there's some things that fail. Like, SVG doesn't have an alt attribute, so you have to think, for (I believe it's) Safari, you need to write roll image (roll = image), so the Safari screen reader voiceover knows... Maybe it's fixed, I don't know. But you put roll = image and then you put an ARIA label, if your SVG doesn't have a title. But if you put the title, then it would be fine.

So a good example is the radio button. The radio button - a lot of times I'll start a talk based on the fact that I talked to some that thought knew everything, and they don't know this one thing. So I asked a bunch of developers what the name attribute does on the radio button.

**Amal Hussein:** Oh... The name attribute...

**Estelle Weyl:** Yeah.

**Amal Hussein:** Huh...

**Estelle Weyl:** \[01:10:13.11\] These developers worked at a company that created the original radio button component for Ember. Now, Ember is doing really well on accessibility, but this was several years ago. And they had a component that did radio buttons. But the radio buttons didn't even use the radio element. I mean, input type radio; it used divs. Why reinvent the wheel? All of these input types are generally, by default, accessible. I don't know if the color one is very accessible, but input text is accessible. Radio button is accessible, if you have a label, if you code it correctly. So you need to know that every radio button needs to have a label. The thing is, the label usually on a radio button comes after the radio button.

Let's say you have two radio buttons. One says true, one says false. Those are the labels for those radio buttons. But what's the question? Like, the screen reader will see the true and the false, but they don't know what the question is, and you don't have a second label. So you can either use a lot of ARIA and give two labels to each; say, labeled by, and then to the IDs of the label and the paragraph in front of it, or you could use a field set around the two buttons, and the screen reader will say, "Here's a field set. The legend says this is a podcast. True or false?" You have true, you have false. The labels say true, the label says false... The legend has what the question is, so the screen reader user associates the whole thing. But you have to learn HTML to get that right.

So the one thing that people didn't know is what the name attribute does. Remember how I said true or false, and you can only pick one?

**Amal Hussein:** Yeah.

**Estelle Weyl:** Well, how can you only pick one? You know how radio buttons will turn one off when you turn the other one on... That's done because the radio buttons have the same name. So when you have -- like, the name attribute, it used to be that instead of using ID, you'd use name for inpage links, which were called something-identifiers; fragment identifiers. So you used to use name; you don't use name anymore. You use ID. But the name attribute on the input - because people use JavaScript, and I'm gonna say use Ajax, but basically use HTTP request to send back and forth data, they're not actually submitting forms that much anymore. A lot of people don't know that inputs should usually have name-value pairs. So an input of type text doesn't need a value, because you're entering the value. But every single radio button should have a name, and every single radio button should have a value. Because if you're submitting the radio button that says true in a label...

**Amal Hussein:** It's an input type, more or less, yeah.

**Estelle Weyl:** Yeah. You need to send something to the server. So the name attribute on the radio button says "Every single same named radio button, it's basically a radio group, and only one can be active at a time." Now, what you get with that is when the user hits the right arrow, it'll go to the next radio button, without selecting it. The keyboard user can actually navigate through all of them, without selecting any of them, which you get for free. So why reinvent that with a component? Because you're not going to get all of the features that come natively with the radio button. You're not going to get all those accessibility bonuses; you're not going to get -- you know, when you have a label associated with that radio button, if you're using a mouse, you have the entire label. If you click on the mouse, it turns on that radio button. So you have all these extra features.

\[01:13:52.27\] So when you learn HTML - I mean, you don't need to learn HTML as deeply as I do. I am creating a series on web.dev that covers a lot of the stuff that we've just covered now, but I'm not the one who wrote the form control ones. So I definitely suggest going to MDN. I suggest going to my workshop.

**Amal Hussein:** Yeah. What you're doing is Google? Because web.dev is a Google project and site; super-awesome, great resource. I'm sure all of you have run into it, unknowingly or knowingly already, but we'll link it in the notes as well. And so are you contracting with Google, or is this through your Open Web Docs work?

**Estelle Weyl:** No, my Open Web Docs work, 99% of that is actually working on MDN. I do a few other projects... But this is a separate contract.

**Amal Hussein:** Oh, very nice.

**Estelle Weyl:** So my full-time job is Open Web Docs.

**Amal Hussein:** You're contracting with the Chrome team, I guess; or someone on the Chrome team.

**Estelle Weyl:** Yeah. And I'm contracting with Google Chrome, exactly. If any of your readers work for a company that uses MDN a lot, the main contributors to MDN right now are Open Web Docs, and it is funded by --

**Amal Hussein:** All the browsers.

**Estelle Weyl:** ...corporations and individuals. Not all the browsers. We have --

**Amal Hussein:** Oh, and individuals, too? I didn't know that. Okay...

**Estelle Weyl:** We have Edge and Google funding us.

**Amal Hussein:** I figured it was all the browsers, because people--

**Estelle Weyl:** It's not...

**Amal Hussein:** Oh, that's sad...

**Estelle Weyl:** Yup.

**Amal Hussein:** Because I thought that there was this movement a few years ago around acknowledging MDN as actual documentation for web standards... I thought when that happened, and they created the Open Web Docs foundation (or nonprofit, whatever it is), I figured that that was "Okay, all the vendors are coming together and supporting this project in a neutral space, that's not Mozilla."

**Estelle Weyl:** Some vendors, definitely.

**Amal Hussein:** Some vendors, not all. Got it. Okay. Got it.

**Estelle Weyl:** Mozilla doesn't donate to Open Web Docs, but they have their own staff, and we work really closely with their team.

**Amal Hussein:** I see.

**Estelle Weyl:** So they're actually hopefully growing their team. But it's basically our two groups work together to get it done. We have a steering committee, the steering committee has -- so the steering committee is more an open group. The GC, which stands for -- I can't remember what GC stands for. It's basically the overarching, they're the ones who do the funding. That you have to be a paying member to be a part of. So on the Open Web Docs website, which I could open right now and find all the answers to all of the questions that I'm blanking on right now...

**Amal Hussein:** \[laughs\] Yeah, that's fine. We'll put links in the show notes for everything, so people can look that up. So before we wrap up this really long discussion - I'm just letting it flow at this point...

**Estelle Weyl:** Okay.

**Amal Hussein:** This is an academic discussion, and I'm here for it. But before we wrap this up, what are folks getting wrong often, and what are folks confused about all the time? Because I remember one of my first exposures to you, to some of your work, actually, was this awesome talk that you did about carousels, and how most carousels on the web are like completely inaccessible. And when you write an accessible carousel, which is something that you can do, and you really -- we'll link to your talk where you break it down and explain how to write an accessible carousel... Like, folks who were using screen readers - you said that they didn't recognize it. They're like "There's no way that this is a carousel, because it just works with my screen reader in the way that I would expect it to", but that like most of their experiences on the web were not -- ,like they were with inaccessible carousels, so they have learned to navigate around it... And so can you -- I'm just curious, what are folks still confused about and what are they getting wrong? Because we know that we need to learn deeply about HTML and CSS, and it's a one-time investment that pays off, right?

**Estelle Weyl:** If you really learn HTML, I give a 45-minute talk on the radio button. I mean, it sounds like it would be incredibly boring, but the radio button has so much depth.

**Amal Hussein:** It was a great talk.

**Estelle Weyl:** \[01:17:55.14\] Thanks. It has default features that when you create a custom component, or custom element, and you're not using semantic -- so when you use a semantic element, like an element that has semantic meaning, or an interactive element that is by default interactive, the browser provides you with all of this stuff. And if you use a div or a span, or you use the wrong type of element for something, you have to reinvent all those features. So the way the radio button one worked is - I call it merry-go-round. So if you look up "HTML merry go round", you'll probably end up on my GitHub repo. Or you could just go to github.com/estelle, and it's there. Or you can get the link to it from estelle.github.io, because it lists all of my projects. But what I did is, I did basically three labels, which were addresses, and then I did three radio buttons, and when you went from one radio button to the next radio button, I just did a hide/show of which one had focus. And so the screen reader user didn't realize - like, there was no way of them knowing that the label was not directly attached and right next to the radio button, because they know it's a radio button and they got the address, and they could click it, and that's what we wanted them to do, was to click it. The only problem with that - and that's why you need to learn HTML - is you're not supposed to put interactive elements inside a label. Because if you put an interactive element inside a label - if you remember when I said earlier, the label provides a hit area, or if you have a link in that hit area and you click on that link, is the link or is it the hit area?

**Amal Hussein:** That hit area is a tricky thing though, right? Like, just in general. I've been on teams where it's like what's the selectable content? Is it the whole row, or is it the actual text content? Or is it a link? That hit area is not something I feel like we've standardized. And I feel like the right thing should be the row, or the whole area. Like, the area that's wider than just the link, but I don't know. You tell me what's more accessible, Estelle...

**Estelle Weyl:** Well, the thing with the link is when a link is active, like if you have a bunch of letters together, the link is not just the letter S; if you're using the default blue, you don't have to click on that blue. It's the whole text area. So basically, within that line height, to the -- I think it's the inner padding, but maybe it's into the border area. I don't know, I have another thing to figure out again tonight.

And the thing is, I probably used to know that and I just don't remember it right now... But it's one of those things, if I was writing a bunch of links, that I would probably pay attention to. If you put a link inside a label, the browser is not going to throw up and say, "No, you can't do this", but your users are going to throw up and say they can't do this, because they can't click on the link, because every time they click on the link, the radio button right next to it gets clicked on and off.

**Amal Hussein:** Yeah, that makes sense.

**Estelle Weyl:** You know, like when it says, "Do you agree with these terms and conditions?" and then it has the terms and conditions, and then it says, "Click on this to get to the links and conditions"...

**Amal Hussein:** Yeah, I've experienced websites that have this exact same problem. It's like, the clickable area, and the link, and you're trying to click something that's a link, and you're trying to open... I feel like I've seen this on government websites, where you're trying to click on something that should open a modal, or a new tab, and it's selecting an input checkbox. Or like airline checkout screens... But anyways, so that's something people commonly get wrong. Anything else on the CSS side, like what's confusing people?

**Estelle Weyl:** I think on CSS people do not understand specificity, and they don't know the selectors. So when I develop content, I very rarely use class names, because I've discovered that class names is added cruft. If I'm going to style everything that's in Spanish, and make it italic, I should base it on the language when I say "Everything else is English, but this section is Spanish." So instead of doing 'SpanClassTranslate this LanguageSP.' whatever the language; I'm totally blanking on languages right now...

**Amal Hussein:** It's okay.

**Estelle Weyl:** \[01:22:08.14\] I can use the language selector, which is ':Lang()' or I can use the attribute selector, and then I don't need to add a class, and then if something else gets translated, no one else has to remember that they need to add a class.

**Amal Hussein:** That's true.

**Estelle Weyl:** Yeah. With my radio buttons, I do input type radio plus label, and then I know that it's a label that comes right after a radio button. That's where it's always going to be.

**Amal Hussein:** Yeah. You're designing it to be extensible and scalable. That makes sense.

**Estelle Weyl:** Yeah. What I think people get wrong-- it's not necessarily get wrong, but if you really learn all these selectors - and I do have, it's on YouTube, there's a selector workshop; I gave a three-hour selector workshop at SF HTML5, which is SanFranciscohtml5.org. So their YouTube channel has - I guess it's two and a half hours, because they cut some parts out, like the breaks... It's long, but it's actually worth it, and that's the most recent one I gave, because I gave that one right before the pandemic. It does not have has in it, but it has almost everything else.

**Amal Hussein:** Oh, nice. Yeah, we'll link to that in our show notes, as well as a bunch of other great resources Estelle generally has... But yeah.

**Estelle Weyl:** Learn your selectors, learn specificity, and I have a cheat sheet called specifishity.com. So just spell -- it's specificity with fish, and plankton, and sharks, and the atomic bomb... Because why not?

**Amal Hussein:** \[laughs\] Oh, gosh...

**Estelle Weyl:** So that's a little bit outdated, but... You know, it doesn't have, has, is, or where, but it has everything else in there.

**Amal Hussein:** Yeah, it's got the majority of the stuff. Yeah, that's super-cool. And container queries - this another feature that we're not going to have time to get into today... I think that's really -- it's going to be its own discussion in the future, that's landed. And I want to just give a shout-out to one of our listeners, Jarvis Yang, who put a link in our Slack channel recently about a new project that just -- like, it's a simple web app that showcases Pokémon cards, and all these cool CSS features... It's mind-boggling to think that somebody developed these Pokémon cards with just CSS and HTML, because it looks like some 3D gaming rendering engine. It's wild.

**Estelle Weyl:** I took a look at that. I'd highly recommend looking at it.

**Amal Hussein:** Yeah, it's a another good learning tool, I think.

**Estelle Weyl:** When I saw that, I'm like "God, I don't know CSS." And the thing is, I do know CSS, but I know much more pedantic CSS. You can go from anything, from like what we talked about a long time ago, which is what language your list bullets should be in, to creating 3D effects that look like there's a reflection or a hologram... I mean, you can do so much stuff with CSS. CSS is really easy and really difficult. It takes almost no time to learn the basics.

**Amal Hussein:** But the mastery is different.

**Estelle Weyl:** Yeah.

**Amal Hussein:** It's kind of like piano versus guitar...

**Estelle Weyl:** You don't need to master it; what you need to know is what it's capable of. What you do need to master is the basics. There was someone who did this really cool example the other day, of a new feature, and I couldn't link to it because it was not accessible, because they used divs for everything, and they didn't have alt attributes on their images. So anyone -- I couldn't say, "Look at this, it's a great example of doing this feature", because you wouldn't know how to code correctly, and you couldn't extend it. So the last thing I did on Open Web Docs is on MDN I changed every single HTML intro element to include the language attribute, to include the viewport, and to include a title, because I want to make sure that people are coding accurately. We're currently doing a thing where we're making sure that every single image has an alt attribute.

**Amal Hussein:** \[01:25:55.06\] Yeah, you want people to -- if they inspect it, or they're trying to copy literally the source, which they're learning how to do it the right way, that the actual source is also doing it the right way.

**Estelle Weyl:** Exactly.

**Amal Hussein:** Yeah. Yeah. That's so cool, Estelle. Thank you for that.

**Estelle Weyl:** Take the time to learn to do the basics, because your JavaScript will be much easier; it's much easier to use a dialog element that takes care of 98% of what you want to do, and add a few features to it, than it is to rewrite the dialogue.

**Amal Hussein:** To use like a portal, and to use JavaScript to do a bunch of fancy stuff - yeah, yeah, I agree. We talk a lot about this on the show... Even though this is JS Party, please, use HTML and CSS to do the things where it's best to use HTML and CSS. Using JavaScript to do everything is a pretty expensive decision in the long run, and it's also often not the best, right?

So with that said, Estelle, where can folks follow you, and then do you do any workshops if folks are interested in hiring you for their companies, or whatever, to teach? How can people also just generally support your work? And by the way, your earlier comment on "I don't know if I know CSS because of this Pokémon thing", you literally helped co-author the giant CSS Definitive Guide, which is like this encyclopedia for CSS, the O'Reilly book, with Eric Meyers, who's another awesome person...

**Estelle Weyl:** Yeah. He actually is an awesome person.

**Amal Hussein:** He really is, yeah. We've had him on the show before. But I'm just saying -- and I've also interviewed him for my other podcast, the Web Platform Podcast many years ago... So yeah, I just want to say, you are definitely one of our experts, so you're the one person who's not allowed to say "I don't know CSS." I'm sorry, I do not accept that statement.

**Estelle Weyl:** \[laughs\] Thank you.

**Amal Hussein:** But going back to...

**Estelle Weyl:** Going back to where you can find me.

**Amal Hussein:** Yeah, where we can find you.

**Estelle Weyl:** You can find me on Mastodon social. I am Estelle on Mastodon social. I am Estelle on cohost.org, I am @estellecw on Twitter, but I might not be on Twitter for long... I am Estelle on GitHub... So basically, if Estelle isn't me, look for Estelle VW, which is my middle initial and my last initial. If you want to hire me to teach at your company, I would love it. I teach on CSS, HTML and accessibility. I don't do accessibility purely workshops, but I can refer you to people who do.

I teach people how to use CSS and HTML in an accessible way, so that their sites are by default accessible. I don't teach how to reconfigure your components to be accessible. For that you want Marcy Sutton, because she's amazing. I don't know if you've had her on your show.

**Amal Hussein:** I have not, but she's -- I mean, we may have. Another host may have had her on the show. But she is amazing, and phenomenal, and she's another person who I'm really a huge fan of. So even if we have had her on the show, I want to have her back in the future. So if you're listening to this, Marcy, I will be contacting you.

**Estelle Weyl:** And Melanie Sumner is another one who does accessible JavaScript. She's the one who does the accessibility features for Ember.js.

**Amal Hussein:** Nice.

**Estelle Weyl:** So if you want to reach out to me to do a workshop, you can find me on any of those social media. My email is my first name at my last name.org. I will say how that's written, but if you know my first name and you know my last name, at and dot org, and you'll find me. I just don't want the bots on the captions to add me to the mailing lists...

**Amal Hussein:** \[laughs\] Nice. Smart. Look at you, smart, smart.

**Estelle Weyl:** Just one thing - if you want to see the work, MDN. I'd love people to contribute. Open Web Docs, I'd love people to contribute. Web.dev/html/learn. And then books - if you have Safari Online, which is how O'Reilly distributes... And if you are a member Frontend Masters, you can find my work by searching my name, because my talks have been archived. The CSS selectors workshop is still super-valid, even though it's from 2018.

**Amal Hussein:** Cool. Awesome. Well, again, it's been an absolute pleasure. I feel like I should be saying doctor Estelle Weyl, but you're like a doctor, like honorary doctor of the web, I feel like... But thank you. Thank you for everything that you do. Thank you.

**Estelle Weyl:** This is a podcast, so people can't see I'm turning red... But thank you very much for having me. It's been a pleasure, and you are a joy to talk to.

**Amal Hussein:** Thank you. Thank you so much, Estelle. Thank you so much. So that's all for this week, everyone. We'll talk to you next week. We've got some really awesome shows lined up till the end of the year. We're literally booking out our guests three months at this point... So lots of lots of really great stuff coming ahead, and thank you again to Estelle, and we will chat soon, everyone. Bye-bye!
