**Jerod Santo:** Well, welcome to our third installment of It Depends. This is a series of episodes where I speak one-on-one with experienced devs about the gray areas in software. I know we all wish everything was black and white, one or zero, true or false... But unfortunately, the real world is messier than that, and all too often "It depends" is the only generalizable answer that there is. Today I have with me Adolfo Ochagavía. Welcome to the show.

**Adolfo Ochagavía:** Thank you. Thanks for having me.

**Jerod Santo:** Happy to have you. Excited to talk about this particular subject. You recently wrote a blog post called "The undercover generalist."

**Adolfo Ochagavía:** That's true.

**Jerod Santo:** I enjoyed it, and I think I put it on Changelog News. It very much spoke to me, being a contractor for many years... And being a generalist myself, the topic for today that we're going to "It depends" -- oh, I should play our little jingle, because I've put a lot of work into this jingle... Not really. Very little work, but still, let's play.

**Jingle:** \[04:15\]

**Jerod Santo:** Now we can officially have an It Depends episode. We are it-dependsing today on the topic of generalizing, or specializing, or maybe both. That will be what we discuss today. I really enjoyed this piece, because you call yourself an undercover generalist. I have long called myself a generalist, and also advocated for generalization... But many times have been told why that's not the best thing to advocate for... And so sometimes I stop and say "Well, it does depend though", because maybe it's not always the best advice. So let's pick into that. First of all, introduce yourself with regard to this post, and the work you've been doing: contractor, Rust, etc. Give us like the two-minute Adolfo, so that we can have a foundation for a discussion.

**Adolfo Ochagavía:** I should have prepared that. Anyway, let's freestyle it. So I wrote this piece because it's been a topic on my mind for a long time that I've been struggling with... And I felt like I had reached a point that I could finally write about it. And how I came there is that when I got into computers, I just loved to learn everything there was to learn. But then when I got into the industry, people wanted to put me in a box, and say like "Oh, so you're a backend developer", or "You're a full-stack developer." And - well, I guess you have to play the game if you want to work, right? So I became a full-stack developer at a company in the Netherlands.

\[05:58\] And there was something generalist to it, in the sense that it was not only programming; we also had lots of interaction with customers, and I even got to, I don't know, do a philosophy course out of the company's pocket. So they really liked broadly-developed people in their workforce. And then when I became a contractor, self-employed, I kind of started realizing that it's difficult to sell your services if you can't put them into a very specific category. But at the same time, there are people out there who would hire me no matter what, no matter what the work is, as long as it's technical. So that's like a paradox there, where people who already tRust me, they are willing to hire me to do whatever, like computer magic... And people who know me less, they kind of need some assurance that I'm capable of doing the job. Well, my Rust identity in that sense helps on that front, because I have done a bunch of things in the Rust ecosystem. This was longer than two minutes, by the way, but I hope you'll forgive me.

**Jerod Santo:** No, I wasn't timing you. Okay, I think that's good. So my background is somewhat similar, in the sense that I began one place, and kind of moved to another place... But always was trying to be a generalist. And as I went freelance, or solo, or contract, I had lots of situations where people would come to me and say "I have this problem." And the problem was usually some sort of technology. Like "I have a PHP app, and I need some PHP help", right? Or "I have a Ruby on Rails app, and I need some Ruby on Rails help. Do you know any Rails devs?" I actually just got a LinkedIn message two days ago... You know, I'm in that latent space, and people still think that maybe I'm available for this kind of work, even though I haven't taken a new contract since probably like 2017-2018.

And he says specifically like "Hey, I've got need for a React dev. Do you know any good React devs around? Because I've got a 30 to 60-hour project, looking for some help." And these are people who - he just happens to know that I was in the business of, you know, contract for hire, and he's looking for a pointer to somebody, but he doesn't know how to categorize that person... Like, "I'm looking for a good developer, because I have a software problem", that's just not the way people think. They think in "What's my codebase?" I guess that's how they think, depending on who they are.

And so yeah, if you're not a React dev, basically you're disqualified from that. You know, I can go back to him and say "Hey, I know a guy name Adolfo. He's really good at generalized things." And if he trusts me a lot, he might be like "Sure, I'll give him a shot." But if he doesn't trust me so much, he's like "Does he know React?" you know... And so there's your specialization.

So what you have found, and what I think is generally applicable, is when you're putting your sign up, you kind of have to have some sort of specialized skill set, because people are going to be looking for that skill set, whether or not that's in their best interest. That's just what they're going to do. Is that fair, do you think?

**Adolfo Ochagavía:** Yeah, I think it's fair. But the nice thing that happened is that someone reacted on my blog post, saying like "Well, marketing isn't the only reason to specialize.

**Jerod Santo:** Okay.

**Adolfo Ochagavía:** So the literal sentence was "Specializing isn't just a way to the market. It's part of becoming a generalist, which has to start with one or more specific areas of expertise." And you know, that resonated with me too, because part of the article was sometimes I kind of doubt, "Maybe I'm a specialist after all."

**Jerod Santo:** Right. \[laughs\]

**Adolfo Ochagavía:** So which of both you pick when you're going to the outside world? And in fact, since I wrote the article, I've been more and more convinced that I want to do the generalist stuff more as a hobby, kind of because I'm interested in computers in general, and I just don't want to lose touch with the general ecosystem... But I feel a lot like doubling down on Rust and systems programming at the moment.

**Jerod Santo:** \[10:12\] Yeah. So you might be specializing for a little while... Specializing during the day and generalizing at night... That's interesting. I think that's true that you do have to kind of pick somewhere to start. And if you're going to become at least proficient, you know, to the point where you feel good about selling your work to somebody else, and they feel good about hiring you. Maybe you're not specialized insofar as it's all you know, but you need to be pretty stinking good at something to make your work hireable on the market. And so everybody starts somewhere, and if you're going to start with Rust, you're going to specialize in Rust until the point that you're good enough in Rust, where you can now add another skill set to your \[unintelligible 00:10:49.22\]

**Adolfo Ochagavía:** Yeah, for instance, accidentally, I'm doing a lot in the software packaging space, especially around the Python ecosystem, because they're starting to realize they can have huge wins in performance using Rust. And it mixes very well with Python. You can wrap Rust binaries in a Python layer in such a way that the consumer doesn't even know there's Rust under the hood. The same way you do that with C. So more and more people are kind of investing in that. These people have their own conferences; like, packaging conference. I didn't know about it...

**Jerod Santo:** \[laughs\] There's some specialization there, right?

**Adolfo Ochagavía:** Yeah. And also, for instance, you get in touch with the container community, people who -- I mean, KubeCon in Paris just finished, I think; it was last week. And also, it's like a specific corner of the industry. And yeah, my current work is an intersection between systems programming, containers, and software packaging. So I'm learning a lot; not much about the Rust, but a lot about these other things.

**Jerod Santo:** Which is interesting, for sure. I guess there's more than one way to differentiate your work, or to stratify your work to keep it interesting and not boring. My position has always been that my enjoyment has been to help people solve problems. And so I've always sold myself as a dedicated and thoughtful teammate to help you solve your problem, and I'll probably do that with software, and if you leave that to me, I will pick the tools that I think are best for the job. But I don't want to be attached to a singular tool, because it's not always the right tool for a lot of different jobs. And I don't want to be pigeonholed, because I've seen a lot of people get stuck where they are, and never really move on.

In my early, young days, I used to say my greatest strength was fear of irrelevance... And so I was always up to date on what's going on, because I didn't want to become the guy who's irrelevant and doesn't know it. And I thought that kept me sharp as a young developer. And there's a lot of people that just learn a thing; maybe they learn Java in college... And I'm not picking on Java for any particular reason... \[laughter\] And that's just what they do, they just do Java. And then, you know, 20-40 years of Java, and then they retire. And for me, I was just like... I couldn't do that. I just never could. So I've always been on the generalized side. But there are reasons to specialize.

We've addressed marketing, we've addressed specialization as a path towards generalization, I guess... And then the other reason is, I think, related to marketing, but pay. I mean, when you become very expert in a particular vertical inside of software, and then that vertical becomes hot, or useful, or in demand... For instance, Rust programming skills are on the -- you know, demand's on the rise. If you are a data engineer, you're an AI engineer kind of person, demand's on the rise... And you become the person who knows that deep, right? ...deep down inside, you can generally demand a higher wage as well. So I think there's another reason to specialize, is to make more money, if that's your aim. Have you found your Rust gigs pay better than other general consulting that you do?

**Adolfo Ochagavía:** \[14:20\] I'm still figuring it out. So the problem here is that I've done some things in the European market, in the Dutch market, and also some things in the US market, and that there's obviously a difference there, which is unrelated to whatever you're doing. The US pays better. I mean, I'm not sure if it's in general, but my contracts for US companies have always been for companies in Silicon Valley, which I guess have money to burn from their investors... So I'm not sure it's due to specialization or not, but within the Netherlands, if I compare - and Europe in general - the contracts I've done as a generalist and as a specialist, I've seen - yeah, big differences. But I mean, it's still difficult to know because of the size of the company matters a lot, too.

Yeah, so for local companies, I've been able to charge significantly more doing specialist work, compared to doing generalist work. So for instance, I remember programming Elixir, and this company said "You don't need to know Elixir beforehand. Just come and strengthen our team." So they had a colleague who had been a colleague of mine in the past, and he kind of vouched for me, and said "This guy's good. Just take him in." And I came to help. And then later -- I mean, it didn't feel like lots of money at the time. And later, other projects I did, I charged like 50% more, or 25% more, and people were okay with that. So there's a noticeable difference.

**Break**: \[16:00\]

**Jerod Santo:** I think probably there's a lot of differences as well when we talk about contract work versus full-time wages, even when it comes to marketing yourself or getting hired. It seems like kind of the contracts that I got over the course of my contracting career, a lot of them were more the kind that you're talking about, where they know you already, or you've been vouched for by somebody who's either hired you in the past, or that they trust. And so in those cases, you kind of skip a lot of stuff, and you go straight to like the first date, that's what I used to call it; like, let's get to know each other and see if this is going to make sense. But a lot of people are out there, on the job hunt right now, which is probably thousands of our listeners, as many layoffs have happened... And it's been tough right now to get rehired, it seems, after you've been laid off, because so many people are trying to find work, that they have to lead with their specializations; they absolutely have to. Because they won't even get considered -- like, their application will get filtered out by some entry-level HR person before they even get to the interviews, because they didn't list the right jargon. And so that's got to be frustrating, but also a reason to like sharpen your specific skills that are in demand today.

**Adolfo Ochagavía:** Yeah. Well, and another topic you mentioned was seeing yourself as a generic problem solver, versus seeing yourself as someone with a specific skill set. And there's a tension there for me as well, because I want to work in such a way that I never lose out of sight the fact that I'm actually helping someone. So that's also why I couldn't work comfortably in a very abstract problem domain like the financial system. Unless it's very clear, like "Okay, who are you helping here?" So for instance, if you make programmer tooling, well, you can make the life of Python developers less miserable, and maybe contribute with the 99th package manager to try to solve things.

**Jerod Santo:** Yeah... \[laughs\] All we need is one more and we'll be good to go.

**Adolfo Ochagavía:** So that dimension is very important to me... But at the same time, I'm starting to realize there are some kinds of problems I'm just not interested in solving. And that's interesting. That means you end up - like, I am starting to give priority to projects that require more thoughtful technical work, and less to projects that require more like just interfacing with businesspeople, gluing APIs together, managing a backlog... And yeah, it's like, I don't know where this is going to end, but I think that as time passes, problem solving is not enough; just mere problem-solving. Everyone solves problems in the work... I mean --

**Jerod Santo:** Well... \[laughs\] Some people cause problems. But yeah, everybody wants to solve problems. Yeah, I agree.

**Adolfo Ochagavía:** It's a very generic description... I mean, I really want to do stuff with computers. So if you have a problem which is a people problem, then I will honestly -- I'd probably be able to maybe diagnose it to some extent, and say "Oh, I think you have a people problem. You should get someone else to solve it." \[laughs\]

**Jerod Santo:** \[23:50\] Yeah, well, that makes you sincere, Adolfo... And I was the same way. One of the things that I stood on was "I'm not going to try to help somebody who I can't help." Even though I want to, because I want to help people, right? But being helpful sometimes is just being a pointer to somebody else. And sincerity and authenticity and honesty, and I guess integrity by proxy, come out of the person who's willing to say "You know what, I can see your problem, I'm thinking that the solution is over here... And I'm not that guy, or that gal. That's somebody else. In your case, that's a people problem. Here are some good people who can help you, hopefully, solve that problem, but it's not me." And so you don't get that gig, you don't get that job; you pass on it, and that hurts, because you want to make money, or whatever, or you want to help people... Right? Like, there's always the tension of "Well, I've got a family to feed, and so which jobs do I take? Which jobs do I pass? Can I afford to pass on this job?" I mean, that's a hard one, right? Because saying no is a privilege that not everybody has. Sometimes you've just gotta have the work. How do you deal with those circumstances?

**Adolfo Ochagavía:** I guess I've been very lucky. So when I started out, I was in a mode of just do whatever; whatever comes up, you take. But at the same time, I didn't want to devalue myself, so I set a pretty decent rate. And it was challenging, because I think I would be willing to take work that I'm not totally comfortable with, for the right reasons... But I'm not sure -- well, I mean, sometimes you just need to, but things turned out in such a way that I was never desperate enough to kind of do really... Like, work with people who don't value my work as I value it. So that's for me like a first basis of collaboration. And only then comes "Well, what kind of work are you going to do?"

And as I said, I've been very lucky. When I started out, I had planned things in such a way that I -- I mean, I could afford having a little work. And since then, I've had work kind of nonstop, except vacations... Though it's still - I get very nervous when "Well, I don't know what I'm going to do next week." And the funny thing is, I shouldn't, because purely from the numbers perspective... I mean, I've planned everything in such a way that I could have months of no projects, and everything would go well. The thing is, when you don't have something, you start thinking like "Oh, well, maybe this is the end."

**Jerod Santo:** Right. Maybe there's nothing else down the line.

**Adolfo Ochagavía:** Maybe there's nothing coming after this.

**Jerod Santo:** How did you get there? Did you just save up while you're working full time, or...?

**Adolfo Ochagavía:** No. So I started very young. I have a very low cost of living, so that helps. That means that -- I mean, if you can... Let's say, if you charge from 100 euros, $100 per hour above, then just a couple of projects a year will -- I mean, if you work two months, for 40 hours per week, then in a country like the Netherlands... I should kind of make the calculation, but you should have enough money to survive, if you are frugal. So not just two months of work.

**Jerod Santo:** Yeah, the math works out in your favor, because your low cost of living, high hourly wage when you do have work, equals you don't need to be billing 40 hours a week in order for you to survive.

**Adolfo Ochagavía:** Yeah. And additionally - there's benefits and drawbacks to this, but the kind of welfare system in a country like the Netherlands means that if you have, I don't know, a very serious illness, you won't be bankrupt by that. So everyone has mandatory insurance, and you would never, let's say... Under normal circumstances, you will probably never pay above 1,000 euros for anything in your healthcare.

**Jerod Santo:** Yeah. So your emergency fund doesn't need to be as big as people in other circumstances, because you have a cap on your emergency spend.

**Adolfo Ochagavía:** \[28:15\] Yeah, exactly. And after the first year, which was -- I mean, it was tough, not from a financial perspective, but more of a psychological perspective... Like, when you have had no work for a couple of months, you're like "Does this still make sense?" And at the beginning, you're like "Well, you know, it doesn't matter. I can learn new stuff on the side, read all these books I wanted to read", and whatever... But then where's the work? So if I got kind of stuck after a few months, and only thanks to a recruiting platform I got the next project, it was kind of -- yeah, it was a six-month project, so that was nice. It meant I didn't have to look for anything else in that time. And after that project finished, I got another six-month project, which was nice, too. After that, things got more -- I kind of had to surf the waves. It got more like a rollercoaster.

But about that time came like the Rust breakthrough, where there was -- well, I started writing more actively, trying to... I actually started framing myself as a Rust expert. And I don't think this is a good strategy to get random people from the internet to work with you, but I think - well, it's mostly luck, that someone thought "Hey..." They saw a couple of blog posts, and they thought "We should work with this guy." So they sent me an email, and I worked for them for a couple of months. And then a Rust maintainer I know, of a couple of Rust networking libraries - he got offered to work on that, being sponsored to implement a few features, but he didn't have time. So they told them "Hey, you should talk to Adolfo. He's good." And then I ended up doing that. And that way, things kind of escalated, because I ended up getting on the radar of the ISRG, the people behind LetsEncrypt, and they asked me to work for about five months on a very nice project. So I got to do lots of open source work last year, which gave me also lots of things to write about... And I feel like having done this amount of work in the open, and writing about it has helped me market myself, I guess, as a specialist, as I wrote in a blog post.

**Jerod Santo:** Right. So you can remain an undercover (maybe) generalist...

**Adolfo Ochagavía:** But the thing is, I started doing this more out of a marketing necessity. Afterwards, like last one or two months, I started thinking like "Hey, I think this is not only marketing. I think I actually like this. Maybe I should just stick with this." And of course, one of the things I love about this is not necessarily working with Rust, which - I mean, it's a nice language, but it also has its warts. It's mostly that I get to learn a lot.

So for instance, diving into the container specification. And recently, I had to investigate lazy-loading techniques to get your container to start up faster... It's so interesting to kind of get in touch with the great ideas people have had about how software should be packaged. And you become smarter by studying the specification someone else wrote, because they're smart. The same goes when implementing a network protocol. Like, you get to read a bunch of RFCs, and... I mean, they're not perfect, but I don't know, for me it feels like you become part of a community of very smart people, who are driving the foundations of technology further. So that's very attractive to me. It's like becoming a -- well, I don't think I'll ever become a famous internet person, but I'm kind of treading in the path of the people who built the internet, which is nice.

**Jerod Santo:** \[32:08\] Yeah. So you'll be the kind of person -- it's kind of like the actor's actor; you know this concept of like certain actors are not famous, like superstar-famous, but they're so good at what they do that they are respected by other actors more than they're respected by mainstream audiences. It's similar to like if you go ask a major league baseball player who their favorite player is, a lot of time they're not going to say the most famous baseball player. It's gonna be somebody that is like "Yeah, he's good." Like, everybody knows that's a good player, but the players know that that player is good. And so there's like this undercurrent of respect there, even though you're not going to have necessarily starring Adolfo Ochagavía on the playhead there. I did notice you have an awesome testimonial. You mentioned LetsEncrypt Josh Aas on your website, for instance. That is probably worth its weight in gold for people who know who Josh Aas is, to people who are in your little niche. I know Josh, I've met Josh, we had him on the show. I respect him quite a bit. I saw that, and I'm like "Dang, that's a nice testimonial. Like, I'd love to have that about me." And he said that about your work, so that's indicative of that.

**Adolfo Ochagavía:** Yeah, it's amazing. It's also - I've very consciously tried to ask for recommendations after every successful project. It's not comfortable to do so, but if people are happy, they will be happy to write something for you. And it can make a big difference. Not necessarily making you more findable, but once people find you, and they try to validate you, like "Is this guy really worth this much money?" and they see "Hey, all these people from the Rust ecosystem and elsewhere are saying that it's worth working with him." So yeah, I haven't yet kind of experienced if this really makes a difference, because I'm still getting most projects through network. Like, people who know me, who recommend me personally, not just on a website...

**Jerod Santo:** Well, it can't hurt. It's certainly social proof to confirm perhaps a recommendation or a network... You know, because they're going to check you out. Even if I got a recommendation, "Hey, I'm looking for somebody who does Rust, whatever, whatever", somebody I trust says "Yeah, check out Adolfo. He's pretty good." I'd go to your website, I would read it... I would see that testimonial of Josh Aas and I'd be like "Okay, there's two witnesses there that say he's good." So now I'm gonna go ahead and have more confidence in hiring you that first time. So it certainly can't hurt.

We have a similar situation with podcast recommendations, because we get a lot of nice emails, and I love them, and we have dialogues in private with listeners who say our shows are good, we've helped them in this way, etc, etc. And yet, in terms of like getting that into something that could be a recommendation that could be used publicly or something, I have to then ask, you know... Which always kind of feels weird. But over the years, I finally just said "You know what, I'll just reply back, thank them so much, and then say" - I even just did it just the other day, and he was happy to go do it. I'm like "Can you just copy paste that into an Apple podcasts or Spotify review? Because those are really helpful for us." And he's already written something nice, so... Copy-paste, throw it in there... We really appreciate it... And people usually say yes, but it always feels a little bit icky to ask, because it's just like...

**Adolfo Ochagavía:** Yeah, but on the other hand - I mean, if you really think you have something to add to this world, you need to help people realize that you are there. Right?

**Jerod Santo:** Yeah. Is this the reason for your writing? I mean, you said you've been writing more. Is this kind of in the marketing work? I mean, because hey, I've found you because you're writing, and now we're friends, and now I know if I come up with somebody who needs Rust help, I point them in your direction... So it's working. But was that the reason for the writing, or do you just like to write?

**Adolfo Ochagavía:** \[36:07\] So there's a bunch of reasons. I've always liked to write. When I was in school, I thought about getting into philosophy after finishing high school. But I lived in an environment where people were like "Are you crazy? You will starve. Just go and become a lawyer instead", which is also kind of related to the humanities, you know? So I went and studied the first year of law... Which was interesting. I think I got pretty much like a bunch of things out of it, that I'm still using today. But then I decided I wouldn't write contracts for people, who will never follow them, but for computers, who always do what I say. So I made this switch... But the interest for writing has always been there.

And then, actually similar to specialization, my main motivation - well, I don't know if it's really similar to specialization, but in any case... My main motivation to write at the beginning was as a way of marketing myself. But at the same time, I felt like I should only write if I actually had something to say. So it's a combination, because I just refuse to write filler articles. I don't even think that it would work, because people are smarter than that. I mean, at least the people I want to work with. So yeah, it started out as a marketing need. Like, I needed to prove myself that I was a Rust expert. I mean, I was talking to a company, and they were like "Yeah, but who are you?" So I thought "I never want to have this conversation again." So I wrote a whole blog post explaining kind of -- I did some historical digging, what was my exact contribution to the open source project. And I wrote down one big blog post, long blog post - I think it made the Hacker News front page, too - explaining "Well, this is what I did." And I'm not like one of those famous Rust contributors, but "Well, I did this, and I did that, and I organized the Dutch meetup at the beginning a couple of times..." And yeah, that kind of worked.

And after that, I started to realize - especially last year, I started realizing that people really get inspired by what I'm writing. I started receiving emails from people, and seeing subscribers, and... I mean, it's not like I'm looking a lot into numbers, because I'm not doing it for the numbers... But I've had people write to me, saying "This article has really opened my eyes to X." And that's very special, because I think if you have something to contribute to the world in any way, and you are capable of doing it within your means, and without it going against more important stuff - well, why wouldn't you do it?" So writing articles takes lots of time, especially if you want to write things that are worth reading...

**Jerod Santo:** And pain, too.

**Adolfo Ochagavía:** Yeah...

**Jerod Santo:** For me, at least. Maybe that's just me, but I feel like - and I always pick on my wife, because I use this analogy, and she hates it... And she deserves to hate it, because she's given birth to six children. And so I say, you know, I don't write a blog post, I birth a blog post. And I'm just trying to relate to the pain. But she won't have it, and with good reason. I have no right to say that. But it does feel like that. For me, it's just like, not drudgery, but just painful work. And then just like a child, you go through all of that, and it's the worst pain in human life, you know, that doesn't kill you, or whatever. And yet afterwards it was all worth it, because now you have this child. And a lot of times a blog post can be like that as well, at a microcosm, where it's like "This was a lot of work, and anguish..." And yet, I always am glad I did it at the end. And that doesn't always motivate me to write the next one, but still. It's worth it. Especially when you have people like you, Adolfo, who are emailing you, telling you that you inspired them, or you intrigued them... I mean, it pays dividends, but it is work. It's hard work.

**Adolfo Ochagavía:** \[40:22\] Recently, I even ended up meeting people in-person in Amsterdam because of one of my blog posts, or having video calls with people from other countries. And I even got someone from Lebanon to go for lunch with one of my friends, because I thought "Hey, I think you're the kind of person this guy would love meeting. So why don't you just meet?"

**Jerod Santo:** "You two should have lunch", and that actually worked out.

**Adolfo Ochagavía:** And they did it. And they enjoyed it a lot. They sent me a selfie...

**Jerod Santo:** Oh, funny.

**Adolfo Ochagavía:** And I was like "Hey, it's so nice that something small such as a blog post..." But actually, it was this blog post, that started also this conversation, about the undercover generalist... That it triggered so many good things, in so many people. So as I mentioned, I started writing from a marketing perspective, because I actually saw it as an investment. I need to invest in my reputation. And with time -- I mean, I always thought it also contributed something to the internet discussion... But I'm starting to think more and more that the contribution, even though it's not life-changing in bigger-scale things, it is a real contribution that's worth doing. So I think even if I didn't have my business, I would end up writing anyway; maybe less frequently, because it's just a lot of effort... But yeah, I think that there's a bit of a lack of authenticity on the internet... So even if you write about very daily programming stuff, like "Hey, I did this project, and I had lots of fun. And this is what it was about", people love it. Or "Hey, I became a contractor a while ago, and I've been struggling with lots of things. And I've figured out a bunch of things, but lots of other things I haven't... And I'm also a bit afraid. Here's my story."

**Jerod Santo:** Yeah.

**Adolfo Ochagavía:** Or the same about the -- I mean, we're talking right now; it's so nice when you don't have to pretend you're some kind of expert... When I open LinkedIn, or many, many places where you normally get articles from, people are pretending they're kind of Einsteins that know everything, and...

**Jerod Santo:** Right. Gurus. There's gurus everywhere.

**Adolfo Ochagavía:** "The five things you need to know to avoid starving in the next recession", you know? So just writing about normal stuff, from a real human perspective... And I'm filled with curiosity about computers, and I think I can pour that into my articles. And I also care about the people who are reading my articles. So I guess people, in some way, perceive that.

**Jerod Santo:** Yeah. No, I think that's true. And there is a lot of noise on the internet. That's one of the reasons for Changelog News, which we've done for many years, is just to be able to highlight people who are writing like you're writing, to cut through a lot of the gurus, and hopefully provide some signal to people who really deserve it. I mean, our whole deal was like "Shine a light where it should be shined." And we hope that we do that on a weekly basis with that show, and that newsletter... You know, any newsletter has probably between 12 and 20 links, and I think that any working software developer who's curious in this space will find one of those sincerely good, and touching to them. But those are hard to find, and people like yourself are hard to find... And so not everybody has time to do that work, and so we try to do that work a little bit, just with that little spotlight of ours that we can shine on people. So it's pretty cool...

\[44:03\] And I also think that your sincerity is absolutely spot on, because insincere writing, grandstanding, AI-generated trash - as a seasoned reader of the internet, I can spot that stuff a mile away. And I can also know when someone's writing from their heart, and from their experience. And when I read that post, I was like "This guy knows exactly what he's talking about." You do. There was no doubt that you were sharing that from your actual, real experience. And so I would encourage you to keep writing, and I would to also encourage our listeners, who maybe aren't writing, but have things to share with the world, is to go ahead and go through the pain; birth a blog post, send it my way, and we can get other people reading it as well.

**Adolfo Ochagavía:** One of the people who inspired me a lot in this regard is Julia Evans. Her writing - there's something special about it, because --

**Jerod Santo:** Well, so much voice...

**Adolfo Ochagavía:** Yeah. I mean, it's not the way I write. I mean, I like to polish my stuff much more...

**Jerod Santo:** No, it's her voice. That's her voice, not yours. You have your voice, she has hers.

**Adolfo Ochagavía:** It's like, she doesn't feel the need to appear as an expert about anything. She's just like "Hey, I love computers. You should love them, too." And I'm actually trying to write from the same source, with a different voice... But I think it's the same source. And you end up writing stuff that it's not necessarily very generalizable, in the sense like -- I mean, you won't have advice for like the programmers of the world, but you can have a couple of stories, inspire someone with your curiosity, and maybe you'll document a bunch of things that someone will find useful about containers later, when they google something.

**Jerod Santo:** Yeah, but at the same time, I think advice that is generalizable to the programmers of the world is very rare. I mean, that's the reason for the It Depends miniseries, is because there's very little generalizable truth. I mean, maybe Fred Brooks hit on a few things; you know, there's no silver bullets... I think that's generally true. The mythical man month, generally true. But even our idioms and our clichés, "Don't repeat yourself", right? Or design patterns... They all have "Yeah, buts." All of them do.

**Adolfo Ochagavía:** That's why I specifically am trying to avoid that kind of stuff. Like, "Oh, you should always unit-test your code." Come on... Or all kinds of different generic rules, "You should --"

**Jerod Santo:** I did write one once, which was born out of my own experience, after many years of writing CRUD web apps. And that was titled "You might as well timestamp it." And the general premise there was you think you need a boolean, you probably just want a timestamp; you're gonna wish it was a timestamp at some point. Trust me, I've done it. 100 times I have been like "I'm gonna switch this to a timestamp." You might as well just timestamp it. And still, even that phrasing, which that one did go I think like number one Hacker News for a day, or something... Even that phrasing still has some wiggle room in it. Like, it's not "You have to", it's "You might as well." And so every once in a while you'll hit on something, but even that has its "Yeah, buts."

**Adolfo Ochagavía:** Nullable timestamp, right?

**Jerod Santo:** Yes.

**Adolfo Ochagavía:** Where null is false, and the timestamp is true...

**Jerod Santo:** Exactly. And the existence of the timestamp is true.

**Adolfo Ochagavía:** It sounds useful.

**Jerod Santo:** It's just the same exact -- it's practically the same thing, but it has more information, basically. In practice, you get the same functionality, but you also have a time associated with it. Now, there's other ways you can slice that too, which give you more information... And you'll find those in the comments to my blog post. Which is great too, because that's the other thing is when you write you learn, because there's lots of other smart, mostly genuine people.

**Adolfo Ochagavía:** I mean, that's also one of the reasons to write to see what other people have to say about the topic.

**Jerod Santo:** Exactly.

**Adolfo Ochagavía:** Like, I've been very curious about the topic of generalization and specialization. Every time it comes up, I kind of look at the comments, see what people have to say, and the fact that a whole bunch of people on Hacker News started commenting on my blog post was amazing, because I got to read lots of interesting stuff. And I see that like a symbiosis between my article and the people commenting, that becomes a new whole that people can... "Consume" is such a horrible word, but...

**Jerod Santo:** Consider.

**Adolfo Ochagavía:** Yeah, consider is much better.

**Jerod Santo:** Oh, thank you. Absolutely, a lot of times the comments are the best parts. Sometimes the comments are just a dumpster fire. So it's hit or miss... But sometimes they're the best parts.

**Adolfo Ochagavía:** Yeah.

**Break**: \[48:34\]

**Jerod Santo:** Back to specialization... There's one danger in specialization, which I think I touched upon, but let's talk about it more directly... And that is when you specialize in a technology, you are making a choice to invest into a particular technology, in lieu of the others; you're exclusive of the others. And Rust is working out very well for you. But you can also back the wrong horse, as many people have. And I even have a few times in my career I've invested in technologies that no longer are in use. And I'm not talking about jQuery. That was a good backing in the day, because it lasted for a long time in the market slice.

**Adolfo Ochagavía:** It's still in use.

**Jerod Santo:** Yes, it is. But for instance, I got into Cappuccino for a while... Have you heard of cappuccino? This was a JavaScript library that was built on top of another project called Objective-J. This was from a startup called 280 North. Very talented guys. They built basically Objective-C in JavaScript, and Cappuccino was their AppKit. So they were basically like copying Apple's AppKit framework into JavaScript, and you could write it in Objective-C-ish, all - I think it was either transpiled, or somehow done at runtime. I can't remember. And so they had this whole -- and they had a great web app called 280 Slides, which was an in-browser Keynote clone-ish... And it was very whizbang. And I wanted to learn Objective-C anyways, because I was getting into macOS development, and was already writing a lot of JavaScript, and I thought "Okay, I can learn some Objective-C, I can keep doing JavaScript, I can bring it into the browser..." And I spent about a year building Cappuccino things. It generated one client for me, and that was it. And then it kind of went by the wayside... All three of the people who created Cappuccino moved on to other projects... I'm sure it still lives out there in some production code somewhere. This was about probably 2008-2009 time period. And now you don't know what it is. Right? So in terms of making a bet, that was not the best bet. But I didn't get deep into it, so I was able to read the tea leaves and move on. But you sure can back the wrong horse, and now you're really in trouble there. Can you speak to that? I mean...

**Adolfo Ochagavía:** Yeah, yeah. So I also think about this, because - I mean, you don't want to make bad choices, in general. And I haven't met anyone who really got stuck in their career, but probably because I'm very early in mine. I'm 31. But I've read plenty of comments on the internet from people who got stuck, but I've always wondered what is the real cause. Is this because they made the wrong bet? Or is this because these people have no proper network? Like, maybe they ossified their ability to learn new things... There could be so many causes behind the random internet comments saying "Oh, yeah, I specialized, and now I can't find a job."

\[56:21\] I've also seen other kinds of comments people wrote to me because of my articles saying "I'm a generalist, and now I can't find a job. I should have specialized." So for me, it feels like maybe you're looking the problem in the wrong place... And what has paid off for me a lot is just genuinely caring about people, and about your work. With a bit of luck, the combination can be very powerful.

And I think also, one of the things - like, going back to the risks of investing in the wrong technology... I'm trying to invest in very fundamental technology. So Rust has pretty much won at this moment. Like, all the big companies are betting on it, the US has made a document saying we need to move off memory-unsafe languages. Rust is in the Linux Kernel...

**Jerod Santo:** When did you make the bet, though? When did you decide on Rust?

**Adolfo Ochagavía:** Well, I didn't very explicitly make it. I got into Rust because I was curious. And I confess, I was conscious that this might pay off, and it might have motivated me a bit more than just fooling around. But the way I bet with these kinds of things is I make sure I bet on something that is worth to me now. So even if I lose the bet, I don't regret it. So even if it doesn't pay off in the long term, at least pays off in the short term; like hey, I learned a bunch of very interesting things. I got to participate in an amazing open source project, with a great community.

When I started working, thanks to my involvement in the Rust community, I wasn't the random junior guy who just got out of university, because I knew how to properly use Git, how to properly make pull requests, test my stuff... Like, lots of things that are kind of basic once you get the hang of the craft, but which could take you maybe a couple of months or longer if you haven't had this exposure. I mean, even your expectations; if someone writes a bunch of untested code, and you're right out of university, you say "Oh, this looks like most of my code until this date." But after participating in the Rust community, and seeing a co-worker write no testing code, it would be like an instant red flag; like, "Wait a second, how do you know this works at all?" I mean, without getting into dogmatic, test-driven development, that kind of stuff, like full test coverage, or whatever... But basically, kind of developing, I don't know, some kind of second nature or taste for how a software project should be managed... That was -- how did we end up here, actually? What are we talking about now?

**Jerod Santo:** Well, we were talking about making bets on the wrong technology.

**Adolfo Ochagavía:** Oh, yeah. Right. Exactly. So even if Rust hadn't panned out, I would have ended up a better programmer because of this bit.

**Jerod Santo:** I think that's fair. And looking back at that one particular bet that I made that didn't pay off, I don't really regret it anyways, because a) I had fun. b) I expanded myself as a programmer, because I learned a lot about the JavaScript runtime inside the browser... Things I didn't know when I came to Cappuccino. I learned a lot of Objective-C-isms, which for better or worse, I like some of that stuff to this day, and I still carry with me had that experience... And I was also ready, willing and able to let go of it once I saw like "This isn't actually going to go anywhere from here probably." And that's the other thing, is like you can't be dug in when something starts to fail.

**Adolfo Ochagavía:** \[01:00:14.19\] Yeah, I think that's like a key idea. And that's also one of the reasons - even though I'm doing more and more systems programming stuff, I still keep an eye on other technologies which are coming and going...

**Jerod Santo:** Yeah. What's piquing your interest right now? Like, if you were --

**Adolfo Ochagavía:** So outside of the Rust bubble, I'm very interested in the way .NET and C\# is developing. They are investing a lot in making it a proper language, that you can write high-performance code in. In fact, related to the recent Redis license change, the alternative that Microsoft has made, very timely - which is incredibly suspicious...

**Jerod Santo:** Yeah, I know. It's actually -- I just talked about that the other day. It was like two days prior to the announcement of the Redis relicense they announced this project. I think it was called Garnett...

**Adolfo Ochagavía:** Yeah. It sounds like -- I mean, they're probably offering hosted Redis on Azure, right? So they must have received some communication from Redis...

**Jerod Santo:** I'm sure they saw it coming, yeah.

**Adolfo Ochagavía:** ...saying like "Hey, you should start paying in a few months", and "Oh, alright... Goodbye."

**Jerod Santo:** Redis client compatible...? Yeah.

**Adolfo Ochagavía:** Yeah. So anyway, that thing is written in C\#.

**Jerod Santo:** Yes, I saw that.

**Adolfo Ochagavía:** If you knew C\# from 15 years ago, you would think this is madness. But C\# now is not C\# from 15 years ago.

**Jerod Santo:** How so?

**Adolfo Ochagavía:** It's evolved a lot, and the .NET framework is now cross-platform, it has lots of very interesting features... So to me, it feels very natural that this project is written in C\#. And in fact, when I write non-systems­-programming code... I mean, when a client says to me "Just use whatever language you want", I will very often pick C\#. So I'm following it a little bit, less actively than Rust... And then I guess just keeping an eye on Hacker News, and seeing which things trigger my interest.

There's not lots of time to invest into that... I mean, it can also become -- I guess most people have experienced that it can get out of hand. Because - well, we're curious, right? That's why we're into programming. At least myself. So yeah, you need to take a bit of care.

But right now, I mean, I'm also trying to diversify my knowledge based on the work I'm doing. And I think that's also a good proxy. If someone is paying you to learn something - well, I guess it's worth learning. So I've been getting into - well, I don't think this will be reusable knowledge, but I was paid to do it... So I wrote a dependency solver for a package manager.

**Jerod Santo:** Okay. Is this Python?

**Adolfo Ochagavía:** Yes. For the Conda ecosystem. It's being used for a new -- like a replacement for Conda. And I don't think I'll ever get to do that again, unless there's some random person who randomly needs a dependency solver... But on the other hand, it wasn't a bet. I was paid to do it.

**Jerod Santo:** Right. You weren't investing.

**Adolfo Ochagavía:** So I was, in fact, paid to learn this. However, sometimes I get paid to learn things that I know will be reusable. For instance, I investigated how to produce container images very efficiently, directly from Python packages, without actually going through Docker. Just downloading the packages directly, messaging the data, and generating a container image in parallel, every layer in its own process... Just amazingly fast. And a year later, a company that read that blog post said "Hey, we actually need exactly this. Come help us." That's the project I'm doing right now.

\[01:04:04.26\] So I had to figure out the container specification, a bunch of protocols, and low-level stuff, which does feel very reusable. And we will see also -- I mean, we still need to see what happens with AI, but I would expect that fundamental work, like some real human person needs to understand what's going on at the base of things. So that also, from another perspective, sounds like a good idea to bet on low-level things. Yeah, I'm kind of betting on them right now, but I'm being paid to do it, so it feels less like a bit.

**Jerod Santo:** Well, that's a good reason to take a gig. I used to have like a decision rubric for a project, where I would have three things... I'm trying to remember back, because this was years ago. I would look at three different aspects of a project; in terms of is it interesting to me, or is it worth taking. And the first one was money, because I'm trying to make a living. And so if the money is there, that's a good reason to take a project. It's not the only reason, but it's a good one. The second one was intellectually interesting. So it's either something that I'm interested in the problem space, or the technology, or like you're talking about, it's a technology I already wanted to learn anyways, and now I'm able to learn it while being paid, versus learning it while not being paid. And then the other one was reputation or portfolio, right? I mean, that's real. Like, you have to build your reputation; you have to have examples of things that you've built... And so like, is this good for that?

**Adolfo Ochagavía:** Well, this sounds a lot like my own heuristic.

**Jerod Santo:** Yeah. Those are the three things I would look at. And then you have other things too, like, you know, is it something that I have a moral problem? I remember one time I went down the road was this gal about helping her build a website... I didn't go very far down, but it took me too long to realize it was a porn website, and then I was just like "I'm sorry, I'm not interested in -- I just don't want to work on this kind of thing." That was a stopper for me. So there's other things that are like "No, not going to do that." But for the most part, those three things... And if I can get two of the three on any given project, I'm super happy. Like, if it pays good money, and I'm learning something new - super happy. If it's learning something new and getting a nice portfolio piece, but not paying very well - pretty happy. If I can hit all three, that's a home run.

**Adolfo Ochagavía:** Very happy.

**Jerod Santo:** Yes, very happy.

**Adolfo Ochagavía:** For me it's the same. I mean, I don't put the moral stuff in the list, because it's not up to negotiation.

**Jerod Santo:** Right. But it's worth asking upfront sometimes... \[laughs\] Because so many people have moral obligations -- or not obligations; moral objections to certain types of projects, the people who have those kinds of projects and are looking for that help, they'll kind of hide it, and they'll save it till later. At least that was my experience. Because I was like "You should have led with that, don't you think? That should be right on the front page... Because now you're not wasting your time and my time." And it was almost like she was trying to sneak it in the side door, and hoping that it wouldn't bother me. Well, if it wasn't gonna bother me, it wouldn't bother me at the beginning either. So it was just a waste of time... But yeah.

Okay, so specialization, generalization, technologies, decision-making... Have you ever thought about just going back and working for somebody full-time? Just get a job again?

**Adolfo Ochagavía:** \[laughs\] I sometimes think about it when I am afraid I'm not going to find enough projects on my own... But it always feels like - well, I would be doing it out of fear; the fear that I won't be able to find projects. And I actually think that's not a good enough reason for me right now.

Yesterday I published another article, like a sequel of the one on the undercover generalist.

**Jerod Santo:** Oh, really? I should have read that.

**Adolfo Ochagavía:** \[01:07:56.27\] It's called "From full-stack development to systems programming." And at the end of the article, I mentioned that I actually dread at this moment, going back to an office job. This very call we're having now, it started for me during working hours. And I don't care, because no one is expecting me to be at an office. So there's a level of independence that I really enjoy, but also there are many different aspects to it. Even the reputation aspect. I feel like when you are working independently, you can -- it's much clearer which impact you're making in the projects you are involved in.

So that testimonial from Josh Aas. I'm not sure you would give that to a team. But you can give it to one person you have worked with. And you know, "This guy made this, and it's great. You should hire him." So even from like my craftsmanship sense of like wanting to be recognized for my work, it feels like at most companies that just wouldn't be -- it wouldn't happen. So I kind of like -- I'm still searching. I mean, this is a long journey, but right now the mental model I have career-wise is I want to try to become just a very good craftsman, and that people know to find me when they need a craftsman. Because if they don't need a craftsman - well, I guess there's plenty of other people out there who can help you, too. Like, if you need to build something simple, or... Yeah.

**Jerod Santo:** Well, the robots will build those for people soon enough, so the craftsmen will be the only ones left.

**Adolfo Ochagavía:** Well, I hope at least that remains... Otherwise I'll become a mere interface to the GPT.

**Jerod Santo:** Exactly.

**Adolfo Ochagavía:** I mean, someone needs to translate business needs to GPT, right?

**Jerod Santo:** That reminds me, I think now might be the best time in history -- if you want to stake your claim as a... I don't know how to name this yet, so somebody needs to put a name on it... But the people who come in after the robot's programmy things, and they fix everything... You know, similar to - there was Rails rescue projects... I did a bunch of rescue projects, where it's like, "We have a hot mess. It's still serving value to our business, but nobody can touch it, because the people that built it moved on" or whatever. "Please come in and save this project so that we can continue to do things." And there was like Rails rescue -- there was like teams, that all they did was --

**Adolfo Ochagavía:** The AI rescue team.

**Jerod Santo:** Yeah, exactly. And there were similar things for like - you know, you go to the wrong outsourcing company, you end up with a hot mess... You're going to end up with some AI hot messes, and I just feel like if you want to get at the top of the search results right now - or not right now; in the future - to be the rescuer of the AI, you've got to get the domain, you've gotta get the name on it... Right? This is where you stake your claim...

**Adolfo Ochagavía:** AIrescue.com.

**Jerod Santo:** AI Rescue. Somebody can have that. That's a free idea for anybody who wants to --

**Adolfo Ochagavía:** It's obviously already registered...

**Jerod Santo:** \[laughs\] That's true. There's nothing new under the sun. Someone's all over that. Alright, Adolfo, this has been lots of fun. The website, ochagavia.nl - there you'll find his writing, you can subscribe there, you can hire him... Anywhere else to send folks to connect with you online?

**Adolfo Ochagavía:** No, I just use my website and email on GitHub. Well, you can find me on LinkedIn too, but that's like a horrible place to find people.

**Jerod Santo:** \[laughs\] I used to agree. I'm starting to disagree, and here's why. Everybody's there. And you used to be able to say that about Twitter... Not true.

**Adolfo Ochagavía:** \[laughs\]

**Jerod Santo:** You can't say it about Mastodon. You can't say it about Threads. You can't say it about BlueSky. You can't say it about X. But with LinkedIn - I mean, what a world. What a world we live in, to where it's like, you want to find people? Everybody's on LinkedIn, pretty much to a one. So that's a weird... But other than that, I would 100% agree.

**Adolfo Ochagavía:** Well, that's why I haven't left.

**Jerod Santo:** Yeah, you can't leave now. That's where everybody is. Oh, Microsoft... Alright. Well, thanks for hanging out. A quick mention, for those who want some more of this, is that Adolfo and I actually had about a 45-minute pre-call recorded, because as an authentic, sincere person that he is, he wasn't sure he was qualified for podcasting, I guess... How would you frame it, Adolfo? You weren't sure that you can handle a conversation with me, which was -- you just wasn't sure.

**Adolfo Ochagavía:** Well, I haven't ever been on a podcast before, so...

**Jerod Santo:** Yeah. So we talked about -- it was a lot about Rust, it was a lot about your history... I can't remember what all we talked about. It was about a month ago now. But we're going to put that in after this for our Changelog Plus Plus members, because it really is a bonus... And so if you want some more, to learn more about Adolfo, and hear from me some more as well, stick around, if you're on Changelog Plus Plus. If you're not - well, what's wrong with you? It's better. changelog.com/++, support our work directly, and then you'll also be able to stick around and get another 40 minutes of us two gabbing.

Alright, that's enough of the sales pitch... That's all. Talk to you all on the next one. Bye, friends. Bye, Adolfo.

**Adolfo Ochagavía:** Bye.
