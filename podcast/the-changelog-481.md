**Jerod Santo:** So we have Toby Padilla here from Charm. Toby, thanks so much for joining us on the show.

**Toby Padilla:** Thank you for having me.

**Jerod Santo:** Charm - y'all build tools to make the command line glamorous. I landed on your website and I thought "I am the target audience for these folks." Really cool stuff.

**Toby Padilla:** Thanks. Yeah, we like to be glamorous.

**Jerod Santo:** How many people are in this Charm group? Because I just reached out to all y'all and said "Hey, come on the show", and I think there was a handful of people that responded. There was some talk on your side, "Who should actually be the representative?" and it ended up being yourself. But who else is involved?

**Toby Padilla:** There's six of us. There's myself, there's the other co-founder, Christian Rocha. There's Muesli, who's been with us since almost the very beginning. There's Carlos Becker, who's the GoReleaser guy. There's Ayman Bagabas. He does a lot of the Soft Serve development and a lot of our dev ops stuff... And then we've just hired Julie Zhang, who worked with us at BetaWorks. She was a VC over at BetaWorks, and we brought her onto the business side two weeks ago. We also have Pengu. Gotta shout out to Pengu; he's our intern. Amazing open source guy, friend of Muesli.

**Jerod Santo:** Shout-out to Pengu. So I know Carlos Becker... He was on Go Time last year.

**Toby Padilla:** Yup.

**Jerod Santo:** And ever since then, him and I have been working together to get him a Go Time T-shirt shipped to his location, because --

**Toby Padilla:** He mentioned today that he hasn't got his T-shirt yet, so yeah... \[laughs\]

**Jerod Santo:** \[00:04:03.08\] No... But we've tried over and over again. I think he's in Brazil, or somewhere...

**Toby Padilla:** He is.

**Jerod Santo:** ...and you know, shipping things is hard these days. We've just actually decided to start from scratch, hopefully try a second time... It just got stuck somewhere in customers... Who knows. Who knows what happened. But yeah, Carlos and I have been talking for a while, ever since his Go Time appearance.

**Toby Padilla:** Carlos is a good guy, we're excited to have him on. He actually started as a contributor, and a person who is just kind of around the Charm project, and then we brought him on as a contractor. Around four months ago I believe he came on full-time.

**Jerod Santo:** So y'all have a bunch of tools... It's kind of hard to decide where to start and which one to go into... And that was one of the things - when I first landed on your site, I thought "Oh, here's an easy Changelog News link-up. And then I started scrolling and I'm like "Holy cow, there's a whole bunch of different projects here. Which one do I link to?" And then I was just like -- I'm into command line stuff, so I was like, "Well, we just need to bring him on the show and talk in more depth."

But one thing I've already keyed in on... I'm sure Adam's keyed on it, because he's all about the Founders Talk... You said "my co-founder", and I'm looking at a whole bunch of open source tools, and I'm just very curious, how do you guys approach Charm? You said there is an incorporation. So tell us about, I guess, what is this entity.

**Toby Padilla:** So we are actually a seed-funded startup, and we started because we wanted to make the command line more fun; we wanted to make it glamorous. And that sounds insane, but it's something that we wanted to do. But it actually means a few things to us. Christian and I - we're at BetaWorks together, and like I said, Julie was there too, and we were doing various projects for them... We have a long back-story with them; we've done multiple startups, I was VP at TweetDeck, which was a BetaWorks-founded company... So we've been in the BetaWorks space for a while, but we wanted to do something together, because the entire time we've known each other, even when we were doing other startups, we were exchanging Vimrc tips, Bash tips, all of these things... We were like "You know, we're really passionate about the command line. Why don't we see if we can turn it into a company? It needs a rethinking, it needs a rebranding, and we wanna just work on it. We want to do this. It's a fun thing to do."

So what we wanted to do was a) make it more fun to work on the command line, b) bring modern product thinking to the command line. If you look at the history of the command line, it was very much rooted in 1970's and '80s mainframe technology. It's designed around multiple users per machine; it's not really set up for the internet... It doesn't have a ton of built-in encryption; it does, sort of, now maybe at the disk level or something like that... But we wanted to modernize it. We wanted to make it look nice, because it doesn't always look nice, right? Sometimes it looks really raw; and looks can be important, so we wanted to -- Christian is a designer by trade, and he's a really great designer actually, so we wanted to sort of apply that to the command line. And then we wanted to make it easy to take all of these concepts and for us to build tools with it, but also to have other developers build tools with it.

So we built a bunch of stuff. You were referencing -- there's a lot of projects, right? And it sometimes can be hard to talk about everything, but we kind of have two separate areas that we focus on. One is apps, and one is libraries. And the apps are focused on solving things that we see are big problems on the command line; use cases that we think are important. For example, Glow is meant to solve reading documentation on the command line, or discovering documentation on the command line. So that's a first-party app that we've built.

An example of a library is Bubble Tea. We built Bubble Tea to build Glow, and now it powers all of our apps, but it also powers hundreds of apps that people in the open source community have built. And Bubble Tea is a TUI framework based on the Elm architecture. Christian was a big Haskell guy, loves functional programming; we all kind of came into Go, we'd been doing it a bit before we started Charm... We were like, "Let's bring other ideas into this space." So one of the very first things he built was this Elm-based TUI framework, so we could build some really cool, exciting command line stuff.

\[00:08:03.07\] We've got a bunch of other projects as well. The libraries are focused on really the front-end, so they're sort of -- Lip Gloss, Bubble Tea, Bubbles, Harmonica, are all frontend apps. They have interesting names, I know. But then we also have backend apps. So Charm is a bunch of things; it's not just the company; it's also a tool, it's a set of frameworks, and it's the server; we make everything self-hosted. So Charm libraries are based on storage, data storage, and encryption, and identity, things of that nature. And then on top of that, recently we've been really focused on SSH and pushing SSH forward... Because we think that's one of the most exciting, interesting, powerful technologies on the command line is SSH. So we're doing a lot around SSH identity, SSH access, remote access via SSH... So we've built this thing called Wish, which is a framework for building SSH tools; you can wire Bubble Tea apps up into Wish, and so you can SSH into something and get a Bubble Tea interface and have it do whatever.

We also have Git middleware inside of Wish. One of the things that inspired a lot of what we're doing is the Git SSH interface; kind of how GitHub does this. So you push, and they know who you are based on your public key; you add your public key to their server. So we built Soft Serve, which is a TUI-based self-serve Git host. And that, again, is using Wish and Bubble Tea for the interface.

**Adam Stacoviak:** Wow. Blown my mind here; it's just so many toolings... I love the direction. It's crazy just to see somebody come out swinging like this on the command line. You almost feel like it's boring, in a way, from the outsider's perspective, those who think like "Oh, the command line is just kind of a drag..." But you know, this is really cool tooling. I'm super-impressed.

**Toby Padilla:** Thank you. That is sort of a perception that's there, and it's partially true and it's partially not true; it's difficult... One of the reasons we've built this is because Christian and I have been on the command line each for like 20 years apiece, and neither of us considered ourselves experts... Because the learning curve for this stuff is just a sheer cliff wall. You spend your life learning about that... And that shows you the power, but it also scares a lot of people off. So it's like, "Command line? No. I don't want anything to do with it." And then a lot of the tools are really dated. Some of the dated tools are excellent; I'm a huge Vim guy. Not the most newest editor out there... But still, I use it every day.

There's kind of -- on the command line you get these things that look like lifer technologies, where it's like you invest your life in learning this thing, and then it'll pay off in the long run. I spent a lot of time moving to Vim from TextMate, or something like that. And it was difficult at first, but I knew "Suffer through this and it'll pay off 10 years from now, 20 years from now, when you're SSH-ing into a server and you're just like kicking ass, editing text", right? So that's one. Or piping commands together; learning basic, Unixy workflow stuff there. All of that stuff - it's a big investment, but it pays off in the long-run... Versus learning a proprietary stack, or even a proprietary bit of technology. I'll use a web example for this; and this is by no means to bash the project, but D3 - I always look at D3 and it's like "Hey, you can do awesome stuff with D3 in terms of visualizations." And then I start learning it and I'm like "This is so much to learn." It's so much to learn, just this like very specific framework, in this very specific spot. It's not gonna be knowledge I can apply across the computing world. So when we think about command line stuff, doubling down into your knowledge there should be applicable across a whole range of tools.

**Jerod Santo:** So I tend to agree with you, but I wonder how big the audience is for tooling like this. I think of the command line as a subset of technical people, or maybe developers... Let's just call them tech-oriented people; of those, there is a subset who prefers the command line. And of those, I am one, and many of our listeners are; that's why they listen to the Changelog and they hang out on Hacker News and Changelog News, and GitHub, and these things... But when you're building -- did you say you're VC-backed? Is that what you've said?

**Toby Padilla:** We are, yes.

**Jerod Santo:** \[00:12:07.13\] Okay. So when you're talking to venture capitalists and try to make a business case for this type of a company, don't you butt up against that feeling of it being old and very niche, and saying "Well, we're gonna bring it to the future." But is the future interested in the command line? I personally am, so I'm easy to sell on the vision, but I'm wondering if other people are harder to sell on the vision.

**Toby Padilla:** It can be like that... There are some good examples of doing what we're talking about doing. So GitHub is a great example of modernizing the command line. They took Git, which is an extremely powerful, and let's say edgy tool; it requires a lot of knowledge to do it right... And they brought a bunch of what we call modern product thinking to this. They brought social interaction, they brought a nice web interface; they invented some sort of terminology in use cases, like PRs, pull requests. That's a GitHub thing, that's not a Git thing.

So Git was designed for the Linux kernel and mailing and patches and all these things; really small audience to do that kind of stuff. But GitHub mainstreamed this, and almost every developer - not every developer, but lots and lots of developers are on GitHub because they kind of did what we wanna do. But then they kind of stopped. They did a lot of innovation, they've been acquired, they're part of Microsoft, they're really focused on GitHub Actions and stuff, which is really neat... But it's an example of building a huge, multi-billion-dollar business off the back of a command line tool. So we think that we can do this.

If you look at dev ops and things of this nature, the command line is really important there. SSH keys are really important there. The workflows for deployment are often in these developers tools that live, in a sense, on the command line. So there's maybe not a trillion people, but especially myself, coming from the consumer internet side, music, TweetDeck, things like this, where it's like "Oh, you've gotta get a billion users", or whatever... We don't necessarily need a billion users. We're happy with 30 million hardcore developers, and ultimately, our business model is to sell into enterprises anyway, and solve enterprise use cases and developer workflows inside of companies. So we think that getting that developer mindshare will help us in that business sense.

**Jerod Santo:** Well, shout-out to your designer, because when you land on Charm.sh, you accomplished what many people fail at, which is to immediately have a recognizable and distinguished and interesting look and feel. You mentioned the somewhat -- you didn't call them silly, did you? You said you have lots of different names... I can't remember the adjective you used; I don't wanna --

**Toby Padilla:** We like to be unique with our naming, yeah.

**Jerod Santo:** Okay, so the unique naming convention... Tell us what inspired this. You've got Bubble Tea, Lip Gloss, you mentioned Harmonica, Soft Serve, there's like an ice-cream theme going on... Kind of like a desserty theme going on... Talk about that for a minute.

**Toby Padilla:** So Christian is the co-founder and designer, so he's doing all of this design. 3D backgrounds... So you'll see a lot of 3D models there, which people don't necessarily put in the command line design sensibilities, right? From the get-go, we wanted our brand to be "My Little Pony meets Fist of the North Star." And I think that we're trying to accomplish that. We want it to be less intimidating than the command line has traditionally been, but even more powerful. You can do just this amazing, crazy stuff with this. But by making it friendly, it's kind of changing the culture around the command line. We don't wanna be 1970s MIT. We don't want to be \[unintelligible 00:15:29.22\] a lot of amazing stuff, but it's 2020 now. So updating the language that we speak to people with is a big part of the project. And we actually think about culture a lot, both in terms of our product, our branding, but also the team, and how we run it. We like to do things a little differently internally as well.

**Adam Stacoviak:** \[00:15:49.12\] Do you see, I guess, when you get to a certain point, when you SSH let's say into your production server, do you envision where this absent tooling that lives -- I'm not sure how you divide them, because I'm still learning the product graph you have... But do you envision -- because I'm looking at Wish, and "Make SSH apps", and you've got the parrot doing the dance, like you can SSH into a certain server... Do you imagine that someday, somebody would replace or make their production server easier to navigate, and maybe even Linux tooling that you have to constantly google, or whatever, kind of be front and center? Is that what you hope for at some point, where you enable a future generation to build on top of the tooling you currently have, basically?

**Toby Padilla:** Exactly. That's what we're doing. I would say the best example of a Wish app is Soft Serve. So if you SSH to git.charm.sh, you will go into our Git repos. So this is a Soft Serve instance, anyone can access it if you have a public key. If you don't have a public key, it'll ask you for your password, and I think you can just enter it and it'll let you in. So custom SSH, right? We're letting everybody in; come on in. We're seeing you for the first time? Come on in. This was something we could do with Wish, because it's custom SSH servers sort of divorcing the user accounts from the machine in the application.

SSH is really powerful, because you know who somebody is. Everything is, obviously, encrypted, so that's nice... If you think about setting up a server today on the web, you get HTTPS, and you have to manage those certificates. Maybe CertBot manages it for you, but you still have to set that up; you have to do a DNS entry, or whatever. You have to think about HTTPS and your domain name. With SSH you don't do that.

One of the things Wish will do is actually make the server keys for you, just when you start it up for the first time, so you don't have to think about that. You should store them someplace secure, but it will generate them for you. But you just fire it up and you have encryption. And you also have identity, in a sense. Because people, when they come in to SSH, are presenting their public key to you. So you can say "Okay, this public key is attached to this identity." And we've got really far down the rabbit hole with that with Charm, where we allow you to link multiple public keys to one identity, and then we actually do a bunch of encryption stuff where we make some metric encryption keys, encrypt them for all of your public SSH keys, and then store those encrypted on the server. We don't store private keys at all; so your SSH private key stays on your machine.

**Jerod Santo:** Sure.

**Toby Padilla:** You pull down all these symmetric keys, decrypt them with your private key, and then you can decrypt all of this encrypted data that's been pushed up to the Charm cloud.

**Adam Stacoviak:** So end-to-end then. You're end-to-end.

**Toby Padilla:** Yup, very end-to-end. We don't want your data. Data is a liability. It's not our business model; we don't want it, we don't wanna know what you're doing, we don't wanna see what you're doing. We are very big on privacy. For instance, we don't put analytics into our apps. You privacy is more important than our business metrics, period.

There was a year period we didn't know how many people were using Glow, because we didn't have any Charm cloud functionality. It was just a markdown reader that was not networked. So before we invented the Charm cloud and all this encryption stuff, Glow was simply a Markdown reader; you'd pass it a Markdown file and it would style it. It would style it with a style sheet. So that's what Glamour is. It's a library that styles up Markdown according to \[unintelligible 00:19:06.21\] And it will also detect your background; so if you have a dark background or a light background, it'll give you the right colors there.

GitHub, by the way, has used Glamour in their official command line client to render Markdown. So if you use cli/cli on GitHub, all of the Markdown rendering is happening with Glamour. But we didn't have metrics, we didn't have analytics, and that was fine, because we wanted people to have privacy. We also don't think that's even a good way to develop product. You should develop products as the product owner or developer because you have a vision for it, you have a need you're trying to solve, and you can just bank that out. There was no analytics or A/B testing that went into Git, or Vim. This was -- somebody had a vision and they made this incredible tool. And even going to the consumer side, all of my favorite products have been created by usually one person.

\[00:19:59.18\] I went to work at TweetDeck because I loved TweetDeck. And Ian, the TweetDeck founder, just made this thing. He was just like "I wanna look at tweets in columns. I'm making \[unintelligible 00:20:04.19\] to do that." LastFM - RJ was a college student, and he invented scrobbling as his university project. He was like "I wanna track all my \[unintelligible 00:20:14.17\] That blew my mind. I was a huge music fan, and I was like "I've never seen anything this cool in my life." Delicious. Joshua is like, "Hey, tags. Freakin' cool. Let's just build this thing."

So you see these amazing products come out, not because of analytics, not because of studying user behavior, but because "I have a vision that I need to make this thing", and that to us tends to be the most exciting stuff to build.

**Adam Stacoviak:** We'll obviously go deep into all the different product there is, but going back to Jerod's question with BetaWorks... Obviously, BetaWorks has a track record, so I think there's potentially some inherent de-risking of maybe putting you in a team together to do stuff like this... But what is your trajectory then? How do you passionately go into this world - very well done, by the way, but how do you passionately go into this world thinking out the other end something commercial will come to play? Something valuable will come to bear of this. You mentioned Delicious - those are great examples of just scratching an itch, essentially. How will this itch turn into something commercial?

**Toby Padilla:** Well, we were lucky in that we were at BetaWorks, because they're all about just making cool stuff, and seeing what happens. They never go into something saying "Let's turn this into a business at first." Having success is important, but it's always like "Let's build something interesting and see where it goes." Technology is great about that. You can invent stuff that doesn't have a clear path to monetization at first, and then it turns into that. Again, Git wasn't clearly monetizable, and GitHub didn't monetize it for a long time. But eventually, it turned into a real business that was worth billions of dollars. So we came from this VC firm that was very freedom-loving, and very creative, and very art-loving... So we're like "We wanna build stuff on the command line." And \[unintelligible 00:22:00.01\] who's the CEO of BetaWorks, he's like "Toby, Christian - you guys have done a lot of stuff for us. We believe in you. Let's do some pre-seed and get started." We also had the support of Alex Chung, who's the Giphy founder. Giphy is another BetaWorks investment/incubation project.

So Alex is another one of our angels... So just having this crew of people who had worked together before, building experimental things... Giphy was an experiment. It was a weekend experiment that Alex built. He's like GIFs are cool; let's make a GIF search engine. And then he figured out how to monetize that. But that was sort of the history and the DNA of the early team and investors.

**Adam Stacoviak:** It's good to get that trust right away though; to have that "Hey, you've done some good work here. Let's do that." So you said you're a pre-seed... Is that right?

**Toby Padilla:** We're seed now. So we've raised a few rounds of pre-seed. We closed our seed round in December of 2020. So our seed round was led by Cavalry; they're a German-based seed fund. They're awesome. We just clicked with them immediately. I have a fairly extensive investor network in Europe, because LastFM and TweetDeck are both European startups, so we kind of knew them through that network. BetaWorks, one of our lead investors... Also, Fuel Capital. They're a Bay Area-based investment firm; they're really cool. Chris Howard over there has been supportive of us from essentially day one. So he was in the pre-seed and seed round as well. Kevin Carter - he's in all of our rounds as well; he's a really great guy. And \[unintelligible 00:23:23.19\] We have a bunch of other angels as well.

**Adam Stacoviak:** Gotcha. What's the total funding so far?

**Toby Padilla:** Total, 3.6 million.

**Adam Stacoviak:** Okay. You've got a burn rate, you've got a /open page on Charm.sh? I love that, by the way, when people have /open and it's like "Here's all the things we're doing", because they're so just transparent about what they're doing.

**Toby Padilla:** We are transparent. We're not uber-transparent. We like surprises. It's like, "Hey, look at this cool thing that we've built. You didn't know about it. Here's something new." Our burn rate is low. We have six people.

**Adam Stacoviak:** \[00:23:58.02\] Gotcha.

**Toby Padilla:** The team is a lot like code - the less code you write, the better. The fewer people you hire, the better. Don't bloat your team. Don't increase your burn. Hire the right people. The way we hire is we don't do technical interviews. We find people we want to work for us, and then we try to convince them to join us. And the way we find them is they're often just contributing to us. And it's like, "Okay, here's some of our top contributors. Here's somebody who built something really cool with our technology. Can we get them to join us?" Or it's somebody else that we know through our network.

So we're very proactive in our hiring. So when you find these people who have really demonstrated the ability to make something from zero to whatever, and ship it and support it and make it successful, you bring them on. One Carlos or one Muesli is worth 50 non-Carloses or Mueslis. GoReleaser is an amazing technology. We were quite excited when Carlos agreed to join us, or even talk to us. We were like "We're fan boys. We love it. We use it all the time." So it's really cool to just proactively seek out the right team members. It means you can keep the team a lot smaller like that, too.

**Adam Stacoviak:** What that tells me though is like -- when we have this listening audience paying attention to these show we do, and we ask a question like that, we're not just probing, "Hey, what's your actual burn rate, Toby?" I don't really care, necessarily. I kind of wanna know, but what I wanna hear is the wisdom behind it. Because it's one thing to be able to produce this kind of tooling and have this kind of inertia and this innovation, but it's another thing to commend it with wisdom.

We can almost respect and appreciate what you're doing way more because you have this innovation side of you, but you're also doing it with discipline. You're not just like, "Let's just throw money at it, hope it works. Let's just hire everybody who's ever creative", like some companies might do. Or you see some companies just acquire a bunch of talent, and it's like "Wow, they're just vacuuming up everybody." Whereas here, you're doing it with a bit more discipline. I think that's an admirable trait, honestly.

**Toby Padilla:** Thank you. And actually, even speaking to the burn rate - we need to keep it low, because we like time. Time is innovation. We need time to innovate, to throw things against the wall to see what sticks, to iterate on ideas, to try new things. So think very much like an R&D project, where you can't have these really short-term time horizons where you need to raise the next round next week, or whatever, because you're not going to do the right things; you're not going to make the most innovative thing that you could possibly make. Sometimes that takes a little while. You don't ever wanna go heads down for two years, and go on these secret missions. Everyone has a tendency to do that, myself included. It's like, "Oh man, I'm gonna make my Magnum Opus. See you in two years, everybody." That's always a temptation. But you mix short-term thinking in that and you try to come out.

So we did a long development cycle on this. We did a recent release with the self-hosted Charm Cloud, Wish, Soft Serve... A bunch of stuff. That was like 11 months in the work. And that was quite frankly as far as we should ever go without having launched anything. And it was starting to get to the point where it's like, "Okay, we're just iterating, and iterating, and iterating, and we need to get this out there into the real world." So you want time to try exciting, fun, new things, but you don't wanna bury yourself under an ocean and try to swim up, because that's just not gonna be good. And it doesn't make good product that way either; you need to get it out there in the real world. So finding that balance requires -- it's helpful to have a low burn rate, so you have some freedom.

**Break:** \[00:27:36.02\]

**Jerod Santo:** So let's talk SSH. You brought up Wish earlier, we talked about how you can SSH right into git.charm.sh. for what is kind of a tabbed interface, with a menu, of your different projects. I'm assuming this was all built custom by you guys to provide this interface. Before we get into how to build these things, are you imagining a world where a bunch of these SSH apps exist as an alternative -- almost like an alternative view from your website, sort of? I mean, it's its own thing, but it's a content viewer, which a web browser also is... I'm thinking about Changelog.com and how we have news and podcasts and search and things on our website, but we could have a cool SSH interface where you're doing similar things... And I'm just curious - are you imagining a world where a bunch of SSH apps exist, that are kind of like links customized in terminal browsers? Or obviously, GitHub used theirs for \[unintelligible 00:30:07.22\] so different kinds of services... I guess just start by saying what do you see people building with SSH apps?

**Toby Padilla:** So SSH can do a lot of stuff, and what you're looking at there is a TUI. So it is a menu-ing system, it's to browse through. One of the nice things is that it keeps you on the command line. So you're gonna git clone something from the command line. So going back and forth between a web browser and the command line.

One of the innovative things that GitHub did was this Flash-based clipboard of the SSH clone URL, remember? And I think maybe that's natively supported in the browser, but it wasn't at first.

**Adam Stacoviak:** I remember that, yeah.

**Toby Padilla:** So that was just a way to get something from a web browser into the command line. So there's some value to being on the command line. But I think there's a few things that can happen with SSH. One, like you alluded to, it's a Git API. You can start to do really interesting things by layering -- you add the Git middleware to Wish, and we give you all the hooks for when projects are pushed, and when pulls are happening, and how authentication can happen... You can start to build applications around that.

For instance, Soft Serve is configurable by Git. So when you first run Soft Serve, the very first thing you do as the host is clone the config repo. So you clone the config repo, and it has a Markdown file, a readme file, which is what you see when you first get into git.charm.sh. And it has a yaml that lets you configure access, customize that menu, add collaborators, add their public keys, all of these things. So all of that happens via Git. So you can imagine other configurations happening like this.

\[00:31:50.03\] We're also about to release a version of Soft Serve; we haven't released it, but probably in the next couple of days... That adds non-interactive SSH functionality. So TUIs are great; they're great for discoverability, they're great for having some kind of UI on the command line for remote controlling various things... But on the command line, the real spirit of it is composing things; so piping the output of something into something else. And it turns out if you run SSH with a command, by default, it does not issue you a TTY, which means that you do not get any interactivity to it. You have to put -t to get in. So if you ssh -t git.charm.sh soft-serve, you'll go straight into Soft Serve. If you don't add the t, right now it doesn't do a whole lot. The new update that we're doing, you can say ssh git.charm.sh soft-serve/main.go, and it will pipe out that Go source code directly to your command line. You can add the -s flag (I believe), and it will style it up. It'll do syntax highlighting on it.

So at that point, you can start baking these things into your command line workflows. You can start exploring grepping things, manipulating the output of these files directly from a Git repo into other command line tools and pipelines, which we think is a really interesting idea... Because there's not a great way to do that now. Yes, you can curl something if GitHub has the web interface for it, but this is very discoverable, and it's very native to the way that the command line works and the way Git works.

**Jerod Santo:** So the other thing that's interesting about this particular TUI - which, just for the listeners' sake, that's TUI, terminal user interface...

**Toby Padilla:** It's actually text.

**Jerod Santo:** Oh, text.

**Toby Padilla:** Text user interface, yeah.

**Jerod Santo:** Well, thank you for correcting me. I don't even know what it is; I just assumed it was terminal.

**Adam Stacoviak:** Good guess...

**Jerod Santo:** Because where else are you gonna look at your text?

**Toby Padilla:** Why wouldn't it be terminal user interface, yeah. Absolutely.

**Jerod Santo:** I'm ready to rebrand that sucker... No. So the text user interface is -- at the command line there are certain things that you come to think about, like pagination, or piping things into \[unintelligible 00:34:01.08\] or something, and there's standardized key combinations that usually work... Of course, usually depending on which variant of Unix you're on, or whatever. But here you're kind of reinventing a few things. You actually have tab-based selection, which navigates between like a menu item and a content item, and I'm assuming that stuff was invented by you all inside of the build text-based UIs tool, which - I can't remember which one that one's called...

**Toby Padilla:** That's Bubble Tea.

**Jerod Santo:** That's Bubble Tea, thank you. There's a lot of tools here.

**Toby Padilla:** It's Bubble Tea, and Bubbles is a selection of components built for Bubble Tea. So some of that stuff is a bubble. It's a bubble that anyone can use. Some of it is custom components that we've built for this application.

**Jerod Santo:** Okay. So I guess what I'm driving at is if people are all adopting Bubble Tea at least in order to build some things, we can expect certain common paradigms inside of a Bubble Tea-based TUI, right?

**Toby Padilla:** Yeah.

**Jerod Santo:** Okay. Because I would be concerned that everything would be ad-hoc, and...

**Toby Padilla:** And super Wild West style?

**Jerod Santo:** Yeah. I like predictabilities of the command line. It seems like this might lose it if people are all built on different ways.

**Toby Padilla:** So we're seeing a lot of particular components being used quite a bit \[unintelligible 00:35:11.27\] so the viewport used all over the place. You'll see we have a little help menu down at the bottom - that's part of a component. That's something everybody seems to like, because they're baking it in... There's challenges. We're inventing a lot of this stuff; it's kind of like being in the 1980s and inventing a windowing system. So we have to take the best practices that we've learned elsewhere, try to come up with good ideas, iterate and experiment. There are downsides to it that we haven't completely solved for yet. Accessibility is one of those. How do you get a screen reader to read a TUI? Whenever we launch anything, there's always a comment saying "This doesn't work for screen readers." And that's true. It doesn't work great with screen readers. So how do we improve that in the future? We don't have an answer now, but it's on our radar. That's something important to do.

\[00:35:58.26\] Easy things, we've kind of fixed. And it's not even easy, but like I've mentioned before, do you have a light background or a dark background? When possible - and this isn't possible with Wish, because you can't do this over SSH... But on a TUI that you're running native to your machine, we detect your background color. Like, "Okay, you're on a light color. We'll give you things that work with this." Since you can't do that over SSH, we picked a color theme that works on white and dark. It looks slightly better on dark, because we're all on dark, but it still looks quite nice on a light background.

So there's challenges that windowing systems and the web have come to solve over the decades that they've been in existence, that we want to solve, at least to some degree, but aren't all solved yet, to be completely honest. There's some things that we still need to work on. But because it's so early, that's also exciting. It feels neat; you can come up with a new idea that works for the terminal and makes sense for the terminal.

Some of these terminals are pretty cool. Kitty is the terminal that we all like to use; a lot of us like to use it. And Kitty is a really great terminal. The person who made it has really pushed forward what he wants to be standards in terms of OSC codes; I believe that's what they are. Sorry, \[unintelligible 00:37:08.24\] that do things. So he has native notifications that will pop up, like a windowing notification, and he can trigger that from an \[unintelligible 00:37:17.15\] code. He's got windowing stuff, he's got sounds, he's got -- Copy to Clipboard is another one of these things that he's added... And so when you start looking at that, I think there can be standards that happen as these applications become more rich, that we can all embrace, and solve for some of these problems, especially as a new generation of people come into these tools, with different expectations. Because I think in the past people were like, "Whatever, I'm a gray beard Unix developer. It works for me, so that's fine."

**Jerod Santo:** One thing I'm seeing, maybe a bug report, or -- I'm just curious; this is the kind of stuff that falls out, is with this two-paned UI that you have here. You have the menu on the left, and then you have the content on the right, which effectively looks like you're rendering Markdown readmes or something that exists elsewhere...

**Toby Padilla:** It's a Markdown readme, yeah.

**Jerod Santo:** Yeah. You're using your Lip Gloss...?

**Toby Padilla:** Glamour.

**Jerod Santo:** Glamour. Dang it!

**Toby Padilla:** It's Bubble Tea, Glamour, Lip Gloss... It's got everything; it's got all of our stuff in it.

**Jerod Santo:** It's bubbles all the way down.

**Adam Stacoviak:** The works...

**Jerod Santo:** Yeah. So the git clone command in my terminal - I'm just using macOS Terminal by the app. I can highlight git clone, copy that, it works. But when I try to highlight, for instance, the description for "Bubble Tea, the fun, functional, stateful way to build terminal apps", and I go multi-line, it doesn't highlight the text, it highlights the text plus things in the menu on the left... So this is a circumstance where the new UI hits the real world of a terminal that's controlled by Apple Inc...

**Toby Padilla:** Yup.

**Jerod Santo:** ...and these are things that have to be figured out, and ironed out over time.

**Toby Padilla:** Exactly. And maybe the answer to that is we change the layout for something, right? Because there might not be a good answer to that that exists today. But that's exactly the kind of stuff you're gonna hit when you start doing this.

I think that terminal in particular is often challenging to develop for. You'll see, the lines have spaces between them probably when you're looking at this... That is a bug in OSX Terminal or macOS Terminal.

**Jerod Santo:** \[laughs\]

**Toby Padilla:** Its performance isn't great... But it's the terminal of choice for everybody, right? It's the default terminal for millions and millions of people, so we have to -- so we're always like "Go download Kitty! Go get it now, because everything works super-awesome in it." But we can't rely on that.

So hopefully, we push this world forward enough that even Apple pays attention. And we've heard that there's a bunch of people at Apple using our stuff, so it's a good first step...

**Jerod Santo:** That's cool.

**Toby Padilla:** ...but ideally, the terminal world starts to evolve as well.

**Jerod Santo:** It's just an interesting world, because in the web you've got browser vendors, right? And then really, where you are -- and the "Download Kitty" was like the old "Go get Firefox" back in the day, right?

**Toby Padilla:** Yeah. Exactly, yeah.

**Jerod Santo:** \[00:39:58.05\] And it's like, "Well, you can't expect everybody to do that." Maybe we'll get to 20% market share, but still, the other 80% are running IE9, back in the day.

**Toby Padilla:** That'd be lovely, but it's probably 0.1%, unfortunately. Yeah, exactly.

**Jerod Santo:** So it's the same exact problem, but a different space. Adam, you were gonna say something...

**Adam Stacoviak:** I was just gonna say, I can see the coming terminal wars, man... At some point maybe there's the terminal to rule them all. If apps become more prevalent, if this innovation keeps pushing forward, and we hackers find more and more ways to use this and it becomes mainstream...

**Jerod Santo:** Or at least developer mainstream...

**Adam Stacoviak:** Yeah. Like I was saying to Toby the first time, if in the future this evolves to the point where when we SSH into let's say our VPS, for some reason... Like, if I wanna do that, I've got my identity attached to it, it's got a particular UI. Maybe there's the common everyday command line, but what if we know our stack and so there's something with the Kubernetes painted glass; we wanna see what's going on ad nauseam across the deck. Maybe there's something like that where it's aware. I don't know, maybe that's a thing.

**Toby Padilla:** We've been thinking about possibly non-text-based UIs. You can use SSH as a protocol for identity and data transfer above and beyond Terminal. And in fact, X Windows does this; there's an X Forwarding command on SSH that allows you to forward your X Windows over SSH. So that's an old, ancient idea people probably aren't even aware of; that maybe is a new life ahead of that. You can have a UI, having the SSH key as your identity; SSH is a great protocol for encryption, but it doesn't necessarily mean that you have to look at everything inside of a terminal. So we would love to explore this. Even thinking about a mobile app... Maybe you generate some keys on an iOS app, and it identifies with an SSH-based API to figure out who you are.

And talking quickly about Charm and our server, this is how this works - you use SSH to get a jwt back, and then we use that jwt on a bunch of HTTPS APIs. And we do that for sort of performance reasons, and so other people can build APIs using technology that they're familiar with. But we've been doing a lot of work, and we're going to do a big release around this soon with jwt's.

So this is moving, "Hey, here's who I am. Here's my public key SSH." Okay, we know who you are; that server who knows who you are issues a signed credential saying "We assert that this person is who they claim they are. Now, web server, whatever, you can rest assured that this person is who they claim that they are." You can imagine this in iOS apps, you can imagine it in other non-text-based apps.

Again, going back to the Unix philosophy of doing one thing and one thing well, and composable apps... By doing SSH well, it opens up the door to lots of possibilities.

**Adam Stacoviak:** Are you familiar with the Raspberry Pi, by any change?

**Toby Padilla:** Yeah, we love Raspberry Pi. In fact, one of our -- not all of our stuff works on it, but it's sort of like a target platform for us... Because one of the thigns we pitched BetaWorks when we started is "Hey, there's a bunch of really (what we call) low-power machines out there that the command line is a really great pairing with." Whether that's a Raspberry Pi, or a machine that's like 15 years old. There's a lot of hardware out there that if you try to run the latest version of macOS on it or Windows, it's just gonna slow to a crawl. But the command line interface is gonna be rocket fast on this thing, so let's target these lower-powered platforms and make cool stuff for them, so you can do cool things.

I have like five Raspberry Pi's, and I have them all hooked up to my TVs, and they're more or less just \[unintelligible 00:43:41.06\] servers. But I would love to actually use it as like a computer in a way that's more meaningful. So if you start making these rich command line apps, then these low-powered Raspberry Pi-esque machines become a viable computing option, and you can do neat things on them. So that's been sort of a Raspberry Pi thought that we had from the get-go.

**Adam Stacoviak:** \[00:44:02.26\] And I was even thinking like that, because there's a lot of people who have multiple Raspberry Pi's in their home lab; there's maybe one for their surveillance, or their automation, things like that... In my case I have a Pi-hole and that's pretty much it. I've got a Plex on a whole different one. It was on Raspberry Pi, but now it's on a beefy Linux server, so I cn't really call that a Raspberry Pi... But it's still command line; when I SSH into it, I have Plex running via Docker, it's running on ZFS, all that good stuff. But I was just thinking, when I \[unintelligible 00:44:29.28\] when I go into that, that's some sort of text application. If that world gets easier to build those kinds of things, that kind of config, is that also a future where you can see this is solving for -- that config gets a lot easier for that developer or that team to maintain and build, because this becomes the React for SSH apps, or command line apps.

**Toby Padilla:** That's exactly what we're thinking. It's such a good answer to remote-controlling something over the command line... Because historically, you're editing a lot of files. You're doing into Etsy and editing like a million flat files to get the configuration you want, because you don't have X Windows (or whatever) necessarily all the time. So you have to do that. So offering a graphical interface for that is good. And you've seen stuff like that. There's things that have existed, but they look like DOS. Writing the code for that is like you're doing C++ or something like that.

You mentioned React, but that's similar to Elm, in that it's sort of like a reactive, functional design pattern. But that's what Bubble Tea is. If you wanna develop these TUIs in a hyper-modern fashion, that's what Bubble Tea allows you to do - use functional programming to build these.

What people have learned over the past ten years in terms of building Web UIs, taking those practices and being able to build a TUI with it - we think it's cool. And that use case of having a bunch of Raspberry Pi's and you're controlling them through SSH is exactly the kind of thing that we wanna solve.

For instance, we launched another project, and it was the first thing Carlos built. So when Carlos started, a week later he shipped his first project, and it was called Wishlist. He loves Wish, and so he's really excited about Wish... So Wishlist started as a proxy to other SSH server and other Wish apps. So he built the party parrot thing, and all of this stuff over Wish. So you would SSH into Wishlist and you would see a list of all of your other Wish apps, or any SSH server, and you could go into it.

Last week we released local mode. So now you can run Wishlist on a local machine, and it looks at your SSH configuration file, finds all of your hosts, and gives you a graphical interface for \[unintelligible 00:46:48.14\]

**Adam Stacoviak:** Hm. That'd be super-cool.

**Toby Padilla:** So discovery, topography discovery of your network. You've got all your Raspberry Pi's in there and you don't have to -- yes, you can \[unintelligible 00:46:55.08\] but having a TUI jump off and discover all of your hosts is a good thing. It makes it easier to do this.

**Adam Stacoviak:** You're getting me excited, because my \[unintelligible 00:47:03.15\] when I do my SSH config, it's organized; I have all my machines in there, I've got local DNS resolving for machines because I run Raspberry Pi, the Pi-hole, and so because I have that, I've got local DNS essentially for all my machines. So I don't' actually SSH to an IP address anymore; I've now resolved those to an actual domain name that makes sense, that's only internal. For example, my Raspberry Pi, or one of them, is PiMax.home.lan. When I wanna go there, I ssh.pimax.home.lan, and I'm in. But I have all of my hosts files on all my machines the same way... And I kind of wish there was a way -- build this tool next; make it where I can command all my host files from one machine...

**Jerod Santo:** "Build this one next..." \[laughs\]

**Adam Stacoviak:** ...because I essentially go to each one of them and manually update them. If I can manage all my hostfiles, all my config files that manage those hosts...

**Jerod Santo:** You should set up a local DNS server and just point all their DNS to your DNS server. Them it can resolve those, and then you manage it at the DNS server.

**Adam Stacoviak:** \[00:48:08.10\] I guess you could, but...

**Toby Padilla:** You can actually do that with Pi-hole.

**Adam Stacoviak:** You can?

**Toby Padilla:** Yeah, yeah. Pi-hole has an option, so it's running its own local DNS server... And you can add your hosts manually to Pi-hole.

**Adam Stacoviak:** I've done that already, but what I mean by that is whenever I go to my ssh config file, each host has to be in there for each machine, so that it knows what my hostname is, what my username is for that machine, that kind of thing.

**Toby Padilla:** Right.

**Adam Stacoviak:** That thing is tedious.

**Jerod Santo:** No, if you SSH to a domain -- like, when you SSH to git.charm.sh, there's a DNS lookup that happens. So those machines would just --

**Toby Padilla:** But I think he means editing the SSH config. You've gotta shove all of those. You make a new host - great. You've added its Pi-hole, you've added to your DNS; you can get to it. But you have to know its name.

**Adam Stacoviak:** Right.

**Toby Padilla:** If you can put it in the SSH config, that starts looking nice.

**Jerod Santo:** He's writing it into his configs; so he knows the names. Okay, I see what you're saying, but it's --

**Adam Stacoviak:** Right. So each computer has that SSH hosts file, that config file, so each computer needs to know, so I can SSH and autocomplete to iMac Pro, or \[unintelligible 00:49:13.07\] or to whatever the different machines are out there. Each machine -- the DNS is done by Pi-hole, but what isn't done is each machine knowing all the different hosts it has available. Like he's saying, he can --

**Toby Padilla:** I will say this is an area that we're exploring heavily. So check out Wishlist for now; that'll get you a nice TUI of browsing through your SSH config. But you can imagine that evolving for server discovery.

**Adam Stacoviak:** I love it, because it's gonna look at that file, see all the hosts I have defined in there, and give me a list of the things it can navigate as a result.

**Toby Padilla:** That is exactly what it does. And you can also run it as a server. So it could be a bit of a bastion host that you can configure, and have it be a jumping off point to a bunch of hosts on that subnet, or whatever.

**Adam Stacoviak:** I'm listening, Toby, I'm listening. Keep going.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Tell me more.

**Jerod Santo:** Well, let's drill down into Bubbles and Bubble Tea, because you mentioned this is like your React's Elm architecture, declarative, easier, a modern way of building these things... And Bubbles are the components, and Bubble Tea is the framework. Now, this is a Go thing. So does this lock you into Go, is my guess...?

**Toby Padilla:** Yes. And all of our frameworks, all of our libraries and all of our apps are Go. And we actually had a lot of questions; I just got a question about it yesterday, "Do you have a Python SDK?" And the answer is no, we don't. I mean, we're a small team, so we have limited resources... But we think Go is a good language to build command line tools in, for a number of reasons. One is you get a compilable binary that you can ship, a single file, and you don't have to force all of your users to install all of the dependencies that you've used to develop, a la Node.js or Python or something like that. So it's sort of a natural fit for this type of tooling. It's just a nice language; it's got a really good standard library... So a lot of stuff that you might want to do to make a really cool command line app is just straight up available in the Go standard library. It's got an HTTP server, it's got an HTTP client. It's got a lot of stuff inside of it. So that was why we focused on it.

We like lots of languages, and we come from backgrounds where we -- I was a Clojure developer for six years. I was doing Rust actually for two years before I moved to Go... And Muesli - I follow him on GitHub, and I got jealous of all the cool libraries that he was starting all the time. I'm like, "I want that." Because he's a Golang developer, and he's like "Super-cool crypto thing", or whatever. And I'm like, "Hey, that looks neat. I'm in Rust, writing my own \[unintelligible 00:51:43.20\] library, because such a thing doesn't exist." At some point I just thought "You know, I love Rust, it's really cool, it's a super-exciting language", but I jumped ship. I'm like, I wanna be more productive, I wanna use all the fun toys, and so I started doing Go.

\[00:51:57.15\] And so some of us enthusiastically, some of us begrudgingly, have moved to Go over the years, just because it is kind of the answer to building these type of tools. So when people ask us, "Hey, can I do a Node.js version of your stuff?", our answer is "No. Use Go, but come into our Slack and we'll help you." So we're very enthusiastic about onboarding people into Go, teaching people about Go. We'll answer any question, no matter how basic, about Go, in our Slack. So Charm.sh/slack. Come on in and ask us about Go, because we love to answer it, and we'd love to see more people adopting it, especially for command line stuff.

**Adam Stacoviak:** Are y'all in the main Gopher Slack, by any chance?

**Toby Padilla:** I'm not a huge chatty person, so I'm not in a lot of Slacks, but I'm sure that Muesli and Carlos are.

**Adam Stacoviak:** I was gonna say, it might make sense to have a channel just for Charm, that could be a welcome -- sort of a tie even, where maybe that channel could be shared between your Slack and that Slack... That way you can absorb some of the help at large, in the main Gopher Slack.

**Toby Padilla:** We'll take some of the workload; we'll happily take that, yeah.

**Adam Stacoviak:** That'd be a good onboarding practice or a good growth strategy.

**Toby Padilla:** I like that. That's really good.

**Jerod Santo:** So one of the things I've been musing on is some sort of a Changelog command line tool... And I actually was considering Go as the language of choice for that, because I really like the way GitHub developed their command line tool, which originally was written in Ruby and they rewrote in Go... And I thought, "If I'm gonna just cargo-cult a bunch of stuff off of somebody and not have to do the entire job, I would probably just look at their source code and go from there." And then I've found Bubble Tea and Bubbles, and it seems like these tools are pretty much custom-built for doing exactly what they've already done. So how would you go about writing a command line app with Bubble tea?

**Toby Padilla:** So the readme is a good place to start, and it kind of walks you through a sort of semi-tutorial of how to do things. It's highly based, like we've said, on Elm. There's some concepts that will help you, like immutability, and you can hack this in Go. You can either do it the Go way, or you can do it the Elm way. So we let you do either things; some of us do it certain ways, and some of us do others. But essentially, there's very few things you have to implement. You have to implement an update method, which is sort of like changing the state of things, and you implement a view method, which returns a string. Period. And the string will look at the state that was updated in the update method, and return the correct string. So you've logged in, so username is now set to Toby. When the string renders, it renders out my name, or whatever.

And then there's a concept of commands. And commands are -- if you're doing something that's blocking, or a long-running process, you do a command, and when it returns, it calls update with the result, the model that's the result. And that's it. That's all Bubble Tea is, is those three concepts.

So you learn about the view, you learn about update, and you learn about commands, and then you can start building Bubble Tea apps. And then you can learn about the Bubbles. So if you go into the Bubbles repo, you'll see spinners, progress bars, input forms, viewports, pagers, that kind of thing. So you can just start stringing that stuff together. It takes a while to master this, and because it's so new, we're kind of inventing design patterns as we go. What should be composed? What should be inside of something else? How do you bubble up state? ...this type of stuff. But as we've built bigger and bigger applications, we've learned better design patterns and we've tried to bake that into the documentation and bake that into some of the examples.

**Jerod Santo:** So what's missing from the Bubbles, if we're getting into the components? Or is there anything glaring, where you're gonna end up writing your own components because there's big gaps in the library?

**Toby Padilla:** \[00:55:50.15\] I think you'll be pretty good with just a basic TUI. I tend to like to invent crazy things, so when I'm making Bubble Tea apps, I rarely start with a Bubble. I just start banging away and making my own stuff, and then often it'll get replaced by a Bubble when somebody else takes over the project, somebody more sophisticated at doing this than I am... But you can do it either way. You can start composing these things that already exist. You can get a long way just trying things out on your own as well.

**Jerod Santo:** So the string that returns - is this including all of the layout information, or is this string like a whole block of ASCII that comes back, or what is it usually comprised of that creates the UI?

**Toby Padilla:** That's a great question, and that's actually what Lip Gloss does. Lip Gloss is our styling and layout library. Lip Gloss.

**Jerod Santo:** So many libraries...

**Toby Padilla:** I know, we've got a million of them. So Lip Gloss will do the coloring, and it'll do the layout of all of your stuff. So when you do your view, you'll use a bunch of Lip Gloss inside of the view... And it returns a string. So Lip Gloss always spits out a string. So as it renders, it has essentially what looks like CSS style sheets, and then you style up your stuff with that, and return it in your Bubble Tea view.

**Jerod Santo:** Okay. So I'm looking at Lip Gloss code right now... It very much almost looks like -- is this Go?

**Toby Padilla:** It is Go. It's almost like a DSL that was written in Go.

**Jerod Santo:** Yeah, because it doesn't feel like Go code that I would normally read, except for the fmt.println.

**Adam Stacoviak:** Fumt.

**Jerod Santo:** Fumt, yes, I know... But I always say "format", I don't know why. Okay, so you've got Lip Gloss for the way it looks and feels, and you've got Bubbles for pre-built stuff, and then Bubble Tea is like what everything plugs into.

**Toby Padilla:** Then toss it behind Wish, so that it's remotely accessible with SSH... Yup.

**Jerod Santo:** What about local storage? I mean, these are things that you would just do maybe BoltDB, or something; you'd just use whatever is available in Go, if you're not trying to do --

**Toby Padilla:** Well, for persistence we offer Charm. So Charm is a lot of things... It was already a lot to take in. Charm itself is a whole ecosystem. It's charmbracelet/charm on GitHub, and you'll see it's a bunch of things. It's a tool that you use, it's a client, it's a server, and it's a set of libraries. So Charm KV is a Charm-managed BadgerDB that stores your data encrypted in the Charm Cloud and synchronizes it across every machine that you've linked your account to. Charm FS is a fully encrypted Golang fs.fs implementation with writeability, that stores all of your data in the Charm Cloud, and makes it accessible to any machine that you've linked your Charm account to.

So if you need a key-value store that's accessible across multiple machines, use Charm KV. If you need to access files or store files in the cloud, encrypted, use Charm FS. And CharmCrypt is there if you want just some straight up encryption library, using those intermediary symmetric keys I talked about earlier. And if you run Charm server, or Charm Serve, that's your own Charm Cloud. And you can "charm host = whatever host you're running that on", and instead of using our default servers, all of our tools and any tool built with our libraries will then start storing the data on your own personal server.

**Break:** \[00:59:13.13\]

**Adam Stacoviak:** So the one thing when you ssh.git.charm.sh, when you git in there - for me at least in Terminal, and maybe this has been talked about and I just missed it, but I don't think so, it's not interactive. And I would imagine the -- I hope at least, Jerod, the plan for this future SSH app for Changelog would be interactive. We have obviously news links...

**Toby Padilla:** It should be interactive. So if it's not, that's definitely a bug.

**Adam Stacoviak:** Okay. So it's not interactive --

**Jerod Santo:** What do you mean by interactive?

**Toby Padilla:** Meaning that I can't click the links, for example. There is on selecting the git clone...

**Jerod Santo:** Oh, mouse support.

**Adam Stacoviak:** Yeah. There's mouse support to navigate...

**Toby Padilla:** Oh, you have to use the keyboard to navigate.

**Adam Stacoviak:** Well, I've got that. So I'm navigating it, but it's not like I can click the links. I have to -- for one, you can't play an mp3 in there. Like, you don't have any, so you're not playing them. I would imagine we have mp3's to play...

**Jerod Santo:** Well, I noticed also an image on one of them. I think Bubbles has an image -- or no, it's Wishlist. Wishlist has an image in the Markdown that says \[unintelligible 01:03:33.26\] and it points out to a gif that we can't look at.

**Adam Stacoviak:** Right.

**Toby Padilla:** So that goes back to the earlier conversation about terminal capabilities...

**Jerod Santo:** If you had Kitty, you'd be loving this right now. \[laughter\]

**Toby Padilla:** If you're on Kitty -- we don't actually default to it. We don't display images, because most people aren't gonna be able to see it.

**Adam Stacoviak:** Gotcha.

**Toby Padilla:** Some terminals will show you an image. Most won't. Or most meaning macOS Terminal will not show you an image. So we don't try to render that image, because most people aren't going to support it.

**Adam Stacoviak:** Gotcha.

**Toby Padilla:** \[01:04:10.07\] So yeah, it's not a rich experience. It's not a multimedia, rich experience. I would love to see that. I like to watch a lot of videos, and I would love to be able to do something with video, and build some sort of video app. That's not today, but we can all try to get there as command line aficionados over the next 5-10 years... Because I think it's ideal.

One of the reasons we're doing this is because we have super web fatigue. Lots of things about the web suck. I'm sick of trackers, ads... I don't like the advertising business model. I don't like all this JavaScript that's running on my machine, and these bloated web pages, and everything's bloated, everything's slow... There's ads autoplaying, and stuff... So stripping all that away, getting to the point where you're not tracked everywhere you go is one of the reasons we moved to the command line. But we lost a lot of stuff along the way, right? We lost YouTube. Bye-bye, YouTube. Like, that's important; we need that. So it's really early days in terms of that.

There are solutions to this that are more or less interesting. So you could run a server that serves a custom web page that displays video, and then managing that server is certainly doable on the command line. But there's not a great way to make rich user interfaces. Some people would like that. I don't know if you guys are familiar with the Gemini project, but their entire philosophy is -- they're basically like Gopher 2.0, text-based web replacements, HTTP replacement, and they also have web fatigue, probably more than we do... So they've gone into this world where everything's supposed to be stripped down; it's just text only, right? If it's not text-only, they don't even want a part of it. So there's cultures out there that embrace just that... But I think it's really important to look forward on how we can make this even richer.

**Adam Stacoviak:** Maybe I'll reframe my question there, or at least the statement I was trying to get to, which is - you know, I can't click the Git links, or the different links in the readmes, so that's like a stopper for me... In terms of what we're trying to build, or aspire to build, is then if we want to have an SSH app that is built with Bubble Tea, styled with Glamour, all that good stuff, behind Wish, and we're doing all this fun stuff, and we want to allow our listeners, our audience, essentially, to see our podcasts, see the index of all of our shows, but then also be able to play them - is that a possibility? And if it's not, what's the hurdles to get to that point from the interface standpoint, with going this route?

**Toby Padilla:** It is not if you go through Wish. So SSH itself is limiting some of this stuff; there are solutions -- if you guys build a Changelog command line app, and you have people download it, you could have it open stuff; you could have it open something on the users' machines. You can have it open a web page, you can have it do lots of things.

Over Wish, that's running on the server, so you're not gonna be able to say "Hey, open this file", or whatever. You can do that though, as long as you build a tool that they will run on their own machine. You can do that numerous ways. Sometimes the terminal itself - and I don't know if the OSX terminal does this, where it'll just take a hyperlink and make it clickable. A lot of terminals do that, so you can just open it in the browser. But you could also just execute in the background the open command, or the \[unintelligible 01:07:31.05\] and it will open up the appropriate application for that \[unintelligible 01:07:37.19\] type, so you can open up an mp4, or whatever. It would probably open it up into Apple Music, or something like that.

So there's definitely ways to handle it if you build a local tool. If you're trying to make it remotely accessible, that's limited. And that's actually a challenge we've had. Because those git clone URLs - you can't execute that. Your back almost in the GitHub world, to some degree, where you're hopping and pasting it into another window. Now, you're still on the terminal, so that's nice, but we're looking at options there.

\[01:08:05.28\] SSH, to some degree, as the viewer, is limiting there, in that it doesn't support linking. Hypertext linking - that's not a thing on SSH. So do we write our own SSH client replacement that offers a bunch of cool, rich options? I don't know, maybe we do.

**Adam Stacoviak:** Maybe you should just write your own terminal, the one that rules them all... And the reason why I kind of get there, why I wanted to sort of option click, is because that's the experience you get in VS Code, for example. Traditionally, even in an editor, you're not necessarily interacting with the links in it. So maybe pushing the boundaries of, say, playing a video, or seeing an image, or playing an mp3 - maybe that's pushing the boundaries of the protocol. But from an interaction standpoint, I would desire or expect to be able to option click a link, because that's what you could do in other editors.

So if this emulates, at least visually, even though it is terminal, and you're innovating that part of it, my expectation as a user is like "Can I option click these links and do different things?" But the answer is no right now. So it's more like understanding what the limits are, and how do you -- if you're trying to innovate the command line, how far down to the metal do you have to go? Do you have to kitty it? Do you have to make your own kitty? You know what I mean? Or can you just adopt --

**Toby Padilla:** \[laughs\] Who doesn't want to...?

**Adam Stacoviak:** Right. But you know, is that how far you have to go?

**Toby Padilla:** It's a great question. We actually asked ourselves yet initially, like "Do we want to make a terminal?" And we explicitly said "Not yet. Not right now." Because there's a lot of other stuff that has to get built at the application level. We're getting to the point where that's sort of the limiting factor.

**Adam Stacoviak:** It seems like the apps are limited though by the current standards, and if you could evolve those current standards, maybe the process of building these apps, and the libraries and the different things that you're building on top of it might -- maybe I'm wrong, because I'm not doing the work, but maybe it might be easier to just take a stab at it for a month, do a month project and see what it would take to do that... Or maybe longer.

**Toby Padilla:** Building a terminal is a big task because it's got like 20 years of backwards-compatibility that if you don't support, people would be raging on you right away... Like, "Oh, it breaks --" Because there's so many command line apps. Like "Oh, Vim doesn't work through Tmux for me anymore", or whatever. There's a lot of stuff that people are doing out there that you need to support, and it's actually a pretty big job to do it. We are -- and this is talking about a sort of secret project that we were looking at at one point, that we decided not to go down... We're like "Hey, VR is kind of cool. Maybe we should do a VR terminal." That's kind of an interesting concept, right? It's a new platform... How do you bring the command line to this new platform? How do you make a really good mobile command line? How do you make a really good mobile terminal?

So I think there's desktop terminals, I think there's other platforms that could have really cool terminals... I think maybe we even explore some of that stuff at some point in time. But as of right now, we've been really focused on -- I mean, even though Bubble Tea and Bubbles are some of our biggest projects... Bubble Tea is actually our biggest project at this point. It's just passed Glow in terms of stars last week. A lot of our effort and engineering research has gone into the SSH side of things; so the identity side, the encryption side, how you handle all of the Git protocols over SSH...

**Adam Stacoviak:** Fundamentals.

**Toby Padilla:** Yeah, because it's a little more separated from the UI aspect. The UI is great, and it's what gets people in the door, it gets people coming to us, and it's really nice to show off, and it's super-fun building this stuff. And we need to keep pushing that forward. But a lot of the value of what we're creating I think is at the identity level, and really pushing SSH forward. So that's another area for us. There's deep rabbit holes everywhere, and you can start going down them... And as we get bigger, we'll probably simultaneously dive into multiple rabbit holes. But for now, we can kind of like dip into a couple of them.

**Jerod Santo:** \[01:12:10.27\] So if we redirect back to that side of things, the SSH side - you have Soft Serve, which is a Wish-based Git server, correct?

**Toby Padilla:** Yup.

**Jerod Santo:** You have Wishlist, which is a Wish-based SSH directory.

**Toby Padilla:** Yup.

**Jerod Santo:** Are there other Wish-based apps out there, or even an idea for apps that people could wrap their heads around?

**Toby Padilla:** Yes, so Charm is also Wish-based.

**Jerod Santo:** Okay, Charm. Yup.

**Toby Padilla:** And there's a version of Glow that's in beta now, that we'll soon be launching, that's based on the new Charm. So Glow sits on top of Charm as well, and the use case in Glow --

**Jerod Santo:** Glow is the Markdown rendering thing.

**Toby Padilla:** Glow is the Markdown rendering thing.

**Jerod Santo:** And Charm is the --

**Toby Padilla:** Charm is the encryption and identity and cloud storage.

**Jerod Santo:** Okay.

**Toby Padilla:** So in Glow, if you open up a Markdown in Glow, you \[unintelligible 01:12:56.14\] you ran it in a project directory, they'll discover all the Markdown in that directory... And then you're like, "Hey, this is interesting. I wanna save it for later." S. Stash. "I don't know what that is. It seems cool." Stash it. "Okay, great. It's stashed." What we did behind the scenes there is generated you a new SSH key pair, generated you encryption keys, encrypted all of that Markdowns file, hit the Charm server with your key, created a new account for you on the Charm server, and then pushed up that encrypted Markdown for your account onto our server, or a self-hosted server, if you want that.

**Jerod Santo:** Okay.

**Toby Padilla:** So all of that SSH mechanic behind the scenes is happening through Wish. And so Charm is a Wish app and Wish library that applications like Glow can use to satisfy any kind of storage or encryption or persistence or identity use cases. There are third-party Wish apps that are starting to come out. We saw two Wordle clones launch in the last three weeks over SSH. Play Wordle over SSH. And they're really great. One of them, Clidle, was on the top of our Golang on Reddit all last week. I don't have its URL off the top of my head, but it's a great implementation of Wordle over SSH. And people loved it. Something about this resonates with people; it's kind of like the BBS days, or something... Just the fact that you can be on the command line, you can use SSH, and all of a sudden you're playing Wordle, is kind of a neat idea. And you can even score stuff, because it keeps your public key, or whatever... I know that they're working on a lot of this stuff, but it's like "Hey, identity, plus remote access..." I didn't install anything; I didn't install Wordle. I just had SSH lying around and I was able to use this thing.

So we saw two of those launch... And then some kind of like toy kind of stuff... But it's pretty new. Wish is like -- I think a month-and-a-half it's been out in the wild, or something like that. So it's all relatively new. But it's exciting to start seeing people not just build stuff with it, but gain some success. So we love it when people build with our tools, and then they go to the top of Hacker News, or they're trending on GitHub, or something. They're able to build something that resonates with the community, with the tools we're giving them; that's pretty neat.

There's a lot of popular Bubble Tea apps. Bubble Tea has almost 500 applications that have been built with Bubble Tea. It's been out there a little longer. There's a thing called Slides this guy Maas created, and it's the second most popular Bubble Tea app besides Glow, in terms of being just like a pure Bubble Tea app... And it's like PowerPoint for the terminal. Like I mentioned, the official GitHub client is using Glamour, it's not using Bubble Tea, but that's like a very big distribution of one of our libraries. Min.io and their official command line tool is using Bubble Tea. That's a new thing. Supabase - I know you had the founder on recently; they in their official command line client are using Bubble Tea.

\[01:15:56.15\] So we're starting to see good Bubble Tea distribution and some pretty large, pretty hot projects... And a bunch of fun stuff, too. There's just fun projects that people make with Bubble Tea. Mergestat is a great one; this is "Treat your Git repo like a SQL database, and run SQL against it." He had a functioning tool, and then he kind of discovered our stuff and started layering more and more. He tweeted that, he's like "I just added a bunch of Bubble Tea stuff to mergestat. I'm gonna add all the Charm stuff to it." Like, yes, please do. That's awesome. So we're seeing people get excited about it, build it, and then achieve some success with it, which is neat.

**Jerod Santo:** I'm over here, googling all these names that you are saying... Actually, mergestat I think is by the AskGit guy, who we've talked about in the past. Small world... QueryGit like it's SQL - pretty cool stuff. Definitely hook us up with a list for the show notes.

**Toby Padilla:** I will.

**Jerod Santo:** I did find Clidle, but you'll probably even think of more after you hang up with us, and say "Oh, here's another cool one." So we'll have like a nice list of things using either Wish, Charm, and/or Bubble Tea out there in the wild.

**Toby Padilla:** Cool.

**Jerod Santo:** Because you know, sometimes just seeing those things are the inspiration you need for the idea, and actually make it click. I think Bubble Tea right now clicks for me in a way which I'm not sure Wish does, because I've seen the examples you're giving and I'm like "These are cool." But then I can't go anywhere from there beyond without more interactive things than is currently available with SSH. That being said, I'm just a guy with very small ambitions and can't think of cool things. I see them and I'm like "Oh, now it all makes sense!" So the more examples... Like you said, it's only been out there for 30 days, so more time, more people will start to play with this and come up with cool ideas. If you're listening and you have a cool idea for something like an SSH-based app, definitely holler at us, let us know about that. Let us know if you would like to try it with Wish, or with Charm, or with Bubble and Bubble Tea... All these things.

**Adam Stacoviak:** So many names...

**Toby Padilla:** Lip Gloss, Harmonica...

**Jerod Santo:** Lip Gloss, maybe some Glamour in there... I'm not sure if Glamour does any more -- oh yeah, style sheets-based Markdown rendering for your CLI apps. Yes, Glamour...

**Adam Stacoviak:** As you were naming those examples, I was seeing how our desire for what we wanna do is certainly the edge case, right?

**Jerod Santo:** I think we could use Bubble Tea for sure, and build a really cool, interactive Changelog command line tool, where you could play mp3s. As long as we can get that stuff done in Go, right? Like, to play the audio, which probably has some cross-platform libraries that you'll have to use to interact with the audio libraries of various operating systems. Bubble Tea is just for the interface, right? You can build full-fledged Go applications and use Bubble Tea for your interface, right?

**Toby Padilla:** Yes, you can. One thing I'm most excited about not having seen a lot of people build with it yet, but it's kind of futuristic and weird, is the Git stuff. Building Git-based apps. So what can you do with Git? Could you clone a repo, and you guys are pushing new episodes into it all the time, and you're just fetching the new versions? Or is there a collaborative option there? For instance, this episode was maybe a repo, and I could push up these links to it, and you guys could add stuff to it, too... Or something like that.

So I think Git-based interaction - it's super-unexplored. And to me, that's the most exciting part of Wish, is like "Oh, you can start building these Git-based apps", and using Git as a way to control things, and as a way to collaborate. That seems interesting.

**Adam Stacoviak:** And if you can probe it like a database, which it basically is, then maybe you can use it sort of like a pseudo-database almost. We have a web app... Maybe Postgres can pull data from that Git repository via WebHooks with GitHub, or some other way, to essentially be --

**Jerod Santo:** We already do that for our show notes. Our show notes are synced with a GitHub repo.

**Adam Stacoviak:** \[01:19:52.20\] Right. It's very similar to that, yeah.

**Toby Padilla:** You can make a Wish app that does that. So you \[unintelligible 01:19:55.23\] someone's pushing something, here's what they're pushing, and then in the Go code you could use your Postgres driver to just populate the database with the file, or whatever got pushed into Git. So from a CMS perspective it's kind of interesting, and that's how we're doing the CMS bit of Soft Serve, is with all the Git pushing.

**Jerod Santo:** Soft Serve being the self-hostable Git sever for the command line. Each time we say a noun, I have to describe which one it is... Because y'all have so many projects, man. It's crazy.

**Toby Padilla:** \[laughs\]

**Adam Stacoviak:** It is challenging to keep track of what --

**Toby Padilla:** Imagine having to make 3D models for all of these things... \[laughter\]

**Jerod Santo:** Well, you're doing that on Hard mode. You took that upon yourselves.

**Toby Padilla:** We did.

**Jerod Santo:** But that's the fun part, right?

**Adam Stacoviak:** Let me ask you one question here... You named a few examples out there. When you were in the final stages - and these were Wish apps, right? That you've just described.

**Toby Padilla:** Mm-hm.

**Adam Stacoviak:** I'm trying to keep track, sorry about that... When you were in the final days, I suppose, of \[unintelligible 01:20:55.15\] and the team was dreaming, "Oh my gosh, when we get this out there, people will build this." What were those dreams? You described some things people are using. GitHub using Glamour, or Lip Gloss, one of those two, and I think you mentioned Supabase, what they used... What were some of the apps you imagined would be built with Wish?

**Toby Padilla:** We actually built Wish and Soft Serve because we had a very specific need for it. So we had built Charm, the new version of Charm, the self-hostable version of Charm, all that Charm KV stuff - all of that, and we needed to launch it, and we wanted to move Glow over to this backend. And the way doing all of this works in Golang is difficult... Because if you look at Golang code, when you import a library, you put a Git URL; it's literally like github.com/charmbracelet/charm/kv, whatever. Whatever library you bring in, it's literally a Git URL. So it was not ready for primetime, but we wanted to get it in front of people, and so we needed another place to put this, other than our public GitHub profile. And we weren't ready to overwrite some of these apps with the new versions, and we wanted to bring them in... This is kind of complicated inside of Go to make it happen, so we were like, "Okay, we need a new Git place where we can pull this stuff." So we started building our own Git server, and like "Let's make it on the command line. Let's make it over SSH. Let's do all this."

So we created Wish -- essentially, we back-ported it into Charm. But we created Wish so we can make Soft Serve, so we could launch Charm. We wanted an alternative Git space that wasn't GitHub. Because there's times you need a Git repo -- Git is very much about promotion; you put it out there, everyone's gonna see it, but you sometimes wanna put something out where people can use it, but you don't necessarily wanna broadcast it out to everyone. So that's why we made Soft Serve... It's like your second Git host. So that was why we made Wish. But after we made it, we were like, "Wow, it's kind of crazy. We just wired Bubble Tea up into SSH", and we're wiring identity up, and we can do all this really cool stuff with Git.

And then our wheels started spinning. We were like, "Okay, it turns out Git is awesome for CMS." Some of these things I've just told you guys about, like the podcasting, and the notes, and editing - that's \[unintelligible 01:23:17.00\] in Wish land. I'm like, "Now, these things are possible." So it's time to start thinking about how you can leverage Git as an API. How do you use Git as the way you manage an application, or what can you do from a collaboration standpoint with Git, that's not just writing code. So I think it's really early days there... But it seems incredibly exciting; it seems interesting, because it's not how you would typically do something. Being able to configure a yaml, check out the config repo, edit the yaml, and push it back to Soft Serve, and then Soft Serve behaves differently is kind of an interesting, new concept. To use Git as a way of configuration seems pretty powerful, and I think we'll see more and more of that.

**Adam Stacoviak:** \[01:24:04.20\] I'll throw this one out there, too... I don't know if this is a one-to-one, because I almost would imagine just managing my own Bash profile, or the ZSH profile, and I was thinking of like Oh My Zsh. This is something that a lot of people install, it has config essentially, where you can choose your theme, and a bunch of stuff... And I wonder, would Oh My Zsh be a good candidate for some sort of app like this, where rather than editing your actual profile, the ZSH profile file itself, would it make more sense to put that in the config? I don't know. Is that where you see that too, where some tooling or dev tools have config locally, and it makes more sense, rather than opening up the file? I don't know. What do you think?

**Toby Padilla:** We're looking at dotfiles as well. We've got some stuff in the works there, because it's a natural fit for what we're doing... And it's a lot of what you say - imagine you've got a Windows machine... More realistically - you have a MacBook and you've got a Linux-based VPS running on DigitalOcean, or something... And you've got Vim on both of them, or you've got some configuration that's slightly different. Tmux works different on Mac than it does on Linux, or something like this. So you have different versions of the same dotfile. How do you manage that? Well, immediately you think Git is useful there, right? Because the way I'm managing my dotfiles now is in branches on a Git repo, and it's quite hellacious, but it's a problem we're looking to solve... And we've actually got some prototype stuff running; I can't talk too much about it yet, because it hasn't been launched, but we're close to launching some stuff that plays in this area.

**Adam Stacoviak:** Gotcha. So it helps in the dotfiles area. Maybe even an actual dotfiles manager.

**Toby Padilla:** Potentially.

**Adam Stacoviak:** And branches on a Git repository, which would be so cool. Each branch is a machine, for example. This machine is that branch, and...

**Toby Padilla:** Yeah, and that's what I do now, and managing that manually is not fun.

**Adam Stacoviak:** Yeah, I bet.

**Toby Padilla:** So tooling around that is definitely desirable.

**Jerod Santo:** Well, let me suggest a name for this SkunkWorks project... I would call it Cupcake.

**Toby Padilla:** You know what - I will tell you what its name is... And its name is Donut.

**Jerod Santo:** Ohh...!

**Adam Stacoviak:** So close!

**Jerod Santo:** Pretty close.

**Adam Stacoviak:** Donut's cool.

**Toby Padilla:** So you guys are getting the scoop on that; we haven't announced it yet.

**Adam Stacoviak:** Alright, so charm.sh/ -- I'm just kidding. Don't insert name here, but... That's where it's gonna live, right? Of course...

**Toby Padilla:** Probably, yes.

**Jerod Santo:** Donut sounds like dotfile, so...

**Toby Padilla:** Doesn't it? It looks like a dot, too.

**Jerod Santo:** That's true.

**Adam Stacoviak:** That is so cool. Okay, okay... I'm digging it.

**Jerod Santo:** I'm interested, yes.

**Adam Stacoviak:** I think that between Donut and what you're doing, I can definitely see why you are so passionate about innovating in this way.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** My hope is that commercial opportunity is in the future, just because sustain... But not so much that -- I just hope that you have enough runway, and can sustain enough runway to keep innovating, because these are definitely cool things. I'm just not sure - except from the Charm Cloud aspect; that's where I can see a commercial offering for you when you get more and more people to adopt SSH-based apps... And why run your own when you can run it there? So give me managed; I can run my own, I can run my VPS, or do it on a Raspberry Pi, because I'm sure you've thought about that...

**Jerod Santo:** Right.

**Adam Stacoviak:** But do I have to? Maybe I can pay $10/month, or enterprise pay $50 or $100, or whatever the number is. That's where I can see something, at least in the near future. But you know, I'm loving the direction, for sure... And the naming, and the fun behind it - that's what really makes it fun. It makes your job, I'm sure, more fun, it makes the team have a lot more fun with meetings... Calling a new project Donut is a lot more cool than something that's lame, basically... You know?

**Jerod Santo:** Something that's lame... \[laughs\] Something like Cupcake.

**Toby Padilla:** Always better than something that's lame.

**Adam Stacoviak:** Right, right, right. Anything else in closing? What have we not asked you, that you wanna share before we close out?

**Toby Padilla:** I think we covered a lot here... Thank you for having me on; this was a lot of fun.

**Adam Stacoviak:** It was a lot of fun, yeah.

**Toby Padilla:** \[01:27:59.07\] I would say if people wanna follow us, come to @charmcli on Twitter, and @charmbracelet on GitHub. That's the best way to stay up to date. Or like I said, join our Slack, charm.sh/slack. But other than that, this was great.

**Jerod Santo:** One last thing that I will say before we close out... I've just thought of this, because I'm looking up Charm's license... I would just say that since Charm is long-term probably the enterprise commercial play, and it can be self-hosted, and yet maybe you want them to host it for you - I just want to say, you've got street cred because it's out there, it's open source, it's MIT-licensed... So you really are putting your money where your mouth is in that regard; even with that piece that is probably going to become the commercially viable part of all this stuff, which is just free and open; really cool stuff. So props to you on that aspect as well.

**Toby Padilla:** Thank you.

**Adam Stacoviak:** I would say even more props too on all the other tooling being able to wire up too a self-hosted Charm.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Like, have it as a cloud that's managed is cool, but then a single config, it sounds like -- I was thinking like Ruby days... And I've even forgot all the terminology. I haven't done it in so long. But wherever you point Ruby Gems to... What's that file, Jerod?

**Jerod Santo:** RubyGems.org.

**Adam Stacoviak:** Yeah, exactly. \[unintelligible 01:29:08.12\] you can just point it wherever you want to get your gems. It seems like a similar change in terms of a config. Just point to wherever.

**Toby Padilla:** It is. It's just an environment variable, Charm host. You set your Charm host environment variable... And in fact, once Glow is launched, the new one, that points to Charm Cloud - even Glow, when you stash, it'll start stashing it to your Charm Cloud. Anything that's built with our stuff will just magically work on your self-host. That's important to us.

And from a commercial standpoint, it's not necessarily a bad idea, because what you need as a self-hosted person is quite different than what an enterprise of 10,000 people need, right? And Go actually makes this easy, because we design all of our stuff with interfaces, implement those interfaces on SQLite on the self-hosted side, and then for instance, on our industrial strength Charm Cloud we've got Postgres backing it, and we just implement all the same interface methods, in a different, more sort of industrial-grade backend.

So we think through some of this stuff -- or stats for monitoring and for all of this stuff... We don't even implement that on the self-hosted side; on our servers, that interface has an implementation that points to Grafana.

**Adam Stacoviak:** Pretty cool.

**Jerod Santo:** So before we let you go, we'd be remiss not to mention the footer of the website, where you take haters...

**Adam Stacoviak:** Oh, yes.

**Jerod Santo:** ...and you redirect them to /dev/null. Tell us the story here. You're sending the haters to /dev/null?

**Toby Padilla:** Where else would they go?

**Jerod Santo:** \[laughs\]

**Toby Padilla:** Where else would we want them?

**Jerod Santo:** Good question. \[laughs\] Well said, well said.

**Adam Stacoviak:** And you've trademarked it.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Well, I want the T-shirt... Put that on a T-shirt, so I can wear it.

**Toby Padilla:** We are working on swag. There is stuff coming soon.

**Jerod Santo:** Cool.

**Adam Stacoviak:** Give me a sticker, give me a T-shirt, give me a pen, some sort of glossy pen... I'd be so excited about that.

**Toby Padilla:** We will.

**Jerod Santo:** Give me a cupcake.

**Adam Stacoviak:** Yeah, give me a cupcake.

**Toby Padilla:** We were thinking about Keycaps. We all have mechanical keyboards, so something like that...

**Jerod Santo:** Oh, that would be cool.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** Well, good luck to you guys, and keep it up. It's really cool stuff. I'm definitely gonna check out Bubble Tea for this SkunkWorks Changelog command line thing that we've been playing around with... So we'll give it a shot.

**Toby Padilla:** Awesome. And just let us know if you have any questions. We're happy to help you.

**Adam Stacoviak:** Alright, Toby, thanks for your time.

**Toby Padilla:** Alright. Thank you very much.
