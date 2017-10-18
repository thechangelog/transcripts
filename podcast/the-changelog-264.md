**Adam Stacoviak:** So Brandon, you've got this thing called Probot, and you work at GitHub... We've always been huge fans of what you do there and all the open source work obviously at GitHub. Probot was recently announced - can you give us the back-story in terms of your passion around this and how it came to be?

**Brandon Keepers:** Probot has been this long, long obsession for me. I've been at GitHub six years, worked on the engineering team on various features, and I spent the last couple years working closely with the open source community, trying to make sure that GitHub was meeting the needs of large open source projects, of maintainers that were over-burdened.

One of the common themes that kept coming out of a lot of this was that people were asking for or wanting features that weren't necessarily high-priority for GitHub, for one reason or another; either they should have been a priority and they weren't, or they're features that only a few projects need and isn't necessarily something that's kind of universal to software development.

So I've been obsessed with the GitHub API for a long time and built a lot of things; I've built this notifications client which now \[unintelligible 00:02:51.23\] Last year at Universe GitHub Apps launched - it was called GitHub Integrations - and as I was talking to people, it became pretty clear that people needed these features, and a lot of people had common things that they could share with each other, but they didn't really feel like they were empowered to build them themselves, or even that it was something that they could or should do...

So this kind of light bulb went off for me talking to people at Universe last year of this idea of like a scriptable GitHub, or scriptable workflows. GitHub has all of these primitives for software development - it has code, it has review, it has issues and project management, but what it's lacking for a lot of people is this notion of "When this event happens or when these conditions are met, for my team and my needs it should kick off this chain of workflows."

\[00:03:57.08\] It went through a bunch of iterations last fall. I started in November, I built this hack day demo where it used kind of a custom parameter, and you just commit a file in your repo and say "on this event, when these conditions are met, then do this thing." I got it pretty far; I worked on that for a few weeks.

Then after talking with people and kind of soliciting some feedback online, someone was like -- actually, like a jQuery-ish Javascript style thing where you could dollar sign on this event and then chain a bunch of actions together. I took it a little bit farther... Then this last March one of the folks on the Electron team named Jacob Groundwater reached out to me and he was like "Can I give you some unsolicited advice?", which is always the best...

**Jerod Santo:** Yeah, here it comes...

**Brandon Keepers:** \[unintelligible 00:04:50.00\] always say yes... Jacob is amazing, he's really brilliant. He said "Hey, this seems like a really cool idea, but I feel like you're trying to create an abstraction before you have the other layers figured out." That helped articulate something I'd been feeling; I'd been working on this project in my free time for several months, and I feel like the scriptable GitHub is really close, but the conditions... So "when a new pull request is opened, if it's a first-time contributor, then do this thing" - those logic gates I guess hadn't really been teased out, so trying to implement them on this custom grammar was really hard.

So Jacob kind of inspired this reboot, where it's kind of like three main components. He's like "Start with a bot framework, start with something that's just plain old Javascript, Node modules; people can do whatever else you want. Start to figure out how to make those easy to run, easy to deploy, and then as you're working through that, start to identify the common patterns and start to abstract those into a higher-level API.

So in March that kind of kicked off, and basically in like a couple of days I just tore out all the code. In fact, you can still see the original code; we can put it in the show notes, or something. It's now a plugin for the current bot framework, the original code.

So that was kind of the story of how it got to where it is. Then this last June, GitHub has a group of interns that come in, and this last June I randomly get this message from someone named Bex... Actually, Bex, do you wanna tell your side of the story?

**Adam Stacoviak:** Yes, please do, Bex.

**Bex Warner:** Yeah, sure. So I joined GitHub as an intern, and I was really excited for my time there. I was on the Community and Safety team. Going into the internship, I really had no idea what I was gonna be working on. When I got there, on the first day they told me that I was gonna be doing some IBM Watson level sort of analysis on toxic comments. I was like, "That sounds pretty cool. I wanna prevent toxic comments in open source." That was a very vague and not totally accurate description of what I ended up doing.

Basically, the plan that they had laid out for me was to create a series of open source GitHub apps that were designed to help large open source communities build and grow and maintain open source contributors, especially aimed at diversity and inclusion in open source. And since we were building GitHub apps, the obvious platform, that being a githubber I said I'd heard about, was to use Probot. So I was basically assigned a summer of doing coding working on Probot.

**Jerod Santo:** What an awesome internship, by the way. I'm thinking back to my college internship. It was at a technology company where I basically spent the summer answering phone calls and helping people upgrade their version of Java... I'm totally jealous right now, how awesome that internship sounds.

**Bex Warner:** \[00:08:08.19\] I think the tagline of the GitHub internship is "No coffee runs", something like that. \[laughter\]

**Adam Stacoviak:** Is that right?

**Brandon Keepers:** That's awesome.

**Jerod Santo:** So Brian, you're saying when Bex got involved, that's when Probot went from kind of being your passion project that you were making moves on, but not necessarily getting too much closer to shipping, to here we are, a few months hence from the internship, and now Probot's out there, at least in a version that you're willing to let everybody participate in. What did Bex bring to the table that you were lacking?

**Brandon Keepers:** Yes, we sat down and we had a chat, and just gave some awesome feedback. It was things like "Hey, I'm trying to do this thing and there's no docs" or "What are you doing for testing?", which was a question we kind of wrestled through for a little while... Because a lot of it - I've been just throwing a bunch of ideas together and seeing what sticks, and not being super diligent about testing, and stuff.

So I just think that \[unintelligible 00:09:14.07\] partnership I guess I would call it... We started meeting - it was probably at least once a week; we would sit down and chat about "Here's the next big hurdle." From the very beginning... I think after our initial conversation about docs, Bex, I think you started submitting pull requests to document some of the things that you had already run across. But I think just having somebody that was fully immersed in it, understood the value of where it was going, and constantly contributing questions and answers, was just an awesome experience.

**Adam Stacoviak:** So when you got to that point there with a lack of docs, it's a pet project so to speak, a passion project, you're not really trying to be production-worthy, so to speak... It's sort of like tinkering, in a way; a fun tinkering. What was the process going from that stage there to getting docs? Did you sit down, Brandon, and do it? Or Bex, were you the person that took that to the next level? How did the docs come from that moment there, what were the steps to go from no docs to docs?

**Bex Warner:** I just wanna point out that when I came into this project I didn't really understand that this was sort of Brandon's pet/passion project; I thought this was a very big deal, and I was a little intimidated at first, so I thought Probot was this big, well-built out thing. And over time, I realized that there was a lot more I could contribute and give back, but I think that the first step was just having more conversations about it, because at first when you're just working on something alone, it's a lot harder to figure out what the important things are, what the problems are, and I think probably the biggest step was when we decided to create a website for it. Brandon, if you wanna talk more about that...

**Brandon Keepers:** Yeah... I think at that point there had been various forms of documentation just like stuffed in the Docs folder on the repo, and those were more meant for me and the couple other people that were looking at it. The sign of any open source project becoming mature is having a website - I don't know if that's true, I just made that up. \[laughter\]

**Jerod Santo:** It's in there somewhere.

**Brandon Keepers:** Yeah, it's in there somewhere. I mean, I think it does force you though to think about "How does our project go from being useful to being presentable?" Part of it is just like "Here's the function that it serves", but then you also have to help people understand what that function is, and maybe even where it's going. So yeah, I think pulling together the site was a lot of that, going through "How do we wanna present this?"

\[00:12:03.10\] Because there's also a part of this to me - which maybe we can dive in a little bit more - like this is step one and where I think a lot of platforms are going in a few years... The idea of scriptable extensions, and not necessarily -- ten years ago \[unintelligible 00:12:19.20\] was the big innovation, and then you had this app-platform thing start to emerge. I think making your platform scriptable was gonna be the next, and I think there's even a few steps beyond that.

**Adam Stacoviak:** What kind of platforms make sense for that to play? You probably have some ideas, but where aside from GitHub does something like Probot work?

**Brandon Keepers:** I think you've seen a lot of it already happening... Twilio has been launching some really cool stuff in terms of not only making their platform more accessible to coders, but also non-coders, taking the "if this, then that" type of mentality around controlling these lower-level services.

Shopify has been doing this for a long time with the way they allow you to add functionality into your stores. Stripe I think has done an awesome job of some of this stuff. I think you're gonna start to see -- any of these software as a service type companies can benefit from this. For a lot of these companies, the GitHub experience is a lot; the challenge isn't necessarily implementing the functionality, but it's actually deploying it. So I can write a little workflow that customizes "if a pull request is opened, then ping this person", but now I have to deploy that to a server somewhere. And for most of us, even with free offerings like Zeit Now, or Heroku, or...

**Jerod Santo:** Glitch.

**Brandon Keepers:** Glitch, thank you; that was the one I was trying to think about... Which is amazing, by the way; if you haven't used Glitch, check it out. So even with those, there's still some sort of maintenance overhead, so I think starting to get to the point where these scripts are run and hosted by the companies whose platforms you're trying to extend I think is gonna be a huge opportunity for a lot of these \[unintelligible 00:14:25.03\]

**Adam Stacoviak:** So that's not where Probot is now; if I understand correctly, it seems like you're deploying your own version of it... Or is it run on GitHub?

**Brandon Keepers:** It's a little bit of a mix. We're basically trying to get to this world where any Probot app that you write is just magically running in the cloud, and things like Glitch are an amazing example of what can be done there. So what we're doing right now -- it's a bot framework written in Node, in Javascript, and you can take that and build your own apps, deploy them yourself, and then we're taking a bunch of little ones that we think are incredibly useful and reusable and we're running hosted instances of them.

An example - actually, Bex, do you wanna talk about Sentiment Bot, or the Welcome Bot?

**Bex Warner:** Yeah, sure. So I was actually just the other day writing up some documentation about that... So during my internship, one of the bots I created was Sentiment Bot, which was the aforementioned sentiment analysis, but just done through Google's Perspective API. Basically, the bot runs in a way such that if you install it on your repository, it will scan through issue comments, and if there's an issue comment that is above a toxicity threshold that whoever owns the repository will set in a configuration file, the bot will comment on it and link to the repository's code of conduct, as well as just sort of a retroactive way of trying to get people to reconsider potentially negative circumstances.

\[00:16:10.00\] That app is hosted, so anyone who wanted to install Sentiment Bot on their repository can just go and click through and get a free version of it. But it becomes more complicated when people want to install multiple instances of apps or mix in customizations that really make sense for their project; that's definitely a struggle we've had - making the deployed version work for everyone's specific needs.

**Adam Stacoviak:** So the bots that are available on Probot.GitHub.io right now that are under the Explore section, those are hosted by GitHub, but if you wanna do your own version of those or something like it, you host it yourself.

**Brandon Keepers:** Exactly. I think there's nine apps hosted right now. Probably about the time this airs there will be a few more; there's a couple others that are about ready, and then all of them that are listed on the site are open source. We're taking feedback on those projects, or you can stand up your own instance.

**Jerod Santo:** I do wanna dive into details on both the examples - those are two great ones, the Sentiment Bot and the Welcome Bot, \[unintelligible 00:17:18.04\] other ones that exist, to give people ideas of the types of things that people are building on Probot or what you can build with Probot, and then we'd also like to talk some of the details of like how it works with the events and stuff.

Before that, staying big picture for a minute, Bex had something interesting there a few minutes back, when they said that when they first started, they didn't realize it was gonna be Brandon's side project, or Brandon's passion project... I guess what that made me start thinking is there's this (I don't know) hazy relationship that I see from the outside with companies and people open source. So you have Brandon working on this in this spare time, but it's very much a GitHub thing, and the way you're talking, Brandon, with regards to like "In the future, it would make sense if GitHub was first-party hosting certain things...", it seems like it could be a valuable business endeavor for the company, and I would just love to have you speak on where all that stands and how you feel about it, and what it's like to have a side project that's also kind of a company project.

**Brandon Keepers:** This has been a big part of my life this summer, I guess. Obviously, I think that this is a direction that GitHub should look at going. It's still to be determined if this fits in with everything GitHub it's doing; either way, it will be an open source project that exists and is part of the ecosystem.

One of the great things about GitHub and a lot of companies now is their willingness to allow employees to kind of explore these ideas in open source. GitHub explicitly has this - Balanced Employee IP Agreement it's called, and I actually talked to our legal team in the last few weeks just around, you know, if this does become a future product thing, like is there any conflicts in this? And this is exactly the kind of thing that they're hoping to encourage. The company should be encouraging their employees to dabble at the edge of what might be an interesting product area, and if something comes of it, great; I'm still employed by GitHub, and this can become an important part of the company's future. And if not, that's okay; it's been a fun project, and I think a lot of people will still benefit from it.

Yeah, I mean... The short answer to that is I would love to see it become something official, and it's still to be determined.

**Adam Stacoviak:** \[00:20:01.03\] I think the interesting thing about a company like GitHub is that once you -- and you've been there for a while too, Brandon... Once you get to a place like you are as a company, it's pretty easy to start -- very similar to Amazon, how they have their main business, but then they also have AWS, and all then all these other slivers of Amazon things, but they're very much standalone businesses.

So I can see how -- maybe not so much how easy it is, but like Marketplace, for example, or /jobs. You've got your job, or you've got lots of different slivers of GitHub that isn't exactly GitHub's core mission, however it does lead to the core mission, which is advancing the open source mission.

**Brandon Keepers:** Yeah.

**Bex Warner:** Yeah, and I think an important part of the Marketplace is that it kind of encourages this open source ecosystem we're talking about, and I think that to an extent Probot isn't sort of limiting that, in the sense that -- you know, when you talk about Amazon, some of those products have competitors outside of Amazon, but what we're trying to do here is more just a platform for GitHub apps that really anyone could become part of the ecosystem, as opposed to closing people out from it, or making it a GitHub only thing.

**Adam Stacoviak:** Right. It's certainly focused on making GitHub smarter, I guess, for the individuals using it, but it's open to anybody to contribute, whether it's using the features apps or sharing your app, or having the flexibility to write your own and deploy your own. It's still the same Probot.

**Brandon Keepers:** I think that just looking at GitHub's product strategy if you will, GitHub is a tool that has become literally the hub of software development, but we're under no impression that GitHub will be the only tool that you use. Every software team is going to bring their own chat service, or bring their own CI, or have their own internal tools that they have developed over the years that they want to use, that should work alongside GitHub.

What I get really excited about with Probot, one of the reasons has kind of been this passion of mine, this idea that this could be something that starts to glue GitHub to those other things. It doesn't matter if you're using Slack or HipChat, or if you're using Travis or Circle or Jenkins... What's the connected tissue between all of those tools? Especially as more of our tools move into the cloud, I think it's important that those connecting pieces are open and accessible to anyone to use and to modify.

**Jerod Santo:** When we talk about side projects, I always think of things like generative art, or your own programming language... Things that are either art-driven or curiosity, but this is -- I guess my point is we don't wanna make light of it because it was a side or a passion project; very much this is a proof of concept that you are very interested in seeing exist, so you spent your spare cycles working on it. Is there added pressure when you're building something that doesn't just represent Brandon, but also represents everybody who associates themselves with GitHub the company? Or no big deal.

**Brandon Keepers:** That's a great question... I think it depends. There's been moments in GitHub's past where there is a lot of pressure to get something right the first time. Any company struggles with this around large product launches. If we roll out a feature, there's 5-10 million developers using it right away. \[unintelligible 00:24:06.29\] 25 million(ish) developers on GitHub at the moment, so there is a pressure in that sense.

\[00:24:14.07\] If you're going to roll out something at large scale, you'd better be kind of sure that it's right. Our product teams have a lot of really good ways of arriving at that, and almost everything that we ship is iterative; we start to roll it out to select groups, and stuff like that. So I think there is that sense in anything that's kind of core, I guess, to the business.

Something like this - and maybe since this was a side project and a passion project, I haven't felt so much of the pressure in terms of what will people think of this with regard to GitHub. I think the bigger pressure has been like I've kind of bought into this vision of where it's going, and if it doesn't work out - that's a kind of pretty big bet for me personally. I'm more than happy to be wrong, but I don't want to be, I guess, if that makes sense. \[laughter\]

**Adam Stacoviak:** It sounds like you have a lot invested in this...

**Jerod Santo:** It's a big bet. He's putting his time into it, he's putting his name on it, this is where he thinks things are heading, or he hopes so... That's tough to put yourself out there like that.

**Brandon Keepers:** I think for GitHub itself \[unintelligible 00:25:26.20\] for me a lot of this came out of that moment of like people are asking GitHub for things that the engineering team couldn't necessarily deliver, and that's nobody's fault. We have a very large audience, and that's a good problem to have, but that doesn't mean that we can't enable people to start building those things themselves. In fact, I think the community would be better off if we gotten to a place (we, the community, not GitHub) where as a community we were starting to actually build features for each other.

A large open source project like Kubernetes knows a lot more about the pains of managing a large open source project than someone working on some product feature at GitHub, or any company. So I kind of want us to get to the point where some of these communities that are pushing the edge of where software is are the ones that are thinking about "You know, if I build this little bot or build this little feature, it's a tool that I can source." This is kind of like open source at its heart, right?

So I wanna see us start to get to that with all of the other products that we use, not just tools and libraries that we run on our local machine.

**Adam Stacoviak:** Coming up after the break, we talk with Brandon and Bex about more of Probot apps, bots, whatever you wanna call them. We wanna know how they interact with the GitHub Marketplace, how it's built into GitHub apps, what the vision of Probot is, what it might look like in two or three years... And it might even be cool if Probot lived inside GitHub instead of a self-hosted kind of thing you get around on your own. We talk about all those details after this.

**Break:** \[00:27:23.25\]

**Jerod Santo:** Brandon, you said that the form of Probot, what it exists as today, began to solidify for you when you had some help from your friend, but also when you started thinking about the use cases that you were trying to solve for. We'd like to hear some of the use cases out there. We heard a little bit about Sentiment Bot, and - was it Welcome Bot?

**Bex Warner:** Yup.

**Jerod Santo:** But surely there's more than just that, so tell us some other things that Probot can do today, and then we'll get into maybe what Probot can do in the future.

**Brandon Keepers:** Yeah, sounds good. So probably the first app that really took off was the Stale app. What it does is it just sweeps your repository for stale issues and pull requests. This is kind of a problem that plagues every open source project, where you either open up a bunch of issues of things you wanna do eventually, or the community starts to come in and make feature requests. And most of those things are great ideas, and probably things that could and should be done given infinite resources, but the reality is just that they're not gonna get done.

I've actually over time started to notice this happening within GitHub as well. A lot of our projects - we used issues and pull requests to manage them, and I started to feel completely overburdened by all of the unfinished work that was in front of us. The Jekyll project - Jekyll is the thing that powers GitHub pages - had an app that if there was no activity on a project, would just paint it and say "Hey, it looks like there hasn't been any recent activity on this. If there's no more activity in like a week, I'm gonna close this issue."

That was kind of one of the first ones where I was like "Oh man, this is awesome. Every project should have this." Stale is now used by -- I don't actually have their account in front of me, but I would guess 150-200 organizations on GitHub. Last time I looked at it, it commented on like 6,500 issues... 6,500 public issues, because you can also use these on private repositories as well.

And yeah, it just helps you keep your project in shape, and make it so that everything that's open is either actionable, or things that you intend to keep open and keep on the radar of the team.

**Jerod Santo:** I think it's really helpful... There's a weird social dynamic when you have a certain issue that just goes unworked on for long enough, where it's like "This should really be closed, but I feel weird closing it explicitly, because that's mean, or rude, or something." So if we can shove off these hard things onto robots and just be like, "Well, it just passed the threshold and it's stale now..." I guess that's what has to happen; it almost frees you up to not feel so bad about that.

**Adam Stacoviak:** Certainly this is a conflict, I'm sure... Because you can't really get mad at a robot. \[laughter\]

**Brandon Keepers:** Well, you can, but it doesn't help.

**Adam Stacoviak:** Right. I mean, they're not gonna argue back.

**Jerod Santo:** ...unless you programmed it to argue back.

**Bex Warner:** You'd feel a little silly.

**Adam Stacoviak:** Yeah, you would feel a little silly, exactly. \[laughter\]

**Jerod Santo:** \[00:32:01.23\] That might lead us later on to where -- we saw your best practices for robots; we might dive into that at the end if we have time...

**Brandon Keepers:** Yeah, I was actually gonna bring that up related to getting that in a robot... Actually, is that alright if we go into that real quick?

**Jerod Santo:** Yeah, let's do it.

**Brandon Keepers:** Just real quick, based on Stale, because I think that's really relevant. So one of the notions behind most of these apps that we've been working on is we should build it in a way that it acts as a normal human would, to a degree. So Stale - we want it to not use something that a maintainer wouldn't be willing to do, and it should be practicing empathy. So thinking about "How is the community gonna receive this?" - the Stale bot will come in and say "Hey, if there's no more activity, I'm gonna close this", but it does give people a chance to voice their interest and say "Actually, I do really care about this, I wanna make it happen."

I think it's important for the entire bot ecosystem and app ecosystem to think about, as our lives become kind of surrounded by robots, I think it's gonna get to the point where we're just overwhelmed, and we're around all these dumb robots that don't care about us as humans. But as long as the designers of those robots are remembering that there's humans on the other side of that, I think that we can design good interactions.

**Jerod Santo:** There's also that uncanny value of when a robot almost sounds human -- it's almost like Siri a lot of times, or the Google equivalent... It will be more annoying because it's so close to being sentient, but it's not, you know?

**Brandon Keepers:** Exactly.

**Adam Stacoviak:** Way too often I give Siri more credit than -- well, she or he, depending on what voice you choose... But it's like, "No, Siri, I did not mean that", and it's just like, "Oh, I forgot, you're a robot. You don't even care what I'm saying to you." You get to that point, it's like... And Bex, back to what you said, you kind of feel stupid, because you're talking to a robot and they actually don't really care, and based on the last message, they don't understand either.

**Jerod Santo:** That reminds me - do you guys know what Siri calls me, my nickname? Adam, you know this... I told you this one. It calls me "How do you say toilet in Spanish?" \[laughter\] And the reason it says that is because right when they added some Siri features, I pulled it out and I was gonna test it, and I said "Hey Siri, how do you say toilet in Spanish?" and then she responds and says \[Siri's voice in the background\] -- whoops, I actually just triggered her. Shut up, Siri!

**Brandon Keepers:** That's awesome. \[laughter\]

**Jerod Santo:** Sorry. So then Siri responded and she goes, "Okay, I'll call you 'How Do You Say Toilet In Spanish." And I said, "Yes, you will", and so she has been calling me that ever since... And I love it.

**Adam Stacoviak:** Were you with me when that happened?

**Jerod Santo:** I was riding in your car.

**Adam Stacoviak:** That's right. I was like, "That feels really familiar." I knew that.

**Jerod Santo:** It was like two and a half years ago, and she still calls me that to this day.

**Adam Stacoviak:** That is so funny.

**Jerod Santo:** Even inside mail, when a new e-mail comes in, it will be like "From Brandon Keepers to How Do You Say Toilet In Spanish." Anyways...

**Adam Stacoviak:** Yeah, the uncanny valley, for sure.

**Jerod Santo:** For sure.

**Brandon Keepers:** Yeah, I mean... I have a lot of feels about the bot ecosystem and its emerging, and one of my strongly held beliefs at the moment is that I don't converse with bots; I want bots that either know what I want, or that I can command. I don't wanna have to have a conversation with a robot, knowing that it's a robot. So I like that my robot just every day vacuums the floor at 9 AM, because at one point I told it "9 AM is the time that is ideal to vacuum the floor."
\[00:35:49.09\] I like that my thermostat adjusts the temperature based on my behavior in the past. I shouldn't have to talk to it. So yeah, there's this fine line between bots practicing empathy and going too far to like them pretending to be human. It will be interesting to see where that goes in the next 6-12 months.

**Jerod Santo:** We'll add your list of best practices to the show notes, the top-level categories or empathy autonomy and configuration, so anybody out there building a bot, check out these best practices. And if you have best practices of your own - I don't know, PR, or maybe we should have a thing that is beyond just Probot, but in general. I think best practices for building bots would be a cool thing for anybody to have access to.

So back to the use case - we've got Stale, we've talked about Sentiment, and Welcome bot. What are some other things that people have built with Probot?

**Bex Warner:** I'm gonna talk about DCO for a bit, because I think DCO is kind of a cool, niche use case. I think that back when Probot was in some of its early days, some of the Linux Foundation people who are really into using the Developer Certificate of Origin approached Probot and were like "Can you build us a bot that will essentially check for a sign-off on every single commit?" So DCO is a bot that does that, pretty simply.

I think it's a really interesting use case just because of - we have recently been running into a lot of stuff talking about how you handle errors and what to do when a commit sign-off doesn't have the DCO sign-off, what should we do in that case, how do we correctly communicate with the user that you don't have a sign-off, and to basically say "Here's how you can fix it and add your sign-off if you agree with the Developer Certificate of Origin."

It's a really simple bot. Going back to best practices a little bit, I think that bots commenting on things can get really tedious really quickly. I for a while was running several of the bots I built all on one repository, and having three comments in a row from three different bots just doesn't help anything, and honestly it can be really annoying, which is not really what you want your bot to be. So DCO is only a status check, similar to like a CI check, and I think bots like that, that just solve a really simple task are the coolest ones that we've built.

**Adam Stacoviak:** So it's almost like the bots are, to some degree, reacting based on some sort of action or event - as we'll hear about in this bit - but then potentially even try and have a conversation to some degree, like stepping on each other's toes, basically.

**Jerod Santo:** Wasn't there somebody who had two bots that were in an infinite loop at some point, on a GitHub thread? I can't recall the details of that, but I remember thinking -- there was an infinite loop somewhere where one bot was doing one thing and the other was undoing it or replying to it, and they just kept going back and forth until... I don't know, can the whole GitHub website segfault? \[laughter\]

**Brandon Keepers:** Yeah, at some point the bots trigger abuse mechanisms. I've seen a few threads like that... There's been some really clever ones actually, where they'll use bots to playfully interact in the pull requests, which is fun.

**Adam Stacoviak:** Most of the apps you have listed here though seem to be focused around scripting a better issues user experience or some sort of communication pattern back to the humans involved, since we're talking about bots and humans, basically... You know, the humans involved in a repository or a project. Is that kind of where most of the current features apps are, or is that where you see them playing the best fit? What is the state of that?

**Brandon Keepers:** It's probably more of a reflection of where our heads have been at, just trying to think through like "How do you demonstrate that you can add features on top of GitHub?" And some of them are what I would consider rather core features. So there's an app for configuring GitHub settings via pull requests; so you just commit config.yaml to your repo, and you can change the project name, you can change the topics, you can change whether it's public or private, so you can have -- you know, like open-sourcing a repo is now a pull request. You could change the collaborators that are on it, you can configure the labels...

\[00:40:16.15\] So just kind of trying to get people thinking on this idea of -- you know, even something like Bat, which is like "Oh, we're going to have pull requests on repo settings; that doesn't have to be a core GitHub feature." It really is not -- the API pretty much allows you to do anything you can do from the web UI, so we're starting to demonstrate some of those features.

There's also a few bots -- I'm trying to not say bots; a few apps...

**Jerod Santo:** Why don't you wanna say bots?

**Brandon Keepers:** \[laughs\] It is--

**Bex Warner:** We had a great branding decision in 2017 in which we transitioned from saying 'plugins' to saying 'apps' all the time. We also decided to not say 'bots' at that time.

**Jerod Santo:** So Probot has to build apps, but it's bots, not apps.

**Brandon Keepers:** \[laughs\] I know; it's unfortunately named. Naming is hard. \[laughter\] The bot - part of it is just there's a lot of craze about bots. As soon as the technosphere gets excited about something, they're always kind of naturally skeptical. Bots I think are really important, but they're currently in one of those hype cycles, and I wanna make sure that as we come out of that hype cycle, that this doesn't die with that. Because I think it's more to it than just bots. It's more about building applications and utilities that extend the tools and platforms that we use.

**Jerod Santo:** Right. And apps have already been through their hype cycle, back in '08... \[unintelligible 00:41:53.08\]

**Brandon Keepers:** Now it's just practical...

**Jerod Santo:** We're over it, yeah.

**Brandon Keepers:** I think the other part of it is kind of going back to that uncanny valley idea. There's a really great talk by a woman named Kate Compton called "The Poetics of Bots." Kate's actually speaking at GitHub Universe - it's actually Platform Day, which is the day before GitHub Universe - about this. I probably won't be able to summarize it very well, but she looks at Plato's ideas of poetics, which is like theater and the way that we present stories to each other, and she compares that to what is a bot. Well, a bot is an algorithm with eyes. It's this computer algorithm thing that we give a personality to... I love that notion. It's not just the functionality of the application, but it's the way that we experience, in the same way that we experience theater.

So I love that; you'd think I would be tempted to call it bots, but there's also this fine line between -- a lot of these things actually aren't intended to be bots. They're intended to just be algorithms or software. Kind of going back to my idea that I don't wanna converse with the robot, I want the robot to just do the thing that I need done, with as minimal interaction from me as possible. So between the hype cycle and that notion that a bot does have a personality and some of these things don't - there's an important distinction there.

**Jerod Santo:** There's an aspect of scale there, and I want you to tell me if I'm keying into it or if I'm being mislead, but with a bot, and even with a lot of the existing apps that you guys have - with Stale, with Welcome, with Sentiment bot; uh-oh, it's an app called bot... \[laughter\] Naming is hard. These things are all kind of like the UNIX philosophy, like one thing well. They're very small in the scope of what they try to accomplish, but then when you go to GitHub Marketplace where apps exist and you have Circle CI and all these other things that are business-level integrations with GitHub - is Probot always going to live in the small UNIX philosophy of scripting GitHub, or is it also supposed to scale up, and you're building apps with Probot that you can maybe build a business on? Which one is it?

**Brandon Keepers:** \[00:44:20.13\] That's a good question. From the beginning, Bex mentioned that we originally called them plugins, and it's actually designed so that any of these apps can all be run from the same instance, the same deployment; we can talk more about how it's built, but it's all Node, so if you wanna combine multiple things together, you just declare dependencies on each of those packages and then it'll start off and run all of them in one instance.

I was kind of intentional starting to look at home some of these large open source projects were designing their automation. If you look at a project like Kubernetes that I mentioned earlier, they have a ton of really awesome tools built around their GitHub project, but they're all these monoliths that are tied to Kubernetes' workflow. So the idea was "Let's try and pull all these individual pieces of functionality out, so that we can deploy them and they're useful on their own." But then if somebody has custom needs, or if it's an enterprise that wants to run something on their own infrastructure, they can pull all these together and not have to reinvent the wheel.

To more directly answer your question, I think the answer is actually "I don't know." I like building small things because they're easier...

**Jerod Santo:** So do I.

**Brandon Keepers:** Bex and I had this back and forth a lot, where we have all these really tiny apps, which is really nice because every single one is this new fresh start, but then you start to see the patterns in all of them as well, which I think is kind of helpful for influencing future design.

**Adam Stacoviak:** On that note, since this is a framework for building GitHub apps, and GitHub apps is essentially - correct me if I'm wrong, but if the Marketplace is built on this GitHub apps idea... Right?

**Bex Warner:** Yup.

**Adam Stacoviak:** Okay, so if that's the case, you then have this passion project you've been lifting up, Brandon, and now Bex is involved and others are involved, and it's become more and more legit, so to speak, it's no longer this side thing that doesn't have a name or a face or visibility...

**Jerod Santo:** A website.

**Adam Stacoviak:** Right, a website, documentation - all the things we've talked about... It seems to me that the worlds are colliding, so to speak. You're giving people the ability to create what is in Marketplace, but Marketplace has its own strings attached, which is like if it's a for-profit, you have revenue share, you've got some edge cases that you may not be personally able to answer now, but at some point Probot may graduate to be something renamed or altogether different, but with similar roots where you're coming from.

**Brandon Keepers:** The way I see this is that there's the set of features that GitHub decides to build into the product on one side, and then you have on the other end of the spectrum (if you think about it that way) Marketplace apps, which are things that are profitable products that have enough value that you can go and resell them and build a business around them. And I think in the middle there's this massive gap of features that are useful to developers, but that aren't profitable for someone to start a business on, and aren't interesting for GitHub to build. I think that's the sweet spot for Probot.

If somebody wants to try and build a business on closing stale issues, best of luck... \[laughter\] But those are just the type of things -- as developers, we shouldn't have to deal with the overhead of this lack of automation in our lives every day.

\[00:48:10.22\] But some of these things just aren't profitable, so the way I thought about it and have tried to explain it to other people is like my hope is that this fills in that gap in the middle. Developers get the best experience, you get first-class features from GitHub, great apps from Marketplace partners, and everything in the middle the community can build themselves and share.

Inevitably, I think it is going to force Marketplace people to keep going up the stack, and try and find things that are higher value. I think this is like the story of human progress, where we're constantly solving one problem that used to be profitable and then now it becomes commoditized and you have to go on and solve the next problem. I think it will have that effect, but I think in the end developers get better tools... And even people building businesses - you're going on and building more interesting businesses, that are harder to replicate, which I think puts you in a better position.

**Jerod Santo:** Let's talk about the technical nitty-gritty a little bit. You mentioned Node, but just thinking from the perspective of "Okay, I would like to script my GitHub - how can I use Probot?" What are the events that are exposed, how do I program against it? We know it's gonna be some Javascript, or anything that compiles to Javascript, I suppose, but tell us how it all works.

**Bex Warner:** Basically, what you need to do is you need to go on GitHub itself and set up a GitHub app, and from there you get a few things - you get an app ID and a private key, and then you can start running a Probot server from there, and that's kind of your connection to GitHub. Through there you can also set up permissions, basically.

The core of Probot is listening on GitHub webhooks, and GitHub webhooks are basically anytime you do an action on GitHub ... Anytime a pull request is opened, you open a new issue, you close an issue - all of those different things count as a webhook, so we can listen on those different webhooks and then take actions based off of them.

So you set up a GitHub app, you choose your permissions... Say you want to do something everytime a new issue is opened, so you choose the issue event and you give the app that permission, and then in your local dev environment you can paste the very simple Probot code - I think there's some on the frontpage of the website documenting; you just basically have a robot act on issues.opened, and from there you'll get the context of what's known as the payload, which is basically the webhook event that has just occurred.

GitHub's API is pretty intense, so you'll get a lot of information about that issue that's been opened, and then based off of that you can do anything with the content. We have a built-in API client through the Node GitHub library, and from there you can basically take any action on GitHub; you can add labels, close the pull request, assign people etc, and pretty much do anything from there with the code.

**Jerod Santo:** It sounds so easy. Anything to add, Brandon?

**Brandon Keepers:** No, Bex covered it. It basically tries to abstract all the details about building an app that are not unique to the app that you build, so you get \[unintelligible 00:51:36.03\] for the events, you have an authenticated GitHub client and then you can start making use of any of the API's available on GitHub.

**Jerod Santo:** So it probably would be exhaustive to go through all of the events and stuff, but maybe if there's -- and of course, there's documentation now, so go read that, but is there anything that's glaringly missing? Like, "Oh, I wanna build this", but you guys have already thought of that and you can't do it because of reason X, Y or Z?

**Bex Warner:** \[00:52:05.07\] Up until recently the pull request reviewer API was unavailable to GitHub apps, but I think as of potentially soon, most of that will no longer be an issue... Right, Brandon?

**Brandon Keepers:** Yeah, I believe so. To kind of expand on that, so GitHub apps was one of the first major features that was launched as a preview feature. It was launched last year at Universe, and the idea was to get it out in front of people so that they can start using it and building on it, and keep iterating on it.

The result of that is actually that there's still some things that are in progress, one of that being some APIs still aren't set up to work with GitHub apps, but hopefully -- the platform senior was working really hard on that, so hopefully that won't be the case soon... Every API should be available, that's \[unintelligible 00:53:00.22\]

**Jerod Santo:** Cool. So the next step, let's talk about use cases that don't exist, and maybe you all could just throw out some ideas. You've probably had more than we have in terms of thinking about a thing but not actually building the app for reasons. We have some apps that exist; are there apps that -- I mean, there obviously are apps that don't exist, but what are some things that you've thought of that you just haven't had time to build yet, or you'd love for somebody to be inspired and go build a Probot app?

**Brandon Keepers:** There's a couple apps that are in progress; a couple of them will be available by the time this publishes, but for some of them I think it will be a long time. One of them that should be available is our Reminders app. One of my frequent problems with GitHub issues or just work in general is somebody will ask me about something; it's like "Yeah, I have this and this going on, but I'll come back to it next week", and I don't have a great system for doing reminders. I've tried to-do lists and task lists and using reminders apps all over the place, but one of the things that I've figured out works for me with everything in life is I store information about that thing in the place where I'm going to act on it. I keep book recommendations as a wishlist in Amazon, because that's where I'm gonna buy them. I keep movie recommendations in an app on my phone that I buy movies through.

So for reminders, I want those in GitHub, sort of introducing basically a couple new concepts with Probot where you have slash commands. So I can reply to your issue and say "Yeah, I'm in Amsterdam this week, but I'll take a look at it next week", and then just below that "/remind me next week to do whatever." That should be launched pretty soon.

There's the Linter -- Bex, do you wanna talk about that? You've probably worked on it more than I have at this point.

**Bex Warner:** Yeah, Linter is my current little pet Probot I'm trying to get working. Basically, the goal of that one is to - whenever you push up a commit that \[unintelligible 00:55:12.15\] Right now it's just implemented for Javascript, because that's what Probot's in, so it's the easiest - and then it would automatically push up a follow-up commit linting your code for you, for any linting things you might have missed. So it's basically just taking the hassle out of having to read through a CI log telling you you don't have the semicolon 20 lines down.

**Adam Stacoviak:** Brandon, when you were saying what you said about the slash commands and things like that, it kind of made me feel like, since you said this is designed to help you add features to GitHub, it almost made me feel like the reminders idea could be similar to how a browser extension will recognize that you're on X, Y, Z site, for example Hacker News, where it'll say "buffer this" or "do something somewhere else" where it actually adds interface. So in the soundbar, rather than just a slash command, you might actually have a brand new piece of interface because you have this app installed... And the interface, maybe it's a standard way GitHub has interface. You can maybe add things to the sidebar, or add meta data to issues... Just different things like add things to GitHub that aren't GitHub, and maybe store that data somewhere - I'm not even sure how, but this seems to open the door to allow you to make GitHub your own. Is that what you're thinking?

**Bex Warner:** \[00:56:34.04\] Metadata... \[laughter\]

**Brandon Keepers:** Yeah, that's what I was thinking... Yeah, that's actually one of our goals in experimenting with this - trying to figure out how to push the platform. The idea about adding UI to GitHub is not new. A lot of integrators have been asking for that, and it's something that a lot of people on the platform seem to be really interested in. I think it's just a matter of figuring out what are those patterns.

Personally, what I would love to see is if I install integration in an app that offers CI, there should be a Rebuild button on the side of the page.

**Adam Stacoviak:** Yeah.

**Brandon Keepers:** Or if I install Heroku or the AWS app, there should be a Deploy button. We're trying to tease out some of those patterns, and a lot of these, again, are things that the platform team has been thinking about for a long time. There's some that are just really hard problems, so I think what we're trying to do is "How can we standardize at least the concepts behind those?"

Another example of this is that DCO app that Bex mentioned; we've been trying to figure out how to surface errors to users in a way that's helpful, because DCO, if you don't do it right, you have to rewrite all of your commits.

And the status checks are really great in GitHub, except that they don't give you a spot to actually then help users resolve those errors. If your CI fails, like you click through the link and then \[unintelligible 00:58:03.29\] your CI system has the error log. So it's a really interesting thing about like "How can we bring those back into GitHub?"

We're experimenting with a lot of those patterns, storing metadata on issues, slash commands, just \[unintelligible 00:58:22.09\] the results of checks, like CI or DCO...

**Adam Stacoviak:** This is very much \[unintelligible 00:58:27.29\] "It's out there, it's available, however it's early in its days", so a lot of innovation, a lot of change could be potentially expected, because you're sort of in this "How should it work? How could it work? What does the community really want, what does the community really need?" and even down to "How is it hosted?" Because you've got one, which is hosted apps (that you do) in a .github directory inside of your repository, or the opposite, which is hosting externally - Heroku, Glitch... However, it seems like you're still in the very -- it's a cake being baked. It's ready for usage, but maybe not full-on consumption.

**Brandon Keepers:** Yeah. I think one of the things we were trying to do with all that there was recognize at least the abstractions early on and pull those out, so that apps aren't having to -- actually, I think the config one would be a good example... Can you talk about that, Bex?

**Bex Warner:** Yeah, so one thing that was one of the original goals of Probot was to not have to use any outside data storage, so most third-party integrators (like Travis or any CI service) have their own website; you go to their own website, and that's where you view all the data that they're trying to give you. But with Probot, none of the apps at this moment have their own website. Basically, we just wanted to be able to build apps that were purely dependent on your GitHub repo, so that's why we came up with the idea of having configuration in .github files, so that all of the (basically) history of your GitHub app lives within GitHub, so it's kind of purely using GitHub as its platform.

\[01:00:20.09\] Recently, we've been having a lot of conversations about the best ways to store configurations that aren't annoying for people, because we've had people want to install GitHub apps at an organizational level; if you have 100 repositories in your organization and you want the same style of settings to act on them, we're not really in a space right now where you can easily set that up for all 100 repos without having a configuration file in every repository. And we haven't really seen a lot of good patents for apps that are acting upon it without having some sort of third-party actor doing it for them.

**Adam Stacoviak:** So right now you're not sure how to do it at a corporate level, across an organization, but you can do it now at project levels.

**Bex Warner:** Yeah. There are definitely ways to accomplish it for an organization, it's just maybe not as easy as it could be.

**Adam Stacoviak:** Right, an elegant solution that allows you to easily manage it. That makes sense.

**Jerod Santo:** I have an app idea.

**Adam Stacoviak:** Share it, Jerod.

**Brandon Keepers:** Let's hear it.

**Jerod Santo:** Okay. Bear with me... It's called Changelog Promoter Bot. \[laughter\] It watches every repository on all of GitHub.com issues, and anytime somebody references a changelog, it just chimes in and says "I'm sorry, did you mean the Changelog, an awesome podcast about open source, or did you mean the actual changelog of this project?"

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** And it just links to our website.

**Brandon Keepers:** I have a feeling that will get marked as spam. \[laughter\]

**Adam Stacoviak:** That's be funny.

**Brandon Keepers:** That's a great idea.

**Bex Warner:** Yeah, the spambots are very aggressive. On my testing bot, I got it marked as spam within my first three days of my internship at GitHub, and it was quite scary...

**Jerod Santo:** Oh wow... Achieved and unlocked. \[laughter\]

**Adam Stacoviak:** We're very close to bot/app spam.

**Jerod Santo:** Oh, yes.

**Adam Stacoviak:** A problem we did not want on GitHub. I mean, it's hard enough to keep up with notifications, let alone spam.

**Jerod Santo:** No spam. What's some ways that people can get involved? Is it to build apps, is it to get involved with the framework itself? What are ways that people who are excited about Probot and this possibility of scripting GitHub to our liking - what's the best way that the hacker community can help out this project?

**Brandon Keepers:** If you check out the website, probot.github.io, there's basically three main ways right now. One, just start using some of the apps, give feedback on the ones that are already hosted. We linked to all of the them on GitHub that have been written so far; go try them, hack them, figure out what makes sense and what works for you and what doesn't.

Then the second thing is to start to dive in, to play around with it. It's really easy to get started with the "Hello, world" example. You can run it on Glitch, so it's free hosting, you can edit it live right in the browser...

And then the third way is just getting involved with the community. There's been a really fun community around this project, starting with Bex, and then several of GitHub's interns this summer got really involved - JasonEtco on Github, Brian Anglin (@anglinb) I started naming people, now I'm gonna forget a bunch of people... The community is starting to take off. We do lots of trout slapping in the Slack room... \[laughter\] Is that phrase familiar to you guys?

**Adam Stacoviak:** No, I was lost. Trout slapping - it's like are you a bear?

**Brandon Keepers:** Yeah, it's something like that. I don't even know how it started.

**Bex Warner:** \[01:04:08.24\] So we also have - continuing our plug for \[unintelligible 01:04:09.15\] - a weekly office hours that we just host; it's basically a video conference that anyone can join, ask questions, get help, and during that video conference someone was talking about some product on Slack called Slap, and being curious, I googled it and the first result was this Slack app that had a /trout command and it would just slap people with trout, like the fish trout... So we built one for our own Slack channel so that we could trout slap each other. \[laughter\]

**Brandon Keepers:** It's a term of endearment.

**Adam Stacoviak:** It seems like it. I wanna be trout-slapped. \[laughter\]

**Bex Warner:** Join our Slack channel.

**Brandon Keepers:** Yeah.

**Adam Stacoviak:** I noticed that your contributing document is pretty thorough too in terms of like adding apps, and in terms of next steps. Someone would be saying "How do I add an app?" or "How do I host my own app?" so your contributing documentation has some pretty good information there in terms of like adding your app to the website, adding a new file in the /apps directory, all that good stuff. That's a pretty neat little thing, to be able to add that.

What can somebody expect in terms of protocol after they do that? Is it a pull request that obviously will get opened up? What's the process or criteria, so to speak, of accepting, or even the kind of apps you're looking to accept?

**Bex Warner:** I actually outlined most of that document, and basically the goal was -- the number one concern is that it's just not like an existing app, and it is its own app and it actually does something on GitHub, it accomplishes some task through the UI. That's basically it for listing an app.

We will list any app that does something and to the best of our knowledge isn't stolen or copyrighted in any way. But for hosted apps we have a few more strict requirements. We'd like to see basically minimal documentation for how you can get set up. Usually, just a screenshot of the bot in action is enough, or if there's any configuration needed, what that is gonna look like. We also want the apps that we host, obviously, to be open source, and then a couple of other just general maintenance things... We want them to have a license, we want them to have code of conducts, and someone willing to maintain them.

But it's a pretty simple process. Either me or Brandon will probably reply to anyone who opened a pull request pretty quickly.

**Adam Stacoviak:** So is it possible that you would have an app that you have here but then also host yourself? It seems like adding your app is one thing, but then hosting your own app is potentially another; will you have two directories, where one is the featured, that are under the nine now, plus the more that are coming, and then potentially a list of hosted apps that are sort of like best of, so to speak, or just from the community?

**Brandon Keepers:** The ones that are listed now are all hosted. We're still undecided if we want to -- in the back of my mind I've always had like, we'll feature the ones that are like one-click install, and then if there's other ones, anything else where you have to run it yourself, it requires a little more digging... But that's a hard chicken and egg problem for some of these apps that kind of getting traction. So I think we'll probably just exercise a little bit of editorial around -- you know, there's a couple apps... There's one that does duplicate issue detection, as an example; so you open a new issue, and it will search for other issues that look like that and then comment "Hey, were you looking for this other one?" Something like that to me seems really useful, and I would love to just see a version out there, but it basically just needs a little bit more work to improve the algorithm.

**Adam Stacoviak:** \[01:08:00.11\] What's nice too is that you're actually linking up repository directories; the work in progress, for example, is \[unintelligible 01:08:05.20\] and seems to be not a githubber, from Hoodie, but the person - or persons, or community that are involved in that repository or that app get some credit when they get their app listed. Credit where credit's due, right?

**Bex Warner:** Yeah. And we've also talked about adding more community content style features, adding better ways to give credit to people who are contributing to apps, but maybe not the main creator. We were also considering talking about adding a blog and featuring a different app every month and just having sort of community content, as Probot hopefully grows, to basically be able to give people credit where credit is due.

**Adam Stacoviak:** Very cool. Bex and Brandon, thank you so much for taking your time, and obviously the promise to care about the community - I think this is certainly something that GitHub and the larger open source community will really appreciate, because you're putting a lot of power back into the users' hands, and being able to do things that obviously they weren't able to do before. It's a greenfield, so hopefully this stays in place and becomes something that people use quite a lot.

Thank you so much for joining us, you guys are awesome.

**Bex Warner:** Thanks for having us.

**Brandon Keepers:** Yeah, thanks.
