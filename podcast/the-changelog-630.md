**Adam Stacoviak:** Well, Anurag, I'm glad to have you here... It's been, I would say, such a journey for this conversation, because I've known of you and I've known you for many years, and just have not had you on this show... Now here you are, $155 million deep raised, $80 million recently announced last month... You must be excited, so welcome, finally, to The Changelog.

**Anurag Goel:** Thank you. Yes, it has been a journey, but I'm really happy that we're finally having this conversation.

**Adam Stacoviak:** You know, I'm such a fan of the boldness it must require, and the courage it must require to take on Goliaths. And not just one, but many. Render is in the shadow, and maybe now above the shadow of the days of Heroku... GCP is obviously still there... We'll talk about your infrastructure. I think you're built on the cloud, so you compete with the clouds you're actually built on too, I imagine, but at a different level. I just admire the courage and required tenacity to do what you've done. And you've obviously done it well.

**Anurag Goel:** Thank you. I really appreciate that. It is not how I think about it.

**Adam Stacoviak:** No? How do you think about it?

**Anurag Goel:** Well, I think this is a large and important problem. And maybe I can give you some background on how I ended up doing what I do now. So before Render - I won't go too far back, but I joined Stripe as the fifth engineer in 2011, and I left in 2016. And the company did well, and so I had this opportunity to really think hard about what I wanted to do for the rest of my career. I could choose to do nothing and sort of chill out... But my wife and I both, we talked about it, and I think we both saw it and see it as a responsibility... Very few people are granted this opportunity to really have the freedom to pursue any goal that they want, and so my goal then became to find a really big problem that I'm also very excited to solve, and that I am good at solving. And as part of that, I ended up building applications in a lot of different domains.

I mean, even at Stripe, I had seen our infrastructure team that was managing AWS grow from when I was there one person out of five was fully focused on AWS... That number, that percentage, about 20%, stayed about the same as Stripe continued to grow, at least when I was there, 2011 through 2016... And all these people were simply managing VMs on AWS. They weren't contributing to the product. They weren't helping the other teams necessarily move faster. So that was a big waste. And then when I built my own applications post-Stripe to try to figure out which domain I was going to be interested in over the long term, it hit home firsthand. It was very obvious to me that getting something up and running in the cloud was still very broken. Ultimately, you end up building out a Kubernetes cluster, and no one wants to do that. I'm sure there are some people in the world who love building out Kubernetes clusters, and bringing all the care and feeding what those clusters require over time, and spending all the money that Kubernetes ends up sucking out of your ops budget... But ultimately, what people want, what I wanted, was I want my application to -- first of all, I want my cloud to allow me to spin up an application really quickly, and get it up and running, and make it reliable. But then I want it to scale, I want a lot of security by default around it, I want all the features that I will need as the application grows...

\[08:22\] And so the dichotomy between Heroku and AWS when I started Render was Heroku was easy to get started on, but it stopped scaling beyond a certain point. And if you needed more than 14 gigs of RAM, you couldn't have it. You just couldn't. Your applications were restarted every -- and a lot of this is still true. Your applications were restarted every 24 hours... And then the price became unsustainable once you went beyond a certain scale.

And then AWS was AWS. Just even logging in and looking at the dropdown of the 300 plus services... They have a search in their dropdown. Who has a search in a dropdown? AWS does.

**Adam Stacoviak:** AWS does. Yeah.

**Anurag Goel:** Yeah, AWS does. And it comes down to the culture of AWS. They were built around two pizza teams, and two pizza teams do really well when they are focused on a small surface area that can be deep, but then it doesn't -- it's not broad. And they end up building really amazing primitives, that are stable, reliable, scalable... But then you have 300 of these primitives on AWS that you then have to go manage and integrate, and then build on top of. And the cloud has only become more complex over time. And I was always drawn to developer productivity, but then when I started spinning up all of my own infrastructure, I continued to feel a draw towards infrastructure as well. I enjoyed spinning up infrastructure, but also I knew that I was doing sort of the same thing over and over again... So when I combined those two things together, that led to Render's genesis in 2018.

And it wasn't about taking on AWS, it was about solving the problem that I had seen, and in a way that made sense to me from a product standpoint. And AWS is always going to be very, very, very, very successful. Even when Render is a large public company, AWS will still be making a ton of money. And that's because the market we operate in is so massive, and you don't have to have a winner take all mentality. I mean, you think about it... You know, AWS had this massive lead, and now they're still the leader in the cloud space, but Azure and I guess GCP have built businesses worth hundreds of billions of dollars coming from behind. So it just comes down to the demand in the market you're in, and certain markets are winner take all, other markets are multiple people can exist and have their own unique angle on the problem... And that's how I think about Render.

**Adam Stacoviak:** Yeah, it makes sense hearing that backstory why you didn't agree with my thing of taking on Goliath. I still think you're facing some sort of imminent threat, at least not so much today, but in the early days... Because the threat isn't necessarily the technology, it's the ability to attract a developer's attention. To give any care to "Why Render? Why try Render?" But I think a lot of developers had this - and still do - affinity towards Heroku. Heroku was the very first platform as a service to care, I would say, about developer experience, and make it literally just too easy to ship. It was just so easy.

**Anurag Goel:** \[12:02\] It was great. For the time, for 2005, it was magic.

**Adam Stacoviak:** And you followed in those footsteps to take that magic to a new level, because as you said, there's limitations. And I know many friends who have launched their applications there successfully, smaller shops, smaller applications for a small business, so to speak... But then once you get to a certain scale, there is this limitation that was hit on Heroku. And that's kind of -- Salesforce, and other things made it not go beyond where it could have gone. There was a lot of potential that wasn't fully realized beyond what they'd actually achieved.

**Anurag Goel:** And at the same time, AWS kept launching service after service... Because AWS launched in some ways after Heroku did, right? Because we're talking about Heroku launching in -- I guess that's not entirely true. Heroku was on the scene in 2007, and then they got acquired in 2010. So they've now been part of Salesforce for 15 years. And AWS was also -- like, S3 came on the scene around 2005-ish... But then EC2, and others... And I think Heroku could have done a better job keeping up to date with how people were building applications. And they really missed the whole trend around static sites, and containers, and all the other ways in which people built applications. And that's really the differentiation, I think... When you think about Render, from the beginning, it was about how people were building applications today, and what they needed from the cloud. And then that continues.

So fundamentally, the way developers build applications changes every few years. And frameworks come and go, databases come and go, the way we do async processing comes and goes... And these days it's all about calling out to ChatGPT or cloud APIs, and then managing all this data that you're feeding to these models, and then you're collecting the results, and doing all of this in discrete steps and combining all of them together at the end...

So I think the cloud - any cloud - should be constantly thinking about the primitives that developers need, that every company ends up building themselves. And when Render started, it wasn't just about Heroku, it was also about Kubernetes... Because every company ends up building a sort of internal Kubernetes cluster that looks very similar. People end up using the same Helm charts, they end up installing the same sort of standard things... And the problem, of course, is that that's a lot of wasted work. And companies do it because they think that's what needs to be done. And Render is saying "No, actually, what you want to get out of Kubernetes, we give you out of the box. If you want private networking, if you want auto scaling, if you want health checks, zero downtime deploys. If you automatically want to compress your responses. If you want your SSL to be completely managed for you. If you want volumes. If you want the ability to store data on a disk. You can do all of that on Render, and you don't really need Kubernetes." And that has been one of the ways in which we have attracted a lot of people over the years. In January we signed up 110,000 developers.

**Adam Stacoviak:** Is that an uncommon thing, that amount? Or is that a high number? I know it's big, but is that a peak for you?

**Anurag Goel:** It's been a steady increase over time... But to give you some sense of where we were in July of 2022, we signed up 5,000 developers.

**Adam Stacoviak:** Oh, yeah. That's some excess.

**Anurag Goel:** So in January 2025 we're at 110,000, so that's a pretty big ramp up.

**Adam Stacoviak:** Wow.

**Anurag Goel:** \[16:13\] And by the way, all of that is through word of mouth. It's all organic. We don't have a marketing team. I'm looking -- by the way, if you're hearing this and you're a great marketing leader, please come and join Render and build out your team to help grow us faster. We're already growing pretty fast, but we could be doing better.

**Adam Stacoviak:** Wow. So no marketing. That's great.

**Anurag Goel:** No marketing. It's all word of mouth. And that's the thing about developers... If you build something that really appeals to them, that really solves the problems that they're running into every day, you get the benefit of developers telling other developers about it. This doesn't happen as much in other markets. But in a developer market, it's massive.

And so we've really focused on the product, really focused on the look and feel, but also the kind of features that people want, especially as they grow. And our whole thing is, look, we're differentiated in two big ways. One, we're not opinionated... Well, obviously, it depends on who you're comparing us to, but we're not opinionated in how you build your app. We want you to pick any architecture you want. We're not going to tell you, "Look, you can only use serverless functions and have a static frontend" or, SSR, ISR, or whatever the fancy buzzwords are of the year or the month. We're not going to tell you everything is a Postgres, and you have to build functions on top of Postgres, and you have triggers that do everything for you. We want you to build your app the way you do it, because we know that that changes over time, and we find ways in our product to support you however you build your app. So that's one thing.

The second way in which I think we're very different is what I was talking about earlier, which is we allow you to scale on the platform. Both in terms of cost, but more importantly, in terms of the features that you're looking for as you grow. And so we've continued to focus on those features as companies on Render have grown from being just three people spending $30 a month on Render, to now we have folks who are spending $2 million a year on Render, and they're very big in terms of their team sizes, and they've continued to grow, and the bulk of their compute - pretty much all their compute, except BigQuery in this one case - is on Render. And we're making sure that we continue to build for them.

**Adam Stacoviak:** One thing you said that I had not actually heard of before is this idea of two pizza teams. Can you explain that? What is a two-pizza team?

**Anurag Goel:** So this is something that came out of Amazon, where back in the day Bezos or someone at Amazon was like "Look, team sizes should not exceed the number of people who can consume two pizzas." And so if you have a team of 50 people, they'll require way more than two pizzas. That's not great. We want your team to be small enough, and we want their scope to be small enough. And the whole thing around service-oriented architecture - so everything is a service, and then all these teams build these well-defined interfaces that talk to each other, or that people have to go assemble themselves... I mean, in some ways, that's also the Unix philosophy; you have tools that do one thing well, and then you find ways to configure them or use all of them together. So that is essentially how AWS - and not just AWS; I'm sure other parts of Amazon - that's how they thought about organizational design.

\[19:45\] And it's true that you ship your org chart, right? You've heard that one before, I'm sure. And when you think about it that way, that's why AWS isn't able to do an end-to-end application stack well. That's why they falter. And it's not something that they're going to be able to change. But when you think about Render, we're always thinking about stuff at the very top, at the very layer where we're focused on what application developers want. We don't actually build for DevOps engineers. We think they're great, they're valiant soldiers in this battle that they rage against complexity every day, but we live in a world, Render lives in a world where application engineers are responsible, and want to control their compute. So that's a very different mindset and philosophy, and it requires thinking about products in a way that is fully integrated. Because as an app engineer, I don't really want to both integrate Lambda, and API gateway, and something else, and then EC2, and then Kubernetes, and install all of this. No. I just want my app to be out there, to be resilient, to just work, and I want reliable, scalable compute.

So that's how we think about it, and that leads fundamentally to very different products. And I think it's pretty evident in how AWS has tried to build these products at the top level. We've all heard of Elastic Beanstalk, we've all heard of other attempts that AWS has made at building these higher-level products... And they fail. They fail -- well, failure is in quotes, because at AWS's scale, any product you launch will get some adoption, but it doesn't become the gold standard for how to do it. And that's because they always have these trapdoors. When you start out with something like EC2, then your incentives for making a high-level product aren't as strong, because you can say "Well, if this product doesn't work for you, you can always use EC2, and you still make money that way." For Render, that's not true. We're not selling VMs. We'll never sell VMs. Our platform is what we are selling. So if this doesn't work for you, then we lose a sale. So we make it work for you. So that's, again, a philosophical difference.

**Adam Stacoviak:** Yeah. You want the entire application to be there, and you want it to use cron jobs, you want it to use managed Postgres...

**Anurag Goel:** Exactly.

**Adam Stacoviak:** ...you want it to use different services to enable that application developer to have the autonomy to deliver their application and not have to go through an intermediary... Which is really the DevOps world, right? You're cutting that out, not so much because you don't like it, but because you're trying to serve a different sliver of the developer marketplace, so to speak. As you said before, was that the cloud is big, there's room for all, basically, and you're going to have AWS winning, you're going to have Azure winning, you're going to have GCP winning, but you're not going to win -- they're winning in different areas. They're winning different types of teams. Maybe larger enterprises that have uniquely different scenarios where they literally have to have a DevOps team because their business requires them to operate a different way. I don't know, that's kind of how I look at it.

One thing you said, actually, in your acquisition -- sorry, not in your acquisition; in your announcement, I should say, of this $80 million funding that you just announced back in January... Congrats, by the way.

**Anurag Goel:** Thank you.

**Adam Stacoviak:** You said "Most struggle to maintain focus today because they face an impossible choice with cloud infrastructure." And you go on to say "They can either use legacy simplistic cloud platforms that fail to scale and constrain their technical choices, or they could dedicate substantial resources", a.k.a. using AWS etc. "to manage unnecessary complex infrastructure on public clouds." And they burn through precious time, resources, and ultimately just delay time to market, delay their application from existing. Render is in that middle ground there, and you said before that you were number 5 to join Stripe, so that means that you probably exited well, with some deep pockets... You didn't have to go back to work. You said you and your wife said "Hey", I'm paraphrasing some version of conversation you probably had, "What should we do here? Should we just hang out on this beach, or should we go and solve some problems?" What made you want to be in that middle ground there, to put Render in that gap that you described, to solve this problem? Why not just go off in the sunset?

**Anurag Goel:** \[24:31\] Chill out?

**Adam Stacoviak:** Yeah, chill out. Why not? Why go back to work, and -- I'm sure you work hard, right? You probably work 50, 60 hours a week, or more, I don't know... Why? You don't have to. You didn't have to.

**Anurag Goel:** So I often ask myself that question...

**Adam Stacoviak:** Is that right? I bet you do. You're like "Gosh, did I really have to do this...?"

**Anurag Goel:** There are days. There are days when I ask myself that question. But no, I think -- first of all, we were both young when this happened.

**Adam Stacoviak:** Eight years ago?

**Anurag Goel:** Yeah, a little over eight years ago.

**Adam Stacoviak:** \[unintelligible 00:25:07.24\]

**Anurag Goel:** Yeah, but -- so we still had our lives ahead of us. And I think for me, at least, it came down to who I am fundamentally. And I am driven by impact. I get bored when I am not doing stuff. And I'm also just fundamentally somewhat boring. And by that I mean --

**Adam Stacoviak:** As a person, you mean?

**Anurag Goel:** As a person, in that I don't have these sort of Renaissance hobbies that I could spend a lot of time on, and I could go sculpt, or be a carpenter... A lot of people try that. That's almost like a meme in the valley, where "Okay, well, now I made this money through this whatever company, and now I'm going to go be a carpenter for a little bit."

**Adam Stacoviak:** Okay, I didn't know this meme. I love it.

**Anurag Goel:** People do it. But I think -- there's also traveling; like, you spend all your life traveling. I don't -- I'm a reluctant traveler.

**Adam Stacoviak:** Is that right?

**Anurag Goel:** Yeah. I don't love traveling.

**Adam Stacoviak:** Is it the plane? Is it the people? What is it?

**Anurag Goel:** You know, I've got a great setup at home.

**Adam Stacoviak:** "I'm comfortable."

**Anurag Goel:** I'm comfortable.

**Adam Stacoviak:** Alright.

**Anurag Goel:** Yeah, exactly.

**Adam Stacoviak:** "I know where the bed is, and I like it."

**Anurag Goel:** I like it. I have all my stuff here... I enjoy it, I have my routine. No, so jokes aside, I think there is something about fundamentally who you are and what drives you... And for me, it was important to, again, spend -- I want to look back at the end of my career or my life, and be like "I contributed to solving this large problem." And I know that that will make me feel good about how I spent my time. So that was what eventually led me to the search.

**Adam Stacoviak:** Can you tell me about, if you don't mind, a layer deeper? Your wife - is your wife in technology? I'm not familiar. What's her background? How could she contribute to "Yes, Anurag, you should go back to work and build this platform that will eventually, potentially", and as you said before, "will" IPO. I mean, that's an audacious goal, and I think you're probably going to get there. Not so much what is her qualifications, but does she have some awareness of the true requirement to do what you've done?

**Anurag Goel:** Oh, she does. She knew what Stripe was.

**Adam Stacoviak:** Okay. Sure.

**Anurag Goel:** \[27:57\] She knew how hard we all worked. She had seen all the early people go through everything that we went through... So it was very clear. We knew what we were getting into. And I think it was -- it's just the nature of our relationship where what's really important to the other person is important to me. Or what's important to me is what is important to her, and vice versa. And we've been together a while. I think it's going to be it's going to be 18 years.

**Adam Stacoviak:** Oh, wow. Congratulations.

**Anurag Goel:** Thank you. Yeah. This year.

**Adam Stacoviak:** You must be doing something right then, because you know, that's a long time.

**Anurag Goel:** It is, and it also doesn't feel like 18 years. It's just -- wow, you look back and now that's 18 years.

**Adam Stacoviak:** Do you like Bob Seger, by any chance?

**Anurag Goel:** I don't. I've heard of him, but I --

**Adam Stacoviak:** There's just one phrase from one song he has, "20 years now, where'd they go? 20 years, I don't know. I still look at myself sometimes, where they've gone." But essentially, this idea that "Wow, 20 years have gone by so quickly", and you're alluding to a version of that.

**Anurag Goel:** Yeah. I still remember the first time I saw her. I very distinctly have that memory in my head. And she thought I was a snob.

**Adam Stacoviak:** Is she listening to this show? She's probably listening to this show now. She's tuning into this chapter at least.

**Anurag Goel:** She's probably going to listen to it, yeah. So I'm probably going to get some brownie points. But no, I do remember the first time I saw her, and she thought I was a snob when she first saw me. For a variety of reasons. But then I fixed it.

It was fine. And here we are, 18 years later.

**Adam Stacoviak:** \[laughs\] Cool. Well, it's good to be equally yoked in a decision like that. Because I can only imagine that you had a choice, to go back to "work", to climb another mountain... And obviously, once you begin to climb, it would not make sense to even start the climb if you're not going to finish the climb, right?

**Anurag Goel:** Oh yeah, of course.

**Adam Stacoviak:** So why would you go and even start if you're going to quit, or decide to change that decision a year or two into that choice? It just doesn't make any sense. You alluded to the potential of an IPO... So your focus is on IPOing Render?

**Anurag Goel:** Well, my focus is on continuing to solve our customer problems...

**Adam Stacoviak:** Of course.

**Anurag Goel:** ...and growing revenue, and doing it in a way that allows me to keep Render an independent entity, and for me to have enough control over what we build and how we build it, and to work with the people I want to work with... And all of that essentially means staying independent over the very long term. We've also raised all this capital, and we have a responsibility to make money for our investors, for our employees... And so all of that, I think, does naturally mean in today's environment an IPO. But that's just like a step in the long-term journey. Because one thing you realize is post-IPO I'll still have the intensity of problems that I have today. They're not going to go away. We'll just have a different set of problems. You just go faster. It never gets easier. This is a famous cycling quote. And it doesn't. It doesn't get easier.

We've raised all this money. In some ways, my life is harder than it was when I wrote the first line of code for Render. And it's harder because I have to constantly reinvent my job every six months. And learn very quickly. And learn a lot of stuff that has nothing to do with engineering, on how to run a company. And that's never going to change. So the IPO is just a step in that journey. We're nowhere close to an IPO, but the way I think about it is long term this company should outlast me. And we talk about it internally as this being a generational effort. And all of that points to staying independent, because we've seen what happens when you get acquired by Salesforce.

**Adam Stacoviak:** Yeah.

**Break**: \[30:30\]

**Adam Stacoviak:** Let's examine that. Can we examine reinventing your job?

**Anurag Goel:** Sure.

**Adam Stacoviak:** What you do. Can you describe -- I imagine early on CEO is just simply a label. Obviously, somebody has to hold that title in an organization. Can you walk me through -- I assume now you're far more CEO than you were first line of code, right? Can you walk me through the steps of reinventing the role that you've fulfilled?

**Anurag Goel:** Yeah, absolutely. And even learning that that is what you need to do is a journey. So I didn't know when I started the company that I would need to reinvent my job every six months. And I think for the first at least two years - actually longer - the bulk of my time was spent on essentially IC work, where I was coding, and the rest of my time was hiring.

I think early on in a startup journey, the CEO has three jobs. They have to raise capital, they have to hire, and then they have to build product. And whether they're technical or not, they have to build product. And that changes over time. And so for me, as you hire more people, it becomes clear that -- especially as you raise more money and you're able to continue to hire people, it becomes clear that the organization needs a different set of things from you. You need to start thinking about planning. You need to start thinking about how all these individuals are going to start working with each other in a way that is driving everyone in the same direction. And you think about management, and you think about hiring managers, but also, well, okay, what are your expectations for the managers? How do you even evaluate managers? And how do you make sure that they aren't actually slowing your engineers down? How do you think about the non-engineering and product side of the org?

So for the longest time, I was the only person responsible for "product" at Render. So the company started in 2018, we launched live on stage at TechCrunch Disrupt in 2019 Battlefield, which we won that year. That was kind of insane.

**Adam Stacoviak:** Do you still have that big check?

**Anurag Goel:** Yeah, it's in here, somewhere in the office.

**Adam Stacoviak:** You don't have to get it, I'm just curious... I'd love to see a picture. If you can, as sort of post-promotion of this show, I'd love to see a picture of that check on social media as part of this. That'd be awesome.

**Anurag Goel:** Yeah, of course. I'll send it to you. That was kind of crazy. You obviously see this stuff on TV...

**Adam Stacoviak:** Silicon Valley, the TV show, man. I mean, come on.

**Anurag Goel:** Yeah, it was --

**Adam Stacoviak:** You were the Pied Piper... In terms of the winner, not so much the actual application. And maybe the exact thing was happening, but you got the check and you won the Battlefield round.

**Anurag Goel:** \[37:54\] It was less dramatic. It was just a lot of hard work, I'll say. And you're on stage, and there's all these incredibly accomplished people, and Ashton Kutcher...

**Adam Stacoviak:** That's hilarious.

**Anurag Goel:** And it was quite an experience. But I think at that point -- Render was actually just four people when we won in 2019. And we launched the thing... And when you launch it, once you have customers, things just feel very different. Once you have people who want more things from you, then you have to get out of build mode and you have to really focus on listening to them. And being my job was much more around "Okay, well, what do people need?" Talking to them, making sure that I was steering the company, the product in the right direction, while also building it on the side... And then we hired our first product person, who is our VP of product now, in December 2022. So for four years we didn't really have a product person. It was just me and the other engineers... Which I think served us well. But at a certain point, you have to start thinking about the other functions you bring in. So then you think about bringing in finance, you think about bringing in someone to manage your people team. You think about bringing in marketing, but that never worked for us.

But that's the other thing, how do you grow this thing? And I think we were lucky in that we kept growing, despite not having any marketing or sales. So especially in the early years, it was an afterthought, and building the product and allowing people to scale on the platform and giving them what they want was front and center.

I think now we've raised all this money and we have 80-ish people in the company, and we're growing fast. We're hiring fast. And my goal now as CEO has switched to repeating myself over and over again to make sure that we're all aligned around the same kind of thinking around what we're doing, why we're doing it, who we're doing it for, and what needs to be done. And the CEO's job becomes just constant messaging, and repeating the same message over and over again, once you get to a certain size. But it also becomes hiring -- I mean, hiring executives is... You talk to a bunch of CEOs in my position, everyone is going to tell you hiring executives is hard, and it is also the highest leverage thing you can do.

**Adam Stacoviak:** Yeah.

**Anurag Goel:** And that is a lot of what I spend my time on - hiring, and making sure that we're all moving in the right direction, that everyone knows why we're doing what we're doing... Because it turns out -- you know, all the people who joined early on, they knew what we were doing. They didn't need to be told. They just went ahead and did it. But then the 80th person you hire has a very narrow view of the organization by default. They're coming in into a specific team, they have a specific project that they're taking on... But the whole architecture, the stack is much bigger. So you still want them to have the autonomy to make the right decisions day to day, and the only way they can make the right decisions is if they have the broader context. So sharing context, sharing everything that they need to do their jobs well - that becomes your primary responsibility.

**Adam Stacoviak:** Wow. Is that -- so it sounds like you must have gone through a period where... I imagine you don't write code too frequently today. You don't write a lot of code, I imagine.

**Anurag Goel:** I wish I did. I wish I did.

**Adam Stacoviak:** If that's true, then why did you do what you've done?

**Anurag Goel:** No, no, no. I wish I did in the sort of --

**Adam Stacoviak:** \[42:11\] I understand what you mean. I'm being facetious, to some degree, and somewhat rhetorical in that response. It's just a joke, but...

**Anurag Goel:** No, it's a good question. I wish I wrote -- so here's the thing. I wish I wrote more code on the weekends. Just on the weekends. I don't wish I wrote code day to day. But my weekends are spent doing other things.

**Adam Stacoviak:** What do you do on the weekends?

**Anurag Goel:** I'm spending time with my wife, man.

**Adam Stacoviak:** Okay. I get that. I mean, you never know, though. You never know. You could be doing something like a side project just to keep you warm, just to keep your skills refreshed and whatnot.

**Anurag Goel:** Yeah, so I need to get into that. For some reason, that hasn't -- I think I'm just in a state of trying to recharge on the weekend. I actually end up playing video games on the weekend, real-time strategy...

**Adam Stacoviak:** Oh, man. Do you build machines? Do you build your own gaming machines?

**Anurag Goel:** I did build my own machine, and I still use it.

**Adam Stacoviak:** Okay. How long ago? Recently?

**Anurag Goel:** No, that was 2016, when I built this startup... Well, if you can call it that. It was a one-person startup that I ended up selling to another company. But I built the first GPU-backed Jupyter Notebook online that you could start with a single click. And it had all these data scientists who were really running into tons of trouble trying to spin up a Jupyter notebook backed by a GPU to do deep learning, which was the craze back in 2015, 2016... And I saw that, and I was taking one of these courses where -- I wanted to learn deep learning, and so this was my exploratory period. And then I realized that this was insanely hard for most people, and I went and built a whole thing on top of Kubernetes, no less, to offer people a one-click Jupyter Notebook.

But then Google came in, and they were like "Hey, we'll give it to everyone for free." And to be completely honest, I didn't care as much about data scientists as I cared about developers, application devs... And so then I started working on Render, and I was like "I don't want to do this thing anymore." So then I sold it through a tweet. I tweeted about how I am now focused on something else, and there's 10,000 data scientists using it... I would love for someone else to take it over. And then there's this company called Dock.ai, and they acquired it for me, for a relatively small sum, and I was happy.

**Adam Stacoviak:** So how does that relate to you building your own gaming PC?

**Anurag Goel:** Oh, so I needed to run deep learning on my own GPUs. And so it wasn't intended to be a gaming machine. It just became a gaming machine later.

**Adam Stacoviak:** Because it had no more use.

**Anurag Goel:** Because - yeah, it had no more use.

**Adam Stacoviak:** You're like "I've got this GPU, this massive GPU..."

**Anurag Goel:** I had two of them. I built a two-GPU machine.

**Adam Stacoviak:** Yeah, it's kind of crazy how that swings back again, because -- and we could probably touch on this to some degree when we get to your focus now with Render on AI, and what that means in your announcements, because I have some questions around that... But there's this new resurgence to -- especially with Ollama, and public and/or open LLMs to be used and consumed in your own private inference, essentially.

Finding a GPU, whether it's an older gen like a 3090, which is still relatively useful, 4090, which is one of the most earliest models, and then now 5090s - those are all at the top tier of NVIDIA's RTX-level GPUs. Good luck finding those things, right? Good luck finding them, and if you do, they cost just as much as the original price tag, if not more, because there's such a demand for them. I can imagine that's -- it's wild.

\[45:57\] It's kind of crazy that it swings back again. You were playing with that, and maybe instead of Render -- I guess maybe now you're best positioned to maybe pick that back up again, because I imagine part of this innovation you're talking about in your announcement post, which I'm sort of paraphrasing... Let me see if I can pull it up real quick, just so I can be more clear about it. You mentioned -- you allude to the new chapter for Render, and then the desire to build for the AI era. I imagine -- when I read that, I think you're going out to buy a bunch of GPUs, and you're taking a lot of that $80 million, or a large chunk of it, and you're like "Okay, this $20 million is for GPUs", considering the price tag I just mentioned for your sort of consumer, prosumer-level GPU. I imagine building for that AI era is tech on top of it, software and orchestration on top of it, but it's ultimately acquire GPUs, plug them into machines, and make them available.

**Anurag Goel:** So it's actually not that.

**Adam Stacoviak:** Okay. My assumption is incorrect.

**Anurag Goel:** Well, it might become that, we don't know... But we don't have enough evidence to say right now that that is what we should do. But I think it goes back to what I was saying earlier about people changing how they're building applications... And we realized early on in 2022 that our customers were not the kind of customers who were going to go train their own models. And we're not selling -- Databricks is not using Render, or Grok 3 is not built on Render. We're selling to application developers. And application developers are not in the business of training their own models. They use ChatGPT, or Claude, or whatever, and they build on top of that.

We did a bunch of customer research, because in 2020 we were like "Well, should we go buy a bunch of GPUs?" And you and I both know of companies that are peers that went and did that, and then realized a bit too late that they shouldn't have done it. But we knew early on that this was not the path for us, and I'm not convinced that that has changed for us.

So when I talk about what we're doing for how people are building apps in the AI era, I'm thinking about the ways in which we can make it easy for people to run a lot of distributed compute, or compute that requires a lot of retries, or compute that is based on a lot of different conditions.

**Adam Stacoviak:** Temporal then. You're trying to build what Temporal's built.

**Anurag Goel:** I can neither confirm nor deny that statement.

**Adam Stacoviak:** Well, that's what you just said. I can confirm that by what you've just said.

**Anurag Goel:** Well, I think there is an opportunity for us to build something that makes that kind of problem a lot easier to solve for application developers.

**Adam Stacoviak:** Yeah, it's necessary.

**Anurag Goel:** Exactly.

**Adam Stacoviak:** Yeah. Well, if you don't, your application falls over. You've got something waiting, so your application is blocked. You need to have that resilience.

**Anurag Goel:** Exactly. Exactly.

**Adam Stacoviak:** And the stack doesn't necessarily -- you have to build it yourself. Or - not an ad. They're a sponsor of ours. I'm aware of how their platform works... But they may actually sponsor this episode. I don't even know, because we don't know which episode is being sponsored when we produce it, but...

**Anurag Goel:** And that's totally fine, because I think Temporal is a great product. But again, it requires a lot of wrangling, and it requires a lot of like figuring out. And Render is really good at making complex things easy, and giving people an interface that they like to use, and that they love talking about... And that's our strength. And when you combine that with our strength around running millions of applications at scale reliably, then you kind of see where this is going. But that doesn't rule out Render offering GPU inference.

\[50:16\] Again, model training is not where we would focus... But you can imagine -- you still can't run serverless inference in a way that is... I mean, there are places where you can go do it, but the other thing we've realized for Render is people generally want everything in the same place, to the extent that they can. And Render is never going to build literally every single service that AWS has built. That's not who we are. That's not the way for us to win. But there is a core stack that we target, and it goes back to the components that everyone needs, or that 80 percent of the market needs. What does that mean for what Render provides for that component? And so one of the things that often comes up, especially for AI companies, is object storage. They want -- they're running all their other compute on Render. They want to run managed inference on Render, but they also want to store their models on Render. And they want to -- like DeepSeek, you store the model on Render, you run managed inference against it... Render doesn't have object storage today. People can use S3 if they want, and they do use S3 while they're using Render. But we consistently hear from people, "Look, S3 is the only part of my stack that is on AWS. And I would love for you guys to fix that." But it's been a while, and we've chosen not to build S3.

**Adam Stacoviak:** It's kind of funny, your next innovation is like the oldest tech, basically...

**Anurag Goel:** Yeah, the thing that AWS built first.

**Adam Stacoviak:** Yeah. I mean, it's what they're most known for. They've wanted so much that S3-compatible is the way. I'm sure that when you build your object storage, you're going to make it S3-compatible, because you have to.

**Anurag Goel:** Absolutely. Yeah. But again, it's not -- so the way we think about product is not to build technology for the sake of it, it's to build technology to solve the very real problems that people have.

**Adam Stacoviak:** Yeah.

**Anurag Goel:** And that might lead to what from the outside might appear to be sort of a boring platform. But our numbers say otherwise, and our revenue says otherwise.

**Adam Stacoviak:** Well, you need to follow that boring tech mentality, too. I think there's a certain recipe of innovation, and there's a certain recipe combining that with boring. Boring is stable.

**Anurag Goel:** Boring is stable. Boring is secure.

**Adam Stacoviak:** Right. Boring is capable.

**Anurag Goel:** Yeah.

**Adam Stacoviak:** It's not going to fall over necessarily in the middle of the night, and cause me and my team headaches because I chose Render's super-innovative next thing. It's more like "Well --" That's kind of funny, that your next innovation is object storage.

Okay, so you've got -- you currently have GPUs running, so you're running inference...

**Anurag Goel:** No, we're not.

**Adam Stacoviak:** Okay, you're not.

**Anurag Goel:** No, no. I was just saying we can't rule that out. So some of that $80 million might go towards figuring out the GPU situation.

**Adam Stacoviak:** Do you think it'd be $20 million? I was just joking about that number, but man, I can imagine if you had to stack some GPUs, it'd probably be about $20 million to outfit a proper setup.

**Anurag Goel:** Yeah, I don't know... I don't want to spend $20 million on GPUs. \[laughter\] I just don't.

**Adam Stacoviak:** Who does, right?

**Anurag Goel:** Yeah, who does?

**Adam Stacoviak:** Because two years from now or three years from now, when the demand curve swings back, you'd have probably paid 3x, 4x more than you should have.

**Anurag Goel:** \[53:59\] Yeah, but the good thing is there's a bunch of people who already spent that money on GPUs, and they are looking to make some money from it, because they're just lying there, being wasted. And so there is a marketplace approach to this, and there are companies that are becoming effectively GPU marketplaces. SF Compute is an interesting company that we've come across recently. So we don't have to go buy our own GPUs, and there is a world in which we test the waters by looking at some sort of marketplace approach.

**Adam Stacoviak:** So without revealing or me asking you to reveal too much of your cards, or even beyond my question mentioning Temporal ever again, in terms of this in particular, is the next thing you're trying to build that retry world where you don't have an application fallover? Because going back to your original state, that I paraphrased from your announcement post, was like you've got this one camp that hangs out in legacy, and this other camp that hangs out in public cloud, that they have to build everything. And there's this middle layer, which is called Render, which we've been talking about, of course, and that's where some of the orchestration is done for on behalf of an application developer. There's application developers that want to utilize APIs, whether they're for artificial intelligence, inference, or whatever it might be. They're using APIs every single day in their application... But they've got this problem. And you essentially watch that with cron, or background jobs, or queues, and you've got to manage those orchestrations... You've probably got dashboards and logs, just like PagerDuty, and whatever you might have. So I imagine -- can you give me a peek into what you're doing to solve that problem?

**Anurag Goel:** Yeah. So the way people manage it today is exactly what you said, which is you run a background worker, and you have a Redis queue, and you run something like Celery, or whatever. And I think, again, that architecture served us well for maybe 10 years, but it's showing its age, based on the new kinds of requirements that a lot of applications have if they're tapping into these long-lived API calls that are streaming data, WebSockets are becoming increasingly more relevant... We have a lot of people move over to Render from Vercel, because we have WebSockets, and they can run Next.js in a way that allows them to call out to these LLM APIs.

And so when we think about not just for AI APIs, but even async tasks, things that need to happen, you need to make sure that they happen once and only once, and then you need to have conditional events happen, and so you basically build out a whole graph of activity... And you want to be able to just express that in your code. So you just want to say "This function - this is my job. Run it once. That's it. I don't want to care about anything else. I don't want to spin up background workers... I don't want to spin up queues. You do all of that for me. Make sure it's reliable. Give me a dashboard that tells me exactly how things are going. Give me observability into it, and charge me only for the time that my task is running. And give me different levels of compute, depending on the task." And I can tell you what level of compute, and maybe you autoscale compute vertically depending on the task.

And so there are a lot of these questions and answers that we are thinking about as we think about this next product...

And I think it's really exciting. I think it's fundamentally changing the abstraction level of how people run a bunch of distributed tasks, and making sure that we give people the same -- again, it's all about what your infra team would do for you if you were on AWS.

\[58:10\] Your infra team would set up Temporal, and they would train you on how to use Temporal, and then developers would have to learn Temporal. We're replacing a lot of that, and we're saying, again, "Application devs, if you want all of this, here it is." And you don't have to worry about how many Temporal workers you have, whether they have enough memory, whether you need to increase the number of Temporal workers you have... So there's a lot of that just unnecessary work, that even we have to do, to deal with something like Temporal. But I think Temporal is a great product, and I think that they serve this growing market, this need that they're never going to be unique in serving if it's a problem that everyone faces.

**Adam Stacoviak:** Are you friendly with other CEOs?

**Anurag Goel:** It depends on the CEO.

**Adam Stacoviak:** Are you friendly with Samar, for example, Temporal's CEO?

**Anurag Goel:** I don't know him. I don't know him.

**Adam Stacoviak:** Okay. I've talked to him before. You guys seem passionate about solving this problem, so I bet you guys would be good friends.

**Anurag Goel:** Sure, yeah. Yeah. I mean, again, I think what they've built is great.

**Adam Stacoviak:** I think -- yeah, when I look at what you should focus on, it seems, in my prior examinations of what I assumed Render was, and then now my examinations of what Render is based on this conversation with you, you look at the marketplace of being a developer, in particular an application developer, because that's who you serve... And you say, "What problems does that kind of developer have deploying applications?" And "Let's just solve their problems." And then you pick one product after the next after the next, and you just keep layering on until you have a full suite of essentially batteries included, configuration not required. It's convention over configuration, here you go. A lot of great choices. Now, you can fine-tune it if you want to, it's off the beaten path, but here's the blessed path, application developer. Go have fun. Deliver your application.

**Anurag Goel:** You just described our business strategy.

**Adam Stacoviak:** There you go.

**Anurag Goel:** Yes, that is exactly what it is.

**Adam Stacoviak:** Okay. So when it comes to, I suppose, this -- if you want to say it, this $80 million that you've got... Did you need that money? Did you need to raise another round, or did you do it because it was time, it was necessary? Why raise a series C? Why that for you all? I know you have to innovate. Do you need that cash to sort of accelerate certain things? Because that's usually why you raise cash, is to accelerate a new plan.

**Anurag Goel:** Yeah. So I think for us there are two big reasons. One, increased legitimacy. I think there are a lot of people, both customers and potential hires.

**Adam Stacoviak:** Perception, essentially.

**Anurag Goel:** A lot of it has to do with perception, because you look at a series A company, and they have this product, and it might be great, but they're like -- series A companies die at a much higher rate than series C companies. Everyone just knows that. And there are people who will join a series C company because it has reached a certain level of product-market fit and has reduced the risk to a large extent. But they won't go and join a series B company.

And so it was important to us to continue to have this public perception of stability and long-term viability, given what we do. And as soon as we announced the round, the number of people building serious things on Render, that has taken off. So there's that.

**Adam Stacoviak:** \[01:01:55.00\] Okay. How do you maintain an awareness to that? Answer the rest of your question, and then come back to that one, because I want to hear what you were saying. I was just thinking about that in the moment... I'm like "Gosh, how do you pay attention to serious applications, or not serious applications?" But anyways.

**Anurag Goel:** Yeah, I'll get to that. But the second reason is - of course, we need the money to hire more people. I need to build out a marketing team.

**Adam Stacoviak:** Marketing...

**Anurag Goel:** Yeah, marketing and sales. We have one -- again, a lot of people might not be interested in Render after hearing this, but we have one account exec. That's it.

**Adam Stacoviak:** If I was a salesperson who had no job or wanted to transition to a new job, I would kill for that job. You know why? I can make all the money. Or a lot of money, because if you've got one across - I don't even know what your revenue rate is, but I'm sure it's going to grow, being a series C... Well, I mean, that's a great place to be in as a salesperson or any account executive, is to be in a position where you can collect.

**Anurag Goel:** Yeah, but the thing is, most people who use Render never need to or want to talk to sales.

**Adam Stacoviak:** Sad. I mean, happy, but sad.

**Anurag Goel:** Sad for the salesperson, yeah. \[laughs\]

**Adam Stacoviak:** Well, I think that's the way to go, right? You want to have that sort of on-demand to the application developer. That's the way they think. An application developer is not going to want to sit down with somebody. However, sometimes they're going to need to convince other people, and that's where the AEs come in. It's like "Hey, I'm an application developer in my company, but I have to have my CTO's approval, and he/she has to meet somebody at Render to legitimize this spend, or my ability to even give it a POC."

**Anurag Goel:** Yeah. And we have a sales engineer. Also just one sales engineer. So I think part of it is just there are people who just want to talk to someone, like you said. And it might not even be to legitimize it to anyone else, it would just be for their own comfort.

**Adam Stacoviak:** A real email address, a real person.

**Anurag Goel:** Yeah, a real person. They want to get on a Zoom call. They want to make sure that they hear from someone how things are going to go... And then they have this person's contact now, and if things don't go well, this is a person they call. And so there is that level of human interaction that a lot of people need to feel comfortable about trusting their entire business over to us... Because we're not building a tiny thing for them, we're running their entire business online. And so that's why I think it's not even sales, it's essentially help and education. And we don't have this, like, "Oh, you need to meet this quota" as a salesperson. We don't have that, because a lot of the self-serve people will reach a point and then they'll be like "Yeah, I need to talk to someone." And do we count that in sales comp? Do we not? That's an interesting question. And a lot of people migrate to us from a places like Heroku, AWS, and they self-serve migrate... But during that process -- they're going to migrate anyway, but during that process, they do feel the need to talk to someone... So, that is probably sales-assisted. And so you count that in their quota... But it's too early for us to set quotas, given that we don't effectively have this.

But to go back to your question about -- so the money that we're raising, we do need to build more things faster. We're going to do that. So it's not just marketing and sales... Actually, a lot of it is going to go towards hiring more engineers, and hiring people who were not accessible to us just because we were an earlier stage company. You also were asking about -- the other question that you said we were going to come back to...

**Adam Stacoviak:** \[01:05:58.08\] Yeah, how do you pay attention to serious application?

**Anurag Goel:** Yeah, yeah. Honestly, the simplest way to tell is they use their work email, and they're not using a Gmail address.

**Adam Stacoviak:** So not a Gmail account, or not an AOL, or ICQ... Something that's just based on that.

**Anurag Goel:** I don't think ICQ ever had email, but yes. AOL, yes. Is ICQ still around?

**Adam Stacoviak:** I don't think so... I fumbled that one. It shouldn't have been ICQ, it should have been like EarthNet, or something like that.

**Anurag Goel:** Or CenturyLink.

**Adam Stacoviak:** Yeah.

**Anurag Goel:** Yeah, CenturyLink.net.

**Adam Stacoviak:** Or SBC.net. Your ISP's email. Who in the world ever uses their --

**Anurag Goel:** Yeah, exactly.

**Adam Stacoviak:** Precisely.

**Anurag Goel:** Exactly. Anyway, slight tangent... So yeah, so not having any of those emails, and having a work email makes sense. But we also have a lot of people using Render for specific things while working at large companies. We have people who have signed up with Meta.com, and we have Alibaba.com, and all these other... Even Amazon and Google... These are paying customers. People have signed up with their work email, who are not actually running a large thing from Google or Amazon on Render. It doesn't make sense to do that. But they're using -- so these might be like data scientists, who want to run something in Python and they just can't get the support they need from their DevOps teams. And this is very common in large companies, where you have enterprises where their main application is handled by the DevOps team, but then people want to build other things, whether it's data scientists, or sales engineers... Even marketing engineers, they want to do stuff that they want to put out in the world, they want it to have a URL that other people can access, and they just don't get the support that they need from DevOps, because DevOps couldn't be bothered, and they're a bottleneck, because they have all these other needs that they need to fulfill from the main application. So we get a lot of people like that.

But fundamentally, the people who we're most excited about today are early-stage startups, because Render is a great fit for them. When you're a startup, you want to move fast, and you want reliability, and Render gives you both of those things.

And then the second sort of serious customer segment is what we call tech-enabled businesses. So tech-enabled businesses are those where the core competency isn't actually software. What they're doing is something like they're building a mortgage CRM, or they're a law firm and they need technology to achieve a specific goal. Or they are in some cases also like a crypto company that needs something specific, and they need to host it online. But they're not in the business of hiring DevOps engineers. They might not even be able to hire DevOps engineers. And so they are very, very happy with what Render and products like Render provide.

And then I think we're increasingly seeing what I was talking about earlier, where there are these teams within larger companies that end up using Render because it gives them the same speed of iteration, velocity. We also just launched things like SSO, and SCIM...

**Adam Stacoviak:** Finally, huh? Wow.

**Anurag Goel:** I know, yeah.

**Adam Stacoviak:** Crossed that chasm, finally.

**Anurag Goel:** \[01:09:56.16\] Yes. So every startup wants to change the world, and we're like "We're going to change the world", and then the customer is like "Do you have SSO?" And everyone ends up building it. So here we are. And we actually built it ourselves. We didn't use one of these companies that everyone ends up using, for a variety of reasons. Also our engineers are great, they want to build this stuff... So it's now available in early access. It'll be fully available in a month or so... But there are these companies that want this level of compliance, and they want this level of security, and so SOC 2, ISO 27001, HIPAA... We're working on HIPAA. It should be available this fall. No, actually this late spring is when we'll be ready to work with companies that require HIPAA. So all of that indicates different levels of seriousness.

**Adam Stacoviak:** Yeah \[unintelligible 01:10:53.04\] Well, you're a serious C company now, you have to have this enterprise level feature set. I mean... Right? You have to. Because now you're going to attract these folks, and it's a no unless it's a yes on those two fronts, or those fronts, you know?

**Anurag Goel:** Yeah, exactly. And it makes sense, because you don't want to go in and remove -- a lot of SSO is really about offboarding. People don't want SSO for actually single sign on data. Security departments don't care if you use Google to sign on, although, I mean, they might... But fundamentally, it's about control of who can access this app, especially with something like your infrastructure... And so as soon as someone leaves the company, you want to make sure they don't have access to your most secret and most critical infrastructure. And so SSO is really about offboarding more than anything else, so you have to build that in.

And then you have SCIM, where you add someone, they automatically get added, and you offboard someone in Okta and they automatically get offboarded from Render, and all of that. And you assign roles and permissions... All of that becomes pretty important as you become a serious company.

**Adam Stacoviak:** So you built it versus bought it. How did you -- were you personally involved in that choice? What made you build versus buy?

**Anurag Goel:** I was personally involved to the extent that when they first said they were going to build it, I was like "Why?" That was my first thought.

**Adam Stacoviak:** Okay... As you should as a CEO, you're like "Why? Because we can buy this right now..."

**Anurag Goel:** Yeah, exactly. And our VP of engineering, Mike, was the same. He was also like "Why? Why are you doing this?" But then, actually, when we dug into it - and I didn't dig into it, but other people did... And part of it is also that we're not one of those B2B SaaS companies where you are signing up a few hundred people every month, or whatever... Like, we're signing up all these people, right? 110,000 people.

**Adam Stacoviak:** A tremendous amount of people, yeah.

**Anurag Goel:** And Render's a kind of thing that will require a lot of SSO seats, so to speak, once you get into an organization. So we wanted to make sure that we weren't spending a ton of money. But also, a lot of these things work well. So if you have like Okta, or Auth0, or Stitch, or WorkOS, they work really well with SSO if you've also integrated your auth with them. And we were not going to move our auth over to them. And part of that was just because we built a strong auth system, and we need to integrate our auth with our own GitHub auth, plus GitHub permissions for your apps... And there's some complication there, so it's not just plain auth.

\[01:13:58.27\] And also, again, we're not going to pay them for 110,000 signups a month, or 120,000 signups a month. And so it just didn't make -- first of all, it didn't make economic sense for us. I'm sure it makes economic sense for most companies, which is why a lot of these companies exist, and are doing well. But for us, it just didn't make sense. Plus, the team that was building it, that built it previously at Figma. So they were just like "Hey, we just did this at Figma. We can go do it again." And they did. They built it really quickly, and it works, and I'm sure that we'll continue to improve it; it's still in early access. But I feel good about it.

**Adam Stacoviak:** Just curious, really... I don't really care about the number necessarily, I'm just sort of curious of - if you saved, which I imagine you did... Was it dramatic? Was it a dramatic savings to build it yourself, and to have control? Because I imagine the reason why you did it was because, as you said, you have people on your team that did do it recently... And so it's fresh to redo again, so why not... I imagine you have some autonomy and control over your choices within implementation that is unique to the platform... So you have a bit more control, whereas maybe in other scenarios you may be a bit more restricted potentially... And then obviously there's the savings because now you don't have the monthly bill based on the user count.

**Anurag Goel:** I think all of those things are true to varying extents. The biggest thing was we had this existing auth system, and we just didn't see enough value in using these things for just SSO... And it was a big risk for us to switch our auth over to the new provider.

**Break**: \[01:15:43.03\]

**Adam Stacoviak:** I guess what's next? I mean, you're spinning up marketing, you've crossed or are in the process of crossing the enterprise chasm, which is to offer SOC-2 compliance etc. Letting this series C be the financial boom, let's just say, or fuel to the fire, as well as the legitimacy to attract newer types of customers... I guess, how do you go from here? Where do you go from here? This raise was just last month, and your job is reinventing itself time and time again. I imagine this raise may give you one more variation to your personal role of reinvention.

**Anurag Goel:** Yeah, I think I expect the next year for me personally -- I'll end up spending more time both externally and internally, sharing vision and strategy, and talking about Render. And like I told you, I'm a reluctant traveler, but I've already got business trips lined up this year.

**Adam Stacoviak:** Okay. Are you coming to Austin at all?

**Anurag Goel:** Not yet, but I'd love to.

**Adam Stacoviak:** If you're coming to Austin, I'd love to meet up, man. That's where I'm at.

**Anurag Goel:** I would love to. I absolutely would love to grab a beer. But yeah, I think business travel is in my future. It's that fortune cookie that I got...

**Adam Stacoviak:** There you go. Oh, yes.

**Anurag Goel:** Yeah, I know. But it's also about, as you hire more people, I think talent density is just so critical. And that is how we built the company so far... And we want to make sure that we we keep talent density high. In fact, if anything, our bar should be higher for the next stage. And so that is going to be critical for the company. I also think it's going to be really important for us, for me personally, and our leaders and the engineers who are working on these new things that we talked about - they're all great, but I personally feel a need to stay informed, and close to these things at a high level... And so part of my job would be to kind of calibrate my level of involvement in these things, in these large investments. And I have previously been very involved, but I'm not sure that that is not the right thing to do going forward as well.

So I think it's going to be thinking hard about that, it's going to be talking to other founders and CEOs who have gone through these stages. That's always incredibly helpful. And yeah, just getting better at my job as a CEO. So nothing changes, right? It's all the same. This is just a milestone, and my goal is to continue to do what our customers ask of us, and want, and need.

Continuing to stay close to the customers, continuing to stay close to all the new people we hire... Because I don't want to become this sort of "Oh, he's the CEO, and you'd never get to talk to him." That's not who I am. I still interview every person we make an offer to.

**Adam Stacoviak:** Is that right? At what point? Early or late, usually?

**Anurag Goel:** I interview them when we're very close to making an offer, because otherwise I would not get anything done.

**Adam Stacoviak:** Okay.

**Anurag Goel:** \[01:21:54.09\] Yeah. And I don't know how long I will continue --

**Adam Stacoviak:** Is that your own personal role? Where did that --

**Anurag Goel:** Yes, it is.

**Adam Stacoviak:** Okay.

**Anurag Goel:** Yeah. I love doing it because I want to -- it's very personal to me who we bring onto this journey... So I want to talk to them before we bring them on. And I don't go and tell the team to not hire them. There has been maybe a couple of times when I have done that, but I rarely do it. Almost never. But I want to make sure that I know their name before they join the company, that I put a face to the name, so when I see them next time, it's not like "Hey, who are you? Where did you come from?" It's not going to be possible forever, of course, but I love doing it. And I also think it helps them to see - again, going back to my role as CEO, to align the company around where we're going - for them to hear that from me. And I actually do think it helps us in closing the best candidates.

**Adam Stacoviak:** Yeah, for sure. I want to dig in a little bit, because I'm looking at your -- at least what I can tell your org chart based on your About page... I don't see a COO, I don't see a CTO; those two particular roles in particular. I do see VPs of people, product, finance, engineering, and maybe a VP of engineering is the CTO acting role, but they're not literally the CTO. And if you're -- because sometimes, to be a great leader, you have to have great leadership beneath you, and those two roles... Like, a COO is such a critical role to a well-producing CEO. And I would even say the CTO as well. Do you act in those roles, essentially? Do you sort of bridge the gap between what seems to be missing based on just titles?

**Anurag Goel:** That's a great question. So I don't know if we need either of those roles right now. I'm not acting COO, for what it's worth. And I am also not necessarily playing CTO. And I'll tell you -- the reasons are different in each case.

For the COO role, I think typically what ends up happening is marketing, finance, sales... Everything that is not EPD - engineering, product and design - they end up reporting to a COO. And I am very comfortable, and would actually prefer to have the leaders of these functions report directly to me, because I want to be that level of involved in what's going on. And I don't want to create yet another layer between me and the leader of marketing and the leader of sales and the leader of finance. So I enjoy that level of working closely with them.

I also think -- it might not always be true, but I also think that we can attract more senior executives that way, because they're reporting directly to the CEO, and they're part of the day to day executive decision-making. And I haven't felt the need for it. So yes, I'm hiring a marketing leader right now, but then they'll report directly to me, and that's totally fine, and I don't need a COO to do that. So that's how I think about the COO role. I'm not sure it'll be necessary at any point in our future. There are a lot of very successful companies that don't actually have CEOs. So there are different models for running these things.

On the CTO side, I think it does come down to the kind of engineers you hire, and then obviously your VP of engineering, of course... But we have generally hired engineers who have very strong points of view on what technology can do, and what else is out there in the market, and where technology is going, and it's a team effort for us. So even our VP of product is very involved in the technology choices that our customers are making, and understanding those choices. It's fundamentally a very, very, very highly technical company.

\[01:26:24.16\] Our VP of product was previously an engineer at Heroku back in the day, a very long time ago. And then she was at Slack, and she was at Figma, and then she was at Webflow, and then she joined Render. And so she's -- but then our VP of engineering was previously the VP of product engineering at Discord. And so we have these people around the table, and you know, I'm an engineer by trade... So we don't see that CTO-shaped hole yet. And again, there are a lot of companies, at our stage especially, that don't have CTOs. And so we're okay. I don't want to hire people for the sake of it, just to fill out an org chart. And I actually think -- I mean, the VP title is whatever; they could have the CXO title also.

**Adam Stacoviak:** Sure.

**Anurag Goel:** So it's just a thing. And so that's how I think about both of those roles.

**Adam Stacoviak:** Gotcha. I imagine as you keep reinventing -- like you had said, you want to maintain... You're calibrating, to use your words back at you. You're calibrating your involvement in particulars; in particular innovations, products etc. and how you hire, and whatnot. I think that's so cool that you meet with everyone that you're going to give an offer to. I think that's -- it's grounding, is what it is. It's grounding for you, one, to see every person who's coming into the organization, and two, removing that stigma of your potential level of importance to the organization... Which is crucial, obviously, but your accessibility to folks. I think it's probably so rewarding for them and for you to know that "Okay, Anurag gave me time; sat down and just talked with me about what my role is, where this company is going to go, and how thankful he is to have me as a part of this." And just show that -- I imagine that's what you do, right? To show your gratitude.

**Anurag Goel:** Yeah. And people have lots of choices. Great people have lots of choices. And when you want to hire great people, it's more them doing you a favor than anything else.

**Adam Stacoviak:** That's right.

**Anurag Goel:** Yeah. So it just becomes really important for me to know that I can talk to them directly, and that we can have a one-on-one conversation that feels genuine, natural, and honest. And again, we want to hire people who are low ego, no drama, want to do great work, are ambitious, but not like blindly so, and are excited about what we're doing, are passionate about what we're doing here. And all of that shines through in these conversations. And sometimes I have to explain to them what we do, which is also something that, again, keeps me fresh, right? Like, what do we do? I get asked that question several times a week.

**Adam Stacoviak:** Tell them to listen to this podcast. They'll learn, right?

**Anurag Goel:** Yeah, exactly. Exactly.

**Adam Stacoviak:** For the next little bit, this is your introduction to who we are, is listen to this podcast.

**Anurag Goel:** Do you want me to talk about -- sorry.

**Adam Stacoviak:** I mean, I was joking, but I think it's true, because...

**Anurag Goel:** Oh, you're joking. Okay. Yeah, yeah.

**Adam Stacoviak:** \[01:29:54.20\] No, no, no. I was joking but being serious at the same time. I don't know how you describe that... Actually, I'll give you the frame of reference, because a while back I had interviewed Sid Sijbrandij, who's famous for founding GitLab. And he and his team loved the way I conducted the conversation. I wouldn't call it an interview. Obviously, I'm asking you questions, but it's more conversation, you know? You know, I'm not \[unintelligible 01:30:18.28\] And they had their open documentation for when they hired new people... And it was essentially if you wanted to get to know Sid, you would listen to or pay attention to these pieces of content/media that was out there. And I had gotten serious praise from within GitLab about my ability to conduct conversations with Sid over the years. And so that's kind of where that joke, but seriousness came from, was that -- it was sort of insider baseball, that's why I explained it... And honestly, it was an honor to be told that, because like -- they didn't even have to tell me that. I don't know who links up my stuff or links up our stuff, and shares it and says "This is a reference point." But I think we encapsulated your focus on application developers.

So I think clarity would be just simply like "Wow, Render's focus is on app developers. Not DevOps, not this particular discipline... It's application developers, people who are building and shipping the actual application. And if it doesn't serve them, is it truly something we should be doing?" So I think that's why I say that as joke, but seriousness.

**Anurag Goel:** Obviously, I've really enjoyed the conversation so far, and I think you're at the top of your game. You know what you're doing, so I'm not surprised.

**Adam Stacoviak:** I try. It's just talking... It's just talking.

**Anurag Goel:** Yeah. I love -- I was listening to the chat you had with Kurt at Fly, and you're like "Dude, how are you?"

**Adam Stacoviak:** Yeah, man. How's life? I almost pulled that part out.

**Anurag Goel:** No, I thought it was great. I'm glad that you left it in.

**Adam Stacoviak:** Yeah. Well, because it was -- to give some context to those who might be catching up (we'll link it up in the show notes, of course), I asked Kurt how his life is, and he recently went through a divorce that sort of changed his entire life. And he was happy to share that. And so in the moment, I was like -- in my brain, I'm thinking "How deep should we go here? Because this is a deviation from the topic, obviously..." We'd been talking about reinventing the cloud, this new public cloud kind of idea. And now here we are talking about divorce, and I don't want to get melodramatic, and get sad, but I also want to examine this... Because I feel like part of what we do here at Changelog is just – it's peel back the layers of the realness of what is what. Why did you not go and sip Mai Tais on the beach? Why did you go back to work? Why do you care so deeply about interviewing, or sitting down with every person who comes in? Why are you so passionate about application developers? And it's beyond the technology. It's beyond even your drive as a human being. It's like "What makes you tick?" That shared decision between you and your wife to say "You know what? Let's do this." And it's not just "You go do the work." It's us making the choice of allowing one part of the whole to go and do one more - maybe more - adventures; one big adventure, one more big adventure. And I think that's what it's all about, really. You can't just simply say, "Tell me why you think Kubernetes sucks. Let's talk about that for 40 minutes." Or it doesn't suck. Or let's just say, why do you think it sucks for application developers, and it doesn't suck for DevOps. I've got a great friend of mine who is a DevOps, I would just say borderline genius... He loves Kubernetes.

**Anurag Goel:** No, I think Kubernetes is great for a lot of reasons.

**Adam Stacoviak:** Yes, but that's because he's a DevOps engineer. He's not an application developer. Application developers don't really care that much about orchestration. They care about applications in production. So yeah, I appreciate that. I appreciate that.

**Anurag Goel:** And I think that's interesting that you bring up Kubernetes, because another way to think about Render is often Kubernetes, the good parts.

**Adam Stacoviak:** Okay.

**Anurag Goel:** Yeah, because you get the things that --

**Adam Stacoviak:** \[01:34:09.03\] The small book versus the big book.

**Anurag Goel:** Yeah, exactly. The stuff that you actually want from Kubernetes, without ever having to learn Kubernetes... But I think Kubernetes actually is a great piece of technology. Obviously, massive ecosystems, so much value that has been created... Also, just unbearable complexity. And there's all these vendors upon vendors upon vendors that -- I don't know if you've seen this, but the CNCF landscape chart... Yeah, it's massive, and it keeps growing every year.

**Adam Stacoviak:** And it will. I mean, that's just -- I mean, it's entropy. That's how it works for them. I mean, it makes sense to do so.

**Anurag Goel:** Yeah, it makes sense for a certain market. But actually, going back to your interview with Kurt, I'm glad that you left it in, and also that Kurt was open to talking about it... Because I like Kurt. Yeah, Kurt and I have chatted in the past. I like him. I think he's a great human being. And I think, again, we're serving different parts of sort of the same market, but I think it's -- again, like I say, it's big enough for... That's the good thing about the cloud, it's very big, so people can do their own thing and still be successful.

**Adam Stacoviak:** You know, knowing what I know about both of you as individuals, and then also Render and Fly, I would say you're very similar, but also very, very different. Very, very different. When I play with Render versus Fly -- you're solving similar problems for the same developer type, application developers, but you're doing them in uniquely different ways. And that's what the market needs, because where there's push, there's pull. And it's not a choice of Fly versus Render, or either/or. I think there's really just -- it comes down to the kind of developer you are. There's still fractures and fragments within the application developer sliver of the market. You're going to have some who care more deeply about unique things they can abstract away or up into the Fly platform from Linux, and all the different things they're doing there. I think there's so much room in the market. That's why I'll never -- we've never been a... We've tried to resist. I mean, because sometimes you do pick a favorite, but we've really tried to resist picking a favorite. And that's hard. It's really hard when you have that responsibility... Because when you kind of have a favorite, it's like "Well, you know what? I do have a favorite. Can I tell you my favorite?" Maybe I can, maybe I can't.

But we really try to keep an open mind, because similar to your ethos, our ethos is that we want to share what could be and should be given attention to to developers across the globe. So it's not like "Oh, this exists and nothing else exists, so use only that." It's more like "If you're a developer, whatever your challenge is, here's the menu", so to speak, "of what you can use to solve your problems." Because at the end of the day, in our Zulip chat room - which is not Slack anymore. We use Zulip now. Not Slack. I don't know if you know about Zulip.

**Anurag Goel:** Oh, I know the founder... Yeah.

**Adam Stacoviak:** Fantastic. I mean, I always -- I come to that conversation sometimes, I'm like "Do you know what Zulip is? Because if you don't, let me tell you. But if not, now you know." But in our Zulip, we're talking to individuals. We're talking to developers. And we have friends and loyal fans and listeners over many, many, many years. And we're here to serve them, to showcase what's cool, what's important, what's changing, what's not, and to give that option to them, and not pick favorites, really. That's where we're at with that.

**Anurag Goel:** \[01:37:59.00\] That's awesome.

**Adam Stacoviak:** I'm pretty excited to have you on the show, I'm pretty excited about this new raise for you... I'm excited for this legitimacy., that I don't think you necessarily needed... But obviously, a new label, series C, is going to change some people's minds, so to speak.

**Anurag Goel:** Yeah. I remember back in -- I think it was 2020... We emailed some folks who were on Heroku. And we were like "Hey, you should maybe consider Render. And one of them was like "Dude, I'm not going to switch over to this startup."

**Adam Stacoviak:** They were honest with you. Yeah.

**Anurag Goel:** Yeah, he was pretty honest with me, which I appreciated. And I think it's true. I wouldn't do it if I were in their position. I'd be like "I don't know if Render is going to be around. They're just like a series A company", or whatever. And back then we also didn't have all the features that we do... And that's always going to be true; we're always going to have fewer features today than we will two years from now, or even a year from now, or even a month from now. But I think back then we were missing more core things, and we've basically built out all the core stuff now, except S3. We'll go build that.

**Adam Stacoviak:** Coming up.

**Anurag Goel:** Yeah, coming up. I don't know if -- here's the other thing about figuring out what to build and what not to build. The way we think about product is that a no is temporary, and a yes is forever. And you can keep saying no to stuff, but as soon as you launch something, now you're stuck with it. As soon as you launch something that people are using, you're stuck with it.

**Adam Stacoviak:** Good point, yeah.

**Anurag Goel:** Yeah. You have to support it, you have to figure out how to deal with pricing, you have to make sure it works with the rest of your stack, your API surface area, your infrastructure as code, your whatever, your SDKs... You just have to keep doing that work over and over again as soon as you build something. And so we're very careful about what we take on. But I think one of the things that we're going to be able to do this year is take on more interesting stuff that I talked about, and even more than that. And that's what I'm excited about, just allowing people to use Render in new ways, and also continuing to help people scale.

Our managed Postgres has come a long way... So this was another thing that we were pretty far behind Heroku on, and now we're actually better than them, and they're switching over to Aurora, saying "Oh, we're not going to build our own Postgres anymore." It's just like "Alright... Well, that's your call."

And I think for us, it goes back to the experience, right? So if you try to build a wrapper over Aurora, then you're a wrapper over Aurora, and you have to deal with their vagaries. And Aurora is not even Postgres-Postgres. It's Postgres-compatible, but there will be stuff in your function code or your triggers that just won't work the same way. And all the documentation online is for Postgres. It's not necessarily for how Postgres on Aurora works.

And so I think the other thing that we've been lucky about is Heroku has made our job easier. It has helped drive people into our arms. And that was the other thing that happened when they killed their free tier back in 2022... That was when a lot of people first discovered Render. And it was not just that our free tier took off after that, it was also that our revenue took off after Heroku killed off their free tier... Which is just a \[unintelligible 01:41:55.11\] I'd say.

**Adam Stacoviak:** Right place, right time... I think it's prudent for you to showcase that your demeanor might be -- or your point might be "We're the better new Heroku."

**Anurag Goel:** \[01:42:11.13\] Well, but we're not. That's the other thing. Because I don't think about Render as being a better Heroku, or even a better AWS. I think when you think about a company as like a better X, then it constrains the possibilities of what's possible. Only back in the day, Stripe benefited from PayPal's mistakes.

**Adam Stacoviak:** For sure.

**Anurag Goel:** And from the mistakes of everyone else. So I think in some ways the story is similar. But I think with us, people come to us -- people who have used Heroku before and who we know are using Heroku look at us and they want details on how Render might be better. And so maybe that's what we were trying here. But surprisingly -- I was surprised by this. So when we ask people where they're moving from - and they can choose to not tell us, but if they do tell us, when we look at where people are moving from, more people move to Render from AWS than from Heroku. Yeah. And many more people move to us from AWS than from Heroku... Which to me says we're doing something right, because Render is not the next Heroku. Render is actually a replacement for people for both Heroku and AWS. And for a certain category of people, application engineers, like you were saying, like I was saying, who want to get started quickly, but also scale, and not have to worry about whether they need to spin up Kubernetes... Like, that's who Render is great for. And in the future, there will still be people who are doing DevOps. And there will still be people who are running stuff on bare metal, as there are today.

**Adam Stacoviak:** Preach, yeah.

**Anurag Goel:** In fact, there are people who've gone back to bare metal, as we all know...

**Adam Stacoviak:** We all know that, yeah. We didn't talk about that, but yes, for sure.

**Anurag Goel:** Exactly.

**Adam Stacoviak:** Anti-cloud.

**Anurag Goel:** Yeah, there's this whole thing. I mean, it's a bit -- I think DHH does a great job marketing it. It's not clear to me if the big move is happening, because the clouds keep making more money every quarter.

**Adam Stacoviak:** Yeah. Well, I think just what you said before, which is there's room for that, too.

**Anurag Goel:** Yeah, absolutely.

**Adam Stacoviak:** There's room for bare metal, and there's room for those who are like "You know what, it's not so much anti-cloud, it's more like you're a build versus buy. We could, so we should." Right? You were able to, you had the talent, you had the control, it benefited you to have the control, so you did. Same thing here. I think it's less -- but I think DHH's persona is countercultural. It is provocative, in a way; in a lot of ways. So I think it's natural for his opinions, because he holds his opinions very hard. He's hard on his opinions. And he's very articulate and clear, which I love about him. I mean, whether you like his opinions or not, that's a fact I love about him, which is no matter if I like his opinion or not, he will have clarity and conviction behind his opinion.

**Anurag Goel:** Yes, he's incredibly smart.

**Adam Stacoviak:** Right. And so I think just the same, there's room for those who are like "You know what? I can put this server rack in co-location, and we can do this, and all this different stuff..." And that might serve them and their purpose for then, and for whatever. But I think you're building for a different application developer that thrives in speed and autonomy, not in standing up servers and managing servers, whether it's easy or not.

**Anurag Goel:** Yeah. And we use -- behind the scenes, we use both AWS and GCP. And that doesn't mean that that is what we're always going to use. In fact, again, this year, that might change.

**Adam Stacoviak:** \[01:46:07.20\] Is that right? Some bare metal?

**Anurag Goel:** So we're not going to get rid of AWS or GCP, and we're not going to ask customers who are on AWS or GCP to move. In fact, we'll still continue to add people there. But I think now it's incumbent on us as a business to also look at lower cost compute, whether that's bare metal, or some dedicated hosting in Hetzner. I've heard a lot of scary stories about Hetzner servers going down, but a lot of people use them, and they're cheap, if nothing else.

So I think we need to explore our options, because it's not clear to me that AWS is the best long term partner for us. And I do think that AWS is a better partner than GCP, though. And we can talk about that some other time.

**Adam Stacoviak:** Yeah. Well, I think the way to get there is really "What do application developers want?"

**Anurag Goel:** Yes, that is the mantra.

**Adam Stacoviak:** Right? If they want a diversity of choice - well, then you're going to offer them a diversity of choice. If they want a diversity of choice because of cost - well, then you're going to offer a diversity of choice because of cost.

**Anurag Goel:** Exactly.

**Adam Stacoviak:** And if that doesn't make sense, then you won't do it. Because if your mission is to serve app developers, then you're going to figure out what the 80% of the 100% of the market that's an app developer wants... And Render is, I assume, attempting to solve for 80% of the challenge that app developers have, right? Not 100%, because that's not Pareto's principle, right? 80/20.

**Anurag Goel:** Yeah. And I think people on Render will always -- they should always be able to use specialized compute or specialized services on other cloud providers, right? And so we actually -- if you have some compute running on AWS, then Render can set a private link from Render to AWS, so you can always connect your services on AWS securely and privately. And a lot of our customers really appreciate that.

**Adam Stacoviak:** Yeah, for sure. Well, I'm excited for you. I'm excited that we've got you on the show, so we can check that box... I'm excited that potentially this could become the new -- if you want to learn about Anurag and what Render is doing in the next year or so, this could be a new link for you to share with folks.

**Anurag Goel:** Oh, for sure.

**Adam Stacoviak:** What else is left? What else can we share in terms of anything we haven't covered, that you want to?

**Anurag Goel:** No, I think this was pretty far-ranging. I enjoyed the conversation. There was a lot of switching between topics and things, but that's what a conversation is. It's not a straight line.

**Adam Stacoviak:** We'll get you back on. We'll make you a staple. Once a year, let's say. Something like that. Let's get you back on.

**Anurag Goel:** I would love that.

**Adam Stacoviak:** I'm a fan of what you've done, I'm a fan of innovating for developers, and I think if that's what you're doing, which I think you are, I'm happy you're doing that. And stoked.

**Anurag Goel:** Thank you.

**Adam Stacoviak:** Stoked for Render.

**Anurag Goel:** Thank you, Adam. I really appreciate it.

**Adam Stacoviak:** Alright, Anurag. Thank you.
