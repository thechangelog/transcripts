**Chris Benson:** Welcome to another episode of the Practical AI podcast. Hopefully, today we're gonna have some fun stuff that we haven't covered before. My name is Chris Benson, I work at Lockheed Martin, and with me is Daniel Whitenack, a data scientist at SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. It was an interesting weekend. I actually got to get out of the house, which was a good thing during Covid... My pastor and his wife took us out on a -- they have a little boat, and it was quite an adventurous time, because we got to get outside, it was beautiful, but then the boat broke down and we had to get a toe back to the dock, and all that... So it was an interesting weekend, away from the computer, out in nature, but it was an adventure. What about yourself?

**Chris Benson:** I think yours was much more adventurous than mine. We managed to adopt out one of our foster dogs, so we're down to only seven dogs now in the house.

**Daniel Whitenack:** Only seven dogs, yeah...

**Chris Benson:** Only seven dogs. We went into the weekend with eight, so that's good... So that's always a nice little family weekend in that way.

**Daniel Whitenack:** Yeah, for sure. Now back to some fun AI stuff - I've got a few things going, actually. I've got a new project I'm working on, which hopefully I can -- right now I can't share everything about it, but hopefully I'll be able to share some soon. It's speech-related, and it's some pretty fun stuff with local languages here at SIL, so hopefully I'll be able to share that at some point.

But I know today we're doing something with -- I was just talking before the show that after even 100 or more episodes, there's still things on the show, so many interesting topics going on with AI that we haven't had full shows devoted to certain things... And we've got one of those today, right?

**Chris Benson:** It's a big one as well.

**Daniel Whitenack:** Yeah, how have we missed this?

**Chris Benson:** I was kind of shocked... Yeah, over 100 episodes and we missed this one... This is insane. So today I wanted to welcome onto the show - if I get your name correct - Drago Anguelov. Did I come anywhere close there?

**Drago Anguelov:** \[00:03:54.13\] Sounds good, actually. Thank you.

**Daniel Whitenack:** That was quite good, yeah.

**Drago Anguelov:** Thanks for having me.

**Chris Benson:** You are a principal scientist and head of research at Waymo...

**Daniel Whitenack:** Woo-hoo!

**Chris Benson:** And we're gonna talk a bit today about autonomy, I believe... Is that correct?

**Drago Anguelov:** Sounds like a good topic for me. I enjoy it.

**Chris Benson:** A topic I love too, and one that I touch in my work life, so I can't believe we haven't talked about it on the show, in the depth it deserves.

**Drago Anguelov:** Yeah, Chris is gonna nerd out today quite a bit, I think.

**Chris Benson:** Yeah, this is great.

**Daniel Whitenack:** We've been talking about NLP too much. We need a break. \[laughs\]

**Drago Anguelov:** It's a very quickly developing area, with a lot of great technology coming out. It's not surprising... And some good systems, too.

**Chris Benson:** Yeah, he's just schooling me on NLP on every episode, so...

**Daniel Whitenack:** I don't know about that.

**Drago Anguelov:** How many GPT-3 episodes have you had so far?

**Drago Anguelov:** I think it's come up in a number of them. We had Hugging Face on not too long ago, so that was a good transformer episode. Yeah, it is, like you say; I'm a little bit biased in that way, but I'm excited. It's so cool to also see -- like I mentioned at the beginning, I'm starting to work on some speech stuff... Because it works a lot with Mel-spectrograms and other things; there's a lot of overlap with computer vision types of models, so it's cool for me to dip back into some of that stuff, and it'll be awesome to discuss some of the computer vision things today.

**Chris Benson:** You know, Daniel was mentioning they couldn't talk about it; I'm suspicious, maybe he's gonna release GPT-4 for the world. \[laughter\]

**Daniel Whitenack:** Yeah, that must be it.

**Chris Benson:** Maybe that's next week's episode, right?

**Daniel Whitenack:** With all of my GPU clusters in my house here.

**Drago Anguelov:** Right behind you in the picture.

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** Yeah, so for the listeners, since you don't have the visual - we're on this Zoom call...

**Daniel Whitenack:** I think we've mentioned this a couple times, yeah.

**Chris Benson:** Yeah, we have... Daniel always has the data center in the background behind him there. I think I'd be shocked to see something more domestic there. I just figure you go home and go to bed in the data center, and you get the air conditioning going.

**Daniel Whitenack:** Yeah. Well, before we go too deep down the rabbit hole of virtual Zoom backgrounds, Drago, could you give us a little bit about your background and how you got into self-driving cars and that whole world? What's your background, and how did you get into AI?

**Drago Anguelov:** I'm by nature a machine learning researcher and engineer, that's how I think of myself. And when I started learning about those fields, I always was drawn to robotics; as such, I ended up doing a Ph.D. at Stanford in machine learning, but with the focus on perception (3D perception) at the time. I was actually Daphne Koller's first Ph.D. student that was focusing on perception... And as such, I had a very interesting overlap with professor Sebastian Thrun, because Daphne met him at the conference and sent me to his lab; because we had no robots or any way to collect sensor data, and Sebastian did, Daphne sent me to Pittsburgh to collect some data with his robots. That was my first more serious exposure to robotics.

What really happened though was I spent three weeks in Pittsburgh, but unfortunately, just at the time when I went there, Sebastian's whole team go tot go to Hawaii; I think something that he organized...

**Daniel Whitenack:** So you were left alone with the robots?

**Drago Anguelov:** I was left alone with the robots, and since I'm primarily a software guy, I managed to shard the main robot with which I was supposed to collect the data in fairly short order. So it was interesting times... Not too much data got collected, but we were lucky for Sebastian to come to Stanford. He became an official advisor of sorts, and I got exposed to a lot of his work. It took me a while to get into self-driving, but I had been exposed to robotics and concepts there since 2000, I would say... And slowly but surely, my path led into this field.

**Chris Benson:** Can you tell us a little bit about going from Stanford and getting to Waymo, and what some of those steps that led you there along the way?

**Drago Anguelov:** I initially focused more on computer vision and 3D perception. That was my bread and butter. That was a great field, that clearly would be empowered by machine learning. Originally, in those times deep learning was not really that popular. Neural nets were considered to be the second-best to do anything, as they said in the Stanford AI Lab; the same people were just kind of joking with saying that... And probably genetic engineering was the third-best way of doing anything. We did a lot of graphical models.

\[00:08:28.25\] I was lucky to have a great advisor, Daphne Koller, that was my primary advisor. She's a very accomplished professor, with a lot of seminal work in graphical models... And those were the models at the time that actually worked, so I did a lot of work in that.

But when I graduated Stanford, I felt that I would go into a startup... So I spent two years in a computer vision startup \[unintelligible 00:08:53.08\] where we did face recognition in photo albums, and we did visual search for shopping... Eventually though, it became too much of a website, and computer vision became more of a second-class citizen, and I felt that it might be a great idea to join Google, so I spent eight years at Google... Never in self-driving at that time, but in areas that are very closely related. One of them was StreetView. At StreetView I learned a lot about Non-linear least squares, and feature matching, and bundle adjustment, structure from motion, SLAM... I had to, because I was tech lead for pose estimation and 3D vision at StreetView, so that was the field I really got to exercise a lot.

After doing quite a lot of very interesting work at StreetView, which culminated in 2010... We did actually this - I don't know how much you guys follow this type of the literature - loop closing of the world, which is we took all the poses of all trajectories StreetView cars ever drove, and we built a system with a guy called Samir Agarwal, who later developed the very popular solver called Ceres, to register all of these runs of all the cars using the LIDAR sensor data (and later we tried the cameras), compute constraints between them and bring them into a joined global coordinate system. After we accomplished this for all of StreetView data, I felt "Okay, it's time to go back to ML."

**Daniel Whitenack:** You literally built the world.

**Drago Anguelov:** We loop-closed the world, I would say... And after loop closes, you have all this tensor data and you can really map it well. Afterwards, I switched to ML again, to a more experimental/researchy team, which end up in Google Research eventually. What we did was initially Google Goggles, which was not the Glass which everyone knows, but it used to be a little \[unintelligible 00:10:50.24\] in your phone that you can take pictures and it would tell you what the pictures are of. And at the time it didn't work too well, but it pioneered a lot of the core concepts, and even technologies.

In fact, in around 2012 we were already doing quite serious deep nets at the time, only they weren't working as well, because the neural net architectures were not very good. And then came AlexNet, and it was much better than anything we had that was not deep-net-based, as most people in the field also found out... And we found it very early. So we switched to deep learning, and we developed a lot of this early neural net architectures for detection and classification that became quite popular afterwards... And we started working on annotating Google Photos, so I worked a lot on that. This is large-scale image recognition and detection, and a lot of these skills are also very relevant for self-driving.

And around 2015 I said "Okay, this perception thing --" we started to get a hang of it, at least for cameras; at least for images. It probably is finally time to go and do self-driving. So in 2015 I got involved in self-driving, and so I'm here today.

**Daniel Whitenack:** \[00:12:01.13\] Gotcha. This is really the first focused episode we've had on self-driving, and it is one of those things that when people think of AI, one of the first things that come to mind is "Oh, self-driving is an example of applications of AI." Maybe you could just give us a sort of state of self-driving cars. People looking from the outside - they might have a variety of perceptions and expectations, all the way from "Oh yeah, we have self-driving cars now that work great" to "I'm not convinced that any car could self-drive." Where are we at, generally? What's the state of where we're at with self-driving cars in industry?

**Drago Anguelov:** Overall I feel the industry has made a lot of progress, and this progress is accelerating. At Waymo we have been at this for over ten years now. And even in 2010, 2011, when I was not directly with Waymo, they still had a lot of awesome demos, and very impressive driving and behaviors that they were doing then. It's just the level and the complexity of what you need to do to launch safely a fully driverless product is unlike most products that have ever been launched... It takes a lot of time and iteration and understanding about the details and corner cases.

At Waymo we have been working on improving the systems, and we've been steadily improving. We are now giving thousands of rides a week in the Phoenix Metro Area, and before Covid, 5% to 10% of them were fully autonomous. This is quite a large area, and quite general driving that we support there, so that to me is something that people don't talk as much about, but to me is a tremendous accomplishment already... And we're quite good currently at taking a specific area of interest, going out there and learning how to drive it. A lot of work though needs to go into making this system really scale to the variety of areas, diversity of situations and even conditions and the types of intersections that you see, to the long tail of scenarios, to weather...

You want a system that scales quite seamlessly the more you give it data. Machine learnings has a very big role to play, and to me that's an exciting multiplier. So this will help bring this technology to much more areas further.

**Chris Benson:** You've kind of alluded to it, but as you're looking at this field, and especially as it's grown over the last few years, and there are new entrants, and it's maturing, what are those components that make up the field? What are all the kinds of areas of concern that you have to address when you're doing this kind of work in autonomy?

**Drago Anguelov:** There are actually two areas in which work needs to be done, and I would split it into a technological area, and product and policy. Maybe it's easier if we're starting from a broader, and then starting to narrow; maybe the latter is a good thing to describe.

**Chris Benson:** Sure.

**Drago Anguelov:** An autonomous driving product has not been created in the past, and the legislation for it is work in progress. So this is an area where all the companies are focused a lot, working with governments at all levels, and city councils and so on, to make sure that this product is developed to really serve the needs of the people that are using it, that they really work for the various interests and needs in the specific communities, that it has the right features, because it's a different nature product than a car with a driver... And so all this area around compliance, regulation, product details is something that requires more work.

\[00:15:58.27\] Also, just to build that hardware at scale is a non-trivial effort that needs to be set up, so that you can produce these vehicles at a good price point.

Automotive companies have existed for over a hundred years, and they've been perfecting how to build vehicles efficiently, how to put these boxes together and integrate all the components... Now we have a lot more components; there is all the sensors, and the compute, and the safety features that we put into the vehicles that we need to learn to integrate efficiently. So that's on the policy side, not technological side.

On the technological side there are a lot of interesting challenges with regards to, indeed, how do you handle the long tail? The rare events, how do you get to be robust to them? How do you efficiently -- say, having to learn to drive in Phoenix, how do you easily adapt all of this stack to a new area, and prove to yourself that you're safe there? How do you efficiently handle rare events in new areas, and weather? Because each weather and condition leads to different behaviors and performance, both of your sensors and potentially of the other actors that react to the conditions that you need to be adapting to. All of these are very fruitful areas for research.

All of these areas in technology - there's a lot of great base, and there's a lot of great robotics, and probabilistic robotics of the kind that Sebastian Thrun used to do, and modeling that has gone in it. What's really changing this area a lot is the advent of machine learning and its rapid development, which makes more and more things possible. And most of the companies \[unintelligible 00:17:41.11\] reinventing our stack as we go; as these new capabilities that become possible, a lot of them we try to create ourselves with our research... This makes the system more and more adaptable. And right now, machine learning - the true successes already for over five years have been a lot in supervised learning. So you have a reasonable way to design this neural net architectures for specific tasks, there are universal function approximators, but it helps to have a good architecture... And when you have this good architecture and you define a good supervised problem and you label all the data you ever wanted, which may be hundreds of millions of boxes \[unintelligible 00:18:19.15\] great. But that doesn't scale very well... So there are a lot of new paradigms over the last few years that have become very popular, and how to make each step of this progress a lot more seamless and a lot more automatic.

When I got into this head of research role, I kept dreaming "What's the dream system that I want to build?" And to me it always has been "Okay, I want to go to a new city." We would just deploy a bunch of vehicles there, with our drivers; we will tell them how we want them to drive, so that they are Waymo-like driving. Then we collect data, maybe for months, and we just take all this data and put it in our systems and they just improve and adapt to the city. And that can be in terms of perception, it can be in terms of behavior prediction, it can be in terms of better planning, by observing how everyone does everything... And hopefully, we're almost all the way there. Of course, that's not yet necessarily realizable, that just with a system that just observes you can go all the way. Of course, in a serious domain like this, there's always a lot of room for great engineering and modeling as well to complement it... So it's usually an amalgamation of these two approaches. But you want also the first part to be possible, because that really makes your system global.

So I think a lot of our projects are motivated by this vision - how do you take a piece that maybe has some heuristic, or too much assumptions that may not generalize to a very different environment, and how do we relax them with ML, such that the system becomes able to handle a larger diversity of situations, without people necessarily going in and coding it all?

**Break:** \[00:20:07.25\]

**Daniel Whitenack:** You started getting into the data side of things a second ago, in terms of collecting certain types of data and what was needed... Maybe we could just kind of start breaking down the basic problem in terms of what data you're collecting, and then we could move on to talk about the various modular components, like you're saying, that drive this system.

So in a Waymo self-driving car at least, or maybe it's kind of standardized now, I'm not sure, but what are the main data inputs that you're working off of? I'm assuming cameras, but you mentioned LIDAR, I think... What's the combination of sensors that you're working with?

**Drago Anguelov:** So if you look at generally the stacks of modern autonomous driving companies, a large part of them use all three sensors, or a subset, which is camera, LIDAR and radar. Some also use thermal cameras, occasionally even more creative sensors - sonar, and so on. But those three are the main ones, and I think each of them bring something really unique and powerful to the table.

**Chris Benson:** For anyone who doesn't know what LIDAR is - because that tends to be used in this particular area - could you also quickly say what that is, for those that are not familiar with LIDAR? I think everyone knows radar and everyone knows cameras, but maybe not everyone knows LIDAR.

**Drago Anguelov:** So LIDAR stands for Light Detection and Ranging. LIDAR is a laser unit that sends out a laser pulse, that then gets returned from the environment, and you can measure the time travel, and potentially other attributes of the signal, like the intensity of the object that you measures. So it gives a very accurate depth estimate to objects.

Of course, a radar also does give you a depth estimate to objects. A radar has antennae that send out RF signal, and then the signals come back. But the radar signal is not quite as localized, and it's typically lower-resolution. LIDAR - especially the high-end LIDAR - is able to image the scene at very high resolutions, with \[unintelligible 00:23:07.14\] and currently there's different kinds, you can have up to a million returns in a spin of this, or in this range image that it forms for you. And that's an extremely rich description of the shape of all the objects, and also their reflectance property.

**Chris Benson:** So if you're with Waymo or any of these other companies with their stacks, that all have these common three sensors - in a generalized way, what is the advantage of camera, what is the advantage of LIDAR, what is the advantage of radar? How do you choose to apply the input you're getting from each of these types of sensors to form -- I don't know what you would call it, but your operating of your vehicle? How do they each contribute optimally to the overall picture there?

**Drago Anguelov:** \[00:23:57.29\] Let me say first that now that I'm at Waymo, I am just amazed by the quality of our sensors. One of the strengths of Waymo - among many, and we can talk about them - is that Waymo has been already existing for ten years, and it builds both its own sensor hardware and the software that then uses the sensor data. So the sensors are top of the industry, I believe, and the setup is built such that both the hardware and software engineers can work together on the requirements that contribute to the operation domain requirements. So that is a privilege.

Now, one caveat is that for each different self-driving company the balance of these sensors is a bit different, because some of these have somewhat different characteristics. But overall - now let's generalize a bit - a camera is a standard sensor; very popular, it's very mature. It's the sensor that comes in the highest resolution. It has the highest amount of information. It's a passive sensor.

Traditionally, we knew that all the information there in the camera is great to use, but before deep learning it could not really take into use a lot of it, for two reasons. Not only that the models themselves did not exist, but also the compute to really effectively process these large images did not really exist. Now that's no longer true, so the camera is an extremely powerful sensor, and you can do a lot with cameras.

LIDAR became potentially historically over the last ten years the most popular sensor for self-driving. It is an unparalleled sensor, in the sense that it combines really accurate, dense depth, and it's an active sensor, which is important, because it has additional benefits for safety... And honestly, if you start comparing the performance of these sensors, especially in areas of some reasonable proximity to the vehicle, which can be up to 100 meters, in terms of accuracy that you can obtain for your object modeling, at least at a geometric level, a LIDAR dominates still.

And the radar is also very popular, for other reasons. It's a really great sensor for weather, because the RF waves can travel reasonably well. They don't degrade as much as LIDAR and potentially camera in fog and rain. Also, the radar is very complementary to cameras, because cameras - they're really great at semantics and understanding what is there qualitatively. They're really good at estimating the lateral position of things and the lateral motion, but they're really not so good at estimating depth of velocity in the longitudinal relative to the array in which you observe the object... And that's exactly what the radar is good at, because what the radar does is - especially for metal objects - it measures super-well the distance to it, and it also directly measures velocity, which for a camera is a very derivative concept, which is yet more inaccurate. A radar really decreases the uncertainty in this measurement, so it really complements the strength of cameras. So that is a good property.

Also, radars are very cheap... But they also have their shortcomings, things like resolution, and especially vertical resolution. Often, you need a lot of antennas to get vertical resolution... So things like overpasses, and so on - you cannot tell if the object is potentially (especially for static objects) above you or at your level, given the vertical resolution, and that's problematic. This is something that LIDAR, for example, can do well.

So each of these sensors, when put together, there is a case where one more sensor is good, and that's how at Waymo we have arrived to this combination of the three... And of course, ideally it would say "Oh, isn't it great, to just have one sensor? Simplicity." But if you think about safety and ability to generalize to all conditions well, these three historically have proven very powerful together. So Waymo's stack has evolved like this, and a lot of the main manufacturers as well, of self-driving systems.

**Daniel Whitenack:** \[00:28:24.27\] Before we jump into the actual models that are processing this data, it strikes me as we're talking about all of this - we have these various rich sources of data, and those are being combined, and I'm guessing pre-processed in various ways, and you're also running, in my understanding, a variety of models in the unit, in the car... What sort of compute is available to you in the car itself to be able to respond in real-time? What are your constraints compute-wise, and power-wise, and all of those things running in the car? Of course, it's not like a drone maybe, where you're in the air and weight's a huge -- I mean, it's still an issue, but it may not be as huge of an issue... But what are the constraints there, and what hardware are you working with? Do you have to have accelerators at the edge, or what are you working with?

**Drago Anguelov:** So let me just say a few things - I don't think I can really disclose the details of the Waymo compute in the car...

**Daniel Whitenack:** And that's fine, yeah.

**Chris Benson:** We're not surprised. \[laughs\] It's fine.

**Drago Anguelov:** But I can describe roughly the considerations when you think about this.

**Chris Benson:** Yeah, that's great.

**Drago Anguelov:** First of all, outdoors, you need to understand often objects up to quite a distant range, where maybe 300 meters in front of you, if you have a truck, you need to detect a cone or an obstacle that may cause you to start slowing down, right? So you need to understand things over fairly long distances, and also quite crowded scenes. If you're, say, in downtown San Francisco - I live in San Francisco - you go down, there could be hundreds of different people and dozens of vehicles all around you, and you need to make sense of this scene, and be able to ultimately anticipate which parts of it are relevant for you, and make decisions.

This results in fairly large requirement for compute compared to most systems. Also, as we want to run more and more deep networks, and as you guys probably know, there is this nice trade-off in deep networks, is more compute equals somewhat more quality... You generally want a compute stack that is really good at running this machine learning model. Of course, CPU is also important that you have a good amount. You can't do everything in parallel neural network computations. So we want a lot of parallel compute for low-wattage, ideally also a certified system that is robust to shaking and the treatment it gets out there in the wild.

So you do want something like GPUs or TPUs ideally, because that's what makes running these models tractable and possible, and of course, you can do dedicated hardware as well. So it's a bit evolving. I think the field starts with benefitting from more flexible architectures, that you can run more different models on... And then as we mature and hone down on the specific architectures and final models that work really well - it's still a work in progress - then I think the hardware will become more and more custom to those, and gain more and more efficiency over time.

So there's just a natural evolution, but you do want a lot of compute in parallel for low wattage, and this is the systems that most of our companies like ours are really looking at.

**Chris Benson:** I'm wondering if you can give us an overview -- we know that you have your modular autonomous driving system... And if you could describe what that is. Just from other organizations, including the one that I work for, most of them have a way of approaching that, and that have a lot of commonalities across it... Obviously, we're not asking for anything proprietary...

**Drago Anguelov:** \[00:32:19.16\] Right. I am happy to go over the typical architecture of an autonomous driving system.

**Chris Benson:** Okay.

**Daniel Whitenack:** That'd be great.

**Chris Benson:** That'd be fantastic, yeah.

**Drago Anguelov:** And this would be the on-board version, because there's also a lot of key off-board systems that come into play, which are crucial to being able to make progress on the problem. So the on-board stack - it all starts probably with maps. It's really helpful to have a map of the environment already available to you. This can be obtained, of course, by surveying the environment ahead of time, collecting sensor data from it, and from the sensor data you can build a representation of the environment and store it.

Why is this important? Some people can say "Wouldn't it be nice to not have a map?" I think a map is a really important safety feature, in a sense an additional sensor. It gives you a lot of prior information about the environment. Often, big parts of the environment end up being occluded, especially in crowded scenes, and it really helps you anticipate and understand better the queues in this data-limited regime, where you cannot easily see everything with your sensors, for example. So that's almost like a fourth sensor, is your map.

**Chris Benson:** Could you say it enhances the situational understanding of the environment, kind of as a constraint of -- regardless what the other sensors are saying, the map says if there is a road or not a road there?

**Drago Anguelov:** Yeah, and there's roughly these lanes, and they used to go at least to these lanes before, and afterwards there will be something in 50 meters, you should know that there's some other road merging in... And you know all this. You don't have to just find it along the way. You know what to expect.

Now, when you use maps, one core property is you can't just assume the map is true. Also, ideally, it will not make the map so high fidelity and density, just model every pixel in the map; that's probably unnecessary. You just want the high-level semantic just of the scene, and then you transfer this understanding into your models as an aid. But it's a knowledge that you need to be able to change as you observe the world.

For example, maybe you believe there is a traffic light over here, and then someone moved it. Your system needs to be able to now understand that whatever the traffic light that the map was telling you is no longer relevant, and you need to detect any new one and figure out what it means for you, and execute the allowed behaviors in the scene relative to this new object.

So that's a key requirement to be able to maintain a map - you need to track which parts of it are correct and use those to aid your models. But that comes from part one of the system. And again, some people make a big deal out of "Oh, you may not need this high-fidelity map." You need some map. It's a bit of an open question, and everyone has a different answer, but some information about the environment that you can just collect - it's a great safety feature. So it starts there.

Now, to use the map, you now need a system that's called a localization system. This is a system - as you drive through this environment, you need to know how you're positioned relative to your map. Once you know that, then all this knowledge started in the map has direct transfer to your own representations from your sensors, and now it can really enrich them. So that's the prerequisite.

Then you have perception. Perception - you have the map, the localized map, you have the sensor data, and you are reconstructing a model of the world. This model of the world is actually very interesting. It can be quite rich. So you can understand and detect and track many different kinds of objects in the environment - all the vehicles, pedestrians, cyclists, you can detect signs and traffic lights, and lanes on the road, and borders of the road, the drivable surface, and so on. Flares, police cars, ambulances, gestures of people... It goes quite rich, and this kind of predicates having several models running in perception to obtain this data from the three available sensors.

\[00:36:26.07\] So once you have this representation of the world that you agree on, that now is fed to your behavior prediction model for the objects that are ultimately behaving in the environment on their own volition; things like pedestrians and vehicles, which are a lot of the thing that make self-driving hard, is the ability to anticipate uncertain potentially behaviors of the people around you, whether they're in vehicles or walking. It's not a deterministic behavior, it's not something you can project for sure. You need to be prepared for a diverse set of potential outcomes and drive an optimal policy relative to that. So you have a behavior prediction system that gives you a representation of these beliefs about what other agents are going to do.

And now, with input from perception, which also can include things like you understanding which parts of world are occluded and not occluded - so it's not just about detecting and tracking an object; you need to understand which things you don't even know, because that's important knowledge in itself... And the predictions and all the tracked objects and all the obstacles - if detected, this now goes into the planner, which needs to plan a good, safe trajectory that gets you to the goal comfortably. That's ultimately roughly the gist of what is required, so you need to trade off all of these requirements in an optimal way, to get a good behavior. Then the planner makes the decisions of how to drive. Often, those then decisions need to be translated into acceleration and steering wheel motions, which our controller can do. This is the whole system working in unison with all these modules, maintaining the mapping from observing the environment to acting in the environment. So that is roughly my overview of the onboard system as a set of modules.

**Break:** \[00:38:26.04\]

**Chris Benson:** That was a fantastic explanation that you just gave us there, and I just wanna follow up a little bit on that. You covered so many of the components that go into the process of the vehicle figuring out what's happening, or what's going on down the road, from behavioral prediction model, to the planner, to the perception from the sensors, your world model - as you put all of that together and you are having a vehicle that is moving down the street... That's a fairly complicated situation to try to resolve.

**Drago Anguelov:** It's a wonderful integration problem. A self-driving car is a robot, and you need to integrate all of these systems, which also of course includes all the hardware and sensors and so on into one coherent whole. It's fascinating.

**Chris Benson:** That's really where I was wanting to go with it - it is a very complicated situation, and for any one of the various things that you covered, you have to have a strategy that the planner is gonna come up with, and stuff. If you're starting with maybe the mapping or the world model from that, and you have the sensors to give you the real-time data, how does the behavioral prediction model and a planner - how do they take those things in in a generalized sense, and be able to deviate from what otherwise... You know, if you're starting with "Well, I have a map of roads", but as you said, they may have moved the traffic light, or there may be a pedestrian or a dog that's about to dart out into the road - how does that integrate in? Do you have a path that you're typically taking, and then those are all exception cases, or is it more integrated than that?

**Drago Anguelov:** \[00:40:24.01\] I think it's more integrated than that. Generally, there are high-level principles or understanding of how to build this thing and how it's supposed to fit together. So operationally - we'll talk operationally and then technologically. Operationally, in these areas there's a lot of these vertical cross-functional word groups that ultimately tailor a set of capabilities and algorithmic system designs to handle the specific types of behaviors they see in the environment.

I think also ultimately there is a lot of interesting high-level choices you do that are a bit more general, which is "What is a good representation to power behavior prediction?" and I think different companies may have different answers, and a lot of this can be tried by trying deep learning models on different types of inputs, and seeing what gains you get. This is one interesting way to understand what kind of attributes and representations are important. I will give you some examples from my recent work that we published in this year's CVPR. Traditionally, and some of the early Waymo work that we published maybe last year -- early 2019 we had a paper called ChauffeurNet, which was based on end-to-end or mid-to-mid (as we call it) learning to drive. That was based on the presentation of the world as an image.

So your map - you rasterize it to an image, and then you can use your favorite computer vision models to process the image for the convolutional net, and then make whatever predictions you want on top. Maybe some kind of heat maps of where you're gonna be, or trajectories, or so on... That is one type of representation, but it also has a significant set of weaknesses. Typically, that's a dense representation; \[unintelligible 00:42:15.04\] you lose structure that you had because you've just rasterized something and the structure is maybe getting lost... And convolutional neural nets also are good for certain types of processing, but not others. You have these local kernels, maybe a 3x3, or 5x5 - that's a very local thing, and often you need to reason two agents maybe a hundred meters from here will merge. That's not so obvious to model out well, at least in a more precise way, with the deep net, with small kernels.

So that leads to the questions of "Well, maybe there's other representations possible." Also, there's a question of - and of course, that's not the full answer - do you do prediction just based on bounding boxes? So if you treat every person and every vehicle as a box, and all you do is observe how the boxes move, can you do accurate behavior prediction? Well, it can be pretty good, but probably you can do even better. Humans have a lot of different cues: gestures, gaze, appearance, behavior of the body, body language and so on, that also matters, especially in the more complex environments in the dense, urban downtowns. So there is a bit of this interesting, open question. There's a lot of different things you can do.

One of the things we found in the paper called VectorNet that we published in CVPR this year was that if you model all the mapping formations such as polylines, and you model the agent behavior also, the past history of the agent is also a polyline of sorts... And now you have a model that processes all of these compute features on these polylines, puts a graphical neural network (or transformer in this specific case) on top, to reason about all their relationships and produce these predictions - that works better, and often more efficiently than rendering everything in an image.

\[00:44:11.03\] So it's a little bit of how your models are in behavior prediction, and their capabilities depend on this interface, and there's a lot of things that can be tried... And potentially, just rendering things as an image and putting a neural net is not it. But it's also not just a bunch of bounding boxes moving around; the world is rich, and you need a lot of these attributes, or potentially it can go even from \[unintelligible 00:44:31.21\] in an end-to-end fashion, of course, but then you run into different challenges.

So this is one of the exciting areas of engineering design, and each company makes a decision "What is our API? What do we put there? What are the predictive features that we're going to be reconstructing with these models?"

**Daniel Whitenack:** Yeah, it's interesting that you're talking about how things are related. I watched your talk at CVPR; I also saw you were doing other things, precting trajectories with these graph neural networks... And it kind of strikes me as a bit of a trend. I think I mentioned this on one of our last episodes, but I saw Sasha Rush was giving some statistics about the number of keywords he saw being mentioned at ICLR, and "graph neural networks" was way high up on there.

**Drago Anguelov:** It is definitely a trend in robotics now... Are for good reason, I think. I think ultimately you want models that generalize. The first principle of computer vision networks from some \[unintelligible 00:45:36.06\] is not a very generalized model for such a complex space... So you need to introduce structure in this model judiciously, and a lot of the structure ultimately about which we can even have modules and reasoning and humans can understand it better is things about objects and relationships and interactions and trajectories... And these are the things that things like Transformers can model well. They can model all the inter-object interactions directly, as opposed to using an image medium as a proxy. And that's powerful.

That's not to say you cannot have the -- so it's not like you can't have it both ways. You could. You can have some of the basic processing go in a general model, and then still have all this structure tacked on. And if this is a good, generalizable property, typically having more outputs in the model is nowadays likely a good idea. That allows you to self-supervise them, that adds additional structure, it constrains you better to generalize to cases where I don't have as much data... These are good trends, and I think GNNs are popular for a reason. They are quite flexible in what they can do. And transformers is one of the most popular versions currently of graph neural nets.

**Daniel Whitenack:** Yeah. One of the other things I noticed in that research you were showing was the temporal piece of this. We've talked about perception, and objects, and relationships, but there's also trajectories. And as you're processing this data, it's all coming at you as a time series, I assume...

**Drago Anguelov:** Correct.

**Daniel Whitenack:** Could you explain this sort of element of the -- I think you called them temporal anchor proposals. How does this temporal -- projecting back in the past, and projecting forward trajectories - how does that fit into the flow of controlling the car?

**Drago Anguelov:** I'm not sure exactly which aspect of the work you're talking about, because I showed several that might be interpreted in this way...

**Daniel Whitenack:** Yeah, you're doing a lot, so it was hard to narrow down questions here... But yeah, I think the one I was thinking about - you had a little guy walking, and I think you had projected his historical trajectory, or something like that...

**Drago Anguelov:** \[00:48:01.25\] Yeah, so that's your evidence. You have a scene, which is a static context, and you have the behavior of the agents so far... And you want to produce a distribution over the future behaviors of this agent, right? And one of the popular ways to represent that is what I call a mixture of trajectory Gaussians. We wrote a paper on this last summer, in 2019, a paper called MultiPath, which was one instantiation of it. At its core, you're gonna say "Hey, each agent can have some intents." It's a bit hard to say how many there should be, but let's assume we have some intents, and for each intent they're \[unintelligible 00:48:35.22\] to do a specific behavior, a trajectory, and maybe you have some uncertainty about how exactly this trajectory will play out. It's a simplification, but the way to get very accurate behaviors for fairly long-time horizons.

Now, the complexity there is let's say an agent can have maybe some number of intents, let's say a dozen, and for each you need a trajectory, and some uncertainties. And maybe these intents change over time. So if you're somewhere, you almost stopped, and about to start driving in the parking lot, there's some set of intents you can have. Then you come to some intersection, with some constraints, and you can have another. And then yet maybe you have another.

**Daniel Whitenack:** Yeah, and different numbers.

**Drago Anguelov:** Right? How do you know which one to apply when? And where do you get this knowledge? Now, maybe you start hardcoding based on the road graph, but that maybe makes it too dependent on the road graph. What if the road graph has a mistake? So we ended up with a concept at the time that was called static anchors, which says "Hey, just look at the data historically all vehicles have ever driven, and you can see all the potential things they could do. So let's just discretize this into bins, and maybe there are 128 bins now, or more, but at least you know -- for each type of behavior, now you can classify which one you're doing, and then of course, you adjust the specific trajectory for that behavior. It's a very simple, very straightforward model, and the result is very easy to learn. It's probably the simplest behavior prediction model for multiple trajectories, and when we did it, we just got inspired by object detection literature.

I used to do object detection before; we had a paper called SSD, which was a fast single-shot detector; that was way back in 2014. So it's a bit similar to this, where you're saying "Hey, I'm just going to enumerate all the things I could roughly do. There might be quite a few, but at least it's a fixed set; I now can train which ones get activated when, and adjust them. That works really well, but it is not the only way you can do this... But it's one of the simplest, and it reduces behavior prediction much closer to object detection, and it reduces it to a supervised problem. It's very friendly -- I mean, that's what machine learning does great, so it's great to use it... It's considerably friendly also to production systems, as opposed to a sample system that just does sampling.

A lot of Academia work is variational autoencoders, or CVAEs, and so on... And those need to sample a set of trajectories, and that's how they generate a distribution. Sampling is expensive, and it's not that deterministic, and it's not that easy to get probabilities for it... So while it's a very nice and powerful paradigm, maybe this anchor thing is simpler. Of course, it doesn't actually stop with anchors, because now there is powerful anchorless models, and we have some exciting work that we're hoping to put out on archive, that does some interesting things in this space as well soon, so maybe you guys should stay tuned... But there's a lot of interesting things you can do with this.

**Daniel Whitenack:** We'll be on the edge of our seat.

**Chris Benson:** That's a little tease there...

**Drago Anguelov:** But one last thing I would say is "Why do this thing, the anchors?" Typically, in object detection also in early times when we were working on it, the problem with -- and the reason why we introduced the concept of anchors ourselves, we did it at the time probably in parallel with Faster R-CNN, which also did it... It's a reasonable concept many people invented; it's logical... I think it's the following - neural nets, if you train with delta laws and you don't have many different modes at the output, it starts doing mode averaging. So it's hedging.

\[00:52:06.21\] If there's two different eventualities that potentially overlap, and you have a single output, it will average between the two. That's the best thing you can do with \[unintelligible 00:52:16.03\] And so there is this traditional trick, and by now it's perfectly standard to do this continuous regression problem - to do discrete continuous. So you discretize in slightly \[unintelligible 00:52:30.18\] and then within each bin you regress, and that's dramatically better than just doing directly regression. That does not work so well. And now, of course, it's 2020, and people have even more things that they can do, but this is probably one of the simple things you can do if you do regression, is to discretize parts of your output... And usually, that's better.

**Chris Benson:** So I guess to finish up, if you could tell us what kinds of things are you most excited about as you're looking here at the future of this industry, at the future of self-driving cars? With your special insight in there, what's getting you excited, what keeps you up, feeling like a kid, about what's gonna happen next?

**Drago Anguelov:** First of all, I'm excited by the product and the possibility of helping society with it. I think that goes in multiple different directions... And you guys have probably heard them before, but that does not make it any less valid. There is the safety aspect. Right now in the U.S. I think more than a million people die a year. I had heard a comparison to this, it's as if a Boeing plane with 150 people crashes every hour all year. That's in the world though, not just in the United States. So in the world, about 1.3 million people die from automotive accidents, and 15 million people get injured. A lot of those are due to human error. I think over 90%. So with autonomous driving systems the hope is to be able to reduce the consequences and the possibility of human errors.

**Chris Benson:** As you're addressing this - and I don't wanna cut you off, I want you to continue - can you envision a world at some point in the future where humans are not driving at all anymore, and 100% everything we do is autonomous?

**Drago Anguelov:** I think it may take a while to get there. People are attached to their cars, and I think generally penetration will happen in a thoughtful, steady way over time. There is the hope and the advantages of autonomous driving that people will hopefully get attracted to. We've had a very enthusiastic reception. Originally, you'd think "Okay, we're gonna roll out the self-driving product in Phoenix. How is it going to go?" A lot of people are really excited users, and especially for the fully driverless rides, which there's no one in the car and it's driving you throughout Phoenix. We've got a lot of five stars. People get super-excited once they experienced it. It's a big thrill, and they are very positive.

So I think it may take some time for people to get exposed, and we work a lot on outreach, and working with key groups and representations to get people to be more informed, and hopefully give people more chances to try this... I think it still would take some time, but I'm very optimistic about it.

Some advantages to self-driving cars, in addition to safety, is economics as well. I think it can make it easier for a lot of people that currently cannot drive - there's a lot of disabled people, or people otherwise limited to what they can do - to more affordably do so. I think it often potentially can change how cities are designed. There might be fewer parking lots, there may be more green spaces. There might be less congestion. That's another aspect.

\[00:55:56.29\] I think fourth - I'm personally excited about - self-driving cars go really well with electric cars; it needs to be hybrid or electric. And I think larger adoption of self-driving technology will also contribute to larger adoption of electric vehicles over time. That's my personal opinion. I think that it's a natural progression that is likely to happen as well. So it has all these beneficial consequences.

There's an interesting question about with Covid, what have we learned, and is it changing transportation. At least so far with the virus, it's problematic to have many people in a small space. Autonomous driving has the chance to remove the driver and have you be in a vehicle by yourself. And I hope this Covid problem - I mean, it's a pandemic, it's terrible - ends soon, but ultimately, I'm not sure what the patterns and preferences of people would be. But autonomous driving can help there potentially as well, in some shape.

I think it will start little by little. Maybe people will not get their second car, and just use autonomous driving because it's convenient. We see this already in our pilots or this Waymo One in Phoenix. This is for example a popular way - it's much easier to just get the Waymo, especially if you need a child's seat (it's already installed in the back), and so on. I think it's only the beginning, and ultimately the possibilities are great, but it will not happen overnight.

**Daniel Whitenack:** Yeah. Well, thank you so much for diving into all of these topics with us. I know that there is so much to discuss here... I definitely recommend people check out your CVPR talk. We'll make sure that the link to that is in our show notes, so that you can explore more of the great research topics.

**Drago Anguelov:** I hope the people that listen to the podcast are somewhat technical, because that talk was aimed at a research conference... So hopefully it's still interesting. It starts general, but then it goes into a bunch of models.

**Daniel Whitenack:** Yeah, that's what I enjoyed about it, actually - it started general, and actually it kind of eased you into it. People can go as far as they want, looking at the papers, or just hopping off to the Waymo website, and the blog, and all those things, and reading there. We'll make sure and include those links as well... But yeah, I know I'm fascinated by so much of what you're doing, and I really appreciate also your passion and how much you're pouring into this. It's really great to see.

Thank you so much for joining us, and I hope someday we're able to take the same autonomous car somewhere and have a chat. That would be wonderful.

**Drago Anguelov:** Well, after Covid, hopefully let's go a little bit. Fingers crossed that it will be a possibility. It would be good to be able to give you guys a test ride. Maybe that would be interesting.

**Chris Benson:** Oh, absolutely. We'll do that.

**Daniel Whitenack:** We'd definitely be in for that, yeah... Thank you so much, we really appreciate you being here.

**Chris Benson:** Thank you.

**Drago Anguelov:** Thank you, and we're hoping to put more of our work out there in this year, and going forward. A lot of the work you see now comes out of our lab. A lot of it was done last year, because that's how long usually the publication process takes... But we have a lot of other great things in the pipe, so we hope to share them with the community soon.

**Daniel Whitenack:** Cool. Thank you so much.

**Drago Anguelov:** Thank you.
