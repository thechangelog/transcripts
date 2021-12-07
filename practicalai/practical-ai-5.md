**Daniel Whitenack:** Well, Chris, having a background in physics, I'm pretty psyched about today's show. Today we have Chris and Andrew joining us. Chris Shallue and Andrew Vanderburg. I'm really excited to talk to them.

I remember seeing a blog post about their work quite a while ago. It was one of the most interesting and exciting things that I've seen in a while related to AI, because of my background and AI being applied to this physics data... So I'm really excited to talk to them. Welcome, Chris and Andrew.

**Andrew Vanderburg:** I can't wait.

**Chris Shallue:** Thanks for having us.

**Chris Benson:** Yeah, thank you.

**Daniel Whitenack:** Why don't we start off? Andrew Vanderburg - is that how we say your name?

**Andrew Vanderburg:** Correct.

**Daniel Whitenack:** Excellent. Well, why don't you give us a little bit of intro to yourself, where you're at and what you're working on right now?

**Andrew Vanderburg:** Yeah, so my name is Andrew Vanderburg. I am a post-doctoral fellow at the University of Texas at Austin. What that means is I basically have a three-year job to do research into anything I want related to exoplanets. I kind of have a free rein to do anything I want research-wise in the realm of exoplanets, and a lot of what I'll be doing we'll talk about today on the show.

I got my undergraduate degree from the University of California Berkeley, and then I went to graduate school at Harvard University and I got my Ph.D. last year in 2017.

**Chris Benson:** Congratulations.

**Daniel Whitenack:** Awesome.

**Andrew Vanderburg:** Thank you.

**Daniel Whitenack:** Yeah, congrats. That's a great thing, to have that freedom and be able to explore what you want.

**Andrew Vanderburg:** Yeah, it's really fun.

**Daniel Whitenack:** Awesome. And then we have Chris Shallue. Am I saying that right, Chris?

**Chris Shallue:** Yes, that's correct.

**Daniel Whitenack:** Excellent. I got lucky. Chris, why don't you give us a little bit of intro to yourself?

**Chris Shallue:** \[03:55\] Sure. My background is actually a bit of a mixed bag... I started out in mathematics; I was studying mainly pure and applied mathematics in my undergrad degree in Australia, and then I did some research in pure mathematics... But after a while, I kind of wanted to do something with a bit more of an application into the real world, rather than the theoretical world, so I briefly moved into research in biomechanical engineering.

I realized after a short period that that wasn't really for me, and so I then decided to apply for a job at Google, just because I knew that Google was doing some really exciting and interesting work that I thought I would love to be a part of... So I applied for a job at Google, and that was about four and a half years ago, and since I've been at Google, I'm a software engineer here.

I've spent two years working in ads, trying to make sure we were serving the most relevant ads to users. Now I work in the Google AI department. We do research in anything related to AI. We have a pretty varied portfolio, obviously, because here I am, talking about astronomy... And yeah, so I've been working on this project in astronomy for about a year and a half now, but other things I've worked on here include image captioning, where we try and train a model to automatically caption images with English sentences, which is another kind of interesting thing that I've been working on.

**Daniel Whitenack:** Awesome!

**Chris Benson:** That's cool!

**Daniel Whitenack:** Yeah, it is very cool. Have you enjoyed being in the real world a little bit?

**Chris Shallue:** Yeah, it is great... It's great that now I can tell my friends and family what I do and it kind of makes a little bit more sense. They can kind of understand a little bit more the impact of my work.

**Daniel Whitenack:** That's awesome. So how does an astronomer and a software engineer at Google AI end up working together?

**Chris Shallue:** So I guess I can take this question, because I was the one who kind of pitched the idea originally to Andrew. I don't really have a background, as I said, in astronomy, but I am generally interested in science, and about a year and a half ago I was reading a book about astronomy and the origins of the Universe, and the evolution of life on earth, and the book was talking about exoplanets, and it mentioned NASA's Kepler mission, which we're gonna talk a lot about in this podcast, which launched in 2009.

One of the points that was made in this book is that our technology has advanced to the point, like the Kepler mission, where we simply have too much data for humans to manually analyze... Which is in contrast to traditional science dating back (I guess) thousands of years, where humans would make observations and then just analyze them by eye. And when I read this, I got a bit interested, because once thing that we work on here is problems that have a large amount of data that we need good automated methods to analyze.

I guess I thought it would be really cool if I could discover a planet, so...

**Daniel Whitenack:** How would that not be cool?

**Chris Shallue:** So I did a little bit of research on -- a Google search, basically, and I found Andrew's name as someone who had worked with this data a lot. I basically wrote an email to Andrew, pitching a collaboration with him, and obviously I did a good job, because we ended up working together on this project.

**Chris Benson:** \[08:00\] So I guess - this is Chris - I was wondering, if you could kind of tell us a little bit about what the goals of Kepler are, as well as the project itself, and kind of tie it all together for listeners that might not be familiar with it?

**Andrew Vanderburg:** Yeah, I can talk about that. Kepler is a telescope in space; it was launched in 2009. When astronomers talk about telescopes, one of the most important things that we like to say is how big it is... So Kepler is a one meter telescope, which means that its primary mirror, the thing that it uses to collect and focus light, is about a meter across in diameter.

Kepler was NASA's first space mission specifically designed to study exoplanets.

Exoplanets are planets like the ones in our own solar system, but they orbit other stars, and only in the last 20 years or so has our technology advanced to where we can actually detect them and know that they're there... Because they're just so much smaller and so much fainter and so much less massive than the stars that they orbit.

So Kepler was originally pitched in the 1980's, and over the course of about 20 years a team at NASA kept writing proposals, trying to figure out how they could detect small planets like this... And over the course of that time, technology was advancing, digital cameras were getting better, and eventually NASA decided to fund this telescope.

The main goal of it was to try to figure out how common are the planets about the size of the Earth orbiting around stars kind of like our Sun, at distances far enough away from the start that liquid water can exist on their surface. So basically, how common are planets like our own Earth? Are there other Earths out there, or are we rare, are we lucky to be here?

**Daniel Whitenack:** Were any known at the time that that was proposed?

**Andrew Vanderburg:** Kepler was proposed before any exoplanets of any kind were known. by the time Kepler was originally chosen and given funding to go ahead, there were a handful of exoplanets, but they were mostly very large; the mass of Jupiter or so, and nothing like our own Earth.

Kepler has really ushered in this era of starting to see and know about smaller planets, closer in size to our Earth.

**Chris Benson:** And could you define for a moment what an exoplanet is, for those who might not know?

**Andrew Vanderburg:** Yeah, an exoplanet is a planet just like the ones in our own solar system - Mercury, Venus, Earth, Mars, Jupiter - and the only difference between it and the planets in our own solar system is that an exoplanet orbits a star other than our Sun. That's why they're so much more difficult to find, is because they're so much further away.

**Daniel Whitenack:** Interesting. So Kepler is this big telescope in space, and it's looking for these exoplanets, and Chris mentioned that it's producing a lot of data... I'm assuming this is data that's coming out of the optics and all of those things on the telescope... What does the data look like and how much are you collecting?

**Andrew Vanderburg:** Right. So behind the telescope - I guess inside the telescope is more accurate - is a giant digital camera, and the way Kepler works is that every 30 minutes it takes a picture of about 200,000 stars all at once. This is how it operated during its original mission, which ran from 2009 to 2013, and that's what we'll focus most of our time on today. Since then, its operating has changed a little bit. But during its original mission, it took pictures of about 200,000 stars all at once. That's not really the data that Chris and I are working with though.

\[12:01\] What we look for with Kepler is not trying to take a picture of the planet itself; we're trying to see how bright the star is at all of these times. So what we do is we take the images that Kepler has acquired, we measure how bright the star is in each of those images, and we construct for ourselves a time series, measurements of how bright the star is at every 30-minute interval over the course of about 4 years. That's what Chris and I are fundamentally working with. We call these light curves.

**Daniel Whitenack:** So just for someone that's never done this before, to me, it sounds like -- so you have these images... It sounds like a pretty good amount of data munging, because... Like, if I'm thinking about one of these images - how many stars did you say were in an image?

**Andrew Vanderburg:** Kepler observes about 200,000 stars every 30 minutes, for four years. That's about 65,000 observations of each of those 200,000 stars.

**Daniel Whitenack:** Yeah, so how do you know which dot is the same dot in both pictures?

**Andrew Vanderburg:** Often they don't move very much. This telescope is very steady. It points at the same place and it doesn't move, so you can just track one pixel, and say for periods of time up to maybe a couple of months the star is not going to move from that pixel. So you can just identify that it's around this region, and it stays there.

Then afterwards, after about three months, Kepler has to roll itself, because it doesn't want to look at the Sun, and as it orbits around the Sun, the position of the Sun changes. So it rolls itself to keep its solar panels pointed towards the Sun, and keep it from pointing towards the Sun. And at that point, you've kind of lost everything, because the stars have moved onto different pixels. But you can use the patterns of stars on the sky, you can identify different stars based on what's nearby - basically, like how ancient astronomers used the constellations - and figure out what we're looking at, and then where other stars should be, based on that.

**Chris Benson:** So as you're collecting all this data and it's coming in, how do you decide how to model it and what features you're interested from the data to hone in on for the development of the model? How do you do feature selection? Or is it very narrow?

**Andrew Vanderburg:** Yeah, so for that I think that first I should explain how we actually see the planets, and know that there are planets there in Kepler data, how it was done we started using machine learning... And then I'll let Chris explain a little bit about how we ended up deciding what particular features to use.

So the way Kepler finds planets is that instead of looking for the planets directly and taking pictures of them, it watches how bright the star is at each of those 30-minute exposures it takes... And it looks for small dimmings of light; it looks for times when the star appears to just get a little bit less bright for a short period of time, and then it recovers and it becomes bright again.

**Chris Benson:** And would that be because an exoplanet is passing in front of that star?

**Andrew Vanderburg:** That's exactly right. So an exoplanet is passing in between the star and the telescope, and it's casting its shadow on the Kepler. And because Kepler is so sensitive and so precise, it's able to measure even very tiny shadows, even very tiny dimmings that get cast onto it.

\[16:01\] Fundamentally, what we look for is we look for these dimmings, and we look for them to repeat over and over and over again, because every time it repeats is a different time that that planet has orbited around the star and come back in front of it to where we see it.

**Chris Benson:** Okay. And Chris, I guess can you carry that over into the machine learning model in terms of how you select the features and what you're doing from an architectural standpoint?

**Chris Shallue:** Sure. So the machine learning problem that we are considering here is basically we wanna classify whether a particular sequence of dimmings that we observe on a star was caused by a planet or not... Because as Andrew mentioned, when a planet passes in front of the star relative to the telescope, you'll see the brightness of the star dim and then come back up again. But there are other possible events that can also cause the brightness of the star to dim (or apparently dim), as measured by the telescope.

One thing that can happen is you can have two stars orbiting each other, rather than a planet orbiting a star... And when one star passes in front of another star, you'll also see a dimming in the measured brightness.

Another example is star spots. Some stars have dark spots on them, and the stars themselves can be rotating... So every time that star spot rotates in the line of sight of the Kepler telescope, you'll see the measured brightness dimming because of that dark star spot.

So the machine learning problem that we're focusing on here is, okay, we see this dimming of the star - was this caused by a planet or not? Obviously, one of the main ingredients into machine learning is having a training set of data that has already been labeled. Luckily, in the case of the Kepler mission, which ran -- at least the main Kepler mission ran from 2009 to 2013... Astronomers have paid a lot of attention to the data already, and had gone in and actually classified by eye over 30,000 of these signals. So we already had a training set of these dimming signals, where some of them were known to be planets and some of them were known to be various other phenomena - false positives, like I mentioned... Sometimes even instrumental false positives that can cause the star to apparently dim.

So you asked about the feature selection... I guess there's perhaps two approaches you could take here. One of them is you could kind of sit down and you could think about what features you think are important for classifying one of these detected signals as either a planet or not... And others have actually done this with the Kepler data, and it works kind of well. This is more of a traditional machine learning approach, I guess. You could sit down and you could say "Okay, what's the brightness of the star? What's the period of the dimming that we observe? What percentage of the star's brightness appears to dim?" The signal-to-noise ratio is a statistic that we can measure... And you can feed all those into a machine learning model and use those as features to make a classification.

In this project we actually took a slightly different approach, and we didn't sit down and think about any of those features ourselves. Instead, we kind of treated these light curves that Andrew mentioned as kind of like a one-dimensional image.

\[19:54\] If you imagine that, for example, a photograph is actually a two-dimensional image, right? It's like a two-dimensional grid of pixels. Well, what we have is we have a sequence of brightness measurements over time, and so we treat that one-dimensional sequence of brightness measurements as kind of like a 1D photo or a 1D image. So we trained a type of model called a convolutional neural network, which is exactly the kind of model that we typically use to classify photos, that's actually been very successful in recent years.

So we kind of applied a very similar model to one that is used to detect, say, cats and dogs in the photos you take on your phone, and we applied that to this problem. So we kind of give the input as actually the light curve itself, and that's the only input that our model gets.

**Chris Benson:** Just as a quick follow-up to that - within the family of architectures in convolutional neural networks, is there a specific architecture you selected? And if so, why?

**Chris Shallue:** Yeah, so in this kind of family of neural network architectures there's, I guess, some classic ones; I won't go into the details of them, but basically you have fully-connected architectures, and your convolutional architectures, and your recurrent architectures. These are kind of big categories of neural networks.

Basically, in this project, my approach was just try all of them and see what works... So I did, and it turned out that the convolutional architecture was the one that worked the best, and that actually matched quite well with my intuition, because as I said, we're training this as like a one-dimensional image, and convolutional neural networks have been particularly successful on images.

And in terms of the specific convolutional architecture, the approach was just like "Start with the basics." At this point we have pretty much your vanilla convolutional neural network that you would see in chapter one, or like section one on the chapter about convolutional neural networks. It's actually very basic.

**Chris Benson:** Gotcha. Yeah, if it works, that's what you need.

**Daniel Whitenack:** I'm actually glad to hear you say that. I love you emphasizing the "Start with the basics" and add complication or difference from there, because the basics might work reasonably well.

I'm curious, just being a person that's occasionally developing models myself as well -- I'm assuming that there was no public bunch of neural network architectures out there that people had trained for exoplanets before you guys approached this... Do you have any recommendations for people that might be in kind of a new domain or they're working with a new data set and trying to figure out the best match of a model with that data set...? Do you have any general recommendations around how to start that process?

**Chris Shallue:** Yeah, I think it's a good idea to have a good understanding of the basics, I guess. As I said before -- so I work mainly with neural networks in my job, so if you are gonna wanna train a neural network for your problem, which is often a very good idea, you should know, as I said, what the basic categories of neural networks are. Often, the different categories are kind of well-known to be suited to particular types of tasks.

\[24:05\] Convolutional neural networks are very well known for image detection, anything with an image input. Then recurrent neural networks are very well known when your input is language; so if you have like a translation problem or something like that.

For me, part of it was knowing what the sort of strengths and weaknesses of these architectures were, in what domains they had been successful in the past, and then I guess it was, okay, my problem isn't exactly any of those previous problems, but can I think of it with an analogy to some other problem that has been solved before?

In this case, I have one of these light curves... There's been no models on light curves before, but I can imagine this being an image, but it's just a one-dimensional image. That sort of led me down that path, I think.

**Daniel Whitenack:** Awesome. I appreciate your insight there, because I know I've talked to a lot of people that kind of get blocked on certain things; it's great to hear your process and your thoughts around that.

Andrew, I'm curious... Chris is kind of coming from this side of things where he's maybe used to working with neural networks and that sort of thing... I imagine the number of astronomers working with neural networks -- I mean, it's probably increasing after what you guys have done, but... I mean, none of my astronomer friends when I was in grad school I don't think were using neural networks, so how was the reception of this kind of technique...? When you talked to your colleagues about what you were doing, how was their perception of that? Are people welcoming this sort of approach in the physics community?

**Andrew Vanderburg:** Yeah, so I would say that even before our paper came out, I was starting to pay more attention to all of the papers that came out using these new techniques. The neural network fad hit computer science in the last 5-6 years, and it hasn't quite made it to my field of astronomy, but it's starting to get there... And as we were writing this paper, we kept seeing more and more people starting to work towards this area, and we started to see even people working on this exact same problem, or very similar problems to us, using increasingly sophisticated techniques.

So I would say that our field is starting to catch on and figure out how powerful a tool this is, and start to realize that maybe this tool could provide a revolution in astronomy in the way that it's provided revolutions in other fields, like image processing or translation.

So the reception that I've gotten when I gave talks about this was always very positive. People are very interested in the techniques, they're very interested in the scientific results that we're getting out, and I think they're eager for us to keep working on it and also maybe thinking about doing something similar themselves.

I've had people come up to me and ask "What do you think about using a neural network for this problem?" and I'd say "Well, you should ask Chris, because I'm not the expert here." But I think that in a lot of cases, yeah, there is a really strong interest in this in the field.

**Daniel Whitenack:** Yeah, so I remember I did some computational chemistry sort of stuff in my research, and I remember right at the time (a couple years from graduating) someone started applying machine learning techniques to basically do what we are trying to do analytically... And I think at the time I felt a little bit threatened by it, because I felt like I was being machine-learned out of a job maybe... But at that time I really had no perspective, so it's great to hear that there is some excitement around that.

**Chris Benson:** \[28:13\] I've got a quick question for you guys... Did you run into any kind of challenges on your side, in terms of getting the data ready, having the right data, training, validating, or anything? Or was it pretty smooth sailing all the way through for you?

**Daniel Whitenack:** I bet the first model that they trained was the one in the paper, that's my guess. These guys are pros, Chris. \[laughter\]

**Chris Shallue:** No, I think it was probably number 100, or 200, or something like that... \[laughter\] Actually, I can think of a couple challenges we've faced. I've mentioned before that scientist had actually classified about 30,000 of these, which if you think about it, it's a huge number of light curves to have analyzed by eye... In most cases, I think more than one astronomer actually analyzed each of these light curves. But in the world of machine learning, having sort of tens of thousands of training examples is actually pretty small.

We typically work with data sets in the hundreds of thousands, if not millions... And many of the machine learning techniques that we have really shine in those big data situations, or perhaps even have been developed with those big data situations in mind.

So going back and having a relatively small amount of training data was actually one challenge. One of the things that we did to sort of alleviate this problem, which is a very common technique in machine learning, is what's called data augmentation.

One simple example that we did is, okay, let's take all of our training examples that are these light curves, these time series of brightness measurements, and let's just reverse them all. Now we have like twice the number of training examples. Because we think that if we flip them back to front, they still should look like planets or not like planets. So that was one challenge.

On the flipside though, I guess having a small amount of training data means that these models were very quick to train... So you don't need any specialized hardware to run the model that we published. It actually trains in under two hours on a pretty standard desktop computer.

**Chris Benson:** So no giant GPU supercomputers?

**Chris Shallue:** No, not necessarily, for our previous paper. We're definitely working on scaling up to more training data, we're looking into whether we can partially simulate some extra training data, which is kind of like a more advanced step of data augmentation... And in that case, we're hoping to scale up to the GPUs, or maybe even Google's TPUs, the Tensor Processing Units.

**Chris Benson:** That's what I should have said upfront; I thought about that right after I said that.

**Chris Shallue:** Yeah, so I'm really excited to be training some of these models on the TPUs. I've been training models on TPUs for other projects, and they're very fast, and they can process enormous amounts of data in a short amount of time... So that's really fun.

**Daniel Whitenack:** And people can access those now on Google Cloud, right?

**Chris Shallue:** Yes, that's right. They are available on Google Cloud for training all sorts of models.

**Daniel Whitenack:** I've gotta try that out. Have you tried it yet, Chris?

**Chris Benson:** I haven't yet.

**Daniel Whitenack:** Yeah, we need to get on that.

**Chris Benson:** Yeah, we do.

**Daniel Whitenack:** Maybe we'll live-train a model on TPUs in the background on one of our shows, or something.

**Chris Benson:** That sounds like a great idea.

**Daniel Whitenack:** So I am curious... You set out to find planets... How many exoplanets have you discovered, and do any of them have aliens on them, to your knowledge, yet?

**Chris Shallue:** \[32:14\] At the moment we have discovered two exoplanets.

**Daniel Whitenack:** That's awesome.

**Chris Shallue:** This was in the announcement that we made last December. The cool thing about -- well, there's several cool things about these two. First of all, we turned our attention -- once we had a model that worked, we turned our attention to actually a small subset of the stars to search... Because our first paper was more of a proof of concept. So instead of being ambitious and searching the entire data set of 200,000 stars, we decided to search just a subset of 670 of those stars.

The stars that we searched were all stars that were known to have multiple planets around them already... So these stars had actually already been searched multiple times in the past; this data had been searched for new planets multiple times, and yet our model was able to go in and find two planets that all of the previous searches had missed. That was one of the first cool things - our model was not only finding more planets, but it was finding planets that had kind of evaded detection of the previous techniques.

**Chris Benson:** Did you get to name the Andrew and Chris yet?

**Chris Shallue:** No, unfortunately we didn't get to name them... But the cool thing about these planets is one of the planets was the sixth planet discovered around its star, but the other planet, called Kepler 90i was the eighth planet discovered around its star...

**Daniel Whitenack:** Wow, that's crazy.

**Chris Shallue:** Yeah. This is a milestone, actually, because this actually made that planet a record-breaker, or at least a record-equaler... Because as of that point, we did not know of any other star apart from our own Sun that had eight planets around it... So our discovery of this planet kind of bumped off our own Sun as the sole record-holder of having the most known planets.

**Chris Benson:** A little history-making.

**Chris Shallue:** Yeah, so now we know of actually two stars at least that have eight planets around them.

**Daniel Whitenack:** That's amazing. As you were saying that - and I guess it didn't come to my mind before, thinking about the multiple planets... So if you've got eight planets... Are they all making these dips in the light curves? If so, how do you distinguish between the dips for one planet versus another? Is that by intensity or something, in the depth of the dip, or how does that work out? Was that kind of a challenge in processing that data?

**Andrew Vanderburg:** Yeah, I can take this one. You're right, the different planets will cause dips that looks a little bit different. The deeper the dip, the bigger the planet that must have caused it, because that means the larger the shadow that was cast on Kepler. So you can actually use how much brightness was blocked to measure how big that planet was.

If you have a big planet, it will make a deep dip. If you have a small planet, it will make a shallow one. That's one of the ways you can tell the difference. But the most fundamental way you can tell is just when it happens, because generally, planets proceed along in their orbits, and it's almost like clockwork - they come back and go in front of their star after the same interval of time every orbit.

\[35:54\] For our Earth, that interval of time is 365 days (a year). For these two new planets that we discovered, they were both about two weeks. So when you look at the light curves for these stars that have many planets, all going in front of the star, you'll see dips that repeat every 14 days, you'll see dips that repeat every 300 days, you'll see dips that repeat every 60 days, for example, and all of those dips you can identify the periodicity, and that's how you separate out which planet is causing which dip.

**Daniel Whitenack:** That helps a lot, I appreciate it.

**Chris Benson:** Thanks for that. So I heard that you had made your model open source, and I guess I was just wondering what the reasoning behind open sourcing it was, and what do you hope others might achieve with it going forward?

**Chris Shallue:** Yeah, so I generally personally believe in open sourcing or releasing as much of the research that I do as possible, and I'm actually glad to work in this team at Google that is generally very open about our research...

I actually published this model in a TensorFlow repository on GitHub that has many models. I think it probably has dozens of models there that have all been open sourced. I just think in general, when you do some research and you publish the paper, you do that not only to share the result that you got, but also in the hope that others can build on it. Part of that is the paper, which details the methods, but in computer science you also have the code that actually produced those results... So that was sort of the reasoning behind releasing the code.

I certainly hope that this, at the very least, is a starting point for anyone in astronomy or other fields that has a problem similar to ours, that may be able to apply a similar technique.

For example, I know that even Andrew has a student who is interested in using this code that we made public to search for exoplanets in the K-2 mission, which is actually Kepler's second mission... The same telescope, but looking at different areas of the sky. I think that's a real no-brainer - in order to have maximal impact of this work we did is to sort of allow others to build off it.

**Daniel Whitenack:** Is any of the data - from the Kepler mission or maybe other things within NASA - I know some things are public... Is that data available? Can I detect my own planets, or how does that work?

**Andrew Vanderburg:** Absolutely.

**Daniel Whitenack:** Awesome.

**Andrew Vanderburg:** Generally, NASA data is all public, because it's paid for by the taxpayers, so the taxpayers should be able to access their data... And that philosophy is really great, because it encourages outsiders to the community like Chris, and amateur astronomers, to take a look through the data.

When I say it's public - it doesn't have to be public immediately. Usually, there's some period of time before it becomes public. But if you wanted to look up a picture taken by Hubble, you can go to the Hubble archive. If you wanted to look up a picture taken by the Spitzer space telescope, you can go to the Spitzer archive.

In general, all of the data is public and freely available for people to go and make discoveries with.

**Daniel Whitenack:** Awesome.

**Chris Shallue:** And I would just add to that that if you do wanna download the Kepler data and train your own models, if you download the full Kepler data set, it's over three million files, and it took me about two weeks to download.

**Daniel Whitenack:** Oh, wow... \[laughter\]

**Chris Shallue:** And I needed an external hard drive, as well.

**Chris Benson:** That's your caveat right there. \[laughter\]

**Daniel Whitenack:** \[40:01\] That's great. Good disclaimer. If you're sitting in Starbucks right now you might not wanna start the download... But yeah, awesome. You guys have discovered planets... Where do you go from there? What's next?

**Andrew Vanderburg:** I told you at the beginning of this podcast that the main goal of Kepler was to figure out how common planets like our Earth are... And after the mission launched - Kepler took data in its original mission for about four years - people started trying to estimate that number, but the numbers that people are getting are fairly discrepant. They can range over more than a factor of ten, and that means we really don't have a very precise and accurate estimate of how common planets like our own Earth are. There are a couple of reasons for this.

One of them is that they're very hard to detect. They're right at the edge of Kepler's sensitivity. Kepler is our most powerful planet hunter, but for planets this small and for planets orbiting that far away from their stars, it's just a really difficult challenge to detect them, so many of them get missed.

Another challenge is that even for the ones that might get found, it's very hard to separate out these weak signals, the very weakest signals, from the signals caused by false positives... Like Chris was talking about earlier, maybe a star going in front of another star. Or perhaps a more scary example, something weird that happened on Kepler on the spacecraft, that caused the glitch in the data. Those things are fairly common when you're looking at such tiny signals.

So a big challenge in our field is to try to make this measurement more precise and more accurate, and make it something believable, and a lot is riding on this. NASA built Kepler as part of its long-term strategy to eventually take pictures of planets like our own Earth and figure out if there are other planets with life on them, because if you can take a picture of a planet with a very sophisticated, expensive, giant space telescope in the future, then you can search for indications that there might be life, such as oxygen and methane in that planet's atmosphere coexisting. That's something we have on Earth that is very difficult to produce without something biological.

But in order to build these telescopes, we need to know how common planets like these are, so we know how capable the telescopes need to be. Our sights are kind of set on trying to improve this measurement. We've shown already that if we use our new strategy and our new techniques and machine learning and deep neural nets, we can find signals that were previously missed. So the next question is "Can we take this next step and find these extremely exciting signals of Earth-like planets in long-period orbits (periods of about a year) around stars like our Sun, and orbits where they could potentially sustain liquid water? Can we reliably separate them out from all of the potential false alarms?"

That's kind of the next step. That will be another extra layer of difficulty, but the reward is really big if we can get there. It's a really important thing for us to measure if we want to continue down this path and eventually try to find signs of life outside of our solar system.

**Chris Benson:** That is very cool. Thank you both for coming onto this show and telling us all these amazing things that you've been using with neural networks and astronomy to find exoplanets. You're real trailblazers, and I think a lot of other scientists out there hopefully will learn to use these same tools and find them as accessible as you guys did... So thank you very much, and I appreciate you guys coming on the show.

**Andrew Vanderburg:** Sure thing. Thanks for having us on.

**Chris Shallue:** Yeah, thanks for having us.

Break: \[44:19\] to \[45:16\]
