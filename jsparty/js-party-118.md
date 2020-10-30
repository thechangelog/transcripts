**Emma Bostian:** Welcome to JS Party! I am excited to be here this week, following -- the last time I was on was JS Jeopardy, where... I don't Chris is gonna talk to me ever again, that's why we are not joined by him this week...

**Kevin Ball:** \[laughs\]

**Emma Bostian:** But we are joined by the... I wanted to use the adjective velvety, but I couldn't put that in a sentence without being creepy... We're joined by Jason Lengstorf, who is one of my favorite people to follow on Twitter and in real-life... But that sounds creepy, too. I shouldn't record this late at night. \[laughter\] Welcome to the podcast! Do you wanna go ahead and introduce yourself, Jason, and tell us a little bit about you and who you are and what you like to do, besides cook meat?

**Jason Lengstorf:** Yeah, so I cook, I've just learned that I am now trying to avoid Emma following me in real life... \[laughs\] So I work at Netlify, I'm a principal developer experience engineer, which is like some dev rel and some engineering and a lot of other things in between.

Prior to that I worked as the head of dev advocacy or dev developer relations at Gatsby. And prior to that, I was a front-end architect at IBM, which is actually where I met Emma back in the day.

Outside of work stuff - I'm a big fan of cooking, I'm also a hobbyist bartender, so I collect weird booze and mix it all together, and sometimes it tastes good...

**Emma Bostian:** Other times you don't remember if it tastes good...

**Jason Lengstorf:** \[laughs\] Yeah, that's effectively who I am, in a nutshell.

**Emma Bostian:** That's awesome. Thanks for that intro. Kball, you are also with us... Would you like to say to the lovely people?

**Kevin Ball:** Hello, hello. I will note, Jason has been on before talking about Gatsby, and it was, I believe one of our top ten most popular episodes to date, so...

**Jason Lengstorf:** Hooray!

**Kevin Ball:** Let's see if you can beat that with this one.

**Jason Lengstorf:** \[laughs\] Yes, I will attempt to be very engaging.

**Emma Bostian:** Awesome. No pressure, but Dustin in the chat says that you are the best. And this is just a reminder for everyone listening, if you don't follow our live recordings, or you aren't in our Slack channel, you should definitely join, because that's a boatload of fun in there.

In any case, today we are here to talk about building technical courses. This is something I think a lot of people are interested in, but I haven't seen a lot of content on how to be successful at building courses and teaching people on things like that... And Jason is exemplary in this area, because he does his Learn With Jason show, that I would love to talk more about.

\[00:04:07.29\] You've also done some Frontend Masters courses; I know that because I've watched them, and I've gotten a lot of value out of them... Could you give us a little overview of your history teaching courses, and all that jazz?

**Jason Lengstorf:** Yeah. I started almost by accident, because I was in Montana, and in Montana there weren't a lot of developers. This was pre-Stack Overflow; really the way that you learned was either by buying books, or you would do things like hang out on the W3Schools forum. And if any of you are remembering what that was like - ha! You're old, just like me. \[laughter\]

So in Montana I grew up in a place called Whitefish, where there was not really a developer community at all. Then I relocated to a place called Missoula, Montana. And in Missoula there was this developer group, but there wasn't any specialization. We were like "Hey, we work on computers. Should we hang out?" One of us did PHP, somebody was frontend, somebody was Java... And we didn't know anything about what anybody else was doing, but we wanted to be friends, so we had to give these talks.

I got volunteered to give a talk on PHP at the time, and just kind of walked through some of the features... This was when PHP 6 was in year two of being about to be released, and I was going through the changes and what was new. And in doing that, I thought I was gonna hate it, I thought it was gonna be terrifying, and it ended up being really fun, so I started seeking out opportunities to do that. I applied to conferences to give talks and teach workshops.

As I got into companies, where it wasn't just me, I would do internal workshops. At IBM, for example, I did a lot of internal training. We had a couple groups there where we would do kind of a frontend get-together where we'd get breakfast tacos... It was this really cool event put on by Kelly Churchill and Jessica Tremblay inside the company. We did these other things where it was just kind of like team-specific stuff... And yeah, I've been doing a lot of workshop stuff at events and in person, and then started recently getting more into the online stuff...

So Learn With Jason is an online (kind of) live-coding less so than workshop, but then I make Egghead courses, I make Frontend Masters courses, and I do a lot of tutorial writing for the Netlify blog, and the Learn With Jason blog, and a couple other things, like Smashing Magazine, CSS-Tricks, where I'm trying to help people get familiar with new concepts.

**Emma Bostian:** You're saying all these really great names of companies, which we will link all these in the show notes as well... But that's an incredible backlog of companies that you've worked with, extremely notable people... So I'm excited to dive into that a little bit more.

I remember we had a conversation at IBM -- so for those who don't know, we met at IBM back in 2016-2017, and I had just joined the design team and I was really passionate about mentorship, and I was trying to start a mentorship program there... And Jason was one of the few daring souls who signed on to help me, which was really nice, and that's how I met him... But I remember you and I having a conversation where I asked you, I was like "How do you get to travel so much? How do you go to conferences?" And you were like, "Well, you know, it's a thing. You just apply to conferences, and sometimes they'll have you travel..."

And I remember that moment, I was like "I'm gonna speak at a conference", and you motivated me to speak at a conference. That's really cool, I feel like I idolize you in a lot of ways, because you are such a good teacher... I remember I also saw your talk in Budapest at Craft Conf. Not last year, the year before...

**Jason Lengstorf:** Oh, yeah. It was a couple years ago.

**Emma Bostian:** Yeah, I think it was the last time you gave your talk about your beard falling out... \[laughter\] Which I'm glad to see it is back in business...

**Jason Lengstorf:** It's back in business.

**Emma Bostian:** But Jason gave a really good talk about work-life balance. I forget -- what was the name of it? "How you work half as many hours and get more done"?

**Jason Lengstorf:** \[00:08:07.15\] Yeah, I think "How I cut my working hours in half and got more done", or something to that effect.

**Emma Bostian:** Right. That was such a great talk, because you are so good at storytelling, and I think that definitely translates into your ability to teach people. Teaching is hard, and I think anyone can teach, and I think everyone has something valuable to offer, but it takes a certain kind of person to be able to reach everyone. So I'm excited to talk a little more about what makes a great teacher and how do you actually build a course.

Kball, do you have experience with building online courses?

**Kevin Ball:** I do. I've built a couple, actually. I don't have quite the depth of experience that Jason has, but I built a small, fully-video course for Skillshare on building SVGs and writing SVGs as code, and thinking about SVGs and how you animate them and do things with that... And I've done a few different more interactive webinar-based courses, I did a bunch on Zurb Foundation when I was working at Zurb, and I've done a couple on Vue.js.

One of the things I'd be really interested in exploring today is the different modes of creating courses and what courses can look like. Jason, you've mentioned in-person workshops; you've got this live experience with Learn With Jason, you've got fully pre-recorded video courses... And I've found in my experience -- I didn't mention it, but I have led some in-person workshops as well, so in my experience, each of those mediums has different pros and cons to it, both for the teacher and for the students...

So I think one really interesting thing we could talk about here - I think a lot of times when people think about building courses, they think "Oh, I'm gonna build something fully automated for Udemy, and it's gonna be completely passive income. Yay, I won't have to work anymore in five years", or something like that... And that's only one very small slice of what the world of training and courses looks like. I think it is perhaps not quite what people think it is... So I think one thing we could do that would be pretty interesting is talk about those different modes and what are the pros and cons of each of them.

**Jason Lengstorf:** Yeah. The first thing that comes to mind when you talk about passive income - passive income is not passive, and I think that's a very important thing to learn. You look at somebody like Wes Bos, who has this collection of courses and he's making his living off of it - he's working just as hard, if not harder than most of us, to keep that "passive income", where people are buying his courses and they're self-directed... When you hear him talking that he has to go through and update them all to be using the modern things, he's gotta do the marketing, he's gotta do the support, when people get stuck... There's a lot of things that have to happen to make passive income actually passive.

Typically speaking, unless you're making bucketloads of money, that's all work that you have to do. So it's definitely a consideration there... If your goal for making a course is to make passive income, you may wanna reconsider that, because it is actually a lot of work to make passive income.

**Kevin Ball:** And many courses aren't gonna be big hits.

**Jason Lengstorf:** That's true.

**Kevin Ball:** And they take a lot of time to put together. So if I look at the money I've made from courses... Now, I've not gone fully on courses and there's a lot of things I've done that are probably sub-optimal, but if you take that and divide it by the number of hours that I've put there, it's way less than my freelancing.

**Emma Bostian:** Yeah, for sure. I just gave my first course back in February, maybe January, with LinkedIn Learning, which was formally Lynda.com... Which for my first course was super -- that set the bar so high... And it's really interesting to see, because I'm actually doing my first Frontend Masters course in one week...

**Jason Lengstorf:** \[00:12:08.07\] Oh, cool.

**Emma Bostian:** Yeah, it's exciting, but I'm also terrified... But it's interesting to see how different companies operate. Lynda was very structured; you had weekly meetings with your producers... I'm sure you can attest to this too, Jason - Frontend Masters is very much on you, which is great, but it's also like "Oh, there's no accountability."

But then you have Egghead. Egghead is very much also self-directed, but each of these have different payment plans; I don't like "payment plans", that's not the right phrase... Different payment structures, I guess... So yeah, to the point of like passive income -- some companies will actually pay you upfront to work, and then you also make royalties off that... But some companies - you're solely on royalty-based income. So it really just kind of varies... But agreed, the amount of work you put into a course is absurd, and then you also have to update it.

I wanted to just mention a few of my favorite course-makers... To Wes Bos, tangentially, is Scott Tolinski. He's incredible; his Level Up Tutorials site... I have taken so many courses on there, he's a great teacher, but he's always updating it. Tyler McGinnis as well, I loved all his React and JavaScript stuff. Dave Ceddia works really hard... Bianca Gandolfo - I liked her courses over on Frontend Masters as well.

You can tell great teachers... They make it seem so easy, but when you look at the amount of work they've put into it... It's like "Oh, that's why you're so good at this", right?

**Jason Lengstorf:** Right. Yeah, it's a performance art, really. If you think about what a workshop is, you're not just sharing information. If you were just sharing information, you'd be writing an article or a book. So when you take that to the next step, what you're trying to do is you're trying to get someone not only to expose themselves to new information, but to engage with it and have a guided experience, which takes it that next step; now it's performance art.

What you're trying to do is try to get somebody emotionally invested enough, intellectually invested enough in whatever the subject matter is, that they want to do that work now. They're in with the group, they wanna get something done, you're all pulling together to get to an outcome... And I think that's where it starts to really land, and that's where you get the benefit of a workshop, versus just reading an article by yourself. You can see when people practice that.

**Kevin Ball:** That actually comes to a pretty interesting point about courses, which is "How do you as a teacher think about keeping your students motivated in going through the course?" Now, in a workshop setting they'll tune out, but they probably won't leave, if it's a single workshop for a couple of hours... But if you're putting together an online course or a series of webinars or some other type of thing that requires ongoing commitment... I mean, one thing that I have seen in the courses that I've done is that a large percentage of people drop out. That was even after, for those courses, particularly for the webinar-based ones - I thought a lot about "How do I motivate and try to cut that off", and get people past the feeling of "Oh, I'm not getting this, so maybe I can't get this, so I'm gonna stop" or what have you... But it wasn't fully successful.

I'm curious how the two of you think about that. How do you think about the human, not just the skill transfer that you're doing, but the motivational, and the sequencing, such that people feel engaged and continue to be motivated throughout the course.

**Jason Lengstorf:** Do you wanna take the first shot at that?

**Emma Bostian:** Yeah, so we talked with Angie Jones, who is an incredible person, but also an amazing teacher... She does a lot of testing, I think testing JavaScript; we'll link it in the show notes as well, but she's a great teacher.

**Jason Lengstorf:** Testing Automation University.

**Emma Bostian:** Testing Automation University, thank you. We talked about how people learn, and I think knowing how people learn and digest information is very important... And one of the things that we discussed with her and Ali Spittle (also an educator at General Assembly) is this idea of having "I do, we do, you do" activities.

\[00:15:55.14\] So I'm gonna show you something, we'll do something together, and then you do this based on the skills we've just done together and that I've shown you. I think having this reinforcement, having small, doable chunks of information, but also letting them abstract out some of these skills and try it on their own is one way to really drive home certain points.

**Jason Lengstorf:** I love that. I feel like that takes something very big and academic and turns it into something repeatable. "I do, we do, you do." I'm gonna take that one to the bank. Thank you for that. \[laughs\]

**Emma Bostian:** That's a great title of this episode. I think it's a memorable phrase. When I was writing down my courses, I'm like "This is what I need to do." This is great.

**Jason Lengstorf:** Yeah, it's a really great idea. What I was gonna say, just to echo what you've just said - understanding the different ways that people learn... And I think there are a lot of different axes just inside that sentence, because you have the actual media - are they learning through written word, through person-to-person interaction, through video, through seeing examples... Everybody's got their preferred learning modes.

Then you've got what they're doing in that media. If it's a video, and all they do the whole time is watch, then that can get really monotonous, and you can find yourself tuning out, and it's hard to stay with it. But if the whole thing is doing, then you can get frustrated, like "Well, why am I not just doing this by myself? Why am I paying somebody to watch me work?" So finding a good blend, and going through the point where you're providing engaging information, and almost entertainment on the "how to learn this thing", and then making sure that you break up that flow...

I've talked to Sarah Drasner about this, who has done hundreds of workshops, and is just a truly fantastic educator - she always talks about that. The idea is that you're trying to move people into different modes of thinking, to let them experience the thing, take it in visually, take it in auditorily, but then actually try it and then get feedback... So there's all of these different modes that you're trying to move people in and out of as they go. That's a really powerful approach in this.

**Emma Bostian:** We haven't' read this yet, but at our book club we're doing, we're reading Make It Stick, which was picked by Ali, and it's about how people actually learn, the science behind learning, I believe. I'm excited to read it, but if you're thinking about getting into teaching or you are a teacher, I would highly recommend checking it out. I skimmed it, and it looks really interesting.

With that, let's take a break, and when we come back we'll talk about how you can actually get started building a course.

**Break:** \[00:18:47.18\]

**Emma Bostian:** We talked a little bit about our backgrounds of teaching, and how people learn at a high level, and that's important, but I wanna shift gears and talk about how do you actually go about building an online course? I think - and I know, Jason, you added some of your thoughts, but let's talk a little bit about formats for creating courses, and the different types those can take. I'm gonna let you start in on that.

**Jason Lengstorf:** \[00:19:58.28\] Yeah, the formats that I have seen - you've got short-form workshops, which is more of like a code-along. You're gonna do one small concept, and you can typically do that in the span of a meetup, like a 30 or 60-minute slot. Then you've got the half-day and full-day workshops, which are way more in-depth. You're probably gonna build something, or a series of projects... And those can be a little more in-depth; they're typically more classroom-style. But then you can take that whole thing and you can move it online, and you can find yourself doing -- well, if you look at \[unintelligible 00:20:35.09\] does the games, like CSS Grid Zombies, I think it is, or like Frogger, or Flexbox Froggy - those types of games are effectively workshops, they're just fun workshops... And they're completely self-guided. It's a way to learn.

So I think you kind of move on the spectrum in length, and then you move on the spectrum in terms of level of human involvement... Because I think there's the straight-up pair-programming - it's kind of a workshop, if you think about it. A senior dev sitting with an earlier-career dev, and working through a problem - that's a workshop. So all of those skills transfer over. Even if you never taught a workshop but you've done a lot of pair-programming, you actually have valuable experience that will help you make that kind of content.

**Kevin Ball:** That's really interesting, actually. When you're saying that, I'm thinking about -- there's a few different dimensions that this varies along. There's length, there's amount of personalization... Is this one-on-one, you're reacting to that one person, is this in a small group, where you're maybe reacting to those three, but you have more of an agenda, or what have you...

There's delivery medium - is this live, is this by video, is this written, is this something like that? Are there any other dimensions that we're talking about? I guess the extent of how much doing is on which side of the person - how much is it watching the teacher, or learning from the teacher, versus acting and doing.

**Emma Bostian:** Yes, I wanted to call out two people again who have very opposite formats. What I've seen be very successful are two different approaches. One is you build a project from scratch, from start to finish, and Brian Holt is an amazing teacher, and he does that very, very well. Wes Bos - I've seen him take another approach, which is doing very small, sizeable examples in one video or two videos. He has very encapsulated, different examples. So those are both very successful ways to go about it.

And I would say, if you look at Egghead, Egghead's mantra is basically very short, consumable videos, that can also stand alone... Versus Frontend Masters, where it's more like a college lecture style. So it's really up to you the way that you wanna go about it.

**Jason Lengstorf:** What's interesting is also if you think about "How do you wanna leverage this content?" I'm gonna take a little bit of a tangent, but I swear I'm bringing it back. One of the things that you mentioned earlier, Kevin, was that when we start these courses, they're a huge amount of work. It's so much work to make this happen. So if you're gonna do that amount of work to really get full value out of it, how are you gonna use that content in different ways? One of the things that I've started looking at is this idea of multi-leveraging time. I'm kind of organizing under this banner of "Get five hours output for every one hour of work."

And in doing that, what I'm looking at is, okay, if I'm gonna write a workshop on something, I'm not just gonna say "I have an idea. I'm going to spend six weeks writing a workshop." I have an idea. I'm gonna tweet about this. Did people engage? Was everybody like "This is a terrible idea, don't do it"? And if that avoids blowback or it feels like it's something good, then maybe I'll write an article about it, or maybe I'll make an Egghead video which is 2,5 or 3 minutes. If those are all getting good feedback, then maybe I wanna do an online workshop.

\[00:24:05.04\] Egghead has a really cool online workshop format that I love, where I can teach a short workshop, maybe two hours, on a condensed version of this topic. Then if all of these things are working - first of all, it's one idea that I've now used just in that format, four different ways, and from that, then I know that I've got something good, that is helping people, it's getting positive responses, and people are learning the thing that I want them to learn. So then I go and look at the huge, the big thing - do I want to try to turn this into a full-on course on Egghead, which is like the hour-long collections of more in-depth material? Do I wanna go pitch a version of this to Frontend Masters and do the full day thing? Do I wanna pitch it to conferences as an actual sit-down, in-person workshop?

By that point, I've already done a lot of the work, I've already validated the idea, I've got most of the content put together. Now it's just extending it and expanding it with more information, as opposed to saying "Maybe I can make this work. Let's do tons and tons of work, so I can go try this out."

**Kevin Ball:** I love that.

**Emma Bostian:** That's so funny - that's what I did this year, because last year was my first year speaking at conferences, and I burned out, because I did three different talks. That's insane, especially as a first-time conference speaker. So this year I'm like "I'm gonna do one conference talk." And I wrote it, and it was about React Spring. I took that and I wrote it as a Stack Overflow blog. Then I took that and I'm turning it into an Egghead course. And then I'm taking pieces of it and putting it into my Frontend Masters course. So it's like, do the work once, do it well...

And generally, what I find is I'm writing outlines for these anyway. Outlines can turn into blog posts. Blog posts can be turned into short-form courses, and conference talks - those can then go into larger courses, and potentially even an eBook. Find ways to multi-purpose your hard work.

It's so funny that you brought that up, because I was like "Has anyone else been doing this? Is this cheating?" It's like, no, that's actually a really good business model.

**Jason Lengstorf:** Yeah, people ask me all the time, because I have this appearance of being very productive... And it's because I put out a lot of content, right? And there are others in the industry who are the same way - Sarah Drasner, Kent C. Dodds, Wes Bos, Chris Biscardi, which... Like, "Wow, these people are fountains of content. How do they get so much done?" But if you look at what they're doing... Kent is a good example. Every time that Kent does something, he writes a newsletter about it, he writes an article about it, he creates a video about that article, he then puts that article into a workshop, and then he rolls up the workshops into a course.

So he's not creating dozens of independent pieces of content, he's creating lots of interrelated, overlapping bits of content that repackage and repurpose that content, to help people use it and consume it through whatever media they prefer... But it also allows him to validate individual pieces of the curriculum and get those into the right place before they roll up into the full workshop.

It's a way of doing the work and getting feedback and potentially payment for pieces of the work before you spend the weeks of effort to do the thing. In a lot of cases -- I can't tell you how many people I know who do a workshop one time, and it's like "How could you do that much work and give that workshop once?"

**Emma Bostian:** That's not a good return on an investment.

**Jason Lengstorf:** Yeah, there's no way it's gonna -- I mean, I guess if you sell it out and you've got a really good deal with whatever venue is holding the workshop, you might make a decent hourly rate... But typically speaking, the first time you give that workshop you're gonna take a loss. So giving it multiple times is how it turns into something that actually makes money. You're just kind of amortizing the cost. If you're gonna do the work, spread it out and find ways to make that feed multiple income streams for you, as opposed to putting all of your eggs in the workshop basket.

**Emma Bostian:** If you take anything away from this, take that away. Honestly, it's a brilliant thing, because will always ask me "How are you so productive?" I'm like, "I'm really not. I reuse my own material in different ways." Obviously, I'll change certain activities, but the premise will be the same.

**Kevin Ball:** \[00:28:10.25\] Yeah, I get some of that as well... Less now that I actually have a real job, and I'm not just working on consulting plus content... But yeah, that said, I felt like I knew that lesson, but hearing Jason go through it step by step by step there... You could take that, package it - that's gold. Do that. Do exactly what Jason described, or what he described Kent doing. It's pure gold. Even if you think you know it.

I was thinking, as you were going through that, "Yeah, I reuse and I do this", but holy smokes, that is a tuned process you've just described, that is better than what I've been doing.

**Emma Bostian:** Well, think about how we validate our assumptions in the professional workplace... Generally, if you're a larger company, with a fleshed out design organization, you will validate your assumptions with user testing... You are a valuable resource, your time is a resource, and it's a non-refundable resource, so you need to validate your assumptions. What Jason said is "Yeah, posting on Twitter." See if you get any feedback on that. Or post a very short blog and validate your assumptions.

Also, one thing that I did for this upcoming course, because I'm kind of anxious that -- I don't know, the first time you do a workshop is very anxiety-inducing, because you wanna make sure that if people are paying for something, that you are really respecting their time and their money. So I had people in the industry -- I just posted on Twitter, I was like "Hey, would anyone be willing to vet my course?" And I had them go through it, they opened pull requests, I had people who had actually built the technologies that I was using in my workshop - which was terrifying to have Max (one of the creators of Styled Components) review my Styled Components course...

**Jason Lengstorf:** \[laughs\]

**Emma Bostian:** But then I also had complete beginners, because it's important to get both sides... And I understand not everyone has the time and/or the resources to get the creator of the technology to review your course, but vet it with people. Vet it with people who have experience and with people who are beginners, and see what they say... Because often you have tunnel vision and you're gonna miss a lot of the things that they're bringing up.

**Jason Lengstorf:** Totally. Yeah, I think that feedback is so valuable.

**Kevin Ball:** I'm curious what the two of you have seen on that vetting front. So you try it first as a Twitter post, then you try it as a short article... What does your funnel look like? How many of those Twitter posts don't hit? And then if it gets to the article stage, how many of those end up not moving forward to the next level?

**Jason Lengstorf:** I think you'll get a sense of something that's really working. I would say I have a bunch of things - that I write an article, or I build a little demo or something... Learn With Jason has been a great source of instant feedback, because when we do those shows... The format of the show is I intentionally show up completely unprepared. I wanna ask all the beginner questions, we start with an empty folder...

The idea is to build something together in 90 minutes that has zero assumptions. No boilerplate, or anything. We're like "Alright, how does this work?" and I'm gonna ask you all the dumb questions, because I've never used this before. What is a beginner seeing? That's what I'm trying to do.

What I'll notice is that depending on what I'm covering, there will be really high levels of interest and engagement in long tail views, where people are really digging into this content, or it'll be something that I think is really interesting, and it was really fun, and the people who showed had a good time, but there's just not that demand; it doesn't get the long tail views, it's not getting shared around by people.

So in creating those pieces of content, I get to see pretty quickly "Oh, a lot of people are interested in Svelte. A lot of people are interested in Eleventy." Those are two posts that I did recently, that really caught a lot of steam.

So that shows me "Alright, I should probably dig into this a little bit more. Maybe I should write an article about Eleventy, or about Svelte, and then we'll see how that goes." Does that get a lot of traction? Because then I'll take it a step further. Maybe I'll make an Egghead course about it.

\[00:32:13.22\] But a lot of the things that I do - you know, you see it happen, and you put it out into the world, and you see that it was not a bad response, but people aren't like "Oh, this is amazing. We've gotta share this everywhere" and you're like "Okay." That would probably be harder to market. If I made that, I'd have to be creating a market for that, as opposed to these other ones where there's obviously already interest and people looking for it.

**Emma Bostian:** Yeah, and I think for me -- if I post and I'm immediately getting a lot of people... Sometimes I'll do a Twitter poll where I'm like "Would you be interested in this?" and if it's even remotely split on the middle, I won't do it. Or I'll get a lot of comments sometimes, like "This has been done a thousand times. It's over-saturated." At that point, yeah, look where there's a need...

You wanna find a sweet spot where you're interested in, and where there's not enough content. For me that was React Spring and animation libraries, because Scott Tolinski's course on React Spring was the best I've seen on the library, but it was the only one that I'd truly seen on the library... And I'm like "This seems like an area I could add something new to...", like talk about the psychology of micro-interactions on our users, blend that in with the library and how we can mesh those together.

So I would say find what you're interested in and see if there's already a market for it. If there is, maybe pick something with a little less saturation. Generally, that's where I go.

**Jason Lengstorf:** I have mixed feelings about the saturation thing... Because I personally think that people are consuming content for what they're trying to learn, but oftentimes -- like, how many courses are there on React? And there's still an enormous market for making content about React. I think Kent just released a new one today, that's like "How to write React." So I don't think saturation should necessarily discourage you from writing.

What I use as a guide and what I always encourage people to do - I've been repeating this phrase, "Play until it pays." Because what I've found is that if you're doing things that you're engaged in... I mean, I don't take myself very seriously, so a lot of this stuff that I do is more intended to make me laugh than it is to be productive work... But I chase that. If I'm playing with something and I'm doing something silly, I will find that I'm having more fun doing it and I'm getting these reps in, and I'll start to see where my interest is going. I am clearly gravitating toward this thing, so I'm not gonna have to grind to create content.

So even if it's an area that's saturated, I don't worry too much about putting something out in that space, because it's like -- maybe my course is the one that finally makes it click for somebody. Even if there's a whole bunch of content there, you always get that email that somebody's like "Oh, I've watched so many of these, and yours was the first one that really made it land." And I'm sure that a lot of people watch mine and mine's the one that doesn't make it land, and they're looking for who's gonna do the next one that does.

So I guess I would just say - it's so easy to say that an area is saturated because we see it on Twitter, or there's like five courses about it on Frontend Masters, or whatever... But if you're interested and you would have fun doing it, I so highly encourage you to do it.

A lot of times Chris Biscardi and I - we're working on identical courses, at the same time. We're gonna release them and they're gonna be more or less the same course, but he's a very deep-divy, thinks about things in a very systems/computer-sciency way, and I'm a doofus who likes to play and make boob jokes. It's gonna be different courses for different people, and watching both of them is still gonna be useful, even if it's technically the same content.

**Emma Bostian:** Awesome. That's good advice. I think my only stipulation is don't build something -- this goes for anything in life really, but I wouldn't recommend blogging or creating a course on something that you passionately dislike.

**Jason Lengstorf:** \[00:36:00.17\] Yeah, for sure. \[laughs\]

**Emma Bostian:** Well, I see people all the time that are like "Oh, React is hot. I'm gonna make a course on React", but you don't like React, so don't make it. Because if you don't like something, people are gonna be able to tell, and they're not gonna wanna take your course or read your blog...

**Jason Lengstorf:** For sure.

**Emma Bostian:** So when we come back, we're gonna talk about some tips for building a great and memorable course, and maybe share some of our most memorable courses that we've taken.

**Break:** \[00:36:32.21\]

**Emma Bostian:** So we've talked a little bit about courses... \[laughter\] I was just saying on the break that I don't know how to english a name and I totally am losing it... We're gonna talk more about courses. Let's talk about what makes a good course and what differentiates it from the pack.

**Jason Lengstorf:** Are we gonna finish this up as Sean Connery? "Differentcheate."

**Emma Bostian:** That was just how I speak, apparently...

**Jason Lengstorf:** \[laughs\]

**Emma Bostian:** Past 7pm, my motor functions decline

**Kevin Ball:** Well, letch talk about this...

**Emma Bostian:** Oh, my gosh... You know, when I was in high school, the only accent I could accurately pull off was a redneck. I remember I was one of those news anchors on our news channels, and it was St. Patrick's day... And all I could get out was a redneck accent, so... Anyway. That was a tangent.

**Jason Lengstorf:** \[laughs\]

**Emma Bostian:** Let's talk about courses.

**Kevin Ball:** \[redneck accent\] Y'all don't wanna hear my redneck...

**Emma Bostian:** Oh, goodness... Kball, since you started in with that accent, what's one tip that you would give someone looking to make a great course?

**Kevin Ball:** \[redneck accent\[ Well, Emma... \[laughter\]

**Emma Bostian:** Oh, my goodness...

**Kevin Ball:** I don't know that I could hold this the whole way... The number one thang to making a good course. Let's say... I think actually the first thing to start with for making a great course is to spend a little bit thinking about where people are and where you're trying to take them. It's really easy to say "I wanna teach about this subject" and you start just throwing out content about that subject, or the stuff that's the most interesting to you...

People don't have the context that you have, so you need to think about "What is the necessary context for this course?" Do you expect people to have it before they get in? What context do they need to get some of the later pieces that you need to teach them in the beginning? And be very upfront about that planning step of "Here's what you should know already" and ideally, give people that information. "You should know X, Y and Z" and here are some resources that I recommend for you to learn those things.

\[00:40:08.22\] Then what sequence of things you need to build on to get to the place you're trying to go. Because yeah, I think it's a lot of really bad courses that I've seen, and this is true for articles and stuff like that, too. They jump right in from a point that is the mental state of the author... And they fail to do that thinking of what are the layers of context that you need to build up to get somebody to the place you're trying to take them.

**Emma Bostian:** That's super-funny, because I just gave an internal talk at LogMeIn today about blogging, and one of my tips is don't make assumptions about your readers... So that means spell out acronyms. If you're gonna reference tangential technologies... Like if you're doing a course on React and you mention Redux, at a high-level define what Redux is and maybe link to the docs... But I would say, playing off that, my biggest tip is "Why? Why should your users care? Why are you teaching them this?"

I have a book recommendation, because it wouldn't be a podcast episode if I didn't recommend a book... \[laughter\] Start With Why, by Simon Sinek. It's one of my all-time favorites, and it explains literally why do I care, why should I care.

I wrote a post on CSS specificity, and it's like "Yeah, I can tell you the mathematical equation for how styles are applied in the DOM, but why? Why do you care, and you should care because it leads to maintainable code. It's actually more accessible this way. When you delete legacy code, you can delete the CSS and not have to worry about it." So that's why I would suggest, is explain the why.

**Kevin Ball:** And if you're a video person, his TED talk also on the same subject is amazing.

**Jason Lengstorf:** I have not read that book, but there's an old -- I think it was Toyota in Japan had a technique that they used to diagnose root cause, which was the five why's... And in studying that, which is not quite related to what we're talking about now, but as I was thinking more about that I ended up coming up with this mantra that I repeat to myself, which is always "Find the why", because of all the reasons you just listed. I've written articles about that and I talk about it all the time... Because understanding "Why does any of it matter?" ...if I'm gonna teach you something, it needs to make a measurable improvement on your life. And if I can't articulate what that is, like "Why is the thing that I'm about to teach you better than what you're doing now?" and if I can't articulate that, I don't have a course, I just have a thought.

That helps inform a lot of my decision-making on whether or not I wanna pursue something... Because if I don't have a benefit, if I can't articulate a clear, measurable improvement to your life, I don't think it's worth me taking up your time to teach it to you.

**Emma Bostian:** I like that. It's true. Especially if people are paying money... I hate when I pay money for a course and I feel like I walk away and I've forgotten everything.

**Kevin Ball:** A corollary to that is think about who your course is for, and possibly even more importantly, who is it not for, and make that explicit. "You will get value from this if you are in this situation, trying to do this type of thing. If you are not in that, you will not get value out of this."

**Jason Lengstorf:** I apologize, because I'm about to say the s-word, but learning how to sell things is such a critical part of it.

**Emma Bostian:** I was just gonna say that! I feel like we're of one mindset, which is odd. We're so far away...

**Jason Lengstorf:** \[laughs\] Yeah, I think so. I'm gonna go with great minds... \[laughs\] But yeah, one of the things that I've noticed is that -- when I used to work in an agency, I worked a lot on sales copy... And we were always trying to figure out "How do we make sure not just that people will buy a thing", because it's easy to get somebody to buy a thing, but "How do we get people to buy a thing and not regret it?" How do we make sure that when somebody buys this thing, they're walking away feeling like they made a great decision and their life is improved. And pre-qualification and pre-disqualification were two of the biggest things that we've found.

\[00:44:04.20\] I don't wanna waste your time, and I don't want you to feel like your time has been wasted. So I'm gonna tell you, "You should not read this/You should not take this course if these conditions are true, because it's not gonna be useful for you." And if you lay those things out, it also helps you as a course creator articulate better, like "What are you trying to do?" Like you said, "What is this for? Who is this for? Why am I making this course?" And it helps with the conversation. You can target your messaging a little more clearly to people in the situation you're actually writing for, instead of doing this thing that I catch myself doing sometimes, where I'm trying to back out to a generic to the point that it almost becomes meaningless.

It's like the foo bar example - it sort of demonstrates the concept, but it's so academic that it's hard to land, and usually a beginner or somebody who's not familiar with the philosophy around that language, they'll be completely lost.

**Emma Bostian:** Yeah, that's a good point. I remember being pointed to Coursera courses, and the Harvard Education courses when I was trying to learn development... I have a computer science degree which I learned Java in, and MIPS Assembly language. Then I got to IBM and they were like "JavaScript and the web" and I'm like "It's easy." And then I went on W3Schools and I was like "This is easy..." Then I got into the Dojo codebase and I was like "What the actual...?"

**Jason Lengstorf:** \[laughs\]

**Emma Bostian:** So I think being able to translate typically academic content in the past that was taught, like algorithms and data structures, into something that is consumable by the everyday human... Actually, I remember - this was one of my most memorable courses was Kyle Shevlin's Data Structures and Algorithms course with JavaScript on Egghead... It was the first time I had seen someone create a data structures and algorithms course using JavaScript. They're typically taught with back-end languages.

And when you are new and you're trying to study for a technical interview and you're reading Cracking the Coding Interview, and it's all in C, C++ and Java, how do you -- like, you can't conceptually translate that into different languages yourself. That's really hard. So he was the first person I saw that was taking something so traditionally abstract and so academic and breaking it down for the average person... That is something really covetable.

**Jason Lengstorf:** Yeah. I love the way Kyle's brain works on that stuff. He's done another one of functional programming that I really like. It's funny, the way he and I met is he sent me a message and he was like "I think you and I made exactly the same course without ever meeting each other", because we both made this "functional programming for people who don't care about functional programming" style course, that was like "Here are all the things you're already doing that are functional programming, and why they're valuable, and why you should consider doing more of them."

Mine was way more irreverent and silly, and his was very thoughtful. "Here are real-world examples of what you're doing using JavaScript, and ways that you can make your life easier with functional programming." And I've always liked that, because he's a very philosophical thinker, but he brings that down to a very practical level... Which I think is extremely challenging, and I've seen him pull his hair - well, if he had any hair, he'd pull it out - over how he writes these... \[laughter\]

**Emma Bostian:** Kyle, we're so sorry if you're listening... \[laughs\] I'm joking.

**Jason Lengstorf:** Kyle and I were both bald, bearded guys.

**Emma Bostian:** Was he the one that you did the "Guess whose beard this is" challenge?

**Jason Lengstorf:** Yeah, I had to build a machine learning tool, because people kept thinking that we were each other... \[laughter\] So I built a machine learning -- it's at whichbeardisthis.com. You drag a picture of one of us on there and it'll tell you which of us it is... Because it was a legit problem; people would think we were the other person, because we're both bald, bearded, white guys from Portland, Oregon, and it's very easy to cross us up. \[laughs\]

**Emma Bostian:** \[00:48:11.08\] This is the most absurd thing that I've ever seen, but also I love it.

**Kevin Ball:** That is pretty funny.

**Emma Bostian:** Amazing. One other tip that I have is about medium rotation, which sounds really cool... And then I explain it and you're like "Oh, it sounds cooler than it is." It's basically the fact that people learn through different mediums. I think a) if they're gonna take a course and invest money and time into it, I think it's worth it to understand the best way that you learn before you go into it.

I love reading, but I can't just read; I have to also practice by coding, and I have to watch video. So I like all three mediums of learning... And when you're creating a course, I think having multiple mediums that you rotate through to reinforce the skills is really important.

Tyler McGinnis does this as well, where he'll have a 20-minute video on a topic, and then have an associated blog post with it, and then an activity... And this is great especially for people who maybe can't watch the video right now, because they're commuting on a train or something, and they just wanna read it... But having that reinforcement is so important.

**Jason Lengstorf:** Yeah, I love that. That's something that I want to get better at - creating written companions to the video content that I produce... Because I create a lot of video content, but I don't create a ton of written content, and that's been something that kind of bums me out, because I know that not everybody has time to watch a 90-minute video... And having a tutorial that condenses that down is very valuable.

Also just for me, condensing what I learned into a written post helps me cement what I'm learning... Because you know, I'm learning something new a couple times a week, and a lot of times it doesn't stick. If you asked me how to do what Angie Jones taught me when she came on a few weeks ago, I would have to go watch the video to remember how to do it. And that's kind of a bummer. I'd love to have more of that information stick in my brain.

They say one of the best ways to learn things is to teach them, and I'm finding that to be more and more true, especially as I go broader with the subject matter... Because otherwise it just go in one ear and out the other.

**Kevin Ball:** One thing that I think is worth highlighting, that's come out in what both of you are saying, is that there are a set of skills beyond the expertise in the topic area, that are important for building a good course... This is not to say that you should feel like you have to get all those skills before you start building a course - not at all - but don't be surprised if the fact that you are an expert on a topic area doesn't immediately translate into a great course. You need to learn about how to structure content, you need to learn about how to record video, you need to learn about how to write. All these different things - there's sales skills, there's marketing skills. A lot of the stuff you were talking about in terms of gathering information about where people are and what they're doing - that's marketing.

These are all distinct skill areas, and as you get started working on courses you'll discover that "Hey, a lot of these--" they have a lot to learn themselves, and you'll maybe wanna go and take a course on marketing, or maybe you wanna go take a course on "How do I write a course?" They exist.

Once again, I'm not saying this to try and discourage people. I think if you have an area you're excited to teach, go and start learning about how to teach, and start trying to teach, and giving workshops, and all these different things, because you learn best probably by doing and by trying... But don't be shocked if it's hard, because these are new skills for most of us, and it will take you some time to feel like you've got it and you're getting it to work.

**Jason Lengstorf:** Yeah.

**Emma Bostian:** Absolutely. I think that was a very sentimental moment right there... So with that - and I wanna reiterate what Kball, because I do think it's really important... You know, if you wanna do something, just do it. What is the worst thing that could possibly happen? This is the mantra that I adopted in my life the last couple of years... What's the worst that can happen? What do you have to lose? What do you have to gain, honestly? If it works out, you have everything to gain.

\[00:52:11.08\] So I wanna ask both of you, what is one of your most memorable courses that you have ever taken? I'll go first, Jason's Gatsby course on Frontend Masters was one of my all-time favorites, because I'm a Gatsby fangirl, and I think it's honestly for the fact that Jason was teaching it, because it was so easy for me to learn from him... So that was one of my most memorable.

**Jason Lengstorf:** Well, that makes me feel great. Good that this isn't a video podcast yet, because I'd be blushing...

**Emma Bostian:** He paid me to say that...

**Jason Lengstorf:** \[laughs\] Check's in the mail.

**Kevin Ball:** You do look visibly more red, I think...

**Jason Lengstorf:** \[laughs\] This is hard, because I've been in a lot of really good courses, and I've seen a lot of stuff... I would say probably the course that was the most impactful for me because it was right place/right time was "You Don't Know JavaScript" by Kyle Simpson. I had been doing web development for a long time, but I had always been doing framework-driven design, and I was just about to take a contract where I was gonna be building new stuff. So it was like "Okay, I'm not gonna be doing what I'm used to", which is taking a theme and making that theme do cool things. It was like "I need to be thinking about architecture, and I need to be thinking about how this actually works."

So when I read that book, it was at the right time and the right experience level, where the things he was teaching helped drop a lot of knowledge that I had into a slot that was actually useful and applicable, while introducing new concepts that help me think better about architecture and about writing more extendable and maintainable code.

It's such an experiential thing, because I've seen all these other amazing courses; I've learned animation, or I had that Anjana Vakil did a course on Lambda calculus that is so fantastically well put together, and she's such an amazing teacher... But I don't use Lambda calculus every day, so in terms of the impact that it had on me... Professionally, the impact was low. As an educator, the impact was super-high, because I was like "Man, I wanna be as good as Anjana at teaching, because she's so fantastic."

But yeah, I would say in terms of professional impact, that "You Don't Know JavaScript" was probably the most impactful.

**Kevin Ball:** I think the course that has been the most impactful for me was not a technical course, but it was a course on online business and marketing called "Product Launch Formula". The content of the course, I've come to realize, is not super-unique, in a lot of ways; some of it is, but a lot of it is widespread... But why it was super-impactful for me is it completely opened my eyes to this whole area around how online business and marketing can and does work, and how people do it successfully, and what a bunch of the different core concepts were... So it was not around the actual details of the execution pieces that I picked up in that course. Some of them were valuable, some of them weren't... But it was more around "Here is this entre into this whole different world" from where I had been, which was purely technical.

Now I have a different perspective anytime I'm looking and working at a business, whether I'm working on the business side of it - which I was at the time that I took this course; I had my own business, doing different things... Or when I'm working in the engineering department, but thinking about how are we marketing and selling our product, and how does that tie into the work we're doing in engineering, and are there different ways that we can design things that are going to make a big difference there?

I think the meta-lesson on that is take courses that are outside of your area of expertise, because even if the actual detailed content of that course doesn't end up being something you use very often, the broadening of perspective is sometimes transformational.

**Emma Bostian:** Absolutely.

**Jason Lengstorf:** I love that. That is solid advice.

**Emma Bostian:** \[00:56:09.04\] This episode is full of solid advice. Honestly, I learned a lot this episode. It's nice to speak to other content creators about this, because I don't think I've ever talked about making a course with anyone... But it's an intimidating thing.

I think what I've taken away from this is anyone can do it. It's gonna be hard, you have to put in the time. If you're willing to put in the time, be detail-oriented, you can do really well.

**Jason Lengstorf:** Absolutely.

**Kevin Ball:** One hundred percent. Come into it knowing that it will be hard, and just power through, like you did with whatever else you've done that's hard in your life.

**Jason Lengstorf:** One thing that I would like to call out is if you can find people who are doing the same things, it is so helpful to have accountabillabuddies. \[laughter\]

**Kevin Ball:** I love that word.

**Jason Lengstorf:** I'm part of a Discord group... Chris Biscardi started this thing called party-corgi on Discord, and then it's evolved over time into this community of people who are creating content... I'll put a link here to join that. If you go here, it's a bunch of people who are trying to create things. They're sharing ideas, they're iterating, they're putting stuff out, from live streams to articles to courses and everything in between... And seeing people create is always such a good impetus to continue creating.

I get super-inspired because I'm watching all of these really brilliant people just put stuff out there, and I'm like "Oh, I wanna put stuff out there." Then they'll do something, and I'm like "I have thoughts on that", so I can remix their thought. I'll reference their post and then I'll call out something they said that made me think, and then I'll write a post about that.

It's this amazing way to create lots of content and have a network of people who are -- you get that positive feedback loop, where it's lots of people working together and encouraging each other, as opposed to you in a vacuum, trying to work up the will to create this course and hoping people will like it.

**Emma Bostian:** Yeah, we're gonna link that in the show notes, because I just went and joined, and it is poppin' in there. I need to go to sleep... I've never said that since before in my life... \[laughter\] I need to stop... So with that, I just wanna say a huge thank you to you, Jason. I know your time is extremely valuable, and if you all listening are not subscribed to Jason's Learn With Jason and/or on Twitter, you should, because there's a lot boatload of meat that he posts. Not in his Learn With Jason... Although I would like to see a meat smoking tutorial, so...

**Jason Lengstorf:** I'm working on it. Joel and I are working on ways to create video content about cooking.

**Emma Bostian:** Okay. And then I expect some in the mail, preferably expedited...

**Jason Lengstorf:** You've gotta come visit Portland...

**Emma Bostian:** I do wanna go to Portland, so next time I'm there I'll hit you up. Thank you so much for joining us, and if you are listening and you wanna make a course, go for it. You have nothing to lose, and everything to gain.

**Break:** \[00:59:24.23\]

**Emma Bostian:** Noice. Do you need to go microwave more coffee, or are you oversaturated? \[laughter\]

**Kevin Ball:** No, I will take the excuse to go microwave more coffee. \[laughter\] Oh, my god...

**Jason Lengstorf:** Excellent.
