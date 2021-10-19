**Adam Stacoviak:** Raj Dutt is the founder and CEO of Grafana Labs. Grafana has become the world's most popular open source technology, used to compose observability dashboards. We use Grafana here at Changelog.

Raj and team are 100% focused on building a sustainable business around open source, and they have this big tent open source ecosystem philosophy that's driving every aspect of building their business around their open source, as well as other projects in the open source community. But to understand the wisdom that Raj is leading with today, we had to go back to where things got started. To do that, we had to go back like Prince, to 1999.

Raj, what happened in 1999 to make it a pivotal year in your life?

**Raj Dutt:** Well, for me, Adam, that was this little company... And at the time, in '99, it wasn't even a company, because we weren't even sure that it would become one... It was more of a project. It was called Voxel. I was a freshman in college, and was super-interested in Linux, and just really wanted to do something with Linux.

\[04:01\] So at the time, there weren't a lot of people running production systems using this kind of toy open source project that hardly anyone had heard of... And myself and a bunch of friends from RPI basically started this ISP hosting company, kind of cloud infrastructure company using Linux, putting it into production... And we really kind of stumbled onto this by accident.

We ended up running Voxel for about 13 years, built it completely organically. Myself and the whole team really had no idea how to run a company; we had no business doing this. There wasn't a lot of experience, there wasn't a lot of -- you know, we were a bunch of 18-year-olds, what did we know? But there was a lot of passion, for sure, so we ended up doing that for about 13 years. We didn't really understand the whole VC world, didn't even understand accounting; we certainly didn't understand sales...

We build kind of a little business, got it up to about 50 people, built it slowly, bit by bit... As you know, hosting is kind of a pretty capital-intensive business, so we were always struggling to find money to buy more servers. This was pre-cloud, obviously; Amazon didn't really come along until 2006-2007, somewhere around there...

It was a ton of fun. Very stressful, also... And then I'd say we transitioned into actually becoming a business after a few years, by the time people were either graduating or dropping out. None of us wanted to get real jobs, so we kind of made this our thing... And ended up getting some really good clients. A lot of dotcom companies that eventually dot-bombed, and that was fun...

**Adam Stacoviak:** Dot-bombed, yeah... \[laughs\]

**Raj Dutt:** Yeah, it was a ton of fun, and really a good learning experience. A lot of the people from Voxel kind of ended up going on to do really interesting things. My partner, Zach Smith, ended up starting another hosting company called Packet, that he just sold to Equinix a few months ago. One of our most talented engineers, Kris Beever, started a company called NS1 that's doing really well; Justin \[unintelligible 00:06:22.09\] another cloud infrastructure company that's doing really well... So that was actually one of the things that, personally speaking, I'm most proud of, if that's the right word - a bunch of the Voxel crew, myself certainly included, ended up learning a lot from that experience, and rolled forward into new companies and new projects.

In fact, there was a TechCrunch article that came out a few months ago that called it "the Voxel mafia." That was a really kind of fun term, and that's the way I look at it... So for me, this current company is in many ways kind of like a do-over; we get to take a lot of those lessons and try to not make the same mistakes, but also double down on the things that worked.

**Adam Stacoviak:** Yeah. I mean, double down on what works, for sure. Anytime you find out what does work, 10x it, right? Do it until it stops working. That's the age-old marketing shtick - if you've found something that works -- or sales, or pretty much anything. I suppose it could work anywhere, but... If this works, do it until it stops working. And if it works, do it again, until it stops.

What's interesting is the -- I'm not sure I totally understand the mafia part of it, if it's a bad thing or a good thing, but that you've enabled others to move on and do awesome stuff. I'm familiar with Jacob Smith. Not Zach, but Jacob from Packet. I talked with Jacob a while back. I never ended up working with him, but great team, a super-interesting look at bare metal and what that does... There's all these different aspects of infrastructure, from back in these days that you're talking about, 1999... Literally, buying a server for a company to use, and they're the only ones on it, to cloud now, virtualization, Kubernetes, clustering - all this stuff that's moved on. Serverless... And right back to bare metal with Packet, which is pretty interesting.

**Raj Dutt:** \[08:25\] Yup.

**Adam Stacoviak:** And to do something that actually was successful for many years - not just like five years or so... it's more than a decade. Kudos to you for doing anything from college that lasted more than a decade. I mean, most businesses fail, and fail early. Yours didn't.

**Raj Dutt:** Yeah, that's fair, but we also kind of grew it super-slowly, which is no longer the MO, it seems, with startups these days. Nowadays it's all about raise a ton of money, fail fast, go big, go home, that kind of thing... Not necessarily by choice, but just because it was the only option available to us. We really built Voxel organically, and kind of step by step. Every time we could -- we never had a choice to be anything but profitable from day one.

**Adam Stacoviak:** True.

**Raj Dutt:** We had no concept of a burn, or even being able to have a burn. If we had a burn, it meant we'd go out of business. So yeah, it was just a different environment, different world... Starting in 1999 meant that we were a year away from the dotcom crash. And once that happened, the idea of a company like that getting funding was kind of completely off the table. Investors had no appetite. It was a combination of investors having no appetite and us having no awareness or knowledge of how to even raise money. So that made for an interesting combination, which just meant that we didn't really have a choice but to build it organically, step by step.

But the mafia thing is interesting. Mafia is obviously a bad word, or a negative word. I think people use it because we were from New York, so it was kind of like an East Coast thing to contrast with the typical Silicon Valley (or Silly Valley) kind of a...

**Adam Stacoviak:** Yeah. So then let's fast-forward some -- we'll go back again; we'll tell a lot of your story, so let's not camp out here for too long, or get stuck here, I suppose... When you talk about Grafana Labs today, and the kind of company you're building today, and you mentioned a do-over; learn from then, do now better kind of aspect. When it comes to the kind of company you're trying to build, in terms of like -- you'd mentioned no appetite for funding Voxel after the dotcom bust, and more so the kind of company you're trying to build; I guess less about the company, but more about the speed at which you're trying to build it, and exit this whole idea of "How do you build a company these days?" It's either the short and easy road, or the long and hard road; which route are you taking, given (I guess) what you've learned and maybe where actually Raj wants to go. Not so much like -- do you sacrifice your own desires and build the company that the company needs to be, or do you sort of like inherit your own desires and think a long-term long tail?

**Raj Dutt:** I think it's a good question. I don't think it's a black and white, or binary answer rather... We've been at this for Grafana Labs for about six years now already. But the big mistake we did at Voxel, in retrospect, was not capitalizing the company sufficiently. Cash was always a thing that was constraining our growth back in the Voxel days. So even though we had a decent product and a decent opportunity, we really couldn't execute at the speed and realize that opportunity that we had, or move on the window of opportunity that was in front of us. So that's certainly a mistake that we don't wanna repeat at Grafana Labs, which is part of the reason why we've raised our Series A, and we have enough money in the bank where we're not making all our decisions based on "Can we afford this right now?" There's more room to invest in the future. And that doesn't necessarily mean that you spend money willy-nilly, but it means that you can do things that make sense, that you're confident in.

\[12:23\] With regard to exits and timeframes, I'm a firm believer in -- I think we have this imprinted in the DNA of Grafana Labs, we like to say we're long-term greedy. We're not trying to optimize for a particular exit or a time horizon for an exit. I really think that if you try to do that, you're gonna end up making decisions that are really sub-optimal. So we act like we're gonna run the company forever. I'm a firm believer that that's the right way to do it.

If you end up getting acquired or you end up going public, whatever your metric for success is, I think the way that you do that no matter what your business is is by just trying to build a good business for the long-term. If you get taken out in an awesome exit, so be it; but if you're trying to optimize for that, I really think that you end up making sub-optimal decisions.

It's kind of a cliché... Some people say that companies are bought, not sold. I think there's a certain degree of truth in that. If you're trying to optimize to sell -- "I wanna sell to Google in five years, or something like that", if that's your plan, you're just gonna make a bunch of bad decisions that take away from building a great business. I think that if you just try to build a really good, long-term business, good things will happen.

**Adam Stacoviak:** So I guess the question might be then "How do you make different choices?" Given that, aside from simply just saying "We're optimizing not to be sold", but this idea of long-term greedy, or -- is that what you said, long-term greedy?

**Raj Dutt:** Yeah, long-term greedy.

**Adam Stacoviak:** Okay. Make sure I had it correct... Which I like, by the way; that's super-cool. I'm not sure if you coined that or not, but I like it, so I'm gonna keep using that; I like that a lot.

**Raj Dutt:** We definitely didn't coin it. In fact, I think Goldman Sachs coined it, so...

**Adam Stacoviak:** Oh, is that right?

**Raj Dutt:** ...not necessarily a company I admire, but I think it's a good phrase.

**Adam Stacoviak:** Well, I think it's got some opportunity, I suppose, to think -- I guess greed can be a negative connotation to it, but... You know, I'd rather be long-term than short-term greedy, if I wanna be greedy at all. Let's focus on the long-term, because there's different attributes and attitudes that come from a long-term mindset. When you're thinking about even a proverb from the Bible, you can't plow a straight row if you're looking back.

**Raj Dutt:** Sure.

**Adam Stacoviak:** Which is sort of this idea - if you're constantly looking back, you're thinking like "How could I have done differently? Who could have I been sold to? What choices could have I made to be acquired?", instead of thinking about the future, growing a company that's worthwhile for the employees of that company, the customers of that company, the investors (if you have them) of that company, the founders, the stakeholders... You can go on through the layers of interests in a company, but...

**Raj Dutt:** Sure.

**Adam Stacoviak:** ...if you're looking back and you're thinking short-term gains, or exit strategies, you're gonna miss out on the opportunity. And you'd mentioned this idea of this window of opportunity, and this is something I think that I personally am retrospective about... Like "Am I growing, or are we growing the company - this business, Changelog Media - in the right way to capture our window of opportunity?" And then I asked you about your personal desire for the company and how that may rub, or be in parallel with the necessariness or the needs of Grafana Labs in terms of its trajectory, where it needs to go.

\[15:53\] Because for me, for example - I'll camp on this for just a second - I may desire not to build a New York-headquartered media company. Now, we may be in every way a media company, but we'll probably never have a New York office. There are certain choices we're making that are different than other "media companies" might make.

So parallel that to what you're doing - maybe you've got particular personal desires, maybe your business has certain specifics that it needs to do to be the business to capture this window of opportunity... What is that for you?

**Raj Dutt:** I guess it's a combination of those two things. On the personal level, I really love to travel; I really love doing business internationally. Pre-Covid I was on the road probably 300 days a year... And one of the things at Voxel that was interesting is, you know, even though we were a company of 50 people, we were kind of spread out pretty much across the world. We had a large hub in New York, but... You know, talent is everywhere.

One of the things with Grafana Labs is we're remote-first. We have just over 150 employees, but we're in like 20 different countries. And that's really fun, that's really exciting, but it's also a way to just get the best talent, no matter where that talent is. So that's kind of the, I guess, merger of personal and business strategy.

The open source angle is also part of that. At Voxel we really saw how infrastructure was changing, like you said, from bare metal to containers, to serverless now... We also saw how software was changing and how -- you know, Marc Andreessen likes to say "Software is eating the world". Open source is kind of eating the software world. So we really wanted to do something with open source; that's what we're all about, we're definitely an open source company... Not just with Grafana, but with things like Loki and Prometheus. And that also ties in with long-term greedy. You have to really balance this adoption and this grounds-up community movement with your monetization cycle. That takes time to nurture, and you have to constantly get that balance right.

So that's something that we've been really trying to focus on in the last six years - creating a vibrant, healthy and diverse community, and serving its needs, which is all about value creation in open source land, with the demands of our commercial strategy, which is all about value capture. That tension I think exists in any open source company, and that tension is healthy. We deal with that and we try to balance that every day... And it's hard. But that's also part of being long-term greedy - we're trying to, in some ways, have our cake and eat it, I guess would be the cynical way to put it.

**Adam Stacoviak:** Yeah.

**Raj Dutt:** It's definitely a combination of a belief that we're doing things that will allow us to create really good software, that our community and our customers love... And we do it in a way that we think is really effective, which is remote-first, and having people all over the world... Which by the way, is how the best open source projects have always been built, since the Linux days.

For myself and my co-founders in the core team, we really believe in those two things... And that kind of reflects in a lot of our strategy, a lot of our day-to-day decisions... We're also what we call "big tent", which means that we really value interoperability of the wider ecosystem.

A lot of companies and a lot of vendors in our space try to own the entire stack, and sort of tell a customer that "It's my way or the high way", or "Replace all of what you have and buy my new shiny solution."

\[19:54\] As an open source company, we take open in a whole new level, because we prioritize interoperability above anything else. So if a customer of ours has existing vendors that they're working with, companies that we really admire and respect, like New Relic or Datadog... You know, their data is in a SQL database, or they've used something like Amazon CloudWatch, or whatever vendor, or wherever their data is stored, we'll integrate natively with those vendors. We don't require our customers and users to replace them.

So yeah, that's a pretty long-term strategy also... But at the end of the day I think it's also about trust, which is what's really important in open source, and in any business. We're trying to be perceived as not just another vendor. We're trying to be perceived as a trusted advisor. That's certainly aspirational, and it sounds like a good line that you'll find on a marketing website, but we try to make it real, and that's certainly harder as we scale the company.

**Adam Stacoviak:** Well, I think the big tent philosophy certainly leans in towards the trusted advisor.

**Raj Dutt:** Yup.

**Adam Stacoviak:** Especially that's part of your recent raise announcement, too... It's all over that. One of the big pillars of that was talking about this big tent philosophy, and I think that you can capture that trust necessary from the community, even from those in your company, that obviously work there for a reason... They believe in something; they don't just want a job, right? Somebody wants to believe in what they're doing...

**Raj Dutt:** Yup.

**Adam Stacoviak:** And the reason they do that is because you're not trying to knock down buildings, you're trying to make sure the stop signs are in the right place, and the stop lights and whatnot work. You're not knocking down buildings to build your own city. You're helping other people make sure their buildings and their foundations are strong, and the community is strong... And then interoperability is huge and crucial in open source, especially as you look at what cloud is. If you're a player in the cloud, you kind of have to -- well, you should; you don't have to, but you should optimize for interoperability and openness and things like that, because you've got a lot of players in that space... More than just simply Grafana Labs and Grafana Loki. There's more to the stack than those two or three things. It's a bigger piece, a bigger puzzle.

**Raj Dutt:** Absolutely. And the most interesting customers and the largest customers have a very complicated infrastructure. They're using all sorts of tools, and they have many vendors that a variety of teams are using in different ways. I agree with you that vendors should prioritize interoperability; I don't think many of them actually do. A lot of new employees who come into Grafana Labs kind of get surprised by this, whether it's on the engineering side or on the sales side.

Our strict MO is that we don't really disparage the "competition", because we do prioritize interoperability. On the engineering side we will absolutely focus on creating good experiences with not just other open source projects, like let's say -- Elasticsearch is a great one. They have a fantastic database. Elasticsearch is just awesome, and we really prioritize working well with that database.

We also have our own logging platform, Loki. And in some ways, it competes with Elasticsearch for some use cases. Our bigger story and our macro, more important MO is big tent, and prioritizing interoperability, so we will literally go to customers and say "Look, you have Elasticsearch. It's great. We're not gonna tell you to rip it out. Use Grafana with it, and we'll connect to it natively... And here's what it's really good for." And we'll tell that story.

\[23:54\] So when someone comes in to, let's say, our sales team, the normal playbook with sales is like "Alright, give me the battle card. Give me the kill sheet on how to talk trash about all these other vendors, and why we're better and why they suck."

**Adam Stacoviak:** The kill sheet. I like it.

**Raj Dutt:** \[laughs\] And our core team is always like "Wait... No. That's really not what we do." We're happy to talk about the differences between different vendors, and that's part of being a trusted advisor, but there will be no kill sheets. We don't have this kind of "rip and replace" mentality. Like you said, we're not trying to tear down the buildings; we're trying to put in the stop signs and help with the plumbing. And if you want a new building, we're happy to build one for you, but we're not gonna erase the city.

Scott Fingerhut, who just joined us as our VP of Marketing, he likes to say that customers should own their own observability strategy; not a single vendor. And I think that's really right. Vendors are really just trying to come in and say "Alright, we're gonna take over your whole platform, we're gonna take over your whole observability strategy. Throw everything away. Move to this new, shiny thing." And the reality is I think this is kind of like the oldest lie that has existed in IT for a while... Which is this consolidation play, which is sort of like "Okay, we're the new, shiny database. We want you to move all your data into our new fangle database." But guess what - by the time you're halfway done with that, particularly if you're a large, complicated organization, a large enterprise, by the time you're halfway done moving to the new fangle database is gonna be the new legacy database, and there's gonna be another vendor that's just sold you yet another even newer fangle database... So it's gonna be this chasing your own tail kind of thing.

So I think that interoperability is really key, and I do think it's tied to being a trusted advisor. And that's what makes Grafana fairly unique, is we kind of just natively connect to over 50 different open source projects, commercial projects, different databases, and we don't require that people move their data. Keep your data where it is.

And there's a lot of really good vendors out there, and a lot of really good open source projects, commercial offerings... And it's about respecting people's choices, at the end of the day.

**Adam Stacoviak:** Yeah. You'd mentioned this tension between open source, the way your business and your open source obviously works and is being adopted out there, and the necessary business you've gotta build around it... Because hey, you took funding, you're building a business, you've got employees, you've got stakeholders, you've got things you've gotta accomplish... And you've mentioned this tension, and then you sort of dovetailed into the trusted advisor, which we've talked about a bit there... How do you, I suppose, balance that tension, and how does the balance of that tension translate to trust, on both sides of that community fence?

**Raj Dutt:** Wow, that's a really hard question, but a really good question. So how do we balance that tension... I guess contentiously, with great difficulty, with a lot of internal consternation. It's a really hard balance to get right, is the honest answer... And it's something that we definitely deal with every day. On one hand, if you pick someone from our engineering team and ask them "Hey, should we make this feature open source, or should we make this feature a commercial feature?" they're probably gonna say we should make it open source... Because it's fun to build open source software, and get that feedback, and give back to the community. And if you asked our average engineer, I think they'd probably veer on the side of building all open source software.

Now, if you pick someone from our sales team, they're gonna say "Well, every feature that we build should be commercial, because we'll be able to sell it." So it's a tough balance, and what we don't wanna do is we don't wanna build open source software that's crippleware, or that isn't useful, or that teases functionality rather than solving real problems.

\[28:08\] We wouldn't have a community if Grafana wasn't really useful and solved real problems and provided real value for our community. We wouldn't have a business. Our community and the 500,000+ companies that are using open source Grafana - that's a super-power for the business and for the commercial side of the house. So we wouldn't be able to sell hardly anything if that community wasn't really strong.

So mission number one for us is actually growing the community, increasing adoption, and then monetization is number two. And that can be tough, particularly for our sales teams, because again, it's long-term greedy; it doesn't necessarily help when you have a quota to hit this quarter. That long-term greedy strategy can be cold comfort to that team. But I guess the way we try to balance it is we constantly ask ourselves "Hey, is this feature useful for the average user, a startup, a small company? Even if they're running it in production, even if they're running it at scale. If it is, let's make it open source. Let's be pretty liberal with what we make open source. And if it's something that is really interesting only to the largest enterprises, like a bank, or a Fortune 500 company, then we'll consider making that feature part of our commercial offerings.

And that's kind of like a pretty broad, subjective way to think about it, and it's certainly more of an art than a science, but that's kind of one of the so-called sniff tests that we apply when trying to strike that balance.

I'd say that probably 95% of our engineering efforts go into open source. Even for the next several years, the large majority of our engineering effort will go into open source. Our whole business model and the way most open source companies work is it's all about monetizing a very small percentage of your users. I don't think any open source company - or at least not a rational one, or in my opinion, one that will be successful - will kind of think "Well, we're gonna convert most of our users to paid. Or even half of our users to paid." That's just insane. It's about creating a really large community, and then figuring out who the very small percentage of that community that can become customers are. And if you can create a large enough community, then that small percentage can be a real business... So that's why it's so important to focus on community and adoption.

We're really lucky to be the center of mass, or the stewards, if you will, of this really vibrant community. I say it's our superpower, but it really is; we're just incredibly grateful for the tailwind that they give our business, both in terms of helping us build better software, through pull requests, contributions big and small, kind of keeping us honest with what we're doing. A lot of them are very interested in how the business is doing... And if we get that balance right, I think the community supports us, and will continue to support us, because at the end of the day, they want Grafana to be a sustainable project, and for the velocity of Grafana to increase even further on the open source side.

When we started, it was just my co-founder, Torkel, who created Grafana in 2014, and he was kind of doing the majority of the development. We managed to hire a couple of people to work with him in Stockholm, and now we have almost 40 people working on Grafana. Like I said, 95% of our effort is on open source. So it's like this really nice, virtuous cycle, where we can invest more in open source as we're successful in building the commercial business. So as long as that virtuous cycle isn't broken and that balance is right, it's a really beautiful thing, for sure.

**Adam Stacoviak:** \[32:21\] The way that I like to think about it, especially in this case, is that the adoption of \[unintelligible 00:32:25.07\] open source is the foundation from which you can even possibly build Grafana Labs... Anything, in terms of commercial viable or anything. So if the open source isn't adoptable, communityable, whatever -able you wanna attach to the adjectives you can do for a project like Grafana - if that's not a solid foundation, then you can't really build cloud enterprise, commercial offerings for banks etc. on top of that, if it's not a vibrant, useful project that actually gives back.

So I love the idea that 95% of what you do is open source, and that's that five-ish percent or more, if I'm just using the words you use to define that... Right? I mean, if the open source part of it isn't a solid foundation, then what company can you build on top of it? Not much.

**Raj Dutt:** Yeah, you're totally right. We'd just be like a normal software company that has to -- it'd be like pushing a string up a hill. It would be really, really hard. The community gives us a really large base of users who already use and trust our software. They know Grafana, they're already solving problems with it... Even for our commercial product, like Grafana Enterprise and Grafana Cloud, our sales model is largely inbound. People are coming to us and saying like "Hey, we're using Grafana. Tell us about Grafana Enterprise; tell us about Grafana Cloud. We already trust you guys. You don't have to convince us that you have good stuff."

**Adam Stacoviak:** Well, that's awesome...

**Raj Dutt:** So yeah, that really helps with our sales efficiency. That gives us a significant structural advantage. So yeah, I think community is absolutely the foundation. And the way they explain it to someone who's not familiar with open source, who came from, say, an enterprise software background, is imagine if you had 500,000 trials underway. 500,000 POCs underway. Now, first of all, what would it cost you from a marketing standpoint to be able to get 500,000 businesses trialing your software?

**Adam Stacoviak:** Oh, yeah.

**Raj Dutt:** That would be an unbelievable -- you know, tens or hundreds of millions of dollars worth of marketing in order to do that. And that creates this structural advantage from a sales standpoint for the business.

Now, of course, the downside is those 500,000 companies aren't actually running trials, because most of them will say "Thanks. This is great, and I can use it forever, and I don't have to pay you a single cent." That's just the way that open source works. Open source has never been about value capture. Open source has been about value creation. So the model is we will do a tremendous amount of value creation, and a very small amount of value capture. And I 100% agree that that's the foundation of our business. It's all about trying to have this really, really large pie, and capture a very small slice of it. And if the pie is large enough, then that small slice is material, and we have a real business there.

But if you try to go too far, and capture too big of a slice, or get that balance wrong, you're gonna hurt the community. And that is ultimately, I think, a mistake that other open source companies have made, and that's ultimately a really -- you know, you might have a good quarter or a good year when you do that, but you're kind of compromising the foundation of your business... Which is why community and adoption is number one for us.

\[36:09\] Having a healthy community and providing really valuable open source software that's free to use, that solves real problems, isn't crippleware, isn't shareware, or freemium... We don't like those words. That's not what open source is about. That's why that's so important to us.

**Adam Stacoviak:** Yeah, freemium is an interesting aspect. I just had a conversation actually with the founder of Snyk on that exact subject... And it was interesting, because there's parts of the freemium model I can appreciate, and Snyk is open source; they have a freemium -- probably similar in business models, but obviously not the same exact philosophy, because they do have a freemium model... But I can see where that -- you know, the free version essentially is the open source; this optimize for adoption, optimize for, as you said, not value capture, but value creation.

**Raj Dutt:** Right.

**Adam Stacoviak:** That's sort of what it is... I mean, is that not what open source is at large? It's this large freemium model, this large 500,000 proof of concepts out there?

**Raj Dutt:** I guess it's similar, for sure. Freemium and open source are -- I guess there's a pretty wide overlap in terms of the go-to-market motion. They're similar in terms of distribution models. But where they're very different is the freedom that open source provides its users. So open source used to be called free software back in the Richard Stallman days and Linux days.

**Adam Stacoviak:** Right. FOS.

**Raj Dutt:** Yeah, exactly.

**Adam Stacoviak:** Free and open source software, yeah. That term became uncool at some point.

**Raj Dutt:** Yeah. You're aging yourself, Adam, because people don't remember that anymore.

**Adam Stacoviak:** That's right.

**Raj Dutt:** It kind of got rebranded as open source, but... Back when it was called FOS--

**Adam Stacoviak:** Well, it's shorter, right?

**Raj Dutt:** And I think it's more business-friendly.

**Adam Stacoviak:** Right.

**Raj Dutt:** Free was a really interesting word for FOS. But the F in FOS, the word free - it was never about free cost; it was about freedoms, and the freedom when you get the source code under a liberal license to kind of do what you want and never have to worry about what happens if that vendor goes away, if that vendor stops supporting you, if you wanna make changes yourself, if you wanna modify it to do things that it doesn't currently do... You know, to never have to be beholden to someone for a bug fix or an improvement, or -- you know, it's like the ultimate insurance policy, right?

**Adam Stacoviak:** True.

**Raj Dutt:** So open source is different in that way, where if we start doing a bad job, or if we start getting that balance wrong between value creation and value capture, then people in our community can be like "You know what, Grafana Labs? We're gonna go our own way, and we're gonna fork Grafana." And if someone can do a better job with that, then we're not gonna be the company behind the software anymore.

We own the trademark. We don't have the right to prevent forks from happening. We don't have the right to stop someone or a group saying "You know what - we can do this better than Grafana Labs, and we're gonna create a better Grafana by using all the work that Grafana Labs has done." And that's what makes open source really powerful. And the ability to customize it, the ability to modify it and not be beholden to a vendor.

So I think that's the big difference between freemium and open source. And I also think that's why opens source has really captured the mindshare that it enjoys with developers, that freemium has never really been able to capture. Because that freedom, both to redistribute, to use, to modify, to base derivative works off of - that's really powerful, and those ideas go back decades now, with things like Linux; you wouldn't have projects like Android, as an example, if those freedoms didn't exist.

**Adam Stacoviak:** \[40:17\] Absolutely. You'd mentioned this tension - I'm not going back there, but kind of dove-tailing off of that; this tension and the obvious inherited value of FOS... I don't think it's a terrible term; I think the "free" still needs to be talked about in open source. I think the freedoms of open source needs to be talked about. But then you'd mentioned when you talk to your developers, you talk to your sales team, you get two different answers when it comes to "Hey, there's a new feature we're gonna put in Grafana. Who should get it?"

And there's obvious reasons why an engineer may be more for open source and why a salesperson may be less... And it's not because they're greedy, it's just -- that's how they get paid. It makes sense.

**Raj Dutt:** Sure, yeah.

**Adam Stacoviak:** But that says you've gotta have some pretty keen eyes on company culture... Because to be able to lead that business is one thing; to be able to hire the right people and have them be motivated and believe that 95% of what you produce in terms of value creation should go to open source - how in the world do you do that? Getting that culture right - how do you do that?

**Raj Dutt:** That's a great question, and that goes back to kind of a do-over comment that we started with - the realization of how important culture is in a company, particularly when the company is growing really fast. Personally speaking, I feel out of my element on most days, because at Voxel we grew the company to 50 people over the course of 12 years, and at Grafana Labs we're at 150+, and if things go on plan, we'll probably be at 400 people by the end of next year.

**Adam Stacoviak:** Wow.

**Raj Dutt:** So I haven't done this before... And the thing that I really realized \[unintelligible 00:41:57.07\] is how important culture is. So that's been something that's been really top of mind for me and my co-founders. And I think we've put into place a pretty strong team in terms of the senior leadership of the company, that kind of understands this dynamic. Our leadership on the engineering side really respects what the sales team is trying to do. The leadership on the sales side really understands this golden goose phenomena in terms of the balance.

I think it really comes down to that - we're all in this together. You're right, people aren't being greedy. A salesperson isn't being greedy per se when they fall one way. An engineer isn't being naive either when they fall the other way.

**Adam Stacoviak:** Right.

**Raj Dutt:** So I think that having the leadership team that really gets the big picture, holistically, is the only way that you're gonna have a fighting chance of getting that balance right. And my co-founders, Torkel and Anthony, I think really fundamentally understand the balance. Our engineering leadership, such as Tom Wilkie, our VP of product - he really gets it. And perhaps most importantly, our sales leadership, like Doug Hanna, our chief operating officer, Dave Kranowitz, our VP of sales - they're (shall we say) pretty unique in a good way in terms of sales leaders, where they really understand this dynamic. And it's not something that they're gonna get automatically that they're gonna be born with. To some degree, they've gotta be indoctrinated into the culture. You can't just serve them Kool-Aid and tell them to drink it either. You really have to explain and show them why it is the case. So it's something that isn't passive, it's very active.

\[43:50\] Just as an example, we hold sessions, from the key leadership down, explaining this dynamic. It's something we talk about internally a lot. And I think it comes down to also people having not just understanding, but respect for all parts of the company. It's about a shared mission, it's about realizing the importance of this foundation. And it's about respecting what your colleagues are doing in all facets of the company. And it's not something that just happens, or you get for free. So it takes works. I feel like that's one of the major things that we have to keep reinvesting in as we scale the company.

I'm pretty pleased with the dynamic that exists today between the engineering teams and the sales teams. It's very collaborative, and I think that's gonna be challenging as the company keeps hitting new inflection points and keeps getting bigger and bigger, for sure.

**Adam Stacoviak:** Yeah. So you mentioned you're at 150 people now, 400 by the end of next year. So by the end of 2021 you projected 400 people, which is a lot. Obviously, getting the right people in place makes sense. You'd mentioned the foundation of open source, this golden goose phenomena that both sides of the fence need to have respect for. What stage, when it comes to scaling the company in terms of revenue - where are you at in terms of -- not so much how much revenue, but where are you at with organizational sales, things like that? How new is that for Grafana? Have you been doing it for a while? Less than a year, more than a year? Where are you at with sales efforts and revenue generation?

**Raj Dutt:** So we've been kind of generating revenue for about four years... But we have only really had a sales team for about a year and a half. And that was a huge--

**Adam Stacoviak:** That's an interesting ratio...

**Raj Dutt:** Yeah. Because we were lucky enough ot get a bunch of inbound interest from the community - sort of the core founders and founding team (if you will) of the company was just kind of handling sales in a very ad-hoc way. And we were learning a lot about what the patterns were, who our customers were... And we managed to get up to several million dollars a year worth of revenue before we really invested in a sales team.

And one of the big mistakes that I made at Voxel was not ascribing enough importance to having a really great sales team. And I think that's a mistake that a lot of technical founders or product-oriented founders make. As an 18-year-old starting Voxel, I had a very naive view of the world that I think is not uncommon, which is build a better mousetrap and the world will be beat a path to your door. \[unintelligible 00:46:44.10\] That's not the way the world works. Welcome to Rail life. So one of the do-overs at Grafana Labs was making sure that we had a really good go-to-market motion, and that we invested in that.

We hired our first sales director, Graham Moreno, from MongoDB about a year and a half ago. He really helped take what we were doing, which was very organic, ad-hoc, kind of founder and founding team-led sales, and he actually came in and brought that initial layer of process, and discipline, and repeatability into things. And then about a year ago we hired a chief operating officer, Doug Hanna, from ZenDesk... And he came in, along with Dave Kranowitz, our VP of sales, who we hired around the same time, and kind of leveled up Graham did, one level more.

So at this point, we now have about 15 salespeople at Grafana Labs. We have three teams, a West team and East team, and an international team. Our sales team and go-to-market efforts are really rocking and rolling. But we've kind of built it slowly, we built it at opportune moments, and I think Doug and Dave and Graham have done a really good job in the last year and a half. At this point, we've got a pretty mature sales team.

\[48:17\] But we did it sort of after we were generating revenue, and that was deliberate... Because I think if you do that too fast, you kind of -- you wanna do that once you've figured out some basics in terms of how you're selling, who you're selling to, what they're buying. So it was really about accelerating what we had, formalizing it, adding a level of rigor, repeatability... And we're taking sales very seriously now.

We've got some pretty ambitious targets, that's definitely part of that... But I think we're selling in the right way, and in a so-called long-term greedy scenario.

When Doug Hanna, our chief operating officer came on board, him and I spent a lot of time talking about open source, and the whole value creation/value capture dynamic, and he actually came up with the golden goose analogy, and started preaching it to the entire sales team. So it's back to making sure we have the right people in place.

And on the engineering side, our whole engineering team is super-supportive of what the sales team is doing. I said it's collaborative, and I don't say that lightly, because I think a lot of times the relationship between engineering and sales can get kind of contentious, right?

**Adam Stacoviak:** Absolutely.

**Raj Dutt:** And engineers were like "Oh my god, what did the sales team just tell the customer? What did they sell?" And sales people are like, "Oh my god, why can't the engineering team give me product that I can sell? They're screwing everything up." And there's a lot of natural tendency, I think, to finger-point... And to some degree, that's inevitable, if you scale a company, I think... But I feel like part of my role is making sure that doesn't happen, or at least staving that off as long as possible.

**Adam Stacoviak:** What's interesting in your story that I've heard so far is the between the lines, which is sometimes -- I won't "often", I'll just say "sometimes". Sometimes when you begin a sales team, you make mistakes, and those people aren't around long. It seems like the people you've brought on - maybe there's parts of your story you're not sharing, for whatever reason \[unintelligible 00:50:20.19\] and maybe it's your experience with Voxel, that you kind of have this wisdom to lean upon... But you'll see a sales team get developed too early, as you'd mentioned, not really understanding what you're selling, how you should sell it, how you should package it, how you should approach your customers, understanding this golden goose phenomenon...

I think that's a really interesting thing that a lot of open source companies should understand very well, to have a good balance between their engineers and their sales teams, like we're talking about here... But often what you'll see happen is a sales team will get brought on, and the upside won't be there, or they've gotta do too much work, and there's not a clear understanding of what to sell, how to sell it... And you've been able to not have that problem, it seems, where you bring somebody on, they spin out and they flounder, and you sort of limp along sales-wise for four years...

**Raj Dutt:** Yeah.

**Adam Stacoviak:** ...when you could have been much stronger earlier.

**Raj Dutt:** There's probably a few reasons for that. Let's never underestimate luck in a lot of this, for one...

**Adam Stacoviak:** Sure, sure. Good job on that luck.

**Raj Dutt:** Right. \[laughs\] No, I'm kind of half-joking with that... But in all seriousness, I think the two reasons I can think of is 1) just hiring the right people, at the right time. That's part of it. When Graham came in -- Graham is a pretty young guy. He makes me feel old, I should say. He came in from MongoDB... And he really kind of, like I said, up-leveled our process one degree. And then when Doug and Dave came in, they kind of amped up the volume and the rigor in the process. But if we tried to do level 2 at the time that we did level 1, I think we would have gotten into some of the stuff that normally happens.

\[52:12\] Hiring the right people is so important... And that's another lesson learned at Voxel. One of the things that we did at Grafana Labs that was very different is we hired a VP of People Ops, Alex Farrell, back when we were about 25 people. People Ops is the new fangled, cool word for HR... And let me tell you, I did not have, based on previous experiences in the company that ended up buying Voxel, I had not a lot of respect for the concept of HR. I had a few run-ins, you could say, with that department in my professional career. And we made a very deliberate decision to hire a VP of People Ops way early. This is before we did our series A. And I was kind of on the fence, to be honest, of whether we needed to do this. Like, "We're only 25 people. Do we really need a full-time HR/People Ops person?"

This role isn't just to find new people. Alice is absolutely what I like to call a culture carrier within the company. It's to not only recruit people, find the right people, but to make sure that people are aligned, that the culture is maintained... And I think that she's been instrumental. I mean, she's definitely been instrumental in helping us scale from 20-odd people to 150 people plus. Not to dwell on culture too much, but I also think that that's been really important as we've built our team in general, and our sales team.

We've been lucky enough at Grafana Labs to have incredibly low people attrition. It's insane. Over the last six years I think I could count the number of people who've left the company on one hand. Maybe one and a half hands. I certainly don't have to start counting toes. So I think a lot of it comes down to culture, it comes down to hiring the right people at the right time, and a certain degree of luck.

Graham and Doug and Dave have all helped us in very different and unique and timely ways for us over the last couple of years.

**Adam Stacoviak:** I think you'll hear people say "culture", and it seems cliché... But I disagree. I think it's cliché if you can't back it up. When you just say "Oh, it's just about culture", and you can't really back it up. But what you're saying is that you've found the right people to make certain organizational properties in your business super-clear. And in terms of People Ops, HR, however you wanna frame that person, their duties and what they do, in many ways figuring out early that they are necessary glue. Not just, as you'd mentioned, recruiting the right kind of people, but making sure the people that are there stay.

**Raj Dutt:** Yup.

**Adam Stacoviak:** That isn't exactly culture; I would say that's wise development of a company, but the way that people interact and the respect that engineers and sales have for the necessary sides of the business - that is culture. Understanding the golden goose phenomenon, understanding those things and making sure that you're not stomping on the toes or blaming each other. That is company culture. And it's interesting, we're in this world now with Covid, and you mentioned how much you love to travel - I can only imagine how must you feel not being to travel as much as you were able to before... And then everybody else, too. Was the company always remote, or is this a new thing to be remote? You'd mentioned being remote-first early. Has it always been remote-first?

**Raj Dutt:** \[56:07\] Yeah, it's actually an interesting story, because when we started the company, Torkel, our co-founder, the guy that actually wrote Grafana, he's always been based on Stockholm, Sweden. I was living in New York at the time, and our third co-founder, our CTO, Anthony, he's based in Perth Australia. So from day one we were kind of on three different continents.

**Adam Stacoviak:** Distributed. Yeah, wow...

**Raj Dutt:** And the worst possible timezone alignment... And we kind of had this idea that we wanted to be a distributed company, but we opened up offices in New York and Stockholm. And what happened over the course of our first few years is I'd say we evolved, or regressed even, into being a remote-friendly company, because we had these hubs in New York and Stockholm. And remote-friendly, in my opinion - it's crystal-clear now, although it wasn't at the time - is the worst of both worlds. Because what it means is "Yeah, we have some remote people. It's fine if you're remote", but the decision-making, the watercooler conversations, all the important interactions are gonna happen in our hubs. And if you're remote, you're probably like a second-class citizen within the company, because you're disconnected from the gravity, the core decisions, the core decision-makers.

So we kind of regressed to being a remote-friendly company... And then I actually have to give a lot of credit to Tom Wilkie, our VP of product - we made a very deliberate decision a few years ago, and we said "Well, we're regressing to being remote-friendly. And what we really wanna do is be remote-first." So then we started trying to dehub and basically stop hiring people in New York and Stockholm, and trying to shift the balance much more to be remote-first.

We felt we could solve the problem both by hiring people away from our hubs, but also making some operational and cultural changes. If we were gonna have a meeting in the office, we'd still have it over Zoom... Which was crazy, because "Why do that?" We'd start doing things in asynchronous communication methods, instead of watercooler conversations. We'd start writing more stuff down in shared Google Docs. So we kind of created this -- we shifted the center of mass for employees away from the hubs, but we also changed the way that we worked, to be more remote-first.

At this point, I really don't think the average Grafanista really cares one way or another where they are... So we kind of became truly remote-first. And that's now reflected in our hiring policies, it's reflected in -- aside from the suckiness of the Covid situation, it's kind of business as usual for us. At Grafana Labs no one has to ever come into the office, ever, if they don't particularly feel like it. And that was the way we were operating before Covid.

Some people like coming into an office, and that's fine. Some people wanna be in that environment, some people don't. We have a few people, for example, in France, and we ended up opening a small WeWork there, because some of our employees were telling us that they wanna have somewhere to go to; that's fine. But you also don't have to go there.

So yeah, we've definitely doubled down on remote-first, and I'm a big believer that that is the future of work, particularly for software companies... And maybe especially so for open source software companies, where we're kind of working hand-in-hand with the community, which is also global. We're working asynchronously, we're better aligned with the communities around which our core software is built. We can find the best people, our employees have better work-life balance... Although that's not implicit in being remote-first. You have to take extra care for that to happen. Yeah, I don't think we do it any other way, so I'm really happy that we're truly remote-first.

**Adam Stacoviak:** \[01:00:20.11\] You mentioned regressing, and then being mindful of that; that requires some checks and balances and leadership, to say "Where are we going? How are we doing?" Health-wise, in terms of an organization, when you realize you're regressing and then you made that change two years ago, did you see a dramatic shift back to -- you didn't say productivity was an issue, but I'm assuming maybe there was something in there in terms of alignment with people, personalities, tension, whatever it might be, some read-between-the-lines... But did you notice dramatic change when you regressed, and you noticed it, and you made the change back towards remote-first? Did you see upshifts in certain areas? What changed dramatically?

**Raj Dutt:** I'd say it was a dramatic change, but it wasn't like a sudden change. It definitely took some time to effect that change. And I think the main thing we were trying to optimize for was there was a feeling, a very real feeling that if you were a senior person in Grafana Labs, or someone who was really trying to optimize their advancement opportunities within Grafana Labs, that you were at a disadvantage if you weren't at one of the core hubs. Like if you weren't in New York, or in Stockholm. And you were kind of almost relegated to feeling almost like an outsource or a disconnected part of the company, if that makes sense. And I think that feeling has now completely gone away.

So we always wanted to hire people wherever they were, and we wanted to be very global in our talent search. I think there was a feeling both held by people at the edges, as well as senior leadership, that we were hamstringing ourselves in our ability to do that because of this divide. And I think now that that divide is basically gone. So yeah, I think that we did successfully make the transition back to remote-first, and at this point it really doesn't matter where people are.

People even move. In Covid times we've had quite a few people decide to move around, and that's fine. We were definitely used to working in this environment, but because we were remote-first, we also got the team together a lot. We used to have in-person get-togethers, either company-wide, or team by team, project by project...

The last time we got the whole company together was late last year - or this last summer, I should say - the whole company went to Los Angeles for our annual conference, and we took the whole company to Vegas for a few days after that, and that was tons of fun. But now we've lost all of that, the last 4-5 months, and I think we're really affected. So I don't wanna give the impression that because we're remote-first, we're not impacted by Covid from a cultural standpoint. I'd say in some ways it's the opposite. Because we're remote-first, we're not impacted from a day-to-day standpoint, or an operational standpoint. But those in-person meetings became even more important to happen occasionally.

**Adam Stacoviak:** Yeah.

**Raj Dutt:** \[01:03:46.24\] We used to have onboarding every quarter, where if you joined Grafana Labs, you would be offered to go to either -- to somewhere, whether that was Stockholm, or New York, or London, or somewhere like that, and meet as many people as you could. And we'd fly in other people, other leaders, and we'd have pretty immersive onboarding... And it wasn't for onboarding; it's not to be like "Here's your email, here's how you use Slack." Not at all. It was mainly for social bonding... Like, "Let's hang out."

**Adam Stacoviak:** Right. Connection, the relationships.

**Raj Dutt:** Exactly.

**Adam Stacoviak:** The underestimated things do really matter in teams.

**Raj Dutt:** Yup, exactly.

**Adam Stacoviak:** "Do I actually like you?", you know what I mean? "What makes me like you more?"

**Raj Dutt:** Yeah. It's a lot harder to be d\*\*\* to someone (pardon my French) online if you've met with them in-person and had a beer with them, you know what I mean?

**Adam Stacoviak:** That's right, absolutely. We have a show here on Changelog called Brain Science, and we talk a lot about the necessity of relationship... And that's what it really is all about. We're humans, right? Sure, we're making software, we're building companies, we're doing different things, we're engineering, we're selling, we're CEO-ing, whatever it might be... But at the end of the day, it's about humans. It's about human connection, it's about solving people's problems.

**Raj Dutt:** Absolutely.

**Adam Stacoviak:** Sure, what Grafana does for is a tool, but it's not really just about that. It's about being a useful thing for people. That's really what it comes down to. You've got to double-down on the human touch.

**Raj Dutt:** 100% agree.

**Adam Stacoviak:** Yeah. And it seems even cliché to say that, so I hate even saying it like that, but that's the truth. You have to prioritize the people. That's why we've gotta say it every day, because people undervalue it. They just skip it.

**Raj Dutt:** Yup, 100% agree. And I think it's easy to -- you know, that human interaction is so important, and doubly so when you're remote-first. You need to mix that in, and that's what we really missed the last 4-5 months. We've hired a lot of people since Covid, and not being able to get the teams together and meet the new people has definitely had an impact on culture, ultimately... Because there's this whole group of people that no one's ever met, and it's just different doing it over Zoom.

**Adam Stacoviak:** It's way different. It's awkwardly different, sometimes. Even conferencing... In our neck of the woods, in the tech world, conferences are every day prior to Covid. The hallway track was what it was all about. And no knock against any organization out there doing a conference, by no means, but remote conferences are not the same as in-person conferences, period. Bar none. Because you're missing that touch.

As a speaker going to a conference you're not getting to build your network as much, because you're really just to some degree phoning it in. Maybe you're giving a prerecorded talk - which is great; you're still getting your name out there. There's nothing against that, and we have to do what we can do in our given circumstances. But it's really going back to less about \[unintelligible 01:07:00.29\] that and more about prioritizing the human touch, because we had that a lot. We took it for granted.

**Raj Dutt:** Yeah.

**Adam Stacoviak:** There was OSCON each year, you know what I mean? And going to OSCON - what a big deal that was. Or even KubeCon, and the growth rate of that conference. These are two pinnacle open source cloud infrastructure conferences that were killing it. All Things Open. These are great conferences that are now virtual, and people are not hanging out, hugging, \[unintelligible 01:07:28.08\] beers, slapping hands, getting T-shirts, pat on the backs, whatever. It's just not happening, and it's hard, period.

**Raj Dutt:** Yeah, I think you're 100% correct. We attended KubeCon, spoke at KubeCon every year for the last several years, and we have our own conference, GrafanaCon, every year, that we kind of alternated between cities. We had one in New York, we had one in Amsterdam, we had one in Los Angeles... And this year we cleverly renamed it to GrafanaCONline...

**Adam Stacoviak:** \[01:07:59.22\] Great name.

**Raj Dutt:** Yeah, I have to hat-tip Scott Fingerhut on that one... But we had the venue booked in Amsterdam, we had our speaker schedule all set, we had our \[unintelligible 01:08:12.07\] all set, and last-minute we totally changed it to an online conference.

The good news is instead of having 500 people show up in Amsterdam, we had 20,000 register for a virtual conference, so that's a plus... But that's really the only plus. It just wasn't the same. And the team did a really good job trying to transition it to be a virtual conference... But man, it just -- yeah, I totally agree with what you've just said; there's really no substitute for getting people together, and those hallway tracks, and hanging out after, and building those relationships. It's just almost impossible in a virtual environment, for sure.

**Adam Stacoviak:** Can we dig into that then? That's a good contrast to consider, is the amount of people that will come in-person versus the amount of people that will at least share their information whether they'll show up or not in a virtual setting. So it was like 2,000 in-person, contrast against 20,000 virtually? As a business, what's the upside?

**Raj Dutt:** Yeah, 500 in-person was what we were planning for Amsterdam. It was supposed to be in May. So just a couple months ago I was like "It's gonna be in Amsterdam, one of my favorite cities in the world..."

**Adam Stacoviak:** You were looking forward to that travel...

**Raj Dutt:** Totally. For all the right reasons, of course, Adam. But yeah, so it was gonna be 500 people, and we managed to get about 20,000 registrations; not even close to that showed for any of the live streams. A lot of people watched it on-demand, which was expected. We had some good Q&A on Slack, but that's not at all the same.

We spread out our conference over two weeks. So instead of doing three days, which was jam-packed, like 8-10 hours a day, we've spread it out over two weeks, and did basically a couple of hours a day. It was a learning experience for us, for sure. We'd never really done a virtual conference like that. We actually switched streaming platforms at the 11th hour and ended up streaming it over YouTube, because we were like "Okay, that'll work. That'll scale. This other thing is just not working out so well."

And yeah, we're gonna do it again in October. I was hoping that we'd have a physical conference in October, but that's not gonna happen. So - definitely a learning experience for the team.

**Adam Stacoviak:** I know when I saw All Things Open send an email -- they sent an email saying "We're now virtual, and it's an October conference." Back in May, April even, I was like "I wanna hope that it'll be in-person", but I even called it then. All Things Open - I called it in April - will be virtual. And they had no mention of it.

**Raj Dutt:** I think KubeCon just decided a few weeks ago, or something like that.

**Adam Stacoviak:** Well, I think even if from a government standpoint and a CDC standpoint or a whomever standpoint it's calling these shots that's advising local governments on what to do and how to handle it - even then, it's just a big risk, I suppose. A lot of work goes into an in-person conference. Not that non-in-person conferences don't have a similar amount of work; they're different types of work, and still very hard, regardless.

A lot easier, a lot more conferences are happening because the hurdles of a conference being in-person are down. It's a lot easier to throw a virtual conference than it is a real, face-to-face conference. So many more moving parts; talk about capital-intensive - a lot of capital required. Or at least a lot of commitment, if not a lot of capital involved in an in-person conference.

**Raj Dutt:** \[01:11:55.04\] Sure. I mean, the flipside though - I think it's a lot harder to get sponsors for a virtual conference, you know?

**Adam Stacoviak:** Yeah, that's the truth. That's the thing I'm trying to camp out at. I'm trying to get your wisdom on like "Was it worth it?" essentially. And maybe you can or can't say that, I don't know, but...

**Raj Dutt:** Well, was it worth it - I mean, we didn't really have a choice. So was it worth it to do it rather than not have a conference at all? Definitely. Was it worth it in the sense that it was better than an in-person conference? I don't think so.

The only net-positive, I think, of the virtual conference -- well, it was really twofold. One is we definitely got more registrations than we would have at a physical conference, and then the other point of feedback that we got from a lot of people, kind of tied to the registrations point, is a lot of people said "You know, I really wanted to come to GrafanaCon Amsterdam, but there was no way I would have been able to. I just didn't have the budget, didn't have the visa, didn't have the time off, couldn't make it to Amsterdam and buy a ticket."

The other thing is we've made it free, which made it much more accessible. So the combination of it being free, and it being virtual kind of really widened the audience a lot. That was a positive. But honestly, if I had a choice - definitely physical. So yeah, was it worth it? It was worth it to try to pull off, which there was a valiant effort on our part of doing so, particularly because it was last-minute and we hadn't really done anything like it before. So I think the team did a really good job in making it come together in sort of a shoestring and a prayer, so speak... So I'm really happy about that. But I'm bummed out that we're in this situation and that we couldn't have it in-person in Amsterdam.

**Adam Stacoviak:** Yeah. So about ten months ago, series A.

**Raj Dutt:** Yup.

**Adam Stacoviak:** And we talked about your hires... I don't know - how many did you hire in the last ten months? What did that series A enable you in the last ten months? Where are you going? What is that allowing you to do?

**Raj Dutt:** It's allowing us to really just go faster. Both in terms of the products that we're developing, the investment in open source, our general hiring plans... I think in the last ten months we've gone from about, I wanna say 80 people, maybe 70 people, to about 160(ish) today. So pretty much doubled the company in the last 9 or 10 months from a headcount standpoint.

We're working on a lot of cool projects. We've kind of transitioned from being more than just about Grafana. We're very involved in the Prometheus project, which obviously isn't our project - it's a CNCF project - so I think we're kind of like the... We're definitely a top contributor to Prometheus, which not a lot of people know, but it's part of the whole big tent philosophy... We really wanna make the combination of Prometheus and Grafana really good.

We've launched Loki, we're working on some cool stuff around tracing, which we'll have some announcements about pretty soon... We're trying to make Grafana Cloud a lot better, we're hiring more people on the go-to-market standpoint, we've got some really long-range bets that we're placing, that won't see anything as far as light of day till well into next year... So it's really allowing us to kind of truly be long-term greedy and just invest across the board.

But we think we've got a really good -- you know, back to the window of opportunity. This space is a really interesting space right now. Everyone is building internet infrastructure, and that internet infrastructure is kind of in transition, and observability is a really interesting problem to solve right now, because people are moving their systems, their distributed systems, microservices, whatever you wanna call it, and they're just becoming so complicated and high stakes...

\[01:15:59.13\] And open source is also a really interesting time from a window of opportunity, because we've gone from being like the cheap and cheerful alternative to the rail tools, to now this is where all the truly cutting-edge stuff is actually happening. You look at projects like Prometheus or Grafana - customers are choosing these things not because it's cheaper, it's free, or it's open source, but because it's the best. They're making these decisions not for cost, but because of capability. So we think that that's a really interesting time, and we're fortunate enough that it's never been a better time to be doing what we're doing, so we're trying to make hay while the sun's shining, so to speak.

So yeah, we're just investing across the board, and we're lucky enough to have some good investors who also believe in what we're doing, and support us, and also get out of the way... Or I should say, in some cases support us by getting out of the way, if that makes sense.

**Adam Stacoviak:** Oh, yeah.

**Raj Dutt:** And since the series A, we have a board; we have one board member who's not a founder. So our board is the three founders, plus our new board member, Gaurav Gupta from Lightspeed. He's a product guy, he came from Elasticsearch, so he's got a really good perspective... And we'll actually have an announcement maybe by the time the podcast airs, around some other new fundraising-related news.

**Adam Stacoviak:** Hm. Okay... I like that tease there.

**Raj Dutt:** Yeah. \[laughter\]

**Adam Stacoviak:** Well, I won't hold you to that.

**Raj Dutt:** I'm not sure where this is airing, so I don't know how much I should say.

**Adam Stacoviak:** We have a small backlog, so at least a couple weeks. So if you could say it in the next couple of weeks... It might be three weeks till this is out.

**Raj Dutt:** Alright... Well, then I'll say it now, and if you air it too early, you're gonna scoop our news; but please don't, at least not for a couple of weeks, or two weeks from now, shall we say.

**Adam Stacoviak:** We can schedule it, there's no problem.

**Raj Dutt:** Yeah. Basically, we've just raised our series B, so that's a 50-million-dollars series B... So we're really just trying to accelerate that trajectory even more.

**Adam Stacoviak:** Let's talk about that then. So 24 million ten months ago, 50 million - let's just say today, for a lack of better terms. I'm sure it's fuzzy numbers there, but... Recent. Super-recent.

**Raj Dutt:** Yup.

**Adam Stacoviak:** Why does it make sense to raise more money now?

**Raj Dutt:** I think two main reasons. One is we're really kind of -- I'd say they're both equal in importance. It's not like ordered. But one reason is we're kind of sitting here, looking at the global macroeconomic situation, and there's a lot of uncertainty and potential clouds on the horizon. So for us, this is a way where we can kind of take advantage of the current climate, which is very favorable in terms of companies in our space that are doing relatively well... And really just strengthen our balance sheet, so that we continue to have optionality in the business. We have a really strong position.

Going back to not wanting to make the same mistakes - at Voxel, we were always running out of money, struggling to buy more servers, struggling to make payroll... So the reality is we haven't even--

**Adam Stacoviak:** That sucks.

**Raj Dutt:** Yeah, that totally sucks. That's totally stressful.

**Adam Stacoviak:** That's a drain on culture. All the things you've talked about on this show - it sucks for everybody. It's not fun at all.

**Raj Dutt:** Absolutely. We don't wanna be in that situation again. And the reality is we haven't really had to spend hardly any of our series A. So this just really kind of strengthens our overall position. So that's one reason.

And the other reason is we really wanna invest even more in our community and our products. We've started to build a really good sales team - you know, what I told you about the last year-and-a-half - and we'll continue to build that out organically.

\[01:20:05.25\] The second reason and the other main reason behind this new series B is we really wanna make some big bets and start some initiatives around both open source projects, as well as enterprise and cloud products... And a lot of this won't even be announced for another 6-9 months. Basically, we feel that with what we're doing with Grafana and this sort of composable observability platform -- back to this window of opportunity; there's really a whole bunch of other things that we could be doing within our ecosystem, that we really wanna launch, that will kind of accelerate and hopefully solidify the Grafana adoption story, as well as bring us further into being a multi-product company... Which we've already started to do with things like Loki, Prometheus, worldPing, and other things like that... But we really want to have this complete and composable observability platform, and continue to have Grafana at the center of it, but also be able to do that while putting most of our efforts into open source...

Because back to the foundational element of that - it would be easy for us to basically say like "Okay, now we wanna focus on just building commercial software. We do wanna do that, but we also wanna put most of our efforts into open source, because that's the foundation; adoption and the health of the community is the most important thing to us at Grafana Labs. So in order to do both, we're going to basically need more firepower and need to hire even faster. So those are the two main reasons behind our recent series B.

**Adam Stacoviak:** Can you give me some specifics in terms of how that plays out with one or many of these open source projects? You know, Grafana, Prometheus, Loki... What specifically will the funding enable you to do? Would it put more firepower behind it, more community involvement, more community initiatives, more developer support, more engineering time? How will that actually play out?

**Raj Dutt:** All of the above, really.

**Adam Stacoviak:** All those things.

**Raj Dutt:** All those things, absolutely. The Loki teams, the Cortex teams, the Prometheus teams - they're relatively small teams within Grafana Labs. We've traditionally put most of our engineering resources behind Grafana. But those other things, like Prometheus, like Loki, Cortex - we'll have some interesting announcements around tracing soon. You know, Grafana Cloud... We really wanna invest more on the wider ecosystem, if you will.

So it's really not one thing in particular. It's more on Grafana, scale up on the big tent, wider ecosystem, scale up on empowering the community, investing in the community, investing in open source, also building commercial differentiation, launching new products in our cloud platform that are very different to what we're doing today... It's really about completing the picture from a developer's standpoint. When you want to be able to troubleshoot some of these very complex systems.

Everything from getting an alert at 3 o'clock in the morning - you're blurry-eyed, it's a high-stakes game; something's down, your boss is calling you every ten minutes... From the time you get an alert to the time that you have to look at your metrics, you have to look at your logs, you have to look at your traces, you have to switch between all these disparate systems across different vendors, till the time that you find the resolution, find the problem, update your status page, create an RFO... How did you violate your internal SLOs, what does it mean for your external SLAs... There's all these systems, all this data, all this process that you have to go through, and there's so many different avenues along the way to optimize for that experience and to make that experience really slick.

\[01:24:20.05\] So that's really what we're focusing on. It goes so much beyond Grafana itself. And if you can kind of optimize for that experience across different vendors, do it in a way that's really composable, prioritize interoperability, but also just create a flow, if you will, for that poor developer or SRE. She's woken up at 3 o'clock in the morning; why does she have to have 12 different tabs, and 10 different systems to deal with 8 different vendors? There's so much sub-optimal workflow in that, and we just wanna take the pain out of that, and do it in a way that is interoperable and composable. So we're just kind of focused on that problem, and there's so many areas in that problem that we can innovate on.

So that's the majority of the answer to where we're gonna focus. But then the other part of the answer is -- Grafana itself has been pushed in all these interesting directions by the community, in ways that we couldn't even imagine. And that's the magic of open source. Most people are using Grafana for IT operations, whether it's cloud-native, or legacy IT... But they're using it to run their infrastructure. But we're seeing Grafana used in all sorts of crazy different ways, that are beyond really our imagination.

There's an emergency room system in Tokyo that's using it to track wait times across all the ERs in Tokyo. The German rails system is using it to help with metrics there. There's a community of people who run beehives that are using it to monitor the activity and the weather around all their beehives. SpaceX is using it to help with launch control. So there's all these use cases that are outside of the normal problem domain that we're solving, whether you wanna say that that's industrial internet of things, or it's business intelligence, or whatever...

**Adam Stacoviak:** Yeah.

**Raj Dutt:** So we wanna find those use cases within the community and figure out what the next step for Grafana is, that goes beyond the world that we're in today. And that's the really long-term stuff, that's really exciting. I know Torkel, my co-founder, is really excited about that angle, which is where does Grafana go next? Because there's nothing in Grafana itself that is specific to IT, or containers, or Kubernetes. It is a world-class visualization engine. The IT use case is just the sweet spot that we've found right now. But over a long enough time horizon, we wanna go beyond that.

So those are the things that we're thinking about in raising the series B... And luckily, our existing investors Lightspeed and Lead Edge participated in the series B, the same investors that participated in our series A... So it was relatively easy for us to get done. It was definitely kind of an opportunistic move for us. We're really pleased to have just gotten that done in the last few days.

**Adam Stacoviak:** Well, I'm glad we can ship this show in time to delay, to allow that news to be on this show, for one... And then two, I'm glad that that news came in, so that you can double down on your focus on the foundation of open source and all that you've just talked about there... Because that's awesome.

**Raj Dutt:** Yeah, we're pretty psyched about it, for sure.

**Adam Stacoviak:** \[01:27:49.29\] I'm sure. This is breaking news, and that's super-cool; I'm glad for you on that front. It's even more reassuring, I suppose - back to reading between the lines - that these same investors felt comfortable to come back in, in a relatively short amount of time, with a more sizeable investment, too. And they feel confident in your future, and Grafana Labs' future. That's reassuring from the outside point of view, of like "Okay, something's going right in there." We can appreciate and adopt all that you're doing, and believe in what you're doing all the more.

**Raj Dutt:** Yeah, absolutely. And we're really lucky to have Lightspeed and Lead Edge believe in what we're doing, and share the same long-term greedy philosophy. So we're pretty psyched about that, for sure.

**Adam Stacoviak:** Any closing advice you wanna share with us audience? I know we covered a whole lot, but is there any major themes over this last couple years, or any major things just like "Man, I've learned this lesson, I've got to share this."

**Raj Dutt:** Major theme or advice... I suppose for me it just comes to people. You kind of doubled down on yourself, Adam, and thinking this through... The Grafana Labs journey for me - this is by far the largest, fastest-growing organization that I've ever been a part of. Oftentimes I feel like kind of impostor syndrome, going from 160 people to 400 people, especially given my last company capped out at 50 people. But I think the way you overcome that, regardless of where your gaps of knowledge or capabilities as a founder are is just by making sure that you surround yourself by the right team, especially your leadership team. I feel like that's really the job of any founder or CEO - you really wanna make sure that your core team is the right team, with the right people, in the right spots, to not only give you the advice and the counsel that you need, but to get your company to the next level that you need it to get to.

I think a lot of first-time founders - and I was certainly this way at Voxel - think that they have to know everything, or do everything, or get involved in every detail. That was a mistake that I made at Voxel. What I'm trying to evolve my own MO to be is realize that my role is really to create alignment and to make sure that the right people are in the right spots, and to really be able to -- once you've got that, then that's your main job as CEO, is to create that team, motivate that team, and then basically get out of the way. If you can do that, then I think you're on the right track.

**Adam Stacoviak:** That's a hard thing to do.

**Raj Dutt:** It is a super-hard thing to do.

**Adam Stacoviak:** \[01:30:53.06\] You have to be quite humble -- I mean, that's a humble perspective, and not everybody has that perspective. So I don't know where you learn that at, if it's just school of hard knocks, or bloodied knuckles, or what... But that's why I asked you that question; I don't know what you're gonna say, but that's a good lesson to learn and a good lesson to share, because that humble approach is difficult to 1) understand, and 2) execute on, because it takes a lot of humility to just get out of the way.

**Raj Dutt:** I'll be the first to admit that I violate what I just said on a continual basis, but I think that's the --

**Adam Stacoviak:** It's your North Star.

**Raj Dutt:** Exactly.

**Adam Stacoviak:** That's what I say for myself. One of my personal North Stars is "Work 8, play 8, and sleep 8." And just like you, I violate that often. I don't always get it right, but that's my North Star. That's what I'm trying to get right. So as a CEO, if that's what you're trying to get right, then at least you know what you're trying to do.

**Raj Dutt:** I think North Star is a good way to put it, and I think it's okay if you don't always get it right... And I think particularly in a startup it's not a rule that you should endeavor to always follow; and you're just not gonna be able to follow it, either because you're not gonna be able to resist violating it, or because you need to violate it, or because the company is best served by you violating it. But I think having it as a North Star is definitely good, and that's the right way to think about it.

**Adam Stacoviak:** I will say then, to encap that, when I do violate it, I do it with intention, and purpose, and usually with the season. There's a time attachment to it. I'll do it or I'll allow it for this season or for these particular reasons, and I'm always in check on that.

**Raj Dutt:** Yup.

**Adam Stacoviak:** Because I will let myself violate it, and it's necessary, as you said. Sometimes. But I've gotta do it for the right reasons, and I've gotta maintain that balance of like "If I'm gonna do this, here's the repercussions of it."

**Raj Dutt:** Yup, yup. I think you need to be self-aware about doing it. And I also think you need to do it more the earlier stage the organization is. That North Star should become increasingly bright as you scale the company.

**Adam Stacoviak:** Yeah. Well-said, Raj. Thank you so much for joining me today. Thank you so much for your heart in what you're doing, your focus on this golden goose. I love that metaphor, it's awesome. And thank you so much, more so for sharing your wisdom here today. We appreciate it.

**Raj Dutt:** Yeah, thanks for having me, Adam. I appreciate it. This was fun.
