**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 38, and our sponsors for today are Backtrace and the Ultimate Go Training Series. Today on the show we have myself, Erik St. Martin, Carlisia Pinto is also on the show - say hello, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And standing in for Brian today we have Johnny Boursiquot.

**Johnny Boursiquot:** Hey, hey.

**Erik St. Martin:** And our special guest today is a long-time member of the Go community and has a number of well-known projects that I'm pretty sure all of us have used. He recently became the community manager for the Go team... Please welcome Steve Francia.

**Steve Francia:** Hey!

**Erik St. Martin:** So how's things in the Go community management world? Actually, give everybody a little bit of a background on yourself first, for anybody who might not be familiar with you already.

**Carlisia Pinto:** And tell us your correct title, because I don't think that's it.

**Steve Francia:** That is not my correct title... We can start there. My correct title isn't all that accurate either, but I'm the Go team technical program manager, with an emphasis on the external usage of Go. But it's really an interesting role that does have community management as a part of it. Also, a good element of it is product management. Largely, I'm working to be a voice for the Go users to the Go team, and help strategically align the Go project in a scalable way, that meets the needs of all of its users.

**Erik St. Martin:** So this is from the perspective of people outside of Google itself, and their usage of Go and their needs, as opposed to internal...?

**Steve Francia:** It's all-purpose, but it's not specific to Google's needs. I treat Google like every other company that uses Go. We definitely are listening to their needs, but I'm not focused on those needs any more than I am any company that uses Go.

**Johnny Boursiquot:** So do you have a counterpart inside of Google who is focused on what Google needs from Go? Or how does that strategy work out?

**Steve Francia:** There's another project manager that's focused on cloud usage, and he does both internal, but primarily external usage. I don't know if we have yet, but we're looking to bring in someone similar to work with internal users and understand them a little better. But for the last few months, I've been kind of juggling both, and not well. I have to prioritize all users, versus just one set.

**Johnny Boursiquot:** I remember when you first joined in this capacity at Google, one of the very first things you were involved in was the whole dependency management conversation.

**Steve Francia:** Yeah.

**Johnny Boursiquot:** Is that something that you're sort of pushing internally, or did you just sort of bring it in as something to be addressed and then move on to other things? How does that relationship between the community and you advocating on our behalf to Google - how does that work, typically?

**Steve Francia:** \[00:04:02.24\] As someone -- we didn't really go into my background yet, so I'll speak briefly to it, because it's a good introduction to this topic. Prior to joining Google and the Go team at Google, I ran engineering in open source at Docker, and before that I ran engineering and lead open source in the developer experience at MongoDB. At Mongo I first discovered Go, we adopted it for a number of our projects there, and I personally fell in love with the language and started working on some side projects, some of which have grown far larger than I ever would have expected them to.

[Hugo](https://github.com/gohugoio/hugo) is one of them, it's a website generator. When I sat down to write it, I knew how I wanted it to work, but there was libraries that I needed to create it that didn't exist yet, so I wrote a number of libraries in tandem with Hugo. One of them is called [Cobra](https://github.com/spf13/cobra), another is called [Viper](https://github.com/spf13/viper). Those have really been broadly adopted through the Go community. So I came in from having a unique perspective of using Go both for personal side projects, as well as in a company environment, and having had those experiences, I was pretty familiar with some of the pains and rough edges, and dependency management was one. I highlighted that one with the team... It wasn't something that the team wasn't already aware of.

The team does listen to the users and tries to understand... One of the challenges is that the team works inside the Google infrastructure, so dependency management was something that they didn't have their own intimate familiarity with, in the same way that the users experience it.

**Erik St. Martin:** I think also in addition to that though, there's also a distinction for who's responsibility is it, right? Is dependency management part of the language or not, right?

**Steve Francia:** Yeah. Through a series of conversations we've tried a couple different things. One was we formed a working group, and I was closely part of this; [Peter Bourgon](https://twitter.com/peterbourgon) really drove this effort, to kind of address this need. It was a combination of people from the community and the Go team working together on it. Through that we've done a lot of diligence, had lots of conversations with different users trying to understand those needs... We're working on a prototype which has been released, and we're also looking at -- I think we're coming to the conclusion that for it to really work, it needs to be something that the Go tooling is aware of.

I'm not sure what conversation or experience arrived at that, but that was a critical thing for us to understand, because all the efforts by the community can only go so far. Without the Go leadership understanding the need, and realizing that it's something that to really be successful we need to make all of the tooling aware of, they could never bridge that gap. So getting the understanding to the team was a critical milestone in this.
There's still a long road ahead to delivering the right solution, but the work that the working group is doing is a huge first step towards that.

**Carlisia Pinto:** Just to get that straight... Peter Bourgon was leading the design and the specs, and [Sam Boyer](https://twitter.com/sdboyer) is leading the implementation - is that right?

**Steve Francia:** \[00:07:57.00\] I wouldn't frame it that way. I think Peter's leading the efforts. Peter is the one who really got the group together and ensured that they had meetings regularly and kind of set up the schedule. I'd call him more like a project lead. There's four people on the working group; I think Sam is definitely one of the active people in that, but there's four of them. I think they're all contributing quite a bit. I'm not sure if one of them is the lead of it over another, but I know they all meet regularly and are building stuff together.

**Carlisia Pinto:** Yeah, we had him talking to us two   I think.

**Erik St. Martin:** Yeah, I think it was two episodes back. Yeah, I think Sam focused on the packaging solver, kind of like the dependencies.

**Steve Francia:** Yeah, Sam loves GPS and that problem, and he's really spent a lot of time on it, so it makes sense that he'd be focused on it.

**Carlisia Pinto:** And I don't want to leave a question unanswered... [Cory LaNou](https://twitter.com/corylanou) is asking who is the person on the Google Cloud's side that's doing the work of advocacy? I think that must be [Francesc Campoy](https://twitter.com/francesc)?

**Steve Francia:** Yeah, Frances is the advocate for all of Go and Google Cloud, as well.

**Carlisia Pinto:** Got it.

**Erik St. Martin:** Recently - this was just a couple of days ago - you had published a survey from 2016 on the Go blog. I'd love to chat a little bit about that and maybe some of the things that surprised you, some of the things that you're proud about, things that you wanna work on in the future based on what you observed from this.

**Steve Francia:** Yes, so for those who aren't familiar, the Go team has never done a survey of this kind before, and it was a pretty massive undertaking; to be honest, I've never done a survey of this kind before either, but I recognize that there was definitely a need to get data from our users and to listen to them and to collect as much information as we could. So we set out to create a survey and to get our users' voices heard, and we did. We went through and we created a survey, we refined it through user testing and sent it to the community, and we had a phenomenal response. Over 3,500 people responded to the survey and we gained lots of insights into the different ways that we can address the needs of the Go community.

I will say a lot of the things that we learned were confirmations of the things that we had already suspected, but by doing a survey, it gave us great metrics around knowing... Like, "Okay, we know this is a problem for some users... Now we know this is a problem for 30% of users", where before it was somewhat speculative how big of a problem different things were.

So a lot of the things were reinforcement, but also giving a lot more accuracy into the extent of some of the challenges that we had. And of course, there were some new things that surprised -- I won't speak for the whole Go team, but there were definitely things in here that surprised me when I saw them.

**Erik St. Martin:** I think the other thing that doing the survey and having the metrics works well for is being able to basically timeline it out and to look next year and see how much you've grown and solved some of these problems. Prior to that, like you said, it's all been speculation.

**Steve Francia:** I think one of the great things here is we do establish a baseline, and we're able to see progress and how the community and user base evolves over time.

**Erik St. Martin:** Yeah, one of the things I was surprised to see was more than half of the participants use Go at work, and we can only speculate about a couple of years ago, but I'd have to venture a guess that there were a few big companies using Go in 2013-2014, but I'd say most people were probably hobbyists back then... It certainly wasn't half.

**Steve Francia:** \[00:12:05.09\] Yeah, if we go back... It depends how far we go back, but there was certainly a point - probably around the first GopherCon - when it was clear that Go was of interest to a large group of people, and yet the adoption wasn't quite there. And that's a normal growth curve of any technology - companies won't adopt something if there's not people that can do it, that know how to use it, so it really has to start with people's interest.

I guess we were all fortunate that Go developed the interest, and as we've seen it progress, companies are adopting Go more and more readily, so more and more users are being paid to write Go.

**Erik St. Martin:** What do you think the developer pool looks like right now? Obviously, you can only speculate there, but do you think that people have a hard time finding Go developers right now?

**Steve Francia:** I think there's a number of different factors to this. The first one is Go is actually a really easy language to learn and to pick up, and especially to read. This makes it so that a lot of companies aren't looking for Go developers; they're transitioning existing developers to Go, and that's a viable option. We're seeing that a lot across a lot of companies.

It's also the case that we don't have a great marketplace yet to find Go developers, especially ones with experience, because Go is relatively young, so a lot of job requisites... You need to have 5-10 years Java experience, or whatever the language is. It's gonna be very hard to find a Go developer with five years experience; there's just not that many out there, as the language is pretty young.
So it's kind of an interesting dynamic... I think in time this is one of the things that will definitely sort itself out, but it's pretty easy to adopt Go, and at the same time, the language being so young, it's hard to find people with many years of experience.

**Johnny Boursiquot:** This is where I think that obviously the makeup of the community is critical as well. I think in my travels to the Go community I find very enthusiastic people within the community. They're passionate about the language, and beyond that, they're passionate about building a great community. If you're attracting people who not only care about the language, but they also care about bringing everybody else, basically attracting other people into the community, you're gonna help solve this supply versus demand problem that obviously the business is gonna be looking at.

We do a lot within the Go community, whether it's through meetups or through community events... There's a lot going on to attract people to the community. I think that's gonna help a lot.

**Steve Francia:** Yeah, I think it's always a chicken and the egg problem here, but I think we've got a great community and really passionate people that love the language. And yes, a little more than half are using Go at work, which is great, but slightly higher is the number of people who are programming Go outside of work. These are mostly people who do it out of passion, and I think that just speaks to -- these are people that love to program and they found a language that they really love using, and that's something that other people see and they catch on.

I think there's some work that we need to do to make Go -- around the resources... Not really changing the language, but better resources and more support around our new users, but I think there's a lot of the core ingredients there that make Go  just a wonderful language, and people are gonna adopt it; people are already adopting it at a pretty brisk pace and I think that's gonna continue.

**Carlisia Pinto:** \[00:16:20.15\] There is so much to talk about community, and there's a lot about community in the survey... One thing that caught my attention related to community is a question that says, "What is the biggest challenge facing the Go project today?" and the top answer with about two percent (there were many answers to that) was "community." I don't know what that could mean... Do you have an idea, Steve?

**Steve Francia:** Yeah, so one of the challenges we have with the survey is it's really easy to present accurate results with multiple choice, or questions with already determined answers. And questions that had open text box answers - it's much harder to present that data. What we've done here is really kind of a simple metric - how often a given word appeared. In this specific question you're talking about, there really wasn't anything that could be gleaned by using that approach. There were just too many words and not enough consistency across them.

Reality is I was able to read all of the answers to every question, and there were tens of thousands of comments that people left. In this specific question there really wasn't a theme that emerged. I don't think there are things that the users really fear as big challenges the Go project faces.

I think there was a bunch of comments that people expressed, and a lot of them were even comments that said, "Because of this, we don't really have concerns." So in this specific question, there's not a lot you can gain from that chart.

**Erik St. Martin:** Alright... Because basically if I said "The community needs to come to a consensus on dependency management", dependency management is actually the thing that should be bumped up, not the word 'community', right?

**Steve Francia:** Yeah, exactly. A good example of a question where this did work well is when we asked people about what would improve the Go documentation. Overwhelmingly, the most common word was 'examples'. In reading through the hundreds of responses that we got to that, it was very clearly the case that users want more examples. With that chart, popular word did demonstrate pretty well what people expressed.

**Carlisia Pinto:** Yeah.

**Johnny Boursiquot:** Along those lines... The survey tried to also gauge what other languages are people coming from, that are sort of adopting Go. I'd be interested in your take of whether Go itself is seen as an elitist language, that it attracts a certain kind of developer or a certain kind of individual with previous experience in another programming language, be it dynamic or static. Do you think that Go is a good language for beginners and people who have never programmed before? Do you think there are things that we can do to attract the brand new to programming folks to the language, to the community?

**Steve Francia:** I heard a few different questions there, and I'll try and address each of them. For me, one of the big surprises from the survey was often I think of Go - and I think most of us do - as a language that people convert to from a different language... Mostly because Go is such a new language, most people already learned another language and they're coming to Go. And they bring with them - just like learning any new language - the foundation.

\[00:20:19.16\] I think one of the interesting things that I learned from the survey was one-third of the people who said that they had experience in Go said that that was the language they had the most experience in, more than any other language. This for me conveyed the idea that Go isn't just a language for people to convert to. It's a language that people are learning programming through, that they're coming to for the first time, or it's a language they've spent the most - I won't say most time in, because we asked expertise, and time isn't a very accurate measure of expertise, but it's the language that they felt they had the most knowledge about, and they felt the most comfortable using.
I think that was really interesting... I didn't expect that, and partly, I guess, I come in with my own perspective. I knew a good number of languages before Go, but it's interesting that a lot of users consider it their language of most experience. In fact, more users were in that bucket than any other bucket.

**Erik St. Martin:** I'm actually really surprised by that, because I probably come in with the same preconceptions, that most of us have experiences with other languages, we have years of history with those languages, so it takes a long time for our skill in Go to overtake our knowledge in a language we came from. So that's actually really surprising to hear that. People are getting more experience and expertise in Go than the languages they came from.

**Steve Francia:** For me what I realized was a lot of people are coming from dynamic languages. Javascript and Python are the two biggest languages; there's others in the list, but there are definitely some properties of dynamic languages that differ from Go. If we look at a lot of the documentation, the experience that the Go project has catered to with its early adopters, it wasn't as much the dynamic languages. For me, that was one thing that I learned through this. The second thing was what we just talked about, that a lot of people are coming to Go for the first time, or that their Go experience has eclipsed their experience in other languages.

**Erik St. Martin:** I think it's about time for our first sponsored break, but after that I wanna chat a little bit about the way people are using Go, because I found some of that stuff interesting, too. Our first sponsor for today is Backtrace.

**Break:** \[00:22:54.20\]

**Erik St. Martin:** Alright, we are back talking to Steve Francia, and we're talking about the 2016 survey results and some of the stuff that we find interesting there. Before the break I mentioned the uses of Go. One of the things that I actually found surprising was that web development actually seemed to overtake systems programming on there, because it felt at least in the early days that people struggled with how to do web stuff, because - as we were discussing - a lot of people come from Javascript and Python and Ruby into Go, so they're used to having things like Django and Rails and things like that. So I actually find it interesting that web development is the leader in the uses.

**Steve Francia:** \[00:24:25.24\] I'll clarify a little bit... We asked two questions, and they're easy to mix up because they're very related. One was "What areas do you work in?" and in that one, web development was overwhelmingly the number one option. If I think about that... I work for Google - is that a web development company? It probably is.

**Erik St. Martin:** That's fair.

**Steve Francia:** Google probably checks a lot of these boxes, actually... But the internet is such a prevalent part of what people do... At first I was surprised by that, but the more I thought about it -- you know, there's a lot of companies that are in web development, and this was one of the questions where you could pick as many answers as you wanted, so it does apply pretty broadly.

But there's another question, "What do you write in Go?" and in this one "web services", defined as a service returning HTML, was still over 50% of what people used Go to create. Now, this was another one where the total percentage is added up far more than a hundred, because people could choose more than one. But I think it's illustrative. There's no question people are creating web services with Go, and in large amounts.

**Erik St. Martin:** And even though they don't rank as high on the list, other surprising ones that were in there were embedded devices, people writing Internet of Things devices using Go.

**Steve Francia:** Yeah... It was interesting the spectrum that -- in the options that we asked, a lot of them were well represented. It showed a lot more diversity than I expected. I'll just speak for myself there, I was surprised by the diversity of the different areas that people worked in and used Go.

**Erik St. Martin:** Yeah. I've heard of some embedded stuff and security stuff, but I didn't think that it was enough to register. I didn't think it would show up, I thought it would be lumped into other...

**Carlisia Pinto:** So when you look at these answers in particular, Steve, do you have a feeling that the answers that are more popular by the areas where you want to invest in, or the opposite, you wanna bring up the areas that are less popular?

**Steve Francia:** It's a good question... I honestly don't think popularity was a big factor for what we were gonna invest in, alone; I think it's a combination of looking at where our weaknesses are, and comparing that to what the demand is for those things, and trying to pair those together. A lot of this post identifies some of our (I'll call them) challenges that we have ahead of us.

One of the things that I felt best from this was most of the challenges, the vast majority of the challenges identified were ones that were (I'll call them) growing pains for a new technology that's really emerging into the mainstream. Not many of the challenges were really fundamental things. In fact, I would posit that none of them were things that were fundamental to the language or the ecosystem. So it gave me a lot of confidence knowing, "Yes, like everything, we have challenges ahead of us, but to meet those challenges, it's gonna require effort from us and the community to do it." But they're not fundamental things that we can't fix.

\[00:28:12.18\] I think if we look at the challenges, many of them would apply across all of those industries, or most of those industries. There were not many challenges that we looked at that applied only to one.

**Carlisia Pinto:** And what challenges are these that you're thinking about?

**Steve Francia:** For me, from reading through all this, I think we identified a number of challenges. When we asked people what changes would improve Go most, they identified pretty clearly what I think are two of our biggest challenges. One is the lack of generics. I know sometimes we feel like it's a broken record, but we recognize it's a challenge. The Go team's stance hasn't changed, it continues to be that we're looking into a solution there.

Package management was the second highest identified change that would improve Go the most. Now, we look beyond those, just what would improve Go, and we see another picture of people's user experience. When we asked people what's the biggest challenge they face using Go, it kind of shed some new light on people's individual challenges. Some of the things that were identified in that were -- there's a steeper learning curve, and our documentation and tutorials are lacking. As we talked about, examples was a big part of that.

There's also something that came forward here, which was it's not the easiest thing for users to convey the value of Go to other people, particularly to their management. I think there's a lot of things we can do there, but one of the things that I thought of (pretty obvious) was there's a lot of companies that are using Go for lots of different things that most people don't have any idea about. I think it would do our whole ecosystem a lot of good to talk to these companies, get them - if they're willing - to do a case study and post that in a central place.

I think there's a lot of places where we can point to, you know, "This company is using Go, and how it transformed them. This other company, because of Go, they were able to reduce their costs. Because of Go, this other company, they were able to deliver a project much faster than they would have with their existing systems."

I think that there's a lot that we can do to just surface some of the great things that Go is already doing. That will help some of these challenges.

**Erik St. Martin:** Is there somewhere like a canonical place for case studies for people who do that? I know we commonly see them pop up on Reddit and Hacker News, and reduced from 2,000 servers to two and things like that, but I don't think there's a single place that we could point an executive to show them a bunch of case studies.

**Steve Francia:** There isn't that I'm aware of today, but I believe that there will be some time during 2017, or at least I'd like there to be. Go is changing - or I'll say the audience for Go is changing a bit. If you look at our web page and the material around it, it hasn't changed in a number of years. It's really catered towards the early adopter, and the early adopter is not our audience anymore. The early adopters adopted it, and now we're going for the later adopters, the more mainstream adopters, and more of the decision makers. So I think there's work to be done on adjusting our messaging to match the audience of today, and I think case studies is a part of that.

**Erik St. Martin:** \[00:32:14.10\] Yeah, and it's difficult too, even just in the convincing teammates thing. Even people who have been in the Go world for a number of years, it's "Give me your elevator pitch for why you should use Go", and it's really hard to think of just like a silver bullet; it's all the little things combined that make it so great to work with.

**Steve Francia:** I don't wanna misquote our users, but I think what came through from reading all the commentary was people that use Go really love it. I think it was pretty clear, like "If you try Go, you'll see why", but it's hard to convey that until you try it. And I think you articulated well why - it's not like there's two things that we can -- "Well, Go does this, so you should use it." It's really a bunch of little things that come together to really make a great experience.

**Carlisia Pinto:** I usually tell people that they have to try it and stick to it for a while, so they can get that experience. It doesn't come right away; it's not like you write a Hello World little program and you get it.

**Erik St. Martin:** But there's a struggle in learning or adopting any technology, and you need to... I think Katrina Owen put it really well during her talk, it's like "Your need for learning it needs to overcome your need to quit." You have to have a reason to wanna learn that so bad that you kind of suffer through what you find to be oddities in the language because it's different than what you're used to for you to get the comfort and the love for the language. So I think that it's really hard to just -- it's like convincing somebody to use Vim. I can tell them, "No, it's great. You're gonna be super productive in it", and they're still gonna look at me like, "Yeah, but the learning curve..."

**Steve Francia:** Yeah, I think that's well put, and there's really two different ways to address that, and if we do it right, we'll address them both. One is reduce that learning curve. Get rid of a lot of the parts that are painful for people; make it easier to learn. The second one is demonstrate the value that people would receive from learning this. There's lots of different approaches to doing that, and I think one of them would be highlight or showcase success stories using Go.
I think if we can approach it from both sides, that's definitely something that we collectively as the Go community can help to improve. I definitely know that's something I'm gonna be focused on over the next year.

**Carlisia Pinto:** Talking about what you're gonna be focused on over the next year, can you give us an idea of what's in the pipeline, the order, the priorities...? What's the biggest thing for this year?

**Steve Francia:** For me, my role is really gonna be focused on the user experience and what it means to be a part of our community, and supporting that as much as possible. I can't give you my full playbook for the year, because honestly, I'm still writing it. I think it's a very evolving thing, but I can tell you some of the highlights of it.

One area we're trying to improve is the ability for people to contribute to the Go project, and in additional capacities - not just in programming, but in other capacities. And there's efforts underway to improve that, and we hope to really increase the number of contributors to the Go project.

We're also trying to build more open and inclusive - we call them community working groups, where people are in an organized working group and are working towards a solution, or to address a need in Go.

\[00:36:07.06\] This is somewhat new territory for Go, and every community need to figure out how it's going to do this. That's in the place that we're in, we're trying to figure it out... We're gonna run a little experiment over the next few months with our first inclusive working group, which you'll be hearing about pretty soon. With that, we're hoping to be the prototype that we can use more and more.

Other things that I'm working on is trying to -- well, first, just make sure that all of the events around the world are supported. There's a number of Go conferences which all of you on the call know about, as all of you are responsible for at least one of them, and so am I. So we're all responsible for at least one of them... So there's the conferences, and then there's meetups all over the world. We're trying to get a program set up to support those and make sure that they have all the things that they need.

Then I'm also working pretty hard on the new user experience, what it feels like coming to Go, from the very beginning of going to our website, to installing Go, to going through other things, whether it's the tour or the documentation, but what it is to learn Go. I think that's gonna keep me busy for most of the year, doing those things.

A lot of these things are somewhat interactive and experimental. We're gonna try things and do experiments. Some of them are gonna work, and we're gonna double down on the ones that do; some of them aren't gonna work, and we're gonna learn why and we're gonna try and continue to evolve our approach.

**Erik St. Martin:** One of the things you mentioned was actually contributing, and I wanted to dig into that a little bit... But first, let's take our second sponsored break. Our second sponsor for today is Ultimate Go.

**Break:** \[00:38:07.07\]

**Erik St. Martin:** Alright, and we're back, talking to Steve Francia. Before we took the sponsored break, we were talking about your goals for this year, and you had mentioned contribution to the project. That was really interesting, to see how many people felt that they weren't welcome. It really took me off-guard too, because I've always thought the Go community was very welcoming. Did you get anything from the comments about why people might not have felt welcome? It's overwhelming to look at the project and figure out how to contribute, or is it the community?

**Steve Francia:** \[00:39:42.02\] I'll say what my opinion is about this; I can't speak to if the survey responses -- because we didn't ask this specific question as a free text response, but I think one of the things is, if you look at the Go team... This is my personal opinion - I look at the Go team and I see Rob Pike, Robert Griesemer and Ken Thompson and Brad Fitzpatrick and Russ Cox... All of these people - Ian Lance Taylor - just luminaries who had long careers of really successful technologies and books, and it's easy to be intimidated and feel like you can't live up to it, or "What value could I add to the efforts?"

I was talking to [Katrina Owen](https://twitter.com/kytrinyx) about this, and I asked her "How do you feel?" and she said, "I feel like as long as I'm one of the smartest people alive, that I'm welcome to contribute." I'm paraphrasing her, those weren't her exact words. I kind of felt the same way, and then I became a member of the Go team, and I thought to myself, "Well, I guess I am smart enough", but I remember feeling that way before I joined the team. I remember going through this experience of "Well, they hired me... I suppose I am smart enough, and now I'm starting to make contributions to the project." But I think it is intimidating, and I think there's also this sense of "They don't need my help." And I wanna dispel both of those myths.

The first one is "We do need your help." There's a lot of work to be done, and we absolutely do need more people to contribute. The project will not be successful as it should be without your help. The second one, you are smart enough to contribute, and reality is don't be discouraged when people give you feedback that you need to make changes.

I've been fortunate for the last few months to see how the team interacts with each other, and they are constantly giving each other feedback, and it is very normal for people to go through many revisions of something before you get it right. That's how you learn, that's how you grow. The team is willing to give that kind of feedback and invest in people so they will learn. I think it's actually a really great opportunity to be able to make contributions, and even if you don't feel like you're ready today, this is how you become ready. Give it a try, get the feedback and try and do your best. There's also lots of different entry points into the project. I am not qualified to contribute to the compiler or to the linker, and I'm not gonna. But there's plenty of areas in the project that I do feel that I can contribute. There's parts of the standard library, there's definitely parts of the website and documentation that I feel that I can contribute to.

So regardless of your technical experience, there's different areas that you're gonna be able to contribute to, and through that you'll learn the process and you'll get to know the people, and you'll be adding a lot of value.

**Erik St. Martin:** I guess that's a fair observation too, that a lot of people might feel intimidated and embarrassed when their code review comes up, the way they do... Not everybody perceives the feedback the same way; some people take it more personally, other people see it as a learning opportunity, to learn from people who know and understand the language and the project better.

**Steve Francia:** This is also one of the few questions -- because we were able to segment the data in lots of different ways and try and learn from that... This was one of the few questions where people that were not active Go users - as defined by they didn't select "I use Go at work" or "I use Go not at work"... So if they didn't select either of those options, this was one of the questions that they actually scored better on. So non-active Go users felt more welcome to contribute to the project than active Go users.

\[00:44:18.26\] What conclusions can we draw from that? I don't think we can draw exact conclusions, but I think we can speculate that it's likely because they aren't as familiar with the process. You always feel welcome until you're closer, and then you recognize that "Oh, this is kind of intimidating."

**Erik St. Martin:** Yeah, and I think some of the other stuff too is there's a lot of quick wins and stuff in the GitHub issues. Some of the Gerrit stuff can get confusing, but there's also a lot of formal papers that go back and forth, and working documents where people will work on... You know, you always see that the big changes come through that way, and a lot of people aren't used to working in that process either. They're used to taking a ticket and kind of working on it, as opposed to collaborating on a big document or specification before digging in. So I wonder if some of that also adds to the intimidation of what's required to be involved.

**Steve Francia:** Yeah, so for me there's been a bit of a culture shift joining Google and joining the Go team, because most of my background is startups. I'm really trying to learn this lesson - the Go team really cares about getting things right and doing things the right way; in startups, there's often pressure to get something now, versus something perfect. I don't say that the Go team strives -- they probably do strive for perfection, but they're trying to do the best job possible. It is a bit of a shift to think, "Okay, I felt like this was good enough, but they want me to make four more changes", and at the end of the day, for me, I'm trying to learn the lesson "This is just making it all better." It makes me look better, having contributed something even of higher quality, but it really is raising the bar for what I'm used to. It's interesting to get that feedback... When Russ gives feedback on things -- I meet with him weekly and I still step back a little and say, "Wow, what can I learn from this?" And I can't believe I'm actually getting feedback from Russ, or Rob, or whoever it is.

Definitely, part of it is recognize that they're trying to make you or your contributions even better than they are, so it's not about rejecting you or your contributions, it's about helping to make them even better.

**Erik St. Martin:** Yeah, I think it's important to take the feedback constructively, that it's not a personal attack, and it's really hard sometimes. I remember one of the first contributions I ever tried to make - this was a few years ago - several of the Go team I think were going back and forth on the ticket; they each had their own theory on how it should work, and finally I was like, "Alright, I give up on this...", because it was like balling back and forth between the two... You know, you just take it in stride; you're like, "Okay, there seems to be a lot of internal discussion on the implementation of this. This probably isn't the right ticket", and I just kind of moved on to another one. But a lot of people will take that personally, that it's lost time, and it's that and the other... It's difficult.

**Steve Francia:** There's also an observation that I've made over the last few months: if there's not a right answer that emerges, the Go team leadership is not against postponing it until there is one. So the need to have something versus the need to have the right thing... Again, this for me is a bit of a culture shift. There's a lot of things where it's like "It would be nice to have this, but we don't really know the right way to do it yet. We're gonna continue to think about it, but we're okay with waiting until we have the right answer."

**Erik St. Martin:** \[00:48:09.13\] That's one of the things when we talk about the little things that are part of the language and the way the team and the community operates... I think that that's one of the things we can appreciate, because Go doesn't have a lot of baggage and weird quirks because of these things that were just kind of rushed, and now there's tons of code in the wild that requires it, so it can't be removed or fixed.

**Johnny Boursiquot:** \*coughs\* Javascript \*coughs\*.

**Steve Francia:** Yeah, it's been really enlightening to me to see... So, one of the privileges of my job is to participate in a weekly proposal review meeting, and to see the thought and care that goes into every single proposal, which anyone can make. Anyone can make a proposal as an issue on GitHub, and every single week - or almost every single week - you've got the Go project leadership reviewing that. They take time and thought and they talk about every single one. And just to see the care and attention that goes into every one of these ideas that are proposed has been just a real treat for me.

**Erik St. Martin:** Johnny, were you about to say something?

**Johnny Boursiquot:** No, I was taking a jab at Javascript, when you said "rushing things out and paying for the consequences later." \[laughter\] But to your point, Steve, it's hard to interpret tone when you're getting the feedback. Just today I was watching some feedback between Matt Aimonetti, a well-known member of the community, making a suggestion for `go vet` to raise a flag when you don't have enough members for a SQL when you're reading information back and assigning it to some sort of struct, or whatever it is... When you don't have enough of these values. So basically, he's raising that as "Hey, it would be nice if `go vet` could flag that."

The Go team members were then sort of chiming in, going back and forth... Although it was very cordial, the back and forth was very to the point. There was no sugar coating, it was all about technical details or implications of taking on such a feature. The things that perhaps Matt didn't know about that the Go team knows about... It was a very quick back and forth.

From the outside looking in, you're thinking "Wow, is the Go team mad at him for making these suggestions?", but I'm pretty sure that's not how they're seeing it. It's really just about giving you the raw technical impact of -- that raw feedback. There was no sugar coating about it. I think that's something that can be very intimidating for somebody who's not used to working that way. You might be working in an environment where people had to sort of use a lot of buffer words, to make you read in between the lines. It's really not that way at all when interacting with the Go team, I found.

**Erik St. Martin:** I think that when people are very busy, as the Go team I'm sure is, they skip a lot of the pleasantries. The Go team's responses are very succinct and matter-of-fact. People read it the way they mean to read it. So if you come into the process feeling intimidated and then you get a very succint answer, you feel like you're being shrugged off because they're validating your fear of not being worthy type of ordeal. Whereas people who are regular contributors are just used to that; it's just a quick response, so they don't really read too much into it.

**Steve Francia:** Yeah, I think you said it well. This is something that I know the Go team is actually working on - the fact is people are taking a step of courage to propose something or to send a patch, and they have a lot of emotion sometimes riding on that, and when you have someone that you admire (I will say) shoot you down - even though that's not what's happening; that's the way it sometimes feels - you definitely react differently.

\[00:52:10.20\] I know as a team, we've been working on how to communicate in a way that's encouraging. It's a work in progress, but in my 6-7 months here I've seen improvement of that; people are not just saying no, they're saying "Here's why no" or "Here's what we need for this to go further." So to give them a path forward, rather than just a wall.

I think that's a big thing for us that the Go team is learning - people take our words with a lot more weight than sometimes we realize. We're trying to be better about understanding people's feelings. That's something we're working on.

But I will say the team itself cares deeply about their users and community, and each other. I've honestly never been part of a team that really supported each other as well as this team. I see the way that we talk about the community and the amount of time and attention that we spend on the users, and it's remarkable to me. That comes across being on the team, of how much they really do care and value each user and contributor, even if sometimes in their messaging it doesn't come across.

**Erik St. Martin:** I think even outside community involvement helps too, right? Most in the same respect that teambuilding exercises help with co-workers. You interact with people in a different form and you learn that they're people, and things like that, and then your interactions with them in the work environment are perceived differently.

I know coming for me personally, getting to see and watch the Go team interact with people at conferences really shows how much they care about what people are using the language for, and that it's meeting their needs and things like that. So when you see those succinct or matter-of-fact responses, you don't really think about it much because you've seen them as a person. People new to the community may only see them for the prestige of the things that they've done and their current roles, so when they see that response, it carries more weight, like you said.

**Steve Francia:** It's also the case that the team itself knows each other pretty well, and some of the more active contributors, I think you always need to be reminded of -- a lot of our conversations and dialogues are done completely open and transparent, the vast majority of it. And even if we know each other well, we can be short with each other, but lots of people are reading that that don't know our relationship already, so sometimes we need to be reminded that even if we have a good relationship and we're interacting back and forth, there's still a need to be mindful of the people who see that and aren't aware, or don't know us already.

**Erik St. Martin:** I know you're a pretty busy guy, and I think we're about out of time. I think we have a couple of minutes though if everybody wants to do \#FreeSoftwareFriday.

**Carlisia Pinto:** I actually don't have one today.

**Erik St. Martin:** How about you, Johnny? Do you wanna give a shoutout to a project or a maintainer?

**Johnny Boursiquot:** Yeah, definitely [Go Buffalo](https://github.com/gobuffalo/buffalo). I've been playing around with it to sort of stand up a project that I've taken on, and I was quite surprised how easy it was to get going... I mean, obviously, beyond reading just the introductory stuff on the main page (I think it's gobuffalo.io), it was really quite easy to get going. So kudos to [Mark Bates](https://twitter.com/markbates), the lead contributor to that. Very good job! I'm looking forward to contributing something back to that.

**Erik St. Martin:** \[00:56:03.08\] How about you, Steve? Did you wanna give a shoutout to anybody?

**Steve Francia:** Yeah, for me the one project that I use more than any other project is Fatih's [Vim-go](https://github.com/fatih/vim-go) project. I've been a long-time user of Vim, and one of my projects that's been \[unintelligible 00:56:22.29\] for a while is my Vim Distribution, which is really just my own personal Vim configuration that happens to be adopted by tens of thousands of people. And that's really what happened, I'm not being short when I say that. It wasn't intended to be a project, it was just my Vim configuration. But to see what Fatih has done with the Go integration, it's just phenomenal... The amount of time and effort that he puts into it; it really benefits me a lot, and as the survey demonstrated, a lot of our users. I was shocked to see how many users were Vim users in Go.

**Erik St. Martin:** Yeah, I think it was Vim and VS Code that were topping everybody out.

**Steve Francia:** Well, Vim was overwhelmingly the most used, and VS Code was, for me shockingly, the second most, given how young it is. But it just barely edged out...

**Carlisia Pinto:** Over Atom.

**Steve Francia:** ... IntelliJ and Atom and Sublime.

**Erik St. Martin:** Okay, so Vim-go far surpassed number two.

**Steve Francia:** Yeah.

**Erik St. Martin:** Fatih's work on that has just been tremendous. I use it as well. He's got a Patreon set up too for anybody who uses that. We all love to show support to people who work on these projects and give up their free time.

So one that I actually only recently started using which is really cool, I guess it's called [usql](https://github.com/xo/usql), for Universal SQL. It's written in Go, and it allows you to talk to SQLite, Microsoft SQL Server, MySQL, Postgres - all using the same command line tool. And one of the cool things that I liked about it was there's future plan for things like Cassandra and CockroachDB, and things like that. I thought that was really cool. I'm always struggling to find database tools. I like consistency. I hate to have to learn a new command line tool to interact with each database type...

Alright, so with that, I wanna thank everybody for being on the show. Huge thank you to you, Steve, for coming on the show and talking with us today.

**Steve Francia:** Happy to do it. Thanks for inviting me.

**Erik St. Martin:** And thank you to all the listeners who are listening live and will be listening to this. Huge shoutout to our sponsors, Backtrace and Ultimate Go. Forward this to anybody who might like to listen to our weekly podcast. We are on [Twitter](https://twitter.com/GoTimeFM), [ping](https://github.com/GoTimeFM/ping) if you wanna be on the show or have suggestions for topics or guests. With that, goodbye everybody! We'll see you next week!

**Steve Francia:** Bye!

**Carlisia Pinto:** Goodbye, everyone.

**Johnny Boursiquot:** Bye!
