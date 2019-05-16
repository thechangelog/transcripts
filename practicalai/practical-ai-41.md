**Daniel Whitenack:** Welcome to Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I've got Chris, my co-host, on the line. He's chief strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great! How's it going, Daniel?

**Daniel Whitenack:** It's going well. You just came back from O'Reilly AI, right?

**Chris Benson:** Yup. I spent last week in New York City at the O'Reilly AI conference. I had a lot of fantastic conversations. I did a little bit of recording, and so maybe some of that is to come down the road.

**Daniel Whitenack:** Awesome. I can't wait to hear that. Any highlights?

**Chris Benson:** I talked to quite a few people about TensorFlow 2.0. Everyone seems to love going from 1.0 to 2.0 and truly adopting Keras as the blessed way. I'm probably biased, because I've been pushing into TensorFlow 2.0 myself, trying it out a bit... So yeah, I had a lot of great conversations and I met a lot of great people there.

**Daniel Whitenack:** Awesome. Can't wait to hear more about it. Well, today on the show I think it's gonna be a lot of fun, because we're gonna talk about something that might seem a little bit sci-fi-like to certain people... But I think we're gonna try to bring it down and make it practical, because after all this is Practical AI.

I'm really excited, because we've got Adam Berenzweig from CTRL-labs with us. Welcome, Adam!

**Adam Berenzweig:** Thanks, I'm excited to be here.

**Daniel Whitenack:** Adam is gonna help us dig into a little bit of what CTRL-labs is doing, specifically around neural interfaces, or processing our brain signals to control machines. I'm pretty excited about this. Adam, do you wanna start by just giving us a little bit of your background and how you got into AI, and ended up at CTRL-labs?

**Adam Berenzweig:** \[00:03:37.17\] Yeah, absolutely. Academically, I studied speech recognition; I have a Ph.D. in speech and signal processing, which if you think about it, it's the branch of machine learning that's closest to kind of a human-computer interface application area. In general, if you think about machine learning as -- you know, one big aspect of machine learning anyway is artificial perception, sight and sound and hearing... A big part of the world that we as humans need to perceive is communication from other humans, and so speech recognition is, I guess, the branch of machine learning that's always been focused on understanding the output of human brains in the form of speech. Maybe that's gonna set some of the context for what we'll talk about later with what we're doing at CTRL-labs.

After my Ph.D. - or actually in the middle of my Ph.D. - I went to Google as an intern and decided it was too amazing, and I stayed. I did go back and finish my degree later, which was, I consider, one of the most heroic things I've ever done - to actually leave Google for a bit and go back and finish it...

**Daniel Whitenack:** Yeah, bold.

**Adam Berenzweig:** So I was at Google for ten years, and I worked -- in general, I'd say my beat was building products around machine learning. So I was no longer doing hardcore, deep research, but taking what was coming out of the lab, taking stuff that was being worked on in Academia and of course within Google, and thinking about how to apply that to products. That was across a number of domains; I worked on text with Google News, and the recommendation algorithm there... I worked on Google Music... You know, I was talking about speech before - what I was particularly in at the time was music and non-speech audio, and understanding just the world of sound around us (computational auditory signal processing it's called), and this was kind of post-Napster, it was the late '90s, and so I was also a little bit idealistically, politically motivated to come up with technological solutions that would allow musicians to connect directly to their fans without these intermediary giant corporations controlling all the intellectual property in the middle... So I thought, as many people did at the time, that recommendation algorithms are gonna be this great equalizer.

We already had a great way to distribute music, and we had a great way to produce music cheaply; people could make little recording studios at home... But in order for people to find music, we had to solve that problem. So I was interested in doing recommendation, but from the audio signal, so actually analyzing the content of music from the audio, using that to understand it, and then make recommendations to people.

Then I turned into Google Music and I helped build the music recommender for Google Play. Then eventually I started to work on images, and I worked on Goggles, which was one of the early image recognition mobile phone apps; you could point your camera at something in the world and we would tell you what it was. This is all pre-deep learning, actually while I was working on that project... So the project at the time I joined was -- the app had already been launched, and it was kind of an amazingly cool toy, but it wasn't quite yet a really useful tool for people... So the obvious thing to do next was to run this technology, run recognition on people's photos.

At the time, Google didn't have a Photos project. It was the Android camera, there was visual search on the web, you could upload photos, there was Picasa, the desktop app... So at the time, the Photos project at Google was kind of in its nascent form, but there was clearly a way that technology wanted to have its home. So I worked on images for a while with that. Then I left and I helped start a company called Clarify, which was an early deep learning image recognition company.

In between the time I joined Goggles and when I left Google, the deep learning -- this was about 2012-2013... So working on Goggles, I saw some of the early, large conv nets that were coming out of research. There was an intern at Google, Wojciech, and it was doing things that we'd never seen possible from an image recognizer before that. It was really clear that "Oh my god, this is really gonna change everything." It was a technology that was ready for primetime.

**Daniel Whitenack:** For some of us - for me in particular - I feel like a lot of what I've been exposed to is kind of like post the deep learning revolution... So for someone that was involved in machine learning for quite a while before that, how did you perceive all of these things coming in around deep learning and the acceleration that happened?

**Adam Berenzweig:** \[00:08:08.16\] Oh, it was magic. It was incredible. The field had been making incremental advances for 15 years at that point, and SVMs were kind of still the hot thing, statistical machine learning... A lot of the technologies were okay, and pretty good for a narrow range of things and a narrow range of classes; you could get a binary classifier that would work fairly well... But the whole idea of having a single network that could recognize a thousand things at once, or eventually 10,000 and upward, was enormously -- it just changed a lot. Similarly on the speech side, the early deep learning-based speech recognizers were just blowing everything away. It was pretty wild.

**Chris Benson:** I know that you were saying that you'd gotten to Clarify in around 2012-2013... Was there anything else you did prior to jumping into CTRL-labs?

**Adam Berenzweig:** Yeah, so I worked for a year on an idea for a startup which I still hope somebody will go and do. It was actually quite different than what I'm doing now, but it was just thinking about the problem of teams collaborating together, and how machine learning can wrangle all of the data that sits between people on a team. Probably you have this problem - you've got data scattered across Google Docs, and Slack, and Trello, and who knows what other places, and where is all the stuff, and who knows where things are...

**Daniel Whitenack:** You know me so well... \[laughter\]

**Adam Berenzweig:** Yeah. So I worked on that for a bit, we had some good ideas, but eventually I got sucked into CTRL-labs because -- so Reardon and crew reached out to me at some point while I was doing that, and it was just really up my alley; it touched on some ideas that I'd been thinking about for 20 years at that point.

**Chris Benson:** So can you tell us all about what CTRL-labs is and how it came about, what you're doing there, and just give us an intro to it?

**Adam Berenzweig:** Absolutely. CTRL-labs - we're building a neural interface, and maybe a bit surprisingly for what people think of when you hear that phrase, the device that we build is worn on the arm, and I'll get into what that means in a second... But essentially, the goal of the company is to become the new interface technology that allows people to connect and control machines. So you can think of this as eventually perhaps a replacement for everything you use to control machines right now - keyboards, mice, touch screens, joysticks, all of that. Because when you boil it down, all of those physical mechanical controllers are just a machine that is designed to convert signals coming out of your brain that get transmitted into muscle movement, that you move your hand to touch something, which eventually gets transduced into a signal that goes into the computer to control something in software. So we're just trying to cut out all of that middle stuff, and go straight from the signal coming out of your brain, through your muscle, decode it from your muscle, and go from there.

Reardon and Patrick started the company about three years ago at this point; they met at the Neuroscience Department at Columbia. Reardon's background is quite interesting; he was at Microsoft back in the day and basically started the Internet Explorer project, and saw that through, and at some point got sick of tech, decided he was gonna go back and study Latin and Greek, and got a Classics BA, and then eventually started dabbling in neuroscience and got a neuroscience Ph.D, and so he met Patrick.

**Daniel Whitenack:** And now he's back.

**Adam Berenzweig:** Now he's back in tech, yeah.

**Daniel Whitenack:** And this is the CEO, is that right?

**Adam Berenzweig:** Correct.

**Daniel Whitenack:** Okay. So you mentioned that what most people might think about when they first think about a brain-machine interface -- the first thing that I think about is a bunch of wires coming out of my brain, or someone drilling a hole into my skull and inserting something, and then connecting it to a big server, or something like that, and then I take over the world... You know, I've seen too many sci-fi movies...

**Chris Benson:** Yeah, bad imagery, man...

**Daniel Whitenack:** \[00:12:04.09\] \[laughs\] This is not the case with CTRL-labs, right?

**Adam Berenzweig:** Yeah, we're not going for the plug in the back of the skull just yet. \[laughter\] There's actually some really interesting reasons why we believe that that's actually never gonna be the right way to do this. If what you're interested in is control - and I'll talk about what that means - and having some effect in the world, then the motor nervous system is the part of your brain that is specifically evolved to do that.

Let's maybe just talk a little bit about the neurophysiology and the neuroanatomy, to back up what is behind that belief of ours. Not to mention the fact, of course, that it's not so user-friendly to drill holes in your skull in order to play video games...

**Chris Benson:** Thank goodness!

**Adam Berenzweig:** Yeah. So maybe a good way to start is that -- so one of our science advisors, Daniel Wolpert, who's just an incredibly brilliant neuroscientist (his expertise is in the motor-nervous system), he's got a great TED talk that everyone should totally go and watch; I think it's called "The real reason for brains". He makes it a super-surprising but really cogent argument that from an evolutionary perspective, the only reason why brains exist - they're not there for thinking and feeling, even though that's obviously what we think of as our human experience of having a brain... But as far as animal evolution goes, brains are there for one purpose, and that's to move muscles to have some effect in the world. Because from a survival/evolutionary perspective, nothing else that you do has any purpose in the world; the one exception that he makes is sweating. That's the only thing you could do to affect the world, besides move a muscle. Breathing, talking - everything involves your motor nervous system.

He also gives this really cute example of -- there's a sea squirt, which is this super-primitive form of life; it is an animal, it's born with a brain, and it swims around for a while in the early part of its life, and then at some point it settles down, finds a nice little rock, and then it digests its own brain, because it no longer needs it, because it's not moving anymore, and it doesn't need this extra baggage.

**Chris Benson:** Yeah. My wife claims I did that years ago.

**Adam Berenzweig:** Well, I have some evidence that you still have a brain, but I'm not gonna argue with your wife.

**Chris Benson:** \[laughs\] Go ahead, I'm sorry.

**Adam Berenzweig:** Yeah, so if you think about it from that perspective, all of the cortical BMI (brain-machine interface) that is focused on getting signals out of the cortex... If what you're trying to do is figure out -- okay, so let's talk about control. Our name of the company is CTRL-labs, and from our perspective, what we think of control is it's the process of turning intention in the mind into action in the world; you've got some desire to have some change happen in the world... That's our loose definition of intention. And to turn that into action, actually make something happen in the world, the part of the brain that does that - you might have a lot of swirling, unconscious thoughts and all this stuff that's responsible for regulating your internal organs and whatnot... But the moment you go to do something in the world and that intention becomes action - that's your motor cortex; that's the part of your brain that is what we call the output port of the brain.

In fact, even people who are doing invasive cortical BMI, opening up the skull and trying to plant electrodes in there, they're planting those electrodes targeting the motor cortex, because that's the part of the brain that is involved for this stuff. You specifically don't want information -- all the rest of the processing that's happening in the brain is essentially background noise that you want to get rid of. So that's the first principle, from a neuroscience perspective, why we're interested in the motor nervous system.

**Chris Benson:** Okay.

**Adam Berenzweig:** The second thing is just a matter of scale. There's billions of neurons in the brain; when we are focused on the arm and the forearm - the reason why we're there is because it controls the hand, and the hand is super-important for humans. In fact, about a third of the cortex is dedicated to the hand. Another third goes towards the speech production system, and then the rest of your body (all of your body) only gets the remainder.

\[00:15:57.10\] So there's on the order of 10,000 motor neurons in the arm, so we just have a much simpler problem in terms of trying to decode signal from noise being outside the body.

Then the third thing is that there's just a signal-to-noise ratio question... And the really great thing about the neuroanatomy when we talk about surface EMG -- the technology we use to decode the signal, I should say, is surface electromyography. That's basically taking the electrical voltage changes when your muscles contract, and decoding that with electrodes that sit on the surface of your skin, that are embedded in a bracelet or eventually a watch, and they're just reading voltage potential differences as your nervous make your muscles fire.

The critical thing to understand, and why we call this a neural interface, is that nerves communicate in this cvasi-digital way with these spikes. So even though it's an analog signal in the sense that there's a voltage potential wave that goes down the axon of the neuron, and also through the muscle, as we'll talk about - the shape of that wave, and in fact the size of it, the amplitude, is extremely rigid for a given kind of neuron. It basically always looks the same. So information is encoded in the nervous system through essentially the firing rate of these spikes. It's almost like a digital binary, ones and zeroes, sort of information flow.

So when the brain is trying to move a muscle, a spike train, a series of these very fixed-shape spikes, will be sent from the motor cortex in the brain. One neuron will carry that signal down the spinal cord; the second neuron will carry it from the spinal cord out to the muscles. There's only two neuron hops from there. Then when it hits the muscle, the same exact shape of the signal is propagated through the muscle as the muscle contracts. So the signal that we get is essentially the exact same information that's coming out of the motor cortex.

**Chris Benson:** That's cool!

**Adam Berenzweig:** This was the whole insight that Reardon and Patrick as neuroscientists understood - why go into the brain, when the signal that you actually want as far as control is available so much more easily on the surface of the skin, in the muscle?

And there's one more point to make, which is that the size of the voltage in these signals as they're traveling in the nerves is in the order of microvolts. But what happens in the muscle once -- so a single nerve, motor neuron will come and innervate, meaning attach to a nerve, a whole bundle of muscle cells from these muscle fibers... And that whole thing together is called a motor unit. So one nerve and all the muscle fibers that it innervates is called a motor unit. And each of those muscle fibers in the motor unit only gets input from that one signal; so it's kind of like a one-to-many mapping.

That whole thing, when a spike comes down the nerve, it all fires at once, and it's basically an amplifier. So from an electricals perspective, we've got this amazingly nice built-in amplifier that takes a tiny little microvolt signal that'll be traveling in a neuron and pumps it up to millivolts, that's readable through all the tissues of the arm, and through the skin, and not worry about hair and all that stuff.

**Daniel Whitenack:** Alright, Adam... So maybe it's just because I don't want to have a hole drilled into my head, but you've convinced me that that's not the way to go, and there's this really great signal that we can tap into through the surface EMG... Maybe you could kind of switch directions a little bit here and kind of motivate why neural machine interaction or neural interface - why is it important that we pursue this sort of interaction, and don't just stick with the kind of mechanical interfaces that we're familiar with?

**Adam Berenzweig:** Yeah, thanks, that's a great question. I guess maybe one way to get into this is think about the transition that seems to be happening in personal computing. A lot of people who pay attention to technology believe that we're on the cusp of a giant paradigm shift. What is gonna be the personal computing platform that is gonna replace the phone in your pocket? Maybe let's talk a little bit about the history of HCI and the kind of paradigm shifts as I see it over the last 40-50 years.

So "In the beginning was the command line..." By the way, that's a really great essay by Neil Stephenson about just that - how cool it was when you used to compute just using terminals and text input. But it's also interesting in its perspective about the transition from that to GUI-based Windows -- what are they called...? WIMP - Windows, Icons, Menus and Pointers. The desktop computing paradigm that we all know and love (?). Maybe love. That came out of the researchers at Xerox PARC and Doug Engelbarts, the mother of all demos. So that was a second phase. Then there was touch screens and mobile computing.

So it seems like with VR, AR, XR, wearable computing, and the whole idea that computing is getting cheaper and smaller and will start to become embedded in the things around us, and maybe just embedded into things that we can wear, and a multitude of sensors and a multitude of processors around us... So for a long time HCI researchers have been sort of anticipating this transition... And I guess ubiquitous computing is probably the best umbrella term for this. Some people are now calling it spatial computing, or wearable computing.

The vision is that once the display becomes mounted in your eyeglasses or your contact lenses, then you no longer have to be holding anything, so how do you do input? You're not walking around with your magic AR glasses in the future, holding an Xbox controller, so that you can navigate your e-mail. And if you think about it, every one of these big HCI paradigm shifts really comes with a pair of technologies that play the input and the output role, that together make up the new interface paradigm.

With the shift from console computing to GUI computing - the mouse is the input, and then a cheap rasterized display technology was the output. With touch screens it's kind of interesting, because the input and the output are fused together into a single device, but they have two very different roles that they play, and they're actually completely separable. You could have a touch screen that's only input if you want that.

If you go back and read -- I've just re-read some of Jaron Lanier... You know, he's one of the early VR pioneers, and I think he's credited as coining the term VR... And he was so focused in the beginning on the input, as much as the output. They did all these experiments with data gloves, and all kinds of other motion capture technologies, because they recognize that if you wanna have a truly immersive experience, then it's not enough just to have a visual immersion, like the input side; you also have to understand what is the person trying to do, and let them interact with the world.

That was a big focus in the beginning, and I think what happened around the time when Palmer was making the hardware work on the display side, that raced ahead, and cheap and good enough display technology, with good head tracking, happened before there was another big shift on the input side... So that kind of leapt ahead, and that leads us to where we are right now, where there's this kind of a big gap... And if you use VR systems today, it's really beautiful; you feel visually-immersed, you look around, it's amazing... And then you just have these sticks, where your hands should be, with these kind of game controllers stuck onto a positional tracker, and it's very kind of disappointing from an interactions perspective. You don't have the naturalness, the expressivity, the incredible dexterity and agility and skillfulness that you have with your hands.

I think that's the big picture, and we're thinking this technology is going to be the thing that is in a device that you just are wearing all day long, and is the way that you interact on a minute-to-minute basis with all the devices in your life... You know, controlling the volume in your car, and typing an e-mail while you're walking down the street, or playing a video game, or whatever it is. Hands are the best controllers, so all you need is hands, and we're just building a device that will just allow you to plug in directly to the signal that's controlling your hands.

**Chris Benson:** \[00:23:49.01\] Gotcha. One of the things I'm wondering -- and that was a great explanation, by the way... But in a very practical sense, I'm imagining that person that's starting to utilize this technology going forward, and I have seen the AI conference video, the presentation, so I have a sense of being able to utilize the technology where you're starting to remove the hardware between... But we also have other HCI which, for listeners, if you don't know, is Human-Computer Interface forms, like voice interfaces - they're so popular. I have kind of a two-part question - how would you imagine what you're doing at CTRL-labs interfacing with these other types of HCI, such as doing this chat, which is so popular now; and we're already kind of programming that in APIs. And the second half to this is when you're looking at that combined world of utilizing all of these methods together -- I know you guys have a control kit that you've released, and it has what you're essentially describing as like an API for the brain... How do you realize that in an API, considering that you have different modes of communication?

**Adam Berenzweig:** I think there will be a lot of things used at the same time together. I think that there's gonna be a multi-modal approach; maybe this will shape the two things of voice input and this idea of a neural interface that's getting the output from your hands... And the way that those things can be used together is really fascinating. They have different strengths and weaknesses; obviously, there's privacy concerns, or just social awkwardness... You don't always wanna be speaking out loud in public to control your computer, or do to input in terms of text input, and communicate. You might be sitting in a cafe and you're writing a sensitive e-mail, or you just don't wanna bother your neighbors, so people still type.

On the other hand, it might be circumstances where your hands are full and you can't use them, and speaking might be the most natural thing... Although we've been exploring some really interesting ways that you can still do quite a lot while you're holding objects, because you know, in some sense we didn't really talk about how sensitive the device is, but tiny little twitches that are essentially invisible to the naked eye are enough to do control with this technology. So you could be holding your coffee cup and just doing little presses and wiggles with your fingers, and be typing.

And then of course there's a combined impact. If you have all channels available at once - if you're in your office and you can speak out loud, but you can also use your hands... Maybe we can use that to boost up the bandwidth, if you think about this technology as just a way to increase the output bandwidth from the brain to the world.

We have so much bandwidth coming in - high-resolution video displays, and great audio... And the bandwidth coming out of the brain has just lagged behind for 50 years. Typing on a keyboard is one way to estimate what's the maximum just in terms of pure bits per second that you can get out of the brain. The fastest typists in the world are doing like 150 words a minute; that's something like 30 bits a second. Compare that to gigabytes of information coming in. So yeah, I think this multi-modal thing might be a way that it goes.

Another point I was gonna make is when I was working on speech recognition, it always seemed to me, especially when I was at Google and the first really great ASR systems were coming out, and were put into Android, in terms of speech input on Android, it always seemed to me a waste that I could also use my hands while I was doing speech. I'd be holding the phone, and it would be making all these errors; you know, hopefully not too many, but it still makes errors sometimes... And then you kind of have to slowly go back and correct things with your hands in this old-school typing way. It just seemed to me that there had to be a better way that you could combine the input of your hands with speech... So that's one of the interesting areas that we're working on.

**Break:** \[00:27:41.09\]

**Daniel Whitenack:** You know, because this is a podcast, it might be hard to imagine the interface that you're talking about, and I know Chris mentioned that you released this kind of control kit developer -- I don't know what you called it; I guess kit is a good word... You already picked the best word. But could you just describe to our listeners what the interface or the device looks like, and how you wear it, and then how it connects to another device? Let's say a computer you're wanting to type with your muscles, I guess, in how you're describing it. Could you describe for our listeners how that looks and how it connects?

**Adam Berenzweig:** Yeah, it looks kind of like a chunky sort of cyberpunk bracelet right now. We currently wear it midway up the arm and the forearm, but the goal is to get this done at the wrist, and to have it be able to be integrated with a watch. We have devices that work on the wrist already. Actually, the biggest challenge to get onto the wrist is really just that your tendons move a lot.

Look at this place where you would wear a watch; as you move your wrist around, there's usually all these kind of divots and the topography of your -- just the mechanical challenges, keeping the electrodes in contact with your wrist as you move around is the major thing keeping us from being at the wrist.

But yeah, the electrodes that make contact with your skin are on the inside of the device, obviously, against the skin. They're pretty cool. They're actually gold-plated right now, and...

**Daniel Whitenack:** It's got some bling.

**Adam Berenzweig:** It's got some serious bling, and the whole effect is this sort of like cyberpunks means studded biker leather look...

**Chris Benson:** Oh, I'm into this now.

**Adam Berenzweig:** Yeah.

**Daniel Whitenack:** Chris, do you think I could pull it off?

**Chris Benson:** Absolutely, Daniel.

**Adam Berenzweig:** So that's where we are now. And of course, we're just beginning. This is the first device that we have that is not just like a total research prototype. Our previous generations of devices -- we literally started with sweatbands with electrodes sewn into them; then we ratcheted up the ladder of hardware productionization.

It's Bluetooth, it communicates with a host computer over Bluetooth, and currently, with the developer kit, as we're shipping it right now, you need a fairly -- you can't connect directly to a phone. You need a host computer that can run the other side of the pipeline; it's actually doing the machine learning inference, and the signal processing mostly happens off-board device right now... But as we go through the iterations of hardware, we're gonna move more and more processing on-board, so that you can connect directly to a phone, let's say.

**Chris Benson:** And since you've segued into it, can you tell us a little bit about what you're doing in terms of the machine learning for this, where is it being used, what kind of problems are you solving, and what are some of the choices (if you're able to share) that you're using to tackle this?

**Adam Berenzweig:** Yeah. Maybe one thing to say about the machine learning side of this from the beginning is -- I think the most exciting thing that we're doing from a machine learning perspective is this is an entirely new domain, a signal domain to work on. You had a guest on a couple weeks ago from IBM Healthcare, Guillermo...

**Chris Benson:** Yup.

**Adam Berenzweig:** \[00:31:56.06\] You guys were talking about processing speech as a way to diagnose psychiatric disorders, and stuff like that... Again, the idea of some kind of brainwaves came up, and he said "Speech is a brain wave." We very much feel the same way about the signal that we're working with. It is this biosignal, a signal generated by the brain, that is extremely information-rich, carrying all this content about what people wanna do; it's as rich as speech, really... And it's new, nobody has had access to this kind of signal before... I mean, not outside of very narrow clinical settings and neuroscience research... So that's just really cool. It's like as if we've just invented a microphone and we can start doing speech recognition, except instead of the microphone -- the time distance between when the microphone was invented and when machine learning was good enough to do speech recognition, it was like almost a hundred years... And for us, we're there already. So we've got this access to a new signal that's extremely interesting, and we already have great machine learning tools to work on it.

The parallels to speech actually go pretty deeply, because it's multi-channel, time-varying, continuous signal, that has frequency content; some of the information is there, but it's got this particular structure in the way that it was generated, and then there's all these layers... You start by parsing the lower-level, understanding how to do the signal processing and get rid of the noise, and figure out where the information is, and then as you go up the stack of processing, you get into meaning, and semantics, and what is the person trying to do, and actually recognizing people's intention.

**Daniel Whitenack:** Alright, so you kind of alluded to part of this a little bit ago, where you were talking about where machine learning fits into this pipeline, and there's two sides of it... So is my understanding right that the device that you're wearing on your arm, this super-cool looking...

**Chris Benson:** Cyberpunk.

**Daniel Whitenack:** ...bracelet/armband... Yeah, cyberpunk armband - it's sending these continuous neural signals to a host computer, and then you're running a model on that host computer that's making inferences based on those signals? Is that the overall pipeline, or did I get something wrong there?

**Adam Berenzweig:** No, that's exactly right. And the kind of inferences that we make are dependent on what the application is and what we're interested in doing. So the basic capabilities of the control kit, the API as it is right now, include things like reconstructing the position of the hand... The canonical, classic demo we have is essentially like you'd see something from like a leap motion; it's essentially a motion capture experience, where you just see a virtual rendition of your hand, and what we're doing is we're predicting all the joint angles, the position of your fingers and your wrist, as you move your hand around.

We can also detect things like how strongly your muscles are contracting, and this is one of the primary advantages that this technology has, compared to a camera-based hand-tracking system. Most of the effort and investment over the past 5-10 years in terms of hand-tracking for the purposes of VR and XR have gone into camera-based systems, inside-out tracking and outside-in tracking...

With any camera-based system you always have occlusion problems; what happens if your hands are not in view of the camera? You can either try to solve that by just placing cameras everywhere, or you can have a technology that doesn't have any occlusion problems at all, which is what we're providing.

We sometimes have been talking about this as inside-in tracking, where because you're sort of wearing this device that is looking inward at your own muscle and your own neural signal, there is no possibility of any occlusion problems. So the device works as well with your hands in your pockets, or in a glove, or in a space suit, or whatever could be used in the future. So you don't have occlusion problems, and since we sense the strength of your muscles contracting, it is an enormous signal for us... And that's really another interesting difference between camera-based tracking systems...

\[00:36:05.08\] You know, if you make a fist and not make a really strong fist, visually there's not really that much difference there. But in terms of the signal that we see, the firing rate of the neurons that are controlling these muscles, it's huge. It's an enormous event. So the other part of the API is recognizing stuff like forces of pinches on each finger in your fist, and other interesting ways that you can tense or relax your muscles. That, I think, is gonna be a really important part of the design problem around this, which is like how to use that signal.

It feels extremely natural and expressive when you can use muscle tension, and how lightly or hard you're squeezing to be able to control software, but it's not how we're used to thinking about designing interfaces... So that's gonna be a big challenge, for us and for the designers who are gonna be working with this technology.

Let me think if I covered everything in the API - the hand skeleton tracking, poses and pinches, also recognizing just hand pose, different finger-pointing, and shapes... And then we're working on turning that stuff into usable, reliable controls, the equivalent of point and click... And we are working on the extremely interesting (to me, personally) project of typing, or figuring out how to do text input with this technology.

**Chris Benson:** Gotcha. So given the fairly unique type of signal that you're pulling off, with the glove, and passing over to the computer, what kinds of machine learning architectures are you trying to utilize and apply to these types of problems? How are you approaching it?

I know you mentioned machine vision, which is typically done with convolutional neural networks. Would this be with a recurrent neural network of some sort, or something like that?

**Adam Berenzweig:** Yeah, we do use RNNs of certain flavors, and we use conv nets in other places. It's actually a grab bag of approaches, and different things work better for different kinds of inference we're trying to do. One of the other interesting things is that -- our current device is 16 channels, so there are 16 pairs of electrodes that go around your arm to cover all of the area and pick up lots of different muscles... And the way to combine those signals from neighboring electrodes, and there's actually -- it parallels a branch of signal processing, thinking about sort of beamforming, and multi-microphone array technology. This is popular in audio processing, if you're trying to isolate one signal from a crowd of background noise; or you've got a room of people talking, and you're trying to extract one signal out of many... So there's some of that kind of work as well.

But yeah, we use RNNs, we use conv nets, we're writing the machine learning stuff in TensorFlow... Our research team works mostly in Python, and then we have the production system, which is in C++, and we've actually got a really nice way of blending those things together. I think that's kind of just on that practical side. One of the challenges in any machine learning-based team that I've always worked on is there's usually a big gulf between what researchers are comfortable doing, and then getting code into production can be like this big gulf. So we are very focused on making that hop very short, and allowing researchers to work in an environment that's extremely close to what the production systems are like. They natively can work in the environment that they prefer, and have it be a quick hop to production.

**Daniel Whitenack:** I may be misremembering things, but I think you said something about the signals that you're getting off the muscles are fairly consistent in how they're shaped... I was wondering, as far as shipping the developer kit... Is this a thing where you train models on your end, on the CTRL-lab side, with a ton of data that you've collected for different tasks, and then you kind of ship the models with the control kit to just be used for inferencing, or do you have to do any sort of transfer learning or fine-tuning for a certain person's -- like, are my signals different enough that you need to do some fine-tuning for my signals, versus signals you've seen before?

**Adam Berenzweig:** \[00:40:15.17\] I've pinpointed one of the most probably critical problems from a research perspective that we're working on right now... So we've come at it from both ways. Everyone is different, everyone's anatomy is different; the signal does look quite a bit different across people... And not just across people, but across sessions; you take the device off, you put it back on. The electrodes are in a different place, they're gonna see a slightly different view of the underlying neural anatomy, and the signals will be different... So you have kind of a cross-session generalization - that's take the device off, put it back on; then you also have cross-user generalization. I wanna train something on people that we have available here, in the office, or getting people to come in and do data collection, and then have it work on someone in the world whom we've never seen before, and we've never seen their signal before.

There's two basic approaches. We can try to collect a lot of data from a lot of people, and build models that will just generalize out of the box, and we do that. Then we also can go the other way, where we come up with ways that can learn very quickly on the least data possible, to get good performance, with data from that one specific user. So in that case you have an experience where there'll be some kind of on-boarding, calibration, training period where you would do some movements, or play a little game, or something like that, and it would be learning about you and your own particular signal as you're doing it.

Then there's hybrid approaches where you kind of get as far as you can with generalization, and then have a transfer learning or domain adaptation approach (as you were mentioning), where you try to build systems that are designed to be customized or personalized... So the goal of them isn't necessarily to get the best out of the box performances possible, but the goal of them is to learn about the space of signal that you could see across people, and learn how to adapt very quickly to a new user signal when you do get a little bit of data from that user.

**Chris Benson:** As we've been talking, there's something in the back of my mind that I've kind of been wondering about, and that is this is such a specialized domain that you're addressing... Is there a role in this for biologists or doctors in the development process to capture that domain knowledge, or is this something that you guys have been able to just master on your own and move forward with the technology?

**Adam Berenzweig:** The company was founded by neuroscientists, and it's pretty important. There is a lot of domain knowledge that goes in, and even just at the very basic level of understanding what the signal that we are looking for ought to be and ought to look like. The essential idea of trying to use EMG as a consumer device for controlling computers goes back a ways... Actually, I remember when I was in grad school - and we talked a little bit before about my interest in music, but I was also interested in new musical instruments and musical performance systems, and I remember reading about people who were hooking up electrodes to their body in various ways, and then using that signal as a musical instrument.

So the ideas were floating around. I think it does require some deep understanding of the neurophysiology. I think one of the key things was knowing when to keep iterating on the hardware and when to stop. Reardon and Patrick knew that if they could get the hardware to be good enough to recognize individual spikes on single motor units, then that essentially was all the information that there was to be had, and they didn't have to keep iterating after that... But they shouldn't stop making the hardware better until that point was achieved. I think that was key, and I that differentiated our attempt at this from earlier ones.

We've got MD's, we've got MD Ph.D's on staff; some understanding of the anatomy is important... But there's some level at which machine learning is machine learning, and the signal is what it is.

\[00:44:01.27\] One of the cool things about working in machine learning - I'm sure you guys have appreciated this - is that it's just a chance to become a kind of mini-expert on a particular domain that you happen to be working on, a new problem. You might come into it knowing nothing about phonemes and phonetics and the way that language is constructed, but you start working on speech recognition and you learn a lot about it really quickly. Or if you're analyzing stock market data, you suddenly learn a lot about financial signals. I think that's part of the fun of doing machine learning, and probably anybody who will come in and work in this company will learn a lot about that stuff; it's important, but it's not critical pre-requisites.

**Daniel Whitenack:** Yeah. I appreciate you sharing that. That's definitely one of the things that I really appreciated about this industry, and working in this area - all of the things that you constantly get to learn.

Speaking of people working in this space, all of these ideas for utilizing the control kit and this technology are already popping into my mind. You were mentioning text input, and I'm thinking about over 350 sign languages that are known in the world, and typically people have not very good access to information, that speak those sign languages... And being able to have one of these devices on each hand and document those languages, and get resources to these people... There's already all sorts of stuff popping into my mind; so if I wanna pursue something like that with a CTRL-kit, what's the roll-out plan and what's the current access to CTRL-kit for developers?

**Adam Berenzweig:** Yeah, we really want to hear about all the amazing applications that people have in mind when they hear about this technology, and we want people to start building with it; that's absolutely where we are as a company. We've got some basic stuff proved out. We really believe that this is a technology that's gonna be super-important in the future, and we want people to start playing with it and help us figure out how it can be used and what's it good for.

The first step would just be go to our website. It's ctrl-labs.com. We've got a sign-up there for the waitlist on our dev kit. We're starting slow. We're a startup, we're a small company, we don't have the bandwidth quite yet to support the hordes of people who may wanna work with this stuff... But sign up.

We're rolling out over the next year. Starting slow with developers, kind of hand-picked for a couple of applications that we think are really interesting... And as we go, we're just gonna just pick up the pace and see what people wanna build with it.

The sign language thing, by the way, is super-interesting. That's something I've been studying a lot about recently. Sign language - I don't wanna go into a super-deep dive on it, but the grammar of sign language, the phonology of sign natural language is extremely interesting. It's obviously as complicated as spoken languages, but it uses the articulators (the technical term for the part of your body that makes the signal go from the brain to the world), and so I think we have a lot to learn from it... Because it's like the main proven use case right now where we have super-high bandwidth output coming from people's brains in a communication channel, using the muscles of the hand... So it's very interesting.

**Daniel Whitenack:** Yeah. Well, I know I'm gonna be headed to the website after this to fill out the application and describe something about sign language and see if I can get one of these super-dope bracelets on my arm.

**Adam Berenzweig:** Awesome. I know someone who works there, you might have an in if you apply...

**Daniel Whitenack:** Okay... \[laughs\] Sounds great. Well, I really appreciate you sharing so much of the great context around this technology, and also bringing it down to make it practical and help people understand that there is a practical route towards processing these signals and getting them into a computer to utilize them.

It's really been useful for me, and I appreciate you taking the time to walk us through that. We'll definitely put the links to the website and the CTRL-kit and the TED talk and all of those things that we've talked about in our show notes.

Thank you so much, Adam. It's been great to talk.

**Adam Berenzweig:** Thanks, it was really fun.

**Chris Benson:** It was super-cool, man. Thanks.
