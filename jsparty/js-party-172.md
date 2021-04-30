**Nick Nisi:** Hello, and welcome to JS Party. I am your host today, Nick Nisi. Hoy-hoy! And I am joined today by Kball. Kball, what's up?!

**Kevin Ball:** Hello, hello. Calling in from a beautiful vacation home, excited to be on the air.

**Nick Nisi:** I'm so jealous of your vacation home. It looks beautiful in the picture you posted in our Slack... Which you can join at Changelog.com/community. Join today and see Kball's amazing view!

**Kevin Ball:** \[laughs\]

**Nick Nisi:** And we have a special guest today - we have Brian Douglas. Brian, what is up? Hello.

**Brian Douglas:** Hello! Glad to be here. I am super-interested in your view, too. All I see is a blank wall behind you though.

**Kevin Ball:** That's true... I decided to go for internet connectivity over view while recording.

**Brian Douglas:** It makes a lot of sense.

**Nick Nisi:** Probably a wise choice, for sure... So today we are going to be talking about -- well, the placeholder title that we have is "Software and hardware for easier development." But really, we're gonna be talking about our suite setups. Brian, we have you on the show to talk about yours as well... I can just tell, looking at yours and comparing it to my messy setup and Kball's blank wall that you are definitely the most prepared here... But Kball, you are on vacation, so that totally makes sense.

But yeah, we are gonna do that, and we thought we would start off with some software... So maybe let's start on that side and talk about some of the software that we use to make development and/or streaming easier. So why don't we start with development, and maybe start with things like where we all do our development, like a code editor. Brian, what do you use?

**Brian Douglas:** I am in between -- I use Macvim as my main driver. I've been a Vim user since Thanksgiving of 2014. I took a week off and learned Vim, and I just can't really pry it away from my hands... But I also use VS Code. VS Code mainly because Vim is -- it's long in the tooth, and getting things like the TypeScript and IntelliSense stuff is more effort than I want to put in to get that to work... So I just use VS Code for that stuff.

**Nick Nisi:** \[00:04:18.16\] I hear you, I hear you... You're making this really hard, because I did tweet right before this that I was gonna try really hard not to make this a Vim party... But I didn't know that you use Vim, so now it's really hard. \[laughs\]

I do use Vim... I use Neovim for all of my development. I've used Neovim since probably 2015... But Vim straight away since 2011, probably. I'd have to go back and look at my dotfiles for the first commit, because I started that, and then I just haven't stopped. Yeah, I use that... I did go through the grueling setup. My vimrc is only like 1,200 lines, so not too bad...

**Brian Douglas:** Mine's huge as well...

**Nick Nisi:** Yeah... \[laughs\]

**Brian Douglas:** But are you using IntelliSense though?

**Nick Nisi:** I am. I'm using a plugin called coc.nvim (Conquer of Completion). That gives you access to the LSP, and it does IntelliSense, and refactoring, and GoTo reference... All of that cool VS Code stuff, right in Vim. So it's the best of both worlds, for sure. What about you, Kball?

**Kevin Ball:** Well, let me tell you... I also am a Vim user, but I'm gonna take my Vim heritage back to 2003, when I first learned Vim for a Fortran class at my university... And have stuck in that -- I cheat on the setup front, so I actually stole Nick's setup. He publishes it on GitHub, so you get to download it and get it going...

I will say -- I should spend a little bit more time understanding it, because a couple times I've tried to modify it and it ends up a little funky. I have right now something I need to fix for my TypeScript setup that I don't love... But I'm a Vim user, and I'll go one dimension deeper, which is I also have my terminals setup using Tmux with Vim bindings, so that I can treat my entire terminal environment as if it were a Vim editor, copying, pasting, and doing stuff between different environments. The kind of super-power that that unlocks is you can just kind of do anything without your hands ever leaving the keyboard, and do it incredibly fast.

**Nick Nisi:** Yeah, I too live inside of Vim, inside of Tmux, and find that to be a fantastic setup.

**Brian Douglas:** I attempted that -- so my previous employer was Netlify, and I was like the only person doing frontend, but everybody else touched all the backend, so I was indoctrinated with Tmux... But it never stuck. So I'm familiar, but I still just use the regular MacVim.

**Kevin Ball:** A fun thing that can happen when you start doing all that though... So I had an incident almost a decade ago now; it was a coffee/MacBook incident, where the coffee met the MacBook...

**Brian Douglas:** I'm familiar.

**Kevin Ball:** Yeah, it was not a good time. And I learned, by the way, that if you Google for "How to get liquid out of a MacBook", or something like that... I am not the first person to have this. Google tells me there are over a million people who have had this problem and written about it, and went forward \[unintelligible 00:07:04.23\] But for a time period, my developer environment was just on the fritz... And at the time I was the only technical employee at a very early startup; I could not be on the fritz. But being in a Tmux and a Vim-based world, it was super-easy to set up a virtual machine that I logged into via SSH from a Chromebook, and I was able to continue doing development. And dealing with static assets sucked, but everything else just felt like my environment, more or less.

So having that type of build environment that can live in the terminal in that way and has all the power that you want actually has a lot of robustness effects, as well.

**Nick Nisi:** Mm-hm. I kind of wanna build on that a little bit and talk about some weird things that I'm currently doing with my setup... And I've been kind of experimenting with this, but over the holidays this year I ended up picking up an M1 Mac Mini, and -- I was gonna ask, we're probably all on Macs here, right? For day to day work...

**Kevin Ball:** How did you guess...?

**Nick Nisi:** \[00:08:03.04\] Yeah... For work, I have a 16-inch 2020 MacBook Pro. And that's what I do all of my work on. But now my personal machine is this M1 Mac Mini... And I have this whole setup, which we'll kind of talk about the hardware side of things a little bit more with that... But I have that all hooked up going into the Mac Mini, including all of this audio interface stuff. I don't really wanna be switching that around constantly, like if I'm taking a Zoom call, but I also don't want my Zoom calls to suffer in audio quality by just using the built-in mic, or whatever.

So sometimes I end up working -- because I'm just using Vim and Tmux, I just happen to work from the Mac Mini SSH-ed into the other machine... And if I want to access other things, like "Oh, I wanna connect to a database" or whatever, through SSH config you can just configure port forwarding, and have all of that... So I'm trying to hit my local hosts, 5432 for Postgres, and I can just have it automatically redirect to this MacBook, and run everything from there.

And then I have kind of the best of both worlds, where I can run my podcast app and listen to podcasts if I want to... That is M1-based; it's an iPhone app that runs on that... But then everything that I do - it's almost indistinguishable, because it's all running through SSH, which is very transparent, when my whole setup just runs in the terminal anyway. So it's something that I've been playing around with, mostly because of this audio setup... But I thought I'd throw that out; it was a pretty fun thing to do.

**Kevin Ball:** How do we get this away from being a Vim party? We've gotta move on... \[laughter\] What are some other fun software things that maybe aren't as deeply tied into the terminal?

**Brian Douglas:** Yeah, I would say what I've been playing a lot around with - and my day job is at GitHub, so I had some pretty early access with GitHub Codespaces, so - plug-plug maybe, I don't know... But I've been using it for one-off instances. I've made a contribution to Node.js, very trivial, when the whole ES Modules things came through, and the error messages weren't coherent... So I ended up doing a PR to update the error message. But to make that one change and run the test on my local machine, the thing had to fly away and take off... Because I have a 2018 Mac - I don't have the M1 yet... But the cool thing about this is they actually have Codespaces set up with a .container file, so I can open up a Codespace from GitHub, run the tests in that Codespace, and it's all on GitHub servers, and stuff like that... So I can just run tests pretty easily.

So I've done that quite a few times for open source contributions, running tests in a hosted environment... Kind of similar to your Mac Mini setup, but except those Mac Minis are sitting somewhere in -- I guess the Codespace is probably some sort of Microsoft server room.

**Nick Nisi:** Yeah.

**Kevin Ball:** Yeah, dockerizing your dev and test environments is so powerful. It's not something actually that we have set up in my current work, but it is something I've done in the past and it makes it so trivial to do things like that, where you're like "Oh... Well, why don't I just run this someplace else? Why don't I completely reproduce the environment that I'm seeing here, over here?" It's phenomenal.

**Nick Nisi:** And not to bring this back to Vim, but I've totally used Codespaces to use the terminal to run Vim on my iPad... So it's a cool environment, no matter how you integrate it. I really like Codespaces; that's a cool thing.

**Brian Douglas:** It's really cool. I didn't think even connecting my local environment to then leverage Vim -- because I haven't set up my vim config, because I've used the Vim bindings in VS Code, which is actually the best... I was gonna say IDE. VS Code is technically not an IDE, but a code editor that uses Vim bindings... But it's still not all the way there, so I would not unleash the Vim all in VS Code. I would still use the local version of it.

**Nick Nisi:** One cool thing about Codespaces is if you have a public repo called Dotfiles, it will set that up in your Codespace...

**Brian Douglas:** What...?! \[laughs\]

**Nick Nisi:** Yeah, it's pretty cool.

**Brian Douglas:** You're teaching me...

**Nick Nisi:** \[laughs\]

**Kevin Ball:** \[00:12:01.23\] I must admit I have not tried Codespaces yet, so... I may have to go do that.

**Nick Nisi:** It works fantastic. I've mostly used it as an iPad dev environment, but I really like it for that. So let's talk about another piece... Let's talk about maybe remote collaboration, and kind of how that pertains to development. As we've been working remotely, whether we typically did or not, the last year has been kind of a remote-centric world... What are some of the tools that have helped you work remotely, or collaborate remotely with others? Codespaces could definitely be one...

**Brian Douglas:** Yeah. I use Codespaces in combination with Twitch... I did a lot of livestreaming on Twitch. It's a nice way to -- because I'm always working out of the GitHub repo, I already have stuff up and running, so that way folks who are watching me live can get context pretty quickly, just by me dropping a link to the repo, or a PR, or an issue or whatnot... So every now and then, if I get really blocked and it's not as exciting watching me get stuck, I will drop a Codespace live share link -- well, a VS Code live share link, but it's connecting directly to my GitHub Codespace... And then folks will jump in there. Or I'll drop it in like a Discord server and people will jump in there and highlight exactly what the issue -- or just write the code. But yeah, I've been doing a lot of that, actually.

**Kevin Ball:** That's cool.

**Nick Nisi:** Yeah.

**Kevin Ball:** I'm so much more ghetto... Like, "Push up a branch. Okay, let me pull it down. Let' me screen-share with you. Okay..."

**Nick Nisi:** I will say that I have used -- I've jumped out of Vim and into VS Code for some pair-programming, and that is phenomenal. With that live share plugin - it's so nice, being able to work on the same files... Or a lot of times I'll just have -- Follow to the Right I think is the option, and it just keeps the right half of VS Code open to whatever file the person I'm collaborating with is in, and then I can work independently in another file... But we can see what each other are doing, and we're constantly up to date with everything. And you can share your dev server as well. So we can make changes, hit Save, and both refresh local host and we're seeing all of that; port forwarding, again... Just magic. It's really cool, and I just couldn't imagine going through the last year without tools like this. It's so nice having them.

**Brian Douglas:** I'm curious, are both of you normally remote employees, or did you go remote because of last year?

**Nick Nisi:** I have been remote since 2013...

**Brian Douglas:** Okay.

**Nick Nisi:** But last year has been completely different, too.

**Brian Douglas:** Yeah.

**Kevin Ball:** I go back and forth... I had been remote for a few years, and I started at where I'm working now at Humu in late October, before the pandemic; late October 2019. I was in person, and I was in person for all of five months, and then we went remote... So kind of wandering back and forth. But I think what was key is prior to that, at that particular company everybody had been in-person, so there was a lot of rediscovery of -- or at least everyone on the dev team had been in-person, so there was a lot of rediscovery of remote practices.

**Nick Nisi:** Yeah. And I was at a company that was fully remote up until last May, and then I joined a new company, C2FO, that are in Kansas City... So I'm working as a remote employee from Nebraska for them. And it's been really easy, because everybody has been remote this whole time. I'm hoping that the patterns that we've built up for remote work will continue when a majority of folks go back to the office.

**Kevin Ball:** Wait -- Nick, you got a new job?

**Nick Nisi:** I did, yeah. A year ago. \[laughs\]

**Kevin Ball:** Color me out of the loop... \[laughter\]

**Nick Nisi:** I haven't talked about it too much.

**Kevin Ball:** Are you no longer working on Dojo?

**Nick Nisi:** Not too much. I'm doing mostly React stuff, but full-stack TypeScript. So still singing TypeScript's praises.

Another piece - and we've kind of talked about it already - is terminals, and terminal-based work. Obviously, Tmux and Vim has been a topic, so let's try and stay away from that... But what about terminal emulators specifically? What's the ones that you all use?

**Brian Douglas:** I am pretty boring, I use iTerm.

**Nick Nisi:** Yeah, that's probably the most popular one on Mac, for sure...

**Brian Douglas:** Yup.

**Nick Nisi:** \[00:15:59.24\] It's easy to set up, easy to configure, and looks great.

**Kevin Ball:** Yeah, I think I've just used Terminal.

**Nick Nisi:** Really?

**Kevin Ball:** I'm super-boring.

**Nick Nisi:** Yeah.

**Kevin Ball:** I do set up Homebrew or whatever -- the green on black coloring scheme, which both helps my eyes, and makes people who don't know how to code look at what I'm doing and go "Whoa, you're from the Matrix!" \[laughter\] But mostly because I'm used to it.

**Nick Nisi:** Sure. I moved away from Terminal because it doesn't work well with -- the color scheme that I use is called Base16, and it's actually 100 or more different color schemes that are all based around these central colors... So you can switch out, and there's like a really cool command line; I just type base16\_ and then tab complete to whatever color scheme I want... And it lets me switch from light to dark, or all of these different kinds of themes really fast... But it's all through terminal commands. Last time I checked at least, the Mac Terminal.app doesn't support that, so it wouldn't work.

So I was using iTerm for that, because iTerm works totally fine with it... But I've dabbled a little bit with -- I don't know if I wanna admit this, to be honest, but I've dabbled a little bit with ligatures in my font environment... And if you use ligatures in iTerm, it actually kicks it out of Metal rendering, which is the GPU rendering more. And so it significantly slows things down.

So for that I've been - for probably the last year - using a terminal called Kitty, which is across OS, it works on everything... A terminal emulator that is all GPU-based, and it does some unique things with -- I'd be horrible at explaining what it's actually doing, but it works totally fine with ligature support, because it's basically only rendering the character once, and then copying it, so it doesn't have to do a lot of GPU-intensive work, or whatever, to do that... So it stays GPU-rendered and stays fast the whole time... Plus, it's really easy to configure, and it has this whole framework around writing little terminal apps called kittens that you can do. I haven't written many, but I've been looking at it... And it's ways of being able to split up the window, or have it do specific things, and the terminal emulator can render images and things like that... So it's really cool, all of the stuff that it can do.

**Kevin Ball:** But why...?

**Brian Douglas:** That sounds pretty cool. I've actually never heard of this... You say "Why?" but the one thing I do remember from Tmux when I did try to do it... The window splitting in the basic terminal in Mac - I'm not sure if it was my settings, but I could never get it to work properly, or I'd get stuck in a split-screen and could not move out of it... So I feel like iTerm handled that a little bit better. But I'm actually interested in looking into the Kitty, actually.

**Nick Nisi:** Yeah, check it out. It's really cool, really fast... And if you're running it on M1 Macs, I think you have to compile from source. It's the only thing that I'm having to do right now... But it's totally fine, it works... And it's pretty awesome.

**Kevin Ball:** I actually meant "Why ligatures?" That seems like the whole inspiration -- but really, why ligatures?

**Nick Nisi:** \[laughs\] I shouldn't have brought it up. Sometimes I just wanna experiment with making my terminal look fancy. I see VS Code and it looks really good, but it's horribly slow when I'm so used to this GPU-rendered fast terminal... I'm like, "I wanna do this cool stuff." Sometimes I use ligatures, but I use this project called vim-devicons, so it renders -- it's a whole font of JS symbol, TS symbol, Python Symbol... All of these things, and it can render all of that, so I have all of this fancy little symbols everywhere that are based on this very specific font... And I just like things to look fancy sometimes. But I understand they're not for everyone, and it's the new tabs versus spaces thing, I think, so...

**Kevin Ball:** I'm just giving you a hard time, Nick. You know how it is... I'm gonna wait for you to perfect it, and then I'm gonna steal your config and try it... Because great developers steal ideas; that's how we work. \[laughs\]

**Nick Nisi:** Absolutely.

**Brian Douglas:** I just got done copying and pasting tons of code this morning, so... Why not copy and paste your setup as well?

**Break:** \[00:20:01.01\]

**Nick Nisi:** Alright, so we've talked about some of the more development-focused things, like editors, terminals, remote collaboration... Let's talk a little bit more about personal productivity. What are some tools that you leverage to keep yourself productive, keep yourself in the know of what you need to be doing, and keep your teammates in the know of what you are doing? Kball, do you wanna go first?

**Kevin Ball:** Sure. I manage a lot of my own personal productivity and other things through a tool called Roam Research, which is basically a networked note-taker, more or less. It lets you take notes -- the key concept is a nested bullet point of some sort, but then the other key concept is you can tag things; anything can be a tag, and it links off to other tags... So it lets you create sort of a network of all the different notes that you've taken.

I have a few different things that I do with that that diminish my personal productivity. One is every day I have a set of priorities. One of the core concepts you get are daily notes; you're just doing daily notes, and that's automatic. I use that heavily. Every day I have a core list of priorities, things I'm trying to get done, at least one, typically no more than five. That's my key thing.

I also map out my meeting for the day. I am a manager, I have other stuff around products, things -- I have a lot of meetings, so I map out what are all my meetings, and prep for those meetings, and have "Okay, what are the things that I wanna make sure I cover.

One of the nice things about the networked stuff is I can tag every meeting with who is it with, particularly for one-on-ones, but also other thing, and then I can go and look at all my past conversations with that person, or other things I've tagged with that person, so that I have an easy way to boot up context for "Okay, I'm talking with this person. The last time I talked with them we were covering these things. Here's the project that's going on with them, or the state of what my interactions with them is."

I use that a lot for myself. I don't share it with other people, it's entirely personal, but combining with the sort of practice of every day I'm having a set of priorities, and I'm mapping out what are my meetings and what do I need to accomplish in them, with this kind of networked concept where I'm keeping track of what are all the different ongoing threads with different people and projects and this, that and the other, and that helps tremendously for keeping myself on track.

**Nick Nisi:** Nice. Are you following -- is it called Zettelkasten? Is that kind of where that idea of daily notes or daily --

**Kevin Ball:** So Zettelkasten is another thing that I think is really around processing your data inputs to create data outputs... So it's like "How do I take notes about the things that I read, aggregate, process, and do that, and then create reusable concepts and blocks that I can then generate outputs with?" I've played around with that; it's something I'd like to get better at, but it is not what I use for my personal productivity at all.

**Nick Nisi:** \[00:24:07.17\] So you keep everything from like notes, and do you manage a to-do list in that as well?

**Kevin Ball:** I mean, "manage a to-do list" might be a little strong for what I do. I don't have a single global to-do list that I'm keeping track of... But I do manage my priorities on a daily, weekly and monthly basis.

**Nick Nisi:** Gotcha. Brian, how about you?

**Brian Douglas:** Yeah, so to define my role a little bit before I jump into that - I'm a developer advocate, so I meet with different teams across organizations, like engineering, product, sometimes marketing, sometimes support... So I take a lot of meetings. So number one, I use Calendly, and I have it connected to my Google Calendar, so that way anybody can grab a 30-minute meeting with me, which I make 25 minutes, because I want a 5-minute buffer between the next meeting, if I do get back-to-back meetings...

But I also run a couple of podcasts and some livestreams with guests, so Calendly also is set up to also hook up -- so you can have a livestream or a podcast with me... The podcast I run is called JAMstack Radio, so as soon as someone says "Hey... Yes, I'll be on the podcast", I'll give them a Calendly link, and then once the calendar event is selected, then I produce a paper doc.

O just got into Obsidian. Obsidian is kind of like Roam Research. I haven't got that far to actually get really into it, so Dropbox Paper has been my go-to... Kind of like Notion, if anybody is not familiar with Paper... And then that Paper doc is the notes for the conversations, the meeting. I also do the same thing in all my calendar invites, is always have an agenda, so that way I can keep that 25 minutes intact...

But going further down deeper into the productivity hole - I started doing this when I joined GitHub; I created a GitHub project on my actual user profile. Not a lot of people know you can do this, but if you go to your user profile on GitHub, you can create a project for yourself... And because I manage a lot of different repos and I'm in a bunch of stuff, it's like my central location to basically put issues that I'm mentioned on, or notifications... Because notifications on GitHub - it's a working feature that could be improved, and it's always being improved... But if I need to track an issue, because I was mentioned in it, or I need to wait for the responses, I add it to a column, similar to kanban boards \[unintelligible 00:26:29.09\] and then I have things I'm doing today, I've got a backlog column, I've got things that are almost complete or blocked... And I just use everything.

The benefit of this is that everything's a GitHub issue at GitHub. We use GitHub to build GitHub... So it's not too hard to say "Oh, I've gotta get this conference sponsored." I'm gonna just take that issue and put it in my project board, and I'll just check it tomorrow.

So GitHub issues and notifications tend to be my email. I don't actually get a lot of emails, to be quite honest, because I turn all those off...

So that's what I've done... But even deeper, because I do a livestream every Tuesday and Friday on Twitch... My website, bdougie.live, is backed by a GitHub repo. Well, most websites are, but legitimately, the database for my website is a GitHub repo. So all the posts that you see on my homepage are GitHub issues. So because of that, if you ever wanna know what I'm gonna be streaming next on Twitch, my GitHub issues - those three issues are the things I'll be working on, and then I have a project board that's like my backlog for streaming topics, and if I move it to the Live column (because bdougie.live, I've gotta stick to the brand), then I will actually run a GitHub Action that runs on a cron every Tuesday and Friday early in the morning, and it looks for that column, and then it actually sends a notification to my Discord and says "Brian will be streaming with this issue. Show up at this time."

I'm working on a course about automation on GitHub, so I'm kind of over the top when it comes to it... But I'm happy to dig in deeper. It's my job to know how to use GitHub, so I'm sort of over the top because of that.

**Nick Nisi:** That is awesome.

**Kevin Ball:** \[00:28:12.18\] Alright, I wanna dig in right away. First off, question - are you generating posts directly from the issues then?

**Brian Douglas:** Yes.

**Kevin Ball:** Okay, interesting. Because I've done statically-rendered sites were the files are there... But how are you doing that mapping from issue to post?

**Brian Douglas:** GraphQL. Actually, that's literally the answer. GitHub has a great GraphQL API, so any issue that has the label Publish, it will actually publish it to my website. So I can write up a whole blog post, or -- what I've been doing really is my issues end up becoming blog posts... So if you look at my latest one, which is -- I think I was organizing notifications with Discord; it's like a blog post \[unintelligible 00:28:49.13\] because I'll just take that and digest it to a dev.to post eventually...

Right now I'm rebuilding Netlify with GitHub Actions, which - it sounds sexier than it really is. I'm not running any servers; I just happen to want deploy previews and some other features that Netlify has, but use that with GitHub Pages... So I'm just rebuilding some of those features with the toolset I can use with GitHub Actions. So I'm working on that right now.

So if you look at that issue, or post, whichever -- if you're on bdougie.live or if you're on the bdougie/live repo, you'll see I'm slowly adding comments that will eventually become a blog post. And I'm all about scaling too, as well... So the reason why I just add comments to the issue is because if I can make that into a blog post, I can probably make it into a conference talk or a YouTube video, eventually, if I just take enough notes...

**Nick Nisi:** That is really cool. I love all of the automation going into it, and how open it is... I definitely wanna go check it out. Would that be on your GitHub username?

**Brian Douglas:** Yeah. So bdougie is my username; if you go to github.com/bdougie/live, or you can go to bdougie.live, which is the website, and click the GitHub link, or click and issue and it'll take you to GitHub as well... But yeah -- I didn't get into this as well... I'm using this tool called OneGraph, which is combining a bunch of APIs together. It's like a mesh network of APIs... I think the founders spoke at JSConf a couple years ago as well. But I'm basically using that as an aggregation to my GitHub API, but also some other APIs, like Discord and Twitch... And then I'm using Next.js as a site. So it's built on Next.js, it's using Relay to sort of consume the GraphQL... So if you're familiar with Apollo, or urql - Relay is another version of a client. And then I'm using server-side rendering to also make sure it's SEO-friendly as well.

**Kevin Ball:** And I'm looking at this -- it looks as though, if I'm getting this right, commenting on a blog post actually ends up going to a GitHub comment on the issue... Is that right?

**Brian Douglas:** Correct, yes. So anybody can add a rocketship to my website and say "Hey, good job!" or thumbs up. That will actually apply to the issue. So I say this out loud; I probably shouldn't say it out loud, but I'm trying to get the GitHub team to add reactions webhooks. If someone does like a thumbs up, I can trigger another event based on that, and I can get notified as well whenever someone thumbs-up a post... But we'll see. I'm not holding my breath. I need to actually send that message today.

**Nick Nisi:** That'll be fun...

**Kevin Ball:** Alright, I just put a rocketship on your Netlify post... This is super-cool. I love the bdougie.

**Brian Douglas:** Yeah, and major props to the OneGraph folks, Sean and Daniel. They created this tool called OneBlog, which was like the initial prototype of this, and I happened to be an early user of it... So I just sort of took their idea and just ran with it, and that now sort of powers a lot of the stuff I'm doing on the internet.

**Kevin Ball:** Now, if somebody didn't work at GitHub and they wanted to do this - I haven't kept up on with the pricing structures for these different things... Is this something that they could cobble together for free? Which of these services are paid?

**Brian Douglas:** Yeah, everything's free. Actions - you do have 2,000 minutes for free on an open source public repo... So like on a cron job. Most of my Actions are usually within a minute; they'll build and run and trigger stuff... So I'd have to hit that a lot to hit the limit. So I'm doing a lot of crazy stuff with Actions.

**Nick Nisi:** \[00:32:13.29\] That's 2,000 minutes a month, right?

**Brian Douglas:** Yes. And that's across your entire profile, running all across the board. It's 3,000 for paid accounts, so it's a bit of a bump... And obviously, you contact your salesperson for more minutes. I will say though that the OneGraph stuff is all free as well, it's a free product. And everything else I do is pretty much free. I'm very cheap, and I try not to pay for things.

I just started deploying something to Azure, and I'm just looking at that number to see if I deployed it correctly, or if I can optimize that to make it pennies instead of dollars... And I've just deployed it last week, so it was like 36 cents, or whatnot. So I am all for the 12-cent AWS build.

**Nick Nisi:** Yeah. Speaking of -- I tried to make a Slack bot using AWS a couple of years ago, and ever since then, every couple of months I just get charged a dollar from AWS, even though the Slack bot is long since dead... And just last week I went in and tried again to try and figure out what it was so I could stop it, and it's -- they're holding on to 0.172 keys for me, and they're charging me storage for that, like 18 cents a month. And I can't figure out how to stop it... But it's a dollar every three months, so I'm like "Do I need to really worry about this right now?" And it just keeps getting pushed down my to-do list.

**Brian Douglas:** Yeah. A dollar for every six months is gonna take you six hours to figure out how to turn off.

**Nick Nisi:** Right... \[laughs\] I just want it to stop, but I know that this is how AWS keeps going, so I'm doing my part.

**Brian Douglas:** Yeah, and we thank you for that.

**Nick Nisi:** Speaking of my to-do list though... I'll kind of talk about my setup a little bit, which is not nearly as robust, but does have a little bit of automation, which I'm pretty excited about... I use more closed tools, obviously, than GitHub. I don't think you can be more open than that... But I use a tool called OmniFocus on my Mac, and phone, and iPad, and all of that, to try and manage everything... But I try and make that my central hub for everything. Everything goes into that. I try and follow the GTD system of having one inbox that I check -- or multiple inboxes, but they all kind of feed into one... And I've tried to automate that as much as possible, and OmniFocus as a tool does make that pretty easy, actually... Especially for a JavaScript developer. But any mail that I get that I have to follow up on, or have some kind of action on, I just have a button in my mail client that sends it to OmniFocus, so I can check it off later... And it includes the full message, so I know exactly what to do.

And then every morning I run through a checklist of things that I need to do as kind of like a morning routine to start up, and that includes things like finding out if there are code reviews that I've been assigned. And the way I do that is through -- OmniFocus has this whole automation system built in JavaScript that you can tie into... So I can press a button - or have it automatically run - that will go and fetch stuff from GitHub. So I'm using GitHub's GraphQL API to go fetch any issues that I've been set as a code reviewer on, that are not already in my system, and it'll automatically create a task for them and throw them in there with a link... And it puts a unique code that's based on the issue number, the repo, and the creator... So it's like a unique code that I can check for every day and see "Oh - nope, that one already exists, so I'll just ignore it and not create another one." Or I've dropped it, or whatever, and it doesn't have to do that. And that way I have a list of everything I need to review.

And then another script that runs that will go and check JIRA's API, find any tasks that I'm assigned to that are not already in my system, and it will put them in there... But it will also check the ones that I have in there, and go check their status on JIRA, and if I've marked them as done in JIRA, it'll mark them as done in my to-do list. So it kind of keeps them in sync between that.

\[00:36:01.09\] Then I just have this one place that I'm checking for everything, and I can work off of there throughout the day... And what I do with the JIRA tasks - a lot of times I'll just write up all of the different things that I need to do. I have some templates that I keep track of for typical dev work... It's like "Do this. Write tests. Open a pull request. Review any PR comments and then merge the pull request, and mark as Done." So those are like the typical things. For every JIRA ticket that comes in, it comes in as like a new project, and then it gets those templated items as tasks for that project... And then I can add any additional tasks that I want, like "Go fix the tests in this file" or "Make sure that you're checking the style guide on this" or whatever. And I'll add all of that in there, and then that kind of sets what I work on throughout the day. And I just use OmniFocus flags to flag things that I want to do today... So I'll build up a list of typically no more than five things that I want to do, and make sure that I try and get through all of those throughout the day... And then I'll review that at the end of the day in a shutdown routine that I have, that goes through and -- I try and leave something open, or write a couple of tasks that will help me get going the next day, or make sure that they're flagged, so that I know exactly where to start...

I try and use all of that, and it's really cool, because it's kind of automated, and pushing and pulling from GitHub and JIRA, but it's all coming to a single inbox for me to review.

**Kevin Ball:** Man, I am simultaneously jealous of your setups, and grateful for the simplicity of my approach... \[laughter\] I'm like "That's amazing!", and I would forget something, or something would go stale, and I feel like I'd spend forever maintaining my setup.

**Brian Douglas:** Yeah, I like that... Actually, I've heard of OmniFocus, but I've never dug into it... But you have me intrigued.

**Nick Nisi:** It's pretty cool. It's the complete opposite of yours, though. It's an expensive tool. I think it's like $80, or it costs so much per -- it's a different price for Mac, and iPhone, and iPad...

**Brian Douglas:** Okay, yeah.

**Nick Nisi:** And it's Apple-only...

**Brian Douglas:** Oh, wow.

**Nick Nisi:** \[unintelligible 00:38:06.09\]

**Brian Douglas:** Yeah, you lost me at $80.

**Nick Nisi:** Yeah, I know... \[laughs\] I've been using it for years though, so it's kind of -- I've definitely absorbed that payment, and I think that it's brought me enough value that it's been worth it... But I totally understand.

**Brian Douglas:** Not to bring up Vim one more time, but this is why I'm so ingrained, because I did so much investing in my dotfiles that it's hard to just let those go...

**Nick Nisi:** Me too, yeah. I mean, it's also fast, and it's fantastic, so there's that, too... But yeah, at this point - I shouldn't say this, but I feel like my identity is tied to it a little bit.

**Kevin Ball:** No...!

**Break:** \[00:38:42.22\]

**Nick Nisi:** Alright, so we've talked about software that we use for development, we've talked about productivity software... Now let's talk about some hardware that we use. What do we actually look at touch/feel through the day to get our jobs done? What are the tangible pieces? Because that's very important when we work on all of this intangible stuff. Let's start with monitors. What is your ideal monitor setup, and is it what you currently have?

**Brian Douglas:** I do have an ultra-wide monitor. I think three years ago I jumped on the bandwagon, and I love it. I use Spectacle as well as software to manage my windows. With Spectacle I can have my Vim here, I can have my terminal here, I can have a web browser, and I can have them all three up at the same time, which is the best productivity for myself... And yeah, I cannot complain. It's probably the best investment I've made for writing code in ever, probably...

**Nick Nisi:** Yeah. What do you have, 34", 38", 49"?

**Brian Douglas:** I believe this one is 34".

**Nick Nisi:** Okay. Thanks. I'm in the same boat. I have a 38", but I went ultra-wide, too. I kind of switched between this, and I did have two 4K monitors. Everything was just to small and too scattered. I use Moom for the same thing as Spectacle, to keep things organized... But it was just too much to handle, so I kind of switched back to a single ultra-wide monitor. And I typically have it in like a one-third/two-thirds type split, where I have one third with usually Slack, or a browser on top, and then notes on the bottom; then two thirds is usually Kitty, that has Tmux with three splits - Vim running on the top, and then two splits at the bottom, one for running my server and the other one for various Git commands, or whatever.

**Kevin Ball:** When I'm working on the frontend I really like having a widescreen, because I like to have my design and my browser and my terminal all visible at the same time, to be able to be working. When I'm doing backend work, I actually don't care that much. I'm totally happy working just on a laptop screen, and it's generally fine. Similarly when I'm doing PM management, whatever. I can do that from pretty much any environment. It's really when I start working on something where there's a visual aspect to it, where I need to be looking and looking and thinking in the code at the same time. As soon as I'm in there, I'm like "Oh, give me my widescreen. I need it."

**Brian Douglas:** There is a new Chrome extension that I've just started using... It's called Easy Window Resize as well. I don't know how much content creation y'all do, or the listeners do as well, but I learned from an Egghead course creator about being able to -- because of the large window size, sometimes you wanna share a window, but you don't wanna share the whole window, so you grab just the browser... But Easy Window Resize - you can actually do Cmd+Shift+A and you can set presets. So if you want 720p, or you want 1080p, because you might be doing a YouTube video or Egghead course... I've found that absolutely amazing.

**Kevin Ball:** That's a great idea.

**Brian Douglas:** Because trying to get 16:9 out of the browser doing it by eye never works... And then obviously, Mac laptops are not 16:9, they're awkward. I know we were going into hardware, but the other thing I use is RDM. RDM actually lets you -- because the laptop screen is Retina for MacBooks, but if you want Retina but 720p, you could actually do that with RDM. It's open source software, to be able to change your screen resolution on the fly.

**Nick Nisi:** Oh, cool. Yeah, that kind of brings in a question I was gonna ask you, as someone who is much more prolific on Twitch than I am, how you work with an ultra-wide monitor on Twitch, since it's not very well-suited for that?

**Brian Douglas:** \[00:44:02.16\] Yeah, I mean -- this might go deeper in the hardware conversation too, as well. So I have a Windows, because I've found livestreaming from just a Mac and running code -- so if I do anything Docker or anything, Twitch streaming is just not gonna work, because there's not enough power, and there's no real video card... So I have a Windows PC which I play games on, but I also stream to Twitch with, and then I take those HD60 Elgato capture cards and I plug my MacBook into there, HD, so that way inside of my OBS software, which is - we're going further down the rabbit hole, but... I use OBS to stream to Twitch; I can actually have a window which is just my Mac laptop, so I'm basically piping my Mac laptop into my PC, and then up to Twitch, so then that way nothing degrades, and I can do 1080p streams.

**Nick Nisi:** So then are you physically working on the Mac?

**Brian Douglas:** Yes. I honestly do not know how to code on Windows...

**Nick Nisi:** Who does...? \[laughs\]

**Brian Douglas:** I'm so used to Mac that I don't even wanna attempt to try to open up the terminal and try to do that... I'd much rather -- I'm way more comfortable with all the commands on the Mac, so it's just emulating it... Well, not even emulating; I'm just piping it into the PC, and then up to the internet.

**Nick Nisi:** But the way that it's piping in - is it piping in the whole screen, or just a portion of the screen?

**Brian Douglas:** It's the whole screen.

**Nick Nisi:** The whole screen?

**Brian Douglas:** Yeah. I give my whole screen up.

**Nick Nisi:** Okay.

**Brian Douglas:** And then that gives me the entire widescreen. So I'm actually coding and sharing my MacBook, but the entire widescreen is where I have the chat up, I've got the Chrome browser up over here, I've got my mixer program up... So I'm able to do all that stuff on the big screen and just share the small screen.

**Nick Nisi:** Cool. Yeah, this is super-interesting to me, just from like someone who wants to someday Twitch coding, or things like that... But also running meetups, and getting the best output from that, or all of this remote stuff that we do. Teaching is another thing, but also just general sharing throughout the day. When I try to share this 38-inch monitor that I have, it doesn't always come across super-well when someone else is just using their MacBook screen.

**Kevin Ball:** Yeah, that resize extension I'm super-excited about.

**Nick Nisi:** Yeah.

**Kevin Ball:** That's like, "Whoa, you've just changed my life right there."

**Brian Douglas:** That's awesome. I've just learned of it this week. I was always setting Spectacle up to do proper -- not even proper; like, hacky resizing to what I think is gonna be 1080p...

**Nick Nisi:** Nice.

**Brian Douglas:** But I will say that the majority of what I learned, I learned this year from being stuck at home. It's just like lots of research, lots of YouTube videos...

**Nick Nisi:** Yeah. How about another tangible piece of your setup... How about keyboards? What is your keyboard like? Kball, I'll ask you first. Right now it's a MacBook --

**Kevin Ball:** I use the laptop keyboard...

**Nick Nisi:** Yeah. \[laughs\] Is that what you use full-time?

**Kevin Ball:** Yeah.

**Nick Nisi:** Nice.

**Kevin Ball:** I occasionally think about getting a nicer keyboard... I usually don't bother, but if you have great recommendations, I might invest.

**Nick Nisi:** I'll go next, since mine is kind of boring, and it's almost the same... I use the Apple Magic Keyboard. The reason I started using this is because I wanted a seamless setup between when I'm using this, versus when I'm just working on the laptop straight... And now I pretty much almost never work on the laptop, but I still really like the feel of this keyboard. It's just awesome.

Right behind me I have a Keychron K3, that I got a month or two ago, thinking I would try and use that a little bit more... And I cannot get used to it. I've tried so hard, but I just feel so clumsy with it all the time. I know I just need to invest more time, but this just feels so good. So this is what I use.

**Brian Douglas:** \[00:47:41.28\] I use a $49 mechanical keyboard from Amazon called Magicforce. It comes in three different flavors - brows, red cherry, red and then the blue switches. Blues are the most clickity clackity. I've got two of them - I've got the blue, and then I've got the... Actually what is this -- the cherry red. And I like it, because I'm not really that into keyboards, but I like the feel of a mechanical keyboard, and I was Apple keyboard -- I had to do that, because that's how I write code; I just like the feel, the touch. But then when they changed the keyboard on the Macs... What was it, like 2015, 2016? Everything was different, so then I'd have the actual external keyboard, and that was fine, but whenever I leveraged my laptop, I was like "What's the point?"

So my co-worker -- actually, the CTO of Netlify, I sat with him, and he was like the whole separate keyboard person, so I just asked a lot of questions, and I was like "I'm actually gonna try this one out." And I enjoyed it enough that I bought two - one for traveling and one for at home.

**Nick Nisi:** Nice.

**Kevin Ball:** Alright, I might have to try... Especially given you said it's pretty cheap, so...

**Brian Douglas:** Yeah, it's low effort. Magicforce.

**Nick Nisi:** We'll try and drop a link in the show notes for that. As far as other peripherals go, I tend to have a mouse on the right side, and I just have the Apple Magic mouse, and I have a trackpad on the left side. And I whichever hand is free, I gravitate towards that as I'm going. But as a Vim user, I do try and not use that as well, so... There's a lot of mouseless development going on.

**Brian Douglas:** I find that funny, that you could use both sides. I'm left-handed, but I've just been trained to use my right hand before the trackpad.

**Nick Nisi:** Really? Nice.

**Brian Douglas:** I also need \[unintelligible 00:49:26.10\] correction. It's $39. It's not a $49 keyboard, it's $39. And I'll add a link.

**Nick Nisi:** Nice. It's even better. We're kind of running a little low on time, so I think what we should do maybe is go around-the-horn and talk about one more hardware item that you think really makes your setup or is a favorite part of your setup that's not your monitor, keyboard or mouse. Kball, how about you go first?

**Kevin Ball:** Hm... Alright, I'm gonna go off the walls, and I'm gonna say my favorite thing/biggest recommendation is actually getting kettlebells.

**Nick Nisi:** Nice!

**Kevin Ball:** Because as a computer programmer you're sitting all the freaking time. You're sitting, you're coding, you're doing stuff... It's really bad for your back. What we do will rip your back up. So you need to have some sort of exercise routine to clean that up. I have this last year fallen in love with kettleballs as a way to have a super-easy gym in a small package, that you could do whatever with.

I went on vacation, we went in the car, and I took a single 50-pound kettlebell and I could do a ton of different exercises with it, and I get a full-body workout just carrying it along. Super-easy. Kettlebell swings, and get-ups or a couple other things and you've got your whole body worked out right away. It's good for your back, it's good for your shoulders... I could go into so many other things on ergonomics and whatever, but no matter what you do, you're probably gonna mess up your back if you're spending a lot of time coding. Find an exercise routine that will counterbalance that.

**Nick Nisi:** As someone who built a home gym since the start of quarantine, I can say that kettlebells were the first thing that I looked for. They were one of the hardest things to find, and I don't think that's the case now, but they are invaluable. I try to use them in every workout, just because they're nice. I love kettlebell swings, I love just being able to use them. They're much nicer than the adjustable dumbbells that I got too, so... They're fantastic. And one of them - like you said, a 50-pound kettlebell - can go a long way. Brian, how about you?

**Brian Douglas:** I've mentioned earlier I'm cheap, but I did splurge last year on a new camera. It's a combo - it's the camera and the lends, and I think the lens is really what makes the shot that I have right now. If anybody's seen me stream, or been on a Zoom call with me, you understand the \[unintelligible 00:51:45.02\] that you're getting right now in the pizza... But it's a Canon EOS M200. The M200 is basically the same thing as the Sony A5 or A6 series. I think the Sony ones get recommended much more, and the reason for that I think is because you could plug in a USB and it would power from your laptop or computer.

\[00:52:07.01\] The Canon - you do have to have a dummy battery. I'm not a Canon fan, but my wife already had a Canon camera, so it just made sense to get the Canon instead of the Sony, at least memory cards transfer, and stuff like that.

But the thing that really makes it is a Sigma 16mm lens. It's a lens that -- you can't see it in the podcast, but it's about maybe 4-5 inches long, and it actually gives you that sort of... Far enough from enough from your face, but it's big enough to actually give you that \[unintelligible 00:52:32.01\] YouTube-esque feel as you're doing Zoom calls.

The camera was about $499, or around that number, and the lens was about $300-something... And like I said, I splurged on it; I did not want to buy this, but it was on my wishlist for the longest time, and then I saved up enough money and got a bonus, and I was like "You know what - I think I'm gonna go ahead and purchase this thing." And I actually have not regretted it since.

**Nick Nisi:** Nice. You look fantastic.

**Brian Douglas:** Oh, thank you.

**Nick Nisi:** The mixture of that -- like, that with the \[unintelligible 00:53:05.04\] that you have on the pizza slice behind you, plus... We didn't talk about it earlier, but it looks like you have fantastic lighting, which I think also makes the setup, you know?

**Brian Douglas:** The trick is to actually close all the windows and cover them with blackout curtains. You can control the lighting as much as possible. Because a lot of times you're trying to fight the window or what time of the day it is... It took me a long time to figure this out, but - just put up blackout curtains and then add light. That's what I've been doing.

**Nick Nisi:** Nice. Well, you've got it figured out, I can tell you that. It looks great.

**Brian Douglas:** Yeah. YouTube taught me everything I know.

**Nick Nisi:** What can't you learn from YouTube? It's great. \[laughs\] I will go ahead and close out with a recommendation -- I think I will go with this monitor arm that I have. I really like it. It clamps to the desk, and then it's just like a VESA mount. So it screws into four screws on the back of the monitor... And I just love being able to pull the monitor close, and go far away, and I can tilt it, or do whatever, but I can really -- like, if I wanna really dig in on something, I can bring it closer to my face, or keep it further away at the back of my desk, to keep things looking a little cleaner... But that's the other thing - it's just floating above my desk, so it feels like I have a lot more room to make the rest of my desk look really messy.

So yeah, I really like it... And it's just a cheap one. It's the Amazon Basics -- I think it's like $100, but it's an Amazon Basics brand monitor arm, and it works really well.

Well, that concludes our setup show for today. We kind of went long in the software and productivity parts... And we can post links to things and more info in the show notes, so definitely check those out. Thank you for tuning in, Brian; thank you for joining us this week. It's been a lot of fun.

**Brian Douglas:** Thank you. It was a pleasure.

**Nick Nisi:** We will see you next week.
