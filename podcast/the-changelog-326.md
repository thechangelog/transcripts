**Jerod Santo:** So we're here in the wake and aftermath of an event-stream malware incident that happened to the open source community, to the Npm community, to the Javascript community, and to Dominic himself, the maintainer of the repository...

**Dominic Tarr:** Former maintainer.

**Jerod Santo:** Former maintainer, yes. Thank you for correcting me. Please correct us as we go here, as there's lots of details and we're definitely going to probably slip up on some of them. For those who weren't on the internets on and around November 26th, 2018, we will recall some of the events that happened, to catch everybody up and get us on the same page.

There is a repository and package called event-stream, which was created by Dominic Tarr, and maintained up until recently by him, which had an issue opened on November 20th of this year by a fella - he goes by FallingSnow; I think his name is Ayrton Sparling. I probably mispronounced, but it's the best I can do there. He was wondering what happened to this repo and why specific access was given to a GitHub user by the name of @right9ctrl. He had found some issues there, and was asking about it.

It turns out that this person injected some malware into the Npm package, with a specific version of event-stream, which was used by many folks, and that was very problematic. Now, this caused all sorts of confusion, conversation, some yelling, some nice things... It caused a lot of discussion on Monday, and some actions. Thankfully, Npm acted pretty quickly and the package was removed the morning of November 26th. The initial incident was about a week earlier, but didn't really hit too much of the zeitgeist until Monday.

\[00:03:59.19\] Dominic is here with us. Dominic made a statement on November 26th, and we're here to talk about that and talk about the aftermath, what causes these problems, really open source, the community and the culture writ large, because there's huge implications... And lots of fun stuff.

That's my summary... Adam, Dominic, please hop in and help me out there or fix any things I had wrong, and we can get going.

**Dominic Tarr:** Yeah, so I woke up that morning to a friend telling me that the issue had been posted all over the internet and I might want to lock it, or something. I was actually quite excited, because I thought that that issue brought the attention to quite important issues for open source. Everyone was very excited about it, so I made a statement about it... But I'd like to explain how everything fell into place.

I wrote the event-stream module like seven years ago, and at that time -- Node.js is now hugely popular; by now there's hundreds of thousands of modules on Npm. Back then it was like tens of thousands. I've been involved with Node since there were -- I remember when there were a thousand packages on Npm...

**Adam Stacoviak:** That's funny...

**Dominic Tarr:** ...and that being celebrated as a big thing.

**Jerod Santo:** Big deal, yeah.

**Dominic Tarr:** So event-stream was of that era. I went on to write a huge number of stream-related modules, and event-stream was actually the very first one that I wrote. I wrote it, and then after about 11 months of stream experience, I realized that event-stream was kind of the wrong basis, and I wrote a thing called Through, which became the basis for all of my streams stuff after that. So even by that point - that was six years ago - I had basically moved on from event-stream; I wasn't really interested in -- I wasn't using it as my first go-to thing for writing streams anymore.

Then another year or two after that the Node core team had decided they were gonna fix all the problems with Streams and create Streams 2. I hadn't managed to participate in any of these discussions on what was gonna go in Streams 2; it was all at this Node conference in California, and I wasn't there... And when I saw what they wanted to add, I was like "This is horribly bloated and ugly." But it was also backwards-compatible, which made it twice as bad. I tried some old protesting, and they were just like "We already decided this is how we're gonna do it."

That sort of spurred me to be like "Well, if you're gonna really make a really minimal efficient stream thing that wasn't backwards-compatible with the current streams, what would it look like?" I started experimenting - me and some friends - and came out with pull-stream. Pull-stream is really minimal -- you just have two functions; one function is just a normal Node async function, and you call it repeatedly, one at a time. So you have a readable function. And then you have a reader function, which is a function that the readable was passed to. I've got detailed blog posts about both the history of Node.js streams and pull-stream, so you can go through them at dominictarr.com.

\[00:07:46.25\] Pull-stream was like -- I decided this was actually so much better and solved several of the problems that node streams had, like error propagation... So if the error occurs somewhere in the stream, it cleans up and aborts the whole stream, and you know that the stream ended in error... Or just move data about, like you did with event-stream. It was just much more minimal and lightweight and efficient, and benchmarked that it was faster, and stuff like this... Even though I hadn't really tried to optimize it, I had just written all this code... So I had fully moved on by that point. It was like "This thing is great." And I've really tried to promote pull-streams.

Some people caught on and there's a pretty good community of people that use it... But anyway, by the time -- that was also several years ago, so I had completely moved on from event-stream like twice.

**Jerod Santo:** Yeah, not only had you stopped working on it and maintaining it, but you had replaced it with things that you consider much better quality, the way to go. In your mind, this particular package was ancient history, right?

**Dominic Tarr:** Yeah. And at that point it wasn't really popular, yet I think it became popular when Gulp used it. I never used Gulp... It's like a build tool, kind of like Make, or something like that. It's for building all of your projects, and stuff like that... I always felt that Javascript didn't really need one of those, but anyway, Gulp happened and got pretty big, and it used event-stream; in the first version it used event-stream in its example documentation, and stuff... So that's when it actually became more popular, but that was after I had already moved on to pull-stream's family enough.

**Adam Stacoviak:** So you moved on twice, then it became popular, and you're still moved on from this project... Like, from how you use it, its usefulness to you. Not so much just the project, but its usefulness to you - how you use it to develop applications, or using your tools and toolchain... But Grunt made it popular, Gulp... I'm not sure if Grunt may have used it or not, but they were all on -- no, you said Gulp, I said Grunt.

**Dominic Tarr:** Yeah, it's Gulp.

**Adam Stacoviak:** They all run together to me - Grunt, Gulp... All in the same era, of this event-ish streams to build things era prior to Webpack becoming more and more popular and things changing.

**Jerod Santo:** The real interesting thing about this situation is that the compromise or the injection of this code didn't come from hacking GitHub's permissions, or Npmjs.com... It was really a third-party who came to you on a project that, like you said, you moved on from twice. This is the @right9ctrl user on GitHub, which is no longer a user on GitHub, of course; a malicious actor... And must have been acting like a normal, and obtained credentials to this repository basically by asking for them, and then used that access to add, according to FallingSnow, flatmap-stream, which has an injection in it... Very briefly added it, published a new version, and then took it out in order to cover their tracks and leave the actual installed version, of course, on as many computers as possible.

**Adam Stacoviak:** Right.

**Jerod Santo:** So that's really the bigger picture of this - this was an interesting and unfortunate situation, but one that is very difficult for you to see coming, right? Tell us about this maintainer that you added. I know you're kind of working your way there, with the story of how event-stream was outside of your own mind and use... Tell us about that decision - was it a long time ago, was it recently?

**Dominic Tarr:** \[00:11:59.09\] Well, it was at the start of September; it was only a few months ago. My maintenance of event-stream was basically ignoring it. I hadn't made any feature changes in five years. If anyone made a feature change, I'd tell them to publish it to this module.

**Jerod Santo:** Let me throw out a couple of stats about Dominic, because I doubt he would say these things himself, in order to boast... But if you're thinking about Dominic Tarr as perhaps like event-stream was one of a couple packages he's written, "How could you ignore this thing that you toiled over...?", Dominic has, at the time of this call, 628 source repos on GitHub. That means these are non-forks; he actually created those repositories... And 422 packages published on Npm under his name. In November alone, Dominic, according to GitHub's activity, you've done 257 commits on 33 repositories, in November... I would call that prolific in your open source work and products.

Event-stream, at this point, was an old package that you wrote, that you'd moved on from twice, and it's not like you've got these six packages that you care for; you have hundreds of packages, and so like you said, the maintenance on that was you were basically ignoring it.

**Dominic Tarr:** Yeah. And none of my friends used it either. I'd occasionally get issues or support e-mails, but for me these were all just annoying, just like "I wish this would go away." Then someone e-mailed me and was like "Hey, this was useful to me. I can spend a few hours a week maintaining it", and I was like "Hell yes!" I jumped at the offer. \[laughter\] "Please.., Thank you so much." It was the first person who actually offered to help, so I gave it to them.

This is a critical thing that ended up exasperating the whole situation - in-between then and now, maybe a month later, I had a whole bunch of old modules that I was no longer really interested in, that I didn't use, and occasionally people would post issues and pull requests, and it was always a huge bummer for someone to earnestly come looking for help or want to make some change, and then this would require me to probably think about the implications of their change for at least 20 minutes, or something... And I'd moved on from all of these things, and it was just a huge bummer to tell them "Look, I just can't be bothered. I'm just not interested in working on this."

And it was not the 20 minutes or something, it was just the letting some stranger down that hard; I realized that that was getting to me... And because I had hundreds of modules, I thought I wanted to disown in that bulk... So I've actually written more like 700 and something modules, and in-between handing off event-stream and now, I disowned like 340 of them...

**Jerod Santo:** Oh, wow.

**Dominic Tarr:** Yeah, so I wanted to do it in a way that I would no longer have access to them. So I tried an e-mail, and then used a random password that I forgot, and then used that to sign up for another Npm account called No Person's Modules; then I forgot the password to that as well, so I can't log into these things. Then I transferred hundreds of modules to that account, which now no one controls. I e-mailed Npm support and told them I was doing this, as well, based on mental health reasons.

**Jerod Santo:** Drastic measures.

**Dominic Tarr:** \[00:16:00.25\]Yeah. But I thought that it was quite cathartic for those to be no longer my responsibility, and the things that I still retain control of are the things that I actually use, directly or indirectly, mostly... Maybe there's a few things I can clean up as well, but... And then there were a couple of cases where I'd added someone else as a publisher as well, and so if someone else was already a publisher, I just removed myself from those modules. Event-stream fell into this category, where already someone else seemed to be an active maintainer. At that point, they seemed to be legitimately maintaining event-stream, so I was just like "Okay, that's under control." So I no longer had access to it. By the time they reported the attack, I was like "Sorry, I actually can't help you. I don't have access to this module anymore."

**Adam Stacoviak:** Was this recently then, this cathartic moment for you? Because you said @right9ctrl reached out a few months ago and asked you for commit bits, so that they can help you maintain, and you gave it to them... So was this cathartic moment you're talking about, where you did this deliberate --

**Dominic Tarr:** Yeah, it was something like a couple of weeks after that, or something like that. It was a coincidence, but there was basically a coincidence in timing. I think if I hadn't have done that, then when someone reported this thing, I would have been like "Okay, we'll just unpublish that version, and remove this weird thing", and stuff like that. It probably would have never made the news, because it would have been dealt with in that issue...

**Jerod Santo:** Right...

**Dominic Tarr:** ...but because I had forcibly locked myself out of it...

**Jerod Santo:** That's interesting...

**Adam Stacoviak:** You really couldn't go in and save the day.

**Jerod Santo:** This was like a perfect storm. And let me just say that it was a pretty sophisticated social engineering attack... Because that's really what it is, right? We talk about hacking into computers and whatnot, and we realize over time - go all the way back to Kevin Mitnick - the best crackers are the ones that just ask for your password, or act like they're somebody else and get a password. Most people were very forward with information.

This was a situation where this person picked really a prime repository, where it hasn't been active, probably the issues were building up... You can tell when somebody's ignoring one of their repositories just by doing a little bit of research... And then not only that, but so deployed, which you can probably see via Npm download stats on builds, and stuff, how many downloads of this particular package in the last month... And then really weasel their way in. It's so interesting why we found out about this. First of all, I think FallingSnow is like a saint; I love people like that, so thanks FallingSnow for doing this -- I don't know what you were doing necessarily, poking around and finding this thing, and shedding light on these things... But then also the fact, Dominic, that you had removed your own access from Npm, and so there was really nothing that you could do; this was gonna have to be brought into the light, and so here we have it.

**Dominic Tarr:** Yeah. But I think one thing important to note is that the attack that @right9ctrl was trying to pull off was actually a very targeted attack. It only actually affected a specific Bitcoin wallet, that I understand hadn't actually been fully released yet, or something... So it didn't end up doing any--

**Jerod Santo:** Massive damage.

**Dominic Tarr:** It ended up failing completely. Basically, people's time got wasted, because they had to remove the code.

**Jerod Santo:** I wonder if they were targeting a specific person that they knew used event-stream, or something... Of course, that's all just conjecture.

**Dominic Tarr:** Well, it's quite obvious who they were targeting, because the malicious payload was encrypted, and the key to the encryption was--

**Adam Stacoviak:** The wallet.

**Dominic Tarr:** \[00:20:03.22\] Yeah, it was the name of the wallet thing. It was like, it goes into an environment variable that is "see it when it's run inside an app." So they found that there was some suspicious encrypted material in the minified file, but they had to go through every single module that depended on event-stream, until they found the one that actually decrypted the thing. They had to just try thousands of things, until they discovered that it was this Bitcoin wallet.

Of course, by the time they had noticed that there was some encrypted thing inside the minified content, and not inside the regular content, then obviously something was up, and they didn't know exactly what was the thing... Although now next time this happens, some Bitcoin wallet is probably a pretty obvious case.

**Jerod Santo:** That's interesting. I didn't realize that they had figured out that much. I also wanna point out just the highlights of the community, with people like FallingSnow, but also the others... Like you mentioned, so many people digging into the code, and really the reverse engineers come out, right? And do all their Sherlock Holmes work to figure these things out. It's really quite amazing how fast and successful they are at tracing the trail here.

Also, what's up with @right9ctrl? Don't they know that Bitcoin is crashing right now? Come on, what's the deal...? The value is way down.

**Dominic Tarr:** I think they started working on this hack before it crashed, as well.

**Jerod Santo:** If we could just get all cryptos to go back to zero, then maybe we'd have less problems like these out in the world.

**Adam Stacoviak:** Yeah, The Analysis of a Supply Chain Attack by Hayden Parker laid some of this out, in terms of the backdoor... It would only be activated if the code was included in BitPay's open source wallet called Copay, or any forks that did not modify their project's description. So like Dominic is saying, it's very targeted... But I think one thing that I'm seeing here that's kind of interesting - and correct me if I'm wrong - is GitHub and Npm are not a one-to-one. It seemed like this person was able to deploy this sort of undetected in a way, because they had done some merges on GitHub, and then undone their work, and did a deploy or something like that to Npm, and so Npm and GitHub were out of sync... Which I'm sure is very common to be a case, but I'm wondering if that's not a line for security vulnerability, whenever something that is on GitHub, in source code, does not somehow match as a code repository place Npm, the final built module. What do you guys think that? ...the misnomer there, the anomaly of the fact that they're not connected or they're not the same.

**Dominic Tarr:** There is a number of ways that this particular attack could have been systematically prevented, or made a lot more difficult to pull off, or a lot easier to identify. One of those is you check that the build product is deterministic from the sourced product. The minified version of the code -- like, if someone else minifies the same code, it should produce the same result. And if the unminified thing didn't include the encrypted stuff, then the output shouldn't include it.

A simple thing that you could do to prevent this kind of thing is -- or at least that would have detected this thing... Let's say there was this tool that you install your dependency tree, then you run this thing, it goes through all of the dependency tree, it clones all of the repos, builds them all, and then checks that what you've installed is actually exactly the same, down to a byte, as what was built... And if anything is different at all, then you'd be like "There's something going on here."

**Adam Stacoviak:** \[00:23:51.16\] Even from a maintainer's level - a maintainer isn't gonna catch this unless they have the right kind of tooling, because no maintainer... Well, maybe not "no maintainer", but not many maintainers are gonna confirm that what is on Npm is what is on GitHub. Especially if it's minified, who's gonna take that measure to ensure that "Hey, I'm gonna give commit bit access to this person, and I'm gonna assume that they're not malicious because the previous commits...", whatever. They're just not gonna do that level of vetting. We need tooling in place to, as you said, systematically catch this kind of exploit because GitHub did not match Npm, in this case.

**Dominic Tarr:** Yeah, and this issue of deterministic builds hasn't been on the radar I think until now, of the Javascript community, but is something that... Like, Debian has for the last couple of years been moving -- every Debian package, which is mostly compiled C, C++ etc. is fully deterministic now. It means if two people compile the same program, the built output will be exactly the same.

If you have multiple trusted, independent people building something and one of them is different, then you know that there's something up, and possibly it's a Trojan inside of the compiler.

This was an attack described like in the early '90s, by the creators of UNIX, the Trusting Trust attack... Which is pretty famous, but also, generally, no one had actually used it to do anything malicious, that anyone was aware of, although there had been a benign Trojan inside of GCC for some years. It was something that when you compiled it, it would insert itself into the compiled output, and never appeared in the source code, and then when you used that to compile the next version of GCC, it inserted itself. And it didn't do anything bad. I guess it was probably just a funny prank.

**Jerod Santo:** Perhaps a good moment, Adam, to once again cross-promote an old episode we did - Reproducible Builds and Secure Software, with Chris Lamb. We talked to Chris Lamb all about his work with reproducible builds and how that's going into the Debian and Ubuntu distributions... Back in February 2017, so a couple of years ago, but man, that was a prescient show, because it's coming up so much lately, as these are definitely things that people are starting to realize are super-important, because we're having fall-out from not having that as a feature of our package management tools, so... Go back and listen to that. We'll put that in the show notes if that is of interest to you.

**Break:** \[00:26:36.19\]

**Jerod Santo:** So we're talking about ways that these kinds of attacks can be prevented down the road, systematic things we can do, or maybe if we can't do them and maybe certain platforms have to do them; certainly, maintainers have things that we can do, but you mentioned the deterministic builds/reproducible builds, but you also have some other things that could be features of our systems, that would help from this kind of attack happening. Wanna elaborate on those, Dominic.

**Dominic Tarr:** Yeah. Well, firstly, reproducible builds might have made it easier to...

**Jerod Santo:** Detect.

**Dominic Tarr:** Reproducible builds might have flagged this, but he might have gone to -- like, if they had checked in the malicious code, maybe no one would have noticed. Once it was apparent that there was some encrypted code that was being run, it was like "Something is differently very suspicious", but if it had unencrypted, that might have actually been more effective. We don't really know... It could have been overkill to encrypt it, and so that would have actually gotten past a reproducible build, because the bad stuff would have been just hiding in plain sight.

And the other thing is that the attack depended on the event stream code doing several things that -- well, rather the flatMap() code doing several things that really had no business doing. So to successfully steal people's Bitcoin keys and then send them back to the attacker, it needs to do network IO, and event-stream itself didn't need to do that; that is completely outside of the stated purpose of event-stream... Same with accessing the crypto module and that sort of stuff. So if there was a specific list of what permissions, on a module basis, that...

**Jerod Santo:** That you could request from...

**Dominic Tarr:** Yeah, that a module depended on. Event-stream was like -- it doesn't do any IO, it doesn't do any networking or file access, it just loads other things together... Then compromising event-stream wouldn't have been useful for this attack. You would have to compromise something else that had access... And then, of course, it also monkey-patched the constructor of something that then it got the keys from; if you had a good sandboxing thing, it wouldn't have been able to do that.

I've been aware of this stuff being developed for some years; there's this thing called ERights, which is quite old... This guy, Mark Miller, who is also the chief architect on the Xanadu project... Are you familiar with Xanadu?

**Jerod Santo:** No.

**Dominic Tarr:** This is something you should definitely know about... Maybe you should do a whole podcast on it. So this guy Ted Nelson had this idea for the World Wide Web, but better. It had versioning built in, and you had this thing called transclusion, where a link just embedded other documents. But the thing is he had this idea in the 1960's, and then spent several decades trying to develop it... And by the time the web came along, the first release of the web from Tim Berners-Lee cited Xanadu, and was like "I wish Xanadu was ready, but given that it isn't, here's a crappy version of the idea that I cobbled together."

Project Xanadu was like a far, far more ambitious idea. It actually inspired a lot of people, but failed to deliver any usable software. The history of it is quite amazing, because it has quite a big impact in terms of ideas, but it didn't successfully deliver anything. It still was instrumental in actually creating the web, but the creator of Xanadu was like "The web is actually a really disappointing, crappy version of what we were trying to do."

**Jerod Santo:** I found Project Xanadu on Wikipedia, reading a little bit along, and I agree this would make a great show to do separately... But what's interesting is that there was a working deliverable called Open Xanadu that was released in 2014; it was called "Open" because you can see all the parts... So not necessarily open source, but just open to see.

On the site, the creators claim that Tim Berners-Lee stole their idea, and that "the World Wide Web is a bizarre structure created by arbitrary initiatives of varied people, and has a terrible programming language, and the web is a complex maze." I'm not sure if this was Mark Miller doing this, or it was somebody that was inspired by Mark Miller's work on Xanadu, but... It's super-interesting. This is just Wikipedia, by the way, so... Take it for what it's worth.

**Dominic Tarr:** \[00:32:12.13\] Mark Miller was the chief architect, but the Xanadu Project was started by Ted Nelson. Actually, I had the privilege of meeting Mark Miller a few months ago as well. I had been aware of his work on ERights since then. The idea was he was trying to build a programming language that was optimized for security auditing. You could definitely say that "This part can only access these things, and unless something has been passed into it, it can't interfere with that other thing in any way at all." And there's this website that explains this. Those look like excellent ideas for mainstream computing, which is basically being completely ignorant of security. Security is just a huge pain in the butt for most people. They had envisioned "This is how we could solve all of these problems", and they've been working on it for decades now... But interestingly, in the main time they had actually infiltrated Google and had managed to add several features to Javascript that enabled Javascript to have all the pieces of the puzzle to create this in Javascript.

**Jerod Santo:** Who's "they"? You said they infiltrated Google. Are you talking about Mark Miller?

**Dominic Tarr:** Yeah, Mark Miller. "Infiltrated" perhaps is the wrong word, but he worked at Google, and I understand he was -- who's the other Javascript guy...? Douglas...

**Jerod Santo:** Crockford?

**Dominic Tarr:** Crockford, yeah. Crockford had been like "Javascript nearly has all of the features you need to make this secure thing." From my understanding, this produced Strict Mode and Object.freeze... And now left Google and is working at this thing Agoric, which has produced now a thing Secure EcmaScript (SES), and there's a bunch of versions that are more or less constrained, or something like this, but it gives you pure Javascript; you don't need a special platform... So you don't change the background; this already works in a web browser, and you could block off some code. So you could completely use user-provided code that then runs in a context that you can be confident it's not touching other things. It can't do things like prototypes, and it can't use things that haven't been passed to it directly.

Many people will point out that getting sandboxing right is extremely difficult, and that's absolutely true... But luckily, these people have literally spent their careers working on this.

**Jerod Santo:** So who would be the people that would be tasked with working on something like this? Are we talking about browser vendors? Node? Are we talking about package managers? Where would the sandboxing and the application of these principles go?

**Dominic Tarr:** Adding it to an actual, deployed application, that was originally created without this stuff in mind, so currently written code in applications, \[unintelligible 00:34:52.08\] someone would have to decide, I guess, what APIs things have access to, and stuff like that, so...

**Jerod Santo:** Mm-hm. It'd be easier to start fresh.

**Dominic Tarr:** Well, I think it could actually be added in user space. You might have to go through and be like "This thing can have these permissions or not."

**Adam Stacoviak:** You mentioned earlier that it didn't need IO access, so that would be an easy one... So if this module ever requested or used IO, then something is very odd about its behavior, because its described behavior says that it shouldn't use certain APIs or certain feature sets, essentially.

**Dominic Tarr:** Yeah, and for the most part, unless they do something really weird and dynamic, probably 95% of the modules would be an easy call to say what they should be able to or shouldn't be able to access. But you can just weed out dependencies that do weird stuff.

**Jerod Santo:** \[00:35:47.28\] So as the attacker though - let's say I have what @right9ctrl had, I have access to the source code, as well as the deployment mechanism... Even in this world where there is this sandbox, could I not simply -- I mean, I would have to provide the whitelist as the author of event-stream, so would it not just add IO to my list of things that I require and then deploy? Maybe you could have at that point some sort of like "These permissions have changed? Do you want to allow this to do that?" kind of a thing...

**Adam Stacoviak:** Right. Gosh, yeah... What a world...

**Dominic Tarr:** Yeah, I think it would be a good improvement, like Android phones etc already have this kind of permissions system. And I think most people would just click Okay.

**Jerod Santo:** Exactly, yeah. \[laughs\] We're pushing the attack vector up the stack, to the end user, who's more likely to not even know what the heck it's talking about and say yes.

**Dominic Tarr:** Yeah. But on the other hand, when you install a module, if you made the call then, and it was actually controlled -- because you end up with things like... BitPay didn't actually install event-stream; they installed something that installed something that installed event-stream.

**Jerod Santo:** Right.

**Dominic Tarr:** So when you install something, you say "Oh, that should never do such and such", and then it's basically a question of like "Who do you trust?" And perhaps if you were something like a high-value target, such as a Bitcoin wallet, then you would just go through the entire tree and be like "What should this be able to access? What should this be able to access?", which might take a while if you have hundreds of modules, but it would definitely give you peace of mind and be an appropriate action, and this kind of attack would \[unintelligible 00:37:15.08\]

**Adam Stacoviak:** Well, you said something there too, like, the trust... So we talked through sort of like systematic ways to prevent this, which seem to have varying degrees of user experience degradation and/or as you said, Jerod, just pushing the attack vector up or down the stack to different places that may have ill effects, like clicking Okay, or just bothering the developer at some point, or maybe even the user at some point with things that they're just not concerned with... The other is what you said there, Dominic, around trust... And even in your readme, the statement on event-stream's compromise, you mentioned two strong solutions to this problem, one being paying the maintainers, but the additive to that was only depending upon modules that you know are definitely maintained... So I'd like to kind of get your idea of what "definitely maintained" means to you, because your version of that, my version of that and Jerod's version of that may or may not be the same...

And then point two you made was when you depend on something, you should take part in maintaining it... So maybe you could break down those levels of solutions, where it's like, rather than changing how the software only makes sense reminding people to trust their dependency tree, but how do you do that?

**Dominic Tarr:** Yeah. Well, a big part of the problem here from the social perspective is that the tooling basically assumed I was responsible for this module, and had full control over the decisions made about it. So when you delegated to someone who had installed something that installed event-stream, you didn't have control over who made the decisions about event-stream... So it was basically like I was able to just transfer the right of access to event-stream. And I didn't want to have the right to control event-stream, because I had no interest; I had no skin in the game.

**Adam Stacoviak:** You abandoned it, basically. You wanted to be out.

**Dominic Tarr:** Yeah. It's sort of this really weird thing that only happens in software. There's no other part of -- it's really hard to make an analogy to some other part, where like a hobbyist ends up maintaining some kind of critical infrastructure while they don't want to. It's, like, insane.

**Adam Stacoviak:** What's funny is that -- maybe I could break this down a little bit... You, to the world, own this thing. You personally have moved on from the concept, the paradigm and the idea; meanwhile, the rest of the world found it to be useful years later, and made it widely useful in many different ways. It's been included in several different packages, and very popular organizations, but meanwhile, the original creator, who was best described earlier as a prolific open source developer, has since moved on not only from the project or desire to move on - and in some cases with some angst, because you had some pain with telling people that you were or were not gonna be involved anymore, and you mentioned the mental tear on yourself there... But the fact that you've just moved on from it, but the world hasn't, yet you're still involved, or at least somehow in the blame zone.

**Dominic Tarr:** \[00:40:30.09\] Yeah. And I think it's also important to mention that the module itself hadn't changed at all, in any significant way, over that entire time. It became popular for what originally it was back when I thought it was a good idea... So I hadn't really been doing anything, except for just ignoring it and reluctantly occasionally responding to something, or merging pull requests. Basically, it was just like a pain in the neck.

**Adam Stacoviak:** So how do you deal with that then? ... I guess maybe that's where we can camp out. If this is now a thorn in your side, you've moved on from it, the world still feels it's popular, two million downloads per week according to TideLift, used by large open source projects like Angular, Mocha, Electron and others, other commercial codebases from organizations like BBC News and Microsoft... So clearly somebody had some value in this thing, but you wanna move on... How do we collectively as open source look at this scenario and say "How can we allow maintainers to move on in ways that a project that is widely used, or at least widely useful to many people, organizations - how do we let them move on in a way that keeps the codebase secure and doesn't allow something like this to happen?" Do we hand this off to support organizations like Ruby Together might be...? In this case it's a Javascript Npm module, so maybe Ruby Together isn't the right one, but that example there where you have organizations that are intended to be sort of this catch-all, that are trusted or could be trusted or have some sort of vested interest in the future of an ecosystem.

**Dominic Tarr:** Yeah. When something is new and exciting... The thing is, I think most of the code on Npm was created by -- I mean, there's probably some big things that people are working on for their job, but the vast majority of them are small things that people have created in their own time, or to fix their own little problem. Some of those things, such as event-stream, became hugely depended on, and the thought process and skills and interest and motivation for creating those in the first place is very different from the thing that is required to maintain them in the long-term.

Once people are using something, then you don't really wanna change it, because if you break anything, loads of people are gonna be upset with you; everyone's gonna have a bad time. It's better just not to change anything at all; just keep it completely stable. And that's not really very fun. When you've created it the first time, it was a new idea that you were exploring, and something that worked really well; it's fun for a while, but by the time it's popular, maintaining it is a job... And it's not like a job that you necessarily signed up for. It was much better if it was maintained by someone who saw that as their job.

**Adam Stacoviak:** So what you're saying is if somehow over the 700(ish) modules you've created in your career - I think you mentioned roughly a hundred or so you decided to abandon a couple months ago or a couple weeks ago...

**Jerod Santo:** 300.

**Adam Stacoviak:** 300, okay. Thanks for correcting my math there... What you're saying, if I understand you correctly, is if there was a way for you to be paid, a fee that makes sense, a fair fee to continue to be a security measure, a maintainer even, if that's necessary, to improve - most of these are mature and stable and don't need to be changed much - you would stay on board as an on-the-hook person to provide maintenance and security.

**Dominic Tarr:** \[00:43:59.26\] Sure, yeah. I mean, there were 300 modules, but only a small handful of them were really popular. And I think this is the other thing, too - the most popular ones are completely boring. The things that I'm personally most proud of, the most interesting problems are not really very popular at all. The things that have millions of downloads... Like, my most downloaded - which I actually still use - is rc, which is a configuration loader. It just loads configuration files.

It's kind of like pop music - to have the broadest appeal, it has to be completely bland and uninteresting, such that the broadest spectrum of people can relate to it. Everyone has to load a configuration file.

**Jerod Santo:** General purpose use.

**Dominic Tarr:** Yeah, there's no exciting way to do it though.

**Jerod Santo:** I agree with you completely. I think that's why Nadia Eghbal's report about open source funding/sustainability was so well-named - Roads and Bridges - because we're really talking about infrastructure, and the phenomenon I guess that we're actually seeing here is people accidentally create infrastructure. They're not trying to; they're solving problems they have, but it turns out those problems are general use and easy to pull in, and easy to deploy, and over time it becomes infrastructure... And the fact is that nobody wants to work on a road, or nobody wants to work on a bridge. Maybe building that bridge was a fun and interesting problem for engineering, but it's just maintenance... So we accidentally create these roads and bridges, and they become public infrastructure... Or not public, but you know what I mean... And then it's like "Oh, I'm supposed to just work on this road for you for free?" And that's where the rubber hits the road - we accidentally got here. You accidentally became the maintainer of a thing that you wrote seven years ago, and people are still using today, and you have zero interest in. I think that's why many of us turn to "Okay, now I'm ready for a financial compensation to take care of this, because I also wouldn't maintain a road for free."

**Adam Stacoviak:** To that effect too, you don't have a lot of people coming by this perfectly fine bridge saying, "You know what, I think I'm gonna build a different bridge right next to it, slightly better... Because I want to." Like, rc works. Or in this case, event-stream works. Why would you come by and rebuild, as you mentioned? That's why it becomes accidental infrastructure.

**Jerod Santo:** I mean, the metaphor falls apart, because we can clone and fork these things... You can't clone/fork a bridge, but to a certain degree it fits.

**Adam Stacoviak:** Right.

**Jerod Santo:** Anything to respond to that? Do you agree with that analysis? Is that how you feel?

**Dominic Tarr:** Yeah, but the thing I'd like to stress is that when I talk about paying the developers - that's actually not my first choice. I like hobbyist-style programming. I don't necessarily want that; I would rather people who depend on that code for their job take over maintaining such code. My point is just that the incentives for "Who's gonna take responsibility for this?" should be who ends up actually feeling the impact.

The problem here was that someone who wasn't interested in having that responsibility ended up with the responsibility. If people who actually needed that thing ended up being the ones maintaining that... The other thing is you can give it away, you can hand things off to someone who will maintain it, but you're still responsible for figuring out who that was, and that's what I thought I was doing when I handed it off.

**Jerod Santo:** And to speak a little bit in general - this system does work. I've seen many cases where somebody writes an open source thing, and then other businesses or enterprises come to rely on it, and the original maintainers do not use it anymore, and then the businesses or the enterprises, or whoever currently has a stake in it - they take over maintainership; this is something that happens... And I agree with you, I think that's the best for it to work. In lieu of that, when that doesn't happen, pay the maintainer if you don't want to maintain it but somebody has to... And I do see it working. It's not like it's utterly broken, it's just that there are times where things fall through the cracks and then we have issues.

**Dominic Tarr:** \[00:48:15.14\] Yeah. A lot of people who were upset about this were like "Why couldn't you just have deprecated it, or stopped maintaining it and not given it away?" and the funny thing is that's actually the decision that I was coming to, and I actually did that for hundreds of modules shortly after... But coming to that decision, when I had like hundreds of modules that I didn't want - it wasn't like a one at a time thing; it was a bulk decision, that involved writing scripts to disown all these modules. The current tools don't provide a good way of doing this in bulk. For example, I had most all of these modules off my Npm, but I hadn't archived them on GitHub yet... And I just simply hadn't got around to it. I felt that removing myself from them on Npm was sufficiently cathartic that I was like "Oh, I'll just come back and do the GitHub thing later." If I had done that before it was reported, then they wouldn't have been able to post the issue on there, and something else would have had to happen.

**Break:** \[00:49:27.11\]

**Jerod Santo:** We've talked about some technical things we can do (us as a community), we've talked about some better practices in terms of consumers of these things, as either hop in and help maintain, throw some cash at the problem - which is always nice, but harder to convince upper management to do... As maintainers, Dominic, it sounds like you hit on some of the things, which was like "What is a good practice for abandoning a project?" And you hit on -- like you said, a few weeks after you gave access here, which, in a bit of serendipity, we've allowed the community to have this conversation and really to talk about these things, so we can all together learn and realize what we should be doing about our projects that we're maintaining... One of the suggestions in our community Slack - I think Dan McClain brought it up - in terms of how it should work, or what would be a good way of going about it, is basically he says "I'm really starting to think that the model should be, if you don't want to maintain it anymore, update the readme and let it be forked. Forks have to establish their own reputation. I would hate to have my name used maliciously; at the same time, I don't feel that I need to keep maintaining something." And then he says, "Look at CanCanCan, which was a good example of a situation, where there was CanCan (this is in the Ruby community). CanCan was created and maintained by Ryan Bates, and abandoned by him when he took his long hiatus from the internet... And then the community came around and created CanCanCan, established their own reputation by improving that, maintaining that, and eventually people switched over."

That seems to make sense to me in terms of the passing of the torch. That seems like the hardest part, because in the situation where you're like "I'm just done", but there's people who still depend upon it, how do we actually pass the torch in a way that makes sense, without throwing the baby out with the bathwater, so to speak?

**Dominic Tarr:** Yeah, I mean... In hindsight, obviously, the solution is something like that. In this particular case it was just really a matter of time, and that meant that that hadn't happened. If @right9ctrl had come to me a month later, I might have been like "Sorry, I abandoned that module. I can't give it to you."

**Jerod Santo:** Which makes sense on GitHub's side, but from on Npm's side, in terms of just the mechanics of that, if there's still hundreds of thousands of dependents out there, with event-stream in there package.json, how would they know it's abandoned, how would they be able to come back and see "Okay, here's a new one. It's event-stream-SomeNameSpaceOfaNewPerson", and then maybe eventually switch over... Are those things that are unsolved problems at this point?

**Dominic Tarr:** There is a deprecation option, but I never really felt like deprecating something. The code worked, it was fine; nothing really needed to change, so it didn't really feel right to me to deprecate it. Just leaving it as it was was just fine. It still worked; I hadn't really changed it. It didn't need improvements.

**Jerod Santo:** Well, let me throw out a hypothetical then. Let's say that event-stream is out there on Npm in its current version, and it's just fine. And then some sort of dependency of event-stream has an issue, and the Npm security team detects it and goes out and says "Okay, everybody who depends on this version of event-stream - you're gonna need to bump your version up." So event-stream needs to be patched, basically. That's the case, right?

**Dominic Tarr:** That's when someone needs to fork it.

**Adam Stacoviak:** There's other issues around that, though... Being able to adopt eventually an abandoned package name, too. Assuming event-stream was a super-cool name, it's abandoned, there's a way to flag it as abandoned; after a while, someone -- I guess the smaller, less concerning issue is that. Because this has been talked about when Kik, Left-pad and all that stuff happened.

**Jerod Santo:** And what if I wanna name my thing Kik? Then what do I do?

**Adam Stacoviak:** \[00:55:58.10\] I guess you have to sue somebody.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** You know, you might wanna take over the abandoned name, or something like that, but that's what I was thinking - I was like, if you could just allow somebody... But that means claiming that owning a name on Npm becomes far more valuable. Because if you're claiming to own it originally, even if it's not used... I mean, obviously, Npm could do whatever they want to circumvent those rules as well, but they kind of inch back into some sort of policing model of the community, and what is and is not allowed, so they become more and more vulnerable to attacks of their choosing, by just basically how they choose to run things.

But in this case, if there was a way for Dominic to say to Npm, "Hey, I want to abandon this. Let me attach an Abandoned flag..." This is what you're saying, Jerod, where the dependency tree now knows that, so as I ever use this package or dependency, then I'm somehow made aware, like "Hey, this dependency you have in your tree has been flagged as abandoned on Npm. There may be something you wanna look at here, and/or look for a fork, and/or create your own fork, and begin a new line of trust." What you're saying is that if that's the case, then this abandoned version is cemented in stone and frozen forever.

**Dominic Tarr:** So let's say I had just been like "Okay, I've abandoned event-stream." If that somehow prompted the users of event-stream to update, then that would actually be a prime time for the attacker to come along and be like "Oh, I'm maintaining a new fork of event-stream. I'll respond to things, and users, that sort of stuff", and people then opt into that. You could pull off the same kind of thing there.

**Jerod Santo:** Yeah, you're right.

**Adam Stacoviak:** Don't you think that's the case though, that that would be seen as like, hey, the same model comes back into human choices, which is, you know, to part one of your statement in your readme was basically like "Hey, make sure you trust the maintainers." That would go back into rule one at least, based on your two strong solutions - a human should trust this new fork, and there should be reasons to, and that's a brand new opt-in, a brand new line of trust, and a brand new line of synchronization, versus this inherited one.

**Dominic Tarr:** Yeah, but continuing to use the abandoned code might actually be better, unless an update was really needed. The funny thing is like, compared to the one last year, the WannaCry worm - that was a hack that only affected people that hadn't updated their code. This one was one that only affected people who had updated their code.

**Adam Stacoviak:** Well, you're screwed either way then, I guess... Updated or not updated.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** You're here, in the wrong.

**Jerod Santo:** We're all in trouble...

**Adam Stacoviak:** That's right.

**Jerod Santo:** So this leads to a follow-up... Just as an end user of dependencies, as a developer, I've always looked at dependencies with two extremes. On the on extreme you have dependency hell, where it's just like "Pull it all in, all the time. I don't write my own code, I'm just gluing my dependencies together, to cobble something together." The other side - we have the pristine Not Invented Here syndrome, where it's like "I know every single line of code in this thing, and I've written every single line of code." Those are the two extreme angles you can take at dependencies.

I've always said it's a balance, it's a trade-off, you have to make these decisions with as much information as possible, but the older I get, the more I'm starting to err on the side of Not Invented Here syndrome, because it seems like the trade-offs to having more dependencies is worse than the trade-offs of having to write some more code myself. What are your thoughts on that?

**Dominic Tarr:** Well, I have been accused more than a few times of Not Invented Here... But at the same time, there's a lot of things that I am satisfied with someone else's solution, and have used that instead.

**Jerod Santo:** What are some of the heuristics for you? What are the things that make you satisfied? Is it a personal relationship with the maintainer, or at least maybe a reputation of quality, or is your own inspection of their code? What makes you more comfortable than less comfortable?

**Dominic Tarr:** For things like, I didn't create JavaScript, that problem is too big to handle and here's a good thing that does it. One is like if it's a small thing that I could do, I would end up looking for a whole bunch of options, or something; I would evaluate them in terms of "Is this sufficiently compatible with my opinions? Would I do it the same way? Does this make me really mad, or something like that? Is this some stuff that would just be a pain in the butt to create myself, like time zones?"

**Jerod Santo:** \[laughs\] Well, time zones are easy, what are you talking about? Just kidding.

**Dominic Tarr:** \[laughs\]

**Jerod Santo:** It's the bane of every programmer's existence - time and timezones.

**Adam Stacoviak:** That's right.

**Dominic Tarr:** Yeah, and it's especially worse if you live in New Zealand, because you're constantly dealing with people--

**Jerod Santo:** You're an edge case.

**Dominic Tarr:** Yeah... With people in other time zones. And the Northern Hemisphere one is fun too, because you go in and out of daylight savings at different times, so between say California or New Zealand, there's like four different possible differences... You can both be in daylight savings for a bit, and then you're both out of it, and then one of you is in, another one is out... So you change how many hours you are apart multiple time throughout the year.

**Jerod Santo:** Ugh...

**Adam Stacoviak:** I don't even think I really understand daylight savings time. There's times I think I understand it, and then there's times like "No, what you thought was daylight savings time was not --" So I just don't even know. I just know where I'm at. This is my time right now. What's your time right now?

**Dominic Tarr:** It's one of the worst ideas ever.

**Jerod Santo:** Oh man, and there's certain small precincts, geographic areas which will not abide by it, like states, or cities, or countries...

**Adam Stacoviak:** Right. It's like, do you even understand time, and the Earth's rotation, and the things that actually calculate that, and the things that have been established scientifically ages ago to make time time, and us being in sync with what we think time really is... Yeah, it gets really deep.

**Jerod Santo:** Well, time zones are political, and political things change with new administrations, and so...

**Adam Stacoviak:** That's right.

**Jerod Santo:** It's a complete mess. Well, one thing we haven't asked yet, and we did mention at the top, Dominic, that it was a lot of conversation - this has been THE big topic of the week, around these parts... So I think that's a good thing. I'm curious about you personally - it sounds like you've taken it all pretty well, but no doubt there were some people that were mad, or were criticizing what you did... "Why couldn't he have just done this? Why did he do that?" I'm curious what your overall feelings are with regard to the way the community has received this, the way it's gone... Have you gotten a lot of backlash? Do you feel attacked? Do you feel loved? How are you feeling?

**Dominic Tarr:** I've received many personal messages of support from old friends, and other open source developers, and sometimes random strangers who had admired my work, and stuff like this, so... I really felt quite boosted overall from that. They certainly gave me the confidence to use this to draw attention to what I feel is the plight of the open source developer, and what are the systematic ways that something like this can be approached and addressed.

I think the way that I've been very determined to shirk responsibility for actually \[unintelligible 01:03:28.06\] It made them way more upset.

**Jerod Santo:** \[laughs\] You were very nonchalant about it all...

**Dominic Tarr:** Yeah.

**Jerod Santo:** ...which to me was refreshing, because I could tell that you were kind of cool, calm and collected about it, and just this situation. The conversation around this being a fun project for you - "I think that was fun. It was no longer fun", and that's what you said in your statement, "If it's not fun anymore, you get literally nothing from maintaining a popular package." That's just the cold, hard facts.

**Adam Stacoviak:** \[01:04:03.19\] You can't be or act guilty if you're not guilty, right? If you don't have a guilty conscience in the scheme of this, then you're not gonna run around acting guilty or feeling guilty.

**Jerod Santo:** Yeah.

**Dominic Tarr:** Yeah. We're kind of weird to people who enjoy programming for fun, but there's still quite a few of us out there, and lots of them are my friends, so I felt like I was speaking for these people.

**Adam Stacoviak:** As Brett Cannon said in that recent episode, Jerod - I forget which number it is; help me out if you can - open source maintainers owe nothing. I believe that's somewhat a direct quote. Correct me if I'm wrong; we can pull up the transcripts and confirm that, but... Just basically like, you know, the maintainers of projects haven't signed on for a "We'll maintain this, we'll be responsible for everything in this forever." It's in their good interest and their heartfelt interest to create in open source in the first place, and it's your choice to use it, so they owe you nothing.

**Dominic Tarr:** The other thing I want to say is like, on one level, creating open source is fun, challenging, interesting technical problems, but also the social side of it. So for the most part, you're just solving problems with friends and helping each other out, and no one is the boss of anyone... So if you want to get things done, you can persuade people. And sometimes people get wound up and there's strong emotions because it's things that people feel strongly about, but on the whole it's a very rewarding kind of node of interaction, and I wish that more of life gave you the ability to effect change on things that affect you like you get in open source. I think that's a big part of why I've continued to do it for the best part of the decade.

**Jerod Santo:** Absolutely. Dominic, we just wanna say thank you for all the work that you have done. No doubt, you've brought lots of value to lots of people, countless people around the world that you've never even met, and the beauty of open source - all these modules on Npm, the work that you're doing in the Javascript community... Hey, we definitely want to get you back to talk about Scuttlebutt and the interesting stuff there. Talk about hacking with your friends - this seems like a very cool kind of offline social networking thing happening, which is very much in the spirit of what we like to cover on The Changelog, so we definitely want to have you back, but... We're happy to have you, we're glad you joined us, especially on short notice, to talk about this situation.

Any last words from you with regards to event-stream, or what's happened, or anything else you'd like to say to the open source community before we let you go?

**Dominic Tarr:** Yeah, I think despite all this, open source is a great idea and we need more of it, and more sharing, not less. If we let things like this make us too suspicious of each other to share and collaborate, then the terrorists win, and that would be worse than being hacked occasionally.

**Jerod Santo:** I think that's a perfect note to end on right there. Dominic, thanks for joining us.

**Dominic Tarr:** You're welcome.
