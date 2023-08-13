**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about building a world-class developer experience. You know it when you see it, when things just feel right... But it's more than just a pleasant UI or lipstick on a pig... Which, by the way, is a saying; I haven't just come up with that myself, and just said lipstick on a pig for the first time. That's already a thing. It's not just that though; it matters though. Developer experience really matters. And we're going to dig into why that is today.

We have a great panel. Kris Brandow , my co-host... Hey, Kris. How are you doing?

**Kris Brandow:** I'm doing well. How are you doing?

**Mat Ryer:** Pretty good. I'm still getting over this cold, as you can hear in my voice... You know, people say the word hero too easily, I think, these days... But to actually still do a podcast when you're on the tail end of what was quite a persistent little cough, a little cold... You know, I'll let people decide themselves.

**Alice Merrick:** Yeah, whether that's heroic...

**Mat Ryer:** Yeah, exactly. That's up to them. Not for me to say. Well, that other voice you just heard there breaking the format was Alice Merrick from the Go team. Hello, Alice. Hello, Alice. Welcome to Go Time.

**Alice Merrick:** Thanks.

**Mat Ryer:** Alice, you were recently featured on Gophers Say, the game show in Berlin.

**Alice Merrick:** I was. That was me. I won.

**Mat Ryer:** You thrashed them, didn't you? You did really well.

**Alice Merrick:** It felt unfair. It felt unfair almost. I just know what gophers say.

**Mat Ryer:** Yeah, exactly. We polled the audience, and really, Alice spends a lot of time doing just that as well...

**Alice Merrick:** Yeah.

**Mat Ryer:** ...and was able to get into their minds quite --

**Kris Brandow:** I feel that's an unfair advantage, because your job is literally understanding what gophers say...

**Alice Merrick:** Yeah. And do. But yeah. What they say and what they do, which is sometimes different.

**Mat Ryer:** Yeah, exactly. Okay, well, welcome back. Oh, and you've been on the Go team at Google for about four years, and you work on the developer experience, the user experience of Go.

**Alice Merrick:** Yeah, that is what I do. And I've worked on other developer tools and things in the past, but for a while it's mostly been Go. I've also worked a little bit on accessibility and things that, of developer tools... So I've been around. It's an area of interest for me.

**Mat Ryer:** Good. Well, it's an area of interest for this whole episode.

**Alice Merrick:** Yeah.

**Mat Ryer:** And it's also an area of interest for Andy Walker, who is our guest that joins us today. Hello, Andy.

**Andy Walker:** Hello. It's good to be here.

**Mat Ryer:** It's great to have you back. You were just on an episode, weren't you?

**Andy Walker:** Yeah, yeah. I've been making regular appearances, a bad penny. I always turn up.

**Mat Ryer:** Yes. But you're always welcome.

**Andy Walker:** I'm also interested in -- that's not my area of expertise per se, although I do have some professional experience there as well. So I'm excited to talk about this stuff.

**Kris Brandow:** I feel Andy is rockin' the classic '80s manager at a tech company look, with the red glasses, and the mustache, getting some Office Space vibes...

**Alice Merrick:** You might need a tie, you know, and pen pocket protector.

**Andy Walker:** This is my Santa Fe shirt.

**Mat Ryer:** Yeah, it's very cool. You need a tie, or at least a shirt that has a tie...

**Andy Walker:** printed on it?

**Mat Ryer:** Yeah. That'd be good.

**Alice Merrick:** Yeah. With a pocket protector.

**Andy Walker:** Oh, man...

**Mat Ryer:** Otherwise, you've got these unsecured pockets. It's dangerous stuff. Okay, let's get into this then. What do we mean by a developer experience? What literally is that, and why does it matter?

**Alice Merrick:** Yeah, I mean, I can talk a little bit about that, if you want somebody to jump in...

**Mat Ryer:** Yes. Generally, Alice, just jump in. No need to --

**Alice Merrick:** Just jump in?

**Mat Ryer:** Yeah, go for it.

**Alice Merrick:** Alright. Yeah, so typically, user experience is what you think about as the experience of the people who are using the thing that you're building. So maybe you're building a consumer end product, or an enterprise product, and you think of the people who are buying that or using that as your users. And maybe you're thinking about how easy it is for them to get something done, maybe you're thinking about how productive they can be, or how happy they are using it. And so that's typically what we think about when we think about UX.

But when it comes to developer experience, sometimes we forget that developers are actually users, too. You're using

tools that other people build for you, or design for you; you're using languages, and platforms, and there's a whole ecosystem around that. So don't forget that even as a developer, you also have an experience of either building things, and using tools, and collaborating with other people... And that's just as important to getting things built, you know?

**Mat Ryer:** Yeah, I think that's a really good point that you make, because the whole web 2.0 movement sold us on user experience having to be good. And actually, sometimes you see products beat other products just because the experience is better. It doesn't even necessarily have as many features or whatever. In fact, sometimes that can be how they do it.

But I guess we've in the past neglected maybe development experience, because we assume a pro user - you know, they can get into the command line, and they can even look at the code if they're not sure... But I don't know, the times when I've had projects that have been successful has always been when we've paid particular attention to that developer experience, from the very first -- how they discover your product, or project, how do they get going with it, how much investment do they have to put in before they get some payback from it, and how can we reduce that stuff.

The episode that Andy was on last time was about tools, and this came up a lot, didn't it, Andy? The actual experience of using the tools often was what made us them.

**Andy Walker:** \[06:34\] Yeah. One of the primary examples was some of the suite of command line tools from Charm, who pay particular attention to their design. The term that I keep finding myself using is something-ergonomics; developer ergonomics, or visual ergonomics... Things that more than just convey information, but do so in a comfortable, and I guess more importantly intuitive way, and can have ideally some sort of multimodal experience, if at all possible. Yeah, that's really interesting stuff.

**Mat Ryer:** Yeah, what do you mean multimodal experience?

**Andy Walker:** What I mean is basically -- so we talked about this a little bit last time, but I've read a while back that our brains are not as parallel as we would them to be. They're really very serial. And so there's only this small window of experience that we're going to be actively conscious of, and having discursive reasoning about at any one time. Whereas there is this entire wide bandwidth input of other senses, of other stimulus, that nonetheless will shape our experience in ways that we may not be actually consciously pondering at that time... And so as much of that as you can kind of take advantage of I feel is a good thing.

**Mat Ryer:** Yeah. So in tools, this is -- if there's already a standard pattern for something, go along with that pattern; you have the inertia of people already using it, and you get to then take them with you and you get a head start. And I think a lot of the Unix tools and the way that you can pipe things together - these became very familiar.

But I think it also applies in Go when you're writing APIs. That's a developer experience, of course. So the Go interface, and the thing you expose in your package - that is also a big part of developer experience. And yeah, how can you get that to be also as good and as slick and as simple and as clear as possible?

**Alice Merrick:** Yeah. And just to add more to - you know, now I think we've established what it is... Why it's so important is - I mean, that's what allows you to build things either at the speed that you need to, or with a high level of impact, or satisfaction... You don't necessarily want all the developers in your organization to be unhappy, or to feel they can't accomplish the things they want to accomplish... And if your end product, if your product is a developer tool, then for business purposes it's also very important if you have a poor -- any kind of poor UX, that's not going to necessarily be the best-selling tool out there, or the most used tool out there. So yeah, just to add on...

**Kris Brandow:** I think for tools as well, especially tools that developers use a lot, even small changes to the UIs or the API of it can have massive effects that I think also are generally not accounted for by businesses well enough. I think maybe a good example of this is how there's still a huge number of people that use old.reddit.com, for people that are still using Reddit. And it's because they just got so used to the way that everything worked in that flow, that the new one just doesn't work for them. And I think there's lots of little examples of that with tools, where it's like "Oh, we did some research, and here's a new UI that's gonna be this much better." And everybody's like "Oh no, this is actually -- it's gonna mess me up. It's gonna take me a long time to learn this", and the trade-off just isn't as worth it.

**Alice Merrick:** \[10:22\] Yeah, that's actually an interesting problem that you just brought up called change aversion, which we don't have to go into a lot of detail now... But basically, that is the notion that anytime you change something, people are going to be averse or have negative feelings about it, just because it's different. Even if it is better in some way, they are going to have some negative feelings about that. And it can be hard to tease apart whether or not it was because your design change was actually a poor design choice, or whether it's just like "Well, it's just like this initial change aversion, and eventually people will get over it", or some people will get over it.

**Andy Walker:** Yeah, it has a surprising source sometimes, I think, too. There's a bit of a perverse incentive to keep driving innovation and change for it, especially for software that doesn't have -- like, it's sad, I know, but this is something I heard... My girlfriend works for an architecture software company, and a lot of that world of very niche software, if they don't have a subscription model especially, they often feel compelled to make these big changes so that people will upgrade. And so then you get a lot of these "Oh, we researched this, and it's so streamlined now", and it's just kind of funny to me, because I do believe that there are, or have been some nearly perfect UIs in the past that just got ruined by being rehashed.

**Mat Ryer:** So does this mean we're trapped? Like, whichever version of your software that gets popular - are we trapped in that moment?

**Alice Merrick:** Yeah. You can never make any changes, ever. \[laughter\] No, I don't think so... But the thing is, you do have to be sensitive, and you do have to make trade-offs. And one way that you can look at whether or not it was actually a good design choice is by looking at people who are new to that tool or product, and comparing between "Hey, are people who are new to this - do they think that this is the best thing since automatic sliced bread? Or are they also struggling?" Because if people who are new to it are struggling as much as people who are like "Well, now I have to unlearn the old thing", then that's when you know you have problems.

**Andy Walker:** So somebody who's a little bit -- well, who's way more involved in this professionally than I am... It makes me curious - is there some sort of decent or objective measure for, say, time to fluency that you can use in a case that? Just kind of curious.

**Alice Merrick:** Yeah, you could absolutely set up a metric for success that was like "We need people to be able to start using this. They need to be able to get up and running in one day." And if people are meeting that, like if people can accomplish whatever goal that is in one day, then boom. Yeah. Then it's a success. But if it's taking people longer than that, then okay, we might need to rethink either our success metric, or rethink our design.

But yeah, I mean, is there a gold standard of "Oh, everyone should be able to start using a thing in one hour, or one day, or one month, or one year?" No, not really. It depends.

**Andy Walker:** Right. I was just curious if you'd run across anything like that. I would imagine that if you've dealt with these kinds of experience in accessibility changes or overhauls before, there's got to be some measure that -- because it can be very deflating as a software developer to spend a lot of time on something... You know, workshop it even, and then coming out with it and people don't like the new experience. They want the old experience back. Or worse than deflating, it can mean that you lose buy-in, or something like that.

**Alice Merrick:** \[14:15\] Yeah, there are things you can do to make it a little easier...

**Andy Walker:** Yeah. See, that's where we're going with this.

**Kris Brandow:** Yeah. There are things that you can do to help people adapt to whatever the new change is. Because sometimes a change is necessary, especially if it's like "There was a security issue here." We can't always have things remain the same. Sometimes things really do need to change.

**Mat Ryer:** Like for example if they forgot to make the password box hide the actual password, and instead it spoke it out loud.

**Alice Merrick:** Yeah, that would be real bad.

**Mat Ryer:** Instead it spoke it out loud. Just one of those classic bugs.

**Alice Merrick:** It's like "Oh, that's how I entered my password before, I would just say it out loud. It would text-to-speech it for me" or whatever.

**Mat Ryer:** Yeah. It's gonna make some people angry.

**Alice Merrick:** Yeah. \[laughs\] You're gonna break somebody's flow there, yeah. I mean, and depending on what it is, maybe you've got some tool that migrates your workflow from this tool to this tool, or something. Or maybe you have -- I see lots of "That hasn't worked well for me in the past." But there are things that you can do. You can have documentation of like "Here was the old way, here's the new way. Here's why we changed it." You can also have a "Hey, try out the new way, but without deprecating the old way yet." And then it's like, you give people a really long, like "Alright, you've got one year. You've got six months." Or you can go in between them to explore, while they're still maybe iterating on the new design, or whatever. It doesn't always have to be a very "Alright now everyone -- everyone was using version two. Now everyone must use version three tomorrow." That would be a disaster.

**Kris Brandow:** I feel like there's also -- I guess to extend what you said there, I think there's a business perspective that often gets missed, where it's just like, you know, if we are building a new thing, we should be prepared if people don't like it, and we need to keep the old thing alive. I feel like that happens a lot with greenfield projects, where it's like "This old thing is terrible. We're gonna do this greenfield thing. It's gonna be better. We're gonna launch this new thing", and then you're still stuck having to maintain the old thing and run it for seven years, because you didn't anticipate something... I feel like the same thing happens with a lot of user experiences or interfaces and things that, where it's like "Oh, we thought that we'd just be able to replace the whole thing, but we didn't actually understand our users enough, and how they use our product to actually be able to pull off this migration or this change."

**Alice Merrick:** Right. Yeah, and that's the importance of having a UX kind of baked into your process there, so that you're not building a thing for no one.

**Mat Ryer:** I think I have the opposite of change aversion. I love it when things change, and it's hard again. I like quite hard things that I then have to spend time and kind of figure out.

**Alice Merrick:** So you must change your key bindings every day then.

**Mat Ryer:** Well, I changed my keyboard a lot... I do have now a new keyboard that I got... This is a Keychron Q10.

**Andy Walker:** I built one of those.

**Mat Ryer:** A Q10?

**Andy Walker:** Well, and \[unintelligible 00:17:22.04\] Yeah. I actually have Q10 as well.

**Alice Merrick:** What kinds of things do you like to see change? Because I imagine there are some that you wouldn't want to change.

**Mat Ryer:** Yeah, I like fonts to change. I love a different font. It gives a whole new meaning to the code... No, the code meaning stays the same, but it looks different. Colors... Changing the colors in the IDE... I think that's quite a nice way to sort of freshen up your life. Some people have got -- I don't know, interests that keeps their life interesting.

**Alice Merrick:** Yeah.

**Mat Ryer:** But if not, changing your IDE colors is a great way to... It's like a fresh lick of paint in your office.

**Alice Merrick:** \[18:05\] Yeah. It's kind of like fashion. We wouldn't want to keep wearing the same things we wore in 1998.

**Mat Ryer:** Yeah, Andy...

**Andy Walker:** You know, it's funny that you call me out here, because on the one hand, I rotate fonts like I rotate crops in a field. But on the other, I do -- I mean, another thing that I mentioned the last time is that my life was just changed forever when I learned that the default for, at least at the time for MacBooks was to have non-integer scaling... And if you just ticked it up one, you could get crisper pixels again... But I still miss Bitmap fonts. It's just they're not really possible to get anymore. I tried to make my own, and to moderate success. But yeah, it's interesting. I do kind of still pine for that old sort of crispness in fonts, while at the same time just basically continuously searching for the perfect font for me.

**Alice Merrick:** We'll have to do a font episode.

**Andy Walker:** Oh, yeah. I'm 100% in.

**Mat Ryer:** Yeah, a podcast episode on fonts. Yeah. Definitely. \[laughter\]

**Kris Brandow:** Or maybe an episode about typography... Because I was actually reading this article -- I was down this rabbit hole of Fediverse stuff. I was reading this one... I think it's \[unintelligible 00:19:21.12\] I think is the website. But he had this post about how he made his website super duper fast. And one of the things he mentioned is that he had first started with web fonts, but then decided to go with system default fonts. I was like "That sounds like a terrible idea." But then he's like "It's not the font that matters that much. The font matters, but not as much as the rest of the typography, and all of the other changes that you want to make the thing more readable." And I was like "Oh no, that's brilliant." Yeah, do all this stuff in CSS to make it so that it's a good reading experience, and then just use default fonts and make it so people can configure pretty web fonts if you want, or nicer web fonts. But I was like "That's a good piece of advice right there."

**Alice Merrick:** And if it makes it faster, then that might be a better experience.

**Kris Brandow:** Yeah, yeah. Not having to load as much web fonts... And also not have the user experience of like the flash of unstyled content, or like it's one font, and then it shifts to another, and it messes up your scroll position, and all that... All this stuff is real annoying, and if it's just a system font, you don't have to worry about that. And system fonts these days are pretty good. Helvetica is not a bad font. It's a pretty nice font. Or I guess typeface; the font is the -- whatever. Pedantic. But it's a good typeface.

**Andy Walker:** It's really about contrast, as I understand it. I started this project a while back to make the most science-backed color scheme I could come up with... And I reached out to a bunch of ophthalmologists, and I basically looked up papers and wrote to people, and I ended up getting a couple of people to write me back. And they were like "Look, it doesn't matter what your base color is. It matters how much contrast you have." Black text on white, white text on black; one may or may not be objectively better than the other, but not really. It's really just about contrasts. And after that, WCAG guidelines and all that.

**Alice Merrick:** Yeah. Yeah, I mean, of course, there are some colors that are easily seen by people who are colorblind, and things like that. Some levels of visual acuity might require higher contrast, so you want to make sure you're ticking all the baselines. But after that, then yeah, it is a matter of taste, and also a matter of fashion, because these things also change over time.

**Mat Ryer:** Yeah, I always like to store my secrets, I always write it down in non-colorblind-friendly colors just in case the person spying on me is colorblind.

**Alice Merrick:** Yeah, you never know. One in eight people won't be able to read it.

**Mat Ryer:** It is more secure than whatever it is you're doing, Alice, with your secrets.

**Alice Merrick:** \[22:00\] \[laughs\]

**Mat Ryer:** I don't know what you put in them.

**Alice Merrick:** I don't write mine down.

**Mat Ryer:** Ah. Clever.

**Alice Merrick:** They're a secret even to myself.

**Mat Ryer:** You don't even know them?

**Andy Walker:** She knows them in her dreams, so she's gotta --

**Mat Ryer:** It's a good place to store them, to be fair.

**Alice Merrick:** Yeah...

**Mat Ryer:** Can't rely on it though.

**Alice Merrick:** So there are a couple of things that we mentioned... I don't know if we want to move on to talking about what actually makes a really good developer experience. There was something that we mentioned is a good visual design, but you don't always have visual design, especially if you're using maybe just a plain command line tool... But we talked about speed. That was another thing. Something that is fast. You want it to be responsive. You don't want to wait for something to just load, to show you some animation. Like, "Oh, look, it fades in and out", or whatever. But yeah, I'm curious any of your other thoughts about what makes a good developer experience.

**Mat Ryer:** I think if it's one way you can guess, and generally make a good -- like, you can make good guesses, I think that's great. I'm a big believer in documentation, but the goal of an interface for me is that you don't need the docs, because it's clear... Or you can guess in a safe way, and you've communicated that yes, you might be able to click this Delete thing, but you can undo it, or it puts it in somewhere else. If you can sort of show that, let people try things. Those kind of tactile experiences are...

The one that winds me up the most is the cookie pop-up; the annoying "Accept my cookies" thing. It's so annoying. And you've got like Accept, Reject... Sometimes I accidentally -- I ran out of time, I was in a rush, and I got into some advanced settings of the cookies thing now... Do you know I mean? It's just like...

**Alice Merrick:** Yeah, you have the option to accept the default, just accept all the cookies, whatever they want to give you, reject them all... Yeah, or select which ones, and get it in there.

**Andy Walker:** That's a hostile user interface, as far as I'm concerned. Deliberately so.

**Alice Merrick:** Yeah, it really is, in my opinion. I think that something needs to change there about what the default options are.

**Kris Brandow:** I especially hate the ones that are gigantic... Because sometimes I'll be on my phone, and I want to preview a link, and in Safari you can just hold down a link and it pops up. Like, I want to see the whole title for this article, so I'll hold it down... But then the entire thing is blocked by this gigantic, for some reason, cookie consent form. And I'm like "Why? Please stop." I don't want to have to navigate fully...

**Andy Walker:** Very deliberate.

**Alice Merrick:** Yeah. And part of it is a legal issue, is I think that is why we have that.

**Kris Brandow:** Yeah. Was it the EU? It was like California and the EU were like "Oh, there's --" It started with just the cookie consent things, where it's like "Oh, you have to tell people you use cookies." And I feel like every UX person was like "Great, now you've just taught all the users to just randomly click OK on something to make it go away on the page. This is terrible." And I was mad enough about that. And now there's this other thing that's like "Oh, please configure our ability to track you", and whatnot.

**Alice Merrick:** Yeah...

**Andy Walker:** I would like to say one more thing about good developer experience, to pivot off what Mat said; it made me think of us. To me - yes, obviously the interface that is 100% intuitive is best. And also related to APIs. With a good IDE, there is a -- combined with good design, there is a kind of API ergonomics that dovetails with documentation. So I know I need to do something with this auth policy here, and so then I just type a dot... I do this all the time. And then if you get a good, intelligent list of completions, you can very quickly make something quite complex that you've never seen before, and understand what it does just by little piecemeal docs, as you kind of go along. To me that is almost perfection. To me it's actually even better than some of the AI autocomplete stuff, because it sticks more. The tiny little steps you have to go through, just looking at documentation really quick, each section - you remember more. It works better.

**Mat Ryer:** \[26:27\] Yeah. I completely agree with that. I also like documentation that is interactive in some way. And I've built a few of these before myself, where we would teach you about this -- there was a particular product, and it had an API; it was an API. That was the tool; it was in a Docker container. And we would teach you about the API by letting you actually use it. And you'd sort of follow a story. So it was like a story told. And then it's like "Okay, so we're going to try this thing first, this empty box, and it doesn't know anything, and then we're going to teach it something, and then we're going to see that it's learned that." And each of the steps, you get back a payoff. So you invest a bit of time, and the deal was you invest some time and it will pay back with something fun, or interesting. Some kind of progress. And that worked out really well. We found that people would just go through the flow because it was fun and enjoyable.

I think sometimes just tweaking language, like the way that you communicate, and the tone that you communicate with people can sometimes make a big difference. But we're building for an international audience, so it's tough to get that right, probably.

**Alice Merrick:** So was the API itself very usable? ...not just the documentation, but was the API itself?

**Mat Ryer:** Yeah, well, in a way this was designed from the perspective of this story. And it's a bit how TDD can sometimes drive your design... It often drives the design of what your package is, and what you're exposing. Almost like a document-driven thing. This was the way that people would learn about this API, informed of what the API design was. And I think that's also -- it's a bit of applying sort of UX principles generally... Like, think about the user, what are they doing, what are they feeling at this time as well. I'm working on an incident tool at the moment in Grafana Labs, and incidents are a time when people are really stressed out. So we have to deliberately be a much simpler tool to use than some of the other pro tools that Grafana has. And it's really about understanding what people are doing, what they're feeling in that moment... It sounds like -- when I started my career, thinking about how people are feeling using the software would have sounded a bit like...

**Alice Merrick:** Like woo-woo.

**Mat Ryer:** Yeah, I wouldn't have perhaps respected it as much as -- like, it's paramount, really. If you can cheer people up, if you can solve the problem... We know we get joy from this stuff. It's fun.

**Kris Brandow:** Yeah, I feel like that kind of idea is what made Swagger, now OpenAPI, so popular. It was like "Well, here's really good-looking documentation that you can just run." And I think there's a lot of advantages to that sort of thing if you do it right. I think a lot of people do all of it very poorly. They'll give you a specification that doesn't even work. It'll be like "Oh, it doesn't run through the validator properly." But I think when you do that well, it does feel like this easy experience, getting acquainted with even what can be a complex API, because it's just like "Oh, here's some examples. Here's what to expect." And it guides you to all the information you need to provide to someone to actually be able to use the thing.

**Andy Walker:** Yeah, structured representation of information can go quite a long way, at least in aiding understanding.

**Mat Ryer:** Yeah. Andy, I can't imagine what your life's like.

**Andy Walker:** What do you mean?

**Mat Ryer:** Just like you going about your day, doing normal things. I can't imagine it.

**Andy Walker:** \[laughs\] Yeah, well... Neither can the people that live with me. \[laughter\]

**Mat Ryer:** \[30:05\] Just imagine Andy just like "Oh, I'm gonna go into this bookshop, and then I'm gonna go into a coffee shop, and just do some normal things." It doesn't compute, for some reason.

**Andy Walker:** No, I'm always -- I guess for me there's always this underlying sense that I could be doing better. Or I don't know, I can't stop thinking about both the intersection between the way that we have built the world, and the way that maybe... And all of this stuff that we're hardwired to take in, and how to pay attention to that, and use that heuristic stuff a little bit better. Yeah. It's really interesting to me.

**Mat Ryer:** No, yeah. Well, that's like, using data to make these decisions is an interesting point. And Alice, what are some of the things that you hear the most about Go's user experience and developer experience?

**Alice Merrick:** Well, I mean, lots. Where do I begin? I mean, I could talk about reasons why -- what people like about Go. People say it's very simple, it's easy to learn, it's easy to deploy everywhere... Oh, a single executable, I can put it -- it's just easy. Some people also really are into `go fmt`, and the fact that "Oh, hey, actually, it's really easy to maintain this, and have a shared codebase with somebody when all our code looks the same."

So the language, and then also the tooling, those are some of the things that we hear about as far as really good experiences are going. If you have more to gush about on the Go developer experience, I'd love to hear it...

**Mat Ryer:** Yeah, well, I do think it does a good job... When I learned it, it was all very low-fi; it felt like a small open source project. So it was static sites... And actually, all that stuff in itself was also very simplistic, which mirrored really Go, and was what attracted me to it, honestly. I think the fact that we have the in-browser playground I think is really cool. You can just go and start --

**Alice Merrick:** Yeah, I want to hear about that. I am so fascinated into how people use this, and why. Because something I've found out recently is that actually a lot of the traffic to the go.dev website is for that playground. And I have very little understanding of what people are using it for. But I have heard that people use it to possibly share code snippets with other people... But how do you use it in your day to day? Is it something you learn to use, or experiment, or what's going on when you're using that?

**Mat Ryer:** Yeah, I actually use it to sketch out ideas sometimes when I'm talking about things... And sometimes that can be collaborative and sometimes not. It's quicker to open the playground than it is to create a file and go and edit it, especially if I've got already tooling, and IDEs and stuff around. I can't just go and easily create a file in there and make a mess, because then it's like "Oh, it doesn't build any more.

**Andy Walker:** Isn't it amazing, too -- I use it all the time. And I've deliberately tried not to. I've tried to set it up in such a way that I don't do that.

**Mat Ryer:** What, you blocked it? Like, put an adult filter block on it, or something? How have you stopped yourself from using it? Trying to wean yourself off?

**Andy Walker:** \[laughs\] Yeah. I mean, if you really think about it, it's a completely different experience. It doesn't do any -- I mean, it doesn't bother me, but it doesn't do any syntax highlighting. It's basically Acme; it doesn't do autoindent until you save it or run it... It's just a completely very bare-bones experience. And so I've actively tried to like "Okay, how do I get this? Why do like I this, and how do I get it in a way that's similar to what I'm actually doing?" And I still end up using it for quick one-offs, or if I'm brain-farting about syntax, or whatever, I'll just open the site and type things in. I don't even care that it's not getting indented. I'm like "It'll be fine."

\[34:21\] But I think you're right, basically the ability to more or less click a button, and then that's it. It will run. And if there's something wrong with it, you'll see it; it's pretty valuable. And of course, the reproducibility too is nice. It's fast, like you say, and it's just there.

**Kris Brandow:** I feel like it's the equivalent of a scratchpad. Sometimes you're working on something and you just need a little scratch piece of paper to write something down on, and I feel like if you wanted to do that locally, you would have to commit to a file somewhere. You have to put it someplace. And that just pulls you out of whatever you were just trying to do. You're like "Oh, well, where am I gonna go put this? Oh, I've gotta name it properly. How do I run this thing again?" So you've gotta go run it, especially if you have a folder where do you put all these things; it's like, "I've gotta go run this specific file."

But with the playground, it's just like, no, I just open it up, type play dot whatever-whatever, and then I'm off to the races, and I can run it, and then I can go back to whatever I was doing. It's a very tight loop, and I can just throw it away when I'm done and there's not this commitment that I have, that I would have with something else that I want to use.

**Andy Walker:** And it drops you right into main, right? Everything's -- like, you're ready to go. You're just there. You don't even have to type a skeleton or anything. You can just start...

**Kris Brandow:** I don't even have to name the thing. It's just boom.

**Andy Walker:** Yeah, yeah.

**Alice Merrick:** So Andy, you mentioned that you tried not to use playground...

**Andy Walker:** Yeah.

**Alice Merrick:** And I'm curious, why not? It sounds like it's great.

**Andy Walker:** No, it is. It's just that it does have shortcomings. First of all, it's more than just exploratory, like, if I'm dashing off a syntax idea, or something involving the rules of the language that I want to mess around with or test. If it involves a library, if it involves anything that, then it takes longer. If I want to do an example that uses even more than one file, anything like that... Or even an example that crosses package boundaries, there's this abstruse syntax that you have to use to do that kind of thing. So that's when I've wanted something similar... But there's really nothing that does it quite the same way.

**Alice Merrick:** Yeah. I'm curious, is there anything about it being in the browser itself that is vital to the experience? Or if you could do this locally in your IDE... Like, what if it was easy to just create a piece of scratch paper, as you will, in your favorite editor? Would you do that instead?

**Andy Walker:** Yes. As long as it had some kind of -- even if somewhat limited persistence. Because there is a mode of working. It's the coding equivalent of having -- like being the novelist who has a bunch of sticky pads, or whatever. There is this mode of working like that, and you need that kind of permanence of it there to refer to... But yes, I absolutely will.

**Kris Brandow:** Yeah, I think that's the nice thing about the playground, is that you can, if you want to, save it and put it somewhere. Yeah, I think you hit the nail right on the head there, Alice, because I was just thinking about how it'd be a cool thing to build a tool that's literally called Scratchpad, or whatever, that is this thing, where it's just like "Oh, I want to just get something out real quick", and it lets you do that quick, like, "I'm just roughing out some syntax", or "I'm just trying to figure out what I mean here", but it could also, to I think your point, Andy, make it so you could extend it a little bit further to bring in external packages, and maybe even bring in things that you have locally, so that you can do a little bit more - not getting all the way up to a full IDE or full editor, but kind of fit that space.

\[38:13\] Because I do think there is a gap that exists right now, where it's like "Well, I want to use this, but I want to import another package." And technically, the playground does support it, but there's there's a lot of limitations around that. So if I could just have that locally, and have this little space be filled, I think that would be great. I think it'd be the equivalent of what Jupyter Notebooks or Python Notebooks gave for a lot of data scientists and people that; or what REPLs gave for a lot of languages, where it's just like "Oh, I can just start roughing things out." So it's a little bit like a REPL for Go, but a little bit more robust.

**Andy Walker:** Yeah, I've got a script that gets me pretty close. I have a very robust, literally dev/scratch. And everything under scratch - I mean, most things under scratch - is a single directory that has a go mod in it. And it's just something I wanted to screw around with. And so I have a script that will create a new scratch, initialize the go mod with the name of the directory, create a main format, and then open code, and drop me in there, and it'll jump to the first line. That's pretty close.

**Mat Ryer:** Nice.

**Alice Merrick:** There you go.

**Mat Ryer:** You should open source that.

**Alice Merrick:** Have you shared that with anyone?

**Andy Walker:** No, I never have. I really probably should.

**Alice Merrick:** There you go. Look at us, doing UX work and covering gaps in the community tools that apparently already exists, but Andy is hoarding them all... \[laughter\]

**Kris Brandow:** I really want -- I want Charm to make this, because then it'd be absolutely beautiful... But I also -- I guess another idea of this, I wonder if you could just integrate this into gopls, and have this be a thing an LSP can do, so you could just do it from your editor. So your editor could open up a new window, or buffer, or whatever, that's just like boom, ready to go, and you can just start scratching, doing all of that notating, or whatever you're trying to do. And then choose to save it, or whatever; or get rid of it. Maybe keep stuff around for a day, or whatever; you can configure it. And it garbage-collects... You could really integrate this. But that would be a real nice thing, because then all of the editors that already integrate with gopls, it's like "Oh, it's already there." So you don't have to go into some other editor or go into some other thing. I mean, it's kind of easy to do this on the command line, because you'd just be like "Oh, what's your editor? I'll run it for you there." But if you're using VS Code, or GoLand, or whatever, it might be a little bit more difficult. So LSP integration.

**Alice Merrick:** You have to bring this to the gopls team.

**Mat Ryer:** Yeah, we're just pitching things we want to Alice now.

**Alice Merrick:** Yeah, there you go.

**Mat Ryer:** A bit of a bait and switch...

**Alice Merrick:** Yeah, the tables have turned. You thought I was joining your show; you're joining mine. \[laughter\]

**Mat Ryer:** No, I just research people...

**Break**: \[40:52\] to \[42:55\]

**Mat Ryer:** The Go backwards compatibility promise that you have that extra constraint on the user experience - of course, you have to always bear that in mind... And usually, we have to live with our legacy decisions. That's a great example of that. But I was interested in what mistakes we can do, or what mistakes happen a lot, or things we can do to avoid them, if there's any common sort of pitfalls, or bits of UX that we don't like. We talked about the cookie one as well... I think another is where products add loads and loads of features. And then - yes, it's more powerful, it can do all these things, but it actually becomes harder to use, because these features are now sort of in your way if you don't need them.

**Alice Merrick:** Yeah. And then you might have to deprecate them, and that would violate somebody's expectations.

**Mat Ryer:** It'll annoy somebody, won't it?

**Andy Walker:** Orthogonality is important. You can have so many features that have so much overlap, and then, you know...

**Alice Merrick:** Yeah. I mean, one thing you can do is not add so many features to begin with, which -- okay, so I understand the desire to just keep building things. And building things is fun; building things that are really cool. And people like new features. So there is a lot of a desire and drive, internally and externally, to build more features... But you really have to put a very critical lens on before you build something.

One little allegory we like to give is if you ask somebody what flavor of ice cream do they like, or what flavors should we have available, you're gonna hear every single flavor. Everybody wants every flavor of ice cream that you can conceive of. But you can't just give everybody whatever flavor of ice cream they like. You might have to limit this to what are the top three? And maybe you go by preference; maybe you also go by "Okay, dietary restrictions. This is a common allergen, so maybe we don't use the peanut one. Or maybe we have a dairy-free option as well." So you can put different kinds of criteria on how you select for what features or things you're going to make available. And part of it can be accessibility, part of it can be what is the core task of the tool... It can be helpful to just really focus on the core -- we to call them \[unintelligible 00:45:25.05\] but you can also think of them as like jobs to be done, user journeys, things like that. You have these core tasks that you want your tool to be able to do. And you want that tool to do those things as good, and have the smoothest, most frictionless experience possible for those core things... And you can sort of limit some of that other stuff... Because if somebody's like "Oh, well, I really want to be able to do this", it's like "Yeah, I know you want to be able to do that. But that's not what this tool is for. That's a different tool. And you can happily go build that tool. We would love that tool to exist. It's just not our tool." So there are ways that you can do that... But yeah, I mean, I do see that happen all the time with feature creep... Like, "Oh, it can do everything."

**Andy Walker:** \[46:11\] Yeah. So I have a couple of really interesting things that you made me think about there... The first thing that occurred to me is I think there's also a temperance that comes experience, to a degree. I mean, I think everybody craves the joy of forging forward new creation, and stuff that. But the more that you do this work... Like, I used to be a big Perl developer, and I couldn't tell you the number of times that they would start something, add some feature, and then "Oh, no, that has some weird cross-side-effect thing. We're deprecating it." So this thing that was this new core, shiny feature that I loved so much, two releases later it'd be deprecated. And then eventually it's removed, because it just had too many side effects.

Over time, you start to realize that the more things you add, the less orthogonal they are, the more complicated things become, and very quickly in a Frankenstein sort of way the joy of creation can turn to horror.

**Alice Merrick:** Yeah.

**Mat Ryer:** I do think there's something in that also thinking about what problems can be solved in user land... And is there something you can do which unlocks a lot of other capabilities? That definitely resonates with me, where if you can enable -- developer tools especially are trying to enable people to do things. Is there something you can do in your design to enable more of that? And that's just a worthwhile question... It's nice to solve your specific problems, but if you can find an abstraction that just fits perfectly there - I mean, that's really the goal; that's when you struck gold.

**Kris Brandow:** I have an analogy I feel like might also fit here, where I feel like features are a bit like sugar or fat, where you need to have them; you need to have them to live, but the delivery method of them is what matters the most. You want to make sure it's balanced, you don't want to have too much of it. Sometimes it might be good to deliver your sugar as junk food, and we all kind of like that. But if you can't make your entire diet out of junk food, or you don't want to make your entire diet all sugar, or no fat, or remove all the fat and only have sugar. I feel like features are quite a bit that.

And I feel like especially for like the old model, before we had this nice subscription model where you had this nice stream of like "We can slowly give you features", you know, the Big Bang thing... You had to really put in a ton of equivalent sugar and fat into that to get people to actually want to eat the thing, because it was such an expensive purchase, as opposed to these nice subscription models where it's like "Okay, I'm paying for over time now, but now the company doesn't feel the need to push all this extra stuff on me to incentivize me to consume it."

**Alice Merrick:** Yeah, that's really --

**Andy Walker:** I have a question.

**Alice Merrick:** Go ahead, Andy.

**Andy Walker:** It's for you, actually. So here's the thing... I was thinking about this recently, because creating new features is great and everything, but to use the food analogy, you can spend your life perfecting an omelet, or something very simple... And I think it's easy to forget that there's a lot of work that can go into very subtly adjusting and perfecting a tool that you really have no intention of adding a whole bunch of new features to per se... And I was wondering if you have any experience -- I think Go is a wonderful example of that, actually, because we have this language that has, by many accounts, a paucity of features, but nonetheless, is still undergoing constant refinement in areas like say type parameter inference, and stuff that. So just wondering what you have to say about that, especially working on the experience of a language that is so static.

**Alice Merrick:** Yeah. So let me see if I can get an idea of what your actual question is... Is it like how do we balance that, like the new features versus perfecting old features, or existing features? Or how do you allocate your time?

**Andy Walker:** Yeah, yeah, really.

**Alice Merrick:** \[50:18\] So I mean, we're always going to try to make the things better that we do well, right? It's like, we do well here, and we want to keep doing well here, because it aligns with our core design philosophy, it aligns with our core values, and what we want people to be able to do. So that's going to be a thing that we always work on.

When it comes to new features, really part of it comes down to what is going to something that Kris said, is you know how to unlock people and different kinds of -- I think it was Kris was talking about this... How can you unlock different capabilities. But also, sometimes it's not about building new features to get new users, or new use cases; sometimes it's just removing friction from the existing tool or existing, or existing feature. Just remove some friction there. Like, what if we just made this feature a little easier to discover, or a little easier to use? And so in that case, sometimes you are iterating on that particular thing, that particular feature. You are iterating on that in a way that makes it -- you're unblocking people from using it, instead of building a new thing? Because actually, what I find is that it's not just new features that attract people to a tool or a product, it's how easy is it to do a thing? How easy is it to get started, or how easy is it to build? It's that experience, not just the "Oh, and this one lets me do this." Maybe you'd buy that tool, but are you gonna use it? Probably not... It's the things that makes it easy, not the thing that does all the things.

**Kris Brandow:** I feel like that's spicing or roasting your veggies... It's like "Yeah, they're good for you. They don't have to taste terrible, and we should figure out how to make it so people actually want to consume them."

**Alice Merrick:** Yeah, you can actually just really do your veggies just really well.

**Mat Ryer:** Yeah,it's a good idea. Well, speaking of doing your veggies really well, it's time for unpopular opinions!

**Jingle**: \[52:24\]

**Mat Ryer:** Well, we have a great panel today, a.k.a. Alice, Kris, Andy... Literally A.K.A.

**Alice Merrick:** Literally.

**Mat Ryer:** Who wants to get first? Alice, have you got an unpopular opinion?

**Alice Merrick:** Yeah. Oh, I have so many, but I will share one, because we've gotta fit them all in. I have an unpopular opinion about self-driving cars. Some people think self-driving cars will be great, and they're gonna save us all... Some people will think that it's too hard of a technical problem to solve. I think that self-driving cars are just a bad idea, because they're not actually solving a real human problem.

**Mat Ryer:** Aren't they?

**Alice Merrick:** No. I think that for people who like driving, you're taking away their driving. And for people who don't like driving, you can also invest in public transit. So there's really no -- I can't think of... Like, either you drive or you don't. But either way, it's not really solving a core user need there. We have alternatives.

**Mat Ryer:** People that driving though, in the self-driving cars, can get one of those Apple Vision Pros and can play Asphalt 8, or something, and they can be driving...

**Alice Merrick:** While they're driving.

**Mat Ryer:** Well, exactly.

**Alice Merrick:** \[53:57\] But that's not a real human need, though. And that's my argument, is just there's no real need. I mean, definitely it will generate lots of data, it'll increase car dependency... It'll definitely make a lot of money for someone. But I just don't think it's trying to solve a real human need.

**Mat Ryer:** Yeah, that's an interesting one there. That's a tough one to argue with, but that's not going to stop us. Does anyone want to dispute that?

**Andy Walker:** I mean, I've always thought of it as kind of an unfortunate stopgap. I mean, if we want to get utopian about it -- first of all, most of this whole country was designed thinking that gasoline will be cheap and plentiful forever, and everyone will have a car. Well, great. And so now we've got a lot of these sprawling - especially outside of some of the major metropolitan areas, we've got a lot of sprawling area... And I always thought it would be nice to have a public-funded sort of roving fleet of self-driving vehicles that you could just have come and pick you up and drop you off at the doctor's office, or whatever.

**Alice Merrick:** Like a train?

**Andy Walker:** Yeah, except for the fact that not everybody lives near a train station, especially as mobility decreases...

**Mat Ryer:** Yeah, it's the fact that goes that last mile to your house. That's the difference.

**Kris Brandow:** This is a solvable problem, though. You just build more train stations.

**Mat Ryer:** You can't build a train station at everyone's house. Not everyone can have --

**Andy Walker:** I mean, yeah, but how easy is it to retrofit an entire country, versus -- I mean, I agree, I think it's ideal that we build trains everywhere. But in the meantime, I think that it could help to have something that. That's all I'm saying.

**Kris Brandow:** We retrofitted this country to be car-dependent. We were a train-dependent country, and then we were just like "Nah, let's go try this automobile thing", which has been just a massive failure... And now we're trapped with it for a bit.

**Andy Walker:** Yeah, and that's what I'm saying. Stopgap only.

**Alice Merrick:** Yeah. See we've got to break the backwards-compatibility for car dependency here.

**Kris Brandow:** I think too, because there are a lot of real dumb things about car dependence in America. I've just watched - there's this YouTube channel called Climate Town, and they had a video that came out (I think) yesterday, really great, on parking minimums in the country, and how the entire idea of it is just Bs, and they've done no real studies, and they're just kind of like "We're just gonna pick some arbitrary numbers to decide how many minimum parking spots you need", and how it's not just turning giant spaces of land into asphalt for no reason, it's also making us destroy buildings that we don't need to destroy; some entire areas of town are just devoid of business, not because people don't want to do business, but because they can't afford to build parking lots. And it's increasing the cost of things in some cases by hundreds of millions of dollars, just to have this freely available parking.

I feel like the thing we should be doing is being like "Okay, get rid of all of that free parking, and just get us as far, as fast as possible, away from cars." And I think - maybe this is an unpopular opinion - make it painful to live in suburbs. Because suburbs are fundamentally unsustainable entities, and we need to get away from them. And we're not going to get away from them. If we make it too easy for people to keep living in them, they will keep living in them. Also, that could help solve some of our racism problems. That's an entirely different story.

**Alice Merrick:** Oh, man, I'm so happy I brought up such a divisive opinion. I'm just enjoying this.

**Mat Ryer:** Yeah, I think one thing that I would to see more of in cities is fewer cars, yes... Most zip lines. There's a lot of places very accessible with zip wires, as long as we get over this nanny state kind of worried about people falling to their doom.

**Alice Merrick:** Yeah. I live on a hill...

**Mat Ryer:** Ooh, prime spot.

**Alice Merrick:** ...that is close to another hill. It would be great if we could just zip... Or a gondola, if you want to be a little safer. A gondola over to the other hill. It would be great.

**Andy Walker:** \[58:05\] You know, there's nothing like a nice cucumber sandwich in a gondola to really convey yourself in style.

**Alice Merrick:** There you go, yeah. It'll be the next big skyline addition to Seattle. The Capitol Hill Queen and gondola. You heard it here first.

**Mat Ryer:** I think those -- they're just too slow, those things. I get it, Andy; you strike me as a gentleman from the '50s. You like to sit down and have a nice sandwich with the crusts cut off, and high noon, and all that stuff. It's somehow posher than me, and I'm British, Andy. \[unintelligible 00:58:39.16\]

**Kris Brandow:** I mean, if you want to go fast, Mat, you just take the subway. You take the gondola when you have a little bit of time, and you want to do something scenic...

**Mat Ryer:** Zipwire. You can have a can on the zipwire on your way down, as long as you drink quick.

**Alice Merrick:** You can definitely -- well, there'll be a zip, too. Either or.

**Mat Ryer:** Because the other one is a catapult. That's one not really explored much, but...

**Andy Walker:** The wire budget's just going through the roof on this, I'm telling you...

**Alice Merrick:** Yeah. I mean, they tried to trebuchet, and it just...

**Mat Ryer:** You just want that. You just want to be able to go to your local one, you just strap in. It's like "Right, everyone ready?" "Yeah." "Okay." You go into Euston station, off you go. Pull the thing. Flang...! You go flying through the air. There's a net and all that on the other end to catch you. Or you get caught in big funnels, and then you just go down these tubes.

**Andy Walker:** Checking your watch on the way down.

**Mat Ryer:** Yeah, yeah. You can have a drink.

**Kris Brandow:** You know, New York's spent a lot of money to get rid of all of the cabling and nonsense out of our skies. We should--

**Alice Merrick:** Bring it back.

**Kris Brandow:** ...we should not bring it back. \[laughter\] I'm just thinking about one winter with all the snow, and all that stuff coming \[unintelligible 00:59:45.07\] Or it's gonna be like ice one day, and there'll be some fools trying to zipline all over the place... There are just so many issues. I feel like Andy had a comment about what I said though.

**Andy Walker:** Oh, you mean the suburbs thing? Yeah, I do. I do. On the one hand, there's a part of me that deeply agrees with you, and how the city layout is fundamentally racist, in a lot of ways, and all that sort of stuff. But the other thing that it made me think of was Judge Dredd. Not the stupid movie, but the original comic; everybody basically -- the world heats up and everybody goes into either these huge mega-cities, or they go out and they live in the desert and eat people, or whatever. And even though I live in the suburbiest suburb that's ever suburbed, Columbia, Maryland - shout-out to the people tree - but I don't want to believe that. I want to believe that we can have better, broader public transit solutions that can work for everybody, no matter where you live. But it's hard, too.

**Kris Brandow:** There is a middle ground, too. I'm not saying everybody should live in a city. No. I think we should just have sustainable suburbs, the walkable suburbs, where you can walk and --

**Andy Walker:** We do have that, yeah.

**Kris Brandow:** Yeah. The thing I don't is when you have really spread out stuff, and everybody has a yard for some reason, and a lot of single-family homes... That's the stuff I'm like "Hm!" But if you have a nice, walkable suburb...

**Andy Walker:** Oh, Ohio.

**Kris Brandow:** Yeah, upstate New York. Tons of places. I think if it's like a nice, walkable place... It's like, people should be able to live without a car on this country. Most people shouldn't need to have a car. If you want to have a car, great. You want to drive? Great. You should incur the expense of that. We shouldn't subsidize you. And I feel like all of the dumping of money into driverless cars is just like yet another thing to enable people to continue having cars when it's like "Well..."

**Andy Walker:** Oh, that's so interesting. Yeah, I was coming at it from the complete opposite direction. I was seeing it as not like a rich person, or make more cars, but it's actually a way to have less.

**Kris Brandow:** Yeah, that's not gonna happen.

**Alice Merrick:** Yeah, it's not going to be possible for me to walk anymore when everybody's got a self-driving car that can just run me over.

**Andy Walker:** \[01:02:07.13\] I suppose that's true...

**Alice Merrick:** How unfun is it going to be for me as a pedestrian when it's now illegal for me to cross the street, because I might stop a self-driving car.

**Mat Ryer:** Yeah. That's what they'll do, make it illegal to walk.

**Andy Walker:** Well, let's be honest, you're not stopping any of those things. They're death machines. \[laughs\]

**Kris Brandow:** I'd really like to see self-driving cars trying to operate in New York City. Either they'd hit people, or they'd just cause massive traffic jams. Either way, they'd probably get banned pretty quickly.

**Mat Ryer:** Yeah, they need to go all-in. Are cars an amendment yet?

**Alice Merrick:** Yeah, basically, everybody's got the constitutional right to must own a car. \[laughter\]

**Andy Walker:** I just wanted to be put on the record that I'm not arguing for big auto here.

**Mat Ryer:** Alice kind of was earlier, by saying -- well, no, you weren't, Alice, to be fair.

**Kris Brandow:** I think she was arguing for a big train. Bring back the railroad barons! No, I'm just kidding. Please don't.

**Alice Merrick:** I mean, you can have small trains. I don't know, I was just in Europe for the first time --

**Mat Ryer:** How small though? ...because you've got to fit a lot of people in. It might be fine for you, Alice.

**Alice Merrick:** A small train? Yeah. I mean, I don't have that problem...

**Mat Ryer:** Exactly. That's not fair.

**Alice Merrick:** That's a problem for people who are big. I don't know what that --

**Mat Ryer:** That's not very good dev user experience thinking... It's a bit selfish.

**Alice Merrick:** \[laughs\] No, no, no, I just mean -- I mean, there is a large, more like inter-state or inter-city kind of train, and there's a more like inner city, within a city kind of transit in that respect. And you can have more of one or the other. I think investing in both is a good option. Of course, then you can also have some competition for the airlines that way... "Oh, now I can get to LA, or whatever, and I don't have to fly if I don't want to."

**Mat Ryer:** Be catapult...

**Andy Walker:** I would love the vacuum zippy, if that had actually really been a thing.

**Mat Ryer:** Yeah, the Hyperloop thing. You could do a Lo-Fi version of that with just vacuum cleaners and Zorbing balls, I think.

**Alice Merrick:** Yeah. Go from Seattle to San Diego, just --

**Mat Ryer:** Just zorb your way down. "Oh, I'm catching the zorb down to San Diego." It's so cool.

**Alice Merrick:** I'd be like "Oh, I'm going to GopherCon."

**Mat Ryer:** Everyone's zorbing everywhere... Yeah, I'm zorbing my way. \[laughter\] Well, or travelators. Change all the sidewalks to be just travelators.

**Kris Brandow:** Is that what they're called over there? I think we call them people movers over here. Anyway...
**Mat Ryer:** Oh, do people movers. I changed the sidewalks. We don't call it that. This is so difficult. I'm outvoted on what language I have to use today. Pavement, we call it; not sidewalk. So I would say turn the travelators into a pavement, or for the US edition you might say "Turn the sidewalks into people movers." \[laughter\] I don't know how you do that accent all day. It's exhausting.

**Alice Merrick:** Yeah, pronouncing all of our r's... You know what - someone's gotta to do it

**Mat Ryer:** You spend so much time doing that though. Not putting use in random places, properly spelling things that have z in them... You know... \[laughter\] S and Z are two different letters, Mat.

**Mat Ryer:** Yeah, I agree. Yeah. So is zed...

**Andy Walker:** I've actually almost forgotten my unpopular opinion... \[laughter\]

**Mat Ryer:** Oh. You'd better remember it.

**Alice Merrick:** Can we do a linguistics episode? I'd love that one.

**Kris Brandow:** Oh, there's a linguist guy on TikTok that I absolutely love. He's the one that made me realize that in English words that start with TR are pronounced like ch. So if you say choo-choo train, you don't pronounce the T in train, like ta. It's cha. Which is very weird when you think about it. Same thing with trombone, and all of this...

**Mat Ryer:** Trombone. You're right.

**Alice Merrick:** Yeah, yeah.

**Mat Ryer:** Trombone to train.

**Kris Brandow:** Choo-choo train.

**Andy Walker:** Oh yeah, it's a phonetic -- it's actually dependent on the adjacent words, and stuff like that.

**Kris Brandow:** Yeah. It's because of how we say T and R; your tongue is in the wrong part of your mouth to go from t to r, so we change how we pronounce it. It's fun.

**Mat Ryer:** How do you say burgers? I don't understand that word, burger.

**Andy Walker:** \[01:06:09.03\] Burgers.

**Mat Ryer:** There you go. I can understand it. I didn't realize you could speak properly, Andy.

**Alice Merrick:** You know what, it is thought that British English used to have r's, like American r's, and then you dropped them.

**Mat Ryer:** Yeah.

**Alice Merrick:** And we're like the vestige of how English used to be.

**Mat Ryer:** You're bringing them back and making them cool again.

**Andy Walker:** \[unintelligible 01:06:26.22\]

**Kris Brandow:** Also, burger is a weird thing... Because it's just like we decided to break up a word not where it's supposed to be broken up... Because a hamburgers is a sandwich from Hamburg, and we're just like "We'll just take off the ham and do burger, because that's obviously how it's supposed to be."

**Alice Merrick:** It's the American way.

**Kris Brandow:** I think I was watching something one day...

**Andy Walker:** It's got some very American sounds in it, too. That is very much an American sound.

**Alice Merrick:** Yeah, it really is. In fact, the English r sound is a pretty rare sound across languages. I can't off the top of my head think of another language actually has the same r sound we do.

**Kris Brandow:** Yeah, good ol' America. I was watching a TikTok the other day where someone's like "Oh, name an American food", and someone just said French fries. And the person just looked at them like...

**Mat Ryer:** Nice.

**Kris Brandow:** Like, "Uh, okay." Anyway, we are way off track. Andy.

**Andy Walker:** Just like a train. Alright, my unpopular opinion is that most programming fonts suck. As much as I love their design, and I love to talk about design, I still -- I get obsessed with a new one every few weeks, but I've just never found one that I can really truly stand very long. I have astigmatism, so basically, everything is just a little bit fuzzy to me. And so I have to go to great lengths to make sure they contrast, and stuff.

Anyway, once you start to make things out of vectors, precision really does go out the window; hard edges kind of go out the window, and you have to really, really increase your resolution and whatnot. And even then, sometimes the difference of a single unit of screen movement can make something blurry or not, depending on...

**Alice Merrick:** On the aliasing, yeah.

**Andy Walker:** Yeah. But yet you turn it off, and there's nothing that is built for being run without aliasing, and everything looks like garbage. There's a handful of fonts that I've used that are fine without aliasing.

**Mat Ryer:** Andy, do you tweet your font adventures?

**Alice Merrick:** I don't know. I should. I think the most recent one I was fascinated with -- like, if you've got a good PDF with your design layout in it, I'm a sucker for that. Especially if it's got color chips, of course. But yeah. I think the most recent one I was fascinated with was Berkeley Mono.

**Mat Ryer:** Oh, yeah, Mono. Yeah.

**Andy Walker:** It's doing alright, but most of them suck.

**Mat Ryer:** Okay, nice. Well, we'll see. Most fonts suck, from programming.

**Andy Walker:** Yeah, most programming fonts suck. Most of the dedicated ones that they say are good for programming. We'll make it a little bit more unpopular.

**Alice Merrick:** Alright, I've got my hard stop right now, but...

**Mat Ryer:** Okay.

**Alice Merrick:** ...thanks for having me on. It was lots of fun. I'd love to come back, and I feel like I have so much more content.

**Andy Walker:** I also have some follow-up questions for you at some point if you're on Gophers Slack, or something.

**Alice Merrick:** Yeah. Or email me, or... Yeah, I'm pretty findable.

**Mat Ryer:** Thanks, Alice. I'll do a little outro now, and feel free to go. Cheers!

**Kris Brandow:** Bye!

**Break**: \[01:09:33.27\]

**Kris Brandow:** Maybe this won't be unpopular, but I'm gonna give a reason that'll hopefully make it unpopular. I think that we need to abandon calling the science computer science, and we need to call it computing.

**Andy Walker:** Oh, this is a good one.

**Kris Brandow:** No more computer science. It's a stupid name. It's not the science of computers. It's the science of computing. And no other science calls itself something science. Not biology, or geology, or chemistry, or physics... None of them. They're all like "We've got our names." So we should just call it computing.

**Mat Ryer:** Rocket science?

**Andy Walker:** \[01:10:07.04\] Oh, there is that, but can I -- you've reminded me of a beautiful anecdote. So a while back - I don't know what got me on this, but I was like "What is the history of the term computer scientist and programmer? Where did we come up with that?" So I went digging, and I've found the first mention of the term software engineer or something like that, or programmer - now I can't remember exactly what the first mention was, but I thought it was an old letter to the editor for the ACM, where they were talking about what to call people who do this programming thing. And there was this guy who wrote in with these amazing suggestions, and like \[unintelligible 01:10:48.03\] some really interesting stuff. But my favorite was at the very end it was flow-charts-man, with dashes between each one... I was like "That's it. That's my new --"

**Mat Ryer:** And that's your Twitter name, isn't it?

**Andy Walker:** Yeah. Yeah.

**Kris Brandow:** Flow-charts-man...

**Andy Walker:** So I think there is some prior art...

**Kris Brandow:** Yeah, yeah. And the reason -- I've been studying computing recently, because I've also fallen down another rabbit hole, that maybe we'll do an episode about. I'm planning to write some blog posts and some articles around it, so maybe we can do episodes to that. But I've fallen - because I asked myself the other day, I'm like "What does it mean to compute? What is computing? What is this thing that we do?" And it actually turned out to be a pretty simple answer. It's like, there's two things. It's like, something is computable if you can find an answer to it using computation, which is just an algorithm. And then there's also the complexity, which we all love to talk about, and nerd out about, \[unintelligible 01:11:42.22\] and all of that.

Also, there's this thing about feasibility of complexity, where it goes into like, well, if you had an Earth-sized computer that existed for about the same time that Earth has existed, this would be the maximum type of problem you could solve with that. And I'm like "That is such a ridiculous, but also nerdy way to put the top \[unintelligible 01:12:01.27\] But the extension to that whole "We should go back to calling it computing", like, one of the reasons I want us to do that is because I want us to remember our roots. Because I feel like with AI, we've fallen into a thing we believed at the end of the 19th century, which was that it was possible that every single problem you could ask, every single question you could ask is computable. You can find an answer for it. And we got computing and computers because multiple people, like Kurt Gödel, Alan Turing, Alonzo Church - all these different people all discovered in different ways how absolutely wrong that idea was. There are things that are uncomputable; there are questions that are unanswerable. And that launched us into what we have now.

And I feel like there's a little bit of people believing, in the AI world, that it's like computers can do anything, and they can do everything, and they're going to be these magnificent, all-knowing, all-intelligent machines. And it's like, we've been here and we've proved that wrong. There are significant limits to what is computable and what you can do with computing

I want us to shift away from that thought and be like "Well, let's try and figure out how to answer useful computable, or actually computable problems", instead of being obsessed with "Oh, this thing's going to be able to take over everything." And maybe that whole turologist thing reminded me of how much I dislike Alan Turing ever since I've found out that the Turing test was a reaction to Ada Lovelace's assertion that people are just going to be fooled by computers, because they're kind of silly... Which is what we've figured out. And so I'm just like, if we're gonna call it something, we should base it on what she said, because she was like 100 years earlier, and also a brilliant woman... So lovelatician, or something that. I don't know.

**Mat Ryer:** Oh, there you go. That's a lovely candidate there.

**Kris Brandow:** Yeah. That'd be epic, though. If you were just like "Oh, what do you do?" It's like, "I'm a lovelatician."

**Mat Ryer:** Yeah, that does sound like someone would say that at a party.

**Andy Walker:** I would like saying that, actually. I would put that on my business card.

**Mat Ryer:** Yeah. It doesn't sound like what you think it sounds like, I think. It doesn't sound like your job is coding.

**Andy Walker:** It's better than being an adist, I'll say that. \[laughs\]

**Kris Brandow:** Yeah. I was thinking about we should go back to calling it computing. I was a little bit like "Computist?" No. Like, I don't know what we'd call the people that study and do the science of computing.

**Andy Walker:** Well, I mean, they did call -- they just called them computers, right? That's what they were called back when computation was women's work.

**Kris Brandow:** Yeah.

**Andy Walker:** The engineers --

**Kris Brandow:** They were actually doing computation, whereas the computing is the science of it. I got into a whole argument -- or not already. I got into a whole discussion with one of my friends about what is science, versus applied science, versus engineering... And it turned into this whole interesting thing; that also might make an interesting episode to talk about.

**Mat Ryer:** \[01:15:10.27\] We will see, we will see. But unfortunately, we genuinely have run out of time. Thanks for sticking with us, everybody. Thank you so much to our panel there. We learned about the developer experience and how important this is. Alice - I think the quote from her was, "Developers are people, too. So we want to care about their experience as well." And we had a lot of food analogies. We talked about French omelets, ice cream, fat and sugary features...

**Andy Walker:** Trains...

**Mat Ryer:** ...spicing or roasting veggies... We talked a lot about cookies... And Alice, of course, mentioned automatic sliced bread. I never did --

**Kris Brandow:** I'm sorry, Andy, did you -- he said food analogies, and you said trains. And I'm...

**Andy Walker:** No, I thought we were going along the list of different sorts of analogies we've made...

**Kris Brandow:** Oh, okay.

**Andy Walker:** But he was staying with food, and then I just threw trains right in the middle of it and it was awful.

**Mat Ryer:** No it was good. It's fine. I thought you meant like "Here comes the train. Choo-choo." That's how you still eat. \[laughter\]

**Andy Walker:** Here comes the food train.

**Mat Ryer:** Yeah, that's the only way you can eat... \[unintelligible 01:16:06.08\] like "Don't look at me!"

**Andy Walker:** I thought we were listing the analogies we've done.

**Mat Ryer:** Yeah. And we also had automatic sliced bread; we never found out what that meant, automatic sliced bread.

**Kris Brandow:** Oh, like the sliced bread that you buy?

**Mat Ryer:** Right. But what do you mean, automatic? The bread has not sliced itself, has it?

**Kris Brandow:** It means you're not slicing it. When it comes to you, it's already been --

**Mat Ryer:** That's what sliced bread is.

**Andy Walker:** I think she was probably getting to the -- automatic sliced bread definitely sounds like one of those UX in-jokes...

**Mat Ryer:** It sounds like a band.

**Andy Walker:** Yeah.

**Mat Ryer:** It does, doesn't it?

**Kris Brandow:** I mean, we've had sliced bread. You just manually had to slice it. The innovative thing was that it came sliced already.

**Mat Ryer:** Yeah, the sliced bread is what makes it sliced, is the fact that it's been cut into slices. I don't think the first one -- the first, the first the best thing...

**Andy Walker:** Why are we digging on this...?

**Mat Ryer:** Well, the best thing since sliced bread -- let's assume it's the best thing. That's what we're told.

**Kris Brandow:** It's the best thing since sliced bread. It's the best thing since you could buy sliced bread, which is automatically sliced bread by some machine.

**Mat Ryer:** No, it probably wasn't.

**Kris Brandow:** Well, you think we started selling sliced bread as like someone was in the back just slicing bread themselves?

**Mat Ryer:** Yes. Yeah, I literally do. Yeah. I think that's --

**Andy Walker:** I hope they don't cut any of this out.

**Mat Ryer:** They did that where I grew up, Kris. Even in my living memory. You'd go to the bakery, and then you'd order a loaf, and they'd slice it for you. And they'd just do it by hand. Hand-sliced. None of this automatic sliced...

**Kris Brandow:** I feel like that's not the innovation that's amazing. I feel like if you wanted it in the past, that would have been very expensive. So the innovation is that anybody, even poor people, could buy sliced bread, because you aren't having to do manual labor to slice it, because it's a machine that's doing it automatically.

**Mat Ryer:** Yeah, the saying "It's the best thing since sliced bread", which was almost certainly sliced manually. I think automatic sliced bread --

**Kris Brandow:** Why would that be an innovation though?

**Mat Ryer:** I'm not the one that goes around saying "That's the best thing since sliced bread." I don't really say that ever, because I don't think sliced bread's that good.

**Kris Brandow:** Oh God, we're gonna have a whole episode on sliced bread now...

**Mat Ryer:** Yeah, if I accidentally buy a loaf, I stick it all back together, so it's just one big loaf again. \[unintelligible 01:18:30.25\] not having any of that.

**Andy Walker:** You're a loaf purist.

**Mat Ryer:** And just made a big sandwich with it, many layers deep. So we learned about developer experience and why it's important, and we heard some great stories and some tips there. Thank you so much, Alice Merrick, Andy Walker, and of course, Kris Brandow.

**Andy Walker:** Pleasure, as always.

**Mat Ryer:** Pleasure is always ours. See you next time on Go Time.
