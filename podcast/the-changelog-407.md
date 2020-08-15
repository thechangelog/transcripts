**Adam Stacoviak:** So how do you solve email better? I guess you release a thing called HEY, that's one way... But designing it, building it - a lot of fun stuff. We had a conversation recently with Ryan Singer, of course, talking about Shape Up, and he talked about how you'd used Shape Up to build HEY, but you were also mentioned, Jonas, as the lead designer behind that, in tandem with JSON and David, of course... So we wanted to get you here and talk to you about HEY and what you're doing with solving email, so... Thank you.

**Jonas Downey:** Thank you. That sounds good.

**Adam Stacoviak:** What does it mean to solve email? I guess it's a big problem. How do you even begin?

**Jonas Downey:** Well, we didn't start by wanting to solve email, but we've kind of found ourselves in the position of solving email after having explored some things... But we started out -- we were originally looking at maybe making a successor to our product called Highrise, which is a CRM tool. It came out in the early or mid-2000's, and we had used Highrise a lot at the time, and then kind of had drifted away from it. We actually spun it off into its own company at some point... And kind of found that the problems that we had when we made Highrise, we still had, but we had kind of just stopped using that product.

\[00:04:03.02\] So I thought "Well, what if we made a new one? Why don't we take a new look at that?" We had issues around external communication, things like talking to accountants, dealing with marketing people, taxes... Any of that kind of stuff, where you have to deal with outside vendors. We have a few people at the company who do a lot of that, and the communications is completely opaque. It's like, those people handle those problems, but if one of them goes on vacation or one of them goes on maternity leave, the stuff is all tied up in email, and no one has any visibility into it. So it's very hard to hand off work to someone else when you have all these outside relationships.

**Adam Stacoviak:** Yeah.

**Jonas Downey:** So we kind of started thinking about that... It was like "How do we make a product that solves that problem better?" And started exploring some things, and we based the initial idea around real things; so we gathered conversations that we'd had internally, and made a prototype using real content to sort of bake off if we had ideas... And we kept iterating on it, and eventually realized that in order to do the things that we wanted to do, we needed to just own the email. It was like, we weren't gonna be able to really do a good job of it and do some of the innovative ideas we had without just building an email service full-out.

And then having made that decision, we decided "Well, if we're gonna make an email service, there has to be a personal version of it, too." So that's kind of how we ended up getting started into that. It was sort of a backwards entry into it.

**Adam Stacoviak:** That's interesting, to think about Highrise. So I had been a 37signals more so than Basecamp user for a very long time; so I've used Highrise, Backpack - all the things, essentially. I've been around essentially... And it's interesting to think about that, that Highrise essentially, in a lot of ways, was just like capturing and organizing email as a CRM, attaching to people, and different stuff like that. You all as toolmakers, problem-solvers have been really solving the problem of how to handle communication, and that threads a lot into email; in many ways it gets trapped there. In many ways, Basecamp is email in the cloud, to some degree, as it messages back and forth in silos, very specific scenarios, with titles and stuff like that... So you've been already handling this. I didn't consider that -- and I actually never thought that you all would have done an email service of some sort.

So when this was announced, when HEY was announced, I was like "Okay... That's different." I didn't expect you to ever tackle the actual beast itself, so congratulations on the courage, for one... But then two, maybe how far back does it go that you were -- you know, you'd kind of alluded to some of these problems you were solving; how far back did you begin to do these early prototypes. How far back does this solution stem? I mean, you mentioned Highrise of course, that was pretty far back, but outside of Highrise after that...

**Jonas Downey:** Yeah, it goes pretty far back. So one of the things that drives this is we use Basecamp for all of our internal communication at the company... And that communication is really carefully kept. Everything's together, we all use the same tool, it's tidy, it's easy to deal with... And so the contrast of that from our external communication, which was the opposite - it was a mess, and not unified at all - was pretty stark. So the original Highrise kind of did try to solve that, but I think the reason that it fell down a little bit for us and why we stopped using it was that the integration with email was rough. The only way to get an email in and out of it was basically to forward email in and out. Later down the road I think there was a Gmail integration that worked with it, but it was still kind of clunky...

So we were stepping our foot into the idea there, but we didn't have the tech and the ideas and the wherewithal really at that point to make it work the way we wanted. And then a few years later, Jason and I had worked on some prototypes around that same Sales/CRM tool idea that was closer to what HEY became.

\[00:08:01.21\] This was like in 2014, we started messing around with some ideas... And we had prototyped out something that was pretty interesting. It was more sales-focused, but it was kind of in the same spirit. And then around that same time, David and Jason decided to focus the company entirely around Basecamp for a while. So we sort of like did some prototypes, got something kind of interesting, and then walked away from it because we decided "Now we need to refocus and do our Basecamp thing."

So it kind of sat on the table for a long time, but these issues didn't go away. We still had the problems, and we had kind of been stewing on them in the background for now probably the better part of six years. We finally got back into it around 2018; that's when we first started working on what became HEY. So it took about two years to go from the initial prototype to the release.

**Adam Stacoviak:** Yeah, if you guys intend to solve some of the problems you were trying to do with Highrise, I'll be a HEY user on the business side for sure... Because I really enjoyed Highrise, and what was missing was the control; the manual processing of forwarding things in, or pushing things in purposefully, intentionally was sort of hard, because CRMs are just difficult anyways. I've never used any of them, even Highrise, and you all are behind it; you tend to make more simple, usable tools, but that was still difficult to use, just because of the nature of the beast. It's just difficult.

So if HEY on the business side -- sure, it's in personal stages now, and eventually you'll have custom domains, or business accounts, and stuff like that. So if you're gonna resolve the Highrise problem and you could do it better because you control the entire flow of email, I'll be a user.

**Jonas Downey:** Yeah, so that's more or less what we've done.

**Adam Stacoviak:** I'll be a trier at least, maybe not a long-term user. \[laughter\] We'll try it again. We'll try again.

**Jonas Downey:** Yeah, that's pretty much what we've done... Highrise has some kind of off-shoot features that I don't know are all that likely to make their way into HEY like it does deals, and cases, and things that are kind of sales-focused.

**Adam Stacoviak:** Yeah. I like that, too. That was interesting. I mean, especially as an organization -- you know, maybe not everybody... Maybe Basecamp's a bit of a different type of company, but most businesses - I mean, I guess all businesses - need to make money, but maybe not everybody in the company needs to be involved in deals and proposals and stuff like that. So there were some interesting aspects to that, that does get tied to email... But I can see that they're outliers in comparison to what you really need to do, which is relationship-manage, and deals and proposals are just an additional layer on top of that, usually, in the case of most businesses, but not so much unanimous across the board.

**Jonas Downey:** Right. Yeah, the HEY approach is gonna be slightly more generalized around how you work with external communications as a company in the whole. Yes, the sales team might use it, but so might the programmers. It's not just for one narrow use case.

The thing that's interesting about HEY is when we first built it, we built it as a company tool first, and then added the personal capabilities second. So all of us at Basecamp had been using it as a communications mechanism for us at the company, before we even decided to make the personal thing... So it already exists. We already have that, and we have tools built out that help with collaboration on email, and things like that. So the HEY for work version is gonna be great... And we're sort of spoiled because we've been using it already for two years.

**Adam Stacoviak:** Are there are any kind of hardcore Basecamp users confused by the HEY tab in the service?

**Jonas Downey:** You mean like in Basecamp how there's a menu called HEY?

**Adam Stacoviak:** Yeah, exactly.

**Jonas Downey:** Well, the Basecamp HEY menu was sort of the spirit of the HEY inbox. We more or less took that, the HEY menu in Basecamp, and turned that into the product, in a way. So it's kind of a fun story, where each product kind of feeds the other one a little bit. And when we come back and start working at Basecamp, again, I'm sure some HEY stuff is gonna find its way back in there.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[00:11:52.19\] When I think about personal email, a couple of thoughts I have. The first one is that everybody uses it very differently. Whenever I have conversations with somebody about how they use email, there's lots of strategies... And my other thought is that many people don't really think it's broken. I think at the extremes it breaks down. If you get massive amounts of email it breaks down. I think when spam was more of a problem, that was a breakdown, to a certain degree... But I'm not sure it's broken.

So when you guys were gonna attack this, how did you solve for those two? But first of all, what were your insights about what was broken and what could be better, that manifested in HEY? And then we'll get to the other thing, which is "How do you deal with people all using it differently?" But let's start with what was broken.

**Jonas Downey:** You're right about that, that there's a lot of different ways that people use email. The initial thinking behind HEY was focused more around Jason and David and some of these other people at the company who do a lot of external email. It was kind of focused around their problem first, and they're very high-end email people.

**Jerod Santo:** Lots of email.

**Jonas Downey:** David and Jason probably individually get 300 pretty legit emails a day from people, not just from robots, or bills or whatever.

**Jerod Santo:** Right.

**Jonas Downey:** That kind of is its own class of users onto itself, and those are the people who would be maybe most interested in a tool like this, because it helps you tame that flow, keep things under control, keep it less chaotic. And it's a slightly easier problem to design for, because those people are high-energy about email. They care a lot about it, they've got a lot of opinions... It's easier to kind of suss out what they need.

**Jerod Santo:** Right.

**Jonas Downey:** So we started with that... And then as we gradually brought HEY to more of the people at the company, a lot of us aren't like that at all; we're common email consumers, where we mainly get newsletters and marketing emails and receipts from orders, and a handful of real emails from humans a week, but not that many.

So for us, that's a very different problem. It's not so much about filtering and trying to deal with all these people emailing you, it's more about how do you keep all this robot noise from taking away your attention when it doesn't need to? They're kind of, in the end, the same problem, but the angles that you come at it are different... In both cases, it's a volume issue, it's a "picking out what's important" issue, it's a "being able to get back to the things you need to get back to." Those are all consistent across all people who are using email.

So part of the thing was figuring out what's the feature set, what things do we need to handle as many use cases as we can, but also what's common across all people that we can kind of make a unified front.

**Jerod Santo:** So what came of that was this idea of the inbox, the feed, and the Paper Trail, right? Let's start with the imbox. Let's just talk about the title... I'm not mispronouncing it, listeners. It's not an inbox, it's an imbox. I think this has been the main thing I see people comment on right away. It's like "Whaaat...?!" So when Adam said courageous earlier, I thought "Well, they're pretty courageous with their renaming of the inbox to the imbox, which to me makes me think "Is it like an instant message box?" So I was trying to figure out what it meant, and I had to click through to find out. It has to do with importance and immediacy, I guess...

**Jonas Downey:** Right.

**Jerod Santo:** Whose awesome idea was the imbox?

**Jonas Downey:** That was definitely Jason's naming.

**Jerod Santo:** Okay...

**Jonas Downey:** That was a controversial thing even at the company.

**Jerod Santo:** Internally?

**Jonas Downey:** Yeah. When we first started out, it was an inbox, just like all inboxes...

**Jerod Santo:** Normal, yeah.

**Jonas Downey:** Yes. And then as we developed the product, we came to notice that the point of the HEY inbox is that it's only the stuff that's meaningful enough to you that you should see it relatively quickly when you check your email. When you check your email, you might well have 30 new messages, and a normal email client might have 30 unread things. Typically, maybe two of those are important enough that they actually warrant your immediate concern. The rest of it is kind of not that important. Traditional email clients don't distinguish those things very well... Or they use artificial intelligence to try to guess if something is important, or may or may not be.

\[00:16:01.29\] So after we've built out these flows for how to screen people into HEY, and choose where they go, and decide what's important to you and what's not, the HEY inbox became really just the important stuff. So we decided that calling it a traditional inbox (with an n) was sort of doing it a disservice, because a lot of people hate their inboxes. The HEY inbox is not the same as a normal inbox, and it would not be honest to call it one. So we came up with this name imbox. Now, of course, people have lots of reactions to that; some people find it viscerally uncomfortable, because it's like a misspelling.

**Jerod Santo:** Yeah...

**Jonas Downey:** But the thing we liked about the name though is that when you hear it, it almost doesn't matter; the m and the n sound are so close that you might as well just mishear it, so you can't tell... So people understand what it is without us having to explain what it is necessarily. They'll get -- like, "Oh, that's the inbox."

**Jerod Santo:** Right. What do you think about it, Adam?

**Adam Stacoviak:** Yeah, I kind of got it right away. I mean, I did watch some videos and I was paying attention, but... That is the truth with inboxes, that people do hate them, and I think that you generally wanna see things that are important, so that makes sense.

Hopefully, it's not a shtick that goes away. Hopefully, it sticks for the long-term and it becomes a defining factor for HEY, because I think it's what you use email for - for the important stuff. And if that's what the inbox is for, then there you go.

**Jerod Santo:** Yeah. I'm 100% onboard with the feature. I think the idea that this is not -- everything goes in your inbox; that's where everything lands. This is not that, because it's been preprocessed, it's been screened; it's only the important stuff. So that's a great feature, I think.

The term imbox - like you said, it's so close... I think you might have even said it a few times earlier in the conversation and maybe nobody noticed, because you have to read it... And I think there's an uncanny valley to it, where it's so close to the same word, and just one letter that I said it was courageous, but maybe my problem is it's not courageous enough. Maybe you guys should have just come up with a whole new word to describe what it was, and that would have been more palatable to more people. Is it a big deal? No, it's not a big deal. But we tend to focus on these things like imbox - "What's an imbox?" You know...

**Jonas Downey:** Yeah. We did bounce some other ideas that were close... The two things we like about imbox - one is that it's close, so it says inbox without having to explain it. And two, it reminds you that this stuff should be important. So not only does it say what the feature is for, it also is like a little bit of a nudge... Because as you're using HEY, you might well let some stuff in there that actually isn't important... And it can be easy to just let it get gross again. So it's a little bit of a constant "Hey, by the way, this is the important box. Keep it important."

**Adam Stacoviak:** Yeah. It's worth noting though, to understand the basic flow of email into HEY. Can you break that down for us, just so we know, generally, as a HEY user, how you would get email, how you have to screen it etc. It's meant to be processed by the person, so it's for future terms moved appropriately, so that the inbox can legitimately be imported emails.

**Jonas Downey:** Right.

**Adam Stacoviak:** Break that down for us.

**Jonas Downey:** Yeah, so I'll compare it to how Gmail works. Everybody probably has a Gmail account... The way Gmail works is all email comes into one place. Gmail uses artificial intelligence things to try to sort things into a few other buckets. There's a Promotions tab where you get marketing email, or there's like a social tab and Facebook notifications go in there. It tries to do some stuff for you... But otherwise, you're left to your own devices; stuff pours in.

\[00:19:45.01\] In HEY, first of all, everyone is blocked at the gate. So before anybody can email you at all, you have to agree to let them. There's a thing in HEY called the screener, that sort of like screening your calls. You open it up and it shows a list of all the people who have tried to email you, and you get to say yes or no, sort of in the way that you would on Tinder, or something; you're gonna be like "Yeah, I like this" or "No, I don't like this."

Along with that, you can also specify where you want email from this contact to arrive if they email you later. So the default - if you say "Yes, I want emails from this person", they just come into your inbox like normal. If you decide that "Actually, this is an email from some e-commerce site, and I don't really need to see it all that much, but I need to keep the receipts", you can file that in the Paper Trail, which is like a place for that kind of stuff... Or if it's a newsletter or some long-form content that you're interested in reading, but it's not that important and you can read it passively, you can file that person into the feed, and then anytime those emails come in, they'll be in the feed.

And the feed and the Paper Trail are kind of buried back a little bit in the app. So you can get to them, you can check them whenever you want, but they don't notify you; the stuff in the feed and Paper Trail has no read or unread state. So you can read it if you want, ignore it if you don't care... And that kind of leaves you left with the people who you said yes to, and email you into the inbox. That's kind of what you see automatically in the app.

**Adam Stacoviak:** Yeah.

**Jonas Downey:** So the whole system is based around your designations. It's not the system trying to be smart for you, it's about giving you places to decide where you want email to go, and then taking care of all that filtering rules for you, so it's just easy.

**Adam Stacoviak:** Yeah. Going back to the (I guess) extremes Jerod mentioned, which was the -- maybe the low extreme, which is someone who gets just normal email, and maybe the Jasons and the DHH's of the world, where they just get like hundreds of legitimate emails each day. That can be both hard and easy. I'm not sure -- I'm surprised, actually, and I'm really curious what David's opinions might be about this... Obviously, he likes it, since he's behind it, but having to screen that much email - maybe you just don't. Maybe it just sits at the gates, I don't know... I mean, I can see how somebody who gets light email - that's okay for it. But somebody who gets heavy email, it's unnecessary burden, I suppose...

**Jonas Downey:** Yeah, it does kind of push back the burden a little bit into another place. One thing that's sort of nice about it is that contacts are less numerous than individual emails. So in traditional email you might have one contact that blasts you with emails all the time...

**Adam Stacoviak:** Yeah.

**Jonas Downey:** So you don't have to screen every individual email they send you, you just screen that person once, and you're done. So it is some work, especially at the beginning, when you're first getting the system set up and you're getting a flood of all the email you normally get, from all the people, and you've never screened any of them before. There's like a two-week period where it's kind of a lot of work, because you get a lot of email, and you have to say yes and no a lot. Once that's done though, it kind of settles down... Unless you're a Jason and David person, where you're getting cold emails constantly, from all over the internet, for the most part the contacts you have are kind of contained. And then it gets slower.

**Adam Stacoviak:** Jerod and I may not be a Jason or David, but we get lots of cold emails, from lots of different people, that are generally legitimate-ish... I would use the -ish on there, because THEY think they're legitimate. We think they're not very legitimate.

**Jerod Santo:** Yeah. It's like, we wanna read them, but we don't wanna respond to them probably... Not all; in some cases.

**Adam Stacoviak:** It's a challenge, yeah. We're unique though, I would say, because we run a media company and people wanna reach out to us in similar fashion to--

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Or like a baby Jason and DHH. We're not quite adolescent yet in comparison to their email volume, I'm sure.

**Jonas Downey:** Yeah. There's an interesting psychology when you're in that circumstance too, where in the old model, when anybody on the internet can cold-email you and it lands in your inbox, you feel some degree of obligation to deal with that thing. You're like "Oh, this person email me. I'd better get back to them, even if it's to say I'm not interested, or I don't want this, or whatever." It's there, and it's like an obligation. So people anywhere on Earth can just put stuff on your to-do list at any time they want, without your choice. And that's one of the things that we really wanted to push back on. It's like, "Actually, how many of those cold emails are worth your time?" It could be that maybe it's half, I don't know; maybe it's less than half. But when you put it into the screener and the system gives you a way out, it really reduces that obligation...

\[00:24:14.26\] And especially if you're an inbox zero person, you're a person who feels like "I've gotta be on top of this thing." It's just an easy way to be like "You know what, that advertising dude who wants to get on my show and wants to pick my brain at lunch for 15 minutes, or something? I'm good. I don't need to talk with that guy." It gives you an out, which is kind of liberating, in a way.

**Jerod Santo:** Hm... How does it identify a person? Is it simply their email address, or is it smarter than that?

**Jonas Downey:** Yup, it's just by email address. In the future, we're gonna look at doing some stuff at the domain level, as well as like person... Because there's some circumstances where you wanna be like "Actually, anybody at this company that I'm working with who's an accountant can just come in." It's like "That's my accountant, and there's ten people at that domain, and they can just all email me. It's fine."

**Jerod Santo:** Right.

**Jonas Downey:** So we'll probably add some stuff like that down the road, but right now it's just one-to-one.

**Jerod Santo:** Also, a common trick with spammers -- I mean, nobody can enforce the actual email address, From address; you can just say you're from anywhere. It's easy to impersonate people that you aren't. Is this in addition to default spam prevention and those kind of things, where that stuff's not making it into my screener queue?

**Jonas Downey:** Yeah, that's right. We have a spam filter upfront, so known spammy stuff won't even make it to the screener. It just won't even see it. There is a spam box, so you can check that periodically to see if there's something in there. On top of that, we do have some machinery to try to detect stuff like you're saying, spoofed email addresses...

**Jerod Santo:** Right.

**Jonas Downey:** It's an inexact science, because there's lots of ways to do that, and you have to also allow some stuff that you might not want to, because email is just kind of fundamentally messy, in a few ways... So some stuff will leak through, and we're still tightening that up. We don't have it totally hammered out yet, but... We try to avoid spam and spoofing, to the extent we can.

**Adam Stacoviak:** Which is why it takes courage to build this kind of thing. You've gotta handle a lot of different problems. Spam is one of them, and that's just a gigantic amount. And then I guess the target that your servers become - so security is a gigantic issue when you become an email service... The trust that it takes to be that domain etc. Sending from foo@hey.com, for example - there's a lot of...

**Jerod Santo:** A lot of foo's out there...

**Adam Stacoviak:** Well, a lot of stuff -- maybe not a lot of foo's, but a lot of... I don't know how that relates to or how you protect your domain, the trustability of it at a security level or sendability level, but there's a lot of gotchas in that world that a Google take on; not so much that a Basecamp isn't a Google or capable, but they're just so massive you could deal with that massive problem.

**Jonas Downey:** Yeah, that's absolutely right.

**Adam Stacoviak:** Whereas--

**Jerod Santo:** Well, Basecamp isn't Google.

**Adam Stacoviak:** Basecamp is generally like 50(ish) people... You're not 50,000, you're 50.

**Jonas Downey:** Right.

**Adam Stacoviak:** Maybe you grow a little bit more to sustain HEY, of course, but still yet, it's a big problem, is what I'm trying to say.

**Jonas Downey:** Yeah, that was kind of the case with almost everything building this product... Just making an email service, just doing the foundational things that you need to do to make that even operate are all hard. Beyond anything new we wanted to bring to the table, just pick any detail of an email service and it's hard.

Rendering emails and showing them to people is really hard, because emails are designed in a way that makes them unreliable and kind of crufty, and they don't resize properly, and they're written in a bunch of different ways, and they have different compatibility with clients... Things like keeping the service up -- you know, email is a whole new level of criticality for us, past even beyond what Basecamp is.

**Jerod Santo:** For sure.

**Jonas Downey:** \[00:27:52.13\] If email goes down, people can't get to their doctor records, and they can't log into things. It is tough. It's a highly-critical service. And then all of the systems stuff, like you were talking about - building up reputability scores for the domain...

**Jerod Santo:** Yeah.

**Jonas Downey:** We even had simple things, like - lots of websites won't let people enter @hey.com as like a username, because they think the domain is fake...

**Jerod Santo:** It's too short?

**Jonas Downey:** Yeah. They'd be like "No, that's not a real address." But no, "Yeah, it is though." So we had to reach out to all these website owners and be like "Could you please allow us?", and lots of stuff like that.

**Jerod Santo:** And on top of all that, you're competing with free, right? You're competing with free and existing giants. So as lead designer of this, was there epic levels of pressure to make this very -- because when you compete with free, it has to be super-compelling, right? So like, Jonas, you're in charge; make this thing super-compelling. Did you have a lot of pressure on the way you went about designing this thing?

**Jonas Downey:** We didn't frame it that way for ourselves at the beginning. That is sort of the reality, that we are competing with free products, and that's just a hard thing to do... A part of the thing that's good for us is that, since we are so small, we don't need to even be a tiny percentage of Gmail to be pretty successful. Our sites were never on being Gmail, or being Yahoo! or getting a billion users on this. We actually actively don't want that. That's not a problem we are interested in dealing with or solving. We don't wanna grow our company to the scale it would take to get there. It's just not in our DNA.

So what we did want was to build a product that we feel strongly about, that we think solves the right problems and sets people up in a new direction. If we could get a couple hundred thousand people using it, instead of maybe a couple million or billion, or whatever - that's great. For us, that's a super-good, strong, quality product that we're happy to run.

So when you frame it that way, it takes a little bit of the pressure off. It's not like "Oh, we have to show up day one and be as good as Gmail." But I think we got pretty far, considering our size and the amount of time we gave ourselves to do it. I use it and I don't look at Gmail anymore; that's pretty good.

**Break:** \[00:30:08.22\]

**Jerod Santo:** So you're designing against free, you're trying to come up with compelling features... Even though you don't have to steal all of Gmail's market share, all of Outlook's market share - you actually just cut off a little niche and call that success. Still, you wanna be compelling and you want to convince people, at least some fraction of the market, that what HEY offers is better, for them at least, than what these other services offer. So we talked about the importance box, the imbox, the feed, which is for newsletters and other such things you might read casually, and then the Paper Trail, which is for everything else, it seems like - emails that you don't wanna read, but you may wanna look up later.

Is that distinction of these three buckets and then the design around those - would you say that's HEY's core offering, or are there other aspects of HEY that we haven't touched on that you also consider core?

**Jonas Downey:** \[00:32:12.13\] So part of the thing is that when we set out, we wanted to design something that's gonna be kind of premium. Because if you are a free email user, you use Gmail, and you're fine with it, and you don't care about email, and you don't pay much attention to it. You're probably not gonna go out and spend $100/year on a different email service. So the people we're marketing to are gonna be people who aren't that. You have to be at least somewhat intrigued by the idea of email not working for you in order to even care.

So I think our collection, our little ecosystem of features of HEY that make it premium are a few things. One is just the hey.com address. It's just a cool email address to have. We've spent quite a good deal of money to acquire that domain...

**Jerod Santo:** How much?

**Adam Stacoviak:** A lot!

**Jerod Santo:** You can't say.

**Jonas Downey:** I can't say. \[laughs\] It was enough. It was a solid amount.

**Jerod Santo:** Was it worth it?

**Jonas Downey:** Yeah. That became -- it's almost a product in itself, in a way. If you have a good -- like, I'm Jonas@hey.com. It's a good email address, right? So that's one part of it.

**Jerod Santo:** Was that immediately obvious, like "We need an awesome domain, and hey.com is an awesome domain"? Or were there a bunch of other domains that you were like "This one's pretty cool, but it's 2x the price"? How fast did that process go?

**Jonas Downey:** It was really slow. The codename for the app was originally called HeyStack, which is actually a codename we've used in the past. This is the second time we've made a HeyStack that didn't end up being called HeyStack. And I think we own HeyStack.com. We have that.

So we were considering calling it that, and somehow Jason got the idea to call it hey.com, and he went down this long path of trying to buy the domain who owned it, who had owned it since like the early '90s.

**Jerod Santo:** Nice job by him. Good old virtual real estate, you know?

**Jonas Downey:** Right, he grabbed it... And he was using it; he had a business on there, and it was like his thing... But he was kind of ready to do something else.

**Jerod Santo:** Well, that's good.

**Jonas Downey:** So they went back and forth, and the deal didn't go through. There was a bunch of different back and forth moments where we had it, and then we didn't have it. And around that time, Jason also had put out a call on Twitter to say "Hey, does anybody have good domains?", just to see if we could get something else. And he got a laundry list of totally lousy, not good domains... What people think of as a good domain isn't really very good.

So for us - we really wanted hey.com. HEY was the name... Like we mentioned earlier, Hey is in Basecamp, and stuff... So it took about six months, but we eventually got the domain, and that was it.

**Jerod Santo:** That was probably a big moment...

**Jonas Downey:** Yeah.

**Jerod Santo:** So the domain is premium...

**Jonas Downey:** Right. Yeah, so the domain is premium, and then the screener is a really huge feature for us. It's like, that's novel. And then the other big thing that HEY does is it takes away -- it basically gives you a system to deal with this mess, and that's really what we're selling. We're selling this system that takes away this pain that you have in your life, and it's $100/year for that... Which I think is a fair thing.

A lot of people make the argument "Well, I could use Gmail or FastMail and turn on 15 extensions and basically hack my way to the feature set of HEY." Maybe you can; I don't know, I haven't tried. Maybe you can do that. But that's not what we're trying to do. We're trying to make a product that's pleasant to use, that's thoughtful, designed all the way through, that solves these problems in a way that's new and interesting... And also protects you. That's the other thing. If you use Gmail, you're being advertised against. You're sort of a number in their system. And okay, the product is sort of designed for you, but it's also sort of designed for Google to make money... And we don't really like that relationship.

Our relationship is that we wanna make a really good product for customers who pay us directly. And we will protect them over our own business interests, or whatever... Which is why ended up doing things like blocking spy-tracking in emails. We can take those stances because we aren't beholden to advertisers. We aren't needing to play in all these pots to make money in different ways; we make money from our customers and we make the best product we can for them directly. So that's another big part of it.

**Adam Stacoviak:** \[00:36:16.04\] I couldn't help but be on Wayback Machine, because you mentioned hey.com was owned by somebody else... So I was listening for a second there, but I was on Wayback Machine, trying to find old stuff, and I'm sad to say I could not find anything, or it was just broken (I'm not sure), but it was fun to try...

**Jerod Santo:** Oh, bummer.

**Adam Stacoviak:** I'll look again later on, but... In between now and then - you mentioned tracking, which I totally hate. Email is such a terrible place for tracking. Everything from the pixels, to the links - it's just horrible. I say this as somebody who sends an email newsletter that currently, I believe, still tracks... Which we do hate, by the way. So if you get our email, we are planning to make some changes there, because we totally hate that stuff. And I think that's something that's changed...

**Jerod Santo:** Well, we don't really use it. Our service provider offers it, and we just--

**Adam Stacoviak:** We can't turn it off, yeah. It would be very \[unintelligible 00:37:02.01\] to turn it off.

**Jerod Santo:** Anyways...

**Adam Stacoviak:** The point is is that I think over time people have grown this allergy to being the product. To get something for free, and to be the product because they get it for free. And their data, their privacy - they're the subjects of all these exploits, and the... What do you call the bad design, where -- help me out here, Jonas; you're a designer.

**Jonas Downey:** Dark patterns?

**Adam Stacoviak:** Dark patterns, there you go. Thank you.

**Jerod Santo:** Dark patterns?

**Jonas Downey:** \[laughs\]

**Adam Stacoviak:** You rescued me from my \[unintelligible 00:37:32.14\] You know, you're trying to cheat the user by terrible design that makes you think one thing and is another... And not so much that Gmail is doing that. I'm not saying that at all. But email is this world where that lives. And then you've got the email that comes in that's trying to track you. Then you've got your email client that's tracking you... It's just a bunch of tracking all over the place... Which is a different rabbit hole, but I'll mention it, as someone who recently became a user of Pi-hole, with a Raspberry Pi, on my local network; I've just become more and more aware of all these weird URLs that my apps, my websites, my different things ping back to... And it's just like, it's a disgusting world. And I'm assuming, it seems, based on this and other things, that Basecamp and hey.com is against that, and that's the reason one why it costs money... Because you probably hate it just as much as me and Jerod do; or at least I do.

**Jonas Downey:** Yeah, it's a toxic soup out there.

**Adam Stacoviak:** It's horrible.

**Jonas Downey:** Part of it is it's invisible, too. People don't even know this is going on.

**Adam Stacoviak:** Exactly. That's the worst part.

**Jonas Downey:** Unless you're paying close attention, it doesn't tell you you're being tracked, you have no insight into that, unless you really dig in. If you're a developer person, you can kind of see a behind the scenes.

**Adam Stacoviak:** Yeah.

**Jonas Downey:** So I obviously dislike tracking in all that form... I think if you think of -- Gmail came out about 16 years ago, I think; it was like 2004...

**Adam Stacoviak:** It sounds about right.

**Jonas Downey:** Email has been essentially unchanged meaningfully since 2004. And I remember when I got Gmail - that was during the time when I'd still talk to people over email a lot; in the intervening years, marketers and advertisers and salespeople and scammers and all these people took advantage of the fact that email is sort of this open thing; everybody has email, it's a way to communicate with everybody, get on their desk immediately... And they totally abused it. They abused the heck out of it, in all these ways. They added all this tracking, they did all these drip campaigns, marketing things... It's filled to the brim with tricks. So the email you're getting now, compared to the email you got when Gmail launched in 2004 is just drastically different, and most of it is this garbage stew of tracking stuff trying to convince you to take action in some way, to go benefit somebody else.

So at Basecamp obviously we don't like this practice in general, but that's part of the idea of HEY, too - if we can't do this, if we can't make a service that defends people's privacy and stands for people instead of sales tactics and advertisers and marketing tricks and stuff, then who can? It's like, are we just gonna fold to big tech and just be like "Nope, that's just the world now. Everybody's just gonna be tracked to the hills, deal with it. Too bad. It's free at least, so I hope you like that." That's not the world we wanna live in, that's not the kind of product we wanna design. We feel like now more than ever it's important to try to build something that's a contrast to that.

**Adam Stacoviak:** \[00:40:22.29\] Yeah. In our world, we're using G Suite, and I think we're using G Suite just simply because it's useful in terms of it's never down. Not that we trust it. I trust it to be up. I don't trust it for all the other reasons. It's a cumbersome, hard to use tool, generally, and I don't see it really being for me; it's essentially a Gmail offshoot; it's essentially Gmail that you pay for, and it's got a lot of issues. And I think the reason why I've personally never made any changes away from it is because there's never been a decent contender.

**Jonas Downey:** Yeah. It's also just really difficult to move. If you have a company on a thing - you're on G Suite or whatever - moving your company off of that is kind of tough. We're working through ways to make that not as hard, so people can move... But it's a pain. You have to really be invested in the idea. Or hopefully starting from scratch it's easier. Like, if you're a new company, you can pick which platform you wanna be on.

**Jerod Santo:** Right.

**Jonas Downey:** But yeah, you get a lot of benefits from the economies of scale that Google provides, and that's legit... So it's very hard to compete with them. It's tough.

**Adam Stacoviak:** In terms of moving though, I'm still catching up on where you're at with this feature set... But when I heard of it recently, it was not possible to migrate your existing email into HEY. Has that changed? ...before I ask you the next question.

**Jonas Downey:** No, that hasn't changed. We might still do something down the road to support that. We mainly at the beginning didn't want to be bringing in huge volumes of existing mail... And we also kind of believe that this is an opportunity for a fresh start, and you don't get that many opportunities for fresh starts, especially with something like email. Sure, you could bring in 20 years of archives of Gmail, but what we've found when we used it internally and didn't do that was that we really don't dip into the archives that much, and there's a bunch of ways to keep those archives. You can either keep them in Gmail if you want, or you can download them and put them in a client... So we kind of just thought, "You know - actually, it seems okay."

For some people it's a show-stopper. If you're a heavy email archive person, and it's like your to-do list, and that's how you live, it might be a little tough for you. For most people, it seems like it's not that big of a deal. If you need to go dig something up, you can still get it.

**Adam Stacoviak:** Yeah. I'm more like it's my brain. If I've talked to you in the last ten years, you're in my email, and I can trace back at least my own memory to spark a memory of how I knew you, how we met, how we interacted... Because I've since purged that RAM and moved on with my life. So yeah, it's a show stopper for some, because they wanna import all their email... But you do let people forward in. So you can begin new... So if you have Gmail and you wanna move to hey.com or whatever it is, or if you do custom domains in the future - or WHEN you do, I suppose - you can forward in... Which means from today you can create an account, feel good about all the great things of it, forward email in, but you can't import all the past archive. And some have said "Well, that's kind of weird..." And as the designer - that's why I'm asking this question.

From a UX standpoint, you're thinking "Okay, I want people to use my app. I want people to use my thing and find it useful, but I cannot keep them in this old world where they have to hurdle the two, essentially; stand between these two lines." It's like "Here's my new email, here's my old email. I've gotta use my old email, I've gotta keep it, or keep logged into it, so that I can just use it for search", which is primarily what I would do. So if I said "Hey, I'm done with whatever, I'm using HEY completely now, and only new stuff is in there", I've now gotta adopt it. It's a big hurdle to adopt it, because I've gotta now change everything to get into it... At least that's my assumption.

\[00:43:55.17\] And then as somebody who uses my email as my brain, I've now gotta still keep my old thing as simply archive and search... Which isn't terrible, but as a designer, you want people to get rid of the old thing and adopt the new thing and be like "The world is great", and move on. As a designer, you want that... So you have to straddle this line of like "Well, what you used to have is kind of still useful, in some way."

**Jonas Downey:** Yeah, so there's a thing about making a new product from scratch, especially of this size and scale and challenge - you have to be pretty picky about what you make time for, because you can't do everything you wanna do. So ideally, yes, I agree with you - I would personally love to be able to search my archives in here, and maybe import stuff... I would love that, and I hope we can someday do it, in some fashion... But we felt that relative to the time investment and the technical complexity it would take to do that, we could better use our time doing novel, interesting, opinionated things that would differentiate the product more.

So sure, it's a bit of a problem that you can't do importing, but that doesn't prevent you from being able to access your old email in some way. But not doing the things that we think makes HEY different and valuable would take away from why people would be interested in even trying it in the first place.

So we focused most of our efforts in the initial design around doing the fundamentals to the extent that we had to do them. Emails have to render, you have to be able to forward stuff in, you have to be able to get stuff back out, you have to be able to buy the product... Those are all things that are just basic concrete that needs to be poured, that have nothing to do really with the ideas of the app... And then spend all the rest of the time on the ideas.

And then later, we have hopefully years ahead of us on this thing - we can certainly make time in a future cycle to do any important feature. If we want to, we can absolutely do that. It just didn't make the initial launch, because we didn't think it was valuable enough.

**Adam Stacoviak:** Well, telling two people who build products, that are programmers, that care about those things - it's a little easier for us to swallow that pill; everyday users may not get that. The sizeable investment it must take to just buy the sheer databases, or the sheer hard drives or space available to import that amount of -- the big play for Gmail was unlimited space, essentially... Like, "Archive everything, never delete an email, keep it forever", and that's a massive amount of data to sort of adopt just to sort of prop up a new product to compete.

**Jonas Downey:** Yeah, it's a difficult problem even to just build technically, because a large import like that can take days. It could be a very long process to bring in. If you have even just like a 50 GB archive, or something - for someone to upload that, for us to process it, get it on the system... It's not quick.

**Jerod Santo:** Totally.

**Jonas Downey:** So to design around it, we have to have a lot of systems in place for that, and then handle the delays and everything. And it's doable. It's software, so we can certainly do that... But it was gonna be -- it's a lot; it's not just like a quick thing that we can just hack together.

**Jerod Santo:** Right. You have to draw a line in the sand and shape the thing at a certain point.

**Jonas Downey:** Right.

**Jerod Santo:** But one thing you can't skip out on is the design and aesthetics. You said you're going for a compelling premium product, and the design of hey, the look and feel is - I would describe it as kind of bright, and bold. You've got blues on whites, you've got big -- everything's big. Big, rounded buttons, not many drop shadows... There's like a hand-drawn aspect to it. The HEY logo is like a hand that's drawn. So if I was to describe the way it feels, I would say it's kind of casual, bright, maybe informal, but bold... Surely, you had a part in these decisions as well. What were you going for with the design? Because you're saying you're going for premium, and I'm wondering if all that adds up to premium, or what people feel when they first see the product.

**Jonas Downey:** Yeah, well premium is--

**Adam Stacoviak:** It's like luxury.

**Jonas Downey:** \[00:47:59.29\] It can be a lot of different things, yeah. What I meant by premium was more that the people who would be interested in paying for this are probably premium emailers. It's people who are...

**Jerod Santo:** Sure. Power users.

**Jonas Downey:** Yeah, in that kind of a higher range of use. You're spot on about how you're describing the aesthetic. That's exactly how it is, and that's kind of what we're going for. We really wanted it to be a sort of calming place... One thing about email is it tends to be very dense. If you go to Gmail today and you open it up, it's basically a spreadsheet. The rows are tight, there's probably like 60 emails you can see at once, there's two columns of information... There's all these different things in a list, two types of navigation, tons of emails in a list. You click one of those, everything is dense.

We kind of wanted to open it up a little bit, because that has a just stressful, pressure feeling about it. Yet it's sort of power user-y in a sense. If you're a power person, you can go in there and be like "Oh, I really have control over this thing, because look, it has every widget, and..."

**Jerod Santo:** Right. You like your spreadsheets if you're a power user.

**Jonas Downey:** Yeah, like "Oh, spreadsheet." And that's certainly great; we don't have anything against spreadsheets, but we just wanted to take a different approach, which is all around giving you control back and giving you a sense of peace about this thing... And that plays out in the design in a bunch of different ways. Some of it is aesthetic, where it's not as dense, there's a little bit more space, a little bit more room to breathe, there's not as much navigation and stuff shoved all around.

Another aspect of it is there's no archiving. The system doesn't really archive. If you see something, you've seen it, and it sort of drifts off like it would if you were using Twitter. You read a tweet, and you don't know where that tweet went in a month. It's just gone somewhere. If you need to get back to it, you probably can...

**Adam Stacoviak:** That makes sense.

**Jonas Downey:** But you didn't have to click on every tweet and be like "Archive". It's like, "Why do I have all this obligation around managing this spreadsheet of stuff?" So we tried to really pair back on some of those fundamentals of email, and really question the assumptions - "Do we need it to be the way email traditionally has worked?" And we decided "No, we don't", in a lot of cases.

**Adam Stacoviak:** I love the way that a lot of the design decisions have been pushed back on inherent obligation of the license to email anybody in the world, right? If my phone rings right now, I've got an obligation to answer it. Verizon hasn't given me the option to screen. They haven't given me the option to do the things that you're doing with email, and I like that that's part of the -- it seems like the DNA. Is that the DNA from which you sort of make the decisions? Like, how can we question the obligations of email of past, to do email of future?

**Jonas Downey:** Yeah, I think part of that is, like I was saying before, how email has changed over the years. It started as a person-to-person communications thing, and that part of it is still beautiful. Anybody on the Earth can email you, and you can write them back, and it's great. It's amazing. There's no real owner of that, and it's an open platform. It's like the web in that sense, it's a beautiful thing. But it got kind of perverted over the years too, and abused in all these ways, like we talked about.

The modern email circumstance is that it's a huge amount of effort to keep up on, so people either feel guilty about it because they can't keep up, so they have a red badge in their iPhone that says 13,000 unread emails... Or they keep up on it in a way that's stressful. They try to do inbox zero, and they're constantly checking their email and responding immediately... It's a thing.

We wanted to come at it from another angle and be like "Why is it like this? Why can everybody put this pressure on you, and why do you feel like you're obligated to have to act on it? You shouldn't have to feel that way?" So we designed HEY to provide you with power as the recipient... Because email as it was originally designed, the power is all with the senders. Senders can just blast, and you as the recipient get the blast. That's it. Good luck. It's on you. So we try to tilt that power structure a bit. It's not totally tilted, but it's tilted enough that you can defend yourself a little bit against this onslaught of stuff, which takes away all that obligation feeling and makes it a more peaceful experience.

**Adam Stacoviak:** \[00:52:15.29\] Is there a natural strategy? \[unintelligible 00:52:16.16\] back to something Jerod said earlier, which was there's people who have certain strategies to email; you mentioned inbox zero, or keep it all and it's a badge of honor... But it seems like you've just designed for success regardless; there is no true strategy. It's just email as normal, and once you've read it or seen it, it goes into the past. You can file it, you can screen, and just using it is the strategy, essentially.

**Jonas Downey:** Yeah. Basically, by just using it, a lot of the effort you'd have to put in a different email client just isn't there. And this manifested a bunch of different ways. One way is that HEY doesn't notify you about email by default, at all. So when you first sign up for HEY and you start getting emails in there, you won't get push notifications unless you choose to turn them on... Either individually, for people, or individually for a thread, or you can do it just for the imbox. Those are our three ways of getting notifications.

Another thing it doesn't do is counts. So we don't, pretty much anywhere other than the screener, say how many emails you have in any place, because it's just stressful, and it doesn't matter. It's not helpful. If you say "I have 50 unread emails in this thing" - so what? Are you gonna read all 50, or are you gonna mark them all as read? We just have that off.

Another core change is that lots of emails don't have read or unread states at all. That's another obligation - in a normal email client, when things are unread, they're bold, and they stand out, and you feel like you're obligated to click on every single one of them just to mark them read. You may not need to. Maybe you get an email from Amazon and it's like a shipping notification, and you're like "Yeah, good. I see. I've got it. It's fine." You don't need to click into that. You don't need to do anything. You're done. You saw it.

So we try to do a lot of the stuff in HEY around that, where seeing the thing is enough; filing it somewhere is enough. Just looking at your email is enough, you don't need anything else. The system doesn't need to berate you about reading email.

**Adam Stacoviak:** The one criticism I have seen though is if the imbox (yes, imbox) is the home, the previously seen and the inability to control this inbox zero mindset is lacking... Because you can do the screening, you can do the filing, and you can have seen, and things will go away... But the previously seen and a couple other things might trickle down below. Have you gotten pushback on people who are like "I want a clean screen. I wanna know I'm done. There's nothing bothering me." And as you said before, obligations. You've sort of designed in some obligations there visually.

**Jonas Downey:** Yeah, that's probably the biggest behavioral change that people struggle with when they first sign up, especially if you're an inbox zero person. You're used to the blank slate being the thing. You get like an endorphin rush from when you don't see any emails, and that's your way of thinking about email. In HEY, instead of an archive we do this thing where when you get an email in the inbox, it's unread. If you click on it, you've seen it, and then it goes down into this previously seen section, which is on the same screen, but it's kind of down below a little bit. And that's it; there's no archiving, there's no other action you have to take. You click it, you see it, it goes to this bottom section.

Some people find that a little bit uncomfortable at the beginning, because they've seen something, but it's still sort of there. It's within their field of vision. Even though it's a little bit down at the bottom, they can kind of see it, and they're like "Aah! I'm upset! I don't wanna see this at all. I want inbox zero." So we are encouraging that idea actually in itself is sort of not good. The fact that you feel stressed about just seeing that an email exists probably isn't great; you've sort of trained yourself some habits that maybe aren't super-healthy for you as a person in general... But with that said, we do appreciate that some people just really don't wanna see old stuff. So we're pretty likely to add some options around toggling that off, or hiding it if you don't wanna see it. We'll probably end up doing that at some point, just for those people who feel really uncomfortable about it.

The thing is that I've felt that same way at the beginning, and you use it for two weeks and you're like "Okay, I get this", and you kind of stop; you lay your guard down a little bit and it doesn't feel so weird anymore.

**Break:** \[00:56:27.01\]

**Jerod Santo:** Jonas, as you were speaking to the previously seen list as lack of ability of being completely gone, I was over here thinking I'm kind of an inbox zero person... And I'm learning how I would react, so I've been poking around the product here a little bit... And I definitely was looking for the archive button, because that's just the way I use email - I archive it once it's done, and I use it a little bit as a queue of things to do. So it's kind of a to-do list, it's kind of a to-contact list, and I do like to clear things out; even though I don't need the counts, it doesn't need to be empty, I'm not super-neurotic about it... But I am a completionist.

I'm a bit of an inbox zero person... And I was trying to think "How can I use this?", because maybe I just wouldn't; maybe I'd just go back to the traditional way... But how would you capture a user like me, who either needs to change their processes a little bit, or maybe HEY needs to loosen his opinions slightly, like you were talking about, maybe provide options for us to get those endorphin hits, or whatever it is... I did find that you do have this set-aside. It actually uses a pin as the icon... What is that called? I'm blanking.

**Jonas Downey:** Yeah, a push-pin.

**Jerod Santo:** A push-pin, yeah. And what that does is when you click Set Aside on an email, or they A keyboard shortcut... By the way, nice job - all keyboard shortcuts are awesome in here for the power users... When you do that, it goes back into your inbox, or maybe wherever it was; it's in your inbox, but it's in the previously seen, and it's pinned to the bottom in this little accordion, like "Here's the ones..." They're kind of like "I've read this. I don't want it to disappear, because I am going to address it later. I'm gonna read it again later." That, plus you have the Send Email Later kind of a thing; like, Reply Later.

\[01:00:07.08\] So these are a couple of things where I could see myself using that in order to accomplish what I normally do, which is I'll leave it in my inbox. My inbox right now has nine items in it, and two are unread... And the other seven are things that either I'm gonna read them again and then archive them, or I'm going to reply, or I'm gonna do something and then archive it. So I am kind of a "manage a queue using my email" person. I've lived that way for many years, and I just like it. It works for me, I'm not stressed out... So I'm wondering if your combination of these things are helping people like me continue to do email in a way that's at least similar to the way we have been, but still take advantage of the stuff like the News Feed; I think it's a great feature. I don't like reading newsletters in my inbox, because I'd rather relax, and my inbox is more like a work queue, so I like getting that out... But I also like keeping these things in. Can you speak to the set-aside board and the Reply Later stuff?

**Jonas Downey:** Yeah, absolutely. So the overall system of HEY is kind of a series of different places to put things to make your life a little easier and a little less pressured. The first part of that is just by reducing the volume of email you get in the first place, by screening it out. So that helps. The second part of it is being able to file certain contacts into certain places, like the feed or the Paper Trail, so that you don't have newsletters and shipping confirmations intermingled with actually important emails from people that you need to get back to. So by just setting up those initial features, by screening people in and out and designating where they go when they email you, you've already done a good job cutting down email into a much more manageable slice. So if you are an inbox zero person, it's less work to get to zero; instead of having 50 things, it's maybe ten in a day. So that helps.

But then even once you've done that, just when you take a look at your email that you would have classified as important, some of it is important in the sense that you needed to see it; it's not necessarily important in the sense that you need to reply to it immediately, or that right this moment is the right time for that email. So what we did was we looked at different workflows that happen for different types of email, and we designed features around those things.

The Set Aside feature is sort of like in a normal email client you might have like a pin or a star; in Gmail I think it's a star. It's like the flag to say "This is something I need to get back to, this is important", whatever. But the thing in normal email clients is when you do that, the email just stays where it was, or maybe sometimes it flows to the top of the list, or something... But it doesn't go away.

So what we've found was that when you have a feature like that - let's say you have some bill you need to pay, but you're not ready to pay it yet. It's due in a week, and you have to get paid before you can pay it. The traditional thing is you would just star it and then get back to it. Or you'd mark it Unread, and it sits in your way, the whole time; there's no other place to put it. Or maybe you put it in a folder, or something. So Set Aside is the place to put stuff like that, where it's like "I know I want this, I don't want it to go away. I want it to be available and in my vision still, but not in the way of these other things that I'm triaging in the moment."

So if you have that bill and you need to pay it but it's not ready yet and you put it in Set Aside, you wait a week, you come back to it and pay it and then you take it out of there. That's kind of the idea of Set Aside. And it's still in the inbox in the sense that it's still in your face. It's not gone, it's just not in between the other things that you're still going through. So that was the motivation of that feature.

\[01:03:44.17\] And then the other thing that happens is you'll get email from five people you need to get back to, but you're basically at work during the day and you're in the middle of something else and you can't get back to them. But then you've seen the email, and you know you need to reply, but you can't do it now. So you're sort of stuck. There's a couple ways in a traditional email client to deal with that. One way is to mark it as unread; even though you did read it, you have to leave it unread to remember "Oh, I need to deal with it again." Or you might snooze it; some email apps have a snooze option, where you can send it away for a while and it'll come back to you again. We built Reply Later as a direct workflow to handle exactly that problem.

So if you get five emails in a day and you wanna write those people back, you can mark them all as Reply Later, it goes in to a little bucket, and then when you do have time - maybe it's in the morning or the evening, whenever you're free - you can click on that and it'll take you to a dedicated screen where it lists only those emails from those people, \[unintelligible 01:04:40.03\] so you can see the whole content, and you don't have to click on them individually... And you can hammer out replies to each one in a row, in a focused place, and you're done. That's it. So it's a way to queue up emails and then reply to them kind of in a batch... And then that's it. You're free, you're done.

So we just did a lot of thinking around these real human scenarios, and worked through those and decided "How can we solve this in a way that makes it less friction to do these things?"

**Adam Stacoviak:** Did you do a lot of the (I guess) discovery of this around real people, or did you look at other services that were trying to also solve for this, or maybe have some good ideas but not doing them so well? A couple that come to mind \[unintelligible 01:05:22.08\] a couple of things that are feature sets of HEY... And then obviously when we talked to Ryan, he talked a lot about longitudinally looking at datasets, and specifically talking about an individual user, their path through a workflow, or whatever it might be.

So when you define and start to design, do you look at individual humans, or do you scrutinize other services? What was the pattern you all used? Or did you just use both?

**Jonas Downey:** Actually, it was neither... \[laughs\]

**Adam Stacoviak:** Neither? Okay... No real humans involved. Okay, good.

**Jerod Santo:** Haah! Door number three.

**Jonas Downey:** Well, some humans...

**Adam Stacoviak:** Sure.

**Jonas Downey:** So the dataset approach is super-great when you have an established product and an established company that's been running for a while and you can analyze it. In this case we didn't have that at all. We had nothing to go on, so there's nothing we could analyze, really.

**Adam Stacoviak:** Well, David and Jason and those heavy users; so they were your -- but no real product dataset.

**Jonas Downey:** Right, exactly. We couldn't get in there and dig through usage patterns or sort anything out like that because we just don't really have access to that. We had colloquial research from them, having been doing email for 20 years as company owners and struggling with it... So I would say that's basically the root of where we started - designing something for ourselves, like "What's the tool that we would want to make our lives less painful in this regard?" Definitely, we always start there with any product, for the most part. And then from there, it evolves out in a bunch of directions. So in this case, we had some very root ideas early on. The screeener was a very early idea, because Jason and David knew right away, "We don't want to get a lot of this email we get. It stinks, so let's fix that." So that was an early thing.

But something like the Paper Trail didn't come in until way late. That showed up after we had built a bunch of these other features, and I was struggling with having a bunch of stuff in my screener, and I couldn't decide where to put it. We only had the inbox and the feed, which at the time was called the Slowbox, which I kind of like... \[laughter\] We had those two, and so what we were doing - I would end up sort of in this purgatory, where I'd be like "Well, I don't really want this in the feed, because the feed is nice, and it's good for reading, but I don't want receipts and junk in that. And then I don't want them in my inbox either." So I would end up with a queue of like 60 contacts in the screener, and I was like "Something feels wrong..." So I pitched this -- I originally called it The Bacon Box. It was like a box for kind of spammy email that's not really spam; it's like bacon - you still want it, but you don't really want it. You just kind of have to deal with it. Kind of transactional stuff.

**Jerod Santo:** I used to work on spam systems, and there's be a "Spam and Ham", that's how it would classify. So the Bacon Box makes sense.

**Jonas Downey:** Yeah, that's right. Ham is like the stuff that we thought was spam, but it's actually good; it's ham.

**Jerod Santo:** Exactly. Mark it as ham.

**Jonas Downey:** \[01:08:11.10\] Bacon is kind of better than spam, but just a little bit better... \[laughter\] So I pitched that after having used the app personally, for my own personal email, for a month or two, and finding that it was missing something. So a lot of the features end up coming out of that kind of thing, where we solve some stuff, we have some ideas, build a part of it, and then use it... And then we're like "We're still hitting these friction points. How do we address that?" And then we dig into that problem and figure out a solution for it.

**Adam Stacoviak:** Well, one of things you've gotta keep in mind is - especially those listening and those checking this out for the first time - you've gotta start somewhere. You have to have some deeply-investigated feelings about these things to change anything. You've gotta start somewhere. So even if, for example, inbox - if that does change, to give more flexibility or control or toggleablity to users like me or Jerod...

You know, if I could get to inbox zero, I would totally do it. As Jerod said, he's neurotic about it; I'm not neurotic about it. I wouldn't be like I have to be, but if I could, I might. So if your system enabled me to succeed better, it kind of upset me that my inbox couldn't be clean, and dealt with. You've gotta start somewhere is the point though. Obviously, HEY is new. You've gotta begin somewhere. And I think the cool thing is that you care about solving real problems, so if your users come to you with real problems of like "Hey, this kind of bothers me", at some point you may give them tooling to say "Okay, here's some controls. Here's some levers so that you can feel good about this."

We don't really agree with that framing, but we needed to have some deeply-held opinions initially, to get to a place where we all felt good about it, because it was scratching our itch... And maybe we attract a lot of people who have similar itches... And eventually we go down the itch metaphor too far and it gets crazy, but... There you go.

**Jonas Downey:** No, that's exactly right. At the beginning when you're launching this, it's very important that the story you have to tell about it is really high contrast. Why are you gonna convince somebody to go spend $100 on email when they could use Gmail and not spend $100? You have to have a pretty compelling story. And you don't do that by toeing the line, and being like "Well, it pretty much works like Gmail, except we have two features", and whatever. It needs to be a line in the sand, that's like "No, this is a new thing. It's a new take. It's different, and we have a bunch of opinions, and that's what you're signing up for."

Now, that's day one though... By day 1,000, we'll have heard from tens of thousands of customers who've used the thing and have sent us a bunch of feedback, and we may well shave down some of those opinions a little bit, or like you're saying, provide flexibility around them. We just did that for the inbox. And when we launched, there was no way to get notified/get push notifications about everything that comes into the inbox. We just didn't ever build that.

Then we heard from customers that are like "Well, we're already filtering things out, and the inbox is pretty good. It's mostly what I do wanna hear about, so I'd like to be notified about anything that comes in there." And we're like "Yeah, that's a reasonable stance. It's not personally what we want, probably, because we didn't build it in the two years we made the thing, but it's fine." We're not so heavily opinionated about notifications that you couldn't have that as an option, so we added that. And there's gonna be tons of things like that. We may add an option to hide previously seen, for people who don't like that. We'll fill in a lot of these missing pieces, but we wanted the initial launch version to be super-core and tight and full of opinions, so that we could really punch down on that contrast.

**Jerod Santo:** So as Adam said, we're on Gmail; my personal email has been on Gmail since the early beta days, back when it was invite-only, and it was so cool to get free storage... Because you had to pay for every email back then. But I never used Gmail's interface, because I don't like it... And I don't have to, because I have IMAP, and so I use the mail app on iOS, and I use -- what's it called over here...? I don't like the mail app on macOS.

\[01:12:07.08\] I use Spark, which has its own interface and maybe a little on top of Gmail, things like snooze, and some of the features that you were talking about... And that makes me think about HEY, because y'all are doing something kind of -- I don't know if it's radically different, but it's quite a bit different than a traditional email like Gmail is... And that makes me wonder if you then support traditional style. Can you connect into HEY with IMAP and use it from a Spark app? Or do you have to be all-in on HEY's web app and HEY's mobile apps to use the service?

**Jonas Downey:** It is a little bit different in that you can use a different client with HEY as the backing service. So you couldn't hook up Spark to HEY, or hook up iOS mail app to HEY and get email through it. There's not a technical reason we couldn't support that, it's more design and usability reason, which is that in order to do all of these different things that we wanted to be able to do, we had to build a system that works differently than how email works. So if we provided an IMAP interface, people could use it as a service, but it wouldn't have any of these changes that we've made.

**Jerod Santo:** Just a killer domain name.

**Jonas Downey:** Yeah, I guess. Maybe in the future we'll end up deciding like "No, that's actually fine. We don't care if people just wanna use it as a client."

**Jerod Santo:** You could still use the screener feature once you're all set up and running. You wouldn't be able to screen, but you'd have the advantage that your inbox would be the imbox, basically.

**Jonas Downey:** Right.

**Jerod Santo:** So yeah, it wouldn't be a one-to-one mapping, IMAPping, so to speak... Oh, that was bad.

**Jonas Downey:** Yeah. \[laughs\]

**Jerod Santo:** But I'm just curious if it's a foundational technical reason, or if it's just like "Well, we want our experience to be there, so we built these apps instead of using IMAP."

**Jonas Downey:** That's pretty much it - we wanna provide the experience that's novel, and giving somebody an IMAP client isn't really that. But we could do it. We actually did build an IMAP integration for exporting, which we ended up not shipping, because it was sort of challenging in a bunch of ways that weren't really even technical. There's all these politics around how you can get email into other providers. Google has an approval process that takes a year to get through...

**Jerod Santo:** Huh... You can't just export a .imap big old 50 GB file and then...?

**Jonas Downey:** Well, that's what we ended up doing. So our exports currently are like imbox format, which is basically just a box, and you can bring it into a mail app, or whatever...

**Jerod Santo:** Right.

**Jonas Downey:** So we have the smarts and the wherewithal to be able to do IMAP, and we may well do it in some fashion down the road... But it was another one of those things where it was like a huge engineering effort for an experience that didn't really match up with what we wanted to do... So that was an easy cut. We just cut that to begin with.

**Jerod Santo:** It's an easy cut, but on the other side it requires you to build native mobile apps for both major platforms, right? So that's the trade-off - "We're not gonna do IMAP, but we are gonna build native apps for every platform that matters."

**Jonas Downey:** Right. That was definitely part of it. But truthfully, we would have had to do that either way. There was very little likelihood we would have launched an email service that was just like "Nope, bring your own mail client." That just isn't the story we wanna tell.

**Jerod Santo:** Yeah.

**Jonas Downey:** So we were probably going down that road regardless, and then at that point you're good.

**Jerod Santo:** Did you consider web-only in terms of like a PWA, or just a web app that you could just install on your homescreen and center there? You couldn't get your push notifications, but like you said, you didn't want that anyways, to begin with.

**Jonas Downey:** Yeah, we could do that. The experience for that on the consumer side is harsh, is the problem. People aren't really familiar with it, and it's not easily discoverable. People expect "If I'm gonna pay $100 for an email app..."

**Jerod Santo:** ...search the app store.

**Jonas Downey:** "...I should be able to go to the app store and get the app. I shouldn't have to go to some website..." And part of that is -- that's not our problem so much as it is an app distribution problem. We'd love to be able to just put our software on the phone in a way that didn't require us to go through all these hoops, and Apple and Google jumping, and all this stuff. But that's just the economy we have to work in right now, so...

**Jerod Santo:** Right.

**Jonas Downey:** \[01:16:07.02\] It was pretty much table stakes. I don't think we could show up on day one and not have apps. It wouldn't have gone over well.

**Jerod Santo:** So what were some of the challenges there, aside from the obvious, big, controversial one, which was Apple and the app store and the HEY app not being able to be updated? ...that was covered very well, in many places. Aside from that - design challenges, software challenges... You had a lot of stuff to design, right? Were you just trying to matriculate your web app into those mobile phones in terms of the design, or what?

**Jonas Downey:** We have a design process for how we do this. Generally, the idea is for the product to start on the web, and I and some other people at the company in the core product team kind of do the initial versions, the web-based versions.

Then because of our hybrid architecture for how we build our native apps, they can kind of consume the web views relatively easily, without needing to do a lot of upfront work. Then we have mobile teams that can decide what stuff is worthy of turning into a native, high-fidelity interaction, and what stuff could stay as a web view. There's lots of things in apps that don't really need to be native, like a Settings screen, that you don't go to very often. It's fine if that's not the highest-fidelity screen, because you go there once every six months, and it's a list of things. It doesn't need to be that good.

But the inbox in an email app does need to be high-fidelity, because you wanna be able to swipe rows, and check things, and have it feel fluid, and scrollable, in sync when you're offline, and all these things you would expect...

**Jerod Santo:** Right...

**Jonas Downey:** So that's a case where it's worth a lot of native investment upfront. So we do a good bit of basically spiking things out, initializing things on the web, and then the native teams will build on top of that foundation. In this case we also built a ton of new tech and stuff to make our lives easier, to share components and navigation bits and little details across the platforms.

We also had some tension around making the apps all look the same and work the same, because as we were building this thing, all the teams were off in their own directions for a long time. When you're making a new thing, you don't know what the thing is until you make it, and everybody has a different interpretation of what that might be, and everybody's kind of riffing on things and winging it... And at a certain point, relatively close to the launch, we realized "Hey, the apps don't match..." \[laughter\] They had different navigation, and different things resurfaced, and we were like "We probably should sync this up and get tight." So we had to do some work to get everything matching across the platforms.

So I would say that was actually probably one of our biggest points of tension - realizing we hit some point where we were like "We need to sync up before launch."

**Adam Stacoviak:** Can you speak at all to the (I suppose) initial inertia of people coming in? Obviously, Basecamp's got a pretty wide megaphone in terms of influence; you've written books, you've defined methodologies, you create great web apps and you're great leaders in many ways, individually and as an organization, so I've gotta imagine there's a lot of people trying out HEY. Can you talk through (I suppose) whatever you can numbers-wise, in terms of who tried it out, maybe future anticipation? Obviously, maybe not a Gmail killer, but maybe a Gmail slicer, where you slice a little off and take some.

**Jonas Downey:** I feel like we actually were a little bit overly pessimistic about how this was gonna go, which is probably a defense mechanism. We kept giving ourselves excuses; we were like "Well, if HEY didn't do well, at least we would have learned some stuff." We basically tried to make it like there was no pressure on it being really successful at the outset.

Our original launch plan - we had it in an invite-only mode at the beginning, because we were trying to lessen the support burden initially. We've done enough launched in our 20-year history to know that opening the door on day one, being like "Hey, the product's open. Come on it" - it's totally overwhelming for our support team. It's too much and we can't do it... So we wanted to do more of a staggered launch and let people in gradually. Then all that stuff with Apple happened, and it greatly magnified the visibility of the app, and drew a bunch more interest.

\[01:20:15.24\] I think at the peak, I'm pretty sure the waitlist had almost 200,000 people on it. It was really a lot for our scale, for what we were thinking would happen. So we ended up just accelerating the launch by like a month. We were originally gonna take about 30 days to go through the waitlist, which at the time was not that big, and then we ended up compressing that into a week, for a waitlist that was like three times the size we expected to get. So that was a really chaotic time.

But the initial conversion rates and stuff were strong, and it feels like a pretty good launch. It got probably the most buzz we could have expected it to get... So I think it's looking good, it's looking viable as a long-term thing.

**Adam Stacoviak:** If I understand correctly... I didn't dig deep into it, but if I understand correctly, the situation with Apple - one, it was the second time David had a run-in with Apple, with their credit card issue, and now as an app maker issue... But did that remove the requirement for the waitlist? Wasn't it something where with free and using the app store and distribution it couldn't have this weight behind it? Something like that. Was the waitlist removed as part of that issue? I can't recall...

**Jonas Downey:** No, they were kind of separate. The invite code thing was just like you had to enter a code in order to get through the sign up. So you couldn't sign up for the app unless you had a code.

**Jerod Santo:** Right.

**Jonas Downey:** I don't think that was really part of the Apple blocker. The Apple thing was more about how we sell the app, and their argument was like it didn't work unless you already had an account, and they didn't like that... There was some weird arguments going back and forth about that... But no, I don't think the code thing was a blocker.

**Jerod Santo:** I remember watching that happening play out, and as every new slightly bigger online publication began to report it, I thought "These guys couldn't buy this kind of publicity. This is like the perfect storm for HEY, because it's gonna get worked out somehow, on the other side." But that hit definitely mainstream tech news; it may have hit mainstream national news as well. It was a pretty big story.

**Jonas Downey:** Yeah, it was right up David's alley. He's kind of been harping on a lot of these issues prior to this, so it was a bizarre timing for them to make those changes and go after us on it, because they know who they're dealing with, I would assume... Yeah, it was definitely chaotic.

**Jerod Santo:** Well, they do now... \[laughs\]

**Jonas Downey:** It was definitely a "No press is bad press." It got so much attention...

**Jerod Santo:** So much press.

**Jonas Downey:** However, it was an existential concern for us. We were in a very tenuous position.

**Jerod Santo:** If there was no way out, then you guys would -- I mean, you had to be on iOS. Like you said, you had to be there.

**Jonas Downey:** And they easily could have just dropped the app. It was nice of them not to, because we were fighting openly in the press... They could have been "Nah, you're out", and then that would have been catastrophic for us. So we kind of lucked out.

**Jerod Santo:** Right. For those listeners who weren't around in June, or have no idea what we're talking about, aside from what we've said, is there a best place rundown of that story? Has David written it up? Because it unfolded over time, so I wonder if there's a place where people can go and read about it if they're interested.

**Jonas Downey:** There's a bunch of stuff on our blog, signalvnoise.com, and then also the Verge did a really good coverage. They have 3-4 summary articles of all the drama. There's one that's hilarious. It's like "Yes, this drama is still happening", and it's like 40 bullet points of things... \[laughter\]

**Adam Stacoviak:** Interesting. Well, Jonas, thank you so much for sharing your time today, man. It's been great going through all the details of mapping out, designing and building this thing. A new user, hopefully a long-term user; I certainly believe in a lot of the things that you all have set into motion. I do agree that it's time for a disruption to email and change some things, because I'd like to have less obligation when I look in my inbox; I want systems that work for me, not against me, and current systems work against me, so I'm looking forward to being a HEY user in the future.

**Jonas Downey:** Awesome.

**Adam Stacoviak:** Thank you so much for your time, it's been awesome.

**Jonas Downey:** Thanks a lot. Thanks for having me on.
