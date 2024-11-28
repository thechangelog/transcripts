**Jerod Santo:** We are here with Helena Zhang and Tobie Fried, makers of awesome primitives, icons, fonts etc. Welcome to the show.

**Helena Zhang:** Thanks so much, Jerod.

**Tobias Fried:** Yeah, great to be here.

**Jerod Santo:** Y'all caught my eye with Departure Mono. Holy cow. Departuremono.com. First of all, lover of monospace fonts... Second of all, lover of this website. This was a collab. So Helena on fonts, Toby on web. Is that right? Is that how it breaks out?

**Tobias Fried:** If you want to get specific, the design for the website, at least the static view of what it's going to look like, the high-level view is definitely Helena as well. I'm the hands, in most cases, and in most of the things we do together... But yeah.

**Jerod Santo:** So we have a little bit of creation, and then execution. You have a little bit of design and dev, but Helena on both the design of the font itself and the design of the website, both of which are remarkable, in my opinion. What do you think, Adam? Are you digging this website? Because I just was like "Oh, we have to have a podcast with them, because this is just great."

**Adam Stacoviak:** Oh, yeah. It's the perfect website to showcase the font, and the capability. I mean, the whole thing is in the font, but you showcase it at large sizes, small sizes in use cases etc. And at its very small level it reminds me of the kind of fonts that would happen back in the Flash days, the really small fonts... It looks beautiful at a very small -- I'm not even sure. Very small, let's just say. It looks cool. I dig this site.

**Helena Zhang:** I'm glad you picked up on that, because that was one of the inspirations, was like the early aughts, tiny, tiny pixel fonts often used in Flash sites. I think what comes out a little bit more though in terms of the feel of it is it feels very command liney, maybe if you think of like fonts from the '70s, '80s, or maybe even '90s - that era of command line fonts. Because it's not quite as small as -- the Flash sites had like five by five fonts. Really, really tiny.

**Jerod Santo:** Yeah. How much do you nerd out on these fonts, Helena? Do you all the monospace fonts, and you can tell their differences and all that? Or do you just create in a vacuum somewhat?

**Helena Zhang:** I don't know all of them. I don't think it's possible to know all of them. But I definitely researched a lot when I was creating the font, and of course, prior to that, I just lived through some errors where I used it in my work... So yeah, there's something special about monospace fonts, and I think in a lot of contexts we're past the point where we need that constraint. If we go back to the typewriter origins of nonospace, we don't quite have those mechanical constraints anymore... But we still kind of reference that style, and there's something raw and interesting about it... And then there are modern use cases like coding that actually do need monospace formats. So I think there's still a lot of room for newer monospace fonts to come into being.

**Jerod Santo:** Yeah. I mean, I think the magical thing as a coder is -- it's just obvious, everything lines up perfectly. And there's just something very satisfying about that. Obviously, like you said, it's kind of necessary in code, especially if you work in languages that have significant white space, stuff like this. But even in non-code contexts -- of course, you don't want everything to be monospace everywhere, because there's other things to reflect, and to show... But there's just something satisfying about easily lining up letters and numbers perfectly, without any sort of wiggle room.

**Tobias Fried:** \[00:07:48.24\] And there's a real technical need in some spaces for it. At my day job, for example, one of the things that I do is maintain our CLI. I work at a company called LiveKit, which does real-time audio/video infrastructure stuff, and maintaining a CLI. A lot of the inputs and outputs are structured data, tables. You want a real-time overview of how a video call like this one is performing, what the latency is, what the bandwidth of each participant is, and all that is going to be printed out as a table in your terminal. And things like box-drawing characters... Good kerning in a font is really, really critical to legibility... But yeah, you need a monospace font in a terminal. There may be some day where we don't, but for now we very much do.

**Helena Zhang:** There are analog contexts too, whether it's printed tickets, let's say, or I don't know, at a train station having the departure -- actually the origin of the name of the font, departure, is referencing the departure tables, and boards you would look at an airport, something like that.

**Tobias Fried:** What fonts are you guys using in your IDE, in your terminal? Just curious.

**Jerod Santo:** It's been a journey. Go ahead, Adam.

**Adam Stacoviak:** It goes back as far as like the obvious ones, like Menlo, that comes like by default, and versions of that that are available on the web by default. Then Roboto Mono was a staple for me for a long time... JetBrains Mono, IBM, I believe they have a version of...

**Jerod Santo:** Plex, right?

**Adam Stacoviak:** Yeah, I think it's called IBM Plex, yeah. I think now I've stabilized on JetBrains Mono. And I don't know -- I've only discovered Departure Mono recently, so I haven't made that switch yet... I'm just enamored by it at this point, not a user of it. Would it translate well in that regard? Like, would it replace a JetBrains kind of monospace font?

**Jerod Santo:** A coding font?

**Adam Stacoviak:** Yeah. Is it meant to --

**Tobias Fried:** I'll take that, because I'm coding in it daily right now. It's my terminal font, and... And yeah, I think you'll find it's really quite usable, surprisingly. It doesn't yet have a lot of the bells and whistles that things like JetBrains Mono or Fira Code do with coding ligatures. A lot of operators and things have special treatment in these modern, expansive, mature fonts. We don't have so many of those things yet, but in terms of usability and legibility at a really small size, with a lot of text on screen, it performs surprisingly well. And we've been hearing that from people who've used it organically...

It's now available on like Homebrew, if you want to install it that way. We have an open PR with the people who run Nerd Fonts... So if you have a custom NeoVim set up that requires you to use those icon font variants that have all the glyphs added in for use in NeoVim, and kind of terminal-based IDE and stuff, we're going to be there, too. But legibility-wise, it's great. It works really, really well.

In terms of glyph coverage, I think the last update that Helena did added like Cyrillic support... So language coverage is really big already, bigger than a lot of fonts that you've heard of, I'm sure. But yeah, I find it highly usable. I've heard from people I work with, people who picked it up at random, people who saw the website that they're using it in their in their IDEs, in their terminals, and finding it great.

**Adam Stacoviak:** I'd say, looking at the website and just seeing the gushing preview of it makes me want to have a reason to use it in every case, from a receipt, to a plane ticket, to my terminal, to just using it for prose, to read. I think it's just such a beautiful font, both large and small. I'm just just beside myself with how amazing it is. And the website does the website does all of it justice because it showcases all the different areas.

\[00:11:47.17\] I'm particularly just like beside myself with the Double R Diner. As a receipt, it looks so beautiful. I want to go to all my stores and get receipts now... Because I don't usually accept them. I'm like "No, keep that." And now I want them, especially if they have Departure Mono as the typeface.

**Jerod Santo:** Yes. It seems like a diner from like the '50s, or something. Although probably still even today they print out in those monospace fonts, but...

**Tobias Fried:** It's actually a Twin Peaks reference.

**Jerod Santo:** Oh, is it?

**Tobias Fried:** I don't know if you guys watched the show, but...

**Jerod Santo:** No, I haven't. I heard of it, though.

**Helena Zhang:** There's some deep cuts in here.

**Adam Stacoviak:** Nice...

**Jerod Santo:** I love it. Can you share more of the deep cuts? This is great.

**Helena Zhang:** Let's see, what else we've got?

**Adam Stacoviak:** The deepest of the cuts.

**Helena Zhang:** Carmen... Okay, next to that, the ticket has Carmen's baselines. That is the line. It's hard to say where -- I'm trying to remember. Actually, it's been a minute... It's like, where does space start, and where do we draw that line? There is one put forth that's called Carmen, the Carmen \[unintelligible 00:12:46.18\] But in terms of naming, let's say in this example we're naming the airline, or the space line... So little names like that, the Double Art Diner...

**Tobias Fried:** There's an identity card for Dr. Kerning, just kind of the font terminology reference in here...

**Jerod Santo:** I saw that one, yeah.

**Tobias Fried:** There's some Futurama names dropped in, and some of this kind of --

**Jerod Santo:** Oh, nice.

**Helena Zhang:** Yeah, Dr. Farnsworth is in there...

**Tobias Fried:** We're both just lovers of science fiction, and speculative futurism, and stuff like that. So a lot of this is from pop culture, some of it's from just font references and TV shows and things that we like... But honestly, some of it's ChatGPT, too.

**Jerod Santo:** \[laughs\]

**Helena Zhang:** Yeah, definitely... This is maybe the first time I use ChatGPT and Claude to help write some of the documents about discovering anomalous energy signatures, and just getting a little boost there. That was helpful. There's also some direct references to NASA documents... And there's a diagram in the lower portion of the site. There's kind of a diagram of the... I believe it was the Mercury Project, and there's a figure kind of like blueprint drawing, and that one is referencing that. So lots of different references, lots of deep research on this project, and had a lot of fun just like re-watching sci-fi movies, or... Trying to capture that vibe.

**Adam Stacoviak:** You like the printer paper, too. It's so far back -- I forgot what this is called, whenever you have that tear-off paper with the dots on the side...

**Jerod Santo:** Dot matrix? No.

**Adam Stacoviak:** Is that what it is?

**Tobias Fried:** Yeah, the printer style yeah, but this is like tractor -- the lines are like tractor marks...

**Helena Zhang:** Tractor feed strips, or something. I'm not sure the exact terminology. But yes, very, very nostalgic.

**Jerod Santo:** Yeah, that's where it feeds it through with two wheels, and they have actual little things jutting out of them. What are those called, spikes? I don't know what they are, but...

**Tobias Fried:** Teeth?

**Jerod Santo:** Yeah, teeth. That's probably the best word for it.

**Helena Zhang:** I mean, I remember ripping those off when I was --

**Jerod Santo:** Totally.

**Tobias Fried:** Speaking of ripping off the -- as soon as we launched this site, we saw a lot of copycat stuff out there. I think the design and everything just resonated with some people a lot. We saw a couple of AI companies basically lift some designs directly from the site, we saw some of the visual motifs and things popping up... And it's humbling, and in many ways you appreciate the nod and the reference... But when it comes without any sort of credit or anything, it can be frustrating... But humbling at the same time.

**Jerod Santo:** Right. As a retired creator of some viral memes, I absolutely understand what it feels like. It's a compliment. You have to take it that way. But it's also maddening, because you're like "Just cite your source, dude. Come on." But it is the sincerest form, as they say, of flattery... It just doesn't feel like that, for some reason. It feels like theft. It feels like theft. So understood.

\[00:15:52.27\] There's a -- first of all, I mean, when the site gets copied, it's because... And our listeners should just go check it out. If you're driving, pull over, check out all these references and stuff, so that you know what it is that we're fawning over, as we're not going to probably stop at any time soon. But it has this feel of the past, but also the future, too. Or at least the present. And it kind of hits on something that I've talked a lot about with Adam, which I think is a really cool style, which I don't have a term for, but I actually stole a term... Here's me citing my source. I stole it from Dua Lipa, who named one of her albums Retro Futurism.

*Jerod here in post, with a fact check... It is not called Retro Futurism. That was definitely the vibe I was describing, but her album's name is Future Nostalgia.*

**Jerod Santo:** And it's kind of this idea of like -- it feels like the past. There's this retro nostalgic thing to it from like the '70s, '80s, whatever, but also nods, or like a direction towards the future. And where those two things meet I think it's just a very satisfying, interesting place... And so maybe that's why it resonates, at least with me, so well. But it sounds like with everybody else as well.

**Tobias Fried:** Yeah. I think there's a beautiful anachronism here, in that we used to build fonts like this because we had no other choice. Each each character needed to fit into a six by nine pixel bitmap region of memory, and that's all we had. That's all the computers could do. These days, the font is implemented in the open type standard. It's a vector font under the hood. This is not a Bitmap font. It's using modern technology, but with all the trappings of how we used to do it. Yeah, I think it's --

**Adam Stacoviak:** Has anybody used it as their logo typeface yet?

**Helena Zhang:** I haven't seen it yet, but...

**Jerod Santo:** Just waiting for someone to do it.

**Helena Zhang:** Yeah. \[unintelligible 00:17:52.04\]

**Jerod Santo:** So we use a little monospace font around Changelog.com, but we've been using Roboto Mono for a long time. Personally, I started off in whatever the default TextMate one was... Was that the Menlo one? I think it was Menlo. And then moved to Ubuntu Mono. And I liked Ubuntu Mono more than the rest, for many years... I couldn't tell you why. I just liked it more. I looked at them, I looked at that one, I'm like "I like this one." And I used Ubuntu Mono for a very long time. It turns out I got less picky, because I switched at one point into Zed as my editor. And Zed brought its own font. Zedplex Sans. Zedplex Sans... That's their Sans Serif. That's not the monospace.

**Tobias Fried:** I might fact-check you on this. I think their font is a modification of an existing font.

**Jerod Santo:** Okay, that's probably --

**Tobias Fried:** I think it's Commit Mono that's slightly modded, or something like that. Don't quote me on this.

**Jerod Santo:** Okay. And obviously don't quote me, because I'm just reading what's in the default settings, and I'm reading Sans, and I'm thinking that's not monospace. That's a Sans Serif. So that might be a system font... Anyways, I don't know what I'm using right now, so... I thought it was a Zed monospace font, and it might be, but maybe they just tweaked and renamed. I have not configured Zed with a new font, so I'm shopping. That's my point, I'm shopping. And I'm actually pretty happy with what they have. It looks nice, and it has all the things that I like... Which is one of the things I definitely want out of a monospace font, is like very clear delineations of the ambiguous characters: zeros, ones, L's, O's, that kind of stuff... Like, that for me is table stakes. I don't know what else is interesting to folks. The ligatures I think are blockers for some people. Like, they want to have ligatures. I can take them or leave them. I think they're cool when they're there.

Sometimes I'm wondering "Is that two characters or one?" It's one glyph representing two characters, and that tricks my head, but... I like ligatures if they're there, but they're not going to stop me from not using a font. What else is it usually people care about in these kinds of fonts?

**Helena Zhang:** \[00:20:02.02\] I mean, for coding, I think you hit on those... Like, very distinct characters from each other, and the ligatures to me too feel like bonuses. It can still work. It should still work as a default. And then if you have those kind of nice, I don't know, smoothing out the multiple characters in a line, that could be a bonus.

**Tobias Fried:** Also there's a legibility thing that you spoke to, with like "Is the zero visually distinct enough from the capital O?" Things like that, they matter for people who spend all day sitting at looking at just text, and working with it; they matter a lot. Little things like "Have good decisions been made for punctuation?" An earlier version of Departure Mono had a one-pixel period. The pixel grid that Helena was designing with is -- I mean, it's a little bit complicated when you count ascenders, and descenders, and kind of extra headroom and stuff, but basically... Correct me if I'm wrong, it's eight by five, or it can go up to 9, or 14 or whatever, but...

**Helena Zhang:** Yeah, I would say the bounding box, if you will, is 7 by 14. If you take a capital letter, I think it's five by eight.

**Tobias Fried:** Yeah, five by eight. Five tall, eight wide. But the period - my point was the period in an earlier version of the font was just a one by one dot. And I was using an earlier version, and I was coding with it, and I was like "You can't see it." It looks good in display size, when you're really showing off the font as a heading or something, but I can't even see it, and I use -- dots are everywhere in code. So that ended up being like a one wide, two tall period, which is not square, and not circular, obviously... But it looks good, and it ends up being much more legible. So things like that, that really, really add up and make the font easy on the eyes, or easier on the eyes, and usable for hours on end.

**Helena Zhang:** Yeah. Something I was thinking about when I was creating it was -- so with monospace fonts the constraint is that each character has the same width. But some letters are naturally wider. The W or M usually take up more space. That feels more natural to us when we read. The I, something like an I or a 1, usually narrower. So we have to figure out how to deal with that in monospace fonts. And there are little tricks you can do. Basically, you can serif it, so you can give it a base, and kind of make the letters a little wider... But that may not be what you're going for in terms of style. So there's different ways you can deal with that, and I think one thing that was both endearing to some of those early 2000 fonts, but also bugging me about them was that the kerning feels all over the place, and that's the horizontal space between two letters. When that's not considered enough, it looks very wonky to the eyes, and it's very hard to read, because it's hard to distinguish between what's one word, what's the break between a word and a letter.

So that's something I think I prioritized, was to really pay attention to the kerning... Even though it's a monospace font, and we forgive a lot of that, because we know it's supposed to be a little wonky... But at the same time to make it really usable, I think this is why when Tobie's been using it as a font in his programming, it works, because I've smoothed out some of those kinks in terms of the spacing in between. But it's all about trade-offs. The letters will look a certain way if I decide to serif them, in some of the cases. So it's kind of a balancing act there.

**Jerod Santo:** \[00:24:03.11\] How do you test that kerning? Do you have to put each letter next to the other letters, and just see what it looks like, and then change it? And then go check? Are there regression tests? How do you go about it?

**Helena Zhang:** So the way you can do it - you can have proofing; it's called proofing text, and you can have basically different pairings, kerning pairs, and different sets of two letters next to each other, is one dimension to look at. So does the space -- is there more space between these two letters, or less space? Generally, you want them to be pretty uniform. And then you also want to text -- testing the pairs is one thing, but that's not really how you're going to read, let's say a piece of prose, or that's not how you're going to actually be coding. So you want to really see a real example. So I like to combine some of those just different permutations of different possible letters with real examples of -- and really just like have Tobie test it. Have someone test it and see "Does it work when you're coding with it?" What happens? What did I not realize before? Like the period was too small, and test it in a paragraph, a real paragraph, and see how that works.

And there's resources out there too, in terms of proofing texts. People are generous in sharing what they use, and maybe there's a paragraph that covers a lot of different combinations of letters. So if you think about a pangram, that's a sentence that uses each letter of the alphabet once.

**Tobias Fried:** The quick brown fox...

**Helena Zhang:** Yeah, the quick brown fox jumps over the lazy dog. However, those are very elegant. They're not necessarily capturing, again, the real world application of a paragraph.

**Jerod Santo:** Right.

**Helena Zhang:** So I think you have to use kind of a mix of things when you're testing, and really the best tests for anything you're making, I think, is throw it in the hands of a user and see "Yeah, can you use it? What happens? What do you run into? What do you struggle with?" when you're actually living with it.

**Tobias Fried:** Typographers do get pretty serious about their lorem ipsum text though. You'll see a lot of fonts often pull out very interesting sentences and use them a lot because not only do they cover all the letters, they tend to cover a lot of the pairings that Helena was talking about, where you put uncommon letters next to each other, and common ones. You use interesting letter combinations that are less frequent in a given language... And yeah, really kind of like put it through its paces when it comes to the kerning, the density, all those possible combinations and things. Yeah, typographers get serious about lorem ipsum, I think.

**Jerod Santo:** Just following up on Tobie's fact-check, because I double-checked...

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** ZedPlex Mono and ZedPlex Sans.

**Adam Stacoviak:** Reverse fact-check y'all. Here it comes.

**Jerod Santo:** No, he's correct. I'm not going to --

**Tobias Fried:** It's Iosevka. Sorry.

**Jerod Santo:** It's Iosevka. Yup, that's right.

**Adam Stacoviak:** There you go.

**Jerod Santo:** It's a repackaging.

**Tobias Fried:** Yeah, it's a modified, custom build of Iosevka according to the Git repo... Which - yeah, I guess the exact one escaped my head, but...

**Jerod Santo:** There you go.

**Tobias Fried:** But it's an excellent font. It's very condensed. There's a lot of verticality in Iosevka... And I used it -- actually, I used it for a long time on my Linux laptop, my kind of playing around machine, and it's very legible, very dense, so I tend to size up a little bit in that font... But extremely good. Huge coverage, high legibility, and I think very beautiful stylistically. It looks awesome.

**Jerod Santo:** I must've liked it, because I installed Zed... I still have Ubuntu Mono in my terminal, but I just started using it and I never once thought "I've got to get my Ubuntu Mono in here."I just started using what they had, and I didn't even think twice about it till we just asked ourselves the question. So... Iosevka, shout-outs.

**Tobias Fried:** \[00:28:06.06\] Iosevka. Or Yosevka... I don't know how it's pronounced, but...

**Jerod Santo:** I don't either.

**Tobias Fried:** One of the GOATs, for sure. Another one of the GOATs, which I think was a -- I've found it and was also using it on this laptop, and showed it to Helena... We should pull up these bitmaps, but - GNU Unifont is this project started by one man, but really kind of a community initiative to cover every possible glyph, in every language, from Latin characters, to Chinese ideograms, to Korean, to symbols and everything... And I think there's tens of thousands of glyphs. Maybe like 30,000 glyphs or more already in it... But it's a pixel font. It's like a bitmap-inspired pixel font, not unlike Departure Mono, that was used in some Linux builds. I forget. But it's GNU-licensed, and it's just massive, and it's beautiful to look at. If you grab the contact sheet of like all the images, it's like a many, many megabyte PNG file that has every glyph, and it's the coolest thing in the world. And I think that was definitely a bit of an inspo for Departure, if I can speak for you, Helena.

**Helena Zhang:** Yeah, that might be the most comprehensive one I've seen, because it does try to cover all of the possible glyphs in Unicode, which is insane.

**Jerod Santo:** I'm looking at it as you're talking, and it's spectacular.

**Helena Zhang:** Yeah. Let's add it to the show notes maybe, and we can add a link...

**Jerod Santo:** Yeah. And we'll throw it in the chapter, or something.

**Adam Stacoviak:** And I was going to say, because you were talking about how get into the hands of users and then see how it's used with like different letters next to each other etc. And I'm just curious, because it's a pixel font, and I'm sure there's a certain, I would say probably art board you have to work with. And because it's pixel, you probably have limiting factors. So even when you have to make fine-tuned changes, how limiting is it to be a pixel font to make those changes? Because there's only so many places you can move it that would logically make sense based on the design of the typeface.

**Helena Zhang:** Right. That's part of the fun, I think, because it's very constrained. It's very constrained, and then once you decide on what that grid is, you have to stick to it. I mean, if you're going to be pure about it. You can also -- I mean, these days we don't need to have them; they're not bitmap anyway, so you could go into a half pixel if you want, or you can really bend it, and I've seen fonts that bend it a little bit, while still capturing the spirit of a pixel font... But for this project departure, I've stuck a hundred percent to the pixel. And I think that's actually part of the challenge; that's the challenge and that's the fun to like make it work somehow, and accept some of the -- either it goes this way or that way; either this pixel is on or off. That's it.

**Adam Stacoviak:** It's kind of the beauty of the - you're saying the constraint, but it's kind of the beauty of the inevitable result of where the pixel has to land. And it's the ending result of its true landing on the screen, in the ending place it is, if that makes sense at all. The inevitable future of where this pixel lands is the beauty of the thing, is kind of what I'm trying to say.

I'm looking at the site though, and I'm looking at the main header where it says Departure Mono. Can you walk us through these character changes? What are these different characters? Can you talk about -- I see the end kind of dips beneath, and there's some characters that are changing... So for those listening, if you go to DepartureMono.com, you will follow along with this, but... Can you walk me through what these different characters are, and kind of like -- like, there's an A that isn't an A. What is that character that -- and then you have the E that flips backwards, and some other character. Help me understand what those are.

**Helena Zhang:** \[00:32:03.03\] Yeah, all of the letters in there are pulled from the font. And when they're swapping, they're kind of like vaguely in the same shape, of - let's say an E is rotating to a Euro. And I wouldn't think that hard about it, because there's not really a logic to it. It's just kind of this glitchy effect.

**Tobias Fried:** Sorry, I was going to say... If you go down to the -- there's the type specimen thing lower down the site that has not every single glyph, but you can find the glyph that you want. For example, the A that's not an A is a Greek Lambda letter. The R that's not an R is the Indian rupee currency symbol. You could probably find most of them down there, but the idea was just to kind of glitch out the word. There's obviously like a -- it fits the vibe, the retro aesthetic of glitching text, and computer bugs, and stuff... But I think it's purely aesthetic.

**Adam Stacoviak:** For my Silicon Valley fans out there, the reason why I brought that up was because -- are either of you Silicon Valley, the TV show fans?

**Helena Zhang:** Yeah.

**Adam Stacoviak:** Yes. Okay. So then in the title sequence, Facebook swaps to use the Cyrillic alphabet, because for a bit there was their Russian hoax, or not hoax, whatever. Pick your side, I don't care which one you're on. The point is, is the title sequence swapped Facebook out to use the Cyrillic alphabet in some of their characters, and I was like "Well, that kind of reminds me of what you're doing here." And so I wasn't sure if that was also a deep cut, or there was a purpose behind it.

**Helena Zhang:** Now it is...

**Jerod Santo:** Now it is, yeah. So Adam's really reading the tea leaves for some Silicon Valley references in there...

**Tobias Fried:** You know, unintentionally though, we're both big fans of the show, so who knows? It might've seeped in via osmosis.

**Jerod Santo:** There you go.

**Adam Stacoviak:** That'd be kind of cool, if there was a way we can go back in time and get Departure Mono on one of those screens.

**Jerod Santo:** Oh, that would be cool, for sure.

**Adam Stacoviak:** That'd be cool.

**Jerod Santo:** All we need is a time travel device. We've already got the font. Now we need the time travel device.

**Adam Stacoviak:** Yeah. Very cool, though. I love Departure Mono.

**Jerod Santo:** I also get Severance vibes. Is that just me? For some reason, I'm reminded of Severance as well.

**Adam Stacoviak:** Well, it's that --

**Jerod Santo:** I don't know. I'm very intuitive, and I have no facts.

**Tobias Fried:** I know what you're saying. It's maybe there's a depressingly utilitarian, bureaucratic-like...

**Jerod Santo:** Okay. There you go. See, he's \[unintelligible 00:34:23.10\]

**Tobias Fried:** ...computerized. Not that the font is bureaucratic or whatever, but it certainly is utilitarian. There's something about computer interfaces, text-based computer interfaces that reminds us of a time when -- I don't know, when work was like this, and that's all it was, is sitting in front of text all day long, and...

**Jerod Santo:** Right. PC load... There's also like some PC load letter... There's this idea of "Did you get that memo?" Because it is utilitarian, it feels like it's used in a skiff, in a military skiff or something, which is what Severance is; it's like they're down in this basement, and... Yeah. Well said, Tobie. I don't want to malign it though, Helena, by any means, because I love this font. But it sounds like I'm maligning it.

**Helena Zhang:** I'm flattered too that you're referencing Severance. It's such an amazing show.

**Jerod Santo:** I can't wait for the next season. It's coming soon, I think.

**Adam Stacoviak:** I saw the trailer recently, which - when I say I saw it, I saw that it existed...

**Jerod Santo:** I was gonna say, you don't watch trailers, right?

**Adam Stacoviak:** And I didn't actually watch it. I will watch teasers, not trailers. Just so you know.

**Jerod Santo:** I'll watch the trailer if I'm not going to watch the movie, for sure. I'll just watch the two and a half minutes and be like "Meh, I got the gist."

**Adam Stacoviak:** Yeah. That's actually what I do in supplement of actually watching the full length. I'll just watch the trailer, for the ones I definitely would never watch. I don't care.

**Jerod Santo:** Yeah, totally.

**Tobias Fried:** I feel like trailers have become a lot more revealing than they used to be. I think watching the trailer can spoil an entire movie these days. It didn't used to seem like that, but...

**Jerod Santo:** I would agree with you in spirit. However, I recently watched the trailer for Back to the Future Part Three, which was cut in the late eighties, early nineties... And because we're waiting for our kids to actually like get ready to watch the movie, the kids are like "Let's just watch the trailer while we wait." It's literally a synopsis of the entire movie. Beat for beat. It tells you everything that happens in the movie. And I'm like "That's not creative at all, folks. That's just a summary." So maybe you have rose colored glasses there, because at least that one - it just spelled it out. Just like cliffnotes.

**Adam Stacoviak:** \[00:36:18.20\] Going another layer deeper on this Severance deep cut, or potential deep cut... I'm looking at some of the screens of their actual screens, and it looks like they're using not even a monospace font.

**Jerod Santo:** Oh, really?

**Adam Stacoviak:** Yeah. If you easily google "Severance TV show when showing computer screen", and you go to the Images tab in Google, you will find several that show these Severance screens of the TV show, of the actual screen on their computer; you'll find that pretty easily. It looks just like an aerial type font, or just a common sans font. Nothing that's particular. But I do agree, Jerod. I think it wouldn't be surprising if they used a version of this kind of -- this style, you know? But the fact that they didn't kind of surprises me.

**Tobias Fried:** When I look at Departure Mono, the thing that I remember is going to the public library, using the terminals, which were still dumb terminals, like an Amber CRT with a keyboard that connected to some computer in the basement, to look up the library catalog, and find something, and find its Dewey Decimal number, and then go locate it on the shelves. That's what it reminds me of the most. And that very much would have been implemented in one of these bitmap pixel font, monospace pixel fonts at the time. So that's the reference that comes to mind when I look at this.

**Jerod Santo:** Well, before we leave departure -- oh, I missed the opportunity for a great pun right there.

**Helena Zhang:** \[unintelligible 00:37:51.02\]

**Jerod Santo:** Just pure regret...

**Tobias Fried:** Do it again, do it again.

**Jerod Santo:** I don't know, the regret might be better... But let's try it. Before we depart this topic, a couple more things on the website. We know you have other collabs. We want to talk about your icons as well. The game at the bottom - super-rad. I can't remember what this game is. It's like a mixture between Pong and Space Invaders. What was the game called?

**Tobias Fried:** Arkanoid was the original game.

**Helena Zhang:** Yeah, there's a few different versions. I think there's a lot of --

**Tobias Fried:** Breakout's another one.

**Helena Zhang:** Yeah. There's Breakout, Arkanoid... The one I remember is Arkanoid, but there were many versions of this game at the time.

**Jerod Santo:** And this is the game where you are a little platform, and you move left and right, and you stop a ball or whatever it is from going out the bottom, and it goes up and it destroys things up top. And then you also have the super-cool HUD. I don't know. It looks like what Luke Skywalker was looking at before he was told to trust his instincts and use the force.

**Helena Zhang:** Oh, the flight deck.

**Jerod Santo:** Yes.

**Tobias Fried:** We have internal names for all these things. The game, we call it Deparkanoid, because it's Departure Arkanoid...

**Jerod Santo:** Gotcha.

**Tobias Fried:** This HUD thing - yeah, the flight deck.

**Jerod Santo:** So the fight deck is -- these are both remarkable. But I see the score on Deparkanoid, but... Is that the departure part? Or are these other glyphs also from the font, or these are just giving the vibe?

**Tobias Fried:** Yeah, the score in the game, the score is in departure. And if you beat the game, if you've got that far, then there's some "Congratulations, you won."

**Jerod Santo:** Oh, I didn't know you could win.

**Tobias Fried:** "Insert coin" type stuff if you beat it. It's pretty hard, actually. I made the ball move pretty fast, and it's hard to beat, but...

**Jerod Santo:** I'm actually getting close now. Adam, please take over the show for a little while...

**Adam Stacoviak:** I'm sorry, I'm playing this game, so I just can't do it... Okay, so I think you should a hundred percent release this as a real game. It should not just be stuck on the bottom of your website for fun only. I think it'd actually be a great -- if you haven't done this already; maybe I missed that. But it'd be a great hack to raise even more awareness to Departure. Right? Like, if this game existed out there and the score was in it, and it was like an ode to it, it's the perfect example, because you command your own destiny.

**Tobias Fried:** \[00:40:10.20\] Not a bad idea. I think there was another version of this... To answer your first question, these are graphical elements; it's not all completely constructed from the graphical characters in the font. There was a version that I built when Helena was still designing the font, that used mostly the box-drawing characters, and things like that... But there are graphical, purely graphical elements in here, like the paddle and the bricks. But yeah, that's cool to hear. Maybe we will; maybe we'll package it up and...

**Jerod Santo:** I would just like to announce that I have won the game.

**Helena Zhang:** This is just one level.

**Jerod Santo:** Oh, is there more than one level? It says "Right-click for..."

**Helena Zhang:** I was going to say, this is only one level, and it's not actually fully built out, even on this level. So it is a different undertaking to make this a fully-fledged game. But intriguing, for sure.

**Jerod Santo:** You can tell we like Easter eggs a lot, in all the things we make. We like stashing them everywhere. I think the closer you look, the more you'll find. Some of them are totally meaningless, but this one was a lot of fun to make, for sure.

**Jerod Santo:** So I might assign some homework for you, or Easter eggs - you should make this Flight Deck somehow into a game that you can play. Like, inside there, you can like tilt it and move it, and then shoot things, or something. Just an idea. Just a thought. In case you were running out of stuff to work on...

**Adam Stacoviak:** You must not have been listening.

**Jerod Santo:** No, I'm talking about the flight deck, dude. Oh, is that what you were talking about? The flight deck?

**Adam Stacoviak:** Well, you just basically said my idea, but a different application of my idea, but that's okay...

**Jerod Santo:** No, because you were talking about the game at the bottom, weren't you?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I'm talking about a thing that's not a game yet.

**Adam Stacoviak:** I'm just poking you; just poking you, man.

**Tobias Fried:** I mean, both -- yeah, that's a good idea. I mean, if the mouse would control your orientation in 3D space...

**Helena Zhang:** At this point it's not interactive yet, so I think actually it would be really fun to make it interactive.

**Jerod Santo:** It looks interactive, but it's not actually interactive.

**Adam Stacoviak:** I dig it all. I'm just --

**Tobias Fried:** But the way that it's built is like -- some of this is live text. Some of these are like preelements in the code; other parts of this -- it's like kind of a... Helena did this obviously static design in Figma; that was basically how this looked, but it wasn't moving, and I was like "Oh, we could make this a little dynamic." And some of these -- it's like a hand-animated SVG, basically. All these stars that fly past there - yeah, basically they're randomly generated and projected in 3D space, and they move past the camera using some simple matrix math, and stuff... But it's all kind of randomized. So it is sort of built a little bit like a game at the moment, but there's no interaction.

**Jerod Santo:** You're halfway there.

**Tobias Fried:** Yeah.

**Break**: \[00:42:50.13\]

**Jerod Santo:** So this is all in the browser, of course. So in that regard, it's already open source because, because you know, we ship our source to the browser. But is the site itself also open source insofar as maybe like prebuilt, so people can go and look and see how you built the stuff?

**Tobias Fried:** Yeah. We weren't sure we were going to open-source the site early on. We had a discussion about it. We ended up just giving it away, like we do most of our other projects... But yeah, the source is open. It is a client-side SolidJS application, with - like I said - a lot of custom pieces. This flight deck thing you're talking about is like a hand-animated SVG, the game at the bottom... I forget if I just built it with regular JavaScript, or P5... I'd have to go and check. But yeah, it's basically a SolidJS client-side app, and the source is all available on the GitHub.

**Jerod Santo:** Very cool. And it appears that you're giving all this stuff away for free. We haven't even talked about your icon set yet, Phosphor, which has some pretty big logos, as the Valley likes to say... Right? Some pretty big companies using it. That's a term I'm sure you guys are well aware of, which I think is somewhat new, is people talking about their logos, and they're just referring to their clout-faring customers. But you don't have customers, you have people that use your stuff for free, because you're giving it away for free, with Donate buttons. Can we talk about that side of it? This is obviously passion, and art, and creativity-driven things... You guys have jobs and stuff, so... What about the open source side, and if and how you'd like to capture back some of the value that you're giving away to the world? What are your thoughts?

**Helena Zhang:** Yeah, I think you hit on that these are -- both Departure and Phosphor are passion projects, and we do it because we love it. That's the main thing. And I think for me, the most rewarding part is seeing it in the hands of other people, seeing different companies and individuals use it... And that reach to me is much more important than making a few dollars, or -- I don't know, even making... We don't really know how much money we could make if we charge for it

But I think that was not the goal for these projects, and...

Also, another dimension is community, and I think that's something that's really rewarding too, is seeing communities built around these, and working with the community. Let's say recently, for Departure Mono, I worked with a bunch of folks to help build out the Cyrillic alphabet, and add that in... And I needed some people who really use this alphabet, to help test, and to give feedback, what looks wonky... And that's actually another joyful dimension for me, is the community, and that aspect of it.

So it's not about the money... Would we like to have -- let's say we have a lot of companies using our icon library, Phosphor. It would be great if they threw us a few bucks; not required, by any means, but I think if that was more of the culture, I think that would be awesome. How do we get there? I don't know.

**Tobias Fried:** Yeah, there's something that you -- you can ruin a project by monetizing it, and you can ruin your excitement about it, and your motivation to do it, or at least fundamentally change the motivations there. As soon as you start charging for something, then you're beholden to your clients. They're not your users or your community, they're your customers. And that might mean working on a weekend when you'd rather not, that might mean providing value that you'd rather not... And I think for both of us, especially for Helena, but definitely for both of us, we set out to make the best icon library, period. And no compromises there. We wouldn't make changes to support a bigger customer who is asking for an icon that really didn't have general applicability. We wouldn't add anything to the set just because an important client asked for it. We wouldn't sacrifice in, I think, the design principles to add things that we didn't feel belonged there. And then also, like I was saying, we want to keep it fun.

\[00:50:13.21\] So taking the money incentive out of it means we really work on it when we feel like working on it... And historically, that's been like a release every six months or so, six months to nine months, something like that... And a lot of new icons, and combing through the backlog, and the ICON requests, and things like that. But it keeps it fun, it keeps it exciting, and I think it keeps the quality really, really high. There's never any compromise in terms of quality, and stuff.

But yeah, what you said, Helena, is like - if the AllTrails, or the Anthropics, or the Remarkables of the world want to send us a test device, or give us a free membership for life, we're not above accepting those things, for sure.

**Jerod Santo:** In-kind donations, or something like this.

**Tobias Fried:** Yeah.

**Jerod Santo:** Yeah, makes sense. I mean, it sounds like you guys are in a good place with it mentally, and emotionally, with regards to that... Like, throw the Donation button up there and hope for the best, but not actively seeking it on a case by case basis. Doing it for the love of the game is why we a lot of us do what we do. And I don't know - and maybe, Tobie, you can speak to this because you're on maybe the code side as well. These are like static sites that you're building... And I know that icon sets aren't necessarily ever done. And fonts, I guess, eventually, unless you make it to the GNU Unifont Glyph stature, you're probably never done either. But there's perhaps less pressure, because it's not living and breathing and changing underneath people, like software does... And so bug reports -- I'm sure that you guys got bug reports though, don't you? Like, "This doesn't look great on this device" or "This looks weird here."

**Tobias Fried:** Sure.

**Jerod Santo:** That kind of stuff. I'm just backing out of my question as I think more. You probably have all the same problems that a software project has. Is that fair?

**Helena Zhang:** We have all the same problems.

**Tobias Fried:** We do.

**Helena Zhang:** We have a lot. I would say fonts -- fonts feel like they move much more slowly in terms of iteration. And maybe in a lot of cases you can set the font aside and be like "This is done." But for Phosphor, there's always bugs to fix, there's always different use cases further to consider... There's icon requests that we get through our GitHub issues that we'd like to support as much as possible, within the confines of our -- Tobie touched on the principles that we have, and one of them is to not have every single permutation of every single icon possible. That's not the goal. But covering the most common use cases, and maintaining a point of view as well with the set... So not having 20 different versions of a heart. That's not the spirit of Phosphor. There are other icon families that go more in that fluid dimension, and they give you sliders, you can choose the thickness of the stroke, and the corner radius, and you can really manipulate those parameters as much as you want. But we find that can sacrifice the quality of each icon. So we have a more constrained set, but there are certain principles that we stick to.

**Tobias Fried:** Yeah. Also, on the on the subject of like maintenance costs, and everything - there's a maintenance pressure that the ecosystem exerts on us, too. So we have a bunch of different libraries for Vue, and Svelte, and React, and all these things, most of which I'm maintaining myself, but a few of them that I'm less versed in and don't use on a daily basis are supported by the -- like, official-first party, but we give somebody access to the Git repo, people that I trust from community, but...

\[00:53:53.08\] For example, when we started this, Vue 3 was not a thing, and everybody was using Vue 2. And that's all I had ever used, and not very much at that... So when Vue 3 came out and people were switching over, "Oh, this doesn't work" etc. Same thing happened with React 18, and Next.js, and Server Components. Suddenly, everyone's bug reports are coming in like "Oh, I can't use this in my Server Components", and this, that and the other.

So it's not static in that like it's part of a living ecosystem, right? The web is constantly changing, and not just the web, but mobile platforms, all these things. They do exert pressure, and there's a maintenance burden to having so many libraries. And yeah, even even an icon library has bugs from time to time, too.

**Jerod Santo:** It's a shame.

**Tobias Fried:** Yeah.

**Helena Zhang:** Can't escape.

**Adam Stacoviak:** Bugs are everywhere.

**Tobias Fried:** Yeah.

**Adam Stacoviak:** Literally, and literally. Well, again, I will echo the same thought here, as well as with Departure... This website, this display, this showcase makes you want to do something that requires Phosphor.

**Jerod Santo:** It's inspiring, huh?

**Adam Stacoviak:** I just want to do something with it. I think the two of you together, your ability to create the thing, and then display the thing is very good. The synth/small piano; I don't know what to call it. That's cool up there. Something I really appreciate with your display too is your ability to search... But then you have this button that's not clear what it does, but it's a randomizer, and it randomizes the showcase of all the different icons in different colors, and different sizes, so that I don't have to sit there and futz with it to be like "What is the permutations and possibilities of Phosphor?" I can just simply click a button literally again and again and again, and I get the thin version, the thick version, the large version, the colored version, the duo tone... It's really cool. The thought in y'all's work is admirable. Very much so. And it makes it fun to enjoy what you've created.

**Tobias Fried:** Thank you.

**Helena Zhang:** Thank you. That randomizer is all Tobie.

**Tobias Fried:** If you want to play the synth also, by the way, you can go to play.phosphoricons.com, and there's a functioning version of that synthesizer that plays music.

**Adam Stacoviak:** Is that right?

**Tobias Fried:** Yeah. It's not very well done.

**Adam Stacoviak:** Oh yeah, I did see this...

**Tobias Fried:** It's kind of a scratch-built audio synthesizer using the Web Audio APIs... But it works.

**Adam Stacoviak:** That's linked to from Showcase down at the bottom. I found this while digging into it... I couldn't understand though why this Play section zooms in and zooms out whenever I move my mouse around. But...

**Tobias Fried:** You know, the idea was that we would put more widgets and hundreds of these things on here, and that you'd have to be panning around and scrolling to see all of them... But we only ever built these, so -- so you can you can kind of picture it like a Figma canvas that's kind of infinitely panable and zoomable, but there's only a finite number of objects on there.

**Adam Stacoviak:** Still dig it, nonetheless. I just didn't understand.

**Jerod Santo:** Yeah, the Randomize button is great. It's a dice, huh? I guess that makes sense. I'm sure it's one of your own icons...

**Adam Stacoviak:** I guess it is a dice.

**Jerod Santo:** It's a dice, Adam. You know, like, roll the dice, see what happens.

**Adam Stacoviak:** I thought it was like a quality meter, because I've seen a version of an icon that I thought was similar... And you can see it whenever you go into like -- you may or may not have remote desktop, but you might have screen-share on your Mac. In remote desktop you can change the quality of the remote screen you're viewing from black and white to full fidelity... And it seemed like this quality icon. That's what I thought it was. But now that I look at it closer, I do see the dice, or the \[unintelligible 00:57:43.25\]

**Tobias Fried:** Noted. Maybe if it was the three die, rather than the five die; maybe maybe that would --

**Adam Stacoviak:** Or six. Or the six.

**Jerod Santo:** \[00:57:53.27\] You should randomize the number of the dots...

**Tobias Fried:** There you go. It's possible that it did at some point... I feel like it did at some point, but then I couldn't figure out when to actually change it...

**Jerod Santo:** Well, then it feels like you're rolling it, actually.

**Tobias Fried:** Yeah.

**Adam Stacoviak:** Oh...

**Jerod Santo:** And what you could do is if you're not touching it for a while, if you just want more work, is you could just make it like randomly kind of spin itself, so that you can see that it's died... Like "Oh, maybe I should touch that."

**Tobias Fried:** Sure. Itching to be itching to be touched. I got, I got you.

**Jerod Santo:** Yeah, exactly. I'll open up an issue on your GitHub.

**Tobias Fried:** Please do. Please do.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So going a little deeper, I noticed that you used IBM Plex Mono, instead of --

**Jerod Santo:** Oh... Is that because it predates or because you don't actually like your own font? \[laughs\]

**Helena Zhang:** Phosphor does predate Departure Mono by quite -- like four years or so. But I think...

**Tobias Fried:** It's a good reminder. We might have to go and update it.

**Helena Zhang:** Wait, now I'm trying to find where did you catch -- oh, in the kind of pop up thing...

**Tobias Fried:** Yeah. The tags and code samples and things, we are using Plex Mono, for sure.

**Helena Zhang:** I probably wouldn't change that, because there's a reason we don't use Helvetica for everything. What is the fitting font for this site and this project?

**Tobias Fried:** We're all we're doing plenty of dogfooding with Departure Mono already as it is, I think.

**Adam Stacoviak:** I can imagine the subtext beneath each icon being very well done in Departure, because it's such a small size, on screen at least, here. Not that you have to, but just curious why you didn't dogfood your own typeface.

**Tobias Fried:** Mostly because Departure is only a couple of months old, and Phosphor was a pandemic project of ours that's already four and a half years old, almost. Actually, just four years in October?

**Helena Zhang:** We just we just passed four years.

**Tobias Fried:** Yeah, four years in October. That's right.

**Helena Zhang:** It's a fast thing to test, though; to test the font. Easy.

**Jerod Santo:** Yeah. Swap that in, see if it looks good or not.

**Adam Stacoviak:** Are there ways that -- let me ask this question then... If you could make money in some way from Phosphor, would you? Are you opposed to the idea of making money from it?

**Helena Zhang:** Well, we gladly accept donations... I think the thing we are wary of doing, that Tobie touched on, is leading with that as the primary goal, and making that really drive our decisions. I think that's not the territory we want to be in, but we do -- yeah, when a donation comes in, especially when it comes with a note, and a little bit of color on somebody really enjoying it, I think that goes a long way, and we would love to... Of course, we would love to get more of that.

**Tobias Fried:** Yeah, I think it's not that we don't like money, it's that the strings attached to selling something versus just making it out of passion, which is what we do right now... We have day jobs and things that keep us busy... I think Phosphor at this point is a lifetime project. We're never going to put this thing down, but we like to be able to pick it up every six months, every nine months when the moment strikes, and not because we have to and because we're beholden to people to do it.

We have this joke that the next project we make, we'll charge money for. We have this running joke. And when we made Phosphor, we said "This one we'll give away for free." And to be fair, we didn't imagine that we'd have hundreds of thousands of weekly downloads, and it would be used in Fortune 100 companies, and on the PayPal app, and stuff like that. We never imagined. So we couldn't have planned for this. And I'd like to think that even if we knew what type of reception we would have got, we still would have given it away for free. But I think this time, for real, the next thing we make, we're going to charge money for.

**Helena Zhang:** We'll see.

**Jerod Santo:** \[01:01:58.15\] Have you seen the Font Awesome folks, and what they're up to? It's pretty interesting, right?

**Helena Zhang:** Yeah. I'm friends with some of the folks there. Noah and Jory, amazing designers.

**Tobias Fried:** What's up, guys?

**Helena Zhang:** Hi!

**Jerod Santo:** So their model is interesting. They've had some success with it, and maybe even a lot of success at this point... I think their recent -- was it a Kickstarter? I don't know what kind of crowdfunding campaign it was, but they've had a lot of success with that. They're hiring, they brought on some people from the Eleventy community, and other places...

**Tobias Fried:** That's for their Web Awesome project, right?

**Jerod Santo:** Yeah. Web Awesome, Font Awesome... Their new thing is Web Awesome, which is Components, so it's going beyond... But that's kind of the idea with Font Awesome. It's like free, and then go beyond, and like all these extra stuff... Kind of the stuff that you're doing, Tobie, with your integrations, with different libraries and stuff, but they're going full on like building components you can use on top of -- I'm assuming it's on top of Font Awesome. Maybe it's just an addition to... I don't know if their fonts are actually in there or not, but certainly you could layer on top of your free stuff with some products that are nice to haves, but not necessary.

**Tobias Fried:** Like a freemium model, you think... My understanding of Web Awesome is it's a Web Components-based, comprehensive UI component library. So they're like draggable, droppable into any framework that you're building a web application in, because they're Web Components-based. They don't really care where you use them. They're self-contained. I imagine that, where relevant, they use Font Awesome icons in them. Probably the Caret in the dropdown select element is probably a Font Awesome down Chevron, or Caret, or whatever. But yeah, the freemium model, I just don't -- it didn't seem right for Phosphor, because... Well, number one, I think we made a decision early on, especially because we open-sourced everything, that... We'd already given stuff away, and started to take things back. Not that we would, but... Yeah, I don't know. I think just ideologically it feels good to work really hard and give something away and not be beholden to anyone. But maybe the next thing we do will be a freemium model.

**Adam Stacoviak:** Maybe the next thing...

**Jerod Santo:** It's gotta be. It's going to be profit.

**Helena Zhang:** Got to start charging at some point.

**Tobias Fried:** Yeah. I told Helena that her next font, she's got to charge money for it, because that's where the big bucks are made.

**Jerod Santo:** I mean, people are still developing new fonts and selling them today, aren't they?

**Helena Zhang:** Oh, yeah.

**Adam Stacoviak:** Every day, yeah. Every day.

**Jerod Santo:** But there's also a whole bunch of open free ones.

**Tobias Fried:** Yeah. I just bought one. I bought one a couple of months ago. Berkeley Mono, what formerly was called the Berkeley Graphics Company, and I think it's now called the US Graphics Company... They have a really good monospace font called Berkeley Mono, which until Helena made Departure Mono, I was using it in my terminal and IDE. But I hadn't paid for a font in like 10 years, and I saw that one, I was like "Sure, here's my 75 bucks." It's worth it.

**Jerod Santo:** We bought some fonts. Didn't we, Adam?

**Adam Stacoviak:** The fonts that we have bought are slim, but some. Sana Sans is something we use. We bought URW Geometric, but we never used it. And the monospace font we chose was always available as a free and open source font. So the only one we ever had to buy, I believe, was Sana Sans and one other one I can't recall right now, but it was pretty cool. Just so you know.

**Jerod Santo:** It was pretty cool.

**Adam Stacoviak:** Just so you know.

**Tobias Fried:** "Trust me."

**Jerod Santo:** "Just so you know..." \[laughs\[

**Adam Stacoviak:** I think it was actually DIN...

**Jerod Santo:** We don't buy not-cool fonts...

**Adam Stacoviak:** DIN 2014 maybe, now that I think about it... Something like DIN...

**Jerod Santo:** Oh, DIN Nero. I know we had DIN Nero going.

**Adam Stacoviak:** DIN Nero, yeah... It was like a -- yeah, I'll have to look it up and put it in the show notes, but... We've bought a few over the years. I mean, I've bought fonts throughout my history as a designer...

**Tobias Fried:** Did you use to be a designer, Adam? Are you still a designer, Adam?

**Adam Stacoviak:** \[01:05:55.13\] I mean, I guess it depends how you would classify me. Can I make things look pretty? Do I do it as a day job? If you combine those two, the answer is no. But if you single them out, the answer is yes. Yeah, I'm a designer. I have a design background, a design eye. I know what looks good. I can make things look good. There's a limitation to my ability, but I'm always trying, I'm always persevering through the white page of death... Yeah, I'm a designer. I am designer...

**Jerod Santo:** That was a fun imposter syndrome check right there. It's like "Am I going to say yes to this, or no?" \[laughs\]

**Adam Stacoviak:** Well, I mean, I want to do something with Departure Mono so badly, you know? That's why I asked you about the logo typeface, if anybody's using something like that; it'd be kind of cool for Changelog when we revisit some different brand stuff, if ever...

**Jerod Santo:** It's so cool.

**Tobias Fried:** Oh, please do. That would be awesome.

**Adam Stacoviak:** I think it's really cool.

**Jerod Santo:** Yeah, it's so cool.

**Adam Stacoviak:** The working version we have is actually a lowercased version of Changelog in JetBrains Mono, with a couple alterations to make it ours. And so I like that, but I then also like the all-caps version of Departure Mono. It's very cool.

You know, it's one thing to talk about money, and it's another thing to talk about just this idea to connect to your thing and give it away for free. It's just another to be free to do it all. That's what you guys are doing, and that's cool.

I mean, we asked you the money question, which is like the required question... Like, "If you could, would you?" I respect your answer though, because in both cases, you could do what you want. You don't have to make change because somebody said "Well, I paid you." So... Change.

**Tobias Fried:** It's true.

**Helena Zhang:** That's true. I think you feel -- I mean, even giving it away for free, I think we feel a level of responsibility towards our community, and we want to do right by them, and we want to... If there's something missing, we want to support that. I think even more so with a business and paid customers, I would really feel much more responsibility to deliver.

**Break**: \[01:08:04.23\]

**Adam Stacoviak:** The question, I think - has there been any intangible monetary value added to your proverbial bank account between the two of you, or individually, as a result? Because if you've got these, as Jerod said before, logos, and different brands... I'm familiar with AllTrails, because I'm a mountain biker... I also walk a few trails, but I mainly know AllTrails through mountain biking, because they map the trails, and you need that as a mountain biker. Where can I go? Where can I ride? etc. But I'm curious, have you gotten any side gigs, or has anything else happened as a result of your notoriety of being the Phosphor makers, and the very cool websites, and the ability to showcase -- it's one thing to make the product, like I said before, but you do a great job of showcasing it. You have \[unintelligible 01:11:40.00\] that I love that, that come after my personal nerd heart... I'm just curious if there's been anything else you've gotten involved in as a result of being the creator of both of these things.

**Tobias Fried:** Well, I've got a full-time job out of Phosphor icons. That's one.

**Jerod Santo:** That's pretty good, right? My last company that I worked at, Qatalog - it's a knowledge management platform, so... Probably if you want to think like Notion meets JIRA, project and knowledge management together, married together with some special AI glue... Actually, the way I got the job was the CEO reached out to us and he's like "Hey, we're using Phosphor. I want to donate, but you only have a PayPal link, and I can't PayPal you with a UK number. I need an American number. So can I pay you guys that?" And that opened the conversation.

**Jerod Santo:** Awesome.

**Tobias Fried:** Yeah. I mean, these days we have other ways to pay, and Buy Me a Coffee, and Patreon, and things like that. But that was the start of a conversation that ended up in me working there, and getting to work on an app that was using Phosphor everywhere, all over the UI.

**Adam Stacoviak:** Very cool.

**Tobias Fried:** And Helena, you've definitely got some --

**Helena Zhang:** Yeah, for sure. I think Phosphor is a pretty popular family, at this point, and I think having done this project together gives us a platform to start charging for our next project. The more we do these kinds of things like Phosphor and Departure, the more people can get a sense of who we are, and what kind of things we build, and build trust in the things that we make. So yeah. And it's brought a lot of praise and recognition in the industry. That can lead to a lot of things. Yeah.

**Tobias Fried:** You've definitely been approached by some corporations, companies, brands to do icon design work for them, that's for sure. Some contract-based stuff.

**Jerod Santo:** Is that the kind of stuff that you take on, or do you say "No, thanks", or what's your stance on that kind of stuff?

**Helena Zhang:** It depends on -- I'm quite open to doing those projects. It'll depend on the company. So far, since I was pretty wrapped up in my full-time job previously, I didn't really have the capacity to do it. I think at this point I'm on a career break that I can actually accept more of those projects. So definitely open to them.

**Adam Stacoviak:** It'd be kind of cool to get hired to do a full-on icon family, or even a font family... Typeface is what they're really called, but... I'll just call it a font family, to keep it symmetric there.

**Tobias Fried:** CSS terminology, right?

**Adam Stacoviak:** Yeah, exactly. Pick your medium to define the lexicon. It'd be kind of cool to do that as a gig, where all you do - and I don't want to say 'all you do' as like a pejorative, but like all you do is like go from opportunity to opportunity to just create custom icon families or typefaces for folks... And not only do you do that, but then you also build out sites like this to showcase it to their internals. I'm sure somebody did that for JetBrains. The JetBrains Mono website is just phenomenal. It's beautiful. Somebody got paid to do that. It may have been an internal employee... I don't know the full details. It'd actually be kind of cool to dig behind the scenes on that, but somebody got paid to execute on that. And it could have been a third party that was contracted, which could have been y'all, or it could have been an internal employee, who just had passion and led the project and the product... But that'd be cool. I would dig that if I were y'all.

**Helena Zhang:** Yeah. I mean, the icon community is pretty small, so I know a lot of people who do do that as their gig as they freelance for different companies and build out their icon systems, and for fonts. IBM Plex comes to mind again, because I think that was started internally... They may be partnered with different third parties, but... That was a super-cool project to see, and have them -- it's also an open source project, and it comes with a very beautiful presentation.

\[01:15:58.11\] We're talking about these mini sites for fonts, or these specimen sites... That's one, probably -- yeah, as I was working on the Departure Mono specimen site, one of the many influences in terms of like standout type specimen sites; I would look at IBM Plex, if you haven't already.

**Adam Stacoviak:** Yeah. I'm just imagining Airbnb in crisis mode. They've got a new interface they're working on, and they're like "Oh my gosh, our icon family is in the tank. Call the carver..."

**Jerod Santo:** "This is a mess! Get Helena here."

**Adam Stacoviak:** Helena and Tobie should get that joke. And the audience should, too. Jerod, you should not, but that's a...

**Jerod Santo:** \[unintelligible 01:16:40.10\]

**Adam Stacoviak:** ...deep cut to Silicon Valley.

**Jerod Santo:** I was hoping you were going to go to the cleaner, of Pulp Fiction, which is --

**Adam Stacoviak:** That'd be cool, too.

**Jerod Santo:** ...where my mind went.

**Adam Stacoviak:** That'd be cool.

**Jerod Santo:** That'd be cool. Call it a cleaner. Well, you've got a mess...

**Tobias Fried:** The fixer. We're the icon fixers, is what we are...

**Adam Stacoviak:** We need somebody to fix this icon family \[unintelligible 01:16:55.27\]

**Tobias Fried:** The Wolf. Bring in the Wolf.

**Jerod Santo:** There you go. The Wolf. Yeah, yeah.

**Adam Stacoviak:** Oh, that'd be good, yeah. The Wolf. He was so calm. You know, that situation.

**Jerod Santo:** Well, of course he is. He's the Wolf.

**Adam Stacoviak:** That's the Wolf, right?

**Jerod Santo:** It's what he does.

**Adam Stacoviak:** Yeah.

**Tobias Fried:** There's definitely a dream that we could kind of do these full creative control projects, end to end design, ideation, execution type of things, and make a living off of it, for sure. It's something we've talked about for a while.

**Adam Stacoviak:** The only challenge with client work is the client. I mean, no matter what; they could be the best client ever. They can even pay you very well. They can pay you beyond your wildest dreams. They can open the kingdom and give you all the keys. But there's still opinions that are adjacent, if not totally against yours. And that's where it's really, really challenging... Because you have your own dreams as an artist, as someone who creates and is a craftsperson, and you want to deliver, and then the opinion of the client is like "Nah... Let's just make this like this." And you're like "No, that's a corner. I'm not cutting that." \[unintelligible 01:18:10.16\]

**Jerod Santo:** And they say things like I said earlier, "I don't know why it reminds me of this, but it just does... You're going to have to change it.." And you're like "Ah, I spent seven hours on that..."

**Adam Stacoviak:** But then sometimes the beauty too is like coming to compromise with the client...

**Jerod Santo:** Oh, sure.

**Adam Stacoviak:** Because they can't do it... So it really depends on your perspective. That's perspective-taking. You can take the version one of that world, which was what I just said... And the version two could be, or an alternate perspective could be "You know what? It's about compromise, and it's about helping them get to where they're trying to go, with my abilities and dreams, but based on what they asked me to compromise for." As long as it's not like compromising your true artistic nature, then it's pretty easy to swallow that pill. And y'all are creative in that way to the degree not many people can be... So part of your duty, almost your calling in life is to execute on this skill, because no one else can.

**Tobias Fried:** I appreciate the vote of confidence.

**Helena Zhang:** Yeah, thank you.

**Tobias Fried:** That's good to hear.

**Helena Zhang:** Yeah. If you're looking for client work for your creative fulfillment, I don't think you'll get there... That's a really different thing. And you're working towards their business goals there, so... I think it's just a different beast, and if you're trying to fulfill some sort of artistic drive, then that's where you do your side projects, and what have you. But yeah, it is a -- I mean, if there's a world where we can make those side projects fuel... Or if we could feel those side projects and support them financially, that would be a dream. If anyone wants to give us a grant just to go off and do stuff, make stuff...

**Jerod Santo:** There you go.

**Adam Stacoviak:** \[01:19:52.26\] I'll tell you, the easy way to do this might be to unify these two things. I didn't pay attention to this yet, but somewhere in the footer, or somewhere in here where you come together - not as Tobie and Helena, but as a unified brand, and you offer it as a product, offer it as a service. You come together and say "A good next step is to hire us to do this for you."

**Jerod Santo:** Bam. Because you guys have all the bases covered.

**Adam Stacoviak:** And the eyeballs.

**Jerod Santo:** There's no gap in your flow. Is there? Where's the gap in your flow, Helena?

**Helena Zhang:** I think we complement each other's gaps, so...

**Jerod Santo:** Yeah, exactly. These powers combined.

**Tobias Fried:** I'm hesitant whether to say what I'm about to say, because we've been joking about this for years, too... But I think if we were going to start a company, we already have the name, we already kind of have the logo, we know what it's going to be.

**Jerod Santo:** Oh, my goodness.

**Tobias Fried:** I'm not going to jinx it.

**Jerod Santo:** Let's not, she says -- consider this just a gentle nudge, you know?

**Adam Stacoviak:** We'll do it in post-show.

**Jerod Santo:** You don't have to say anything. Yeah, you can do it afterwards.

**Helena Zhang:** The idea, yes. The exact name and logo, we don't have.

**Tobias Fried:** She doesn't like it.

**Tobias Fried:** Yeah, I can tell.

**Adam Stacoviak:** Clearly.

**Jerod Santo:** Hold back the reins \[unintelligible 01:21:05.02\]

**Adam Stacoviak:** He's like "Maybe", she's like "No way."

**Tobias Fried:** Yeah.

**Helena Zhang:** That would have been a strategy though; if you just said it out loud, then we would just have to do it.

**Tobias Fried:** It's out in the world already. You can't take it back.

**Adam Stacoviak:** Well...

**Jerod Santo:** Well, we already told her that we're willing to edit if she absolutely wants us to, so... This is not live to the world.

**Adam Stacoviak:** I would encourage you to do that, though. If you leave this podcast and you have a retrospective, and part of that dream is somewhat a version of reality you want, that's a good next step. I mean, it's an obvious; it's not a great idea from Jerod or I alone... But the best way to get things in life is just to ask for them, you know? So many people don't ask for the business, don't ask for the opportunity, don't ask for the thing, whatever it might be, the opportunity... And because you don't ask, you don't get. And if you put it out there, and you put a -- here's a lesson I learned a long time ago. It's actually from -- I'll have to figure out the name, but it was a book called Booked Solid. And the idea is called "the velvet rope". And essentially, treat your business, treat your door, the front door to your business, whatever that is, as a velvet rope. And the only people that can get past it is the people that you actually want to work with. Hold it in such high regard that to be across or through that threshold, that velvet rope, is a privilege, to be accepted by you all, and to be invited in. And for those who can't honor that invitation - bye. Get out of here. And not mean, but just more like "You don't belong here. I'm sorry. You're not my client. You're not who I want to do work for." And I think if you guys approach that next step with a version of that, then you'll be some version of happy.

**Tobias Fried:** Well, thanks for that. I wasn't expecting some business advice and entrepreneurship, but - I mean, it's cool to hear. And yeah, maybe someday soon we'll be in the mindset.

**Helena Zhang:** Yeah. We've been nudged into that direction by a lot of people, and I think also it just feels like the universe is telling us "Do more of this stuff. Do more of these projects together." Maybe even - I don't know, does the side project turn into a main project...? We've been thinking about it, for sure.

**Adam Stacoviak:** Here's one more idea for you. And this one's more easily executable. And you might even enjoy it tremendously. I would love, if I was a fan, which I am, a fan of Departure Mono and Phosphor - I would love some very cool, I would love some really cool posters, or things I can actually have in my IRL, in my studio, in my office or whatever, that represents my typeface of choice in my editor. Like, these things you've created on your website - just turn them into posters, and sell them, and you will make money.

**Tobias Fried:** Swag. Yeah.

**Adam Stacoviak:** \[01:24:00.03\] I mean, it's swag, but I think if you do it well, it could be -- do you remember back when Facebook had that labs project? I can't recall the name of it, but they had these posters, and they're famous because it said "Move fast and break things", and all these different things. These posters was part of this screen printing side gig, I suppose, whatever, in their labs. Facebook Design Labs, or whatever. And they spread these ideas. The idea was good alone, but then people had them as posters, and they were cool, and they were screen-printed on T-shirts, and stuff. It's taking that kind of ideas; these are really cool pieces of art, but they're isolated to your website. And you can't charge money for them. So if you created a thing, you might make some money from those things, and put more cool art in the world.

**Tobias Fried:** I mean, I'd buy a Departure Mono key cap set. I know that.

**Adam Stacoviak:** For sure.

**Jerod Santo:** Yes.

**Adam Stacoviak:** Yes. Now you're thinking.

**Jerod Santo:** Let the ideas flow.

**Adam Stacoviak:** A collab.

**Helena Zhang:** Hold us to that. Hold us to that, because we've been wanting to make some swag.

**Jerod Santo:** If you make it, I will buy some. I'll say that.

**Tobias Fried:** Yeah.

**Jerod Santo:** Anything else, Adam? Anything else, guys, that we want to...?

**Tobias Fried:** I wanted to talk about -- I mean, when you ask "Do you have any ideas of where to steer the conversation?" I wanted to bring up like open source compensation, and an alternative to the business model you're discussing, where we go into client work, or operate as a two-person agency, or contract to contract... I think there's some alternatives on the horizon that might allow people like us in the near future to operate in full creative control, get some compensation and make it worth their while, but not have to run your operation as an explicit business. There's a lot of movement lately that I've seen from individuals and from companies to compensate open source projects better.

In terms of individuals, there's people out there like Anthony Fu, who if you do any web work, you've probably seen his name, and on Twitter, on GitHub... But he's very involved in like the Vite bundler, and Vue ecosystem, and a whole bunch of things. He's got his fingers in a lot of pies, but he's very vocal about contributing and giving back to the kind of corner, linchpin open source projects that like keep the world running. And he's aware of the fact that he's a very visible public figure, but as part of his responsibility is that he actually distributes some of the money that he receives via donations and public support and GitHub sponsors to projects that he knows are deserving of it.

And he sponsors us, or he sponsored me or something like that, among many, many other people, because he uses Phosphor icons in something. So there's talking about it more, but there's also products that are supposed to help with this... There's one called Tea, which is -- I don't know too much about it, but I know it's basically a... It's a blockchain-based thing, which - set that fact aside, but the whole idea is coming up with a quantitative measure of how critical and how important libraries are.

For example, there might be like a -- somebody is thanklessly maintaining this compression library, which is used in every single piece of infrastructure software around the world. And they live in Boise, Idaho...

**Adam Stacoviak:** Pied Piper

**Tobias Fried:** Exactly. They live in Montana and they're every day working on bugs, they're a solo dev, they run the Git library, the Git repository... Nobody pays them a thing because it's nested inside layers and layers of other tools, and they never get the kind of support and recognition. And if they quit what they're doing, industries would scramble to replace this tool, but nobody even knows they're doing what they're doing, because there's no visibility into things like this.

\[01:28:08.26\] Now, Phosphor as a library tends to be pretty direct. End users install Phosphor, and then build their app with it. They know we exist. It's not critical infrastructure, but I think we're doing a good service. But this guy in Montana or whatever - people may not even know that they depend on software that he writes, and thanklessly maintains.

So this tool Tea, the idea was to kind of use some form of objective measure of the importance, the utility, the criticality of different libraries, and plugging into Npm and Brew and other package repositories and weighting things like GitHub stars, and Npm downloads and things like that to kind of make it easier to give credit where credit is due, financially, monetarily. So I'm excited to see where things like that go, so that people can continue to do the things they're passionate about, and not have to run a business, but still receive the credit that's due.

**Jerod Santo:** Yeah. I'm in full support of every effort to accomplish that as well. I think Tea is interesting. The proof will be in the pudding with that one. I think they launch officially in January, or end of the year or something, and we're all waiting to see if it works. And I hope it does. And I see that there are efforts of trying to accomplish that. I think, like you said, with Phosphor and with Departure, you're definitely a direct relationship to your users, and so that one's a little bit easier, because they go and download your icons, and they think "I love these icons. I love these people. I'm going to give them 10 bucks." But not everybody has that relationship. Some people have an even better relationship, like your web framework, for instance, where it's like "I could not possibly do what I'd do without this thing." Whereas icons, as crucial as they are, they are interchangeable, and you have easier switching costs, and you could probably go without, or whatever. But with like your web framework, or your programming language, or - these certain things are just crucial.

And so they have a very easy way of - it's not even easy; easier than many of us way of getting their projects and their passion supported by others. But the people who are the dependency of the dependency of the dependency are the ones that are just completely invisible. And nobody ever gives any credit, or crypto, to the invisible ones, you know? So I'm with you. I think it's cool, I hope it works, and I hope other ideas are also in the works to help get more money to people who are bringing value in big ways.

That being said, they are open-sourcing their work, and they are giving it as a gift to the world, just like you all are. And so that's a choice they're making as well. So I don't think they have the right to demand money, but certainly, if we can get them some and get more of that goodness going out, everybody wins.

**Tobias Fried:** Yeah. And it probably comes in a lot of forms, too. I know you guys had Polar, the creator of the Polar open source compensation scheme... I don't know what you call it, but the platform for...

**Jerod Santo:** Yeah, it's a platform for monetizing your software.

**Tobias Fried:** Yeah. And they've got cool ideas, like bug bounties; monetizing individual features and feature requests and bug bounties, and things like that. So maybe it's like the gig economy, where it doesn't come from one source, but you can kind of cobble it together from some sort of quantitative assessment of the importance and utility of the library through something like Tea. Some of the more qualitative or driven by specific individual interests that Polar could provide. Things like that.

**Jerod Santo:** I don't think there's going to be one way to slice it because of the diversity in the types of projects that are out there. We've seen lots of models, and certain ones fit certain projects and don't fit other ones... And so I think we're going to have a diversity of solutions, and not just like one thing that works. Everybody thought when GitHub released Sponsors, that was the --

**Adam Stacoviak:** \[01:32:20.08\] The end.

**Jerod Santo:** That was it. We had arrived. And that proved out to be a useful way that you can do certain things, and you can't do other things. And so yeah, multiple solutions will definitely have to be the case. Speaking of that, you guys have both Patreon, and... Buy Me a Coffee? Is that what it is, Buy Me a Coffee?

**Helena Zhang:** Yes.

**Jerod Santo:** Why two? And how do they compare, and how well are they doing?

**Tobias Fried:** Well, Buy Me a Coffee is -- since we've enabled that, I think that has been far and away the most successful source of donations. The main reason is because one-off payments and support is really easy. I think it's connected to more payment platforms, and you could plug in with Venmo, or PayPal, or whatever you want... And you can pay in a one-off manner. Not everybody wants to make the commitment to sponsoring Phosphor icons every month, or becoming a Patreon and adding that into the black hole of other subscriptions that they just forget about, and then those bills just rack up.

So Buy Me a Coffee has been very successful for us compared to the other things... And I don't think Buy Me a Coffee always had the option for recurring subscription fees. Maybe I just wasn't familiar with it, but... At least I do know that the one off payments seems to be something that people want to do. They can get their company to sign off on a hundred dollar donation because they're using Phosphor, or they're using it in their own small business and they want to just give a thanks and 20 bucks, but not become a monthly supporter... Yeah, Buy Me a Coffee has been been good to us, I think.

**Helena Zhang:** Yeah. I think feature-wise, a lot of these platforms offer a lot; they often offer both one-time donations and a subscription model... And I think different tools just have different -- they've developed different audiences or ways they're used. Patreon -- I don't know, maybe I need to stream some more content, if it's to get more Patreon subscribers. I think the mental model, even in the names of these products... If it's called Buy Me a Coffee, you're more in that one-time "Yeah, throw five dollars over" mindset.

So for at least the projects we've worked on, that seems to be the one that people gravitate towards, and less so -- I think we might have had one or two Patreon subscribers over time. Correct me if I'm wrong, Tobie, but...

**Tobias Fried:** More than two, but a handful.

**Helena Zhang:** Yeah, maybe a handful; only a handful of recurring subscribers. And - I mean, I'm sure you can do one off payments with Patreon as well, but based on their brand, and the name, it's more about like being a patron, so that's a recurring thing.

**Jerod Santo:** Right. I've never actually used Buy Me a Coffee. I was surprised to even see a $10 per month option there. I assumed it was one off donations. And so again, just that framing of what they are... Having not used it, I assumed it was like you're buying the person a coffee, five bucks, ten bucks, whatever you want to do, and you're done. I was surprised when I did click through to even see that. And that's just the way these platforms, like you said, position themselves.

**Tobias Fried:** Yeah. They're converging ultimately in what they offer... But yeah, they still exist in people's minds as a certain thing.

And it is true that - yeah, there wasn't always a one off payment thing in Patreon. It was only subscriptions. And there wasn't always a subscriptions thing in Buy Me a Coffee. It was only one-time payment.

Anyway, the point is to say we're not generating a lot of income there. It feels good. It still feels really good to see the feedback, the direct feedback, and to feel the love... But it's not paying any bills at the moment.

**Jerod Santo:** \[01:36:15.18\] Are there any iconographers who are Twitch streaming or Patreon streaming? Will they watch you move the kerning around, and...?

**Helena Zhang:** That's a good question. There's none that I know of, but...

**Jerod Santo:** Untapped market.

**Tobias Fried:** I've told you this before. I said Helena should stream. I've dabbled around myself in like live streaming, just coding random things, but...

**Jerod Santo:** A lot more competition in that market than there is in the iconography market.

**Tobias Fried:** I've found it's just fun to do. If you can get one or two people to join in and look over your shoulder and offer some ideas, I find that fun. But even just consume it... You're right, though... I've never seen a typographer, icon designer... There's very little design work outside of games and stuff that's going on on the streaming platform, so...

**Helena Zhang:** I might just not know about them, but yeah, it feels untapped. It is a particular skill to be able to do the thing and voiceover while you're doing it... I find that pretty impressive when people are doing it.

**Adam Stacoviak:** It is.

**Jerod Santo:** It's funny you say that, because I did stream for a while, way back when streaming on Twitch your coding was just kind of taking off... And every Monday afternoon for a while - Adam, you remember that - I would stream my coding. And I got some viewers because we already have people in our Slack, and stuff. So I probably got 10, 20 people watching me code... And I had a hard time thinking deeply, because I felt like I had to explain everything I was doing. And so while I enjoyed it and they seemed to enjoy it and we had some laughs, I would get nothing accomplished compared to how I would be by myself, where I can just sit there and stare at the wall, and not feel pressure to like do or say.

So I had a hard time thinking straight in that way. Massive respect to anybody who can actually accomplish progress in their software while they're streaming and conversing with people, and stuff. It's a particular skill in and of itself, I think.

**Tobias Fried:** It sure is. I think I got used to it. I started talking to myself when I was coding, even not on stream, or anything.

**Jerod Santo:** Okay... You always did. Alright... I just walk around the room. I just kind of pace and do nothing else.

**Adam Stacoviak:** Jerod, this is why you think the way you think...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** You know, one thing I would watch - and if not watch live, I would certainly watch produced, which... I can explain that if you'd like. It's watch me build this embedded game for my website. Right? Like this ping pong -- what'd you call this? There was a name for it. What was the name for it?

**Tobias Fried:** Deparkanoid is what we call it.

**Adam Stacoviak:** Deparkanoid. Yeah, I would probably call it Departurenoid, but that's okay; because Departure.... But Deparkanoid is cool with me. I would watch you -- like, I would want to see the behind the scenes of that. Whether it's live, or whether it's produced. And what I mean by that is you can do the live version of it with enough multi-angle and enough capture during the live production, to then also create an edited version for YouTube.

People think Twitch, live, unedited, real time, all the details... And then YouTube, you think "Well, something that's a bit more polished and a bit more bookended from front to back." I would watch that. That'd be kind of cool.

**Tobias Fried:** It's a lot of work. I know that these days almost every job is the job and being a content creator about the job, too. You have to be able to market yourself, whether it's TikTok, or Twitch, or... You have to do what you're doing and then show it to the world, too. That part's always been hard for me. Live streaming is one thing. Produce video content is another. I don't know if either of us are interested in that aspect as much as others are, but...

**Jerod Santo:** \[01:40:03.16\] Well, when I mean produce, I just mean just slightly edited, so that it's consumable, not just this live version that's like ums and ahs, and answering the chat... Something that kind of cuts it down to three minutes versus a 50-minute stream. The highlights.

**Helena Zhang:** Yeah. I will say, the tools are getting much better, so... That helps.

**Jerod Santo:** I was just gonna say, we've found a gap, Adam. We've found a gap that they have here.

**Tobias Fried:** I'm ready for AI to edit out all of my ums and likes. I'm happy to use that tool when it exists, for sure. Jinx.

**Adam Stacoviak:** And it might add some back for you. Like "Well, he was missing some likes, and I added two in there..."

**Helena Zhang:** Yeah, gotta make it feel real, right?

**Adam Stacoviak:** Well, they're already generating podcasts...

**Tobias Fried:** True.

**Adam Stacoviak:** Like, what is that?

**Tobias Fried:** Do you have competition from generated, full audio podcasts?

**Jerod Santo:** Not yet.

**Adam Stacoviak:** We're actually not here right now. This is not really Jerod and Adam. Okay? This is our surrogates...

**Jerod Santo:** Didn't you read your system prompt? You're not supposed to say that part, Adam.

**Adam Stacoviak:** Oh, sorry about that. My teleprompter broke on me.

**Jerod Santo:** We told you to forget all previous commands and then just asked you that question...

**Adam Stacoviak:** Oh, it's true. Yeah.

**Jerod Santo:** So there are some things getting -- there is a new phenomenon which is happening in open source, wherein a creator will release a piece of software, and they will accompany that with docs, demos, and now a podcast.

**Adam Stacoviak:** What?

**Jerod Santo:** And it's not really a podcast, because it's just an audio file... But they'll put a podcast on the website, generated by Notebook LLM, which is Google's "Give me some text and I'll generate a podcast about it." And it's two people talking about your project, basically walking you through what it is, why it's interesting, but they're doing it conversationally, like podcasters... And it's super-duper creepy, because they're not real people, but they act like they are. They're like "Hey, I just got back from lunch." It's like "No, you didn't. You are a computer-generated piece of audio."

**Tobias Fried:** That's bizarre.

**Jerod Santo:** It's really weird, but eventually, if you didn't know any better, then you might think they're real people and you wouldn't be creeped out.

**Adam Stacoviak:** Wow.

**Jerod Santo:** So we may get there, where we're just getting severanced...

**Adam Stacoviak:** What was it, the headline earlier, Jerod, we were just talking about, that is on Friends this week? It was "The internet's dead"? What was it?

**Jerod Santo:** Oh, Dead Internet Theory.

**Adam Stacoviak:** Yeah, Dead Internet Theory.

**Jerod Santo:** Let's not go there.

**Tobias Fried:** Like how an increasing fraction of the stuff that's happening is produced by bots, for bots?

**Jerod Santo:** Yes. And the full-on conspiracy mode is like buy governments on purpose in order to - whatever, whatever.

**Adam Stacoviak:** Yeah, there's layers to that though, I think. I mean, I think that's an example of dead internet. That is not real.

**Jerod Santo:** No, it isn't. It's two computers talking about a project.

**Adam Stacoviak:** The developer chose to do it, but at the same time, we chose to potentially consume it, at least once, or at least push play and be like "That's weird. That's not real."

**Jerod Santo:** I only got 30 seconds in and I just peaced out on that thing. I'm like "You did not just get back from lunch." I just know better.

**Tobias Fried:** I don't believe it. The other thing is that Cory -- maybe it's Cory Doctorow's idea. I don't know if it's originally his, but he talks about the reverse centaur, which is...

**Adam Stacoviak:** Oh, yeah.

**Tobias Fried:** You know, we had the promise that AI and machines would do the monotonous, repetitive, boring work, and we'd get to do the fun and interesting and creative. And instead, what we got is AI-generated slop and images and podcasts, and humans are left making the burgers, and scanning receipts, and all the repetitive stress/injury type jobs are still human.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Helena's next font will be some computer-generated thing. You'll be competing with some computer-generated kerning. Can you imagine? Depressing. Let's end the show before we depress ourselves any further... Best place to connect with you all? Of course, all the links are in the show notes to all the things we've already discussed, but anything else you wanted to link to, or how people can best reach out and be a part of your world?

**Helena Zhang:** My handle is @minor\_axis on social media. Twitter/X is probably where I'm most active. I will send you all of the links in the show notes.

**Jerod Santo:** Cool.

**Tobias Fried:** And I'm @rektdeckard in most places. GitHub and Mastodon, @rektdeckard at Hachyderm.io. I'm @friedtm is my Twitter handle, I believe, X... But yeah, not too active there. And if you've got Phosphor questions, you can email us, hello \[at\] phosphoricons.com. If you've got a Departure Mono questions, probably just tweet at Helena. I don't know if we have an email set up for that, but...

**Helena Zhang:** Yeah, just tweet at me.

**Tobias Fried:** Support your human creators out there. If there's stuff you like, if there's a font, if there's icons, if there's an artist that you like, support your human creators out there, for sure... While we still have them.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** "Support your human creators while we're still here...!"

**Tobias Fried:** Yeah.

**Adam Stacoviak:** Alright, this has been fun.

**Jerod Santo:** Yup. Thanks, guys.

**Tobias Fried:** Yeah. Same here.

**Helena Zhang:** Thanks for having us.

**Jerod Santo:** You bet.
