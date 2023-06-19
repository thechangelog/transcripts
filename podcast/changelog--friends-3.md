**Jerod Santo:** So we are here joined by Mike McQuaid with Homebrew. What's up, Mike?

**Mike McQuaid:** Hey. I'm good, thank you. Thanks for having me on, guys.

**Adam Stacoviak:** It's been a while.

**Jerod Santo:** It has been, too long, which is why we're so happy to have this new format where we can just invite old friends on and talk to them.

**Mike McQuaid:** Yeah, it's nice to come here. It's good timing as well, with WWDC recently; lots of interesting, spicy things to talk about... We were joking in the Homebrew maintainers Slack yesterday about how it's generally our time of year to be "What is Apple going to break this time that we have to desperately try and fix in the next three months, before everyone complains?"

**Jerod Santo:** Right. .. Well, you probably don't find that out on Monday, though. So the keynote goes out, but that's the big consumer retail news. But the developer news kind of trickles out throughout the week. Isn't that the case, usually?

**Mike McQuaid:** Yeah. But also, there's -- I think they landed one of the developer betas for macOS Sonoma already. So actually one of our maintainers fixed some stuff and made a release yesterday, so that Sonoma could work...

**Jerod Santo:** Wow.

**Mike McQuaid:** Well, Sonoma can work at a very high level; not immediately fail on startup when you run Homebrew, but...

**Jerod Santo:** You're not declaring full support, but probably think it's gonna work. Yeah.

**Adam Stacoviak:** What are some of the things that tend to break when it comes to new OS'es? I mean, you had the major change from obviously Intel to M1, or M2, or just the Apple silicon world, that had to move where Homebrew actually lives, in the file system... What typically breaks?

**Mike McQuaid:** I mean, it could be any number of the things we rely on, really. We use the macOS sandbox, so sometimes when they change stuff there, then we need to work around things; sometimes like API calls, or... Apple will tend to as well make the really big changes they want to make with X-code, and map those to macOS versions as well. So it might be the compiler all of a sudden starts doing slightly different things, or giving slightly different output... It might be that they have deprecated the system Ruby, and then finally they're actually removing it, or... All these types of little things that you often have a bit of advanced warning for, but require work.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right. Why the move from /usr/local to /opt? This was an Apple silicone thing, and I had to do it on an install, but I don't know, did they push you guys out of /usr/local, or was it easier to have two install at the same time? What was that change about?

**Mike McQuaid:** Yeah. It's interesting, because we sort of debated a few different approaches around that, because they're -- I mean, there's been some people literally since day... Well, not literally day one, but probably not far off day one; probably literally since day 30, or 100, or something, in Homebrew, who hates that Homebrew is in /usr/local, because they're like "That's not that's for. Other stuff uses it too, and you just kind of jank it up with stuff..." And so there's been that sort of gentle pressure for a while, that this is not the best place to put Homebrew; maybe you should go somewhere else. But then I think the big one for us was when they released the first M1, you had Rosetta, which could run old Homebrew very well; if you were happy on your Mac, just running x86 codes - well, x86 64, to be pedantic - and you are fine with all that, and you want to buy an M1 Mac, and just keep doing things that way... Say you're just using it to run CLI tools. You're not using it to generate code that needs to be embedded in an application of a particular architecture, or whatever. Then yeah, you could just continue to use /usr/local then. And well before we had decent ARM support, that continued to work for you. But all our binary packages - well, most of them - require you to be in a particular location on disk. So if we built the binary package for /usr/local, you can't randomly install your Homebrew somewhere else, and have that binary package work. So we were like "Well, we have these kind of three problems, of a) we don't have binary patches for ARM yet at all; b) some of the big stuff that we really need to make a lot of binary patches... I think it was a pretty long time before we had Java working at all... And lots of stuff relies on Java, so if you don't have any Java support, then you can't do a lot of things. And then c) this kind of desire to be able to actually run two Homebrews side by side. So you could have the ARM stuff, maybe if you're building stuff locally that you kind of care about, then you can have a separate Homebrew installation that lives away by itself, that you can install everything, and that all works. And to be able to, as well -- for us developing to be able to kind of have some sort of migration path between the two, and stuff like that.

So that's what sort of ended up with the two separate locations, and it's worked pretty well from that perspective there, I think. And I think literally the only downside really, other than just - I still occasionally get confused as to why I go to /usr/local and all my Homebrew stuffs not there... And then I'm like "Oh, wait, no, no, no. I moved that."

**Jerod Santo:** Right.

**Mike McQuaid:** \[00:05:53.18\] But yeah, the other minor one is that some tools don't have /usr/local almost built into their default kind of search paths... But I guess Homebrew is big enough and established enough now that Homebrew, in a lot of cases, has just got added to those default search paths for these other tools, where when it was originally created, that wasn't guaranteed that was ever going to happen.

**Jerod Santo:** Some other installers have been using the home directory. Like, ASDF will have a hidden ASDF folder... A lot of tools now, they are installing things. Have you guys considered that, vs /opt, is just like make it /usr/local to their home directory?

**Mike McQuaid:** Yeah. So that gets you back to that binary package problem I mentioned earlier.

**Jerod Santo:** Okay.

**Mike McQuaid:** I guess what we could do is we could do that and mandate that everyone uses the same username, which sounds like an amusing joke... But that's actually what we do in Linux.

**Jerod Santo:** Oh, really?

**Mike McQuaid:** Yeah. It's under home/LinuxBrew, because the Linux Homebrew port, which is now all rolled into the main project, but was originally called LinuxBrew, when they started it, was kind of from a scientific infrastructure perspective, and they've found it was actually quite easy to get system administrators to just create their user and give everyone on the system permissions to that user's home directory, more than it was to create some other random directory under OPT, or /usr/local, or whatever. So we effectively have three different locations that are like --

**Adam Stacoviak:** Oh, my gosh.

**Mike McQuaid:** ...the Homebrew defaults, where binary packages are built, depending on what platform and architecture and things you're on.

**Jerod Santo:** Fun.

**Mike McQuaid:** Indeed.

**Jerod Santo:** Fun, fun, fun. Well, that's as long as I can go without bringing up the big topic...

**Adam Stacoviak:** Yeah, I was like "I want to go one more layer", but it's \[unintelligible 00:07:33.07\]

**Jerod Santo:** Yeah, let's not do it. So yesterday - as we record this, this is Tuesday morning for us. As recorded, yesterday was Apple's WWDC keynote, as everybody pretty much knows at this point... And we were watching it live in our Apple Nerds channel, as we do, and just commenting as we go... And about 80 minutes into that keynote, I posted this all-caps message that said, "Show us the VR thing. I'm getting bored." That's kind of what we've been doing so far. Shortly after that, Apple unveiled this Apple Vision Pro new product, but they never actually did show us the VR thing. They said Apple Vision Pro will introduce us to spatial computing.

\[00:08:14.11\] *So in the same way that Mac introduced us to personal computing, and iPhone introduced us to mobile computing, Apple Vision Pro will introduce us to spatial computing.*

**Jerod Santo:** They said augmented reality is a profound technology.

\[00:08:30.09\] *I believe that augmented reality is a profound technology.*

**Jerod Santo:** And they said it's the first Apple product you look through, not at at.

\[00:08:39.10\] *It's the first Apple product you look through, and not at.*

**Jerod Santo:** I thought that was interesting. They never said VR, they never said Metaverse, that I heard; they didn't even really bring up video games. Or maybe I missed that part. But they're talking about augmented reality. I just love your guys's reaction to that. Because Mike, we were talking about VR in our channel, and you have opinions about VR. But this is not pitched as a VR thing. They never said VR; they said augmented reality. They said you look right through it, which is technically not true, but I guess conceptually they want you to have this idea of looking through these goggles and seeing the world, even though you're seeing a digital representation of the world that's right in front of your face. So what are you guys think about that?

**Mike McQuaid:** Yeah, I thought that was interesting as well. I had a similar realization, kind of, this morning. I guess AR is kind of more social and kind of human, I guess; it was the vibe that they were going for, or at least it felt like from their pitch, where it's a lot more kind of blended with your existing computing. Whereas VR - the thing I kind of love about it, particularly during periods like COVID lockdowns, when we had a three-month-old and a two-year-old who was potty training at home... I find it incredibly relaxing to just shut out the entire world in my VR headset and like go to another place. And you have no peripheral vision, you can't see anything else... You can press a button to get a really sort of janky sort of AR, "Where am I in my room?", just so you don't walk into things sort of view.

\[00:10:14.05\] But this idea that you're completely put into another space... And that was -- I guess I was expecting they were going to go down that route, and that feels like the Metaverse route... And that feels like not at all what they were doing. Like, yeah, I think it's interesting, for sure.

**Jerod Santo:** Yeah. What do you think, Adam?

**Adam Stacoviak:** Well, the Metaverse route really removes the real world. The augmenting obviously keeps it. So it's not like escaping reality. It's more like blending realities, which is what augmented reality really is, right?

**Jerod Santo:** Yeah. Yeah, it's not what I was expecting them to do.

**Adam Stacoviak:** Even from a safety standpoint, right? ...that you can still see your surroundings... Whereas if you've got the Oculus Rift on, or whatever it's called these days; I can't even keep up with the direction of it.

**Jerod Santo:** Quest...

**Adam Stacoviak:** Is that what it's still called, or was that the old name?

**Jerod Santo:** There's the Meta Quest, Meta Quest Pro...

**Adam Stacoviak:** There you go. There's a 2 and a 3. I know the three, they're about 500 bucks. I just hear these things. I've used one, but maybe Mike you have more... Because you've been purchasing different VR things.

**Adam Stacoviak:** The point though is when you put those on, you can't see the rest of the world. You can fall over things, you can break an arm, you can break your TV, you can smash things. Go ahead, Mike; you've done this, I'm sure, right?

**Mike McQuaid:** I was gonna say, you guys who are on video, for the benefit of the podcast listeners, I'm pointing to a very slight discoloration on my wall behind me, where I think I literally thought I was crowbarring a headcrab or something, and just punch my hand straight into my wall. I didn't manage to destroy my VR controller in the process, but yeah, that's definitely a thing. I guess some people can see that as -- in some situations, that's the appeal. And in some situations, it's really not.

**Adam Stacoviak:** Well, we're talking about the positioning, really; the positioning is not in the Metaverse. So it's really about that - it's not versus, it's more like how did they pitch this when Meta is so well known with acquiring Oculus, Meta Quest etc. The whole name shift from Facebook to Meta...

**Jerod Santo:** ...was about the Metaverse.

**Adam Stacoviak:** ... is in and of itself about the direction they're going. Right. So they didn't say Metaverse, they didn't say VR... And I had a great pun, a world-class pun thanks to Silicon Valley the TV show, because there's a - a slight spoiler in there. There's an acquisition of a VR company, because they have to have this big old Hooli-Con keynote, essentially. Everything falls apart, they had to make a last-minute change, and they acquired this VR company to make their keynote good. And long story short, he says "Who out there is excited? I know Vee Are..." \[laughter\] I'm like, "That's a world-class pun", right?

So there was no VR mentioned at all. Augmented reality... Even spatial; the word "spatial" to me is pretty cool, because it's like, all the design stuff in there was very touchable. They did a great job from a design standpoint. So spatial design, augmented reality. That's the good stuff, I think. I think they went the right direction, really. And they have the whole App Store, and all the apps that came with it... Whereas Meta was really recreating the unknown. They were really trying to pioneer the future, or what they perceived as the future, and it was not appealing, because it's not relatable.

You have Safari inside this thing. That's kind of cool. You have your apps in there... You already know what it does and how it works, so you can kind of pull your calendar...

**Jerod Santo:** Yeah, it's familiar.

**Adam Stacoviak:** Precisely.

**Jerod Santo:** You know, Messages is there... It's like putting some of your apps that you're used to inside of iOS or macOS, right there inside of this thing. I don't honestly know though if I want that as much. Maybe I'm just the guy who's ready to escape sometimes... And I should say, the pitch is augmented, but if you notice, they have this digital crown, which they stole from the watch. They put it on the top of these goggles, and you crank this crown and it changes the size of what is being presented. And you can go full VR mode, it seems like. It's just not what they're talking about. Because a lot of their pitch was entertainment. And it was like "Look at these big movies you can watch right in front of your face", but they're inside this AR, but they're also -- like, they're putting a screen inside of augmented reality, but you can crank that screen up to full size, to where there's nothing else to see. So I think they get there, they're just coming at it from a different angle.

**Mike McQuaid:** \[00:14:28.26\] It reminded me in some ways -- it's funny that you mentioned the Apple Watch. It reminded me of the Apple Watch keynote as well, we're I can't remember what I thought at the time when I saw it, but I definitely remember being somewhat underwhelmed, right? Because they pitched it as a particular type of device that I didn't care about.

**Jerod Santo:** Yes. It was a fashion thing. A lot of it was fashion.

**Mike McQuaid:** Yeah, it was fashion, it was apps, it was all this type of stuff. Whereas for me, I love my health and fitness measurements. And I said, I think, from my Apple Watch today, to my wife, where it's like my resting heart rate. I had a fever over the weekend... And I sent her a thing, and I was like "Spot when I was sick." And you could see my resting heart rate is normal, and on the weekend it tanks up, and then slowly gets better.

And then - this is a weird thing even today, where it's like today is the first day my resting heart rate is kind of back to normal... And almost psychologically being like "Oh, maybe that means I'm better now. I might go and do my spin class this week." It feels it's providing almost metrics data that I might use in an ops role, but on my own body measurements. And that was not pitched at all. And it felt what they were doing yesterday was throwing out 20 use cases, and 10 of them will be flops. 10 of them - it will just be bad at that.

One of the ones to me, for example, like reading about the resolution and stuff that - the idea that I'm going to do my work on these things, and these kind of floating windows in front of me, instead of using monitors for any meaningful amount of time... Like, I'm not gonna say that that wouldn't happen, but they made a big deal about 4k per eye. Put your face right up to your 4k monitor and see how impressive it is. If you have a 4k monitor completely fill your peripheral vision, that is not actually a lot of pixels. It's a lot of pixels when it is a foot, like half a meter away from your face, but it's not a lot when it's that close. So we have other VR headsets already that will do that sort of resolution, and people already do not find them sufficiently high resolution enough to do that type of work all the time. Like, it's going to be annoying compared to a 4k monitor, unless you're in a situation where you need that kind of -- "I need to just have 500 windows all around me, that I can kind of turn my neck around and look around", and all this type of stuff.

But on the flipside, some people thought it was slightly dystopian, but maybe I'm enough of a nerd that I thought it was awesome... The idea of being at your kid's birthday party, and putting this thing on and taking a 3D video, which you can then in 1, 2, 5, 10, 20 years watch back and put yourself effectively in an almost like VR fixed viewpoint...

**Jerod Santo:** A 3D... Yeah.

**Mike McQuaid:** Yeah. Because for me - I buy the new iPhone every year, because I have young children and I want to capture their temporary \[unintelligible 00:17:15.20\] in as high a resolution as I can. Because I look back at those memories, and I love looking back at pictures of my kids.

**Adam Stacoviak:** I'm with you, Mike, on that one for sure. Because for me, I have the -- and I think you do too, Jerod; you have the Photos widget placed somewhere in your phone, and every day I'm getting some memory... And I'm an iCloud believer because I've got my photos in there, and they're doing a great job of reminding me of my life. Now, the thing is though, while that's amazing, this is the ultimate new dad camcorder kind of situation. Remember dads back in the day?

**Jerod Santo:** Camcorder... \[laughs\] It is.

**Adam Stacoviak:** \[00:17:53.22\] You've got the dad with a camcorder, who looks a dufus, basically... But the memory is captured, so you've got that memory... And you sort of sacrifice maybe your ego for the moment... But I don't know if I want to wear that. I want the artifact after, Mike, but I don't want to be the dad wearing this headgear during my kid's birthday. I want them to remember me just as much as us remember that memory.

**Jerod Santo:** Right. So I think this is temporary. The actual video of the guy -- you know, you're not gonna be like "Hold on, don't move. I'm gonna go put these goggles on." None of us are going to actually do that, unless we're going to be the camcorder dad... Because we can see the future use of it. I think that's temporary. So the recording side - that does look dystopian. I'm looking at this real-world thing through goggles that show me a digital representation of the real-world thing...

**Adam Stacoviak:** Minority Report had that.

**Jerod Santo:** Yeah, but I think the actual -- the playback is what we want. And so that's what we all agree on... And so I think 3D recording is going to come to the iPhone. You'll be able to record 3D on some other thing, and then watch it back on these goggles and get that immersive experience. For now, it's just a weird place where it's like "It also records..."

**Adam Stacoviak:** Where's the robot? Puts those goggles on a robot that has infinite charge, never dies... I'll let my robot wear that thing on my behalf, and it's fine, because Rosie can do that. That's the name of the -- I believe that's the name of the robot in Jetsons. Rosie, I believe...

**Jerod Santo:** Oh yeah, Rosie.

**Adam Stacoviak:** So give me a Rosie. I want a Rosie.

\[00:19:14.10\] *Is there any girl out there who can resist the charms of a solar-powered alloy chassis with turbo-driven schematics and LED eyes? A robotic maid named Rosie changed the Jetsons' --*

**Jerod Santo:** Well, speaking of infinite charge... I mean, there's so many indicators that this device is just not -- I mean, the price of course, but the device is not going to be ready for regular consumer usage when it ships. It's going to be for enthusiasts, developers, business people, and that's about it.

**Adam Stacoviak:** The ultra wealthy...

**Jerod Santo:** Yeah, the ultra wealthy, of course... But they just buy everything, don't they? So everything's for them if they want it. Two-hour charge, and you've gotta have a battery stick in your pocket. I did watch a video this morning, the hands-on -- because they let some YouTubers get access yesterday...

**Adam Stacoviak:** Yeah. I think \[unintelligible 00:19:57.24\] had a hands-on with it as well. I didn't catch that though... Who did you see?

**Jerod Santo:** This is Sarah Deachy, I think; rhymes with peachy. She saw it, and she wore it. A YouTuber. And she said...

\[00:20:10.28\] There is a reason why the battery pack is not on the headset... Because the headset is heavy. It is very heavy. I think a lot of initial report said "Oh, we're gonna put the battery pack, so it's going to be lighter than a Quest, lighter than any headset out there..." They did that because it would just be too heavy if the battery pack was on the headset. So with that out of the way, it is heavy; it will be uncomfortable on your face for probably more than an hour.

**Jerod Santo:** So that was kind of a bummer to hear. But she did say that the actual 4k display - kind of against what you're saying there, Mike; I don't know what's the truth, but she said it's spectacular.

\[00:20:48.05\] *The eye tracking is insane. So you do a setup that takes one or two minutes; the Digital Crown is essentially your Home button, and you have all of your apps on the home screen, and you just look at whatever you want, and then you pinch to select. If you're scrolling through photos or a Safari, you basically pinch and then scroll. And the clarity of, say, a Safari tag, or reading an article is so good. The words are super crisp. And I honestly felt more excited about the productivity elements to it than even the entertainment.*

**Jerod Santo:** And I think it's three or four times what resolution that the Meta Quest currently has. Maybe that's enough, but she's incredibly impressed with that, and was like "This is the future", but it just -- it's gonna hurt. And that's kind of where a lot of these things are.

**Mike McQuaid:** I think it depends on the content a lot on this stuff. I think for movies and stuff, I think the resolution doesn't -- I mean, a 4k movie looks great. But when we're watching 1080p stuff, it looks pretty. You know, you won't watch the Lord of the Rings in 1080p being like "Ugh! I can see the pixels. Ugh! This phone's ruined." I think it's all relative, and I think video content and gaming experiences, whatever lend themselves to that, kind of blend. But it feels reading text on a non-Retina display now is just "Ugh. Why would I go through that?" And I guess I can't imagine - like, write code, say; spending a long day looking at text for significant periods of time. \[unintelligible 00:22:13.11\]

**Adam Stacoviak:** \[00:22:17.20\] But Mike, what if you weren't writing the code? What if you were--

**Jerod Santo:** Watching-it code.

**Adam Stacoviak:** Conjuring the code, through voice, an LLM behind it that knows Homebrew through and through...

**Jerod Santo:** Knows it better than you do...

**Mike McQuaid:** Yeah... \[laughs\]

**Adam Stacoviak:** All this good stuff. And all you're doing is watching the code, really.

**Mike McQuaid:** Yeah, I just got ChatGPT to generate the 95% right, 5% catastrophically wrong code for me... But I guess it's funny, because again, on the weight -- I have my nice, meaty Valve Index here, and that's more than twice the weight, even by default... And I actually bought more weights to add on the back, to kind of counterweight the thing... And it makes it feel better. When my kids play around with it, they don't have their necks crushed forwards by it, and stuff that.

And it's funny, because on the comfort side, I would agree - you don't want to be wearing that for hours and hours. But it's interesting to me to see, for I guess a mass market appeal, that something dramatically lighter is still too heavy; it wouldn't be comfortable.

**Jerod Santo:** Exactly.

**Mike McQuaid:** I kind of wonder whether that's just something where -- I don't know, Apple are good at making things smaller and lighter... But at the end of the day, wearing something reasonably heavy on your head... Even a big pair of headphones; some people would just find a big pair of over-the-year cans uncomfortable to wear for a few hours. And you're not going to get a Vision thing with built-in headphones that's going to be lighter than a pair of cans.

**Jerod Santo:** I imagine down the road you're probably looking at something similar to what Adam's wearing right now, which is thick rim glasses... And all the tech can fit into those glasses. Kind of what the Google Glass wanted to be... And so at that point - depending on battery life and stuff - you could just wear these things all day long. It goes back again to the VR/AR distinction, because you don't want to augment your reality for just like 45 minutes. It's like wearing your Apple Watch for half the day. You're like "I'm missing out on the other half of the day's steps." But to escape reality, to have a VR moment, to watch a movie for two hours or to play a game for an hour... I know some people play games for hours upon hours upon hours, but... That seems more feasible even for the heavy headsets that you've been buying, Mike. Like, I'll put up with it. But for 18 hours - it's gonna have to be lighter and smaller. And yeah, like you said, Apple's good at these things over time. We'll see if it gets there.

**Adam Stacoviak:** Yeah. Did you see the movie "Ready Player One", Mike?

**Mike McQuaid:** I didn't, actually. I've had a bunch of people, particularly in the VR space, who have said -- I basically haven't seen any good films since my kids were born, really...

**Adam Stacoviak:** I wouldn't call it a good film. It's a great film, but I don't know... Is good better than great? I don't know...

**Jerod Santo:** Hold on, let's stop. It's not good, but it's great. Please, tell us more. \[laughs\]

**Adam Stacoviak:** Well, you've got Robert Zemeckis behind it, pop culture references galore, which is always -- that's a classic right off the gate. It opens up with a quintessential rock song from I believe the '80s. I can't remember the name of it in this moment... But did you see it, Jerod?

**Jerod Santo:** No, but you talk about it a lot, so I feel like I know something about it.

**Adam Stacoviak:** Right. Well, I'm not going to talk about the movie necessarily, but more or less reference it, because this Vision Pro looks almost identical to the film. And there's even, during those cut scenes and montages and demonstrations they showed, there was even this one where the person holds them out and then puts them on, and that camera sort of swoops around and you see through them... That is literally, shot for shot, angle for angle, from Ready Player One.

**Jerod Santo:** So they stole that -- or it was an homage?

**Adam Stacoviak:** \[00:25:49.28\] It could be an homage, they could have licensed it... I don't know. I'd love to know the legalities there. But it was exactly like Ready Player One. And Ready Player One is all about escaping, but it's not what Apple went. But the point I'm trying to make is if you've seen that film, these goggles, Vision Pro look almost shape-wise identical, and you can see through them. So there's a lot of inspiration. You've got -- what was the thing called from Star Trek? I'm not a Star Trek fan, unfortunately... That was like the iPhone.

**Mike McQuaid:** Yeah, tricorder.

**Adam Stacoviak:** Tricorder. So that predated the iPhone. So there's science fiction meets future reality. So at some point, we dream about it and then they're like "Well, that's actually really possible if we do this, this and this. Digital crown that, speakers here..." And on our iPhones today we have all those cameras in the front, to do face ID and whatnot. They've already got a lot of the tech in place. I don't know if it's -- what's the material of this thing? Is it aluminum, like the rest of their gear?

**Jerod Santo:** According to them, a singular piece of three-dimensionally-formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.

**Adam Stacoviak:** Aluminium. Aluminium.

**Mike McQuaid:** Aluminium, indeed. Yeah, so -- no, so I was gonna say, I think that's the interesting thing about it as well... Because I think the other thing that may help bring the price down is right now that thing has so many frickin' sensors on it. It's got like --I think it's 15 cameras, it's got the iris reader on the inside, it's got that screen on the outside to show you the eyes of the person inside, because you need to see that...

**Jerod Santo:** The creepiest part...?

**Mike McQuaid:** Yeah. It's got all this stuff... Like, when your Apple's size, you can build loads of things, throw them at the wall, and see what sticks. I don't think that's a bad thing, either. I'm not criticizing that.

**Jerod Santo:** Mike's dog, Lucy, makes a cameo here shortly. Don't worry, she only sticks around for a minute or so. And her second cameo near the end of the show is totally on point.

**Mike McQuaid:** I'm not criticizing that. I'm jealous, because I'm co-founding a startup nowadays where we have the exact opposite problem, of like grand visions and...

**Adam Stacoviak:** Lack of resources.

**Mike McQuaid:** Yeah. And right now we're at like at 1.4 people to actually build them. But yeah, it's interesting... And it wouldn't surprise me if that's what ends up bringing the price down, is that they can have the non-Pro edition just doesn't have the screen on the front... Because it turns out no one cared about that. And even -- you know, we've been talking a lot about the AR/VR thing. And arguably, this is a device where -- there's been a few devices in the past in this kind of space... I would say all of them are primarily VR, or primarily AR, and this is the one that does seem to be -- it is being described as an AR device, but it's definitely one that seems equally competent at both.

I think it was the Microsoft HoloLens... I've never actually used one in person, but that was a lot more of an AR thing. The Valve Index I've got here, it has two basically black and white cameras on it for doing really limited AR of like "Am I going to step into a wall without --" Like, when I get too near to a wall, it shows a green sort of Matrix-style outline of what I'm near, so I can kind of see and step out the way, and all this type of stuff.

They could have gone "Right, let's stick some really high-end cameras in here, and make an amazing AR device and build amazing AR games." But they decided to not do that. They decided to go the VR direction. So it does make me wonder whether, if Apple decides to go full AR, they could probably throw away a bunch of the kind of VR side of things, and make something that might look a bit better. Because that's the other reason why they're ski goggles and not glasses, right? If you want to do VR, and you want to have that level of immersion, you have to be able to block out all of the light...

**Adam Stacoviak:** Everything else.

**Mike McQuaid:** Exactly. But then on the AR side, if you want to do that, you're gonna have to have a lot more high-end cameras, and you have to be able to maybe do some of the kind of eye-tracking stuff, and things that. I guess that was another interesting thing we've not mentioned as well, it's there's no controllers. That's another distinction between all of the VR kits. It's all hand gestures, eye gestures, all this type of stuff, as opposed to these physical controllers, and stuff that. And that's going to be another thing that's going to be interesting to see how well that goes.

**Adam Stacoviak:** \[00:30:09.10\] Yeah, they didn't show us how you calibrate it. With face ID, you've got to do that weird head motion to teach the thing your face from all angles. So they didn't show you that calibration stuff. It was probably like --

**Jerod Santo:** So Sarah Deachy said there's like a one or two-minute setup. It's like a two-minute eye calibration. She said, the eye tracking is spectacular; you look at the thing and it focuses the context. Like, if you look on this Safari tab, it's gonna switch tabs. Ad she says it works pretty much the way you'd expect it to work; very, very well.

She didn't talk about the hand gestures - because there's like downward-facing cameras that are looking at your hands... And as you pinch, and stuff, with your hands, just the air, and that's the other aspect. So it's eyes and finger motions... Which to me kind of looks like the person in the demo, in the video, is having a mini-seizure, as they sit on their couch and their hands are shaking in weird ways... But I guess we do all kinds of weird things, like talk into to the air with our air pods in our heads...

**Mike McQuaid:** Yeah. And I guess the idea that you can use one of your existing input devices as well; you can use your keyboard or mouse on your Mac, or your game controller, or whatever. But I mean, it's definitely, again, in comparison to the actual hardware I have, the Valve Index has kind of some of the better controllers... And they have these ones that you put your hands inside, and then it has finger tracking. So when I do like this, I can see, in a game, say, my fingers move around, because it knows where my fingers are all relative to the controller. But I'm not having to actually hold the thing. It's sort of attached in this weird -- if anyone's on the podcast, you can go and look that up, you can see how your hand sort of fits in, sort of like a glove.

And again, it's the thing where - I guess moving on to kind of gaming stuff as well, they had a slide about gaming where I think they showed some of their 11 kind of launched games... But I love Apple, and I love games, but I think for people who would describe themselves as a gamer, and play AAA big-budget games, Apple's not a meaningful gaming platform. It's something where -- if you're someone who plays a game for a couple of hours every year, you can get enough stuff that you can play a game on your Mac, or whatever. That's fine. But if you want to do serious gaming on your Mac, you're in for a pretty sad time. In some ways, that "Here are our launch titles, these kind of 11 things." The fact that you can fit them on a slide is very Apple, in a good and a bad way, right? Because it shows "We've carefully selected these 11 beautiful representations", or whatever.

One of the games is one that I have played in VR... I guess it's almost like being like our drinks menu in our restaurant has 11 drinks on it. Across all alcoholic and non-alcoholic drinks, we've selected 11 of the nicest drinks. And it's like "Well, I don't like any of those." "Well, okay, don't come to our restaurant. Go to the one next door, where the drinks menu has 200 instead."

**Adam Stacoviak:** Yeah.

**Mike McQuaid:** And that's the sort of Apple take it or leave it sort of way, that to me shows that they're not -- again, certainly, I think a lot of people thought that this was going to be primarily a gaming device. And that's very much not what they're doing. In some ways, I find it interesting that they had any mention of gaming at all, because it seems to be so not what they're going for.

**Adam Stacoviak:** Let's flip the script a little bit though... Let's not look at it from a "I've got a Valve Index, and I kind of know some things", like you do; think of it from a game developer standpoint. What do you think game developers are thinking about this? If you're in that space, and you can make things for a brand new -- I mean, we have to recognize this is sort of a brand new world, a brand new computing platform... What do you think game developers are thinking? While there may only be 12 in this launch, and you've got to start somewhere...

**Jerod Santo:** 11.

**Adam Stacoviak:** \[00:33:53.28\] 11, sorry. I was going for the baker's dozen. Actually, that's 13, sorry about that... \[laughter\] Either way, I want more... What do you think, Mike? What do you think game developers are thinking? What do you think about this paradigm? Because I'm thinking you could do some really interesting things with it, not in the typical gaming way potentially even. What do you think they're thinking about?

**Mike McQuaid:** I'm friends with some game developers, but I've never worked in that space. But I think the interesting thing there is -- like, even PC VR gaming... The long-running joke about it has been it's kind of a niche within a niche... Because I have, for reasons due to not wanting to reward scalpers, and all this type of thing, I have a one-and-a-half thousand dollars-ish graphics card in my machine, that sounds like a small jet engine in my house. It's ludicrously overpowered. And I have, as I said, all my VRs set up that require me to physically drill things into my walls to mount my VR stations... And I guess the point I'm making is --

**Adam Stacoviak:** You went pretty far.

**Mike McQuaid:** It's taking it pretty far, right?

**Jerod Santo:** Right. Enthusiast.

**Mike McQuaid:** But even all of this stuff, you're probably talking less than half the price of the Vision.

**Jerod Santo:** Right.

**Mike McQuaid:** So I think that's the thing. I think if you're targeting as a game developer, you would need to be targeting either multiple platforms, in which case you're somewhat limited in being able to do really intriguing things just for the Vision alone... Or you're targeting it thinking this is going to become a mass market device when they bring the cost down, or whatever it may be. Or you're doing it as some interesting proof of concept that kind of buys into another platform, whatever. But actually how it is right now, where it's -- say like Sony has announced the PS 6, or whatever, and they're gonna release in 2024, and it's going to cost you $3,500, and you can only buy it in North America, people would probably not be rushing out to build stuff for that, and really excited about that. And that's the opposite of the direction that console gaming seems to have gone, where it's more and more commodity hardware, it's more and more kind of incremental changes, and not these kind of Big Bang revolutions, and stuff.

**Adam Stacoviak:** Massive paradigm shifts, yeah.

**Mike McQuaid:** I think the potential is huge. I think you could do some really, really interesting things, particularly with the kind of VR/AR blend there. I've looked for a long time for games that will use the even very limited AR kind of functionality of my VR headset, just because I think it's sort of an intriguing idea to sort of combine those two spaces... But I don't know, it just seems it's so expensive right now that it would be hard to see that. I guess the thing I could maybe see, rather than games, is for high-end training, or whatever; like flight simulation, or the type of thing where -- basically, almost like conference tickets, where the idea of... Again, now that I'm actually a co-founder somewhere, you notice the fact that "Oh, this conference costs $2,000 or $3,000. That's actually quite a lot of money when I can't get my employer to pay for it for me. I'm probably not going to pull out my credit card and spend the price of a family vacation on going to a conference."

**Adam Stacoviak:** For sure.

**Mike McQuaid:** And I feel it could be the same in reverse here, where "Am I as a gamer going to buy one because some launch title looks really great? No." But if my employer can get more than 3.5K's worth of value out of it, and it's dramatically better than some of the alternatives there, then yeah, I wouldn't imagine that would be particularly hard for people to justify. If you could kind of tap into that sort of market, I guess, high-end training for whatever...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Such a small -- well, maybe not a small market, but such a specific market, where you almost have highly specialized devices, where Apple is not known to be open API, they're not known to be not literally open APIs, in the open API. You get what I'm trying to say... That you can program for it, but you don't have full access, like you do even on a Mac. You have a lot more access to the system. In iOS devices, TV OS, etc. iPad OS, and now Vision OS, I've gotta imagine these highly specialized things require certain APIs that you may not have access to, and you're gonna spend a lot of money to get into that ecosystem... And you sort of have to follow where Apple may allow you to go, because they're in control of the keys, the kingdom. So... Specialized; that's highly specialized spot, for sure.

**Jerod Santo:** \[00:38:30.29\] Well, I do think, Mike, when you held up that controller - that thing screams video games. You have buttons, you have D-pads, you have joysticks etc. And the fact that there is nothing that, it's such a more of an iPhone kind of a thing. It's an Apple thing, to be like "Well, we're gonna have cool new games that we're gonna use your fingers to manipulate the air, and play." And it's like, that's going to create a certain type of game. Just like the iPhone, this single pane of glass created a certain kind of game that was different than other kinds of games. And I feel like they had a huge opportunity, they had so much interest, and still do, of just people using these things to create a gaming platform that just blew everything else out of the water... And they just did kind of what they did to the podcasts for many years, was just ignore it; they just let it go, or they didn't provide the developers what they need to really have different monetization options... So everything went in-app purchase, everything went Candy Crush, and ended up being these very shallow, addictive, but ultimately, I guess unsatisfying games that ended up ruling the iOS platform. And it's probably similar, I would guess, that eventually would rule this thing... Unless they actually get dedicated to it early in order to provide game developers what they need to make better games. And I just don't see Apple ever - like you said, Mike, I just don't think they care about it that much. They're gonna have their 11 games that will all be beautiful, and very handpicked, but ultimately you're like "Well, I get bored of 11. In fact, I only like 3 of the 11, and now what are we gonna do?"

**Break:** \[00:40:09.08\]

**Adam Stacoviak:** Let me give you a scenario - you're in the doctor's office, right? You're there waiting for your next turn, right? You're just there for a random checkup; you're good to go.

**Jerod Santo:** Okay.

**Adam Stacoviak:** And somewhere in the room -- now you currently have an iPhone talk, or somebody's on the phone, talking super-loud, in a waiting room; it's just a non-social norm. And now flip the script and say, okay, now, affordable years down the road, whatever; even today, whenever this thing's available, somebody is sitting next to you with this Vision Pro on their face, and you can kind of see their eyes, or whatever... Maybe you hear nothing from them, because maybe -- I don't even know; I don't know if it makes sound, or if it's just for you, or if it's for everybody else, they can hear it. But just imagine them going to town on whatever it could be. It could be Candy Crush, they could be -- they could be Safari-ing, they could be photoing, they could be doing whatever they want. Just imagine that scenario; you see somebody sitting across from you, with this Vision Pro on their face, in a social setting... Which is totally possible.

**Jerod Santo:** Right. Fully immersed in Tetris... Yeah.

**Adam Stacoviak:** What are you thinking?

**Jerod Santo:** Well, obviously, I just -- I'd steal their wallet. Wouldn't you? That's the move? \[laughter\]

**Adam Stacoviak:** For sure.

**Mike McQuaid:** I mean, it wouldn't have anything in it, because they've bought an apple VR headset.

**Jerod Santo:** That's right, they're broke. \[laughter\] You've gotta steal the goggles if you're gonna steal anything of value.

**Mike McQuaid:** I don't know, it's funny, because with a lot of the VR stuff... Like, you've seen some of those transitions for games as well. And I've seen this with my kids as well; like, Fruit Ninja, the iPhone game, they have a VR version that my five-year-old really likes, where you physically have two actual swords that you use to cut fruit coming through the air, and stuff. And I think that's the fascinating paradox with VR stuff, is that it is -- you don't need instructions or tutorials for most games, because it's immediately obvious. You can put someone who's not even a gamer in, and within seconds, they know, because it's what you're doing in the space, and whatever.

But on the flip side, you have this problem which a small minority of people have with existing games. So I had a flat mate at university/college who couldn't play first-person shooters, because they made him motion sick. And I'd be like "You're just making that up. That's not true." And I saw him, and I was like "Oh, that's actually a thing." But with VR, that affects a lot more people, in a lot -- like, some people just can't really handle VR games. It's like, VR, where you have motion, and stuff that - like, if you're sitting in a moving car in VR... I've played a lot of VR, I don't get motion sick in real life, and stuff that. But that will make me motion sick, and I need to stop. And some of that is programming, some of that is just essential, like how your brain works. And it's tricky, because I think that's the other thing that could stop this, for gaming at least, going super-duper mainstream; it's like, you just can't necessarily build something that everyone's brain and vision system and stuff like that can handle.

I guess one of my biggest fears though, of all of this, is that whenever Apple releases some big, visionary product like this, I think of -- do you guys remember the legendary Slashdot comment from CmdrTaco, 2001, about the iPod? No wireless, less space than a Nomad... Lame.

**Adam Stacoviak:** \[00:44:09.12\] Right. Yes.

**Jerod Santo:** He still \[unintelligible 00:44:08.09\]

**Mike McQuaid:** Exactly. And I could just imagine everything we've said in this conversation today brought up in 5 or 10 years, where everyone's just wearing their goggles 24/7, and they're just like "You guys were such fools. You knew nothing of what would come, and how we would all embrace our Apple goggles?"

**Adam Stacoviak:** \[unintelligible 00:44:28.16\] could be enough at some point, but I just come back to current -- I don't know, would you call that user experience, to be how you wear it? I think it's more like inside the thing. It's more liek just experienced, generally; it's a headset. Who wants to wear a headset for several hours at a time? I barely wanna wear these headphones, and I'm a -- you do, Mike?

**Jerod Santo:** Mike does it.

**Adam Stacoviak:** Gosh!

**Jerod Santo:** He's playing his games. So again, I'm with you to an extent. I would put on the headset. And I've played the VR games... I sound like an old person right now. "I've played the VR..." I love -- I've had a lot of fun. Even with groups. Because you're watching the person, they're acting a fool, and you can get them to cast up onto a TV, so you're kind of seeing what they're seeing; it's not exactly the same, but you're actually there with them to a certain extent... And it's a riot; it's not isolationist. It can be a communal experience, which is really cool. But that's for a constrained time period. And I'm not going to wear anything for all day long on my face.

**Mike McQuaid:** Even that - the thing that makes it social is the fact that the person in VR, who's actually getting to play right now, when everyone else is not able to play, looks like a massive dork.

**Jerod Santo:** Yeah, exactly.

**Mike McQuaid:** That is the bonding experience, is like, you're having the time of your life, and you look a loser while you're doing it, right?

**Jerod Santo:** Right.

**Adam Stacoviak:** Oh, my gosh...

**Mike McQuaid:** It's hard to see that, all this mapping to like a Fortune 500 boardroom, you know? \[laughter\]

**Jerod Santo:** Well, maybe it will. Let the boss use it for a while, and I'll laugh at the boss, while they're doing their thing...

**Adam Stacoviak:** Yeah. "Here's Jerod coming in on their Vision Pro. Hey, Jerod, how are you doing?" And they're augmented, basically...

**Jerod Santo:** Speaking of that, they have this FaceTime feature... How does that work? Because you can FaceTime inside the Vision Pro, but if I'm on the other side of that call with you, I'm seeing what? Because you have goggles on. Am I seeing just your eyes?

**Adam Stacoviak:** You're seeing Zuck; you're seeing Zuckerberg, man.

**Mike McQuaid:** It's the persona thing, right?

**Jerod Santo:** Okay, so that's more Metaverse.

**Mike McQuaid:** Yeah. It's almost like this little fuzzy avatar thing. I think they had a little bit of that during the demo. I didn't --

**Jerod Santo:** Okay, I might have missed that part. Yeah.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** It seems not ideal, but you know... Again, we are seeing what we've seen yesterday, but this is going to be a product that iterates. Apple is so good at just relentless iteration, just year after year; small, incremental changes, that after 5, 10 years... It's amazing. I mean, the iPhone 4 and 5 - those models compared to the original iPhone, it's absolutely astonishing how much progress they made in half a decade.

**Mike McQuaid:** Yup.

**Adam Stacoviak:** Yeah. If you have the original iPhone, or the three, four, or five, and now with the 14, you see the progress and the iteration. And I think that Apple is the kind of company that would not get into the ring unless they think they can do some damage, essentially; they can do something with the platform. And even if it's a niche for a while, that's probably okay for them, because that's why it's priced so high. So they can go down from here, you can't go up. If you came out at $599 and $899, maybe that's a harder selling point for them. They're not going to get in the ring unless they could do something, that's for sure. That's the kind of company they are. So they've definitely made everybody pay attention to spatial design, augmented... And if not VR, then augmented reality, AR.

Something that Box founder, Aaron Levie, said - and this kind of goes back to some things you said, Jerod, about Sarah Deachy... He says, "Just go out and try the Apple Vision. Definitely wild. Hand an eye tracking is basically perfect. Instantly understandable UX, the graphics are incredible, and the setup was seconds." So that gives you a good base. Even wherever it could go, it's got an incredible easy setup, it's not kludgy, it's not hard... So all the things you can improve on it over time will only get better; the weight, the size, whatever it might be.

\[00:48:23.16\] Maybe they introduce controllers next year. "Hey, now we have these controllers, and now you're happy. And by the way, we can give you these coin-sized, just slap them on your wall sensors, rather than having to drill; you just tape it, and it's there. And it's infinitely powered by, I don't know, gravity, or something like that." So you've got -- in a year's time or maybe a couple years' time you can have brand new paradigm shifts in this platform, that make it far more appealing.

**Mike McQuaid:** I think that's interesting. I guess the thing is - I keep forgetting this myself, because I got so over-excited... But my wife has seen me \[unintelligible 00:48:55.03\] Apple product launches, that she was like "Yeah, but didn't you always say that you shouldn't buy the first generation of new Apple stuff, because the second release always fixes all the really big problems?" And I was like "Yeah... Yeah, you're right." That for me is -- that, combined with the price... I think Apple are, again, really lucky with their customer base, because a ton of people are gonna go out and buy this, and give them really great feedback on what the second iteration of the device should be. And when they do make a device that's half the price, a third the price, or whatever, what the mass market needs that device to be.

And the other thing that occurred to me while you were talking, Adam, is just the demo they did yesterday. I mean, they're so good at these types of demos. It's kind of absurd. And when you look at the headstart that Meta has had here... I mean, basically, Meta have been gaming at this weird Second Life Metaverse thing, that everyone just literally laughs at. Whereas Apple, before they were even ready to show the headset to anyone, they have 20 integrations in the demo, and they've got a bunch of launch partners on board, and they've got this in the on-board... And they're just -- I mean, obviously, it's an early product, but it's an early Apple product. And the level of polish... I've seen various memes today about how Zuck must be feeling after that keynote yesterday...But yeah, I mean, it's --

**Adam Stacoviak:** I'd be excited if I were him.

**Mike McQuaid:** It's not good, right? If you're a company that's betting on the Metaverse, and someone who's not even in this space comes along and does this... It reminds me of when the iPhone came out, and all the phone companies were like -- I literally remember speaking to a high-level Nokia executive about six months after the iPhone came out, and they said, "We're not worried. They're not a phone company." And I said "Well, now you're not a phone company." \[laughter\]

**Adam Stacoviak:** Right.

**Mike McQuaid:** You know? And it makes me wonder whether we could say the same sort of thing with VR, and Metaverse, and AR, and whatever, where it's like, you just didn't deliver a good enough product, and someone else has taken their time, delivered something good, and your lunch could well be stolen.

**Jerod Santo:** Yeah. Well, what's interesting about this time around is that Apple has announced and shown their cards, but there's no pre-sale. There's no "Get it here." It's a year away. I mean, they're saying it's next year. That's a long time period. I remember the first iPhone, and I think it was six months, announced in January, shipped at the end of June, something like that. I think the Apple Watch was maybe another six months, maybe three quarters of a year. I can't remember exactly.

**Mike McQuaid:** Yeah. Good point. And only in North America as well.

**Jerod Santo:** Yeah. And prohibitively expensive for consumers. So three things that they don't normally do; they're definitely changing their playbook slightly. I wonder why they felt like they had to get it out there a year before they're actually ready to ship it. Was it pressure from something? I know the rumor mill had been swirling for years; they said that they've been building the technology for a decade, but I think I heard they've actually had a dedicated team earnestly working on this for seven years. So - I mean, that's a long time to work without ever shipping something. Maybe it was like "We've got to ship something." They're still not shipping, but at least they are showing.

**Adam Stacoviak:** \[00:52:07.16\] That's interesting to think about... Why now? Well, one thing Insider did say, a headline at least, that we can potentially agree on is "Apple sure kicked Meta's butt today." \[laughter\]

**Jerod Santo:** That's their headline?

**Adam Stacoviak:** That's their headline. And they say "Apple finally released its new headset Monday. It sure seems a lot better than Meta's headset, if the marketing is to be believed. But does anybody really want to put something on their face like this?" And Mike, you've raised your hand, you say yes. So I guess the answer is yeah.

If I were Zuck though, I'd be like "You know what, I'm a little worried, because they're good at hardware, they're being Apple... But at the same time, it's like, here's part of the FAANG mafia, basically, throwing their product into the ring to say, "Let's go to battle." It just deepens the pot, really. It's going to be the future of something. Who wins doesn't really matter. I mean, will Apple take over the entire market share? I don't know. Android's still out there; there's still tons of Android users. Just because Apple's out there kicking butt and taking Meta names doesn't mean that Meta can't still find a way to make their own place. And maybe they're focused on immersive, true VR, which is quite different than this.

But if Apple gets this right in this augmented space... Like you said before, Mike, it's not a far stone's throw to get into the VR space, too. If they conquer this and rule this, they could have two products - Vision Pro, and Vision VR. They can divide the market.

**Jerod Santo:** It is interesting they shipped with a Pro, in the whole concept; they're announcing the vision Pro. And normally, you announce a product and then you kind of come out with the pro line. I mean, that's been their style. But maybe they're just like "This thing is so expensive we've gotta call it the Pro." I don't know.

**Adam Stacoviak:** That could be it, Jerod.

**Mike McQuaid:** That's how I read it. And also, just what I was saying earlier about the number of sensors, and the amount of functionality this device has is unnecessary for some of the use cases. I actually really would be surprised if you end up essentially with the pro -- this is why they don't let me work in branding. Whether you have something like a vision AR, a vision VR, and then the vision Pro can kind of do both of those things, and has essentially all of the sensors and all of the chips for both devices. And instead, the other two devices are a third of the cost.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** What about the Vision Pro Max? When are they gonna come out with that? \[laughter\]

**Mike McQuaid:** That's just if you've got a really big head...

**Jerod Santo:** \[laughs\] Yeah. Well, I guess somewhat sliding into that concept, you know, people wear glasses, and so this is something... What about Adam? He's got glasses. Are those just fashion, or are those actually corrective?

**Adam Stacoviak:** These are corrective, and fashion.

**Jerod Santo:** Okay, so you've got corrective lenses on over there. And the thing is expensive as is, but they have a solution for glasses wearers. They partner with some sort of a lens company...

**Adam Stacoviak:** Zeiss.

**Jerod Santo:** I didn't pay close attention. Zeiss, okay.

**Adam Stacoviak:** The most well known lens maker in the world.

**Jerod Santo:** Okay. Of course Apple would do that. You can buy lenses for your goggles, or they fit them perfectly. I don't know exactly how it works. But so if you have bad vision, you're paying even more, right? You've gotta have the corrective lenses added to your goggles. So that's interesting...

**Adam Stacoviak:** Yeah. And this one doesn't work with old versions, so now you've gotta get new lenses, and you're trying to sell your exact prescription \[unintelligible 00:55:22.07\]

**Jerod Santo:** \[unintelligible 00:55:23.28\]

**Adam Stacoviak:** What a world, right? What a world.

**Jerod Santo:** And you can swap lenses, because they've been sealed into the thing... Because that's the way Apple does it...

**Adam Stacoviak:** Yeah. Where are we all most excited? I've gotten a most-excited myself where I would put down some dollars for this... Not at this price point, but I would put out -- and maybe, I don't know... It would be to combine this kind of thing with what I already have. I was saying in our Apple Nerds chat - by the way, you heard Jerod mention that at the top of the show; we have a Slack, you can join it. Changeong.com/community. It's totally free. Hang with Mike, me, Jerod, and many others whenever WWDC happens, and other things.

\[00:55:59.21\] But I would combine Vision Pro with an existing home theater setup. So if I could take -- I mean, and maybe you already have your screen, and that's super-cool. But if this thing is to be believed, and it is that cool, and I can immerse myself... Imagine if I can watch a movie as if I'm hovering over the Earth, right? The augmented reality around me - you know, my reality sort of is there still yet to some degree if somebody walks in, but I'm hovering above the earth, or I'm kind of hanging out in the universe, and I've got this just massive screen in front of me. And I've got a banging sound system around me, literally there. So I don't have to listen on headphones, or whatever the Vision Pro offers in terms of audibility; I can use existing, high-end, super-awesome audio and this thing to just make the experience different. That might be something that's pretty cool. It is still a niche, because I mean, how many people have banging home theaters? Not many people. But they are people who shell out lots of dollars.

**Mike McQuaid:** Yup.

**Adam Stacoviak:** And just to give an example, I bought a 120-inch screen - this is not a TV, this is just a screen to project onto - recently. More than $3,000 for this thing.

**Jerod Santo:** Oh, my goodness.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** $3,500, you could have gotten a Vision Pro.

**Adam Stacoviak:** Yeah, I could have gotten a Vision Pro. But - so you've got people that, that are willing to spend that kind of thing. I mean, you could build your own, but it's not as good... I mean - yeah, I won't make excuses for why I justify the expenditure... But I did.

**Jerod Santo:** You did it.

**Adam Stacoviak:** $3,500 bucks for just the screen to project onto, on the wall. So - I mean, people will pay for experiences.

**Jerod Santo:** Well, they do, for sure.

**Mike McQuaid:** I mean, for me as well. I'm currently sporting a nice pair of Apple AirPods Max. I actually own -- I have AirPods Pro, and AirPods Max, and I use them all in different situations...

**Jerod Santo:** Oh, man. You collected them all.

**Mike McQuaid:** But yeah, the Max - they're so expensive. And I really weighed it up for a long time whether I would get them, and I was like "Okay, I'm gonna indulge myself."

**Jerod Santo:** Would you buy them again?

**Mike McQuaid:** Oh, yeah. In a heartbeat. They're absolutely incredible. That's the thing. And I think that's part of the thing that makes me think with Apple on these cases. The funny thing for me is the pairing - when you were talking about that, Adam... I kind of want what you want, but almost the opposite. And I do have a pretty nice surround sound system at home, and stuff that. But whenever I watch TV or movies right now, it's generally when my kids are sleeping, right? And if I watch some war movie --

**Adam Stacoviak:** Right. You need to be quiet.

**Mike McQuaid:** ...or the Game of Thrones finale, I'm quite an audio-influenced person; I'm a sort of pre-children musician, and all this type of thing... So for me, I love the idea of being able to watch Lord of the Rings, or some other big epic battle scene with my AirPods Max over my years, my Vision on my face, have this enormous cinema screen, have it absolutely blasting through my ears... And I'm not bothering anyone else, right?

**Adam Stacoviak:** Yeah.

**Mike McQuaid:** And I could do that in my house, where my kids are sleeping, I could do that on a plane... That was the other case that I could see -- if I was doing a lot of business travel, like I had done in the past... I'm not anymore, really, but if I was traveling long haul every month or so... People would drop almost half that on really decent noise-cancelling headphones, right? So the idea that it's the best possible way to watch a movie on a plane - people would do that. Or be able to work on a plane; like, if you can have all your desktop in front of you... Yeah, it's not as nice as your 4k display, but --

**Adam Stacoviak:** Slapping the stewardess accidentally as she walked by, because you're pinching and zooming... "Oh, I didn't mean to pinch you. Just trying to pinch Safari."

**Jerod Santo:** That's terrible... "I didn't pinch you on purpose..." You can get yourself thrown in jail for that.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Actually, the plane is the most compelling moment. Like, when would I actually use this for me - it's none of the real life moments that they demoed. It's literally when I see them on a plane, and thinking like "What do I want to do when I'm on a plane?" I want to just tune out everything around me, and have some sort of distraction. And for me, that epic movie, with the spatial audio right there in your ears - it blacks out everything else; I go full VR mode and watch a movie for two hours, on a two-hour flight - I would like to do that. I want to go to there. But that's pretty much it. Everything else...

\[01:00:18.19\] I don't even like to have... I'm watching a movie on my iPhone, I'm holding it here, I sit it on my leg, I put it on the table in front of me... I'm always like "Is this person next to me watching?" Actually, I watched Game of Thrones one time on a plane for a few minutes, and it was inappropriate, and I was super-embarrassed.. Because you have to tell the person "No, this is Game of Thrones. This is not softcore", you know? And they're just not going to hear you on that. So I don't that experience on a plane. I would love to just tune everybody else out, and be able to have an escape.

**Adam Stacoviak:** Yeah, that's true. This would make it totally private. No one else can see what you're seeing. And yeah, that's exactly where I would want to do that. And I would even say, when they get the price point down, if they can just make it about immersive viewing of any sort. Maybe not interacting, like a game, but immersive viewing... Anybody that has the tiniest apartment would totally drop some dime on this. Because if you can skip buying a TV for 500 bucks, 300 bucks, and fill the rest of it up, the remaining amount with the expense of buying this, and you have immersive viewing, then maybe -- and you live alone, potentially even, and you only have cats. This is getting more and more niche, but... Either way, you don't have the ability to install a screen, or it's not really feasible to put a big ol' TV there, or something that. All it really requires is maybe internet, and battery. That to me is interesting.

**Mike McQuaid:** That's the other thing - even if it is feasible to get the screen... I've been historically limited by previous houses and by my lovely spouse on how big our TV is allowed to be...

**Adam Stacoviak:** For sure.

**Mike McQuaid:** And now we're in a place that we could have a redonkulous-sized TV... And once you start to get really big OLED TVs, you're definitely stepping above the Vision Pro in terms of a price point.

**Adam Stacoviak:** They're expensive, for sure.

**Mike McQuaid:** So I guess that's another thing - if they can nail the experience such that it is actually a cinema-like movie theater experience, then yeah, again, maybe that's compelling. If you're really into watching stuff... You could have one more nail in the coffin of the current kind of cinema/movie theater industry post-COVID.

**Adam Stacoviak:** Well, I mean, there's usually only one person maybe who really enjoys the biggest of big TVs. I mean, everyone else will endure it if they have to, but there's usually one person vying for the biggest experience, the most expensive things. In my house household it's usually me. My wife's like "This size TV is perfectly fine", and I've moved on to projectors and screens versus TVs, because I want big. As I mentioned, my screen is 120 inches diagonal, so that's way bigger than most TVs you could buy at a feasible price... Although I did disclose how much I paid for the screen only... So there's that.

Either way, you can drop the dime on this thing because you've got one person maybe in the household who's really wanting the more immersive version of it. So maybe you get a typical TV or a common TV for everybody else, and then you get the Vision Pro for the one person who's like "You know what? I want to hover above the Earth and watch a film."

**Mike McQuaid:** \[laughs\] I love the mental picture of having a 20-inch TV, that everyone is watching, perfectly happy with, except for Mike or Adam, who's just sitting there with a Visio Pro on their face, watching it on like the virtual --

**Adam Stacoviak:** With the biggest smile ever.

**Mike McQuaid:** Yeah, the virtual biggest TV in the world.

**Jerod Santo:** Yeah. All by himself. So there were -- believe it or not, there were other things announced at this event. We've been talking about this the whole time...

**Adam Stacoviak:** I was gonna say, Jerod, we're deep on Vision Pro only...

**Jerod Santo:** \[01:03:56.10\] We can stop here, or maybe we can hit on a few things... Maybe let's just talk a few highlights from each of us on the other things mentioned. Because they are shipping some new hardware, 15" MacBook Airs, the Mac Studio gets an upgrade... Mac Pro, for the first time with Apple silicon... By the way, talking about banking, starting at $6999; seven grand starting price on that, so you know that's not the actual price you're gonna pay when you land one of those... As well as iOS 17 updates, a bunch of stuff, iOS, iPad OS 17, new macOS... We don't have time to go through everything, but what were some highlights for you guys from this event? ...looking forward to, things that are actually shipping, either right now or soon.

**Mike McQuaid:** So for me, a bizarre one that really stuck out was the family sharing for iCloud Keychain. I am sad to say that I have fallen out of love with 1Password. I was a 1Password very early adopter. I've got all my family using it, and all this type of stuff... And I just -- in the last year or so it's felt it is annoying me more than it helps me, and stuff that used to

work is not working anymore, and whatever... So yeah, so it's one of those things where -- I'm kind of like, if I can use the defaults, and if I can use Apple's built-in stuff, I generally try and do that. So for me, the iCloud family sharing of passwords - that's the one thing that was my super-hard blocker from being able to potentially move myself and my wife, or even my parents over to using iCloud Keychain instead. So yeah, so for me, that's pretty compelling. I'll need to kind of give that an investigation of whether I can kind of migrate over...

**Adam Stacoviak:** The issue with 1Password is it's not native, and it's never gonna be native. I mean, it's native to the platform; I guess, actually it's not now...

**Jerod Santo:** It's less native now, because now they're on Electron.

**Adam Stacoviak:** Exactly. It's gonna be always a third-party application, obviously, unless it gets acquired by Apple... The problem for me, Mike - and I want to believe in that world - is that I have things that aren't only in the Apple ecosystem. And so for those reasons, it makes me want to have a robust not-first-party, because I'm not only in the Apple world. And I store other things in there, like credit cards, and driver's license, and just other sensitive information that I would not want to have to put on an encrypted disk, or in a password-protected file, with permissions, or whatever. That's, to some degree, more harder to share, because I can't share that. So I want to believe in that. if they can do what they can do first-party, but also give me actual 1Password type of things - store my driver's license in there, store my credit cards in there, share them with my wife and other family members, or whatever... That would be -- and I guess I kind of do that already with purchase sharing, to some degree; like a wallet or whatever. If they can kind of make that more in the Apple world, but also let me have things that are non-Apple in there, and an actual application to control it, then I'd be in it with you. I like the idea of the sharing, but that's why I've never really bought into the Apple-first party ways, because I need more than it gives.

**Jerod Santo:** I've heard this said, I think maybe Jason Snell wrote about it, but what they really need is an actual passwords app; a first-party --

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** Because it's in there, it's part of the settings; it's super-weird... When I have to show my parents that "Yeah, you can just get your passwords out there", like how? I'm like "Well, I just swipe down and search for passwords." And it's had different names throughout the years, throughout the versions, and so it's really just an unknown feature for so many people... If they had an actual app, just like they have a wallet app - have an app called Passwords, with all this stuff centralized - I think that would go a long way for people realizing how good their password offerings are. Because they have -- I mean, you can do one-time password, you can do all kinds of stuff inside there... But people just don't know about it, so... They should do that.

**Adam Stacoviak:** I've just used my first passkey today with Home Depot. I actually enabled Home Depot to have a passkey, to allow it to use the device, the website to use either my thumbprint, which I'm not using, or my face ID. So that's -- first passkey user, literally yesterday.

**Mike McQuaid:** \[01:07:54.19\] Yeah, GitHub's passkey support is pretty good, actually. I think they maybe even shipped after I left, but... Yeah, it works pretty nicely, actually. It's just - whenever you would have been prompted for 2FA, you just get prompted for your biometric information that is synced between all your devices using iCloud. And if you need to log in on a Windows machine, it can't be like your only secondary authentication, or whatever. But yeah, it works pretty nicely for \[unintelligible 01:08:17.06\]

And yeah, I think I enabled it on my Google account as well. So it will similarly do that, instead of prompting for my 2-FA code, or spamming my YouTube app on my phone...

**Adam Stacoviak:** That is a kludgy experience. It's secure, 2-FA, with a Verify, or Authenticator I believe it's called... It's secure, but it's not convenient. It's like "Oh, gosh, let me get this OTP out real quick." It's just not cool. I've got to remember it... And then if you're in a social setting, you could potentially be fished quickly... Because I don't know about you, but I can't remember six characters without somehow saying them out loud. Either my brain, or literally out loud to myself. I might whisper it, like 603452. I've gotta do that, to some degree, to remember that six-digit number.

Okay, Jerod, what about you? What's something that stood out to you for this one?

**Jerod Santo:** Find my Apple TV remote already. Come on, people!

**Adam Stacoviak:** Oh, my gosh...

2 Finally, they're breezing through the Apple TV portion, and they announced that you can now find your Apple TV remote from your phone when you lose it... Which - we lose ours constantly. And I've long said they just need to put an air tag in that thing. Just build an air tag into the Apple TV remote. What's interesting is this just seems like a software upgrade. They didn't say "And you have to get a new Apple TV remote", or I don't know if it makes a noise... It was also fast. I'm sure I could go back and watch it again and see exactly how it works, but somehow, I'm sure it makes a noise or it locates... And so yeah, you've got your Apple TV between the couch cushions, or your three-year-old takes it downstairs to the other TV, for some reason, and leaves it, and you lose it for days upon days... No longer; going to find that sucker. It's small, but quality of life improvements... Did you guys see how this is gonna work? I didn't see it. All I know is that just with the new TV OS it's gonna work now. It's like "What? Why did you guys wait so long?" I thought it was gonna be like the hardware literally didn't exist inside of the remote, and so you have to upgrade your remote to get the findable one. I figured they would do that eventually. And this new Apple TV has a findable remote.

**Adam Stacoviak:** Is the remote Bluetooth, or is it IR?

**Jerod Santo:** It's Bluetooth.

**Adam Stacoviak:** Well, then that means it's already there. You can just beacon to the Bluetooth with your phone, or your network... It's why you have that "Allow applications to search your network" thing...

**Jerod Santo:** Yeah, but does that give -- like, how do they know where it's located in the room? Does Bluetooth provide that?

**Adam Stacoviak:** Well, that's true, yeah. I guess spatially... True, man. They're tracking my stuff? Already?

**Jerod Santo:** If any of y'all know how they're doing this, holler at us, because I would love to know... But I don't actually care all that much, because as long as it works, I can find my remote, life's gonna be good.

**Adam Stacoviak:** I'm excited about the completion of the Mac transition to Apple silicon. That's what I'm excited about. Just being done. I'm sure you are, too. Like, no more surprises... We got some OS surprises once every two years; let's have no more hardware surprises, or any other chip surprises that you can't navigate around.

**Mike McQuaid:** You know what that means, which - I knew this day would be coming from basically the day they announced the M1 chip... It was like, counting down the days until there is a MacOS release that does not support Intel anymore. You should run a sweepstakes or something for the listeners, of like how many more releases do we get after Sonoma before if you're on an Intel chip, you can't upgrade.

**Jerod Santo:** Oooh...

**Adam Stacoviak:** Probably two more, three more maybe, I'd say...

**Mike McQuaid:** Yeah, I think about that sort of ballpark as well. I would be surprised if they killed it off next year, or whatever...

**Adam Stacoviak:** They'll freeze you to a certain OS, yeah.

**Jerod Santo:** Are they still selling Intel-based anything?

**Adam Stacoviak:** As of this, no. The last one was this Mac Pro. They were still selling it.

**Jerod Santo:** When did they sell their very last Intel? So as of yesterday, or maybe Sunday, they may have sold the Mac Pro that was Intel.

**Mike McQuaid:** \[01:12:01.09\] With laptops they've not been selling Intel MacBooks for two years plus, probably. It was funny how much of the ecosystem had not woken up to this... I definitely saw a few times where some companies ended up with slightly unpleasant situations, announcing that "Oh, we will support doing this on M1 in a few years", and be like "Everyone who buys a new Apple MacBook today cannot run your stuff anymore." \[unintelligible 01:12:23.03\] one of their internal developers pointed that out to them.

**Adam Stacoviak:** But the M2 Ultra, which I heard in the chat was - everyone could say MK Ultra, which is a mind control thing... MK is mind control... Yeah, there's a really good movie, I think it's called Kill Room, if I recall correctly. If you haven't seen that film, and you the idea of MK Ultra, and -- not so much the idea of it, but just storylines around it.

**Jerod Santo:** What about the Manchurian Candidate? Wasn't that also about MK Ultra?

**Adam Stacoviak:** Yes. Well, I would say Kill Room is better though than that move.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Yeah. Manchurian Candidate was a really good movie though, but just not as good as Kill Room.

**Jerod Santo:** Pick which one you want.

**Adam Stacoviak:** Watch both, Jerod. You know. Why choose one when you can watch both?

**Jerod Santo:** That's true. Watch them both.

**Adam Stacoviak:** M2 Ultra, and now, I guess, PCI expansion. I won't need it myself, but anybody who needs massive amount of NVMe storage, you can get carrier cards, PCI expansion cards, which I think is pretty cool. You can have 30-some terabytes of NVMe storage. So if you're doing like -- I don't know...

**Jerod Santo:** Right, that's where I fail.

**Adam Stacoviak:** I can't even hypothesize what you might be doing, but you have extreme needs - well, there you go then; you can do that with a Mac Pro. I think that's kind of cool that they left it, because they could have abandoned it. I mean, not many people need PCI expansion... But when you have a device with a $7,000 starting price tag, you should probably keep that, just for the enthusiasts.

**Jerod Santo:** You can get two Vision Pros for that much. I mean, come on.

**Adam Stacoviak:** That's right.

**Mike McQuaid:** Does anyone have a least favorite feature that was announced yesterday? One that you're dreading?

**Jerod Santo:** Good question, good question...

**Mike McQuaid:** Mine was them changing the "Hey Siri" to being just "Siri." because I have -- maybe it's the Scottish accent, but I have a dog called Lucy, and a wife called Lindsay, and when I say either of those things, all my devices -- particularly Lucy, when I'm angry at my dog for doing something disgusting, I'm like "Lucy!" then all my devices are like "Oh, are you asking for me?"

**Jerod Santo:** Uh-oh... I think Lucy heard you.

**Mike McQuaid:** Like, yeah, they already think that I'm asking for Siri...

**Jerod Santo:** Funny.

**Mike McQuaid:** So I look forward to every time I say my dog's name, every Apple device spamming me.

**Jerod Santo:** Yeah. That's a good one. So while you're talking to Siri, I should close the loop on my prediction from a few months back... So I went on record when we had Simon Willison on the show - I think that was "LLMs break the internet", and I said...

"I think this year's WWDC, which is usually in June, end of May, early June - I think Apple is going to have an answer to what all been going on. I think they can't afford to do nothing for much longer. My guess is they're going to have some sort of either upgraded Siri, or Siri replacement that will be LLM-powered... And I think they almost have to, at this point. So I think it's coming, I think they're just waiting. I agree that they've got some serious constraints around the way it needs to work, and how good it has to be in order to keep their brand intact... But I think they're gonna have something to announce. And I have no idea, it just makes sense."

**Jerod Santo:** And they totally didn't. They did mention transformer-powered auto-correct, and transformer-based dictation inside of the keyboard. Those are like -- I was waiting for the large language model keyword, and they never used it. They did mention transformers a few times, but Siri didn't get touched, except for taking the "hey" off the front. It was pretty much all they had done there. So Siri is still useful. I was wrong. I thought they would step up their game in that way.

**Adam Stacoviak:** I'm sad you're wrong, honestly. I really wish they would just make Siri more intelligent.

**Mike McQuaid:** Yeah, Siri is really bad at this point. It's kind of embarrassing...

**Adam Stacoviak:** It's embarrassing.

**Mike McQuaid:** \[01:16:08.14\] It almost feels like when you compare Siri to something like... I know it's got the voice recognition part as well, but when you compare Siri to ChatGPT or whatever nowadays... It's like what we were saying earlier about Meta, and how Zuck must be feeling right now... Yeah, just imagine trying to use Siri for the stuff that you're trying to use ChatGPT for. It's embarrassing; it's a Nokia compared to an iPhone back in whatever it was, 2007.

**Adam Stacoviak:** They're not a phone company...

**Mike McQuaid:** Yup. It feels like the tough conflict there is Apple's approach to AI about being very privacy-focused, very on-device as much as possible - maybe that just means you can't do AI Well. Compared to the privacy-invasive, "We're wrong 1% of the time" approach.

**Jerod Santo:** Right.

**Mike McQuaid:** I kind of respect them for that, if that's the case... But yeah, I still just wish it was a bit better.

**Jerod Santo:** It seems like we're moving to a place where Apple's on-device stuff is really going to pay off. They're just sleeping on it. Because the ability to take these large models, put them on your device, pre-trained, and then fine-tune and do inference on-device just makes to me a lot of sense.

In terms of least wow moments, like when I'm going to go to the bathroom, I don't really care that this was announced, but I honestly don't care that was announced, was the new app, Journal. I just went to the bathroom.

**Adam Stacoviak:** Aw... That's a bummer.

**Jerod Santo:** I just don't care about their Journal app. I don't journal. I don't want it. I don't need it. It's gonna go into a folder, or whatever you call that thing, and never be used again. But that's just me. Adam, what about you? Least favorite, and then we'll call it a show.

**Adam Stacoviak:** Well, I want to layer on one for you with that... So Day One is a pretty well-known, well designed iOS, MacOS native application. I don't think they're on other platforms. I could be wrong. No, it actually says Android, iPad and Mac. So maybe they're on Android. I think the journaling is a good thing. I was not excited about it, but it's kind of cool that it might be native; just like freeform. I think for me, I kind of go to sleep anytime iPad's mentioned, because I'm not an iPad user... And I see some of the things they're doing there, and I'm like "That's kind of cool", but every time I see myself wanting to use an iPad, I think it might be consumption, but then I'm like "I've got this big phone, so I can just sacrifice some pixels for the experience." I know Nick Nisi in the chat said that he primarily uses his iPad for consumption, and I'm just like, in every case, shape and form, if I was a digital artist, and I used the Apple pen, and I used specific things that the iPad enables for an artist, then I'd probably be excited about the iPad. But I'm not, so I'm not. So for me, anytime I hear iPad things, I just think -- I just wish they would make a super-inexpensive internet device that my kids can use in the Apple ecosystem, that wasn't 500+ dollars, or more. That's just so much to shell out to a kid. And you do want to give them these fun things and stuff like that on trips; especially on trips, and we're taking trips all the time. It's like, gosh, when we're driving, let's give them something to do so they can -- I'm not gonna buy them a Vision Pro, so...

**Mike McQuaid:** You stole my joke... \[laughs\]

**Adam Stacoviak:** Sorry about that, Mike.

**Jerod Santo:** I was gonna say, you set us up and then you stole the joke.

**Adam Stacoviak:** Well, that's how it goes. That's my least favorite thing though, is anything iPad-related, just because to me, iPad, for me in particular, is just a "Give me a smaller form factor, a kids-focused device that is affordable for parents, that has privacy features..." That's something I'd be excited about. I like the iPad for what it is, but not for me.

**Jerod Santo:** Closing the loop on Day One, I said "Doesn't Microsoft own that?" I was wrong once again. Owned by our friends at Automattic, owners of things such as Wordpress.com, Tumblr, Pocket Casts...

**Adam Stacoviak:** That's right.

**Jerod Santo:** Matt Mullenweg is just building this really interesting software conglomerate. What do you call it when you have disparate products? I don't know. He just owns a lot of cool stuff.

**Adam Stacoviak:** Yeah. Well, Paul Mayne should really get some credit there, because Paul Mayne drove that from... Day one. Thank you. World-class puns.

**Jerod Santo:** Hah!

**Adam Stacoviak:** And then I think they partnered with Automattic, which just made it a good acquisition, but they're still separate, from what I understand. Owned by Automattic, got the resources, but still very much operating as Bloom Built LLC, if Google's correct. So Paul Mayne is behind that. \[unintelligible 01:20:20.24\] forever, basically.

**Jerod Santo:** Alright, let's wrap it right here. These have been our WWDC hot takes. A lot of Vision Pro hot takes. We'll see how well they cool off over time... Hopefully better than Commander Taco on the iPod. We'll see, time will tell. Mike, thanks for hanging out with us and chatting. Always a joy. Where's the best place folks can connect with you on the internet?

**Mike McQuaid:** Thanks, dudes. Primarily probably Mastodon nowadays... I'm MikeMcQuaid@mastodon.social.

**Jerod Santo:** There we go.

**Mike McQuaid:** But yeah, also my everything's linked, and I've got some writing and stuff like that on my website at Mikemcquaid.com. You'll probably have to look at how to spell my lovely surname, but that's the best place to find me.

**Jerod Santo:** We'll leave that as an exercise for the listener. OF course, links are always in the show notes, so you can click through there as well. Alright, anything else, Adam?

**Adam Stacoviak:** Well, let's try to spell McQuaid. I don't know how to spell McQuaid. \[laughter\] How do you spell McQuaid, Mike? Real quick.

**Mike McQuaid:** McQuaid.

**Adam Stacoviak:** Okay. I thought it was right. Okay. mikemcquaid.com. Check it out. That's it.

**Jerod Santo:** Alright y'all, we'll catch you on the next one.

**Outro:** \[01:21:35.11\]

**Adam Stacoviak:** But this is for like this ultra high end film studios potentially, or somebody who needs extreme IO, or they need an infinite amount of M2 NVMe -- geez, I'm \[unintelligible 01:22:46.21\] my throat. NVMe M2 drives, and that kind of thing, so...

**Jerod Santo:** You should say that again, because it sounds like you're crying. Just clear your throat and say it again.

**Mike McQuaid:** \[laughs\]

**Jerod Santo:** Doesn't it sound like he got choked up?

**Adam Stacoviak:** Yeah, gosh. I was crying about M2...

**Mike McQuaid:** \[laughs\]
