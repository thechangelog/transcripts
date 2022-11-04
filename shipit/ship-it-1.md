**Jerod Santo:** So we're here to introduce Ship It. I'm here, my name is Jerod. Adam, you're here...

**Adam Stacoviak:** What's up?!

**Jerod Santo:** Your name is Adam...

**Adam Stacoviak:** My name is Adam.

**Jerod Santo:** And Gerhard's here. And Gerhard, you have to be here, because this is your show.

**Gerhard Lazu:** Hey, everyone. And hey, Jerod and Adam. I've been looking forward to this for such a long time; I wanna say years. That's a bit of an exaggeration, but months is definitely accurate. I'm Gerhard Lazu, everybody, and I'm so thrilled to be here. It's been a long time coming.

**Adam Stacoviak:** It has been. I think you're accurate to say years... The anticipation has been years, but I think the practical feats stepping forward to produce this is more like months. Anytime you launch a new show, there's a lot of fun and excitement, and it's like "What's the show gonna be? Who's gonna listen to this show? Who will be on the show? Where will this take us?" And that's, I think, what I love most about this business, because we've launched several shows over the years; some launches better than others, but nonetheless, the shows get produced, they're awesome, great communities around them, great people involved... But it's just such an amount of energy to launch something, so... I guess it makes sense to call the show Ship It, right?

**Gerhard Lazu:** It really does. It really does, because I think it's the embodiment of what we do every day, maybe in different forms. Some of us write code, some of us write documentation, or tweets, or books, or whatever it may be. Or even videos. In our case, right now, it's podcasts. And you have to ship whatever you create; how else do you get it out there? It's essential. And some people would say that shipping, or acting, is the first step. You have to do it. And that's it. And then you figure out "Does it work? What do people think? How can I improve it?" And on and on it goes. It's this essential first step, shipping it.

**Jerod Santo:** So we've been shipping something like Ship It for the last few years, because you've been helping us ship Changelog.com into production for 4-5 years now... Give a little bit of a back-story on our relationship, how we came to do this annual infrastructure show where you're helping us ship Changelog to production, and how that has sort of evolved and turned into what is now a much more frequent podcast of its own life.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Give us the back-story.

**Gerhard Lazu:** Yeah, I love that question, I love that beginning, because I see so many similarities... First of all, Jerod sent me an email and said "Hey, Gerhard, we have this app that we want to ship/deploy. Can you help us?" And I said "Hm... Jerod, shipping it is just like such a tiny part of it. There's like all these 20 questions that you have to answer first, before I can even start considering what it would take to ship it..." Because you have tests, you have dependencies, you have where, how, how often, how do you code, what is your local setup, what is the availability that you care about? What about latency?" Maybe not all of these questions were there, but many were, and many I already forgot. And that's how it all began. It began with an email. I mean, how old school are we? Not a tweet, not anything else; just an email.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** And that was a good conversation, so we started --

**Jerod Santo:** It was a long list of questions, you're definitely not exaggerating. I remember receiving the questions back and thinking "Do I really wanna answer all of these? \[laughs\] Or should I just figure it out myself."

**Gerhard Lazu:** \[03:49\] No, it is a test, because you're starting on a journey. Are you ready? Where about are you? And if you're serious about it, you will need to think about those things. And it's better to think about these things upfront and be honest. "I care about this, I don't care about that", so we know where we stand. And if it's a match, let's go for it. And if not, then - well, you can git push and let maybe Heroku handle it... And we know it's so much more complicated than that. In the days that was like the craze, but we tried to do something else. And I think this is the seed of Ship It. We try to improve publicly, share publicly, and always recognize the mistakes, but also share the wins.

And then I think in year two or three we thought "Are we working with our partners as well as we could?" And then we started embracing our Linode relationship, our Fastly relationship... Who else was there, Adam? I think you were in the thick of it...

**Adam Stacoviak:** Rollbar was there...

**Gerhard Lazu:** Rollbar was there, that's right. I can't remember any other names... Anyway, there were a few names like this; GitHub maybe? No, CircleCI.

**Adam Stacoviak:** CircleCI, yeah.

**Gerhard Lazu:** Yeah. And then we said "Well, how about we start using these partners that we promote, just to see how well they actually work for real? How well do they work for us? And if we had to depend on them, how would that look like?" And I think that led to a lot of things such as feedback. So we started giving them feedback, "Hey, do you know that this thing is not working the way it should? And by the way, this is our suggestion." And many things -- you know, people are busy. Busy shipping. Maybe not paying as much attention to certain feedback. But others were very receptive, and many things improved because of that.

I still have very fond memories when we started using Linode Kubernetes Engine, the beta, when it opened up... And it just like opened a whole new chapter with Linode. And it was great. That was a great conversation, and many good conversations. So from there, we are here. We have shipped those improvements, we blogged about them, we talked about them, so how about we do it more often? People are asking about it, people like it, so why not?

**Adam Stacoviak:** That's the beauty of it, too... That's why I say you aren't over-exaggerating by saying years, because I think I almost longed for that yearly/annual show we did, because that was a lot of fun, to talk about what we're doing and to explore the different options with for example Kubernetes, or when we were using Ansible and Docker and discovering how that can work for us... And just different improvements and how that changed our infrastructure, how that changed our dev experience, whether it's onboarding because our app is open source, how they can spin up the environment and make changes or improve the application, or maybe step in on a feature... Or just fix a bug. All these different things. And then how that might improve uptime, or availability of the application, or if things go down, or things like that...

All these things have been fun to explore ourselves, so why not just produce a show around that? And one idea was "Let's just talk about ourselves", but that wasn't enough; talking about how other teams ship their applications... Like, how does GitHub ship GitHub, for example? How does Kubernetes ship Kubernetes? How do they do that? It's all these questions like that that we can then dive deeper into, and I'm sure it's just a multi-layered, super-layered onion there to just unravel and get lost in, but that's the fun part of it.

So this show here, today, the very first episode on the feed, is the invitation to anyone out there, shippers, to join us on that adventure, to invest, to get involved, to listen, to encourage, to share, people we should talk to... All those fun things. Hop into Slack and be a part of the community, and just have fun for the next (I don't know) hundred, two hundred, four hundred, thousand episodes... We never know where we're gonna go with this, but I know it's gonna be a lot of fun.

**Gerhard Lazu:** Yeah, I don't think you can see a video. There's no video feed with this show, but we will have a screenshot which shows my mic, I have Ship It, and I have four zeroes. So I'm thinking we'll have 10,000 shows. That's my estimate.

**Jerod Santo:** \[08:07\] There you go.

**Gerhard Lazu:** Once per week, you work out how many years of discussions like these we have ahead of us. I'm really excited about that. And to Adam's point, I really like the people element. The Cloud Native Foundation (CNCF) was amazing. The Linux Foundation, some of the conversations we've been having... KubeCons... It's about the people, it's about the community. That is something that many of us forget, because we're just like down in the code, shipping stuff. Well, guess what - that is not even 1%. It's all the conversations that you're not having, or maybe having, all the ideas that you're getting, all the interactions that you're allowing to happen, because guess what - you've taken your headphones down, you've put your headphones down, you've looked around, and you went in and you had the conversation. That's more difficult, and I think people appreciated more how valuable it was. Don't get me wrong, I love working from my house, but how amazing is it to be at a conference in person, to have those hallway track conversations. I think we all miss them.

So while the past years were -- I wouldn't say one-directional, but we were mostly meeting less frequently, and mostly sharing stuff, but I don't think we were discussing as much as we could, and I don't think we were looking around, inviting others to join us and tell us their story. And this show, I hope, will change all that.

**Jerod Santo:** Well, I hate to break it to you, Gerhard, but you've made a classic blunder... The old Y2K mistake. When you hit episode 10,001, your whole system is gonna break down, my friend.

**Gerhard Lazu:** That's okay, I'm sure we will have something in place by then. \[laughter\] We'll improve it sufficiently that that won't matter.

**Jerod Santo:** We'll have to hire some very expensive consultants to come in and help us fix this numbering system.

**Gerhard Lazu:** Oh, wow... There's actually an episode that we recorded about a similar joke; I think it's episode three or four... It's one of the first that will ship, so listen to that, about consultants and simple solutions to complex problems. It's a great one.

**Adam Stacoviak:** Yeah. For context, Gerhard has four zeroes on his microphone, so he's anticipating this is episode 0,000 in anticipation of 10,000 or more.

**Gerhard Lazu:** How many weeks is that, by the way?

**Jerod Santo:** 9,999...

**Gerhard Lazu:** 10,000... That's 192 years. I think we're good... \[laughter\]

**Adam Stacoviak:** Yeah. Well, that's assuming the cadence... We could increase the cadence a bit. But yeah.

**Jerod Santo:** Yeah, what if we go daily?

**Gerhard Lazu:** Woooah... Okay, now you're totally crazy, Jerod... \[laughter\] It's too early for that.

**Adam Stacoviak:** Hang on now, hang on now...

**Jerod Santo:** Alright. Slow down. Well, you've put some work into this. We have some episodes that have been recorded, so this is your introduction episode. Everyone here is welcome. If you find this in your feed, welcome to Ship It. We are happy to have you along with us. There are some episodes also in the feed just getting started... Maybe Gerhard give an idea of what to expect, maybe even just highlight a couple of the shows you've recorded, and then what Ship It is gonna feel like as you move forward, you think... With the disclaimer that it's experimental, we're having fun; we don't know exactly where a podcast ends up, but this is where we're starting.

**Gerhard Lazu:** So the way I'm thinking about this... In the beginning I'm thinking of hitting some of the bigger topics... For example the topic of observability. We know that tends to be very contentious. The other one is Kubernetes. Why is it Kubernetes and why not a PaaS? I think that's a great question, and there's so many valid answers... And I think people need to be aware of all these options; I think that's very important. Because there's no one solution that fits all.

I'm very passionate about continuous delivery, and one of the first episodes, one of the early episodes will be about that, about the concept of continuous delivery, with one of the people that actually made that term popular. I don't wanna spoil it; it's one of the two. And it's coming, I think, in episode five or six. We'll see, depending on what else we have going on.

\[12:07\] I'm very passionate also about the whole agile thing, how we work, how we communicate... And I can mention this because it's already recorded, already in the pipeline... There's an episode coming with Ben Ford from Commando Development. He actually is a former Royal Marine Commando. This is like your Navy SEAL in the U.S. He learned so many things in those five years as a commando, and then he went to become a software engineer, and he refined some of those learnings... And the one thing that really stood out is that OODA loop, which by the way, the one that you know is wrong; the one that I knew was wrong. Mission and command... Sorry, excuse me. Mission and command -- what was the other one? Oh, situational awareness.

So all these three things, if you think about them - for example, your CI/CD system. We use a CI/CD system because it helps us approach coding and shipping in a certain way - continuous integration, continuous delivery. So what are the equivalents for the relationships from a business perspective, the interactions from a business perspective, and at an org perspective? And these are some principles that may be applied.

You see, it goes so much more than just coding, because you don't do that in a vacuum. So what are the other things that need to happen, and what are the interactions that need to happen, the healthy ones - and the unhealthy ones, because they're important to talk about those as well - so that you feel good about your work. And yes, it is about you, because there are so many perspectives here, and I think if we do build this community of people that share their stories and share their improvements, I think we'll all be better for it.

I think the CNCF is a great example of how to do it. I don't think we're trying to even compete with CNCF; we're trying to be inspired and create our own version of that magic that they were able to do. So I'm very excited about those things.

**Jerod Santo:** It sounds good to me... What about you, Adam?

**Adam Stacoviak:** I think a podcast is a great medium, obviously, but I think a podcast where it's a place where if you care about not just git push or shipping an application to production, but all the things in between there; if you're looking for something to fill that vacuum, then that's what we aspire for this show to be, is that this is a place you can call home if you care about topics around delivering quality software to users in the world, and that's what this show will be. We'll cover all sorts of different facets. It's not just simply about the code, or in particular just about the tech. It might be about the people, and the interactions, it might be more about different communities...

But a lot of different horizontal and vertical ways to move around the landscape, but just the idea of putting something out there, a piece of technology out there - from the team, to the software itself, to keeping it stable, keeping it up, keeping it reliable... All those different things are so deeply available for us to talk about, and that's my hope, is that this show is a place where if you're looking for that kind of conversation, you can come here weekly and rely upon that to be there for you. And we have worked so hard over the years to improve our relationships, our audio quality, all the different things involved in producing a podcast; quality transcripts, a fast, reliable website, obviously... And different things involved with that. Fastly, making sure that our mp3's around the globe are available wherever you're at, super-fast... And so from just an infrastructure standpoint on podcasts, we are desiring to produce a high-quality podcast, and that also begins with Gerhard, because Gerhard is a world-class SRE who's helped us for many years and we've just kind of been keeping him to ourselves, and now we're releasing Gerhard to the world to show everybody his magic, and that's what I hope this show really embodies - his lens, his look on the world, and then involving everybody else in the game of shipping.

**Jerod Santo:** \[16:13\] Yeah. Gerhard, take a couple of minutes and just tell everybody who the heck is this guy... Because we know you very well, our regular listeners, but many people are gonna be coming to Ship It - they may not even know what Changelog Media is, or Changelog.com, and they're like "Who's Gerhard Lazu, and why should I listen to him do a podcast about shipping stuff?" So give us just a little bit of your history.

**Gerhard Lazu:** Okay. I'm going to share something which I haven't shared before... I was born in Romania. That's Eastern Europe. And as I was growing up, my mother - she was a professional broadcaster. The Western part of Romania, she was part of the national TV and radio; it was a national thing, like BBC, the equivalent of the BBC... And as I was growing up, I used to spend a lot of time around the broadcasting station, as you do. Bring your kid to work.

I loved those buttons, I loved those monitors. And in a few years, I started recording things for fun. And she liked my voice. She said "Hey, do you wanna help me with my show?" This was 25 years ago, just to give you an idea. And it worked really well. She loved it. She was like "I wish you didn't have school. I wish we could do this." And I loved it, too. It was great.

Fast-forward maybe five years, and I was getting into tech. I started learning HTML from a book. I didn't have a computer. So I was writing HTML... This was HTML 4.1. It was like the bleeding edge, and CSS (whatever it was at the time) 0.9 maybe. I can't remember. And I was writing it in a notebook. And I was like "When I get my computer, I will transcribe this and it will be amazing." That was my beginning.

**Jerod Santo:** Nice.

**Gerhard Lazu:** Fast-forward five years and I was dabbling with PHP, I was looking at Zend... If you remember the Zend framework, that was the hot rave. I don't think Facebook existed at the time... PHP was not that popular. I think Perl -- there was this big debate whether "Is it gonna be PHP or Perl?" jQuery didn't exist. So a lot of Ajax was handwritten, and it was like this bleeding-edge thing... That was interesting.

So I went from a frontend developer, if you wish, to a web hosting provider, because everybody needed to host a website; they didn't know how, so what is this thing Apache? That's how it started.

Before I knew it, I dropped Apache. I was looking at NGINX, because that was the hotness at the time... And I found out about this thing Ruby on Rails. What is this Ruby? Are you telling me I can write this app ten times quicker? Okay, it's a Hello app, but so what?

I had very big, thick books of PHP and MySQL at the time. I dropped them, and I said "No, Ruby is the thing." And I think I stuck with Ruby for maybe about ten years, give or take... And that love for infrastructure was always there. So even though I was like a frontend developer/backend developer/full-stack developer, Puppet, Chef, at the time (Ansible didn't exist), they really caught my attention. "CFEngine? What is this CFEngine thing?"

If you're paying attention, I was always very curious. I was always like "What is this next thing? What is this next thing? What is AJAX?" And that curiosity and learning on the job served me really, really well. So I always had this passion for infrastructure, always had this passion for assembling things, and one of the tools that I wrote... Bash -- oh, don't get me started. Self-proclaimed king of Bash? That's me. \[laughter\] FizzBuzz TDD in Bash? That's me. I even have a repo, [check it out](https://github.com/gerhard/bash); there's so much stuff in the commits.

\[20:03\] Oh, git. How do you think I'm @Gerhard on GitHub? I knew about GitHub before people knew about Git. That's how it started - always curious, always discovering. That's how I got Gerhard on GitHub. I'm very sad I didn't pay attention to Twitter. I thought it was just gonna be a fad at the time, so I took my time. I didn't make the same mistake with Instagram. So if you're listening to this and you know the person who's @gerhard on Twitter, please introduce us, okay? Years from now, whenever it's gonna happen; I like playing the long game.

Coming back to Changelog, I wrote this tool in Bash for deploying Ruby websites. Not just Ruby websites - I was working at a tech startup; this was 2012, and we were using Capistrano and Chef and Puppet and a bunch of things... It was just a mess to deploy things, and I thought "No, this is madness. It can't be this complicated. Can I just build a really simple thing that SSH-es into service and deploys things?" And that was Deliver. Ship It, Deliver - it was right there. And there was a fork called eDeliver, which deployed Erlang apps into prod. And Jerod picked up on that, and he saw my name, and he was like "Hm, I think I know him." I think it was the Ruby background, right Jerod? The Rails background?

**Jerod Santo:** So I think you had written something for Changelog years before, back when we were using a GitHub-based writing flow, where you could write into a repo and we give you feedback right there on a pull request, and then we would publish it from there. And you had written something about something, I thought it was about Ansible maybe, but who knows what it was about. We can go all the way back and we could find it in our CMS.

So I had interacted with you very briefly via that, because you had written a piece for us, and then when I saw your name again, I said "I know that guy. He wrote something for us. And here he is again." The synapses fired and I thought "I bet he's better at this than I am, so I'm gonna just go ahead and email him."

**Gerhard Lazu:** That was a great start and a great conversation. I still have fond memories of that. And things happened, right? I think we were a natural fit. And what I really enjoyed is that we were always honest about what we were trying to achieve.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** I think we had that doggedness about "We will get this to work. It can't be that complicated. Come on now. I don't have to use Chef..." and there was like the Chef server or whatever it was... Can I do this easier? And Ansible was that easier thing at the time. I think that's where we started. It was very early days.

I knew Linode, I knew DigitalOcean... At that point I will have been with all the hosting providers, because it was a thing which I enjoyed. I just wanted to see who has the best service out there at the time, at the best price, and how can I distribute these apps across the world so that if one fails, not everything will fail. AWS was not invented at the time. It wasn't a thing. This precedes all of that.

**Jerod Santo:** Yes.

**Gerhard Lazu:** So we had fun, and we kept improving things, and in parallel -- now, you have to realize, this thing for me was happening for fun. In my free time. We began this in my free time. And that was like a job, right? Because I really enjoy coding, I really enjoy deploying, I really enjoy interacting with people around those subjects. And Changelog grew to become so much more. And I would say that Changelog now is -- I almost identify myself with it. I know that's saying a lot, and maybe it's like -- I won't say it's an over-promise, but maybe like I'm bragging, it may sound like that... But I do feel like part of Changelog in my heart, because I've been with it for so many years and I've seen it improve, and I've been there through many changes, and I really enjoyed it. And guess what - I changed jobs, but I'm still at Changelog.

**Adam Stacoviak:** Nice.

**Gerhard Lazu:** That hasn't changed.

**Jerod Santo:** That's right.

**Gerhard Lazu:** \[23:53\] And I hope that's never gonna change. That's my hope and that's my wish. So while this thing was happening with Changelog, I was going through infrastructure stuff, I was going to Erlang, I was going to Go, I spent quite a bit of time with Go, I was an XP, I was a consultant for consultants... I went through many, many things. Think about all the big companies - I either worked with someone from those companies, I was interviewed... Well, wanted to be interviewed many times, but the big company never appealed to me. It was just like, it was just too big. Change is too difficult; things are moving so slowly... And things are just about to change now, I think, but that's a different story for another day.

The point is that if you wanna know more about me, guess what - there's Gerhard.io. Check it out. All my talks, all my videos, all my history is there, if you care about Gerhard the person.

And I think the last thing which I'm going to share is that I never went to university, because I wanted to learn at my own pace the things that really interested me, and that worked so well that I just didn't have time. There were more important things. And I became, I think, pretty successful - and this is ignoring Changelog, which I think is a big personal success. I'm very fond of it. And we are today here, 25 years later, where I have a studio around me, an amazing microphone, just about ready to start recording again... And maybe bringing two threads together - my love for tech, and my history in recording and broadcasting. The beginning of something great, I hope.

**Adam Stacoviak:** I think so, for sure. I love that you identify back to Changelog; that really makes me happy, that you have fond memories too, because obviously, I've been here for a long time... But the fun part for me has been the people involved with us; over the years it hasn't been static, it's been very dynamic. Jerod has come on, and you've come around... And I went back to our Git repo - the draft repo - and found that the why and how of Ansible and Docker was published on February 21st, 2014.

**Jerod Santo:** There it is.

**Adam Stacoviak:** And that was the last update to the repository too, so that meant that whatever was published is the final version of it; there's been no other changes. So that's really interesting to me... I didn't know that's how we began, Jerod. I knew that you knew of some software he had written out there to deploy an application, but I just forgot about those connected dots that he had written something, and that's how it sparked your reminder of him and whatnot. That was just crazy.

And then two years later we deployed the CMS - I guess that's what we call it, a CMS; internally we describe it as a CMS, but it's a Phoenix/Elixir application. Your roots, Jerod, are in Ruby, so are mine, so even that's a tangent we could take potentially... But writing in Elixir. But you were very aware of how to deploy a Ruby application, but not so much how to deploy an Elixir application.

**Jerod Santo:** Right.

**Adam Stacoviak:** That's part of the journey too with Gerhard, was figuring that out. Shipping it. How to ship it.

**Jerod Santo:** Right. And part of the fun of it was Gerhard is very thorough, text-oriented, curious... And I'm somewhat the opposite, in many ways, and so our relationship -- I just wanted to get the thing out there; I was kind of pragmatic, you know... So he had asked me all these questions, "Why? Why? Why?" and I was always like "I don't really know why I'm doing it this way." He was drilling down, and I'd always be like "I don't care how it works, man. Let's go."

So we just had that fun kind of back and forth from the very beginning, and learned a lot from each other. I've learned a lot from you over the years. I am gonna continue to learn a lot from you just by listening to Ship It, more so than I ever have, because our interactions have always been sporadic. We'd have like a sprint, and then we'd have a year off, or we'd talk to each other a lot, and then we wouldn't for a while... So I definitely, as well as you, identify you with Changelog, and I'm excited to have you to be a staple now. Week in, week out, part of what we're doing, and shipping awesome podcasts to people who are interested in this stuff... Because you really dive into the details, you explain things well, and you keep it fun along the way, so you got me excited for the show, for sure.

**Gerhard Lazu:** \[28:20\] Thank you, Jerod. I really appreciate that. And I do know that the fact that we are the way we are, and we're honest about who we are, we make such a great team... And Adam is like this third element which completes us really well. So we're like a trio which works very, very well, I have to say. And I don't think I would be here if that was not the case. I'm diligent, I choose my teams wisely, so I'm really fond that we've found one another and we are able to be here today. And I'm so looking forward to what we'll build next, because this is just the beginning. I'm sure of it.

**Adam Stacoviak:** You know, the one thing I think is interesting from a listener perspective is that the thing you should hear is that we're super-committed to this show. I think when you pick up a podcast for the first time, you're like "I'm gonna listen to the first episode" or wherever you begin at; if this is your first episode, you should think "Are they committed to this show? Are they committed to this mission?" And that's what I love that we bring to the table - when we do something, we kind of live by "Do it right." If you're gonna do something, do it right. And that's what I think as a listener you should take to heart, is that we're gonna do our best to deliver the best show, show up every single week; we have a commitment.

It just sucks when you listen to a podcast and they fall off, or they fade, or whatever happens. There's nothing wrong with that, it happens, but we are super-committed to this show, super in love with the topic, and we obviously have kindred spirits with Gerhard, so... Great mix.

**Gerhard Lazu:** Yeah. And some of the guests which we'll have on the show - we have been talking with them on and off for many years. So this really has been in the making for a long, long time now, and it's finally just coming all together now, but small threads have been ongoing for years.

I was just telling Adam before we actually started -- well, we were chatting before you started recording, and we were saying that I had certain conversations in January 2020, which I didn't have time to continue. I didn't have the headspace, and I didn't have the medium to make that an interesting conversation. And now it's finally happening.

So the person that knows who I'm talking about - I don't wanna give her name away just yet, because I think she's a very special guest, at least in my mind, and I would like you to discover that... But I'll mention it when we record. Because stuff like that - and that's just one example - has been going for a long time, and I know that many of you are looking to have these types of conversations, to have these types of maybe different perspectives, diverse perspectives, because I think we are a lot more accepting and understanding than you would think. I'm not so sure about humble, I'm still working on that, but... \[laughter\]

**Jerod Santo:** Some honesty...

**Gerhard Lazu:** ...the point is we do wanna make the best thing there is, and we are trying very hard to get amazing hosts, that fit the topics, and I was trying to explain what topics we're going to start with before diving in the weeds. We're trying to look for things that apply to everyone, but in a way that's fundamental. It's not that we're trying to cover topics which are generic. We're trying to cover topics which are meaningful and impactful to most of you.

**Jerod Santo:** So a couple of touchpoints... Of course, we do like to hear directly from those who are listening to the show. So in terms of episodes you would like to hear on the pod, there's changelog.com/request. Request an episode; there's a dropdown there, you can select Ship It, and that goes right into our admin, so that Gerhard can see all the episode requests. So we do desire those...

\[32:00\] We also have the free community, which is changelog.com/community, totally free to sign up. There's a Slack, there's a Ship It channel in our Slack, a good place just to have watercooler conversations about -- it could be about the show, it could be about related topics on infrastructure, or whatever is on your mind, or specific things that are going on in that space.

We also are on Twitter, we have @changelog, we have @gerhardlazu if you wanna go directly at Gerhard there, we have @shipitfm... Adam, did we get that one locked in? I think we have @shipitfm.

**Adam Stacoviak:** That's true.

**Jerod Santo:** Okay, we've got that... So those are all good touchpoints. And you can always just email directly to gerhard@changelog.com and have a conversation. I'm sure you will read all those emails, right Gerhard?

**Gerhard Lazu:** I will. All of them. \[laughter\] And reply as soon as I can, promise. If you're not getting a reply, I'm just too busy with other things, but I will pick it up as soon as I possibly can. There's all these ways that people can contact us, there's all these shows to be produced, and all these conferences to go to and events to attend, which I'm very excited about... So yeah.

**Jerod Santo:** Lots of stuff. Anything else that's vital we haven't said yet about Ship It? Otherwise they can just hit next and go to the next podcast and hear the actual -- the show-show.

**Gerhard Lazu:** If there's a topic that you're passionate about, something that you really wanna get off your chest, we're listening. And if others like it too, we should make a podcast out of it. If you know someone that would benefit from having that discussion. Maybe someone who needs convincing - even though I don't do that; but I can make an exception - I'm really looking forward to those types of conversations, too. Panels, if you have a group of people, if you can think of a group of people that you want to get together, we'd very much like to have those types of conversations, too.

And yeah, I think we should do this again, not just like a one-off, but maybe a check-in every six months? I'm keen on those, too. The progression. What have learned, what is better? Almost like a retrospective for the show.

**Jerod Santo:** Right.

**Gerhard Lazu:** I think that would be a good idea.

**Adam Stacoviak:** I think to give an example of what you're talking about there is some conversation in our Slack discussing the complexity of Kubernetes, the desire of a PaaS-like experience, or an - do you call it an IaaS? I don't know how you say infrastructure-as-a-service, like PaaS... But there's a discssion on this. I think we should do a show called "K8s vs. Paas vs IaaS." That would be cool. That became this contentious back-and-forth in Slack, and that's a great example of like on-your-heart, and an argument. Let's do a show, to not so much end an argument, but at least to provide some contextual, deep conversation from industry professionals that are solving these problems on the daily, to sort of talk about "Does it really take a million dollars to run Kubernetes?" Well, not really, but you should probably have a million-dollar problem; at least that's what Ben Johnson said on that podcast when we talked to him about Litestream. And that's just his opinion. So is that opinion wrong? Maybe, maybe not. Is a platform-as-a-service or infrastructure-as-a-service better? I don't know. It kind of depends on the questions you ask, Gerhard, like you did to Jerod, and how you answered them. It may, or it may not be. But this podcast is gonna be a great place for those kind of conversations.

**Gerhard Lazu:** The truth is that everything is very contextual, it changes all the time... There's no best practices really anymore. It's something that we tell ourselves to feel good about what we do. But to be honest, most of us just wing it. So then what makes sense? Listen to your instinct, listen to your experience, listen to maybe what the team is telling you. It's that consistency element. What makes sense. And I think a lot of us - it's difficult to go back to what makes sense to you, in your situation. And by the way, everybody's right, and then everybody's wrong at the same time, so there's that as well.

**Jerod Santo:** \[35:59\] Well, that's what I think is cool about this particular show with the internal focus in terms of we do have a production online application that we have been shipping, that we'll continue to be shipping, that we have no problem experimenting on and with, and so we don't have to speak in the generics, we can speak in the particulars; we can have actual code going into it, an actual codebase that goes out to the actual world, that hosts the actual podcast that the podcast is talking about. So it's kind of nice and circular in that way.

So it's not just gonna be theoretical and general discussions and debates, it's gonna be actual results-oriented episodes, which is very cool. And maybe -- I don't know anybody else who's doing that.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Alright... If I'm listening right now, I'm thinking "Alright, I'm skipping the rest of this. I'm hitting Next. I'm gonna check out that first episode." So maybe we should just call it.

**Gerhard Lazu:** I would like to say something else...

**Jerod Santo:** Go ahead.

**Gerhard Lazu:** It's okay to edit this out, this is not a problem, so we can stop here, but I have to say this, because I wanna see your faces... So to the point that you've made, we want to upgrade to Erlang 24 in production, on Friday evening. With Alex, this Friday. So we're preparing tomorrow, and contrary to the industry advice, best practices, whatever... I don't know how to call those points, but basically don't deploy or don't ship on a Friday evening - that's exactly what we're going to do. Because we're confident in what we have. We really own it, front back and center. We're not afraid of doing that, because if something is wrong, we will learn. We have recorded a show with Alex Koutmos, I think that's episode three, where we talk about PromEx and a bunch of things... And we would like to livestream on Friday for one hour the thing that we're going to do. We're just going to update Changelog.com live in production, observe it with a Grafana Cloud, with PromEx... What difference does the latest version of Erlang - which by the way, shipped a few weeks ago; maybe it's a month now - have on Changelog.com performance?

And the fact that we can do this live with our own show, with our own infrastructure, with our own podcasts - I mean, we're literally putting our money where our mouth is... Is that how you say it?

**Adam Stacoviak:** Yes, your money where your mouth is.

**Gerhard Lazu:** English is my third language, so excuse my English. Okay. So that's what we're going to do. Now, who else does that? I don't know. But I like to be part of it; bring your popcorn, by the way, or drink, or gin and tonic, whatever you're having, it's okay. Join us and see what happens.

**Jerod Santo:** Well, we will put a link in the show notes to that. It'll be Friday--

**Gerhard Lazu:** So it'll be on the 28th.

**Jerod Santo:** Friday the 28th. We'll put a link in the show notes to the YouTube event. It'll be a YouTube stream, and we'll schedule it so that it's in there. So if you want to be a part of that...

Unfortunately, I have bowling league that night, so -- I just made that up; I don't have a bowling league... But I'm afraid of what's gonna happen, so I probably won't --

**Gerhard Lazu:** You won't be paged, don't worry.

**Jerod Santo:** Don't page me. \[laughter\]

**Gerhard Lazu:** We're all adults, it's okay.

**Jerod Santo:** Page Adam. Page Adam.

**Gerhard Lazu:** \[laughs\]

**Jerod Santo:** Fun! Yeah, there you go... I mean, who else does crazy things like this? And we're just getting started, so... Stay tuned for that.

**Adam Stacoviak:** Alright. Let's ship this. Click Next, listen to more episodes. We appreciate you listening.
