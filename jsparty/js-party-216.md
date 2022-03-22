**Dan Shappir:** I love your intro music.

**Amal Hussein:** Yeah. Well, I love that you were the first person to talk on this podcast. That's great. I was going to be like, "Hi, Party people. Blah, blah, blah, blah, blah. Dan is awesome. Yay. This is going to be an awesome show." All the same stuff I do all the time, because I'm always really excited about our incredible guests and panelists... But yes, we have awesome party intro music, and for a party-themed podcast - I think fairly on-brand for the most part.

**Dan Shappir:** Oh, its '80s music and I'm an '80s person, you know...

**Amal Hussein:** \[laughs\] Yeah. I was born in the '80s, for what it's worth.

**Dan Shappir:** I won't say how old I was in the '80s. Let's leave it at that.

**Amal Hussein:** Hey, age is currency in my world. But anyways, so hi, party people. Welcome. Welcome. We're very excited to have a very, very special guest today, Dan Shappir, which we'll pass over the mic to in just a second. With me today is Nick Nisi. Hello. Welcome, Nick.

**Nick Nisi:** Hoi, hoi. I sound a little different. It's because I have my first cold in two years now that the weather is 80 degrees.

**Dan Shappir:** \[laughs\] And it's not COVID?

**Nick Nisi:** No, it's not.

**Amal Hussein:** Oh, gosh. Yeah. And so, Dan - welcome, Dan. We're very excited to have you here.

**Dan Shappir:** Thank you very much. I'm very excited to be here.

**Amal Hussein:** Yeah. And so Dan is kind of this really, I would say, a wealth of information.

**Dan Shappir:** A fount.

**Amal Hussein:** Yes.

**Dan Shappir:** I'm a fount of information.

**Amal Hussein:** All of the above, yeah. So Dan has been writing software for a really long time, and he's one of those rare engineers that has managed to, I think, persist over time. It's very hard, I think, to stay up to date with engineering trends over just even the course of five years, let alone the course of a decade, let alone the course of two decades, right? So I think you're in this interesting group of people that has been writing software for a long time, and you're able to bring that relevancy of how you write software into what you do on a day-to-day basis, with your current job, and I think that's what makes you super-awesome.

**Dan Shappir:** Thank you very much. The more things change, the more they stay the same.

**Amal Hussein:** \[laughs\] Right. So Dan is a Performance Tech Lead at Insurance Next and--

**Dan Shappir:** Next Insurance. Next Insurance.

**Amal Hussein:** Next insurance.

**Dan Shappir:** Yeah. We're an insurance company. I kid that I'm now an insurance agent. No, but seriously. Yeah, we are one of those insurtech unicorns. That's what we are.

**Amal Hussein:** \[00:04:13.21\] Yeah. That's super cool. And previous to that, you spent seven years and change at Wix and leading up the performance efforts there... Which is really cool, because Wix is kind of downstream to millions and millions of websites.

**Dan Shappir:** Exactly.

**Amal Hussein:** Think like, "Hey, how do I--" it's not just like, how do I make my website go faster? Making my website go faster also than makes -- or making my infrastructure go faster enables all these other websites to go faster, right? So it's this very interesting ripple.

**Dan Shappir:** My favorite catchphrase in that context was that on a good day I would come home and tell my wife that, "Today I made 150 million websites load and execute faster", and she wouldn't care at all because, she's really not into tech, so it doesn't mean anything to her. But yeah, one of the great things that I had about working at Wix was the scale; the number of websites hosted on the Wix platform, and also the growth. So there was a lot of scale in a lot of ways. And yeah, it was a very interesting time.

**Amal Hussein:** Yeah. I mean, it's really fascinating. Wix is, I think -- being downstream from that many users is just always an incredible platformy challenge, because you have to build extensively and roll out changes gradually, and there's a lot of considerations to take into account.

**Dan Shappir:** Actually, I would have to say that one of the great things about Wix -- by the way, it's important to say now that I'm no longer at Wix, I'm not representing Wix in any sort of a way. This is just my opinions, also not the opinions of my current employer, Next Insurance. And obviously, the more time passes, the more out of date I will be about what's going on there. But one of the really interesting things about Wix was the amazing rate of change that they maintain. They do something like a system is updated every two minutes. The software changes at an amazing pace. There are thousands of ongoing A/B tests and experiments. So the rate of change is amazing there. Even though, like you said, they are downstream of so many websites that depend on them for their uptime, and stuff like that.

**Amal Hussein:** Right, right, right. So you clearly developed a lot of expertise with perf, and there's a really great article that you wrote recently on Smashing Magazine around a case study for perf that you -- a bunch of perf improvements.

**Dan Shappir:** Sort of my parting gift to Wix was writing an article about a case study, how we improved performance at Wix... Because the performance was actually quite radical. When I joined Wix, even though it was a long time ago, like you said, but even later than that, since let's say the beginning or the middle of 2020 to today, Wix's performance has improved something like eightfold. So those are pretty astounding numbers, if you think about it. And if I go back before then, it's more than an order of magnitude. And that's despite the fact that the websites that you can build on the Wix platform have become significantly more sophisticated and complex and feature-rich. So it's not just improving the performance of what you currently have, it's improving performance even though you are providing a lot more features and functionality.

**Nick Nisi:** So just to give some context there - I haven't used Wix too much, but I think I know a little bit about it. Is it a low or no-code solution for creating websites?

**Dan Shappir:** It's both.

**Nick Nisi:** Okay.

**Dan Shappir:** \[00:07:56.16\] Originally, Wix was no code, what's known as a drag and drop website builder, also a CMS, because you can also put data in there and use it to populate the dynamic parts of your website. So it's both a website builder and a CMS. They've kind of expanded their offering these days to also be a low-code type solution, where you can augment what you built using drag and drop with code that you can actually write into, or inject, as it were, into the websites that you build. They have this technology called Fellow, and literally a web-based development environment that you can actually write JavaScript code directly, in the context of the Wix editor.

For example, if you want to associate some custom operation with one that isn't provided out of the box with one of the visual widgets that you can drag onto the canvas, you can do that without tooling as well. So they're both a no-code type solution for people who prefer not to code, which is the vast majority, but also low-code if you need enhanced functionality.

**Nick Nisi:** Gotcha. So presumably, when you're talking about improving performance across millions of websites, is it the performance of the generated code, as opposed to the performance of the builder that generates the code?

**Dan Shappir:** Yeah. My focus, while I was at Wix, was primarily on the websites that were built on that platform.

**Nick Nisi:** Gotcha.

**Dan Shappir:** Obviously, you also want to improve the performance of Wix's own tooling. And by the way, more and more of Wix's own tooling is being built on top of Wix's own platform.

**Nick Nisi:** Nice.

**Dan Shappir:** So obviously, starting from the Wix's homepage itself, or the Wix's own blog - they're built on the Wix platform. But now a lot of Wix's own - let's call it back office, is actually built on top of Wix. Because as Wix itself evolves and gains more capabilities and functionality, and like I said, even the ability to put your custom code in there - you know, why not?

**Nick Nisi:** Ultimate dogfooding.

**Dan Shappir:** Everybody should eat their own dog food, let's put it this way.

**Nick Nisi:** Yeah.

**Amal Hussein:** Yeah. I mean, the interesting thing about Wix is that you're enabling the guardrails for people to build performant websites, right? So there's all these decisions that are kind of abstracted away from users that are really just trying to get stuff done, right? They're just trying to make something happen. And so there's no deep knowledge required for them to like, how to build a responsive website, how to make a website performant, how to get this thing working and rendered quickly across the globe, right? There's all these things that they don't have to think about, which is kind of nice. But you're taking on that responsibility on the engineering side to make sure those decisions are in place with the framework.

**Dan Shappir:** You're absolutely correct, but that's just the edge of this general trend that we're seeing across the entire industry. I mean, even if you look at web application builders or frameworks like Next.js, or Nuxt, or Gatsby, or SvelteKit, they are also kind of providing you with boxed solutions; like you said, guardrails or happy paths, or opinions, if they're opinionated, about how to build your web application or your website. And you are giving away some control, but in a lot of cases, you are gaining a lot of advantages, because they are pointing you towards the proper direction, and you benefit from the economies of scale, you benefit from the fact that a lot of these companies can afford to hire and employ the best and most expensive engineers. So definitely.

Now, obviously, a tool like Wix provides much more, let's say guardrails, than a tool like a Next.js. You usually don't write your code. But if you think about Next.js - why does Next.js exist? Well, because doing manual SSR in React is hard, and a lot of people don't do it correctly. So you've got Next.js doing it for you. And you've got Vercel automating your integration with the CDNs, because it's challenging to do that correctly.

\[00:12:25.29\] So it's not just about Wix, it's true about every website builder, it's true about Shopify, and it's true about -- think about it, it's even true about Amazon or Google, with their cloud services that they provide you with. So that's kind of the direction that we're heading in, I think.

**Amal Hussein:** Yeah. I couldn't agree with you more. I think for me what's interesting about Wix is it's very democratizing. That's the aspect of it that I really like, which is, it pushes good standards across responsiveness, accessibility, performance... It pushes all of those things broadly, and it makes them accessible to just anyone really, on the open web most importantly. These aren't like behind a gate, or it's not like walled gardens of Instagram or whatever. Or Facebook pages. This is like on the public web, it can be SEOed... It's very exciting.

**Dan Shappir:** Yeah. I totally agree. It's both a good thing, and for some people, I guess, less so. So if I look at the good aspects of it - for example, you mentioned accessibility. Wix is putting a lot of effort into improving accessibility, both out of the box and also in terms of tooling. So again, as same with performance, when Wix does something that improves accessibility, you've automagically improved accessibility for hundreds of millions of websites.

**Amal Hussein:** Right.

**Dan Shappir:** And that's definitely a good thing. On the other hand, there are certain people that also look at something like a Wix, or a Shopify, or a Squarespace as a threat, because some web developers basically are saying, "Hey, a product like Wix is taking away some of our livelihood." So it kind of works both ways, I guess. But that's progress for you.

**Amal Hussein:** Yeah, I was actually going to segue into that, because I think there's probably a lot of trepidation among developers... And I think my answer to that is Wix is helping solve problems that are solved, and I think it's important to move on as a community to solve more complex problems. Wix is improving the baseline of the web. And with that, we can now move on to solving harder problems that need to be solved. It's like an engineering brain.

**Nick Nisi:** It's a lot like Copilot, right? I don't think Copilot is going to take my job, but it does help me automate a lot of the simple things that I would just have to manually type out. It's just--

**Amal Hussein:** You got it.

**Nick Nisi:** ...smart enough to do it.

**Dan Shappir:** Yeah, I totally agree. And if I go even further back, it's like when the automobiles came along and people were riding around in horse-drawn buggies or carriages, and I'm sure that there were people out there that would take care of horses and they all of a sudden lost their job, and they certainly weren't happy about it. But first of all, like I said, you really can't stop -- like it or hate it, you can't stop progress. And more significantly, if you look at the industry at large, post that automobile revolution, there were more jobs, not fewer jobs. So... You know, so far so good in that context.

**Amal Hussein:** Yeah, absolutely. And kind of shifting this conversation towards the perf work that you did at Wix - because one of the reasons why we invited you on the show was really to understand what it took for you to enable organizational change and adoption, and all of that good stuff, to not only have good performance across the board, the stats are kind of astounding, and we'll get into that in a second... But to also just have an organization that cares, and that is mindful, and that is designing with performance in mind, that is monitoring performance... Right?

\[00:16:01.28\] Perf is one of those things where you can do a bunch of things to make things go faster once, but then if you don't come back to it again until six months later, don't be surprised at either completely reverting or even going the other way, right? So there is some infrastructure and cultural awareness and monitoring and all of that stuff that needs to be in place in order to keep those numbers the same, or progressively getting higher or lower, right? So can you tell us a little bit about maybe why performance matters and why it's actually so challenging?

**Dan Shappir:** Yeah, exactly. Everything that you said is absolutely correct. I like to say that with performance, if you're not progressing, you're regressing. You'll hardly ever stay at the same place. If the software that you're working on is dead and nobody is releasing anything, then maybe you stay where you are, but hopefully, that's not the situation where we're at. So we are constantly enhancing our software offerings, adding features, adding capabilities, making our software heavier, usually, because we sit around -- for some reason, developers insist on writing code all day, and that code gets deployed, and that's more stuff that you've got to download, parse, run... Just work. So software tends to get heavier.

Now, if you're running stuff on the back end or on your desktop, software that you installed, or a mobile app maybe, then you might not care so much, because that deployment process is just this one-time tax that you pay. That's not the case with the web. You pay this tax almost every time you launch the software, where it needs to get downloaded into the browser and executed.

So yeah, we've created an environment in which the performance or the time that it takes for the software to be downloaded, effectively installed and activated directly impacts the user's experience, and very significantly so. You don't get a second chance to make a first impression. And if your first impression is that your visitor is just waiting around, staring at a spinner, or even worse, just staring at a blank page, then obviously that's not something that you want. And it's really unfortunate, because very often I see organizations adding features and capabilities which are intended to improve that user experience, but end up harming the user experience because of that extra time that it takes to launch the software, for the software to become interactive and responsive to the user's input.

Now, when I joined Wix, seven or almost eight years ago, people weren't really thinking about performance that much in that context. At least my boss, the VP of R&D at Wix, was ahead of his time, I guess; he felt that web performance was something that we really needed to invest into. But if I look at the past two years, then there's been a really big shift in our industry. I think that across the board, these days, people recognize the importance and the priority that needs to be associated with web performance. We've got Google to thank, to a great extent, for that.

Another thing that I'd like to say is -- you can see I like to say a lot of things, I'm a talker. Another thing that I like to say is that as an industry, we are really lucky that Google's financial benefit kind of aligns with what is good for the web industry at large. Not always, not all the time, we can't always count on it, but in a lot of situations, that's the case. Because they're like the biggest ad company in the world. Most of their ads are on the web, so the more people are on the web, the more money that Google makes. So they want the web-based experience to be good, so that people will be more web. And like I said, that's kind of lucky for us.

\[00:19:55.13\] So they push techniques and technologies that they consider to be beneficial for the web, and very often, they are. If I can give an example that has nothing to do - at least directly - with performance, it's privacy and security. I bet you all remember that not so long ago, most websites used HTTP, not HTTPS. If you were at a store, everything would be HTTP, and only when you got to the checkout part, you would redirect it to PayPal or something, and only that part was actually HTTPS. And Google basically came along and said, "No, that's not a good thing. Everything should be secure and private, because nobody should be able to see what you're shopping for", and they kind of forced us all to transition from HTTP to HTTPS.

Now, how did they go about it? They basically have two prods, or even whips, that they can use to kind of push the industry along. One is the search engine. They don't even need to do it, it's enough that they say it, but sometimes they actually do it. They can say, "Hey, something X is going to be a ranking factor", and all of a sudden, everybody thinks that this is really important and worth investing in. So they basically said, "Hey, look, we are going to make the use of HTTPS be a ranking factor. And if you use HTTP instead of HTTPS, you might actually get penalized for it in terms of your rank."

And the other thing that they did, their other prod is Chrome, where they control the most popular web browser, and they can change the user interface in that browser to reflect certain choices that sites make. So I don't know if you recall that for a while if your website used HTTP instead of HTTPS, the address bar would actually have a reddish kind of background. "This is bad. This is dangerous. You don't want to go there."

**Nick Nisi:** Not secure.

**Dan Shappir:** Yeah. And you saw how quickly everybody transitioned from HTTP to HTTPS. And they basically decided to try to do the same thing, more or less, for performance. Only for performance, it turned out that it was more difficult, because with HTTP or HTTPS it's very easy to see whether a website uses HTTP or HTTPS. It's either one or the other. But how do you determine whether a website is performant or not? And that's the reason that they came up with Core Web Vitals. Now, we won't go into that, because that certainly deserves an episode all on its own. But once they introduced Core Web Vitals and once they said, "Here are tools that you can use to measure these metrics for your website. And you should know that in a couple of months we will start using these metrics as a ranking factor", that kind of pushed the entire industry to improve those metrics, which usually led to some sort of a performance or user experience improvement. Not always, but often.

**Break:** \[00:22:58.16\]

**Amal Hussein:** Alright, Dan - wow, that was a very insightful back-story into connecting the dots with Google's perf. So I think we've had Paul Bakaus on the show before, \[unintelligible 00:24:37.24\] I kind of brought up this exact topic with him then, which is like, "Hey, Paul, perf is thankfully really aligned." Well, not even perf; just perf, open web - all these business incentives that Google has are actually really well aligned with just good things for the web... Like, Google's pushing perf, Google's pushing more people using the open web versus walled gardens, right? All really, really good things. So they're thankfully aligned.

**Dan Shappir:** Mostly.

**Amal Hussein:** Mostly, right.

**Dan Shappir:** Let's not forget that we need to be vigilant. The open web is more than Google. It's a Google world, we are just living in it, but at the end of the day, the open web is bigger and more important than Google.

**Amal Hussein:** Right. I agree. But I think that you draw a very interesting correlation here with the lever that Google is able to pull for organizations. And I'm curious now, how did that lever play for Wix, and specifically, how were you able to use those levers or similar levers to drive performance thinking, adoption, awareness, all that stuff? How did you drive all that within your org?

**Dan Shappir:** So I just wanted to mention one more thing before I delve into that, and that's the fact that what Google has done is a good thing, but it has some consequences that are not always ideal. So some people are looking now at performance only from the perspective of its impact on SEO, and they're forgetting that the much more significant impact of performance is actually on the visitor experience. Because at the end of the day, if you get a visitor into your website, but then they bounce because performance just sucks, then you've not really achieved anything.

So it behooves us to remember that the primary purpose of having good performance is good user experience, is making your site available and accessible to all potential users, and that having better SEO is just a side benefit, as it were. In the context of Wix there was an understanding at Wix that if we don't provide -- I'm saying "we", but if Wix doesn't provide. I'm no longer there.

**Amal Hussein:** Yeah. Oh, by the way, I forgot to make fun of your legal disclaimer earlier. I was, "Is this a good time to make fun of Dan on air?" I was like, "You know what? I'll do it later."

**Dan Shappir:** Feel free.

**Amal Hussein:** But I'll do it now. Haha, that was really funny. I really enjoyed that disclaimer, that like, "I am not a robot. I am a real human. I have--"

**Dan Shappir:** I'm not a cat.

**Amal Hussein:** "I have my own opinions that can maybe be shaped by work, but they can exist outside of work. I am a human. See me for my whole self." We need a shared disclaimer around that.

**Dan Shappir:** Actually - again, I kind of digress, but I think that in a lot of ways, the situation in this regard is much better than it ever was. I mean--

**Amal Hussein:** Well, we can thank Twitter for that.

**Dan Shappir:** Yeah, we're all on Twitter.

**Amal Hussein:** Yeah.

**Dan Shappir:** We tweet whatever we feel like. And I remember times where you could get fired for stuff like that, and those things don't happen really anymore. So yeah.

**Amal Hussein:** Yeah. Leverage, leverage. I think it's leveraging Twitter, you know?

**Dan Shappir:** Exactly.

**Amal Hussein:** Yeah. But anyways, back to perf. Back to perf.

**Dan Shappir:** \[00:27:56.24\] Back to perf. So in the case of Wix, it was interesting, because what Wix understood was that if they won't be able to provide good performance or sufficiently good performance for people building websites on their platform, they would lose these people. If you built a website on Wix, and then because you've heard that performance is really important so you went and you ran one of the performance tools, which - they are in abundance these days; you've got PageSpeed Insights, you've got Lighthouse built into DevTools, you've got the excellent WebPageTest... There are so many tools out there that you can use to measure performance; GTMetrics etc. And if you measured performance and your score came out poor, then you would say, "I'll just drop this platform and go somewhere else." So from the Wix perspective, it wasn't just about doing all the right things in terms of getting the best results on the web, but it also was about being able to retain its customers.

**Amal Hussein:** Yeah.

**Dan Shappir:** That definitely increased the importance of performance at Wix. Like I said, certain people at Wix had the foresight about the importance, even way back in 2014-2015, but this whole thing really kicked into overdrive about two or three years ago... Again, very much thanks to these things that Google started to do.

And one of the things that we understood when that happened at Wix was that we were going to have to make a significant shift in how we handled performance. Because one of the things that we did - and I've actually seen a lot of organizations; it's kind of a common mistake - is that when you want to improve performance in your software, in your R&D organization, you bring in a performance expert, or you assign somebody to work on performance, and you basically expect that person to solve your problems for you. So the assumption is, "We are going to create a performance team, a performance core team, a performance expert", whatever.

**Amal Hussein:** Have a performance sprint.

**Dan Shappir:** Yeah. Maybe have a performance sprint once in a blue moon, and we'll fix everything, and everybody else can just continue to do what they do... And it just doesn't work. Because when you've got - I don't know, tens of people, maybe hundreds of people churning out code, new code all the time, and they have no awareness about performance and they don't take it into consideration, then the likelihood that one, two, three people will be able to clean up after all of these developers is obviously -- it's not going to fly.

So one of the things that we realized at Wix, at the time, was that if we want to make a significant progress in terms of performance - and we definitely needed to make such a progress back at the time - it's going to have to be something that's done across the entire organization. And in order to do that, what you're going to have to get is management buy-in. Because we as developers really love to think about grassroots movements, we can do things bottom-up... But the reality is that when you're trying to make something like a sea change within the organization, there has to be buy-in from management; because improving performance does not come for free. This is not something that you can do on the side. There are going to be associated costs with it. It's going to require effort to improve performance, and it's going to require ongoing effort to preserve performance. And it's going to come at the expense of other things. There are no free lunches. If you're going to invest more effort in creating performance software, that effort needs to come from somewhere.

\[00:32:05.27\] I remember once, a long time ago, I was speaking with some product person, who will remain unnamed, and they said something like that... I asked them why performance was not part of their product specification, and they said something like, "First of all, we don't know how to specify performance", and that's definitely a big problem. And the other thing that they said was, "Well, but don't developers write the most performant code that they can anyway?" And I literally burst out laughing, because when you're under the gun to develop some sort of a feature or capability, you will get it out the door, even if you have to write ugly code, even if you have to write non-performant code, especially if performance is not a part of your specification, and it's never checked or tested.

**Nick Nisi:** Isn't there a saying, like "Don't do performance first." It's like, "Get it working, then make it elegant, then make it fast", or something like that.

**Dan Shappir:** It's like, let's say you assign somebody to build a form. Let's say they do it, I don't know, in React, manually. And would you assume that they got the tab order correct if it's not part of the specification? Things don't automatically happen just because they should.

**Amal Hussein:** Right. I mean, I'm hearing a few different things from you, and also Nick, I think that was a great analogy. One is performance is something that should be like a baseline horizontal, right? In the same way that we think of user experience, performance is a core part of user experience, and it's also a part of accessibility to a degree as well, because if your sites are taking forever, or they're super-bloated or whatever, depending on where they're being served in the universe, that's bandwidth and cost... It doesn't create an inclusive kind of access gate for people universally on the web. So there's something to be conscious of. Like, when we're designing for desktop hardwire devices - not only are we doing most users in the West an injustice also, by pushing them away from the open web and into native apps, where they have a more predictable, guaranteed experience...

**Dan Shappir:** Exactly.

**Amal Hussein:** So there's kind of a few things here, and I totally agree with you on that. I do think that there's an educated gap with our non-technical stakeholders, as well as business, like, commercial folks at large. I feel like we haven't widely acknowledged perf as something that's kind of core to good user experience, and also impactful business metrics, in the same way as SEO. I feel like business people really understand SEO is important. Good SEO helps drive traffic. But I feel like that same kind of thinking isn't there for perf, and I'm not sure what the gap is. It's shifting...

**Dan Shappir:** Yes. I think that it's shifting. First of all, I owed my job at Wix to that, and now I owe my job at Next Insurance to that, to the understanding that you need to invest in performance, and that if your performance is poor, then your business metrics or KPIs will suffer. By the way, there's this awesome web.dev site that the Google people, the Chrome people maintain, and they have a lot of case studies about organizations that improved the performance of their websites or web applications and have reaped business benefits as a result. And I think that in that context, it's much easier today than it ever was. Kind of similar to accessibility. I mean, with accessibility, it goes even beyond, because there's also legal ramifications, which currently at least don't exist for performance. But you're absolutely correct that good performance is also an accessibility thing.

**Amal Hussein:** \[00:35:58.26\] Yeah, yeah. Absolutely. And I wish we broadened the definition of accessible, in the sense that a lot of people think like, "Oh, well, is this just targeting users that maybe have a physical impairment?" People don't realize if I'm holding a baby in one arm, I now have to use my phone with one arm, or I have to use a keyboard with one arm. Every single person on this Earth meets the spectrum on some level at some point in their day or time or whatever, right? It's something that affects everyone.

**Dan Shappir:** I'll give a concrete example. Say that you are overseas, you're at the airport, you want to catch your flight back home, you are on some sort of data plan which really limits your bandwidth or maybe also your network speed, and you want to try to make it into the airline website to see what's going on with your flight, but that airline website has a five megabyte background image of some plane taking off, that you literally care nothing about, but you actually need to download, and that eats up your entire roaming data plan, or it just doesn't load at all, and you can't check on your flight. These things happen.

So to get back to what happened at Wix - the great thing that happened was that we got the best kind of management buy-in that we could, which was literally the CEO standing up in an all-hands meeting for the entire company and telling everybody that performance is going to be our top priority. You can't get any better buy-in than that. We had the performance team at Wix, but all of a sudden, instantly, there was a switch in what we did. Instead of actually doing this kind of cleanup and catch up after the teams, we had the various teams basically knocking on our doors, telling us, "We want to improve the performance of our part of the product, our features, our capabilities, whatever. Please teach us how to do that. And also, please provide us with tools that will enable us to verify that; to measure where we are now, to measure where we are, let's say, in six months, and to see that we actually achieved some sort of progress." Which brings me to one of the most important points, that if you want to push forward performance within the organization, another thing that you're going to have in addition to buy-in from management are tooling to enable the organization to actually measure performance, both as it currently is and as it progresses, and also education; how to teach people about what performance actually means and the various aspects that have to do with performance.

**Amal Hussein:** Yeah, that makes perfect makes sense. I mean, if we break that down a little bit further, it means if a developer has a pull request that they're trying to send over the wire, having some type of baseline SLA and/or metrics tracking in that pull request that lets them know, "Hey, you're introducing a regression, or you're not", right? So that's one.

But also, on the product side, what that means is the product managers and designers and folks that are kind of shaping some of the feature requirements should be thinking around ,"What are our performance SLAs." Like, giving some guidance and understanding like, "What's our baseline today? How are we going to either maintain that baseline or improve it?" So I think that there's thinking there.

And for me, one of the issues with this whole thing is we have a culture in hygiene generally around like, "Just hurry, hurry. Get it done", right? So Nick talked about that, like three stages of like, get it done, ship -- I don't know. What was it, Nick? Something like make it elegant later?

**Nick Nisi:** Yeah, I was forgetting it, but make it fast is the last one.

**Amal Hussein:** \[00:40:00.06\] Yeah, right. Make it right. And usually, what happens is you ship it and then all of a sudden it's in the wild, and we're starting to already build features on it, on top of this thing that was not even hardened or perfected, right? So this culture of needing to go slower and work more elegantly - that's the aspirational goal, but the problem is really, realistically, most people just are like, "That thing needed to be done yesterday", and between the education gaps, the lack of tooling, and the lack of enforcement, I think it is hard for teams to do this, even if they want to. So how do we abstract that? What do we need to do as a community to push that further, so that we're building perf into tooling and having more turnkey ways of enabling this process?

**Dan Shappir:** Yeah. So I would like to mention two things. First of all, in the context of introducing Core Web Vitals, Google also specified ranges for the various metrics. So they basically told the industry, "These are the metrics that you should be looking at, and these are the values or the ranges in terms of performance that you should be aiming for, or shooting for." And that made it a whole lot easier for product people, because they can use these specifications that have become kind of an industry standard. So that's one really good thing that has happened.

Again though, you need to educate your organization about that. Now, fortunately, there's a lot of information about that already available. There are a lot of excellent talks you can find on YouTube, from the Chrome Developer Summit, for example. I've spoken about it multiple times, so you can find my talks on YouTube, or podcasts or whatever, and a lot of other people have as well. So this information is out there. So that's item number one.

What I would also like to mention is something called a performance budget. So one of the ways in which you can enforce proper behavior is by automating it. So kind of similar to the way that you have end-to-end tests, or even unit tests to ensure that as part of your CI/CD process, that because you are in a rush to release a new feature, you're not breaking some existing feature in the process; because otherwise, you would. So even though you are pressured to release this new feature-capability, if you break a test - well, guess what? You can't release. And what performance budgets do is that they enable you to do the exact same thing with performance. So basically, you decide that you're going to measure a certain metric. Let's take a simple one, the amount of JavaScript that you download down to the browser.

**Amal Hussein:** Controversial topic, by the way, because we love JavaScript. We love it. We love it so much.

**Dan Shappir:** Yeah, the JavaScript podcast.

**Amal Hussein:** Yeah. Use sparingly is best. \[laughs\] Not sparingly.

**Dan Shappir:** Not as sparingly as it used to be. I hope that somebody like Alex Russell doesn't kill me for saying this, but browsers have become much better at handling larger amounts of JavaScript. So I'm not saying go wild and start shipping gigabytes of JavaScript..

**Amal Hussein:** Gigabytes. Gigabytes is the new metric. I love this.

**Dan Shappir:** Yeah.

**Amal Hussein:** Gigabytes. \[laughs\]

**Dan Shappir:** But browsers are much better at handling larger JavaScript payloads than they used to be.

**Amal Hussein:** Right.

**Dan Shappir:** So again, the platform is kind of protecting us from ourselves, you might say, or saving us from ourselves.

**Amal Hussein:** Well, they've had to, in all fairness. They've had to.

**Dan Shappir:** Yeah, for sure.

**Amal Hussein:** I think like V8, actually, for example - the V8 engine which powers Chrome, Node by default...

**Dan Shappir:** Edge.

**Amal Hussein:** Edge now, right. So any kind of Chromium flavor - right. So it did a bunch of optimizations around stuff -- and for React.

**Dan Shappir:** \[00:43:53.27\] No, actually not specifically for React. I'll give an example of one optimization. They actually do stream parsing. So the JavaScript is actually parsed as it downloads. It used to be the case that you had to download the entire JavaScript resource, and only then would it get parsed. Now it actually is parsed while it downloads, and it's parsed off of the main thread. So it's not even taking up the CPU cycles from the main thread just for the parsing operations.

So some things at least are getting better, but that doesn't change the fact that if you make your website dependent on a whole bunch of JavaScript, you're going to pay a price for it. What you can do in the context of your build process is literally measure the amount of JavaScript that you've generated. And if the amount of JavaScript that you've generated exceeds a certain threshold - again, you break the build.

Now, I normally wouldn't recommend to measure how much JavaScript you're downloading now, and set that as your threshold... But I don't know. Give yourself a little bit of breathing room, like 10%. But then, when you hit that threshold and the build breaks, you need to make a decision. You can say you have the option of a) "I'm not going ship that version until we are able to get the total size of our JavaScript down", or alternatively, you can say, "Look, I'm going to increase the threshold, but I understand that there are consequences to what I'm doing. It's not something that just happens and I'm not aware of it. At least I'm aware that I'm increasing the payload, and that there will be a price to pay."

**Amal Hussein:** Yeah.

**Nick Nisi:** Would you delineate between a single page app, for example, where it's a lot of JavaScript... In that regard, would you maybe just have a threshold on chunk sizes then, and maybe trying to keep those individual chunks at some specific threshold?

**Dan Shappir:** Yeah, it gets complicated really quickly. Looking just at the total JavaScript size is a really blunt tool. As you said, we can go into all sorts of code splitting strategies, and how to deliver the code effectively over time, especially in single-page applications... It can get complicated. But one of the advantages of the blunt tools or the blunt metrics is that they're easy to understand. And again, you can make informed decisions, or you can do all sorts of optimizations.

Another, by the way, thing that you can do, another sort of performance budget might be your Lighthouse score. So you can do an end-to-end test, measure the Lighthouse score for that, and then if your Lighthouse score degrades beyond a certain threshold, then again, you would break the build. Now, here are just two things to watch out for. Lighthouse scores can jitter, or have certain variance, so I would run it, I don't know, five times and then take the median, or something like that. But the other thing is though that - suppose your Lighthouse score did degrade and it broke the build; it's not always easy to figure out why.

**Nick Nisi:** I'm laughing, because as you were talking, I ran Lighthouse on a site that I'm familiar with, and I got the message that, "This page loaded too slowly to finish within the timeline, so the results are incomplete." \[laughter\]

**Dan Shappir:** Yeah.

**Amal Hussein:** That's hilarious.

**Dan Shappir:** Yeah, that's not so good.

**Nick Nisi:** No.

**Amal Hussein:** That's hilarious.

**Break:** \[00:47:22.14\]

**Nick Nisi:** So in the last section, Dan, you spoke about having the right tooling in place to define performance baselines and metrics that you can measure, so that you can tackle them and then also stay within specific thresholds. If you were just getting started, maybe you ran Lighthouse and saw that your score was abysmal, then what would you do to get started with that?

**Dan Shappir:** Okay, so we need to kind of put tools into two categories here. So one category of tools are tools -- we can call them lab tools. Those are tools that you run in your own environment, as part of the development process, or maybe as part of the release process. And it's called the lab test because you're running the test in a control environment. So you're basically, let's say you're -- it's kind of similar to an end-to-end test, like I mentioned before. And the benefit there is that these tests are usually easy to replicate. So for example, if you see a bad score in the test as part of your CI/CD process, you can generally replicate that problem in your development environment. The developer can just do it on their own computer and usually be able to achieve similar results.

Now, the good thing about these tools, these lab tools is that they also usually provide a wealth of information. So if you're looking these days at a tool like Lighthouse, for example its online version, PageSpeed Insights -- by the way, this Lighthouse is like the engine that Google uses to measure performance across all their performance-related services. So you actually have the Lighthouse engine built into PageSpeed Insights, you have the Lighthouse engine built into DevTools, you can have the Lighthouse engine... They also provide like a version of it that you can integrate as part of your CI/CD process, and it's all open source. So if you're looking at where to find this stuff, just look for Lighthouse or look for Lighthouse performance budget, or Lighthouse CI/CD, and you will find a lot of tooling that you can easily integrate into your process, either open source tools, or alternatively, tools that you can actually purchase and then get some support for, and stuff like that.

But going back to how you actually start debugging it - so these tools these days actually provide a lot of information, and often actually tie into Chrome DevTools. Now, getting the expertise is not trivial. These tools can be really sophisticated, and that's exactly where having a performance core team or a performance specialist, or alternatively bringing in a performance consultant can actually pay dividends, because you definitely can't expect, let's say, your average web developer to be familiar with all the intricacies of the performance tab in the Chrome DevTools.

**Nick Nisi:** I don't know how to read a Flame Chart, to be honest.

**Dan Shappir:** \[00:51:56.18\] Maybe we'll do an episode about that. It's not that bad. But yes, it does require tooling and expertise, and experience, knowing where to look for stuff. And undoubtedly, the web has become such a sophisticated environment. There are so many moving parts these days that getting the best balance can be challenging. And I've seen a lot of people jumping to wrong conclusions. By the way, do you remember that old saying that's kind of attributed to -- who did Knuth attribute it to? I forget. That premature optimization is the root of all evil. Basically, what that means is that you shouldn't start optimizing before you've actually measured, determined that you have a problem, where that problem exists, what actually is the problem, and only then you should start optimizing. Because if you start optimizing based on your intuition, I can guarantee that you'll optimize the wrong thing.

**Amal Hussein:** Yeah. Thank you for bringing that up, because I think that's something that's very lost on folks. Performance should be very targeted in terms of your approach. You should first measure that something is a problem, and then work your way backwards from that measurement. So make a change, re-measure. There's a very methodical approach to perf work. It's not just like, "Oh, let's just ship this less JavaScript, or let's just do this." Get a baseline first. That should be your framework. Get a baseline. If you're trying to make a change, get a baseline. Until you have a baseline, you don't even know that you are making improvements towards that baseline, right? So get a baseline, figure out what you need to do to shift that baseline, then figure out how to continue measuring that shift... Right? So there's multiple aspects to this, but this rinse and repeat framework - you have to be very methodical when doing perf work. It's very different than software engineering, that's like painting with a wide brush on a blank canvas everywhere. Perf work is very much targeted reverse-engineering, repeated again and again and again and again.

**Dan Shappir:** And I can't tell you the number of times that I've seen flame wars on the internet somewhere about what is more performant foreach or a for loop. And I usually tell people, "I wish that that was your performance problem."

**Amal Hussein:** Right. Right, right. Oh, my God, right? That's so funny. Yeah, these little micro-optimizations that people argue over... It's kind of like the nerd brain trap, you know? It's like, no, it's not like using plus-plus versus this other -- you know, how you in increment a variable, or how many variables you have in your code is not the real problem.

**Dan Shappir:** I was around when that actually mattered, and these are not those days.

**Amal Hussein:** Correct. Right, right, right. We have bigger fish to fry now, right?

**Dan Shappir:** Exactly.

**Amal Hussein:** It's so interesting. And actually, you know what, Dan? You know what's interesting about that? It's that, for example, the entire framework for measuring performance -- so we've gone from worrying about these low-level code optimizations... I feel like that's like legacy baggage from back in the day. It's like some weird legacy historical baggage that we have from programmers that were dealing with like 20 megabytes of RAM as their top-level constraint, or whatever, you know what I mean? Those are way, way -- they're actually super-outdated. And you can actually leverage -- so I remember the Facebook team... We'll put a link in the show notes, but the Facebook team came up with this tool that was like a pre-optimizer. I can't even remember what it's called. Nick, do you remember what it's called? It's like this module for like -- you can hook into your build pipeline that optimizes your JavaScript. We will link it in the show notes. But essentially, it kind of takes -- you know how like when you write code for humans, it's optimized for human understanding. But if you really want to get super-nerdy about optimal code, you can write it, but guess what? A human's not going to be able to really read it or digest it in an easy way, right?

\[00:55:57.17\] So we write code so that we can collaborate and contribute to it. But if you really want to get those micro-optimizations in your code, there's tools that you can integrate into your build pipeline that will optimize your JavaScript as well, and if you're looking for those micro-optimizations. But really, most of the time you're looking for the bigger fish.

**Dan Shappir:** If you're looking for micro-optimizations, don't.

**Amal Hussein:** Well, no, that's a good problem to have, in the sense that it means you've exhausted all of your other options. \[laughs\]

**Nick Nisi:** Unless you start there.

**Dan Shappir:** And believe me, you haven't. I've seen organizations fight about optimizations of their JavaScript code, and at the same time, download a five-megabyte gif.

**Amal Hussein:** Right, right.

**Dan Shappir:** And, you know, what are you guys even doing...? And that brings me back to another thing that you want to measure... Because we spoke about lab measurements, there are also what is known as field measurements. And field measurements are about trying to capture the actual experience of your users in the field. So you want to effectively instrument your website in order to collect performance information, report that back into your own databases as it were, or alternatively into some service that you use - and I'll touch on that in a minute - and then you actually are able to know what your users are actually experiencing. Because one of the issues with lab tests is that very often we don't really know what our users are experiencing. We create a lab environment based on some sort of assumptions that we're making about what our users are experiencing, what our users have, but that may not be the case. So being able to actually collect real information from the field is invaluable.

And by the way, the way that Google uses performance for search ranking is based on field data. So Chrome browsers - when you browse some website, Chrome actually records the performance that you experience. And unless you opt out, it actually reports those numbers anonymously, of course, back to the mother ship. So Google actually collects performance information about almost everybody who's browsing using Chrome, and they use that information for the performance factor for their search engine. And the interesting thing is that they actually also expose this information to us. So we can actually go and look at the data that Google collects. You can look using the Google Search console, you can actually look at information about your own website... And there's also this great tool that Rick Viscomi from Google created called--

**Amal Hussein:** Core Web Vitals Report.

**Dan Shappir:** ...the Core Web Vital Technology Report, which allows you to actually graph the performance of various technologies out there. So if you want to compare, let's say, the performance of React sites to Vue sites, you can. And so that's really, really cool. But I still highly recommend for organizations to actually implement their own RAM collection method into their own website, so that they'll have real-time information from all their sites -- for all their sessions, sorry, or at least most of their sessions, that they'll be able to analyze in real-time and slice and dice whichever way they want. And fortunately, there are a lot of third-party tools that you can actually use for that purpose these days.

For example, you've got products like SpeedCurve, or Akamai mPulse, or Pingdom, or New Relic, or Raygun... Just search for RAM performance monitoring and you'll end up with this huge list. And what they do is, basically, they work very similarly to a Google analytics. You embed a small script in your website, they collect the performance information into their hosted database somewhere, and give you all the capability to view all sorts of graphs of the performance data that they've collected for you. And you definitely want to do that, because for example, you might think that the performance of your website on mobile is great, because you and all your developers have the latest and greatest iPhones, but it turns out that half your users have Androids. And do you know how much faster an iPhone is compared to an Android?

**Amal Hussein:** \[01:00:31.03\] Right.

**Dan Shappir:** No, I want to hear your guess.

**Amal Hussein:** Oh, to guess? I guess it depends on which Android model.

**Dan Shappir:** Latest iPhone versus latest Android.

**Amal Hussein:** Oh, latest -- like the latest and greatest, Pixel? I think it's orders of magnitudes faster, I think.

**Dan Shappir:** The iPhone would run JavaScript approximately three times faster. The latest iPhone would run JavaScript three times faster than the latest Android. But here's the thing - most of your users on Android don't have the latest Android; or they have the latest Android devices, but they are very cheap devices. They went to Target and they purchased a $200 phone, or a $100 phone. And these things run, like you said, an order of magnitude slower.

So being able to collect field data that shows you how your users actually experience your website can be crucial in this context, because you will say, "Hey, it turns out that all our Android users - they're bouncing, because their website is so slow."

**Amal Hussein:** Yeah, yeah. No, absolutely. So to kind of frame this and sum up this information, we definitely need to do some measurements, definitely need to do some analysis. That analysis should certainly be partially driven by lab data, bot data, CI data, whatever data. However, you need to also understand where your users are coming from, what types of devices they have, and try to actually replicate some of -- get some, quote-unquote, "field data".

**Dan Shappir:** It's not quote-unquote, it's actual field data.

**Amal Hussein:** Okay, field data. Oh, yeah. I mean, I'm trying to use the word field in a different way... So field, I will not put quotes around it. Okay. Start over. So field data - we're going to capture field data to essentially get information like latency, hardware, like how that hardware is performing... All the kinds of stuff around realness...

**Dan Shappir:** So I'll interrupt you, and I apologize for that, but the browsers - they simultaneously kind of limit the information that you can get, but they also, these days, provide really interesting information. So for obvious reasons, to prevent fingerprinting of sessions, browsers do prevent you from getting certain information about what the users exactly have. But on the other hand, you now have something called the Web Performance API. And if that's too complicated for you, Google have actually created a small library on top of that that really exposes performance information in a very digestible way. And by the way, all those third-party tools that I mentioned before, that collect field data or run data, call it whichever name you want - they actually all use this Google library on the inside.

**Amal Hussein:** Oh, interesting.

**Dan Shappir:** Yeah, because it's just a really thin wrapper on top of the web performance API that's just basically built into the browser. And so you can actually -- for example, you can get the LCP value for a user session. You can get the CLS value for a user session, or the FID value, or the FCPs. All these values, you can actually get them from the browser. And this is the quote-unquote "standard" way. It's actually standard-compliant. Google are trying to make these metrics an official part of the DOM, and the APIs to get them.

\[01:03:46.16\] And by the way, I didn't mention, I'm also an invited expert on the Web Performance Working Group for the W3C. So we actually talk about these APIs that Google is introducing. Some browser vendors adopt them, some unfortunately, don't, or at least not yet. So for example, Safari have adopted the metric that exposes FCP, the First Contentful Paint, but they've not agreed to adopt the metric for the API to expose the LCP metric. So you cannot actually collect LCP from Safari sessions. It is what it is, but you can from Chrome sessions. So at least for some of your sessions, you're able to get this metric. And now you have the Core Web Vitals values, not just from the lab, not just from running Lighthouse on your site, but from actual real user sessions. So you'll know, "My median or my 75th percentile", and I'm using 75th percentile because that's what Google uses. They look at the 75th percentile - "...that's the 75th percentile for my users on Android." And then you can know what your situation looks like.

**Amal Hussein:** Yeah. So thanks, Dan. So we kind of rumbled through a lot of various specific, detailed information and mentioned a lot of acronyms in a shorter period of time without really giving context to folks. So apologies if you're like, "What is LCP, FCP, TCP, whatever." Yeah. So Core Web Vitals is its own really discussion that we hope to get into in the future. We're going to link to some of that information in our show notes so that I think you can kind of dig into like what some of these statistics are. But to summarize it, it's really just like, how long does stuff take to paint on the DOM? How long is stuff taking to become interactive? So there are kind of various metrics around this, and Google has codified around three or four set of Core Web Vitals, I think - is it three the number, I think, now?

**Nick Nisi:** Yeah, there are three metrics.

**Amal Hussein:** Right, yeah. Do we want to just quickly mention -- and we've talked about this briefly in other shows before.

**Dan Shappir:** LCP, which like you said, how quickly stuff gets displayed, CLS, which is how visually stable the stuff is. You don't want a website where things jump--

**Amal Hussein:** Shift.

**Dan Shappir:** ...shift or jump around. And FID or First Input Delay is how quickly it responds to your first interaction.

**Amal Hussein:** You got it. Right. So let's not have too much jank, have it not take too long, and like input delays as well. So those are three areas that they're circulating around, and we're definitely going to hopefully have a show really dedicated to digging into that in the future. We're hoping to get some broad strokes from Dan, which we've already gotten so much phenomenal information around organizational adoption, and how to measure, where to measure, what to measure, et cetera.

Alright. So we've talked about this, like, how to measure, what to measure etc. in order to maybe have the buy-in organizationally around enforcement and the kind of swaying hearts and minds... There's a lot of education that needs to happen in order to do all of this within an org. Trying to do this within one team is really challenging, without having some advocates within the org. So can you shed some insight into how you were able to do that at Wix?

**Dan Shappir:** So at Wix, like I said, we had a core performance team that -- we were large enough, so we were able to afford that. Kind of similar to how some organizations have like a core security team, or a core privacy team, or an accessibility team. Whether or not your own organization can afford it, it's a question, but you definitely do want to have people that, let's say, have a larger skillset, let's call it, or specialization in that context. So like I said, improving performance does require resources, and that's part of it.

\[01:07:42.04\] So one more thing that we did at Wix, we also had performance champions in different parts of the organization. So you had that core team which was a central repository of knowledge and information and whatnot, but within the different teams, you also had your \[unintelligible 01:07:57.11\] representative pushing on performance within that context of that team. Now, obviously, if you're smaller, then you may not need these two levels; one level might be enough. But if it's a large organization, that's something that you definitely want to consider and look at, because even with an organizational buy-in, if you have too small a team, they can easily get swamped. So that's one really important thing that we did.

I mentioned before, again, if you're a smaller organization and if you can afford it, you can bring in a consultant; there are some great people out there that can really push performance along. And like I said, there's also, thanks to Google and others, there's a ton of excellent content out there about how to improve performance. People like Tim Kadlec, or Tammy Everts, or Addy Osmani, or -- there are so many people providing so much excellent information about performance.

**Amal Hussein:** It really is. I mean, I think it's a definitely a good investment if you're interested in digging into this a little more broadly. I think for smaller orgs, the challenge is you have one or two engineers that are really doing a lot of different types of things, right? So I think that's where maybe frameworks come into play, where they can help with abstracting some of that context. But this is hard stuff, and don't beat yourself up for it too much. I think we've kind of scaled the web and we've scaled our surface areas without actually catching up, educationally, the cultural --

**Dan Shappir:** Yeah, the amount of information that you need to grasp and know these days in order to be a front-end engineer, not even talking about full-stack engineers, that mythical beast - the amount of information that you need to be knowledgeable about to experience it is just overwhelming. That's undoubtedly true.

**Amal Hussein:** It really is. It really is. And so my advice to folks who are looking to dig in is actually, I would say, start at the browser level. Understand just how browsers work and how networking works, right? That's a really good place to start.

A book that I would recommend is High Performance Networking by Iliya Grigorik. He spent time at Google and achieved that name... He colloquially was called the internet plumber while he was at Google. He's since moved on to Shopify, but spending a lot of time helping teams at Google optimize their performance, and really doing that performance work at the scale and breadth of at Google was just fascinating. So a fascinating experience to learn from. So I would highly recommend that book. Start with networking, and then work your way up to Flame Charts and all the other stuff, but just know that this stuff is hard, and don't beat yourself up for not mastering it right away. Right, Nick?

**Nick Nisi:** That's right.

**Amal Hussein:** That's right. That's right. It's complicated.

**Nick Nisi:** And stick to foreach, instead of for loops. \[laughter\]

**Amal Hussein:** That too. Anyways, alright... Well, so on that note, Dan, this was really a very firehose, informational show. You clearly are someone that we should be learning more from on a regular basis. Thank you for all your work. So we'll link to the lovely case study that you wrote for Smashing Magazine for folks who want to get into some of the specifics around what changes happened at Wix. We'll have another show dedicated to Core Web Vitals, and for those who want to follow Dan or learn more about Dan, he's on a podcast called JavaScript Jabber... And where else? Where else can folks connect with you, Dan?

**Dan Shappir:** On Twitter, obviously. @danshappir on Twitter. Yeah, Shappir with a double P.

**Amal Hussein:** Yeah. Shappir with a double P, and don't -- what's the word? Legal disclaimer aside, right? Of course, for all the things, right? Just know that Dan is not representing - insert company name here.

**Dan Shappir:** I'm opinionated. Let's put it this way.

**Amal Hussein:** Yeah. Insert company name here, for loop or something, right? Okay. So thank you so much, Dan.

**Dan Shappir:** And I'm so close to 5,000 followers, so maybe you can push me just ahead of that mark. I don't know. Let's see.

**Amal Hussein:** Oh, yeah. If you're not following Dan, you should totally be following Dan.

**Dan Shappir:** You've done that once already.

**Amal Hussein:** Yeah, I've already put a plug out to Dan's Twitter feed before, but yes... So, alright, Dan, it's been a pleasure.

**Dan Shappir:** Same for me.

**Amal Hussein:** We hope to have you back again in the future, and have a wonderful week, everyone. Thanks so much.

**Dan Shappir:** Indeed. Buh-bye. Thank you. Thank you for having me. Bye.
