**Jerod Santo:** Alright, we're quite excited for this conversation. Brett, this one is not really an answer to episode \#300 - you may not know, we had Zed Shaw on the show; as always, Zed, a controversial person... He had things to say. Probably the most feedback we've had all year has been on that episode. Some people in the affirmative, some on the negatory... And we had a very well thought out and very nice e-mail from Benjamin Bertrand about that show; we kind of went back and forth with him.

Benjamin - well, he disagreed with some things that Zed had to say, and as always, from our perspective, especially because we're trying to cover so much, like, to cover the open source community and hop in and out of different areas of that community, we don't always have full background knowledge. We can't really rebut things, so we have to kind of take things at face value, and specifically in Python, Adam, I don't know -- actually, I do know about you; we aren't very active in the Python community, or at least haven't been, historically... So we kind of have a bit of an outsider's view on things that go on there.

\[00:04:14.16\] Benjamin took issue with a few things that Zed said, and if you all are interested, definitely go back and listen to that; it's definitely an interesting conversation. Benjamin said "Hey, let's get somebody from Python on the show." And we did have a Python show recently, but not specifically talking about sustainability and open source participation, and stuff like this... So he pointed us towards Brett.

Brett, we looked at your blog post, and your lightning talk, and thought, "Okay, this is great." So that's the back-story for how this conversation came together... So I guess we'll just say, Benjamin, thanks so much for your feedback and for your input, and we hope that you enjoy this conversation.

**Brett Cannon:** No pressure.

**Jerod Santo:** Yeah, we hope you enjoy it - we hope Brett doesn't disappoint. \[laughs\]

**Adam Stacoviak:** Brett, don't disappoint.

**Brett Cannon:** I'm gonna do my best.

**Adam Stacoviak:** Good.

**Jerod Santo:** So Brett, let's take right off and say that you recently gave a keynote at PyCon, and you have an accompanying blog post which we will link up in the show notes for everybody who wants to read along... All about setting expectations for open source participation, which is a deep, deep conversation; it's about a half an hour keynote, so we don't pretend to cover everything in it, but we're gonna talk about it... And I think it's probably best, at least from my perspective, to note that back in 2016 you had a hiatus from open source participation, because of burnout. You took some time off on purpose, so that you wouldn't burn out, and that was a little bit of the impetus for this talk... But even before that, let's talk about what all you do in open source, and how long you've been involved, because that helps us understand why burnout might become a thing for you.

**Brett Cannon:** Yeah, so I am lucky enough to actually get to do open source both personally and professionally. For my day job, I am the dev lead for the Python extension for Visual Studio Code at Microsoft. That's what I would call corporate open source. Basically, there is a company paying my salary and my teammates' salaries to make sure that this open source project is sustained and gets to continue going forward.

On top of that, for my personal life, I am a core developer for Python. I got my commit rights in April of 2003, so it's been over 15 years now... And that's what I would call community open source, because basically if all the volunteers quit, there would more or less not be a Python development team... Because there's no real sustained corporate backing of the project.

That's basically my open source background. After that, it's just the usual - I submit patches and issues just like anybody else. I'm a little prolific with fixing typos in docs sometimes, so I think I've technically got a merge into over 90 projects at this point. I've also been exposed to a lot of various development processes, but that's more or less my open source bona fides.

**Jerod Santo:** Very cool. Let's talk about you and open source then, because obviously you have the professional side now, which we always call "living the dream", for different definitions of the dream... People who get to work on open source as their day job is definitely a bit of a new thing, and very cool when it happens, although not always all that it cracked up to be; that being said, what is it about open source that drew you in? Why do you do it? I know some of this goes into the reasons for open source, and some of these thoughts that you have around participating in open source... But I think for everybody it goes back to the why, and I think a lot of the why's are different.

So what brought you to open source and why do you participate, on the community side, not on the professional side?

**Brett Cannon:** Yeah, there's a slight story behind that. Back when I was in undergrad I wrote a program for myself to measure the amount of time I did data entry for my father's business. I was on Windows at the time, and there wasn't a function called Time.Strptime, which I needed to parse dates to get back the time tuple representation. I figured out a way to do it, and I gave it to what's called the Python Cookbook, because it just seemed like something other people; I was just trying to be helpful.

\[00:08:18.21\] Subsequently, I had to figure out how to make it work, because -- well, I didn't really have to... Basically, it bothered me that you had to input all the locale information. I figured out how to do it over the subsequent months, and actually, as a graduation gift for my undergrad, the week following I solved it and wrote it all out, and I asked Alex Martelli, the editor of the Python Cookbook, which had published my original recipe, "How do I get this into Python? I think it might help others." He said, "Well, e-mail this mailing list, pythondev, and they'll explain it." I did, and they were very helpful, and just walked me through it on how to get a patch sent in to the mailing list, to get that all merged in, and I did.

This happened to coincide with a year off I was taking between my undergrad and going to grad school, because I have a bachelor's in philosophy, but I wanted to go to grad school in computer science... So I was taking more or less a gap year to build a programming portfolio to prove to grad programs that "Hey, I do know how to program, regardless of what my degree is in." I realized that open source provided that potential opportunity by being able to say "Look, I've contributed to these projects."

I happened to get involved with Python early - it was actually in June of 2002 - and I quickly really latched onto the group and how they function, the people and all that... And I ended up basically spending a good chunk of that year off just participating more and more. I started to write the Python Dev Summaries, which were a bi-weekly/semi-monthly summary of what was going on on the development list, because obviously, e-mail volume, and a lot of people couldn't keep up. That led to me noticing the little issues that needed to be fixed, so I was able to then jump in, learn what was going on - because I had the time - submit patches, get those merged... And I just kept doing it to the point where I said, "Hey, can fix this. I just need someone to merge it", and then Guido just went "Oh... Well, can't you just merge it yourself?" I was like, "No, I don't have commit rights." He was like, "Oh, okay. Someone will give them to you... You just merge them yourself." And magically, I just had commit rights.

**Jerod Santo:** Nice,

**Brett Cannon:** So for me it was mostly learning, really, in the end... It was just learning how to code, and get that exposure and all that, and I just grew into more or less sustaining a connection in the community in Python, and my fellow teammates on the dev team, and just the community all up, and just wanting to be around those people.

**Jerod Santo:** And you've been involved ever since?

**Brett Cannon:** Yeah... Honestly, the only breaks I've taken were -- really there were no breaks, except for potential vacations, and even then, it's hard not to check your phone... Until I did my volunteer detox, as you alluded to, Jerod, back in 2016.

**Jerod Santo:** Right.

**Adam Stacoviak:** Did you get into open source to be rich?

**Brett Cannon:** Hah! No.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Okay. I just wanted to check that box real quick, to say no.

**Brett Cannon:** No, no... I got into open source basically, as I said, just because it was a learning experience, and I really liked the people, and it continued to be just about the people for me... So it was definitely never about the money. I honestly never really expected to get any work because of it.

When I got involved with Python and I would tell people, "Oh yeah, this is what I do in my spare time", it was back when they would ask "Is that the language where whitespace matters?"\]

**Jerod Santo:** Right.

**Brett Cannon:** So I pre-date Python's -- I got involved way before Python's popularity reached its current level... So it was never about any job prospects, or money, or anything. It was always just enjoyment.

**Jerod Santo:** \[00:11:57.15\] Yeah. And it continues to swell, and become -- I mean, Python is so popular, I'm sure you know better than I do... But every time I see the stats, like the Stack Overflow survey, or these other surveys and analyses, the popularity of Python, even today, is just exploding at this point, right?

**Brett Cannon:** Yeah... Honestly, it's still a bit mind-boggling. I remember the days back when I looked at Perl CPAN in longingness for wanting that level of library and ecosystem support, and now everyone looks at Python as that place that has all those libraries and ecosystem support. Basically, whenever people ask how popular is Python, I say "I don't know of any language popularity list anymore that doesn't list Python somewhere in the top five", if not potentially number three, depending on how they classify, like, C or C++.

I'm still constantly astounded at just how popular the language is and how much it continues to grow. It really hockey-sticked in about 2005, and it continued to just have astounding growth.

**Jerod Santo:** Recent growth - I always attribute it to a lot of the machine learning tools... What would you -- maybe you would have more insight on that, but what would you attribute the growth back in '05? I know Google adopted Python at a certain point and put a lot into it. I think that probably -- I remember when I was in college, the question "Which language would you learn, and why?" back then... This was around '04-'05, and people would say "Python, because Google uses Python." I remember that was a thing that people said to me. So that was my thought, like, maybe Google, but what do you think happened in '05 - or maybe it was just well-known and I don't know - that made it explode back then?

**Brett Cannon:** Just to quickly touch on that Google tie-in - actually, the very first code parts of Google way back in the late '90s were actually all written in Python... So Google itself started off as a Python script, ironically.

**Jerod Santo:** Okay. That's funny.

**Brett Cannon:** So that's kind of how Python ended up inside of Google and continues to be one of their officially-supported languages. I honestly don't know exactly what led to that growth... If I had to wager a guess, it was partially certain large companies such as Facebook being respected for their technical jobs, and their decisions having weight for people who needed some way to make a decision, and going like "Alright, well if Google chose it, then that breaks the tie between Python and whatever language..."

I think the other thing is Python was able to get a really good web framework through Django at just the right time... So right around when Rails came out, I think Django went public about maybe a year after. So right when the whole web framework explosion happened, Python very quickly got positioned with a good framework, and it has continued to have good web frameworks through Django, and Flask, and Bottle, and other ones... And it has allowed it to be in the right place at the right time in terms of that kind of growth.

Now, I would like to think it's also just sustained because it's a well-designed, good language, but obviously I'm extremely biased and the wrong person to ask on that one... But I would hope it's just the tie of that, and then after that, honestly, momentum just does a great job of carrying it forward... Because after that, if you look at the ecosystem, we're well over 100,000 packages on PyPI package index. It's very easy to very quickly get drawn in as well based on support of various wrapping libraries. The data science aspect, as you mentioned, recently etc. etc.

**Jerod Santo:** Yeah. Unfortunately, if you look back at programming language history, it's rare - and I can't think of one... Like you said, the whole meritocracy ideal that we all strive towards, right? You hope that pure language design and fundamentals - the cream raises to the top, kind of idea... And you find out when you look back at historical programming languages and why they have proliferation, it's almost always circumstances -- I mean, it's a mix, but there's always some sort of circumstance... Whether it's proprietary, or happenstance, or a specific framework or tool that brings them in and out of those rises... So it's always interesting to think why a thing happens, and therefore can we reproduce it.

**Brett Cannon:** \[00:16:24.22\] I totally think luck plays into all of it, right?

**Jerod Santo:** Yeah, exactly.

**Brett Cannon:** It's just right place, right time. I know my personal life - a lot of the good stuff that's happened to me is, once again, just luck, and being in the right place at the right time... And I very much think that's true for Python.

It was around in the '90s, people knew about it, but it didn't really -- it was this kind of thing that people knew about, but it hadn't really taken off... I think just literally people start to latch on -- we had the right frameworks and libraries at the right moments in history for various things to catch on.

It's definitely in handy that it's a general purpose language, so it's not niche in any way, and it's accessible enough for everyone that it can easily be picked up in any corners of the programming world for their needs... And obviously, the teachability definitely helps.

Honestly, we just happened to have the right people find it, that they liked it, to develop the right bits that other people then latched onto, and then it just has a major networking effect, and I think that's led to us being able to sustain this growth as we have.

**Adam Stacoviak:** Although one component to luck that you can't discount here is when - at least depending upon your definition of luck - preparation meets opportunity equals luck.

**Brett Cannon:** Yeah.

**Adam Stacoviak:** So you have to have some preparation there. Something just happens -- as you said, the network effect; so there's previous work done in and around the Python community, whether it's the language itself, or the libraries, or maturity, or availability, that prepared it for the luck portion.

**Brett Cannon:** Yeah. The way I always view -- when people say "Oh, you've been so successful", usually it's literally the luck of being at the right place, equipped with the right tools, and the willingness to take the right chance. I think we happened to have all that at all the right points.

**Jerod Santo:** Let's get back to you for a second... We mentioned the time off in 2016, but let's do a hypothetical for today; so today you have a job where you get to work on Python and be involved in Python, but let's hypothetically say that there was no Microsoft job, or there was no professional reason for you to stay involved. You mentioned you got into it because you were learning, and you were kind of building up a portfolio, but you stayed for the people.

Then you have this break, you have a talk all about people, really, so you're trying to get out there and help us do better as open source people, not necessarily with regards to the code... Would you still be standing here today, would you still be involved on the personal community side, or do you think you would have left if it hadn't been for the professional side?

**Brett Cannon:** Oh, no, I definitely would've. My previous, during grad school and all that - I did use some open source in my Ph.D., but it wasn't really too heavy. My time at Google wasn't open source-driven at all... So most of my time actually has not been professionally in any way, shape or form tied to open source. I should even mention that my dev lead position is less than a year old. I think it's a year maybe this week.

So for most of my professional life, it has not been driven by open source... I honestly would still do it regardless anyway, and I know this because going to PyCon U.S., and select other conferences are highlights of my year, because I get to see friends, and I really get to call people in the community actual friends, who I get to see once a year, very intensely, for a couple days - or up to a week, if it's PyCon U.S. - and really get to hang out and see them, catch up, see how they're doing, and just hang out and have fun with my friends.

\[00:19:56.01\] So I would still be doing this regardless, just to be able to go see those friends of mine that I only get to see because I'm lucky enough to have made friends internationally, across this globe, in all corners, and the only way we get together is because we're able to coordinate around this conference, and all come together and attend that. So I would definitely still be involved, regardless of whether my employer had me do open source or not.

**Jerod Santo:** So despite all the hardships and all the people problems and the drama, and all the stuff that you have to do with the e-mails, the hurt feelings that we'll get into some of those details, that your friends and the people involved, even more so than the code or the projects have been the reason why you've stuck around and you would continue to stick around, despite whether or not there were financial ties.

**Brett Cannon:** Yeah, completely. Totally. And honestly - I'm sure we'll get into this - the whole reason I've put in the effort into doing the talk, and the blog post, hopefully pushing the way for people to just be able to interact better in open source, is specifically because I care so much about the people involved in it... Because I don't wanna give it up. I wanna make sure that I feel like I want to keep coming back, so I'm doing the best I can to try to make sure that it continues for me personally, and for others as well, so they also are going to have the same benefits I've received.

**Adam Stacoviak:** Well, having the history you have too assumes you have some wisdom, right? And when you set the expectations, as your title says for the talk, as well as the blog post - when you set expectations, it comes usually from a position of wisdom.

**Jerod Santo:** You have a lot to offer.

**Brett Cannon:** I like to think so. There's not a lot of open source projects that have existed for 29 years. Guido started Python in December 1989, released it in February of 1991, which actually predates the public release of Linux by a couple months, because that came out in August of 1991.

The project itself has a very unique history in terms of having just existed for that long, and then I also ended up in this odd position where -- I remember for the longest time I was the youngest member of the team, and has the smallest amount of tenure, and over time I've just ended up becoming one of the people with the longest tenure; not THE longest... Barry Warsaw for instance is still active, and he's been active on the project since 1993 or 1994... But yeah, I've been lucky enough to have found motivation and reason and enjoyment enough to -- yeah, I've stuck around for 15 odd years at this point, with this one project, and open source all up... So I'd like to think that I'm not totally making things up on the fly, and just totally pontificating from a position of no knowledge on all this.

**Jerod Santo:** \[laughs\] Well, I think you're safe in that regard. Tell us the story of back in 2016; we've referenced it a few times - you did a detox, you were approaching burnout... Tell us exactly what happened, what led up to that, why you did it, did it help... Just unpack that for us.

**Brett Cannon:** Basically, up until 2016 I had never really taken any form of a break from volunteering on Python. I had been doing open source from April 2003 till 2016, more or less with no real stop. I never took more than maybe a week, and even then, with the advent of smartphones and all that, you'd stay very connected, and so much open source is done through e-mail... It's very easy to not ignore it and stay connected even when you're on vacation.

In 2016 I had a couple rough interactions with some people. Basically, people just flat out had been rude to me, and in ways that I thought were incorrect for the rudeness... I mean, honestly, I'd say rudeness is just never reasonable, period, but the motivations behind the rudeness I thought were incorrect. It happened about every other week for three months straight, and... I don't think there's any scientific backing of this, but I've heard the phrase it takes ten acts of kindness to undo one negative kindness, and unfortunately, in open source there are plenty of people who are willing to say how you did something wrong, but people don't necessarily say when you do something right. It's very much a push versus pull; people are very much willing to push negativity towards you by saying you did something wrong, but it's almost a pull action having to ask people to compliment you, because otherwise it's proactive versus reactive. People are very proactive about seeing what's not working, versus people having to very consciously be reactive to the fact that "Oh, hey, I've been using this thing all day and not had a single problem. I should thank someone for that."

\[00:24:19.29\] So having multiple negative incidents happen consecutively, as close as they did over the three months in 2016 (that summer), my wife was noticing... She was like, "What's wrong?", because I'd be walking down the street, or just waiting for the bus, and get a nasty e-mail or something - my face would just shift; she'd notice the change in my attitude and she'd be like "What's going on?" It's like, "I got a really bad e-mail." She'd be like "You just need to stop checking... Why do you still do this?"

She has luckily come to PyCon with me enough times that friends of mine have become friends of hers... If I go to PyCon without my wife, usually the second question I get after "Hello, Brett" is "Where is Andrea?" So she has subsequently come to understand it, but she very much always has pushed me to moderate my engagement level to make sure that this didn't happen. And basically, at that point, I had never really worried about my moderation.

After three months, I just went like "You know what, I'm just starting to not wanna check my personal e-mail. I don't wanna check my open source e-mail. I honestly am dreading it", because I was waiting for something to happen. And when I realized that, it was like "Alright, this is what burnout is. This is what causes people to just rage-quit a project and stop participation." And I didn't want that to happen. As I said, I have friends, I enjoy my engagement, and I didn't want to just write it off. So I thought "Okay, what do I need to do here?"

I basically decided to take the month of October in 2016 off from volunteering. Now, I was still willing to do paid time, and very much moderate where I did things, such that I could control potential areas where I knew there was potential contention. Certain mailing lists typically can get a little heated in discussion, so I ignored that almost entirely, for instance. I would still check issues, but if anyone was in any way cranky, I just ignored it and just walked away. I was like, "No, I don't need to engage. I'm just gonna keep myself safe from being too upset."

What I ended up doing was I spent the entire month more or less just reflecting on "How did I end up in this position? How did I end up in a place where this project and this community that I basically love was pushing me towards wanting to walk away from it?" I came to the realization that people who were being rude were typically coming from a place where they (I think) had a misunderstanding of what open source is and how it's maintained and how it functions, and what's required to make it function...

Because most people, when you point out that they've been rude, they go "Oh, I'm sorry. I really didn't mean it" or "I'm just having a bad day" or whatever. Very rarely is it systemic and actually a core part of their personality... And I just started to think about "What needs to be said to the people and to the general open source community - and obviously Python in particular, for my case - to help people understand how open source truly functions and how people need to adjust their expectations, attitudes and views such that they don't really ever feel like being rude by accident, more or less, and how do they make sure that they just come from a perspective of "Oh, it's all okay" and not trigger themselves to that potential rudeness level, and just have everyone work together better?" And that's basically what happened.

\[00:27:43.00\] Now I do what I call "volunteer detox" once a year, for a month, to reflect, see where things are, to make sure I recharge, give myself a chance to more or less recuperate if any negativity has built up over the year... I also try not to read e-mails one day every weekend, to make sure I don't have a trigger. So I enjoy at least one day a week without any potential outside negativity that I might have to deal with.

And then my wife tries to also make sure I stick to those said plans, so that I don't cheat and try to sneak an e-mail checking on a Sunday, or something.

**Adam Stacoviak:** What's key there is two words: moderation and expectation. You were wise enough to recognize that you needed to exercise moderation, which I think there's a lot of people who just continue - no fault of their own - just going through, trudging through, without self-moderating or realizing that you can't eat Snickers only and live. You've gotta have real sustenance.

**Jerod Santo:** Well, maybe Snickers, though... \[laughter\]

**Adam Stacoviak:** The commercial would lead you to believe that you can satisfy yourself on Snickers...

**Brett Cannon:** I'm lactose-intolerant, so that ain't gonna work for me... I've gotta find something else.

**Jerod Santo:** Oh, okay...

**Adam Stacoviak:** And then the other part is the expectation - there is so much clarity in communication with yourself and other individuals or a community when the expectations are clear. I command you on the self-monitoring, but I'll give you a pat on the back - those are two key components of wisdom, right? Not everybody gets that right away. It's not a given behavior, it's a learned behavior.

**Brett Cannon:** Yeah, and unfortunately/fortunately for me, there were multiple cases of burnout in the Python community that I noticed, in 2016. And having seen that kind of cascade all at once, it put it in the forefront of my mind as like "Why is this happening?" And then when I started to notice it happened to myself, I was lucky enough to be able to identify that and go like "Okay, I see where I'm heading here, and that's not where I wanna go. What do I need to do to make this work?" and I realized I just need to take a time-out and more or less meditate on what's going on and what could I do for myself, and potentially for the community, to help prevent this from happening to anyone else going forward.

So, once again, somewhat luck, that this happened when this was happening to other people, so that I was able to see it externally, from others, and then be able to self-reflect and pick up on that fact, and then (thank goodness) be self-aware enough to realize I needed to stop and think about it.

**Break:** \[00:30:22.27\]

**Jerod Santo:** Brett, one of the things that you said that I'd like you to unpack for us, and maybe you can tell us how exactly you got to this goal, is that the overall goal of open source is to attract and retain people to help maintain an open source project, while enjoying the experience. I think the "while enjoying the experience" there is key. I don't think you tacked that on by accident there at the end... This is something that you say; and then you go on to say that we're failing this goal, in certain ways.

First, tell us about the goal - is this something you came up with? Is it something the Python community agrees on, or is this Brett's take? What's with this goal, and then following up to that, why are we as a community failing it?

**Brett Cannon:** It is definitely Brett's take, although people have typically told me they agree with it. Coming from a volunteer-run open source project and having been exposed to it over 15 years, I realize that there's always gonna be somewhat a core set of people who are there to pass along folk knowledge and such, and who might be there continuously, but people come and go.

There are many people who were involved in Python heavily when I started and whose names I still very vividly remember who are no longer active. Then there are obviously new people who have come in and become highly active, but have only been around for like 3-5 year, or even one. And then there's all those people who just kind of float in and out and are constantly still active, but not consistent. But the key thing is there's a flow of people, and if you don't make sure you have a mechanism in place to bring people in, the outflow of people will be at a rate higher than the inflow, and you'll basically end up with no one around to help sustain the project. And if you can't sustain the project, then what are we all kind of rallying around? At that point, we are gonna be a community of nothing.

You can have a community around a dog breed, but you've still gotta have that dog breed, for instance, to actually have that initial connection to make these friendships that you have with these people in that community. And the same with Python - if Python doesn't exist, we're not gonna have a PyCon U.S. where we're all gonna get together and hang out, right? So we have to do something to make sure we have our annual excuse to go hang out, to view it one way.

It's very much about how do you make sure the people who are there want to stick around, because you don't want them burning out and falling off the face of the planet, or at least in terms of the project... Because the longer someone's there, the more knowledge they have, the greater abilities they have to help... But you also need new people, because people will leave; hopefully not burn out, but just...

**Adam Stacoviak:** Churn.

**Brett Cannon:** Churn, dedication, personal time. People have kids. My contribution rate has dropped off because I'm no longer a student. I got married. Things happen. People have unfortunately passed away. It just happens, it's just life. So you need a way to have new people come in to help keep the level on numbers of people contributing to a sustainable level for your project.

Then the fun bit is just a very key aspect of when you are volunteering to keep this running, you're not gonna do it if it's not fun, right? Why am I going to spend what small amount of time I have on this planet being a live, breathing human being, doing something that sucks? If it's not enjoyable, I'm not gonna do it. It's very weird to put it in that perspective, but if you stop and think about it - I have an end date. I don't know what it is, but it's there. So every moment I spend doing something, it's there and it's gone, and I'm never getting it back.

\[00:35:59.01\] So if working on Python, for instance, ever became a total trial and tribulation and just something that was not fun, I wouldn't do it, because I've got better things to do with my amount of time I have left on this planet, and there are plenty of other things I could do. I could totally be spending time with my wife, I could be having fun with friends, I could be going outside and enjoying the weather while it's still good here in Vancouver. There are lots of things I could be doing instead of working on open source... And if open source does not end up being more enjoyable than those other things, I just won't do it, because I have better things to do.

And even honestly when you get paid for it, if it's not fun, I won't do that job anymore. I will either ask for a transfer to a different team that doesn't work in that community, or in open source, or what have you, or I will flat out quit and find another job. It's not even specific to a community-based open source, although that's where you feel it the most...

For anyone involved, basically, if you make someone's life not enjoyable for doing something, they won't do it. That's why - you're right, I did not tack that on just willy-nilly; it was very specifically, because people forget that they have to make sure that there are people there, both coming in and sticking around, to keep a project running... But you also have to make sure no one comes to regret the time they put in. Because as soon as that happens, that's when people burn out and leave, and then that's where projects die.

**Jerod Santo:** We hear it all the time, "When I first got into this, it was fun. I was scratching my own itch, I was experimenting, I was having fun, or I was trying something to see if it would work... And I never expected --" it's kind of the plight of the successful open source developer, right? So many of us had these open source projects, and we do them by ourselves, and that's not very fun either; you can code by yourself for so long, and at a certain point you're like "Well, it'd be more fun if more people were involved in this", so you have that side... So that's why a lot of those things fizzle out and die as well.

But then on the other side of a success, where you have this massive adoption, or lots of times it grows at a pace that's completely unsustainable for a small team of one or two, it's like "This WAS fun, and now it's a job... Because now it's a burden, it's all these other things that it didn't set out to be."

**Brett Cannon:** Yeah, you were basically trained to do a nice thing for the world by saying "I made this thing, I found it useful. Maybe someone else will. Here you go" and you set it free. Maybe you hope some other people come along to help you maintain it, because you are using it, or maybe you're hoping someone will come along to teach you something new... Like, I have a little Rust project I'm doing right now, and I've specifically said, "I'm using this to learn. Please don't send me new feature requests or anything... But hey, if you have a PR to help show me how to do something better, please send those", and I've had that happen. That's been really useful.

But if this suddenly exploded on me, and it's suddenly like I'm getting ten new issues a day or something, and it's just me sustaining it, I'd just probably burn out and walk away if the engagement ever became negative, because it's just not worth it.

**Adam Stacoviak:** I'm in a "not really sure" position, but I kind of feel like that's why we do this show, Jerod. We always say we shed a light - or at least we have in the past; it's not exactly our core mission statement, but we try to focus on the positive sides of things, and I think what that means in one way too is that we focus on the things that are enjoyable about what can sometimes be a hard road... And we are optimistic (or at least try to be optimistic) about the high sides and the fun sides and the enjoyable sides of open source as a whole. Obviously, we still talk about the negative things and we don't shy away from those things, but we - we as you and I, and then Changelog the podcast - are really just trying to share the positive things that are enjoyable, and hopefully give people more and more reasons to keep reaching for the positive things... Because when there's enough negativity, it's easy to be drowned out by that negativity and see nothing positive, even if it's right in your face.

**Jerod Santo:** \[00:39:58.16\] Yeah, I totally agree, and I think as open source has grown up over the last (let's just call it) decade -- I even think I said this to you, Adam, maybe off-air, a while back... It's like, where has some of the fun gone? Let's rediscover some of just the hacks, and the crazy experiments, and the one-off things... Because there's a lot of (capital B) Business going on in open source, and that's part of what we cover as well, because that's very much relevant to our lives - there's a lot of corporate interest, there's a lot of posturing, there's drama... I don't know, sometimes it feels like high school, which is not fun, for many people... And that makes me almost wanna burn out and be like, "Yeah... Where is all the fun stuff?" And it's out there. I just think there's so much other things going on that it's not always apparent; maybe we have to dig a little bit deeper.

But yeah, I agree. I think having these conversations, shining a light on the interesting, the fun, the niche is definitely what we're about. And then also having the hard conversations and helping us all together figure out how we can continue to sustain this thing, which has been a huge boon in my life, and I think we can say, Brett, in your life, and Adam, in yours as well. Many of us have benefitted from open source in one way or the other, whether it's the friendships, whether it's the abilities to build a career, which I've very much been able to, build a career on the shoulders of giants, and give back as possible... So we're trying to keep that going, and Brett, having you on to share your perspective and your opinion on "This is the goal", you call it a laudable goal, or an admirable goal - I agree with you completely - and then there's lots of ways that we're falling short of that... And acknowledging that and then being able to shift or pivot in the start-up world - that's what we do, we pivot... And you know, just change ourselves enough to keep it going. It is so crucial.

**Brett Cannon:** Yeah. It's an interesting situation, where open source as this larger entity or community kind of fell into this success situation. Back in the '80s or '90s when everything started, it was much more of a niche, fun side-thing, and then businesses started to wake up and be like "Oh hey, there's free quality code out there. Oh, wow." And then it just grew, and no one stopped to really look at where open source was coming from, to set proper expectations for everyone who was coming into it suddenly from the outside, but then also making sure we had the mechanisms in place to make sure that the system and the situation in the overall open source community was gonna continue to be sustainable... Because it all just kind of happens, and if you don't stop and take a look at where it is, it's not gonna happen.

Nadia Eghbal, who I know you all know, because she had a podcast on the Changelog, her big report that she did I think was a good step in trying to take a step back and really look holistically at open source as a whole, and how it has ended up in the current situation where it is, with both corporate and community-based open source, trying to work together, but it being such a huge machine now, and how do we keep it all going, and within the proper spirit of open source, but also keep it sustainable and everyone basically happy, so that they want to keep this thing going. It's a hard problem.

**Adam Stacoviak:** I had an a-ha moment talking on a recent Founder's Talk with Donald Fisher, who is the CEO of Tidelift... I know this as true, but it wasn't as clear to me as truth until he said it out loud to me, and then obviously the listeners of the show. He said, "As a society, as humanity, we have collectively decided to build our civilization on software, and a lot of that software, if not the majority of it, is open source." When he said that and I thought about it, I was just like, "Wow!"

\[00:44:07.18\] We do this - Jerod and I, we're knee-deep in open source every single day, it's just part of what we do, but I had never really considered it like that... And it is paramount that we find ways to do things like you're saying here - a series of kindnesses, enjoying it. And then ways to sustain it simply isn't a money thing; there's a cost, as you say... Everything has a cost in open source, and what is the cost?

I don't know about you, but that was so profound to hear, even though I knew it to be true. When I heard it for the first time like that, it solidified and cemented itself in my brain, like "That's truth!" The next generations are built on today's software, and today's software is open source.

**Brett Cannon:** Yeah. If you just stop and think about how pervasive software is, just how much are we willing to hand over to software these days, and then once you realize the scope of that, which is mind-boggling to say the least, because software is in everything... I mean, just making a clothes hanger - how much software there is involved in designing it, testing the weight, the machines that print it, press it, control the shipping of it, getting to the stores, the POS machine... Literally, the steps it takes to have a hunk of plastic turn into a clothes hanger that ends up in your closet - the amount of software is just immeasurable. But then, as soon as you think about that, any point of that system is gonna have a very large component of open source to it. There's very little pure, top to bottom stack, bespoke software anymore... Because it doesn't really make sense when there's that much quality code.

**Jerod Santo:** Right.

**Brett Cannon:** But once again, if we don't stop to think about what it's going to take to sustain this going forward, we're going to end up in a real bad spot. You can almost make the comparison to the environment. We all know there's an environmental problem, and we've all just gone "Oh, it's there, it's there! It's great! Let's totally use it!" and then it's something like "Okay, but there's a sustainability problem here", and if you don't stop and worry about it and try to deal with it, you end up with either the worries we have of just runaway climate change, or you stop, put on the brakes, look, evaluate and go like "Okay, well if it's just green energy, we can continue to benefit from our environment without hurting it irrevocably."

I think open source is approaching that kind of inflection point of making sure we have to stop and take the time to reflect upon what needs to happen to make sure that this stays sustainable, so we don't end up in a position where suddenly the open source world just says "You know what, forget it. I don't wanna deal with this anymore. It's not fun, it's not enjoyable. I'm gonna stop doing open source work", and then we're back to writing all our software in a bespoke fashion, which is gonna put a huge brake on innovation in the world, because suddenly we're gonna be writing everything from scratch... And that's not -- it might be fun for a little while, but having to rewrite how to search a string or a substring for the bazillionth time is not exactly enjoyable either.

**Jerod Santo:** \[laughs\] Absolutely. Let's go back to Nadia for a second, because back when we had her on the show, and before she had her own podcast, Request for Commits, which had its own run, she wrote that piece - even before Roads and Bridges - which I still remember to a certain degree is "How I stumbled upon the internet's biggest blind spot", something like that was the title... And before that, we weren't really having much of a conversation as a community about sustainability - speaking specifically of monetary... And even at the beginning of Request for Commits, her and Mikeal's show, and the run of that, at the end of that (episode 20), one of the reason we said that this is ending now is because (that was maybe four years ago) now that's a conversation we're having. Things have changed, and now this is something that we talk about. It's not like we have all the answers, but there are sustainability - I'm specifically speaking of funding - options, and there are people making moves... Adam, you just had Tidelift; they had this million dollars initiative for open source maintainers...

\[00:48:05.18\] There's money talk happening. But what we learned through money talk is that it's actually kind of a small part of what makes up an ecosystem of sustainability, and sometimes money causes more problems than it solves... But once you get the funding, that doesn't mean we're suddenly sustainable, right?

Brett, a lot of the stuff that you were talking about and we were talking about here today has nothing to do with money. It just has to do with people, and relationships, and kindness. You said in your talk that we're failing at this goal of making open source something where you're attracting people, you're retaining people, and then you're also keeping it enjoyable... Maybe help us understand why you think - and I'm not in disagreement, but start off with why we're failing at it... You have some steps towards better, or at least you were offering them up, so let's go there.

**Brett Cannon:** The example I use in my talk and the blog post is a tweet that Cory Benfield, who used to be very heavily involved in the networking side of the Python community, said... I'm paraphrasing, but basically he said open source made him a more bitter, short-tempered individual. And I can relate to that. When I was hitting burnout before I took my month off, as I said, my wife noticed. She noticed when I read an off-putting an e-mail from someone, or something, and my attitude changed. And it's a really horrible position to be putting people in, that somehow our interactions are leading to people such as Cory and myself or anyone else to actually have a negative result on their personality... Because that not only impacts them, that impacts everyone around them.

I choose to volunteer and put my time into open source, and that does not mean my wife should somehow be impacted beyond the time I choose to put in. If she's nice enough to go like, "Hey, you know what - why don't you go take some time and put a couple hours in this Saturday into Python?" Okay, fantastic. When I'm done and I clock off, the result of that should not be me in a funk for the rest of the day, or even potentially the weekend, right?

I've lost sleep over problems in the community, and that is not fun, and it should not impact anyone else on this planet in any way, shape or form. So that's where that failure comes from - the fact that we are not stopping and taking a look at ourselves as to why this is happening to people, why are contributors ending up in positions where they're literally having to stop and worry about whether their spouse is going to ask them to stop doing open source because it's made them a worse individual... And that's literally what it can do to people.

Literally, open source can make you a worse person than you were before open source, and it's something people don't really bring up often, but it happens. I will fully admit, when my wife has called me out for being in a mood - and it's not always because I'm hangry - it has sometimes been because of open source... And I'll fully admit publicly that I'm very easily hangry, and my wife's very good at calling me out on that.

**Adam Stacoviak:** Can I provide an alternative though here real quick?

**Brett Cannon:** Sure.

**Adam Stacoviak:** I mean, could you also have the same result though by playing weekend softball? Not so much from an injury, but just from a lack of enjoyment; just drama, personality. I know we're talking about open source here, but that can happen pretty much anywhere. It's not like it's just open source problems. I just wanna be very clear about that.

**Brett Cannon:** Very true. But the interesting difference with open source is the reachability that you have, right?

**Adam Stacoviak:** True.

**Brett Cannon:** Let's look at Python. Python probably has 10 million users, depending on how you count. There's no real good solid number, but I've calculated it using Go's way of calculating, and that got us to 6-7 million, and rounding out for people who don't call themselves Python programmers, we're probably approaching about ten million.

When I play softball, I have at most probably 20 people if we include subs, between my team and the team we're playing. So at most there are 19 other people who probably could potentially upset me, be rude to me, whatever. On the internet, I have at least ten million people who could make me upset, right?

**Adam Stacoviak:** \[00:52:21.20\] Yeah... Bigger numbers.

**Brett Cannon:** And if you think about the scalability, even if you scale it down to like -- what percentage of the world population are just rude individuals? Just flat out, consistently rude. 0.1%? I don't know. Do we think one of a thousand people is just consistently rude? At ten million people, that would mean, if I'm doing my math right, that gets us down to 10,000 people who very much could be cranky at me at any point in time, because of something in Python that they didn't like, that I happen to somehow be involved with? This scale number is just massive. So that's why it's a somewhat unique situation.

**Adam Stacoviak:** I see.

**Jerod Santo:** It's also harder to leave, right?

**Brett Cannon:** And it's much harder to leave, and it's much harder to avoid.

**Jerod Santo:** Exactly.

**Brett Cannon:** If you have a bad interaction -- let's say you try to do a return at a department store, and you have that cranky customer service person who's not in a good mood because the person before you was a complete jerk about their return; they're gonna probably be cranky, they might take it out on you a little bit, you'll walk away in a huff, you'll be frustrated... But that's it. That's the only interaction you're gonna have about that. You can get over it real quick, because that whole interaction was really short.

When it's open source, you don't get to control when that happens. It's someone pushing often that crankiness onto you. I get to at least prep for when I go to the return desk; I don't get to prep for the cranky e-mail coming into me, and the chance of a number of people is much larger... So there's a cascade effect of I may only have to deal with one cranky person in a blue moon for a return, but I can get a cranky e-mail any day of the week, and have it build up... And getting that washed away in my mind, that negativity, is hard. It takes a lot.

I will fully admit, I've tweeted when I've had a bad interaction, knowing that people would tweet back at me saying "I'm sorry you're having a rough day. I do appreciate what you do." Because otherwise, I'm just sitting here with my cat at home, and getting no positive reinforcement that what I'm doing is appreciated, or good, or anything. So it's tough, the mishmash of scale and reachability that makes it kind of unique in the world in terms of how we all work together.

**Break:** \[00:54:53.15\]

**Jerod Santo:** So a lot of the problems with the open source community are it's difficult to leave, it's a global community, it's constant, it's very difficult to part ways in small groups, like you can with a softball team... One thing you said earlier on, Brett, that really resonated with me and I think it's worth reiterating, is this idea around how much more kindness it is required to undo unkindness. I think it was kind of a ten to one ratio is what you were saying; ten acts of kindness versus one act of unkindess, and whether or not that's scientific or accurate... I think in principle it's definitely true, and something about us as humans is we really resonate on the negative.

There can be a lot of positive reinforcement - thank you's, appreciations, people saying nice things about our open source work or our projects, and a lot of that stuff doesn't really penetrate our thought life very much. You hear it, but you don't feel it; I'm just speaking a little bit personally, but I think this is something a lot of people say. And then one act of negativity, one rude thing, one buddy calling you stupid, or ripping on your project - it tears you apart, right? So there's this huge imbalance there, and we need to recognize it.

**Brett Cannon:** Yeah, and it takes very little to -- especially if you're a caring individual who wants to make people happy. I'm Canadian, it's just part of me to try to keep people happy. So when people say "I'm not happy", I do somewhat take that personally. I've tried not to over the years, to work on that, but... I mean, it is gonna take at least ten cat videos to get over that. \[laughter\] It takes effort; it's not a small number. It's not a one-to-one ratio, as you pointed out, Jerod. Look at the news - it's not like they're showing us one negative thing on the news because they just can; it's because they know your brain latches on to that. That's also why they don't try to show you positives, because it is not going to be a one-to-one ratio. They've gotta show a lot of positive aspects in the world to equate out to the reaction you get with that one negative.

My blog post referenced one study where a psychologist seems to think that if you have arguments with your spouse and it's a five-to-one ratio of positive to negative comments in the argument, chances are you're heading towards divorce.

**Jerod Santo:** Wow.

**Brett Cannon:** So even if you go down to five-to-one, that's still a decent number of positive actions that have to occur to undo that one negative. And as I said earlier, positivity in open source and complimenting people is very much a reactive thing. You have to consciously stop and think to do it. It's not like negativity, where it's very proactive; when you hit that bug, you instantly know that you're unhappy and you instantly are triggered by it, versus having to stop and think "Oh yeah, it's really nice."

\[01:00:00.02\] I don't want throwback Fridays any more online, I want thank you Thursdays; something to cause us to stop and reflect upon "You know what, who should I thank this week for doing something nice for me, that I just normally wouldn't stop to think about?"

**Adam Stacoviak:** We did in stand-ups, in retrospectives, after a sprint. Retrospectives don't exactly call for this, it's not part of the agile manifesto, but I was like "We should call out the wins. Who do you wanna thank?", and it would be the person(s) thanking... In the same right, you also don't want too many highlights to the same person, but if they deserved it, they deserved it, right?

**Brett Cannon:** Right. It's very interesting that you point that out, Adam, because if you notice, we've actually had to bake that into our development process now, to make sure that we actually do this, right?

**Adam Stacoviak:** Program it in, yeah.

**Brett Cannon:** We've started doing retrospectives on my team at work as well, and we have "What went well, what didn't, and action items", but the fact that we actually have to put that into our processes to make sure we actually do that as individuals with our co-workers is very telling about how not purposely difficult, but just based on just human nature, how difficult it can be to prompt people to take the time to just say "Thank you", "Good job" or whatever positive reinforcement you wanna give.

**Adam Stacoviak:** There's two things there. I think there's a good majority of people - I'm not sure why - that tend to thrive in conflict. And it's either perpetual because of just human nature, or culture, or change, or whatever it is, but people just tend to sometimes thrive in conflict. And then, just being able to say thank you to your team is one thing, but I believe that there is a constant tear, especially at teams that are highly connected, motivated together, and all that good stuff to tear them apart.

It's part of the design of the system, to pull you apart, because if I can't get along with Jerod and he can't get along with me, then what we do doesn't work well. So he and I have to recognize that, and other members of our team have to recognize it, same with yours, that there's this force, something is trying to pull you apart and make you unsuccessful... And the daily fight is to fight back against that.

**Brett Cannon:** Yeah, and honestly, as soon as something negative happens, the instinct is to minimize that happening in the future, versus putting the huge amount of effort it is to not avoid it, but fix the root cause, and make it so that that doesn't happen again in the future.

**Adam Stacoviak:** Now let's talk about error tracking. Root cause analysis. That's fun stuff. \[laughter\]

**Brett Cannon:** Yeah.

**Adam Stacoviak:** "Where did this begin? Let's go back to the commit."

**Brett Cannon:** Yeah, you just need history debugging and you're all good.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Yes, technical solutions to people problems - they always work very well.

**Brett Cannon:** Mm-hm...

**Jerod Santo:** Mm-hm... So what can we do? The overall call is to be kind to one another. Does it get more specific than that with you, Brett? Because I believe in my heart of hearts that that's part of the solution, and yet it's difficult to actually act on that kind of advice, because it's so generic as to almost sound cliché, or tepid, or something.

**Brett Cannon:** Yeah, and it's been one of the most frustrating bits about the conclusions I reached. When I've given this talk, I've had people come back and say "Well, can you give us a call-to-action?" And it's like, "No... People are just flat out hard. It doesn't work that way." I can't just give you a technical solution of "You know, if you just follow these five rules, suddenly the whole world would be better." If we knew what those five rules were, we would be following them already. It just doesn't exist.

\[01:03:44.01\] The way I try to view it is -- you're right that the general thing is we just literally need to be kind to each other. It literally comes down to just kindness. There is no need, ever, to be rude. Why are people rude? Usually, people are rude either because they're frustrated, or because honestly they're trying to bully someone down to win the argument. It's a power play... So it's really not necessary.

In these technical communities you often hear, "Oh, everything should be based on the technical aspects of the discussion, and nothing else", but these people who come in and are rude are trying to game the system by forcibly trying to talk down other people by being rude enough that they wanna walk away or not participate, or blow their stack or what have you, and just have them lose that argument.

For me, it's trying to be kind while realizing the root cause of why we need to be kind. As I said earlier, open source is all about trying to help keep the project running, bringing new people in, keeping/sustaining them, keeping everyone happy. But the other thing to realize is open source owes no one anything.

Let's say you use Python. I don't owe you anything. I gave you a gift of software that I put my limited time on this planet into to try to make it useful for you; you took it, you used it - fantastic. That is the end of it. I have a legal obligation to let you use that software based on the open source, and that's where it stops. I think people forget that fact. They come and they think I owe them bug fixes, or I owe them new features, or I owe them another release. I owe, I owe, I owe. There's somehow a feeling -- people come to open source as somehow there's an obligation on my part beyond the code that I put out there, with the licensing, that you're allowed to copy and use this, it allows you to keep this license with the software... And there isn't. There is no obligation.

I think if more people will come to open source realizing that there is no obligation, the interactions would be better, because then suddenly you don't come from a position of demand, you come from a position of request. You're not gonna come to me and demand I fix a bug if you realize I have no obligation to help you with that bug. But if you realize I could help you if you requested nicely, because I choose to put my time and effort into helping you, your interaction suddenly shifts, your expectations shift, how you choose to work with someone shifts... And I think that's the key here; the conclusion is be kind to one another, which I know is, as you said, borderline a cliché, but I think the key is understanding how do we try to refrain the position of open source such that we all kind of naturally reach for the kindness result. I think the key there is setting the proper expectation for open source and its participation by remembering no one owes anyone anything. And I know that really ruffles some feathers with some people, because they suddenly think "Well, where's the motivation? How are people gonna help?" People who think in terms of numbers are like "Oh, there's gotta be some ulterior motive or some driver for people to participate in open source", and it's like "You know what? No." Open source is kind of a hippy-dippy thing when you really think about. It's literally people just doing it for the fun of it, and just to be kind to other people, to give out software that they think others might like. They don't need any other motivation.

This is something I think people forget - as long as you don't destroy that motivation, people will just keep doing it regardless. So making sure that we remember that there is no obligation and we just need to be kind to these open source contributors to have them keep doing what they do and giving us this software that we benefit from, we'd go a long way towards helping us with the sustainability problem... Because if we are just nice to each other, this burnout problem goes away. If you just understand that "You know what, the two of you don't owe me another podcast. If you do another episode - awesome. I will happily listen and I will appreciate it... But there's no obligation on your part, just like I have no obligation to fix any more bugs in Python ever in my life. I really don't."

**Adam Stacoviak:** \[01:08:07.04\] So you're telling me there's no more seasons of Office coming?

**Brett Cannon:** Yeah, I'm afraid not... \[laughter\] Unless they decide to do a reboot, and they already did the English reboot of the British version; I don't know where they go from the English version, so...

**Adam Stacoviak:** My gosh...

**Jerod Santo:** They shouldn't.

**Brett Cannon:** The American versus the British -- yeah, the American version was great compared to the British version; I love them both, but I don't know where you go from the American one.

**Adam Stacoviak:** So you're saying there's boundaries to things, right? That's the point, there's boundaries, clear boundaries that need to be understood, that's the expectations - "Don't get mad at Brett, because his obligation was met. Anything else he does or decides to do, or anybody else decides to do is back to the kindness factor, if you're hopefully enjoying yourself, hopefully not upsetting your wife because your mood is changed or whatever, and everyone just took the step of leading with kindness."

There's something that my wife and I say and we learned, and it's to remember that I have and she has goodwill for me. Sometimes I might say something that's critical, but understanding it comes from a "I have goodwill for you." Now, it requires the "I have goodwill for you" aspect of it, because not everyone in the general public has that; however, if we can somehow inherit that a little bit, the kindness, and leading with that, and having goodwill for somebody... I think you're right.

**Brett Cannon:** I think that obligation bit is really key. Like, how much did you pay for Python? Nothing. So why does the fact that you somehow ended up with this thing I gave you, this gift, somehow make you think that it's okay to berate me because there's a bug, or say it's stupid, or it should be done this way, or what have you, or be in any way really critical, in a negative fashion? There's constructive criticism, and that's fine, but it needs to be constructive.

People just don't stop and think about the fact that all of us in open source are literally giving things away, and that you would not be critical to someone who gave you a nice little gift. You can say "Oh, thank you, but it's not for me." That's fine. I'm totally fine if you don't use Python and you're a Ruby user, for instance, or you're preferring Node - whatever, I'm fine with that. You just don't need to be rude to me about it... And that's it. It's a surprisingly simple concept.

**Adam Stacoviak:** It is a simple concept. Be nice.

**Brett Cannon:** Yeah, exactly. Be nice. Understand that the obligation that you seem to think is there really isn't. You paid nothing for open source, there is no expectation on anyone's side, at all. I used to phrase this as not kindnesses, but favors, but I felt it was a little potentially loaded, because when you ask someone for a favor, you sometimes expect it to be paid back... But you can metaphorically think of it as like -- basically, when you come to me with a bug report, you're basically asking me to do you a favor to look at it, triage the issue and potentially fix.

**Adam Stacoviak:** Right. Go into that, because that's a "if you're in HR" metaphor you've got there.

**Brett Cannon:** Yeah. My wife is in HR, so that kind of helps understand where I phrased this... It's understanding that when you engage with people, you need to really remember what you're asking. If you come to me with a bug report, you're literally asking me to do you a favor, and as I've said, spend what little time I have, and take free time away from my wife, and my cat, and my friends, and my family, to help you fix that bug.

Now, if you really stop and think about that, that's a significant ask. You're literally asking me to not do something fun, to fix that bug for you. That goes all the way to pull requests, when you ask me to do a review; it's not necessarily gonna be entertaining for me to do a pull request review, but you've sent me this PR and you're asking me to review it. Now, it's great that you sent it to me and I appreciate it, but you've gotta realize that there's a cost to my end as well, of time and effort to do it.

\[01:11:53.14\] In my talk and blog post I phrase it as when you talk to people, a good way to catch yourself to make sure you're communicating in a good way that shows the kindness that you're requesting of someone is basically realize you're asking a favor of the other person, and then after that, make sure you phrase it in such a way that neither your boss, nor your family would be upset with how you asked. Because I'm gonna assume either you care about your job or you care about what your family thinks of you. Because if you don't stop yourself sometimes, it's very easy to blow your top, which I understand, when you're frustrated, especially when you've hit a bug, and it's like "Oh, I need this to work...! Why is this bug -- ugh, this software is horrible! There's this bug! How the heck has it survived 28 years with this bug!? It's the end of the world... Fix it!" But you've gotta realize you're basically asking me a favor to fix this, because guess what - over my 15 years of being a core developer, and the three years prior to that I was a Python user, I didn't hit this bug, or else I would have fixed it. So it doesn't impact my life, but you're still asking me to help you.

Then also realize that, by the way, I know probably who you work for based on your e-mail address, so do realize you do represent your company when you're making this request... And I remember. I have a good memory. I have a list of companies I have had bad interactions with in my head... So I remember and I do prioritize who I help based on who is being nice to me and who's not.

Then after that, if you just need guidance, is this how you would teach your children to talk to someone? Is this how you would want your spouse to talk to you, your parents, anybody in your family? Is this the example you'd wanna set for them on how you communicate? If it's not, then why are you talking to strangers like that? It's just a way to provide guidance for people if they just need a way to phrase it in their head. Realize you're asking a favor, realize you represent your employer, whether it's directly for work or not, because I'll still know... That company still chose to hire you.

And then really think about what kind of example you wanna set and what your family would think about how you're communicating. If you keep those in mind, I would hope for most people that would cause them to communicate in a very empathetic/sympathetic manner with people in open source, such that we set (once again) these proper expectations that there are no requirements on anyone, there is no obligation, and that we're all just trying to basically do kindnesses for everyone to keep this whole crazy thing we call open source running.

**Jerod Santo:** All well said. Let me throw in something a little bit different into the mix, which has to do with the way that we communicate. I've heard elsewhere that the medium is the message, and I'm not sure if that statement even applies to what I'm trying to say here, but it's resonated in my head... What we have on the internet is basically a text area, and sure, we have emoji, and we have grammar, and we have ways that we go about communicating, but text only, even with the help of emoji, is a very low-fidelity form of communication; there's so much nuance, even just voice inflection, that we have the advantage of here on this show...

**Adam Stacoviak:** I like Brett better today... Well, reading his blog posts, you know? I can hear him... \[laughter\]

**Jerod Santo:** Yeah, or watch his talk, right? It's a completely different message between reading the blog post and watching the talk, even though the content is pretty much the same. You will get more out of the talk, even though you have to dedicate half an hour of looking at a screen and listening. So it takes more time, but there's so much more transmitted between the speaker and a listener than there is between one person reading and one person writing.

I think the more that we can get our community into meet space, so to speak, or even simulate that, the more real-life relationships we can form, the more conversations that we can have, the more we don't have to remind ourselves that there's a person on the other side of that text area because you're looking at that person in the face and talking to them... It no longer becomes a stranger on the internet who ruined your day because their open source project had a bug in it. It becomes this person I know, Brett, who works on Python, and I'm going to speak to Brett in a different way, after having heard his voice, seeing where he's coming from... These kinds of things.

\[01:16:18.18\] So maybe not necessarily a scalable solution for all open source everywhere, since there's such a huge community, but something we can keep in mind - if all we have is a text area, we can at least think of like "Would I say this out loud to somebody that I was standing in front of?" Because sure, there are conflicts in real life, and you can be rude in a face-to-face conversation, but it's a lot harder and you're way less likely. And if we can't actually have voice and video conversations - although I would advocate for more of those - we at least need to be thinking to ourselves, as we write, "How could this possibly be read, so that it's worse off than the way I'm saying it?" Because so much of our problem is just misreading text, right?

**Brett Cannon:** There's two things I'd actually say to that. One is a simple way to help make people realize - at least when they're talking to you - that there's a person on the other end is to actually use a photo of yourself as your profile photo, like on GitHub... Because that little bubble will be there and you will see the other person's face, and it's a little harder to be rude to that person's bubble when you realize that "Oh, that's an actual human being." It's not the random little set of squares that GitHub assigns by default, or some picture of some actor from your favorite movie, or something. When it's an actual picture of you, it does help hit home that there is a human being on the other side of this issue, for instance.

The other thing I would say is basically nothing in open source needs to happen now. There's nothing that has to happen today, this moment, where you can't stop and take the time to proofread. There's no reason why you even need to do anything today. If you're having a bad day, just don't reply. Just wait until tomorrow; if you have to write yourself a note, do it... But there's absolutely no reason why you have to hit that reply button now. Just take the time to realize that "You know what, I can wait. It's okay, the world's not gonna end if I don't reply to this e-mail thread today, or tomorrow, or honestly, ever." You can reply to that issue later, you can file the bug tomorrow, because guess what, even if it gets fixed today, chances are it's not gonna get to you the next day, because releases just typically don't work that way.

Giving yourself even just an hour, or until after lunch, or just the next day, is not really going to impact anyone's life in any way, shape or form almost in any way measurable, and yet it will still put you in a better headspace to make sure that what you communicate online, through text -- because as you point out, Jerod, with text it's very hard to be expressive. This is why it is so difficult to be a good writer, because it is not easy to express oneself or one's feelings, or whatever.

As you guys said, it's very different to read that blog post than it is to see my talk or hear me right now, because it's very hard to get inflections, any sense of humor through it, and to make sure that there's no miscommunication, versus being able to hear my voice and you can very much pick up when I'm joking and when I'm not... It's just hard. And you know what, if you're gonna have to take the time to be very clear, and not rude, because it's so hard to get this right, then just take the time to get it right... And just wait, and just proofread, and just wait until you're in the right headspace that you're willing to put that time and effort into that response.

**Adam Stacoviak:** You need to bake in a cooling off period. Hot-headed is said for a reason. You just need to chill out... Even if you're right. Chill out.

**Brett Cannon:** \[01:19:52.04\] We've joked about what would happen to online interactions if we restricted everyone to one e-mail response per thread a day... What would that do to mailing lists? The volume would drop significantly, which honestly is not always a bad thing... But it would also cause everyone to have to think a lot more about what they say.

**Adam Stacoviak:** Limit the amount of characters and limit the response. Hm... Twitter.

**Brett Cannon:** Yeah, the character one could be a little hard, but at least the one per day... I don't know if anyone will ever try that, but for this exact reason it's been at least an enticing idea of "How do you try to really force people to actually take time to respond?"

**Adam Stacoviak:** It'd be a good exercise for a period, just like you do your detoxes... Do it as often as it makes sense, just to let people know "This is how it could feel if it really got out of hand."

**Brett Cannon:** I actually kind of do this already. What I do in my e-mail is I filter everything in Gmail to a label; I make sure the label is not viewable in the label list, and I only check those once a day. So I see it, I read it, I catch up, I do my response, and then I'm done. And that's it.

**Adam Stacoviak:** That's also very intentional, too. You're very intentional with how you deal with certain things because of, like you said, your triggers, and/or just your sheer desire to maybe deal with some conflict... The whole ten things you mentioned earlier; you realize it's gonna get you riled up, so maybe you're in the mood to get a little riled up, so you check your labels...

**Brett Cannon:** Exactly. If you have to, you force yourself to only interact once a day. A lot of times something that would have upset you has already been dealt with by the time you see it. The internet is 24/7, and chances are there are gonna be responses 24/7, and something that comes in could quite easily be dealt with later on if you just give it some time.

**Adam Stacoviak:** How about this - we'll close the show by telling the listeners "If you've listened this far, leave this show by going and spreading kindness in some way, shape or form." Either take a lot of the advice that's been given here, or the different stories being shared, but walk away from this with some sort of resolution to be kind and to give yourself a cooling off period the next time you can't be kind in the moment. And to become more self-aware of certain things, moderate yourself, set expectations for people around you, give yourself some buffer so that you don't get into those zones... Because when you get into those zones, it's pretty easy to let your mouth just go.

So walk away from this show -- I always kind of ebb on this, kind of teetering to this, always being aware of how I'm speaking, or this and that, so I'd like to personally leave with just more awareness on being kind, responding with kindness, and giving myself that cool-off period. Jerod knows it, he's much better at responses than I am sometimes... And I wait for Jerod to respond, because I might not respond so nicely, and Jerod does it; I'm like, "Dude, thank you so much, because your e-mail was so much better than mine would have been", at least in that moment. If I gave myself a day, maybe I can match his kindness, but he's pretty good at it.

**Jerod Santo:** Well, thank you.

**Adam Stacoviak:** What do you think, Brett?

**Brett Cannon:** I think it would be awesome. I think it would be great if we all just walked away from this podcast -- if any other message, of just be kind, and if you have to, take time until you are able to be kind.

**Adam Stacoviak:** Great. Brett, thank you so much for your time. It has been so much of a pleasure to have this conversation with you and walk this road with you. Thank you... I don't personally use Python every day; I'm sure there's lots of software I use that uses Python, so thank you for all your hard work... If you haven't gotten a thank you today, you're getting it right now. Thank you for all your hard work over the 15 years you've done what you do. Please keep spreading this message, please keep being the kind person you are; you are appreciated, and when you feel like you're not, come back to this podcast, come back to this moment and listen.

**Brett Cannon:** Well, thank you to both of you. I appreciate it, and as I said privately, I am a fan of the podcast and I do appreciate what the two of you do with this podcast and the message you try to get out there, so... Thank you for that.

**Adam Stacoviak:** Thank you, we appreciate it.

**Break:** \[01:24:13.27\]

**Jerod Santo:** Aaaand you are off the Changelog hotseat.

**Brett Cannon:** Boom!

**Jerod Santo:** Wasn't that hot though?

**Brett Cannon:** No, not at all.

**Jerod Santo:** That was a good show, that was fun.

**Brett Cannon:** Good!

**Adam Stacoviak:** That was fun.

**Jerod Santo:** I enjoyed that.

**Brett Cannon:** So long as you're not disappointed, that's all I care about.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, I mean, the elongated first break really solidified it for me. \[laughter\] I mean, this show is whatever... This show is whatever...

**Jerod Santo:** I learned so much about Keanu Reeves today...

**Brett Cannon:** I know, right?! Geez, the man's history is crazy.

**Adam Stacoviak:** I like him so much more now...

**Brett Cannon:** I know, I have so much more respect for the man, based on his troubled childhood, and he still turned out to be a nice guy... Wow.

**Jerod Santo:** I know.

**Adam Stacoviak:** That's what happened with me and the driver, I feel like; I can't remember his first name right now, but... From Star Wars... I think it was Michael... Adam! I should know it, geez...

**Brett Cannon:** Oh, Adam Driver.

**Adam Stacoviak:** Adam Driver, yeah.

**Brett Cannon:** He was in the armed forces, in the Marines...

**Adam Stacoviak:** Marines, yeah. He was in combat, and had to leave because of an injury, and it tore him to pieces to do so... And it wasn't until after then he became an actor.

**Brett Cannon:** Yeah.

**Adam Stacoviak:** He gave a TED talk about that, but I had no idea. But your like or dislike for his character in Star Wars may make you like or dislike him, and I wasn't exactly a huge fan of Kylo Ren... And I think even when I was in the theater, when he took off his mask, people laughed, rather than being like "Oh...! This Darth Vader..." And it's not, obviously.

**Brett Cannon:** Yeah.

**Adam Stacoviak:** So he is somewhat of a disappointment in that role to some... But that's not my true feelings, because I know he's creative, and that's really where it stems from. You've gotta respect everyone who's creative. But knowing his true personal story made me like his character and who he was playing the character better. It gave me a new appreciation.

**Brett Cannon:** Yeah, I also thought he nailed it. I think he really nailed that character. I think the problem was when that happened in the movie, I don't think people had enough back-story on the character to realize that he is just a kid who was just--

**Adam Stacoviak:** Right, he was torn.

**Brett Cannon:** He was torn from his parents, and the world he knew has been twisted and contorted into the meanest thing. And then of course, he has this internal conflict that you don't know about till the end, really, where he has the whole scene with his father... But you don't realize that yeah, he kind of looks like this kid, because he is. He's not Darth Vader, this grizzled, pissed off human being, because he thought his whole world was pulled away from him, and basically killed... So it was just the lack of context, and everyone just kind of living in the moment and not stopping to think that "Oh, there might be more to this story later on", just trying to go with it and "Let's see where it ends up", and then "Oh...! There was a reason..."

**Adam Stacoviak:** Yeah, meeting their expectations.

**Brett Cannon:** Exactly, yeah.

**Adam Stacoviak:** See, it's all about them expectations, man.

**Jerod Santo:** Yeah... If they would have set proper expectations...

**Adam Stacoviak:** I'm telling you, the solution to most things is proper expectations.

**Brett Cannon:** Exactly.

**Jerod Santo:** That's true. I think it's true.

**Brett Cannon:** So many more people would have come out happy with The Last Jedi.

**Adam Stacoviak:** \[01:28:24.00\] Yeah. I mean, you can't get upset if your expectations were in alignment with, to some degree, the outcome...

**Brett Cannon:** Yeah.

**Adam Stacoviak:** Or at least aware that the outcome you got was a possibility, and potentially even likely. It's the whole risk, the idea of risk... Like, you know, you lost all your money on Bitcoin over the holiday season? You're the idiot. Those people that are pissed...

**Jerod Santo:** Bad expectations.

**Adam Stacoviak:** Like, what do you expect?! The market wants you to put your money in, so they can keep it.

**Jerod Santo:** So they can keep it... \[laughter\] This is true.

**Brett Cannon:** It's just like movie sequels, right? Everyone comes in with the expectation that it's gonna be just like the previous one. It's like, "Yeah, you know what? It ain't gonna happen. There is no way history is gonna repeat itself that way."

**Adam Stacoviak:** No...!

**Brett Cannon:** It might be better, it could be worse, but it's gonna be different, regardless. And by the way, even your expectation that it's gonna be the same will make you disappointed, because it's more of the same. It's like the weather - you should go in knowing you're gonna be disappointed.

**Adam Stacoviak:** Regardless if it's good or bad.

**Jerod Santo:** No matter how good it is, you're gonna have a --

**Brett Cannon:** Exactly. The weather might look good now, but you could still complain about something, and human beings being as negative as they are, you're gonna find it, and it's gonna make you cranky.

**Jerod Santo:** Yeah. Ten good days of weather in a row, and then one bad day ruins the whole thing, you know?

**Adam Stacoviak:** "What's wrong with the weather?! The weather...!"

**Jerod Santo:** Ten-to-one ratio.

**Adam Stacoviak:** Weren't you just at the beach and enjoying your life, three, four, five days in a row? "Yeah, but today sucks!"

**Brett Cannon:** Yeah, it's like "Oh my god, it's raining!", instead of being like "Oh, it's raining. Oh well, at least I had those five full straight days of gorgeous weather."

**Adam Stacoviak:** Gotta find the good. Gotta find the good.

**Jerod Santo:** Yeah. Well, just yesterday -- so we had an amazing weekend last weekend; great weather... I won't even go into details; it was a great weekend, just a regular weekend... And then yesterday sucked, just -- at home. And Rachel and I were both kind of pissed off, just at life, and I was just like "This weekend was awesome." \[laughs\] She was like, "Yeah. Yeah, it really was." I'm like, "Let's just think about that for a little bit" and she's like, "Yeah, good idea... Because I'm thinking about today, and today is not going so well." And that kind of helped; we had to remind ourselves.

**Adam Stacoviak:** Yeah, you've gotta take stock of what you're thankful for, that's for sure.

**Jerod Santo:** Yeah.

**Brett Cannon:** Well, as Adam said earlier, whenever you get in an argument with your spouse, it's always -- just stop and remember there's no ill will, and you do love this person, and there's a reason you've married them and ended up in this point.

Just remember all the positive before this stupid argument over what movie you're gonna watch tonight, and it helps put a lot of it in perspective. If you can remember to do that in the moment is a totally different question, but at least afterwards be able to reflect back and be like "Yeah, that was a stupid argument. I should have never gotten that upset over this. It really was not necessary."

**Adam Stacoviak:** So true... So true, my friend.
