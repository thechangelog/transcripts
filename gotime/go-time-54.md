**Erik St. Martin:** Welcome back to the show, everybody. Today's episode is number 54. On the show today we have myself, Erik; Brian is also here...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia...

**Carlisia Thompson:** Hi there!

**Erik St. Martin:** And our special guest today is an engineer for Walmart, and he's gonna talk to us a little bit about distributed teamwork and some of the stuff that they're doing with Go over at Walmart. Please welcome to the show Chase Adams.

**Chase Adams:** Hey, thanks for having me.

**Brian Ketelsen:** Hurray!

**Erik St. Martin:** So you've been a long-time listener and follower of GoTime, so we're really excited to actually get you on and talk about some of the stuff that you're working on.

**Chase Adams:** Yeah, I'm excited to be here. I've been listening to the Changelog for a long time, and I always hoped there would be a good podcast about Go, and once GoTime came out, it was love at first sight.

**Brian Ketelsen:** We're still hoping. Oh, sorry! \[laughter\]

**Chase Adams:** Yeah, I know where you're going, but I don't think that's true. I think there's a really good Go podcast out there.

**Erik St. Martin:** So why don't you give everybody just a little bit of background, maybe about your history with Go and what you're doing at Walmart.

**Chase Adams:** Sure. So I build software in Go for the Edge platform team at Walmart Labs. It was originally a company called Torbit and it was acquired in 2012; I've only been with the team since December of last year, but everyone still calls us the Torbit team, regardless of the fact that we're supposed to be the Edge platform team.

We do three main things for Walmart - we have our own reverse proxy, which does the asset and page optimization, so all the front-end optimization stuff. We have a homegrown CDN, and then we have a RAM system, and all that stuff's written in Go.

**Carlisia Thompson:** Yeah, I can't get over the fact -- I talked to you about this a little bit at GopherCon... I can't get over the fact that you actually have your own homegrown CDN.

**Brian Ketelsen:** Right?

**Chase Adams:** Yeah, it's pretty cool. Most of the people on the team have been working on the CDN for a lot longer than I have, and they've done a pretty good job, and as far as I know it, it's pretty competitive and it works really well.

**Brian Ketelsen:** I'm gonna go test it. I'm going to Walmart.com right now. Actually no, I'll do it from the command line: `time curl https://walmart.com`

**Erik St. Martin:** \[laughs\] He's actually doing it, too.

**Brian Ketelsen:** Oh, I instantly get a `302`. What's the curl command to follow the redirect?

**Chase Adams:** That's `-L`, is the flag I think you wanna use.

**Brian Ketelsen:** Minus which?

**Chase Adams:** Minus L.

**Brian Ketelsen:** L.

**Erik St. Martin:** So while he's doing that, what's the size of the team, and was this written in a prior language or was it a new project from the ground-up written in Go?

**Chase Adams:** Again, since I'm newer to the team, I don't have as much history about what it was written in before the acquisition, but I do know that there was at a point in time around 2012 there was a point where they were trying to decide whether or not to write the reverse proxy in Node or in Go, and clearly they landed on Go.

\[00:04:10.09\] As far as what I remember my manager telling me, it was around 0.8. So it's been written in Go for a very long time. They've built the whole company on Go, as far as I know.

**Brian Ketelsen:** That's awesome.

**Chase Adams:** It's a pretty neat thing to come into it for having started at 0.8, and now I think we're using 1.8... To be able to see that much of a transition is pretty neat.

**Carlisia Thompson:** Let's talk about hiring -- I know your team is small, because we talked about this, but I'm wondering... Every once in a while I ask people how their hiring is for Go developers - how you approach it at your company or in your team, if you have difficulties...

**Chase Adams:** Yeah, that's a good question. I am the newest person to the team, and before that I think the newest person was a year old. Our team is pretty small - there are three full-time developers writing Go, and we have a guy who's doing DevOps, and my manager is about 50/50 split. So our team's pretty small, considering the different things that we touch at Walmart.

As far as hiring goes, for me one of the interesting things was being able to be given a project to work on, and I work on that project as if it were a greenfield... And to think about a lot of the considerations for which features I should add or which features not to add, because it might move out my project's timeline for when I did do my interview. But our team is still pretty small and head count's one of those things that's hard to come by at Walmart because there's so much to do... But hopefully as we grow we're gonna have a lot more positions for people to be able to help out.

**Carlisia Thompson:** So I wanted to start asking you about your stack as far as having distributed systems...

**Brian Ketelsen:** Oh, that's a good question.

**Carlisia Thompson:** ...and also - jumping ahead maybe, but also talking about distributed teams, because I know you work remote, and how that works... But one thing at a time, I guess.

**Brian Ketelsen:** Show us your stack!

**Chase Adams:** Yeah, so I can't talk too much about the stack except to say that we have a lot of executables running in different places, and they're all Go. For our stats, we're using [Prometheus](https://prometheus.io/), but other than that, most everything's -- sorry, and [NSQ](https://nsq.io/) as well. So those are kind of the two big things that I spend time with in our stack.

But most everything is Go, and it's spread out across the world, which is pretty neat, since we support Asda, Walmart Brazil, Walmart Canada, Sam's Club, Walmart US, Walmart Mexico... I don't know, there's so many different properties that we support...

**Carlisia Thompson:** I've recently learned that there's a big developer team in Brazil; they actually have a dev team down there. I was pretty impressed.

**Chase Adams:** Yeah, it's pretty amazing how far-reaching Walmart is. I've talked to people on Slack from the U.K., and from Canada... I haven't talked to anyone from Brazil that, but I know that team is starting to transition to using the Edge platform tools that we have. It's pretty amazing how many people there are working on stuff for Walmart, and it's different countries that we support.

**Carlisia Thompson:** \[00:08:10.00\] Are you using [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/), anything like that?

**Chase Adams:** No. Pretty much everything is either on bare metal or NVMs, and since it's a stack, that built binary we don't have to really worry about too much other than that.

**Brian Ketelsen:** Yay Go!

**Chase Adams:** So no Docker... And since it scales as well as it does, we're not having to spin up a lot of new instances of our Edge services.

**Brian Ketelsen:** That's really cool. Do you have any secrets you can share about what kind of traffic do you see through those Edge services? How many billions of requests per hour, or anything exciting like that?

**Chase Adams:** It's a lot.

**Brian Ketelsen:** That's an official number - it's a lot.

**Chase Adams:** It's a lot. I don't know that I can grab any numbers real quick, but it's enough that it keeps me here, and it keeps me happy, which is -- really, one of the coolest things about being at Walmart is we're working at a pretty big scale with Go, and doing it in a way that our team is able to stay small and lean, and still support Walmart without having stuff go down, which is pretty great.

**Brian Ketelsen:** That is super cool. So is the team mostly distributed?

**Chase Adams:** Our team is fully distributed.

**Brian Ketelsen:** Fully distributed? Now that's a big difference. What are the dynamics like on a fully distributed team, with Go? How does that change things for you?

**Chase Adams:** It's really interesting... I've been fully distributed myself for -- my two-year anniversary at Walmart was middle of July this year, so I've been working on distributed teams not for a very long time, considering there are some people who've been working on them for over a decade, but one of the interesting things I think is, you know, you have a couple of offices, and then you have people who are spread out, and then just making sure that communication is clear and concise and that everyone is on the same page about what we're wanting to do and how to move forward... I think for our team, we do a pretty good job of being clear about what our roadmap should look like for the quarter. And if you hit bumps, I think one of the hardest things for any distributed team is if you're spanning across time zones, and even different people kind of pick different hours to work. If you have a question or something you bump into, it is kind of blocker... Finding the time to not necessarily disturb that person, but still be able to get some help in a quick fashion.

**Brian Ketelsen:** What tools do you use for distributed communication? Are you deeply in [Slack](https://slack.com/), or email, or some other thing?

**Chase Adams:** Yeah, Slack is probably one of the heavier tools that we use for communication. Since we're writing code, GitHub is a pretty significant place where we spend communicating... And I think the GitHub Enterprise that we're using now has a lot of the newer features for reviews and doing approvals, and just being able to give written feedback I think is probably one of the hardest things that I've had to kind of get my head around, to do it in such a way that always comes across as gracious -- because sometimes even if you say something and your intent is meant to be more exploratory and not necessarily trying to ask him like "Why are you doing it this way?" You have to be really careful with written communication, especially if you only see each other once a quarter or so, to make sure that you're communicating in a way that you can be positive about the way forward with whatever it is you're talking about.

**Carlisia Thompson:** \[00:12:05.26\] So have you found ways to do it better than you normally would if you weren't making an effort?

**Chase Adams:** Yes. For me, I usually ask other people before I make a comment on something, especially if I think that it might potentially come across in a bad way. I think just talking to someone who has context around what you're talking about, but isn't the person that you're addressing immediately, they're able to look at it from a different way than you are, as the person who has written the code a lot more easily, and give you feedback and say "Well, you can probably tighten this up, or even say this thing a little different."

Before joining this team, I worked pretty heavily on CI/CD, and I had my manager -- a lot of times I would talk to him about it, and we had a really good relationship to where I felt like I could be open with him about, you know, if I was seeing something that might not come across right... Or bounce those kinds of things back and forth - I think that's always been really helpful on both of the teams that I've been on at Walmart.

**Erik St. Martin:** So let's talk a little bit about Go at Walmart. Is it pretty much isolated to your current team, or do you know of other teams within Walmart and Walmart Labs that are at least experimenting with Go, or have it in production already?

**Chase Adams:** I know my team is the only team that I'm aware of that has Go in production. We all love Go, so we're encouraging other people to use it for things that might fit their use case. Anytime that we're in an office, we try and do some kind of introduction to Go, just so people can kind of get a taste for it. We've done things like spin up a Slack channel to encourage people to ask questions, or we'll post new things that we're finding, blog posts, or if there's a new project that might help... And I think that's been pretty neat, that there are other teams who are interested in writing Go, and I know there are people who are using it for some tooling that they're using for development.

For me, before I joined this team working on CI/CD, I owned a [Jenkins](https://jenkins.io/) instance that had 60 agents, 60 different nodes, and we had to share those nodes for a pretty tremendous amount of the customer experience team, which is the team that uses Node.js pretty heavily to run integration tests. We wanted to be able to use those nodes at night time, when they weren't being used as much, and I built a tool with one of my co-workers that would transition those agents between two different Jenkins instances, and then -- Jenkinses can be kind of unstable when you're running 60 different slave agents, so we had a staging in Jenkins so that if it ever went down it wouldn't mess up anyone abroad.

But we built a tool in Go that would basically switch those agents in and out based on capacity... Because neither of us wrote Java, neither of us cared to write Java; it was a really easy thing to do. And just building those kinds of tools at Walmart, and really any company; I think is a great way to show that it's a great language for solving problems.

**Brian Ketelsen:** And your first taste is free.

**Chase Adams:** That's right, always free.

**Brian Ketelsen:** That's really cool. I think internal evangelism is easier than external evangelism. When you can show the awesome ROI on a project and other people want to look as cool as you - it's easier to sell something like that.

**Chase Adams:** I think that's true, and I think the other big piece of it for me coming into Go was just being able to see someone use the Go tools that are, you know, first-class citizens to Go, that you don't get with other languages... Just to see how easy it is to write Go and to make sure that your Go is gonna work.

\[00:16:16.25\] Having written a lot of Node.js previously, setting up testing for JavaScript is a nightmare, and when you can show those kinds of things to people, just how easy it is to set up projects and how Go the language made the developer an important part of the story, to me that's a really convincing thing to be able to show to developers. And if developers can be productive and happy, and everyone else is gonna be happy, too.

**Brian Ketelsen:** We should put a sign over the stove in the kitchen - "If the developer is happy, everybody is happy."

**Chase Adams:** That's right.

**Brian Ketelsen:** So you've mentioned CI/CD several times... Is this a passion of yours, or is that something that you enjoy doing consistently?

**Chase Adams:** Yeah, I love CI/CD. My story at Walmart - I joined to work on React components, because... You know, when you think about Walmart and having these separate apps that need to consume similar data and be able to not have so much code that's just _copy pasta_ - that was a really big selling point. And if you look at Walmart's open source stuff for the [React](https://reactjs.org/) world, they're working on things like [Electrode](http://www.electrode.io/)... Which is kind of what spun out of what I started to work on.

When I joined this team, we didn't have any tests, there was a huge drift across all of the developer tools that we were using, so... You know, Webpack was a different version, ESLint (if it was even there) was a different version, so... When I came in, even though I was gonna work on React components, I wanted to tighten up that story of making sure that our code, especially if tons of people are gonna be using and contributing to it, making sure that we keep it clean and making sure that we have ways to be able to see if that code is working, and then how much the test coverage is changing.

It kind of started out that way, where I just wanted to make everything a little nicer, and I ended up owning a Jenkins instance around October 2015. In December they spun up a new organ, asked if I was interested in CI/CD, and starting at getting these Electrode components to where everything was just flowing really nicely, and then getting the apps out the door. And I was like, "Yeah."

To me, if you can make it so that your code is mostly something that you feel like you can have some kind of assurance about and be able to get it from the developer to production in a way that's not too convoluted, those kind of things for me... Yeah, they just made me so excited, and I think it really comes out of that thing I was talking about earlier, which is that if you can make developers happy, they'll deal with other things a lot better.

You're gonna have politics wherever you work, you're gonna have some crappy things wherever you work, and if you have really good things and if you're not having to deal with bureaucracy, or if you don't even know if your app is gonna work when you push that in production - those are bad things... So making it so that your code is stable and making it so that there's good tooling around that so that people can run tests locally and then run it in CI, and then deploy to prod, reducing the friction on that to me I think is one of the most important things that any organization should be thinking about.

**Brian Ketelsen:** \[00:20:06.06\] Yeah, for me CI is all about sleep.

**Carlisia Thompson:** I wanted to clarify that [CI](https://en.wikipedia.org/wiki/Continuous_integration) is continuous integration and [CD](https://en.wikipedia.org/wiki/Continuous_delivery) is continued development?

**Brian Ketelsen:** Continuous delivery.

**Carlisia Thompson:** Continuous delivery.

**Chase Adams:** Yeah, the D is interchangeable for some people. It's delivery or deployment. I think delivery is the best word to use. There is also some contention about what delivery is and what deployment is, but for the most part it's that idea of CI is just making sure that your code is in a good state to when you merge it in the master you're not gonna have to worry about if someone pulls down master to run it that it's gonna fail. Master, or main line, or whatever you call your branch that's stable.

Then the CD is just being able to deploy it from environment to environment in such a way that if all the integration tests pass and all the different (what we call) "gates" work, then your code is gonna be able to go to production without a lot of extra finagling of environments.

**Carlisia Thompson:** Is there anything about Go -- I mean, since you're into this, I'm sure you've done it in environments other than with Go... Is there anything about Go that makes CI especially easier, or more difficult, or any aspect of the CI/CD process?

**Chase Adams:** For CI I think just Go existing in the first place - because Docker came out of Go and Docker to me has kind of revolutionized CI - just that alone is probably one of the best things to come out of Go with CI... Because you can imagine, if you have a place like Walmart, where everyone has their own little snowflake that's gonna run in CI, you have to have an environment that matches what's expected, and that even means that you have to plan for all contingencies on every Node that you're gonna potentially run that job on, and with Jenkins who knows what that could be... Or using something like Docker, where everything's kind of been laid out and defined for what the application should have; then you just run Docker with that container, and if you're using something like [Drone](https://drone.io/) or [Travis](https://travis-ci.org), it makes it really trivial.

**Brian Ketelsen:** So how does your CD pipeline work at Walmart? Do you have continuous delivery for a lot of components?

**Chase Adams:** So for the Electrode land, which was the React stuff, that is the case. For us, with my team, we're still kind of working it out, because we do have some constraints that I think those, you know, just spinning up an app and sending it out to the world don't necessarily have. But for us, most of what we're doing is we're just leveraging our configuration management tool to get it from point A to point B. I don't know if that answers that question.

**Brian Ketelsen:** I don't, either. I think you've dodged the question.

**Chase Adams:** I think probably. So we're still working on our CD story for my team. I spent a whole year working on CI/CD for the React components and the React applications, so... Spending a whole year and being fully dedicated to that project, we definitely got CI/CD going for that group, and that's a pretty large team or somewhere close to like 500 developers, I think, that's working on the React components, as well as building applications for Walmart.com. But for us, we're still trying to figure out that story, and it is hard, because we're trying to build our product and then also trying to figure out our CI/CD story at the same time, with a small group of people.

**Brian Ketelsen:** Changing the wheels on the bus while it's moving fast?

**Chase Adams:** \[00:24:03.20\] Yeah, I like to use the -- I don't know if you remember that [commercial](https://www.youtube.com/watch?v=Y7XW-mewUm8), but it was like "We like to build airplanes... In the air." It's that same thing.

**Brian Ketelsen:** \[laughs\] I haven't seen that one, but I've had that job before, so I empathize.

**Erik St. Martin:** I don't know why I just thought of this, but do you guys remember... There was the [commercial with Jean-Claude Van Damme](https://www.youtube.com/watch?v=M7FIvfx5J10) and he was doing the split across the two semis, and then there was like the parody that came out and it was [Chuck Norris doing a split across two planes](https://www.youtube.com/watch?v=dndHQzZPH0Q)... \[laughter\]

**Carlisia Thompson:** I haven't seen that, but it sounds hilarious.

**Erik St. Martin:** I have no idea why that just popped in my head, but that's where it went.

**Brian Ketelsen:** Yeah, very on topic. Thank you, Erik, for that.

**Chase Adams:** I think airplanes make me think of that commercial as well, because that was -- you don't expect it, you don't see it coming, because it's just Chuck Norris' face, and then it zooms out, and then you see the airplanes on either side and he's doing a split over it...

**Erik St. Martin:** Now we're gonna have to link those in the show notes...

**Brian Ketelsen:** Yeah, it's gonna have to happen.

**Carlisia Thompson:** Yeah, I haven't seen it, so... I need to see it.

**Brian Ketelsen:** So one of the things that we talked about earlier when we were planning this show is mentoring, which is something that Erik and I have been talking about quite a bit lately. You mentioned that you wanted to talk about mentoring. What are your thoughts on being a mentor or being mentored? Have you had some good mentors in your past that have really changed your life?

**Chase Adams:** Yeah, absolutely. I think my thought on it is just everyone should be a mentor and everyone should have a mentor. There's just no reason not to.

I used to work at Zappos, and this was -- it feels like a lifetime ago now... I think it was probably only four years, three years ago (who knows). But one of the things that I was really interested in when I was at Zappos was making sure that everyone had the opportunity to grow in the places that they felt like they needed growth. If you're in a position where you work with people and you're surrounded by people who are doing the things that you can grow in, then you should take those opportunities, if it's something that you feel compelled about.

It's so easy to be in a situation where you may not have anybody and you're just getting started programming -- this is not people who have been doing it for a long time... For me personally, I started out programming because my family business needed a website, and I was writing shotgun, building material deliveries, reading about HTML and CSS, and it was a long time ago, but... I didn't have people around me. I lived in the middle of nowhere in Georgia, and no one (for the most part) really knew how computers worked there.

So I had to spend a lot of this time figuring things out on my own. Twitter was still kind of like finding its feet, and there wasn't an opportunity to find people in communities that you'd -- there was no Go community when I first started programming, and even then, there really wasn't a big group of people that were doing front-end things. Wordpress was kind of the thing at the time, but... You know, you had to learn all those things through the internet if you didn't have somebody around.

I think we're in a time now where -- I work with one of my friends who just graduated from Nashville Software School; we try to get together every two weeks... He was there for JavaScript, so we work on some JavaScript stuff, but you know, just having that opportunity for him to learn from someone who's seen things go bad, seen things go sideways, being able to experience what was like working on enterprise level software, or whatever software you're working on... You know, if you're available to people and those people are interested, that to me is kind of a sweet spot, and... If you're always learning, you can always be teaching.

**Erik St. Martin:** \[00:28:18.21\] There's a quote that always comes to mind when I talk about mentorship, and I sent it in a tweet the other day... It's actually about the actor Kevin Spacey; he says "I feel it's a responsibility for anyone who breaks through a certain ceiling to send the elevator back down and give others a helpful lift." I think that always resonated with me. Everybody kind of climbs through the ranks and... We're so focused on where we've drawn the line for ourselves, like where we want to hit for personal growth through knowledge or career growth, and we often forget how far we've come, and that we have value that we can add to other people.

**Carlisia Thompson:** Absolutely. I love that quote too, by the way.

**Erik St. Martin:** So how would you define mentorship? What do you think makes a good mentor versus an acquaintance that you occasionally ask advice of?

**Chase Adams:** I do think a big part of it is intentionality, and... You kind of answered it for me, what I think the differences are - if it's just an acquaintance that you're asking questions of, it's kind of like going to Stack Overflow when you had a question about jQuery, and you copy pasta and you move on with your day. I don't think it's a great pattern to fall into, because you're not asking the questions, and a big part of being a mentor is teaching people how to intentionally ask the right questions, and I also think it's just being intentional about being there as well.

I have a few people that I try to get together with every week, that I consider mentors in different realms of like -- I think that's one thing a lot of people are afraid of... It's like "I don't wanna ask so-and-so to be my mentor." I don't think you have to do that; I think there are people who are where you wanna be in life, and from the apprentice side of it, you pick and say like "These are the things that I need to grow in." So maybe documentation is one thing; maybe just learning Go in general is something you wanna learn, or learn to be better at.

Being able to find those people is a lot more trivial today than it used to be, especially if you join GopherSlack. If you wanna learn Go and you've never done anything with it, I think everyone encourages people, after you've looked at the tour of Go and you've looked through the spec and the source Go, go to GopherSlack. You can find people that are talking about things, and you can at the very least determine "This person knows more about this thing than I do, and I'm gonna figure out a way to try and see if I can build that relationship with them to learn from them", and hopefully that mentorship goes both ways; maybe they have something they need to learn, and together, if you're working on that in a set interval - maybe like every week or every two weeks - I think that's the right way to go about it.

**Erik St. Martin:** Well, I think there's also a degree of -- so that's hitting kind of on like the technical mentorship side, where you're trying to evolve somebody, but I think there's also value in the career and personal growth... Because we've all kind of tread the path before people coming onto the scene now. So there's a lot that we've learned even outside of just our technical jobs about our careers and how to grow within them, and you know, maybe transition to another role or into leadership, or things like that.

\[00:32:09.12\] And even personal... A common thing -- I talk to people who have been in the industry for just a couple years and they struggle with the burnout that almost all of us have gone through at one time or another. I think there's a degree of being around to discuss those things too, and to remind people that are just experiencing these types of things for the first time that it's normal, that everybody goes through it.

**Brian Ketelsen:** I never get a burnout.

**Erik St. Martin:** \[laughs\] Of course not.

**Brian Ketelsen:** \[laughs\] At least not on days that end in Q.

**Erik St. Martin:** And for all of the proof that he's lying, I will show some Slack messages in our show notes... \[laughter\]

**Brian Ketelsen:** Don't do it, because I have Slack messages, too. That boat goes in two directions.

**Erik St. Martin:** We've got dirt.

**Brian Ketelsen:** We have dirt... No, I get burnout constantly. And it's my own fault, because I push so hard on something that I'm so passionate about, and then I realize that I've completely buried myself, and then I have to stop, and that's really hard; taking a break, backing down is not easy.

**Carlisia Thompson:** Is that because you have too much empathy?

**Brian Ketelsen:** I don't know if it's all empathy... Sometimes it is, especially when it's product-related and I wanna fix things... But my tech passions burn hot and they burn quick. I get really excited about doing a thing, and then I work too hard on it and I realize that I've let everything else go, so then I have to do all of that, and now I'm behind on everything... I need to be paced better; I need a pacer.

**Erik St. Martin:** I think that there's a degree of it though that -- you know, I'm similar in the respect that I often put more pressure on myself than my team or employer does, because I wanna get stuff done and I wanna meet deadlines; even if they're artificial deadlines, I feel kind of this need to hit them. But I think the empathy comes in; the whole thing gets exacerbated by the fact that when other people are counting on you, they need you to succeed, or in the work sense, they need stuff that you're working on first in order for them to do their jobs, and you feel like you're holding other people up... I think that's where the empathy kicks in, and you're like "It's my fault. Now they're gonna be stressed because they're behind, so I've gotta get this done", and really you're putting artificial stress on yourself, because often times deadlines can be pushed.

**Carlisia Thompson:** And then you have empathy for your users, and you wanna do a good job... You don't wanna just deliver anything, sloppy work. I think, I don't know; I don't wanna speak for you.

**Brian Ketelsen:** No, it's the same. I agree. There's just lots of stresses, lots of things that push us to work too hard.

**Erik St. Martin:** So is anybody here actively mentoring people?

**Carlisia Thompson:** I am not actively mentoring anybody, but people do ask me for advice on how to get a job, how I got started working with Go (every once in a while), and I do take the time to open a quick video call and give advice. I have opened myself up to take on a woman of color, somebody who wants to learn Go, only because I don't see that there's any at all, and I would like to help with that.

So I'm being selective; I don't have a lot of time, but I will make extra time for that. I'll make an extra effort, I guess. Otherwise, I think we have been sort of successful at being attractive to women in general; we have the [Women Who Go](https://www.womenwhogo.org/) group, and men definitely - we see people joining from all fronts, joining the community. So yeah, that's all that I've been doing.

**Brian Ketelsen:** \[00:36:18.18\] I'm kind of the same; I have a lot of ad-hoc mentoring going on, at least 2 or 4 people a day on Slack and Twitter asking for various career advice or something similar to that, but it's all ad-hoc, nothing assigned.

**Erik St. Martin:** I think that's mostly been my interaction, too. I kind of sent out a tweet over the weekend kind of soliciting for mentees, just because I'd like to play a more active role than just the occasional question that comes my way, especially -- I don't think that I get career-based questions or personal questions, or things like that. It's usually technical, like "I'm running into this thing. Any ideas?" and I think it's important for the career aspect.

I think I kind of like the idea of watching somebody grow too, and checking in on him... Knowing these couple of people that you're interacting with, knowing what their goals are and whether they're on course or falling behind, and trying to offer advice along the way. You know, not that there's not value in being available to answer the ad-hoc technical question...

**Brian Ketelsen:** See, I don't get ad-hoc technical questions, though. Nobody asks me about technical things. I think it's the grey hair; I get all ad-hoc personal growth, development, employment stuff. They're asking you the technical questions, I get the "How do I advance my career?" questions. It's because I'm really old and you guys are young.

**Carlisia Thompson:** \[laughs\] How about you, Chase? You said you're mentoring someone mostly in JavaScript.

**Chase Adams:** Yeah, so I have 3-4 people -- and I say 3-4 because there's one that is a little more ad-hoc. But I do have three people that at the beginning of the year I decided that I wanted to invest time with them. Part of that was every year the past couple years I pick a couple of themes for what that year is gonna look like, and this year I picked a miracle grow. A part of that was to take... Similar to what Erik had said, which is -- you know, I started out doing deliveries for billing materials, and now I'm a software engineer at a large, well-known company, and I didn't just get here; I didn't get here because I'm that good, I got here because people invested in me and I learned how to ask the right questions to -- even if I didn't have an official mentor, be able to ask the right questions to grow myself.

So for me, I wanted to be able to invest in people in that way, and I'm hoping to carry that over next year as well, to pick up a few more people. Having a brand new baby in the house has made it a little bit harder to invest in anyone else except for her, which I'm totally -- I couldn't be happier to be spending most of my time with her, but I do think if people choose to be mentors, I think it's important to be intentional about it and to carve out that time.

I have definitely one guy that I'm mentoring for JavaScript, but the other two people are a lot more -- those relationships are a lot more about their... Not their technical growth, but their growth where they're working.

\[00:40:01.27\] At the end of the day, I try to write as much code as I can and I try to get into the code, but the reality is when you work somewhere like Walmart or Zappos or any company that is large enough that you're not just able to turn out code because there's all this greenfield stuff... You are spending a lot of time in meetings, or doing things that are not necessarily writing code, and those are important things to help people learn how to navigate and how to do it right. A lot of times, promotions and even being able to be effective, those things rely on you being able to be productive outside of just writing code.

**Brian Ketelsen:** Now, here's that question kind of flipped around a little bit... Who's had a really good mentor that changed their life? I'll go first if you want... I had a manager named Jim Young ten years ago, and to this day I still call him and get amazing life advice. During the time where we worked together, he was so much more than a manager for me, and it was just absolutely amazing how he helped me steer my career and my life in a better direction.

**Erik St. Martin:** I think through my career I've had a lot of really good managers... Whether I consider them mentors, I think, is a little harder to determine, but I would probably say that Brian is actually the person who's mentored me the most...

**Brian Ketelsen:** Aw.

**Erik St. Martin:** And it's interesting, because only when I think about who's mentored me does that come to mind, because it's really kind of been a friendship, and discussions we have, and things like that that doesn't feel like a mentorship.

**Brian Ketelsen:** Those are the best kind.

**Carlisia Thompson:** \[unintelligible 00:41:46.25\] had any mentorship. My current manager is really good as far as keeping me on track with my work in general, and I have a person when at work to mentor me technically. That did not pan out, so I'm planning on approaching somebody else, and I think having someone from work will be easier, because there's no problem about sharing what I'm doing as far as intellectual property.

So I'd very much like to have a more senior Go developer mentor me at work. But I don't have that. How about you, Chase?

**Chase Adams:** Yeah, I'd like to call out three, if that's okay. I know it's two more than everyone else said...

**Brian Ketelsen:** Of course.

**Chase Adams:** So my first one would definitely be my dad... And again, it was never an official mentorship, because it's my dad, but he invested in my growth as a person, especially in my early 20s. There were a lot of times when I would come across situations that I didn't know how to handle, and just being able to talk to him and have him walk me through some of the ways that he thinks about things, or even -- the best thing is to say he would ask me what I think about certain parts of it, of a problem I went through... And again, that was a big thing.

My dad was my boss when I first started working, and having to not work for him -- being able to tell your dad "Hey, I'm not gonna be able to work here anymore, I'll go work somewhere else" is pretty hard, especially if you have a good relationship with your dad. But you know, ever since then, he's invested in trying to help me to grow. It was even to the point where he would give me books to read and ask me if I wanna talk about them, and we'd talk about books.

\[00:43:54.23\] The second one that I wanna call out is my previous manager. His name is Dave Cadwallader. He was at Walmart, he's at a place called DNA Nexus now. He was one of those people who -- he was my manager, but more than anything he helped me think through how to do things the right way and how to say things the right way. There was a point in time at Walmart where a lot of people were afraid that remote positions were gonna get nixed altogether, and I wanted to ask the question of like -- to me it was like "Why are we doing this?" He made me stop and ask the right questions of "What is it that I really wanna get out of asking the question of remote workers?" Is it that I wanna fume at somebody, or is it that I wanted it to be resolved where it's okay for people to not be in an office.

He's helped me through a lot of those (like Erik said) politically tricky questions that can easily -- probably your entire career could go out in flames if you asked the wrong way. Being able to talk me through how to ask those both in a way that is clear and concise, and in a way that doesn't come across as trying to -- I don't know, to be effective with your questions and to be effective in the way that you're thinking about things.

Then my third one, there's a guy -- I've tweeted about him a few times, and then my [Getting started with Emacs](https://chaseadams.io/getting-started-with-emacs/) article points to him, but his name is Shane Hanson. He's on my team currently. And I don't know that he would say he was my mentor, but he has helped me grow in Go and in thinking about architecture and thinking about how to solve problems in ways that probably in my whole experience of being a developer I haven't had anyone help me accelerate that quickly to learning things. So those would be my three.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** So here's a question for anybody listening for the answer - is anybody here actively seeking mentees? Is anybody here willing to take on new people to mentor?

**Carlisia Thompson:** I would love to. I don't have a lot of time to take on somebody on a formal and consistent basis; I'm making an exception for a woman of color, so if somebody knows someone like that, I would take that on. But I don't have a lot of time. I'm already pretty pressed for time.

**Erik St. Martin:** Yeah, I guess there was a distinction to be made, too... I don't have a lot of time, so I don't know how much I'd be able to help teach somebody the language, outside of answering particular questions or pointing people in the right direction? I'm not sure I have enough spare time to spend several hours a day or week basically training somebody in a language, but I think that I can always make time to offer advice from a career perspective. Or "Here's the types of things I wanna build. What should I learn?" - those types of questions I think are easy enough, but the individual one-on-one, several hours of "Let's walk through some of your code" and "I'll teach you how to write better code" I think is harder when you have a much busier scheduler.

**Carlisia Thompson:** Yeah, that's harder, because it also requires for you to understand the domain, which if it's someone starting to learn, that's probably gonna need to be simple enough, but it still requires a little bit of effort.

\[00:47:50.00\] The best thing I think - and this is not final; I would like to hear from Brian and Chase as well - is definitely join group chats, like the newbies channel that we have - [Golang Newbies channel on GopherSlack](https://gophers.slack.com/messages/golang-newbies), or the [WomenWhoGo Slack](https://gophers.slack.com/messages/womenwhogo), there's a GoBridge channel also in GopherSlack... Just because there'll be people available when you want to ask a question. And reserve pinging people for questions that you're not comfortable asking publicly. Just like Eric and me too. I'm available for one-offs, that I can say "Hey, let's do two days from now", but nothing that I can commit to on a consistent basis.

**Brian Ketelsen:** Yeah, that's probably an important part of the mentor discussion - determining what things are actively mentoring and what things are "I'm just too lazy to go to [Stack Overflow](https://stackoverflow.com/)." And the difference between them is in a mentor relationship you have that dedicated channel back and forth to answer hard questions, but if someone is taking advantage of that to ask not so hard questions, or questions that they haven't explored other opportunities with, then they're kind of putting a burden on that mentor relationship.

**Erik St. Martin:** Yeah, and I think, you know, you should be looking for hooks. "I don't know where to start, point me towards something." But I think that the personal one-on-one is valuable in the vulnerable conditions, right? For example, some of the conversations Brian and I have - I can come to him and express insecurity in something, whether it be "Should I submit a talk somewhere? Should I go for some job?" or something like that, and we can kind of talk in a vulnerable state, and both kind of have confidence in each other and share stories that you don't really wanna share in public channels... Often times that can be enough to give people the confidence to continue what they're doing, or ask for a raise, or anything of that nature. Those aren't the types of things that you just drop in a public chat forum.

**Carlisia Thompson:** Yeah, I think "Where do I start?" is a great question for a public chat, unless you're currently employed and you wanna keep your search private, so definitely pinging somebody privately... And sometimes getting feedback on, for example, my resume... Just like, "Tell me kindly how my resume sucks" - that's something I would want to be helpful and hopefully pleasant.

**Erik St. Martin:** So I'm asking that question too, because I know my resume sucks.

**Carlisia Thompson:** I can help you with your resume, Erik.

**Erik St. Martin:** I usually just throw stuff in there. It's like "Yeah, I need to add a line item for this job, and here's kind of what I did." Done.

**Carlisia Thompson:** You don't need a resume anymore.

**Erik St. Martin:** See? So, I kind of hate that... We all talk about impostor syndrome regularly, right? So when you kind of get like a walk-on job, where like "You're you, and we want you. If you want the job, you're hired" type thing. That really makes impostor syndrome worse too, because you spend a long time concerned, like "Do you know all of the things that they think you know, why they just offered you the job?" And it takes you a long while to kind of figure out what their expectations are versus your skillset, whereas if you're in a formal interview and you don't know things, you know that they know you don't know it, and you feel comfortable in that, like "Oh, okay, then I guess it wasn't that big of a deal."

**Carlisia Thompson:** \[00:52:06.13\] I don't know... I think the resume is just a tool for people getting to know you, and even with a resume, they can extrapolate and think that you know more than you know, or think that you know less than you know... And an interview is the point where they take that knowledge, whether it came from a resume or it came from them knowing you from wherever, and having that conversation. So "Let's talk about what you really know, how you really fit in, and what you don't know, and if you're comfortable with that..." So I don't see the problem that you see, if somebody invites you for an interview and they don't ask you for your resume.

**Erik St. Martin:** Yeah, so inviting you for the interview without a resume - I think that's okay. What I'm talking about is like a walk-on job where it's basically like some company loves who you are; they're like, "Carlisia, we listen to the podcast all the time. We love you, we want you to come work for us. Just say yes", and there's no formal interview.

**Brian Ketelsen:** Just say yes.

**Carlisia Thompson:** Well, but you do wanna have an interview because you wanna interview them at the very least, right? Unless you also know them; in that case, their assessment is probably accurate... If there's mutual knowledge about what both sides do etc. Otherwise, I don't know. If you said "Yeah, sure. It's a great job, I will just take it", without some sitting down and talking about it... That'd be odd.

**Chase Adams:** I think I'm in a similar mindset as Carlisia - even if you don't have to do an interview... I know this is deviating a little bit, but there's so much that you just don't know about the people that you're going to work with, and this is -- I don't know, I've never had this happen, but where someone says "Okay, we want you. No interview, just sign on the dotted line."

For me, I don't know, that would make me really nervous, because even if it was a lot of money, something that was just unfathomably better than what I have today, if I'm not gonna be working with people that I think I wanna work with or that I think are gonna be interested in helping me grow, or even... I've always opted for a team that has a manager that I feel like is gonna be a manager that I can trust... If you don't have those conversations, then a lot of those things -- it doesn't matter what they throw at you that makes it a good offer, not knowing is a really scary situation to be in.

**Erik St. Martin:** Sometimes it works out in your benefit. I actually met Brian in that very way. I didn't know Brian at the time. This was before all the things Go we do, and he was my boss when we first met, and my interview was him and the director of technology. They took me out to lunch and we had beers, and he told me why the company was so awesome and why I should come work for them. And it worked out to my benefit, because now we've been friends for ages.

**Brian Ketelsen:** That was a long time ago.

**Erik St. Martin:** It was... I'm feeling old thinking about it.

**Brian Ketelsen:** I was young then...

**Carlisia Thompson:** You guys are so old... \[laughter\] Seriously.

**Brian Ketelsen:** Alright, so we're starting to run out of time... I think we need to get into some Go news and \#FreeSoftwareFriday love.

**Erik St. Martin:** Definitely.

**Brian Ketelsen:** \[00:55:40.12\] ...so we could stay on track. I have the coolest Go news. I love me some distributed tracing, and [Ricardo.ch](https://www.ricardo.ch/), which is a Swiss company that got training from Gopher Academy when Gopher Academy was doing training this year - they just released go-tracing, which is an awesome open tracing plugin for Go that drops your traces and spans directly to zipkin.

**Erik St. Martin:** Oh, nice.

**Brian Ketelsen:** I saw it this morning, and the first thing I did was check it out and install it, and it is perfect; it's just what you need if you want distributed traces, so go get that. It's still missing a few pieces to the API that would make it perfect, but it's really nice, so go get some of that. It's at [github.com/ricardo-ch/go-tracing](https://github.com/ricardo-ch/go-tracing).

**Erik St. Martin:** Another piece of news it the [Go 1.9RC2](https://groups.google.com/forum/#!topic/golang-announce/lcUUfQalrr4), which just came out yesterday... Or the day before? Well, by the time most people hear this it will have been a week ago, so...

**Brian Ketelsen:** That's true. That's a good question, I could go look at my Go binary and see when it was installed, because I think I installed it at least 30 seconds after it was released.

**Erik St. Martin:** You've got like a bot that watches Twitter [@Golang](https://twitter.com/golang) and whenever it mentions a release it goes out and installs it for you?

**Brian Ketelsen:** Pretty much. So my binary date for my local Go binary is 7th August at 16:33 PM. So I think it was the morning of the 7th that it was released.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** I was a little behind that day.

**Erik St. Martin:** So we talked a little bit about the new change to the GoTime website in the pre-show... So for the benefit of the listeners, do you wanna talk about it, Brian? Because you're like super pumped about it.

**Brian Ketelsen:** I do, it's so exciting! We have transcripts available on the GoTime website now. So if you go to an individual episode, you can see transcripts, and they're generally accurate, if not completely accurate... But they're generally accurate. And they've got the person's name who said the thing, and it's really cool. And you can submit fixes to them, because all of the transcripts are open source and they're [available on GitHub](https://github.com/thechangelog/transcripts). So you can go right down to the bottom of the page and just say "I wanna fix this transcript" and it drops you into the GitHub repo and you can send a pull request.

So I love the fact that we're making these episodes text-readable, for people who can't hear them easily, or even text-searchable for Google searchability, because Lord knows, we need to have physical evidence for some of the things I've said on this show. \[laughter\]

**Erik St. Martin:** Now it's much easier to find than having to listen through the audio.

**Brian Ketelsen:** Yeah, just search for "gator" and "BB gun".

**Erik St. Martin:** Oh, I forgot about that one... \[laughter\]

**Brian Ketelsen:** Yeah, thanks for busting me on that one, Erik. It's okay. PETA is knocking at my door right now.

I had another project that I found that looks really cool, and it's by Alex Ellis ([github.com/alexellis](https://github.com/alexellis)) and it's called [Faas](https://github.com/openfaas/faas). It is _Functions as a Service_, which is a cool framework that allows you to do serverless - and you can't see the air quotes, but they're there - on Docker or Kubernetes. It's a really cool package, I like it quite a bit.

And there was somewhere in the GitHub repo a link to a document that says basically "Why do I care about serverless?" and it was the first time ever in my life where I said "Holy cow, I understand serverless now! This is why this is important to me." So it was cool, and now I'm gonna stop making fun of serverless, other than the whole stupidest name in the world thing... But serverless sounds cool!

**Carlisia Thompson:** Oh, now I'll have to read it, because otherwise I'll be the only one still making fun of serverless. \[laughter\] You and I were in it together, Brian.

**Brian Ketelsen:** I know, we were... So you've gotta go read that so we can be together. Good call.

**Carlisia Thompson:** \[01:00:13.26\] You went to the dark side.

**Brian Ketelsen:** Oh, I wouldn't call it the dark side, I just -- I won't make fun of it anymore. Now I understand it. Now I understand why.

**Carlisia Thompson:** Okay.

**Chase Adams:** Alex Ellis has done a lot of really great tutorials on Docker and Raspberry Pi, so if you're interested in either of those things together, I think he's like the Docker captain who writes the most about those things.

**Brian Ketelsen:** Oh, that's cool.

**Erik St. Martin:** Oh, awesome.

**Chase Adams:** Yeah, he set up like a Swarm cluster with a bunch of Pi Zeroes, I think... I don't know, I'd have to find it, but it was pretty neat.

**Erik St. Martin:** So did we have any other projects or news before we jump into \#FreeSoftwareFriday?

**Brian Ketelsen:** No, let's go, \#FSF, it's time.

**Erik St. Martin:** Alright, who wants to go first?

**Carlisia Thompson:** I don't have anything, because this week I felt like I had to go out and get a freakin' education on gender studies and social studies... \[laughter\] Don't ask me why, that's all I'm gonna say. It was exhausting.

**Brian Ketelsen:** It's been an emotional week, I won't disagree with that.

**Erik St. Martin:** Agreed.

**Carlisia Thompson:** I feel like to be a woman in tech or a minority in tech you need a CS degree or some sort of CS training, plus a degree in social sciences.

**Erik St. Martin:** Okay, so I have one for you. Carlisia is shouting out to all the wonderful women in tech who persevere through a lot of crap that they shouldn't. How was that?

**Chase Adams:** Yes, yes...

**Brian Ketelsen:** That's a good one!

**Chase Adams:** Nailed it.

**Brian Ketelsen:** Yeah, raising my fist in solidarity. Good job, [Carlisia](https://twitter.com/carlisia)!

**Carlisia Thompson:** I don't know if I did a good job, I'm just saying it's a lot.

**Brian Ketelsen:** It is. We love you for it. We're sorry you have to go through it.

**Carlisia Thompson:** You know, I'm just a witness and it's a lot and there is people who are actually being effective and that's just \[unintelligible 01:02:04.26\] Anyway...

**Erik St. Martin:** Alright, how about you, Brian?

**Brian Ketelsen:** It's hard to follow that, so on a much less serious note, I've been given a new Mac for my new job at Microsoft - again - so I'm back on using a Mac after I swore it off earlier this year, and I realized that [iTerm2](https://www.iterm2.com/) is one of the nicest damn terminals on the planet. I'd like to shout out to [George Nachman](https://twitter.com/gnachman) and anybody else who has contributed to iTerm2, because it's probably the gold standard for terminals. It's a great terminal.

**Erik St. Martin:** I don't even know how long I've been using it for... It has to be ten years now.

**Brian Ketelsen:** Mm-hm... Forever. I love the -- so my absolute favorite feature is their [tmux](https://en.wikipedia.org/wiki/Tmux) control channel integration. Has anybody else used that?

**Erik St. Martin:** A long time ago.

**Brian Ketelsen:** It is the best thing in the world. So if you install tmux on a target machine, and then from iTerm2 SSH in and then type "tmux-CC" (I think they have to be two capitals), it will turn a regular, ugly tmux session into iTerm tabs and windows. So if you did something in tmux that would start a new Window, it opens up a new iTerm window. If you want to start a new tab in tmux, it starts a new tab in iTerm. So it's just the most fantastic integration ever, and I'm pretty sure iTerm2 is the only terminal emulator that does that, and it is so cool.

**Chase Adams:** It's pretty slick.

**Brian Ketelsen:** Yeah, it really is; it's amazing. And I've looked for other terminal emulators that offer something similar and I haven't found any yet... So kudos to them. Thanks George and the iTerm2 team. I heart you.

**Erik St. Martin:** \[01:04:07.07\] Did you have a project or a contributor you wanted to give a shoutout to, Chase?

**Chase Adams:** Oh, man... This has been the hardest week, because usually I'd be like "Oh, \#FreeSoftwareFriday, I'll just tweet about it." And knowing that I was gonna come on the show, I was like "Oh man, I've got so many that I wanna say something about...", so I ended up landing on one, but I'll tweet about the rest through the rest of the next 24-hour period, or whatever.

The one that I wanna give a shoutout to is [GitLab](https://about.gitlab.com/)...

**Brian Ketelsen:** Nice.

**Chase Adams:** I don't know how many people use GitLab... I host everything there and I just mirror it to GitHub. They have just figured out this software development cycle in such a beautiful way... It has baked in CI/CD, and one of the really cool features that they came out with recently is _review apps_. So when you push a branch, what GitLab will do is it will spin up a new environment for you with your Docker file for that particular branch, so you can go visit that branch's -- you know, what that would be like if it were running locally, or in production, or whatever. So to be able to see your changes and run things against it to me is just such a cool thing. And again, it's open source, which I love... It's such a great company.

**Brian Ketelsen:** Nice. How about you, Erik?

**Erik St. Martin:** Mine for today is [Jessie Frazelle](https://twitter.com/jessfraz). She is amazing... Her knowledge of Linux and containers particularly... I don't think there's a container thing that you can touch that she wasn't somehow involved in. And then recently this week -- I think the project has been around for a little while, but this week I had seen a new project of hers that I had never seen before, and it's called [Am I Contained](https://github.com/genuinetools/amicontained). You can run it and it will tell you what container runtime you're running in and the Linux capabilities that are available to you... Which is ridiculously cool.

That is at GitHub.com/jesfraz/amicontained.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** Anybody have any others? Did you wanna throw in more, Chase?

**Carlisia Thompson:** You can take my spot. \[laughter\]

**Erik St. Martin:** He's looking at his list of 50 and he's like "Maybe..."

**Carlisia Thompson:** While he thinks about it, Brian, I don't find the link to the article about the serverless stuff you were mentioning.

**Brian Ketelsen:** Uh-oh... Alright, I'll troll through my browser history and I'll see what I can find, okay?

**Carlisia Thompson:** Yeah, thanks.

**Erik St. Martin:** Alright.

**Carlisia Thompson:** But Chase, do you have anything else?

**Chase Adams:** Yeah, so I'll do two more. One is [orgmode](http://orgmode.org/), which for anyone who's not familiar with Emacs - Emacs is pretty new to me; I switched from Vim end of last year... But _orgmode_ is basically like markdown on crack, and one of the really cool things that _orgmode_ does -- and it does a lot of cool things; it allows you to use it as plain-text files TODO lists, and you can use keyboard shortcuts to basically update these plain-text files.

But one of the things that I think is really cool about it is you can execute your code blocks from within org mode when you're in Emacs. For someone who does a lot of DevOps'y type things it's really nice to be able to write your documentation in these org files the way you would in markdown, and to actually put your code in those code blocks and execute them when you need them, rather than having your documentation separate from your code. So that's one.

**Carlisia Thompson:** I love markdown, and crack must be amazing, but you lost me at [Emacs](https://www.gnu.org/software/emacs/)... \[laughter\]

**Chase Adams:** \[01:08:05.02\] There's a quote that says "If you wanna find the truth, hold no opinions", and that's been a really hard one for me to adapt, because I was very hardcore using [Vim](https://www.vim.org/), and I've used [Code](https://code.visualstudio.com/) pretty heavily as well, but every time -- I just keep going back to Emacs now, because it does so much that none of my other editors did. But I understand... It's one of those things that if you can't make yourself decide to even look at it, it is hard to look at it.

But the other one is just the three big editors - VS Code, Emacs and Vim, the three folks who are the main contributors to those packages, for being able to write Go in those editors. I think it's [Ramya](https://github.com/ramya-rao-a), [Fatih](https://github.com/fatih) and [Dominik](https://github.com/dominikh)... I don't know, the fact that you don't have to think about the tooling for writing Go in any of these editors, and it just works once you get the extension or Go mode installed... It's just awesome. They should be able to just do that for -- I don't know; I guess some of them do get paid to do it, but...

**Brian Ketelsen:** Well, they could; Ramya gets paid to do it, but Dominik and Fatih both have set up ways that they can also accept cash. Fatih has a Patreon and Dominik - I don't remember what the website is that he did, but I think if you go to go-tools.org or gotools.org, he's got a way that you can support all of the tools he does. Because not only does he do the Go mode for Emacs, but he's written so many countless, dozens of Go tools like Static Check and so many others. He's just prolific in the Go tooling. So yeah, support those people where you can.

**Chase Adams:** Yeah, there's Donate buttons (hah, Donut buttons) on most of their readmes.

**Brian Ketelsen:** \[laughter\] I want a Donut button.

**Carlisia Thompson:** I want a Donut. \[laughs\]

**Erik St. Martin:** Where do you buy one of those?

**Brian Ketelsen:** I don't know. Is that like one of those Amazon Dash buttons? If they had one for Dunkin' Donuts I'd be in deep shit.

**Carlisia Thompson:** I don't remember the last time I ate a donut, frankly... Hm. I'm due for one. Anyway...

**Erik St. Martin:** So I think we're running a bit over, so we should probably wrap up this show and get into the after-show.

**Brian Ketelsen:** Wait, we didn't talk to Elle. Bring forth the baby, we demand baby time.

**Chase Adams:** Oh man, I don't know she went..

**Brian Ketelsen:** We heard her playing just a little bit ago.

**Chase Adams:** Oh, did you? Man, I've got noise-canceling headphones on, so I wouldn't have heard her.

**Brian Ketelsen:** Well, there's nothing wrong with that.

**Chase Adams:** Do you really wanna hear from her? Because I can see if I can--

**Brian Ketelsen:** Of course we do. If she's awake. But never wake a sleeping baby, that's rule number one.

**Chase Adams:** Oh yeah, I know that rule. If the baby's not happy, then nobody's happy. Alright, hold it. Keep talking, and I'm gonna see if I can get her in here.

**Brian Ketelsen:** Okay, we'll keep talking. I had so many other really cool Go projects, let me pull up my bookmarks, and it will remind me of all of the ones that I didn't put in for \#FreeSoftwareFriday, because there's some really good stuff come up recently. Alright, here we go. So the go-tracing got me really excited. Oh, there's an org called Go-Interpreter, and they have an interpreter now that they're building called [Wagon](https://github.com/go-interpreter/wagon), which is a WebAssembly-based Go interpreter for Go. I got a little bit lost trying to understand what they were doing, but hey, [WebAssembly](https://webassembly.org/) is hot, and interpreting Go is hot, so that's really cool if building interpreters and WebAssembly is your gig... Go play with Wagon, that one will be fun.

**Erik St. Martin:** \[01:11:55.19\] Nice. You know, I saw WebAssembly come out and I was really excited by it, but I haven't had the chance to play with it for anything.

**Brian Ketelsen:** That's because it doesn't support Go yet. We need deep, true Go support, and then it will become important to me. Otherwise it's just some stuff.

**Erik St. Martin:** It's all Go, all the time.

**Brian Ketelsen:** Have we talked about [Mat Ryer's Vice project](https://github.com/matryer/vice) yet? Did we talk about that on a previous episode?

**Erik St. Martin:** No, I don't believe so. That's fairly new, and that's super cool, too.

**Brian Ketelsen:** Yeah, that one I'm really excited to play with. That's Go channels that are backed by message queues. So you treat them locally like Go channels, but they're actually doing network communications over message queues, so that you can have the Go channel semantics in a distributed environment. That's super duper cool.

**Chase Adams:** Alright, I couldn't get a hold of her mom, so she's probably gone down for a nap already. But I'll take a picture later and post it in the [GoTime channel](https://gophers.slack.com/messages/gotimefm).

**Brian Ketelsen:** Okay, perfect. We haven't seen any Twitter pictures in a while. I think it's been at least 2-3 weeks since I've seen one.

**Chase Adams:** I posted a lot on Instagram, because that's where my mom is, and she's the only person that I absolutely feel like I have to satisfy with pictures, since she doesn't live here.

**Brian Ketelsen:** Understandable

**Chase Adams:** So yeah, I'll put them on Twitter.

**Erik St. Martin:** Alright, so let's bring this show to a close, and we'll get into the after-show. Definitely thanks everybody for being on; a huge thank you to Chase for coming on and talking to us today. It's been great actually getting you on the show.

**Chase Adams:** Yeah, I'm so glad to have finally done it. It was not nearly as scary as I thought it was gonna be. Thank you guys for having me.

**Erik St. Martin:** It's all fun.

**Brian Ketelsen:** You have to post some reaction pictures of Elle when she hears you on the podcast for the first time. She might get a little confused.

**Chase Adams:** I'll have to get my wife to take the picture, because I don't know that I could sit in the same room with someone else and listen to myself talk. I don't know if you guys do that; I don't know how you do if you do.

**Brian Ketelsen:** I've never listened to our podcast. Ever.

**Erik St. Martin:** So definitely share the show with friends and colleagues. If you wanna subscribe, you can find us at [changelog.com/gotime](https://changelog.com/gotime). Follow us on [Twitter](https://twitter.com/GoTimeFM) if you wanna discuss a show. If you wanna contribute now to the transcripts, we have [GitHub accounts](https://github.com/thechangelog/transcripts) for that. With that, goodbye everybody. We'll see you next week! \[phone ringing\]

**Carlisia Thompson:** Goodbye!

**Chase Adams:** Bye!

**Erik St. Martin:** The phone rings, like...

**Brian Ketelsen:** Yeah, perfect timing! "Aand then the phone rings...!"
