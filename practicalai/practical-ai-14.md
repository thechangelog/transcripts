**Daniel Whitenack:** Wojciech, thanks for joining us on Practical AI. I know you've got a busy schedule today at O'Reilly AI, so thanks for taking time.

**Wojciech Zaremba:** Thank you for the invite.

**Daniel Whitenack:** You probably don't need much introduction, but for those that don't know, Wojciech is one of the co-founders of OpenAI, and he's gonna be talking today at O'Reilly AI about robotics and deep learning, is that right?

**Wojciech Zaremba:** That's correct.

**Daniel Whitenack:** Yeah, awesome. It'd be great if you could give the audience just a little bit of an idea of your background and what you're working on now.

**Wojciech Zaremba:** Cool. I spent some time at Google Brain, I spent some time at Facebook AI Research, I have finished a Ph.D. on the topic of deep learning... I even spent many years ago some time at NVIDIA before actually deep learning was a thing, so it's kind of somewhat coincidental that all this mix turned out to be extremely relevant.

As you have said, Daniel, I'm one of the co-founders of OpenAI. The goal of OpenAI is quite ambitious - it's to figure out a way to build general artificial intelligence, or to be more exact, how to build it in a way that it's safe, we can control it, or let's say figure out from a political perspective how to deploy it in a way that is beneficial to humanity as a whole.

Our approach is more or less as follows - we see various limitations of current systems, and we think "What's the best way to -- what are the goals that we should attempt, such that if we solve them it becomes clear that we lifted these limitations?"

There are several internal approaches how we go about the problems, but in the case of what I'm doing, the motivation is as follows - we know as of today that you can take extremely complicated computer games and machines can become superhuman, but the main criticism is "Yeah, but it's just a game. It's unrelated to reality, confined into the realm of the computer", and it kind of sounds straightforward that we should be able to pull it off and apply it into the real world... But it turns out that many people tried and haven't succeeded for a while when it comes to more complicated robots, and so on.

I will let you ask me more questions and then I can tell you more.

**Daniel Whitenack:** It sounds great, I appreciate that. I was wondering, before going forward, if you could just maybe -- I know you mentioned OpenAI kind of going after general AI or general intelligence... I was wondering if you could break that down for the listeners in terms of how that might be different from the research or the methods that other people are going after?

**Wojciech Zaremba:** It's clear to me that AI consists of more or less three components. You have to be able to inject a gigantic amount of compute, most likely, you need to invent some new algorithms, and AI needs some kind of a data or environment in which it lives. These are three main components that you have to attack if you want just the capabilities of HAI.

\[00:04:19.12\] I think that OpenAI is extremely well-suited to pursue these goals because of a few reasons. One, we are not bounded by a product, and often when we are building a product, a quite huge fraction of the work has to do with figuring out the niche or target marketing, packaging, and so on... And it's clear that there are various problems that you can attempt that have very small economical value, but it's actually very clear that they are making actual progress.

If you would, for instance, be able to train a system that can solve Riemann hypotheses...

**Daniel Whitenack:** Could you just give a quick explanation of that is?

**Wojciech Zaremba:** Okay. Riemann hypothesis is like an unresolved mathematical problem. If the system would be able to have such an incredible reasoning, that would indicate that you lifted one more restriction. Maybe, you know, the restriction \[unintelligible 00:05:30.20\] reason much. It has not that much of an economical value; maybe people doing math would get upset, you would unemploy another group of people... But in a sense, that's not the product out of which you are making tons of money.

So I just compared our approach to building a conventional product, and I can also compare it to, let's say, academic labs. In a sense, most of the academic labs - it's like an endeavor of a small number of individuals, and I would say among these three components that I mentioned (a computer, algorithms and environment data), the focus is mostly on the algorithm... Which is completely fine; that's one of the components. That's the one that they are well suited to actually pursue... But it seems to me that you have to be able to pursue actually all three components to make a progress. You need to be able to focus the entire data center, ten miles by ten miles, that consumes millions of watts, with some number of algorithms and environments to actually achieve it... So, in a sense, any resources beyond actually researchers, you need to also all sorts of talented engineers, infrastructure engineers and so on and so forth. So I guess that's the main difference.

**Daniel Whitenack:** Yeah, that helps a lot... And you kind of alluded to the fact that in your background you had experience with these different technologies, that kind of coincidentally converged in this new hype around AI, and you co-founded OpenAI... I wanna get into the content of your talk a little bit later, but I'm wondering if you could just comment on what you see as some of the advantages and disadvantages of founding a company that is really at the center of this hype around AI, and what your thoughts on that are, and how you see the field moving forward in the midst of all this hype.

I think the NIPS conference sold out in like 15 minutes... It's faster than a Taylor Swift conference, or something.

**Wojciech Zaremba:** People are comparing sales of tickets for NIPS to sales of tickets to Burning Man.

**Daniel Whitenack:** Exactly, yeah. And OpenAI is really at the center of that hype... Have you seen advantages and disadvantages to that? In terms of the progress that you're going after.

**Wojciech Zaremba:** \[00:08:07.17\] It's extremely important to not over-promise, deliver and so on... Otherwise, over some period of time it's gonna bite you in the ass, simple as that. The fact of being a well-recognized organization definitely helps to hire incredibly brilliant people. I'm feeling extremely honored that people around, pretty much everybody on some axis is better than me. I'm feeling honored that these folks want to work with me.

**Daniel Whitenack:** Awesome. Thank you for that. I definitely respect a lot of the things you're doing, so I'm looking forward to seeing what happens from here... But now I wanna talk a little bit -- you're gonna be talking about deep reinforcement learning for robotics at OpenAI... Give us just a brief sketch of what you'll be talking about.

**Wojciech Zaremba:** Cool. As I mentioned at first, it's actually the case that reinforcement learning is quite an incredible paradigm. It's effectively saying that you can take any quantity that you can measure, and if you can even remotely influence this quantity, you can learn how to maximize it and that quantity can measure success on the task. This paradigm was used in various computer games, it was used to beat humans in Go, it was used in the game of DOTA to get to the professional level... The paradigm has several shortcomings, so in a sense, as of today, it requires an insane amount of data. The rates are of tens of thousands of years of experience... Virtual experience, in the case of Go or in the case of DOTA, the agent is playing for so long - for millennias. That's the requirement if you really want to get top superhuman performance.

In the case of robotics, it seems to be very hard to apply the same paradigm to the physical robots. I mean, it is possible, you can try also to go through the path of decreasing the number of interactions - I would say that's one of the meaningful directions, to try to improve algorithms to minimize the number of interactions... And one of the approaches was done at Google - to build a form of arms to pick an object... But still there are a few fundamental issues.

Once we are moving to the real world, it's actually not that easy to even get diversity of data. You cannot take your arm and go to that waterfall.

Another part of the assumption is that you have to be able to reset the entire thing from scratch... So once you are moving some object, it's gonna fall over, and then you have to build some contraption mechanism to bring it back.

I started myself to think that maybe the paradigm of reinforcement learning, instead of being closed to actually what is happening when the human is learning, is actually closer to what is happening during evolution, like learning... You have a really gigantic population, it has a huge number of interactions, a human kind of thinking through what truly happens and what should be the outcomes.

\[00:11:53.06\] It is also kind of natural to me that in the case of evolution, like learning, or let's say in the case of human learning, there are essentially two stages. There's a stage that takes this gigantic amount of data which is evolution... Actually, evolution IS reinforcement learning, it's like like "Do you wanna survive or die?" and this stage is powerful enough to create our brains, that can then rapidly learn.

So I was thinking, it's actually not such a bad thing if we can learn in simulation, to slice out, to do the almost... magicry of the task, and then in reality there is quite a rapid adaptation... So that's what we did.

The task is we took a robotics hand and we are reorienting object - and let's speak in a second about the difficulty of this task... But solving the task itself takes something like three years of virtual experience. Then to get the capabilities that allow you for the transfer - that takes another 97 years.

**Daniel Whitenack:** Oh, wow. So the generalization to create a model that responds to adaptations takes the longest amount of time.

**Wojciech Zaremba:** Correct.

**Daniel Whitenack:** Awesome. And just to clarify a few things - when you were doing this virtual simulation... We talked already on the podcast about where deep learning fits into the spectrum of AI techniques, and we've talked about even Mask's R-CNN in a robotics context, but we haven't really dove into reinforcement learning yet... So I was wondering if you could just give us a brief introduction to -- when you're doing the virtual learning, these two stages... You mentioned the first stage, where it's kind of learning a task, and then the second stage where you're attempting to make it more adaptive... What is the process that you're actually doing there?

**Wojciech Zaremba:** Let me first describe what reinforcement learning is...

**Daniel Whitenack:** That'd be great.

**Wojciech Zaremba:** Reinforcement learning is a framework of teaching an agent to maximize the amount of reward. You can think about it a little bit like training a dog with a treat. When the dog is doing good stuff, you are giving the dog treats, and then he does more of the stuff that you want, and that's the way more or less how you train the computer to become best in all these games. It's completely up to you when you define that you're gonna give a treat...

**Daniel Whitenack:** Yeah, so there's a feedback that happens.

**Wojciech Zaremba:** Correct. So the agent itself is effectively some network that consumes observations. As analogy to humans, it's like an input to eyes, ears, nose, touch and so on... And the network is supposed to produce actions. In our case, it would be an electrical signal to the nerves, to decide how to move limbs, or so... And the network itself attempts to maximize reward.

The system has a chance only to be successful if from time to time it gets a reward. So, also, that's the kind of thing that, let's say... let me downplay reinforcement learning: The situations that wouldn't work is if you give a treat to a dog after it lands on Mars. It will just never happen. From time to time -- you know, it starts at first with a very random strategy, and then it gradually attempts to get more and more of the treats... That's pretty much the paradigm of reinforcement learning.

**Daniel Whitenack:** And that's what you would be doing in that first stage, where you're teaching a specific task... Is that right?

**Wojciech Zaremba:** \[00:15:53.11\] Correct. Let me briefly describe the task... We have a new match about the robotics over a year ago; we went to a robotics conference, we asked people what are the things that are impossible or very hard to do in the classical robotics, and people were saying anytime when you have a large number of degrees of freedom, it's very hard to control when there is a lot of interaction. When you touch in many places simultaneously, that's also very hard to model.

It is way easier when you are in the open space and you are not touching anything... Or if the problem somehow can be simplified to one or two-dimensional problems, and there are some closed-form solutions.

In the case of robotics, let's say the one that we bought has 24 degrees of freedom; we also kind of new that the task is solvable because a human can solve it... So we wanted to have a hope for the success. The task is you take an object - in our case, we demonstrated with two different objects; one is a block, one is some octagonal prism, and the task is "Move it around to the new desired position."

**Daniel Whitenack:** Like in a robotic hand.

**Wojciech Zaremba:** In a robotic hand.

**Daniel Whitenack:** Yeah.

**Wojciech Zaremba:** So as I said, we were able to train it actually a while ago in the simulation to achieve it, but during deployment it didn't work at all... Like, literally, not at all, despite easily being able to solve it in the simulation. The typical approach is just get the simulation closer and closer and closer to reality, and I would say that helps, but the problem is that we've sufficiently complicated systems like the hand, and it's actually impossible to model everything. A hand has tendons, tendons stretch, it has a rubber, rubber deforms... Also, the shape that you have in the simulation actually doesn't even correspond exactly to the real shape... And when there is a lot of interactions, the difference in the given place you are touching versus not touching might cause the object to pivot, slip over, and so on... So that's why things do not want to transfer.

**Daniel Whitenack:** So it's like a lot of very small differences in how things are touched or moved can create a whole different outcome.

**Wojciech Zaremba:** Correct. The fundamental idea that allows us for adaption to reality is actually extremely simple what we did... In a sense, the initial approach is you have this thing called simulation; you can think about it like a single universe in which you are training, and then you are asking "Here is an alternative universe" in which you want to actually verify the performance... And we are just instead saying if you will have an entire distribution, many universes, and network as a capability to try to distinguish them, then it essentially might force the network to try to discover what are the underlying properties.

So if we don't know exactly what's the weight of the cube - more or less maybe we know, but it might be off - if we have a network that just has a capability to, through interaction, pass the information - and this is a common network, \[unintelligible 00:19:34.16\] networks - then as we vary these parameters and we try it in the simulation, of all of these instances maximize the score, it implicity, actually it has to try, based on the initial few seconds, try to find out what are these values. It's a combination of two things - on one side, it tries to be robust with some components, and on the other side it tries to adapt to various things. In a sense, this is the core of the idea to actually achieve the transfer to reality.

**Daniel Whitenack:** \[00:20:07.27\] Yeah, that's really interesting. How long have you been working towards this type of adaptation and how has the process gone? Have you made other attempts to make this transfer to reality that haven't worked as well?

**Wojciech Zaremba:** The entire project more or less took us one year. Already on there were maybe five people, and later in the project there is maybe closer to 15 or so... So I would say an average ten human years. There were many attempts internally, and many of the things that we tried partially worked, and so on.

The way the team is organized is once we agree on the goal, I try to gauge people and ask "What do you think is the best way to solve the problem?" In that sense, as I said, people to some extent, on many axes, they are smarter than me, and they might sometimes better know than me what's the best approach.

When you're in a situation that there are multiple competitive approaches, you are also coming closer to the truth, what really works. It's often the case that ideas, as long as it is, let's say... sound, it will show signs of life but it doesn't mean that it is really the ultimate solution. It might be sufficient to present at the conference or so, but our goal is truly to solve a problem and actually get the solutions that we think we can push forward.

**Daniel Whitenack:** When I was looking through the OpenAI website and kind of looking into some of what you're trying to achieve, I kept coming across this statement about safe applications of AI. I know we've talked in the past about AI ethics, and other things... I was wondering if you could briefly talk about safe AI, how you see that, and maybe what counter-examples to safe AI would be?

**Wojciech Zaremba:** There are several problems into it. One problem is the question "How to ensure that the system will be achieving the goal in the way that we intended it to achieve?" There are many kind of philosophical examples and so on, and I want to go through some of them... It sounds somewhat foreign, but simultaneously we are starting to see that actually it is not as trivial to tell the system what to do, because it is completely abstracted from our values, and things, and so on.

So in a sense, you tell someone "Make money" - it's like, the best way to make money is steal a car, sell drugs... All this stuff that is really what you wouldn't intend the system to do...

**Daniel Whitenack:** Things we probably don't want robots doing...

**Wojciech Zaremba:** Yeah, I mean... You don't even need robots to give you some example; I'd say if you are really insanely clever about the stock market, and you have superhuman capabilities, and what you truly care about is to maximize profit, you can cause a war in the country and short the stocks. It is a completely valid strategy if that's the quantity--

**Daniel Whitenack:** To reach an objective, yeah.

**Wojciech Zaremba:** To reach the objective. And in some sense, you can say that the systems that we are training - it has a little bit like a profile of a psychopath; it only cares about one thing, and one thing only... That's literally how we optimize them; they are completely abstracted away from everything else, and they just want these treats, "Treats, treats...!" They actually don't even know about the things that are really important to us.

\[00:23:57.12\] So the question is "What's the way to inject what we want, what is our ethics?" I would say there are multiple axes into safety, so I just told you about one, which is more or less called mis-specification. You specify something, but it's actually something slightly different than what you really wanted... And you can see it even in some computer games - you have a system to maximize the score in the game, but truly you ask the system to finish the game, and then it finds some bug on some level of the game and it keeps on staying there, where it's generating a lot of points, but actually it doesn't progress anymore in the game.

There are other axes, which is how to make the systems robust to adversaries... And to give some concrete examples - there was a Twitter bot released by Microsoft, Tanya, and... The folks from Microsoft - there is no doubt there's a lot of very clever researchers and so on, so they taught true various scenarios... But despite thinking it through, it turns out that the both within several hours was hijacked and repurposed, as it started saying very offensive things on Twitter... So in a sense, you might ask "Is it the case that as the systems will become smarter, will they be less prone to it?" I actually think that it might be due to the overall increased complexity, the surface area will just increase.

**Daniel Whitenack:** Yeah. It's almost -- even if you're trying to mis-specify an objective, the space of objectives is larger, it's more complex.

**Wojciech Zaremba:** So I would say from the perspective of pursuing safe HAI, there are also three main things. One, in order to achieve it, you have to work toward capabilities. Second one is you have towards safety, so what we've just discussed, and the third one is a question - let's say even if we would have it today, what's the step in terms of a policy, what should we do with it?

I would say also all these three components actually feed into each other. Capabilities indicate maybe what the shape of HAI will be, and therefore what are the ways to actually inject our ethics, and so on, the safety work... And also, it helps the policy people. So all these topics feed into each other.

**Daniel Whitenack:** Yeah, that makes sense. I'd love to switch directions here for the last bit of this show, and get your perspective on -- so you've mentioned a lot of really exciting things around robotics, and a lot of that involved large-scale computing and lots of large simulations... I was wondering, for people that are out there trying to get their hands dirty with some of these techniques - maybe it's reinforcement learning, or other things... What are some good ways for people to kind of get their hands dirty and start working on problems that are interesting, but maybe they aren't able to run these large-scale simulations, and that sort of thing?

**Wojciech Zaremba:** There are incredible materials online. I would just go first through all Coursera, Udacity lectures from Berkeley, Stanford, follow all their homeworks... I would say that's step one.

There are also great books. There is a book by Ian, a deep learning book, there is a reinforcement learning book by Richard Sutton... That would be my starting point. And I think it's actually quite important to get very strong fundaments, because in a sense, by default when you run your models, first they do not work at all. Then the question is "So what do you do?"

\[00:28:09.10\] The simpler models, the fewer tricks/steps you have to do, and you have to familiarize yourself with them. The harder the models, the larger number of these steps... So it's very likely that at first you don't know any of them. If you need to do ten things, you are less likely to succeed versus if you need to do two things.

I would really recommend to go through fundamentals instead of jumping right away to the most difficult architectures, and I would really recommend as much as you can to implement things from scratch.

**Daniel Whitenack:** Yeah, that's a great point. I know I've had some experience in the past where some research comes out, it's really interesting, and you can go to a GitHub repo within a number of days and there's an open-sourced architecture there, but you try to run it and you see all this weird behavior, and maybe it behaves differently than you'd expect, but it's really hard if you don't know the fundamentals to dive into the debug and advance... So yeah, that's great.

I appreciated what you've said about any one person, even yourself, who has advanced a lot in this field, doesn't have all of the pieces of knowledge to perform a successful research or to advance a project... I was wondering, at OpenAI, how do you structure your teams and what do you look for when you're putting together a team, so that you have a variety of experience and perspectives to actually give a good result?

**Wojciech Zaremba:** Different things have a little bit different values, and they are differently organized. I can speak about robotics. It's extremely important to have people who are good team players. Also, when we hire people, we hired based on being incredible in something. It doesn't need to be exactly what they will be working on; more or less, you want to verify brilliance, and that's a sign that a person can adapt to whatever is needed.

I also, in a sense, want people to be able from day zero to contribute. Still, I encourage to spend one day per week to arbitrary learning. We have an internal curriculum with simple stuff. I like people who are excited about resolving problems... So in a sense, when it comes to difficult problems, for instance as the last project, it is very common that the time in the middle is when everything is extremely difficult, and you need the people who have this internal energy that they can still push it through and get it through.

**Daniel Whitenack:** Yeah, so persistence and motivation, and passion for the problem.

**Wojciech Zaremba:** Correct, yeah.

**Daniel Whitenack:** \[00:30:58.27\] Awesome. Well, I'd love to take time -- if there's anything, where can people find out more about OpenAI, and are there any open source projects or papers or efforts that you'd like to share? We'll for sure post those in the show links, and everything.

**Wojciech Zaremba:** We are quite frequently releasing what we are able to build on our blog. That's at the openAI.com website. We're also quite active on Twitter - twitter.com/openai.

You asked about the research proposals, or so... We posted, I think even twice, a bunch of ideas for projects for people if they want to pursue it. There is even indication of the level of difficulty; that might be a place to start.

**Daniel Whitenack:** Awesome, man. Where can we find that?

**Wojciech Zaremba:** That's also on our website.

**Daniel Whitenack:** Awesome. Well, I really appreciate you taking time; I know that you must be busy and you're getting ready for your talk, so I'll let you get back to that... But thank you so much for joining us. It was a really great conversation.

**Wojciech Zaremba:** Thank you, Daniel.
