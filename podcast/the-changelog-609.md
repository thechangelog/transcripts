**Jerod Santo:** So we're joined today by Jimmy Miller, host of the Future of Coding podcast. Jimmy, you wrote the best, worst blog post. It was amazing.

**Adam Stacoviak:** Ha-ha-ha-ha...

**Jimmy Miller:** Nice little play on words there. Yeah, I recently wrote a blog post talking about my first job in programming, and it's the best worst codebase I ever worked in. And so yeah, it was a really fun post, and kind of blew up. I mean, way more than any blog post I've written... And got like Primagen on YouTube doing a video on it... It was really cool, really neat to see; top of Hacker News, all that stuff. It was really fun.

**Jerod Santo:** Yeah. Definitely resonated with me. In fact, I was stopping to check the technologies that you listed, because I literally thought maybe I had been on the same codebase... And then I was "Oh, it was all C\# and VB", I was like "Okay, mine was over here in Ruby land." But it was just like bringing up PTSD or something, because I've been in a codebase like this.

Well, first of all, let's lay some groundwork here before I start to get into the details... Because this was your first job coming out of college, is that right?

**Jimmy Miller:** I did not go to college.

**Jerod Santo:** Okay, coming out of schooling.

**Jimmy Miller:** Yeah, yeah. It was a couple years after high school. But yeah.

**Jerod Santo:** Okay. And successful business that you went to work for, I assume?

**Jimmy Miller:** Yeah, it was a big credit card processing company that's now been merged or bought out, or something. But pretty, pretty big company. This was like a small branch of it, that was like the customer support center. But fairly -- in the grand scheme of things, a medium-sized company, but fairly large for actual software development.

**Jerod Santo:** Right. And so lots of money being made; of course, credit card processing - a core piece of the world's infrastructure, if you're getting fractions of a penny of every transaction. I mean, there's just a lot of money coming in. And money hides problems, right? The success just hides problems, and this thing had so many problems it's just hard to fathom that it operated.

**Jimmy Miller:** Yeah, it was honestly pretty crazy... Going from like the only code I had ever seen was code I wrote myself, to diving into this kind of codebase, where we got hundreds of thousands of lines of C\# and VB, with just crazy database configurations, all this wild stuff going on... And just realizing "Oh, this is this is what real world code looks like." Of course, I had no other point of comparison. I now realize it was a little unique, a little bit of craziness there... But yeah, it was one of those things where you think if you're a successful company, the code's got to be good... And I've found out that that's not really the case.

**Jerod Santo:** There's something about the naivety also of being fresh out of school, or young to the industry... I think I told this story before - I had a similar experience where I inherited some bad code, but I didn't have that perspective and just knowledge enough to realize it was bad code. I thought it was good code and I was a bad programmer. And I probably -- I mean, I was. But still, I gave it too much credit, because I was like "This must be what good code looks like." It's so hard to understand, you know? And it took me a couple of years of just maintaining that. And thankfully, I had autonomy, so I just did it by myself, slowly changing a thing here or there, without major interruption from bosses or anything. Then I realized what good code actually looks like, and that what I had inherited was actually just clever, but terrible. And oftentimes, clever is terrible. And there's some clever stuff in this codebase you're talking about.

**Jimmy Miller:** Yeah.

**Jerod Santo:** Things that you're like "Oh, that's kind of clever, but it's also so dumb."

**Jimmy Miller:** \[07:56\] I think that was one of the lessons I had to learn, was just how clever you can be, and how much you can solve a problem with the most complicated code you could possibly imagine. And yet, for the end person, they don't care. It doesn't really matter. But for me -- I don't know, I've never been a businessy person. I like coding because I think coding itself is really interesting... And so for this first job, it was kind of a shock of like "This is what I have to deal with? This ugly grossness?" But I think that that's changed a bit. I look back on those moments quite fondly.

So yeah, maybe I should talk a little bit more in detail about -- I'm assuming most people haven't read the blog post, or whatever... Happy to fill in some background of what does this codebase look like, and what are the weird things going on in it, or...

**Jerod Santo:** Yeah, absolutely. I think we can drill in on specific aspects, and just enjoy them as we do. But you can definitely paint with broad strokes in terms of -- I already said it's a big Visual Basic/C\# thing. The database was massive; it had lots of columns... You go ahead and fill out some of the big picture aspects of what this thing was, and then we can dive into some of the details... Because there's a lot of just enjoyable tomfoolery going on.

**Jimmy Miller:** Yeah. So let me paint a little picture of the company. So this is a big -- like I said, a big credit card processing company. But the actual office I'm at is almost all staffed by customer support people. There's just this one room that's developers, probably like 80 developers or so, in this one big, huge open office...

**Jerod Santo:** Wow.

**Jimmy Miller:** And we're all writing this software for these customer support people. It's totally separated off from the rest of the credit card processing business. This is all bespoke software built up over the last 10 years. This is like -- 2012 is when I joined this company. So it was a little bit like behind the times, even for then... Very stuck in the past of how software is being done. But I don't know, it's your typical -- like, the customer support people are all really serious, have to dress a little nicer, and the developers are all kind of chilling, shooting each other with Nerf guns, and being a little bit more wild. But the code was the kind of part that everyone wanted to ignore. The stuff I was on was -- I started as an intern. It was like the legacy codebase that the professional developers didn't want to touch anymore.

There were all these teams who were redoing the big rewrites, and the interns and like a couple developers were kind of shoved on this old legacy project that was just massive. So the database itself - I talk in the articles about we ran out of columns. The database is this massive database with the merchants table, which has 1024 columns, because that's the most you could have in a SQL server... The codebase is hundreds of thousands of lines of C\# and VB, and the reason it's kind of split is they decided halfway through to change from VB to C\#. But the whole way it worked was session state got stored in the database every single time you changed pages, so it could swap back and forth between the VB and C\# world... It's this crazy bespoke IIS setup that takes days to get running on your machine.

The whole thing was just kind of duct-taped, terrible codebase. Every JavaScript framework you could possibly imagine... And the task as an intern was "Here's a big list of bugs and features that we don't want to actually spend developer time on. This is your job now."

**Adam Stacoviak:** \[11:49\] You've got to ask yourself, how does a codebase get to this point? Is it because there was no leader? Is it because no one cared? Is it because it was sort of siloed off the seemingly primary application which ran the processing? This was, as you said, customer support. Maybe it's a sidecar to the business and less important, but you talk about sales folks putting their wins in there, and logging in, because you've got the calendar, and stuff... How does that even happen? Is it because there's no leadership? What do you think?

**Jimmy Miller:** Yeah, that's a good question. So in some ways it's less important because it's customer support. But it's also -- yes, the sales organization is kind of in this codebase. That really matters. But also shipping out payment terminals all happened from this site, or at least a lot of them happened from this site. They might have had other locations... So shipping was also a big part of this. So it's not like it was completely to the side.

Based on my time there, obviously, and like all the stories I heard, it's really leadership conflict. Constant changes in leadership, constant people coming in and out at the top level, different directions changing... One of the things that was a really annoying aspect of these codebases was the names for every product had changed a hundred times. There's this big sales hierarchy, and it really, really mattered what the sales hierarchy was. There's the regional manager, and the district manager, and all these different terms... And they were just abbreviations in the codebase. It'd be like the DM, the RM. But those abbreviations had changed over time, to mean the same things. It would be like district manager versus direct manager. And so you'd actually have to look to know what those entities referred to. You'd have to look at source control, and then go talk to Munch, who was - as I put - the resident shaman, and ask him "What things in this year did this refer to?"

**Jerod Santo:** Wow...

**Jimmy Miller:** So it was just this constant change, and constant change in direction, constant change in leadership that just made the codebase go in so many different directions as well. I think Conway's Law ends up winning out on all codebase organizations.

**Adam Stacoviak:** You knew Munch, obviously... But if you didn't know Munch, would you think he's like a Dwight? This reminds me of The Office, in a way. Instead of paper, it's a software package, or a program... It's like, just getting the job done, basically, is the mission.

**Jimmy Miller:** Yeah, no, I can totally see that. I don't think I would call Munch a Dwight. Munch was a very charismatic person. He was somebody who has -- management wanted him to be in charge so many times, and he just refused to go be promoted beyond that. So he was like the de facto leader of so many things, but his job title never reflected it. I think his job title was just like systems analyst, or something like that. He wasn't even technically a programmer by the org chart, but he did so much.

So I could definitely see the Dwight comparison, but I think that'd be selling him a little short. He was just a really kind-hearted, really nice person. Any time you needed help on anything, he was the one who was willing to sit with you and explain it. He was a great storyteller. I mean, I think shaman is the best descriptor I can give for Munch.

**Jerod Santo:** Was his name actually Munch? I mean, who names their kid Munch? \[laughs\]

**Jimmy Miller:** Okay, so his name was not actually Munch... Apparently, there are only two people in the world that know why his nickname is Munch. These were two high school buddies. And he tried to get rid of the nickname when he went to college. He tried to just go by his normal, given name, but then there was somebody else in his dorm with the exact same name, and one of his friends knew him as Munch, and they just said, "Oh, we can just call him Munch. It's fine."

And then a second move - he moved to like a new town after college and tried again. And he ended up running into an old buddy who called him Munch, and then it spread. Even his wife apparently didn't know how he got the nickname Munch.

**Jerod Santo:** \[16:05\] That is hilarious. Some names just find you; you just can't escape them. They just stick.

**Jimmy Miller:** Yeah. I remember the day where we got a new system for being able to -- like naming; we got a new 80 setup or whatever, that kept your emails and your names or whatever... And it turns out that it had a little lower permissions requirements than the last one... And Munch went and changed his name and everything to Munch. So instead of actually having to be like "Oh yeah, that guy. That's Munch", now in the system he was properly Munch, which was fun.

**Jerod Santo:** He finally embraced it. Huh?

**Jimmy Miller:** Yup.

**Jerod Santo:** Nice. So let's go back to these columns.

**Jimmy Miller:** Okay.

**Jerod Santo:** So there was a merchants table. It hit the max number of columns, 1024 at the time; apparently - was it SQL server? It has got more memory now. You can now add 4096 columns.

**Jimmy Miller:** Yeah, yeah.

**Jerod Santo:** Yeah, good for them. But because it's arbitrary -- I mean, it's not arbitrary; the memory constraint forced them to either stop making new columns, or create a second table, in which you can just shove some more columns. That was the choice that was decided. So now there's merchants and merchants 2. And I assume every time you look up a merchant, you've just got to pull up both tables in, don't you?

**Jimmy Miller:** Yeah, I mean, it depends on what columns you're grabbing. You have to know what things are where. And most applications -- I mean, most of these columns were completely pointless. I'm sure if you actually looked at them, they were completely not used for eight years, or something. It's just like somebody decided, "Oh, I'm just going to add another column."

All of our SQL schema was not actually in any source control. You just had to submit forms to the DBAs, who would manually run them. For actual like stored procedures, of which there were hundreds or thousands, you had to like manually check them out in different environments, and then write your name, like "I am editing this. Please don't edit it." And then you would leave a little change log of what you did... And you'd end up finding out someone didn't do it in the lower environment, so by the time you get to production, it's wrong... And all sorts of fun things there. So adding a column, as long as you can get one DBA to agree, you're good to go.

**Jerod Santo:** Which they did thousands of times, apparently. I just wonder, how can you possibly have that much information about a single entity in the world? Obviously, there's probably a lot of foreign key relationships, which is probably a lot of those columns, but... I mean, how much can you know about a single merchant? Like, more than a thousand twenty four things matter?

**Jimmy Miller:** Yeah, it was -- I think a lot of it was things like "Are they involved in this promo? Do they have this kind of equipment?" There was all sorts of different iterations of this product. Or like "Who is their salesperson?" So there was honestly -- the domain itself was very complicated. I never got a full picture of all of this domain of what's going on. Now, as we now know, of course - and even then it was happening - Stripe has simplified payments to like a nice, minimal thing. And I actually remember at the time there was a group that was supposed to be doing like open source work, and trying to take on Stripe. And I was so excited... I was gung ho, a 20-year-old, first job... I was like "I'm going to join the cool group doing open source." And they had some Python code that looked straight up like C\# code, and I made a PR to like fix their indention, and they got really mad at me. \[laughs\] They're using tabs instead of spaces... You know, it's Python; four spaces, and... Yeah, no, it did not go well.

But yeah I think for me a lot of this was just I didn't know anything about the broader tech ecosystem. I never even realized that I could do this as a job. Growing up, I just kind of learned programming on a whim, and had no idea that the stuff I was doing was what people actually did.

**Jerod Santo:** Really?

**Jimmy Miller:** \[20:14\] Yeah. Yeah. The way I got into programming was a bit weird. I grew up relatively poor, not always having food on the table poor, but I still have a roof over my head, still electricity... US poor. Obviously, there's people who have it much worse in the world, but... We did have a computer, luckily. We were gifted a computer from some family friends... But my brother would always hog it, my older brother. And so one day he decided that I got my own computer, because he found one by the trash, with mud on it. It was this old Dell with Windows ME on it. And he just gave it to me and said "This is your computer now. This is the one you have to use." It didn't work, I didn't know the password for Windows ME... But luckily, I had a friend whose dad was a system admin, and he had mentioned Linux to me one time. And so I got Ubuntu running on it.

**Jerod Santo:** Nice.

**Jimmy Miller:** And I was 12, had no idea what I was doing... Just burning CDs, trying to get some software to work on it. I ended up getting Ubuntu on it, ended up getting wireless card drivers working for it...

**Jerod Santo:** Wow, that's an accomplishment.

**Jimmy Miller:** \[laughs\] Yeah, NDISwrapper was this -- taking Windows... It didn't have a wireless card. I thought, "Okay, I can buy this and install it and it'll just work." But NDISwrapper was this way of like wrapping Windows wireless drivers and trying to make them work for Linux... And I now know what I did was I compiled from source NDISwrapper by burning CDs to get the dependency tree. It was the only way I had to transfer data between computers... And so I burned these CDs and compiled from source NDISwrapper, and I got it working. And that was when I was just hooked. This was so exciting that I got my own computer working, by doing a bunch of magical incantations I didn't understand at all.

**Jerod Santo:** That's amazing. So you would download them on your brother's machine?

**Jimmy Miller:** Yeah.

**Jerod Santo:** And you would rip them to a disk, to the CD, which is was a one -- well maybe you had rewritable ones -- but you pretty much have one shot at it, right?

**Jimmy Miller:** Oh yeah, I didn't have readable/writable. I luckily had gotten some -- yeah, write once...

**Jerod Santo:** And you sneakernet that sucker over to your machine.

**Jimmy Miller:** Yup.

**Jerod Santo:** And then - are these just tarballs, or how did you do...? Do you remember?

**Jimmy Miller:** Yeah, yeah, when my brother was gone to a friend's house - this is when I would go, and sneak on, and go do this, and get things working... So yeah -- I mean, he was nice. If I really asked him, he'd let me have computer time; it's not like he completely kicked me off. But you know, your older brother... When you're that age, you're like "I can't bother him too much."

So yeah, I got it working, and that was my computer for probably five years. It had like 128 megabytes of RAM. At that time it was quite a bad machine, but with Linux, it ran super-smooth. It was great.

**Adam Stacoviak:** Linux is the best. So this was your first gig, really. This place.

**Jimmy Miller:** Yeah.

**Adam Stacoviak:** And you said that you were self-taught as a programmer... So how much experience did you have before this job, doing programming, to know that this was bad? Like, not the way?

**Jimmy Miller:** Yeah, I had only really -- I mean, I'd written a lot of code in my spare time. I did a bunch of like ProjectEuler.net. I don't know if you all are familiar with it, but for anyone who's not, listeners, it's a bunch of math problems that you have to use programming to solve. So it's a bunch of like number theory kind of stuff. I'd solved -- they get really difficult, really fast. I think I've solved all of them I will ever be able to solve in my lifetime, because as they continue on, it's just like graduate-level math. So I had done a bunch of those...

\[23:58\] I had played around with -- Mozilla had had a new extension method called Jetpack that they were playing with. I'd made some of those, and released some, and people used them out in the wild. They were all like super-small programs. I'd written a program for my school. I had a great programming teacher. Ms. Johns was her name. She was fantastic. I love her. She did not know programming, but she was a great person, who would teach from a book, and recognize that I knew more programming than her, so I just was a tutor in the programming classes. I took the Java AP exam, never took the class, got a five on it... I did a bunch of stuff in my spare time. So I learned Java, I learned Python... I just loved programming. It was my main hobby. I'd skip my calculus class to go program. That was the kind of -- I failed a lot of my classes because I would just skip them to go programming.

**Jerod Santo:** Well, it paid off.

**Jimmy Miller:** Yeah. Ms. Johns was actually the reason I got this job. A few years after high school she had reached out to me and said "Hey, there's this company looking for interns." And she told them about a story, that I'm happy to tell, about the time that the Secret Service busted in my door for hacking.

**Jerod Santo:** I do wanna hear that o ne.

**Jimmy Miller:** \[laughs\] And they were impressed enough to give me an interview, despite not going to school. So yeah, happy to tell that story...

**Adam Stacoviak:** Interesting.

**Jimmy Miller:** ...but I also know we're here to talk about the codebase, so...

**Jerod Santo:** No, secret service knocking on the door I think is a worthwhile diversion. Don't you think, Adam?

**Adam Stacoviak:** Yeah. Have you got more to the story? What's the story? I mean, you shallowed it... Deep it.

**Jimmy Miller:** \[laughs\] Okay. So for people who don't know, the Secret Service also deals with like internet security. You think of the Secret Service as just being the president, which is what I thought when they busted in my door... I worked at a local or like regional grocery store as a cart pusher, when I was in high school. And the system to like check your schedule was the most convoluted, annoying system you could possibly imagine. You had to get on a VPN, then you had to log in like four times, and then you could finally like traverse these links to go check it. And they would publish the schedule Saturday night, for like the Sunday morning. And I just got so annoyed with having to spend like 15 minutes logging into this system, that I was like "I'm going to write a program that's going to do all this for me, and it's just going to email me my schedule every week."

So I go to write the program, and I start -- you know, it's a simple little Python program, making some HTTP requests... And I was like "Alright, let me figure out, if I don't send a password, what error I get, and then I can continue on from there." I got the schedule. I didn't send in a password, username or password, and just got the schedule. And I was like "That's a little weird. Did I somehow -- I don't have cookies set. There's no way that it knows my credentials." So I visited in the browser and I was like "Oh, actually, that that inner iFrame there doesn't require auth at all." And it's a schedule, though, is what I thought. "It doesn't really matter. It's just like someone's schedule." So I clicked the Back button in the app, and it takes me back to another page with my social security number, and my bank account information... And I realize every single employee's social security number and bank account information is just on the web, unauthenticated. And all you need is this employee ID, a sequential number, to find them.

So I tried to reach out to the company to tell them "Hey, this is a problem." Because I knew my local branch is not going to know anything about this. I tried to reach out to corporate... I like filled out an employee survey, and stuff... And they respond back to me. This is a customer support person; my older brother told me "Well, you can't give it to them for free. You can't tell them security vulnerability for free. They should pay you for this."

**Jerod Santo:** \[28:03\] Okay...

**Jimmy Miller:** Me being the dumb 16-year-old I was...

**Jerod Santo:** Dubious advice...

**Jimmy Miller:** I was like "Well, you'll have to pay me."

**Jerod Santo:** \[laughs\]

**Jimmy Miller:** Didn't hear back for several months...

**Jerod Santo:** The plot thickens...

**Jimmy Miller:** All of a sudden, at 6 AM I hear a bang on my door. I sleep like on the second story, but my room kind of goes straight down the stairs, to the door, so I'm like the closest to the door of my family. And I hear this really loud bang on the door at 6 AM. I go downstairs, and I hear "Police! Open the door!" It was that, like, pitch. And I look outside, and there's no police cars. Nothing. Not a single one that I can see. Because we have a big window, and I look out, there's nothing out there.

And there had been a break-in in a house not too far from us a week prior... And I'm just like "This does not sit right to me." I was like "How do I know it's the police?" And the guy responded, very confused, and he goes "Well, we're busting in the door." I back up, battering ram into my door immediately; throws me on the ground, puts me in handcuffs, and in walk Secret Service agents. The wildest thing -- I don't know if I still have the picture, but they left a big, huge mark in the front door. They had the battering ram ready.

**Jerod Santo:** They didn't even wait very long. They just came busting in.

**Jimmy Miller:** Came busting in. And so I asked the first Secret Service agent that's coming in, "Can I know what this is about?" as I'm on the ground in handcuffs. And he goes "No, that's classified." Next Secret Service agent, which I'll just call B... I'm not going to give his name, even though I know it... Secret Service agent B goes "What?! No, of course he can see the warrant." Hands me the warrant, which shows the grocery store name, and I know "Okay, that's what this is about."

I tell the whole story to the Secret Service agent, about what happened, what I found... And I kid you not, he goes "Well, I think someone overreacted here... but you're facing pending charges of 30 years, in two States, and at the federal level..."

**Jerod Santo:** Wow...

**Adam Stacoviak:** Oh, my gosh...

**Jimmy Miller:** I think my favorite moment from that, though... One. So I had this computer that I had gotten, and I still was using it at the time... And I changed out all the parts in it. And I had this backpack full of old hard drives. They tore up my bed, flipped over the whole room... It was absolutely insane. There were eight local police and two Secret Service agents. And they don't take the backpack full of hard drives that was sitting right next to the computer... Which is just like top-notch police work.

**Jerod Santo:** Yeah.

**Jimmy Miller:** And then the second was we had gotten an iMac at that point, and I watched as two local police looked around, and they're like "Where's the rest of it?" \[laughter\] And another guy to be like "I think this is the whole thing. It's just all in one."

**Jerod Santo:** That's just hilarious.

**Jimmy Miller:** It was great. So yeah, I didn't do any real hacking, I just found something unauthenticated. It was not complicated. I was not some massive hacker. I ended up getting interrogated by the company for like eight hours...

**Jerod Santo:** I was gonna say, they just dismissed the charges, or how did it turn out?

**Jimmy Miller:** Yeah, no charges were ever filed. It was just a search warrant. It was pending charges based on what they found, which - of course there was nothing. I didn't do anything. I just found a security vulnerability. But my mom made me tell the company, because she was worried I wouldn't have a job or whatever... And I knew they didn't know I worked for them, which was true. They were a very disorganized company.

**Jerod Santo:** Gotcha.

**Jimmy Miller:** But I ended up getting interrogated by some lady from corporate, who when I asked for a lawyer to sign documents, she stood up and screamed that I threatened her, and I got fired, not for anything I did there, but for threatening her.

**Jerod Santo:** Wow.

**Jimmy Miller:** Yeah...

**Jerod Santo:** So that story, plus Ms. Johns, together, got you this job. Because they're like "Well, he must be good at what he does, if the Secret Service is after him..."

**Jimmy Miller:** \[laughs\] Yeah, yeah. I don't think she even knew the technical details or whatever, but it was enough -- they were intrigued, and they let me get an interview, and luckily...

**Jerod Santo:** Yeah. "He's a hacker guy."

**Jimmy Miller:** Yeah. I got the interview, I think six weeks into my internship I got hired on full-time, and... Yeah.

**Adam Stacoviak:** \[32:17\] Were you actually good?

**Jimmy Miller:** I mean, you know, I could fake modesty, but yeah, I was good. I mean, I wasn't good compared to now. If you look back at all of that stuff, I was terrible. But for where I was at, as a junior developer, basically like a recent grad, I knew my stuff. I was able to -- when I joined, we took the backlog from like 60 items in the queue that had been there, and I was able to get like 40 of them solved pretty quickly. I mean, that's why I got hired in six weeks from intern to junior developer. It turns out all the stuff I had been doing in my spare time was actually real software. I just didn't realize it.

**Adam Stacoviak:** That's cool.

**Jerod Santo:** He's the kind of kid who has got a backpack full of hard drives. Of course he was good at what he did. You don't just accidentally end up with a backpack full of hard drives...

**Jimmy Miller:** I really didn't. And part of the reason I want to share this is not like to brag about myself. It's like, because I grew up -- none of my family had gone to college, it was a very working class family... I had no concept that this was something -- I had read a bunch of tech articles, I'd seen all of this stuff, and I knew some people out in California did this... But as a kid, growing up in a small town in Indiana, I just thought what I was doing couldn't possibly be the real thing. And so I was two years out of school, I'd never once considered programming as a job, because I just didn't think I was good enough to do it.

**Jerod Santo:** Right. Then you find this codebase and you realize, "How many hundreds of thousands and millions of dollars in labor have gone into this monstrosity?" Right?

**Jimmy Miller:** Exactly. And I've realized "Ah, my worst code is -- you know, I write bad code." I wrote tons of bad code at that company. Zero question. I mean, they had to scrap a whole project that I did... I made all sorts of mistakes. But you can not be perfect and yet contribute quite a bit. And these people - yeah, they created value for the company, despite this code being awful.

**Break**: \[34:29\]

**Jerod Santo:** You didn't introduce the calendar, did you?

**Jimmy Miller:** \[laugh\] No, yeah, so this is -- there was a calendar table, which was literally a hand-filled in calendar, that my understanding at best was that when contractors logged in versus when employees logged in, there were certain days that employees were allowed to log in, but contractors like on weekends and holidays could not log in. It was supposed to be completely forbidden. And this was the system that was doing it.

So they filled it in for a few years and actually ran out, and they had to scramble to figure out how to log in, and then just had an intern fill in another five years. Had no idea which -- there were so many services, so many programs running in the background, so many cron jobs, they had no idea which one had been locking people out.

**Jerod Santo:** I love it.

**Jimmy Miller:** So they just filled it in more.

**Jerod Santo:** Just one row per day, and you've got to fill it out, and it's going to check against that row for the day, and if there's no row, then they can't log in.

**Jimmy Miller:** Exactly. I also had a task that I don't mention in the article, where there was this 5000-line Pascal program that had been apparently like very mission-critical for the last eight years, and all of a sudden had started failing... And they had no idea why. And I was told to rewrite it in C\#, because they didn't want to support Pascal anymore. I looked at this thing...

It was just -- it was only 5000 lines because it was copied and pasted. Like, they unrolled a loop by just like copying and pasting code over and over again. So my end code was like 200 lines. And I get it, I make sure that everything I'm seeing is like identical. I was like really thorough to make sure I got the program right, because apparently it was really critical... And I was given like a week deadline... Okay, I get it. We put it in service... And what it was doing was like sending a bunch of emails about some process or other. I didn't know the details. But reading from a table, sending emails based on reading from the table. Not complicated. And I immediately -- like, the day I turn it on, my manager comes over to me and says "Please turn that program off. We are getting constant emails from people." Apparently, this program hadn't run in eight years. It was about something that was eight years old, and it was spamming people's emails every half hour, because it couldn't find the data it was expecting.

**Jerod Santo:** Wow... So it was defunct, basically.

**Jimmy Miller:** It had been not running for -- it had been running incorrectly for eight years. They just finally turned on alerting. And that's they started noticing that it was failing.

**Jerod Santo:** Oh, okay. So you did implement the correct behavior.

**Jimmy Miller:** I've implemented it exactly right. It's just that - yeah, nobody knew that it was failing, because that part of the business had been gone for eight years. But those people were still there, so... \[laughs\] Yeah.

**Jerod Santo:** who knows, man...?

**Adam Stacoviak:** That's wild...

**Jimmy Miller:** Yeah. I think the other one that I loved was like - there were whole programs in source control that were just decompiled sources. So they were C\#, but they had lost the source code to them. So they just took the binary, ran them through a decompiler, and checked them into source control.

**Jerod Santo:** Okay...

**Jimmy Miller:** And you had to make changes to this application. And I don't know if you've ever worked with C\# decompilation, but it is --

**Jerod Santo:** I imagine it's unreadable, right?

**Jimmy Miller:** \[41:40\] It is completely, completely unreadable. It is compiler output. It's like, if you had to work on JavaScript minified code... And I had a person -- one of these was our time tracking system. The way we tracked all employees was a custom-built application, but we had lost the source control; we had lost the source code, so it was decompiled. And there was some list that was wrong, according to a business person. So I go in there, and I'm looking at this boolean logic that's been optimized by a compiler... And I finally get it, I write down the logical formula, and I plug it into Wolfram Alpha, and it tells me the simplified form, which was great.

**Jerod Santo:** Oh, cool.

**Jimmy Miller:** I was so proud of myself for thinking of doing that, because it was really complicated. It turns out to be like "This and that, or this and that, or this and that." That was like the whole entire thing. And I figured out what each of these variables came up with... I was so proud of myself. I go to the business person, I'm like "Alright, here's all the variables, here's the boolean logic. What does it need to be instead?" And she's like "Oh, I don't know. I don't know what any of those variables mean. I don't know what any of these terms mean." Instead, I had to go change a variable, print out a new list on a piece of paper, bring it to her desk, and she would mark which ones were right or wrong...

**Jerod Santo:** Oh, wow. Guess and check.

**Jimmy Miller:** \[laughs\] And then I would try to figure out, based on her marks, what the boolean... And we did it. It took like 10 rounds of printing out pieces of paper, and letting her mark on them... But yeah.

**Jerod Santo:** And then did you decompile that, and throw it in source control? Or how did you recover from the circumstances? Or did you just perpetuate it?

**Jimmy Miller:** Yeah, I mean, there was no -- that was the source code, right? That's the only thing we have, is this crazy, decompiled thing. I cleaned up that little bit there, made it a little cleaner and added some human-readable terms to it, but... I mean, there's no way you can fix it -- it was probably a 30,000, 40,000-line application. No way you're going to rewrite all of that in the time given.

**Adam Stacoviak:** Why did you stay here? Why did you keep doing this job? Was it just like a weird conundrum/challenge? Like "This cannot be real, and I must stay to see what happens"?

**Jimmy Miller:** I mean, I didn't stay there super-long. But that was -- I probably would have. But I met my now wife, and moved. But I mean, there were tons of people who'd been there 5, 6, 8 years. This was a small town, with a big city near it, but there's not a ton of programming jobs. And all of them are kind of equally crazy. I knew people who had worked at other companies now, and come here, and... I think this kind of stuff exists a lot more. I mean, there's tons of comments just like we had here, like "I thought I worked on this codebase. This sounds very familiar." But also, I didn't know any better. I just assumed this is what code looks like, actually, in the real world. I'd seen some open source stuff, but never really dived into it... I'm like "Oh, maybe open source is better. But at a company, this is just what you have to deal with."

And while it's definitely the most storyworthy codebase I've worked in, all of the things that were bad were just so obviously bad... It was not a bad place to work. I would actually rank it on one of the better places I've worked. Not the best...

**Adam Stacoviak:** Really?

**Jimmy Miller:** ...but one of the better places I've worked. Part of that was definitely my position in there. I had a great manager.

He was just so supportive, so nice... Always made sure that I got the growth opportunities that I needed to become a better developer. He saw the potential that I could do, and made sure to help me, and get more senior developers to help me learn stuff, and challenge me. That was really good.

But also -- I mean, this will show my very strong bias here, that I know you all might not necessarily agree with, but there was no agile process, or none of that stuff, which I have found to be the main factor in job dissatisfaction for myself. The lack of process was so freeing and so nice.

**Jerod Santo:** Well, you're not going to get a disagreement from me on that one, but maybe --

**Adam Stacoviak:** We don't do agile around here. We do whatever we want, basically. \[laughter\]

**Jerod Santo:** \[46:06\] We just code stuff.

**Jimmy Miller:** Yeah, I wasn't sure -- you know, I don't know you exactly. But with the Kaizen, and all of that, obviously --

**Jerod Santo:** Well, the Kaizen just means continuous improvement. That's something that I'm sure you're into, right? Like, let's make things better all the time.

**Jimmy Miller:** Yeah, I do like -- I mean, your Kaizen episodes are great. I just wasn't sure. I know it's always contentious when I say "Not a fan of agile", even with the lowercase a. Just not a fan. So it was a good company to work for... You know, the biggest problem, really, why I wouldn't have stayed there longer is being underpaid. You're in a small town. There's limited talent. There's limited places that you can go though, so they can pay you way less. It turns out I was making the same as people who had been there eight years, and who had job titles way over me, which was just wild.

**Adam Stacoviak:** Wow.

**Jimmy Miller:** But this is programming in the Midwest. I know tons of people who are at companies like this, with equally crazy code... I mean, even Salesforce has a branch here in Indianapolis, and all the code I hear, how the Salesforce sounds, similarly wild to this.

**Adam Stacoviak:** Well, when you have so many people, and so much, I guess, momentum, you have to make progress. And sometimes progress is "Just duct-tape that part." And that's kind of like the employees table; this seems like duct tape. Like, "Why in the world do you have to drop this table at 7.15 every morning, and then repopulate it with a new injection, and then people can't log in?" Why is that the way? Or the same thing with the sales numbers. Why do they have to claim these wins, and then put it on this board, and they were able to subject these interns to doing all this minion work, basically, to get seemingly their numbers projected properly? I don't know... It's hard to decipher exactly what's happening there, but...

**Jimmy Miller:** Yeah, it's a little complicated.

**Adam Stacoviak:** It is.

**Jimmy Miller:** But the basic idea for that one, just to be clear, is salespeople -- obviously, there's the real accounting. I know there were some comments on Hacker News of like "That just sounds like fraud." There's like the real accounting system, and then there was the rewards system, where they'd get bonuses and stuff... This was the rewards system. And yeah, they were trying to get bonuses every month. And if they made a big sale at the end of the month, and they'd already gotten their max bonus, they would just move that to the next month, so they could get their bonus for next month. So they had a cap on commissions, and things like that, and this was moving it around...

**Adam Stacoviak:** That's funny, because I was encouraged when I was in sales back in the day, like "Hey, let's just move that sale to next month, because you've already reached your quota this month. Good for you."

**Jimmy Miller:** Yeah. And it got encouraged here, but the way that it was implemented was interns manually writing SQL statements. \[laughter\]

**Jerod Santo:** Take that hourly wage out of your bonus. It's costing a little extra. There's some intangible costs there on that bonus system.

**Jimmy Miller:** I mean, there were people who the whole internship they were there, they never got to write any code other than these SQL updates. And I think that's a shame. That's not how you should treat your interns. But that was one of the things -- I just refused to do it. I just never wrote one. So every time it would be assigned to me, I would just go find something else to work on, and do that instead. I wasn't a great employee, also, to be clear. I was 20. I was very -- you know, I was a little bit more prideful than I should have been. A little bit more arrogant than I should have been, for sure.

But yeah.

**Adam Stacoviak:** What about these hard drives and Guilfoyle? Is this a Silicon Valley nod, or is this a real Guilfoyle?

**Jerod Santo:** It can't be really a Guilfoyle, right?

**Jimmy Miller:** No, no. It's definitely a Silicon Valley reference.

**Jerod Santo:** Okay, good.

**Jimmy Miller:** Yes, yes. I did not do it as bait for this show, but I guess in hindsight I should have...

**Jerod Santo:** I was gonna say...

**Jimmy Miller:** ...thought of that as a benefit, too.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[49:52\] It definitely was like -- when I saw that, I thought "Adam's going to love this. There's someone named Guilfoyle?!"

**Adam Stacoviak:** Well, you say "Let's call him Guilfoyle", so I figured... And then I immediately Command+F'd and typed in S-I-L, and found nothing for Silicon Valley... I thought maybe at least reference it, like let's, you know --

**Jimmy Miller:** No, I figured for anyone who knows, it was a good reference, and anyone who doesn't, it's a good enough name. It's kind of a fitting name, I feel like.

**Jerod Santo:** Sure.

**Jimmy Miller:** So yeah, no, his actual name -- I felt a little awkward using his actual name, because I never met him. I had no idea who this guy was other than through his code. And so yeah, he now, I don't think -- I looked him up, I don't think he's a programmer anymore. He sells exotic pets. So yeah, I thought Guilfoyle just seemed like a fitting name, especially if you know the reference... That was always the sense that I got of this guy.

And yeah, he was the most prolific programmer I have ever seen. The sheer amount of code in that codebase that was his, and the sheer amount of like applications that random customers or customer support people would have, that were just from scratch Windows applications that he wrote, with like complicated logic... Because he refused to use source control, which was why we had his hard drives raided on Munch's desk - he refused to use source control; if a person asked for a code change, a feature change, he would just rewrite the application from scratch. And he was apparently, from everything I heard, that fast; like pumping out a brand new like 10,000 line application in a day was like not unheard of for him. But the code...

**Jerod Santo:** This is like a legend. This is like a legend.

**Adam Stacoviak:** Yeah, a total legend.

**Jimmy Miller:** Yeah, absolutely. And because he didn't use source control, I have no idea how fast he actually wrote this code... So you don't get any history on it.

**Jerod Santo:** Maybe that's how the legend continues. You can't have a trail; no paper trails. "Yeah, I wrote this in a day."

**Jimmy Miller:** Yeah, maybe he just anticipates needs way in advance. Or like puts his code through some obfuscation every single time so it looks like it's slightly different... I don't know what it was. But yeah, his code was -- it was a trip to try to understand, though. There was never a consistent pattern to the craziness. It was like he just woke up every day and thought, "What new, weird programming pattern can I abuse here to write this application?" Services that were pure functions, that like I literally do not understand why they existed... Clients that were just like these super-thick clients that -- like I mentioned in the article, completely empty classes. Classes -- I did not exaggerate in the article. They were empty classes. They had a class definition, method definitions, but there was no code in any of the methods. And it was all to like build up a structure, and the hierarchy would go like 10 layers deep of inheritance... And there was all to build up structure that then would become a pipe-delimited string sent over a socket.

**Jerod Santo:** What...?

**Jimmy Miller:** That was all driven by the database. And so like when you looked at it, you were like "Okay, what is even happening?" Like, once you even figured out "Oh, this is a data structure, not a class hierarchy", it was like "Wait, what do they turn into?" "Oh, well, it's like dynamically choosing which column of which table to go grab this field from, and now it's custom there", and then the table would encode like "How do you encode the value?" So you could infinitely configure how the delimited string would be created... But there was no reason to do that, because it's an old application that hasn't changed in 15 years, and the same message was written every time... It was wild stuff.

But I actually debugged that bug for a year. It manifested itself as like 15 different cases in the system where things would just go wrong. And I thought it was like a memory leak for the longest time... I thought it was all these things. And finding out that it was just some legacy third-party application reused unique IDs every month was like the most exciting and most letdown bug find I'd ever seen in my life.

**Jerod Santo:** \[54:16\] Yeah, not exotic.

**Jimmy Miller:** I thought for sure it had to be Guilfoyle's fault, right? His code was too clever. I really wanted to blame him on his cleverness.

**Jerod Santo:** I was gonna say, it's convenient sometimes to have a Guilfoyle. You know, it's like a Patsy. When something's wrong, you've got someone to place the blame on, because he's been prolific and he's done all these things, and he's not around, so surely "Gosh, Guilfoyle. What's wrong with you?" But no, this was a third party system.

**Adam Stacoviak:** What about ops in this case? Like, you're talking about the codebase, but somebody's got to keep that database up, and it seems like it's getting hit in like wild ways. Like, this chain function, for example - it's probably got the database spinning; the disks are spinning. And I'm assuming that's the data hard drives.

**Jimmy Miller:** Yeah, so the database was definitely -- we had quite a few DBAs. The DBA to programmer ratio was pretty high. And we had some very beefy machines running this SQL server setup.

**Adam Stacoviak:** On prem?

**Jimmy Miller:** On prem.

**Adam Stacoviak:** Obviously...

**Jimmy Miller:** So yeah, we had everything -- actually, at the office I was, there was like a data center area, as well as like a shipping area. So it was on prem, it was local... There was some talk about like the company building a private cloud system, and things like that... But you know, it's a little early for them to actually do that. Nothing ever came of it. Yeah, there was definitely some beefy things. Most of ops though really ran through one guy, who was really good at his job. He was the ops guy. I mean, there were technically other ones, but everything I ever dealt with, it was him doing it, and maybe delegating some tasks occasionally to other people... But it was a pretty bespoke kind of setup. Deployments were all done by hand, by him, late at night, so that way it wouldn't affect anybody... It was that kind of place, that kind of setup, where servers had pet names, and all of that.

There was some early, maybe looking at Puppet, maybe doing some of that, but nothing really came of it. So yeah, it was a pretty -- this is honestly one of the things that was so strange. The scale of the actual codebase, the scale of like how many people are using this is small, but not completely trivial. And yet, this legacy codebase especially - the other applications that were like the big rewrites had not seen production use... And we were able to, with like me, an analyst, a QA, one senior developer, and like four interns were able to outcompete all of this rewrite. We were adding new features, fixing old bugs, and doing all of that in this system, while they were off doing their big agile processes and doing all their story pointing and all of that, and never getting anything done. So it was fun.

When you actually think about it, if you're not one of these big web scale companies, servers are simple. Code's not that complicated, even if the code's complicated... You can make changes if you just don't get in your own way. So yeah.

**Jerod Santo:** It sounds fun. I mean, I would like to work on this codebase for maybe like a month, and then move on. But I'd like to visit --

**Jimmy Miller:** \[laughs\]

**Adam Stacoviak:** As a game maybe.

**Jerod Santo:** Yeah, it is a game. I mean, it's got to feel like that, to a certain degree.

**Jimmy Miller:** It did. It felt very much like a game. But I think that's how I approach most of this work. Like I said, I think the job I'm at now - we've got a big, massive, old codebase. I now work on a fork of Rhino-js.

**Jerod Santo:** Okay...

**Jimmy Miller:** \[58:06\] I don't know if you all remember Rhino. It is --

**Jerod Santo:** I do, but I can't remember what it does. But I remember Rhino-js. It was involved in my Cappuccino days. I think they were using it back with Objective-J.

**Jimmy Miller:** Yup. Yup. That sounds about right. It is a JavaScript implementation written in Java. So there's a compile to JVM bytecode, and an interpreter, all written in Java. It was abandoned years and years ago, but I now work at a company that has a long-term fork of it that runs millions and millions of lines of customer JavaScript.

**Jerod Santo:** Really?

**Jimmy Miller:** And it's got some custom features... \[laughter\]

**Jerod Santo:** Say more... This sounds good...

**Jimmy Miller:** Yeah, so we're now trying to refactor away from it, but... For example, in our original version of JavaScript that people still use to this day, if you did dots, it was like doing question mark dot. So if it was undefined, it wouldn't throw an error. It would just return undefined. This was a choice by the founder of the company. I guess I just have a knack for finding these codebases - I don't know what it is - where things are just crazy. And I think a lot of developers work in these kinds of things, they just don't talk about them publicly.

**Jerod Santo:** Totally, totally. I've had similar experiences, all I think at smaller scales, both in terms of company size and codebase. My craziest one was I inherited -- I did a rescue project for a boat shop somewhere in Georgia, where they just needed -- basically, it's a Ruby on Rails application that ran back office for a boat shop. A lot of merchants, a lot of sales, a lot of this kind of stuff. So similar tables and stuff, which is why it's probably resonating with me. And they had lost the original dev team. It was like a contract team came in, built the system, and left. And then the IT guys who were also third party kind of took the system over, because they were just nice guys who were helping out the company... That was a successful boat retail shop, and relied upon this application to run their business now. And this was like really early Ruby on Rails day. I think it was like version 1.2, or something. And so there's a lot missing. And this team came in and wrote a lot of very clever code; basically implemented a meta framework on top of it... And it was insanity. It took me a very long time to unravel. And then they left, and these people were left kind of high and dry, and so I was happy to help out. And I had the challenge, the game, all these things...

There was no development system. It was like production, and I copied the code down and tried to get it running on my machine. So you're very much like doing crazy stuff, very small increments at a time, trying not to break things... And so that experience just resonates with everything you're saying. The meta programming, specifically when you're talking about the thing that generates data structures from classes, and the database kind of is the programming system as well if you want it to be, but no one's using it... All that stuff was there, and it took me a very long time to be able to unravel it, and understand it, to the point where I was like "Huh, it's kind of clever once you know how it works... But that's -- terrible thing." And so I think -- and I didn't write up about that at all... I think there's tons of codebases like this out there.

**Jimmy Miller:** Yeah... I wish I had finished this writeup. I haven't actually done much Ruby, although I did work at Shopify on YJIT, the Ruby JIT compiler for a little bit before getting laid off, sadly... You know, it happens. But the one Ruby codebase I worked in, there was just this little bit of like super-clever meta programming, which of course Ruby loves; lots of people in Ruby love their meta programming.

**Jerod Santo:** Oh, for sure.

**Jimmy Miller:** \[01:01:58.10\] And I could never find -- the reason I never wrote it up is I could never find a non-circular starting point. Every time I would want to explain something, I would have to -- because the code like meta-looped on itself every single time.

**Jerod Santo:** There you go. See, that's the problem. It's like a time travel movie - which we talked about pre-show, so not a good callback, but... Yeah, yeah, yeah. That's one of the problems with meta programming. It's just too meta sometimes and you can't unravel it.

**Jimmy Miller:** Yeah. I mean, I think this is -- not to self-promote or whatever, but this is one of the reasons that I really enjoy The Future of Coding Podcast. Because I think there's a lot of code out there that people aren't happy with, and I don't think we talk about it. In some ways, I think looking at this legacy codebase is the same thing for me as looking at like the shiny, new stuff. I think oftentimes we don't appreciate code for what it is. We don't look at like what's come before.

We kind of look at legacy systems like they're all bad, and like there's nothing good to gain from them. I've seen a bunch of blog posts talking about crazy code, but one of the things I wanted to do in this article was talk about crazy code, but in an endearing way. I loved this crazy code. I just love code. I think no matter how bad it is, it's one of those things that like -- code is a medium to put information down that like is unlike writing. You can get a sense from this application, from my blog post, what writing code in this codebase was like... But like you said, go and do it for a month... It's fun. It's interesting. And I think there's so much more code out there, and so many different ways of writing code that we just haven't really unlocked yet, that I want to see us do more of.

**Jerod Santo:** Yeah.

**Break**: \[01:03:47.06\]

**Jerod Santo:** It's very easy, especially when you come into a codebase, to guilfoyle the thing, in the sense of how I was talking about Guilfoyle earlier, where it's like some other who was dumb, or incompetent, or malicious did this. But as you actually start to like work with it and talk to people and learn about it - okay, there are politics and there are power struggles and stuff. There are things that happen because we're humans. But a lot of it is like they made the best decision they had at the time, with the information that they had, and I'm staring at it with a completely different perspective, years later. And like that stuff is fun to learn, and you actually realize "Yeah, that duct tape was really reasonable considering all the things they considered. I just don't know those things." And so I really do appreciate code from that perspective, especially legacy systems that are still powering businesses, and bringing value to people... It's that we want to be smarter than everybody else, but those people just had different contexts lots of times that we just don't have. And you start to learn those contexts, and it gives you a new appreciation for the code that you're looking at. And that's cool.

**Jimmy Miller:** Peter Naur of Backus–Naur form (BNF), Peter Naur actually has this great paper called Programming as Theory Building. And one of the things in there that I think is really interesting is he talks about codebases dying. And by that, he doesn't mean that the code isn't running anymore, or no one makes changes on it, he means that the people who knew the original context of the codebase are no longer there. They're no longer working on it. And so everyone else that is having to make changes to this codebase is working on a dead codebase, that's no longer alive, because they've completely lost the theory of the codebase. "Why is this here? Why put these lines in the way that they are? How do I make these kinds of changes?" And he argues in there that you can't revitalize a dead codebase.

Once a codebase dies, you can create a new theory about the codebase, but it's impossible to ever recover the original one. And I feel like I've worked a lot on dead codebases, where - yeah, the people who knew that context once are long gone, don't work at the company anymore... And in some ways, this codebase wasn't dead because of Munch. Because Munch could always provide that little bit of context --

**Jerod Santo:** Breathe some life into it...

**Jimmy Miller:** Right, breathe some life back into it. And had Munch not been there, the codebase would have been completely dead. No one would have had any idea what was going on.

**Jerod Santo:** Is Munch still there?

**Jimmy Miller:** I haven't checked. I don't know if he even has a LinkedIn, or anything. Maybe he does, but probably hasn't updated it, even if he did. So I'm not sure. I know the company now doesn't have that name anymore. I don't know if that codebase is still running or not. It might be, because it was customer support and sales. When you get a big merger like that, that's one of the things that often gets -- they just choose one. Credit card processing code I'm sure is still running. But customer support might not be.

**Adam Stacoviak:** Probably not.

**Jimmy Miller:** The codebase might literally be dead now. Merchants might be gone. Merchants 3, if they ever got to that point, might not have any more data in it, I don't know.

**Adam Stacoviak:** Yeah. I do like the way that you compliment it, though. You talk about the beautiful mess, that section there, where you talk about -- which is kind of what you're talking about here... There were no overarching design systems to work in. There was a lot of freedom. There was no documented design system... You mentioned that any concerns of code duplication were out the window... You can sort of carve out your own little section, because trying to fix the big mess was impossible, so you just gave up and just worked in your own little world of insanity, as you say here. I think that's kind of cool, that somehow, someway, in this mess, you've found beauty to enjoy.

**Jimmy Miller:** \[01:12:08.13\] Yeah. I think it's something that we should do more of. I've worked in systems since that are a mess, but everyone's always trying to fix it. I get that impulse, because I hate the mess, too. But sometimes it's just beyond fixing. This is why people give the advice of "Don't do the big rewrite, because it's much bigger than you think it's going to be, and it's probably going to fail." And I think the same could be said of trying to make sense of a 10-year-old hundreds of thousands of lines codebase. There's just no way you're going to be able to hold it in your head. And when you try to come up with some overarching scheme of what the codebase is really doing, and now I can come up with the perfect abstraction, and it will do all of this - I just think it's a losing prospect. It's just not going to work.

And so yeah, I think we should embrace more -- even in good codebases, I think we often want uniformity. We want everyone to have the same coding style. We want everyone to follow the same coding rules. And I've found that often to me that ends up causing more problems in the long run. Because once you have to have everything consistent, as soon as there's a big change that needs to be done, it actually becomes harder. Because you can't do the big change all at once, and if you require consistency, it's harder to do those small changes each time.

**Adam Stacoviak:** Even the connection to the users is interesting, what you put in the after section, where you describe it as a ragtag of juniors, essentially. All the serious senior folks have gone away. Even like we mentioned this as a game - it's kind of interesting to think about this as a thought experiment of this ragtag of juniors just like figuring it out, talking directly to the users, talking directly to the support rep who's got the problem. "How can I make your life better?" That to me in the grand scheme of things seems kind of interesting, because I said "Hey, why'd you stay there?" and you're like "Well, because." And I think I can kind of see that light now in the after section.

**Jimmy Miller:** Yeah. And the next job I took actually had the exact opposite thing, where we were actually completely forbidden from ever talking to our users; not just as developers, as a company. I worked at a big company that was -- it's a big private company, they buy a bunch of companies... And we were building an application for a sister company in this big group. And they hired a contractor to be the go-between. And they were scared of us ever talking to end users, because they were worried those end users would think that their job was in jeopardy if we were rewriting this application. So we were never allowed to talk to them.

And I worked at that company for a little while, and then I left, and then went to a startup that didn't do very well, and I came back as a contractor, at the original company. And at that point they had changed this rule, where they now were allowed to talk to their users indirectly; not directly.

**Jerod Santo:** How so?

**Jimmy Miller:** Okay, so there were actually now users who are in the exact same building, two doors down from where the developers were, but they couldn't go talk to them. What they could do was those people would write three by five cards of feedback, and they would post them on the wall. And I came back as a contractor and I was so interested to see what is the feedback on the system that I knew was not a great system.

\[01:15:47.20\] It was a completely greenfield, brand new system, and because of organizational issues, as you can imagine, it did not meet user needs. And I looked at a few of them... They were all like "Please fix this UI element, please do these things", but one of them will always stand out to me... And it was very simply put. It was "Remember, you're supposed to make our lives better, not worse."

**Jerod Santo:** Wow...

**Jimmy Miller:** \[laughs\]

**Jerod Santo:** That one hits hard, doesn't it?

**Jimmy Miller:** Yeah. Yeah. And that's what this whole -- that's what I had done. The whole application I had been building with this team of 30 people was making these users' lives worse.

**Adam Stacoviak:** That sucks. \[laughter\] I mean, that's not how it's supposed to work.

**Jimmy Miller:** Yeah. Yeah. And so that's what I looked at, like the contrast between this first job where - yeah, things were an absolute mess. Whereas there -- I mean, there was no tests. Like, they just literally didn't exist, of any sort; not unit tests, not integration tests, not anything. We had manual QA that sometimes did some things... I had one really good QA for a while, she was fantastic. But by all standards, it was wrong. Whereas the next job, by all standards, it was supposed to be good. It was right. Yes, everyone has different opinions, but it was Spring, and it was Angular and we had a hundred percent test coverage. That was the rule. Every line, every if, everything had perfect test coverage. We had an end-to-end test coverage suite, we had dedicated technical QA that did all of this... And yet it was a way worse codebase. It was plagued with constant problems, it didn't meet the company needs, it didn't meet the end user needs, it couldn't scale... Everything about it was wrong. Despite like on paper we followed all the best practices. Obviously, a hundred percent test coverage is not actually a good metric, I know that. Well, I did get that one changed to 70 at some point, but...

**Jerod Santo:** I guess what's your broad takeaway from that circumstance?

**Jimmy Miller:** I think that one of the things that I've like come back to over and over again in my career, looking -- and I think this first job really did teach me this... It's that as programmers, it's very easy to give up on our responsibility, and say "I'm just doing what the business wants me to do, and that's what my job is. My job is to do what I'm told, it's to complete this story. Yes, I can maybe sometimes give input, but ultimately, I make it happen, but I don't decide what we do." Right? "I'm the how, not the what." And I think that that's always been the problem I've seen at these companies when things went poorly, was when developers just kind of gave up on doing what was good, and what was right for the system, and for their end users, and for the code, in order to just do what they're told. And I think that as programmers, we have to accept the fact that we're not hired to do as we're told, otherwise we just wouldn't have the salaries we do. Right? They wouldn't pay us this much just to not want our opinion. And even if they say they don't really want our opinion, we've got to do what's right. If you're a good friend with somebody, you don't always do what they ask you to do, but you always do what's right for them. And that's how I think that we have to approach these things. And every company I've been at where the software made people's lives worse and not better, programmers had kind of given up on doing what was right, and just did what they were told.

**Jerod Santo:** Well said, Jimmy. Well said. Anything else, any stone that we've left unturned? I'm sure there'd be dragons elsewhere, but anything you'd like to highlight before we call it a show?

**Jimmy Miller:** No, I mean -- yeah, there's tons of other stories, there's tons of other craziness... Like the time I had to split the codebase in half, and all sorts of weird things like that, but... They're a little long, so...

**Jerod Santo:** Fair. Well, great best worst blog post. I love that you wrote that up. I think there's a reason it was popular. And I think because it's a shared experience, well documented... And it's fun to laugh at these things. We laugh so we won't cry. Or maybe we laugh at you, and not with you, because I didn't have that particular problem... But I appreciate you coming on the show and talking to us about it, and for giving us some big picture ideas and hope for the future of coding, and also for the current state of coding, and code itself, and a love for it that I share at least. Even when I despise it sometimes, I still love it. And I think that that's just the way it is sometimes. Adam?

**Adam Stacoviak:** I agree. I agree. You never know when you're in the best of times.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Right? This seemed like from the outset like maybe not the best of times, but actually, it kind of was.

**Jimmy Miller:** Absolutely.

**Jerod Santo:** Are you talking about our podcast, or are you talking about his experience?

**Adam Stacoviak:** His experience.

**Jerod Santo:** I know, I'm just messing with you. \[laughs\]

**Adam Stacoviak:** His experience. That was fun, Jimmy. Thanks for sharing. Thanks for going, I think, deeper than maybe is necessary to share a story that may not even matter to anyone else besides you, and you just shared it with the world, and now we can reflect on some of those key attributes that really reflect back on the good time. Really. That's cool.

**Jimmy Miller:** Thanks.

**Adam Stacoviak:** I enjoyed it.

**Jerod Santo:** Alright. Bye, y'all.
