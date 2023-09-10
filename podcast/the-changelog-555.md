**Adam Stacoviak:** So Zach Lloyd, we had you on the show -- I mean, we put a bold title out there... "Warp wants to be the terminal of the future." Now, I've gotta imagine that a large majority of the listenership of this show uses, maybe loves the terminal... I'd say probably a lot of them love the terminal, and you want to be the terminal of the future. Since then - we published that April 26th of last year. So what's changed since then? Are you on that path? Have you won? Are you the terminal of the future? What's the state?

**Zach Lloyd:** I think we're definitely on the path. I don't know if we've won... I think that's like a big statement. Yeah, I mean, I guess -- so where we're at, we have a lot of people using Warp, which is really cool. A lot of people love Warp. For people listening who don't know what it is, like Adam said, it's a reimagination of the terminal...

**Adam Stacoviak:** Terminal of the future, man. Terminal of the future.

**Zach Lloyd:** What does that mean? It means -- we tried to look at what developers do in the terminal from first principles, and build a tool and a product that makes those daily actions, whether it's building and running your code, or using CLIs, or sorting through logs, or setting up development environments, or collaborating with people on your team - trying to make all those things the way that they would work in a modern app if you were sort of not using like a terminal shell thing that was designed 40 years ago. It's a Mac app... I guess -- like, to answer your question, I think we're kind of on that path. What I'm excited about is people really, really seem to love the product. We have not conquered the world yet, but we have a lot of developers using it, giving us feedback... And I think every week it's getting better, which is cool.

**Adam Stacoviak:** Do you share numbers? How do you quantify a lot to the public? Can you get very specific? Is it 101 developers, is it 250,000? What range? How much is a lot to you all?

**Zach Lloyd:** Yeah, we don't really share the figures... It's in the six figures, is like kind of where we're at right now.

**Adam Stacoviak:** Alright. Asking hard questions already. I feel the pushback. Okay, six figures. So that's 100,000+.

**Zach Lloyd:** Yeah.

**Adam Stacoviak:** Okay. Well, that's significant. It's not 1,000, or 10,000, which is still a lot, too.

**Zach Lloyd:** Oh, no, it's a lot. And it's growing quickly, which is cool, too. And it's only Mac, which is the other thing. So if you look at like what people want from Warp, they want Linux support, they want Windows support...

**Adam Stacoviak:** I bet. Gosh.

**Zach Lloyd:** I think they don't know it, but they're gonna get web support also, which I think is...

**Adam Stacoviak:** Nice...

**Zach Lloyd:** ...going to be actually surprisingly useful and cool for people. So we're kind of like more than like hobbyist scale; we are used by a lot of people and we get a lot of feedback, which is pretty cool. And I think when we spoke --

**Adam Stacoviak:** You were brand new.

**Zach Lloyd:** Yeah, we were just starting.

**Adam Stacoviak:** \[07:33\] You had the idea. It was like "Hey, we have this idea." And we love that. We love capturing the initial stages. We don't do this all the time, but I think in this case, because the terminal is so near and dear to our hearts, why not speak to somebody who can boldly think they're going to do the future, the future of where this terminal is gonna go? And so I think that's what attracted us to the conversation. Because you really hadn't put a lot of proof out there yet. You had an application, you had, I think, some working things... Jerod and I both tried it out, but it didn't stick for us necessarily; certain things -- we pushed back on the open source nature of it... There's a lot of good things and bad things about that launch. I wanna say positive things or negative things. I think open source has a good vehicle, you probably thought about that... Who knows? But when somebody says they think they're going to be the future of where the terminal is gonna go, we have to have that conversation, you have to capture that initial launch, and think "Okay, here's where they're at", and then just over a year later, now you're here on Founders Talk; not the Changelog. But we're gonna go deep into Warp, we're gonna go deep into product-market fit, your personal journey as a founder, some of the struggles it takes to run a company, maybe what it might be to grow to six-figure user base, what it is to manage that... All those things. We wanna talk about all that stuff.

**Zach Lloyd:** Yeah, cool. Well, I'm excited to dig in.

**Adam Stacoviak:** Well, I think the place to begin would be -- I'm curious, just on the note of where we're just currently at... Like, you mentioned that user base. When you define success, or product-market fit, or however you determine "We're on the right path", whatever phrase you use to describe that, what are some of the things you're tracking? Is it simply the number of users? Is it the daily active users? How do you measure the fit of your path?

**Zach Lloyd:** Yeah. So super-early on, before focusing on growth at all, and then total number of users, the things that we were focused on, and really continue to focus on, are "Do the users that we have retain?" So that's big. Do they engage? Are people using it -- like, the terminal should basically for most developers be a daily use, too. Also, are people using it three days a week, five days a week, seven days a week? So how frequently are they using it?

We look at NPS, so people -- you know, would they recommend the product to their friends? How do we compare it to other developer tools? And then we look at public sentiment, like what are people saying about it... So if you look on Twitter, people like it. So those are all signs of, I think, product-market fit, beyond just like what's the total active user number.

For user number, I think what we care about is not all-time users at all. That's a vanity metric. It's like, who's in the active user base, who's using it every week... Yeah, so those are basically data points. GitHub issues would be another one... And when we first started, the goal was really just like "Can we get a feedback loop going? Can we get anyone to use it? Can we get anyone to be totally engaged, to want to use it as their daily driver?" And so that was sort of the first step with it. And then, you know, as we've gotten more mature and gotten more feedback, it's been more towards "Well, can we not just improve the retention and engagement, but can we also improve the signups and activation, the conversion funnel, and prove that there's a big enough group people who want to continue to use it?"

**Adam Stacoviak:** Let's talk about that feedback loop then. I think one of the challenges with doing pretty much anything on the internet, whether it's a podcast that's been running for 14 years, or a brand new startup that's aiming to change how developers use their terminal, team functionality etc. AI even, I've seen Warp AI is a feature... We'll get into that, of course, but... You've got to think about that feedback loop. How have you grown that feedback loop? How has it transitioned and changed over the last year and a half?

**Zach Lloyd:** Yeah, it's a great question. So when we first started, the explicit goal was "Can we get anyone using it?" So what we tried to do, which actually didn't work, and I would kind of recommend for other founders probably not to do this, is we kind of went to like family, friends, network, like "Hey, try our new terminal." And that didn't stick super-well, because those people did not have real high intent for using this product...

\[12:01\] So we could have gotten some sort of false negative signal based on that. Instead, what we had to do fairly early on, the way that we staged this out was we had to do a sort of initial launch into a waitlist, but out into the wild, with people who we didn't know, but where we explained the messaging of the product, like what's the value prop, from a marketing perspective what is it... We were on Hacker News with just like a waitlist signup page... And that was actually the key thing to do. This we did maybe six months before I talked to you. So this was when we were just trying to go in like private beta is what we called it. And we got enough traction. I think we even got to the top of Hacker News, just based on that describing what we were doing. And then we were able to take some of those people who signed up for the waitlist, bring them into the early experience, and actually get signal from more high intent users, like, "Does this thing solve their problem?" And from that, we were able to get -- at first, it was super-small; it was like maybe 100 users using it, and maybe a couple hundred. And the retention was really not very good. But it gave us that baseline of a group of people who cared about the problem that we were trying to solve, who were willing to engage in our product and let us kind of know where we stood; like, was our thing MVP quality, or was it not? And that was -- yeah, that was like a really key step.

**Adam Stacoviak:** Yeah, getting that feedback is challenging. I didn't realize that you'd launched like six months beforehand. I'm thinking back to the timeline of like when we had you on the Changelog last year, and what that timing was. I know that you had a lot of activity on Hacker News, and it was like a waitlist... I guess maybe the good question is why did you build this thing in the first place? Sometimes when you chase -- I'm not saying you're doing this, but when you feel like or seem like you're chasing product-market fit, it's because either you're too early with the idea, and the market isn't mature enough to be ready for it, or sometimes you invent something new, or a new direction. And it's a great idea, but it's early; it's five years early, or a year early, or whatever. I've gotta imagine that you built this for teams... How did you even map out building this thing in the first place?

**Zach Lloyd:** Yeah. And just to answer your question... So the first -- by the way, the way that we staged this was we did like a private waitlist, and then when we talked to you, we had gone into public beta.

**Adam Stacoviak:** Right. I thought so. Okay.

**Zach Lloyd:** So when I talked to you, we had removed the waitlist at that point. How did we think to do this? Honestly, so -- I don't know, I've been a developer for a really long time. I was looking at the things that I regularly use, and I wanted to build something for developers to help them get more done, I wanted to build something for developers to help them ship stuff faster... And the terminal - the more I thought about it, the more I was like "This kind of crazy this is the user experience that people have with this kind of crucial tool that sits at like the center of a lot of developer activities."

I became convinced, pretty quickly actually, that there's a way better product to build here. Some other things that got me convinced around that were just like the amount of sort of tweaks and customizations, and the popularity of different things on GitHub that developers were using to try to improve their terminal experience already... So for instance, if you look at some of the most popular GitHub projects of all time, in terms of stars, are things like OhMyZsh, or FCF... They're things that have like massive numbers of GitHub stars, and they're all about like making the terminal experience better in one way or another. But they're things that you have to, as a terminal user, go seek out, install, configure... And so on the one hand, I thought "Hey, there's a ton of signal, of public data that people want this tool to be better, but then there's also a lot of friction if you're a terminal user and actually getting to the point where the thing works well." So from a product perspective, I really felt like there was something there.

**Adam Stacoviak:** Yeah.

**Zach Lloyd:** \[15:53\] From a business perspective, and like "Is this a good business to build?", that took me much longer to get conviction on. And I think to some extent still the question is out there, like "Is this a good business to build?" I've become more and more confident over time that this is actually potentially a really, really big, game-changing thing, and a cool place in the tooling stack to help developers get more done. But at the beginning, I was like "I don't know, a terminal is kind of a free utility that ships with everyone's computer... Is this really a smart area to go after?" And it took a lot of like thinking about "What could the business be?" for me to get conviction that it was worth spending a lot of my time...

**Adam Stacoviak:** Yeah. For sure, man...

**Zach Lloyd:** I'm three years into it now, and we'll see if that was the right decision or not, but that took a lot of like thinking through to get to a point of conviction.

**Adam Stacoviak:** Is this built for -- if I recall call back when we were talking on the Changelog, I think it was built for primarily teams, right? Not really teams of one necessarily, but I think you've changed since then, if I'm reading the tea leaves well enough...

**Zach Lloyd:** Well, so the way we think about go to market is like it's actually built for individuals. The thesis is like an individual should be able to download Warp, open it up, use it in place of like their default terminal app, or in place of iTerm, and immediately become more productive. It's backwards-compatible, so it's like it works with ZSH, Fish, Bash... It's not 100% backwards-compatible, so this is one of the complaints that we have, but it generally just works.

The team aspect is something that we actually just launched the first version of it about a month ago, with something called Warp Drive, which is -- it's like a shared space in the terminal for people to share commands, essentially. You share templated commands, or you store your own templated commands. And so the idea for that is "Hey, there's a bunch of, I don't know, Docker, or Kubernetes commands that your team needs to use that are hard to remember... You can organize them, you can make sure everyone on the team has access to them, you can search for them as you're entering commands." And so that's the team aspect. But that came much later.

From a go to market standpoint, the way that we've always thought about Warp is "Let's focus at first on just individual adoption, and making sure that someone as an individual who uses Warp gets a lot of value out of it", and then just now we're starting to introduce some of the first teams features.

**Adam Stacoviak:** Gotcha. So you got that really thinking about the business, because I'm thinking, "Okay, individuals... I pay for individual Mac apps." I kind of draw a similarity between what you're trying to do with Warp and what the team behind Raycast has done with Raycast. It's like Mac-focused, it competes with Spotlight, really... I mean, Spotlight is baked in, and I think as Apple makes their AI impression better, potentially with Siri, maybe Spotlight gets better over time, better than it is today... But for now, Raycast seems to have a leg up; it's taking an existing native tool that has some downfalls... Not perfect, but works for the majority of the users... But those who desire more can seek out an alternative, and that's Raycast. So I kind of draw some similarities.

And similar -- you know, I use Terminal app. It's baked into the Mac, tweaking is pretty easy... I'm an OhMyZsh user, so you're speaking my language... I'm trying to tweak my terminal experience, but not so far where I feel like I'd have to go to a custom terminal. But I can see where you're trying to improve an existing application, that everybody's trying to do something to their terminal to make it better for them... And what if you can curate the ability to do that into one single pane of glass, that has faster UI, faster time to paint...? Whatever it is that makes it speed up your application, or has team features, or has Warp Drive, or bakes in Warp AI at some point. That to me does seem compelling, but it does come down to pulling it off.

**Zach Lloyd:** \[20:06\] Yeah, I guess a couple of thoughts there... So yeah, execution is kind of everything. At the end of the day, we're only going to be successful if people actually feel like it really is saving them time, saving them headache, making their teams more productive, if it's in the future better integrating with their other tools... It has to have real value, and the real value comes from executing on the product, in a way; that makes the product really good. So that's a given.

I think the Raycast is interesting. So Raycast is a company that we've actually done -- like, they integrate with us. There's some synergies. I think that their sort of brand positioning is maybe similar to ours; it's like a productivity improvement, replacing a built-in thing... I think it's a little bit different for us in that we're more developer-specific, they're more of a consumer product thing. I think we have the ability to go deeper into improving actual developer workflows than they do... But yeah, there's some similarity there, for sure.

**Adam Stacoviak:** Yeah, I don't mean similarity in terms of like what you all do to solve it, but the way you've attacked the market, where there's an existing tool, an incumbent that's entrenched, right? Entrenched and free. And so the way you have to approach the market -- and I actually push back quite heavily... It's an episode coming out soon, where I talked to the founder, Tomas...

**Zach Lloyd:** Oh, at Raycast?

**Adam Stacoviak:** Yeah. I talked to him about the Raycast journey, and the one thing I pushed back on is like "You gave so much away for free. You just now started to charge for it. You gave so much away for free." But then, after I really understood what they were trying to do and why that logic made sense was because, well, we're fighting an incumbent that is free. And we have to become ubiquitous to our users. And similar to you, Mac-focused as well; so there's something to that as well. It was like "Well, we can add value at other places, but we need the tool, we need Raycast to be a given on any given person's Mac, but particularly people who want to be more productive on their Mac." And I think that way I would probably say that you're similar to them is you want people to be more productive with their terminal on their Mac, because they're already a developer. That's who your audience is, and it's Mac-only, at least for now. And then later on, features that add to that thing... Maybe it's, okay, well, if you want artificial intelligence directly in your terminal - sure, you can probably bake in some other tools, but what if we gave it to you in this way or that way? Or what if we -- whatever. That's where I wonder if -- because to be the future of a terminal, you have to have that critical mass. And getting to that critical mass is the hardest battle.

**Zach Lloyd:** For sure. Yeah, I mean, the go to market for us is similar in that respect, in that Warp - we don't charge individuals. The goal at the start has been to grow the user base and prove that there's value, and then it's a sort of freemium model for... As we add things that I think have more differentiated value, or more obvious marginal costs, like AI or like cloud features, I think that's a natural place for us to monetize.

The other way, if you want to make a product analogy that I would kind of look at it - it's kind of like the difference between Notepad and Word, or something. The Mac does ship with a terminal, but I would argue that it's pretty crappy.

**Adam Stacoviak:** Is that right?

**Zach Lloyd:** \[23:44\] I don't think if you looked at what developers do in it, you'd be like "Oh, let me design something where the mouse doesn't work. Let's not have clicking the mouse work to edit your text. That'll be the most helpful for them." So I feel really strongly that people waste a ton of time either configuring the thing, or dealing with the headaches of the thing, or there's some weird rite of passage that developers feel like they have to go through to learn how to use it, which - I don't know, maybe there's some hazing value with that or something, but to me, it's like, why be frustrated using a thing that's like "What the hell is this? It doesn't really --" I think that's the experience a lot of people have when they first use the Terminal, it's like "What...?!"

And then you have people who used the terminal for a really long time and they know how to use it, and so one day they see someone hit like Ctrl+R, and they're like "Oh, man, I can search through things that I did in the past to do them again?" Or they hit Command+K and they're like "Oh, I can clear this?" The basic tool to me is kinda like Notepad, or Simple Text, or something like that, compared to using Google Docs or Word. It's like, you can use it; there are developers who still write code in Notepad, but it's like "Why?"

**Adam Stacoviak:** Right.

**Zach Lloyd:** That would be kind of my -- whereas, I don't know, I feel like it's kind of that big of a difference, or at least that is the level of difference that we're aiming for. And then I feel like when you go one step further and you're like "Hey, this thing is not just like a piece of local desktop software", you start to get the types of features that differentiates something from like Figma compared to Sketch, where it's like "Oh, all of my stuff is everywhere. Oh, all of my teammates can use stuff I did."

So I feel like there's not just one generation of leap that you can take in improving the terminal from Notepad to Word, but I feel like you could go all the way from like Notepad to Google Docs, essentially, where it's like both a better application in terms of the UX, and it's also collaborative.

**Adam Stacoviak:** I'll give you that. I'll give you that. It's almost you want to give everybody the power user hat.

**Zach Lloyd:** Yeah, that was one of the ways we talked about at the beginning... Yeah, exactly, it's like, why can't every user of the Terminal have the same sort of efficiency, productivity, skill with it that a power user has? Why are we making people spend so much time and effort? And the truth is most people never become power users at the terminal, because the learning curve is so insane.

Now, I'm sure that there are listeners to this podcast who will be like "What's he talking about? The terminal is perfect." And that's true. They're probably like "I've got my Tmux configuration, and FCF..." And that's true, it is a super-powerful tool if you invest the time to get it configured and learn all these other ways of doing that. I don't want to be dismissive of that, because people who set it up really well are extremely productive. I've always had engineers on teams that I've worked with where it's like they're really good at the terminal, and they'll find something in the logs that I couldn't find, or they'll be able to do a release in a way that's much faster, and do a whole bunch of Git stuff that I can't do. And so there is -- if you can get to that point. My point is more like that power I don't think should just be limited, and it shouldn't be such a hard journey to get to the point where you're really adept at this tool. And so we want to make everyone have the power of a terminal power user.

**Adam Stacoviak:** How long do you bestow the power then? If I can have in one pane - which I do; I've got Terminal open, and I've SSH-ed into a remote machine, which I do often... And I've got Warp open, and I've SSH-ed into a machine that I'm there often. And there's some things I'm doing on this machine that's like ZFS-related. So z pull is a common command, and if I type z and I up-arrow, I get a list of like more recent things. If I do that in Terminal, I'm just going one at a time, what was in my history. It seems like you've sort of like grepped the five or six lines that's in my history as it relates to z pool, for example, and said "Okay, z pull status, z pull trim, z pull status homestore", which is a particular ZFS store that I might be interacting with... Like, it seems like it's going back in my history. What I'm asking you really is not just how does that work, but --

**Zach Lloyd:** \[28:16\] How do you make it --

**Adam Stacoviak:** Yeah, how do you take these things that are hidden away, really? Because the terminal's like you interact with it, and it interacts back with you. But you've got to have the notion of what the input first. How do you bestow those power user features on just everybody, essentially? How do you expose that?

**Zach Lloyd:** It's a great question, because I'll say, what we don't want to do from a product standpoint is turn the terminal into a mouse-first GUI. That to me sort of defeats part of the purpose of the tool, which is like, it should be a very minimal, lightweight, keyboard-driven interface. We have no desire to take the terminal, make it like you're clicking everywhere. We don't want to put buttons everywhere... And so actually, this question of like discoverability is a really big one.

One really simple thing that we do is we have a universal text-based entrypoint for searching everything. We have a command palette, which is like a pattern that you see in VS Code, Raycast is good example of a command palette-driven thing... And so that basically means in Warp if you hit Command+P, you can search over anything you can do in Terminal. And so that is one nice thing that we do.

A second thing that we do is we have a few hints, really minor hints... Like, if you're in the zero state of the terminal, we'll tell you how to bring up the command palette. Like, all the empty screen, you have run a command yet... We have hint text for how do you get into AI search, and stuff like that. We have one or two UI entrypoints for this stuff. Yeah, but I think in general, that's a hard challenge.

The other thing that you try and do is you can try to guide people to discover stuff in the course of using the app. So for instance, one feature that we have that I think is really cool is if you mistype a command, you make some error running a command, we have an integration with this tool called thefuck. That's literally what it's called. I don't know if you've heard of this tool...

**Adam Stacoviak:** Little editor's note here... This is Adam, by the way. I just didn't want to leave this section here without mentioning how committed we are to just keeping the explicit tag off our podcasts. In this case - hey, just check the show notes for a link; we're linking up the tool in the show notes. So... You can kind of guess what it might be? See you in the show notes.

**Zach Lloyd:** And so what they do is -- it's a funny name, because the reaction is you did something in the terminal and you're like "Oh, man, what happened here?" And so we integrate with that, and we surface the "Hey, this is probably what you meant to do", and we just do it automatically, and we do it subtly. So that's a cool example of how do you level someone up.

But yeah, we're always looking for these ways of "Can we suggest things in flow that will help people learn how to use the tool, without putting a bunch of crap in their face, that if you know how to use it, you're gonna be like "I don't want this"? And the other thing is we could do some of that and let people turn it off, but... Yeah, that's actually a really big sort of UX challenge for us.

**Break:** \[31:21\]

**Adam Stacoviak:** Is your first mission to success - is it to replace Terminal? Like, when you think about the marketplace, and how do we get through where we wanna go... Well, if we just find a way, whether it's paid or not, to replace Terminal, then that's step one to success. Because if you layer on value everywhere else, then that's going to come naturally, right? Is that your first mission?

**Zach Lloyd:** It's not how we talk about it, but yeah, that's not a bad way of looking at it.

**Adam Stacoviak:** Because that'd be my mission. If I were in your shoes, it would be like "How do I take down Terminal? Not that it's bad, but I can be better, and my mission is to replace Terminal." That's step one. And everything else comes from doing step one well.

**Zach Lloyd:** We want people using it. It's like, yeah, if you think about the sequencing of success for Warp, it's people using Warp, and like --

**Adam Stacoviak:** Because Terminal's Mac, right? That's your market.

**Zach Lloyd:** It's Terminal, it's iTerm 2... I don't know if you're familiar with that one. It's the VS Code terminal... And then there's a sort of long tail of more specialized terminals people use. But we want people using Warp. And there really isn't a world where people use multiple terminals. That doesn't make that much sense. And so we want people switching into it and using it, because as a user, you'll be like "I want this as my standard tool." There's no real motivation to switch terminals, so basically yes, but the way that we tend to think of it internally is we want people using Warp because they like it, and it's useful, and it's valuable to them.

**Adam Stacoviak:** Can you Warp in VS Code?

**Zach Lloyd:** You can't.

**Adam Stacoviak:** You can't?

**Zach Lloyd:** You can't stick Warp in VS Code. This is actually one of our top five feature requests.

**Adam Stacoviak:** Well, I wonder if you -- let me ask you a question here. I wonder if you can, but differently. I wonder if you can like TUI it, essentially. Do everything that you do Warp-wise, and like a Warp command that you run in VS Code that is essentially a TUI that runs in the terminal in VS Code. Like, you replace it by running a TUI. That's possible, probably. A lot of work, but possible.

**Zach Lloyd:** I don't think it's possible. The reason I don't think it's possible is -- well, the thing that differentiates Warp from every other terminal is that we do more than what you can do in a TUI, meaning we take over the input editor from the terminal. It's a native thing. That's how we support the stuff that makes editing text in Warp nice. That's how we support multiple cursors, that's how we support syntax highlighting, and hovered reveal documentation; all of those features are built at the layer of the native app, not at the character-rendering layer. And similarly for like the other -- the other big difference in Warp is all the output goes into these things we call blocks. Maybe you could simulate that via a TUI, but I think it would be not a good experience.

**Adam Stacoviak:** The reason why I ask is because VS Code is just so huge... And so the next question is have you surveyed the landscape of terminal usage on a Mac? And to what degree does it lean towards Terminal, to what degree does it lean towards iTerm 2, and to what degree does it lean towards just straight up "I'm in VS Code, so I might as well terminal here."

**Zach Lloyd:** Yeah. It's actually more Terminal and iTerm at war these days. I mean, some people use the VS Code terminal... It's a really interesting question from a "How should we approach things from a competitive standpoint?" I think the VS Code terminal, the biggest value in using that is like a) it's right there, and then b) there's a few nice integration things that you have with the code, which we can sort of actually do a bunch of those from Warp.

\[37:56\] For instance, if your compiler prints out an error message that has a line of code, you can just click on that line of code in Warp and go do it in VS Code. And that's like, I don't know, 80% to 90% of the value of the integration. And people -- I don't know, for whatever reason, developers are more comfortable, especially more serious developers, using a dedicated terminal app than they are using the terminal and the pane in VS Code.

**Adam Stacoviak:** Yeah. I feel like it's always nice to have it. In VS Code it's never been like "Oh, yeah, this is my terminal", because I'm not always in VS Code. Why would I make that my primary, right? I'm gonna SSH into a machine. I'm not always within a codebase, SSH-ing, or doing things in the terminal there. So to lock me in the VS Code box and say "Terminal only there", that's like a really sad developer world for me. I want my standalone app.

**Zach Lloyd:** I agree. And I think for most serious developers, that's the case. So that's actually not the biggest competition. I will say, one caveat there is like if the world moves to Codespaces, or some sort of cloud dev IDE thing, I think the story for VS Code's terminal is more compelling... Because then it's like, you need an easy way of getting your external terminal in the same context as your code. So I think more about VS Code with respect to that, than I do just like here on your Mac doing development do you want to use Warp or do you want to use the VS Code terminal.

**Adam Stacoviak:** Yeah. It's really strange, because I think a lot of infrastructure folks, and I've gotta imagine SRE type folks, maybe... I guess maybe eventually it might be Codespaces potentially, but people who don't isolate themselves to one machine, they're gonna be a standalone Terminal user for life, for the most part, unless they're forced into these git pod Codespaces worlds... Which -- it's still that it's just isolated to their work environments; it doesn't take over everything. You still have configs on local machines, you still have boxes you SSH into, you'll still have homelabby type stuff, or like enterprisy lab type stuff, that they're still on-prem stuff. It's not always going to be in a Codespace or a Gitpod of sorts. The world will always be fractured in standalone terminal apps, to something baked into an environment, to something baked into an IDE, or even VS Code. You're still going to have a need for the standalone.

**Zach Lloyd:** I think so. Look, I also think developers, when there's a choice between like a walled garden, totally vertical thing, and a thing that is more layered and stacked, and where you can pull out and use the pieces on their own - I think sort of the more vertically-integrated thing is great for a starting point. It's great for demos, it's great for hackathons, it's great for "How do I get going quickly?", but like the layered, "Let me have separate applications for separate contexts" thing I think is the more scalable, serious development approach. I don't know if that makes sense to you, but --

**Adam Stacoviak:** It does.

**Zach Lloyd:** ...for example, when I first left Google, I tried to build an app, I used App Engine, and I was like "Oh, this is amazing. Look at all this stuff I get for free." And then I hit an issue in App Engine and I was like "What do I do now?" And then I looked at like the Google support forum and there were 50 other people who had that same issue with App Engine... And was like "Oh, it's somewhere in the application framework/database, it's all connected together, and I can't do anything." So I do think there's a problem with the totally walled garden approach.

**Adam Stacoviak:** So all those questions were really about understanding the landscape of who the monster is you've got to take down. Who the villain is in your world. Who is your competition, who do you need the Goliath, and you be David? Because you're David right now.

**Zach Lloyd:** Yeah.

**Adam Stacoviak:** \[41:56\] And can you take down Terminal? Can you be true competition to them? What does it take? Because that's what you've got to do. You've got to -- if you're on a Mac primarily focused, at least for now; maybe eventually you'll move on, and you can describe that to me, that is the long-term vision... But if Mac is your focus, if I were you, I'd be thinking "How in the world can I replace Terminal for pretty much every developer I know?" Or iTerm 2. Those two things, laser-focused on what it takes to beat them and replace them. And then later on \[unintelligible 00:42:24.03\] from there.

**Zach Lloyd:** Yeah. I mean, honestly, I think the product is there. It's not there for everyone... I'll caveat that a little bit. So the people try out Warp, and obviously, not everyone sticks with it. I think you guys tried it out, you churned... I don't know when you last tried it...

**Adam Stacoviak:** Initially. I think it was early days for it. I'm down to revisit it, and I will, after this call.

**Zach Lloyd:** It's not perfect. This is, I think, a challenge when you're trying to displace an incumbent thing... For us, the specific challenges - I think you can kind of divide them into two buckets... One is someone tries Warp and they have some problem. Some part of their configuration doesn't work, some thing that they're used to in another terminal isn't implemented yet... And this is the majority of reason people try Warp, and they churn or they bounce, is like "Hey, I tried it... I'm used to doing like XYZ with this OhMyZsh plugin, and it doesn't work, and there's no chance I'm taking a step backwards in order to learn the step forwards things in your terminal.

So that's like a real problem for us, and that's -- I will say, it's very tractable, though. It's like a thing that we can solve pretty well, because we get a ton of GitHub feedback; we have 2,000 open issues, or something. People vote those things up, what's most important to them, and then for the most part, we can sort of like fix the things that are broken for people.

The other thing is people will try it and they'll be like "What's the point? Where's the value?" And so that's more of like a -- you have to get someone to see the value in it pretty quickly, because of the patience of like switching to a new thing. It's really hard. For instance, I've tried using new browsers, and if there's some small thing in the workflow that I'm not as efficient at as I was in Chrome, I'm like "Screw it, I'm not going backwards." And then also, I'm like "Well, what's the point? What am I getting from this?"

So those are the two challenges of bringing someone in. And so you can kind of address the brokenness via fixing the issues, and then you can address the "What's the value thing?" by like you have to sort of find ways to demonstrate the value pretty quickly.

But I would actually we're in a pretty good spot. If you look at NPS, for instance, we're above a 60 NPS as a product. For a developer product --

**Adam Stacoviak:** What does that mean, NPS?

**Zach Lloyd:** Okay, so NPS is Net Promoter Score.

**Adam Stacoviak:** Okay, break it down. \[laughs\]

**Zach Lloyd:** Okay, so Net Promoter Score... You've seen this everywhere, you use any product --

**Adam Stacoviak:** I've heard it, yeah.

**Zach Lloyd:** ...you get a little thing when you use the product which says "How likely are you to recommend this product to a friend?" It gives you a scale from 0 to 10. And the way that you calculate the score is anything that's a 9 or a 10 is a promoter, anything that's a 7 or 8 is like a passive, and anything from 0 to 6 is a detractor. And it's the percentage of your promoters minus the percentage of your detractors is your NPS. And the point of this score is to try to give you a benchmark across other products, where do you stand in terms of like user satisfaction.

This is a hard thing to compare; products are very different, but NPS at least gives you some industry benchmark thing. Some really -- you can build a successful company with something that's even like a zero NPS, where you have as many people hating it is as liking it, essentially...

**Adam Stacoviak:** Right.

**Zach Lloyd:** \[46:02\] But if you can get to a point where you have a really high NPS, like what we have, it just makes everything easier; it's a really good indication of customer satisfaction. So that's like a reason for me to believe "Oh, if we just made more people aware of it, people really dig it, we'll get more users." And so in the journey of a life of a startup, if you have a product people don't like and they don't retain, there's just zero point in trying to grow it. I think we're past the point of that. We have a product that people -- at least not everyone, but some set of people really, really love. And so for us, to some extent, it's more of a problem actually of awareness, marketing, can we build sort of like viral loops... Because for instance, most of our growth at work comes from people telling their friends about it, which is, again, where you want to be. We don't really do paid marketing; we do like an occasional sponsorship, or work with influencers... There's various things we've tried, but we're not plowing money into Google, or Instagram ads, or something like that.

So for us, it's how do we increase awareness, get more people to try it, and then how do we continue to make it so that when people try it, the likelihood of them sticking just goes up? So in very broad strokes, that's how I think of it. We don't have bulletin boards up of "Let's crush Terminal", or something like that... But yeah, we want people displacing the terminal, for sure.

**Adam Stacoviak:** I would have those bulletin boards, like "Terminal must die", I don't know.

**Zach Lloyd:** Maybe I'll consider that.

**Adam Stacoviak:** No, I'm just kidding. I'm actually a fan of lifting other folks up. I'm honestly just kidding around that. Mentally, I think you have to put yourself in a live or die situation. Startups -- I mean, if in two years you don't hit X, Y, or Z, maybe you run out of funding, you can't get your Series C... Who knows?

**Zach Lloyd:** For sure.

**Adam Stacoviak:** I mean, there's all sorts of levers that can get pulled to say that your runway is reduced, and eventually you either live or you die; you succeeded or you don't. And so you do have to think in very real terms; you have to think "Terminal must go down for me to go up", at least in the user base. And if you're layering on that. I'm more of a prop other people's buildings up, and fix the street signs, and broken windows, than destroy buildings to succeed kind of person.

**Zach Lloyd:** Yeah. But I think you're totally right about what we need to do... I will say -- so we're also building for other platforms, like I mentioned earlier. Every developer uses the terminal. They don't all use the Terminal app on Mac; every developer uses some sort of terminal, whether you're on Linux... I think even on Windows you're using some sort of -- you're using a console... And then there's value in ubiquity for us. I mean, there's value in being multi-platform, especially since one of the things that we're trying to solve is "Can you make this tool useful for teams?" Well, teams are not homogenous in what platform they're on. A lot of teams will be on like Linux plus Mac, companies will have a mix of Windows, Mac and Linux... And so for team usage especially, we want to be on all these platforms. We want to be on the web, because the web is like a sort of de facto cross-platform thing, if you can do it. We didn't start with the web, because the web is not the primary development platform, really, for many people right now. Maybe that will change. But as like a secondary development platform, or like a place where you want to collaborate with developers, or a place where you want to do like remote access or Cloud Shell type stuff, the web is really important. So cross-platform is a big part of the roadmap for us, for sure.

**Adam Stacoviak:** \[49:49\] Is Teams your success benchmark, in terms of like once you've become the replacement for the default, the free default or the native default that is on any platform - Linux, Mac, or Windows - Teams is where from a business model standpoint it seems like you've put the majority of your eggs; when it comes to a business standpoint, Teams is where your success is at, monetarily.

**Zach Lloyd:** I would say enterprise is -- like, companies paying for it is the thing.

**Adam Stacoviak:** Right.

**Zach Lloyd:** I think if we can unlock a collaborative value prop, that's huge for an enterprise sale. I will say that there are non-collaborative ways of doing enterprise, too. For instance, I think JetBrains is great example. JetBrains sells enterprise contracts. I think it's a really good business. It's not really a teams product -- it's like, they have some team product lines, but I think by and large people are buying individual JetBrains licenses. So there is that as a -- that's another way into enterprise; you don't need to have like a wall to wall distribution. That said, for Warp what I want is a wall to wall team-based distribution, where the business model is much more like Figma, or Notion, or something like that, where the company standardizes on Warp as the command line because it has a bunch of sort of things that we can show and demonstrate to make entire teams more productive if they use it together. So that's what we want, but it's not the only path.

**Adam Stacoviak:** Well, the reason why I asked you that is because your pricing page depicts that. In the tiers you've got free, you've got team, you've got enterprise.

**Zach Lloyd:** Yup.

**Adam Stacoviak:** And all enterprise does is layer on what team is... And so it seems as if you've got shareable things, and maybe it is licenses, but even from just a nomenclature standpoint, it seems like team features, whether they truly are collaborative or not, is where you're planting your flag, because I can hang out in the free tier for free.

**Zach Lloyd:** That's our bet. Yeah, that's totally our bet. I mean, I will say that we're early on the pricing side. We're trying to maintain flexibility. There's a chance we would do something like what Raycast has done, where there's a pro individual tier that sits in between free and team&gt; We haven't done that yet. For anything that we think is going to be paid, we want to let people know that; it doesn't do them or us any favors to take free things and make them paid... And so we're trying to be transparent. The teams stuff is kind of the first place that we've really put a line down, like, that's got to be paid. And the other place we've done it is that there's a real limit on the AI usage, which I think makes sense. It's in line with other companies, and there's a real marginal cost to us.

**Adam Stacoviak:** Nobody expects that to be for free. I mean, any educated user expects any worthwhile AI feature to be a paid feature. I mean, if you offered me GPT-3, that should be free. If you're giving me 4, then that should be paid.

**Zach Lloyd:** Yeah, exactly. I mean, those are the spots that we've tried. But it is totally possible that we will attempt to monetize more of the single user use cases via some sort of pro thing, or that we'll do a more licensing thing... But the place that we're starting on the pricing is with team monetization.

**Adam Stacoviak:** I like the idea of a pro plan, because I'm a pro user for Raycast. And I was actually on the call with Thomas, I was like "I'm not sure I'd ever pay for Raycast." And then here I am, a few weeks later, after the call with him, and I'm like "Okay, I want to use pro, because there's certain things that are in there that I've replaced." I think it was -- not LaunchBar... Alfred. I replaced Alfred. And Alfred basically was free to me, because I'd paid for a license years ago, and I'm still sitting on a license. And so now I've opted into paying 10 bucks a month, at least for now, for Raycast... And now it's even better, because for me, when I have multiple machines, I have the config that moves from machine to machine... And I think the sweet spot there for you maybe to investigate is this idea of dotfiles. A lot of developers move around basic config stuff, and maybe there's a way the pro plan gives me multiple machines, same terminal experience... And that's what Raycast has done for me. If I'm on my laptop Mac, or my iMac Pro at home, that I use as my work computer at home, I have the same Raycast experience, whether I'm here or there.

**Zach Lloyd:** \[54:27\] That's really interesting. So that's the main -- this syncing of all the Raycast stuff across...

**Adam Stacoviak:** Yeah. You can't get that unless you're the pro plan user. Yeah, that syncing is -- I mean, it's essentially you're a team of one, as you've described it. You're a team of one, you're a power user, you've invested in it; you need to be able to move from machine to machine. Or maybe just two. Maybe it's not three or four or ten, but maybe just two, that you need to keep in sync. And even though certain things in Raycast aren't present on both machines. For example, I think it's a quick link, this is what they call them, to certain directories; that directory may not live on that machine, so it just won't show up as a quick link on that machine. But it's still in my settings. So when I go back to the machine, that quick link is present on, then I can go and use that quick link.

So it's really interesting how it helps me become a - what you're trying to do here, a power user to a native, free feature on the Mac. They're trying to win over Spotlight users, and then potentially Alfred and LaunchBar users. It's really about do you desire to be a productive user on a Mac? If the answer is yes, you should use Raycast. And by the way, it's free, for almost everything. And it's like a lot of stuff. I was like "Tom, you're giving so much away for free. Why did you do that?" He's like "Trust me, Adam, it makes sense. I can't explain it all, but when you get into the details, you'll find out why it makes sense." And so now it does make sense, because the things that I want as a power user, I'm gonna pay them for; like syncing, or the AI features that they have now, too.

**Zach Lloyd:** That's good. They picked the right things then.

**Adam Stacoviak:** Yeah. And it's 10 bucks a month, you know? And so, could you get 10 bucks a month from Pro users, that say "You know what, I love Terminal. I want to do all these things to it, but I don't want to make those choices anymore. I want a terminal who's made the font choice, the UI choices, the color choices, that just let me push buttons, versus config to the nth degree." At some point, developers just don't want to do that anymore. They've kind of done it for 10+ years or more. Maybe it's the seasoned developer that really is like "You know what, I just want to have somebody make some of those choices for me and it becomes a button push, rather than a reconfig for every new machine."

**Zach Lloyd:** I mean, we could definitely sell this.

**Adam Stacoviak:** Yeah? When is the pro plan coming out then? After this call, a week or two from now, a pro plan?

**Zach Lloyd:** Yeah, maybe. I'll just go edit the website right now.

**Adam Stacoviak:** I do think there's a lot of similarity between the way that Raycast approaches their market, to the way that you could. And I agree if teams are helping you in -- so let's go there. So if teams, like literal teams, not just teams of one, but teams of one that should be pro users, that \[unintelligible 00:56:58.08\] here in like a week or two after this call... True teams - is that where you're winning? Obviously, that's where you're getting paid... So how well is that working for you? Is the enterprise push truly strong for you, or is it simply in small startup teams, midsized teams? Where are you winning from a get paid perspective? How's that working out? And are they saying "Hey, now that we want to be a team player for you, we want to have that team plan... But you're not on Linux, you're not on Windows, and we have two team members that can't really play in our work team world."

**Zach Lloyd:** \[57:36\] Got it. So sort of the answer is we're a month into teams stuff. We just launched Warp Drive, literally a month ago. And so it's still super-early. The adoption of it is really good, which is exciting... Meaning we're having a lot of things - and this is a totally new behavior - created in a cloud space that's part of the terminal. And so the only type of thing that you can create right now, just to be clear, is what we call a workflow, which is essentially a templated command. And that could be something like some complicated Docker, Kubernetes command, it could be something for G Cloud or AWS... And the types that people are finding the most value out of is teams of people who are doing things with those tools, where it's like they need these commands, there's value in centralizing, and from a developer productivity and like error prevention standpoint having one library that everyone on the team uses. And so the uptake of it actually has been really good since we launched.

From an enterprise perspective, we're literally just starting some enterprise pilots. The lifetime of Warp, we're like a month into it. So it's kind of a little bit too early to tell. But the team adoption, the adoption of the first team' feature is actually super-encouraging for us. And we didn't really know will people do this or not, because there's no other terminal that has a cloud component to it. So it's a totally new behavior. So \[unintelligible 00:59:04.16\] is kind of like we're early, and we'll see... But from a user adoption standpoint, a team adoption standpoint, it's actually really good.

**Adam Stacoviak:** Break down what Warp Drive is then. What can you do with this? What are these workflows?

**Zach Lloyd:** Yeah, so a really simple thing; here's what we use it for at Warp. An example would be we have a command that we run in G Cloud, that whitelists an IP address so that from that IP address you can access our staging rig if you need to. And so developers have to run that when they go work from a coffee shop, or like switch locations, wherever their IP changes. It's a thing that people wouldn't know how to do. You can put it in a script, but what Warp Drive is - it lets you create one of these templated workflows. You create it for yourself first and foremost; people will make these "Hey here are my common or uncommon Git things that I do, my uncommon Docker things that I do." They'll save those... You can parameterize them, meaning you can be like "These are the arguments that go into them as flag values." You can give those parameters actual documentation, and then as the final step, what you can do is you can share it with your team. And then everyone on your team, whenever they're like "Oh, crap. I need to whitelist my staging thing", rather than slacking, or going to Notion, or pulling up a Google Doc, or searching through their scripts or whatever, they as part of basically our command search, so as part of Ctrl+R, you could just be like staging whitelists, and all of a sudden, you have that templated command. So it's a much easier way of sharing knowledge, and sharing commands in the terminal. So that's the first thing.

Now, the way that we've built Warp Drive is that it won't -- this will not be the only type of thing that you can share. For example, as a next thing that's coming - and this is public on our website, so I'm fine saying it's coming - we're building a notebook data type that lives in the terminal. This is something where if you add an entire documentation plus commands workflow - and that could be like "Here's how you do cherry picks into a release", or "Here's what you do if there's high 500 errors on a server, if you want to debug it from the command line", that type of thing can also be created for an individual and share it to the team.

So we're trying to bring these pieces of terminal knowledge that either live in tools like Notion, or confluence, or GitHub readmes directly into the tool, and integrate them deeply, so that they're there, they're easy to find, and they're easy to use. So that's the vision of it.

**Adam Stacoviak:** Yeah. I can imagine that's helpful, especially for teams, because you can have shared knowledge...

**Zach Lloyd:** Exactly.

**Adam Stacoviak:** \[01:01:52.05\] ...but then you get into the challenge of like organizing it. And then it's like "Well, this actually might be better living somewhere else." You sort of bake it into the tool, and then you sort of eject it out of the tool, because it's like "This just too much", you know?

**Zach Lloyd:** What's cool is -- so if it's in the tool, for instance, we can show when it was last run, and whether it was successful or not. So that's a way of keeping this stuff up to date, that if it lives -- I don't know, again, like in Notion or a GitHub readme, it's so much better than a copy paste flow, where you have no metadata around who ran it, did it work... If people want, you can see sample outputs... So I feel like the value of the integration starts to become pretty big if you build this out.

**Adam Stacoviak:** Yeah. I can see it too, because -- I mean, there's things I do in my home lab, less like developery things where I'm SSH-ing into somewhere else and doing something... I'm just a homelab tinkerer; this is where I tinker the most. I'm less building and deploying applications, and my applications live in my home lab. I don't do it often, but when I do, I have documentation I refer to, to remind myself how I did it the last time. And in this case, it's creating a new data pool, essentially; a new dataset in ZFS. And so there's lots of different commands you can run, and things you should do to do it. You could just run one command, it's pretty simple, but if I can have as a workflow inside a terminal, I would probably never go back to that documentation... Unless I needed to read the deeper words of the theory of why this works that way, or whatever. If I could just have that version inside a terminal, organized, I might organize it there, rather than some disparate documentation that may not be easy to access, or it's contextually separating me from where I'm at currently. Those are things I could probably do pretty frequently. I mean, even your typing in partial of a command and up-arrowing and getting five or six examples of the last commands I've run that are similar, that's more helpful than up-arrowing forever. That to me is a UI nicety that I love. I mean, that almost wins me over right there; the basic terminal user experience that just gets added to based upon existing knowledge of how to use the terminal.

**Zach Lloyd:** I mean, that's like a lot of our approach. For instance, we just did a hackathon, a hack week, and one of the things that a couple engineers on the team added was a concept of adding metadata to terminal history... Which I think should obviously be there. So if you want to like up-arrow, but you want to, for instance, I don't know, find commands that were only done in a certain directory, or only were successful, and not errors; or you want to be able to search them, I don't know, by the day \[unintelligible 01:04:42.23\] The normal terminal setup just has like the ability really to go up, up, up, up up. If you're a fancy user, you can start to like grep through your history file, you can configure your history to have date/time stamps... There's ways to do it, but it seems to me like such a basic thing that your command history should have this metadata.

And so to your point, it's like, we're gonna launch that, and then all of a sudden, magically, your ability to search for past things you did is going to become much better. So that's like the kind of thing that we're trying to do.

**Break:** \[01:05:21.16\]

**Adam Stacoviak:** Here's an easy feature suggestion/request. So I love the fact that I've typed in Z, and pushed the up arrow, and it gives me all my z pull commands, essentially, of recent. And I love the interface. It's simple. It doesn't say anything about dates; like you said, metadata, when it was last ran successful... But what if that UI just changed if I push the Option key? And now next to all those commands somehow is like Date Last Ran? And you don't need to say this, Data Last Ran, just do that. I'm gonna probably assume "Okay, that was ran in some way, shape or form six days ago", or whatever. I know how recent this command was ran. Maybe that's relevant, maybe it's not, I don't know. But that seems to be like -- because sometimes I'm like "Well, okay, I ran this command... But when? How long ago did I do this thing?" Not that it's necessarily important, but it's more like how stale is it, so to speak? You know what I mean?

**Zach Lloyd:** Yeah, for sure. I like that idea. I think the challenges with this kind of stuff is like you don't want to surface too much; that gets in the way. But like giving people a --

**Adam Stacoviak:** A modifier.

**Zach Lloyd:** A way to be like "Hey, let me -- I'm trying to dig through in my commands..." An example I often use is I set up some service on GCP a year and a half ago, and I have no idea what I did, when I did it, but it's no longer working... And I needed to like go back and like figure out what the heck did I do... So for a case like that, I want more information. But for -- I'm just running a bunch of Git commands... Don't get in my way; just show me the plain thing.

**Adam Stacoviak:** Yeah, exactly. Don't always show me the date. But that's what I was thinking, like the Option key is a common way to get more information from a command palette. Or even on a Mac, it's similar. You have a command palette and you push the Option key, and it morphs into advanced features; it gives you more something.

**Zach Lloyd:** That's really cool. There's probably other places in the app we could do that as well. I like that idea.

**Adam Stacoviak:** Yeah, it's just a way to get more information. And maybe -- yeah, exactly, in config or somewhere you can confirm or kind of define what that might be, what the modifier key does when you use it in that context. Does it show me the date? Does it show me something else that's more relevant, that I can't think of, because I don't work on your team? But I like -- it's almost worth me using this as a daily driver... I don't have a lot of crazy needs, but just that alone; showing me more recent commands than just simply one, which is what terminal does.

The one thing that I will say that I'm kind of finding confusing is that I use OhMyZsh, as I mentioned, and I have a theme... I think I use candy, is the one I use in OhMyZsh. And what's interesting is that when I SSH into this remote machine, the prompt is different than what OhMyZsh should be. I'm just curious why that might be... Without looking at my screen, try and debug that for me, Zach.

**Zach Lloyd:** \[01:09:57.10\] Oh, that's easy. So Warp renders a default prompt. If you want to use OhMyZsh's prompt, you can right-click on the prompt and say -- I think it's... I forgot.

**Adam Stacoviak:** Oh, I see. Yeah, copy prompt, \[unintelligible 01:10:11.19\] directory, or use my own prompt.

**Zach Lloyd:** Use my own prompt. That should set you back if your OhMyZsh is set up, and it's compatible...

**Adam Stacoviak:** Just like that. Look at that. Live debugging.

**Zach Lloyd:** Did I do it?

**Adam Stacoviak:** Yeah, it worked.

**Zach Lloyd:** Alright.

**Adam Stacoviak:** Just like that, man. So cool. Okay... I mean, because there's some people who define their prompt really on that machine. And so OhMyZsh really just lets you do it. And I like it. Everywhere I go, I have the same OhMyZsh theme chosen on any machine I'm on where I have OhMyZsh in place. And I don't put it everywhere. I don't put it on every single possible virtual machine ever. But I do on the ones I'm often doing a lot of work on; I'm just not logging in randomly for it. It's something I'm in often. I'm either updating Docker stuff, or I'm pulling a new image down, or I'm obviously doing Linux stuff, operating the operating system, all that stuff. So I mean, I like to have a terminal set.

**Zach Lloyd:** I mean, hearing you mention that-- this is like a great example of a reason I think some people bounce from Warp. It's like, they come in, and they're like "Where's my prompt?" And like, we're trying to do something helpful here. This is like a self-reflective criticism of how we're doing this. We're trying to do something helpful, because there's a whole bunch of people in the world who've never set up OhMyZsh, who we try to give them something useful out of the box, with a prompt. That shows like your Git status, it shows your direct -- it shows a few basic things. And for those people, they come into Warp and they're like "Oh, this is cool. I didn't know that my git branch can change as I'm navigating around." On the flip side, there's people like you, who are like "I set up OhMyZsh for a reason. I want it this way, and I'm coming into Warp and it's not working." This is an example of us kind of messing up the product experience, in my opinion...

**Adam Stacoviak:** Kind of. Kind of. But at the same time, just to play advocate back to maybe the reasons why you chose this... If me using Warp means that I don't have to do so much custom config on a machine, then that's more helpful too, because I've got custom config that I may no longer need because Warp does it for me, and potentially better.

**Zach Lloyd:** Totally. I view this as -- it's a feature of Warp that when you SSH to a machine, you still have a usable prompt. Because if you don't have OhMyZsh or you haven't done that, you just get garbage on your prompt when you go to some other machine; it doesn't tell you --

**Adam Stacoviak:** Well, there's got to be a way you can detect some config to a prompt there. Like, it's clear that I'm using OhMyZsh, because there's a dot directory. So you can probably do something more unique there...

**Zach Lloyd:** Like, we could do a much better job. We could either sort of intelligently be like "Oh, this person has configured their prop. Let's just honor it", or we could give people an explicit choice as part of onboarding... But it's just an example of like there's a bunch of stuff like this which, as a startup, I think it's --

**Adam Stacoviak:** Right... Pick your battles, right? But that is a bounceable battle. That could make somebody be like "Okay--" Because if you didn't answer that question for me, where in the world would I dig for that information?

**Zach Lloyd:** It wouldn't have been too hard. You could have used the command palette, or gone to settings, or right-click... But it's hard enough that type of friction, I think if you have a user who's not really high intent, to be like "Oh, my friends were raving about Warp. I'm gonna spend the time to read the documentation, I'm gonna poke around..." Someone could be like "Ah, screw it. It doesn't work."

**Adam Stacoviak:** Yeah, it changed my stuff on me. It didn't honor my choices. Come on, what's going on here...?

**Zach Lloyd:** Yeah. I think it's a really good example of the type of -- it's an interesting product challenge. We're getting better and better, but... Because it's all in the execution of this small stuff, adding up to like "Is it really a good experience for users, or is it like a not great experience?"

**Adam Stacoviak:** \[01:14:05.16\] Yeah. Well, I think the things that, in my opinion, are the basic choices of color, color palette, the look of the interface, as you mentioned, that sort of reuse of the open space to show the user "Hey, there's a command palette here. There's some power features here", whenever you're in a Command+K situation. I ran some commands, I had some things on my terminal, and I Command+K-ed just now and cleared it, just to see if I'd get back to this sort of like vanilla command palette, command search, Warp AI. And for the listeners, there's a lot of open space when you have the terminal cleared. And rather than making you think "Okay, where's everything at?", they just print to the open space things you could do. The command palette is Command+P, command search is caret and R, and that's actually a capital R, and then Warp AI, which is the same the same caret and space. So you can kind of get some different things... It's like waypoints. That's good stuff. I like that.

But the thing I think that people really desire when switching is beauty. Do that survey. What font do you use in your terminal, or in your IDE, or in your text editor, and you'll get 1000 choices, right?

**Zach Lloyd:** Yeah.

**Adam Stacoviak:** But, if you choose one that is nice, and you've chosen some good interface, and some good things that are around that, that's almost half the battle to replace the native vanilla default that's free, because there's a natural visual upgrade.

**Zach Lloyd:** Totally. I mean, probably making the terminal look nice is the most number one thing people customize. Not like any of the functionality stuff. So yeah, if we can give them that easily, then... And I don't know if you've looked at any of the theming that we have, but if you do Command+P and then look at some of the themes, we do try to make it really easy to have a beautiful terminal experience, again, without a lot of work. And that's a pretty popular thing; people will post their themes on Twitter and Reddit, and I do think there's a lot more we can do to actually make this, the theming aspect of Warp even nicer. But yeah, I think you're totally right.

**Adam Stacoviak:** So in terms of theming, I think for me, I like Dracula. I've supported - although I don't think he needs much support with it now - Zeno, with his new company, Resend. Dracula Pro. So I've been a Dracula Pro, buyer, subscriber, purchaser, whatever you want to call me... And I will almost unanimously go into my settings and do that. And so for me in particular, with my -- I'm a Terminal app user, and I've got Dracula Pro setting. I think I'm using Van Helsing, or something like that. So I've like literally pulled the theme into OhMyZsh, configured it in, even fine-tuned it a tiny little bit, just because there was one thing that was bugging me about it. But that's the kind of user I am. I want to be able to select some themes... But again, what you're trying to do is make that hard path easy, make everybody a power user, and so I'm sure you've got -- I see these here, you've got like Solar Light, and Dracula...

**Zach Lloyd:** Yeah, we have Dracula.

**Adam Stacoviak:** Yeah. But not Dracula Pro though.

**Zach Lloyd:** We don't have Dracula Pro. What's in Dracula Pro, out of curiosity?

**Adam Stacoviak:** Well, Dracula Pro I think you have to buy, so I don't know how you would get that in there... Not that that's a live or die feature by any means, but in my terminal, Terminal.app, I know exactly how to apply Dracula Pro, because Dracula Pro's documentation says "Here's how you do it." And so they make it really easy.

The point is it's less about like a particular theme, but more -- this is something that Raycast did too, where I didn't think it was that big of a deal. I actually kind of mocked Thomas a little bit... I'm like "Theming is that big of a deal, really? People really care about theming with Raycast?" He's like "Yeah." I'm like "Alright, whatever." So that's a paraphrase of that snarky comment on the podcast.

**Zach Lloyd:** I mean, I can't speak to Raycast, but people really do care about it with the terminal.

**Adam Stacoviak:** For sure. Yeah.

**Zach Lloyd:** \[01:18:02.23\] Almost the number one tool, in some crazy way... People share their terminal look and feel on Reddit as like a point of pride. So it does matter for this tool, that much I know.

**Adam Stacoviak:** I'm not sure you can get away with it, but they did somehow... They charge to be able to do theming. So you have to be a pro user to fine-tune your theme. Otherwise, you get the default. And I'm like, that alone almost made me upgrade, because it was that feature plus a couple of things... It was more like that was the thing that came "for free" with upgrading, which is an oxymoron; it's not true. I don't think it makes sense. I think you should let people theme out the gate. You can't do it in this.

**Zach Lloyd:** I think it's too core and too table stakes of a feature to let people... I could see it being part of like syncing across all your machines; the same theme and setup is everywhere. But yeah, letting people theme their terminal doesn't seem like a premium paid feature to me.

**Adam Stacoviak:** Let's dovetail into more of the journey of getting it right. What has it taken to get to here, build the team, raise money, add new features, markets, not market, establish a YouTube channel? I've sort of mapped out several things I think you've done, and some things I know you've done, but let's dive into the bloody knuckles. What's it taken to get to this moment?

**Zach Lloyd:** I mean, it's hard. Starting companies is super-hard. I'm the only founder, so this is one thing that is -- you know, some companies have multiple founders. I'm a solo founder. In general, the first thing was just me getting conviction that I wanted to work on this for a really long time. Startups are super-hard, they're painful, they go sideways, they fail... And firstly, it was just like "Do I believe in this enough? Do I care about it enough? Do I want to work on it a long time?"

I knew that I wanted to do it as funded, venture-backed company. To me, it's the fastest way just to see if something is right or not. It's like, I want Warp to be successful fast, or not be successful fast, to be honest. I had done a venture-backed company before, which was super, super-helpful in kind of understanding a ton of aspects of things I'd want to repeat and things I would not want to repeat; it was helpful for understanding fundraising, helpful for understanding what the pitch should be, it helped me build my network... And so for Warp I was pretty fortunate, I think, relative to other founders, in that I had a couple investors who I had already known. I didn't really go out and do like a wide pitch; these investors were interested in supporting Warp out of the gate. So it was, for this idea and for me, relatively - not easy, it took a lot of work, but still, I was able to raise a seed round, honestly, when it was just me, when there was no product, and it was really just like pitching the idea, which is unusual, but I was able to do that.

The step after that was all about "Can we build an initial team and an initial product as fast as possible?" And you know, when you have no product, and all you have is like a concept and a vision, it's really hard to sell people on joining you; that's just like a fact. It's hard to describe why this thing is going to be successful, there's a million reasons it could fail... No startup is a slam dunk, but this one is like -- you know, you have to be able to answer the questions of like "Why hasn't anyone done this? Is there a real business to build here? Do your product ideas make sense? Is there any demand for this?" So you really have to get good at pitching it.

\[01:21:38.24\] For me, the first person who I really wanted to hire was a designer, actually. And I was fortunate to sort of pitch and find someone at the right spot in their career, who was an awesome designer to join us... And the reason I wanted to hire a designer was I knew for this idea the best way to convince engineers that this was a good, viable idea was to actually - not so much like describe what I want to do in words, but actually show "Hey, here's the vision for how the product will work."

So I hired a designer, and what we worked on to start was just "Can we put together from a design standpoint something that shows rather than tells what the product is going to be like?" And then with that, I was able to convince some really awesome engineers to come work on this with me. And feel free, if I'm giving too much or too little detail here, you dig in... But it's like, it was all about building this initial team of - not a lot of people; maybe like five, six people, where we had design, and we had engineering, and that's all we really cared about at that point, was like a small team where we could start to prototype, build out some of these features, see if they are technically feasible... And then honestly, it was just like "How quickly can you get to a feedback loop and see if the product ideas are right or not?" So honestly, for the first year of the company, it was just hiring that initial team, building an MVP... We built it actually using web tech to start, so we built it using Electron and TypeScript. And then we made a decision, which I think was the best product decision we've made, to switch to doing it in Rust, and doing it fully natively. And then we kind of built it for real.

And then from there, we tried to go to our friends and family use it; that was like a fail. Don't do that. Then we got enough confidence that we were like "Hey, let's just take a risk, put it out there on Hacker News, with just a website, and see if there's demand, for at least the way that we're describing it." So that's a sort of shortcut that you can take; you can build like a marketing site that describes the product.

We did that, we got people to sign up, we started putting them on it, and then we had a feedback loop where we could be like "Okay, this part of it works, this part of it doesn't work. People churn because of X, people like Y." And then we've been able from that to sort of -- you know, at every step in a startup it's just like slowly getting over that next hurdle, and ratcheting things up... So we got like a feedback loop going. From that point, we were able to fix a lot of the things that were breaking for people, and then add on to the spots where we thought there was value, up to the point where we were able to do a public launch, and demonstrate that there was actually a lot of demand, and that the product was sticky. So that's like the very condensed kind of version of it.

**Adam Stacoviak:** Yeah, for sure. I was looking at your announcement page recently... I think it's like from a day or two ago. This is like recent, no? Sorry, it's not June. This is July, Adam. So this is last month...

**Zach Lloyd:** A little over a month ago we announced the series B, yeah.

**Adam Stacoviak:** I thought it said the 21st, so I was like "Man, that's a couple days ago." Yeah, I mean, the names here that believe in you, to me, is almost convincing. Even if the product is not necessarily, which I think it is... But I'm saying, like, some people may think it's not.

**Zach Lloyd:** For sure. Some people don't, some people do.

**Adam Stacoviak:** Right. I mean, Marc Benioff... I mean, that's a big name. Sam Altman, Tobi from Shopify... I mean, these are people that understand the developer world very well, all of those folks... Enough to fund a $50 million series B.

**Zach Lloyd:** Yeah. I mean --

**Adam Stacoviak:** Mark's a comeback. Mark's an existing investor, came back for this round, too.

**Zach Lloyd:** \[01:25:34.05\] Yeah, everyone who's invested in the early rounds have invested in the later rounds. Okay, we have great investors. So we have -- Sequoia led our series B, which I think if you're going to have an institutional investor, they're historically the best one, or at least one of the best ones. We have GV, who led the seed, I worked at Google for a long time... That was part of the reason I knew the folks there... And then we have Dylan Field, who is the founder and CEO of Figma, who led the series A. He was an angel investor in the seed round, and got a lot of conviction around the idea, the team, and really loves what we're doing and has been incredibly supportive.

So from like a funding standpoint, not just the money, but who's invested, I feel like we've gotten incredibly fortunate. Yeah, I think people believe; really, really big picture, the pitch is something like "This is a daily use tool for most developers." It's an area that has not seen much innovation; it's very low in the developer stack, meaning like a lot of important developer activities happen in this tool... And they believe in the product opportunity, they believe that we could build something that gets millions of developers using it, and then you know, they're more of the mindset, on the business side, of like if you have a daily use thing that millions of developers use, \[unintelligible 01:27:09.10\] at this spot of the stack there's a lot of ways to potentially build a great business around it.

So that's like the pitch in a nutshell... But then they're not investing without also user traction, seeing that people love it, seeing that the team is really, really excellent... And yeah, I would say -- I kind of glossed over this, but one lesson I took from our first startup is just really the importance of team. We're not a big team at all relative to the funding that we've had; we're a 30-person team, and we just hire very, very carefully, and really try to bring on people who I think are exceptional. And a small team of very exceptional people, I think, can -- generic startup advice here, but I do think there's a pitfall that some startups will make when getting a lot of money, to try and hire faster than they really should. And we're really trying to avoid that, and just focus on quality and who we work with.

So yeah, the short answer is I wouldn't be doing this if I didn't think there was a very big opportunity... And there's a lot of obvious ways that it could go wrong. There's sort of like a leap of faith that you have to take, but I think that's part of founding a company, and I'm pretty excited by what we could do here if we execute well.

**Adam Stacoviak:** I know how much money $50 million is, but is that a lot of money for your runway? Does that sustain you for years to come? When you talk about hiring and being mindful...

**Zach Lloyd:** Yeah, the short answer is we're being really mindful of that. The startup funding environment right now is not good, especially for going and raising our next round... We have to get really far; I think far for us - either in terms of user traction, revenue, all those things... And so the philosophy of spending the money is the kind of marginal dollar out I think should create more than that marginal dollar in value for the company. And so there's a million ways as a company that you can just incinerate cash as a startup, and that is a very tempting thing to do, is just like pay -- I think the most common one is paying for growth. And we're really not doing that, and trying to build something that's going to be around for a really long time. And so, again, we're fortunate to have the capital, we have a lot of runway with it relative to our team size, but we also need to get really far.

**Adam Stacoviak:** Well, since we've glossed over and not gone deep on really at all the artificial intelligence features that I think you've launched already, or plan to launch - you can correct me where I'm incorrect, but... Having Sam as part of an angel investor - is there any OpenAI particular tie-ins that might come from that angel relationship? Can you allude to some potential future that you have there?

**Zach Lloyd:** \[01:30:05.25\] Yeah, you can try it. So if you want to try it right now, you just type a pound sign and then you ask for a command in natural language, and we give it to you. So if you want to type pound, and then type "find all files written in Rust that are longer than 50 lines", or something like that, it'll give you the command. So we have that integration.

And then we have a second integration, which is you can go into a conversational mode; it's based on ChatGPT, but the cool thing is that it's actually integrated fairly deeply with Warp. So if you have a terminal error, you could ask how to fix it; if you want to do something in production, you could ask how to do it, and it'll guide you through it. And these features are - again, they're not... I know every company has an AI strategy at this point, and half of it is just hype... These are things that are pretty heavily used by Warp users, and they make the learning curve of doing things in the terminal just so much easier. So it's launched, and it's real... But it's also just the beginning.

And then to the Sam Altman question - these are built on OpenAI. We got some early access... So there was -- but nothing that other companies... I don't want to say we're getting any sort of special treatment relative to other companies from Sam Altman, but Sam's supportive, and he was a good, strategic investor for us to have, because the terminal I think is a great spot for applying this type of tech. Everything you do in the terminal is text-based; these models, a lot of them speak text in and out, they're trained on a lot of terminal data... And so it's a kind of natural integration.

**Adam Stacoviak:** I was just thinking - not that Warp would be absorbed into or acquired by OpenAI, by any means, but if you want to get immediate traction, I think if OpenAI released a terminal application that had AI entrenched in it; not just baked in, but like, it's there... I think that their brain is so wildly successful and so well known that there might be something possible - that they can acquire you, or with the same relationship that might become more realistic that to dominate really it could be an OpenAI version of the terminal, that's steeped in AI.

**Zach Lloyd:** Yeah, I guess a couple thoughts there. One is like doing partnerships, co-marketing... Open AI I think is a good one. We've been on their blog. Another good one that we have some really good integrations with is Docker; we're working on some actual features where Docker plus Warp makes it a lot easier to work with any kind of Docker container from the command line. And then I do think there's something interesting about a purely AI-driven terminal, and it's a thing that we've talked a little bit about, like "Can the primary interface to the terminal be natural language?" My short answer is I don't actually think that's what you want as a terminal user.

**Adam Stacoviak:** Yeah, probably not. But I mean, it would be compelling. I'd try it. I would certainly try it. I mean, if done well, and everything was AI-driven, and I didn't have to leave, and it had -- I mean, the reason why I think it could be somewhat compelling is less about me truly wanting it, and more that from my experience personally, the OpenAI coding-related feedback, whether it's how to build x, how to do a bash script... I mean, anything whatsoever - they seem to be the best with code generation, code creation from AI.

**Zach Lloyd:** \[01:33:31.28\] It's amazing. 100%. Yeah, and we have that in Warp. You can ask it to write your scripts, or ask it -- it's not just for commands... You can ask it to debug compiler errors, and people use it for all of these things... But you have to ask. And so I think a question for us on the AI side is can we get to a world that's a little bit more like Copilot, where it's sort of ambient, and always on, and just doing stuff for you? We've been very careful with that, because it's built on OpenAI's APIs, and there's a lot of sensitive information that flows through the terminal, that people don't necessarily want going and hitting some third-party API... And so from a privacy and security standpoint, we have to be -- basically, we have to be very transparent and explicit before we do that type of thing. But I agree with like there's a lot of potential value in an always-on, ambient AI helper in the terminal, which is what we're working towards. And I think doing some sort of partnership - I don't really want to be acquired right now - with OpenAI would be interesting.

**Adam Stacoviak:** Yeah, I wouldn't want you to be acquired either. I think it might make sense to be separate. But if you have the larger resources -- like, if you were the Open AI terminal, essentially, that had AI baked in, then that's the same as being acquired. I mean, you might as well just be --

**Zach Lloyd:** They have so much distribution, and so much breadth... I think you're totally right about that.

**Adam Stacoviak:** If I were in your shoes, I would be doing my best to leverage that possibility, to some degree, or enable that future... I don't know how close your relationship is with Sam, but I would be sending him his favorite drinks, or something like that, or special presents to his house, or whatever. Like, "Sam, let's --"

**Zach Lloyd:** \[laughs\] I see... I'll see what I can do.

**Adam Stacoviak:** So what's the next big step then? If we're looking over the horizon, to some degree, can you paint the future picture? What can you tease? What can you share that you know is coming? Where are you going when it comes to Warp?

**Zach Lloyd:** Yeah, so I can tease a few things... I would say for the next two, three years, the product vision is very focused on world's best terminal. Like, 10x better terminal. If you are in the command line, you should be using Warp; you should be using Warp with your teammates, you should be using the AI features, you should be using the knowledge sharing features of Warp. And to make that a reality, we have to be available on more platforms. So like I mentioned, that's coming.

And some of the collaboration features that I've teased, I can reiterate... There's going to be more stuff coming in Warp Drive; there's gonna be a notebook format, there's gonna be... And this I'm comfortable teasing, too; it's on our website - there's going to be the ability to do real-time terminal sharing, which I think is super-cool. So if you are trying to help someone set up their development environment, it would be easier for you to just be in it, rather than be on Zoom. So in the same way that you get fully-native collaboration in something like Figma, or Google Docs, you're gonna have that ability in Warp. You're gonna have that ability even if you are not using the native app, because we're building a web version, so you're gonna have the ability to do it via a link.

And then there's going to be like a set of features that are really about just still leaning into "How do you make the individual more productive in the terminal?" And so that's things like -- like, I mentioned earlier, history should be much better, for instance. Or working with output logs should be much better.

So that's the focus for the next few years, for sure, is like how do we get everyone, every developer in the world who wants to be more productive in the terminal - which really should be everyone - and have less pain in the terminal, using Warp?

Longer-term - I mean, the company's vision and mission is bigger than just world's best terminal. So the mission of the company is to help developers ship better software more quickly. And so I think there's a set of sort of interesting, adjacent opportunities to the terminal that we will look at, that I don't really want to go into too much detail on... But the sort of thought experiment is like, okay, if you have millions of developers using Warp, what are other areas of the development lifecycle around shipping software that you could help people get better at?

\[01:37:58.23\] And so those are things that we're also sort of thinking of. But you have to have a focus, and short-term our focus is kind of like what you said, like "Don't use the built-in terminal, or don't use iTerm. You should really be using Warp." And that's what we want to get developers thinking.

**Adam Stacoviak:** Well, I didn't ask you about open source, though. Now that you mentioned you want to be the world's best terminal... The last time you were on the Changelog here - this is Founders Talk, but I feel like the question is still pertinent.

**Zach Lloyd:** Oh, yeah.

**Adam Stacoviak:** Has your opinion changed? Like, we basically -- I wanna paraphrase; I don't recall directly, but I feel like we badgered you, or something... Like, it didn't feel positive.

**Zach Lloyd:** Yeah, you badgered me. \[laughs\]

**Adam Stacoviak:** Yeah, we were like "Come on... Come on here." So has your stance changed?

**Zach Lloyd:** I don't remember what my stance was last time, but the current stance is --

**Adam Stacoviak:** I think it was "No, not now", basically, to paraphrase. It was "No, not now."

**Zach Lloyd:** So I would change it to - the plan of record, and the plan within Warp is to open source, but we have not yet open sourced. And then I would caveat it a bit with like "I don't know exactly which pieces." So we have a UI framework which makes sense... I believe it makes sense, but I don't want to publicly commit to really open sourcing the entire client codebase, to be honest. I think it's in our best interests, honestly, just from the company's perspective, and I think also from a community perspective. I think as we start to introduce more extension points into Warp, there's all sorts of positive things that would come from us being open source... We just haven't done it yet.

The thing about a startup considering open source is open source is a one-way valve. You flip it, and then it's like you're forever open source. You can't hit Control+Z on it, so to speak. And so when we do it, we want to make sure that we've really thought it through, and that it's a thing that we're are comfortable with for the rest of the lifetime of the company. But my attitude is that it's probably in our best interest to be open source, and that probably that's the direction we're heading... But I get that for some of your listeners, they're gonna be like "Oh, that's startup BS. Just do it." I'm a developer, I get it, and I guess that there's also some people who won't touch Warp until it is open source... And that's understandable. So I don't know, that's like my current thought. If you want to lay into me, go ahead, but...

**Adam Stacoviak:** I'm not gonna lay into you, Zach... \[laughter\] I do disagree, in some cases... So I disagree that it's a one-way street, that it's an on/off valve...

**Zach Lloyd:** Really?

**Adam Stacoviak:** Yeah, totally. I mean, Sentry is an example. I think they began as "more open source." The BSL license - the code is still open. But the BSL license is not OSI-approved, so it doesn't meet the criteria. And there's a whole hoopla you can get into by going \[unintelligible 01:40:54.01\]

**Zach Lloyd:** I didn't realize this, that Sentry was on the --

**Adam Stacoviak:** They relicensed a few years ago to the BSL license. So you can go different route. I mean, ElasticSearch, MongoDB... There's major kerfuffles of license changes. Linux itself, RHEL just changed how they make source available. I mean, the license didn't change, but there's change you could do.

**Zach Lloyd:** I'm not an expert on this, but I feel like Elastic is an example of failure mode, maybe. It feels like Amazon just took their thing and -- like, people doing the BSL, I think it's actually pretty understandable. If you're CockroachDB --

**Adam Stacoviak:** In that case, they went to the SSPL. So there's the SSPL license, there's the BSL license...

**Zach Lloyd:** But the problem is even if you go and do one of those, it basically just means new stuff is under that license; the old stuff is what it is... Which - maybe that's enough.

**Adam Stacoviak:** Yeah. But I mean, if it's so far back, if it's two-year-old code... I mean, once code is kind of two-years-old, or more... I mean, all I'm saying is --

**Zach Lloyd:** This is honestly good feedback.

**Adam Stacoviak:** Yeah, for sure.

**Zach Lloyd:** So what you're saying is there is a mitigation to the risk of like you do it once and it's always that way.

**Adam Stacoviak:** \[01:42:10.19\] For sure, yeah. I mean, I would say somebody that you could talk to is Adam Jacob. He's somebody I would talk to when it comes to how to build a company around open source. He's done it well. He's doing it again with System Initiative. He was just on the pod, so you can go back and listen to that... But BSL is eventually open source. So you can essentially -- your code is open, people can contribute, you can have contributor agreements, and stuff like that... But it's BSL under a certain license, and then one year, two year - I think you can pick your term - it converts to a truly open source license, where BSL has restrictions. Yeah.

**Zach Lloyd:** What do you think developers think of it? Like, if part of the reason that folks won't use Warp --

**Adam Stacoviak:** People love Sentry...

**Zach Lloyd:** Okay. So you think people are like "It's way better than being closed source"?

**Adam Stacoviak:** There's so many anecdotal feedback loops you can point to... One in particular - so we have a partner in search called Typesense, and Jason Bosco is the founder. I can link up to him. And this is all on the pod. I mean, this is great stuff for everybody to listen to. He's been on the podcast, and he shared their open source journey. They were - if I can remember correctly, they were proprietary and then converted to open source. And their bug count was way high as proprietary, and it became better software as open source, because people were finding and helping fix and just identify the software issues. And so there's just so many, there's so many things you could point to that are positive when it becomes open source software. It's less about "We've built this thing of value, and then people could just take it and do what they want with it." That's a concern as a business, and I totally get it.

**Zach Lloyd:** For sure, yeah.

**Adam Stacoviak:** There's another value when you think "I want the community to love this thing", and you're building it around a community. Because one thing you said was there's things that open source can provide us, meaning you benefit. I think there's things that Warp can provide as making it open source that makes the community better, and therefore you better as well.

So it's about how you treat this relationship with your future users, whether they're on the free plan or whatever, or they're on the pro plan, or the team enterprise... It's about how you treat the long-term value of this code. Code that is open is more useful than code that is closed.

**Zach Lloyd:** For sure.

**Adam Stacoviak:** That's bar none, right? So if you want your life's work in this to be more useful long-term, then open source has many, many paths that are worthwhile for you to consider. I think it totally makes sense for you to get great advice, and not just my advice, and my, as you said, haggling you or whatever, about this laying into you... Because that's not what we're doing here, right?

**Zach Lloyd:** \[01:44:42.12\] This is literally an open question that I'm writing a doc about, and trying to talk to people... Because I know that there's a lot of startup, again, BS, when people hear this, but I legitimately think this is probably the right thing for us to do. I'm just in a mode right now of trying to understand the risks, the best way to do it, that type of thing... Because open source has like a lot of different ways you could do it, things that it could mean, ways you deal with contributions, whatever the license is... And so I'm trying to figure that out. I do think it's in Warp's best interest, and like you said, it's probably in the user's best interest, which is, at the end of the day, the thing I care about... The thing that I care about most is just doing what's useful for developers. I want the business to be very successful, obviously; I care about that, too, and I have investors, and this is not like a hobby project... But I also, the motivating thing for me is doing stuff that's useful.

**Adam Stacoviak:** Yeah. I think you should seek out good advice from people who have been down that road. I think I'm anecdotally good advice in terms of who to speak to... Adam Jacob comes to mind because I love Adam, he's awesome, he's got great opinions, and he puts them out there very clearly. He speaks well about his opinions.

**Zach Lloyd:** I mean, I might ask for connections after this, if you're cool with that.

**Adam Stacoviak:** He's been down the road, for sure. He's touchable -- I mean, you can reach out to him personally, but I'm happy to connect you.

**Zach Lloyd:** Yeah, that'd be good.

**Adam Stacoviak:** Adam is somebody I'd go to personally for -- if I was in your shoes, if I was doing what you're doing, I would be like "Adam, can you please help me with making some wise choices here? You've been down this road. What would you do? How would you treat this? How can I give the most value to developers, but also retain some value in my product?" And he's got some really clear advice, and he's given that advice on shows... I'd go back to his shows on our show, and listen to that.

**Zach Lloyd:** I may do it. I'll listen to his pod and then I might want to talk to him if you're down.

**Adam Stacoviak:** There's a few of them. Three like three or four of them. Well, I think the open source light is still on in your corner. We may see it go out... I don't think so. I think it will get brighter. I'm encouraging you to do it. I think you'll see a change. I don't know how to advise you to go about that route, because I don't know all the details, and I'm happy to go behind the scenes with you... But from a podcast, one-way perspective, I don't know much, so I can't say unequivocally "Yeah, that makes sense. I think in a lot of cases, it does make sense, and it's up to you to figure out how to best go down that road.

**Zach Lloyd:** I agree.

**Adam Stacoviak:** But I think a pro plan is in your future. You should definitely ship that. An individual, team of one pro plan - that makes sense to me.

**Zach Lloyd:** Yup.

**Adam Stacoviak:** What else? What's left unsaid?

**Zach Lloyd:** No, I think that we've figured out a lot of the future directions here. I'm psyched.

**Adam Stacoviak:** Sweet, man. Well, anytime you want advice and direction, just come back on the pod and we'll do it, okay?

**Zach Lloyd:** Yeah, this has been a very fine conversation. You asked really good, hard questions, and I did my best to answer them... So hopefully people will enjoy listening to it.

**Adam Stacoviak:** I think they will. I think they will. Well, thank you, Zach. I appreciate it.

**Zach Lloyd:** Thanks, Adam.
