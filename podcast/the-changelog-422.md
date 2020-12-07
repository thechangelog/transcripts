**Adam Stacoviak:** Gergely, happy to have you here. It's been (I guess) an interesting journey, because in the pre-call to this show you'd mentioned the recent Spotify show we did on Backstage, and we don't meet people face to face; you see their avatars going around... I saw the conversation and pinned that back to you, and I was like "I saw this book you were writing..." At least a couple books, and some of your journey, and I was like "I've gotta get him on the show." So here you are. Nice to have you here.

**Gergely Orosz:** Yeah, it's great to be here. That story was really cool, with Backstage. I listen to The Changelog on and off, and probably maybe two weeks ago, so a few days before you reached out, I was listening to this show on Spotify, Backstage. And I just left my job at Uber, and one of my not-so-secret goals is to start a startup potentially in a couple of months or so. I'm in the idea gathering space, just being a sponge, as I'm writing a book pretty much full time... And I listened to this show and a lot of things just clicked, because the ideas I'm looking at for startups are on platform engineering. I saw how much Uber invested in this, I know a lot of companies are investing big-time, and I'm pretty certain that in five years' time there's gonna be a lot more tools that you can buy that are great tools, and a lot of companies will use these tools, as opposed to trying to hire these platform engineers.

So long story short, I listened to this podcast and I was like "Oh wow, Backstage seems really interesting. I wish we had this at Uber", which led to other ideas of like "Hm. This could be an interesting idea." I connected with the founder, who's actually started a company building on top of Backstage, and this is in a stealth round right now... But the same founder told me that he got multiple listeners reach out to him because they'd found him--

**Adam Stacoviak:** From that show.

**Gergely Orosz:** ...from that show.

**Adam Stacoviak:** Yeah... Gosh. Jerod and I even -- I mean, I felt so fortunate to have that conversation with \[unintelligible 00:03:57.00\] and... You know, I'm just sitting there, like, a-ha moment after a-ha moment, listening to this show... Because as they explain what Backstage not only does for their infrastructure - and by the way, this show is not particularly about that, but we're covering that at least a little bit... So listeners, that episode was \#415, go back and listen to it... But several a-ha moments. And I'm just kind of seeing how it was a social network, and how it enabled things... It was just like this very easy lever thing inside of an organization.

\[00:04:29.00\] And I guess one thing we uncovered in that show was really at scale. Because small orgs may not benefit so much from Backstage. It's large orgs like Uber or Shopify or Spotify, or inside of Google even - that's really where you see these kinds of things thrive... Which, to some degree, points back to some of your history. You've been an engineering manager, you've written a couple of books, you've done some pretty cool stuff. Maybe we can begin there. Maybe we can start with what you've been doing over the last several years, what you have been working on.

**Gergely Orosz:** Yeah, let's start there. I'll go back to where I started, which was a long time ago... I'm originally actually from Hungary. I lived a couple of years in the U.S. I've been all over the place, but I graduated in Hungary at university, computer science degree... And funny enough, my first few years of college, I hated software development in terms of coding.

My first language was the language C, and I would just be bad at it. I thought "I'm gonna quit", but I persisted because I had to. It would have been embarrassing to drop out. That actually reminds me of just how difficult it is these days to get started with programming. My wife's a self-taught developer and it's hard.

Anyway, from there on I worked at smaller companies initially, agencies, consultancies... Then I moved to U.K, in London specifically, and I worked a year at an investment bank, JP Morgan, which is a great name... In hindsight it was a great tech shop, but it was a really interesting experience, because I worked with the trading floor, and there's all sort of stories there that are kind of true. It's a high-stress environment, but it was a good learning experience.

And then from there on I was lucky enough to get into Skype. I like to say Skype, but it was Microsoft really. Microsoft just bought Skype, but they had this policy of leaving their acquisitions alone for 18 months, so it felt like Skype. We were just building stuff... I was on the founding team to build Skype for Xbox 1, which was a year and a half before the Xbox 1 was out \[unintelligible 00:06:18.11\] some cool projects there... And this was the beginning of working at really high-growth phase companies. When I joined Skype, there were probably like 70 or 100 engineers in London, and two years later there were 350, and we just kept growing and growing.

From there on, I went to another startup, Skyscanner, where you can find the cheapest flights... Not that during Covid it matters as much... But they're market leaders in Europe and Asia, and it's kind of like the equivalent of Kayak in the U.S. And the same thing there - I joined the London office and there were three of us. When I left about a year and a half later it was 60 of us.

Then I went to Uber in Amsterdam, and at the time Amsterdam was quite small, about 25 engineers. And again, about four years later we maxed out at about 150 people before there were some layoffs. Now it's a bit smaller.

Throughout all these places I just had a lot of professional growth. I changed stacks... Back in the day I started with a thick-client stack - C\#, XAML, WPF. I then moved over to the web, I then did backend, and I did native mobile as well. So all over the place. And at Uber I moved from being a senior engineer to becoming an engineering manager, and towards the end I was on track to managing managers. I had a manager under me that had a team of 30. That's where I am... And then I left Uber to write a book and potentially start a startup later.

**Adam Stacoviak:** Not often do you hear somebody leaving a position like that or a company like that to write a book... But then the caveat there is to start a startup, too. So where are you at in that phase? I know you've written a couple of books. We'll talk about one that's coming out next year; we could talk about where you are at in both of those phases in terms of promotion of the current one out, or the written material for the future one... And then maybe startup ideas. I know you'd mentioned at the beginning of this show Backstage and some of these side conversations as a result of that conversation we had around it... But where are you at, I guess, on the latter front, versus the former front? So not on your books, but your startup idea - where are you at there?

**Gergely Orosz:** \[00:08:16.22\] The way I think about startups is... When I entered the industry -- I have a brother, and we have two very different paths. He's a younger brother. He always had startups. Out of uni, he already had a startup. We collaborated very briefly, but his startup took off. This startup was an agency initially. It got acquired later by Skyscanner, and there was a brief time where we worked at the same company, which was a really interesting conversation. His company just got acquired by Skyscanner for a -- it was a great exit for him and his co-founders... And the very next day I get a phone call from a recruiter who I knew, telling me "Oh, we just acquired this company at Skyscanner, and we wanna hire you to head up mobile development there." I'm like, "No... What?! The CEO is my younger brother, and I'm not gonna report to that guy."

**Adam Stacoviak:** \[laughs\]

**Gergely Orosz:** And then they called me back and said "Hold on... We actually acquired a different company, and we want you there." In my contract I never had that, but I had it written there that I will not report directly or indirectly to my brother, who was now at a higher level; he was executive, and I was a principal engineer, so his level was higher...

But the point is he always did startups, and I saw firsthand how stressful and difficult it is. He had a great exit, but there was 3-4 years of extreme stress, long nights, and he told me that sometimes -- it was a relief when he got acquired, because he no longer had to worry about paying wages, and taking care of the admin, and he could actually just focus on building.

So for a long time, I said "I'm never gonna do a startup." But working at Uber gave me the confidence... And I talked with a couple other people who worked at Uber for a couple of years; when I joined, it seemed pretty small, and I just saw the inside of how things were built. I saw some ideas that turned into billion-dollar businesses, and we were building it... And it wasn't as much rocket science as I thought it would be. It was just good execution, but it was nothing special.

So as I reflected on where I wanna go, there was an option to keep growing professionally, becoming a manager, one day maybe a director, and that path probably would have been feasible... But I realized that I really enjoyed doing stuff small. I felt that I kind of saw how it was done, so I figured it's time to take a risk. And it was nice timing, because I really wanted to get this book out of the way, so it gave me an excuse to have something to do for the next few months, as opposed to either living and just getting ideas, or not leaving Uber and on the side doing ideas, and then raising some sort of fund. I have some people who do that.

It's also very unusual. Very few people do that... And I'm also kind of thinking... I'm at the point where I realize -- it took many years to realize that I don't need to follow what others do.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** I just figured out this is what feels right for me. I'm taking a bet on myself, and a bit of the environment around me, and let's see what happens. So far, I'm really happy. I'm having really interesting conversations with founders or other people; I get to come on podcasts like this to just talk... And it's been great. During Covid I'm connecting with people on the other side of the world, and some of these connections will be just really useful for years to come.

**Adam Stacoviak:** Yeah. So too often do we just follow the default path... Whether it's presupposed, or impressed upon us, or... I don't know, one of your heroes is going down a certain path, and you think "That's my path then, because I'm a fan of them. Whatever they're doing, I'm gonna do that too, because that makes sense." And it takes courage to forge your own path.

You'd mentioned in particular inside of Uber you saw some things happening... Can you be specific about, I suppose, the ease at which you were building certain things, or innovating certain things, and it made you feel that "I could do this on my own. I could do that." What were some of those things for you?

**Gergely Orosz:** \[00:12:01.11\] I'll give an example. I'm not gonna narrow it down exactly... Let me actually talk about a story which is not a secret, and I think it's a good one. It was a long time ago, and it's really typical of how you feel. So before I joined Uber, I was thinking that if you do a startup, and "Oh my God, what happens if it takes off?" and you're not ready - that's probably the worst feeling. You're not ready to scale, you don't know what to do next; you're probably doomed. And I would have been super-stressed; I would have been really careful to not get into that position.

When I was at Uber, we had this product called Cash. TK, the CEO of Uber, when he founded Uber, he had two baselines. One, "We're never gonna use cash." Two, "We're never gonna tip." Because he hated those two things about cabs in San Francisco.

Later, one of the teams in India said "We really need to do cash, because in India people don't have credit cards." And TK said "No, we're not doing that." But in Uber there was this way of like "Let data win." So this team in India reached out to the team in Amsterdam, where I was, and they said "Can you guys borrow us an engineer, or half an engineer to build this thing, Cash?" And we somehow did it. It wasn't me, it was some people I was working with... And this product started to take off, and it started to take off like crazy. Hyper-growth.

At some point there was about hundreds of millions of dollars going through this product and there still was one engineer and one data scientist and half a product manager... And they were just holding the whole thing together with duct tape. This was when I joined, and I couldn't believe this massive product, generating so much revenue - it was spreading in other countries, and they still didn't get more funding for it, for different reasons.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** But they still held it together, and later as the product got bigger eventually there was a team there; they managed to do it. But the people held it together. So what I realized is if you have growth, it's a great problem to have. The people who worked on this product were super-motivated. They were fixing problems. They didn't care what their title was. They were just doing it, and they were having a blast. And these people who worked there - they became so much more senior in such a short amount of time in terms of growth ownership... And that's when I realized "Huh... You know what - if you're on a rocket ship, it doesn't matter, you're gonna sort it out." That's the feeling I had in my early days of Uber. It was a rocket ship, it was going really fast, and we could have crashed and burned so many different ways, but we sorted it out. We had some long nights here and there, it wasn't that terrible; we kept hiring, and \[unintelligible 00:14:23.09\]

So before Uber I thought you need to have a perfect system of friends, or something. At Uber, I realized when you're growing it's a great problem, and you can solve things by throwing money at it in terms of hiring people, who are coming in to fix certain things... Or just buying more infrastructure. At some point we were bleeding, we were using so much infra... But it didn't matter, because we were already growing.

And on the other side, it doesn't matter if you build the perfect system if your business model doesn't work. You're gonna have to shut down later. And I also saw that at Uber. There were some parts of the business which weren't running that great, and they got shut down. A case study which is publicly-known - Jump. They were a great team, going really fast, and then I guess the business for this or that didn't work out, so they were shut down.

Before that, I \[unintelligible 00:15:09.16\] Not all of it, but some of it was pretty kind of hacked together... And some people in my team or around me were making a bit of fun of them, like "Oh, they're not writing tests..." I kind of looked at it and I said "Hold on... Why are we giving them a hard time? They don't know if they're gonna survive. They don't know if there was gonna be a team, and there was no team, actually, in six months. So they actually did the right thing by moving fast.

So I just had a lot of these first-hand experiences, and I think it's different when someone sees it... And I now look at the Hacker News crowd or the forum crowd who give you couch architecture lessons of like "Oh, why is Uber having 5,000 microservices?" or "Why don't they just rewrite it?" It's very different on the ground, and it doesn't really matter what anyone thinks; as long as you're solving your problems, you're fine. If you're going fast, you're going to solve your problems, I guarantee that. And I've seen this, so I guess I don't have that fear from this.

**Adam Stacoviak:** \[00:16:03.28\] Yeah.

**Gergely Orosz:** The only fear I have now is "What if it doesn't take off?" and that's a different problem to have.

**Adam Stacoviak:** Well, I think the fear you're talking about may have come from intimidation.

**Gergely Orosz:** Yeah...

**Adam Stacoviak:** Intimidation in terms of like "Man, these are difficult things to do. I'm intimidated by what might be possible, what might happen." And these are sort of these untruths that we make truth in our own mind. And once we sort of see... We sort of like do the Oz effect, and we peek behind that curtain and that vail, and it's just one person, or it's just this little person, this little guy in terms of the Oz metaphor, versus this big, projected thing.

**Gergely Orosz:** That's true.

**Adam Stacoviak:** And when we minimize those problems, we can sort of get over them easier.

**Gergely Orosz:** Also, when I joined Uber - this was 2016, when they had amazing press. This was when they raised 10 or 13 billion, at 70-something billion valuation. They were the fastest-growing company in all time; everything was perfect, and when I joined, I was also intimidated. I was like "Oh, wow. I'm joining this amazing place which is probably--" In my head it was like Google 20 years ago, or 15 years ago, or Facebook 10 years ago... And when you go in there, you realize it's just people. And by the way, it's the same people in the industry. Some people - they go back and forth between companies, but it's all just people. And it's good people, it's decent people, maybe you have a few people who are not as amazing... But it's just people. It took me a while to realize it.

**Adam Stacoviak:** So what's your next step then, since your fear is at least reduced. I'm sure there's still some fear there, because you're not completely fearless... But you've got reduced fear. What's your next step? Where are you at right now in terms of -- not so much what's your idea, but are you in the process of beginning to code, beginning to write, beginning to execute any sort of ideas?

**Gergely Orosz:** Normally, that's what I thought that I would have done if I wanted to start a company - start to write an MVP. I'm thinking a bit differently, because what I've seen is -- and this is also coming from Uber. Uber wasn't just an everyday company. I kind of thought of it as a massive VC fund with a dozen or so startups. And my organization, the \[unintelligible 00:18:00.02\] was also kind of a startup, because we went to pitch the CFO and we said "Hey, we'd like to ask for 100 or 200 million dollars for the next 2-3 years, to build these new teams. You're gonna have a return of like 500 million, or a billion in this time", and we were doing the pitch decks... And it was like pitching a series D or a series F to your VC... And it was our VC. All the other lines of businesses were doing it; Jump was doing, Freight, Uber Eats, Uber Works, and so on; and there's a couple that people don't know about, because they're not public. So that was a really interesting experience.

So my step is evaluating ideas that I'm excited about, and the ones that would make business sense... Because I think that to start a startup, you need to first have something that you're really darn passionate about, that you're happy to do for 3-5 years or more. You can't do it otherwise. And you need to do something that's gonna make business sense.

Now, in my view, I don't know too much about what makes business sense, but I do know one thing... To be successful, you need to build something today that will be higher demand in 3-5 years than it is today... Because it'll take you about three years to get something pretty good out there.

A good example - if you look back at what engineers did at Google ten years ago... They had A/B testing inside Google; it was not in industry. They left Google and said "We should build this." That's how Optimizely and Leanpub were built, by Google engineers.

So one of the advantages I see at Uber, and in the industry as a whole - and this is like an open secret, or some ideas to listeners - is there's a huge shift; all these companies, all tech companies are investing huge in platform teams. I saw it at Uber, Stripe, Airbnb... They have a good 10%-20% of their engineers doing platform work. This means infrastructure, or building stuff -- they're filling gaps for the tools that don't exist today, because the technologies move so fast... From containers, to mobile architecture, to analytics, all that stuff. And I see that in 3-5 years there's gonna be tools that you can buy, and a lot of companies will want to buy; Uber would buy, if there was. And those tools need to be built.

\[00:20:07.02\] So what I'm doing is I'm actually looking at the market, and I'm doing more talking with both founders, people working at companies to see what these pain points are and validate that the stuff I saw at Uber is not just a one-off; I don't wanna build something that can only be useful for Uber.

So that's where I'm at... It's the idea gathering phase, and just validating some stuff in the industry, and talking with people who are also thinking about similar platform stuff... And my plan is that about 3-4 months I'll start into narrowing down the ideas, and then potentially take it from there; maybe building a prototype, maybe raising funding.

**Break:** \[00:20:46.08\]

**Adam Stacoviak:** So four years you were at Uber, if I can understand your story correctly; correct me if I'm wrong, but four years, give or take a month or two you were there, enjoying it, leveling up in many ways, as you mentioned... And then you decide to step away, so exit that team, do something different... From what I understand, one of the things you're gonna do is you've got one book written, but you've got another one coming up in 2021. That one is titled "Growing as a developer."

It's a guide for growing as a software engineer, and you mentioned coming up from the ranks from college or university with your computer science degree, kind of getting into C and some different stuff... You shared some of that part of your story. But then moving into an engineer, and into an individual contributor, and then into management... But why would you step away from Uber? It seemed like such a cool gig.

So I guess your intimidation turned fearless in there... You seem like you were on the winning path; how is that not the winning path? Why is this new route you're going the route for you?

**Gergely Orosz:** I guess when I joined Uber I told myself, "Let's have a check-in in four years. If everything goes well..." Uber is the first company actually where -- when you join companies like Uber, you often get shares, or equity. This is not anything new for people in Silicon Valley, but for example in Europe this is quite rare.

I had some equity in my previous companies, which were worth in the end mostly zero... So I told myself "Let's see what happens in four years, and then see where I wanna go from there." And I was really happy at Uber. Professionally, I grew tons. Financially, it was also rewarding. Uber went to IPO, and people will argue, but I think it was a successful IPO because it happened, unlike some companies... For example Airbnb - it still hasn't happened, and Uber and Airbnb were similar... Which just meant liquidity for employees who had some shares there.

And what I told myself before I joined Uber as well - if I have the option at some point, if I have the safety net, maybe I'll try something else. And I looked back and I said "Well, hold on. I do have a safety net now. I can take a risk if I want to."

And the other option was to stay at Uber and keep working with the team, keep leveling up to the next levels. As I reflected on what I really like doing, the most fun I had at Uber and previous places was always working with a small team, and getting something done against the odds.

\[00:23:59.06\] When I joined Uber - this memory is very vivid - we were a small team and we had this giant project; we were writing the Uber app and doing a lot of our part in it, which was just almost a death march. But it really bonded the team. We somehow got it done.

I'm really fond of the first maybe few years at Uber, where I had a small team. I was not as experienced as a manager; the engineers around me were not as experienced as engineers working in this environment... And we had so much fun, and we got a lot of things done.

As I moved on the path of managing managers, I kind of missed that. I always had the most fun working with smaller teams like this... And I wasn't looking as much forward to going to the pint where I would manage mangers; I was missing this kind of fire in the belly, of doing something that is high-growth and is going to expand. So that's what made me make this decision.

Whenever I make big life decisions, I usually have this test of "Would I really regret it if I didn't do this?" This is when I changed from JP Morgan -- I was really happy at JP Morgan, and back when I was there in London, working in finance, I had a really supportive boss, I had a good salary... And then Microsoft reached out and said "Do you wanna build Skype for Xbox 1?" I first said "Nah, I'm really happy... You know, supportive boss, I'm gonna be promoted..." But then, as I went to sleep and I tossed and turned in bed, I thought "Huh... I could be building Skype for Xbox 1", and I had the feeling I would really regret it if I didn't do that.

And it was the same here - I felt I would really regret it if I didn't give this a go... For two reasons. Coronavirus is oddly one reason. This is a crisis. A lot of people are losing jobs, including in software. It's a hard time for everyone... But I tend to look at things a bit differently.

Some of these situations are some of the best times to start a business, because there's a lot of venture capital out there. There's been really high returns on all the companies. You see the IPOs that are happening right now...

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** ...a lot of that money will go back in the ecosystem. It's one of the best times to hire people; if you're a business and you wanna hire people, it's a lot easier to hire now than it was a year ago, or it will be a year later. So that also helped my decision.

In the end, I think it's a mix of I sensed an opportunity for a big adventure, and I wanted to do it. And so far, I'm really happy I did it, because... Again, it's been a very different experience, but I'm doing something different than what I've been doing for 12-13 years, which is being full-time employed, door-to-door. I left my previous job like on Friday, and started the next one on Monday... It's a little bit less predictable, but...

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** ...I think it feels a bit like my sabbatical, or my taking a risk. I would recommend -- if you have the risk appetite for it, at some point it can be interesting to try it out. And also, by the way, it's super-safe. I'm not taking a huge risk. I can go back into the industry or the likes of the companies that I've been to. I'm a big believer -- the industry is very small. On my way out, I did everything I could to have a really good exist, kind of going the extra mile to make sure people are good; I'm not leaving anything unattended. I hope I didn't leave anything broken... Because those relationships will run for a long time.

So whenever you leave a company, like -- I've seen people, especially when they were junior, just do brash things... And it hurts them for so many years after.

**Adam Stacoviak:** Reputation is everything. Even beyond reputation, which is self-serving, being a good human being pays dividends. Be kind. And how do you exit and be kind? Well, you don't leave -- I mean, you can't fix all your bugs, right? But you can at least mend or unify or be clear about any relationship. Like, "I'm leaving for these reasons..." Or just when you're in the process of leaving, you're like "Hey, I'm not checked out. I'm still involved. I wanna make sure that this team, or this manager, or this boss, this group, this cohort etc. is in a good place." And if there's any questions I have that are sort of like encapsulated in me - because do get a lot of domain knowledge that sort of like gets stuck inside of us...

\[00:27:59.02\] We've had a couple of shows recently where it's like, that process of sharing that knowledge is storytelling... To let them know that "Hey, if you have some questions, I'm here. I'm all ears. Let me know, I'd be glad to walk you through the details or whatever it might be." I'm assuming you did that, based upon what you've just said... Is that a rough gauge of how you mapped out your exit? Like "Hey, I went to different people and made myself available, made it known what my intentions were..."

**Gergely Orosz:** Well, yeah, so I did a bit more than that, because me leaving Uber -- it was a bit easier, because a year ago (well, in terms of process) I took a parental leave. I had my second child born, and Uber had this brand new policy which is four months off for dads. You can take four months, and you can take it in two portions; you can do one month plus three months, or two plus two... And I hesitated for a while, but I decided to take the whole four months in one go. And before that, my team had a lot of stuff going on, so I actually made a structured plan of how to hand over, who's gonna take over what part of my job... So that helped.

And by the way, what I realized there - I thought that by me leaving for four months, the team would be in big trouble; they would not be able to deliver this really important project, which I was kind of a key part of... And what actually happened is I came back, and people stepped up... Two or three people went an absolute extra mile; at the end of the year they got really high recognition for it, because everyone saw what they did... Their professional growth accelerated. Basically, by me not being there, I created opportunities for others... And companies like Uber, and I think most companies where you have a good culture, people are eager to step up. So I'm also pretty sure that me leaving Uber, it created opportunities for other people to step in here, to grow faster...

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** So this experience helped me. And to your question - I actually prepared a lot for my leaving. I had a notice period which I extended talking with my manager; we had a plan. I talked with everyone. I tried to do my best to do handovers. As a manager, it's really important that you have that continuity with people, so I did that... And then hopefully -- so far I didn't hear anything exploding behind me. I hope that's how it actually happened.

**Adam Stacoviak:** \[laughs\] I think it's interesting the way you mentioned that too, with the -- I'm assuming it was fairly humbling to feel like if you stepped away, your team may (for a lack of better terms) crash and burn... Or have a difficult time because you left a vacuum. What happens often is that -- and I've experienced this in my life, with leadership; when given an opportunity to stand up and lead, I was able to rise to that occasion... But you can't do that unless there's a vacuum, unless there's an opportunity or a space or an enablement. And so too often do we just sort of like -- I don't know, I think we're cooler than we actually are, better than we are... And that our team won't succeed if we step away. And then we burn out, because we never give ourselves time \[unintelligible 00:30:50.26\] especially around either exiting, or in the other case you mentioned, the parental leave. Those are crucial times in your life. You get one family, for the most part; you have kids only a couple times in your life. Those are unique, special moments that are good for you as a human being to be the you you are for your team, and to not give yourself that time to take.

**Gergely Orosz:** Yeah. Just to be clear, on that parental leave I didn't look at -- like, I deleted all apps on my phone, I didn't look at emails or anything. I told people if there's something, they can text me... And I did zero work.

**Adam Stacoviak:** Good for you.

**Gergely Orosz:** So I consciously did a hard block-out. And again, I was really worried what would happen, because I had so much context, I knew so many people there, and a lot of things were going through me... And it was the best thing I could have done. Since then, I recommend it to every leader, and also to any engineer. Some people are like "You know what, maybe I'll only take two months, and then maybe I'll take the next two months." Usually, people don't take the second one...

And the same thing with holidays. If you're a leader or if you're a senior engineer, just take 2-3 weeks of holiday, and do not answer anything, and see what happens. I'm pretty sure you're gonna be surprised positively.

**Adam Stacoviak:** \[00:32:04.24\] You got two books; one that's in progress, as I understand, one that's out. The Tech Resume Inside Out is the one that's out. When did you write that book?

**Gergely Orosz:** I published it about a month ago, and I started writing it around May, after Coronavirus started. The story behind that book is -- I was writing my original book, which is about growing as a software engineer, going from this entry-level role, through senior, to tech lead, and all the way to staff levels at the likes of tech companies that I worked at, and what I saw... And the idea was I both went through this journey, and then I mentored a lot of people as a manager to go through this journey. And when the Coronavirus started, I paused writing this book, because there was a lot of stuff happening, and then the layoffs started happening - both at Uber and at my old company, Skyscanner.

I knew people who were actually being let go... And then I thought "Hm... Is there some way where I could help?" and one thing that I offered is just doing resume reviews for both people I knew, and I offered to do this on Twitter... And I got a lot of responses. I expected a few dozen and I got like 300 people, who - some were laid off, and some were just looking for a job because they knew something was coming... And then I figured, "Okay..." 300 was too much. And I did what I usually do, and I think a lot of people do, hopefully - you scale yourself. So I started to reply at first like 50 in detail, and I made notes, and I compressed those notes as the most common observations into a PDF, and I sent it out to the other 250 people, with kind of some note saying "Pay attention more to this or that." And then some people said that they really liked it and it got forwarded as well.

Then I was thinking "Hold on... I'm writing this book, which is gonna take a long time... Maybe I could do an MVP. Maybe I could just do a short book on writing a resume, which could be a dry-run on how to write a book." I'm self-publishing this book, and I was like "Okay, let me do a dry-run on this." And my plan was "Let's do a really minimal product, like 80 pages..." And I started writing it, but it's such a fluffy topic, resumes... In the sense that -- even my wife was telling me, "Surely, you're not serious about writing resumes. That's such a cheap --" like, who writes about resumes? Usually you've got the career coaches who are often not even in the industry giving us advice... And I was thinking "Well, if I'm writing something, I wanna write something good", and I saw a lot of resumes, ideas... But the people who see the most are recruiters. They literally see ten times as much as any hiring manager. Some of them see hundreds of them weekly.

So I just reached out to all the recruiters in my network, and I asked them "Can you tell me your input, your advice for specifically software engineers on what a good resume means in tech companies?" Long story short, it turned into a proper book, with about 200 pages... About half of the book is actually examples, because one thing I never saw in any guide is an example of "Here's a resume, or here's a refactored one, and why are we doing certain things."

About a quarter of the book is not about writing a resume, it's about giving you the background of what actually happens with your resume. Because most people -- when I wrote my first resumes, I just kind of followed the pattern. I didn't think too much, I just put all my achievements in. But most people don't think about -- your resume has a very clear goal, and that goal is to get to a recruiter's screen. That should be your goal. Once you're there, your resume doesn't really matter anymore.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** And because of this, the biggest mistake that people make - and this is in the book as well, but you can just use it - if you apply for ten different positions, you're doing cold applications, first of all, the best thing you can do is get a referral, if you can... But the second-best thing you can do is customize your resume. You should be sending ten different resumes. People send the same, and then they're surprised that they're not hearing back as much. And the people who tailor them will have -- you don't have to spend too much effort. So if you just do these two things, you're already going to hear back.

The feedback from the book has been pretty good. First of all, the book is free and it will remain free for anyone who's out of a job as a developer. I'm just doing some basic validation to avoid spam, but there's no strings attached. People get that. I really don't wanna make any profit off anyone who's in these shoes.

\[00:36:14.08\] The feedback has been that people saw just an increase in feedback across the board, from large tech companies... Now, some people still couldn't pass the interviews, but most people did. And most people were able to improve their resumes.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** So my takeaway from the book is I hope -- it would be nice if we did not need this book, but the reality is that if you're cold-applying, you need a resume... And again, the best thing you can do is get a referral. But in the absence of that, this book tries to just -- there's no fluff. It's just the stuff that actually matters. There's a lot of interesting and false information out there on the internet that's just mingled with good advice... So hopefully this is useful for some people.

It was also a good dry-run for me to see how long it takes to write a book, the editing process... It's in different formats; it's on Kindle, ePub, PDF... And I went through the whole publishing process. It's professionally edited, so...

**Adam Stacoviak:** Well, that's good, to do an MVP dry-run for your 2021 book, which is I think what you're really trying to do... But as you'd mentioned, "Let's start with the resumes, because that will at least get me started and give me some momentum in terms of how to do it."

And to your wife's credit, in terms of should you have written about resumes - and surely, you can't be writing about resumes - when you search on Google "How to write a tech resume", all the results are what you had suggested; it doesn't seem like it's from the trenches. You're somebody who has been down the path. So if you're gonna get advice from somebody on this very particular thing that you need to do to get in the door, and then to understand how to do it well, it makes sense to get advice, I suppose, from somebody who's been there and cares. You seem like somebody who cares; that's why you wrote the book in the first place. So I think it's wise to have written it.

**Gergely Orosz:** Yeah, and the thing I'm happy about is it's not just me. It's about 20 other tech recruiters and hiring managers. Some of them have added content to it, and a bunch of them have reviewed it. So that's the one that actually made me confident to release it. It is practical advice.

One of the recruiters - she's told me she interviewed 6,000 people in 20 years, because she's been in this industry for 20 years... And she reviewed tens and tens of thousands of resumes. For example, she went through and she critiqued the manuscript, and I had a lot of changes after that. And there's been a bunch of them.

I also tried to reach out to recruiters across the world, on all continents, to get that. For example, I wasn't sure if this advice would apply in places like Africa, so I reached out to some people who were working at tech companies on that continent. Again, there's some things -- a good example is photos. The biggest advice is do not use photos for the U.S. and Western Europe and most countries, including countries like Germany, where traditional companies expect it, but in tech you don't need it.

But in the Middle East, it's not as clear-cut. There's a recruiter who works there, and he was very cautious. It's in the book as well, he's saying use your judgment, but maybe you'll want to use it there.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** So I can safely say it is the most thorough book right now on this specific topic. If you'll ever need to write a resume, check it out, if you're out of a job. It is free, just get it. If you have people who know -- and by the way, this goes to the same... If people are students or don't yet have a job - also free.

**Adam Stacoviak:** Yeah. Well, let's break down, I suppose, the mechanics of the book then. You 'd mentioned it's written by people who run the tech hiring process, so this is a co-authored book, not so much just simply authored by you... If I understand correctly, it's authored by many contributing experts, people who are hiring managers, technical recruiters at various tech companies... As you mentioned, one of the women involved had been in the industry 20 years... Was it 9,000 resumes she's reviewed? I mean, that's a lot...

**Gergely Orosz:** \[00:40:03.07\] It was 6,000 interviews. That's interviews, so it must have been like 10x the resumes... So yeah, tens of thousands.

**Adam Stacoviak:** I bet. So what - 60,000 then... Okay. Let's just estimate 60,000 resumes, 6,000 reviews - this is a lot of experience basically, behind this book. So MVP - some people say you should launch an MVP and be embarrassed by it. This is not something I would be embarrassed by... You know what I mean? It seems like you've put a lot of effort into this.

**Gergely Orosz:** Well, because it's a topic that I think is pretty fluffy, I wasn't comfortable with launching something that is just halfway there. And also, one of the things -- I really was debating whether I should charge for the book or not... Because I'm a pretty prolific blogger, I write a lot of blog posts, and people really get a lot of value out of it... I wanted to dry-run this theory of -- my goal with this book was to get engaged readers.

I have some blog posts that are read by a hundred thousand people, but I never know if they're engaged or not. So my theory was "Well, it's a lot of research and a lot of effort has gone into this book. I'm trying to price it at a decent range." It's $20 in the U.S. and across the world I have purchasing power parity; for example, in India it will be 60% off. In a good part of the world, similarly... So based on your IP, it's a lot cheaper.

What I'd like to know is how many people are engaged... Because what I find myself is if I buy a book, which is usually decently priced, like $20, $30, $40, I actually end up reading it, because I spent the money. And I wanted to test the theory of like "Can I get engaged readers?" and the engaged readers are either people who buy it or people who need it. And the people who need it most, they can get it for free, and I assume that they're reading it.

So far, the theory is going pretty okay. I have a bit over 2,000 engaged readers, I should say. So either people who bought it, or are using it... And I'm getting a lot better-quality feedback as well. Some people are giving me specific feedback on what they've seen. And so far I have zero refunds, which I think is -- usually, from what I understand, eBooks usually have a full-refund policy; if you don't like it, you get your money back, no questions asked. No one's asked for that yet. Usually, there's like a half percent in the eBooks business for similar authors, from what I asked around.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** So hopefully, people are finding it useful, or it's just -- you know, there's no false advertising there. And again, it's just a learning experience for me. I share all the revenue I have and all the marketing I did on Indie Hackers... I'm fully transparent, because this for me is an experiment; and I'd love to inspire other people, have people learn from it... It would be nice if people created more long-term content. I see a lot of Twitter creation, a lot of videos, but I don't see too much long-term written content from people... So hopefully, maybe some people will be inspired to do this.

**Adam Stacoviak:** I'm glad you mentioned Indie Hackers too, because we're big fans of what Courtland has done. I think there's so much happening there, too... And the fact that you're sort of giving that as feedback... So this is, one, learning for you, but then synthesizing that learning for others to follow along. I'm not gonna ask you for any URLs right now, but we'll definitely put those in the show notes, so we'll click that after the show's up... But listeners, if you're following along, we're gonna drop some of those notes in the show notes, so check that out.

On the idea of pricing, if I understand you correctly - so it's free, as you say on the site, complimentary copy, given certain criteria. But you do have two tiers - the book only, and the complete package... Which I think is pretty cool, because you've added director's cut; essentially, commentary behind the scenes of specifics. Almost like that next layer, as you'd mentioned, in terms of interaction and whatnot, the slides behind it... And then actually, a discount which seems like to something called Standard Resume Pro, which is a resume builder... And many of those resume builders out there are kind of like -- I don't know... Let's just say icky.

**Gergely Orosz:** Sketchy, yeah.

**Adam Stacoviak:** Sketchy, icky... Yeah. And you've chosen this one. So help me understand -- and then you mentioned price parity across the world, which I think is super-awesome; thank you for doing that, too... Because we've had that conversation recently; we have a membership out there called Changelog++; as a listener of the show, you may have heard of that... We haven't yet gotten to that pricing parity, because we're using a platform to do it, but when we actually inherit that as our own, inside-of-Changelog.com infrastructure membership, we've written the code behind and we will have it then. But for now, we don't. We're using Supercast to launch that. Because like you - MVP, we're using it to learn, and what we have learned is that people want us to have a membership... So there you go.

\[00:44:29.13\] So to you - pricing. Let's break this down. Free for some, paid for some... How do you break this down? Have you made a ton of money from this? Can you share some of the insights into the Indie Hackers stuff you may have shared already?

**Gergely Orosz:** Yeah, absolutely. With pricing, again, I experimented. I've read about how you can maximize value by adding additional content, and my original thinking was "Well, let me do the book", and the book comes with resume templates, it comes with multiple formats... So an idea that I originally had is "Well, maybe I could just give a PDF, and then for more expensive you get like resume templates and multiple formats. And then for the last tier I'll just do a video." The video is me -- some people prefer this with me talking through the whole content; I've created specific slides for it. In about two hours I summarize the book, and I add just my take on it.

The way I think about it is people will get it either who like me or want to support me, or people who just don't wanna spend -- reading this book will probably take you hours, and they just wanna get a shortcut, or they wanna get that as well. And I didn't know how this would go...

But then, again, the first principle with this book - I wanna help, and I don't wanna focus mostly on making money, even though there's some money to be made there... So I decided "I'm not gonna penny-pinch." The book will come with everything - the templates, the formats, all of those things... And then for the video, I originally just wanted to do the video, and I had a section in the book where I looked around all the resume sites, the research on most of them... And the reason you find poor quality advice - it turns out there's a whole SEO industry behind this. Those sites make money from memberships, they have a customer lifetime value, and they optimize with content writers for everything. When you search for "software engineering resume", you'll go to a generic site that has content writers for software engineers, accountants, all that stuff.

I accidentally came across a site that was founded by a software engineer at Dropbox. Their site -- so all the templates and all these resume sites, they're selling for you, the consumer. They want you to pay, so they'll give you a resume that looks nice, and you're gonna be very happy with it. As a hiring manager, they're terrible. They're hard to scan, and they include bias. For example, photos include bias. Never, ever add a photo, unless you're in certain countries. And you're paying for that; you're putting yourself at a disadvantage. But again, the resume site doesn't optimize for long-term things.

So I came across this site which had clean templates. This site had hiring manager recommendations from the likes of Slack, and they also had real resumes of people who used these resumes, and I reached out to them saying "Alright, well, you're doing something pretty cool. What's up?" So we talked with the founder; they were also on Indie Hackers, by the way... And they've created the site because they were frustrated with -- when they were applying for Dropbox, the founder, previously, he just wanted a site where he can have a PDF, and he can send a web link and he could track when someone opens it. So they built the site, it took off on Product Hunt accidentally, and it was a side project... And now he left Dropbox and I think his co-founders might still be working somewhere; or maybe they're not. But now they're looking to turn the business into a more ethical resume site, where they do give you for your money a service of really clean templates, of web-based resumes, where you can just send the link and click-tracking on some of these things.

I really like this, and I liked how they were transparent. I liked how they seemed to be doing something similar to what I do... And I also don't wanna say in the resume "Advice business". I don't wanna do reviews, I don't wanna do long-term too much to do with this, beyond having this resource... So I figured, "Can we partner?" People who want these templates can go there, and you can get a discount. I'm not making any money off of it. They give a discount. I just like what they're doing.

**Adam Stacoviak:** \[00:48:10.12\] Yeah.

**Gergely Orosz:** I also helped them create resume templates that I thought would be better, which was a really cool collaboration. I think I just found they're someone who I identify with; I like that they're doing ethical things, they seem to be doing the right thing. They also need to run a business, so I learned a bit about their pricing strategy... And then I'm also happy to talk about the numbers \[unintelligible 00:48:29.07\]

There was a beta where you could get everything for $9, and I had a bunch of customers... I donated all of that to stem organizations and diversity organizations. I made about $3,500 from the beta while I was writing it. I wasn't advertising it too much, but I think I had people who either knew me, or there was word of mouth... Some people were looking for jobs.

And then after the launch, in the first 14 days the book brought $14,000, which is pretty cool. There was a Hacker News launch, it made it on the Hacker News frontpage, and I was responding to comments as they went... So about half of the sales came from there, and the other part came from social media.

Following the launch, there were more than 1,000 customers, maybe 700-800 paying customers, and about 200 people who didn't have a job, and I approved all of those requests. There were a couple of spammy requests, so I just ignored those... With fake profiles, and really weird email addresses. You always have that.

**Adam Stacoviak:** You're gonna get something, right? You're gonna get some sort of weird inbound from somebody... We get it all the time. Gosh, we get so much email here at Changelog... It's just so much. And you want to be kind and respond, but \[unintelligible 00:49:44.28\]

**Gergely Orosz:** Yeah... And by the way, when I launched on Hacker News, it was really interesting because the Hacker News crowd is a tough critic... And one of the feedback I got -- originally, for the free copy, I asked people to shoot over their LinkedIn account and just do something like share a post about this book, so I see that it's on their LinkedIn account. And some people said "Well, that's not great, because some people won't have it." And I was thinking to myself, "Hold on... If you're looking for a job, you need to have a LinkedIn account." It turns out there are people who just either don't have it or don't wanna use it...

At first, I felt really defensive about this, but I was like "You know what - this person is right." So I quickly added an option - if you don't wanna have a LinkedIn account, just shoot me an email." And I did have a couple of people shoot me an email. They actually legit didn't have LinkedIn accounts. Maybe they were in college, or they had zero connections on it... And I was like "Oh, this person was right." And actually, that came out pretty well.

This was one of the top-voted comments. It was a really negative comment, and then the original author changed it around, saying "Oh, you've just changed your site. Thanks."

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** So the Hacker News launch was great. If you ever find that thread, there was a lot of interaction going back and forth with the community... And it was really positive. In the end, I think the only negative comment I got that I couldn't do anything about - someone said that there's too many people from Uber, and Uber's culture is terrible, and therefore they're gonna read the book, so... I was like "Yeah, I worked at Uber. That's true."

**Adam Stacoviak:** \[laughs\]

**Gergely Orosz:** And some of my network worked there, as well. I won't be able to change that.

**Adam Stacoviak:** Yeah. So is it the post that says for the title "14 days, $14K in sales, 1,000 customers and what worked for me"? Is that the one?

**Gergely Orosz:** Yes.

**Adam Stacoviak:** We'll link it up in the show notes, for sure.

**Gergely Orosz:** I broke down all the stats, all the things that I did... Again, it's an experiment, and if it helps people, great. I didn't have high expectations. This surpassed it already.

The way I think about it is I have about now 2,000 engaged readers, which I'm very happy about. And the money as well. It's a bit secondary. It's kind of nice, because my first month of leaving Uber, I still got basically a salary... But outside of that, that's not my main focus here.

**Break**: \[00:52:03.17\]

**Adam Stacoviak:** What I find interesting is your perspective - rewinding back a bit - on "Why should I write this?" Well, I wanna ask how, at the time of Covid, obviously, a lot of things changing and happening in terms of layoffs, and a lot of unemployment... You know, you ask yourself "How can I help?" And the way you said you wanted to help was to offer advice. And then one of the things I think is kind of hidden here is the idea of who the resume is for.

There's some debate whether resumes are even useful or not, and whether it's the right way to even screen engineers, which is probably a gigantic debate - we can crack that if you'd like to - but I think just simply sharing with people that the resume isn't meant to be pretty, or... Obviously, well-designed and informative, and share a story about who you are, but just the sheer idea of sharing who the resume is actually for. Hiring managers. Who specifically reads this? Because that's what gets you in the door, and it's often the question you'd mentioned before.

Obviously, if you get a referral, that's better; but getting your foot into the door is half the battle. And that CV or the resume is just simply -- and it's especially hard if you've got so much career history. How can you condense it into potentially just one page? I think that might be the requirement; or at least you can share with me what the best practice is. Is it simply one page? That's hard. But who's reading this thing? Just the simple a-ha moment for me, I think, is not everybody thinks "Oh, hiring managers."

**Gergely Orosz:** And that's not even half of it, because it depends on where you apply, too. If you apply to a big company, chances are -- so with every company there's always a hiring manager who gets the head count. They say "I need to hire a person, and I've got the budget to do so." And they know who they wanna hire. Maybe Joe quit the other week and they want a new Joe. Or maybe the team is growing and they have a ten headcount, and they're okay hiring a couple of juniors, a couple of seniors initially... But then once they hired four juniors, they actually want seniors, that kind of stuff.

\[00:56:08.12\] In small companies, the hiring manager will review the resumes. As the company grows and it becomes mid-sized, there's gonna be some sort of HR person who doesn't really know what they're doing, but the hiring manager says "Can you just look at these resumes and make sure -- I want someone who's got Java and five years of experience." And then you'll have this person who is not a recruiter, but they're just looking for whatever the hiring manager told them, and they have no clue what they're doing.

One the company gets a bit bigger, they hire a proper recruiter, who kind of knows what they're doing, but they still need to do whatever the hiring manager tells them to do as the company grows.

And then finally, at really large companies, we have this thing -- Uber had this thing called inbound sourcer... A full-time person who only looks at inbound resumes, and the recruiter tells them what to look for. So they're now two levels away from the hiring manager.

So it is just good context... And where this comes to is you wanna spell it out on your resume why are you a good fit for this job, and do you meet those requirements that are there. And to answer your question, "Is this a good way of filtering?" No. I wish we wouldn't have. I actually have a chapter in the book... A lot of people, I believe, who are doing this resume -- one day they're going to become hiring managers. My ask to them, or anyone listening to it - if you will have the opportunity to be a hiring manager or improve the hiring process, remember how messed up this process is. Change it. And you can change it multiple ways.

First of all, any rejected resume has a different process for it. Do a coding challenge. There's services like Woven, who will actually -- they go through all the rejected resumes and they screen people, and they get a bunch of hires from those rejected resumes.

So there's a lot of ways that we can make the process better, because right now it is a sales pitch. People who are good at writing sales pitches about themselves get that first call, and people who are not, often don't. And it's not fair.

**Adam Stacoviak:** Maybe this is fodder for some, but what else beyond the resume plays the role? Because sometimes you look at the resume, and maybe that's part of it, but there's other things, like profile, a blog, LinkedIn... Being prolific - as you mentioned, you're a writer; maybe that's part of it. How much do these other things come into play? Is it simply after you sort of get through the door? Is it these are also must-have requirements too, to some degree? Once they've vetted you and confirmed you're a real human being, with some talent, do they go through other things and confront these things, too?

**Gergely Orosz:** I'd love to say that they play a role... But in reality, as a hiring manager, or even as a recruiter, you're busy, and resume screening is something you spend little time on. So as a hiring manager, I will typically -- I know I need to hire people, but my team is on fire. If we just lost Joe, we need to fill that in. Another guy is about to quit, and I need to do \[unintelligible 00:58:44.25\] and then finally, when I have 30 minutes at lunchtime, I have a hundred resumes. I need to go through them. And all I care about is I just wanna get a couple people who look good enough; and I very quickly look through them. I'm not gonna spend too much time looking into all the extra-curricular stuff.

The resume needs to show that you're good enough, and every hiring manager and every recruiter has three buckets in their head - yes, maybe, and no. You look at the resume, you do a first pass, and you put it into yes, maybe, or no. You get the no's quickly, you see some strong yes'es, everything else you put in the maybe pile.

Then you call the yes'es, and if you don't have enough yes'es, you go through the maybe pile. It's kind of as simple as that, and it seems very cruel, but it's just the reality of how -- and again, if it's a small company and there's only seven applications coming in, I'm not gonna spend the time to look at those. And this is why one of the advices I give is don't -- a lot of people just go on LinkedIn or Stack Overflow and look at jobs. Those are job sites where companies have to pay to post there. Those sites contain about a good 20% or 30% of all the jobs.

There are the job aggregators like Indeed, that crawl the companies' and whatever websites, which have all these jobs... And I'll give you an example why this is important. The first mobile engineer at Uber, and engineer number three and employee number five - the way he got hired, Jordan, his story is in the book as well, because I knew him very well... He just went to Indeed.com, applied for 20 different jobs, he heard back from three, one of them was willing to do visa relocation, because he was in Europe, and this company happened to be Uber Cab, back in the day.

\[01:00:20.18\] Later, he asked them "Why did you fly me all the way out from France and hire me as a mobile engineer?" And they said "We couldn't find anyone, and no one found us. In our network no one believed in us, and we just didn't have enough people respond to our ads." Because they did not advertise in these publications.

He did very well, and not every company will be Uber, but this is how he got in as one of the first Uber engineers. It's crazy. He just applied for a job that no one else applied to.

**Adam Stacoviak:** The obvious question, I think, is you mentioned the service that you link to as part of the 50% discount; that sort of helps you. But what does a good developer resume look like? Is there a particular look to it? Does it need to be plain, does it need to be formatted right? What are some of the criteria you can break down, that gives it a specific look? Is it unique design, does it need to be designed at all?

**Gergely Orosz:** A good resume -- let's say if you've got five years experience, that's just one page. If you have 5 or 10, it could be two pages; but don't go above that. It should be very easy to scan your dates. On the first scan, people wanna take away a couple things - what is your location, how many years experience do you have, what languages do you have, what are your companies and your titles? You want a very clear formatting, where -- and again, recruiters do this, where it's very easy to see when your first date is when you graduated, or when you started work; make sure your location is there... And then you just want concise points to show the impact that you've had, that you actually moved the needle. A lot of people will talk about their responsibilities, or will be afraid to give specifics... "I was in charge of having to build multiple services." Well, that doesn't sound very impressive.

You just want to be specific - percentages, numbers, those things... And on those points, you wanna reflect on a job. If you're applying for a web developer where it's on a product team, mention that you built a product, with the same words, like "I built this product." Or if it's a backend team with distributed services, where they're expecting you to do high-load systems, if you've done that, mention that "I've done high-load systems", again, kind of reflecting. Because there's gonna be a person there, and a lot of people think that a resume needs to be perfect, it needs to have all the information in case you get a job offer... No. It's just - get through that first boolean check, yes or no, and once you're talking with a recruiter, it doesn't matter.

So don't put in things that are negative -- if you've got a poor GPA, don't put it in there. No one cares. It's a sales pitch... And again, this is where I cringe. It shouldn't be like this, but it is.

**Adam Stacoviak:** But it is.

**Gergely Orosz:** And by the way, it is if you don't have a referral. Because referrals are the shortcuts.

**Adam Stacoviak:** Yeah. That's good advice. I mean, cold calls are hard. Warm calls are easier. So if this isn't a good process, even in our Twitter DMs, as we were planning to do this conversation, you'd mentioned quite simply that this isn't -- you know, you wrote a book about it, you think resumes are necessary, but they're not the best way to screen engineers. If there's a different system, maybe \[unintelligible 01:03:22.14\] maybe that's your next startup, I don't know, but...

**Gergely Orosz:** \[laughs\] Yeah, maybe.

**Adam Stacoviak:** ...but what's the right system? What's the right framework? What do you think? We've got whiteboard interviews, we've got resumes... There's a lot of hoops and unique facets in the hiring process.

**Gergely Orosz:** I'm gonna say something controversial here, because I've been on the other side of the table. There's a lot of polls saying how the hiring process is broken, and it's typically written by people who have been on the hiring process side and they're frustrated; they've gone through hell and high water. I've been on the hiring managers' side where I sell the other side. You're a popular company, say Uber, you post an opening, and immediately, especially if it's a junior opening, with not much requirement, you get 500 resumes, or applications. And two thirds of them, whatever you put on there, people ignore it.

\[01:04:12.26\] Some people also ask "Why do companies not post salaries?" Well, I know some Silicon Valley companies that posted salaries, and they get even more. They get the teachers, the people who are not qualified, because it's so much money. You're now seeing there 200k, and it's worth a shot.

So you have this problem on the hiring side, where you need to decide how much resources do you invest. And you could have an amazing hiring process, but your engineers will spend 50% of their time interviewing hundreds of people, and you're gonna hire one. But the other hundred will walk away thinking "Oh, I actually \[unintelligible 01:04:43.20\]" and it's a trade-off. It's a bit like building a distributed system. Do you optimize for latency, for cost? What do you care about? Do you want throughput? It's just like that... And it's not great to say, but the company is the one that's making the call. They're gonna decide how much they want their engineering time, and are they thinking long-term or short-term?

The reason Google and Facebook and other big companies have a pretty good hiring process is because they invest their engineers' time to have a bit more humane process, even though some people might disagree... But you have a lot of Facetime with engineers, because they're in it for the long-run. They want you to have a pretty good experience.

For example at Uber, we ran surveys about people's experiences... Sometimes we have people complain about interviewers, and we took it very seriously. Sometimes we took people off interviewing afterwards, and we had trainings. I spent a lot of time training people, shadowing people, doing all these things. Not every company does it, but ultimately, hiring is the company's decision. Don't forget that there are some companies that have amazing hiring processes. I'll give you an example - Basecamp. There's a problem though - they never ever hire. And when they hire, they get more than a thousand applicants. So you have that as well.

It's not our problem. I like to think of it as a systems design problem. You have two very different goals here. And by the way, there are some companies that are helping solve this. Triplebyte is an example, where they do a bunch of pre-screening and they tell you "If you work with us, we're gonna give you people who can go straight to on-site", and they're gonna do that one-off screening.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** There's Woven, who are a great startup - I really like their founder - who work with companies, and say "Pay us a little money. We're gonna go through all the resumes you throw away and we're gonna find you the hidden gems, so you don't need to spend more time on them", and they're doing great there.

And there's also HackerRank, who said something a bit more controversial, but from the kind of Hacker News crowd - they say "You know what - give everyone a fighting chance, look at resumes, but whenever a resume is not good enough, give them a coding challenge." Yes, it's kind of algorithmic, but you can prove yourself at that point, and you have a fighting chance.

**Adam Stacoviak:** Yeah, that is controversial in terms of -- I kind of like that, actually. I wanna agree with the controversial aspect of it, but I think it's better than a no...

**Gergely Orosz:** Yes.

**Adam Stacoviak:** ...the fighting chance aspect. At least it wasn't a no, and you may not really care for the coding challenge, or it may not be the most applicable coding challenge. For example, there's a lot of scrutiny around that. But I think I'd rather get a chance to say "Okay, I can show you I can do this", versus just "Thanks, goodbye."

**Gergely Orosz:** Yup. And that's kind of it. Also, the other part that a lot of people don't know (or don't see) is sometimes you apply for a position and you do everything right, and you still get a rejection. It can also be because these companies, a lot of times, they get a bunch of inbound. I'll give you an example. I'm have a hiring manager and I have two openings; I can hire two people. We get a bunch of interest, and we start interviewing people. We have two people and we're giving them an offer, and they're now taking their time to accept it. Do I stop my recruitment process, or do I keep recruiting? The answer is you keep recruiting, because those people might reject, and if they reject - and they often do - I'm left with nothing.

\[01:08:03.14\] So now we have a third person, who is amazing, maybe they're even better, but the first two accept. Now you need to go back and tell the person "Sorry, you're a no." And you're not gonna tell them "Sorry, someone else accepted", you're just gonna \[unintelligible 01:08:23.04\]

So hiring is asymmetric. The company will never be able to share what's going on behind the scenes. You also have some weird stuff where -- I hired for someone who quit, and then they unquit. And of course we took them back.

**Adam Stacoviak:** \[laughs\] It's a lot easier to take them back than probably go through the process of hiring somebody else.

**Gergely Orosz:** Well, yeah, and then we had to reject people who were good, but we no longer had the budget or the head count. So yeah, hiring is hard... Getting your first job -- especially for the listeners, getting the first job is hard, but hang in there. Once you're in there, it can be inconvenient, but as you grow your network... Again, with a referral it's always a -- you get more information with a referral as well, and those things. So that part is never gonna go away.

**Adam Stacoviak:** Any tips on getting referrals, since it's so crucial? I mean, knowing somebody is probably one key there. Maybe making a relationship simply for the referral - kind of iffy on that... But how do you get referrals? Is there a somewhat Easy button on that front?

**Gergely Orosz:** Well, if you're looking for hacks, there's very few. Yes, you can try to reach out on LinkedIn, you can go to forums like Blind and you can post your resume and be really clear about what position you wanna go... Because there's a bit of a gaming of the system, I'll be honest. A lot of big companies give you referral bonuses, and so people often refer someone who they think is good; and you can go to these -- again, TeamBlind is an anonymous forum where you can go to big tech companies and ask "Can someone give a referral?" and just be clear of "Here's my resume, here's why I'm qualified for this job..." and some people will refer you. So that's kind of gaming the system.

**Adam Stacoviak:** Yeah.

**Gergely Orosz:** But the best way to -- and most people will not like this answer, but the best way to get a true warm referral at some point is be a great colleague. Be a great colleague to your teammates. When you're leaving, leave on a great note, and then years later you're gonna get a call back.

I'll give you an example... During Covid, I had one of my friends who is doing a startup, and they got some grants and they were able to hire someone for only four months, but they needed a senior engineer in the U.K. They asked me if I knew someone. I hadn't been to the U.K. for five years, and I was like "Ah, I probably will not know anyone." But then I looked at LinkedIn and I saw this guy who was looking for work; I knew him from a meetup, and he was a super-nice guy. Ten years ago.

So I reached out to him saying "Hey, here's the setup. This guy is really good, but they can only get someone for a contract for the short-term..." In the end, they hired this guy. They never had to advertise the position. And I knew him because we were on a meetup, I think we did a project together at some point... It was ten years ago.

So whatever you're doing now, you're gonna have a network by working with people; those people will be there. And I do the same thing. There's a couple of people I would give a call, and there's people who I will always answer for. The people who I really enjoyed working with.

Obviously, this will not help people looking for jobs, but even if you're not, the most important thing - the industry is very small. I'm now in it for 15 years; it's ridiculous. I'm feeling that I'm so close to a bunch of people, and there's a lot of "Oh, we both know this person"/"I heard about you", those conversations. So yeah, just be nice, as you said. Considerate.

**Adam Stacoviak:** You'd be surprised what happens when you're kind, honestly. Or you're just -- I don't know... Just kind, I suppose. So don't send you any resumes, because you're done reviewing; that's why you wrote the book. TheTechResume.com, that's the URL for the book.

**Gergely Orosz:** Yeah. \[laughs\]

**Adam Stacoviak:** You've got a book in the works, "Growing as a developer", coming in 2021. So that's soon. And this book you've just done is an MVP to learn a lot, so I'm assuming you learned a ton... But you'd mentioned being a good colleague, and something you've done well is being a good colleague leaving Uber. We talked about this early in the call, but I wanna ask you to get specific; because you'd shared several insights you learned as you exited... And I'm wondering you can get specific and share some of that learning here on the show.

\[01:12:10.17\] We'll link to the blog post where you go deeper into this in terms of the wild ride you had there, and how it's unforgettable... You'd mentioned "Stick your nose into thing and learn, underpromise and overdeliver, be an owner, not a renter..." which - I love that one, by the way. "Embrace change, then start taking more risks..." Which of these four lessons for you is the one that's like "If I can only tell you one lesson learned, this is the one?"

**Gergely Orosz:** It's being an owner, not a renter. This was actually an Uber cultural value when I joined. It's now changed a little bit. But when I joined Uber, it was really striking to me on how when I was brand new, and on my first meeting someone brought up a problem, and someone said "Hey, are you an owner or are you a renter?" Someone said "This is not working." And they're like "Oh... Okay." So there was this "Let me try to fix it." And there was this culture from day one, of like "Well, sure, let's call out problems, but let's bring solutions." And this really stuck with me.

Again, the community in Amsterdam at Uber was around this, and I started to do this a lot. I felt people always appreciated it; it made me feel empowered, and it makes you challenge yourself.

So whenever you find yourself complaining about something, see if you can fix it... Because at companies like Uber, what I noticed -- again, from the outside, Uber looked like this great company... And this is true for any company. You look at the ones that are really hot these days - Zoom, or Snowflake, or whatnot. I guarantee - go in there and a bunch of stuff is pretty messy. But there are those people -- they follow the scouts principle of making things cleaner as they go... But you fix things as you go.

You can start with small things, and you can do it with big things. People notice... Because you have to go the extra mile. It's more work, but you get a lot more responsibility. I became a manager because I was doing a lot of the things that managers do. I didn't wanna become a manager per se when I joined there, but I just took care of a lot of these things. Later, as a manager, I was able to create new teams because I was already solving the problems with the team I had. This is the way I saw people grow the most.

I also see people stuck in their careers where they're asking "What should I do to get to the next level? Tell me what to do." And it doesn't work like that after a certain time. You need to go there and fix problems. In fact, I heard a podcast with one of the Lyft staff engineers who said "Well, the way to get stuff is try to look ahead for the business and solve their problems ahead of time... And then the rest will just follow." And it's easier said than done... But the same thing here. Uber really taught me this... And this is also why I'm more confident going into a startup...

This is the one thing I would instill, from day one - giving people the autonomy, helping them understand this... Because what I've found is after a while, when people join from more traditional companies, they worked in consultancies or places where they were given JIRA tickets - they really struggled with this thing. They were not used to -- they were just like "Why don't you just tell me? What do you mean? Should I not talk about problems?" No, it's just -- try to figure out if you can fix things.

So this really sticks with me, and I really like the idea of this and how it empowers you to do more. And you do the stuff that you care about, really.

**Adam Stacoviak:** Yeah. We didn't talk much about your other book, unfortunately - but it is coming soon - around the career path of a software developer... So I'm really curious about this. We didn't cover a lot of it... We'll put the link in the show notes, and whatever, but -- it's coming in 2021. You're gonna have it as an eBook... So pretty much copy and paste what you've done with The Tech Resume inside out, you're gonna do for this book. Can you maybe at least tease what you plan to do with it?

**Gergely Orosz:** Yes. Actually, it's gonna be paperback as well. That's a big difference.

**Adam Stacoviak:** Wow, okay.

**Gergely Orosz:** \[01:15:48.05\] It will be on paperback, which I'm really looking forward to... And it's gonna be the book that I wish I had both a few years into my career, when I just didn't really know what this whole career thing is, what is even a senior, and before I got into a place like Uber and I didn't really know what the setup was there. It's also the book that I wish I had when I was a manager, when I was coaching people. So it will have a a lot of advice, both from myself, and I'm gonna reach out to various people in the industry for their tips on how they grew into senior, lead, principle... And just a career journey from software engineer, to senior, tech lead, all the way to what some companies call staff/principle.

And for levels, you should think about the levels that the likes of Google, Facebook, Uber etc. have... Which I've found -- again, if you're working in these companies, it's not a huge surprise, and you might have good mentors, but it can be harder to break into without knowing what's there.

So yeah, it's coming early 2021. I'm working on it pretty much full-time. I'm also gonna be sharing some of the drafts that I'm -- because I'm self-publishing, I'm able to share drafts, which I'm excited about... So if you wanna follow it, in the show notes you'll be able to go to the URL and subscribe to a newsletter; you'll get regular updates on the book, as well. And you can also just decide to only subscribe to get notified when it's out.

**Adam Stacoviak:** I read your blog a lot, so... Is that a good place to send people to first?

**Gergely Orosz:** Yeah, Blog.PragmaticEngineer.com.

**Adam Stacoviak:** You're always writing; I love a lot what you write. We don't cover every single thing, because hey, we can't cover everything you write, but I do read a lot of your blogs. So that's blog.pragmaticengineer.com. Check that out. You've got links in your sidebar for "I'm writing a book", it talks about the one you're writing now... The Tech Resume book... All that good stuff.

Thank you so much for taking this time to share your journey with us, and kind of behind the scenes to how you're thinking about progressing your career, how you wanna give back... To those out there who don't really have mentors, as you're talking about for this future book, and then even writing resumes; something as simple as that, it seems, so complex. And just, I guess, being willing to step away from an awesome career at Uber to pause for a bit, focus on you, write some books, and then prepare for your next big thing. I really appreciate your time today, thank you.

**Gergely Orosz:** Yeah, I enjoyed being on here. And again, to any listeners, keep listening. Before the show, we were mentioning that I've become a lot more regular listener to Changelog because of these in-depth conversations. So if this is one of the first episodes you're listening to, listen to some of the other ones, see if it resonates with you as much as it did with me.

**Adam Stacoviak:** Yeah, I appreciate you saying that too, because it's fun to have listeners of this show on the show. So if you're listening, reach out and say hello, editors@changelog.com. We love to hear from everybody who listens to this show. If you've got some ideas for us - we might not like them all, but we definitely want to hear it. Plus, we have a community, changelog.com/community; you can come there, hang out in Slack... It's a place to call home, and you are welcome and everyone's welcome. But thank you for saying that. We really appreciate you being a listener, and then for sharing all this feedback and coming on the show. It's been awesome.

**Gergely Orosz:** Alright, this is great. Thank you.
