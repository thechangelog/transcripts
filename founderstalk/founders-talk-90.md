**Adam Stacoviak:** Connor, welcome to Founders Talk. It's been a bit. I've been using Rewatch actually, and I've gotta say, I'm excited for what product teams can actually use. This is something I've wanted to have. I haven't always been here at Changelog, doing what I do... I've been on bigger teams, I've had more people than just a few. We have a very small team here. We keep lean for those reasons and for good reasons. But we are expanding, and so we have more of a need for Rewatch. But I've been on product teams before as a product manager, as an individual contributor, and I've wanted to be able to skip the meetings and just show up later and still get the same content, and maybe even add some comments and stuff... I'm kind of describing your product, basically. But I'm a fan of Rewatch, I'm a fan of you, so welcome to Founders Talk.

**Connor Sears:** Thank you. I'm happy to be here.

**Adam Stacoviak:** We have similar roots, to some degree. We began one year after GitHub; you worked at GitHub.

**Connor Sears:** That's right.

**Adam Stacoviak:** So there's the tie. We've been doing our shows for 13-ish years, started in 2009, and a lot of what you've done today with Rewatch really began inside of GitHub. Can you tell me how you got to Rewatch, how you got to GitHub? What's your story? How'd you get here?

**Connor Sears:** Yeah, totally. GitHub is one of those special companies where a lot of great work was done. I feel like we're starting to see a lot of great work come out of GitHub, whether it be in the form of more open source, or through companies like Rewatch. Really, I joined GitHub midway through that story; they started the company, like you said, around 2008, 2009. What was really inspiring about that is, looking back, they had a ton of foresight into how they wanted to run the company. They knew that, from day one, they were going to be remote-friendly, and they had a culture of sharing tech demos, sharing information, and getting out on stage at conferences.

I mean, GitHub has a long history of their engineers getting up on stage and sharing how we work at GitHub. That translated internally as well, whether it be all-hands, or lightning talks, tech demos. They needed a way to share that, because when they were hiring remote, they didn't do it like we do it today, where it's like, "Okay, we're going to decide on a timezone, or within a few hours, and make sure everybody has somebody to work with." No, I was managing people that were in London, that were in Japan, Australia, and some of those people weren't working with anybody that overlapped with them. I think the founders of GitHub saw that and wanted to start building solutions to work that way. That meant video, that was the first place they went. They built a really rudimentary tool, they called it GitHubber TV.

**Adam Stacoviak:** Oh, wow.

**Connor Sears:** We always refer to ourselves as GitHubbers; I think they still do. It's not like the company is gone anyway...

**Adam Stacoviak:** Lovingly, too.

**Connor Sears:** Yeah. So it was nothing more than a website that had a video player on it. It was really basic, and that's sometimes where the best ideas start, is as basic as possible and the most value.

**Adam Stacoviak:** Very simple.

**Connor Sears:** Yeah. That tool became load-bearing. By the time I joined, it was end of 2012, 2013-ish, the beginning of it... A lot had happened at the company by then. So when I joined, I was able to benefit from that tool that they put up, and I was able to go watch the all-hands. What was it like when they first raised that giant round from Andreessen, that was such a big deal? What was the culture? What was it like being in that room? Well, I got to experience it. So the beginnings of Rewatch were just experiencing the power of a tool like that.

\[00:08:12.13\] It's funny, everybody always wanted to know how we work at GitHub... But for some reason, we always talked about our internal YouTube is what we called it. GitHubber TV, we have this internal YouTube; people are just fascinated by it. I think your reaction to this sort of tool is similar to what we heard when we talk to people. Their excitement, and the same refrain over and over again, of "I wish I had that at my company, that would be cool."

Then flash-forward, 2020, beginning of 2020, before the world ended, my co-founder and I, Scott, - also a former GitHubber - we were kicking around our ideas for what we wanted to do next. We had just been talking about -- it seems like there were some legacy tools out there, certainly giant enterprise tools that had started to do that... Because I think traditionally, only big enterprises really felt the need to have a tool around their video. But as we were looking at it, we saw the power at smaller teams, and GitHub had grown quite a bit by that point; it's pretty large today. But at the time, it was only a few hundred people, and we saw how much value we got. That's where we started, is building a better version of that experience that we had. I think for us, we knew there were some obvious things that we wanted to do. The internal tool had started to add in transcription for like a subset of videos, like the big all-hands, that seemed really important. They would go and get a transcription uploaded; it was all very manual. We wanted to see if we could just transcribe everything by default, and not make people think about that.

The big benefit from that is that, all of a sudden, all those videos were searchable for the first time, and we could search within the transcripts, as well as the title of the video, and just really make a really powerful search experience around your video. That was similarly to that original tool, starting off as basic as possible; that's exactly where we started. It's like, "Can we make a better version of that 10 years afterwards, that had transcription by default, had basic organizational features, and had really powerful search?" We were just answering the question for ourselves, "Is this sellable? Will somebody want to pay us for this?" I think that's where we started.

**Adam Stacoviak:** Wow, okay. Tell me then, I guess, with GitHub TV... Was it GitHubber TV, or GitHub TV? Did end up becoming GitHub TV?

**Connor Sears:** I think so, yeah. I don't know what they call it today. Well, they're our customer, now so I guess I'm jumping ahead. But now that we've replaced that all too, I think they do just call it GitHub TV.

**Adam Stacoviak:** Okay. I just want to make sure I'm on the lexicon that you have.

**Connor Sears:** Sure.

**Adam Stacoviak:** That I'm using the nomenclature that you are using. So with this tool then, I guess being a developer-led product type company that GitHub has been, did you just upload a video? Was there ways that you had to record, was there do's and don'ts? Or was it just, figure it out, upload to S3, it arrives? How did it work? Was it kludgy or was it sophisticated?

**Connor Sears:** It wasn't sophisticated at all. In fact, that's why we saw it as an opportunity. We knew the ins and outs of what an internal tool that's not maintained over the years, what it turns into.

**Adam Stacoviak:** Oh, yeah.

**Connor Sears:** And I think that's our thinking. Constantly, companies are going through... Engineers especially, we do this ourselves - standing up a new company and trying to solve a problem, and there's a tool out there we can buy... And of course, the first thing we always say is like, "We could probably build this, right? We could build a little tool there."

**Adam Stacoviak:** Of course, yeah.

**Connor Sears:** And the answer is yes, of course, you can.

**Adam Stacoviak:** Yeah, that's simple. That's simple, Connor.

**Connor Sears:** \[00:11:53.05\] Normally, "Should you?" is the question. I think what everybody underestimates is the cost of maintaining that and keeping it performant, keeping it working. I mean, I think by the time we were in talks to actually replace the tool... And by the way, I love this story, because we did start writing the first line of code around this, I believe it was March of 2020, right before the stock market crash, right before the COVID lockdown started. By June, we were in pretty close talks with GitHub as a customer. And everybody assumes like, "Well, you know everybody at GitHub." I always remind them, I was like...

**Adam Stacoviak:** So it must have been easy, right?

**Connor Sears:** Yeah. They're Microsoft now. That's not my buddies over there. They're all gone.

**Adam Stacoviak:** It's different, yeah.

**Connor Sears:** Yeah, it's very different to sell into a Microsoft company than it is to sell into essentially a startup. So what they're looking at, their internal tools, they're seeing it as a risk. I'm sure it had Dependabot warnings all over it on the repo. I don't think they had an uploader that worked anymore; I think that had broken a while back, and so did take some access to the S3 bucket. Anyway, I don't know the specifics. I just know that they were looking to move off and we --

**Adam Stacoviak:** It wasn't a product, basically. It was a tool internally that had value...

**Connor Sears:** Exactly.

**Adam Stacoviak:** ...that needed, I guess, potentially a product team to either focus on GitHub-GitHub, or focus on an internal tool, which probably had diminishing returns; so if they could just pay you, I don't even know, maybe a grand or two a year to have an internal -- I don't know, I'm just speculating. I have no idea.

**Connor Sears:** Sure.

**Adam Stacoviak:** It's not 50 bucks a month, that's for sure. It's a lot more than that, because you got per-user costs, you've got bandwidth costs, you've got video files, transcription, traffic, commenting... A lot of fun things that happen.

**Connor Sears:** Yeah, that's where the company actually started. It didn't start cutting a repo and cutting a branch, and going. It started in a spreadsheet. Can this make money, or is it too cost-ineffective to be a business? Because you have transcription costs, you've got storage, which is not that big of a deal anymore... But you also have streaming bandwidth, and how do you measure that? And are you going to be a metering company, or are you going to try to simplify it based on how people expect to pay for these tools? So yeah, it's fun. It's a good problem to tackle upfront.

**Adam Stacoviak:** So you see the problem; it's March, just before the pandemic hits. June, you sell... But let's rewind those few months there. You see the problem, you see the need to put it in place; at what point did you say, "Okay, this should be a company. We should raise funding, we can actually make money from this"? Because it's one thing to have a side project. I mean, because this could have just been an open source tool that you just put out there and everybody \[unintelligible 00:14:32.17\] their own. It could be a Docker image with your own object storage attachment to it to deal with all the files. It's just video, so the storage is mostly simple to deal with, for the most part. I'm going to say, in quotes, simple. Storage is always simple.

**Connor Sears:** Yeah, I think that's fair. Yeah.

**Adam Stacoviak:** So how did you figure out, "Okay, this should be a business"?

**Connor Sears:** It's a great question, because I think it's never a point in time really; or maybe sometimes it is. I guess there are points in time where there's a before and after sort of situation. For us, again, that transition from thinking about it as a project to more of a business started really early. When we were looking at the opportunity, it wasn't just GitHub and this cool internal tool that we saw, although that was the experience that we had at the closest, or that we were closest with. But we started talking to people at a lot of other companies, large companies like Facebook, which I had done a little stint at in between GitHub and Rewatch. Lo and behold, they also had built their own internal tool, and they also had a fun name for it. Then you talk to people from Amazon, and Amazon has a tool for it. Then you look at Bridgewater and Ray Dalio, and he's written basically a book about how they set up their internal tooling around recording every meeting, and radical transparency. Then I started getting DMs from companies that should not be telling me that they have an internal tool for how they make movies, for instance; that are supposed to be secret. It just became a pattern that we saw, and I think the opportunity became clearer and clearer that it's bigger than just a side project.

\[00:16:13.28\] But I think the moment it became real was Scott Goldman, who I started the company with - we had been texting over iMessage for, I don't know, maybe six months. And he's a really close friend, but because of the pandemic and because I lived in the East Bay of the Bay Area, he lived in San Francisco, I just stopped seeing him face to face for a while. So all we did was text each other about this, these ideas, and the pros and cons of starting a business. Then I quit my job and I realized it's been a year and a half since I've even spoken to this person in any sort of real-time format. I was like, "Hey, we're going to do this, right? We're going to build a company, because I just quit, and I just realized we haven't really talked in person yet." It was just over these iMessage chats.

**Adam Stacoviak:** Wow.

**Connor Sears:** And I think he was like, "Well, I guess so. I guess we are doing it." So that's one moment I can think of where we wanted to give ourselves six to eight months to prove out a business. Our original plan was to bootstrap, just do it ourselves, and that's why we gave a time limit on it. That was the whole direction that we thought we were going to go.

Certainly, three months later, we had our first deal, which I would say was an enterprise sale, which was different than what we expected. Normally, when you start a company in SaaS, it's a bottoms-up motion and you're trying to land and expand and get like a small team using it in a variety of different places, and then hopefully, it expands out throughout that company.

By the way, that's an awesome plan; not saying that's a bad plan. But that first deal was for all of GitHub, everybody in that company. And I think that sort of go-to-market really became clearer as we started adding our next logos, whether it be companies like Brex in the more financial side of things, as well as companies like PlanetScale. You've had on the show...

**Adam Stacoviak:** Sam, yeah.

**Connor Sears:** So a variety of different sizes there. But the thing that was unique was this was a top-down sort of sale; we could get everybody onboarded at once, and I think the value just becomes more and more valuable when you have everybody on there. Because it's all about accessibility to this content. It's all about everybody being able to contribute etc.

I think once the opportunity became clear, there was that decision of like, "Is this a bootstrap thing that we're just going to do on the side, or do we want to take a bigger swing at it?" Honestly, that question wasn't like, "Yes, let's go raise money." It was, "Hey, let's tiptoe. Let's talk to some people that we've worked with before, and let's just get a feeling for it. Let's show them our pipeline", which honestly, a lot of times we're like "Is this good?" kind of questions. Like, "Could you just be raw with me for a second?" Like, "If you think this is a bad idea, just tell me, because that would make things easier."

**Adam Stacoviak:** In terms of product roadmap pipeline, or do you mean deal pipeline?

**Connor Sears:** Like deal pipeline, like hearing companies that have reached out to us since we tweeted once, or something. This is early on. And we had some really trusted people that were VCs, that I told them like, "Hey, we're not necessarily looking to raise, but it'd be interesting to hear your thoughts on it." What was interesting, of course, as things with VCs sometimes happen, is things start moving faster than you realize.

**Adam Stacoviak:** Yeah.

**Connor Sears:** \[00:19:41.17\] When we started getting a lot of interest from the people that we trusted in the VC world, we had to take a beat and really decide, "Alright, is this the path we want to go? What are the pros and cons?" Ultimately, we obviously decided to raise a seed round in the end of 2020, I think it was October. We found some really great partners with Semil Shah over at Haystack, as well as participation from a lot of angels. But the other major investor was Kent Goldman over at Upside Partnership. Those are two people... Kent in particular had actually invested in us once before, because we actually started a startup before this. I've actually started two companies since GitHub. But the first one, as with most startups, didn't work out, and that's okay.

**Adam Stacoviak:** Yeah, you learn some things, man.

**Connor Sears:** You learn a lot.

**Adam Stacoviak:** And you make connections.

**Connor Sears:** And you make connections. But I mean, it's cool to find people that are willing to take a risk on you twice, and knowing that you... Maybe that's where some of the trepidation came from, is like, "Hey, do you still like me? I know I had to return capital there early on, but is this something you'd be willing to do again?" I mean, to Kent's credit, he was in from day one. He's the first money in to Rewatch.

**Adam Stacoviak:** Wow.

**Connor Sears:** So yeah, I think that helped. I think that confidence and... You need people around you that help you out. Early on, that's the process that we went, it's just tiptoeing into it, exploring the options, and seeing what it was going to take to build out this business, and the pros of being able to accelerate things. Frankly, having cash to spend on go-to-market is really, really important, and it's really helpful. Otherwise, it's really tough to do a bootstrapped top-down enterprise sale motion. Ultimately, that's why we decided to go the way we did.

Especially as we headed down into the next round of funding, which we raised our seed in 2020, in October. By February, March of 2021, we were looking at raising from Andreessen Horowitz. That additional capital and that additional focus around the opportunity was really great for us.

**Adam Stacoviak:** Yeah. It's interesting that your first deal was an enterprise deal, and your first deal was a Microsoft Enterprise deal. I mean, it was GitHub, sure. But it's Microsoft that's really the owners of GitHub. It's GitHub, but really, it's Microsoft. I imagine there's all this stuff you've got to do to become a vendor, and compliant, and there are security concerns. Did you deal with those things early on, and that's what enabled Brex and the others? Because like you said, you went enterprise first, versus bottom-up, which is individual users, or self-serve... Sometimes how SaaS companies launch is self-serve, come try it, and then eventually, you scale from one team to many teams in an organization. You kind of started from org, all the teams, and then just conquered from there. What was it like to have to start at the enterprise level from a business and a technical perspective? Was it a challenge to have to do that upfront, or was it actually a blessing in disguise?

**Connor Sears:** Both. I'm lucky enough my background is in design and product. My co-founder is the perfect augment to that, in that his background is obviously in engineering and infrastructure, and had built enterprise-ready software before. So just because you build it with compliance in mind, it doesn't mean you actually have compliance in terms of the bureaucracy of having the document that says you're compliant, of course. But that was something that, as soon as we started, again, talking to GitHub, that was me selling Rewatch before we had anything in production. That was before we really had any tool made. I had sketches in a notebook, that's all it was. So on one hand, it was a challenge because we had nothing. We had an idea and a really...

**Adam Stacoviak:** You were selling vaporware, basically. Potential vaporware, let's say. Let's say potential vaporware.

**Connor Sears:** \[00:24:06.07\] Potential vaporware. And I can scroll back… I should actually start archiving some of these iMessages. Most of our company, early days, was run through iMessage, in case you can't tell. But Scott was definitely texting me and saying, "Maybe we don't sell to Microsoft before we have anything even in production?" I don't even have the AWS infrastructure set up, I don't have anything. Actually, I think this was a learning from that first startup that didn't work out. One of the things that we learned was you've got to sell this thing early, and you have to get that feedback from the market.

As soon as we had a clear enough idea what pain points that we knew we wanted to hit on and solve, we could start to talk about the shape of the product in such a way that was something people could get excited about. Now, I'm able to, as a designer, visualize ideas and express ideas that feel more real than they actually are oftentimes, which can be a dangerous thing... But it's also a really powerful tool as a designer, is that you can make things feel, "Oh, well, they've already figured everything out. Look at this thing, it looks great in the screenshot."

**Adam Stacoviak:** Wow.

**Connor Sears:** And I think that was definitely a first step in. As we started building it - and yes, of course, we built a product for them. We didn't sell vaporware, of course. But as we got the production environment set up enough so they can actually use it and we can help them migrate videos over - yeah, there's this whole sticky thing of becoming a Microsoft vendor. The terms change every year, but I think it was really important for us to have a security posture, to really start having a lot of discussions about this, and plans for how we were going to be compliant. I think a lot of people don't realize... This is why typical SaaS companies - they stay away from this as long as possible. They don't want to talk to security teams, they don't want to do security questionnaires, they don't want to have to answer the question of, "Are you SOC2-compliant?" But we took the tact of, "Okay, let's see what happens." Because like, "Okay, if this deal falls apart, how much are we going to learn about the gap? What is the daylight between what we have and what we're going to need?"

I think people will be surprised that if you're just willing to get in there and have those messy discussions, and just, it's okay if the deal didn't happen. At least trying to do an enterprise sale a couple of times a year, even if you are bottoms up, I think is really helpful for companies. It helps you focus and see potentially an opportunity. Because otherwise, you just assume it's so far away, and so hard, and that's something you'll do later when you hire a sales team, and you have a giant go-to-market team. I think Founders would be surprised that there's a lot of stuff you can do to get - what is it called? ...the enterprise chasm to get across that. I'm stealing that from WorkOS.

**Adam Stacoviak:** Yeah, I was going to say.

**Connor Sears:** Yeah. I like Michael's way of describing that. And that's really what it is. What is the daylight between this stuff and how can you close that gap?

**Adam Stacoviak:** I'm glad you mentioned WorkOS, because I can imagine... I'm not sure if you use them, I'm curious if they played a role in your stack at all, but... You're shaking your head, no.

**Connor Sears:** No, I didn't. Yeah, sorry. No, we're not. We're not using WorkOS. I did talk to them early on. Again, this is credit to Scott. He had already built our single sign-on; we already had a bunch of that already built. So at the end of the day, we didn't really use them.

**Adam Stacoviak:** Gotcha. But for some teams who have the fear of enterprise, from a technical perspective, not just a deal perspective, will sometimes push away, because they want to focus on product. And by no means is this an ad for WorkOS, because they are a partner of ours, and sponsor of ours, so I'm familiar with the process. That's what gets me excited about them, and even your story, because you focused on enterprise early. I think it's a lesson, not so much that, "Oh, hey, go buy WorkOS", but more like, "You know what? Don't shy away from these enterprise deals."

\[00:28:06.03\] Because like you had said, you had learned so much about the process. And I bet you that the non-enterprise deals get so much easier, because you've gained so much confidence, and it gave you a roadmap. And I'm sure when you went and you said, "Hey, Venture Capitalist, we're not really interested, but can you give us some feedback?" It gave you, for lack of a better term, some ammunition when talking to them, some leverage, because you already had some of the hardest parts about that enterprise chasm that Michael did coin, down. That's a lot.

A venture capitalist will look at that and say, "Okay, you've already stepped to the line of the enterprise chasm, and it's easy for you to cross." In many ways, Scott already built the tooling, so hey, let's just do it, kind of thing. It gave you so much confidence and awareness of the product direction and ability when it came to bringing in investors to make your company possible.

**Connor Sears:** Yeah, I think that's accurate. In hindsight, it's very easy to say, as if it was very planned out. But I think looking back, the thing that worked really well for us is going back to that first seed round, we raised 2 million. Our first money out, the first check we wrote was to start a process of getting SOC2-compliant. We knew by then that this was the path we wanted to go, and it's a differentiator. The more you can do this, the faster you can do it, the earlier you can do it, the better. Especially if you know that these are the type of customers you want to go after.

We kind of had our view of, "We really want 250 full-time employee plus companies really feeling comfortable with using Rewatch." Because we had just gone through this pandemic thing, and everybody was going remote and hybrid and all that stuff was happening. But the idea of transcribing all your meetings was and is still kind of scary for a lot of people. So being able to have a security posture from a deal standpoint, a tech stack standpoint, but also a product differentiation standpoint was really important to us. It's something that we really pride ourselves in. Not only that, it is a differentiation from the standpoint of a product for us.

**Adam Stacoviak:** Yeah. I told you in the pre-call that the killer feature for me is obviously the feature itself. But the real killer feature for me is just like that automatic transcription. It's really, really good. I was surprised at how good it is. Then, more importantly, you were able to not only get the video transcribed, but you get jumped that spot in the video. The obvious next feature that comes from that is being able to search. You can search obviously by terms, and phrases, and stuff like that. In tech, especially product teams, you have a lot of acronyms. It could be SRE, it could be SOC2, it could be anything, really. And being able to find that within a video, to me... It's one thing to have a GitHub TV or a Changelog TV, or something like that that's internal, and have it to kind of anti-Zoom fatigue yourself and your team, to kind of cancel meetings and stuff like that. But it's a different thing when you can actually have that now as like a search term database, key phrase database of how your teams move and operate. Like you had said, when you worked at GitHub, you were able to go back in time to that initial $100 million investment which shook the world initially when GitHub got that. So you can rewind a bit from 2013 back to... I don't know what. I don't even know what the year was when they did -- maybe 2011.

**Connor Sears:** 2010, something like that.

**Adam Stacoviak:** 2010, 2011. But that was a big deal. And as a designer, or somebody in the design front for GitHub, it's probably pretty important for you to go back and kind of almost be there, to some degree, because you can go and Rewatch these things. What an awesome brand name, too.

**Connor Sears:** \[00:31:55.23\] Thank you. Yeah.

**Adam Stacoviak:** How did you come up with that? How did that come about?

**Connor Sears:** Oh man, how does anything come about? It was going to Hover.com and searching all the types of domains that were available. I think the original name we had for it was Layback, like a play on words from playback... It wasn't good. We decided pretty early we needed something else. We couldn't believe we found Rewatch. I think .tv is what we landed on to start with. We since got the .com, of course.

**Adam Stacoviak:** Was that a challenge, getting the .com, or is it somewhat easy?

**Connor Sears:** I would say the process of getting a .com today is a very weird one. I feel like there can be a whole show about stories of people getting their .com. If you want a pitch, there it is. But everybody's got a weird story. They all know a person that just has their way of getting into it. I feel like I've been introduced to the same guy, like "I know a guy" type situation, who can get you that domain. It always works out. It's wild. Now, the price point might be too high or whatever, but it's a very interesting thing. But yeah, we were lucky enough to get our .com. Not too interesting of a story for us, in this case.

**Adam Stacoviak:** Gotcha. We have changelog.com, and we always get compliments on having that domain. It's a similar story, in that there's a story. We didn't know a guy, but I just looked, and thankfully, the person who did own it didn't shy away from whois. They put their name on there, and they happened to be on GitHub as a user, and in tech, and in software. This is earlier days for us too, so we're actually less of a business then, more of a hobby, and have since turned into a really great business, of course. But initially, I was like, "Hey, we're doing this thing. I'd love to use the .com. I'm cool with using some sort of domain broker."

They were like, "That's cool". We named a price and... I don't want to tell you the price, but it was super-cheap in comparison to what it could have been, should have been. If I bought it today, it'd probably be unaffordable, basically. But several years ago, we probably got it maybe eight years ago, I want to say. I don't even know what year it is anymore. It's just 2022 barely for me, but I feel like time flies just so fast since the pandemic. But it was pretty long ago we got the domain.

I think there's always some sort of story to your .com, and having changelog.com for us, it really got uniquely better and different, because we were the changelog.com before. Before that, we were changelogshow.com. It sort of legitimizes a thing when you actually have the .com as your core brand name. So I can imagine that it felt the same going from .tv to .com for you guys.

**Connor Sears:** 100%. Yeah. And you have to thread that needle. Because early on, you don't have enough money to spend on things like a domain; not a lot of times. It's not really the top priority, you want to keep the lights on.

**Adam Stacoviak:** It's not that important.

**Connor Sears:** Yeah. But then, you start talking to people about a Series A. Now you're in this race against time, because as soon as that announcement goes off, the price of whatever domain you want to buy goes through the roof. Because they know, because you see the press release. "I know exactly how much money they have." So that was our thing, it's trying to come in under the wire and make sure that we secure that .com before somebody took advantage of the fact that they knew we might be more willing to pay a higher premium.

**Break:** \[00:35:32.10\]

**Adam Stacoviak:** Let's go I guess deeper into your particular story. So you got started two years ago with this, you paved some of the way for the direction... You come from a design background, you are a designer. Scott is more software and engineering, so you guys complement each other very well. Talk about something you shared in the prep doc, which was you wanted to own the problem and the solution end-to-end. Help me understand what that means, to go from product maker, product designer, into a role where you own all aspects, as a discipline.

**Connor Sears:** Sure. I think design is a really interesting profession, especially software design, product design, whatever you want to call it. I tend to think of myself as a software designer, because that's what I design. The tools in which I use to design it are code; I use tools like Figma and stuff like that too, but the point is that it's a pretty focused problem. The best product designers are thinking about customers, they're thinking about the business, and these are all talking points you'll hear all of us always say. I think it comes from this era where design was almost like window dressing, and we fought against that for so long... Of course, Apple helped popularize this idea, that design is how it works, and it's really important.

Yet, I had all this conversation about earning your seat at the table, at the business table. And by the way, we're there now. I don't think anybody thinks that -- it's not abnormal to see designer founders anymore. It's not abnormal to see designers in executive positions at companies. But when I was starting out, all of us were just web designers, and we were just trying to take graphic design and bring it to the web. That's a different thing than starting a business and really solving a problem and developing a go-to-market strategy.

It takes a certain bit of skill and experience to line a product roadmap up with a go-to-market strategy. Those are very different skills than necessarily just looking at a user problem, solving, building a feature, or even building a whole product around it. I think becoming a founder and starting a company takes all that to 11, and you've really got to think through the whole problem. You have to be able to prioritize, and perfect is really the enemy of good sometimes when you're building software that you're trying to ship and sell. It's really difficult, and it really puts a lot of these platitudes that I feel like, as a designer, we always talk about, and puts it to the test, and really sink or swim. So I always love that.

\[00:40:04.26\] Even at the companies I have worked with - and I've had the blessing to be able to work at companies like Twitter and Facebook and some others, as well as GitHub... GitHub is much more of a tool versus a social network, of course. But even at Twitter and Facebook - in fact, especially at Facebook, my entire role was not working on the social network at all; it was building design tools and managing a team that just exclusively built internal tools to support a design team. And at Twitter, way back in the day... You know, my best friend is Mark Otto, who built Bootstrap. I wasn't involved with Bootstrap at all, I want to be clear about that, in so much as I was around, and we had these discussions about how to build internal tools to make ourselves a little bit more effective. That's where Bootstrap came from.

So we are always thinking about these tools internally, and figuring out who the customer was, what was the key piece of value that we're providing. All of that really came together, I think, in this grand plan that I was probably going to have to start a company one day, because I'm always more drawn to the tooling internally to a company, than the company itself. If I went to go work at Twitter today, I don't know what I'd work on. I don't really want to work on the main app at all; I'd be more interested in all the stuff that makes Twitter the company work. So that's how I got into this mode of working on tools or building companies, is really just being really interested in what makes these companies work well.

**Adam Stacoviak:** Yeah. I really find it interesting that the inspiration came from within GitHub. Your first customer was GitHub, and that replaced the thing that you used, and then you built an entire company around it. We haven't really fleshed out what exactly Rewatch is. So help me understand and help the listeners understand what the feature set really is. What does Rewatch do? Of course, you've got large organizations, 250 people plus using it, but who is it designed for and what are some of the feature sets of it?

**Connor Sears:** Yeah. Rewatch is an internal video hub for companies. We allow you to securely share, organize, distribute, and search all your video content. That could be coming from short-form screen recordings, which we have a screen recorder for you if you're into that sort of thing. It's from connecting up with your Zoom or Google meetings and recording those meetings for you, and automatically ingesting those into the product.

As you mentioned earlier, transcribing all that video content and then making it searchable unlocks a lot of value for teams. Number one is creating video is extremely high bandwidth. You can talk somebody's ear off, you can record it all day long, but actually consuming that content and getting the knowledge or the value as a co-worker, for instance, out of that video is extremely low bandwidth. That's not an effective way of doing work, sitting around watching video all day. That's coming from a CEO of a company that builds a video tool.

**Adam Stacoviak:** What are you saying here...?!

**Connor Sears:** Yeah. So on the surface level, the basic thing is being able to watch it 2X is good. But I like to say reading the transcript at 10x is way better.

**Adam Stacoviak:** Yeah. Because you can read faster than you can watch, for sure.

**Connor Sears:** Yeah, 100%. But if you can find the exact thing you're looking for in an hour-long all-hands, that's the two-minute section that was actually valuable to you and then you can move on with your day - well, that's golden. That's what Rewatch is trying to do. Rewatch is helping you get a hold of all this video in one place; it makes it secure. Oftentimes, when we talk to folks, we like to ask them "How many video links are just shared to the web out there in your company, on the variety of different tools that you have?" If you're talking to an IT person, they're like, "I don't want to think about it. I have no idea."

\[00:44:11.26\] Maybe it's transcribed, maybe it's not, but it's got company content in it. So if all that's in Rewatch, you have a simple little tool that's "Show me all the embeds out there, show me all the links that are out there publicly, and admins can lock that down or add policies to that, and stuff like that." Really, we're just trying to unlock knowledge that's trapped in these black holes. You'd be surprised by the number of companies that are just using G-drive for this, and they're dumping in there, they have no idea if people have the link... At best they're sharing it on Slack, and Slack just scrolls away, so if you're working at a different time zone, you're going to miss that. And we can unlock all that for you. That's what we're trying to do.

**Adam Stacoviak:** I really feel like the secret sauce is the transcription, because you're right, you can read so much faster. Whenever I first learned about Rewatch, I was like, "Okay, cool." But then I was like, "The transcription is..." It's one thing to transcribe, it's another thing to transcribe really good. And I'm curious if you can share details around that. I'm not asking you about that right this very moment, but I'd love to hear some details about that, because I feel like that is the thing.

One, it's the scary part for some companies because, "Hey, oh my. They're going to transcribe all of our stuff. Well, I'd better be SOC2-compliant," which you are. But then it's like, "Okay, now we have it transcribed. That's a powerful tool, because that could just jump to a particular spot in a video, and then watch real-time, versus scanning the hour-long thing." For us internally, the couple of things we've done so far with Rewatch - again, we have a small team; we haven't done it as a product thing, but it's more been like, we do a lot of audio production, and so I help other people who are not so much audio engineers learn how to fine-tune some of the content. We use a tool called Adobe Audition.

And it's not the most user-friendly thing until you learn a few things. Once you do, it's pretty easy to use. So you give them some classes, so to speak. I'm like, "I don't want to do this over Zoom. That'd be great. I like the person, I like to hang out with them, sure. But we'll probably talk for an hour and a half." Instead, I spend ten minutes, share the video on how to do basic audio editing, and that person, Gerhard, literally edited an entire episode of his own, because he needed to whittle down 45 minutes to 20 minutes, and he was the best who knew the content and what needed to be there.

Now, we have editors and stuff like that, but that was what captured my most attention. I was able to share my knowledge quickly, they didn't waste their time learning about it, they were able to jump in the video, and now we're doing that more and more with different aspects of our business, different trainings, and stuff like that. So as we grow and as we're doing more, we'll put more in there, but that's how we're currently seeing value from Rewatch. I'm like, "And it's transcribed." That, to me, was the killer feature. Now, what got me really was how good it was. How do you make the transcription so good? It's really good.

**Connor Sears:** Yeah. Well, I think we all have horror stories about transcription. Like Siri comes to mind; it's always wrong. What we've found that was really interesting - because we're using simple AI cloud-based transcription services that you can get off the shelf. And I think the definition of good and the expectations of good within the work context are different than it is when you are talking to a device like Siri, and it's almost supposed to be a human. So your expectation is that it's going to be as good as talking to a human. Of course, Siri's not a human, and definitely makes mistakes all the time.

What we find is that we have companies that actually embrace the mistakes when it does make a mistake, and they actually have a whole collection of mistakes that they find funny. It's almost become like an internal joke, which I think is hilarious. Because we're not perfect. I mean, I love that you are enjoying the transcription, and I do think it's extremely powerful, obviously. All of our customers get a lot of value from it. But I think we underestimate the power of words in this video market.

\[00:48:16.11\] I think being able to read faster than you're able to watch video is obviously really powerful. Humans make mistakes; the spoken word is very different than the written word. I'm sure if you looked at the transcript of this call, it would read differently than I would have written any of the things that I'm saying. And all those nuances really bring out the human aspect of what it's like to talk to people.

I think so much of what we're doing here is trying to create belonging in these remote, distributed companies, and being able to see, in case of a Zoom call that's recorded, being able to see the transcript is one thing, but also being able to see the chat that's alongside that video. Every company has a different sort of set of rules around chat. But it's either directly related to what's being spoken about in the meeting, or it's completely off-topic, and it's just like the back of the classroom-type conversations and jokes.

So I think whether it be transcription or whether it be the comments that are alongside of it, or the additional comments that happen asynchronously, or highlights that get created from it. I think all of this - we're trying to make a world where attending the meeting live is great, but attending the meeting asynchronously is as good. It's always been a second-class citizen. Even just watching a recording on its own, you're not able to participate, you have no agency into that conversation.

Going back to the transcription, I think the transcription is a key part of that. It has to be readable, it has to be understandable, and then you should be able to comment on it, you should be able to continue the conversation well past that meeting.

**Adam Stacoviak:** Yeah. Because now you're by yourself. If you're rewatching - which still is a great brand name, by the way.

**Connor Sears:** Thank you.

**Adam Stacoviak:** If you're rewatching something later on... I mean, you just can't help but say rewatch; that's why it's so perfect. If you're rewatching these meetings later on and it doesn't have the kind of tooling you built around this, you're basically by yourself and it's boring. You're almost checked out, unless it's like a requirement; \[unintelligible 00:50:20.11\] getting a bonus because you watch the video, or something like that.

**Connor Sears:** Yeah. You have to keep the browser open, or you don't get the checkbox in your training.

**Adam Stacoviak:** Or there's some sort of intrinsic motivation to continue. And otherwise you're like, "This is pretty boring. I'm by myself." But at least if you have the transcription, you've got some of the comments, you got some prior coworkers' highlights there... There's a waypoint. There's almost like a guide; the community remains, even though they're not there real-time.

But my history with transcriptions, machine-led transcriptions at least, has not been that great. Now, this podcast - all of our shows, are transcribed by an awesome human named Alex. He's listening to this right now, he's going to transcribe me telling you his name. So we've gone human-led transcripts, even though there's possibility for AI. There's a lot of terms we have on this show, and different shows we do, that just need that human touch, really.

**Connor Sears:** 100%.

**Adam Stacoviak:** A machine can do it, sure. But it's almost harder to go back and correct the machine-led version of it than it is just to have the human do it in the first place. And it still feels so weird to say this human does this job, like as if someday the robot will replace this human. It's just so peculiar to even talk in that aspect. But there's just so much nuance in technical conversations that is challenging. And we have this unintelligible -- we actually have a little bit of a markup around our basic markdown files that are our transcripts. They are all open source on GitHub, so if ever you want a testbed to go against, you can use our transcripts, or whatever. But we have unintelligible for times whenever you, or me, or someone on our show would say something that you don't know; they're open source, so you can go for Hacktoberfest and come in and fix unintelligibles and get your DigitalOcean T-shirt, for example.

**Connor Sears:** Sure.

**Adam Stacoviak:** \[00:52:14.12\] But my experience with transcriptions hasn't been, from a machine-led standpoint, that accurate. When I use yours, maybe it was luck of the draw, I don't know. But it just seemed really good.

**Connor Sears:** Well, we tested a lot of different ways of doing this. And I will be honest, the first one we used - I won't bad mouth the system - but it was gibberish. Like, it made no sense; it was very disheartening. This was early on when we first tested like, "Okay, can we even possibly build a product that was good enough for this? Or is this just a fool's errand, and the transcription is going to be terrible, and this is just going to be a marketing gimmick, and everybody's going to never use this for that purpose?" That was the question we were trying to answer.

And we used a couple of test videos for that, and we ran it through a bunch of different services, including some really big-name ones, and it was just bad every time. So when we did land on what we're using now, it's a mixture of... It supports a lot of industry-specific jargon, which is really important; it supports the ability to add your own glossary of terms as well, which - we don't have a feature for that, but we will. And the ability to add your own internal glossary. Because every company has their own terms for a bunch of stuff; they make up code words for projects and stuff like that.

The other challenge is proper nouns, like people's names. That's the other thing that we're constantly looking to improve as well. But it was also important to us that a variety of different accents work. I slur a lot, because I'm from Kentucky, and I don't know what it is, but I slur a lot. Maybe you'll hear it on this podcast. When I say have an accent, I'm not using myself as an example there, but we don't work with a bunch of people that sound identical to each other. You have to have the technology be inclusive of a lot of different people. So that was another aspect of it. And I think that is something that we've put a lot of care and effort into, to make sure that the experience if you're using Rewatch and trying to understand what was going on in a meeting was actually good. And yeah, it messes up sometimes. I think there's a difference in expectation that we're comfortable with.

The other good news is that it gets better all the time. My favorite mistranscribed word was - we were talking about the company Mailchimp, and it didn't catch it as the company name at first; it does now. But at first, it was a "male chimp." I was reading the transcription, and I'd forgot the context of the conversation; I was like, "Oh, they're talking about the company." \[laughs\] It was just one of those funny things. But more and more, I think we're excited about even the last two years or a year and a half of doing this. The technology is just getting so much better.

**Adam Stacoviak:** Right.

**Connor Sears:** It's another reason why when -- you know, people ask, "Why now?" There's a lot of reasons why now. The technology for transcription is good enough that it's usable now, that it's actually useful and valuable to read a transcript that's done by a computer. I think there will always be a space for the human transcribed content. In fact, a lot of large companies that invest a bunch of time and effort, and money into big events, whether those be internally or externally, a lot of times they want to make sure it's perfect, and that it is done by a human. So having a way for them to do that is something we're interested in. But as a baseline, that transcription is pretty good, and it's to a point now where it's valuable for companies.

**Adam Stacoviak:** Yeah.

**Connor Sears:** \[00:55:58.06\] The other side of it is I think we're just... When GitHub -- going back all the way back to that initial use case, when GitHub started, the amount of videos they were uploading was not that much, comparative today. You and I are recording this podcast, and there's video for us. Video is now a byproduct of the work we're doing every day. We don't wake up in the morning -- well, I take this back. You might do this, but most people at work do not wake up in the morning and say, "I need to produce a video." It's just something that happens out of the normal work we do. I think the closest thing we get is...

**Adam Stacoviak:** Yeah. It's exhaust.

**Connor Sears:** Yeah, exactly. Like you were saying, that training for the Adobe software. Somebody internally at our team decided to do a walkthrough of 3D software Blender today. I was watching that, it was a training video for how he produced some marketing material. That's the closest we get to this very intentional, "I'm going to record something for people." But the vast majority of content being created today is, just like you said, it's exhaust. And I think that's where so much value just goes right out the window if you're not intentional about it... And Rewatch sort of catches it for you.

**Adam Stacoviak:** Yeah. I really feel like the clincher for me is the transcription, because if you're a product team trying to use Rewatch and you're trying to catch up -- I was just thinking, if you're rewatching this video from your team, it's like, well, you can almost say the next time you have a meeting, "Oh, I saw you at that one thing, leading that class." It's still like the office, so to speak, in quotes "the office", without having the actual building be the office.

The office essentially is the comings and goings of those who are involved in the company, and where they connect. And in a lot of cases these days it's a digital connection, especially when it comes to... You know, technical companies can tend to have a lot of remote opportunities, more so than say like rocket science. They tend to have to be near the rockets. Sure, they're theorizing and stuff like that, but at some point, you have to test it, and you generally put that thing into real-world production, or something like that. That's one example. Or if you're building a car, you can't build a car from your home; it's pretty challenging to build a Tesla from home, for example.

**Connor Sears:** I don't know. 3D printers are getting pretty good.

**Adam Stacoviak:** Sure. Yeah, for sure.

**Connor Sears:** You wouldn't 3D print a car, would you?

**Adam Stacoviak:** I would 3D print a part for a car, for sure.

**Connor Sears:** Yeah.

**Adam Stacoviak:** Everyday.

**Connor Sears:** \[laughs\] For a lot of days, until it became a car.

**Adam Stacoviak:** That's right. Until it became a car, sure. "Where'd you get those wheels?" "I made them. I made them."

**Connor Sears:** I think what's really interesting about what you're saying about recreating the office for a lot of these companies - I think that is absolutely true. We're trying to recreate the office without the bad parts. I think, speaking as somebody who builds software, the amount of focus time you actually have to get in the flow of work - you need hours of time to do really deep considered work. I think, especially since COVID, there's been this idea of Zoom fatigue, and everything else, but nobody's ever described it other than you're tired of meetings. But I think it's really interesting, because not only are we, a lot of us making that transition to working from home, where you don't have that human connection as automatically as you used to by just going into the office... So you kind of want that human connection, and a lot of people will want to hop on a call more often. But on the same side of things, it's now easier than ever to just book somebody's calendar. It's not like you have to book a room anymore. There are no roadblocks into somebody taking some time from your calendar. I think those two dynamics compound against each other and create that idea of just meetings all day long. I mean, I don't know if you're a big TikTok user, but just scroll through TikTok, and you will see influencer after influencer talking about how much they're on Zoom calls or whatever, and all the funny things that happen there, and how tired they are.

That's not the world we want to create. We don't want to recreate all the problems, and maybe even make it worse because your calendar is more filled up with meetings. We want to make it so you get the benefit of working from home, all the benefits of working remotely, all the benefits of working asynchronously.

\[01:00:20.25\] And I think video -- we did this a long time ago with text, whether it be chat, or docs, or whatever. But video and meetings just never really made the leap to this asynchronous way of working, and the vast majority of meetings can be done asynchronously. Some people say like, "Oh, this meeting could have been a Slack message" or "This meeting could have been an email." Those are all fairly true most of the time, but there's still a place for meeting synchronously.

**Adam Stacoviak:** Sure.

**Connor Sears:** But the problem has always been it's impossible to scale that, and there's only been like three ways to scale a meeting. You either have more meetings, you have bigger meetings, or you have longer meetings, and all those are terrible options. I don't want to live in that world where I'm just having to live like that. But with Rewatch, we always like to tell people, "Have a smaller meeting. Have a shorter meeting. Don't feel like you have to invite everybody just so you can say that everybody had access to the information." Use Rewatch to have a two-people meet up, record that and share it out with everybody, in a way that Rewatch allows those folks that weren't able to participate live, they can still participate asynchronously. They can still have agency into decisions that are being made. Even people that join a live meeting. Not everybody likes to join a meeting and be the loudest voice in the room. Being able to give it five minutes, think through a question a little bit more, and then participate afterward in a way that still has the same weight as speaking in a live meeting... I think it's really powerful. It makes it so the loudest voice in the room isn't the person who just talks the most, it allows other voices to participate. I think that's something that we're really proud of, is when we hear other companies getting that value out of it.

**Adam Stacoviak:** I think you really solved for the "missing out" component; like, you attend so you don't miss out. Actually, if you have a culture or a team philosophy that has this tool available to them and you have these practices in place to record smaller meetings or whatever, then I don't have to feel bad for missing that meeting, because I can catch up. That, to me, is some interesting aspects. Obviously, we here at Changelog are a smaller team, so we have that problem less, but I can empathize because I've been there before.

I can understand how on larger teams someone will be like, "I want to stay heads down today. You know what, you guys are meeting, cool. Fine. Tuesday is my head down day. You schedule on Tuesday. Tough. I can't be there." Maybe they're more sweeter than that, I don't know. I mean, that's all I am, just tough, "I can't be there." But the point is this is my time, I've locked it down, and I'm going to focused on this feature today. I'm going to knock it out, because I need to get this win this week.

Now, you don't have to actually attend that meeting, because you get almost the same amount of value, especially if you didn't have a lot to give to the meeting, but there's a lot for you to take from it. The problem is I think the fatigue came from it as you felt you had to be at all these things to stay connected, and you really didn't have to. Maybe this is kind of left field, but Rewatch - sure, I see how you're enterprise-focused; I wonder if ever you thought that this should just be a feature that Zoom has. Because it's like the whole Dropbox thing with Steve Jobs. If you remember that, where Steve was like, "I'm not buying Dropbox. They're just a feature." Right?

**Connor Sears:** Yeah. But it worked out well for Dropbox. \[laughs\]

**Adam Stacoviak:** Yeah. Sure. But I wonder if you've thought about that. Obviously, you have bigger goals in mind. This seems to be an easy component to something like Zoom. Obviously, you're integrating with them. How did you consider that, or did you consider that at all?

**Connor Sears:** \[01:04:04.25\] Sure, yeah. For us, we're obviously, like you said, integrating with all these services. Because speaking frankly, going in and displacing a Zoom at a company is really difficult. There's a lot of companies out there that are trying to build alternatives to live conferencing in a way that can actually move through an organization. I think that's a really admirable thing. It's really difficult when you have Google Meet for free, you have Zoom as a standard, you have all these other tools in the way.

For us, we wanted to meet where companies are at, and where your team is. And where they're at right now is they use Zoom and they use Google Meet. It's no secret that Zoom cloud storage is a thing. The challenge is I think it's a matter of focus. This goes back to like, why is any smaller company able to maneuver faster than a giant company? Well, the things that got Zoom so popular was how good its latency is, how good is audio is, how consistent that quality is. By the way, I don't know about you all, but when I use Zoom versus Google Meet, it's surprising where you see their priorities. Zoom is great at prioritizing the audio, because that is the most important thing when you're communicating with people. The video might stutter, but the audio gets through.

My experience is it's the opposite truth with a lot of these other services. The video quality is way better. It's way better than 720p, but then the audio breaks up and I have no idea what they're talking about, and the whole thing falls apart. I think that's a really hard problem. So for us, we're not focused on that problem, much like Zoom's not focused on our problem. I think that's how we approach it. We know that everywhere on the value chain, there's opportunity-built businesses. For us, we're really focused on making the best, world-class, on-demand video player and video experience for teams to communicate and share knowledge.

**Break:** \[01:06:05.07\]

**Adam Stacoviak:** In prep for this I ask a couple of questions, and one of the ones I like to ask a lot is mistakes and failures, because I love the raw factor of this show really. It's not, "Okay, Connor, you're amazing. You were somehow lucky to raise this venture capital, and you hit product-market fit early, and you got these enterprise customers..." Sure, that's all great, but I'm sure at some point there was some fails, some mistakes, some stutters... And one in particular that I think I've personally struggled with in growing Changelog has been not scaling myself quick enough.

I took this advice from Jason Fried a while back from Basecamp, like "Do a job yourself first before you hire for it," and I took that too far and have taken it too far. Maybe speak to that - what do you mean by not scaling yourself as a founder fast enough? Because you tend to be in charge of lots and have lots of responsibilities, and you want to make sure it's done perfect, right, better, whatever. How do you mean, and how do you do that?

**Connor Sears:** Yeah... Well, I take comfort in hearing that I'm not the only one. Scaling yourself is probably the most unnatural thing that a lot of people do. It's figuring out that you can do more together than you can alone. For some reason, truism as that is, and we would all nod along with that, nobody would argue against it and yet, I feel like everybody I know struggles with it. For us, it manifested in a really obvious way, in that we just didn't hire fast enough. We thought, "I'm a designer. I can do all the design. This is fine." Or Scott, my co-founder, "I can do all the engineering. We don't need to hire engineers." And I think we took that as far as we could and probably crossed that line too much.

I think one particular time in which this sort of manifested into a real consequence - we were working with a large company that everybody would know about. I'm not going to name them here. But we were doing a deal and we had gone through all of it. We were really excited about going through their security questionnaire, which most people don't say, but as I described earlier, we're feeling like our posture is really good there. We're going through it all, we're describing how good our security is, and then they finally were like, "Hey, we need you to know the org chart. Who's in charge of security, who's..." It was a two-person org chart; it was just Scott and me.

**Adam Stacoviak:** That's so funny.

**Connor Sears:** And they looked at it, and they just, "Hey, are you serious? Did you forget to fill this part out?" We were like, "No, we're doing everything", and the whole deal fell apart. \[laughs\] And that was the reason why. It wasn't that they didn't believe us. I think even from that standpoint, it was evident that we weren't scaling ourselves, and that there are natural consequences of that, like whether or not things slip through the cracks. Or in my case, I can't do all the design, it turns out. It turns out that I need a lot of help with that.

\[01:12:09.23\] Or that Scott being the only person who can fix the website if a bug pops up, and having to wake up in the middle of the night all the time, and not being able to distribute that burden. I think those are all just very small examples. But I think this is something that we constantly deal with as a team.

Now, there's this fine balance between being lean - and we do, we try to run a lean, efficient startup that is focused on building a business. We're not trying to spend a bunch of money just because you have it. I thnk that story is played out, and it's not one that I want to sort of participate in. So when we spend money, we do it very intentionally, and sometimes what that means is that we hold off hiring a role until it is absolutely painful to not have a person doing this.

But to your point, I think the other thing that needs to balance that out is getting too comfortable just hiring and then saying, "Well, that problem's solved. Somebody does that now. I don't have to worry about it."

For me, personally - as a founder, you sometimes err towards focusing on what you like doing, even if that's not what's best for the company. So there's been times when my focus really needs to be on go-to-market, it needed to be on sales. All this stuff that, before starting a company, I really don't have that much experience with. I have zero experience, let's just be clear. But that's the beauty of startups, is that you're learning constantly. And it's not just enough to learn, but like you said, you have to do the job, you have to do founder-led sales, you have to learn everything you can about things that you're not comfortable with. If anything, a startup puts you in very uncomfortable situations, where you have to sink or swim, you have to learn how to do something. And it could be sales, it could be marketing, it could be a little bit of engineering, it could be anything. Support, customer success - all these things, you can't outsource it.

Every time I talk to a founder and they're like, "Oh, I hired a contracting firm that will just handle this for me", or "I just hired this person now. I don't have to think about that." On one hand, more power to you; that's great. If you've found somebody who can do this at a high level, that is great at the job, and that you can put a lot of trust into - fantastic. It's what everyone is looking for. But I would still say, especially early on, you just can't outsource core parts of your business.

Finding that balance, it's a daily -- I wouldn't call it a struggle, but it's a daily challenge. It's like understanding, you've got to scale yourself, you can only do so much, and you have to focus as a founder on where you can provide the most value for your company. At the same time, you've got to understand the different components of your company, and you've got to know enough to jump into any conversation and at least have some sort of understanding of what's going on, while building a team around you that can educate you.

I like being able to get into a room and saying, "Hey, everybody. You know I'm an idiot when it comes to X. So treat me like an ignorant fool, but here's some questions I have." And then that age-old question that's like, "What are the unknown-unknowns for me that you all know I should be asking about, but I'm not asking about?" That helps level you up, and definitely, it's one of the things I'm most proud of is the team that we are building, that can bring that expertise to the table, and feel comfortable to talk to me when I'm not thinking through something deeply enough. Because oftentimes, I look at something and it's a bunch of arrogant people do like myself, I say "This is simple. It isn't that complicated", and actually it is. "Okay, cool. Let's talk through it and let's figure this out together."

**Adam Stacoviak:** What gear do you think that you're in? If you're driving a car, or you're just a vehicle of some sort, do you think you're in the slow and steady gear, or the fast and whatever gear? Pick your version of fast.

**Connor Sears:** \[01:16:11.03\] Sure. I think it's very easy to look at other companies and see just a trend of, "Hey, they started off slow, and then they got faster and faster, and then it just grew, and it was huge." What we've found is that it ebbs and flows. Now, I don't mean that it gets slow and steady and that it's comfortable, but sometimes you need to make sure you've got a handle on where you're at before you throw fuel on the fire. We're mixing metaphors here, but...

**Adam Stacoviak:** Making fire, driving cars.

**Connor Sears:** Yeah. For instance, don't go hire 20 salespeople if you don't have product-market fit yet. That's not going to solve anything, and it's going to cause a lot of other problems. So it's not so much "keep it slow and steady", but I think you do need to get to a place where you feel confident in the core value prop, and the value that you can prove out with all your customers. You need to have confidence in that traction before you start saying, "Alright, let's scale up and move really fast", with confidence in scaling up and go-to-market motion. I think those are the transitions that none of us necessarily expect going in or when it's quite going to happen, but I think those types of decisions and discernment that you have to constantly be evaluating in your company. When's the right time to swing?

**Adam Stacoviak:** Yeah. Once you see a pattern in your successes, it's like, "Okay, we can probably recreate that." Now that we have GitHub, Brex etc, whatever the customer path you've hit, it's like, "Okay, we've achieved that confidence", and not so much to leverage their brand, but to leverage the learnings and the product direction that's currently in place. We can recreate the success here, in this vector of a company. And if we have a team that can outbound, or if we can attract them to our pages, or whatever, on Twitter, or maybe you're doing TikToks, I don't know... Maybe you're just on TikTok, watching this...

**Connor Sears:** I wish. My marketing team won't let me. They really won't let me. I'm a big believer in TikTok, but oh well.

**Adam Stacoviak:** Okay. We're two peas in a pod, man. I love TikTok. I think it's actually an underused marketing tool, but I just don't know how to use it for us. I like to consume content, but I haven't figured how to create content. I'm not sure I'm much of a creator on TikTok.

**Connor Sears:** You know, The All-In Podcast has done a good job of using TikTok. I don't know if you watch that.

**Adam Stacoviak:** Is that Jason Calacanis' podcast? Yeah, I've seen it. They did a really great job of clips, and I love that. That's what we do here too, we do a lot of clips. We mainly share them on Twitter. We started to do more on TikTok, but I really appreciate that, because I don't have to be a loyal end-to-end listener of that podcast to get some value from it. That's what I love most about just the clips philosophy. But in particular, the way they have their back and forth between the cast on that show, I really appreciate the... Even pushback sometimes from the different characters on the show. I'm a fan. Yeah, I agree. I think that's a good example. It's a good example of using your byproducts to put it on TikTok. Where were we going with that, with TikTok?

**Connor Sears:** Oh, I don't know. I brought it up. I'm constantly bringing it up, TikTok. I think it's a really interesting -- you know, looking towards the future, it's video. The context of TikTok is obviously a social network sharing frivolous videos, fun videos. There's obviously an advertising model. That's a very different world than what we're talking about.

**Adam Stacoviak:** My "For You" feed is not at all -- I mean, there's occasional comedy in there, but it's mostly serious content. It's mostly DIY, here's how to level up your life, here's how to motivate your... And I've got a lot of SDR-type stuff, like sales development roles or business development roles in there; there's a lot of great craters on that front... And I'm just attracted to that kind of content, which is maybe why hiring has been hard, because I really like a lot of the aspects of our business.

\[01:19:50.19\] I like to do a lot of the jobs, but I can't do them all well myself. I will do them all mediocre and fail, often potentially even, instead of just doing one job really well. I'll bring up a past guest up, Joe Percoco... He's the co-CEO of Titan. I'm a big fan of what they're doing at Titan. I don't know if you have heard about them or what they're doing, but they're doing some interesting stuff in the investment space. But one thing he said as a CEO in particular, that is the job of the CEO is three things. It's capital, capital, capital, basically. And it's find capital, or generate capital. That's your job as a CEO. Where to put that capital, what the sequencing is to make your company grow, and then deploy that capital. That's the only job as a CEO. That kind of hit me, because that is not my focus.

Now, obviously, you can call yourself a CEO of a two-person company, but I still have a lot of those attributes, even if I'm not commanding a 20-person or a 50-person team. In many ways, we should have five or so people, but we just tend to do all the jobs ourselves. So we're working on that. But I kind of liked that aspect, and I'm really glad he gave that advice, because that made me think. What do you think about that kind of advice?

**Connor Sears:** Yeah. As you're talking about that, I'm just nodding along in my head, thinking that that's one of the things I like most about Rewatch. And I don't mean Rewatch the product necessarily, but Rewatch the company, or any startup. This is a whole conversation about recruiting and what kind of person wants to join a startup versus going someplace safe. By the way, when I say safe, I don't mean that derogatorily. Is that a word, derogatorily? I don't mean that to be derogatory, but I think there's a certain type of person, myself included, that's broken; that doesn't know how to function in a big company anymore, that wants to be close to the business.

And to your point, capital, capital, capital - I think whether you're CEO or an individual working on a feature at a startup, one of the benefits of joining a startup is that you're close to that conversation, ideally. They want to have insight. You may be a software engineer, you may be a designer. I just had a one-on-one today, and that was the question, like "Hey, how are we doing? Not the product roadmap. That's fine, I have insight into that. I want to know how the business is doing. How are we prioritizing the roadmap to position ourselves best in terms of the business?"

And I'm realizing that more and more people are really hungry for that content, and I think back to all my time at different companies of various sizes. Well, they're giant companies today, but they weren't when I was there necessarily. And either we had no insight into how we were doing, or that was kept from us... Or, I don't know, maybe I just didn't have the interest yet. But so much of what I do is anytime we make a decision, frame it within the context of the business. "Why are we doing this? Why are we prioritizing this big bet on the product roadmap? What are all the benefits, not just to users?" It goes back to that designer mindset of why I'm so drawn to this. It's because it's a multi-faceted decision. There are benefits to the user, there's customer requests that certainly have sort of merit and sort of help us prioritize this. But there's also just strategic things that we want to do that set us up better for the next thing. Or there's a reason to this sequence; or there's a reason why we're not parallelizing some of this work and we are going to do this, then that, and then the other thing. Explaining your thought process around that. I use Rewatch, I literally pull out my phone and record it much like a TikTok, and just have an authentic conversation, or just, "Hey, here's my thoughts on this."

What's really great is that people push back on me. They're like, "Hey, why are we doing it this way, and not this way? Given your criteria for this decision, I think we should do it this other way." I think that's really interesting and powerful. And how you deploy capital, how you raise capital - all of those things are the business, and you're not alone in it.

\[01:24:01.18\] They always say that CEOs are very lonely and I understand that. There are certain things that you just can't expect other people to understand at your company or whatever, but there's plenty parts of the job that if you're just transparent about it, and whether or not you're maybe not sure of something, or you are sure of something and you want to get it out there, just communicating that and allowing... You know, in our case, we use Rewatch to actually distribute that thinking. And it creates a much more authentic conversation that's still asynchronous, that's still watchable on-demand, and all that stuff, so I don't have to call an all-hands just to address a decision that we made. It's just a quick thing that we can do, and it feels... Unlike an email or a Google Doc that's sent out... I don't know how many times I got a big job like the CEO, you get on this big company-wide...

**Adam Stacoviak:** A memo?

**Connor Sears:** Yeah, a memo. You're not replying to that. I'm not replying to that email. The weirdos that do, you're always like, "Ugh, they just replied to the whole company. I don't know... Whatever happened to that person?"

**Adam Stacoviak:** And he's pushing back. Fired.

**Connor Sears:** Yeah, exactly. There's a lot of fear on that. But being able to have an open dialogue where you're reminding people you're human. This isn't a written memo, I'm not reading from a note or a teleprompter.

**Adam Stacoviak:** It certainly takes the pressure off, for sure...

**Connor Sears:** Exactly.

**Adam Stacoviak:** ...in what you're communicating, because the medium sets the tone of the message, so to speak.

**Connor Sears:** That's right.

**Adam Stacoviak:** If you're writing a memo, it's a bit more formal, whereas if you're TikTok-style approachable video, "Hey, by the way, pushback on this idea; this is what I'm thinking." That's a great feedback loop, and I think that's one thing that I think really where Rewatch helps fit in as a product, and maybe that's why you've seen some fit, or obviously why you're seeing some fit, is that feedback loop that wasn't there before, that is now there and impossible, and there's that community that sort of jumps around it.

I'm going to mention the show with Joe one more time, because there was a question I asked him that I don't often ask. I think that might have been the first time I asked, but it was, "What keeps you up at night?" You said the word "sequencing" in your response, and that was actually exactly what Joe said, was this idea of, "What is the right sequence to get this business right?" And he described it as different flavors of the business. So you can build Rewatch one way, optimize for this particular flavor, or this particular outcome, or you can build it this way, with this particular outcome in mind.

I said, "Joe, what keeps you up at night as a CEO?" He said, "Sequencing." It's the first time I heard that answer. So don't steal Joe's answer - maybe it is sequencing for you - but what would that answer be for you?

**Connor Sears:** That's really interesting, I didn't know he said that. I don't know if I would use those words, but making sure you're focused on the right thing is what keeps me up at night. Or when I feel like we're not focused on the right thing, and I'm at fault for that, because I sent us all down this path, and maybe we've learned a little bit more. Oftentimes -- again, this goes back to the... At the end of the day, it's pride and an inflated sense of self when you feel, especially a CEO, whatever that title is, is inflated enough itself. But you're taking all the responsibility of a decision, and if at any point you feel like, "Oh, I can't change my mind," or "With new information, we can't shift", that's when you're just in your own head. And honestly, it is pride that like, "Oh well, everybody's expecting me to have known it before." No, they don't. They don't expect that of you. I've always respected leaders, and what I hope the people that I work with see in me from time to time is, "Hey, there's new information. We've learned a little bit more, and we need to change things."

\[01:27:43.23\] So yeah, the things that keep me up at night is usually the things that feel out of your control, but actually are, and so you just sort of have to walk yourself back from that. But I do think there's some merit into the sequencing thing. I don't know what his answer exactly was, but when I think about it, you're lining up dominos; you're hopeful that this is compounding value and impact on the business as you go. So you're afraid you've made the wrong bet. And there's ways of de-risking that. I think the way you do it is talking to customers, talking to your team, walking through, and playing out the expected story in the future.

It's one of the things - I know that's played out now, but Amazon always writes the press release, for instance, for a feature. Well, I think you can do that and project it out into the future and say, "What are all the things that this is expected to do?" but also, do like a premortem. I know people do post mortems all the time, but like "How's this going to fail? What are we going to run into? What are all the different ways that you think we could fail going forward and how can we mitigate that?"

I think honestly, planning... And when I say planning, I don't mean like a six-month process to plan, or a business plan necessarily, but just talking through that... It helps. Again, we have open, transparent conversation, and I try to record my raw thoughts sometimes, and make it clear when they're wrong. "I don't have a high level of conviction around this idea yet, but here it is. What if we did X, Y, and Z?" I think those are the sorts of things that help with that quite a bit.

**Adam Stacoviak:** I kind of disagree that it's played out, because I think more people need to hear that sort of post-mortem, pre-mortem, working backwards philosophy. Because I think if you're listening to this show, both you, Connor, and the audience who's listening - if you're on this show, you're listening to the show, and you haven't read Working Backwards yet, you should at least check out the Prime chapter, which is amazing. They talk about Amazon essentially, how they built Prime and all the things that went into it. And it's this Working Backwards methodology, that is really, in a lot of ways, the secret sauce of Amazon. It's the press release first, or the "how can we fail" idea. I think more people need to hear that, and potentially put it into practice, despite how small.

We try to do that here, like "How can this fail? If we launched this new show, or if we took on this new partner, if we did this in this way, or we did these things, in what way would our business fail? Or in what way would the perception of who we are, who we are as a business change?" We try to think -- I mean, you try to future some of those things, but that idea of Working Backwards I think is definitely not overplayed. It needs to be spoken from the rooftops and scrutinized and tried again and again, because I think it's a powerful thing.

**Connor Sears:** Not just for business, for life. Honestly, not to business-book your life or whatever, or your personal life, but there's so many times where it's just like "Hold on, what's the worst...?" I'm not speaking intelligently about this, but I think there's some aspect of stoicism where it's like, "Hey, what's the worst-case scenario, and let's work backward off of that." Actually acknowledging that makes you feel good, because you're like, "It's not that bad." The worst-case scenario, there's ways of maneuvering, so yeah, I totally agree with you. You're right.

**Adam Stacoviak:** Ways to get around fear. Yeah. "What's the worst that could happen? Okay, what's the likelihood that will happen? Okay, now that we've solved for that." It's like, "Okay, is it going to happen? Probably not. Let's just give it a try", that kind of thing.

And it's also this idea, just generally for ideas or choices in life, this idea of trying it on. That's kind of what you're doing. It's the aspect of taking a piece of clothing and putting it on your body. "Does it fit, do I like it, whatever? No." That's the actual idea, is try this decision on. What would it actually be like tomorrow if we launched that feature? How would our teams change? Will we need more support around? Will we need a higher -- does that take us closer to or further from our enterprise goals? Because that's where you're being led and seeing success there. Would that mean we need a self-serve avenue, and does that actually depreciate our ability to win enterprise customers? That kind of thing. You've got to try those things on, and that's what that is, working backwards, trying it on. Does it actually fit?

**Connor Sears:** Yeah. You're speaking my language as a designer too, because it's prototyping.

**Adam Stacoviak:** Okay.

**Connor Sears:** \[01:32:07.03\] When we were building design tools at Facebook, we'd always say like, "Hey, let's build tools to help designers live with it." Hey, I don't know if this is a good plan. It could look beautiful on a canvas, it could look great in a video interaction, mobile interaction; it could look amazing. What's it going to feel like to live with this decision for a week, a month? Okay, you need to figure out a way to live with this decision. I think our business is the same way. We live with decisions, either by playing it out and projecting out, but the best-case scenarios, with feature development, for instance - if you're taking a big bet, the faster you can get the very minimum... This goes back to the first step we took with Rewatch, is what is the bare minimum piece of valuable software that we can build, the simplest version of this thing, and just live with it for a little while?

We've got a feature - two features actually, that we're using right now. The first one I'll talk about, and then the other one, I won't. But we're integrating, as I mentioned earlier, Zoom chat. Zoom chat' is are really interesting, because there's not a transcript, it's not a comment... It could have something to do with the timestamp, it could be totally different. There's been a lot of experimentation with how is the right way of surfacing Zoom chat for other people who are watching a video and recording asynchronously.

We tried a lot of different ways, and we lived with it with our own team meetings, and it works great. Then we realized we were kind of too self-aware of the feature and we were using it in the perfect way. But over time, it's just iteration and product iteration. But I think it's really important to live with it. Hopefully, that's with a real context of real data and things like that. Anyway, it's a whole other conversation about how to do software development, but I think it's all intertwined.

**Adam Stacoviak:** So how does the feature work then? There's a sidecar, not really chat, but it's kind of chat? Or is it like a text attachment to the artifact that is the video? How does it work?

**Connor Sears:** It's kind of both, actually. Sometimes, it's very great to have it inline in the sidebar, just like a comment aligned, almost like a document next to the transcript. But when you click to expand that conversation, you need to really have the context of the other chat that's going on after and before. So yeah, we pop open a nice little modal for you to read the chat at any timestamp, and have that visibility. But we don't lose the serendipity of somebody giving you a thumbs up, or being really excited about something the speaker said, for instance. So finding that right balance of -- hey, sometimes chat just needs to be in its own little window, like responding to a previous chat message that could have been a minute prior, right?

**Adam Stacoviak:** Yeah.

**Connor Sears:** But sometimes it's nice to see an in-the-moment reaction to something the speaker said. So finding that balance -- and I know I'm doing a terrible job explaining the UI here, but we think we've found a really good balance.

**Adam Stacoviak:** Your verbal version of the UI is terrible. I'm just kidding. It is hard to grok, but I kind of understand it. But I am thankful that you're doing something with it, because so often do you have... Like, even here in Riverside, we record our podcast with Riverside. And there is a chat option with it, but that chat just goes away. It's never an artifact of the ending, at least not so far. Maybe down the line, they'll make it a feature. But after this, we get the video version of it, we get the two audio pieces, there's a couple of other pieces to the tooling, we get some screenshots even... But the chat, which is sometimes a link or several important links... Mostly it's links, because you're already on the video, so there's no sense really to have this extra linear piece of content that's chronologically important somehow. Maybe it is, maybe it isn't. And you all have seen that challenge, like how do you really fit it in? But just abandon it altogether is also not a good solution, because you're like, "I want to keep this window open, because there's some things in chat I've got to pull out now and put somewhere else that's completely separate from the artifact." And if you're going to integrate with Zoom and suck the video in, don't leave the chat there and just abandon it. You've got to do something with it, so at least you're bolting it on at worst-case.

**Connor Sears:** \[01:36:08.23\] Yeah, absolutely. Losing context around, for instance, a link that's shared... Well, how many people have been referencing an internal Wiki or something at their company, and somebody post a link in chat? What if somebody's watching that after the fact? They don't have that link. In Rewatch's case, it's referencing another customer call which is in Rewatch; so not being able to see that link pop open.

There's all sorts of metadata around the conversation that we're having, whether it be the slide deck that you're using to present right now, or whatever you have - those need to be attached to the video in some way. The more you can integrate that into the experience, the better.

**Adam Stacoviak:** Yeah. It almost needed -- I was thinking modes, because it reminds me of... Gosh, what is that blog? I can't believe I'm so old, I can't forget -- WordPress owns it; it was like the original blogging platform.

**Connor Sears:** Oh, Movable Type?

**Adam Stacoviak:** It was after that one.

**Connor Sears:** Good question.

**Adam Stacoviak:** What is the name of that? I can't remember it. But I'm sure like...

**Connor Sears:** If I find it, I'll throw it in the chat. \[laughter\]

**Adam Stacoviak:** Please. Yeah, please. Well, they had like different modes. You can put a video up, you could put a comment up... It had different modes, essentially, when you published. And it was super popular, very design-focused... You should totally know this, Connor...

**Connor Sears:** Is it Tumblr?

**Adam Stacoviak:** Tumblr. Yes, gosh. How did I forget that? Tumblr.

**Connor Sears:** As soon as you said it had different types... Yeah.

**Adam Stacoviak:** Yeah. Movable type does ring a bell on that front. But it had different modes when you published. Okay, is this a video piece of content? So it's almost like that, where it's like, "Is this presentation slide-led?" That way when you uploaded the video and the slides coincide, because obviously, they're connected... In terms of the linear fashion, the chronological flow of the video content is going to be in line with the slides, potentially, in terms of advancing and whatnot.

**Connor Sears:** Definitely.

**Adam Stacoviak:** It's almost like you need to take that into account. But that also complicates things.

**Connor Sears:** It does. But I think you're onto something. It's one of the best parts about our product roadmap... And going back to the challenge of the tools, like sequencing out and seeing all these, for lack of a better word, obvious things that would make the product way better. That list goes on and on and on. It's very self-evident. I'm sure a lot of the listeners, yourself, are thinking about things you would expect to see or want to see. Sometimes that's the thing that's most frustrating, in saying, "We know that we want to do this, but there's several other things that are prioritized." I would say sequencing gets to it, but it's also prioritization. Sometimes prioritization is painful, if you're doing it right.

That's the exciting thing about this. From a product roadmap standpoint, I don't know if you've ever worked at a company where you're just like, "What is the next thing we possibly could do to this thing?" Hopefully not; hopefully we're all more creative than that. But I think with video, it just feels endless. I think that's also a risk. You can get spun up on a lot of different ideas that get you distracted from the core thing.

**Adam Stacoviak:** Since you say, "What else could you do with it?" how often are you confused with say Loom or other competing products? How often do you have to explain Rewatch in comparison to something else? Because even in my early days of using it, I'd already been a Loom user and I'm like, "This is very similar, but not the same. I can use Loom in these ways, but Rewatch is totally focused on this being your GitHub TV or your Changelog TV." How often, from a market-fit perspective do you have to constantly push back on what another tool is and what you're not, in comparison to it, because maybe it has -- like, Loom is really well-known; not that Rewatch isn't, but I would say it's got a brighter brand awareness than Rewatch has.

**Connor Sears:** Loom's been around for a while, yeah.

**Adam Stacoviak:** Right. Exactly.

**Connor Sears:** But that's a fair question.

**Adam Stacoviak:** And they're very similar.

**Connor Sears:** We are similar in a lot of ways, and very different in a lot of ways, too. I think this is where if you're just looking at a list of features or looking at a list of product-focused things - that's only one slice of the picture. I'm not going to speak for Loom, but from our standpoint, when we go talk to customers, the problems that we're positioning ourselves next to, and the sort of go-to-market posture, and pricing... Not necessarily pricing, but packaging, and like, "What are we actually trying to solve for you?", it's a different problem. And we don't often have to disambiguate. In fact, many of our customers use Loom side-by-side with Rewatch.

**Adam Stacoviak:** \[01:40:37.17\] Is that right?

**Connor Sears:** We have a feature where you can import your Loom videos if you'd like, for more distribution, or just to make sure it's part of the common sort of knowledge base. I think that's the core difference. When we think about this, video is a core source of knowledge. The fullness of not just one video, but all the video for years and years in one place - it's really powerful and a different sort of problem to solve. So yeah, certainly, there are tools... More often than not, we're explaining to them why we're different from G-Drive. I already distributed this, "I have a G-drive link", right?

**Adam Stacoviak:** Right.

**Connor Sears:** Well, yeah, that's not a great experience... You have no analytics around that, you have no idea if people are seeing it etc. That's a very straightforward conversation to have. But not often do we have to really describe the difference. I think GitHub ran into this early on. As they started expanding and doing things, they started adding some more ubiquitous features, like project management, for instance. Well, there's a lot of project management companies out there. Are you competing with JIRA now? And the answer was always like, "No, of course not." JIRA is hyper-successful, and certainly, they have GitHub-specific competitors... Maybe that was a bad example. But there's plenty of other project management tools that folks like to use.

There's a big market out there, and there's a lot of people that may have a really strong opinion around what screen recorder they want to use for instance, and that's totally fine. We want to play well with them and play nice, and make sure that content is available to your team. But for the team that doesn't have a whole lot of opinions about that, we're also happy to provide our own screen recorder for you.

**Adam Stacoviak:** Yeah, that makes sense.

**Connor Sears:** Yeah. I think that's just a strategic positioning for us, is that we want to sit in the middle. There's a growing amount of tools out there that are all video. In fact, talk to any SaaS CEO and ask them if video or audio is on the roadmap. It doesn't matter if you're a design tool, or any other kind of tool, there's a good chance it's on there. Where's all that content going? Where does it go afterwards? It's easier than ever to build a tool like what we're using right now to record this podcast. I'm not going to say it's easy, by the way; it is hard. But it's easier than it was when Zoom started. The infrastructure is there.

**Adam Stacoviak:** Yeah, the barrier to entry is definitely lower, for sure.

**Connor Sears:** Exactly. That's only going to get easier and easier to enter. I think there's going to be, and there is an explosion of tools that help people create A/V content.

**Adam Stacoviak:** Yeah. I really like and appreciate that perspective from you, because when I asked you about Zoom and being just a feature of Zoom, which I was not by any means trying to say Rewatch is just a feature... I was trying to get your reaction really, and then I asked you about Loom... I like your perspective in terms of, "We just want to be the place where you organize it and get value from it." Not so much like, "Okay, you have to use our recorder over the Loom recorder." I like that, where it's not the all-or-nothing model. "We are just a place and can be the best place really for you to put your videos in a transcribable fashion, that your people collect, run, and organize", rather than bikeshedding over "Okay, you use that Loom recorder. Okay, you can't upload that video, okay? That's not allowed here", that kind of thing. I like that idea. That's a very diplomatic approach to the market, because you're just trying to solve the problem for the teams, rather than trying to be the only game in town when it comes to recording video.

**Connor Sears:** \[01:44:02.24\] Totally. I think the other reality of it is - going back to our go-to-market strategy - we're trying to get the whole company. There's a lot of tools that the whole company uses. And if you're excluding one group or you're excluding an entire tool that maybe is embedded for a very specific use case, that's not a good plan. You want to be able to integrate, you want to have an open API, you want to be able to work with all these tools. For the companies that don't have, like you said, an embedded thing, "Okay, we have a really good solution for you, that works fully integrated with Rewatch." That'll be a strategy that we continue going forward.

I also think the expectations around these tools are getting higher and higher. There will be more specialized video tools, just like I'm sure there are more specialized podcasting platforms and things like that. I'm sure the toolchain from getting this thing recorded all the way to distributing it is very complicated.

**Adam Stacoviak:** Yeah, it can be. Yeah.

**Connor Sears:** It can be. Or it can be as simple as you need to. If this was your first time, you'd probably keep it as simple as you could. We kind of take the same tactic.

**Adam Stacoviak:** In terms of direction and what's next, where are you headed, and what's the future for Rewatch? I know you've got a real focus on enterprise, you've got a real focus on getting the whole company... I love that in terms of a business plan, because one customer is always a big customer. It's always not a small deal. But you tend to probably lean towards larger deals, which is great for the balance sheet, great for growing the business, great for just growth in general. It's probably great for the morale of the company, like "Oh, we just landed X, and they bring all this. And look at all this feedback we get because of how they're going to help us grow our knowledge base, on how our tool sucks, or how it's really great in certain aspects, which is great for growth and product team." So what's next on the horizon for you guys?

**Connor Sears:** Well, you might be able to listen back to the rest of the podcast and glean where my interest lies in a couple of areas, which I won't get too specific about for now. I'll let you all listen back and see if you can pick up on what I'm talking about. But I think going forward, there's a lot of things that we want to do to expand the platform. We've already invested in mobile apps, for instance on iOS and iPad; Android's coming down the line. I think, again, Rewatch needs to meet everybody where they're at, and no matter what tool and platform they use for that.

But I think what's most exciting for me is that, believe it or not, we all are carrying around these great movie cameras in our pocket these days. There's like some of the best cameras that anybody's ever had. The ability to create content lightweight, and share it with your team in very small and focused ways, but also broadly to the whole company - that's an area in a problem that we want to solve. We want to make it so the same type of content that you love on a variety of different platforms... There's a use case internally for that. I think that's something we're really interested in exploring more. Look for more on that over the next year.

Aside from that, we're also really interested in just continuing, like I said, expanding the platform, more support for other devices, continue to build out our screen recorder to be multi-platform. It is on Windows and Mac already, but just continue to bolster up that solution. Then also, transcription is extremely powerful. Right now, we only support English. There's a lot of opportunity there.

It's been really exciting to see other people come to us and, like you said, building our knowledge base about how we can improve the product. Well, that's one resounding one that we hear quite a bit. We're going to be expanding the capability of the platform in that regard as well.

**Adam Stacoviak:** \[01:47:53.28\] Wow. That'll be challenging. I guess then you would automate conversion from English to other supported languages? Or would you put a human behind that? Or is it like a dual-prong approach? What can you share about the ideas you've thought through so far?

**Connor Sears:** Sure. Well, I think there's two ways are you going to handle it. There's one side of this that is transcribing audio in a different language, and that's extremely useful as you think about other companies that may have English as a first language, but also may support or be from another country where their main language isn't English; that's an obvious one. It gets more tricky when you think about companies... We were, for instance, talking with a company out of Europe and they had acquired quite a bit of companies across the EU. And yes, English was their first language or their business language, but there was a variety of people whose first language wasn't English. So it was more of an inclusion perspective, where being able to translate a transcription into any other language was really exciting.

So just being able to support different people, whether they want to consume the content in their own language or in English, that's fine... But having optionality is really important. Going back to that core principle of we're trying to make it as easy as possible for you to get the content out of this video - it plays right into that solution.

**Adam Stacoviak:** Interesting. Anything else that I haven't asked? I know sometimes I have a lens through which I ask questions, and sometimes we meander, sometimes we're laser-focused... That's what I love about this show, is we really get to cross a lot of different gaps when it comes to a product journey or founders journey and the things they've gone through to build and run their business. But is there something I haven't asked you that you're like, "Man, why didn't you ask me this? I want to share it."

**Connor Sears:** Not off the top my head. I think we did meander in a good way. I liked it, I like the conversation we had. I think we covered everything.

**Adam Stacoviak:** Cool. We'll leave it there.

**Connor Sears:** Was there anything you wanted me to cover? I mean, I guess you were asking the question so that \[unintelligible 01:49:55.05\]

**Adam Stacoviak:** More me leading, Connor...

**Connor Sears:** \[laughs\] It's okay.

**Adam Stacoviak:** No, I'm a fan of what you've done. I think what I'm most excited about really is how teams can leverage this, because I always... Especially in remote worlds, there's a lot of things that are changing, but also staying the same. And the thing that stays the same is the human connection, and that lack of watercool, that lack of collective wisdom, and the ability to have... I didn't know about the behind-the-scenes of GitHub, GitHubber TV, and then turned GitHub TV - I think that's just super-cool. And to hear that you had seen this issue -- or actually, this internal tool that was really useful in other companies of similar size, was like, "Okay, here's a nut to crack, because this could be a service, this could be so much better. It doesn't have to be this internal tool that is just kludgy. It can actually be really valuable to teams." I think that's what I'm most excited about for Rewatch, is if teams can check it out and get value from it from that perspective. Being able to stay on the same page, not have to attend every meeting, be able to share one message with the rest of the team, and you async it. It's no longer synchronous communication, it's asynchronous. For me, the killer feature really is a transcript, so I think that had opened up so much for you. Searching, key phrases, commenting - it just really makes this boring video interactive and actually much more valuable in that context. So for me, that's what I think is really the interesting bits that you've really solved for well with Rewatch. If you keep doing that, Connor, that'd be great.

**Connor Sears:** Yeah, that's what our plan is. That's our roadmap right there.

**Adam Stacoviak:** "That's our core DNA."

**Connor Sears:** Yeah, exactly. I think the only last thing I would add is that -- going back to that conversation about that transition from us relying on being in the office, information flow through osmosis... That's gone when you all work from home. You just don't hear things, you don't overhear things, you're not within the group, you don't get this information sharing for free anymore if you're a hybrid company, or fully remote even. Actually, choosing one or the other is probably... It's easier to be remote than it is to be hybrid. I think a lot of people don't realize that. They're probably learning that more and more recently as they go higher. Because it feels like the simple answer is like, "Well, we have an office; we might as well be hybrid and give people the option. That'd be great." What they don't realize is they're creating second-class citizens where the people in the office might be in the know, the people who aren't, whether they are in the know or not, it doesn't matter, because they feel disconnected.

**Adam Stacoviak:** It's about perception, yeah.

**Connor Sears:** Yeah. So that's another interesting thing that we've seen over and over again. Again, going back to that human connection, that belonging... And information share. You just find out about things a lot more easier when they're recorded, and when you can search it and find it and stumble upon stuff.

**Adam Stacoviak:** I'm a fan, I'm a fan. I like Rewatch, I'm a fan of what you've done with it, I like the direction you all took with it. I think it's been very wise leadership so far, and I'm looking forward to what you do in the future. I appreciate you sharing that journey for you today, and then what you've done so far. Thank you for your time, Connor. I appreciate it.

**Connor Sears:** Absolutely. Thanks for having me.

Outro: \[01:53:10\] - \[01:54:40\]
