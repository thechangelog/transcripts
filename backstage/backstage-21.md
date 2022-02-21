**Jerod Santo:** So we are backstage with Simey de Klerk. I'm Jerod, and Adam's here as well... What's up, Adam?

**Adam Stacoviak:** What's up, Jerod? What's up, Simey?

**Simey de Klerk:** Hi, guys.

**Jerod Santo:** Happy to have you with us, Simey.

**Simey de Klerk:** Thanks. I'm really happy to be here. I am a long-time listeners of the Changelog family of podcasts, so this is a special experience for me; pleasure chatting to you guys.

**Jerod Santo:** Happy to have you.

**Adam Stacoviak:** You're the one we're always giving shout-outs to on the show, we're like "Hey, if you're a long-time listener..." That's you, Simey.

**Jerod Santo:** Yeah, there you go.

**Simey de Klerk:** There we go.

**Adam Stacoviak:** You're a long-time listener, so thank you.

**Jerod Santo:** Well, you're a long-time listener, and now almost a long-time contributor. We've had some of your code contributing to our transcripts for a while now. It's been up and running, just smooth sailing. We thought we would chat about it, tell the story... I like your story, because you're not even a full-time coder, you're an actuary.

**Simey de Klerk:** That's right.

**Jerod Santo:** Give us a little bit of your background, and then we'll talk about how you came across this little project that I put up on our GitHub issues.

**Simey de Klerk:** Yeah. So like you said, I'm an actuary by day, and a hobby coder by night. My journey with coding and programming - it sort of started through work. My first exposure to coding was probably the unofficial world's biggest programming language i.e. Microsoft Excel...

**Jerod Santo:** Yes.

**Simey de Klerk:** ...which I can tell you that the financial world runs on... And from there, doing an internship while I was studying, I got exposed to a Visual Basic for Applications, or VBA as it's also called... I started tinkering with scripts there, automating some processes... And I lived in that world for a long time. After I finished my studies, I had a general interest in programming; the bug sort of bit me through this exposure to VBA, and I started reading up a bit about programming.

One of the first main ways how I got into it was podcasts, of which the Changelog family was one of the first that I got into; I really enjoyed it. And actually, a lot of how I got momentum came through Changelog. The main way how I learned web development in JavaScript was through FreeCodeCamp, which I'd heard about on the podcast. I went through some of their syllabus.

**Jerod Santo:** Awesome.

**Simey de Klerk:** And I've since just been tinkering in my free time, learning, building little hobby websites and projects. So now I've been going along, and whenever I meet someone and learn that they work in the trade, I'll sort of follow them and do my best to talk the talk of the industry. At this point, when my wife -- when we're going out with friends and we meet new people and she learns somebody's a programmer, she will just sort of push me that way and say like "Go talk." \[laughter\]

**Adam Stacoviak:** My wife does something similar... She's like, "Oh, you'll like this husband." It's kind of weird... I almost brought up a Silicon Valley reference, Jerod, but I'm gonna skip that one.

**Jerod Santo:** Hold it back.

**Adam Stacoviak:** I'm not gonna bring it up this time.

**Jerod Santo:** Hold it back. So do you have desires to become a software engineer, or are you happy as an actuary with doing this as a hobby? Do you have an endgame?

**Simey de Klerk:** It's a good question. I think if I had to start over now, I likely would have considered software engineering. Where I am now though - I'm happy enough where I am, and I'm trying to work in a combination of the two in my work. So there are some overlaps between actuarial science and data science, so I'm trying to get a bit of like the coding flavor in there, so Python at work, and stuff like that...

**Jerod Santo:** I don't know too much about actuaries, but what I do know - and you can correct if this is misinfo - is that they get paid pretty well, and that a lot of their work is calculating risk... And I can see where a data science overlap would be. Is it a good-paying job, and is that basically what you're doing, is for insurance purposes -- or maybe there's other reasons, but figuring out if certain moves are risky or not?

**Simey de Klerk:** Yes.

**Jerod Santo:** Or people are risky? I don't know. There's risk involved.

**Simey de Klerk:** \[00:04:02.15\] That is just about right. We do have a reputation for being well-paid. We don't suffer. I'm not convinced that we are a cut above other professionals nowadays; I'm pretty sure some software engineers and lawyers and private accountants and the like earn similar, if not at times higher salaries. But we are well paid professionals, so that part is true.

In terms of what we do, the sort of business slogan is that we are experts in managing long-term uncertainty and risk. The key application of that is life insurance, and pensions, and the like. There are various subfields in that, but the typical technical one that people think about is projections and calculations, typically around life risks. So forming a view of a person and how long we expect them to live, and if we sell them life insurance, how many premiums do we expect to get before we need to pay the claim, but sort of in a probabilistically-modeled way.

A lot of that, on a practical level, comes down to effectively complex mathematical calculations, which nobody does by hand anymore, everybody does by computers... And so those calculations, on the high-level - there are similarities to the data science world. And a lot of it is interacting with our policy data that lives on systems, and getting those out of the core admin system and somewhere else where you can then perform these calculations on them.

**Adam Stacoviak:** This is why gathering so much data is so important, right? Because the more data you have, the more you can have in your model, the more easily you can determine that long-term uncertainty, as you mentioned.

**Simey de Klerk:** Yes, for sure. Well, it's interesting - that analysis, like I said, has a lot of overlap with machine learning and AI applications. We also spend a lot of time thinking about how the future may or may not be different to the past... Which at the moment, during Covid, is very topical. Maybe I'm underselling Google, but if you think about how their \[unintelligible 00:06:12.26\] algorithms work, is they show people stuff, and if people click on it, it's a hit, and if people don't click on it, it's a miss, and then they just train that to optimize. But the implicit assumption in there is that that system is unknown, but stable. So you it's one stable puzzle that you can figure out, and there's an optimal algorithm to follow for Adam, and then they just find that config, and once they have that, they've got you locked in, and that's that. But something like mortality rates in times at which people tend to pass away - that is not static, and changes over time with medical advances or with pandemics... There's an xkcd which sums this up really well, with a list of experience of previous years with a little star next to 2020, and a little double star next to 2021. And that sort of will be our world, probably for the rest of my career, where you can no longer just take the past and assume the future will be the same, because you now have this anomaly in the middle that you need to allow for \[unintelligible 00:07:16.27\]

**Adam Stacoviak:** I don't know what it was, but there was this thing I saw on LinkedIn today, as a matter of fact this morning... It was a satire, or at least comedy at best... And it was some sort of show, and it was talking about -- think of it like SNL, or some sort of skit style comedy. And there was this person conducting class in school - and this is like post-pandemic school. And it was essentially highlighting the PTSD that people have around the pandemic. And the teacher was talking about "What was notable things that happened in 2019?" and the class went around and said different things. He's like "Okay, great. What was notable things that happened in 2022?" And the class went around and was like "This, or that, or whatever." And the one student says "Teacher, what about 2020?" He's like "Get out. Just get out. Go to the principal's office now." It was just like "Just forget 2020 and 2021. That didn't happen. Go with me, class. What is it - 2018, 2019, 2022, 2023..." And that was like the way they were brainwashed. It was meant to be funny, of course, but it was that kind of thing; 2020 and 2021 just totally ravaged all known ways, basically.

**Simey de Klerk:** \[00:08:29.24\] Yeah. We don't talk about it. I still haven't watched the movie, but I feel like I almost know all the words to this song "We don't talk about Bruno" by this stage, by virtue of my wife playing it to our kids.

**Adam Stacoviak:** We don't talk about Bruno around here, okay? Oh, no, no, no.

**Jerod Santo:** So an actuary with coding skills sounds like a great combination in terms of -- like, you have super-powers, you're already in a well-paid field, you can probably be more effective, more productive hopefully, over time, as you can apply those things to your day-to-day work... Maybe you get together with some other actuaries/coders...

I know we were written to by a lawyer who spoke of his coding prowess over the years; he did all this lawyering through Unix utilities. You know, because there's a lot of paper and words slicing and dicing... And he just said all these years he's just been a very productive lawyer because he was able to wield the Linux command line, and sed and awk, and Perl, or whatever, to basically make his job way easier. And he watches his colleagues, and they're just doing tons of things by hand, or still inside of -- I think in your case maybe everyone's still inside of Excel, but maybe you can pull things out of Excel and put them into more capable, more facile programming constructs. Is that something that you're doing in your day-to-day, like you're trying to automate, abstract and code? Or are you just starting to think about that as you go about your work?

**Simey de Klerk:** Very much. Yeah, a lot of what we do, especially in my current role, is -- currently, at least part of my responsibility is financial reporting, which is cyclical in nature, and so we have \[unintelligible 00:10:13.02\] that we need to run every three or six months; so there is this repetitive nature and this clear opportunity to get those processes automated and as streamlined as possible.

For me personally, I've got that sort of hacker/tinkering mentality where I like to spend time to learn the shortcuts in Excel, so that when I'm working there I can work as quickly as possible, or code a little extra shortcut \[unintelligible 00:10:38.25\]which I use, and around the work that I do.

In my team we've got various other processes, and I find there's a kind of mindset there... I've actually encountered this problem earlier in the week where another member of my team - we get an extract of information from a system provider in one format, but now we need to provide it to another part of the company in a different format, and they wanted us to do that by re-typing it into an MS Forms form. And I feel like there's a mindset there to say like "No, that is not the answer. It's 2022, they must be a better way."

**Jerod Santo:** Like, "No, I'm not doing it." \[laughs\]

**Simey de Klerk:** And yeah, I feel like that is part of something I think I bring to the table, just having that mindset, and an understanding of what computers can do... Which more or less should be possible, even if I can't do it myself, to say "Well, what should a good solution to this kind of problem look like, and how should we piece things together so that the flow works and we don't have unnecessary manual steps", because they are a) no fun, and b) just begging for problems and typos and the like.

**Jerod Santo:** \[00:11:54.22\] Well, when it comes to automation, I'm also a fan... And when it comes to manual things that I don't want to do, or would be nice to have done, but we're not going to do them because there has to be a better way, I'm also a big fan... And it turns out we have such tasks around our episode transcripts.

Now, back in October of 2020 I opened an issue on our transcripts repo called "A GitHub Action to auto-improve transcripts." And I labeled it "enhancement" and I labeled it "help wanted". Because while I thought this would be cool, it hadn't quite percolated to the point where I was actually going to write this, because there's other code that needs writing more than this needed writing. But I thought this was like a nice, small, encapsulated, easy for me to spec feature that I would love to exist. And I just kind of put that out there on the repo, and it sat dormant for a while. And I thought eventually I would just do it myself; that's kind of where it was. Like, "Note to self, but I'll put it on an open issue, and throw the 'help wanted' on there and see what happens." And then you came along. Do you wanna tell how did you find this issue? I think it was Hacktoberfest or something, but...

**Simey de Klerk:** It was.

**Jerod Santo:** How did you find it, what was intriguing to you, why you decided "I'm gonna dedicate hours of my life to writing this code that runs on somebody else's transcripts." Tell us that story.

**Simey de Klerk:** So as I mentioned, everything in life that I learned and know about code, I learned through Changelog, so... I think it was about 3-4 years ago you guys did a show about Hacktoberfest, and I learned about it. At that point I checked it out... I think the first year, back when I'd known some coding, but I was only just at the first job, I basically learned Git through Hacktoberfest, and then the following year I played along as well... It was before the spammy phase that I think was 2020, in Hacktoberfest, so there were still friendly repos so you could just commit your name, and things like that... So that year I did 2-3 of those, and I fixed some unintelligibles... I actually can't say that word; I'm so proud of myself for not fumbling it there.

**Jerod Santo:** That was nice. You landed it.

**Simey de Klerk:** I'm not gonna say it again for the rest of the podcast. So I fixed some of those...

**Jerod Santo:** What's funny is when we say unintelligible on an episode that's gonna be transcribed, we might be going into some sort of recursive state...

**Simey de Klerk:** Oh, wow.

**Jerod Santo:** ...where it's actually a proper uninitelligible. I don't know, I don't wanna say it too many times; it might break the repo.

**Simey de Klerk:** Well, the proper ones have square brackets around them, right?

**Jerod Santo:** That's right. So you know very well the formatting of our transcripts. So for the audience's sake, our transcripts are written in Markdown format, they have some specific aspects to them. They are written by a human, his name is Alexandru, and he's probably just heard me say that, because he's gonna transcribe this eventually... And he has special software that helps him type real fast - I'm not sure exactly how he gets it done... But when he can't understand what we say, like maybe we say \*mvlumschlip\*, now instead of spelling that out, he's gonna put the word "unintelligible" in square brackets, and this is an easy way for us to go through and improve those transcripts and just find all the unintelligibles and fix them.

So for a long time on Hacktoberfest this was something that we would offer as a very easy way for people to get involved in Hacktoberfest, get their T-shirt... Real easy PRs for us to review and merge, because we just look at it and if it's filling out what we think looks right, we just hit merge... And so a lot of people will come every October to our transcripts repo and will contribute just during October. Which is totally cool. Over the years, we've had 991 pull requests on that repo, so quite a few people doing that. You were one of these people.

**Simey de Klerk:** Yeah. So I think it was 2019 I was one of those people. I fixed some... Unintelligibles... In several episodes.

**Jerod Santo:** \[laughs\] Two for two.

**Simey de Klerk:** \[00:15:55.01\] I did that, and then did some other small random things, and sort of got my four or five pull requests, or whatever the hurdle was that year to get my T-shirt.

**Jerod Santo:** Right.

**Simey de Klerk:** And 2020 came, Hacktoberfest came, and I feel like on day one there was all this complaining on Twitter about people getting spammed with putting in period at the end of a sentence in random stuff. So as somebody who was not really that confident, that scared me off in trying...

**Adam Stacoviak:** That's a bummer.

**Simey de Klerk:** But then last year, 2021, I came back again, and scoured around, found some -- I actually can't even remember what my other contributions were, but I found some other items... And then came to this transcripts repo, initially just to fix more unintelligibles... And I came across this issue that you made. And it felt a bit like the stars aligned for me in terms of that. I had done some code in Node, and some Python stuff at work, and I felt like I know enough to be able to piece together a script that would do this auto formatting.

A couple of months before that I had played with GitHub Actions, I got some toy stuff going, like -- I made this small bot that connects to the Dad Jokes API on Twitter and just tweets a dad joke every hour through GitHub Actions...

**Jerod Santo:** Nice.

**Simey de Klerk:** That thing is actually still running. It gets more activity than my actual profile.

**Jerod Santo:** Ha-ha!

**Adam Stacoviak:** What's the handle?

**Simey de Klerk:** I should have checked that... I'm gonna find it and give it to you for the show notes.

**Adam Stacoviak:** Okay.

**Simey de Klerk:** So I made that... So I had done some work with GitHub Actions, so I'd sort of -- that part was not completely unfamiliar; the idea of writing a script that does this wasn't completely unfamiliar, so I felt like I had the right combination of background to take this on. Yeah, and then I went for it.

I guess the other thing that was nice about this is as you described, it's nice and self-contained; from the get-go, you could be fairly certain that it isn't too big... And the other thing is -- previously, when looking at items on Hacktoberfest, and as somebody who doesn't code for a living, it's actually pretty daunting to open a new codebase. You get an issue that's like two or three lines of English, and then figuring out "Okay, what does it mean? Where in the codebase would you do that? How does it all work? How do you get the thing to stand up?" So there's like a fairly big initial investment just to get going if you want to make a real contribution to a real repo. But this was nice, in that it's a started-from-scratch, pretty clearly defined goal, like you said... So it felt really achievable.

And yeah, then I just started hacking away at it, building it bit by bit, checking it with you a couple of times just to get a sense, a little more detail about how you envision it working... And I eventually got it standing up.

**Jerod Santo:** Yeah. So just to give you a break for a minute, since you've been doing a lot of the heavy-lifting here... Adam, how cool is it that our FreeCodeCamp episode and our Hacktoberfest episodes -- so we don't actually think about people listening to these shows... \[laughs\] And we know they do.

**Adam Stacoviak:** I mean, we do, but we don't.

**Jerod Santo:** We know that people listen. But when they actually have reactions, and then it changes their lives in subtle or large ways, it's just cool to hear, because we don't hear those stories very often. So that's pretty neat. A couple of episodes combined to lead you to actually contributing back to our stuff... It's so cool.

**Adam Stacoviak:** Yeah. My mind is kind of blown over here. It's like, found FreeCodeCamp, actually went through some syllabuses, got some courage to do more, \[unintelligible 00:19:35.19\] Hacktoberfest... Like, even that show was like years ago; a long time ago.

**Jerod Santo:** I think we did two of them.

**Adam Stacoviak:** Yeah. And it was even like an internal debate, "Should we do more of those? Should we do that every year?" kind of thing.

**Jerod Santo:** Right.

**Adam Stacoviak:** Maybe it has diminishing returns or whatever, but... It's just interesting how you put something out there, and you connect certain dots in the world, and people actually connect them too, and it changes their life in some small way or some large way. I think that's just -- and then it comes full circle. It's like, this feature is super-cool. I love this feature. There's so much more we could do with it, and it's cool that you contributed, Simey.

**Jerod Santo:** \[00:20:16.20\] Yeah. So let me describe the feature as it stands today, and then maybe you can give a little bit of the story. We should say that Simey also wrote a blog post that y'all can read called "Auto-improved transcripts with GitHub Actions, or how I taught Logbot to change Changelog's logs like magic." Say that five times fast...

**Adam Stacoviak:** No, thank you.

**Jerod Santo:** So the details of some of that can also be read if you're interested in that... But the way the feature stands today - so there is a GitHub Action on our transcripts repo that runs a script that ingests all of the transcripts and runs them through a series of transformations, and applies standardized formatting rules according to our desires to every single transcripts. Some examples of those rules are commonly multiple-spelled things such as -- well, JavaScript is the big one, because JavaScript technically has a capital J and a capital S, but it's very difficult to keep that consistent throughout iterations of transcripts. Some people will capitalize the J and not the S, and other times it'll be all lower-cased... And we just want that to be uniform throughout all of our transcripts, so that's an easy one.

Then there's terms like MLOps, machine learning operations, which is a phrase in the industry and it has a specific way that the people that created that term use it - capital M, capital L, capital O, lower-case ps... And oftentimes it's like two words in our transcripts... So that kind of stuff. Inconsistencies. It's basically a linter for text, and just the way that we want things formatted.

The other big one is our timestamps. So I've mentioned Alexandru - he has something that spits out a timestamp every so often... Every unintelligible is timestamped, so that you can click to it on our page and easily skip to that part of our episode... But then also, he'll just throw random timestamps in every so often; I asked him to do it often, but it's like every 3 to 5 minutes. And those just have a very computer-formatted, extra zeroes... They're just formatted as a computer program would output them, so another transformation that we do is we reduce those to a more simplistic form, because you're gonna read them on the website. So we pull out the leading zeroes, stuff like that. So that's a script that is triggered by a GitHub Action.

Every time a push goes to the transcripts repo, it's going to go through -- and we went through a few iterations of this, how this works. Maybe you can talk to that part, Simey. It actually just commits the change. So we trust it enough that every time somebody pushes to the transcripts, the Logbot is gonna come in behind them, reformat that file, and push the changes. So it works all day, every day, even when we're sleeping. It just does its job, as faithful programs do, right?

**Adam Stacoviak:** As a bot should do, yeah.

**Jerod Santo:** Exactly. So that's the feature. How did we get here? So you mentioned you started off knowing a little bit about GitHub Actions, you knew a little bit of JavaScript and Node, and you also hopped into our Slack and said "Hey Jerod, I'm thinking about working on this." My spec was brief, apparently too brief, because it needed some more information... I think the main thing I wasn't sure was like how the whole GitHub Actions workflow was gonna work. Was it gonna commit, was it gonna open up a new pull request? etc. And then you got going on it. But I know there was more to the process than that. Was there any particular aspects, or decisions you made, or things you hit against that were problematic, or hurdles that you had to overcome?

**Simey de Klerk:** \[00:24:10.21\] Right. So maybe to jump into the one at the end that you mentioned first maybe, around how we actually wanted to execute. We had gotten it going, and the first commit was actually a pretty big one, because now it's going through basically everything, and applying all the stylistic changes to every single episode. And while the other ones that you mentioned, the JavaScript and the MLOps and those things appear here and there, but aren't always as prevalent, the timestamps were everywhere. So basically every transcript there were multiple timestamps that needed to get fixed. So the first time we ran it by hand and I think we made a couple of big commits just to \[unintelligible 00:24:53.17\] the existing transcripts.

**Jerod Santo:** Mm-hm.

**Simey de Klerk:** And then from there we sat sort of idle. And again, this being one of my first real-world contributions, it was a little scary to just have it auto-commit immediately, just in case something breaks in unexpected ways, don't push to prod on Friday, and all of that... And so at first we decided to make a pull request... I was really hesitant, but I think you were pretty bullish with -- you were suggesting we just let it go immediately. And then I lost it all... \[laughs\]

**Jerod Santo:** I was. \[laughs\] That's kind of how I roll.

**Simey de Klerk:** I like it.

**Jerod Santo:** We'll deal with the fall-out afterwards... But I was happy to go step by step, because you felt like we should.

**Simey de Klerk:** Yeah. And then I think after about a day we saw it was looking fine and we just decided to just have it auto-commit. And that actually makes it easier, because now you don't have the complexity of what happens if you run it after one episode, and it's got changes, but maybe you don't come around and merge that PR yet, and now another episode comes in... You get new complexities there. So it's actually simpler for it just to jump in immediately \[unintelligible 00:26:01.20\]

**Jerod Santo:** Yes.

**Simey de Klerk:** ...on a commit and follow it up immediately.

**Jerod Santo:** Plus, opening a new PR is actually creating work for us. I was okay with it at first, but it's like, ultimately, I don't want to have to merge a bunch of PRs from a bot. I'm already merging PRs from other people... I would love for it just to do its thing. And I thought that was going to be a lot harder than it was. I think you were also surprised, in terms of how the GitHub Actions works, to just make its commit. I mean, you can just make up an email address and -- I'm not sure if that's like a standard GitHub Actions account name or email, how that works... But you basically just commit it and push it, and it's like "Hey, everything's fine." Kind of surprising. I thought you had to have a token, or something.

**Simey de Klerk:** Yeah, that surprised me too, and I learned -- I don't know if I can still remember all of it, but I learned a little bit more about how Git works and how GitHub interacts with Git... But for me, basically what it comes down to is - well, GitHub has Solid Auth, and I can't act as you on GitHub. I can on my computer in the Git CLI type in any email address and the Git CLI doesn't verify that --

**Jerod Santo:** Anything you want, yeah.

**Simey de Klerk:** ...that I own that. And how GitHub treats that, if I remember this correctly, is if I typed in any email address in the terminal and that GitHub user has made one verified commit to this repository before, then GitHub will attribute it to that person. I also tried to -- I think I actually tried to impersonate you, Jerod, and I couldn't do that. I tried to impersonate Linus Torvalds, they said I couldn't do that. But I could impersonate -- like we mentioned in the pre-chat, I don't think I'll ever be at that level, but that's okay... I've got other redeeming features.

So because Logbot had made other commits to this repo, I could just use its username and email address in the Git CLI, effectively within this Action, and that part just worked.

\[00:28:05.17\] I eventually got there and it was a pretty easy and simple solution after trying to get a token for another user and using that... But then there's weird, cyclical things in GitHub Actions where -- it's actually pretty cleverly designed, where in the default case a commit from an Action doesn't trigger another Action to run that should run on commits... But if it's coming from outside -- so basically, how the GitHub commit trigger works is if it's a commit from an outside profile, it will run. But if it's a commit from itself, it won't run, because otherwise it would create a circular reference. But now the other thing I was trying was making it look like it's coming from outside, and then it kept triggering itself, which is not what we wanted. So a couple of hours spent learning there, but we got it working eventually.

**Jerod Santo:** Yeah.

**Simey de Klerk:** I always find it interesting to have encountered these little areas of programming in computers, where in many other aspects there's a well-developed tasting paradigm, and the idea of writing testable code, and writing unit tests for your code; that's something else I try to build in. But then you have -- both around the script itself, around the important parts. But then you come to GitHub Actions and there's - at least to a novice like myself - no immediate way to test how this thing's gonna work other than to actually run it in the wild. So the \[unintelligible 00:29:31.04\] solution I came up with is to just on my fork of the repo, deploy it there and run it there, just to see that it's doing what I want it to do. Then when I was happy enough with that, then to bring it over onto the real transcripts repo.

**Jerod Santo:** Yeah, some of that speaks to Gary Bernhard's idea of functional core and imperative shells, where you want to push the imperative parts of your program - the commands structure, the parts that are doing io, that are accessing the database or some files on disk, or they're reaching out to the network, and you wanna push these to the outside areas of your program and have all of the pure, functional, clean, deterministic, reproducible, fast code inside like an M&M, like a thin candy shell. And inevitably, every project has those areas where it touches the real world, and you just can't do your nice little unit tests; you can't just run that tight, automated loop and get any sort of confidence that it's going to work. You're gonna actually have to go and do something like "Well, I'll create my own repo, and I'll fork it, and I'll have this thing over here, and I'll run it manually against this..." It reminds me of Gerhard, who just created his own Fastly endpoint inside of our Fastly account, called Lazu.ch or something, and he was just changing Fastly configs against his own domain in order to test before he changes them on our real domain... Because you wanna have something production, but not actually production.

So these things always come up... It's kind of like the glue code and the nitty-gritty stuff of "I can't do this any sort of pure, awesome, excellent way, but I can do this in this cludgy, not awesome, but it-works kind of way."

I kind of like that aspect of programming, where it gets really practical at a certain point, where you're like actually moving the bits around it, and making things change, and putting it into the real-world use. So I'd say that was a totally fine solution to that particularly hairy problem of like "How do I iterate on a GitHub Action without blowing these transcripts away on accident?"

**Simey de Klerk:** Yeah, that made me think of something else that I heard on this podcast before, and the more I'm speaking, the more I realize everything I know about programming I learned here...

**Jerod Santo:** \[laughs\]

**Simey de Klerk:** \[00:31:58.25\] But there was one where you spoke to someone about functional programming. The way he explained it I thought was really awesome; he said "Functional programming is not about shunning side effects, it's just about being really explicit about them." And like you've just described, having your functional bits clean, having it be clear when \[unintelligible 00:32:17.07\] and when not. Because as much as this clean, functional code is awesome to nerd out on...

**Jerod Santo:** Right.

**Simey de Klerk:** ...code is only useful is there is some real-world side effect. So there needs to be some endgame, some email sent or some file changed, or something displayed on a screen somewhere... Otherwise it's just spinning in a void.

**Jerod Santo:** Exactly. Otherwise what's the point of all this thing...? Yeah, exactly. It's probably Eric Normand... Usually, if we're talking functional programming, it's with Eric Normand. We've talked about it with other people as well, but he comes to mind; I think on JS Party we had a great episode with him a couple years or 18 months back.

**Adam Stacoviak:** Eric Normand is awesome.

**Jerod Santo:** For sure. So when it comes to the clean part though, here's what I like about this. So I am not a big code reviewer. I know I looked at the code, I understand what it does; I was not interested in refactoring or changing anything, but here's what I liked about the code that you wrote. So the actual JavaScript is probably like 50 lines. This is not a thousand, ten thousand -- this is not a large program. This script is probably 50 lines of code. There's two things that I like about it. Maybe three.

The first one is all the replacements are held in the exact same place. So everything's a regular expression. You can talk about that as well, regular expressions, if you like. But it's all just like "Here is an array of regular expressions, and when it comes time to add a new rule, you're just gonna write a regular expression." There's one way to add new rules to the formatter. And that's nice, because I don't wanna have to go digging through for like "Here's the timestamp area. And here's the punctuation area. Here's this other." It's like, it's all right there, so that's pretty cool.

And the other thing that makes that even cooler is that you do have unit tests around that. So I can very easily, as I'm writing new rules, as we do from time to time - I think I've added two or three since you've finished, and I probably will add more as I think of them - I can go in and add the rule and I can iterate on the rule, and I can go and add examples in the unit test area. And this is like pure functional stuff. This is the really clean, smooth, here's all my examples, here's the input, here's the output that I expect, and I can just tweak that rule until it matches for all six or seven or however many examples I can think of.

So that makes it really extensible. I mean, we're not gonna change it all that much, but probably we're gonna add new rules over time. So this is really super-easy to get that done. I love that.

**Simey de Klerk:** Right. Thanks, yeah.

**Jerod Santo:** Was that two or three? Yeah, you're welcome. I thought I had another point, but I've since lost it. That might have been three.

**Adam Stacoviak:** Two barely. What's interesting when you talk about the iterating, Jerod - is that why, to speak to current form, line 11, 12, 13 and I guess 14 are like open and close sourcing? Different versions of that. Are you saying that you might tweak a single rule, or a rule set, like multiples rules to sort of fine-tune the output?

**Jerod Santo:** So I did add those... That was actually my implementation of one thought applied to a couple different circumstances. So those are just like -- I could have written like one more complicated regular expression, or I thought "Well, why do that? Because the more complicated your regular expression, the harder it is for you to read later." I'll just create a few simpler ones to apply the same thought... And that thought is like how we handle the word "open source" and "open sourcing", and the words "closed source", "closed sourcing" in our transcripts.

\[00:36:02.01\] So yeah, it was really easy -- I came up with those by going to the tests and adding all the examples I could think of, of ways that I'll see it in the transcripts, and then the output obviously that you wanna end up with. And then - that's like test-driven development style - I could create those rules until everything is green.

And so yeah, that was really easy to add. Now, I could have just done one line, a very complicated one probably... But then I was like, "Well, I've got all this space right here... I'll just add more rules, and then have the same output." So it was flexible that way.

And then I thought of the third that I like... It's that you can just run the thing locally against your own -- like, it doesn't always run in a context with something that's gonna commit and push... You can just run the script against your local clone of the repo. So you can go change a transcript and run it, you can do that kind of stuff. So it's really easy to play with it, just because of the implementation of how it works. So that was the third thing, I just remembered it. Go ahead.

**Simey de Klerk:** Thanks. Well, that basically stems from my comfort with Node and my fear of GitHub Actions. I try to keep as much off the implementation in Node, and just have, like you said \[unintelligible 00:37:16.10\]

To your point around these four regular expressions that in theory could have been one - it's actually sort of a general principle that I feel like I applied a little bit in this whole thing, about like -- it just needs to work and it needs to be good enough. It doesn't have to be perfect. It's probably some linter framework out there that I could have used for this, but I don't know what it is, and I could have spent as much time as I did coding just finding that and figuring out how that works, but... This works, too. And just as you could have spent maybe 10 or 15 extra minutes to find that one regular expression that encapsulates these, you save that time and now I can glance at them and I can see what they're each doing. It probably could have been one, but then I'm pretty sure I wouldn't have been able to understand that one without \[unintelligible 00:38:14.20\]

**Jerod Santo:** Actually, I remember I started off trying to write one. I remember this now, because I thought about a few different cases, and I'm like, "I'm just gonna write one reg ex", because that's \[unintelligible 00:38:23.12\] what we had done thus far... And it was just getting complicated, because like "Could it be open or closed?" and you have an optional deal there, this or that, and then the question mark on the d, because it might have a d or it might not have a d... But then open adds an ed, closed already has the e, so you're just adding the d, and I'm like "Don't think too hard about it, Jerod. Just make multiple rules. This thing's not gonna run a gazillion times a day and cost us more money if it has to run through more regular expressions. It's just gonna run super-fast anyways."

So I remember just landing on that and being like, "Yup, good enough." Like, this is utility code, right? It doesn't need to be super-sleek, and like the most impressive thing ever. But it's just as easy to add another one later; it's not like it's so verbose that it's hard to read. It's not.

**Adam Stacoviak:** It's actually better that it's verbose, because it is easier to read, because you can see the individual permutations of the word, "open source", "open source", "closed source", "close sourced", and then the -ing's that might come with it or not. You can really see what you're trying to do a bit more clearly because you weren't so clever, honestly.

**Jerod Santo:** And sometimes that's the case. The cleverest code isn't always the most readable code.

**Simey de Klerk:** Seldom.

**Jerod Santo:** And sometimes a little bit of verbosity goes a long way to understanding.

**Adam Stacoviak:** Yeah. In terms of adding to this, would we go then -- because there's other common brand names that I see not right, which is like GitHub and GitLab. They both have camel case.

**Jerod Santo:** That's a good example.

**Adam Stacoviak:** \[00:39:58.02\] Would you go then -- because those two brand names occur quite a bit, same thing with maybe Elasticsearch, sometimes it's camel case when it's actually two words... Could we/should we go then and just really do a lot more?

**Jerod Santo:** There's no reason not to at this point. It's just so easy. It's too easy. Adam's favorite new favorite phrase, "It's just too easy."

**Adam Stacoviak:** It's too easy.

**Jerod Santo:** Yeah, it's too easy to do that. So yeah, absolutely... And I'm happy to actually do the nuts and bolts - if you think of ones - for writing the reg ex, Adam. But yeah, we should have -- I mean, now that we have this, we can just utilize it all that we want.

Now, there is one caveat which we've run up against and I still haven't actually fixed, which is - when you do a large batch on the Phoenix app side, so on changelog.com's side, what happens is our website via WebHooks gets updated when the transcripts repo gets updated. Which is pretty cool, because if somebody comes and fixes an unintelligible, well then GitHub sends a WebHook over to our Elixir app, our Elixir app says "Hey, the transcript's been updated", it sucks in the new version, and it re-renders. So it immediately is new on the website, which is what you want. You don't wanna have to do a thing.

**Simey de Klerk:** \[unintelligible 00:41:16.12\] when I did those fixes - that's pretty rewarding, because I can make a little change in GitHub, and then go back to the website and see a contribution that I might change, or \[unintelligible 00:41:26.19\]

**Jerod Santo:** Yeah, totally. And that's what I say when I merge people's PRs, I'll say "Your change is already live on the website" as I'm merging. And I can say that with confidence, because it's worked very well for many years. However, here's when it doesn't work - when you change 600 transcripts at once, and we get maybe 600 WebHooks... I'm not sure how GitHub does their batching, but I think they don't; I think they're just gonna hit us 600 times. Somehow, some of those get lost, and they don't actually update on the website side. So what I still need to do and haven't done is have some sort of a -- even if it's just a mixed task, that'll go and say "Hey, just go ahead and go grab all the transcripts that have been updated", and will go catch those stragglers... Or have it run on a routine, or something.

So if you went and said "Every time GitHub has misspelled or miscapitalized, fix all of those", and it happens in a whole bunch of transcripts, and you commit that all at once, that very first one might not 100% take on the website... But subsequent ones will. So there's a little bit of a -- I guess you would consider that an implementation bug, but not one that's worth dedicating a whole bunch of resources to at the time.

**Adam Stacoviak:** Well, I could see running a cron job twice a day...

**Jerod Santo:** Yeah, totally.

**Adam Stacoviak:** Pull the stragglers, essentially; once a day even is probably enough, or on the hour, if it's not too much traffic. I don't think on the hour it's necessary though, but...

**Jerod Santo:** Right.

**Adam Stacoviak:** I'd say twice a day would be a good sequence.

**Jerod Santo:** Yup, that'd be pretty easy to add. I'd basically just have to write a mixed task that actually just loops over all the episodes with transcripts and checks to see if they have new, and just whichever ones do, update. If that ran daily, and maybe a no-op for most things. It'll only be when we had a big batch on GitHub that it would actually even do anything, so... Definitely doable.

**Adam Stacoviak:** Meaning on the word "GitHub".

**Jerod Santo:** No, on the GitHub side of the system. \[laughter\]

**Adam Stacoviak:** Okay.

**Simey de Klerk:** Which would probably happen if you get the word GitHub in, too.

**Jerod Santo:** Yes, exactly.

**Simey de Klerk:** One of the other things that I just could reaffirm through doing all of this is that reg exes are hard. And having these tests, both for where you expect it to change and when you don't expect it to change is... It at least gives you guardrails to make sure that this gnarly combination of slashes and brackets that you wrote is actually doing what you want it to do...

**Adam Stacoviak:** Yeah.

**Simey de Klerk:** \[00:44:03.20\] And I'll share the limits of my powers here... I did actually try to write the GitHub one, but I couldn't figure out how to not change URLs. So whenever there's like a github.com/ with stuff in front of it, that's when you don't want it to change, I'm assuming...

**Jerod Santo:** Yup.

**Simey de Klerk:** And I haven't been --

**Jerod Santo:** So there you're probably looking for word boundaries. So if you've found GitHub with word boundaries on either side, \[unintelligible 00:44:28.22\] there are cases where it might be GitHub with a period at the end, because it's the end of a sentence, and so yo have to catch for that case... But you would match on GitHub with -- I think it's is /b (I think is boundary), and so that ensures that it's not any non-word characters before or after. And then you have to do the special case for punctuation... Which I think I might have done for one of these.

**Adam Stacoviak:** So the zero reg ex, does it have an issue with opensource.com, Jerod?

**Jerod Santo:** We'll see if that one's in the set of tests. If not, we should definitely work on it.

**Adam Stacoviak:** Now that I think about the fact that there is an opensource.com. And we do link to them often, so that's why I'd suggest that one.

**Jerod Santo:** I'm looking at my tests, and my tests do not account for periods... Except for the gofmt one; I have a test that has a period. So we leave it in. We still detect it, but we leave it in. If I had to guess off the top of my head, I think probably opensource.com might break it at this point... But I'm confident at least in my skills to get that one done. I think word boundaries is the key there... But yeah, we could colab on that. It'd be easy to create the test inside the Jest file for GitHub.com, and just make sure that it doesn't get futzed with.

**Adam Stacoviak:** Well, just a quick search on our transcripts repo, which I think we have linked to opensource.com... We may have not set it in the transcripts, but...

**Jerod Santo:** For sure in the show notes, but maybe not in --

**Adam Stacoviak:** For sure in the show notes. So this may be an edge case, or it may be an indication of a potential issue... So searching for opensource.com does not find any matches. So it's possible that we may have changed opensource.com to opensourcing.com.

**Jerod Santo:** Oh, you think we've said it before, but now we've changed it to --

**Adam Stacoviak:** It's quite possible. I just don't know. I can't say for sure, with any certainty.

**Jerod Santo:** Well, if you search for source.com, you'd match it there.

**Adam Stacoviak:** Oh, that's true.

**Simey de Klerk:** Well, even if it wasn't in there, it's gonna be in like 20 times thanks to this conversation... And then we could do it.

**Jerod Santo:** Yeah, exactly. This Backstage episode is like the ultimate test for this whole format thing, isn't it?

**Adam Stacoviak:** Okay, I have found it. Go Time \#59...

**Jerod Santo:** Okay...

**Adam Stacoviak:** Somebody had mentioned - this post is called "The seven stages of becoming a Go programmer". And it's now https://open source.com.

**Jerod Santo:** Oh, so there you go.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So there's a bug in my reg ex. Of course! \[laughter\] I love that. I'd never thought about that, so that's great. Yeah, so all we've gotta do is add that to our list of tests, and then just modify that reg ex, and then re-run it.

**Adam Stacoviak:** And so now that will become a fifth line of this --

**Simey de Klerk:** And roll those back somehow...

**Jerod Santo:** And just re-run it, right?

**Adam Stacoviak:** Will that roll that back then?

**Jerod Santo:** Um... No, that's true, because now it won't match the check...

**Adam Stacoviak:** You'd probably manually fix it, right?

**Jerod Santo:** If it's just the one, I'll manually fix it, yeah. If there were 733 of them, then we'd write some code for that.

**Adam Stacoviak:** Right. So now when we do certain words, like GitHub even, or GitLab even, or open source, we have to confirm or consider that we've said them as a URL somewhere, or have linked to them in -- that's part of actually Hacktober, too; a lot of contributions will be "Well, this actually makes sense to link up", or maybe it doesn't, and we'll allow that. It's not like we're going through and linking up every single thing. But if they say "This post is called The Seven Stages of Becoming a Go Programmer" and it has a link to somewhere... I actually don't even know why that's linked to opensource.com. Actually, I do know. It says "This post." So that's the reference. So it does make sense. Right. So in that case, this totally makes sense to link up the text in a transcript, where normally we just don't do that. Like, it's more or less meant to be readable, not clickable.

**Jerod Santo:** \[00:48:38.09\] Yeah. Because the show notes are clickable, and the transcript is readable, generally speaking.

**Adam Stacoviak:** Right.

**Jerod Santo:** But we have had people go back and add links to things that are referenced in a transcript... It's just not something that I actively do or think about. I know it's in our list of things in the readme, of like "Here's ways you could improve - you could link up things that are referenced." But it's few and far between. And I think it's the law of diminishing returns, because anything of real substance is gonna be in the show notes, linked up there.

**Adam Stacoviak:** Yeah. On December 7th Changelog Bot was the last update to that file, and it says "Apply standardized formatter to...", you know, all these different files. It was like 219 other files that were updated as a result of your great work... And then maybe this is the only case we actually had a .com in there, so it broke the one case.

**Jerod Santo:** That's what we call an edge case right there. Yeah, I'd never even thought about that.

**Simey de Klerk:** I guess that's the other great advantage of using Logbot - it gets blamed, you don't get blamed.

**Jerod Santo:** That's right. \[laughter\]

**Adam Stacoviak:** This is Lobbot's problem.

**Jerod Santo:** Blame the bot.

**Adam Stacoviak:** That's right.

**Jerod Santo:** So that reminds me - talking about our show note links, Simey... You also did some work on some show notes stuff that we never really quite landed, or got finished... But you've got some ideas around -- because we have our show notes linked up in the exact same way our transcripts are. It's all on GitHub, and that's actually a two-way sync, so when our app changes things on its side, it updates GitHub, and when GitHub changes on its side, it updates our app. Because once they're published, we can go in and edit them in our admin, and we want that to be synced. So that's actually a two-way sync, whereas the transcripts is a one-way sync. A little more complicated.

But you had some cool ideas. I never even thought of this - you could go through your show notes and just check for dead links, and open up issues against dead links. The problem is there's a bunch of them; wasn't there like a bunch of them or something?

**Simey de Klerk:** Yeah, I have a branch somewhere where I got that going... So I've got a proof of concept for that; I ran it through, I ran into some interesting questions there as well. One that I learned recently through something else - I learned that one can only make 65,000 requests at a time, but I learned that the hard way through this, so I had to write some code to rate-limit and just like batch the requests out a little bit... So it was sort of the same high-level scaffolding of "Get all the files, \[unintelligible 00:51:01.19\] one by one, parse them through..." \[unintelligible 00:51:05.08\] record them somewhere. But yeah, if there's like a working prototype somewhere that I push back up... And yeah, that creates the next interesting thing about like how do you expose that? Because like you said, there are a fair amount of them at the moment.

**Jerod Santo:** Right. So our initial simplest idea is like each broken link gets its own GitHub issue on teh show notes repo, which could be thousands of issues, which maybe is too simplistic. Then we're like "Well, what if each episode gets one issue with its broken links in there, in the body of the comment?" or something like that.

\[00:51:49.18\] And now you start managing basically issue state on subsequent runs of the script, because if there's already an issue for this episode, do I update the issue? Do I open a new one every time? It actually gets to be a hairier coding problem than this one was. And perhaps just open up a bunch of issues that never get closed, and we don't care enough... I don't know. I mean, it's the kind of thing that we could put somebody on, go out and find the right link and fix them, if it's manageable.

**Adam Stacoviak:** I think the issues ways is probably the most pragmatic way of doing it... Because the issues state does become an issue later on, if you haven't gone and fixed it. And the simplest thing probably would be an editorial kind of concern. So it'd probably require some sort of autonomy to move, but with some parameters, meaning like the most likely thing to happen is just delete it, and maybe remove the link, but leave the text. And with some sort of parentheses that says "Editor's note - it was linked, but the link is now dead", or something like that; I don't know, some sort of way to communicate that.

**Jerod Santo:** Right.

**Adam Stacoviak:** But at that point, it's like "Is that really super-valuable?" I guess it's unvaluable to have links that are dead and people are potentially clicking them and getting upset, or not finding the thing that should be found... But then there might be the thing of like "Well, there's a better resource now", and then that would take some time... So each one has its own sort of particulars around to actually solve the problem of fixing the link.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** It's not just "Oh, it's dead. Found a new one." It's a lot of different things.

**Simey de Klerk:** Yeah.

**Jerod Santo:** We have people email us all the time, telling us they've found a better resource for this link that we have on our website...

**Adam Stacoviak:** Such truth, man... My gosh.

**Jerod Santo:** And we're always like, "Yeah, delete..." "No, I'm not gonna link to your spammy blog." But I think the most common case is "This page no longer exists", and then the second most common page is you actually screwed up and you messed up the link the first time, and all it is is gonna be a quick fix, or something to actually get that link fixed.

I don't know how much value there are in those show notes over time. I know people go back and listen to our old episodes... Do they go back and click on the old show note links? I suppose, from time to time... But it's like, you know, is it treasure in them hills, or is it just like you're cleaning up a junkyard?

**Adam Stacoviak:** What do you think, Simey? Since you've been a listener. Do you think there is some value in -- let's say episode \#200, for example. We're on like \#470-something. \#479 just shipped today, for example. So episode \#200, if we go back that far to a show notes list back then, and there's like 4-5 broken links - because internet happens, right? Which I think should actually be a shirt; I like that, "Internet happens..." \[laughter\] Um, what do you think? If you went back as a listener, you're like "I wanna go back to \#200." What was \#200, Jerod? Was that --

**Jerod Santo:** Well, Richard Hipp was \#203, I know that one...

**Adam Stacoviak:** I wanna say Raquel... Was it Raquel?

**Jerod Santo:** I'm looking it up. JavaScript and Robots, with Raquel Vélez. Yeah, Rockbot.

**Adam Stacoviak:** That's right, Raquel Vélez.

**Simey de Klerk:** It's impressive that you knew that.

**Adam Stacoviak:** Well, it's just \#200, for some reason I just remembered it. But that's a pretty notable episode. It may not be so greenfield, but maybe somebody goes back because they're a fan of her, and they're like "Oh, I wanna just figure out what she was talking about back in these days", or whatever. They read the show notes, there's some dead links... Maybe ones to her blog, maybe it's to something else. Would you find value, as a listener going to old-school shows, with broken links, and desiring them to be fixed?

**Simey de Klerk:** Yeah, as you were talking about it now, I was thinking through it... The one plausible scenario where it could be valuable is a new listener going through the backlog - which is probably where I was when I started discovering the thing and then going back and listening to old episodes, learning about things for the first time and then wanting to find out more... I guess if it doesn't work, then you just google the thing and you get there anyway...

I think one of the two things that the broken links that the script found was projects that are just dead and they don't exist on the internet anymore.

**Adam Stacoviak:** \[00:55:56.15\] Yeah. It's probably a lot of dead GitHub links probably.

**Jerod Santo:** Wow... So I went back to Rockbot's episode \#200 while we were talking, and just started clicking on show notes. Four of the first five were 404's.

**Simey de Klerk:** Yeah.

**Jerod Santo:** Four out of five.

**Adam Stacoviak:** Wow.

**Simey de Klerk:** Yeah, the internet is more fragile than we realize.

**Jerod Santo:** And that's 2016, so we're talking six years ago.

**Adam Stacoviak:** Well, this is a big job ahead of us then, if we're gonna commit to fixing show note links...

**Simey de Klerk:** So Hacktoberfest - just make that another thing that people can go to. It is gonna take more of your time probably to assess for each link where to go...

**Jerod Santo:** Right. We've had less value in our show notes being open than we have our transcripts, because the contributions on the show notes repo are lower-quality, and a lot of times they're people who are adding links to things, and I'm like "Was it actually mentioned on the show, or do you just think this is related?" And it's always like -- I'd have to go back and listen to know if we actually referenced it... We tend not to just put things in that are related, unless they were talked about. But I can understand where it's like "Actually, here's the best reference on this piece of content. Why not have it in your show notes?" I get that as well. But it requires a whole bunch of mental overhead... Versus a transcript unintelligible fix where I can just look at it, and it looks right, and hit Merge.

So we've had less contributions on show notes, and the ones that have come in have been just not the most high-quality contributions. And so I assume if we had a list of broken things, it'd be easier to judge for Hacktoberfest-like situations. Like, "Oh, this one was broken. Here's the fixed one." Or "Oh, I deleted a bunch, because they were broken."

**Adam Stacoviak:** And in some cases, the links there being broken is sort of nostalgic... So it's almost like a feature, not a bug even.

**Jerod Santo:** \[laughs\] Because internet happens, and this is an example.

**Adam Stacoviak:** I almost feel like they should be immutable.

**Simey de Klerk:** Maybe you then just add a "We know this is broken. Internet happens." Like a little \[unintelligible 00:57:58.13\]

**Jerod Santo:** \[laughs\] Yeah, exactly. That's kind of where Adam went with it, with like take the link out, and in parentheses say "Broken link" or something.

**Simey de Klerk:** Yeah. The other thing I think -- you mentioned one when we were discussing, Jerod... It's the Wayback Machine links, which I think will happen at times, but not always.

**Jerod Santo:** Right. Yup, that's another way of thinking about it as well. Because yeah, a lot of these -- it looks like her blog just no longer exists at rockbot.me, and so we linked to some of her blog posts and they're just gone... As well as npm camp, which apparently we talked about; npm.github.io, just gone... A couple of these are to Twitter, and those still work. There's a Google search, "You can't be it if you can't see it." I'm not sure what that Google search was about, but I think it was something that somebody said on the show... And that Google search just doesn't go anymore.

**Adam Stacoviak:** I don't know why that doesn't go either. I was trying to fix that...

**Jerod Santo:** Maybe it never did. \[laughs\] Who knows...? Anyways. So yeah, show notes... There's definitely room for improvements there, and room for automation. But it's a little bit trickier. Alright, Simey, anything else? Anything we left unsaid? Any aspect of this that's interesting that we haven't talked about, or things you're thinking about for your future in coding, or anything like that?

**Simey de Klerk:** No, I think we've covered most of my little adventure here... About how it started, how we worked together to get it there, and some of the niggles along the way...

**Jerod Santo:** Yeah.

**Simey de Klerk:** And I guess from here --

**Jerod Santo:** Well, I said it before via Slack, but I just wanna say it again audibly here... Thank you for doing this.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It was very fun for me. I enjoyed it, I love having something that exists now that didn't previously exist and going along... You and I kind of back-channeled throughout as you were working on this, and I enjoyed our interactions there. I just really appreciate that you did what you did, and you contributed this to our little part of the internet that's made it better. It's pretty awesome.

**Simey de Klerk:** \[01:00:00.07\] Thanks. I really enjoyed it, too. I learned a lot. I get a lot of joy from the fact that I now have a bit of real code that's adding to this real website and to the podcast that I am a long-time listener to, and that I really enjoy... So that gives me joy as well.

If I knew Elixir, I maybe would have poked a bit more on the main side as well, but I haven't gotten this far. I think on one of the Ship It episodes you guys talk about the process to get the main site up and running for local development. It's something I thought about, should I try and learn just enough Docker to get that going, to at least make that story easier?

**Adam Stacoviak:** I think Gerhard's waiting for Codespaces and not Docker.

**Jerod Santo:** I was gonna say, I think there be dragons in that...

**Simey de Klerk:** Is it? \[laughs\]

**Adam Stacoviak:** Yeah...

**Jerod Santo:** We're trying to get a totally online setup, where it's just like click a button -- similar to the Deploy to Heroku button on your readme. Deploy to some cloud space and just be able to start coding. We want that, we don't have that, and I know that our dev setup has gone through multiple iterations, and none of it is -- I don't even think the readme is up to date. Adam had been poking through -- because he has to set it up every once in a while, and this is like "How do we do it now?" and I'm like "I don't know, man..."

**Adam Stacoviak:** I didn't even do it on this new machine, that's how scared I am of trying to do it.

**Jerod Santo:** I have to tell you, brew-install Postgres, brew-install Elixir, and you're good to go. And that's pretty true, but not 100% true. And you're on Windows, so definitely not true. It had to be a Docker setup.

**Simey de Klerk:** Yeah, and your old slogan used to be like "Something-something open source", right? And I think I'm probably not the only one, there are probably other people... Sorry, I got it going, and then I realized I didn't actually know what it is.

**Jerod Santo:** That's all good.

**Simey de Klerk:** There's probably a lot of people who are keen to contribute, like I am, but who don't know Elixir and/or don't know how to get it going.

**Jerod Santo:** Yeah...

**Simey de Klerk:** So I think there's probably value to you if you can make that on-ramp easier; you may get more contributions around October time, or other times of the year.

**Jerod Santo:** Yes.

**Adam Stacoviak:** I'd welcome a Docker image if we weren't planning to go to Codespaces, and there's just a possibility of more awesome around the corner...

**Jerod Santo:** Right.

**Adam Stacoviak:** So I think that's where I'm held up personally, of pushing that desire... Because I'm familiar with Docker enough to use Docker. I personally wouldn't mind using it. But if Codespaces is just around the corner for us... We have two initiatives happening in the next month or two, and then I think we'll have some time potentially to focus on a Codespace dev environment if we so desire... And I think we do.

And I believe we also have a change to work with Cory and the team at GitHub to make it happen. I'm not sure how much they'll play a part in it, but they'll at least play some sort of role in guidance, or error support, something like that. So there's some sort of collaboration possible to happen there, we just have to have the bandwidth to do it.

**Simey de Klerk:** And you guys have a great platform, so I'm sure this will be good marketing for them if you're a case study. For interest for me though is that -- is it because you're ironically on a pro paid account that is not fully available? Because on my free GitHub account I have GitHub Codespaces, and I can use it on my repos.

**Adam Stacoviak:** Do we not have access, Jerod? I just figured that if we wanted it, we would just get it.

**Jerod Santo:** I think we could get access to Codespaces. I don't think we have it set up to actually run with our infrastructure all in a groove.

**Adam Stacoviak:** Right.

**Jerod Santo:** And that might just be because we haven't even tried. Maybe it's just like a 1-2-3 kind of a thing. So it's possible, I just haven't honestly put a thought into it since that Ship It episode; it's just kind of been on hold. And because my dev environment works just great, I'm just making progress.

**Adam Stacoviak:** Moving along...

**Jerod Santo:** \[01:03:50.26\] I haven't been the best steward of the changelog.com repo in terms of outside contributions, for multiple reasons. One's the dev setup, the other is there's no clear roadmap and like what are we actually working on and doing... A lot of that is because we work in fits and starts. I'm actually back on the codebase now, doing things, but I've spent months doing nothing... And then also, like you said, there's not a lot of Elixir people, and there's not a lot of -- it's difficult to work on somebody else's website without clear vision. And I don't think we always have the clearest vision, nor do we display that when we do have the clearest vision. A lot of that is because I'm not that great at communicating these things to the public. That transcripts repo issue was an example of how you ought to do so that it actually is actionable... And I don't do that very well or very often on Changelog.com, because honestly, by the time I get around to it, I'm just like "I'm gonna start working on it and coding on it."

So I think there's a lot of things that played into that not being as well-contributed by outsiders, but certainly, the dev setup aspect of it has been limping along.

And I know Alex Koutmos got it working for him, I know Lars Wikman got it working for him, but neither one of them enjoyed that process. So it's currently still work, but yeah, I think we could get it easier, I think we could get more contributors. Easier to do, and then also clear and present things to work on, and ideas. We've had contributions over the years, here and there, but it's hard to have a public roadmap and invite contributors to a website app. It's not like a library, it's not like a platform. It's like our website... But people use it, and we wanna have certain things -- you know, we've had requests, and people were like "Well, how about --" Again, we've just had somebody say there's no volume button on the player, you know?

**Adam Stacoviak:** Yeah, that could be a contribution, pretty easily...

**Jerod Santo:** Yeah, totally. So stuff like that could be, but...

**Adam Stacoviak:** And that's pretty vanilla JavaScript too, so...

**Simey de Klerk:** Yeah, I guess it's a weird and almost uncanny valley of nice-to-have, so you create an issue for it, but not so essential that you fix it immediately. It can sort of sit there and wait for a contribution.

**Jerod Santo:** Right. And there's like small things which sometimes you might just do it yourself, because it's small... And then there's like big, ambitious things where I'm not even sure how we're gonna go about it... So putting that out as an issue - I wouldn't want somebody to have to work on that, just because it's so vague right now in my own head...

So yeah, I guess digestible chunks of work, that are big enough that I'm not just gonna do them myself, but are small enough to be like this. They're just few and far between. And I probably am not looking for those opportunities, and I could be.

**Simey de Klerk:** I feel like what I've learned from \[unintelligible 01:06:36.19\] at this point what I'm supposed to ask is "Have you considered rewriting it in Rust?"

**Jerod Santo:** \[laughs\] I will take that into consideration, thank you.

**Simey de Klerk:** Yeah. So the Elixir choice is an interesting one. I get that it's something you enjoyed when you \[unintelligible 01:06:54.22\] But I think if it had been in something more common, that may have been --

**Jerod Santo:** More mainstream?

**Simey de Klerk:** ...more mainstream \[unintelligible 01:07:08.00\] to getting more contributions. But I guess, like you said, it's not always as clear. It's actually work to carve out specific pieces of work that are right for contribution, from that perspective.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** There are definitely not as many people who are familiar with Elixir as they would be if it was a Ruby on Rails application, for example, or if it was a JavaScript SPA or something, with a Node backend... But I guess I don't care all that much about those aspects. I feel like as we build out new areas -- I'm not sure I've teased it on the show or not, but... I've teased it to you, Simey - I'm thinking about doing an API and a Changelog command line, so you can play our shows from your command line, and stuff. And I wouldn't pick Elixir for those... And that is one of the reasons; I don't think it's the best tool for those particular jobs. Maybe for the API, if it's just part of the app. But for the command line tool, in terms of distribution and stuff, I think Go is a great choice...

\[01:08:10.22\] And I think that as we have maybe smaller ancillary things, like our transcripts repo, if we had a command line repo that was its own separate project in Go - well, I could see more contributions coming into there, than whatever come against Changelog.com.

Hopefully we open up new opportunities as we move along. I definitely think Elixir as a dependency has probably limited, to a certain degree, outside contributors, but I think more so it's the lack of vision and clear inroads to contributing that's done it.

**Simey de Klerk:** Yeah, and I guess what you've hinted there is I might have to learn Go now. \[laughter\]

**Jerod Santo:** I'm also gonna have to learn Go... \[laughs\]

**Simey de Klerk:** And around your question earlier, Adam, with fixing the show notes would be useful... That was another aspect of even this whole transcripts thing - is it essential? No. But it's cool, and it's fun, and it's a thing to do it.

**Jerod Santo:** Yeah.

**Simey de Klerk:** So Jerod, your idea of having a podcast player on the command line is completely unnecessary, completely over the top, and I love it for exactly that reason. I think that's sort of fun.

**Jerod Santo:** So do I. Well, hopefully that becomes a thing, and not just a thing that I talk about... We will see as time progresses. But I'm getting more and more keen on the idea -- I did write a little web server for our survey game that we pay... We play like a Family Feud style game; I'm not sure if you listen to JS Party or Go Time, but those two shows both have a Family Feud style game show format, and we have like a UI for it, and a gameboard of scores, and stuff.

**Simey de Klerk:** And the sound effects.

**Jerod Santo:** And I built that with --

**Simey de Klerk:** Is the sound effects in there as well, or is that separate?

**Jerod Santo:** The sound effects are not in the web UI, although they are for the Jeopardy game. Nick Nisi built that board, and it has the sound effects built in. This game has the sound effects just separate in our soundboard. So everything but the sound effects are in there... But it has scoring, it has highlighting etc. and the backend of that is a Go-based web server. So I've dipped my toe back into Go. That's open source on our Changelog account. There's not much to it. It's probably shorter than your transcript formatter script... But it was fun to do a little Go project.

I did one back when I was consulting, I did a Go-based API. Probably 7-8 years ago now. And this was my first time dipping back into the Go waters. So yeah, I'm also gonna be learning it if and when this Changelog command line thing starts to take shape.

**Simey de Klerk:** You've got a Go podcast, right? Can't you get some of your hosts there to get us going?

**Jerod Santo:** Yeah, exactly. In fact, Mat Ryer has already looked at my code and given me some good feedback on the very little code that I wrote. Apparently, there were things I could have done better, so... \[laughs\] No surprise there.

Cool. Well, let's call it a show, shall we? Again, Simey, thanks...

**Adam Stacoviak:** Yes, big thanks.

**Jerod Santo:** Yeah, big thanks. Pretty cool stuff. To the listener out there - check out the blog post, all the links to all the things are in the show notes... Check out this transcript, because this will be the craziest Changelog transcript of all time; the most self-referential. And if we have any infinite loops going on our GitHub Actions, it's gonna be because this episode's transcripts, so stay tuned for that one as well.

Speaking of transcripts - I have added a new feature to the website, just yesterday.

**Adam Stacoviak:** I saw this. I like this, a lot.

**Jerod Santo:** This has been a long time coming on my to-do list, which is that you can be subscribed to be notified when a transcript goes live. So this episode of Backstage will come out when it comes out, and then the transcript won't be ready for a few days, sometimes five, sometimes if he falls behind it can be up to a week. And if you want to be notified when that transcript is actually published, you can now subscribe to be notified on the episode page. So scroll down to the transcript, click the button that says -- I don't know what it says; "Notify me when the transcript is published", and we will shoot you an email. So that's a new feature. So definitely maybe try out that feature as you're waiting for this crazy transcript to post. And we need for Changelog Bot to format said transcript and see how he does.
