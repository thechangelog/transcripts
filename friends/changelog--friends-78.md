**Jerod Santo:** We are joined once again by Dan Moore, who we first met because of his awesome blog, "Letters to a New Developer. What I wish I had known when starting my development career." We did that episode with you, Dan, about a year ago now. That one was called "Dear New Developer." And now you're back. Welcome back, man.

**Dan Moore:** Yeah, thanks for having me back.

**Jerod Santo:** Thanks for coming. Adam's also here. Adam, welcome back.

**Adam Stacoviak:** Man, I'm so glad to be back. I love this show. It's so awesome to be part of it... You know, all those things.

**Jerod Santo:** Recovered from your flu?

**Adam Stacoviak:** It's all gone, you know? NAC. Gotta take the NAC.

**Jerod Santo:** I don't know what that means.

**Adam Stacoviak:** Well, if you're a weirdo, you would know. Dan laughs, so you must know what he's referring to. NAC?

**Dan Moore:** I don't. I just laugh when I don't know what's going on...

**Jerod Santo:** That was a pity laugh, Adam. You've missed us both with this. Not Another Character...? I don't know. What's NAC?

**Adam Stacoviak:** It's an acronym, obviously, and I cannot pronounce it... So there's a lot of speculation in the medical industry, because there's a lot of suppression of what will actually heal you, and what will not actually heal you... And so NAC is an acronym, I think it stands for -- I don't even want to try, honestly. But it replenishes your glutathione... It like zaps a virus pretty quickly.

**Jerod Santo:** Okay.

**Adam Stacoviak:** It supports immune health, essentially.

**Jerod Santo:** Got you. So is this a shot you take? Is this food? Is it minerals?

**Adam Stacoviak:** It's versions of that. It's a pill, you know? Similar to maybe Magnesium might be, in terms of pill form. Like that size.

It's pretty big. But it zaps a cold. So yeah. Now you know. Reduce inflammation, zap your cold, support your immune health... NAC. Check it out.

**Dan Moore:** Awesome.

**Jerod Santo:** Also pronounced N-acetyl-cysteine.

**Adam Stacoviak:** There you go.

**Jerod Santo:** You didn't want to try it, but I tried it.

**Adam Stacoviak:** I didn't want to try it. Yeah, I was like "Nah..."

**Dan Moore:** Jerod's not afraid.

**Adam Stacoviak:** Too many letters... Not going there...

**Jerod Santo:** Nah, I just pronounce things all the time. Heck, on our last news episode I said it was 2024, so I'm not afraid to embarrass myself publicly.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** This is the problem with templates, you know? You build yourself a template, and then you use the template, and the template probably supports string interpolation or some sort of logic where you could have the current year... But I don't got time for that, so I just had it say 2024, and I reused my template, and forgot to change one thing.

**Adam Stacoviak:** Well, we're back in time.

**Jerod Santo:** It rolled off the tongue, too. It sounded really good, so I just rolled with it.

**Adam Stacoviak:** I bet it did. You're like "Yes, this sounds familiar."

**Jerod Santo:** Oh yeah, 2024.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Oh, anyways, Dan... You are here to talk auth. So not letters to new developers, but maybe letters for all developers out there. We have a fun conversation teed up, and you have some expertise in this area, right? Maybe tell everybody what you do on a day-to-day, what you're up to. I know authentication, authorization... I don't know what's all involved there, but give us a little bit of your context.

**Dan Moore:** Yeah. So I've been, for the last about four years, I've been working for an auth provider called Fusion Auth, and I've done a variety of roles there, and spent a lot of time talking to customers about how to implement auth, a lot of educational content... And when I say auth, it's authentication, authorization, and user management. There are some other aspects of the authentication or user lifecycle that we don't really focus on, like identity verification, or workforce-oriented stuff... We're much more focused on customer identity access management. So that's my expertise.

And I learned about OAuth, and SAML, and OIDC, and JOTS... Basically alphabet soup in terms of jargon. But I spent a lot of time decoding that and taking it -- rewriting it, or rewriting my understanding in such a way that developers would actually be able to apply it in their day-to-day life.

**Jerod Santo:** Auth is one of those things that is so interesting... We even use it as a base case for build versus buy decisions, because at its simplest, it's completely a build thing. It's a solved problem at its simplest case, right?

**Dan Moore:** Totally.

**Jerod Santo:** \[07:41\] But then the thing is, there's this sprawling concern that happens over time with it, where just the simple case isn't sufficient over the course of time, and so all these other things come in: SSO, MFA, more alphabet soup... And now you find yourself kind of reinventing lots of little different wheels in order to stay in the build camp on that particular thing. And this is back in the developer zeitgeist right now, because there's been some conversations around magic links, one-time pass codes or passwords, pass keys... Are passwords dead? We've got excited about pass keys, Adam, you and I, last year, speaking with the 1Password folks... Is that right?

**Adam Stacoviak:** It was.

**Jerod Santo:** Yes. And didn't actually roll them out for our site, but have been longtime magic links users, so I know all the drawbacks of magic links.

**Dan Moore:** Yeah. \[laughs\]

**Jerod Santo:** I've hit them all, and I was pretty excited when I implemented them back in 2016 for our website... And we have not that many people signing in, and technical users... And so it seemed to make sense. But still have hit all kinds of things that are just little --

**Dan Moore:** Sand in the gears, huh? Little frictions.

**Jerod Santo:** Yeah, just like "Aww...", you know? And so ultimately, we're all trying to either augment or replace password-based auth because of the security concern. It's just so prevalent, but...

**Dan Moore:** I actually want to ask you, back in 2016, was that the main reason, the main impetus for doing magic links, was security concerns?

**Jerod Santo:** Basically, it was like "I can't lose what I don't have."

**Dan Moore:** Sure.

**Jerod Santo:** And I don't have any reason to store your password if I can get away with it. I had realized, I had this little epiphany...

I think other people were starting to realize this as well, that the forgot password flow is what most people end up doing when they don't visit a website very often... And our kind of website is the one where you're not going to visit all the time. Like, you're going to come in, subscribe, unsubscribe, comment...

**Adam Stacoviak:** Once every couple of years, maybe.

**Jerod Santo:** Yeah, exactly. And so every time you come back, unless you live in password manager land - which, admittedly, a lot of our people do - you're doing the forgot password flow anyways. And so what if we just only did the forgot password flow? It's just as secure, only better, because now I don't have to have passwords in my database anywhere ever, and there's just nothing I can lose. And that was basically the reason. And I still like it for that reason, but yeah, there are all kinds of little, like you said, sands in the gears that you run into with magic links... The most of which for us has been delayed email. It's just like, even if you get the email right away, it's a little bit slower than a password manager.

**Dan Moore:** Enough time for people to be distracted, right? And like move away, go back to Hacker News, or listening to Changelog, or whatever they were doing before... And then they forget why they -- "Why I was on this site?"

**Adam Stacoviak:** It breaks the flow.

**Jerod Santo:** It does break the flow just slightly... But it really breaks the flow if that email isn't delivered immediately, and it's delayed two, three, five - sometimes, if things get circling up there in the ether and not landing - 15 minutes, 30 minutes... Now you're basically like "I can't sign into your website." We've had that issue over time, for sure.

**Dan Moore:** Yeah. It's interesting, because the bigger issue we've seen around magic links actually is corporate link checkers, and expiring the links... And we've gone to some pretty extensive lengths to try to fix that problem... But it's kind of the same kind of thing. You're doing something that's a little bit out of band, and you don't have control over that whole experience, whether it takes a while for the email to be delivered, or the email is being read by something else and expiring a one-time code, or something like that.

**Jerod Santo:** I actually hit that as well. What do you guys do about that?

**Dan Moore:** We require a post. So I think we do a JavaScript post of the... So you're taken to a page, and then the JavaScript on the page executes in posts, which is what actually logs you in.

**Jerod Santo:** Right.

**Dan Moore:** So those link checkers aren't smart enough to do that yet... And so that kind of means that when the user clicks, they're opening a browser and that browser's able to do that post.

**Jerod Santo:** \[12:00\] That's exactly how I handled it as well. I had, specifically, I think, Outlook, certain versions of Outlook, or maybe Live 365. It's a Microsoft product. It will pre-click on links for you in order to do malware checks, and blah, blah, blah, blah. And so they would use - just the git request would use that one-time password, and then you'd hit it yourself and it wouldn't work anymore, because it's been used. And I had enough people complain about that over the years. I mean, it's been nine years.

So we don't have that many Outlook users, but enough where like I don't want anybody to have a bad experience. And so every time, I'm like -- for a while, I was like "Please don't use crap software." No offense to anybody who uses it, but to the software itself, it's just not good email software. But you can only say that a couple of times, and then like the sixth, seventh time I'm like "I've got to solve this problem. It can't be that hard." And so it's like "Well, I guess I just require JavaScript." I just change that till you land on the page, and then the page itself does the post, and that's what gets you in. And that solved it, but... Again, one of those little wrinkles that you don't think about until it's deployed out there and people start to complain.

**Adam Stacoviak:** So you expire it after a bit then? You expire it after the first click? Is that the common case?

**Jerod Santo:** Well, it's a one-time magic link, and so once it gets used, you don't want it to still work.

**Dan Moore:** I mean, you could build in some kind of like slop factor, like let it happen two times or three times. But it is the entry point into your application, and there's definitely some worries around that, right?

**Jerod Santo:** Right...

**Dan Moore:** So we definitely -- ours is still one-time use, for sure.

**Adam Stacoviak:** That makes sense.

**Dan Moore:** But I mean, I think there's an interesting point in kind of what you were saying, Jerod, is like you as -- the authentication system is kind of unique among... Like, sometimes I think of an authentication system like a database, or a queue, or something else like that, where it's kind of part of an application, and it's foundational, but it's undifferentiated... And then at the same time, it is so user-facing, right? So unlike your database -- you can swap out a database behind Changelog if you wanted to. It sounds like it wouldn't be very much fun, but you could do it without ever affecting user experience. Whereas changing out your authentication system would definitely impact users. And because it's in the user flow, you really need to meet users where they are, right? Like you said, the first four or five times you're like "Hey, can you please use different software?" And after a while, you're like "Well, I really want you to log into my system, therefore I need to be the one to change." You need to adjust where the users are coming from.

**Jerod Santo:** Yeah, absolutely. It's just this balance between optimal security and usability, which is so hard to strike. And because everybody kind of wants to do it their own way... I mean, there's people who are like SSO for life, right? They're like "Just let me log in with my Google account." I'm actually the opposite. I don't want to use any of that junk.

**Adam Stacoviak:** Very much so, yeah.

**Jerod Santo:** Unless the service specifically connects to a thing. So like, if I'm going to use a piece of software that's going to use my GitHub accounts information in order to augment my GitHub experience, fine. I'm happy to log in with my GitHub. Cal.com, right? I'm going to sign in with my Google account, because that's where our calendar is. It has to have it anyways... But other than those things, I just want to enter my email address... And Adam, you're the same way.

**Adam Stacoviak:** Even so -- like, even with the GitHub, whenever you get to that second stage where it says "This is what it's accessing", I feel like that's just such a weird... Like, if you're listening at GitHub, that's a bad page. Like, it needs to -- it's always overwhelming and confusing. And I feel like I have no control over what I can and cannot share... Just to auth.

**Jerod Santo:** Right. It's nice that it's there, because you can stop and decide, versus it just going through...

**Adam Stacoviak:** For sure.

**Jerod Santo:** But I agree, if you could have checkboxes that you could uncheck... You know?

**Dan Moore:** Yeah. Not granular. Not granular at all.

**Jerod Santo:** You can see it, but you can't control it.

**Adam Stacoviak:** \[15:58\] It's overwhelming. All orgs, read/write... All this access... It feels very thick. Like Tailscale - I use Tailscale, and that uses GitHub for a good reason. I use GitHub as my -- I don't know what they call it, actually, what their terminology is, but... It's not built on my Google SSO, it's built on a GitHub SSO, so it's built on that auth... And I don't know how to describe it. The whole entire tailnet is built on my GitHub auth account, essentially.

**Jerod Santo:** Right.

**Adam Stacoviak:** So that makes sense. And giving it access to things might make sense. But at the same time, it's accessing zero repos... It's literally just my network, it's not GitHub related at all. And it's a little annoying, honestly, because now you have access to something else, that -- you know, it could be your code, it could be different things that matter to you and you've forgotten what you've given it access to. And it's like, why murky those waters? It's my repo place, it's where I do open source, it's where I do proprietary code, it's where these potentially sensitive items could be... It could be accidentally committing an API key, and then now I'm -- you know, that's terrible. Don't do that. But then also, whatever else I've connected to my GitHub account might somehow be able to access it too, if there's a flaw in the system.

**Jerod Santo:** Right.

**Dan Moore:** So Adam - sorry, I haven't used Tailscale myself personally; I've read about it. But when you're logging in with GitHub it's prompting you for a bunch of different permissions? It's not just saying "Hey, I just want this email address"?

**Adam Stacoviak:** Let me log out and see what happens, what it actually accesses... Because I just personally find that screen a little overwhelming. Every time I see it, I'm like "Okay, this is a lot of stuff." Okay, so now I'm actually on this page that says "Authorize Tailscale." And at the very top it says "Tailscale by Tailscale." This wants to access your AdamStack account.

It's existing accesses, Read org and team membership, and Read org projects. So I'm like "Okay, why do you need to have -- if you just want to auth me to Tailscale, why do you need to list my team memberships, my org projects? Why do you even need to know anything about my GitHub database, basically?"

**Dan Moore:** So honestly, I wouldn't blame GitHub for that, that's actually on Tailscale. Because Tailscale asks for permissions.

**Adam Stacoviak:** Alright, Tailscale, fix this.

**Dan Moore:** Yeah, yeah. Tailscale, come on, man...!

**Jerod Santo:** Come on, Tailscale... You don't need all that...

**Adam Stacoviak:** Access user email addresses, read-only. So if I have multiple email addresses in my GitHub account, it's like "Well, okay, maybe."

**Dan Moore:** Sure.

**Adam Stacoviak:** And then organization access. And it checks every single org. Every single org. And I can't uncheck it.

**Dan Moore:** So my feedback on that is --

**Adam Stacoviak:** That is a GitHub thing, though. That's a flow. That's common for everything. It's not just Tailscale. It's every time I go to some sort of GitHub auth, it's giving me organizational access that I can't revoke. And all I want to do is auth.

**Dan Moore:** Well, you're right, it's probably a combination. I haven't delved deeply into this, but...

**Adam Stacoviak:** It might be the GitHub API too, you know? That that's just how it works.

**Dan Moore:** It's like yeah, how coarse-grained does GitHub allow permissions to be asked for, and then what permissions is Tailscale asking for. And my guess is this happened -- this is probably a little bit like the Magic Link experience that Jerod was talking about, where it started out and Tailscale asked for very small amounts of data, and then there was a use case. And then they needed to ask for a little bit more. And there was another use case and they needed to ask for a little bit more... And then they can't differentiate between whether you're doing the simple use case, where all they need is the email and password -- or not your password, sorry; just your email... Or the complicated one. That's my guess on what happened, based on kind of what I've seen over the years. It's best of intentions, but GitHub having coarse-grained permissions makes it really tough to ask for just what they need.

**Jerod Santo:** \[19:40\] Right. And sometimes the other strategy - I can rationalize the other strategy, which is like, "I don't know, let's just ask for as much as we -- we might need it eventually anyways. Just ask for more. And that way we don't have to come back and re-ask later if we decide we need this thing..." And so, especially certain people who are data miners, they're like "We may need -- just collect all the data. We may need it in the future." That's easy to sell that in a meeting, I think.

**Dan Moore:** Totally.

**Adam Stacoviak:** For sure. And ask for more than you need, come back later, never...

**Jerod Santo:** Right.

**Adam Stacoviak:** I always felt like GitHub Auth was -- anything I authorized with GitHub, it always felt like whatever was being asked of the authorization process was more than I thought was necessary in the authorization process. In almost every case.

**Jerod Santo:** And Adam, your reason of disliking it is actually, I guess, deeper than mine. I'm a simpleton. Mine was just like, I don't want to have to go to every website and think "Which provider did I create an account with?" Because you end up with two accounts on different places, because you try this, then you try your email, and you're like "Oh, oh..." And so I'm just like, if I just use email everywhere, then I never have this problem again.

**Adam Stacoviak:** Exactly. That's my basic premise is that. But Tailscale requires you to use an auth provider or some sort of SSO, because it hinges your tailnet upon that username and how you authenticate it. So in that case, that's where I had to. So I'm by force of SSO with GitHub, or like you had said with cal.com, for example; that totally makes sense. I'm cool with it there. In almost every case, my default is I'm going to email authenticate and password authenticate by default, because that's what makes the most sense to me, as a user. Because I don't want to ever think "How did I auth to this?"

And then I go back to the thing and I'm like -- I think this actually happened with Neon when we first set up Neon. Their original flow, I believe, only had SSO. And then when I went back again, it had email. I'm like "Okay, my default is email, because that's how I do it", and I couldn't log in. I'm like "Well, what happened to my Neon account here?" I'm like "Okay, now I can't get in." Oh, yeah, I must have auth with GitHub, because that's how it originally was six months ago when they first rolled that off.

But I'm with you. I think that you ask for too much, the flow is weird... I prefer just to know my email. If it's a work account, it's a work email. If it's personal, it's a personal email. And I keep those worlds very -- there's a lot of people who have one email inbox for all their life, and I'm like "How do you do that?" I may not be an inbox zero guy, but I'm definitely a segregated and separated inbox based upon disciplines in life, or categories in life.

**Jerod Santo:** Right. I separate the accounts, but I do read all the emails together. So I'm kind of on the fence there. But I'm also inbox zero, so they're relatively taken care of, unless I'm actually behind. Dan, what is your opinion on people saying, "Well, just knock it off with all this fancy magic links, one-time passcodes... Just email/password. Forget the SSOs. If we all just did email password, like the old days, life would be better." What's your opinion on that?

**Dan Moore:** I would love if we would do that if everyone was using a password manager. And I think depending on your audience, that could be a viable path. But for a lot of customer-facing organizations or applications that's just not reality. My wife is a relatively smart person, has more degrees than I do, is not super-technical and gets super-frustrated with her password manager.

And I have one that I've been using for years that I love, that is fantastic, but I would never wish it on anybody else, because it's kind of -- it's old school. So...

**Adam Stacoviak:** Really?

**Jerod Santo:** What are you using?

**Dan Moore:** It's called a PasswordSafe. Mark Schn -- who's the Schneier guy? Bruce Schneier. He recommends it, and it's open source, and just kind of super-dumb... But it's not like integrated with any external systems. Because that's the other worry that I have with password managers like 1Password or LastPass; what we've seen is they are super-valuable targets, because they have everything.

**Jerod Santo:** \[24:08\] For sure.

**Dan Moore:** I think you should always offer username and password as an option, because I think you're going to have some subset of people who are going to be more comfortable with that... But I don't think that it should be the only solution.

**Adam Stacoviak:** I think it's the email of the internet, in so far as that good luck erasing the protocol email from just the way humans do internet.

**Dan Moore:** Totally.

**Adam Stacoviak:** I say humans because we now have non-humans doing internet...

**Jerod Santo:** Who are also good at email.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** They're getting better at email. So you're saying passwords, not just -- they aren't going anywhere, but you think they shouldn't go anywhere.

**Dan Moore:** I mean, here's the nice thing about a password... The strengths of the password and the weaknesses of the password are very similar. One is that it is something that can be shared really easily, right? And that can be shared with family or friends, or it can also be discovered by an attacker. I think you need to, as someone holding passwords, any of the systems, you need to make sure you take care of passwords. You need to make sure that you hash them appropriately. You make them hard enough to use for an attacker that you can avoid credential stuffing attacks, but easy enough for users to use.

And I think just the reason is that it's the lowest common denominator. I have definitely liked Tailscale, Adam, but this was a different company that all they offered was social login, and that is frustrating to a certain class of people, to a certain set of people who don't want to necessarily tie things to third-party providers. Or maybe they don't want you to know their particular email; they want to use a username. You can't use magic links with username-based solutions. And for certain kind of sets of folks, or even class of applications - games are a perfect example. Games don't need to know your real identity. That's a dumb thing.

So I don't think they're going away, I think that there are great solutions that you should offer, and each solution you offer kind of increases your marginal market size of people who are willing to log in. And that includes what we talked about, magic links, we talked about social login... I think we're going to talk a little bit about pass keys... And it's a yes/and, rather than a "We're going to move entirely from this solution to that solution."

**Adam Stacoviak:** But it certainly bolster the, I would say the new trend over the last, I don't know - is it new if it's past five years? I don't think so, but it's newer... I would say over the last five years you've got like WorkOS, you've got obviously FusionAuth, you've got Auth0... And I'm sure there's at least one other major, major brand that I'm totally forgetting right now.

**Jerod Santo:** Dan probably knows.

**Dan Moore:** Oh, I can give you a list. I mean, Keycloak, Clerk, Zitadel, Ory...

**Adam Stacoviak:** Gotcha.

**Dan Moore:** I mean, there's -- PropelAuth... There's a ton of these folks out there doing that.

**Adam Stacoviak:** So many.

**Dan Moore:** Totally.

**Adam Stacoviak:** There's now a cottage industry of startups that are well-funded, probably even well ARR'd, and doing well...

**Jerod Santo:** Well, even the IPO. Didn't Auth0 -- or Okta bought Auth0...

**Dan Moore:** Okta bought Auth0 for six and a half billion dollars.

**Jerod Santo:** So that's past the startup phase...

**Dan Moore:** And it was like 20x their ARR.

**Jerod Santo:** Right.

**Dan Moore:** Yeah.

**Jerod Santo:** So yeah, I mean, from startup to scaled up.

**Adam Stacoviak:** Yes.

**Dan Moore:** Totally.

**Adam Stacoviak:** Point is, is that now it's so complex to do auth that we now need to offload it to a paid service in order to even get it right. Or to avoid from having our developers waste time building something that's been built and can be serviceable or turn into a service, and then it makes more sense to buy it versus build it. And mainly it's not because they couldn't build it, it's like "Why would you build it? And then the ongoing security concerns around auth now get offloaded, handled by a third party, hopefully, in quotes, trusted, or well trusted...

**Dan Moore:** Sure.

**Adam Stacoviak:** \[28:15\] And now we've got different places you can get attacked. Thankfully, those players have done pretty well... I don't know. It just seems like now we've got such a complicated situation.

**Jerod Santo:** We also end up in the same situation with 1Password and LastPass, where now these providers become huge targets.

Of course, they probably have their security teams staffed up, because if I can hack into Okta, or FusionAuth, or whatever, it's not just one company's stuff I'm gonna get. It's like a smorgasbord.

**Dan Moore:** Well, actually I wanna push back on that a little bit, because -- and this is one of our kind of unique selling propositions, which is the only reason I interrupt Adam... Is that with FusionAuth you're actually getting dedicated database and compute resources. So it's totally separate. It's not a multi-tenant solution inside there.

**Jerod Santo:** How separate is it? Like different locations, or...?

**Dan Moore:** It depends. But we can deploy to any of the AWS regions. And you can run it yourself too, right? So you can run it in your own data center. But the idea there is that if you escape a competitor who has a multi-tenant SaaS, depending on their security posture, you may be able to kind of access other users' systems. But you can't inside FusionAuth, because it's separated. It's a separate database.

**Jerod Santo:** That's smart.

**Dan Moore:** But I do want to talk to -- I mean, Adam was talking about the complexity of it... To me it feels like it's the same evolution as email. It used to be you were sending emails, you'd stand up like Postfix, or - I don't even remember those... SendMail. And then SendGrid came along, and other mail providers came along, and email deliverability became a more complex issue, and so it became something that was outsourceable, and a lot of people have made a lot of money doing that, and a lot of apps have been built on top of it... And it's a trade-off. And if you are super bare bones and you're a Linux gearhead, and you know how to set up SendMail, you can still get by by doing that. But the vast majority of the world has changed, and people have just acknowledged that it's not worth it. And I think auth is kind of undergoing that transition, too.

**Jerod Santo:** So I agree with that comparison, Dan. Having done both, I can tell you that rolling your own auth is considerably easier than operating a Postfix server with SpamAssassin and these other things on the public internet. Also, there's a step in between. You have "I build my own auth system with my own first party code", and then you have auth providers on the other side. And in the middle, you have open source solutions, which - many frameworks tackle this head on, because it's hugely valuable, and can have pooled resources there. So there's a nice middle ground with auth, whereas with email you're kind of doing it yourself or doing it with somebody else's.

**Dan Moore:** Fair enough.

**Break**: \[31:13\]

**Jerod Santo:** So let's go back to MagicLinks and talk about OTP, because this is kind of -- to me, it seems like maybe an evolution of MagicLinks and an improvement. So the idea here is that I'm still going to send you something that you can then confirm that you have, but instead of just making it a link, which in our case it's like a long... It's not like an md5sum, it's like a hash value that you would not be able to just rattle off; it's shorter, and time-based, and usually it's six numbers that are provided... And so the one-time passcode is sent to the email, or whatever way you can send them. I'm sure you can push notify it, or whatever. And there's a click provided, so you can still just click on it and just embed it in the URL in that case... Or you can just read these six characters and type it back out... And that really solves one particular bummer about MagicLinks, is the shareability aspect, and the switching contexts aspect, which a lot of people run into. It's like "Hey, I'm on my phone. I sent myself a MagicLink, and I don't have that email app on my phone." There's all these different weird things. Or it opens in an app-specific browser inside of my email client, and so it logs me in inside of Gmail app, but I go back to my other app and I'm not signed in... Well, with these one-time passcodes, you can solve that by just either copy-pasting the six digits, or just remembering them for 10 seconds and typing them on the other side. So that seems like a nice evolution.

**Adam Stacoviak:** It's like a constantly rotated password really, right? The OTP is constantly -- it's like you set the password every single time and you email it to them, and it's time-based. So it's like, that is a cool method. I like that method, it doesn't bother me.

**Jerod Santo:** You still have the trappings of it getting to them in an abnormal way, versus stored there in their password manager, or remembered in their brain. Like, they have to fetch it every single time. But at least you're not stuck to it, like "It has to be a--"

**Adam Stacoviak:** And if you're dyslexic like I am sometimes... I read it backwards, I will misremember... I will literally read it, and have to say "One, six, zero, five, eight, zero", whatever... And I feel like that's also an attack vector, because maybe somebody is sitting next to me and I'm lightly whispering this password that is only on my screen... "One, six, zero, five, eight, zero..."

I don't know... I always feel concerned about that. If I'm alone, it's just my pup with me, my dog, then I'm cool with it. But if I'm at Starbucks or a coffee shop, then you could be trying to get me.

**Dan Moore:** Yeah, I mean, OTPs are a great solution, for sure. They still share some of the issue with magic links, like in terms of the deliverability timeframe, and a little bit of discontinuity there... But they definitely step around a lot of the other complexities.

**Jerod Santo:** Yeah.

**Dan Moore:** Whether it's browser-based stuff, or the link checkers or whatnot.

**Jerod Santo:** Yeah, absolutely. So you still run into that stuff. Passkeys, however - you do not have to send a passkey to somebody every time they have to sign in, because it's a pass and hold, right? You get the passkey, you hold the passkey, and as long as you have the passkey, you're good to go. In fact, they are integrated, to a certain extent, inside of autofills on phones, whether you're on Android or iOS, if you're using the right first party passkey stuff... I'm not sure we're gonna get into that, because this is where passkeys get weird. It's like "Who's got the passkey?" But as long as it's in there... Like on iOS, for instance, if it's stored inside your Apple Passwords app, it will autofill, or face ID, or touch ID, just like your password would. And so it's instant once you have it there. But it's also complicated. It's more complicated than that, isn't it, Dan?

**Dan Moore:** Yeah, I mean, there's definitely -- there's a couple of kind of things to think about with passkeys. One is how you set them up, first of all. The registration process is a little bit weird, and can kind of differ... And depending on the passkey, it might be tied to a physical device, it might be tied to an account. If you're worried about people correlating things across like OAuth, or OIDC, the same thing is happening with passkeys that are shared. Or if it's device-specific, then now you're kind of tied to the device. And then kind of -- I think the user experience for actually logging in is pretty good. It does -- you don't have as much control as the thing that you're logging into; the app you're logging into doesn't have as much control over the look and feel, or the messaging, or anything like that... And that can be problematic, too.

\[38:05\] But the beautiful thing about passkeys - they are locked down in two ways, right? They're locked down to the device or the system that holds the private key, that is actually kind of generating the challenge, and like solving the -- basically... I can walk through kind of how passkeys work if that'd be helpful... But anyway, there is a private key that is held someplace, and that is what's used to kind of authenticate you. And they're also locked down to the domain. They're associated to a domain, which is really, really great too, because it removes all kinds of phishing problems. Because you're trusting the computer to recognize the domain, rather than the user, looking at the UX or looking at the URL bar.

And computers are much better at comparing character by character, and making sure that things are all correct. So there's two kind of security benefits for passkeys, for sure.

**Jerod Santo:** And yet people don't seem to like them, for some reason. So I have had nothing but positive experience with passkeys as an end user. And I should say that my stack is basically Apple stack, on iOS and macOS. And I use the passwords -- it's now its own app. It used to be Keychain, and inside the settings of the iOS stuff... But it will handle both your passwords and your passkeys for your domains. And it will even allow you now - I think this is new, last year - to share those with your family, which has been, in my experience, seamless as well. I can share a password, I can share a passkey, I can create little subgroups in my family, just my wife and I, or my kids and us, and I can share them there... And I have to say, I've been just tickled with how well that's gone. But I think I'm very rare in this, because a lot of people are just not happy with the way things are going. And Adam, you're not sold on passkeys... So what's been your experience?

**Adam Stacoviak:** Yeah, did you see my title change?

**Jerod Santo:** Yeah, that's why I said -- your title is "Not sold on passkeys", so I knew you weren't.

**Adam Stacoviak:** I think it's mainly -- it's less about the protocol and what the attempt is. It's more the seemingly rogue implementation every single time I experience a passkey scenario. I also find that services are defaulting to passkeys, and it bothers me. When I want to be an email/password person, it constantly just slaps me in the face like "Where's your passkey?" And I'm like "Nah, man. I'm doing email and password, okay?" And it just seems like it always wants to default to this thing. Adobe does it... I sign into the document cloud a lot for different agreements, and stuff like that, so I'm in there doing stuff frequently... And I like to log into the actual online service, and so I'm logged into Adobe's web services frequently, and that's their flow.

And I'm cool with passkeys. I actually like them, except for I think the flow and the way the UX is still implemented seems to be just not the same across the board, whereas email password is pretty much the same across the board. I feel like that's the holdback for me. And whenever I don't want to be passkey-first, that I want to do email/password, just anything else - that service is sort of like force-feeding me passkeys and I'm like "Nah, man. Email/password, okay?"

Now, I do use 1Password though, to just identify my stack. So unlike Jerod - Apple, simple, free, with-it kind of thing...

And I don't think -- that's not his only reasoning for using it. I know Jerod well enough. He likes to keep his stack simple, and not have to have other extra services if he doesn't want to, kind of thing. And I think that's cool. That's how they use it, and that's cool.

\[41:59\] I use 1Password for a lot more than passwords. I've got secure notes in there, I've got -- I mean, I don't want to tell everybody what is my attack vector. It's a lot, okay? It would be really bad. It would be really bad if 1Password was not a good long-term security solution and they were attacked on my behalf. I use it for more than passwords.

**Dan Moore:** So Adam, I'd love to probe that a little bit ,more because to me some of this just may be because of the growing pains of passkeys. Usernames and passwords have been around for a long, long time, and even now there's still some wrinkles -- sometimes people will ask for your username first, and that's so they can direct you to the right identity provider if you're...

**Adam Stacoviak:** Sure

**Dan Moore:** ...whatnot. But passkeys, it feels like it -- they were just codified in like 2019, right? And so that is not new, but it's still being kind of rolled out. So you think some of us just can get shaken out in terms of like the right UX, or...?

**Adam Stacoviak:** I sure hope so. I'm long on what it can offer, but I think that \[unintelligible 00:43:07.25\] to define some of the other user flows that have bugged me, and I think I'm a pretty patient user... Because I get it. I'm in this space, I'm not your typical user, where I understand where the technology is going, I understand the benefits of passkeys, I understand the implementation for the most part... And so I get it. But what ends up happening is because it's potentially a newer, potentially more secure way to authenticate with a service, they're injecting it, where normally it would just be email password, and I would not have any other interruptions in my flows with authenticating. And so now after I've authenticated with username and password, they're like "Hey, do you want to store a passkey?" No, I just want to go through the door and shop.

**Dan Moore:** "I want to get what I came here for", right?

**Adam Stacoviak:** Exactly. Don't ask me -- and don't be secretive about it and say "Do you want to authorize next time with your fingerprint, or your face ID?" They hide it or they masquerade it as this not-passkey.

**Jerod Santo:** For me that's not masquerading, that's actually promoting it in a way that's of a benefit to you. Because wouldn't you rather just face-ID in than username and password?

**Adam Stacoviak:** I don't think so, no. I'm explicit. It's back to that, potentially, with -- and maybe this is where my psychology is with this, or the way I'm thinking of it is... Is because I don't want to think about "How did I authenticate with the service?" And maybe next time it's just so automated, because of the way 1Password works, the way Apple Passwords works maybe I won't care... But something in me says "No, Adam, the way you authenticate is this way, and you've got to keep the one way." Versus like sprinkle your SSOs around, and then I'll see your potential email and passwords. So I'm like "Nah, I'll just keep it the way I want to keep it, and stop bothering me about passkeys.

I will say, to caveat all this, is just to give fodder for a conversation, because I truly am enjoying it insofar as that I've enabled passkeys usage on my Adobe login. The flow is kind of weird though, because I will authenticate with the passkey, but there's not a good feedback loop. You can't see a spinner... You have to know it's going to authenticate, because if you click that, you basically wait two and a half seconds. In my case, it's about two and a half seconds. Then I'm in. It's not a lot of user experience visually to say "The passkey is being exchanged. Something's happening here." And so I do authenticate that way, and it is pretty magical, that I just click one link, or just one interaction essentially, and I'm in. But it's about three-ish seconds later, roughly.

**Dan Moore:** I did want to say, I don't think it's just for security. That's not the only reason that new orgs or that Passkeys are getting kind of pushed. I think it's also a user -- they've done studies that it just gets you into the app faster. There was something - I'll share the link, but this person referenced a Microsoft study that said that the average time to log in went from 69 seconds with username and password/MFA to eight seconds with passkeys. And so if you can get someone into Adobe quicker, especially someone who doesn't have your depth of experience, Adam, and doesn't really understand kind of the big thing, and they just want to get to Adobe, and you can decrease it by 10X, that's a big win for everybody.

**Adam Stacoviak:** \[46:34\] I don't know, I feel like my email/password logins have been pretty fast. I will say that 2FA, MFA scenarios slow it down a little bit... Adding that into -- so one thing I like about 1Password is that it allows you to 2FA, OTP, MFA inside of your 1Password. So you can actually let 1Password do that coding, I suppose; getting those codes back and forth. And it automates it in its autofill process too, so it's pretty quick, to my knowledge. There's times when it's slower.

The other cool thing I like about that flow - not that it's better than Passkeys. I feel like you're going to always have every way to log in. That's why I feel like FusionAuth has such a long game here... Because, I mean, you're never not going to have one of these other scenarios. There probably isn't a silver bullet, because you always have all the ways, essentially.

But if you have a shared 1Password record, let's just say... So if you have a multi-user 1Password org or an account, and you have a password or an authentication that's shared with somebody else - it could be to a shared email even, too. So email/password is now shared between two users. But that 2FA, MFA, OTP code that manifests on a cycle is inside of 1Password, and accessible to all the users of 1Password. This is probably the same with Bitwarden and others, too. I'm sure it's a common user experience. But the cool thing is that even with that multi-factor authentication scenario, you have this shared truth, this shared source of truth that allows you to authenticate, even with these other security measures like OTPs, 2FA, MFA.

**Dan Moore:** I will say that I totally understand the user experience benefits of that. It scares the crap out of me. Because the whole point of MFA is that you have a separate -- and my guess is 1Password kind of segregates that stuff inside their own system, so that an attacker coming in and getting access to the passwords would have a harder time getting access to the TOTPs...

**Adam Stacoviak:** I have a really hard time getting access to my own 1Password, okay? To add 1Password onto a new device, it's not easy. It actually makes you think quite a bit. It goes against everything Steve Krug said way, way, way back in the day with user experiences, like "Don't make me think." No, they're making you think. And I think it's by design. Like, it's really hard to authenticate a new device... And sometimes even into itself. Like, the password itself can be very long. It can obviously be -- if you're on a new Mac kind of thing you can do your Touch ID into it, which I love... I mean, I think just Touch ID, authentication, 1Password to me is like the way. I mean, every Linux user, bow down to the way. Maybe you could do that on Windows and Linux, but I just experienced it again today and I'm like "This is the way." Everyone else has just lost in comparison to macOS's ability to do this.

**Dan Moore:** Again, just to push on this a little bit... It doesn't worry you at all that this thing that is supposed to be a separate factor is all wrapped up in one place?

**Adam Stacoviak:** Let's see... How worried am I on this...? Do you want to do a scale of 1 to 10?

**Dan Moore:** Well, and it obviously depends on your account. There are probably accounts that you don't care about. But let's say your bank account; how much does that worry you on a scale, where 10 is like "I'd better go change this right now.

My hair is on fire", and zero is like "I trust. Everything's fine."

**Adam Stacoviak:** \[50:05\] Well, okay... Now that you've said this - thank you very much - I guess my concern is elevated... And I think it goes back to the level of trust that I give to 1Password, or whatever supplants it in the future, if that's ever a case. I think it concerns me in this conversation that it's true that I have a large footprint, a large attack vector in one service. That being said, I've had many conversations with the people behind 1Password, and even a trusted security professional that's a close friend of ours love their protocols. I'm speaking of Feross, Jerod, back in the day when he was doing Wormhole and all that stuff, he was like really praising their security measures.

That being said, obviously anything is attackable and you can get past it... So I think I've put a lot of faith in 1Password security measures, really, and I just hope that in the future my bet on that security measure remains valid and true. And if they ever get attacked ad nauseam, I guess I'm just screwed. I guess at that point -- I'm not that worried about it, honestly. So five, maybe. Five.

**Dan Moore:** Okay. And I just want a disclaimer, I don't know anything about 1Password. I'm not attacking them in general. It's like the general principle --

**Adam Stacoviak:** I think we should. I think they should be scrutinized. I think we should hold them. No, I do. I really do. I think they actually -- I think they welcome it. Because if you're in security and you are that kind of attack vector, you should 100% desire scrutiny. Not because you're scrutinizable, because you should be; you're a security place with so much wealth of knowledge on people. You should be scrutinized. And they should welcome it, in my opinion.

**Jerod Santo:** Well, I'm wondering what a good multi-factor auth segregation would look like in terms of you're trying to sign into your bank. You're on your phone. What could your bank do that would be better than having a password and an OTP code in a singular password manager? Would it be multiple password managers? What would that look like?

**Dan Moore:** Yeah, I mean, I think that it does depend. I've actually written a blog post about this, about the different kinds of MFA for customers. Again, employees are a different world, because you can force them to do all kinds of stuff, and you can spend money on it...

**Jerod Santo:** Right. "Carry this YubiKey around."

**Dan Moore:** Totally, totally.

**Jerod Santo:** Yeah.

**Dan Moore:** But for customers, I think an important thing is that it is going to at least a different piece of software. So using 1Password \[unintelligible 00:52:45.14\] password manager, and then using a different software authenticator app like Google Authenticator, Authy... There's some open source ones out there... Even sending SMS. I know SMS is problematic in some ways, because it's attackable in certain circumstances, for high value accounts... But it's still landing in a different place on the phone. Email address, one thing that I wish everybody who allowed email as MFA would do is have the multiple email addresses, and have those email addresses not be tied to the email address you use to log in. So I can set up, Dan \[at\] fusionauth.io is my login identifier, and then dan \[at\] example.com is my MFA.

And again, you're just separating things out, and you're not -- you know, every step you take to do this makes things just a little bit harder for attackers. And so that's the whole goal. It's not to -- if there's a state level attacker out there, hi. Anyone who's listening from a state level actor. They can probably get access to my accounts, because they have those resources. But I'm just trying to make it difficult enough that normal attackers move on.

**Jerod Santo:** \[53:59\] Yeah, that makes total sense. I think having multiple pieces of software... But unless you are an employer, that's really on the end user, isn't it? Like, if you're a bank... I guess if you do SMS, you're kind of forcing them into their SMS app, or something like that. Whereas with a passkey -- I mean, really, that might be a downfall of a password plus passkey MFA, because now they both can be stored in the exact same place. And if you have your OTP codes in there... Like, how could you as the bank, not with employees, but with end users, kind of guarantee them the best chance of having that segregation? Would it be SMS, which like you said, kind of has some problems with security?

**Dan Moore:** I mean, I assume SMS or email. Anything that's deliverable is probably going to be outside of your app. We talked about the tension around the friction around login method, and that same thing is true with MFA. So there's always a tension between making things as easy for Adam to log in as possible... Or Adam, to be honest with you, taking control of his own destiny and using tools out there like 1Password or Bitwardener etc.

So yeah, you definitely can help foster things by using deliverable methods. That's really the only way you can force that. And honestly, I don't know if 1Password has this or anybody else has this, but it wouldn't surprise me if there was a Gmail plugin that would go and look in your Gmail and pull out the code, that Adam could probably install as an extension to 1Password, and then he's just kind of circumvented that whole thing again.

**Jerod Santo:** Right.

**Dan Moore:** And he's the one, by the way, paying the bank, right? He's the bank's customer, so you can't push them too far. Education is kind of the canonical answer to this. You say "We really suggest that you take these steps to secure your accounts." And if someone wants to ignore all the pieces of advice and they're still paying you money, that's a really hard question to solve.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, you can enforce it with like weird passwords, length, which I think is always good and bad... I've experienced where I'm like "Okay--" For example my Traeger smoker, I can put it on my Wi-Fi and there's an app that lets me control it from far away. Well, apparently it can't do a Wi-Fi password that's longer than 30 characters. And so obviously, my Wi-Fi password is probably like at least 32. I think it might be 64, honestly. It's kind of crazy. I don't give it out... I will hand-type it, and my wife hates it. It's not 64 characters, but it's probably 32. It's a mess. I'm not saying it's the best solution ever, but my Traeger will not do it. So it enforces this limit there. That's not actually a password, it's like acceptance of a password.

But there's other scenarios where you try to redo your password or something like that, and then when you go into that flow, it yells at you. Oh, not only did you not have this special character, and the uppercase and lowercase and whatever, you've got to meet these criteria. And some of them are just like "Wow--" They don't tell you the UX of that flow is kind of strange.

**Jerod Santo:** Right. Until you're done, and they're like "Nope, that one doesn't work."

**Dan Moore:** I mean, NIST actually recommend -- they have the latest digital identity guidelines, and they actually recommend that you don't enforce that complexity, because it's frustrating to end users, and they end up picking something that may not be that complex. Like, they'll just add like the one exclamation point at the end of a normal word, or something like that.

**Jerod Santo:** \[57:57\] Yeah. I think minimum length is pretty much the only constraint you should have. Like, it can't be less than eight, or whatever it is. And then anything else, as long as you want, as crazy as you want... But we have to have a minimum amount.

**Dan Moore:** And check the corpus, right? There's a bunch of corpuses passwords out there, and check that it's not in there. And other than that, yeah, go crazy.

**Break**: \[58:23\]

**Adam Stacoviak:** So here's a -- I'm not sure this is a hot take, but I would say this is a take. Let's just say this is a lukewarm take. I feel like password managers, or some sort of password management - and maybe Apple solved this, to some degree - is the new SSL, in the fact that we had LetsEncrypt happen more than a decade ago, and now a large part of the internet is now encrypted because of all their efforts with LetsEncrypt.

I feel like passwords are so crucial, and there's only so many more users of software... And you go and find any given person that is just accessing web services, in normal humanity, just normal life - 50, 100 services or more, right? Like, it's just so many. And the fact that I'm surprised that 1Password doesn't have a free tier, because you would think that would be a phenomenal attractor. And the fact that Apple has already done it, in replicating most of the goodness of password management... Not so much other things, like identity, and SSH keys you could put in 1Password; lots of cool stuff. But I feel like password managers or password management is the new SSL. And the fact that we just have to have the best, everybody uses it, free-ish way, or a freely accessible way to so many people... Because there's so many people who just like literally write down their passwords, or have the same exact password across every possible service ever. And I won't name any names, because I know a few.

**Dan Moore:** \[01:02:14.16\] I'm torn. I want that world. I want that world. I'm not sure we're there, because LetsEncrypt, the big lever there was Chrome, and the scary warning messages in the URL bar, and things like that. And I don't know if we have -- I mean, maybe you have that with the operating system vendors... So maybe that's the lever. But it feels like we're not there yet. But yeah, I would love a place. I'd love a world -- and honestly, it's interesting to me, because the more we talk about this conversation... Password managers and passkeys are both kind of two sides of the same coin, or they're two approaches to the same problem, that both believe that computers are better than people at keeping track of verifiers of identity. And passkeys do it in a way that's a little bit more opaque, and not maybe as compatible, but is a little bit stronger, because it's private/public key encryption. Whereas password managers are more designed to like fit in with the world we currently live in and have all these nice add-ons that you mentioned, Adam. But I just don't \[unintelligible 01:03:28.18\]

**Adam Stacoviak:** The basics, man. Just password management. It would be great. It doesn't have to be the OTP, 2FA kind of integration that 1Password... Just let the world have access to what I would -- maybe y'all can even agree with this: email/password login is probably not gonna go anywhere. Except for on Changelog.com. It's still there, in a way. You still have email in the flow, you've got this magic link flow... And so I don't ever concern myself with Changelog login for myself with that, because I don't need to store it. There's nothing to store. But insofar that so many services out there never get rid of it, just having basic email password, secure ways to not have the same password across all the different ways... I feel like the world needs a version of that. And it's totally - maybe to Apple's credit, it's an operating system level potentially concern, or leadership concern, in the fact that they've done seemingly the impossible, which is give it to... I mean, that's free, right, Jerod? You're not paying for that.

**Jerod Santo:** Well, that's what I was gonna say, because I feel like between iOS and Android, I feel like that's kind of a solved problem, right? Because Android has a built-in password manager, and I'm sure there's places you can go to to get better ones... And iOS has built-in password management, and it has been there for a couple of years now... I don't know what Windows does, because I haven't used Windows in this new millennia, but I assume they've got password management built into Windows, don't they? Let's Google that real quick while you guys talk.

**Adam Stacoviak:** I don't believe there's a free one in Windows. What I can tell you is the user exprience -- Dan, are you a Windows user?

**Dan Moore:** Not currently. I was until a couple years ago.

**Adam Stacoviak:** Until a couple years ago. So I recently installed Windows 11 as an example. So I've been exploring behind the scenes this idea of a creator PC. I like to build machines, but then the operating system I'm gonna put on there and do all this work is Windows. And that's just like the sadness of my life. I would never want to do that. And I know that because I literally went down the road, I'm like "Hey, it's been a decade or more since I've even played with Windows", aside from somebody saying, "Hey, you're in IT. Can you help me with this problem?" I'm like "Sure, I'll look at your Windows." I have no idea what I'm even like clicking on here...

**Dan Moore:** \[laughs\] IT...

**Adam Stacoviak:** Yeah, right?

**Dan Moore:** I love it.

**Adam Stacoviak:** \[01:05:54.12\] And I installed Windows, and I'm just so sad for Microsoft, that they can't get that right. They have the largest installable base of a computer user on the planet. And that's their best effort. It's just -- I'm just sad for them. That's just -- it's a mess. They installed so many softwares that are just not necessary, and it's just disgusting. Maybe it's their fault, maybe it's not their fault. I feel like they can solve the problem; they're not solving the problem. But they're not.

I don't believe there's a default, free password manager in Windows. I googled it... PCMag disagrees. They say that there's other ones. So they haven't selected like this default installed for Windows, but... You know, somebody's got to do this, and who's going to lead that effort? It can't be 1Password, because they're of service. They're a software company trying to make money. I mean, I think giving away 1Password for free is not very smart... Although it could be the Xerox of 1Password, or I guess the Xerox of password managers, is that they could give it away for free to everybody to a certain limit, and attract a lot of people. And they're already on all the platforms, so maybe that's a good way for them... But there is no LetsEncrypt for password managers out there where it's just free to everyone and accessible.

**Dan Moore:** I would also say, I think that you kind of hit, or you alluded to one of the issues with this... Even if it gets installed in Apple's operating systems, and it's installed in Microsoft operating systems, and installed in Android, you still have some people who use an iPhone and have to use a Windows PC. And so you have this cross operating system solution that Chrome - again, the big lever that moved LetsEncrypt - that was cross-platform, and it had significant market share. Maybe there's some kind of consortium who could help with that, I don't know. Again, I'd love to live in that world.

**Jerod Santo:** Yeah. There's an article from The Verge in 2020 about Microsoft's new password manager that works across Edge, Chrome and mobile devices, called Microsoft Authenticator. And so this was coming out then. This is an app that you would install on your iOS or Android device and you would cross that chasm, basically, syncing with your Windows-based Edge browser. I think it's actually not Windows-level password management, I think it's inside of Edge, which seems like a weird silo. And that could be wrong, that could be outdated... But there are people obviously trying to tackle that particular cross-platform thing, at least from the Microsoft side. I don't think Apple has any interest in tackling that, as they've historically had no interest in those kind of things... Which is a shame. And obviously -- and Google with Chrome...

I don't know, I think that there are options for everybody, and I think that there are probably free options for everybody. It's different than LetsEncrypt because it's more of an end user concern than it is a server operator concern. All of us nerds got our free certs and upgraded our stuff to HTTPS, and they made that palatable and free, and they made the case for why you should do it and that worked... But when we talk about end users around the world, varying levels of technical expertise, it's just a much taller order. But I do think that Apple and Android have - not solved it, but provided something, a baseline for a lot of people.

**Adam Stacoviak:** I mean, if you wanna call Microsoft Authenticator, I'm looking at it. Baseline... It is a line beneath the base, in my opinion.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I don't think that --

**Jerod Santo:** You're saying it's bad?

**Adam Stacoviak:** I mean, given their prowess on the compute platform across the globe, Apple is the best effort. And I would not consider that an effort.

**Jerod Santo:** I don't think Microsoft is investing in Windows like they used to. I think they're investing in Azure, and cloud, and AI, and all these other things that have up and to the right opportunities. And Windows is just kind of like last millennia's thing. Like, it's just there.

**Adam Stacoviak:** I don't know how they get away with that.

**Dan Moore:** \[01:10:02.03\] Large installed base... What are you going to do? You wrote an app, you have an old app that you're not going to rewrite \[unintelligible 01:10:07.13\]

**Jerod Santo:** Entrenched.

**Dan Moore:** Yeah.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, so you have these services like Azure, and then those services have what? Users. What are those users running?

**Jerod Santo:** iOS or Android? \[laughs\]

**Adam Stacoviak:** I think a lot of them are running Windows.

**Jerod Santo:** I don't think so. What do you mean? What kind of users?

**Adam Stacoviak:** I mean, okay, you talk to a gaming PC person, a gamer - large, huge community. Gamers are a huge community.

**Jerod Santo:** Steam is on Linux now, man. Let's go.

**Adam Stacoviak:** I mean, maybe this is diversifying, but still, by and large, they're building Windows-based PCs. Sometimes very reluctantly.

**Jerod Santo:** Yeah, but gamers have 1Password.

**Adam Stacoviak:** Maybe...

**Jerod Santo:** Or LastPass. Or insert your password manager here.

**Adam Stacoviak:** Maybe. So my argument is less like a direct comparison to LetsEncrypt, but more so the fact that the security of email password login for many, many people is paramount. And there's nothing out there like LetsEncrypt that's freely available to everyone. And that's what I mean by that. I think that if we had that, that was like one unified brand, one unified application, like LetsEncrypt is - it's a single unified brand to say "SSL for everybody." If we had a version of that for email and password, I think we would have a better, a more secure world. Maybe not so much less breaches, but certainly less people who have the same password across 17 services, or just some layer above current state of art for security, for everyday users.

**Dan Moore:** Amazing call to action, Adam.

**Jerod Santo:** Yeah, that is good. Here's a lukewarm take... I think in 2025 - which is the year that we are currently in, unless you listen to Changelog News and you might still be in 2024 - we shouldn't think about Windows and macOS and Linux very much at all. I think that Steve Jobs was right, these are trucks. We drive trucks because we're truck drivers. But the world at large, the operating systems at large in 2025 are on smartphones. And iOS and Android are the operating systems of this decade. And so that's where it matters. And I think that those people, for passwords, are being taken care of. I can't speak to the quality of Android's implementation, but I know there's stuff there. And so I just think that we shouldn't even be thinking about desktops, and we need to talk about mainstream consumerism... Mainstream computerism. Because almost everybody in the world is using a smartphone as their primary, and in many cases their only computing device. Is that lukewarm? Is that hot? Is that cold?

**Adam Stacoviak:** I mean, I don't disagree that a lot of people, a large majority of people consider computers or today's modern computer being a mobile device. It could even be as far as an iPad. Similar to this conversation with Dan, and the fact that email, password, login will be around for the foreseeable future, I feel like some version of the desktop will be around for the foreseeable future. It is the platform where you have control of the compute, control of the operating system... You know this, Jerod; you're a developer. That's my argument, is like you will have a version of that for people.

**Jerod Santo:** I'm not saying you won't, but those are the truck drivers. And truck drivers have specific tools they use in order to drive their trucks better. Remember that guy -- Sylvester Stallone, he had that built-in... Over the Top...? What is this?

**Adam Stacoviak:** Oh yeah, yeah.

**Jerod Santo:** Dan knows.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** \[unintelligible 01:13:29.14\]

**Dan Moore:** Or I was just thinking about a CDL, right? You have specified knowledge, and you have a higher expectation of a truck driver than you would of someone who drives a car.

**Jerod Santo:** Yes. That's a more practical example. I was going for the movie reference. Remember over the top guys, where -- Sylvester Stallone, he's got this built into his truck... He was an arm wrestler, and he would use one hand, and all day long while he drove, he would just be making that one arm strong. You know, take my strong arm... And he would become the best arm wrestler -- it was basically a Rocky ripoff. Like, Rocky was really successful, and it's like "Let's do it again with arm wrestling." And so he had a very specific thing in his truck where he could just like work out an arm.

**Adam Stacoviak:** \[01:14:08.06\] Yeah, that was Over the Top, Jerod. I missed that movie. That was a good -- I mean, so many people try to replicate. We've got to get this on the screen. I mean, he would be arm wrestling them, and then he would just do this movement and then take him down. He would just like curl his wrist a certain way...

**Jerod Santo:** He'd get serious all of a sudden, and he would move his hands. It was like his killer move. Have you seen this movie, Dan?

**Dan Moore:** Nope.

**Adam Stacoviak:** Yeah, he would change his grip.

**Dan Moore:** This is my favorite conversation about authentication though, I'll be honest with you. \[laughter\] I love the movie reference. That's amazing.

**Jerod Santo:** Well, we aim to please around here. But yeah, yours is a much more salient reference, which is specific tooling and testing and training that truck drivers receive in order to drive trucks well. And everybody else, we just -- sure, we've got driver's licenses, but we just hop in a car and drive. We don't care about trucks.

**Dan Moore:** So that answer, to kind of add on to the lukewarm take - your response to Adam is "I don't care about..." I mean, we don't need a universal solution, because we have one that is near universal for the current platform of the century, basically. Or at least, maybe not century.

**Jerod Santo:** Yes. And specific skilled users have their options as well, and better education, and they should know their choices of password managers, and they should know this kind of stuff... And the people driving the trucks today, the desktop CCs and the macBooks and stuff are sophisticated users, who are usually working. I mean, most people are creating -- even today, a lot of creation is happening on smartphone. But actually, this is the working class people. And it's not that I don't care about them, it's that I think that they are educated in ways that they can... They can listen to the Changelog and just know all this stuff.

**Dan Moore:** Or frankly, the employer might -- if they're an employer, they're just going to be like...

**Jerod Santo:** Exactly. There's companies out there who specialize in this stuff. Yeah.

**Adam Stacoviak:** We should do a survey. And maybe our audience is not the best audience, but I don't know who else we would survey besides our audience. It's like, "Are you using a password manager?"

**Jerod Santo:** We should survey someone else's audience.

**Adam Stacoviak:** Gosh. I mean, I really want to know this, because I feel like when I talk to everyday folks, if I even mention 1Password, like "What is that?"

**Dan Moore:** Sure.

**Adam Stacoviak:** And that's a failure on 1Password's part, in my opinion. I'm not their marketing department, I'm not even their leadership... But I think if you're running 1Password, you want everyday users to recognize who you are, because there's only so many -- as Jerod's saying, there's only so many truck drivers.

**Jerod Santo:** But isn't the money in enterprise? I mean...

**Dan Moore:** Yeah. Businesses -- I know businesses that pay for 1Password, and they're thrilled to pay for 1Password, for all those reasons that you've mentioned, Adam.

**Adam Stacoviak:** For sure. Because you get everybody on the same platform, you get a unified source of truth... I'm not selling it, but -- I mean, all the reasons why you choose it is really good. Well, it's a hard fight here; it's a hard fight.

**Jerod Santo:** Let's --

**Adam Stacoviak:** Your lukewarm take though is interesting.

**Jerod Santo:** Alright, good.

**Adam Stacoviak:** I feel like Linux, Windows and macOS still matter.

**Jerod Santo:** That's because we are the truck drivers of the software world. And we can even be a little over the top every once in a while. Dan, if you were starting a software business today, and you wanted people to authenticate against your website in order to do stuff, and you make money once they're signed in, and you want to make sure that they can get in, and they can get their stuff, but also their stuff's secure... What would your solution look like for a developer trying to build today?

**Dan Moore:** \[01:17:55.08\] Yeah, this is a great question, because I think this goes back to that spectrum you talked about a while ago. And I think that if you have one single app, and you have relatively simple software needs, I think that going with the framework that is the base of your app is the right solution. So with Rails, that'd be Devise, with Node.js it might be like a Passport, or maybe like a service like a Firebase... Because if you're kind of a single developer, you're just trying to get people into your app, and safe and secure. And a lot of these big services will take care of that. Where I think it makes sense to kind of introduce something like FusionAuth or Auth0 or any of those other kind of solutions we talked about is when it gets a little bit bigger. When you have more than one app, or when you have -- you know, there's that trade-off between build and buy, and you always are kind of running that tension of "Well, yes, our engineers could do this, but should they?" And at some point the answer is no, because they're better off writing features, and not writing kind of undifferentiated login functionality. Does that make sense? I mean, I appreciate the question, because I'd love to be able to say "Here's an answer for everybody and everything", but I just don't think that's the truth.

**Jerod Santo:** So there is no silver bullet. I was hoping you'd just give us one... You could just tell us what to do. "Dan Moore told me to do this, and so I'm going to do it." But no, I had to actually think about my own use case, and apply thought processes. That's no fun.

**Dan Moore:** Well, that even gets back to the way that people are offering to authenticate. I think that, as much as Adam hates GitHub login for Tailscale, I think that's a great example of --

**Adam Stacoviak:** I don't actually mind it, just to be clear. I don't mind it.

**Jerod Santo:** \[laughs\] I don't know, you seemed pretty upset earlier.

**Adam Stacoviak:** I think the screen presented is a little overreaching, and I think it's overwhelmingly and confusing.

**Dan Moore:** Fair enough. Fair enough, fair enough.

**Adam Stacoviak:** I don't mind it.

**Dan Moore:** But I mean, I think if you were writing an app that is targeted for like small/medium business users in Germany, you should use Zing, which is like a German social business network. Or if you're writing something that is going to be deployed to China, you should use WeChat. Or if you're writing something that's going to be aimed at business users in the US, you should use LinkedIn. And I think you should always have username and password as the baseline, and I think that you should offer other solutions that are going to reduce friction, that let people choose. Because at the end of the day - again, this is from the lens of customer identity and access management... You don't really care how people get in. You just want people to get in as quickly as possible, so that you can get them to the value that they're actually hopefully going to pay you for.

**Adam Stacoviak:** So you think that we're wrong, because we don't offer email/password as a base.

**Dan Moore:** I mean, I would love to... Actually, that would be a great thing to survey your lo-- your listeners as well.

**Jerod Santo:** Our losers, excuse me?

**Adam Stacoviak:** Our losers, Dan? \[laughter\]

**Dan Moore:** Oh, I didn't say --

**Jerod Santo:** No, he was going to say listener and user.

**Adam Stacoviak:** Freudian slip, that's okay.

**Jerod Santo:** He was going to say listener and he was going to say user, and he called them losers...

**Adam Stacoviak:** Yes. Listener users, losers...

**Jerod Santo:** You're never invited back, Dan. Thank you very much.

**Dan Moore:** Oh, no...! \[laughter\]

**Adam Stacoviak:** Well, to be clear, Dan is a former listener, now a guest... He's been on twice, but he's listened to the show prior to being a guest...

**Jerod Santo:** That's right.

**Adam Stacoviak:** ...so he's in that bucket he's claiming. Go on, Dan. We're done joking around.

**Dan Moore:** I mean, I think that there's probably a chunk of folks that do want to just use username and password. They want to put it into 1Password... And there's probably a chunk of folks who'd be happy to use Google too, because they have one personal Google account that they kind of hang everything off of. That gets back to effort. And so like how much effort would it take for you to add those additional login methods to Changelog? And if the effort -- this is why we pay the big bucks, because we're just guessing on what features are needed for the future. We can do surveys and ask people and whatnot, but you don't know. But username and password is such a baseline that it's hard for me to imagine not offering it. And I've definitely been turned off of places that didn't.

**Adam Stacoviak:** \[01:22:04.22\] Well, it's funny that you say that with the Google account. I didn't really consider it that, I guess, in this whole conversation... Because I don't think like others too frequently about this. I'm not an auth provider, I'm not a product manager for Fusion Auth... So I'm not thinking about the way the product gets implemented. But I bet there's a lot of people out there who's like "You know what, Adam? You're an idiot, the whole time you're having this conversation. I'm listening, but I love to hang every authentication off of my Google account, because they are my password manager. Because I know how to get there, and it's literally one password to get into Gmail", or whatever they're choosing... And they're effectively this free authentication provider, or free 1Password manager, or free password manager, because they've logged into their email and everything is hinged off of SSO. And it's almost like "Hey, if you don't offer SSO with Google, then I don't even want to consider your service." Maybe there's people out there like that. And that maybe is the free version of it that's available to everyone.

**Dan Moore:** I mean, for my work we use Google Workspace, and I prefer that, because that way it's just -- it's super-tied, and I know that I will always have access to my Google account as long as I'm an employee...

**Adam Stacoviak:** Employed, yeah.

**Dan Moore:** And if I lose access to it somehow - Google locks me out, or something - at least I have recourse to my IT admins.

**Adam Stacoviak:** Right.

**Dan Moore:** Personal it's a little bit different. You hear horror stories about people losing access to their Google account and then losing access to years of photos and memories and documents etc. But for my professional accounts, if it's tied to my company, I love to hang it off my Google account.

**Adam Stacoviak:** There is no one way to log in, basically, Jerod.

**Jerod Santo:** There are lot of ways.

**Adam Stacoviak:** That's the thing I think we can bet on in 2025 and beyond, is that there is no one way... Unless you make only one way, like we have.

**Jerod Santo:** That's right. Unless you go to Changelog.com and you get your magic link. Here's the nice thing about it, is we never expire that cookie, baby. So do it once... Just keep your browser not flushed, and you'll never have to do it again, unless you're switching to a different context.

**Dan Moore:** Every time you switch a machine... That should be the first thing you do when you set up a new machine, is log into Changelog.com, and then you're good.

**Jerod Santo:** That's right. And then you're just good to go for the remainder of that machine.

**Adam Stacoviak:** You're good to go forever.

**Jerod Santo:** Bam. Well, we didn't have time for it on this particular show, but there is a very interesting article out on FusionAuth's blog by Dan called "Building a Self-hostable Product." If you want more, Dan Moore expertise, we'll link that up in the show notes for folks to go and listen to. Aside from that, Dan, what's the best place to connect with you on the internet?

**Dan Moore:** Yeah, so I'm on BlueSky; it's moreDS.com on BlueSky. I'm on LinkedIn, Dan Moore... And Boulder is probably the easiest way to find me, and FusionAuth.io. And I really appreciated the conversation, I appreciated the movie reference... Maybe I should go check out Over the Top.

**Jerod Santo:** You should, man.

**Adam Stacoviak:** That's an '80s movie, right?

**Jerod Santo:** It's a classic '80s -- yeah, it's got all the '80s trappings.

**Adam Stacoviak:** '85, '88? I'm going to guess '88.

**Jerod Santo:** Yup. Riding Sylvester Stallone's Rocky coattails... After Rocky. He was kind of invincible there for a minute.

**Adam Stacoviak:** Let's see how accurate that was. '87! I was so close.

**Dan Moore:** \[laughs\]

**Adam Stacoviak:** Oh, man. I'm re-watching that. It's on my list now.

**Jerod Santo:** That's a good one. Thanks, Dan.

**Adam Stacoviak:** Alright.

**Jerod Santo:** That's all we have for today. Bye, friends.

**Dan Moore:** Thanks.

**Adam Stacoviak:** Bye, friends.
