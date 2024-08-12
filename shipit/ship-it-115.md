**Justin Garrison:** Hello and welcome to Ship It, the podcast all about everything that happens after Git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm kind of tired. How are you?

**Justin Garrison:** How many cups of coffee have you had?

**Autumn Nash:** Only one. I'm not working on the second one, okay? I'm working on it.

**Justin Garrison:** I don't think either you or I can complain about being tired right now, because neither one of us were fixing blue screens from CrowdStrike, so...

**Autumn Nash:** Oh... Ops hugs to the people that had to deal with that. Y'all are the real MVPs, and just all the coffee, and sanity.

**Justin Garrison:** And $10 gift cards. \[laughs\]

**Autumn Nash:** That's all they're going to be able to afford after they pay for the SLA breach of contract...

**Justin Garrison:** Yeah, it's going to be fun. So this is our first recording after everything that happened with CrowdStrike. I'm sure if you're listening to this podcast, you know exactly what has happened... But we're going to go into it a little bit in the outro, as it's just a fun -- what we've learned from it. Again, Autumn and I do not do Windows management. I used to manage endpoint computing at a university, and so we had - I think it was 3,000 or so computers in classrooms, labs, laptops, all sorts of things. Majority of them were Windows, and so immediately when I saw this happen, I was just "Oh, I know what I would have to do in that situation." And in a lot of cases too, even at the university, we didn't have automation for a lot of the stuff. There was some group policy, and there was Active Directory, but it wasn't available to me as the endpoint manager. That was the sysadmin's for a long time. So anyway, we'll dive into it a little bit.

**Autumn Nash:** I think the crazy part is Windows is used by so many hospitals. You know what I mean? And so many of their devices, because of HIPAA and the different requirements had to be taken physically into offices, and they had to deploy people to physically to those... I think Seattle's Children's Hospital had to shut down all of their inpatient clinics. You know what I mean? That's wild.

**Justin Garrison:** Right. And this was 8.5 million devices, which the reporting that I saw said less than 1% of all Windows installs, according to Microsoft. Which is just a staggering number to think of. Wow, less than 1% is still a really big number.

**Autumn Nash:** Yeah.

**Justin Garrison:** And yeah, a lot of it was travel, hospitals and banking.

**Autumn Nash:** There were some people that were still stuck in airports a week later.

**Justin Garrison:** Oh, I mean, Delta has canceled thousands and thousands of flights... And I just can't believe the amount of things that people have had to go through to get this problem fixed. So we're going to go over a little bit.

**Autumn Nash:** I feel so bad... Like, there was a guy on Twitter that was saying he was on day three or four of being stuck with Delta, and had no hotel, no rent a car... And they were just "Sorry, we don't know when you're going to get out." And I'm just -- can you imagine? Like, you only pack so many clothes. He has no access probably to his actual luggage, you know?

**Justin Garrison:** Right, if he checked a bag.

**Autumn Nash:** Yeah. And he's just sitting in an airport. And you only have so much paid time off... There's so much that goes into traveling. It's already such a stressful process.

**Justin Garrison:** Air tags and bags. I love it. I'm going to go find my bag and get my clothes out of it.

**Autumn Nash:** I just got an image of you crawling through one of those luggage --

**Justin Garrison:** I always wanted to go on the little conveyor belts, through the little... Yeah, that'd be fun.

**Autumn Nash:** I just had a whole mental image of your face sticking out of one, and a smile... Like, it kind of made my day. Like, I'm slightly more awake now.

**Justin Garrison:** Toy Story 2. At the very end of Toy Story 2, the big chase, they go into one of the things... I remember as a kid --

I wasn't really a little kid, but...

**Autumn Nash:** See, this just proves that Disney fumbled you. They fumbled. They just -- they messed it up so bad. You were perfect for that company. They should have used you as a systems engineer, and a cartoon inspiration, because you are a big kid. Okay?

**Justin Garrison:** I knew almost nothing about Disney the company before joining Disney, and my wife always said I was the worst Disney employee, because I knew nothing. She's "Well, what about this?" And -- I learned a lot in six years working there, and I read books, but...

**Autumn Nash:** What do you mean you didn't know anything about Disney? How does one end up a big kid and not -- did you watch the movies, and stuff?

**Justin Garrison:** I did some, but it wasn't a -- I mean, we had one recording VHS of a couple shows, but it was just straight off TV. We didn't buy the movies. I didn't have cable as a kid, I didn't have the Disney Channel, I didn't do all that stuff... So whenever they showed the Sunday night Disney movie, we would record one.

**Autumn Nash:** That was -- my childhood was based off of the Sunday night Disney movie. What do you mean?

**Justin Garrison:** But then again, most of the stuff I did -- I played sports. I went outside. And I lived in Southern California my whole life, but I didn't go to Disneyland that much. We didn't have the money for Disneyland.

**Autumn Nash:** That was the only vacation I ever went on in my childhood.

**Justin Garrison:** Yeah, our vacations were camping at the lake. We'd go find a local lake or a river.

**Autumn Nash:** Ewgh, you went outside?

**Justin Garrison:** I was always outside.

**Autumn Nash:** That sounds horrible. I played with Disney princesses and stayed in the house.

**Justin Garrison:** But thinking back history-wise, of what Disney and historically what we did as kids, in today's show we have Martin Jackson, who's going to talk to us about something that wasn't even that long ago.

**Autumn Nash:** \[06:03\] It felt like it, though. It felt a super-retro episode, which is just -- it's really funny the way that technology has evolved, especially when it comes to just infrastructure. I feel we went through warp speed the last 5 to 10 years of infrastructure.

**Justin Garrison:** The acceleration of infrastructure and application management in the last 10 years has been astronomical.

**Autumn Nash:** It's wild.

**Justin Garrison:** The things we're talking about here - this is 2014. We'll get into it -- you know, we're deploying Puppet at Walmart to a bunch of stores, from no configuration management; just servers set up with actual checklists. Literally word docs.

**Autumn Nash:** Mainframe influenced configuration -- but it's just wild. For one, who would have known that Walmart was such an innovator in that space? And then it wasn't long enough -- like, we were already out of high school. We were already adults when this was happening. You know what I mean? This is not something that happened in the '80s.

**Justin Garrison:** And 2012 I think is when I went to Puppet Conf. Puppet Conf in 2012, 2013. And so I was definitely -- I was Puppet certified, I did all the training... I was going to the conferences and deep into it. So I'm pretty sure that I was influenced by what Walmart was doing at the time, because I was looking at -- in my little sysadmin area of managing a couple of hundred servers, I'm like "I don't want to do this SSH anymore." And then extrapolating that out to thousands, hundreds of thousands of servers, at 5,000 stores or whatever... That was just astr -- I couldn't even imagine how that scaling would work. And we get into it in this talk, and so that was great.

**Autumn Nash:** You know how we were talking about the Netflix blog, and people kind of sharing knowledge? And it's a little wild that they were doing such innovation... And you don't want to end up on the news for it going wrong, but it's also wild that they weren't almost talking about their accomplishments more. Nobody would have known.

**Justin Garrison:** They did in certain circles. Because that was in the Puppet world. I knew about Walmart moving to Puppet.

**Autumn Nash:** But did you know the scale, and the -- you know what I mean?

**Justin Garrison:** In some of the talks. Yeah, for sure. But I didn't want to -- I don't want to spoil the interview here, but the fact that that migration is still going on 10 years later...

**Autumn Nash:** It's wild.

**Justin Garrison:** It's still happening. Because the accomplishments of 10 years ago no longer look like accomplishments today. And so now if you're not going to AI, and doing the cloud and doing Kubernetes, you're like "Oh, forget -- get out of here." There's so much legacy.

**Autumn Nash:** I mean, I don't know... But look at how you turned around, and a lot of people are going from the cloud to on prem. So is it, though? You know what I mean? And yeah, everyone's doing AI... But until when? Until they rip it all out of things all over again. So I feel like as long as they're on this -- depending on what side of that 10 year later structure, we might all be going back to it. I mean, there are whole startups that are very successful because they are allowing people to do on prem and cloud, and hybrid clouds. So...

**Justin Garrison:** And the foundations that were laid 10 plus years ago with things like configuration management and automation and just getting the organization ready to adopt that sort of massive changes, and automating and trusting systems - that was foundational to everything we're doing today. There would be no Kubernetes if there was no Puppet.

**Autumn Nash:** And all of this leads into how automated infrastructure has gotten, how we got so good at mass rollouts, and deployments, and just kind of the basis of -- and that stuff's not going to change.

**Justin Garrison:** So let's not spoil the whole the whole interview. Let's jump right into it with Martin, and we'll come back afterwards and talk about CrowdStrike.

**Break**: \[09:48\]

**Justin Garrison:** Thank you so much, Martin Jackson, for joining us on the show today. Martin currently works at Red Hat, doing a lot of different automation and container stuff, but also what we we kind of were talking about in the pre-show was some of your work you did at Walmart with configuration management... And I kind of want to dive into that first and see how it's going. But first just tell us, what was your what were you responsible for at Walmart with configuration management, and what did that look like?

**Martin Jackson:** Yeah, sure. So at Walmart I got into configuration management formally in -- it was about 10 years ago. I had been a network engineer where I was responsible for maintaining Walmart's IPAM systems, IP Address Management, DNS, DHCP.

And one of the things that I'd done in the IPAM space was to help write and then be responsible for the rewrite and redesign of our in-store IPAM system, which maintained multiple DNS zones, DHCP configurations, with both pools and static configurations, and an introductory user interface that allowed field support and non-technical people to interact with the IP address management system to create DNS zones, entries for every store. There's a lot of complexity to it. And this was really the beginning of me being involved in configuration management, although I didn't know it at the time.

After many years of doing this IP address management stuff, we were trying to do IPv6, and IPv6 still hasn't happened.. But I got a bit frustrated with that, and then I got the opportunity to move to infrastructure as a service team, which was just forming at the time. And so we evaluated a bunch of the leading solutions at the time. Chef was actually the incumbent, because Walmart had just gotten serious about e-commerce. And our e-commerce division was using Chef, they loved Chef. They'd just made a purchase of an organization called OneOps that was based on Chef, and they could also use Puppet, and Ansible wasn't really a thing yet.

So we did a competitive evaluation of a bunch of these configuration management products, and much to our surprise, open source Puppet won. So our initial configuration management deployment was open source Puppet using the form as the node classifier, and all of that stuff.

**Justin Garrison:** And for anyone not familiar, Foreman is a Red Hat product that does mostly provisioning, but it has that configuration component. It gives you all your data about machines, and you can combine that metadata with a Puppet manifest, and then deploy a complete system.

**Martin Jackson:** Yes, yes. Foreman is a pretty amazing thing in and of itself. It was a lot earlier in its lifecycle. It's grown the ability to do an awful lot of interesting things. It's the basis of the Red Hat satellite product, in fact. So there's a lifecycle piece, there's content, there's a lot of that stuff. I've always loved the Foreman , and that gets to be part of the Red Hat story. I'm sure we'll get to that in the conversation.

Okay, so we were in the process of doing configuration management. We decided on Puppet as being the solution that we were going to use... And so we got heavily into the prospect of writing content for it. We had a couple of really experienced systems engineers that wrote the bulk of our content for the initial deployment of what we were going to do. And I was responsible for designing what the head end was going to look like, how the Puppet services were going to be laid out, with the load balancing, and division of labor, and all that stuff. So there were a bunch of us. And then there were a couple of other store guys that were instrumental in helping get a bunch of that stuff deployed.

\[17:46\] The really exciting thing -- there are projects like this that go on at companies like Walmart all the time. One of the real learning moments for me was when we were talking about how excited we were about Puppet, and showing it to applications teams, and like "Hey, wow, we can make changes across the entire environment in hours." And everyone was like "Uhh, yeah... I mean, we've already got a dozen systems that can do that. Who cares?" "What do you mean you've got a dozen systems?" "Well, there's our main package distribution system, an internal thing called Dust, there are a whole bunch of proprietary products for it... What makes this different?" And I did not have a really good answer for that at the time.

We learned through brutal experience that along with the ability to do infrastructure as code comes a responsibility of doing those deployments in a conservative and safe manner, because if you send a bad change to a lot of places very quickly, it can have a lot of consequences.

**Justin Garrison:** Hello, CrowdStrike.

**Martin Jackson:** Right. Right. We are recording this after the CrowdStrike incident, which now even completely non-technical people kind of understand is a bellwether as far as that goes. But for a lot of other reasons, it was very important that we improve on a lot of our situations. The way the internal Walmart architecture is laid out, every store is a data center into and of itself. And so there are a number of servers in each store, and in the U.S. alone Walmart has 5000 stores.

So you've got somewhere between four and a dozen server images per store. That racks up the node count really quickly. And the ability to assert policy, and to know for sure what configurations are across that entire state was really powerful. It was a capability that our infrastructure leadership really wanted to be able to have.

**Justin Garrison:** Now, with that many stores and servers spread across that broad of an area, were you running as much as you could locally in the store, so internet disconnects are fine? You're just like "We have to deploy the whole stack every time in every area", which is probably - what percentage of overhead per store is just the management side? You need to have Foreman , and Puppet servers, and storage, and all that stuff. If you have four racks in a store, half a rack is just overhead?

**Martin Jackson:** We only deployed what absolutely had to be deployed in the store, at the store. Officially, the application-addressable capacity was about half a rack per store. And then with all the necessary backup and other infrastructure, it winds up being about a rack and a half, two racks, give or take. Network gear, all the redundancy...

**Justin Garrison:** Yeah.

**Martin Jackson:** Deploying Foreman inside a store would have been nuts. We technically would have had the capacity to do it, but one of the things that we were trying to do was to provide a centralized reporting capability of what the current state of everything was. One of the biggest things that we were able to deliver in terms of just showing people how widely certain kinds of configurations drifted was one of the early Foreman capabilities of creating graphs based on Puppet facts. And so one of the facts that we had was kernel version. We created the graph of kernel version. We have 200 kernel versions --

**Justin Garrison:** All of the kernels, yeah.

**Martin Jackson:** ...from those 5000 stores... Yeah. Every single kernel that had been released --

**Justin Garrison:** It was out there.

**Martin Jackson:** Several PTF kernels, which were what they call precision-targeted fixed things for very specific problems that had occurred at just that store. Everyone's like "Wow, that's really a problem. I would have thought it would have been a lot more consistent than that." Well, you would, but this isn't your day job. So for your level of abstraction, it kind of is.

But that was one of the things that we used to help show that there was value in configuration management at that scale.

**Justin Garrison:** Right. That amount of drift is just impossible to debug anything. Once you say "Oh, store 873 has this weird issue with this one thing that's not responding", it's like "Okay, well, how is it different than store 900?" It's like "Well, who knows?"

**Martin Jackson:** Yes, that is exactly the problem that you run into. And we were training people to get used to the idea of being able to rely on certain configurations being a certain way. And when you're in the thick of it, your first thing is "Okay, check this, check this, check this, check this." If you're in the middle of a really serious issue, it could take you an hour to check all of the things that you know you need to check, just kind of in the back of your head, for what the major problem could be. And until you know what the state of those things are, you can't sort of proceed to the next part of the troubleshooting tree.

**Justin Garrison:** \[22:32\] What did the application layer look here? So you have racks in stores, and you're deploying and configuring Linux on top of it... This is pre-containers, this is pre-Kubernetes stuff, so you're probably just deploying -- an application developer creates an RPM, throws it in a repo, and then Puppet says "yum update" somewhere. Is that the cycle? Are application developers doing any of the Puppet configuration, too?

**Martin Jackson:** Oh, RPM would have been so much better than some of the actual things that we had to do...

**Justin Garrison:** Git push.

**Martin Jackson:** The store workflow was actually developed during the proprietary Unix era. The way that all of this happened was that there were a smorgasbord of potential commercial Unix'es that were available for store deployments. And did you know that NCR made a Unix once upon a time? Oh, buddy... Yes, they did. It was called MP-RAS.

**Justin Garrison:** Everyone made Unix at the time. I'm sure every company out there had a Unix flavor.

**Martin Jackson:** Yeah. Well, we had MP-RAS, HP-UX, and we had AIX. And all of the basic store deployment systems were based on this. And so all of the tool chains were based on the idea that your application could be running on any of these three Unix'es. Why three, you may ask? Because Walmart is a retailer, and Walmart's differentiator for years and years and years and years was always price. So the way that you get prices down in a store is to say "You sell soap, you sell soap. Who's going to have the lowest price point? You two work it out." And "Well, we'll buy this much. We'll save this much at this price. We'll save this much at this price."

So Walmart had for years operated the strategic vendor environment where vendors were expected to compete with each other on the basis of price. And this worked in technology, too. So for the different Unix variants, they basically threw it out for quarter era bids. "We're gonna retrofit 200 stores this quarter. What's your bid for hardware and software?" And whoever came in with the lowest bid was the one who won. So are we deploying HP this year? Are we deploying MP-RAS this year? Are we deploying AIX this year? Who knows...?! We didn't know. They didn't know. But all of our systems had to have the same basic capability.

Now, years went by, and at this point of Walmart's history, it was solidly into virtualization. So it was all Zen and VMware at this point. So we didn't have the proprietary Unix component of all of this, but we did have a lot of the tooling that had existed from that era, because all the migrations and everything. So we had an internal build and packaging system that would compile the application code. Yes, compile. Because a lot of these applications were 4GL, ESQLC. And yes, I kid you not, COBOL.

**Autumn Nash:** Oh, no...

**Martin Jackson:** Fun fact. We tried several times during my career at Walmart to enumerate the number of applications that were on an individual store server, and no one could agree on the definition of applications. So that answer ranged somewhere between 800 and 5,000. These were individual software artifacts that were deployed to this individual server image, and you had to deploy each artifact to every store in the chain. That was the way the architecture worked. Yes, it got wild.

**Autumn Nash:** What was the purpose of having servers per store, instead of having it all in a centralized area? Why servers in the actual locations? And then running that many applications on those servers. Because it just seems it would be very hard to onboard new people, and to troubleshoot, and then to keep all those different servers updated if they're all running on different hardware.

**Martin Jackson:** \[26:17\] Oh, yeah, it was a full-time job for a lot of us keeping all that stuff up to date, for sure. But the reason it was done that way was that the basic origins of this architecture go back to the old mainframe days of the '80s and satellite networking. When they had it all centralized on a single mainframe, they had massive scaling problems, because Walmart went through this whole period where it was the fastest-growing company that anybody had ever seen anywhere. And it went from being a minor regional retailer to a national retailer, to the world's biggest retailer in the course of about 15 years. It's really kind of crazy how all of that worked out. But at the time, the first architecture was a batch mode thing where basically they would do local stuff, and then there was a modem that would dial the home office, and everything would upload to the mainframe, and they'd pull the stuff that they needed, and they'd hang up. And then someone got the idea "Hey, if we got more information about what stores were selling in real time, we would be able to make better business decisions." Well, but that would cost a lot, because it would require full-time networking, and you can't do full-time networking. And then the networking industry came along and said "Oh, yes, we can. Watch us."

So there were a whole series of full-time networking technologies that were deployed. We did ATM, we did \[unintelligible 00:27:40.29\] Frame relay... A whole bunch of those things. But a lot of those still had some really serious availability limitations, and crucially, bandwidth limitations. So it wasn't until past the year 2000 where we could rely on having more than 56K of bandwidth. K, not megs. K. And that was the burst. You bursted to 56K. Your guaranteed committed information rate was 16K. 16K.

**Autumn Nash:** How do you get a whole store's worth of inventory and data on the size of a Walmart store with that low of -- that's wild.

**Justin Garrison:** You don't. That's why you put all the servers in the stores.

**Martin Jackson:** And that is why you put servers in stores. Because with the variability of the user experience for what it would take to look that stuff up in real time, it's a lot easier to preload it and maintain it locally, and then synchronize differences. There were a whole lot of internal Walmart protocols that were developed to synchronize from the home office to the stores, and from the stores to the home office in turn, that were differential protocols that would understand and deal with this data rate limitation.

**Autumn Nash:** Were you still at Walmart when it got to the point where people were ready to re-architect that framework overall, to try to make it more modernized? Because I feel like at some point something's got to give.

**Martin Jackson:** Yes.

**Autumn Nash:** When we do retro episodes, I think about all the things that we complain about now, and then it puts it into really good perspective. You were like "I wish I had RPMs", and I was like "Oh goodness. There's something worse." So at some point, I'm sure...

**Martin Jackson:** I came to Red Hat because I loved Red Hat technologies. But RPMs - RPMs are cool when you understand them. It's just that RPM is very picky about who it allows it to understand.

**Autumn Nash:** How do you re-architect something so big in that way? Because the way that you're explaining it, with it growing so fast and it being the first retailer to grow that fast, you're solving a problem that's never been solved. So how did you go about re-architecting that system to solve this new problem? That's a good problem, but you know...

**Martin Jackson:** \[29:55\] Yeah. Well, my move to what would become the configuration management team was a big part of that. We recognized that there were a whole lot of things that we needed to modernize. But because of the way that technology rollouts happen in a company that size, and with national reach and global reach in some cases, that's not something that you can change overnight. So you need to build an entirely new set of capabilities, and introduce them gradually in such a way that the stores that are able to take advantage of them can, and you don't penalize the stores that can't take advantage of them yet.

And that's never a perfect transition plan, but you're kind of like Indiana Jones at the beginning of Raiders of the Lost Ark, where you've got the bag of sand, like "Yeah, it looks you need a couple ounces", and you put the bag of sand down, and the boulder's coming. You know the boulder's coming. But you're just hoping that you get an extra four or five seconds to get away from the boulder. But yes, the basic strategy is that a lot of those applications keep running, but we have to add new capabilities underneath them, around them, to make it easier to deal with.

I kid you not, for many years - and it wouldn't surprise me if this is still very much a thing that happens, because I haven't been there for a couple of years, but... We always refer to the server images as tapes, because for a long time they were literally tapes. If you needed to DR a store, it went to the tape drive. And eventually physical tapes went out, and you had rotational media that could store several terabytes at a time. You didn't need tapes anymore, but you still called them tapes.

Lots of people around Walmart still called logging into a server dialing in. "Oh yeah, I'm going to dial into 873." Dial in? What do you mean?

**Justin Garrison:** You were literally dialing a phone number, and making sure a computer picks up on the other side.

**Martin Jackson:** Yeah. That's what it was.

**Autumn Nash:** So I'm guessing for a long time you were maintaining two different architectures while you were moving stores over? What was it maintaining both of those, and how long did it go on? Because I feel like when you're trying to herd people over to a new system, it's very hard.

**Martin Jackson:** All of my best information says that that transition is still ongoing.

**Justin Garrison:** Yeah. Every large enterprise is in a stage of migration, and it doesn't matter how much, what percentage.

**Autumn Nash:** I mean, I feel like it's constantly, but I mean, just to the systems that you were going from the mainframe-influenced architecture to something more modern. I'm sure that it's in a constant state of migration, but basically to what you were trying to migrate it? Did you ever get to a point where everything moved over, or do you think it was still moving for like --

**Martin Jackson:** No.

**Autumn Nash:** Wow.

**Martin Jackson:** I know for a fact that big chunks of the mainframe-influenced architecture is still in place, and they plan to keep them in place for quite some time.

**Autumn Nash:** See, this is why I say legacy tech is going to be just -- everyone's always like "Don't you want to work in AI?" And I'm like "I'm good... It'll be fine..."

**Justin Garrison:** Well, legacy makes the money, right? The new stuff -- if you open a new store, you have a chance to redesign some things and say "Hey, I need a bigger data center", or "I need more cooling" or whatever it is for the new store, but you still have the other 5,000 stores that's like "Well, what does it take to make them look this?" They're never going to. Those buildings exist, and you're not going to get larger A/C units because the power grid can't handle it. There's all these decisions that are outside of your control that you're just like "Well, we have to live with the lowest common denominator", which goes right back to application deployment. You had no packaging system, because you had three different operating systems. You're like, you're just moving files, and you're hoping that a lot of those file formats are as portable as possible, which is like plain text, right?

**Martin Jackson:** Well, we made our own. That's what it was. It was tar-based. I mean, okay, if you're allowed to hate one thing about RPM, speaking as a Red Hat person - the fact that RPM was CPIO based is nutty. I don't get why they did that. I'm sure they believe that they had really good reasons for it at the time.

**Autumn Nash:** Red Hat needs to give you a raise... The way that you go so hard for Red Hat, I love it.

**Martin Jackson:** \[34:04\] I made a big decision 22 years into my career, and I'd better believe in it. Yes.

**Autumn Nash:** I love that.

**Justin Garrison:** Now, what did it look like as you're rolling out configuration management on all these stores, and you're saying "Hey, we have this new system. We want you all to move to it", and you're trying to centralize some of that data. Obviously, you have network connectivity, or you have things that are outside of your control of like "Oh, this can't go faster", because physics, and speeds and everything... But what were the bottlenecks as you're rolling that out to say "The store can basically run the Puppet server there, but do you have \[unintelligible 00:34:35.07\]

**Martin Jackson:** Oh, no. No, no, no, no. We didn't, we didn't run Puppet servers in stores. The Puppet server components were all centralized.

**Justin Garrison:** Oh. So they're all getting manifest from one location, and then running them.

**Martin Jackson:** Yup.

**Justin Garrison:** Okay. I used to run Puppet at a couple of places, and scaling Puppet servers is not an easy thing, because that's where the load is. They're doing the compilation of what the server specs are, and the manifest and everything, and it says "Oh, all the heavylifting goes to the server", instead of things like Ansible and Salt, and stuff that - put it on the clients, essentially. And so what did that look like, to be able to push that much data from that many locations into a centralized place that does all the heavy lifting?

**Martin Jackson:** That was one of the most exciting and fun things that I got to do from the years 2014 to 2016. Because the scaling of the head end Puppet infrastructure was primarily my responsibility during that time. Part of the big story there is that in especially 2014 we had very aggressive infrastructure management, that had a very high appetite for a risk, and it was great. He was a little Sicilian guy. He always liked to talk this, you know... I love the guy. He's off in North Carolina doing a consulting or something now, but he was a trip to work for.

There was one day - and I tell this story in the Puppet conf 2015 keynote, because this is the way it actually happened. He called us in in August of 2014, after we deployed Puppet to a few hundred servers... And this was a pretty big deal, you know? Changes are automatically happening in some stores based on this... And he's like "How are we going to make a difference for stores this year, before lockdown?" And lockdown means you have through Halloween, basically, to get these deployments done. So we had two months. "How many stories do you think we can get to?" And I was in there, I went and talked to a bunch of other senior engineers, and we came back, and "How about 500? 500. Does that sound good? 500 stores by October." "No. 2000." So we went back and forth a little bit in his office there. 2000 got written on the board. I remember this very clearly.

**Justin Garrison:** 2000 stores in two months?

**Martin Jackson:** Yeah.

**Autumn Nash:** Wow...

**Martin Jackson:** It gets better. One of the guys said "Well, crap. If we're going to do 2000 stores, we might as well do all of them."

**Autumn Nash:** Oh, no...!

**Martin Jackson:** And everybody just looked, and they're like "Uhh..."

**Autumn Nash:** But why?

**Martin Jackson:** Yeah. Sicilian guy says "Yes! I love it! That's the spirit!"

**Autumn Nash:** Did he have a pager?

**Martin Jackson:** Oh yeah. Yeah.

**Justin Garrison:** Someone just in the back, "Do all of them!"

**Martin Jackson:** Yeah. No, we all had pagers at that time. Senior leadership would go into the big war rooms with us.

**Justin Garrison:** How did you roll that out? The one time that I've shifted an entire infrastructure to start using configuration management, I literally used Ansible to go deploy Puppet. I was like "I have SSH access. Let me go install this agent, bootstrap it, and then we're off to the races", right?

**Martin Jackson:** Luxury.

**Autumn Nash:** \[37:49\] But did you test it on a few of them first, or did you actually just roll them all out and just hoped for the best?

**Martin Jackson:** Alright, so the way we did this - we enlisted a lot of help. There were, I don't know, three, four, five of us full-time on the configuration management team. We had a bunch of people from the stores team that were helping. We had a bunch of people from the DCs team, the distribution center team, because this was part of it, too... We had a bunch of people from the home office team, which was where the data centers were... Our focus was on stores, because with that kind of timeline we could not afford to lose any time. And the store process was important.

Now, one of the things to understand about the Walmart architecture at the time is that there was a very well-established protocol for what you have to do when you deploy one application to every store. Everybody understood that process, people knew what to expect, and there's a cadence. One store first, then 5, then 10, then 50, then 100, then groups of 500 until you're done.

**Autumn Nash:** So did you do this with no scheduled downtime, being that some Walmarts are 24 hours?

**Martin Jackson:** Oh, yeah, there was no need for downtime for any of this. I mean, we didn't schedule any downtime...

**Autumn Nash:** Well, that's what I'm saying. Did you have a window, like, if it all went wrong? Because this is the first time that you were doing it on that scale. Oh, okay. So not at night?

**Martin Jackson:** Right. Night time is when all the important, business-critical end of day functions and things like that happen.

**Autumn Nash:** That makes sense.

**Martin Jackson:** Cash wrap, and all those kinds of things. So it's really attractive to say "Yeah, we'll do this at one in the morning." Like, "Y'all want to impact our cash reconciliation...?"

**Autumn Nash:** It doesn't sound good.

**Martin Jackson:** "No, we don't want to impact your cash reconciliation. No." So there were two aspects of this that made it work for us. The first was that we made -- first of all, we rolled out Puppet in enforcing mode, everywhere, day one. Had to be. Because you're not providing any kind of value, and you've got no way of fixing anything if you find it broken. And the other thing was we made the Puppet catalog as minimal as we physically could. So Puppet managed itself, it managed MCollective... MCollective is an older system for orchestrating a bunch of Puppet runs. Scaling the MCollective infrastructure is kind of a separate story, but it was something that we tried doing at the same time. It did not work very well. It was functional barely, but separate thing.

So we were deploying Puppet, and the only thing that it was managing in full enforcing mode was NTP. So our goal was to get the Puppet catalog that manages NTP and Puppet itself onto every store server by lockdown.

**Autumn Nash:** So when you were doing this, you said that you pulled people from other teams. What was the prep for that? Did you have to then train those other teams to be able to help you with this, or did you kind of just make it as easy as possible and tell them to press button? What was the prep to get these other members that were not on -- because it sounds like you formed the configuration management, so you guys were making this up as you went along.

**Martin Jackson:** Oh, we were absolutely making it up as we were going.

**Autumn Nash:** So how do you then teach other departments to do this for this big rollout? What was your plan for if it went wrong? What was your, I guess, backup?

**Martin Jackson:** Well, you know, when Cortez reached the new world, he burned the ships...

**Autumn Nash:** You were like "YOLO."

**Martin Jackson:** There wasn't much in the way of a backup plan. The simple thing would have been just to use one of the other mass orchestration systems we had to remove every last trace of Puppet from all the servers that it was on. That was pretty straightforward. And so we didn't put much more thought into it than that.

But getting these other people involved... We had an incredible esprit de corps on the configuration management team. We very much believed that what we were doing was going to fundamentally change the way people interacted with systems. We saw the change that was happening in the world, and that -- you know, everybody was in awe that Walmart was running as many servers as it was at the time... But Walmart was a huge outlier in terms of all that.

\[42:06\] These days you can name any 10 groups that are running a hundred thousand servers. It's not that big of a deal. For us at the time it sure was, now it isn't. And it was important to us to kind of be part of being part of that hinge, where everybody said "Hey, maybe we can do this at this scale, making people's lives easier", because all of us had spent a lot of time on pagers, and answering the 2 AM calls. I can't get an IP address. That was mostly the stuff that I did. And other guys were like "Yeah, intermittent database slowness in the store." Oh, did I mention we were running two different Informix installations in most stores, locally? Yeah... You know, tuning, raw spaces... The whole business.

So all of these guys had spent most of their careers doing these 2, 3 AM calls and saying "Hey, we have a system that's going to make this easier, for you and for everybody who follows. And if we get this done, we will be legendary." It was not hard to get people to sign on to that.

**Autumn Nash:** Yeah, for sure. It makes your life better.

**Justin Garrison:** So you made it? So you deployed all 5,000 stores in two months?

**Martin Jackson:** Yup.

**Autumn Nash:** These retro episodes are so cool, because for instance WebMD - I didn't know what... What did they end up buying, or what were they supposed to be -- I think they were supposed to be one of the biggest Walmarts of medical, or something... Yeah, \[unintelligible 00:43:34.01\] And then who would have thought that Walmart was doing so many technological things before other people, you know? And running that many servers. So it's just really cool... I would have never guessed that Walmart would be a revolutionary in technology, and they were out there doing it, you know?

**Martin Jackson:** We were very happy to not be on the front page because of that stuff.

**Justin Garrison:** Yeah. You don't want to make news there.

**Martin Jackson:** Well, we didn't want to -- it was something that we knew. And we could walk around and say "Yeah, we know that we've done these things." And if you're interested in sort of the overall history of it, everything changed at Walmart the day that Amazon decided that it was going to be profitable.

**Autumn Nash:** That's interesting.

**Martin Jackson:** The day that Amazon decided it was going to be profitable, everybody said "Okay, stop. We need to do something now." For years it was "Oh, they sell books. Oh, they're never going to be profitable. Are they even in retail?" And then Amazon decided it was going to be profitable, and a hush fell over all of Bentonville, literally. And things changed. Like, "We need to approach certain problems differently than we have", and configuration management, the appetite for going through this potentially painful change was a big part of that. And had the competitive threat not materialized, it would -- odds are good that Walmart would still be doing something much more like what it was doing, versus what it is doing now.

**Justin Garrison:** One thing about this episode is it's like an unintentional retro episode, but also it's completely modern, right? This isn't something that happened in the nineties, or before. This is 2010, 2014, 2015 timeframe, still happening today. Looking back at everything that you did and accomplished with that, what would you have done differently? At the same time. No new technology, there's no containers, nothing else. Going back to that point in time, was there something that you're like "Oh, you know what? If we could have done something", either technically or just organizationally differently, what would that have been?

**Martin Jackson:** Oh...

**Justin Garrison:** It's a big question to put you on the spot for.

**Martin Jackson:** I've had an awful long time to think about all of this, and the adoption of Puppet, and the usage of modern infrastructure as code systems... We paved the way for a bunch of other modern orchestration systems, and more importantly, we gave the old architecture the bridge into the future that it needed to stay alive for as long as it needs to. And that's a big deal.

\[46:07\] There's a lot to say -- the company needed that stuff to keep running. And if it hadn't been able to keep managing it, things would be very different. But the one thing that I wish we could have done better in those days was to prioritize and facilitate self-service for infrastructure as code, without a doubt.

**Justin Garrison:** Enable other people to -- yeah.

**Martin Jackson:** Right. Because I love Puppet, a lot. I have friends that work for Puppet, I have friends that used to work for Puppet... A few of my friends at Puppets are still there. Most of them have moved on since the acquisition. But one of the hardest things about adopting Puppet at scale is that if you use the centralized model - which we had to do, because one of the big strategies we were doing was unifying configuration management not only across stores, but between stores, distribution centers and the home office environment, where a lot of the conventions for arbitrary things and systems administration had just differed. So when you set up a database, what do you name the logical volumes? Stuff like that; they had different naming conventions. You cannot bring those things together. But if you have common set of tooling that works, you know, maybe everybody can participate in creating a new standard that everybody can use. That was kind of the vision. And that was one of the reasons that we did centralized Puppet the way we did. One of the main reasons we did centralized Puppet the way we did.

But the sort of Achilles heel of a centralized Puppet setup like that is that everything that happens in Puppet is based on this classification process, which is where the node sends in its facts, and then the Puppet server evaluates those facts and then decides which classes it's going to send down, and effectively what the configuration is going to be. It is very difficult to make that a self-service process without knowing a lot about what Puppet is doing internally. You can add your own facts, but writing your own facts is a big deal, and that's one of the things that we never really got applications teams to sign on for, was "Oh, I've got to write this Ruby code that I'm going to send to you, and then your servers are going to send that Ruby code to the store application servers, and you'll call us if there are problems." "That's how this is going to work?" "Yeah." "No, thanks."

**Justin Garrison:** That's a long chain of events.

**Martin Jackson:** It is. And a lot of other infrastructure-as-code systems are much better about facilitating self-service in that way.

**Justin Garrison:** Well, Martin, this has been a blast, and it's not even a look back in history, it's just a look back in the last 5 to 10 years. This is just how things are for a lot of people still today. There's still a lot of infrastructure and organizations that are going through this type of migration, and looking into it, so thank you so much for coming on and describing it to us. If people want to find you online, where's the best place?

**Martin Jackson:** Oh. Well, I have a Twitter account that I almost never post from, that's Mjolnir40k. And LinkedIn, I suppose, is one of my main online presences. But I speak at a bunch of Red Hat events, and I'm usually at Automates, or Summit, or those kinds of things.

**Justin Garrison:** Cool. I'll put a link to some of those in the show notes, and thank you so much. This was great.

**Martin Jackson:** Alright. Thank you very much.

**Break**: \[49:24\]

**Justin Garrison:** Thank you so much, Martin, for coming on the show and talking to us about what it was like for you at Walmart, deploying at this scale, and making these foundational changes in a very diverse infrastructure. It was awesome, and also a little bit scary for me to remember some of the things that I went through, and I'm sure a lot of people listening to this have maybe a similar story. If you do have a similar story and would to share how you went through organizational change at a large scale like this, whether it was configuration management or just CI/CD, please email us. We'd love to hear from you. shipit \[at\] Changelog.com, and let us know who you'd want us to talk to, and what topics we want.

**Autumn Nash:** Also, I really love the vibe of the retro episodes. I love the fact that so much of what we did before is still so relevant.

**Justin Garrison:** And having the time to look back longer term - you're disconnected from the problem, you've thought about it, and you thought about all the things you did right, and some of the things you did wrong, and you can just say "Actually, we did the best we could. With the knowledge we had and the tools we had, that was all we could do." But if someone else is going through something similar - and a lot of these problems look similar now - you can kind of say "Actually, I wish we would have done one thing different." And self-service, as he'd mentioned, is one of those things. And I think that's where things like containerization has helped, and things like serverless and Lambda has helped, because that just made the application developer responsible for more things, but just enabled them to solve their own problems, too.

**Autumn Nash:** It also gives them enough of a layer into a little bit less -- I don't know. Sometimes you need to know a little bit more of what you're doing because it helps you to be able to solve problems and see where those things intersect. We want to abstract problems away, but you don't want to abstract them so much that people don't have an understanding of what they're building either.

**Justin Garrison:** Yeah. The layer below is sometimes important. And I went through multiple companies where we tried to make self-service configuration management for application developers a thing, and it was always the wrong layer, because it was not an application development tool.

**Autumn Nash:** Because you don't want to give -- sometimes developers are like "I want control of everything." And we're like "Bro, you don't need that." And then sometimes we're like "But we need you to not just do hood rat things on the top layer, because you don't understand the bottom layer. We need you to -- there's got to be a middle ground."

**Justin Garrison:** The impacts of the things you do on top can definitely cause a problem below.

**Autumn Nash:** Exactly. And you can't really fix something if you don't understand at least a few layers down, you know?

**Justin Garrison:** So let's talk about CrowdStrike. Leading right into that...

**Autumn Nash:** When it goes wrong... No, but honestly, as much as this is not the right way to do something, I deeply feel for the fact of like -- can you imagine the panic that you would feel if you took down airports, hospitals? We know that something went wrong, and there should have probably been more testing. And you can throw all the shade that we want to throw, but at the same time, like...

**Justin Garrison:** So look, if you're sick of listening to CrowdStrike reviews from people that weren't actually involved, feel free to skip this part. This is just stuff that we've learned reading a couple different things. And the main places that I'm pulling information from are the CrowdStrike executive summary from their post-incident review, and Pragmatic Engineer did a great write-up just top to bottom, like "Where is this happening? What happened here? And where did it go wrong?" But there's a couple other reviews and podcasts and things that I listened to, that were also in this realm. But the main thing you're talking about - there should have been more testing.

\[56:03\] In the executive summary, they say what they're doing to make sure this doesn't happen again. They say that they're enhanced software testing procedures. And they say "Improve rapid response content testing by using testing types such as local developer." That's not a thing you should be relying on. They wrote the code.

**Autumn Nash:** I'm a little scared that Justin's face said... I knew it was going wrong. Y'all can't see it, but I knew it was going wrong when he -- okay, he has this Justin shade face that y'all don't get to see... And right before he's about to throw it... And I'm just so excited, and I'm just like "Oh, it's coming."

**Justin Garrison:** I read local developer and I'm like "Okay, first of all, they're not talking to a developer." This is the executive summary. Okay, but local developer is not your testing framework for how these things -- they wrote the bad code. Don't rely. They could change the tests to pass. Do not rely on them to do this. But the other things they say is content update and rollback, which again, if you crash the entire system, there's no such thing as a rollback. That does not exist anymore.

**Autumn Nash:** That's the part that just -- it's almost like they don't understand what happened. And I know the engineers and everyone else understands, but when you read that, it's so tone deaf that you're just like "Bro, did you talk to the people with the technical background before you wrote this? Because..."

**Justin Garrison:** And this is not a technical person that wrote. This is a legal team that is trying to limit the blast radius of what they're -- like "We're going to make improvements."

**Autumn Nash:** Yes, but to gain trust of your customers wanting to use your product going forward, you should have discussed this with your technical team, because now - like, you've already had this huge incident, right? And people are already like "Well, do I trust you to roll out these updates?" And then you release an executive summary that just -- this does not say "I'm earning trust for your business going forward."

**Justin Garrison:** Well, and I'll get to that last part. So this is just the testing improvements. And they have stress, fuzzing, fault injection, stability... What does stability mean? And content interface testing. I'm like "None of those things would catch this."

**Autumn Nash:** Yeah. None of that addresses a configuration problem.

**Justin Garrison:** Right, because this was not a business logic, quote-unquote, "business logic" change.

**Autumn Nash:** It's not a code change.

**Justin Garrison:** Yeah. Which usually roll out differently.

**Autumn Nash:** Yeah. But what I'm saying is if you were a CrowdStrike customer, does this now make you feel any more trusting of them as a company? If you read something that they're like "We're going to make all these changes that would not have made this any better." You know what I mean? Why did you say it? You could have just...

**Justin Garrison:** One of the other things they say here in the executive summary is the other enhancement is going to be adopting a staggered deployment strategy, which means they did not have one. This was a push go everywhere. And they even say in the reporting, if you were online during this hour and a half that this bad config was out there, your machine went down. You pulled this update, you went down. And even in here, they say that they're going to provide customers with control over delivery -- like when they take those deliveries. Because before, if you were online and you connected to the server, you got the thing. I remember managing Semantic, like Norton from 15 years ago, and there was immense -- like, I could centrally tell all my machines "Only update during these times." And the fact that this system didn't have that is very surprising.

**Autumn Nash:** Windows Office asks you if they want to update it. You know what I mean? I'm just like "What do you mean?"

**Justin Garrison:** I would absolutely argue that Excel is more important than your antivirus for your company to do their work, and also, I would not be surprised at all if Excel had kernel hooks, at the kernel level, where they're like "This function, if you're calling that equals column", whatever, there's probably some kernel hook in there somewhere.

**Autumn Nash:** Okay, we've just discussed that infrastructure has come so far, how we deploy things have come so far. Bro, you didn't have staggered deployments? At the same time, I feel bad for throwing shade at anything, because this job is hard, and there's always an edge case... But don't shoot yourself in the foot and have bad processes to make it harder. Even with good processes there's edge cases.

**Justin Garrison:** \[01:00:20.07\] And the process isn't always uniform for everything. Because if this didn't have kernel hooks and wouldn't blue-screen the computer -- like, okay, if the CrowdStrike agent failed, not a big deal. Like, okay, we can reboot it. You can reboot the system and things will come back online. The fact that this was parsing config at the kernel level, and that did an out of bounds memory execution was like, Windows did what it's supposed to do, and it said "Hey, someone's trying to do something in memory that they're not supposed to do at this level. I have to go down." And that is what actually brought the system down. But if this is not running in the kernel, then - okay, cool. Program crashed. Okay.

**Autumn Nash:** That's kind of interesting too though, because a lot of different articles are debating whether that makes it partially a Windows Microsoft problem, and if they're partially to blame. But like you said, in a way they did what they should be doing. You know what I mean? ...in one way of thinking. So it's like, is this just CrowdStrike, or does Windows take some of the responsibility, because technically Windows brought it down? But, I mean, they were also --

**Justin Garrison:** Well, Windows was protecting Windows, right?

**Autumn Nash:** That's what I'm saying. That was technically an expected behavior that it should have been doing. You know what I mean? So that debate on like responsibility, and where does it go forward with SLAs...

**Justin Garrison:** And I love the overview here from Pragmatic Engineer points to regulation as a problem... Because regulation is why these things still run in the kernel. And I remember I was at the university when we switched from XP to Vista, and during Vista timeframe, Microsoft was getting into the "We're going to do antivirus." And they had Windows Defender, and all these things coming out. And at the beginning, when Vista was coding Longhorn, other antivirus systems couldn't connect into the kernel, because Windows walled it off. It said "No, you don't get kernel access. Only we get kernel access, for our Windows Defender." And so there was literally lawsuits that said "Hey, you're going to kill our business if you have hooks that we don't have."

**Autumn Nash:** This is also another one of those things of like "Talk to the technical people before you make regulations, and before you make business decisions." That's why it's really important to have those middle people who talk both languages, like your product managers, or your project managers, and to have somebody do all that... Because you need to bring the business and stakeholders and lawyers and the technical people together to make sure we're looking at all the different sides when making these decisions, you know?

**Justin Garrison:** Yeah. And the decision they could have made was "Okay, Windows Defender doesn't get kernel access either, so no one gets kernel access." But that's not the decision they made. They made the decision that Windows Defender needs kernel access, so everybody gets kernel access. And...

**Autumn Nash:** Which is going the opposite direction, and not a good idea either.

**Justin Garrison:** Well, I mean, at the time too -- we're looking back to early 2000s. That was not an uncommon thing, because there was less clear defined lines between user space and kernel. It's like "Well, a lot of things run in the kernel that shouldn't."

The other interesting thing that Brendan Gregg, who's over at IBM now - he had really great insights into eBPF, the enhanced Berkeley Packet Filtering as a system would have made this safe. And eBPF runs at kernel space, but makes the code safe so it can't crash the kernel if the eBPF program goes down... Which I thought was interesting. Because a lot of antivirus companies, especially for the Linux world, are moving to eBPF, and Microsoft and Windows is getting eBPF support at the kernel level.

And so eBPF is going to be your one program to write for the kernel space, and it works on Linux and Windows. And it's also safe, where you get a little more elevated privileges to do things at a lower level, without making the whole system crash.

**Autumn Nash:** \[01:04:09.24\] That's interesting. I feel that will be used in a lot of design reviews on a reason to use that going forward. They'll be citing that. My favorite part of all of this though is that in the programmatic programmer he talks about two extremes in shipping to production. It says YOLOs, and then like verification... It's so funny; it's the best little cartoon. We should put the link.

**Justin Garrison:** Yeah, we'll have the links in the show notes here. I just pulled up Brendan's blog too, because I thought it was really interesting, as as someone -- he's been doing eBPF for a very long time, when he was at Netflix, and beyond that. And so seeing these things shift to safer ways to run on the system and still get you some of that low-level access is also another mitigation you could do, instead of saying -- like, things that run on the kernel should be rolled out slowly. Right?

**Autumn Nash:** I think that's the thing between security and usability. Like, you always want to make something secure, but you also want to make it usable. And you're constantly in that battle between "How do we make it secure, and also how do we make it where we're not making it so secure it's unusable?" So you're always a win.

**Justin Garrison:** The Venn diagram of secure and usable are just two separate circles, right? There's no overlap there.

**Autumn Nash:** That's what I'm saying. So something like this, what this product that is giving you -- that just seems like it's going to be a huge win, because if it's going to separate it in that manner and then stop you from ending up going into kernel panic, why wouldn't you include that?

**Justin Garrison:** And I feel like the antivirus companies have had decades, literally two decades of training users that you want your antivirus definitions as fast as possible. Because people like me live through worms, and things that would spread through networks really fast, and we could not get definitions fast enough, and we say like "Hey, actually, if my antivirus would have been up to date, this could have been prevented." And as those zero days and things spread quickly - there's a globally-connected network; those things spread fast, and you need to get those definitions. But what's the balance there between "Is this safe to roll out, or is this something that I need to protect myself with?" And that is a really hard problem to solve.

**Autumn Nash:** I don't even know if that's just antivirus. That's like open source in a lot of places; we're constantly wanting to hurry up and fix things, but then you want to make sure that they're well tested. And you don't want to panic people. it just seems like it's always the cycle of software in general.

**Justin Garrison:** Yeah, and a lot of that - you know, people moving from frameworks. It's a lot of work, and they're like "This is going to fix a bunch of bugs for me", or "This is going to solve some security vulnerabilities. When do I have time to do that sort of maintenance?" And that is stuff that you outsource to someone else a lot of times. And you say "Oh, my security vendor pushes those updates to me."

**Autumn Nash:** But it's crazy, because I feel like the farther they automate security, there's more false positives, and then people just ignore it. We have to do some sort of automation, because if not, no one's going to sit there and just watch that all day. But people just keep -- it was so funny, I've seen people use a security product (I won't mention any names), and I've been in a conference and they're selling these huge security things, and they're like "Oh, you should do this, and it's going to be great." And then they're like "What do we do with all these false positives?" And then you don't want to get to the point where you're constantly ignoring your security stuff because it's giving you all these false positives.

**Justin Garrison:** And I absolutely have no problem throwing shade, because I know that Google and Microsoft both are like "AI is going to solve that problem for you." And I am so like "Oh, my gosh. You don't --"

**Autumn Nash:** I love when you throw shade for me, so I don't have to do it. I'm always trying to not do these things... And Justin's like "Let me help you."

**Justin Garrison:** And you could be thinking of someone else. I don't know. But those were the two that came to my mind as like "Oh, they went all-in on this new technology that no one understands is going to solve the problem that we all know very well."

**Autumn Nash:** \[01:08:09.26\] Not just that, but how much compute power -- and you're throwing so much at a DoS attack when that's not the big picture. You know what I mean? Yeah, you're solving a very small section, but if you give so many false positives... And you're selling this as like this security suite, but it's only solving one small -- I don't know, it just seems it's very short-sighted. We're spending a lot of money and a lot of compute power and a lot of energy, and making a lot of promises with AI when we're making a product less trusted. And then when they don't trust it, they're not going to actually pay attention to your warning, so... I don't know.

**Justin Garrison:** And that goes right along with these AI claims, and Google and Microsoft both are no longer claiming to be carbon neutral.

**Autumn Nash:** Did you see the new report that Microsoft made? It hurt my soul a little bit. They basically said if you just ran a ton of servers and laptops for years, it'd equate a couple days of what they're using right now. And I'm just like "How did we go from so concerned to YOLO?" We live on the same planet, y'all. We've all been talking crap about Texas's energy grids, and now they're like "We may totally take down the Western US's energy grids with data centers." And they're just like "But it's fine though." And there was a paper about Google's new search, which is by the way not as good. You know what I mean? We're not getting a better product.

**Justin Garrison:** I switched to DuckDuckGo.

**Autumn Nash:** Oh, gosh.

**Justin Garrison:** I literally switched to DuckDuckGo, because a) I don't want to contribute to AI generating anything for me that I'm not explicitly asking for and causing more stuff... DuckDuckGo has actually been really great. They have a setting in there, it's like "No ads. Just don't show me ads." It's amazing.

**Autumn Nash:** Also, you get a lot of searches that you don't get on Google, which is wild, because I feel like before DuckDuckGo kind of had a rep for other things... And all of a sudden I'm getting better searches on DuckDuckGo. And I don't understand, at what point are we going to start to make logical sense? You're using so much more power for a less accurate search. We don't want to use it. Nobody asked for this; it's not as good. And you're like "Let's light the Earth on fire." Y'all, we're going to have AI and no electricity, no power and no water. And then what are we going to do? Why?

**Justin Garrison:** I stopped using Bitcoin when I saw the energy usage of the Bitcoin networks. And just cryptocurrency in general. And then AI came along and was like "Hold my beer."

**Autumn Nash:** Dude, and people were going in on Bitcoin, which - you know, justifiable. But then we came up with something worse, and they were like "It's going to be great." And it still doesn't do anything for us. The mom in me -- like, during COVID, I wanted to sit all the adults down and make them listen to Daniel Tiger and Elmo, so they could be nice to each other. I just want to be like "Did y'all watch WALL-E? Did you? Did you?" We need to watch -- what's that one movie, The Lorax? Y'all, I want to be able to exist, and my kids to have somewhere to just -- like, what are we doing? We're not even getting a good product. You know what I mean?

**Justin Garrison:** \[01:11:33.06\] Yeah, as a product standpoint, yeah, absolutely. It's not solving my problems. Yeah.

**Autumn Nash:** it's not even good capitalism. But wait, let's just take the warm and fuzzies out. It's not even -- how does this become profitable? And it's a crappy product. And you're spending more money. What...? I'm so confused.

**Justin Garrison:** I just enjoy that this episode was bookended by talking about cartoons, in both different contexts.

**Autumn Nash:** I'm just saying... Like, okay, tell me -- in the last five years, have you not wanted to sit an adult down and teach them the rules that we teach five-year-olds on like how to treat others, how you want to be treated? They all need to watch Daniel Tiger and Elmo and we need to fix them, because I just... The way grown adults treat each other - dude, we tell our children to share, and act better, and they'll be... Like, okay, you have two kids. Have you ever been out somewhere and you see an adult acting a whole fool, and you have to explain to your children? You know what I mean? And I'm like "Bro, you're 40. I'm going to have to use you as a life lessons now. Thank you."

And then we were all like "We're going to do better for climate change." We literally -- this year, we've had some of the hottest days on record. And we're like YOLO. It's going to be fine.

**Justin Garrison:** And that's the problem of climate change was a thing that everyone jumped onto when it made money for the business, right? When you could say "I'm carbon neutral, so it makes me money." But when something else that's not carbon neutral comes around and raises your stock price more... DEI went out the window when it was no longer the thing to do, right? When a bunch of people forgot that it was important.

**Autumn Nash:** They basically said YOLO to all warm and fuzzy things. But the thing is, is let's go back. Let's talk about the capitalistic way that these things -- because that's the part that pisses me off, right? As a black woman, people will be like "Oh, but DEI just makes you feel good." No, sir. Return on investment. The fact that you make better software. These are data-backed things. Carbon-neutral - you can say that in a warm and fuzzy "We're going to save the environment", but the less compute power you use, the more money your organization saves. There are capitalistic reasons that these are good things, that have nothing to do with just feeling good about them. They're better for business. And now you're getting a sh\*\*\*\*\*r product, and you are spending more money. And you're going to make crappy software... What? Being a bad capitalist - this is not good. It's not even good being a bad person. Like, I don't get it.

**Justin Garrison:** Well, we're far off the beaten path of talking about CrowdStrike now, but this was a fun rant --

**Autumn Nash:** Hey, we talked about cartoons twice. Okay? This is very Autumn and Justin. We are very on the beaten path for us.

**Justin Garrison:** Thank you so much, everyone, for listening, and we will talk to you again soon.
