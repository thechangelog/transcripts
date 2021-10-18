**Jerod Santo:** Alright, we are here to talk about the future of the Mac, fresh off of the One More Thing event in November. This future was teased back at WWDC, and in fact we've known there's been Apple silicon-based Macs on their way; they were promised to come before the end of the year, and now they are here, and we are here, with Tim Triemstra.

You've been at Apple for a very long time, Tim, and I'm curious, where does this announcement, this transition rank for you in the Pantheon of big announcements? You had the original PowerPC to Intel transition, you had the iPhone SDK... There's been a lot of announcements over the years... Where does this one rank?

**Tim Triemstra:** \[04:15\] It's kind of funny, because you look at it both as like the work you have to do, and also as somebody that is just a lover of products... And as a lover of products, this one's at the top of my list. I'm a Mac user, I've started my life as a software developer, and I still like to do that as a hobby... So having the Mac take this enormous jump is just about the most exciting thing that I've dealt with on here...

And like you've said, there's been a lot over the years. From a technical issue it's quite a bit easier than most of them have been in certain respects, but just from the general excitement, I hear the same thing from our developer community - they just feel like this enormous uplifting about their love for the Mac being rejuvenated... So there's a real high level of excitement right now.

**Adam Stacoviak:** Yeah, just to give a bit more extension to your background - over a decade at Apple, transitioned to the Intel-based Macs, which is huge... That was the previous gigantic leap forward, as you say in your announcements; launched the iPhone SDK, the opportunity to launch the App Store, and then obviously Swift in open source, which has been just tremendous as well. So you've got a lot of history behind you in terms of what developers really care about that Apple has done... And that's a big deal, what you've done at Apple.

**Tim Triemstra:** Yeah, it's been a really fun ride, and there's something that I think we learn quite a bit from each step. It was funny - I think everybody compares this transition to the PowerPC one, and I was lucky enough to be here 15-odd years ago when we did that... And I think it's apt in that it's the Mac, and it was an architecture change, and such... But in so many ways it's a completely different world than when that happened.

For one thing, almost no Mac developers at that time had worked with Intel, so for them it was a fundamentally big shift. They weren't really familiar with it. There was a lot more technical difficulty. There was endianness to deal with... People had been making the 64-bit move recently with PowerPC, then the Intel was going to be 32-bit initially, so there were some different things going on then... And bluntly, at the time, most people weren't Xcode users, so it was a big tooling change for a lot of people.

The thing that's funny that we're having now as a comparison -- I actually just talked with Ken Case over at Omni the other day, and his comment was like it's like coming home. Mac developers very often have been sharing with iOS for years and years and years already... They're using the same tooling. It almost feels like closing the loop... Like, okay, the one last thing that wasn't totally Apple in my ecosystem is now Apple, and they're just really excited about it. It shows a commitment, and it also makes it so they just have one last thing to worry about.

**Jerod Santo:** It's definitely a big commitment and a huge transition, a huge amount of work, and something y'all have been investing in for probably a very long time... Why do this? You say "Close the loop, get on all of our own stuff" - we know that you tout the software/hardware integration and the advantages of that, but what was so bad or so problematic with Intel chips, and were you worried that it was worth this heavy investment?

**Tim Triemstra:** I think a lot of times you wanna look at it -- I think this phrasing I've seen people use (and I use it myself sometimes) is like "Are you running away from something or are you running to something?" And I think we always run to something. We saw an opportunity to make amazing products, and every time we've iterated on our CPUs, we saw what we could do, we saw the integration we could make, and we were able to do that with the Mac; it was just an opportunity. We thought we could make really, really good Macs. And I think when people get their hands on these Macs, they'll see exactly why we did.

From the developer's standpoint, first of all I think they're gonna actually love having these Macs... And then when they do, they're gonna want their software to be running at absolutely maximum speed.

\[08:04\] It was kind of funny - I knew I was gonna talk with you, and a lot of my engineer friends have been telling me about how their experiences with these new Macs are internally, and so I took mine and just kind of on a lark... I took one of my bigger projects and I just hit Cmd+B clean, Cmd+B clean, Cmd+B clean. Just constantly built on an -- actually, it was a MacBook Air... And kept it on my lap, and the thing stayed cool the whole time. It must have done half a hundred builds.

So just simple things like that are gonna get developers so excited that they're gonna see the opportunity... And I really just think it won't even require any convincing. People are just gonna be so excited to move these new platforms.

**Adam Stacoviak:** Was this example your M1 chip? Just curious.

**Tim Triemstra:** Yeah, it was with an M1 chip.

**Adam Stacoviak:** Okay. So it was a MacBook Pro or a MacBook Air?

**Tim Triemstra:** This was actually an Air...

**Adam Stacoviak:** Nice.

**Tim Triemstra:** And you've seen the statistics on the MacBook Pro, which - I think we'll be talking a little bit more about the details... But basically, it's this enormous C++ project we benchmark, and it was getting almost three times the build performance as far as just the throughput to get the whole build done. But the statistic, \[unintelligible 00:09:15.11\] that I think was almost a little bit missed when I was watching Twitter that I thought was the bigger one was it's about three times as fast to compile... But then you've got four times as many builds on a charge, and you can think a little bit about what that means - we didn't just throw three times the energy to get three times the performance out. We actually had to throw less energy through the CPU to get that same performance. So you were actually able to get more work done on that battery charge while still getting your builds faster.

**Jerod Santo:** So maybe you can settle a bet for us, Tim... Just before the show we were talking about the new line-up, and are they really targeted at developers? And I said "Well, surely the MacBook Pro is; even though it's a 13-inch, it's not gonna be the most powerful laptop, but it's a Pro. I said the MacBook Air - it's really your most consumer-level, entry-level laptop. Would you actually say "Developers, you can do your life, you can do your work on the new MacBook Air"? Or would you say "Go for the higher performance one, with the fans and everything else?

**Tim Triemstra:** Well, every developer needs to make their own choice obviously, and the thing with the MacBook Pro is that you've got even longer battery life, and it can get even faster in cases... But the MacBook Air is an enormous jump versus the previous generations. So I think a lot of times people have to reset what they expect and what they want out of their laptop. There's absolutely no reason you cannot do really serious development on a MacBook Air. I think that's an amazing statement, and I think it's absolutely true.

But I do think a lot of developers would probably want to go for the MacBook Pro, just because it's a slightly elevated bit that is worth it for a developer.

**Jerod Santo:** The other major thing that we're hearing from our community and that we're thinking as well (and I think Adam thinks this as well) is we see the new machines - I know we're jumping ahead here, but let's just jump ahead and do it - and we get excited... And then there's something about the maximum 16 GB of RAM on the new machines, and it's kind of like "How many Chrome tabs can I run on only 16 GB of RAM?"

**Adam Stacoviak:** That's true.

**Jerod Santo:** We're used to having much more. And maybe it doesn't matter because of the system on a chip, and unified memory stuff - you can speak to some of that - but is this gonna be a major hold-up, maybe not for regular consumers, but for software developers and video people and the pro customers that you guys serve?

**Tim Triemstra:** I think that, again, that is something that each individual developer has to make their decision for. We still offer the MacBook Pro outlines that have 32 GB of RAM available on them... My personal belief is that many projects would be more than fine to operate on the 16 GB machine; and then the portability, and speed that they get in those machines is certainly an awesome product for many software developers, especially app developers, where - you know, apps tend to be a little smaller size, you tend to spend a little bit more of your time doing incremental builds, which are fantastic about throughput, and the build time is really, really great.

\[12:12\] So I really think, like any product, each individual developer has to make the choice. But my experience is that these are fantastic developer machines... And the fact that you get this great portability and really great performance is gonna be an enormous benefit to many developers.

**Adam Stacoviak:** So considering that you've spent what seems like the majority of your career at Apple, interfacing with engineering and interfacing with developers, what is it that -- you know, considering the different announcements you've mentioned that you've been to, the different areas of Apple, what is it about this one in particular? ...the hardware, the software, this integration, this new leap forward, I suppose, for the future of Mac and the first Apple-made chip? You know, Big Sur... All this that was announced - what is the thing that you think is the most important for developers to take away from, I suppose, the One More Thing event, but this time for Apple right now?

**Tim Triemstra:** I think the biggest thing that I really want developers to take away is just the excitement that Apple has for the Mac. I think people have to understand how much we love the product, how much we love using the Mac, and the effort that went into this transition which you hinted at earlier... It's not insignificant. This is an enormous number of engineers working extremely hard for a really long period of time, and yet I don't think I've ever seen the level of excitement that I'm seeing with this.

As a result, I think as a developer - you know, you have built-in Unix, you have all these types of things with the Mac, and now you have Apple silicon coming to this product. I really want people to perceive the excitement that we have when they use these products. I think when you see the Big Sur redesign, when you see the instant wake... All these things are just like "Well, this is not what I remember. This is an amazing advancement."

I think instant wake is one of those little things that -- it was kind of a fun, little gag in the keynote, but it was one of those things that the first time you say "I have a laptop and it turns on the same way my iPad does", you're like "Wow, that's pretty nice."

**Adam Stacoviak:** So the boot-up process isn't there anymore whenever I turn on my machine? And I know that a few laptops back essentially it became whenever you open the lid it would begin to boot up... So you're saying that there is no boot-up process anymore in the instant on? Is that what that meant? Or help me understand better what happens.

**Tim Triemstra:** It works a lot like an iPad does, in that you -- a lot of people have gotten used to the idea of shallow and deep sleep, where you close the lid and it doesn't really sleep until a little bit of time passes, and then it really goes to sleep, and then it does all this other stuff. That really isn't what's happening anymore. So you have this -- much like your iPad, where it goes into sleep, and it's saving a huge amount of energy, but it doesn't need to go into a deep sleep that requires it effectively to reboot. So it's always in that shallow sleep state. It's always ready when it comes back. It's not just turning the monitor on; the computer is totally ready to go.

**Jerod Santo:** Is that taking advantage of specific things in the M1 chip, like the low-energy cores, or something like that?

**Tim Triemstra:** Yeah, exactly. The chip has been architected specifically for this, because this is what people have expected on an iPhone, this is what people have expected on an iPad forever... And we make both operating systems, so we can certainly make it available for the Mac as well.

**Jerod Santo:** I'm curious - you have this huge amount of effort we were talking about; all hands on board doing this thing, many years... And you have these big events, and historically, they've been live, thousands of people in the crowd... I know that Apple engineers and employees get to attend the keynotes... And here we have -- the state of the world that we're in right now, is it somewhat bittersweet? Because you've been putting all this effort in, and here you have these announcements - and they're very well done, but they're prerecorded and everybody is watching them from their own machine at home, or in the office, we're all isolated... There's probably no high fives like there used to be, there's probably no hugs... I mean, I imagine -- it's like when you win the big game, is when finally your thing that you've been working on gets announced to the world... Is it bittersweet because of the quarantine and whatnot?

**Tim Triemstra:** \[16:20\] I wouldn't call it bittersweet, but I definitely get where you're coming at. I mean, sitting in the theater at WWDC when we got to announce it would have been amazing. Being able to do more of that in-person now would have been amazing, and I think we all miss that a little bit... But it's always been about making the product, releasing it into the world, and then knowing people have it. And then knowing people are actually enjoying it. And I'll watch Twitter like anybody else and see people excited, and such... And I can't wait for them to actually ship next week, because we'll have this next wave of people actually experiencing the product. But yeah, I don't think bittersweet is there. There's that element that's missing, but it's also pretty exciting.

**Jerod Santo:** Well, like you said, it's ultimately about getting these things out into the world, into people's hands... And as we record this, Big Sur is gonna get into our hands tomorrow; but as people listen to this, it's already out there. It can be downloaded, installed etc. And Big Sur is really kind of a tandem announcement or a tandem release to the Apple silicon chips... And it's built kind of around and for. Tell us about Big Sur and how it integrates into this new product line.

**Tim Triemstra:** Yeah. I think that -- you know, the thing we said is that it's built down to its core for the new silicon, and I think the thing to take away is how much code Apple has been able to share for years and years across to our platforms as we have these frameworks that are common so developers have them... iOS was built on a Darwin foundation that we had from iOS... So the thing that was really neat with Big Sur is the chance to actually have all that work kind of realized back to the Mac.

Like I mentioned, the instant wake - that's code obviously we understood, and we were able to modify and upgrade it for the Mac. Now you have iPhone and iPad apps able to run on the Mac, which is kind of a fun story... People have actually seen us develop this in the open, and not fully get to see it realized until just now, when we did Mac Catalyst three years ago for our own apps, and then we opened it up for third-parties, so they could do it, and then we advanced it even further, and then we used it ourselves for the Messages app and for the Maps app... And now, by building those frameworks across the platforms, because you're now on the exact same architecture where you could just do a recompile before for Catalyst, and then you'd see what it would look like on a Mac, but you had to do the recompile because it was Intel - it's literally that same framework now running on Apple silicon, and the result is that the app can run without you doing anything. So people start to understand, it's like "Oh, I get what you're doing."

And then Big Sur just felt like this culmination of all this work, and with the Apple silicon where it was - okay, now we have macOS 11, we have the next generation of what we think the future of the Mac looks like because of all these technologies coming together. And the redesign - it has a lot of these things we've learned over time as far as space usage, and just the general usability we've learned from all these different platforms, and makes it feel much more common, like they're all one family now.

So you buy a Mac, you buy an iPad, you buy an iPhone - everything really feels like it was built by the same people, with the same ethos about what a computing experience should be, optimized for each individual platform.

**Jerod Santo:** So what about folks who are not on Apple silicon? ...which is everybody at this point. Every Apple machine that's shipped in the last 15 years has been Intel-based, so here we are with a bunch of established Intel-based Macs out there. Is there things in Big Sur that just won't be exciting to them, or did we just miss out on some features? Are there actual explicit features that you're like "This is only for M1 and beyond, and this is for Intel"?

**Tim Triemstra:** \[20:09\] Well, some of the things that the computers can do, like the instant wake and running the iPhone and iPad apps, are contingent on the hardware that's in these new Macs. But one of the things that's really cool is that Apple has pioneered and continues to lead the industry with this universal concept, where we've had Universal Apps for well over a decade... So what we do is with the tooling and with Universal Apps we're able to make it really easy for developers to support both Apple silicon and Intel.

So people with Intel Macs will continue to get amazing software, and it's really easy for developers to continue to support them. Something that I think a lot of people don't really understand is how perfected that is. When we had the PowerPC in Intel, that was kind of like the signature time people looked at the Universal Apps. But over the last 15 years we've done the 32 to 64-bit transition multiple times. We had iOS moving to 64-bit. And in fact, in iOS we had a v6 instruction set, then we had a v7 instruction set, and there were derivatives of the v7 instruction set... There was a time when we were actually building three versions of the binary and putting them in the app, and users never noticed, because it just worked. And the App Store would even thin out the versions of the binary that came to your device so you didn't lose space.

This transition concept is something that we've really had working extremely well for a really long time, and Xcode developer tools does this for you automatically. When you open up Xcode 12.2 and you open up your Mac project, we'll convert it to universal, and the next thing you know, you're building Intel and Apple silicon, and you didn't really do anything. Users are gonna reap those benefits for years and years.

**Jerod Santo:** What about folks who aren't inside Xcode, or maybe they have some legacy stuff? Is there gonna be some transitions? I know that we saw Adobe -- they'll have Photoshop ready early next year, so obviously there's some work they have to do there. Are there major lifts for anybody? The happy path looks pretty happy; like, open Xcode, rebuild, you're good to go. But surely, there's some hurdles for some folks.

**Tim Triemstra:** Yeah, I mean - every project is a little different. What we generally see is that if people completely own their own code - so they have all the source code, they can rebuild it, usually within days they are up and running. I talked with, like I said, some of the developers here recently. Pretty much everybody has told us that's the easiest transition they've had to deal with. And so they're just excited about doing the transition a few days or a week, and they move on.

We do understand that some people pull in third-party code, and if that third-party code is just in binary, they have this dependency tree where they wait for that to get done... We introduce new things called XCFrameworks, that makes it easier for people that do vend third-party code to vend it in multiple platforms, just like a universal app. It's essentially a universal framework that you can ship. So it's become a lot easier to do that.

And then there are a few edge case things where people were writing to very specific Intel instructions. There was some floating point math, or something like that... Very uncommon, but there are a couple of people that may have a little bit of assembly language that's using that, and then that'll do a little bit of work. But we've worked with big and small developers, and everybody is telling us that this is about the easiest transition they've ever had to deal with. And the fact of the matter is that I think you'll be seeing a lot of software in the App Store that's universal very quickly, which will attest to how good it is.

I think I saw Visual Studio Code announce that they are already building an Apple Silicon version on their nightlies. They've tweeted about that the other day. You saw the Adobe announcement; all the Omni apps will be in the store at launch. Really, it's been an extremely good pickup.

**Adam Stacoviak:** \[24:01\] What about tooling in the open source world? We've got a lot of people in our community asking about the help, the support for open source... One in particular is Homebrew, or other apps like that, or projects like that, that need support or access (I suppose) to documentation to be able to run on Big Sur. What does Apple do, now that you're in Swift and you're more at least in line with open source, and have that empathy? What internal things have happened or are available to open source developers to prepare for Big Sur?

**Tim Triemstra:** Well, we did work with a number of open source projects to give them access to the DTK unit, so a lot of people have been working on them for a while. There's many Homebrew projects that have already been supporting Apple silicon. You can run Homebrew on Apple silicon. So that is a big hurdle for a lot of people that is already overcome. Obviously, there'll be long tails of projects; not all of them are there on day one...

**Adam Stacoviak:** Sure.

**Tim Triemstra:** ...but we haven't even shipped Macs yet, so... I expect it to come pretty fast. We ourselves contributed to dozens of open source projects with patches. We've got everything from machine learning, to databases, to all the different things that you would imagine in an open source development stack. We know, for instance, the Mac is incredibly popular with web developers, so the vast majority of the popular web development stacks have already announced or have even produced builds for Apple silicon... So we think it'll be something that goes pretty quickly.

**Jerod Santo:** So this is undoubtedly a large change... And called out by the fact that you're going to S 11 now, right? No longer OS 10. So Big Sur is a very big change, and we can see that reason why, because the underpinnings are completely different. The end-user-facing features, however, when you look at the top of the line features that are coming in Big Sur, it looks like a nice operating system update. There's definitely some good stuff in there. It looks more like an evolution than a revolution... Except for one thing. The change to run native iOS apps on Mac now - that could be a revolution. That could change the game quite a bit. That could change the way the Mac feels over the next couple of years. Have you run a lot of iOS apps as you've been building this, and been looking at builds? How does that feel, or what does that look like?

**Tim Triemstra:** Yeah, it is gonna be one of the biggest revolutions through this process - the iOS, iPad, iPhone app store has the most vibrant app ecosystem in the world. It's hard to argue that point. So now the Mac gets to tap into that, with hundreds of thousands of new apps available as soon as you crack open your Mac, which is pretty exciting.

Personally, the example I always use, because it's something I see all day long, is I have a baby monitor camera, and I can now run that app. And it resizes, and does all these great things. I have a young child, I can watch her sleeping when she's taking a nap and make sure she's okay. And the thing about that is that app vendor made an iOS app; clearly, it makes perfect sense to have it on your phone or an iPad... And that developer - I can totally understand that they didn't have a mindset where they felt that they needed to make a unique Mac app. Most people have a phone or an iPad... So I get it. That's their environment. But now, as a Mac user with a Mac that I'm working on, the fact that I can pop that open anytime I want is awesome. It's nothing but a huge win for me. There's games, and there's other apps of that nature. Even simple things like setting up an appliance or something like that, that somebody might make an iOS app for; they would probably never make an Mac app for it. But now it's also on your Mac, and how great is it that it's there? So we're really excited about that ecosystem opportunity.

We also think with how easy it is to then bring a Mac app over with Catalyst, so you can start adding Mac-specific features. What'll happen is developers will see that there's all these Mac users out there, and they'll say "Well, they love my app. I can really just check a box in Catalyst and start making a Mac-specific app for those users, and make something even better, with very Mac-specific features, if I want to..."

\[28:14\] We think a lot of developers that maybe didn't think about it before will have that user base all of a sudden raise their hand and say "I like your app", and they'll make their apps even better for the Mac as time goes on.

**Jerod Santo:** So the developer doesn't do that... Does it have a strange, Uncanny Valley feel to it? ...like, is there no menus, is there no keyboard shortcuts? Does it feel like it's like an iOS app that just happens to exist here, maybe as you run a simulator kind of a feel? Or does it feel more native than that?

**Tim Triemstra:** Well, first of all, they all get a menu bar. So you get Hide, and you get those types of features built in. All your task switchers and all that kind of stuff work like you would imagine; it's just a window on your Mac screen.

And then one of the things that's kind of fun is that everything about this release feels a little bit like "Hey, I've been working on this in secret for a long time. Now you really understand what we're doing..." You may have seen at WWDC this year we announced that there's new sidebars for iPad... Well, those sidebars look like Mac sidebars, with that same exact physical binary when it opens on a Mac. We've been adding multitasking to iPad, which uses this thing called size classes, so you define your user interface... What if I'm multitasking on an iPad and it's like half the screen size, or it slides over? Well, that makes it so that the windows are resizable when they're on the Mac. So now you've got a resizable app on the Mac, which makes perfect sense on the Mac, and it feels like it's gonna scale properly.

You get a new keyboard interface that we added - it came with the Magic Keyboard - for the iPad... That adds some new APIs, so you can make really cool games, and things like that, with a really precise keyboard API. Well, now you've got an even better keyboard API when it runs on the Mac as well. So you can make really rich iPad apps that will also be really rich Mac apps.

So the Uncanny Valley - a lot of it just depends on "Did you make an app that is best practices today?" Because if it is, it'll look like a really good Mac app, too. Now, if you didn't do anything, if you're one of those people that makes an app -- basically, I said it's a rectangle, and that's all it is, and it doesn't resize real well in other ways... Well, it'll probably have similar attributes. But I think that's something that's been so exciting about the platform in the recent years, is these apps have just been getting more and more powerful on iPad, and now they're taking a leap up to the Mac.

**Adam Stacoviak:** Yeah, it seems a lot like that, actually. When you took an iPhone or an iOS application and was able to use it on iPad, for example. When that switch happened, when it became available - so much of that, where you had this whole new opportunity for new users, an extended interface, very similar to a larger screen, like a Mac might have... Not exactly a Mac, but very similar. It seems a lot like that era. The same things you learned then, or the same things a developer went through in that point might be similar or true today, like it is now.

**Tim Triemstra:** Yeah, exactly. When we did size classes a number of years ago, there was a very obvious reason for it - we came out with larger phones. So by adopting that design pattern in your app, when we came out with a new-sized phone, your app looked great. You didn't do anything. It was using a pattern that allowed your app to scale properly.

So these are the things that we've learned over the years, that are now getting applied to more and more of our software stack, and the Mac is reaping huge benefits from that.

**Jerod Santo:** So how does somebody get their iOS app on the Mac? Do they just put it in the Mac App Store, or just check a box when they're submitting it to the App Store?

**Tim Triemstra:** So there's a place on App Store, Connect, which is the place where you manage your storefront for your apps; in an App Store Connect there's a checkbox, so the developer has control whether or not it's available on the Mac or not. Now, we know there's some apps that maybe use a gyroscope, or use really complicated multi-touch gestures where there's not really an equivalent, so they might wanna opt out and say "Well, I don't want my app there." But for the most part, we think most people will want their app to be available.

\[32:15\] The other thing is that this will probably get a lot of people thinking "Wow, I should make an alternate control mechanism. If I add keyboard support instead of just the multi-touch, I could have a pretty cool experience on the Magic Keyboard on an iPad 2."

So we think people will actually start looking at their apps a little differently. But to make it available, it's literally a checkbox.

**Adam Stacoviak:** And what in particular does M1 offer in this world, this new native app world that's available? What in particular about M1 should get developers excited.

**Tim Triemstra:** Well, certainly a lot of the benefits they've seen already on iPhone and iPad are now there. We've talked about a number of the features... But there's a lot of really low-level stuff, too. For instance, just some of the number of instructions that are necessary to perform very low-level commands are less, because we've been able to optimize for the actual silicon for years... Object retain and release, which is basically reference counting - it can be about four or five times faster to perform this very common operation of instantiating and cleaning up objects. That's gonna be something that you see on an M1, that at the very lowest level everything is running a little faster.

Some of the other things that you'll see is with unified memory architecture - sometimes it's kind of hard to understand what that actually means. Certainly, it means shared memory; that's what most people think of. But what people don't understand sometimes is that even when you have shared memory on some integrated systems, you still have different formats of how things are represented, depending on where they are in memory; so video, or images, or things like that. You know, not everything is just a bit blit of moving memory from point A to point B in most systems.

In our unified memory architecture that is all consistent. When you're working on a CPU task, and then a GPU task, and moving that around memory, that's all the same memory formats that we architected, because we own the whole system. So we can make sure you're not copying, you're always reusing that same memory all the time.

So as a developer - stuff that you may have written, the same one-line of code actually meant a background copy, is now actually just handing a pointer over to a different task. So you're seeing things that used to feel slow, like "Boom!" All of a sudden, that operation happened literally instantly, because those things in the background weren't needing to happen.

So it's not just an instruction set. It's not like "Hey, you had to write these assembly instructions, now write these assembly instructions." The way your software runs is fundamentally different, and it's really exciting.

**Jerod Santo:** So you're saying we shouldn't be worried about that 16 GB RAM limitation...

**Tim Triemstra:** Yeah, you're not copying. So there you go. \[laughter\]

**Jerod Santo:** \[unintelligible 00:34:56.10\] Just forget about it, Jerod. Let it go, let it go...

**Adam Stacoviak:** We've all been hypothesizing behind the scenes too, like "Why cap at 16 gigs?" And when you go unified, like you're talking about, it seems to make sense, because the formats are unified - to keep using the word unified, because it's cool... But when you have that, you have less copying. So the assumption, from a layman's perspective - I'm not a chip expert by any means, but I have some logic in me at least... And the logic says "If you're not copying as much, you need less."

**Jerod Santo:** That's good logic.

**Tim Triemstra:** Yeah, I'm not a chip expert enough to say "I would predict X amount of memory is different", but certainly from a performance standpoint... And certainly when you talk about heap creation, and things like that, other sorts of things that a developer thinks about, as far as copies on write, and when it will have protection on this, and when is the thread safety - all those kind of things get a little bit easier and a little bit less overhead, and it really does pay off in all these different little places through your software stack.

**Jerod Santo:** \[36:00\] So help me understand how Catalyst fits in. You've mentioned it a couple times... But when we talk about getting the native iOS apps onto the Mac, we talk about the Uncanny Valley, features from Mac, does it work with multi-gesture etc. Let's say I'm your camera operator iOS developer, and I just have my iPhone app, and it works on Big Sur just fine. But let's say I wanna adopt some of those more advanced features, like when you hit Cmd+N it opens a new window... Or whatever it is; maybe that one already works. But you're with me. Do I need to adopt Catalyst to get in on that action, or I can do all that myself? Or do I have to start with Catalyst to have a Catalyst app? I don't really understand how Catalyst fits into the picture for existing apps. I get it for brand new apps. You just start a catalyst-based app and you go. But what about existing apps?

**Tim Triemstra:** Well, if it's an existing app that's only for iOS and iPad, it's not really a Catalyst app. We just call that an iPhone or iPad app. And then we have all these nice APIs about multi-tasking, and multi-window and such on iPad that you could adopt, and that will improve your Mac app.

The moment you say "I wanna build something that's just for the Mac", at that point the Mac App Store actually has its own apps. So think of it like this - if you built an iPhone or an iPad app, you check a box and now it's also available to you on the Mac App Store. In fact, there's a nice little tab that we have that separates the Mac-only apps versus the iPhone and iPad apps that are available. But you wanna add that Mac-specific feature - as a developer, you say "Okay, I wanna turn this codebase, which looks like an iPad or an iPhone codebase", and you say "I wanna make this a Catalyst app." And what that will do is it will literally produce a different app target for the Mac. Now, every line of code didn't change, but now you've got your own Mac target where you can start adding new source files, new behaviors, you say that these new source files and these new behaviors are targeted to just that Mac deliverable, and then you can get all these cool new Mac-specific features that you've put in there. The cool thing about that is that you can then do things like SwiftUI, or our other API \[unintelligible 00:38:04.12\] that Mac app that is specific to that version of the Mac app.

**Jerod Santo:** It seems like the video games are gonna be the first ones that really take advantage of this... Because why not? You have this awesome game on iPad, and it's just like "Check this box." As long as it's a traditional iOS-style game, where it's like a single click; like your tap, tap, tap kind of a game, and not a gyroscope kind of a game... You could just put it on the Mac, and the Mac's gonna have thousands more games in Big Sur than it did before.

**Tim Triemstra:** Yeah, we use the Among Us game as an example, because it's a really fun game that isn't about incredibly intricate controls. It's really about the social aspect of having this game... And you can really just kind of tap around the world when you're playing, like "Go here, go here..." And that control mechanism worked great on the Mac. That's absolutely a game that people -- I mean, the game is going crazy. People are really absolutely loving that game. But now putting it on your Mac - that just means that it's one less device that you have to say "I'm gonna switch over to my iPad to play this game. I can sit here on my Mac and keep playing."

I just would love to convey how much we are all super-excited about what this is. This is a multi-year effort that we're finally getting to reveal to the world... And I'm just really excited about next week, when we start getting all the reviews and everything, when people actually get the hardware in their hands. It's funny, when you see hardware announcements, you see "This is 20% faster, and this is 30% faster", and people get really excited about that. And you don't usually see 20%-30% faster all that often year after year... And I almost feel like people didn't fully understand that we said 3X, 11X... That's hard to comprehend until you actually use it, and I'm just super-duper excited that people will soon be able to actually experience that and see something that is literally three times as fast to compile, what that means to their lives.

**Break:** \[40:07\]

**Adam Stacoviak:** So we're here with Ken Case, the CEO of the Omni Group. Ken, when I think about Mac apps and I think about people who make Mac apps, I think about your company.

**Ken Case:** Oh, thank you.

**Adam Stacoviak:** The indie Mac dev is still alive, still kickin', still creating and making awesome apps... And when I think about someone who's in that space, it's definitely you. Now, I will admit, I didn't know Ken Case, I knew the Omni Group.

**Ken Case:** Sure. That's great.

**Adam Stacoviak:** So there's at least that. \[laughter\]

**Jerod Santo:** That works.

**Adam Stacoviak:** Tell us about your company and what you've been doing, and your desire for the Mac platform.

**Ken Case:** Sure. Well, a little bit about our company... As you've already mentioned, we've been on the Mac quite a long time...

**Adam Stacoviak:** A long time, yeah.

**Ken Case:** We actually started on the Next platform. And maybe I should first mention what we do. We build productivity apps. At least that's what we focus on now, over the last 20 years or so. But in the past -- 30 years ago, our goal was just to try to help this platform succeed. The Next platform - we were really inspired by all of the technologies that went into it, and we loved programming for it, and we wanted to see it succeed, so we did everything we could, from consulting contracts, to building a web browser, to porting games to try to help that platform succeed. And when Next was acquired by Apple, of course then that passion translated into our passion for the Mac, and macOS 10.

**Adam Stacoviak:** Right. It's a long time you've been involved with Apple. So far back that you have similar roots, the same roots. Because you grew together, basically.

**Ken Case:** Yeah, I guess we've been involved in a lot of the history from at least one side of the equation. There were all these teams on the Apple side of it that we had to meet and learn about...

**Jerod Santo:** Sure.

**Ken Case:** ...things like QuickTime, back 20 years ago... But yeah, it's been an exciting set of transitions.

**Jerod Santo:** Yeah. So this is a big one, but it's not the first one you've been through... The big one I mentioned with Tim on the other part of the call was the switch to Intel, but that wasn't even your first transition; that was your second transition. Right?

**Ken Case:** \[laughs\]

**Jerod Santo:** I mean, you've been doing this a few times. So this is not your second rodeo, this is like your third rodeo when it comes to Mac transitions. Is that fair to say?

**Ken Case:** Yeah, I think that's fair to say. I've been thinking back on transitions, and the '80s were full of a bunch of transitions. It was a crazy time, where we had 6502 CPUs on one end, with 8-bit processors, and then we had things like -- I was involved in working with the Cyber mainframe on the other end, that had like 60 bits, which... We hadn't even standardized on ASCII yet, or on how many bits were in a byte, or in a word... \[laughs\]

**Jerod Santo:** Wild Wild West back then. Still trying to figure it out, right? Still trying to figure out what a platform looked like...

**Ken Case:** \[laughs\] Yeah. So when we settled down and decided "Well, the Next platform is that we want to do" - this is after having explored maybe 20 other platforms, from the Apollo, SGI... All of these crazy, different things that were going on in the '80s. And in the '90s, things started settling down quite a bit, and we saw Windows really start to dominate on the work desktops, and we saw the Mac dominating a lot, I think, on the creative side of things.

**Jerod Santo:** \[44:10\] Right. And you have a whole suite of these productivity tools... Probably millions of lines of code at this point. Do you know how many lines of code you are in charge of, roughly?

**Ken Case:** I do not know that. I could start a word count in the background, while we continue this conversation... \[laughter\]

**Jerod Santo:** I think it's safe to say millions, right?

**Ken Case:** I would say maybe roughly more like a million. We do try to prune the code from time to time; clean out the old code that can now be written in more efficient ways.

**Jerod Santo:** Right, right, right.

**Ken Case:** But maybe I should mention - so the products that we have now are OmniPlan, which is project management; it's like building a timeline of things... OmniFocus, which is more like executing on that timeline; so it's keeping track of your own tasks, and doing something. We have OmniOutliner, which lets you break ideas down into an outline of thoughts, and so on... And then we have OmniGraffle, which I think is one of the apps that we're probably best known for, which is our visual diagramming application.

**Adam Stacoviak:** Absolutely. I mean, I can remember back -- it's been a bit since I've done of these, so it's not... I'm sort of aging myself to some degree, but... I can remember the first time I've laid out a workflow for an application, and every time I did it since then, it's been through OmniGraffle. Laying out how things work, different workflows... If it hadn't been for OmniGraffle -- and I suppose even more than that, the love for developers and a love for the Mac platform... Because that's really what it was. It was like "This is a day --" I could say it was probably like ten years ago... Where the desire was high on that side. The design function, the look, the feel of a Mac app was clear. Building it native, or even a company around building Mac apps was very much a cool thing. It still is to these days, but this was early days, so it was new. New cool. I had been a huge fan of OmniGraffle and the apps you guys have created.

**Ken Case:** Well, thank you.

**Adam Stacoviak:** So I'm an old-school user. Old-school user.

**Ken Case:** Yeah, there was something really distinctive about Mac apps in the early 2000's as \[unintelligible 00:46:07.11\] was introduced, and all your windows had pinstripes on them... \[laughs\] Some of those things fell by the wayside over time...

**Jerod Santo:** Yeah, styles change...

**Ken Case:** But if you really wanted to be a modern app, you could tell which apps were modern and which ones weren't, let's put it that way.

**Jerod Santo:** There you go. Well, you made this suite of tools, and you've been pruning along the way, and changing... I'm sure the market has pushed you in certain tool directions, and these other ones have maybe gone by the wayside, but you've always had these productivity tools. They made it through the transition into Intel. And now here we are, and they're all running on Intel processors. I was talking to Tim on the other part, and I said "At this point, every Mac out there is now kind of a legacy Intel Mac. All your hardware is still Intel hardware...", until now they've been shipping stuff out, so it's starting to change that. But what does this transition look like for your team? What did Omni have to do to prepare? Because all of your apps are now ready to be native, M1-powered, Big Sur apps. They're all ready for this transition, so what all went into that?

**Ken Case:** Sure. So you asked earlier what's different about this transition than earlier...

**Jerod Santo:** Yeah.

**Ken Case:** Some of those earlier transitions, like from m68k to PowerPC, or from PowerPC to Intel, we were really going to a platform that we hadn't been on before. In this case, I feel like we've been preparing for this transition now for over a decade, because we've been developing for the iPhone all this time, and it's the same architecture, the same instruction sets... So a lot of our code in fact had already been ported to run on Apple silicon processors.

**Jerod Santo:** Okay. Do you share a lot of code between your iOS apps and your Mac apps?

**Ken Case:** We do, yeah.

**Jerod Santo:** Okay.

**Ken Case:** All of our model code we try to share as much as possible. And even some of our drawing code, the drawing code that can be platform-independent, like Core Graphics-based - we try to share that code as much as possible. Obviously, we don't share the top-level interface code, or at least we hadn't until the advent of SwiftUI, which - now we're starting to do that as well.

\[48:09\] So yeah, in many ways, this transition was easier than any of those earlier ones, because we already knew what we were building for, we were using the exact same tools, we didn't have to learn a new processor... In fact, we could just take the code, rebuild it, and run it. Start doing some testing, to make sure...

**Jerod Santo:** It's just as easy as that, huh?

**Adam Stacoviak:** And to that point - your blog post announcing the Omni Productivity Suite being available for M1 and macOS Big Sur was out two days after the announcement; so I'm not sure if that was in tandem because you have access, or if it was just that easier... Maybe just both... But definitely, right off the announcement, two days later announcing the support of M1 and macOS Big Sur.

**Ken Case:** Well, in fact, we had our apps built and ready to try testing before we had any hardware to test on. \[laughter\] So even the DTK systems that were shipped out to developers this summer, before we had access to a DTK, we had a build that was ready to test on it and we were just waiting for a DTK to arrive.

**Adam Stacoviak:** So you're moving faster than Apple then...

**Jerod Santo:** Yeah.

**Ken Case:** \[laughs\] Sometimes we can do that... Or at least in one narrow area.

**Jerod Santo:** Right.

**Adam Stacoviak:** Well, I think -- and less to their dismay, but more to their credit... That they can allow developers on the Mac platform to predict where they're going because of iOS and iPad OS, all these things; because of their work on the different chips, that sort of determine where they're gonna go, so you can sort of predict and plan ahead because of that.

**Ken Case:** Yeah, sometimes some of the moves that Apple makes are a lot more clear in retrospect than they were when they were happening. \[laughter\] One of the examples that comes to mind is when Apple announced that they were working on WebKit - you know, they had Safari - and that their priority was to, more than being correct about rendering a web page, they wanted to make sure that they never regressed in performance at all... And at the time, I was thinking "Well, that seems kind of crazy. What if you've left out an important function, like Bold, or whatever, and introducing Bold is gonna make the web browser slower?" But you need it to be correct, right? All of that seemed clear to me, and crazy, until they announced the iPhone. And now it was really clear why they needed something that could not regress in performance. It needed to be able to perform well on that device, so there was no reason to have it at all.

**Jerod Santo:** Yeah, really; in retrospect. In this case though, they showed their cards. WWDC - they announced "This is a thing. This is gonna be a thing. There's gonna be some--"

**Ken Case:** And they gave us tools.

**Jerod Santo:** Which was pretty big, I assume. To get you ready.

**Ken Case:** Yeah. Obviously, we couldn't have done it without having a version of Xcode that could build now Mac apps for the new hardware. So that was a big piece of getting ready. We could kind of guess the writing on the wall, I guess, over the last decade, as we saw the trajectory of how Apple's CPUs were increasing their performance over time, compared to what was happening with the Intel CPUs that were in the Macs.

**Jerod Santo:** Right.

**Adam Stacoviak:** We've got some hindsight, too. On the call with Tim we didn't have much hindsight; so in terms of hindsight, there's definitely been some delivery of M1-powered Macs in the hands of...

**Jerod Santo:** Reviewers...

**Adam Stacoviak:** ...enthusiasts, reviewers out there.

**Jerod Santo:** ...YouTubers...

**Adam Stacoviak:** And one in particular is Rene Ritchie. He had done several different benchmarks that were well-known to be describing. Now obviously, this is paper specs, but it definitely -- the M1 processor on these machines was blowing the whatevers off of Intel.

**Jerod Santo:** The competition out of the water, yeah.

**Ken Case:** \[laughs\]

**Adam Stacoviak:** Yeah, it's just... And even when you compare the Mac Mini to the MacBook Air or the MacBook Pro, they all performed very similar. Similarly more better than Intel processors. But having been (I suppose) down this road quite a while, what is your perspective on Intel-powered Macs and M1-powered Macs? Not so much on are they bad or good, but just the fact that -- what was the limitations that Intel put?

\[52:14\] One thing I understand with the M1-powered Macs and this chip is that Apple can design a chip that is specific to their machine, rather than an Intel chip - which is amazing, I'm sure, in many regards, but not laser-focused on what they're trying to achieve with a Mac Mini or a MacBook Air or a MacBook Pro. That's the difference there; is an Intel chip sort of general-purpose, that anybody could use to make a computer, whereas M1 is the beginning of a long future of chips that Apple will make to make amazing machines that only Apple can make.

**Ken Case:** Yeah, I think you're absolutely right. And it happens at several different layers in the silicon. Apple has built this processor now that handles things like retain and release much more quickly than an Intel processor can. And part of the reason they can do this is because they know what software is being built for their hardware; they can measure it, they can track it, and then they can say "Well, let's make that thing which is taking some percentage of every app's time - let's just optimize that as much as we can, because we know it'll benefit every customer and every app." So they can make that sort of optimization directly there, in the hardware they control. So that's certainly one place where we see a big benefit.

And Intel wouldn't necessarily do that, because they're not optimizing for Objective-C and Swift, they're optimizing for whatever workloads they're optimizing for; or maybe they're not optimizing for specific workloads.

**Jerod Santo:** Right, they're generalizing. Yeah.

**Ken Case:** The general thing. And then of course the system on a chip that we have here is not just about the central cores and the instruction sets, but it's also about what the memory management looks like, and having the unified memory which lets you share memory between the video core and the CPU, and so on. It means that you save a lot of time that was previously going to copying that memory around into its own local space... And that's another place that, because Apple is designing the whole system, top to bottom, they can make some huge performance improvements.

**Adam Stacoviak:** A lot of the software you create too is very visual. You've got a lot of graphical-type software in terms of animations and movement, and creating lists, and combining lists, and unfurling, and graffling (to use the product name in my adjectives). I can imagine that there's probably some limitations... What kind of limitations did you particularly hit when building for Intel? Were they noticeable, or is it sort of hindsight now because you have an M1-powered Mac and you understand the lack of limitations now?

Did you physically hit limitations in the Intel world, that you're like "Man, I just wish we can get past this..."?

**Ken Case:** Well, to be clear, we were actually pretty excited to move to the Intel world in the first place, because Intel at that time had the leading performance.

**Jerod Santo:** Right.

**Adam Stacoviak:** Sure.

**Ken Case:** So when we did the transition from PowerPC to Intel - yes, that system had to coordinate things from a lot more vendors and so on than when Apple was building PowerPC. Even the PowerPC was not just Apple, it was Apple and IBM, and there were compromises along the whole way. I feel like yes, in retrospect, it's easier now to see those compromises as the compromises they were... And what we see now is really an incredible system that is designed for the workload that it's trying to do.

\[55:43\] It's a lot more like - to go back to the '80s again - the Atari 800, which had a tiny 6502 CPU in it, but you could play some amazing games on it because it also had a sound processor that was dedicated just to spitting out certain types of sounds, and it had a graphics processor, an antique chip, and another one that was a raster processor... All of this system was designed to coordinate together to give you something that was very advanced, compared to other things that were just using the same processor, that same 6502.

What we see now with Apple Silicon is a similar transition, where having these different things working together, from the GPU units to the machine learning units, the high-efficiency cores, both sets of cores - those that perform strongly and those that use less energy - you can really build an incredible system, that is more than the sum of its parts.

**Break:** \[56:53\]

**Jerod Santo:** So take us back to when you had it all ready to go. You had the Xcode software tooling, you had it rebuilt for ARM and for Apple silicon, and you were waiting for the hardware at that point... You still aren't sure, "Is this gonna be a step improvement? Are we gonna see marginal improvements? Are we gonna see massive improvements?" Then you finally get some hardware, and you can actually run all your Omni suite of tools on Apple silicon.

In your blog post you talk about silky smooth, and you can drag things... Was it noticeably different? Two machines, side by side... Maybe the previous generation MacBook Pro 13-inch, and then this one... Is it noticeably different, or is it just like -- I know it's noticeably different, but is it massively different?

**Ken Case:** \[laughs\] So when I first got the DTK, one of the instructions that Apple gave developers was not to benchmark the thing. So I intentionally was trying not to pay very much attention to what that performance was like... And we get to the end of the process, and Apple contacts me and asks how things are going, and then they ask me "So what do you think of the performance?" and I'm like "Well, you know, I haven't been paying attention to that..." \[laughs\] And that was really when I started thinking about "Well, how is this performance?" "Is it okay for me to measure it?" Like, "Sure, sure. Try it out." That's when I started seeing that the time to render graphics to the screen was so much faster than what we were used to on Intel-based Macs.

**Jerod Santo:** So that first note was like torture, right? It was like, here, put a kid in the candy store, and say "By the way, don't look at any of the candy, and surely don't touch it."

**Ken Case:** \[laughs\]

**Jerod Santo:** It's like, "Here's some brand new Apple silicon hardware, but hey, don't see how fast it runs, because..."

**Ken Case:** Yeah... \[laughter\]

**Jerod Santo:** That must have been like "Come on, that's what I'm here for."

**Ken Case:** \[01:00:10.07\] Now, I have to say - I've just got my first M1-powered Macs, for real; not the DTK stuff over the summer, but the M1-powered Macs arrived yesterday... And so I, of course, set them up, did some timing tests, and they're of course much faster than the DTK was.

**Jerod Santo:** Wow.

**Ken Case:** The DTK was already silky smooth and feeling great, and now we have something that's even better. So what I'm finding -- one of our apps takes about ten minutes to build on an Intel MacBook Pro; the latest one that you could get, maxed out with 32 GB of RAM, and so on. And when I pulled the M1 Air and I tried doing the same build, it took five minutes and fifty seconds.

**Jerod Santo:** On the Air, not the Pro.

**Ken Case:** Right, on the Air. The Air was almost twice as fast. And the Mini was even faster than that; it was five minutes and forty-four seconds. And it was consistently within five minutes and thirty-six, five minutes and thirty-four... I ran each test three times, just to see how things are going. And the M1 Air actually gets a little bit slower because it gets hot, and then it has to slow itself down to stay within \[unintelligible 01:01:24.26\]

**Jerod Santo:** Right, to maintain temperature...

**Ken Case:** ...since it doesn't have any fans in it... But it's amazing just how fast these things are. This morning I actually told our team "Yes, let's get one for each employee." \[laughs\]

**Jerod Santo:** Nice.

**Ken Case:** There's just never gonna be a better time to jump into this.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah, I agree. I've been seeing these benchmarks like that, and it's interesting to hear that the MacBook Air, which -- and just to preface this and sort of set the stage... I'm sure almost everyone listening to this has at least heard some of this, but - the M1, as it's been said, is gonna be the worst of this new, good world, so to speak. And then the MacBook Air is the most efficient in terms of power consumption; not so much in terms of performance, but it's still very capable. And so to see it cut that build time in half, with no fan, and you probably didn't burn your legs or burn your desk in the process, is pretty amazing.

**Ken Case:** And I've gotta tell you, we then ran the test on a -- I don't know whether Apple \[unintelligible 01:02:25.11\] on a Mac Pro, the biggest one that you can get...

**Adam Stacoviak:** Oh, boy...

**Ken Case:** ...the $8,000 machine.

**Jerod Santo:** Right.

**Ken Case:** Sorry, we don't have the biggest one that you can get. We have the one that has 16 cores.

**Jerod Santo:** Okay. Still pretty big.

**Ken Case:** It's still pretty big, pretty beefy. And it was not as fast as the M1-based MacBook Air in terms of finishing building our app.

**Jerod Santo:** Wow.

**Adam Stacoviak:** Well, there's two sides to that then. Apple can be excited, or they could be like "Aaahhh..."

**Ken Case:** \[laughs\]

**Adam Stacoviak:** I think they would err on the side of excitement, because it's their own...

**Ken Case:** Oh, yeah.

**Jerod Santo:** Well, it's the future.

**Adam Stacoviak:** Yeah. But it might be bad for today's sales, unfortunately, so... We can't help that.

**Ken Case:** It's incredible. I can't wait to see what the Mac Pro looks like with Apple silicon processors in it.

**Jerod Santo:** Yeah, what's your daily driver? What's your work machine? Is it a Pro, or you go for the laptop yourself?

**Ken Case:** I use a Mini, actually...

**Jerod Santo:** Oh, do you?

**Ken Case:** so now I'm using the M1 mini.

**Jerod Santo:** So you already upgraded. I was gonna ask you, what are you waiting for? The iMac Pro, the Mac Pro... Which one are they gonna upgrade next? But you've already said you're on the M1 world.

**Ken Case:** Yeah. Well, I really have on my desk here five Minis, so... \[laughter\] I don't really have room for five pros.

**Jerod Santo:** You've got a cluster of Minis on your desk. I love it.

**Adam Stacoviak:** What has the road been like to the native world? Some might be using Rosetta 2, some might be stuck in a different world... You're fully native; you're a native universal app, as it said... What's that road been like for you? I know you mentioned in terms of having the TDK and \[unintelligible 01:03:58.13\] but more so the fact that for the last decade we've had Apple silicon just in different platforms - iOS, iPad OS etc. What's that transition been like for you, the road to that?

**Ken Case:** \[01:04:12.09\] So looking through our codebase, we don't really do a lot that is architecture-specific. We try to avoid it. One of the things about having moved from one architecture to another over the decades is that we started to learn things like "Oh, let's be careful about which order are our bytes in. Are they big-endian core or are they little-endian code? That kind of stuff.

**Jerod Santo:** Right.

**Ken Case:** Or if we have something that does need to depend on that, like network communications, then to be sure to use API that will say "Okay, let's host a network for this particular size", or whatever.

So a lot of those changes we had already made going from PowerPC to Intel. Some of the things that we did have to design for and rebuild on Apple silicon, and some of this we actually had to do this summer, because we hadn't done it on the iPhone or iPad... It had to do with things like crash catching. We have built a crash-catcher into our apps, that will report issues when our apps crash... Much like what Apple has built-in now, but we've built it before Apple's existed.

So it will catch a crash, offer to send email to use about it, and then the user can enter their details. The email goes to us and we can then categorize the crashes and reply to them directly, and so on. So we wanted to get that system ported over to running on Apple silicon as well. That work took a little bit longer. I would say that's more like -- that was about a day or so. \[laughs\]

**Jerod Santo:** Not too bad.

**Ken Case:** So it was not a big deal, because again, we had learned the ARM instruction set by now.

**Jerod Santo:** Are you mostly Objective-C, or have you been adopting Swift? What is it all made of? Because it's been around for so long... I'm sure a lot of it is legacy, but...

**Ken Case:** Yeah, so a lot of the older code is, of course, Objective-C. And Objective-C mixed in with just plain C... That's one of the beautiful things about Objective-C - you can have plain C in it, or even dive down into assembly when you needed to, for performance reasons... But lately, over the last five years, maybe 60% to 70% of our new code has been written in Swift... And we've also taken some of the old Objective-C code and rewritten it in Swift where that made sense.

So on a day-to-day basis, I feel like we're working with Swift a lot more than we're working with Objective-C... But in terms of our codebase, where we have 27 years' worth of Objective-C code laying around, it might be still more like 60% Objective-C, at a guess.

**Jerod Santo:** And you mentioned you're adopting some SwiftUI... Can you tell us about that?

**Ken Case:** Yeah. I don't know how much you know about SwiftUI, how much background I should give necessarily... SwiftUI is designed to be cross-platform. It's kind of based around a reactive model similar to React in the web programming world. And rather than you describe what you're trying to do, more like you would describe for a web page, what HTML would do... Instead of saying how to do it. So you're saying "Here's the view, and I have some text in it, and I want this text to be aligned with this other text", or whatever else.

So it's kind of a different programming model, and it doesn't always work for everything... But for the things where it does work, it gives you a lot of flexibility around -- you can switch between platforms and have the same code run everywhere.

So we've started using that now in our UI code as much as possible. Again, there are some problems that it's not ideal for, and for those we can still dive back down to the traditional \[unintelligible 01:07:53.23\] or UIkit models of drawing views to the screen, or working with user input. But for things like the widgets that we've just released in OmniFocus for iOS 14 - all of that code is written in SwiftUI. In fact, it has to be; that's the way widgets are implemented. And once we finished it on iOS, we were like "Okay, let's see about bringing these widgets to Mac in Big Sur." We had a beta ready the next day with those new widgets in them.

**Jerod Santo:** \[01:08:25.00\] Nice.

**Ken Case:** And it turns out we really didn't have to tweak them very much at all. They were ready to go. So that's been an encouraging sign, and we've been rebuilding things like the outline in OmniFocus, the outline of tasks, using SwiftUI, so that we can have a real live editing outline instead of a model where you select something and then have an inspector where you're doing the editing separately.

At the moment, we've been sort of redesigning and rebuilding OmniFocus and OmniGraffle using these new SwiftUI components, and looking forward to having much more powerful versions of our apps on the iPad and iPhone as a result.

**Jerod Santo:** Very cool stuff. So if you look down the road a bit, where do you think this goes? You're in the developer scene of Mac software, and you've been doing this a long time, and you see "Okay, M1..." We can all at least project and say there's probably gonna be an M2. But what does the future look like in your eyes of this M-powered Macintosh world, the Macs, and how does that play into OmniGroup's software, and really the future of your business? I'm sure they're tightly aligned. So it looks bright, but I'm curious what your perspective is on these things.

**Ken Case:** Sure. So in the '90s we had gotten pretty spoiled by what's referred to as Moore's Law... Where every year, everything was getting faster. Every two years speeds were tending to double. It was about the rate that we were going.

**Jerod Santo:** Right.

**Ken Case:** And when we looked at our development cycle, a lot of the products that we build, like OmniGraffle, a major version of that might take about two years to build. So when we were starting that process, we were expecting that the hardware that we would end up shipping on would be twice as fast as where we were starting. And obviously, we have to be careful; we wanna run on existing shipping hardware as well, but there are things that you can plan to do that you know are possible on faster hardware - better animations, and so on. Or adopting some of the stuff that you've mentioned earlier about our look and feel matching the platform really well. That might not make sense if you thought you were stuck on the same hardware that you added that day. \[laughter\]

And then of course in the 2000's and 2010's we had petered out. We ran into limitations in the hardware, and we started trying to solve that problem by scaling out the processors to more and more cores. We didn't have single cores getting faster, at least not nearly at the same pace, but we tried to \[unintelligible 01:11:03.15\] that could work well with multiple cores.

Well, looking ahead, I'm looking forward to the return of having cores getting faster and faster, individual cores. I'm looking forward to knowing that we can build some things that maybe today's hardware isn't capable of, but next year's will be.

**Jerod Santo:** I like that. Bring Moore's Law back. Bring it back to us. \[laughter\]

**Ken Case:** I mean, I have to think at some point we'll run into another limit, but it's nice to have those limits relaxed for a bit. I didn't expect that we would get processors that are as fast as these are right now. It's amazing.

**Adam Stacoviak:** \[01:11:48.03\] Yeah. That's actually my next question, but you sort of answered it... Your excitement level. Having been, since the Next years, forever essentially, in terms of Apple's history, how excited you are for the speed at which this CPU is. This system on a chip for the new Mac. I'm blown away by how fast they are. You heard the benchmarks, you heard the mentions during the keynotes, but seeing is believing. We said that with Tim even, that seeing is gonna be believing in terms of actually having them in our hands, testing them out. I don't actually own one yet, so I haven't tested it, but I'm basing it on people I know and trust in the industry who do this day-to-day.

**Ken Case:** Right.

**Adam Stacoviak:** This has gotta be blowing your way in terms of like its speed. It's so fast.

**Ken Case:** Oh, absolutely. I was skeptical, too... I saw the same video from Rene Ritchie that you've mentioned earlier.

**Adam Stacoviak:** Yeah.

**Ken Case:** And like - okay, it works well for those benchmarks, that's great. I wonder how it does in Xcode for real. Let's get down to it. So that's why I ran those tests last night. I'm like "Really? Okay, I've gotta try this three times, and not just once, and make sure it's not a fluke." And yeah, I'm blown away by how impressive these processors are already... And as you noted, this is the slowest set of Mac Apple silicon processors that we're ever going to get. This is the first generation, so I'm looking forward to seeing what happens with-- say, if there's an M1x, or an M1z... And then of course, M2, M3...

**Jerod Santo:** Right.

**Adam Stacoviak:** Sure.

**Ken Case:** ...what does the next decade look like. Certainly the last decade \[unintelligible 01:13:23.05\] a proven history that's been amazing with the iPad performance and iPhone performance.

**Adam Stacoviak:** What do you think you'll do with the time you get back?

**Ken Case:** \[laughs\] Well, I have never run out of things to do with the time I get back... \[laughter\]

**Jerod Santo:** Recompile?

**Ken Case:** I look forward to just moving faster on the stuff we're building.

**Jerod Santo:** Yeah. Well, tell the folks a little bit more about your tools... Maybe even what's coming down on the pipeline for OmniGroup, your suite of tools. I'm sure we have listeners out there who are using OmniTools, we have other ones that probably haven't heard of OmniGroup, or maybe they're Mac users but they're more casual, they haven't seen the productivity suite... What's out there and what's next for Omni?

**Ken Case:** Where our focus is right now is the thing I've just mentioned, where we're looking at redesigning and rebuilding our apps using the latest technology, instead of some of the code that we've written that's currently in OmniGraffle, that's 20 years old now. So I'm looking forward to seeing what happens as we rebuild some of this in SwiftUI, or just Swift in general. We have new versions of OmniFocus, OmniGraffle, that are -- well, I don't think I'm ready to pre-announce where we're going with some of this stuff... \[laughter\]

**Jerod Santo:** Well, I couldn't help but try...

**Adam Stacoviak:** Just give us a peek over the horizon; as much as you can, but a peek. Whatever the peek might be for you.

**Ken Case:** What I can say - I already mentioned that we're redoing the outline on the iPad.

**Adam Stacoviak:** Sure.

**Jerod Santo:** Right, right.

**Ken Case:** Being able to add it in places -- a feature that will bring that experience to be much more like what the Mac experience has been like all along. I've also mentioned (I believe) in our roadmaps, for several years now, that we're working on collaboration as a feature. So making it easier for people to edit things together in a live way.

**Adam Stacoviak:** Well, they're certainly giving you a reason to get rid of legacy code, which is often an angst. Do you wanna get rid of it and delete it? Well, it's served its purpose, but...

**Jerod Santo:** Yeah, rewrite it.

**Adam Stacoviak:** ...if it ages out eventually, or new hardware/new software makes it somewhat obsolete or better... Maybe not obsolete where it doesn't work, but more like it'd be better if you did. It would certainly give you a reason to rewrite legacy stuff.

**Ken Case:** Yeah. Just going through and rebuilding all of the inspectors, for example. That's one of the projects that we're working on right now. And it gives us the opportunity to rethink some of the decision we've made a decade ago. And based on the experience that we've had since then, and the feedback that we've had from customers, we can think of much better ways to build it this time. So...

**Adam Stacoviak:** Yeah, very cool. Ken, is there anything we haven't asked you that you wanna make sure we mention before we let you go? Something that we didn't ask you that you're like "Man, he hasn't asked me about that..."

**Ken Case:** No, no. I really appreciate your taking the time to talk with me. It was a great conversation.

**Adam Stacoviak:** Yeah. We wanted a Mac app developer's perspective on what Apple has done, and we appreciate you sharing that time to do it for us. Thank you.

**Ken Case:** Thank you.
