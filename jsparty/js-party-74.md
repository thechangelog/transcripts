**Nick Nisi:** Hello, and welcome to another episode of JS Party. I'll be your MC this week, Nick Nisi, and I'm joined today by Mikeal Rogers and Henry Zhu. Mikeal, welcome back to the show. You were part of the original crew for JS Party, and it's great having you back.

**Mikeal Rogers:** Yeah, it's great to be back.

**Nick Nisi:** Tell us a little bit about yourself. Catch us up with where you're at right now.

**Mikeal Rogers:** Well, I had a baby, so it was one of the things that made scheduling more difficult... And I had some other standing meetings in the way that they were difficult for scheduling... But a lot of that shifted around now, so... I'm back, and I'll probably be back every month or so, something like. I'm gonna try to make it work.

**Nick Nisi:** That's awesome.

**Mikeal Rogers:** So yeah, I'm Mikeal Rogers, I've done Node stuff since the early days... I used to run the Node.js Foundation, and now I work on a lot of decentralized data structure stuff at Protocol Labs, which is pretty fun.

**Nick Nisi:** Very cool.

**Mikeal Rogers:** I love open source...

**Nick Nisi:** Yeah, and I knew of you from the Node Foundation stuff and NodeConf, I think... Is that right?

**Mikeal Rogers:** Yeah, I started NodeConf and ran it for about seven years.

**Nick Nisi:** Yeah. And then of course, the awesome Request library, that's now being deprecated; that's awesome as well, thank you for that.

**Mikeal Rogers:** Yeah, yeah.

**Nick Nisi:** And then Henry - welcome to the show. We're really glad to have you. Would you like to catch us up with yourself?

**Henry Zhu:** Yeah. I've been working on Babel full-time for a little bit over a year now, and then I've for some reason got into podcasts, so I'm happy to be here.

**Nick Nisi:** Yeah, really happy to have you here as well. Of course, Babel is this core architecture of the web now, it seems, and it's a really great project, so thank you for working on that and doing it full-time now... And you mentioned getting into podcasting - you have two shows that you're currently doing, right? There's Maintainers Anonymous and Hope in Source. Would you like to tell us a little bit about those?

**Henry Zhu:** Yeah, so I released Hope in Source -- I think it was last October. It was just the RFC with Mikeal... We had a bunch of conversations, and it started bringing up faith in how I thought it was related to open source... So I figured we would just record it. And then recently, a few weeks ago, I released Maintainers Anonymous, which is kind of the same thing, except trying to apply that to everything, so seeing everyone as a maintainer.

Actually, I'm planning on making another podcast, but for Babel... But I haven't done that yet.

**Mikeal Rogers:** Really caught that podcast bug, man... \[laughter\]

**Henry Zhu:** Yeah, seriously.

**Nick Nisi:** \[04:03\] Well, we're really excited that you took some time to join us today for a party, so thank you. The first thing I thought we could talk about here is -- because you're both very prominent in open source, maybe talking a little bit about how you got there, what pulled you into open source, or what was the reason that you started looking into that. I know this is a pretty common question, but catch us up on your decisions... What led you to where you're at today?

**Henry Zhu:** Well, I feel like there are almost -- not different levels, but there are different... In a way, I feel like maybe a lot of people go through this, where you've tried to do open source multiple times... I remember the first time I attempted making a GitHub account, and all that. I was actually contributing to Khan Academy, and I thought it was cool that their exercises -- I don't remember what year this was; 2014, or maybe before that, actually. And I thought it was cool that math exercises were open source, so I was looking into fixing some typos, or adding a new thing... And then I tried that; my first PR got closed, because I didn't know how to rebase correctly, I didn't know how to use Git... And I think two years later I went back and I was like, "Okay, I think I can try this again..." I had some \[unintelligible 00:05:18.12\] and then this is when I found out about Angular 1.0. I was using it, and I thought I could contribute. I was looking through the issues and I found this issue about linting, so I manually did some auto-fixes... And that's how I got my first PRs there.

I think I wanted to just because I used a bunch of open source and never really thought about who worked on it, and I finally was like "Oh, maybe I could be involved." There's a lot more, but that's how I got started.

**Nick Nisi:** That's really awesome, identifying that there's people behind that, and wanting to join them and help them. That's really awesome. That's something that we tend to forget from time to time. Mikeal, how about you?

**Mikeal Rogers:** My story is quite a bit different. It starts in like the '90s, so... \[laughs\] I mean, when I was really young, I was a hacker, and that was kind of how I learned how to program and learned about computers. With hacking, there's always a community there; you're always on IRC, having people show you different things... So just the value of having a community to rely on and bounce ideas off of, and get pointers to, in like an informal kind of mentorship, was always really useful to me, learning computers even really young... And most of the reason why I was hacking is that I just wanted to learn more. And we were really poor, so we didn't have any money for anything; it was like a miracle that we had a computer... And so hacking was a way to get into other systems, to learn those systems that I didn't have the money to really access and learn on my own.

Then when I started working in the industry, I gravitated towards open source for a lot of those same reasons. I tried to do stuff here and there for the first four years when I was working for bigger companies. Then when I came down to the Bay Area, I started working at the Open Source Applications Foundation, which is a -- basically, it was a personal information manager in the style of Lotus 1-2-3, started by the guy who started Lotus, actually, Mitch Kapor, who also helped found Mozilla, and stuff like that. And there's a long history with OSAF actually helping set up the Mozilla Foundation, and things like that. So a lot of cross-over there. It was a smaller team of just really amazing people, but a lot of them hadn't even done open source before.

There were three people from the original Macintosh team. Their name was on the motherboard. Heavy people were working on this, and this team of 20 people, but they hadn't really done a lot of open source... So Ted Leung joined, who has a long history with Apache, has done open source for a long time, and he did a lot of trying to teach values and teach people how to do open source properly. I was pretty young at the time and really just soaked it up. All the value stuff, I was just really taking it in...

\[08:01\] And I thought that it was even more important for me actually, because -- so my team was building these new test tools. And the test tools were also open source, but they were kind of widely applicable, and we had far less resources to build and maintain these tools than the product team... So we were like "We need a community of contributors. We need to do that, because we don't have any resources." And it worked pretty well.

OSAF kind of crashed and burned in terms of the actual product that we were building, but a lot of these side projects - not just the stuff that I was building - ended up having a much longer lifespan than the actual product. After that I went to Mozilla, and at Mozilla I found that I was actually adopting a lot newer practices than Mozilla was, because I had gone through this stuff with Ted, and so there was some fun tension there. I was one of the first people to put projects on GitHub at the time, at Mozilla, and they were not super-receptive to that... \[laughs\]

Then from there, around that time, my last year at Mozilla, that was when Node.js was released, so... I'd been running Python for like five years, and getting involved in that community, in the Django community in particular, and a lot of the culture of Python had been defined already, and it was very hard to steer that ship in another direction. And one of the things that was really attractive about Node in the early days was that you could tell that it was gonna be a bit bigger - no telling that it could be this big, but just the opportunity to work on a community at the ground level was really attractive, to me and a few other people, like Isaac.

So yeah, I took a big role, and that's why I ran the first conference, and did a lot of the early community work and early module work, and even some core work at the time.

**Nick Nisi:** Very cool.

**Mikeal Rogers:** So that's how I got involved...

**Nick Nisi:** I definitely think it gives you some street cred, doing open source before GitHub. I can't even imagine that universe...

**Mikeal Rogers:** Well, this is funny - I was writing about the changes that were happening... Because back in 2012-2013 people were seeing GitHub happen, but it was a full generational split. There were these people that had only done open source on GitHub, and people that were still holding out... And it was weird, because I kind of had a foot in both worlds; I had done open source before then, and I knew a lot of those people (mostly through Ted, actually), and then also I was living in this new world... I ended up writing a bit about it. There's an article on Wired that I wrote back then, that was just talking about the overall changes that are going to happen in software and open source because GitHub has changed things so much... And the big thing was that it just reduces the barriers to starting a project.

If you wanted to start an Apache project, forget about the incubator and all that kind of stuff, to get a repo up... If you wanna contribute, you have to learn a new set of tools for almost every project. And Apache sort of codified that toolchain for Apache projects, but if you go to some other open source project, it's a totally different toolchain, totally different governance model... Like "How do I send you patches?" You still had to decide "Do I send you emails with the patches in them? Is there some kind of bug tracker?" There were like 40 different bug trackers that were open source, that people were using. There was no standardization around this, so the cost of going from one project to another was really high. That's why you ended up with big projects, because adding every feature ever to the Apache HTTP server made sense, because starting up another project and plugging two projects together and starting two communities was really hard.

GitHub normalized all that tooling, so now you can sort of flow between projects pretty easily, because the way that you contribute and send everything around and communicate is pretty normalized and standardized. There's one onboarding for all of this. And then also just creating new projects is effectively free, so now we can create much smaller projects, that are easier to understand, and then string them together. And you've seen that play out over the last ten years... The way that applications are built is a big dependency chain, and not a giant framework, like Spring, or something like that.

**Nick Nisi:** \[11:47\] Yeah, definitely. Well, my story is not nearly as storied as either of yours... I try and contribute as much as I can. I'm part of the Dojo team, so I'm working on that and really enjoying it, and working with TypeScript a lot these days... But we kind of touched on this before - a lot of open source and a lot of why GitHub has made things so much better is because most of it tends to be dealing with people. Henry, how would you say that is?

**Henry Zhu:** Well, as Mikeal was saying, having GitHub be such a big part of open source introduces its own challenges. Before maybe there was a lot less people involved in open source in general, and then maybe team sizes - everyone knows each other, and it was a lot more about people... And not that it's not about people now, it's just that it's almost like you don't have to know who people are, because you can just go to a random repo and make a PR, and then move on.

Even thinking about the name of the podcast I did, Maintainers Anonymous, it's like, yeah, in a way -- people use Babel all the time, and they have no idea who I am, and they don't have to. So how do we balance people not treating people like they're people, and bringing back that community side into open source? I feel like we're still in the beginnings of figuring that out.

**Mikeal Rogers:** Yeah... Open source is people. We used to say that a lot more. This is something that we talked about on Henry's podcast recently - there was certainly a period of time where everything that we were talking about in open source was about people. We weren't talking about sustainability and money at all at that time; it was just about people, and making people happy, and being more open and accepting. We somehow lost that over the last five years or so. The conversation has really shifted towards the sustainability side of things, I think... Which is still about people, but it's just not framed the same way.

**Henry Zhu:** Yeah... I wonder why that is.

**Nick Nisi:** Yeah, that's really interesting... And it does seem like there's more of an emphasis on open source. Maybe this is just the lens from which I see it, but everyone uses open source, in a lot of different ways; especially in the Node community, there's a lot of small packages, and it's just a dependency chain now, instead of a big monolith for a lot of projects. There's a lot that goes into that, but there's entire companies, and entire applications that are built on this open source software, and if you're not thinking about how that software is going to be sustained, you're going to be left in the dust with potential security issues, or just not being maintained as things change in the ecosystem. So it is a really big and important thing to think about as we adopt these frameworks and tools into our projects and into our lives, in a lot of ways.

**Mikeal Rogers:** Yeah. It's also a really unique challenge. When we had these big projects, you could sustain them because you could line up investment, either from companies or from individuals...But now that your product is built on this dependency chain of hundreds of libraries, understanding the particular needs around each one of those libraries is quite difficult. And finding a scalable sustainability strategy for them is also really difficult.

I think that's why I've put a lot more time into cultural changes lately... Because if you can change the culture around not just open source, but around the way that companies think about open source, and think about contributing to it, you can have a much broader effect than you would have on any individual.

Not every project is Node.js. You're not gonna get a foundation with a bunch of corporate sponsors lined up. That's a lot of infrastructure to run; I know because I ran it... And it's certainly necessary for Node, but you're not gonna be able to line that up for even a project the size of Babel. An entire foundation around it would be overkill.

**Henry Zhu:** Yeah, I guess the long tail is not gonna be Node, it's gonna be projects smaller than Babel. It's like, if we have a hard time raising money or fundraising, then it's gonna be ever harder for other people.

**Nick Nisi:** \[16:01\] Speaking of that, what are some of the ways that you can go about fundraising for projects? Henry, I know that you have a Patreon, for example, and there's other things like Open Collective to raise money for projects... Can you talk about that for a little bit?

**Henry Zhu:** Yeah. I'm sure there's lots of ways to do it, but I find that... I guess this is true of a lot of things - you end up just copying what other people do, and if there's someone that you know that's doing well, then you'll just do that. Say, Evan made the Patreon, and it's like "Okay, we're making a Patreon." And Webpack had an Open Collective - "Okay, we're gonna make an Open Collective." I think it's easy for people to just see that and think that "If I did the exact same thing, I'm gonna have the same amount of success." So you've gotta do the hard work of actually -- I don't know, whatever it takes, whether it's talking to companies, or getting the name out there... Simply making a Patreon is not gonna convince anyone to give you money. Because there's lots of people -- it doesn't even matter if you have lots of followers, or people know who you are... You need a different skillset than writing code, I think... If you're talking about crowdfunding at least.

In a way, donations is a weird thing to get into anyway. You're not tying the input that you're putting in to the output that you're getting out of it, and it's like -- maybe it makes more sense for your project to do consulting, or other kinds of things.

**Mikeal Rogers:** Yeah, that's the secret sustainability strategy that has worked consistently in open source, which is that starting a consulting company tends to work, actually. A lot of people that do open source full-time work for consulting companies, and end up doing open source more or less full-time, as a part of that work. They're not just the big companies, but lots and lots of little companies as well.

I think the trick there is setting up a consulting business and running that business is a lot of work, and is a very different skillset than open source maintenance... So it's just not an accessible means of sustaining most projects. Because it's like "Okay, great, I wanna support myself. Where do I find sales guys, and an accountant, and stuff...?" \[laughs\]

**Nick Nisi:** Yeah, so you do end up having to do a lot of those things on your own, which takes away from the time that you might spend working on the code itself.

**Henry Zhu:** Right, so like - are you willing to do that? It seems like most people don't want to, and so I feel like this is where other companies can come in to be the middle person to do that for you. There are guides to being a contributor and guides to being a maintainer, but we should have more teaching on how to do consulting, or sales, or that kind of thing.

**Nick Nisi:** Yeah, it's really interesting. So what advice would you give to someone wanting to follow a similar path, to becoming a maintainer of an open source project?

**Henry Zhu:** Well, I don't know about following a similar path, because -- yeah, it does seem like everyone kind of... I wanna say a lot of it feels kind of random, and a lot of it just takes time. If you think about people that are maintainers -- I've been maintaining this for years, and it took me a few years just to be a contributor... And I don't know if people just make a contribution and they expect suddenly all this stuff is gonna happen. I don't think anyone would want that, because honestly, all you do is get more responsibility.

In other ways, when people get added as a maintainer on a project, it's because they already put in a lot of work, and it's more like you're getting recognized for the work you've already put in. So having commit rights and all that stuff is cool, and it's on maintainers to figure out when they should do that and how liberal they wanna be with doing that... With Node, it's like "Okay, you can make a PR, and now you can be a committer." I don't know, it's complicated.

**Mikeal Rogers:** \[20:09\] I think there's like a ladder here. The projects need to build, first of all, so you need to have a support system, so that when people do small things, they can also take on bigger things and bigger things, at their own pace... But not everybody will do that. Some people will just do one thing and then leave. And really enabling people who have done a little bit to help out as much as they can is really important for sustaining the project.

But my advice to people getting into open source is always to just take on a thing that you already know how to do. You're going to learn how to do new things in the future, but there's this social barrier that's contributing to a new project, where you're trying to feel out what that community and that project is like, and if they're gonna be mean, and if they're actually accepting of new contributions, and that whole thing... And just getting comfortable with the project is a process in and of itself. So just take on a task that you already know how to do, whether it's like a doc update or a website update, or some test update... Something relatively easy. Don't try to do a huge patch right away, or try to add some giant feature. Go through the process and learn a bit and get comfortable, and then sit down and take on something bigger. And then you'll also know the people that you wanna ping to get support in that, and all that kind of stuff.

**Henry Zhu:** Yeah, like you're saying, maybe it's a social thing, where you just have to get to know the people on the project itself, and then you'll feel welcomed or empowered to actually make those changes.

I think about the first PR I made to JSLint I worked on was a readme update, to add a table of contents, which was pretty trivial... And then for Babel - Babel itself was trying to use ES6, so I just updated some code from ES5 to ES6. That was my first contribution. So whether it's build tools, or those kinds of things - those are applicable to any project. It's a good way to just getting your foot in the door.

**Break:** \[22:05\]

**Nick Nisi:** In the last segment we talked a little bit about getting into open source and maybe some paths that you might take to actually becoming a maintainer, or contributing actively to projects... But one much easier way to contribute to projects is by interacting with the project, and making requests for features, or contributing fixes, or just writing up bugs or documentation changes - things like that, to any project...

So in this next section I thought we'd talk about some advice for interacting with maintainers, and what the best way to go about that is. That is the main theme of this - people are the main part of open source. So what do you think is the best way to go about a feature request, for example?

**Henry Zhu:** I would say you need to go into it knowing that it might not be what you initially set out to be. It might be better to create an issue talking about what the use case is. The thing that you're asking for might not fit with the overall project, unless it's something really small-scoped, and it's unlikely that exactly what you're looking for is gonna happen... So I think talking through that beforehand would be better. If it's small enough, you could probably just make the PR and they'll just land it, but you have to have a good idea of what that looks like.

**Nick Nisi:** \[24:11\] Yeah. It really seems like something that you have to think about is not really your specific use case, but how this fits into the more general use of the project, whether that's Babel, for example, that's used by everyone. So having something that is very specific to something that you want fixed, that might not have a big appeal to everyone else - it's probably less likely that something like that is going to get landed.

**Mikeal Rogers:** Well, let's say a few things first... When in doubt, log an issue. Don't get too hung up on worrying about the exact, perfect way to say things. When in doubt, log an issue, because it's just better to get that feedback and to start the process, than to not. Just be nice, don't be super-entitled about it... And also, maintainers, be nice; there's a lot of not nice maintainers... But as far as the most constructive way to frame something like that - I always fall back to "job to be done" theory, which is essentially like a business theory from Clay Christensen who did disruption theory. The principle is that we don't buy products, we hire things to do a job. So I hire this meal to give me the calories to move on with my day. And there are lots of meals that might fit into that, but sometimes the most efficient one is the one that I can take on the go, or something like that.

Then you start analyzing an iPad versus a laptop - you can get a laptop that is cheaper and does more things, actually, than an iPad, but people keep buying iPads because the jobs that they're hiring them to do are not all of those things that a laptop does, it's just a subset... And that subset works better on the iPad. So you can create better experiences if you understand the job that people are trying to hire to do.

What I try to do always with people requesting anything is unwind them a little bit and try to understand what they're trying to hire this thing to do. When you describe what you are trying to do in terms of not just the feature that you wanna see or how you're conceptualizing the solution, but just the job that you're trying to hire this to do, and where that fits; then people can often work with you to figure out what feature might need to be added and what it might look like to solve that case... Or if it actually might be out of the scope of the project, and here are some pointers to things that you can plug into this to solve that. That's usually the best way to go about it, because the vast majority of the time that you're asking for a feature, you're not saying "This must be in this project", you're just saying "I need to do this thing, and it is not clear to me how to do that. So either point me in the direction of where that solution exists, or let's talk through how to solve that in this project."

I think often the worst thing that you can do is come with a full solution to the problem, because so often you have not yet spent enough time with that library to internalize all the constraints that they're under, and why that might not be a great fit with some of the other stuff that's going on. You may have a really good understanding of what you're trying to do with it, but not of what everyone else already does with that project.

**Henry Zhu:** Right. And that's the role of the maintainer, to actually not just write the code and all the features, but then look through the ecosystem and see how it's used, and figure out what's a general solution for this. Like you said, it's easy for maintainers to dismiss it, because maybe they saw that request 20 times, but maybe that's a good thing, because then they're like "Okay, it seems like a lot of people are actually asking for this, so maybe we should look into it."

**Nick Nisi:** So you're saying things like that are still helpful, even though coming in you might feel a little worried that you're going to be disrupting your day to try and bring up this topic and discuss it. It's still worth bringing it up, because it helps maybe contribute to a larger problem that other people may be trying to solve, so it helps get that onto your radar a little bit better....

**Mikeal Rogers:** \[28:05\] Yeah. It's always better to know than not to know. A good example of this is like, I understand all of the places in which people violate HTTP specs and OAuth specs because of the issues coming into Request. So these are not bugs in Request, these are actually bugs in other people's software, including Flickr... \[laughs\] You know, they're not case insensitive about headers, and things like that... You run into all these cases where like "Oh yeah, the actual world that people are living in and the environment of the internet is pretty brutal." And that is really good feedback when you're designing new APIs and systems... And maybe actually this is not necessarily a Request bug, but it's probably something that Request needs to consider. Request ended up writing an entire new library called Caseless in order to do headers, so that we could still think about headers in a not case-specific way, but preserve casing if you set it, because you might be dealing with a server that is violating the spec... So all of that ends up coming into the project, and eventually can make it better. Every "This isn't my bug" thing is actually good feedback about what people are using the software for.

And also, for me -- I did one of the many rewrites of the HTTP client in Node, and a lot of that was driven by all the bugs that I saw people complaining about, that were actually core bugs, but they came through Request, because people were using Request and saw the bug and they don't know if it's in core in Request or not.

**Nick Nisi:** Yeah, that's another tough thing... Because it's a toolchain or a pipeline of several different projects, it might not actually be the code that you're maintaining that is the cause of the bug, so you might have to go deeper into that package inception to figure out where it is, or redirect people, which can be very difficult.

But yeah, that's really interesting, that example - you don't want to make Request support non-spec things, like case-sensitive headers, for example... But you don't want to push people away from the project just because it exists out in the wild in an incorrect way. Yeah, that's very interesting.

What about some tips and tricks for reporting bugs, or actually helping to push them through to get fixed?

**Mikeal Rogers:** I think a lot of people complain about just stars, and thumbs up and things like that in an issue, and they want it to get fixed... But I feel like they're haters, and like that actually is sort of useful feedback sometimes, to know how much other people might care about an issue. It can become a distraction... My main example of this is I used to basically do a manual collection of project metrics before each Node.js board meeting, to look at what was going on in the org... And you would see months where issue comments spiked, commits went down. Because you'd have these issues where some kind of flame war happened, or a bunch of people got really emotional about, and that just led to a drop in productivity for the rest of the maintainers, right? So there is like a noticeable decline in real productivity if you just freak out about a tiny thing in an issue that blows up to hundreds and hundreds of comments. I would say that comment number 100 is officially not helpful. \[laughs\] You wanna set a bar, like "That's it!" Especially with the hearts and the thumbs up... You don't have to have comments for that. It's really nice.

**Nick Nisi:** Yeah. And use the platform.

**Mikeal Rogers:** Yeah, yeah. It often does give you a sense of how much people care about something, and that could change how much you wanna prioritize things. The best way to ensure that something gets fixed is to fix it. \[laughter\] Send a pull request, even if it's not complete. If it's most of the way there and you need extra feedback, the pull request with working code is a good way to start that conversation, and has much more real things that people can talk through.

\[32:08\] Often too, I end up in these situations where I have so much of the context of the code in my head, and it's not really written down. It would take a really long time to explain it to somebody... So when somebody comes and says "Oh, I want this feature in", I'm like "It's gonna be really hard and I don't really have time." If somebody just wrote up the start of a pull request, that wasn't complete - and this has happened a few times, where they started it, and I was like "Well, okay, this thing isn't gonna work this way, and you need to look over here." But that was still a tenth of the work that it would have taken to explain everything from scratch. I had specific things that I could comment on and point to, and say like "No, this thing is over here. Do it that way", and that whole process is just a lot easier. The moment that you have real code to talk about, everything gets easier.

**Nick Nisi:** Yeah. You're kind of leading into a question I was going to ask, which is how do you maintain a balance between when a feature request or a bug issue gets written, how do you maintain a balance between maybe pushing someone into helping contribute via a pull request, versus just doing it all, because like you said, you have a lot of the context in your head and you know exactly where to go.

I would love to help out on projects, but I don't have that context, and so maybe I don't fully understand the problem, or I don't understand where to quickly jump in, or even not quickly, but where to jump in at all... And do you strike a balance between trying to educate others and help groom them into contributing to the project, versus just fixing it on your own?

**Henry Zhu:** I feel like it depends on the issue. If it's clearly a regression and everyone's complaining, you probably don't wanna wait for someone to do it, so you would just have to do that, definitely... But I feel like a lot of things are just like -- there's a bug, and it's not like you don't wanna fix it, but you're okay with waiting for someone to figure it out. Yeah, I think it's kind of on maintainers to come up with better contributing guides and tutorials.

I think it's good that we have stuff like livestreaming now, and YouTube, and those video courses, and stuff... I think projects could do more in-depth guides on how things work. That would help.

**Mikeal Rogers:** If you think about it from the point of view of a person who stumbles upon this issue, or maybe even the person that logged it... They're looking at it, and what are they looking for before they write code to fix it? One might just be a clear signal from the maintainer that it's something that they would accept, so they know that they're not wasting their time. So a comment from a leader in the project saying "Yeah, this would be really cool. Send us a pull request" is actually really useful. Pointers that might give them some insight into where to put it are always really helpful, if you have those or if those are obvious. That's the kind of stuff that a contributing guide doesn't always cover. The area of the code that this particular feature needs to be in is always a little tricky.

Also, if when you think about it, you immediately go like "Okay, this part is gonna be hard" or "It needs to be integrated with this thing" - those are pretty not obvious to people that aren't familiar with the code, so just laying those out really quick in a comment really helps, too.

I've done that in issues and seen them sit for months, and then somebody just randomly sort of goes like "Oh yeah, here's a pull request. I wrote that." Because there's quite a few people that come across these issues, and if it's something that they're even a little bit familiar with, they go like "Oh yeah, I could go write that. I'll spend an afternoon."

**Henry Zhu:** Yeah. So I guess you just mentally think how you would solve this; just think about it for a few minutes and then write that down, and then people can go with that.

**Mikeal Rogers:** Oh, and also encouraging work-in-progress PRs, as well... Because a lot of projects have really strict rules about "Don't send a PR until it's ready to be integrated", and stuff like that. So if you wanna use the review process as a way to continue to work with people and educate them, make sure to let people know that that's totally useful, to say "Put this in front of the title", or "Add his tag", or something like that.

**Henry Zhu:** \[36:08\] Well, on GitHub -- yeah...

**Nick Nisi:** Yeah, they actually have draft PRs now.

**Mikeal Rogers:** Oh, really?

**Nick Nisi:** Yeah.

**Mikeal Rogers:** I didn't even know about this. I'm still putting big Work-in-Progress brackets around my titles.

**Nick Nisi:** That is good too, because it does show -- like, if you're wanting to contribute to a project and so you go to the issues list, if you see a draft PR, then you know that somebody is actually working on that. It might be assigned to somebody, but they may have never looked at it; but if there's actually code out there, somebody kind of has started that process, so it kind of helps you to filter, as someone coming to the project, filter down to something that maybe hasn't been touched yet, so you can get your mark in there with that.

**Henry Zhu:** Yeah. I think it would be nice if GitHub would link that. As a maintainer, it would be nice to see which issues are "being worked on", and then you could know which ones to review, and people that are looking into that - they could know that someone's working on it. Maybe they can collaborate, or be like "Oh, I tried this. This test case wasn't working", or something.

**Nick Nisi:** Yeah, for sure.

**Mikeal Rogers:** Well, this feature was released in February. I did not know about this. Wow! This is so cool. \[laughs\]

**Nick Nisi:** Yeah, it's fairly new. The only issue I tend to have with it is I usually after it's been a draft, I have to mark it as "Ready for review", and then push another commit to it to trigger CI to go again.

**Mikeal Rogers:** Oh, okay.

**Nick Nisi:** That tends to be the problem right now.

**Mikeal Rogers:** So when it's in the draft state, people can't review it?

**Henry Zhu:** They can't merge it.

**Mikeal Rogers:** Oh, you can't merge it. Okay. But people can still review it and you have all the review tools.

**Henry Zhu:** Yeah.

**Mikeal Rogers:** Cool. Very cool.

**Nick Nisi:** So how about giving praise or thanks to a project? Is that something that you tend to like? Is it distracting? Does it invite negative feedback, in some ways?

**Henry Zhu:** No, I feel like it's so rare that I would hope that everyone appreciates that kind of thing.

**Nick Nisi:** Oh, that's so sad that it's rare... I'm sorry... \[laughter\]

**Henry Zhu:** Well, I talk about this a lot - it's pretty rare for someone to make an issue about it, because it's called an issue, so it's already negative... And then on Twitter maybe... But most of that is like people complaining to the Twitter ether that something doesn't work. So it's more that when you go to a meetup or a conference, people will be really nice to you. I don't think anyone would say that to your face, but online, people can say whatever they want, so... Yeah.

**Mikeal Rogers:** Yeah, it is really rare. And I have experienced the same thing, where in-person people are much more giving about positive feedback than online... So it is always really good to see. I know that since I have a little bit more of a following than an average developer on Twitter, or whatever, I've spent more time going out of my way to praise people and to talk about projects that I like, because it seems to have a bigger sort of reverberation, and it gets other people starting like "Oh yeah, this does look really cool" or "This is really good." And that's only backfired once or twice, where that project wasn't quite ready for that level of attention... \[laughs\]

I remember in the really early days of Greenkeeper, I was like "Oh, this is so rad", and tweeted about it, and got all the people tweeting about it, and their infrastructure wasn't quite ready to handle that many people signing up right away... \[laughs\]

**Nick Nisi:** The Mikeal Effect.

**Mikeal Rogers:** Yeah... And then I think I added Request to it... No, no -- they all used Request, and then I updated Request, and that had this big fan-out effect in Greenkeeper. They weren't complaining to me about it; they were just like "Oh man, we've had to really buckle down and add some infrastructure for that one." They appreciated more people using it.

And the thing that I keep bringing up lately is the Pika package stuff. I think that looks really cool.

**Nick Nisi:** Yeah...!

**Mikeal Rogers:** I think it's a really big leap in terms of tooling, and thinking about the platform. To some extent, it's sort of catching us up with where the platform is. The platform has improved a lot since we started building these big toolchains, and it's worth going back to basics and thinking "What can we do without all these toolchains, and what would new tools look like that take advantage of all the new platform features?" Even if we have to throw away a lot of what we've done before.

**Nick Nisi:** \[40:13\] Yeah. And just to plug JS Party, we actually talked to the maintainer of Pika on episode \#69, so definitely go back and check that out.

**Mikeal Rogers:** Cool! Was that Fred, or the other maintainer?

**Nick Nisi:** Yeah, Fred K. Schott.

**Mikeal Rogers:** Yeah. Fred's great. Fred used to contribute to Request actually, back in the day.

**Nick Nisi:** Oh, nice.

**Henry Zhu:** \[laughs\] Full circle.

**Mikeal Rogers:** Yeah.

**Nick Nisi:** So you mentioned coming up to you at conferences or praising on Twitter are really good ways to do that. I kind of agree. It seems weird to open an issue, because it seems like that's the weird place, although I have seen it and I don't think that it's ever taken negatively... But like you said, Henry, it's not an issue; it's an issue in the best possible way, I guess. But there's no real solution to it, so then do you just close it? Do you leave it open? Very weird... \[laughter\]

**Mikeal Rogers:** Some people have real OCD about that. I've given up. I'm one of these big inbox people, where I'm just like "Oh, screw it... They're just open. Whatever." JDD I know is just militant about closing issues right away... So I think some people would appreciate it less than others.

**Nick Nisi:** Sure.

**Mikeal Rogers:** By and large, I think people would appreciate it. I would just caution against having a day or like a Twitter thread where you are encouraging a lot of people to open these on the same day, because then people that are involved in a lot of projects are just gonna see their inbox fill up with new threads praising different projects...

**Henry Zhu:** I mean, in a way it's also more effective if people just do it on their own, asynchronously, rather than -- I mean, at that point you get 100 thank-you's and you're like "Okay. Now what." If it's just one-off... You actually appreciate it more when it's just one person.

**Nick Nisi:** Yeah, totally. I tend to try and just put a comment in a real issue, like "I'm having this problem, but before I say that, I just wanna say I love this project", or something like that... So it's a little bit of praise, but it's still relevant and totally an issue.

The other thing I really like to do is if I feel like I have the skills, ask for maybe some feedback on how to maybe approach that. If it is something where I don't have the context built up, but I'd like to contribute, I might say "I know you're busy... I'd love to contribute a fix to this if you can put me in the right direction, or let me know about anything that I might not be thinking about in terms of this issue."

**Henry Zhu:** Yeah.

**Mikeal Rogers:** I like that. I like just having the praise in there couching this sort of "I'm having this issue" stuff. That's always really cool.

Often when I log an issue, I'm like "Hey, I'm having this problem", and then I'll just outline exactly what I can commit to in terms of fixing it. "I've looked at this codebase. I can probably fix it if you can point me in the right direction. I can put in the time for that." Or I'll literally just say "Just letting you know about this, I don't have the time to fix it. If you can't fix it, I understand... I'm also busy." \[laughs\]

**Nick Nisi:** That's really good feedback too, and it's something that might be weird to bring up. It just seems like -- you're talking about people's time, and if they come back and say "Oh, I can't do that", it's not that they don't care about the issue that you're bringing up, it's just that they literally don't have time to do that. It can be tough to bring that type of stuff up. At least to me. I don't know.

**Henry Zhu:** It's like with the issue template - we want people to give as much information upfront, so you don't have to do this back-and-forth thing where people don't understand the context or expectations.

**Mikeal Rogers:** Yeah. 9 out of 10 times I delete that issue template though... \[laughter\]

**Henry Zhu:** Yeah, I know.

**Mikeal Rogers:** Like, "I'm gonna get you this information if it's relevant, but..."

**Henry Zhu:** Yeah, exactly. I think it'd be funny if GitHub had stats, like how many people just do the Ctrl+A and Delete, and then just paste something in there.

**Mikeal Rogers:** Well, people have bots now that complain when you do that. It's like, "No. No, shut up. This is meaningful feedback that your template is dumb." \[laughs\]

**Henry Zhu:** \[44:06\] True.

**Mikeal Rogers:** I was really actually against the templates when they came out, and I still feel like they may be more pain than they're worth in a lot of scenarios. The best that I've seen actually are just like...

**Henry Zhu:** Short.

**Mikeal Rogers:** Yeah, really short ones, or when you have a set of templates, and that set of templates really encourages people to do different kinds of issues. They may not know if they can just create a discussion issue, or if this is the right place for that, but if they see a template in the template picker, they're like "Oh yes, that is what I'm supposed to do." So it can also be like an encouraging mechanism.

Also, I work at a company where just the entire company internally is organized on GitHub in private repos, so we have a lot of internal processes where the template lays out all the things that they need in order to complete the process, which is super-useful.

Also, there's this hidden feature in issue creation where you can attach a bunch of stuff to the query string to pre-fill out those boxes. We've done some really cool stuff integrating that into products like ProtoSchool, where if somebody is learning something and they have an issue, the link actually contains a bunch of contextual information about where they were at in the lesson, and fills out all that stuff for them, and all that.

**Nick Nisi:** Wow...!

**Mikeal Rogers:** Yeah... There's a lot that we can do to reduce the barrier on individuals to fill all that stuff out if we have that context.

**Henry Zhu:** Yeah, I know you can change the title and the body, and now you can add labels, which is cool... It makes sense that each template could have its own label. Like, if this is a bug fix issue, then it automatically adds that.

**Mikeal Rogers:** Right.

**Nick Nisi:** Nice. That's awesome. I didn't know that you could do that. So you can just create a, say, praise template, and it'll automatically add the "Won't fix" label. \[laughter\]

**Henry Zhu:** Yes. And close it automatically.

**Mikeal Rogers:** Yeah. We can call it "Not a bug", or something, rather than "Won't fix." \[laughter\] "I'm never going to fix your praise!"

**Henry Zhu:** Yeah, I know. Or we'll just leave it open for everyone. That's true...

**Mikeal Rogers:** Right, right. \[laughs\]

**Break:** \[46:09\]

**Nick Nisi:** Maintaining open source can be a big challenge, and it's always good to get praise, to know that your time and the contributions you're putting into it are appreciated by the users and the people who are using it, but there is much more to self-care that we'd like to deep-dive into a little bit more... So what are some things that you can do to take care of yourself as an open source maintainer, and help you avoid burnout, which seems to be so common?

**Henry Zhu:** The obvious and hard thing to do is literally to stop working on it. It's funny, because we're trying to convince all these people to do open source, and then at the same time you're getting frustrated, or working at it so much, and you're trying to manage how many notifications you're getting, and answering everyone's Twitter thing, and going on talks and podcasts and saying yes to everything... It's like, how do you learn to say no? And it's almost like we're waiting until we literally can't do it anymore; we break down, and then you HAVE to take a break, because you have some physical issue, or something... Which is unfortunate. But how do we actually get people to know that coming in? Maybe you have to just earn that the hard way, but... I don't know.

For me it's not working on the weekend, or -- especially now that I'm doing it full-time, it's like, okay, trying to set a set schedule, if that works... Having boundaries, and stuff like that.

**Nick Nisi:** \[48:29\] For sure.

**Mikeal Rogers:** Yeah. Having a baby is kind of amazing, in that you have to get better at time management, and you definitely have to take breaks away from a keyboard, to do something that is not computers. Just having that built in every morning and every evening, and on the weekends as well, has been amazing.

But I've also started to recognize that all coding is not the same for me. Working on something that is on top of a big framework, or editing a large application or website, or dealing with those kinds of bugs - it's just a very different activity than if I sit down and do something for me, usually in a smaller open source project, or solve some kind of small task. So I've started just kind of outlining what that practice looks like for me... Because not only is it important for my mental health, it is sort of like a weird meditative activity, that makes me not go crazy, especially during periods of time where -- a lot of my work is not necessarily writing to code that needs to ship, so there are periods of time where I could go without having to write any code for work, and if that happens, then I really start to go a little nuts, if I don't get some code time in...

But yeah, I've just gotten much better at identifying the different practices and rituals that I can do that make that time really productive... And also, it really makes me a much better programmer, and it allows me to think in code a lot better when I'm not programming. So I've started to write those out separately, in -- I don't know what it'll turn into at some point; a blog post, or something.

But yeah, there's a million little self-care routines too that I do all the time, like taking big breaks... And often by midday Friday I'm a little burnt out, and so I will just go see a movie. It's like, nothing is gonna happen that is work right now. I might as well just go somewhere where I can do it... Things like that.

**Nick Nisi:** Yeah, totally. I've definitely done stuff like that. Time-shifting is something that I can do a little bit in my role, so I do take advantage of that, knowing that I might not be productive right after lunch some days, or depending on other circumstances. I have two kids, so sometimes I don't get sleep, and being able to say "I'll just take care of myself now, and come back later" - that really does help out a lot.

**Mikeal Rogers:** Yeah. I've started to push myself less, actually, too... And I've found that the less I push myself, the more I get done, and the better my code is. If I don't feel like I know what the solution to a problem is yet, I will not sit down and try to write it. I will take a walk, and think about it, or I literally just do anything else and let it marinate for a little bit longer, and then when I sit down, it comes out so quickly, and it's usually much higher quality.

**Nick Nisi:** Yeah.

**Henry Zhu:** Honestly, it just takes a lot of faith, in that sense. Not having to have that urgency of figuring out at this second, right?

**Mikeal Rogers:** Yeah, yeah. I have a thing that I really need to get done by the end of the week, and last night I was sitting down to do it and I was like "I don't quite have it yet...", so instead I wrote something else; an update to a library that I had, that I've been trying to migrate the tests around... Because that was just a thing that I knew that I could get done, I knew how to get it done, and just sort of powered through it. At the end I was really satisfied, I got a good night's sleep... I've been thinking about it all day, and now I'm pretty sure that by tonight it will come really, really easily.

And yeah, the time-shifting thing definitely happens for me a lot too, because I'm up so early to get our baby ready... And then I work all day, but I had odd meeting schedules because we're 100% distributed. I have people in Europe and in Australia, so there's just some interesting stuff that happens there.

\[52:07\] Often in the afternoon I will take some of the bigger breaks, and get dinner ready, and things like that... And then after she goes to sleep, I'll then get like -- that's my biggest section of uninterrupted 2-3 hours to just knock out some good code. But yeah, that's the nice thing about working from home and for an entirely distributed team - there's not a lot of expectations around "This particular time you need to be doing this particular thing."

**Nick Nisi:** Yeah, totally. And Henry, I'm glad you brought up that it really is just faith... I was reading (I think it was) your blog post about starting that podcast, Hope in Source, and how you saw the similarities between faith and the faith in yourself to do this open source... And that's really cool, seeing that similarity and building off of that. Would you also say that maybe starting these podcasts has helped you in that as well, as part of self-care, being able to talk about what's going on more, and to -- commiserate is the wrong word, but discuss with other people in similar situations as you?

**Henry Zhu:** Yeah. Well, I guess I'd never thought about it that way, but I think it's funny that I have to do a podcast to do that... But it's true, I talked about it on previous podcasts - it's a great way to have a conversation for an hour or so with people that care about the same things. And it's like, if we're struggling with being a maintainer, doing open source, and knowing that other people have those same problems, and talking through them... And knowing that we don't really know the answer, but we're all figuring this out together - I think that's helpful.

**Nick Nisi:** Yeah, for sure.

**Mikeal Rogers:** I read this interesting book - I'm halfway through it - about habits and about how to form habits and how to get rid of bad habits... And as you're reading it, it's so obvious; all of the things that they're saying are so obvious. But also, whenever I set out to do something new, I never do any of this stuff, and usually fail at keeping up with that.

But trying to structure things so that you have to do something, or you can't do something that you don't want to be doing... Like, if you don't have junk food in your house, you will not eat it... \[laughs\] That is a very basic thing that you should probably do, if that is a habit that you wanna have.

Another one that I really like is called habit stacking. You take habits that you already do regularly and you start layering other things on top of them, so that they end up being the thing that pre-empts you to do the next thing. That's been really cool.

**Nick Nisi:** Yeah, like a trigger to another habit.

**Mikeal Rogers:** Yeah, yeah. I mean, I feel like so much of self-care is not that we don't know what to do, it's that we just don't do it consistently. And especially once we get some benefit out of it, we then take all of those gains and roll them into the next sprint of burning ourselves out, and don't continue to do them right.

I don't meditate as regularly as I should, but just the process of learning transcendental meditation and then doing it regularly for quite a while made it so clear how different the effects of a practice are, versus just something that you do occasionally. And now that I do it occasionally, the gains that I get from it are not nearly as big as the gains that I was getting when I was doing it twice a day. It just compounds and continues to get better, and you get better at it, and the benefits that you see... Whereas now I don't have a habit about it anymore, which is a problem. I tend to use it when I'm having some kind of bigger issue. But even having it to fall back on now is pretty useful.

**Henry Zhu:** Yeah. I also say being able to do it in a group, I would hope that it gets you to do it on your own too, but sometimes that's hard.

**Mikeal Rogers:** \[55:44\] Yeah. I mean, not every habit you can do in a group, but that's one of the things in the book where he's like "If you can build a community of people around doing it, your chance of success and continuing to do it is much higher."

**Nick Nisi:** Is this Atomic Habits, by chance?

**Mikeal Rogers:** Yes, yes!

**Nick Nisi:** I've just read that book.

**Mikeal Rogers:** Oh, right, right. Yeah.

**Nick Nisi:** It sounded very familiar.

**Mikeal Rogers:** Yeah, I'm in the middle of the audiobook, actually... Because I don't have room for any books. Here's the funny thing though - listening to podcasts and audiobooks, I don't need to build a habit around that, because now if I am walking somewhere, that's on... \[laughs\] There are all these spaces in my day that I know will fit into that, and now I just go for it. I don't have to try to push myself to read more, and things like that.

So in the break I created a repository at github.com/mikeal/self-care, where I wanna actually collect some of these self-care routines and get other people's thoughts on them as well, in an open source way. If people have things they'd like to share, go there. I'm starting to share a few now... I had a lot of wrist pain for a while, and came up with a way to resolve some of that.

**Nick Nisi:** Oh, nice. This is awesome. We'll definitely put that in the show notes, so check that out.

**Henry Zhu:** Cool.

**Mikeal Rogers:** It was a great show!

**Nick Nisi:** Yeah, it was really great. Henry, thank you so much for joining us. I really just encourage our listeners to say thank you to you, because if you're using JS, you're probably using Babel. I'm very appreciative of it... You should show him that praise. Maybe not all create an issue, but definitely talk about Babel, and talk about his other work... Definitely follow you on Twitter, check out your Patreon, and your two podcasts, and the upcoming third one.

**Henry Zhu:** Yeah, yeah.

**Nick Nisi:** Hope in Source, Maintainers Anonymous, and... I can't remember if you mentioned what the third one was.

**Henry Zhu:** I actually tweeted about the name, and I was like maybe I should come up with -- well, I think we might just call it The Babel Podcast; it's easy. But I remember I was like, "Maybe we should call it Babbling About Babel", or some funny thing... But I don't know. \[laughter\] We'll see.

**Nick Nisi:** Awesome.

**Mikeal Rogers:** I just wanna reiterate - Henry lives off of his Patreon donations right now, so if you appreciate have your code work in web browsers through Webpack or all of the different frameworks built in Webpack and Babel, you and potentially your company should try to give him some money on Patreon. Please do that.

**Henry Zhu:** Thank you.

**Mikeal Rogers:** He's too nice to promote himself, so I will promote him.

**Henry Zhu:** I'm working on it.

**Mikeal Rogers:** I'm like your hype man. I'll cut out before and after things, and I'll get people excited for you, and then afterwards be like, "Money!" \[laughter\]

**Nick Nisi:** I love the picture on your Patreon... It's a picture of you with a box, that has like Donations for Babel. It's great.

**Henry Zhu:** Yeah. That was a real event. \[laughter\]

**Nick Nisi:** You were saying you got like $200.

**Henry Zhu:** I did.

**Nick Nisi:** That is amazing.

**Mikeal Rogers:** So funny... Awesome. This was a great show. Thank you all.

**Nick Nisi:** Yeah, thank you!

**Henry Zhu:** Thank you.
