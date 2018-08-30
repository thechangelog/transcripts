**Chris Benson:** Hey, welcome to another episode of the Practical AI Podcast. I'm Chris Benson, an AI and digital transformation strategist, and with me is my co-host, Daniel Whitenack, who is a data scientist who likes to use AI to do good.

**Daniel Whitenack:** Hey Chris, how's it going?

**Chris Benson:** I'm doing very well. We have a pretty good episode lined up here, I think. We have Chris DeBellis, whom I'll introduce in just a minute. He is a guy I've known for a while, and we're gonna be talking about some computer vision stuff today that's really state of the art.

**Daniel Whitenack:** Yeah, I'm excited to kind of dig into the nuts and bolts of some things that we mentioned in previous episodes but haven't really gotten into the weeds with... So I'm excited about that.

**Chris Benson:** I am, too. I'm gonna introduce Chris DeBellis and tell you a little bit about him, and then I'll turn it over to Chris for a second. Chris and I have actually worked together at Honeywell, where we were both kind of plank owners of the very first dedicated AI team at Honeywell safety and productivity solutions.

I'm no longer with Honeywell, but Chris still is, and is doing some really cool work, and I miss being able to work with him. How are you doing today, Chris?

**Chris DeBellis:** Hey Chris, I'm well. How are you?

**Chris Benson:** I'm doing great. Thanks for joining us, man.

**Chris DeBellis:** Yeah, I'm happy to.

**Daniel Whitenack:** This is gonna be confusing, with two Chrises... \[laughter\]

**Chris Benson:** That's true.

**Chris DeBellis:** Well, Chris and I worked together for a while and we dealt with that, so hopefully that experience will come in handy here.

**Daniel Whitenack:** Awesome.

**Chris Benson:** Maybe I'll say Mr. DeBellis and make it sound all official.

**Chris DeBellis:** Oh, that's very formal...

**Chris Benson:** Yeah, it doesn't feel right though. Okay, so just for our audience - last night I was actually with Chris, because he was at the Atlanta Deep Learning meetup, doing a fantastic presentation on Mask R-CNN, which is a deep learning algorithm for computer vision. We're gonna do a deep dive in this episode into what that is, and the pros and cons and cool things about it, so I'm pretty excited about it... And Chris, thank you for doing such a fantastic job last night, and I'm really looking forward to our conversation today.

**Chris DeBellis:** My pleasure. Last night was a lot of fun, I had a good time doing it... And looking forward to talking about it some more today.

**Chris Benson:** Cool! Well, you know what - I'm gonna start this off with the first question, and I guess I'd like you to just kind of tell us what robotic perception is, since we're talking about robotic perception for Mask R-CNN.

**Chris DeBellis:** \[00:03:53.04\] Sure. So robotic perception is basically about seeing understanding. It's using sensors, so that the robot can interpret the environment and understand its place within that environment. Typically, we do that through a combination of 2D sensors, 3D sensors, other types of sensors... But it's basically helping the computer that's part of the robot to understand that environment.

**Daniel Whitenack:** So what kind of robots are we talking about? In the context of manufacturing, or like Roombas? What are we talking about here?

**Chris DeBellis:** Yeah, good question... Really all robots. It's easy to think of it in terms of, say, a robotic arm in a manufacturing environment, where it has to move and perform some task... But robot perception also applies to something like self-driving cars, where you have to understand the environment that you're in. So it's really all robots.

**Daniel Whitenack:** So a robot, I guess, doesn't have to mean like, you know, articulating arms and cvasi-eyes, or something, but really any machine that is trying to get some sense about its environment. Is that accurate?

**Chris DeBellis:** That's exactly right.

**Chris Benson:** I guess I'd like to get a sense, as we're tying some of this together in the beginning - robotic perception has been around for a while with some other techniques, but in recent times, deep learning has really had a profound impact on it... So, I guess, can you describe the role of deep learning in robotic perception and maybe put it in some context with some of the other methodologies that either are also currently being used, or maybe have been used in the past?

**Chris DeBellis:** Sure. Traditionally, we've used computer vision techniques that were not based on deep learning. An example would be something like Canny edge detection, Hough Line transforms... These are more traditional approaches to detecting curves and lines and edges of objects. There's still a lot of that type of approach being used within robotic perception, but around, say, 2010, 2011, 2012 - that's when we started to see deep learning being applied to computer vision tasks.

AlexNet came out in 2012, and it was one of the first deep learning algorithms to try to classify objects, and then things have just kind of built on top of that. Later algorithms came out, the neural networks became deeper and deeper, and more capable of detecting and classifying these objects... So really, that's sort of been the trend over the last few years, to move from that traditional approach of computer vision, to the deep learning approach for computer vision and perception.

**Daniel Whitenack:** And you mentioned detecting and identifying... Is there really two parts of it? Is it about knowing there's an object in my environment and then secondly, knowing what that object is? Are those typically separate things? Do those go together? How is that handled?

**Chris DeBellis:** In deep learning, typically we're doing a few things... We're taking classification, which is typically thought of for single objects in an image, and you'd say "Oh, that's a picture of a cat, or a dog, or a person." But the more advanced algorithms are able to detect multiple objects within that scene. So you might say "Hey, I see two cats and two dogs and a person", and you would be able to identify where within the scene each of those objects actually is.

Then, this Mask R-CNN algorithm can actually go a step further and say which pixels within that image that I'm seeing belong to which object... So these pixels go to this cat, and these pixels belong to this dog.

**Daniel Whitenack:** Interesting, yeah. And just for our audience members who are joining us in this episode -- in a previous episode (in episode 7) we had a great discussion with Jared Lander about what deep learning is itself and how it fits into the landscape of AI, so definitely check that out if you're kind of first learning about these things.

\[00:08:14.02\] But you mentioned Mask R-CNN... Maybe we could just kind of start moving that direction by talking about breaking down that acronym. The CNN part is not a news network, right? What are we talking about?

**Chris DeBellis:** CNN is, in the deep learning world, known as Convolutional Neural Network. So it's a neural network that's based on the idea of these convolutions. The R in R-CNN is Region. So the way that the algorithm goes about figuring out what's in each part of the image is by generating these regions. They call it regions of interest. Then it looks at the regions of interest that it generates, and tries to detect if there's an object in that region, and if it does detect an object, it tries to classify it. If it doesn't detect an object, it just says "Oh, this area is just background."

**Chris Benson:** Quick question for you, Chris... As we start looking at Mask R-CNN, could you actually give us a little bit of an understanding of how that fits into the larger category of convolutional neural networks and give us a baseline of what R-CNNs are able to do, and then contrast that, as we start working into Mask R-CNN?

**Chris DeBellis:** Okay, so maybe we'll talk a little bit about CNN versus just the traditional, feedforward neural network. Maybe folks are familiar with LSTM or RNNs, things like that...

**Chris Benson:** Yeah, if you could even give us -- I think probably a lot of people are most familiar with just basic feedforward networks, and if you could talk about what a convolutional neural network does on top of that, what it's adding to it, and then we can kind of go into Mask R-CNN and go farther. That way, if someone hasn't been exposed -- all three of us have been exposed to CNNs for quite some time, but it gives somebody a path on evolving where they're going with this.

**Chris DeBellis:** Perfect. So in a traditional feedforward network, you have the data coming in at one end of the network, and then you have several - maybe many - hidden layers, and the output from one layer becomes the input to the next, and that's how it's a feedforward... And typically, as you move through the network, you have fewer and fewer nodes within each layer. So you're doing fewer and fewer computations as you move along the network.

**Chris Benson:** That helps a lot. And when you add convolutions in, what does that do to that architecture?

**Chris DeBellis:** Right, so the convolutions are important for images especially, because the convolutions are -- the best way to think of it is, say, a three-by-three grid. So you're looking at three pixels by three pixels at a time, and you're moving that grid across the image, from left to right, and then you go to the next row and you do it again, from left to right... So you're moving down the image and going left to right, looking at a set, defined number of pixels at a time. We call those kernels, and that kernel varies in size.

You might start with a 3 by 3 and go across the entire image, and then you could do maybe a 9 by 9 kernel and look at the image, and then a bigger one, maybe a 32 by 32. The important thing to remember with CNNs is because those kernels are square, you are maintaining that spacial relationship between the pixels, which for images is important. If you think about an image and you're looking for, say, a cat, you know that the eyes are going to be close together, so you want to maintain that spacial relationship, because the eyes should be close together; you shouldn't be looking for an eye in the upper left corner and an eye in the bottom right corner. That would be unlikely.

**Chris Benson:** \[00:12:09.18\] So there's a relationship between the pixels that matters because we're talking about images.

**Chris DeBellis:** Yes, the spacial relationship. That's right.

**Daniel Whitenack:** And so you mentioned things like AlexNet earlier in our discussion, which are various models that have been developed over time for image-related detections... Do a lot of these image-based models or models trying to do object detection in images? Is it fair to say that most of them involve convolutions in one way or another?

**Chris DeBellis:** That's right, they all involve convolutions in one way or another. The difference really is in the size of that kernel, the combinations of sizes that they're using, the values that are within those kernels for each of those cells, and then, over time, how many layers there are in that network, because as the technology got better, as the GPUs got faster, they could do more and more training in a set amount of time, so they were able to have deeper networks.

**Daniel Whitenack:** Awesome, yeah. So we've kind of gotten into the convolutional part, and you've mentioned that there's kind of various incarnations of this... Maybe we can step back and kind of go back to the robot perception use case. Maybe you could share with us some of the challenges that you face in that particular use case, and maybe challenges that might motivate you to use something like Mask R-CNN, which we'll eventually get to... But what are the kind of motivating challenges in this field that make just kind of the normal convolutional neural network "normal"; I don't know if any of them are normal, but what might not make it enough.

**Chris DeBellis:** Sure. So with the CNN networks - basically, they're used for the classification. So I see a cat, or a dog, or a person, or whatever the object is, and then typically, what we're doing is we're taking that network and also at sort of the end of it, applying more technology to say "Okay, can we identify where the object is in the image?" So that bounding box, if you're familiar with that term, where we try to draw the box around the object. That kind of comes towards the very end, but we're still using the CNN network to identify what the object is; we do that additional processing later.

So with something like Mask, in addition to that bounding box regression to determine the position, we're also then doing another set of steps or calculations to say where within that bounding box is the image exactly.

**Daniel Whitenack:** That makes sense. I'm wondering, just kind of maybe off of one of my previous questions - when you say you're kind of adding to the end, are you meaning like you have kind of different models for the bounding box thing and the detection thing, or that's all kind of rolled into one end-to-end architecture? Is that kind of how it works?

**Chris DeBellis:** Yeah, good question. It's added on at the end. It becomes part of the overall network, but really it's tacked on at the end, and so the base - what we call feature extraction, which is pulling out those little features, like the straight lines, the curves, a lot of the relationships between the pixels... That can often, and actually is often based on an existing classification network. For instance, in the case of Mask R-CNN, it uses something called ResNet to do its feature extraction and classification, and then on top of that, the creators of Mask R-CNN added the ability to define exactly where the pixels are within the object.

**Chris Benson:** And you mentioned something that I think would be worth taking a moment... You talked about feature extraction, and as you work toward doing classification, could you take just a second and talk about how you do feature extraction, from the simplest lines, up through the different things that eventually become the classification of an object? Can you speak to that for a moment, for those who may not be familiar with it?

**Chris DeBellis:** \[00:16:25.02\] fSure, I'll give that a try. It's a little tough without visuals, but basically, a CNN network is really good at extracting what we call features, which is the example I just gave... So we're looking for maybe curve lines to one direction, and then curve lines to the other direction; we're looking for those edges where maybe we have light and dark colors coming together. Maybe we're looking for straight lines... So if you think about detecting something like an airplane, ou would need a combination of all of these features to be recognized, right? So you'd need straight lines to detect the wings, but you would need curve line detections for the front of the aircraft, and then where they are... Because we talked a bit earlier about spacial relationships, so where those features are matter; for it to be an airplane, you would have straight lines out to the sides, and you would have more roundness in the center, for instance.

**Chris Benson:** So would it be fair to say that you're starting with some of the most basic or atomic things, such as a simple line or a gradient from dark to white, and you're building up almost like legos, an object out of these very primitive detections, up into something that's more comprehensive, leading to your object?

**Chris DeBellis:** That's exactly right. So the earlier layers of your networks are detecting those simpler features, like you described, and then as you add more layers - remember, the output of the earlier layers become input to the next layers. So the next layers are operating on those features that were detected, so it's trying to build patterns from features. The earlier feature detection is looking at straight lines and curve lines and things like that, and then it's looking for maybe curves that are like an eye, and then you're looking for "Oh, two eyes together - maybe that's part of a face", and then you add more features that have the whole head. So you're building, as you said, Chris, you're building from the finer representation of the features, to more complex.

**Daniel Whitenack:** This all sounds great. It sounds like you've got your network, it's got this portion that's detecting all of these features and determining, let's say, if you have a cat in your image, and then you've got this portion tacked on that might be detecting bounding boxes of where that cat is located within the image. What prompts someone to go further than that, so to go beyond CNN? Kind of going back to where we started this conversation, why the Mask R part? What challenges are still present, even if we're using this CNN-based network?

**Chris DeBellis:** Yeah, great question. The example we used last night at the meetup, from the Udacity Robotics Nanodegree program - one of the assignments is to take a robot that has two arms, and in front of it is a desk with various objects, things like a bar of soap, I believe it was an eraser, a tube of toothpaste etc... And you have to perceive what's on the desk, and then you have to manipulate the robot arms to grab the item, and then put it into a basket to the side.

If you think about grabbing that tube of toothpaste - well, if it's perfectly aligned with the table, then you just kind of reach forward and you grab it; but if it happens to be turned at a 45 degree angle, you also have to adjust the arm to match that rotation, and then you can grab it.

\[00:20:03.14\] So if you think about a bounding box, the bounding box just says "Hey, somewhere in this box is this tube of toothpaste", but you don't know which way it's pointing, or how it's oriented. The Mask, since it fills in the pixels for you of where the object is, you can look at it and say "Oh, it's not straight up and down. It's actually at a 45, so I need to turn my arm."

**Chris Benson:** Okay, so I'd like to ask a question before we dive fully into Mask R-CNN, about what the options are within the different CNN architectures that might be available for robotic perception, such as YOLO or others, and at a very high level, if you could just give us a sentence or two on what different options there are, and then why you might have chosen to go Mask R-CNN for a given solution that you're looking for.

**Chris DeBellis:** Okay, so something like a YOLO, which is a great algorithm - it only gives you the bounding boxes. A lot of times though, that's all you need. I'm trying to think of some good examples... So like if you're doing maybe a self-driving car, if you're able to detect in front of you is a pedestrian, or another vehicle, and you have a bounding box around it - that's probably close enough for being able to make a decision as to what you should do. If this thing is clearly in front of you, it doesn't really matter exactly where the mask outline of that object is; you're able to detect that there's something in front of me and I should perhaps slow down or stop.

Mask R-CNN, because it gives you the masks, it's really good for when that orientation matters. The example we just gave, about a robot arm having to pick objects off of a table is a good example.

**Break:** \[00:22:00.03\]

**Daniel Whitenack:** So in terms of some of the challenges with moving beyond this bounding box sort of idea, and moving more towards the mask idea, it occurs to me that it's already a somewhat challenging problem to get good labeled training data for just like the bounding boxes and labels of objects within images. It seems like that would be even more challenging if you're wanting to label the proper masks within an image for particular objects, where you're getting even more detail, not just where the objects are, within what region, but what the actual mask of the object is... Is that a problem? Have there been techniques developed to deal with that?

**Chris DeBellis:** \[00:24:15.12\] Yeah, it's a huge problem. If you think about the simpler example of classifying an object, so "Is this a cat, a dog, a person?" If you were doing training on those images, you could do something simple like create a directory for each type of object. For instance, you have a directory called Dog, and that directory name becomes the object name, the class name, and you put all of your pictures of dogs into that directory, and you train. That's your labeling. But to do something like detecting the bright location of the bounding box, you would have to take those images and draw the bounding box around the individual objects, and then train.

Extending that further to something like mask, since you want to get accurate masks, you can't just draw bounding boxes around each of the objects; you have to draw the actual outline. So you end up generating a polygon typically, some really odd shape, enclosed outline for each of the objects. So if you had an image, say, of four cats and four dogs, that's eight objects you have to outline... And it becomes really tricky when they're occluded, or one is in front of the other, so it's only partially showing, and you have that common boundary between the two. You wanna be really accurate when you do that. So yeah, labeling or annotating data for masks is cumbersome and tedious.

**Chris Benson:** One thing I'd like to clarify in case we have any listeners that aren't familiar with what masks are - masks are specifically where you apply a bunch of pixels together to form that polygon that Chris was alluding to, to where if you were looking at it visually, it would almost be... Maybe you're applying a color for those pixels and you'd almost have like a green overlay over a person's body that you're masking in a picture, and you might have many of those masks... But I just want you to define that for everyone, so they could follow along...

I'd like to talk a little bit about - as you're getting into labeling the data and you're looking at the data sources that you're pulling in, and how you do that... What are the typical data sources that are used in the process, and how do they come together for the training?

**Chris DeBellis:** So if you're familiar with the COCO dataset, over the last few years folks have been taking the COCO dataset and providing the masks; so they've been going in and annotating, providing that polygon around the individual elements or the individual objects within each of the images... So that allows the people that created the original Mask R-CNN network to do transfer learning, which is you start with an existing set of weights. So they were able to use an existing set of images that were already annotated, and create their algorithm. Then what we do now is we take those weights that they use to create the original Mask R-CNN network from, and we use that as the starting point to train for images that we want to now detect.

So let's say there's something else that we want to detect that's not part of the original COCO dataset. So we train with new images. We have to go out and obtain those images, annotate those images, and then apply the training on those images with the COCO weights as our starting point, and that's actually called transfer learning.

**Daniel Whitenack:** Awesome. And when you're doing -- I mean, because if I'm thinking of... You know, I'm listening to this podcast, listening to you talk about all of these exciting things, I might have a use case that's really interesting for this, or I might wanna try it on data that's maybe, you know, like you said, not already masked as part of, say, the COCO dataset.

\[00:28:10.12\] When you're doing that in your context, is it a matter of you and your team going through and annotating those images, or have you kind of found any efficient ways to crowdsource those within your organization, or anything like that? Or have you heard of any ways to kind of speed up that process, or is it still just kind of brute force, getting through everything?

**Chris DeBellis:** That's a great question. Unfortunately, it was me and my team that had to annotate the first set of images, and that took quite a while.

**Daniel Whitenack:** How long?

**Chris DeBellis:** The images we were doing would have anywhere from, say, up to maybe 40 or 50 objects in it, and it might take 15 or 20 minutes to annotate one image. With deep learning, you wanna have a lot of images, you wanna have a lot of training data... So after (I think) a few hundred of these images, we kind of said "You know what, let's just do a proof of concept with what we have, because it's taking so long to annotate." And we got to that point, and we created our model, and then we said, okay, we proved out the concept, and said okay, if we really wanna go forward with this, we need to do this at scale.

So as you pointed out, yeah, you wanna either engage with a company that does this - there are a number of them that do this for you; they hire folks really around the world that can go ahead and annotate your images for you... And that's really the way to go at scale.

**Daniel Whitenack:** Yeah, so bribing people with pizza and getting together one night to annotate datasets only gets you so far.

**Chris DeBellis:** It really does, especially if it's taking 15 minutes per image; you wouldn't get too many done, even with a couple of pizzas.

**Chris Benson:** So I guess I would draw us back to Mask R-CNN, and I guess ask you to kind of -- as we start talking about the algorithm itself, can you define what R-CNN is and the define when you add a mask over that, how would you do that? ...with the intention here of taking us deeper into the specifics of the algorithm.

**Chris DeBellis:** Sure. So the CNN, as we said - that's the convolutional neural network. R is region proposal. So again, the way that this algorithm decides whether or not it sees any objects is it looks in different regions or different parts of the image and it tries to classify what it sees in each of those parts as being either background or not background... And if it says "Hey, this is not background", then it tries to figure out what it is exactly; it tries to classify it.

So the regions are different sections of the overall image that it's looking at in different scale and different proportions and different sizes.

**Daniel Whitenack:** And then the mask that is just the idea -- so instead of tacking on the end the bounding box piece, you're kind of tacking on the piece to actually map out these masks... Is that right?

**Chris DeBellis:** That's right.

**Daniel Whitenack:** Is it working the same way, in that you would kind of bolt this onto the end, or is that different?

**Chris DeBellis:** Exactly, exactly. So towards the end of the network. And the reason it's at the end is because you're using those same features that you've extracted earlier in the network, that you're using to classify it - you're also using those features to decide where the mask should go.

A point about the mask - probably the best way, or at least the way that I think about it is the mask is gonna be the X and the Y, or if you wanna think of it in terms of the image, the row and the height coordinates of each of the pixels that belong to that object. And that's really important in something like a robotic application, because everything -- we said earlier you have multiple sensors, so all of these sensors need to be triangulated and aligned, so that you can make decisions from multiple sensors from the same point of view. So having that X and Y coordinate or that row/height coordinate that exactly defines all of the points that make up this object is really important.

**Chris Benson:** \[00:32:13.28\] So when you're considering Mask R-CNN as an architecture for your own use case, I guess when you're comparing it against alternative architectures, YOLO or others, is it really the use case that's dictating going there, because your use case needs the benefits of the mask versus a bounding box? Is that how you would think about it?

**Chris DeBellis:** Definitely. We've just talked a little bit about Mask R-CNN - it's great to have those masks, but it comes at a little bit of a cost. It's one thing we haven't specifically said, but it is computationally expensive. These algorithms, the more you do, the longer they take, and so adding on or tacking on this extra functionality, these extra mathematical operations that have to be performed, even though it's being performed on a GPU, highly parallelized, it still takes extra time. So it may not make sense that in your application you wanna spend that extra time generating these masks, especially if the bounding box is sufficient.

As Daniel pointed out just a few minutes ago, training is more difficult. The tedious task of generating all of these annotated images - you have to do that, as well. It's a great algorithm when you need it, but if you don't need it, it probably doesn't make sense to implement it. Because something like a YOLO - which Chris mentioned earlier - is faster if all you need is bounding boxes.

**Daniel Whitenack:** Yeah, I wanna dig in a little bit to that idea that you brought up around efficiency. There's the training side of things, which is one piece of it, and I would imagine these networks being trained on huge GPU boxes, wherever you have them, or a big cluster in a distributed way, but when we get to talking about inference, so taking that trained model and then making inferences, so utilizing the model to actually detect objects and masks in an environment, does the network size and the complexity also factor in on the inference side? I mean, I know we're talking about robots, so if you're kind of shipping this model out to run on a robot, I'm assuming that that robot doesn't have a huge rack of servers on it necessarily; it might have a smaller amount of computation on the actual robot. Has that been something that you've had to factor in as well?

**Chris DeBellis:** That's exactly right. Typically, when you're training, you might be training in the cloud and you can spin up however many GPUs you need for training, and that reduces your training time. But for inference, you probably just have one GPU on your robot. So yeah, you definitely have to consider that inference time. So if you're trying to do something in near real-time with streaming video, Mask R-CNN is going to be a bit challenged, because it may be only able to process two or three or ten images (depending on the size) per second. So you're absolutely right.

The other thing too is often times the GPU that you're using for training might be more powerful than the GPU on your robot, so not only do you have fewer of them, you have a less powerful one, so inference becomes even longer.

**Daniel Whitenack:** Could you just real quick -- because we've talked about this, mentioned it a bunch of times, but I think this would be the perfect context to really clarify why... In both of these cases you've mentioned using the GPU - why in particular for these types of networks is a GPU necessary?

**Chris DeBellis:** \[00:35:56.18\] Good question. If you think about something like Mask R-CNN that's built on a ResNet101 -- so 101 means it has 101 layers, and we talked before about these convolutions that happen... So you're looking at this overall image - so if you have an image that's 1024 by 1024 pixels, and you're looking at it in just one layer, 3 by 3, and then spreading that over to the entire image, and then looking at it again, maybe at 9 by 9, and then 64 by 64, various sized kernels... And the other thing too we haven't talked about - a color image actually has three channels deep; you have a channel for red, a channel for green, and a channel for blue. So those convolutions actually are doing three times the work on that first layer, because it has to look at the red, the green and the blue value.

So if you think about that, just in one layer, and you're going to do this over 101 layers, you get into billions of floating point operations that have to happen.

**Chris Benson:** Cool. So let me ask you this, as we kind of start to wind up here, moving in that direction... If you're listening to this and you've gotten all excited about being able to use Mask R-CNN for robotics or other uses that you might be interested in, what types of skill or knowledge or prerequisite to get into this and to be able to work towards using it productively - how do you get started along that path?

**Chris DeBellis:** Good question. So at least for me - I'll talk a little bit about my experience... To go from, say, traditional data science into deep learning algorithms, I think one of the big skills that you have to have is coding skills. You're going to be doing a lot of coding, you're going to be downloading other people's code, probably from GitHub, you're going to be configuring it, installing it, and then you're going to be at a minimum tuning some parameters, but very possibly, especially if you're doing this in a production setting where your code is going to be actually used for something, you'll have to make code changes.

So the ability to code is really important, particularly in Python. Most of these algorithms are available in Python. And there's a lot of debate out there... Some folks say "Oh, to do deep learning and data science, you really have to have a strong understanding of math and statistics", and I think if you are doing AI research, that's absolutely true; but if you are doing, like we talked about earlier, that transfer learning, a lot of the math and statistics comes from training the initial model. So if you're using someone else's trained model as your starting point, the ability to do the math and statistics become less important... And I know some folks are not going to like that, but that's been my experience. Over the last six months, most of my time has been spent coding, not so much worrying about statistics and derivatives and matrix multiplications, because the software does that for you... So that's one of the great things about frameworks like TensorFlow.

And then again, for me, to get started, I spent a lot of time watching YouTube videos. Stanford has a lot of great courses online. Their deep learning courses are online, and you can watch the lectures and really learn a lot from those. So for me, that was just enormously valuable.

Also, Udacity - I took a couple of Udacity courses. They have some free courses, they have some paid courses... Those are really helpful.

**Daniel Whitenack:** Yeah, I was just gonna mention - I really appreciate you providing this perspective and being transparent, because I think there are a lot of people that get intimidated going into this space, and thinking they don't have a Ph.D. in mathematics, so what difference can they make... But it is super-encouraging for myself to hear you talk about some of the things that you've been involved with and you've done, but coming at it from more of the coding perspective and from the transfer learning perspective, and building up those skills as you have... For me, it's an encouragement as I'm learning more things, and I hope it is for the audience members as well.

**Chris DeBellis:** \[00:40:10.22\] Yeah, and that's absolutely what I was hoping people would take away from my comments - if you're passionate about it, don't let anybody tell you you can't do it. And it's not easy, but it's not impossible, and there are going to be days where you're looking at something and you're looking at these crazy formulas, and you're going "I just don't wanna deal with that today", and that's perfectly fine. And there are days when you look at it and you go "You know what, I'm gonna dig deeper and I'm gonna see if I can make sense of some of this", and over time it starts to make sense, especially -- it's repetitive. You see things over and over and over and you start to connect the dots. Then the light bulb goes on one day and you go "Oh, I understand batch normalization now. I understand why we normalize things. I didn't understand that three months ago, but now I finally get it."

That's really for me what it takes to be successful - that passion, and enough of a foundation to just keep growing and growing and improving yourself and your skills.

**Chris Benson:** So as we wind down, I guess, as kind of a last thing to touch on here, I wanted to ask you - I know that you introduced me and the rest of our team at Honeywell to a particular GitHub repo, and then you talked again through that at the meetup, and I wanted to bring that out... We'll put it in the show notes, but for those of you maybe listening, it's on GitHub.com/matterport/mask\_rcnn. If you would just give us a quick overview of the Matterport Mask R-CNN repo, and what's possible there, and that way we can kind of leave that in our listeners' hands to go explore further.

**Chris DeBellis:** Sure, happy to. So the Mask R-CNN algorithm actually came out of work that was done at Facebook, in several (at least that I'm aware of) implementations of it. So Facebook has their own, called Detectron, which is written in Caffe2. Google has an implementation in TensorFlow (pure TensorFlow), but the version, Chris, that you mentioned, and that I really like - it's a combination of some Keras, some TensorFlow, and a lot of pre-processing and post-processing of your image in Python NumPy. And the thing I really like about it is they provide some Jupyter Notebooks that they've written, which give you good insight into what's actually happening with the algorithm. So it's not so much of a black box. You can follow along with these notebooks and kind of learn your way through the R and R-CNN - where are those regions coming from, and why are there so many, and how do they figure out which ones to use and which ones to throw away?

The Matterport implementation is great for learning. They also have an active community, it's being updated... There's a lot of good information in the issues, so if you were to read through some of the issues that they have, folks have contributed and talked about some improvements to the algorithm, and you can really glean a lot of information as to what's going on and how the Mask R-CNN algorithm works by reading those posts.

\[00:43:09.00\] The actual structure - there's really a couple of main files. There's a model.py file, that kind of has the functions to do training and inference. There's utilities.py file, which has some utilities... The visualizations are all in the visualize.py file. There's a config file, which has all of your parameters... So when you're doing your training and your hyper-parameter tuning, that's where you would go - you can go and set them there. It's also a class, so if you want to overwrite the class, you can do that; if you're pretty familiar with classes in Python, that's pretty easy to do.

Those are the main Python files. The way to get started - in the samples folder there is a demo Python notebook. That's the place that I would start.

There's also, I believe -- one of the samples they give you is for training shapes of triangles, and squares and circles... TrainShapes.py notebook. That's how I got started. Read the information that they have (a lot of good stuff), and look at the notebooks, and just get started.

**Chris Benson:** That's fantastic. Thank you so much for taking us through that and giving us that last orientation on the repo. I'm looking forward to hearing back from listeners on what they've done with Mask R-CNN...

So first of all, thank you so much for coming onto the show and giving us this deep dive through Mask R-CNN. We really appreciate it.

**Chris DeBellis:** Yeah, my pleasure. It was a lot of fun. It's a new experience for me, doing this on a podcast without having visuals, so hopefully it came across well.

**Chris Benson:** it came across great. I thought it was a fantastic tutorial. And for our listeners, I hope you guys will reach out to us on social media... It's really easy to get to Daniel and me - we are on Twitter, we are on LinkedIn, we actually have a Practical AI LinkedIn group that you can participate in, and then we have a community online on Slack, at changelog.com/community. We're looking forward to your feedback. Chris, is there any way that listeners can reach out to you?

**Chris DeBellis:** Sure. Probably the best way is just to find me on LinkedIn, it's Chris DeBellis. I think I'm the only Chris DeBellis out on LinkedIn, so hopefully you can find me.

**Chris Benson:** Well, thank you very much. After we get off the show, I'm gonna dive into some Mask R-CNN and have some fun today.

**Chris DeBellis:** Awesome, good luck with that!
