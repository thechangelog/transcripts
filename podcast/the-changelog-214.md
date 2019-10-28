**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 214, and today we've got a great show. Julian Shapiro... Man, what a show! This guy was 14 years old when he bought his first domain for a thousand dollars, turned around a week later and sold it for $23,000, and he's been doing something like that in some shape or form ever since. His story of open source, his story of entrepreneurship is something to be admired. It was an absolute blast to have him on the show today, and of course we dug deep into his back story, so you're gonna love that.

We have three sponsors today - Rollbar, Linode and ElixirConf.

**Break:** \[00:00:48.27\]

**Adam Stacoviak:** Alright, we're back. We've got a fun show lined up today. Jerod, this show if obviously a cool show, because any show that comes from a listener's suggestion on ping - we love that, right? Kevin McGee, never shy, big fan. Ping number 178... What's going on here?

**Jerod Santo:** Yeah, so Kevin kind of takes the shotgun approach to getting people on the show that he would like to have, which is that he will put them all out there. And not only that, he'll also go out and reach out to them and tell us why they should come on, so we appreciate that. And quite impressive with Julian Shapiro... I'll just read Kevin's blurb and then we'll intro Julian.

Kevin says:

"*Julian is a startup founder and developer. His first startup, NameLayer, was acquired by TechStars. His current focus is advancing motion design on the web, and to that end he created the Javascript library Velocity.js, which is rapidly becoming one of the most popular animation libraries on the web.*"

\[00:04:01.11\] He goes on, and I think that's probably even a little bit dated, of course - that was back in March of 2015. One thing about ping is there is lots of pings out there, so we don't always get around to that super fast. But that being said, very impressed, and Julian, we're grateful that you've come on, and welcome to The Changelog.

**Julian Shapiro:** Thanks for having me, guys.

**Jerod Santo:** So, as is our habit, we like to find out about our guests before we find out about what it is that they do that makes them so interesting. Julian, we'd like to dig a little bit into your back story. Here you are, a startup founder today. You have Velocity.js, which is one of the most starred projects on GitHub, an animation Javascript library. Some other cool stuff - we'll talk about Libscore and other such things, but how did you originally get into the programming game and start coding?

**Julian Shapiro:** In preparation for this, I was trying to go back in time this morning and pinpoint what the first contact I had with programming was, and I think it must have been getting my hands on the Visual Basic 6.0 book, so it must have been 11 or 12. And for me it was a way to advance on this turtle game you play as a kid where you learn how to type, like inputting commands to a turtle, who would then move along as graph on a computer in Computer Class. And Visual Basic 6.0 seemed like the next evolution to creating things that were more than just walking turtles.

I had this compulsion to build games, so it seemed like a very natural fit. I'd build RPGs, I would also build chat clients, I would build trojans to screw with my friends...

I remember I would use Visual Basic 6.0 to output these little .jpeg.exe files and send them to friends on MSN Messenger and just get them to open them and then open their CD tray...

**Jerod Santo:** Nice. \[laughter\]

**Julian Shapiro:** Silly things like that. So for years VB 6.0 was a way to goof around, and then eventually, come 17, 18, the transition to PHP happened, which was of course web development, as opposed to app development; or I guess then desktop software development. And that transition came about with the realization I could use these skills to actually build a career. I could make websites for local businesses. I could build a company. PHP, the way I saw it, almost single-handedly afforded me the ability to actually make a company from my computer chair at home.

So that's where the transition lead me to. It was initially having fun coding, and then "Let's make a business with these skills."

**Jerod Santo:** I'm always curious about the transition from, "I like programming" to "I am an open source advocate or user or creator." So you've mentioned PHP... Do you know how you first came across PHP as a thing that existed, or the web and the openness of it?

**Julian Shapiro:** PHP for me actually came about from having an interview where the interviewer said, "Do you know PHP?" and I said "...Yes." \[laughter\] So I went home that night, hit up the local bookstore, bought a PHP book, and was like "Oh, this is really cool." That was the start of it for me.

What was interesting was I didn't have the relationship to PHP or coding in general that I recognized the other people at that job did. They seemed like coders, period. I seemed like someone who enjoyed coding, knew enough to get by, but didn't study it from any sort of academic or even career perspective. I was trying to code whatever I had to to get the job done, and that really stuck with me for a long time. It did me a disservice for a long time; even when I built a business myself, using technology myself, I didn't do a deep dive into what I should have. I wasn't using the right frameworks. My code wasn't necessarily clean, I wasn't using the right idioms, but it worked, and it continued to scratch that itch ahead as a kid of "Let's make cool stuff."

**Jerod Santo:** \[00:08:03.24\] Did you ever go back and backfill that academic pursuit, or the history, or the computer science side of it? Or you just continued to push forward?

**Julian Shapiro:** I pushed forward, and slightly reluctantly so, but to me programming was very much a means to an end. It wasn't programming onto itself that I necessarily enjoyed or even identified as; I did not identify as a coder, I identified as an entrepreneur, and often times I didn't know who else could do things for me, so I would just code it up. But what did happen was when I was eventually afforded basically a year off where I could explore whatever it is I wanted to, and I decided to build this animation library, I realized if I was going to build something with the purpose of it being widely used, I would have to double down on my skill. It wasn't that I was a poor thinker as a programmer, it wasn't that my code was structurally weak, it was that I wasn't bothering to brush up on best practices. But I forced myself to when I started developing Velocity.

**Jerod Santo:** So before you got to Velocity - let's talk about the startup side of things... Your business NameLayer - was this your first startup, or did you have previous businesses before that?

**Julian Shapiro:** NameLayer was my first startup. It came about right as I realized how powerful web development was, right as I realized what I could do with PHP. And throughout my teens, I had actually been flipping domain names as if they were real estate. I remember when I was 14, a friend of mine owned the domain deleted.com, and I was like "That seems like it could have pretty good value, maybe companies that sell software recovery tools." So I bought that domain name from him for a thousand dollars, and I sold it to his friend, his wealthy business friend a week later for $22,000.

**Adam Stacoviak:** Oh man, that's awesome.

**Julian Shapiro:** So that was the start of "Wait a minute, there is digital real estate I can play into."

**Jerod Santo:** Right.

**Julian Shapiro:** And I was only 14 at the time. So I thought to myself over the years, now that I can code a bit better, now that I had better access to tech, can I automate the discovery and acquisition of domain names? And that's what lead to NameLayer, which was my first startup.

**Jerod Santo:** Real quick, Julian... At age 14, when you made that sell, what did your parents think at that time?

**Julian Shapiro:** I think my parents were already those sterotypical parents who couldn't love their kid any more. It didn't shoot me over the moon like "Oh, of course... That's something Julian would do." But personally and amongst my friends it was the sort of thing where I was like, "Okay, I could be smart about my finances and flip a bunch more domain names and save up for college, or I could buy a bunch of cool shit." \[laughter\] So I flipped another domain name, I also bought this domain name called oxi.com for $9,000 from the proceeds of deleted.com, and then sold that for $23,000. And these two sales happened in a very short window, and prior to this I had like maybe $800. So I bought a sports car, a cheaper sports car, a Chrysler Crossfire which at the time I thought was super cool.

**Jerod Santo:** Could you even drive at the time?

**Julian Shapiro:** I could, yeah. In British Columbia, Canada at 14 you get something called the trainer and N licence, so I was able to fool around. That was definitely the spark of "Okay, let's switch off of building trojans to fool around with friends' computers \[laughter\] and let's see if I can systematically make money through a business here."

**Adam Stacoviak:** Hey, check this out... While we're on this subject - deleted.com is actually for sale again.

**Julian Shapiro:** Things come full circle. If I could buy it for a thousand bucks, that'd be fantastic.

**Adam Stacoviak:** There you go... You could buy it for a thousand and sell it for a hundred thousand maybe this time... Who knows? That's crazy, man...

**Jerod Santo:** You gotta be the coolest kid in school. At 14 years old you bankrolled your own car...

**Adam Stacoviak:** \[00:11:58.18\] I wanna be your friend, even now...

**Julian Shapiro:** It was cool until girls asked "How did you make the money?" and you started going into this long description of domain names and domain name forums... It's much less cool when you actually get into the nitty gritty.

**Jerod Santo:** That's true, good point.

**Adam Stacoviak:** They're like, "Yeah, that's boring."

**Jerod Santo:** To us, that's cool. To girls at age 14 it probably wasn't that cool.

**Adam Stacoviak:** But how cool though too, Jerod, is that his first startup is such a success? That doesn't happen often. That's like the unicorn right there.

**Jerod Santo:** It is rare. So tell us about that success. You gave us a little bit on NameLayer... Continue down that path before I cut you off.

**Julian Shapiro:** Sure. So NameLayer was built on two sets of tools. One tool would figure out which of the domains that are expiring today - and about 50,000 domain names expire every day between a two-hour window - are of actual value. And it's hard to figure that out. Part of NameLayer, people weren't systematically ascribing value to domain names, because the really valuable ones, the self-evident value ones such as single dictionary word dot coms, like trillion.com, of course it has value. But things that were two words back to back, it was much more dubious.

NameLayer, which is an example of that, or the actual company name - it's like how much value would NameLayer have? And NameLayer isn't a great name, but there are a lot of other two English words back to back names that are really good. Like SalesForce - it's a pretty good name.

So I had to figure out, of the 50,000 domain names expiring every day, which of those had resell value and then entrepreneurial context. So I actually went through the entire English language dictionary over the course of a weekend with my roommate, and we scratched out... We had a digital copy, and we deleted all the entries of words that I couldn't foresee anyone putting at a company name.

The example might Adobe. Adobe makes sense if it's alone, if that's the name of your company. But a BlueAdobe, or AdobeRed - it doesn't have a very nice ring to it.

So it was a very subjective process, fraught with a lot of false positives, but we pruned down the dictionary - it was a grueling three-day process - and we were left with something that when typed into a few very, very basic algorithms in PHP would be able to determine based on Google search queries and Google search results which of these were likely to be of value.

So that was the first set of tools. That was the first time I actually really mobilized my engineering skill in pursuit of a business objective, and it was really fun to do that. I felt like it was this powerful command station. I'd wake up, turn on my laptop, and I would just see this huge 50,000 dump get parsed into just really valuable domain names. It was like looking at money. So of course the next set of tools that had to be built were those that would actually acquire the domain names. This was pretty interesting, and this required a lot of research into stuff that is not published online, and it turns out that domains expire in a two-hour window - at least .coms do - from the Verisign registry who are in charge of overseeing .com, .net, .jobs and a few others. So it turns out if you are a registrar, like GoDaddy.com or NameCheap.com, you can get access to the list that's expiring that day. And there are some other backchannel ways to get access to those lists, so I did those. But the lists weren't in the order that those domains would actually expire. Meaning, here's 50,000 domain names. They're gonna expire in some randomized sequence over this two-hour period every single day that that's gonna happen, so the goal is to send the API request to register the domain you want right after it drops. And if you miss it, if you do way after, someone else with a better request will get it. If you do it way before, it won't yet be available for registration, it will still be in expiring stage.

So we had to figure out - we meaning myself and a friend - how do we systematically parse through the list in real time to guess the likelihood of a domain dropping in the next ten milliseconds.

\[00:16:08.10\] So the second set of tools was honed to be very good at pinpointing the millisecond range the domain would expire. And there were only so many API requests you could send to Verisign, and that was limited by how many registrars you owned, and we didn't even own a registrar, so we could piggyback them off the API requests of a bunch of public registrars that we had developer our access to. We were competing with the likes of GoDaddy, and they owned like a hundred registrar licenses, and they're just blasting Verisign with these API requests, trying to get this domain name before we do, every single day. So we built a set of tools that were so much better at pinpointing that time window, that despite only piggybacking off one other registrar or a couple others, we were able to get almost all the valuable domain names we wanted that weren't in extreme demand. We could get the single dictionary word .coms, but we could get everything else. So we had this system running for about six months, and we created a few million dollars worth of retail value domain names. At this point I hadn't yet thought about kind of bringing all these domain names under the roof of the business; I just thought I would acquire them and maybe sell them on third party aftermarket sites.

But when it was working so well I thought, "Well, why don't I build a domain name inventory?" and that's when I built NameLayer.com, to house and sell all of these domains.

**Adam Stacoviak:** That is so crazy, man. I mean, all the thought into just the discovery of that... It's so cool when you discover gold where no one expects gold, so to speak. You look under this rock and you're like, "Holy crap, there's a bunch of money under here. How did nobody know? Let me keep digging. Let me build some technology around this and beat everybody else to the punch" and then do what you did. That's so crazy, man.

**Julian Shapiro:** Thanks. I would say one interesting thing I should add in is these domains were being registered as if they were being manually registered through a registrar, meaning I was still paying rock bottom costs for these domains, so I was paying 7-8 dollars, and then I was selling them on NameLayer.com for 3,000-9,000 dollars. So the margins were really high, but of course, unless you saw a domain name that was really appropriate for your business, you weren't gonna buy it. So overall turnover was low.

**Adam Stacoviak:** Right. So you said a million dollars roughly in retail value for domains... And how many domains? A thousand, a couple thousand? Ten thousand?

**Julian Shapiro:** I think at some point we were at 1,800.

**Jerod Santo:** Give us a timespan and help us understand the start of NameLayer until the acquisition by TechStars. Can you give us a timeline of when you started it and then when it was bought?

**Julian Shapiro:** If I remember correctly, there was a Next Web launch article for the company; I think it was dated in August 2011, and it was within two years that we sold the company to TechStars, the startup accelerator.

**Adam Stacoviak:** If listeners out there are thinking "Why do Jerod and Adam ask the back story?" if we're getting to the meat and potatoes basically, because we've gotten asked that before, right Jerod? And this is why - because you uncover these very unique, interesting stories that just need to be told, that ultimately end up in Velocity.js and some other things that you've done, which we're gonna talk about of course... But we're coming up to our first break, so let's pause here and when we come back in we might catch up to some of this tail end of the story, but ultimately we're shooting towards Velocity.js and some of the things you're doing now in open source and all that fun stuff. We'll be right back.

**Break:** \[00:19:38.06\]

**Adam Stacoviak:** \[00:20:15.25\] We're back with Julian Shapiro. We're talking about this very, very interesting way kick off life; at the age of 14 you're basically rich - just a TL;DR version of your story. Hard work of course in there, maybe a unique rock you overturned and found some gold, but ultimately this road leads to open source. This show is shining the spotlight on some interesting open source out there and the people behind that open source, and some things that caught interest of Kevin McGee, a listener of ours, and the ping mention to get you onto this show and some research here, of course. Velocity.js, animation... I'm curious why that became of an interest to you, but then ultimately another cool thing happening now is Libscore. What's the best part of your story to start at? Velocity or Libscore?

**Julian Shapiro:** I'd say the best place to start is probably Velocity, because that was built in my year off from NameLayer. So up until NameLayer I was using my engineering skills in pursuit of a business, but I wanted to get back to that 12-13 year-old phase where I was coding in the pursuit of just childlike fun, building cool stuff. I was really interested in the motion design you'd see in movies, like the visor in Tony Stark's display in his helmet. The Iron Man movies really got me interested in visualization, how much would be possible to do on the web, not just in film. So I looked into browser performance - that's really where Velocity started. I was trying to figure out how much would be possible performance-wise, given where Chrome and Firefox, Internet Explorer and Safari. So I went down in this deep dive into the minutiae of browser performance corks, CSS transforms, hardware acceleration, and looked at things like WebGL and Canvas. I decided to stick with Javascript because I decided to very consciously constrain my childlike pursuit, within the realm of something that other people could also use. I didn't wanna go very experimental, I wanted this to be something that could actually have real-world application on the average website.

I think that that structure was instilled in me from NameLayer, where it was like "Okay, if I'm gonna spend all of this time, let's do it on something that's gonna affect a bunch of people." That also actually informed the seriousness which I took marketing Velocity, getting the word out about Velocity. We'll talk more about how I built it, but after building it, I thought to myself, that was a 5-6 months stretch where I was full-time, every waking hour, Monday to Sunday, just going crazy trying to figure out how I can build a really cool animation library that would make web animation better for everyone. And to justify that time input, I felt like I had to put in 3-4 months of concerted marketing effort, just like I would have for NameLayer. I took that very seriously, because I didn't want this to be like this lost year of my life, and I felt it was reasonable to assume a lot of people could use and benefit from Velocity. So this began a 3-4 month stretch where I was using every growth-hacking trick I had learned throughout the course of NameLayer on an open source project. What's so intriguing about that is in the startup world there's a lot of friction between you having an idea and a message and getting it out there. For example, if you wanna get on TechCrunch, you're one of 4,000 cold emails being sent to TechCrunch journalists for that day, and it's hard to get a response.

\[00:23:49.23\] If you wanted me on the front page of Product Hunt, it can similarly be pretty hard because it's a highly saturated place. But with open source I realized blogs, podcasts, aggregators - they were starving for content, they were starving for interviews, they were starving for technical tutorials on how to do things. There's css-tricks.com, there's davidwalsh.name - two great sites, really good resources on CSS and Javascript, and so I hit them up. I hit up every single thing I could find and aggressively pursued proactive outreach, where I would write content upfront, and say "Hey, Chris - Chris is the guy behind CSS Tricks, of course - I wrote this blog post, you can just post it. It's already pre-written and it's written really well. It's a technical deep-dive into cool animation stuff, things your readers are gonna like." And he was like, "Oh, awesome. Sure, I'll throw this up. Do you have anything more?" So I began these relationships with Smashing Magazine, CSS Tricks and a bunch of other blogs, The Next Web and Create a Block, and just wrote tons of content.

That was the sort of content production to get the word out, but I wasn't really happy with that. I wanted to accelerate its adoption; it was kind of like an addictive process, like "How big can I get this open source project, given how little friction there is to getting the word out?" If I could basically get the word out anywhere that's willing to listen because they don't have other people pestering them, how big could this get? And that became a really fun challenge. I wasn't looking for a target of GitHub stars, I was looking for actual, real-world production usage where people were loving the project, and that feeds into why I built Libscore, which I'll touch on in a moment.

So I would do all sorts of crazy things with marketing Velocity. I would actually type in Google search queries for 'best jquery plugins' and then I'd find these little-known sites run by these SEO geniuses who would basically put together these pages with randomized lists really just for the purpose of collecting ad revenue. So I'd found the admins' contact emails and I would be like, "Okay, I'll send you $50 to your PayPal if you throw me at the top of this list", and I would do that over and over and over again. Every single thing I could do, short of like a total thousand dollars worth of budget, I did. And it was really fun... Because remember, I'm not astroturfing here, I'm not misrepresenting the quality of Velocity, I'm just getting the word out, and the true test is whether people use it and throw it into production. And they did. And it steamrolled, and it naturally went over to 10,000 GitHub stars really quickly.

**Jerod Santo:** Let's talk about ROI on those efforts, in terms of bang for your buck, or for your time, because we have a lot of listeners who have open source projects and many of them have real value and they're quality, and all these things that you had. But what they don't have is the three or four months of dedicated time to push towards marketing. That's awesome, by the way, that you did that. And I think just seeing how dedicated you were to it, to spend $50 to get a link here, a post there - what would you say... If you said, "Okay, these are the three best things I did." I know that it's a snowball and you probably didn't have any single home runs, and if you did, please do share them. What would you say is the best bang for your buck for those efforts that our listeners can actually use those as takeaways and say, "I'm gonna try that." What would you say go try?

**Julian Shapiro:** There are three things, in no particular order. First is blog posts on Smashing Magazine and David Walsh. CSS Tricks is great, but the sheer traffic I would get from Smashing Magazine in particular was incredible; sometimes 10,000 to 20,000 hits in the course of a week. That's the first.

Second is I paid really talented developer designers who were showcasing their work on codepen.io, to build demos with Velocity, showcasing what you could do now that Velocity brought very performant animation to the web, to everyday web design. And I found these amazing people who for something like, again, around $50, were willing to spend hours, days, their weekends, building these incredible demos.

\[00:28:05.03\]They honestly would have done it anyway; so we built these demos, and I get the word out on Twitter and elsewhere, and they would just take off like wildfire and they'd be stuck on the CodePen homepage for a long time, they'd get twenty, thirty, forty, fifty thousand views. And at the end of each demo I made sure that there was a really prominent plug for Velocity, saying "This is the project that is in part responsible for bringing this to you." That was really big, because that was not only distribution, but also credibility. Really talented people were using it, they loved it, and the results were impressive.

The third thing was Hacker News. Hacker News I think for a lot of startups, a lot of projects, is usually singularly the outlier; it's the 10x traffic source over everything else, and it was very much the same for me. And I think I got on there a couple times, and collectively that jump started a lot of awareness.

**Jerod Santo:** There you have it, three things to try. Now, one thing about Velocity - now I'm giving you excuses - is it's an animation library; it does demo very well, so that's another thing that you have going for you in terms of... The product putting out by these people on CodePen and so forth is...

**Adam Stacoviak:** ...visual.

**Jerod Santo:** They're visual, so it sells itself in that way, and nothing wrong with that. I think also your point about the social proof - not just the exposure, but the credibility of these people who are considered to be high-quality frontend developers or designers using it goes a long way as well.

**Adam Stacoviak:** For those that are going out there right now and checking out velocity.js, which is actually VelocityJS.org - I'm curious if that was one of your NameLayer names or not, but... Just kind of curious for those people checking it out, what's the state of the project? Is it still in development? What do you consider it at?

**Julian Shapiro:** Velocity's been at a point for a little over a year now where it's very stable, and the bugs that do surface are not in any way critical. Having said that, I intended to be better at pushing updates, but I'm really happy to announce one of my best friends and a fantastic coder - he actually runs Canada's largest developer bootcamp company - is taking over maintenance of the project in the next few weeks. He's going to address the open PRs and the address the open issues, and he is really excited to use this as an opportunity to get back into open source for the first time in a while. He's going to spearhead a really interesting direction for the project, and anything that people have been requesting, I think they'll be very impressed with what will get delivered soon.

**Jerod Santo:** That's great news. I think one of the stigmas that we have - and I'm guilty of this, for sure - if I'm in a project and if it hasn't been updated recently, even if there hasn't been a commit, I'll go look through the commit logs and I'll see, is that just a readme update or is this a real change, or a bug fix? We tend to think that anything that's not actively being developed is stale or dead, or faded, or whatever words that we have for obsolete now. But the fact is that some things are just finished, you know?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And there's a difference between "This project died because I got bored of it, or I couldn't maintain it, or I burnt out, heaven forbid", but there's also a thing like "This project achieved its goal and now it's just stable and it's just finished." It's sometimes a hard distinction to make, and one that many people probably misjudge.

That being said, in the Javascript world I don't think things are ever finished, \[laughs\] so it's great to hear that you found someone to step up and spearhead it into the future, so to speak.

**Julian Shapiro:** \[00:31:57.16\] There are a couple aspects too, actually. One is, if you look at the jQuery .animate() function, that hasn't changed much over the years. Because to your point, I wouldn't necessarily say it's complete, but it's certainly reached a spec where what you would do more than what's available isn't really evident, and you don't wanna get to a point where you're bloating it.

What's nice is that Velocity has this add-on called the UI Pack, where I do add the 'bloat'. Meaning, if you want these extra features you can throw them in and you get some really interesting UI manipulation features. That's the first thing.

The second thing is the biggest update I wanted to push wound up being done independently by Twitter. Twitter was using Velocity and they built the React plugin for Velocity. They did an incredible job, so I actually just linked to their work from the Velocity readme, and I think that's what's allowed it to keep up with the times.

**Adam Stacoviak:** A question on motivation for you, since you've mentioned the growth hacks - one that hasn't been mentioned so far yet is that there's a Velocity book that you've written. And I'm just kind of curious, with all these growth hacks and all these sites, all these page views, what was the motivation behind the book? Was it additional fame, was it to just "Hey, mom, I wanted to write a book one day. Look, I wrote a book." What was it for you?

**Julian Shapiro:** Funny enough, the Velocity book was not written as part of my efforts to get the word out. It was written because I'm Canadian, and I wanted to get a Green Card, and there is a quick path to getting a Green Card called the EB-1. To get it, you have to prove to the government somehow that you're in the top 2% of your narrowly-defined profession. Mine was web software engineering. And part of how they qualify you for that distinction is whether you've published anything significant. So I went to Pearson, who was a known publisher, and I pitched him this book, I showed them how much traffic the Velocity homepage was getting monthly. They said, "Okay, this might be interesting. Can you plug it in your documentation?", I said "Absolutely."

So I wrote this book over the course of a few months' worth of weekends as a means to get a Green Card, but it also happens to double as another form of credibility for the project. The author or the maintainer is totally dedicated to this project, enough so to write a book. And fortunately the book's been well-received, so that hasn't hurt the credibility of the project.

**Adam Stacoviak:** Jerod, I don't know about you, but I'm over here smiling ear to ear at this guy's ability to growth hack things, or just to hack things in general. To build a company he bought a domain name, resold it a week later, did it again, did it again - that whole story, and then now he's writing a book to get a Green Card.

**Jerod Santo:** I'm over here thinking, "Adam, did you know that that was why he wrote the book and that's why you asked that question?"

**Adam Stacoviak:** No, I did not.

**Jerod Santo:** Because that's like the best answer to "What's your motivation for this book?" It's like, "I wanted to get a Green Card." That was so unexpected.

**Adam Stacoviak:** Well, because he didn't mention it earlier. It wasn't in his story, so I was just thinking there's gotta be some motivation. He's clearly motivated by something, and there was no mention to the book, and it's basically one of the first things you see in the documentation, and I'm like "It's gotta be important, but why hasn't he mentioned it yet?"

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's crazy.

**Jerod Santo:** Good reason, Julian. Good reason.

**Adam Stacoviak:** Very good reason.

**Jerod Santo:** Well, we learned your motivation about why you wrote the book on Velocity. I think I'm seeing your motivation about why you did your next project, Libscore. Because you were so interested in Velocity's impact, not just GitHub stars, but actual impact to the world of the web and usage. So we're gonna talk about Libscore next. Let's take a quick break, and we'll ask Julian about Libscore on the other side.

**Break:** \[00:35:39.26\]

**Jerod Santo:** \[00:36:55.12\] Alright, we are back with Julian Shapiro, and we learned all about how he built an awesome animation library for the web, VelocityJS and then basically workhorsed it, growth hacked it, even bought attention for it, and got it to be one of the most popular repositories on GitHub - 11,000 stars to this day, over a thousand forks. But as we all know, stars doesn't actually mean all that much, it's kind of a proxy for influencer use, but it doesn't actually give us exact use. Reminding me of the recent release of GitHub's public data on BigQuery so we can see at least open source use. But the nice thing about Javascript and the web is every time you load a page, they have to send you all their Javascripts, so you can see exactly what it is that they're using.

So in comes Libscore, another project from Julian, which every month scans the top million sites on the web to determine which third party Javascript libraries are installed on each site. Julian, we can kind of put it together and find out why you'd wanna build such a tool, but it turns out you weren't the only one who wanted to build such a tool, because you had some funding for this. Stripe was involved, I think Digital Ocean was involved... Let's start with the backstory on Libscore. Give us how it came to be, and then we'll talk about what it is.

**Julian Shapiro:** Libscore came about from two things. One was after marketing NameLayer I realized how important it was to actually assess how effective your marketing is. It seems self-evident, but when it comes to open source, there was actually no way to do that. Even if you are not marketing your open source project, let's say you just get it out there on GitHub - you have no idea who's using it. If you scroll through the list of everyone who's starred it, maybe you can find in their bios they're the employee of Yahoo!, but that's not a representative metric, that's not enough. A lot of people don't star, a lot of people use npm, so in open source in general, I just had no way of figuring out how effective was my marketing. All I could track were page views on VelocityJS.org. So I knew I needed to close that feedback loop that any growth-minded entrepreneur would wanna close. That was the first thing. That was like the seed of the idea.

At some point, I heard that Stripe was having this open source grant program which hadn't been done before. It was a for-profit company saying, "We wanna sponsor interesting open source developers, working on projects that we think will have an impact, and maybe tangentially related to the work Stripe does." I got the grant, and they took me out to San Francisco.

On that grant I realized I'm actually mostly done building Velocity. It was at the point where it worked well. It wasn't encountering much bugs, and so I thought, "Well, maybe I could actually use this as an opportunity to pitch Stripe on a brand new project, something else." And I told them the story about how I marketed Velocity and how I wanted to track its usage across the web, but doing so seemed very intimidating. It didn't seem like something I could do in my room.

\[00:40:09.11\] I felt like I needed to be with a bunch of very technical people; I needed the processing power, I needed some expertise in scraping, so I took advantage of all these people around me at Stripe to put together a small team and a little bit of sponsorship to build Libscore, with the intent of scraping the top million most trafficked sites on the web, to determine which Javascript libraries those sites were using.

It turned out that part was actually very easy. At that point in time module loaders weren't very heavily used to the point where they were obscuring the footprint in the browser of which libraries were in use, so I could just sniff all the top-level variables and run a bunch of heuristics to figure out, "Is this variable random-leaked stuff, from code that was messily written? Or is this the exposé endpoint of an intentionally installed third party Javascript library?" So I would try to figure out how to do that, and then I would extract that list from the web page, and then index that across a bunch of things, put that into this big database and then make that searchable.

That was the intent, but all I knew how to do myself was that scraping portion to figure out which libraries were in use on the page. So I got together with this incredible designer named Jesse Chase. He was the creative director of Digital Ocean at the time, who built the whole UI and the graphing system. And then Jason Chen, founder of another open source project called Quill, which is a rich text editor. He built the actual backend architecture and the system that scraped the web. And collectively we built this thing that finally gave a footprint to the impact of open source projects, whereas it prior did not exist whatsoever. You didn't know who was using the project. So the outcome was not just an idea of, "Okay, great, people are using my project", but also "Oh, wow, Uber.com, WhatsApp, Twitter - these companies that I use, these sites that I go to every day are using my thing. That's really cool."

So what I saw was Libscore motivating developers who may not have had that insight into who is using their stuff to be like, "Oh wow, I really wanna make sure I continue maintaining this. I want to merge these PRs, there's a lot of people depending on this, and now I know who that is." And it provided that tangible footprint, which was pretty exciting.

**Adam Stacoviak:** Julian, you got all these people working with you got, you got this fun idea. You're a guy who can hack things together well, you went on this retreat with Stripe and pitched your idea and they said yes, basically. So what came of this for you? What did this do for you?

**Julian Shapiro:** Libscore was something I wouldn't have done had I not been paid to, because this Stripe grant was an excuse to do something where failure was a very real chance. So technically, the scaling, the scraping, processing a million web pages... It wasn't like we were scraping HTML. We were spinning up phantom instances for every single page in the top million, and processing these pages in real time. So I didn't know honestly if that was feasible, and I didn't know anyone who had done it before. So what the Stripe project or the Stripe grant ultimately did for me was giving me a lot of leeway to take risks.

Fortunately, Libscore wound up working, but it was close to not, and I don't think I would have done it... I don't think I would have been able to justify three months worth of full-time development with those risks, had Stripe not put together this program.

**Adam Stacoviak:** \[00:43:57.23\] On Libscore itself though, we have a show coming out soon called Request for Commits, and you can go to Changelog.com/RFC, you'll see the awesome new artwork, the details for the show, and ultimately a newsletter signup that you can find out about. We've recorded some shows, long story short, and I forget which show it was actually, but whenever it comes time I'll link to in the show notes... But we had a conversation on there, and I think this is what Libscore does - we have this long post on Medium that kind of describes the back story of Libscore, and basically you're talking about how much value there actually is in a GitHub star.

And the example you use in your blog post is a library writer out there, someone who's writing infrastructure, somebody who's using something that they're not really sure how they can track the usage of it. The only metric they're really given for their open source on GitHub essentially is watchers and stars. So you think to yourself, "Okay, people watch it because they're probably actively involved in it, so that's not a good metric to use." Then you think, "Well, the next best thing is obviously stars", and in that show we had a discussion about basically the value of GitHub stars. And it seems like, from your post, you can have a library out there with 25 stars, which to the library writer and the rest of the world it's like, "Oh, that's not that interesting", right Jerod? Because we have this Nightly email too that talks about things on GitHub basically based on Google BigQuery and GitHub Archive, and it's an email basically of the trends on GitHub, and it's based on stars.

So you might have a repo that's got 25 stars, seemingly not that important, or not very important, but to Libscore's usage you can search out there and find out which domains are actually using it, and your 25-star repo, it might be being used by CNN.com or the likes of big name websites, and meanwhile you're just like "Oh, my repo's only got 25 stars, it doesn't mean that much." So Libscore solves this problem for library creators. It helps them see deeper into not so much just who's using, but where it's being used and how it's being used.

**Jerod Santo:** Just to give some examples of what's popular these days - if you go to libscore.com, you can click through these as well - jQuery is still number one, at over 692,000 websites of the top million, followed by jQuery UI, then the Facebook library, it looks like a jQuery modal library, Modernizr, so on and so forth, you can go down those. You can also see the top scripts that pages include. Google Analytics, not a surprise, number one. Facebook Connect, number two. Google's Ajax APIs, number three, and so on and so forth. So lots of cool information that you can get if you're just curious about who's using what out there. But the way that most people wanna use it, especially library authors - I'm sure, Julian, the way you use it is you go in there and probably type in the word 'velocity', and it looks like... $.Velocity, is that you?

**Julian Shapiro:** Yeah.

**Jerod Santo:** Check and see... And as of May, 2016, you're at 4,994 sites, including Tumblr, you can see New York Times, Rambler, Scribd, so on and so forth.

A really cool interface as well, it's a very well made tool, and everybody should go out there, and especially if you're a library author, type in your library name and see who's using it.

**Adam Stacoviak:** I'm gonna actually put a link to those search results in the show notes, because when you hit that result page you actually get a graph... How much can you speak to about the design? I know that you mentioned that Jesse was doing the design of this. Did you have any influence into what the information was? What was your role in the actual outcome of the site?

**Julian Shapiro:** \[00:47:53.10\] So I built the initial prototype of the site. It was ugly, but it gave the gist of what I wanted. Then Jesse came in, and he had a lot of experience with information design, which I did not, so he figured out how to layout all these different entries into the data. Because you can search by domain name, by open source project, by third-party script, by variable... He figured out how to tie that all together. But the website as you see it today is fully the brainchild of Jesse Chase.

**Adam Stacoviak:** The graph there, it's pretty digestible. If you're a library author out there, if you go throw whatever it is that represents you - in the case of Velocity it's $.Velocity, and you can kind of see over a course of months what the trend is. Right now it's roughly 5,000 sites using it. They're ordered by essentially the ranks. Are you able to do anything differently than that? Like, actually dig a little further and search things, and stuff like that? Does this still have legs, is it going somewhere?

**Julian Shapiro:** Right now the project is maintained by Jason Chen, and he's working on some interesting updates... I will have to let him speak more to that, but yes, there will be more coming soon.

**Adam Stacoviak:** Cool, okay.

**Jerod Santo:** Let's get back to you, Julian, what you're up to these days. One thing you mentioned in our email as we were preparing for this show was that you're not really doing too much software engineering these days, but you're doing startup work. Can you share with us and the audience what you're up to and what you find interesting nowadays?

**Julian Shapiro:** Sure. My experimental year of coding, as I've spoken about, took me down an interesting path, that lead to Velocity and Stripe and Libscore. I didn't expect any of those things to happen. So I've chosen for the second time only to take another year off, and dedicate this to writing instead of coding.

I'm curious to see where writing takes me, and one thing that I've honed in on is teaching people how to easily do things that they mistakenly consider to be hard. So whether it's learning Chinese in a very short amount of time, or even gaining a lot of muscle in just a couple months - I wanna dive into what the research actually says is the quickest, most efficient way to do something, and then self-experiment until I can put together a guide that will actually compel others to learn alongside me. So that's what Julian.com is about to be. It's gonna be a place to learn really hard things, easily.

**Adam Stacoviak:** Give me an example of something hard.

**Julian Shapiro:** So if you look at bodybuilding, which is an interesting topic because everyone to some extent has tried weight lifting, going to the gym, getting fit. And when you look at the actual research, meaning when you read through the sports nutrition publication, the academia of muscle hypertrophy, you see that most of the common advice for weight lifting is misleading or wrong. And if you distill all the research, if you read through a thousand pages of this stuff, there's actually a rubric you can follow to build a year's worth of muscle, or two years' worth of muscle in about three months. So I followed my own rubric, proved that to be true; experimented with a couple friends, proved it again to be reproducible, and now I'm formalizing that into something anyone can follow.

That's one example. That's something that is fortunately very much rooted in scientific publications. Something like learning Chinese is a little more abstract, but I feel like I can uncover the same set of building blocks to do that - which many people consider hard - quickly, as well.

**Adam Stacoviak:** Jerod, I don't know about you, but I feel like this show in particular is a definite mix of founder's talk and the Changelog, because here's Julian, 14 years old, decides to buy a domain name. Stumbles into this unique hack that basically has been the trajectory of his life. Builds open source, gets open source grants, builds awesome stuff... Hacker entrepreneur to the core, and now he is solving hard problems. I would never expect you, Julian, to say that that's what you're doing now. Not that it doesn't fit, but just that you're such a diverse and dynamic person that you've done the things, you've written the book, you've gotten the Green Card, so to speak, from writing a book...

**Jerod Santo:** \[00:52:14.22\] Did he get the Green Card?

**Adam Stacoviak:** Yeah, did you get the Green Card?

**Julian Shapiro:** I did.

**Jerod Santo:** Okay, good. \[laughter\]

**Adam Stacoviak:** I mean, you wrote the book... we gotta get you the card. That's just awesome... And now this. I mean, anybody listening to this show typically is like coming to this show because of the interesting things happening in open source, and it's not saying that that's not what this show is about - it's just such a rounded show, that has so many different facets, that is not just rooted in software.

**Jerod Santo:** Amen.

**Adam Stacoviak:** Amen. So Julian, we have a couple of closing question we ask our guests, and we figured we'd throw a couple at you. Do you recall the questions we asked in our opening email to invite you into this show?

**Julian Shapiro:** I don't.

**Adam Stacoviak:** Well, let me spring one on you just in case, and if it's from left field, you just tell us, and we've got a couple more questions for you... But everybody has a hero. Everybody has an influencer, somebody that was the pivotal person to give them cheer when they needed cheer, or to be there, just to be their rock. I'm just curious who that person might be for you. Typically we rephrase it as like your programming hero, but because you're so dynamic and you're so diverse, I'm curious to just know who is your influencer, who's your hero?

**Julian Shapiro:** This is probably a common answer, but definitely my parents, and in particular my dad as it pertains to career choices. As a kid, I felt my dad was basically Superman. He knew the answers to all the questions I had, he was doing things that looked really cool, and he was and he is a serial entrepreneur. And I can only imagine that's how that got instilled into me, because I don't see what other organic force would have introduced entrepreneurship into my life, especially I had the bug so young. So I assume it's because I looked up to my dad. So that will be my answer.

**Adam Stacoviak:** In all honesty, that's not a very common answer, and I'm always surprised by it, because it's a shame, in my opinion, in this age, that parents aren't the ultimate influencers in someone's life. And that's awesome that's your story.

**Jerod Santo:** For our next closing question, we like to find out what else people like doing. So if you weren't doing what you're doing - and this is tough, Julian, because you are taking a year off to do what you wanna do, which is right at this point, but if you had a completely different path, different trajectory, different career or different life and you weren't doing what you're doing now, what would it be and why?

**Julian Shapiro:** I'd be a filmmaker, and I think the most realistic approach into it would be a documentary filmmaker. I saw a movie called Searching For Sugar Man, which blew me away, and Man On Wire - two documentaries where they kind of transcended the National Geographic format and became narratives, plus exposes. Really fascinating. And I want to produce things like that. I imagine I'll get to that in the next couple of years, although nowhere near that level.

**Adam Stacoviak:** Well, we've never met anybody who comes on this show and closes with saying they wanna be a filmmaker. That is a first for us. But given that fact, I mean, we all have such diverse talents; we're not ever put into a box. Sometimes software developers start out as gamers, sometimes gamers start our as software developers, and that's the beauty of the world we live in now. There's just so much opportunity out there that when you get bored with what you're doing, change. Don't ever feel like you're stuck. And I feel like at the young age of 14 you learned a lesson that some never learn their whole lives. I could be wrong on that, but that's my takeaway from hearing your story.

\[00:55:55.07\] Julian, it's definitely been a pleasure to learn about where you came from, and obviously share so much interesting things with the Changelog community who listens to this show. Jerod, that question early about actionable things to hack and get your open source out there, I love that question, so I'm really glad that Julian was able to share some interesting takeaways and some actionable things there for that. Is there anything else you wanna share with the audience before we tail out the show?

**Julian Shapiro:** I got nothing. Thanks for listening and thanks for the chance to be on.

**Adam Stacoviak:** Awesome. Well listeners, thank you so much for tuning in. Obviously, we love that you listen to this show and we thank you so much for that. We do have a couple things we also would love for you to subscribe to, if you don't subscribe. We have an email once a week called Changelog Weekly - go to changelog.com/weekly. It's Jerod and I's editorialized take on what's fresh and new in open source. We love covering that email every single week, and we also have a nightly one too, called Changelog Nightly. Go to Changelog.com/nightly. Subscribe to those, smile real big, and fellas, that's it for this show, so let's say goodbye.

**Jerod Santo:** Goodbye. Thanks for coming on, Julian.

**Julian Shapiro:** Thanks for having me, guys.
