**Jerod Santo:** Recently, we've been overwhelmed by a lot of the crazy, super-cool tools, innovation and just stuff that people have been doing in and around Git, whether it's the Git project itself, or tooling built around it... It feels like there's something new every single week in Changelog News, so we thought we'd get together with our friend, Mat Ryer, who also happens to be a co-host at the Go Time podcast and of Grafana's Big Tent podcast, which is an award-winning podcast...

**Adam Stacoviak:** Woo-hoo!

**Jerod Santo:** ...and Go Time's an award-worthy podcast...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** ...and we thought we would just introduce some of these tools and ideas to everyone, and just talk about them. So Mat, thanks for being here.

**Mat Ryer:** Oh, thank you very much. I use Git a lot, so I'm very keen to learn more about this.

**Adam Stacoviak:** Would you say daily, or weekly?

**Mat Ryer:** It depends if it's every day or every week.

**Adam Stacoviak:** Okay. Explain.

**Mat Ryer:** Well, if you want to say something happens once a day, you'd say daily. But if it only happens once every seven days, I'd probably opt for weekly.

**Jerod Santo:** The confusing one is bi-weekly.

**Mat Ryer:** Yes.

**Jerod Santo:** Because that can both mean twice a week, and once every other week.

**Adam Stacoviak:** Two different meanings.

**Jerod Santo:** Who invented that phrase...?

**Mat Ryer:** Yeah... It's not good, is it? We have fortnightly as well, as a term, to mean two weeks.

**Jerod Santo:** I like fortnight. Not the game, but the phrase. The game kind of soiled the phrase, if you ask me, the word... Because now there's two contexts...

**Mat Ryer:** Yeah. Quake did that to me. I used to love quakes, and then...

**Jerod Santo:** \[laughs\] Like earthquakes?

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** Quake - what is it, the game?

**Adam Stacoviak:** It's like the oldest game in the world though, isn't it? It's right up there with --

**Jerod Santo:** Pong.

**Adam Stacoviak:** Duke Nukem.

**Mat Ryer:** Yeah, we used to play on -- in school we had a LAN party, and Quake 2 was the game we played. And then I used to make levels with my brother using Worldcraft, a 3D World build-a-thing, and it was so much fun...

**Adam Stacoviak:** Nice.

**Mat Ryer:** ...to be able to like build levels and then play them with your mates. You just couldn't believe you could do that.

**Adam Stacoviak:** These LAN parties, did you take a router with you, and did you pick up your entire gigantic tower PC and take it with you? Describe...

**Mat Ryer:** Yeah... Well, luckily, these were in the school library, so...

**Adam Stacoviak:** Okay.

**Mat Ryer:** Yeah. Because you wouldn't move your computer around back then. It's not like now with your phone. You can't really believe the--

**Adam Stacoviak:** The internet is your LAN.

**Mat Ryer:** Yeah, exactly.

**Adam Stacoviak:** The cloud.

**Jerod Santo:** That'd be dangerous, if the whole internet was an all-in-one LAN. Wouldn't we be pretty exposed?

**Adam Stacoviak:** Well, yeah.

**Jerod Santo:** I mean, NATs are nice... Again, two contexts for NATs, especially when you're just saying the word out loud. Let's loop back to Git. How often do you use Git, Mat?

**Mat Ryer:** Daily or weekly.

**Jerod Santo:** \[laughs\] Well, this is interesting, because you haven't been coding this much lately. This is a change for you.

**Adam Stacoviak:** Don't out him, Jerod...

**Jerod Santo:** Maybe not recently. Oh, no offense...

**Adam Stacoviak:** I would ask him for permission first.

**Jerod Santo:** No offense... Is that private information, that you're more of a leader now?

**Mat Ryer:** Well, I'm hoping to get one day promoted back to being an IC, so I can do work again... \[laughter\] Yeah, so I don't use Git -- but honestly, Git was always really complicated to me. And I was "There's so much you can do, and it's really quite complicated." So I tried to always just use the absolute minimum that I could get away with it. That's why I quite liked Git Flow, that used to give you like a workflow where you could -- it'd give you a reason to create a branch, you do your work, and then merge it back in. Yeah, so I always would err on the side of keeping it as simple as possible, because there's so much you can do with Git.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Absolutely. And so we're going to talk through some of these tools, and as we go, one of the things that's interesting to me -- obviously, not "Do you use these tools?", because unlikely, because there's so many things and you like to keep it simple...But having looked at it, seen what it does, thought about it a little bit, like are these things that we, you, me, Adam might adopt, might try? Or is it just a cool kind of triviality that's neat to look at and then move on?

So let's dive into it a little bit... Let's look at the first one, which - it's got that visual aid, it's called Git Heat Map... And this immediately reminded me of like DaisyDisk, or these tools where they search your hard disk and they show you where the big files are, and they kind of put a map out of wherever the big files are, where most of your storage is across the span of your disk, only this is doing it on your Git repo.

**Mat Ryer:** \[08:11\] Is it still file size that it's representing?

**Jerod Santo:** It's based on diff activity. So it's showing you kind of like -- what do you call it? Lines of code that churn a lot, or like the hot files...

**Mat Ryer:** Oh, I see...

**Jerod Santo:** So it's based on the history, and you can also do it to limit to certain users, and stuff, in the history... So the example that is out there in the image that's provided is on CPython, which is a project that has a long history of commits... And it's highlighting the files that Guido van Rossum changed the most. And so it shows you a layout of that, and like bright red is obviously the hottest, which is configure, and then the Doc folder, and then test and lib... So some of these things are kind of -- I don't know, they're the ones that you would guess. But I wonder if there's actually insights that you'd find, like "Holy cow, this particular file--", which I have found over time in certain repos there's certain files that are the really active ones.

**Mat Ryer:** Yeah.

**Jerod Santo:** And lots of people touching that file. And there's other ones that -- you know, actually, config is kind of surprising to me, but maybe inside Python it's different than what I'm thinking of.

**Mat Ryer:** So you've got two dimensions here, though... You've got the size of the box, and you've also got the color of how red it is. So do we know what they are? What's the size mean? Versus the -- you know, the color is obviously the most changed, I guess... But what makes something bigger or smaller? Or is it also just the same thing? It might be, by the look of it.

**Adam Stacoviak:** Well, it says you can choose the hue that you want the chart to use for highlighting. \[unintelligible 00:09:51.29\] maybe the activity, maybe this is something you can actually fine-tune what it actually is representing... I find tools like this are like "How do you use them? What makes them insightful? Is it an individual using it? Is it an engineering manager sort of looking at, to sort of get--" Because they're less in the code. Maybe you can speak to this, Mat, because you're less into code lately... You're less in the details, and so maybe you use something like this as a way to sort of like grok the bigger picture. Or maybe this is great for a presentation to the Linux Kernel, for example, and you're at LinuxConf. I don't even know if it's a real thing or not, but like, some sort of conference focused on Linux. Like, how fast is Linux moving? What is changing within the Linux Kernel? Who's doing it? etc.

**Mat Ryer:** Yeah, I can't imagine the amount of stress that goes in trying to do the presentations at LinuxConf, though... Like, trying to just connect to the projectors with Linux machines... No, thanks.

**Adam Stacoviak:** Yeah, it's an absolute shame. Well, you have to use the non-free packages or whatnot to do that. So that may be against the rules to the conference, even. Somebody that's like a super free software person, they're like "No way, man. Not gonna use it."

**Mat Ryer:** Yeah, I went to FOSDEM recently, and that's obviously open source, and they're kind of allergic to having anything that's not open source focused, of course, there. But one use case I could think for the Git Heat Map is to make sure that you have good test coverage on the things that are changing the most... Because in a way, that's where you need more stability, where you're changing the most. So I feel like a kind of mashup of that and test coverage could be very useful to see "Are we definitely covering these things that we are editing all the time?" maybe.

**Jerod Santo:** Yeah. I can also see it when you're coming to a new project that's existed for a long time, and you're just trying to familiarize yourself with the project, who's working on what, and which files are they working on the most. So I did look up the way that this thing works, and so it's a two-step process. So it basically scans through the entire Git history using git log, and then takes that history and compiles a few database tables, which tracks files, commits, the author, and then the relationships between those things.

\[12:10\] And then the second step is taking that database, querying it to create the tree map, and the query is based on both the size of the file, and then the total number of changes to the file. So there's two dimensions. And so the color, I think, is based on how hot it is, meaning how often it changes, and you can limit that to certain authors, like I said... And then the size of it in the actual tree map is how big the file is, or the folder structure is.

I think I would only use it in that context, if I'm new to a team, and I have a repo that maybe has years in history, and I want to quickly familiarize myself with it... Running the tests is a good first start, and then maybe just throwing this thing in there... Depending on how long it takes to operate, you can get a tree map real quick.

I know I've also done like CLOC, count the lines of code... And that will spit out kind of a report on a project of how many lines of code there are in each kind of programming language, like how much HTML there is, how much CSS, how much is Python. And that also helps you familiarize yourself pretty quickly. Other than that, it just looks cool, and so it's probably fun to build...

**Mat Ryer:** So on that then, how do you feel about the fact that it looks cool? Is that a good enough reason for you to have it in? Because to be honest, even if it was just an aesthetic thing, I feel like sometimes that's okay. It's like, "No, this is nice to look at, it's nice to have. We think it's cool. We kind of like it, we feel good about it." Is that a good enough reason, Jerod? Or are you like "No, give me facts!"

**Jerod Santo:** It was good enough for me. I mean, I put it on Changelog News and I'm like "This thing's cool." Sometimes it's just like, surely this person -- by the way, written by Jonathan Forsythe, so shout out to Jonathan...

**Mat Ryer:** Well done, Jonathan.

**Jerod Santo:** He was probably just scratching his own itch. He probably thought "This doesn't exist. It would be cool." I always do enjoy popping open DaisyDisk, or CleanMyMac X or whatever, and seeing that layout of my system's hard drive, and like where the big files are... And so it's like "Well, can I take that idea and apply it to Git?" It's cool.

**Mat Ryer:** Yeah, it's definitely cool. I also like doing that with Daisy Disk. In fact, I've found lots of big audio files, which were -- when we record these podcasts, we record our own audio locally. So I have lots of audio files of just my side of the conversation. Unfortunately, they also somehow make it into my iTunes, and so sometimes when I'm shuffling music... Like, I might be in the bath and I've got music on, and then it's playing music, and then it comes to one of these tracks...

**Jerod Santo:** Right.

**Mat Ryer:** ...and it's just my side of a conversation. And I just have to --

**Jerod Santo:** You could have like a Greatest Hits album with that. Mat Ryer's Greatest Hits...

**Mat Ryer:** Right.

**Jerod Santo:** You know, he just talks to himself, because -- you know, there's this interesting phenomenon now... I don't know if you guys have been out on the streets at all... But when you're out on the streets, people just talk into the air. And when they do it now, you can no longer assume that they have some sort of a mental disorder, or a problem. Because a lot of times they actually have like the tiniest little earpod in, or something, and they're not just being insane. They're actually just having a conversation on the phone, or something. And it's really strange.

**Mat Ryer:** Yeah, this actually is really good for me, because I am the person that walks around just saying things out loud... And I don't sometimes think -- like, sometimes, if I'm gonna have a difficult conversation, I'll sort of like run it over in my head, and sometimes I'll say it out loud. And I've noticed a couple of times people looking, and then I just like slowly put my hand up to my ear and just say, "Okay, thank you. Bye!" and pretend I was on the phone.

**Jerod Santo:** \[laughs\] That's a pro tip right there.

**Mat Ryer:** Yeah.

**Adam Stacoviak:** That is a pro tip.

**Jerod Santo:** I like that.

**Adam Stacoviak:** A little speck of brain science for you... It is totally okay to talk to yourself, even out loud.

**Mat Ryer:** \[16:04\] Oh. Thanks.

**Jerod Santo:** In public?

**Adam Stacoviak:** Yeah, anyw-- I mean, there's etiquette. I mean, pick your place. But you are not suffering from sort of any mental condition if you talk to yourself. Now, there are certain circumstances where it goes too far, but any normal person who speaks out loud to themselves - it's just a way that you sometimes process your thinking. Everybody's different with how they think, and so you may be a person who thinks out loud, and has to say it out loud to really believe it as fact... And so I'm here to tell you it's okay.

**Jerod Santo:** And I don't disagree with that, but I'm here to tell you that when you do it in the public places, that you will look like you're insane. That's all I'm saying.

**Adam Stacoviak:** Truth. Truth.

**Jerod Santo:** And then you just say "Goodbye!" and you put your finger up your ear, and you look totally normal again. So I learned that today. TIL.

**Adam Stacoviak:** That is a good pro tip, Mat. One thing I'm noticing is the time to generate the database. Linux is one of the repositories, CPython was one of the repositories used... And the commits on these repos are tremendous. I mean, more than a million on Linux, a little over 100,000 on CPython, and the time to generate the Git log, the Git log size... And one of the things that Jonathan mentions is wanted features, which I think is pretty cool. Obviously, faster database generations in there, sub-module tracking, rendering filters, other things... I think this sort of those things where you're like "Should this be in Git?" Probably not, right? Like, you don't want Git to be muddied with this kind of feature. So this lives in userland, and is this the best one in userland? And if so, how does this kind of thing get support, to not die?

**Jerod Santo:** Great question. I mean, I think it's the only one I've ever seen. I'm not saying it's the only one in userland. I think with typical open source, don't you just have to inspire people to collaborate with you? Like, it has to be interesting or good enough to get that grassroots support of like "Yes, sub-module tracking would be amazing. I tried this. My project has sub-modules, and it completely ignores them, but a lot of the stuff is in there, so I would love to have that. How can I help out?" There's really no other way that these kinds of projects, which really are kind of like scratching an itch, and there's no business around this... Like, this is a small-scoped thing that can really get support, unless you inspire other people to just want more from it, and then they help out.

**Mat Ryer:** Yeah, but look at DaisyDisk. I mean, that's, I think, a paid app, or it has at least paid features, doesn't it?

**Jerod Santo:** Yeah.

**Mat Ryer:** So if there is a real business use case out of something like this, then it does have a potential future.

**Jerod Santo:** Yeah, maybe.

**Mat Ryer:** But I kind of love that it's play. It's like, we play a lot, and then sometimes there's opportunities that come out of that play. And this is the thing a lot of software teams forget about, I think. They get very serious, and you forget that actually, you've got to be able to be creative, and just try things, and do things because you want to, or you just think it's cool. Just thinking something's cool is a great reason. If someone on one of my teams comes and says, "I've got this idea. I don't know where it fits, or anything, I just think it's cool", that's really compelling for me, especially because they're so motivated to actually do it.

**Jerod Santo:** Right... It's harder than the other way around, you going to them and saying, "You know what would be cool?" and then you telling them, and they're "Okay, I'll do it, because Mat wants me to, but..."

**Mat Ryer:** "Sure..."

**Jerod Santo:** But less likely to--

**Mat Ryer:** "Sure, that's cool, granddad..."

**Jerod Santo:** \[laughs\]

**Mat Ryer:** They just think I'm their granddad.

**Jerod Santo:** Right...

**Mat Ryer:** And I haven't even got any kids, so how can I be their granddad? I mean, think...!

**Adam Stacoviak:** Inquiring minds want to know, Mat. They do want to know.

**Mat Ryer:** Yeah. You can't do it, I think...

**Adam Stacoviak:** That's a great point though, the play aspect... Because a lot of things happen when you do play. I mean, obviously, your mind is different. It's in a different mode. Sometimes, as you said before -- I may be outing your potential unpopular opinion, and I won't say it... But when you make a plan, it could be too rigid. I'm dropping some hints there...

**Jerod Santo:** \[20:05\] He's totally gonna say it... \[laughs\] He's gonna ruin it.

**Adam Stacoviak:** I'm not gonna ruin it.

**Jerod Santo:** Okay.

**Adam Stacoviak:** You know, when you play, there's freedom, right? There's no constraints, there's no guardrails, necessarily... It's like, "Where can I go? Where can I explore? What should I do?" And then maybe out if it comes fruits, and maybe that can be a business, if you really wanted it to be... I mean, I think there's examples of large things in our world -- like, Flickr I think was a game at first, before it was like the photo sharing 1.0 version of Instagram, essentially.

**Jerod Santo:** Right. And Slack was supposed to be a communication tool while they built a game.

**Adam Stacoviak:** See?

**Jerod Santo:** The same teams.

**Adam Stacoviak:** Yeah, they were just playing.

**Jerod Santo:** Are they ever going to make that game?

**Adam Stacoviak:** Probably not. It's done.

**Jerod Santo:** Too busy making very successful companies.

**Adam Stacoviak:** Yeah, they've let it go. But they may play The Sims, which is a good transition to simulating--

**Jerod Santo:** Oooh...

**Adam Stacoviak:** This has actually sparked my interest, because it was like, I love to have permission to mess up, and Git Sim is the next one - visually simulate Git operations in your own repos. I think that's pretty cool, because you can think of like "What would happen if I branch? What would happen if this happened here? What would happen if I rebase that over here?" And you can sort of like have this fictitious world, this potential future, and just erase it. But isn't that kind of what Git does anyways? But this gives it to you visually. That's the difference.

**Jerod Santo:** Yeah, this visualizes it for you, so you can understand what's going to happen. And also, it's completely safe. With Git, you know that 99% of the time it's in there, right? Like, no Mater what you do. There are circumstances where you can lose data, but most of the time, even if you thought you've lost something, it's in there, because of the way it works. But you have to find out how to get it back, and that's like a huge time sink, and can be very anxiety-ridden, and all that.

**Adam Stacoviak:** And dangerous. It's like running in production.

**Jerod Santo:** Yeah. But with this, not only does it visualize it for you, which is super-cool, but it also never does it. Right? So it's kind of like a dry run in that way; the author of it did describe why it's better than dry runs, but I've lost the blog post. All I have is the repo at this time...

**Adam Stacoviak:** I do a lot of Rsyncing in my network, and in some cases I do deletion through Rsync...

**Mat Ryer:** You do a lot of arse- what?

**Adam Stacoviak:** Rsyncing. Rsync.

**Mat Ryer:** Is that like tattoos on people's backs?

**Adam Stacoviak:** Sure. Sure, Mat. Sure. \[laughs\] Arse inking...

**Mat Ryer:** Nice.

**Adam Stacoviak:** Touché.

**Jerod Santo:** Is this a hobby, or are you trying to get a new gig going?

**Adam Stacoviak:** None of the above. None of the above.

**Mat Ryer:** Can you do me one?

**Adam Stacoviak:** Let's go with the flag I'm gonna mention here, okay? So when you Rsync, especially if you're going to delete, you're moving data to or fro, from a place, and it's like "Well, I can use -n and just kind of see what it might do." And it will go and do that whole thing. And that's my favorite thing; especially with that kind of like dangerous tool, you need sort of a simulation zone, so that you can simulate.

**Mat Ryer:** Yeah. So this is interesting... Could you have this tool, but for real as well?

**Jerod Santo:** Well, once you do the tool, then you do it for real.

**Mat Ryer:** I see.

**Jerod Santo:** Or you mean you want to visualize it as it goes?

**Adam Stacoviak:** Is your question, Mat, you simulate it, like the results, and just say, "Okay, do it" button?

**Mat Ryer:** Yeah, I guess so.

**Adam Stacoviak:** Is that what you're saying?

**Mat Ryer:** Yeah. It's like commit. It's like "Yeah, that looks good."

**Adam Stacoviak:** Yeah. "It looks good. Do it." Yeah.

**Jerod Santo:** Probably it can... So I did find the part where it says, "Why aren't dry runs good enough?" Because Git does have a dry run feature, which is the Rsync one that you described there, where it will just tell you what it's going to do. And the author of this, which we should shout out as well...

**Adam Stacoviak:** Arse inking, Mat...

**Mat Ryer:** Yeah, I can't unhear it now...

**Jerod Santo:** I know...

**Adam Stacoviak:** I do a lot of R-syncing!

**Jerod Santo:** And then when you plant a flag, I'm picturing a tattoo artist with a flag...

**Adam Stacoviak:** Arse inking...

**Jerod Santo:** \[24:05\] So this tool by Jacob Stopak from the Initial Commit team, which is a team that does Git things... And he writes that there's a dry run flag in Git, which is -n also, so maybe that's a standard, or at least an idiom... It enables you to get some idea of how the command will affect the state of the repository, but he says "These commands can be useful, but not all Git commands have them." So Git has all these sub-commands, and they don't all have dry runs. And he says, "And the purely text-based output can be quite sparse, as is typical of Git's command line interface. Moreover, many people out there are visual learners, and could benefit greatly from a visual approach to simulating the impact of a Git command before running it." So imagine this tool, Git Sim, as if it's a dry run, that has complete coverage of the subcommands and visualizes it for you. This one, I could argue - put it into Git. This is just a better user experience for dry runs, potentially.

**Mat Ryer:** Yeah, this would be very useful, and probably would satisfy some of my fears here, with Git commands just being too complicated, and I don't really have the confidence that I really know what it's gonna do... Because it's very abstract, and can be quite surprising, the effects, if you're not really \[unintelligible 00:25:23.03\] with Git... So this would give a level of confidence, for sure. It'd be like "Okay, so you've typed this in.. Now, here's a picture. Is this what you meant?" And you're like "No, absolutely not. You've just saved me a lot of embarrassment. Thank you." Or the other way around.

**Adam Stacoviak:** Yeah. The --animate is a pretty cool flag, too. It animates what's going to happen. Like a presentation. That's pretty cool.

**Mat Ryer:** Yeah. It looks good, too. They have gifs on the -- I don't know, they might not be gifs actually, but they have video animations on there. I just don't want to get letters of people saying "That's not a gif. He doesn't know what a gif is..."

**Jerod Santo:** At least you pronounced it right...

**Mat Ryer:** Good point.

**Jerod Santo:** So points for that.

**Mat Ryer:** Thanks, Garrett...

**Adam Stacoviak:** It seems to be a .mp4, just to be clear, Mat...

**Mat Ryer:** Thank you. We have to be a bit pedantic, because I do get letters when I say -- sometimes I'll say something and like just being silly...

**Jerod Santo:** Which ones?

**Mat Ryer:** Oh, there's lots of them, in different orders, depending on what they want to write.

**Jerod Santo:** Okay. Daily, or -- would you say you get those daily, or weekly?

**Mat Ryer:** Yeah, I would. I would say that. I wouldn't say moreover; someone said moreover earlier. I don't think I've ever

said --

**Jerod Santo:** Well, I was reading verbatim from a blog post. So you can take that up with Jacob Stopak. I'll let him know.

**Mat Ryer:** Alright, Jason. Just come here, Jason.

**Adam Stacoviak:** Jacob.

**Mat Ryer:** Sorry, Jacob.

**Jerod Santo:** Alright, so that sentence had a bug in it... Which leads us to our next tool, Git Bug.

**Mat Ryer:** Oh, these links are brilliant. This is professional.

**Jerod Santo:** Yeah, you're really working with pros here today.

**Mat Ryer:** Yeah...

**Jerod Santo:** This one - I absolutely love this concept. So Git Bug, written by Michael... Mure. I think that's how you pronounce his name.

**Mat Ryer:** Good name.

**Jerod Santo:** Basically, it's but a bug tracker in Git. It's fully embedded in Git. You only need your Git repo to have a bug tracker. So anywhere your repo goes, the bugs are right there. It works offline, no vendor lock-in, it's fast... I'm just reading his bullet points now. It doesn't delete your project, it integrates with your tooling... So that's what's cool about it, is it bridges over to GitHub issues, to GitLab, whatever they call their issues, to JIRA, if you're in hell already... I mean --

**Adam Stacoviak:** Oh, boy. \[laughter\] Geez, Jerod...

**Jerod Santo:** Sorry... No love lost for JIRA...

**Adam Stacoviak:** Say it like you feel it, man. Say it like you feel it.

**Jerod Santo:** Oh, I never liked that tool. I don't know anybody who does...

**Mat Ryer:** I feel sorry for people building it.

**Jerod Santo:** If you do, send Mat a letter.

**Mat Ryer:** Oh, yeah. Please.

**Jerod Santo:** If you love JIRA, let Mat know.

**Mat Ryer:** Send it to Jason, he doesn't exist. I got his name wrong.

**Jerod Santo:** \[27:57\] \[laughs\] There you go. But this is really cool. I mean, how do you track your bugs, Mat? I just don't write any. That's kind of the way I do it. But how do you do it?

**Mat Ryer:** In GitHub, as issues. But actually having it in Git - and I assume there's a text file, or something, or some data file where they store this... And what's quite nice about this, I guess, is with a commit, you can also fix the bug, and then that all gets pushed at the same time. And because it's in Git, it's always correct. So if you go back and check out an old branch, you'll see the bugs that exist for the previous commit; you'll see the bugs that existed at that time. So I think that's really clever.

**Jerod Santo:** Yeah, it's super-cool. The way this is built out, it models Git's way of working. It works like Git works, it's just inside of your Git repo. It has a CLI, so you interact with it from your CLI, both adding bugs, reading bugs etc. And then it also has this little web UI built in, that you can launch and just run locally, which kind of gives it a GitHub-style issues list, with filters, and open and closed... I'm pretty impressed by this tool, actually. I think Michael did a really good job with it.

**Adam Stacoviak:** What about tracking in production, though? How does that happen? Where does it get the reports?

**Jerod Santo:** Oh, error tracking?

**Adam Stacoviak:** Yeah. Like, is a bug in there? I mean, it's kinda like the same role, isn't it? Bug tracker, error tracker...

**Jerod Santo:** How do you do it, Mat, over there in Grafana?

**Mat Ryer:** Well, I was gonna say, if there's an error, or a bug, or whatever, you just open it and I guess commit it, right? It exists at that point in the codebase.

**Jerod Santo:** Well, think about our error tracker, Adam, in Sentry. There's a ton of errors in there, and some of them turn into bugs that we open on GitHub issues. But if every error turned into a bug, then my no bugs command would be way off. Like, there's so many errors, that only -- and thousands of errors can represent the same code deficiency as well.

**Mat Ryer:** Yeah, depending on the scale.

**Adam Stacoviak:** Well, one important thing that you do though with that is like you track commits to deploys, to errors, and I guess to bugs. And I'm just wondering if you had that full circle, that comprehensive look... Because it seems it can be one-sided, unless it gets that sort of other source of truth, right?

**Jerod Santo:** I'm not following. Say it again in different words.

**Mat Ryer:** Make it mean a different thing as well, if you can.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** At Grafana we have error budgets, actually. So this is a concept that - if anyone's not familiar with it, you really should be, because it's so good.

**Jerod Santo:** Okay.

**Mat Ryer:** It's basically like we're allowed to have a certain amount of errors. And I've worked at a place before where we had a sort of non-technical -- that's the politest way I could say it, is a non-technical CTO... He's an idiot, put simply.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** And he said "No, there shouldn't be any errors. Like, why are there errors? Why are there bugs? We shouldn't have any bugs, and no errors." Genuinely, that was his position.

**Jerod Santo:** Neither of either. Okay.

**Mat Ryer:** Yeah. And like, okay, sure; it's almost like you don't really know what you're talking about, frankly, if that's your position. And so in the real world, errors happen all the time, and you're allowed a certain level, a certain budget that you can spend. And that means you can be creative and flexible, and do things, and make mistakes. So you have the flexibility to, within the SLOs --

**Jerod Santo:** Thresholds... Exactly.

**Mat Ryer:** ...you're allowed to take some risks. Because if you really don't want anything to ever break, ever, you have to do a lot more work, and you can be a lot more free if you're allowed for there to be some errors, as long as you jump on it and fix them when they happen...

**Jerod Santo:** How are those measured? Is it like errors per lines? Or is errors per week? Or how does that play out?

**Mat Ryer:** \[31:59\] Yeah, it'd be like failed HTTP requests, depending on what it is. It's like a certain number of those could fail before you consider you've got a problem.

**Jerod Santo:** I see.

**Adam Stacoviak:** A threshold. Sure.

**Jerod Santo:** That is a cool idea.

**Mat Ryer:** I think the same applies for incidents.

**Jerod Santo:** And it's just realistic, too. It just accounts for reality, and it lets you move forward, while still maintaining it and not letting it get out of hand, which is what you're trying to really fight against, is like all of a sudden --

**Adam Stacoviak:** Are you seeing g-i-t get out of hand, or g-e-t, get out of hand?

**Jerod Santo:** That's open to interpretation.

**Adam Stacoviak:** Okay.

**Mat Ryer:** Well, that's the thing - not in my accent, it's not... Because they're very different when I've pronounced those two words. And I think the G-i-t, that project, is a play on words in a US accent. I think it's like get, it's isn't it?

**Jerod Santo:** No.

**Adam Stacoviak:** Nah.

**Mat Ryer:** Is it not? \[laughter\]

**Jerod Santo:** No, it's Git.

**Adam Stacoviak:** \[laughs\] It's Git.

**Mat Ryer:** What do you mean?

**Jerod Santo:** No, it's because Linus wanted to make a joke on the term, that it's a tool for gets. Like, isn't get kind of a pejorative over there?

**Mat Ryer:** Yeah. Is that what it was?

**Jerod Santo:** Yeah. He pretty much said that, that it was supposed to be -- I should pull up the quote.

**Mat Ryer:** Oh... I thought it was like in a Texan accent, it was just like someone saying "get".

**Adam Stacoviak:** Do you wanna hear something funny?

**Mat Ryer:** What, your accent?

**Adam Stacoviak:** I'm a transplant Texan. I wasn't born here. Now, I knew a guy - I still know the guy, but I knew a guy... He was describing the parade going through downtown. And he was telling me that it was going "dan-tan." And I'm serious with you. This was when I first moved here, so I had an excuse... And I was like "What are you talking about? What is dan-tan?" He's like "Dan-tan." He kept saying it. He got louder. "Dan-tan. Dan-tan!" I'm like, "Can you please explain in different words?" And he finally says, "Downtown." \[laughter\]

**Jerod Santo:** "Oh, so you can say it."

**Adam Stacoviak:** "Finally, you can say downtown..." \[laughter\] Seriously, man... Like, "dan-tan" for like three minutes here, and I'm asking you "What are you talking about?"

**Mat Ryer:** Well, that's amazing.

**Jerod Santo:** Okay, I have the final word here... And this is hilarious, because it shows how small of a world it is. I googled it, or I technically DuckDuckGo-ed it, if that's a thing...

**Mat Ryer:** You DuckDuck Went.

**Jerod Santo:** I went there... And I found how Git got its name. And this article - this historical article is written by none other than Jacob Stopak from Initial Commit.

**Mat Ryer:** What?!

**Jerod Santo:** Yes, he wrote this.

**Mat Ryer:** Jason. He's back.

**Jerod Santo:** He's done all of this history here, and he says "Okay, when Linus Torvalds made his initial commit of Git April 7th 2005, he supplied this message: "Initial revision of "Git, the information manager from hell." That's the subject. And then he provides the deeper cut in the --

**Adam Stacoviak:** The content.

**Jerod Santo:** Yeah, what do you call it?

**Adam Stacoviak:** The body.

**Jerod Santo:** The body of the commit message.

**Adam Stacoviak:** Sure.

**Jerod Santo:** It says "Git, the stupid content tracker. Git - it can mean anything, depending on your mood. One, random three-letter combination that is pronounceable, and not actually used by any common Unix command. The fact that it is a mispronunciation of get may or may not be relevant."

**Mat Ryer:** Hello!

**Jerod Santo:** Well - it may not be relevant, Mat.

**Mat Ryer:** But it may be...

**Jerod Santo:** "Two. Stupid, contemptible and despicable. Simple. Take your pick from the dictionary of slang. Three. Global Information Tracker." So it could be an acronym. "You're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room." And the fourth one - oh, I can't actually say the fourth one. We'll have to bleep it out like crazy.

**Mat Ryer:** Beep!

**Jerod Santo:** You have to look that one up, friends... He says "This is a stupid, but extremely fast directory content manager. It doesn't do a whole lot, but what it does do is track directory contents efficiently." So there you have it, from the horse's mouth. The slang "git" may or may not be relevant.

**Mat Ryer:** Wow... Okay, good. Thank you.

**Jerod Santo:** Yeah. So thanks for that, Jason.

**Mat Ryer:** \[35:59\] Huh... I wonder what "dan-tan" would think of that. \[laughter\]

**Adam Stacoviak:** Dan-tan \[unintelligible 00:36:05.00\]

**Mat Ryer:** "Hey, Dan, have you seen thies? You gon' love it!" You know, for example...

**Jerod Santo:** That's pretty good.

**Mat Ryer:** I don't want to insult anyone.

**Adam Stacoviak:** My other friend - I give you one more...

**Mat Ryer:** Other friend... I like you just admit you've only got two. \[laughter\]

**Adam Stacoviak:** I said "My other friend." My other friend.

**Jerod Santo:** Wow.

**Adam Stacoviak:** He also had an experience on his first entry upon Texas. He came from Montana.

**Mat Ryer:** Okay...

**Adam Stacoviak:** Now Montana is, you know, Montana, as you may know... Now, he drove into town, and there was somebody powerwashing something at the gas station. And when he drove over the power wash - do you know what a power washer is, everybody?

**Mat Ryer:** Yeah...

**Jerod Santo:** I do, I think...

**Adam Stacoviak:** Just confirming.

**Jerod Santo:** I feel like I do, yeah.

**Adam Stacoviak:** Right? Power washer. He's powerwashing whatever it might be. And there's a lot of pressure in that line. And this person drives over the power washer's hose, and the guy yells at him. He says "There's 5,000 PSI there, man. It'll blow up." \[laughter\]

**Jerod Santo:** Dan-tan said this?

**Adam Stacoviak:** "There's 5000 PSI in there, man... It'll blow up." That's what he said. Like, as if you drove over this pressure washer's hose, because it had such pressure, it would blow up.

**Jerod Santo:** Well, that's a public service announcement, if you ask me...

**Adam Stacoviak:** Just so you know. Now, it did not blow up. To this day, we laugh at that.

**Mat Ryer:** Yeah. Why is that? I don't get this... You can cut this bit out, but I just want to know, just for my own sanity...

**Adam Stacoviak:** I'm gonna tell you why - because that was the first experience; it wasn't like "Hey, Welcome to Texas." "That's 5000 PSI. It'll blow up." It wasn't "Hello. Welcome. Good to see you. Get your gas here. Come get some snacks inside", or whatever. It was "That's 5000 PSI. It'll blow up!" \[laughter\]

**Jerod Santo:** I'm over here wondering how many times we can get Adam to say that.

**Adam Stacoviak:** Two more times. Two more times. I will say it on command in the future, too.

**Mat Ryer:** Amazing.

**Adam Stacoviak:** Just say "Do the bit" and I'll just do it.

**Jerod Santo:** Well, speaking of blowing up - this GitUI project sure is blowing up on the scene...

**Mat Ryer:** What is GitUI?

**Jerod Santo:** GitUI is a blazing fast terminal UI for Git, and it's written in Rust... Which brings me to a sub-topic that I want to ask you about, Mat, soon. But let's talk about GitUI first. Written by a guy whose handle is extrawurst. So he's not just the worst, he's the extra-wurst... But maybe the sausage kind, I don't know.

**Mat Ryer:** Yeah, it looks wursty, doesn't it?

**Jerod Santo:** It's wurst...

**Mat Ryer:** Extra-wurst...

**Adam Stacoviak:** Wurst...

**Mat Ryer:** "You know, it's like normal wurst, ja, but this is a bit the extra-wurst, so don't worry about it." By the way, I do that German accent to Germans and they go "What's that?"

**Jerod Santo:** It's just good?

**Mat Ryer:** No. It doesn't sound German to them.

**Jerod Santo:** Oh, it's so bad that they don't even know.

**Mat Ryer:** Yeah. Whereas everyone else is like "Oh, that's a good German accent." So I just think it's \[unintelligible 00:38:55.23\]

**Jerod Santo:** I was about to give it a compliment, because I don't know...

**Mat Ryer:** Yeah.

**Jerod Santo:** Okay. Alright, so here's extrawurst's description, or why he made this tool.

**Adam Stacoviak:** No, you've gotta do it right, Jerod. EXTRAWURST!

**Jerod Santo:** Mat, do you want to read this in the German accent for us?

**Mat Ryer:** Yeah, I'd love to.

**Jerod Santo:** It's in the doc there. The "I do most of my Git work..." That one.

**Mat Ryer:** "I do most of my git work in a terminal, but I frequently found myself using git GUIs for some use-cases like: index, commit, diff, stash, blame and log. Unfortunately, popular Git GUIs all fail on giant repositories or become unresponsive--" I've lost the accent. It went a bit French.

**Jerod Santo:** It did. It also sounds like -- the way you do it sounds very condescending as well, as if the person's like a complete idiot who's saying it.

**Adam Stacoviak:** Like you're definitely making fun.

**Jerod Santo:** So we should leave that in, but we should back that out and say, "This is totally cool, extrawurst. We don't think that you're the way Mat's portraying you right now."

**Mat Ryer:** No, I'm just doing my German accent, extrawurst.

**Jerod Santo:** \[40:00\] That's right.

**Mat Ryer:** There's a stereotype that German people don't have a good sense of humor, and it's one of those that I don't know where it comes from, because every single person I've met from Germany has like an extrawurst kind of sense of humor. Like, it's uber-good.

**Jerod Santo:** I love it. So hopefully, our friends in Germany will appreciate that... But to read it in terms that we can all understand here, he does say that a lot of the Git GUIs fail on giant repos and become unresponsive and unusable, so he built this, it's in the terminal... "Would you use it?" is the question. It's written in Rust? I know, Mat, it's not written in Go... But would you use it anyways? Because a lot of us say, "Hey, I like to keep it simple. I like to stay in my terminal." I'm in the same way. I'm gonna shout out one Git GUI here near the end... But mostly, I just use the Git command line, like you do, Mat. But what if you had more at the command line? You don't have to leave your terminal, and it's not going to choke on the Linux repo, for example; would you use this? Because it looks pretty sweet.

**Mat Ryer:** Well, I feel like I need to come out now and tell you that I actually use GitHub Desktop...

**Jerod Santo:** What?! You said you don't use the terminal. \[laughs\]

**Mat Ryer:** No, no, no. I said -- yeah, because it's like really complicated. I avoid complicated stuff. This I like because --

**Jerod Santo:** I must have misheard you.

**Mat Ryer:** Yeah, we can go back and check the recording, mate, if you're calling me a liar.

**Jerod Santo:** Yeah, do that little rewind sound...

**Mat Ryer:** \[Mat's rewind sound 00:41:34.18\] Hello! Now I'm back to doing this accent again, so...

**Jerod Santo:** No, no, go back further! Go back further! \[laughter\]

**Mat Ryer:** But what I like about this is it reminds me of early computer interfaces, like really early MS DOS type. I used to do QBasic when I was a kid, and stuff... So it has this real retro feel, which I really like. But kudos to writing it in Rust, because I feel like for the times when you really need performance like this, in this sort of case, I think Rust is a great choice.

**Jerod Santo:** Okay. So you're not offended by that.

**Mat Ryer:** No, no.

**Break:** \[42:12\]

**Jerod Santo:** So the sub-topic then... So language support, or languages these tools are written in, and therefore distributed in - we have two in Python. That was the Heat Map and the Git Sim. This Git Bug is written in Go. GitUI, written in Rust. The next one we're going to talk about, if we get to it, Git Branchless, also written in Rust... And that got me thinking --

**Adam Stacoviak:** I still can't tell if you're saying "get to it" or "git to it." I mean, you're really getting me here.

**Jerod Santo:** If we do it dan-tan...

**Adam Stacoviak:** Did you see that, Mat? You liked that one, didn't you? You're really getting to me...

**Mat Ryer:** You're really getting to me...

**Adam Stacoviak:** I'm sorry, I had to pun it out there...

**Jerod Santo:** Fair enough...

**Adam Stacoviak:** Install I think is all that matters, right? I mean, in the end.

**Jerod Santo:** Well, that's the question. For me, it is. For Mat, I wonder if you're feeling like maybe Rust is starting to eat Go's lunch for command line tools...

**Mat Ryer:** Well, I mean, first of all, I think - yeah, it's about what's the easiest thing to run. And if it's Python, and I've got some weird, borged Python thing, and I have to fix it or something, then that's a big barrier for me. But if Python is your bread and butter, then I feel like that's okay. I just don't use it enough that I have any confidence in it. So I do like that you get a single binary.

**Adam Stacoviak:** You do the talking, Jerod. Can you mention PIP install, your feelings about it?

**Jerod Santo:** Yeah. If it's PIP install for me, I just have anxiety... Even though it works most of the time. It's the same way -- and hey, old school Rubyist, but if I see your tool and I see it's written in Ruby, I'm kind of like "Uhm, do I want to mess with this?" And that's how I am with Python as well. Their stories are just fraught.

**Mat Ryer:** Do you not use GitHub then? That's Ruby, ain't i?

**Jerod Santo:** Well, I don't mind the website. I'm talking about a tool that I'm going to install, with dependencies, locally. Yeah. I have no problem with Ruby-based things. But if you say gem-install this tool, I'm like "You know what? I don't really trust my Ruby environment over the course of years on my Mac", and I'm the same way with Python. Whereas with Go, and with Rust, it seems - and JavaScript had the same bad story for me, but Deno with TypeScript is showing some new opportunities to have universal binaries, which is cool... I'm just way more likely to say "If you can just grab a binary, drop it in your path and execute it, I will do that 100 times a day." But if your tool says PIP install, or it says gem install, or says npm install, I'm kind of like "Do I want to mess with this?" That's just my sense. Does that resonate with you guys?

**Adam Stacoviak:** Especially if you're on Linux proper. Like, if you're on Mac, it's different, because you kind of have to use Homebrew, or PIP, if that's the way you want to go, or maybe vanilla straight-up Ruby, or a binary. But if it's on Linux, it should be in Apt, or whatever flavor, Yum, or pick your -- it should be a package. Or you should have to update your registry with whatever package directory you want to use, and apt update, and get that, and install. That's my feelings. I don't like to PIP install anything if I don't have to.

**Mat Ryer:** Yeah, when I get a new computer, which happens more than I can justify, I don't like it when the first time I'm forced to just add all these tools to be able to install stuff. I feel like it's a nice, clean machine, and then I hold off and hold off...

**Jerod Santo:** You're muddying it.

**Mat Ryer:** Yeah. At least if it's a Go binary, I can delete the file and it's gone, and I know where it is. When I install -- I didn't know what happens when I npm install something. Sometimes I'll do that in the wrong folder, and then I'll get a Node modules folder on my desktop, which is synced through iCloud... You know what I mean? It could be a can of worms.

**Jerod Santo:** Right.

**Mat Ryer:** So I am, yeah, into that simplicity thing. But if I'm already using that toolchain, if it's a tool for, say, people who are writing Node, then it completely makes sense that it would be written --

**Jerod Santo:** Right.

**Mat Ryer:** Yeah. If it's a data tool that's going to be used mostly in Python, then I think you also can get away with it, although you still have version issues. But yeah, you can't -- I mean, just a single binary, I love it.

**Jerod Santo:** General-purpose tooling that wants to be used by people that are outside your particular ecosystem, ideally, should be packaged in a way that we can just isolate it, install it, drop it in our path and execute it.

**Mat Ryer:** And delete it. Uninstall easily.

**Jerod Santo:** And delete it without worrying about it just like spreading files all throughout your disk.

**Mat Ryer:** \[48:00\] I remember on Windows I used to sometimes -- like, I'd install something, and then I'd be like "Oh, I want to uninstall that", and there's no way obvious way to do it, and you google it, or you DuckDuckGo it, and it's like --

**Jerod Santo:** You went there...

**Mat Ryer:** "Okay, you have to remove these files, then Go and find these files and remove them, then open the registry if you want to remove these values from the registry..."

**Adam Stacoviak:** Gosh...

**Mat Ryer:** You know, like --

**Jerod Santo:** Yeah, and it scatters its changes throughout your registry, and you're like "I have one global registry and I don't know all the places that it has been changed. Yuck."

**Mat Ryer:** Yeah. You actually had to do occasional just reformat your computer to clean it all, and that used to bother me. And I like on a Mac that applications are mostly contained inside that single \[unintelligible 00:48:44.18\]

**Jerod Santo:** Mostly. But not entirely though, right?

**Mat Ryer:** I know, not entirely. Yeah.

**Adam Stacoviak:** I think with the M1 there's more \[unintelligible 00:48:48.24\] Homebrew move to the opt directory, I believe...

**Jerod Santo:** Oh, yeah. Yup, Homebrew installs into opt now, versus usr/local. And I can't recall why that was, but that was a new change in order to --

**Adam Stacoviak:** I'm sure some sort of security enclave reasoning, right?

**Jerod Santo:** Maybe...

**Adam Stacoviak:** It's just challenging, yeah. I mean, you've got P-lists that spread about, you've got something that might be in my application support folder, or just, it's a -- give me a good, self-contained uninstaller with the thing. Give me the eject button, whether it's an application that I install as a literal Mac app, or a dev tool... Give me an uninstall flow that respects my system. Because I'm sure you, developer developing it, care about your system, keep it pristine, and with reluctance install new things when it's a new machine, for sure.

**Jerod Santo:** Yeah, I think the only upside of that style is that you do have preferences that persist if you uninstall and then reinstall, or upgrade.

**Mat Ryer:** Yeah, but you don't always want that, do you?

**Jerod Santo:** Exactly. But sometimes you're like "Oh, I actually don't have to redo this. That's nice." It has pleasantly surprised me once or twice, but most of the time I don't want it. I want it to be completely gone.

**Mat Ryer:** Yeah. Sometimes I'll uninstall something because I can't figure out how to change a setting back; and then I uninstall it, and then I reinstall it, and I just remember the settings.

**Jerod Santo:** It's right there. Yeah, it's right there for you. It's waiting for you.

**Mat Ryer:** And I'm like "Where's the registry? Is there a registry?" But I'm on a Mac, so there isn't.

**Adam Stacoviak:** Another culprit is installing something to .local, in your root directory - or your home I guess - and not removing it, or putting it in like a hidden folder? I mean, obviously, I'm going to do an LL, or L, depending upon what your flavor of --

**Mat Ryer:** How \[unintelligible 00:50:34.29\]

**Adam Stacoviak:** ...LS you use... I mean, if you've got an alias or whatnot - which I do, because I use Ohmyzsh...

**Jerod Santo:** He doesn't have the time to type L twice.

**Adam Stacoviak:** Yeah, I don't like, you know--

**Jerod Santo:** Just once. Nobody has time for that.

**Mat Ryer:** Yeah, you're a busy man.

**Adam Stacoviak:** Why two when you can just do one?

**Mat Ryer:** Good question.

**Jerod Santo:** Alright, so quickly, Mat, respond to my second question, which was "As a gopher, as a representative of the Go community, do you feel like Rust is encroaching on your previously standalone domain of like these command line installable tools?" Like, there's a lot of new tooling, whereas Go was like THE thing for a little while, where it's like "And it's written in Rust." Does that make you feel intimidated or encroached upon?

**Mat Ryer:** No, no, I remember when Go was becoming that, and I would always say at the time "Write it in whatever you want. Whatever is the right tool for the job." So that attitude - I don't really deviate from that. I don't think Rust will just defeat Go, because it's really hard to learn, and that's the trade-off you make. It's much harder to learn, much harder to write Rust, but the trade-off is you get much more secure, much safer execution... And I guess if it compiles, you've got a high chance it's going to be correct. So there's benefits there. But Go - I don't know if it's just... Like, we'll see how that trends happen. Definitely there'll be trendy sort of things going around, but I don't know. I think they'll coexist, basically, forever, these two.

**Jerod Santo:** \[52:15\] Fair enough. I was hoping for a less reasonable and nuanced position, but you know, I can only expect so much...

**Adam Stacoviak:** So reasonable...

**Mat Ryer:** Okay. Well, in that case, I could get my guitar and do an Anti-Rust song, if you like.

**Jerod Santo:** Okay, I do. Oh, we're in for a treat here... Mat has left his chair, his Mac display is tracking him throughout the room... He's back... He has a guitar.

**Mat Ryer:** The Mac display is annoying, because it follows you around when you move, and you sometimes --

**Jerod Santo:** Yeah, talk about surveillance capitalism, huh?

**Mat Ryer:** Yeah. I'll try and sometimes move out of frame to pick my nose, and then the bloomin' camera follows me and everybody sees it.

**Jerod Santo:** What's the song called? Anti-Rust song, or what?

**Mat Ryer:** Yeah, I don't know... Yeah, I guess that's what it's gonna be.

**Adam Stacoviak:** Let's call it Rust Away.

**Mat Ryer:** Oh, yeah. Okay, yeah. I should just do it. We can always cut this, can't we?

**Jerod Santo:** No...

**Mat Ryer:** \[laughs\]

**Jerod Santo:** It has to go in.

**Mat Ryer:** \[53:11\]

Hey baby, what're your typing in...

I ain't never seen such crazy things...

What the heck is all this gonna do...?

I've got some very bad news for you...

We're gonna Rust away...

Gonna Rust away...

You're gonna Rust away... Today.

Rust Away. Mat Ryer.

**Jerod Santo:** Woo-hoo! \[laughs\]

**Adam Stacoviak:** Can I critique?

**Mat Ryer:** Yeah...

**Jerod Santo:** "Can I critique?" No, you're gonna hurt his feelings.

**Mat Ryer:** No, do it, because it wasn't great...

**Adam Stacoviak:** It won't hurt your feelings. So if there was a version two... Let's say you go away and you think about sleeping, maybe you sleep a little bit, and you dream, and you think "Well, this is actually a hit song. I could probably do something with this", I would just encourage you to put a little bit more Rust lang specifics into it.

**Mat Ryer:** Yeah, I don't know enough to do that. I was thinking that. I was going to mainly focus on like --

**Adam Stacoviak:** You could have mentioned \[unintelligible 00:54:35.13\] or anything. I mean, really anything.

**Mat Ryer:** Yeah, but my knowledge is really limited. I was gonna focus on like --

**Jerod Santo:** \[laughs\] It was really -- it was really quite awful, actually.

**Mat Ryer:** Yeah. I was gonna focus on like vulcanizing things, and actually -- you know, to prevent Rust. Like they use painting, and stuff, to protect the metals, so they don't rust.

**Adam Stacoviak:** \[unintelligible 00:54:57.28\]

**Mat Ryer:** Rusting metal, why would you want that? Red iron oxide... There's lots of ideas, but...

**Adam Stacoviak:** Sure.

**Mat Ryer:** ...yeah, it just didn't happen. I'm sure if Dan-tan had done it, he would have done a much better job, because I know he's particularly good at songs.

**Adam Stacoviak:** Dan-tan! So one quick hat nod to the GitUI project is that it seems to be easily installable, regardless of originating language, which is super-awesome... Just to bring it back. Great song, Mat. Thank you for sharing that with us. It was awesome.

**Jerod Santo:** I was going to hop in and start singing with you, but my skills are a bit rusty, so...

**Adam Stacoviak:** Ha-ha-ha...

**Jerod Santo:** Sorry about that... Let's move on. Git Branchless. This is our last one of the list here... A high-velocity monorepo scale workflow for Git. This is like a grabbag of utilities. It's a weird name, Git Branchless, because it doesn't have anything to do with branching, really... But it adds a bunch of cool stuff, like Git undo...

**Mat Ryer:** \[56:00\] It's a good name then, isn't it, Jerod?

**Jerod Santo:** Like, there's no branching?

**Mat Ryer:** Yeah, it's branch less. And you're like "Oh, I don't know why it's called that. It doesn't have anything to do with branches." But it's called branch less. That's not an impression of --

**Jerod Santo:** Yeah, but why would you name yourself based on what you have nothing to do with? I just feel like it's not the way to do it.

**Adam Stacoviak:** Yeah. Maybe because they're against it, and so they didn't --

**Jerod Santo:** I don't call myself Jerod Rustless because I don't write any Rust...

**Mat Ryer:** Good name though... **Adam Stacoviak:** Nice name. I like that.

**Mat Ryer:** It sounds like a cool guy.

**Jerod Santo:** I'll consider it. They call me Jerod "Rustless" Santo.

**Mat Ryer:** That is a cool name.

**Adam Stacoviak:** Okay.

**Jerod Santo:** That is pretty cool. I might pick that up, actually... Alright, I revoke my argument. The point is, there's lots of cool stuff here. Smart log...

**Adam Stacoviak:** Git undo, Git restack, Git sync, Git move... Lots of good stuff.

**Jerod Santo:** Written in Rust - so it's not rustless - by Walid Khan, and been out there for a while... But not too much to say about this on the show from me necessarily, except for that it's just a lot of very nice user experience improvements in your command line Git. So if you're not like Mat, using GitHub Desktop, and you're a real dev using the command line, then maybe check out Git Branchless.

**Adam Stacoviak:** Yeah. In terms of naming - you know, same song, different singer, since we're talking about Rust Away, and Mat's doing some jingles for us, I was thinking Git utilities. I mean, it's a bunch of utilities. Why not like make a standard utility library?

**Jerod Santo:** Right.

**Adam Stacoviak:** So I googled it, and there is a Git Utils, but it's not maintained.

**Jerod Santo:** Well, no wonder you didn't name it that.

**Adam Stacoviak:** It's not maintained, and it's sort of like -- I wouldn't call it dead, but the last commit was two years ago. It's probably either perfect software, or unmaintained. Right?

**Jerod Santo:** It's tough to tell the difference sometimes. I was just talking about this recently, I think on Changelog News, on a post about quitting... What's the difference between quitting and being finished? They're quite a bit different. But with open source, you can't tell, like, "Is this thing unmaintained, or is it actually finished?" Some things are just done. Other things are abandoned, and you've got to find out which is which.

**Mat Ryer:** Yeah, this is always the problem that I have, because people - one of the ways they decide if a project is worth using is they'll look when was the last release... And we're almost at the point where we're just gonna do releases regularly for the sake of it, even if nothing changes. And it sort of encourages bloat, it encourages feature bloat as well. When a tool kind of nails it, you don't need to keep going on that. But similarly, software's never finished, and so it's not so simple. But yeah, tough one.

**Adam Stacoviak:** We almost need like a health meter, or something like that, like built into GitHub, or an external socket; like, they do a lot of security stuff externally from the repository, regardless of its origin, whether it's GitLab, GitHub, or whatever. We almost need like a health meter, or at least a democratized version of it that's like "Okay, this may have had a commit two years ago, but it's still -- it's being used." Like the downloads are still way up, for example, or this release is getting pulled constantly into other things. There has to be a different metric than just simply last commit.

**Jerod Santo:** GitHub does have that Pulse page, which they've kind of hidden that... But the Pulse, which is kind of that, but it's kind of like what's been going on on this project recently... And you can at least go there and see, "Well, there's been 17 new issues and no response." To me, that's probably abandoned, because it's generating issues for people, but not even being responded to... Generally, finished software's at least -- I mean, there's still going to be things that come up over time, but kind of less bugs per response... And then there's like PRs merged recently... It'll just show you like what's been going on. It's not exactly health, though; it's more like recent activity, which can be a proxy for health, but not always.

**Adam Stacoviak:** Well, I have good news for you, Jerod. Doneorperfect.com is available. I mean, we can encourage somebody to build a tool called DoneOrPerfect.

**Jerod Santo:** \[01:00:10.01\] So you've gotta pick which one it is?

**Adam Stacoviak:** \[unintelligible 00:58:39.00\] Done, or perfect.

**Jerod Santo:** So I don't understand. I guess you're gonna mark your project as done, or perfect?

**Adam Stacoviak:** Well, it just was on the whim here. I'm trying to create a Rust Away song for you, man... Come on, give me a dime.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** No, just some sort of -- I mean, I don't think that the insights tab is that insightful in this regard. So maybe there's something that can be done. Maybe it's a fun project; like Mat said, this is just a fun thing. And then maybe GitHub acquires you, and then next thing you know you're a millionaire or a billionaire, or you've got some stock options in the juggernaut that's called Microsoft, that's just like slaying it out there... You know...

**Jerod Santo:** Alright...

**Adam Stacoviak:** I don't know...

**Jerod Santo:** That escalated quickly.

**Adam Stacoviak:** One could dream, right?

**Jerod Santo:** So if you register doneorperfect.com, you're gonna be a billionaire with Microsoft's stocks.

**Adam Stacoviak:** If you execute well, yeah.

**Mat Ryer:** Yeah, probably.

**Adam Stacoviak:** If you do it. Just do it.

**Jerod Santo:** Alright... Should we hop to unpopular opinions, or should we -- we have more things that we've shared that are Git-related, but we can also just get on with it.

**Adam Stacoviak:** Maybe a state of Git internally here...

**Jerod Santo:** Okay.

**Adam Stacoviak:** Like, how do you Git, Jerod? How do you Git, Mat, and Adam, how do you Git? ...speaking to myself.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Are you a simplicity person, Jerpd? I know that you just use terminal.app, not iTerm, or even Fig or...

**Jerod Santo:** Correct.

**Adam Stacoviak:** ...what else have we had on the show?

**Jerod Santo:** I do use Zsh now, versus Bash...

**Adam Stacoviak:** By force.

**Jerod Santo:** I use it as if it's Bash...

**Mat Ryer:** I can't believe you were having a go at me for using GitHub Desktop, and you just use the basic, the first, the only thing that's already installed when you get your first computer.

**Jerod Santo:** You mean a terminal, like real developers do?

**Mat Ryer:** Oh, I don't subscribe to that...

**Jerod Santo:** \[laughs\] I don't actually either. But...

**Adam Stacoviak:** He's being funny.

**Jerod Santo:** ...I do use it, and I do use it almost exclusively. Now, I like a Git GUI myself, so I can get graphical... And the one that I prefer...

**Mat Ryer:** \[singing\] "Let's get graphical..."

**Jerod Santo:** ...is called GitX. Now, GitX has been a long, long time project that's gone through multiple forks and abandonments and community pickups, as macOS has changed dramatically over the years. So there was this Rohan -- I think it was Rohan J. had a fork of GitX, that they maintained for a while after the original GitX author didn't want to do it anymore, and then that went unmaintained... And I went searching, actually, for a GUI, specifically for a few things. I like to do staging, and committing, especially like - what do you call it, chunk commits? Specific lines of a file, and like selecting all that... I like to do that in a GUI, and not from the command line, because it's just clunky from the command line. That's the main thing I do inside of a GUI. And so GitX was gone for a while; it was just like abandoned, and I was super-sad, I started looking for a new one... And then it got revitalized in the last year or two by the community. This is like the best side of open source, right? People that loved it and wanted to use it picked it back up, and now it's under like the GitX GitHub org even, it's not some user's account... And it's an open source Git GUI for macOS that's under active development once again... Mostly maintenance mode, but I'm happy in maintenance mode, because...

**Mat Ryer:** Perfect.

**Jerod Santo:** ...it's a good GUI. And I don't need any new features, honestly. It does what I like, and I like what it does. And so that's what I use - I use the command line for most things - Git log, Git status, simple commits, like git commit -all with the message command line, push and pulls command line... But staging, reviewing - that kind of thing from GitX. So I would highly recommend that for macOS users.

**Adam Stacoviak:** \[01:04:21.23\] Let's give it a little shout-out, since you mentioned the fact that this is being maintained. Thank you to -- this is not sponsored, but I am a fan... Mac Stadium. In the footer of the readme it says -- oh, that's the license. Nevermind. The one before the last, not the very, very end of the readme, almost to the end of the readme, it says "This project is supported by Mac Stadium open source developer program." And they give them a free Mac Mini for their CI. So they say "Thank you to Mac's team." So I mean, that's super-cool. I think we should do like shout-outs, Jerod, to like those that are supporting open source in some way, shape, or form, just like giving services away, to enable just no new features, but just stability, right? Just keeping the thing alive.

**Mat Ryer:** Well shout-out to me, then. I donated an M1 MacBook to the Whales Project, which is Whales app. You know, you can build desktop apps using JavaScript, and they're great. They feel like native apps, and I wanted to support that project. I don't talk enough about what sort of open source hero I am, frankly...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, that's what we have here, Mat...

**Jerod Santo:** Could you sing yourself a song about yourself, maybe?

**Adam Stacoviak:** "Mat is a hero in the open source world, yeah, yeah, yeah," That's the chorus.

**Mat Ryer:** Pretty good. Well, I did write Testify, which is Go's big -- that's the testing framework that everyone uses in Go. Well, we had you on the show talking about your stuff. You've got BitBar, you've got Xbar... Right? So you've got your open source bona fides...

**Mat Ryer:** Yeah, but because I'm so modest... I'm probably the most modest person in the world.

**Adam Stacoviak:** You seem very modest.

**Mat Ryer:** Yeah. And it's a big weakness, because--

**Jerod Santo:** It's your greatest weakness, actually.

**Mat Ryer:** Yeah, I don't know... I do myself a disservice.

**Adam Stacoviak:** So this M1 MacBook Pro - it's being used by someone to maintain Whales, I assume? Are they sharing it and mailing it around?

**Mat Ryer:** I love the idea of that, but no, they -- someone has it and they use it to...

**Jerod Santo:** Like a CI?

**Mat Ryer:** No, no, they're using it to actually test... Because you're building desktop apps, and so M1 was very different, and they wanted to... Yeah, there was work to do there.

**Adam Stacoviak:** That's true. That's a great point, too. I mean, when you do platform-specific development and you don't have the latest rev of Apple silicon, you need that, and maybe don't have the cash to shell out, or want to, because this is just a fun thing to you. You need supporters. That's cool.

**Jerod Santo:** Right.

**Mat Ryer:** Yeah. And of course, you can sponsor a lot of projects now on GitHub... So I recommend that. And I don't think enough companies do that. If you're a company and you use some open source project, and you can sponsor it, I feel like you just should. We should make that more normal, really... Especially if you make money off that project, directly or indirectly.

**Adam Stacoviak:** For sure. Well, again, MacStadium.com. Shout-out to them. Super-cool.

**Mat Ryer:** Super-cool.

**Adam Stacoviak:** So you're a pretty simplistic Git user then, Jerod. You mainly stay command line only, except for visual specifics.

**Jerod Santo:** Yeah. Keep it simple, you know...

**Mat Ryer:** You're a simplistic Git. That's what he just said to you. I love that.

**Jerod Santo:** \[laughs\] And I owned it. I do agree. Clip it.

**Adam Stacoviak:** Well, I paused. Simplistic Git user.

**Mat Ryer:** Yeah, you did pause. And that's where we'll do the cut.

**Adam Stacoviak:** Yeah, I had to do that.

**Mat Ryer:** Yeah.

**Jerod Santo:** Just remember that I had to describe to you guys what Git meant earlier in this show, so... I'm not sure which one of us is simplistic. But...

**Adam Stacoviak:** Well, that's just because you DDU better than we do. Or DDG.

**Jerod Santo:** \[laughs\] I thought you'd at least go DDW, I duck-duck-went faster than you guys... \[laughter\]

**Adam Stacoviak:** \[01:08:00.20\] Alright, Mat, your turn... How do you Git? How do you Git?

**Mat Ryer:** I like to keep it simple. I'm a simple Git. If it's complicated, if it's like "Oh, there's a conflict in this file", I'm like "Forget it. I'm out." I just put in my letter of resignation. \[laughter\] No. Yeah, I tend to use GitHub Desktop as much as I can, and then I'll go into the command line if I have to, if things aren't working for me. I'm not one of these -- like, some people like Jerod a couple of times hinted at being like "I'm not a proper dev, because I use desktop apps", and stuff like that. And I know, Jerod, you're joking... But I still have a song for you.

**Jerod Santo:** Well, I'm also serious... No. Oh, you have a song for me? Uh-oh, look what I did... Look what I did...

**Adam Stacoviak:** Gosh... Two songs in one show. Is this possible?

**Mat Ryer:** Don't say that, because hopefully the first one gets cut.

**Adam Stacoviak:** No, it's not getting cut. What's the title of this song?

**Mat Ryer:** Keyboard Wizard.

**Adam Stacoviak:** Keyboard Wizard. Okay, good.

**Jerod Santo:** Ooh...

**Adam Stacoviak:** I feel like Howard Stern. Pause one second... Howard Stern does a great job of having awesome artists on his show to do like renditions of their song in a live version. I feel like Howard Stern right now. Like, what's your song title? Okay, go ahead. Go, go.

**Jerod Santo:** All we need is an awesome artist, and then we will be him.

**Mat Ryer:** Well, meanwhile, you've got me.

"I don't care what you wear, I don't care if you swear...

It doesn't mean that much to me...

You can do what you need, do as you please...

You'll hear no argument from me...

Except "What's your IDE?"

Your IDE, please... I want to know so I can see...

Are you a VS Coder like me,

Or are you one of those keyboard wizards that you see...?

Oh, speaking of which...

I'm a keyboard wizard, I don't need no mouse...

Get that trackpad away for me...

I know combinations that'll rock your foundations,

I dare ya, screen-share with me...

Screen-share with me... Screen share with me...

I want to know so I can see...

Are you a keyboard wizard? I don't need no mouse...

A trackpad is just a rectangle as far as I'm concerned...

Because I'm a keyboard wizard..."

**Jerod Santo:** Wooh! That one's a keeper.

**Mat Ryer:** Yeah, that's a keeper. That one I actually did right.

**Jerod Santo:** That's a good one.

**Mat Ryer:** Thank you. But also, very serious point there, which is, you know, let people just use whatever tools they want. Don't make us feel bad because we can't get out of Vim, just because we can't quit Vim...

**Break:** \[01:11:08.14\]

**Jerod Santo:** Well, that leads me to a serious question, though... As a VS Code user, have you done any of the -- Because VS Code has a bunch of Git stuff built into it? Have you tried any of that stuff? Do you like it? Or are you just like "I'm happy with the GitHub Desktop, I don't care"?

**Mat Ryer:** Actually, yeah, for the simple -- just like stashing, committing changes, I'll just use that in the IDE, because it's right there exactly. And then if it's a little bit more complicated, I'll open GitHub Desktop, and then if I can't do that, I'll phone up one of my smart friends like Jerod and ask him "What do I type in to make this fix, please?"

**Adam Stacoviak:** Debatable...

**Mat Ryer:** Yeah.

**Adam Stacoviak:** Hostinger Tutorials mentions that GitHub Desktop -- it specifically says... If your remote repository is on GitHub, they say "This tool will be the most useful for you." So, I mean, that's a large tribe, right? I mean, a lot of people have software there. But I do agree that at some point you graduate; it's like "Well, certain things can be done via the command line. I'm here... Why eject and go somewhere else?" Certain things should be done. If you're in VS Code, why not use some of the visual aids inside VS Code? I do that. I might add a file to a commit that I'm staging up and whatnot, and type the message in, and along I go. Why go to a full-on GitHub Desktop experience? Well, maybe you're visualizing, or you're doing something with issues, or maybe there's a PR going on, and it's a bit more complicated and a bit more GitHub-specific.

**Mat Ryer:** Yeah.

**Adam Stacoviak:** It makes sense.

**Mat Ryer:** Yeah, it does. Use whatever tools you like.

**Adam Stacoviak:** So, for me, thank you for asking...

**Mat Ryer:** Adam, what's your favorite ever song? \[laughs\]

**Jerod Santo:** Favorite ever song?

**Mat Ryer:** Yeah, you're gonna have to pick.

**Adam Stacoviak:** Okay... Well, I'm gonna go to your side of the pond. I might say something from the Beatles. I'd probably pick from Yesterday... Actually, I'm a big fan of the movie Yesterday. Have you ever seen this movie?

**Mat Ryer:** Yeah. What a great premise.

**Adam Stacoviak:** Amazing, amazing movie. But it's a great song, too. So I'm a Beatles fan.

**Mat Ryer:** The premise of Yesterday is this guy just discovers that the Beatles never existed, and so no one knows them... But he knows all the songs, and he's like a songwriter. So he just pretends he writes the Beatles songs...

**Adam Stacoviak:** That's right.

**Mat Ryer:** \[01:16:05.16\] ...and then they're all hits, and he becomes a super-famous chap. Yeah... I love that. I also love the Beatles very much. I have an original Sergeant Pepper's album in mono, which is good... I just listen to it in one ear, because you might as well... And yeah, it's just beautiful. Paul McCartney, I think - probably one of our greatest ever songwriters... You know, just amazing.

**Adam Stacoviak:** Phenomenal, phenomenal artist. So yeah, my answer is that. I mean, I think the Beatles is on my list of top artists, top songs. Like, if I had to pick a song on replay forever, I would say don't. But if I had to, if it was by force, absolute force...

**Mat Ryer:** Hang on, what's the situation?

**Adam Stacoviak:** I don't know, I don't want to speculate, but it's probably terrible...

**Jerod Santo:** Gun to your head, or...?

**Mat Ryer:** They've got your kids?

**Jerod Santo:** Ooh... The phone calls come from inside the house?

**Adam Stacoviak:** Come on now... Do you want to do a Liam Neeson situation here? You want to go there, Mat?

**Jerod Santo:** \[laughs\] Oh, Mat loves Liam Neeson. He does the Liam Neeson.

**Mat Ryer:** \[in Liam Neeson voice\] "I don't care who you are... I want you to listen to the same song on repeat forever... Or I will find you!" "Yesterday! No Mercy!"

**Jerod Santo:** \[laughs\] Oh, gosh... You played into that brilliantly. Mat, I knew you had a Liam Neeson up your sleeve, and so you were just waiting for an opportunity there.

**Adam Stacoviak:** I figured you could do that.

**Mat Ryer:** Yeah. I can't wait for someone to mention Jack Sparrow. \[laughs\]

**Jerod Santo:** I think we've drained Mat of all of his talent on this one episode. I mean, do you have other bits? We know you have Jack Sparrow, but... I mean, you've pretty much done --

**Mat Ryer:** Yeah, the German character, Hans...

**Jerod Santo:** The German character... \[laughs\]

**Adam Stacoviak:** Speaking of other modern famous singer/songwriter - Ed Sheeran. Can you do an Ed Sheeran version? You also sing a lot, too... Do you like the guy?

**Mat Ryer:** I think he's a great songwriter, actually. So yeah, I think he's good. But no, I can't -- I mean, does he have a distinctive voice? I mean, he does singing, but...

**Adam Stacoviak:** Yeah, for sure.

**Mat Ryer:** ...but talking, I don't know. I could do Beatles though, if you like... I can do every beatle.

**Adam Stacoviak:** Okay, sure.

**Mat Ryer:** They're all different.

**Adam Stacoviak:** Ringo. You can do Ringo?

**Mat Ryer:** Of course I can do Ringo. He's very bouncy when he talks, you know... That's Ringo. And he sounds like he doesn't know what he saying... But he does, you know. And Paul McCartney is a bit like that too, bounces around, but

he's a bit more upbeat, and also, he seems to know what he's doing... John Lennon was always very wiry in his voice, you know, when he talks. So it's very different. And then you've got George, who's my favorite, because George doesn't really sound like he's all there, but \[unintelligible 01:18:51.14\] Did you know that?

**Jerod Santo:** Right... Pretty good.

**Mat Ryer:** \[starts playing the guitar\]

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** \[laughs\] Look what you've done, Adam... You've opened up this can of worms. You can't put the worms back in the can. I love it.

**Mat Ryer:** Can you actually get cans of worms? Like, can you buy them?

**Jerod Santo:** Oh, of course.

**Mat Ryer:** For fishing, or something. Or just eating.

**Adam Stacoviak:** For sure. You can literally get them, and you can figuratively get the version that's a simulation, or not really the can of worms. You could buy the one for \[unintelligible 01:19:28.12\] like the prop.

**Mat Ryer:** Oh yeah, when a big snake flies out when you open it.

**Jerod Santo:** Right, and it pops out...

**Mat Ryer:** That's one worm though in it. I wouldn't say -- I'd say that's a can of worm.

**Jerod Santo:** Well, you buy more than one, and it's cans of worm.

**Mat Ryer:** Yeah, it's like attorneys general.

**Jerod Santo:** Exactly.

**Mat Ryer:** \[laughs\] I've got one pick that I'd like to also bring up, that I learned about at FOSDEM...

**Jerod Santo:** Oh yeah, please do.

**Mat Ryer:** \[01:19:54.00\] And this I think is very cool... It's at reviewpad.com. And this is like smarter PRs and rules around PRs. So in a lot of my projects I like to have it such that PR goes up, and then we automatically run all the tests and everything, and only if all those tests pass... And they can be backend unit tests, they can be integration tests sometimes, they can be frontend tests, end-to-end tests... Whatever it is that gives you the confidence to release to production, you can gate the PR on that, so that it doesn't go into main. So your main is never broken, your main branch.

Well, that can be sometimes a little bit too strict, and ReviewPad lets you actually create some more nuanced rules around this. So you can say, for example, "Markdown files, just let them go straight to main." You can say "In this case, I want to push to main, but I still want someone to review this at some point." So it's like still in there, it's low-risk, so you want to progress, and later someone can check it.

You can say things like "For all Go files, you want to make sure the entire test suite runs", because it's quick, so it's no big harm... But you can even do things like for new starters, for like different groups of people, you might say "New starters, everything should run for them, but the more senior people have slightly more relaxed rules, and they're allowed to push without all the checks happening."

And even individual functions... You could mark a function in code as critical, and if anything inside that changes, then it makes sure that all the tests will run, and that whole pipeline executes before it's allowed to merge. I think this is the next level, the next generation of PRs; this is something that -- I mean, I don't know who owns this... This is something that I would expect to have in GitHub, at some point. This is really good. I haven't used it yet, but I do intend to. What do you think of that ReviewPad?

**Jerod Santo:** I like all the words that you've just said about it. It's brand new to me, it sounds really cool... A glowing review from you, which does mean a lot to me, so I'll definitely look closer at it... But I think that --

**Mat Ryer:** It's too late to start being nice to me now, Jerod...

**Jerod Santo:** Well, no one's listening anymore. We lost them at "Here comes the sun." \[laughs\] But yeah, I mean, definitely we'll check it out. I think that PRs as they stand leave a lot of things on the table, and we know there's lots of teams building things like this in order to flesh out and improve the code review process. We had a show last year on Graphite, which is Stack Diffs, which plays in the same ballpark as this, but it's not exactly the same; they're not tackling it the exact same way. And I know a lot of people are enthusiastic about that. Christopher Hiller, b0neskull on JS Party actually gave an unsolicited Graphite shout-out in his Pro Tip Time, because he's been using that, and he has been loving that... So that's another tool that maybe we'll just link to. But that's my thoughts on the matter. I have never seen this before this afternoon, so I have to check out more of how it does what it does... But yeah.

**Adam Stacoviak:** It makes sense. I mean, it's almost as if this can even be similar to the way you have infrastructure as code. It's almost like to main as code. I don't know, just like something that says "We have to have a gate on this process." And like you had said, there are certain things that can go through, more nuanced rules... And that totally makes sense. A one-size-fits-all Git push to main does not always fit. So I can see how this makes sense.

The thing I think I question though is less the tool itself, and more like Steve Jobs said about Dropbox - is this just a feature, or is it a product, or a company? I wonder if, in some cases, this is a great standup of a feature that should just be GitHub proper, if that's what the majority uses.

**Mat Ryer:** Interesting. I mean, I wonder if their strategy is like an acquisition thing. And sometimes that's a great strategy to have.

**Adam Stacoviak:** \[01:24:03.22\] You've done it a couple of times, right?

**Mat Ryer:** Yeah.

**Adam Stacoviak:** I mean, it's a good -- I don't if that's been your strategy, but you've done it...

**Mat Ryer:** Yeah, three times.

**Adam Stacoviak:** Thrice...

**Mat Ryer:** Yeah, but they weren't features. I mean, actually, I think solving one problem and doing it really well is well worth doing. And yeah, maybe you'd struggle to build a business around it. I don't know.

**Adam Stacoviak:** Yeah. Well, that's the hard part... It's like, "Here's this thing, it's great, it's useful", but man, it died because there's no company. It's just a feature.

**Mat Ryer:** Yeah, so that's why we have to sponsor open source if we want to keep it alive. We can't just expect it to keep going. We have to normalize that more. We've got to do more of it. It's hard to justify sometimes, but it's important.

**Adam Stacoviak:** I think it's certainly becoming more normalized, but I think as it becomes normalized, it becomes the paradox of choice. It's like "Well, there's so much open source, there's so much usefulness... I can't possibly give to it all, so I either do nothing, or I just don't know where to put it, and I am just guilty. I feel guilty."

**Mat Ryer:** Yeah, so that's interesting... I wonder if we could get like a heat map of usefulness of your dependencies, actually. How often is that code executed?

**Adam Stacoviak:** Yeah. I would say a Git heat map sounds pretty cool, honestly.

**Mat Ryer:** Yeah. Well, we can do it with observability tools. If you've got tracing, and you've got observability running in your code, you will have insights into the code paths, and stuff; you probably could gather some stats on the most useful bits.

**Adam Stacoviak:** That might just layer on the guilt though, honestly.

**Mat Ryer:** Why don't you just pay for the project then, if you're feeling guilty?

**Adam Stacoviak:** Well, I mean, it's not me, Mat. It's somebody else, of course. No, I mean, I think that --

**Mat Ryer:** It's Dan-tan!

**Adam Stacoviak:** Dan-tan... \[laughs\] He's back again.

**Mat Ryer:** Dan, pay for your project!

**Adam Stacoviak:** The point you're making is great, though; we should support open source more. I always want to see more clarification on the how. GitHub Sponsors is one answer, but it's an avenue. It's not like what. The what becomes infinitely harder to define if you don't examine the open source that's useful to you. And then sometimes it might be corporate sponsors, and it may actually be open source, but it's a company who's backing you. Well, are you gonna support that thing? Well, maybe... You know, you might use it as a support, but they're already a company; just buy the things that support them to make it. There's no wrong way to support open source.

**Mat Ryer:** I like all the words that you've just said.

**Adam Stacoviak:** Well, thank you.

**Mat Ryer:** I don't agree with your point...

**Jerod Santo:** That's quite a compliment.

**Mat Ryer:** Well, that was a very -- yeah, Jerod, by the way, just for future reference, if someone's describing something and you like all those words, I feel like you like the thing. I think it's safe to say, "Yeah, I like that."

**Jerod Santo:** "Okay, I'll check it out."

**Mat Ryer:** Yeah, check it out. You will like it.

**Jerod Santo:** I just don't wanna give you too much credit. I don't like to give you exactly what you're looking for, because you beg for it so much. Well, let's close up with a lightning round. This has been a fun conversation, a long one, way more singing than expected, or hoped for...

**Adam Stacoviak:** Or desired...

**Jerod Santo:** ...or appreciated...

**Mat Ryer:** A lot less than I expected. I'm really here to do songs, and there's been a lot of talking about Git. \[laughter\] We've spent a lot of time in between tracks, talking about Git.

**Adam Stacoviak:** Way too much...!

**Jerod Santo:** \[laughs\] That's funny. Yeah. We should have changed the premise to like "Mat sings a song, interspersed with Git conversations."

**Mat Ryer:** Great. You'd go to that gig, wouldn't you?

**Jerod Santo:** Well, you have one more chance here, because we're going to do a lightning round of your brainchild on Go Time, Unpopular Opinions... And surely, you can \[unintelligible 01:27:33.28\] out the theme song for the jingle for Unpopular Opinions... Can you not? Otherwise we'll have to splice it...

**Mat Ryer:** It's hard.

**Jerod Santo:** We can splice it right here.

**Mat Ryer:** Yeah, splice it, yeah. \[starts playing the guitar\]

**Adam Stacoviak:** Gosh... We're back to this again?

**Jerod Santo:** What's the alternative? \[laughter\]

**Mat Ryer:** \[01:28:03.22\] Yeah, yeah, splice it in.

**Jerod Santo:** We'll splice it.

**Jingle:** \[01:28:09.04\]

**Jerod Santo:** So for those who don't listen to Go Time, Unpopular Opinions is a regular segment where people share opinions that they think or hope or expect to be unpopular with the listening audience... And then we put those opinions out on the social medias to see if it's actually unpopular or not. Now, what we've found over time is that most unpopular opinions are actually popular when it comes polling time. But there's been a few people who have been somewhat unpopular, and a few who've managed to be incredibly unpopular with their opinions. I'm actually in the top five most unpopular opinions of all time...

**Mat Ryer:** What was it?

**Jerod Santo:** That JS Party is a better podcast than Go Time.

**Mat Ryer:** Aw... I feel bad for JS Party.

**Jerod Santo:** ...which was unpopular, of course, with the Go audience... But we're gonna do a lightning round real quick. So Adam, passing to you...

**Adam Stacoviak:** Gosh, me first?

**Jerod Santo:** First one. Do you have an unpopular opinion you'd like to share?

**Adam Stacoviak:** I think my unpopular opinions I don't have any unpopular opinions. I tried so hard to think about something that is unpopular, and all I could think about is popular things.

**Mat Ryer:** Like what?

**Adam Stacoviak:** Well, I think if you're struggling to get something done consistently that you want to do, my unpopular opinion is that you should learn to habit-stack. It's a superpower.

**Jerod Santo:** Habit-stacking is a superpower.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Tell us more.

**Adam Stacoviak:** But that's kind of a popular opinion if you know about habit-stacking.

**Jerod Santo:** Right.

**Adam Stacoviak:** Like, if you learn the inner secrets, this dark secret, basically... So you have habits, right? Let's say you make coffee. This is my example for me, a really simple example. I make coffee once a day when I'm at work at least, maybe twice, and I wear glasses, like you, Mat. I wear glasses. And as a glasses wearer, you must be upset or get upset when they're dirty.

**Mat Ryer:** Yeah. I get furious.

**Adam Stacoviak:** Especially upset if you have to have a special microfiber cloth to clean them, because you can't just use your shirt.

**Mat Ryer:** Ughh!

**Adam Stacoviak:** Your glasses would smudge, right?

**Mat Ryer:** Yeah... Arrghh! I hate dirty glasses!

**Adam Stacoviak:** Now that I have a point of empathy, you can understand what I'm saying. So my feeling is if I'm going to have dirty glasses all day, that's upsetting. Can't do that. Well, I will forget; I get busy... You know, I don't have this cloth in my pocket all the time... I'm gonna habit-stack. I'm gonna make coffee and leave my cleaning cloth when I have time. There's steps between the coffee making, right?

**Jerod Santo:** I see...

**Adam Stacoviak:** You brew the coffee, you wait for the coffee to brew, you pour it, you drink it.

**Jerod Santo:** You stack this habit with a habit you're already doing.

**Adam Stacoviak:** Right. So you stack a habit near another habit that you do consistently... And then you do it.

**Jerod Santo:** Right. Okay...

**Adam Stacoviak:** It's a superpower. If you learn to do that in different ways, let's say more productively... Let's say - I don't know, whenever you're running tests, and you've got a minute or two, and you have like three emails you can rapid-fire off, then you could do them. Stack up a habit of like you need to return these emails, but you've got that minute, minute-and-a-half, or maybe you've got a couple \[unintelligible 01:31:19.01\] just stacking up, or something that can happen in that three minutes. Stack a habit of good communication could be the habit. And the way you execute is a few simple emails, maybe a returned Slack message, maybe it's a PR review, or a one-liner, or whatever it might be... Maybe a quick chat with ChatGPT... Who knows? I mean, just do something. Yeah.

**Jerod Santo:** Is this just multitasking, or is this more than multitasking? Because it sounds like you're just talking about multitasking. Because am I in the habit of --

**Adam Stacoviak:** Well, I think in that case --- no, no, no. Well, because -- well, in that case it might be blurred. But in my case, I'm like, I do have a habit, and so I stack certain habits around that thing. So not only am I doing those other things, but now I think "Okay, when I make coffee, neurologically, I'm thinking "I've gotta clean my glasses", because right here's the thing, and I just do it." So it's a habit that forms around other habits.

**Jerod Santo:** \[01:32:09.01\] Now, I don't wear glasses, but I would think --

**Mat Ryer:** Show-off...

**Jerod Santo:** ...what about like when you realize they're dirty? Maybe you do it then.

**Adam Stacoviak:** Well, the point is that you don't always have that cleaning cloth.

**Jerod Santo:** Oh, I gotcha.

**Adam Stacoviak:** You know, unless you carry this cleaning cloth with you everywhere. And I just don't.

**Jerod Santo:** So like if I'm deploying my code, I can floss my teeth.

**Adam Stacoviak:** Well, I mean, Jerod, pick your habit. If you've got issues with flossing, then maybe. Maybe.

**Mat Ryer:** Yeah, but I'm kind of liking this. I wonder if it also works with bad habits... Because like if maybe you're a nose picker.

**Adam Stacoviak:** Sure. Destack. You could destack things.

**Jerod Santo:** I'll have a cigarette.

**Mat Ryer:** No, I don't mean so that you can do bad habits, Jerod. That's mad.

**Jerod Santo:** Every time you pick your nose, have a cigarette. \[laughter\]

**Mat Ryer:** That would work though...

**Adam Stacoviak:** Sure.

**Jerod Santo:** Yeah, it works with bad habits, too. I think it does.

**Adam Stacoviak:** Yeah, that's redirection. So if I understand you correctly, maybe you have a bad habit, and you don't want to do it... And so when you think about the bad habit, you do a healthy habit.

**Mat Ryer:** I like the bad habits though.

**Adam Stacoviak:** Replace it with --

**Mat Ryer:** No, I'm thinking I do a bad habit, like don't brush my teeth... And while I'm not brushing my teeth, I can also be not wearing deodorant, for example. So it like cascades...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** No, that's not how it works, Mat.

**Mat Ryer:** No, you wanna do -- the second one should be positive.

**Adam Stacoviak:** Well, I mean, it would work if you canceled it out. Let's say you did a bad habit, and you're like "Well, since I'm bad here, I should be good over here."

**Mat Ryer:** Yeah, that's what I was thinking. I was trying to do that, and I thought \[unintelligible 01:33:29.16\]

**Adam Stacoviak:** Yeah. Like actually double up on deodorant, or something like that.

**Jerod Santo:** Alright. Well, this one was gonna be unpopular with me. I think it's a terrible idea. I think habit stacking is the worst. \[laughs\] It sounds awful. Let's go to you, Mat. Do you have an unpopular opinion?

**Mat Ryer:** Yes, I do. Yeah, I think when we're building software, we very often focus on the wrong things. I just think we're constantly doing this; we don't focus on what's important. I mean, really, you've got to solve a problem for somebody. That's what you've got to do. And we sometimes are so far away from that, it's so abstracted from that, because of process, or just organization, or whatever it is, that we're doing the work kind of in isolation, and not in the context of where it actually ends up.

In small tools, in small projects that doesn't happen too much. And especially if you're scratching your own itch, then that's a great way for this to not happen... But when you get into bigger orgs, understanding the why you're doing something is so important, and everybody needs to know that; everyone needs to understand that. It can't just belong to just some people, and they decide what everyone else is doing.

So I think we often focus on the wrong things, and we're just building the wrong things. And usually, sometimes it's nice to just do a cool project, and I would never want to take that away from anybody. But if you're just doing cool, complicated stuff because you love it, or it's satisfying to do and it's a hard problem and you're solving it, then that's one thing. But you can maybe -- if you can solve a problem for somebody with a script, or just something much simpler, if there's even just a tool already that kind of solves the problem... Yeah, I feel like we don't enough - especially because we're there to build software... We should remember there are other things in our tool belt, and try and just focus on solving the problem and do whatever it takes to solve a problem for a person. And try and know who the person is; try and meet them if you can. If it's not you. Try and meet the person. So that's my unpopular opinion.

**Jerod Santo:** This just sounds like good advice, man. This isn't like unpopular opinions. Like, I agree with everything you say there. Who's gonna disagree with that?

**Adam Stacoviak:** \[01:36:01.08\] Well, you agree with how you execute. What you may not agree with is that where -- you said we're doing it all wrong, basically, or something like that. We're focused on the wrong things...

**Mat Ryer:** I think most people are doing it wrong.

**Adam Stacoviak:** Most people.

**Mat Ryer:** I think like 90% of us are building software wrong, because we aren't obsessed with that. It needs a sound bite, doesn't it?

**Jerod Santo:** Okay, that's a little stronger way of saying it. There's your sound bite. Okay.

**Adam Stacoviak:** Well, I agree with connection, and the meeting the people that you're solving the problem for. That's key. You should do that, for sure.

**Jerod Santo:** Here's an actual unpopular opinion, now that we've heard your guys' lame ones. Here's a real unpopular opinion. And I know this is gonna be unpopular, because I've said it before, and people haven't liked it.

**Mat Ryer:** Oh.

**Jerod Santo:** So I'm gonna say it again...

**Mat Ryer:** Here we go...

**Jerod Santo:** ...and see if people like it. Automagically - you know, the word automagically... That's a dumb word. We shouldn't use it. I don't like that word at all. To me, it says "I have no idea of how this works. Thankfully, nobody else does either. And I'm hoping the fact that nobody knows how it works is good enough to impress everybody." So you ask somebody, "How does that work?" and they say, "Well, it's automagical." And we're supposed to all be like "Oh, okay, it's automagical! Yay!" and then move on. No, it means you don't actually know. If you knew, you'd just explain how it worked. Because when you know how software works, it's not magic, is it?

**Mat Ryer:** No. But, counterpoint - it means you don't have to know how it works. You can just use it. It works. And you don't have to know.

**Jerod Santo:** Oh, you know what else means that? It's automatic. We already have a word for that. "It just works automatically." "Oh, okay. It just does it automatically." Why do we have to pull magic into it?

**Adam Stacoviak:** I don't know about that, Jerod... Nah. Let's push back a little bit.

**Jerod Santo:** Neither one of you agree with me... I'm telling you, this is an unpopular opinion.

**Mat Ryer:** Yeah, this could be...

**Adam Stacoviak:** Haha! Okay...

**Jerod Santo:** Because you guys don't like this.

**Adam Stacoviak:** Message received. Got it. So, "automagically" describes a process that's too complex, whereas automatically is just -- there's no complexity in there. The "magically" with "auto" makes the thing that you don't know how it works, that's too complex - you explain it that way. "Automatically" doesn't simply describe something that's automagical, that's too complex, and you don't know how it works.

**Jerod Santo:** I disagree. \[laughter\]

**Adam Stacoviak:** "I disagree..."

**Jerod Santo:** That explanation was not automagical enough. It's just a spin. It's a bad spin on something that could be explained...

**Adam Stacoviak:** Do you believe in magic?

**Jerod Santo:** What kind of magic? Sleight of hand?

**Adam Stacoviak:** Well, do you believe in magic?

**Jerod Santo:** Are you gonna break into a song here?

**Adam Stacoviak:** No...

**Jerod Santo:** Um, I believe in sleight of hand. Like, in magic tricks, yeah.

**Mat Ryer:** You can't not believe in sleight of hand.

**Jerod Santo:** Well, that's why I don't understand the question "Do I believe in magic?"

**Mat Ryer:** Is there a group out there like the flat-earthers that are just like "No, we deny sleight of hand." If anything, they believe in magic, don't they? Because they think it's not sleight of hand.

**Jerod Santo:** Right.

**Adam Stacoviak:** That's right.

**Jerod Santo:** I just don't understand the question then.

**Adam Stacoviak:** Well, I was gonna break into a song, but you've ruined it...

**Jerod Santo:** \[laughs\] Well, I did everybody a service there...

**Adam Stacoviak:** But if you can somewhat agree that magic exists to some degree, like things happen that are very complex, that we don't know how they work... I mean, not literal magic, but like a version of things happening...

**Jerod Santo:** Okay. Do I believe in the unexplainable? Absolutely.

**Adam Stacoviak:** Okay, so that's a version of magic.

**Jerod Santo:** Do I believe that there's software that's completely unexplainable? Well, it shouldn't be. If you know your systems... Maybe it means "I don't want to explain it to you."

**Adam Stacoviak:** What is the context of this word being used that you loathe?

**Jerod Santo:** Engineers say it all the time.

**Adam Stacoviak:** Who says it?

**Jerod Santo:** Engineers. And we put it on our marketing... Like, "And then it automagically just works." And you're like "Nah, this is marketing lingo. You're spinning me, and I don't like it." It's a dumb word.

**Adam Stacoviak:** Gotcha. I don't like spin, okay? Don't spin me.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** There was actually a book about Spin Selling. I grew up in sales; my origination into professionalism was in sales, and there's a book called Spin Selling. Look it up.

**Mat Ryer:** You can tell you're in sales, because you just said "My origination into professionalism."

**Jerod Santo:** \[01:39:56.17\] \[laughs\] Yeah, that's some spin right there...

**Mat Ryer:** Try "My first job was in sales." \[laughter\]

**Jerod Santo:** Yeah. That was an automagical saying. That's funny. Yeah, I know -- Mat, I'm sure you've said it. I used to say it as well when I was a younger person... A lot of people love that term, automagical, and I've just gone sour on it. So it's unpopular. It's not a popular opinion.

**Adam Stacoviak:** I just didn't know it was that popular of a word.

**Jerod Santo:** Alright, listener, let us know it. Do you agree? There's three opinions here. Which one is the worst? Which one is the wurst? \[laughter\]

**Adam Stacoviak:** The wurst!

**Jerod Santo:** It's gonna be mine. It's gonna be mine.

**Adam Stacoviak:** Can we clarify that was not -- Mat, you were making fun, weren't you? Weren't you making fun?

**Jerod Santo:** No, that's his standard German accent.

**Adam Stacoviak:** That was just your being funny doing an accent, right?

**Mat Ryer:** Yeah... What do you mean?

**Adam Stacoviak:** Okay, good. I just wanted to clarify that. \[unintelligible 01:40:42.14\] wanted to clarify that, because... For a little while there it just sat so wrong with me.

**Mat Ryer:** Oh, I'm sorry.

**Adam Stacoviak:** And I almost said something. I almost stopped the show.

**Mat Ryer:** \[unintelligible 01:40:49.09\] Absolutely. I mean, I celebrate different accents. I really love them, and so yeah, impersonating accents is like a fun hobby...

**Adam Stacoviak:** I was so close, man... My white towel was like --

**Jerod Santo:** Were you gonna throw in the white towel?

**Adam Stacoviak:** You know, it was so close...

**Mat Ryer:** No one has a go at Liam Neeson on my watch... \[laughter\] Hang on, though... Hang on. It's okay to do a British accent, isn't it? Everyone does a British accent.

**Jerod Santo:** I don't... I can't.

**Mat Ryer:** \[unintelligible 01:41:22.10\] because I've heard you do it.

**Jerod Santo:** \[laughs\] I try not to, because I'm not good at it.

**Mat Ryer:** We like it.

**Jerod Santo:** No, I think accents are all in good fun. I think just the length of the read...

**Adam Stacoviak:** Well, as you went on, it became more and more caricature.

**Jerod Santo:** Well... I think we made it clear that it was in good fun. If not--

**Adam Stacoviak:** So I'm joking about ending the show, as you may know. I don't know if you knew that. I was kidding around about stopping the show. Nah, I wasn't gonna stop the show. I was just being funny.

**Mat Ryer:** But it's a nice point, actually. It's a nice point. Because if somebody felt insulted by that, I'd be devastated, genuinely.

**Adam Stacoviak:** Right. Yeah, I wanted to clarify that. We were not trying to be insulting.

**Mat Ryer:** No, we were not trying to be. It's just natural talent.

**Jerod Santo:** It's just who he is. How and when do we end this?

**Mat Ryer:** \[01:44:36.19\] Never?

**Jerod Santo:** I'm thinking like five minutes ago, probably... \[laughs\]

**Adam Stacoviak:** Probably... When I tried to say goodbye. "Goodbye!" I don't know.

**Jerod Santo:** Thanks, Mat...

**Adam Stacoviak:** It's over now...

**Jerod Santo:** Thanks for joining us for your final episode.

**Adam Stacoviak:** Well, you know what we could do, Jerod? We can play that song, "It's closing time." \[unintelligible 01:44:52.14\]

**Jerod Santo:** Hm... Semisonic.

**Mat Ryer:** Yes, Semisonic?

**Jerod Santo:** Of course.

**Mat Ryer:** I saw them live.

**Jerod Santo:** You don't have to go home, but you can't stay here.

**Adam Stacoviak:** Right. They were playing that song for us...

**Jerod Santo:** Oh, yeah...

**Adam Stacoviak:** ...when we were trying to do Beyond Code the first season, in that bar... We're like "We're trying to wrap up the last two interviews here. Come on, people."

**Jerod Santo:** Yeah. So we were at an after party at a conference, Mat... And this was a \[unintelligible 01:45:14.22\] maybe?

**Adam Stacoviak:** \[unintelligible 01:45:18.08\] yeah.

**Jerod Santo:** \[unintelligible 01:45:18.29\] At the after party, the DJ turned on Closing Time at 9:30. The party ended at 10. So you know, naturally, what you do then if you're a terrible DJ is you loop it. So he started looping Closing Time at 9:30 at it played literally for half an hour...

**Mat Ryer:** Maybe someone had his kids...

**Jerod Santo:** Are you trying to do Liam Neeson again? \[laughs\]

**Mat Ryer:** Maybe someone had his kids, yeah. \[laughter\]

**Jerod Santo:** Anyways... We couldn't even record our video show, because Closing Time was too loud in the background.

**Mat Ryer:** Ahh...

**Adam Stacoviak:** It was terrible.

**Mat Ryer:** That's so rude.

**Adam Stacoviak:** Oh, my gosh...

**Mat Ryer:** \[playing the guitar\]

"Closing time...

Open all the doors and let you--"

Yeah, I don't know it.

**Jerod Santo:** "You don't have to go home, but you can't stay here." I only remember that part.

**Mat Ryer:** \[playing the guitar\]

"Closing time...

Turn on the lights on every boy, every girl..."
