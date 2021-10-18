**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI. In these Fully Connected episodes my co-host Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss some of the latest AI news and we'll dig into some learning resources to help you level up your machine learning and AI game. I'm joined today, as always, by my co-host Chris Benson, who is a principal AI strategist at Lockheed Martin, and I'm Daniel Whitenack a data scientist at SIL International. How are you doing, Chris?

**Chris Benson:** I'm doing great. How's it going today, Daniel?

**Daniel Whitenack:** It is going great, it is a nice fall day here... I'm enjoying the two weeks of perfect weather before it's bitterly cold in the Midwest. Trying to enjoy that while I can.

**Chris Benson:** See, when it gets bitterly cold, you can come down here. I think we're actually gonna see each other in Chattanooga in January.

**Daniel Whitenack:** Yeah, I'm excited about that. We'll both be at the Project Voice Conference, which is happening in Chattanooga in January... So come by and say hi to us if you're around.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** We'd love to talk to you about AI and voice, and all of those things.

**Chris Benson:** And we can talk about our nice, mild, Southern winters here.

**Daniel Whitenack:** \[laughs\] Sounds good. Now onto some AI news, as this is a Fully Connected episode... I don't know about you, Chris, but for the past week or however long it's been, about half of my Twitter feed has been giffies and videos of robot hands manipulating Rubik's cubes. Has it been the same for you?

**Chris Benson:** It has. It's been the big topic as we're recording this over the last couple of weeks. It's been a really interesting thing diving into it, as we have both done in anticipation of this talk; it has been a lot of fun... So I'm looking forward to today.

**Daniel Whitenack:** Yeah. Well, maybe to start out with, we should probably get a baseline. How good are you at solving Rubik's cubes, Chris?

**Chris Benson:** Not so good by myself... So if I was going to do it for my daughter, I would cheat and look at one of those algorithms... You can see these manual algorithms...

**Daniel Whitenack:** Your daughter might beat you.

**Chris Benson:** Yeah, she probably would, actually. Daddy would have to go and cheat and look at -- because there are solutions out there.

**Daniel Whitenack:** Right. Methods, and such...

**Chris Benson:** \[04:11\] Yes. But no, for real, I tried it when I was younger; I haven't tried it recently... And I utterly failed, so... Pathetic.

**Daniel Whitenack:** I'm not good at solving Rubik's cubes, I will admit that. I've had some friends try to teach me various things... I remember one in particular in college - he was one of those just naturally brilliant guys; one of my friends in the physics program. And when I would ride with him from his house to school, he would always try to solve -- so he would drive with one hand and solve a Rubik's cube with the other hand, one-handed, while he drove, which I'm not recommending at all...

**Chris Benson:** Oh, it doesn't sound like a good idea.

**Daniel Whitenack:** Yeah. It was about like a five-minute drive, and he could solve the Rubik's cube with his one hand, which kind of disgusted me a little bit, and it was probably not safe in any way, but...

**Chris Benson:** So my question to you is had he looked at one of those algorithms that you can manually do it? Because I know there's one that I have seen before. I have not memorized it, or anything... But you can solve any Rubik's cube in a certain number of very small steps. It's less than 20, that you would do.

**Daniel Whitenack:** Yeah, it must have been something like that. Eventually he went on to the 5x5. So there's 3x3's, and then he went on to the 5x5's, which I can't even comprehend working on... But yeah, that's a little bit too much for me. But maybe not so for OpenAI's Rubik's cube-solving robot hand, which is gonna be what we're gonna talk about today... They solved the 3x3, maybe they'll go on to the 5x5, but... Yeah, just to clarify - you know what we were talking about in terms of the robot hand solving the Rubik's cube? If you weren't aware, OpenAI (a research team there) just published a blog post in a paper - at least a pre-print of a paper - about using a robotic hand to solve a Rubik's cube... And it's pretty impressive. What were your initial reactions, Chris?

**Chris Benson:** Correct me if I'm wrong; if I recall, they did use one of the standard algorithms or the Rubik's cube itself, I think... But I believe that most of the training was focused on the articulation of the hand itself. Am I right or am I wrong?

**Daniel Whitenack:** Yeah, so there was definitely some pushback against the results... In particular maybe as related to that, and we can get into that in a bit. But yeah, I think the main point was -- like, if you just imagine manipulating a Rubik's cube with one of your hands and solving it, even for a human, that manipulation is not trivial. So the idea that they could get a robotic hand to manipulate this Rubik's cube towards the solution, even if they are using this other algorithm for the solution, is pretty astounding, because it's a really hard manipulation problem I guess is the idea.

**Chris Benson:** I agree. Whether or not you're solving the Rubik's cube is almost an aside in this. The fascinating thing, for me at least, was seeing this robotic hand - and there's just one, so you don't have both hands to put it in - but the robot is both manipulating the cube in the appropriate directions, and using the robotic fingers to pivot the cube. The dexterity required to do that is something that I certainly would be challenged myself to try to recreate with my human hand at all. So just the ability for the robot to be able to act with that kind of dexterity - it was just impressive to watch the video that they had on the site.

**Daniel Whitenack:** Not only that they kind of solved it once, but they did a whole bunch of interesting things with perturbations, too... So this is kind of similar maybe to those Boston Dynamics videos, and the memes that are also associated with these Boston Dynamics videos, where they hit robots with hockey sticks, and things...

**Chris Benson:** Yeah, yeah.

**Daniel Whitenack:** \[08:06\] But they hit the robotic hand with a stuffed giraffe, and push it with a pen, and threw a blanket over the hand, and other things... And we're testing the adaptation of the hand to be able to continue towards the solution, and continue manipulating the Rubik's cube in light of these things that weren't part of the training data, but were perturbations that it had not been exposed to before. I think that also is part of the big story here - the adaptability of the solution.

**Chris Benson:** I agree. They added a lot of variability, which I know we're about to talk toward in this conversation... And there's an entire algorithm that's just designed around that, which we'll discuss in a moment... But it was an impressive bit of engineering, both from a data science standpoint, but also -- as I watched that video, I just kept thinking of all the applications, and not even necessarily robotic hands, but if you start thinking of other manipulation tools that you might have on a robot, and applying the same principles... I'm pretty excited about it.

**Daniel Whitenack:** Congrats to the OpenAI team. If any of you are listening, I hope maybe one or two of you will come across this podcast; congrats, and great work. Maybe what we could do now, Chris - I think it'd be good for me, and probably the listeners too, is to just kind of break down how OpenAI went about this solution, what they used in terms of neural networks and setting up the solution, and training, and simulation, and all of those things... So just kind of break down the main parts of this study. Does that sound okay?

**Chris Benson:** That sounds like a good idea.

**Daniel Whitenack:** So I went to the OpenAI blog post about this research, which we'll of course link in our show notes, and the first sentence that they have there is "We've trained a pair of neural networks to solve the Rubik's cube with a human-like robot hand. The neural networks are trained entirely in simulation, using the same reinforcement learning code as OpenAI 5, paired with a new technique called Automatic Domain Randomization. The system can handle situations it never saw during training, such as being prodded by a stuffed giraffe."

That summarization there is just packed full of all sorts of things that I would love to break down... Maybe not so much the stuffed giraffe, although I was intrigued by that as well. And later on down they also have another good summarization. They say "We train neural networks to solve the Rubik's cube in simulation using reinforcement learning and Kociemba's algorithm." I'm probably butchering that name, I'm sorry.

**Chris Benson:** That's how I would have said it.

**Daniel Whitenack:** And then they also talk about domain randomization. Some of these things I'm more familiar with than others, and there's some new things here as well. Maybe we can start by just digging into these pair of neural networks that they're talking about. Were you able to deduce from their blog post or their paper anything about this pair of neural networks? What pair of neural networks are these?

**Chris Benson:** Yeah, for the computer vision side they used three cameras to address the aspects of the Rubik's cube, and then for the manipulation they had a reinforcement learning policy. So they had a control policy network that was addressing that. So both of those networks had to be trained to be able to work together, to be able to manipulate the Rubik's cube and understand where they were state-wise at any given moment.

**Daniel Whitenack:** So the two networks I guess then would be this control policy network, and then the convolutional neural network, which has to do with estimating the position of the cube in the hand. So the control policy network, in terms of input and output - what I was getting from the paper is basically the input of this control policy network would be the noisy positionings of the Rubik's cube in the robot hand.

\[12:09\] So they were actually either from the convolutional neural network or from sensors in the cube and the hand; they had these positionings of the cube and the robot hand. So you have these positionings - basically, the state of how the cube is in the hand as input, and then the output would be what action does the robot hand need to take, in particular that brings the state of those things closer to solving the cube. So in come these (what they're calling) observations, out come actions.

Now, I guess for those observations they need some way to estimate the positioning of the cube. Is that where the convolutional neural network comes in?

**Chris Benson:** Yeah, I think they were using the convolutional neural network for the three cameras that were observing from different positions the various aspects of the Rubik's cube. And then I do recall also they mentioned that the robot's hand was also tied to a 3D positioning capability that they had. So they'd understand where the robot was at any given moment, in relation to how the cube was, to combine those two so that it could do the policy-based manipulation.

**Daniel Whitenack:** Yeah, it was a combination of the detected position of the cube, the tracked position of the robot hand fingers - or hand in general - and then they also were able to track the faces of the cube by instrumenting the cube as well. So there was definitely a lot of instrumentation going on here... But essentially, all of that is considered observations, which is passed into this control policy network to produce what action should the hand do.

My understanding is that these actions are essentially the desired angles that they want to manipulate the cube into, or the faces into. I'm not sure what the dimensionality of that is, because there's a lot of these faces of the Rubik's cube. So all of the observations come in, and the outcome's the actions.

You mentioned that the control policy had to do with reinforcement learning... The convolutional neural network for the position detection was separate. As a reminder, what's the difference in training the control policy via reinforcement learning, versus the convolutional neural network in another way?

**Chris Benson:** So the convolutional neural network - when you're training it, you're trying to recognize certain patterns. Obviously, the patterns here are the various faces of the Rubik's cube, and the different-colored faces on each of those cubes, and how they're working together. So recognizing what that is at any given moment - for cube state is what the convolutional neural network would have been doing.

Reinforcement learning though is the other side, the control policy side, where the network has to figure out with this articulated hand - it has many different joints and motors that are driving it at different angles, and they have to work in unison to be able to work with what is determined to be the state of the Rubik's cube at any moment in time... So it's not just one motion, it's a whole collection of motions, and it does that through essentially trial and error that the algorithm puts it through to learn the process. So you could think of the CNN as perception-oriented, and you could think of the reinforcement learning as "What do I do next with my articulated hand to achieve the next state that I'm trying to get to?" So it takes them both.

\[15:53\] If I also recall, just to throw out one extra thing - they had a type of recurrent neural network called LSTM (Long Short Term Memory) which takes into account time, the time sequence between different observations and the policy-based movements it's doing. You have to have a sequence for that to make any sense, because obviously a robotic hand that's trying to do a task has a series of moves it has to do. So it actually takes all three of those to work together to be able to apply itself to this problem.

**Daniel Whitenack:** The reinforcement learning - we won't' do a huge deep dive into that, because we actually have a couple of other episodes on that already... I would recommend first off taking a look at episode 14 from Wojciech Zaremba actually at OpenAI... He was on the team that helped do this research, or did this research, and he goes a little bit more into reinforcement learning in that episode, and kind of compares reinforcement learning to semi-supervision. So giving the network a sort of treat, like giving a dog a treat, or a reward, as it performs actions that get closer to a solution, versus the convolutional neural network, which is just supervised - so you have input images that have a labeled position, and you're trying to predict that position in a sort of supervised manner. We'll link our other episodes about reinforcement learning in the show notes.

**Chris Benson:** Correct. I guess to summarize that up, the algorithm has what's called an agent, which takes actions to act upon the environment it's in, and is rewarded or not, depending on the outcome of that, and then adjustments are made based on what happened, and it goes around and around in that process.

**Break:** \[17:41\]

**Daniel Whitenack:** Alright, so they show some great pictures of their experimental setup, in the physical world and also in simulation... And particularly in that summarization that we talked about initially when we got into this, they talk about training in simulation. I know that you've had some experience in the robotics world before, and have run across different scenarios... Why is simulation important, particularly in robotics?

**Chris Benson:** Probably the biggest reason -- and it's really, really common in robotics to start in simulation, to the point where probably that's the case in almost all cases. So in simulation you can essentially create the circumstances that you're operating in; you're essentially able to simulate the data that applies to the situation, and you can have the environment created... So if you don't have the ability to apply real-world data upfront, that may not have been created yet, and you don't have an environment that lends itself to testing - just as an obvious example, in my own job at Lockheed Martin one of the things we build are airplanes... So if you're trying to figure out how an airplane will fly around, and you haven't yet built the airplane, it's a real problem, because you have to do it in a simulated world, where you can try different things out, and that lends itself to the engineering.

\[20:17\] So if you take that example and you push it out in the world, you can apply that in a lot of different ways. So it's a much more inexpensive way to start your training out, and depending on your situation, you may be able to do almost all of your training in simulation, which it sounds like they did in this case.

**Daniel Whitenack:** Yeah. In your example - the airplane example - it's inexpensive, I guess, because you don't have to manufacture 2,000 aircraft with different variations and then see which 10 of them don't crash, and then you utilize those as what you design off of. You're able to go through a lot of different scenarios, a lot of different configurations, in a simulated sense.

In the same way, I think OpenAI -- they don't need 1,000 robot hands to be manipulating cubes, and getting the data off of those to create a vast training dataset. What they do is they create the simulated world, using (I think) a lot of technology from gaming and image rendering, and all that. Like Unity 3D... So they create this virtual hand, virtual cube, and position it in various ways to recreate as real of imagery and as real of position data as they can, without actually having to position a real robot hand into those positions and gather the data off of the hand, which I imagine would take an enormous amount of time and effort.

So yeah, but you were getting at the engineering side of things... And even though they aren't engineering a bunch of different hands to collect this data, it seems like the simulation task in itself is actually a pretty big engineering burden.

**Chris Benson:** It is, but simulation has been around for a long time, and I know we talked about it; we had our episode where we discussed high-performance computing (HPC), and we talked a bit in that conversation about the simulation world and the requirements... It's been around for decades. Gaming, as you pointed out, also does that. There's a lot of industries that utilize it - automotive... So trying to get the physics of what you're working on, and all the environmental considerations is at least something -- it is complex, but it's something that is somewhat known, and it's much less expensive to do it in that simulated world than to do what you've just described, the ludicrous "create a whole bunch of versions of the same thing and figure out which one works and which one doesn't", which would be prohibitively expensive.

**Daniel Whitenack:** Right. And could be dangerous, depending on what you're trying to simulate, I guess, in the airplane case.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** But going back to the Rubik's cube, I'm thinking back to my friend in my physics class, who was brilliant - and I was in a mechanics class with him, where we had to do these simulations of real-life mechanics, so classical mechanics like pendulums, and all this stuff, and more complicated things that are fairly chaotic, like multi-weight pendulums, with \[unintelligible 00:23:27.16\] and all of these things... And I remember that that was extremely challenging. And one of the things that they note in the paper is that it is challenging -- so you have to, in some sense, use simulated data for these types of problems in robotics, but it is challenging to create simulated environments that capture all of the physics of the real world... And this is where this domain randomization stuff comes in.

\[24:01\] They brign up this idea of domain randomization, which is actually a previously introduced idea, where in a created environment for a simulation, you introduce some amount of randomness in the renderings of that simulator, or some variability in the simulator based on randomness. You're basically trying to simulate that there's going to be variations in the environment that it sees when you transfer the model that you're training from the simulated world into the real world... Because that transfer can be rather difficult. But OpenAI took this a step further, that's my understanding.

**Chris Benson:** Yeah, they created this approach which they called automatic domain randomization, where they systematically created that randomization as part of their training process... And it was done in simulation, as we've been discussing. And it was interesting in that it was a technique that could increase the ability for the control policy to be able to generalize to the environment that it's in. If they had not done that, for instance, and the articulated robotic hand had been maneuvering the Rubik's cube around and any kind of interference was introduced - going back to your stuffed giraffe comment a little while ago, that could completely throw it off.

But if as part of the training process you are constantly introducing different types of interference in all sorts of different ways, and as part of its reinforcement learning process for its control policy it has to learn to cope with each of those forms of interference, then it is better able to generalize once you've completed learning down the road. I was fascinated reading through their white paper on how they approach that. I think it's a great next step.

**Daniel Whitenack:** Yeah, and one of the things I think they were interested in is this idea of handling situations that weren't seen during training. The idea is "Okay, how do we extend domain randomization in a way that creates an even more robust model, that will be able to adapt quickly and return to a sort of baseline performance even when things happen that we don't anticipate?"

One of the key pieces of how they extended the domain randomization was that they didn't just randomize the simulation, they randomized it in increasingly difficult ways... One of the things that they mentioned in their blog post is they would increase the size or decrease the size of their simulated Rubik's cube more or more, or less and less, as the training went on. So whenever the neural network achieved a certain level of performance, then they would throw something at it even harder; they would change the size of the Rubik's cube even more, and kind of continually push it to have to adapt more and more to harder and harder things. In this way, they created what they're theorizing is something that leads to what they're calling emergent meta-learning.

If you remember, we had this episode with Sherol Chen from Google, where we talked about AutoML and meta-learning, which are kind of related... Maybe those were in -- we talked about them in a slightly different context with Sherol, but here they're talking about emergent meta-learning, which sounds like this really weird term to me.

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** And it's almost like a term that doesn't mean anything; it's like emergent, and it's meta...

**Chris Benson:** Very new age-sounding there.

**Daniel Whitenack:** Yeah, what does that even mean? I'm not sure... So what did you get, if anything, from that?

**Chris Benson:** \[27:57\] Well, I actually drew an analogy between what they were doing with that and kind of what we as humans do, in the sense of as they kept cranking up the difficulty by changing the parameters into something more difficult, it reminded me as I read that about, for instance, teaching my daughter to ride a bike. First, just learning how to just sit on it, and pedal with training wheels on, and start steering it... Then as she got comfortable with that, and going over curbs, and then taking the training wheels off, and having to learn how to do balance, and all that... Or even myself - I would like to learn how to juggle just for fun. Recently, I picked up some balls, and I started with just one; as I started mastering that, I ramped up the difficulty into two, and... I'm not to three yet.

I think their approach really reminded me of how humans learn along the way, and I thought that was striking, since that doesn't always -- as much as we like to draw analogy between different AI approaches in humans and brain and such, that doesn't always reflect the reality.

**Daniel Whitenack:** It's really interesting. First off, a little piece of trivia... I was the unpopular kid in high school who was kind of a juggling troop...

**Chris Benson:** No...!

**Daniel Whitenack:** Next time we're together we'll have to experiment with that. But I do like the analogy that that gives, because in juggling or some activity like that that a human learns, each time you add -- let's say you add an element that you're juggling, like a new ring, or ball, or club, or whatever it is, it doesn't necessarily take you an exponentially longer time to adapt to that new situation, but you've kind of learned how to learn a new juggling trick, so you just kind of bolt it onto your juggling toolkit. It doesn't always carry through like that, but...

Here, with meta-learning - meta-learning itself just means kind of learning to learn. So what they're saying is that by introducing this element of increasingly difficult domain randomization into the training, then what's emerging from that process is a network that is able to learn as new perturbations come in, like the stuffed giraffe, or whatever it is. I like your illustration very much.

The last thing that they mention - we can just mention really quickly - in their paper that maybe needs some definition is this Kociemba algorithm. As you mention, the solving of the Rubik's cube, in other words "How do I need to move the faces of the cube to move towards a solution of the cube?", that was actually not a neural network that was deciding those operations... So the raw operations, like "Move this block to this position. Move this face - rotate it one direction." That was not a neural net that was deciding that, right?

**Chris Benson:** Correct. That was their using an algorithm, and this is one of several that I believe exist, where you follow a known sequence of moves and rotations, and it will eventually get you where you're trying to get to.

Going back to what we said in the very beginning, they were really focused on understanding the state that they were in in articulating the robotic hand to achieve the next state, which was an already known thing, based on this algorithm.

**Daniel Whitenack:** Well, talking about the fact that they used the AI models to manipulate the robot hand, but not actually "solve" the Rubik's cube, that and a few other things created a bit of pushback in terms of the community's reception to that, and various people saying strong things... I saw a couple of tweets in this regard about how this algorithm that they're using to solve the Rubik's cube has been around for 17 years, and it's symbolic, it's not like a neural network, so...

**Chris Benson:** \[32:10\] They were missing the point, in my view.

**Daniel Whitenack:** Yeah, and they also talked about "Oh, well the Rubik's cube is all instrumented with LEDs, and sensors, and all of these things..." For example, I couldn't go to the store and buy a Rubik's cube and put it in the hand of this robot, and then have it do the manipulation, because their cube was a special cube, or these sorts of things.

So the pushback was that in their blog post - if I go back to the blog post here, their headline is "Solving Rubik's cube with a robotic hand", and they say "...trained a pair of neural networks to solve the Rubik's cube." So the pushback was like "Well, did they really do that?"

**Chris Benson:** In my view, OpenAI's mistake here was not in what they actually did, it was in the marketing of the blog post and how they titled it. I think what they did was awesome, and a lot more important. If you used a neural network to solve a Rubik's cube, that might be a cool little project to do, but it's very specific and it's not -- maybe I'm wrong, but I don't see the applicability off the top of my head to generalize on that. So what they were focusing on was how do you create the control policy for that articulated hand, and learning how to do that better... Because in my view, that is much, much more valuable, because you can use that in so many different use cases out there. And if OpenAI's purpose is to help the rest of us get to the next level, I think that they did exactly the right thing, I think they focused on the right thing. So they should have worded the blog post better, probably, but other than that, I personally am very happy to see them do this work.

**Daniel Whitenack:** And I think that even the strongest critics - at least in looking through the Twitterverse and interwebs on various things that I've found, even the strongest critics I don't think characterize what they did as not impressive, but maybe that it was mischaracterized, as you were saying.

**Chris Benson:** Yeah.

**Daniel Whitenack:** And that kind of got me going down a train of thought... Why did people react in this sort of way, to this article, with such vigor? I started thinking - back a few years ago, or whenever it would be, would people have reacted the same way? And why are people so sensitive to AI hype? Do you have any thoughts on that?

**Chris Benson:** Well, I think we're all subjected to quite a lot of AI hype, and I know we've discussed that on numerous episodes in the past, which is one of the reasons, as an aside, that you and I decided to make this Practical AI, practical, productive and accessible to everyone... Because we were, to some extent, even at the very start, recognizing the overwhelming amount of hype that was then, and continues to this day, and probably will for a long time to come.

So I get that the message needs to be more specific to the actual amazing work that was done... So they need to be careful how they're putting their work out there in terms of what the actual impressive thing is that we should focus on. But I get that people feel a little bit burned by the hype, but also sometimes recognize we're all human, we all make mistakes... Focus on where the good is on this. I would ask people to take a glass half full approach. Let's look at this and go "Wow! Now this is something that we can all use going forward", and not focus on whether somebody could have done a better job on the title.

**Daniel Whitenack:** \[36:00\] Yeah, it is kind of the situation we're in... This probably relates to some of the discussion around cancel culture, and all of that stuff, and I don't really wanna get into the politics and views on that in this episode... But I think we have been burned quite a bit by people just saying all this stuff about AI, or blockchain, or quantum this, or whatever, when it hasn't really proved true... And I think we do need to be careful about this, in particular as related to certain things.

There's a lot of talk about bias now in AI, and I think that's probably a point that is not being hyped enough, that we're not concerned about that enough; at least that's my personal opinion. I saw some tweets saying that Eric Schmidt of Google, the chairman, was saying some things about "Oh, we don't need to yell all that much about bias now in AI." I think we need to be practical in how we approach these things, but there's a lot to sift through out there when you start looking up terms like AI and quantum and other things. Even just this last week - I don't know if you were following - Google made the announcement about finally achieving quantum supremacy...

**Chris Benson:** Oh yeah, that made me cringe... Yeah.

**Daniel Whitenack:** They said this thing would have taken a classical computer 10,000 years to solve, and IBM kind of worked on it a bit and solved it in 2,5 days with a classical computer... So in some sense -- I don't know... This is part of the scientific process, in the sense that if you claim something, people should be able to test it and see if what you're claiming is true or false. Maybe the difference now is that that testing is so much more public now. It used to that would happen in private peer review, and all of that; now it's happening on Twitter, and all over the internet. I'm not sure, I'm still parsing through whether parts of that are all good, or bad...

**Chris Benson:** I think the fundamental issue there is, with the acceleration process that you've just described, and the fact that you don't produce a result that gets peer-reviewed over a period of weeks or months, and then eventually goes out to the larger world... At this point, AI and these other fields that we're talking about are happening so fast that you kind of have to get your stuff out there as an organization before somebody is likely to steal your thunder and maybe reveal their results, that were very similar to yours, before you get there.

Especially with so much of this work being done by industry - I think what I'm about to say holds true even for Academia - there's a marketing desire to say "Hey, look at this great work we did", because people are looking for customers, people are looking for funding... So there's definitely a marketing consideration in doing this advanced scientific work. But the marketing and the science - you need to find the best balance you can and not let your marketing overreach your science, or you're gonna get a lot of backlash on that.

\[39:07\] I think it's tough to be in an organization these days where you're trying to do amazing work and have it validated, but also get the benefit of that work in other domains, such as continued funding and continued customers.

**Daniel Whitenack:** Yeah. I guess one of the best responses to some of the criticism that I saw on the OpenAI stuff was like "Hey, look, we shouldn't be solving Rubik's cubes with neural networks, because we don't have to. We've had the solution for a long time, and it works fine..." But we don't have the solution to this sort of robotic manipulation, which is actually maybe easier for humans, but really hard for computers and AI systems. So what they tackled was the harder of the problems.

There's certainly other cases of this that are present in AI, like detecting and working with sarcasm in text is extremely difficult. Or even just sentiment. It's still a hard problem, just because it's easy for humans to maybe detect that, and even combine voice with facial expressions, and all of that, to detect sarcasm, or volume, or tone, or all those things... That's really tough for a computer to solve.

**Chris Benson:** If you think about not having facial expression, the way we type out emails or text, for instance, we humans also have a hard time detecting sarcasm, when it's there and when it's not, if we don't have other sources other than the text alone.

**Daniel Whitenack:** Yeah, which is why I think a lot of people in that space are talking about this multi-modal learning, where you have maybe text and video or imagery, or that sort of thing, where these people solving those types of problems. Maybe sentiment analysis is something where we're like "Oh, well humans can do that easily. Why do we need to work on computer algorithms to solve this sort of thing?" It's part of this effort to really tackle the hard problems that are hard for computers, and advance AI more generally, versus just solving already solved things, just quicker or faster, or that sort of terrain.

**Chris Benson:** If you have an option that is less expensive to do it, then take that option, don't take the AI route. Apply AI where it makes sense to apply AI.

**Daniel Whitenack:** Amen. Well, on this front, we always like to end these Fully Connected episodes with some learning resources, and in particular if you're wanting to learn more about reinforcement learning - that was a confusing statement; very meta-learning... Learning about reinforcement learning. Again, episodes 40 and 14 of this podcast you might wanna take a listen to.

OpenAI used this OpenAI Gym to train their reinforcement learning algorithm, and that is something that you can get your hands on. There's a tutorial that we'll link in our show notes, that kind of shows how to use this OpenAI Gym. So if that's something you're interested in exploring, then we'll certainly link it in the notes. And there's PyTorch and TensorFlow tutorials as well, that deal with reinforcement learning. So there's a bunch of ways that you can get hands-on with this sort of thing, even if you don't have a robotic hand handy. There's my pun.

**Chris Benson:** Your hand handy? Yeah, and I don't.

**Daniel Whitenack:** I don't either. Cool. Well, thanks for going through this discussion with me, Chris. It was a lot of fun.

**Chris Benson:** It was. Interesting article.

**Daniel Whitenack:** Very interesting in all sorts of different ways - technically, culturally, and reception-wise, and all of those things. So yeah, definitely go take a look at the blog post and the paper if you haven't yet, and let us know what you think. You can reach out to us in our Slack channel, which you can find if you go to changelog.com/community, or reach out to us on our LinkedIn page. We're happy to get good feedback, whether that's positive or negative things, but also to hear what your thoughts are on potentially controversial and interesting topics like this... So reach out. Yeah, I think that's all we've got for today. It was great to talk to you, Chris.

**Chris Benson:** It was a good one. Talk to you soon, Daniel.
