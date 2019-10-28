**Kevin Ball:** Hello, JS Party people! Welcome to JS Party for this week. I am Kball, I will be your MC this week as we talk about communication skills for coders. I am joined by some of our amazing panelists out there. Let me throw it out - first, joining me is Divya. How are you doing?

**Divya Sasidharan:** Hey! Pretty good.

**Kevin Ball:** Excited to have you on the show. We are also joined by Feross...

**Feross Aboukhadijeh:** Hey there!

**Kevin Ball:** And Jerod rounds out our panel.

**Jerod Santo:** Hi, happy to be here. Happy to be in the passenger seat, Kball. You go ahead and drive this thing.

**Kevin Ball:** We'll do what we can. So this is a topic that's come up before in little pieces, when we've done pro tips or done other things, or when we talked about skills/strengths for developers, of communications skills being something that can be very important for developers, and often overlooked, particularly by folks looking at the field from the outside, or just getting in. So I thought we would do an episode looking at the different types of communication skills that are important for developers, how do we communicate with other coders, how do we communicate with ourselves, how do we communicate with stakeholders, non-technical co-workers, and then with users.

We'll kind of follow that structure, so we'll start with the simplest - talking with other coders. It seems like it should be the simplest, because we're on the closest to the same wavelength... And we'll go from there. So let's throw it out to the panel a little bit. What do you think about when you think about communicating with other coders, and what types of communication are we talking about here?

**Feross Aboukhadijeh:** I like to use binary. Programmers - they like that.

**Divya Sasidharan:** \[laughs\]

**Feross Aboukhadijeh:** How's that working out for you?

**Jerod Santo:** Just all ones and zeroes... My answer is 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** You know what I mean?

**Feross Aboukhadijeh:** Sorry for derailing you... You set it up so nicely. \[laughter\]

**Kevin Ball:** Feross, you're good at that. You take something normal and you spin it off in another direction. I love it.

**Jerod Santo:** Mischievous, I might even say...

**Kevin Ball:** You might. Well, one of the things that I was thinking about was around code comments, and function names, and things around that, which does get compiled down to binary, so... You know, maybe you're onto something here.

**Jerod Santo:** Hm... Code comments is something I'm really bad at. I have ideas and opinions, but maybe I also have anti-patterns perhaps, so I will cede the floor to somebody who has good opinions on code comments.

**Feross Aboukhadijeh:** \[00:03:59.07\] Yeah, as for code comments, there's the kind of comment you can put at the top of a file, there's the kind you can put at the top of a function, and then there's in-line comments. Do you wanna talk about when to use each, and what to put in each section? Is that what you're asking, or...?

**Kevin Ball:** I think there's a lot around that. I know for a while there was a big question -- I remember I was very passionate on the sense of "Oh, code should be self-documenting, because code comments can get out of whack very quickly... So if you can't understand what's going on, that means you need to refactor, and make smaller functions, and have better function names..." And to some extent, I actually think there is some seeds of truth in that, in that if you have a chunk of code that's trying to accomplish something, and is itself self-contained, and you're thinking "Oh, I need to put a bunch of comments on here to explain what this piece is doing" - that should get pulled out into a function, so that you have that complexity contained somewhere... But you probably also need some sort of comment about what is going on there, and how you're doing it.

So yeah, I would start from "How do you think about what needs to be commented, and what goes into those comments? What kind of content should be there?" I've seen people who go the whole way, like "set x to 2. x=2." Not helpful.

**Feross Aboukhadijeh:** Yeah, totally. You don't want the comments to be at the same level as the code itself. Repeating the code obviously is not useful to anybody. But I think comments that are higher-level than the code can make sense, as well as ones that are lower-level than the code. What I mean by that is -- like, higher-level than the code would be like explaining the motivation for the code, like why are we doing it this way, maybe what other approaches were tried, or what are we trying to accomplish at a high level here; it's giving people context.

And then lower-level than the code can also make sense. I've seen comments like -- say that you have a variable name that is not specifying the units. Maybe you're getting an argument into a function and you don't really know what are the units of this, or what are valid values, like "Can it be null? Can it be undefined?", stuff like that. I would call that a comment that's lower-level than the code; it tells you details that are not actually in the code itself. So higher-level and lower-level can make sense, but the same level is not adding anything useful at all.

**Jerod Santo:** I would tend to agree with that. One of the things I said at the top is I don't have great opinions on comments... Mostly, it's around in-line documentation which I don't do very much of, because I tend to work in smaller teams (of one even), and so I tend to think I write most of that not for other coders, but for future Jerod as the coder... Which can produce bad habits. But one of the things that I do in that regard is to only write comments - I'm not talking about documentation now, but just in-line commenting - on anomalies, or areas of the code that can't express all of the context that I currently have in my head as I'm writing them.

And to describe -- anomalies, for example, would be a workaround for a particular bug, which often is short-term. Anything that is short-term and needs to be removed later, I will often put an in-line comment saying "This is a workaround for this particular bug." Because it's not clear in the code why you're doing this thing, in a roundabout way; it's kind of like "Well, that was dumb." And without that comment, it does look dumb. But with the comment, you're like "Oh, there's a reason why this is here", which almost always there is a reason, but you just can't express that in the code... So the comment will say "This is here for this reason." Often times I will link directly to a bug, or an issue on GitHub, or a Stack Overflow thing that says "Once this is resolved, take this out", or whatever. Those are very useful. So that would be an anomaly. This is just a weird code section that can't really be explained by just reading it.

The other thing is really to document the why's that can't be provided later, versus the how. You were talking about there, Feross, with things that are at the same level as the code, as like "Now I'm going to set a variable." Well, the code is doing that, so don't comment that, but go up a level and talk about why, if that why cannot be inferred from just reading.

**Feross Aboukhadijeh:** \[00:08:10.14\] I think a lot of times new programmers are writing comments at the same level of the code not because -- they're not trying to write bad comments, or anything like that; it's just, to them, saying "When I call this function, the arguments will get passed in", that to them might be a useful comment, because that's helping them understand the code, because they're still at the level of "What are these lines actually doing?" So oftentimes what can seem like repeating the code to us, to a beginner it's actually helping them. But that's totally right.

**Divya Sasidharan:** I think it's also important to think about the fact that most of us are actually reading code more than writing code. I think it was -- he goes by getify; is it Kyle? Yeah, Kyle Simpson - he tweeted at one point that you write code 30% of the time, and then 70% of the time you're actually reading code, and I find myself doing a lot of that, where I'm just reading through other people's code, and when there aren't comments, I don't know what's happening... So they have this particular function, and it's a huge while loop, and then within the while loop it has an if statement, and then it has multiple if statements within that, and I have no idea what's happening... So there's a way of thinking about writing comments, thinking about it as you're writing it, how someone's gonna read through it.

So if you think about "I read a book, and it makes sense, because there's an arch", if you're writing code comments, all of them kind of have to make sense in terms of understanding what exactly this file contains, what the purpose of the functions are, and if there's - like Jerod was mentioning - weird workarounds, it's nice to note that as well.

I've done it where I've done in-line comments if I ever copy-pasted from Stack Overflow, I'll mention the specific post that I pulled it from, just because it's nice to give context. So if someone else or a future me were to come back to it, I know exactly where that code comes from, and I can go back to the Stack Overflow post and see if it actually makes sense, and if it's worth continuing to keep it within the codebase or not. So I like doing that.

There's also the whole commenting -- you all mentioned, commenting that something needs to be fixed later on, that is like a hotfix; that it kind of works, but it's not maintainable... So it's also nice not only to remind you that that piece of code is a workaround, but also if someone else were to pick up the code, they know that if they refactor that bit, it will break everything.

**Feross Aboukhadijeh:** I like to prefix those pieces of code with a big, all-caps "HACK", because I think it's good to make ugly code look extra-ugly. It's good to make it look like what it is, instead of... Because a lot of times people, when they're new to a codebase, will come in and copy code that they found in another file and think that that's the way that it's supposed to be done in that codebase... So oftentimes the gross hack can multiply across your codebase over time, because people think that that's like "Oh, this must be the way we do it here." But sometimes if you make it uglier, then they might think twice, or fix the problem, or decide "Oh, the hack isn't needed anymore. Let me remove it before I copy it blindly", or something like that.

**Jerod Santo:** Yeah, that kind of makes me think of the 80/20 rule, and I think my in-line comments actually follow that rule. So probably 20% of my in-line comments are useful context that will help me later, and 80% of them are me basically apologizing for the crappy code that I'm about to write. \[laughter\] "Sorry, this is not good, but I have to move on, so... Here it is! Have fun!"

**Kevin Ball:** What about some of the other ways that we communicate to other coders? One that I've been thinking about or running into recently is around documentation. I've noticed that in some communities, particularly thinking about Go and Python, there's a tendency to essentially use doc notes for everything, and assume that if I document all of the functions that are available, that is sufficient for anyone coming into this...

\[00:12:03.23\] And personally, I find that that makes these things a lot harder to understand, because you don't have that higher-level context, but I'd be curious to hear from different members of the panel, especially I know -- Divya, I think you've been involved with the Vue documentation stuff; Feross, I know you've done some big open source projects... How do you think about documenting something for other developers to learn?

**Divya Sasidharan:** I think there's an interesting -- like, speaking to the Vue docs and the methodology for how exactly that documentation was written... A lot of the times people think of docs as references, that a developer is learning a specific language or framework, and the documentation serves as just a reference that they go to whenever they need to learn something... And the Vue docs, having spoken to Chris Fritz, who worked on it, and a couple of other people, the Vue docs were written in a way that was easily -- it was almost like an introduction to Vue... So you could read the docs, and actually as you got to the end of it, understand exactly how things worked.

It was not necessarily the case where you have to read from cover-to-cover, but it was easy to pick up and then understand the flow of how everything works... Because the way that the documentation was organized kind of built on previous documentation. So as you're jumping through, and if weren't using it as a reference, you could easily jump from one piece to another and understand how exactly a specific function or a specific component would be architected, or Vue patterns etc. Which I think is really interesting, because that's a very novel way of thinking about it, rather than thinking of documentation as like "Oh, I want to help a developer who's working on this thing use this framework", rather than "I wanna help them understand why they're using this particular pattern."

**Feross Aboukhadijeh:** I love it. Yeah, that's exactly the kind of docs that I love as a beginner. One really good example in addition to Vue I think is the Redux documentation. It does a really good job of explaining why you would use Redux, and how the data should flow through your application.

I actually read it and in the end I didn't even go with Redux, just because personally I thought there was a little bit too much boilerplate, and I could just implement a simpler version of it myself, with a big switch statement. But the ideas in it were very useful, and I left with a really good mental model for what is Redux for, and how to think about how to approach modeling my application in this way. I loved it, it was really useful.

**Kevin Ball:** Something that I'm hearing come up over and over again is context. Giving people a little bit more mental context, not just for the "how does this work", but for the why's behind it. How does that play out in other types of communication that we do with other developers? ...like filing issues, opening PRs, making commit messages, that type of thing.

**Divya Sasidharan:** I think there's a general push in open source to use templates when creating issues and PRs. Because oftentimes if you are a maintainer or if you're the main developer of a specific project, when someone commits to your codebase, it's like someone else's code that you now have to maintain in addition to your own... And it's really annoying, because sometimes you're like "I have no idea..." I mean, down the road you have no idea why this was written, or why this PR was merged, or why this issue was opened... So I've seen a trend where a lot of open source projects tend to use templates, so it forces the outsider - or someone who's not the main maintainer - to explain why exactly they're raising an issue, or why exactly they're bringing this PR... So it gives specific context to the maintainer to understand why this PR is necessary, and it also allows for that communication. You can start to ask questions in a way, rather than being like "Why do you need to do this?"

\[00:15:54.01\] You can start thinking about the specific code, and the patterns that they used, and the nitty-gritty of that specific PR, rather than the overall context... Which I think makes it much faster when it comes to merging PRs or fixing issues etc.

**Jerod Santo:** Another related small tip with regard to commit messages - we could probably go on a whole show about commit messages, and we could agree or disagree on how this should be formed... But one habit that I developed - which I've grown to appreciate over time - is to write all commit messages in the present tense. That way, when you read through the commit log later in order to catch back up, it reads more like a narrative, more like a thing that's happening, versus the past tense.

The problem is that with teams people write different ways, so it gets all jacked up anyways, but if you are on a project where you're one of the only contributors, then you can have a nice, easy-to-read commit log. I've adopted that practice, and it was somewhat arbitrary, but over time I'm like "You know what, this actually reads much more nicely than otherwise."

**Divya Sasidharan:** I've also heard people who prefix their commit messages. I've done it in the past, in various orgs and companies, where you prefix it with "fix" or "chore" or "feat", so that if you're reading through, you can quickly get a glance of what exactly that does. If it's a refactor, you prefix with "refactor". Have any of you all done that before?

**Jerod Santo:** I have. I was actually listening to a recent episode on Node app structures, and I learned that Mikeal Rogers likes to put the word "feat" in front of his commit messages, and then his GitHub Actions thing will just auto-deploy things if he puts "feat." That scares me a little bit... Like, if I write the wrong thing in my commit message, I might deploy a new version.

But yeah, I've done such things. On our codebase we have a lot of front-facing things (for Changelog.com), and a lot of admin-facing things, so I'll tend to have an "admin" prefix, to give just the context that this is basically an admin thing, so if you're not interested in admin, ignore it. But I don't do the whole "chore", "feature", "bug" thing myself.

**Feross Aboukhadijeh:** Yeah, I don't do that whole thing myself, but I have my own convention of prefixing with "test" if I'm just changing a test, so that I can ignore that if I'm looking for a problem. And then I have a convention of prefixing with "BREAKING" (all caps) if I'm breaking something... So when I'm looking through the commit log to see why was there a major version bump, I can just find the commit that's all-caps "BREAKING" as a prefix, and then look at what broke or what changed in that version.

**Kevin Ball:** One thing we haven't really talked about yet -- we've talked a lot about conventions for PRs that can help us as maintainers... What about how we give feedback to someone who's submitted a PR? What are constructive, helpful ways that we can approach that, or what are some tips that we can have for how to give feedback well on a PR? ...or issue, for that matter.

**Divya Sasidharan:** An interesting one -- I've been on the product team at Netlify recently (it's part of a rotation), so I've been very much in the know in terms of how exactly Netlify works, and how the product team does PRs and so on... And so one of the things that we do is we do this thing called feedback ladders, which is a way of organizing and prioritizing your specific comment. For example, if something needs to be changed within a PR, you would prefix it with "boulder." I think there's also "mountain", and it means this huge, huge change, that needs a conversation... And then "boulder" is like "This is a change that you need to make before this PR is merged."

And then I think there's "pebble", which is a tiny change, maybe a stylistic tweak... And I think "sand" is the smallest, which is often to your own discretion, "Do whatever you want. Take it or leave it" type feedback... Which initially, when I started doing it, it felt really weird, and fairly arbitrary. But the more I started using it, the more it allowed me to parse feedback really quickly, and also give feedback... So I could understand, as someone who's receiving the feedback, what exactly I should focus on.

And then for someone giving feedback, I could also allow the person who submitted the PR - what exactly they should focus on, so things could be merged quickly, rather than starting a huge conversation and then having to jump on a call. And it made it much easier and clearer, because there were no feelings hurt; you weren't saying someone's a terrible programmer. You were just purely talking about the specific syntax or the thing that they're working on.

**Jerod Santo:** \[00:20:29.05\] I've been on the giving end and on the receiving end of lots of rejection online... talking about PRs, so on the requester side, whether it's a PR or an issue, it's like "I have this problem, or this goal in mind, and I would like it to be solved, or I would like to fix it, I would like it to be a part of this project." And then on the maintainer side, or the receiver of the issue, or the PR, it's like "Well, does this fit into my worldview? Is this a place that we're going?" There's a whole bunch of things involved. So just a general rule of thumb - this goes for all writing, by the way; pretty much all communication - but specifically the context of potential conflict... Because this is a potential conflict every single time; it could be great, it could be bad... There's a potential of this not going so well, whether I'm giving or receiving, so one thing I always like to remember is the primary audience is the key thing to any sort of communications. "Who is my primary audience?" And the first step in realizing that, before you say "Well, it's a software engineer", or "It's Feross again. He keeps opening PRs on my thing" - before any of that, it's like "This is a person. This is a human, with their own strengths, their own weaknesses, their own context, their own goals, personality..." We're this huge, messy thing, all of us. And we're the same in many ways, and we're different in many ways... But before I start writing, I have to remind myself, it'a person just like you on the other side of that text box. Remember that first. That, I think, helps me craft my responses, whether in the positive or in the negative, with care and with some level of empathy.

**Kevin Ball:** That's a great place - both because we're talking about remembering people are human, and because we're talking about conflict - to take a break before our next segment, where we will be talking about communicating with stakeholders and non-technical co-workers.

**Break:** \[00:22:32.23\]

**Kevin Ball:** Welcome back! Let us talk now about the little fuzzier communications that we all have to deal with in our days. How do we interact with people who perhaps don't speak code, who we can't just say "Read the docs", or "RTFM", or whatever our bad habits are when talking with other coders. I'm talking about dealing with stakeholders, maybe clients, maybe PMs... Other folks who don't have the same level of technical background, and more importantly, have different sets of motivations and goals than most technical people do.

Who's excited to talk about this on the panel? Anyone wanna raise your hand? Things you've learned that are important for communicating with stakeholders and other non-technical co-workers?

**Jerod Santo:** \[00:24:07.13\] The first four words you always say - "Did you try rebooting?"

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Just kidding. We need some real answers up in here.

**Kevin Ball:** Well, there is something interesting there having to do with attention. I have a story from -- I think it was Stanford IT, someone who worked at Stanford's IT department, or whatever... Who would tell me people would call and say they were having trouble connecting to the internet; and he learned to ask them to try turning the Ethernet cable around. Now, Ethernet cables are bi-directional. Direction doesn't matter. But what he'd learned was if you asked them "Is the cable plugged in?", they will say "Yeah, sure. It is plugged in." They won't check. They know it's plugged in, in their head; they have not validated it, but they know.

However, if you ask them to try turning it around, they will actually do the effort and go through it, and if there was a faulty connection in there, that will usually resolve it. Playing this back out to stakeholders and non-technical co-workers, the models they have in their head for how things work are not the same as ours, and they're often not complete.

So we have to be really careful when we talk with them and try to communicate things with them, that we're keeping that in mind and we're perhaps doing things that will work around those gaps in understanding and knowledge, and not expecting that when we say XYZ, which to us implies five other things, that we expect it'll imply the same things to them.

**Jerod Santo:** Yeah... It's really tough, because there's not levels of understanding. It's a continuum. It goes back to the individual and the idea that your primary audience - you need to know that person. And that person has a context of where their level of technical understanding is, and their job title does not necessarily represent that. So you have to hit that right, you have to speak at a level of abstraction that matches the understanding of the recipient... And that's difficult to weigh that balance, because if you go too far, and you're describing to somebody how to plug an Ethernet cable in, and they're like "Yeah, I'm not a dope. I know how to plug it in", but you didn't realize they had that -- you know what I'm saying; this is a bad example, but... You can unnecessarily insult or offend somebody on accident, because you think you have to explain things to them that you don't have to. And then on the other side - well, you can just go completely too far in the other direction as well. So it's a balance, it's a difficult thing, something that we all struggle with - how can I best communicate to this particular person? ...because they do not have the same context as me.

So you have to somehow decide, guess or ask "What level of understanding do you have in this particular circumstance that we're talking about?"

**Feross Aboukhadijeh:** I think zooming them out and also just getting context for what they were trying to do, did it work before - that kind of stuff can really help, too. A lot of times if you just come in guns blazing, like "I'm gonna just start debugging this", it can not go so well.

**Divya Sasidharan:** It's also useful to appeal to -- I don't know if this is the proper way of saying it, but appealing to someone's ego... Because I think oftentimes people get really offended when you think of them as non-technical. Some people obviously are like "Oh, I don't know anything about computers or IT", but there are others who are stakeholders who claim they are technical, and they might not be as technical as we would like them to be, or that they think they are...

So you can kind of play that game, similar to what you were mentioning, Kball, with that example of the Stanford IT person, of like trying to say things in a way that makes people feel smarter, and so they're more likely and more receptive to take feedback, and to actually talk more to the problem they're having, or explain specifically what they're trying to solve, rather than "Oh, you're probably doing it wrongly" or "Oh, I don't think you understand what is happening here." Because then it's more likely to start a conversation which is actually more useful than just a one-sided argument, or a one-sided "I'm obviously the expert and you're not" type of situation.

**Kevin Ball:** \[00:28:16.19\] I think a lot of what we're talking about so far actually also applies to users, which is what we were gonna talk about some in segment three... It's very problem-focused; they come and they have a problem they're trying to communicate. What about in things like -- say you're working with a client or with a stakeholder to try to define what a project is gonna look like, or what should get done, a certain thing. I think we've all had that experience where we have a conversation and we think that we're on the same page as what they want, and we go away and we work for a week or two, and we come back and show them something and they're like "Did we have that conversation? This looks nothing like what I expected." So what are some tools that we can use to bridge those types of communication?

**Jerod Santo:** Well, faster feedback loops, for one. So don't go work two weeks under an assumption, if you can. Get that four-hour session in and return back and say "Is this down the right path?" For example, I think that's something that we've established as good - the faster your feedback loop to yourself, and then also to others who are gonna be using it, the less time you will waste on the wrong path. So faster feedback loops - that's a reactive thing, not necessarily a proactive thing, like "How do you communicate well in the first place?" Get it in writing. \[laughs\] Get it in writing. "You said this. Here it is, you signed off on it." \[laughs\] No, I'm a little bit facetious, but some of that is real.

**Kevin Ball:** One thing that is kind of in that "Get it in writing" thing, but is kind of a variant on active listening, that I've used anyway, is when somebody is describing to me what they want, I will try to say back to them what I heard. But I will deliberately not repeat exactly what they said, because that makes sense to them. I'll try to rephrase it in the way that I would think about it or approach it, and if they hear that and say "Yes, that is correct", we at least have a better chance of both having the same mind frame on it... Whereas if I repeat back the exact language they said - or this is the challenge with getting it in writing... If I get them to write down exactly what they said, that still means the same to them, even if I'm interpreting it somewhere else. So make sure that we try that translation back and forth from your language to my language, and are in agreement that both of those languages seem to be saying the same thing.

**Jerod Santo:** That's really good advice.

**Divya Sasidharan:** You could also ask questions... Early on in my career I was always afraid to ask questions to appear like I didn't know what someone was talking about. So I would make those assumptions, and sometimes that miscommunication would happen, where you go off and work for a week, come back and realize the thing you're working on is completely wrong... So I think it's better to just get out all the dumb questions as much as possible. Even to question your own assumptions as well, like "I'm assuming this is what you want. Am I right in saying this? Am I right in thinking this?" So you can fully clarify all of the questions you might have. Even if it's something that seems clear, just to repeat back, like you were mentioning, Kball - just to repeat back what you think you heard, so that someone can clarify... Or even just affirm "Yes, that's correct" or "That's exactly what I want" is really useful, because then that automatically removes any possibility for miscommunication...

So down the road if there is a claim that there has been a miscommunication, you can bring back to the table "Hey, we had this conversation..." Sometimes that might happen in Slack, and you'll be like "This message..." Not being passive-aggressive, but like "Hey, we talked about this. This is exactly where that is noted." Or like if it's in a document somewhere, you can refer back to it and say "This is the assumption and these are the questions that were asked, so this particular claim that you're making is new, and we're moving a different direction. So it's not that we miscommunicated, it's that the specs have changed, or the requirements have changed."

**Kevin Ball:** \[00:32:10.03\] Another thing that I've noticed a lot around that kind of thing is that as engineers, we have a tendency to be better at compartmentalizing and isolating things. We may talk about, for example, working on a login flow... And to us, that means we're working on this login form, or something like that, and the interaction with our back-end to login, and kind of going through that. And then we bring it back for review with a non-technical stakeholder, and they're calling out things about how the header is not right, and the footer is not right, and this and that, that to them make perfect sense as part of this login flow, because they're viewing it holistically; they're not thinking about the pieces. But we have automatically compartmentalized, because we know which pieces are specific to the login flow and which pieces are not.

So one tool that I've found to be useful for that is to kind of agree upfront on the scope of what we're addressing right now, and also to ask them if they notice things that are outside of that scope, how they want to deal with it... Because we can say "Okay, we can always do that and that'll change our ship time. It's just gonna be scope creep. Or we can put that in a list that we'll do later, in a later sprint." But getting them on board upfront with the approach for that - and maybe your company has a standard approach ("We never change scope after we've decided") or maybe not, but getting the stakeholder on board with that, then you can always reference back...

And when they call out, "Oh, but this header feels off", you say "Okay, great. I'm so glad that you noticed that. That's outside the scope of what we talked about, so let's put it on the list and we'll do it in our next sprint, or something along those lines", so they don't feel like they're being devalidated, they don't feel like you're ignoring them, but you can call back to the agreed-upon "Well, this is clearly outside of what we've originally talked about, so we have reason to delay it."

**Jerod Santo:** That's great advice, too. I've definitely been in both circumstances there, when we're talking about seeking feedback. When you are seeking feedback and the feedback that you receive is useless because it's just not on the things that you are seeking - there's a level of upfront clarity there. Ask for what you want. Some of the communication skills sound obvious when you say them out loud, like ask for what you want. "State the obvious" - there's another one that seems obvious. But just because it's obvious to you doesn't mean it's obvious to anybody else. So just go ahead and say the thing that sounds like it's being obvious, like - right now I'm doing that, I'm stating a thing that's obvious; it's actually profound to some people, who never thought "Wow, I should say it out loud, because I may not have a shared context with all these people."

So I've just given a screenshot and said "What do you think?" before, and that's just lazy communication by me... And I get back subpar results, like "Hey, why is the thing green?" It's like "I'm not talking about the colors, I'm talking about this..." and they're like, I didn't provide them any of that. And on the other side, I've been given things that said "What do you think?" and I'm like "Um, change the header to green." So ask for what you want, be clear upfront... This takes a lot of time, as well as a frustration on both ends.

**Divya Sasidharan:** Some advice I've heard regarding that, or to mitigate that, is whenever you're showing mock-ups or specs of any form, to do it as low-fidelity as possible. I think I was talking to a couple of people at some conference, I can't remember... But one of the things they mentioned is when you're talking to stakeholders and you're trying to walk through (let's say) a login flow, don't even show them mocks and sketch; actually draw it out, so it's so low-fidelity that the colors don't matter, the fonts don't matter... It's clearly just the workflow of how exactly you want a user to go through the login flow.

That gives focus to the problem that you're trying to solve, rather than all the other things of how it looks... Because for stakeholders that is often something that matters. And it's true, it does matter, but if you're focusing on specific functionality and making sure that works, and then adding the styles and things like that, it's useful to highlight that purpose of the conversation in a way, and show it in a way where that's the focus.

\[00:36:14.21\] The other thing that I also note whenever I talk to stakeholders - and I've done this and made this mistake a lot - is sometimes I talk through what I think I will do to solve a problem, which is too technical for the stakeholder to care or know about, which then makes them feel dumb, which is not what I intended to do in the first place. Because I'll be like "Oh, in order to do this login flow, you have to use OAuth, and then with OAuth you can use Auth0 or you can use Okta... And yeah, I think they have the ability for you to do authorization using JWT tokens, and then you walk through that logic, and the stakeholder is like "I have no idea what you're talking about. You've completely lost me", and that's frustrating oftentimes.

So I'm trying to be better about that... I still do it, but I think just being silent about the specific technical details... Or just noting it yourself, to be like "These are the things to think about", but then when you actually talk to them and you're having that conversation, to not bring those things up, because they probably don't care, or they won't have any context to what you're talking about.

**Kevin Ball:** That concept of context is huge, and it's come up a few different times in a few different places... But one piece we haven't really talked about is getting your head into their context. Thinking about "What are their goals? What are they thinking about?" I had a conversation with someone at a conference one time - he works on a small engineering team inside this massive insurance company, or something like that... And he was saying "How do I communicate to an executive in this insurance the value we create as engineers?" and he was totally drawing a blank. He tried having conversations, and the executive was just like "What?" And we talked about it, and where we started is saying "Okay, what does this executive care about? What are their goals? What are their incentives? What are they trying to achieve?"

In this case, they were focused on customer service and making sure that their analysts were best able to serve their customers, or something along those lines. So we said "Okay, let's start with that." You open your conversation and you say "Alright, you know how it's really important for our business that our analysts are able to best satisfy our customers? We're establishing shared context. This is where we're coming from", and you're going the extra mile to establish their context. Then you say "Okay, we are making tools that make our analysts better able to do that. And (maybe) here's how we're doing that" or "Here's what we're working on to do that."

You've gotta start from "What does this person actually care about?" I guarantee you it's not the code.

**Jerod Santo:** Exactly. And if you don't know, you have to find out. And the way you find out is by asking questions. One of the keys to being a great communicator - we think about the output side of communication so much. "How do I write this? How do I say this? What hand signals do I provide?" But a lot of great communication is actually listening. You have to listen, and sometimes that requires practice and patience, and effort to say "I'm not listening, I'm actually just waiting for my turn to talk", and so I'm missing out on all sorts of context that this person is providing to me, which I can then ingest and use to be a better communicator.

So listening is hard to do, especially in long form, especially when you just can't wait to say that thing that you've been thinking about for this whole time... But if you don't have the context of the person and if you can't gauge their technical level, you ask them.

One complete failure of this - which I think we all have had, or probably been on the receiving side of, is when you call a help support desk of any kind, as a technical person. They do not ask you that question, like "Do you know...?" I just called Dyson the other day, because our vacuum was on the fritz. And the person doesn't have any idea what context I bring besides "My vacuum is broken." In that case it's a pretty easy solution, but lots of times you call and they're "I'm going to read you my script."

\[00:40:09.19\] And when the first thing is "Did you try rebooting?" or "Is your Ethernet cable plugged in?", if it's these things which can very well be the problem, but as a technical person you're like "I know what's going on...! I understand the OSI model. I can understand networking. Please stop talking to me like this", well, they didn't do any listening at all; they're just reading their script. So that's a really good example - they have no idea what your context is, they don't care, and they offend a bunch of people, because they never hit that level very well, unless you're a total noob. So that's an example of failure on that.

Now, here's a good example. DreamHost, which is a we host that I've used for years and years and years, when you submit a support request, they will ask you this question... I can't remember how they word it, but it's basically asking you your level of technical expertise. And one of them is like "I know more than you about this stuff", which is funny. It's like "I'm a newb", "I kind of know what's going on here", and "I know more than you about this." It's a great question to ask, because they come into that support ticket knowing what kind of technical expertise they're dealing with, and they can fit their communications to match.

**Feross Aboukhadijeh:** They also know when they're dealing with a jerk.

**Jerod Santo:** Exactly. I always pick the one right underneath that, which is like "I know what I'm talking about, but I'm not a jerk..."

**Feross Aboukhadijeh:** \[laughs\]

**Divya Sasidharan:** The other thing I really like about when you communicate with stakeholders - this has to do with active listening - is this way of attributing specific questions of feedback to people. So it's similar to this replaying back a question, but it's more like "To your point about this thing, this is what I see." So it makes people feel heard, rather than like "I'm gonna come in as obviously the expert who knows more than you do, and tell you what exactly you need to do." It's identifying "You're obviously the stakeholder and I'm building this thing for your use case, which means you're obviously the expert, and I'm the architect/engineer who's building stuff. So let me identify your problem."

Essentially, just say that "Your problem is important" and how exactly you're gonna solve it, and identifying -- whenever you have those conversations to specific people, it makes it for a more fruitful discussion. And I think also in general people think well of you when you do that. I never realized how much of an impact that makes. I often just do it out of habit, because I'm like "Oh, to the point that you're making about this, blah-blah-blah", and they're like "Oh, you really listened to what I was saying. You actually truly understand what I'm saying, and broke down and explained the problem and the solution so well." Which I think is great, and it's a wonderful way of communicating and making sure that someone feels heard.

**Kevin Ball:** Yeah, that is a great piece of advice. I'm gonna take that even further, which is - if you have multiple stakeholders in a room, use them against each other. I don't mean that combatively, but rather if you have a technical concern that relates in any way to something that one of the stakeholders has brought up, attribute them the concern, in some way. So you say "To the point that so-and-so was making, that ties into some technical challenges that are gonna be causing this... So they're totally right to be concerned about that", and whatever... Because then it keeps it from being an engineers versus non-technical people type of scenario, where it's like "You're saying we want this and I'm saying no", and it becomes more of a bilateral or a multilateral conversation, where you're saying "This concern that this person had is totally valid, and actually plays out some on the technical side as well." It creates this sort of "We're working together to solve this, and we're working together to figure out our constraints", not just "You're asking for things and I'm saying no."

**Jerod Santo:** Way to one-up, Divya, Kball. Kind of rude.

**Kevin Ball:** \[00:44:07.03\] I'm not meaning to one-up her, I'm actually--

**Jerod Santo:** I know.

**Divya Sasidharan:** He attributed me and then he one-upped me... \[laughs\] So I feel a little better.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Your point, which was amazing, can be applied to an even greater extent when you have multiple stakeholders in the room...

**Jerod Santo:** He's digging himself out of the ditch...

**Feross Aboukhadijeh:** We're getting some real-world demonstrations here.

**Kevin Ball:** Pulling my foot out of my mouth is what that was...

**Jerod Santo:** Communications is hard.

**Break:** \[00:44:37.05\]

**Kevin Ball:** Okayyyyy... Time for a little bit more party, people, we go!

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** Kball had some coffee during the break.

**Kevin Ball:** I had some coffee! I am up on coffee!

**Feross Aboukhadijeh:** Are you on your fifth cup? Fourth?

**Kevin Ball:** Yeah, I think it might be the fifth cup for the day.

**Jerod Santo:** It's hard to keep up with you in this segment...

**Kevin Ball:** Party days, and conferences - which also are party days - I drink a lot of coffee... But I cut off at noon, unless I'm super jetlagged, so... The fact that we're morning Pacific Time is great for me. Anyway, talking about users and communicating with users... A lot of the concepts we've talked about for non-technical co-workers are applicable, but we might wanna twist them a little ways, and do things... I think Divya might be a good person to start with for this, because you worked in dev rel, which is users who are technical, so that's kind of an interesting twist on this... But yeah, let's talk a little bit about particularly communicating with users.

**Divya Sasidharan:** When I communicate with users it's trying to - what we were talking about earlier, which is trying to identify what the problems that they're having are... And sometimes that's assuming what they are, but often it's asking directly what their problems are. So if I was giving a technical talk, for example, there is no room to ask questions, because you are giving a talk... So you already have built-in assumptions of like "These are problems that developers have." And I often frame it as "I'm a developer and I've had these problems", rather than "You're a developer and you've had these problems..."

For me, what's really important is trying to maintain that sense of reference, so that people can see themselves in me. Obviously, they won't directly, but just be able to be relatable as much as possible. You're like "I've been a developer for years, I've done this, and this has been a problem that I've hit", and then trying to isolate that problem, and then try to talk about solutions that you found to solve that specific problem.

The other thing is let's say you're not giving a talk, and you're at a meetup, or you're attending a conference, or you're manning a booth, or whatever - talking to people and asking them a question is a way of having them talk to you about what exactly they're working on... So often it's not like "Sure, I'm a developer relations person for Netlify and I love Netlify, I use it all the time. I'll talk everyone's ear off about Netlify", but I try not to start a conversation with that thing, to put people on the spot.

\[00:48:24.13\] I usually ask them what they're working on, and I try to work in what exactly problems they're having, or "Have you used a specific technology, i.e. have you used Netlify? What are problems that you've had when you've used the platform?" And I try to be as candid as possible, because I think that's one way of trying to sound less like a corporate shill - which I think is a term that Sarah Drasner uses a lot... Just to make sure that people can relate to you again. Because the problem with being dev rel sometimes is people see you as a salesperson, even though you've been a developer. You're like "I've been a developer for years", and then you go into developer relations and automatically people are like "You're now in sales and marketing, and you can't talk to us and understand us anymore."

So for me it's a matter of opening up that conversation, and then also trying to -- it's weird, but I try not to sound too technical, but I also try to sound technical. It's like that weird balance play--

**Jerod Santo:** The balance, exactly.

**Divya Sasidharan:** Yeah, because I don't wanna go -- I will go super-technical, but I try not to be, because I try to gauge where exactly someone sits, and then speak to where exactly they're at. So again, going back to the point of being relatable, because that's really important when you're communicating with users, and trying to identify what exactly they're trying to solve, and their problems, and their use cases... Which you can then bring back to the team for the product that you're working on, and the product that you represent.

**Jerod Santo:** Well, I'm not in dev rel, but I do have developers as users as well, whether it be listeners or users of the website, and... I was almost gonna exclude developers on what I was about to say, but I actually think we apply a lot. So users will often bring you a solution, when what they actually have is a problem, and they will describe it to you as a thing that you should do. Like, "Here's what you should do" and it's like "Move a thing" or "Change this..." And that can be helpful, it can be not helpful...

A lot of times their solutions are not good, but their problems are real, and good. If it's their problem for you, and you're on the business side of the software, so to speak, that's good for you to fix that problem, because they are your customer and they are your user. So a skill to have as a coder who's talking to users is the ability to translate their solution and to drill down with them. You don't have to do this immediately when you hear the first sentence, but to work with them to figure out what it is that they're trying to solve, because it's a very real need there... And gracefully - in the case that their solution is often bad - gracefully discard the solution, and offer perhaps a more obvious or better solution, or maybe say "I'll get back to you with options on ways of solving this..." But to be able to tease apart and find out what is the actual problem here -- because they're not gonna say "Hey, I've got this problem", they're gonna say "Hey, here's what you should do. You should change this", or "I have an idea for the website", or whatever. And I was gonna say developers don't do that as much, because they know, but no - we do that all the time; we just give you advice.

**Kevin Ball:** We 100% do that.

**Jerod Santo:** We actually -- because we have solutions, we are solutions-people we will bring you lots of solutions... And we are attached to them, because we think they're pretty good. So that's a skill to develop - how to take a user's "feature" or solution, and figure out what they're trying to actually solve, that way you can help them better.

**Feross Aboukhadijeh:** \[00:51:49.00\] It's not like the users aren't smart, it's just that they don't have maybe as much context. So if they come to you with a solution, it might be the quickest way that they see to solve their problem. But it might actually be a worse solution than something else. Especially if it's a developer coming to you, they'll say something like "If I could just call this method, then I could do what I want. Just add this, please", and they'll send you a pull request that hacks in their method, that doesn't take into account any of the context of the project, or the overall design... And it does solve their problem, but -- it's useful in those situations to just get them to sit back and describe what they're trying to do, and then you could talk about a solution together.

**Divya Sasidharan:** I've worked with users in support as well, and when you work in support or if you ever picked up tickets in support, it's always interesting the problems people come to you with... It's actually really similar to the "Did you turn it on and off again" kind of thing, or "Did you flip the cable" thing, because sometimes really technical people will come to our support forum and they will be like "Oh, the thing is not working" or "My website is not deploying. Why?" And then they'll send you the deploy logs... Which is like "Okay, I can't read this whole thing. I don't know what your use case is, I don't know what your repo is, I don't know what you're trying to do..."

There was one particular user who came to me with a problem... I didn't initially understand what they were trying to do, but from parsing their deploy log -- deploy logs tend to be really long, but there was one piece that said that their local server was running... And I basically found out that they were trying to run the local server command on the CDN. But the thing is, the error is so clear from their specific log, and so I didn't wanna make them sound dumb... Because I'm like "You're obviously a technical person, and you're working on a technical thing, and the error is so clear..." So I copied the error, and I was like "Based on my observation and this error, I believe this is what's happening, but I'm not 100% sure... So can you try doing this?"

Just phrasing it in a way to be like -- rather than like "You're an idiot, why are you doing this?", to reframing it and making them seem like "Oh, I think you didn't fully identify it, or you didn't actually read the error message, and you probably should read it more clearly..." Trying to do it that way... Because I think when you work in support -- if you've ever done any support work, people often come guns blazing, like "You need to solve my problem now. My problem is incredibly important, and I did everything to make sure that it's been resolved, but it hasn't been resolved", even though they often don't. They just ran a deploy command once, it didn't work, and then they automatically reach out to support.

**Kevin Ball:** It's not necessarily about communication, but it is shocking how many times the answer is "Did you read the error message?"

**Divya Sasidharan:** Yeah. And I think also it goes back to this whole communicating with other developers... And I think it didn't come up, but whenever you're writing code to make error messages as clear as possible, whether that be from tests, or if you're a maintainer of an open source library, to write console messages, so whenever they run a command, they'll see exactly whatever the output is, if something wrong happens... So they know exactly where to identify that problem, without reaching out to your directly, opening an issue or a PR with a hack.

**Kevin Ball:** I do wanna get back a little bit to this idea of using their proposed solution to figure out their problem... I have found that with many users you can actually be upfront about your communication and say "Awesome! I love that you've come with a proposed solution" - you've just validated them, they feel good. "There may be a better way to do it, since we may have access to things you don't know about, or there may be other things... So let me explore your problem and maybe propose some other alternatives to see if they're getting at the same thing", and kind of go from there.

\[00:56:10.12\] I've often found that users are looking for the patch fix, they're looking for something that gets them to the next step. But if you uncover their problem and say "Okay, I see that you're trying to do this. What if we actually gave you the ability to do this other thing, that is much bigger and more powerful?", they're blown away. They're like "Oh, I didn't realize that was possible", because they don't have the context and they don't understand the whole scenario.

So you don't have to be invisible to them about that. You can be transparent and say "I wanna explore, but I've seen often that folks sometimes don't even realize what's possible in terms of potential. We might be able to get you something much better, so let me see if I understand what you're trying to do." And then you're having a conversation about the problem, and you're getting directly from them what's going on.

**Divya Sasidharan:** Also if you empower them to think that them communcating with you or raising a specific issue might solve something bigger down the road... So if they were like "Oh, this particular one bug I found...", and then you're like "Actually, the bug that you've found implies that this other thing isn't working, and we've actually identified that that's something really important we need to fix, so thank you for raising this issue." And then maybe even attributing them in the release, to be like "This person identified this problem, and it's been patched." Which I think, again, reinforces that ability of making people feel like their feedback is welcome, and that something they may have raised had actually a successful impact.

And I also like the ability of sometimes if I work on a project, or if I maintain an open source project, and someone comes to me with a problem, and I'm like "Okay, it's a legitimate problem. It needs to be fixed", and then I'll be like "Can you open a PR?" And I'll even offer "I'll help you with it. I'll walk you through how exactly to do it, and if you want we'll pair on it", because then it also gives them the ability to not only raise the issue, but also contribute back to the project, so they're less a passive user, but more active... And that might also bring them back to being more of an active contributor.

**Kevin Ball:** I've definitely done that and seen people be like "Whoa, you mean I can actually do that? I can help? I can do this thing?" It's eye-opening and very empowering, and a great thing if you're working in open source.

Another surprisingly powerful tool is just to ask someone to show you... Because users have their own sets of assumptions and context in their head, and just like we've been talking about for developers communicating, they may not be so good at laying out that entire context for you. So if you're not fully understanding, or even if you think you are understanding what the issue is, you can ask them "Hey, can you show me how you're running into this? Can you show me what's going on here?"

Because you, knowing the software, or knowing the situation, or knowing all of the things around it, you will inevitably see more, and you will see things that they're doing that are outside of your expectations, and that will help you both understand the problem, but it will also give you more insight into your users... Because if you have never watched a user use your software, it is the most excruciatingly painful thing you will ever do, but you will learn more about what you could/should be doing than in almost any other activity... Because users are not you. They will not use your software the same way, and it will blow your mind how they're actually using it.

**Jerod Santo:** Feross, I just got a business idea for you. You could just go around and be a user of software for people... You know, with all your mischievous ideas. I guess that's basically just a penetration tester. Never mind... Old idea.

**Feross Aboukhadijeh:** \[00:59:53.05\] There's the guy who will do a review of your website or app while he's drunk, and he'll screen-cast the whole thing.

**Jerod Santo:** Yes... Is that Richard Littauer, I believe?

**Feross Aboukhadijeh:** Yeah, that's right. So he'll just record it, and then -- I don't know, I guess enough people have done it that he has a little business doing this now... \[laughter\] It's pretty funny. He's technical, but I guess if he drinks, he gets--

**Jerod Santo:** He gets less technical when he drinks?

**Feross Aboukhadijeh:** \[laughs\] I don't know... He simulates a normal user...? I don't know what the idea is of him being drunk, but... That's pretty funny. I'll include a link in the show notes to that.

**Jerod Santo:** Just in case you wanna contract him.

**Feross Aboukhadijeh:** Exactly.

**Kevin Ball:** Are those screencasts public? Because if I don't wanna contract him, I'm kind of curious. \[laughter\]

**Jerod Santo:** That would be interesting. He should put them up on YouTube for everybody to watch.

**Feross Aboukhadijeh:** Oh wow, he has a list of 52 websites that he's reviewed, and the videos are all up for all of them.

**Jerod Santo:** There you go, Kball.

**Feross Aboukhadijeh:** It's called TheUserIsDrunk.com.

**Kevin Ball:** That's amazing.

**Divya Sasidharan:** \[laughs\] His sponsor is a curated craft beer subscription service... \[laughter\]

**Kevin Ball:** I will say that having watched some users, I have oftentimes wondered what they're on...

**Jerod Santo:** "What are you on...?" "I'm on your website."

**Feross Aboukhadijeh:** I mean, remember, the user might be using your site while they're -- their phone is in one hand, they're holding a baby that's crying in their other hand, and they're getting out of a taxi and they're trying to push the button to do the thing... So basically the imprecision of their taps, and the size of the buttons, and the clearness of the message has to be so much better to deal with a distracted user... It doesn't necessarily mean that they're drunk. Although there's probably plenty of actual drunk users, too.

**Kevin Ball:** I actually saw a phenomenal article that recommended a set of exercises you can do to test the usability of your site... Like, go and use a mobile device on a train, because you'll experience high levels of disruption. Try to ask somebody to do something when they're in a hurry. Hold your mobile device with straight arms; you can't bend them. Do other sorts of things that end up simulating challenges that people face in real life, but that we as developers, on our perfect dev machines, with the multiple monitors, or whatever your setup is, never encounter.

**Jerod Santo:** That's too much work.

**Kevin Ball:** Or you could just drink a bunch of beer.

**Jerod Santo:** There you go.

**Kevin Ball:** Alright... Anything else we wanna hit on when it comes to communicating with users? Don't hit on your users?

**Divya Sasidharan:** Ha-ha-ha...

**Jerod Santo:** Yes, that's good advice.

**Divya Sasidharan:** Don't hate on them either.

**Kevin Ball:** Don't hate on your users, yup.

**Jerod Santo:** Don't hate on them, don't hit on them... What else shouldn't we do? Hm... \[laughter\]

**Kevin Ball:** Generally, I think - coming back to your point, Jerod, of remembering they're human. They're people. They're trying to do real things. We should feel compassion for them, despite the fact that they may not be thinking about things the way that we think about things. They're still, at the core, human, the same as us, and so we should be relatable, we should be empathetic, we should be sympathetic to their challenges, and not always think in our heads "Oh PEBKAC"

I think we're about at time, so let us wrap this episode of JS Party. Thank you for joining us for the party, as always. Thank you, panelists - thank you, Jerod, thank you, Feross, thank you, Divya. It's been a good time, and we'll catch you next week!
