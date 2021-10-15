**Jerod Santo:** Welcome back, everyone, to the Changelog - a podcast featuring the hackers, leaders and innovators of software development. I'm Jerod Santo, managing editor here at Changelog. Today computer scientist Yaw Anokwa joins the show to tell us how Open Data Kit is enabling data connection efforts around the world, from monitoring rainforests to observing elections, to tracking outbreaks, ODK has done it all. We hear its origin story, ruminate on why it's been so successful, learn how the software works, and even answer the question "Are people really using it in space?" All that and more, coming right at you.

**Adam Stacoviak:** There's probably a thousand ways you can use a Computer Science degree, right? Being in school so long to get a Ph.D. in computer science must be a life's journey, but I'm sure you've got some extreme opinions on how to best use a Computer Science degree in these ages.

**Yaw Anokwa:** Yeah, I have some thoughts on that. I was in school for a very long time, and sort of early in that Ph.D. journey I had a moment where I realized that the stuff that I was working on didn't really matter to people; it didn't seem to have a meaningful impact. It was just like a fun thing to do. During that period I got a chance to travel to some places in Africa, where I saw how tech can really make a difference. That really moved me to stop working on stuff that didn't really matter to people and start focusing all the time and energy in school and education on stuff that I thought could really make a difference today, to people who needed it.

I think there's always gonna be lots of people working on ad targeting, or some of the stuff that big tech companies work on, but I feel a really strong passion for using technology to help folks who need help... So I've dedicated most of my graduate career and post-graduate career to working on that problem.

**Adam Stacoviak:** Give us an idea of your journey in school. What's required to get a Ph.D. in computer science?

**Yaw Anokwa:** Stubbornness... \[laughs\]

**Adam Stacoviak:** Tenacity, resilience...

**Yaw Anokwa:** Yeah, all those things. I had sort of a strange enter into computering. I'm originally from Ghana, in West Africa, and I moved to the States when I was about ten, with my dad who found a job teaching at a public university... And I remember coming to the States for the first time, walking to my dad's house, and seeing a little math \[unintelligible 00:03:57.00\] I remember my dad saying "Don't touch that." And yeah, naturally, I spent pretty much every waking hour I had playing with that computer \[unintelligible 00:04:06.18\] more on a college campus, got a chance to go to the library; they had old VAX terminals there, I played with those... So I was pretty in love with computing from a pretty young age.

\[00:04:19.09\] I ended up going to Butler University and got a bachelor's in Computer Science, and another in Electrical Engineering. I did both simultaneously. There's a special program there that you can do both.

I went on to do a Masters in computer science from UDUB, University of Washington in Seattle, and during that process was sort of when I had this "Come to Jesus" moment about working on meaningful problems. To answer the core question, what does it take to get a Computer Science Ph.D. - I really think obviously you have to have some minimum threshold of interest in computing, and be reasonable at math... And then the rest is being fortunate enough to have a good advisor, who can guide you... And then stubbornness I think is really the key.

**Jerod Santo:** You might have an interesting opinion on this - a little while back, episode \#339, we had Adam Barr on the Changelog. He's a 23-year Microsoft vet. He wrote a book recently called "Why smart engineers write bad code", and it was critical of Academia with regards to Computer Science specifically. His reasoning is because he says in his experience working with a lot of schools that during a Computer Science (this might be just a bachelor's degree) they do not have the necessary scope requirements, the depth of the systems that are built, just because of the time involvement, and because of the curriculum, and these other things aren't real world enough to actually get you what you need once you get out there. You've been in Academia for a long time - does that resonate with you, or do you find that maybe it does not, or what are your thoughts?

**Yaw Anokwa:** Yeah, I have been in Academia for a long time, and my wife is also a programmer. She taught at the University of Washington, the intro classes as well, so yeah, I have some pretty strong opinions. For me, the goal of particularly a Computer Science degree isn't to -- it's not a trade school; the goal isn't to teach you how to be a good programmer. The goal is to teach you about computing and how to use computing to solve problems.

The focus shouldn't necessarily be on languages, it should be more on, in my opinion, algorithms, decomposing problems, having the fundamentals that you need to learn different types of programming languages, getting exposure to that. And then the hope is that once you start getting into the world at large, you have the basic skills needed to actually build systems and learn rapidly. That to me is like at a bachelor's level what you should be learning.

At the master's and Ph.D. level the goal is just to come up with a new idea and evaluate that idea on some particular dimension. You will find a lot of PhDs in Computer Science aren't necessarily good at programming, but they are very good at solving that classic problem where there is a new problem, a new way of thinking, and they've measured it in some way, they've done science on it.

I think bootcamps are if you want more of a trade approach, where you get a bunch of skills. That's where you'll get that. But for me, a Computer Science degree, bachelor's level, is really about a set of skills, a way to think about computing.

**Jerod Santo:** Yeah. So if somebody came up to you today in 2019 and said "I want to be a software engineer", would you advise them to start in a trade situation, start with a bootcamp and then back-fill perhaps the fundamentals later with a bachelor's degree if they want? Or would you say "Go to a four-year college"? I'm just curious what your advice would be.

**Yaw Anokwa:** \[00:08:06.12\] Maybe I'm old-fashioned... I'm an academic, my wife's an academic, my parents are academics... \[laughter\] So I would say definitely a four-year degree. For me, it's not just the idea of just getting the skills needed to become a good software engineer. It's also about -- you know, I went to a liberal arts school for undergrad, and it's also about getting exposure to different arts of the world: language, music, religion. All of those influence the kind of work that you do.

In my particular case that's a journalist, and so I spent most of my undergrad building an online newspaper. I learned a lot from that experience, and that informs the kind of programmer and software engineer that I am. So I think just the strict focus on acquiring a particular set of skills - it lacks some of the richness that I think a four-year degree potentially gets you. I think you need that versatility in a large business.

**Jerod Santo:** You mentioned that many Computer Science PhDs aren't necessarily good programmers... Would you consider yourself a good programmer today?

**Yaw Anokwa:** I would not consider myself a good programmer today... \[laughter\]

**Jerod Santo:** Why not?

**Yaw Anokwa:** Why not - one is practice. These days I don't spend a lot of time writing code. I am doing everything from marketing, to fundraising, to community management, thinking about governance... So day-to-day what I mostly do is write emails. And think about writing emails -- write those emails, follow up on those emails... Yeah, that's where I spend most of my time. At the end of the day it's communicating with folks, making sure everybody's on the right page, and making sure that everyone in the community and at the company is moving in the right direction. It's probably bad for the project if I'm writing code... Because it means other high-level stuff isn't getting done.

**Jerod Santo:** There you go. Well, let's turn our focus to the project. We wanna hear about how it started. It's called Open Data Kit (ODK). I should mention upfront here that I would not have heard of this were it not for Brett Neese in our ping repo, so thanks, Brett. I thought I would just read what he said was interesting about it, but we wanna hear the history of this before you bring us up to present day, what that community looks like, and everything. He says to him what's interesting about ODK is that it's using a lot of different environments than some of the software that we talk about commonly on the Changelog. He says it's similar to Singularity in that way. You guys can go back and listen to that Singularity episode if you want another different thing.

And he says "It seems they're targeting a more academic audience", which makes sense talking to you, Yaw... "It's used anything from monitoring rain forests in the Amazon, to observing elections in Albania, to tackling in Ebola in West Africa." Brett personally uses it in an engineering firm, where he maintains an ODK server to collect data from telephone poll inspections.

Pretty much data collection is what it's about, hence the name Open Data Kit... And really, it seems to be about bringing data collection capabilities to places where it previously wasn't, or couldn't be, for various reasons.

Thanks, Brett, for bringing this to our attention, and we hope you enjoy this conversation. You were right, this is very interesting, and Yaw has a very interesting back-story on how this whole thing came to be.

Yaw, tell us about that, Open Data Kit. Was it part of your work at your university? And it's still going today, still very valuable. How did it start?

**Yaw Anokwa:** \[00:11:48.08\] I could talk a little bit about that... So I moved to Seattle in 2005. I was accepted to a Ph.D. program at the University of Washington in Seattle. I was gonna study AI, and I sort of abandoned that notion pretty quickly, mostly because I found I had a great relationship with a professor there, Gaetano Boriello, who really sparked my interest in -- at the time it was called Ubiquitous Computing; this idea that you can have computing everywhere, and human-computer interaction, human interfaces to those computers.

So I started working with Gaetano, and during probably my second year I saw a talk at UDUB from a guy called Neal Lesh, who was at that time sort of a wandering guru. He'd travel from place to place, primarily in sub-Saharan Africa, and help hospitals or whoever needed help with whatever computing problems that they had. That really inspired me. I was going through a time in my life where I felt like the stuff that I was doing didn't really have a broad impact, and it seemed like all this education for not a lot of value to the population at large.

So after listening to Neal, I got a chance to put a pause on my master's degree at that time and go to Rwanda to work with a group called Partners In Health. At that time, they were deploying an open source medical records system called OpenMRS. They were doing it in a small town in rural Rwanda, and I saw during those six months that I was there how important an electronic medical records system could be to treating HIV and TB patients.

A lot of chronic care like HIV and TB is done on paper, and paper really limits how effective you can be at treating those patients. It's not like malaria, where you get treated once and it goes away. Every few weeks, every few months you're at the hospital. So electronic medical records definitely help.

So I had that experience and I learned from it, and I saw how important paper was to the process, and how critical electronic medical records tend to be to \[unintelligible 00:14:11.22\] method. So I kept wandering Africa at the time, and Gaetano sort of summoned me back to Seattle, and said "You've been wandering for a while..." He was going to take a sabbatical from UDUB to go to Google to work on a mobile data collection project. This was right before Android was released, and so Gaetano had this idea that a lot of his students were sort of working in the technology for development space, and that the common theme seemed to be removing paper and digitizing processes.

I thought this idea was terrible, to be honest. I was like "I'd rather just bum around in Tanzania for a little bit. I don't really wanna be back in Seattle and working on this stuff", but Gaetano and his students, friends of mine, Carl Hartung and Waylon Brunette, sort of convinced me that it was worthwhile... So the three of us went to Google as interns for a year and built out what became initially Open Data Kit. We did it open source from day one, because we're researchers and grad students and we thought it was really important to make it open source, available to as many people who wanted to do research on it.

At that time Android just came out. We released the first version of ODK as soon as Android was publically released... And actually, funny story - at that time there were the Sidekick style devices; those initial devices, we took 20 of them. I think Carl and myself were the first people to bring Android devices to the entire continent of Africa, because it wasn't released there yet. We stuck them in our bags and took them to Uganda to do a quick project... And that's what kicked off the project. That was in 2008.

\[00:16:01.22\] From there, the three of us had a year at Google as interns, and then went back to the university and started to build out what became this entire ecosystem of tools. That was in 2008, and now it's 2019, so it's gone on to become the standard set of tools that folks use when they're collecting data in a field environment, and it all sort of started from that project we started when we were interns.

**Jerod Santo:** Over a decade ago now.

**Yaw Anokwa:** Yeah, it's crazy, right?

**Jerod Santo:** The timing seemed perfect with Android coming out, and the timing with regards to cutting over from paper to smartphones and tablets... Because now all of a sudden smartphones were available. The iPhone pre-dated Android, but it wasn't gonna reach into the same places that Open Data Kit wanted to reach into.

**Yaw Anokwa:** Yeah, and that's one of the great insights of Gaetano - he saw that this was really a good chance to be on a platform that worked on a number of different devices. You have to remember we were coming from \[unintelligible 00:17:12.05\] and Blackberries at that time, so the smartphones were really a powerful platform where we could build a whole new generation of applications. And because Android was designed to work on a bunch of different hardware, from a bunch of different manufacturers, we thought it was gonna be really important that the places that we wanna serve - sub-Saharan Africa, remote jungles - a variety of devices was really important. So Gaetano was able to convince at that time Andry Rubin, who was running the Android team, this is a worthwhile thing to try, and so he funded us for that initial goal, and it seems to have worked out very nicely.

**Jerod Santo:** When we talk about impact, ODK has been used now by thousands of organizations such as the Gates Foundation, USAID, World Health Organization, Jane Goodall Institute, collected billions of data points... Could you give us a few highlights maybe? Things personally that you felt good about it being used for out there in the world, helping people.

**Yaw Anokwa:** Yeah. There are a number of these kinds of projects. Literally two hours ago we got word from the London School of Tropical Hygiene and Tropical Medicine - these are the folks who are currently working with the World Health Organization in the Democratic Republic of Congo, where there's currently an Ebola outbreak that's happening in the DRC. I think there's been about 2,000 people infected currently.

In the first 300 or so days of the outbreak -- this is the second outbreak that's happened, so there's been a vaccine that has been created that is going through a set of trials. I think about 135,000 people have been vaccinated as part of that effort, and the documentation about that vaccine, who's gotten the vaccine, when, and where, and how much - that's all collected using ODK. There have been about one million submissions just from this outbreak alone that have come through ODK, because of the tools that we've built. That's an example.

Another health example - one of my favorites is polio eradication. From World Health Organization's polio eradication efforts from Afghanistan, Pakistan, Somalia - all those vaccination campaigns, when they go out and they vaccinate hundreds of thousands and millions of kids, the documentation about that vaccination is all done through ODK.

The Jane Goodall Institute, when they're tracking conservation efforts in Tanzania, they use ODK. The Carter Center... Jimmy Carter tried out ODK and he said it was remarkable. That's one of my favorite stars.

\[00:20:02.16\] All of the recent elections in Egypt, and all these places - all that documentation is done through ODK. The tribes in the Amazon who protect their forests by documenting illegal logging - that's done through ODK. There was an election in Albania last year, and the monitoring was done through ODK...

So everything from healthcare, to climate monitoring... I know the Portland bus/public transit people - they do their surveys through ODK. The tools have this wide usage, where anytime that you have essentially a piece of paper, and you wanna collect data on that piece of paper but you want it to work offline, and you want it to have logic, and you want it to have GPS coordinates or pictures - anytime you have this process where you'd ordinarily collect data on paper, you can use ODK.

I think over the last 10-12 years we've seen -- there's a project on a space station that uses it. So I've seen it pretty much everywhere... It's pretty humbling.

**Jerod Santo:** Did you know there's an engineering firm out there using it to collect data from telephone poll inspections? \[laughter\]

**Yaw Anokwa:** Yes, I did, but I'm not surprised. One of the real challenges of open-sourcing this way is that we don't really have a lot of visibility; by design, we don't have a lot of visibility into who uses it. We want people to own their data, and \[unintelligible 00:21:27.13\] So the telephone poll example doesn't surprise me anymore. I got an e-mail from a manufacturing firm in China that makes the seats for Teslas. They use ODK. So it just seems to be ubiquitous now. Nothing surprises me anymore. Also, at a dinner party I said what I was doing, and somebody was like "Oh yeah, I use that." So yeah... It's pretty cool.

**Adam Stacoviak:** One of the points for software is to be adopted, right? One of the bigger hurdles of open source is to be adopted, to be widely used. What do you think for ODK was that? Was it simply the need, was it being open source, was it phenomenal marketing? What do you think made it be used so widely?

**Yaw Anokwa:** I don't know about phenomenal marketing... I don't think our marketing is that phenomenal; it's mostly me tweeting sometimes. So I think the important thing that allowed us to take off is luck and timing, basically. It was at a stage where Android was just coming out; we had folks who were stopping use of PDAs \[unintelligible 00:22:44.26\] based phones and were looking for alternatives, and technology, infrastructure in the places that we work particularly - you're getting more smartphone and cellular infrastructure in sub-Saharan Africa. That took off.

And then we, the core team, we're very committed to supporting out users... So I think for a long time, before the project really got big, if somebody sent an e-mail out to the ODK mailing list, somebody (generally, often me) would get a response in under an hour. So being able to support people who are using this piece of software was a big growth driver.

And then the other thing is I don't think open source matters as much in this use case, but free matters a lot. For example, let's say you are at the Red Cross - this was in Mozambique, there was a hurricane/cyclone - and you need to go out and hand out supplies and document what supplies you're handing out to people, you're not gonna be able to get a credit card. The country office doesn't have a credit card, because it's Mozambique. By the time you get to the approval process at Red Cross in DC, or in Geneva, the crisis has magnified to the point where it's no longer tenable. So the fact that you can download it and use it for zero dollars is huge. If it was one dollar, the adoption wouldn't necessarily be there. I think the free is an important thing.

\[00:24:22.12\] The fact that it's open source also means that people don't feel locked in. Often times we have projects with large governments, and governments don't wanna use a Salesforce or something where their data is trapped in servers that they don't control, by companies that they have no jurisdiction over... So for very large health projects, say in Kenya or in Nigeria, the fact that it's open source makes a huge difference.

I think those are the things that played a part - luck and timing, and the fact that it's free, and that folks who deploy it have ownership of their data and their infrastructure I think is a big part of it.

**Break:** \[00:25:05.21\]

**Jerod Santo:** So free software is nice, well-timed software is nice, and like you said, luck's always nice as well; there's lots of ways that you can get to that ubiquity... But you also can't get there if the software doesn't deliver on its promises. One thing I read is that you all had some early goals for ODK, and it seems like achieved them, at least to a certain degree, enough that people wanted to keep using the software. Those goals were you wanted it to be easy to try, easy to use, easy to modify, and easy to scale... So the keyword there being "easy." I'm curious how that came out, and whether you felt you achieved it early on, or today... Talk about these goals of yours.

**Yaw Anokwa:** Yeah, I think it's pretty punchy, right? Nice, clever marketing there.

**Jerod Santo:** Yeah. Did you back-fit that one, or did you write it on day one?

**Yaw Anokwa:** I think maybe day two or day three...

**Jerod Santo:** \[laughs\]

**Yaw Anokwa:** I was in charge of marketing back then.

**Jerod Santo:** There you go. Did you tweet that one?

**Yaw Anokwa:** There was no Twitter when we started, so I think it's \[unintelligible 00:27:27.07\] From my perspective, and I think the early founder perspective is that a lot of the folks that we were working with in the very early days didn't necessarily have technical expertise. The user that we're dealing with is maybe a health organization who doesn't have a lot of funding; the people who are going out to collect the data are maybe a subsistence farmer who hasn't at that time seen a smartphone before. So you're given -- I think at that time the initial devices were $600. We gave $600 devices to folks who don't have any experience with smartphones.

\[00:28:09.08\] Some of the early problems that we were running into are, for example - and this is a podcast, but you should look at your hands, and if you feel your fingertips, they're like these soft, squishy fingers; and those work really, really well on smartphones, because you don't have any calluses. If you do have calluses, if you work on a farm every day, your fingers don't really work on touchscreens the same way. Probably either have contacts or glasses, most of our early users didn't have corrected vision. So that's sort of the user base that we're working with - organizations that don't have a lot of technical capacity, users that aren't very technically experienced. So easy was the only way that we could ensure that folks would use the tool.

So we spent a lot of time - and continue to spend a lot of time - in the field, working with folks, just watching how the user stops when making those adjustments.

Easy to use means that the average country office or the average person who's doing the survey can design the surveys and get them onto the device, an enumerator is how we call the people who collect the data. An enumerator can take the tool with a very little amount of training and can go out and collect the data. So that's sort of the "easy to use, easy to try" part.

The scale is really critical, because a lot of these projects, once they get going, they generally have a ton of momentum. I think at this point, if I look at the mobile app, over the last year we've had about 2.5 million users use it, and a lot of those users are in Nigeria, or India... So these projects start very small, but they scale up very rapidly, where they have thousands of people on the field, collecting tens of forms a day... So it just get really big, really quickly, so we wanna make sure that the software, while it is easy to try, that once you ramp up and once you go to scale from your pilot, it just kind of keeps working.

And then modification is also really important, because you can't predict everything. We've never wanted, especially since we were just grad students, working on an out-of-town, very small project, we didn't want to be the blocker on some large project or some small project. If you wanted to take the software and it wasn't what you wanted, you could just take it and modify it how you see fit, and get your work done. And all these things -- it's been good and bad. It's been good in the sense that our focus on ease of use, with a little bit of flexibility, has gotten the software to really get out there, and a lot of people use it... But it also made maintaining and evolving it also a nightmare many times.

There's an old xkcd comic where there's a guy who's fixed a bug, and a user complains that "This bug is critical to my use case." I think the bug is something like "My fans go up to 100%." So I fix this bug, performance is back to normal, the fans don't pick up anymore, and then somebody writes in and says "I use a temperature sensor on my computer to run this command, so you've broken my workflow" Just add up. A lot of ODK is like that - there's many things that are easy to modify, and easy to scale, but the process of maintaining and evolving the software sometimes adds up. But that's just software.

**Jerod Santo:** Yeah, especially valuable software. The more valuable it is, the harder it is to change over time, because more people are using it, you have more people using it in places where you didn't expect, or like you said, they rely on that bug... "Hey, I needed that bug!"

**Adam Stacoviak:** I would imagine too that you have some issues potentially because you've got people that are using these devices that may be learning as they go, and I'm assuming it might even be kind of hard to get the bug reports, so to speak, from the actual user.

**Yaw Anokwa:** \[00:32:15.00\] Yeah. It's a very insightful comment, because the person who touches the software -- we have this active community forum, with about 9,000 people on it, which is great... And most of these folks on the forum aren't enumerators, or people collecting the data. So when we roll out a software update, we know it's going to devices and people that are in situations that are life-threatening; there are situations where they may be the ones to collect data, sort of a one-shot thing, but they're just using the software and they're not technical experts. So it's rare that we get a bug report from a user. Our bug reports come through either great logging, and betas, and also just being super, super-careful about incrementally rolling out things, so we get a chance to gather feedback from folks wherever they are.

Yeah, we don't often get bug reports from users. We get stack traces when there's a crash, and we try to have long betas, and we try to get people to try things out before it rolls out to the population at large. So yeah, they're both tough problems.

**Jerod Santo:** So let's dig into the software itself for a little while here. I'm sure it's changed over time... It sounds like now you have two sets of suites. ODK, which is for the common case, and then ODKX, for complex workflows. Maybe we can talk about ODKX a little bit later... But ODK itself also seems to have at least two parts; maybe there's more now, but it started off as the collect side, which I assume is the Android app, the data gathering piece, and then there's the aggregate side, which is a storage management thing. That's as well as I understand them right now. Unpack that for us, and then help us understand how -- so I get the collection and I get the aggregation, but then also how are the surveys themselves defined and designed by your enumerators?

**Yaw Anokwa:** Yeah, for sure. So because the project has evolved over time, now there are sort of two suites. There's ODK, which is sort of a classic ODK that everybody knows, and then there's ODKX, which is -- they're not really competitors, but it's a different take on the data collection problem. So there's trade-offs as far as complexity, and ease of use, and power.

I'm gonna focus on the core ODK tools that I think most people know. Those are the ones that are just really largely deployed. The reason it's called Open Data Kit - that "Kit" is really important - is because it's a series of tools that all sort of plug and play to let you collect and manage your data.

So there's ODK Collect, which is the mobile app. That essentially renders forms, and lets you collect the data. There's ODK Aggregate, which is a Java-based server that runs either locally on the cloud, there's ODK Central which is another server, but different stack. We have ODK Build, which is a form designer, and then we also have ODK XLS Form, which is another form designer.

Probably the easiest way to explain this is sort of walk you through the process of what it takes to get an ODK (we call it) campaign up and running. Let's say you have a paper form with three questions - name, age and gender. And maybe a GPS location. The way you would get this form designed is that you use a tool like ODK Build, which lets you sort of drag-and-drop questions into a web interface. And once that questionnaire is essentially designed, you get it published and it goes to your ODK Aggregate server.

\[00:35:54.16\] Once that form is on the server, the server takes that form and uses it to build a database back-end, with all the tables that you need. You connect ODK Collect (your mobile client) to the Aggregate server, and it pulls down the form, renders it on the device. Now you can go out and you can collect your data. When you're ready, you hit submit, and then that data goes back to Aggregate.

So use Build to design the form, Aggregate to host the form and the submissions, and Collect to collect the data. That's a very typical use case.

Because we have a kit, there's other ways of doing it. If you don't like a drag-and-drop form designer, we have an Excel-based form designer that's extremely popular - probably the most popular way that people design forms - called ODK XLS Form. Essentially, each row in the spreadsheet is a question that somebody's gonna ask, or see. If you don't like Aggregate, which is in Java - robust, but a pretty heavy Java-based server - we have ODK Central, which is another server that's primary JavaScript-based.

So people can pick and choose which tools work best for their scale, for their users, but fundamentally you design a form, you put it on a server, and then the phone talks to the server to send those submissions.

One important thing to stress in all of this, and a real value-add of ODK - there's a bunch of value-adds, but a big one is that it's all offline. When people think of forms, they think of maybe SurveyMonkey, or something like Wufoo... ODK is designed to run entirely offline. The forms can be designed offline, you can collect your data offline. We have folks in the rainforests that have been out for months at a time, collect all the data... They can opportunistically send data to the server when it gets it, but it's all designed to be offline.

It's also designed to work really well with -- the UI design, to work well with lightly-trained users, for folks that have never seen smartphones before. Everything is big, high contrast.

It's designed to work in multiple languages. The mobile client, for example, is translated by our community into 56 languages, last time I checked. So you can have the app itself that's translated in different languages. And then the forms themselves that are on the app can be in different languages. You can have a phone that's configured -- all the menus are in French, and then you can open up that survey and toggle that survey between French, Japanese, Swahili... You can even have an emoji font. You don't need to have text to describe the forms. For example, you can have video or audio instead of a question text. This is really important for users who may not be literate. You can essentially have a survey where it's just a series of videos that are showing the person what kind of information you wanna collect. So again, it's like SurveyMonkey, but crazy powerful, and all working offline.

Hopefully that should give you a sense... You build a form, you get it on a server, and then you collect the data... But you know, it's more powerful than that.

**Jerod Santo:** I'd be curious, is there any way of printing the form, and then ingesting it via OCR, or something, later... Because that would be the ultimate in going into the far reaches; you don't need batteries, you don't need a device at all, but you could just scan the answers later.

**Yaw Anokwa:** Yeah, so that's a great idea. The way we actually handle the battery problem is interesting. Because we're on Android, we run on a bunch of different devices. At this point 14,000 different devices that we run on...

**Jerod Santo:** Wow.

**Yaw Anokwa:** And some of those -- there's TV... We run on TVs if you wanna take a TV out into the field to collect data. We support that. But there's also a lot of low-power devices, like eReaders, that the data collection works on. You can handle batteries that way.

The variety of devices also lets us handle different use cases; I was talking about Amazon rainforests... But there's places with heavy canopy, where you need an external GPS and a device that is extremely humidity-proof, so we run on those devices as well.

\[00:39:59.05\] As far as being able to do OCR, we do have some researchy apps. One is called ODK Stamp. That does exactly that, where you can essentially annotate a sheet of paper, collect the data that way, feed it into the app, but it's not widely deployed as the rest of our tools.

**Jerod Santo:** That's really cool. I love that it runs on eReaders. And TVs - that just seems kind of ridiculous, but okay... \[laughs\]

**Yaw Anokwa:** It's ridiculous, but it turns out it's great for training.

**Jerod Santo:** Okay...

**Yaw Anokwa:** So if you are at some ministry of health, and you don't have a device there, but you have an Android-enabled TV, you can just go to the Play Store, download the app, and you can walk through some complex forms and really show folks how the app works. So... You never know.

**Jerod Santo:** Yeah, you never know.

**Adam Stacoviak:** What's deployment like, from all the different devices? How do they get the forms?

**Yaw Anokwa:** Yeah, there's a couple of ways of doing that. Let's take a small deployment. Let's say there's ten data collectors/enumerators who are going out on the field. Maybe one person who's more experienced; a supervisor has designed the form. To design a form you either need an Excel-based tool... They've set up a server in the cloud, so they put the form on the server, and then they take the ten devices that they have, they configure just one, and then in ODK Collect you can -- once you've configured the device, it can generate a QR code. Then you take the other devices and you scan that QR code and it configures the rest of the devices that way. Essentially, you can either type stuff in manually on all ten devices, which seems annoying, or you can just configure one and then scan the devices.

Once those ten devices have been configured, the phone can then download the forms that are available on the server onto the device, and then you can go about your day, collecting the data. That's for a very small deployment.

For large deployments, if you have 10,000 phone, you need more people, but you can essentially also put a settings file onto the device, however you want to do that. The reason that this configuration is really important is because of the flexibility of the mobile client. There's buttons on the screen that you may want to hide. You may not want your enumerator to be able to delete data once it's collected, for example. So each device has to be configured for the appropriate permissions level for a particular deployment.

**Jerod Santo:** What if you're gonna deploy it into space?

**Yaw Anokwa:** If you're going to deploy it into space... \[laughs\] The space is probably really interesting, because they had about 3,000 -- this is a project about 5-6 years old now... They had about 3,000 people in rural Kenya, handing out water filtration devices, and collecting GPS coordinates and bar codes of each devices that was handed out, and then they were sending it off to a server. The campaign was run by an astronaut, and so he was in space, configuring devices and playing with the data on the server.

It turns out when you're deploying in space there isn't dramatically -- at least for our software, there isn't a dramatically different set of steps that you have to follow.

**Jerod Santo:** That's nice to know. For my next space deployment, I just do the regular thing.

**Yaw Anokwa:** Just do the regular thing and it'll work great.

**Adam Stacoviak:** It sounds like an early need to do offline was a pretty significant thing for adoption, because there isn't obviously a network... I'm wondering, is there like a local land kind of scenario, where maybe there's a network, just not a WAN? Is that kind of how this works, in a way? ...where you may be offline, but you're sort of on a local network; still kind of not really online, but kind of offline.

**Yaw Anokwa:** There are some projects where they'll have a hot spot, or something... For those kind of deployments you can imagine, I'm in a small city - not a domain city, but in a small city - and I've sent out a bunch of data collectors to even more rural locations. They come back to the hotel, this small city has set up a WAN, and then they submit data to a desktop computer that's running the server software. That's one use case.

\[00:44:18.06\] But the more common use case is that there's no connection whatsoever, no WAN, no nothing... So you collect the data, but there's almost always a cell network nearby, or close enough. It's at that point where if you have a connection, you can send it to the server; that's a second common use case.

Then a third common use case is that there's no connection, no internet anywhere, so you just plug the phone into the computer, and then we have desktop software that pulls the data from all the devices that you plug into it, and then it generates whatever reports you want.

**Adam Stacoviak:** Good old wires, making it happen.

**Yaw Anokwa:** Yeah, good old wires. \[laughter\]

**Jerod Santo:** I love talking about software that's been around and used for a long time, because you guys have been through so much; you handle so many different cases. It's not like this is a beta or this is a 1.0. We didn't think of that. Everything we've thrown at you, you're like "Oh yeah, this is how it works. This is how you do it. Here's a weird scenario; it still works, it's just not great", or whatever. But there's something about software that stood the test of time and been used en masse for a long time. Sure, it's got its warts, it's got its bugs that are actually features, that are actually bugs, but it also has a lot of weird, strange things that it can manage, because it's had to.

**Yaw Anokwa:** Yeah, and one great example of this is we've had one guy show up on a forum and say what he was using ODK for. As a gift to his wife, he had built essentially a jukebox with this software. I have to explain this, because it's a little crazy. So if you think of something like SurveyMonkey, you can have questions that are radio button questions, right? Then you can have the next screen show results based on those answers. In ODK you can have text answers, but you can also have audio answers as options when you're doing the radio buttons.

So he had built a handle where the radio button selected a song you wanted to play; when you go to the next screen, it would show you the lyrics of the song, plus an audio snippet that you could play it. You know, when people think of data collection, they really think just purely as a replacement for paper forms, but what it ends up being is sort of a lightweight programming environment for folks who are super-creative.

There's use cases where people build a form that's really a triage protocol. So you can hand this phone to a nurse, and they walk through the same steps that a doctor would walk through to triage the patients. So there's all these kinds of use cases that if you're at it for ten years, we sort of covered the long tail of what people want to do.

**Jerod Santo:** That's awesome.

**Yaw Anokwa:** Yeah.

**Jerod Santo:** On our last show we were talking about CSS and HTML, and there was a survey that went out with questions about HTML and CSS, and one of the questions -- was it HTML, Adam? "Is HTML a programming language?" or "Is CSS a programming language?" And it was funny, because we had a brief conversation about it, but then on the interwebs throughout this week there's been THE conversation, like "Are these things programming languages?" And let me just go back -- last week I was saying it's not a programming language... Okay, CSS can do some crazy stuff I didn't realize... So yes, it's Turing complete, so I take it back. I was wrong. Adam, you were right. It just shouldn't be. It shouldn't be one, but it is... So that made me think of "Okay, they're using ODK for all these crazy things..." It leads to the question, "Is ODK a programming language?" It might be.

**Yaw Anokwa:** I would say it's not... Maybe this gets into the underpinning technologies that we use. The forms that you're using, the drag-and-drop form designer, or the Excel-based form designer - all those output an XML document, and that XML document is an XForm.

\[00:48:10.06\] The XForm is this old open source standard that IBM came up with for forms. I think ODK and maybe Orbeon Forms, which is another open source project, are probably the only people on the planet who continue to use XForms... But we found it a really powerful standard for Turing complete forms. Our engine is not as powerful as it could be, but it essentially lets you do all sorts of crazy things with these XForms.

So for our users who are particularly advanced, who step outside of the graphical designer or outside of the Excel-based designer and jump into \[unintelligible 00:48:47.23\] build some really powerful tools using that forms spec. So yeah, I don't know if we can guarantee that it's Turing complete, but you can build some wild stuff with these forms.

**Break:** \[00:49:08.09\]

**Jerod Santo:** So earlier you said that you don't feel like you're a good programmer anymore, and then you went on to list off what sounds like some pretty amazing software that's come from ODK and that project, so I'm guessing you have more people than just yourself involved, because you've got a lot of awesome software out there, and you surely didn't build it all by yourself. Can you tell us about the team, the community, what's grown, who's involved, and so on?

**Yaw Anokwa:** Yeah, absolutely. You're right, I didn't build it all... \[laughter\] Actually, I did. It was a long decade of writing code. \[laughter\] You know, ODK is possible only because there's a community of people behind. And when I say community, I don't just mean the software developers. Everybody who files a bug report is a community member. Anybody who writes a little piece of doc is a community member. Whoever does a training... Because it's only through the individual efforts of these folks that this stuff works. And this is really important in our use case, because (I think we have talked earlier) most of our users are not technically savvy.

For some people, we're out in the field and we'll see that somebody is struggling with a very subtle bug. And this is a bug that's been there for a while, and maybe millions of people have experienced this bug, but nobody complained. Nobody said to their supervisor or hopped on our forum to complain... So everyone who does that or who contributes to the project really is a member of the team.

The project is organized currently as -- there's a project management committee that sits at the top. Each of the suites of software have their own technical steering committee. I'm gonna focus on the ODK technical steering committee - we have folks from companies within the ecosystem who are there as sort of oversight of the project. And then the core software development - the majority of it is done by Nafundi, which is a company that I run. We have a team now of about 7-10, depending on how you count, who do the core development on the tools. Then we have a number of contributors that have come in through either Summer of Code, or just people who use software, friends with the software, who contribute code.

\[00:52:25.08\] The way it typically works is that we start from our forum, where almost all the developers and a big part of the more experienced users live when they have each their ideas or feature suggestions; we have those discussions on the forum. Once it's to a point where we feel like "Oh, that's a pretty good feature idea to spec out it goes to the technical steering committee, where we discuss it, make sure it's within our scope of what we wanna build. Then that goes to GitHub, where it's filed as an issue, and then usually somebody from the team at Nafundi builds it.

The PR is reviewed by somebody else, and then eventually it gets merged and it's released. There's a beta and it's released to the community. That's how it works.

Most of our contributions are not -- so we have a few contributors who are regulars on the code side, but we have a ton of contributors on the support side; people who show up to our forum, who use ODK, who like it, and who are there to answer support questions from other newer folks in the community. We have a lot of those contributors. That's how the magic happens.

**Jerod Santo:** I just wanna say, those kind of contributors are awesome. They just hang out, they're there, they're part of the community, they answer questions... Sometimes they're the unsung heroes of communities, because they don't normally get the press or the thanks so much, but they're hugely valuable. They make a group feel like a community, or people feel like a family, or whatever, because they're there, and they're part of the team, even though they're just happy users.

**Yaw Anokwa:** Yeah, and I think in our case it's so important... Well, one - I'm biased, because the vast majority of my time is spent answering support questions. I find it really valuable, because one complaint means that there's probably like ten people who have that problem. So the more support questions we answer, the more in tune with what the needs of the broader user base are.

At Nafundi we try to make sure that every dev is on the forum and is answering support questions... Because if you're not doing that, you're not feeling the pain, and you're just building random stuff then at that point.

**Adam Stacoviak:** It emotionally connects you to the software you're making, because you can truly see the people that are using it, the impact the errors or bugs or downsides of software - how they're impacting that person, and it provides an empathy path.

**Yaw Anokwa:** Yeah, for sure. Absolutely.

**Jerod Santo:** So when did you start Nafundi, and what gave the idea to do this, and how is it going?

**Yaw Anokwa:** Nafundi started -- let's see... ODK started in 2008, and Nafundi started in 2011. It was founded by myself Carl Hartung. Carl was also my co-founder on ODK and no longer with the company, but we are still here and growing like crazy.

The company started because Carl and I wanted to keep working on ODK. Eventually, they give you a Ph.D, and since 2008 to 2011 we had poured a lot of time and effort into not just the software, but growing a community and ecosystem around it. I can't speak for Carl, but for me, I felt like a deep responsibility to try to keep it going as long as I could, and Carl agreed.

\[00:56:02.16\] We also kept getting projects, people kept using ODK at scale and needed help, so in 2011 when we graduated -- or when we decided we were going to graduate in 2012... So in 2011 we started the company, as essentially providing professional services on top of ODK. Within the first few months, larger and larger projects were coming our way. Our model at that time was we take consulting dollars, we charge a premium, and then we do forks, or we do core contributions, and whatever margin that we get, we use it to work on the unpleasant infrastructure or core changes that no one was paying for. You know, just standard professional services, open source sorts of stuff.

Over the last two years we've moved more into doing grant writing. At this time, myself and Alan, Martin, are now owners of the company. Our model is doing like 25% consulting work, but 75% is grant funding. We bill to folks like large foundations, government entities like USAID, Gates Foundation, and we make the case that ODK is a critical part of the global health and global development infrastructure, and that a lot of their grantees and their projects use the software, but don't necessarily have a line item to support it.

I think it's really awesome that the World Health Organization, or the Carter Center, or the Red Cross uses the software... But when an organization with 10,000 users shows up on your forum, that's not a gift necessarily. \[laughs\] It's a responsibility, and the reality of our project is that we need resources to be able to fund developers who are essentially full-time, who can make sure that we take a long-term view for the tool.

We make that case to grants and to funders, and they've historically agreed with that logic and that rationale. We essentially get grants to pay for the core developers who work every day, doing unpleasant stuff, like big-time migrations. No contributor wants to make sure that the app respects timezones, or is tested on every device known to man. You raise grant funding that way to pay for the core team, and then the core team's mission really is to do the messy stuff, but also put processes in place that enable others to contribute. As you know, a lot of open source projects - most of your contributors are gonna be drive-by, so making sure that we're not just fixing stuff, but we're putting together a process that allows external contributors from wherever they are to contribute to projects. That's a big part of what we do with the folks that we bring on to work full-time.

**Adam Stacoviak:** What I find interesting here is how you've changed how people pay for software like this. It's still free, but it's not free to build; it takes people power, it takes planning, support, as you've mentioned... And rather than having the would-be enumerators, or form designers, or people who are at the forefront of the problems having to swipe a credit card or find a way to pay for software that they haven't been able to sell yet to their organization, you've been able to establish a better relationship down the line with the actual organization, and potentially get grants to do large amounts of support and/or development. That's super-cool how you've planned that out.

**Yaw Anokwa:** Yeah. "Planned that out" is a very kind way of putting it...

**Adam Stacoviak:** "Stumbled into" maybe...?

**Yaw Anokwa:** \[00:59:53.03\] It sort of emerged... I spend a lot of time thinking about open source sustainability and researching things, and I wish there were a better way of doing it, but the reality of our customer base is most projects in global development, global health, sort of computer space, are funded at a project level. So you'll be able to get an organization to do a malaria project, or do an election, but there's nobody who's funding things like improved timezone support. So we sort of have to, and I think it works best this way, that we treat ODK as a public good, as infrastructure, and convince the biggest organizations who rely on that infrastructure to help support it.

One question that I always get is "Is any of this stuff sustainable?" and I always find it an odd question, because "In some ways sustainable...". Like, on what timeframe are we talking about here?

**Adam Stacoviak:** Right. At what point will it become not useful.

**Yaw Anokwa:** Yeah. I think for me there's a couple of ways I respond to that. One is that nothing is forever. As long as the software is in use... Let me take a step back, I thought when we started the project ten years ago that it was a terrible idea and it was never gonna work. Obviously, I was wrong. I stuck it through. And I always also thought that someone would come up with a better open source thing that would out-innovate us or out-compete us in some way. That has not been the case.

I think the difference between ODK and some other projects is that people care about the project, people show up every day - certainly I do - to chip away at the problem and try to make software that's a little bit better each day. I think if you do that over a decade, it shows. Things get better. So for me, it's sustainable as long as people show up and use it, and it's sustainable as long as it's solving meaningful problems for folks, and I think that's a very easy argument to make to somebody who wants to support the project. So it's sustainable in that way, and if that way ends up not working, we'll try another way. That's one approach to it.

The other approach is a lot of things that we do in the do-gooder space is not sustainable. It's not sustainable to deliver bed nets to people who need protection from malaria. We do it anyway, because it's the right thing to do, and there's plenty of resources in the world to do it. For me, the value that ODK generates in the world as far as lives saved, and data decision-making, from elections to climate monitoring - it's in the tens of millions, maybe billions of dollars. There's software companies both on ODK, there are consulting organizations in a lot of countries that customize ODK for folks... So there's a huge ecosystem there. The funding that we typically ask for is dramatically smaller than the value that we provide, so to me it's sustainable enough.

**Jerod Santo:** So the grant writing - you said you've been doing that for about two years.... Have you found that to be a winning strategy thus far, something that you wanna pour more into? ...or is it difficult to success in that way.

**Yaw Anokwa:** I think the grant writing is... You know, it's not fun.

**Jerod Santo:** Sure.

**Adam Stacoviak:** I love the chuckle afterwards.

**Jerod Santo:** Yes.

**Yaw Anokwa:** It's not fun, but things that are important to do are often not fun, and so I'm committed to doing that as long as I can, and so far it's been working; it's been working since 2011. In 2011 we did not have as much impact as we have now, and so I'm optimistic that it'll continue to work... But it's not the only thing that we do. I'm always thinking of other ways to get more sustainable, consistent funding for the project. Day to day, that's what I'm always thinking about, because yeah, grants aren't forever... But we have a pretty good consulting business as well, and so as long as that keeps going, we'll be able to manage.

**Jerod Santo:** Have you tried hosting, or is that something that you don't wanna touch with a ten-foot pole?

**Yaw Anokwa:** \[01:04:02.00\] \[laughs\] I love hosting. I just love DevOps, just as a hobby. I love hosting servers... So I love DevOps, but I think the challenge with hosting for ODK in particular is that there are other folks in the ecosystem who have a pure hosting business. So I as one of the project leaders, I wanna be sensitive to not competing with our community members. There's no point in bankrupting one partner just to fund the project.

Hosting is something that we've talked about at a project governance level, but currently I don't think it's necessary. I think it's also not -- I think the reality is the largest streams of money, at least in our industry, a lot of it comes from (for lack of a better word) consulting. Services revenue, fells to me, like a better way of funding the project. But you never know... Things change, so we'll adjust as necessary.

**Jerod Santo:** On the grant side, you mention that writing grants is not fun... And it's maybe hard to believe, but there are people out there in the world who enjoy writing grants. So I would suggest that you try to find one of them and then you hire them to write the grants for you... And then everything's good, man. It'll be all good.

**Yaw Anokwa:** \[laughs\]

**Adam Stacoviak:** Yeah. It'll get you back on those higher-level things.

**Jerod Santo:** That's right. It's the Easy button.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** There are people that like writing grants. I mean, maybe they don't love it; maybe they don't wake up in the morning just dying to, but they like it.

**Yaw Anokwa:** Well, maybe I'm not being fair to grant writing. It's not the most fun thing to do, but I also don't mind it... So it's quite alright. Maybe this is a good segue - if there are folks who want to contribute to our project and chip on everything from grant writing to all the various things that we have on the project, everybody is very welcome.

I try to maintain a very open definition of what a contributor is. We need all sorts of help, so... Don't let me just have all the fun.

**Adam Stacoviak:** Yeah. The next question was - thinking about Nafundi being a funding source for this, a sustainable source for this, meaning that you might be hiring more people to contribute, not just to the project itself, but to the greater goal of Nafundi to do the same goals for ODK.

**Yaw Anokwa:** Yeah... I don't know if there are many companies who -- I mean, I guess there are some companies that are sort of really closely aligned to a project. For me, the folks who run Nafundi, our goal is to align ourselves as closely to the benefit of the project. We try to position Nafundi as a vehicle to grow ODK as much as possible. And it's way more important that ODK as a project survive and thrive than it is for Nafundi to survive... So yeah, it's really just a vehicle for us to do that.

**Adam Stacoviak:** I look at that scenario like - anybody who relies on a piece of equipment... In this case, ODK is Nafundi's crucial piece of equipment to do the job, which is to create awesome surveys, forms, data collection processes etc. If you swing a hammer, and that hammer is your core piece of equipment, how do you treat the hammer? You probably shine it, you probably clean it, you probably maybe even put some special oil on the wooden handle... I don't know, I'm just thinking... You're gonna take care of it, basically; it's in your best interest.

**Jerod Santo:** I don't think you're gonna shine a hammer necessarily...

**Adam Stacoviak:** I'm just saying, you might go overboard in ensuring that this piece of equipment never fails you, that it remains the hammer it needs to be to do the job.

**Jerod Santo:** I'm sure if it's like a samurai sword, then you could sharpen it, you could shine it...

**Yaw Anokwa:** Yeah, maybe this metaphor doesn't work... But I think you're preaching to the choir here, because certainly I agree with you... But when push comes to shove, I find that a lot of people -- if you just look at OpenSSL, for example; there are a lot of companies that rely on this piece of software, but they don't necessarily treat it well. And it's a structural and governance issue there.

\[01:08:18.12\] One thing that we're doing at ODK is taking a real close look about how we encourage other organizations to participate. I was saying that we have this technical steering committee with folks from different organizations. We just launched a new sort of Providers page, where organizations and individuals who contribute big chunks of time and effort to the project get listed as a recommended provider. Try to align the incentives. The more support questions you answered properly, the higher up on the ODK website you go as a recommended person to hire. And the questions have to be answered in the open.

For our individual contributors, we're helping them get a chance to get hired, and then for the companies, if we see that a lot of good devs are working on the core tools, then yeah, you are absolutely on the Provider website; if somebody wants a customization, or a large deployment, then they should hire one of these people. We try to align it, so we don't have to depend on the kindness of companies to do the right thing. It just helps the bottom line to do the right thing.

**Jerod Santo:** So where does the Open Data Kit community live, and what's the best way to get involved?

**Yaw Anokwa:** Yeah, that's a good question. We live currently at forum.opendatakit.org. I always have to spell it out, because "form" as in a survey form, and "forum"... Yeah, it gets super-confusing. Maybe we should just make that an alias. But that's where the community lives, and so anyone who is interested in participating on the project can go to that forum. It's a Discourse forum. Create an account, and just introduce yourself. Say roughly what your interest is in. That's one way of doing it.

And then whenever I say this, my commitment to anyone who shows up and introduces themselves and says "I'm interested in helping" is that I will take some time and we'll talk about what you're interested in, what your skillset is, how you wanna grow, what you wanna do, and we'll find a place in the project for you. That's a very hands-on approach, but it's an approach that we wanna take, because we wanna make sure that it's not just -- that's a two-way street; you're helping us and we're helping you in some way. So go to the forum and introduce yourself.

If you're a dev and you just wanna hack on code, certainly you can go to our GitHub page, github.com/opendatakit, and there's a bunch of repos there. Some of the starter ones are the active ones... And then each repo has good first issues, or quick wins, so you can pick any issue. We have a contribution guide, and you follow that contribution guide, submit your first PR. It'll be reviewed, tested and merged. So that's another way of going about it. But the lowest bar I think is just go to the forum, say hi and join us.

\[01:11:14.24\] I should say that everyone is welcome, regardless of your skillset. If you're a designer, you're welcome. If you're a developer, you're welcome. If you love grant writing, you're welcome. If you wanna help us on social media, you're welcome. Literally anything that you're interested in, we will do our best to find a spot for you.

The forum now has (I think) almost 9,000-10,000 people on it, all helping each other. I participate in a lot of open source; I'm a little biased, but I think this is the nicest and friendliest community out there, so I would love to have anybody who wants to chip in.

**Adam Stacoviak:** Yeah. Well, it's been an awesome conversation with you, especially digging back into your journey, learning where you came from in terms of all this schooling to get a CS degree, and to use it so wisely, so impactfully. I'm taken aback. You did an awesome job with all this, and you're running a great community, and we thank you for your time.

**Yaw Anokwa:** Well, thanks for having me. It's been a great conversation, and I think I said very early on, I'm a long-time listener of the Changelog, so it's really an honor for me to be here and share the work that the folks in our community are doing.

**Adam Stacoviak:** Well, let me say on our behalf we were definitely glad to have you. Thank you so much, it was awesome.

**Yaw Anokwa:** Thank you so much.
