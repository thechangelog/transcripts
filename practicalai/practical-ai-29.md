**Chris Benson:** Welcome to the Practical AI podcast. This is Chris Benson, your co-host, as well as the chief AI strategist at Lockheed Martin, RMS APA Innovations. This week you're going to hear one of a series of episodes recorded in late January 2019 at the Applied Machine Learning Days conference in Lausanne, Switzerland.

My co-host Daniel Whitenack was going to join me, but had to cancel for personal reasons shortly before the conference. Please forgive the noise of the conference in the background. I recorded right in the midst of the flurry of conference activities.

Separately from the podcast, Daniel successfully managed the AI For Good track at Applied Machine Learning Days from America, and I was one of his speakers. Now, without further delay, I hope you enjoy the interview.

I have Jennifer Marsman, who is Principal Engineer on the AI for Earth team at Microsoft with me today. Welcome to the show, Jennifer.

**Jennifer Marsman:** Thank you for having me, Chris.

**Chris Benson:** I was fascinated to learn that Microsoft had an AI for Earth team. I think that's super-cool, and I would like to know more about it. Could you tell me a little bit about yourself, how you got on the team, and a bit about the team itself? Give us kind of a broad intro to it.

**Jennifer Marsman:** Absolutely. I'm very excited about the AI for Earth team as well. I actually heard about it before I joined the team as one of the kind of new initiatives Microsoft was going forward with, and I wrote an essay to the hiring manager on why they needed to hire me, because I was so excited to be a part of it, so...

**Chris Benson:** I love that.

**Jennifer Marsman:** Oh yeah, I went hardcore for this one. But here's the idea behind it - AI for Earth started by the guy who is now my manager, a dude by the name of Lucas Joppa. Lucas is actually Microsoft's first chief environmental officer, which I did not even know that we had prior to taking this job, but apparently that is a thing.

**Chris Benson:** Okay, excellent...

**Jennifer Marsman:** And what's really cool is Lucas worked for this guy Eric Horvitz for a very long time. Eric Horvitz is, of course, a big name in the machine learning world - he's been at Microsoft Research for a long time - and Lucas' background was actually in biodiversity, and conservation, and that's where he got his Ph.D. So coming from that kind of environmentalist background, and then working for Eric for a time really got him thinking all the time about the intersection between AI and these hard environmental issues. And when you think about the progress we've made with artificial intelligence just in the last 15 years - it's astronomical.

I'll give away my age here a little bit, but when I finished grad school - I did my grad school in... Actually, my degree is in artificial intelligence, which gives you an idea of how long ago I did my thing, that that was still a degree then... Now that's way too broad a field to have as a degree. Now it's NLP, or Computer Vision, or whatever. But back in the day - this was maybe 16 years ago at least when I got my degree in AI... We've made such progress since then. With deep learning, just in the last ten years or so, we've been able to solve really hard problems, like automatic machine translation, and speech recognition, and a lot of these other things.

So the idea was since machine learning is having this exponential effect, could we apply it on hard things like climate change, or being able to conserve animals that are going extinct at a rate that's like thousands of times the natural rate currently, or how to grow more food on land in a sustainable way, so you're not burning out the land - you know, you can get the short-term benefits, but then it's not good for the land long-term - but to be able to increase the yield while still doing it in a sustainable way, and then provide clean water to people... So all of these really hard challenges - what would happen if we applied machine learning to them? That's what was keeping Lucas up at night.

\[00:04:40.16\] So he wrote a white paper, and that white paper became the basis of essentially the AI for Earth program. At its heart, at the beginning, it is a grand program, so Microsoft publically committed 15 million dollars over a five-year timeframe, and that is money that is available as grant money to anyone who is doing machine learning or data science work in the areas of agriculture, water, climate change and biodiversity. Anyone of those four is fine. It can be a startup, it can be a non-profit, large corporations, independents - anyone at all is welcome to submit a grant, and we accept grants on a quarterly basis. I think the next deadline is in April 2019, and so folks are welcome to apply for a grant.

That's kind of the start of it, but our aspirations are even grander than that. As you said in the intro, I am an engineer, so I wanna be building models, I wanna be doing the fun data science work myself, so we're actually doing a great combination of that. We partner very closely with Microsoft Research, so there's several Microsoft Research projects that we're funding and working very closely with, where actually our engineering team is building some of our own APIs, where we take models that may be useful to a number of people who are doing sustainability efforts, and then exposing those models as APIs, so that people could call them and utilize them.

And then the third bucket of engineering work is in the area of our AI for Earth grant recipients, so being able to support them wherever they're at in their machine learning journey. Some folks that we work with are these brilliant environmentalists, but maybe they don't have as much of a machine learning background. They have these fantastic datasets, and so we help them get started with how they can apply machine learning techniques to that data. And then some people are Ph.D.'s in machine learning academics and such, and those people may be just absolutely brilliant at machine learning, but maybe they wanna know how to use Azure to be able to scale out their work, or get results faster, any of those things. My job - I actually own the three E's for AI for Earth: Engineering, Evangelism and Education.

**Chris Benson:** That sounds like a fun job right there.

**Jennifer Marsman:** Oh, it is... So I'm just trying to work across those -- it's a lot of work, a lot of stuff, but really exciting to be able to be a part of it.

**Chris Benson:** That sounds super-cool. It sounds like you both fund these other projects that are out there through the grants that you talked about, but you also mentioned that you have your own engineering teams...

**Jennifer Marsman:** Right, right.

**Chris Benson:** So what kinds of things would you focus on helping other people from a grant perspective, what kinds of things with your own engineering team, and how do those interact?

**Jennifer Marsman:** Yeah, great question. Essentially, the grant proposes are whatever people submit; those are not something that I have control over, it's whatever people wanna submit. We accept things that seem feasible, that seem like they're doable. We wanna make sure they have a dataset that will actually work, and something that seems like it's possible... But as long as it's a dataset that would support what they're trying to do, it seems feasible and it seems like they have the knowledge and background that they could do it, it's probably worth at least a small investment of Azure - give them at least some Azure credits to let them try it, that sort of thing.

Then our own engineering team - what we're trying to focus on is are there things that we could build that are things that would work for a large variety of people? The way that I think about it personally - and this is kind of just Jennifer Marsman speaking, not an official AI for Earth thing...

**Chris Benson:** No worries...

**Jennifer Marsman:** \[00:08:25.11\] ...but for me, I try to think of what are things that would be useful to a variety of people? Because a lot of times the way a grant recipient should work -- let me take a quick tangent...

**Chris Benson:** Sure, take it.

**Jennifer Marsman:** For a long time, there was a guy - who actually does a lot of speaking now about AI in China, Kai-Fu Lee, who has worked at Microsoft, and Google, and such... So he's also a big venture capitalist and funds a lot of startups. And one of his words of wisdom about startups is that startups should never build the platform, they should build the product. They should solve one specific problem and solve it well, and then expand out to a platform. So I think about the work that these non-profits and academics and such are doing the exact same way. I think that a lot of times they are trying to solve such a specific problem, like "I need to be able to predict flooding for this particular river in Africa, in this one place in Africa." So it's a very specific problem, and they shouldn't focus on the \[unintelligible 00:09:25.19\] They should solve the problem that they need to solve, because if it's a non-profit trying to solve a thing, they need to focus on their mission, right? So what I think our teams should be focused on is taking that step back and building real APIs... Like, "Okay, is there a way that we can then build things that would work for a wide variety of people, kind of in the spirit of that 'rising water lifts all boats', so that we can enable the entire sustainability community to do great work?"

We've started with two specific APIs that our engineering team has produced. One of them is around land cover mapping. Essentially, if you're not familiar with land cover mapping, what that means is that given some aerial imagery as input - typically, what we're using is four band imagery, so it's the NAIP imagery, if you're familiar with that... But it's essentially RGB, so natural color, as well as a near infrared channel; those are the four bands. And then take that as input and then be able to say "Okay, pixel by pixel level (we're actually doing it at one pixel resolution) is this water, or tree, or barren, so essentially it's a road, or a house, something you can't build on?" and we have this enumeration of different classes. So pixel by pixel level, we can enumerate those things. That's great for use in disaster-relief kind of work, or flood levels, realizing "Okay, where are the water lines now?", it's great for urban planning, it's great for a lot of different scenarios.

**Chris Benson:** Absolutely.

**Jennifer Marsman:** So that's one great, general purpose thing that we have an API for, that's available already; if people would like to email, I think it's aiforeartapis@microsoft.com.

**Chris Benson:** We can add that to the show notes later on as well. So we can check that and make sure that's good.

**Jennifer Marsman:** That would be perfect. Thank you, Chris.

**Chris Benson:** Sure.

**Jennifer Marsman:** And then another one we're working on is iNaturalist - if you're familiar with them - has released a large public dataset. They do really amazing work, and we've partnered with them, and have given them some funding as well. And what they have... If you haven't downloaded it - oh my gosh, you should, because it's really good. They have a really great mobile app that's available for iPhone and Android, and essentially what you can do is they have a classifier that allows people to -- you can take their app, and then wherever you are, any animal, any plant or any fungi, you can actually take a picture and then record an observation of where that is in nature. Then biologists and such can use that data to get a good sense of the ecological makeup of any given area... And it's just citizens, scientist, everyday people like you and me who might care about the environment, but are not necessarily a biologist, can take pictures, and then that way scientists know that "Okay, this particular species of plant is located here", and "This animal was seen here" and so on.

**Chris Benson:** That's fantastic.

**Jennifer Marsman:** \[00:12:22.04\] It's so cool! And what's really nice is that they released this dataset, and they make it available for folks. So we actually trained a classifier that will distinguish between -- it's remarkably accurate for plants and animals, giving you the species. So given an image of something, here's the species. It will return the exact species name. You can do this across animals, you can do it with plants, and I believe here at this conference Grant van Horn is actually speaking on iNaturalist. He did a lot of the machine learning work behind that.

**Chris Benson:** Okay, can't wait to hear him speak then.

**Jennifer Marsman:** Yeah, it's really cool. It's really amazing stuff. So they're one of our grant recipients as well.

**Chris Benson:** Awesome. A little follow-up question to that - normally, when most people are thinking about Microsoft, they're thinking about technology, they're thinking about cloud, they're obviously thinking about Windows, and Office, and other things that Microsoft is doing... How did they get into this in particular? What was the motivation for the company to back this?

**Jennifer Marsman:** Yeah, great question. As Microsoft's chief environmental officer, Lucas owns not only the AI for Earth program, but he also owns our environmental sustainability work... And in terms of environmental sustainability, Microsoft has won numerous awards for that. We've been carbon-neutral since 2012, we actually have different departments inside Microsoft pay a carbon tax to offset usage, and flights, and stuff like that... We pay a carbon tax, and that's something that was not very popular when first introduced at the company, but it has been great. But the way we look at it is even if Microsoft was absolutely perfect... Let's say our data centers were all completely underwater data centers, and everything was just fabulous - that's only so much; there's only so much impact that Microsoft as a company is having just in our own operations... So how could we scale out even more? AI for Earth was really our answer to that question. By dedicating this 15 million dollars over five years to people, that enables everyone to be able to partake.

What I love about that is that we are asking often times the people with the least resources to solve the world's hardest problems. It's non-profits, it is the sustainability groups academics who are asking us all these hard problems of climate change, and reducing the rate that these species are going extinct, and a lot of other really hard challenges. So this is a way that Microsoft can dedicate what we're good at - namely, we can provide machine learning knowledge, and we do that through the education arm of AI for Earth program, as well as our data center. So here's Azure, here's all this infinite compute power with using the cloud - great, use this. That gives people both the knowledge and the access to cloud that they need to help them be successful in their areas of expertise.

These folks who are grantees tend to be good at the stuff that I'm not good at, which is the environmental end of it, and that strong domain knowledge in the areas of agriculture, and water, and such. So put those things together and you can do something really powerful.

**Chris Benson:** That sounds great. Do me a favor and in your mind think of maybe one of your favorites that have come through, and take us through what it looks like, from the point where they decide to apply, how you help them, what are the different -- both from what you might call the business side of it, as well as the machine learning side, and just give us a picture, because there may be people out there, non-profits listening to this right now that suddenly jump at this opportunity... Tell them what this project will look like when they engage you.

**Jennifer Marsman:** \[00:16:02.04\] Absolutely. Okay, so... Chris, I'm gonna have a really hard time choosing a favorite, because there are so many good stories. Our grant recipients are doing such amazing things...

**Chris Benson:** Okay...

**Jennifer Marsman:** Let me tell you a few stories, and then we'll go back to the "If you're a startup, how do we get started here?" or "If you're a non-profit, how do we get started?"

**Chris Benson:** Sounds good.

**Jennifer Marsman:** Alright, so let me do one in particular that is something that's kind of inside of Microsoft Research, and then one grant recipient. So let me do a Microsoft Research one first.

**Chris Benson:** Sounds good.

**Jennifer Marsman:** Okay, so there is an amazing gentleman by the name of Ranveer Chandra, who is part of Microsoft Research, fabulous guy, very smart; he got his start doing networking in battery technology, which kind of cool, and he -- essentially, there is a very, very hard problem where by the year 2050 it is predicted that the amount of food that we can grow is just not gonna be sufficient, in no way.

**Chris Benson:** I've actually heard this separately, outside of this.

**Jennifer Marsman:** Yeah, yeah. I think it was spoken at the meeting of the United Nations in 2009, someone put forward something -- we need to essentially double our current rate of food production if we're gonna be able to feed everyone, with the world's growing population rate.

**Chris Benson:** Right.

**Jennifer Marsman:** So he started really trying to think about that problem, like "How could we solve that? What kind of things can we do?" So he hit on the idea of precision agriculture. I wasn't familiar with this prior to joining the team, so let me explain it for folks who aren't familiar... The idea behind precision agriculture is instead of, for instance, homogenously watering a field, where every part of the field gets the exact same amount of water, like we traditionally do with the large sprinklers and such - precision agriculture or precision irrigation, for example, is "Let's only water the parts that actually need water", because if there's little dips in the field, or things like that, the water runs down, and some of the field may get more water than others.

Obviously, that seems pretty easy to do, because if anyone does any IoT work and has ever played with these things, you can go to Adafruit.com or whatever and get little moisture sensors that you can put in the ground. So pretty easy to do.

So I was talking with Ranveer and I'm like, "Okay, this seems doable", and then he told me it actually worked out to about $1,000/sensor to do this. I was like, "You must be kidding me... Here, look at this website. It's much cheaper than that."

**Chris Benson:** So what was driving that cost up?

**Jennifer Marsman:** Great question. The actual sensor, of course, is only like tens of dollars; my next guess was maybe power, right? But it turns out we use solar panels to drive and empower, and those little chips don't take that much anyway -- that little board doesn't take that much power anyway... And a solar panel is like $50 to $100, so you're still nowhere in the neighborhood of $1,000. It turns out where that $1,000 is coming from is actually connectivity - getting data from the actual farm into the cloud. There's actually a couple different ways that we can handle that.

A lot of times when you think about it, in this farm, if you've ever driven through a more rural area and your cell phone coverage kind of goes out...

**Chris Benson:** I have, yup...

**Jennifer Marsman:** The cell phone coverage tends to not be quite as good, because there's not the population to support it, and then when you think about third-world countries and stuff like that, where the wireless access may not be as good, or... Wi-Fi is good, but the problem with Wi-Fi is that it only stretches so far. I know when I'm going to get my kids from the bus stop across the street - I'm literally right across the street from my house and I can't reach the home Wi-Fi.

**Chris Benson:** You lose it.

**Jennifer Marsman:** You lose it, right? So if you're dealing with hundreds of acres of farmland, you would need a million Wi-Fi repeaters, so it's just not feasible. So there's actually two different ways we've solved this problem; one of them used machine learning, and one of them uses cutting edge networking technology.

\[00:19:40.25\] The first one, using machine learning, is you can actually reduce the number of sensors that you need by putting sensors in fewer places, and then augmenting that with either drones flying overhead, or other ways of collecting aerial imagery. Then you can feed a machine learning algorithm both those aerial images, as well as the data from the sensors that you do have, and from that be able to extrapolate the values of the entire field. So essentially, conceptually, what the machine learning model is using is visual smoothness, as well as spacial smoothness. So the idea that two things that are close together are likely gonna have similar values, and then things that have similar color... Think of if we have a patch of farmland that's darker, because it's been freshly watered, and another patch is darker - those two both dark patches might indicate that they have similar amounts of water applied to them... So that sort of thing.

**Chris Benson:** It makes me think of topographical maps with the contours on them, maybe \[unintelligible 00:20:40.08\]

**Jennifer Marsman:** Yeah, exactly. Having that information, feeding both of those in, we have a machine learning model that's based on Gaussian processes that can extrapolate and then give you, essentially "Here's the amount of water in the field." So that's one example.

The other part of it that's really cool - not as machine learning related - is that he also brought in his old networking background to do the concept of television white spaces... This is really cool, Chris.

**Chris Benson:** \[laughs\] And for the audience, she's leaning in and she's so excited about this...

**Jennifer Marsman:** I'm so excited! So this is the idea of using unused television channels to be able to send data packets over your own internet. So think about it - a television station can broadcast very far, because it's lower spectrum, so those frequencies are gonna stretch further... So you can actually use one television \[unintelligible 00:21:29.02\] router and it can stretch miles and miles and miles; tens of miles. That's a really cool thing, and a lot of times when you get to these either third-world countries, or rural areas where we're setting these things up, there's a lot of unused television stations, so a lot of empty bandwidth there... So you do have to work with the local government, you can't just start broadcasting things on television...

**Chris Benson:** Sure, it's regulated.

**Jennifer Marsman:** It is very regulated... But if you work with the government, you can actually send data over these television channels, so that's the other part of what they're doing, and that's also driving down the cost as well.

**Chris Benson:** That sounds great.

**Jennifer Marsman:** It's such cool work... It's amazing stuff. So that is called FarmBeats (the name of the project) and I can provide a link to that in the show notes as well.

**Chris Benson:** Absolutely.

**Jennifer Marsman:** Okay, and then let's talk about one of our grant recipients, our fabulous AI for Earth grant recipients. I love all of them, and they're all doing such cool work, but one in particular that would be fun to talk about is a company called Wild Me, and their platform is something called Wildbook. The problem they're trying to solve is to be able to recognize individual animals... So not just a zebra, but rather "This is Ziggy the Zebra, versus Zoey the Zebra." Like, Zebra 5715, kind of thing.

This can be really helpful, because when you think about it, there is actually an amazing article -- well, not an amazing; a very sad article in National Geographic a while back where some folks were actually trying to tag this rare whale in the Pacific North-West, and they actually batched the tagging jab and ended up killing the animal, which is the exact opposite of what they wanted to accomplish by tagging it... It was such a rare animal, they wanted to track it, and all that sort of thing. So the idea is can we use computer vision to do that instead? When you understand the animal population, that can drive so many benefits... You can estimate population densities, you can track migration patterns, all kinds of cool things.

**Chris Benson:** And as you answer this, how are they gonna use computer vision to accomplish this particular task?

**Jennifer Marsman:** Great question. They are taking images, and training essentially a Wildbook per animal. When you think about it - I don't know if you've ever heard this, but you know how humans have very individual fingerprints, where each of us has a unique fingerprint... Well, with zebras, their stripe patterns are unique.

**Chris Benson:** I've heard that as well.

**Jennifer Marsman:** And then same thing with giraffes; the spot patterns on their long necks have uniqueness.

**Chris Benson:** Really, I didn't know that.

**Jennifer Marsman:** \[00:23:56.03\] Yeah, and then the shape of an elephant's ear, the spot patterns on cats... So they've actually created a Wildbook for a lot of different large mammals, and they train it with this kind of data. Then they're able to recognize individual animals, so it's a very cool process. But here's where the story goes from good to great - get this part.

**Chris Benson:** Okay, I'm waiting...

**Jennifer Marsman:** They actually are then augmenting their data using social media. One of their Wildbooks is WhaleShark.org. That is the Wildbook for whale sharks. And let's imagine that some random person goes on a whale watching trip, and they see whale sharks and they're taking videos of them and then they're posting them to YouTube. Well, Wildbook has an intelligent agent that wakes up every night at 10 PM and it searches the internet, and it looks on the social media sites, and then it will find instances of people -- using just natural language processing, or just regular search, you can find people who are posting about whale sharks, and then they're extracting frames from those videos, and then running their object detector to find the whale shark in the object, and then classifying those things and recognizing that individual animal. So they're finding both new whale sharks that way, that researchers haven't been exposed to before...

**Chris Benson:** That is cool!

**Jennifer Marsman:** Isn't that great? Isn't that so much better than using Instagram to show your food? Like, what an innovative use of social media.

**Chris Benson:** I could be on a vacation with my family, or on a boat, we see a whale shark, we take a picture, we tweet it, and then later on that evening it comes and not only is it able to detect it, but it's also able to know exactly which individual in the population we're looking at. Is that correct?

**Jennifer Marsman:** That is correct. And they actually give you a little comment, which is kind of cool. The agent is looking for not only the animal, but it also wants to know the when and the where - so when did they see that, and where did they see it... So they're actually using some NLP on the YouTube page itself, for example; if it said "Last month we saw this" and you get the post date there, their NLP is good enough to do the math and figure out "Okay, it's approximately this time", and then where, and again, they'll try to extract that from the video... But if they can't, it will post a comment and say "Oh, where did you see that?" Or they'll take whatever information is missing, post the information, and then get that data back.

Then they actually post a little comment saying "Hey, your picture was able to help science, and help this conservation effort", and then they'll point to the page of that particular whale that they've contributed images to, which is really nice. So YouTube is a great one, because that all is public domain by default; any public things are shared, based on their licensing... So anything like that, where it's a public image, they can track those kinds of things and then be able to utilize that for data... But it's really cool, because then you can go click on it and be like, "Oh, there's my whale shark that I saw."

And they have some neat stuff where they allow people to nickname them, so you can give your whale shark a name, and stuff like that... And then you can see other images that people have taken of them, there's like an "adopt a whale" feature type thing.

And this is why they call it Wildbook - they call it "The Facebook for animals", because it actually shows \[unintelligible 00:27:04.27\] so the social graph of "This whale has been seen with these other whales." So you can see exactly some of the parent/child type relationships, and friends...

**Chris Benson:** So you get the whole graph of the relationships that the whales have with each other.

**Jennifer Marsman:** Exactly!

**Chris Benson:** That's pretty amazing.

**Jennifer Marsman:** Isn't that neat? And then using the "where" information, you can see migration patterns of individual whales. It's phenomenal stuff... Oh, it gets me so excited!

**Chris Benson:** So all this sounds incredibly fascinating; I'm an outdoors person, so I'm particularly interested in covering this, and frankly, this may be the first Practical AI episode that my six-year-old daughter wants to listen to, because she's really into animals, and stuff... I suddenly have a hook for the family on this.

So if you are out there and you are interested in engaging you guys, I guess one of the big challenges obviously is datasets... Do you have any recommendations on where people can find datasets that will help them? Do you all have a repository? Are there good go-to sources that you recommend?

**Jennifer Marsman:** \[00:28:10.23\] That is an awesome question. Ten points to Gryffindor! \[laughter\] So we are actually in the middle of that process right now. Currently, we are collaborating with several other organizations, and we established something -- if you go to http://lila.science, that is a repository of camera trap data, which one of my esteemed colleagues, Dan Morris, is very passionate about camera trap imagery... So he started putting together this dataset on lila.science. Lila is actually a reference to that library of Alexandria, which is kind of cool.

So that is available today. There are several datasets that contain lots and lots of different animals and imagery there, so that's one great start that we have right now, and we're trying to do even more work. I would love to be able to -- we're currently in the process of trying to host more and bigger and better datasets, so that is work in progress. Hopefully, this time next year I will have even more great datasets to share with you.

In the meantime, Kaggle is also a wonderful resource...

**Chris Benson:** It always is, yes.

**Jennifer Marsman:** Oh my god, I love Kaggle. Isn't it the best?

**Chris Benson:** It is.

**Jennifer Marsman:** Kaggle is another great resource. They always have AI for Good type challenges on there. Currently, there is some great earthquake-predicting data that's there, there's an "identify a whale" type data, which is very similar to the Wile Me work... So there's so many cool sources for datasets, but we're trying to compile even more of that as part of our AI for Earth mission, as well. So we have a start, but we wanna go even further with that.

**Chris Benson:** Gotcha. So what types of deep learning algorithms do you find that are the most common that you use with people? Are there areas in particular that are on the rise, or that you're most interested in, whether they be CNNs, or GANs... Or even, if we move over into reinforcement learning and such - what are some of the things that you're seeing out there that are news?

**Jennifer Marsman:** Yeah, great question. In particular on the Ai for Earth space, a lot of the problems revolve around computer vision. A lot of things just seem to reflect, "Okay, given this data...", maybe there's cameras in a farm, or something, and we want to recognize pests on leaves, that sort of thing is one example. Or we're trying to recognize in camera trap -- I should mention, I haven't defined camera trap... What that means, for those who aren't familiar, is mounted cameras that are usually enclosed in water-proof casing, that may be mounted in trees, or other remote places. We've worked with snow leopards, for example, and those guys are so elusive, they're so quiet, they're so hard to spot...

There's one researcher that devoted his life to snow leopard research, and he was up in the mountains, living in the area, and only saw a snow leopard twice in 11 years.

**Chris Benson:** Really?

**Jennifer Marsman:** It's insane. So you really need camera traps to be able to do that.

**Chris Benson:** Sure. So they detect motion...

**Jennifer Marsman:** Exactly. Only the problem with a camera trap, the thing that's historically challenging about camera trap data, is that animals don't line up nicely for their selfies, right? They're not in the middle, so there's an animal sniffing and you'll get a close-up of a nose that's kind of checking out the mounted camera itself... Or you'll get them very far away, or if it's at night, which is when a lot of animals are most active, you'll see two eyes squinting out of the darkness, and it's hard to tell what they are...

So there's all kinds of fun challenges with camera trap data, and that in particular is one thing... But that's very much a computer vision problem. Of course, computer vision -- convolutional neural nets (CNNs) are a good way to go there...

**Chris Benson:** Absolutely.

**Jennifer Marsman:** \[00:31:54.22\] So there's a lot of work in object detection and computer vision... Also with climate, so given satellite imagery, for example spot the little swirl that means a hurricane is gonna form, or something like that. Or in the water space, there's like monitoring plastic flow into the oceans, which another group, Ocean Cleanup, is doing, that we've worked with... And they have mounted cameras on bridges, and then as water flows underneath, they're tracking plastic flow going into the ocean... And being able to tell the difference between a water bottle and a fish, or pieces of plastic, is actually harder than you think, because they're both clear or silverish in the water, and that sort of thing... So it's just an interesting problem.

**Chris Benson:** As a side thing, before you go on, do you actually have a project associated with that this time?

**Jennifer Marsman:** Yes, there is. So the Ocean Cleanup has done a lot of great work with them, and they actually came to Microsoft for one of our hackathons, and have partnered with some of the folks here as well... But they are doing amazing work in terms of tracking plastic flow into the ocean.

**Chris Benson:** Yeah. I mean, everyone is hearing in the news these days about the giant amount of plastic that's particularly in the Pacific, and what's being done to help that, so it's really interesting to hear about something...

**Jennifer Marsman:** Yeah, Ocean Cleanup is a great organization, doing exactly that.

**Chris Benson:** I love hearing about how these technologies that we love so much are being used to solve these real-world problems, that we actually hear about in the news, or watch TV on, and stuff.

**Jennifer Marsman:** Right, right.

**Chris Benson:** So I guess other than CNNs, is there much room for things like natural language processing, or capsule nets, or GANs, or anything?

**Jennifer Marsman:** Great question. I actually would love a good RNN problem, so if anyone has any -- because we have a few of them... One of our AI for Earth grant recipients is doing some work working through text, to be able to find what makes a difference to people the most. For example, let's pretend there's all these fliers or communications that go out to people - what actually inspires them to act to prevent climate change, that sort of thing...

**Chris Benson:** Sure.

**Jennifer Marsman:** So they're doing some NLP work around that, trying to find the most motivating things for people. I know that's one particular project. And there's a couple of chatbot-type scenarios, but there's not as many RNN things as you would think. And then GANs I am just in love with, as I think everyone is.

**Chris Benson:** Yeah, we all are...

**Jennifer Marsman:** Yeah, they're the hotness right now.

**Chris Benson:** And it keeps expanding. There's so many more use cases, even month-by-month right now.

**Jennifer Marsman:** Yeah, so if anyone has a good GAN project, let me at it! I'd love to see a few more GAN projects here. There's a few GAN projects, but again, it's primarily dominated by convolutional neural networks and computer vision problems.

I will say on reinforcement learning I think that is another really big area for AI for Earth in particular, because if you can do things like modeling climate change, and then tweaking different variables, using reinforcement learning to run simulations and see "As I toggle these different things and I try these different actions, what is gonna make the most impact and help us fight climate change the quickest?" That's a great area for reinforcement learning as well.

**Chris Benson:** That's fantastic. You know, the thing that I love about all these stories you're telling me is that, you know, historically we've gotten into data science, and then we might do environmental things on the weekend, or as a hobby, or donating our time to charity, but for most people it's kind of a separate activity. I love the way your team has brought this together to where you can both have a career in this field and also do tremendous good for the world. As people realize that Microsoft is there supporting organizations and people that wanna do this work, I think it's a fantastic, whole new way of using artificial intelligence and machine learning technologies to do this.

**Jennifer Marsman:** Absolutely. You had asked earlier about how people could get started...

**Chris Benson:** Go for it.

**Jennifer Marsman:** \[00:35:58.04\] Yes. If you go to the AI for Earth we page, please come join us, come help us save the world... Because my background is in machine learning and AI, but there's some folks on the team who are stronger at the Earth side, some people are stronger at the AI side... I'm definitely one of the AI people, and I'm just in awe of what people are doing, these amazing environmentalists and conservationists who are working so hard on these huge problems that face our Earth... So if there's anything Microsoft can do to help, I would love to support folks.

People are welcome to apply for grants. Again, we evaluate all the applications every quarter... So I think it's January, April, October, and -- I'm forgetting, but every four months we evaluate proposals and then give things out, or award grants. We have a couple different grant types. One of them is just standard Azure compute hours, so just getting some cloud computing time... We actually have a data labeling grant as well now, where if you have a great dataset, but you need to pay someone to get it labeled, and sometimes it may be a specialist, it's not something that a Mechanical Turk type thing can solve, because you need very specialized knowledge of climate, for example, to be able to read these satellite things, to label it properly... So we actually are providing funding for data labeling, as well.

**Chris Benson:** So before you even go in, that is fantastic, because I know in real life, at the companies that I have worked for, that has been one of the biggest problems about getting a project off the ground... Is not only getting the dataset, but then after you have it, getting it labeled in a useful way, so you can use it, and at times that can slow down a project by weeks or months to get that done... So I love that.

**Jennifer Marsman:** Oh, I completely agree, Chris. For those machine learning folks (and everyone listening), this can probably relate - data is the hard part; algorithms are the easy part. Getting the data, and getting it in the right format, all that stuff is usually 85% of the work.

**Chris Benson:** Sure.

**Jennifer Marsman:** So I completely agree, we're on the same page there. It's "How can we help people...?", if you think of it as a pipeline of "Okay, we start with some data, and then we need to get to this stage, and this stage...", we're trying to find things to help at each stage of that pipeline... So the data labeling grant is essentially "How do I get from just having some data, to actually having data that is useful, that a machine learning algorithm can consume?" ...or a supervised machine learning algorithm, I should say.

**Chris Benson:** Fantastic.

**Jennifer Marsman:** Yes, and then we provide education as well. We have some online resources that we've compiled for our grant recipients. I hold office hours monthly, so that people can just show up and ask questions, and then we also twice a year have an AI for Earth Summit, where we bring some of our grant recipients to Redmond, Washington, where Microsoft's main campus is, and we give them training... So it's like a day of training, there's networking opportunities, which is great, because if someone is working on hard agricultural problems in India, and someone else is doing it in North Carolina - great; we see people coming together, and collaborating, and sometimes sharing datasets for getting even better results... So it's really amazing to see the power of what we can do collectively like that.

**Chris Benson:** I would love to be able to see that, and actually talk to these people with these passions first-hand, sometime...

**Jennifer Marsman:** Oh, you should maybe come do a podcast there.

**Chris Benson:** I may come do that. Be careful what you offer here. So as has been mentioned before, we are at Applied Machine Learning Days in Switzerland, and you in just a few minutes are about to go up and give your keynote... Could you tell us quickly a little bit -- by the time this airs, it'll be past that, but could you tell us a little bit about what you're gonna talk about?

**Jennifer Marsman:** Yes. So what I'm going to do is I'm going to try to cover the basics of the AI for Earth program. Basically, not spend too much time on that, but just let people know that it's a resource that's out there... Because the worst thing is when there's this free pot of money that people don't know about.

**Chris Benson:** Sure.

**Jennifer Marsman:** So just spread awareness of the grant program, that it exists... And then I'm just gonna tell a couple stories of AI for Earth grant recipients and what they've done. We'll talk about Wilde Me, we'll talk about FarmBeat, which we've already spoken... And then the final thing I'm gonna talk about is another project, Project Premonition, which also started with Microsoft Research. This one is very cool as well - it's focused on how can we predict outbreaks of disease before they happen? Think about like Zika virus, and West Nile, and mad cow disease, and some of these things that we've seen in recent years.

\[00:40:15.05\] The idea here is "Is there a way we could get out in front of that and be able to predict these things before they happen?" and the way -- this is so cool... So the principal researcher on this one is a guy by the name of Ethan Jackson, and the idea behind this one is what if we take advantage of little data collectors who are out in the environment already, collecting random blood samples? And those are, of course, mosquitoes.

**Chris Benson:** Oh, yes...

**Jennifer Marsman:** If you can use mosquitoes as data collectors, they're collecting all these random blood samples; they bite humans, they bite animals...

**Chris Benson:** They're indiscriminate.

**Jennifer Marsman:** Exactly. They're getting a great random sampling of the environment, and feeding off of these various hosts, and so what we do - there's two big contributions of this work. Number one is a smart mosquito trap that can selectively just trap mosquitoes. Other insects can go in and go out of the trap; they'll head in, check out the lure, and then fly away... And then there's little trap doors and they only close if it's a mosquito. And we can actually differentiate between species of mosquitoes as well. I did not know this prior to this work, but it's actually the aedes aegypti species of mosquito that's responsible for Zika, and then there's a different one - the culex is responsible for West Nile... And all the other things. It's fascinating. So we can actually differentiate between those two species of mosquito if we need to focus on one disease or the other, which is very cool.

And 75% of these large diseases actually originate with animals, and then come to us. And I know a lot of them have these cutesy names of like mad cow disease, or avian flu, or some of these other things, but a lot of them, outside of the ones with the cutesy names, do actually start with animals and then spread to us. So if you can catch them while they're still at the animal stage, that's great.

So the first thing is the smart mosquito trap, which uses machine learning to be able to differentiate mosquitoes from other insects. The second big contribution of this work is our metagenomics pipeline. What we've done there is now that we have those mosquitoes, we can actually take the blood meal they've consumed, reverse-engineer it and be able to tell what host animal it came from and what diseases they carry. Then from that, you can actually get a sense of what diseases are there, and then recognize them before the outbreak happens.

**Chris Benson:** That's amazing.

**Jennifer Marsman:** So cool. Such amazing work.

**Chris Benson:** I am looking forward, I'm gonna come watch your talk; I can't wait to see it. I wanted to finish up by saying how can people listening reach out to you or to the organization, and start that conversation with you?

**Jennifer Marsman:** Great question. I am on Twitter, so you can find me @jennifermarsman on Twitter. I have a blog as well, which is blogs.msdn.microsoft.com/jennifer. Then the AI for Earth team has a great website, and there's information about the grant program and such on there, and some of our amazing grantees - it's all available on the AI for Earth website, which is microsoft.com/aiforearth.

Then you can also contact us -- I think there's another Twitter account, @microsoft\_green, which deals not just with the AI for Earth, but other environmental initiatives around Microsoft.

**Chris Benson:** Alright. Well, Jennifer, this has been a fantastic conversation. Thank you very much for taking some time out of your day. I know you're rushing around, doing a lot of stuff, but it was a fantastic conversation. Thank you so much.

**Jennifer Marsman:** Thank you.
