**Johnny Boursiquot:** Hello, and welcome to this episode of Go Time. Once again, thank you very much for those of you who listen to the show regularly, and a special shout-out to our live listeners and those that engage with us on the Gophers Slack channel on a regular basis. If you also want to join the fun, do check out gotime.fm for all the details. Again, thank you so much. You all make this recording every week worthwhile, you make it more fun.

I'm Johnny Boursiquot, I will be your co-host for today. Joining me also as co-host is Jon Calhoun. Say hello, Mr. Calhoun.

**Jon Calhoun:** Hey, Johnny. How are you?

**Johnny Boursiquot:** I am doing well, I am doing well. I'm feeling excited, because today we have a special guest, Denise Yu. Allow me to tell you briefly about Denise - she's an active member of the Go community, especially in the Toronto, Canada region. You might have come across her talks at GoCon; she's also spoken at DevOps Toronto, at various meetups, and she's kind of making a name for herself, in part because of the way she gives back to the community, something that as you all know is near and dear to my heart... And some of us have even participated in her drawing lessons that she teaches online, which is kind of fun. We'll definitely get into that one; I wanna know more about that, because I can't draw anything... So we're gonna get into that.

She calls herself a developer and cat enthusiast. Welcome to the show, Denise.

**Denise Yu:** Thanks so much for having me. I'm excited to be on. This is my first time doing a live stream -- or a live podcast recording rather, so... Definitely not nervous at all.

**Johnny Boursiquot:** \[laughs\] You'll do just fine, you'll do just fine. So I've only briefly given folks an introduction as to who you are, but why I really wanted to have you on this show is because I think a lot of the things you do that are valuable to the community - I want more folks, more broadly to be aware of those things, and of you, because I think you're doing some awesome things, which benefits a lot of us, whether we realize it or not... And I kind of wanted to have you on the show, and -- especially, it seems to me the kind of role you do, even with your day job at GitHub, is all about taking care of people, taking care of community... So it lines up quite well with what we're gonna get into during the show today. But please, give us a little more about yourself. What don't we know about you that you want us to know?

**Denise Yu:** \[00:04:00.19\] I guess we can start with what I currently do... I'm currently a software engineer at GitHub. I actually started about eight weeks ago, right when everywhere started going into lockdown. I am actually at my parents' place right now. My intention was to visit my parents for a couple of weeks, like one week, maybe two, and now we're starting week eight... So it's been an interesting experience, living at your parents' house at age 30, but it's good to stay put, especially now. And it's been a good chance to spend more time with my family, which is -- I think I may have realized I hadn't been home for quite a while, because of immigration reasons and just life reasons.

So I work at GitHub. The team that I joined is called the Community and Safety team. This is a team that has a mission that I'm really excited about. I interviewed specifically for this team, and was like "No, I just want that one job. I don't want any other roles." I found out about this team last year, when I was at a conference called Write/Speak/Code, out in San Francisco. At that time Lexy Galantino, who's now one of my teammates was at the conference, speaking about her team... And basically talking about the ways that GitHub builds tools, basically combines policy solutions and engineering solutions to encourage people to become part of constructive and positive communities, and to discourage negative, unproductive behaviors that erode things like trust in the community, collaboration in communities, and that sort of thing.

So I was very excited about the mission. I'd been doing open source software for a number of years. Very early on in my career I actually accidentally became the lead maintainer of an open source project... So I know what it's like to be on the other side of the table and be running an active project and feel overwhelmed by all the things that people are asking of you.

So I was very excited about the role, super-excited to get the offer... I started eight weeks ago, and it's been fantastic so far. I'm having a lot of fun. This is my first time back in \[unintelligible 00:06:06.05\] in a number of years. I was working on infrastructure tools for the last few years with Pivotal, so getting back into Ruby on Rails stuff actually has been -- Rails has changed a lot in four years. The last time I wrote in Rails was over four years ago, and I was like "Oh... This thing that I struggled with four years ago is just a solved problem now", which is kind of nice.

**Johnny Boursiquot:** Awesome, awesome. I'm interested in the journey that you've taken within the Go community. What brought you to Go, and what keeps you in the Go community?

**Denise Yu:** Yeah, so I started writing Go at work last year, and I actually haven't written Go for that much time. When I worked at Pivotal, a bunch of teams had basically adapter code that was in Go... So I didn't get super-deep into Go my first two years there. Mostly my Go code was about taking YAML that's in this shape and then marshaling it into a data structure and changing it into a slightly different shape... Which is kind of like what app developers do; you get some input, change it around a little bit, and then output it to somewhere else.

Last year I rolled on to a team that was working on an open source product called Concourse CI. Concourse is written 100% in Go. I think that was a pretty deliberate decision early on, because Concourse, first of all, needs to be highly performant. It's a CI/CD system. It's run on containers. A lot of the container APIs are written in Go, which is fantastic. Runc for example has a Go client... So I started learning a little more about Go, and trying to get more into the weeds of the language. And I definitely am still very far from being able to call myself a Go expert, but some of the things that I really like about Go is - believe it or not, I was actually thinking about this the other day... Learning Go conventions and the Go style of coding actually made me a better developer in other languages... And I feel like I go through this every time I learn a new language. Learning JavaScript made me better at Ruby, and now I feel like learning Go made me better at both JavaScript and Ruby...

\[00:08:11.05\] And I'll tell you why - the reason why is because I love that Go is so opinionated. If you wanna write a conditional, there's only one way to do it. So if you read a conditional in someone else's code, it looks the same everywhere... And it's stuff like that, that low-level stuff. There's no reason to want to be creative with that, unless you're playing code golf, or something I guess... Which I guess you can write your own macros and things if you wanna do that. But I really like that when you're reading Go code, all you have to learn is the domain. You don't need to learn a whole different set of conventions. This is something that I've struggled with with reading Ruby and JavaScript code for many years... Because at pretty much every job I've had that's been in Ruby or JavaScript, we've always had a debate about what styleguide we wanna use... And this is always just such a timesink, because it doesn't matter. Ultimately, you should pick one and introduce some automation that enforces it. It's not a good use of developer energy.

I have this idea, I think every team has a certain amount of -- almost like a friction budget. There's a healthy amount of disagreement that every team can go through, but you still feel good about what you've done at the end of the day. Some teams have a higher friction budget than other teams, depending on how gelled you are... But it's not a good use of that friction budget to argue about things like syntax and styling. You should spend that energy arguing about bigger things, like "Are we actually serving our users? Are we actually architecting our systems in the right way, or are we thinking about scale?" You know, the more interesting, open-ended questions... Not like "Oh, how many lines do you want your conditional to have?" That's not a good debate to have. So that's the first reason.

The second reason I really like Go is because I actually think -- I've spent a lot of time thinking about the structure of functions, and I really love that Go, by and large, if you want to know what the happy path, the intended return value of a function is, you look at the bottom; the last line is your happy path. And many Go testing libraries -- or not the testing libraries themselves, but the way that people write tests kind of reinforce this standard.

I think about, when I make a method call, the execution kind of ping-pongs through kind of like a pinball machine... You know, when you play pinball, the ball goes through the top and it goes down to all the flippers, and I visualize myself like flippering away the edge cases... So at the bottom, all that's left is the straight path. With that sort of mental image I started thinking more about how the Ruby code, and the JavaScript code, and the code in other languages that I've struggled to read the most has always been code that has a lot of cyclomatic complexity - a lot of conditionals, a lot of nested statements, a lot of visual misdirection. So sometimes the happy path will be nested inside three layers of ifs, and it's like "Well, how was I supposed to know that?"

**Johnny Boursiquot:** Right, right.

**Denise Yu:** But I think Go strongly discourages that, and encourages a kind of linear logic flow.

**Jon Calhoun:** It's interesting that you mentioned the happy path, because as far as I can tell, there's nothing specific about Go (the language itself) that enforces that. It's just kind of the convention everybody's adopted, and I don't know if it's the fact that all the developers who were working on it were working on complicated enough problems that they were like "We need some sort of sanity check here" or what... But all these other languages - there's definitely no reason why they couldn't do it.

I remember when I first started programming - I think it was Java, is what I saw it in... And there were people who made the argument that if you ever have an if statement, there should be an else statement. And in Go it's the exact opposite argument. If you can avoid that else statement, go ahead and avoid it. Just return or do whatever you can, and get everything back, so that it's not indented any further. So it's interesting to see those differences.

It's also interesting to hear you talk about it this way, Denise, because we've had Dave Cheney on the podcast before; last time we had them, he basically had just published the Zen of Go website, which basically kind of fell out of a talk he gave -- I believe it was at GopherCon Israel, or something like that... But basically, he was making the case for not really treating idiomatic Go - what we consider idiomatic Go - as Gospel. And I could definitely understand where he's coming from.

\[00:12:20.11\] At the same time, a part of me was like "Yes, absolutely, don't let the idioms in the community become a barrier, or some sort of gauge as to whether you're a good Go developer, or not so good, or whatever it is. Don't use it as a barrier." But I think in a lot of cases it also helps to instruct and guide. It provides this guard rail for folks to have an idea, "Okay, I could write Go like Java (I call that Gava), I could write Go like Ruby (I call that Guby)", you could write it to look and feel like other languages that you're perhaps coming from or that you're more comfortable with... But that would look a little weird as a Go project; that would look a little weird within the ecosystem of other Go projects. So when I read that code, if it didn't look like other Go projects, even though syntactically it could be compilable and there would be nothing wrong with it, but it would still feel wrong; perhaps that's too strong a word, but it would simply be not idiomatic.

I'm wondering how you see the idioms of the community. Do they help/hinder, did they help you in your learning? Do you sometimes find yourself deviating? How do you treat what we generally refer to as idiomatic go?

**Denise Yu:** Personally, I try to follow idioms as much as possible, but I also acknowledge that I've been programming for a couple years now, and for me learning a new language's idioms is not such a high barrier anymore, because I've done it for a bunch of other languages by now... The one thing I think makes onboarding a little easier is that Go ships with tools that in a lot of times enforces these idioms. For `gofmt` for example. I don't know if you consider spacing and indentation part of a language's idioms - maybe, maybe not. But if you just run Go Format, it's not even something you need to think about.

**Johnny Boursiquot:** Right.

**Denise Yu:** On the point of people writing Go like other-languages-Go - when I worked at Pivotal... And bless their hearts, when I started out, I didn't know what Go conventions were, and I just kind of copied the pattern that was in front of me... Which by the way, people always copy the pattern in front of them. So I think that fact doesn't get leveraged enough as a teaching tool... So we can do a better job at putting the right patterns in front of people early on in their learning journey with a new language or a new tool. I think that's a very powerful lever to pull on. But when I was at Pivotal, we very much wrote Go as if it was Ruby. We even used behavior-driven testing suites. We used the test runner in an assertion library called Ginkgo and Gomega, which I don't' know if you guys have come across that before...

**Johnny Boursiquot:** Yeah, I'm familiar with them...

**Denise Yu:** I've since learned, after talking to people who are outside of the Pivotal Go community that those two libraries are quite contentious out in the wild, because they ease the developer who knows Ruby and RSpec into learning Go... But you don't learn the Go way along the way; you're just sort of like insisting on following the Ruby way.

One of the things that was a source of -- not tension, but just like a source of frustration for developers that I worked with at Pivotal was Ginkgo has a before hook and a just before hook... And the idea -- say you have a file that's for the whole package, or something... Maybe that package has methods that each need setup to be a little bit differently... So if you have your global before, you can nest contexts, and within each context you can run a just before, and then add some different flavor just for each context... Which - if you don't know about the existence of just before, and you go to the top of the file and you're like "Okay, that's weird... My before is running. What's this extra side effect that's swooping in right before this test executes?" And that would be the just before hook, which - I don't wanna talk about how many hours I've spent debugging that. \[laughter\]

**Johnny Boursiquot:** \[00:16:25.08\] Yeah, that's the thing... It's like, there's a feature or an approach that these libraries bring, that if you don't know what the team's convention for using these things are, it could easily bite you.

I'll admit, when I first saw those libraries, I was like -- I mean, the language I was using the most right before Go was Ruby. So when I saw these things, I was like "Hey, I can do RSpec style of development in Go. How cool is that?!" I saw it as really like an on-ramp into Go development. And the more I learned about Go and the standard library, what you can do without any additional stuff or any additional packages and things, the more I started to see the advantage of using the standard library and the things that it comes with, that you can do out of the box. I sort of stepped off the whole BDD train, but I started using assertion libraries.

Testify has been and remains one of my favorites. Before I bring in Testify, I'll try things out with just plain, standard library, just with the testing package, and a lot of times it works just fine. I might add the cmp package from the Google folks, just to do comparisons and diffs and stuff for a test output... But really, between the standard library and that package, it offers the vast majority of what I need on most projects. Again, I'm not saying that if somebody wants to use those packages, will they make life easier for transitioning from a different language that has an assertion library; I'm not saying you shouldn't, but I always tell folks, "Hey, try the standard library first, and then see what you need." It's almost like "Don't start with all the things. Incrementally add things as you need them."

Like you, I saw Go as -- it sort of made me a better engineer overall, because it forced me to take the simplest path, and then only really bringing in things that I needed it to, when I needed it to. Interesting how that works, but... I'm not fighting it.

**Jon Calhoun:** I agree with you, Johnny - we need to try those things; it definitely makes sense. It's kind of like when you're getting in the pool, you don't have to just cannonball in the deep end; you can ease your way in, gradually... And if using those tools helps you, that's fine. But one of the side effects to that is, like Denise said, if you have a big company with a big project and they never really move off of those, or if they sort of stick with it, it's almost like they're using Go, but they're not really using it the way everybody else is. They're not necessarily getting the full benefits that could be there.

Now, that doesn't necessarily mean that they're doing a terrible thing or anything, but it is potentially affecting their experience with it. So it's kind of a double-sided blade, where you've gotta choose when to maybe try something else or see if that make sense, and when it's not really a good learning tool.

**Denise Yu:** Yeah. And the last time I worked at Pivotal on the Concourse team -- so Concourse is different from the other projects, because it is fully open source-facing, so anyone can send a PR to Concourse. So towards the end of my time there we actually were experimenting with not using Ginkgo and Gomega anymore, because that does represent friction for new contributors... Because Pivotal is probably one of a handful of companies that use those two tools aggressively. But if you've never seen that before and you're like "Oh, I wanna just submit this little bug fix", and then you go look at the 800-line Testify you're like "Oh, God... I've gotta add a test into this thing..." \[laughter\]

It's much better to just choose actively the most popular path, which is to just use go tests, or something more lightweight.

**Jon Calhoun:** You can see this in other languages, too. Even in Ruby, so many people use RSpec that while there are other great ways to test there, you almost have to use RSpec because everybody is used to it and they're familiar with it, and if you want your project to be open source, that's kind of the path of least resistance.

**Denise Yu:** Yeah, exactly. That's a great way of putting it.

**Break:** \[00:20:27.00\]

**Johnny Boursiquot:** I wanna shift a little bit into -- actually, you spoke at GoCon... Was that two years ago, three years ago now?

**Denise Yu:** Actually, it was about last year.

**Johnny Boursiquot:** Was it? Wow...

**Denise Yu:** Yeah.

**Johnny Boursiquot:** Okay...

**Denise Yu:** I know the last two months have felt like a year each.

**Johnny Boursiquot:** Literally, ever since the lockdown, the days have started melding into each other for me... Now a week that goes by feels like a month. It's kind of crazy... But you spoke at GoCon, and the following year you joined the organizing team, right?

**Denise Yu:** Yes. Yeah, this past year I was -- well, I guess I still am on the organizing team. Just because the conference didn't happen doesn't mean I'm not an organizer...

**Johnny Boursiquot:** Right, yeah. So you joined the organizing team... And yeah, pretty much y'all had everything just set up and ready to go; you were reaching out to speakers, and putting the finishing touches on things, and then obviously the whole Covid-19 thing happened, and now you're basically having to cancel the conferences here... I'm sort of curious -- well, first of all, I'm hoping that you and the organizing team are gonna bring the conference back next year. When exactly - that's TBD, but hopefully that's something that's gonna come back.

I'm wondering, now that you've been part of the organizing side of the conference, what have you learned from that experience? I'm asking purely from somebody who organizes events, and everybody has a little something they'll do different... So specifically within the context of the Go community, what have you learned about organizing this conference?

**Denise Yu:** I learned a lot... I just didn't realize how many moving pieces there are to event production. Because I've also only done community one-off events, meetups and that sort of thing. Meetups and conferences are not the same thing. With a meetup you get one venue host, you maybe get a couple hundred dollars for pizza, and you just throw an event on Meetup and that's pretty much it. All the infrastructure is already there.

But for a conference, you've gotta -- it took us two months probably to find a venue, because we were aiming for 350 people, and it turns out that's a very awkward size for an event, for venues. Venues are either small, sub 100, or they're over 500. There's not that much in the middle... And we also wanted to balance things like closest to public transit; would it be in a neighborhood that was relatively interesting? Could people go for a walk, go outside if they wanted to?

We were trying not to do a hotel ballroom, because Toronto has a lot of interesting buildings, and I think we were hoping to find a venue that supported -- I don't know, something that wasn't like a giant international hotel chain. \[laughter\] Of course, we would need to get a hotel anyway, to put our speakers in, so we couldn't avoid giving money to hotels... \[laughs\]

\[00:24:10.03\] So the venue that we ultimately found was the Isabel Bader Theater, which is part of the University of Toronto. I had actually learned about the theater because they do all sorts of events there, and my partner and I went there because one of our friends was performing her community orchestra there... And when we turned up for the concert, we were like "Wow, this is such a great venue. The seats are so comfy... Wouldn't it be great if we could have a conference here?"

So as the conference time approached, we were looking at lots and lots of different venues. It's difficult also to find a venue that will give you flexibility over catering. We didn't need 100% flexibility; we didn't wanna bring in 100% of our own, or anything... We just wanted something that was at a reasonable cost.

A lot of these venues are geared towards weddings. So the second you say "Large event" or "Conference", they're like "Let me tell you about our $99/head banquet package." And we're like "We don't really need $99/head. We want this to be affordable for everyone that's coming." So that's just the logistical side of it.

In terms of -- what else...? This was a couple months ago, and I feel like my brain has kind of forgotten a lot of things in the last two months of just general pandemic chaos.

**Johnny Boursiquot:** Did you work in a program as well? Like, try to figure out what kind of talk, and from whom, and all these things?

**Denise Yu:** Yeah, so we kind of divided and conquered in terms of what each person wanted to work on... Because we had a team of six or seven people. My main area of responsibility was the program... Because I speak at a lot of conferences, I could deeply empathize with people, especially -- I feel like I'm always empathizing with the first-time submitter, or with the person who's kind of new to the community, who doesn't feel 100% confident in casting their net out there... So we went through several rounds of copywriting for the actual CFP language, and I spied a lot on other CFPs that were open at the time.

Special shout-out to the DevOps Toronto team; I think they did a really good job of spelling out, like "This is the type of assistance we can give you if you're a new speaker. Here's who we want to hear about. Here are the things that you shouldn't be worried about. Don't worry if your talk is not technical enough; don't worry if you feel like it's too introductory. We anticipate a very diverse audience in terms of experience level, so there is room for every type of talk."

One thing that we didn't fully align on and was kind of an ongoing conversation was who was the intended audience for this conference... Because Canada doesn't have another Go conference. This is the only Go conference in Canada. Certainly the only one in Ontario, certainly the only one in the Greater Toronto Area... So we kind of went back and forth on whether we wanted to prioritize local representation, because we wanted to use this as a chance to create some local voices, leaders in the Go community... But if we did that, we also wanted to make sure that whoever we were giving a platform to, we want a diverse speaker line-up. Even if it doesn't represent the current Go community -- because I know that in the last community survey I think only between 5% and 10% of Go developers self-identified as women, I think. It was a pretty low number, and our gender balance was much higher in terms of non-men to men; it was much, much higher than that. So I was really happy with that. Out of a line-up of 17 speakers, I think we had 5 or 6 non-men speakers...

**Johnny Boursiquot:** Nice.

**Denise Yu:** Yeah, it was really -- it was hard to find those people. We didn't do as much community outreach as I would have liked to. We just kind of ran out of time on that... But we did spend a long time going through the CFP.

Oh, actually - I wrote an application for it... \[laughter\] I was out of work at the time, and I didn't like how PaperCall -- like, no offense if anyone from PapelCall is listening to this, but I didn't like PaperCall's built-in mechanism for sorting through submissions... Because my requirements were I want multiple reviewers, and PaperCall caps you at five people... But I was like "Well, we have seven people, and possibly more, if we decide to bring on guest reviewers." So I want an unlimited number of reviewers.

\[00:28:22.26\] I want the author, the organization and identify details to be not shown by default, and I also want the ability to edit the content of the abstract, in case someone said "Oh, by the way, I'm blah-blah-blah, and I work for blah-blah-blah" just in the abstract itself. PaperCall won't do that for you; PaperCall just hides the name and the email something like that.

So I actually built an app in Node.js, from the ground-up, that you export all your JSON from PaperCall and you just put it into the app, and it displays every single talk as it's own -- like a submission form. I totally \[unintelligible 00:28:55.11\] the login process. I put it on Heroku, and I was thinking -- I basically had a one-person hackathon for four days to crank this out... And the last night, I was like "Ohh, authentication... I really, really don't want to think about OAuth right now. I really don't wanna build a Twitter login, or something like that..." So what I did was I just put a map of keys and values into the Heroku app environment... \[laughter\] That was people's usernames and passwords.

**Johnny Boursiquot:** \[laughs\] Okay, as an SRE, you've been officially slapped on the wrist. \[laughter\] Wow.

**Denise Yu:** I know, so bad...

**Johnny Boursiquot:** But hey, you shipped it... There's something to be said for that. And it worked. I imagine it worked for what you were looking for.

**Denise Yu:** Yeah, exactly. And as soon as the review process was done, I spun down the app... I think. I should check on that, actually. \[laughter\]

**Johnny Boursiquot:** So I can totally feel you with regards to having a diverse speaker pool. Folks just don't know how hard that process is, for a number of reasons. I've come across folks who are very talented, super-smart, that don't fit the typical demographic... And you say "Hey, come give this talk. You'll do great", but they have so much self-doubt, like "I don't think I can do this..." I'm like "No...! Believe me, you can!" It takes so much convincing... And obviously, I think our industry is to blame for that. For so long we weren't really paying attention to any of that... But now that we are, it's not something that's going to change overnight, and that's what I usually try to tell folks... Like, "Hey, this work that you're trying to do is hard."

I know that it's hard because it's not going to change overnight. It's not like all of a sudden when we start paying attention to the problem you're gonna have all these great speakers that don't fit the typical demographic... Like, these people are just gonna come out of the woodworks - no. You're gonna have to do a lot of outreach, you're gonna have to find them, convince then, and really be more welcoming for these folks who step out and really take on these roles.

So I definitely applaud you for doing that work, and I definitely know that it's not an easy task at all. I do wanna touch -- so your job as community and safety... Every time you say the title for that job, I'm like "Hm, what is that...?" So you talked about the policy aspects, and how that sort of works with the engineering policy aspects of things... I'm wondering, what is your day-to-day like? When you're worrying about community and safety, what does that mean exactly? What's your day-to-day like for that?

**Denise Yu:** Sure. So my team is a very interesting team, because community and safety -- first of all, it's quite nebulous. Most people think "Oh, you're like \[unintelligible 00:31:48.06\] team. You're the support teams that handle user complaints, and abuse reports" and we're like "Well, no." GitHub actually has a separate team called User Policy for that mission.

So community and safety exists to build tools to help maintainers grow sustainable and healthy communities. I think that's the shortest summary of it that I can think of. What that means in practice is there are a lot of different features scattered all throughout GitHub, where individuals can be either reactive or proactive.

\[00:32:22.28\] I'll give an example of reactive... Let's say you're arguing with someone on a GitHub Issues thread, and they start becoming really abusive, and they start cussing you out, or just being unpleasant. So for a long time, all you could do was report that all the way up to GitHub admins... Which is a good strategy, and that's definitely a very valuable layer to have... But the problem there is site-wide admins don't have all the context; they would have to maybe go back through lots and lots of previous comments and try to figure out exactly what happened, what led to this moment, as part of investigating whether it is a high-priority incident to respond to.

A feature that my team introduced is called tiered moderation. Most of this work was done before I got here, so I'm not taking any credit for the engineering work. This credit goes to the community and safety team before I got there. So tiered reporting means that - well, okay, if you don't report all the way up to site admins, who else can you report to? So a more logical person actually would be the maintainer team of an organization... Because if you've been working on an open source community for a number of years, you kind of know who the problem actors are, and you kind of know who has good intentions, but maybe struggles with written communication.

So if you now give people the option to report to community maintainers, that's another layer of this sort of progressive escalation, I guess, that we give to community members. Community maintainers also might be in a better position to reach out to the person who's being aggressive and just find out "Hey, what's wrong?" Maybe someone is really stressed out because of this global pandemic that we're all living through. Maybe someone misinterpreted something. We sort of give people tools to assume best intent, but take action for the safety of the community. That's kind of reactive.

Some proactive things we do are we will try to design the site in a way that encourages positive interaction. Now, maybe after Satellite - I'm not sure when this feature will launch, but if you go to open an issue on a repository, there will be a screen that asks you "Okay, is this a bug report? Is this a feature request? Is this just a question you have about using the app?" And if it's a question, it'll redirect you to somewhere else. That helps to make the issues fire hose more manageable for maintainers. I don't know if you've ever been on the receiving end of thousand of GitHub issues, but it's so hard to wade through, and a lot of people have come up with their own engineering solutions over the GitHub API to try to visualize issues in a way that's more manageable.

So it's things like that... There's a lot of room for engineering. One of the things that I've been working on lately is improving abuse reports, and -- what else...? There's a new thing that I'm working on, but I don't think I can talk about it yet, because I would need to go through the release channels for that... So maybe I'll circle back to you in a couple of weeks about that.

**Johnny Boursiquot:** Cool.

**Jon Calhoun:** So would your team be the team that's in charge of releasing features like the templates they have for PRs for issues, and that sort of stuff? Is it that type of stuff, as well? Or is that outside the bounds of what you work on?

**Denise Yu:** I feel like issue templates and PR templates are probably owned by the teams... Because there's a team that works on issues and a team that works on PRs.

**Jon Calhoun:** I don't mean actually creating it, but the feature that enables that to work.

**Denise Yu:** Oh... I'm not 100% sure. I can check on that though. There's a lot about what this team does and doesn't do that I don't know yet.

**Johnny Boursiquot:** Yeah, that's part of the beauty of a brand new environment, brand new team, brand new job. You're learning on the job, right?

**Denise Yu:** Oh, absolutely.

**Johnny Boursiquot:** \[00:35:55.21\] I wanted to talk a little bit about the drawing lessons that you've been doing for the internet for the last few weeks. What brought that about? Tell us about that - what is that, what are you trying to achieve there? \[laughter\]

**Denise Yu:** So for the last few years -- okay, so it's kind of a funny story why I started doing sketch notes in the first place... Back in 2018, maybe end of 2017, I worked at Pivotal in London. And if you were a member of the tech community in London around that time, most people know Pivotal as the office that will host anything... \[laughter\] We will host any meetup, we will buy you pizza, we will let you drink our beer... Just say the word, and if there's an employee who can be here physically to host it, then our space and our food and drinks are yours. A lot of my friends knew this fact, and they would bring their meetups \[unintelligible 00:36:47.01\] the person hosting them.

So one day, my friend said "Hey, there's this sketchnoting community. Do you wanna host them?" and I said "I have no idea what that is, but that sounds great. Bring them over. We'll get pizza." So they came, and I actually ended up attending quite a few sessions. We hosted probably 3-4 sessions, and it was really cool.

I always drew things when I was a teenager. My favorite thing to do to procrastinate doing homework was to draw anime characters when I was growing up... But I hadn't drawn for a very long time, and it was something that I had forgotten how much I enjoyed, until I started doing the sketchnoting meetups again... So a couple months after that, in early 2018, I did a product management rotation at Pivotal, and one of the things I had to do for my job was to push out lots and lots of communication... And I found that sometimes I would send an email to either all of R&D, or just a couple of other teams, and my emails would say "Breaking changes in our API. Be aware of this", and people would miss the email. It would get filtered away, and they would never see it, and then a few weeks later someone would come to me and say "Hey, my thing broke", and I was like "Yes, I told you this was going to happen. You just didn't read my email."

So I started an experiment - I started sketchnoting my announcements instead of writing them in email, and engagement rate went through the roof. I was having VPs respond to my email, and I was like "I didn't even know this guy was on this mailing list, but that's cool..."

So I found that that was a really powerful way to get people to look at things that you were saying... And I liked also the frequency of people coming and saying "My thing is broken." That went down a lot after I started doing this, which was great; that was my intention.

**Johnny Boursiquot:** That was the goal.

**Denise Yu:** Yeah. But then just for fun, I started trying to sketchnote people's conference talks. I would go to industry conferences, and also community conferences, and picked talks that I was kind of interested in, sat there and sketched. I started out just doing pen and paper. Eventually, I got an iPad and started doing it digitally... But I found that of all the interactions that I had at conferences -- you know, when you go to large conferences, you get kind of tired after a few days. Not every interaction is gonna be positive. If you're speaking, I find that people generally tend to be nicer than -- I don't know... But once in a while, if you're speaking, someone will ask a rude question, or a question that's not really a question... Things like that. You have mixed experiences there.

But I've found that when I started producing art of other people's talks, people universally loved that. Nobody was ever mean about a piece of art that I created. The speaker was almost always so surprised, and so excited that someone had visualized their talk... So that kicked off a cycle where I was like "Huh. There's something here." If I can start off by sketching other people's talks and give them greater outreach... And actually, to this day, I still get a Twitter notification every few days, because a year and a half ago I went to the lead developer in New York City, and Tania Riley was there speaking about being blue, the idea of doing all the "non-technical" work that teams need to keep running... So I sketched that talk and published it, and every couple of days someone finds that and retweets it again. It just keeps coming back.

\[00:40:15.06\] The talk itself is really great also, but having a visual accompaniment to that talk enables someone to sort of look at it and say "Oh, this looks really interesting. I now am going to go and invest 30 minutes in watching the original, full-length talk."

So my intention is never to replace the information that's in the talk, it's more to give people a high-level overview of what happened in it, and help them make an informed decision about whether they want to invest more time digging deeper and going to watch the original.

Inevitably, as I started producing more of this on my own, people started asking me "How do you do this? I wanna learn how to do this. Can you teach me?" I was like, "Um, I can try..."

The first time I tried to teach it was at -- I think it was at Write/Speak/Code last year. The same conference where I met Lexy. So I ran a two-hour-long (I think one-and-a-half hour or two hours long) workshop where I broke down sketchnoting into a couple different basic skills. One of them is being able to draw humans and being able to give them emotions. Another is drawing shadow, like shading things 101. All of the lessons are geared towards people who don't self-identify as artists; people who say "I can't draw. I can't even hold a pencil."

**Johnny Boursiquot:** That's me. \[laughter\]

**Denise Yu:** And I think I've gotten a lot of encouragement from a few specific people... One of them is Marlena Compton, who runs AppearWorks; so Marlena and I, and also our other friend Kaitlin Gu are teaming up to -- we're running a whole conference about this in two weeks, called Let's Sketch Tech.

**Johnny Boursiquot:** Yeah...

**Denise Yu:** The other person that has really been such a vocal cheerleader is \[unintelligible 00:41:56.09\] from Microsoft. Basically, anytime I put anything online, Nithya's like "Instant retweet. Do more of this. You're awesome. I wanna see more." So I kind of wish that everyone could have a Nithya just in their corner, just cheering them on for whatever they wanna do...

**Johnny Boursiquot:** Yeah, like they're always cheering you on... That's awesome.

**Denise Yu:** Exactly, exactly.

**Johnny Boursiquot:** I'm checking out the website right now... It's letssketchtech.com.

**Denise Yu:** Yes.

**Johnny Boursiquot:** You can register for different days... Yeah, the next one coming up on May 9th is "Telling stories with doodles." You can absolutely register for it. This is such a cool idea. I might have to jump in on this.

**Denise Yu:** Yeah, please do.

**Johnny Boursiquot:** Because I'm like -- I have a very clear understanding of the value that visuals play in communication. Some of my best talks, I had folks come up to me and say "Hey, that visual you had on this slide, or that diagram (or whatever it is), I could really appreciate that." And you can easily give them that sheet, or that image, or whatever it is, and it packs so much information, because you're visually representing -- they say an image is worth a thousand words for a reason, because you can communicate so much when you go beyond just text... And this is something I encourage folks who are putting talks together all the time... Like look, there are two very specific things you can do to make sure your talk, beyond the content itself -- your content can have value, but that's table stakes; there are two things you can do to make sure it's well-received. One, tell stories around it, and two, use good visuals. Don't fill your slide with bullets, and text... Nobody's gonna read that stuff. It'll just put everybody to sleep.

If you can tell stories and if you can have visuals around things, illustrations... That's sort of the next level I wanna get to. I wanna have illustrations in my talk, I wanna draw some cats, like you're teaching people to do... \[laughter\] Because these things do make for a more engaging and a more fun experience. And proof you've got by starting to add these things, sprinkle these things in your announcements... And you saw the effect - people were reading them, they were engaged, and it solved the problem. So I think this is absolutely definitely worth it. So for all those listening, do check it out. It's letssketchtech.com. Yeah, I definitely will be checking this out myself, because I need some help, because my doodles are terrible. \[laughs\]

**Denise Yu:** \[00:44:20.26\] The conference is also kid-friendly, so if any of your kids wanted to come...

**Johnny Boursiquot:** Nice!

**Denise Yu:** Jon's daughter might be too young for it... \[laughs\]

**Jon Calhoun:** A little bit too young. So when you're drawing, do you also find that -- because you do ones about specific topics... So when you're doing that, do you find that it forces you to think about how to explain the topic from a different perspective? When you're writing up a blog post, you kind of have the world; you can go on as long as you want. And with a single-page sketch, I assume that that limits you and forces you to think more creatively about how to present this material.

**Denise Yu:** Yeah, definitely. I've been really inspired by seeing Julia Evans' work over the years, and one thing that Julia has spoken about is the most difficult -- or I don't know, it's the most difficult for her, but she has called out that it's very challenging to distill a complex concept into something that'll fit a tiny space... Because when you're making these visuals, the point is not to capture everything. You wanna capture just enough, and then complement it with something visual. So that part is definitely tricky; that takes a lot of practice. I still sometimes err on the side of being too wordy.

**Jon Calhoun:** I think that's hard to break, though... I've heard several people state that it's harder to write something that actually gets the point across in fewer words than it is in more words, for almost everything... And I imagine when you're drawing and doing stuff like that with it it's even harder, because you're trying to toss the visuals in there, you want it all to make sense, but you also wanna not just go on forever.

**Denise Yu:** Yeah, definitely. One thing I do pretty often, especially if I'm making a drawing to force myself to learn about something new - I get people who know more about it to review my work. Or I just straight up partner up with someone who knows the subject matter really deeply.

I have one drawing about the Raft consensus algorithm... Because - what else are you gonna do on a Saturday afternoon? "I'm just gonna draw the Raft consensus algorithm..." But I have partnered up with my friend Matt, who lives in London, and he is a distributed systems pro. He knows a lot about that. So I was like "Alright, I'll take care of the visuals. Let's pair on this, let's jump on a call. We'll do version one together, and then I'm gonna send you over the final version. Literally, you just tell me if I have captured anything inaccurately."

**Johnny Boursiquot:** That is pretty cool. It also seems like you have a newsletter going on. Are you actively publishing content? Where do I sign up?

**Denise Yu:** It's not really a newsletter, the way that some people use it to sort of like talk out loud... I am trying to only use that newsletter to blast out announcements about upcoming workshops and events that I'm taking part in, that are mostly free.

**Johnny Boursiquot:** Cool.

**Denise Yu:** I don't know, I'm kind of on the fence about whether I should send a blast to everyone to tell them to buy tickets for the conference... But I've been kind of lazy about it lately, because I've just been kind of low on headspace, with the pandemic and everything...

**Johnny Boursiquot:** Right, right.

**Denise Yu:** But my intention is to run more free workshops at a regular cadence. I initially started off saying "Look, I'm gonna do this twice a week", and then I was like "Oh god, that's so much work, to set up an event, and do the marketing, and everything..." So I just kind of stopped doing that. But I've recently started working with the Microsoft Reactor team, which has actually been fantastic. We did a workshop this past Saturday, and they were just so great. \[unintelligible 00:47:28.13\] They handled the event setup on Meetup, in like three different Reactors, and at one point we had like 105 people watching the stream, which was really wild. I had no idea that many people wanted to learn how to do tech sketchnoting... So that was awesome.

So if I do future events, probably the more put-together ones will probably be in collaboration with the Reactor team... Which I'm pretty stoked about.

**Johnny Boursiquot:** \[00:47:59.02\] That is pretty cool. It's definitely one of those things where you look at it and you're like "Yeah, this is kind of cool." And obviously, because I follow you on Twitter, I saw some of your retweets, and you were talking about the sketching stuff - I was like "This is kind of cool. Here's another person in the industry that I respect, and they have a hobby. I could use a hobby... I could use a hobby, too." \[laughs\]

Yeah, this is awesome. Do keep doing it... I think especially in this season that we're in now, where everybody is sort of low on headspace, like you mentioned... Something like this, where it just kind of takes your mind off of things is absolutely valuable. Thank you for doing it, and I hope you will keep on doing it.

Jon, anything else we wanna touch on before we ask Denise to drop her unpopular opinion? Denise, did you prepare an unpopular opinion?

**Denise Yu:** I'll think about it right now...

**Johnny Boursiquot:** Judging by the look on your face... \[laughs\] Judging by the surprised look...

**Denise Yu:** I'll think about it right now.

**Johnny Boursiquot:** Okay, good.

**Denise Yu:** Okay, I have one.

**Johnny Boursiquot:** Jon, do you have the music for Unpopular Opinions?

**Jon Calhoun:** I do. Before I play it - Denise, it doesn't have to be tech-related specifically. It's kind of anything you want... So don't stress yourself out.

**Denise Yu:** Okay.

**Jon Calhoun:** Are you ready for the music, Johnny?

**Johnny Boursiquot:** Hit me.

**Jingle:** \[00:49:19.23\]

**Denise Yu:** Okay, I thought of one.

**Johnny Boursiquot:** Yeah, please.

**Denise Yu:** My unpopular opinion is that buying and selling turnips in Animal Crossing is overrated.

**Johnny Boursiquot:** Oooh. Okay...

**Denise Yu:** Because I think Animal Crossing is an entire game about the journey, and grinding Bells is part of the journey. So if you sell a bunch of turnips for whatever price they peak it - I think that fast-tracks you past the parts of the game that I think are fun.

**Johnny Boursiquot:** Okay, okay... That's good. First of all, I was gonna ask "What is Animal Crossing?", and you said it was a game, so thank you for that... \[laughter\]

**Jon Calhoun:** Johnny and I don't play -- like, I don't play this game, but I've heard that it's a lot of farming...? Not like agricultural farming; farming as in like doing repetitive tasks a lot...

**Denise Yu:** Yeah. There also is agricultural farming though... You could grow flowers and trees.

**Jon Calhoun:** Well, a little bit of both then.

**Denise Yu:** It's a game that came out on Nintendo Switch, and basically almost all of my friends are playing it. I only got it a few days ago, because I left my Switch in Toronto, and I'm in New Jersey now, so I have to actually order a new Switch to play with... \[laughter\]

**Johnny Boursiquot:** Wow... It means that much to you!

**Denise Yu:** Yeah, I know. I was desperate. I was like "Okay, I can't handle this FOMO of seeing everyone else's islands on Twitter anymore. I'm just gonna buy another one."

**Johnny Boursiquot:** \[00:51:10.01\] Wow... \[laughter\] Awesome. Okay, well, for those who do play Animal Crossing - yeah, this will either anger them, or they'll be like "Yeah, yeah! I agree!" \[laughter\]

**Jon Calhoun:** I think you could make the argument generally about a lot of other games though... I feel like people are impatient when it comes to games where there's some effort you have to put in to get someplace... They'll immediately take the shortcut of however they can get to the end, sort of, and then they miss that experience along the way.

When I was younger, I played Diablo II a lot, and they had ways you could just mod your files and give yourself all the gear in the game... But then as soon as you did that, you were like "Well, I don't wanna play anymore, because it's not fun now that I have everything."

**Denise Yu:** Yes, exactly.

**Jon Calhoun:** And you realize very quickly that the journey is the enjoying part of the game, it's not actually the end result.

**Denise Yu:** I agree with that.

**Johnny Boursiquot:** I can agree with that, because I have played Diablo. I played the original, Diablo II, and everything really in the Diablo series from Blizzard... So I can definitely relate to that, yes.

**Jon Calhoun:** Johnny.

**Johnny Boursiquot:** Yes.

**Jon Calhoun:** If you tell me that the mobile game is good, that's like an unpopular opinion that I'll hold you over for like two months.

**Johnny Boursiquot:** Wait, there is a mobile version of that?

**Jon Calhoun:** There is a mobile game.

**Denise Yu:** A mobile Diablo?

**Jon Calhoun:** Yeah, I'm pretty sure there is. Because at one point they were supposed to be announcing Diablo IV, and they announced Diablo the mobile game, and everybody got really, really mad.

**Denise Yu:** Oh, yes, I think this rings a bell... I think I remember reading about this.

**Jon Calhoun:** It was at Blizz - whatever their conference is - not that long ago; maybe a year ago, I don't know... But basically, they had this big thing like "Oh, there's the Diablo announcement" and everybody thought it was gonna be Diablo IV, and it was not. \[laughter\] They were like 'We have it for mobile" and everybody's like "What are you doing...?!" \[laughter\]

**Johnny Boursiquot:** "What is this nonsense?" It wasn't idiomatic, you know? It wasn't something the community was familiar with...

**Jon Calhoun:** And apparently, video game fans are very vocal about their unhappiness...

**Johnny Boursiquot:** Yeah, I'm not gonna say anything. I might get in trouble. But yeah, they're a very vocal group. Hey, to each their own.

Awesome. So this was fun, having you, Denise. Like I said before, I really wanted to introduce you to the broader Go community, because I think you're doing a lot of fun and cool stuff... And the role you're playing I think suits you quite well, in your gig... And yeah, we didn't even talk about the teaching stuff that you do; you help out with GoBridge as well, and all that stuff, and I'm sure folks will find out more about that when they look you up.

I definitely wanna thank you for coming on the show. This has been fun, and I hope we can do it again.

**Denise Yu:** Yeah, for sure. Thanks so much for having me.

**Outro:** \[00:53:57.08\]

**Denise Yu:** I've gotta get myself a podcasting setup like the two of you have...

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** Apparently, if you join the Go Time podcast and do it every week, they just send you a mic.

**Johnny Boursiquot:** Heeey... Not a bad idea...

**Jon Calhoun:** So it's really easy to do, you just have to show up every Tuesday.

**Johnny Boursiquot:** \[laughs\] That's right. Every Tuesday at 3 o'clock Eastern Time.

**Jon Calhoun:** It's actually not every Tuesday. If we get enough hosts, then we can sometimes take vacations.

**Denise Yu:** Every Tuesday for the rest of your life?

**Johnny Boursiquot:** \[laughs\] Well, you know, you can do like Mat; every now and then you take a break. Mat took a break today, so it's all good.
