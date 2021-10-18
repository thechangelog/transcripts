**Adam Stacoviak:** Welcome back, everybody. We're back with Sam Soffes. He's the famous guy from the last show, he's the famous guy of this show, so... Sam is back. How are you doing, Sam?

**Sam Soffes:** I'm doing well, thanks for having me again.

**Adam Stacoviak:** "The famous guy", I like that.

**Sam Soffes:** I should use that.

**Adam Stacoviak:** You've become more and more famous though, I'd say.

**Sam Soffes:** I mean, I guess that's good; I don't really know.

**Adam Stacoviak:** We talked heavily in the last show, so part one, if you haven't listened to it, go back to 5by5, or scroll back in your index on InstaCast, or whatever you listen to this podcast in, and check out the previous show because it will probably give you some insights to what we're gonna talk about in this show, so... I probably wouldn't listen to this one first if you're listening to this now.

In the previous show, Sam, we talked quite a bit about your past. We even pulled out some very personal topics which I think in your blog post that you posted today about being back on the show, you said that was like the first time you talked about personal things of your life to that degree.

**Sam Soffes:** Yeah, definitely. I mean, I wrote that blog post Four Years last year, I guess, and I touched on it -- it was the first time I mentioned it ever, so this is the next time I've really talked about it at length.

**Adam Stacoviak:** And the link he's mentioning is in the show notes for part one, so you can check that out there. I'm pretty sure it's there. If not, I think it's in your About page, isn't it, Sam? Or what is that -- kind of a biography you've written about yourself.

**Sam Soffes:** Yeah, it's just a blog post from a while ago, it's called Four Years.

**Adam Stacoviak:** I'm sure that if you search "four years sam soffes" on Google you'll find that, so... Happy searching, everybody, if it's not in the show notes. Alright, so let's get down to this show. We've got you back on the show, you're the -- I guess we should call you the designer and the developer at Nothing Magical now, right? Because you've taken on a brand new title recently.

**Sam Soffes:** Yeah, I kind of went through all my social networks and changed -- before I was just "iOS engineer", or whatever I'd use. Lately, I've been using "Developer and Designer." Putting developer first was intentional, because I think I'm not really that great of a designer. But I do spend a lot of time designing things, so I figured I should put it in my title.

**Adam Stacoviak:** Well, that's the best way to do it. You say it yourself, best we'll talk a bit more about this topic later, but... You know, kind of learn by doing is also just -- to be that you kind of have to be calling yourself that, right? It's almost to the same degree.

**Sam Soffes:** Indeed, yeah.

**Adam Stacoviak:** So you can't be something you don't admit to yourself that you are.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** And sometimes all it is is a title that it takes to do that. We talked at length about a lot of different topics in the past show, and I think the reason why we're doing this part two really is just to dive into more of the inner workings of what you've been doing recently with Cheddar. I know you've had some -- I wouldn't say it's drama, but you've had some opportunities that have jumped at you. I'm assuming that business has been better... I mean, the first two weeks you did $2,100 in revenue, which is not bad. Has that jumped quite heavily?

**Sam Soffes:** \[03:51\] Yeah, definitely. I just looked, and my credit card alone is $2,200, so more revenue comes from iTunes, and I haven't looked at that today, but... Yeah, I would assume it's almost double what it was last time, for like total. My little graph here is going up, which is awesome.

**Adam Stacoviak:** That's good. I mean, going up is good, right?

**Sam Soffes:** Yeah, it seems like whenever I do an announcement of some sort, or blog post, or I go on a podcast or whatever, I'll get a big spike in usage and users. Then it falls off a little bit, and then whenever there's a next thing it picks back up. I guess the lesson there is I should always be podcasting.

**Adam Stacoviak:** Yeah, there you go.

**Sam Soffes:** Yeah, it was kind of trickling off, and then I open-sourced Cheddar for iOS two days ago and I had like 10% growth in one day, which was huge. And now it's trickling off a little bit. It's still way higher than it was last week. I assume in a week or so it will fall back to more flat until I do another announcement.

**Adam Stacoviak:** So since we're talking about numbers, I think the one thing we didn't really dive in deep enough in the last show -- I don't think we mentioned price at all, and your application Cheddar is extremely, I would say, affordable to most people... $2/month, or what is it, $6 for three months for your services?

**Sam Soffes:** Yeah, so it's just $2/month, or $20 for the year. But on iOS you can't do reoccurring subscriptions, so I have to make you pay in chunks, so it's like $6 for three months, you know, because three times two.

**Adam Stacoviak:** Is it tough to explain that to people, like just normal app users? So aside from understanding "Oh, iOS works this way", is it difficult as a developer to explain that kind of stuff to your users?

**Sam Soffes:** Some people are like "Hey, I really don't wanna have to worry about it. I'd rather you just automatically bill me in three months." I was like, "I know, I want to, but I can't if you do it in the app", and in the app I'm not allowed to promote doing it on the website, due to Apple's terms. It's pretty unfortunate. Basically, in three months when the first set of subscriptions expire, I need to email everyone "Hey, you need to upgrade, and handle that in the app." I haven't even built that yet, because I have another month or so to go... Or two months, I guess. I'm sure it'll be annoying.

I wonder if when I email people that their subscription is up, if I can be like "Hey, if you do this on the website, you don't have to get these emails again." Because I make way more money if they do it on the website. I don't know, we'll see. I don't wanna break Apple's rules, but it's a terrible experience for the user, and they don't really give you another option, so...

**Adam Stacoviak:** Well, the app is free, right? So you're paying 30% to Apple for your recurring revenue that might happen inside the app...?

**Sam Soffes:** Right. All money you take via the App Store, they get 30% off. That includes in-app purchases.

**Adam Stacoviak:** This is a bit of a technical question, so does the website do different transactions than the in-app?

**Sam Soffes:** Yeah, so I use Stripe.com. They're a really spectacular payment processor. If you're taking money on the website -- it's amazing. Anyway, they charge 2.9% plus 30 cents per transaction. So on $1.99, that's a ton of money, which is unfortunate. But on larger things, like if I sell T-shirts or if you buy a year, I do pretty well, comparing to iTunes.

**Adam Stacoviak:** Let's dive a little deeper into I guess exactly the business model. The business model isn't exactly a rate sheet for what you charge for the app... Let's talk about the long-term, let's be quite real here. You just came from Hipstamatic -- so if you're just catching up with this and you decided to continue listening, then go back and listen to part one; you'll learn that Sam worked at Hipstamatic, he is a good, well-experienced iOS developer, so he gets paid well, so he's obviously making a good income, but then he decides to do his own thing in lieu of enjoyment of life, which is totally a good thing, but I can imagine you've got expenses, you've got different things...

\[08:32\] How do you manage what the direction of this business is doing, I guess in particular with Cheddar, since this is your first product? How do you manage the direction and revenue direction in lieu of the income you actually have to make, as you are a one-man army, right?

**Sam Soffes:** Yeah, so I sat down the other day with a friend, and we went through "Here's all my personal expenses, here's all Nothing Magical expenses, and users", and started doing projections based on what I think will happen, and have all my expenses and the company expenses all together, so I can kind of see "Okay, I need..." -- basically, if I can get 50,000 users and my conversion into plus stays the same, then I'll have enough people paying where I can live on it and be totally fine. Everywhere in between, and -- you know, if I add team plans, then how that changes things... I don't know, it's a little scary.

I just sold a bunch more Apple stock. All my savings is in Apple stock, and I sold like five figures of Apple stock. It's gonna go quick, because my rent is ridiculous in San Francisco, so... I don't know, I have one more big chunk of Apple to sell that I'll probably have to do in a couple months, and then once that runs out, I'm done, so hopefully I'll -- according to my projections, I should be okay in October, so I need to hurry up and finish some things.

**Adam Stacoviak:** So with all that in mind - you said you got into this game because you wanted to focus on not just being an engineer, you wanted to actually focus on building something, a product, so now you're in this product development role; you run the company, you're developing a product, but you've also got revenue constraints that you're kind of adhering to, so you have to do certain things to be able to create revenue... But does that always line up with the direction you really wanna take the product?

**Sam Soffes:** Yeah, I mean -- like I was saying earlier, announcements and such really drive growth, and product announcements are exciting in general. I have like -- okay, I need to make a way to see the archive, because everyone wants this, even though it's a really stupid feature; it's like, you deleted your task, you don't need it... I'm saying "archive" for technical reasons, because it's a paranoid delete and not like -- I hadn't planned on adding to see things you've deleted for a super long time...

**Adam Stacoviak:** I never get back to what I've deleted. I just forget them.

**Sam Soffes:** Right. I think because people can't have it, they're like "I want this!" Anyway, that's really annoying... So that's on my list, and I think people will be excited. A lot of people are like "I'm gonna upgrade once I can see this." I don't know, I love when users give ultimatums for features... It's like, "Okay, well thank you for threatening me; I'm gonna keep doing what I was doing." But anyway, so there's that, and Cheddar for Mac is next. I think the last time I said I'd have a beta in like a couple weeks, and it's still...

**Adam Stacoviak:** Not there?

**Sam Soffes:** \[11:48\] No... I've been busy. Open-sourcing Cheddar for iOS actually took more time than you'd expect, and I'm working on some web fixes and a lot of different things, so I haven't really had a lot of time to spend on it yet... But hopefully in a couple weeks, we'll see. But anyway, that's the next big thing, and I think that will drive revenue a lot, because I already have some really high profile tech blogs that said they wanted to do a piece on it.

I don't know, I'm kind of not really worried; I'm not super-focused on revenue. I really don't look at it that often. Today was the first time I looked to see how much income I've had since I think the last time we talked. I'm pretty much just heads down on "These are the features that need to happen to make the product better." Making it better in general makes people happy, and making people happy is more conversions, which is more money.

I guess I'm far away enough from my end of money, but I'm not super focused on it. I think it's good, because I can make better decisions for like what's better for the product and not better for my wallet. I would assume as time starts running out, I'll be more focused on that, I don't know. It'll be interesting to see.

**Adam Stacoviak:** It's a tough road to walk, I wanna say. It takes some courage, and I commend you for doing it. I totally have faith that you can pull this off. I know that you've got all the right skills and you certainly gained the right kind of design jobs to make it work. Keep going and cross our fingers, right?

**Sam Soffes:** Yeah, thanks.

**Adam Stacoviak:** Aside from crossing our fingers, let's talk about one number you mentioned in this past segment just now... You'd mentioned if you got 50,000 users - are you able to talk about how many users you have now and what the chasm is between those two?

**Sam Soffes:** Sure. I haven't actually told anyone except the last time I was on Founders Talk, so I guess I'll say it again. I'm at 14,949 right now.

**Adam Stacoviak:** That's pretty accurate.

**Sam Soffes:** Almost 15,000. It'll be 15,000 by the end of the day, I would assume.

**Adam Stacoviak:** What kind of velocity do you have? How many are you getting per day? Do you do any sort of metrics against users per day and what impacts that?

**Sam Soffes:** Currently no. I haven't spent a lot of time on my data collection and stuff yet. I wanna add Mixpanel, so I can have pretty graphs of all my stuff, but I just... I'm doing a lot of stuff, I haven't made time to integrate it.

**Adam Stacoviak:** Yeah, just as a side-note, at Pure Charity we're also looking at Mixpanel because we wanna make sense of some of our data. The reviews we've seen of it and the stuff we've seen about it just gives you lots of ways to dive deep into your data, so we're excited to do learning based on data.

**Sam Soffes:** Yeah, Mixpanel looks really great. I'd rather do it myself and have a nice, pretty, custom solution, but -- because they're pretty expensive. I would definitely have to get the middle plan, which is like several hundred dollars a month.

**Adam Stacoviak:** Well, the first plan is $150/month... Is it the one above that?

**Sam Soffes:** I believe so...

**Adam Stacoviak:** Because they have a free plan, I believe it gives you around 50,000.

**Sam Soffes:** So you get 25,000 for the free plan, 500,000 for the $150, and two million for $350. I'm pretty confident I'd get past 500,000 pretty quickly. I don't know. Because basically I wanna track all the API calls from all the clients... Pretty much everything ever, so I can see which third-party apps are being used, or how the iOS app is being used, or track conversions from sign-ups on iOS versus web.

\[15:59\] I wanna track pretty much everything, and that's a lot of data points. I don't know, I just haven't spent the time to integrate it, because I'm...

**Adam Stacoviak:** Busy.

**Sam Soffes:** Yeah, I'm doing a lot of things. Yesterday I didn't really do anything except review pull requests for Cheddar for iOS, which was awesome... And today I haven't written any code.

**Adam Stacoviak:** Wow, it's a no-code day.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** I wanna talk about open-sourcing of Cheddar, so we'll hold that thought for and we'll talk about some of those things you're reviewing, what the impact is to Cheddar iOS... But I'm still kind of curious, just in terms of -- and I don't wanna make you worry, because I don't want you to come on this podcast and be like "Oh, I didn't realize really that 14,000 to 50,000 - that's a big gap... What do I do in between here? And I've got October, and I've got these needs and this different stuff...", but what kind of things have you thought about how to get people to help you build a tribe? So people who use Cheddar who wanna share Cheddar with other people and say, you know, "I use Cheddar. It's really simple, it's really easy, it's affordable" - whatever the reasons are. How are you incentivizing people to help you get to that number?

**Sam Soffes:** So... And by the way, I've only been out 33 days, or 30-something days, so 15,000 is --

**Adam Stacoviak:** That's a lot.

**Sam Soffes:** Yeah, I'm pretty happy with it. But as far as everything else goes, if you have plus, there's special stuff on the account screen that's like "Hey, thank you. It'd be awesome if you tweet this." I haven't really spent a lot of time. I'd like to build some sort of -- if you refer someone and they sign up, I'll give you something free.

There's a lot of things I can do to improve my conversion, but I haven't really had time to work on those things. I mean, those are all important, but I think right now getting a couple features that everyone really wants is kind of my top priority. Then once I kind of get Cheddar for Mac and all these little features wrapped up that everyone wants, on all the platforms, then I can kind of like step back for a minute and optimize some things, or start on the next big project, which is Sharing, or whatever. I don't know, I haven't really spent a lot of time on that.

I guess one thing I did is if you have a Twitter.com or GitHub.com email address, you get a free account for life, with the hopes that those people would share how great Cheddar is, because those people are like huge influencers, at least in the tech community. And people in the tech community in general are influencers of the rest of the internet.

Not a lot of people signed up, I don't think I did a good job telling people that work at those companies about it, but... I don't know. That was one thing I tried. It worked okay.

**Adam Stacoviak:** Yeah, I was gonna ask you about that because I was bummed that PureCharity.com wasn't on the list, for one... That put a frown on my face as soon as I saw that, but... Nonetheless, I don't -- actually, I have an account with Cheddar and I don't use the paid plan yet; I'm still kind of cool with two. Two has worked out for me, so I hope you don't get upset about that either.

**Sam Soffes:** No, it's fine. I've had a couple people like "Hey, I was paying, and honestly, I just don't need more than two. I love your service, but I just don't need to pay..." I was like, "No, it's fine." For a while, I was gonna do like 20, or 10, and then I was 5, and then I was like "Okay, I'm gonna get two", because it's like, I don't know... And for a while it was one, but I wanted you to have the experience of creating a list, so you'd know what you're missing out on, I guess. And before, I had a really fancy, cool design for creating lists, and then I cut it because I didn't have time to finish it. Anyway, I don't know.

\[20:07\] There's definitely things I can do to improve the conversion, because right now a lot of people don't even know Cheddar Plus exists, because they only have two lists and they don't even know. In the next iOS update I'm gonna add a little more messaging, and on the website... There's a lot of things I can do to optimize, I just need to make time for it.

**Adam Stacoviak:** Let's talk about making time. You said the reason why you're not doing those things, you're not focusing on optimization is because you don't have time and you have higher priorities. How do you as the sole person that runs this product -- I don't really know how to word it exactly, but what do you... I'll stumble with my words just a bit more here, sorry about that, but what kind of information do you use? That's the word I was looking for - what information do you use to set priority on what you should be working on and what you should work on next, considering the fact that you're a sole dude doing this? You obviously know your business, as well as the financial constraints and the direction you wanna take the product, so how do you make those choices?

**Sam Soffes:** Yeah, that's good. I start and I finish every day doing support. Any tweet or text message or phone call - even though one person has called - or email is all into the same place and I just go through all of them definitely when I get up and go to bed, and sometimes in the middle of the day. It's really great to hear from everyone, like tweets saying how much they love it, or emails saying they have this problem, or whatever. It's kind of like I don't really have -- I remember 37signals saying this a long time ago, but when they got feature requests they didn't write them down anywhere, they were just like "Okay." And then when they were like, "Hey, we need to make a new feature", they were like "Oh yeah, we should do this, because a lot of people asked for it." Versus writing down every little thing and trying to do every little feature that everyone requests.

**Adam Stacoviak:** So basically if you hear it often enough it sticks in your mind, and when it comes time to think about new features you use your memory.

**Sam Soffes:** Yeah, I mean, I have a Cheddar list with all the stuff. If it's something I haven't heard before, I write it down just in case, like "Oh, maybe you wanna work on that." Some of them it's like "Oh, no one's asked for that, but I really like that feature and I'm gonna add it." Like tag autocompletion, which is pretty much done, I need to deploy it on the web.

Anyway, so I'm kind of just like -- okay, this week almost all my email besides actual support has been about people wanting to look at the archive, so it's like "Fine, I need to work on this thing."

**Adam Stacoviak:** "...I'll give it to you."

**Sam Soffes:** I don't know, that's kind of how I do it. Then I'll kind of jump back and forth between like, okay, there's no bugs on the web right now... I haven't had an error in my monitoring in a while; everything's pretty happy. Okay, I'll go work on Cheddar for Mac, or whatever else, or Cheddar for iOS. I don't really have a formal way, I just kind of -- whatever I'm motivated to work on, and that seems to work out pretty well, because if I'm not motivated to work on Cheddar for Mac, I just won't get anything done. If I go switch to \[unintelligible 00:23:27.11\] I can knock out a bunch of features right away if that's what I feel like working on that day. I guess I don't really have a way to do that. I just kind of do whatever I want, and then it works out pretty well, I guess.

**Adam Stacoviak:** So you're winging it, pretty much...

**Sam Soffes:** Yeah, I mean, I don't know what I'm doing, but it's good.

**Adam Stacoviak:** It's good. It's good to be transparent; I think that might even be why people are rooting for you to see this thing through.

**Sam Soffes:** \[23:53\] Yeah, I mean it's funny people Tweet that Cheddar has good support. I don't think they know it's just me. I don't know if it's good support, I just reply to everyone... If it's in English. I don't usually take the time to do ones that aren't in English, which is kind of rare (a couple a day). I don't know, I mean if making everyone feel heard and just being honest about what I'm doing seems to work out really well. More and more I try not to keep timelines ever, because things will happen and I won't finish.

**Adam Stacoviak:** Like coming on Founders Talk Part One of your interview and talking about the Mac app coming out, and it's not here.

**Sam Soffes:** Yeah. Well, I mean, I do actually have one and it's kind of usable, but it's definitely not up to my standards where I would even wanna give it out as a super terrible alpha. So I'm kind of just holding off, because I want it to be great, like the rest of Cheddar, and right now it's just really terrible.

**Adam Stacoviak:** What would change -- I don't know if you can dive into this one that much deep, but let's keep this in shallow; what would change between what happens in Cheddar for the web, versus the Mac app? How much of being a Mac app does it enhance the actual experience of using it?

**Sam Soffes:** So it's a lot more similar to the iPad app than it is the website. It's kind of like the iPad app that looks like -- only like it looks like a Mac app and not some silly thing, like RDO or something that doesn't look like a Mac app. With keyword shortcuts, and just like animations, better drag & drop, and... I don't know, it just feels native and it's really great; well, I mean not right now, it's not really great, but it will be really great. The web feels like a website and doesn't really feel that good. I don't know, I don't use Twitter.com, I use Twitter for Mac or Tweetbot for Mac, and it's such a better experience even though it's doing the same thing, even though some of them do less than the actual website.

**Adam Stacoviak:** I guess what I was thinking about with the web, because I'm actually one of those guys that uses Cheddar for the web when I'm on my desktop, but I use it with Fluid - I create a Fluid app with it, I used your icon you provided in your... I think you can just set it via Fluid, because you were preparing for that. And it works out fine for me, because it's a to-do list and I think when we look at Cheddar it's simple for a reason, and I have my keyboard, so I can do hashtags really easy, because it's just like anything else would be if you have a keyboard... But I don't know, I just didn't think it needed to have this full-on Mac app anyways.

**Sam Soffes:** Yeah, I mean I definitely see that side of it, and for a while I was going to make more of a web view -- basically like a more formal Fluid app, right? Just a web view... Like the RDO app, just a web view. But I don't know, I feel like the whole Cheddar ecosystem is all about excellence and simplicity, and a native Mac app can be so much better than a web view. That was really important for me. A lot of people have replied like "Hey, I'm so happy you're doing that. It's gonna be really great, and I can't wait to use it."

I know Mark Jardine tweeted, he was excited about it, and it totally made my day... The Tapbots designer.

**Adam Stacoviak:** Yeah. He's actually been on the show before.

**Sam Soffes:** Yeah, I remember I've listened to that one. So yeah, I don't know, it's just kind of -- I mean, I haven't done a Mac app since like, gosh, like 2006 or something.

**Adam Stacoviak:** \[27:59\] It's been a while.

**Sam Soffes:** Yeah, I'm excited to do something new and learn... I don't know. It's good.

**Adam Stacoviak:** We'll earmark that learning topic for a bit later in this show, but I wanna turn left and talk about open source, because in the last show you talked about you might open-source Cheddar for iOS, and since then you have open-sourced it and it's at your company's GitHub, which is NothingMagical; so if you go to github.com/nothingmagical you'll see the stuff that Sam's working on there for his company, and one of those happens to be Cheddar iOS.

**Sam Soffes:** Yeah, I almost didn't do it. Someone was talking to me briefly about wanting to buy Cheddar, so I was like "Well, I shouldn't do it because it will make Cheddar less valuable." Then I talked with a friend about maybe him being a co-founder, and then he didn't because whatever; I was like, okay, well now that all that's settled down and it hasn't happened, it's just me, so I'm gonna open-source it because I wanna help, and because I feel like it'd be really cool, and it's a good source of sample code, so people can learn from it... Just learning by example as an iOS developer in general, or how to make a great app around Cheddar, or whatever else. So yeah, I just pulled the trigger and did it. I don't know if it's a bad business decision, but whatever, it's done.

**Adam Stacoviak:** Let's hope not. Some parts of the readme that made me wanna dive a little deeper on this was just some things you say in your license. In your readme you say your licensing is a simplified BSD license, and while it's not totally forbidden to take this exact app and do something else with it, like redistribute it or even charge for it or do something else... Is charging in that clause? Is there anything about charging for it but you can redistribute the app?

**Sam Soffes:** So BSD -- with the specific one that I have you can do whatever you want, you just can't use my company name or this product's name in your marketing. I think that's the only restriction, pretty much.

**Adam Stacoviak:** So you could take the exact same thing, change a couple colors, change the name and sell it?

**Sam Soffes:** Honestly, if you didn't even change the name or anything and just put it out there - I don't have the legal force to do anything about it. It would be very expensive for me to hire a lawyer and come at you.

I was looking at all these other licenses, and it's basically like hey, if you contribute anything, I own it - I'm being very specific about that - and you can't redistribute this or sell it or do anything with it; it's just like "Here, you can look at it and you can help if you want. I own that, but..."

A couple of people were like, "You know what, if you're gonna make it open source, make it open source. The whole point of open source is it's free and open." I was like "Yeah, you're right", so I just picked -- "We'll just use BSD, a simplified one because there's a bunch of complicated ones; I'm like "Screw it, let's use the simplified one." It's do whatever you want. If you wanna be a jerk, fine, be a jerk, but please don't.

And already someone on Hacker News was like "Hey, I'll just take out the Cheddar part and just use it locally on my phone and I don't have to pay and I can do whatever I want." I was like, "Okay, fine. Have at it." I don't know.

**Adam Stacoviak:** If that's your thing, then... Yeah, that's not your customer, man; you don't wanna have him as your customer anyway. He's better off taking your codebase and doing his own thing, because he would send you crappy support requests and stupid features and probably would have a failing credit card or something like that and make your life hell in other ways.

I'm not worried about this, but I just think, like, you do have an open door, but I think the internet, at least in the community you talked about, which was the early adopters... You mentioned Twitter and GitHub, if you have that after your @ sign for your email address, then you get to use Cheddar for free...

**Sam Soffes:** \[32:13\] Yeah.

**Adam Stacoviak:** You know, I did wanna ask a question about that... I'll hold on that one for a second, but if you go on that route, we do kind of surface around an audience of people in that community, in the developer/tech/early adopter community - or geeky community I guess you could even say... We're not exactly all do-gooders, but we don't wanna screw anybody over, and that would be a blatant "Screw Sam over" kind of move. Whoever would do that to try to take revenue away from you... Because that's what you're really concerned about - not taking your code, but misuse of it to impact your revenue path and the overall impact of Cheddar the product, right? That's what you're really concerned about, not so much the code.

**Sam Soffes:** Yeah, the card is open for that reason. I don't care what you do with it, I just prefer you do something -- you know, if you're grateful for it, then buy a T-shirt or spread the word about Cheddar on Twitter. It would be awesome, you know? Or if you wanna help me, then great, but... If you wanna be a jerk, that sucks, but I can't do anything about it.

**Adam Stacoviak:** That's pretty funny... So if you do wanna do something unique with Cheddar and you don't wanna have a paying version of it because you don't need to and you wanna sport this awesome bright orange T-shirt with bright white letters, then you can totally rock it for $22, I mean... Do it, right? It doesn't have $22 to give you if they're gonna utilize your code or learn from your code. I'm sure the SSToolkit's in it, right?

**Sam Soffes:** Yeah, yeah.

**Adam Stacoviak:** You're using all of your good stuff in there, so that's like getting a chance -- that's almost doing your play-by-play like Geoffrey Grosenbach does with PeepCode, right? It's not the full-on play-by-play, but you can do something with this code.

That would be kind of neat if you did what Steve Klabnik has done in the past, where he would just show his terminal session for like an hour and walk you through whatever he's working on, and if you watch it, you watch it, if you don't, you don't... It could be a nice way to do something fun around your codebase to even put more drama around it and more education around it.

**Sam Soffes:** That's cool. I should definitely do that.

**Adam Stacoviak:** The question I wanted to ask you about the after the @ symbol of the email address is being Twitter or GitHub, did you get any backlash about having favoritism towards certain people?

**Sam Soffes:** No, I mean... A couple people emailed and were like "Hey, I work at Uber. I'd really like to get a free account." Or someone was like "Oh yeah, the people at GitHub and Twitter really need free stuff."

**Adam Stacoviak:** Right. That's what I was thinking... \[laughs\] They don't really need free stuff.

**Sam Soffes:** I don't know... A bunch of people were like "Oh, this is really smart."

**Adam Stacoviak:** It is smart.

**Sam Soffes:** Kyle Bragger - he founded Forrst - was screaming like "Hey, this is genius! I wanna know how this works out." I was like, "Thanks so much, I'm a big fan! This is awesome!" And a couple people - going back to people being jerks, like "Hey, I just signed up and I don't work at Twitter. You should really verify email addresses" and I was like "Please don't be a jerk. If you wanna steal from me, fine, but... Whatever. I'm not gonna go out of my way-- I don't know, all that in general is just like how annoying am I gonna make it for you to steal from me? It's like, I'd rather you just not be a jerk and I don't have to worry about it, but if it's like a problem, I'll address it. But it was just one guy that wants to steal from me... Then fine, be a jerk.

**Adam Stacoviak:** So be it, right? I mean, it would probably be more of a waste of time for you to \[unintelligible 00:35:46.28\] that person down than it would actually help you out.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** \[35:53\] You mentioned Kyle Bragger, so for the listeners that are listening to this show, he's another person that Sam mentioned that's also been on this show, so... I forget which episode it is, but you can go back in the Founders Talk archives and hear about Kyle. This is just before they sold or got acquired - I'm not sure which one it was; I guess it's the same thing, right? - by COLOURlovers though. It's just before that, so there's no mention of that whatsoever, and we didn't even talk about it.

**Sam Soffes:** Awesome. I'll have to go listen to that. I haven't heard that one.

**Adam Stacoviak:** Yeah. Kyle has had a fun life, let's just say that. He's a cool dude, I enjoy chatting with him, and a lot of people listened to that show and loved it, because who doesn't love what he's done at Forrst. He's done unique things - this is totally a side topic, but Forrst has always been compared to Dribbble in a lot of ways, and there's a lot of ways they differentiate themselves, because they weren't trying to beat Dribbble, it just happened that they both came out around the same time, with similar ideas. But he's done so much cool stuff and has grown so much as a person and so much in the community, too. It was really awesome having him on the show.

**Sam Soffes:** Yeah, he's fantastic. I was about getting funding. I wasn't really sure what I was gonna do, and he was like "Hey, email me" and he gave me some advice. He's been awesome.

**Adam Stacoviak:** So I guess speaking of funding, you mentioned yourself that you might have been seeking to be bought, or somebody tried to buy -- I'm not really sure what the exact story is, but are you looking for funding? Are you looking to get bought? What's the plan?

**Sam Soffes:** I'm definitely not looking to get bought. Well, maybe, I don't know. If someone wants to just give me a stupid amount of money, that'd be awesome. I would take that bunch of money and go work on something else without the financial pressure of what I'm doing now... But you know, that's definitely not the goal of Cheddar, to get acquired.

For a lot of startups the whole point is like "Hopefully Google buys us, or Facebook." I make money, I don't really -- that's not my business model. My business model is to charge for something. Startups wear me out. Anyway...

So funding would be great, because I wanna hire some friends to work on it with me, because I'm tired of working by myself. It's getting lonely.

**Adam Stacoviak:** Yeah, you're like on an island, right?

**Sam Soffes:** Yeah, I mean... I left my apartment today solely to mail T-shirts that people bought, and I haven't left my apartment in the last several days, except to go to the mailbox... Which is nice, it's a couple blocks away; I can get outside for a couple minutes. But anyway...

The idea of funding is interesting, but I wouldn't really wanna take it if someone wants to invest in Cheddar, because you know, it will force me to focus on growing it as big as possible and trying to get it up to make a big exit, so someone can acquire it. That's most VC's model, and I'd rather someone invest in Nothing Magical and the team I'd build to make great products... Because I have a couple other things I'm really excited to work on once Cheddar sustains itself, and I can take time to work on the next thing.

So that's just a tough fit... I think most VC's probably wouldn't trust some kid to not lose all their money, I don't know.

**Adam Stacoviak:** It's an interesting perspective though that you had there, which is not to try to buy Cheddar or something like that, but to instead become a part of what Nothing Magical can be, because... I don't wanna downplay what you've done with Cheddar, with the product itself at all, but I'll say it like this, because this is just the easiest way I can think of it - it's that if you've done something as well as you have with Cheddar, which is a very simple app in a very saturated, low-cost market, if you've done what you've done here, imagine what you could do with something that has something a lot more viable behind it, and that could make a lot more money.

**Sam Soffes:** \[40:05\] Yeah, I mean Cheddar -- I wanted to make something consumer-facing, because that's... Like, if I tell my friends, they're excited about that, versus if I'm making some enterprise product, no one cares, right? But yeah, a to-do app is stupid, right? Anyone can make a to-do app.

**Adam Stacoviak:** It's funny when you say that though, because it's self-deprecating. You're like, "What I'm building is stupid, in a sense."

**Sam Soffes:** It's so silly, it's a to-do list... They're not hard. Granted, there's not any good ones that I like, so I'll make one, and people seem to like it, so alright... But yeah, I'm definitely not passionate about productivity software. I don't get up every day to make a to-do list. I get up so I can make a cool product that people are excited about. I'd rather make a much more interesting product that can service even more people, but right now Cheddar is my product and that's what I'll be working on for the next several months, unless something changes.

**Adam Stacoviak:** There was only one thing I wanted to talk about with Cheddar iOS being open source before we dial away from that... It was mostly around the product itself - what kind of impact have you seen to Cheddar directly from open-sourcing it? You mentioned sitting on pull requests, or waking up in the morning and the first thing you do is do support, and some of that is looking at pull requests and what not... So how much impact has come from the community that it's touched, and how long has it been open source - like three days or so?

**Sam Soffes:** Yeah, this is day three.

**Adam Stacoviak:** Day three.

**Sam Soffes:** So yeah, it's been spectacular. Before I open-sourced it, I put it in my Cheddar list of features and bugs into GitHub issues, so it's easier to work with it from code... And by the way, that's something I wanna do down the road, have the Cheddar list sync with other things, like Basecamp or GitHub... Anyway, it's just kind of a fun thing I need to figure out how to do well. Anyway, I just added all my stuff, and kind of like went to bed and woke up yesterday and someone had fixed -- added two features that I had on there, fixed a couple bugs, and then someone else had fixed another bug... It was like, "This is amazing!"

One of the features that this guy implemented I had planned on probably cutting, because I wasn't gonna have time to do it, and he implemented it and it was like "Great!" I merged it in, it all worked, and it was like "This is amazing!" I tweeted yesterday, 38% of the commits in the last two days are from people I've never met, and they're helping me build this product that I'm living off of.

**Adam Stacoviak:** Yeah, I liked that tweet... It was a good tweet.

**Sam Soffes:** It's so great! He actually replied, he's like "Well, we met for like two seconds at WWDC." I was like, "Oh... Well, thank you."

**Adam Stacoviak:** Yeah, sweet. \[laughter\]

**Sam Soffes:** Because the avatar was not his face, so I didn't really make the connection. But yeah, that's awesome! I'm so humbled by everyone's support, it's been great.

**Adam Stacoviak:** I have an idea for you to maybe make pull requests a bit more - I don't know if the word is "lucrative" or just to do it, I guess, to actually help you contribute to Cheddar, and maybe just the fact that to get to learn from your code and be a part of it is one thing, but some sort of incentive to get a pull request accepted by you could be that they get something on Cheddar for free, or a lower cost... Like, Twitter and GitHub get free accounts because they're early adopters and they're sneezers, as Seth Godin would say, but in this case, if you fork Cheddar iOS and you add something substantial or a cool feature that gets accepted, maybe you give them a month free or a free account, whatever makes sense to you.

**Sam Soffes:** \[44:10\] Yeah, it's definitely -- like I was talking about, I'm gonna send them a shirt or give them an account, or something.

**Adam Stacoviak:** Just something special is what I'm trying to say.

**Sam Soffes:** Yeah, absolutely. Because like, yeah, this awesome.

**Adam Stacoviak:** Yeah, what if they added -- if you've got ten pull requests in the next month...? I mean, that's not a big thing off of your back; yeah, that might be a shirt off your back, because you're giving away a shirt potentially, but you know, ultimately you might just come out with more time to focus on integrating a mixed panel, or focusing on conversions, or looking at that gap between 14k and 50k, a bit more in "What can I do in between here and there to get there faster, or better, or with better adoption, or even more active accounts or more paying accounts?"

**Sam Soffes:** Yeah.

**Adam Stacoviak:** It'd be kind of neat.

**Sam Soffes:** Yeah, I was hesitant to do something like that, because evaluating a pull request takes some time, and I'm very picky about how I do things... So I'll merge in a request, and then kind of tweak some things, and change it how I would do it, and go over it a little bit. It's not like a quick thing to just merge it and move on.

**Adam Stacoviak:** Right. Well, you have that green button there for a reason, right?

**Sam Soffes:** Yeah. \[laughs\] \[unintelligible 00:45:36.26\] bugs, and kind of test it a little bit. So it's definitely my time to merge in some of these things... So maybe once I have a better process for all of that, I'll make something a little more formal, but for now I think I'm just gonna -- you know, if you've done something valuable and you're helping out, I'll send you a shirt, or it can be an account, or something.

**Adam Stacoviak:** Well, let's talk about something else. I'll tee this one off in the best way I might know how - recently, you got a Nexus 7, which is kind of cool; you did the whole unboxing process, like everybody else did. It was crazy how hard that box was to open up... It was kind of neat to watch you go through the same processes, but you mentioned that making a to-do app is pretty easy, or that -- I can't remember exactly what words you used, but it wasn't that big of a deal... And you wrote this post on boredom and change, and you have a Nexus 7 now, so that's built on Android... Can we expect Android versions of Cheddar? Can we expect Android versions of anything from you?

**Sam Soffes:** Yeah, so I don't know Android at all. I installed the SDK, which was so painful... I know it's just gonna be terrible working with it. I really don't like Java, and just everything about it I just don't like at all. But the challenge of making a good Android app is pretty exciting.

I don't know, once I have free time - which who knows when that will be - I'm definitely excited to work on Cheddar for Android, but it probably won't be for quite some time before I'll even begin on it. But yeah, I mean... My post was kind of saying I'm tired of iOS, because I've been doing it for - like we were saying last time - the maximum amount of time possible, since I started when the SDK came out.

\[47:50\] I find myself enjoying writing server code and front-end stuff a lot more than iOS now, just because it's something new and exciting, and I can see the results of my work a lot quicker, versus spend several weeks on an iOS update and submit it, and then a couple weeks later people get to finally use it and it takes forever to update, and all that stuff.

So I don't know, I mean, I'm definitely not gonna stop doing iOS anytime soon, but it's just -- I'm not excited to write code just for the sake of writing code... But I'm excited to learn something new, and the challenge of making a quality Android product. Because on my Nexus 7 there's very few good apps, so I'd be excited to join the list of good apps on Android.

**Adam Stacoviak:** \[unintelligible 00:48:46.29\] really weird... My bad. That leads into another topic which we can just dive into as well, and this was a really popular blog post for you, which I think it's really awesome that you kind of said it so succinctly, because I think a lot of people will look to someone like you who's been established and has had the maximum amount of experience with iOS, all these different things about you we've said in part one and part two here... They look at you probably like, you know, you must have learned this from some sort of magical way, and realize in the end there's really nothing magical about what you've done... \[laughter\]

**Sam Soffes:** I love it.

**Adam Stacoviak:** But you know, you learn by doing, and you wrote this post on how to learn, and I think this is so neat, because the whole time I'm reading it I'm thinking "That's what I've done." Everything I've ever wanted to learn in life - I mean, even in school you do the same thing, but you don't just somehow get hit with a magic stick and suddenly you know Objective-C or whatever, or learn how the web works, or know how to look at data and find out what makes the most sense for conversion rates, or whatever your pain and pleasure is in this web world... But you've gotta figure out how to do it, so learn by doing - is it that simple?

**Sam Soffes:** Yeah, I mean, I don't know... I have a friend that's trying to learn iOS, and he bought a book... I was like, "Yeah, get this book to get started." And he's like spending months on this really simple project, because he's trying to learn how every little thing works, and he's treating it like school. He's studying, trying to learn every little thing, and it's like -- I mean, and college is even one more step further of like terribleness of learning for the sake of learning... While it can sometimes be enjoying, it's just like totally useless.

The best way to start is like "Okay--" I have a friend who did this, he's like "I wanna make an app that sends a tweet." I'm like, "Great, go do it." He's like, "Alright." So he found a book, he bought it, he started doing it, and now it's on the store, a couple months later. It's amazing. The best way to do this is to just like "Okay, I'm gonna start. What's the first problem? Okay, I don't know how to begin." Google "how to start iOS." Okay, "I need to download Xcode. Okay, what next? I need to learn Objective-C." Okay, google "objective-c." Just start.

I feel like everyone's thinking about learning, talking about it... It's kind of like a little frustrating. Before - I think I wrote this post years ago. My friends from high school were like "Oh, I wish I could do what you do", because they'd see I get paid a lot as an engineer (or used to), and they're working retail right out of high school... And it's like, "Well, no you don't. If you wish you knew how to do it, you would do it. It's not hard. Just start."

\[52:07\] Or even Ruby on Rails - I didn't know Ruby or Rails, and I watched a 15-minute video and I was like "This looks awesome." I downloaded it and by the end of the week I had a blog running. I didn't know what I was doing at all. I had no idea even how to use Ruby. I was just kind of like figuring out little things, and I had no idea what I was doing, but it worked... Awesome.

And seeing that first time when you make something that works is spectacular. Now you're motivated to keep going, versus like -- reading a textbook is like "Oh, this is so silly." Anyway, that was my rant for the week, I guess... It's like, just do it. And a bunch of people are like "This is amazing! I just ordered this book and I'm gonna start right now", and I'm like "Great! Do it! What are you making?" They tell me about their little project, and it's like "Awesome!" I'm glad I can inspire somebody, I guess, by just yelling at the internet. That's good.

**Adam Stacoviak:** That's kind of like your "Hello internet" stuff. You don't yell in that one, you're pretty calm... Most times at least. But yeah, you get to do your little rants here and there. I think this was a really good post, honestly. I think that so many people make learning something or figuring out how to do something a real challenge. Honestly, we live in a -- Brian Tracy said it best, but he said it like ten years ago. He said "We live in the best possible time of all time of the world."

A hundred years ago finding out how to do something was so much harder. You had to live within a ten-mile distance, because who wants to walk more than ten miles to go learn some new task? You had to be an apprentice, you needed to dedicate years of your life... It was what you did. But to learn nowadays, pop on YouTube, go to Google, Stack Overflow... Depending on what you're trying to learn, it's -- knowledge is pretty accessible these days.

**Sam Soffes:** Absolutely.

**Adam Stacoviak:** Now, that's also considering if you're in the right kind of world... I mean, you could be in a third-world country and have less access, but for the most part, most well-to-do people in the United States and in most prospering countries have pretty good access to knowledge and education, and if it's not formal education, it's definitely self-motivated education, like you're talking about here, "Pick up a book." Books cost $20-$30... Just start.

**Sam Soffes:** Yeah, I mean, if you have access -- if you have the ability to read my blog post, then you have the ability to go do...

**Adam Stacoviak:** Yeah, that's true. That's a good point. If you've read that post, then you're in that percent we talked about, of being in the U.S. or a country that's prospering and you have the ability.

**Sam Soffes:** It's kind of funny, the footnote on that post was "This applies to most categories, but if you're a doctor, please don't learn by doing on me."

**Adam Stacoviak:** I thought that was actually a really good side-note to that post. Yeah, don't iteratively learn how to be a doctor by playing a doctor on me.

**Sam Soffes:** Indeed.

**Adam Stacoviak:** That's totally true.

**Sam Soffes:** But you know, in the tech community, or even broader - I wanna learn how to play guitar; go buy a guitar and start making terrible noises until you make something that doesn't sound terrible. Take a lesson if you wanna take -- I mean, there's way to like just go do... I mean, obviously it doesn't apply for every profession, but... "I wanna learn how to make a table. Alright, I'm gonna go buy some wood and a saw, I'm gonna make something that falls over, and figure out what I did wrong, and make a table that doesn't suck." Anyway, I could rant about this all day.

**Adam Stacoviak:** You could go on, I'm sure. So you seem like a pretty optimistic person, Sam...

**Sam Soffes:** Yeah, I try to be, I guess... I don't know, I had a friend once tell me I was too optimistic. We were starting a company in high school together... From the last episode, my friend that's also named Sam. And we were having some financial trouble, we were trying to figure this out, we had no idea what we were doing... Like, "No, it will be fine. We'll figure it out. We'll just do it", and he was like "We can't just do it, what do you mean? We've gotta plan--"

**Adam Stacoviak:** \[56:10\] "We've gotta worry a lot about things."

**Sam Soffes:** "What's gonna happen?" I was like, "Yeah, don't worry about it, we'll figure it out." A friend hired us to write that YouTube rip-off I mentioned last time, and we had never done any video encoding, had no idea how to work on video at all... I was like, "Oh yeah, we can build this", and he was like freaking out; I was like "No, we'll just figure it out. It won't be that hard." And we did, and it worked, so... I don't know. I just kind like -- I think I don't worry kind of to an extreme, because I'm living on my savings and I'm making very little money, and it's kind of like "Oh, whatever... It'll be alright."

**Adam Stacoviak:** We said in the last episode, it's not as if "If this does fail", which like I said, cross our fingers, hopefully it doesn't fail... But if it does, you still have opportunities; it's not like you're at a brick wall. You just might not succeed at this one thing if it doesn't succeed.

**Sam Soffes:** Indeed.

**Adam Stacoviak:** It's not like your life is over. How old are you, Sam? You're pretty young, right?

**Sam Soffes:** 23, yeah.

**Adam Stacoviak:** 23. If you're listening to this, and again, you didn't go back to listen to one, and you're listening to two - you would have learned that Sam was 23 in the last episode, so I asked that purposefully, but... You're young. I mean, you're really young. And I don't mean that in a bad way, but you've got a lot of life to live. I'm 33, I'm ten years older than you are, so I know where you're at in your mindset, in terms of how you look at life, and you've done so much stuff in the young age that you are and you've got so much opportunity ahead of you... I don't blame you for having so much optimism, but at the same time you have ambition... Enough ambition to write a post that talks about retiring in two years.

**Sam Soffes:** Yeah, I mean, growing up I'd tell my mom, "Hey, I wanna retire at 25", and she'd just kind of like laugh at me, like "Oh, that's nice." I don't know, I mean, I don't think it's impossible. I think it'll happen.

I've got a ton of people on Twitter going nuts, like saying that "retire" is the wrong word, and they are correct...

**Adam Stacoviak:** Yeah, I was thinking that, actually...

**Sam Soffes:** ...like "financial independence" is the word... Because like, I'm not gonna stop making things; that's so amazing, why would I stop doing that?

**Adam Stacoviak:** "Retire" makes me think of like a beach, and chilling and doing nothing.

**Sam Soffes:** I mean, there will definitely be some of that, that's for sure, but...

**Adam Stacoviak:** More often.

**Sam Soffes:** Yeah, I mean, I'd love to just like not have to worry about money and can work on whatever I wanna work on. That was kind of like, "Okay, Cheddar is the stepping stone to do this", when I quit my last job. This is what I wanted. That why Cheddar is a subscription and not a one-time purchase. It's not just to make a bunch of money, which obviously is a good goal, but it needs to be sustainable so that I can live off of it. So if it can get to the point -- I mean, if my projections are even remotely true, I should totally be able to live off it in less than a year, nonetheless two years from now.

Granted, if something goes crazy and I sell it or something for like millions of dollars, amazing! I don't have to work for the rest of my life if I don't have to. That'd be amazing. So not that I'm motivated by money, but that would be a really cool thing, financial independence. I said in the post, "Money isn't exciting, building a product is exciting" and a bunch of people liked that quote. I mean, it's true, but granted, being financially independent would be pretty awesome, so... I don't know.

**Adam Stacoviak:** \[59:58\] Yeah, I was actually gonna pull out an excerpt just so the listeners of this show can kind of just hear some of what you've written, and what I was gonna read was not that exact piece, but that whole paragraph where you say -- and I even kind of said this a bit ago, where I said "You have tons of potential, you're young", so you say here you have unlimited potential to move up, what you're working on is super exciting, and you've always said that money isn't exciting, but building a product is exciting, and that if you had a job offer for a quarter of a million dollars - you said $250,000, but I think it sounds better when you say a quarter of a million dollars...

**Sam Soffes:** It's so much money.

**Adam Stacoviak:** Yeah, it's a lot of money... Per year. I mean, a quarter of a million dollars per year - you'd turn it down, you say, in a heartbeat. The whole point of reading all that is just really to read these last two sentences... You say "What am I gonna do with that? Put a lot of money in the bank, I guess?" At some point you run out of things to buy.

**Sam Soffes:** Totally.

**Adam Stacoviak:** And I don't know about the guys that started Google, or what Zuckerberg is doing with his money, or what Steve Jobs has done with his money, but there's only so much you can actually do with money... But there's a lot you can do with the excitement and the enjoyment of life.

**Sam Soffes:** Yeah. So when I was working at Scribd and Hipstamatic, I was making a lot, especially comparing to what I was making in Texas or Oklahoma or something, because it's so expensive out here, people get paid more... And there's such high demand. It's kind of ridiculous how much engineers get paid in San Francisco, but anyway, I was making a lot, and then it's like, I don't even know what to do with all this money, like "I'll just put it all in the bank." You know, I bought a ton of crap, I filled my little apartment...

**Adam Stacoviak:** And now it's empty.

**Sam Soffes:** ...because it's tiny. Yeah, and now it's a different apartment that's even smaller. But yeah, so I buy a bunch of stuff, now what? I guess I'll sell it all, because I'm tired of looking at it. I don't know, it's such a first-world problem to have, like "Oh, I have too much money... What am I gonna do?", but...

**Adam Stacoviak:** Well, I can tell you something you can do with some money... But we'll talk about that later.

**Sam Soffes:** Alright.

**Adam Stacoviak:** I think you're right, it's a first-world problem. I thought it was funny too, when you -- I mentioned earlier your Nexus 7, and you did another "Hello internet" video on this... I think in the last show you said "I have my desk and I have my bed." You said you miss a couch, in part one...

**Sam Soffes:** I do.

**Adam Stacoviak:** So you're like "I miss my couch, I miss my Xbox", but those things would distract you, so I can't imagine you miss them that much, but... You know, when I looked at that Nexus 7 video I'm like, "Poor Sam... This whole room behind him is completely empty..." I saw the bed in the background, and he's looking at the only thing in the room that he's in, which is the chair he's sitting on, and the desk and other stuff... I wasn't bummed out for you because you made that choice.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** It wasn't like somebody took it from you. You didn't get robbed. You chose to sell your stuff for the reasons that you're doing - you're building Nothing Magical, and your first project, Cheddar, and the road you're on is by your own accord.

**Sam Soffes:** Yeah, I mean, the last three months I don't think would have been nearly as productive building Cheddar had I had more stuff... Because literally, all I would do is get up and work on Cheddar and go to bed. Maybe stop for lunch, but usually I'd just eat while I was working. Because there's nothing else in my apartment, literally, except my bed, so...

**Adam Stacoviak:** What else can you do?

**Sam Soffes:** Yeah, it's just like, get up, watch my desk --

**Adam Stacoviak:** You're kind of limited to laying in the bed or sitting at your desk.

**Sam Soffes:** Yeah. So it's been good... I mean, now that things are out, I'd like to -- I don't work as much as I was then, which is good, but... I don't know, I'd like to slowly get back to normal. I definitely don't wanna have as much stuff as I did before; not that I had a lot of stuff... People would always comment how simple my apartment is, but... I don't know, there's just like no need for -- you know, I don't have to play video games to be happy. There's better things to do.

**Adam Stacoviak:** \[01:04:19.04\] There's only two more things I really wanna dive into before we close off this part two... Unless there's anything specific that you wanna talk about. The things I wanted to talk about were I wanted to talk about negativity, because we haven't talked about any of the negative reviews you've gotten in the App Store and how that impacts your motivation. And we really haven't talked directly about any sort of lessons learned during this. You blog about some things and those might be lessons learned, but I'm really curious what significant lessons you've learned that you can help the next person coming down the path you're coming down, as well. I'll let you choose which one you wanna go with first.

**Sam Soffes:** Yeah, let's do negativity and we can kind of see what I learned from that.

**Adam Stacoviak:** So I don't know how much you look at Apple's App Store, but there's not a bad -- I mean, you've got a 3,5-star rating for... It's almost a 4 star; it's not even like a bad thing to get some negative reviews, but some of the ones are pretty brutal.

**Sam Soffes:** I don't really read the App Store reviews that often. Normally, I'll read after a release briefly, to make sure people aren't having crazy crashes or something, and I'll usually read towards the end of a release cycle... So I'll kind of go through and look at all of them, and make sure that I address most of the problems. Usually, Twitter or email is just a much nicer way of saying what all the reviews are saying, and the reviews are just mean for the sake of being mean, so I kind of try to stay away, just because it's such a motivation killer, just like all these people telling me how much they hate me. And you can't reply on the App Store.

Someone's like, "Oh, I can't edit the text, so I hate you forever." It's like, "Well, you can. Sorry it's not more clear, but this is how you do it." So yeah...

**Adam Stacoviak:** I wanna read just a couple, because I'm curious about some of these... This one says "The app only works if you have an internet connection. Even worse, it costs $6/month", which he is wrong...

**Sam Soffes:** Indeed.

**Adam Stacoviak:** "...if you want to have more than two lists. That means $72." It's actually half that, right? No, it would be...

**Sam Soffes:** A third of that.

**Adam Stacoviak:** A third of that, yeah.

**Sam Soffes:** It's $20 for a year.

**Adam Stacoviak:** Right. So it's $20 for a year, so he's wrong... So that means $72/year for -- I mean, I don't know, that one's totally misinformation because he has come in the review with the wrong kind of information... But I guess in general, rather than just read a bunch of these, how do you deal with negativity just in general around what you're doing? Because you're so optimistic - we've just said that - and you've got a lot of ambition... Do you let these things weigh you down? Do you just shrug them off, or you just ignore them? What's the best -- and I guess in answering this, you're really telling other people who are looking at you saying "Sam, you've done this pretty well. What can I learn from what you've learned?"

**Sam Soffes:** \[01:07:41.08\] Yeah, I mean, everyone's gonna be negative... Especially on the App Store, Hacker News, or even on Twitter; people are just mean, for no reason. I feel like everyone feels like they're entitled for whatever reason to have all of this software that is flawless and free, and that's obviously not the case. I don't know, I kind of just don't worry about it, because it's like -- or people will complain about the price; that guy was complaining about the price, and if it was that price, I would probably complain too, but he's totally wrong, because he didn't read the screen... But you know, a lot of people are like, "Hey, it's so expensive... I can't pay $2/month. It needs to be $1 one-time, or free", and it's like, I bet you lose more than $2/month in just like losing pocket change; that is such a minimal amount of money... Like, you have an iPhone; you clearly are well-off... You can afford $2/month. If this is valuable to you, then...

**Adam Stacoviak:** You'd pay it.

**Sam Soffes:** Right. And people are like, "Well, the other ones are like one-time." It's like, "Well, all the other ones aren't a syncing service." The only other one that I know of - or that comes too off-hand - is Remember The Milk, and that's the same thing, you pay a subscription.

**Adam Stacoviak:** That's been around forever.

**Sam Soffes:** Yeah, I used that like in (gosh) '08, or something.

**Adam Stacoviak:** It's been around for like at least six years, I would say.

**Sam Soffes:** Yeah. They do a really good job at like hitting every platform. I don't know, I used to be a big fan, but it didn't really work for my workflow, so I quit using it. Anyway... Yeah, I don't know, I just don't let it bother me that much. It's like "Oh, whatever... They hate me." There's probably nothing I can do to say to that person to make them like me or my product, and that's okay.

At first, a lot of people on Twitter were like "This is so stupid, I can't believe this..." Then I'd reply, "Hey, I'm sorry you don't like it. Is there anything I can do...?" and they'd instantly be way nicer, just because I was listening. That's what's really unfortunate with the App Store, it's because I can't let people know I'm there to help as easily, you know?

**Adam Stacoviak:** What do you think Apple can do about this? It seems like a trend across any app developer, that they have these reviews that -- I mean, I have to admit, if I see no reviews or I only see a small amount of reviews, or a low star rating, even if a friend suggested it to me, I would probably question buying it, just because "Do I really need it? Do I wanna spend $2,99, even though it might be really affordable to me?" I mean, considering it's $3, you just said you lose that much in pocket change, which is very true... I do look at those reviews though. It's gotta be a sad thing to be in that place, and then plus you're giving Apple 30% of your revenue to be in a place where they can have these skewed reviews, and it's totally against you, you know?

**Sam Soffes:** Yeah, I mean, it's really unfortunate. They don't care, is the bottom line. If you think about the engineers that work on iTunes Connect and the whole thing - they've worked at Apple for like 10+ years, and they've never submitted an app to the store... They don't care. They work at Apple, and this is what they're told to do, so they do it. No one's on the other hand like -- you know, like "I'm using Cheddar every day", so it's like "Oh, this is annoying, I'm gonna fix it." But no one at Apple is really -- they don't use the apps, they don't submit things to the App Store because they work at Apple, and they work on the App Store. I think that's the root of the problem. I'm sure they don't really realize how much of a problem it is, or even if they do, they just don't care, because they're making money anyway.

But yeah, it's unfortunate. I wish I could reply, or at least have the opportunity to email them or something, like "Hey, I'm sorry. Even if you hate me, sorry..."

**Adam Stacoviak:** \[01:12:04.24\] "Be a little nicer about it. \[laughs\] Be a little nicer about your hate."

**Sam Soffes:** Yeah, \[unintelligible 01:12:05.13\] This guy sent me literally this seven-point email that was super long, like "These are all the reasons why your product is terrible." I was like, "Okay..." and I replied to all of them, point by point. I was like, "You know what, I'm sorry if you don't like it. It sounds like you want something that's a little different. I recommend trying these two other apps. Thanks for trying Cheddar." He never replied, but whatever. I don't know. There's no reason for me to be a jerk to you, so if you're a jerk to me, I'm still gonna be nice to you. I don't know.

**Adam Stacoviak:** Alright, well let's talk about lessons learned then, since we're this far into the podcast... This is the last topic we'll hit on before we say goodbye for part two. I don't know... I don't know if there'll be a part three; maybe in the future, who knows...? I mean, we weren't sure there was gonna be a part two when we did part one. I actually went back and renamed the show part one, because I knew that part two was coming up. The first one was not named part one at first, and that's just how it worked out.

Lessons learned - I think this is a big one, because you've been down this path of four years, and it's not just what you've done at Nothing Magical, but I guess across your entire development career. Some of these things you've recently shared on your blog, just in terms of how to learn, and you're very open about what you're doing and what's going on, so I'm not sure there's anything that's totally on your mind about what you've learned, but... Lessons learned is a huge thing - what have you learned over this past bit that if somebody sat you down and said "Sam, what are the keys to the kingdom? What have you learned? How can I not make some of the mistakes you've made?" What would you tell them?

**Sam Soffes:** I mean, I think the biggest thing is to work on things that you care about. I've spent an enormous amount of time working on things that I don't care about and just don't matter in general, and I feel like that's such a waste of time, especially, if you're in the tech industry... Everyone's hiring, you have the option to go anywhere; I can get any job... It's not like it was 20 years ago when it was like "This is the job you have. You're lucky to have it and you should keep it." I don't know, I mean... I've just spent a lot of my development career not excited about what I was doing. I think part of it was I didn't really -- like, writing code was exciting, so it didn't matter as much, but now I guess I've outgrown that, I don't know.

I feel like making something that is valuable and important and that I care about is way more rewarding than just typing. I think if I had come to that realization sooner, I think I'd be -- not that I was miserable my whole career, by any means; it's been great. But I feel like I would have been even more happy and enjoyed it had I realized this sooner. Because for a while, I'd get bored and switch jobs, and like... I was like, "Well, I guess it's just what I do, I just get bored", I don't know. But I feel like this was the reason... Yeah, I don't know.

**Adam Stacoviak:** This is the reason, huh? What have you learned about being on your own, being that island, being the person that sets a priority, being the person that's up late at night looking at some of the emails, and waking up in the morning and seeing some of those emails from users, dealing with - or maybe not dealing with, maybe just ignoring some of the app reviews you're getting... What can you learn from some of those processes?

**Sam Soffes:** \[01:16:05.14\] Staying motivated is absolutely the number one thing. I don't have anyone telling me what to do... I mean, users complain, but... I can just take today off and it doesn't matter; no one's gonna know or care. At first, I wasn't super motivated or productive, after like the first week of wearing off, like "Hey, I'm working on Cheddar!" And getting into a rhythm of working, and "This is important. I have to go to work today, just like everyone else" and all that... Once I got that down, I was way more productive and happier and less stressed out about managing my time.

Yeah, that's been really important... And working on something you care about, obviously, because that keeps me motivated. Seeing everyone's reaction to what I do is the best part of my day. Even if it's a little feature, like "Hey, I did this little thing" and one person replies, like "Hey, thank you so much! I love this!" "Awesome!" I'm glad I can make this one guy happy that I've never met. I guess that's kind of what keeps me going.

**Adam Stacoviak:** I was gonna read a little section of this article which I haven't fully read, that was recently - 30th July it says, actually... It says "Why following your passion is bad for business." You said you have to be - I don't think you used the word "passionate." What was the word you used for the first part of your answer to that?

**Sam Soffes:** You have to care about it or be excited about it.

**Adam Stacoviak:** Yeah, care about it, be excited about it, be passionate...

**Sam Soffes:** Same thing.

**Adam Stacoviak:** Yeah. In this he says "Why following your passion is really bad for business", and I'll read just a quick excerpt from this because it's -- I kind of resonate with this a little bit, and I'm just kind of curious what your perspective is on this... He says "The ugly truth is that the topics that most people are most passionate about are the ones that lead straight into an abyss. In other words, many would-be founders are driven by passions that in a business sense are a sweet poison, bound to kill you while you still can't get enough of it, and it doesn't help that many biased standards encourage the addicted to go on sipping for that reason that one has to stick with one's passion." It ends a little weird there, but it kind of goes on to saying some different things... What do you think about that? Do you think following your passion could be an abyss?

**Sam Soffes:** I totally disagree. If you're working on something just to make money, that's so unexciting. Like my blog post earlier, working on something you're excited about - that's so much better than trying to make a buck. Granted, if I didn't care about money at all, \[unintelligible 01:19:22.25\] open source, and I'd do it all for free, and just like give it to everyone... You know, that'd be great, but there's a balance there.

I think the stuff I wanna make next I'm super excited about, and I think other people will be, too. I can't imagine making something I'm not passionate about... That'd be terrible. What would I even work on? Pick a product I hate and then start on it? That just sounds horrible, I don't know... Maybe I'm missing his context or overall point or something, but I 100% disagree with that.

**Adam Stacoviak:** \[01:20:07.29\] He starts it off with saying "Be in love with what you do, but don't be blind."

**Sam Soffes:** Yeah, that's solid advice, but... Yeah, I don't know.

**Adam Stacoviak:** Like, if you're really passionate about walking off of cliffs, that's gonna be a bad thing for you, right? \[laughs\]

**Sam Soffes:** Yeah, I mean... I feel like if you're looking at this from the lens of a startup, then it's pretty good advice, but that's just a really terrible way to look at business in general. I mean, the acquisition lottery is stupid, right? Instagram got bought for a billion dollars. Great. Do you know how many other companies failed last year?

**Adam Stacoviak:** A lot.

**Sam Soffes:** Tons. I know a ton of companies --

**Adam Stacoviak:** The acquisition lottery - I love the way you said that. Did you just make that up?

**Sam Soffes:** I've been saying it for a little while. I don't know if I heard it somewhere or if I came up with it...

**Adam Stacoviak:** Yeah, that's a good one.

**Sam Soffes:** I mean, that's what it is, right? I worked at a bunch of places that were like "I hope Google buys this, I hope Google buys this..." and then looking at their competing product, I was like "Oh, they're so defeated. They have no reason to do anything now." This is so dumb. Like, make something and charge for it and be sustainable. I don't know. I'm just so burned out on the whole startup mentality. I know it had its place--

**Adam Stacoviak:** Now I'm with you, I think it's silly to go into business to build something with the expectation or even anticipation that one of the big guys (naming no names) will buy you. Then what?

**Sam Soffes:** Yeah, I mean, now you have gold handcuffs for two years, you made a bunch of money and now you can go do it again. That's such a terrible way to live... I don't know.

**Adam Stacoviak:** I recall somebody on this show said that once before; I think it's -- man, I'm gonna have to... Go ahead and speak, I'll think about who it was, because it was a really good interview here on Founders Talk. They said the same thing; he had a chance to make a bunch of money, and then went and did nothing for a month, and hated life... It was Dan Martell. Dan Martell said that.

**Sam Soffes:** Oh, nice.

**Adam Stacoviak:** He was working hard on something and made a bunch of money, sold his first company... I mean, a bunch of money meaning to us - I don't know what your pockets are like, but let's say it's a quarter million dollars, considering that's the salary you think you'd wanna turn down. Let's say it's a quarter million dollars. Let's say he made just that much money, he went and was like "I don't have to work for as long as want. Maybe I can take off the next year and then plan differently." But literally, 30 days later he was like "I hate my life. This is horrible. Why would I not work on something?"

It says in the Bible that man is supposed to work on something, right? We're supposed to be productive and passionate about something, so I guess that that's just answered my own question, which is "What have you learned and why would you follow your passions?"

**Sam Soffes:** It's funny, I actually interviewed at his company when I was trying to move to San Francisco.

**Adam Stacoviak:** Oh, is that right? Full-time?

**Sam Soffes:** Yeah. I interviewed once, and then they never called me back. It was like, "Oh, that's kind of a jerk move", but whatever.

**Adam Stacoviak:** Their loss.

**Sam Soffes:** Yeah... Anyway, then they went out of business, so I was like "Oh, I guess I dodged a bullet there."

**Adam Stacoviak:** Did they go out of business though or did they get sold?

**Sam Soffes:** I thought Flowtown totally failed and they started something else. Maybe I'm wrong, maybe they sold. But I know for sure Flowtown's not around anymore.

**Adam Stacoviak:** The story I heard at least was that they were acquired.

**Sam Soffes:** Okay.

**Adam Stacoviak:** It was an acquisition. The details of that acquisition and whether or not it was extremely profitable is another story.

**Sam Soffes:** Cool. Well, hopefully \[unintelligible 01:23:37.23\] because I feel like everything I see from him is great, but then everytime I'm like -- I'm like "Oh yeah, he never called me back. Jerk...", but whatever. I'm sure he's great.

**Adam Stacoviak:** We're all busy, right? We're all busy in our own ways, and he could have just... Who knows why...?

**Sam Soffes:** Like, "A 21-year-old kid in Texas, trying to program..."

**Adam Stacoviak:** It wasn't your path, Sam, that's the thing. It wasn't your path.

**Sam Soffes:** Indeed.

**Adam Stacoviak:** You may not be where you're at today had you taken that job.

**Sam Soffes:** Yeah, probably not.

**Adam Stacoviak:** \[01:24:11.22\] I think that that about wraps it up; I don't have any more topics on my list. I think we got most of the ones that we wanted to talk about out. We've thoroughly learned about your personal life in part one, we've thoroughly learned about your business model, pricing and reasons behind it for Cheddar now, how you open-sourced it... Potentially maybe not getting an offer from somebody else to buy you or buy a part of you or whatever, and that's your own little subject we'll leave there.

**Sam Soffes:** Do you wanna talk about that real quick?

**Adam Stacoviak:** I don't wanna say anything you don't wanna say, so whatever you wanna say about that subject, you are welcome to.

**Sam Soffes:** Well, I'll leave names out of it. I'm not sure how public this should be, but... Basically, they said they wanted to buy Cheddar two weeks in, which was like "Wow, I guess I'm doing something right", you know? If someone already wants to buy it...

So I talked to them, I flew to their office, and it turns out they weren't really interested in Cheddar, they just wanted to make me an offer. They offered me their CTO and wanted me to start an office in San Francisco and hire a bunch of people. It was an amazing offer, but it was like I had just turned down another great offer...

**Adam Stacoviak:** GitHub.

**Sam Soffes:** Right, to do what I'm doing... And it was like "As tempting as this is...", because they came with a bunch of money. They didn't name any specifics, but it sounded like they were ready to really open their wallets to get me. And I was like "I just don't care." Like, what would I do if they gave me half a million dollars to join? What would I even do with that? I would just be working on something I'm not as excited about. I wanna work on something I'm excited about, and that is my own thing right now.

So it was easier than I thought to turn down. Because if you had asked me a year ago "Here's half a million dollars and an amazing title at a really cool company", I'd be like "Yes, where do I sign?" Granted, I have no idea if it was half a million dollars, I'm just picking a number, but...

**Adam Stacoviak:** Right.

**Sam Soffes:** I don't know, it was interesting... It's funny, I found myself doing this a lot, like surprising myself if I was telling myself six months or a year ago that I would be -- like, six months ago if I was like "Hey, I turned down an offer from GitHub", I'd be like "What are you doing, future Sam? This is silly! Why?!"

**Adam Stacoviak:** "Why would you do this!?"

**Sam Soffes:** Yeah! But I don't know, it's interesting. And it got me -- it was really distracting. I was like "Maybe I should try to sell it and start off the next thing, or go after funding..." It was very disruptive to how I was even thinking about everything I'm doing. I still don't know if I wanna -- well, I mean, the motivation to get money is totally different than the motivation to sell. The motivation to get money is to get more people, so it's more fun. But I don't know, it was a very interesting experience.

I'm really glad I talked to them more, instead of just like "No, leave me alone." I don't know, hopefully that's interesting.

**Adam Stacoviak:** Well, since you're so good at predicting the future for yourself, where -- and this is the classic question... Where do you see yourself in five years, Sam?

**Sam Soffes:** There was a comic I saw recently \[unintelligible 01:27:39.28\] had like a giant beard and he's like "Bam! Right here!" That was pretty funny. I don't know, I mean... Gosh, let's see. I'll be 28...

**Adam Stacoviak:** \[01:27:57.09\] Well, instead of saying where will you be, let's do it from a setting goals perspective. Where would you like to be five years from now?

**Sam Soffes:** Oh, that's good; I like that. I'd like to be running a profitable company, that's exciting, and I'm doing what I wanna do. And I'd love to own a house in San Francisco, which is an enormous goal, because it's ridiculous here. But I don't know, I don't really have a lot of stuff.

For the longest time, I always wanted to do my own thing, and now I'm doing it... I mean, I guess the next goal is to be financially independent in two years, or a year and a half. But beyond that, I haven't really thought about it too much.

**Adam Stacoviak:** Are you thinking about changing the world in any way? It's the same question that you learn whenever somebody meets you for the first time, you're introducing yourself and then "Hey, I'm Matt", "Hey, I'm Sam." "Oh, what do you do, Sam?" and instead of telling me what you do for life and passion and what you get excited about, instead you tell me your job title and who you work for, or even what your job title is and that you work for your own company. You know, I guess in that sense what do you wanna do?

**Sam Soffes:** I've never really been -- like, I used to introduce myself (I'd go to meetups and stuff) like "Oh yeah, I wrote this app called Bible. I don't know if you've heard of it..." It's kind of like a humble brag, you know...? And for a long time now, I'm just like "Hi, I'm Sam." "Hey, what do you do?" "Software stuff."

**Adam Stacoviak:** I make stuff.

**Sam Soffes:** I don't really like to brag about what I'm doing, I don't know. But I guess in five years, not to like -- I mean, I doubt I'd introduce myself this way, but... You know, I'd love to just like be running a company with my friends, and be making great products that lots of people use. It'd be really cool to work on Instagram, because everyone uses it. I don't know, it was cool when I was working at Hipstamatic, like "Oh yeah, I've heard of that. I used to use that." I'm like, "Oh, cool. You know what I do." Versus like -- I tell my mom "Hey, I work at Instagram", she'd be like "Oh, I love that app. I use that to take photos of whatever", you know? But if I was like, "You know, I'm a programmer at some startup you've never heard of...", like "Oh, cool. Okay."

**Adam Stacoviak:** And where do you go from there, right?

**Sam Soffes:** Yeah, like it'd be cool to make something that people use. I don't know, that's the dream, right.

**Adam Stacoviak:** That is the dream. I think it's a good dream to have, for sure. I think that's all of our dreams, in some way, to have an impact.

**Sam Soffes:** To change the world.

**Adam Stacoviak:** Yeah, to change the world in our way, in whatever way that makes you happy. But Sam, it honestly has been a blast having you back on for part two. Hopefully all of you listeners have enjoyed this part two. I wanna say thanks to Sam for being open and honest about Cheddar, revenue, numbers... I mean, I think it's honorable of you to come on this show and not hide, and be open about what you're doing and have no fear in your pursuit of your dreams. That's awesome.

**Sam Soffes:** Thanks so much. It's been amazing.
