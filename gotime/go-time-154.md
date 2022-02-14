**Mat Ryer:** Hello there, and welcome to Go Time. I'm Mat Ryer, and I've just pushed to production. Today on Go Time we're talking about caring about HealthCare.gov, and actually, I think why simplicity matters, especially so as the stakes get higher; apologies to any vegans.

On today's show we have Johnny Boursiquot... Hello, Johnny.

**Johnny Boursiquot:** Hello. I'm a carnivore.

**Mat Ryer:** Fair enough. You don't have to state your preference, but you can; you're welcome to.

**Johnny Boursiquot:** Oh, okay. Okay.

**Mat Ryer:** We're also joined - it's Jerod Santo, from The Changelog. Hello, Jerod.

**Jerod Santo:** That's correct. Omnivore... I'm an omnivore.

**Mat Ryer:** Great. Does that mean you eat everything?

**Jerod Santo:** Just anything, yeah.

**Mat Ryer:** Yeah, great.

**Jerod Santo:** Happy to be here. \[laughter\]

**Mat Ryer:** You don't care how big the menu is, you will go to that place.

**Jerod Santo:** \[04:04\] That's right. Supersize Me.

**Mat Ryer:** Yeah, omnivore. And we're also joined by a special guest today, who you may remember from a lightning talk back at GopherCon 2015. It's Paul Smith. Hello, Paul.

**Paul Smith:** Hi, everybody! Glad to be here.

**Mat Ryer:** Welcome. thanks for joining us.

**Paul Smith:** Yeah, I'm excited to talk with you all. Thanks for inviting me.

**Mat Ryer:** So you've got a very interesting story, but maybe before we jump into it, you could just tell us a little bit about your technical background. How did you first get into computers in the first place?

**Paul Smith:** Sure. Well, I think it's actually somewhat of a common story for boys growing up in the '80s - getting a Commodore VIC-20, a Commodore 64 plopped in your lap... Sadly, all too not common for girls in that time, which is something of a tragedy, but... Yeah, typing BASIC programs in, machine code programs out of magazines, spending a lot of time with my Commodores... I think we had an Amiga at one point, too... And then in high school I got an internship in the early '90s at a local laboratory. They were studying -- a biology laboratory, and they actually had a mathematical bend to it. So they were studying DNA protein binding sites, and the information conservation that occurs there when protein binds to DNA... And kind of molecular machines kind of thing. Anyway, that was my first exposure to Unix, and I wrote Perl, and C, and also the nascent web was just getting off the ground around that same time - '94, '95. So I've been basically typing into computers most of my life.

**Mat Ryer:** How much of that's been doing Go? How much actual Go code do you write?

**Paul Smith:** Well, I first learned about Go as soon as it launched in 2009, and it seemed immediately appealing to me. I had been writing Python primarily for work as my job. At that point I had been working professionally for about ten years, mostly web application development. Pretty standard stuff, of that era especially - so relational database-backed web applications; and I loved Python, and I still think Python's a great language, but I remember that Go felt really good right away. It felt like something -- and I remember I had worked with C at that laboratory, and it kind of like rekindled some of those feelings, too.

I had also pushed up against some of the limits of Python in my work, especially with performance and scaling... Yeah, it just immediately felt pretty good. I didn't really have a chance to work professionally with Go until a few years after that, but I would say I've definitely been using Go and a fan of Go since the early days.

**Mat Ryer:** So were you working in small startups then, originally? Because I think there's something interesting about the mindset of startups and what you have to do in a startup environment. It's quite different, it can be a very different situation than bigger enterprise companies, and things... And I think that probably plays a part a little bit in this story, doesn't it?

**Paul Smith:** Yeah, it does. So my first professional web development job was working for a small non-profit here in Chicago... We were an environmental non-profit, and I was basically one of the few web developers there, so I had a lot of freedom to pick and choose technologies. At the time I remember using Cold Fusion, and PHP, even some early Ruby on Rails in the very early days of that stack... But I helped co-found a startup with the co-creator of Django, the Django web framework, Adrian Holovaty, in 2007, called EveryBlock. EveryBlock was a hyper-local news startups. So the idea that we would go out and collect information on the web, in different sources, about news that was happening near you, on your block, in your neighborhood - you wouldn't care about it if it was across town, but if it's happening on your block, you super-care about it a lot.

\[08:17\] So since obviously Adrian was the creator of Django, we used Django for that. So that kind of made the choice easy, but I've definitely experienced in my time that it was an interesting set of factors that lead to you picking a different technology or a different stack... But for me, it's been about expressiveness, how productive I can be in it, and does it perform well enough. And Django, Python checked a lot of those boxes, for sure, and EveryBlock went on to be a pretty successful, although relatively short-lived startup.

**Mat Ryer:** Yeah, because you sold it to MSNBC, right?

**Paul Smith:** It was acquired by MSNBC in 2011. It was actually part of NBC News... Because we had that news angle. Nowadays people take for granted things like Nextdoor, and Facebook, local news about their neighborhood. So we were kind of one of the early pioneers of that... And we sold the company, and kept working on it for a little bit, but... We did some interesting things on EveryBlock. In fact, one of the things I'm most proud about is we built our own map stack.

At the time, if you remember back in 2006-2007, JavaScript engines and browsers were starting to get faster, Google Maps popped on the scene, and it was suddenly like "Oh, you can do these native desktop app-like things in your browser for the first time." And in fact, EveryBlock came out of this idea of sort of like a Google Maps mash-up of taking Google Maps and then using its API and slapping data points on it.

And when we started the company, we thought it would be great, since that's gonna be such a central part of this -- you wanna be able to look at a map of your neighborhood, drill in to your block, see where news is happening... And when I say news, I'm talking about maybe your block is mentioned in the news, or maybe a building license has been issued, or a restaurant inspection, or things like that. Public records. Crime information. We would aggregate all that and put that onto a map.

So Google Maps was great, but we wanted to have control over the look and feel, and users experience... So we built a map stack from the ground-up using open geospatial tools at the time. OpenLayers, Mapnik, some other tools like that, and then kind of combine that with a Django app server we were using to pull the data out of the database, and then present that on the browser.

We worked with a great designer, Wilson Miner, to kind of come up with our own palette and design for the maps themselves, which - I thought they looked really beautiful. So it was a way of visualizing the data. It was a pretty interesting accomplishment.

Now you've got things like Mapbox, and there's just a lot more flexibility when it comes to the sort of in-browser custom map and geospatial experience.

**Mat Ryer:** Yeah, there's loads of SDKs and things that we can just use... But I guess when you didn't have that, sometimes you do have to build things.

**Paul Smith:** Yeah.

**Mat Ryer:** That's a cool one.

**Paul Smith:** We just kind of figured it out... And again, because we were a startup, we could experiment and help differentiate ourselves.

**Jerod Santo:** I'm trying to map in my mind the path you would take from a startup to government contractor. I'm curious if you'd take us on that walk.

**Paul Smith:** Yeah. So after EveryBlock I found myself working to support President Obama's reelection campaign in 2012, which was headquartered here in Chicago. There was a big technology effort around the campaign. For the first time -- well, technology had been a part of his original campaign for Office, but they really brought it in-house; we were gonna build a lot of our own tools, the software that we use not just for the website, but how we interact with our volunteers, how we reach out to potential voters, how we organize and coordinate the campaign... Writing custom software in-house.

\[12:19\] So I was the deputy director for technology at the Democratic National Committee during his reelection. So we were supporting the campaign, and coming up with all these tools, and building the technology to run the campaign. Actually, that was one of the places where I first had an idea that Go could really do the job at scale. So this is leading to how this all wound up in the government, but we were building tools to support the final days of the election, when millions and millions of people were gonna turn out. At the time, early voting and mail-in ballots wasn't quite as popular as it is now, for obvious reasons... But we were building tools to help with that get out to vote effort, so mainly people looking up their polling place, "Where do I go to vote?"

So that was a very popular page on the BarackObama.com website, and we decided to make a key component of that sort of back-end service that was looking up, kind of translating from your home address into the database of polling locations, where you actually go to vote... There was a key component there that we decided to use Go for to do the middle layer. Because we knew it was gonna be high-volume, we wanted low-latency, and it performed fantastic. I knew Go at that point was something that you could put into production on mission-critical services. It gave me a lot of confidence about the language itself.

So the president was reelected, obviously, and sort of how I get involved in government technology is about a year later HealthCare.gov is about to launch... And just for your non-U.S. listeners, healthcare in the United States works a little bit differently than it does in a lot of countries. It's mainly about health insurance that your job provides you. That's the main way that most people get health insurance. And if you're older, you can get on something called Medicare, and if you're poor or have a disability, you can get something called Medicaid, Medicare and Medicaid being government programs... But by and large, most people get it through their employer.

Well, the president and Congress passed a law called "The Affordable Care Act" that did two big things. One, it created a new marketplace for insurance, so people could go buy insurance on this marketplace. It had subsidies, so you could afford it, and there were rules about what the insurance could cover. So it made sure that it wasn't just junk insurance if you actually showed up and needed to get a procedure or something like that, to see your doctor and go to the hospital; it would actually cover those things. So it was a regulated market, and it expanded the Medicaid program, the program for the poor and people with disabilities.

So it did those two big things, and then HealthCare.gov was the way that they were primarily going to deliver it to people. And the president talked about wanting to have this consumer, Amazon-like experience for getting health coverage through the website. So that was the aspiration.

**Johnny Boursiquot:** But... \[laughs\]

**Jerod Santo:** But... The plot thickens.

**Paul Smith:** So October 2013 rolls around, and the site launches and it's immediately clear that it's not working. It's in the news, and people were talking about it. It's kind of all anybody is really talking about. And the folks that I worked with on the campaign, that technology team that I talked about, were texting each other, back-channeling, like "What's going on? How did we get it so right on the campaign side, but when it came to this really critical part of governing, how is it going so wrong?" And we were brainstorming "What could possibly be going wrong?"

\[16:08\] We didn't really have visibility into it, nobody really did... So I get a call in a couple of days after that... This is like mid-October 2013. It's from Todd Park; he was at the time the CTO of the United States. So he works inside the White House as the chief technology officer of the United States... And they're putting together a team.

Basically, they want to get some outside folks who have technology experience, and figure out what's going wrong, because they themselves didn't know what was wrong with the site. They were asking the people who were working on it, the contractors, the government agency, and they didn't know; they couldn't get that information up to the White House, believe it or not.

So I said yes immediately, and there was a small group of us that joined Todd. I'm talking single-digits of people.

**Jerod Santo:** This is like The Avengers.

**Paul Smith:** You know, people called us the Tech Surge, because that's how it was characterized to the media...

**Jerod Santo:** Did they call you on a red phone, like "We need you. Report immediately"?

**Johnny Boursiquot:** And instead of Mjolnir you show up with a keyboard? \[laughter\]

**Paul Smith:** I mean, honestly, there's the kind of cliché moment in movies where it's like your country -- I mean, it really felt like that, like your country needs you. It felt like that, because we knew what the stakes were. The stakes were very high, and we could see this thing kind of failing in real time.

So yeah, I said immediately yes, and the very -- I think next day, or maybe it was the day after, I'm in front of the West Wing of the White House at six o'clock in the morning, meeting the other members of this team that's been put together... And it goes from there.

**Jerod Santo:** So y'all didn't know each other.

**Paul Smith:** Well, some of us knew each other from the campaign. That's kind of how the connection was made to "How are we gonna put this team together? Well, let's start with the people who did a good job on the technology of the campaign, and then we'll go from there." So I knew one other person on the team from the campaign, but we were all relatively new to each other. Our backgrounds were software engineers, or product managers in technology companies, or just kind of in this broader Silicon Valley startup - although I hadn't worked on a Silicon Valley startup myself, but just that idea of private sector Silicon Valley startups... That was the kind of tech talent and experience that was being drawn from.

**Johnny Boursiquot:** So this team is brought in, the rescue team, The Avengers, if you will... What happened with the other team? Things were going wrong... So generally speaking -- I have this idea in my head (a crazy idea) that if something is going wrong with the project, you go to the team, and you start asking questions, "Hey, what's going on? Can you fill me in?" and you give a chance to the team to react, and come up with solutions etc. Things you might expect to do at any other organization. But it sounds like this team is brought in, and the team that actually built the tech just gets jettisoned, and they're gone... So you just get handed this thing, and they go like "Fix it"? What was that transition?

**Paul Smith:** Well, we didn't really know... So this is a really important part - the team that built HealthCare.gov was still there, and from what we can understand... I think some important context here is -- just remember how much pressure there was every single day on this thing. This signature, political thing. It's literally on the news every single day. We're walking into the buildings where this is going on, and it's on CNN, in the lobby, on the big, flat panel screens.

\[20:05\] The pressure was intense. And the people who were working on it, who had built it - because we didn't build it, we were just showing up there to kind of figure out what was going wrong - they're still there. The problem was -- well, in some ways they didn't know what they didn't know, and I'll get to that in a second, what I mean by that.

So they didn't quite know how to fix it, and they weren't doing the things that they needed to do to get the right kind of information up to people like the president, people in the West Wing, the White House, who were trying to operationalize this and try to understand what was wrong and communicate, try to prioritize how it would get fixed. They weren't doing the right sort of things that -- so for example there wasn't monitoring. Like, there was, but it wasn't accessible; it was maybe hidden behind a VPN that some people had access to, but it was really hard to figure out "Is the site up or down? What parts are up or down? What is the performance degraded, what's the baseline?" So that didn't exist. That's kind of problem one.

**Mat Ryer:** So they didn't have any visibility into really what was going on.

**Paul Smith:** There was no visibility. Or there was, but it was so compartmented off, and for all intents and purpose inaccessible to people who were needed to make decisions from that information.

**Johnny Boursiquot:** It sounds like a cultural aspect of things there too, but... Yeah, keep going.

**Paul Smith:** Yeah.

**Johnny Boursiquot:** So what was next?

**Paul Smith:** What I was saying about not knowing what they didn't know - if I had to sum it up, the fundamental problem with HealthCare.gov as it originally launched was they built the wrong thing. So they had the wrong model of what they needed in their heads when they architected and designed and built the site. What I mean is what they needed to launch was high transaction, consumer-like web technology... Like Amazon, or like a piece of consumer technology - lots of people concurrently using it, you want low latency, you want a good user experience... It's transacting a lot of important data, so make sure you get that stuff right; good data integrity... All these sorts of things. But fundamentally, a good consumer experience, which is the site interacts with you well, responds well...

But what they built was enterprise software. They architected a big, complex machine that had enterprise components that maybe work well if you've got like an analyst sitting at their desk, and maybe there's 12 concurrent users ever using this thing; maybe that works fine. But those were the building blocks... And then deploy that into a data center that didn't have elastic scaling. You couldn't add capacity easily.

**Jerod Santo:** Was it merely scale that was the problem, or was it that it didn't actually work the way it needed to as well?

**Paul Smith:** It both was the wrong conceptual model for a transactional website, like it needed to be; the wrong model. They architected the wrong house.

**Jerod Santo:** Right.

**Paul Smith:** And then it couldn't scale. So you could potentially use scale, you could throw resources at it to kind of overcome those limitations... But the design of it made that really hard. And some of the physical realities. We take for granted we can spin up a VM in AWS, or Google Cloud, or Azure, or whatever it is. The government was not ready for all that stuff in 2013. So HealthCare.gov was deployed into a data center that -- you know, they had VMware, they had some tools like that, but fundamentally, there were racks of servers that were like "These are the HealthCare.gov racks." And that's it. And like a SAND attached to it for network storage, and things like this... But like I said, when that traffic starts flowing in and the individual components are not architected in a way for low latency and responsiveness, you start to get these bottlenecks, these pile-ups dogpile, there's not good caching... So all those components get strained and stressed, and they sort of cascadingly fail.

\[24:12\] And then on top of all of that, the team that was building it was - they were running through the tape. They were still building things. They were exhausted. They were not communicating well across teams. So they just had this big, big, complex thing that wasn't quite the right shape for what they needed, and it wasn't in a physical place where you could just turn up the horizontal scaling knob... And then there was just this lack of communication and coordination.

So yeah, we walked into the situation on day one, honestly thinking "Oh, maybe we'll be here for a couple of days, give them some ideas of what to do next..." Little did we know, we were gonna spend the next 2,5-3 months of our lives basically seven days a week to get this thing turned around... Because we knew that's what it would take, given what we walked into.

**Break:** \[25:09\]

**Mat Ryer:** So were these people used to building government websites with relatively low traffic, and they usually just -- like, manual forms are turned into web... We have that same here local government especially; they don't feel very modern. Is it just literally that, that the experience of the people building it was just for those types of systems, and they'd never really encountered a situation like this sort of high-throughput situation?

**Paul Smith:** Yeah, I think that's exactly right. Basically, when time came to build HealthCare.gov, the way government contracting works is you sort of work with government contractors. You don't really just go out and contract with Google... Although Google does have some government work; but that's not how it would normally work. You would normally reach out to these companies that have historically worked with the government, and government is their main customer.

\[27:55\] And yes, so for the ten years or twenty years prior to HealthCare.gov, the kinds of companies that were sort of bidding on the HealthCare.gov work - their main experience was with building those more enterprise software stacks, and they didn't really have the experience of that consumer web, that at the time, in 2013, was becoming more common and more of a commodity. We were understanding about memcache, and how you scale up an application, how you deliver a good experience in AWS... It was becoming more and more common. That experience and expertise hadn't made its way over to government.

**Mat Ryer:** Yeah. So there's something else about the way of working like that, in these older companies, or bigger companies, with all this architecture and hierarchies, and things - often, you end up isolating by functionality, don't you? So you end up having database people separate from application or business logic people; it's all kind of divided up like this. So that's hard, to have that kind of coherent idea about anything, I find anyway.

And when you think about then having those requirements that are written in stone and written in law often, which you can't then deviate from, it kind of sucks out a lot of creativity. In the startups world, for sure, people are more used to being agile... And really, out of necessity, because we don't really know what we're doing; we just admit it. Whereas in enterprise you can't admit that you don't know what you're doing, so you have to sort of plan everything out in every detail, and then your hands are really tied. Did that play a role, do you think, in this?

**Paul Smith:** Yeah, for sure. What I would say about that is - I think it's okay that government lags behind the private sector in the startup world when it comes to technology... Government is not where you wanna be taking a bunch of risk, and trying out the latest web framework... I mean, maybe you could play around with that a little bit, but in the main, you wanna be a little bit more conservative; let the startups take the risks and figure out what's the next hot tech stack, and then hopefully that trickles into everything else.

Your point about the division of labor is a really important one, because this thing was huge... And for what it ultimately was, which was -- and maybe it's helpful if I just describe HealthCare.gov really quickly, like what it was actually meant to do... The idea is you first go to HealthCare.gov, you sign up for an account - which already should tell you something. Like, if you go to Amazon, you can browse and add things to your cart, and then if you need to create an account at the end -- it's the funnel; you wanna bring people in, and you don't wanna push them through the hardest part of the funnel, which is signing up. That can be a laborious, and kind of get you off the game. In this case, you just wanna look for health insurance.

So we put you through the narrowest part of the funnel up top... So you sign up, and then you have to apply. Apply means with all my personal information about me and my household, am I eligible to buy this healthcare with this subsidy? Or maybe get Medicaid, the expanded version of medicaid. Okay, so there's this application part. And that involves -- there's some business logic there, looking up rules, database interactions a little bit... And then you get to the place where you can actually browser health plans. That's basically a database of plans, with information about their premiums, their copays, their deductibles, the things they cover, what regions of the country they cover, things like that.

**Johnny Boursiquot:** All the things you should have seen first... The shopping part, the browsing part.

**Paul Smith:** Yes, exactly. That's right. You have to fight your way through Mordor, and then you get to the Shire, instead of the other way around.

**Jerod Santo:** Well, the Shire is here. We have socialized healthcare. \[laughter\]

**Paul Smith:** Right, exactly. We used to joke on the rescue that if we were the healthcare.ca, it would just be like "You have healthcare", and that's it; static page. Anyway... \[laughter\]

**Mat Ryer:** \[32:02\] Yeah... Much easier tech. That's a good reason to do it, if no other.

**Paul Smith:** And I have to say, I personally believe we should have affordable, universal healthcare in this country; I think it's a right. I'm really proud of the Affordable Care Act for moving us closer to that goal. It expanded coverage tremendously. What's what was so important to us, and why it was critical that we worked so hard to turn it around, was because we didn't wanna go backwards. We didn't wanna lose 20 million people covered with healthcare; we wanted to lock that in, although now it's up for...

**Mat Ryer:** So it had a kind of political imperative for you, along the thing that we all have about wanting to make the tech work.

**Paul Smith:** Right.

**Mat Ryer:** Did you also have that sort of personal political motivation as well?

**Paul Smith:** I mean, absolutely... Just for myself -- and I don't think that this is a prerequisite for somebody who believes the government should work... Government as a function of something that we do collectively together. You don't have to believe that President Obama was a good president, or that you worked on his campaign as a prerequisite to have worked on the HealthCare.gov rescue. That was an important aspect for me, but I will say that we were hearing all the time -- so the Affordable Care Act was already the law; HealthCare.gov was sort of the delivery mechanism.

But we are hearing all the time from people for whom the law had already made their lives better. They could stay on their parents' health insurance longer, until they were 26, or they couldn't be denied coverage because of a pre-existing condition. Those stories were filtering up to the White House, and then down into the team...

So it's visceral. It's people's lives, and you have this almost direct connection to them... So yeah, when you're flagging a little bit, it's like -- you know, you've worked all day, it's nine o'clock on a Saturday and you'd rather just be done... It gave us all that extra little bit of like "Well, we can't really slack off here. We have to take this over the finish line." So yeah, that was definitely an important part.

I wanted to go back and say that the team that we encountered -- so we were talking a little bit about how there was some team that built it, and this is a combination of government contractors and government agency folks... Our mission and our belief as a team was to have high EQ first... Bring our high IQ about the web stack, but we weren't there to blow anything up. There was six or seven of us at the beginning - we weren't gonna rewrite HealthCare.gov in a couple of weeks, or whatever. We needed them to succeed.

So really, what we did more than anything was point the way to "Here's what this thing should be doing. Here's how you know you're on a path to success incrementally, by adding monitoring, by having a process by which we sort of prioritize bugs and defects, and tackle them in sort of a reverse order of their impact... And here's what the indicators of a successful, high-traffic website look like, and how we can move closer in that direction."

So really, our innovation, if anything, on the rescue itself was bringing -- one of our team members was Mikey Dickerson, who was a site reliability engineer at Google... One of the early people at Google who kind of helped create that culture... Bringing some of those ideas to government. So having a daily stand-up where all the stakeholders could talk about the technical issues, and we could coordinate and communicate and prioritize and plan, which - none of that was happening before we showed up on the scene.

So it created a sense of urgency, it created accountability, which was good... And not just like finger-pointing or blame, but "Hey, we really need you to do this thing, and it's really important, because we need this bug to be fixed", or whatever. And people really rallied to that. So we wrote very little code, although we did write some Go code, that turned out to be pretty load-bearing.

**Johnny Boursiquot:** \[36:11\] Yeah, let's get into that a little bit. So what is the extent to which Go played a role here? It sounds like there was some immediate impact derived out of the involvement of Go, and I'm curious to hear all the different layers and where you got a chance to involve Go in the rescue.

**Paul Smith:** Sure. So the kind of -- I'll try to put you in the mindset of where we were in late November of that year, which was... We had a deadline that we were working towards - end of December. So if you were an American and you wanted use HealthCare.gov, you needed to have signed up by December 23rd to be covered for the subsequent year. So that was sort of driving everything we were doing, that deadline... In the sense that people may have left HealthCare.gov, they tried to use it in the early days and it was a bad experience, they couldn't get on, they had problems, and they went away... But through the media and through other signals, and just the knowing that this is the deadline, a bunch of people were gonna come back in December, all at once. So we had better have this thing be able to handle that surge of traffic.

So everything we were doing was sort of oriented around that. It's how we prioritized what we were gonna work on. So through November we had made a lot of improvements... I'm talking about things like database configuration tuning. Don't have long timeouts on your connections when you need to recycle them, so you can let more throughput through. Things like that.

So we were doing a lot of that, there was a lot of application-level logic fixes, and the site had gotten a lot better. But we knew that when traffic really peaked, and for example the president would come out with a tweet, or something, or he would talk about it on the news, and there'd be this surge of traffic to HealthCare.gov, the site would fall over.

We knew that we weren't quite there yet, so we started to think about "How do you manage that peak demand?" One of the ideas we had was just smoothing the curve of that peak demand. So the peak is in the middle of the day. If you can flatten the peak and then have it spread out over more hours of the day, you reserve some room at the top to keep the site operational. So our strategy was "Let's use some sort of mechanism by which we can essentially shift people in time." So if you're coming to the site and it's a little overloaded right now, we'll invite you back later when the load is less. That's where we came up with this email queue, essentially.

**Mat Ryer:** I thought you meant transport them through time... Because that's easier than solving the scaling issues. \[laughter\]

**Jerod Santo:** Fly them somewhere.

**Paul Smith:** Probably, yeah. Probably a miscalculation on our part would have been an easier route to solve the Schrödinger equation, or something like that.

**Mat Ryer:** Yeah... \[laughs\] So you'd say "We're busy now, but here's a ticket. Come back at this time or between this time", or something like that.

**Paul Smith:** Pretty much exactly that. So - super-simple idea, but we were trying to think of creative ways to just keep everybody from trying to click Reload on the site at the same time in the middle of the day, and nobody have a good experience.

**Jerod Santo:** What I like about that idea is it's pragmatic. It's not perfect, it's a compromise... I mean, it's not cool to be like "Hey, our website's busy. Come back later." That's not what you would want to have to do...

**Paul Smith:** Super-not-cool.

**Jerod Santo:** ...but it's way better than the alternative, which is like everybody at this time of day is just not getting what they need. So it's very pragmatic.

**Mat Ryer:** Yeah, Amazon's never said "Come back this time." It just said "Put your credit card in here right now."

**Jerod Santo:** That's right.

**Johnny Boursiquot:** You can only pull off this whole ticket-based, come-back-later thing for something that people actually really need, and they don't have a choice about.

**Jerod Santo:** Yeah. Captive audience.

**Paul Smith:** \[39:57\] That's the thing... If you're trying to sign up for healthcare for your family, you're sufficiently motivated to keep trying. You're gonna come back. Yeah, so that's what we did. But here's the thing - we're still operating in this environment of this complex site and data center, which - I didn't even talk about how difficult it was to even just deploy code. That was a high-risk endeavor, just to do a deployment. Just to change the code or change the configuration was very high-risk.

**Mat Ryer:** That's a terrible one, actually... And I even see some teams working on far less important tech fall into that same problem, where you're either too scared to change and deploy, or sometimes it is just really hard to do; there's lots of process or lots of things that have to happen. And yeah, there's something, again, about being able to be iterative and quick, because you can be sort of opportunistic and pounce on things; you can be more agile (the lower-case agile).

**Paul Smith:** Right. It was a nervous-making event every time we changed the site, whether it was new code, a configuration change... We actually had static logic in a business rules engine; I don't know if anybody is familiar with these things, but they're like basically outboard brains with if, then, else statements, that had their own lifecycle of change, and very complex... So yeah, it was just not a good environment in which to introduce something like "Hey, this emergency email queue."

So what we did was we just -- we made the case that "Hey, we're gonna requisition these two servers over here that have nothing to do with anything - they're not part of the data center - but they're within the same kind of like general security boundary as the rest of the thing... And we're gonna run our own code over here." And then at the CDN level we're gonna route everything past HealthCare.gov/emailqueue or whatever; we're gonna route that to those servers.

So the rest of the infrastructure stays the same, we don't touch that, and if our thing blows up, you can just get rid of that route and it's fine. So we decided to write this thing... We had a couple of design decisions at the top, which was this thing had to be dead simple... Because we were gonna be the ones to develop it, and we were already sleep-deprived, and dealing with a hundred different things... So we didn't wanna add more complexity than we absolutely needed to. It needed to be dead-simple to operate, for some of the same reasons... And we wanted something that was going to be easy to deploy, easy to operate, and then easy to kind of get people back to the site. So what we came up with was basically just a loop, a Go thread or goroutine that would pull off a JSON request from the website - a simple form in the website that we injected with JavaScript, that grabs your email and a couple of other bits of metadata - and then we just wrote it to a file, and we did that atomically inside of a lock... So literally, all this traffic is just flowing into these files, just text files, that we're just like appending rows to... Because we didn't wanna mess with the database and separate processes... We just wanted a process, an OS process that we had control over, that we could use text processing tools on the backend to do the actual email send. So that's what we did.

So we just collected people's emails all day, and then when we saw the load dip under the threshold that we thought it was safe, we would do these sends to invite them back, with a special code that let them by-pass the waiting room if that was still a thing... And we brought them back.

I should mention that we had like this throttling mechanism that essentially dialed in whether you got the email waiting room, or if you could go straight in through the site. So it was this sort of like probabilistic thing that was like a function of the load on the site at the time.

**Johnny Boursiquot:** That sounds really low-tech in a good way... No more than is needed.

**Paul Smith:** \[44:04\] It was the least clever thing we could come up with. If I have to convey some life lessons here, going back to just that last point about deploying code, I think one of the things you wanna do as early on in an endeavor, a project, a startup, a new project, whatever it is - you wanna exercise that path to production as early as you possibly can... Even if it's just putting a Hello World out there, it exercises your DNS, it exercises your hosting, it exercises your CI/CD pipeline. You wanna do all of that early, instead of finding out when you're ready to have a big publicity campaign that you forgot to tell so-and-so to turn on auto-scaling, or something like this. So that's lesson one.

The other lesson is like the higher the stakes, and the bigger the audience maybe, the less clever you wanna be... Because when things break, they break non-linearly. They don't break in just simple, straightforward ways at scale like that. They kind of catastrophically break. And then you have this added pressure to restore service... So you wanna make it as easy on yourself as the person who's in operations to recover... And the best way you do that is by not being too clever while you're building the software.

**Mat Ryer:** Yeah, I think that's great advice.

**Paul Smith:** Easier said than done, but that's kind of a good rule of thumb.

**Mat Ryer:** Good goal, yeah. I like that things break at scale. That's a good lesson.

**Paul Smith:** Right. They kind of splinter out in ways that are hard to predict... Especially when you're talking about a distributed system with a lot of components, cascading failure is a real failure mode that is hard to reason about in advance.

**Break:** \[46:01\]

**Jerod Santo:** So what was the total time that you were on this project? When did you feel like you could call it quits, like "Well, we're no longer needed here. Go back to regular life"?

**Paul Smith:** Well, I'm looking at my watch... It's been seven years and...

**Jerod Santo:** Oh, you're still on it? \[laughter\]

**Paul Smith:** My initial involvement was through that first period of time, through that deadline of December 23rd, 2013 (I think it was). That rescue team kind of grew and contracted over the next several months, because there was a final deadline in 2014, which was March, something like this... And so I stepped away from that. But the experience was so searing... What I mean by that is having come from that campaign, having come from a startup community, and then seeing this piece of critical infrastructure... Because I think the right way to talk about HealthCare.gov, or any kind of government digital service, whether it's a website, or something you interact with to get either a service or a benefit - that's critical infrastructure. It's a form of infrastructure; it just happens to be through digital channels.

**Jerod Santo:** For sure.

**Paul Smith:** \[48:07\] It's unacceptable to me that somebody could not get their healthcare because a website didn't work. There's something so viscerally wrong about that. We know how to make websites work, right? We know how to make websites scale, we know how to have good user experiences... It is unacceptable, so I felt that really viscerally. And it's not just about the technology scaling too, from the technology hardware and software perspective. It's also about -- you know, user experience can be... An interface, the language of the site, the design can also be a way to kind of disenfranchise people, or keep them from achieving their goals. So that has to be a consideration as well. But that visceral feeling...

So my co-rescue team partner, Greg Gershman, who I met outside the White House that first morning - he was also a software engineer, had been a presidential innovation fellow, so that's how he kind of came into the whole thing... We looked at each other and were like "We should really start a company. We should start a company that can bring the knowledge and experience that we have about developing modern digital services - web applications, websites - with great customer experience, great user experience, and offer that to government, and say "This is a better way of doing the things that you yourself are saying you wanna build, but you don't have the talent and experience to do it." So that's what we did.

We called ourselves Ad Hoc, because we called ourselves the Ad Hoc team during the rescue... Because when you're in a meeting with a bunch of government agencies and contractors, you go around the room and announce who you're with... And since we were kind of assembled just Avengers style, like you said, one of us said "We're the Ad Hoc team", and that kind of stuck. So in an homage to that effort, we called the company Ad Hoc. Our first customer was CMS, who is the government agency responsible for HealthCare.gov.

**Mat Ryer:** Around the table you're like "We're the Ad Hoc team", and no one's interested, and you're like "We're actually from the White House." \[laughter\]

**Paul Smith:** Well, you know, that was the thing - we didn't wanna bigfoot our way into the situation like that, because that's a way to get people to cease up... And we wanted them to open up to us, and we wanted to show them we were in the fight with them. We weren't just gonna point fingers and be gone the next week. We were there...

So yeah, people knew we were from the White House. Word gets around in an instant. But we did everything we could to show "Hey, we're just part of the team. We just wanna get this thing to work."

**Mat Ryer:** Right. That's great.

**Jerod Santo:** This is why Mat didn't get the call.

**Mat Ryer:** Yeah, I'd be like "Hi. I'm just like you, although I did arrive in a motorcade.. \[laughter\]

**Paul Smith:** The Chief of Staff at the White House told me not to screw this up, so... Don't screw it up. \[laughter\]

**Johnny Boursiquot:** No pressure.

**Jerod Santo:** Yeah...

**Mat Ryer:** That's what Jerod says to me at the start of these shows...

**Jerod Santo:** That's right.

**Mat Ryer:** It doesn't work... Did it work for you though? It kind of worked out for you, didn't it? You didn't screw it up.

**Paul Smith:** Well, I think we felt like -- you know, there was this question of "Should we scrap the site?" The question was being asked, "Is this thing recoverable?" and I think there was a sense that "Yeah, maybe they built the wrong thing, but we can make it good enough to get through this deadline..." But the challenge is really going to be that people problem of communication, and prioritizing, and knowing what the right fixes are from our experience of having worked on the high-traffic things... So yeah, all of that pressure was there to help keep us focused. It's hard to ever say failure is not an option. You just don't quite invite that into your head in the moment.

**Mat Ryer:** Hm... Well, I usually don't like it when I hear managers of teams saying that... Because in a way, you need to be free to fail in an environment where you're building things... But yeah, sometimes it's just "Yeah, we actually can't fail on this one. It's just too big a deal." That's really interesting, to hear that perspective.

Well, it's that time... We're gonna do Unpopular Opinions!

**Jingle:** \[52:37\] to \[52:53\]

**Mat Ryer:** So who would like to put forward our first unpopular opinion of the evening?

**Paul Smith:** Can I go first? Because I don't know what the history of Unpopular Opinions on this show is... So I wanna make sure that mine is like -- you know, it's like when the figure skaters go first in the order, so that the judges are like "Yeah, yeah..." And the real skaters go after. \[laughter\]

**Jerod Santo:** Please do. Go ahead.

**Paul Smith:** Okay. Because I really don't know what the stakes are. So my unpopular opinion is that server-side generation of websites is superior than static single-page applications.

**Mat Ryer:** I see. So you're talking about "Do all the rendering on the server, and just ship the HTML rendered", versus ship a big, thick JavaScript client and then use Ajax or something for the back-and-forth.

**Paul Smith:** Yeah.

**Mat Ryer:** That's a controversial one, I think...

**Jerod Santo:** Yeah. I 'm with you on that one, but Mat is not. Are you, Mat?

**Johnny Boursiquot:** I haven't heard that one in a while...

**Jerod Santo:** Yeah.

**Mat Ryer:** Well, it has the simplicity going for it, that's for sure. And in frontend dev -- frontend, especially if you have big frameworks working and there's lots of things going on, you can get into some strange situations. Some user will click this first, they open this drawer, and then they go and click something else, and suddenly that's a state that has never entered our minds. So you do kind of control a little bit more doing the server-side rendering. Why else do you like it, Paul?

**Paul Smith:** Well, I think there's a couple of big wins... One is you can have a better user experience, especially over high latency and low throughput/low bandwidth links, because you can just push a minimal set of HTML, versus a big monolithic JavaScript application payload.

Now, I know that there's splitting and there's been some innovation on that front, but that first interactive usability I think is still superior on the server-side sites. So that's one.

Another one is accessibility... And I know that accessibility has come a long way on SPAs, but my experience has been that it's easier to kind of bake that in on the server-side HTML, because you're really leveraging everything that the browser is giving you by default, instead of having to essentially rebuild up a browser in JavaScript, for all intents and purposes, in your SPA. So those are the two big reasons that I think of...

It definitely has some downsides. There's another flywheel to go wrong somewhere... So it's not all roses, but I like the trade-offs better. And I'm not saying no JavaScript at all, I'm just saying the primary rendering should happen on the server.

**Jerod Santo:** Sure.

**Mat Ryer:** What do you think of that one, Johnny?

**Johnny Boursiquot:** I think I've seen this evolution take place over the years... Usually, those who start out being backend developers, where that's really what their bread and butter is, once they start doing a little bit of frontend development, they're like "Yeah, this is the natural progression. I'm gonna use my server-side code to push out the frontend code. Great." And eventually, they'll either make that transition to doing full-on frontend, all-there, stateful JavaScript development, or they'll sort of stick with those server-side rendered pages, because there's a comfort zone there.

\[56:11\] Then you have people coming to it from the other side, saying "Hey, I'm a JavaScript developer, I'm all about the UI, I'm into the CSS, I'm into the HTML DOM and all that stuff..." They're coming at it from this other side, and then they get to the edge, where they're like "Okay, I don't really wanna go do that backendy stuff you're talking about... That Django, the Rails... Maybe not." And then Node comes along and you say "Oh yeah, I can do backend now. \[laughter\] I'm gonna take my JavaScript skills and go to some backend." So it depends on where you're coming from. You're gonna have a different posture but yeah, it's not right or wrong, it's just different.

**Jerod Santo:** I really think it does depend on what you're building... And I know that's the moderate stance, the "it depends" stance...

**Mat Ryer:** Yeah. You should get a bumper sticker for your car.

**Jerod Santo:** I like to differentiate between a website and a web app. I think that's a useful distinction. I know a lot of people say there's no difference... But I think most websites should be server-side rendered... And I think most web apps or rich web apps - I would not server-side-render Gmail, I would not server-side-render Slack or Trello. Those are applications running in a web browser context... Especially if you have a multi-client situation. If you're building a startup that's gonna be multi-client from the start... Slack knew they needed an iOS client, Android client, web client... I think an API plus an SPA is a smart move. Now, most startups don't make it to that point. They fail far before they get to that point, so it really does depend. But I tend to be with you, Paul.

**Mat Ryer:** Paul, you'll be pleased to know we test these unpopular opinions on our Twitter, @GoTimeFM. So we'll find out if that's unpopular or popular based on that.

**Jerod Santo:** That's right.

**Johnny Boursiquot:** Jerod, didn't you come with some unpopular opinions?

**Jerod Santo:** I did, I brought one.

**Mat Ryer:** Oh, here we go.

**Johnny Boursiquot:** Lay it on.

**Jerod Santo:** And let me just say that I'm a bit disappointed -- impressed, but still disappointed by the unpopular opinions that have been represented thus far, because to a one, on Twitter, they've all been actually popular.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** I think people on the show - they make a good case, and they're quite convincing. So then you put the clip out and ask people to vote, they're like "Yeah..."

**Johnny Boursiquot:** They're like "Yeah, I can see that..."

**Mat Ryer:** "Yeah, I think Johnny's right again." \[laughter\]

**Jerod Santo:** Well, I'm here to break the streak, okay? I came up with what I truly believe will be an unpopular opinion.

**Mat Ryer:** But is it a firmly, really honestly held opinion of yours? Or are you just trolling and you're just trying to find one that's the most unpopular?

**Jerod Santo:** Well, let me state it and then you can decide at the end.

**Mat Ryer:** Okay.

**Jerod Santo:** So I'm not gonna come on a podcast about Go and say that JavaScript is a better programming language; I'm no fool. I wanna walk out of here alive. But. I will happily start a proxy war by saying that JS Party is a superior podcast to Go Time.

**Mat Ryer:** Ooooh...

**Johnny Boursiquot:** You're off our show. You're off our show.

**Jerod Santo:** \[laughs\] Let me quantify this a bit, okay? I have some evidence. So more is better, okay? We have more panelists, we have more male panelists, we have more female panelists, we have more variety, we play game shows, we host formal debates, we write and rehearse poems, we explain things to each other like we're five... You guys don't explain anything to each other like you're five.

Go Time records on Tuesdays, one of the worst days of the week. JS Party records on Thursdays. Thursday is closer to the weekend; obviously, better. We cover more topics... Go Time is about Go. JS Party is about JavaScript and the web. That's twice as many things.

**Mat Ryer:** That's cheating. That's cheating.

**Jerod Santo:** That's twice as many things. We know the web is huge, so... Tons of variety.

**Mat Ryer:** You can't take HTTP to a JS Party. \[laughter\]

**Jerod Santo:** So in review...

**Mat Ryer:** See, we do poetry...

**Jerod Santo:** ...we have more awesome panelists, we have more variety, it's on a better day... And this is the big finale point. You're gonna like this one. JS Party has 100% less Mat Ryer, which means we really cut down on those awkward silences. \[laughter\]

**Johnny Boursiquot:** Wow...!

**Mat Ryer:** That is quite the pitch. That was the first time an unpopular opinion has been used to advertise things. \[laughter\] Johnny, have you got any products you wanna push while we're doing Unpopular Opinions? \[laughter\] My book's really unpopular. Let me just get a copy and show you all... \[laughter\]

**Johnny Boursiquot:** \[01:00:16.26\] Wow...!

**Paul Smith:** It was more of an alienating opinion, I'd say...

**Johnny Boursiquot:** I know... \[laughter\]

**Mat Ryer:** But more is better. It doesn't sound like you were listening to Paul on his message there of simplicity...

**Jerod Santo:** Well, I ended up with the "Less is better. Less Mat Ryer." So I went on both sides of the equation.

**Mat Ryer:** Good point.

**Paul Smith:** Goodness...

**Mat Ryer:** I think it's fewer Mat Ryer. \[laughter\]

**Johnny Boursiquot:** You got me clutching my pearls. \[laughs\]

**Jerod Santo:** I think maybe I've offended everybody here, but that's the unpopular--

**Mat Ryer:** Yeah, it's a challenge. You've thrown down a gauntlet and we're probably not gonna pick it up. We're quite happy with this show... \[laughter\] We're not gonna mess around. We're all gonna do some game shows, and things... Mess around a little bit.

**Jerod Santo:** Okay.

**Johnny Boursiquot:** Yeah, I guess we need to add some game shows, and...

**Jerod Santo:** Spice it up, guys.

**Johnny Boursiquot:** ...have Mat do a little dance, or something... I don't know.

**Mat Ryer:** Yeah. On a podcast. We could all pretend it was good. No one would think otherwise... \[laughter\]

**Jerod Santo:** Mat does do impressions. We're gonna get those going.

**Mat Ryer:** Yeah... I was gonna do a series of videos reading the Go documentation as Jack Sparrow, if you'd like a preview of that...

**Jerod Santo:** Please do. Give us a taste.

**Mat Ryer:** So here's Jack Sparrow reading filepath.Walk. \[in Jack Sparrow voice\] "Walk walks the file tree rooted at root, mate, calling walkFn for each file or directory in the tree, including root. All errors that arise visiting files and directories are filtered by walkFn. The files are walked in lexical order, mate, which makes the output deterministic, but means that for very large directories Walk can be inefficient. Walk does not follow symbolic links. Savvy?" \[laughter\]

**Jerod Santo:** Okay, I take it back. Go Time is better.

**Johnny Boursiquot:** Oh, wow...

**Mat Ryer:** That will get cut out though, don't worry...

**Jerod Santo:** Oh, no.

**Johnny Boursiquot:** No, that's going in.

**Jerod Santo:** That's in there, baby. It might be the cold open. \[laughter\]

**Mat Ryer:** I might do that entire standard library as an audiobook...

**Jerod Santo:** I like that last line, because you made it sound very eerie and dangerous.

**Mat Ryer:** I was running out of breath, and then halfway through I thought "Why am I doing this?! It's being broadcast..." \[laughter\] So there were a few things going on there...

**Johnny Boursiquot:** My goodness.

**Mat Ryer:** Well, that's all the time we've got today...

**Johnny Boursiquot:** \[laughs\] Yeah, it is...

**Jerod Santo:** it is.

**Mat Ryer:** But Paul, thank you so much for coming on and sharing your story with us. It's such an interesting one. It's nice to hear Go making a difference. Thanks for all the work you're doing; it seems very important... So yeah, please come back anytime and hang out.

**Paul Smith:** Yeah.

**Mat Ryer:** We'll see you next time!

**Paul Smith:** I appreciate it, thank you. Thanks, everybody.

**Outro:** \[01:03:02.13\]

**Jerod Santo:** Good show, guys!

**Mat Ryer:** Yeah, very interesting. Really good show.

**Paul Smith:** That was fun. Thank you so much.

**Jerod Santo:** Thanks for sharing that story.

**Mat Ryer:** Yeah, really good. We're still live, by the way, for a bit... But that's the end of the recording.

**Jerod Santo:** Yeah. The official show.

**Paul Smith:** Can I plug my company?

**Jerod Santo:** Oh yeah, man.

**Johnny Boursiquot:** Plug it. Plug it. Plug it.

**Paul Smith:** So we're still working on HealthCare.gov, and the story there is we've basically rebuilt it from the inside out, for the most part, over the last N number of years... So it's basically substantially new, or changed, than what we found... But that's not our only work; we're working on Medicare... So if your parents are picking a plan for Medicare, they're probably using our Plan Finder tool... We also work with the Department of Veterans Affairs, and build services for veterans... And we're getting into more and more stuff.

So if you like the idea of working on high-impact digital services that increase the general welfare, I'd encourage you to take a look at Ad Hoc, because we have a lot of open positions. We are hiring product managers, we're hiring software engineers, designers, user researchers... We actually have more than one former anthropology Ph.D. on staff, doing user research. So they brought their anthropology skills to conducting user research to make better user experiences and better interfaces for veterans and other people. So it's really interesting...

I'd like to say that we're kind of like coming up with what product management in government can and should be; the synthesis of the best of the consumer world, consumer technology and what government needs... It's a really interesting space, and we're still growing... So check us out.

**Mat Ryer:** And what's your website?

**Johnny Boursiquot:** How big is the team? Whoops...

**Paul Smith:** Sorry, I heard two questions...

**Jerod Santo:** Pick your favorite.

**Paul Smith:** Yeah...

**Mat Ryer:** How big is your website? \[laughter\]

**Paul Smith:** How big is the website? ...

**Mat Ryer:** Yeah, if you could blend the two questions together...

**Paul Smith:** 75 pages...

**Jerod Santo:** Where can we find your team? \[laughter\]

**Paul Smith:** The website is adhoc.team. Also resolves at adhocteam.us. I think we're about 300 people actually, so we're not a small enterprise anymore. We're not a small startup, we are a going concern. That's what you transition into after being a small startup, is a going concern.

But we use Go in a lot of our projects still, and... Yeah, if I had another hour, I would tell you about how we've used Go in rebuilding HealthCare.gov. So yeah, we're still trying to bring the best of startup technology and proven web technology to the government.

**Mat Ryer:** Great.

**Jerod Santo:** Awesome.

**Mat Ryer:** It sounds good. We'll post the link also in the show notes, for anybody listening that's interested there.

**Paul Smith:** Cool.

**Mat Ryer:** Yeah, great stuff.
