**Jerod Santo:** So we're joined here by a couple of friends... This is like a three-way Git merge, when you're bringing everybody together. We had Sid from GitLab, we've got Matthew from Matrix/Element, and we're here to talk about another element called Gitter. Guys, thanks for coming on the Changelog.

**Sid Sijbrandij:** Thanks for having us.

**Matthew Hodgson:** Well, thank you for having us. Yeah, thanks.

**Jerod Santo:** So the big news which we're here to discuss is that Gitter is exiting GitLab and entering the Matrix... And Gitter was its own independent thing at one point, and then GitLab acquired it back in 2017. Sid, cue that up, when you acquired Gitter and why, and then we'll talk about the transition over to Matrix.

**Sid Sijbrandij:** Gitter is this great service where if you have an open source project, it gives you kind of a room for everyone to hang out. When we came across its path, it was growing, it was doing well, but there was no business model behind it. So the more successful it was, the more money it lost.

\[00:04:17.23\] Our mission is everyone can contribute, and we thought it was great that this thing enabled open source communities to become more active over time... We thought that deserved a home, and we acquired it. We invested, we made it better at \[unintelligible 00:04:31.13\] but long-term, chat is not something that GitLab is gonna specialize in.

We're trying to have a complete dev ops platform delivered as a single application. There's all kinds of things in there, from monitoring, all the way to managing, from security all the way to planning, but chat is not one of it, so we looked for a better home, a home of a company that was specialized in chat, but also -- well, I think it's a big benefit; we've found a home that is open source, open protocol... All the things that we hold near and dear.

**Adam Stacoviak:** It's definitely a different kind of trade from the CEO though. So not just so much that your decision is alone, but I'm sure that inside of GitLab the thought that Gitter doesn't fit long-term with your vision - not so much just keeping it, or holding it... Hoarding might even be a better word to use.

One of your promises back to the community was to open-source it, which you did... But then the desire, I suppose, to see it continue is very admirable.

**Sid Sijbrandij:** Yeah, I think I wanna thank two people. First of all, Eric, who for years kept going Gitter, many times almost by himself, even though the rest of the company wasn't focused on it... And then I wanna thank Eliran. Eliran does Mergers and Acquisitions at GitLab, and is focused on acquiring companies. We just acquired two fuzzing companies not too long ago... But now he's also shown that when something doesn't make sense, he can find a great new home for it... So I'm very grateful to both.

**Jerod Santo:** There was a time, Sid, where ChatOps was gonna be the next big thing. Everybody was talking about how you were just gonna tell a robot to deploy via your chat channel, and those integrations exist on various platforms. Was that a concept that you were buying into, and do you think that it doesn't actually work out in the long-term? What are your thoughts around that? Why is chat not part of a dev ops platform, in your opinion?

**Sid Sijbrandij:** That is a great question. I don't get it on a visceral level. On an intuitive level I don't get it. I thought we would have the great ChatOps application by now. I really studied this market... I think the reason is that currently, if you wanna do ChatOps, a lot of things don't work out of the box. Everyone has to set it up. And then it works different for every project. So your ChatOps skills are not transferable between different projects. And if you look at the most significant companies, they have a ton of different projects. So ChatOps is a feature of GitLab, and it works the same way, whatever project you're in. However, it's not reached the popularity I expected, and there's much more to it. But in short, ChatOps doesn't require us to run a chat client. ChatOps in GitLab works both with Slack, it works with Mattermost, and I hope it soon works better with Matrix as well. But it's not a reason for us to run our own chat client.

I think chat clients are a very different business. There's a lot more people that use chat than dev ops tools, and UX is much more important. It's important anyway, but with chat it is extremely important. So it's a different ball game, and again, we're not playing.

**Adam Stacoviak:** \[00:08:08.19\] It's tough to get a chat client to rule them all, essentially. That's the desire, I suppose, from a chat ops platform or a dev ops platform like GitLab - you'd essentially be saying "This is the one that rules them all", and it's just not the case. Many people -- some use Slack, some use Gitter, some use IRC still yet.

**Jerod Santo:** Oh, yeah...

**Adam Stacoviak:** Some use Matrix. So there's a lot of different blends out there, and the UX, and the UI and all of that -- and even, I suppose, to the sake of Matrix, what it's trying to do is provide bridges and integrations etc. natively, to enable all these chat communities to connect. That's maybe the bigger part of the story.

**Matthew Hodgson:** Yeah. I mean, from the Matrix side, that is the goal that we're aiming for, to basically get the best of both worlds. Some say that if GitLab did have a chat client integrated in it, it wouldn't be the only way in which you can interact with ChatOps functionality. You would also be able to come in via Slack, or via Gitter, or via Elements as a native Matrix client.

So I wouldn't totally rule out the idea of a kind of interoperable world of ChatOps in the context of an app like GitLab, but I also completely understand why it isn't core relative to the key of products. But it's gonna be really really exciting, obviously, to go and take Gitter and natively, properly merge it into the wider Matrix network.

**Jerod Santo:** So we have this transition, a passing of the torch... Who called whom? How did this deal come together? It's always fun to know what was the pitch, what was the idea, and who got it all started?

**Sid Sijbrandij:** I assume that Eliran reached out to Element... But Matthew, what do you think?

**Matthew Hodgson:** Yeah, he did. He did, indeed. We know Eliran well, and have been chatting to him. In fact, I met him in-person at GUADEC, for the GNOME Developer Conference a few years ago, and I think I might have bumped into him at FOSDEM, too. We have been chatting on and off, and... Yeah, he reached out on behalf of GitLab a couple of months ago and explained the possibility here, and see wherever we thought that there might be a match, given that whilst Gitter hasn't become core to GitLab, it absolutely can become core to the Matrix ecosystem. Our plan is to go and make it the poster child of how you integrate an existing chat platform into the Matrix network.

But it was a really good conversation, and I think we're on the same page. I know Sid has helped us with advice on Matrix and growing Element as a company over the years, so honestly, we were very flattered. They asked if we could help out, and it really is a nice win/win, I think, on both sides.

**Jerod Santo:** I appreciate the way you stated that, Matthew, and whoever is writing your blog post copy did a good job as well, talking about Gitter becoming a core part of Matrix, rather than a non-core project at GitLab. It seems like that's really the case, where GitLab thought it was gonna be core. It turns out that doesn't make sense long-term. It can be core to Matrix and Element, and so this is just a much better long-term fit. So there's the Why.

The How, in terms of the transition - because transitions are tricky, acquisitions are tricky, even with existing communities... Every time I see an acquisition of my favorite tool or project, I'm always like "Oh, no...!" Or sometimes I'm like, "Oh, yeah!" It depends on who's acquiring and what I think about really the autonomy of that project.

This is a case where we have a non-indie project going to a new owner, versus the initial, when GitLab acquired it and it went from indie to non-indie in that regard. But we have a passing, and the how is interesting, from Matrix's perspective. You mentioned it's going to become this native bridge... Maybe tell us how it's gonna work in the short-term, because Gitter is a standalone service, and it's going to integrate with Matrix. But I thought there already were bridges to IRC and Slack, and maybe even Gitter already.

**Matthew Hodgson:** \[00:12:11.29\] Yeah, so there already is a pretty basic bridge between Gitter and Matrix, and I think it was the second one we ever built. The first one was, of course, IRC, but the second one was using the same codebase, but customizing it for Gitter... And the reason was that one of our developers on bridges at the time was very active in the Neovim community. And Neovim had ended up being split between IRC, Gitter and Slack, all at the same time... So we experimented on the poor Neovim community by going and bridging them from IRC to Gitter, and also eventually to Slack. I think it's still running today...

But the problem is that Gitter doesn't have any native concept to bridging. So we did it using the simplest, worst possible type of bridge, which we call \[unintelligible 00:12:57.23\] So you literally have a bot called MatrixBot (not very imaginatively), that connects in on the Gitter channel, and it relays the messages to people on the Matrix side, who could in turn be coming in via IRC, or Slack, or whatever.

So the messages get across, but it looks really ugly. It's horrible in that you don't get the correct user profile for who's speaking, everything looks as if it comes from Mister Matrix bot... And perversely, as the years have gone by - because that was like 4-5 years ago now - more and more traffic has come over into Gitter from Matrix. The extent - I'm guessing - probably a sixth or a seventh of it today is probably natively coming in from Matrix... And all it needs is for one person to do something stupid and get the kind of anti-spam or the anti-abuse stuff in Gitter to kick in, and the entire bot gets taken out.

Ironically, we know Eric - also known as MadLittleMods - who's been valiantly keeping Gitter growing for the last couple of years - very well over the years, because we have to keep pinging him and saying "Hey, Eric, we just broke Gitter again. We broke the Gitter bridge. Can you guys unblock it, so we can keep bridging in the traffic?" And he's been an absolute star. We expected him to say "What are you guys doing, injecting all of this traffic into our network with this horrible, ugly bridge?" But instead, he's been really supportive and nice about it, and it's honestly gonna be very nice to take that bridge and take it out behind the bike shed and dispatch it, and replace it with something much more sophisticated.

So what we'll be doing is setting up a proper home server on Gitter.im, and have it bridge directly into the core of Gitter. We want that to be exposing the existing conversation history. It will be the first ever bridge, I think, that we've run, at least on Matrix.org, which goes and exposes existing conversations into Matrix, and it will allow Gitter users to appear as native Matrix users inside Matrix, and vice-versa. So it rarely will be the Holy Grail, platonic ideal for how you would take an existing platform that previously didn't have bridges of any kind, and then just make it interoperating with the wider network.

And because we've got loads of developers already hanging out on Matrix -- the entire Mozilla community now is on Matrix, and the GNOME folks use it, and they have their own server... And KDE has it, and has its own server... Bits of the Linux Foundation I think are coming on board as well... It will be super-nice to get all of the projects to hang out on Gitter and just be able to directly link them together, and \[unintelligible 00:15:43.15\] one happy family, rather than the balkanization and the silos that we otherwise.

**Break:** \[00:15:55.21\]

**Jerod Santo:** So with an open source project it's always worth asking "What exactly is being acquired?" Surely the Gitter brand and IP of what Gitter is... I assume there's some employees that are being transferred between organizations. Is that correct as well? Are you getting a team?

**Sid Sijbrandij:** Yeah, we can't stress enough how essential Eric has been to the continued success of Gitter... He many times single-handedly kept everything going. So he'll transfer the IP, but also the infrastructure, the server, the back-end, the database... So all the history will be preserved. Matthew might wanna add, but... I think those are the most important parts, with Eric being the most important thing that kept Gitter going through these years.

**Matthew Hodgson:** Yeah, precisely. Obviously, the service itself will keep running, the domain name, and the branding, and \[unintelligible 00:18:50.08\] comes over to us, but we're gonna keep the service running as it is today. Eric joins the Element team, and starting off to focus on basically running this integration project to Go, and be this very transparent open source migration and get it into Matrix.

In the longer term it's kind of an interesting one, because Gitter has a bunch of amazing features that Matrix doesn't have, and Matrix has a bunch of features that Gitter doesn't have... And we run the risk of spreading our servers quite thinly if we end up having to support two big flagship clients. We already support three separate codebases on Element web, iOS and Android, and Gitter today is three separate codebases on web, iOS and Android... And suddenly having six different flagship developer chat apps which we need to look after could be quite painful.

So what we're committing to do is to keep Gitter running as it is today, at least as well as it has been running for the foreseeable \[unintelligible 00:19:59.25\] bridge it into Matrix, and then we shamelessly get the features that it has and implement them in Element, too. And assuming that we do that in the near future - and I hope that we will - as soon as we get to that point and get parity, then we would look at switching Gitter itself for a Gitter-branded version of Element.

So all the URLs will still work, the app will still work, except in practice it will be the same codebase as Element, and it goes and combines the two together. That means that Gitter would get all of the nice stuff, like end-to-end encryption, and VoIP, and read receipts, and access to the whole Matrix ecosystem, but on our side we would finally have \[unintelligible 00:20:42.01\] which is a really nice feature on Gitter. Or the excellent SEO static archive which Gitter has. We literally sat down when doing the due diligence for this and benchmarked how rapidly Gitter launches to a live view of a chat room, and it was about 1.7 seconds to go from absolutely nothing, totally virgin browser, through to being in one of the Angular rooms that had like 25,000 people in it chatting away... Which is incredible. That's faster than Discord, it's faster by a factor of ten than Slack, and it's faster by a factor of about 20 than Element.

So we basically wanna get the best of both worlds and then converge the two.

**Adam Stacoviak:** I remember when we talked last, Matthew, one of the things we ended that show with -- it was episode 384 of The Changelog... And near the end, one of the biggest questions we sort of ended on was this still question mark - and I suppose Gitter might be solving this for you - is a UI problem for Matrix. Maybe speak to that. The details here make sense, but why this acquisition? Why did you need to acquire Gitter to make this happen? The two codebases, the overhead... Why was that the smarter move towards, I suppose, solving your UI problem?

**Matthew Hodgson:** \[00:22:06.19\] Honestly, we'd been talking to Eric for two years, I would say, about getting Gitter natively into Matrix... And he was interested. He was saying "Hey, this could be an interesting thing for us to do. But then we've got our own priorities, we're looking after our own users... It's a bit of a big strategic decision", and all the rest of it. And I honestly think that if we had done the work ourselves and contributed it as an MR against Gitter, it probably would have been merged, and Gitter could have natively come onboard, too. But the way in which the cards are falling here is almost better, in that we can do it pushing from both sides at the same time, and we can, as I said, use it as this poster child kind of flagship example of integrating an app into Matrix... And our hope is that the guys at Slack will sit there and say "Hm. Perhaps it isn't that hard. Perhaps we'll go and bridge in, too." Or Mattermost, or Rocket.Chat, or whoever it might happen to be.

The Rocket.Chat guys, for instance, have been trying to do this for years, since really early days, and they hired somebody - I think twice now - to work on Matrix integration, and the problem has been in that instance that we didn't have the bandwidth to support them from the matrix side. Plus, it was pretty early. This was like 3-4 years ago, and it was too early, and it kind of fell apart; they ended up implementing their own limited federation, and that sort of thing.

So I see this as an amazing opportunity to leverage - at the risk of sounding like a nightmare CEO talk - it's a synergy...

**Jerod Santo:** Oh, no...!

**Adam Stacoviak:** I love the synergy!

**Matthew Hodgson:** ...between the two organizations. There were go! Sid likes the synergy.

**Jerod Santo:** Buzzword bingo! \[laughter\]

**Sid Sijbrandij:** It's an overused word, but I think you very clearly articulated it... And if you look at -- I don't wanna speak for Matthew, but I think Gitter is a very easy on-ramp to chat. It's gonna be the faster way to get started with Matrix. It's less than two seconds. It has 1.7 million users, and I think the people who are passionate about open source have a huge overlap with the people who are passionate about Matrix and the federated protocol allows you to have a lot more control. I can see this growing, both Gitter and the Matrix, which is exciting.

We wouldn't want one company to own all of email, and it would be strange for one company to own all of chat. I think Matrix is solving that.

**Adam Stacoviak:** I actually think synergy is an underused word.

**Jerod Santo:** I don't know. Unpopular opinion...

**Adam Stacoviak:** I mean, I really do. I think if you really understand the definition of it, taking many things and the thing that you create with those many things is greater than the things themselves - I think it really makes a lot of sense... And I think it's an underused word. I don't think we should use it every day, but I think it's an under-understood and underused word, so I'm gonna back you up, Sid, and say I like that word, and that makes sense to me.

**Sid Sijbrandij:** And I think mostly when it's used in the Wall Street Journal it's some company got pitched by an investment bank and they overpaid for something, and the synergy means they're gonna fire a whole bunch of people...

**Adam Stacoviak:** Right.

**Sid Sijbrandij:** ...and I think none of these things are true. There was no investment bank involved, frankly, I don't think Matrix overpaid, and I think the investment is gonna increase after this. So I think there's a very good case for synergy, and thanks for saying that.

**Adam Stacoviak:** \[00:25:51.02\] You too, Sid, as well - I can see that you have, I suppose, a care... And I'm curious what the relationship after this might be. Sure, this is an acquisition, but this doesn't seem like a relationship where you just sort of like shake hands and just walk away. What do you think GitLab will do around Gitter over the long-term? Will you continue to promote what's happening here? What role do you see GitLab playing, or I suppose the marketing behemoth that you can be for Gitter and Matrix and this blossoming ecosystem of open source goodness, and developer chat, and all those fun things? Because you care about the community, so I would imagine that you're not gonna just walk away. What's gonna happen from here for you?

**Sid Sijbrandij:** Yeah, I don't think the acquisition by Matrix has any requirements for us to keep doing anything after, but GitLab -- the project is Gitter, and we look forward to continuing that. We're open to helping out; our mission is everyone can contribute, so if there's stuff in GitLab that can be better, we are open to that discussion. I've been a big fan of Matthew and what he and his team are doing. If we can support that, either on a company level or on a personal level, I'd be happy to help.

**Matthew Hodgson:** Yeah. I mean, if nothing else, we'll be adding GitLab authentication integration into all of Element's, as well as going and bringing "every repository can be a chat room" mentality from Gitter into the wider Matrix ecosystem. As part of getting Element's \[unintelligible 00:27:25.17\] with Gitter we need to have that sort of feature, so I think there could definitely be the dev ops/ChatOps layer, even if it's driven mainly from the Matrix side, rather than the GitLab side. And perhaps we'll get to the point where it will be an obvious -- I'm not gonna use the s-word... An obvious integration between the two of some flavor.

**Adam Stacoviak:** Synergistic. I'll say it for you. \[laughter\]

**Jerod Santo:** Stop it, Adam.

**Adam Stacoviak:** One thing to note here, I think, is something you're saying too is if we have some listeners that are on the engineering team at Slack, or Discord, or Mattermost, or whoever - what you're saying is that part of the reason why this acquisition makes sense is because this can be, in your own words, the poster child to show how this can be done well. So this is sort of like saying "Pay attention to what we're doing here, because this could be in your future."

**Matthew Hodgson:** Yeah, and that is absolutely the business case. Or not really the business case... The rationale, the justification on our side for doing this - it's to bootstrap ourselves out of mess that we had before. As I said, people like Rocket.Chat would try to do this themselves; we couldn't support them properly, and it was too early. Now it is the right time to do this, but to have the best chances of success, it's great to have both sides of the bridge wanting to build a bridge, and having the alignment and enthusiasm to make it successful... And then having shown everybody how we can build bridges like this, it's a blueprint that other people can do without needing so much input from us, or anything.

We will literally blog the hell out of this, so that people can go and see the steps needed to successfully pull this off, and whatever nasty issues we come up with along the way. So things like importing old history en-masse, and whether you do that incrementally, is a surprisingly tricky problem. You don't wanna be in a world where every time somebody joins a room, Matrix has to kind of scurry away and pull up all the Gitter history and load it in before you can talk, or something like that.

So the mechanics are surprisingly tricky to get right, and we just want this to be the flagship example of doing it... And the fact that both sides of the bridge end up under the same organization is just a really convenient way of making sure that's successful.

**Break:** \[00:29:50.12\]

**Jerod Santo:** We've come to an interesting place in the world of open source, where we have companies that are built around open source projects acquiring open source projects from other companies who are built around open source projects. I don't think this acquisition is unprecedented, but it's definitely an instance in an emerging trend of kind of a new class of things... At least I believe it is.

There are other people who are gonna be coming in the wake of this and maybe having similar scenarios with their businesses or their open source projects... I'm curious how much you guys are willing to share in the due diligence and the financials of like "What does an acquisition like this look like?", so that other people can have some sort of realm of possibilities. I wouldn't even know what order of magnitude we'd be talking about. We talked 1.7 million people on Gitter, small team, it sounds like Eric is awesome, and probably a couple other people playing support there... But what all is involved in the due diligence? And then you mentioned you don't think that Matrix got overpaid. If you're willing to share financials, we'd definitely listen to them.

**Sid Sijbrandij:** I'm okay with sharing, but I wanna leave it up to Matthew, what he wants to indicate and what not... And sorry for putting you on the spot there, Matthew.

**Matthew Hodgson:** No, that's quite alright. I think that from a financial perspective it's slightly missing the point on our side, in terms of people are just gonna get hung up on numbers, and...

**Sid Sijbrandij:** Yeah, it makes sense. You're taking on a huge additional burden, now going from three clients to six clients, and then having to reduce that again... So it's almost bootstrapping. Like, get Matrix in the hands of a whole new audience. I think that's what this is about. I agree, the focus should be on that.

Maybe what might be interesting for the audience - if there's deal terms that we kind of negotiated back and forth on, that you feel comfortable sharing, that might be interesting... Because people always talk about acquisitions and negotiations, but they're always pretty vague... And I think things like that are tricky.

**Matthew Hodgson:** Yeah, that's a really interesting angle. I'm worried that this is all gonna suddenly go off in to legal corporate development discussion-style things, which I guess is something that we have to do on a regular basis for funding rounds and M&A activity. I can imagine the geek audience might flee at this point, so please stop talking about--

**Adam Stacoviak:** You'd be surprised.

**Jerod Santo:** Humor us and we'll move on. We're not gonna hold your feet to the flame here, Matthew, but humor us with something. The reason why I ask is not because I wanna peg a number and everyone's like "The acquisition was this." It's because, like, I'm inside the open source world, I'm also in the business world - I don't even know the order of magnitude of what is this kind of a process like, and I've never gone through a due diligence like you have... So any insight into that process; you don't have to share the numbers, but something that maybe we can provide some context, or even just a challenge or a struggle that you went through in making this decision... Because both companies, Adam, make a big decision here.

**Matthew Hodgson:** \[00:34:06.12\] I can tell the story from our side. And honestly, this was a very painless process, indeed. Huge kudos to GitLab for being a very transparent, no-BS outfit. I think it probably helped that Eliran knew Sid already - and Eric, for that matter - so it's not like we're doing business with strangers... And the due diligence process was basically a bunch of shared Google Docs which look very much to be the existing, internal shared Google Docs which GitLab would put together. We were just invited straight into them and could scribble all over them.

We had a couple of video calls to look over the KPIs, the Grafana dashboard style view of where things are at, and how traffic was shaping over the years, and what the figures were... But it was just very straightforward.

In terms of the prices to get authorization on the Element side, we have a board on the Element side, so the acquisition here -- even though it's basically entirely for the Matrix ecosystem's greater benefit, we've actually done the acquisition as Element, as the for-profit startup, rather than the non-profit Matrix.org Foundation... Because frankly, that's where the money is, and it's where we have the infrastructure to support the legal process of doing an acquisition.

So we went through our board and said "Hey guys, a bit of a crazy one, but this opportunity has come up. We believe this could be incredibly positive for Matrix, because it would demonstrate that you can link exiting systems as a first-class native citizen into Matrix, which nobody has basically done before. All the other bridges are pushed from one side or the other side, and nobody natively speaks them. Nobody has done an IRC network which has native Matrix support. We had spoken about it with FreeNode, but in the end it's a lot of engineering to have happen... Whereas for something like Gitter it could be easy, and this will cement Matrix as the obvious open place for open source developers to openly collaborate with one another on an open standard, in a very open way. Our board said "Yeah, sounds good. Why not."

Then in terms of the actual legal process, it's been a little bit of backwards and forwards. We had a bunch of distractions on my side; I think that GitLab has also been busy doing operational stuff, and so in the end I think basically the respective lawyers have been going back and forth on it, which is always in some ways good, because if you've got good lawyers on both sides, they go and figure things out, and the deal happens.

On the minus side, if left to themselves, the lawyers can also go back and forth quite a lot, and I guess it's useful to get the balance right in terms of getting to a sensible conclusion rapidly, and not letting it drag on.

I think we were impacted a bit by it being the summer, and so lost a bunch of time with me being out on holiday, and the lawyers being out, and that sort of thing... And in terms of juicy sticking points, I think the only thing that actually came up as a point of contention was whether we were going to take on liabilities for the business which existed prior to the acquisition itself going through. So if something terrible had happened at some point historically on Gitter that comes to light, subsequently is it entirely our problem to deal with it? Or if it was due to a disaster that happened on GitLab's watch, is it GitLab's problem? That's a fair enough point for both sides to push back and forth on, and I think we got to a good place in the end... But if that's the biggest problem to quibble over, then that's definitely a good deal and a good process \[unintelligible 00:38:05.21\]

**Jerod Santo:** Yeah. That seems to be a fairly normal point of contention, that particular piece.

**Sid Sijbrandij:** \[00:38:13.01\] Yeah. It's kind of ironic, because that point of contention - the biggest thing is the representation about the codebase. Like, are we sure that all the open source licenses that are used in the product are adhered to? If Matrix would acquire the project from us and then they'd find this AGPL library that if we wouldn't have adhered to the license, now we would be liable to that. So that was an interesting one to discuss. You're moving a project between two open source companies, and the biggest problem is open source licenses. \[laughter\]

**Jerod Santo:** Yeah, exactly. Well, that's a fitting detail. Thanks for sharing that, guys. What about from the -- back to the end user perspective here... If I'm a happy Gitter user today - maybe I'm on the Angular project and we're just happily using the chat service - what can I expect in the next 6 months, 12 months, 3 years? What's gonna change and what's not gonna change?

**Matthew Hodgson:** I guess on our side we really hope and promise that we won't screw it up. That we will keep it running at least as well as it is today. And in the immediate term, the main difference is gonna be getting a mailshot saying "By the way, your chat history has moved over to Element, and if you're not comfortable with that, you have the right to delete it", which is a requirement under GDPR, and a perfectly reasonable thing - when somebody gets acquired, you have the option to opt out of the process, basically.

And then as soon as we possibly can - it really depends on how fast Eric and the bridge team here can get this bridge up and running, we should start to see people flooding in natively from Matrix into the chat rooms, rather than the super-annoying Matrix bot channeling everybody and getting banned every two weeks. Instead, it will be proper native people coming in... And likewise - and we haven't decided this for sure yet, but it's possible that we might just expose al of Matrix into Gitter. So rather than just joining chat rooms which are backed by repositories on GitLab and GitHub, you could just use it as a freeform Matrix client and talk to people anywhere else. So if you wanted to talk to Mozilla people, you could just go off and talk to the Firefox team directly. That could be fun.

**Sid Sijbrandij:** In the email where you asked people permission to transfer their data, are you gonna work in a red pill/blue pill joke, or is that pushing it? \[laughter\]

**Matthew Hodgson:** I think that might be pushing it unfortunately, although it is slightly tempting. When we began doing Matrix, it was already 15 years since the Matrix film came out...

**Jerod Santo:** Wow...

**Matthew Hodgson:** And 15 years is long enough that people started to forget about it. Now here we are, 22 years later--

**Jerod Santo:** It's a cool classic, come on...

**Matthew Hodgson:** ...it is a cool classic, but it seems to be getting more and more cool by the minute, and particularly the red pill/blue pill thing seems to have taken on political overtones...

**Jerod Santo:** Oh, true... I didn't think about that.

**Matthew Hodgson:** ...and all sorts of misadventures, that we tend to stay the hell away from it. But it is tempting. Perhaps we'll make an exception just this time.

**Jerod Santo:** Oddly enough, I think the John Wick series actually brought new life to the Matrix series, because everyone's just like "Can I get some more Keanu Reeves kicking butt?" and they go back and watch the Matrix, and are like "Wow, this movie is actually pretty trippy and awesome."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** That's just my take on the matter.

**Sid Sijbrandij:** One interesting thing that I would see is that it becomes easier to migrate from the Gitter chat room to the rest of the company. And I think right now that's something where we at GitLab struggle. We have people in the Gitter chat room, but it's kind of hard to add them to all our development channels, the channels that are a bit more internal, because sometimes someone shares a customer name, or something like that, and that's a tough problem. We're not solving it with this move, but... I think making the outside of the company more permeable for open source contributors, for the wider community is something that Matrix and Element has an opportunity to do like nobody else...

\[00:42:23.12\] And I think it's super-important that it's not like you have your external chat room, you have your internal chat room, but imagine that you could still DM the people inside the company. I think that's the promise of Matrix, and that will be super-important for the health of open source communities.

**Matthew Hodgson:** Yeah. \[unintelligible 00:42:41.22\] in terms of how Gitter has been used, that often it ends up being a slightly secondary community often to the primary one... Because you get your Gitter room for free on your repository, and so there's always gonna be people just turning up there, asking questions, and whether you like it or not almost, you can have that community there, much to the frustration of the official project who uses Discord, or whatever it might happen to be.

So by having this permeable membrane around it, and the ability to bridge through into and defragment the other conversations, whether they're happening on IRC, or Slack, or Matrix itself (heaven forbid), is a real opportunity to basically bring the Gitter audience more into the mainstream and just make it part of the overall policy.

It's like basically drifting back towards IRC in a world where IRC was one great, big, global network, rather than fragmented, and everybody is roughly in the same ecosystem, on the same page. It's all borne out of this nostalgia for the '90s, in the end.

**Adam Stacoviak:** This is the problem though with the -- I know I hear a lot of people say "This is my first time using Slack" or "This is my 11th Slack room." You get the full gamut. But you've got this (I guess) multiple opportunities, whether to Mattermost, or Rocket.chat as you mentioned, or Gitter, or you name it; there's a lot of different ecosystems and places to belong, I suppose. And we here at Changelog even have our own Slack, and it's open, so we encourage our listeners to join that as well, just to have a place to go home. Not so much to be the only place you hang out, but to be among the many.

I suppose the issue with that, this "among the many" is that you can kind of lock away conversations, and you described it as this fragmentation of dev chat. Can you speak to that a little bit, in terms of quantify how ecosystems get locked away, and then why the plan you have in place with Gitter solves that?

**Matthew Hodgson:** Yeah. I mean, we see it everywhere, particularly in open source land, where open source is always a little bit disorganized; everybody pulling in different directions... And we've certainly seen so many projects fragment a million different ways; people going to Telegram, people going to Discord, people keeping on IRC, people going to Slack... And previously, everybody would have been on the same page, like the Linux Kernel mailing list - great example of the one place where you need to be for that community to track what's going on... And then the equivalent ones.

Instead, you have things like that Neovim example I gave earlier, where they're split three ways. In Mozilla they were split into the private internal Slack, so it wasn't even happening in the public domain anymore... And then on the IRC/Mozilla network, as well as people also on Telegram. It's just destroying the culture and the efficiency and the cohesion of these projects. It's almost a forking mechanism, like you would see - and it might be pretty problematic if your project is suddenly forked from under you... Except it's even worse, it's your community forking its ability to talk to itself. It's almost a balkanizing and breaking down.

\[00:45:53.17\] So that is the risk, and that's what we're trying to fix, with Matrix and Gitter being the only chat system that has ever focused purely on developers, which really is quite something. I'm amazed that nobody else did that, because... You know, IRC was never just for developers; it was kind of freeform geek chat on the internet. Discord obviously for gamers, and they've kind of done this slightly half-assed, trying to get open source people into it, too... But Gitter is only an Element in Matrix. It was like IRC, just a general \[unintelligible 00:46:25.04\] platform. Going and getting those guys from Gitter into the existing developer \[unintelligible 00:46:29.14\] is just a no-brainer.

**Adam Stacoviak:** When speaking to the Gitter as it speaks -- now, you'd mentioned "Let's not screw it up", or something to that degree... And then even to your board of directors you'd said "This is what we need to do", so obviously, the pressure is on to do something. You'd mentioned not screwing it up, or doing different things to integrate, and obviously, we're talking about fragmentation here... One of the things that was mentioned was essentially becoming -- or, sorry, that Gitter will become a full-fledged Matrix client. Can you speak to the direction beyond the next six months or so? What's the long-term plan with Gitter and Matrix?

**Matthew Hodgson:** Well, as I said, we're gonna take Gitter's specific features and try to get parity in Element. The most important ones there is threading... For instance, I was out until God knows what hour last night, getting threading working in Element, so that we can go and bridge the threads through from Gitter into Element, and Matrix internal, because it would be pretty sucky if we lose threading...

We need to get the offline archives and the static archives I mentioned, which work so well... We need to get peeking working... And as it happens, I was also looking at improving and optimizing peeking in Matrix. At the moment, when you start peeking into a room, it basically transfers everything in terms of who is present in that room to your server. And that could be like 30k, 40k, 50k people, and it's gonna take 10 MB of JSON, and it's gonna take ages to transfer etc. What if we could do that lazily, to be more efficient?

We've talked about the LaTeX support... What other good things does Gitter have that we did not on the Element side...? Obviously, layering on top of GitLab and GitHub, and the single sign-on auth is lovely. I thing they were the first people to do just OAuth to single sign-on; you just click the Sign in with GitLab or Sign in with GitHub and you would just be teleported into the app. You then pick a username, or anything... And it's such an obvious thing to do, but we still don't have it on Element, so we'll be adding that as well.

And once we have those, and once the app launches at least as fast as Gitter, then that would be the point to say "Hang on, do we really need to get a codebase running? Shall we just put a Gitter-branded version of Element there instead?" I'm guessing that's gonna be at least a year away, frankly. Possibly longer. We're not gonna rush it. We will make sure in the meanwhile that the Giterrete lives as well as it ever did. But also, when it happens, Gitter will benefit from all of the nice stuff we have in Matrix, like encryption, and the VoIP stuff widgets... We've got brand new widgets as of last week, which are looking really sexy, allowing it to pin whatever iFrames you like into your chat rooms and resize them now... All of these nice things, too. So I think it will end up feeling very much an upgrade from where things have been in terms of the features.

And in case you're thinking that this is us being megalomaniacal on the Matrix, and assimilating poor Gitter into the collective, it's worth noting that Eric and the Gitter folks had already come up with this as a plan before the acquisition, specifically for the mobile apps. Apparently, the mobile apps as native iOS and Android have been a pain to maintain. It's just too much stuff for the Gitter team to look after. They were falling behind, they didn't have the same features, and so there's already a GitLab bug out proposing to just deprecate them entirely, in favor of just using a progressive web app instead... Which would have been sad in terms of losing those native apps entirely.

\[00:50:17.26\] One of the proposals that came up, again, prior to the acquisition on the bug, was "Hang on a sec, why don't we just use Element (or Riot, as it was then) in order to replace the native mobile apps?" And everybody said "Oh, that's great. Yeah, why don't we use Matrix for that?"

So it's not just us, it's Gitter themselves thinking "Well, actually, do we really need to have a dedicated app for this?" And it's shown that where the app is better - Element is better in some places - then hopefully we can get best of both worlds.

**Adam Stacoviak:** That's a really good point, because I think what Jerod and I are trying to keen on when we ask you about the plan is essentially confidence - what confidence can you instill in existing Matrix lovers and those that are on Gitter now, and I suppose the community at large? And I suppose the plan coming from GitLab and Eric and team, from that direction, versus from you propositioning this opportunity with them. It's like, there is a belief in Matrix, there is a belief in this future. I think that's something to hold dear to as we begin to watch you down the next six months to a year etc, is that confidence in the fact that this was kind of planned already, to some degree, from the GitLab side, to make this happen; there was some desire on there... So that's the thing I think really matters, is this confidence that can be instilled.

**Matthew Hodgson:** Yeah. There's definitely confidence from the Gitter side that the Matrix can be the future of communication, and there's definitely confidence on our side that we'll keep Gitter running and that we can be a good custodian for it, and indeed accelerate it and take it into the next plane of existence, if that doesn't sound too sinister...

**Jerod Santo:** We're definitely excited to see this transition take place. Guys, thanks so much for coming on the Changelog and sharing the inside look at this big adventure that Gitter is going on, from GitLab into the Matrix.

Sid, any final words from you, or something you'd like to pitch or promote as we close out the show?

**Sid Sijbrandij:** I think it's essential to give people the option to host their own infrastructure. Even if not everyone does so, I think it's a great option. With GitLab we provide the ability to self-manage your instance. Matrix is a prominent player to do that for chat, and I think this is a great development for the world, as data gets more important to everyone. More control over that data, more accountability is essential, and the world is moving in that direction; this is a great example of that.

Thanks so much for diving into this, I really appreciate the questions.

**Outro:** \[00:53:04.07\] to \[00:53:05.18\]

**Adam Stacoviak:** Whaddup, listeners. We've got a little bonus for you today. Just when you think it's over, we wanna give you a little bit more today. Here is an extended segment with just Matthew. Sid had a hard stop, so we asked Matthew to stick around for a few more minutes, and this is what happened.

**Jerod Santo:** So since we last talked, Matthew, lots happened around Matrix. Riot is no more; there was a big raise of money at one point... Do you wanna catch us up and tell us about the rename, and some of the exciting things going on?

**Matthew Hodgson:** Oh, wow. Cool. Was it before Automattic joined that we last spoke? I think it might have been...

**Jerod Santo:** Yeah, so the Automattic thing was big since we spoke, and then the rename was since we spoke as well.

**Matthew Hodgson:** Okay, so that must have been back in March, I guess... At the beginning of the \[unintelligible 00:53:40.22\] that we caught up... And then it was in April that we announced that Automattic, the guys behind WordPress had come onboard Matrix, with a strategic investment in Element, the for-profit that we use to keep the lights on for Matrix development and hiring the core Matrix team.

\[00:54:00.11\] So it was really exciting... They put just under five million dollars into funding Matrix, with the hope of basically building an opportunity both for the WordPress ecosystem, and likewise, in Matrix supporting WordPress.

Now, since then, things haven't moved quite as fast as I would hope, which is entirely my fault and our fault on the Element side, for going and hooking up the WordPress world with Matrix. But the intention is still very much to get better integration for Matrix within WordPress and vice-versa. And occasionally, I have some really nice people at Automattic pinging me, saying "Hey! So, do you know that call, where we were gonna be working on those integrations? Please, can we have it?"

So we've been running late on sorting that out. But the Automattic folks have been lovely to work with, and incredibly helpful strategically in helping advise us on growing Element. In fact, very similar relationship to the one we have with Sid, in terms of providing mentorship of how you build a massive, multi-billion-dollar open source company in a sustainable and ethical manner, rather than the traditional capitalist approach.

\[unintelligible 00:55:17.25\] had already been supporting Matrix for many years as a donor on Patreon. He was one of our secret thousands of dollars a month in supporters for \[unintelligible 00:55:29.10\] So he obviously believed in what we were doing, and I occasionally ping him \[unintelligible 00:55:34.04\] support more concretely, and get involved, and drive the overlap between the two companies?" And as I said, it's been good. He was very helpful and basically gives us a safety net in terms of financing through the pandemic and whatever uncertainty lies beyond, whilst also going and finding useful parallels between the two projects.

I can't really think of any other companies other than Automattic and GitLab who have sort of used the same model here, of taking an open source project and sustainably providing services and support around it for a larger ecosystem. I mean, that's obviously lots of open source companies out there, but once you have an ecosystem like the WordPress one, or for that matter for the GitLab environment, it's fun to be able to learn from these guys.

**Jerod Santo:** Yeah. And they're having massive success on both fronts. It's really fun to watch.

**Matthew Hodgson:** Yeah, it's very reassuring that it is possible to do this without selling out, and waking up one morning and discovering you've become Facebook, or something... Hopefully, Sid and Matt aren't going to fall to the dark side after I've said this, but so far it's looking like it's possible to be a good human being, as well as have a successful business in open source. Not that it's easy, but at least there's a precedent.

**Jerod Santo:** Right. It's not easy, but possible.

**Matthew Hodgson:** Yup.

**Adam Stacoviak:** But back to that confidence that I was suggesting on this show - that's what you get though when you work with organizations that don't make you think or make the audience or the user or whomever (whatever noun you wanna put in there) think that you're gonna sell out. I think that's the key there. Matrix to me, given whom you work with, and what I've seen so far from you, Matthew, and the rest of your team - it doesn't make me think that you're gonna be a sell-out. You're in it to win it, as they say.

**Matthew Hodgson:** I hope so. We spent ages on the open governance for the Matrix Foundation to basically try to legally create a safety net or a kind of protection mechanism to make sure that even if we did go evil and sell out -- who knows what happens...? If we get acquired by some obnoxious company perhaps, or the world economy completely collapses and we frantically start trying to think of ways to avoid having to downsize the company, or keep the project...

\[00:58:12.06\] There are all sorts of worst-case scenarios where things could go wrong. So to try to force ourselves to do the right thing, we basically built it into the articles of association of the foundation, that bad stuff like that will at least not impact Matrix, and that Matrix as a protocol would be protected from it.

But these things are hard. You look at dramas with DRM at the W3C, or other places where neutral standards bodies have got onto rocky waters, or whatever the expression is...

**Adam Stacoviak:** Troubled waters.

**Matthew Hodgson:** Troubled waters... Or they've gotten into the rocks in terms of being in a sticky situation...

**Jerod Santo:** There you go.

**Matthew Hodgson:** I think there's risk of us ending up with similar problems in the future, particularly about legality of end-to-end encryption, data ownership. The fact that data gets replicated around Matrix could be a fun one. Abuse in Matrix; the fact that a bad guys is a user, as well as good guys, for your definition of good and bad... Lots and lots of things which could go wrong.

**Adam Stacoviak:** What's interesting about that that I didn't consider really is that only until recently it was just a hypothetical that the world economy would collapse. Only recently did it come to full fruition that it could possibly be something that happens... Whereas before we would just say it kind of tongue-in-cheek, like "Ha-ha-ha! If that would ever happen..." Now it seems like it's a possibility, far more than it ever had been in my life before. And to have those kinds of protections and protocols, and thoughtfulness to organization and governance... Whereas before it was just like "Oh, we should do that." Now it's like "No, we NEED to do that", because if the world economy collapses, if it ever did happen, and all this history and all this worth in terms of history that you can search through was available to everybody, or the bad guys, not the good guys - it could be a bad world out there for developers in the future... And for all.

**Matthew Hodgson:** Yeah. I think that's why it's important to provide a mechanism for folks to communicate, which doesn't put all your eggs in one basket. Even if the Element team collapsed tomorrow, even if the Matrix Foundation collapsed tomorrow, at least the network and the tech is out there that other people can keep it running and keep it going, just like the web would limp along even if the W3C collapsed, or even if Mozilla and Google went bankrupt the next day. So kind of trying to engineer for Armageddon scenarios is a good thing.

**Jerod Santo:** Well, the last time we talked to you - and Adam brought this up on the main show - we talked about some of the UX problems that you're trying to solve with Riot the client, and the UI and the UX of that experience... And one of the first things that you come across with any product or service is the name of the thing... So "riot" itself - it's funny, if you go back to 2020 and say "What were the words of the year?", I think "riot" would be one of those words, along Covid, and quarantine, and justice... These words, right? Protest... But riot would be one of them, and it seems like you jumped ship on that particular term at an opportune time... But you said "We're not Riot anymore." Historically, I've always thought Riot was -- I haven't had real-life experience with too much rioting. There's now rioting going on in the United States, and elsewhere around the world, and it's got a negative connotation. I always thought a riot was like a good time. Like, "Hey, it was a riot! It was a blast."

**Matthew Hodgson:** I'm glad somebody thinks that, because you're literally the first person who has ever admitted to thinking of riot as in "Hey, that party was a riot!"

**Adam Stacoviak:** Well, there was a band called Riot back in the day, Jerod. I'm sure you can recall...

**Jerod Santo:** \[01:02:16.13\] And there was a song, Zoot Suit Riot. Remember that one? And that was a fun song...

**Adam Stacoviak:** It was.

**Jerod Santo:** So I don't know... I had a positive connotation for a time. I remember learning about the L.A. riots. I was alive during the L.A. riots back in the early '90s, but I wasn't of age where I pay attention to events. So it was always a very abstract term, and I just thought it was like a blast, or things were crazy. But it's much more concrete than that. And now you're no longer associated with that word, so... Tell us about that switch.

**Matthew Hodgson:** Honestly, the switch was independent of the misadventures and dramas of 2020. It's something that was many years coming; we actually picked the word Element in 2018 to replace it. The reason for this was that a certain large company which includes Riot in its game went and posed some fairly big legal problems for us...

**Jerod Santo:** Scary...

**Matthew Hodgson:** ...when we were trying to trademark the word Riot. In fact not even Riot, we were trying to trademark Riot.im, just so that we could have a mechanism to protect from abusive forks, like if somebody went and forked Riot and called it Riot, better or more secure, and it had malware in it, then it's really useful to be able to go to Google and Apple and say "Hey guys, by the way, these guys are ripping us off, and it's malware. Please get rid of it." You can do it anyway, but it's even stronger if you can say "Look, they're infringing on our trademark."

So we filed for trademarks for it, and triggered the legal beast of a certain multi-billion-dollar company, who have a lot more lawyers than we do... And also, frankly, more people were seeing the negative sense of Riot than the "Hey, I mean riot at the party" kind of mentality.

**Jerod Santo:** Right...

**Matthew Hodgson:** We also have the comedy problem that a lot of traction at the moment is in the public sector. For instance, Texas' Department of Public Safety uses Matrix for all of its public safety work, which is a bit awkward if you ask everybody to go and install an app called Riot whilst you're dealing with some kind of public safety event. And we were also working a lot with France at the time, and there was one memorable meeting where we were having a very serious pitch to the Ministry of Digital about getting Matrix on board, talking about Riot, and meanwhile you could literally hear the riot in the street outside the Ministry... So basically, the connotations were getting worse and worse.

There was also the problem that we had three different brands flying around. We had Riot for the app, we had New Vector as the company, and we had Modular as our hosting service - which in the early days of Matrix made a lot of sense, because we really wanted to make it clear that there were roles for different people to play. You can have multiple service providers, you can have multiple companies, you can have multiple clients. So we deliberately gave them different names, to kind of get people's juices flowing and realize that they too could launch a Matrix hosting service... And that it would be available to people on Riot, but it would compete with Modular, or whatever.

And the good news is that that worked, and people started to fill in the holes of the ecosystem with their own offerings, and nowadays there are lots of different people providing Matrix hosting, and there are hundreds of Matrix clients, and there are lots of companies building on the protocol. But the downside was that it was getting really confusing for our users, particularly on things like fundraising. You go and talk to an investor, and say "Well, we've got all these random different brands. Let me draw you a diagram to try to explain how Modular relates to Matrix, relates to Element, relates to New Vector etc." We wanted to fix that, so we just called everything Element.

\[01:06:10.07\] Matrix obviously is sacrosanct, and is still its own independent, neutral open source project, but on the corporate for-profit side we just renamed the company Element, we renamed the app Element, and we renamed Modular as Element Matrix Services, which is basically Element too.

So I think it's good overall. Element is a much more neutral name; hopefully, it's still quite memorable. You are literally an element in the Matrix, and all the maths geeks will eventually groan as they realize that we went from a Matrix made up of vectors, which is now made up of elements, which is where we're going...

**Adam Stacoviak:** Oh, boy...

**Matthew Hodgson:** Oh boy, indeed.

**Adam Stacoviak:** Well, one thing is for sure - it does take good naming. And that's something that we've somewhat done right here, Jerod, on Changelog++. There's some good names we've had around here... And it does take a good, cohesive -- especially when you're talking about multiple brands; the company, the client, the protocol etc. So as you start to go into that, the layers need to have cohesion, and naming can provide that graph essentially, to understand what everything is.

I can only imagine how embarrassed you might have been to be telling people in France to install this Riot client while things were happening, to kind of trigger you to want to change the name.

**Matthew Hodgson:** Yeah, as I say, it wasn't just that aspect of it, but it was definitely a synergy of different things. Oh, I used the s-word.

**Jerod Santo:** Well, Adam likes it. Say it more, please.

**Adam Stacoviak:** Synergy...! Synergy...! I'm just kidding.

**Matthew Hodgson:** We were gonna do it back in 2019, when we relaunched Riot web as it was at the time, with an entirely new, professionally-designed skin, and we hired the guy who designed Unity for Ubuntu, or led the team there... It was just after \[unintelligible 01:08:07.26\] and the Canonical London office has a lot of people released, and so we worked with him to come up with a new design, and it was head and shoulders above what we had before... And we thought "Well, this is suddenly gonna start feeling like a proper app. Why don't we also fix the name at the same time?"

We chose not to in the end, because we honestly didn't want to undermine the redesign by also changing the name... Because if people didn't like the name, it might unnecessarily kind of undermine the rebrand. So we deliberately kept it where it was, and then pushed it back another year and a bit until the time was opportune to get Element sorted as a name.

\[01:08:50.26\] But it's only been two months now. I'd say it hasn't had massive positive impact, like an uptick; it hasn't had a massive negative impact either. It's been kind of neutral, and people on Hacker News seem to dislike it because it's too bland. People who think that we've done it to be politically correct, which isn't particularly accurate... As I said, it's a confluence of many factors. I think we'll see that people will grow to love it... Although I do still find myself calling Riot Riot, which is really annoying. I need to stop doing that.

**Jerod Santo:** Old habits die hard.

**Adam Stacoviak:** Naming is hard.

**Jerod Santo:** It's got a couple of things going for it. It's easy to say, it's easy to spell, and like you said, it's relatively a neutral thing. There's not much connotation one way or the other. It's slightly bland, I guess, if you had to give a criticism, but it is what it is. Definitely a hard transition--

**Adam Stacoviak:** And given your accent, it sounds cool.

**Jerod Santo:** It does sound cool when you say it. It doesn't sound cool when I say it, but when you say it... It doesn't sound cool when I say it, but when you say it, it sounds cool.

**Adam Stacoviak:** Element. When you say it, it's cool. But not when me or Jerod say it.

**Matthew Hodgson:** If you say so...

**Jerod Santo:** Say it one more time for us.

**Matthew Hodgson:** Element...

**Jerod Santo:** See how cool that was?!

**Adam Stacoviak:** See? That's very cool.

**Matthew Hodgson:** The irony is if I wanted to make it sound cool, I've gotta kind of go into "In a world..." Doing \[unintelligible 01:10:07.07\] in a really bad American cinema accent...

**Adam Stacoviak:** "There was a check line connected to all check lines around the world..."

**Matthew Hodgson:** "...its name was Element." \[laughter\]

**Jerod Santo:** Oh, shivers. I got shivers there.

**Adam Stacoviak:** I'm digging it.

**Jerod Santo:** I'm gonna go see that movie...

**Adam Stacoviak:** Okay, I like it more now.

**Jerod Santo:** Yeah, that's actually great. When you click on the name on the web page, you should have you say it aloud in the browser... Because people love when their browser autoplays audio, you know?

**Matthew Hodgson:** They do, don't they?

**Jerod Santo:** They love it.

**Adam Stacoviak:** Yeah. I love it. At night, too.

**Matthew Hodgson:** We need to work around some of the minor browser restrictions to make that happen...

**Jerod Santo:** Oh, yeah.

**Matthew Hodgson:** ...but hey, I'm sure there's something I can do with service workers, or...

**Jerod Santo:** You guys have the technical expertise. I know you've put VR in Matrix, so I think you can get an audio element to play when you click on a button on the web page. That's just my take.

Matthew, we know you're super-busy. We appreciate you hanging out a little bit longer with us, and chatting, but we'll let you go.

**Matthew Hodgson:** Awesome. Thank you so much for having me on. It's been a pleasure to catch up again. Hopefully we'll have some interesting news in the future to talk about, too.

**Jerod Santo:** Absolutely.
