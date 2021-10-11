**Jerod Santo:** So in April, Marko, you wrote a blog post which was quite intriguing - "Why you should stop using Google Analytics on your website". We thought we'd start with you just giving us the hard sell. What's the pitch? Why should we...? By the way, Changelog.com - Google Analytics. It hasn't always been the case, but it has been for the last couple of years now... And I'd say we do that in anger, but we do it, so maybe we'll be an easy sell... But why should folks stop using GA on their website?

**Marko Saric:** For me personally, the privacy aspect is a big one... But let's take it from what most people care about. One thing that I mentioned there, that a lot of people talked about, was the aspect of being lightweight. Google Analytics is not. And the official way to install Google Analytics - you use this second script as well, so you end up having quite a lot of things loading, even though it's something that most people don't really look at. So that would be one.

The second one would be quite an important one. Over the last couple of years - several of these different privacy regulations. We know the GDPR in Europe, there's the CCPA in California, and there's one in U.K, and so on... And these regulations require webmasters or website owners to insert these different -- like a cookie banner to ask for permission to store cookies, the permission to get consent to share data with the third-parties, and all these... For me personally, I use the AdBlocker; I have to block all of those annoying popups and so on.

I agree with GDPR, it's something necessary for the web to keep it healthier, but I also think that website owners that care about it can use a different solution that doesn't use cookies, that doesn't collect personal data, which means also that you can get analytics without needing to give all this prompt to your visitors and kind of annoy their experience. So these are the major ones that I believe most people will get quite a good benefit from.

**Jerod Santo:** \[00:04:27.27\] Speaking of the first point - you started with the bloated script, and then moving on to the GDPR privacy concerns... Do you know how big it is? This is something that I haven't necessarily considered, even though I've had my reasons for not wanting to have it. Are we talking about hundreds of kilobytes, are we talking about megabytes?

**Marko Saric:** No, not at all. Basically, if you take the speed tests... Because of SEO reasons -- Google announced speed was one of their factors recently for the search results... And if you take for example the Google Page Speed Test, one of the things they will actually mention is the third-party aspect of you having the analytics script from Google Analytics, as in "That slows down your site." So this is why I mention it, because if you remove Google Analytics from your site, or you use something very small or lightweight, that kind of error or that kind of warning goes away and you get a better score.

Basically, even though it's -- let me check how big the script is. Even though the script is not the largest one ever, it's 45.7 kb, so that's not much, but still...

**Jerod Santo:** It's not nothing.

**Marko Saric:** It makes a difference in the site's speed for sure, even according to Google themselves.

**Jerod Santo:** So Adam, you and I have talked a lot about Google Analytics and different analytics trackers and solutions and what we should do... I have my reasons why I don't particuarly like Google's offering. Do you have yours? What are your thoughts on Google Analytics, Adam?

**Adam Stacoviak:** I think it's been hard to grok the dashboards and the data. It's pretty complex; it's not very clear, like "This is what you really need to know."

**Jerod Santo:** Right.

**Adam Stacoviak:** It seems like one tool built for many different kinds of customers, and the kind of needs we particularly have aren't exactly the ones that are surfacing easily. Just for that one reason alone it's pretty difficult. I only really care about a couple pages in there, and even then they're just difficult to (I guess) bend to my will, give me the information I actually wanna know. Analyze my actual information. It just seems like that's what it should do well, and that's the one thing it does, in my opinion, pretty poorly.

**Marko Saric:** Yeah. Basically, when I did the research for this post, I actually went through Google Analytics and I basically counted all the different reports they have, and I counter more than 125 different reports in the left-hand side. All combined, these 125 reports or so, have about 300 different metrics between them. I'm thinking for my own site I probably use 5-10 at most. The other ones - some of them I've never heard about or have never looked at them. But still, I'm running the script there that's kind of calculating these and collecting this data all the time... And I'm using it either never, or maybe once in a while.

I think I'm not the special case here. I think this is quite common. People install Google Analytics because it's the most popular tool, or it's something that they've told that I need to have... And they have this - this collects 300 different metrics from their visitors, and they use maybe five of them. It's a waste in terms of the kb load on every website visitor... Thinking in the sense of the climate change even - how to decrease the Carbon footprint of a website, there's a Carbon footprint calculator. If you decrease something like 50 kb of your site, your score gets so high that you're something like in the top 10% of the sites that load fast. So it does make a difference, and it's something people don't use to look at; and if you don't use it, then you can remove it. For me personally it makes sense to do that.

**Jerod Santo:** \[00:08:13.28\] I'm just like you, Adam. For me, if I said "What's the number one reason why I don't like it?" I'm just like, I log into the thing and I just wanna log out again. There's so many features that I don't care about... I don't care about conversion tracking, I don't care about AdSense things, and goals... It seems like the information I want is further away than I want it to be, and the information I don't care about is right there, and then the filtering is convoluted...

And then the other thing is I don't really trust it. And I don't not trust it in a privacy way, although I think that's there as well; I'd say my second reason is I feel like they have so much of our information, and we're just giving them more... Like "Here. Here's all of our website traffic information." That feels naive to me. But I don't actually trust their analytics, I think because of our audience demographic, and Changelog.com's traffic demographic. Most of the people that read our website are blocking things.

**Adam Stacoviak:** I'm blocking things... \[laughs\]

**Jerod Santo:** Yeah, I'm blocking things, too. So I know it's not right, just intellectually; I know it's incorrect. So I'm like "Why do I wanna look at that thing that's wrong?" As an example, when we have live shows - this show is not recorded live, but Go Time every Tuesday, JS Party every Thursday - we have a live page, and our live page shows how many people are on that page, and it knows that because it's connected to the actual audio stream. And it could be in a couple dozen people listening to Go Time, and I'll go into Google Analytics and I'll look at the real-time website traffic for that page, and it's got like two. And I just know factually, demonstrably that's incorrect... And that bothers me.

**Marko Saric:** If you think about it, Firefox, Brave - they're quite popular browsers, especially in the tech community, and these things block it by default. And then not even that - people that use Chrome, they have extensions on such as the AdBlock or uBlock, and they block it by default as well... So it's not uncommon to see 40%-50% of a tech site going hidden, as in the visitors block Google Analytics. So using a different service perhaps also gives you more accurate data, because that different service is less of a target, as in a less popular service, and it might not be blocked by some of these services such as Firefox, and Brave, and so on.

**Adam Stacoviak:** I'm sure eventually Plausible though will get to a popularity point that you do get that visibility... And maybe we could talk about how you block scripts, or how you block tracking in a way that respects the user. Because if a user comes to our site and doesn't want to be tracked, I'm not gonna force my way to track them; that's wrong. So I want an opt-in world, and that's what I really care about. I suppose when it comes to data and traffic and analytics you just have to sort of assume that there's a hidden or an untracked spectrum of your actual analytics that's just not ever gonna be there. You just have to take that into account, even when reporting to yourself or others that care about the performance of your site, or lack thereof.

**Marko Saric:** Yeah.

**Jerod Santo:** Well, let's talk about Plausible Analytics a little bit here, and set the stage... Because this post that you wrote was a brilliant piece of content marketing for Plausible Analytics, which is a service and a tool and an open source application that you two are working on. So the pitch is uninstall GA -- and I would say, why do we still use Google Analytics? It's because, well, what else are we gonna do? It's free, it's easy to set up. What else is out there?

So this was a nice piece of marketing, because it's like "Here's this great post all about it, and here's some alternatives... By the way, Plausible Analytics is something that we're building, which is an alternative to that." So I would love to hear all about how that works, and some of the stuff Adam's bringing up.

\[00:12:10.00\] Let's pull Uku into the conversation, because you've been waiting in the wings here... Uku, when did you start building this, and was it because of the reasons that we've been discussing with regard to the status quo of tracking and analytics with Google and other large providers?

**Uku Täht:** For sure, yeah. When I first started writing the Plausible codebase, I didn't wanna use Google Analytics, but its -- I didn't have much of a problem with its UX, because I had never really used it; I'm a developer, I don't spend much time in analytics... But I was working on a different project, and the marketing guy asked me to install an analytics tool... And he asked me to install the industry standard, Google Analytics obviously, and it just rubbed me the wrong way, for some reason... Because the year previous I'd become very aware of all these privacy issues, and I was trying to use less and less services by Google. I was just getting off Chrome, and trying to replace Gmail, and things like that.

So being in that mode of de-Googling my own life, I thought "Well, I don't like installing Google Analytics for my project", but I had to do it, because I also didn't have a good alternative. There were some alternatives, but I thought some of them were just very simplistic, and quite expensive, to be honest. It's hard to justify paying for analytics when there's this standard solution that's free for everyone.

But you know, you do realize that you end up paying with data, essentially... So I thought there's room for an interesting alternative there, and I started writing something. I didn't know where it was gonna go, but I had a proof of concept in mind, so I just thought "I'll get started on it, and I'll run it in parallel with Google Analytics and see how it works." And it took about three months, I think, to get a simple beta going initially.

**Adam Stacoviak:** What was involved in that? What were some of the initial features you focused on? And even how did you focus on those initial features?

**Uku Täht:** Yeah, I just figured "Well, what are the basic stats?" I didn't have really any experience in analytics before that, so I had to kind of learn about analytics, like what's even a useful stat to have... So I just started using common sense. I wanna know how many visitors would visit my website, I wanna see how many pages they're viewing, what's the top content, what referrers they use... And I kind of started building things from scratch.

Obviously, I took a look at all of the other analytics tools and tried to distill the most useful UX and what features they'd surface on their dashboard... But yeah, the first proof of concept was just having a graph with the visitor numbers, how many visitors there were in a given timeframe, and giving the top referrers and pages for that time.

There is one thing that was interesting about that early stage... I had tried to build side-projects before, I had ideas; I felt like if I could just get something going and try to market it... I'd been lurking on Indie Hackers for ages, and communities like that. But really what changed with Plausible was that when I started the project, before I wrote a single line of code, I wrote a blog post that said "Here's what I'm doing. Here's how the proof of concept looks like. I don't know how long it's gonna take, but if you want to join the beta, send me an email." I shared that on Twitter and some communities, and I think I had -- not many people; like 20, 30. But that was enough to give me the motivation to finish the proof of concept. So that's something I'd recommend to everyone who is thinking about writing a side project, getting something going.

**Jerod Santo:** Blog about it?

**Uku Täht:** Yeah, get an early audience and commit to something publicly. I think it's really useful.

**Jerod Santo:** Did the early interest inspire you, or was it more the commitment?

**Uku Täht:** \[00:15:55.29\] Yeah, both. I felt like the fact that people cared enough to send me an email about it, but also I felt like I have something to show to them in a few months... So I felt like I made a commitment to some real people. And that changed it. That actually kept me going for three months, to get it out there.

**Adam Stacoviak:** Well, you'd be surprised what happens when you feel like somebody's in the fight with you.

**Uku Täht:** Yeah.

**Adam Stacoviak:** That kind of motivation... It's pretty intriguing how being responsible to someone somehow changes your motivation.

**Jerod Santo:** It's like an accountability partner, or something...

**Adam Stacoviak:** Yeah, exactly. Accountability.

**Jerod Santo:** Only your partner is a bunch of strangers on a forum.

**Adam Stacoviak:** That's right.

**Jerod Santo:** \[laughs\]

**Uku Täht:** Well, but this is a great segue to building the team and the motivations behind that.

**Jerod Santo:** Yeah.

**Marko Saric:** Just also remember, I've been in situations before where developers don't think of these things before. They actually spend 3-6 months building something without thinking of what happens the day I'm ready to release it. And only then they actually start thinking "Who do I release it to? Who wants this, and what happens next?" And doing this earlier not only gives you motivation, like Uku said, but it also helps you when you're ready to actually release it out to the public. It helps you have some type of an audience, or even really a better idea of "Do people actually want this? What do people actually want?" It works more in this aspect of building an audience before the product is ready.

**Jerod Santo:** Yeah, absolutely. So you had at least that much intuition, and you had something going pretty quickly... But there are so many people announcing launches, and so many alternatives to things, and so many open source projects even. This is a common theme on this show; people we talk to are like "I built a thing. Now how do I get people to use the thing, or interested in the thing?" And there's this old meme about how you're successful on the internet, and it's two steps - you make cool stuff, and then you tell people about it, and that's the two steps to success. And that's true, in a sense, but also not true, because tons of us are telling people about our things, and yet no one's listening, because there's so many people telling you about their things...

So you have a nice one-two punch here with Uku and Marko. Marko wrote that post, which brought a lot of attention to Plausible, and definitely striking a cord with people that are already angsty against GA, or looking for alternatives.

Uku, how did you guys meet? Did you decide "I can't tell this story on my own, and I need a helper"? How did that go down?

**Uku Täht:** Yeah, it was two reasons. One was, like you said - I'm good at writing code, but I'm not very good at writing blog posts, communicating stories and ideas to people. You can get good at anything, I think, if you put enough time into it, but at some point it's also useful to focus on what you're good at and try to bring someone else in who can complement your skills, so that you can both be just experts in your own fields. I like this idea of a broken comp theory, where as a person you're supposed to have broad knowledge of many things, but then deep expertise in a few things.

I realized I'm not gonna build deep expertise in marketing and content writing. That was something that after doing it for -- I was trying to tell the story, to get people to use it for about a year... And I had minor success, but nothing to write home about.

**Jerod Santo:** What was the stuff you were doing?

**Uku Täht:** I was trying to write blog posts, I was writing emails to people, "Hey, can you include me in your blog post about Google Analytics alternatives?" I was writing updates on Indie Hackers, I was trying to post stuff on Hacker News... Sort of haphazard. I didn't have a strategy. I was just opportunistically trying to get in front of people with Plausible. But at the same time, I felt like it was taking time away from what I really enjoy doing, which is development.

\[00:20:01.14\] I really wanted to involve someone who could help with marketing, with getting Plausible in front of people, and telling its story. But the other aspect, which is why I reached out to Marko, is that accountability aspect that we talked about earlier. I felt like working on it alone, I started going a little bit crazy sometimes. If you don't have someone to talk to, if you don't have someone to hash your ideas out, someone to tell you when you're wrong, it's so hard to make up my mind. I was going back and forth on a lot of decisions; I didn't commit to a strategy... I didn't like working alone.

It's interesting - there's a lot of talk about being a solo founder, and whether that's a good thing or a bad thing... And I felt like it was a bad thing. I didn't enjoy it at all. I think people are different, but for me - yeah, I felt like I was going crazy at times.

**Adam Stacoviak:** Yeah. When you have somebody there with you, it's good to get direction from that person. They're your litmus test in many cases too, but it's also more fun.

**Uku Täht:** Absolutely.

**Adam Stacoviak:** And when things are more fun, you produce your best work, right?

**Uku Täht:** That's so true. With Marko we have a daily call, and it's a great time. It's always a great time. We talk about the product, and what's happening in the last day... It makes it more interesting.

**Jerod Santo:** Plus someone to celebrate those victories with. The champagne glasses - when you clink a champagne glass against the other champagne glass in your hand, just by yourself... \[laughs\] That just seems so lame. You need two people to do that transaction, at least.

**Uku Täht:** Yeah, yeah.

**Jerod Santo:** So how did you find Marko? Marko, we're gonna get to you and some of the thoughts you brought immediately to Plausible, because this was not very long ago... Your wrote perhaps your first blog post in promotion of the tool, and it has been so far a massive success. We wanna get into the numbers... But how did you know Marko was the guy?

**Uku Täht:** I think it was January this year, I was just scrolling on my Twitter feed, and I saw this post about de-Googling your life; moving from proprietary tech company tools over to more open source solutions. Marko was in that blog post talking about what you can use instead of Chrome, and also Google Analytics, and he had alternatives for all the Google products. I felt like this is awesome content. I just stumbled upon a great blog post.

**Jerod Santo:** Kindred spirit. Is that the AMP one? Adam, didn't you put that on Changelog News?

**Adam Stacoviak:** I sure did, yeah.

**Jerod Santo:** Was that the AMP one or not? I know that was the December time range, Marko, when you wrote that one...

**Marko Saric:** Well, for whatever reason, I wrote several Google posts... \[laughter\]

**Jerod Santo:** Guy is like the Google killer. Google assassin.

**Marko Saric:** AMP was the one back in December, and that's when it went well in Hacker News, and so on. I think the one Uku saw first is -- I wrote one about how to de-googlify your website, and kind of in general how to use less of these... Well, basically two posts - one for your personal life, and one of your website. I'm not sure now which one it was that you saw, the personal life or the website one that you saw... But I think the personal life one went better in terms of views, so it might be that one. But I wrote two, and that was basically me, in my life, over the last two years or so, trying to figure out "What can I do to make the web a healthier place? What can I do to support the smaller players, and what can I do to get away from the ad tech, and so on?"

One thing was Google is obviously the target there, because -- you know, Facebook is easy, because if you don't use Facebook, you don't see it much. But Google is like -- any website has Google fonts, has Google Analytics... Google has everything - the AMP, and so on. And Google is so much more difficult to get away from, and this is maybe why I focus more on Google rather than something like Facebook, which I think is probably an even worse company. So just because of the fact that Google is so much more difficult, so much more ingrained into pretty much every website that we visit... That's where some of these posts have come from, that was the motivation really.

**Adam Stacoviak:** \[00:24:04.20\] Yeah. In a lot of cases, this reminds me of the Basecamp story, Jerod. Back when Basecamp first came around it was the power story; that's what we were kind of talking around. They have a story of this David and Goliath, which is mentioned in one of the posts on Plausible.com... Or is it--

**Jerod Santo:** .io.

**Adam Stacoviak:** .io. I was like "Yeah..." Did I say that wrong? It's Plausible.io. \[laughter\] But this whole idea of like when Basecamp first came around - its claim initially, which got it its headlines, was "We're not Microsoft Word" or "We're not Microsoft-this", or whatever. It was this idea that these anti... You sort of knew what you didn't wanna be, so it was fairly -- not easy, but it was sort of easy to see what you don't wanna be, and you can kind of see what you do wanna be, and people can grab a hold of that. But Marko, as you're saying - you're right. If you don't log into Facebook, you kind of don't see it. But Google is everywhere.

**Jerod Santo:** Yeah.

**Uku Täht:** It's almost as if their business strategy is to embed themselves in the structure of the web, and then be the middleman for ad buys.

**Jerod Santo:** Right. And they've always provided more useful tooling. I mean...

**Uku Täht:** Oh, the tooling is great.

**Jerod Santo:** I mean, I complain about the interface, but Google has provided to developers, and just the techies, for years, very valuable -- I mean, Google Reader was a hugely valuable tool.

**Uku Täht:** Google search is by far the best search out there, I think... But I don't use it. \[laughter\]

**Marko Saric:** This is actually we spoke about, actually, this point... We were both big fans of Google. Look back 3-5 years, I was the one using 5-7 different Google products every day, and I was the one telling to my parents and my friends "Check out Google Inbox. It's the greatest inbox for email. Check out this, check out this..." And I don't know, over the last two years or so my personal opinion has changed about these things, and now my thinking is a bit different. And I'm not the only one; there's kind of a growing movement, if you want, of people who want to de-google their lives, or de-facebook their lives, and support some different alternatives.

**Uku Täht:** Yeah, so I came across Marko's blog post about that, and I thought he's telling the story, he's doing an awesome job at it. I read more blog posts, I thought the content was just amazing, and then I went to the landing page of his personal site and it said he's a marketer. I was surprised, honestly. I thought he was a developer by the content that he was writing.

**Jerod Santo:** I thought he was a developer when I first contacted him.

**Uku Täht:** Yeah, yeah.

**Jerod Santo:** Good job, Marko.

**Marko Saric:** \[laughs\] You know, I got a compliment from Uku the other day. He said that my blog or my personal website doesn't look like the typical WordPress site that he thinks about. When he thinks about WordPress, he thinks about all these banners and all these flashing stuff, and lots of stuff that are right in your face... And my one is more basic, like something that you might have a developer do on some smaller CMS or static site. That was a compliment to me.

WordPress by itself is not what you have the image of in all these marketing sites, with all these calls to action, and so on... It's what people put on top of it that makes it so. So yeah, just a nice little compliment to a non-developer.

**Jerod Santo:** Right.

**Adam Stacoviak:** I wanna go back to what you said though, Marko... You wanted to play a role in making a more healthy web. And this isn't simply just "Google = bad. Plausible = good." It's not just simply saying that. It's more this notion of power. How you make a more healthy internet is probably decoupling away from one person or one large entity controlling the data.

\[00:27:53.08\] So in the aggregate, if GA has been freely available and is so accessible to many people - and I think the stat is somewhere above 80% of most websites out there are using this free tool... And that means in aggregate, over many years, potentially decades, you've got a lot of data. As an ad tech company - I'm not saying that they're using it in bad ways, or they're bad people, or they're a bad company; there's varying degrees of that. But the point is just like when you put that kind of data in one organization's power or control, potentially bad things could happen. When you control your own data and you have your own data, then we don't have to worry that some other organization has our data, whether it can be used against us or not. It's just a matter of "You don't know when you want privacy until you need privacy."

**Marko Saric:** Yeah, I agree with you. I think my thinking of this started to change with all the Snowden stuff, and Cambridge Analytica, and all these things happening a few years ago. I'm a marketer, and I was using these tools personally, I was using these tools in my profession as well, and that kind of made me aware of the issues. I was ignorant about these issues before, I guess, and it took Snowden and it took all this media campaign and all these people to talk about it for me to realize "Hm, maybe I should rethink what I'm doing here. Maybe this is not the healthiest in the long-run, to have Facebook and Google pretty much control everything we do online."

I have my own blog now, that's disconnected from everything. Plausible is trying to get at least some websites to choose the same, to disconnect in one way or another from these big companies.

**Jerod Santo:** Does that make you unique amongst marketers though? Because when I think about who wants more analytics generally, or more information, more tracking, it seems like marketing folks do, because they can then do better at their job. When Adam and I talk, and sometime she'll put on more of his marketer's hat, and he'll start to say "If we knew X, we could do Y." And I'm always like "Yeah, but X is gross. We can't do that, right?" Not always, but you know, we have a balance... Because he's thinking like a marketer. And then when he thinks more like somebody else, he's like "Yeah, that's not a good idea."

**Adam Stacoviak:** Right.

**Jerod Santo:** Are you unique in that way, or do you find -- is there a groundswell of marketers who are more hands-off with the tracking?

**Marko Saric:** Many marketers for example use ad blockers themselves... This just tells you that maybe even within the marketing world this whole thing of collection of data and privacy invasion is not optimal, it's not something that many people like. But yeah, normally - and this is what we discussed about Google Analytics - the fact that Google Analytics has 300 different metrics is because somebody wants as many metrics as possible about their users... But I think, like we mentioned earlier, knowing the core, the most impactful metrics, the metrics that make a difference to your company, to your bottom line, is better than having access to 300 different ones that you don't really use.

There's an argument that the more you know, the better it is, but I think that doesn't mean that you need to collect as much as you can. It's better to limit it down and actually understnad what you need to know from your website, from your customers, and so on, how can you use it, and what's the best way to get that without going overboard and collecting everything and making all these behavior profiles and all the other tracking across the web as people browse different websites and all that stuff... Kind of a balance, like we mentioned.

**Uku Täht:** Marko, in my view, you're quite unique, being a marketer who thinks that the web is a little bit broken and wants to fix it. I remember telling to my friends before I stumbled on your website, "I wanna find a marketer who cares about privacy and open source", and I couldn't find one. I was trying to find someone who could help me with this, but someone who wasn't just a marketer as I thought.

\[00:31:55.29\] No offense, but it's also my understanding that it's marketers who want more and more data usually, and from the marketing departments - it's where some of this data collection issues are coming from, and the previous issues... So I thought it was very unique to find someone who can do marketing, but also is in that same sort of mindspace in terms of understanding what Google is about, and trying to fix that.

**Marko Saric:** Yeah. Maybe I'm just a bad marketer, that I don't collect all the data. \[laughter\]

**Uku Täht:** Well, you don't need it.

**Marko Saric:** Yeah, I think in general it's something that you can argue that there's a need for it, but it's not something that's necessary. I think the more important thing is being able to have a product that people want, and then being able to communicate about the benefits of that product to people that are interested in it, to people that that product solves issues for. And that thing you cannot really do as well just by knowing a lot of data; you actually need to speak to real people, you need to get into their shoes and understand them better in order to communicate with them, or in order to create a product that actually solves the issues they have.

**Break:** \[00:33:14.00\]

**Jerod Santo:** Guys, whenever you build a product or a service as the anti-X, as the David to some Goliath, you have to be very intentional with features, you have to set yourself apart, sometimes you have to pick which features you're not gonna develop, especially in the case of a privacy thing... You say "We're not gonna do that, because that's privacy." But whenever people are looking at it and they're thinking "Okay, I would love to go away from Goliath/Google Analytics, but I've been using it for so long, it's free, I like this about it... I do complain about it, but there are things I like."

I like the event tracking features; we do use it. We like to know on our website when people click the Play button to play our episodes... And then we also like to know how far they get through, because we think that's useful for us to know. Not any particular person, "Hey, you listened to our episode", but anonymized, how many people listened to this episode on the website, how far did they make it through... We use the event tracking, and that's just one example of one feature that we appreciate. Surely, people look at this and say "Oh, I would love switching if it just did X, Y or Z." How do you guys decide what to build and what not to build?

**Uku Täht:** That's actually really easy. I decided that I wanted to make it as open, and the development as Plausible is gonna be as open and transparent as possible. The reason is easy - we have a public roadmap and we have a public forum for feature requests... And pretty much people upvote on what they want, and I just go in order.

**Adam Stacoviak:** You build it.

**Uku Täht:** Yeah.

**Jerod Santo:** Just like that.

**Uku Täht:** The one that's upvoted the most, I go with it.

**Jerod Santo:** But have you ever seen the Homer Simpson car? Do you know what a car would look like if Homer Simpson designed it, and it's just got like knobs and widgets and horns sticking out the side? If you just give people what they want, you end up with a monstrosity two years from now, don't you?

**Uku Täht:** That's a good point. You have to weigh it against some of the values or the vision that you have for the product...

**Jerod Santo:** Yeah.

**Uku Täht:** So there's a feature that I'm planning to add that no one has requested, for example...

**Jerod Santo:** \[00:36:14.21\] Nice.

**Uku Täht:** ...and that's gonna start in summer, which is being able to just query ad-hoc anything, basically, by clicking on whatever you want in the UI. There's no request for that, and I'm gonna do it at some point... And I've said no to things for sure, but more or less - I'd say 80% - the prioritization comes straight from users.

**Adam Stacoviak:** I guess, Jerod, what you might be asking is "What's the backbone of your roadmap?" Do you have things you weigh against?

**Jerod Santo:** Even if it already is in there.

**Adam Stacoviak:** I think it's great to have an open forum to invite people to. How do you gauge the judge on -- is it simply just votes? I suppose, at this point, to some degree... But what else do you weigh it against?

**Uku Täht:** I think I weigh it against my own vision for the product, what I'm seeing in about a year's time, and then thinking "Are these the things that will lead us to that point?" That's one of those things. I just want to build a good product.

We didn't have a thing that would differentiate us, that would give people a really good reason to switch, for the longest time, and I really wanted to have one. So being able to do analytics without cookies is now a big one. It wasn't the highest-requested feature, but that was one that I brought in to the top, basically, because I really wanted to have that reason why someone would look at "What do I get by switching to Plausible? I'm gonna switch from a free tool to an analytics tool that basically gives me the same stats, and I'm gonna pay for it." So it wasn't a great value proposition for the longest time, but now that we do analytics without cookies, which I don't think Google Analytics is able to do, I think that gives people a good differentiator.

**Jerod Santo:** That means you don't have to have that stupid banner, right?

**Marko Saric:** Exactly.

**Uku Täht:** Yeah, yeah.

**Jerod Santo:** So that is great.

**Uku Täht:** That's a big deal.

**Jerod Santo:** What are the tradeoffs? What do you lose going cookie-free?

**Uku Täht:** You lose some accuracy. In my testing, I was running both approaches. Currently, the unique user tracking is based on the amount of IP addresses that access your website, anonymized. The numbers are very similar to the unique counts that I was getting using a cookie. So I was actually surprised. I thought that I was gonna see numbers that are quite a bit off, but they're actually very similar. And unique user tracking with a cookie is not accurate completely either. Everyone has three devices now. You're basically tracking devices, not visitors.

**Jerod Santo:** Right.

**Uku Täht:** In some cases, an IP address might actually be more accurate when you have multiple devices on one IP address. So there are interesting trade-offs between cookies and the IP addresses.

**Jerod Santo:** Yeah, I was gonna say... Because in some cases maybe I've got three people at my house and we're all NATed and we all show one public IP, but that actually is three visitors. Or maybe I'm just using three devices and I'm still one person... So yeah, it's fuzzy on either side, isn't it...

**Uku Täht:** Or maybe you're on a mobile device and driving, and you get a new IP address every few minutes...

**Jerod Santo:** Switching IPs, yeah.

**Uku Täht:** It's fuzzy... I was running both side by side for a while...

**Jerod Santo:** It's plausible... \[laughter\]

**Marko Saric:** But remember, if you take the whole concept of the product, then it makes sense to make these slight tradeoffs here and there...

**Jerod Santo:** Oh, for sure.

**Marko Saric:** We are catering to people that care about these things, just as we do, and they will also want to remove Google Analytics from their site; they also want less tracking, but they still wanna see something. This is what allows us to make these decisions, because we know we're pretty much on the same page as a lot of our audience.

\[00:39:58.24\] This also helps with the roadmap... If you go to the roadmap right now, which is on our site, a lot of those requests - they're pretty much fit with what you're thinking about. Now it's just about prioritizing them and getting time to do them, and doing them right, so it fits with the product. But it's not like we have completely different people asking for something that really does not fit. It's a niche product that people that come to it are actually interested in this thing, and then they kind of think in similar ways, which really helps in building a product that's kind of unified and that makes sense for this audience.

**Uku Täht:** Talking about prioritization - there's a really interesting new input, which is Marko. Now that we have a marketer on board, we are dogfooding our own products more and more. Previously we didn't have much traffic, and it was me looking at the stats. "Just 50 people today. Cool."

**Jerod Santo:** Wishing there were more of them, yeah... \[laughter\] "Now we have actual traffic, which is nice..."

**Uku Täht:** Yeah, now that we have real traffic, and we have more of a marketing approach and focusing more on selling the product, I think the dogfooding aspect will really start feeding into the product as well.

**Marko Saric:** And I know the tools from my past experience, working for different companies. I've spent hours tracking heat maps, and looking at what people click on on the funnel to sign-up, and so on... So I know what is out there and what is useful, so now it's like me feeding back from that side, and then Uku feeding back from the, you know, "This is not possible because you cannot do this without cookies" or "This is not possible because we would have to track/identify people..." So the bounce back and forth works in that sense.

I can come from a more marketing side and I can push some of the more marketing aspects reasonably, and then Uku can tell me from the tech side, and more from the privacy angle. "We can do this. We can do it this way. What do you think of that?" and so on. Or "This we cannot do because of these decisions we have made in order to make the product privacy-friendly."

**Jerod Santo:** So you're in an interesting spot and a niche where your customer base or your perfect user is privacy-oriented, but not so much so that they have to run all their own things... Because you're still hosting the data. It is open source, it's an Elixir app, I assume there's lots of moving -- we also host an Elixir app. There's things to do to host that yourself. Maybe you can make that click-a-button deployable at some point; whether that's in your interest or not I'm not sure. But you'd think the real privacy-oriented people - they don't wanna host their data with you. They wanna run their own plausible.io. Have you run up against that? Those that are really "I would love this, but I'm not gonna host it on your guys' stuff."

**Uku Täht:** Yeah, and I wanna offer that. It makes sense.

**Jerod Santo:** Yeah.

**Uku Täht:** The main reason why I haven't done it so far is because the product is still fairly early-stage. There's a lot of not only moving parts in the infrastructure requirements, but a lot of moving parts in terms of just upgrades to the database schema, for example. I'm now working on adding a second database to the infrastructure. It's work to just upgrade my own servers, but having to upgrade a hundred other ones, and having the documentation and the click-a-button convenience for that - it's a bit too much for me right now.

**Jerod Santo:** Yeah, it takes away from other things you'd be working on.

**Uku Täht:** Yeah. But I have nothing against people -- it's released under MIT; that means you can do whatever you want with it. You can start your own company running the same code, if you want. But recently there's been more and more interest in self-hosting Plausible, and there's a GitHub issue with now three people involved - well, excluding me, so four people involved - and I'm trying to offer my own help as much as I can to make it self-hostable. Have a Docker image ready to go on Docker Hub, so you can just pull and go.

**Jerod Santo:** Yeah. I think that will net you a lot of good will over time, when you get to it.

**Uku Täht:** \[00:44:05.27\] Yeah, I think the way we make money should be hosting the open source solution, and committing to it... But it shouldn't be from guarding the secrets or having some kind of walled garden that you can't access.

**Adam Stacoviak:** Yeah. You mentioned it was MIT... What was the thought behind making it MIT? Why is the transparency important? Obviously, Google Analytics is not, so...

**Uku Täht:** One of the things I thought about was "Well, what would stop a company from becoming Google?" I think one of those things would be "Well, if you don't trust the company anymore, you can just take the code and build another one using the same product, for example." Having the code in the Commons rather than trademarked I think is valuable to the community, because it stops a company from going haywire, I think, in terms of what they do with the data.

You can't lose customers' trust. You have the threat of forking, and the threat of forking is what keeps a company in check when their code is open source.

**Jerod Santo:** Well, I'd like to take this opportunity to announce our brand new service. It's called More Plausible Analytics... \[laughter\] And it'll be up here real soon. Just kidding.

**Marko Saric:** Let's see if you can do content marketing as good as we can.

**Uku Täht:** There you go. That's the secret sauce.

**Adam Stacoviak:** Well, that's the question - are your blog posts Creative Commons, ShareAlike 4.0?

**Jerod Santo:** \[laughs\] Then we can just rip off everything you're doing.

**Adam Stacoviak:** It's pretty easy. We'll just follow you. \[laughter\]

**Marko Saric:** You know, one interesting aspect that I'd never experienced before - the other day I got an email which was just from GitHub, an automated email. Somebody was telling me he was reading my posts before I published it. And I didn't realize that we're now using a CMS which goes through GitHub, so every time I do my drafts and I save something, it's there, and people can see it and read it. I was like "Wow..." Because normally, I write a draft, and it's just me looking at it; maybe I send an unfinish version to someone, But now I'm actually drafting something, and everytime I save it because I wanna preview it, I wanna check out how it looks like, whatever, it goes to GitHub and people can actually look at it there... So I just thought like "Oh, maybe I should watch when I'm talking about Google here. Maybe I should not write something that I'm eventually gonna delete", because it's gonna stay there on GitHub... Which is just a funny experience.

**Adam Stacoviak:** Yeah, even if you remove it, it's still in the Git history, so...

**Uku Täht:** Yeah.

**Jerod Santo:** This is true.

**Marko Saric:** It's just a funny aspect of it that I did not consider... But it just makes the whole thing more open - from being open source, to having this open roadmap, to even our silly little blog posts being on GitHub while they're being written...

**Jerod Santo:** ...before they're published. That's one webhook away from easy plagiarism. Every time Marko pushes to GitHub, just webhook that sucker and publish it.

**Marko Saric:** Don't start me about plagiarism. \[laughter\]

**Jerod Santo:** Oh, are you getting ripped off?

**Marko Saric:** Yeah. And maybe I should not talk about it; I'm trying to be quiet. But you know, it's been going on since this successful story of hours... Yeah, it's been going on, unfortunately, from even bigger companies, if you want... Which is funny.

**Adam Stacoviak:** Well, things happen when you ruffle feathers. When your story makes sense to a large majority who have been paying attention...

**Jerod Santo:** And when you're in the limelight, people are like "I want some of that limelight."

**Adam Stacoviak:** Yeah. Or they get threatened.

**Marko Saric:** I think this is the way I look at it. I'm looking at Google Analytics as a competitor, if you want, and we're trying to find some of those hundreds of millions of sites that use Google Analytics to maybe consider Plausible... And being threatened by someone of similar size, I'm not. So yeah, it's just the way some people react to it differently, and then they see somebody having a little bit of success -- and because we're so open, people can see that we're having success... It backfires in that sense. Some competitors can actually try and steal our limelight from us.

**Uku Täht:** Remember, imitation is the sincerest form of flattery, right? It means we're doing good.

**Jerod Santo:** Yeah, absolutely.

**Marko Saric:** \[00:48:17.05\] Yeah. Great.

**Jerod Santo:** So before we get too far afield from the product, I do wanna ask you this, Uku... So you have lightweight JavaScript, you've gone no cookie at this point... I've thought a lot about just removing JavaScript altogether would feel even better. And I thought, if we had some sort of Plausible... If we had just good enough, even server-side analytics that just did log analysis, and was at least smart enough, whether it was like blacklist, or machine learning algorithms on the user agents - whatever it was, to just get rid of the real body stuff, the scrapers, and stuff - I would actually be just fine with that. I wonder if you've considered server-side logging, or if it was JavaScript all the way. Because your JavaScript is not doing very much at this point.

**Uku Täht:** Yeah. This is one of those things that I don't think it's been requested on our feedback page... Or maybe it has, and it only has one or two upvotes. But this is one that I'm raising the priority up by -- yeah, I wanna provide that, for sure.

**Jerod Santo:** Really?

**Uku Täht:** Yeah.

**Jerod Santo:** Sign me up.

**Uku Täht:** I think there should be a module for NGINX or Apache, whatever you're using; if you're running Elixir, I can just write a plugin, and send that over to Plausible from the backend. And you will miss some of the things... I can't get the clientWidth, for example, of the browser.

**Jerod Santo:** Right.

**Uku Täht:** I think it's nice to do device detection based on the actual width of the browser, rather than the user agent.

**Jerod Santo:** Right. Viewport size is important, yeah, for responsive design.

**Uku Täht:** When you're writing CSS, you care more about how it's displayed... And there are things that I'm planning to add to the product that might require JavaScript, but the general idea that the basic things, like getting visitor counts and refers and user agents - this doesn't need JavaScript. And I would recommend everyone do that once it's available with Plausible.

**Jerod Santo:** It's how we used to do it back in the '90s. Or maybe that is how they used to do it; I wasn't doing it in the '90s. I was doing it in the early 2000's. I'd run this Perl script - I can't remember the name of it anymore - and it would just analyze my Apache logs and it would spit out reports... And it was pretty good, but then it just became such wrong data, because there's all these bots... And the nice thing about JavaScript is at least you know you have a device that runs JavaScript, right? ...back then.

**Uku Täht:** Bot detection is hard, and it's one where Google has so much data, and they're not releasing that.

**Jerod Santo:** Right.

**Uku Täht:** So it's tricky... I'll have to see what I can do. Currently, the bot detection is very basic, based on user agents. And the fact that the client has to run JavaScript for it to be counted... That counts out a lot of bots.

**Jerod Santo:** Totally.

**Uku Täht:** So there are challenges there. And there's a challenge of convenience. The frontend is standardized, but the backend isn't... So there will be many different modules and libraries for people to hook into when you do offer backend tracking. I mean, it can start with a simple HTTP API, for you to just shoot requests from your backend. It's a hard problem, and it's not one that I have spent too much time on right now, but it makes total sense to me. That should be available.

**Jerod Santo:** It's the ultimate differentiator. It goes the complete opposite direction. And I haven't seen -- because I've been looking for it, and I was like "Is this something that we should build open source, or something?" I've looked -- there's obviously open source log analysis tools, and a few things our community members in Slack have pointed us to... Nothing's quite been what I thought it should be, so it would be a differentiator. No JavaScript. That sounds nice. That feels nice.

**Uku Täht:** \[00:51:57.27\] Yeah. I've actually said publicly to a few people, "If you feel like you wanna deal with the log analysis tools and manage that - I think that's better than including our JavaScript." In terms of privacy, it's great.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** How does that impact real-time metrics?

**Uku Täht:** Probably not well...

**Jerod Santo:** Well, as fast as your server knows it's there... It depends. Where are you introducing that analysis? Is your analysis streamed?

**Adam Stacoviak:** Do you have to change the way you log then? Would you have to change how you log or how you're reading logs? Anything with your logging whatsoever would much change, or have to change to do it that route?

**Jerod Santo:** Yeah, implementation details in terms of "Are you deciding to have a standardized log format that Plausible (or whatever tool) reads, or are you streaming data directly into an API? Are you batching that as real-time?" There's lots of things to decide. You guys have probably thought about this more than I have.

**Uku Täht:** Honestly, I haven't... Because it's one of those things where when I decide "This is what we're doing", then I'll do a bunch of research on all the different options out there... But log analysis is its own little world. I don't have much expertise, but what I do know is that the biggest challenge is probably bot detection.

**Jerod Santo:** I would tend to agree with that.

**Adam Stacoviak:** What's interesting though is you had said once this is in place, you would recommend everyone to go that route, versus a JavaScript client frontend.

**Uku Täht:** Sure. If you don't need the extra stats that come from JavaScript, of course.

**Jerod Santo:** Right.

**Adam Stacoviak:** But you'll still provide both then at that point, to give people the option?

**Uku Täht:** Yeah. There's stuff you can do with JavaScript that you wouldn't be able to do from the backend.

**Jerod Santo:** Like event tracking. In-browser event tracking.

**Uku Täht:** It's much more convenient to track events, yeah. You can do more accurate time on page. If you want scroll depth... You can do interesting stats like that, which require JavaScript. But I guess most people wouldn't be interested in that, would they? I guess it's up to them...

**Jerod Santo:** If you wanna know their mother's maiden name, you need JavaScript for that... And their social security numbers - you need JavaScript for that. \[laughter\]

**Adam Stacoviak:** Well, so Plausible is open source... Is it open source in the fact that you're taking contributions and looking for contributors? And what I mean by that is if someone out there has specialized in or has a lot of information they can contribute towards, say, the server-side methodology, and they have a lot of experience around logging etc. - is this a call to arms, so to speak, to say "If you've got expertise in that area, we're looking for people to work with us, or contribute, or share ideas"? To what degree can someone get involved in Plausible?

**Uku Täht:** Yeah, I think once we figure out the self-hosting aspect in the coming weeks, it will be very easy to take the code and run it yourself. That's where things can really get going in terms of contributions. Currently, I've merged one or two pull requests from other people, but not a lot of people are running it on their laptops, not a lot of people are running it on their servers. I don't even know if anyone has a self-hosted version running right now, because it would be tricky to get it going, to say the least.

So there's work going on to make it really easy for people to run it themselves right now. Once we're there, that's when the contributions can start really happening. This can become more of a community project. So far, it's been pretty much all me... But I'd love for people to get involved.

**Marko Saric:** About the contributions aspect on GitHub - this is again the first time that I'm dealing with this kind of GitHub and open source aspect of running a startup... When this blog post went viral a few weeks ago, I think the day after there was a new thread on GitHub - quite a long, beautiful thread where a guy said "You're using unnecessary code", or I don't even know what he wrote; Uku is much more familiar with that. But basically, a guy that really knows his stuff - he came in there and he wrote pieces of code, how we can improve our tiny 1.4 kb script to go even lower, to perhaps get it to 1 kb or even under 1 kb.

\[00:56:16.17\] I thought that was amazing, that somebody would take 1-2 hours to write quite a long GitHub thread to help us, without us asking for it, without us knowing him... Just because he read that post perhaps on Hacker News, and he thought "Okay, these guys don't know what they're doing. Let's get it from 1,4 kb to 1,1 or 1,0." I just thought it was amazing that this kind of contribution can happen.

**Uku Täht:** Yeah. I know from experience that running an open source project is a lot of work as well. So far, I've focused on the product aspect and the business aspect of things... Because one of the trickiest subjects is "How do you get open source funded? How do you get people working on open source in a sustainable way?" That's kind of what we're trying to figure out here... It's definitely a direction I wanna go in, is more community involvement and more of a community project where we charge for hosting it.

**Break:** \[00:57:23.04\]

**Jerod Santo:** Well, you're well on your way... Let's get back to the blog post, because as I mentioned, it's never as much fun to celebrate by yourself. We're here to celebrate with you guys. Marko had a hit post, we talked about it - "Why you should stop using Google Analytics." Can you guys share some of the impact of this? Because everybody loves that moment when the thing they've been toiling over get some attention, and gets some users... And you've got a little bit of open source starting to trickle in, and there's interest. How big did this blog post go, and what did that result in in terms of users, trials, people giving you money?

**Marko Saric:** Yeah, basically the post was published on the 8th of April, I believe it was, and our stats for April were just over 60,000 visitors. Almost 63,000, which is two-and-a-half-thousand percent increase compared to March. That's one number to look at.

We offer a 30-day free trial, so people can sign up to test us out before actually deciding if it's worth it... 272 people signed up in April, which is six times more than sign-ups in March. And actually, all the sign-ups in April - they were more than the previous nine months combined. So just that aspect - we got a huge boost in visitors and a huge boost in new sign-ups for trial; it was great.

\[01:00:18.09\] Now we're kind of reaching those 30 days or so from that first day, which means that some of these trials are expiring. Now we basically went over 100 customers, so we have seen a 70% increase in paying customers, from the day of the post until today. We've seen MRR as well increase by 80% from the day of the post till today.

These are very concrete numbers, which you can go and say -- doing this type of marketing, it can work as well; you don't have to go to Facebook and pay Facebook. You can do some content marketing, you can reach out to your audience organically, and you can actually still achieve results. This is at least one that proves it. Maybe we were just lucky, I don't know, but it can be done.

**Jerod Santo:** Well, you'll find that when you write your second big post, and you'll see if you hit a home run again, right?

**Marko Saric:** Yeah. I wrote in the follow-up to that one -- I was like, "The only way from here is down." \[laughter\] Because I don't wanna promise people that -- like Uku was saying before, he was writing posts before, but that doesn't mean... You can create the greatest post, you think it's an amazing post and everyone should read it, but only your mom comes to your site and reads it maybe.

So this kind of thing of publishing content works in general in the long run if you're consistent with it and you produce value, but you also need some luck here and there in order to get a spike. This is why I mentioned the only way to go is down, as in "Don't expect us to have a spike every time we post something, or even every month." It's something that rarely happens. But the important thing is that you're building up the content, you're building up the value you're creating, you're answering people's questions, you're kind of building up the authority and the name of the brand... And this kind of slowly rises from day to day, from week to week. And then, if you zoom out and look at the long-term picture, "Oh, there's actually a big achievement. We've actually gone gradually up", and now in the last six months there's a huge increase, rather than one spike and then nothing again.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It really just shows you how one blog post can really change the traction of your startup.

**Marko Saric:** Yeah, that sounds familiar. \[laughter\]

**Jerod Santo:** That's plagiarism, man.

**Adam Stacoviak:** You got me, you got me. \[laughter\] Yes, I stole the title of your blog post written on April 17th. However, it's very true though. And this is something that we share a lot too, because we have a newsfeed. We populate that newsfeed with lots of native content, but we also have it sponsored, and one of the biggest things we tell people who want to sponsor our newsfeed and newsletter is "Write out some content. Don't point people to landing pages that are terrible, that have pop-ups everywhere..." Literally, think about the kind of content that is high-value, and then potentially highly-convertible. And not just convertible in the fact that it gets you new users, but it starts to chip away at that idea of trust, in a good way, meaning that it starts to establish roads of trust towards your brand, towards your product, towards your service, towards whatever you're trying to do...

Provide valuable content, high-value content that is convertible, and that trust factor that says "I should now trust your brand or believe in who you are, or get involved in your mission, or care about what you're doing." When we see people do that with the kind of content that we wanna promote, and the fact that it's promoted or sponsored news content - we see great results. So storytelling is huge, but high-value content that developers actually wanna listen to or read is paramount.

**Marko Saric:** Exactly. And let me ask you a question - how many companies take you up on that?

**Adam Stacoviak:** \[01:03:58.00\] A lot, yeah. And a lot of what we do too is even evolve that education, too. Because some will come to us with not really understanding how to leverage us. This isn't a pitch to people who out there wanna use our newsfeed or newsletter to promote their stuff, but... It might be in some way. It's an education process. We help them understand the power of good content marketing. And not just content marketing for the negative sides of it, doing it just to do it, but truly sharing your story, which is what you guys are doing here today. When you have a story to tell, people care. And if you can be really good at telling that story, which you are good at, Marko, there's proven dividends.

So yeah, a lot of people do... And then some people come to us with not a really good, clear direction towards it, and we educate them, we help guide them. We're very much a guide in that process, like how to leverage promoting their content in our newsfeed. So in many cases we'll help them understand how to best use us. They don't often come to us and say "Here's all these ideas. Go and run with them", we more or less help them and guide them. But it all starts with a great content funnel and a great team behind that to do all that work. If a company came to us with no high-value content, we would say "Go create some high-value content and come back, because we can't help you until then."

**Jerod Santo:** Right. But it's easy for us to help them with that because we're developers, so we just ask ourselves "What's interesting to us?" It's not rocket science. Sometimes you have to pull yourself out of the equation and say "Okay, I'm not into that particular thing. That being said, is this good or bad? Is this interesting?" But what do we like?

**Marko Saric:** And this is what we spoke about earlier, about marketing - it's a different mindset you need to do content marketing, rather than paid advertising. That's another thing - maybe paid works better for some, because it might be easier to get started with it or get ahead with it. But content marketing - you need to actually put yourself in the shoes of an audience, you need to actually create something that they might like. You need to actually speak to people, and so on. It's not as easy to get started with as putting a credit card on your Facebook account and starting to run advertising.

**Adam Stacoviak:** Yeah. Well, you might get clicks, but you might not get conversions. You might get people coming to your site, but they'll come there and go nowhere.

**Marko Saric:** Exactly. And this is what all marketers want. They don't want clicks; they wanna get some real actual results, similar results to what we were speaking about. Actual sign-ups, and actually paying customers in the bottom line of the company. That's what they want.

You always hear about the vanity metrics in social media, and all that. But in the end, what a marketer reports on to their leaders in the company at the end of the month or at the start of the month are the core numbers/the profit from your sign-ups, and so on. It's long past those days where you could report on how many new Facebook likes you've had on your page. Nobody cares about those numbers anymore.

**Jerod Santo:** Marko, as the only marketer I know who runs Linux on his laptop, I think you're well-positioned to answer this question with regard to what developers are interested in. When we first spoke, you said "Why to take GA off your website" was like the post you already had written in your head when Uku first approached/met you. That one was obviously successful, and now you've had your follow-up, like what traction looks like... That's an interesting sophomore album... What's some other stuff you have in the hopper? Moving beyond the obvious "Google Analytics = bad. Plausible = good", what else can you write about? What else can you talk about that helps you guys' story?

I'm trying to think of things that are somewhat reproducible. I know we can't all hit a home run just by doing exactly what you did, unless we're just gonna plagiarize... But are there any recipes, or how do you think about these things?"

**Marko Saric:** I think it's important to understand who you're speaking to. If you can do that, if you can see it from their perspective... So one of the things that many companies go wrong with is they think of themselves first. They're like "I'm gonna sell my company, I'm gonna sell my features and my product." They're not thinking about who they're trying to sell their product to, or they're not thinking about what those people actually want.

\[01:08:10.11\] My experience is if you actually think of them first, and you actually provide value to them first, and only then indirectly you can talk about your product and what your product can do even better than whatever solution you described earlier on, then you can actually see better results. But the majority of sites go like "Me, me, me, me" rather than "You, you, you, you." And there's no love at first sight in online marketing. You actually need to provide real value to people for them to actually understand you, to take you seriously, to actually spend a few minutes of their time to actually explore your posts and your product... Because people are busy, people are impatient online.

There's so many other distractions that if you're not actually providing value and speaking to them directly, in words that they wanna hear, you will struggle. And there's so much other content out there that it can get difficult, unless you really understand the people you're targeting, and then speak to them and their issues and the problems they wanna solve.

**Jerod Santo:** So Uku shared his roadmap... Can you share your Drafts folder? What do you have -- I know you share it on GitHub, but do you have some titles? What is the kind of stuff you're working on and you're thinking about writing, things that are gonna go out?

**Marko Saric:** You know, because of this success here we've had, I've been doing more interviews and speaking to other people... Because so many people are curious now. They heard about Plausible, and they wanna either feature us on their sites, they wanna ask questions, and things like that. There's many questions on social media, email...

If you look at our blog, it hasn't been that active since then. We've published twice or three times... But basically, one good example of what I've published since -- obviously, I've published one with the results and how one blog post can make a difference... But the second one I published is actually six or seven different people have asked me pretty much a similar question, like "This sounds great to me. I also don't like Google etc. but would I lose my search engine rankings if I remove Google Analytics, or does Google actually use Google Analytics and the data they get from there to help me rank better for a search, and get more visitors?" That was something I didn't consider; that was not on my roadmap to write about... But I was like "I see. I understand the opportunity, I understand what people are asking for and what they're curious about, and what questions they have." And then I did my research and I wrote whatever I could find directly from Google on this topic, and I published that.

Again, you've gotta put yourself in the shoes of people that you're targeting and just understand what kind of questions they have what are they thinking about, and these things... And then you basically roadmap according to that.

I might have said -- yeah, I had this post as a title already, because I write something similarly on my own blog, and then I saved it for Plausible when Uku contacted me, but in general, it's not like I came with a roadmap of the next six months content and I said "We're gonna do this, this and this." I might have an idea or two here, but then it's about listening, monitoring, being part of the conversation... I spent I don't know how many hours looking through hundreds of Hacker News comments, and Lobste.rs comments, and people on Twitter, and Mastodon, and so on.

I spent hours on reading, taking notes and trying to figure out what the situation is, what's the feel and what are people talking about. This then leads us not only to create more interesting content in the future, but also to improve our product, because one of the big comments on Hacker News were like "You guys are missing the pricing." We had the pricing on the homepage, but it was not on the top, in the navigation bar, and people don't scroll down so far to see it, or at least a certain percentage of them.

**Jerod Santo:** \[01:11:56.19\] That's true.

**Marko Saric:** Within one hour of that comment being on Hacker News, we already fixed it on the site. Basically, it's really important to be connected to the people, to the community you're talking to, and react. Don't have like "These are the set rules. We are gonna do this the way we want." No. Be part of the conversation and be flexible enough to understand where the conversation is going and work according to that.

**Adam Stacoviak:** There's one word to describe somebody who does something like that. Well, a phrase technically, but one word that describes it. They care. You show up, and you participate if you care. You solve problems because you care. You can write these blog posts because you have empathy, because you care.

**Marko Saric:** It's important. And this is why I said earlier, people that come to us - they care, as well. They're writing these long contributions on GitHub, they're sending us all these comments and additions to our roadmap... So it's important to be able to communicate, and if you communicate well, you can get people to understand it and come to you as well, on the same page. This brings it all to a higher level.

**Adam Stacoviak:** So where will you all be at in a year from now? ...considering the success you're at right now, the adaption rate you're working on, your open source roadmap, this idea Jerod's given you that you also agree with on server-side...

**Jerod Santo:** I didn't give them the idea...

**Adam Stacoviak:** Yeah, I know you didn't.

**Jerod Santo:** I promoted it.

**Adam Stacoviak:** Yeah. But the point is, if things keep going the way they're going, and more people look at Plausible as a plausible option against GA or others...

**Marko Saric:** \[laughs\] I'm gonna use that one...

**Adam Stacoviak:** Yeah... Where will you be? What can we expect?

**Marko Saric:** I think we're gonna still be on your podcast, talking about the only spike we ever had in traffic, and the only time Hacker News talked about us. \[laughter\] Like "Back in the day, that was a nice day..."

**Jerod Santo:** We should have a one-year retrospective, and we can just reminisce... I'll bring the champagne.

**Uku Täht:** From my side, I think my goal for the year would be to be sustainable as a business. I wanna make sure that we can do this full-time, without worrying about the runway. I love the product so much, and the project... It's really important to get to the point where we can just work on it without worrying about it. We're bootstrapping it, so it's difficult financially, but we don't want to have anything to do with VCs, or that kind of stuff.

**Jerod Santo:** Are you all-in at this point? Are you still working?

**Uku Täht:** No, I'm not. So I'm all-in, I guess... \[laughs\] I'm totally comfortable sharing the MRR. We're at $800/month, and we're very open about that. I write a monthly journal where I share that as sort of where we are in the journey to get to a sustainable business. That's the most important thing, I think... Because if we don't reach sustainability, then there just won't be anyone working on it, I guess.

**Adam Stacoviak:** Yeah. Well, in April's post about March, the recap -- so one, I love these recaps you do. i think they're really awesome, and very transparent in terms of your growth... And you do mention MRR publicly; it seems March was $415, so you've doubled based on what Marko said earlier, and what you're concurring against here in your blog post. So that's a good thing, right?

**Uku Täht:** Yeah.

**Adam Stacoviak:** To get to sustainability means obviously you have to grow.

**Uku Täht:** Absolutely.

**Adam Stacoviak:** And growing that number.

**Jerod Santo:** What's that number look like at sustainable? What's the threshold?

**Uku Täht:** We haven't talked about it with Marko.

**Marko Saric:** No, we have not.

**Uku Täht:** We're gonna hash it out right here. \[laughs\]

**Jerod Santo:** Let's hash it out.

**Adam Stacoviak:** There you go...

**Uku Täht:** I don't know... I live a simple life. I can live on a minimum wage here in Estonia.

**Jerod Santo:** Which is what.

**Uku Täht:** Which costs the company about 700-800 Euros a month. I'm fine with that. It's a cheap country. \[laughter\]

**Marko Saric:** There for one of us. \[laughter\]

**Jerod Santo:** Yeah, you're halfway there, right?

**Uku Täht:** Almost.

**Marko Saric:** We've gotta double up.

**Uku Täht:** The servers and the databases are quite expensive...

**Jerod Santo:** Yeah, what's your monthly expense?

**Uku Täht:** We're going -- just the Postgres database right now is like $160-$170. The server itself is $7/month. So altogether we're running about $200/month in terms of expenses, for now...

**Jerod Santo:** \[01:16:13.17\] Is that just a VPS, or who's hosting your Postgres?

**Uku Täht:** It's a company called Aiven. It's a Finnish company... It's a database hosting company, but they're really using Digital Ocean... Or anything. I think Digital Ocean, AWS - you can choose. I didn't choose Google Cloud for obvious reasons.

**Adam Stacoviak:** Right.

**Uku Täht:** But yeah, it's interesting... It's one of the first products I worked on where the cost efficiency is a big deal. Previously I've only worked on business applications that are just glorified spreadsheets where it doesn't matter. It's gonna run on any machine. It might get a little bit slower and you just throw more metal at it and it's fine. But with analytics...

**Jerod Santo:** So where are the needs coming from? Just from the data storage aspect?

**Uku Täht:** Yeah. That's one aspect to think about when it comes to sustainability... But we still have some way to go. A year is a good timeframe to reach financial stability with a company.

**Marko Saric:** One good headache we've had over the last few weeks since this post is that several bigger sites have come to us and said "You know, on your site you mention only (whatever it is) a hundred thousand as the top level... How about three million, how about four million?" And now Uku is in the process, like he mentioned earlier, of scaling Plausible, and making it more efficient, so we can actually at some point in a couple of weeks perhaps start beta testing some of these sites that have 4-5 million per month of users/visitors. This is another interesting aspect.

**Uku Täht:** Yeah.

**Jerod Santo:** Do you have to introduce enterprise pricing at that point? I haven't checked out your pricing very closely. Does it scale up pretty well? If somebody's gonna have massive data needs, are they gonna be paying more?

**Uku Täht:** For sure, yeah.

**Jerod Santo:** Well, then you're good.

**Uku Täht:** I think it's gonna be fairly -- not linear, but the more you use, based on usage, the more pageviews you have, the more it's gonna cost. I wanna keep the pricing as simple as possible, just based on traffic pretty much. We've talked about some pro features, but personally I'm not a fan of having complex pricing, where you try to navigate the features to get people to upgrade. I'd prefer to have a simple, like "Here's the product. As much as you use, you're gonna pay for it." I like that.

**Jerod Santo:** Cool, guys. Well, we hope you get there. We will be rooting along, we're following the blog. We'll be trying out Plausible. I'll definitely be checking out that roadmap and waiting for the server-side stuff to hit.

**Uku Täht:** Oh yeah, that'll be fun.

**Jerod Santo:** Absolutely.

**Uku Täht:** Well, just an interesting question - are you comfortable with us hosting the data, or would you also want to run your own instance of Plausible?

**Jerod Santo:** I'm not interested in self-hosted whatsoever.

**Adam Stacoviak:** We use Google Analytics right now, so... I mean, we're already comfortable with the beast, let's say.

**Jerod Santo:** I'm not a privacy far-ender, and we talked about where our stuff has to be all self-hosted, at all. I like the server-side idea. I like the simplicity of it, I like not shipping any JavaScript to my users... I'm more about the user privacy than the hosting thing. I guess at the end of the day -- well, I think you can probably host it more securely than I can, probably... \[laughter\] So I guess that is probably a pro, user privacy, versus us having to maintain that. But I do like the server-side idea, and I like not having to ship any JavaScript whatsoever. Those are the main things. I like the simplicity in terms of the user interface, and you already have that going for you in the product. The way you display information is nice and neat, and it doesn't have a bunch of the stuff I don't want.

There are a few things I do want that aren't there, but like I said, I'll just check out that public roadmap and maybe I'll give a few thumbs up to some things... But yeah, that's interesting to me, that aspect, and really just kind of return to the old way of doing things, server-side versus in the browser.

**Uku Täht:** \[01:20:22.06\] I'm with you. I think allowing people to self-host makes sense for Plausible. We're in that sort of space.

**Jerod Santo:** Absolutely.

**Uku Täht:** But personally, as a user, I'd rather pay someone to take care of that for me.

**Jerod Santo:** Same.

**Uku Täht:** I wanna minimize my headache as a developer.

**Jerod Santo:** There are people that love setting this stuff up though. They love self-hosting, they love running servers, they've got their Ansible scripts, or they've got their Docker files, or they've got their Kubernetes clusters... I mean, I get it, I used to do that kind of stuff as part of my living, which is why I'm so allergic to it now... So if they could slot this in as just another one of their Docker containers, that they're already running this infrastructure for their company, or for their home, or whatever it is - there are people that love that stuff. I'm just not that person. I think it's a worthwhile endeavor for you guys, I just am not interested in it for is. But I am interested in server-side stuff.

**Adam Stacoviak:** Yeah. I mean, I don't know where you're at with customer base or -- I mean, I can kind of see it based on MRR, but you mentioned the next few things for you in terms of focus around customer base and dollars is sustainability... So I'd say if over the next six months you can focus on the customers that you need to get to to sustain, focus on features and roadmap that sort of enables that - that would be a wise focus of your energy and time... And sure, maybe at some point a self-hosted is certainly possible now, but it requires documentation stuff, but that'll not be your focus until you're ready to take on that kind of customer base. You're gonna attract the (Jerod's words) privacy-oriented, so you don't wanna say no, but just say "Not yet".

**Marko Saric:** We actually spoke about -- I don't know if you guys know Proton Mail. I use them for my email... Again, in my switch from Google, I ended up having to pay for email, which I had never considered before. So I pay for Proton Mail, and their concept I really liked; something we discussed is they have paid plans, and they have several levels in it, and people are donating money and giving quite high levels that you can pay for... And they use that money they get from bank customers in order to support those that cannot afford it, or that don't wanna pay... And they allow people to also have a free email address.

So this is something we discussed. If we build - like you mentioned now - Plausible and get some sustainability there, that will then allow us to actually spend some of our time, rather than building new features and trying to get new customers, we can actually spend some of those resources into allowing easy self-hosting, and things like that, that will make it easier for people that cannot pay right now, or that don't wanna pay, and so on.

**Adam Stacoviak:** Well, it's certainly been fun digging through all these details. I certainly applaud what you're working on. It's definitely in the right timing, right timing for people like us even, looking for alternatives... And thank you so much for sharing your story and your time. I appreciate it, guys.

**Uku Täht:** Thank you.

**Marko Saric:** You're welcome.

**Outro:** \[01:23:42.06\]

**Jerod Santo:** Here he is...

**Marko Saric:** Sorry, guys.

**Jerod Santo:** Linux crashed. \[laughter\]

**Marko Saric:** I should not use Linux for this one.

**Adam Stacoviak:** "Oh, the file is too big. It crashed my machine." \[laughter\]

**Jerod Santo:** Are your lights off there? Do you have a power outage?

**Adam Stacoviak:** We're speculating why your Linux crashed.

**Marko Saric:** I have a request right now. If I said anything about Linux on record, can you remove that part? \[laughter\] What's it called -- I think even Audacity crashed, so let's see if I can save the recording... I'm very sorry.

**Jerod Santo:** Well, this right here is going in the post-show, for sure. This is our best moment in months... Everything crashed.

So now that I have you off-air, let me give you my feature request real quick.

**Marko Saric:** Okay.

**Uku Täht:** Yeah, go for it.

**Jerod Santo:** So what I'm interested in most of the time -- so our site is pretty well designed from an information architecture point of view, if you think about our different podcasts, if you think about our news and then our posts. We think of these as almost like little verticals inside of our media company. So Go Time is its own thing; it's a show for the Go community, it has its own episodes, it has its own stuff. And what we're trying to generally track is the success and growth of our portfolio shows...

So what I mostly wanna know - and this is hard to get even inside Google Analytics, but I think it's a pretty basic thing, is I wanna know the performance of paths. If I can just see /gotime and everything underneath it... Think of it like your top little nav. If I can show just the stats on this path - how is JS Party doing, how is News, which is a whole section, how is our Posts...? Is Posts growing? Not the individual posts, but cumulative, over time - are they dropping? That's beautiful for me. And that's so simple -- that plus what you currently have is basically BOOM.

**Uku Täht:** Yeah.

**Marko Saric:** We are in progress of doing that, no? That's what's gonna happen, to be able to dig deeper into these levels.

**Uku Täht:** Yeah, but what really sucks is I can go into the database and I can run that query...

**Jerod Santo:** Totally.

**Uku Täht:** But surfacing that as a feature is something that I'm not very -- I'm not a UX guy; we get a lot of compliments on the UX...

**Jerod Santo:** It does look nice.

**Adam Stacoviak:** Well, I think if you knew the routes, you could put that in the users' hands, and say "Which routes matter to you", instead of saying of saying "Here's all your routes", or even top-level routes... Like, "Which top-level routes matter to you - build a dashboard for you on that" kind of thing.

**Uku Täht:** Yeah, we need to think about some sort of way -- I can think easily of a way to add a filter on top, where you select the properties to filter by, which would be the path name, and then add a regex that you can filter by... And then maybe we could have some sort of stored filters...

**Jerod Santo:** Stored search, yeah.

**Uku Täht:** And you can have just tabs with different stored filtered searches, or something like that. I can think of it, but building is gonna take me ages.

**Jerod Santo:** No, I'm not expecting you to build this -- I don't want you to have a Homer Simpson car.

**Adam Stacoviak:** What about next week? Any time next week? \[laughter\]

**Uku Täht:** Yeah, yeah. We'll do it.

**Marko Saric:** Put it on the roadmap!

**Jerod Santo:** What is it, six dollars -- if you want our $12/month...

**Adam Stacoviak:** What if we would buy a yearly plan for two years straight?

**Jerod Santo:** Boom.

**Marko Saric:** Well, now we're talking... \[laughs\]

**Jerod Santo:** What if we build the feature for you on the open source product?

**Uku Täht:** Sure.

**Jerod Santo:** Oh, that could be fun...

**Uku Täht:** That'd be awesome, yeah.

**Jerod Santo:** Well, I'm an Elixir guy...

**Uku Täht:** Yeah, you can help me out.

**Jerod Santo:** I actually would get involved in that way. I wouldn't force my features on you, but if you had like -- I know you're working on the on-ramp, but I don't need a self-hosted version, I need easy dev setup. I would definitely help out...

**Uku Täht:** Yeah.

**Jerod Santo:** ...if we were using it, for sure.

**Uku Täht:** One tricky part is you can run it okay locally. It's actually not that tricky. I've been onboarding client projects where it takes me like half a week to just get the setup running. I think with this one you should be able to download it and then mix tests out. Well, now you need a ClickHouse database as well, which is a bit trickier, but you can just docker pull that. Documentation is what it all needs for you to be able to do that.

**Jerod Santo:** Yeah, just a little bit to get going.

**Uku Täht:** But one of the things that it really needs is test data... Because if you just download it, you're gonna have no data in it. And generating test data is really difficult. So I think what I wanna do is once we have this self-hosted dev setup is I wanna take a daily or a weekly dump from the live demo and just give it to you as test data for development.

**Jerod Santo:** Yeah, totally.
