**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about everything that happens after you git push. I'm your host, Justin Garrison, and with me, as always, is Autumn Nash.

**Autumn Nash:** Hi!

**Justin Garrison:** That was a very quick hi.

**Autumn Nash:** I always sound like a bird... I'm always like "I swear I'm not this squeaky in real life."

**Justin Garrison:** On today's show we have Gina, who is the maintainer and creator of the OctoPrint project, which was not only an awesome time talking to her, and just learning more about how it started, but as a user of OctoPrint back in the day, with my printers, it was really fun just to see how all the things that she has to do for this project, like the testing frameworks, how to roll out updates, and all of that was really cool, just to learn so much about everything she's done over the last decade of managing this project.

**Autumn Nash:** She was one of the most fun guests, because just everything she said was "I had this problem, and then this is how I solved it." She's an amazing problem solver. Gina is legit, guys. And the fact that she's one of the few people to really make it really successfully at being an open source maintainer that is crowdfunded... Like, dude, she deserves it. She deserves so much.

**Justin Garrison:** And not just for a little while. This is for 10 years of a project, which is why it's cool.

**Autumn Nash:** That's what I'm saying. Sustainably being the only maintainer for an open source project that is that widely used is amazing.

**Justin Garrison:** Especially one that's not corporate-sponsored. She mentioned most of her sponsorships come from the community, not from companies. So if you look at something like curl, or these other projects that are used by developers heavily, it makes sense that a company might sponsor them a little bit more, to say "Hey, you save our developers a bunch of time. We're gonna give you some money." But in this case, it's an open source, community-driven project that's mainly for hobbyists. I mean, some people do sell stuff, but it's not big corporations. They have much larger 3D printers, that cost a lot more money. And in this case, it's like, I have a 3D printer. I've had a 3D printer, or at least access to a 3D printer for about 10 years now. And off and on, I'm like "Hey, do I want OctoPrint? Is there another management tool?", whatever it is, but it's always been a hobby for me. I don't make money from it. It's just like another way to spend time.

**Autumn Nash:** That's what I'm saying, it's almost one of the most pure versions of what open source maintaining and crowdfunding, an example of how it can be done right.

**Justin Garrison:** So let's go ahead and jump into the interview, and I know for the outro Autumn's making a game for me, so stick around and we will see how that goes.

**Break**: \[00:03:33.19\]

**Justin Garrison:** Thank you so much, Gina Häußge, for joining us on the show today. Can you tell us about yourself and how you got started with creating OctoPrint?

**Gina Häußge:** Yeah, so you already said my name, but I'm also known as foosel around the world, and especially around the net... So if anyone has come across that name, then yeah, that's me. Hi. And yeah - well, OctoPrint. That happened basically when I got myself a 3D printer back in late 2012, and found myself in the position that it was sitting here next to me in my home office, producing noise, producing fumes, and annoying the hell out of me, because I just wanted to not sit next to it while it was doing stuff, but it took hours to finish whatever it was doing... And so I figured there must be some way to just put it in another room, but still monitor it from afar, through Wi-Fi and such... And I figured there's probably something out there that does this. It turns out nope, there wasn't something like this. And I happened to be a software engineer, so that became a bit of my vacation project over Christmas, pretty much... And I threw it on GitHub after that in January, and thought I was done. Back then it was just a really, really basic thing... Monitoring temperature, already having this feedback loop where you also had some webcam implementation and all of that, to be able to see what your 3D printer was doing while it was running through your jobs, and some basic file management and such... But definitely way smaller a project than it is now, over 10 years later.

I threw it on GitHub up, and within a week or so the emails started coming in, and the feature requests started coming in. Then it took over my life, and now I've been doing it full-time for almost 10 years, and crowdfunded for -- wait, we do have 2024 now, so that must be eight years, I think... Yeah, eight years full-time crowdfunded work and an open source project.

**Justin Garrison:** That's awesome. That's one of those success stories of open source and crowdfunding. That's not a common thing, where it's like "Oh, one person started a project, and now you can actually make your living off of this hobby, or originally hobby sort of thing." That's really awesome just to hear that. The community around it has come together to be able to support such a cool project.

**Gina Häußge:** Yeah, and it's always something that I can talk about at parties, even if people don't know what 3D printing is, or what open source is. If I tell them people give me money even though they don't have to, then I always get interest from people around me. \[laughs\]

**Justin Garrison:** 2012... What printer was even available 2012? That's like the CNC cupcake machine.

**Gina Häußge:** In my case it was an UltiMaker that was - yeah, a big, wooden box. No heatbed...

**Justin Garrison:** Yeah, no one even knew what to do there.

**Gina Häußge:** Very slow, and very weird... And the filament was still thicker... Like, it printed with the three-millimeter stuff, which actually was 2.85 millimeters, but still, yeah, almost twice the diameter of what we use these days, mostly... So 1.751.

**Justin Garrison:** It's like melting crayons.

**Gina Häußge:** Yeah. \[laughter\] It was weird when I got my first roll of filament, of 1.75-millimeter filament in my hands; it felt so weird, and not good, and like it would break just by looking at it and such, because I was just used to all of this 2.85. And then I think last year or so I threw out all of the old 2.85 that I still had, and look at it, and it looked so heavy, and strong, and "What? I was able to print with that? No way." So yeah, things really changed.

**Justin Garrison:** So in 10 years of OctoPrint, how many printers do you support? It seems like it grows every time I check it out?

**Gina Häußge:** Yeah, so the thing is that most printers out there actually run on open source firmware, and have more or less agreed on a communication protocol. I say more or less, because a lot of the printer vendors actually adjust the firmware, often without really knowing what they are doing, with the result that they break the firmware in the process, and then things get really tricky for the users, because then usually they do not know how to fix it, and... Yeah, in the end, that is always when I'm very happy that I also built a plugin system into OctoPrint, because that allows us to work around these things, so that people can just -- if they have a printer like that, and also happen to know how to code or can find someone who can see the issue and work around it, or maybe if it's a large enough community, then maybe I can also do that... Just build a little plugin that pretty much translates from the broken firmware into something that is more standard-conform.

\[00:12:07.19\] And that way - yeah, pretty much everything that is old out there is supported by OctoPrint, but these days it's a bit more tricky, because a whole bunch of printers are now currently coming out that have a full-blown host system... So OctoPrint is a so-called printhouse, and a lot of printers now come with something similar fully blown on board. So they only now have a Wi-Fi interface, they often have an integrated full graphical display and such, and it is really tricky now to access these and use them with something that the vendor did not plan on... Which is a bit sad.

**Autumn Nash:** That's how my son's printer -- well, he has a toy box, so it's meant for little kids to use with their iPads, so in a way it kind of monitors, but it kind of makes it limited what you can do with it, because it comes with its own software, and everything.

**Justin Garrison:** Yeah, I switched off from Ender Pro to a Bambu. And the Bambu is pretty much self-contained...

**Gina Häußge:** Closed source?

**Justin Garrison:** Yeah, closed source... And I had such a hard time, because I had so many printers in the past that I always wanted them to be open source, and I wanted them to work certain ways, and I always spent more time fiddling with them than using them in printing... And so I saw recommendations for the Bamboo and I'm like "I'm gonna try it. I'm gonna go with this one. I know it's closed source, they have a whole ecosystem of stuff..." And I think the problem is going to be when things break, and I can't fix a problem, or I can't troubleshoot and find a community around "Hey, how does this work?" It's all just gonna be like "Oh, well, here's a janky fix we have, that shows you how to do something."

**Gina Häußge:** There's good news for you, though. Someone wrote a plugin that allows Bamboo printers to work with OctoPrint.

**Justin Garrison:** Really?

**Autumn Nash:** Oh, that's awesome!

**Gina Häußge:** Really.

**Autumn Nash:** I really want a Bamboo. So that's why I'm just like...

**Gina Häußge:** I'm not sure if it works with all of the models and such, but it's THE plugin developer, basically, on OctoPrint. He's the one with the many plugins.

**Autumn Nash:** I keep watching everyone's videos on Twitter and like TikTok, and I want a Bamboo so bad, but I'm like -- I don't want to get locked into the software. Yeah.

**Gina Häußge:** I'm not touching that with a 10-foot pole. I saw one in-person with a buddy, and mechanically, I was very, very impressed, but then also this news hit recently - well, not recently; that's almost been a year now also, I think... Where they had this funny security issue where some printers suddenly fetched the wrong stuff from the cloud, and started printing in the middle of the night some models from strangers... And that is just something --

**Autumn Nash:** I did not hear about that.

**Gina Häußge:** Yeah, and if stuff like this happens, then this is a big, big no for me. And also the part with all of what 3D printing is these days, what 3D printing has come to over the last 10 years - that was done on the shoulder of open source. And now all of these companies - it's not just Bamboo, it's a bunch of others as well - are just rolling in and trying to lock everything down, and trying to lock everything in, and creating their own little gardens... And it's just not the way that I want to see all of this happening. I'm a bit afraid that we will lose all of the open access that we have now if stuff continues like that.

**Autumn Nash:** I think open source as a whole, like databases, everything has gotten really weird with where do we go from here, with having companies in open source stuff...

**Justin Garrison:** License changes...

**Autumn Nash:** Yeah. It's been very interesting.

**Justin Garrison:** Now, back to OctoPrint for a bit... I saw you had a release last week. What does that release process look like? Because you have this huge system that supports all of these printers, and you have these plugins, and all of these features... How do you actually go about releasing and testing that, to say like "This is a new release of OctoPrint?"

**Gina Häußge:** \[00:15:51.11\] So it should be obvious that it's pretty much impossible to test every possible printer, firmware, plugin, operation system, starting state of software situation. So what I do before I actually roll out the full release is there goes a long, long phase of release candidates. And OctoPrint has a release branch system built in, so if you feel fine with testing stuff that is not necessarily fully stable yet, then you can just switch over to another release branch, and then you will get release candidates whenever I push those out. And they actually get the same procedure that I do for every single release, and I will go quickly over it later as well.

But the idea behind that is that if I have something like 1,000-2,000 people out there testing a release candidate and putting it through several years of print duration over the course of the release candidate phase, and then I can be pretty sure that a lot of these combinations that I would never be able to test have been tested. And yeah, it usually takes something like three to four release candidates until no more bugs come in... And at that point, then I declare this stable.

And of course, after I've pushed out a stable release -- so the current stable version is 1.10, but we are now already at one point 1.10.1. So there are bug fix releases that I also push out. Those do not go through a full release candidate phase, again, but they only get bug fixes and maybe small minor improvements of existing functionality. They do not get new features, they do not get big changes... They obviously also get security fixes, stuff like that, but I try to really limit what goes in there... And if it feels too risky, then it goes into the next stable release that will actually get the full release candidate phase again.

And what I do for every single release is -- so OctoPrint can basically run anywhere where you can run Python. But most people run it on a Raspberry Pi, so that is also what I concentrate on for testing. And there is this dedicated image that someone else is maintaining, Guy Sheffer, for OctoPrint, which is called OctoPi. And a lot of people confuse the image with the software and the software with the image, which also causes a lot of complications in support... But anyhow, so OctoPi is the most common environment that OctoPrint will be installed on out there.

So what I have here is I built myself a little test rig that has three Raspberry Pi threes, which is the current basic option that I suggest... So get the three, because that basically is the best thing that you can get, the lowest supported version. And if you want something with more power, then of course you can get something else, but the three is like the base version that I look at.

So I have three Raspberry Pi threes there, and all of these have a little card adapter in there that can be switched through USB, either to act as a mass storage device through a host, on the one end, or as an SD card on the other hand. So that is slotted into the SD card slot of each of the Raspberry Pi's, and all of these then go into a USB hub to a fourth Raspberry Pi, a Raspberry Pi 4, actually, which I call the flash host. And that thing also has control over the little powered USB hub, through which I power the three Raspberry Pi's. And now I can individually power them on and off, and I can also individually unmount and mount their SD cards, and flash them, without having to physically release the SD card, and push it into a flashing stick... That is what I did until 2020, and it was driving me nuts.

**Justin Garrison:** Well that's what I've been doing. No, this sounds fascinating. I don't even know you could have like an SD card on one hand, and it's like connected to the USB on the other side, and you can switch it back and forth.

**Gina Häußge:** Yeah, one of these things costs me $100, but they exist, and... Yeah, a little --

**Autumn Nash:** \[00:20:02.02\] Hey, sometimes that $100 is worth it.

**Justin Garrison:** Yeah. It saves how much time...?

**Gina Häußge:** Yeah, I mean, I have three. That was really worth the money that I spent on that, because what I do on every release is basically I flesh a whole bunch of starting versions on the Raspberry Pi's. Like OctoPi version x with OctoPrint version y. And then I look if I can upgrade to the release to be from that version, through all of the regular update mechanism. And for that, of course, I need not only flash the SD card, but also provision it with the Wi-Fi credentials, and then SSH into that thing, and do all of that... And all of this is automated now, thanks to this little test rig that I built. So I just tell it "flash device a to this version of OctoPi, make sure OctoPrint is at that version, and also switch it to this release branch, and then please also fire up the browser when it's done with that."

And so before every release, I have this huge checklist in my tooling, and go through all that... And of course, the usual stuff, like create new tags, create a change log, make sure the translation is up to date, the German one - this is the only one that I maintain. Everything else needs to be supplied by people who actually speak the language fluently that they are targeting. Also add \[unintelligible 00:21:18.13\] names, and all of that.

And then there's also always a whole test matrix that I write down in JSON, that gets rendered into a little table, and that then tells me exactly what command line I have to enter into my scripting, so that all of this will be done. Then I wait, then a browser window pops up, then I click "Update", then I look if everything works... And once I've gone through all of these, usually something between 7 to 10 test scenarios, which used to take a whole day, and now takes less than an hour, if I'm lucky...

**Justin Garrison:** Wow. That's cool.

**Autumn Nash:** Your automation is very impressive.

**Gina Häußge:** It saves me so much time. Every single release, I'm sitting here and I have this huge smile, because that saved me so much time. Yeah, and I also have a blog post about this test rig...

**Justin Garrison:** Does it have pictures?

**Gina Häußge:** It has pictures.

**Justin Garrison:** I need to find that, so we can add it.

**Gina Häußge:** I can drop you the link, and you can put it in the show notes.

**Justin Garrison:** Yeah.

**Gina Häußge:** And what happens then is at some point I'm through all of this, and then I'm happy, and stuff, and then I do the regular release thing. So I just click on Release on the GitHub release, I have already filled in the change log on all of that... And what now happens is a whole workflow runs through GitHub Actions, which first of all runs the whole test suite against everything, the unit tests are done, the end-to-end tests are done... And if all of this is green, and stuff is actually even released on PyPI and such as well, it triggers the test rig again. Because what it will do now is it will automatically build an updated image with the new OctoPrint version, so a new OctoPi version, with the new OctoPrint version. All of that will happen in GitHub Actions. And then when this image is built, then the flesh host in my network here at home on my desk will be triggered to download this image, fire it against the Pi, flash it, run the end-to-end tests against it, and if that is green, I get a little an email in my inbox that says "Hey, this image tested green. Do you want to release it?" And if I then click "Yes", then it will be released to the wild basically.

**Autumn Nash:** This is like the software engineer's dream. You've found something that you're interested in. You've built it over like Christmas break, and then you solved this awesome problem, and then you automated it and solved all these problems to make it efficient. It's so cool. I'm so impressed.

**Justin Garrison:** How many core maintainers are on OctaPrint? Is it just you?

**Gina Häußge:** It's just me.

**Justin Garrison:** What software were you writing before OctoPrint?

**Gina Häußge:** Enterprise Java stuff?

**Justin Garrison:** There you go. So you went Java to Python, basically.

**Gina Häußge:** \[00:24:00.26\] Yeah. Python was self-taught. I started when I was -- yeah, my career was a bit weird. I started actually working at university because I wanted to do a PhD... And I worked at university -- so in Germany it's like you have some work, either you are teaching or you are doing something administration, and at the same time, you're working towards your PhD. And I ended up in the administration part. So I was administering the whole department's servers, all of them on really old Unix; not Linux, Unix machines. The main server was older than me. And not really finding much time for my PhD, but automating a lot of stuff back then, even already for the administrative tasks, with Python.

And then at some point I decided "Yeah, okay, so the PhD thing isn't happening. I'm not getting really enough time to work on that." And to be honest, I was more drawn to doing something, like really with my hands, and not just writing stuff, and having students do the stuff with their hands. So I ended up as a software engineer in the industry, and ended up writing a bunch of software like in Java, IPTV-related actually for a big telecommunication company... And that went on for half a decade, and then I got myself a 3D printer, and the rest is history. So...

**Autumn Nash:** That's so cool.

**Justin Garrison:** And you said you've been crowdfunded for eight years now...

**Gina Häußge:** Yeah.

**Justin Garrison:** So eight years ago you had to make this decision to leave your job and go do --

**Gina Häußge:** That decision was forced on me, because the thing was 10 years ago already I left this Java job, because I was hired by a Spanish company who also was vendor of 3D printers back then. They found me, they found OctoPrint, they liked what I was doing, and they hired me full-time to work on that back in 2014. But then in 2016, they ran out of money, and have since also gone under completely, as far as I know... So they had to let me go. And now I found myself in the position that I had been doing OctoPrint for almost two years, at this point, full-time. Like, it had grown a lot the amount of work that it needed, maintenance work, community and all of that had grown... But yeah, I was no longer getting paid for it. So it was the decision that I had to do, either try to do it as a side project again, which was an absolute no at this point already, because when I was still doing it as a side project, the first two or so years, that was already bad for my health... Drop it all together, which was something that I really did not want to do, and go back to a regular, normal nine-to-five kind of job, or do something that I never thought I would ever do, and try to just take the step into the darkness, where I did not know at all what was going to happen and try to do this crowdfunded, and basically self employed, and... Yeah, I figured if I would not at least try that, I would probably kick myself for the rest of my life, and asking myself what could have been... So I jumped into the cold water, and did it. And so far, it's been working.

**Justin Garrison:** I do find it interesting that the commercialized spin wasn't even an option for you there. You could have tried to raise money and say "This is gonna be a product. I'm gonna make a new business out of it", and you have this open core model, sort of like paid plugins, whatever you want to do... So many companies do that. And that's how they get started, because it was a side project, or it was something they were interested in. And for you, it was like "I either abandon it, or I do it all community." And that's awesome.

**Gina Häußge:** \[00:27:47.07\] Yeah. I'm really not that big of a fan of this whole open core thing... And personally, I also felt like I could not really do that, because I forked off of open source software... So the part that talks to your printer was something that I basically took from a slicer, of all things, because that already was talking to -- \[unintelligible 00:28:08.10\] had a communication part that I could just take over... A lot of people had contributed, so going like "Yeah, I'm going to close this down now, and we are only going to keep an open core" - it just feels felt wrong, and to this day feels wrong. And I believe in open source, and I find it a bit weird that it's still news for people out there, that yeah, open source in general should be something that should be funded. We shouldn't have to jump through hoops by selling stuff around it, because what we do with maintaining open source is already a full-time job.

**Justin Garrison:** Now, I don't know if you can go into details, but where does your funding come from? Is that from recurring businesses that say "Hey, we want to pay for you to --"

**Gina Häußge:** No, that's mostly users. I have some business sponsorships, but most of the people are really just -- yeah, your average OctoPrint user, who has one or two or something printers, and just likes what I'm doing, and throws me something between one to five bucks per month. And if you have a whole lot of people who do that, then this matters.

So...

**Justin Garrison:** Do you know how many installs you have, or roughly how many --

**Gina Häußge:** Yeah, so I have anonymous usage tracking built into OctoPrint; all of this also self-built, completely GDPR okay-ish, and only on my own servers, with my own tech stack and all that... And this is completely opt in, however. So if people do not say "Yes, it's okay to track me", then I will never know about the install. But according to that, I have around 150,000 instances out there... And based on some fun installed stats from the Piwheels project, who suddenly saw huge download spikes on the packages they host for Raspberry Pi, whenever I pushed out a new update, I know that the number is likely around 10 times higher.

**Justin Garrison:** Yeah. I was gonna say, 150,000 opted in.

**Gina Häußge:** Yeah.

**Justin Garrison:** That is usually a very small percentage of people that were like "Yes, I will let you get this information." That's awesome.

**Autumn Nash:** Which means it's probably like even more people...

**Justin Garrison:** Well, yeah. So if you estimate ten times more, that's... 1.5 million? I could see that. That's totally not even out of realm.

**Gina Häußge:** The first time that I saw the first numbers come in, after the first release with the anonymous users tracking, I literally hid under my desk, because that was just... I felt so much responsibility in that moment, and it felt so heavy, literally heavy on my shoulders. I just had this -- I just had to hide. So I just sat down under my table, and breathed deeply, and took a minute...

**Autumn Nash:** I hope that your success story -- I hope people hear about it, because that's so cool that you... I feel like you did the moral right thing, that people say that you can't do and still be successful... And you not only have been successful, but just as like an engineer, people are using something that you made; tons of people. And they like it so much that they want to pay you for it. That is so cool, just to see that many people using your stuff.

**Gina Häußge:** Yeah, and I also consider it my life's work. I mean, I don't know if I will do this forever, especially not given the whole open source printer situation that we talked about briefly... Because at some point, I might just get pushed out of the market by a tendency to locking everything down... But yeah, it definitely feels like I have done something that actually has helped people, which is not something that I can say about my previous job, I have to say...

**Justin Garrison:** \[laughs\] Enterprise Java, helping people? I don't know...

**Gina Häußge:** Yeah...

**Justin Garrison:** \[00:31:58.07\] Sorry, Autumn. No shade.

**Autumn Nash:** A lot of stuff runs on Java, okay...?

**Justin Garrison:** A lot of stuff does. It's just, when you mix those two words, of enterprise and Java, I don't have any good memories.

**Gina Häußge:** It's more the enterprise bit also that gets me nervous in hindsight.

**Justin Garrison:** Yes, yes. It's more the enterprise than the Java, for sure.

**Gina Häußge:** The Java itself was okay. I mean, you can also build good software in that, and you could also build performant software in that, and it's not as slow as people always said... But on the other hand, I also have to say that with Python, everything got even faster... Not in the run speed, but in the development speed. So much less overhead, and --

**Justin Garrison:** Well, that's just because your variable names aren't sentenced long. It's just... \[laughs\]

**Gina Häußge:** You didn't see the first kind of Python that I wrote when I was writing Java during the day, and then at night... So a bunch of stuff is still not in snake caps, but in the other one, so...

**Justin Garrison:** Camel case...

**Gina Häußge:** Came case, thank you. Yeah. Because - yeah, I mean, I was a Java developer.

**Autumn Nash:** Going back and forth, I always mess up like the for loops in certain things. You can tell I've gone back and forth too many times...

**Gina Häußge:** I can top that. I mean, OctoPrint pretty much is a web application, and the backend is written in Python, but the frontend is JavaScript... And switching between Python and JavaScript is almost as bad as switching between Python and Java... Because I go back to Python, I start putting semicolons behind every single line, and I go from Python to JavaScript, and I just try to start my blocks with colons instead of braces... It's just annoying.

**Autumn Nash:** It's so funny... There's certain things that you can definitely tell that you've gone back and forth between two languages when you look at yours, and you're like "Damn it, I did it again." \[laughs\]

**Gina Häußge:** Yeah. And it happens daily. Just yesterday, I can't remember what exactly it was, I just remembered that yesterday I was again "No, Gina, this is not Python", when I was editing a JavaScript file...

**Autumn Nash:** I do that all the time.

**Gina Häußge:** It's tricky.

**Justin Garrison:** So where do you want to bring OctoPrint from here? What's the next thing that you would like to do? What is the next sort of big -- it's not just... I mean, more printers are fine... I mean, I still think that you have influenced that standard of communication by having this early project so long that was able to talk to all these printers. You have this plugin system... What's the next thing you want to do? What's the next cool thing that you're like "I would love if OctoPrint could do this"?

**Gina Häußge:** There's a bunch of stuff that actually needs to be done, which boils down more or less to taking care of some tech stack situations, because I'm still on a very old version of all of the stuff that runs the UI... But because of the plugin system, it's really tricky to update that, or to swap that for something new... Because all of the UI of all of the plugins out there would suddenly stop working. And I have spent a lot of thought into how to approach this, and especially how to best get this working, and I'm still in the process of doing this... This is one of the bigger parts that I'm working on.

Also, for the better part of the decade, actually, I've now been also working on a new communication layer, and that is also a very tricky thing to pull off... And I also have had really bad luck with it, because every time that I actually get on it and get it to a point where I'm almost ready to like -- I'm 80% or 90%, something happens.

So the first time I ran into a complete and utter problem with my whole approach, because of some firmware issues out there that I wasn't aware of... So I had to scrap everything and start anew. The second time I lost the job and had to go crowdfunding. The third time I ended up in a breakup after over 15 years of a relationship... The third time - or fourth time, I don't remember - something like COVID happened... So I'm almost too scared now to work on it anymore, but...

**Autumn Nash:** That's a lot.

**Gina Häußge:** \[00:35:57.14\] It's like this huge project that really needs to get done to make everything more modular, and to be able to make it easily adaptable to new developments out there, and to possibly also swap the whole communication stack out to target something else, and serial communication... Like something like network or so. But the only problem is that it is a project in and of itself... I don't know English at this time of the day. And as I already said, I am the only maintainer, so I also have to take care of all the bug fixes, all the security fixes, all the other new features, all of the community management, architecture, stuff...

**Autumn Nash:** How do you push all the developers and different people that are making the plugins to the next version, so you can eventually do an update?

**Gina Häußge:** I deprecate stuff, write big, big nasty warnings into change logs, and hope that someone actually reads them, and that at some point, some versions later remove the deprecated stuff after it was logging warnings and warnings and warnings to the logs for several months... And if stuff then breaks, plugin developers can suddenly react quite fast, I learned.

**Justin Garrison:** Only after it breaks.

**Autumn Nash:** Yeah. Nobody listens to the warnings for like 5 years, 10 years...

**Gina Häußge:** I have this quite nasty situation that -- yeah, Python 2 to Python 3.

**Autumn Nash:** That was such a horrible jump, though. Like, it was so bad.

**Justin Garrison:** Was? It's still going on. \[laughs\]

**Gina Häußge:** And I was right in the middle of it, because all of the plugins out there were Python 2-only. OctoPrint was Python 2-only. And it took a long, long time to get OctoPrint up and running, and that was also thanks to a lot of very, very nice contributors, who helped there, doing a lot of the legwork, and then spending half a year or so ironing out all the bugs that were introduced in the process... Pushing out blog posts, pushing out tools that would help people to move over, marking plugins as Python 2 or Python 3-compatible automatically on the plugin repository basically by looking at the code automatically and detecting if it would compile under Python 3 or not. And it was an absolute nightmare, but somehow we pulled it off. But --

**Autumn Nash:** That sounds exhausting.

**Gina Häußge:** It was exhausting, and 5% of OctoPrint's user base, according to the anonymous usage tracking, is still on Python 2...

**Justin Garrison:** Wow...! \[laughs\]

**Gina Häußge:** And at this point, I just have given up trying to motivate them.

**Justin Garrison:** They'll never die.

**Gina Häußge:** Yeah, I mean, OctoPrint is Python 3-exclusive now, since version 1 point -- oh, God. Six? Five? I have no idea, actually. Something like mid-2020 or so, I can't remember exactly. And there are still people who are left on the Python 2-only version, who I redirected to take their updates from somewhere else just in case there was anything that I still needed to push out, but so far have never done anything, and will now also not do, because those 5%, they can just... Like, if a security issue or something like that shows up, they really should just finally do the jump.

**Justin Garrison:** Yeah, they need to.

**Autumn Nash:** It's like when we try to get people off of Java 8. It's like never dying...

**Gina Häußge:** Yeah.

**Justin Garrison:** Yeah. Old software doesn't die.

**Gina Häußge:** I can't imagine. My knowledge is still stuck on Java 7... \[laughter\]

**Justin Garrison:** You talked about some things you'd want to make changes in the future... Looking back of more than 10 years of building this project, what do you wish you would have done differently, at the beginning?

**Gina Häußge:** I wish I would have done so many architecture decisions differently, that are now biting me in my behind over and over again...

**Justin Garrison:** How do you make sure you -- because a lot of that comes from just learning... Either scaling the projects, and it needs to change over time, or you didn't know how it worked back then, and you just learned a new way of doing it now. How would you go back in time and teach yourself "Oh, you should do it this way instead?" Is there a way?

**Gina Häußge:** \[00:39:48.28\] Do we have a time machine? \[laughter\] Apart from that... I mean, I think most of the stuff, if I just had known any better, so if I had found some more information on some things, then yeah, that would have saved me a lot of work. I mean, some of the problems I actually just managed to iron out with the current release... Because I basically have two web servers situations going on; I have Tornado sitting in there, single-threaded, async... And on that, I have Flask sitting, which is sync. That is really a bad idea; you do not want to mix that up. But in 2012, Gina didn't know any better than that... And now I know.

**Autumn Nash:** Flask talked a big game at that time. It's not even your fault. \[laughter\]

**Gina Häußge:** The good thing is that I've found a solution for that, which means we had huge performance gains in the latest version that I just pushed out now, because now I managed to make the whole connection between the two things async as well, so that they don't block each other anymore... And so the whole webpage loads faster now, and it's way less likely that some third-party plugin can now block the whole server as well... But yeah, these are things that if I had known them back then, if I just better understood the kind of stuff that I was working on... I mean, I didn't know about 3D printing protocols back then, I didn't know about Flask, I didn't know about Flask, I didn't know about Tornado, I didn't know about all of that. I was just like "Okay, this might maybe work, and if I connect this here, and then there, and blah..." And then I added a plugin system on top, and that made everything way more complicated, because now you have an ecosystem you cannot just rip out parts anymore without destroying parts of the ecosystem in the process. And so that is what is now making things way more complicated.

**Autumn Nash:** In your defense though, 3D printing has grown so much in the last decade, and releasing software in general has grown so much... You sound extremely knowledgeable about all of these things, and I don't know if anyone could learn them as well if he weren't just doing it. You know all these things because you built it, and you maintained it, and you had to make those hard decisions. So it seems like you're doing a great job...

**Gina Häußge:** Thank you. \[laughs\] Yeah, I mean, I'm still here, right? So it can't be too bad. And yeah, the things I now know about 3D printing firmware, and especially about the differences between the various variations... Honestly, I wish I didn't know as much, sometimes... There be dragons... \[laughter\]

**Justin Garrison:** The curse of knowledge... Yeah.

**Autumn Nash:** Not just that, but I feel like it's always that struggle of you learned it at like 2am, because of something went wrong...

Because it went sideways, and you had to learn it.

**Gina Häußge:** Oh, that's something, by the way, I also learned... I never do releases after Wednesday anymore... Because it gives me Thursday, and even though it's usually my day off, because I'm on a four-day work week, if push comes to shove, it gives me Friday, and it doesn't ruin my whole weekend. I did a bunch of releases on Fridays, and it cost me one too many weekends.

**Autumn Nash:** Never push to prod on Friday.

**Justin Garrison:** Yeah, that is the real wisdom of this podcast right now. People say like "Don't push on Friday", and you're like "No, don't push after Wednesday." Like, if you're pushing on Thursday or Friday, you're just asking for it.

**Autumn Nash:** That is the perfect bake time to get --

**Justin Garrison:** Someone else to try and then call you. And that is like -- they need a day.

**Autumn Nash:** There's no testing real users wanting to use your software in a way that you never imagined... You obviously do as much testing as you can, but getting real people to try it, the way that you said that you do, like that release where people can try your other branches so they can bake properly...

**Justin Garrison:** I feel like that needs \[unintelligible 00:43:50.25\] It's like "Test with users."

**Autumn Nash:** \[00:43:55.00\] I mean, there's nothing -- like, it is nothing like some real person being like "I wonder what you could do if I put this here..." And you're like "Why would you do that?"

**Justin Garrison:** Or they have some crazy workflow, where you're just like "What?! When you do what?!" Like "Oh, yeah, no, I drop to the web console every time, and I type my commands manually in JavaScript." And you're like...

**Autumn Nash:** They're like "But I want to use the UI, and the CLI, and then do this" and then you're just like "But why? Why would you do that?"

**Gina Häußge:** But you know you have produced some stable software if after a huge new point release -- not point release, a minor release, only such stuff comes in.

**Justin Garrison:** It's only the weird use case.

**Gina Häußge:** And this time I can't say that I managed to do that. I got only really, really weird, really odd stuff.

**Autumn Nash:** That's an achievement.

**Gina Häußge:** Right? I thought so as well.

**Autumn Nash:** Not just that, but the fact that you automated all that by yourself, and you were the main maintainer... You are amazing. Amazing.

**Gina Häußge:** You need to keep in mind, I automated that because I am the only maintainer, so I had more time to do the maintenance. \[laughs\]

**Autumn Nash:** Yeah, but you still had to do the automation... I know it makes your life easier, but sometimes you'll sit there and it takes longer to automate stuff than... I mean, you get it back, obviously, after a while, but...

**Justin Garrison:** Well, not always... I mean, you could spend the whole week automating something that you do once a year, and in this case, you're like "Oh, this went from a day to an hour", and it's a good use of automation.

**Autumn Nash:** Because we've all automated something, and we were like "This is gonna be great", and then it takes longer to automate than it does to do it manually, and you're like "Why? Why did I do this to myself?" Like eight hours in.

**Gina Häußge:** I'm into home automation, so I have this a lot...

**Autumn Nash:** I love that stuff. Me too. But I'm just like, there's certain things that I'm just like "That was such a bad idea." But you'll never know until you do it.

**Gina Häußge:** The good thing is you often still learn something new in the process. So even if it's all for the --

**Autumn Nash:** That's what I'm saying. Just listening to your talk about it, I'm like "Man, your knowledge is just insane." Like, you must just know the ins and outs of so much of this, because of the way that -- and then you're like "And then I had this problem, and then I found this awesome way to fix it", and I'm like "How did you do this by yourself?" That is amazing. Okay, but what do you print at home? Did you make your own 3D printer, or do you have --

**Gina Häußge:** No, I actually always just get something from the shelf, basically.

**Autumn Nash:** So what's your favorite 3D printer?

**Gina Häußge:** I'm not sure if I would call it a favorite. I have a very old \[unintelligible 00:46:30.26\] by now that I have modified a whole lot... And that works, and works, and works, and works... And I actually just printed a guitar with it that I gave away as a birthday present to the father of my partner... Who was really, really happy about that.

**Autumn Nash:** That's awesome. Do you have anywhere that you post the stuff that you 3D-print? Because I just want to like follow all the stuff that you print, because it has to be awesome.

**Gina Häußge:** Sometimes on Mastodon, sometimes on Printables... But mostly probably on Mastodon. So chaos.social/@foosel. And that's also where I post everything pretty much that I make. Currently, I'm more into making print and play board games, for some reason; that just suddenly started to make --

**Autumn Nash:** Ah, that's cool.

**Gina Häußge:** I just made a card game again this morning. So yeah, it's a weird thing.

**Autumn Nash:** Because I feel like at the amount of -- like, you were 3D-printing when it wasn't even like a big hobby. And the fact that you created all this software, I'm like, you have to be making cool things.

**Gina Häußge:** Mostly functional stuff, really, I have to say... So I printed some parts for my bike, like for mounting the two locks that I have to the frame, and for mounting the radar unit that I have to tell me when a car is coming from back, and such stuff like that... Then together with a buddy we did a whole project for the Chaos Communication Congress at the Chaos Communication Camp last year... Which were basically little environment sensors that we put into little gnome figures. And I printed all of these gnome figures...

**Autumn Nash:** \[00:48:08.23\] You're like the human problem solver.

**Gina Häußge:** That is actually my superpower.

**Autumn Nash:** How many problems has she talked about that she's solved? She's the epitome of engineering brain. She's like "I had this problem, and then I made that." I'm just like, I just want to be your friend. You're amazing. You're just like "And then I solved this automation problem. And then I realized we needed this", and I'm just like... You make all the things.

**Gina Häußge:** Yeah, and this is actually the reason why I got a 3D printer, because I had all of these ideas constantly how to solve certain issues in a household, just around the home, but I never had a way to do that. And then I got a 3D printer, and suddenly everything looked like a nail for my new hammer. And then later I got a laser cutter. And then I got a \[unintelligible 00:48:53.25\] cutter.

**Autumn Nash:** Can we just talk about you should be Gina Foosel the problem-solver...?

**Justin Garrison:** Official title now.

**Autumn Nash:** Yes.

**Gina Häußge:** That is actually one of my best skills, yeah. That is something that also back when I was still a Java engineer person, I was constantly...

**Autumn Nash:** You're always gonna have problems, and always end up with adversities, but just the fact that your attitude is like "Okay, we have this problem, and we're going to fix it this way", that is amazing. You are going to be successful forever.

**Gina Häußge:** The only downside of it is that sometimes my brain won't shut up. You know, like, when you're laying in bed and you're trying to sleep, and your brain is going "Oh, by the way, you might be able to solve this that way, or you could do this, and such." So I've now taken to listening to audiobooks, so that I can actually fall asleep... Because otherwise this stupid thing just won't shut up.

**Autumn Nash:** But then the audiobook gets good. I live that problem all the time.

**Gina Häußge:** I have a trick up my sleeve. I only listen to audiobooks I have already read. So I know what happens.

**Justin Garrison:** She solved that problem, too. \[laughter\]

**Autumn Nash:** See? She's a problem solver. Because I have the same brain, and I feel like it doesn't do the same cool problem-solving that you do. Like, I'm trying to get on your level one day. I'm not there yet... But it's always like "And then this, and then you should do this. And then you need to make a list for this." And I'm like "Can you shut up? I'm trying to sleep." But then I'm like "Oh, the book just got good."

**Gina Häußge:** I just give it something to listen to, and then it shuts up, and because I already know it, I get tired and I sleep. It doesn't work with podcasts, it doesn't work with books I don't already know. Because then I want to actually listen and know what happens...

**Autumn Nash:** Gina has all the secrets, guys. All the secrets.

**Justin Garrison:** Gina, this has been a fantastic conversation. Thank you so much for coming and sharing all about OctoPrint, what you do... For anyone that's listening, if you're not familiar, if you have a 3D printer, go check it out, run it on a Raspberry Pi 3... Donate to the project, because this is one of those successful open source projects that has been around for a while. I was a user for a long time, I am also a donator... So I encourage everyone else to like go out there and -- and it's great having integrated GitHub sponsorships, and all those things that you have for the project to make it really easy to say "Oh, yeah, here's $10, here's a recurring buck or two." All those things go a long way to help promote the work, and really promote the idea behind successful open source that can be community-run and community-funded. It's an awesome success story.

**Autumn Nash:** Yes. I hope that people take this success story and it proves to them that this can be a model for open source.

**Justin Garrison:** It's possible. Thank you so much, Gina.

**Gina Häußge:** Thank you for having me. It was a blast.

**Break**: \[00:51:37.17\]

**Autumn Nash:** Thank you so much, Gina, for coming to talk to us and letting us ask you all the questions. Your interview was great. Do we have stuff listed for people to find Gina, all her links, and everything?

**Justin Garrison:** Yeah, we have a couple of links in the show notes, as well as some blog posts and a slide deck that she had for a presentation. So we have a couple of things there that people can go check out. It's in the show notes.

**Autumn Nash:** \[00:52:14.29\] Gina is amazing. She speaks multiple languages, not just programming languages... She does all the things... And she's on Mastodon, right? Yeah, so definitely go check her out and support her, because she's amazing. So for our outro game we're gonna do K8s versus 3D printers, where Justin's going to guess -- I feel like he's cheating, because he knows all Kubernetes things... But we're going to try.

**Justin Garrison:** I do not know all Kubernetes things.

**Autumn Nash:** You know way too many of the projects, but we're going to try.

**Justin Garrison:** I've been 3D-printing about as long as I've been using Kubernetes. So in both cases it's about 10 years. So hopefully, I will know some of these things. And we're naming 3D printers, is that what it is?

**Autumn Nash:** Should we do 3D printers, or should we do with the fake 3D printing names versus real ones?

**Justin Garrison:** We can't go back and forth, you've gotta pick up your kids in 10 minutes. \[laughs\]

**Autumn Nash:** I know. It's like so hard, because I want it to be as good as your games... And I feel like you're gonna get all the Kubernetes ones. It's really hard to test you on stuff.

**Justin Garrison:** I think you should do 3D or K8 as --

**Autumn Nash:** I feel like this is cheating, but we'll try...

**Justin Garrison:** We'll see. Again, you don't have to do the filter; you can go with any CNCF project and I'll see if -- but again, some of the 3D printer names are pretty far out there.

**Autumn Nash:** Okay. Let's try Fusion. K8 or 3D printer?

**Justin Garrison:** Geez, that's actually... \[laughs\]

**Autumn Nash:** I looked really hard for these, okay...?

**Justin Garrison:** I think that's K8.

**Autumn Nash:** No, it's a 3D printer.

**Justin Garrison:** Dang it! It could go either way. Alright, so there's a 3D printer called Fusion?

**Autumn Nash:** Yes.

**Justin Garrison:** It's a good name. It makes sense.

**Autumn Nash:** It is! Okay. Let's do... Oh, this is so hard, because you know all the K8 things. Okay, Argo.

**Justin Garrison:** Argo is absolutely a K8 name.

**Autumn Nash:** Dang it. I don't know enough about Kubernetes to know what's obscure and what's not. It's not fair!

**Justin Garrison:** I actually have the Argo stuffed animal, the octopus that they have. Or my son has it.

**Autumn Nash:** I should have known. You have all the cool stuff. Okay, Clip.

**Justin Garrison:** Clip.

**Autumn Nash:** Yeah.

**Justin Garrison:** C-L-I-P?

**Autumn Nash:** Yes.

**Justin Garrison:** That's gotta be a K8. It's gotta be.

**Autumn Nash:** It is a printer. Continuous Liquid Interface Production.

**Justin Garrison:** Oh, it's a liquid -- okay, so it's like a... What's it called? The laser... I forget what they call it, but yeah, the...

**Autumn Nash:** It looked cool.

**Justin Garrison:** The Emergent -- not the Emergent. What do they call it? I had one. The Form Labs. Form Labs had one.

**Autumn Nash:** This is also dangerous, because I'm going to somehow end up with a 3D printer from this one... \[laughter\]

**Justin Garrison:** You're like "That one looks cool, so..."

**Autumn Nash:** I know. I'm like, I want a new one so bad. I feel like you're gonna know what this is, but... Some of these are really popular games.

**Justin Garrison:** Yeah. And there's a lot of older ones. There's quite a few that were very popular.

**Autumn Nash:** Yeah. It's hard to figure out which ones are not popular anymore.

**Justin Garrison:** I mean, it's the same problem with Kubernetes, too. There are some very popular...

**Autumn Nash:** Thanos?

**Justin Garrison:** That is K8, because it's a Prometheus aggregator, I think.

**Autumn Nash:** This is why we can't test you on Kubernetes stuff. This doesn't work.

**Justin Garrison:** \[laughs\]

**Autumn Nash:** Duet.

**Justin Garrison:** Duet?

**Autumn Nash:** Yeah.

**Justin Garrison:** That doesn't sound Kubernetes to me, so I'm gonna say printer.

**Autumn Nash:** It is a printer.

**Justin Garrison:** Yes! Duet. That's an interesting name for a printer though.

**Autumn Nash:** HDX Airwolf.

**Justin Garrison:** An Airwolf?

**Autumn Nash:** Mm-hm.

**Justin Garrison:** That's got to be a printer.

**Autumn Nash:** Dang it. \[laughter\]

**Justin Garrison:** That sounds too cool for Kubernetes, I'm sorry. An Airwolf...

**Autumn Nash:** Axiom?

**Justin Garrison:** A-X-I-O-M?

**Autumn Nash:** Mm-hm.

**Justin Garrison:** Axiom. That's Kubernetes.

**Autumn Nash:** That is a printer, unless Kubernetes has one, too... Some of these are like "It could be both..." What if we don't know...?

**Justin Garrison:** \[00:56:20.02\] That's the ship from Wall-e, the Axiom. There was an internal project that I was familiar with called Axiom.

**Autumn Nash:** It looks really cool, and it kind of looks like -- some of these... On this one from Airwolf - here, I'll send it to you. They almost remind me of -- you know what the old IMAX used to look like? The ones that were clear...

**Justin Garrison:** Yeah.

**Autumn Nash:** And I'm like "Now I need one of these, too." We're gonna get distracted and I'm gonna buy a 3D printer. Okay, this is probably too popular, but Microrocks...?

**Justin Garrison:** Microrocks? Printer.

**Autumn Nash:** Kubernetes.

**Justin Garrison:** Dang it! What's that one do? Microrocks. Is it -rox?

**Autumn Nash:** No. It is -- if I send you the link \[unintelligible 00:57:03.11\] Wait, we forgot -- how many did you get right or wrong?

**Justin Garrison:** Oh, MicroK8s?

**Autumn Nash:** No, it's \[unintelligible 00:57:12.28\]

**Justin Garrison:** \[unintelligible 00:57:14.25\] Okay.

**Autumn Nash:** I'm just excited. I've found something in Kubernetes that you didn't know what it is. I'm so excited right now.

**Justin Garrison:** Okay, \[unintelligible 00:57:22.16\] Yeah, no idea on that one.

**Autumn Nash:** Last one... PairSec?

**Justin Garrison:** Is it ParSec?

**Autumn Nash:** Yeah.

**Justin Garrison:** Kubernetes.

**Autumn Nash:** Dang it. It's really hard to find something in Kubernetes that doesn't have the word Kube in it!

**Justin Garrison:** It's true. It's gonna have a K, or it's gonna sound very Greek...

**Autumn Nash:** Skooner.

**Justin Garrison:** Skooner?

**Autumn Nash:** Printer or Kubernetes?

**Justin Garrison:** Skooner.

**Autumn Nash:** This is so much fun...

**Justin Garrison:** I'm just gonna go with printer on that one.

**Autumn Nash:** That's a Kubernetes. I'm so excited, I had two that you couldn't guess...! Do you know how hard it is to find things of Kubernetes that don't have the word Kube in it? It's so hard.

**Justin Garrison:** Okay, I should have known. Okay. Oh, it's a dashboard. Alright... Good times.

**Autumn Nash:** Look, if you're just pretending to not know to make me feel better, I appreciate it, because it gave me joy. I finally found something that you don't know.

**Justin Garrison:** There are plenty of things.

**Autumn Nash:** Also, now I'm just like "I want to try all these things."

**Justin Garrison:** I'm gonna be quizzing you on whatever our next thing is versus Java.

**Autumn Nash:** Okay, one last thing... Eraser.

**Justin Garrison:** Eraser. That must be the opposite of a 3D printer.

**Autumn Nash:** I know, but it's a cool name.

**Justin Garrison:** So I'm gonna say it's a 3D printer, because I don't know any Kubernetes thing.

**Autumn Nash:** It is Kubernetes.

**Justin Garrison:** Dang. Eraser? There's not even a K in there.

**Autumn Nash:** I know. I was like "This isn't even --" I was like "I don't know if I would think it was either." So I was like-- look, I thought really hard about this.

**Justin Garrison:** Oh, it's an image cleanup tool. Ah, yeah. Okay, that makes sense. There's a couple of those. Good times.

**Autumn Nash:** You almost make me want to do Kubernetes. And then I see things like this, where there's way too much to learn, and I'm like "Oh, no... Maybe I'll stick in Java and data."

**Justin Garrison:** Java and data... That's a small subset of things you have to learn... \[laughs\]

**Autumn Nash:** It makes me feel better than that... I'll just run data things in Java, in a very simple Kubernetes thing. Do you guys do simple? I don't think y'all know what that is.

**Justin Garrison:** Yeah, it's probably not. Thanks, everyone, for joining and listening to the show. One last time we'll shout out that I'm going to be traveling near the end of June, because I guess it's the last episode that's going to come out before SRE Day. So SRE Day in San Francisco, I'm talking there, and we'll be around if you want to come. I will also have Changelog stickers... And Cloud Native Security Con in Seattle at the end of June - I will also be speaking there, and have stickers. Hopefully enough for everyone.

**Autumn Nash:** And hopefully he can sneak me into the Kubernetes thing, because I just love the Kubernetes crowd. I don't know what y'all do special in Kubernetes, but you guys have one of the best open source communities. I love meeting all the Kubernetes people.

**Justin Garrison:** I will 100% give credit to setting up the community in a very deliberate way by people like Sarah Novotny, who was one of the very first community leads for Kubernetes, and she --

**Autumn Nash:** Whatever y'all did community-wise, it worked. People are fire; they're so fun. They've all got cool hair... I was just like "I will learn how to run Kubernetes for y'all. I just want to hang out with you." That and the Postgres community seems very welcoming, too.

**Justin Garrison:** So thanks, Autumn, and thank you all for joining. We'll talk to you again soon.

**Autumn Nash:** Bye, guys.
