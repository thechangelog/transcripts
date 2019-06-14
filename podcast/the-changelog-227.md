**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 227, and today Jerod and I are talking to Feross Aboukhadijeh about WebRTC, his project WebTorrent, some fun stuff around Electron... Feross also shared his history, where he came from, his passion for hackathons; he also is a huge fan of Electron, and during the show you'll find out why.

Our sponsors today are Rollbar, Toptal, GoCD and Node.js Interactive.

**Break:** \[00:00:46.28\]

**Adam Stacoviak:** Alright, we've got Feross Aboukhadijeh joining the show today, talking about some cool stuff. Jerod, this show's been on the books for a bit. We learned about Feross via Standard and some other things, and his fame in the Node world and some fun stuff he's doing, but... WebTorrent - who doesn't love that?

**Jerod Santo:** It sounds like everybody loves it. It's got thousands and thousands of stars on GitHub, and it's one of these things that makes you say, "I didn't know you could even do that with web browsers." Anytime somebody can put together interesting projects that stretch the limit of what we can do inside the browser, that gets our attention. Feross, thanks so much for joining us on the Changelog.

**Feross Aboukhadijeh:** I'm honored to be here, thanks guys.

**Adam Stacoviak:** Let's dig into your background. I understand that you're to a degree famous now, we've known about you for a while with your success with WebTorrent and Standard of course, we're familiar with that project, but where do things come from for you? What's your origin story?

**Feross Aboukhadijeh:** I got started with computers when my dad brought home a computer for me, yard sale, and he let me play with it for a little bit, and set it up in the house. He showed me a couple of DOS commands, how to change directories, CD and then DIR for listing out the stuff in a folder, and I just learned how to start up games, basically. From there, I really wasn't aware of programming as a thing until probably around middle school. That was when I... I can't remember how I heard about it, but I basically somehow stumbled upon the idea of HTML and the idea of making web pages.

I tinkered around with that, I made a personal homepage - it was pretty silly. I got really into Ebaumsworld and Newgrounds, and flash animations on the internet.

**Jerod Santo:** Nice.

**Feross Aboukhadijeh:** I don't know if you guys remember those days, back when video really wasn't a thing on the web, but you could do flash animations for days.

**Jerod Santo:** Adam, you remember those days, right?

**Adam Stacoviak:** I loved those days. Those were my favorite days.

**Jerod Santo:** \[00:04:04.28\] I remember Ebaumsworld. Is that still kicking?

**Feross Aboukhadijeh:** Yeah, it's still around... I don't know if anyone goes there anymore. Newgrounds actually still seems pretty healthy; especially their audio portal people put lots of good stuff on that still. But anyway, I was a huge fan of those sites.

In high-school I was part of this tech team where our job was to fix teachers computers and take an hour off of the computers. We would actually just get called by the vice-principal to a teacher's classroom, and he would tell us "Okay, this teacher needs something installed", or "Oh, they're complaining about pop-ups on their computer even when they're not browsing the internet", so they would have us try to fix it.

**Adam Stacoviak:** That's so funny.

**Feross Aboukhadijeh:** And whenever there wasn't work to do, we'd just sit around in the computer lab and watch flash animations. We actually had to use web proxies to get around the school filtering in order to download the antivirus stuff, because they blocked a whole bunch of sites, including download.com which was where the different adware scanners and malware scanners were hosted. So we were learning about proxying stuff, and then we would share the proxies with our friends so that we could all get around the web filters and play games on the computers.

**Adam Stacoviak:** Those were some days too, back when you had download.com. I think even CNET was a part of...

**Feross Aboukhadijeh:** Yeah.

**Adam Stacoviak:** That was owned by CNET, right? Those big buttons were there, and anytime you wanted to get something you had to "Go here" and it seemed like this black box, shady thing. It was a unique time in the web.

**Feross Aboukhadijeh:** Yeah, Internet Explorer 6, Firefox version 1...

**Jerod Santo:** SourceForge...

**Feross Aboukhadijeh:** SourceForge, yeah. Lots of toolbars...

**Adam Stacoviak:** Choosing your mirror...

**Feross Aboukhadijeh:** Yeah... \[laughter\]

**Adam Stacoviak:** I was like, "Okay, do I choose the one closest to me? I suppose so, that makes the most sense. Why can't you just tell me?" I guess you didn't have geolocation back then.

**Feross Aboukhadijeh:** Yeah, I don't know why. I guess that was back when the internet was a lot nerdier and people didn't really think about user experience as much.

**Jerod Santo:** And everybody who was using it actually knew what a mirror was, so they're like, "Oh, I'll just choose my mirror.

**Feross Aboukhadijeh:** Yeah. So we would have a lot of fun, just going around... I remember one of the teachers had a whole computer lab full of computers with Autocad on it; it was drafting, so people making floor plans for houses, and stuff. And in order for Autocad to run, you actually had to set up the computer so that it was running as Administrator. The student accounts couldn't install anything, so those computers were always the worst. We were always going in there, fixing stuff on these computers. There were games, people were torrenting stuff, there was all kinds of stuff going on on those computers.

We actually ended up giving out the web proxies to all of our friends and we made a password on the proxy; you had to type "FerossIsAwesome" or whatever, in order to access the open web. We were kind of legends... I remember I was sitting in the library one time, I was on the computer; I tried to visit a site and it was blocked. Somebody next to me leaned over and was like, "Oh, I know how you can get around that. Just go to this site and type FerossIsAwesome", and I was like, "Um, I'm Feross. I think I know how to do that." That was when I knew I had made it.

**Adam Stacoviak:** There you go. \[laughter\] That's a sign of success right there.

**Jerod Santo:** It is. Use your own name as a password.

**Feross Aboukhadijeh:** Yeah, yeah. So it was all fun, high-school shenanigans. Then my friends and I, we got the idea that we should put all of our favorite flash animations onto a website. So I learned PHP and made a site called FreeTheFlash - you can go to it still, freetheflash.com. We just stole a bunch of other people's flash animations, our favorite ones, and just hosted them on the site. It was pretty cool.

\[00:08:06.23\] There were forums, people would come and talk and stuff. It was pretty fun. That was kind of like my first exposure to real programming.

I bought a book -- I don't know if I bought it on Amazon or if that was back when Barnes & Noble was still around, but anyway... A book on PHP and MySQL. That was my first foray into programming.

**Jerod Santo:** Is Barnes & Noble gone?

**Feross Aboukhadijeh:** I don't know. Maybe Borders is the one that's gone.

**Jerod Santo:** Borders is definitely gone, yeah. Anyways, back when they were in their heyday. Of course, if you read the...

**Adam Stacoviak:** They're still there. The dotcom is still there.

**Jerod Santo:** What - borders.com?

**Adam Stacoviak:** Barnes & Noble.

**Jerod Santo:** Barnes & Noble still exists. I think Borders closed.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But brick and mortar bookstores are making a comeback.

**Adam Stacoviak:** It's the new cool place. It's where the Wi-Fi's at.

**Jerod Santo:** There's a great quote from one of the Amazon's media/PR people... Amazon has started now investing in brick and mortar stores, and they said something like "We realize that a bookstore is a great place for people to discover books", or something really ridiculous like that. \[laughter\]

**Adam Stacoviak:** Really?

**Jerod Santo:** That was like their major insight to why they wanted to buy some buildings...?

**Adam Stacoviak:** That's funny... Feross, it's funny to hear how your story to early programming, or to even pique your interest is kind of around -- you know, in some ways just being a kid; just having this innocent draw to something that kind of gets you. Then, in your case, proxying around things, or being in the club and trying to help take care of the teachers and install some stuff... That's really interesting. And you mentioned games, too. Several times on this show, part of someone's origin story - more times than not - stems from games. It's sort of this curiosity place... Why do you think that's true for you, and maybe even other programmers out there?

**Feross Aboukhadijeh:** Yeah, it's totally true. I remember when I first got to college and I started taking computer science classes, I kind of expected that all the other people in the class that I met would be into games, and I assumed that's why they got into computers, because they wanted to be a video game designer or they played a lot of games. But I actually was surprised that that wasn't the case as often as you'd think. There was actually a pretty low percentage of people - maybe 20% of people got in for games.

I don't know... I think back when I was getting into computers things weren't as polished, so sometimes you'd have to debug things, and try different things to get games on your PC to work right, so I think there was a natural kind of requirement to figure things out a little bit. It's not as easy as installing a game on an iOS device today. So that might be part of the reason why you're kind of forced to learn about things. Certainly getting malware on your computer and having to figure out how to get it off so that you can keep using your computer, or so that you don't have to admit to your parents that you accidentally installed a virus, or something... That's some serious motivation right there - you don't wanna ruin the thousand-dollar family computer.

I remember back when people had one computer in the house that everybody shared...

**Adam Stacoviak:** I recall that. That's actually part of my story. This isn't about me, but I share a similarity where I just got to a point where I was just like, "I want to install everything" because I'm kind of like just playing, and it was more around... Like, I broke the computer several times, I got a blue screen, or I did and it just wouldn't start up anymore, so I had to find out how to get there. But then I had to go to a bookstore to read a book, because my computer wouldn't work anymore and I couldn't get on the internet to search for the information to help me get to the next step. So it was a much more antiquated process then for me.

**Jerod Santo:** \[00:11:59.22\] Feross, one thing that we noticed about you, your projects - specifically WebTorrent, but you also had a lot of other things... You made a virtual reality piloting program, you have all these kind of... I would consider them like tinker, or almost like experimental type of things, and one thing that you say about yourself is that you're a "mad scientist programmer" and you like to work on "mad science", which you define as projects that make people say "Wow, I didn't know that was possible!" Where does that come out of? Does that come out of your childhood a little bit? Does that come out of these formative experiences in middle school and high-school, or is that something that you've kind of realized as you've grown older?

**Feross Aboukhadijeh:** I can't really pinpoint when I first started being into mad science stuff. I've always wanted to surprise people with what computers could do. I don't really know where that comes from, but if I look back to all the things I built in college, they were always basically surprising in some way. I remember I used to like to go to hackathons back before hackathons became really corporate. Now pretty much all hackathons are connected to some company and it's some kind of a recruiting thing, but I remember we used to have quarterly hackathons at Stanford where I went to school, and they were always organizes by the CS student group. The trick to winning a hackathon is really to just shock or surprise people with what you do, so building something completely practical is not really the recipe for success there; maybe that's where it comes from. To win, you need to think of "What's the minimum thing I can build - because you don't have much time - that will just knock people's socks off, that they're gonna be talking about for the next couple of days afterwards?"

Actually, at almost every single hackathon I went to, I'm pretty sure there was always somebody who built a textbook sales site, because it's a common student problem. I have all these books from the classes I took last quarter - who's gonna buy them from me? Those never won, because we've seen those before and they're just kind of boring. They may be actually useful to people, but not the right thing for a hackathon. So I built things like the virtual reality drone piloting thing - that was back when Oculus first came out; we took an AR drone and we used the camera on the front to feed video to an Oculus Rift that somebody was wearing on their head, and they could pilot the drone by looking around, and the drone would orient itself so that you're basically controlling it with your head. Then we demo-ed that and everybody was blown away... Except at the very end the guy who was piloting it for our demo, he got really excited - because we had a little cool feature where if you flipped your head back really quickly, then the drone would do a flip... He did that, but the whole headset flew off his head when he flipped his head back, and then the drone crashed into the audience. \[laughter\] It was kind of anticlimactic, but that's one example...

There's another one we did that I thought was really cool, back before HTTPS was pretty common on websites. If you just sniffed the network, you could see what websites people were visiting. There was a big deal about this one extension for Firefox that somebody released, called FireSheep, I think...

**Jerod Santo:** Oh, yeah...

**Feross Aboukhadijeh:** Remember that? Anyone who was visiting Facebook on your network, you could click their name and then you would just be logged in as them, because it would sniff the cookies off the network.

**Jerod Santo:** \[00:15:57.19\] Yeah... Just go to Starbucks, hop on the Wi-Fi and everybody was wide open, and FireSheep made it dead simple. It was like script kiddies times ten, because it was a browser extension - you just install it and go.

**Feross Aboukhadijeh:** Yeah, so this was always possible, right? But then FireSheep just basically said, "Okay, only the bad guys are doing this. Let's make it so that anybody can do this", and then finally these websites would be forced to fix it. It's a surprising thing if you don't know that's possible, so they made it more accessible, and that's the surprising moment for people, when they see that "Wow, anyone can do this!"

A group of my friends and I (about four of us) decided to do the same thing, but instead of sniffing cookies, we would just show the URLs that people were visiting. So we made a newsfeed that would show you in real time the sites that were being visited on the network that you're on. So you could see, like "Oh, someone just watched this YouTube video", and it would embed the YouTube video. A second later, another story would appear at the top with the Wikipedia article that somebody's reading, and so on and so forth. We showed that to people, and they were like "Oh my goodness... Wow, you can do that?" We won, of course. Anytime that you surprise people in that way, it's just a very experience for them. It's like their eyes are opened.

**Jerod Santo:** Mad science.

**Feross Aboukhadijeh:** Mad science... Yeah, exactly.

**Jerod Santo:** I like that.

**Feross Aboukhadijeh:** There's this group of people in the Node.js world that call what they do mad science, so I kind of got the name from that... Substack, Dominic Tarr, Mathias Buus - a big group of guys who publish a prolific number of modules to NPM. They were calling what they do "mad science" long before I was, so I just... I liked what they were doing.

**Adam Stacoviak:** You borrowed it.

**Feross Aboukhadijeh:** Yeah, I borrowed it.

**Adam Stacoviak:** That newsfeed idea is such a unique and interesting idea, around sniffing traffic on a network, and I can see what you mean by "hacking a hackathon" so to speak to figure out how to win. That's a perfect example of like, "Well, I didn't know you could do that." It makes sense - if you're a network manager, it totally makes sense. But to turn that into a newsfeed and make it about discoverability - that's interesting.

**Jerod Santo:** So do you do any hackathons nowadays, or have you -- what's the saying? Hang up your shoes? I don't know... Have you quit?

**Adam Stacoviak:** Have you hung your hat, I believe is the term.

**Feross Aboukhadijeh:** Yeah, I haven't done any recently, namely just because they all seem kind of corporate. A lot of times you have to use the APIs of the companies that are sponsoring the hackathon in order to get extra points. That seems pretty limiting to me. I don't mind if companies wanna be there and have a representative who can help you use their API if you are interested in incorporating that into your project of your own volition, but if you have to do it or if you're really encouraged to do it, then it's not as fun, I think. That's part of the reason.

**Adam Stacoviak:** It seems like you're from a day when hackathons were more about the purity of the street cred versus the prize you win at the end.

**Feross Aboukhadijeh:** Yeah... I mean, I'm not that old, but I feel like in the last four years they've gotten really sponsorship-oriented, and that's not really what it's about to me.

**Jerod Santo:** But you haven't stopped doing side-projects. You had one in 2010, perhaps some of the listeners remember it - YouTube Instant, which was a really fast way to search YouTube. I recall that, I think it blew up and was on every aggregation site on the internet for a day or two, and got tons of traffic. But perhaps even more interestingly, you have a side project now - we're gonna talk about what you're up to with WebTorrent probably after the break... But one thing that's interesting is that you allow yourself to work on open source via some passive income that comes from a side project, so we'd love to hear about that before we take our first break.

**Feross Aboukhadijeh:** \[00:19:57.17\] Sure. Study Notes is a site I started when I was in high-school. Basically, I was taking some classes - advanced placement classes is what they're called. They're basically just this common type of class that high-schoolers in the US take that gives you college credit so you don't have to take as many classes in college. I just took the notes that I wrote up while reading the chapters in the book and posted them online, so if you wanted to, you could read my notes and they would be more succinct than the textbook. Mine were like ten pages and the textbook was like 30 pages.

That kind of started out as just a way to play around with making more websites, but in the years since I created it, it's just been getting slowly more and more traffic, growing like 25% each year. I've just maintained it, kept the site online basically - not shut it down, not completely neglected it, and I think about four years ago I was forced to basically just... I looked at the traffic and I was like, "Whoah! There's a decent number of people using this. Maybe I should spend a little bit more time working on it. Maybe I can make some money from this."

I was like, "I'm not gonna go back now and try to add more notes to this site, because I'm not in high-school anymore, and that just doesn't sound very fun." So I went around and paid people to give me their notes and I posted them to the site, and expanded the number of classes that I could give people notes for, and put a couple of ads up on the page. From there, it's continued to grow, because I made the site better.

I even added a section a couple years ago where I got a bunch of people to give me their college essays that they used when they applied for college, and I posted those up there. I think the longer your site's around, the more Google trusts it, so the SEO has just kind of gotten better and better over the years. Also, teachers are linking to it now from their teacher web pages.

So just from mostly Google traffic, I'm able to make a decent amount of money where I can basically sustain myself while I work on open source and travel. That's been really cool.

It's actually a huge lesson, I think, in not abandoning projects that you're not interested in anymore. Just putting in a little bit of time to maintain them and keep them online for the few people who are finding value in them is a great idea, because you might change your mind later and wish that you didn't shut that project down.

I basically never shut down things, I just keep them up in case that I decide that I wanna work on them later, in case they continue to grow on their own.

**Adam Stacoviak:** Is the main you make money from it just through Google Ads, or is there other ways? I know you said you pay people for their notes, so there's some income and some expenses, too.

**Feross Aboukhadijeh:** Yeah, so there's three main ways that I make money from the site. The first is just ads, because that's pretty easy to get going - you just sign up for Google AdSense and then you paste a little bit of code on the page.

I've always thought it would be nicer if I could just charge people for something, and then instead of making a penny from somebody using your site for a whole week from ads, if you could just charge them $10 and then have them happily give you their money because you're providing them some kind of value and it's worth that to them... Then that would just be a lot simpler and a lot nicer.

So as an experiment, I decided to try charging for the ability to read those essays. After you've read three or four, then you'd get basically the equivalent of a newspaper paywall, where you have to pay in order to keep reading.

\[00:23:54.08\] I thought it was going to be a terrible idea, but it actually is working fine and people are actually paying. I charge $14 to unlock the content, basically. But you can get around it pretty easily... If you're using an incognito window, then it resets the number of essays you can read.

Basically the way I see it is people who don't care enough to try to get around it are probably people who can afford it, so I wanna take their money, because they can afford it. People who really care or where that's too much money, they'll get around it or they'll email me and ask for a free pass, and I've done that for several people who emailed me already. It seems kind of like a nice compromise.

**Adam Stacoviak:** I think this is interesting too, to see how you've yet again been able to be this mad scientist, so to speak, in terms of like -- and I know this isn't exactly mad science; it seems pretty straightforward, but you must have the hacker mentality of being a mad scientist to say, "I'm gonna find a way to not throw things away, but then also kind of keep track on the web traffic to a degree to say, is this viable to people? And if it is, then do something about it." And you found a way to do what you want in open source, or in your own dreamer way, to keep doing the things that interest you around open source, and have a passive income to afford you the ability to do that.

I'm just kind of curious - my needs are different than your needs, and Jerod's needs are different than yours... I'm kind of curious just generally how much money you make from this.

**Feross Aboukhadijeh:** I'm doing pretty well this year... I'm not sure I should say exactly how much I'm making, but it's about equivalent to having a job, let's say. It's only gotten than nice in the last couple of years. I've been working on this for like ten years at this point since high-school...

**Adam Stacoviak:** Right... It's like minimum wage, basically... To a degree. How many years did you put in?

**Feross Aboukhadijeh:** Yeah, exactly. If you go and look back at all the time I worked on it in the early years when it wasn't making any money... Actually, when I first put AdSense on it I remember thinking at the end of the month like "Oh my gosh, Google sent me a check for $40! Wow, this is so cool! I'm making money even when I'm sleeping!" \[laughter\] That was kind of cool, and that was actually pretty addicting.

I don't know if you guys ever visit -- there's this website called Webmaster World. Have you guys ever heard of it?

**Jerod Santo:** No.

**Adam Stacoviak:** I have, yeah.

**Feross Aboukhadijeh:** It's like a forum where people who own websites that have AdSense on them talk about it. There was a post I read one time, back when I was working on this stuff in high-school... It was a guy - actually, it could have been a girl - talking about how they had a site that made them enough money that they could just travel the world with their laptop and just check on their site every so often to make sure that things are going well, and basically do like a four-hour workweek kind of thing. Nobody ever shared the URL of their site, because they were worried about competition and about people copying their strategy, so you could never really know whether it was a true story. But every so often, someone would publish a story like that, and I remember that being really inspiring. I've always had that in the back of my mind, like "That seems a good way to go." Instead of just exchanging my hours of my life for money - a 1-to-1 exchange; I work an hour, I get a certain amount of money; if I want more money, I have to work more hours. Instead of doing it like that, just putting in a bunch of work without getting any money, but then kind of solving the problem once and for all, so that you have something that automatically allows you to live without you having to continue to actively work on it. You can work on it if you want, but on the whole it's pretty passive and it just kind of generates money for you.

**Adam Stacoviak:** That's awesome. That might potentially tee us into the next topic, which is WebTorrent... Just in terms of you now have a passive income and you're able to work on what you want; you're a mad scientist, so you have said, so I imagine that what you're doing with WebTorrent is pretty interesting. Let's tee that before the break, though. When we come back, we'll dive much deeper into that. We'll be right back.

**Break:** \[00:28:05.26\]

**Adam Stacoviak:** Alright, we're back with Feross and we're talking now about WebTorrent. We've talked, Feross, quite a bit about your journey to where you're at, and I think it's interesting to kind of look back, as you said earlier, and have that introspective look towards yourself, and maybe you weren't even fully expecting it, or you weren't really sure what would come out even, but it's always interesting to look back to where you were, where you came from and your interests. We learned about your mad scientist attitude, your love for hackathons and ultimately your ability to persevere and create a passive income to be able to work on things like WebTorrent.

So maybe open up for us what is WebTorrent, and maybe debunk what people might think it might not be, or what it is.

**Feross Aboukhadijeh:** WebTorrent is a torrent app that works in your browser. The idea is what if we could take BitTorrent, the most popular and successful peer-to-peer protocol in the world, with hundreds of millions of users, and make torrents work from your browser, so you don't need to install a separate application on your computer in order to participate in the torrent network. So imagine going to a website, imagine it's something like a YouTube-style site; you push play, a video starts to play, and that's coming from other people who have that video, other people who are on the same page as you, watching the same video, so no servers need to be involved; there's no place that that video is hosted. That video can come from your peers, from other people just like you, who are interested in the content.

That's basically the goal - let's just make this a browser protocol, instead of something that requires an app on your computer. Does that make sense?

**Adam Stacoviak:** It totally makes sense. The only thing I think about when you say that - you probably get this often - is the chicken and egg. Somebody's gotta hit the page first, so how does this work? I know how torrents work, but what do you do for those first few people that visit the page? How does that begin to spin up?

**Feross Aboukhadijeh:** \[00:32:13.06\] Yeah, that's a good question. It is a chicken and egg problem, right? If no one has the file that you're looking for, then obviously you can't get it from anyone. What you can do is -- in BitTorrent, at least, there is no guarantee that a file will exist forever; there has to be enough interest in the file. So all files, all torrents get created initially by somebody who wants to share the file. This is the same thing with websites, right? You can't get content unless someone initially creates the content and tells you about the content. So for a website, I create a piece of content, I publish the content, I pay to host the content, and then I give you a link to the content, or you find out about the link via Google.

There's two components here: there's the person who made the content, who wants it to be available. They personally ensure that it's available by hosting it, and then there's another step, which is you have to find the link to the content. You basically hear about that link through some other party - Google, a friend etc. Torrents are the same way - there's an initial creator of the torrent who ensures that it's available. They're called the seeder. Then there's the link that you use, the magnet link or the torrent file, which is basically the reference to that torrent, that you have to hear about somehow. You get it through a search engine or you get it through a friend, or whatever it is; you get it somehow. It's exactly the same as normal websites.

The real difference for WebTorrent is that web browsers can't actually connect to people's desktop torrent apps and get files from those desktop torrent apps. So if you have uTorrent, or you have Transmission, or you have Vuze or one of these other popular desktop torrent apps, you can't connect to a browser and give a browser user the file that they're looking for. That's because browsers aren't allowed to open up TCP sockets and talk to the network in that way; it's too much of a security risk. Web pages are kind of sandbox, they're not allowed to do that level of networking.

One of the biggest challenges with WebTorrent was figuring out how to get content into the browser from those desktop apps. The browser can only talk in this one protocol, called Web RTC. Have you guys hear of that?

**Adam Stacoviak:** We have.

**Jerod Santo:** We have.

**Feross Aboukhadijeh:** Yeah, and mostly, I'm guessing, you've heard about it in the context of video and voice calls, like Google Hangouts and Skype, using Web RTC, right?

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** A lot of people don't know this, but Web RTC is actually more than just a way to do video and voice calls from your browser. You can actually send any kind of data, an arbitrary kind of data across this channel, so it's a way to make browsers talk to each other. But if these desktop torrent apps add Web RTC to them as another protocol that they can speak, then as far as the browsers are concerned, browsers can connect to these desktop torrent apps and not know that they're talking to a desktop app; they're just talking to another Web RTC endpoint. So we can have this big network where the desktop apps talk to the browsers, and everyone can talk to everyone; it's really happy and nice.

**Jerod Santo:** Unless you gotta get all the desktop app creators on board, right? They've gotta add this to their app.

**Feross Aboukhadijeh:** Yeah, and that's the hard part. Getting desktop app creators to see the value in web peers is pretty hard. The initial criticism people have of this is like, "Well, aren't people who are visiting a web page gonna be a really bad peer? Aren't they just gonna come, consume the content that they're interested in and then close the tab and leave, and not share back anything?", which is a fair question. But we've actually seen that on modern internet connections most people actually finish downloading really quickly, and just the time that it takes to consume the content, if it's audio or video content actually it lasts long enough that they're seeding for quite a bit of time.

\[00:36:13.03\] Then there's also the phenomenon where people leave their tabs open. People have like 50 tabs open, and they'll leave a tab open, and that tab will be seeding the content for as long as the tab's open. It hasn't been too much of a problem.

You also see that most torrents have way more seeders than leechers, so this is actually mainly an issue for when a torrent is new, and the ratio is really imbalanced, and you have more leechers than seeders. Does that make sense?

**Adam Stacoviak:** Yeah, because you have that chicken and egg problem; basically, you have that startup timeframe that you have to pay the price, so to speak, to get it to enough people who have enough interest in the content for it to have enough people to serve it.

**Feross Aboukhadijeh:** Right, and BitTorrent actually has a great way of dealing with that initial situation. This is what made BitTorrent such a beautiful protocol. It's this thing called tit for tat, where people share with the people who share with them. So if I send you a piece of file, I might do that optimistically, assuming "Oh, you're probably a nice guy. You're probably gonna send me some stuff back. But if you don't, then I will stop sharing with you." In the beginning of a torrent's life, a seeder will give different pieces of the file to different people, and then actually the seeder can go away technically, and as long as at least one person has every piece of the file in the home network, then they can all work together to reassemble entire copies of the file. There might be nobody who has an entire copy themselves, but as long as together the sum of everybody's pieces can reproduce the full file, everybody can actually end up getting a file from each other, and it will be really efficient.

**Adam Stacoviak:** Does the original host maintain their own peer, I suppose? Let's say there's ten people serving the file, and they have 90% of it, but the original host still has the other 10% that they're missing - do they act as a peer?

**Feross Aboukhadijeh:** The original host - you mean the seeder?

**Adam Stacoviak:** Right, I guess, using that term as seeder. In the case of web, I go to a page, I wanna surf a video file; I'm assuming, just based on how this works and knowing torrents and how that works - the idea might be to be able to surf the bandwidth originally myself, but then leverage the crowd to maybe save myself some bandwidth, to be able to have this peer-to-peer network to surf this video file. But as you said, during the time you watch, you might actually download most of it, but let's say there's ten peers, but those ten peers only comprise 90% of the file; does the original seeder or host still act as a peer?

**Feross Aboukhadijeh:** Yeah, that's totally possible. If you're a website owner and you're trying to use WebTorrent to reduce your bandwidth costs, then you probably care a lot about your stuff being available no matter what, and if it comes down to it, you're willing to pay the hosting or the bandwidth costs in order to deliver that file. What you could do is, torrents have this feature called Web Seeds, which are basically just Http URLs - a location, an Http link that is the location of the file, that torrent apps can use as a last resort if there are no peers. This is actually something torrents already supported before WebTorrent, so we of course support that as well.

I've actually seen video sites doing this, where they'll have a video - they'll host it themselves, but then they'll use WebTorrent to actually playback the video and it will only use their server if there's no peers available.

**Adam Stacoviak:** That kind of tees up the next question, which is kind of like Why? Interesting, you love mad science obviously, we've talked about that, but why does this attract you? Is it to help, as you said there, to offset the bandwidth for certain sites, or is it simply because the protocol is very interesting to you?

**Feross Aboukhadijeh:** \[00:40:04.04\] It's both. The protocol is really interesting, but there's actually a really good argument for why torrents should be in the browser. I think that if we want this peer-to-peer technology to take off, if we wanna have the internet be owned by people... If we wanna fight back against this constant centralization, constant unification on just a few big services that we all use to do everything, then we need to find ways to make it cheaper to build sites and host them.

For example, no one can really create a YouTube competitor because YouTube just subsidizes the costs of video hosting. Video hosting is not free. It's actually really expensive for YouTube to allow you to upload your home video that's an hour long that no one's gonna watch, that's gonna get like two views in ten years. But they'll host it for you forever, and they won't delete it. It's just sitting on a hard drive somewhere, and they're not charging you for that. It's crazy, right?

**Adam Stacoviak:** It is crazy.

**Feross Aboukhadijeh:** Smaller sites like Vimeo actually charge you if you upload over a certain amount per month, because they don't have the giant business that subsidizes the YouTube business. The smaller guys really can't compete with that. So this stuff is not free; it's just that it seems free because it's being subsidized by Google. So yeah, there's that aspect of it, where I think "Okay, this actually levels the playing field so smaller players can actually do the same thing, not worry about the bandwidth cost too much", but then it also kind of decentralizes the control as well. It's a lot harder to take down content if it's in a torrent form, because you have to shut down all the different people who have it, and prevent them from sharing it.

The interesting thing is, with normal websites you can mirror things. If I see something and I like it, I can save it to my computer and I can reupload it later, and kind of get around censorship that way. But the link changes; the original link is gonna be broken, and you're gonna have to find the content at different locations. Peer-to-peer systems that use content addressing, which is what torrents use - it's really nice because the link itself is basically a hash of the content, meaning that the link is the description of the content, so as long as somebody somewhere in the world has the content, they can send it to you and you'll be able to say, "Oh yeah, this is the content. This matches what I was expecting, because I have the hash." So when I get the content from them, I can hash it and I can see and compare it to the hash I already had, and say "Alright, this is exactly what I was expecting", so I don't have to trust the person sending it to me. If that person goes away, but someone else has the content, they're also just as capable of giving me it, and I'm happy to receive from anybody. The link that I'm using to describe it is actually based on the content, not on the location of where it exists. It's really powerful.

**Jerod Santo:** So you've mentioned the one big Gotcha! - which I didn't realize - with web-based torrents, that the desktop torrents need to support RTC. You also mentioned that sometimes people leave tabs open, and that can be a bit of a boon for those who thought that they would be leeching, but they end up seeding for a while. What are some other Gotcha-s? Obviously, this is like bleeding edge, it's not even in Safari, and I assume Mobile Safari as well; Web RTC is supporting Chrome and Firefox I believe, perhaps others - help me out there... But what are some other things you ran into with regards to, like, "Let's take this traditionally desktop thing which has full networking stack and all this, and let's put it in the web." What are some other web Gotcha-s you've run into?

**Feross Aboukhadijeh:** You're right, Chrome and Firefox support Web RTC. Microsoft Edge also supports Web RTC, but not the data channel yet, so you can do video and voice in Edge but you can't do WebTorrent yet. But they're going to add it soon. Opera also supports it. And yes, you're right - right now on iOS, since Safari is the only browser that you can use on iOS and Safari hasn't added support yet, you can't use it on iOS at all, but on Android you have a lot of choices: you can use Chrome, Firefox or Opera, and they all support it, of course.

\[00:44:16.06\] I think there's definitely tradeoffs, but one of the nice things is that it's not that hard to add WebTorrent support to your desktop torrent app if you're a maintainer of a desktop app. It's basically 95% the same protocol. Once you actually connect to a peer, everything you send to them, every bit of communication is exactly the same as it would normally be if you're talking to another torrent app. It's just the way you get connected that's a little bit different. Instead of opening up a TCP socket, you'll open up a Web RTC connection. There's libraries for Web RTC support that they could just add it, so you're actually seeing clients start to support it.

In fact, I mentioned earlier Vuze is one of them. They're used to be known as Azureus, but now they go by Vuze. They've actually added WebTorrent support, so you're starting to see it happen. And rather than waiting for it to happen, at the WebTorrent project we actually decided to go ahead and just make our own desktop torrent app to kind of push the process forward. The WebTorrent library itself is a Javascript file; the main way it was being used before was as a script that people would add to their websites, and then they could use our API basically to call functions to basically download the torrents that they're interested in and render them into a video tag and a page, or an audio tag, or however they wanna view the content in the web page. But because it's just Javascript, that same code actually worked just fine in Node.js. Because Node.js is more privileged that a browser environment, it can actually talk to normal torrent peers.

So it's been this nice library that works in both places, so we decided to make a desktop app that incorporates both types of environments in one app that you can use on your desktop, and use in place of uTorrent or in place of Transmission, and then in doing so make the web network stronger. So we created this app called WebTorrent Desktop that does just that.

**Jerod Santo:** That's funny - I was gonna ask you why the need for a desktop app when the whole point is to put it in the web, but now that comes full circle and totally describes it. So the end goal there is you can help be part of the solution, as opposed to being part of the problem in terms of why you would wanna use that instead of Transmission or uTorrent native client.

**Feross Aboukhadijeh:** Well, there's also other reasons. I mean, it wouldn't be enough of a reason for people to switch if it's completely like, "Oh, help us out, it will help the network" kind of a reason. It has to be like a real incentive for them, so we tried really hard to make WebTorrent desktop be the best torrent app that you could possibly use. It doesn't have any ads, it's completely open source, and it supports video streaming. You can drop a torrent onto the app and then immediately push play, and play any of the files that are in the torrent back immediately. And even if you seek to part of the file that hasn't been downloaded yet, it will reprioritize the pieces that it fetches from the network in order to basically allow you to play it back before it's fully downloaded.

This isn't that crazy of an expectation; I mean, this is how YouTube works - you can seek around and it will load the part that it needs. But for torrents, this is kind of unheard of, so it's pretty magical and it works really great. If you look at what's out there, at the existing torrent apps, it's really not that hard to do better. I don't know if you've used any torrent apps recently, but there's...

**Jerod Santo:** Transmission is the last one I've used.

**Adam Stacoviak:** Same here.

**Feross Aboukhadijeh:** Transmission is pretty good, actually. I used to use that. It's actually pretty good.

**Jerod Santo:** \[00:47:56.06\] Yeah. Although it did have some malware in it recently, or something.

**Feross Aboukhadijeh:** Yeah, they had malware twice, getting into their installer files on their websites. I'm not really sure how that happened, they didn't really give a full explanation of how they got hacked, but it was pretty sad. If you installed transmission from their website during a certain period of time, you would get this BitCoin ransomware on your computer that would encrypt all your files and then try to get you to pay a BitCoin in order to get your files back.

**Adam Stacoviak:** Dang.

**Jerod Santo:** It seems like you can apply the open source philosophy here, at least for the clients that are open source, instead of just trying to convince them that they should support Web RTC, you could just go and have a pull request, or something, against the ones that you'd like to support Web RTC and just add it. That might be a more compelling way to get it on more desktop clients, at least the open source ones.

**Feross Aboukhadijeh:** Yeah, it's a good point. I'd like to do that, it's just...

**Jerod Santo:** Hard.

**Feross Aboukhadijeh:** ... quite a bit of work, and I haven't had time to do it yet. Yeah, it's hard. But the strategy is working quite well. WebTorrent Desktop has been downloaded over 300 times already, and we have around 30,000 people using it, like monthly active users. People have made it their daily torrent app, and are happily using it. That makes me really happy.

**Jerod Santo:** That's very cool. And famously built on top of Electron; we've recently had Zeke Sikelianos from GitHub on the show, talking about Electron, and I believe WebTorrent Desktop got one or two shoutouts during that show. We're hitting up against our next break, but Feross, I'd love to hear about your experience working with Electron and how that's enabled you guys to build your desktop client of a web torrent. So let's take that break and we'll talk about that on the other side.

**Break:** \[00:49:45.23\]

**Jerod Santo:** We are back with Feross, talking about WebTorrent. Now let's change focus a little bit to a desktop client WebTorrent that we talked about before the break. It's built on Electron, so it runs on Mac, Windows and Linux, and yet, as Feross said, it uses the same web technologies, the Node.js Core and other such things - I'm assuming also Web RTC - to do its thing. Feross, tell us about Electron. We've had a lot of attention around the Electron show; a lot of people are using it, and people are thinking about using it, and even us here at Changelog are wondering "Hm, how can we use that? Because it just seems so neat." I'd love to hear your experience as a user of Electron and somebody that's building on top of it.

**Feross Aboukhadijeh:** Yeah, I'm a huge fan of Electron, it's so good. It's basically like... If you remember the early days of Node.js when web developers first started writing Javascript on the server side, and that feeling of empowerment around like, "Wow, I can use the same language that I'm familiar with, and I can do server things." A lot of people felt so empowered by that, and I think Electron is the same thing all over again. There's so many web developers out there who can do Javascript, CSS, HTML, and now suddenly they can use those same skills and they have this whole crazy world of desktop apps unlocked for them.

\[00:52:06.04\] I think it's really exciting from an accessibility perspective, but then even more than that I think is the dream of "Write an app once and have it run anywhere, on all platforms." That was kind of the original idea of Java, but for various reasons it never really became a thing, and it's definitely dying off now. But Electron actually delivers on that. Most of the credit is due to Chrome. Chrome works on all three platforms and when you write a web page, you write the CSS for it, it renders basically the same on all three platforms. So Electron is just using that, and basically benefitting from all of the hard work that the current team has done to make the font rendering work good, the WebGL and the graphics acceleration, page layout - all that stuff works the same on all platforms. It's really great stuff.

You said your listeners have already heard the other show probably, with Zeke, about Electron. It's good stuff. I like to think of it as -- I mean, it is basically just Chrome + Node together. The two together in one environment, and you can write Javascript that assumes either environment. If you wanna do some DOM stuff, you wanna use a canvas to draw something or you wanna do Web RTC connections, you can do that. If you wanna install modules from NPM and you wanna use those, you wanna require those modules and use the functionality that way - that works, too. That means that hundreds of thousands of things that are on NPM are suddenly accessible to you, so you can do lot of stuff. There's libraries for everything.

**Jerod Santo:** Nice. I'm curious what specific features that you're using in terms of digging into the operating system. One thing you mentioned before the break was that you're making WebTorrent Desktop, the experience, the interface or the entire application polished to rival desktop clients or even perhaps outperform them, because like you said, the pure reason of "Help us get torrents everywhere" doesn't really -- that plays with the small crowd, but not the larger crowd that you're trying to get. What in Electron or even in Chrome have you guys used with WebTorrent Desktop that allowed you to create that native feeling or rivalry experience.

**Feross Aboukhadijeh:** We've used basically every feature of Electron. Of course, the main benefit for us is that the WebTorrent Javascript code just works right out of the box in Electron, and it kind of autodetects the capabilities of the environment that it's in, the networking capabilities. It sees the Web RTC object is there in the global namespace, so it's like "Okay, we can do Web RTC connections. Great!" Then it sees that it can require the Node.js, the Net Module and the Dgram Module for TCP and UDP low-level socket connections, so that's great. So it uses both of those in the same process, in the same environment. Then Electron itself adds on top of all the web and Node stuff, with its own kind of OS integrations, that are really nice. Things like desktop notifications, menu bar and task bar and doc integration, menus on all those things... Electron comes with an autoupdater that goes with Chrome's, so you can have silent autoupdates in the background, so the user's always on the latest version, always has the latest and greatest code, without needing to manage that themselves, or be notified or be bothered with it. It can do delta updates, so it only downloads the diff between the current version and the new version, so it's really fast to download a new version. There's probably more things I'm forgetting... It has crash reporting, and a bunch of other stuff.

\[00:56:01.09\] You can even build installer files for Windows, so the user double-clicks the thing and the app installs itself. On Mac, you do the little DMG thing where the user drags the app into the application folder, and all that stuff. So there's modules for all that stuff. You can really have a very polished experience that's literally indistinguishable from a native app. I'm not exaggerating... You can't tell that it's really a web page there. It's actually indistinguishable.

You need to do some things slightly differently, so if you're a developer you have to kind of change some habits. It's very common on the web, for example, to make buttons have a little hand, the pointer hand that shows up when you hover over the button to show you that it's clickable, but that doesn't happen in native apps. Native apps don't do that. So if you keep doing that, then it's gonna feel a little weird, but it's just small things like this.

There's certain kind of differences in how apps behave across OS too that you have to kind of think about... Like on Mac, when you close all the windows of an application, the application continues to run in the doc, but it doesn't have any windows visible. But on Windows and Linux, when you close the last window, the app kills itself, so you have to think about that, and you have to be aware of the differences. There will be some if-statements throughout your code, like "Do this one thing, do this other thing on this other platform", but it's totally manageable, it's not that bad, really.

**Adam Stacoviak:** On that note, during the breaks we were talking about Mikeal Roger's Roll Call, which I'm not sure if anybody has seen it out there, but it's on his GitHub. I think it's actually... What is the URL for that thing?

**Jerod Santo:** rollcall.audio

**Adam Stacoviak:** That's it. I think one thing they mention there too is for people out there that have built a web app that they're like, "Man, I wish I can have access to the file system, or do different things that a native application would", then Electron is the perfect fit to take what is typically stuck as a web experience and take it to those different platforms.

**Feross Aboukhadijeh:** Yes. Or it's at least a good option to offer people. The Slack app, for example, works just fine in the web browser, but if you wanna have a dedicated app for it, you can install the Slack app. That's built with Electron.

**Adam Stacoviak:** The latest update they did to it - I'm pretty happy with it, because the other one was a little bit more laggy, a little more slow. Some of the recent improvements have definitely improved, for sure.

**Feross Aboukhadijeh:** Yeah. In fact, the Mac app used to be written specifically for the Mac, it was a separate codebase from the rest. The Windows and Linux app used Electron, but the Mac one used Xcode or whatever. But now it also uses Electron on the Mac, and that's why it improved.

It's just funny, because people think like "Oh, it's a web page, it's gonna be slow, it's gonna be pretty hefty", but that's not really the case. The apps are shipping an entire Chromium rendering engine inside them, so the app size itself is actually decently big. You could probably make a smaller app if you didn't use Electron, but that's just the size on disk. In terms of performance, it's possible to build an app that's indistinguishable from native apps. If you don't believe that, just give the Slack app a try, give Atom a try, give WebTorrent Desktop a try - you can really see it. It's really surprising, I think, that it's actually that good.

**Jerod Santo:** So the hype is real.

**Feross Aboukhadijeh:** Yeah, I feel like I'm hyping it right now, but it's... \[laughter\]

**Adam Stacoviak:** You are hyping it a little bit... \[laughter\]

**Jerod Santo:** The hype is real.

**Feross Aboukhadijeh:** I'm just really happy that we took the WebTorrent library and just dropped it into an Electron app and then put a UI on it, and then we had a torrent app. It was a really good experience, it was not that hard. The hardest part honestly - if you wanna know the downsides to Electron - is you have to ensure really that you're not using any Node modules that contain native code, like C code that needs to be compiled for each platform.

\[01:00:10.09\] Sometimes when you install things from NPM, you'll get this little build step where it's compiling some C library, or something like that. If you use any modules like that in your app, then when you go to ship your binaries to your users and produce the .exe file (and so on and so forth for all the different platforms), then you have to actually have either a VM or a physical machine for each of those platforms to actually build the app. That's a little bit annoying and hard to do for every release. With WebTorrent, we've just avoided any libraries like that. WebTorrent has to basically be pure Javascript anyway to work for the browser version - because you can only do Javascript - so it was pretty easy for us to avoid it, but I recommend people try really hard to avoid -- try to find a pure Javascript version of whatever functionality you need, because then if your app is fully Javascript, you can actually build for all three platforms from one platform.

On the Mac, I can build the Windows and the Linux and the Mac app - it's great. The build script just downloads these pre-built Electron binaries and then it reaches inside them and changes the app Javascript from this default sample Electron Javascript that's in there, and it puts your Javascript in there, and then it changes the app's icon, and then that's it. You ship that to your users. It's really simple. You don't need to have a computer or a VM to do it.

**Jerod Santo:** So you've moved WebTorrent to the desktop, and nowadays you are trying to move WebTorrent into Brave. Can you tell us about that?

**Feross Aboukhadijeh:** Yeah, so Brave is another Electron app. Brave isn't widely known yet; you guys are the first to hear it. I'm trying right now to add WebTorrent to Brave. Brave is a new browser founded by Brendan Eich and some other guys, and they're trying to make a private browser that respects your privacy, doesn't track you, blocks trackers... We're doing some interesting things with paying publishers as well; the browser has a BitCoin wallet in it, and it will anonymously send money to the sites you visit if you're down to do that.

So they're trying lots of interesting ideas and experiments in Brave. One of the things that they're open to is torrent support. The idea is if you install Brave, you should be able to go and click on a magnet link or a torrent file and have it just playback right away, or show up right away in the browser without a separate program. Since WebTorrent worked so well in WebTorrent Desktop, the JS library just works great with Electron. We just thought, "Well, why not put it in Brave?" and let Brave users just torrent things really easily. That will be another perk for using Brave over other browsers.

**Adam Stacoviak:** On the note on Brave, we did have Brendan Eich on RFC, so for the fans out there listening to that show, we're recording this conversation with Feross on November 2nd, so the publish date will be a couple weeks from now, but likely the show with Brendan on RFC will be published. I know it's already episode number 10, so just go check that out: changelog.com/rfc-10. On that note, he talked about some very interesting things around the advertising world, the history of the web, and essentially how everything is just crazily funded. You have to go listen to that show. If what Feross just mentioned around Brave and all that interests you, listen to RFC \#10, you're gonna love it.

**Feross Aboukhadijeh:** Yeah, I really like how Brave is going about things, building in all the things that make sense for a browser to have - blocking ads by default, blocking tracking scripts and maybe even torrents, we'll see how it goes. If it works well, we'll hopefully be able to ship that in Brave.

**Adam Stacoviak:** \[01:04:00.01\] You said that about Brave when we were in the break, and that's how we knew about this new information that the world's first hearing right now. It made perfect and total sense for you, given your mission with WebTorrent, to take it to the masses. It makes perfect sense that Brave is a partner for you to work with, at least first; maybe Chrome and Safari eventually inherit it through some contributions through you, but that makes complete and perfect sense, having known the story that Brendan told on RFC \#10.

**Jerod Santo:** Feross, do you mind if I ask you a job interview-style question? You're not actually interviewing for a job...

**Feross Aboukhadijeh:** Okay, sure.

**Jerod Santo:** Where do you see WebTorrent in five years?

**Feross Aboukhadijeh:** \[laughs\] Yeah, that's very job interview-y.

**Jerod Santo:** Sorry.

**Feross Aboukhadijeh:** It's all good, at least it's not one of those trick questions or puzzle questions.

**Jerod Santo:** That one's next.

**Feross Aboukhadijeh:** Right now we're trying to ship 1.0 for the library and for the desktop app and make it really solid, and fix all the edge cases and stuff, but I'm not really thinking that far ahead. If I was forced to think about it right now, on the spot, I would say that I imagine that WebTorrent Desktop will have a few million users happily using it instead of other alternatives, so we'll make a bunch of those people happy. The app will still have no ads in it, the app will still be open source, and it will be growing. I think that will be a nice critical mass. Within five years, I definitely think there will be enough people using desktop apps that support WebTorrent. That basically anything that you would wanna access from the current torrent network will be accessible to web pages. You'll be able to just drop in the WebTorrent script in any page and pass it a magnet link or a torrent file and it will just be able to get the content that you want, and you'll be able to show it in the page. That's really the vision.

Five years is a long time, and that's already starting to happen now, so I think it will definitely be the case that most torrents will just work from browsers. I'm hoping too that we'll actually see more creative use cases of WebTorrent that are not just related to getting stuff that's currently in torrents, and just more new app ideas that are built and powered by torrent technology.

The most creative one I've seen so far is this app that takes a star dataset, like a star map that NASA released, which plots them in 3D and it renders them with WebGL in the browser and lets you fly through the stars. But because the star dataset is really big, it streams it in over WebTorrent. When I say "streams it in", it literally streams it in. As it gets more of the data, it actually renders the stars, so the stars just show up in the sky as they come in. I thought that was a really cool, non-conventional use for WebTorrent, and I hope to see more like that, where people are using it as a utility to make their apps better, and are using it where it makes sense.

**Adam Stacoviak:** I think this is certainly a new thing that is similar to your origin story, which was like "I need a proxy to get around this, get to downloads.com to help my teachers out." It's like there's this new thing, and if you think about it creatively, then you can do some pretty interesting things. On your FAQs you've got "Who is using WebTorrent today?" and you've got lots of stuff listed there, but I'm just kind of curious if you wanna share some stories about some of these, or any particular creative use cases that you're thinking of that aren't even in existence yet. I think that's what Jerod was asking you, like "Where are you gonna be at in five years?" Cast some vision for us, be mad scientist for us.

**Feross Aboukhadijeh:** \[01:07:52.27\] I think there's a lot of potential in live streaming with Web RTC, so figuring out how to do live streams... I mean, WebTorrent will be sort of tangentially related to that. Fundamentally, torrents are immutable, they're not able to be updated, and with live content you're constantly appending new data to the stream. I think that's a situation that probably even more in need of innovation of a peer-to-peer nature just because -- I don't know if you've ever tried watching a live stream lately online, but they all pretty much fall over when a couple million people join, and it's because they literally can't provision enough servers to handle the load of people who rush in at the same time only to get the same video content. So it sounds exactly like the kind of problem that peer-to-peer should be able to help with.

I can see something there with Web RTC and live streaming, and maybe WebTorrent plays a role in some way there. I don't know...

**Adam Stacoviak:** Sometimes people build what you've built to build their own thing, and since you've got some history of building products, I'm kind of curious if you plan to dogfood your own thing.

**Feross Aboukhadijeh:** To make a live streaming thing?

**Adam Stacoviak:** You know, you did the YouTube instant search - completely different, of course, but still you're kind of in that world of... I guess to a degree that's what you're doing with Brave, you're integrating it there. But not just creating the tool, but also building something on top of the tool.

**Feross Aboukhadijeh:** To be honest, I don't really have a use case that I'm dying to use WebTorrent for. I kind of mainly made it just as a way of showing people that Web RTC is real and we can do things with it today, we can do crazy things with it that people don't expect. I was hoping people would come along and do crazy things with it. That's kind of like that list of sites that you see there in the FAQ that lists out all the things people are playing around with it.

I honestly don't have a use case I'm dying to use it for. What I do have though actually is I've been thinking about, like, in the process of making the desktop app, of actually seeing a use case for helping people ship production Electron apps that maybe we could talk about.

**Adam Stacoviak:** Well, tell us.

**Jerod Santo:** Let's talk about it.

**Feross Aboukhadijeh:** While working on the desktop app... Like I mentioned, getting started with Electron is really easy if you have web development skills, like Javascript, CSS, HTML, but I wasn't familiar at all with how to make native apps and how to ship those to people. There's actually quite a lot of things you wanna get right to make the experience really seamless for them. One thing for example is code signing - if you wanna do things right, you sign your app binaries, meaning that there's a code signature on it that tells Windows and Mac that this comes from a developer that has this name, and that the code hasn't been modified by a malicious party during transit. If you don't do that to your app, then when you try to run it on Mac, it will literally just not run. It will say, "This app comes from an unidentified developer." You've probably seen that before...

**Adam Stacoviak:** Yeah... Ctrl-click, open that way and you kind of get around it, but yeah...

**Feross Aboukhadijeh:** Right. So if you have to do that, then you're gonna basically lose all your non-developer users, because they're not gonna wanna do that; it's just another step in the funnel where you're gonna lose people. So you have to sign your app, and that's a little tricky to do. Same thing on Windows - if you don't do it, they get a big, red, scary warning that tells them "This is a not commonly downloaded file. Are you sure you wanna run it?" So getting that taken care of, getting the 32-bit vs 64-bit installer files figured out, getting the autoupdated endpoint set up so that if a user on a 64-bit machine accidentally downloads a 32-bit file you can autoupdate them to the 64-bit build later, after they've installed the app. Things like this, that are actually pretty tricky to get right.

\[01:12:12.23\] I was thinking of starting to work on what actually is a software as a service sort of Electron app builder thing, where you can give it your Electron GitHub repo and it will build your app for you, and take care of all this tricky stuff that people don't wanna worry about. That's something I've been thinking about. I think that would make Electron adoption go a lot better.

There's a lot of apps that look really promising on GitHub, but you have to Git clone it and run it yourself, and I'm guessing that's just because the developers of the repos haven't figured out how to actually ship a real solid production version of the app, and build for all three platforms. You can do it today if you're dedicated and you really like looking to it all, but I had to learn a lot of things. I had to package the DMG, set a background image on the DMG that tells him to drag it into the apps folder; then on Linux there's .deb files. Then there's Windows portable apps; I don't know if you guys remember those, but a Windows portable app is an app you can put on a USB stick that keeps all its settings in one folder.

**Adam Stacoviak:** On USB, yeah...

**Feross Aboukhadijeh:** Yeah, there's all these different types of thing you might wanna do. Then there's the Mac App Store that you might wanna package for. You can figure it all out if you're dedicated, like Slack and Atom and Brave and Digital Studio Code, and all these different people using Electron are certainly doing this today. It's possible, but I think that making it easier would definitely help to create more Electron apps and make it more accessible to people.

I've been thinking about ways to do that. I don't have anything to talk about yet, but I've been thinking about it and playing around with it, so maybe soon there'll be some stuff there. I'm just really excited about Electron, in case you can't tell.

**Adam Stacoviak:** \[laughter\] We could tell. That's certainly a curve ball, we weren't expecting this new idea from you.

**Jerod Santo:** It's aimed more at the indie hackers like us. All the ones that you named, they have dedicated teams working in projects, like Microsoft, or GitHub or Brave, the company. They all have teams that are like, "We can actually take the time and do each one right", but like you said, you find a cool thing, an Electron app on GitHub, and the developer doesn't have the time to do the packaging and put the care into the distribution. So I think it would be a boon for indie developers.

**Adam Stacoviak:** Where does WebTorrent play in? Did WebTorrent play into this idea or no?

**Jerod Santo:** That's all Electron.

**Feross Aboukhadijeh:** No, WebTorrent played... I mean, when we were making WebTorrent desktop is where I learned all this stuff about \[unintelligible 01:14:48.00\]

**Adam Stacoviak:** I was thinking maybe you can not only do the packaging for them, but host it for them and WebTorrent can do the distribution.

**Feross Aboukhadijeh:** Exactly, yeah.

**Adam Stacoviak:** Yeah! I like that part!

**Feross Aboukhadijeh:** Yeah, doing the distribution would be really cool. It would also be a nice way where you could say, "Alright, maybe we should charge for the people who are doing this in a closed source way." Maybe they pay for the hosting and then we put on a CDN for them, but for then for everyone else maybe we use WebTorrent to keep it cheap and not have to host all that stuff. I don't know... It's an idea.

**Adam Stacoviak:** I like it. Indie apps, man... It's helping the indie developers better package their apps for all platforms if they're using Electron. I love it.

**Feross Aboukhadijeh:** Yeah, it's really cool stuff. If you guys had a chance to actually try playing around with Electron yet, it's pretty neat.

**Adam Stacoviak:** We're waiting.

**Jerod Santo:** I read through the source code... When Zeke was on the show, he gave us a specific repository to check out, which I think is in the show notes for that episode, so check that out listeners, if you're interested. It's like a nav-bar application. I can't remember what it does now, but I read through the source... He said, "Just go check it out, you can see how simple it is to create a menu bar application." I think it was all about emoji, or something.

**Adam Stacoviak:** \[01:16:06.09\] Yeah, Emojibar, or something like that.

**Jerod Santo:** Yeah, Emojibar, or something. I went and I read through that, and I was impressed. I understood it pretty much immediately.

**Adam Stacoviak:** It's called Mojibar, now that I recall.

**Jerod Santo:** There you go, Mojibar. So that got us excited about it, with how easy it is to get started, but that's as far as we've taken it. As you may know, we just relaunched our website, Changelog.com, and we just open-sourced all the code for that. So we've been doing that mostly recently, but we have ideas and we'd like to do something with Electron.

**Adam Stacoviak:** We do have this embedded player coming up, so we do have a lot of design and user experience thoughts into this player, so I can see us playing with Electron very soon. Maybe... Soon. Just soon.

**Jerod Santo:** Don't give a time, Adam.

**Adam Stacoviak:** Just soon, okay?

**Feross Aboukhadijeh:** Commit to a time, come on! \[laughs\]

**Jerod Santo:** Tell us when your Electron packager app is gonna ship, Feross...

**Feross Aboukhadijeh:** Oh yeah... Okay. Fair enough. \[laughter\]

**Jerod Santo:** By the end of the year, I'm sure.

**Adam Stacoviak:** I betcha you can't do it before the end of the year. \[laughter\]

**Feross Aboukhadijeh:** I'll accept that challenge!

**Jerod Santo:** Oh, there we go...

**Adam Stacoviak:** So... Christmas present for everybody. Cool, you've got a name for this thing? Is it just called Electron App Builder?

**Feross Aboukhadijeh:** I don't have a name for it yet.

**Jerod Santo:** He just came up with it here on the show, so...

**Feross Aboukhadijeh:** Yeah, it was at NodeConf EU, and another Node conference in Italy two weeks ago, and I did a little Electron workshop there, helping people get up to speed with Electron. And people were basically all asking about this stuff, so I think there's maybe a need there. It would be cool to take all the things we've learned from building WebTorrent Desktop and then put it into a reusable service or library for those people. And also just for myself, honestly. I wanna make another Electron app and I don't wanna have to copy paste all this building code...

**Adam Stacoviak:** Solve it once, man... Solve it one time.

**Feross Aboukhadijeh:** Solve it once, yeah. And then give it away to people.

**Adam Stacoviak:** That's the lesson learned from this podcast - WebTorrent is the future, Electron is awesome, solve it once. Feross, we loved your story, we love what you're doing, we fully support you in all you do obviously, and we're excited about Electron just as you are. Hopefully we meet in the middle when we're getting ready to launch our thing, and with Electron we'll be able to leverage the work you've done here, or plan to do, because you've committed to it. We bet you you couldn't do it and you said "I'll take that challenge", so we'll see.

**Feross Aboukhadijeh:** Yeah, maybe we do a show about that. When you guys do a podcast recording app, instead of us using Skype right now, maybe you guys could have a branded Changelog podcast studio app, where...

**Adam Stacoviak:** Maybe...

**Feross Aboukhadijeh:** ...where I install that instead of Skype.

**Adam Stacoviak:** We're more interested in distributing content than... We'd like to decide too, but that's our next step for sure - distributing the Changelog content that we make: RFC, GoTime, future shows... A lot of fun stuff around that. But let's close this up. If we haven't asked you yet, what's one closing thing... Imagine you have the ear of the open source community - what's one thing, one piece of advice, what's one closing thing that we haven't asked you that you wanna make sure that you share on this show?

**Feross Aboukhadijeh:** Be nice to open source maintainers. They're really overworked and it's a thankless job, so keep them in mind when opening issues, and remember there's another human being on the other side. Just have a little bit of sympathy, don't expect instant responses... Yeah, be a nice person.

**Adam Stacoviak:** Be a nice person - I think we said that a couple shows ago, right Jerod? The maintainers are nice, so we are nice, or something like that. Do you recall that?

**Jerod Santo:** No.

**Adam Stacoviak:** You were on that show, I know you were, and you forgot. Anyways... There's definitely a tweet out there about that. I remember that part of that show. It was like, "Be nice to maintainers." And listen to Request For Commits if you're a maintainer, right?

**Jerod Santo:** \[01:20:11.15\] There you go. That's right.

**Feross Aboukhadijeh:** Yeah, I hope Request For Commits does a show about a counseling session for maintainers, how to cope.

**Adam Stacoviak:** Coping as a maintainer. We'll do that show. We'll talk to you about it in the green room, we'll figure out what that show could be about. That's a good idea, for sure.

If you're out there listening and you've got great ideas for Request For Commits, we have an open inbox for the Changelog, but you can always email us at editors@changelog.com if you get some ideas either for Request For Commits, GoTime, The Changelog or future shows we do, or even future show ideas, so to speak.

Feross, thank you so much for coming on the show today, man. I really appreciate you sharing all of your origin, the fun things happening around WebTorrent, and obviously your excitement for Electron and the future of what you plan to do there. Listeners, thank you so much for tuning in as well. That's it for this show fellas, so let's say goodbye.

**Feross Aboukhadijeh:** See you later!

**Jerod Santo:** Goodbye, thanks Feross!
