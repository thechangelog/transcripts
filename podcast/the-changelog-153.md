**Adam Stacoviak:** Alright everybody, we're back. We've got Daniel Stenberg on the line. 17 years of curl, and more; we'll talk about more. Jerod, you're on the call... What's going on, man?

**Jerod Santo:** Hey, man. How are we doing?

**Adam Stacoviak:** We are excellent. Daniel, how are you, man? It's good to have you on the call.

**Daniel Stenberg:** I'm good. It's a bit late here, but I'm relaxed, sitting here, leaning back in my sofa, in my living room.

**Adam Stacoviak:** There you go. So you're in Stockholm, or not too far from Stockholm, Sweden, right?

**Daniel Stenberg:** Right. Just outside of Stockholm.

**Adam Stacoviak:** What time is it there then?

**Daniel Stenberg:** It's 10 PM.

**Adam Stacoviak:** It's 3 PM here... That's not bad. Small difference, seven hours.

**Daniel Stenberg:** Yeah.

**Adam Stacoviak:** So Daniel, not too long back you posted this awesome post, "17 years of curl." And for those who are catching up, if you haven't used curl before, maybe you haven't been on the command line enough... But this is a big deal; this is 17 years of a tried and true tool that's been a part of Linux forever... And you've got this whole issue that we thought would be really enjoyable to go down. But before we kick that off, maybe introduce yourself to the audience, those who may not know who you are, where you work out, what you do, what some of your flavors are, and we'll go from there.

**Daniel Stenberg:** Sure. I'm Daniel, I'm in Sweden, I've been working on curl and with curl for a very long time (17 years), and I basically started when I wasn't really aware of any alternatives, so I started writing out my own tool... And of course, it was a small thing back then, and I only did a few \[unintelligible 00:04:09.29\] and a few things, and then it just moved on from there. Since then, I've been -- it's been a fun project, I've been working on it, and it expanded and it expanded, and it got more users over time, of course.

\[00:04:25.26\] It was just a little project, and there have been a few core contributors over the years that have kind of stuck with the project and been around for a long time... But it has remained a fairly small project, developer-wise and so on. So it's low-key, no big -- it's not much of a bureaucracy or big processes or anything. We're just hacking around and improving the stuff that we like.

That's what I've been doing on curl for a very long time, and I've been working here in Stockholm, Sweden as a consultant and doing embedded programming, basically, through my career, mostly... And just a couple of years ago, actually more like a year ago, I was looking around for a new gig here in Stockholm, and then I was offered a job for Mozilla. So right now I'm employed by Mozilla, and I work on Firefox and networking stuff during day.

**Adam Stacoviak:** So when Ilya Grigorik was on the show - Iliya works at Google, and he works... Where does he work at? Does he work on Chrome directly, Jerod? Is that what Ilya works on?

**Jerod Santo:** He's an internet plumber.

**Adam Stacoviak:** Right, that's what I was getting at.

**Jerod Santo:** Yeah. His job is to make the internet faster. I'm not sure if that's just on Chrome, or what else at all it entails, but...

**Adam Stacoviak:** Sure. Would you say that's a fair assumption of what you might call yourself as well, Daniel, internet plumber?

**Daniel Stenberg:** Maybe... \[laughter\] I would rather call myself a network hacker, or whatever...

**Jerod Santo:** Yeah, that does sound cooler...

**Daniel Stenberg:** ...because I work on network stacks. I work on the Firefox networking stack and I work on curl, mostly. I work on a bunch of other projects too, but those are my two primary projects I work on.

**Adam Stacoviak:** This kind of takes us back to 1998. Now, I have to admit something - this will share my age a bit, but I graduated in 1997, and you released curl the spring of 1998... So I was about 18, barely 18. How old were you then, and take us back to the spring of 1998 if you can.

**Daniel Stenberg:** Yeah, in the spring of 1998 I released curl, and I then renamed the former project that I was working on, and called it curl. Because the project I had been working on before that - originally I called it httpget. And I started that in 1996. And then I added support for FTP as well, and then it supported both HTTP and FTP, and it kind of became odd to call it httpget when it also could speak FTP, so I renamed the project to urlget. And then after a while I added support for uploads as well, so it wasn't a "get" anymore only. It wasn't only get, so urlget turned out to be a...

**Adam Stacoviak:** A bad name.

**Daniel Stenberg:** Yeah, that too. So then I renamed it again, a third time, and I called it curl, in 1998.

**Adam Stacoviak:** So since 1998 it's been curl ever since.

**Daniel Stenberg:** Yes.

**Adam Stacoviak:** There you go.

**Jerod Santo:** \[00:07:47.08\] So I first got into computers around 2000, and I first got into Linux and the command line 2002-2003. And curl was one of those tools for me personally -- you know when certain things predate you? It's almost like they always existed... You know, something like the core utils; you're not even thinking about who wrote ls, and who wrote cd... And I'm sure there's people who know exactly who wrote those things, so... Of course, you can man ls and find out. But your program, curl, is so ubiquitous, and was even back when I got started, that I didn't realize for a very long time that it was not just part of a standard Linux stack. When you were writing it, when it was called httpget, and urlget, did you have any clue that it would be deployed so broadly?

**Daniel Stenberg:** No, of course not. It was just a small project. I did it for my own site originally, and then I also found out that there were some other guys who also enjoyed it and wanted some features... But there is no point in time when you suddenly realize that it's just a constant evolution. So it's just one of these days when I looked around and I just suddenly noticed, "Oh, it's getting used all over." So no, I never intended it. It just became like that.

Of course, I think I did a lot of -- looking back, I think I did a lot of correct decisions, and perhaps I was also kind of right in time... So it was the right thing at the right time, and so on, but it wasn't really on purpose. It just happened.

**Jerod Santo:** What were some of those right decisions?

**Daniel Stenberg:** Well, I would say that the whole HTTP and internet and the web was kind of on the rise at that time, so it made sense to come at that point with a good HTTP/2 that could help -- with a 2 that is more low-level HTTP stuff than for example wget, which is more getting stuff, and curl is a tool to do more weird things with HTTP.

**Jerod Santo:** Is wget like your nemesis?

**Daniel Stenberg:** Yeah, at least \[unintelligible 00:10:11.10\] \[laughter\] I like to give that impression at least...

**Jerod Santo:** It's more fun to think of it that way, right? Even for me, it's fun to think that the curl person and the wget people can't get along...

**Daniel Stenberg:** Yeah, exactly. I kind of like that image, too.

**Jerod Santo:** Nice.

**Daniel Stenberg:** And I also think one of the best decisions I did early 2001, when we created the library, the libcurl, which is the core of curl, which then is a way for programs to get to curl abilities, programming-wise...

**Jerod Santo:** Yeah, so it started off just as a command line tool, and then you said "Well, let's make the core of it a C library." And then the command line tool will use libcurl, and then other people can use libcurl, and that was a huge thing.

**Daniel Stenberg:** Exactly.

**Jerod Santo:** What were some programs or some languages that integrated libcurl throughout the years?

**Daniel Stenberg:** Early on -- PHP is really one of the first ones... And I think that helped us to get really far... Because PHP adopted Curl as the default way to do HTTP really early, so it got some widespread adoption early on... I think that was one of the big ones; it got me really excited when I realized that they wanted to do that. And from that point on, it just kind of spread really wide.

I don't remember exactly now in which order everything, but over the years, of course, more and more programs and more and more programs have adopted to use libcurl for the transfer parts... And I would say that today libcurl is the bigger part of the curl project, because curl the command line tool is more like Linux users or command line people, and the number of those are much more limited than the number of programs or projects that would use libcurl.

**Jerod Santo:** \[00:12:22.25\] So it started off HTTP-focused, and it's still known for that today, but if you go to the homepage, you find out how many protocols this thing supports. It's kind of mind-numbing. Dict, which I don't even know what that is, File Protocol, FTP, FTPS, Gopher, HTTP, HTTPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMTP... Should I keep going?

**Adam Stacoviak:** Keep going, I like it.

**Jerod Santo:** TELNET, TFTP...

**Adam Stacoviak:** Go, go, go.

**Jerod Santo:** SSL certificate, HTTP POST, PUT, FTP Uploading, HTTP form-based upload, proxies, HTTP/2...

**Adam Stacoviak:** There's more.

**Jerod Santo:** Ooh, HTTP/2... Cookies, user + password authentication... Man, I'm not done yet. I'm gonna stop. This shows what productivity can do over a sustained 17-year time span.

**Daniel Stenberg:** Exactly. Nobody thought--

**Jerod Santo:** Nobody thought you'd just be building all of these things in. Is all the stuff in libcurl?

**Daniel Stenberg:** Yeah.

**Jerod Santo:** Yeah. What was the growth of these protocols? Was it just kind of organic, over time, and based on people requesting them, or people submitting them themselves? How did all this come into it?

**Daniel Stenberg:** Most of the features are just kind of creeping in over time. People contribute different patches, and have ideas, and I wanted to do things by myself, of course... So it is mostly organic. We're adding things all the time, and people are contributing things. And then of course, I've had a couple of friendly companies over the years that have actually paid me to spend more work time, more focus time on developing curl.

For example, I did the SCP pretty much paid sponsorships... And I did a bunch of the others -- I did the POP3, IMAP, SMTP support also with the help of companies paying my time to implement those.

**Adam Stacoviak:** Yeah. Well, that's something you hear about a lot in open source these days, especially as a project goes from "Oh, that's nice" to wide adoption. And to the degree that curl has been widely adopted, you would imagine that at some point along the way you were able to at least financially benefit from the time you put into it. Not so much to get rich off of making curl, but just so you're not totally giving your time to get nothing back in terms of finances for you and your family, or whatever.

**Daniel Stenberg:** Right. And especially when adding new stuff, that is the easier part to get financing for, since the companies want to do things with curl, and they can easily find room to pay me to do something that it doesn't do already, and that they want in their product, or whatever.

**Adam Stacoviak:** How do you make the decision to put something in there? Let's say Jerod and I wanted to pay to put something in there that was obscure, just for us... Do you say yes because you're getting pay, or do you say no...?

**Daniel Stenberg:** No...

**Adam Stacoviak:** What defines the line there for you?

**Daniel Stenberg:** I've kind of been fortunate that I haven't been -- I've been able to pick my paid projects; I pretty much cherry-picked them, and I have only picked those that have matched what I think is fine for the project... I've never agreed to merge anything into the main line that I think isn't in line with what the project should do. I've only accepted features and I've only done things to curl that I think are fine for curl as a project, and whatever the companies that pay me think. So if I've done things that I don't think fits main line, I haven't merged it to main line. I've just done it for some company and allowed them to keep it outside of everything.

**Jerod Santo:** \[00:16:22.09\] You've also had a whole lot of contributors over the years. It looks like on your Thanks page there's a massive 1,265 people that have provided code feedback, advice etc. over the years.

**Daniel Stenberg:** Yeah.

**Jerod Santo:** That's an astounding number, right?

**Daniel Stenberg:** Yeah, it's a totally insane number... But it's also a result of me keeping very close track of contributors. I'm trying to -- I mean, it's open source, and the only way I can "pay" people is by thanking them and showing gratitude... And clearly marking and saying thanks, and "This (whatever) was done by (whoever)". I'm trying to make a really good effort to make sure that I mark everything as "Reported by" or "Contributed by" or "Written by". Over the years, of course, I've collected a lot of names from people who have \[unintelligible 00:17:16.23\] all sorts of things.

**Jerod Santo:** Yeah, I was noticing in a comment on your blog somebody was actually impressed that they found their name in the Thank You list, even though they'd only submitted a single bug once... And looked at that as a very minor contribution, and yet you documented that and you added them to your list, and here they are, appreciative of that fact, and felt like part of the project, even if just a little, all these years later.

**Daniel Stenberg:** Right. And I try to do that. I still try to do that. Of course, if someone submits a bug report, that person's name will end up in the Thanks list, and of course, that might be a bit weird then if I also add someone who contributed a very large piece of code, or whatever... But on the other hand, it becomes a really hard thing to draw the line; who am I to say who helped and who hasn't helped? Everyone who contributes anything, they actually help the project, so I try to just keep the names and say thanks.

**Jerod Santo:** And you've seen the adoption -- we'll probably talk a little bit more about adoption later, but just thinking about all the work that's gone into it, all the people that have contributed... Of course, yourself, if you go to the GitHub, you have thousands and thousands of commits over the years, and I'm not even sure if that backports all the previous history before you switched to Git... And yet, you see curl being used on the NASDAQ tower, as you posted to your website as well, which is a nice screen grab on some sort of dump on the NASDAQ screen up there of a curl command going out, which I'm sure they weren't hoping that would go public, but...

**Daniel Stenberg:** I'm not sure what that is, actually...

**Jerod Santo:** Yeah, it's like, they just printed the source of a script they're running? I'm not sure what that is either... We'll link that up in the show notes.

**Daniel Stenberg:** I actually think it's an ad for that company.

**Jerod Santo:** Oh, really? That's interesting... So they're showing how hacker they are, or what?

**Daniel Stenberg:** Yeah, it's an API--

**Adam Stacoviak:** It's a post back to apiallthethings.com, with a flag of d, and getting a free shirt at Apigee...

**Jerod Santo:** Oh... Nice.

**Adam Stacoviak:** So that's Apigee advertising right there...

**Jerod Santo:** See, I didn't zoom in. I just looked at it from far away and thought "You know when people accidentally blue-screen in public? That was one of those..."

**Daniel Stenberg:** Yeah... So it might be on purpose. I just got that -- I just saw the picture and thought that it was fun. I can't explain--

**Adam Stacoviak:** That is awesome. It's a cool ad though. Side bar on that, but way to target your audience... No one gets that except from someone who understands curl.

**Jerod Santo:** Right. Yeah, it's actually a good ad. I thought it was the NASDAQ people messing up, but... Interesting. Well, still cool to see your command line program blasted up on some big board somewhere...

**Daniel Stenberg:** Yeah, it is.

**Jerod Santo:** \[00:20:04.20\] ...which makes me think of all of the -- we can go through the list of companies and projects that have used curl as part of their product, and all the people that have benefitted over the years from your work... And it makes me think "How much work do you actually have into this thing?" 17 years, you've got all these contributors, so obviously you're not the only one committing code... But if you had to think back and say "Well, how many man hours do I have in curl?" Whether it be coding, or maintaining the mailing list, or talking to people about bugs and troubleshooting, could you even estimate that, how many man hours do you think you have into it?

**Daniel Stenberg:** Yeah, I can do a rough estimate...

**Jerod Santo:** Okay, let's hear it.

**Daniel Stenberg:** I would say that over the years I've spent almost every day about two hours on curl.

**Jerod Santo:** Wow.

**Daniel Stenberg:** So that makes it around 15 hours a week, for about 17 years.

**Jerod Santo:** Wow. So 15 x 52, and 17 roughly... 13,260.

**Daniel Stenberg:** Something like that.

**Jerod Santo:** Somewhere around there; maybe you take a vacation -- you know, hopefully you take a vacation...

**Daniel Stenberg:** Yeah, sometimes I take vacations, of course, but I've also done periods with more intense development.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** That's just the average. 13,260 hours, just based on the estimation.

**Jerod Santo:** So what keeps you going? There's gotta be something. We struggle with burnout, and we talk about burnout with many people, especially when their project gets to become more successful than they ever planned, and it just becomes too much... How do you sustain it for 17 years? What drives that?

**Daniel Stenberg:** I actually have a hard time to really explain that... I know a lot of people who get into the projects and work on them for a while and then drop out after a while... And of course, I have a lot of other projects that I've worked on and I haven't kept going on those. So I think that has just become sort of my baby. I just really like where it's gone, and I'd like to see it go further, and I'd like to see it become better, and I wanna fix the problems that I get reported, and so on. It just feels like this is kind of the hobby of my life; I'm stuck with this.

**Adam Stacoviak:** It's your legacy.

**Daniel Stenberg:** I really enjoy it.

**Jerod Santo:** Do you still enjoy it today like you did back when it was first getting going?

**Daniel Stenberg:** Oh yeah, I do. I enjoy working on it every day. And actually, without mentioning details, now for example, just today I've finished a conversation, so I'm gonna do full-time curl development now for probably a couple of months going forward...

**Jerod Santo:** Really?

**Daniel Stenberg:** Yeah, and I'm just thrilled about that.

**Adam Stacoviak:** It's interesting.

**Jerod Santo:** Well, congrats on that. That's awesome.

**Adam Stacoviak:** So what does full-time curl look like? What's on your list of things to get done, or to do? Is it a list of bugs that have been driving you crazy, or is it new features? What is it?

**Daniel Stenberg:** Right now it's mostly about getting all my remaining HTTP/2 stuff done for curl.

**Adam Stacoviak:** Nice.

**Daniel Stenberg:** Since HTTP/2 is new and hot and everything, I've implemented HTTP/2 support in curl, and it's there, but it's not completed and it's not really there API-wise and libcurl-wise the way I want it to be, and the way I think a lot of users want it to be.

**Jerod Santo:** Man, just thinking about maintaining a project of this size... Looking at contributors - I'm letting GitHub crunch their data - it looks like you have 481,000 lines added, 302,000 lines removed. What's the overall size of the codebase now, roughly?

**Daniel Stenberg:** It's not that terribly big. I think we're around 200k lines of code in the actual project, and there's a lot of tests and infrastructure around it, but the code in the actual tool and the library - it isn't that big a project.

**Jerod Santo:** \[00:24:17.27\] So it doesn't feel unwieldy. It seems like projects, as they grow, especially with how many protocols you support - over the years, it seems like things tend to get unwieldy. Maybe the big rewrite starts becoming a thought... Have you ever had those kind of issues, where you hit a wall and think about a rewrite, or a different language? And nowadays, is it pretty easy to maintain and to add to?

**Daniel Stenberg:** Well, of course, there have been some obstacles and points in time when I kind of ripped out a lot of junk and redone things internally, but I would say that I've never considered to change language. And of course, that's me being old and grumpy and coding C... But I also think that a big explanation for curl's success is that it's massively portable. It builds and runs on just everything. That also helps everyone to use it on anything. And I don't mean just Linux and Windows and Mac or whatever, but every imaginable \[unintelligible 00:25:21.29\] gaming systems, or embedded systems - everything. I kind of like that, and that's also why I've never considered to change the programming language.

And when it comes to things like architectural decisions and how I made things work internally - we've actually been able to change that to a pretty large degree internally over the years, without any significant rewrites, just ordinary development and just changing things over time.

**Adam Stacoviak:** Let's go a little meta here real quick, because I'm noticing that you actually have a link to a changelog on the site for curl... What has it been like, I guess, maintaining such a drastically long changelog? It would take me 25-30 scrolls to scroll this entire changelog... And I guess is this manual? Since it's such a labor of love anyways, and such a legacy project for you, meaning in terms of how important it is to this hobby of your whole life... What is it like to maintain such a long changelog?

**Daniel Stenberg:** Well, I'd say that is part of what -- you sometimes forget what maintaining a project is... That is everything that isn't code, like the website, and just putting things up and maintaining the changelog, or maintaining things like security advisories, or whatever... Just making sure that the documentation looks good on the website, or whatever...

In terms of the specifics around the changelog, I do that -- not manually; I have a lot of scripts. But I basically add the chunk for every new release at the time of every new release.

I did a release this Wednesday, and then I added the 7.42.0 details, and I inserted it this Wednesday. I'm gonna do another release this coming Wednesday, and then I'm gonna add the blurb for the next release. It's all about that. And then I have a lot of scripts gathering that information and webifying it.

**Jerod Santo:** You also have a pretty epic man page... \[laughter\]

**Daniel Stenberg:** Yes, exactly. It's actually kind of insane. That's one of our problems, that we've added so much features and so much things that it gets hard to find your way around. It's hard to write documentation when you have so much functionality.

**Jerod Santo:** \[00:28:05.03\] What about modularizing, taking libcurl and breaking it up into smaller bits, that maybe are protocol-specific, or some other arrangement that makes sense, and then having a wrapper library that kind of pulls those all in. Have you considered architectural things like that?

**Daniel Stenberg:** I have, but I've never really found the motivation to really go there. I've tried to ask my audience or users what they think and what they want from the library in terms of protocols and everything, and it turns out that a lot of users use a lot of protocols. So it's not only that we're supporting all those protocols just in vein, but there seems to be a lot of users using a lot of these protocols. So I'm not sure that it is a benefit for the project or the design to split it up either. Also, a lot of other protocols are using shared code, so it's not -- each single protocol isn't really that separated from the rest of them.

**Jerod Santo:** Gotcha. This makes me think of another question, which is "How do you talk to your users?" You have (I think you even said) a billion users, and probably you don't even know all your users, especially when it's embedded in systems, and whatnot... What's your tools and your communication channel between you and your users?

**Daniel Stenberg:** Yeah, it's really crappy... \[laughter\]

**Adam Stacoviak:** "It's not good at all..."

**Jerod Santo:** Tell us how you really feel... \[laughter\]

**Daniel Stenberg:** No, but the usual kind of open source problem - I release source code, and then it goes out in the world, but it gets to code, and builds it, and builds the product and runs with it. And I have no idea who will do it and what they'll do with it, and if they're happy or not. Maybe they'll never come back and ask me anything or say anything and I wouldn't know about them. Actually, I have that list on the website, companies that I know about that use curl or libcurl in commercial projects, and I would say that the majority of all those companies - I've found that out by myself, just by googling, or... I have a friend that found a screenshot somewhere and emailed me a picture, or whatever. So it's not that users tell me about it... So I don't really have a good channel to talk with most of my users. The ones I talk to, they are the ones who are on the mailing list. Or those who ask me questions, or those who come to me and have questions to the project.

**Jerod Santo:** Yeah. So it's kind of the squeaky wheel gets the oil type of a thing.

**Daniel Stenberg:** Yeah. And of course, that's a subset of the users, and probably a particular subset that aren't at all representative of the kind of \[unintelligible 00:31:00.25\]

**Jerod Santo:** Yeah, that's the hard part... It's like, is this request serving my users, or just this one particular loud user?

**Daniel Stenberg:** Exactly, yeah.

**Jerod Santo:** That's a thing you've gotta ask yourself.

**Daniel Stenberg:** Yeah. I just have to always try to sense that somehow, and get a feel for "Is this a good idea for the project, or just for this user?" or whatever. But often, it all comes down to who's willing to do the work anyway. So if there's someone who brings code and thinks it's a good idea and it seems to match with the project conceptually, and design-wise, then sure, why not? Then it doesn't really matter if it's that user alone or an entire world, as long as it seems fine with the project.

**Adam Stacoviak:** Let's take a pause here. We'll do a quick sponsored break. When we come back, considering the fact that you've been in the game so long with this project, we've gotta imagine that you've been through several different version control systems, so we wanna talk deeply about your love/hate for version control systems over the years. So let's break real quick, and we'll come back and talk about that.

**Break:** \[00:32:10.08\]

**Adam Stacoviak:** Alright Daniel, we're back. Like I said before the break, 17 years at this, you must have been through pretty much every one, and now you're on GitHub, so you're obviously using Git now... And you been using Git for a while; I think about a year now... Is that right, since you've been on GitHub?

**Daniel Stenberg:** No, it's like four years, or three years, or whatever.

**Adam Stacoviak:** Oh. Where have I been at...? Four years on GitHub?

**Daniel Stenberg:** Yeah, I think so. I don't remember exactly. We've been through a couple of different version control systems, and we've actually switched to Git pretty late, actually... We stayed with CVS for forever... But that also goes back to the fact that we're a small project and we're doing things very simply; we have a linear development, just a single branch all the time.

**Adam Stacoviak:** Right.

**Daniel Stenberg:** So we don't have a lot of requirements on the version control system either. It worked pretty good with CVS, too. I mean, Git is way better and way more fancy, and I really like it; so it's not that I regret it, but that's also an explanation why we couldn't stick with the old for so long.

**Jerod Santo:** You started even back on RCS, which predated CVS, and then you switched from CVS straight to Git. So you seem to have skipped a Subversion time, which a lot of people went CVS, Subversion, Git. You must have liked CVS okay... Speak to the migration process, and if you've been able to maintain your commit history over time, or if you just said "Screw it, we're just gonna switch." What was the migration between these different systems like?

**Daniel Stenberg:** I could mention that I joined the Subversion project immediately when it started, and I was part of the core contributor team in the Subversion project for a couple of years... So I have a bunch of commits in that project, too. So I was kind of eager to see a good replacement to CVS back in those days...

**Jerod Santo:** But you never got curl onto it, huh?

**Daniel Stenberg:** No, I didn't, pretty much for those reasons - I mentioned that it worked out pretty good the way it did, so I've never... And then came those distributed version control systems -- I mean, after a couple of years, after Subversion was going... And then I kind of noticed that the distributed approach really seemed to be the way to go. So I kind of just waited out a little bit more and then switched to Git.

And then I converted the entire CVS history I had to Git. That was fairly easy too, also because we had that simple approach to development, mostly in a single branch.

**Jerod Santo:** Yeah. When I load up your guys' contribution history on GitHub, your 11,347 commits - that's probably going all the way back to the beginning, right?

**Daniel Stenberg:** \[00:36:21.26\] To the beginning of CVS.

**Jerod Santo:** Okay.

**Daniel Stenberg:** Or actually I believe it might even be the beginning of SourceForge, because we created the SourceForge project page in late 1999... I actually don't remember exactly why, but I don't have the commits before -- I believe it's August 1999, or something like that. So those are the first commits I still have... Which is a bit unfortunate, because I would really want the even older ones, but... Yeah.

**Jerod Santo:** Are you happy with Git? And I was wondering if you had -- one thing we've noticed, especially with Rails specifically, when it switched to Git and GitHub, there was a massive influx of contributors at that time. It looks like you have 202 code contributors over the years... I'm curious if in the last -- I guess it's been four years now, if it's been more than it was in the CVS days, or if it's kind of been the same...?

**Daniel Stenberg:** I think we're gradually increasing all the time. But also Git, especially in comparison to CVS, it keeps track of authors much better. It's also kind of a lie, because when we did it in CVS days, you had to basically write it in the commit comments that you got this patch from whoever... But with Git, it keeps perfect track of who's writing it. So I think it's both - it's easier to keep track who's providing it, and it's easier for users to contribute using Git. And I would say that it gets even easier when doing it GitHub-style... I mean, with pull requests and even more automated systems.

**Jerod Santo:** Yeah. And yet, on your GitHub issues you've got 10 open issues, 36 closed... Do you have a different bug tracker, or is your code just incredibly awesome? Bug-free.

**Daniel Stenberg:** No, we had a different -- we used the SourceForge bug tracker, and we used that all the way since 1999, actually... And we've only just very recently decided to stop using that. So we have like 1,400-1,500 bugs there. But since we're kind of so much in Git--

**Jerod Santo:** Okay, that sounds more like it.

**Daniel Stenberg:** Yeah. But since we switched to GitHub so much now, it's easier to also handle issues on GitHub. Issues, pull requests and the code on GitHub. Also, the bug tracker on SourceForge isn't that good either, so...

**Adam Stacoviak:** I was gonna say, having GitHub, in comparison to SourceForge from back in the day - it's gotta give you at least... And you talked before about how you talk to your users... It's gotta give you at least a better window than you've had before.

**Daniel Stenberg:** Yes. And also, when you've been around, you can kind of feel it, too. SourceForge was really the big thing back in the day, but of course, it has kind of gradually faded away somehow... And GitHub is now really where everyone is, and where things are happening. So of course, it's much better to be on GitHub in comparison to SourceForge, because nowadays everyone has a GitHub account and has presence on GitHub, and not on SourceForge. So it's also kind of a matter of the least resistance. People are already there, so it's easier for people to contribute when we allow everything on GitHub.

**Adam Stacoviak:** \[00:39:57.15\] This may be an insignificant thing to most people, but I like to have a little fun on projects like yours on GitHub, and I like to go through the page history, and I tried to hack the URL to figure out how far back I can go... And I was able to take us back 554 pages of commit history.

**Daniel Stenberg:** \[laughs\] Yeah.

**Adam Stacoviak:** So I don't know what the commit count is per page - maybe like 30-40... 25 potentially... I don't know if it's time-based or not, like how many commits go on each page, but... 554 pages of commit history you have. That's crazy, man...

**Daniel Stenberg:** Yeah, that is a lot.

**Adam Stacoviak:** The initial commit message was "Initial revision." \[laughter\] December 9th, 1999. And the next one after that was "Remove junk files." So...

**Jerod Santo:** I'm glad you got rid of those junk files...

**Adam Stacoviak:** Yeah. Almost immediately, you know?

**Daniel Stenberg:** Yeah... That was kind of an import into CVS, and I guess I imported a lot of junk then, so I had to remove a lot of junk.

**Jerod Santo:** So version control has changed over the years... Another thing that's changed, it seems, in the curl project is your guys' license. Can you take us through the different license variations and maybe some of the reasons for the transitions away from and to other licenses?

**Daniel Stenberg:** Yeah, we've transitioned through a lot of licenses. We've started out GPL back from the start, I believe. I don't think I've paid a lot of attention to licenses then; I basically just picked one that I thought a lot of others used, or -- I don't remember exactly what kind of process I had when I picked a license. But anyway, after a couple of years I kind of felt that I'm not really a GPL guy; I'm not convinced that the copyleft idea is a good idea in general, especially not for libraries... And I also got some pressure from users who were kind of saying that were contemplating to user curl in their products, but they couldn't do this because of the GPL, and they wanted a more liberal license.

After a couple of years I realized that it might not really be the guy I am, so I changed licenses. Then we picked the Mozilla Public License (MLP), because I thought that was kind of a middle ground. It's not really copyleft, but it's copyleft for the specific files that are included in the project. So it would mean that if you change actual files, you have to provide the source code for those. And I thought it was more in line with what I think is reasonable.

But it didn't go very far or long until I realized that it wasn't a good choice either, because MPL isn't even considered GPL-compliant, so then suddenly I got the reverse problem, that people who were using GPL in their projects - they couldn't use libcurl anymore, because it wasn't compliant license-wise. So then I was in another annoying position. Then for a while I added a dual license. I don't even remember which licenses.

**Adam Stacoviak:** What's the license now?

**Daniel Stenberg:** Now it's MIT.

**Jerod Santo:** So you kind of took a windy road to what is one of the most liberal licenses...

**Daniel Stenberg:** Exactly, yeah.

**Jerod Santo:** You've kind of come to find out what kind of a man you are... \[laughter\]

**Daniel Stenberg:** Yeah, then I dropped that dual license thing and I was like "Yeah, we're going MIT license here. Completely. As liberal as possible. Do whatever you want, just don't say that you made it."

**Jerod Santo:** \[00:44:04.10\] I like that personal identification with the license that you're picking. You're thinking like "I don't think I'm a GPL man."

**Adam Stacoviak:** Yeah, I liked that, too. That was nice.

**Jerod Santo:** It's a nice way of thinking about it. And do you think that the MIT -- since that change, it has helped, or hurt, or are you happy with it?

**Daniel Stenberg:** I'm happy with it, and I think it's helped. I don't think it has hurt us at all. I think I've managed pretty good. I actually don't think we would have been able to manage a lot better than we have if we had picked another license. I think this license has made it possible for all sorts of companies to adopt and use libcurl all over. And of course, there's been companies and whoever who have used libcurl and done changes and who never contributed back, but we've been keeping a pretty high development pace over the years, so I know for a fact that a lot of companies - they just wanna contribute back, so that they can follow the development, and they don't have to maintain anything on their own, or do their own forks, or branches, or patches, or whatever.

I think the liberal license has helped companies to not be afraid to use libcurl, and then in the end they usually contribute back anyway, if they do any substantial changes. And at the same time, the GNU projects and everything - those who are GPL or whoever, they can still use libcurl perfectly fine, and they are all happy to use it, since it's perfectly free and open source still.

**Adam Stacoviak:** You'd mentioned that in the past you've been -- I don't know if you used the word "bounty" or not, but you've been paid to implement certain features, either in a particular branch for a certain company, or even if it made it into main line... But over the years you've had several employments that have either helped or hurt you maintaining curl. Can you walk us through some of that and then ultimately bring us to where you're at today at Mozilla, in terms of their support for curl and your work for it?

**Daniel Stenberg:** I've been employed by four different companies while working on curl, I think... But I've pretty much successfully been able to not have that influence my work on curl too much. I've basically always had curl as my spare time project, and done my work stuff separately from curl.

**Adam Stacoviak:** Right.

**Jerod Santo:** So I don't think that has influenced me a lot. And then over the years, of course, I started working for my own company - like 5-6 years ago - and then it turned much easier to do contracts for money, to actually implement features for companies that wanted that.

Then I've actually done -- I don't remember how many, but perhaps 5-7 different projects for companies that have paid me to do things for curl. And usually, actually those companies - they didn't even want it to be known that they were paying for it... So usually it has never that obvious to the outside that someone else has paid me to do it.

**Adam Stacoviak:** This is an odd question to ask, but I've asked this to myself sometimes, because I'm self-employed - and Jerod, you are too, so you might like this question, but... Earlier we got the average of potentially 13,000+ hours that you've invested in this... Do you think that you made minimum wage for those hours? The money that you've been able to make as part of taking care of curl, or being paid to work on it for a couple hours a day like you are now at Mozilla - have you been able to at least make minimum wage, or well above that? Do you think we've been compensated well for that time that's been invested, I guess?

**Daniel Stenberg:** \[00:48:13.21\] I'm not sure. Partly, it's my hobby, so...

**Adam Stacoviak:** Right. You don't really care.

**Daniel Stenberg:** People have hobbies, and they don't expect to get paid to have a hobby.

**Adam Stacoviak:** I don't mean so that we could justify "Oh, you got paid enough", but I think of it like for myself - the time I invested in something, I just wonder, have I at least... Am I a plus or a minus? Am I in the red or am I in the black? And it's not so much to say justified in making money, but just as like "Oh, I'm in the red on this one. I didn't make that much. I just love this thing so much."

**Daniel Stenberg:** Yeah. But I just wanted to say that about hobbies - I do it for fun, so it's not really about getting paid for it.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** But then on the other hand, as I said, it's been my big hobby since a lot of years, and I think it has influenced my life and my career and everything I do pretty much. So where I am today is a lot because of what I've done. So I think in the end, I think it's been really helpful.

I work for Mozilla now, so it was a really -- the hiring process at Mozilla has been a lot of talking about "Yeah, I have a lot of code in public, and I do know a lot about protocols." I didn't have to explain that a lot, since everything is there; everything is public, we've been discussing it for years.

**Adam Stacoviak:** Well, Jerod read the list earlier, so...

**Daniel Stenberg:** Yeah, exactly. So for example, I'm working for Mozilla today a lot thanks to my work with curl of course. So what started a long time ago is now at this point. And I've had so much fun and I think I've managed so well in so many areas, so yeah, I would say that I'm definitely a net win with everything on this, taking all those 13,000 hours into account.

**Jerod Santo:** It's like the ultimate hacker credential. It's like "I wrote curl", and then they just hire you, right?

**Daniel Stenberg:** Yeah, pretty much.

**Jerod Santo:** I thought so. \[laughter\]

**Adam Stacoviak:** It's funny you said that, because -- I guess it's okay to say it on air... But before we got on the call, we were joking... So everyone's who's listening to this \[unintelligible 00:50:22.23\] "Daniel, you're like the O.G." and then you said "The O.H." for the Original Hacker, because you've been there since essentially the dawn of the internet almost, and you've wrote this library that billions of people use... So you can't get much more O.G. or O.H. than that... Unless you're Linus Torvalds...

**Daniel Stenberg:** \[laughs\] Right.

**Jerod Santo:** Tim-Berners Lee.

**Adam Stacoviak:** Yeah, Tim-Berners Lee.

**Daniel Stenberg:** Yeah... Well, of course, you can think of a lot of people.

**Jerod Santo:** There's been a lot that's changed over the years. We've talked about the name-changing - we've talked about your version control systems changing, your license changing, you've had four different jobs... If there's anything that's stayed the same over the 17-year life span of this project, what would that be?

**Daniel Stenberg:** I think there's a lot of things that are still the same... Working in open source - you work with people, and I think that people are mostly the same still. So I would say that there are still the same whiners, the same people who are doing things, the same type of criticism... No matter what you do, and no matter how much success or how many users we get in the core project, it doesn't really change the human mind, or the mental state in people. I've always had -- I shouldn't say "always", but I keep getting those annoying emails that I have to kind of resist and really keep back when I respond to them, and so on... And you know how things can be in open source projects - it can be really rough, and you have to have a really thick skin at times, because people don't hold back on what they say, and write in emails, or whatever... But of course, it's also the opposite - there's a lot of good stuff, too.

**Adam Stacoviak:** \[00:52:28.21\] For those who listen to this show, they know we have some awesome closing questions we tail off the call with, but... I'm kind of curious what your favorite moment over the last 17 years might have been. If there's something that just clearly stands out to you as like "That was the day" or "That was the thing" or "This was the favorite feature", what in the last 17 years was maybe one of your most favorite moments?

**Daniel Stenberg:** I think there's been a lot of good moments, in particular when I realized who has been using curl. Like, wow... Suddenly, I realized that Facebook uses curl. And then I suddenly realized, "Wow, that's quite a lot of users", or stuff like that. But I especially remember one moment, and that is when I saw that the billboard outside -- somewhere in Silicon Valley there was a billboard with a curl command line on. Pretty much like this new one on--

**Adam Stacoviak:** On NASDAQ.

**Daniel Stenberg:** NASDAQ.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** It was a bunch of years ago, and it was an ad for some -- I don't remember really what it was, but it was a big freakin' curl command line on a billboard in Silicon Valley. That was a good moment.

**Jerod Santo:** I think one thing that really resonated with \[unintelligible 00:53:55.18\] one who passed away recently, but who touched a lot of people... One of his favorite things to do was to go to the Apple Store and fire up a terminal and do \[unintelligible 00:54:07.11\] his baby. He had many libraries, but that was one of his bigger ones... And have his name there. Of course, you could do man curl... You're kind of a Linux hacker - I wonder if being included in different distributions, maybe the ones that you use, was a shining moment for you, or if being included in the Apple operating system, or anything like that was something that resonated with you.

**Daniel Stenberg:** Well, of course. It's really satisfying, and kind of an ego boost thing... But as I said, they don't tell you about it; it wasn't that someone called me and said "Hey, we're using your stuff."

**Jerod Santo:** Right.

**Daniel Stenberg:** It was more like, suddenly, one day, someone mentioned it to me. "Oh, you know that it's included here. Oh, look." They've been doing it for years and I had no idea.

**Jerod Santo:** Like a discovery...

**Daniel Stenberg:** Yeah. So in a lot of these cases I don't know it exactly when it happens; I just realize at some point in time that "Oh, they've been doing this" and for how long they've been doing it. Like in the Apple case, for example - I have no idea when I realized Apple was including curl all the time; I had no idea.

**Adam Stacoviak:** Sneaky, sneaky Apple...

**Daniel Stenberg:** But of course, it's a huge ego boost. These days, so many things are network connected, and an enormous amount of things that are using curl just to download things these days... And there are so many different things, like cars, or TVs, or printers, or routers, or whatever. It's fascinating.

**Adam Stacoviak:** \[00:56:01.00\] We have a couple questions for you... I know we shared them earlier, so you may have been thinking about a couple of these... But one favorite we love to ask - and I'm really curious to hear what yours is - is who is your programming hero?

**Daniel Stenberg:** Yeah, I've been thinking about that question. I think it's a good question. I don't know. The one who immediately came to mind is Richard Stallman, because that's one of those original guys who managed to do so much. The guy who made GCC, Emacs, GDB, and a lot of those early days tools that are still around... Even if I would say that he was not possibly my hero these days, but...

**Jerod Santo:** He may not care too much, since you switched off the GPL... \[laughter\] He probably quit listening right about then, so...

**Daniel Stenberg:** Yeah, he's an interesting character in general, actually... \[laughs\]

**Jerod Santo:** Yeah.

**Daniel Stenberg:** But then I would say that also people like Linus Torvalds, for example, is also someone who has managed to get to a point and do what he likes, in a way, to keep integrity and stuff in a very successful way. I'm impressed by that. I would like to get into a position like that. But I shouldn't complain. I'm in an excellent position myself right now.

You asked before - I didn't mention it, but these days, when I'm employed by Mozilla, I'm getting paid to actually work on curl part-time, so I do part-time curl on work hours these days.

**Adam Stacoviak:** Well, I would say that Mozilla is pretty interested in security, and just the general ability for the internet, so I would say that that's nice to see, to say "Yeah, good. Go ahead, Daniel. Work on curl when you get a chance, during your workday."

**Daniel Stenberg:** Yeah. It matches with what Mozilla stands for and wants to do, so yeah.

**Adam Stacoviak:** I know that this is using some of your language you've written elsewhere, on the curl side or on your own side - you mentioned you've got a long list of things to do; you mentioned you've got this upcoming two-month span of working full-time... But while you're doing that, or maybe in the future, when somebody picks up this podcast and listens to it and says "Heck, I think curl is pretty neat. I'd like to hack on some C... Maybe Daniel's got a little to-do list somewhere." What's the call-to-arms? What's something that the community listening to this show could pick up and help you on to help curl be a better curl for tomorrow?

**Daniel Stenberg:** In general, for an open source project - or all open source projects, really; not all, but most of them are on demand in terms of people who are actually doing things... So for me, for example, I would appreciate it if people would just help with bug reports, and just help reproduce bug reports, or just help try out patches. There is just an endless amount of things that could be done.

Then there is of course also this -- I have for example a to-do list, at least 20, 40, 60 things that we could add to curl if somebody wanted to do it and somebody just spent the time and the energy to do it... So there's both highs and lows, depending on what you can do and what you feel for.

**Adam Stacoviak:** Let's talk about your open source radar then... Since this is your labor of love, it seems like it might be the only thing you get to play with, but if you had a weekend, is there any project out there that's in the open source world, that you're like "Man, if I only didn't have all these bugs for curl to take of, I would totally hack on that this weekend" - what might that project be? In technology, not so much just a project. It could be VMs for better testing, it could be Docker for better testing, or something like that.

**Daniel Stenberg:** \[01:00:11.06\] I am a library foundation kind of person, so whatever I do is usually around those -- it's networking, it's libraries, it's doing things like that. So if I have a weekend off at some point, I don't do a new project. I spend time on my existing projects. But if I would do a new project, it would be around networking and improving things that I'm already working on. Most of the new things I do, they usually are all related to whatever I'm already doing.

I started on a Speedy library previously, to do the Speedy protocol, and stuff like that, because then I could use that in the existing projects that I do. So I'm kind of narrow, and I don't experiment -- I don't go very, very far from what I'm doing.

**Adam Stacoviak:** You've got your safe trail and you like to hang out there.

**Daniel Stenberg:** Yeah, I like my little cozy corner here.

**Adam Stacoviak:** Nothing wrong with that. Nothing wrong with that at all.

**Daniel Stenberg:** Right.

**Adam Stacoviak:** That's good stuff. Well, Daniel - you know, with such history and such O.G. behind you, I can't help to just be excited to have this conversation with you. I know that it's been a long road, but it seems like you've been having fun along the way. Somehow you've stayed motivated, somehow you've stayed excited about it, and you keep caring for this labor of love. You've had your code on billboards, and billions of people using it, and you've got some of the highest accolades, with Facebook and many other people using your code every day in their everyday projects. It's gotta be a good feeling for you to sort of sit back and look at the last 17 years and say "That was time put to good use."

**Daniel Stenberg:** Oh, yeah. I actually just do that - stop, stay and consider all that; all those users, all those products, all those companies using it... Yeah, that feels really good. And as I said before, it's an ego boost, and of course, I contributed or even had a big part of that, and it's an awesome feeling. But then yeah, that's about it. Then I go back to do the work, and then... \[laughs\]

**Adam Stacoviak:** You take a moment, enjoy it, and then you go back to work. At the end of your 17 year birthday post you were like "Have a beer with me, but only have one, because we've got work to do. There's bugs to take care of and tests to write."

It's been an honor for me and Jerod to have you on this call. It definitely was great getting to know you and hear about all the things you're working on. For the listeners listening, we've got a couple shows coming up. We still have to schedule the Roots and Bedrock show, so if you're interested in WordPress and the Bedrock way of doing things for WordPress, I can't wait to have that conversation, but we haven't put it back on the books yet. However, we do have May 1st scheduled (next Friday), we're talking to Steve Newcomb about the Famous interface library framework; super-cool conversation there. We're hoping to see where that's -- I'm not really sure where that's fitting, Jerod... Especially with all those React news; we've talked a little bit about that on that show, I believe... So I'm really curious to see where Steve is sitting with Famous.

**Jerod Santo:** We'll find out next week.

**Adam Stacoviak:** Way off the path of curl, of course, but nonetheless, still a fun conversation. Daniel, is there anything else that you wanna cover before we taper off?

**Daniel Stenberg:** I'm good.

**Adam Stacoviak:** Anything else you wanna say to the audience? Where can they find you, where can they follow you...

**Daniel Stenberg:** Well, everything I do and everything I play with is on my website, at daniel.haxx.se. And I am @bagder on Twitter. That's about it.

**Adam Stacoviak:** Gotcha. We'll link that up in the show notes, so if you're listening to this, head to the show notes - changelog.com. That's right, changelog.com, not thechangelog.com. Jerod, we just changed from thechangelog.com to changelog.com. How cool is that?

**Jerod Santo:** We've shed a few pounds.

**Adam Stacoviak:** We did. Three characters... And we're https now too, so we're ready for the future. Totally secure.

**Jerod Santo:** We're gonna get HTTP/2 rolled out...

**Adam Stacoviak:** That's true.

**Jerod Santo:** Maybe we can get Daniel offline to help us out with that.

**Daniel Stenberg:** Any day soon, right?

**Adam Stacoviak:** So for those wanting show notes to this show, it's changelog.com/153, because this is episode 153. Daniel, thank you so much for taking the time to talk to us. With that, everybody, let's say goodbye.

**Daniel Stenberg:** Goodbye.

**Adam Stacoviak:** Bye!

**Jerod Santo:** See ya!
