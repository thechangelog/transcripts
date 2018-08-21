**Adam Stacoviak:** We're here today with Bryan Helmig, CTO of Zapier. Zapier makes you happier, right, Bryan?

**Bryan Helmig:** That's correct.

**Adam Stacoviak:** I heard that once, it's a fun thing.

**Bryan Helmig:** Yeah, it helps you pronounce it correctly. \[laughter\]

**Adam Stacoviak:** It has different ways to be pronounced. I think I began with this in the pre-call by saying it a whole different way, but let's not go into that. Let's dive more so into kind of this grand story. You've got Zapier, the company that you've founded I think in 2011 - is that right?

**Bryan Helmig:** Yeah, end of 2011.

**Adam Stacoviak:** End of 2011... And to date, you've hit 35 million in annual revenue, which is nothing to \[unintelligible 00:02:53.02\] tremendous, but obviously, you began at zero, like pretty much every startup, right? So let's cover that journey, let's cover the story...

In 2011 -- you guys have an interesting you connected too, through Hacker News... Is that right?

**Bryan Helmig:** It's funny... The way that I met Wade and Mike - we were both separate; we were in university together, \[unintelligible 00:03:14.23\] I had been playing in a jazz combo with Wade. Wade is a jazz saxophonist, quite a stellar one at that... And I was playing jazz bass, and we got together through that and learned each other, because we were working a bit together...

But the way I met Mike was actually through Hacker News. There was -- I can't remember the site's name; I think it was like Hacker Newsers, or... It was basically like a Hacker News overlay on a map, and I think the only two people in Columbia, Missouri was Mike and myself... So he had reached out to me about that, and we grabbed beers, and I think there was a Startup Weekend happening in a couple months, and we talked about maybe doing that together... And just kind of stayed in touch until we all kind of culminated that one fateful kind of weekend at the -- I think the first inaugural Startup Weekend in Columbia, Missouri. That's really kind of where Zapier came together for the first time... At least the three of us.

**Adam Stacoviak:** \[00:04:18.18\] That's interesting you mentioned Startup Weekend as part of your beginnings, because I came to Houston (which is where I live at now) in 2007, and that summer was actually I believe the second or maybe third official Startup Weekend... And it was the first one here in Houston, but it was such early days, that I was like "Are we gonna build up a startup in a weekend?" It was almost laughable, because no, you're not; you're gonna have a really good idea and maybe collect somewhat of a team that may resemble the future of this company, if it ever even begins as a company. In lots cases -- the internet was new, or newish, and lots of bad ideas... But did you end up attending and doing something there? What happened?

**Bryan Helmig:** Yeah, we all attended. We were all also working at this company in Columbia called Veterans United... So we had been not just like on the side, but even working a little bit together; we were always chatting over the IM about like "Maybe it'll this idea, or that idea."

The one we ended up pitching was called -- I think we called it API Mixer at the time. The idea was, you know, we'd been doing some contracting stuff on the side where you build the little forms that connect MailChimp to your CRM, and just all these little bespoke but very repetitive integrations... And the idea was "Well, why don't we just have a thing that kind of like intermixes these and you get kind of the n-squared number of connections, and it all kind of -- you can kind of build these bespoke integrations with off-the-shelf parts..." That was the pitch, and it's funny enough that we never really pivoted from that first idea, because it was basically in existence - the idea was the one that we brought to the market and ended up really resonating with the customers.

That first thing we pitched was very much -- I think the initial pitch was "Busy work is nonsense. You should automate all this stuff, and we're gonna make it easier", or something to that effect.

We hacked all week, and I don't think we slept more than maybe six hours amongst all of us over the 54 hours I think you get to put it together.

We ended up actually winning the Startup Weekend, which was really fun. I think we got like 2k to start, or something, and just kind of away we went from there. It was awesome. I really recommend folks go check out Startup Weekend, it's a ton of fun; it's a great org, it's a great way to spend a weekend.

**Adam Stacoviak:** And clearly some good results. I kind of poked a joke there saying that -- not that nothing comes successfully out of there, but the feasibility of building a company in a weekend... I guess in the 54 hours you actually proved -- maybe even your first version of product-market fit, which was actually getting a goal, you know? Winning was validation that it's a good direction; somebody at least thinks it could be a good idea.

**Bryan Helmig:** Yeah, it was definitely... And winning was exciting. It's kind of funny, because in the end, winning Startup Weekend means not a lot; it all comes down to bringing it to the market. So our next step was really like "How do we scale this out and prove this is useful?" and it's funny, the next thing we built after the proof of concept of like "What could this even look like?", which is what we really did for the Startup Weekend, was "How do we get this in front of users and verify that they care, that they would pay for this?"

\[00:07:58.05\] What we ended up doing - we spun up, I'm gonna say, like hundreds or even thousands of landing pages for all these different combinations of services that you might wanna use... So you think like GitHub, and Trello, and Asana, and Salesforce - you name it; we were spinning up all these landing pages... Granted, none of this stuff existed, right? We didn't have any of these connections built out yet, but people would come and find it, and they would just click in and go to sign up, and we would initially just collect their e-mail. Past that, we started to say, "Well, you're gonna be in a line." I think it was like you would be at the end of the line and then you'd get an invitation, or something like that.

Then we started saying, "Well, you can skip the line and join immediately if you pay $5 now", and we had a ton of people start doing that, which was frantic, because we would literally get the e-mail that someone paid for Salesforce to Asana, and it'd be like "Oh crap, we actually have to build this now."

**Adam Stacoviak:** That's so funny.

**Bryan Helmig:** So we'd frantically build it like over a matter of hours, and by then, we had kind of this abstracted thing internally and we could build these APIs and these endpoints and these connections really quickly. It was common for us to turn around a new connection in 45 minutes, right? So someone would sign up and we would build it, and then they'd get their invite and say "Here it is! Check it out!"

That was amazing, just because we were able to validate that people cared enough to put their credit card in... And we really didn't care that much about the price. I think it was like $1 to start, and then maybe $5 or something... We just wanted to see if people would be willing to put their credit card in and pay for this thing.

That had a lot of really good effects. We were almost like putting the boundaries on what we would spend time on, with alignment to like revenue and growing the business in value... Because people are not gonna put their credit card in if it's not useful to them. So that naturally drove us to business use cases, which is where we're really at today - small, medium businesses. That's really what we do - we help connect all these services... So that's basically what we were doing at the very beginning, and that's why -- earlier I was saying we never ended up pivoting, because that whole process itself molded us into what was valuable for the user from day zero, really.

Looking back on that, that was definitely something that we did (I would like to say) really intentionally, because at least we've put this stuff up, but also a very happy accident that it all kind of lined up the way it did.

**Adam Stacoviak:** You had me at spinning up hundreds to one thousand(ish) landing pages to promote various services; the whole smokescreen effect of like, you know, as an engineering team or as a new startup, understanding your focus is like "Okay, what do people actually care about?" I can only imagine that the model there was a growth hack to say "Where should our team focus?" and then the second side of that, which got me even more excited, was adding the skip-the-line aspect, which I think is a tremendously -- if somebody is listening to this and they've glossed over that part, rewind, go back and listen, because that's a gem. I'm gonna try to find a way to apply that to us when we do... Because skipping the line is really interesting, and then validating the fact that they'll actually pay something, and helping you focus... What did that do for you?

**Bryan Helmig:** It really helped us. It brought us to find the use cases that our users cared about. To give some examples to make it less abstract - when you're a recruiter, you might have an application form, and things are coming in through that, and you wanna change it and customize it. Maybe you'll reach for something like Typeform, and you're using services like Workable... Or maybe you're not even using a real ATS, you just wanna use Trello to start, right? So these people were searching for stuff, or looking for solutions for things that would connect Typeform to Workable, or to Trello, or Wufoo, or all these different form software to an ATS or a project management... And those were the sorts of things that really became clear as a result of doing that.

\[00:12:18.03\] We were intimately working with customers, because we would basically need them to lightly spec out what they wanted us to build, what they just paid $5 for, right? So that was really critical and we just spent all our time talking to users... I mean, we had folks who would - and still to this day - they would be doing these crazy Rube Goldberg workflows where they'd have these Google Sheets set up, and they'd add like a new row, and as soon as the system would detect a new row, it would send a DocuSign or a HelloSign signature request to that e-mail address, add it to the row... And they'd be just building all these crazy and interesting workflows, and constantly bringing us into the loop, talking with them to really figure out what they wanted out of the product.

The key thing there was just that feedback loop. I'm a dev at heart, so I'm always looking for that quick feedback loop of writing code, testing and checking. You wanna do the same thing as you're trying to stand up a product - you wanna get in front of customers as fast as possible, get their feedback and iterate on it. There's no real difference between that except the specific motions that you're going through. For us, it was all about "Get them to buy into the value that it is, get them telling us what that is, or not, by opting out", kind of excluding things that weren't that interesting to us... And that really helped us hone the product itself over time. That's really what that did for us and kind of put us on the path.

**Adam Stacoviak:** So we're gonna talk a little bit about kind of hacking, so to speak, to get that feedback loop; people can underestimate the importance of a feedback loop, but to get to the point where you're at today - you've got Startup Weekend in your path, you've got Y Combinator in your path... Is there an interesting story around the pitch there? How does that play into the company you are today?

**Bryan Helmig:** Yeah, it's funny - you mentioned Y Combinator. We actually applied to Y Combinator twice.

**Adam Stacoviak:** Really?

**Bryan Helmig:** Yeah, the first time they just flat out rejected us. It was a nice e-mail... Also, a hot tip for folks out there - if you want a good rejection e-mail, go find the Y Combinator one; it's a really thoughtful one. You can use it for a lot of stuff.

We were rejected just straight out... And it makes sense, because we were pre-revenue -- this is like right out of startup weekend, but our attitude about that was just we're just gonna keep going. We wanted to do this, we wanted to see this shape up, and apparently, in hindsight, that's the right attitude.

Six months later we applied again, but by then, we had I wanna say like 1,000 or 1,500 different people who had paid $5/month. Or I don't think it was $5/month even at that time, actually. I think it was just $5 to get in, so we didn't have that much revenue, and no recurring revenue; we hadn't even officially launched, but it was really apparent at that point in time that what we were doing was useful.

And it's funny, we even went back and looked at our different applications - our first one and our second one; the second one is so much better, and it had way fewer words in it. It was just more of the facts of like "We have X many users doing this, this is why it's important..." It was very clear that we had grown a huge amount at that point. So that was kind of an interesting comparison point, those two points.

It's often hard to look back and see two distinct points of growth, but for us, those were interesting to look at in terms of how they showed that Zapier had grown in those first six months.

**Adam Stacoviak:** \[00:16:08.27\] Yeah, even if it wasn't recurring revenue, it was some sort of black and white kind of example of saying "Here's the value we're bringing to this amount of people", and it's clarity, rather than just obscure -- you know, when you're presenting to somebody that says "Hey, we wanna let you into our incubator, we might even give you funding as part of this..." You've gotta do something to show that you've done something to prove your worth and fit to a small set of people, right?

**Bryan Helmig:** Yeah, absolutely. And even better is we -- I think the magic trick was we weren't doing that to get into Y Combinator, like, at all.

**Adam Stacoviak:** You were just doing it.

**Bryan Helmig:** Yeah, that's just how you build a business, and that's what accelerators, that's what investors, that's what -- when it comes to all that stuff, if that's the route you wanna go... That's not the route that we really doubled down on over time, but if you wanna go that route, the things you optimize for are really closely aligned with just building the business and building a great company from the top. It's funny that those come off as a result, but those weren't the intent... And I actually think that's an important thing to distinguish - you're just trying to build the company, you're trying to grow the revenue, you're trying to add value to the product and deliver it to users, and that's the critical pass.

The rest of the stuff are options for how you might accelerate it, or how you might fund it, or whatever. Those are like secondary things, not the primary thing. We always took that approach as well, and it certainly served us well.

**Adam Stacoviak:** So I assume after the second pitch you got in, you got accepted to YC - is that correct? You actually went through it...

**Bryan Helmig:** Yeah, we did. And that was the summer of 2012, I believe. And we moved out to California then.

**Adam Stacoviak:** So you're in Missouri - this is a side hustle; we haven't talked really much about the side hustle aspect of this, which I'm really curious how you even keep life afloat... I'm not sure what age you were at this time and how much risk you could absorb, but those were all factors in your ability to three people collect together and be scrappy about building a startup and then move to a whole different city and whatnot.

So you went into YC - what was the YC program like for you, and was it helpful? Did it make you the company you are today and did it help you get to the next level?

**Bryan Helmig:** Yeah, I think it was helpful. It's not a substitute for other stuff, if that makes sense. It's not a substitute for the work that really builds the company. Any accelerator will tell you that - "Hey, this is your show. You're the stars here, you're running it. We're just here lending a hand."

Overall, it was a great program. The most useful thing as I look back on it is just being in a fast-moving stream, where everyone else is swimming, swimming, and you're in there too and you're trying to keep up and you're trying to stay ahead of things. It kind of just puts you in that place where -- that summer we just worked; I don't think we slept a whole lot, we'd just work-work-work. We worked 16-hour days pretty regularly, because we were like mad men; we just loved working on this product, it was so exciting.

Some of that excitement came from the accelerator, came from the peers inside of Y Combinator and other startups that were going through it... So I think back on that, and it kind of gave us the space, a really healthy space to create Zapier, and that was the only focus. We weren't doing anything else... Like, you mentioned side-hustle - that's how it started. I think Wade, who's now our CEO and the other founder along with Mike - Wade went full-time first, early 2012.

\[00:19:54.28\] Then whenever we got accepted to Y Combinator, it was basically permission for us all to just go 100% full-time. Mike dropped out of grad school, I quit a job, we all had relationships and we moved everyone out to -- I think Wade was married already; I was getting married later in the year... We just moved everyone out to California at that point.

So Y Combinator really helped us bring it to a head, make it happen and really kind of commit to it. For that, that was probably one of the key things about going through an accelerator that made it really valuable for us.

**Adam Stacoviak:** Yeah, I mean... Sometimes you need something to take that first leap; something is holding the team back, so to speak, from saying "You know what, we have faith in this; we're working on it... Sure, it's our side hustle, we're enjoying the process, we're validating...", but there's always something that's like "What's that thing that's gonna say everybody goes in and we actually start building?"

Y Combinator has such a great name... In 2011 it had a great name as well, it was the beginning of incubators, so to speak; they were the poster child for doing it right... And just discounting the fact that what an impression that had on your team, to say "Let's go all in."

Let's go to that moment then of like, okay, everybody's in San Francisco, you're in this incubation process... What's that like? What were you doing and what was the point of it?

**Bryan Helmig:** Yeah, I mean... If I think back of what we were doing, we were just in this tight loop of writing code and talking to users... Which is what YC will tell you to do, which is a great default loop to be in - write code, ship it, talk to your users, go back, write code, ship it, talk to your users; rinse, repeat and just keep doing that at the basic level.

I think there was also a third-point - you were supposed to exercise, as well...

**Adam Stacoviak:** \[laughs\] Like physically?

**Bryan Helmig:** Yeah. It was added as one, and we never did that. \[laughs\] We just did the first two. But that was really at the heart of it - it's simple, it's elegant, and that's what we did.

What it turned out -- I mean, in that summer we built our developer platform, which... We were building all these apps by ourselves. We were literally coding them up the last minute. Not only did we launch and had real recurring revenue at that point and converted all those users that were using us... We charged like -- I can't remember what we charged... It was like $15/month, or something. Whatever.

That really kind of started changing stuff for us, because now we had customers that had a constant pressure on us to deliver for this product. Then we built the developer platform. That let us reach out to partners and have them build on Zapier, instead of us literally being the bottleneck to building them all from scratch. That really helped change -- we had a couple partners launch with us at the end of the summer... And it's funny to kind of look back at how quick you can just spin these things up and iterate on these when that's like your sole focus... And when your user base is a lot smaller, you can kind of afford to move faster and break more things than once you get larger...

But when I look back on that, that's just what comes to mind for me - it's just how quickly we iterated on stuff, how quickly we shipped stuff, the kind of fundamental things that got put in place, or subscription services, our developer platform - all these things date back to that summer. So we were just working like dogs for that summer.

**Break:** \[00:23:50.12\]

**Adam Stacoviak:** So we're at Y Combinator, you've gone through the process, you've got three co-founders... Not really a company yet, but you've got some proof that there should be or could be one there. You've kind of extrapolated to the future, \[unintelligible 00:24:54.07\] and various things go back to those days and the focus that you had there.

Let's go to now the place of scaling your team, because you can't be three for long, I'm assuming...

**Bryan Helmig:** Right.

**Adam Stacoviak:** When did you start to add employees and what was a head count of year one or year two?

**Bryan Helmig:** Yeah, so throughout that summer it was just us three. As we left that summer, there was \[unintelligible 00:25:21.00\] and all that, and we raised a little bit of money... That was when we really turned to like "Okay, we wanna grow the team." By then, we were just doing -- this is a great place to be; if you find yourself just completely inundated by talking to customers as support, and this customer-centric thing taking up your time - that's a great sign, and our first hire to handle that was our very first support person... Mika, who was employee number one of Zapier, was a friend of Wade's. He knew him from college, and I think he was like an admin for like a Cubs baseball forum.

The idea was like, "Okay, if you can handle unruly Cubs fans - alright, you can handle some customer support." And we knew he was just a smart, good dude, so we brought him on as our first person. He was at that time in Chicago, so that really kind of planted the first seed for remote for us. We didn't wanna make him move... And the next people we were looking at - it was developers back in Columbia, Missouri, back in our hometown, that we really liked and respected. We knew that they had families, they weren't gonna move... And we were already doing a lot of our work in this asynchronous, remote manner. We would work next to each other, but never talk to each other. We would just chat over -- in those days I don't think it was Slack; it was like HipChat, or something. So we were using that to communicate, and we weren't really even like talking to each other in real life...

That really was the beginning of how we just kind of stumbled onto this idea of doing remote. There were a few companies doing it at the time, but none super-large... So we just de facto started doing that.

So those were our first hires - a support person and two engineers; those were our first three... And those were all folks that we trusted, we knew were smart, and I think that's a great way to get your first couple employees.

I think that was probably even -- maybe that was like even by the next summer I think we might have hired a marketer, Danny (one of our first marketers). By then, I think the team was like 6 or 7 people, the next summer. So that year after Y Combinator we hired three people, I think. Three people. It was very slow, which is a little bit different from a lot of companies... You raise money and you're just like "Alright, let's spend it all!"

**Adam Stacoviak:** \[00:28:09.09\] "Let's hire", yeah.

**Bryan Helmig:** Yeah, "Let's hire." We didn't do that, because by the end of that summer we were really starting to ramp up on the revenue side... And we raised the money because, well, when we hire our friends, we can't pay any of them with Zapier bucks; you have to pay them real currency...

**Adam Stacoviak:** Not yet.

**Bryan Helmig:** Yeah... So that's why we did that... But it became pretty obvious going into 2013, as we were hiring that second and third employee, that "Okay, we can get profitable. Let's focus on that."

So that's really where we spent a lot of our time - just trying to grow the revenue side of stuff, really investing in any projects and new work that could get us there. We were pretty successful on that, and that guided the way... We grew the team. We didn't hire until it hurt... It helped us get to this really fiscally responsible place, it helped us control our own destiny; we didn't have to go back to VC's to raise money for the next time... It was just kind of a different way to build a company that -- I don't even think there was really many companies going through YC at the time, so there was no real peers telling us... It just organically seemed like the right way to build it for us. So that's really how we got started with our first employees in the first year or so.

**Adam Stacoviak:** You said a couple things in there that were pretty interesting... One, you hired friends, which I think is kind of interesting.

**Bryan Helmig:** Right.

**Adam Stacoviak:** Trying to find -- not so much random people out there; just job apps in general... I would say that finding friends is pretty good, because you kind of maybe somewhat like them or can anticipate liking them...

I'm curious; you said the next year in you had pretty decent revenue, so that means -- were you profitable? At what point did you take any money? It was YC incubation and some money to sort of get started, but was there fundraising in that first year?

**Bryan Helmig:** Yeah, like I said, we raised a little over a million dollars right out of Y Combinator. We didn't end up burning through a lot of that money, because it became pretty obvious that we could continue scaling out the revenue side of things, and that's really where we wanted to focus.

**Adam Stacoviak:** So you didn't really need the money...

**Bryan Helmig:** Probably not; not in hindsight. We didn't know that at the time. At the time we wanted to make sure --

**Adam Stacoviak:** You kind of needed an insurance...

**Bryan Helmig:** Yeah, looking forward, we were like "We need some money if we wanna hire some folks..." But we were really fortunate that the business continued to catch on with customers and it continued to grow... We were really fortunate.

I think we got to profitability -- I don't know if it was that following year, but maybe it was; maybe it was late 2013 or early 2014... I'd have to go back and look. But it wasn't far off for that. For whatever reason, we just thought that was the best way to grow a business, was to get revenue in the door.

**Adam Stacoviak:** You know, that's the right way... A lot of -- I can't say a lot, but there's quite a bit of not-profitable companies that are great companies... I mean, great businesses, not great companies...

**Bryan Helmig:** Oh, for sure.

**Adam Stacoviak:** ...to either work for have stock in or invest in, but... They're great, but not everybody thinks "Hey, we should probably actually make money... And not just make money, but actually profit." It's sort of counter-culture, especially in 2011-2013 range days, it was still okay to sort of like be several years in and maybe losing... You know, as long as you're growing your network and improving your product, it was kind of okay.

**Bryan Helmig:** \[00:31:53.18\] Yeah, and those things are calculated risks. Going back to going into the accelerator, we were all about building the core of the business; the goal wasn't to get into an accelerator or to get investments... That's not the measuring stick; it's building a successful business, and we always over-indexed on just building a successful business.

If that other stuff made sense... We're not dogmatic about it. I mean, we took investment and we'd never say never about any of these things, but we wanna treat it like a tool. It's not the goal, it's a tool to be used. So that's the way we always kind of approached building Zapier. It's given us a lot of way to kind of direct and own our own destiny as a result, which has been really useful and a really satisfying way to build a business as well, beyond just the pure success of actually doing it.

**Adam Stacoviak:** While we're on the subject of growing your team, can you speak to maybe the listeners out there who are thinking "Hey, I'm starting/I'm about to start my company, or I'm in these early stages still yet, and I'm feeling the struggles...", can you speak to why hiring friends makes sense, versus non-friends?

**Bryan Helmig:** Yeah... I think especially in the early days you need a lot of trust on your team. Your culture is going to set in motion a lot of things that are gonna be hard to undo. It's definitely preferable to have people you trust, that you know are good people, that think in compatible ways with you. That's really critical.

A mis-hire is always not great, but when it comprises one fourth of the company or one fifth of the company, it's extra painful. And to be clear, you don't wanna hire just like your buddy from high school, or something; you should find people who could fit in these roles really well that you respect.

I don't even know if friend is the right thing to optimize...

**Adam Stacoviak:** Let's say friendly... Friendly people, right?

**Bryan Helmig:** Yeah, someone you know and someone you trust, someone you're familiar with.. That's probably what I would \[unintelligible 00:34:16.03\] It just so happened that these were also friends, at least to some of us; Wade knew and went to college with Mika, so he knew Mika through and through and knew he could do this role. That was the critical piece, not that Wade and him got along. That's a component of it, but we knew he could do the role.

So I think it de-risks a lot of stuff, and an already really risky part of the company, as long as you don't compromise on people who can really do the role.

And for us, the other thing which I'm really thankful for - it set us on this route of doing remote work, and today we're still 100% remote. Again, just like the developer platform and some of those early things that we did that summer, that first year really set us on the course of building out a remote team, which worked out really well and still works out to this day. We're 100% remote.

If we find an amazing engineer in South America who's just incredible, we can hire him/her. We can do that because we don't have to convince them to move to the Bay Area, or New York, or Chicago, or anything. You don't have to convince them to move. We can just work with amazing people from anywhere. And to me, that's another thing - looking back at growing that team - that kind of set the scene, again, of where we ended up going. It ended up being the right call.

**Adam Stacoviak:** Given the success of your company being built around 100% distributed, it's probably easier for you to say the good things... But I'm gonna ask you to talk about the bad things too, because there's definitely pros and cons on the sides of like -- can you speak to the limitations or the pros and cons or the ups and downs of being distributed, of being remote?

**Bryan Helmig:** \[00:36:08.00\] Yeah, that's a great question, because it's easy to wax poetic about all the great things it has, which it does have a lot, but... You know, one of the things that you're forced to do when you're a remote company, especially remote-first, and for us remote-only, is you have to start to put in place structures for communication earlier.

We were forced to do documentation, we were forced to be explicit about where you communicate on different topics, and the medium of communication. That all had to happen early. That wasn't something that could kind of be put off, because you could paper over it by just tapping someone on the shoulder; that wasn't really an option for us.

The way that kind of played out was we've created different tools for communication. Of course, we used stuff like Slack for that live conversation, we used tools like Zoom for our live calls and video calls, but we created internal tools which we call Async, which is for asynchronous communication, which allows you to publish -- it's kind of a cross between Reddit meets Twitter meets a blog, kind of... It allows people to post what they're working on in their projects, post Friday updates, and kind of keep this cadence of things that don't require immediate responses.

Because if you go and drop something into Slack about a project, that chat window is scrolling by every day, 24/7, moving up and up and up, and it disappears... Not forever, but it's not right there in front of you, and the way we saw that was creating these other tools that would put different pieces of information in a place that was more consumable in an asynchronous manner; you didn't have to be online at the moment that that conversation happened, you could go and see it on Async, which is our internal tool.

It's the same sort of stuff that you get when you push things to let's say GitHub, and you have issues and you have PRs, or you use tools like Trello or JIRA and you're just trying to push as much context into those repositories, so that folks can pick it up afterwards.

We've introduced other tactical things that help us communicate work... A lot of companies will do stand-ups at the beginning of the day and they'll talk about what they plan on doing... We do what we call - a lot of teams are doing this, and all these ideas kind of spread organically - hand-offs, where we will describe what we've done for the day, and any blockers, and that will hand off the work to someone who's in a different timezone that might be working on the project with you, or to your PM, or your manager or whatever, so that they can get context of what you've been up to or where you got blocked...

And you're just trying to engineer your organization's communication structure, and that forcing function happens a lot earlier when you're a remote company, because you don't get to just like lean back on that natural face-to-face body language communication thing that comes so natural to us. If I'm thinking about challenges, that's a big one. It just forces different behaviors more early than you would in a classic office environment.

**Adam Stacoviak:** Do you feel like remote makes you move slower or faster? Obviously, you can't imagine your company not remote, so it's hard for you to say for sure, but... I've been distributed for a long time; I've worked on distributed teams, our organization is distributed, we're all remote... I can't really remember a time that I actually worked in office with people at least in the last decade... So it's been a long time, and I'm curious if -- and I always feel kind of like "Maybe we're moving slower because we're distributed, because we can't have that face-to-face, or just go grab time, and maybe these are just all those interruptions you feel like would be benefits, but they're actually distractions." Can you speak to that? Can you speak more specifically to the ups and downs of that? Do you really move slower, or do you really move faster?

**Bryan Helmig:** \[00:40:16.15\] You know, it's hard with -- like, Zapier has a sample size of one; it's hard to be really confident about that. I don't think we move slower as a result of being remote. Some of the anecdotal evidence I have is when I talk to the other companies that are in-person, in office, one of their chief complaints is always inevitably "We're moving too slow. We wanna move faster." I think that's just a baseline pressure that you have as a startup or as a company, as a business - to move faster, to iterate quicker.

So I think that's a fundamental thing that everyone feels and everyone wants to optimize for. I think, like a lot of things, remote is a trade-off. You get some things in return for losing some other stuff. I don't think one of the things you lose is speed of delivery, because a lot of the other stuff that you get help prop that up. In fact, it's a glut of amazing tools on the web that help you do work in a distributed online manner. That's what they're designed to do, so whenever you're even in office, a bulk of your work is note done through physical interaction with your environment, it's done through a keyboard and a screen, which is no different than what we're doing in remote.

The only difference in remote is you get to hire amazing people from around the world; anyone can work for you, so you can find really talented, special people to work on that, and everyone's on the same footing to work through these sorts of things. Now you embrace this aspect of working, instead off -- you're a little more purposeful about it, if that makes sense.

That's really where we've focused all of our efforts on, and I can't speak with perfect confidence that if we were in an office, all in the same room, we would go faster or slower or not... But anecdotally, I feel like that's a pressure everyone feels, regardless of in-person, or remote, or whatever it is.

**Adam Stacoviak:** Tell me if this resonates with you, because this is something I found just curious... And if it doesn't, that's fine. I feel like there's times I envy the people who have a destination, a headquarters, or a location to go to for the lure of "We're all in one place, we're all in this together" kind of thing... But the other side of that is the visuals - being able to create content or videos that support your business, that show off different ways Zapier works, or different things that you may be able to do that really requires togetherness, face-to-face... And so being distributed, you're sort of forced to really be intentional about the times you are face-to-face; there's just some artifacts that come from being together in an office, and the branding, and just... Different things that are easier to show off. I really envy that part.

But I also really appreciate the distributedness and the benefits of that, too. So it's not like I'm all-in on that, but I kind of envy that part. Do you feel that way?

**Bryan Helmig:** Yeah, I know what you're saying. I think it goes back to the trade-offs. You definitely get a little bit of this and you lose a little bit of that. You speak specifically from kind of that extra value you get out of being in person - we do still have in-person events at Zapier. Next week, in fact, we're gonna be going to Chattanooga for an entire-team retreat. We fly all 170 people from (I think it's like) 17 different countries, half the U.S. states... We have people from all over and we fly them all into Chattanooga - in this case, this time; we do it into all different places.

\[00:44:07.18\] We spend a week together, and we do a little hackathon, we spend time talking about this stuff we really care about as a company... And you know, the really special thing about that is when you're with people day in, day out, that's just routine; that energy level is pretty baseline, pretty steady. Whenever we get everyone together twice a year, like we do for these retreats, the energy level goes through the roof, and the stuff people are able to tackle and dig into, and the excitement level is just so high that I've not seen it replicated in an office environment... Even when you try to do off-sites and things like that, you just never get that high of a peak. To me it also feels really natural that you get together, you spend this time, you work on things that are really important, you have this high for the week, and then you go back and you lock into your own environment, your own zone, and make things work the way that you like to do them... Especially as like engineers - that's such a core thing; you're not in an open office... I think that open office environment is particularly useful for a lot of people; I'm sure some people love it. But for me, I've always been like "You know what, when I wanna concentrate... I wanna just sit down, I wanna put headphones -- I still have headphones, but I want it to be an option that I can sit down and just really dig in."

I think you get the best of both worlds in some ways when you have these in-person retreats, you get the high energy level, you dig in on some important problems, and then you break and you go back to living the best life for you. I don't know, I feel like that way outweighs what I think you've described, that daily touch points of that. I do think it's just a better way to work.

**Break:** \[00:46:05.22\]

**Adam Stacoviak:** So I'm imagining these retreats you have... I'm trying to think... Like, you're going to Chattanooga, TN - is that right? Is that where your next retreat is at?

**Bryan Helmig:** Yup.

**Adam Stacoviak:** And I'm just thinking, I've got the back of a napkin here, I'm adding up flights for 170 people... It's no small cost, for one. Are these things planned to bring people together to work? What are these retreats about? How do you design these retreats?

**Bryan Helmig:** Well, it's definitely shifted over time. We definitely bring people together to work... We bring people together to mix, and to spend some time celebrating things we've accomplished, to plan some of the next stuff...

They're definitely not cheap, as a result... We joke, and I've heard other remote companies joke that we save on the office expenses and then spend it on flights, which is certainly true... But we've found them really useful.

\[00:48:09.22\] One of the things that we've leaned into and kind of settled on has been a hackathon kind of format, and that hackathon format has launched a lot of really interesting stuff inside of Zapier, especially stuff where we may not have a super-clear idea on how we could build out something; classically, they're things like support tools or internal stuff where we're struggling with something and there's no clear way forward... And you get this ragtag group of folks together and they work on something, they hack something together, and it's incredible. We've seen that happen many times.

That pattern has really been fruitful for us, around hackathons. We do roundtables, we have game nights - this is a chance for people to spend just time together, get to know each other, have those personal connections... So all that stuff kind of like culminates into something that I think is really valuable for us to this day. It is a lot of logistics; hats off to our people \[unintelligible 00:49:11.16\] They do a lot of work to make these happen and go off really well... But yeah, in the end they've been really useful for us.

**Adam Stacoviak:** And you said twice a year, right?

**Bryan Helmig:** Yeah, twice a year. Usually, every August, give or take, and every January, give or take.

**Adam Stacoviak:** Is it a mandatory "everybody comes" or is it like "If you can't make it, no big deal"? What is the situation there?

**Bryan Helmig:** We definitely lean more towards mandatory, because it's really useful to have everyone... But of course, there's all kinds of life situations, where if you've got a baby coming in the following weeks after it, it's not a good time to travel... All kinds of different reasons will come up, but we do try to get everyone together.

We'll do other retreats where we have engineers - we have an engineering retreat, the support team will have a retreat, a marketing retreat... And those are more specialized and we make those a bit more optional, just because that's a lot of traveling once you start stacking these on.

We do get people together for onboarding. Every month we do onboarding in person, for a week, and that's been really useful. Generally, we try to have people join a couple weeks, do remote, get all the basics figured out, and then once they have their \[unintelligible 00:50:22.15\] so to say, then we generally will fly a big group out to Mountain View every month, usually the first week of the month, the second week of the month, something like that... And we'll do onboarding with them, which is another -- it's kind of a mini-retreat, and those are usually a little bit smaller, a bit more intimate. It's usually like a dozen or 15 people, or something like that.

So we do have lots of touch points for interaction, and we try to not make them over-bearing, because you overdo it and it's just too much traveling and it starts to cut into people's personal lives, and...

**Adam Stacoviak:** It defeats the whole purpose of being distributed.

**Bryan Helmig:** Yeah, exactly.

**Adam Stacoviak:** If all you're doing is traveling, it's like, "Well, I traded a "go there every day" job to a job that requires me to go somewhere else several times a year, plus my vacations and my own desires to travel...", it's like, "Come on..."

**Bryan Helmig:** Yeah, so don't wanna defeat the whole purpose, but you still wanna give people an outlet to get together... We try to balance that; we wanna be right in the middle there, and we try to be pretty realistic and open about it. If it doesn't work out in some cases, we'll change it, we'll tweak it. We're not wed to anything; back to being pragmatic, as a company - we've been wrong many times, and I expect we'll be wrong again in the future.

A lot of this stuff is not written in stone. We may change the way that we do onboarding, we may consolidate retreats, we may break them apart... We'll constantly be trying this stuff, and we have in the past; we've gotten to a lot better places \[unintelligible 00:51:56.29\]

**Adam Stacoviak:** \[00:52:01.00\] Yeah... And I think it's also important to realize if you are gonna be the kind of company you are - which is distributed, and as you said, remote-only - not just optionally remote, but remote-only - that you may have to... Well, not "may." If you choose to go down some of the paths you have, you will absorb travel and flight costs as a result of not having an office cost. So what you thought you might save, you actually spend elsewhere. I'm sure you can attribute to that...

**Bryan Helmig:** Yeah, definitely. That's definitely a part of it. But you know, we really think it's worth it...

**Adam Stacoviak:** Oh yeah, hands down.

**Bryan Helmig:** ...the benefits of being remote. It's amazing.

**Adam Stacoviak:** One thing you said there was the hackathons, and when you said that, I thought of the way you may or may not be treating your company like a community that you nurture. I've never gotten to a company where I run a company of hundreds of employees, so I don't have that lens like you do, but to think of the people that work in your organization as family, for one, but then a community that you constantly nurture - it seems like the hackathons and the gatherings are a way for you to sort of like love on people, and show them you appreciate them. Can you speak to that?

**Bryan Helmig:** Yeah, for sure. I mean, it is -- like I mentioned earlier, that energy level goes really high; we spend that time to celebrate some of the stuff we've been doing... Because you know, it's funny you spend so much time talking about stuff you wanna improve, you wanna do better... I mean, for us, we spend so much time talking about "How can we get more apps to talk together, and do more integration work for customers, and for partners, and all this..." and as a result, you spend a lot of time focusing on the problems... You spend a lot of times saying "We can do better, we can do better here, we can do better there..." But to carve out some time and spend a bit of time looking back and being like "Wow, we've done a lot here. This is something we're pretty proud of" - that's pretty special. We try to use the retreat as a part of that kind of opportunity -- use that as an opportunity to talk about those sorts of things. So we definitely do that...

We definitely spend the time and you'll see lots of people playing board games... We've got a lot of folks who are big board game geeks, myself included. You just get a chance to really get to know the people who you're working with, you're building this awesome stuff with... And that's important; having that human connection is really important.

So that's a big reason why we do some of these retreats, even though they're expensive, even though they're a lot of work to plan, even though they can take away time from your family, and stuff... It's certainly a bit of a sacrifice, but we just get a lot out of it as a result, and I think a big chunk of it, as you say, is kind of a chance to celebrate and bring the team together... Yeah, it's a big part.

**Adam Stacoviak:** There's something you mentioned (I think) in the first part of the call, around the YC days; at least the beginnings of this was then... An aspect of your product is this developer platform, and I kind of tongue in cheek joked that you can't pay people with Zapier bucks yet, and that was mostly because I had assumed at some point you may have thought about blockchain, or crypto being involved and being earned through API -- I don't know... It was a small joke, but I'm just curious about this developer platform, what it is and how it's really helped take your company to a next level, because you don't have to build everything now; you can actually bring in other teams... I'm not really sure how it works, but can you break that down for me?

**Bryan Helmig:** Yeah, I'd love to. That's a good question. The power of Zapier is we have over 1,000 apps connected, and tapping into that network is a big value proposition for a lot of partners, a lot of people building SaaS software today. So that's really where the developer platform started. It's just to handle the scope and the long-tailedness of services such that anyone can tie into it.

We have people who are writing their own internal APIs, that are just their own company APIs, that aren't productized or anything like that, and they're building apps on Zapier, so their employees can tie this into Salesforce, and Asana, and all these different services.

\[00:56:15.07\] So we've seen it used in interesting ways, but the biggest ways - definitely just like partners coming to us and building on it, and them being able to tap into the power of Zapier's platform to power integrations... For them it just makes a lot of sense; they can write their integration once with Zapier, and they automatically get thousands of different connections... And if you do the math -- we did the math and it's like... If you just limit it to like two-step Zaps, it's like 14 or 15 million different combinations that you can do, and we'd let you do way more than that; you can build entire strings of workflows now... If you look at that, it blows up to the number of atoms in the Universe kind of stuff. The math is just insane.

That's been a huge boon for us, it's been a huge boon for our users to be able to utilize all these different services, and our partners to be able to add on to it... Yeah, it's just been really interesting. We haven't leaned into blockchain or any of those sorts of things... The platform really is like an SDK, it's a CLI tool; we're working on even improved ways to build out, much like the workflow editor that users use - it's a very wizzywig, what you see is what you get. You can add your steps and customize them and build some of these complex workflows, and even simple workflows to make your life a lot better, a lot easier, more automated...

We're trying to do the same sort of thing for the platform side, and just make it even easier for folks to be able to add their own functionality to Zapier. So yeah, it's been a pretty awesome and powerful lever for us as a company.

**Adam Stacoviak:** I guess coming closer to the end of our call, I wanna kind of focus a couple questions or asks on maybe specific lessons learned for you. Maybe something in particular that may be pretty embarrassing, or may be pretty awesome for you in your journey of building Zapier. What are some stories I may not be aware of, I couldn't find on the internet, that's like lessons learned for you in building this business?

**Bryan Helmig:** One of the interesting things -- if we wanna take it back to hiring, one of the interesting things is we've come to find that it's better to frontload the work on hiring than it is to put it into let's say training, or something like that. That's not to say stuff like onboarding isn't critically important; we obsess about like the first couple days for example of an engineer's time in Zapier... We want them to put together a small, little PR and ship something, and make sure it's little, so they learn the deployment process, and then start to add more meat to the projects... And things like that.

But when it comes to training someone, an hour of training is worth an order of magnitude more value on the hiring side, without a doubt... And especially for a company that's remote - again, we can hire anyone; that time is well spent, because you have -- geez, whoever lives within a 30-mile radius of your HQ,...We have 7,5 billion people that could potentially work at Zapier. That is a lot of opportunity and a lot of amazing talent in the world... So for us, it's even doubly so. But if I could write a letter to myself, it would be to obsess even more about some of the hiring side of things, especially since you have this super-power, which is hiring remote... And it's better for everyone; you don't have to commute, you don't have to sit in traffic on your way to work, you don't have to deal with the office sort of environment. You can be anywhere in the world, you can live the life you want. It just makes so much sense.

\[01:00:18.13\] And for us, it's like, you can double down, you can really lean into that... And for us, that's like on the hiring side. Definitely, time spent on the hiring upfront is worth a ton more, spent on training, or trying to get people in the right spots, and things like that.

**Adam Stacoviak:** When you say "time spent", do you mean vetting a person, or...?

**Bryan Helmig:** Yeah, getting to know them, doing outreach, getting to be part of the community, making people aware of your company... That's just step zero, right? That time has always paid off for us, and it pays off in a multiple for us, for being remote.

Maybe folks who are out there thinking about building a remote team - lean into the strengths of doing remote; really find those great people. Don't settle for folks who are like "Oh, maybe I could see it" kind of thing; really focus in on those great folks. That's really worth it in the end.

**Adam Stacoviak:** One question I'd like to ask is something super-secret... So imagine there's something that you know about Zapier that you're gonna do, that no one knows; something on the horizon - maybe a new product... Just anything. I'm not even sure what it could be. Something super-secret that no one else knows about, that's on the horizon of what you're doing, that could be shared here today.

**Bryan Helmig:** Super-secret, on the horizon, that no one knows about...

**Adam Stacoviak:** Maybe not many know...

**Bryan Helmig:** Yeah, that I could also share... You know, there's some things I can't share. I would be--

**Adam Stacoviak:** Tease it then... Tease.

**Bryan Helmig:** Yeah, so I could talk a little bit about our developer platform, because I talked a smidge about it.

**Adam Stacoviak:** Yeah.

**Bryan Helmig:** One of the things we're trying to do is make it even easier to use a developer platform. The very first one was built in a hurry, over that summer that we've talked about... And I'm not gonna say it was the greatest design product of all time, but it worked, it served its purpose; we've added the CLI version to that, because we had lots of devs coming in that wanted to build, and they didn't wanna be building it in a browser, they wanted to be working with a normal SDK. It's Node.js \[01:02:46.13\] for us... But then we kind of saw this diverging of the two platforms, and really what we were trying to do is bring them back together and do what we wanted to do in the first place. If we could have built the perfect thing, or the better thing in the early days, that's what we were really spending time on now.

So I'd expect folks who are thinking about adding integrations or any of that stuff - you have to keep an eye on the Zapier platform for the next couple months; we've got some really cool stuff coming there, that should make it even easier to add lots of cool use cases to Zapier, and give users even more ways to connect the tools that they love, that they're using every day... Adding that 1,001th, 1,002th and 1,003rd app to Zapier, making it even easier. I can't talk a whole lot about the details there, but it's definitely coming and it'll be really cool.

**Adam Stacoviak:** What's the best way if someone's listening and thinking "I wanna follow along or catch up or get an update when this may or may not happen" - what are the best channels to maybe catch on to that are sort of like Zapier updates?

**Bryan Helmig:** Yeah, the best way is just to get signed up on Zapier.com. You can get an account... The dev account is free; you don't have to get approved, you don't have to pay money, you don't have to do anything. Anyone can create a developer account and start working on it.

\[01:04:03.16\] In fact, Zapier has free trials and you can even start using it and playing with it, building your own workflows... It's definitely got a pretty useful three-tier to it. So I would recommend that.

If you're in the persona of a dev, or you're using some of the dev tools, we'll find a way to let you know about it... But all the kind of standard ways also apply - you can check us out on Twitter, you can sign up to our newsletter, we'll definitely do announcements on our blog... But yeah, I'd definitely recommend folks just give Zapier a spin, and we'll definitely let you know about all the cool stuff that we've got coming, because we've got a lot of cool things cookin' these days.

**Adam Stacoviak:** So obviously it was fun hearing this back-story from Startup Weekend... Kindred spirits, so to speak, considering we've both been through one, and you built a company around one, and I participated and walked away... So different aspects of it, but quite a journey you've been on to get to where you're at... Everything from YC fundraising, interesting ways to hire, hiring friends - the whole journey. In closing, what advice could you share for those listening who are would-be or should-be founders and makers of a company?

**Bryan Helmig:** You know, the best advice is usually the simplest. I would say find that feedback, that iteration loop that you can kind of get obsessed about. To me, the closer it can get to "Write code, talk to users, rinse-repeat, over and over..." - that's like the magic loop. Building a company, building a business is a lot of work, but it's not complicated. The core loop is really simple. Most great things are.

That would be my number one thing - figure out how customers get value out of your service and obsess over that. Don't obsess about the other stuff. Don't obsess about fundraising, don't obsess about being seen as the darling in like PR, don't obsess about any of this other stuff that I would probably put into like the cargo cult... And you see other companies -- you see Slack; everybody loves Slack, and they're an amazing company, but the reason everyone talks about them is because of the amazing product they've built, not the other way around. They didn't build a great product because everybody talked about it... You know what I mean? These are the fundamentals.

So obsess about that, don't obsess about the other stuff. That would be my key thing. And if you can find a way to really just - I keep saying "obsess" - like, where you can't not do it, and you can find out how to nurture that, that's where the power is, really... Because then you'd rather be doing that than anything else, and you know you're onto something.

So that would be my core piece of advice. It isn't the most tactical, it's not gonna be a silver bullet, but when I look back to stuff that really worked well for Zapier in our early days, it was finding that tight loop, it was finding that customer value, and just going hard after that, and kind of just being aloof to everything else, in a way.

**Adam Stacoviak:** \[01:07:04.12\] You're right, people can obsess around the wrong things, and I think you're right, "obsess" is the right word. I would totally obsess over writing code, talking to users, and rinse and repeating, because that's how you improve the actual product... And I think obsessing over that is more important than some of the other things that tend to be distractions. And in some cases, if you're watching -- not even like peers, so to speak, like competitor peers, but just general other businesses that are killing it, or businesses you aspire or are inspired by, you can be like "I wanna be like them", and you end up trying to emulate them, versus talking to your users, rinsing-repeating that process, finding that feedback loop, and you end up getting lost and not really finding your own way.

**Bryan Helmig:** Yeah, 100%. If you can find that, that's the most powerful lever as a founder - just getting into that, and getting your company around it as well... Hiring the people that will carry that torch and make it part of their loop, too. So yeah, that's the crux of it, that's where I spend all my time.

**Adam Stacoviak:** Cool. Bryan, thank you so much for your time today, I appreciate it.

**Bryan Helmig:** Of course. Thank you so much, Adam.
