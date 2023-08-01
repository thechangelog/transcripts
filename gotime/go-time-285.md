**Kris Brandow:** Hello, hello, hello, all you wonderful gophers out there! Welcome back to Go Time. This week, on this episode, we are going to be discussing the tools and editors that we love. Joining me for this awesome episode are my co-host, Jon and Mat. How are you doing today, Jon?

**Jon Calhoun:** I am doing well, Kris. And this is absolutely the first time I've answered that question.

**Kris Brandow:** Yup, the first time. There were no problems whatsoever. How are you doing today, Mat?

**Mat Ryer:** Yeah, very good. Thank you. I've had a lovely day so far, although I'm a little bit under the weather. But still... Nice to be here.

**Kris Brandow:** We're very glad you could still join us today.

**Mat Ryer:** Thank you.

**Kris Brandow:** And joining the panel today we have a repeat guest, Andy Walker. How are you doing today, Andy?

**Andy Walker:** I'm good. Right off the bat, I'll say that I'm the source of all of your problems. I've delayed this broadcast twice now... But now everything seems to be good, so yeah, I'm doing good. I'm actually doing great.

**Kris Brandow:** Fantastic. And to start off, this episode was actually suggested by one of our listeners out there, so thank you, Steve Nicklin, for sending in this suggestion. And as a reminder to all of our listeners, we do take requests, and I believe you can go to the GoTime.fm website and submit a request there for an episode you would us to do.

Alright, so let's just jump right into it. So before we actually get into the actual tools and editors and things that we love, I thought it'd be a good way to start the episode to talk about how we actually find the tools that we eventually wind up loving... Because I think there's tons of podcast, or many podcasts this, where it's "Oh, this specific person's tools" and all that. But for people starting out, how do you actually go finding tools and things that? Because it can be a bit challenging, and I know we all have our own individual ways. So who wants to start? I guess the prompt would be "How do you find tools to do things that you currently don't have a tool for?"

**Andy Walker:** It's the hardest... It's really hard. I'm routinely surprised, honestly, by tools that have been around forever, that I've just now discovered. But a lot of the time -- I'm a pretty big command line junkie, so a lot of what I do is like trolling through kind of like Google, with certain keywords, like CLI... I throw the CLI one in there a lot, because that's the ergonomics that are the most important to me. And GitHub search. But oftentimes, I end up coming back to Reddit, because there's just this huge collection of people with very strong opinions about how everything should be done. So, yeah, it's kind of a combination of those two.

**Mat Ryer:** What are you going to do when Reddit goes away?

**Andy Walker:** I don't know, honestly. And I've been thrown for a loop, because I was one of the users of those apps that went under... And so now I'm just kind of like "Aww... Do I capitulate and deal with the--" So I don't know. But yeah, I mean, it's still pretty well indexed by Google, and so... Yeah, that's a good place to look for, like sysadmin, and really, any of the -- if it's a particular programming language tool, that programming language's subreddit.

**Mat Ryer:** Yeah. Yeah, I usually wait for there to be a thing I need to do. Or if I notice I'm doing something a lot, I'm like "Hm... I feel there's probably a thing that will help me here." But I find the Go newsletter to be really quite helpful. That often has tools in there written in Go, but they tend to be people solving their own problems, which tend to be the best kind of tools. And so I discover a lot that way. And I don't think that's going to disappear...

**Jon Calhoun:** When you're trying those tools, Mat, how do you keep yourself so you remember them and use them enough early on that they actually stick? Because I think that's one of my issues, is I'll install some new tool, and I'm like "I know this would be great", but then by the time I go and I need it down the road, I've forgotten that I even have it installed, or how it works, or anything.

**Mat Ryer:** Yeah, I just don't use it again. I just use it once.

**Jon Calhoun:** Okay.

**Andy Walker:** I think Go is particularly good for - at least CLI stuff. I mean, obviously, that's a horse that's been beaten to death many times... But there are a small group of people, or companies even, some professionally, that are concentrating on that, and kind of refreshing that -- you know, Charm Bracelet is one. I don't know if you guys are familiar with them; they do a popular CLI kind of suite of tools called... Well, there's several of them. There's Bubble Tea, Gum, VHS... They're all really high quality, all really well written in Go... I've hung out on their Slack and I've done some contributions myself... But those are really nice, because they lend themselves really well to kind of consistently styled ergonomic tools. And there's been kind of a resurgence in that. So I guess when we get into some specific tools, I can talk about that a little. But I think Go is a really good place...

**Mat Ryer:** Yeah, and those charm bracelet tools tend to be really quite attractive as well. They put a lot of time into making them a joy to use. And honestly, we don't give that enough credit. It's like, sometimes you think, "Oh, I just need it to do the thing." But if it's -- I don't know, I certainly appreciate when tools look good as well. How about you? Does that make a difference to you? Do you feel like you're more likely to use a tool if you've got a sort of beautiful experience?

**Andy Walker:** \[06:05\] Oh, for sure. I mean, as I've said pretty much every time I've been on here, I'm a closet design and UX fanboy. I'm always tweaking my fonts, and my... I did my own color scheme, because I -- whatever. So I think ergonomics, visual ergonomics are really important. And even just aesthetics. And they've certainly spent a lot of time on that.

**Mat Ryer:** Yeah. Is that why your hair is so good?

**Andy Walker:** It is.

**Mat Ryer:** Yeah.

**Jon Calhoun:** I think that's why most editors probably -- like, very early in the setup process, they show you the theme selection as something you can do. And I know people have different opinions on whether or not those color themes actually add a ton of value or not, but I feel like part of it is just people wanting to express themselves, and choosing the color theme that -- it's not just about which one actually works well, it's also which one is colors that I like, that express my personality, or whatever.

**Andy Walker:** Well, I mean, you're customizing your knife, or your car, or whatever. I know people that are really into pocket knives, or whatever, and they get these really fancy kits, and they trick them out, or whatever. It is kind of like that. I mean, your editors and whatnot are your tools, and so you just kind of like "Oh, that feels like me. Yeah. Solarized dark", or whatever.

**Mat Ryer:** Yeah. You know, Rob Pike doesn't use a fixed-width font when he codes. That blew my mind. And I've tried it, and -- yeah, it doesn't make sense.

**Andy Walker:** Well, it's either him or Rust's responsible for my anti-syntax highlighting crusade... That's somewhat personal; I don't really crusade, but...

**Mat Ryer:** No. \[laughter\] So you don't have syntax highlighting?

**Andy Walker:** No, not at all. No.

**Jon Calhoun:** I think that's a lie.

**Andy Walker:** Okay, he says it's a lie. I mean, it depends on what you call that. I have some things in bold, but it's all black and white. I use a little bit of bold, a little bit of italics, and a very small smattering of color for things like print verbs. That's about it.

**Jon Calhoun:** I think realistically that the bold, the italics, there's only a small amount that actually needs to have any sort of syntax highlighting, to get 99% of the value out of it.

**Andy Walker:** Right. Landmarks.

**Jon Calhoun:** I think most of the colors are just personal preference, whatever you like to see, and that's fine. But when you say there's no syntax highlighting, I kind of take offense to that, only because I'm like, there are certain things that are very useful to have very clear in your editor.

**Andy Walker:** Yeah, okay, I'll agree... I don't use really very much color, though. Certainly, I don't colorize any of my syntax elements, because eventually it just becomes -- if everything is special, nothing is special. But I've already talked about this, and I don't want to sidetrack the podcast...

**Jon Calhoun:** I think I also take offense because when I first started coding, when I was very young, it was on Notepad and Windows, which had just black and white, nothing else. And I know my experience there, having a little bit of syntax highlighting would have went a long way, compared to just "Okay, I've got just black and white." It's monospaced font, but it's still black and white.

**Andy Walker:** Well, I think my argument is also that it's not that you should have no color, it's that your color should be a little bit more important. For me, the places where I want to use color, and I can't, but I would, are things like I would love to be able to have colors that represent, for example, something escaping to the heap, or something that's particularly inefficient from a language analysis perspective... Not so much that "This is a string, and this is a method." I don't care. I can see that. Or I can highlight over it if I need to.

**Jon Calhoun:** So this makes me wonder... Well, first, what editor do you use?

**Andy Walker:** So I'm primarily a -- right now I'm primarily in Visual Studio Code. I was a long, long, long-time Vim user, and mostly at the end of the day I left Vim because... Well, first of all -- I mean, I don't want to get too close to my unpopular opinion just yet, but first of all, it was a lot of maintenance. Secondly, there's a very hard limitation imposed by having a fixed-width grid of characters, that you can simply just never escape. And there are layers of meaning, and there are layers of context and information that simply having fonts that can be different-sized can make a big difference in.

\[10:14\] But Vim kind of forces you to be austere. Any graphical element that's out of place is screen real estate being wasted, and a lot of it. And everything is equal. So that's what made it very hard... That's one of the reasons I switched over to Visual Studio Code, despite the fact that I was fighting 20 years of muscle memory.

**Mat Ryer:** Do you use the Vim bindings in VS Code?

**Andy Walker:** I don't. When I started using Visual Studio Code, it was still pretty new. And the Vim bindings were just -- it was not good at all. It was a terrible experience, and it just felt a hack.

**Mat Ryer:** It was a terrible experience, but that's because it's copying Vim.

**Andy Walker:** \[laughter\] Well, that's an opinion...

**Mat Ryer:** Is it...?

**Andy Walker:** So I was just like "You know what - screw it. I'm just going to--" I mean, I certainly didn't want to -- at first I was like "I should just go native. I should live off the land, I should learn the key bindings everywhere", and then very quickly, I was like "No way", and I ended up going with kind of a corded system, where there's a mnemonic for it... Yeah. So that's kind of where I am now.

**Mat Ryer:** Yeah. With Vim, the difficult thing is when -- because I've never used Vim. And sometimes I'll either screenshare with somebody... I use pop.com, which is kind of really cool collaboration tool. It's kind of like Screen Hero... Actually, I think it is Screen Hero. It was literally the same people. Screen Hero got bought by Slack, and then it -- I don't know, it's in Slack somewhere, kind of. But pop.com is an alternative, which is great for pair-programming. You both get a different cursor, you can take turns typing, you can sort of just type... But if I'm in someone else's editor, and suddenly it's Vim, I'm just trying to type in simple "func hello", or something... And I've jumped to the end of the line, I've changed the font, and I've deleted all the files on my computer. So it's not very portable. So there's something nice about -- it's nice when you press a key on the keyboard, and that letter that you've pressed, goes on the telly, on the screen. That's quite a nice feature, ain't it?

**Andy Walker:** Well, yeah, I mean -- but that's really the only thing that's portable at the end of the day. The keys come out when you type them, and -- you know, that was kind of my big difficulty in switching because... Okay, yeah, I can type, but how do I move around? I really hate picking my hand up, like off, while I'm typing, and having to scroll... I mean, I kind of put up with it now...

**Mat Ryer:** Yeah... You're such a hero.

**Andy Walker:** \[laughs\] But even just moving backwards and forwards one word, right? That's not consistent between a lot of editors. Maybe it is now, but... Anything beyond just "I click here, and I type here", which I consider to be the hunt and peck of programming, is not portable. So...

**Mat Ryer:** It's true. Sometimes, when pair-programming, I'll see people do things, and stuffs happening, and I've no idea how they've just done that just with their keys, or just very quickly. Sometimes it does seem like magic.

**Kris Brandow:** I feel like that an interesting tool idea is some -- I think a language server protocol, but for collaboration, so that you can be using your own editor... And then the underlying system just synchronizes the buffers, so that you're editing in the same space, but someone can be in VS Code, and someone else can be in Neovim, and someone else can be in Emacs, or GoLand, or whatever, and you'd all be editing the same underlying stuff. That would be a real cool tool, I think.

**Jon Calhoun:** I feel that's going to be like all the chat protocols we have, where everybody will make their own, and every time someone tries to make a universal one, we just end up with another proprietary one...

**Kris Brandow:** \[13:50\] I don't know, because I feel Language Server Protocol probably gives us a good base for how to do this sort of thing... I know for me personally, when I first saw Language Server Protocol come out, I was like "That's silly... Why do we need this? We don't need this. We don't need to have this thing." But I recently rebuilt my entire Neovim config, and just having -- Neovim has a language server protocol client built into it. So you just configure all of the bindings for go to definition, and refers, and all of that stuff once, and then you just put a little single line of code in, and then boom, it'll work for any language. It has a Language Server Protocol server for it. And I think that was absolutely fantastic, and that kind of revolutionized things. So I'm like "This is fantastic." So I think we could probably do the same thing if there was a big enough company like Microsoft that actually pushed this kind of protocol or consortium of people. You've got a consortium of editors online to be like "Yes, we will all commit to doing this and kind of making this kind of collaboration underlying thing."

**Andy Walker:** You can just put an LSP, right? Just put it there. We are so lucky that that landed at all, I think. It was a perfect storm. Because I, like you, was waiting for so long... I mean, shoot, the Neovim LSP - it's kind of just barely recently, isn't it? Like, actually, like Solid... I was using COC for a while, and all of those wacky ones that provided bindings that kind of went through VS Code, sort of, kind of... But yeah, I think we're just lucky to have LSP, so just put it in there. Let's just convince them to do that. I mean, that's already part of what it's supposed to do, I guess is be a central -- yeah.

**Kris Brandow:** Yeah. Alright... So do we have any other ways we like to find tools?

**Jon Calhoun:** I can say one of the ways I've seen a lot of people do it is by watching screencasts of people coding stuff... I think that's one of the reasons why they've become more popular than books in a lot of ways, is that you're not just reading about how to do something, you're watching somebody use their tools and thinking "Oh, I'm seeing somebody who actually does this professionally." You do tricks, and you're like "I want to know how to do that trick." Because I know that anytime I've done screen sharing anywhere, I always get questions about "What's this? What's that? What tool are you using for this?" And a lot of them aren't that crazy. I just don't think about -- if I was brand new, I wouldn't know what any of those tools are. So sometimes it's just watching developers and asking questions.

**Mat Ryer:** Yeah, that's a good point. I get asked questions "What font is that?" as well, if someone sees that. And it goes back to that... The interface, the way that we interface with these machines is very important to us.

**Jon Calhoun:** Yeah. And those fonts -- font sounds like a silly one, but I know some languages like JavaScript, the ligatures they have... I think ligatures is what they're called... They'll take three equals, or whatever the different things are, and turn it into a special character... And I don't necessarily prefer that, but I understand why some people would really it. Something like "Alright, cool, if you're a JavaScript developer and you that, maybe that's something you need to choose."

**Mat Ryer:** There's some good ones as well. You do it like with channel operators, the little hyphen with an angle bracket turns into an arrow, and...

**Andy Walker:** We can thank Haskell for giving us those... \[laughs\]

**Jon Calhoun:** So I don't use them, so I don't know specifically which ones are out there... I just know some people really like them, and I'm like "Okay, that's a reason to ask about that stuff."

**Andy Walker:** I mean, ergonomics are a big deal, right? That's kind of, I guess, part of what we're talking about today, but... I mean, I think I was losing my mind, because I thought my vision was going bad, because I was struggling with plugging my MacBook into a monitor, and how fonts rendered depending on whether it was Retina or not... And then I finally read this article that mentioned that "Hey, by the way, just so you know, Macbooks - they use non-integer scaling by default", and I was like "What?" And then I noticed that if I just made the screen less real estate, everything became much more crisp. And the font choice can have a big part of that.

**Kris Brandow:** Oh, that reminds me of -- I guess this is not a tool specifically, but one of the things I did, I think about a year ago, is I used to have... I think I had a native 2k display, and then I was like "Okay, this works, but everything's just a little bit fuzzy."

\[18:05\] And then I read this article that was like "Actually, if you're gonna be someone who stares at text all day, you should get a 4k monitor, and then scale it down to 1080p, so HD", and that basically turns it into a Retina display. And all of the text is super-crisp. And since it's not like an in-between, it's like a whole number division, it doesn't have any weird fuzziness to it. And I did that, and actually bought -- I had a really good 2k monitor, and I actually got rid of that and got another 4k monitor and put it in 1080p, so I have double the setup. And it's just -- it's been life-changing. It's been absolutely fantastic, being able to just see everything just so crisp on my desktop.

**Andy Walker:** That is exactly what I did, and it is exactly that article... The Tonsky one, with the yellow background? I remember it vividly. It was life-changing. I bought the monitor immediately, the same one... It was 4k at like 120 hertz, I think; that was his recommendation, or something... And yup, I never looked back.

**Kris Brandow:** Yeah, I've gotta find that and put it in the show notes.

**Mat Ryer:** Yeah, I was gonna say, we should put that in the show notes. I was gonna say, when I first had the Retina display, the images, the pictures and stuff were great, but it was that sharpness of text that really made a difference. And it was like "Yeah..." And sometimes I'll use someone else's computer, or even screensharing - you don't get the full resolution - and it's fuzzy, and stuff, and it's just... Yeah, it does something. I don't like it.

**Andy Walker:** Well, it hurts your eyes... I mean, eyestrain is real, man. I'm in my early 40s now, so... Anything I can do.

**Mat Ryer:** Wow.

**Jon Calhoun:** So -- I mean, talking about that... Are any of you interested in trying the new VR stuff from Apple whenever it comes out? Do you think it's going to have that eyestrain? Or have any of you used the Oculus or the other VR stuff?

**Mat Ryer:** I've used the PS, the PlayStation one. And honestly, as soon as I started looking at this, I'm like "I want a dev environment with this."

**Andy Walker:** Oh, yeah.

**Mat Ryer:** You know, just to being able to -- and I think... Imagine even not just the windows all over the place, but imagine being able to actually visualize the programs in some way as they're running. I feel there's a whole world there, where we're going to be able to actually get -- you know, like when you watch old movies, and there's hackers... I think that's probably where we'll end up. And you'll know you've finished the program, because your tests will pass, and the 3D cube that spinning will complete, and it'll all slot together nicely. Yeah, so I'm really excited about that, to try that for dev. And it's 4k each eyeball. Normally, you've got a 4k display. That's shared between both eyeballs.

**Andy Walker:** What a waste...

**Mat Ryer:** This gives you 4k per eyeball. So that's lots of k's. It's lots of pixels.

**Jon Calhoun:** So I agree with you that the first time I throw in VR, it was interesting; it was like "This would be cool to try." But I know that -- I used a lot of the early stuff, that was dev kits for Oculus, and then the wireless, whatever the one they're on, the Quest, or whatever it is... All those have resolutions so low that I'm like "There's no way I could code in this all day." But it is a really cool idea to mess around with. So it would be nice to try the really high resolution, see what that looks.

Oh, and when you were talking about visualizing stuff differently, I swear somebody did something where they had something like Minecraft VR, and they were doing something programming related with it... But I don't remember what it was; I'd have to go find the article.

**Mat Ryer:** I think it's an exciting space. There was a talk - and this we'll have to dig out and put it in the show notes... But there was a talk at one of the GopherCons, and it was about visualizing Go code as it's running, and visualizing concurrent code.

**Andy Walker:** Yeah.

**Mat Ryer:** And you think like -- you know, I feel like it's valuable, because it's quite abstract. And actually, I'm fine with it being abstract, but I feel like even if it's just, again, just aesthetic, or visually ergonomic, it just looks beautiful, I think it'd be great to see your programs running physically in 3D space. And imagine if you then also had your instrumentation data also fed into that; Grafana Labs plug... \[laughter\]

\[22:15\] Imagine actually then seeing when you've got low latency, and being able to actually see that heat up, almost like a heat map visually, around things. If you think about profiling code, and feeding that back into the developer experience... I feel this is where we're headed.

**Andy Walker:** Yeah, I think that's gonna be the next level of where we're at. I mean, I think 3D components are great, but it's really all about kind of information bandwidth, and how much that we can take in. I remember at my very first job, part of the interview process - they were asking me about what I would do to design things, and I was like "Well..." And I went really off the rails with this, because I wanted to impress them, and so I went really off the rails with this discussion on how you should base -- you know, maybe we should consider basing error or colors off of the palor of unhealthy skin, or something that, because we're tuned to it, or saturating that information... That's kind of wacky, and whatever, but I do think that multiple levels of information about more than just -- because right now, I feel we're very two-dimensional. It's very much like there is start position, end position, and it's either warning or whatever. And it's very token-based. But there's not a lot out there that can say, "Hey, this section of your code's kind of slow", and you can kind of see it. I think that's kind of like the next step.

**Mat Ryer:** Yeah. I think you're right though; you're onto something with that. That does sound -- yeah, that sounds mad. I hope that stays in the podcast...

**Andy Walker:** Definitely.

**Mat Ryer:** Because it makes stuff I say sound really good. But there is a lot -- you know, we've evolved, and I don't want to get into this now... I assume we all agree that we evolved as a species. We have early humans, and before that even, you know, needed to be able to navigate landscapes, we needed to be able to position ourselves and figure out where we were, and stuff... I think syntax highlighting, or like the mini map that you get in editors, gives you... I feel like we're using that same kind of software or firmware or slushware... I don't know what it is... Floppyware. What is it? Moistware? It can't be...

**Andy Walker:** Wetware I believe is the --

**Mat Ryer:** Wetware. Yeah, that's cool. We're using that to help us navigate code. And I find that that is -- like, I've had people watch me coding that aren't in tech, and they're just kind of blown away by how quickly I know where to go for things. And really, it becomes kind of instinctive, and I feel we are tapping into something like that. So it's not to be ignored. There are things that we can do, that will make our lives easier. And usually, it's going to tap into something very natural probably.

**Andy Walker:** Well, it would kind of have to...

**Mat Ryer:** Yeah.

**Andy Walker:** I've read a study recently where it's basically said that we're pretty much serial; at least in terms of academic or work-related tasks. You really can't do more than one thing at one time easily. However, there are a lot of these older systems that are constantly taking in information... You can reference somebody like Gavin de Becker for that. Like Gift of Fear, whatever... And I think you can really -- if you choose your cues and stuff carefully, you can convey more with less.

**Mat Ryer:** Yeah, it's about -- I wonder if we can move more into the subconscious. And honestly, when we're designing software and thinking about it, it's very abstract, so we do get quite good at abstract thinking as engineers. But what is that even? What is physically going on in order for us to even be able to do that? I don't know.

\[26:06\] But I play the piano, and I noticed that it's very subconscious, the actual playing of it. And if during -- while I'm in the middle of playing something, if I think "What's the next thing I have to press?" If I consciously try and think that, I have no idea. And then I sort of worry. I have to actually relax, and just let it happen. So that's a really unusual feeling... But that also applies a lot to the code. A lot of what I'm doing when I'm coding is that kind of same thing, instinctive and not conscious.

**Jon Calhoun:** Is it instinctive, or is it learned behavior? Because I'm thinking - you said piano, but I'm even thinking on keyboard; if you asked me to tell you all the letters on the keyboard, I couldn't, unless I tried to type and just thought about where my fingers went. And then I could lay the entire keyboard out. But when I first learned how to type, I was actually looking and paying attention to what I was doing. And then once you learn it, it becomes that background...

**Andy Walker:** I believe the term for it is procedural memory.

**Mat Ryer:** Thank you.

**Jon Calhoun:** Okay.

**Mat Ryer:** We'll just check that.

**Andy Walker:** But I feel even with coding, there's things that as you get more experienced in your editor, certain things that might be too much information at first become sort of background information that it's easy to tell what file to go to, or where to go, or even where to look for errors sometimes, because there's small cues that your brain knows to filter out until it needs to actually look at it.

**Kris Brandow:** I feel that's kind of a tool in and of itself as well, because I think - kind of going after what you said, Andy, where it's kind of like we are very serial; our consciousness is a very serial system. But we are very parallel as well; you can walk and chew gum at the same time, you can do parallel things. But you can't really do parallel things consciously. So the more things that you can move toward the subconscious, to kind of that procedural memory, the kind of automatic things that you do, the more that you'll be able to do at once. And I think that kind of links also into the code mini-maps, and also the kind of low-color syntax highlighting, where it's kind of just going off of systems to be like "Oh, I know where these things are, I don't have to think about them." That can actually increase your speed at coding by a lot. And I think a lot of times people will kind of just brush off those small little things that happened. Even things like do you put the bracket on the same line or the next line? That can really throw off those systems and really take a huge hit to your ability to actually move quickly throughout a codebase.

I always remember in my early days of Go, and how big of a change `go fmt` made in the ability for people to just consume Go code. I think in the early days, people were just kind of like "Oh, okay, well, whatever. It just formats." It's like, no, it's new formats in a very specific, very regular way, so whenever you go into a Go codebase, you're not getting annoyed because the brackets aren't where you think they're supposed to be, or something that. It's just like "Oh, no, no, this is recognizable, so I can parse out all of the things I actually need to be paying attention to", and all the noise kind of just fades into the background.

**Mat Ryer:** Yeah.

**Andy Walker:** Well, you're actually speaking the same language now, right? I remember there was so much gnashing of the teeth at the time, but when you speak a language, it's more than just the words, the vocabulary. \[unintelligible 00:29:14.22\] rules of syntax, and all that. And learning to speak something natively and speak the same language is also about the arrangement. And I don't want to make go format sound out to be too life-changing and wonderful, but it was, and I think that's really important. It's not just the same programming language, it's actually the same... The same, yeah.

**Kris Brandow:** I mean, I'll say, I think it was industry-shifting, because there was like a before `go fmt` time, when basically no program language was shipped with a format. And you could go find them. There's many different types and many different kinds. But I feel like most languages that have come out after Go, every one of them has some sort of fmt tool that will format the code in this very specific way that is regular for everybody.

\[30:00\] As the saying goes, no one loves go format's format, but everybody loves `go fmt`, right? No ones like everything about how it's laid out, but everybody's happy that we have it. And I think most other languages now come with that built in. So I think the industry did shift after that.

**Mat Ryer:** Yeah. A lot of them are also configurable still, and that sort of defeats the object of it. You might be able to choose all your formatting things, but the fact that sometimes I've done this and it's really eerie... I'll look at an open source project, and I'll look at the code, and I feel like I've written that code. That's how familiar it looks.

**Andy Walker:** Yeah.

**Mat Ryer:** And there are still ways in Go to write code differently and do things differently, but more than any language I've ever seen it, I've had that strange experience of like "Oh yeah, I think I wrote this." And that's kind of quite unusual.

**Kris Brandow:** Yeah. I feel like Go is an easy language just to kind of move into that area, because I remember, I had interns at our previous job, and by the end of the summer, they were writing code that I was like "Oh, this looks exactly code I would have written." I remember that being a) such a proud moment for me, because I was like "Oh, I've actually taught someone how to write code in this way that is elegant", but also it's just like "Wow, this is the language where you can just do that, where you can have these signatures, and it's just like "Well, what is this signature? What is it?"

And I think, to some degree, one of the reasons at least the code that I've written, and a lot of Go code, is that it's very Go-like. And I think because of that formatting, you can tell when Go code is not Go code; when it's like the Java Go, or the C++ Go... It's like "Oh, you're using the same patterns from your other programming language, and you've just imported it into Go."

**Andy Walker:** Simple.

**Kris Brandow:** Yeah. Simple, factory, all those wonderful things. I feel like part of the reason we can actually just identify that so easily is because of go fmt. Alright, so I think we've talked a bit about how do we find tools... There was one other topic I wanted to get to before we get into some actual tools, although we have been talking about plenty of actual tools here... When do you decide that you want to write a tool yourself? Not necessarily for other people's consumption, but you're like "This is something I've been doing over and over. I'm just going to write this." And I guess is there a point at which you kind of search for a tool and can't find one? Or is it just like "I can just write this quickly myself?" Does anybody here have a view on this? Do you find yourself doing this?

**Andy Walker:** Too much. My frustration tolerance is very low.

**Jon Calhoun:** I think it varies so much though, because I've definitely seen cases where I wrote a tool -- I definitely hadn't done the task enough to justify writing a tool, but it was one of those things where writing the tool felt enjoyable to me, and I'm like "This looks like a fun project to me." And it wasn't going to interfere with the rest of my work, so I was like "I'm gonna go ahead and do that."

So there are exceptions there, where it's really not -- you spend more time writing the tool than actually just doing the job. And that's fine if it's like "Okay, I'm doing it to learn something, or because I enjoyed it", or whatever. But then outside of that, I think actually evaluating "Am I doing this enough to justify the cost of a tool?" is very hard to get right, at least for me... Because there are some times where I'm like "Okay, I've done this a lot. I definitely need a tool." And then I write the tool, and for some reason, I'm not doing that anymore. And it's not just because the tool; for some reason, I'm just not using that as much.

**Andy Walker:** Yeah. There's a little XKCD about that; the equation that you can run based off of how much time it saves you and how often you do it. I've written so many tools, so few of which I've ever even released... Just recently, I've found myself having to do this kind of complicated thing with Pulsar, where I had to migrate these things are called Pulsar functions. They're kind of like lambdas, and you have to deploy them with a configuration that's also JSON, but for some reason when going into Kubernetes, the JSON could have -- sometimes new lines would appear, and it would break things... So I was like "Okay, well, it's gotta be Base64. This really sucks." And so I wanted something that would do a pipeline of different things together. And I wrote this little thing called -- I just call it Omnitool, and it's just a series of little connected modules. It's like "Okay, go to Mongo and do this query. Now take everything and jam it through this", and everything assumes that it's either key-value text or binary. And I'm like "Maybe this will be the one where I just use it more often."

\[34:19\] So that's kind of the most recent thing, where I just needed a tool, and I couldn't -- I couldn't even search for it. It's like, you know, "command line modular put stuff together call API." Google results are terrible.

**Mat Ryer:** Did you try asking ChatGPT?

**Andy Walker:** No, I didn't. I should have, actually...

**Mat Ryer:** But Jon, I like what you said about you might do it to learn something. And this is always advice I give to anyone that asks - you know, they want to learn Go, and what's the best way to do that. And it's always like solve a problem you have. And I think even if there is a tool for that thing, it's still a great exercise to do that work yourself. Solve that problem. Maybe you end up abandoning it, because you realize that it's too hard; all the edge cases, getting that right. But even things CD, and list out the directory, and Ls - these commands; even implementing those commands in Go is quite a nice way of learning the language... Especially having a specific problem that you need to solve is a really nice way of focusing your learning. And I think building little tools, even if there is a tool... The JQ tool's really cool. The JSON kind of command line parsing tool I think is very good. But that's also very fun to write things that in Go yourself. So I recommend it just for the learning and just for the fun of it. I think that is valid.

**Andy Walker:** Well, here's a good question then. Where do you decide -- this is something I kind of struggle with. Where do you decide where the line is between "Should I write a shell script for this, or is it time for a CLI tool?" Even if it's only got a couple of arguments.

**Mat Ryer:** Well, for me it's easy, because I'm not very good at Bash; I'm not very good at just those kinds of scripting things. Well, I'm better at it now ChatGPT exists... But I will go to Go to do it, just because it's so familiar to me now, and it's so easy for me to solve those problems. So I probably opt more for Go than I should.

**Jon Calhoun:** I'm in a similar boat to Mat, where if it's getting any sort of complexity, I'm pretty much immediately out of Bash, because I just... I struggle. I feel like I've never sat down to learn Bash correctly, so I've just sort of like hacked my way to certain things, and whenever I try to sit down to do it, it's like, it's going to be quicker for me just to write this in Go than to actually go sit down and learn Bash.

**Kris Brandow:** Yeah. I think there's a kind of abstract idea here around innovation tokens around "What are you willing to spend on the thing?" If you understand the problem very well, you know exactly what it needs to do... Even if that's a complex tool you want to build it, if you understand exactly what it is you want to do... And you have the time... It's like, go write it in something you're unfamiliar with, because you already know what it is you want to do, so you know if it's working correctly, and you can spend time kind of stumbling over the language, or whatever. But if it's an area where you aren't quite sure how this should fit together, what the UX should be, and all of that, then you should use something you're much more familiar with, because then you won't be stumbling over the language as you're trying to figure out how the thing works. And I think that means that it really depends on what you're familiar with.

I don't think there's a universal answer for -- or even a widely acceptable answer for "Should this be a Bash script or should this be something I write in a programming language I know?" I think that highly depends on "Are you good at Bash?" Because if you're really good at Bash, and you understand it really well, and you can actually put things together well, then yeah, if you're doing that kind of exploratory "I know I need this tool, but I'm not quite sure how it works", then you'll be able to do it easily in Bash. But if you don't understand Bash, and you also don't have a good concept of what this tool is going to do, you're going to run yourself into some large problems, and it's just going to be very frustrating overall.

**Andy Walker:** \[38:04\] Yeah... I do think there's room for something that's kind of like a sweet middleground. I'm sure there's libraries like this, and I'm sure I've seen them before, but there's just so much that the shell kind of gives you already, in terms of like "I want this list of things, that I know are all in the same place." And there's a standard interface to run and/or open them that is one line. And Go - I definitely... All of you. I mean, spoiler alert... That was almost like a devil's advocate question. I I typically reach for Go first as well. But one of the -- there have been a few times where... And recently especially, because I've wanted to do stuff with prompting more, where I give people options, where the barrier to entry is a little bit higher thanks to certain tools, which we'll talk about later... I can more easily kind of give somebody a list of things on the shell, than I can spin up a terminal UI, or whatever in Go.

And I think there's room for kind of libraries that bridge that scripting language gap, I guess, between say Python or Bash and Go, where you can just be like "Okay, well, this library is not exactly the most efficient, but it has this kind of convention of returning things as lists of things, and I get a file, I've gotta get this and that. I think there is some room for something in that space too, because I do find... Even getting a list of files and filtering them can be a bit tedious in Go sometimes.

**Jon Calhoun:** I was gonna ask one more question related to deciding to build a tool... Do any of you guys consider the cost of learning a new tool that exists, versus just building something if your needs are relatively simple?

**Mat Ryer:** Yeah, that's the other thing about when you're writing your own. When you just write it yourself in Go, you really can just focus on solving that one problem. And the fact that we have go run, so you can just say "go run this go file", in a way it treats like a scripting language. I the fact that it's very focused; you know exactly what it's doing. And because Go is very readable, they are actually very easy to share as well, and others can see it and tweak themselves. It's very clear.

I just find, honestly, Bash - like, there's a lot of magic in there. It's like "Oh, how did you do this in Bash?" "Oh, just put an ampersand greater than two, and a colon." And it's like "No, I'm not gonna put those things in. Thank you, Bash. That doesn't make sense. I'm not gonna do it. I'll use Go."

**Kris Brandow:** I feel like for some tools there's also the problem of the tool does 30% of what I need, and 110% of what I don't need... And I think sometimes that's also a sign that's just like -- even though it might technically be even 90% of what you need, all of the stuff you don't need is going to distract you, so in that case it might also just be better to write the thing yourself, instead of taking what already exists.

**Andy Walker:** Yeah, it's that generalization that creeps in... Because it happens to all of us, right? You're like "This is a good tool. I'm gonna release this. But it should be able to do this, really." And the more that the generalization creeps in there, the more difficult it is to learn.

**Jon Calhoun:** I think that's something people who contribute to projects, but don't maintain projects don't quite understand. They're like "Here's a PR. You should accept it, because it's already written, it's already tested." But as a maintainer, you have to push back and be like "This is something that not only do I have to maintain going forward, but provides that mental barrier for somebody who's trying to learn the tool. They have to now learn all these extra things, or at least be aware of them, in some cases."

**Mat Ryer:** Yeah. If you can do that in userland, if you can do that thing outside of the tool, then that's how you should do it. It makes your tool more focused, and I think more composable. And like you say, simpler. Less to learn, fewer arguments... So it's easier to use.

\[41:49\] It honestly is so important, and I don't know why, but this tends to be a constant thing. I feel like whatever's got -- I don't know what's going on in universities, but I feel like everybody has this sort of mindset of "Well, you can make the tool-- it's quite easy to make the tool do these extra things, it makes it more powerful; you just add these arguments, and that's therefore a good thing." And you end up almost like -- I don't know; you're right, you have to push back against that. But it's a tough pushback, because you're really saying "Yeah, those things - they're not bad ideas. It's not that. It's just, it doesn't need to do this. You can solve this in other ways." And it's quite a hard conversation to have, I think.

**Jon Calhoun:** I think there's a lot of cases like that, where until you've experienced it, it's really hard to relate to it and understand the complications... Another example of this is you'll see people say "Instead of selling that product for $100, why don't you sell it for $10 and sell it to 10 times as many people?" And in theory, that sounds great. But in practice, you have to support 10 times as many people, and that is a lot more work. So until you've done that, you don't realize "Oh, that is a big cost that you weren't really considering, and it's potentially going to make it much harder at that point."

**Mat Ryer:** Why don't you sell it for $1,000, and to a 10th of the people? Much easier.

**Jon Calhoun:** I mean, the hard part about any business is finding that balance. What is the right balance of the price point that we can support the way we want to support it, and it's not so astronomically high that we can't make sales, or anything? And every business tries with different things, but I think it's about finding that right level. And I think Google is one of the ones that historically has been like "Oh, we give everything away for free, and make our money with other stuff", so I think people got used to that. But then now we see all these products they make that just get shut down, and it's like "Well, clearly, there is a downside to this approach."

**Andy Walker:** Yeah. I was just thinking about this while you were talking about it... There really is no one right answer. Eventually, things can become so generalized that they become bloated, and there's now this huge barrier to entry, or whatever. And making things that are smaller, and 10 times as many people, like you say, now you have 10 times as many people to support. Not only that, but -- well, then maybe you can't use it for half of the things that you use it for. So it's always this moving target of whether or not a tool is good enough. And there's no perfect, but we always want -- there's always somebody who's like "Alright, I've figured out the problem with that tool", and it's the way we were thinking about it, and arranging it; they've got a better way. And then it kind of works, but... It's really about just constantly experimenting, I guess.

**Jon Calhoun:** One of the tools we've all probably used is a Caddy server. And seeing how they've evolved over time - there is a way to do very complex setups for it. But there's also a way to go back to kind of the original, "I just want a really simple Caddy file, that has four lines of text on it, or something." And I think they've done a good job of managing that, like, you can still use it the simple way, but if you really want the complex stuff, we have found a way to support that as well. And they've done a good job of it, but I think for a lot of tools, it's really hard to have that balance of "We can support both."

**Kris Brandow:** I feel like that's a good transition point for moving into tools and IDEs. And I'll say, one of the maintainers of Neovim, TJ DeVries, has this new concept. We have the IDE that everybody's used to. IntelliJ, GoLand... And then you have your editors, which is like Vim plain, or Notepad, or whatever. And he kind of created this new category in the middle called "The personal development environment", which is all about this idea of you take the simple editor, and then you start adding pieces to it. Or you make an editor that has a good enough base to it, that you can add the pieces that you need, to configure it for basically exactly what you need. And that's this idea of, okay, well, you build a platform, then you build things on top of it, instead of trying to build one big thing that does everything for everyone... Which I think is some of the angst people have around IDEs, is it's like "Yeah, there's this huge learning curve", and sometimes this huge startup curve, of like "Oh, I've gotta wait five minutes for this thing to boot", like in the bad old days of Eclipse-based IDEs.

\[46:05\] I think that's an interesting area, and I think things Neovim and VS Code fit very well into that space. And kind of like what you were talking about, Jon, with the Caddy server example, where it's like - yeah, you can have a super-simple config, and it works fine; it'll do everything you need. Or you can do all the complex stuff you want to do, and it has this nice -- it has the ability to span that whole thing, and that's likely because of building it more as a platform instead of just as a single thing that you're shipping so other people can contribute to it.

So with that, I think we've talked a bit about editors already... Does anybody have any other things they want to say about editors before we move on to other tools?

**Andy Walker:** I mean, I will say - I think Neovim has come a long way, but they still have, I think, a long way to go. I was recently using LazyVim; not the plugin manager, but the "distribution". And it's a pretty good start, but I still think even though Lua is better, I think what Neovim is really missing is that killer kind of configuration experience; it still seems kind of all over the place. But that concept of the PDE I think is really game-changing, and I'm looking forward to seeing where that goes.

**Mat Ryer:** Yeah, I still think Neovim is probably not like the first editor you want to jump in. I think VS Code is probably a good first place to start. But I do think it's -- there's a nice thing about being able to be in the terminal all the time, and what that gives you, versus having to jump between a terminal emulator and your editor. And I know that some editors, both Neovim and VS Code have built-in terminals, but I think that's kind of inverting the thing. I want my editor in my terminal, not my terminal in my editor.

**Jon Calhoun:** I think there's also -- another way that... At least the way I approach that problem is I make sure I use a terminal that has a global hotkey, to bring it onto my screen. Because I actually can't stand the VS Code terminal that's in there. But I do agree with you that I need a quick way to get to my terminal all the time. So having a global hotkey that works everywhere is very handy.

**Mat Ryer:** That's a good tip. You know the GoLand, the JetBrains IDE... I haven't actually used it. And at some point, I'm going to try it. But I still remember what it was called Gogland... \[laughter\] What was it, Gogland, or Go Gland?

**Andy Walker:** I don't know.

**Jon Calhoun:** Gogland. They just dropped a G, and they turned it to GoLand.

**Mat Ryer:** Yeah. What were they thinking with that?

**Kris Brandow:** I think Gogland is the name of an island, or something that.

**Andy Walker:** Yeah.

**Mat Ryer:** Oh, I see. So it's not Go Gland...

**Jon Calhoun:** So if anybody listening is new to Go, and they want to try something, GoLand is definitely something worth checking out. It's a great -- VS Code and GoLand are probably the two easiest entry points to go.

**Mat Ryer:** You pay for Gogland - I mean GoLand - don't you?

**Andy Walker:** Mm-hm.

**Jon Calhoun:** I think there's certain free tiers you can get, but I don't remember why. I don't know if it's students, or which ones there are. I think they do have some ways to approach it that aren't too expensive. And there is a trial too, I think.

**Mat Ryer:** But VS Code is completely free.

**Kris Brandow:** Alright. I think we've talked about editors enough... I know, Andy, you had some tools that you were alluding to that you want to bring up.

**Andy Walker:** Okay. Yeah, I mean, it's pretty recent, but I'll be honest, this is a charm bracelet stuff... Or are they just Charm? Does anybody know?

**Jon Calhoun:** I think it's just Charm.

**Kris Brandow:** I think it's just Charm.

**Mat Ryer:** The GitHub username is Charm Bracelet, right?

**Andy Walker:** Yeah. Okay.

**Jon Calhoun:** Well, then maybe they changed it. I don't know.

**Andy Walker:** No, it's probably just Charm. I'm just -- I just spent so much time staring at their GitHub... That's all I remember. But they have a tool that's called Gum, and at first I didn't really get it. But basically, what Gum is - it's this combination of the various different kind of interactions, some of the various different interaction widgets of Bubble Tea, and a single Go binary that's all done through environment variables and command line flags... And so you can use it to make interactive shell scripts very easily.

\[49:57\] For example, you can be like "Such and such equals", and even if you don't know Bash really well, you probably know that backticks or dollar parentheses interpolates that command. And so it's very easy to say, "user once equals", and then a gum command that prompts them, with a list or whatever, and it can filter, and page, and all that stuff. And it's actually really, really nice, because it does just enough, I find, most of the time. The only thing maybe it can't do is input validation. But I really love it.

They also have another one called VHS, which can kind of record a terminal session, and render it as a movie or a graphic. It's very useful for sharing issues, or how-to's and stuff that. I like their stuff a lot.

**Kris Brandow:** I enjoy their naming so much...

**Andy Walker:** Yeah. It's very cute.

**Kris Brandow:** I mean, their GitHub repos are just on point.

**Andy Walker:** Yeah, their branding is.

**Mat Ryer:** Yeah, I do wonder if they have designers involved. They must do. Their website is kind of great. And I think more tools should be this. Sometimes I think people dismiss it like this is just putting lipstick on the pig, and you want to focus on the pig... But to stick with this analogy, you're going to prefer a pig if it's got lipstick on than not... No, I'll drop the analogy on this.

**Andy Walker:** Well, I mean, their whole styling -- their styling tool library is called Lip Gloss. But I think in this case, Gum really -- so say what you will, certainly using Bubble Tea is definitely a type of frameworky Kool Aid. Like, their kind of broader library. But this takes a lot of that design and kind of utility and just puts it in one single little binary, and you can just drop that anywhere, and then you can have interactive shell scripts to your heart's content. And to me, that actually sped up -- it's actually sped up... Because I wanted to write a script recently to spin up a new infrastructure, something or other. And I was just like "I need to get this done. I don't want to do another CLI." And it was so easy for me to just grab a bunch of variables, a couple of if statements, and then put an interaction layer on it and call it a day with that tool. It was -- it's really useful.

**Jon Calhoun:** So do you think the tools we use shape our design type choices, like, going the other way? I say this as somebody who -- coming from the Ruby background, and then also seeing Python developers, I felt like there was always a very clear divide, as to like Ruby developers seem to be more design-focused.... Or they thought more about it, whereas the Python application -- maybe this isn't true now, but at the time, it felt like the Python ones were "Just get the data out there. It doesn't have to look as pretty."

**Mat Ryer:** Yeah, I do think there's something in that. One of the reasons to not have all these extra tools loaded into, say, VS Code - if you're writing libraries and you're writing packages for other people to use, you sort of want to have the same experience that they're having. We have autocomplete in our IDEs... And in I used to do C\#, and you would end up with very long method names, and class names, and things, because it didn't matter, because the IDE would basically autofill it.

So if you're building tools for other people to use, you kind of want to be in a similar situation as they are as possible, because that'll give you the best chance of getting that tool right. And I think being similar to other tools that are also in that ecosystem pays dividends as well. And it may be that, "Well, I can think of some better flags here, that make more sense in this case", but actually, if they're already flags everyone's using, that use particular letters or whatever, or they have particular names for those things, it's probably worth sticking with them just for the inertia of that, bringing people's current experience along with you.

But I think as long as people are thinking about the experience of the tools that they're building, I think that really matters. It's really important. And I've seen tools succeed just because they had a better user experience, and fewer features even, but the experience is better. And that's why I'm quite excited about the charm.sh toolset. I think I would use that next time I build a tool.

**Andy Walker:** \[54:17\] Yeah, it's saved me a lot of time. And I think you're right about Ruby. I always wondered why that was. But yeah, it definitely seems like they were always kind of more design-focused. Tell me if I'm misremembering this right... Did Ruby use to have a little -- I feel like I remember seeing red text that said Ruby in some tool or another. There was bundled --

**Jon Calhoun:** Ruby on Rails was the web framework.

**Andy Walker:** Okay. Yeah.

**Jon Calhoun:** Which had red. But I don't know if that's what you're referring to.

**Andy Walker:** No, but I just remember even back early in the days using Sinatra versus say like a Perl framework. It just felt like -- I don't know, like there was a nicer look to it.

**Mat Ryer:** Yeah. It was kind of part of that whole web 2.0 movement, where people started to realize actually our tools can look good even if they're dev tools; even if they're for geeks, they can still look good, and should.

**Andy Walker:** Well, and there's a whole aesthetic you can appeal to there too, that's just different. I've definitely noticed that devs tend to like things a little more pixel perfect, and angular in some cases, certain colors are more popular... And you can kind of appeal to a certain, I don't know, feel that way.

**Kris Brandow:** Dark mode for all of the things.

**Andy Walker:** Yeah.

**Kris Brandow:** I see some people with their IDE or their editor in light mode, and I'm like "What is that? I've never seen it like this. Oh, my God."

**Jon Calhoun:** The one case I've heard is that if you're presenting, it's a lot better to have a light mode.

**Kris Brandow:** Yeah.

**Jon Calhoun:** Like if you're presenting with a projector. So that would makes sense. But a lot of people who have given me that also switched to a dark mode when they're doing other stuff. So I'm like "Okay, they're switching."

**Kris Brandow:** Yeah.

**Jon Calhoun:** Then there's the people who just prefer light mode, and I'm like "I don't relate, but okay." Unpopular opinion, light mode is terrible. \[laughter\]

**Mat Ryer:** The time I use light mode is if I'm outside, and it's light already... Light because of natural light, the sun, or something. Then light mode stands out more. But...

**Andy Walker:** My editor is white. Black text on a white background. But oddly enough, I cannot use a terminal that way. I can't do it. It's got to be dark mode terminal. I tried it, I've tried making the same theme on my terminal, and I'm just like "Ewgh!" and I just stop, and I don't know why.

**Mat Ryer:** How often do you change them? Do you tend to have one style that you always use, or do you go through and you're like "I fancy a change. Now I'm gonna switch it up a bit."

**Andy Walker:** I'm very monogamous, but not that monogamous. So I'll switch it up periodically. I mean, oddly enough, I've been using the same monochrome editor theme that I made for over two years now almost... And I just keep using it. I don't know why. I guess I like it. But for terminal - no, I'm always just like "What's better than Solarize right now? What's the new thing?" I'm always looking for the new font. That's my obsession.

**Mat Ryer:** Yeah. It's fun.

**Andy Walker:** What's better on my eyes? Like, "My eyes hurt. Is it my font?" You know... \[laughs\]

**Mat Ryer:** Yeah.

**Jon Calhoun:** I feel like everybody does this, though. When I was a kid, I'd go to my grandparents' house, and my grandmother rearranged the furniture in the living room every month. And I don't know why, but it was just something that they liked to do.

**Andy Walker:** Right.

**Jon Calhoun:** So everybody has their thing.

**Mat Ryer:** It's moving house. You get to move house.

**Andy Walker:** But always dark mode. Always dark mode. I do stick with that... \[laughs\] In the terminal.

**Mat Ryer:** Well, for the sofa. For your sofa.

**Andy Walker:** Yeah. Actually, yes. Yeah. Wow.

**Kris Brandow:** So speaking of terminals - terminal emulators. How do you all feel? Is everybody here just an iTerm2 kind of person, or are you using some of the new fancier terminal emulators?

**Andy Walker:** \[57:56\] I love iTerm2, and yet I keep -- so there's this guy that I work with in the Go channel at work, and he was posting recently about his Neovim setup, and it just caught me in the right moment and I'm like "I should give that a try." And then he's like "Here's my dotfiles." And I'm like "What's WezTerm?" And so I started to look into -- because I was aware of other... Like Kitty; I used Kitty for a little bit... But I think the big thing for me, the only thing that keeps me trapped in iTerm land is the inability for me to remap command to control in anything else... Because I just, I can't do that pinky thing, and there's only the one Ctrl key on the MacBook... \[laughs\] But I've played around with WezTerm, and it's pretty friggin' cool.

**Mat Ryer:** What is it?

**Andy Walker:** It's just a really fast Terminal emulator that's got, I don't know, good keybinding support, apparently, and...

**Jon Calhoun:** Yeah, it does stuff like GPU rendering, so if you do use ligatures, it renders them very nicely, and things that.

**Mat Ryer:** It was WezTerm, with zed, if you're in the UK, or if you speak British English.

**Jon Calhoun:** The other one that I've seen pop up is -- have any of you used Warp?

**Andy Walker:** I keep meaning to. That one kind of blurs the lines a little bit though, doesn't it? It's got some interesting menu...

**Jon Calhoun:** Yeah, it's got some different stuff there. It's got almost like multi select or multi cursor type things, like you'll see in VS Code. It has stuff for that.

**Andy Walker:** So cool...

**Jon Calhoun:** It's one of those things where if somebody's new, I'm like "Yeah, you should try Warp." I've been using iTerm so long that it's like I probably could switch, I just haven't taken the effort to do it. I'm like, I need some time where I'm not focused on getting work done, and I can actually mess around with something new. But I've had it on my computer, and I messed around with it, and I'm like "I really should use this more."

**Andy Walker:** Yeah, it's like me and WezTerm.

**Mat Ryer:** Yeah.

**Jon Calhoun:** And I mentioned this earlier, but if you are using one of these, most of them have ways to do global hotkeys, and I highly recommend checking that out. iTerm especially.

**Kris Brandow:** Warp looks so cool, but I don't like that on their marketing page they're like "Powered with AI."

**Jon Calhoun:** They have something where -- I forget what it is... In my opinion, the AI stuff, at least the last time I messed around with it, wasn't that great... But I think the idea is if you want to, like, "How do I undo this commit?", it's a way of sort of asking that question, and it's saying, "Oh, here's the Git command to do that."

**Andy Walker:** Okay, that brings up a perfect intersection of my -- and I promise not to use bad language, but a tool that requires that I must... So has anybody -- I think it's just called \*bleep\*. And I'm sorry --

**Jon Calhoun:** Oh, it has the word \*bleep\*.

**Andy Walker:** Oh, The \*bleep\*. Yeah. And it's an absurd name. But basically, it's like, you just type \*bleep\* if you've messed up a command, and it'll look through your history and it'll use rules to pick what it should have been. And then just be like "Did you mean this?" and I'm like, "Yeah, I did." And then it just goes -- it's great. I've been using that a little bit recently.

**Mat Ryer:** Wow.

**Jon Calhoun:** One of the examples is you type apt, and forget the dash, forget apt-get, and you type your command, it'll look at that and say, "Oh, did you mean apt-get?" And have your command. And if you say -- I think if you said yes, or something, it automatically types that in then.

**Mat Ryer:** Wait, does it undo the mistake as well?

**Jon Calhoun:** Yeah, basically you type in \*bleep\*, and then essentially, it'll show you what it thinks the command should have been. And if you say "Yes, that's what I wanted", it'll type and run the command at that point.

**Andy Walker:** And it will -- I think it also edits your history as well, in certain cases.

**Mat Ryer:** Well, speaking of editing, I can't wait to see how the editors deal with this. We talked about we don't like --

**Jon Calhoun:** I mean, in our defense, we didn't name the tool.

**Andy Walker:** It's just so useful... \[laughs\] Well, and it's -- I mean, that's what you want to type, so they just overload what you want to type...

**Mat Ryer:** There you go, again, back into that nature. Our nature.

**Kris Brandow:** It's gonna be interesting in the show notes as well. I don't --

**Andy Walker:** Oh, I know. How are you even gonna cite? Oh, man...

**Jon Calhoun:** I'll say this... If you're in school, like high school, middle school, don't install that one. Don't get yourself in trouble.

**Andy Walker:** We need to just make an alias. It's like "the hack", or something like that. \[laughter\]

**Jon Calhoun:** \[01:02:02.02\] Just type "fudge", or something.

**Andy Walker:** Oh, heck... Geez... \[laughs\]

**Mat Ryer:** That sounds so American to me? "Oh, heck...!"

**Andy Walker:** Ah, shucks...

**Mat Ryer:** Yeah, shucks. Because they're nice.

**Kris Brandow:** Okay, so we've got a couple more categories before we go into our unpopular opinions. Build process tools. Anybody -- just plain old Go? Anybody using Make? Anybody using one of those font -- was it Bazel, or Pants, or any of those?

**Andy Walker:** Bazel scares me a little bit. That's the "Just abandon everything, and we'll just take care of it" tool. But I find myself honestly using test files a little bit recently, just to kind of fill in that gap for repeatable stuff that I would otherwise use a makefile for... Which mostly has amounted recently to combining building with logging into Elastic Container Service or something that. There's always that stupid command that you have to do, and it's like, "I don't want to remember to periodically reissue it, so I'll just put it in the makefile." So make deploy will always just do that. So I'll use task files for stuff that now, but...

**Mat Ryer:** Yeah. I quite like makefiles. They tell a story. There's a storytelling opportunity in a repo as well, because there are common commands that you need to do, and it's a nice way to communicate to other people. I don't get what that whole phony thing is that you do. I still don't know why we do that. They're like "Oh, sometimes you have to write "Oh! This is phony."

**Andy Walker:** You only have to do that if there could be a file with that same name. That's basically the only reason.

**Mat Ryer:** Yeah. Forget it. Not doing that.

**Jon Calhoun:** Have any of you used Mage?

**Andy Walker:** Yes, I've used it pretty extensively.

**Mat Ryer:** How do you like it?

**Andy Walker:** It's okay. You know what Mage does? Mage does this thing that was kind of what I was talking about earlier, with that bridging the shell gap a little bit... So they've got commands that are supposed to -- like they're target-based commands, that are supposed to be like "Do this if this is newer than this." But it's just not quite DSL-y enough in certain ways for it to like... I've found myself doing a little too I guess much with it, but it's good; it is a better experience than make for most things.

**Mat Ryer:** Because Go - they're Go programs, aren't they? It's basically a Go program that you run.

**Jon Calhoun:** Yeah. It's nice for somebody who doesn't know Bash, or is new to programming. I think a Mage files a little bit easier to start with, because if they're already learning Go, it's like, this is going to be similar. I've definitely had cases where I had Mage files for an old project, and for some reason they weren't working the way I wanted them to, and I feel like I have that less often with makefiles.

**Mat Ryer:** Yeah. You know, this is something we have as well in the exec command stuff in Go - putting every argument as its own thing, and having the command as a separate thing. It just feels so unnatural. I know that's what's happening, but I kind of want that; I want to be able to just have it as a string, and have it pause it, really.

**Andy Walker:** Oh, man... Yeah.

**Jon Calhoun:** Docker has that too, with -- what is it? The command, or whatever...

**Mat Ryer:** Yeah, you put in like an array of arguments, don't you?

**Jon Calhoun:** Like a square bracket, and--

**Andy Walker:** There's a surprising number of dragons there though, as I have kind of learned recently... You need a shell parser, and then it's like "Which shell parser?" And do you support backticks, and piping, and stuff like that? But I will say that literally every time I do anything with running a program in Go, I rewrite exec command to just take a flat variadic, and then split it up... Because I'm just, I'm not -- \[laughs\]

**Mat Ryer:** Yeah.

**Jon Calhoun:** Speaking of shell parsers and formatters, a nice little -- if you are going to write shell scripts, a nice little tool from Daniel Martí... It's just called Sh, but it has an Sh fmt, and it's like a shell parser, and interpreter, and all of this, which is a nice little quality of life thing for if you're writing shell scripts.

**Andy Walker:** In Go, or...?

**Kris Brandow:** Oh, no, not if you're just writing regular old Bash scripts; it's just a tool that you run, that will do -- so it has sh fmt, which will just format your shell script for you, in the same way go fmt does.

**Andy Walker:** \[01:06:09.26\] Oh, nice.

**Kris Brandow:** And yeah, it has a built-in interpreter and parser, and all of that. So you can do more interesting things.

**Andy Walker:** Yeah.

**Mat Ryer:** That's mvdan on GitHub. He does great work. We've had him on Go Time a few times. We should get him back soon.

**Kris Brandow:** He's one of the major tools contributors. There's a whole tools working group within Go, and he's a member of that.

**Mat Ryer:** I thought you were saying he's a major tool.

**Kris Brandow:** No.

**Mat Ryer:** I thought "That's not fair. He's nice."

**Andy Walker:** He's definitely nice. He's a really nice guy.

**Mat Ryer:** Yeah. He's a good man.

**Jon Calhoun:** Everybody just throws Mat under the bus...

**Mat Ryer:** \[laughs\] He's not coming back, is he?

**Kris Brandow:** Lightning round of the last few tools, tool categories - documentation tools. I know I use Dash... Does anybody use something similar, something different? Do you just go with pkg.go.dev?

**Andy Walker:** Oh, Dash, for sure.

**Jon Calhoun:** I only use Dash when I'm traveling and my internet's not gonna be great. Otherwise, I'm just on Google, almost always. I guess the other thing I do is -- do you guys ever just use your editor to just jump to the code? That's another thing I do a lot.

**Andy Walker:** Most of the time?

**Kris Brandow:** Yeah.

**Mat Ryer:** Yeah. If that's not available, then I would just go to Google. But yeah, that's one of the great things about Go, the fact that the standard library is open source; you can just nip in and poke around.

**Jon Calhoun:** Yeah. I find myself all the time just like, if I want to see the docs or a function, just writing it in my code, so I can jump to the definition... And sometimes that's faster than opening up any other tools, is just writing the code and jumping to it.

**Andy Walker:** Oh, I feel so much better about my life now. I was doing that the other night, and I'm like "Oh, God, if anybody saw me..." \[laughs\]

**Jon Calhoun:** I mean, with autocomplete and everything, it's so quick to do.

**Mat Ryer:** Yeah, but Andy, just because Jon does something, I wouldn't over-index on that. \[laughter\]

**Andy Walker:** That said, Visual Studio Code is actually -- I feel like I'm too old sometimes. I see other people using the -- what do you call the... Shoot, I don't even know what it's called, the bar at the top. But whatever. It's the multifunction bar.

**Mat Ryer:** Command palette.

**Andy Walker:** Yes, that's it. And you can just say -- you know, I just learned that you can type colon in there, and do the standard Vim jump to line thing. So you can jump to code using that too, instead of having to type it out. I don't do that, but you can. \[laughter\]

**Mat Ryer:** Yeah. I use that one. Definitely. To go to a specific line.

**Andy Walker:** It's so nice.

**Mat Ryer:** Yeah.

**Andy Walker:** It's one of those things where I keep telling myself - like you were saying, I just need to come back and spend some time with this one tool. I don't know though...

**Jon Calhoun:** Yeah. There's a bunch of little things in VS Code like that, with like -- I think it's Cmd+R will let you, at least with my key bindings; I assume they're not changed... But you can jump to specific methods or functions that way. So when you're talking about how do you move around without using your mouse and keyboard, sometimes it's just knowing those commands to jump to the function you want.

**Kris Brandow:** Okay. Three more categories. Real quick. Terminal multiplexer. Anybody use one? Tmux? I imagine nobody's using Screen anymore, but maybe there's some old holdouts...

**Andy Walker:** There's that new one too, isn't there? That's supposed to be Tmux, but -- oh, it has this wacky name. I'll have to look it up later, and maybe put in the show notes. There's a new up and coming terminal multiplexer as well...

**Mat Ryer:** What's a terminal multiplexer?

**Andy Walker:** Basically, it's like Tmux and Screen, they kind of arose out of the need to have multiple terminals over potentially a low-latency connection. Or keep things resident...

**Mat Ryer:** So like tabs?

**Andy Walker:** More or less... But you can also split, copy... They do tons of really amazing stuff. Yeah, so I'm a big Tmux guy. I actually have some code in Tmux. I'm very proud of that.

**Kris Brandow:** Also a very nice, useful thing of --

**Mat Ryer:** Not going to use it then.

**Kris Brandow:** The nice thing of Tmux is that it keeps your terminal alive, even if your actual terminal emulator crashes, or whatever. Which can be very nice, especially when you're on a server and you want to run something for a very long time... You just pop it in there and it's good to go.

Alright, two more. Application launchers. I'm a big Alfred user... I know there's Raycast, which is new, which I have not looked at... But do you guys use application launchers, or anything like that?

**Andy Walker:** That's like Spotlight.

**Mat Ryer:** Yeah, Spotlight on the Mac.

**Jon Calhoun:** Yeah, it's like Spotlight.

**Mat Ryer:** I just use that.

**Andy Walker:** I use Spotlight.

**Mat Ryer:** \[01:10:09.10\] It's really annoying... I've noticed on my phone, I'll search for an app sometimes, and Siri is deciding what to show. And if I've got an app with that exact name, it doesn't come up at the top. So it'll show me other things it wants me to see based on that search... And it's like, if I've got an app called Egg, and I type "Egg" into that search, I want that app at the top. That's probably what I'm after. I don't have an app called Egg...

**Andy Walker:** See, Alfred would help you, I guess.

**Jon Calhoun:** Yeah, Alfred is one of those things where you can customize a little bit more of it. It has some other stuff built into, like if you pay for it, you can get the text snippets that expand; the same type of thing text expander does. So if you find yourself writing similar sentences or whatever quite frequently, it can be very helpful for certain stuff.

**Mat Ryer:** Yeah. But you do have to learn it; it's an investment. You've got to learn these tools. Because I did have Alfred installed for a while, and I just used it to just find apps, and it was too much.

**Jon Calhoun:** I mean, that's a good starting point. There's also some things with it that can be handy, like -- I forget what it was. I don't think it's math, because I think Spotlight will do math for you... But there's different things that, where sometimes it's just really handy to give you the answer directly in the little pop-up.

**Kris Brandow:** Yeah. I've ran a few little tiny plugins to do things like converting between binary and decimal, or hexadecimal and decimal, stuff like that, which is just like -- I hate googling for that, because there's not a Google calculator that just does it.

**Andy Walker:** I mean, Fzf has been the biggest game changer for my life... And any terminal integration with Fuzzyfinder. That, plus a couple of smart selectors have just changed my life forever. I think it's like Tmux Fingers, or whatever, where it's like, you can just enter a mode where it's like, okay, anything that looks like it's important... So a UUID, or an executable, or a number or something, and then it'll just highlight those. That kind of thing has been a tremendous difference for me...

**Kris Brandow:** Oh yeah, Fzf is awesome. Okay, last category - non-development tools. So Notion, Obsidian, any of those types of things. More like, I guess, knowledge base... Any ones that you guys love to use?

**Andy Walker:** Still looking.

**Jon Calhoun:** My Note in Mac is what I use for sort of planning out big projects... Like if I'm designing a course or something big, that I have a bunch of ideas, it can be useful. I think Obsidian and those do similar stuff, but they're like Markdown files. I feel like I use that one tool to sort of organize it all, and then I end up just having Markdown files with like "Here's an outline", and then I have all individual files that I create. I use Markdown a ton, though.

**Andy Walker:** I really want to be good at those, I just can't yet. I've tried so many of them, all the way from nvALT, to like -- I was really looking forward to the sequel to that, that never came out... And I forget -- there's been several of them recently. And then for some reason, just sticking with them is really hard. And there's always like this guy on YouTube who's the guru of how to use that particular software, and he's got his workflow, and I'm just so intimidated... But yeah, let me know if anybody finds one that really works for you.

**Jon Calhoun:** Obsidian is a cool one, and there's a plugin for VS Code that I think gets a lot of what Obsidian does inside of VS Code. It's just, like you said, you kind of have to be writing pretty regularly, and actually doing stuff with it often. In my experience, if you're trying to write a book or do something that, it's a really useful tool to sort of help map out those ideas and start getting going. But if you don't have a big project like that to spend a good bit of time with the tool, it's very hard to learn.

**Kris Brandow:** A tool which I really like, which is kind of -- it's really powerful, but really easy to learn, is Bike. It's like an outliner. And it's kind of like a little bit better than a regular outliner, because you can move entire sections or chunks of things around just using keyboard shortcuts, which is really nice... It also has an optimized AutoCorrect and grammar system, so it just -- it corrects as you go, even for very large files, which is one of the things that TextEdit and other things struggle with a lot.

\[01:14:07.12\] It also does those nice little quality of life things, where for a link, it'll have the text of the link, and if you click it, you can edit it, and a little icon to the side to actually go to the link... Because that's always something that's annoying in a text editor, when you click it and you're like "I don't want to go to it, I want to edit it."

**Andy Walker:** Or worse, when it's like "This is a link", but it's not a link. Like, I click on it and I just go to edit it.

**Kris Brandow:** Yeah.

**Mat Ryer:** And Bike -- doesn't Bike also have like you can nest things quite well, and then you can open it just like a deep-rooted thing?

**Kris Brandow:** Yeah.

**Mat Ryer:** That's quite nice, because you get the sort of MindNode thing. I like MindNode, too. Anything where it's really high-level, and you don't have a really good idea of what it is; just throwing ideas into a MindNode type thing... For anyone that hasn't seen it, it's like a tree. You have something in the middle, and then you can have branches come off, and branches off that, and you can keep going forever. That is a very nice way just to get ideas out of your head, and it then gives you a place to go from. But I do that if I'm writing comedy, actually; if I'm writing jokes. Because often, jokes are really just about linking things together. And that is a great way to do that.

If you think of like "I want to make a joke about this thing, and this thing", two things - just list all the things you can in a MindNode about subject A, and then forget that and just do all the things in subject B, and then you'll see some of those leaf nodes will line up... And you can write a joke that way. That's a top tip there for any aspiring comedians...

**Jon Calhoun:** If you want something online-based, there's one called Workflowy, which I think is very similar to Bike, where you can dive into individual subcategories, and you can even mark things off if you want. It's paid though, so...

**Mat Ryer:** I noticed that I have all of these tools installed, by the way. Every single one you've just said, I have them all in, and I don't use them all properly.

**Jon Calhoun:** I used to use Workflowy all the time, and then I think their free plan changed to something -- it was basically useless, and I at the time wasn't using it enough to justify paying for it anymore...

**Mat Ryer:** Do you have a blue tick on Twitter, Jon?

**Jon Calhoun:** Do I have a tick on Twitter? No, I do not.

**Andy Walker:** I think I struggle -- I have a kind of attention deficit thing that's pretty bad, and that keeps me from using even some of the semi-structured tools... Because I'll get so far, and then I'll be like "Meh..." Or it looks too disorganized, and then I just can't -- I'm just like "Well, how do I get structure out of this again?" So I think I'm still kind of looking for that sweet spot of just -- and a lot of times I just end up with stickies. \[laughs\]

**Mat Ryer:** Yeah. Hey, we shouldn't underestimate that when we're talking about tools. Pen and paper is quite a great tool.

**Andy Walker:** Yeah.

**Jon Calhoun:** Yeah. I have a big marker board on my wall that I use all the time. So, like a dry-erase board.

**Kris Brandow:** So I have one more tool that I think is -- I like this tool for multiple reasons. It's called Muse. And one of the reasons I like it is because there's kind of a research lab that's behind it... And they're working with people like Martin Kleppmann. So if you've ever read "Designing data-intensive applications", he's the one that wrote that book, pretty famous book. And they're doing a lot of really cool things with distributed systems, and CRDT's and they're kind of baking that into this app, which is just kind of like endless nested whiteboards, basically... And it's kind of an Apple ecosystem only thing. So it's like iPads, and MacOS, and that kind of stuff... And really, it's kind of an iPad-focused thing, iPad plus the Apple Pencil... But I've found it to be just a fantastic, just really high-quality user experience for just kind of mapping things out, or reading things, and going from writing by hand, to typing up notes, and all of that... It's just -- it kind of really is a digital whiteboard in that kind of true sense, where it's just kind of you put things and you drag things around, and all of that. It's really cool. And all the tech underneath it is also pretty awesome.

**Mat Ryer:** It's cool when you can zoom in, and then you can leave some detail, and you don't have to know that in advance. I think stuff like that is really cool.

**Kris Brandow:** \[01:18:05.10\] Yeah. And you can nest boards... And they have this really nice inbox kind of a thing, where you kind of just shove something over to the side, and zoom out a bunch of levels, and then put it somewhere else... So it has all of these really, really nice, quality of life workflow things... And their user manual is just fantastic. It's all videos, and things like that. So it's quite phenomenal. So I encourage people to go check that out.

**Andy Walker:** This might do it for me.

**Kris Brandow:** There you go.

**Mat Ryer:** I also have a slight attention deficit thing, and I've got a banana. \[laughter\]

**Kris Brandow:** Alright, so with that, let's get to unpopular opinions.

**Jingle:** \[01:18:43.19\]

**Kris Brandow:** So Jon, since you might have to dip in a little bit, why don't you go first?

**Jon Calhoun:** So I have a question first... I almost want to have a poll. Anybody out there -- Mat's eating a banana, so it just makes more sense... If you eat a banana, and it has those sort of softer brown spots, how many of you actually eat that, versus how many of you cut them out of the banana?

**Mat Ryer:** Well, I just eat all of it. I'm happy completely.

**Jon Calhoun:** And I saw you eat it, that's why I was... I tend to cut them out, but I've seen people eat them, and I don't think anything of it. But my wife saw somebody do it and was like "That looks disgusting to me."

**Mat Ryer:** It's the sweetest part. It's actually delicious. But I also eat the entirety of an apple, including the core... And there's mixed -- people have mixed views on that.

**Jon Calhoun:** So you basically just -- you were sounding very sane, and then you added that last bit.

**Andy Walker:** If you actually -- if you eat it from the end, you won't even notice. \[laughs\]

**Mat Ryer:** No, I don't start in the middle.

**Andy Walker:** Well, I should say - what axis of the apple would that be? No, this is a digression. This is bad.

**Mat Ryer:** Which way is up on an apple?

**Andy Walker:** No, I'm not gonna do this. I'm not gonna do this.

**Mat Ryer:** I also open the banana the opposite way to most people, because I saw some -- on a wildlife documentary.

**Jon Calhoun:** So okay, if I opened my daughter's banana on the opposite end, she yells at me every time that it's the wrong way, even if it's easier to open there... So I'm forced to not do that.

**Kris Brandow:** I literally don't think that there's a correct way to open a banana... Especially since the bananas we eat are just completely manufactured. Bananas don't have seeds. You can't plant a banana in the ground and grow a banana tree. They're completely human creations, the ones we eat. So I don't think there's a correct way to --

**Mat Ryer:** How do we make more of them then?

**Andy Walker:** They're all grafts.

**Kris Brandow:** Yeah, they graft them onto another tree to make a banana tree.

**Mat Ryer:** I think they might all come from near in England where I'm from as well... In Derbyshire...

**Andy Walker:** Can we just talk about one second how that eating the banana from the opposite end thing is the most engineer thing ever, in my opinion? It kind of sums up this whole episode, right? Because it's like, you read that one time; it's like, "Eating it from this way is more efficient, because blah, blah, blah." And I'm like "I never knew that. Now I can do it the right way." And I just do that with everything...! My tools, my font... It's just always -- it's like my hobby.

**Kris Brandow:** Okay, Jon, was that your actual unpopular opinion?

**Jon Calhoun:** Okay... No, my unpopular opinion - I guess what I would go with today is that I think there's value in using just something like Notepad or a basic text editor with nothing installed, with programming... At least early on. I feel like it just helps you learn to pay attention to certain details, and really focus on what's there... Because I noticed that with a lot of people that are new to programming, they'll miss small, little typos or bugs that an experienced developer, it really stands out to them... And I think sometimes it's because they're so used to writing paragraphs and stuff, where your brain can just kind of skip over it and make sense of it... Whereas the computer doesn't know how to do that.

**Mat Ryer:** Yeah, I think when you're learning, I think that's -- yeah, completely valid. It depends on what you want to focus on.

**Jon Calhoun:** \[01:21:59.20\] Sure. And I say this in the sense of I don't think most people will ever do it. But I remember, I wrote Java on a -- it wasn't Notepad, it was something similar to that on Linux, that basically had no autocomplete or anything... And Java was awful for it at times, but it definitely helped me understand what was in certain standard libraries, and how it worked, and the tools that I was using for those projects, I really understood well... I definitely did some bad habits of importing an entire -- in Java, you could import an entire star subpackage type thing... So I did import way more than I needed to, but it was still helpful. It's not like I would recommend doing it all the time, but doing it every once in a while was a helpful tool.

**Kris Brandow:** Yeah. I don't know if that's unpopular. Maybe people will feel it's unpopular

**Mat Ryer:** I mean, ultimately --

**Andy Walker:** If you take it to the extreme, like I did last time, then yes.

**Jon Calhoun:** Yeah. If I say you should never use an editor with autocomplete, that would be --

**Andy Walker:** \[laughs\] Or if you're just like "Yeah..."

**Mat Ryer:** Yeah.

**Kris Brandow:** Okay.

**Andy Walker:** That was very unpopular.

**Kris Brandow:** Yeah. We will poll it on Twitter and the Fediverse, and see how it does. Okay, so Andy...

**Andy Walker:** You know, I've been thinking about this, ad I think I would probably say that for me, at least right now, running Neovim is a lot like being a Jeep owner. It's just kind of like a hobby that you're never really done with. And it takes - -you have a decent amount of time being productive, but you also have a decent amount of time where you're fiddling with it, and trying to get it right... And yeah, it's as much hobby as it is productivity tool to me right now, so...

**Mat Ryer:** So do you recommend people try it? Do you have fun hacking with it at least?

**Andy Walker:** Yeah, I've had some fun messing with kind of what's considered to be modern Neovim... But I have yet to find something that really works for me and doesn't keep breaking. Like I said, I tried Lazy in Vim, and it's constantly spamming me with notifications that things are updating, or that a command won't be installed, and it'll fail... Or even just deleting lines, and I'll get a notification that's there for just a little bit too long. So finding that right balance - I feel like what Neovim is really missing is a good standard, but fully-featured configuration that'll work with most languages out of the box, easily.

**Kris Brandow:** I know there have been attempts at that... But yeah, I feel like Neovim is -- if you do want to be tinkering, or you really want a very specific setup... Like, I have over time transformed my setup to be very, very particular... But I don't spend a lot of time messing with things, unless I'm trying to write a new language, or trying to do something else. So it's like, I kind of set it to what I want, and then kind of forget about it... But I also feel like that's bad. I don't like that, because then I kind of get stuck with things that are slightly more efficient. I don't try to change things up enough. So I'm trying to find a good middleground there, and I think Neovim kind of pushes me more toward doing that than other editors might...

But yeah, I can see that opinion, where it's kind of like -- it's definitely not your "I just need a car to get me from point A to point B." It's like "I want to maximize my time. I like to go out and do adventuring, I like to be in that type of environment." I feel it's like a Jeep owner, versus a pickup truck owner, where it's like "You're not using your pickup truck for the things you're gonna be using it for." But I feel like people that buy Jeeps are generally people that like to go adventuring, and stuff like that.

**Andy Walker:** Right. And they're always kind of tweaking it... And I'm not saying there's anything wrong with that, honestly. But if you're not that kind of person... Just -- that's something to think about.

**Mat Ryer:** I feel like that about Linux.

**Andy Walker:** Yeah.

**Kris Brandow:** Yeah, Linux is one of those things you've got to tweak a lot.

**Mat Ryer:** Yeah.

**Kris Brandow:** Okay, we'll poll that and see how it does. Mat, do you have an unpopular opinion?

**Mat Ryer:** \[01:25:56.27\] Indeed, I do. I think tools need to make more of an effort to stay simple, and don't try and solve that. We kind of touched on this, but don't get too clever. When they get too clever, they're more likely to go wrong. And one example is I've noticed go imports recently; sometimes I'll use a package, I'll say like log. something, and it will automatically import some obscure log package, and not the standard library log package, which is the one I'm after. And I don't quite know why it's doing that, and I'm sure it's my fault... But I wish it would just kind of just keep it simple.

I think anytime you've experienced AutoCorrect, or as I like to call it sometimes, AutoIncorrect, these tools are trying to help, but they just get in the way. Copilot also does this a bit. I used Copilot to play around sometimes, and it's like there's someone there trying to finish your sentences while you're in the middle of a sentence. And it's just like "No, not that." It's just guessing stuff... And it guesses things that aren't even possible. Like, "Probably these arguments." It's like "Well, no." I mean, you know, this method exists. Those arguments aren't -- they don't fit. They will get better for sure, but yeah, I don't know; generally, when tools go wrong, it's like, I'd rather not have any tools than ones that are getting in the way. I think they should stay simple. But that's not going to be unpopular, is it? No way...

**Andy Walker:** Yeah... Maybe. Maybe. I mean, there's probably at least one or two people out there who's like "I want to use GNU Parallel for everything, and that guy won't tell me any different." But... \[laughs\]

**Kris Brandow:** Okay. Well, we'll poll and we'll see. So I think I do have an unpopular opinion... This might actually be a recycled one. I might be at the point where I'm recycling unpopular opinions, but I've been thinking about this lately, and I feel like we have massively over-indexed on making it simple and easy to get into software engineering.

I feel like we have as an industry focused far too much on making it easy to get in, and not nearly enough on making it possible to stay in. And I guess what I mean by that is there's all of these nice tools and frameworks and things to get you started with stuff, and to make it really fast, and make it really simple for you to get onboarded, and for you to start being productive.

I've heard the argument a lot that it's like "Oh, well, this makes it so new people don't give up, so that they keep going, so they don't kind of get stuck." But I think the cost of that down the road is that people don't know how things work. So you start building a lot of stuff, and then people have no idea what's going wrong when it breaks, and they get stuck and they don't know what to do because they never built up that tolerance or that debugging capability to go figure out, "Oh, this is how this thing works, so I know that this thing might be wrong here. I can go look here and then fix it in that area." And I think that has done massive harm to us as an industry, so I think it's time for us to stop trying to make it easier for people to get into the industry, and time to focus on making it better to build software, especially for the more complex use cases.

It's frustrating that we have Kubernetes, and that's all we kind of have for running large-scale microservices. And I don't really know if there's anybody that like Kubernetes. The people that develop it, any developers I've talked to - they don't seem to like it. I don't think any DevOps people seem to like it. I don't think developers, or people writing the software that runs on it like Kubernetes. But it's the only thing that we have, and I think that comes from an under-investment in this kind of more advanced space... Because I think part of it is that people don't understand how the underlying things work. I mean, this is part of my own journey, where I thought I understood how networking works, and I've recently picked up the Cisco CCNA books, and I've started reading through them, and I'm like "I had no idea how networking worked."

**Andy Walker:** It's humbling.

**Kris Brandow:** \[01:29:56.08\] Yeah, and it's like - oh, the things IT people do... I feel like IT is one of the spaces that's way far ahead of where we are in software, and I'm like "We've gotta go play catch up with them." Same thing with hardware people. It's like "We've got to go play catch up with them." And I think we're still way too focused on being like "How do we just make it easier?", or other kind of oversimplification to what we're doing. I think the big argument with Rust always is "Oh, it's memory safety, it's memory safety, it's memory safety." I'm like, is that the thing that we really need to be focusing on? I think it's important, but I think there's other things that are also important that we're not focusing on, because we're so focused on this thing, and this kind of making it easier to do very, very specific things. So I think there's other fires we should be focusing on putting out.

**Andy Walker:** That's interesting. I kind of agree... I think maybe we should be making it easier to learn how the things work. I think there's certainly a lot of arcane knowledge that doesn't need to be, and there are ways to kind of user-experience it and pretty it up to make it easier to digest and learn some of these fundamental things... And I think something that -- they're not all good, but I think this is an area where things like a really good, like a Recurse Center kind of a thing, or some kind of really good bootcamp kind of thing might be able to kind of fill in that niche and kind of get... Because I wouldn't go so far as to say that everybody needs to study Computer Science. And I do think that there's probably room for two kinds of developers; kind of the people who just want to make a living and don't really care... But I also would agree that a lot of that kind of lower level knowledge is not only less known, but also maybe inaccessible, and needs to be better -- we need to be better about that.

**Mat Ryer:** So Kris, to put it into a soundbite, would you say we need to make it harder for beginners? \[laughter\] I'm trying to help you achieve the unpopular opinion...

**Kris Brandow:** Yes. If we want it to be unpop, the quick bit is "We should be making it harder for beginners", and I'll pause there, and that I will continue "by making it easier for people that are already established in the industry." And I do think that's a trade-off there. I don't think it is as simple as we can just invest in the more advanced stuff. I think the nature of doing that will likely make it more challenging for people that are just getting started, as we shift toward these more complex things. After going through even just a little bit of CCNA, I'm like "Yeah, no, every engineer should sit down and go through this stuff. They should understand how networks work." That is, I think, a very daunting task for someone that's just getting started in software engineering. But I think we're building network systems all of the time. I think it's important that we know.

I think there's other spillover too that I think people probably won't like to have to confront. One of the realizations I've made in the past couple of weeks is that there is no such thing in the modern day of non-distributed programming. All programming we're doing is distributed systems; just the thing that people usually call distributed systems is too narrow. If you're programming on a machine with multiple cores, and you're using mutexes, and atomics, or goroutines, or any of that, you are doing distributed systems programming. And there's distributed systems literature that directly addresses this. \[unintelligible 01:33:09.04\] which is a very famous concept that gets talked about a lot, and a lot of things databases try to achieve. That's actually a model for shared memory, which is a model for processors, multiple cores of your processors, that talk to the same main memory module, and making sure that all of that is synchronized. And so you're using linearizable systems every single day, you just don't get to see it. But we hide a lot of that, and we just don't teach people that; we don't frame it like that. But we really should be framing it like that. But once again, that will make it more difficult for beginners.

**Andy Walker:** Even academically though, the classic model of memory is wrong. When you're serving cache lines, and - what do they call it? Predictive execution. There's a lot to cover, and I think that it would behoove us to have kind of a leveled indexed approach to diving deep on certain things. So we just don't really -- I don't think we really have.

**Kris Brandow:** \[01:34:03.23\] Yeah. It's a thing where I think we've gotten stuck. Peter Bailis has this post on his blog from a few years back; it was like eight years ago at this point... From a few years back, where he's basically making a plea to the database community, like "Hey, we need to move forward from this idea of databases being this relational database management system. There's all these other types of database management, or data management that we should be doing, and all these different ways of creating things." And I think in our effort to make things simpler, any place that had okay definitions or okay parameters for things, we just kind of latched on and kept those things. Acid is a big one. I'm reading the Acid paper now, and one of the things about it is it was just a plea to really bring together these disparate terms, because there really wasn't any terms that were kind of bringing everything together. And it was like a, we have these terms now, and move forward. Like Acid was like "Here's a goal point. Move past it." Same thing with Cap. It's like "Here's a goal point. Move past it." And I think we've kind of got stuck on all of those things. And I think part of it is ultimately because we wanted to make things simpler, and easier. That was a very long-winded unpopular opinion.

**Andy Walker:** It's gonna be a good one.

**Kris Brandow:** Yeah. I feel like it's gonna be a little snippet at the end of the episode, too. But yeah, so this was a great episode. I think we have a ton of tools; these show notes are gonna be thick. It's gonna be great. Yeah, so do either of you, Mat, Andy, have any last words you want to say before we sign off here?

**Andy Walker:** I'll say, I remembered the name of that terminal thingy, emulator... It's called Zellij. It's almost impossible to say or type. We'll put that in there. And yeah, be sure to -- when it comes out, be sure to check out the second edition of "Go in Action." I'll say that. Manning Publications.

**Kris Brandow:** A little book plug.

**Andy Walker:** A little plug, yeah.

**Mat Ryer:** A what plug did you say?

**Kris Brandow:** A book plug.

**Andy Walker:** Book plug, that's right.

**Mat Ryer:** Yeah, definitely. Big time.

**Kris Brandow:** \[laughs\] A little fun at the end.

**Mat Ryer:** Yeah, a little bit of fun there for the adults...

**Kris Brandow:** Alright. Well, thank you, Mat, for joining me as co-host here on this wonderful episode...

**Mat Ryer:** My pleasure.

**Kris Brandow:** And thank you, Andy, for joining us again. I hope to have you back soon sometime.

**Andy Walker:** Oh, always a pleasure.
