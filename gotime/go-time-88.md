**Mark Bates:** Welcome everybody to our Go Time podcast on May 28th, 2019. I am Mark Bates and we've got a couple of great guests with us today. As always, the wonderful, fantastic and exuberant Johnny Boursiquot. How are you doing, man?

**Johnny Boursiquot:** I am doing well. How are you?

**Mark Bates:** Alright, alright. I like to give everybody a big welcome here. I'm trying to be like Mat, but polite, if we can, so... \[laughter\] That's a tall order for me, too. It's polite Mark. You're gonna get the best you're gonna get. And of course, the wonderful, the talented and the even better than Johnny, Carmen Andoh. How are you doing, Carmen?

**Carmen Andoh:** \[laughs\] Hello!

**Mark Bates:** And apparently, it's somebody's birthday today... Isn't it, Carmen?

**Carmen Andoh:** It is!

**Mark Bates:** And Johnny wanted to sing happy birthday to you, didn't you, Johnny?

**Carmen Andoh:** \[laughs\]

**Johnny Boursiquot:** Wow, that was out of left field, but okay, sure. \*coughs\* Yeah, that was it.

**Carmen Andoh:** \[laughs\] It was perfect! Wow, what a delivery!

**Mark Bates:** Okay, well we may have to cancel this episode early if no one's gonna participate in the fun...

**Carmen Andoh:** Aww... \[laughs\]

**Mark Bates:** Anyway, welcome! I'm very excited. Mat couldn't be here with us. I think he's off with all the GopherCon EU peeps, doing [GopherConEU](https://twitter.com/gopherconeu) funness in the Canary Islands... So he entrusted me to guide the ship. We're gonna talk about open source this week. I think it's gonna be an interesting show, because I know Johnny you don't contribute a lot to open source, correct?

**Johnny Boursiquot:** No, not through code... But that's definitely something we can get into. There are lots of ways to contribute to a community, but definitely not a whole lot of code.

**Mark Bates:** Yeah, that's what I thought. I'm really curious to your opinions as a primarily of a user's perspective, if that makes any sense at all... You know, somebody who just uses open source; we're gonna talk about that. And of course, Carmen, you work for a small startup these days, don't you?

**Carmen Andoh:** \[laughs\] Sure, if that startup is named Golang. I used to work for Travis CI, which is an open source company, and I contributed pretty much exclusively, both in code and non-code at Travis. But now I'm at Google, and I do open source for Google.

**Mark Bates:** \[00:04:07.10\] Obviously, we're gonna talk about that in a little bit, because I think there's something we definitely wanna talk about around Google and obviously Go as an open source project... But let's talk a little bit about some of the work you did at Travis. What was your primary open source there? What was the stuff you were working on that was open source?

**Carmen Andoh:** We were on the build infrastructure side, and we were trying to automate pipelines via golden image mastering on VM's... Meaning you wanted to test your code and you have certain language runtimes, or add-ons, or operating systems, and once that was parsed, it was gonna give you back an image that already has this stuff on it as part of your build. We wanted to write code that automated that, and the other part was the worker, which was the thing that would run the automation workload for the jobs once they started, and that was written in Go.

So I did a lot of code, and also a lot of issue gardening, and a lot of community gardening in the repos that I was responsible for.

**Mark Bates:** I asked you that question because I knew what Travis does; I know what Travis does, they still technically do what they do... \[laughs\] And I know you worked there. But what I think is an interesting perspective I definitely wanna touch on in a little bit is the fact that that's a company that was based as an open source company; its primary model was through open source, so I think that's pretty interesting. But I wanna back up, and Johnny, I wanna ask you - what is open source to you? It's a very Mat question; it was from his docs... I can say it with the cheeky accent if you want...

**Johnny Boursiquot:** \[laughs\] I will not attempt to sound like Mat, he's got a unique accent of his own.

**Mark Bates:** Well, he attempts to sound like everybody else... Can't we try to sound like him?

**Johnny Boursiquot:** That's true...

**Mark Bates:** You've already done it! \[laughs\]

**Johnny Boursiquot:** Yeah, yeah...

**Mark Bates:** We should all do our impressions of Mat doing his impression of [Francesc]( https://twitter.com/francesc)... But no, seriously - Johnny, back to you; what does open source mean to you?

**Johnny Boursiquot:** I can tell you what I used to think open source was. Basically, to me it was free software, free stuff. You go online, and if you are a user of a software -- I remember when I didn't wanna buy a full-on Microsoft Office suite, or something; I went and found open source alternatives. There's been a few...

**Mark Bates:** Open Office?

**Johnny Boursiquot:** Yeah, Open Office was one of them. There's been a few over the years... But to me it was a way of saying "Oh, free stuff? Sure, I'll get some of that." But over the years, obviously, as an engineer who uses open source software, and every time I get a package from the web to incorporate into my projects, and use that and actually deliver value for a business, I'm using open source software. So my appreciation of what open source is, and sort of the innovation that it brings forth - I've definitely learned to appreciate that more, even if I can't always contribute back, especially some of the things I work on at my day job; not every company is able to give away some of the things that it does, especially things that are core to their business.

But every opportunity that one gets, you should be trying to contribute back. Because the same way you sort of leverage and bring in these open source components into your own world to actually deliver value, you're actually getting something for free indeed, but it's actually creating value, so you need to be able to send someone at back for somebody else to be able to leverage that. The pay it forward kind of model.

**Mark Bates:** You mentioned that a lot of the companies you work for don't open-source their projects, which is quite common, obviously. We all have private repos... But have you ever worked for a company that just won't use open source at all?

**Johnny Boursiquot:** \[00:08:08.08\] I've been fortunate enough to not have worked directly for those companies, but I have worked on projects for other third-party companies through my employer, that basically did not wanna use any open source at all. And usually, the problem came with sort of legal and licensing, especially with projects that did not have any sort of specific, explicit licensing in the repositories themselves, where you couldn't tell whether you were allowed to use a software for profit or not... So the waters were kind of murky; legal was always basically saying "Nope, you can't have that in there."

**Mark Bates:** Yeah, legal is great at that sort of stuff, aren't they? I remember I ran into very similar things... I was doing a couple projects for Apple, and every time we wanted to use a new Gem, we had to submit it in writing to legal, wait for them to review the license and all that sort of stuff, and then it would have to get us a pass through their security department, too. That's an interesting take.

Carmen, let's switch to you. Open source is not just about free, right? It's also about the software. Johnny talked a lot about "I didn't have to pay for it", which is a great part of open source, and something I love, but there is kind of this security issue, and I'm assuming at Travis you must have dealt with some security issues when people were just uploading any old code to your servers...

**Carmen Andoh:** Oh, yeah. I mean, really, we were giving them remote execution environments, and so we had to constantly think about how we wanted to gate that and isolate it... Because it was running on cloud providers, we also heavily worked with cloud providers to try to provide micro-segmentation and micro isolation and all these security buzzwords.

I think in terms of security that is becoming less and less of a thing. I think more and more people are paying attention to OpenSSL and other vital pieces of digital infrastructure that keep the internet safe, and they're finally getting corporate sponsors to say "You know what, we need to have people who can dedicate full-time brain power to this", and they are. So I love that they're providing cycles or engineers to do exactly that, because they're realizing that when the code is open -- you can lead the horse to water, but you can't make it drink... So yes, there's one thing about having it open, but there's another essence of security hardening, and I think that more and more people are now realizing -- I think Heartbleed was the first moment where people realized "Uh-oh..." People used this so much, but they didn't realize that it was being put together by toothpicks and glue.

**Mark Bates:** Most of the world is... \[laughs\]

**Carmen Andoh:** Most of the world is, exactly, and I think that the toothpick and glue projects that are now being used in thousands of open source projects are now getting a critical review, and they're getting brain power to security-harden it, so...

**Mark Bates:** Yeah... Someone reached out to me with a security issue very recently on one of my packages - I'm not gonna say which one, as we work to fix it... But yeah, I love that there are people out there who are looking for that sort of stuff. But as a user, how do I know if what I'm about to take in is safe? It's open source, I'm about to use something... Johnny was saying early in his days he'd use it because it was free; fine, you load up Open Office because it's free, but if you're not a developer, you don't know what's inside of it. It could be anything. How do we protect ourselves against that sort of open source stuff, when we're trying to review a package or a tool to use?

**Carmen Andoh:** That's a problem that a lot of people are working to solve. I know GitHub just came out with their GitHub Universe product announcement about exactly this. They have a security tab open now where you can have responsible disclosure, and things like check sums out of the gate as part of the GitHub infrastructure, so you don't have man-in-the-middle attacks.

\[00:12:15.09\] GitHub is really listening to users and coming up with solutions for that. And I think that because GitHub is increasingly the place to have your code hosted, having them do that was a big step forward... Because otherwise really you just didn't know; you just don't know.

**Mark Bates:** No, you really don't. That's the problem. \[laughs\]

**Carmen Andoh:** Yeah, totally.

**Mark Bates:** It's totally scary.

**Carmen Andoh:** It is scary.

**Johnny Boursiquot:** It's almost like a -- and I've done this time and again... I'll find a package that does something that I want. Maybe it helps me solve a particular problem, and I don't wanna reinvent that wheel... So I don't necessarily wanna copy and paste, or do anything funky; basically, I'll just bring in the dependency into my project. Then a few days later I'll be like "Huh, that was a pretty sizeable package. What else does it do?" After the fact, you simply trust that because the code is open source, you can simply bring it in and it's safe. Even if the originator of the project doesn't have ill-intent; even if they're not malicious and they're not trying to create back-doors in your software and whatnot... But because not everybody codes with security first as a mindset, it's very easy to open up yourself to attack, to make the surface area for attack through that package that you bring into your project. It's so easy to expose yourself in that way.

These days I'm a little bit more cautious about the package that I'm bringing in. I might spend an hour or two looking through the code and saying "Is there anything obvious?" I'm not a security expert, but maybe there are some things in there that are obvious, that I've seen before, that I can be like "You know what, this doesn't look quite good." Maybe I'll open up a PR, or talk to somebody, or something... Or at least maybe to say "You know what, this part of the project, or this particular project, for reason XYZ - maybe I can find an alternative."

There's a certain level of trust... I think we simply assume that just bringing a package into our project, and it solves our problem, that we can simply trust it also from a security standpoint. I don't know if there's a solution for that, honestly.

**Carmen Andoh:** Yeah. I think we're at an inflection point, right? And that first inflection point was left-pad, in the Node.js world, where Node has this problem of all these modules, and they're just bloated... And beginners - they trust that the person that's taken the time to package this up and send it up to Npm is gonna have some sort of verification or process through that. So we're kind of at the inflection point where we realize - wait a minute, people who are responsible for hosting some of this stuff, like package management places and infrastructure, need to really think about that. That's why I like that GitHub is partnering with a lot of them.

But the other thing is the attack vector - I think it also was in the Node world where someone gained maintainer access, and then was fiddling with the code. I can't remember which one it was, but... You know, everyone sort of faulted the maintainer for blindly trusting someone who just simply asked "Hey, can I have maintainer access?" "Sure, because we have maintainer burnout", which we'll talk about later, I'm sure.

**Mark Bates:** Well, maintainers get burnt out? I know nothing about that. Nothing at all... But no, the security tools that are going out there are great, but sometimes just plain old regular bugs open a security hold that an automated tool isn't gonna find. We can only catch so much that's automated, because sometimes it's just bad code... Like Johnny said, maybe you're not looking at it from a security perspective, but even if you are, sometimes you just type the wrong thing. We type the wrong thing sometimes, and that's what bugs are... But sometimes they're dangerous.

**Johnny Boursiquot:** \[00:16:10.11\] Giving time, as well... So you might release a package or a piece of software today, and then everything might be okay from a security standpoint; but over time, as new vulnerabilities are discovered, your package may become unsafe to use, because you yourself have some dependency or something you're relying on which is now unsafe. I think it's a very large-scale kind of problem that I don't think any one individual is going to be able to solve. I think there's some responsibility there that falls onto the Npm's of the world or anywhere you host code - the GitHubs of the world - they can do a lot more; they can have a lot larger impact on being able to catch some of those issues, because they're hosting so much of that code.

**Mark Bates:** Right. They've got the heuristics behind it, don't they?

**Carmen Andoh:** Yeah. There was a common practice, and it's still around - Patch Tuesday. That's what sysadmins did for many years, because they recognized that this was always going to be a moving target, and you always had to send patches in. So yeah, recognizing that it's always gonna be a moving target, and code rot is a thing.

**Break:** \[00:17:25.20\]

**Mark Bates:** Let's move to the maintainer side, Carmen, since you brought that up... It's an interesting topic. Why don't you tell us a little bit about what it's like to be an open source maintainer?

**Carmen Andoh:** Well, I have a cool story about my--

**Mark Bates:** You have tons of cool stories. That's why you're here. \[laughs\]

**Carmen Andoh:** Yeah, yeah. One of my first jobs, when I was 20 years old, one of my summer jobs in college was to be hotel desk clerk. And when we were both interviewing, as well as getting oriented to the job, me and all the summer workers at this desk, the person who was onboarding us made it very clear that we were going to be asked a lot of repetitive questions, over and over and over again...

**Mark Bates:** I see where this story is going now... \[laughs\]

**Carmen Andoh:** Yes. And she also warned us "You also will be encouraged to think of things like signs that they can read to get their questions answered, so you'll put signs up. Or maybe you'll have a brochure that would explain a lot of things. And you could do everything in your power to try to explain to customers how things work, where to find things, where to go for things, what you don't need... But you'll never, ever succeed here if you don't get over the fact that you're gonna get asked a lot of repetitive questions. And if you cannot handle that, then you need to not work here."

\[00:19:42.29\] This served me well, because when I moved into the maintainers space, that is exactly how open source works, but on steroids, if you will. It's really not just one hotel desk, but maybe 99 concurrently, and you have tens or twenties or hundreds of guests all clamoring for things, and you write a document to maybe clarify, and you try to make that document visible, or you try to even have bots to do these kinds of things, and yet the inquiries will still stay the same and they'll still occur, and that is the nature of maintainer burnout.

**Mark Bates:** Wow, that was really good. \[laughter\] Okay, I think that's the end of the show... Somebody has thought about this topic before and is highly passionate about it. Is this coming from a place of deep emotion here, Carmen? It feels like it...

**Carmen Andoh:** I mean... You know, I've just given a lot of thought about it; I've been both on the contributor side and the maintainer side. I now work in open source strategy at Google, and I work for a programming language where I just got hired and I really wanna think deeply about how the experience can be improved for everyone involved. The maintainers of a programming language - it's like a different beast entirely. It's my whole headspace lately, about how to onboard people coming to go; whether you're just a user, in the way that Johnny described the user, a consumer of the thing, or you're going to be a person that eventually becomes a contributor of the thing. These are very different audiences, but they are unique paths in terms of how you wanna engage with the language.

So yeah, I think about it a lot, Mark... \[laughter\]

**Mark Bates:** I also give a lot of thought to what it's like to be an open source maintainer. For those of you who aren't familiar, I run a few projects out there... Basically, at this point in my life, when I'm not training - which is what I do; Cory LaNou and I travel around the world and we train gophers all around the world, and it's fantastic. When I'm not doing that, I basically just write open source software.

Your analogy of the hotel was so, so accurate. It's funny, because yeah, you write docs, and you put together websites, or in my case I do videos, and blog posts, and all these sorts of things in an effort to make it easier for people, and to help them answer their own questions... But invariably, you still get the GitHub issues or the Slack messages where the response is just to drop a link to the document itself. They're the "Let me google that for you" kind of approach. You get those, and like you said, those can be maddening, they can be infuriating, because you keep saying to yourself "Why do I write the docs if no one's reading the docs?"

**Carmen Andoh:** Yes, exactly. And if you google -- literally, go now to your search browser; I use Google, but DuckDuckGo, any web search engine, and just type in "why are maintainers." The autofill would be "Why are they so horrible", and it really is a lack of understanding that you -- you know, you've never worked a summer job behind a hotel desk. Or maybe you weren't a registration volunteer for conferences, or something. Anything that's gonna require repetition ad nauseam.

There's a reason why maintainers are the way they are, and just trying to say "Well, why are they that way?" goes a long way forward towards being a better contributor.

**Mark Bates:** Yeah, totally. I know I occasionally can get snippy, and I try not to... But occasionally it happens when you're responding to the same thing, or... The thing that really gets me as a maintainer is the "This is broken" bug. I feel like we all know what that is. The title is usually "XYZ is broken", or doesn't work; some super-blanket... You know, it's not working.

\[00:24:13.26\] And then they say "I tried to use software X and it doesn't work", and that's the whole ticket. And you know, you're just like "Look, I wanna help. Please, give me some more information. Give us a repo", like a reproducible thing; fill in the information, do the `go env` stuff we've asked for. Help us help you.

**Carmen Andoh:** And there are automated tools that GitHub and GitLab are even including in that via issue templates. If you go and click on an issue template, you have a prefilled set of questions that they want you to ask... And it is quite frustrating to see that people who file issues or bugs ignore those questions. And then you try to say something like "Please fill out all of these. If you cannot fill out all of these, then please go take it to a discussion forum, or somewhere else." Because there's this psychological effect -- I look at the number of open issues, and it's growing by hundreds or thousands. In Go's case it's something like 4,000. So then you have a lot of time gardening and triaging and just doing a lot of toil work, to the point where you can't even get to the actual work of feature requests or patches or anything like that. It's a real problem.

I love [JennSchiffer](https://twitter.com/jennschiffer) on Twitter, she did that '80s meme generator, and it was like "Open source is a prison!" It just made me laugh, because those who've been in it understood exactly what that meant. I'll have to find it.

**Johnny Boursiquot:** Yeah, please do find that.

**Mark Bates:** Johnny, as a contributor, what do you do to help the maintainers? We're gonna talk about why maintainers do what they do in a few minutes... Because obviously we complain a lot, but we do it for a particular reason... But tell us, what can contributors do to help the maintainers? What do you try to do when you're opening tickets, or issues, or pull requests?

**Johnny Boursiquot:** Well, the first thing I do, if there is an issue template, I don't delete the template when I open up the ticket. \[laughter\] I don't delete it and then start going ad-hoc description of what the problem is. The questions are there for a reason. Basically, that's the maintainer helping me help them find what my problem is. My job as a filer of an issue is to actually provide all the necessary pieces of information. Sometimes some of it may apply, some of it may not, but the idea is that basically you put yourself in the maintainer's shoes. When they receive that ticket -- if you were to receive your own ticket, how would you feel if the information you asked for to help you troubleshoot wasn't available? It'd probably drive you mad.

So if you're looking for a fast resolution of your problem, you kind of follow the rules of the template. That's the first thing I'd do.

And second, if I know what the problem is - especially if I know what the problem is - I just open up a PR to fix it. It's not that complicated, right? I'll strike that but we still can leave it for recording. And the reason for that is a lot of times there's some fear and trepidation there. There's the impostor syndrome where you're like "I don't feel like I'm competent enough to submit a pull request to this." There's that factor of it, and that's totally fine.

**Mark Bates:** But there's also the factor with the pull request of "Should I ask for permission to make this pull request first?"

**Johnny Boursiquot:** Right, yeah.

**Mark Bates:** Because I've had to reject PRs not because I didn't want people contributing, but because it wasn't in line with what the fix could be/should be, or what the project is trying to do, or X, Y and Z. Usually, it's around adding a feature, as opposed to a bug fix of any sort; usually it's a feature. Anything that's kind of changing or bloating the project - I always feel like you should ask for permission first.

**Carmen Andoh:** \[00:28:08.20\] Yeah. There's a growing body of practices that show "Okay, where should I go to first ask about what, before I do anything regarding pushing code out?", like a PR, or anything. And part of it is using the contributors.md document. GitHub, again, is listening to users and trying to grow that best practices by having a community tab. That community tab is things like "Hey, do you have a code of conduct? Hey, do you have a contributing.md document at the root of your repository? Does that have specific instructions for how you wanna contribute?"

There are some really good open source projects that have made use of that, and then there's some that don't... But I think every time that you go in, there's some things that both maintainers can do to help contributors get a sense, but again, with the caveat that no matter what you do and no matter how much you try to communicate, you're always gonna have to take those hotel desk repetitive questions and deal with it. And that's where I feel like the idea of maybe shifts -- you know that "Okay, I'm gonna go into Open Issues, and this is my shift; it's a mental/psychological shift where I'm not going to look at it for three days, four days etc.", because sometimes that's the burnout, the expectations. That's one thing.

Also, the contributor.md document that you can have (the markdown document), which is like "Please expect a response of...", and you can even commit it and version-control it, and if you're gonna go on vacation and no one else is stepping up to maintain some of the libraries that you maintain, that can be the living document that says "Please note there will be no code review or PRs or issues responding for two weeks, because the maintainer is on vacation." There's also a status on your user space for GitHub as well, so people can see that.

**Johnny Boursiquot:** If you have a popular project, and there's a part of me that believes that the more popular the project, the more the onus falls on you as the creator/maintainer of the project to also be willing to take on that sort (the analogy) clerk behind the desk who has to answer the same questions over and over again. Because we know users don't read, and since coders and programmers and contributors are also people, the chances are they're not gonna read either... So to you, as a creator of something, you're like "Why are you asking me this? It's in the code/It's in the readme. You didn't read it?" You could easily get snippy, and be like "Go read the docs. RTFM. You can just go read the doc."

There's a certain expectation that comes with you being also like an educator. You have to sort of educate people on how to use that piece of software that you created, so there's a bit of responsibility there... And I totally agree, it can get repetitive and mundane and frustrating, and that's definitely a contributing factor to burnout, but I think there's a certain expectation that comes with having an open source project, especially one that's popular.

**Mark Bates:** It's like the old dev adage, "I hope your open source project is successful", right?

**Johnny Boursiquot:** \[laughs\]

**Mark Bates:** It's a thing that you do, but... I don't know. I find that there's definitely a period - like Johnny was talking about - with the big projects where I think as an open source maintainer, you also need to step off the gas a little bit when your project starts reaching a certain size. You have to say to yourself "This is bigger than me now. I can't do it all by myself anymore. I need community help, I need to bring on other core maintainers." I know that's what happened with Buffalo, and I couldn't imagine not having the Buffalo core team helping me out, because it's just too much to do.

\[00:32:13.23\] As a maintainer, you need to back off a little bit too, especially when you start getting snippy. When you start getting snippy, I think that's your sign that it's time to take a little bit of a break, and maybe try to ask other people to start helping... Because we often don't do that. We don't ask for the help from the community when we really should.

**Carmen Andoh:** Yeah. I noticed that you asked for help in a tweet roughly 2-3 weeks ago, Mark, for a certain library in Buffalo, and I retweeted it because I've been there. I'm like "Yeah..."

**Mark Bates:** Yeah, it was packr, and I'm still looking for -- not even necessarily maintainers, but just people to... And this is something that if your company doesn't -- like Johnny, for example, maybe you're not in a position where you can contribute code to open source, but... If you use projects, go and help triage their issues. It's a great way to help a project. Just go through them, answer some of them, being like "Oh, this is clearly just an environmental issue. Have you turned gomods on? Turn it on, everything's gonna work." You know, that sort of stuff. Take some of those things off the maintainers, so that they can work on the parts of the project that you don't feel you're capable of being able to contribute to yet.

I think that's a great way to help a project, and there's no coding involved, it's just triaging issues. "I couldn't reproduce this" or "Can you give us better steps to reproduce this?" If you're a community member and you're looking to help, I think that's how you can do it.

Let's talk about why open source maintainers do this though. I mean, we've just complained for 20 minutes about documentation, and repetitive questions and issues, but why do maintainers do it? Carmen, why do you do it?

**Carmen Andoh:** Why do I maintain open source projects?

**Mark Bates:** Yeah, not just because of work.

**Carmen Andoh:** Whether it was the case of Travis, or Go now, I feel like I am part of a cause, I'm contributing to a cause. I'm contributing to a thing that is gonna better other people's lives, and I think that's also where the massive network effects are happening. One of the most popular Go open source projects was [Kubernetes](https://twitter.com/kubernetesio). You have this sense that you're in a movement or you're a part of history where you're making things better for the next generation. And that's why I do it.

**Mark Bates:** That's a valid reason. Johnny, I know you don't run very many open source projects...

**Johnny Boursiquot:** I do not.

**Mark Bates:** Would you like to respond to the question? You know a lot of maintainers... What's the word on the street? \[laughter\]

**Johnny Boursiquot:** Word on the street...

**Mark Bates:** What's the scuttlebutt on open source maintainers? \[laughter\]

**Johnny Boursiquot:** The scuttlebutt...

**Mark Bates:** I'm gonna use just terms from the '20s for the rest of this show.

**Carmen Andoh:** Hear, hear.

**Mark Bates:** I'm a cool cat, I must be honest.

**Carmen Andoh:** Yeah.

**Johnny Boursiquot:** You can use that. You can use cool cat, for sure. \[laughter\] But here's the thing though - I see most of what I'm involved in, and again, I think we said this at the start of the show, there's a lot of ways to contribute to open source. I think some of the ways that I contribute the most, most often, is basically through community organizing. That is definitely not a direct approach to contributing, but definitely something that sort of helps feed the community around it. So it's on the periphery a little bit. It's actually, one of the very reasons why I got involved in a community stewardship, if you will, if you wanna call it that.

**Mark Bates:** Can I pause you for a second? Because I think what we've stumbled on is something -- or at least what I may have just had the realization on... We're talking about open source maintainers, and Carmen and I are talking about open source maintainers of code; you're an open source maintainer of community.

**Carmen Andoh:** \[00:36:10.20\] Yeah. I wanna be clear that when I say I'm a maintainer, I say I'm a maintainer of the ecosystem, the people who are a part of it, and especially efforts -- like, when I think of what Johnny is for Go, he is absolutely a vital, essential contributor, as are you, Mark, and as is anybody... Because if you think about it, if you're gonna build a big thing and no one uses it, then the failure is in the fact that you've made it very hard to either use, or understand, or whatnot. So we need the people that help train and onboard, and that is exactly where Johnny sits, and it's just as important as the code. And it's the same with you, Mark - the fact that you go around and do in-person training, and you also try to scale that by doing Gopher Guides with Cory... Yeah, those are absolutely vital contributors, and they're just as vital as the people who commit code.

**Mark Bates:** Oh, I couldn't agree more. I just like the idea of open source community maintainers. The title kind of just jumped into my head... But yeah, I've been talking about open source from a coding perspective most of the episode, and I just realized there's more to it. I'd known this for 20 years, but in terms of this conversation... \[laughs\]

Johnny, on pause... Keep going. After Carmen said all those wonderful things about you.

**Johnny Boursiquot:** I know, right? Thank you, Carmen. That's very nice of you.

**Mark Bates:** It's her birthday too, and you wouldn't even sing to her. Go on!

**Carmen Andoh:** \[laughs\]

**Johnny Boursiquot:** I know, I know. Yeah, I might have to rectify that whole singing thing...

**Mark Bates:** You've got a lovely voice.

**Johnny Boursiquot:** I mean, that's the beauty of community - there are many, many ways. If you look, you will find ways to contribute to your community. It could be code, it could be organizing a meetup, it could be helping out at conferences, it could be just pointing newbies to the community in the right direction. There are lots and lots of ways to actually contribute to a community that basically has nothing to do with actually contributing code. That's precisely why I did it, because I found myself in a position where I was like "Man, I really want to be of help. I really want to contribute something." But call it luck, or being unlucky, or whatever the reason is, every company I've worked at - basically, they haven't had a strong feel for contributing code back to the community, of the software/technologies that we use. So basically I found myself in a position where I'm like "How can I make a contribution? How can I give back in some way?" And the best way I could find without actually doing code was to get involved in community organizing; it was to get involved and actually help other people who maybe are in a position to contribute code to actually do that.

There's something about bringing people together, and it's something I completely stumbled upon. I didn't know what it was, I didn't have any preconceived notions about it, but bringing people together and actually seeing sparks fly. Really, seeing people get together and talking about ideas, and working together and pairing on some stuff, or learning about some stuff. In that room you bring people together and it's magical; and if you know what to look for, you can actually witness almost like a miracle happen, or collaboration, of people getting to know each other, of people making long-lived friendships from these events.

I've learned to look for these things, and I enjoy every moment of it; every event, every meetup, every conference I've ever been a part of and helped organize - I look for these things I see it every time. There's something beautiful about that. To me, that's the way I've been able to contribute and have an impact that perhaps I could maybe never have if I was just contributing code.

**Mark Bates:** Sorry, Johnny, your mic was off during all that. Can you repeat that? \[laughter\]

**Johnny Boursiquot:** \[00:40:05.17\] You've got jokes!

**Carmen Andoh:** You are such a troll!

**Johnny Boursiquot:** You are awful.

**Mark Bates:** I'm terrible. What you say is 100% correct though, it is an amazing experience to see. It really is.

**Carmen Andoh:** We are so lucky to have you in our community, that's all I have to say, because of all of this. I wish I could clone 1,000 of you, Johnny.

**Mark Bates:** Yeah, but we wouldn't be able to find that many MC Hammer pants for him. \[laughter\]

**Johnny Boursiquot:** False. Don't put rumors out there.

**Mark Bates:** I can't even remember if that was on the air or not...

**Carmen Andoh:** It wasn't on the air, so we're gonna have to strike it.

**Mark Bates:** Strike that from the record.

**Carmen Andoh:** Let's strike that from the record. \[laughter\] If you wanna know more about MC Hammer pants, hit us up in the GoTimeFM channel and we'll tell you.

**Mark Bates:** No, hit Carmen up in the GoTime channel; I'm not gonna be answering questions about MC Hammer pants for the rest of the afternoon.

**Johnny Boursiquot:** Talk to Mark about his pants. Mark, do you still have your MC Hammer pants?

**Mark Bates:** Yes, never mind... That was gonna go somewhere probably it shouldn't have... Okay, these are all wonderful things, and we've talked about a variety of different ways that we think about open source and we interact with open source, from legal, security, maintaining users, community, that sort of stuff.

**Break:** \[00:41:21.17\]

**Mark Bates:** Let's spend the last 15 minutes here talking about that very recent blog post that came out, where the opinion was that Go is Google's language, and it's not ours. That Go is not a true open source language, it just happens to have its source open. That Google makes all the decisions, and he pointed to modules as kind of the example of all that. I think that fits in with the subject matter on open source, since they're decidedly saying that Go is not open source. I'm gonna turn this over to you, Carmen, since you are the Go representative. Is it true?! Is this salacious report true? Is Go Google's language, or is it the community's? Or is it both?

**Carmen Andoh:** I think it's a very interesting question to answer.

**Mark Bates:** I assumed it would be...

**Carmen Andoh:** If you think about open source as you think about a democracy, there's still representative democracy, and I sort of think of the people who are the core team of Go - yes, they are all employed by Google. But does that mean that they -- I think that the person that wrote the article wanted to make the connection that what Google wants is what they're gonna make Go do. I think that's the essence, maybe.

\[00:43:54.06\] I think that Google does not influence what the Go core team wants, and I think that that is always gonna be the case. I also think that Go is a useful language, but it also is a key piece of software infrastructure, and as a result, there's always gonna be -- and I think this is the truth for whether you're talking about other key pieces of software infrastructure, or other languages... There's always a small group that are the key deciders, and I think that the conversation is talking about the difference between this democracy or open source and what we call open governance.

Go is open source, but the governance is indeed at Google. And this compares to something like -- I would think about things like... I guess Kubernetes is a good example. It's both open source, and in a way it's being moved away from Google to a governance model that is CNCF (Cloud Native Computing Foundation). Should Go move to maybe the Cloud Native Computing Foundation in the way that Python is in the Python Foundation, or C++ is? Maybe. But I still think that for the last 10-12 years that the language has been alive, I think that the people who -- we kind of wanna focus on the individuals, right? And so those are the three founders, which are Robert, Rob and Ken.

And then of course, the people who joined the project shortly after - people like Ian Lance Taylor, and then of course Russ, who came on as tech lead, and then people who have been working in the garbage collector, and the compiler, and the tooling... I've just met all of these people last week; we were at our Go team annual planning. I think that it was quite eye-opening for me having just joined Google and finally meeting these people in person, to see just how much they care to get it right, and how much they care to make sure that the responsibility that they have, that the changes that they make are gonna be the changes that you use going forward. I just wish people were in the room that I was in, to see this.

But yeah, indeed very much I believe that every successful software project has a small set of final deciders... But I don't think it's a true sort of free-for-all, everyone can have a voice; it is more of a representative democracy. But it's still a democracy, and that is what I think is gonna be the issue.

The history of modules, as I saw it -- I was not a part of the Go team at that point, but I was kind of on the outside looking in... Gosh, just a lot of misunderstandings on a lot of sides, and the misunderstandings stemmed from expectations, and this kind of quid pro quo of how things were done in other ways... It just highly reminds me of "What my reality is may not match your reality, and what I think I'm saying is not what you're thinking I'm saying." It was kind of this mind-bending thing that happened with modules.

**Mark Bates:** I wanna get back to modules in a minute, because I think there's more to it than just the rollout of modules. But Johnny, what's your take on this article? I'm sure you have an opinion, and I'd love to hear it.

**Johnny Boursiquot:** Yes, it's not a strong opinion though... The reason I say that is because, like Carmen, I do believe there must be a strong governance around a project, otherwise it becomes too many things to too many people, and it loses its strengths because it's trying to be too many things and trying to do too many things. I think that's really true of everything in the world. We tell people "Hey, stop spreading yourself so thin. Be focused." I think Go is a very focused language, and because of that, it requires a focused leadership team around what should be in there in order to keep it true to its essence, and what should be and what can be worked around, or things that shouldn't be in there at all.

\[00:48:02.13\] I could extend that whole thing to arguments around features of the language - "Hey, we should have this... Why doesn't the language have this, and that, and the other?" These are all fine opinions, and everybody can have one, it's okay, but I think at the end of the day I'm willing to put my trust in the team that brought the language this far, after so many years (12+ years). I'm willing to trust that they will keep the community's needs at heart in their decision-making... Because guess what - if you don't like the language, if you don't like the community, you are free to not use it; you are free to leave. Nobody is forcing you to be part of this or to use it. You have that freedom.

So for those of us who are okay -- again, to use the module rollout thing as an example, I'm not saying we get it perfectly; I'm not saying the Go team always gets it perfectly. Nobody can; we're people. So there's gonna be ways things could have gone better. Hindsight is always 20/20. But I think the bottom line is I trust the Go team to have the community's best interest at heart.

**Mark Bates:** I brought it up because I thought it was an interesting article, and I'm not gonna lie to you, a lot of what was said in that post rang true with me; a lot of the things that were discussed in there have happened to me. The big difference between myself and the poster of that blog post - whose name I can't recall off the top of my head - it seemed as though it came as a revelation to them that Google is behind this language very recently... Whereas for me, when I got into the language 6-7 years ago, it was Go 1.2 and it was from Google, and in my mind it has always been Google's language. It wasn't even mirrored on GitHub at the time.

So for me, I do think they care about the community, and I know that because I know a lot of the core team. But I do think that historically, in the past, it has been very Google-driven, or at least appeared to be Google-driven by the Go team, if that makes sense at all.

**Carmen Andoh:** I think that the "driven by the Go team" were actually the set of constraints that were happening at Google at the time. Go - their source code is a big, huge monorepo, and the build system is one of the reasons why they decided to invent Go in the first place, because C++ build times were just super long... But the fact that they had such a good infrastructure that now of course is open source in the form of Kubernetes via Borg, and whatnot - that also is part of the reason why they didn't understand the need for dependency management. They couldn't foresee it. So that wasn't maliciously done, it was simply a blind spot.

**Mark Bates:** I don't think anybody would say that that was maliciously done. Let's talk about modules... It's the elephant in the room, I think. We keep dancing around it here. I think the rollout of modules has been discussed to death, and I don't really wanna talk about Sam, and Russ, and who said what, when. In my opinion, what that article was saying was more the actual implementation of that package management came from Russ. It was kind of thrown out there and the community felt as though they had been kind of "Okay, we're put on this path now...", and there's still a lot of problem with them, they're still early, but I know a lot of community feels that it's being moved too fast, against people saying "We've got all these issues."

\[00:51:58.02\] I saw Cory LaNou tweeted yesterday that he loves Go, but he keeps running into all these module issues every day, and it's really driving him crazy. I think that's what they're talking about. They're talking about the fact that an implementation of something as important as package management was done by the Go team; I'm not even gonna say by Russ... By the Go team as a whole. Because I don't think Russ -- I think Russ is a great guy, and I don't \[unintelligible 00:52:22.11\] what he came up with. But the team kind of came up with this thing, and the community was just told "This is what it's going to be." That's hard for us. You can imagine how that feels to us as a community.

So it wasn't just the "Who said what, when" part of it; we've got the solution in place that those of us writing large-scale packages and applications are feeling the burn on some of those decisions that we didn't necessarily want or asked for. The downloading the internet problem, for example, where it's very possible to download many, many more packages than you actually want, just because you could have all the different revisions in there...

So I think that's what the article was talking about - that feeling of "The Go team said this is it, we're gonna do it now." How is the Go team planning on addressing that feeling that's coming out of this article?

**Carmen Andoh:** Well, they've listened, so what was going to be modules as shipped in Go 1.13 in August is now no longer the case. They're gonna take a step back and let people find ways to help more people migrate, and then they can revisit it for a possible 1.14 ship, which is in February. So that's the state of execution, if you will.

Justin Leggett just recently put Kubernetes on modules, and I think that was a milestone moment to show big projects that needed some sort of solid dependency management solution did it. And I kind of want to evangelize how they did it, because of course it wasn't gonna be easy, and it's not going to be like "1-2-3, this is how we did it." It takes some real research to get it right. But they did get it right, and I think that was a win, because I think the rest of us, what we were looking for is "Well, how does it look like and how did you do it? Can you help me?" Because it's hard to really get it right, and especially when you're a moving target and the packages that you depend on are moving targets...

So I think that GO first of all listened, and now they're saying "Yeah, let's just take some time and let them live side by side, both whether you wanna use modules or whether you don't want to use them." So that's gonna live side by side as a choice, rather than putting it on as the default option in 1.13. I don't know if enough of that was published or not. I'll share the issue where that was announced; that was relatively recent.

I think there's that, and I think that the Go team is thinking a lot about that, and they wanna get it right, and they wanna listen to the community. And I think it's one of those things where -- gosh, you know, they've spent so much time thinking about -- because when you really think about that, this isn't the standard library. This is kind of a workflow, a tooling problem. And that's kind of where I'm not sure if non-modern-day programming languages really cared about workflow or tooling.

That's another inflection point of what it means to develop a programming language in 2019, and the most recent years, when we live in a distributed world. Otherwise, the packaging was done via (gosh) CD-ROM back in the day, and you had to be very careful about the libraries that you imported, and whatnot. It kind of harkens back to the beginning of the episode, which is "How do you trust that what you bring in is really gonna be safe?" Now it's like "How do I trust all these dependencies' dependencies? We've moved faster than we ever had before, because we can build on the shoulders of giants, but how do we make sure that these giants aren't really trolls?

\[00:55:55.09\] So yeah, I think that that is something that is I think just gonna be interesting when you look at it from the historical lens. This is an interesting problem and I think Go really deeply cares. We have probably another eight months to think about it, and they're continuing to keep their ear to the ground of the community; if they feel like the community is still saying "Uh-uh. This is too hard. My workflow is broken; it's been broken. I just wanna be productive again. This is really painful", they'll say "Okay, let's give a stable execution."

I think all open source projects have felt that. If you look at the canonical model for Ubuntu long-term support, that was an interesting history. I remember when Precise was going End of Life... But it was a shock to have some people who were early adopters see that so many enterprises were depending on End of Life to be not just five years, but rather like 8-9 years. People were like "Why can't you just rebuild for a new version of Ubuntu?" and so many enterprises had to go into why not, and I think that we're getting the same lesson learned here, for not necessarily the runtime version, but the tooling.

**Mark Bates:** Johnny, you've been quiet for a while...

**Johnny Boursiquot:** \[laughs\] Yeah, that's because I usually make sure that whatever I have to say is not better left unsaid...

**Mark Bates:** \[laughs\] Fair enough. Do you have anything you'd love to say on the subject?

**Johnny Boursiquot:** Well, this whole time that you and Carmen were going back and forth, I kept thinking that if the module rollout has gone out smoothly, I don't think we'd be having this debate, this discussion. I think it's very easy to look at things that have some friction in them and some "point blame/find blame". My personal approach, especially because we're talking about open source - my personal approach to open source software is that I expect that there will be some things that don't work perfectly for me, what my definition of perfect is. I expect that some things will not always work, that I may have to troubleshoot.

I expect that some things will not always be smooth, that I may have to come up with some solutions, some instrumentation around some of the problems while issues get fixed - there are certain expectations that I bring with me when I'm bringing open source software or open source tooling or programming languages. I know everything is a trade-off. That is why, like I said before, my opinion is not basically iron-clad on this, because I understand that the Go team is trying to do the right thing for the community in the long haul. Right now we're having a bit of pain... And the whole dependency management thing has always been painful for Go, because again, when the language was created, that wasn't at the forefront of the concerns for rolling out the language.

So we're dealing with it now. Things will be bumpy, things will be rough, and I as a user of the language, as a participant in this community of this technology platform, I understand that, and I'm willing to be patient, and wherever I can I'm willing to contribute to make it better. Overall, I have less complaints about things, I suppose; that's my approach, that's my stance, generally speaking, when it comes to open source software.

**Mark Bates:** I love you, Johnny. I really do. You're just so positive and upbeat. You're just an amazing person, you really are. I mean that. Carmen was gushing on you earlier, I'm gonna gush on you now.

**Johnny Boursiquot:** \[laughs\]

**Mark Bates:** Okay... Well, kids, we're getting near the end of the show here; you know what the music means... So since we're talking about open source, I just wanna ask each of you real quick - give me an open source project you're playing with these days, or smitten with, or just find really interesting right now. Johnny, you first.

**Johnny Boursiquot:** \[01:00:06.00\] Let me see... A lot of the services -- I'm currently working in a microservices architecture. We have a ton of microservices, doing a lot of different things within our ecosystem of applications... And the project I use - it's basically two projects I use quite frequently in building these components - is [Echo from LabStack](https://github.com/labstack/echo). It's a nice router; I've used that for years now, and it covers 99% of my use cases. Every now and then I'll do something odd and I kind of have to see why it does what it does... Again, trade-offs. If it's a benefit to me 99% of the time, I'm not gonna complain it doesn't do an edge case, and whatnot. I also use [gorilla/mux](https://github.com/gorilla/mux) for a lot of that stuff, too... And I've actually started using more and more [gRPC](https://grpc.io/).

These projects are my bread and butter for the kind of work I'm doing right now, so a big shout-out to the maintainers of those projects.

**Carmen Andoh:** It's already been on the show, but of course I give love to Athens. I think it's both an interesting way to enrich the ecosystem, but also just how they are so welcoming to open source people... And of course, Kubernetes.

I wish I could have thought about that a little bit more, so I give some love to some open source projects that need some more discovery... Because there are certainly a lot out there. The ones that are out there are really the ones that do kind of like the UNIX philosophy - they might do one thing, but do one thing really well. So maybe some of these web router libraries - because the standard library doesn't have one.

The fact that they're out there and that they kind of are trying to solve a problem that the standard library said rightly so, I think, rather than focus on an implementation; just say "Let's let third-party libraries do it." So I just really like any of those kinds of libraries, where I'm reaching for again and again.

**Mark Bates:** Alright. I wanna give a shout-out to both (I've already done it once) the [Buffalo](https://gobuffalo.io/en=) core team, but also everybody who's contributed to any of my projects over the years. I don't care what language it was in; thank you so much. Hopefully I was nice to you, and I thank you so much for all your contributions.

The one thing I'm gonna throw out is a project called [Pigeon](https://github.com/mna/pigeon), which is not one of mine or Buffalo's; it's a parser expression grammars, which I have been playing a lot with lately. They let you build your own little parsers, and essentially little languages. Pigeon is the Go implementation of that, and that's been pretty fun to play with, so... If you're looking to do that, check that out.

But anyway, thank you so much to Johnny, and Carmen, and Adam and the crew at Changelog. I'm Mark Bates. Why wouldn't I be...? \[laughter\] Saying "Be a good contributor, be a good community member, help your maintainers out."

Thank you very much. That's Go Time, everybody!

**Carmen Andoh:** Bye!

**Johnny Boursiquot:** Bye.

**Mark Bates:** Bye!
