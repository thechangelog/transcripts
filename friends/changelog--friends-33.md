**Nathan Sobo:** How are you guys doing since we last talked?

**Adam Stacoviak:** I would say -- gosh, how long has it been?

**Jerod Santo:** A year, roughly...

**Adam Stacoviak:** One year. I would say this year is better than last year, in several ways...

**Jerod Santo:** How so?

**Adam Stacoviak:** Specifically, I would say I feel more positive about the life of our business... It was challenging last year. It wasn't the worst ever, but it was definitely challenging. I think as an indie media company, we thrive on brands that want to sponsor our content... But then I think it also curtails into brands that want to sponsor our content and get value. So I think that value part is super-crucial. And the alignment is even more crucial on who we speak to, and giving value back. So I think on that front -- but I think at the same time, on the same flip side, on the "non-business side", the business of the business, which is producing podcasts, I think we've just gotten better. Friends has been amazing... Jerod, you've been stellar on Changelog News. It's got a great following, it's been consistent... I think in a lot of ways our network is growing. We did 9 million listens across the network in 2023. I think we'll do almost 11 if we keep the same momentum in 2024... We brought Ship It back this year with Justin and Autumn, it's already doing well... There's definitely some improvement we always do, because hey, Kaizen, right? We're kaizening our platform. Changelog.com is open source. There's a lot of people contributing, there's so many people in Slack, a lot of conversations happening, we're hitting the fringes and the edges of "software and business intersections", where we're talking about homelab, we're talking about, you know, just lots of fun things. It's crazy.

**Nathan Sobo:** Can I interrupt to ask a question about something that particularly piqued my interest?

**Jerod Santo:** Sure.

**Adam Stacoviak:** Yeah. Always interrupt.

**Nathan Sobo:** Your use of the term Kaizen, which I'd only heard a little bit like in the context of -- I read a book about agile, and I guess they talked about like lean manufacturing...

**Adam Stacoviak:** Yeah.

**Nathan Sobo:** And this word Kaizen, which I think they'd said meant continuous improvement... But it sounds like maybe you've gotten a little deeper on that word than I have. It did intrigue me at the time, but I never really followed up.

**Adam Stacoviak:** Well, we have to thank Gerhard for that, because Gerhard helped us learn -- I don't know about you, Jerold, but I learned it from Gerhard.

**Jerod Santo:** Yeah, I had never heard it before.

**Adam Stacoviak:** I learned about Kaizens through Gerhard. And Gerhard's been working with us since 2016. He's been our "SRE in residence", but he is very much in charge of Changelog infrastructure. Jerod and he worked together quite closely, but in many ways Gerhard is the lead on that front. Now, they obviously collaborate, and there's collaboration - when you collaborate, right? Collaborate and listen... \[laughter\] But Kaizen I think for us has become like DNA, right? Because it is continuous improvement. It's always be improving. It's this embracing the fact that there is room to always improve. And to be less like "Oh dang, what we deployed sucks", or "What we're doing sucks." It's more like "No, it just needs to be improved." And I think Kaizen for us has become a DNA factor, really. I don't know how you'd describe it, Jerod, but that's how I'd describe it. It obviously means what it means in Japanese, but I think for us we've taken it deeper than that, where it's in everything we do. We always look at like not where do we suck and where do we fail, it's more like "Where did we not do so well and can improve?"

**Jerod Santo:** Right. Yeah, I feel that. I think that we also have a regular -- not a segment but an episode, a Kaizen episode that the three of us do together... And that's where we kind of review what we've improved upon in the last two and a half months. Either on the episodes, or around the infrastructure, how we're collaborating. And so we've kind of formalized it in that way. We have a thing called Kaizen that we do. And it's kind of like what a stand up or a retro would be, I guess. But just as a podcast episode, we also just hang out and chit-chat. So we're kind of bringing our community and our listeners along on the journey of what we're up to; not just doing the shows and the interviews, but we're definitely just doing that continuous improvement thing that the word means, and that came out of - yes, that movement that you're talking about.

\[06:25\] So Gerhard introduced us to the concept. And as people who are already in fans have iteration, and having to always remind ourselves that progress is more important than perfection, because we are perfectionists, and we tend to not ship stuff, because we're waiting till it's perfect, Kaizen has been really good for us, because -- especially with this regular show upcoming, it's like "I've gotta do some stuff, because there's a show and we're going to talk about it. I've gotta have something to talk about." But as software developers even just that -- I mean, we all talk about that fast feedback loop, and how important it is, and that's what Kaizen is all about... Like, "This isn't perfect, but let's ship this, and then iterate and improve and continuously do that."

**Adam Stacoviak:** Yup.

**Nathan Sobo:** Yeah, I tend to wait longer than a lot of people... Like, I have a longer time horizon, I guess. I've always felt guilty about like "Okay, it's not there yet."

**Jerod Santo:** Right...

**Nathan Sobo:** I even was met with some skepticism around open sourcing Zed, of just "Why not do it sooner?" And maybe it would have been better, I don't know... But I just fall back on "Well, what do we want to express in the world?" But that can't be perfection, because that's not realistic. But it can be like pretty good...

**Jerod Santo:** That being said, you're releasing new versions of Zed constantly. I mean, sometimes twice a day, I've seen.

**Nathan Sobo:** Yeah... I mean, when they're more frequent than a week, it's because we're fixing something. So it's not always great. But yeah, the cadence that we're shooting for is a week. Zednesday is what we call it internally. \[laughs\]

**Jerod Santo:** Better than Friday, I guess...

**Adam Stacoviak:** Zednesday. That's awesome.

**Nathan Sobo:** Yeah, the idea is if we ship on Wednesday, then if we've shipped a regression on preview, we've had a couple days to discover it at the end of the previous week, and then we have a couple of days to fix it, or worst-case scenario we could \[unintelligible 00:08:16.03\] weekend... And that just felt like natural. Because we're shipping a binary, so it's not like we can just push a change to the server. It's a pretty heavy download to ask people to do... So that's why I think it makes sense to do that like Railcar setup, where you've got a week on preview to discover regressions, and then -- anyway, to minimize it, but... Yeah, I guess we're still putting out a lot of binaries, which is \[unintelligible 00:08:44.25\]

**Jerod Santo:** Yeah, totally.

**Nathan Sobo:** Yeah.

**Jerod Santo:** So how do I know if I'm on preview or not? Because I feel like -- and I'm now a daily Zed user, by the way; you've got me, you've got me. So congratulations.

**Nathan Sobo:** That's awesome.

**Jerod Santo:** You've got a user.

**Nathan Sobo:** I'm happy to hear that.

**Jerod Santo:** Last year when we had you on the show, I downloaded it, I checked it out, and I thought "Okay, lots of potential." It had a few things that bugged me about it. Of course, everything that's new does, because you're used to what you're used to... And new products tend to have missing things. And it wasn't open source yet, and I have a little bit of like hesitancy of like "Well, will this disappear when the company fails?" Because many startups do...

**Nathan Sobo:** Yeah, of course.

**Jerod Santo:** And so I just kind of set it aside, went back to my regular stuff. And then when you did open source it, a few weeks back, I was like "Alright, good job, Nathan. Now it's time to give it another go." And the thing about continuous improvement and iterating is, as you go day by day, you don't really see the massive improvements, but for me as a guy who was gone for a year, and then I updated Zed, I was like "Oh, wow. You all have done a lot." So I was very surprised and delighted to a certain extent with what it's like now. So that's cool.

**Nathan Sobo:** Really happy to hear that.

**Jerod Santo:** I'm loving it. I've got feature requests... \[laughter\]

**Jerod Santo:** \[10:01\] I'm sure. Yeah. I mean, speaking of Kaizen... But the cool thing is, is I know we can get there. We all care so much about getting there, because it's our frickin' editor, too. It's not even about the company. It is, but it's also just like, it's my editor, and I want it to be better in a million ways. And yeah, I think I probably lamented this in the last show, that it can be tough to decide which of the million things is the most important to work on first. That's like a continual struggle. But I know performance is something that I've always been happy investing in. Just figuring out the stupid stuff... Did you see that video that Theo put out? And he's talking about like janky scrolling, and I'm just like "What are you talking about? I've never experienced that."

And so - yeah, Antonio was like beside himself... So we actually looked at it on Theo's computer, and it was totally different than what we were experiencing. And we realized on M2s Apple runs windowed apps in direct mode, and in direct mode there's some nuances around how like frames are synchronized... And so it kind of prompted this digging into our frame synchronization and understanding that all better... But the output of that was like it runs better in direct mode, or composited mode... Like, it just runs better across the board, because we were prompted by that being terrible to actually fully understand it.

**Jerod Santo:** Right.

**Nathan Sobo:** I don't know, kind of getting back to that Kaizen idea... Yeah.

**Jerod Santo:** Yeah, that kind of stuff makes me so - I don't know if nervous is the right word, but it's like, you happened to realize it was Theo's computer, because he has a voice and a following... But so many people try Zed, and you don't get to hear from them that they had that experience. And it's like, how many environments are you failing people potentially? And that first experience is so crucial. There's a lot of offerings, there's a lot of good editors out there. I might try something and be like "Meh", and it might never get a second chance with me. Now you did, because we know you, and also, we were urging you to open source that last time you were on, and we know that you were thinking about it and waiting... And so you impressed to a certain extent the first time, because it felt a lot like what I'm used to, which is Sublime Text... But when you got that second opportunity -- and it was always fast for me. I didn't have that thing. But there's so many people out there that you just don't even know about. It's like "What was their first user experience? And how could it have been better?"

**Nathan Sobo:** I know. We had another silly thing were we didn't staple some apple certificate that they returned to us, or something during our certificate signing process, which I probably set up and did wrong in the first year of working on Zed... And I think it was causing the app to need to like contact Apple servers or something after a system restart on startup. And it's like, that makes our startup time look awful. But that's not anything to do with -- I don't know, it's just this silly little, tiny thing that can just destroy the experience. Anyway... But we fixed that too, so now \[unintelligible 00:13:22.23\] although we've still gotten some reports... So yeah, it's tough. And it's tough when it's like -- yeah, I mean, I'm used to it luckily from the Atom days. It's running out there in the wild, a little far from your eyes and control.

**Adam Stacoviak:** Right. Do you have telemetry? Do you desire telemetry?

**Nathan Sobo:** \[13:45\] Yeah. We have telemetry. We try to keep it low-key, because we know that developers especially I think are sensitive to that... So we'll send -- you know, when you're saving a file or loading a file, we'll send like a file extension, so that we're getting an understanding of what people are editing, what is the retention rate looking like across different languages... And there definitely are differences, areas where we have more room for improvement. But yeah, I don't know. So we do have some telemetry. And you can look at what we're sending in Zed. I thought that was helpful.

**Jerod Santo:** Oh, really?

**Nathan Sobo:** Because it would be helpful if people leave it on. And the hope is, if they can see exactly what we're sending, then they're more likely to leave it on.

**Jerod Santo:** That's cool. How do you see it? Oh, I see it. It's in the Help panel.

**Nathan Sobo:** Yeah. And obviously, we opt in or out at startup, or like the first time... So yeah, we have that, but we need to collect more. Something we don't have yet that I would love is just like -- I want a histogram of frame times across the entire Zed fleet, so that we -- like, we don't have that yet, and we should have that, so that we can spot "Oh..." And that's not everything. Frame times - yeah, that's what we discovered with the Theo issues, is like, our frame time was fast as hell, but on a ProMotion display, if you don't render a frame 120 times a second, they'll drop your frame rate. And so we weren't keeping the display hot, spun up around typing. But now we do. So now it's like, if you type a key or have any kind of input for - I think it's a second; and that's something we could tune, but a second - we'll just render like dummy frames on every single time the display prompts us... And that makes sure that as you're typing, you're at that max refresh rate. So you're gonna have the minimal latency of seeing pixels based on a keystroke. But yeah, again, it's like, we were rendering the frames really fast, but we still weren't -- the display wasn't asking us for them quickly enough.

**Jerod Santo:** Gotcha. So that makes me think about other architectures and displays and stuff, because we're talking about idiosyncrasies between different Mac hardware. And that's probably the least of your problems in the long run, isn't it? I mean, you're gonna go -- aren't you gonna go cross-platform? I know web is going to be a target, I know Linux is on the roadmap somewhere...

**Nathan Sobo:** Linux is happening right now. Yeah.

**Jerod Santo:** Okay. And so you're gonna open up to tons of different environments after that, right?

**Nathan Sobo:** Yeah, I know. And it's a little frightening... But I don't know, it's also open source, and we're getting a bunch of community support... I don't have raw numbers, because I'm a little distant from it, but a bunch of community support on the Linux stuff, and then a couple engineers, kind of between two and three have been working on it for like the last few weeks.

A big task is we use -- they're really cool. I mean, I think a lot of Zed wouldn't be possible without them. LiveKit - I don't know if you've ever talked to Russell...

**Jerod Santo:** No.

**Nathan Sobo:** They have an open source client, they're like a WebRTC as a service, basically... And porting that piece to Linux is a little more challenging. And that's not something we can expect the community to do, so we're sort of sinking engineering time into that, and then guiding community efforts. But the guy that wrote blade, and WGPU - God, what's his name? Anyway... He's been working on a whole graphics backend for \[unintelligible 00:17:31.06\] that seems like it's going pretty well. So that's just the virtue of being open source. Hopefully, all these idiosyncrasies will be somewhat discoverable by lots of people that are engaged technically, over time.

**Adam Stacoviak:** Lots to manage. Is the team that you have in place now at Zed - are a lot of users on Linux already, so they can be sort of first-class citizens in terms of wanting to have Zed on Linux, so they are Linux users? What's the percentage?

**Nathan Sobo:** \[18:09\] The individuals that are working on the Linux stuff - Mikhaila at least has a Linux machine, like a good Linux machine... And I think she's kind of working -- her goal, I think, is to be on Linux. And I think the same is true of Julia. They both want to be on Linux. They've been on Mac grudgingly, because that's the only platform we shipped on, which is just because I'm on a Mac, and that's where we started... But I think as soon as they -- and there may be other people. I don't know what Kirill ultimately would want to do... I'll probably stay on Mac, just because I don't have time to learn a new way of doing things at that layer right now... But we'll have members of the team on Linux for sure.

**Adam Stacoviak:** Yeah. I just wonder how much -- because when we talked last time, I think I'd mentioned... Because we talked about Sublime Text quite a bit, because at least then you were Mac-only, and obviously now you're not Mac-only, so you're crossing the chasm from Mac to Linux... And we already talked about ProDisplay, and display idiosyncrasies and all that stuff... Like, it's just one more layer of essential pain that you can bring on yourself, like "Is now the right time?" Obviously, eventually it makes sense, but is there a large Linux -- and I'm a Linux user, but not a Linux desktop user. Is there a large Linux desktop user that's aching for Zed?

**Nathan Sobo:** Yeah, it's a good question... But I guess for me it's like people have shown up to help. And they're trying to contribute this work to Zed... And I guess I just want to honor that. And I actually think there are a lot of - especially Rust developers that use Linux, which is like an important and demographic for us, because we're written in Rust, and all those developers are in a position to contribute to us... So I don't know, it's a good question. Is it the right time? I think I got sick of saying no... And I do genuinely want to be multi-platform. And the best way to be multi platform is to be multi-platform. Like, just figure that out and amortize the cost of it.

**Adam Stacoviak:** Is that true?

**Nathan Sobo:** But yeah, I don't know that it's the right decision --

**Adam Stacoviak:** No, it is true. That was a rhetorical question, really. It is true. I agree with that. That's the logical way to get to multi-platform, is to be multi-platform.

**Jerod Santo:** Well, you could have went windows, you could have went Web...

**Adam Stacoviak:** True.

**Jerod Santo:** \[unintelligible 00:20:35.05\]

**Nathan Sobo:** Yeah. And what I liked about Linux is it's open source. We're going open source. I like supporting things that are open source... I don't know, I've had people - I'm not gonna name names - who were like "You will get nothing out of going to Linux." They could be right...

**Adam Stacoviak:** Dang.

**Nathan Sobo:** I don't think it will be a fatal mistake... And if we find out that we don't have any Linux users, or the ratio of neck pain to user growth is wrong... Like, I don't know, we can always say "We don't have the bandwidth to support this as a team." But I'm hoping that we'll build some solid contributors that are on that platform, we'll have a couple engineers on that platform, we'll solve the major problems... I know there's Wayland versus X... I don't know. Yeah, it's potentially a very long tail, I think, is one of the challenges.

**Adam Stacoviak:** The way I may ask that question for myself if I was in your position would be "What does it take to get to Linux respectfully, in terms of what you plan and desire to accomplish with Zed, with its promise of being fast, and all the things that we know it offers?" But then what's the delta between doing that and getting to the business goals of Zed? Because Zed is now open source, that is a great thing... I think we said last time that was probably the smart way to do things... But I'm still sort of unclear on your business model.

\[22:05\] And so if you've got to take on more - not really technical debt, but more technical responsibility, which I suppose can lead to debt... How do you weigh that against "Okay, is Linux the right way?" I think having Rust users and a large majority of Rust users being Linux desktop folks does make sense. So I agree with that. But what is the delta between what it takes to get to Linux respectfully, and the business goals that's required to keep Zed the company alive?

**Nathan Sobo:** I don't know. I don't know that I fully even understand what it's gonna take to get to Linux... But I think we can get there within low-single-digit months of a fraction of the team, and then we're going to see what the ongoing maintenance cost of it is relative to its value.

In terms of the business model, what we're focused on right now is adoption. So adding a second platform opens up a very large number of potential users who might be interested in it. So it serves that goal. And community development is another business goal we have right now.

In my mind, again, the nature of a company is -- obviously, we do need to become profitable and have a plan for becoming profitable... But every venture capitalist knows how large the market is of developers, and how valuable that market is... And so right now I think we just need to stay focused on getting adoption. I'm happy to take people's money, and one thing we're thinking about is just like at least giving people a good out-of-the-box code gen experience to use LLMs. And that's something we could offer like a trial for, for example, just so that people can see it. And then it's like, you get to the end of the trial, or you get to the end of the fast usage, and your rate limit is constricted, and now you can like decide to go to Open AI and sign up, and get an API key, or bring your own local model... Or if you want to just give us your credit card, we'll take your money there.

But it's not really our key focus right now, is like generating a ton of revenue. I think the key focus is like "Let's build the community and get a ton of users using this thing", so that we can like respectfully offer those users things that integrate with their workflow, and make them more productive down the line. And I hope I don't turn people off with that, that we are planning on eventually offering facilities in our flagship build... But hopefully it being open source gives people the reassurance that if we're too annoying about that, you can always build it from source, or get it from somebody else. But I think we're gonna be able, with the collabs stuff -- like, we've been hanging out with members of the community. It's been small, but we're just in these channels, coding... Like, it's happening right now. There's a couple of people working on Vim, Conrad and a member of the community... And it's like - yeah, it's been so cool just to... Even watching members of the community that we've granted write access just pairing with each other and not even involving us.

So I think on that front, the AI front or some unknown front, there'll be something that we can sell to developers. I was glad you mentioned that, because I was referencing our transcript, Jerod, where you mentioned... If you want to search this, it says "The collaboration part", the social coding part. And Nathan, you responded by talking about how you're not trying to compete with GitHub. I think the conversation was around how these channels and this collaboration might circumvent the need for a pull request, because there's this real-time collaboration happening... And I think that's really interesting, because that's what we really gravitated towards the end of the conversation, was how interesting it could be to have these real-time collaborative coding sessions inside the editor. Can you talk more about - like, when you referenced this channel, what exactly is a channel? How do you get granted write access to things? What are some of these terminologies? If a listener is listening to this and they go pick up Zed, how do they interact with channels? What is that to an everyday user? What is that to you all and how you've been using channels?

**Nathan Sobo:** \[26:23\] Yeah, so we use channels as kind of our virtual office. And they're just places to share projects, audio... They're places to collaborate. And we structure them in a tree. We're still figuring them out as well. It's a bit of a rough area, but we're using them every day. In the lower left there's a little People icon... And if you click that, that's sort of your channels panel. And so you can create a new channel, or you can go to the Zed channel. I don't even know if we have that in there by default...

**Adam Stacoviak:** I don't see a Zed channel personally. I do see you...

**Nathan Sobo:** Yeah, because I'm a contact of yours. Yeah.

**Adam Stacoviak:** How did you become a contact of mine?

**Nathan Sobo:** Probably when I originally sent you like the invite to the Zed alpha.

**Adam Stacoviak:** Okay. Is he a contact for you too, Jerod?

**Jerod Santo:** Yes, he's online. I also see the Zed channel...

**Adam Stacoviak:** You do see that channel? I don't see the Zed channel.

**Jerod Santo:** Well, I might have clicked on that because I think in your open source announcement you talked about the fireside hacks, and how it was gonna be a Zed thing... And so somehow -- I was excited by that. I missed it, so I didn't get to see it, but I was like "Oh, cool. It seems like a cool concept."

**Nathan Sobo:** We need to start doing more frequently, but there's just -- yeah...

**Jerod Santo:** Anyway, so then I think that's when I somehow added the Zed channel in preparation for that, but I never actually followed through.

**Nathan Sobo:** Engaged with it. And we need to do a much better job explaining you what the hell this thing is, and...

**Jerod Santo:** Yeah. I honestly --

**Adam Stacoviak:** Well, that's what this podcast is for, you know what I'm saying?

**Jerod Santo:** I'm excited about channels, but when I click over on that tree over there in the Collab bar, I don't know what's going on. So...

**Nathan Sobo:** Yeah.

**Adam Stacoviak:** Could you invite me to the Zed channel right now? Would I see it real time if you invited me to this channel? Is that a thing, you invite folks to channels if you create it?

**Nathan Sobo:** Yeah, I can just copy a link here. Let's see. Copy channel link. I'll paste it to you... Does Riverside have a chat?

**Adam Stacoviak:** I'm just curious how it works.

**Jerod Santo:** Yeah, there's a chat.

**Adam Stacoviak:** There's a chat session here, yeah. So I'm gonna click this link... It's zed.dev/nightly/channel. I won't read the rest, because you might want to keep that private. I don't know if you are or not, or how you're working with it...

**Nathan Sobo:** No, it's fine. Yeah, this is public. Anybody can come here. But it's in this nightly format... Can you just take nightly out of that URL? I'm so sorry. That's annoying...

**Adam Stacoviak:** That's okay. This is trial by fire right here. We're seeing how channels works in real time. I like this. See, I think as I'm doing this, feedback might be, since I'm already a contact, just simply add me inside of Zed, and not have to interact with the link... So that I just immediately see the channel.

**Nathan Sobo:** I know. We should just add every Zed user to the Zed channel and make it easy to delete...

**Adam Stacoviak:** Okay, I just heard a little ding, too. So I don't know what happened there, but I heard a little thing, as of now I'm part of something else. So let's see what happened.

**Nathan Sobo:** Oh yeah, because now you are actually in the Zed channel. So I can go in there, too.

**Adam Stacoviak:** I do see you now.

**Nathan Sobo:** Obviously, we're talking in Riverside, but you might hear me twice...

**Adam Stacoviak:** I do hear you twice. This is so freaky, y'all...

**Nathan Sobo:** I'll mute myself.

**Adam Stacoviak:** Thank you. \[laughs\]

**Nathan Sobo:** And then I'll share my project. I want to show you this A/B tree...

**Adam Stacoviak:** No one's seeing this, by the way. So they're following via audio only, they're not seeing this necessarily...

**Nathan Sobo:** Okay.

**Jerod Santo:** And I will confess that I am not even following, because I think I'm in a Zed channel, but mine's just empty, and it says Unshare... Like, I can unshare --

**Nathan Sobo:** Yeah, you're probably --

**Jerod Santo:** Did I create my own local Zed channel that's not the actual Zed channel? I feel like that's what happened. Like, it's just me here.

**Adam Stacoviak:** Yes.

**Nathan Sobo:** Weird.

**Adam Stacoviak:** I can narrate for you, Jerod, to some degree...

**Jerod Santo:** Well, let me click -- no, give me a second. I'm gonna click the link --

**Adam Stacoviak:** Just remove nightly from it and go to that link.

**Jerod Santo:** Yeah.

**Nathan Sobo:** Take nightly out, while you're at it...

**Jerod Santo:** \[30:10\] Yup, I did it. I'm launching Zed... Okay, I've got two Zed channels. So yes, I had my own personal Zed channel previously...

**Nathan Sobo:** Nice.

**Jerod Santo:** ...and now I've got a bunch of stuff going on. Hello...

**Adam Stacoviak:** And now entered Jerod in there, too. I don't hear you, but I do see you. I see your icon, at least.

**Jerod Santo:** I'm in there. Alright, keep going, Nathan. Describe to everybody what's going on.

**Nathan Sobo:** Okay. So anyway, there's some rough edges around the UX, that we will iron out. But the idea is that -- so you should see up at the top of the Channels panel, under My avatar, there's like a Zed folder hanging off. Or maybe you're both already following me... So here I am in this balanced tree, right?

**Jerod Santo:** Yeah, I'm following.

**Nathan Sobo:** So you'd have to sign the CLA, and we don't have that integrated into the app right now. But that's all coming. And we're also -- wait, maybe I actually can... Oh yeah, I can grant you mic access, but I think in order to grant your write access, you have to sign the CLA, and that's not baked into the product; that's too annoying. But that's how hard it is, which is too hard, but you can envision us smoothing down some of these rough edges, to just like write code with somebody. Even if we want to talk about this code, it's just much better for you to be able to say "No, no, what about this?" Or you could gesture, you can navigate around... Anyway, that's how we've been engaging with a small number of Zed community members that have right cleared some of the rough edges...

**Jerod Santo:** Right. So I'm looking at balancedtree.rs, I see you moving stuff around. Am I looking at a Zed repo that's on your machine, or is it somewhere...?

**Nathan Sobo:** Yes, exactly.

**Jerod Santo:** Okay. I'm looking at yours. So --

**Nathan Sobo:** And you could actually open any files you wanted, etc.

**Jerod Santo:** And so I'm collapsing, I'm folding line 315. Do you see that also?

**Nathan Sobo:** I don't see your folds. I do see -- yeah, I see Jerod Santo on line 322 here.

**Jerod Santo:** Yeah, I'm there.

**Nathan Sobo:** Great.

**Jerod Santo:** But I don't have write access, so anything I do is just like changing my view of the current file, basically.

**Nathan Sobo:** I think so. Can you edit?

**Jerod Santo:** No.

**Adam Stacoviak:** I cannot edit. I tried to make it trees versus tree, but... You know.

**Jerod Santo:** Actually, when I tried to edit it, it said "You don't know Rust. Get out of here." Nah, it didn't say that, but it probably should have.

**Nathan Sobo:** Yeah... So anyway, that's kind of what the collaborative experience is like. And I want to go further and further, and there's a lot, I think, that we need to add and enhance... But it at least makes it so that you can actually have a conversation in code, and have it not be annoying, where you're on a screen sharing session and you're asking somebody to navigate on your behalf... Or you're sort of WIP-committing and pushing some ref that you paste the URL to, or whatever it is... The goal is "Hey, come look at this code" and it's easier than it would be if we were in the office and you'd come look at my screen.

**Adam Stacoviak:** Yeah, for sure.

**Nathan Sobo:** You can navigate independently. Yeah.

**Adam Stacoviak:** So what just happened, to everyone listening to this - I'm not sure what they call that, because it was probably good... But when you're listening to this as a listener, you'd be thinking like "What in the world are they talking about?" Well, when I clicked, and when Jerod clicked that link, we essentially got open, we got invited into this Zed channel, where Nathan was already there hanging out, with a particular file open. And our Zed editor opened up a brand new window, in our own context, in our own screen size etc. It was as if we had our own version of Zed - which we did - opened up, but we were seeing real-time Nathan's code history on his machine... And if we had collaborative access, that we could probably code with you, we could have heard you via audio too, but you're muted it, because we were already speaking in another context via Riverside to record this podcast.

\[34:12\] So what I just saw was seemingly magical, and basically what I think the future should be when it comes to collaborative coding. Because that's -- there's nothing out there that I've seen like this. I've zoomed before with folks to code, I've done other things... Now, sure, there's probably some stuff inside of the terminal itself, maybe inside of Vim that I'm not familiar with - Jerod, maybe you are - that's sort of like this that gives you that real time stuff, but this...

**Jerod Santo:** Well, I know VS Code has some stuff similar to this, but I haven't used it, so I can't say comparatively. I'm sure there's people out there saying "VS Code does this!" Aren't there, Nathan? Or is this somehow fundamentally different than what they're offering over there with their collab?

**Nathan Sobo:** I mean, I don't know that it's -- I don't really know exactly what their UX looks like... I tried it many times quite a while ago, and I just found that it wasn't very reliable. So it was out and available when we were using VS Code to build the initial foundation for Zed, before we made our transition to Zed full-time. We never used LiveShare to do it, because it wasn't reliable enough. And to make this reliable enough, we have basically a pretty cool simulated setup, where we're randomize-testing the full network interaction, which is a cool thing that Rust makes possible, because you can basically build your own kind of fake executor that's seated by a random number generator, and try every possible permutation of any concurrent behavior in a multi-client and server interaction. That's what we're doing, basically, to ensure the reliability of it. And we still have bugs in the parts that we haven't tested that way, namely following, although following's improved a lot in the last couple of weeks...

So I think it's challenging to do well. And I also think we benefit from having thought about this use case from the get go. So in Zed every single buffer is a conflict-free replicated data type; it's basically an eventually consistent data structure, whether you using that buffer in single player mode, or multiplayer mode. It's all the same. We carry a small overhead for that, but by just implementing things as efficiently as possible in an efficient language, it works great. And we actually use some of the CRDTness, the eventual consistent nature of it, to do non-collaborative things. It's just actually a helpful data structure for all sorts of things. When the AI -- when we're doing the AI rewrite, you're not necessarily collaborating with a human, but you're kind of collaborating with something... And it's important to have that eventual consistency and concurrency-friendly design to the buffer, so that you can keep making changes while the AI is making changes. So that's paid off.

So yeah, it's designed from the ground up for this use case. It was a foundational principle. It's not an add-on. And I think it works more reliably last I checked... But people can see how they feel about it, and I'd love to hear your feedback.

**Jerod Santo:** So somebody else just joined the Zed channel and is now talking to us. Did you hear that, Adam?

**Adam Stacoviak:** I did. I had to hang up.

**Jerod Santo:** They just said "Oh, Nathan, you're away from keyboard." So I need to exit this channel, because I can't listen to both of you guys at the same time...

**Nathan Sobo:** \[37:55\] Hey Thorsten, I'm actually recording a podcast right now, and I was just showing them the feature. But --

**Jerod Santo:** Tell Thorsten we say hi. Yeah.

**Adam Stacoviak:** Was that Thorsten?

**Nathan Sobo:** The guys from the Changelog say hi. Adam and Jerod.

**Nathan Sobo:** He said "Hey Jerod, we met at Strange Loop in September, and I wanted to say hi."

**Adam Stacoviak:** Yes.

**Jerod Santo:** Awesome. This is serendipity right here. This is amazing.

**Nathan Sobo:** Alright. See you, Thorsten.

**Adam Stacoviak:** Yeah, I had to hang up too, because I'd actually joined their -- they were in the vim file inside of the Zed channel, or something. I don't know -- I'm not sure what was happening, or what I was actually clicking on in this tree... But I joined their channel and --

**Nathan Sobo:** There's a vim channel... So Conrad is hanging out in there with a member of the community, just like working on Vim stuff.

**Break**: \[38:48\]

**Jerod Santo:** There's so much potential here, Nathan... How can you work on other stuff, and not just work on this part?

**Adam Stacoviak:** Yeah. That's where I was gonna go with it.

**Jerod Santo:** Like, there could be discovery, you could like schedule hacks... People could hang out... This could replace the dev side of Twitch streaming, and stuff. There's a lot of opportunity here, and I'm seeing a nugget of potential, and like you need to polish that.

**Adam Stacoviak:** Here you are, trying to go to Linux... I mean, which is cool. Whatever. \[laughter\] That's what I was gonna say, Jerod; I see the opportunity and the potential here, and I would just be so laser focused on proving this out.

**Nathan Sobo:** That's really good feedback.

**Adam Stacoviak:** Rather than trying to skip to another platform. But then at the same time that platform, Linux, may bring the kind of collaborators and users you need to do this further. But this is the secret of all the secret sauces in your sauce.

**Nathan Sobo:** Thank you. Yeah, I mean, the challenge is just for people to want to collaborate, and they've gotta want to use Zed.

**Jerod Santo:** They've gotta be using it.

**Nathan Sobo:** And I knew at the beginning that nobody was ever going to use Zed for this feature. They were going to use Zed because it was a good code editor, the best code editor that they could get for their use case. And so that's just the balance. Like, we've been investing in this technology, this side of it quite a bit. I mean, it's definitely -- we'd have been open source earlier if we weren't collaborative like this. Like, it's been an ongoing cost... But it's just something that we've been in the habit of balancing with the -- yeah, because Jerod, you said you've been using Zed daily, and you didn't really know about this feature. And I think that's the direction it's gonna have to go, is "Oh, I discovered this because I'm using Zed, because it's an awesome editor." Not "Oh, I'm gonna go reach--" That's my fear. I could be wrong about that, too.

**Adam Stacoviak:** I think you may be wrong, personally.

**Nathan Sobo:** Okay.

**Adam Stacoviak:** I think the feature is -- well, it may not be there yet. I think it has the potential to be there, to be the attractor. So I think it is both not, and/or. Meaning that I don't think people come to Zed because it's amazing, and then discover you can do this. I think it's "Well, I can do this, and it's an amazing editor I should already be using." So I get with the collaboration where you need to have different platforms, and beyond Mac is necessary to have full-team collaboration... Because teams aren't just Mac-only users. So I get that. And so I understand why that's even the draw to Linux. But to me, if you can pull this off as good as you -- I mean, you're already using it internally. Thorsten and Conrad are already collaborating. We just essentially Zed-bombed them, I guess. Zed-channel bombed them, essentially... Because I went into their Vim channel just because I was clicking around while you were talking, "How does this work?" And I started hearing somebody, just like doing their day in my left ear. They weren't even collaborating yet, they were probably going to work, and going to work together, and that's where they go to work at.

**Nathan Sobo:** Right.

**Adam Stacoviak:** So I think there's some real potential there, and I think that it's big enough that it should be a headliner.

**Nathan Sobo:** Yeah, thanks for saying that. Yeah, I mean, it's tough. We definitely need to hire, but hiring well is hard for me. I think we've made some really good recent hires, and I've been thrilled with how the team is vibing... But it's just -- yeah. So I think we're a little bandwidth-constrained. Maybe we're spreading ourselves too thin, to your point about Linux, and I should have just said no again...

**Adam Stacoviak:** Well, it's not too late to say no. But anyways.

**Nathan Sobo:** Yeah. And we're also working on other stuff.

**Jerod Santo:** \[46:03\] Sure.

**Nathan Sobo:** Antonio, and I just ported -- that's not the right word... But we added a way of using Zed's language model integration, which I use, depending on the day and the mood etc. the thing I'm doing, I do use it pretty heavily. And it's an important feature to me. And we're adding the ability to proxy that through our server, so that we can let people experience it without all the friction of setting it up. And that's an area of like -- I think a lot of developers are like "AI is overhyped, and it's annoying, and shut up", but I think that's probably true, but also, I use it all the time, so I want that feature, and I think there's a lot of cool aspects... Just having a 150k token context window, or whatever it is, and going to town in the \[unintelligible 00:46:51.22\] system... I want people to experience that. So we invested some effort there. Yeah, it's tough to balance all the opportunity...

But yeah, Linux has never been at the top of my list, but I also -- what is at the top of my list is buying into the things that members of the Zed team and the members of the Zed community are passionate about, to some extent. I just think there's a lot of wisdom in what's between the ears of people on the ground. Yeah.

**Jerod Santo:** Plus it's your early adopters. It'll be your evangelists, right? It'll be the people who love Zed the most that are the ones talking to you right now. And I think Linux users will be -- I mean, the squeaky wheel does get the oil.

**Nathan Sobo:** They are very squeaky on Twitter.

**Jerod Santo:** Yes, \[unintelligible 00:47:39.09\] Linux users are squeaky. And so they get what they want, and now they're getting it. So there's that.

**Nathan Sobo:** And I just like to make people happy. So it cuts both ways. I'm not always the best at saying no. I'm very much like "Come on, join the party."

**Jerod Santo:** Sure.

**Nathan Sobo:** And that's overall served me well, but maybe this is a case where it's diluting our focus from the thing that Adam's excited about, for example.

**Jerod Santo:** Well, next time we have you on, you can tell us; it'll be in the rearview mirror enough a year from now, or whatever, and you can say "Actually, you guys were dead wrong. Linux was a great idea."

**Adam Stacoviak:** That's right.

**Jerod Santo:** Or you can come back and say "Adam, you were so right. Why did I do this?" Time will tell.

**Adam Stacoviak:** I don't think he's actually wrong. I think the question I would probably ask is "Do you have a flowchart to kind of large choices?" Like you said, "I want to do what the community wants, what the Zed team wants", and I would say there's an also to that, which is "Does it also drive us towards adoption?" Because adoption seems to be the pinnacle of choice...

**Nathan Sobo:** Right.

**Adam Stacoviak:** ...but at the same time, you want to satisfy the Zed community who is adopting and buying into the idea, so they're actually adopted in some -- I mean, they may not actually be even daily users, like Jerod is now. They may want to be, but they're still part of the community. Then you have your internal team that has lots of ideas as well.

**Nathan Sobo:** So if you right-click on the Zed channel and click Open Notes, this is sort of -- did you do that?

**Adam Stacoviak:** Yes, we're there.

**Nathan Sobo:** Yeah. So this is basically our 2024 objectives. I tried to be -- so the top three are sort of "Drive adoption." You can't edit because you don't have write access, I think, but...

**Adam Stacoviak:** I don't want to write it, I want to read it. I want to tell the listeners what they're seeing, or what we're seeing at least.

**Nathan Sobo:** Oh, yeah, this is public. Anybody can see this. And you can watch me edit it in real time. Like, you're seeing this?

**Adam Stacoviak:** Yes, I see that. And I love it.

**Nathan Sobo:** Yeah. So not only can anybody see our roadmap, you can literally watch me either edit it live, or if I'm feeling timid, I might write it somewhere else and paste it... But I usually just edit \*bleep\* live.

**Jerod Santo:** \[49:57\] So you're looking at driving adoption, is number one. Number two is "Discuss, plan and implement Zed in Zed, with our community", which seems like you're doing that, to a certain extent... And embrace AI. And you're certainly doing that. So you're on all three of your 2024 missions.

**Nathan Sobo:** Yeah. And so these are like ongoing themes, but then there's -- I don't know, the tough part is there's other things on our roadmap, but these are addressing hypothetically adoption as the goal. And so extensibility - this is something that we just started breaking ground on, of just like -- again, we have so many pull requests coming into Zed that we're just adding language support, because we hadn't finished the work to move that to WebAssembly. We were briefly flirting with JavaScript, but actually discovered that the -- I forget what the... It's basically a WebAssembly interface definition language or whatever, has actually evolved to the point where we think we can actually use it to do WebAssembly-based extensibility, which - I don't know, there's a lot to be said for just keeping things in one language. So that's what I'm excited about there.

But letting people bring languages... And I guess you might argue again "Well, all that matters is supporting the top-end languages." But then again, there's all these people from the community that are here trying to add support for their language, and they just can't even use Zed at all if they don't have that. So that's something that we've been working on. It's pretty dazzling, I think, when I -- yeah, so I do my best... Anyway, it's written down here. Maybe the rationale or motivation isn't fully articulated here, and I'm happy to -- I like that both you guys challenge me. Something that happened last time we talked when you were talking about how cool it would be to have 60 FPS animation, which has still been in my mind... I ever since that conversation have thought about it quite a bit. And how to use like springs, those cool Apple Spring ideas... But yeah, I haven't pulled the trigger on that yet. Although we rewrote the frickin' UI framework, so it's not like we're not investing there either.

**Jerod Santo:** There you go. Yeah. Well, you're investing all over the place. I get excited about this stuff... It's hard for me to focus right now, because there's so many areas of this product that we could talk about. I'm sure it's very difficult for you to remain focused, even with your public roadmap. I was so excited to see some extensibility land - I think it was just last week, or something; like, there's Zed extensions now... That was one of my number one things, even from last year, but from this time when I'm like "Okay, I'm gonna use this." And I am not huge on customizing and extending, I just have some snippets that I just generally have available, that I would love to just add to Zed from Sublime Text.

**Nathan Sobo:** Right. And I couldn't do that, and so I was like "Well, I'll just put them into my -- I'll go up a level and put them into my operating system text expansion. And I'll just text-expand them." And it's fine. But obviously, built into the editor is where I would love it to be. And it seems like you shipped some stuff. There's custom themes now... Like, what's out there in the extensibility world, and then what's coming?

**Nathan Sobo:** Yeah. So when we announced it, we said "We're announcing initial support for the extension registry." And I worry that some people saw that and they're like "Oh, they support a full-fledged API, that does everything you could possibly do", which is not the case. But where we chose to focus first obviously was, yeah, themes, but then also, I think more importantly, languages. So Max did a bunch of work... He would be able to speak more intelligently about how it works, but basically, delivering tree-sitter grammars in a WebAssembly packaging format... And so it's really interesting, he actually -- when tree-sitter generates a grammar, it generates basically these C arrays that are just like tables, like parsed tables, that are powering the stack automaton...

\[54:22\] And so he encodes those in WebAssembly, but actually just copies them out of the WASM into our heap, so that we can use the native tree-sitter, and then tree-sitter actually will call into the WebAssembly to run custom lexical scanning code for languages like Python, where there's non-context-free grammar features. It will call into the WASM to run the lexer. I just thought that was a really impressive feat on his part. So there's that...

**Jerod Santo:** Wow.

**Nathan Sobo:** ...and then there's also these WebAssembly-based language server adapters, which is like "Just give us the binary to

run." There's basically a very simple interface that we'll call, and obtain the binary. But the cool thing is, I think actually with this work of the team that designed \[unintelligible 00:55:10.24\] I don't know all the details of that team, but I think actually there's a pretty clear path for adding more extension points in front of us. The infrastructure is actually there. I'm super-excited about that.

And the cool thing is we're so well positioned. I think we already have -- I don't remember, I think Max maybe gives you access to the work tree... But because it's in Rust, we've designed the whole system using all these persistent data structures, where it's really cheap to take a clone of a snapshot of the data structure in some state, and then move it to a background thread. So we can actually kind of provide shared memory access to the extensions... I mean, I guess you're copying to and from the WASM heap whatever values you want to look at... But in general, we'll be able to really -- like, in VS Code they're running all the extensions in like a totally separate processes. So everything that -- that was one of the cool things about Atom; it was a nightmare, because inviting extensions into your main thread is just like... Say goodbye.

**Jerod Santo:** Right. Asking for it.

**Nathan Sobo:** But now we actually have the best of both worlds, where we can run an extension in a WASM runtime, in Wasmtime, in a background thread, but provide it first class access to the underlying data structures in memory. I'm really excited about that. Yeah.

**Jerod Santo:** Yeah, I love it. I want the extensibility, and it sounds like the best of both worlds, certainly...

**Nathan Sobo:** The downside is just like if we only go with WASM -- and I wouldn't rule out like potentially embedding V8, or going with JavaScript Core, something like that. ..It's just a bit of a bigger lift... Because the cool thing about that is -- well, I don't know how feasible it would be to just run a VS Code extension... There is something to be said for the fact that Emmet has probably a pile of JavaScript code or TypeScript code that could probably be pretty quickly brought to bear... But then again, with AI it's like, you could pretty quickly translate some things... Obviously, they're different languages... I don't know.

So that's the debate. What's appealing about JavaScript is just all that extension code out there for VS Code... But then, I don't know, there's also something appealing of just like "Well, I want to write Rust, and all the APIs already are Rust." So anyway...

**Jerod Santo:** \[57:49\] Yeah, that's a tough one... Because it's hard not to gobble up all that existing code, and just make it available in Zed. Your favorite plugin, easily ported, or maybe no code changes for the case that there's very little API service that it touches... That is so much things. I mean, that was one of the things that I think helped Sublime Text get a foothold, was that it immediately supported TextMate themes, and plugins, I believe, very early on. And so it was like "There goes your barrier to adoption." You're like "Well, just bring your stuff with you. Over." Because people have their pet plugins. And same thing with Chrome extensions, and stuff... There are certain things where it's like "Well, I would ditch Chrome, except I have this one extension that my entire life revolves around. And it's not available on Firefox", or whatever it is. And that will stop a lot of people. The lack of extensibility in total is stopping a bunch of people right now. The fact that you're getting there is spectacular. By the way, Adam, you can now download the Dracula theme via the Zed extensions repository... I'm not sure if Dracula was built-in as well, but it's there now.

**Nathan Sobo:** It seems like we should bundle that one, because it seems pretty popular.

**Jerod Santo:** I would think so. I would think so. But you don't have to, because it's there now. It's in the theme registry. So...

**Break**: \[59:07\]

**Jerod Santo:** I would love to go back to the open source stuff, if you guys don't mind... Because we talked about it, but we didn't dive in the details. I feel like you did this thoughtfully. You didn't just like slap the MIT on everything and say "Let's rock and roll." But you actually went kind of like section by section, through Zed, and applied different licensing to different areas of the overall product. So you have GPUI, and that one is the UI framework that y'all built custom, and allows for the silky smooth rendering, all this kind of stuff... Except for Theo's machine. But now it does. And that is Apache 2. So that's as permissive as you could get, pretty much.

**Nathan Sobo:** Yeah. I mean, maybe you could do like MIT is even more permissive, but it's fine. It's really permissive.

**Jerod Santo:** It's pretty close, right?

**Nathan Sobo:** Yeah.

**Jerod Santo:** And then the code for Zed itself, which maybe you can help us define exactly what that means, is --

**Nathan Sobo:** Just the binary that you run on your machine.

**Jerod Santo:** Okay. So that's GPL.

**Nathan Sobo:** Right.

**Jerod Santo:** And then there's server-side components, which are also open source. Those are AGPL.

**Nathan Sobo:** Right.

**Jerod Santo:** And then does that cover all the split-outs, or is there any other licenses that apply?

**Nathan Sobo:** \[01:02:14.12\] No, that's it. Yeah. And the idea behind that was just -- I want people to be able to build whatever they want with GPUI. That just seems good for us in general, if there's just more GPUI apps out there, even if they are closed source... And so yeah, maybe this will make it permissive. It's not our priority right now to turn it into a Rails-level experience, but I would love to get there if that ends up making sense. Like, if there ends up being demand for that. Right now, I'd say it's in the repo. So anybody that would build anything with it is probably pulling it in as a directory into their own repo...

**Jerod Santo:** It's not a separate repo on GitHub. It's not like a standalone project.

**Nathan Sobo:** Right. And the reason for that is just like any change to GPUI can't break Zed anyway. The builds are already interconnected. It's just like not -- we're not there yet with that, to give you a silky smooth onboarding experience to building on GPUI. But if you want to experiment with it, you can do whatever you want with that code.

Zed itself is copyleft, basically just because I want -- I don't want it to be forked and taken back closed. I don't know, I think there would be plenty of companies that might want to do that, and -- I don't know, I just worked pretty hard on this software, and I want improvements to it to benefit the entire community. And I think it protects our -- it leaves us some optionality from a business perspective to have some advantages that we might need to monetize in terms of just "Yeah, if you want to build with that code, you need to make it open." Whereas we could potentially release a version of Zed that had 1% or less closed source components targeting commercial use cases, or something. We could do the schlep that makes Zed work well in the enterprise setting, or whatever it would be... Whereas there's not as much of an economic incentive for some other actor to go do that, because they can't really -- I don't know. If closed source is ever a lever that we would need to pull on a small amount of code to advantage ourselves from a monetization perspective, we would be able to do that. And I think that that's helpful in just Zed continuing to exist as a thing.

But what I like about the GPL is it doesn't limit anybody from doing anything they want to from an open source perspective... And you can take it and modify it to your heart's content, and run it... I don't know, I think it's -- I don't know, maybe some people are like "That's not enough! It should have been MIT-ed." And I don't know what to say... We're trying to be as open as we can be, while being sane.

**Jerod Santo:** Yeah. Well, I think what a lot of people would have done would be to have the server-side stuff private. To maybe MIT the editor, or whatever. Not copyleft. So a permissive license on the editor, but then the server side bits they, keep them to themselves and say "Okay, well, you can obviously write your own server side bits if you want to compete with us", or whatever. And you haven't done that. You have open sourced everything, but you've AGPL-ed the server side stuff. Is that right?

**Nathan Sobo:** That's right, yeah. And the idea there is just like Zed is -- it's just hard to develop for Zed. It's a collaborative editor. We need the server there. It just sort of introduced a lot of awkwardness to the development experience of an open source person... Plus, we have this "Come into our channels." I just really wanted the doors to be wide open, and not create weird -- at least from my day to day development experience, like parts of the code people could see, and couldn't see... It's just all out there. Yeah.

**Jerod Santo:** \[01:06:10.12\] Well, in that way, I think you actually did more than what most people do. I'm sure there's somebody saying you didn't do enough, but I think you've done more.

**Nathan Sobo:** Thanks.

**Jerod Santo:** More probably than I suspected, you know?

**Nathan Sobo:** Yeah, yeah. And again, that's not to say that there's -- who knows what we're going to need to do down the line. Maybe we will have an on-prem offering, for example, that is closed source, and it's just designed for big enterprise to run inside their data center, and that's something that we can make some money on, and maybe that wouldn't be there... But at least we have this reference implementation of the server. And that's the server we're running in production right now, so there it is. Yeah.

**Jerod Santo:** Well, I don't know if you guys saw what Plausible did just recently... They were - they still are - AGPL. So they're primarily a server side service. It's an analytics service that's open source, and also kind of a bootstrapped startup... That's been quite successful, doing GDPR-compliant analytics, and cookie-listening stuff... It's cool stuff. We've been friends with them for a long time, and longtime customers of theirs as well for our stuff... But they recently -- they were AGPL everything, and they recently said that, for some reason - and I don't know the details of this. I want to talk to them as well. But I do know that they recently have now forked themselves, and have a community edition. And so they're going to have that remain AGPL, but they're going to have their own proprietary bits. And mostly it's because people are cloning and doing stuff, and they're having a hard time remaining competitive because of the fact that they're open source, even with the AGPL. So I'm curious to talk to them about it.

But this stuff is difficult... It's hard to get right. We see a lot of people changing their minds. We see a lot of people acting as if they're open source, but they're not... And then we have people who are cool with open-ish. I like open source more, but I think open-ish is better than closed-ish... So I get it. But it's not easy. And so I feel like you did it slow, and somewhat methodically. Did you talk to lawyers? Did you have a lot of conversations about how to do this? I'm sure your investors probably were on board with it, but probably needed some explaining or some conversations there, too... Was it a big decision how to do it?

**Nathan Sobo:** Uhm, yeah. Yeah. I mean, I knew we wanted to do it. I didn't know exactly how, and... Yeah, I flirted with the idea. Like, what if we keep the server closed? And yeah, just different levers we could try to pull... But yeah, who did -- I mean, I had over the years various conversations with different... Yeah, I don't even remember them all, but different people that had a take on open source and open source business models. And yeah, we talked to some attorneys... But ultimately, we made the decision of what to do, and our board supported us. I mean, I think Redpoint supports a lot of open source companies, and they were really excited to go open source, and they thought it made sense. So it wasn't a tough conversation with the board at all. I think they get it.

**Jerod Santo:** Community response? I'm sure you saw a big uptick -- I saw that you guys were topping Hacker News for a day, so that had to feel good, in terms of you got a lot of attention around the announcement. You probably got a bunch of people kicking the tires because of that, but...

**Nathan Sobo:** Yeah.

**Jerod Santo:** Excitement? Naysaying? A little bit of both maybe?

**Nathan Sobo:** \[01:09:45.21\] A little bit of both. Yeah, I saw some definite naysaying on YouTube. It was like "Yikes, this is rough." At this point, I've got a thick skin after Atom. Atom had a lot more problems... And the things that really hurt, that people would say about Atom were the things that I knew they were right, but they were just being so mean about it... It's like, God, I'm just trying to figure it out. And there's some of that now, but there's some people that are just like -- well, someone made a video saying we were a VS Code killer, which I don't even want to... I'm just doing my thing over here. I don't want to kill anybody or anything. \[laughs\] But someone's like "You can't be a VS Code killer if you're not on Linux." And I'm just like... Okay, well, first of all, I never claimed to be that... And second of all --

**Jerod Santo:** Now we know when he said yes to Linux, Adam. Now we know what got him over the hill on Linux. That one anonymous commenter.

**Nathan Sobo:** But anyway, overall the response has been blowing my mind positive. And I didn't really know, I just had an instinct, like "We have to open source this." We were just getting it to the spot where it needed to go, but the difference has been like 10x, maybe, the level of interest; maybe a little under that, but pretty close. And what's been really cool is to see a big uptick in users who are using Zed a lot. Because that's a really important metric for us, is basically -- people that are really using it every day, that 10x-ed. And that is what I'm more excited about than just the number weekly actives. It's like - yeah, weekly highly-engaged people.

But yeah, I guess anecdatally, just looking at Twitter, it's like every time I look at Twitter, there's a new little badge of a notification going on. So it's just like, I feel that there's definitely a lot more interest. And I was happy about that, because it's like, that made sense to me. Like, "Of course, there's more interest from programmers in an open source editor." That just makes sense. But I'm glad we didn't open source it only to have nothing happen. Until you do it, you don't really know.

**Adam Stacoviak:** How do you handle contributions then? So when you say open, is it open as in also open source, of course, but open contributions? What do you want from being open source in terms of collaboration or contribution?

**Nathan Sobo:** Yeah. To be honest, I have not been as involved as I probably should... But that doesn't mean members of the team aren't, in like giving people feedback and merging pull requests. We've merged -- I don't know, it was like 150 a while ago, so it's been quite a bit more than that. I don't have a hard number. I should probably look that up. But we're definitely merging stuff.

In terms of the process -- I guess if you're fixing a bug, just please open a pull request. If you're taking a deeper cut, it might make sense to try to talk to us, open a discussion... Yeah, just, I guess the scale of the contribution -- the bigger the contribution, the more it makes sense to talk to us. And even, sometimes we've actually done some pairing where -- I think Conrad's done this, other members of the team have done this, where they've just been like "Hey, do you want to pair? Let's schedule a time and actually just review this together live", where we can talk it through and even make a few changes live. So there's a mix...

But overall, my attitude has always been like "Yeah--" It's yet another thing to balance against all these different things we've been talking about, right? It's picking up the phone, being there... That was a place where we didn't always -- I think we're doing better than we did on Atom at that so far, of just like being responsive to people that want to contribute. But yeah, I mean, that's a challenge as well.

At some point, I want to start maintaining sort of metrics about what's our throughput on pull requests, what's the latency to getting a reply to somebody... We don't have those in place yet. It's something we've talked about, but... Joseph, who does a lot of our metrics - he's also stretched really thin, so... I mean, it's not there yet, but I think we're engaging. Are we perfect? I would say no. But we've merged quite a bit of contribution from the community.

**Jerod Santo:** There's tooling for that. We've spoken with people who provide open source tooling so you don't have to build all that stuff custom...

**Nathan Sobo:** \[01:14:15.11\] Beautiful.

**Jerod Santo:** Adam, can you remember the project that we talked about at Open Source Summit last year, where they are doing metrics for open source projects, project health specifically? And it's specifically for this, like managers of open source projects inside orgs being able to see how everything is going, see if there's something falling through the cracks, etc.

**Adam Stacoviak:** I do recall that... Yeah, that was episode 542 from the anthology there. Maintaining Maintainers. We talked to Stormy Peters from GitHub, Dr. Dawn Foster, Director of Open Source Community and Strategy at VMware, and Angie Byron about some cool stuff in the just open source world around Drupal and things she's done...

**Jerod Santo:** Dr. Dawn Foster was the one.

**Adam Stacoviak:** Exactly. And I think it was the Chaoss...

**Jerod Santo:** There we go.

**Adam Stacoviak:** ...if I recall correctly, Chaoss... Which stands for Community Health Analytics in Open Source Software.

**Jerod Santo:** There you go.

**Adam Stacoviak:** It is a Linux Foundation project too, so definitely something worth diving deeper into.

**Nathan Sobo:** I agree. And I know that -- I mean, luckily... Yeah, I work with a bunch of really great people, who are conscientious and on top of it, and some people like to -- I think there are people that are engaging more with contribution than others, but there's quite a bit of engagement happening. But I also know that overall to do well at it, it would be a good idea to measure it, and look at that measurement, and sort of hold ourselves accountable to some sort of SLA, if that makes sense, on getting back to people, or engaging.

**Jerod Santo:** Well, it's just a matter of how seriously do you take it, and if you're gonna take it seriously. You know, you don't track it, it doesn't happen... What's that saying? If a metric isn't tracked, it's not real? No, that's not the saying.

**Nathan Sobo:** Yeah, I read this book, "Measure what matters", and I think the title says it all.

**Jerod Santo:** Yeah. There you go. Those are the best books. You don't have to read them. You just read the title. Like, GTD. Getting Things Done. I'm done. I read it. I'm gonna get some stuff done now. \[laughter\] Exactly. Good stuff, good stuff...

So the AI stuff is interesting... I feel like at a certain point we're gonna get into small free to requests slash bug reports... And I'm wondering if we should keep that for Plus Plus only, because it's gonna get into the weeds, and you may end up being like "Let's screenshare..." But before we get to that, I do think that the AI stuff is interesting in terms of -- like, there's GitHub Copilot integration, but then there's also like the Zed AI assistant. And I don't -- I would just love your thought process on why there's both; maybe because Copilot's specifically asked for, and I'm sure it works differently... Can you talk about just how you went through building out that part of it?

**Nathan Sobo:** Yeah, I mean the Copilot integration was one of our top requests when we initially launched the beta. And so we just added it because people wanted it. The Zed AI stuff is -- I mean, there's not much to it right now, other than I think we've done a good job executing on the UI of what we've done... But basically, it's almost like an API client for ChatGPT, for GPT 4, where you've got this kind of like freeform editor that's got these timestamped headings, or whatever, of user assistant system, and you can toggle between the different roles, and just edit it... And you're sort of just basically, essentially editing the JSON that gets submitted to the language model. It's a very kind of bare bones approach. But actually, I kinda like it. I can get a lot done in a 150k token conversation with the model...

\[01:18:05.15\] And one thing that I'm just raring to do and things keep getting in the way - this bug we're fixing is making that process recursive. Because we've got the assistant panel, and then we've also got the inline assist, where you can highlight some text and hit Control+Enter, and enter like a transformation prompt. But what we don't have yet is the inline assist in the assistant panel, where you could use AI to almost boil down aspects of this conversation from the past, or whatever... And literally the entire interaction is like this unfolding GPT-4 API call that you're editing in place.

So I don't know, it's literally designed around me trying to write code with ChatGPT, on GPT-4, and then I'm rate-limiting me. But then me having an API key and going into the Open AI API Playground, so that I could keep using GPT-4 even after they'd rate-limited me, and then just being like "This editor is annoying. I just want this Zed", and that's the assistant panel. So we have a lot of work to do there. How do we get things into that context window more conveniently, indexing the code... Yeah, that's the kind of stuff that I want to start digging into in the coming weeks.

**Adam Stacoviak:** Is this something that incurs a cost to you, as a company? Is it like affecting your burn to provide that?

**Nathan Sobo:** Oh, well right now it's just you put your API key in, so it's not affecting our burn at all.

**Adam Stacoviak:** So if I have an API key and I have a paid version, I can use it. Gotcha. Okay, cool.

**Nathan Sobo:** But it will affect our burn a little bit I think to offer that out of the box day zero experience, where - without having to fumble around with setting up an API key or whatever, just like "Let's give you this experience." And I don't know that as a startup we can really run that meter as long as a big company could. But we can at least let somebody experience what might motivate them to just either pay us, and then we can provide it, or go do the Open AI thing, which is fine as well. Obviously, I'd love if people pay us, but I don't know. I'm not here to -- yeah, someone would just fork it and add that anyway; like, it's open source, right? So... I think that'd be a convenience factor more than anything... For now. But I think overall, we can start indexing, we can start doing more in the cloud, that would be a value-add on top of that offering. But for me, it would be more about the best way to rate-limit demand is to charge a price. I know it can't be unlimited, so that's where my head's out there.

**Adam Stacoviak:** What does indexing and cloud like? What are you doing, what does that mean?

**Nathan Sobo:** So it means like embedding all of your codebase into a vector space that we could basically use as a queriable source of data. I think I have a lot to learn about this... Embedding models - are they where they need to be? I know we can use Open AI embeddings. Are those open source ones? How do we want to craft those embeddings to be optimal? We had some local embedding that we were doing with a semantic search feature, but it just didn't really quite get off the ground... And what I actually realized is I think I want my fuzzy search -- I want to use those embeddings to do like a quick nav, where I just open it up and it's kind of like fuzzy finding on files, or whatever, but instead you're just typing whatever you think would like get your query into the same part of the vector space as where the code you're looking for is. It's like a fuzzier query, a semantic query, but then we could show you previews of those spots as like a quick means of navigating it...

\[01:22:01.11\] And then the idea of looping back... You know, if you go down and pick the third, then using that like multiple negatives ranking loss to kind of learn on the fly, or... Yeah, even feedback in as a team, and become more intelligent; basically, train the embeddings from the process of people actually using it for different use cases, like navigation, or pulling code into their context window... Anyway, I'm rambling on and on about it, and we haven't done any of it yet, but that's what I'm excited to do.

**Adam Stacoviak:** So much to do... I think your roadmap definitely plots it out quite well for you. It seems like some of these things are maybe in the roadmap part of it, not the objectives... Like, I don't really see embeddings, or this indexing in your roadmap part of it. Maybe that's part of the larger AI push of it, but... Or I guess embrace AI is part of your objective, so it's like... One bullet is good for that.

**Nathan Sobo:** Yeah... I think the problem right now with AI is it just is -- it's not really reflected in this roadmap here. This roadmap is kind of the adoption roadmap. And then these other two objectives are things that are kind of not on this roadmap, and they're more -- this one's exploratory, Embracing AI. I think it's kind of in an exploratory phase. And then... Yeah, Zed, and Zed with our community... I mean, we actually -- we have more detail if you go to the collab channel, probably, open notes in collab, right-click and open notes... We have a roadmap specifically geared toward collaboration. Naybe we should link to it from those parent notes.

And this is kind of like -- we're exploring how we're even tracking work etc. But what is cool is we're still using issues for sort of inbound bugs, like actual issues... Whereas we used to kind of -- yeah, initially we would use Markdown in a tracking issue or something to track a big project... And then eventually, we switched to linear for a while, which kind of worked out, but it's kind of awkward for open source anyway... And it wasn't really working out. So now I think we're back to GitHub issues for actual issues, and then we've been using these notes to kind of just in a lightweight way track more like work where we're sort of setting the agenda, if that makes sense; like long-running feature work we're just tracking in these notes in Markdown.

**Jerod Santo:** On the AI front, one thing that's happening is that Open AI's API is becoming a bit of a de facto standard for a lot of interfaces... Much like S3 became de facto API standard; everybody said S3-compliant. Well, everybody's starting to say Open AI API-compliant. And so you could potentially pretty easily provide a bring-your-own-model kind of a setup where on the backend you all are just doing the same exact Open AI API calls, but you're swapping out the actual base URL, or however you do it. Ollama for instance is like a bring-your-own, run-models-locally open source project that has Open AI API support now...

**Nathan Sobo:** Nice.

**Jerod Santo:** ...so you can get Code LLaMA on there.

**Nathan Sobo:** That'd be super-easy to use in Zed right now. We could set a configuration key which is like the Open AI API URL, and you'll be hitting your local server.

**Jerod Santo:** Yeah. So that'd be a good option for a lot of people, especially people with fast laptops...

**Nathan Sobo:** Yeah. And I haven't even played with it, I'm ashamed to say... But I'm pretty intrigued by Ollama. If I weren't like firefighting a bug that was causing things to flicker on hover because we're painting things in the wrong order... That's not quite what it is, but yeah; I might be playing with it right now. But I've just been greedy with my time lately. Anyway.

**Jerod Santo:** Well, you want it to be fast and flicker-free, so... I mean, that's top priority right there.

**Nathan Sobo:** Yeah. It's embarrassing... Yeah, honestly, for anyone listening to this, I'm sorry. We're working hard to fix it. \[laughter\]

**Adam Stacoviak:** Clearly. Clearly.

**Jerod Santo:** \[01:26:07.26\] Nathan Sobo issues an apology to all users for the flicker. Well, I mean... Too much to work on. It's exciting times. We'd love to have you back on and get incremental updates on progress, because you won me over for the time being. I'm a fickle fan though, so I may -- I do end up back on Sublime Text every once in a while, just because it's... I'll tell you this - the last time you were on the show I was talking about the search on Sublime, and how it's just lightweight, and so fast, and so good... And you were talking about Zed search, and how there's similarities. But one thing you can do in Zed search that you can't do over in Sublime is you can actually edit the buffers right there inside of the search results. And I didn't really understand what you meant by that at the time... And I'm used to clicking over New Tab through the search results, and then editing over there and saving that. And I do find that actually Zed's buffer editing right there in the search results is pretty fantastic, because it just saves me a tab open and then a Save, and then a tab close. And so you're winning me over, and I would love to --

**Nathan Sobo:** Have you tried multi-cursor in the search results?

**Jerod Santo:** No. Is that easy?

**Nathan Sobo:** Because that can be dope.

**Jerod Santo:** Tell me more.

**Nathan Sobo:** Well, it's like, you pull up a bunch of search results, oftentimes they'll have similar structure. I experienced this even better in like a compile error type situation, where I'll pull up 10 compilers, they're all pulled up in a multi-buffer, and they're all sort of the same error, and so I can play games with syntactic nav, and multi cursors, to just fix all the compilers in one shot. I love that. That's like a -- when it works out. Yeah, I mean, that's another area where I'd love to invest, making multi-buffers more intuitive... Like, some people don't even know that you can edit in them...

**Jerod Santo:** Well, I wouldn't have, unless you told me.

**Nathan Sobo:** Right. And it's like, how can we make that more obvious?

**Jerod Santo:** Because it's not what you expect to be able to do right there. Yeah.

**Nathan Sobo:** Yeah.

**Jerod Santo:** There's tons of user experience wins that are just like low-hanging fruit for you. I know you have too many things to focus on, but... There's, like I said earlier, the gold nuggets there, but it's like covered in, dirt, and grime, and stuff, and you've gotta just polish that sucker...

**Adam Stacoviak:** Chocolate bar.

**Jerod Santo:** \[laughs\] Yeah, chocolate bar. But the rest of my thoughts are all feature requests and bug reports... So should we end the official show and we can go to Plus Plus and really drill down on them real quick?

**Nathan Sobo:** Sound good, yeah.

**Jerod Santo:** I know Adam has a bug report he'd like to --

**Adam Stacoviak:** I mean, I've got a gripe really... And it's not really air-worthy.

**Nathan Sobo:** I'm going to take notes in the ThisWeek channel, which is internal, so you guys can't --

**Jerod Santo:** Cool.

**Nathan Sobo:** I guess, actually, let me take the notes in the Zed channel, so you can actually see what I'm writing...

**Adam Stacoviak:** Cool.

**Jerod Santo:** Okay.

**Nathan Sobo:** I don't know, where do we want to put them? I'll put them here, which is like...

**Adam Stacoviak:** We do see it.

**Nathan Sobo:** ...Changelog...

**Adam Stacoviak:** Feedback.

**Nathan Sobo:** ...conversation. Feedback. Feedback. There you go.

**Jerod Santo:** This is like my old joke about our podcast being a Trojan horse for feature requests.

**Adam Stacoviak:** That's right, that's right.

**Jerod Santo:** We ask people onto our show, and then we're nice to them, and then by the end we're like "Hey, by the way, this would be cool..." Like, "Okay, I'll build that for you."

**Nathan Sobo:** \[laughs\]

**Adam Stacoviak:** So everybody that's been listening for like an hour-ish, or an hour twenty-ish, something like that... What is it? Yeah, around an hour and thirty. Gosh... This show has ended, and stick around for Plus Plus. We're gonna talk end session with Nathan inside of Zed... And there you go. So that's the end of this show... Goodbye, friends.

**Jerod Santo:** Bye, friends. And here we go.
