**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about infrastructure. We're joined by some very special guests and hosts... Janna B. Dogan. Hello, Jaana.

**Jaana Dogan:** Hey! How are you?

**Mat Ryer:** Welcome back! How's it going?

**Jaana Dogan:** Good.

**Mat Ryer:** We're also joined by Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello, Mat.

**Mat Ryer:** How are you, mate? How's your week going so far?

**Johnny Boursiquot:** Well, just before coming on this call I was just handling an incident... So yeah, this is actually a good time, compared to what I've just been doing...

**Mat Ryer:** Oh...

**Johnny Boursiquot:** Yeah, yeah.

**Mat Ryer:** Well, hopefully they're always good, aren't they?

**Johnny Boursiquot:** Yes, yes... \[laughter\]

**Mat Ryer:** Fair enough.

**Johnny Boursiquot:** Yeah, it's always good hanging out with you all.

**Mat Ryer:** And we have a very special guest as well, joining us from London, actually... It's Shubheksha Jalan. Hello, Shubheksha.

**Shubheksha Jalan:** Hello! It's really nice to be here.

**Mat Ryer:** Thank you. It's good to have you. Yeah, so let's talk about infra then... Because this is such a big space, and I must admit, this is the first time I really feel out of my depth on this show... Because this isn't a world I'm very familiar with at all, so I'm very excited to learn as much as I can here. So forgive any silly questions... But yeah, let's get started. First of all, what do we mean? What is infra? What are we talking about here?

**Shubheksha Jalan:** I think a huge issue is that we don't have standardized definitions for any of this as an industry. Everyone has their own. But when I say "infrastructure", what I mean by it is like "How do you run your software? Where does your software run, and what does it take to actually run it?" So not just writing the feature, shipping the code, but how it actually works and becomes useful.

**Jaana Dogan:** That's such an interesting definition... I was just having a conversation with my partner the other day; they are slightly a smaller company, and their infra team is mainly people who are actually configuring things. They are provisioning resources, they are configuring things, they are giving the rest of the organization basically resources, and helping them manage.

For me, working for a core infrastructure team at a large company to me is like building the core infrastructure from ground up; building storage systems, building databases, building network infrastructure. For each domain, and I think for each different size and area the company is operating there's always a different definition... And it was very interesting to hear your own definition too, which I just realize that it doesn't necessarily translate to me, or some of the other companies that I've been asking the question of what does infrastructure mean to them.

**Shubheksha Jalan:** Yeah.

**Johnny Boursiquot:** For those of us who have been around for a while, infra -- we've had to evolve our default interpretation of what infra means... So it used to be that when you said "infra", I would think you have some sort of data center somewhere, where you've got some space allocated for your rack, and you're gonna get some customized hardware in from HP, or Dell, and something like that, and you're gonna mount those things, your one or two U's, or whatever it is, and you're actually running wires and doing all these things. That used to be what infra used to mean to me.

Then we go into the cloud age, where infra is like "Well, infrastructure as a service, so you no longer are handling your hardware anymore. We're gonna do that for you." It's all virtualized. So now you're still trying to figure out how to get all these things to network together and whatnot, but not for a developer, for a software engineer, for an operations, SRE, or somebody that far up the stack; infra is gonna mean something completely different to them as well. So now it's all about configuration of what you've got. You're not worried about the networking as much, you're not worried about the storage as much... Unless you've got some very specialized use cases and needs, that way you know to any degree what's going on under the hood. All of that stuff has been abstracted from you... So infra means different things to different people, and depending on the time scale you're looking at, it's gonna mean different things to different people.

**Shubheksha Jalan:** Yeah, I think that captures it really well. This sort of issue I've been running into as well, because it's so hard to talk about these things. You have to first define it, and bring people on the same page, and then start the conversation. Otherwise, it just goes in completely different directions, because everyone has their own interpretation.

**Mat Ryer:** Is that because everyone's needs are so different then, that things look differently in the way that they have to handle these problems are just totally different?

**Shubheksha Jalan:** I guess yeah, that's definitely part of it. And probably another part of it is that we just never came together as an industry to actually assign meaningful definitions to it... So everyone sort of ran away with whatever they came up with.

**Mat Ryer:** It's funny that that happens, isn't it? But I guess in a way a lot of the world has changed... As you were saying, Johnny, the world is kind of different. So in a way, I suppose, that does make sense... But yeah, I liked your definition though, because it's about your code has to run somewhere; and that's the thing about -- sometimes as developers, as long as our unit tests pass, and I've probably been guilty of this in the past... Don't write in, anybody that I've worked with in the past. \[laughter\] We don't need confirmation about this... So as long as the unit tests pass, that's it; it gets thrown over the wall and it's someone else's problem. But a few times that's come back to bite me, where decisions I've made at dev time have no played well once it gets into the wild, where it's really gonna be running... So how important is the mechanical sympathy, if you like, of where your code is really gonna run? How important is that to devs? Or is it okay that they can just -- as long as it's working for them and the tests pass on their machine, they just push the code and they can go home.

**Shubheksha Jalan:** I think this is going to be a very divisive topic, because everyone has very strong opinions about it... But for me personally, I do think that it is important. As developers building just features, you should be aware how your code is running, and where your code is running... Not all of the details of it, because that's not really possible, depending on the size of the organization, but some basic-level details of it definitely. Because it just helps you write better code.

**Mat Ryer:** Yeah, that's it. It does, doesn't it?

**Shubheksha Jalan:** Yeah.

**Johnny Boursiquot:** So if you've ever had to rethink your approach as a developer, if you've ever had to rethink your approach of maybe how you're fetching data from the database in your application, and how much of it you're fetching... A typical use case - you're tasked with building a CRUD web app; a blog, or whatever. On your local machine, everything is fast, because you don't have a lot of travel; the database is right there... Even if you're running in a containerized version of your database, it's right there. The latency is virtually non-existent. You don't have to worry about these things. Everything is just moving fast. Your integration tests are just as fast almost as your unit tests, and everything is just fluid. It's like "Yeah, I'm getting my stuff done. It's working, it's working."

And then it goes into maybe a staging or QA environment where they throw a heck of a lot more data than you have locally. These days you can't realistically have the same sort of production workloads or set of data that -- you can't realistically have that locally to test against. Or if you do, it's really just a small subset, depending on the scale of what you're dealing with.

Now, your code that was super-fast when you were working locally is now in an environment where it's getting tons more data thrown at it, and things start to degrade. Performance is in the toilet. All of a sudden you're like "How am I as a developer supposed to build for these environments if I can't replicate them locally?" And I'm interested in what Jaana has to say about this.

**Jaana Dogan:** Yeah, I have actually a lot of different opinions on this. Sometimes, like you specifically mentioned, it's much faster in your local environment, but it's actually not always true. Sometimes it's actually slower in your environment. I think what is the core is that our development environment is so different than our production environments... And even as a rule of thumb, we try to keep them very similar to each other in terms of the operating system, the toolchain and everything, so we have some sort of similarity in the production environment... It's just such a big, complex thing to bring all the data in, all the external dependencies, let's try to use the actual services... It's almost impossible to build that entire complexity. And one of the interesting things about this breakdown between product teams versus infra is infra teams have been kind of making things more as a service; I was giving you the example of databases... If you're working for a company as large as mine, they're also responsible for databases as a service. So sometimes they're allowing you and giving you all these staging environments, also sometimes taking care of just bringing similar data, so you can actually evaluate things before you start even developing... So it's a completely different approach. I think back in the old days, at least for all the smaller companies that I've worked for, everything was starting at the development environment. Now we see it as more of like an environment and evaluation of environments, and then if we think that things are feasible, we're kind of like collaborating with the development teams.

So I think the work style and everything has changed, and I think this breakdown between product teams versus infrastructure is contributing to that... And I think it's a positive change.

**Mat Ryer:** Maybe we should bust some of this jargon, because you hear infra, I hear systems engineering, and I hear dev ops... Do we agree at least on what these terms mean?

**Johnny Boursiquot:** No. \[laughter\] It's kind of funny... Let's take for example one of the hot, new titles out there - SRE. You'd think that would carry some sort of consistency from organization to organization...

**Jaana Dogan:** Yeah.

**Johnny Boursiquot:** ...that is entirely not the case, at all. An SRE at Google is gonna be very different from an SRE at Salesforce, and it's gonna be very different from an SRE at Microsoft. Yes, there is a throughline between these things - and that goes for the other titles as well; systems engineer, dev ops engineer - I cringe a little bit when I say that, but... Basically, these terms are gonna mean different things in different organizations... And even over the lifespan of an engineering team, the definition of that role may also change. So I don't think there's one solid definition of what software engineer, database engineer, infrastructure engineer, ops, whatever it is -- I think it's gonna be different everywhere you go.

**Shubheksha Jalan:** Yeah.

**Mat Ryer:** I thought SRE was text speak for "sorry". That's how I always thought about it. \[laughter\]

**Shubheksha Jalan:** I'm sure a lot of SREs will agree with you on that... \[laughter\]

**Mat Ryer:** But that's interesting, because I think that sort of makes a lot of sense to me. Often, the problems that you're dealing with -- that's gonna depend on what you're building, isn't it? And probably even some of the design decisions taken at the architectural level of code; as you've pointed out, that will necessarily impact how that then runs in production... And vice-versa.

And that's the thing, I was always interested in what I could do as a developer to make it easier and to make it simpler for thing to be then deployed on the other side. I was always very interested in that, and I had a few tellings off in the past, I'll admit it. We can talk a bit about that too, but - yeah, that's interesting. Do you think it makes sense then that -- will we ever agree on these things, or necessarily are they always going to be different and versatile?

**Shubheksha Jalan:** My main gripe with not having some sort of common understanding is that it makes looking for a job in this domain really hard... Because you have absolutely no idea what you're getting yourself into until you actually are on the job... And by then it might just be too late.

So as someone who's spent the last couple of months looking for a job, I avoided all jobs with the title SRE, because of this reason. Because 9 times out of 10 they actually turn out to be just like sysadmin or a pure ops role with a different title, and probably a higher salary. And that's not obvious, because we don't have common definitions or a common understanding of what it actually means to have SRE as a culture. We have Google SRE, but that doesn't apply to 99.99% of the companies out there. So that just makes that super-duper hard.

The other thing which is sort of related to that is that because of that, it's really hard to break into this field. I used to be a frontend engineer, and I started doing frontend when I first got into tech. Then I quickly realized that I don't actually like frontend as much; I enjoy distributed systems and backend a lot more. So while I was in college, I took up a distributed systems course in one of my later semesters, and it was like a whole new world opened to me. Before that, everyone around me was just doing JavaScript and web development, so I was never aware there's this whole domain of problems and jobs out there which is also an option, and not just web development.

I have nothing against web development; I have lots of respect for frontend engineers. I cannot do what they do... But yeah, that's just something I really liked, and I wanted to eventually switch to... So I started on my own, I started learning about distributed systems in general by reading papers, blog posts, and consuming whatever material was already out there... And then very quickly I ran up a wall and I realized that you can only do so much on a single machine, unless you have lots of money and access to a cloud provider. That's when I started looking for a job in this domain. That was right after I got out of college; I ended up at Microsoft, and I was doing weird things with databases and store procedures, which was not a lot of fun, so I wanted to move on and do other things... And I was getting more and more interested in infra and distributed systems and related domains.

So I did as much as I could on my own, and when I started looking for a job, there were absolutely no job listings for junior engineers anywhere. It was impossible to find anything at all... Because everyone is looking for platform engineering experience for five years, but nobody wants to actually hire someone, invest in them and mentor them to get them there, and that's a huge problem that I need to address. At one point I tweeted something along the lines of "How do you get started in this domain?" because I was actually curious. I was like "I can't be the only person running into this." And they were just like "Yeah, we moved laterally" or "I was thrown into this role at my job because someone else left, and it was a complete coincidence, and I stuck with it", and stories like that.

So people don't really know that this is actually an option from the get-go... And we actively exclude people who are curious and want to learn and have that drive to learn, and can level up really quickly, because we don't give them opportunity.

**Johnny Boursiquot:** You've just shed a light on this that -- I didn't quite know how to articulate it, and you've done an excellent job of that. It's beyond being a developer who's building a line of business, or features, and putting together these straightforward, end-user-facing applications, perhaps with a backend that services these things, where there is a clear path, basically to go from junior, to intermediate, to advanced... You don't see that a lot for the operational side of things.

I've never seen a job post for junior platform engineer, or junior operations engineer, or junior SRE. Maybe they're out there, but I've never seen one. I literally have never seen one. So how do you mature in such a role and in such a field if nobody is hiring for somebody who perhaps doesn't have that experience, and is looking to get that experience. Where else are they gonna get that kind of experience? They need the environment that provides those scenarios and circumstances for them to learn within.

Sometimes you can't spin up your own -- well, I guess you could spin up your own infrastructure in the cloud to do that; it would cost you a lot to learn... But this is the kind of job where really an apprenticeship model is really needed. You need a starting point in this field, and like you said, people are moving laterally, and they've been around the company long enough, and perhaps they started as a software engineer, and maybe be exposed incrementally to the operational side, and they can finally make that jump... But if you don't have that, where do you begin?

**Shubheksha Jalan:** Yeah, that's exactly right. That's exactly what I ran into as well. It's a chicken and egg problem. You need experience to get a job, but to get a job, you need experience. So where do you actually start? Because there is a very hard limit to how much you can do and learn on your own when it comes to a job of this type, especially if you wanna work at scale. You simply cannot replicate the kind of things you'll be doing every day at home.

**Mat Ryer:** So why is that though?

**Jaana Dogan:** And it's such a big missed opportunity. I'm seeing a lot of people without a lot of experience coming into this field and looking at things from a very new perspective. In my experience, they've been really much more effective in terms of pointing out the core friction points than the experienced engineers. I think experienced people have a lot of -- they're accepting the current status, and they always assume that there's all these layers of layers of things that you have to satisfy in order to provide. But as a new, inexperienced engineer, just coming in and questioning some of these things more carefully - that's the perspective that we are missing in infrastructure in general... Because there's no good connectivity and we're just doing a bad job in terms of hiring people into this area.

**Shubheksha Jalan:** Yeah, I completely agree.

**Mat Ryer:** Is it because people think that this is the kind of serious thing -- it can't go wrong, and therefore you need lots of experience? Does it fall into that kind of category in people's minds? Because I agree, I've never seen junior -- in fact, whenever I think of SRE or dev ops or the people that know this usually, they've been doing it a long time. So it's a very good observation, but I wonder why it is... And it could be that - that we feel like you can't let these things fail. It's got to stay running, so... Maybe they think they can't trust somebody that's junior to do that.

**Shubheksha Jalan:** I think that's definitely true, and that's on a lot of people's minds... But I don't think that has anything to do with being junior. When you start in a new role, even if you've been doing something for four years and you start in a new role, on your first day you will be scared of screwing things up. So I don't get how that correlates that with experience, because you might be a backend dev, for example, but you might not have done infra... And you can still screw things up, and people do this.

There's actually a really good doc on exactly this topic from SREcon a couple of years ago by Kate Taggart - sorry if I mispronounced her name - which basically makes the case for hiring junior folks into SRE roles, and what experienced folks on the team can learn from them.

**Mat Ryer:** We'll put the link to that SREcon talk that you mentioned in our show notes.

**Shubheksha Jalan:** Yeah. And the other thing that I run into and I keep hearing from other people about it as well is just the lack of resources in this domain, as well... Because a lot of stuff is very Academy-heavy; a lot of the research was done maybe 2-3 decades ago, and it's catered towards more experienced folks who have a lot of experience in the area. It has a lot of jargon that is not very accessible... So I also wanted to see what we can do to help break down those barriers and make the field in general more accessible.

Something I really appreciated was this series of blog posts by Vaidehi Joshi called Baseds. She basically published an article about distributed systems, from scratch, every week, for an entire year. So it's kind of like a whole distributed systems curriculum... And we don't have a lot of stuff like that. For example the Amazon Builders library - you cannot expect someone who has just a little bit of experience to go and read about leader election and consensus algorithms there and actually make any sense of it. And that content has its own audience, I completely agree. There are people who definitely need to consume that and they learn from it. But at the same time, I feel like we need to cater to all levels of audience, not just people who've been doing this for a while and are looking to hone their craft, in a certain sense... And without breaking barriers for people who are coming behind them.

My philosophy of just being in tech in general is leave doors wide open behind you as you go through them, and I feel like we don't do a very good job of that in this community, and we need to do better.

**Jaana Dogan:** That's really interesting that I completely agree with this. A couple of years ago I actually tweeted something like "Distributed systems are not as intimidating as what people make them sound like", and there are a lot of pieces in the larger spectrum that you can learn, and learn some of the basics; you don't have to learn about any election algorithm to do anything. You can just go for the stuff that you have an understanding or you can relate to, and then go from there and enlarge your knowledge and your background in the field.

But it's funny, most of the people were telling me that I'm actually trivializing distributed systems by saying that... And I think given how big of an area it is, and how complicated some of the problems are, I think people are always trying to be realistic about misrepresenting the fields, but at the same time it creates this -- it's super-intimidating, because the field is very large, and the work is not very accessible, and it's just hard to read, and there's not an easy way to begin, and there's no easy way to progress. It's just like a very large spectrum of things.

When we were talking about databases, for example on Go Time, we also had that struggle. It was hard to create a mental model to think about these systems, and different trade-offs, and the larger spectrum of things that you have to learn... And it kind of is intimidating to people. But we have to do a better job in terms of surfacing out the entry points, and just making them more visible and accessible.

**Shubheksha Jalan:** I completely agree. I dealt with exactly that. It's such a vast and such an intimidating field to get into... And there aren't clearly defined entry points at all. You sort of just fumble your way through ten different things, and then you'll come across something, and you'll be like "Fine, this makes sense. I'll stick with it, and I'll go through that, and then switch to something else."

It's such a shame, because it's such an interesting field, with so many really interesting problems to solve, and we're not gonna run out of them anytime soon, at least not in our lifetimes, unless (I don't know) the world ends, or something...

**Mat Ryer:** Let's not test it. \[laughter\]

**Shubheksha Jalan:** Yeah, especially right now... \[laughter\]

**Mat Ryer:** Yes. But at least then all of our infra-worries will go away.

**Shubheksha Jalan:** Yeah. That's the plus side.

**Break:** \[00:26:29.05\]

**Mat Ryer:** I'm interested in Go's relationship in this world... Because I remember from the very first GopherCon - I remember that was the time when I started getting exposed to a lot more talks and ideas and things from this world. Docker obviously is a big, famous Go project... So I think Docker gave Go quite a lot of credibility in those early days, because we think of this world as very grown-up; this might be linked to what we were talking about, why it's difficult for juniors... But I certainly have this idea that infrastructure is very grown-up, it's very serious. Maybe you can't be as creative as you can - another perception I had, that it's not so creative, it's just very serious; it takes very grown-up attitudes and a very grown-up approach to it.

I remember being exposed to more and more of that because of Go's part that it started to play in this world. Why is Go such a big name in this space?

**Shubheksha Jalan:** Yeah, that's a really interesting question... And my story actually started at GopherCon as well. When I graduated, I was mostly doing Java and some C++ in college...

**Mat Ryer:** I'm sorry...

**Shubheksha Jalan:** Yes...

**Mat Ryer:** \[laughs\]

**Shubheksha Jalan:** I deserve that, thank you... So yeah, I was learning about Go, and I was seeing it pop up, and I was not sure what it was all about. I looked into it a little bit, and then i decided to apply for the GopherCon scholarship. I got that, and I attended a bunch of talks, went around talking to people in the community. I think that's the first time that I met Jaana as well. It was a really, really good time. People in the community were really, really nice. The language seemed really accessible. So that's how I started getting into it and actually actively learning it. It was already exploding in the infra distributed systems community, because more and more people were using it for these kinds of problems. That's why I made the relations that if I learn Go, then I'll be able to get a job in this domain, which in hindsight was probably not the best way to go about things, but it sort of worked out; so I guess it's okay.

So yeah, that's one of the main reasons I actually got into the entire ecosystem, because Go was and is still being used heavily in the cloud-native ecosystem, which has sort of become synonymous with infrastructure, in a certain sense, in the last couple of years... And I think that has really lifted it up in the developer community as well.

**Mat Ryer:** I love that. Actually, we should do a shout-out, because the Go community and GopherCon in particular, Brian and Erik, and all the team there - from the very beginning, they had a very big focus on making sure it was an inclusive community, and making sure that it was trying to open doors for people where the doors might not be open. So I think that's great to hear a success story on that. So how was learning Go for you? Did you find it tricky, coming from Java and C++? Was it too easy?

**Shubheksha Jalan:** Not too easy, because it has its own gotchas, but it was definitely easy. I did not have trouble grasping the basics of the language. They were very straightforward. It was mostly just the syntax bit, which takes a while to practice. It takes a while to get your head around that. But yeah, it was fairly straightforward. One of the favorite things for me about Go is how easy and accessible it is to people just starting out... Which also in turn makes all of the domains \[unintelligible 00:31:27.08\] accessible to people. And the fact that it's used so widely in open source infrastructure projects is just a bonus, because it's so hard to get started anyway... If it's written in Lua, or Scala, or something like that - those are not languages that people always learn in college, for example. Go is becoming a language that people are actually actively learning in colleges, so it just reduces that barrier as well, and it's easy to pick up on your own too, which is great.

**Johnny Boursiquot:** One thing I'll mention, and I definitely appreciate your experience and your journey with the Go language and the Go community... There was a time there that I was a little worried, because -- I'm not sure if you all can recall, but there was a time where Go was an elitist sort of language; it created this perceived barrier, like "Oh, you only do Go if you are the top echelon of people who are gonna be doing these ops systems, distributed systems." They were creating this aura, this mythos around the language itself, which created a barrier for people who might otherwise be interested. Because of that, you could really shut out somebody even before they even tried the language itself. Just the aura around the community. And I'd like to think that we got past that, and through effort, I'd say.

You saw a lot of community members who care about the community sort of go out there and make Go accessible to beginners, teaching and writing blog posts, and in their videos, talking about the inclusive nature of the community... It was a really concerted effort. This spell, this notion that Go was really reserved for a select few... First of all, no technology holds that high a regard. Anybody can learn to program, I truly believe so; you need to put in the effort. For some it's gonna be harder than for others, and that's just the way life is. But creating these artificial barriers for people to learn things - that has no place in this community... And I'm glad your experience was a little different, but I do wanna acknowledge that we did have some of our own stumbling blocks within the community, that phase where artificial barriers were being talked about for a little while.

**Jaana Dogan:** It was very painful in the beginning, to be honest. Right now I'm not sure if anybody can remember, but lots of the initial criticism maybe Go received was also related to that. It looked like a preserved place for elitist people. And if you take a look at the earlier posts on the mailing lists and so on, it was very different. And it took a long time, many years, and effort, and lots of people felt very burned out actually, and left the community and the project altogether... But I'm actually glad that we got to the point, and we still have a lot to do.

**Mat Ryer:** Yeah, I remember that first GopherCon... I remember people actually actively talking about having diversity, and things like that... So you're right, it was a proactive thing, and it remains one. It's something that we do have to keep working at. It doesn't happen by default, does it?

**Shubheksha Jalan:** Yeah, definitely. It has to be a conscious effort. I remember the year I went to GopherCon - that was 2017 - they actually had a diversity and inclusion room on the last day of the conference. It was mostly people like Women Who Go, there were quite a few number of men as well, and I remember Russ Cox handing out mics for folks to ask questions, and I was just like "Whoa... I did not expect that, but it's great to see."

Something that has personally attracted me to this community has been - Go, as well as like Kubernetes and JSON communities - the number of women who are well respected and in positions of leadership and influence. I have not seen that in any other programming community to that extent so far. It's bad, yes, but Go seems to be slightly better at it than a lot of other communities out there.

**Mat Ryer:** Great. Yeah. But again, more to do.

**Shubheksha Jalan:** Yeah.

**Mat Ryer:** Okay, so one of the things that I was told off by by my dev ops guy was just a specific example... I didn't set the timeout on an HTTP client; so by default, when you use that default client, there's no timeout. So it basically means that your code can hang if there's problems on the network. That was kind of an early sign that told me "I need to understand the actual environment in which my code is gonna run." Are there other things that you wish developers knew, that any of us wish that developers knew, even if we don't have the scope to become experts in this world?

**Shubheksha Jalan:** I have one question for you... Did you think about all of this before the show, or do you just loop it in your head every night, before you go to sleep?

**Mat Ryer:** What, the questions?

**Shubheksha Jalan:** Yeah, all of the times people have told you off.

**Mat Ryer:** Yeah, they come back to me just as I'm drifting off, yeah... \[laughter\]

**Johnny Boursiquot:** I did not expect that. That was good. \[laughter\]

**Mat Ryer:** Well, that's how I learn, actually... You raise an interesting point, because I think a lot of the learning comes from when things go bad, and then you think "Oh, I'm not gonna do that again...", especially in this kind of space.

**Shubheksha Jalan:** Yeah, it sticks with you.

**Mat Ryer:** Yeah.

**Shubheksha Jalan:** Something that I've seen people get caught by is variable shadowing.

**Mat Ryer:** Hm. Tell us more. What is that?

**Shubheksha Jalan:** There was an interesting incident that was caused by it. Basically, you were looping through a bunch of machines, but because the variable was already assigned, it was only looping through one single machine, and not doing everything that it was supposed to do for all of the machines. That's something that's very easy to forget, it gets missed in code review all the time, but it has caused very bad things.

**Mat Ryer:** Oh... Yeah, so you don't think that; it just seems like a simple little thing that you might do, and of course, it has a knock-on effect.

**Johnny Boursiquot:** This is an example where I think the Go language is sort of forcing developers to come face-to-face with some of the things happening at a lower level within the stack. If you take a typical framework user, say maybe like a Rails developer or a Django developer, or Laravel - whatever, those popular frameworks that provide so much abstraction on top of what's going on under the hood; even your interactions with your databases, that's abstracted from you... All you have to do is use a singleton, call a method, and all of a sudden data comes back, and the mapping is already done for you... You're removed so far away from the interaction that there is another system somewhere that you have to talk to, that you start to simply be like "Yeah, this is like doing RPC, all the things. I don't have to worry about the networking, or setting timeouts..." That's framework-level concerns, right?

So in Go, unless you choose to go and use one of those frameworks, you do have to be aware of and start to actually educate yourself about these things. When you get a value, when you initialize an HTTP client - yeah, you should read the documentation to see all the different fields that you can set, because if you don't realize that "Okay, yeah, there's a timeout there", your code could hang indefinitely \[unintelligible 00:39:32.01\] hang on to your connection, all of a sudden you're doing yourself a disservice by not knowing what's happening under the hood.

Now, I'm not saying you have to read through every line of the standard library to figure out what's going on. I'm not saying go learn the inner workings of networking, understand all the different OSI levels... I'm not saying just get that deep, but actually understand what it is to have one system talk to another system over the network. Understand what it means to have one system talk to a number of replicas within a network. Understand what it means to spin off multiple goroutines, where each of them could be doing something. When do their lifetimes end? When do they rejoin the main goroutine?

Understanding these things that are happening behind the scenes, that way you're not just saying "Oh yeah, I'm just gonna go to Stack Overflow, copy and paste what I see", and then not really know what it's doing and why it's doing it. So it kind of forces you to educate yourself a little bit... But I think that's a good thing.

The assumption was that developers don't want to learn these things, that they just want frameworks to do all the things for them. Not necessarily. Some do want to know what's going on under the hood. My days when I was first writing HTML, we had this thing called WYSIWYG, "What you see is what you get", and you'd go to websites and you're like "Oh yeah, cool." You could use tools, drag-and-drop things, whatever it is... And then you need to solve something, and you're like "Oh, crap. I can't drag and drop my way out of this thing. I actually have to View Source. I have to actually see what's going on under the hood and figure out "Oh yeah, there's an errant tag here missing, or there's an \[unintelligible 00:41:05.28\]" So you have to just look at Go as the View Source behind all the abstracted network, the interaction between your different systems (your database, and your application), you have to look at Go as the View Source, peeking under the hood as to what's happening there. That's gonna make you a better developer, and if you're not already in the operational space, that's gonna get you closer to understanding what it takes to actually be somebody in that role, that has to deal with systems, that has to deal with network, and that has to deal with latency and all these terms \[unintelligible 00:41:36.29\] for those new roles that we have floating.

**Shubheksha Jalan:** I completely agree with that.

**Jaana Dogan:** And it is very interesting that, especially with a new language, the assumptions are very different, because you have some baggage from other languages... One example is the context package. A lot of people, when they look at it, they don't necessarily actually question what it does. They automatically assume that it's also propagating things over HTTP, or gRPC, even though it's just a package that provides context propagation inside the same process.

So I think we have all these different assumptions because we know that other languages or library spaces are just more powerful and trying to bring all this convenience into things. I think one of the difficulties of Go was people were coming with that baggage and were expecting more from the standard library than it actually was doing... And then they would be surprised, all of a sudden, that it was actually not doing that much. But then would go and learn, and it's not a big deal once you learn; there's always an easy way to get whatever you wanna get done... But even learning what is there and what is not there because of the assumptions and the baggage was a difficult thing for Go, because it was trying to be as small as possible, trying to be as simple as possible, compared to the other languages or library ecosystems.

**Mat Ryer:** Yeah, and so then lots of teams started to build their own tooling, didn't they, to solve these problems... Mihai in the Slack channel was talking about this point, that orgs end up with their own flavor of tools to address similar problems, and that can be difficult for this industry (if you like) to move, when you move between companies even; there can be a lot of new things that you have to learn, because we don't really have these established frameworks.

**Jaana Dogan:** Yeah, it's true. It's almost like you're living in a microcosm, based on which subset of language, and which additional tools that you inherited... So you have different assumptions, and different expectations. It's a completely different culture almost. Large companies, especially with a very strong culture - they do things in one specific way sometimes, and you automatically assume everything is very similar outside... But there's a larger world outside.

**Mat Ryer:** Yeah, I think so. One example - I know a particular company that have basically a kind of microservice package in Go, and it might even have a lot of codegen, in fact... And then if you want to add a service, you use this tool to generate basically the scaffold of that service, and you sort of then do the implementation. And presumably, all the ins and outs are standardized somewhat, and a lot of other common problems are solved, like monitoring and traceability and all these sorts of infra problems. Shubheksha, have you ever used something like that, and what do you think of that as an approach?

**Shubheksha Jalan:** Yeah, that's kind of what I have used at one of my previous jobs. We had a package which generated like a skeleton for service, and a lot of things were standardized. I really liked that approach personally, because it was really easy to get onboarded as a new engineer to the platform and the ecosystem, and just get started. Having standard conventions for how you write a service, how you write a handler, or how to do RPCs and stuff - it was really, really useful. And just having that skeleton right off the bat to get started with, without having to learn every single thing was really, really useful.

**Mat Ryer:** Yeah, I think that is a good lesson. But the danger, of course, as with any abstraction, is teams might try and preempt that by designing that upfront, and I suspect -- I know the case you're talking about, and I suspect these things have to kind of emerge in some way, don't they? Or could they be a standard package -- there are some Go packages that address this... Could there be a standard that we all just use?

**Shubheksha Jalan:** I think what you say about it evolving - you basically notice that you're solving the same problem again and again and again, and then you try to get an abstraction out of it... But then - yeah, that abstraction can go wrong. There are no guarantees that you will get it right, and depending on how you design it, it can be very hard to change, especially if it's used as widely as something like a new service being generated.

So yeah, there's always that, and I think the other danger is that it sort of sets expectation that you don't need to learn about what's actually going on. It's like a magic wand that you wave, and you get stuff out of it, and then you can start building on top of it, but you don't really understand what's going on underneath... And yeah, that's again something that you need to be careful about. Like Johnny said, there will always be people who are interested in figuring out what's going on underneath, but there will also be people who just wanna build on top of it. So I think getting that trade-off right between catering to both audiences is very hard, but it's also super-important to keep that in mind when designing abstractions.

**Mat Ryer:** Brilliant.

**Break:** \[00:46:57.08\]

**Mat Ryer:** Well, it's that time again... It's time for our Unpopular Opinions!

**Jingle:** \[00:48:14.13\]

**Mat Ryer:** ...and the music plays... \[laughter\]

**Johnny Boursiquot:** You paused there, kind of waiting for it to play...

**Mat Ryer:** Yeah... That's another thing that I just hear over and over in my sleep, that thing with Unpopular Opinions...

**Johnny Boursiquot:** \[laughs\] There's a pill for that, mate.

**Mat Ryer:** Yeah, thank you. I'd like some.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Do we have any unpopular opinions on this? You must have one, Johnny...

**Johnny Boursiquot:** I mean, we have a guest on the show, so I'll allow them to...

**Mat Ryer:** That sounds polite, but it's actually rude. \[laughter\] Okay, if we don't have one, then it's just a waste of theme tune, isn't it?

**Shubheksha Jalan:** I mean, I can probably come up with one... One tech and one non-tech.

**Mat Ryer:** Brilliant.

**Shubheksha Jalan:** What Johnny said earlier about dev ops engineers - I just cry a little bit every time I see someone hiring for that... Because I don't know what they expect or what the candidate should expect when applying for that role... Yeah, I just wish that people would stop doing that. And a non-tech one is that I think pizza is overrated.

**Mat Ryer:** Oh, here we go...!

**Johnny Boursiquot:** Ooooh...! \[laughter\] Oh, no...!

**Shubheksha Jalan:** Nobody saw that coming.

**Johnny Boursiquot:** Oh, man... \[laughter\] Oh, man...

**Mat Ryer:** By the way, that isn't a non-tech one. We love pizza.

**Shubheksha Jalan:** Oh, yeah. Yeah, I'm just really sick and tired of eating pizzas \[unintelligible 00:49:42.28\] \[laughter\]

**Johnny Boursiquot:** Oh, man... \[unintelligible 00:49:52.06\] Oh, my goodness... Oh, my goodness. Okay, so I do have an unpopular opinion, because Shubheksha gave me the courage with her first one, so...

**Shubheksha Jalan:** Yes...!

**Johnny Boursiquot:** ...I'm gonna lean into this one a little bit, so...

**Mat Ryer:** You don't like lasagna, do you? \[laughter\] Okay, go on.

**Johnny Boursiquot:** I've been sort of noticing this trend on the interwebs, of people changing the names of their main branches or their master branches on their repositories, and things...

**Shubheksha Jalan:** Oh, yeah...

**Johnny Boursiquot:** Well, that's all well and good, but other than renaming your master branch, I'd settle for you rethinking your hiring practices, to be less laced with implicit bias. I think that's gonna be way more beneficial in the long-term than superficial gestures like that. It's fine if you think it helps, if you think it helps culturally within your organization; that's totally fine. A master branch really never bothered me much, because I choose to think beyond that, but again, that's not gonna carry as much weight for me within an organization if you do that, but the rest of your practices and the rest of your culture is uninclusive and uninviting for people who look like me.

**Mat Ryer:** That's very well said. That's a shame, because I was hoping we could just change that and then we fix racism. \[laughter\]

**Shubheksha Jalan:** \[unintelligible 00:51:23.12\]

**Mat Ryer:** Actually, I saw a heartbreaking report where somebody - I think it was Oxford University in England... They applied for lots of jobs and just used different names. The CVs were exactly the same, they just changed the names, and the results were staggering. And honestly, I thought we were doing better than this report showed. I'll try and find it and put it in the show notes. It was genuinely heartbreaking that just by having a different name, or a name that's difficult to pronounce perhaps... Not for me, obviously. I nailed it. \[laughter\] Then it gives you a disadvantage. Just a name. Everything else is the same.

**Shubheksha Jalan:** In the \[unintelligible 00:52:10.08\]

**Mat Ryer:** Yeah, but with editing though. Don't forget. \[laughter\]

**Johnny Boursiquot:** It's gotta be just once.

**Mat Ryer:** It's gotta be the first time. \[laughter\] Yeah, that's heartbreaking, ain't' it?

**Shubheksha Jalan:** Yeah... But that's the way of the world. Jaana, you need to have unpopular opinions. I'm sure you do.

**Johnny Boursiquot:** Yeah, Jaana. Bring the heat. You've been missing in action for a while. Bring the heat.

**Shubheksha Jalan:** Go for it!

**Jaana Dogan:** Oh, my god... Tech or non-tech?

**Shubheksha Jalan:** Both.

**Johnny Boursiquot:** Whichever one you wanna--

**Jaana Dogan:** Okay... First - tech. I think I shared my unpopular opinion earlier, when we were talking about how intimidating distributed systems is... And I do believe that distributed systems are not as intimidating as they look like. The main reason it looks intimidating is it's still seen as elitist. There's a bunch of people controlling the entire field. Or it hasn't been able to go out, other than that small circle, and that's why it's hard, and it's kind of like -- those people are not contributing to the state of the world by making things accessible or having more of like a broader... I mean, this is what other fields that -- I understand the challenge so well, because it's so big, but at the same time, this is one of the fields that I haven't seen any progress in in the last ten years, in order to categorize things, or in order to come up with ways to think about problems. That's why it keeps being at the hands of a small group of people... And that smaller group of people - they're good in their job, and they have experience and so on, but that's not enough. I think that's a slightly unpopular opinion in my circles, that distributed systems is not that hard... But that's my unpopular opinion.

The other unpopular opinion I have - it's tech, actually; it's not non-tech. And it's about SRE. One thing that I don't understand about SRE is - to me, it's true that we don't know what it means to be a junior; so you're like "Who's hiring junior SREs?" and whatever. But you know, I also don't know what it means to be the top SRE in the world. What does their job look like?

I have a really good understanding of what software engineering can evolve into, but what is a principle SRE though? I don't have a lot of insights, and I know some people at that level at my company, and I've worked with them, and I still don't have a good understanding. And it's partially because this field is still less known, and there's less conversation about the role... But also, at the same time, it might be the case that people at those levels are not necessarily representing themselves as SREs, because there's always some sort of issue with being an SRE versus being a software engineer.

At Google, for example, software engineering is considered as a better role, even though these are completely orthogonal things. So people who are at the principal levels are probably finding it harder to identify with that role, and that contributes to the problem of us not having any insights about their work, which is really sad.

It's probably not a very unpopular opinion, but I believe at the higher levels we also don't know what an SRE is doing, and we don't have a lot of insights.

**Shubheksha Jalan:** That's a really, really good point.

**Johnny Boursiquot:** Yeah. Like you're saying, I don't think -- it hasn't been around long enough. I mean, you take the general software engineering field - we've been at this for a little while, so you can get a sense... Even at the junior level, you kind of know who seems skilled, and as you mature yourself and you go through the levels, you get a sense of "Okay, what does a top software engineer -- what skills do they need to have?" Because you're using that as sort of a roadmap for yourself. Like "I want to become a top engineer. Oh, I need to spend more time learning about different architectures, I need to spend more time learning about different patterns, and different things..." Because in your mind you have an idea of "Okay, one of the best engineers exhibits these qualities, or they know these things", because we've been around long enough to get that sense. Even if the role looks different at different organizations, there's this ideal representation of what a top software engineer looks like. But SRE hasn't been around long enough for us to know what that is, especially if the experience varies so much from org to org; we don't yet know what that should look like.

**Jaana Dogan:** That's also a barrier against people who are trying to get into this field, because they don't have a clear mindset of what they can achieve. Or they don't actually know what it actually translates into in the higher roles, to be able to feel confident enough that "This is what I wanna do in the long-term myself." Because all the roles, all the types -- the tech work is a long investment; it's not like you can just go in and make a lot of impact in a very short amount of time. You make impact in a very long amount of periods; you invest 5-10 years into roles, and grow up to really high levels... And people just wanna understand what the role ends up being after 5 years or 10 years in order to invest their very precious time into that role.

**Shubheksha Jalan:** Yeah, this is something I've had a conversation with multiple people about, who are SREs, as well as people who've been in the software industry for a while... And the conclusion that I got was that it's -- for me, for example, I've just completed three years in the industry, so it's too early for me to pigeon-hole myself into an SRE role... Because there is bias against that title, no matter what your actual job is. People have a certain impression of you when you say you're an SRE, and they will interpret it according to what their definition is.

It's much harder to shift from being a software engineer to being an SRE, than vice versa. We need to work on that as an industry, but that's just something that's there, and we need to make people aware of it and acknowledge that that bias exists. More often than not, the hiring pipeline is also very different for both of those roles, which doesn't help either.

**Mat Ryer:** I think this has been a very important conversation. I started the show by saying this is an area that I really feel like I didn't have a good grasp on, and you've really opened my eyes as to why that might be... So one thing I will say - anybody out there that has a story or experience or something, I could imagine them thinking "No one's interested in this", but we should encourage people, if you've got these stories and if you've got some experience, please share it, because that could be a way that we could start to illuminate some of these dark corners that we are operating in. Yeah, very, very good stuff.

**Shubheksha Jalan:** I am brainstorming on a bunch of projects in this area to help break down some of the barriers. So if anyone is interested in collaborating, sharing their story etc. feel free to hit me up. I'll be more than happy to chat.

**Mat Ryer:** How should they get in touch with you?

**Shubheksha Jalan:** DM me on Twitter. My handle is @scribblingon. Or email me at hi@Shubheksha.com.

**Mat Ryer:** Brilliant. I wanted to ask about those things... We are definitely pushing it for time, but I wanna find out what those things are... What are they?

**Shubheksha Jalan:** They're not super-concrete right now, but something I really want to do is have a beginner's version of, for example, the Amazon Builders library, which is accessible to folks who are new to this field. You can pick up an article, you can progress through it and make sense of things, and then go on to read those kind of articles.

Another thing that I just thought of - it literally just popped into my head, based on what Mat said a few seconds ago - is that it'd be really cool to actually highlight some of these stories and talk to people about it either in a podcast format, or in interview format, about how they got into this field... Especially folks from under-represented people, because this is something I've struggled with as well, like to Jaana's point. It's very hard to find role models in this area, or people you can talk to and who can guide you, who also look like you. So it'd be really cool to highlight and share stories, so that that is some sort of a resource for folks to just go to and find like-minded people who are interested in the same things when it comes to technology as well... So yeah, that would be cool to do.

**Mat Ryer:** Well, that's all the time, unfortunately... And I genuinely mean unfortunately this time; usually, I just say it to be nice... \[laughter\] But it's been such a great conversation. Thank you so much Jaana, Johnny and Shubheksha. Thank you very much, and we'll see you next time.

**Outro:** \[01:01:31.13\]

**Johnny Boursiquot:** It's close enough... Do you wanna get us going, Mat?

**Mat Ryer:** Um, yes, I do... I just want to make sure I don't mispronounce your name...

**Johnny Boursiquot:** Are you writing down the pronunciation?

**Mat Ryer:** Yeah, but when I write it down, I kind of try to write it phonetically, and then I realize I don't know how to read that. \[laughter\] I just don't wanna be a typical English person, that's what's really going on.

**Shubheksha Jalan:** I appreciate that.

**Mat Ryer:** Thank you, yeah. So go ahead, one more time.

**Shubheksha Jalan:** Shubheksha.

**Mat Ryer:** And then your last name?

**Shubheksha Jalan:** Jalan.

**Mat Ryer:** Jalan.

**Shubheksha Jalan:** But can I get this part of the clip, so that I can forward it to other people who mispronounce my name? \[laughter\] It would be so useful.

**Mat Ryer:** Yeah, we'll release it as an episode on its own. \[laughter\]

**Jaana Dogan:** Oh, gosh...

**Mat Ryer:** Okay, Shubhepsha Jalan.

**Shubheksha Jalan:** Shubheksha. There's no P. Where is the P coming from? It's a K.

**Mat Ryer:** Yeah, that's true.

**Jaana Dogan:** It took them like five years to learn how to pronounce my name, so don't take it personal.

**Shubheksha Jalan:** Seriously? Then I have no shot in this lifetime.

**Jaana Dogan:** I've changed my name five times in order to get it right.

**Shubheksha Jalan:** Oh, wow.

**Jaana Dogan:** I still can't use my full name. Nobody can pronounce it.

**Mat Ryer:** So is Jaana, so we can hear it.

**Jaana Dogan:** Like the full thing? Nah... Too much information.

**Mat Ryer:** Even you can't say it. \[laughter\]

**Johnny Boursiquot:** It's like, "I ain't putting my government name out in the open."

**Mat Ryer:** Yeah, fair enough. What's your mother's maiden name? I'm just trying to slowly get enough information to steal Jaana's identity. \[laughter\]

**Johnny Boursiquot:** Oh, man...

**Jaana Dogan:** My name is a globally unique name... Anyways, okay. Let's be serious.

**Mat Ryer:** Mine is, actually. Mine is, I think.

**Shubheksha Jalan:** Yeah, I guess...

**Johnny Boursiquot:** Wait, yours is a UUID too, Mat?

**Mat Ryer:** Yeah, it's G235119-... \[laughter\] No, but really, there isn't another - as far as I know - with my spelling. But it doesn't help me now. I need to keep this in my realm, so can we not talk about too many things, please? \[laughter\] Okay, Shubheksha Jalan.

**Shubheksha Jalan:** Yes! That is good.

**Johnny Boursiquot:** That was the closest you got. That's nice!

**Mat Ryer:** What I'll do is after the show I'll just record me saying it 50 times, and just send it to you and we'll edit in the right one. \[laughter\]

**Shubheksha Jalan:** \[unintelligible 01:05:52.26\]

**Mat Ryer:** Okay, I'll do a little intro then, and then we'll get started.
