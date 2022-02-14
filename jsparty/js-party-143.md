**Jerod Santo:** Oh yes, the sound of those Breakmaster Cylinder beats means it's time once again for JS Party. I'm Jerod, I'm your friend, and I'm joined by a few of my friends... Amal is here. What's up, Amal?

**Amal Hussein:** Yo, yo, yo!

**Jerod Santo:** Happy to have you, as always... And we have a special guest - you may be familiar with his voice, you may be familiar with his avatar. Maybe even his face. His name is Ahmad Nassri, and he's back on JS Party. Welcome back, friend.

**Ahmad Nassri:** Hello, hello. Thanks for having me back.

**Jerod Santo:** For those who haven't been long-time listeners, go back to episode 107, where Divya and I were joined by Ahmad to talk about modular software architecture. We also have a deep dive on your history, I believe, on the Changelog back in the day. That's episode 185. Today you're back to talk about a new thing -- or maybe it's not a new thing; maybe you've been working on this for 10 years... But a relatively newly written or at least published blog post called "Solving solved problems." First of all, catch us all up. What have you been up to lately?

**Ahmad Nassri:** Well, I've been mostly working from home, as the rest of the world has been... But I've been lucky that I have a good setup at home to spend time and work with teams remotely. I've been spending a lot of my time working on fractional CTO opportunities that I've been taking on recently, which basically means I get to work part-time for different companies in a CTO capacity. Those companies are typically not ones that are heavily invested in technology, or if they are, they don't have the capacity to have a full-time CTO leadership in place, so I kind of help them out in hiring the right team, looking at their technology investments so far, and helping them and their strategy going forward on how things should look like, where to invest more, how to prioritize their work, and kind of grow the opportunity space for other engineering teams to come in and start carrying the torch and leading with it.

So that's what I've been spending my time on, and it kind of works out for me working remotely in this scenario, because it's different companies in different locations, and I don't have to travel back and forth between places, I can just do it all from home... So I've been lucky in that sense, with the lockdown and everything else. It kind of worked out. So that's what I'm doing right now, and that's what I'm planning to do for the next short time, or short period of time, while I design some future things and opportunities that I wanna build and create.

\[04:10\] And in doing so, kind of like leading back to the topic of the blog post, a lot of the patterns that I started noticing or know about from previous histories in previous roles in companies, I'm starting to see them again and again and again, especially as I'm doing this fractional thing, where I spend some time with a lot of companies... And it's odd to me that the patterns are the same, regardless of the company size, regardless of the company's market, regardless of the technology, regardless of anything. The patterns keep looking the same, or in the same direction of thinking or investments, and how companies treat technology and how technology teams treat technology.

That kind of led to that blog post, and there's actually a series of blog posts that I wrote following up that, basically talking about how we're in this world where we have an abundance of access to technologies, solutions, libraries, systems, services, yet for some reason every company that I've worked with at least, whether directly or indirectly, we keep solving the same problems over and over again. Some of those problems are some basic things that you would think by now we would already have a pattern or a solution or answers that we can just copy-paste or implement, or buy, or adopt, that we don't have to spend time on them anymore as developers.

So that's kind of like the highlight, and we can get into it, but I wanna come back to you and see if you have any kind of direction to where you wanna take the conversation.

**Amal Hussein:** First of all, before we really dive into this incredible topic of solving solved problems, I wanna just take a little interlude... Can we do that, Jerod?

**Jerod Santo:** Let's do it.

**Amal Hussein:** A little interlude into my connection with Ahmed, which is that we both worked at npm together; I was an engineering manager and he was a CTO. Ahmed is incredibly modest, and I just wanna take the opportunity to embarrass him right now, and make him blush, and say with hands down -- you know, I think I wanna write a book in the future about all the people who saved the web in some way, shape or form whose names you don't know... And it's gonna take a lot of research till I gather that list together, but it'd be something that I would like to do... And I will give you a chapter preview of something that's gonna be in that book, which is the Ahmed story...

**Ahmad Nassri:** Uh-oh...

**Amal Hussein:** So I joined npm because of Ahmed...

**Jerod Santo:** Prepare to blush.

**Amal Hussein:** Right. Yeah, because of Ahmed. And he was tasked with a very (I would say) challenging thing, which is to take a burning dumpster and make it stop burning...

**Jerod Santo:** Put out the fire?

**Amal Hussein:** It's the impossible task. Yeah, yeah, put out the fire; there we go. I speak multiple languages, so sometimes English is hard. So - you know, big task... And I would never willingly walk into a dumpster fire, but I did so because of him, in the sense that I have that much respect and trust in his vision, and his ability to make stuff happen; all you need to do is look at his bio on record to see all the awesome things that he's done, and is doing... You know, anyway...

So I just wanna shout out that the year that Ahmed was there was a very critical year for npm, and really we owe a lot to him; we, web developers, we, users of the web, whatever. We owe a lot to him because of his leadership and ability to -- kept things going, kept things together in a very chaotic period of time. And because of that, I feel like Ahmed and I, even though we just knew each other as friends and community members before that, him and I kind of went to battle together at npm, along with our other colleagues, and really went through just an arduous task of getting through an acquisition... And again, dumpster fires...

\[07:58\] So I just wanna say, Ahmed, you are awesome. You're one of my heroes and mentors. We're super-lucky, and I wish more people knew how critical you were to npm not completely falling apart, and I just wanted to say thank you. That's all. See, it wasn't so bad... Right? \[laughs\]

**Ahmad Nassri:** Thank you.

**Amal Hussein:** So anyways, yeah...

**Jerod Santo:** How do you respond to that, Ahmed? What do you think about that?

**Ahmad Nassri:** Uh... Do I have to respond? I mean, thank you. I really appreciate it.

**Amal Hussein:** It's true though. It's not even like a compliment, it's just--

**Ahmad Nassri:** I don't wanna take for granted the collective effort and the team effort that everybody put in. There is no one person that can do anything by themselves in any company, in any team... All I did was try to bring a number of people together who were able to help raise the ships and raise the tide for all the ships... And doing so, we as a team worked together to achieve what we were trying to achieve, and keep the ecosystem that the whole web community and the entire infrastructure of it afloat.

So I don't take any credit to that. In fact, I would say credit to the team; the execution arm of anything that we talked about was to you and the team members who actually got that work done... So thank YOU for doing all that.

**Amal Hussein:** Definitely, yeah. Clearly, I'm awesome, I'm also a hero on the web -- no, I'm just kidding.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** No, credit where credit's due... But yeah, I agree 100%. It was every single person who was at that company, from inception till the end.

**Ahmad Nassri:** \[unintelligible 00:09:23.24\]

**Amal Hussein:** Yeah, from inception till whatever the evolution is now... It has really helped shape the web, and everyone is really a hero. And yeah, it was not an easy place to work, lots of challenges, and there'll be lots of books about this. I certainly wanna write a book about it.

**Jerod Santo:** So Amal, if I heard you correctly, you said you joined because of him.

**Amal Hussein:** I did, yeah. Because he is this visionary technical leader who I think really gets stuff done, quite frankly. If you look at Ahmad's history, he just has a history of getting stuff done, driving alignment within orgs, or enabling engineers to make changes... That was one thing I really appreciated about his leadership, as somebody who actually worked under him at some point. He was very like "Go for it! Do you wanna do something? Do it! Do you see a problem? Fix it!" He was not a red tape kind of dude, and it's really refreshing to have technical leaders who are both savvy in business and product strategy, but also are extremely technical... And as a result of being extremely technical, have deep empathy for engineers.

That empathy for engineers comes from the fact that engineers hate business process and red tape, and when they wanna just do something that's gonna save the company a ton of money actually, they should just do it... Right?

**Jerod Santo:** Yeah... He's trying to change the subject on us... \[laughs\]

**Ahmad Nassri:** \[laughs\] Solving problems...

**Amal Hussein:** It is, yeah.

**Ahmad Nassri:** Yeah, I don't wanna sit here and blush all day...

**Jerod Santo:** Right... Well, I think it's interesting because, Ahmed, your history is in enterprises and startups and small businesses, so you have this diverse background of company size...

**Amal Hussein:** And community. A lot of community.

**Jerod Santo:** Right, but I'm thinking like the company sizes, the different kinds of companies. Amal, you have similar - Bocoup, you're at an agency, then you go to a startup, npm, kind of a late stage or a flailing startup, and now you're at a larger company, an enterprise... Right?

**Amal Hussein:** I am. Back in an enterprise.

**Jerod Santo:** So you have these diverse experiences - different team sizes, different company sizes, different goals... And Ahmed, what you're finding is - the same patterns, the same problems.

**Ahmad Nassri:** The same patterns. And I think the short summary of that - I've had the privilege of being in leadership positions or executive positions where I don't only look at the technology and the code and the infrastructure, but I also have to look after budgets. I also have to look after people's salaries. I also have to look after sustaining people's salaries and sustaining those budgets ongoing, year after year, quarter after quarter.

\[12:04\] So the dynamic shifts a little bit when you start thinking about "Are we making the right choices? Are we doing the right decisions?" When it's not just "Is this the best library that we can use?" or "Is this the best framework that we can use?" or "Is this the best cloud system that we can adopt?" It's also like "Are we investing money in the right space?" because if I'm gonna throw my money at a vendor -- I don't wanna name names, but like big enterprise vendors and it's gonna cost millions of dollars, what happens to the team that I'm paying also their salaries, and how does that relationship work together? Am I gonna have to hire more people to maintain the product that I'm also spending millions of dollars on? Or I'm gonna have all of a sudden no need for the team members that I have, because I've shifted all my processes to a product that can, for whatever shape or form, replace a lot of the functionality that we're doing already...

So those are both hard problems, but also critical problems, because we can debate all day long the value of frameworks and tools and services and libraries and all that kind of stuff, and the shape of an architecture that we wanna debate - and trust me, I love that stuff... If left to my own devices, to my own means, I would probably over-engineer everything, because why not? I love to create new things, I love to experiment with technology, I love to create all this complexity of cloud architectures, and challenge existing patterns, and create new ones... But at the same time, if I have an accountability and responsibility for people's livelihoods, their salaries, their job functions and their job growth, I have to be very critical in the way I pick choices of technology, even down to the framework, even down to the process of how we implement code and how do we do automation testing, how we do deployment CI/CD, all that kind of functionality.

The patterns that I've noticed, again, in big enterprises, in small companies, in agencies, in outsourcing companies - there is a disconnect between developer experience, as we were talking about earlier, before we started recording, and user experience. And even though some companies have the kind of values and espouse things like "We care about the user, we care about the customer and all that kind of stuff", it doesn't really translate to technology and how technology is implemented. Somehow there is this \[unintelligible 00:14:12.25\] barrier in front of developers, to how that actually reflects on the way that I do my work.

So if I'm a developer and I'm given a story in a backlog or a task as part of a team to implement a frontend experience, or a mobile app, or a backend server, or an API, or whatever - yeah, sure, the company has these big values about users first, blah-blah-blah; it doesn't matter, because the code needs to be the code, right? That's how most people think.

But the reality is there's this concept of -- again, as a person who has to own budgets and has to own long-term planning for team members and technology, there's a concept of the total cost of ownership of something. If I'm gonna make a decision on something, I need to measure the total cost of ownership about it. And to me, that kind of breaks down into five different things - the cost of knowledge, meaning if I'm gonna adopt their library, what do I have to expense in terms of time, energy, and dollars to make sure that the knowledge of that library is equally distributed across the team members that I have? And there's a relation there to how big the team, and also in relation to how long I need to keep this thing going...

Which leads to the next one, which is the cost of maintenance. Like, fine, you've adopted a library, you've adopted a service, you've adopted an infrastructure tool, but how long is this gonna be going on, and how long are you gonna be invested in maintaining it and invested in having team members continue to run it, or update it, or deploy it, or monitor it - whatever the functionality is, given the component that we're discussing.

There's also the cost of the ecosystem, which we're very familiar with in the JavaScript world... Basically, pick the library that has the most contributors. But even in a tooling sense or infrastructure sense -- if you're gonna buy into Kubernetes, for example, you're gonna buy into a whole set of other things that you're also gonna buy into and pay the cost of... Which also leads to the cost of infrastructure. If you're gonna adopt a vendor product - cool, you're adopting a vendor product. But is there infrastructure costs associated with that?

\[16:07\] Most people forget about that when they're doing the choices of technology, saying "I'm just gonna use Gmail." Okay, you're using G Suite then, which means you have to do everything through APIs." You no longer have access, for example, to the low-level systems of file storage and data storage. Now you have to have tools and libraries and desktop application management for IT teams.

There's all these kinds of concepts that people have to measure before they get to the cost that most people actually think about, which is the cost of adoption, i.e. "How long it will take me to implement."

So when I look at this big picture of the cost of ownership, I look at the way people make their decisions and the way people try to take shortcuts by saying "You know what - I can build a login system myself. It's only a couple of libraries, and my cost of adoption is a day's worth of work, or two days' worth of work before I go and just deploy it... And then I'm done and it's clean. This is it, this is the cost." And they forget about the maintenance, they forget about knowledge sharing, they forget about the ecosystem around it, and they forget about the infrastructure involved.

So that's kind of like the preamble to where are those solved problems that exist already, and how people try to re-solve them or reinvent the wheel around them... And my experience has been also in - like Amal's earlier point - all the stuff that I was able to get things shipped; I get things shipped by simplifying the problem and getting down to the basics, rather than trying to break things apart and say "Hey, let's use this library instead of that." I start with the basic thing of saying "Why were you even doing this to begin with? Let's discuss there. Are there shortcuts and cheaper options to follow?"

**Break:** \[17:44\]

**Amal Hussein:** Wow... That was intense, and also a ton of wisdom packed into a very short soliloquy. The amount of experience that you need to have to say what you've just said, not with anecdotal evidence but with real-life scenarios - I totally appreciate that. Hats off. There's so many things that came to mind as you were speaking... My earliest thought was just -- you know, I transitioned into being a manager when I joined npm, and for me it was just this interesting shift of needing to worry about a lot more all of a sudden, and all of a sudden I was the person that was accountable for delivery, regardless of what my team did. I was the one that was like if things didn't happen, it was on me actually... And how I think that shift in responsibility changed the way I thought about trade-offs, and the way I thought about the decisions that we were making - it really gave me a lot of empathy towards, I would say, managers and leaders as a whole... Because a lot of times, people will ask for something and then their boss will say no; and the reality is their boss is saying no because their boss has all this other context and all these other trade-offs that they're managing in their head... I think where their boss failed wasn't that they said no, they failed at not explaining the context behind no. I think for me that's the missing thing.

\[20:39\] One of the biggest muscles I have exercised heavily over the past few years as I've been aggressively climbing in my career - I'm not a principal engineer at a large enterprise company - it's trade-offs. It's trade-off analysis. That is a very undervalued skill, similar to even just your ability to read code... There's lots of skills that are undervalued. Trade-offs are foundational, because they set the course for all the decision that you make, macro and micro. So that's a skill that we need to learn... We need to figure out how to codify it, so we can teach it. Because the only people I see who are good at it, it's from experience... And that's not good enough; that's not gonna work, that's not democratizing information.

**Ahmad Nassri:** We can't wait for everybody to burn their hand on the stove before--

**Amal Hussein:** Yeah, before they know how to avoid that pitfall.

**Jerod Santo:** Yeah, but I have kids, and I know that I can tell them all the logic and reasoning; I can tell them why they shouldn't touch that hot surface...

**Amal Hussein:** I see.

**Jerod Santo:** ...and it actually doesn't matter to them. There's not like "Well, you have life experience, you're obviously older than me, you've been doing this a long time. You are very reasonable with why you said it's gonna hurt; it's gonna really hurt, and you're gonna be mad about it", and yet, that kid still in them has to actually experience it. They won't not touch it.

**Amal Hussein:** Yeah, that's totally fair.

**Jerod Santo:** So I agree that we need to do better at the knowledge transfer, but there's this impedance mismatch where the information coming across can't actually go in the right hole in order for it to stick, until you burn your hand and say "Ahh, you were right. I should have listened to you, but I had to actually experience it." So it's kind of difficult in that way.

**Amal Hussein:** It's totally chicken and egg.

**Ahmad Nassri:** Yeah, my approach to that has been in leading teams and in that scenario - you know how in communication courses or leadership courses they tell you all about the "Yes, and..." when you wanna do that... I think that's useless.

**Jerod Santo:** \[laughs\]

**Ahmad Nassri:** But I do think "No, and..." is better, because -- to your point, Amal...

**Amal Hussein:** I agree. Let's make "No, and..." -- right, like the manager who said no without sharing the context...

**Jerod Santo:** Like, "No, and here's why", is that what you mean?

**Amal Hussein:** Exactly. No, and why.

**Ahmad Nassri:** Yes. Because you can say no all day long, and it can be a benevolent dictator for life type of thing, but that doesn't help the person grow... But if you invest the time in showing them - so to your point, Jerod, yes, kids are not gonna learn until they burn their hands. And the same thing happens with developers and professionals in general. Until they actually experience the thing, they can read about it in a book, they can hear it from a person, they can be shown to it indirectly, but until they've experienced it... I cannot call myself an expert until I've experienced it, right? And the same applies for software development in all aspects, and professionals in all aspects.

So how do you make that opportunity of the "We're not gonna do this, because I know from experience it's bad, but how do we make sure that you don't go into that pitfall or similar pitfalls later on?" And that's where the "No, and..." context come to meet, where it's like -- and Amal knows this... I'll be like "Go create something. I'm gonna tell you some things to avoid, but go do it, and then we're gonna see if we're gonna launch it or not." Then we're gonna see if we're gonna deploy it or not. Because if you have the opportunity as a manager or a leader to give the team members the time - and the critical point is the time, because it's costly - to go down that path, get their hands burned, and come back, then great. Let's do that. That's a great experience for learning, as long as you're also holding on to the no.

A lot of people, especially in leadership, are kind of like "Okay, well let's just try it. Let's just see what happens", and then they go all the way to production. And then it adds more cost and technical debt down the road, because "Now it's too late, we can't change the trajectory", all that other stuff. You've gotta hold on to the no, but you've gotta also create an opportunity for the "and...", where people can learn and experiment with things.

**Amal Hussein:** \[24:31\] I think that's a really good compromise, to bring back to Jerod's point about sometimes you just have to let your kids get burnt on their own... That's a good -- like, "Here's some guard rails. Go play and come back", once you have some more data points to make this decision.

But circling back to the JavaScript community - a community that is probably in most need of trade-off analysis, skills, and really thinking about adoption, because there's so much adoption that happens... If you look at the Java world and technology adoption rates for teams, and you compare that to frontend JavaScript teams, and how often are they npm-installing and saving a new package - every month, or... You know, it's just there's so much change, and because of that, you really need to understand the trade-offs that you're making when you're picking tools, or picking your stack, or whatever.

A big thing I see is developers don't focus enough on the customer. To bring back to your earlier point about DX versus UX, and that lack of customer focus is what keeps them from building things that only matter to the customer... So to take it back to your blog post about -- let me find that quote and pull it up... "We should only build things that only we can build." So that means if you're Snapchat, you're not designing your own database; you're using a database-as-a-service, and you're focusing on only Snapchat features. Things that only Snapchat engineers can build. And that's not the case. I think our bias as engineers - we love solving problems and we are like hungry-hungry hippo for problems, and we wanna make all... You know, the "not invented here" was a huge problem at npm. We reinvented everything. We wrote our own HTTP framework. No joke, Jerod. The stories that I could tell you... Off-air. Off-air stories that I could tell you.

**Ahmad Nassri:** I wouldn't say "we", but okay...

**Jerod Santo:** Okay, yeah...

**Amal Hussein:** Yeah, thank you for that.

**Jerod Santo:** The royal we.

**Amal Hussein:** We, a.k.a. not me and not this dude.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** So "not invented here" is a thing; how do you keep your engineers focused on the problems that are strictly oriented towards driving customer values? And outsourcing everything else. For me, I see this very similar to open source code, in the sense that if you actually -- Google did an analysis in 2019 of all JavaScript code that could be scraped by their bots on the internet... And what they found was the ratio of installed code to authored code - so installed code meaning third-party dependencies, to authored code meaning the code that that developer wrote - was 10 to 1. So for every 10 lines of code, 10 of those lines are installed, and one is written by the developer. And by the way, you might be thinking "Wow, that's so bad." Actually, no. It's not. It's actually good. It's very, very good. That means open source is working. It means that the open source model is working. We're focusing on things that are unique to our applications, and things that only we can build, like Ahmed said.

\[27:59\] So that's good, and there's lots of reasons why that's good... Especially because, for example, code that you're using from someone else through an open source package is battle-tested, it's had way more eyes on it, it's better quality, more secure... You wanna use shared code as much as possible, because it's just better code, quite frankly. So the challenge for me is like - you know, most engineers are really looking for those hard, interesting problems, and sometimes they're more interested in creating their own solutions... And for me, I feel like those folks need to redirect that energy into open source. Go contribute to a bunch of libraries and solve hard problems for a bunch of tools that other people are already using.

Reinventing the wheel at a company is not only irresponsible; I as an engineer would consider that unethical, quite frankly... Because you're wasting company money, and you're neglecting your customer needs... And that's not cool.

**Jerod Santo:** Can I push back a little bit on the premise? Because I would broaden it slightly, and I wonder what Ahmed thinks about this broadening... So you said we should only build things that only we can build. And I'm with you in terms of like "Let's stick to our core competencies, our unique value proposition", and maybe that's what you mean, but I would also say that you should build things where -- you went through an amazing list of these five things that equal the total cost of ownership, right? Well, I would argue that you should build things when the net ROI is up, assuming you know the total cost of ownership, building versus buying. Maybe somebody else has built it, but it's actually when you add everything up and you analyze it, it's gonna cost you more to buy it than it is to build it. I would argue with that point, and that also assumes that you integrate opportunity cost, right? Because that's the one thing you're losing when you're not working on your unique value proposition and you're working on something else - opportunity cost. But I think if the ROI is up, I think you go ahead and build that thing.

**Ahmad Nassri:** Yeah, and I think that's a very good point, especially when you consider that most of the modern tools that we use, and the libraries, and the systems, and the services are actually built by companies that are not software technology platform builders. Airbnb created a number of tools that we all use, and \[unintelligible 00:30:10.19\] Envoy, and others... And Enzyme for React, and a number of other things.

Netflix is a great example of this - they created a whole bunch of things, and they're all open source \[unintelligible 00:30:18.09\] created them and shared them with the community.

**Jerod Santo:** Right.

**Ahmad Nassri:** You could argue that if Netflix' business is to build a streaming platform, why aren't they using -- I don't know much about streaming platforms, but I remember Red from back in the day; I think it was built on Java and Python...

**Amal Hussein:** Falcor. They built their own -- Falcor, or Falcon... Was it?

**Jerod Santo:** Yes, their own container environment, right?

**Ahmad Nassri:** Right. So if you wanna take the argument literally...

**Amal Hussein:** Yeah, Falcor, or something else...

**Jerod Santo:** With their own React alternative... I don't know, they built a lot of stuff.

**Amal Hussein:** They built a lot of stuff, yeah.

**Jerod Santo:** Maybe too much. \[laughs\]

**Amal Hussein:** But that's actually--

**Ahmad Nassri:** I used the Netflix example as a real example that actually fulfills the statement that I'm making, which is nobody else at that scale and nobody else at that level of infrastructure demand existed at the time. And nobody else was in a position to go and actually experiment with things that are not core to their "business", but in fact do have the positive ROI to their business. Who else is gonna go and build high-performant HTTP systems and services like they did? Who's gonna go and actually create a level of chaos engineering technology and tooling -- I mean, there were others, but nobody that had... There's a number of companies you can count on your fingers that have the capacity to test across a large distribution and a critical level of systems that they have to operate, like Netflix did.

They're very well-known for their chaos engineering tools, they're very well known for the HTTP servers and tooling around that, because they had the right environment to go and improve on something that existed already. But I can tell you - and I know this for a fact - they didn't go and reinvent the browser, they didn't go and reinvent fundamental things that otherwise are available for them and they could have done them... And maybe they did some over-engineering in some areas - I don't know about the frontend framework that you mentioned - but maybe that was the wrong choice, maybe they got carried away...

**Jerod Santo:** Sure.

**Ahmad Nassri:** \[32:07\] But ultimately, if there is this kind of foundational belief in developers, hopefully that's the one I try to instill in my teams, of "If this is not something that's gonna help you and help the business, and if it's not core to what we're actually here to solve, then why would we even bother doing it? Let's see if there are solutions that have most likely a lower cost of building and adopting and total cost of ownership than the salary that I'm paying you as a developer, not just for building it and getting it to deployment, but also to maintain it indefinitely." And what's gonna happen for the cost of knowledge when you inevitably leave and other people have to come in?

That's actually what happens to a lot of internal projects in these companies... They either have to go down the path of being gifted to a foundation or a community to maintain them, because guess what, the people who started them are no longer there, and they never invested in the cost of knowledge and the cost of maintainer distribution across the internal team... So "Oh yeah, this great library/great tool/great framework. But guess what - the people who built it at the time are no longer there, and the company's probably not using it anymore." But hey, it's now in the public, now it's an open source tool, now somebody has to maintain it.

So if you don't consider that total cost of adoption when you're creating, but also when you're...

**Jerod Santo:** Maintaining.

**Ahmad Nassri:** ...maintaining something, and the knowledge cost along with that, and investing in it... What company is gonna have a budget -- try to have that conversation with a CFO, saying "I'm gonna invest in dedicated time for developers and engineers, for everybody old and new, new hires or old developers, to actually go and learn every single tool that we have. And every time we have to hire somebody new, we have to spend at least six months with them of just training them on the tools." That never is a line item in anybody's budget. That is skipped into practices, and culture, and those types of things. They're never actually measured as a cost.

A CFO, if they see you doing that, they'll call you irresponsible; you're not using your team members' time properly, because they don't think of it that way. They think of inputs and outputs. You're investing time in people - sure \[unintelligible 00:34:02.27\] knowledge management of just getting them to know the company, but thereafter you don't need to spend more time with that; they should be experts by now, right? But we know in engineering that's not the case, because you're adopting new things, building new things all the time.

So ideally, you have the 10%-20% of everybody's time on just learning what changed last week... Because the code changed, the API surface changed, the libraries that we maintain internally changed, whatever it is that changed - people have to actually spend time to learn that stuff. Otherwise it just becomes this centralized piece of knowledge within whoever built that thing, whether it's a team or a person... And then the other team or the other person loses that context, loses that ability to understand why that change happened, what actually changed... And then when they inevitably inherit a bug or an issue in that system, in that library, they have to spend a ramp-up time to get familiar with everything that led up to this before they're actually effective in making effects or an improvement.

**Amal Hussein:** That sounds like my entire time at npm. And not just mine; every single new person. We just did so much archaeology before we could do anything... And that's like a real thing. The whole change management that Ahmad is talking about - it's actually another one of those things, similar to trade-offs, that we don't really seem to value very much. It's never something that we build into our cadences, or we never had a budget for that time, of change management and knowledge sharing... And really, the core output of actually doing that is that you kind of reduce the hero culture within your company.

I was actually literally just talking about this with a co-worker... I was like "Wow, my new job...", which by the way is at Indigo; we should link that. I work at Indigo, and solving really cool, hard problems for the planet... You can read about us, we'll talk about that maybe on another show...

**Ahmad Nassri:** But for Canadian listeners, it's not Indigo Canada, which is an online bookstore...

**Amal Hussein:** Oh, that's so funny... Yes, yes. Indigo Ag. We're an agriculture technology company.

**Jerod Santo:** It's also not Indigo the online flight booking...

**Amal Hussein:** No.

**Jerod Santo:** IndigoAg.com. We'll link it up.

**Amal Hussein:** \[36:10\] Yeah. It's named after indigo, like the plant. Anyways... That being said, at Indigo we don't have a hero culture. I've never been in an engineering organization that didn't have a hero culture... Meaning there's a lot of flexibility and fluidity between engineers throughout a given product. I work on transport; we're currently building like Uber for agriculture, but within the next year we're gonna go air and land, so we're gonna be bigger and better than Uber, especially on ethics... So we have so much fluidity; teams, backend engineers, frontend engineers, data, whatever - people move around, they jump in where they can, and the reason why they do that is because there just isn't this siloing of knowledge. Everybody is aware of change... And you can't understate how important that is to an org. Because when you have hero culture, what happens is you have this bus factor. So this one person is on vacation, and all of a sudden nobody can get any work done. And that's not healthy for an org. Just the same way that you would diversify your stock portfolio - you wanna make sure that you have lots of engineers at your company that are capable of doing lots of things, not just one thing.

**Ahmad Nassri:** Well, I think it's something that Jerod said earlier - we also as developers and engineers enjoy hard problems, or solving hard problems... And sometimes that's taken to the extreme, which is like the hero culture and the "not invented here" world. But fundamentally, that's why we're all in software technology, because we enjoy solving problems and we enjoy creating solutions, which are technically two different things.

I would go back to something I think Kyle Simpson said yesterday on Twitter... He had a long tweet thread - a good thread, and I recommend reading it...

**Amal Hussein:** We can link it.

**Ahmad Nassri:** We should link it, yeah... Talking about the tyranny of complexity, and how we fundamentally, again, as engineers and as developers, and some of us more than others, have this innate enthrallment and thrill and enchantment by complexity, and we wanna just dive deeper into it. And some of us enjoy it so much that we just wanna create more of it. So that's the risk and danger, especially when you're working with a team. You've gotta be considerate and empathetic to the other team members that are currently next to you, but also to the future team members that are gonna come after you. Are we actually making the right choices here? Are we investing in the right thing?

And sure, you can create the greatest deployment system, the best library tooling, the greatest internal frameworks that you wanna create, but if you're not investing, again, in that total cost of ownership, specifically knowledge and maintenance, you're basically putting the middle finger to the people who are gonna come after you... Because you're probably not gonna be in the same job forever, you're not gonna be maintaining the same thing forever... You're gonna either switch teams, switch jobs, switch companies, and who is gonna take care of this when you're not around? Even if you're passionate about it, even if you're really driven about it, chances are you're not gonna be there forever, maintaining this thing which you've created, or this investment that you've made... So how do you lay the foundations for the people that are gonna come after you? And typically, that falls onto the management to solve that problem; it's somebody else's problem now... But that's why I say it's the "No, and..." culture that is operating, around "We're gonna make sure we're making the right choices and investing in the right things, and not reinventing the wheel and not solving problems that are already solved, and rebuilding things whenever we can."

I think this is also potentially influenced by these big tech companies, or even small ones, like npm, where on the outside, looking in, people all say "Oh, company X is building this tool, and I use it all the time. They must have the best engineers in the world, they must be doing R&D all the time, they must be creating the best-in-class tooling, and things. We should totally use their tool, we should totally use their solutions in open source, the things that they've created."

\[40:02\] But the reality is - I've seen first-hand in many companies, not just the one you're thinking - that when you go on the inside and you see things, it's usually lacking empathy to future developers, and lacking planning of how we're gonna maintain and scale work... And it's just shiny object syndrome, where we're chasing things and building stuff and tweeting about it and making a blog post, and like "Look how cool this framework that I've created is, and I'm no longer working on it."

So I think from the outside in a lot more people should look more critically into companies and what they create and what they do... And to use the reference example that I used earlier in a positive sense - a lot of the Netflix projects that they've created years ago are no longer maintained, and/or they've abandoned them, and/or you're not gonna get improvements on them because they're too busy doing other things. Well, what happened? What happened is the shiny object syndrome, and they're probably building another project now, another open source thing now, that you're probably not gonna see for a while, but then when you see it, you'll be amazed by it, because they made it sound like it's the best thing in the world, and then six months after that they're not gonna maintain it anymore... And now you're stuck, because you've implemented it thinking that this is the best-in-class technology.

**Break:** \[41:02\]

**Amal Hussein:** Alright, Ahmed, so that was a lot to digest, and... I kind of wanna call back to something earlier that you talked about around refactoring, and application maintenance specifically... I was a guest -- back in the day, when I was just a regular ol' person that wasn't a panelist or anything, I was just a wee little gal at a conference...

**Jerod Santo:** You hadn't arrived yet, yes...

**Amal Hussein:** Yeah, I hadn't arrived... I was a guest on an incredible podcast called Changelog - like and subscribe, everybody...

**Jerod Santo:** Hm... Heard of it.

**Amal Hussein:** Yeah, heard of it. Like, literally, the best technology podcast ever; it was such an honor to be a guest on that show...

**Jerod Santo:** I appreciate that.

**Amal Hussein:** ...and it was a really great episode; episode 362, you should listen to it, we'll link it in the show notes...

**Jerod Santo:** Machine-powered refactoring with ASTs... I remember it well.

**Amal Hussein:** Machine-powered refactoring, yeah. And a point that I brought up in that episode was how important it is to learn how to maintain an application. For me, the real heroes are not the folks who get to work on greenfield apps every year, and prototype -- you know, the dev rel syndrome of prototyping culture that we seem to have somehow valued; I don't know how that happened... But you know, it's not just about rewriting your frontends every year or two, it's about "Okay, how do we maintain this legacy application and learn how to refactor from within? Learn how to continue driving value in production, and consequently driving value for our customers while still making improvements incrementally?" That is an art, that is a software craft, that is a skill, and it is a hard engineering problem. And for me, as somebody who's kind of a problem junkie - I love solving problems; the harder, the better... That's the stuff I live for. I'm not interested in greenfield, I'm interested in "Oh, great, how do we lift and shift this legacy application?" That is the fun problem for me, because it's about--

**Jerod Santo:** \[44:12\] That makes you unique.

**Amal Hussein:** Yeah, I know. I'm very unique...

**Jerod Santo:** But we knew that...

**Amal Hussein:** ...and currently not hirable, right? \[laughter\] Happily employed by Indigo, again...

**Jerod Santo:** There you go.

**Amal Hussein:** ...and we're also hiring, by the way. But you know, for me it's about helping the business not skip a beat. Because what's the most important thing? Your customers... Right? So how do you help your business not skip a beat? You refactor from within. So taking a team and parallelizing them to work on some rebuilding of your platform that no one is gonna use for months and months and months - it's silly. So the whole fact that there's the next-gen team and the current-gen team and they work in parallel doesn't make sense. We should just be refactoring that same application and continuing to drive value forward. And that's a skill I just feel is completely -- not only lost, it's not even appreciated. But the reality is, looking at your blog post - you're talking about "enter enterprise", right? Enterprise has aging software. Enterprise has big aging software. Lots of customers, and zero opportunities for risk. Or not opportunities; zero -- what's the word...?

**Jerod Santo:** Appetite?

**Amal Hussein:** Appetite for risk... Right?

**Ahmad Nassri:** Zero risk tolerance.

**Amal Hussein:** Zero risk tolerance, there we go. So what happens? Is Node.js gonna be coboled in 20 years?

**Ahmad Nassri:** There's a good reason for zero risk tolerance in these types of businesses...

**Amal Hussein:** Oh, of course.

**Ahmad Nassri:** ...and we should probably start there.

**Amal Hussein:** Right.

**Ahmad Nassri:** If you're a financial institution with people's livelihood and dollars in the banks, you have zero risk tolerance. That's why they're still running on mainframe systems and Java applications from back in 20-30 years ago, whatever the hell was running on then; I don't even know.

**Amal Hussein:** Yeah, Cobol.

**Ahmad Nassri:** I've had friends who worked in financial systems and financial institutions - they're still running Cobol, they're still running all these things. I have a founder story from a friend of mine who's a founder, who told me about the time 20 years ago in his youth, when he worked with a local Canadian banking conglomerate, and how he kind of carried servers for his appliance that he built for them in his small car, back and forth, so he could build the service and the data center... And 20-30 years later they're still there. They're not going anywhere. And they keep asking him to come in and be paid lots of money just to support them and maintain them and he's not gonna do it.

But there's a good reason for that. The reason is if you're a consumer and the bank loses your money or your transactions, you will go nuts, and you will file a lawsuit, and you will complain, and you're not gonna be happy. You might miss your rent, you might be kicked out of your home. That is not a compromisible scenario you wanna be in as a software business or a software company, or just a company that relies on software.

I've worked in the telecom space. Similarly, in the telecom space there's things that you just cannot have a tolerance for risk in them. There's no "move fast and break things", because it's the cellular network, it's the infrastructure that people rely on for communication, whether it's talking to your family or calling 911. You don't wanna mess with that.

So there are good reasons for what people complain about, which is "Oh, this technology is old. Oh, these systems are unmaintainable. Oh, I don't know how to maintain this thing. It's just so badly written." Yeah, maybe at the time they didn't make the right choices, and they didn't invest in progressive investments and refactoring forward, but you can't just come in and say "I'm gonna rewrite everything in JavaScript, because that's the language I'm familiar with", and put everything on React, because "Let's just refactor all our frontends into single-page applications."

**Amal Hussein:** Yeah, because Twitter told me so, right? That's the thing. "Because I saw it on Twitter." Twitter-driven or conference-driven development. That's my favorite.

**Jerod Santo:** "I heard React was cool."

**Amal Hussein:** \[48:08\] Okay, so here's the thing - I have a theory that startup culture has leaked into our engineering culture... In the sense that the reason why enterprise is so risk-averse is because they have customers. Most startups are like freemium, "We sort of have customers, we're kind of burning a lot of cash, we don't maybe know what we're doing... Yeah, YOLO." Really, enterprise gets a bad rep, but enterprise just means "We're a successful company that has customers in the wild", right?

**Jerod Santo:** Right.

**Amal Hussein:** And so "enterprise dude" - a term that I've personally coined, because enterprise dude is like a real persona in the engineering world... Because enterprise dude is always on the least supported version of a tool, because \[unintelligible 00:48:55.02\] Enterprise is like "I can't upgrade my system! I can't upgrade my dependencies. I have to go through legal review." \[laughs\]

**Jerod Santo:** I've met this dude...

**Amal Hussein:** Yeah, "I have to go through legal review, I'm sorry."

**Jerod Santo:** Right.

**Amal Hussein:** So anyways, all these systems are there to protect our users... And again, bringing the whole thing back to our users, right? So this makes sense. So this need for you as an engineer to have a skill of like "How do I drive value forward in production? How do I continue incrementally updating a legacy app that's running in the wild?" These are tremendously valuable skills. The things that you learn, the techniques that you learn - they're invaluable. And I can tell you that the web is aging, and we have a lot of aging infrastructure, and we're gonna need a lot of people who know how to refactor.

It's like, the difference between a mechanic and a heart surgeon is that a heart surgeon does their job while the engine is still on... You know what I'm saying?

**Jerod Santo:** Right. While \[unintelligible 00:50:04.17\] That's another difference.

**Amal Hussein:** If you're in surgery, they don't kill you, do the thing, and then bring you back to life, right? You're still living. That's the thing. A mechanic gets to turn the car off...

**Jerod Santo:** Top modular replacement.

**Amal Hussein:** Yeah, exactly. That's a great analogy. A cardiovascular surgeon doesn't, right?

**Ahmad Nassri:** That's actually a very good example, because you won't take a surgeon seriously if he's gonna say "I'm just gonna replace your heart instead of trying to fix it."

**Amal Hussein:** \[laughs\] Exactly.

**Ahmad Nassri:** Or replace your kidney without trying to understand what the problem is. "Oh, your kidney is too old. We'd better put React there instead."

**Amal Hussein:** \[laughs\] Poor React...

**Jerod Santo:** Show title right there.

**Ahmad Nassri:** "...because it's just too old and I don't wanna bother with it."

**Amal Hussein:** \[laughs\] Replace your kidneys with React, everybody...

**Ahmad Nassri:** Again, to quote somebody from Twitter, who I've been following and he's done a great job recently, Michael Jackson, who maintains--

**Amal Hussein:** Not the singer, ladies and gentlemen...

**Jerod Santo:** He's not tweeting.

**Ahmad Nassri:** Not the singer, and a terrible person... No, the good person Michael Jackson. He's actually a really great guy.

**Amal Hussein:** Incredible engineer, by the way, who's another hero of the web, in many ways...

**Ahmad Nassri:** Right. So he talks a lot about -- actually, also yesterday... Why was everybody having revelations yesterday on Twitter? I don't know why...

**Jerod Santo:** It was a good day.

**Ahmad Nassri:** He was talking about how he's willing to help companies and people, and I think maybe not seriously, but just as a statement, of just being able to improve your existing technology, your existing server-side-rendered applications... Maybe it's written in PHP, maybe it's written in Python, who cares - there's a lot of mileage you can get out of what you already have, and just doing some optimizations with things like browser caching, \[unintelligible 00:51:40.05\] management for HTTP, and CDNs, and all of that, without having to throw it all out and adopting a whole new technology. Like I said, total cost of ownership is not just about replacing the frontend with React. It's about the total cost of ownership that comes with that - \[unintelligible 00:51:54.00\]

**Amal Hussein:** Ecosystem maintenance, too.

**Ahmad Nassri:** \[52:01\] Exactly, exactly. All of a sudden you're not just adopting React, you're adopting WebPack. You're not just adopting WebPack, you're adopting Rollup. You're not just adopting Rollup and WebPack, you're also adopting bundling, and bundle splitting, and all these topics, that are great and useful, but - are you paying the cost for it, and are you measuring that impact to your team? Whereas you can actually get a lot of mileage with improving just performance rendering on the backend that you're already using... And guess what - the user doesn't care. There's no user in the world that's gonna go and open up, right-click on your website and saying "Hm... Are they doing bundle-splitting properly or not?"

**Amal Hussein:** \[laughs\]

**Jerod Santo:** You've never met me...

**Ahmad Nassri:** Nobody's gonna judge you on that.

**Amal Hussein:** I don't know about you, but I certainly judge websites by my network activity... \[laughs\]

**Ahmad Nassri:** And yet, if the product is doing what it needs to do, you're probably still paying.

**Amal Hussein:** I'm being facetious here...

**Ahmad Nassri:** But that's a good example. We as developers criticize technology a lot.

**Amal Hussein:** Of course.

**Jerod Santo:** But we still use it if it's valuable.

**Ahmad Nassri:** I'm still paying for GitHub, I'm still paying for AWS, I'm still paying for a lot of things that I don't necessarily like or agree with the way they implemented things.

**Jerod Santo:** Sure.

**Amal Hussein:** Yeah.

**Jerod Santo:** So to go back to the idea of focusing on what only you can build, what are some solved problems that people commonly reproduce, or reinvent the wheel, so to speak, that are out there? You list a few in your post... I think logging is a good one, monitoring... But go ahead - what do you see out there? "Every business has their own home-grown version of this thing."

**Ahmad Nassri:** Well, let me first crack knuckles, because that's literally the most interesting part of this whole conversation, and I think the part that most people don't wanna hear.

**Amal Hussein:** I think we're gonna be ready for another Stack Overflow... \[laughs\] We're gonna have to limit you to 60 seconds, and make sure to take breaths, okay?

**Jerod Santo:** Hold on to your \[unintelligible 00:53:47.16\]

**Ahmad Nassri:** Yes. Well, let me ask you this - how many times have you implemented or reimplemented authentication and login?

**Amal Hussein:** OMG... Every single time.

**Ahmad Nassri:** Every single time. Has there ever been a company or a team or a project that you've ever worked on, that you didn't have to start there?

**Amal Hussein:** No, no. I think everything should be as a service, but... Yeah.

**Ahmad Nassri:** Right. Before getting to the business logic and to the actual thing that you wanna build, you have to start with these things, like authentication, logging, deployment, infrastructure. You haven't even built the thing that you're excited about, that idea that you had in the middle of the night that you wanna build; you haven't even got to that, and you have to start with those things before you get to the actual meat of what you're delivering on and you're building.

**Jerod Santo:** When you say authentication, you're referring to how I hash a password, and stuff like that... You're not referring to the actual sign up and login flows...

**Ahmad Nassri:** Both.

**Jerod Santo:** ...because those things are often very unique, and actually customer experience as well.

**Ahmad Nassri:** But why?

**Jerod Santo:** Why?

**Ahmad Nassri:** Why do they have to be unique?

**Jerod Santo:** Because the first thing that people visit when they visit your web app is "How do I sign up and use this thing?" And if that's just the same exact thing that everybody else is doing, there's no advantage there.

**Ahmad Nassri:** But not from a visual perspective... There - sure, they can be different. But every single website you've signed up on has wanted a username and a password, or an email and a password... And they might ask you for your full name... And then what? Then it's just profile data or profile information. But every sign up process looks exactly the same from a data management and an interaction between the backend and the frontend. Sure, it looks different, because everybody has their branding, but that flow is the same.

**Jerod Santo:** But isn't that implementation of login, of sign up? That's what people are building. They're not rebuilding "How do I hash the password, how do I send the Forgot Password email..."

**Ahmad Nassri:** But they're doing that as well, right? People look at it as one big piece, instead of separating the concerns.

**Amal Hussein:** I wanna bridge the world that you are in, Ahmed, and the world that Jerod is in. Jerod, imagine if -- our flows are super-standard. There's a standard set of handshakes that need to happen in a standard order, and hashing and all of that is pretty standard... But ultimately, people are oftentimes doing that manually. I'm happy to see services like Auth0 start to take off, and they're getting legs... But they aren't used enough, is kind of the point that you're saying.

\[56:08\] But to your point, Jerod, about customer experience - imagine if this was a standard, this was a spec; login was a spec. And imagine if that spec had an optional onboarding workflow that you could just insert like a module. "Here's my onboarding workflow. Insert onboarding during these parts of the handshake." Then the only thing that developers have to focus on is their unique value prop, which is their unique onboarding information, and everything else is as a service, battle-tested code.

**Ahmad Nassri:** And with that standard comes the best-in-class security, the best-in-class exchange of token mechanism that a lot of people screw up...

**Jerod Santo:** But weren't you just saying earlier that we think all these tech companies are best-in-class, but they're actually just engineers \[unintelligible 00:56:52.22\]

**Amal Hussein:** \[laughs\]

**Ahmad Nassri:** Of course.

**Amal Hussein:** No, no... Well, Google's sanitation--

**Jerod Santo:** And now I'm supposed to outsource my authentication to some startup who may disappear tomorrow?

**Ahmad Nassri:** But going back to the principle though - is your business authentication, or is your business Snapchat?

**Jerod Santo:** My business involves how I sign up people to use it...

**Amal Hussein:** You still own the data.

**Jerod Santo:** I don't see much complexity in that. We're talking about probably 300-500 lines of code. I've done a lot of consulting and I've built this flow often; everybody has their own little thing they wanna do, and "No, let's skip that step. Let's not do that." Our website does not have passwords, for example. So we're talking about a very small thing.

**Amal Hussein:** Couldn't it be a modular spec though?

**Jerod Santo:** Like, if the browsers implemented it, I'd be all about it.

**Ahmad Nassri:** Oh, but hold on... That's exactly it - we're talking about a small thing. Well, what's the total cost of ownership of that small thing? And do companies actually invest in the knowledge management, and the training, and the ongoing maintenance of it? Or is it just "It's built, and it's there..."?

**Jerod Santo:** Well, is there a lot of churn in that? There is not a lot of churn on that either, in terms of the actual implementation.

**Ahmad Nassri:** No, but there's churn in the people who built it. There's churn in the people who built it. They actually spend the time every time a developer comes to your team, and actually say "Here's why and what and how we built the authentication and the login flow with, and actually carried them through", even though they may never touch it... Because they might, at some point, right? Or worse, they might challenge it and say "Let's just reinvent it or build it differently." So the business value that you've carried forward, and doing the implementation that you've built, or building the technology that you've built, whether it's logging, or authentication, or monitoring - if you have a good reason for it and it's part of your core value proposition, i.e. only building the things that you can build in your business and in your context, then great. But if you're not investing in that end-to-end total cost of ownership of it, at some point - to your point, Jerod, you're a consultant; some other consultant is gonna come in and be like "Well, this is not good enough. We're gonna rebuild it." And that's the cycle a lot of (especially) enterprises get stuck in, more so than startups...

Whereas with startups it's more of the "Oh, well I guess I have to create a login system. I don't have the budget to use a platform or a provider. I'm just gonna build my own." And you're not gonna do the proper hashing, you're not gonna do the proper cryptographic algorithms that are needed, or perhaps you're doing silly things like say a user asks for a password reset, you're just sending it in plain text, or anything of those sort...

**Jerod Santo:** Right. Well, when we talk about modular, those things are not what I refer to as like a sign up flow. Those are libraries. I'm not gonna reimplement bcrypt, for example.

**Ahmad Nassri:** Right.

**Jerod Santo:** So I think we need to talk of like what scale we're referring to these things. At a certain point I've gotta handle my logging. Maybe I'm just pushing the syslog and then I have some third-party service, or maybe I'm writing to a file and I'm backing that up... There's a lot of nuance to where you actually draw these lines, so I think that's part of the challenge, too - how much do we bite off? I think maybe when you say that's a solved problem, you're inferring that you bite off zero, and I think that a lot of times you bite off a little bit more than that.

**Ahmad Nassri:** Well, let's do some real-life examples. Heroku actually was the premier example of "Don't worry about infrastructure, we'll take care of it. Just push your code." And that changed a lot of lives, to be honest, and a lot of businesses being actually started without the complexity of IT and infrastructure.

\[01:00:11.08\] You see that example being carried forward in a lot of SaaS providers and tooling today. You see things like Firebase - greatly successful - that actually started out as... I think it was called Parse by Facebook back in the day, where it's like "Don't worry about databases and infrastructure and APIs. Here's a document-based API-ready RESTful interface, with authentication, that you can actually use in your mobile apps and in your web apps to store and retrieve data for your users." Right. For frontend developers, and for backend developers even, that became a saving grace.

I've used Parse for an actually massively distributed project that we redeployed back in \[unintelligible 01:00:45.09\] Firebase carried that torch forward; now they're kind of like the leaders of that. Hoodie is worth a mention as well, they provided the same solution... They didn't require you to learn about database engines, they didn't require you to learn about deployment infrastructure or any of that stuff; they're providing value in that sense. And now I can focus on building the things that only I can build, and my company and my team, which is the value proposition for our business. There's a number of services like that. Even nowadays, nobody launches and deploys a MySQL database or a Postgres database. We just use RDS, we just use Google Cloud Storage, or whatever Microsoft offers.

**Amal Hussein:** Yeah, yeah.

**Ahmad Nassri:** It's no longer debatable. If somebody comes to you today and says "I wanna launch my own database and manage it on an EC2 server, and do the sharding and scaling and all of that", you would just say no. It's not gonna be an acceptable conversation. And I think collectively, all these kind of examples that I mentioned - logging, authentication - whether you're looking at it as a modular level or you look at it as a kind of wholesome buy-in to a solution, we need to build everything ourselves, and I can do it better - sure, I can do it better, and maybe I will, but that's not part of the job that I'm being paid for, and that's not part of what the team cares about right now, and/or that's not the value proposition that I'm in this company or this business to deliver on.

So drawing that line and finding out where I wanna invest my time as an individual and as a team is really what makes that difference on how deep you go - is it per library, or is it per service provider, or is it per vendor that you're just gonna give everything to... Like the IBM appliances - just buy those and put your entire enterprise on them. I don't know, did that change your mind, Jerod?

**Amal Hussein:** I have something that I wanna share with Jerod that may change his mind, but it's really actually to answer a point that you brought up earlier, Jerod... You were like "Hey, what if this startup's tool that I'm using just disappears? What happens then?" And there's two stories I wanna share with you. One is my dear friend Gleb Bahmutov, who's the VP of engineering at Cypress. The first thing that he did when he joined the company was like "Okay, cool, let's start working on open sourcing Cypress." Six months later they open sourced Cypress. And the value there was like "We're going to open source Cypress. How are we gonna get people to adopt our tool if it's just some closed source startup that's like maybe gonna go away?" Right? Do you see what I'm saying?

**Jerod Santo:** Yeah.

**Amal Hussein:** They open sourced it to actually give it more credibility, and also to empower -- they kind of separated the business from the tool. The tool is a free, open source thing that you can use. The business is like management of the tool and usage of the tool at scale, with their dashboard.

**Jerod Santo:** Sure.

**Amal Hussein:** \[01:03:30.26\] And I think that's a model I would encourage more software as a service companies to adopt, because it just makes it easier for people to actually feel more comfortable about adopting. If you're just some random company that's gonna disappear -- like, if you're a new company that is actually trying to solve a hard problem and doing it well, but I don't know what your funding runway is, and so as a big enterprise how am I supposed to trust you with my business? Anyway, so that's one point.

The other point is around something that you said, Jerod, that was about random startups disappearing. One way I handle bringing in third-party code - that's something that I sometimes consider swappable code... For example, logging is a great analogy. For me, I'm not loyal to any logger; the only logger I'm loyal to is the fastest one, and the one with the least amount of overhead. And the way you manage your no-loyalty/best-person-wins kind of tooling is through creating your own abstraction around it. So you can wrap your logger API, and what that buys you is once you wrap your logger API, your import of this third-party library is just in one file, but your API usage throughout your codebase is your code. An API that you wrote, that should be stable.

**Jerod Santo:** Sure.

**Amal Hussein:** So the cost of actually swapping is low, right? I just wanna kind of point that out as like another way to mitigate that risk... So there you go, Jerod. Boom. Mic drop.

**Jerod Santo:** You got me.

**Ahmad Nassri:** I wanna also reference some history I've had in these kinds of conversations in the enterprise... Because in the enterprise, again, there's zero-risk policies in the tolerance for it. It even kind of makes its way to somewhat logical things that we should replace and we should extend, especially when it comes to cloud providers. I've heard this a lot in the enterprises, like "Oh, we can't trust to put our data on GCP, or Google, or Amazon, or whatever. What if they go down?" What if your data center goes down, how is that any different?

And I hate to use the slippery slope example, but those conversations just keep on coming up again and again. It's like "Well, I don't wanna use a vendor, I don't wanna use a third-party. I don't wanna use this", and it's a rational way of thinking, for sure; I think it's about trade-off conversations and ROI and total cost of ownership at the end of the day... Because the cloud vendors really want your business; they're subsidizing half their stuff.

Trust me, we're not actually paying half the cost of what we should actually be paying for any of these SaaS or cloud services, and that's working out for our industry very well right now. We should be paying thousands of dollars for GitHub right now, but Microsoft is subsidizing a lot of it. Great. I'm gonna use it and I'm gonna take advantage of it. They're definitely taking advantage as well, because they're analyzing every single line of code that you write, but that's beside the point. My focus is on the business and making the business work.

Same thing with any of those choices that you have to make with vendors, with tools, with third-parties. Are you willing to take the compromise and are you willing to spend the cost lower now, but end up accelerating your team and you can focus on other things that accelerate the team? And then later on, when you're successful and you have the time and the energy, maybe go back and reimplement those things the way you wanna implement them, but perhaps considering the total cost of ownership you're actually making it sustainable and making it longer-lasting, and actually investing in a budget that can carry as a legacy well beyond your team and yoruself being there.

**Jerod Santo:** Very cool. Well, that is all the time we have for today. A fascinating discussion, and we'd love to hear from the listeners, your thoughts on these things. Amal, thanks so much for hanging out and partying with us. Ahmed, thanks for coming on the show and sharing your hard-won wisdom over all of these years; we truly appreciate you.

That's JS Party for this week, we'll talk to you next time.

**Outro:** \[01:07:32.24\]

**Jerod Santo:** That was a good Stack Overflow there...

**Amal Hussein:** Yeah, I was like "You're in Stack Overflow mode."

**Jerod Santo:** "Can you finish it? Can you fold it together and finish the sentence?! Yes, he finished it, people! He finished it!"

**Amal Hussein:** \[laughs\] I was like "Stack Overflow! Ahmad is Stack-Overflowing. This is where it's time to call your therapist..."

**Jerod Santo:** Right. I'm over here Stack-Overflowing, just trying to pay attention, let alone having to say the words...

**Amal Hussein:** Dude, same! I Stack-Overflowed like 20 seconds ago, okay?

**Jerod Santo:** Just parsing, parsing, parsing...

**Amal Hussein:** Done! Can't handle. Too many threads.

**Ahmad Nassri:** In my defense, the Zoom notifications for the chat wasn't showing up, so...

**Jerod Santo:** Oh, no, that's alright. That was a perfect ending.

**Amal Hussein:** It's okay. That was a good ending, yeah. It was just funny, that's all

**Jerod Santo:** My ingest algorithm needs some rewrite.

**Horse JS:** Any JavaScript nerds wanna get wrecked?
