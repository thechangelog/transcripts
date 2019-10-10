**Erik St. Martin:** Alright, welcome back, everybody. Today's episode is \#78. On the show today we have myself, Erik St. Martin, and Brian Ketelsen...

**Brian Ketelsen:** Also known as Frankie Valli...

**Erik St. Martin:** \[laughs\] And Carlisia Pinto...

**Carlisia Pinto:** Hi there!

**Erik St. Martin:** And our special guest for today - we are welcoming back Ron Evans, who as always is doing exciting stuff with hardware in Go.

**Ron Evans:** Hi, everybody!

**Erik St. Martin:** So we've got some new stuff to talk about since -- I think it was episode \#37... It was in the 30's we had you on, so that was I guess roughly a year ago.

**Brian Ketelsen:** That's forever ago.

**Erik St. Martin:** Yeah... So you've been doing a lot of interesting stuff since then. Do you wanna talk a little bit about [GoCV](https://gocv.io/)?

**Ron Evans:** Sure. Computer Vision, which is when cameras are used to give a computer the same kinds of ability that humans have as far as processing visual information, has been a technology that's been around for many years in different forms and flavors. The most powerful and generally used computer vision software in the open source world is called [OpenCV](https://opencv.org/), and it's been around for (I don't know, I think about) seven or more years... It has literally hundreds of patent-free - and also patent-required - algorithms for doing different kinds of computer vision applications.

\[00:04:02.17\] Many of us who are familiar with OpenCV wanted to use it from Go, but unfortunately the thing that we found out was there was no library in Go that supported the latest and greatest versions of OpenCV. OpenCV has I think [over 20,000 stars on GitHub](https://github.com/opencv/opencv), it's got hundreds of contributors, (as I said) hundreds of algorithms, so if you're not on a relatively recent version within the last year or two, you're missing out on a lot of really important developments.

So a bunch of us in the Go world wanted there to be a new Go wrapper for OpenCV. In fact, I even talked about that with Erik at last [GopherCon](https://www.gophercon.com/), and all of us were hoping somebody would do it... And I guess I flinched first, so I started working on it in earnest last year. The first version of GoCV, which is a brand new wrapper all around the latest and greatest OpenCV came out in October. It was really amazing how many people jumped on the bandwagon as far as being excited that they could use all of the latest versions of Go with all the latest versions of OpenCV. We've already got about [800+ stars on GitHub](https://github.com/hybridgroup/gocv), we've had 30-odd(??) contributors... We still have quite a ways to go to create all of the same functionality that some of the other language wrappers have, like Python for example, which is -- most of the people who do OpenCV work tend to use Python, just because the bar to entry is a little bit lower than C++, and there's a lot of good code out there.

But it does turn out to be a bit like an alchemist search for scraps and scrolls on the internet that have little pieces of Python code that hopefully do the thing you need for your computer vision application. What our intentions are behind GoCV is really to make it a first-class language client, able to do any of the things you can do in any other language with OpenCV, but then also have the concurrency, the performance and the portability that Go provides to application developers.

**Brian Ketelsen:** So what are the kinds of things that you can accomplish with GoCV? I know that I've seen demonstrations that you've done at GopherCon where you recognize the existence of faces... Can you go farther than that and recognize people due to facial recognition, like "These are photos of Brian"?

**Ron Evans:** Yes, actually. Our original implementation of OpenCV that we showed at the first GopherCon was... You know, it looked good if you didn't know what it was; but if you knew what it was, you were like "Wait, that's the best you could do?" It was a hack, and a lot of it just had to do with that we had not really knuckled down and said "Okay, we need to take this seriously and not just hack a few functions together... But you know, the depth of the kinds of applications you could build with OpenCV - it's such a vast tool, it's got so much to it.

\[00:07:48.07\] But some of the applications that -- you know, facial tracking, obviously... But facial recognition is also something that -- there's a whole module called The Face Module, which specifically is for that purpose. We also have support in GoCV for the [Intel® Computer Vision SDK](https://software.intel.com/en-us/computer-vision-sdk). Intel has a special version of OpenCV that they call the Computer Vision SDK; it also has some additional non-open source type secret sauce from Intel engineers to do much more efficient facial recognition.

Then some of the other really interesting capabilities - we were just mentioning [TensorFlow](https://www.tensorflow.org/) from [Francesc's](https://twitter.com/francesc) talk... You know, one of the main capabilities that we've been working with extensively lately with GoCV has been the support for utilizing deep neural networks like TensorFlow or [Caffe](http://caffe.berkeleyvision.org/), that way you can process the visual data that you're getting from your cameras or from your streaming video, run that through your deep neural networks and use it for image classification or image tracking or other interesting applications. So there is a lot of action -- computer vision is just so hot right now. Computer vision is this year's IoT. It's the thing that everyone is gonna be talking about by summer.

**Carlisia Pinto:** Actually, I wanna pick up on what you just said about "People are using it, it's really cool", and let me start by telling a story. So I've known that Alexa and Google Home -- not so much Google Home, because I think it's newer... So I knew these things were out there, and I sort of looked into it but not really, and I went to a friend's house for a barbecue and he had both of them, and he's like telling them to turn on and turn off the lights, and play this music, that music, and I was sold! I never really got what he did until I saw it with my own eyes.

So what I wanted to ask you is to talk to people who haven't used this stuff - why would a regular person want to use this for? And also, who is using this - companies, individuals...? Who is putting this to good use and how?

**Ron Evans:** So the canonical application for computer vision are usually some type of surveillance cameras or observation cameras. When you have cameras located someplace other than where are the people who wanna observe the information... So you could just do that with streaming video, right? But then you need a person to actually look at it and interpret this information, and there's a number of applications where -- you know, people just can't do it as quickly as machines.

A really good one is auto-stabilization of photos, or video rather. Most of people's videos are really shaky and horrible; they look terrible, until they start shooting their videos on smartphones and all of a sudden they start looking perfect, and it's like, "Wow...!" Did their hands suddenly get steadier? No, it was that algorithms associated with computer vision applications are doing the image stabilization so that the videos don't look so herky-jerky anymore. So that's not even AI anymore, now it's just part of the built-in video processing software that's in your camera. You don't even think twice.

**Brian Ketelsen:** Is herky-jerky a technical term?

**Ron Evans:** Herky-jerky is a technical term we use for older C-level executives.

**Brian Ketelsen:** Oh, okay. Thank you.

**Carlisia Pinto:** And when you put this in a drone, for example, what are the uses for that?

**Ron Evans:** So the real reason why you guys wanted me to come on this week, besides the fact that I'm a good punner is more importantly all about drones... Specifically, the latest and greatest drone from DJI, which is called the Tello.

\[00:12:09.15\] The Tello is a brand new drone - it was just announced at CES this year, catching everyone by surprise. For $99, it's a collaboration between DJI and Intel. DJI is drone navigation and piloting - or flight control rather - technology combined with some very interesting image processing technology from Intel.

So built into the Tello is a chip that is from an Intel-owned company called [Movidius](https://en.wikipedia.org/wiki/Movidius). It's what's known as a VPU (video processing unit) and it's a chip that's specifically designed for doing computer vision applications. In the case of the drone, it's used for what's called optical flow. Optical flow is when you use the images that you're seeing in order to stabilize in this case the drone; it's very stable, it doesn't tend to drift around or move because it's able to use the high-quality HD video that it's getting, match that to its current position, and then automatically reorient itself based on the visual information that it's getting.

So as opposed to trying to do these things with less accurate ultrasound being the typical -- if you look at the original most popular consumer drone which is the Parrot AR.Drone, on the bottom are these two little circles with screens over them; that's the ultrasonic range finder that's used for trying to calculate the distance with the ground, and then it's got a little pinhole camera that it tries to use in order to stabilize itself... That way it doesn't just retain the same height, but it also retains the same position. If the thing is six feet off the ground, but it's moving left or right at random, it's gonna knock into somebody or something, so to have a really good auto-stabilization algorithm you need to combine different sorts of data, and visual data is the most important data.

So the Tello, for this incredibly low price, has probably one of the most advanced chips used for deep neural network processing; in this case, it's being used for the optical flow and stabilization algorithms that are part of the Tello. So kind of a long explanation, but it's amazing how easy it is to use, because... Basically, when you try to fly radio-controlled helicopters in the last century, the first thing you did was crash your helicopter into a tree, because they're very hard to keep stable... Whereas these days, lots and lots of people go out and buy a consumer drone, and within a very short time of taking it home or to the office, they're able to fly and generally not crash into things, and that's to a large extent because of the kind of computer vision and software and hardware that's built into drones these days. So the Tello thing is I think down to $99 and you've got all this stuff built in.

**Erik St. Martin:** I've got a pretty cool hexacopter that I still have not learned to fly. It looks good just sitting there though... And the crazy thing thinking about these chips though too is that the amount of processing and stuff they do, and you would think that the chip itself would cost $99 or more, right? And you can actually get a working drone with that in it... It's just incredible.

**Ron Evans:** \[00:16:07.05\] And a battery. It comes with a battery as well.

**Brian Ketelsen:** Wow.

**Erik St. Martin:** A decent \[unintelligible 00:16:11.20\] battery will cost you $100... \[laughs\]

**Ron Evans:** Yeah, I think the replacement batteries are like $19, so obviously a bit part of the bill of materials of the Tello is the battery it comes with.

**Brian Ketelsen:** They're actually exactly $19. I know this because I'm hitting the Place Order button right now...

**Ron Evans:** Yeah, I think -- I'm obviously a salesperson for DJI now, but...

**Brian Ketelsen:** This is really impressive.

**Ron Evans:** ...basically, among many other things that are great about it is it's a toy, and the weight of it is less than the weight, and the size of it less than the size necessary for the Federal Aviation Administration to consider that the Tello is a toy drone; it's not a professional drone, so you do not need to have small unmanned aerial systems license. I happen to have one anyway, but that's a different subject. But you could just fly them around; they don't have a long range, but generally speaking, you don't want to be flying far away from where you are anyway, unless you are a professionally trained pilot. So it's incredible how much stuff is built in there for such a cheap price... Or excuse me, such a good value.

But the problem with the Tello that we discovered... So one of the things that they were doing is they were selling it as "Here's a drone that you could buy for your kids, and they can learn to program drones." They have some basic support for the [Scratch visual programming language](https://scratch.mit.edu/)... Scratch - we should put a link on the page. Scratch is a brilliant project from MIT; it's been around for a bunch of years. They're currently working on Scratch 3.0, but Scratch 2.0 is the shipping version, and it's the result of a -- Scratch is actually the evolution of a project from the great Alan Kay called [Alice](http://www.alice.org/) which was designed for teaching very young people visual programming - visual programming a la flowchart style programming, not visual in the sense of programming computer vision applications.

So DJI did do the right thing of trying to -- well, they attempted to do the right thing by building in some very basic support for programmability. However, there were a few problems. One of them is "That's great, I can use Scratch!", but even my youngest son had already gone far beyond Scratch programming by age seven; that's very common. I think that visual programming is a tremendous paradigm for teaching the concepts of programming, but generally, most of us do not do visual programming as a part of any serious task because the burden of trying to represent that information -- you know, sometimes a picture can tell a thousand words, but sometimes you need ten thousand words for a picture, so it's more efficient to just... You know, the compression that we're able to achieve through a textual description of programming is so far the best paradigm we've got.

But in their business, or whatever, they decided -- or they didn't decide, rather... I assume it was a non-decision... They just didn't get around to releasing any other SDKs for any other programming languages, and in fact, the Scratch SDK has a lot of limitations that even kids who got it right away discovered.

\[00:20:18.06\] So here we are, one of the coolest drones around, really inexpensive, yet no programmability. Well, that sounds like a mission for a packet sniffer. So a small group of us, all under various handles - except for me, because my handle is publicly known - we started using a tool called [Wireshark](https://www.wireshark.org/)... Wireshark is an absolutely fantastic tool that's used for security analysis, and network engineering, and lots of other applications. It allows you to capture packets that are being transmitted via Wi-Fi, Bluetooth and a couple of other wireless protocols... Capture those packets, and then you can analyze them to try to determine what's in the packet.

In our case, it was looking at these UDP packets being sent from the mobile app on an Android phone to the drone, and trying to decipher them and figure out "What does any of this actually mean?" Of course, it's a binary format, which means there's no strings that you can find in these packets to tell you what anything means. That's very typical with ground control stations - they'll use binary protocols to communicate with flying objects, simply because you need to reduce the amount of data that's being transmitted, or else you're gonna lose control over the drone.

So it started with a Pythonista whose handle I believe is microlinux; he started working on it. Then another group of us -- basically, everybody started digging into a different section of the drone's functionality, started analyzing a different set of packets, trying to decipher them. We all worked together; none of us had ever met each other, we don't even know who any of us are in the real world... Well, they know who I am, I guess; too late for that.

So we were generally successful, and last week we were able to not only decipher the flight control protocols, so we could send the drone up, down, left, right, make it do flips... A flip to a drone is like a lens flare to a photographer. It's the trick that you always do, that is kind of gratuitous, but you do it anyway because it's fun. Any photographers out there?

**Brian Ketelsen:** Silence.

**Erik St. Martin:** I tried. Yes, I tried to learn. Apparently, I'm not that good at it.

**Ron Evans:** I'm really good at framing shots, but I can't focus, and it's a real problem. \[laughs\] Anyway, this is why I use computer vision technology. So anyway, we were able to decipher the flight control protocol, so we were able to fly the drone around, but then there's this 5-megapixel streaming video camera... So we dug in further, and we were able to decipher the streaming video protocol that was coming from the drone.

\[00:23:56.06\] Last Friday, [Gobot](https://gobot.io/) released a new version, 1.10, which included full support for the Tello, including the full flight control protocol and also a couple of demos showing streaming video, one of them using MPlayer. [MPlayer](https://en.wikipedia.org/wiki/MPlayer) (Media Player) is a really great open source player; it's one of the smoothest, and it supports the most protocols, I think... So yeah, that's it, the Tello.

And then, of course, had to have Gobot also working with GoCV, so just to give this surprise away, tomorrow at my talk at [GothamGo](http://gothamgo.com/) I will be showing a DJI Tello being flown around using Gobot, and streaming video to GoCv using TensorFlow to do real-time image classification from the drone video.

**Brian Ketelsen:** Oh, wow. From a $99 drone.

**Ron Evans:** A $99 drone and a Linux notebook, yes.

**Brian Ketelsen:** That is crazy.

**Ron Evans:** I know. The 21st century is definitely here now, my friends.

**Brian Ketelsen:** So with not too much effort - he says having never done it before - it seems like if you could do image recognition and smart things like that you might be able to teach the drone to navigate a course, if the course had pretty simplistic markings... Like if you put police tape outside in a course, you should be able to teach the drone how to stay between the lines. That'd be a fun summer project for the kids.

**Ron Evans:** Oh, definitely. Everyone's like, "Oh, a $99 drone - I'm gonna get one for the kids." Next thing you know, like "Mom, dad won't let me have the drone!"

**Brian Ketelsen:** That's totally me.

**Ron Evans:** \[laughs\] But you get one for each kid, and then you get one for yourself in case the other ones break... \*ahem\* Or whatever excuse you give yourself. I have a collection of them; if you need them, just let me know.

But yeah, once we have that... So it was really about connecting the drone to GoCV, because that lets us then have access to the entire OpenCV world, which includes lots and lots of interesting code for doing autonomous navigation of various sorts of vehicles, flying ones included. And in fact, the same ship, the same Intel Movidius chip -- well, the same chip architecture, not the exact same chip... But the same architecture that is used at Movidius™ Myriad™ 2, the DJI Phantom 2 drone uses that same chip for its collision avoidance algorithm. So yes, this is going to happen, and hopefully we'll have it working in time for GopherCon.

**Brian Ketelsen:** Wow.

**Erik St. Martin:** You know what it'd be really cool? To get several of these and develop something to kind of give them like emergent behavior, where they can fly together and they're adapting to what the one next to it is doing, rather than kind of like a central system controlling all of them.

**Brian Ketelsen:** Oh, give them like flock mentality?

**Erik St. Martin:** Exactly.

**Brian Ketelsen:** The starlings...

**Ron Evans:** Yeah, starlings, exactly... If you've never seen them, starlings are amazing in flight. However, if you've never seen them, there's two other characteristics of starlings that are not typically shown in the cool little Discovery channel videos. The first one is they're incredibly noisy; they literally never shut up all night long. The other is a huge flock of starlings leaves an incredible amount of refuse underneath where they happen to be perched. It's pretty nasty, that's all I can say. The sidewalk is completely white. It's kind of gross. Anyway...

**Erik St. Martin:** \[00:28:31.25\] And now it's just an analogy to things computer vision leaves behind...?

**Ron Evans:** It was more like if too many people have drones, it's kind of like starlings... Like, when there's one, they're cute; when there's five, they're neat, but when everyone's got them, you're like "Okay, maybe that idea about the drone license isn't a bad idea at all."

But back to the swarm thing... The DJI Tello is a Wi-Fi controlled drone that has it's own built in access point. So if you have the chops and skills, you can connect multiple Wi-Fi adapters, or maybe even connect a single Wi-Fi adapter to multiple access points, and then fly them as a swarm. They have the camera built in, so if you have the programming wherewithal, you could add some code to do the positioning, so that they each -- in fact, the Tello already does quite a lot of that for you, that way they stay in the position you put them in for the formation.

Then obviously attaching some cool blinking LEDs to them, so that way you can create something similar to the Olympics drone spectacle that Intel put on. That drone is not commercially available. I don't know if and when it ever will be. I don't even know what I'm talking about, because I'm under NDA. But you could build something similar to that probably with the Tello for only $99 each drone, let's just put it that way. No one's listening to this podcast, right?

**Brian Ketelsen:** No, nobody listens.

**Ron Evans:** Okay, good. So shhhh... Everyone keep it real quiet and be cool; don't tell anyone, just go do it.

**Brian Ketelsen:** I'm quite interested in the fact that it says it supports VR headsets, but I can't find any specs on that. That would be pretty cool too, having the video while you fly. It would make you feel like you were flying.

**Ron Evans:** Yeah, I mean... Actually, if you have an Android phone, you know they have these inexpensive VR headsets, and if you have a budget that's higher than that, you can buy various first-person video goggles... That's all they really are talking about - first-person video in the form of something that attaches to your face, cuts out all the outside light... So you could do that right now. Or even build one within the expense of a single-board Linux computer. I was thinking of making one out of a couple of OLED displays and a pocket BeagleBone, which is the new little tiny $19 single-board Linux computer from BeagleBoard.

**Brian Ketelsen:** Very cool.

**Ron Evans:** The future is here now, we just need to build it, my friends.

**Brian Ketelsen:** We do. I would spend weeks just doing awesome things with this. It's got all of the features, the capabilities that you would want. I mean, it's completely controllable, it's got video, and you could process... I love the fact that you can stream the video back to Gobot, because -- like you said, once you hook up OpenCV, game over; there's all kinds of awesome stuff you can do.

**Ron Evans:** I prefer to say "Game on!", as opposed to game over. Game over is like "The drones are coming for us!" They're saying, "Mom, dad, could you please give me a fresh battery?" You're like, "Ugh, these drones are just like humans!"

**Brian Ketelsen:** \[00:32:28.13\] \[laughs\] Wow, this looks amazing.

**Ron Evans:** And the cool thing is... So the same interface that's used by Gobot for controlling drones from Parrot, or a couple of other companies that are supported - it's the same interface that you use with the DJI Tello driver support in Gobot. So you basically just change two lines of code and the code that you were flying around -- I always fly my Parrot Mini drone. So if you saw my earlier talks on computer vision - earlier as in earlier this year... So this year has been a really great year for, I guess, my personal brand, or whatever (that's kind of corny)... People's awareness of the cool stuff that's out there, that I also am aware of - I think that's more realistic. I'm just the messenger; I write code and I do things, but I always look at it like I'm taking some cool stuff that someone else did, and then putting my stuff onto it and then giving it to someone else who's gonna do some cool stuff with it of their own... You know, it's the circle of code.

But I was really lucky this year to speak at both [FOSDEM](https://fosdem.org/2018/), which is the Free and Open Source Linux Conference that takes place in Brussels - really amazing open source conference. And then just a couple weeks later also speak at [SCaLE](https://www.socallinuxexpo.org/scale/16x) (Southern California Linux Expo)... I think it's the largest independent Linux expo in North America, so I'm truly grateful, and also really happy that so many people are so interested in computer vision and drones.

Anyway, the point was that I was -- if you saw those [talks](https://www.youtube.com/watch?v=7ls9K-VzAb8), then you saw the last appearances that we made probably of the Parrot Mini drone. I took a Parrot MAMBO Mini drone and I attached using a 3D printed Homebrew a first-person video camera the same as are used for FPV drone racers. Maybe I won't retire that one yet; that one's actually pretty cool. Anyway, I have glasses, I can fly with the glasses... That one's controlled by Bluetooth; it doesn't have as long of a battery life and it doesn't have a built-in camera. Well, actually I think the newer version that they came out with has a camera, but I don't have one yet.

Anyway, that's a lot of moving parts - or additional parts, I should say. You have to 3D print an assembly, you have to do a little tiny custom wiring harness, you have to have a video adapter for your notebook computer that lets you receive the analog video signals from the first-person video transmitter... That's a lot of things to go wrong and a lot of extra cables. Now I just do it all through the Tello. So the evolution of drones... Who knows what I'll be flying by the end of the year at this rate?

**Brian Ketelsen:** That is crazy cool. You're not even gonna be flying it, you're just gonna tell it where to go. That's what it's missing - a GPS.

**Ron Evans:** \[00:35:54.25\] Well, the more higher-end drones have GPS built-in. The Parrot Bebop has a GPS, most of the DJI drones have GPS... I mean, a GPS chip is very inexpensive these days and it's easier just to put it in than not, but one thing that you do have to realize is GPS does not work well indoors, especially when there's a lot of interference, like you're on a drone with motors, they're spinning and creating electromagnetic interference, so... Generally speaking, GPS is only used for navigation outside, not really inside. For inside navigation you need to have some other type of data - visual data, for example - to figure out where you are.

**Brian Ketelsen:** Right.

**Ron Evans:** But yeah, it's a very exciting year for everybody who's involved in the programmable drone world, and for me personally just for getting a chance to share some of the stuff that I've been able to do with all these different pieces of technology.

**Break:** \[00:37:11.09\]

**Brian Ketelsen:** I have a put-you-on-the-spot question, Ron. You're gonna enjoy this one. You go to dozens of conferences every year and you show off all this killer technology... What is the biggest crazy circumstance that happened during a conference that was not planned? Which drone crashed into the conference organizer, which sprinkler system got turned on...? What's the best conference demo failure story you have for us?

**Ron Evans:** Oh wow, there's so many when you're flying things around... So many things that could go wrong. Well, let's see... My personal favorite was when a couple years ago I was doing a lot of work with my brother Damon (Damon Evans). He's a project manager. He works at Expedia, he's a hardware hacker as well, brilliant guy... So we were doing a lot of collaborations, and back in those days, my robot ops were not as sophisticated as they are now; robot ops is DevOps for robots... I used to need to have at least two or three assistants with me in order to work all the equipment; now I can do it all myself, and make up bad jokes at the same time, so... I guess that's an improvement. It is for me, personally.

\[00:39:50.27\] So we were at the Golden Gate Ruby Conference, showing R2, which is the Ruby version of the same framework that we were working on for a couple of years... And the grand finale - we had a Wi-Fi problem and he lost control of the drone, so it was flying directly towards the big projection screen. It was literally right at the end of the talk, and it just slams right into the screen. Luckily, it hits it on the little foam/rubber protectors, so instead of the props slicing right through the screen, it just bounces off. The emergency protect -- there's an emergency circuit built into most drones, so if the angle of the drone is dangerous, if it's going to crash, it turns off all the motors, just so that way it falls to the ground... The drone is usually destroyed, but it doesn't chop up anybody on its way down.

So the emergency protection circuit kicks in, the drone drops like a stone onto the stage, and everyone just erupts into applause... Because it was just like -- it was the ultimate mic drop.

**Brian Ketelsen:** \[laughs\] That's awesome.

**Ron Evans:** If we could only do that on command, that would be amazing. But that was a pretty good one.

**Erik St. Martin:** So I've got a question - the Tello has the Movidius VPU in it... Are there boards that you can buy for that? Say you were working on your own quadcopter, or something... Because there's a lot of open source flight controllers; it'd be interesting to augment one and leverage that VPU.

**Ron Evans:** Sure. So Movidius sells a developer kit with the Myriad 2 in the form of a USB stick. So if you have a USB port, full-size, you can just plug it in; there's Linux code... We have a project called GoNCS (Neural Compute Stick - that's the real name of this thing, I guess). Anyway, GoNCS lets you use the Myriad from Go, and of course, there's a demo on that website for GoCV as well, that lets you use GoNCS from GoCV, so utilizing the hardware acceleration built into the Movidius VPU. So that's one way to do it. There are others... I mean, basically the war is on. The war of the VPUs.

Many people are like "VPU? I haven't even heard of VPU and there's already a war on? Man, that was quick..." So yeah, Intel has bought Movidius I think two years ago; they saw they needed some powerful armaments in this new competitive space. NVIDIA obviously is a big leader in this space, with lots of interesting stuff coming from them... ARM, obviously, big important player in the embedded space, and they have made several announcements recently... I mean, it is game on, as far as this using deep neural network technology for processing computer vision information.

Now, there are other applications for this stuff... I know several people who are using neural network technologies for other applications having nothing to do with computer vision, but that's my own particular line of research, and there's been a lot of exciting developments in that space.

**Erik St. Martin:** That actually answers my question even better, because that means you can open up playing with Go and that VPU just on your regular laptop; you don't necessarily even need a drone for that.

**Ron Evans:** Oh yeah, yeah. That's absolutely the case. It works quite well. You can also use multiple VPUs in a single application. Go programmers already know where I'm going with this; Python programmers are like "Well, what would you need that for?" \[laughs\] Sorry about that, but... It is a problem.

\[00:44:12.29\] Python is a great language, and if you wanna do computer vision programming in Python, you cannot go wrong, because you will find lots and lots of information out there, but you will hit a point where the performance is just not going to cut it. That's not Python's strength, it's its weakness; its strength is its ubiquity and that there's lots of cool libraries and tools already out there.

Go has been playing catch-up compared to other technologies perhaps in some of these areas. Embedded - I know we've talked about this before. At the first GopherCon I was fortunate to have my talk accepted. I was not able to make it to the first day of the conference, unfortunately (at the first GopherCon), which I really wanted to go there... But my excuse was the same as [Katrina Owen's](https://twitter.com/kytrinyx) excuse, which was both of us were the recipients of a Ruby Hero Award the day of the first day of the conference. So I saw Katrina on stage, and I'm like "Oh, I know why you're getting this award. I'm not really sure why I'm here, but I had to show up because I still love Ruby, and I don't wanna send a message to the Ruby world like "Sorry, I moved on to Go. Peace out!" That's not who I am and that's not the message I wanna say, and that's also not how I feel." So it's like "Oh, I've gotta miss the first day of the first GopherCon."
So I missed [Rob Pike's](https://twitter.com/rob_pike) keynote where he said "Go is not really for embedded systems", and... I'm sorry, I didn't know that, Mr. Pike; I use it for embedded systems." Now, I wasn't the only one; it turns out there are other people who have been trying to do things with Go and embedded systems for a while. Obviously, the portability is a big deal. The performance is a big deal, but not quite as much when you're working on small, low-powered hardware. It's more about just eking out as much performance as you can get... But the fact that we don't have an official -- the community around embedded systems in Go is an informal community; it's one that's sort of self-organized, and there are other communities... For example, the Rust community - there's a lot of cool stuff coming from Rust, a lot of smart people working in Rust. Also, one of the key takeaways from FOSDEM, the Belgian conference, was there is no Go versus Rust. That is made up by the technology -- the technology media wants to make it language A versus language B. It's not true. In fact, there are quite a few projects that are using both Go and Rust quite well together, because they sort of solve different problems in a different way.

That sort of brings us to some of the cool stuff that's going on that I'm not directly involved with... So there's a really interesting project that has -- you know, the last couple of weeks have been a tremendous series of weeks for hardware-oriented development in the Go programming world; it's been an amazing couple of weeks.

\[00:47:55.24\] Obviously, flying drones with Go is really cool. You're welcome. \[laughter\] But that is so just one piece of the coolness that's going on out in the world of Go and embedded systems; this would be a great chance to give a shout-out to [Emgo](https://github.com/ziutek/emgo). Emgo is a project which is designed -- how would I describe Emgo? Emgo is sort of like an attempt to use a Go-like syntax, to try to use a version of Go that's able to run on very small, low-powered, single-board system-on-chip type devices like the STM32 microcontroller. So wait, you're running Go on microcontrollers? How is that possible? Well, it's not possible... Unless you do a few tricks, which is many people who program Arduinos think they are using C++ to program Arduinos, but you're not. You're using a C++-like syntax and you're using a bunch of the C++ tooling, but it's not actually a full C++, as Arduino microcontroller programmers find out relatively quickly. You can't do all the same things in Arduino, C or C++. The language is called Arduino, for lack of a better descriptor...

So Emgo is like that - it's a stripped down version of a lot of Go functionality; it's not the full version of Go. If you think you're gonna run all the same Go stuff on a microcontroller, you're dreaming. But who said you needed to do that to be doing something amazing and useful? That's a false dichotomy. So this project Emgo - it takes the GCC compilers in Go, does some cool hacks to create a bit of a toolchain, and he has had a couple of blog posts that were featured on [Golang Weekly](https://golangweekly.com/)... It's really, really cool the stuff he's doing. Now, it's way more complicated than most people can really understand right now, just because it's so new, but I find it very exciting, and I think it's going to be a tremendous addition to the Go hardware-oriented development community... So definitely go check out Emgo.

**Erik St. Martin:** Yeah, we've actually talked about it in the last two weeks, as the post came out. I still have yet to get to play with it, but I'm really excited by it because Brian and I tinker a little bit in our spare time on hardware, and the idea that I can use even something Go-like instead of C is super appealing.

**Ron Evans:** Oh yeah, absolutely. And there have been a few attempts to do this... It's a hard problem. I mean, it's similar to the computer vision problem, like "I think I know how to solve it, but..." You know, at least in this case, thank God, someone else did. Someone else flinched first, and boy, am I happy. Thanks, man...! Because I really wanna use this, and also I want to evaluate what abilities there are for combining the powers of Gobot along with Emgo... Because Gobot is like Ruby on Rails, and Emgo is maybe like the Postgres SQL driver for Ruby. That's a bad metaphor, but the idea being - you're gonna need both of these things and a bunch more tools as well to actually create any serious production quality hardware-oriented application.

**Erik St. Martin:** \[00:52:11.25\] So should people reach out to you for the working group side of things? Because it sounds like a call to action you're looking for is to kind assemble people who are interested in doing Go or Go-like things on embedded devices.

**Brian Ketelsen:** So yeah, there's definitely a need for a Go embedded working group. Rust has an embedded working group that I believe was formed at the end of last year (I'm not sure about the timing). Several of them are Rust core team members... I'm absolutely willing to help with this, but... So the big difference between what we're doing and what they're doing is this is an -- the Rust Embedded Working Group is an actual official part of the Rust team. The stuff that we're all doing is we're just all off on our own, doing our own things. The best thing would be if Google decides to sponsor this, or something - I'm just picking Google because, you know, Go... But maybe it's another big company - maybe it's Microsoft, maybe it's Amazon... To say, "Wow, we really need this, and to make this happen, someone's gotta make it their full-time first-class activity, because otherwise it just doesn't go very far very fast.

When everyone has time, they row the boat a little bit, but it doesn't really move anywhere, so one thing I think which would be really great for the community is to lock down some real corporate-level sponsorship of these activities... Obviously, Gobot is out there first; it's the most popular, it's got the most users, so that's the first place to start. But more importantly, Gobot is the flag to rally around, to say "Emgo, go do your cool stuff and we'll figure out if --" maybe it's incorporated into Gobot, maybe it's not. That doesn't matter. The point is this is important work that needs to be done, and we need to get more people to know about it.

A good example of this type of collaboration is -- so recently we added part of... How do I say this...? So there's a really cool project called [Periph.io](https://periph.io/) from Marc-Antoine Ruel of Google; it's a very cool hardware-oriented project which is designed to be a lower-level set of capabilities than what Gobot provides.

The other important part of the most recent Gobot release, that was sort of overshadowed by all the drones flying around, is that we are now using Periph.io's SPI low-level functionalities as part of Gobot in order to control SPI hardware devices such as analog to digital controllers, or OLED displays. So we've been working on figuring out how to combine forces - you know, Voltron these projects for a while - so we finally got the work done. In fact, Marc-Antoine has also been super, super helpful with some other computer visual work. He's a great guy and a tremendous contributor to the community overall.

\[00:56:09.04\] So these are the sort of things that if we can find some way to make it formal, make it real, put a ring on it, if you will... I'm willing. So here's my call-to-action - big co's in the world (or even small co's), if you think this is important, and if you care about this, get in touch and write a check. Or hell, hire me. I'll run it from your company, to make this happen... Because that's why Rust's Embedded Working Group is gaining a lot of momentum and is ultimately going to be successful, because it's real; it's not just a side-project... I mean, this is not a side-project for me, but you can only do so much as a small consultancy, so I think it's important that we as a community rally around the sorts of projects that we think are important, and we put some funding behind them so that we can find out where they go.

**Brian Ketelsen:** Exactly. And the important projects are the ones that can make my barbecue work.

**Ron Evans:** Exactly, food is critical to life. \[laughs\]

**Brian Ketelsen:** Yes, yes. That's exactly it. I think that we are getting close to our time limit, and we should probably move on to news and interesting projects. Does anybody have anything they wanna hit with Ron before we do that?

**Erik St. Martin:** No, I think we're ready.

**Brian Ketelsen:** Alright, I'll kick off the news, and Carlisia is the one who actually dropped this in our Slack channel just a second ago... This is gigantic, momentous, huge news. The Go Blog ([blog.golang.org](https://blog.golang.org/)) has a new blog post out today written by Steve Francia on [Go's new brand](https://blog.golang.org/go-brand). We've got a new Go logo, a new typeface, new colors, new brand guide... I mean, we're talking like a printed brand guide booklet here. Go is looking serious - very, very serious - and I think at this point it's corporate-ready.

**Carlisia Pinto:** It looks really, really nice. Really well put together, clean, good-looking... I love it.

**Erik St. Martin:** Yeah, now the question is, is this how they're using it, or they plan on everybody else using it? What happens if you use it inappropriately? ...things like that.

**Brian Ketelsen:** Well, I think you would get a call from the brand police... Because if they go through the trouble of publishing brand guidelines for a brand and a trademark that they own, then they're probably gonna call you and say "You're using our brand inappropriately, please change that." That's what I would assume. Why would you go through the trouble of publishing this?

**Carlisia Pinto:** I would agree with Brian. From what I read - I mean, I read the whole thing... They are acting like a corporation, and they're giving the guidelines for usage of the logo and fonts, and they're even giving you pre-made master slides... And I don't think they would do anything, I don't know; it's a good question. But I think they can at least ask you to use the proper branding.

**Erik St. Martin:** Yeah, let's look at an example... Like the Gopher page - it says "The Gopher is not a logo. It can be used on communications, but it shouldn't be used as a logo." So what does that mean for all the meetups and conferences that are using Gophers?

**Carlisia Pinto:** \[00:59:53.26\] Well, then the question for me would be "Is that logo representing your meetup, or is the logo representing Go?" Because if you are representing Go, then... You know what I mean? You can use a Gopher for your meetup...

**Ron Evans:** Well, I'm not an attorney, and I don't play one on the internet, but I'll weigh in, since this is a podcast and we're expressing opinions. It's a cool-looking logo, totally cool. I'll use it, but there's no requirement for me to use it. I don't have to use anything visually from Go; I can even call it something else, because it's open source. So I could say it's Bagoogle-Go, right?

**Carlisia Pinto:** Yeah.

**Ron Evans:** They can't stop you from doing that. There is no basis for doing that. I don't think that's the basis for this. I think it's more "Hey, everybody! We would like to make your lives easier by giving you some cool-looking visual stuff that you can show to your boss's boss's boss, and that person doesn't start laughing at you because it's fonts that that person doesn't like." I don't think this is an edict to say "You must now use this." I don't think there's -- they have no way to enforce that... And also Go. Are we talking about Amazon Go? Are we talking about Intel Go? Are we talking about Go the game? No, this is not that, and it even says at the bottom of this - which I've just read real fast, while we were on this post, because I hadn't seen this... This does not mean -- I scrolled past it; I was too fast. Oh, "Coordinated with and built upon the great foundation that Renee French established. Rest easy, our beloved Gopher mascot remains at the center of our brand." So this is not about killing Gophers, thank god. \[laughs\] I think this is for consistency, it's to create an identity that we can -- again, it's a flag for us to put up, not one that we are gonna have stamped on our foreheads; at least that's my interpretation. But remember, I did say I don't even play an attorney on the internet, so... \[laughter\]

**Erik St. Martin:** Alright, so what else do we have?

**Brian Ketelsen:** I dropped a bunch of things in our list this week. One of the most interesting ones was a repository called [Anko](https://github.com/mattn/anko) from Yasuhiro Matsumoto, which is [mattn on GitHub](https://github.com/mattn). It's a scriptable interpreter that you can embed in your app, which means that you can run -- it's basically like embedding Lua in your Go app, or something else... It's really impressive how complete it is and how easy it is to embed that interpreter, and you can do all kinds of crazy stuff with it... So I was thinking that maybe I should take a week or two off and just go play with all the cool things that I can script, but then I thought better of it.

**Erik St. Martin:** So I've been at \[unintelligible 01:03:01.10\] this week, and I've actually just earlier today watched Francesc do a talk about [the robustness of Go](https://speakerdeck.com/campoy/the-robustness-of-go), and kind of comparing that to Erlang and BEAM, and stuff... I won't give away too much, but the slides are online now and I would imagine within the next couple of days the talk itself should be published in video form.

**Ron Evans:** I can't wait to see that talk.

**Brian Ketelsen:** Yeah, it's gonna be a good one.

**Ron Evans:** That bullet point about Erlang is the one that literally made me be like "I've gotta see this talk!"

**Brian Ketelsen:** I saw a picture on Twitter that someone had published - I think Bridget \[01:03:36.19\] had published the picture - and it showed how using Erlang with the BEAM VM and using Go with Kubernetes was generally analogous. So if you want to have high resiliency Go apps, just pair it with Kubernetes, and you've got all of the features that Erlang has for network resiliency, and I thought that was an interesting analogy.

**Erik St. Martin:** \[01:04:08.03\] That was essentially the takeaway for it... Yeah, I won't give away too much detail, but it's actually really good, and he walks through some of the language features and things like that too, for things that are just robust by themselves inside Go.

**Brian Ketelsen:** That's cool. It's gonna be a good talk.

**Erik St. Martin:** And speaking of good talks, Brian, what have you and I been working on this week?

**Brian Ketelsen:** Good talks...? \[laughter\] I don't know what have we been working on this week; it's been a rough week for me.

**Erik St. Martin:** So we have started our speaker selection for [GopherCon](https://www.gophercon.com/)...

**Brian Ketelsen:** Oh yeah, that...

**Erik St. Martin:** Yeah. So I imagine that we will make an announcement at least of some of the speakers here soon... But yeah, all of the acceptance and rejection emails will be going out pretty quickly over this week, and maybe early next week, depending on how fast we get through this stuff. So you can look forward to speaker announcements soon.

**Brian Ketelsen:** I totally forgot that I did that, too. I'm telling you, it's been THAT week.

**Carlisia Pinto:** And there is the [Brazil GopherCon](https://2018.gopherconbr.org/) that opened their CFP this week.

**Brian Ketelsen:** Very nice.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** I'm hoping to come up with something to submit for that. Okay, so I think we're about out of time. Do we wanna run through \#FreeSoftwareFriday?

**Brian Ketelsen:** We can skip it if we're out of time... It doesn't hurt my feelings.

**Erik St. Martin:** I think we've got a couple minutes; it shouldn't take long.

**Brian Ketelsen:** Alright, mine's easy - since I already mentioned mattn (Yasuhiro Matsumoto), I was trolling through his GitHub repositories and he's only got 1,300 of them, and I realized how many of them are embedded in the other open source projects that I use; I was shocked. So shout-out to Yasuhiro Matsumoto for building so many killer projects that are the foundation of all of the rest of the killer projects that I love. That's really awesome.

**Ron Evans:** Wow, and really quietly, too.

**Brian Ketelsen:** Yeah.

**Ron Evans:** Well, my shout-out this week is to -- somewhat better known in the community, but no less ubiquitous... [Steve Francia](https://twitter.com/spf13). Earlier this week I was using [Hugo](https://gohugo.io/) for one thing, and then [Cobra](https://github.com/spf13/cobra) for another thing, and then I just thought, "Wow, without Steve's work..." And really the amazing part is not just how cool those projects are, but the fact that other people now are primarily responsible for maintaining them. In other words, they're really well done work that is both useful to the community and able to be maintained by the community itself. That's a tremendous achievement.

**Brian Ketelsen:** \[01:06:56.14\] Yeah. And two really fantastic libraries, too.

**Erik St. Martin:** So mine for this week, because we're talking GOTO-themed, because [that's where I'm at this week](https://gotochgo.com/)... I just wanna give a shout-out to Jeff Hodges. He did a great talk yesterday on productionizing distributed systems, which is based off of a blog post he wrote a few years ago, which is still super relevant, called "Notes on distributed systems for young bloods." Here's a shout-out to him for sharing a lot of his distributed systems knowledge and the challenges there in how to build productionized distributed systems. I'll link to the old post in the show notes, but in theory, by the time this recording goes out, the video from Go 2 should be available, too.

Carlisia, did you have anything this week?

**Carlisia Pinto:** I did not.

**Erik St. Martin:** Alright. So I think we might actually be like perfectly on time. This will be interesting. Thanks so much for coming on again, Ron. I think DJI probably owes you some commission, because I have a feeling there's gonna be a lot of purchases. \[laughter\]

**Brian Ketelsen:** I'm pretty proud of the fact that I only bought one during the show. That's good.

**Erik St. Martin:** There's always time for more. You're gonna go back and listen to the episode and you're gonna hear us start talking about flocking behavior and you're gonna be like "I'm gonna need more than one for that..."

**Ron Evans:** I already have a couple. \[laughter\] Busted! I already have a couple. \[laughter\]

**Brian Ketelsen:** Oh, we're in trouble...

**Carlisia Pinto:** Of course! \[laughter\]

**Erik St. Martin:** It's always a great time getting you on the show, Ron. Thanks so much for coming on!
**Ron Evans:** Thank you guys for having me. I love the show, and I love to participate. Keep up the great work!

**Carlisia Pinto:** Thank you.
