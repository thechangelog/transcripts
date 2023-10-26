**Jerod Santo:** We're here with our old friend Justin Searls, and our new friend, Landon Gray. What's up, guys?

**Justin Searls:** Hello! I'm just gonna make you just which is which.

**Jerod Santo:** That's Justin... Because I'm not so rude as to not associate a name with that voice... And that's Landon. Say "Greetings" again, Landon.

**Landon Gray:** Greetings. Thanks for having me here.

**Justin Searls:** Sorry, that was rude. I'll just pre announce every statement by saying "Hi, this is Justin." Four-people podcasts is a lot to juggle, so...

**Adam Stacoviak:** It really is. That is the biggest challenge for audio-only listens. It's like, you cannot tell... Like, if there's five or more folks on a show, you really will get lost in the voices. You'll think like "Who's that again?"

**Jerod Santo:** Right.

**Adam Stacoviak:** And then you'll have to play mental gymnastics as you listen, which is a challenge... Which is why we limited this, in most cases, to one guest. But here we are breaking our & Friends rule, because you cannot have just one friend. It's always good to have two friends.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Right?

**Jerod Santo:** I also like how we just declare people or friends, you know? Like, we just met Landon a few minutes ago, but hey...

**Adam Stacoviak:** That's right. Friend.

**Justin Searls:** Yeah, he didn't sign anything. Don't put this on him...

**Jerod Santo:** It's the name of the show, and I'm like "He's our new friend." So...

**Adam Stacoviak:** The best way to make friends is call them your friend.

**Jerod Santo:** That's true. Justin and I do go a ways back. We met in meatspace in Nebraska, of all places. The good life, back in the day. NEJS Conf - it might have been like number two, or number three...

**Justin Searls:** 2016.

**Jerod Santo:** Wow. Years ago.

**Adam Stacoviak:** 2016. Wow.

**Jerod Santo:** Adam, you might have been at that one. There was one that Adam came as well.

**Adam Stacoviak:** I want to say yeah, it may have been 2016... Was it at the zoo?

**Jerod Santo:** Were you at the zoo, Justin?

**Justin Searls:** It was at the old train station by that modernized part of Omaha, that looked really nice...

**Jerod Santo:** Right. Okay, so Adam came to the first NEJS Conf at the zoo, and then Justin came to the second one, at the train station.

**Adam Stacoviak:** I see. Okay.

**Jerod Santo:** We like to conference on hard mode, so we had a new venue every single year.

**Adam Stacoviak:** Yeah, you could never get consistent.

**Jerod Santo:** Yeah, you couldn't have -- everything's brand new, all new challenges... But it was cool, because it allowed us to have a new theme every year... Anyways, not here to talk about ancient history, just to say that we do go back a ways. Of course, Justin and I both came out of the Ruby community... He very much still lives there... Do you consider yourself a Rubyist?

**Justin Searls:** Oh, for sure. Yeah. I oscillated between the Ruby and JavaScript communities, at least during my sort of public internet gymnastics career. Prior to that I did more Java than anything else, I'd say... But in the last few years, I sort of burned out on the churn of frontend JavaScript, and the number of tools changing, and transpilers, and sort of the state of the art constantly shifting... And as we entered this era of React, but React really meaning like that plus 1,000 other plugins, I just -- I got tired of how much there was to keep on top of, and how much complexity was in everything, and I just went back to the soothing embrace of monolithic Rails applications and simple classes, and simple methods... And I've been having a pretty wonderful time over there for a few years now.

**Jerod Santo:** And the first time we had you on the show years ago was LinemanJS. These were your JavaScript days. And then most recently, you were on the show talking Rails and Ruby and your return to that. And a lot of people liked that episode. Definitely, if you're listening to this and you want to hear more from Justin, maybe just listen to this episode and see if you still want to hear more from him. But by the end, if you want to hear more from Justin, check the show notes. We'll link up to that previous episode. And you and Landon work together, correct? Landon, you and Justin are colleagues at Test Double.

**Landon Gray:** Yeah. When you say "work together", that is as a consultant. I don't work really with Justin in the context of a client, but...

**Jerod Santo:** Okay.

**Justin Searls:** Both because Justin is no longer useful as a consultant... \[laughter\] And also because consultancies like ours, especially being remote, it's like a hub and spokes sort of thing, where we only have a handful of internal-facing folks, and then everyone else is spending the vast majority of their time at one client at a time.

**Jerod Santo:** Gotcha. So your paths don't cross.

**Adam Stacoviak:** I love Landon's commitment to clarity though. He's like hesitant to fully clarify exactly how things pan out between him and Justin working together.

**Jerod Santo:** He's an engineer.

**Justin Searls:** I think a lot of our employees have a healthy hesitation to associate too closely with me... \[laughs\] Which is what we look for in the candidate qualification.

**Jerod Santo:** Part of the profile...

**Adam Stacoviak:** You wouldn't consider them friends?

**Justin Searls:** Oh, absolutely they're friends.

**Jerod Santo:** He has to now. They're on the show together.

**Justin Searls:** Landon's a lovely person. I wanted him to be on this podcast mostly so I'd have an excuse to talk to Landon for an hour, and I just have to kind of put up with Adam and Jerod...

**Jerod Santo:** You have to navigate us budding in.

**Justin Searls:** Yeah...

**Adam Stacoviak:** Yeah, this is Justin & Friends today.

**Justin Searls:** Heyy.

**Jerod Santo:** That's right.

**Adam Stacoviak:** And friend. Justin and Friend.

**Justin Searls:** And Adam and Jerod. \[laughter\]

**Jerod Santo:** Nice. Believe it or not, we do have a topic for today. It's not just going to continue to be this for the entire time. It will probably be this uncomfortable for the entire time, but that's just how Justin rolls. But we do have a topic, which is a blog post that Justin published on my birthday, of all days, July 12th, 2023. A little gift to me, and a gift to the programming world, all about this era of the enthusiast programmers coming to an end. So this is kind of like a -- I wouldn't call it a treatise, or maybe it's a screed... This is a long post, and not a technical post, which usually Justin's deep-dives are deep into some testing library or methodology. But this is more like a cultural thing that you brought up. And I think you said of all the things you've ever written, this was the most interest, the most traffic, most conversation... Is that right? Like, this really either resonated or didn't resonate. It brought all of us to the table to discuss. Is that fair to say, Justin?

**Justin Searls:** \[06:21\] It struck a chord, you know... So I started a newsletter recently, a personal newsletter, because I learned that people don't do RSS anymore...

**Jerod Santo:** Yeah, I do. \[laughs\] It's just me.

**Justin Searls:** Okay, so I've got several hundred newsletter subscribers, and a good majority are people using the "kill the newsletter" kind of subscription link, so they can get an RSS feed out of it...

**Jerod Santo:** Actually, fun side tangent - that entire service exists because somebody wanted to RSS our newsletter back in the day, and we wouldn't do it. And so they created kill the newsletter, which is literally our newsletter. And now we love it, because we just point people to that. It's like "You want to RSS our newsletter? Use this." And we don't have upkeep.

**Justin Searls:** I just love the Rube Goldberg machine of you're spitting out an email so that one company can go and catch them all and produce N RSS feeds.

**Adam Stacoviak:** That's what we do.

**Justin Searls:** That's very internet. Yeah, so I was writing this personal newsletter, and the goal of the newsletter is to stay in touch with a lot of folks at once, and to share each month a little aspect about myself. And so this post started as a newsletter update to kind of share "These are some of my quirks." A lot of people ask me about my career, they might start that conversation thinking they want to have a career like mine, and then I kind of like pull back Pandora's box, and then they back away slowly, and they're like "Nah, I'm good." And so it was going to be one of those newsletters, like "Hey, this is --" And if you haven't read the post, the title is "The looming demise of the 10x developer." And I start out by talking about how a lot of the open source and a lot of the creative work that I do is just almost obsessive, in the time I put in, and like how I kind of just get fully absorbed in it, and how I get a lot of - to call it happiness or joy isn't quite the right thing, but it scratches some kind of itch for me...

**Jerod Santo:** Satisfaction maybe?

**Justin Searls:** Yeah. And it's a puzzle box, and I work through it, and I put in way more time, and I learn a lot in the process, I finished the thing, and then it kind of goes off, or it's a thud, but that kind of doesn't matter, because I just wash my hands, take a walk, and then I'm on to the next thing. And I've been in that sort of creativity loop for years and years. And I paused at that point, because then the kind of conclusion was like "And look at how weird and unusual I am." That's idiosyncratic. And then I realized "Actually, I know a ton of developers like this." They're all software developers, and whether that's exercised through software projects, or hobby projects, or whatever... And then I thought a little harder and I was like "Well, it's not all software developers I know." It's like this band of elder millennials, to xennials, like late Gen X folk... And I was thinking back to things I'd read about the 1980s RadioShack marketing computers to boys as like game machines that just happened to be very programming-adjacent in the mid '80s, and the effect that had on women enrollment in computer science, and the knock-on effects that like hacker culture and gamer subculture has had... And because I've had a lot of friends who over the last 10 year, just Bonanza, the gold rush of all the VC-backed startups and huge exits, a bunch of friends in my age cohort, who are now living on sailboats, and retired, and exiting the industry - it was this one little post about me and how weird I was; it actually kind of became like, maybe this kind of generational cohort is what's weird, because we had this sort of very strange upbringing with computers that were reducibly complex. They were like comprehensible to people, like "Oh, yeah, sure, I've got to a DOS computer, like a 386, and I had to learn enough DOS to launch my games, but then I also learned BASIC in the process." Whereas now you give a kid an iPhone and it is a magical piece of glass that they will only ever have to introspect if they really have a lot of deep curiosity. Or they're building something so high up, it's like Roblox.

**Jerod Santo:** \[10:11\] Right. There's actually barriers to that introspection. It's difficult to do.

**Justin Searls:** Yeah, they'd have to go and read along, or set up an Apple Developer Account, and... Yeah, so that was kind of the thrust, or at least the kernel of an idea behind the post, was just to kind of get us thinking about "Is there something different about our generation?" And if there is, and it's sort of -- I say "our generation", because I think Adam and Jerod are similarly aged to me...

**Jerod Santo:** Right.

**Justin Searls:** If there is something different, and if the later generations of folks coming into the industry don't kind of have the sort of same idiosyncratic, maybe you call it stereotypical geek or nerd tendencies, how does the industry need to adjust? So many more programmers in the world that in absolute terms there might be more nerds and geeks in the industry today than there ever have been before, just because there were so many more programmers before, but in terms of proportion, I think that there's a lot of just "normal" people populating the industry now, and I think the industry has been slow to catch up with normative expectations of things like work/life balance, and education. And we don't think about those knock-on effects through the terms of -- maybe what we all grew up learning this industry to be, that was the anomaly, not the norm to expect to just be... Yeah.

**Jerod Santo:** It was a place in time and a group of people in a specific range of times that produced what we had for time, and maybe that time is up, or changing. One of the things you say in the post which I appreciate is that this is a gross generalization... I mean, the thing about stereotypes or generalizations is they are generally applicable, and specifically almost always wrong. You state that right up front, like "If we're going to generalize, we're going to miss a lot of people." And so that's kind of part and parcel to the conversation. And still, I think it's a very interesting conversation. I think there's areas where I think you're hitting on some things that are true, there's areas where I'm like "I'm not so sure about that..." And we wanted to have this conversation, but then as we began to plan it, we were like "Hey, we are three people of that older generation", Adam, Justin and Jerod, who are like -- I'm technically a millennial. I'm the oldest millennial you could be if you're going to go by the actual definitions, because I was born in 1982... It's literally the first year of the "millennial".

**Justin Searls:** And spiritually, you're much older than even that. \[laughs\]

**Jerod Santo:** Right. I'm kind of more of a Gen X-er. And so we are all of that same age range, and we brought Landon here to be our representative to a new generation. Sorry, Landon; so much pressure upon you. But as the representative -- I guess we'd like to learn more about you, who you are, what you do, what you like, and then eventually get around to maybe reacting to your thoughts on Justin's post when you first read it.

**Landon Gray:** Okay. I'm Landon, Landon Gray, I am a human being... I'm trying to think of something interesting to say about myself. I've been on this kick of "Your work is your identity", and so I lead with "I'm a software developer and consultant."

**Jerod Santo:** Right.

**Landon Gray:** So that's what I do. Did I forget anything?

**Jerod Santo:** No, I think that's fair. It's difficult to describe who you are, especially on the spot like that, especially when you don't want to describe it in the terms of your work. I have this struggle as well. I try not to identify too tightly with my work... But in a certain sense, our lives are constructed of the things that we do, and a lot of what I do is this work. And so I don't want to identify myself as that, but that's a large aspect of my life, so it's difficult to do otherwise. Maybe focusing in on Justin's post... I assume you've read it at this point. When you read it, did it resonate? Did you think "Nah..."? What did you think about it?

**Landon Gray:** \[13:49\] I think my initial reactions were -- as I was reading it, I was aware of how much it was taking off, but I was also aware of... You know, me being the generation after, and like not having had any of the context of some of the things that maybe he was discussing, it kind of just felt like I was coming to it a little bit later. So I was trying to piece my experience in with his experience. Kind of like if I started talking to -- I don't have kids, but if I had kids. My kid's about 9-11. They're trying to kind of parse in their experience of the world not having had that experience of 9/11. And then there's a bunch of people talking about 9/11, and everybody knows, and everybody can engage with that. For them, it's sort of like "I think I can understand", but you're still trying to kind of see where that difference is between the generational things that are kind of happening.

I think the one thing that really resonated with me when I read it was some of the tendencies that Justin talks about having, of being obsessive... And me personally, some of the work that I've done, I almost felt like a symptom of sometimes not being well... You know, the obsessiveness I really resonated with, where I would just like go into my room and just spend time for hours just doing whatever; my parents had no clue. But I remember one time I was really into PSPs. PlayStation Portable, for those who don't know. And a lot of people were sort of jailbreaking those, but they called it something different, loading custom software, and Sony would patch it, and then I would just be on the internet on all these forums, trying to figure out ways to circumvent what they were doing... And at one point I had to like modify a battery, and I accidentally punctured the actual battery pack, and I was scared it was gonna blow up and catch on fire, and I was nervous, so I went and had dinner with my family and hope that didn't happen... I don't know why I did that... \[laughter\] You know, I saw smoke come out, and then I was like "I should have probably put it outside", but who knows...?

But all that to say some of the obsessiveness and the really getting into something - that really resonated with me, and I was questioning whether that was the generational line. Like, I do feel like they are there, but I think you said it in the article - it's hard to kind of define... You know, I just found out today that you could be born in 1982 and still be a millennial. To me, I didn't think you were a millennial, you know?

**Justin Searls:** Landon thought that made you a baby boomer.

**Landon Gray:** Yeah, pretty much. \[laughter\]

**Adam Stacoviak:** Wow... I missed that one, yeah.

**Jerod Santo:** You were about to "Okay boomer" me.

**Adam Stacoviak:** Hearing Landon say this, and then obviously reading Justin's post, but only hearing so much from him so far, there was something I heard recently from Neil deGrasse Tyson about children in particular. And Landon, I know you said you don't have any children, but contextually think about this... Imagine you have to - not so much discipline somebody, but guide somebody through life... And let's say they're doing things that are wrong, but they have to make mistakes. And so you as a parent want to protect them, so you say "Don't do that, it'll hurt you", but they have no idea about the world. Right? They don't have any of the experience, any of the context, any of the time that you've had on Earth... And the way Neil deGrasse Tyson described this was that, essentially, we're just conducting experiments through our actions, and trying to figure out how the world works. And the way you describe this PSP hacking, sideloading, whatever it might be, is your version of experimenting with the world, and sort of pushing back on this bubble, this box, this thing that surrounds you. So you're a person, you're a human being, and then you're just trying to figure it out. You got this meat brain above you that's super-intellectual, but not quite there yet, because you're -- I don't know how old you are, but your frontal lobe doesn't fully come into full fruition until around the age of 25. So even then, you don't have full rationale as a human being should have, as a rational human being, that makes rational thoughts, that makes rational summaries of the experiments they do in life.

So I kind of see, Justin, you, and probably if Jerod and I shared our version of your stories, we'd be similar. How do we all push back on the world and experiment with it, and it push back on us? ...and then that sort of -- not so much forms us; as you said before, you kind of resist the idea that what you do defines you... And I always say, what I do doesn't define me, it describes me. Because Adam 10 years ago is not the same as Adam today. But that Adam did something, and it described who he was then. And today's Adam does something, and it describes who -- kind of not who he is, but what he does now. So what I do does not define me, but it describes me.

\[18:31\] But this pushback on the world is just a natural thing to experiment. And we're all just sort of -- some of us more, some of us less curious about how the world works, and so we are willing to obsess further and farther than others might be. And that might give us tendencies to go into areas where we're allowed to experiment way more. And the software world in the last 20-30 years - that's been the epitome of exploration and innovation. So that's the best place for those kind of mines to gravitate towards.

You wouldn't gravitate towards wood building, because that's kind of like set in stone, for the most part. There's been tooling upgrades and stuff like that.

**Jerod Santo:** Set in stone.

**Adam Stacoviak:** Set in stone. Yeah, thank you, Jerod. \[laughter\] Set in wood, to be more clear. Tooling may have changed, but you don't get to push back and experiment on the world quite as much as you do in the STEM world, so to speak. So that's my mini-rant on defining, describing, and also this experimentation satisfaction.

**Jerod Santo:** So Justin, one of the things that you say in the post is that if you're surmisings are somewhat generally accurate, then this is a useful way of perhaps helping us understand some of what you're calling intergenerational conflict. Or basically, people who disagree -- we're all software developers, but we have certain aspects of the work, of the life, of the industry that we're like speaking past each other at certain times, because we don't see eye to eye. And you're saying maybe it is a generational change. We have all these people coming in... I think it was Bob Martin that told us on the show, Adam, that - was it every two years, the size doubles? I can't remember the --

**Adam Stacoviak:** The doubling, yeah.

**Jerod Santo:** Yeah, the doubling.

\[20:19\]

**Bob Martin:** The very first person to write code for an electronic computer was probably Alan Turing; there’s some debate about this, but let’s say it was Alan Turing in 1946. What kind of growth curve gets you from 1 to 100 million in 73 years? Well, it’s not linear… \[laughs\]

**Jerod Santo:** No, it's not.

**Bob Martin:** It's an exponential growth curve.

**Jerod Santo:** For sure.

**Bob Martin:** Alright, so… We’re programmers, we can choose the base of the exponent. We’ll choose the base of two… So how many powers of two is 100 million? Well, two to the twentieth is a million, and two to the seventh is 128, so about 27. So there’s 27 doublings in the number of programmers from 1946 to now, roughly. Okay, well that’s 73 years, 27 doublings - that’s one doubling every two-and-a-half years. Does the number of programmers in the world double every two-and-a-half years? That’s a hell of a question. And initially, I think the answer is no, because during the first decade the doubling rate was much faster. First there was Alan Turing, and then there were ten guys the next day, and then there were 100 guys the next month.

**Jerod Santo:** Right.

**Bob Martin:** And then it slowed down. There’s very good evidence that the current rate of doubling is every five years… And you can look at the age distribution of programmers to see this, and you can look at the want ads lists or the recruiting lists and see a definite trend. If the number of programmers in the world is doubling every five years - first of all, that represents an immense demand. A demand that is growing exponentially. And it’s pretty clear that that’s true, right? We’re seeing software written in thermostats, and microwave ovens, and little things that we carry in our pocket, our car keys have software in them… So the amount of software getting written is just enormous. And this doubling rate means that half the programmers in the world have less than five years experience. This will always be true, as long as we’re doubling every five years. So we’re stuck in an industry that is in a state of perpetual inexperience.

**Jerod Santo:** \[22:17\] As the size doubles, the amount of people who have the experience are vanishingly small, just because of the raw numbers of people coming in. And so maybe this generational aspect to it, which of course is fuzzy, and has specific areas in which it misses the mark, is helpful for us to help change, guide, discuss, understand each other. Was that your major point, Justin?

**Justin Searls:** Yes. Thank you.

**Jerod Santo:** \[laughs\] You're welcome.

**Justin Searls:** To expand a little bit... So one of the three kind of conflicts that I raised in the post was the kerfuffle that happened on twitter.com.

**Jerod Santo:** X?

**Justin Searls:** Yeah... Which was closed down, and shuttered and no longer exists, and now there's another thing called C.com, which owns the twitter.com domain. So on that site, there was an argument about the word "passion", about like nine years ago. And I think that the people complaining about the word "passion" as used to describe programmers, either in like job postings, or as a descriptor of how somebody sees themselves about their job... You know, Chad Fowler wrote a book called "The passionate programmer", and I'd read that book, and chatted with him a bit about it just a couple years prior... And I liked that I felt passionate about software. And then there was a group of folks on Twitter who tended to be younger, tended to be more from the Bay Area, where I'm sure the cacophonous sort of trilling sound of like really, really hustle bro recruiters trying to get people -- just squeeze every ounce of energy out of the stone to work overtime on their startups, in sweat equity and so forth, was like a big kind of part of that. It was like, you know, you don't want to take people's joy and sort of use it like an olive press, and just get some sort of resource out of it... But there was a valence, I think, to a lot of the argument that was like "Hey, this is just work. Let work be work. how up at nine, out at five. You get paid for that labor", and to expect it to be something more, it bleeds and blurs those lines. And all of that was a completely valid debate to have, but the debate had this subtext that wasn't communicated, which was if I looked a couple years prior to teams that I was on, let's say six out of eight of the people on any given team I would join were folks like me, who programmed for fun in their spare time, and we'd have all these really deep and nuanced debates about editors, and tabs, and we would go out of our way and spend weekend time going and like "Oh, I spiked this thing out" or "I tried out this refactor, I did this other thing", and we'd butt heads with lots of toxic alpha male energy on a really geeky topic... And to the two out of eight in that team, it was probably not a super-fun time most of the time. But being the majority, what I was experiencing as one of the people who kind of treated software development as a full-contact sport when I was at work, and like this personal kind of journey that I was always on in my spare time...

**Jerod Santo:** Right.

**Justin Searls:** ...when I wasn't the majority, I felt like "Well, that's what normal is as a developer." And then you fast-forward four years, and certainly after that passionate argument starts to erupt on Twitter, I realized "Oh, now it's like three out of eight on the team now, just based on the generational shift, kind of represent me." And now I'm frustrated, because I'm like "Why isn't everyone else pulling their weight and pushing up the open source, and doing this other stuff?" And realizing that no, it was only a couple people had to swing for sort of the majority or the prevailing kind of like sentiment on teams to start shifting.

And our relationship with what work was, what teams were, what expectations were, how much management and "career-pathing" people expect from their job, versus just "Oh, I'm on my own thing. Program till I die", or whatever... A lot of the things I assumed as being fixed, weren't. And I felt, I think, a little bit like the crotchety old man yelling at cloud over changes that I was seeing, and failing to, until very recently, put that through the lens of, if not literally generational change, then just a shift in the demography of who makes up most programming teams in the country.

**Jerod Santo:** \[26:28\] Yeah, I think that's a good example, is the passion one. But even as now a -- would you call them elder millennials? I was called a geriatric millennial. I'm not sure if that's a derogatory thing or not.

**Justin Searls:** Elder millennial, or a xennial... You just put an X at the beginning, because you're kind of part Gen X...

**Jerod Santo:** Okay. So as almost a Gen X - and not even close to a boomer, Landon, but I appreciate the cheap shot that Justin put in your mouth - I was always on the fence on the passion thing too, because I really nerd out on this stuff. And I put in the time to learn things, and I care about this stuff outside of work hours... I guess I don't really have work hours anymore, but I never considered myself to be super-passionate about it. And yet, I was still putting all the time in... I don't know, I guess I just didn't identify it with a passion. I understood it both to be a group of people who were so, and then I also saw kind of the exploitative way in which companies would describe their desire for passion, and I always saw that as like "You just want people to work for less money, because they also enjoy it, and it's like, that seems like exploitative to a certain degree, or at least leveraging a characteristic of them." And so when I saw the complaints against passion, I was kind of on board with, I guess you'd say the younger generation about that thing. But again, that's just my experience. And when we talk about these things, we tend to have individuals that completely break out of the mold of which Justin has described, with regards to certain aspects. If you were to lay out the characteristics of your generation, Justin, of your enthusiast programmer, one of the things is the passion. What are some other things that you think our generation, this aberrant outlier of a generation has, that other ones might lack?

**Justin Searls:** It's hard, right? It's sort of like going back to Landon's struggling to introduce himself. The list that I might come up with is gonna sound like a list of stuff upper-middle class white guys like...

**Jerod Santo:** \[laughs\] Yeah.

**Justin Searls:** And how much time did I spend trying to fit in in teams in the early 2010s by talking about my favorite craft beer in central Ohio? Or video games? Once you kind of open the aperture on teams beyond just strictly people who care a lot about programming and do it in their spare time, there was a cultural hegemony. And that's why I think in the piece something that really struck a chord with me as I was writing and working on processing these thoughts was the throughline that connects the generation is primarily marketing. The marketing that associated computing with games for boys, the marketing that kind of was adjacent to frat culture, and drinking culture. GitHub having their drink-ups in the late 2000s and early 2010s. They were some awesome events, and I made some really great friends that I'm still friends with today. But separately, in a different context, hugely problematic and exclusive. That's why I don't have an easy answer to the question.

**Jerod Santo:** It's a struggle. Well, the other thing that's challenging about it is if you define your generation in certain characteristics, what you are kind of doing is stealing those characteristics from other people, right? Like, "We are passionate." I think craftsmanship is something that you brought up. And that's like "Well, Landon - he's younger, so he's not passionate, he's not a craftsman", he's not these other things, because that defines this generation, not that generation. So it gets to be -- I mean, it's de facto divisive. I'm masking the division.

**Justin Searls:** \[30:01\] Yeah, yeah... Which is why Hacker News really liked my post. I was trying to talk about my own experience, and they saw their own, and they saw me claiming aspects of what they saw as their own experience, maybe identifying in a different generation, or a different identity... And yeah, I totally get it. And that wasn't the point. The point was just to say, "Are the tides shifting? And if they're shifting, how do we approach big, hairy topics like how to manage engineers, or how to teach people programming?"

**Adam Stacoviak:** You mentioned marketing as the vehicle; it seems to be the impression point, right? Marketing in our day - gosh, it sounds so weird...

**Jerod Santo:** I've never felt older than I do in this conversation.

**Adam Stacoviak:** Marketing came from the television, for the most part, right? Like, the newspaper, the television, friends... We didn't have pocket phones, we didn't have even the idea of smartphones, ever. So we didn't have those distractions. And that's one thing. But the input is so diverse now into the generations coming up 20 years ago to now, and it's gonna get even more so in the future. I think our marketing was simplified, potentially, and concentrated... So it was maybe a little easier to change large ideas, faster; ideas would catch faster. And maybe that's actually true here, but the input is not potentially a marketing company, but more a societal shift. Imagine how fast something goes viral on TikTok. There's certain things that are like unique things at Dollar Store, that are like $2, that literally sell out because somebody on TikTok says something about it, and the next thing you know, across the United States or somewhere else in the world - I don't know where Dollar Stores exist - it's gone, because of a thing like that. But this idea that marketing is what sort of narrates it.

People often have marketing wrong, where they think marketing converts buyers. Marketing changes ideas and beliefs. That's the purpose of marketing. And what you're describing is a change of idea and belief, and in a way, to some degree, a definition. Because you are pushing back on this idea of "Does what I do define me, or describe me?" At least those were my words. And that's kind of an interesting thing, is how has marketing changed from our generation to today's generation? It's gotten uniquely different; many, many more inputs than there were before.

**Justin Searls:** I'm curious, since we're all talking about what got us into programming, or maybe rather this sort of ideological firmament that existed when we got into programming... Landon, tell us a bit about your experience and your story. Did you go straight from piercing mobile batteries and walking out of your house to learning to code? Or were there some steps in between?

**Landon Gray:** Oh, goodness, no. That'd be an awful way to start. Yeah, so for me - when did I first become interested in coding? My parents, they owned a small business, and I remember one of their favorite pictures, and actually one of my favorite pictures too, is me sitting in front of the computer, the first computer that they bought for their business, with a Twizzler in my mouth. And I'm sitting there, kind of looking away from the computer, staring at whoever's taking the picture.

**Jerod Santo:** Black or red?

**Landon Gray:** It was a white computer.

**Jerod Santo:** What?!

**Adam Stacoviak:** A white Twi--

**Landon Gray:** No, Twizzler. \[laughter\]

**Jerod Santo:** Oh, the Twizzler? \[laughs\]

**Landon Gray:** It was a red Twizzler. Yeah, I thought you meant the computer.

**Jerod Santo:** I was gonna say, a white Twizzler...?! What is this magic? Okay, good. Because black Twizzlers - I mean, come on. Gross, right?

**Landon Gray:** Yeah, not good at all.

**Jerod Santo:** I actually like them.

**Landon Gray:** They have the creamsicle ones now, and all these cool flavors. Those are pretty good.

**Jerod Santo:** Oh, man... The kids these days, they have so many different Twizzlers. Sorry, keep going.

**Justin Searls:** And boom, now they're sold out at Dollar General.

**Jerod Santo:** Yes. \[laughs\]

**Landon Gray:** \[33:41\] But yeah, so to kind of fast-forward a bit... I don't know, other than seeing people use the computer, I didn't really interact too much with it. I remember getting online a couple times and not being super-fascinated with computers. But I hit this point where I started -- I don't know if it was around the time I started taking computers apart, like around middle school. My father had accumulated all these old computers that didn't work; or they worked, but somehow they were not new enough to keep using for the general purpose computer that the family used, but we still had them around... And I started switching out parts. I mean, some of the things that I might say might sound pretty stereotypical. I was interested in Legos, and things, younger. So kind of maybe having a little bit of an engineering, builder's mindset. But I think most kids have that curiosity to explore, and it manifests in different ways.

**Jerod Santo:** Did you follow the instructions, or did you create your own?

**Landon Gray:** I followed the instructions. I think creating my own sometimes stressed me out. But I would complete it, and then I'd get bored, and I'd need a new Lego, specifically Bionicles. So building things like that, swapping out parts on computers... I killed a couple of computers because I didn't know what static electricity was... But just around that time becoming more and more fascinated with what these machines could do.

Fast-forward some more, I was introduced to coding actually in my high school. So I went to a Catholic high school that offered coding, and I was like "This looks interesting. I like computers... Let's try it out." And I think that's where I really started figuring out -- actually, I think I knew my sophomore year that I wanted to do programming professionally, and study that in college. Or at least something with computers. So that's kind of what sort of sucked me in. And then I mentioned the PSP thing - that was a big part of it, tinkering with this device. You can make it do things that it's not supposed to do, and that the corporation actually doesn't want you to do... And other things... Yeah.

**Jerod Santo:** That's cool. Somewhat traditional path, I guess, I would say.

**Landon Gray:** Yeah, I think so.

**Adam Stacoviak:** Games were involved...

**Landon Gray:** Games were involved...

**Adam Stacoviak:** Computers were involved...

**Landon Gray:** Yeah.

**Jerod Santo:** Lego is there...

**Adam Stacoviak:** Lego's there...

**Landon Gray:** The weird part though - I didn't play a lot of games. Like, I played games, but I actually got bored. And the interesting part was actually tinkering with the device. Like, that became the game. So it was weird. Like, I'd get the emulator on it, I'd get the game I wanted to play, and then I wouldn't play it because I'd be like "What's the next thing I've got to figure it out?"

**Justin Searls:** Yeah, we're not so different, you and I. \[laughter\]

**Jerod Santo:** It's a bonding moment...

**Justin Searls:** My first Windows 95 machine... I remember when Microsoft launched it, they shipped a VHS that had Jennifer Aniston and one of the other guys from friends to talk about it...

**Jerod Santo:** Oh, yeah. I remember that.

**Justin Searls:** And it was very weird...

\[36:33\]

*This is Jennifer Aniston, I'm Matthew Perry... We're here to see Mr. Bill Gates about a possible starring role in the video guide to Microsoft Windows 95.*

**Justin Searls:** Yeah, it was real weird. That's got to be on YouTube somewhere...

**Jerod Santo:** It is, yeah.

**Justin Searls:** And my parents would give me discs of super-cheap, crappy, shareware games... And I would start playing them, and maybe you lose interest in five minutes, and then pretty soon I'm fighting with IRQ request, to try to -- and then I'm right-clicking on stuff randomly in the Windows Explorer, and being like "Oh, look, I can compress the drive, and save a bunch of space." It didn't tell you that that would also have the effect of breaking Windows, because then Windows couldn't start, because then it would be a compressed -- so I was constantly not in the hardware layer, but in the software layer, tinkering and breaking stuff... And I don't know, maybe it's just me, but I feel like that's what PC gaming was, was like 80% fiddling and 20% playing games for a really long time there. And it was the fiddling that got me down the slippery slope to "Oh, well, here's an image editor. Oh, look, Macromedia also does like Flash, and Shockwave director", and then like "Oh, you can script stuff." And then that leads to going to computer camp, and learning Java... And so there was sort of a natural, I think, glide from gaming into programming for me, and then later building websites, and so on and so forth.

**Jerod Santo:** \[37:52\] I was a gamer, but I did not have the connection between gaming and like moving -- probably because I was a console gamer. I was just a Nintendo junkie. I still am to this day, with my kids now... But for me, it was Napster and Winamp that really got me into computers. The ability to download free music, and then like create cool playlists, and like scrubbing your Napster, like your downloaded mp3, making their titles all gray, giving it all the ID3 tags, and then like tricking out Winamp... That's what I was like "Oh, computers are cool." And then somewhat traditional from there, Landon; you know, learned about it in school.

I remember one time in high school there was like a website class that I wasn't in. But my friend was in it, and he liked Secret of Mana. I'm not sure if you guys know that game, but I liked it as well.

**Justin Searls:** Oh, yeah, sure.

**Jerod Santo:** And he made a Secret of Mana webpage. And I remember specifically, he says, "Watch this, dude", and he would hover over the little sprite of the main character, and he turned from stone to colored on the hover of the mouse. And he's like "I did that." I'm like "That is amazing."

**Adam Stacoviak:** "I did that."

**Jerod Santo:** And just "Do it again, do it again", and like, he'd put the mouse there again, he's like "Yeah, I'm gonna be a web developer." And I'm like "What's a web developer?"

**Justin Searls:** And the answer is "Somebody who gets cease and desist letters from the Square Corporation." \[laughter\]

**Jerod Santo:** Yeah. Well, that site probably still exists on Neocities now, because -- didn't somebody take Geocities and like archive the whole thing, and call it something else? Neocities... It was definitely a Geocities site. But that planted a seed, and then it was basically traditional schooling, that was like "Oh, I'm kind of--" But the Napster stuff, and the Winamp, and that whole file stuff was what made me think "Maybe I'm good at computers. Maybe I should do this."

**Justin Searls:** The fact you weren't in the class, and that you were like on the outside, looking in... I was imagining like a Goodwill Hunting thing, where you're going up to the chalkboard after hours, and...

**Jerod Santo:** Oh, and I'm like "Watch what I can do."

**Adam Stacoviak:** Natural talent, just built in...

**Jerod Santo:** Ah, only in the movies, Justin... So not so different any of us. I mean -- but maybe different views on things. I don't know, Landon, where do you land on the passion conversation, the craftsmanship, the -- what's the third one? The 10x. We've been ignoring the 10x side of this, because it was classic linkbait that worked... And we've been talking - somewhat a joke, but Justin liked putting the 10x developer in there because we know that drives clicks... And we've been talking 10x way too much on the Changelog show, so...

**Justin Searls:** It's really hard to get somebody to read a 4,000-word essay...

**Jerod Santo:** \[laughs\] Exactly.

**Justin Searls:** ...if you just hit the title on the nose, with "I think there may be generational causes for some of the strife that we experience in the industry today."

**Jerod Santo:** That's true.

**Adam Stacoviak:** Well, if you just took your subtitle and turned it into the title, and just shortened it a little bit, "Enthusiast programmers are coming to an end."

**Jerod Santo:** That was actually my commentary, I think, when I covered it. It was like "The subtitle's great. I'd use that."

**Adam Stacoviak:** It is.

**Jerod Santo:** But hey, he got the results he wanted, right?

**Adam Stacoviak:** The looming demise? I mean, that's the hook right there, right? Of who?

**Jerod Santo:** Of the 10x --

**Adam Stacoviak:** The 10x developer.

**Jerod Santo:** We all want to see the 10x demise.

**Adam Stacoviak:** That's right, you wanna see him go down, because that's just like, we can't attain that greatness. They must go down.

**Jerod Santo:** \[laughs\]

**Justin Searls:** I'm really prone to hyperbole generally, but I am really bad at SEO and coming up with good headlines. I think because by the time I make a thing, I'm so exhausted that the thought of naming it is just like -- you know, I just drop the ball at the one-yard line.

**Jerod Santo:** The winning move is you just come up with a title first, and then you never write the blog post. That's my move. I just title things, and then I don't write them.

**Justin Searls:** And then you hand the title to ChatGPT and say "In the style of Jerod Santo..."

**Jerod Santo:** Exactly. But I asked Landon the question and then I immediately cut him off before he could answer it... Personally - not asking you to represent your old generation, Landon, but you personally, when you hear people talk about passion specifically - let's just take that one - is that something that is a positive to you? Do you think it's exploitative? Do you identify as a passionate programmer, or do you think that that's not who you are? What are your thoughts on it?

**Landon Gray:** \[41:52\] I think passion was like a generally positive thing, I think, for me. I think now I've kind of \[unintelligible 00:41:57.28\] because, as Justin was saying, there were only a subset of people who felt that way, and maybe that's dying down. I still think it's a positive thing, and I think it's something that maybe folks in my generation, whatever that is -- I have a lot of... I'm gonna go in a different direction with it. That phrase sort of gives me a lot of discomfort, because - I think I've said in the past that you don't have to be... For one, I don't know if normal people become engineers, because it's just such a weird deal. I mean, many fields; I say "weird". I don't know what I'm saying. I guess what I'm trying to say is, I think it's that element of passion that makes me so good at what I do, and maybe has spurred you all to kind of really push... Because it's hard being an engineer, and consulting. And it's like, when you get stuck -- I was working on some LLM stuff this weekend. Langchain, it's like an LLM tool -- I was basically wanting to ask questions on the document. And I got stuck, and I didn't know what to do, because I couldn't connect to the Postgres database that someone told me "Oh, use Docker." And I'm not super-familiar with Docker, but I could have figured it out. And I just like fought through trying to just configure the gem that I was working on to work... And then I got it working, and it was hard. And it's like, I think passion sort of is something that maybe helps you get over those humps, because it's like, if you don't have that, you have to have something to unblock you. And I think it's hard for me to see that as the generational trait, because it's one of those things where if you're not able to push past that point, it gets -- I feel like it could get limiting for you. Like, I'm willing to work sickening amounts of time... I'm not going to tell you how much I've worked this year. And like Thursday I'm talking about AI, and I'm on a podcast today, and I've done a podcast on AI stuff in the past... It's just like, I've put a lot of work into it, and I don't know how I would have been able to do it without the passion. Because there were definitely times where I was like "I'm sick of this. I'm exhausted. I have work stuff to do", and it's easy for me to be like "I don't want to do this anymore."

I took a class earlier this year, which was like an extra 10 hours to 15 hours out of my week, and I was taking half days from work because I was like "I really want to do this thing, and learn these things." And I think about like if I didn't have passion, would I do it? And the answer is "Heck no." I also feel sheepish about pigeonholing like you have to have passion. And also it's like a generational thing; it's hard for me to say like "That's the divide for me", if that makes sense.

**Justin Searls:** I said earlier that people who fit a lot of the stereotypes I was describing, that I resonate with... I think, Landon, you, we're learning in this conversation, I think, tend to exemplify a lot of the same traits. And so if we zoom out and think a little bit about just like the average team in 2023 and their composition, there are a lot of people who entered the industry once programming salaries got a lot nicer, and a lot of other careers got tougher, or less lucrative.

**Landon Gray:** They did.

**Justin Searls:** And there are a lot of people who want to be able to I want to like "I wanna be a programmer, and clock in, and clock out, and then have a life that isn't programming-related."

**Landon Gray:** Yeah.

**Justin Searls:** But to your point, all of our developer tools are incredibly hostile. Postgres is a database, it's the most popular database in the world. Should I be able to double-click a thing, install it, and have it always be running and not have to worry about "Is this particular PID in the right folder? Oh, wait, no, because of system integrity protection..."

**Jerod Santo:** Oh, you're speaking to me...

**Justin Searls:** You know, "Oh no, now it's opt/homebrew." "Oh, no, just use Docker", and now I've got 55 other problems... Because so many programmers, like a majority of programmers in the past, had what we call passion; maybe it breaks down to like attention to detail, and unbelievable amounts of perseverance and long suffering to push through.

**Jerod Santo:** \[46:03\] Some of it's like obstinance, even.

**Justin Searls:** Obstinance... Yeah. Absolutely stubbornness. Those things might redound to our tooling, that you need all of these traits, that are not typical, just to be able to get your database to run... And then people enter the industry expecting this to be a normal profession, like architecture or civil engineering, where there's a book you can read and a certification you can pass...

**Jerod Santo:** Woodworking.

**Adam Stacoviak:** Mm-hm. Set in stone.

**Justin Searls:** Set in stone, for generations. And that's where I'm really getting at here, is like, we can't change the fact that a whole bunch of people entered the industry expecting us to be --

**Jerod Santo:** Netter than we are...

**Justin Searls:** ...accessible and inclusive... And we can like do it on a social level, but nothing has, from a structural level, caught up to that reality, is my worry.

**Jerod Santo:** So one of the things that I have preached for a long time is that we do people a disservice by describing software engineering as something that's easy to do. Because talk about marketing - I mean, there's a lot of marketing, \#learntocode, everybody should be a coder, coding bootcamps, get into it... And hey, I've taught a coding bootcamp, and I would teach another one. But in that bootcamp, I would say this, "Web development is kind of like racquetball." And then everyone would stare at me weird, because nobody plays racquetball. Well, I play racquetball, and I could teach you the rules, and how to play racquetball in about 10 or 15 minutes, and you can have fun. But you're not going to be good at racquetball for many, many years. And somebody who's good at racquetball is going to come in here and wipe the floor with you, and you're gonna realize how bad you actually are... But you can learn it and have fun in 15 minutes. And I think web development is very much like that. I can teach you the basics in a few weeks. And you can have fun, you can be productive, you can do some stuff. You can make the guy turn to stone when you hover over it with the mouse. But that doesn't mean it's easy; it's gonna get really hard at some point. It drops off a cliff. And that's gonna be up to you to either power through, or not.

And I think we do sometimes tell people "Hey, this is easy." Look at the Twitter threads. It's like "How to be a web developer in '23", and it's like "Learn React. Learn Redux. Learn this. Make money." It's like, "Well, those are all hard things." Each one of those steps is massive. But it looks easy in a list.

And so that's something I say a lot, but I think, Justin, speaking to your point, it's like, what I say is true, but it's also kind of just accepting the reality that a lot of this stuff is still so hard, and we haven't made it easy. At a certain point, software architecture is not easy. It's complicated. And it takes learning, it takes experience, it takes a lot to be able to actually design and develop a well-factored application... But running Postgres should be easy. The stuff that you described, Justin - we probably expect too much of people, because of I guess who we've been, and who we are. And the tools that we've developed. I mean look at Vim.

**Justin Searls:** If you're listening to this and you're thinking "Yeah, I think that programming should be more inclusive." And we talk about it on a social level, of pipeline attrition of individuals who might be from underrepresented groups - that might come to mind, you might think, "Oh, I don't have any way to contribute there." Or "It's not my area of expertise." Well, if you think of just something as like the friendliness of developer tools that are really popular, if you could contribute -- like, one of our other colleagues, Jason Karns, he maintains the fork of rbenv called nodenv. And basically, it's a version manager for Node. And if you've used rbenv or pyenv, or any of that kind of flavor, they all behave very consistently. They're super-well tested. They're really, really fault-tolerant. And it took a hard thing and made it an easy thing. I realize there's a bunch of different Node version managers out there, but that one quacks just like the other ones.

**Jerod Santo:** ASDF, guys. Come on. ASDF for the win.

**Justin Searls:** And ASDF also exists. But like there's a whole bunch of developer tools where there's just sharp edges everywhere.

**Jerod Santo:** Yeah.

**Justin Searls:** \[49:58\] And if you want to contribute, and if you want to make this world a better place for new programmers, then think of those papercuts, and maybe invest a little bit of your time. And that's something you can contribute with code and actually make the industry a better place for human beings.

**Jerod Santo:** Well said.

**Adam Stacoviak:** I think it might be a numbers game. Jerod, you pushed back on the ease, and I totally agree with the fact that you want to say that being a programmer or a developer is not an easy thing. I think it's a numbers game, because if we look far into the future, technology has, is, and will prevail in terms of being a dominant force in the direction humanity. And more and more we're gonna want people to be able to program the world. And it could be literally software programming, it could be Lego programming, it could be all these different manifestations of it. It could be a CNC machine, which is actually quite technical. There's a lot of software behind a CNC machine.

**Jerod Santo:** For sure.

**Adam Stacoviak:** And you can go pick one off the shelf for a grand and start making some dough... But you're not a programmer, but you might need to do programmy things, or softwary things, because you work with a computer. I think it comes down to being a numbers game. And these bootcamps and the ease of this - I think we need to make it easily trialable. Like, when you go and buy software or do something, you want to try it out. And it's like, we need to have that to be the inclusive thing, that to be the accessible thing to try out, from a number's game standpoint, "Is anything programming/software development, in the web (or pick your flavor) pertinent to me? Do I have tendencies to be great at it?" I might have to persevere through the dip that Seth Godin talks about in his book, which I think is a great book, "When to quit." There's certain things you should quit. Maybe you have that stubbornness, as you all talk about, to get through that dip, and make it through to greatness as a developer... And that may take a decade. It may take literally your entire career to consider yourself great, by your own standards.

**Jerod Santo:** Seriously.

**Adam Stacoviak:** But I think we need -- from a numbers game standpoint, we as developers, we who care about this industry should find ways to make the trialing of "Can I be in this industry, and try it out?" accessible. And then from there, blossom.

**Justin Searls:** Shorten the time to failure from five years, where it is now, to something where people can take a personality test.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Something that gives them a beat. Like "Wow, okay, this is a glimpse of what being a developer might be like." Sure, I can make the stone guy turn back to color or whatever it might be, or I can do some of these other things... And that's -- okay, that catches my curiosity. It generates passion, because passion is an emotional manifestation, and there's all sorts of artifacts around what passion truly breaks down to be when it plays out... But it gives people a chance to say, "Okay, this is a glimpse of what it might be like, and I'm willing to go further." And from a numbers game standpoint, we need to have that, because, well, I mean, I think I'd love to have more passionate programmers out there, in whatever way they shape out. And the best way to do that is to be inclusive, and to be accessible to try out what this is.

**Landon Gray:** I really like this point, because the one thing I don't want people to take away from what I said - and I think Justin feels this way, too... It's like, even though I chose to be a little bit passionate, obsessive, I don't necessarily feel like being that exceptionally passionate is like a prerequisite to doing this. I think even skill-wise, I felt you had to be this super-whiz kid type person. I posted on my LinkedIn, I was like "I did so poorly on the--" Like, I took AP Computer Science. I got a grade so low that I didn't even look at it, because I knew it was terrible. I was at school every day - thank you, Mr. Maxwell, if you're hearing this - spent time an hour after school every day just working on problems. And everybody in my classes, they just got it in the class time. I could not understand the difference between -- I think it was like arrays, and array lists, in Java, for the life of me. And I frankly was -- I would argue I wasn't good at it. I got like a two or a one on AP, and it's like, I still am doing this professionally. And partly because I was angry that I couldn't do it, and I was like proving myself I could do this. Maybe that's what got me into programming, is just I was bad at it, and I was just like "I'm just gonna fight this until I'm good at it, and then I'll quit", and then I didn't want to quit. Maybe there's something there. You look like you're gonna say something, Justin.

**Justin Searls:** \[54:24\] Brother from another mother, maybe... \[laughter\] I graduated college with a four-year computer science degree. I struggled. I was not an A student. I was up late in the computer lab every night, propping the door open, because it was past close... And one of my computer science professors, right before graduation, when I was like looking for jobs and striking out on every interview that I took, suggested that maybe programming wasn't for me.

**Adam Stacoviak:** Oh, dang... \[laughter\]

**Justin Searls:** ...which as a private school with a high tuition was -- you were talking about the time to failure, Adam, in terms of...

**Adam Stacoviak:** Yeah, four years is a long time to fail. Yeah.

**Justin Searls:** But I think one of the reasons Landon and I see eye to eye, and why he was able to assume I'd feel this way is - you know, at Test Double our mission is to improve the way the world writes software. And a big, big part of that, I think, one principle that kind of buttresses that point is we believe programming doesn't need to be this hard. And it is this hard. And I often would tell people entering the industry, or especially when Learn to Code was a trending topic on that old site that we might remember called twitter.com...

**Jerod Santo:** X.com. Future-proof it, Justin. Future-proof it.

**Justin Searls:** What? Sorry... \[laughter\]

**Adam Stacoviak:** Gosh...

**Justin Searls:** I would tell people... I would tell people entering, like at cocktail parties, I suppose - it took me about 10 years to reach a point of basic competence where I could do rudimentary tasks individually, without help. And I'm not lying, I'm not exaggerating; that's roughly how long it took. And for me to build like an actual working application full stack that kind of did everything it needed to do, and it didn't have any sort of really bad warts, and it was maintainable and well tested, and yadda-yadda, and well-factored, was at least that long. And people hear that, and they're like "Oh, you shouldn't tell people that, because that will discourage people from entering the industry." I'm like, well, it's a two-pronged problem. There's the aggregate problem, and the individual problem. The individual problem is absolutely I should tell somebody that, because I want them to know what they're going to get into, because I don't want to set them up for failure.

**Jerod Santo:** That's what I was talking about.

**Justin Searls:** But on the aggregate problem, we've got all these systemic and structural reasons. Postgres doesn't need to be this hard to set up. Not to mention any of the sort of employment, and office, and management... All that other stuff, too. So that's why I think like just sticking our head in the sand and trying to throw new novice programmers into the meat grinder is probably not the right long-term solution.

**Jerod Santo:** I mean, there are people putting work into this. There's lots of things you can do in browser now, in terms of just getting started. I mean, Glitch is really cool... I mean, look what Supabase is doing for Postgres, in many ways. It's not that there's nobody working on these problems, but like the industry standard tooling, and everything that we're using now - it's built by this generation of obsessive, passionate, and nerdy, or whatever you describe them, tech bros like Justin.

**Justin Searls:** Hey, hey, don't put that on me...

**Jerod Santo:** \[laughs\] I was waiting for a reaction to that one. I was being a little cheeky there. But there is progress being made. I mean, that's a good thing. And like you said, Justin, I liked your call to arms there. Like, if you think that this is an unfortunate state of the world, and you have skills - well, you put those skills to work in ways that make the tooling better. Make the documentation better.

I wonder what -- not to sully every conversation with artificial intelligence, but I wonder if, as a net change, if chatbots are going to help more people program, or are going to add to the complexity, and to perhaps the time to failure, where you can fake it longer, and never seriously make it, because this thing is spewing out code that works good enough for now, for you to use... I don't know.

**Justin Searls:** \[58:07\] Landon's our resident AI enthusiast at Test Double...

**Jerod Santo:** Alright, Landon, take that one on. Is this going to be a sea change for people getting into software development? Is it gonna lower the barrier to entry? Or is it going to ultimately be yet another tool that's hard to use?

**Landon Gray:** It sounds like a whole other podcast... Justin and I have talked about this, we shared thoughts... I think it's maybe a little bit of both. Or it depends. There's the problem of people getting into programming using ChatGPT. And we talked about this, Justin - they're gonna use it and be like "Build me a site and do all this stuff." And if they just take the code that's there, and just put it in the codebase that they're working in to fix the problem, a) maybe they're not learning anything. b) there are other pitfalls, in terms of like code maintainability, testability of the code, what is the code actually doing... What if somebody pastes that in some application and it starts like the next Heartbleed scenario, or there's some major bug...?

When you have the experience of being a developer and you come to these tools, you have that perspective of what the tool is, and that it doesn't know everything. But if you just take that as "Oh, it gave me the right answer" and you run with it, I think there's a lot of dangerous pitfalls. And that's like a huge fear and thing that keeps me up at night, for future programmers, is like "My God, I'm glad I didn't have ChatGPT when I started." I think it would make it so much harder in some ways.

**Justin Searls:** One reason that I love everyone who works at Test Double is that it puts me in the rare position to play the optimist... Because for me - you know, I'm the curmudgeon in most circles I swim in. But here I could optimistically say, Landon, if I were to zip back away to that bell tower of a computer lab that I was working from, they had the Java 1.2 API, and a standard lib in like a three-ring binder. I would literally go to that and reference it. If I had a question, or something like a tool I was trying to understand, I'd be reading man pages, I'd be asking around, I'd be Googling hopelessly to find somebody explaining these -- every time I had to untar something and then re-compress it... All of that sort of administrivia - like, it exerted a ton of mental energy, cognitive load... It was just -- it wasn't particularly helpful. And if you come to rely on AI tools - right now it's chatbots, but I'm sure in the future, these things are going to be much more tight-fitting to our tools, and much more natural and expressive, and it won't be us just having conversations necessarily... But if I think of it as a much more tactical tool for like "Just answer the question for me. Just tell me the right answer."

I did this recently - I was traveling to Japan in May, and I was doing a lot of content, because I was covering the RubyKaigi conference out there, and Matsumoto -- I had a great time, did a whole field report, kind of like a live blog... And I did a lot of video, and I was using Final Cut for the first time. And I was like "Alright, how the hell do I split a clip?" Or "How do I join two clips?" Or "How do I do this?" And even forget about like using the actual help that Apple publishes to like answer any of these questions...

**Adam Stacoviak:** Yeah, forget it.

**Justin Searls:** I have Raycast Pro, I think that had just come out, and so I could just hit like Command+Space, and hit Tab. This is like a Spotlight alternative. And then they added this AI feature, and you just hit Tab, and I could just like have a quick GPT 3.5 Turbo instance to talk to, and be like "Hey, what's the keyboard shortcut to split a clip in FCP?" And it would give me the answer. Once in a while it was wrong, but I learned all of the keyboard shortcuts that I needed in like half an hour... And that would have been weeks of tutorials, and futzing around, and googling, and getting distracted, and ending up on C.com...

**Adam Stacoviak:** Oh, yeah. The ultimate yak shave, trying to find information. You could watch three different YouTube videos, and watch 17 ads, and later you know the 30 keyboard shortcuts you want because you found the right YouTuber who cared enough to share this knowledge... And it took you four or five hours. And that was work for that day. And so now I have to stop, because -- it's like, forget that; that's not going to be a thing.

**Jerod Santo:** \[01:02:06.17\] Oh, yeah. Rabbit holes. Deep down the rabbit hole. Yeah. I agree absolutely it's a boon for those kinds of situations. I wonder... I've said that -- at this point, obviously these things are gonna get better. There's a lot of money going into making these things better. But today it's best for things that I already knew once, and I don't know anymore, I can't remember, because I can quickly see that it's correct, I can quickly see when it's wrong... Of course, something so simple as a keyboard shortcut - well, you just try it. Does it work or not? Ah, great. So like small, trivial administrivia, like you said, Justin...

Where I think it gets a little more complicated, and hopefully, this just gets better with time, is once you're starting to design software systems - you know, like Kent Beck's statement, like "Make it work, make it right, make it fast", we're gonna have to stop at "Make it work." I mean, how do you make it right? You don't know what right is. And it's like, there's a big jump between those two, I think. Many times, even today - hey, we stop at "Make it work." But when you're relying on artificial intelligence to help you make it work, I just don't know if you'll be able to make it right. And it's not make it work and ship it, but it might have to be. I don't know; maybe I'm a pessimist.

**Adam Stacoviak:** Let me offer an opposite to that. Did everybody here ride a bike before?

**Jerod Santo:** Yes.

**Adam Stacoviak:** Bicycle? Everybody's nodding, except for Justin...

**Jerod Santo:** He's thinking...

**Justin Searls:** I'm using the NVIDIA AI gaze correction, and I'm just staring into your soul... \[laughter\]

**Adam Stacoviak:** Okay, gotcha. You were not blinking for like the last 30 seconds.

**Jerod Santo:** He's more of a treadmill guy...

**Adam Stacoviak:** Anybody here used training wheels?

**Landon Gray:** Yup.

**Adam Stacoviak:** ChatGPT is training wheels. You eventually learn to ride the bike. That's it.

**Jerod Santo:** That's it. That's the tweet.

**Adam Stacoviak:** Yeah, that's it. I mean, I rode my bike with training wheels, and then I had a bike with no training wheels, and I could ride. But I would still fall... And now I ride a mountain bike down literal mountains. Because I'm crazy. But I started on training wheels. You don't need to get to the mountain bike to make the training wheels useful or not useful. And I'm not sure if this is exactly what you're saying, Jerod... But I think that the training wheels are necessary, and eventually -- so you're saying if you kind of rely... So you do rely to learn how to ride a bike with training wheels. So for a short time period, you do rely on that support mechanism, in this bike scenario. That's necessary through anything. So I think if we can -- it's all about the lens, and they probably will get better, potentially more embedded in our tooling...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So I think for a while there if you lean on an LLM, or ChatGPT, or whatever you manifest it as, or it is in your toolkit for a while, and then ride off into the sunset without the training wheels, that's okay. That's cool.

**Jerod Santo:** \[laughs\] Yeah, I guess your statement then is experience produces the skill either way.

**Adam Stacoviak:** Well, learn by doing is a phrase for a reason, right?

**Jerod Santo:** Well, when I think about making it right, and I'm saying that the chatbot doesn't know what right is, it has its own idea...

**Adam Stacoviak:** I agree, yeah.

**Jerod Santo:** But, to disagree with myself...

**Adam Stacoviak:** To work, yes.

**Jerod Santo:** ...it's like, it took me time as a software developer to know what right was. And heck, sometimes I'm still wrong about what right is. There's books written on this, there's 10, 20, 30 years of experience, you start to realize, "Oh, that was not a very good design, because I used it in production, and now I can adjust and not do that anymore." And so maybe that just comes along with what it always did, which is just time on the keyboard, you know?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And the training wheels are there.

**Justin Searls:** I wanted to resist the training wheels analogy, but then I thought about it more... If we can be honest with ourselves and in how these tools mature and how we communicate about them, it's a great way to get from 0 to 30. Like, to get over the initial hump.

I was in a class once, and it was like the first day of data structures, and the professor was kind of about to give an overview. Somebody in the front row, who was just a little bit nerdier than me and had been programming more in high school was like "Oh, really, all you need is an array and a hash." And then the professor's like "Oh, good, you guys already know this stuff", and just like skipped two chapters.

**Jerod Santo:** \[laughs\] "You guys already know this..."

**Justin Searls:** \[01:06:13.08\] And I was like "What?!" If I at least had AI to be like "What's a hash?" Because I was sweating, right? So we can agree, it's mostly about that kind of like the cursory, survey, introductory, make it work level. To Jerod's point, the reason why I'm pessimistic that AI is going to necessarily give us the next leap, until we have cameras in every team room, is that "make it right" is different for every single situation, because it depends on the context of the team, and the business, and the needs of the bigger situation. So right for an app in one context would look totally different than right for the same app in a different context. And no computer, like, basic interface that we can imagine is going to ever have the right context to really understand it... So that part - I think we need to be clear, that's an exercise left to the reader. And that you only learn through the experience of lots of at-bats.

**Adam Stacoviak:** Right.

**Landon Gray:** I'm piggybacking off Justin... Kind of in the same sort of vein, I kind of push back on the training wheels analogy just a bit. I think the framework I use in my brain when I come to it is like "Am I trying to build technical grit, and expertise, and depth in myself, or am I just trying to get past this problem?" And yesterday, or Saturday - it's Tuesday; Saturday, when I got stuck, I did not care why the application couldn't use whatever library it was to connect to Postgres to do my vector database. I did not care at all. I just wanted to make it work. But if I was a developer whose purpose was to figure it out, and be in that space, and work in it day to day, and someone else had to come to me and say "Hey, how's that work? How did you fix it?", I think having that full technical expertise of like the stack, like "What is the database doing here? How does it connect here? What libraries and dependencies?" Like, building that conceptual model for how things work is like something you cannot get from ChatGPT. You have to suffer a fair amount before you can have the whole conceptual model. Otherwise, if anything breaks in the application, ChatGPT doesn't know the context of your application. You're not going to be able to go in there without uploading your entire system and all the nuances into it and being like "Fix it." And if it does fix, it's gotta fix it in a way where it's not stacking two boxes on top of a toothpick for the next break. That's how I imagine it.

I am going off of the XKCD -- you know what I'm talking about, the whole internet's built on this one really fragile thing. But there are engineers who can --

**Adam Stacoviak:** Built in Nebraska.

**Landon Gray:** Yeah, in Nebraska.

**Jerod Santo:** That's right. One person in Nebraska. That's me, I'm maintaining it. \[laughter\]

**Justin Searls:** We all, I think, fit in the stereotype, if we remember that not only that XKCD comic, but also that the one guy maintaining OpenSSL was in Nebraska.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So yes, we are all of one ilk, it seems, at the end of the day. I like that framing, and I like how you said "Is this something that I want to grit, and improve myself? Or am I just trying to accomplish this thing?" And what my fear is - because I've worked long enough in the industry, with enough people, that we think that all of us here are normal, insofar as we have that desire for improvement, and there's a lot of working developers who are stereotypical, that will literally just take the Stack Overflow answer and copy-paste it into their code and ship it and be done. And not give it another thought. And there's a lot of code, and there's a lot of systems out there, that we use every day, that exist with that "quality of software" in them. And will we ever have the thoughtfulness writ-large to say "Am I self-improving right now? Do I need to learn this with technical grit? Or am I just trying to get this done?" and so much code goes out into production because somebody just had to get it done before the lunch break, or before their vacation, or whatever it is - no judgment, just facts - that it's just going to continue to just build on the house of cards that currently exists, and that our lives depend upon more and more every day. I mean, our banking system is built on a house of cards; that's just one of our systems. And so that's where I get a little bit verklempt...

**Landon Gray:** \[01:10:31.24\] I think you're 100% on the ball, yeah. I know a person who had a conversation with someone who was a developer coming out of basically university... And they were kind of distraught about -- you know, it was their first kind of programming game; they were kind of distraught about struggling through the problem... And they kept giving these answers, and my friend kept going back to fundamentals concepts... And my friend discovered that the person didn't have the fundament -- conceptually, trying to figure out "How are you arriving at these answers?" There wasn't a ton of conceptualization happening there, and it was like, oh, this person had basically used maybe not ChatGPT, but somewhere in their learning, they just did the thing to get to the next thing, and now they're in a job... And it's like, you can't do that. You have to understand why you're doing what you're doing. And I'm afraid ChatGPT is going to birth a whole new set of engineer who's just like "How do you fix that?" Someone rolls off my client from Test Double, and goes somewhere else and like "Oh, how did you handle this situation?" It's like "I have no clue." "What? What was your fundamental assumptions?" "Well, I just used ChatGPT to fix it together, and I don't really know how it works, and I can't really change it. But it looks fine." It's just like, we have to share knowledge. We're still human beings; we have to understand how the system works.

**Justin Searls:** I love the frame that you just set up, because the conversation earlier about like that we're all standing on this house of cards - it's really a conversation of the classical Fred Brooks essential complexity versus incidental complexity. And we have to deal, as programmers, with the aggregate amount of all complexity. But the more incidental complexity that there is, the more that we have to kind of just struggle through. But with AI, and advanced tools that can kind of to a certain extent do the job for us, I think that we need to think as a point of individual responsibility and a point of how we educate developers, think of a similar sort of dichotomy. Like, there's two kinds of pain - there's the kind that makes you stronger, the grit, and then the pain that's just useless suffering. And for me, programming, for the majority of my life - when I use ChatGPT, I kind of like just know intuitively, without speaking, and subconsciously, like "Yeah, this is just me reducing suffering by asking it these targeted questions." But for somebody who doesn't have that experience, and they're able to make it do a whole lot of work, and they're skipping to -- it's like the original Super-Mario Brothers, and you just know that on level one, two, you can just jump to the top right of the map, and then go down the pipe to level eight, world eight, and then it's like "I don't know how to play this game, or do all these things, because I didn't learn the systems up to this point." You can get out ahead of your skis, and once you've done that, then you're kind of stuck on that treadmill of having to even lean harder into shortcuts. And I think that's why, for example, Gary Bernhardt's "destroy all software" screencasts were so popular 10 years ago... Because I've taken a lot of shortcuts, and a lot of people had, and it was a way to kind of give ourselves a remedial education in attention to detail, and sweating the small stuff.

There's a similar frame here, that as AI becomes really, really popular as a tool for learning how to program, we could probably stand to educate folks and help come up with, I don't know, like a rule of thumb or a heuristic for when is and when isn't it a good idea from the perspective of your education as a developer, your growth as a programmer.

**Jerod Santo:** \[01:14:02.20\] Right. Couldn't agree more. I think that's something that we have to figure out and start to promote educationally for people. But it's also a moving target, because the quality coming out of these systems is improving, and the interfaces to these systems are improving... And they may become, and they're becoming so tightly integrated with the rest of our tooling that it may be indistinguishable from magic, insofar as you don't even know what you're using. It's just like "Well, my editor just wrote the code." So right now we go ask ChatGPT, or we go ask Copilot, or whatever. And maybe that will become so streamlined through iteration, that the distinction kind of disappears, and then we might be really screwed.

**Adam Stacoviak:** I do agree on the long-term reliance on it is a negative, for sure. At some point you have to abandon the training wheels, and they're gone. So that's where I stand back on that analogy - they do go away, or you rely on them obviously less, because they're gone... I think that's where I'm standing; it's a thrusts, it's an on-ramp. It's a masses, it's back that numbers game. It enables more people to play the game to see if it fits, and if they can take the wheels off and ride alone, then that's the better. I do agree that if you're in a team and you're only relying on this thing to generate something, and you don't know how it works, that's a net negative for everyone. For them, and for their teams, and the products they're working on, and the customers using it.

**Jerod Santo:** Yeah. So there's a lot of that going on, and I know that I was sounding pretty harsh earlier... I do want to say that there are a lot of factors that lead to such code deployed. And some of them are completely legitimate and understandable, and just unfortunate facts of life and circumstances... And so it's not like some programmers are good and some are bad, and we have to watch out for the bad ones, because they're going to get us... But I do think that the stakes have never been higher. And so that's why I get more and more concerned, because software is more and more involved in our lives, and will be more and more. And so while maybe during our younger days, for us elderly here, it was okay to have certain quality issues, or whatever it was, because we were like tinkering around with stuff. Like, if the phpBB went down, okay; or if it had a virus. I mean, if you go back and read like the first worms and viruses, they didn't do very much. Some of them were actually just kind of funny. But the stakes now are just so high that it is concerning. Justin, you were gonna say something?

**Justin Searls:** First, just to that point... I mean, absolutely. It's something where if you can see, like I often do, of... You know, you were talking about fixes earlier, and then you named additional tools, like Supabase, on top of all these other things as like a Jenga tower of like increasingly shaky pieces, that honestly are only as stable as what comes up beneath them... The stakes are much higher.

\[01:16:58.28\] An example just from this week is one of our colleagues, Cathy Colliver, our Director of Marketing, is in Louisville, and I think her kids just went back to school, and I think all of the first three days of school have been canceled so far, because they have an AI-based, really smart bus routing system that just completely crapped the bed...

**Jerod Santo:** Oh, no... \[laughs\]

**Justin Searls:** And so apparently, her son was sitting with the principal in the cafeteria, and all the buses are all everywhere, and the head of UPS came in and like offered to help with logistics training... Even something like that - it fully depends on software, and you can only imagine that's a brand new piece of software. The phrase AI was used, so you know it's standing on top of this Jenga tower...

**Adam Stacoviak:** Oh, yes.

**Justin Searls:** My head's swimming in just imagining -- you know, the screened on the manned space capsule that SpaceX had, they were bragging, "Oh, look that's React running on Chromium in space." And I'm just like "Man, that's just so many more things that could have gone wrong on that than there were on Apollo 11."

**Jerod Santo:** Right.

**Justin Searls:** The stakes are absolutely higher, and I don't think that the industry is putting in the work right to ensure that we're going to be able to be reliable to the extent that the commensurate needs of humanity might demand.

**Jerod Santo:** Well, not to end on a downer, but how do we land this plane? ...both this conversation, and the more dangerous plane of --

**Justin Searls:** And also Southwest, who has been repeatedly grounded with software bugs the last few years...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** We're flying Southwest soon, so... Good luck to us to get on the plane and actually take off...

**Justin Searls:** Hopefully, the mainframe that has a camera in front of it that runs like Highland on base to screen-scrape it into like a thing that can print off the FAA \[unintelligible 01:18:40.20\] or, you know weather reports doesn't go down again, so you're not stranded on the tarmac like I was in McCarran in Las Vegas during the heatwave, because they couldn't print out on those ticker tape dot matrix printers.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** That's quite a sweet hack though... A pretty sweet hack.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** That hack probably got somebody a raise, you know...

**Justin Searls:** This is my third time podcasting with you, and I think every single time Jerod has said, "Well, I don't mean to end on a down note..."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Maybe we can end on some advice, because one of the things you've talked about in this post and kind of where you even end is this idea that generational shifts within the development community are going to present transformative shifts in the way the industry works itself. Maybe either of you can sort of give your personal contextual lens and advice on how that shifts, like how we can best prepare for that, and anticipate those changes that are going to come no matter what, these distinct generations working together.

**Landon Gray:** I think that we're just going to have to grow through the pains, like growing pains. I think generations are going to come together, people are going to have different ideas, different things are going to motivate people, and as human beings - this sounds so cliche - "we're gonna figure it out", sort of thing. \[laughter\]

**Adam Stacoviak:** "We're gonna figure it out, man...!"

**Landon Gray:** I am an optimist, darn it.

**Jerod Santo:** Hey, no, that's the upper that we needed. That was the upper that we needed. We'll give Landon the final word.

**Adam Stacoviak:** It's super-easy, barely an inconvenience. Okay.

**Jerod Santo:** We're gonna figure it out in the end, Adam. I liked that answer.

**Adam Stacoviak:** Well, that's good. I do think that there's an aspect of togetherness there, there's an aspect of hope, and there's an aspect of a satisfactory resolution to the challenge. So good job, Landon.

**Jerod Santo:** He really landed the plane...

**Adam Stacoviak:** Oh my gosh, Jerod...

**Jerod Santo:** \[laughs\]

**Landon Gray:** Oh, wow... I've actually never heard that one before...

**Justin Searls:** See you later...

**Jerod Santo:** Oh, I think that's the end right there. I think we can end on that.

**Adam Stacoviak:** Yeah. Thank you for joining us for Friends. So much fun. Changelog & Friends.

**Jerod Santo:** Thanks, guys.

**Landon Gray:** It's been a pleasure.

**Jerod Santo:** Bye y'all.
