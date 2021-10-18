**Adam Stacoviak:** So we're talking about funding open source, that is the topic of today's show... I'm talking with Eric Berry, the founder of Code Fund, previously Code Sponsor. Eric, how are you?

**Eric Berry:** Good. How are you doing, Adam?

**Adam Stacoviak:** It's a good day, I've actually been waiting -- you may not believe this, but I've been waiting for this call. I've been wanting to have this conversation with you for a long time.

**Eric Berry:** I'm glad we're finally having it... Why is that?

**Adam Stacoviak:** So I put this show on hiatus about five years ago, and I love the kind of conversations I'm hoping we're about to have, which is kind of like this layering of an onion, revealing some of the details behind the lessons learned, and building a business, which is not easy... And I'm a fan of yours, I'm a fan of what you're doing, as you probably know.

I've resumed this show probably a few months ago, after a five-year hiatus, and my passion is really digging into these kinds of stories... So when I was bringing this show back and I made my list, your name was on it, so... There you go.

**Eric Berry:** I appreciate that. You guys have been a pretty big influence for me, so mutual respect there for sure.

**Adam Stacoviak:** Well, thank you. I took a drink of my coffee, because I need my juice to make it through. It's two o'clock now, but that's when I take my second cup of coffee. What about you?

**Eric Berry:** I've got my tea right next to me.

**Adam Stacoviak:** There you go... So Code Sponsor was the original name, it's now Code Fund; we've got sort of a long journey to extrapolate past, but just some quick highlights - I'll cover them and you can fill in the blanks. From what I understand, a year ago last month, July 8th, was when you began your journey here. Maybe that's the date of inception of the code; I'm not sure what the exact birthday really means... And since then, you've had some issues with GitHub, you've learned lots of lessons, you've had to change your business model, you've been acquired, from what I understand, from ConsenSys... What I wanna do is sort of like tell that quick version of the story to give some context to the listeners, and then rewind back to the beginning, to say where this began for you... So help me fill in the TL;DR, over-arching, and then we'll go back in the past here in a bit.

**Eric Berry:** \[04:25\] Yeah, I think to start off with, maybe a little bit about me and who I am. I'm a software developer; I've been doing development since the late '90s. I started off in PHP and went to Java, and then Ruby is where I was introduced to the whole open source world. This was back in 2008. Since then, I've pretty much clamped down on Ruby for a very long time, and anybody who's listening knows that the Ruby community is pretty remarkable when it comes to open source and helping build tools for each other.

So I grew up professionally in this atmosphere where we're all giving to each other. I had my heroes back then - Remy Sharp, of course, there's Tom Dale and Yehuda Katz, and DHH, of course... A lot of people who were doing massive contributions to the community, and it was so fascinating to watch every single time that that happened it was just another tool in my tool belt.

**Adam Stacoviak:** Right.

**Eric Berry:** So I became very comfortable -- well, comfortable is probably the right word. I became comfortable with utilizing open source for my personal career and growth, and I've been doing so for a very long time.

So back in July of last year I was working for a company, I wasn't too thrilled working there, and I wanted to be able to start something on the side... And when I did that, I asked myself "What can I possibly provide that's not out there?" and I had some ideas that might work, might not work, but I thought about what am I passionate about, and I'm passionate about open source, and I have a background in marketing, so the whole idea kind of came out of -- I remember the day I was driving to work and it just hit me "I think I can marry the two, and help open source continue to grow through marketing and advertising."

Once that idea clicked, everything stemmed from that, and kind of fell right into place in my mind.

**Adam Stacoviak:** That's interesting... For one, of course, Remy Sharp - huge influencer of mind; DHH, definitely, Tom Dale, Yehuda Katz... Significant contributions across all four of those people into the JavaScript and the Ruby ecosystems. I can remember reading Remy Sharp's blog way back in the day, and I'm just thinking like "How does this person pour so much in?" And then, of course, DHH's contribution to the Ruby world with Rails, and Tom Dale and Yehuda Katz with Ember... We've documented some of that.

The only person you mentioned on that list that hasn't been on any of our podcasts is Remy Sharp. We should fix that.

**Eric Berry:** Yeah, definitely. He's a great guy.

**Adam Stacoviak:** I don't know how that happened, but I echo your list, for sure. What's interesting is how you said "I know I wanna help, I have a heart for helping, I love this, I have experience in this (one being open source, the other being marketing). How can I marry the two?" I don't think many people actually maybe take that perspective; they just sort of like dive into something. It seems like you were a little bit more methodical about your process. Can you speak to that?

**Eric Berry:** Well, so speak to that -- I wanna talk about kind of how developers view funding in open source. For the most part, what I've seen across the board is developers think funding comes from sponsorships and buttons.

**Adam Stacoviak:** \[08:22\] And stickers, too.

**Eric Berry:** And stickers, right. Yeah, exactly. So you see all these developers who are putting these Pay buttons on their websites, on their GitHub readmes, hoping that they'll generate funding... And I'm sure we'll get into Open Collective, which is basically the super-powered version of that, which works really well for certain cases... But most of the time, what I was seeing was this money that everybody's fighting for; everybody wants to get more money on the table, but it's all coming from this donation/charity fund, which is always limited. That funding is limited, and if it's coming from a company, it's the first thing to go when anything gets tight, and typically, developers are hoping that other developers will donate.

I've donated to some projects before, but again, then I turn around and have my own projects, and then who donates to me? So the question is why are we approaching this problem from a charity funding source point of view, when we could say, okay, well, why don't we tap into marketing budgets? And then, all of a sudden, the depth of the pockets becomes infinite; as long as those marketers can actually see a return on their end, they'll keep on dishing out money.

So that was the reason why I decided that advertising was the way to go. Now, of course, back then I took a very naive approach. A few things that come to mind when I started this is 1) I know that people don't like the change; I don't like the change, developers don't like the change...

**Adam Stacoviak:** Change is tough.

**Eric Berry:** Change is tough. And to be something that's adopted -- and I've had experience with this in the past, but for something to actually be adopted, it has to be where the amount of change is less than the amount of reward that comes from that change.

**Adam Stacoviak:** Or the pain.

**Eric Berry:** Or the pain, right. The pain has to be greater than the change that would be required to resolve it. So I knew that the best way to do this in my view (in my naive view) was "Well, let's stick ads on GitHub."

**Adam Stacoviak:** It's got a lot of views, it's got a lot of visibility; it's the first place people tend to go to when they say "Hey, check out this open source project." They've either got their homepage, which is typically a GitHub page, or their readme, which is the second - probably equal, first second - visible piece of an open source project.

**Eric Berry:** Yeah. So I took this idea and I pitched it to a friend of mine, Tanner Linsley, and he is the person behind React Table and several other fairly popular projects... And I told him this idea of like "Hey, what if I made a way for you to place an unobtrusive ad on your GitHub readme, and then you would get paid on a per-click basis?" And the unobtrusive part was so key... You know, I'm a developer, and the last thing I wanna see is a bunch of big ol' banner ads on GitHub.

So the way it was designed was it was text-only, it looked different enough to not be deceiving, but similar enough to not be distracting.

**Adam Stacoviak:** \[11:59\] Right... Which is a very hard balance.

**Eric Berry:** It was a hard balance, but the people that I've talked to who saw that - most of the people that I point the ad out to, I have to point it out. Now, when you read it, it's very clearly an ad... Well, what I considered at the time was more of a sponsorship.

**Adam Stacoviak:** Hence the name Code Sponsor.

**Eric Berry:** Hence the name Code Sponsor. So I took a step back and I reached out and I said "I wonder if I can find an advertiser that's interested in getting in front of the audience that Tanner is generating." Tanner has a pretty big audience of JavaScript developers; I reached out to a couple of people, just flat out cold-called, and said "Hey, this is what I'm doing. Would you be interested?" and several people said "Yeah, let's give it a shot."

So that started in July, and in July I think I paid out $20, or something like that, to the developers; I think I paid it to Tanner and one other guy. And then month after month it kept on increasing. In July I had (I think) only like five repos that it was working with.

The application integrated directly with GitHub, so that when you sign in, it will list all of your public repositories, and then you can just select which ones you want to do, and it will generate a code for you to place -- the way it worked, it wasn't a code; it was a dynamic SVG image. That's how we got around no scripting on GitHub - that image, when that request came in, the image would look at the request, it would know exactly what property that's for, it would find the proper advertiser for that property, and then render on the fly the ad in SVG format.

**Adam Stacoviak:** Super inventive, by the way. You've kind of glossed over it quickly, but getting past the no script rule inside of a GitHub readme (or just a readme in general), that's pretty smart, dude... When we first saw it -- when Jerod and I first saw it, we were both taken aback, and I was like "That's really inventive. Wow!"

**Eric Berry:** Well, far and few between, I have some moments of brilliance...

**Adam Stacoviak:** Of greatness, yeah...

**Eric Berry:** Of greatness. \[laughs\] Everything else is kind of like a... \[laughs\] Yeah, so it worked really well. Now, there were some gotchas to it. One is GitHub uses an -- I can't remember the name of it anymore, because I haven't looked at it in so long... But they use basically an anonymizer layer on their requests, so that the headers that come in on any image request - they're all coming from GitHub's server locations, and they don't pass any information on whether it's mobile, or anything. That led to the decision to go cost per click, over cost per thousand impressions or CPM... Because if we went CPM, which would have been more fair for the publishers, for the developers, but because we couldn't actually prevent fraud in that way, we decided -- and I say "we" a lot; at the time it was me, but eventually it became "we." I decided to just do cost per click (CPC).

It was a pretty flat rate. I would charge advertisers about $1/click, which is well under what they're used to paying, and I would pay out anywhere between 40%-50% at the time to the developer.

**Adam Stacoviak:** The amount that you were having to pay is kind of a shallow depth at that point; it wasn't -- I don't wanna mention competitors, that's not the point... The point I'm trying to make is that you were trying to be greedy.

**Eric Berry:** No...

**Adam Stacoviak:** You were trying to find a way "What's the easiest way to enter this market that enables you to get some traction, on both sides? ...both the advertiser side and the developer side", and the easiest way is to make it accessible.

**Eric Berry:** \[16:12\] Yeah, and when I started it, I didn't really have an entrepreneur mindset in mind. I've been a part of businesses before, I've owned a business before, but only as the developer in the business, so I've never actually had to deal with the financial side, or anything like that.

And as I was going throughout the months, doing this - I was doing it on the side, in my own time - I started realizing "I really wanna do this full-time, and I'm gonna need to do this full-time. It was putting a lot of pain on my family, I was getting up at 4 in the morning every day to work on it, and working on it late... So I was putting in probably 70-hour weeks - 40 at work and 30 just on this... And it got to the point where my wife said "Look, you have to choose either Code Sponsor or our family, because this can't continue." So part of the reason for the stress was that we weren't making enough money...

Initially, we started off at a 50% share, just a flat split between the developer and Code Sponsor... But I ended up pushing it back to 40%, so that Code sponsor would bring in 60%, and what I found is that we just weren't making enough money to become sustainable... And it's a hard thing to explain to people, 1) when you're taking away something they had before, but 2) trying to explain "This has to be a sustainable company in order for this whole thing to continue. If I can't do this or if I can't keep this going, then everybody's being shut off, and nobody makes any money at all.

So that was a pretty rough time, seeing that realization. That was right around October, I believe, when we really started to get some traction.

**Adam Stacoviak:** When you say traction, what did you consider traction at that time? Can you give us a bird's eye view of what traction was then?

**Eric Berry:** I think there was a cycle of interest that came into Code Sponsor. What happened is people would look at the application and be a little wary, like "Is this for real? Are we really gonna get paid? How does this work?" and then I would pay people and then they would tweet about it; and once they tweet about "Hey, I just made $100 with Code Sponsor", people got interested and there was that validation.

Then that would happen month-over-month, so I always knew -- within the first week I would see a huge increase in new users, because people who got paid were talking about it. And I think about three months in - yeah, probably around September/October, we saw some really fantastic growth... And I'll just tell you, in July I paid $20, in August I paid $300 to developers, in September I paid $2,500. So that was actually in September when we saw a serious growth. Then in October I paid out $3,400 to developers.

**Adam Stacoviak:** Wow.

**Eric Berry:** So it was pretty exciting... We were really excited. Unfortunately, the honeymoon of all that kind of came to a close while I was at GitHub Universe.

**Adam Stacoviak:** Yeah, this is kind of an interesting next segment into this story, which was like -- obviously, the last thing that GitHub and potentially (as you even said yourself) developers would want is ads in readmes, and making this... Because not everybody has your viewpoint of like making them not stand out, and blend in, but not quite blend in; you know, what we talked about earlier... Not everyone has that viewpoint, so the position that GitHub took on this was like, you could be an enemy to their state in the fact that you're injecting unintended things - dynamic ads, essentially - into their pretty readmes... And there's a conflict there, essentially. Can you break down maybe what happened and how that played out?

**Eric Berry:** \[20:29\] So we had some really large properties, really large repos using Code Sponsor at the time... One of the largest was Sindre Sorhus' Awesome List... And that, I believe, was the number one largest property on GitHub. It was generating a ton of traffic. And I went back and forth with Sindre, and we tried to make the ad look good and fit right and not be obtrusive, but also still be effective. What ended up happening is -- well, let me take a step back... I also wanted to show the world that I had GitHub's support, even though at the time I really didn't... And this is me being naive and scared. I was scared. I was scared to talk to GitHub directly and say "Hey, are you okay with me doing this?" And I didn't. And I looked at their terms, and at the time, their terms weren't as clear as they became after everything went down.

So there was a little bit of a loophole, and I thought "Okay, I'm gonna comfortably sit in this loophole." I decided "What better way to show the world that GitHub supports Code Sponsor than to sponsor GitHub Universe?" So I reached out to them and I said "Hey, I'm interested in sponsoring GitHub Universe. Would you be okay with that?" They said, "Absolutely." I sent them $6,000 and a logo, and that was it. Now we were on their website for GitHub Universe 2017.

It was fantastic, it was a huge boost for people's trust in the system, to make sure that they will continue to be supported and get paid. So I took Tanner, who was, as I mentioned before, the first user, and he helped brainstorm a lot of what Code Sponsor was at the time... I took him to GitHub Universe with me. So we're having a great time, getting to know people... I met Nadia Eghbal there, a fantastic person; I got to meet a whole bunch of people... It was a great opportunity to try and connect with new advertisers, new sponsors for the platform.

Then I remember getting an email from Sindre, I think on day two, and in that email, he said "Hey, I just wanted to be aware... GitHub is asking me to pull the plug on Code Sponsor." I read this, and I read this over, and I read this over, and I thought "Oh my gosh, what am I gonna do?" So immediately I went over to the GitHub support area; they had a support area... And I said "Hey, this is who I am, I'm with Code Sponsor. Can I talk to somebody about this?" and I got some crazy looks, like "Oh, you're the crazy person that's trying to tear down the ship...", or whatever it might be... You know, it was like a bad feeling that I got...

**Adam Stacoviak:** Right. You're him!

**Eric Berry:** Yeah, yeah... A "bandito". And they didn't wanna talk to me. It came down to "Look, we can't talk to you. You have to go through this channel." So Tanner and I sat down, we drafted a big, long email, explaining what we are... The reasoning that they wanted them pulled is because they claimed that we were an ad platform, and even though we weren't technically an ad platform, we showed a lot of signs of being an ad platform... We were trying to be a way for sponsors to be able to fund projects.

\[24:19\] Now, you've gotta understand, Open Collective does -- let me talk about Open Collective for a moment, because it is important here. First off, let me say I am a tremendous fan of Open Collective. I think that what they've done and are continuing to do and will do in the future is unbelievable.

For those who don't know what Open Collective is, it is a (I believe) not for profit organization that allows developer teams to generate funding for their projects, where Open Collective will receive the money, do the taxes, and then they will pay out based on public requests... So if a part of the team says "I want to spend money for stickers" or "I want to spend money for T-shirts", or "I want to spend money to go to this conference" or whatever it might be, that's what that funding is for.

Now, as great as that is, almost everybody that I've spoken to that participated with Code Sponsor at the time did not want to do that. They didn't like the public nature of it, they didn't like not being able to spend money on what they wanted to spend money on... And I can understand.

**Adam Stacoviak:** It's not a fit for everybody, basically.

**Eric Berry:** It's not a fit for everybody. It's definitely a fit for some, but not for everybody. So Open Collective really focuses well on the aspect of enabling sponsorship directly. Code Fund - or Code Sponsor at the time - was more of a way for advertisers to get money to those developers that don't wanna participate in Open Collective. So when I received that, we drafted an email and we sent it along, explaining why we're not an ad platform, and explaining some steps that we'll take to move on... And we thought that was it.

We thought "Okay, I think it's handled. We'll wait." And then we waited... And we waited... And we waited. And eventually, I got a response. That led to a chain of more responses.

**Break:** \[26:34\]

**Adam Stacoviak:** So Eric, you're waiting and you're waiting, and you're getting a response from GitHub, and... I'm on the edge of my seat here. What's next?

**Eric Berry:** Well, you know, you've gotta understand the mentality that I had here. It was really frustrating for me, because I tried to explain in these emails, "Look, this is the good that we're doing. This is why we're doing it. I'm not doing this to be rich, I'm not doing this to make a big name for myself. I really just wanna help developers get funding for open source. That should be a part of our lives, as open source developers."

**Adam Stacoviak:** Right. You felt like you were talking to somebody who should care about what you cared about too, right?

**Eric Berry:** \[28:09\] Exactly. Now, in hindsight, I understand where they're coming from, and I'll get to that. So they got back to me and they said "Look, we don't see any engagement directly between developers and advertisers, or developers and sponsors. That's why you're not allowed on here." Okay. I can work with this. So I got back into code, I changed the system around to make sure that not only were advertisers being pre-selected by developers -- so in the system originally, when you log in as a developer, you actually choose which advertisers you want to participate in funding your project. So what I did was I changed it so that the sponsors also had to approve or disapprove which developers they wanted to fund. So it was very much a two-way street, so I thought "Okay, this is it."

I announced that things are great, and then after that I wrote back to GitHub, I said "This is what we did. Thank you for letting me know, we're good now."

**Adam Stacoviak:** "No, we're not good..."

**Eric Berry:** "No, we're not good." They write back. They said "No, you're not good. This actually is really bad. Your images are still ads. We don't wanna support that type of thing." So in a last-ditch effort (this is in November) I wrote back and said "Okay, look, you're not giving me any clear answers", and they wouldn't; they clearly stated "It's not our job to tell you how to make this work. It's just our job to enforce the rules." Fair enough.

So I wrote back and I said "Okay, I'll tell you what... I'm gonna change this up completely, to essentially be exactly like Open Collective, but only service those projects that people don't qualify for Open Collective." Because Open Collective required a minimum of 100 stars, at least two developers to be on the project, and it required a certain amount of -- well, I can't really speak for them, but at the time I talked to Pia multiple times... I've spoken to her multiple times on the development of this, and I even asked her "Are you okay if I mimic your style on GitHub?" and she said "No problem."

So I wrote back an email to GitHub, pleading with them and saying "Hey, this is our effort, this is why we're doing it, and here's what I can do... And you're already allowing it, so I'm just asking for permission to do the exact same thing that you're allowing them to do."

I got an email back from -- instead of their support, I got an email back from their legal department, and they said... To summarize, they basically said "Look, it's our platform. We reserve the right to allow or disallow anything that we choose on our platform. We disallow you. If you're not off of our platform by December 8th, then we will be forced to take legal matters."

**Adam Stacoviak:** That's not the kind of email you want...

**Eric Berry:** No, it was not the kind of email I wanted...

**Adam Stacoviak:** Because they've got deeper pockets, for sure.

**Eric Berry:** Yeah... And here I am, doing this on the side, losing money... I put in $30,000 of my own money into this, trying to make it work, and even though I was taking a cut, it was nowhere near what it actually cost to do, including this sponsorship, and the marketing materials, and trying to build it up. So it was really, really hard.

\[32:05\] So in November I sent out an email to everyone, and I published an article called "Why funding open source is hard." In that article I detailed the growth and success of Code Sponsor and I explained why it's shutting down, and I basically said in that blog post that I'm stepping out, I'm shutting it down completely.

**Adam Stacoviak:** Yeah.

**Eric Berry:** Now, it was so hard for me... So hard. The family had a big part of it; I wasn't out for the fight. You can get kicked so many times, and if you know the kick is coming, it's not as hard... But after so many kicks, and your family is saying "Look, this is not gonna work for us either", then you really start to rethink things.

**Adam Stacoviak:** Yeah... You've gotta prioritize the important things. Business is great, all that good stuff, but family comes first... So I can understand your perspective there.

**Eric Berry:** Exactly.

**Adam Stacoviak:** So you ended this article, this post, very detailed post on Hacker News, on Medium... I don't even know what the impressions or the readership was at this particular post, but I know they got a pretty -- you got almost 2,000 claps, which is quite a big deal on Medium... And you ended it by saying "I'm done." But you weren't.

**Eric Berry:** But I wasn't. I wasn't because it didn't make sense to completely shut it off. I did shut down the platform, I stopped tracking... But I still had developers who trusted me and relied on me to help them get funding. And I had a good friend, Mike Smith, who I believe you know, over at Rollbar, who's now at GitPrime. I asked him, I said "Are you willing to stick with me? What I can do is you keep providing funding for all of these top-performing sites" -- and he looks at them as top-performing, I look at them as needing the most funding. I said "Will you continue to provide funding for them, and I will just take a 15% cut, and that will essentially make it so that we can still do the tracking", as we were still running it through a tracker... But I didn't need any of the money. The money was literally just to help the server run. He said, "Absolutely." He had no issue with that.

So in December I paid out all the remaining money to all of the people that I owed money to, which came to almost $5,000, and then I had an extra thousand dollars of nickles and dimes for all of the other developers that didn't make enough money to receive that payout, so I made a lump sum donation of $1,000 to the A21 organization for fighting human trafficking. There's a blog post listing every single developer that participated as a donor in that donation... Because it wasn't my money; I didn't consider it my money and I didn't want it. So in December I talked to a buddy of mine named Freddie Shelton, and I asked him, I said "Hey, are you interested in Code Sponsor? I've got all these contracts set up, I've got Mike here... Would you like to take it over?" "Sure, absolutely." So he did, and he kept it going for a month, all the way through early January.

In that time, I was kind of going through this point in my life where I hate my job, I need to find purpose... I found true purpose in funding open source, but I need to be able to go somewhere that I can do that and get paid for it... And that's what I did.

\[36:15\] Over the course of about three months, I've been talking to Kevin Owocki, who is the CEO and founder of Gitcoin. Gitcoin is a product that helps developers get paid to contribute to open source funding through bounties. We became friends over the months and he offered me a job to come work at Gitcoin, which I accepted.

Once I got to Gitcoin, I thought "I wonder if I can just pick up where I left off and bring Code Sponsor back in." So I reached out to Freddie, I said "How's it going?", I said "Would you be willing to sell me back the company?" and he did. I gave him some money for the company, and then I brought it in as just my contribution to Gitcoin... Just "Here's me, here's what I can bring to the table. I don't want any money for it." They paid a few of the expenses that I had for the product, but all in all it was like "Code Sponsor joins Gitcoin as sister companies, but they're basically one company now", because we're all getting our paychecks from the same company, and all that stuff. But my role at that point became "Make this work. Help people through ethical advertising."

**Adam Stacoviak:** Wow. That's resiliency right there. Somehow you made it through what Seth Godin describes -- and it's still probably a dip for you, but there's a portion of a dip there, right? The hard part is -- all the hurdles that come up along the way to having the ability to do it on the long-term. And I'm not sure what Gitcoin's funding is; I know they're part of ConsenSys... I'm sure they've got a lot of resources to level you out and what not, but... I mean, you've got a new license now; you've got a license to keep trying, which to any entrepreneur is like "Yes, give me more time." And at the same time, you're not damaging your relationship with your family... Which has gotta be the most important thing of all that, right?

**Eric Berry:** Oh, by far. Absolutely, by far. Gitcoin enabled -- and I'm forever indebted to Kevin for this... But Gitcoin enabled the rebirth, you could say, of Code Sponsor. I have to mention, I think part of the reason why I survived through all these kicks to the groin is there's a guy I meet every Tuesday, his name is Mark \[39:00\] and he's an entrepreneur, he's just this really busy guy... And he told me, as we were going, he kept saying "Look for the next punch, look for the next kick. It's coming, it's coming. That's what this is all about." So I was kind of coached to be prepared to be kicked, and to be prepared to have these failures and not collapse under them.

It was almost like "Okay, well... I know the next one's coming. It's probably gonna be within a month... Okay, this is likely what it's gonna be" and then I'd kind of mentally prepare for it, and it allows me to get on further. That was a huge, huge help. But then things got a little bit easier in January.

I started with ConsenSys in January, like you said. I immediately went out to this insane retreat for the whole company - they flew the whole company somewhere and we had this week-long retreat, and I realized "I'm not in Kansas anymore. Things are different now." Things are different when you're in a place that actually has money. So what that bought me was the ability to focus on the developer, focus on the problem, which is funding open source, and trying to help build that solution.

\[40:19\] So the pivot that I decided to do was say "Okay, we'll no longer even gonna bother trying with GitHub." In hindsight, knowing that they were in the process of being purchased by Microsoft, and they didn't want to throw any type of craziness into that deal or any type of wild card... They didn't want a wild card to be visible in that sale. This is my view.

It totally makes sense, now that I know that they were selling to Microsoft, why they didn't want anything to do with me... And I accept that. I accept that completely. I also accept the fact that they couldn't tell me at the time. \[laughs\] Look, I'm good with it now. I still love GitHub; all my code is on GitHub. All the code is open source for Code Fund, that's all on GitHub... But it allowed me to focus more on developers, and that's what I did.

Month by month we continue to grow, and we're still continuing to grow. We are on websites right now such as JS Bin with Remy Sharp, Material UI, Nuts.js, we're on Rubular... We're on probably 15 pretty highly popular websites right now, and what's really cool about this is not only do I get to send them checks every month, and now I'm paying up to 70% - 70% of whatever revenue comes in goes to them. Up to. So not only is that amazing, but partially it's the reason why they chose us over the other guy.

**Adam Stacoviak:** I'm kind of curious hearing you now saying this... You say the term websites, so pretty high traffic websites. JS Bin is one of them, and a couple others you've just mentioned there... Where is the developer in this? What is the relationship with Code Fund now? You kind of stumbled a couple times, saying Code Sponsor and Code Fun, and that's because you've had these identity changes over time... But where is the developer currently in the Code Fund system? How do you help the developer now?

**Eric Berry:** Right now what I do is I look for websites that are community-servicing, whether it be an application that developers use for free, whether it be blogs, or articles, or newsletters that service the community... But any developer who is putting their time towards making the life better for other developers, I look to help. So I reached out to Remy, I reached out to Olivier over at Material UI, I reached out to Michael Lovitt over at Rubular... I reached out to all these people, because these are websites that I'm familiar with and I know they're working hard to service the community... So I asked them, I said "Hey, would you like to participate?" And a lot of times they say no, but every now and then they say yes. So I bring them in, they create an account, they can see near real-time what their money is coming in, and we pay them every month.

I just try and keep them happy, because who's thinking of the maintainer, right? Everybody's thinking about the code, and "What can the code do for me?" and all that stuff... But who's thinking of the maintainer? And I think of an example - it's a sad example... The story of Jack Lukic.

**Adam Stacoviak:** \[44:02\] Yeah. Semantic UI, we've had him on the show I think two times.

**Eric Berry:** Yeah. So he creates this insanely incredible bootstrap competitor called Semantic UI. He's the only guy maintaining it, and this thing explodes. 40,000 stars on GitHub.

**Adam Stacoviak:** Right. We use it, too. We use it as the UI component system for our back-end, to just make an admin so much easier to deal with, because who wants to design and build their own admin? It's sort of pointless. What you wanna focus on is the design or the customer-facing sides of things, not so much your sides. Good experience, but Jack made it easy for us to do that, with Semantic UI.

**Eric Berry:** Right, exactly. Late last year, in December - and I actually have a quote, if you don't mind me sharing...

**Adam Stacoviak:** Sure, please.

**Eric Berry:** On December 31st of last year he said "After having spent about three years of my life trying to make open source work with part-time proprietary work, or just plain being broke, I don't think I know of any other way that seems reasonable without compromising the software. Unfortunately, it means I have to push back a development until I can find the means of financing to sustain it."

It's a frustrating thing, and I saw the anger in the issues. I've been following Semantic UI for a long time, and I know that he was overwhelmed. At one time I actually calculated to myself, "Okay, well he has--" Let me see... At the time, last year, he had about 580 issues. So I thought "Okay, well what if it takes 30 minutes per issue to solve, and what if he charges $75/issue?" and I calculated, it was something like $40,000 to get him out of the hole. I think that's wrong, but off of my memory... It was a lot of money that he's giving up. Now, this is not money that he can make, this is money that he's not going to make, and that he's gonna give up because he has to spend that time doing that, versus other work that might make him money.

**Adam Stacoviak:** Right.

**Eric Berry:** So again, I wanna keep people's eyes on the maintainer, and that's what Code Fund. Code Fund is -- I should probably explain Code Fund.

**Adam Stacoviak:** How has it changed? Has it changed in its makeup since Code Sponsor? Because for me, I'm playing catch-up too, so explain to me.

**Eric Berry:** So when Code Sponsor became part of Gitcoin, the thing that always bothered me once we moved away from GitHub is that we're not really doing sponsorships anymore. In fact, I think the name "sponsor" could be deceiving when used on an ad platform, which we embraced and became in January.

So I decided, "Well, let's rename it. Let's make it fit more of the Gitcoin brand." So we renamed it to Code Fund, our website is now CodeFund.io, and we rebranded the logo a little bit to look more like Gitcoin's. But anyway, I believe that our goal is more about funding code, versus sponsoring code.

**Adam Stacoviak:** So you say that not many people focus on the maintainer, and you've got this example of Jack Lukic, who is doing great work on Semantic UI, and it's a shame to be that deep into a project and be a single maintainer and have really no financial way out, as he had said, without changing the model of the way that you deliver this open source project.

There's many people out there who decide to do, like Sidekick, for example - Sidekiq and Sidekiq Pro; Mike Perham has done a great job with that... There's different ways that you can go about things.

As you had said earlier, the same with Pia - there's not one way to do everything. So not everybody who wants to do open source wants to make a community version and a pro version

\[48:09\] So here you are, trying to find a way to match people who can receive value from exposing their brand to an audience, and those who don't wanna change their business model or their "model" of producing their open source work. You wanna find some sort of like harmonious way to connect both, right? Is that where you're at right now?

**Eric Berry:** A hundred percent. In fact, I gave a talk at a conference, the Ruby Hack conference back in April, and in that talk I actually defined how developers' roles need to change in order to really increase funding in open source. Now, any developer that comes in, the easiest thing to do would be to add a button to their repo and say "Hey, donate money if you're using this." Very easy. But the likelihood of any return on that is next to nil.

Kent C. Dodds, which is a fantastic person, we both know... The creator of Cross and many, many wonderful libraries - he had those buttons on every one of his projects for a year and he didn't receive one donation. Not one. So in this talk, I visualized a graph that's essentially an exponential curve, and on the bottom part of the graph is the amount of money that you can receive, potential earnings. And on the left part of the graph, going up, is the amount of change that a developer is required to perform in order to make that happen.

And you mentioned the entrepreneur, which there's a lot of money to be made in that entrepreneurs' side of open source, if that's the way you wanna go. It's been proven with Sidekiq, and it's been proven with many other libraries, but at the end of the day, you've gotta be a unicorn to pull that off; you really have to know how to market yourself, how to advertise, how to build a company, how to create a business model that's gonna turn a profit, and how to maintain both sides of the free and for-cost of this project. And on top of that, your project has to be popular enough to justify that type of thing. The middle ground that I've found is support.

Now, a good example that I show is Trailblazer. Trailblazer is like a framework that sits on top of Rails, that changes things around and makes it a little bit more -- I wanna say verbose... Go to Trailblazer if you wanna find out what they do, but you go to their website, and I see three things - there's a premium support, there's a book (they sell a book), and they are sending out stickers. They're doing a lot of marketing and support for that, and I'm sure they're getting pretty decent money doing that. They're not seeing Mike Perham money, but they're still seeing money.

But again, it comes back to what does a developer wanna do? Do you want to be a support person? Do you want to write books? Do you want to start a business with this, or do you just wanna continue building open source? And unfortunately, I don't see a lot of ways, aside from licensing software or advertising, that will let you continue acting as you have always before, and still make a decent amount of money back.

**Adam Stacoviak:** \[51:40\] Yeah... This example, going back to Jack and Semantic UI - he just wants to be able to produce and maintain the open source, not add one more layer, which is support, or whatever else it might take to develop some sort of revenue stream. You don't wanna take the current load, plus something to support it. He just wants to be able to deliver the great project, and sustain it... And it's such a hard nut to crack, it really is.

You mentioned Open Collective - they have their ways; Semantic UI may fit there or it may not. Patreon is trying to get into this game as well, you've got Gitcoin, which is funding issues, with a whole different kind of model... But there's all sorts of different ways you can sort of like wrap this up, and there's no easy road.

**Eric Berry:** Yeah. Everyone has their pros and cons, and it's almost like you have to find out which one fits you. Nadia Eghbal has a really good readme on GitHub called The Lemonade Stand. I refer to it often. If you are interested in funding open source, that's a great place to start. You'll see all the pros and cons of all of these different ways of doing it.

I think the biggest thing that I would like developers to know is that it's okay to get paid for open source. It's not something that you have to give away and it means less if you get paid. It is okay to get paid. The question is what avenues do you go to get paid, and what options are there out there?

I strongly urge anybody who's interested in this not only to check out Code Fund, but also to go around and look at the different ways that you can do it. There's so many different ways to generate funding for your open source, it's just what fits your personality the best.

**Break:** \[53:45\]

**Adam Stacoviak:** So the funding model for open source, Eric, is a moving target, right? Since day one, which is just a portion of the journey of trying to sustain open source - your day one was a year ago, at least with this project, to try to find some sort of sustainable way to help open source developers find a consistent revenue stream that can help them just do one thing, which is produce and support and sustain their current project, not add other layers to find revenue models. That's a moving target, would you say?

**Eric Berry:** Absolutely.

**Adam Stacoviak:** It's unfortunate about the scenario with GitHub, but as you'd mentioned, totally understandable. I look at some of the past and some of the directions you've taken, and I'm just kind of curious... There's something laid out in this latest post from you, which is greatly put, "What I've learned over the past year funding open source." You kind of outline various things you've done, lessons learned, mistakes... What are core lessons learned for you in this process, either in that post there, or not yet, that you can share?

**Eric Berry:** \[55:51\] I think mentioning the ones on the post -- I wrote this when I was very much deep in reminiscing about the past year... I didn't even realize it's been a year, and all of a sudden somebody on LinkedIn said "Hey, congrats on one year!" "Oh my gosh, it's been a year..." So to touch on these, I think these are the most important to me.

When I started the business off, and over the past year, I think one of the things that I'm most proud of is the honesty that I've been able to approach us. Digital advertising is kind of a messy, dirty, yucky thing. It can be. And advertisers that I've talked to over the past, where I basically open up my data and I say "Here, you could see exactly what we're doing. This is my overall click-through rate. Here are all of my publishers that I'm working with. Here's how much money we've made as a company this month, and this is how much money we're giving back to developers", and all this stuff. I've been so open and honest with them, and I think that's paid off a lot.

I don't do it to pay it off, but I'm not a good poker player, I'm a developer... Logically, in my mind, if I'm open and honest with them, then they will appreciate it and work with me, or they will say "Okay, thank you for being open and honest. You've given me enough information to know that this won't work for me, but I'll think of you in the future." Never has anybody said "Oh, they're so open and honest... I'm gonna take advantage of this and see if I can...", whatever it might be.

That's something that I've just been really proud of, I continue to be proud of. In all openness, I posted what our earnings was for last month, July - we had 2.4 million impressions, average click-through rate of 0.33%, we had $7,200 come in the door, and $4,400 went right back out to developers. So we made $2,800 in profit. Again, we're far, far from being able to support myself and the other developer that works with me, but we're in the right direction, and we're making a difference.

So far, in the whole, Code Fund has generated over $36,000 for open source. I have literally been able to pay out $36,000 over the last year, to developers all over the world... And that is just such an amazing feeling for me. And the best part is I know I'm just at the very beginning. It's gonna grow, and it's gonna grow, and it's gonna grow.

I think part of the reason why I was able to pivot and not topple is because of the mission. I look at some companies' missions, and their mission is to make revenue, or "I want everybody to use this brand of soap", or whatever. That stuff to me is not very important. But having a mission that actually has true meaning, such as "How can we help fund open source? How can we help get money to people?" and as long as that is the rod that I hold on to, that is the goal post that I'm aiming at, it's really easy to make decisions... And every decision that I've had to make is like "Well, how is this gonna help open source? If it is - okay, great. If not, I'm definitely gonna do it."

**Adam Stacoviak:** It's good to have that as your checker, too. Your final litmus test is, like you were saying in this post - and we have a similar one - does it enrich the life of developers? That's our mission. So as we decide to work with new sponsors, or produce new shows, or go to certain conferences, or just in any way change or redesign how some of it works, we ask ourselves that question, which is "Does it enrich the lives of developers?" Your question is similar, "Does it help fund open source?" and if it doesn't, don't do it.

**Eric Berry:** \[01:00:20.15\] Yeah, and I might have to append to that too, because I should say "Does it ethically help fund open source?"

**Adam Stacoviak:** Okay, I like that...

**Eric Berry:** Because I'm sure that you have people come to you and say "Hey Adam, I love your podcast. I'd love to sponsor it. Will you sponsor it?" and they're XYZ company that has nothing to do with advertisers at all.

**Adam Stacoviak:** We've had to say no to some people, for sure... People who will come to us and say "Well, we'll sponsor your show if we can get somebody on the show", or something like that, and I'm just like "That's just not how we operate. We just don't do that." We don't pay to play. All of the content on our shows is native content; we sought it out, or were truly interested in the story. It's not because somebody paid us to be on here.

**Eric Berry:** Yeah.

**Adam Stacoviak:** Our sponsors are different. That's the point. And we do a great job of sharing their message, and understanding their brand story, and caring how we should help them communicate their message to the developers and our audience; that's part of what we do, that's our value-add. But those are paid, content is not.

**Eric Berry:** And on that note, I've gotta say... I don't know who the sponsors are for this specific podcast, but--

**Adam Stacoviak:** Rollbar is one of them...

**Eric Berry:** Rollbar, thank you. I personally thank each and every one of those sponsors for this podcast being recorded right now. I appreciate it. You guys are the reason this can happen, thank you.

So back to ethics - the last thing that I pointed out, and that really has kind of been a part of who I've been and what Code Fund/Code Sponsor has been since day one, is ethical. What I mean by that is -- so I'm a big fan of Eric Holscher; he's of course the genius behind Read the Docs. I had a conversation with him early on, back in July... I had this idea, I wanted to run it by him, he was kind enough to talk to me about it; he gave me some great advice. But at the end of the day, I was able to take what he created, which is ethical advertising, and apply it to advertising across the board. That includes no tracking, no cookies; we don't do any remarketing and we don't sell data, we don't do profiling, and all of our ads are on topic, all of our ads are relevant to the audience, and all of our ads are unobtrusive. They're not in your face, they're very subtle; they're beautiful, and they're good. They should be something that's not distracting when you're viewing a site.

Then finally, in February I decided that if we're really gonna be who we say we are, we've gotta open-source this... And I actually gotta credit it to you and to Jerod. We've talked off and on over the past year, but I didn't realize early on that all of your software is open source... And I thought "Wow, that's awesome!" So I took your advice, or I followed your lead, and I open-sourced it all now.

Jerod and I went back and forth a little bit, because I might have open-sourced it and copied some verbiage that Jerod wrote, and he said "Don't do that!" \[laughs\] But I've since corrected it. Nothing but respect for you guys, and I think it led me to make a really good choice by open-sourcing our stuff. But the best part is that -- you know, the whole blockchain thing, it talks about trustless, where you don't need to trust people...

\[01:04:09.19\] Advertising is so dirty, but when you say "Our whole advertising platform is open source, and these are our claims, and you can go verify", it becomes a lot easier to trust, or not require trust on that.

**Adam Stacoviak:** Yeah, it's easy to get out of the box, because there's certain stigmas that are squashed out the box by saying "We follow these patterns, our code is open source, these are our guidelines, whatever they might be..." You created us on the open-sourcing part - we just put the baton up and hope people follow us, and we're following others, too. We're just leading the leaders and following the followers, because I think it's the way to go... We dreamt of being able to when we built the CMS that now powers Changelog.com

Our dream was to be able to make sure it was open source, because we felt like, gosh, we've been covering open source since 2009. Open source moves fast, we're just trying to keep up and help everybody, too... And we could not in any way go beyond Tumblr or WordPress, which were our first two platforms, and build our own and not make it open source... Because it wasn't about fueling competitors or anything like that, it was about "Can we start a conversation? Can we establish trust, can we invite the community in?" There's so many benefits that we see because of it, and... If we kept it closed source, where would we be? What would that be like? That's silly.

**Eric Berry:** Yeah.

**Adam Stacoviak:** So ethical advertising is certainly an interesting perspective. It's been the DNA of you since the beginning...

**Eric Berry:** Right.

**Adam Stacoviak:** Something else you said there that you kind of glossed over a little bit was you've been unapologetically focused on the mission, and you kind of go into some details there... Specifically, with that mission in mind, it means that if the game changes, you're willing to change with it. You mentioned earlier being able to pivot and not topple... If you say here, in bold, "The mission, not the product, is our lighthouse" - that means that if, for some reason, the way you generate funding for open source developers in the future changes from an advertising platform to something else, you're willing to follow it... Is that right?

**Eric Berry:** Yeah, and not only am I willing to follow it, but I think I'd be willing to follow it gleefully. Nobody likes ads. I don't like ads; us developers are really the ones writing the ad blockers... So I get that it's not the ideal solution, and I know there are a bunch of different solutions, but right now that to me is the most effective way to bring funding to open source where everybody is happy, for the most part. If that changes and something comes out that will make a better impact, more of an impact - yeah, we'll be on top of that.

I'm a big fan of the Brave browser and the Basic Attention Token. I think that's wonderful. I'm a big fan of DecoNetwork, which is fighting to make it possible for developers to easily license their software. I'm a huge fan of Tidelift, who is focusing really hard on providing an ongoing salary towards maintainers and building up a maintainer pool. So there's a whole bunch of efforts going on that's all solving the same problem. We're all on the same team. We might be doing different tactics to make it happen, but we're all on the same time... And it's really comforting to know that.

**Adam Stacoviak:** \[01:07:44.02\] I think what's interesting too is that because the overarching theme of this is obviously diving deep into your story, but it's "How do we fund open source? What are the ways you can?" and I think what I've learned through this conversation is that there's just not one way; there's many ways.

As you'd mentioned, you and your relationship and your friendship with Pia is not predicated on the competitive conflict that your business is, you're for profit, or your missions that your businesses have. Because of that there isn't a change in your relationship. You still can be friendly, you can still have respect for one another, and there's many ways to solve the problem of solving open source.

**Eric Berry:** Yeah.

**Adam Stacoviak:** I guess what was a little unclear to me - and is maybe still unclear - is how Code Fun sits inside of Gitcoin or ConsenSys... Because you've said "you and a developer", and "we" a couple times, and I'm trying to track how that applies in payouts. Is it autonomous, is it by itself, is it part of Gitcoin, is it a subproduct? What is the state of Code Fund right now as it pertains to Gitcoin, or even ConsenSys at large.

**Eric Berry:** Legally, Code Fund does not exist as a legal entity anymore. Code Fund is literally a product, one of many products, by Gitcoin. We're actually going through a little bit of a branding crisis with that right now, and we're trying to figure out what that means. So your confusion is actually my confusion as well.

**Adam Stacoviak:** Nice... Okay. We have talked to Kevin on the Changelog as well; when we first heard of Gitcoin, we thought it was actually a coin, and it took us a little while too to unravel the onion and say "Oh, okay, so this is about funding issues through cryptocurrencies, because ConsenSys is essentially very bullish on the cryptocurrency markets, specifically Ethereum."

**Eric Berry:** Right, right. So Code Fund is this weird thing that just showed up in this ConsenSys mesh, that has absolutely nothing to do with blockchain. I've often asked myself "Why am I here? What are we doing here?", because it doesn't make any sense as far as promoting blockchain or building that economy or ecosystem. However, as time goes on, I'm finding that Code Fund actually fits in really well with it, because it's a built-in tool for promoting and advertising others spokes within ConsenSys... But also, it will open up opportunities for developers who don't know anything about blockchain development to start getting involved. Some of our ads that we're running right now are introducing people very slightly into like "Hey, are you interested in blockchain development? Are you interested in learning this? Come here, they're wanting help, they're wanting to get people involved." So there is some mix there... But yeah, it is a little bit of a weird thing. We're hopefully gonna have an answer for that question later this year.

Right now, to really TL;DR it, Code Fund is literally just a product of Gitcoin, and Gitcoin has a bounties product, and that's what Gitcoin is known for, their bounties product, and Code Fund is the ads/revenue arm of Gitcoin.

**Adam Stacoviak:** Yeah, I was always curious about how that would play out, because I can see how they interconnect, and I was very happy for you when I heard about this announcement... But at the same time I was like, "So is it by itself? Is it a subproduct? How does it fit in?", and I wasn't really sure... But I'm a huge fan of Gitcoin as well. I think the interesting way you fund issues through bounties, specifically bounties funded by cryptocurrencies, is really an interesting process, because the sky is the limit. But you've got this whole Web 3, and you've got these hurdles... And I've heard Kevin say "We're in it for the long haul." This is not a "next year, or the year after, trying to solve this problem." The long tail is what you are focusing on, and I think it does make sense. In the short-term, Code Fund oddly fits, but in the long tail, it very tightly fits, if I have my vision on correctly for what you're doing.

**Eric Berry:** \[01:12:29.17\] I think you're right. I think you're exactly right.

**Adam Stacoviak:** So maybe to close, I like asking this one - I didn't prepare you for it, so if for some reason you don't have something for it, no worries, I've got a back-up, but... What's something that's super-secret for you, for Gitcoin, for Code Fund, for ConsenSys? What's something that's super-secret, that not many, or no one knows about, that you can tease or share here on the show today?

**Eric Berry:** Now that you mention it... \[laughs\] I think integrations is gonna be a huge part of the future of Code Fund. The reason I say that is because as far as I've seen, developers aren't wanting to go and like "Go over here and set this up, and then copy over here and inject your script here..." - all this stuff just to be able to get paid.

The direction that I would like to take Code Fund is more of an API-driven platform that other applications can integrate into, and provide ethical advertising for their users.

For example, later this year we will be doing a full-native integration with CodeSandbox.io. What that means is on Code Sandbox you'll be able to click on your preferences, click on integrations, click on Code Fund, and then it'll set you up an account automatically, and then you can optionally add an ethical ad to your shares, whether it be on your website or your embeds, and then you as the developer will get paid for those.

We have another integration coming in November, and this is being put together by our good friends over at Nuxt.js, Sébastien and Alex Chopin, two genius brothers who created Nuxt. Back when I started announcing that there were issues with GitHub, I think in December, Sébastien and his brother decided "I think that we can help Eric and I think that we can help Code Sponsor by creating a way for actual repos to get funding." So right now that's the biggest problem - I can't fund repos directly, because unless that repo has a website, it can't happen.

In the next few months, they're launching a tool that will integrate directly with GitHub, and it should allow for us to be able to help a lot more people very quickly.

**Adam Stacoviak:** Integrations is an interesting perspective. Code Sandbox is actually -- if that works out, you've got a proven model to easily go to the Code Pens or anywhere else where people are sharing their code, and you're giving the individuals who are actually sharing examples and moving the needle of change in how things are done... That's really interesting. Potentially even Glitch, or other community sites that essentially say "Hey, here's my stuff", and if it gets enough eyeballs, you give that person the ability to integrate ethical advertising.

\[01:16:03.11\] I think you've really gotta go back to Eric Holscher and buy him some dinner or take him out or give him a vacation at some point, or something... Because with that as the underlying DNA, it's gonna be very difficult to question you and your motives.

**Eric Berry:** Yeah, yeah. And since I'm a developer, I make "good enough" money, I'm a privileged white male, living in a rich town in Utah; I acknowledge that I'm privileged... I'm not doing this for the money. I just want to make a difference and help people, and I wanna remove the "I" out of the whole thing, and eventually make this to be something that belongs to the community... Because I think that's really -- the adoption of Code Fund, or any solution that's gonna come about, has to be adopted... The only way I think it will be adopted is if it is completely open and ethical, and maintain that way.

**Adam Stacoviak:** Yeah. Eric, it's been fun going through your story. There's parts I knew, parts I didn't know, parts I was really curious about, and I'm just left with a ton of respect and excitement for your future, the work you're doing with Gitcoin and ConsenSys, and particularly helping open source developers find ways to sustainably get funding for their work, that doesn't require them to do a ton of change, or change at all, really, to how they're doing day-to-day work... And that's just an amazing mission.

Any final thoughts or closing advice you wanna share before we close out?

**Eric Berry:** Mainly, my appreciation for the community. Once I started entering this world of funding open source and helping find solutions, I've found so many amazing people and so many amazing efforts towards this goal. I guess one thing I should share - and I'm not sure when this will be released - is in October we are going to be at the Sustain Summit. That is a one-day event, and a bunch of people will be there to discuss how to help continue sustaining open source, and if you can make it - I hope you make it. If you can't, I hope you follow up; they're currently looking for sponsorship right now as well, so there's a sponsor page there... And if you're there, I look forward to seeing you.

Also, I will be at GitHub Universe. We are sponsoring again... \[laughs\]

**Adam Stacoviak:** Nice! They let you back in the door?

**Eric Berry:** They let me back in the door, but under the name Gitcoin.

**Adam Stacoviak:** Nice.

**Eric Berry:** So Gitcoin is the sponsor, and yeah, we will be there. Code Fund will be very well represented. Come get your T-shirts and your swag. If you wanna hear any more details, just come talk. \[laughs\]

**Adam Stacoviak:** That's so awesome. It certainly leads into the "focused on a mission." You keep knocking at the door, and I like that about you. That's resiliency at its best.

You mentioned Sustain - sustainoss.org. I love Pia and everybody else involved in that conference. We won't be able to -- I'm not sure if we're gonna be able to make it there this year...

**Eric Berry:** Oh, man...

**Adam Stacoviak:** With it being in London it's a little harder for us. We don't have plans yet, but we had an idea that we haven't began to execute on, for us to send one person... So you might even see us there, but I'm not sure.

**Eric Berry:** I hope so. That's where we met last year. That's where we met.

**Adam Stacoviak:** Yeah, that's right. But Eric, thank you so much for your mission, man. I appreciate it. Stay in touch. We love you here, and we can't thank you enough for this mission. It was so much fun talking on the show. Thank you.

**Eric Berry:** Thank you, I appreciate it.
