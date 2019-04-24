**Chris Benson:** Welcome to the Practical AI podcast. This is Chris Benson. We are the podcast that brings AI to you in a practical, productive and accessible way. I am at NVIDIA's GPU Technology Conference in March 2019, and we have a lot of world-class people in the AI space here. Normally, I would have my co-host Daniel Whitenack joining me. He was not able to make it this time, but I have the pleasure of introducing to you Adam Stooke.

Adam is a graduate student who is studying robotics and deep learning at UC Berkeley, and he's really focused on scaling deep reinforcement learning and hierarchical reinforcement learning. It's a pleasure to have you on the show, Adam. Welcome!

**Adam Stooke:** Thank you, Chris. It's a pleasure to be here.

**Chris Benson:** I wanted to note - and we'll dive into it in a few minutes - that you had done a talk called "Doing more with more recent achievements and large-scale deep reinforcement learning", but before we dive into the meat of it, can you tell me a little bit about your background? How you got here, how you discovered deep learning and reinforcement learning, and what your story is.

**Adam Stooke:** Sure. I've been working and studying deep reinforcement learning for about four years now as a Ph.D. student at UC Berkeley, under my professor, Pieter Abbeel. Previous to that, I had studied physics and mathematics in undergrad. I actually did a masters in physics here at UC Berkeley; I was in the air force at the time... So I was pulled away on active duty; I was very lucky to land a position at the Air Force Research Lab in Albuquerque, New Mexico, so I kept my technical chops up pretty well during this period.

About four years ago my time in the air force came to a natural end and I came back to school, and I was looking for what's hot, what's next, and the robots caught my eye.

**Chris Benson:** I've gotta start off by saying a couple of things... First of all, Daniel is gonna be completely jealous that he's not here, because he is a physicist who also came into the AI space as well; he's gonna be going "Oh, gosh, why did you take it, Chris?!" Sorry, Daniel, on that. And number two, being in the air force -- I work for Lockheed Martin in the AI space, and we do a lot of work with the air force.

Anyway, so as you started, were you already interested in deep learning, reinforcement learning when you were in the air force, or did that come along some time thereafter?

**Adam Stooke:** \[00:04:21.21\] No, this came along after, actually; only once I returned to graduate school. When I did get out of my time in the air force, it was just kind of by accident; it became the first exposure to me to a lot of programming and modeling and simulation in order to make informed decisions about technologies that we were gonna invest in and try to fly in space.

**Chris Benson:** What kind of tools were you using while you were doing that?

**Adam Stooke:** In that case I was programming pretty much entirely in MATLAB, and a little bit of Excel, why not...?

**Chris Benson:** Yeah, but actually a lot of people I know get into it from that, so that's totally valid.

**Adam Stooke:** So yeah, that gave me the first impression of like "Wow, this is really powerful if you can craft a good simulation and run this program on the computer. It can tell you a lot of important things about what's gonna happen in the real world", and that was the first thing that kind of turned me on to this idea, so that when I came back to school it was kind of a natural thing to look to a computer science department for the next research.

**Chris Benson:** Tell me a little bit about that process. You were out of the air force, you were getting into school - how did you discover it? What specifics did you get into? How did you find your way eventually to reinforcement learning?

**Adam Stooke:** I came back to school and I rejoined the physics department at Berkeley, where I'm actually still technically a member... But after about a semester in the summer, of kind of floating around to different research groups and finding a lot of deep and interesting projects going on, but not really getting the personal feeling; I was finding a place where I wanted to be continuing the work after graduating... You know, doing the Ph.D. in physics still has a really strong draw to me, but I started to look to other things to do after graduation, and then eventually I decided "Well, if I'm gonna do something different after graduating, why don't I get ready to do something different before graduating?" So I start looking a little broader.

I found the robotics work happening kind of across the street on the campus there, in computer science. I'm very lucky to be at such a powerhouse research university like Berkeley, with a hand in so many leading and so many different fields.

**Chris Benson:** Absolutely.

**Adam Stooke:** So yeah, I just kind of went across the street and knocked on the door and said "Hey, can I play?" \[laughter\] And a year or two of basically reaccomplishing an entire set of graduate coursework and projects later, the professor finally says "Yeah, Adam, okay. You can stay. You can do this with us."

**Chris Benson:** He made you earn your chops there, didn't he?

**Adam Stooke:** Which is code for "I can see you're not going away, so I might as well..."

**Chris Benson:** \[laughs\] Yeah, persistence, and intelligence, and sticking with it. So they were a robotic shop at this point that you were moving into?

**Adam Stooke:** That's correct, it's a robotic shop. At the same time, it's a lot about applying deep learning to robotics. My personal path since then has actually been much heavier on the deep learning side, reinforcement learning in particular.

**Chris Benson:** And before we even go on, we've mentioned reinforcement learning and deep reinforcement learning several times already... Could you tell us how you would interpret those in terms of what they are, for anyone that doesn't know what that is?

**Adam Stooke:** Sure. Let's start with reinforcement learning, which has a little bit of a longer history and pedigree behind it. It's basically a formal way of doing learning by trial and error. You've got some sort of task that you're trying to figure out how to do, you know what are the different possible small actions that you can do in order to try to achieve that task, but you don't necessarily know ahead of time what the task is or how to do it, so you just explore, you try things.

The key thing is that you get a signal back from the task; that's what we call a reward. When you receive a positive reward, it says "Oh, you did a good thing, so do that more." When you receive a negative reward, it says "Oh, you did a bad thing, so do that less." Based on queuing off of those signals, through trial and error, gradually over time...

**Chris Benson:** \[00:08:18.12\] You make an adjustment...

**Adam Stooke:** ...you make an adjustment, you try again, and then eventually you can learn to do some pretty sophisticated tasks through this. So there's a whole mathematical formalism built up around this, that we don't necessarily need to go into the depths of all the terms with that... But it's pretty well established, and the more recent development is deep reinforcement learning, which simply refers to the application of deep learning to reinforcement learning. Deep learning meaning, for all practical purposes, using deep neural networks.

**Chris Benson:** Sure. And at a high level, without diving too deep on this, can you talk a little bit about how you're applying deep learning to integrate that into reinforcement learning? Is there a high enough level for kind of an understanding of what that integration is, without diving too far into the math?

**Adam Stooke:** Sure, yeah. We can do that. One of the key components that you have in a reinforcement learning system is what you would call the learning agent itself; the learning agent is interacting with the environment which contains the task, and the learning agent is where the deep learning comes in, because the learning agent is going to be somehow making use of a deep neural network to express its decision-making.

**Chris Benson:** Sure. So this gives performance advantages over what you could previously do with just reinforcement learning, given the fact that there are so many more options available in terms of adjustments that you can make going forward, I assume?

**Adam Stooke:** That's exactly right, yeah. So in terms of the interfaces between the environment and the agent - the environment provides some sort of information to the agent, that the agent gets to look at and use when making its decision of what to do next... And it turns out that deep neural networks basically open up a whole new class of environments of much more complicated sets of information that the agent is able to digest in order to figure out what to do next.

**Chris Benson:** Sure. So as you got into this environment, they've accepted you into the fold, what did you do? What captured your imagination as you got into some of your first projects with the group?

**Adam Stooke:** Yeah, I think early on the projects that I keyed in on the most were some early work out of Deep Mind on learning to play Atari games from scratch, using only the screen image as input to the learning agent... In a very similar style to the way that a human would actually operate to play the game.

**Chris Benson:** I remember reading about that... Can you tell us a little bit about what that was and how it inspired you to more forward?

**Adam Stooke:** Sure, yeah. This was about five or more years ago by now; maybe it was the first result of, again, playing Atari from only the screen image. It made a big splash when it came out.

**Chris Benson:** It sure did.

**Adam Stooke:** It was on the cover of Nature even, so this was published a lot more broadly than the usual learning-only conferences, and this sort of thing... And then very shortly after that, after the initial successes there with the first algorithm, then another paper comes out with the second learning algorithm that's a little bit different, but is also getting good results, maybe running a little bit faster... And then over the next several years, in rapid fire, these teams that came out with the original ones are making little enhancements here, little enhancements there, piling them on, and before you know it, these learning algorithms are just completely destroying these Atari games, way beyond human level.

**Chris Benson:** Oh, yes...

**Adam Stooke:** And it really is just a springboard for lots of more sophisticated and more interesting games, for instance, to come after that.

**Chris Benson:** \[00:12:02.20\] So obviously it's been a while since the Atari news that came out in Nature, and stuff... Where did that take you, at that point? What captured your interest? What did you choose to do? What activities in terms of research did you want to engage in? What was that journey like? A lot of us out here who are very interested may not have had that experience, and I'm just very curious about how that evolved to where you are today, with the talks that you're giving at this point.

**Adam Stooke:** Yeah, it actually ended up in combination with a certain course that I was taking on parallel computing. It actually led me down the path of scaling up implementations of deep reinforcement learning. So taking an algorithm - okay, this algorithm is shown to work, and here's how we run it. Maybe we're running it on a small computer, and it takes five or ten days to do one learning run and to see the thing go from losing every point in pong to winning every point in pong... It's like "Okay, this is exciting. This is working, and we've got something real to go on here. Now let's refine it and scale it up and adjust it to make much better use of the computers that are available today." Long story short, that has a lot to do with why I'm here at GTC.

**Chris Benson:** Yeah, well, we're working our way there. \[laughter\] So you mentioned already the compute being a huge limitation... Obviously, we are an NVIDIA GTC, where it's all about compute, and so many things... So I guess what bridged -- today you did this talk, "Doing more with more recent achievements in large-scale deep reinforcement learning". What kinds of things are you covering in that, and what was the evolution to get to that point, and what were some of the milestones that you went through along the way to get to where you're at now?

**Adam Stooke:** Sure. I think some of the early steps started out with just taking an in-house reinforcement learning algorithm that we had, and identifying the key pieces in a way that the algorithm could be broken down to operate in parallel over more compute resources... So instead of just one CPU core running the computation, maybe you can use all the CPU cores in the machines, 16 of them, running in parallel in a smart way that gets you 16 times faster to the answer. This was kind of how I started, with one example algorithm like this, and just a lot of practice of figuring out how to set that up on a computer, get it to run and actually get the efficiency out.

**Chris Benson:** And you hadn't even gotten to the GPU world yet.

**Adam Stooke:** And I hadn't even gotten to the GPU world, no. And then - let's see... With this, once we had this up and running smoothly, we took a little detour through actually an Intel Knights Landing development kit that we bought, so a CPU-based architecture, but with maybe 60 or 70 cores, that we could successfully parallelize across... But ended up finding in the end that...

**Chris Benson:** It wasn't quite up to what you needed, was it?

**Adam Stooke:** It wasn't quite up to what we needed, and really there's no way around it. The GPU was the way to go.

**Chris Benson:** So at what point, how long ago was that where you realized you needed to go with GPUs and you started grabbing those, because you realized you were limiting yourself until you could speed up your training?

**Adam Stooke:** Yeah, I think by now this was maybe about two years ago, or so... So it was a bit of a journey. Starting on the GPU was about two years ago, and then about one year ago kind of wrapping up the project and more or less having it in shape.

**Chris Benson:** One of the things I was thinking as you were taking me through this - what were you trying to achieve with some of these projects? As you're doing these experiments and carrying it forward, what was your end goal in mind? What were you trying to get to?

**Adam Stooke:** \[00:16:03.16\] The main project that I was working on over this period was really just -- man, we had a need for speed. We were just gonna explore these deep reinforcement learning algorithms and see how fast can we learn one Atari game, and see what kind of records we can set and otherwise blow out of the water. So it turns out that a lot of the same techniques for parallelism that were useful on the CPU setting - the same principles applied in the GPU setting, for using multiple GPUs inside of one computer to run the algorithm.

At about the same time that I was setting down that path anyway, we were lucky enough to have NVIDIA come by and donate a DGX-1 as part of the university research support.

**Chris Benson:** That's a great donation, you know...? That's the kind of donation I want right there.

**Adam Stooke:** Yes, yes. It was a really fortunate moment for us, and good timing for me; it was about the time I was getting into this anyway, and my advisor says "Hey Adam, we've got this DGX-1 and, well, here you go..."

**Chris Benson:** \[laughs\] "Go to it!"

**Adam Stooke:** Go to it, exactly.

**Chris Benson:** "Here's the first AI super-computer. Have at it!"

**Adam Stooke:** Exactly. So I couldn't say no to that... I mean, I didn't wanna say no to that...

**Chris Benson:** Of course not. That's Christmas right there.

**Adam Stooke:** ...and then couldn't stop once I started, either.

**Chris Benson:** I'm guessing it was speeding up your process a little bit there, to go from CPUs... It sounds like you didn't have an in-between. Did you go straight from CPU all the way to using DGX-1, just like that, or were there intermediate steps along the way?

**Adam Stooke:** No, that's right, we pretty much went straight to the DGX-1.

**Chris Benson:** \[laughs\] Wow... That's like stepping out of this old jalopy car, and getting right into the Lamborghini and just going.

**Adam Stooke:** That's it, that's it. \[laughs\]

**Chris Benson:** I'm curious... It's non-trivial to -- you have to learn how to use a DGX-1; they suddenly plopped one in your lap and said "Hey, make use of this thing." Were you already familiar with containerization in Kubernetes, and things? Was there a learning curve for you to get ready to use the box, or...? What was that like, to make that transition?

**Adam Stooke:** There was a little bit of a learning curve. At this point, I was already pretty familiar with the particular deep learning library that we were using, which at this time was Theano. Luckily enough, about the same time Theano released support for NCCL, so NVIDIA's Collective Communications Library, which is for direct interconnects between the GPUs within the DGX-1, for very fast communication... So yeah, the learning curve was mainly around "Okay, I already am familiar with this library, but let's see how to plug it in to use for multiple GPUs." This was a pretty new thing at that time, about two years ago, so there wasn't really built-in support from Theano for multi GPU use; there were some preliminary stabs at that, but what we ended up doing was writing our own libraries for the parallel processing aspects. And again, luckily having the Theano guys expose an interface to this communications library to tie the multiple GPUs together in the most efficient way possible, based on the NVIDIA hardware that was inside.

**Chris Benson:** Gotcha. Were you already in the middle of a particular project when the DGX-1 came into the picture, or did you pick it up as you picked up a new project to move forward?

**Adam Stooke:** Looking back on it - I hadn't really thought about this before, but it was just incredibly fortunate timing... Because I was already on this project, I had already been tinkering around with the Knights Landing for some time, and was ready to move on, and move to GPUs. So the timing couldn't have been better when this came in.

**Chris Benson:** \[00:20:09.04\] That sounds fantastic. As you were making this transition... So you now have this DGX-1 that's been gifted to you, and they're saying "Go do stuff with it" - what's going through your head? What kind of projects are you thinking about? You're now into deep reinforcement learning I assume, at this point, and you have the power to drive that forward... What were you thinking and what kinds of projects have you taken on over the last couple of years to take advantage of that?

**Adam Stooke:** Again, a lot of the work at the beginning was just scaling out the reinforcement learning itself, taking existing algorithms and discovering that they can be scaled up to run on the entire system, so that we could use all eight GPUs and all 40 CPU cores within a DGX-1 to learn a single Atari game, and get basically linear speed-ups with that. So instead of taking 10 or 15 hours to master pong, we're getting it to like four minutes or so...

**Chris Benson:** \[laughs\] That probably helps your productivity a little bit.

**Adam Stooke:** It does.

**Chris Benson:** Go get a cup of coffee and you come back and it's done.

**Adam Stooke:** Come back and it's done, and you can iterate and try the next thing. That was actually, I think, a pretty interesting finding, because one of the key techniques to scaling up to using multiple GPUs that we also see across a lot of other scaling efforts is increasing the training batch size. There might be a couple points where we need to stop and make some definitions, but when training these neural networks, we often use this algorithm called Stochastic Gradient Descent.

**Chris Benson:** Can you define that for the audience, loosely?

**Adam Stooke:** Sure can. Basically, you're gonna have some way that you want to change the behavior of the neural net, which is this decision-making function inside your reinforcement learning agent, and you're going to change it based on experience that you have in the game. But instead of making updates on all the possible experience that you could gather, you'll gather a little bit of experience at a time, and then make a small adjustment; then gather a little bit of experience at a time, and make a small adjustment.

**Break:** \[00:22:24.11\]

**Chris Benson:** Okay, so having defined Stochastic Gradient Descent, take us forward on that.

**Adam Stooke:** The next step into making Stochastic Gradient Descent run more efficiently on a GPU, which is itself a highly parallel computing platform - one way to do this is to increase the training batch size, so increase the amount of experience that you gather and use together each time you're gonna make a slight adjustment to this decision-making function. That gives you full utilization of this GPU, which is kind of like a fat and wide computing pipe... And if you wanna make full use of 8 GPUs, then you need to have an eight times bigger training batch size in your algorithm, because you need to fill up all eight of those GPUs in order to run them efficiently.

\[00:24:27.00\] So it was a pretty interesting finding that we found that we were able to scale up the training batch size, even in a game as simple as pong, all the way to the point where we're making efficient use of eight GPUs in the full machine, and we're getting getting good linear scaling, where you're learning the game basically eight times as fast when using GPUs.

**Chris Benson:** I know NVIDIA is working on some of the same problems, as they're learning to get the parallelism of the capacity out there, so that you can take advantage of all the GPUs. Are you still using the code that you wrote to handle that, or have you switched over to some of the stuff that NVIDIA was producing? I had the same experience working at a prior employer, where some of the things that we needed to do was out ahead of any release, so we had a similar problem... Have you just stuck with the code that you wrote to accomplish that, or...?

**Adam Stooke:** Yeah, so far for the new projects that I've been working on, that aren't focused on scaling RL, but doing other learning experiments - yeah, exactly, we're using the same codebase that we established before, during the scale-up project.

So far, the new projects we've been running -- it's interesting, you end up running many different experiments in order to see what is working and what is not working, so in the end, an efficient way to run is actually to use only a single GPU, but maybe stack multiple different experiments running on the same computer, each one on a separate GPU... So we had kind of like baked that into our codebase, where it was flexible; you could either throw all eight GPUs at one problem, or have each of the eight GPUs running a separate problem, and you have many different setting that you're trying to test anyway, so either way in the end you get a good turnaround of results.

**Chris Benson:** Gotcha. So now that we've gotten up to the more recent past, and you're now using DGX-1 and you have these great tools available to you, and to kind of come full circle back to your talk today... As you talked about "Recent achievements in large-scale deep reinforcement learning", what things did you cover in your talk? What kinds of things, as useful? Some of our listeners out there are using DGX-1, DGX-2 and other equipment from other companies as well... What are the learnings that you've found that are gonna help us along there, in terms of recent achievements?

**Adam Stooke:** Sure. Most of the projects that I talked about earlier today were to do with large-scale research projects happening at other organizations, such as Google Deep Mind in London, and OpenAI here in San Francisco. Some really impressive recent achievements coming out of those places.

**Chris Benson:** Can you share some of those achievements for me, that you talked about?

**Adam Stooke:** I certainly can, yeah. So kind of building on these foundations that happened under the Atari experiments over the last several years, now there's new results coming out in other domains, to include DOTA 2, Starcraft 2, a version of Capture the Flag that's in an actual first-person action 3D game style... So it's really exciting to see a lot more sophisticated video games that are actually interesting, and still maybe addictive for humans to play today, that are now being tackled and solved by these learning agents.

**Chris Benson:** Yeah, the Starcraft 2 work really captured my imagination, and those of some friends of mine. We were talking about that just in terms of -- this field is leaping forward so fast... As you talked about, going from pong, to managing games of that level with this technology, and doing that.

Tell us a little bit more about Deep Mind and OpenAI, and how that has influenced you.

**Adam Stooke:** \[00:28:09.19\] Yeah, sure. I was fortunate enough to do a research internship at deep mind over the last fall, so I had some first-hand exposure to some of their techniques and their working methods, and such...

**Chris Benson:** Very cool.

**Adam Stooke:** I'm not gonna say anything that isn't publicly available \[unintelligible 00:28:26.26\]

**Chris Benson:** Of course not. We would never ask you that.

**Adam Stooke:** I've gotta be careful about that. But yeah, it was a wonderful experience to see the whole organization, from top to bottom. Amazing resources in terms of people, amazing resources in terms of compute... Once you're inside the door, it's no wonder the amazing things that are coming out.

**Chris Benson:** So of the things that are publically known now, what was the coolest thing that you experienced there, while you were doing that internship, that you can share with us?

**Adam Stooke:** I think the thing that was the coolest for me... Again, it was a combination of these two factors - the people and the compute resources, and both of those organized well in the same place. Actually, I was sitting next to much of the Starcraft 2 team, when they were in the heat of the development, last fall..

**Chris Benson:** Really? That's cool.

**Adam Stooke:** ...in the run-up to these professional matches. I wasn't personally involved in that project, but I heard a lot of background chatter...

**Chris Benson:** Looking over their shoulders...

**Adam Stooke:** I saw the very intense meetings going on... Some people scrambling to get presentations together for the meetings, with their latest developments in learning curves, and everything. I saw people debating about how much compute they were gonna use, whether they were gonna bring down all Google Cloud, or something like that...

**Chris Benson:** Oh, wow. \[laughter\] That would be a bad moment there.

**Adam Stooke:** It would be a bad moment, yeah. So it was really amazing to see this great organization of really interested and generally excited researchers, working together in this team environment that was very professional and eager.

**Chris Benson:** Yeah. So what about OpenAI? You mentioned that a moment ago... What are some of the things that they have been doing that have inspired you?

**Adam Stooke:** Yeah, OpenAI also has a very exciting project going on, with a slightly different game, DOTA 2, which I think is even more popular and widespread than Starcraft 2. I think I've read something on their blog... The annual winnings of e-sports contests in Dota 2 is like 40 million dollars a year, or so.

**Chris Benson:** Wow... That's some real money there.

**Adam Stooke:** Yeah, so this game is happening, there's real money... And likewise, they have a totally independent branch, a very different approach, and their own run to train an agent to play at a professional level, in a very complicated environment such as these games.

**Chris Benson:** It sounds like pretty amazing experiences, to be exposed to that... Where do you see yourself going, or is there stuff that you're working on now that you can share, or things that you have in mind for the future, and what you wanna do specifically?

**Adam Stooke:** Yeah, there's a couple of projects that I've been working on recently, that I think are interesting. One of them actually is working towards real-world applications of reinforcement learning... So it's very exciting, all this development that is happening in these video games, but obviously we're not developing reinforcement learning to play the games better, we're--

**Chris Benson:** Well, we could be, but we're not...

**Adam Stooke:** We're learning to play the games better to develop reinforcement learning maybe, for other things. I think another really exciting result that came out recently is in job scheduling, which is like managing paralel computing resources. I'll give a shout-out to another group, \[unintelligible 00:31:57.20\] from MIT, as the first author on a paper that came out in the fall, to do with reinforcement learning for job scheduling on data clusters, under the Apache Spark setup.

**Chris Benson:** \[00:32:14.29\] We'll include a link to that in the show notes as well, for people to go reference.

**Adam Stooke:** Okay, great. Yeah, this is really exciting work, to see reinforcement learning applied to a real-world problem like this, scheduling hundreds or thousands of CPUs, basically, under diverse workloads from multiple users. They did a really nice job of laying out, "Okay, here's a couple of heuristic job scheduling algorithms that you might have for deciding which computing tasks need to run on which CPU, and when."

They have some really nice heuristics that they use, and then also some more advanced, but recent, handcrafter algorithms, and then they show deep reinforcement learning of course, taking the cake and blowing them all out of the water. It's a really beautiful thing to see.

**Chris Benson:** Where do you think we're going next, in terms of applying deep reinforcement learning to robotics? Both of those fields individually are moving so fast now... Do a little fortune-telling for us, and lay out what you think we're gonna see in the near-term, or maybe in the longer-term. Be a little speculative.

**Adam Stooke:** Okay, sure. I think we're already seeing interesting robotics results coming out of OpenAI, for instance. They had a blog post recently on learning dexterity, where they had a robotic hand which could manipulate a cube in very human-like-looking ways, trained entirely on reinforcement learning, using basically the same algorithm and setup as they used for DOTA 2... It's really cool to see these techniques crossing into new applications.

I think definitely robotics is a very ripe field for application. Obviously, there's so many things that could be enabled. Not only is the hardware getting there and in place, but... Man, it's just really hard to hand-program these things to do interesting activities in new environments, in new places that they haven't seen before. Learning is definitely gonna be the way to get behaviors out of robots that generalize to new scenarios, that will let them roam free in the world and be useful and safe.

**Chris Benson:** So do you dare to put any timeframes around when we'll see different levels of that out there, or am I getting too out there?

**Adam Stooke:** Uuuh...

**Chris Benson:** \[laughs\] The look on his face, by the way... You can see it listening to this, but he was like, "Oh god, I just poured gas on the fire right there."

**Adam Stooke:** Maybe what we can do is I'll just record five years, ten years, fifteen years. Then we can go back later, depending on which one was right and just edit it in, how about that? \[laughter\]

**Chris Benson:** There you go. Fair enough. I had to try there. So a lot of people that listen are kind of getting into it. We have a lot of people that are practitioners, but we also have a lot of people out there that are in the technology world, academic world, business world, who are trying to figure out how they're going to move into this space... And as someone who is ramped up, done that, understands what's necessary to be productive in the world, what kind of advice do you have for people in a couple of different scenarios? ...if they're in a business and they may have a data science team, or a group of developers, and they're wanting to retrain in reinforcement learning, deep reinforcement learning, and maybe even robotics; that might be an application they're interested in. First of all, for that kind of person already out there, in the real world, so to speak, what should they be thinking about? How should they start making a transition to take advantage of these technologies at this point?

**Adam Stooke:** I think one possible way to approach this taking on a new field like this that I think could be productive is to take the time to practice it and do it yourself. There are starting to be more and more implementations of these deep reinforcement learning algorithms available out there on the internet. GitHub, for instance, I'm sure is full of them. I just released the code for accel\_rl; my project for scaling up on the DGX-1 is now out on GitHub...

**Chris Benson:** \[00:36:23.09\] And of course, we'll add a link to that into the show notes there.

**Adam Stooke:** Okay. So there's one such example... But really, taking the time to -- okay, read off of those, but implement it yourself; make yourself rewrite it from scratch, and run it, and get all the way to the point where you're recreating the learning curve that is published in the literature... Because a lot of what happens with this work - there's so many programming concepts that are not too difficult to understand mainly and get in place, but there can be lots of little bugs, and lots of little gotchas, and maybe you didn't this hyperparameter just right, or maybe there's a detail that's a little bit obscured in the paper and maybe isn't revealed as clearly as could have been, so you need to go back and reference someone else's implementation to say "Oh, that number needs to be 0.25, instead of 1.25", and suddenly it works now. "Oh, this is new!" So make yourself go through all the stages, basically from scratch, to reproducing the learning curve that you see in the literature. Then you'll know that you're doing the full stack.

**Chris Benson:** Gotcha. And I'm gonna ask for one other use case that's probably some commonality between them... But if you are a student, maybe in high school now, and you're trying to figure out what you're gonna do as you go into your first university experience - what would you advise that 16, 17, 18-year-old kid who's ready to say "Hey, I think this might be what I wanna do...", and they have the advantage of going through schooling, and taking advantage of it; they're not out there in the world yet. What would you advise them to do? What kind of track should they be thinking about?

**Adam Stooke:** Yeah, definitely taking as many of the computer science and programming classes as you can; being a good programmer is definitely a plus in this field. But if you're really trying to get into learning research, actually it's not always fully necessary. There's a lot of things to know about learning theory, and such; you could also get involved in a lot of mathematics, a lot of statistics... So yeah, I would say early on take a broad approach, because a different sub-area within this whole field of learning might grab your attention, and before you know it, you've gone a year or two deep into a certain sub-topic, and then you realize "Oh, this is the part that I really wanna do.

**Chris Benson:** Okay. Well, this has been fascinating. Thank you so much for coming on. If people wanna reach out to you and make contact with you, where are you on social media? How do you like to interact with people out there in the world?

**Adam Stooke:** Yeah, sure. That's easy, you can find me either on Facebook, or old-fashioned e-mail can do the trick as well.

**Chris Benson:** Alright, we'll include those as well. Thank you very much. This was a great conversation, I really enjoyed it. You really made the thought of getting into deep reinforcement learning accessible. Thanks for doing that and sharing with us... I appreciate the time.

**Adam Stooke:** Good, yeah. I invite anyone who wants to to come in and jump on the field. It's exciting times.

**Chris Benson:** Will do. Thank you very much!

**Adam Stooke:** Thank you!
