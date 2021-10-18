**Jerod Santo:** First, let me give a shout-out to A.J. in our community Slack for pointing us towards Saul and VisiData. A.J. wrote to me and said Saul and VisiData - "A super-cool tool that I'm apparently way too late to discover, and a really nice guy to boot." So thanks to A.J. for the suggestion.

Also, a quick request for the listeners - if you have an open source software maintainer in your life that deserves a spotlight, please do let us know. You can hop in our Slack and chat me up there. It's free to join, at changelog.com/community. Or you can simply submit a request at changelog.com/request and mention our Maintainer Spotlight series. Okay, with that said, Saul, thanks so much for coming on Maintainer Spotlight.

**Saul Pwanson:** For sure, thank you for having me.

**Jerod Santo:** Well, I am very excited - we're here to talk about VisiData. VisiData is an interactive multi-tool for tabular data. It combines the clarity of a spreadsheet, the efficiency of the terminal, and the power of Python into a lightweight utility which can handle millions of rows with ease. How did I do reading that marketing copy?

**Saul Pwanson:** Oh, that's actually great. It's always very interesting to hear somebody else say those words. I think it's actually one of the best summaries that I've managed to come up with, but it doesn't actually -- it's kind of a mouthful, right?

**Jerod Santo:** It is. Well, that's the thing with software - sometimes you have to present what it is and what it does, so that people know what value that thing brings... And that can actually be a real challenging thing lots of times for us, especially software developers - we're not so good at describing things in pros. That being said, it does the job.

**Saul Pwanson:** Yeah, thanks. I actually have been thinking a lot over the past couples of years -- well, decade really, but a couple of years about marketing... And as an engineer, I really don't like marketing; it feels kind of icky and gross. It's like, I should be able to make something that's awesome and that should be sufficient, right? And the older that I get and the more that I see how the world works, it's not just a necessary evil, it's actually just necessary.

\[03:55\] So I've been thinking of it recently in terms of packaging, for humans. You do release software without packaging, but the best software packages do have actual packages, where you release them to whatever ecosystem, you've got a Windows installer or whatever... And marketing is kind of the packaging, but for brains. If you want it to become not just adopted, but spread, even if you have a great thing, if it's not packaged well in the memetic sense, then people themselves aren't gonna spread it, even if they love it. That's the thing I actually realized recently, that's been a little bit mind-blowing for me... Is that it's not just that they have to love it, they have to love it AND have something to repeat. If there's nothing to actually repeat that they feel confident about, or that will lodge in somebody else's brain, they kind of just won't. Or they'll try, kind of half-heartedly and it won't lodge and then it just gets stuck right there.

**Jerod Santo:** Right... It's kind of like if you've ever seen a movie or read a book that you really appreciated, and then you turned around and tried to tell somebody else about it, and because you can't exactly describe what you liked about it, or why it was great, you become a really bad shill. As a salesperson, you're like "You should just go see it, trust me." And they're like "Well, I have a lot of movie options. I might not trust you." So yeah, if you can give somebody a phrase to say, and then they can just use that phrase to describe your thing, you enable them to help you.

**Saul Pwanson:** Exactly, exactly. So those 30 words that I have on the first page that I feel like describe it - they're a really good description, but not a really good marketing package, so I'm actually working on better marketing packages. And like you said, it's a constant challenge.

**Jerod Santo:** Do you have any betas you wanna test right here with me? You can give me a couple phrases and I'll tell you if they're any good.

**Saul Pwanson:** Yeah, I've got a handful. They're more conceptual than -- well, some of them are phrases, some of them are conceptual.

**Jerod Santo:** Okay.

**Saul Pwanson:** One of the concepts that I think is probably the strongest one is duct tape, like "duct tape for data." I feel like VisiData itself, if you think about one thing that it does -- sure, it's fine, it's a CSV viewer, or editor, or whatever...

**Jerod Santo:** "It's fine..." \[laughs\]

**Saul Pwanson:** ...you can pick any one of those things, but it's not about that, it's about -- you know, if there's one tool and all of a sudden you've got all this potential... It's like, duct tape isn't anything really special, except for, well, it's so sturdy and universally useful that you can slap it on anywhere and get something going, when all you need is a little bit of glue... And it seems to be true of VisiData, where you come to one end, you wind up with a pile of JSON maybe, but you need a little bit of CSV out the other end, and it's gotta be just a little bit different, then it fits in really great there. So duct tape is one of the things I've been playing with as a meme.

**Jerod Santo:** I think duct tape is a great metaphor for software, especially software that does what VisiData does... So I think that's on point, you should definitely start to work that into the messaging around VisiData. Before we get too deep into the project I wanna talk a little bit about something else that you're enthusiastic about, and it seems like I'm seeing it a little bit in your interest in packaging and words - you're a self-professed crossword enthusiast. What is it about crosswords that gets you going? What do you like about them?

**Saul Pwanson:** I like the density of -- not just information... There's a whole lot going on there. You read a book, and you kind of have to go through the words one at a time, and turn the page, and it's a bigger thing... Whereas one single crossword puzzle can keep you -- I'll use the word "entertained", for hours. Just this little puzzle. And it's just such a tight, little format. Every word -- in fact, every character is carefully chosen, and meaningful. Sometimes if it's a capital letter versus a lower-case letter, that may change the entire meaning of a clue. And yeah, so I like the fact that it's a really dense puzzle, that you can kind of noodle over for a while.

I also think that there's a lot of -- you know, people think of crosswords as kind of like a throw-away thing. This is actually something that I've wanted to say in public for a while, that I don't think I've had a chance to yet, which is that the Library of Congress actually classifies crosswords as "Do not collect crossword monographs." I think it's probably a throwback -- crosswords have been around for about 100 years, and for the first time about 30 or 40 years or so, maybe even longer, they were just kind of lists of definitions... Anyway, you could kind of see how the Library of Congress getting an unfilled crossword book - well, first of all, it might get filled; you know, a solved crossword is useless, or worthless, right?

**Jerod Santo:** \[08:19\] \[laughs\] That's a good point, yeah.

**Saul Pwanson:** But then the Library of Congress marks them as "Do not collect", and that's one of the very few things that are marked as "Do not collect." They'll even take one-off weird alien conspiracy theory books as "Collect one, or collect two of those." So crosswords are this weird thing, this trivial thing that nobody kind of cares about, and yet it's a really great cross-section of culture. You can really learn a lot about culture by what -- it's not just by what's in there, but what is presumed to be cultural knowledge... Like the fact that this person is famous enough--

**Jerod Santo:** Like they assume you can figure this out, they assume you know this.

**Saul Pwanson:** Yeah, exactly, they'll assume you know this.

**Jerod Santo:** Let me just say I'm a crossword neophyte. I've done a few... I enjoy puzzle games, so I have enjoyed crossword puzzles. I never got deep into them, and I've just recently learned, probably through the power of podcasting a little bit, reading the story that I want you to tell about GridGate... But there's like this whole creation side of it. I think of a crossword puzzle like it just kind of existed, and I just do it. But there's a person that created that crossword puzzle, and there's like this depth of creation, where there's like themes, and there's fillers, and there's all this side which most of us never even consider.

So looking at it from a creator's standpoint, you say it's like a window a little bit into cultural -- maybe like the zeitgeist, because as a creator you assume that I can figure out this thing based on these clues... So there's like a cultural connection between you and I. Maybe you can't, and that's when you fail at the crossword, but if it's answerable, this particular clue is going to lead me to something that I already know about, right?

**Saul Pwanson:** Mm-hm.

**Jerod Santo:** That's interesting.

**Saul Pwanson:** That you know about, or that you kind of know deep in the recesses of your brain; it happens to me quite frequently, where it's like I have no idea what they're talking about, and then I get a few more letters and it's like "Oh, I do remember that. You're totally right."

And then the other thing is the crosswords that I have had the best time with are the ones where they actually teach me something... Where I get through it and I'll fill in the last letters and I'm like "Oh, I see. You're totally right." That clue -- maybe it's a word that I already knew; I had no idea how the clue would have gotten me to that answer, but now that I see the answer, especially with the clue, it's like "Oh, thank you. You actually gave me a new tidbit of information there."

**Jerod Santo:** That is cool. So tell us about GridGate. There's another thing that I didn't even think about, but you can plagiarize crosswords... Of course, if it's your job -- a lot of people have the job to do that, right? Like, I create the Sunday morning crossword for the New York Times; that's like the famous one. But for all these local papers, they have crosswords creators, so there's plagiarism that happens.

**Saul Pwanson:** Well, I didn't know anything about this stuff until I got into creating crosswords myself, and that was actually what got me into it. I had a manager that I really liked, and he was leaving the job that I was working at, and as a going away prize I decided I was gonna make -- we do the New York Times crossword puzzle every day and put it on the kitchen table at work... And I liked it because we did it kind of as a group. We all take a break once in a while, go up and fill a couple of answers, and the come back to work.

Then when he was leaving, I decided as a little surprise gift I was gonna make a crossword for him, that was all about our workplace... And then we actually cut out the New York Times crossword for that day and pasted it in there, so he didn't even know. He was just doing the New York Times crossword puzzle, but it was the one that I had created from that. And it wasn't a very good crossword or anything like that, but one of the central answers was a phrase of his that I can't repeat on this show...

**Jerod Santo:** \[laughs\]

**Saul Pwanson:** And it was actually super-cute.

**Jerod Santo:** Our imaginations will have to fill in that blank.

**Saul Pwanson:** \[laughs\] So when he got to there, of course, it was very nice. But having done that once, then I realized "Oh, this is super-fun." As I was saying, I came to say that it's just the right level of frustration to make a crossword. It's actually difficult to get everything to line up in the right way...

**Jerod Santo:** I've never done it, but I could imagine it's challenging and frustrating, to a degree, but probably satisfying when you get it figured out.

**Saul Pwanson:** \[12:18\] Very much so, yeah. And it requires a level of creativity. It's not just slapping some things together. It's kind of a deep art form. So as I subscribe to the crossword creators list that's been going on for many years, and started listening to them... The more that I listen to them, it's like "No, this is an art form." This is something -- you need to pay attention to every little detail like that. My slapped together crossword that I did in a couple of hours isn't gonna cut it, no matter what I do to it.

So then as I got deeper into it, I made a couple more crosswords, and then somebody actually even said something about "Have you tried submitting to the New York Times?" And as I looked into that, I got a crossword constructor's guide, and like "Oh, wow, I am nowhere near that level. How would I get better at that...?"

**Jerod Santo:** It goes deep, doesn't it?

**Saul Pwanson:** It totally does. So yeah, I decided to collect some crossword data, and you know, I'm a data nerd, so I scraped a couple of websites and got a bunch of crosswords, and then -- I gave a talk on this last year at CSV Conf, and I think it captures it pretty well... But yeah, it was almost accidental. I was just looking for generic patterns and Grid Fill to see if S'es were more common in this corner or that corner, or if any corners had duplicates, and then it just turned out that a lot of puzzles were actually duplicated, in whole or in part.

Like I said, I didn't know anything about the crossword industry at that point. You said there's something about how there are people who make the crossword every day, and actually it turns out that's not how it goes. There's an editor for the crossword page. Will Shortz does the New York Times, and then there's a lot of famous - famous in the community - crossword editors... But they solicit crosswords from the community, and they pay a couple hundred bucks (for the better papers) for each crossword...

**Jerod Santo:** They just select the ones they wanna use.

**Saul Pwanson:** Absolutely. And they edit them and make sure they're all nice and tight, and properly-- but yeah, I don't think Will Shortz has actually made his own crossword, at least for the New York Times, in quite a long time.

**Jerod Santo:** It seems like an easy job... He looks at all the ones that come in, he's like "This one looks awesome. I'm gonna just print that one."

**Saul Pwanson:** \*cough-cough\*

**Jerod Santo:** \[laughs\]

**Saul Pwanson:** Yeah, exactly.

**Jerod Santo:** I'm sure it's that easy. That's how I would do it if I was Will.

**Saul Pwanson:** But then, it's interesting - just like any editor, he's gonna have his finger on the pulse of the zeitgeist too, what's appropriate, what's not appropriate...

**Jerod Santo:** Totally.

**Saul Pwanson:** ...and he's actually been taken to task recently for not having very many women constructors. Ideally, in our progressive society, 50% of the puzzles that get published should be by women, and there are nowhere near that... So he's caught some flak for that. And for some of the answers and clues and stuff that are in the puzzles too, it's interesting to see what winds up getting people up in arms over. And he's like "What? That seems fine." It's like, "Well, I'm sorry, Will. You're not of a different generation, and the current generation doesn't think that's okay." So just like any crossword editor, I think he's gotta pay attention to that kind of stuff. Any crossword editor has to do the same kind of thing.

**Jerod Santo:** For sure.

**Saul Pwanson:** So it's a challenging job from an artistic standpoint, from an audience perspective.

**Jerod Santo:** Absolutely. So whenever your thumb is on the pulse of the zeitgeist, if you get outside of what is the cultural norms of the society that you're editing for, then yeah, you get taken to task. That's so fascinating, that there's something that's ostensibly so trivial as a crossword puzzle, but it's so deep and so controversial when things happen... And of course, we're talking about words and their meanings, and those things are important to folks.

Back to the plagiarism story - so you started collecting the crossword data, and somebody used your database, which I think is published open on your website, to find out there's a lot of people, or maybe one person (you can tell the story), someone's out there just duplicating these crosswords.

**Saul Pwanson:** \[16:05\] Yeah, so actually it was me. I collected the data and then I actually posted the data to Reddit, because I was sick of dealing with that. I was mostly interesting in coming up with a file format, and doing archival research... But then you're posting it to Reddit and nobody picks it up, and it's kind of disappointing. So I was like "Fine, I'll just go ahead and look for some stuff", whatever. And it just so happened that the first thing that I looked for yielded some results, and then I kept tugging at that string, and lo and behold, there was a thing. \[unintelligible 00:16:30.22\]

There's a bunch of different cases of duplicated crosswords. A lot of them are very interesting. But the one that stood out was Timothy Parker, who was the crossword editor for the USA Today, and his own syndicated service, Universal. And it wasn't just that he had plagiarized one puzzle or two, these were hundreds of puzzles... And it was so egregious that -- it's really remarkable. Actually, if you go to xd.saul.pw, that's where I have the site and the data for this thing, and there's a pretty interesting visualization that I came up with well after the whole scandal was over... But it's undeniable when you look at that thing. There's a six-year period where literally hundreds and hundreds of puzzles were ganked, or gutted, or misappropriated...

**Jerod Santo:** Wow.

**Saul Pwanson:** Yeah. And then there are other puzzles on there, too. There's plenty of other instances of so-called plagiarism from other authors, but you wouldn't even notice it because of this one guy's malfeasance.

**Jerod Santo:** Yeah, so there's a 538 feature all about this. It's called "A plagiarism scandal is unfolding in the crossword world", published March 4th, 2016, with Saul's data. I'll link to that in the show notes, for those who are interested in diving deep into that. It's super-interesting.

**Saul Pwanson:** One thing I wanna say... I'll give you a little bit more on this. One thing I wanna say is that Ollie Roeder put the plagiarism spin on the story, and that's the way that the story managed to unfold.

**Jerod Santo:** Yeah.

**Saul Pwanson:** But it's not strictly clear what plagiarism means in the context of crosswords. We all have this notion that you shouldn't do certain things, but from my perspective, the Library of Congress doesn't even value crossword puzzles as a thing. Are they even copyrightable? I talked with a couple of lawyers and they seem to say that the whole puzzle is copyrightable, but the individual clues aren't, and the little pieces aren't.

I think crosswords are actually kind of like a very interesting nexus of copyright, and art, and all this kind of stuff. It's not clear to me that what Timothy Parker did was anything other than a little bit greasy, if you will.

**Jerod Santo:** I like that word to describe that, yeah.

**Saul Pwanson:** Like, it's not illegal... Maybe it's immoral, I don't know. People of course are gonna go up in arms if they had their stuff reused... But he didn't actually take crosswords from other outlets very often and redo them. It was from his own outlet that he took, and then he republished it in the USA Today changed.

If somebody sold you a short story, and then you bought it, and you published it, and you took that short story and you republished it somewhere else, changing maybe a third of the story - is that plagiarism? And I think you probably would say "Yes, it is", and there's a term called self-plagiarism, where you take something that you wrote and you pass it on as something that you wrote again... And it's this weird kind of grey area for me. It's not as clear-cut as Ollie made it out to be.

**Jerod Santo:** Well, this has been our visit to the seethy underworld of crossword creation... Let's shift gears a little bit. I'll tell you, Saul, that I do a little bit of legwork with guests coming on, and oftentimes I'll meet somebody and I don't know anything about them. With you, I feel the opposite. Your website, which we'll link up (saul.pw) has lots of information on it. I know things about you that I don't know about some of my good friends. I know at age seven you broke your leg -- or was it your wrist? You broke your jaw at age 33, you broke your arm at age 36... My first question - is there a common theme to these injuries? Are you secretly like an Evel Knievel-style daredevil, or why are you breaking all these bones, man?

**Saul Pwanson:** \[20:19\] I'm secretly a klutz who tries things beyond my level of capacity... So in every single instance of those things I was doing something I probably shouldn't have been doing, and then wound up breaking something.

**Jerod Santo:** Oh, wow.

**Saul Pwanson:** So overconfidence I think is --

**Jerod Santo:** Welcome to the club. I've broken things myself for reasons similar. I know other stuff... For instance, I know that between the ages of 19-21 you spent a lot of your nights and weekends with somebody named Joey. You lived in Urbana, Illinois... And that's a completely to me a random fact, but to you - you put that out there; I selected that fact. But tell everybody how I can find all this stuff about you. I'm not a sleuth... Tell us about your picograph...? Biograph...? What's this thing you put on your website?

**Saul Pwanson:** Yeah, it's called a biograph... Or at least I call it a biograph. There was a thing that was made maybe 100 years ago called a histomap, and it was done by Rand McNally. Basically, it's a time map. Over the course of 2000 years they mapped the rise and fall of civilizations. So you can kind of see at a glance, "Here's where the Mongols were, and here's when the Roman Empire was", and literally you can see the European situation, and German Empire, and stuff like that... And I love it as a snapshot. I love things like that, that take data and present it in a visual format, so you can see at a glance. You don't have to pour through tomes and tomes of text; you can just see it there. And I was wondering what that would be like to apply it to my own life.

I kind of feel like it's important for people to have this perspective on their life. We're all so caught up in the day-to-day experience and what's going on right now, we kind of forget that "Wow, ten years ago I was doing that, and 20 years ago I was doing that. And wow, I really did spend a lot of time in college with Joey, who was my girlfriend at the time." So that's why that was the case.

It's also interesting, too -- I kind of wanna put it out there... You say you're not a sleuth, but most people look at something like that -- and if you look at the actual biograph that I've got, it's not pretty. It's kind of a big, jarring mess of details and information... But like you noticed, there's a lot of interesting stories that are buried in there. I feel comfortable sharing what I've shared because there's nothing really damning in there, it's just a little bit of life's little facts. But if you're looking and you're trying to piece together certain things, you can discover things like that. I had that person that I was really close with in college, and we did live together for a year. And the same thing is true of many other facts.

So I feel like it's -- I don't wanna say hidden in plain sight, but anybody who's willing to do the research can find out a lot of interesting details about my life... But like I said, most people aren't. Most people want to actually have me tell a story about that, and I don't feel the need to tell that story, so I just like to collect the data and put it up.

**Jerod Santo:** Yeah. Well, it's a cool thing... I'll describe it real quick visually, and we'll of course link to it. Everybody should go check this out. On the left-hand side is the years, and then if you imagine an X/Y axis -- it's not really an X/Y axis, but there's a left-hand side the years going down, 2020 down to, I guess, the beginning of time... No, 1976.

**Saul Pwanson:** The beginning of my time.

**Jerod Santo:** Yeah, the beginning of Saul's time. And then you have different categories: residences, flatmates, weekday mornings, weekday afternoons, weekday evenings, weekends... And then specific events, like years of your life, and they're just drawn out - where he was, who he was with, what he was up to during that time period. And it's one of these things where you look at it, and I agree, at first it just kind of looks like a mess. There's almost like a brutalism into the design here, and you're like "What is this thing?" And then it becomes very clear... Pretty quickly, you're like 'Wait a minute, there's stories in here...', like the different bone breaks, like the different flatmates, and the time period, and how you were spending your time... And it's really a neat thing.

\[24:15\] I was just curious - is this easily reproducible with somebody else's data? Is there a tool that you used to build this thing? Because I would love to have other people be able to build this for their own life, it'd be cool.

**Saul Pwanson:** Yeah, there is a Python tool, a Python library, if you will, that we used. It's not that great; you have to write the stuff in Python. I agree, I think it would be great if people could do this and did do this. I kind of wanna make this for each member of my family, for instance. For my dad, when he went to school, and these various events, especially the ones that happened before I was even born. I've heard about these things, but I can't figure out exactly -- I can't place them. And especially I can't place them in context with other history. He says he and my mom got married in whatever year, but it's like "Oh, that was the year that this happened in", and I don't really have that kind of context... So I would love to get that.

So yeah, I would like that... But like I said, the library exists. It's under devotees/biograph I think it's called... And people can use it. We actually have to do some work on that and clean up the example, and update my own biograph, and stuff like that... But if anybody is interested in helping putting one like that together, I would love to either advise on it, or help clean up the code myself, because I think it's actually a very important thing. I'm actually surprised more people don't do this kind of stuff in general.

**Break:** \[25:39\]

**Jerod Santo:** One more thing I learned on your biograph - this one's more on point... It's VisiData. Of course, a big part of your life, so there it is on the biograph... And it seems like most of the work that you did on that, or at least started, was in 2017 and 2018 during weekday afternoons. I'm curious, is this a work-related endeavor, or did you have a lot of free time in the afternoons then? Tell us the story of VisiData, how and why you started it.

**Saul Pwanson:** Yeah, so I was at the end of a job, and -- it turns out that, for some reason, leap years for me are very... I get really restive. Something happens every four years, and it's just like part of the cultural moment makes me really uneasy... Anyway, this happened to be 2016, it happened to be at the end of a job that I was at, and I was kind of looking around at my career, which had been about 20 years in software, and I realized I didn't have very much to show for it at all... Because you know, you work for a company, and you ship code, and most of the code I've actually (so-called) shipped has gone nowhere, whether because the project was canceled, or it wasn't the right thing at the right time, or whatever... And even the stuff that I did ship that made it into a product - it just gets absorbed into the borg. It's not mine. It goes wherever it goes, and... I don't know, it's its own thing. That's the industry.

\[28:09\] And it's disappointing, having all this time and energy and things to say in terms of software that I didn't have anything to show for it... So it actually turns out that I turned 40 right at the same time. It's not an accident that I started VisiData at that exact time. It's a little bit of a mid-life crisis, where I'm looking at my career and what's going on there... And I took stock of the various projects that I'd had over the years, and this was one that I had actually done at a previous job, that I wanted for myself going forward. At the next job I was like "Oh, shoot, it'd be really great if I had this thing, just to look at some data really quickly."

Of course, my previous employer owned that code, so I didn't feel like I could actually -- I mean, I couldn't steal it, right? So I decided I was gonna rewrite it. I was gonna do it, I was gonna do it once and for all. And I had this kind of thing to get into, like OAFA, Once And For All. I got into that mentality, and it's a huge -- it's a mistake. It really is not the right way to do things.

**Jerod Santo:** Where does that come from?

**Saul Pwanson:** I think it's a self-management technique. If I do things just for myself, I do a crappy job. I don't seem to like myself very much, I don't care about my experience, so I just do the bare minimum. I think most people are in the same boat. And yet, it's really nice to have really nice tools. To be able to feel good about the tools that you're using. It's like driving a janky go-kart that you've made yourself, versus a nice Ferrari. It's not worth it to build a Ferrari just for yourself. There's an XKCD comic about this, in terms of when should you automate things. If it takes you this long to do it every time, and you only do it this many times a year, then you can spend this many hours making an automated replacement.

So it's not worth it to make something like VisiData just for my own use case. But if I take the mentality that "No, I'm gonna do it for other people. I'm gonna do it once and for all. This is my gift to the world", then I'm more motivated to do it well, and then I do do it well... And then I benefit from it too, because I get to have that tool and have it be a nice thing. But like I said, it's not actually a good trade-off just for myself. I need to have somebody else that I'm doing it for, even if that group or person never materializes.

In the case of VisiData, it is a generally useful tool, and people have started using it, and the more people that use it, the more motivated I am to do more, and make it better in whatever sense. So that's how that came about.

Also, in 2016 there happened to be some other event, right around my birthday, that kind of took its toll emotionally on me, and I'm sure many other people, and I decided to -- I think part of it is also channeling that kind of negative energy or fearful energy about the state of the world into something that I can directly control and contribute and make the world a little bit of a better place.

**Jerod Santo:** So how long was it from conception, "I'm gonna do this once and for all" with VisiData to user number two? I assume you're user number one, so... Conception, idea, excitement usually, then there's the toil, there's the perspiration (1% inspiration and 99% perspiration) to get from you to two - how long was it, how much work was it?

**Saul Pwanson:** I don't actually know... Basically it was only a couple of weeks before I had something that I was willing to show. And I posted it on Reddit again, and it got a couple of people to basically complain that I had no unit tests, which was kind of funny...

**Jerod Santo:** \[laughs\] It sounds like Reddit...

**Saul Pwanson:** Right... But then -- so where I was getting at before was that at the end of this job and this phase in my life I decided to take a sabbatical. I took a year off, very consciously, from work. I've done this a couple of times, and I have to say, it's one of the best things I have ever done for myself. It definitely sets you back financially, and puts a crack in your career and stuff like that, but personally, I've never had any better times than when I've taken these sabbaticals. VisiData was the focus of this... And I wound up actually attending the Recurse Center in New York City for three months. And I would say that's where I got (if you will) my second user.

\[32:21\] Everything there is very supportive. Basically, it's a programmer retreat that you go on for three months, with these other people who are in the same program, kind of an unlearning environment... Or I'm sorry, an unschooling environment.

**Jerod Santo:** Unlearning... You forget stuff while you're there.

**Saul Pwanson:** \[laughs\] So there was somebody there, Moritz, who just picked up the tool and used it for some of the projects that he was working on. And I was like "Oh my god, thank you." I had given a demo of the thing, and I was kind of used to having people go "Oh, that's really great", and then of course they're just ignoring it, because everybody's got all this crap that we're supposed to see and nobody cares to learn about. And he actually picked it up and used it, and I was very touched, I guess. I was like "Oh yeah, this actually is useful, in this sense."

I kept on working on it there, and I got a little more support there... And I think the thing that really kicked it off, my real first -- the first user I had that wasn't somebody that I knew was when I released, just after the Recurse Center, and it hit the frontpage of Hacker News. I was like, "Oh, okay, great."

People will vote up anything, and they'll kind of look at something for three minutes, and whatever... But then one particular person really took notice and really started using it, and started contacting me, and that was Jeremy Singer-Vine. He's the data editor for Buzzfeed, and he's been using it ever since then. I'd say almost three years now. He's been using it himself, and he's been a great source of both motivation and inspiration in terms of what kinds of features we wanna support, how he uses it... He does it a lot for data exploration.

If you get a thousand datasets a week, you've gotta be able to dive into each one of them very quickly, and bounce around and kind of get the feel for it. And if half of the datasets are completely worthless, you wanna find that out as quickly as possible, and VisiData is great for that. In terms of data exploration, you can get anywhere really quickly. And then you do use better or stronger or more specific tools when you've gotten to that point, but for the first 10% of exploration, I don't think there's anything that beats it.

**Jerod Santo:** So just on the homepage, VisiData.org, it shows off some of the things it can do. It's a terminal tool, a visualization tool inside your terminal... And you talked about the duct tape analogy. Right now you have as the tagline "Data science without the drudgery."

The way you present this is pretty interesting, I think. You mentioned that it's duct tape to kind of glue stringing data in, getting something out. And you have this double-select. On the left-hand side when you have a blank, but you need a blank... and on the first one it's the typical data formats that we all know and love/hate (in many cases) - CSV, JSON, HTML... There's lots of formats supported. You can throw a SQLite database at it; if you've still got some Excel 97 files laying around, VisiData can handle that.

And then on the right-hand side you've got the outputs that are possible, which I think probably most of them, in terms of data exploration and really the kind of data sciency sleuthing that you're talking about - probably they'll use their terminal interface. But you can clean up text, you can output plain text, JSON, these kinds of things. Has this been a feature set that you've just built up over time? Did you have a first use case where it's like "CSV in, and terminal interface out"? What was your initial concept of what this thing should do?

**Saul Pwanson:** \[35:43\] Wow, that's a big question. So I was calling it a \*bleep\* CSV-viewer; sorry, Crappy CSV-viewer for a long time... And part of that is just some kind of false humility. But also, I kind of wanted to keep it a small project, like get in, get out, and have it be a three-month thing. But in actuality, the thing that really drew me to the project in the first place was the flexibility, almost the universality of the interface... And that's part of both the blessing and the curse of it. Because of the structure -- so one of the central theses of VisiData is that everything is data, including metadata and internal data etc. So one of the things you can do with VisiData for instance is you can go to a list of columns of the current sheet as a sheet itself, and you can modify the columns on that sheet. You can edit the names, change the widths, you can change the types... Basically, you interact with columns just like they're some sheets. I don't know of any other tool that treats stuff like that.

Imagine if you had 100 columns in Excel and you could pop up an Excel spreadsheet to those columns and have that stuff reflected back to the columns and cells on the original sheet. And that was one of the original features in the tool when I had made it at F5 in the first place, and it was a little bit of a throw-away feature there; I was like "Oh, this is neat. Okay." But then as I got to making it here again, this time I just kept finding more and more uses for it. And it's just the internal structure is so that it's really easy to add new loaders.

So you add a CSV loader, you add a JSON loader... Because Python has such a rich ecosystem, you can go ahead and add an Excel loader and it's just importing this third-party library and just using it. They're really actually small things. So yeah, it's increased and added over time, but really, every one of those things is a handful of lines of code, because it fits in with the structure of VisiData internally.

So in some sense I kind of am a little bit -- I don't wanna say frustrated, but there's all kinds of great data tools out there, but they're usually very format-specific. You have the CSV viewer, you have this JSON editor, or whatever, and there's no need for that to be the case. I think any tool that does data should be able to take data from many different formats and sources. Obviously, you need an ecosystem like Python to make that easy to do as a developer, but...

**Jerod Santo:** Right...

**Saul Pwanson:** ...it's all possible, and especially in this day and age, when there's so much code out there in the first place to do all this kind of stuff. And then one thing led to another -- I don't know, I just wanna tout... Like, that year that I was on that sabbatical, I was working on it during the weekdays, and I was being kind of obsessive about it. There was the time that I was like "You know what, I wanna make a Git interface with VisiData." And it's so neat to be able to open up a Git history in VisiData and do a frequency analysis of, for instance, a contributor, and see instantly who's got the most contributions, and then dive into their contributions... I think there's actually still a lot of room for something like a Git interface, where you could, again, go ahead and bulk-edit Git commits and have it automatically rebase everything for you. So you're kind of like curating your Git history in a tabular format.

The more that I work with it and see it, the more I think I think that everything really is data. Of course, that's the case. And if you treat things like that, and put everything into a tabular format, you've got instant -- the organization really just makes everything instantly more powerful.

**Jerod Santo:** That does sound intriguing.

**Saul Pwanson:** And then the other thing that really was awesome was that in October (I think) I was inspired by Drawille, which is a terminal drawing library that works with Braille characters... So you can get eight times the resolution. I decided to just cram that into VisiData. So VisiData has a graphing functionality. Everything is a scatterplot, but you can do a lot of work with scatterplots, and you can do it all in the terminal. You can zoom in, and zoom out in select areas. I was personally myself also very surprised I was able to pull this off and make it work as well as it does.

So I kind of went nuts that year, basically, and VisiData was where I went nuts on.

**Jerod Santo:** \[40:03\] That's awesome. So it's 2020, we're four years later, it's a leap year...

**Saul Pwanson:** Mm-hm... It sure is.

**Jerod Santo:** So you're coming up on your four-year reset.

**Saul Pwanson:** Mm-hm.

**Jerod Santo:** You've got VisiData 2.0 coming out; it happens to also be an election year, but surely unrelated...

**Saul Pwanson:** I'm sure they aren't, yeah...

**Jerod Santo:** What's going on now? You've got 2.0 on the rise... Is this project -- obviously, you're not done with it, because you're coming out with a new version... So are you looking to continue with this into the future?

**Saul Pwanson:** Well, so this is actually very interesting. I wanted to get the 2.0 out because I wanna have a stable platform for people to develop their own plugins, or apps, or extensions for VisiData (their own loaders, for instance) to have it be a platform that people can contribute to the whole "Everything is data" concept. And that doesn't happen unless you have a stable platform, and I don't feel like the API -- it's a little all over the place, and I want it to be more consistent, and documented, and all that kind of stuff... And I have to admit that -- I mean, we've been talking about 2.0 for months and months, if not all year at this point... And the thing that's holding up 2.0 actually is semver. I wanted to make this point, because I feel this deep in my bones, where I want to commit to a stable API, and I'm not there yet. I don't think VisiData is there yet.

There are things I definitely wanna change, so I don't feel comfortable releasing it, because according to semver, once you make a major version, you're stuck with that interface... And I'm not comfortable with this as it is. I feel like I have to go through this whole process of both auditing the code, combing through it, finding the bits I don't like, changing the interface and then documenting the interface... So I've been kind of saying "Well, let's call it 2.0", because there have been some radical changes to it. We've added a lot of cool features, like Undo and I can't even go over all the things it's been so long since the last "real" release...

So we probably could release very soon if I wasn't concerned about the API. But because of the whole semver mentality, and aside from just me saying we're not semver -- the second that I say we're not semver, you attract a whole lot of ire, the ire of the open source community... Like "You should be semver", and it's like "I don't know if semver actually is the right thing in general." I'm kind of coming away from that myself. I think that it's actually very difficult to maintain APIs that are completely backwards-compatible, and you wind up making mistakes; you wind up making a change that seems like it's backward-compatible and it turns out it's not. And if you didn't bump the version then, are you supposed to them make a new release and bump it when you discover it?

**Jerod Santo:** Right. So what you end up doing is bumping major versions way more often as a result of that... Some people don't like that, and it's like "Well..."

**Saul Pwanson:** Right.

**Jerod Santo:** Is VisiData used as a dependency very often, or is it more of a command line tool that you use as a final application? It seems more like the latter, but maybe there's people that are embedding it, or something?

**Saul Pwanson:** Most people are using it like that. I think the thing I wanna do is I wanna encourage people to use it as that. I think it's happening more and more. There's a plugin architecture now, and actually there are some people who are making plugins for their own things. I really want to encourage that, because -- you know, we get feature requests all the time on the VisiData GitHub issues list, and as much as like a lot of the feature ideas, I don't have the time implement that kind of stuff. Even if I didn't have a job, there's still other directions I would wanna take it.

So I encourage people to do their own thing and to experiment to feel free to ship code outside of the VisiData release cycle. Not only that, I don't want to own someone else's code. Someone else makes a feature for data, I feel very uncomfortable taking it into VisiData if I don't fully understand it.

**Jerod Santo:** Right, because you've gotta maintain it, right? They write that once, and you maintain it forever.

**Saul Pwanson:** Exactly. So they lob it in, and it's kind of like -- I don't wanna say no to this great feature, and yet, the more experience I have in the software world, the more it's like "Wow, that's going to take effort on my part", and... I don't know how long -- I mean, I'm definitely gonna be maintaining VisiData for a long time, but I really hope at some point, maybe even in the near future, that I can set it aside and let it run itself, because I have other things I wanna work on.

So I think part of that is having a viable plugin architecture and ecosystem, so that other people can contribute. But then in order to have that, you need to have a stable platform, with a documented API, and everything being stable.

**Jerod Santo:** \[44:25\] Right. If it wasn't for the plugin architecture, I could say "Well, just throw semver out. You're a tool." People can just use the tool at whatever version they grab it at, and they can just update. There's not really much of a reason to have semver for like an application that you use. But if you wanna have a platform that people are building plugins for, you do have to make some decisions and some guarantees around APIs for them to feel comfortable doing that. Because I've definitely built plugins for unstable APIs, and I don't make that mistake anymore.

**Saul Pwanson:** Yup.

**Jerod Santo:** When the ground gets swept out from under you... Fool me once, shame on me, but I'm not gonna do that anymore. So I understand your reticence to bump that.

**Saul Pwanson:** I will say, I wanted to talk about the feature requests that we get for VisiData, and you mentioned you were interested in the process behind open source software development...

**Jerod Santo:** For sure, yeah.

**Saul Pwanson:** And I don't like having a huge amount of open issues on my project board, because they just -- I don't know, having 400 open issues just feels both unwieldy on my end, and also I feel like it looks bad from people that are coming by, and thinking it may be a buggy thing, even if 390 of them are feature requests... So we've actually come up with a policy that we use, and I kind of like it, which is to market it as a wishlist item in brackets in the title, and then close it. I make a comment saying "This sounds great. I hope somebody can implement it. If it's you or anybody else, I'd love the help", whatever. "Closing as per wishlist policy." And our policy is we have a "Marie Kondo, keep things nice and neat on the issues board" mentality about it.

I hope that doesn't turn anybody off, but I think it's really nice that we have 20 open issues right now, almost all of which are something that I think we probably actually should fix before we ship... Or if we don't, we actually actively wanna help on... As opposed to having hundreds of feature requests, that would be nice to have, but I can't put any time into right now.

**Jerod Santo:** Right. So how do you surface those wishlists in terms of somebody else coming to the projects? You know, dupes and whatnot. Say I want a feature; wishlists, having them closed, they're not visible to me. I'm probably not gonna search closed issues. I'll look through the open issues and see if somebody else has requested this, but do you have people ever wondering for the same feature, or "By the way, this has already been closed..." Is there a way of surfacing those wishlist items and saying "Here's what people want." Maybe they can thumbs-up it or something, even though it's a closed item.

**Saul Pwanson:** Yeah, I mean - people can search for closed items. I think people do search through the issues as a whole more often than you might think. Maybe not for a wishlist item, but in general... Maybe this is also how VisiData is... It has so many features, people are like "I couldn't possibly know all the things that it does", so they wind up search through the issues for "How do I do this thing?" and only when they discover that it's not there at all do they file a feature request for it.

So I feel like in that initial search, when they're like "How do I do this one thing?", then they find hopefully the wishlist item where it does happen, or it has been already suggested and then submitted.

Also, there's been a pretty active community around VisiData. People will file issues, and then somebody will chime in and say "Oh yeah, this is over here" or "I'm working on this" or whatever... So there's a little bit of community interaction, and I wanted to thank A.J. -- I think I know the A.J. that you were talking about, who recommended me for this show... And he's been exactly one of those people, who's been active in the project... And just even as a voice to talk to the new people who come on, who are filing bugs, or whatever - even just to have somebody who responds quickly I think is a really good practice.

People come and say "Hey, I want this feature", and somebody else will say "Oh yeah, we don't do that kind of thing", or "Here's where you can look and how you do it yourself." Or "Great idea. Wishlist. Closed."

**Jerod Santo:** Yeah, that's awesome. So on the About page you do have a list of contributors, and I do see A.J. on there now, as well as Anja... She seems like a major contributor.

**Saul Pwanson:** \[48:09\] Yeah, Anja has been a great help. I've met her at the Recurse Center, and she's been fantastic.

**Jerod Santo:** Awesome. And then you also have patrons. You said this was your gift to the world. That being said, people can throw up there, as you call it, "cold hard cash" via Patreon. I'm curious how that has gone, the idea for Patreon, if you like the platform, and then if you've had any patrons along the way. So if you've got a maybe two dozen or so listed here who helped support the project, non-code contributions, but maybe financial contributions.

**Saul Pwanson:** Yeah, first of all I wanna give a big thanks to Christian Warden and October Swimmer, which is his Salesforce consultancy. He's our corporate sponsor. He's the top contributor to my Patreon.

The reason I started Patreon was because originally I had a TinyLetter where I would be sending out content every week, or however often I could do it, and I found that I didn't get any engagement. I sent things out to people, and then you can ask up and down, all day long, "What about this feature? How about this question?", whatever, and I got almost nothing. And I felt like it was a lot of effort on my part to put together those things and I didn't get any reward for it. So with Patreon, it's like "Well, here's a very low-effort way." I can collect kind of an audience and people can contribute whatever level they feel comfortable with.

I have to say that -- I want to address the asymmetry in open source software development. This is my so-called passion project, where I put my heart and soul into it, but again, it's not worth it for me. I want people to contribute; I want people to promote it, to add code...

**Jerod Santo:** When you say it's not worth it for you, you mean that the work you put in would not be worth that effort if you were the only one using it, right?

**Saul Pwanson:** Yes, exactly.

**Jerod Santo:** But it is worth it, like it's your passion project... It is worth it to you to do this, but not if you were the only user, that's what you're trying to say.

**Saul Pwanson:** Yes, exactly. Sorry, yes.

**Jerod Santo:** Okay, just making sure I'm hearing you correctly.

**Saul Pwanson:** Yes. The only thing that I get out of VisiData is looking at the usage numbers. I have a way of figuring out how many people are using VisiData in general. I look at that chart and I feel warm and fuzzy when I see that number going up... Which is, again, the classic ego mentality.

**Jerod Santo:** Well, it's your impact... It's showing you helping others. There's some ego there, but there's also some altruism there.

**Saul Pwanson:** Right. I think if there was only ten people using it on a regular basis, I'd probably be like "Okay, that's great, but I'll move on to something else." But seeing that number grow and grow and grow, it makes me more...

**Jerod Santo:** It's motivating.

**Saul Pwanson:** ...motivated. And having people being willing to put down cold hard cash, even if it's just a couple of bucks, is meaningful. It's like, no, it's really hard to get people to even put a couple bucks towards something.

**Jerod Santo:** It is.

**Saul Pwanson:** So I'm so much more willing to work on something if someone's subscribed by Patreon, if they have an idea. And like I said, it's not that they're paying me to do it. It's not worth it for me to get three dollars to do whatever feature that takes me four hours... But just the mere fact that they're invested in any way is motivating. So that's the reason behind the Patreon, it being a Patreon thing.

And I don't actually take money out of it as an income for myself. I have a full-time job, so I don't really need that money in a certain sense. What I do with that money is I run other experiments. For instance, this last winter I was working -- there's a guy whose name is Tom Buckley-Houston (I'm hopefully pronouncing that right, Tom). I wanted to see if I could get VisiData on the web. So he makes brow.sh (browsh, he calls it), which is a text interface to the browser. You can basically run a full browser in your terminal, and you can do things like play YouTube videos through it. It's totally great.

**Jerod Santo:** \[52:04\] Nice, I have seen that. It looks really cool. It's mind-blowing.

**Saul Pwanson:** So he's my kind of nuts...

**Jerod Santo:** \[laughs\]

**Saul Pwanson:** So I contacted him, and wanted to hire him just for a little bit to see if we could get a version of VisiData on the web. And he whipped something up and we actually used go-tty and we kind of got something working. I didn't wind up actually publishing it or pushing it out because there's -- I know that I might be inviting a stampede, and it's kind of a big hassle to get the ability to scale things and make it be viable... But as far as just having a very simple interface to a server that's running VisiData, he totally pulled it off.

So I used the money that I get from Patreon to support stuff like that, those kinds of things, those little experiments that like -- it's not worth it for me to spend a few thousand dollars to do something like that, but if it's essentially "free money", then sure, let's play around, see how this goes.

**Jerod Santo:** Plus, it's investing it back into the project, which I'm sure your patrons would -- I mean, they wanna support you, but they wanna support VisiData, so this is directly supporting that... Whether it's putting food on your table or putting research and development into the tool itself, I think they're happy probably either way. So I think it's a great use of those resources, especially if you don't personally need them to live your life.

**Saul Pwanson:** Yeah, it's a good point.

**Jerod Santo:** Very cool. Well, VisiData - awesome project. It definitely has peaked my interest. Thanks again to A.J. for recommending it and for being a key part of Saul's community around this. If you're interested, of course, all the links to all the things are in the show notes, right where they belong.

Saul, thanks so much for coming on Maintainer Spotlight, thanks for putting this project out there, and all the cool stuff you're doing on your website. Any final words to the hackers out there, the open source community regarding VisiData or what you're up to? What would be your call-to-action? If somebody is listening and they're like "Saul seems cool, his project seems cool", what would you want them to do? ...give it a try, hop on your Patreon, hop on your GitHub issues? What's the best way somebody can get involved with VisiData?

**Saul Pwanson:** I would say that the things that are most meaningful to me are to give it a try, so install it, play around with it for an hour... It seems like if people can play around with it for an hour, then they either get it or they don't. If they get it, then they're kind of hooked.

And then to say it out loud. Say it in public, on Twitter, or whatever, and say why you like it, and what has been mind-blowing for you. I feel like that's the one piece that I haven't been able to get, and it's hard for me to say it myself. Obviously, I think it's great, but the more that I say it's great, the more people are like "Yeah, sure, he loves his own baby. Whatever."

So yeah, if you do like it, then say it out loud. Say it loud, say it proud...

**Jerod Santo:** There you go.

**Saul Pwanson:** One other thing that I'm looking for - I think that there is a gap in VisiData's packaging in terms of Windows releases. For Linux and for Mac it comes as part of the Python installation stuff, but you can run it on Windows, using for instance Windows Subsystem for Linux, but it's a little bit of pain to install, so that turns a lot of people off... And of course, a lot of people are running Windows.

So if there's anybody out there who has experience with making a Windows release, an actual package for Windows, especially from a Python project and especially for a Python terminal project, I would love to talk with them. We really could use a Windows release manager. I think it would really increase adoption and usage of VisiData.

**Jerod Santo:** Very good. Well, Saul, I've had a blast chatting with you. Thanks so much for coming on the show, and thanks for all the open source work that you do.

**Saul Pwanson:** Thank you very much for having me. It's very nice meeting you.
