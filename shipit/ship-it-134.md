**Justin Garisson:** Hello, and welcome to Ship It, the podcast all about everything after git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm caffeinated this time.

**Justin Garisson:** Caffeinated is a good call. And caffeinated for our last guest on our show.

**Autumn Nash:** I know... It's like sad.

**Justin Garisson:** It is sad. So for anyone that's listening, that we actually -- I heard people that just started listening to the show... Welcome. We're glad you're here. By the way, this show is not going to continue on past the end of 2024... So a bit of news is Changelog is switching some stuff up. They want to focus on the main podcast that they have, Changelog & Friends, the News and the main Changelog podcast... Which is great. I think Jerod and Adam have a lot of good networks, and I love those shows, so continue listening to them... But that did mean they had to make some tough calls about the other shows in the Changelog network right now, and that includes the Ship It show, Go Time, JS Party, and Practical AI. Those four shows are not going to continue after 2024. We'll have the link to the blog post announcing it in the show notes here... But also, Autumn, we're starting a new show.

**Autumn Nash:** We couldn't give up being nerds and talking too much on the internet, so... Here we are.

**Justin Garisson:** I mean, I love this community we've already built, the people that we've already met through the show, all the things I've learned through the show have been awesome...

**Autumn Nash:** Dude, I've straight made besties from the show. Me and Hazel do hoodrat stuff like every weekend.

**Justin Garisson:** I've been seeing you -- yeah, you're just like going to have dinner. This is awesome.

**Autumn Nash:** I feel like we've come too far. We have to just do it.

**Justin Garisson:** And the fact that we already had like 20 more awesome guests lined up for next year for Ship It...

**Autumn Nash:** And I'm really excited to talk to you.

**Justin Garisson:** Yeah. So we are going to continue the show. The new podcast -- and in the last episode we didn't have a title. So finally, we have a title and a domain for it, so we can tell people. It's called Fork Around and Find Out.

**Autumn Nash:** I love it so much. I didn't love any of the other names \[unintelligible 00:04:51.03\] I was like "Ugh..." And that one, I was like "Let's do it!"

**Justin Garisson:** Yeah. There was a lot of names, and a lot of them were either just like "That's okay...", or the domain was taken, or the social was taken, whatever... And fafo.fm.

**Autumn Nash:** If we're going to spend this much money on it, it needs to be fire.

**Justin Garisson:** Yeah. And that is also the other piece, is we do want to make this as sustainable as possible... And when I first emailed Jerod and Adam about taking over the Ship It podcast - I didn't want to take it over. I was just like "Can I help?" Because I liked the show, and I wanted to continue. I was like "Do you want to co-host? What do you want to do?" And my main thing was like "I don't have time to do all the things required to maintain a podcast long-term", and I wanted something that could be long term. And that is the goal for the new podcast as well.

And so we do have people that we're paying to do stuff that we don't have time to do, stuff like editing, sponsor management, all that stuff. So we don't want to have a premium tier, I don't really expect to have the listeners pay for it... I'm terrible at doing the Plus Plus content that we have here on Changelog... I don't ever think about it in the middle of a conversation.

**Autumn Nash:** We just talk too much at a time.

**Justin Garisson:** Yeah. Like, all the good bits... I'm like "No, that has to stay in."

**Autumn Nash:** I feel like it would just make the actual podcast... You know what I mean? Like, saving the good stuff just for people that are paying for it...

**Justin Garisson:** I mean, some of it is the good stuff, some of it is just like the random asides... Like the great conversation we had with Austin about kids, and managing JIRA tasks with chores, and stuff like that... That's not necessarily -- that's good content to me, but it's kind of maybe...

**Autumn Nash:** His website is so dope.

**Justin Garisson:** Yeah. It's an aside. It's not something that needs to be in there. But we're just gonna leave everything in for the new show, and I hope that sponsors will pay for it.

**Autumn Nash:** Or that time when there was a poem about tars...

**Justin Garisson:** Oh, that was amazing. Yeah, that was Plus Plus.

**Autumn Nash:** \[unintelligible 00:06:36.17\]

**Justin Garisson:** Yes. If you have not listened to that episode... What number was that? It was so long ago now. But "Tars all the way down..."

**Autumn Nash:** \[unintelligible 00:06:47.07\]

**Justin Garisson:** Yeah. I was blown away by that. It was great. So anyway, the link will be in the show notes. By the time this episode comes out, the website should be available. I don't know that the RSS feed will be in all of the pod catchers, but it should be in most of them that aren't super-slow. So look in the show notes. Fafo.fm is the website, and you can subscribe there \[unintelligible 00:07:10.14\] But we have today our last guest. Phillip Carter is a principal PM at Honeycomb. Welcome to the show, Phillip.

**Phillip Carter:** Thanks for having me.

**Autumn Nash:** I feel like you're gonna have to come back on, though. You have to come back on the new podcast.

**Justin Garisson:** Oh, it's gonna be great, because we just get to redo all of our amazing guests, and just like "Hey, this is new."

**Autumn Nash:** So we have to be like extra ridiculous for this one, and then you have to come back.

**Phillip Carter:** Awesome. Sounds good. I'd be happy to do it.

**Justin Garisson:** And in the pre-show we did determine that being a PM doesn't mean you work at night... It's something else beyond that... But tell us a little about your background. How did you end up as a principal PM at Honeycomb? And what software are you responsible for?

**Phillip Carter:** \[07:52\] Yeah, so I started my career working at Microsoft outside of college, and I joined the .NET team. And that was pretty fortuitous, because this was around 2015, when we had the very first, very crappy preview of cross-platform .NET that we were building, which at the time was called .NET Core... And this very big goal of like "Hey, we want .NET to be moved from like this Windows-focused development platform", which is fine, but like clearly not the future of software, "to be like inherently cross-platform, inherently native when you deploy on Linux, and be able to be so that you could run on Linux and deploy on Windows, if you wanted to. You'd be a weirdo for doing that, but you could... But like you could build your apps on Windows, deploy on Linux, build your apps on \[unintelligible 00:08:35.22\] map, deploy on Linux, build your apps on Linux, deploy on Linux... Do whatever the heck you want. Work well in containers..." All the things that we associate with modern software development these days - these were all just like big bullet pointed lists of like "We need to add a green checkbox to every single one of these. And we're going to do it in like five years." So we did.

**Justin Garisson:** Is it not called .NET Core anymore?

**Phillip Carter:** No, no, it's just called .NET. And there's huge, huge branding things... The Windows thing was called .NET or The .NET Framework, and they're like "Okay, we still have to keep calling it the .NET Framework." There's actually some legalities associated with that. But at the same time, it's like very obviously the legacy .NET; you can't call it Legacy .NET, because there's all these existing customers who are like "Wait, it's legacy? That means it's going away?" And we're like "No, it's like literally supported infinitely." You pay absurd amounts of money to Microsoft, of course the software is going to be supported. But also, if you want to run on all these new services that are lighting up in Azure, or whatever - yeah, you're gonna have to migrate, because those things are not just like Windows boxes run in the cloud; these are Linux hosts. These are -- the whole world of cloud development is clearly not Windows-focused... And so - huge journey.

So I worked on our languages, specifically on the F\# language and the C\# compiler quite a bit, and then IDE tooling in Visual Studio. And also our family of like Visual Studio Code, and like there were other cross-platform language server type stuff. Keep in mind also, when the concept of a language server was still being actively developed.

**Autumn Nash:** At this point were you an engineer, or were you a PM?

**Phillip Carter:** I was a PM. But PM was kind of weird in that group. We wrote a lot of code, we did a lot of prototypes... It was not uncommon for PMs to actually just implement entire features, or do the initial architecture for something, because we needed someone to not be tied to the current shipping schedule, and just go and explore, see what we can do...

**Autumn Nash:** That's the kind of PM I'm trying to work my way into.

**Phillip Carter:** Yeah, it's fun.

**Justin Garisson:** Someone that's outside the sprint cadence. You're like "Now I can do whatever I want."

**Autumn Nash:** I was like "Can I contribute upstream?" And they're like "If you want." And I was like...

**Justin Garisson:** That's when the night job kicks in.

**Phillip Carter:** I do really recommend it. I mean, I think, as an aside, in terms of like product work, there's a lot of literature about how to be a good PM, and how to do good product work and stuff like that... And I think a lot of it ends up getting over-indexed on, and a lot more time gets spent on things like product discovery, when you just kind of have your hands in all the things at all times, and you're constantly interacting with your users and all of that. You can spend shockingly less time on so-called PM work and still have a pretty clear set of goals... And then develop just a lot more empathy, especially in developer tools. Your users are writing code, they're doing XYZ stuff, and it's somewhat of a sometimes controversial thing to say, like "Hey, you should do that too as a PM, because that's just the reality that your users are living." And what better way to understand their problems than to literally experience some of their problems yourself, and be like "Wow, this sucks. Maybe we should like fix this"?

**Autumn Nash:** That's why I feel like I want to stay as technical as possible, and using the products that I'm a PM for, because I don't want to lose the empathy for developers.

**Justin Garisson:** Intuition is way better than data. If you're like data-driven, you're like "No, no, I know how this should work, because I do it." It's so much more powerful than saying "Here's why, and I will show you why."

**Autumn Nash:** \[12:03\] I'm not gonna lie, but I'm so excited to write code for fun and for an experiment, and not in production...

**Phillip Carter:** Nice.

**Autumn Nash:** Like... I'm back!

**Justin Garisson:** Not being on call is a magical experience. Phillip, so out of college, doing this PM -- PM work is usually like more of a leadership type role for like a pretty big sort of migration progress... Again, legacy makes money. Now you're like "Oh, that legacy thing makes a ton of money, and we need to make it make new money." It's like a big responsibility straight out of college.

**Phillip Carter:** It is. And one of the places where I think Microsoft - or at least certainly Microsoft in the era that I was there - is really a great place for growing PMs, because they do throw you into the deep end. But then they also treat you like someone who is capable of swimming in the deep end. So occasionally, someone - it's not the right role for them, or frankly it was a little too much, or something like that... But the majority of people who I work with, they're fully intellectually capable of handling all of those kinds of things. And there's obviously a learning curve and a pretty good structure to make sure that you don't make a horrifying mistake. But it's a great way to learn really quickly.

And since I've switched over to Honeycomb and into the startup world, there's this meme about people in big tech can't work in startups, because they're too used to like too much structure and too much stuff around them, and yadda, yadda, yadda. And I'm like, no, we were like feral children left to just try to make these things work, with users in the millions... And the concept that we have users in the dozens right now for this thing is not necessarily easy mode, but easier in some ways, and harder in some other ways.

**Justin Garisson:** The small-scale impact is amazing. This is my first startup too, and coming from Amazon, where it felt like the PM group was also thrown into the deep end... But at some point, Amazon was kind of like putting their foot on your head, and you're kind of like "Wait a minute, I'm trying to swim here. What's going on?" And then at a startup, it was just like "Oh, I have all the same responsibilities, but I have none of the process overhead of like "Oh, I have to go talk to 18 people before I can do that one thing that I know is the next thing I have to do."

**Autumn Nash:** I'm really excited to be working as a PM for Linux at Microsoft, in the insecurity realm, because it's so new to Microsoft that it's got that startup vibe, which was very much Keyspaces at Amazon. You get to do all the things and try all the things, but under the shell of corporate America.

**Justin Garisson:** Yeah. I mean, security is really new for Microsoft.

**Autumn Nash:** I knew you were going to throw shade at me. Why are you like this? Also, I've decided Phillip is our people, because did you see him give his whole background with just a little bit of honesty and truth and shade, but then also like we're right here...?

**Justin Garisson:** You can have a good experience and have some shade. It's fine.

**Phillip Carter:** You can, absolutely.

**Autumn Nash:** But it's being honest, and people being able to trust your opinion.

**Justin Garisson:** And your experience is your experience, and no one can take that away.

**Autumn Nash:** It is. But when people aren't honest and they'll just say all the good things, and they'll just like blow smoke up at you, you won't trust them and their opinion on anything technical. That's how you lose all your credibility.

**Break**: \[15:16\]

**Justin Garisson:** Alright, Phillip, here's one honest thing that I have wanted to know for a very long time.

**Autumn Nash:** Oh, no...

**Justin Garisson:** There was a .NET fork called Mono. It was its own open source thing. How was that treated inside of Microsoft, being on this .NET team that was trying to get there, and they were going from the other side, like "We made this .NET native thing on Linux"? Was that like "Don't ever talk about it?" Was that like "We are going to beat them and consume all their stuff"? How was that treated?

**Phillip Carter:** Surprisingly, pretty well. So at the time, Miguel - he's now a good friend; shout-out to Miguel. You should talk to him sometime. He's amazing. He was the lead of the Mono project, he founded it when it started, and then helped create Xamarin with Nat, who has since became CEO of GitHub, and all that... But they were very much set out to focusing their runtime on making it work as well on client libraries as much as they could. Once mobile hit, Miguel was attached to it, and he's like "I love this form factor, but I want to use C\#. That's just the way it's going to be." And when you make a lot of optimizations for a mobile form factor - which is great - unfortunately, that can often come at the expense of really good performance server-side for... The constraints are just fundamentally different, when you have a backend service where GC pressure really matters when you have a couple million requests per second or something like that. It's just fundamental behavior of the garbage collector that needs to work a certain way compared to how you would want it to work in a battery-constrained device doing certain things.

Obviously, lots of similarities. There's elements of systems programming going on here, where there's good code written in both places... But very often, when you would try to host a monoservice somewhere, it would just fall over, and you'd be like "Oh, is this a joke?' It's like "No, it's not, actually. It was just made for something completely different." So we have this kind of complex relationship - this was before the acquisition of Xamarin - when we were building our own thing and targeting the backend with ASP.NET apps, and saying, "Okay, we want to make this -- a Go developer should be able to pick up our stack and be like "Oh, great. This has the same perf that I care about." That was sort of like the target we were going for.

\[20:04\] But on the Xamarin client side, we're like "Okay, this is just a fundamentally different runtime, and actually even different set of libraries." And then we worked with them to start unifying some of the library layer. Because there's just all the different utilities in the .NET standard library that - it really doesn't matter where it runs... But they had their own version of this, and we had our own version of this, and we're like "Okay, this is--" Regardless of what degree we work together on, we all agree this should just be a standard that we all consume. And who owns the code? We'll figure that out. It's an open source project all around anyways, and so there's actually a lot of collaboration on that side of things... And then eventually, strategically, I think they were probably aiming for this at some point. We acquired Xamarin, at which point we were able to unify significantly more... And then we actually were able to go on a very big technical project where we unified the runtimes entirely, and were able to actually do that quite successfully, to the point where it's actually the same singular runtime that can run on a client device, or on the backend. And they have excellent performance characteristics, and it's actually - different parts of the runtime will activate depending on the deployment environment, and the garbage collector has 5 or 6 different modes that it can operate under... And it'll have different behaviors depending on the kind of thing that it's packaged into, and stuff. And this is all something that was architected and designed for. It's pretty wild.

**Justin Garisson:** Do you know if other languages do that? Is that something that's common?

**Phillip Carter:** I know that in Java they do that, because they have many different runtimes for different purposes. However, you do need to -- the burden is on the developer to deploy the appropriate runtime for their thing. Whereas in .NET, we architected it. So it's just one thing that you deploy to whatever device, or server, or what have you. And the right things activate in the right way.

**Autumn Nash:** It also has to do with a lot of the garbage collectors. There's different garbage collectors, and you need to tune them in different manners, depending on what you're doing. So it's possible, but it's not as easy. You need to know what you're doing, or you need someone to know what they're doing, or to do the research, \[unintelligible 00:22:05.15\] But once you get it running, it's very, very effective. And the new changes they've made to the garbage collectors, and \[unintelligible 00:22:12.17\] and all the different projects make it very, very effective. Java's gotten progressively faster in the last couple of runtimes. So they've done a lot of really good work, in a lot of the profilers and things to get the information. The new projects that are coming out have made a lot of advances in such a legacy technology.

**Phillip Carter:** Oh, yeah. Java - it's an impressive engineering system that they have, that they've built with just all these really smart people there. And obviously, the language side is also evolving, with all these great features and stuff... But to your point, Java's low-key really good with perf. And I think there's this association a lot of developers still have, with like "Oh, Java is slow", or whatever. And it's like "Well, yeah, in 2005..."

**Autumn Nash:** Well, not just that, but \[unintelligible 00:22:56.26\] in just a lot of the things that are coming out, that are... Usually, as it gets older, people are just maintaining it. But the things that have moved forward in the last couple of years in Java are really impressive to be at this stage in technology, to be just making it so much more efficient. And to be able to bridge the gap -- I don't think we're ever going to get to the point where it acts like it's something that doesn't need to be compiled. But the gains that we've made in the last couple of years are so impressive that it's getting competitive, if you don't want to write in C++, or you don't want to have to write \[unintelligible 00:23:32.27\]

**Justin Garisson:** I remember at Amazon, because the problem with Java is no one ever upgrades their Java. It's just like "Oh, well, the perf problems of 2005..."

**Autumn Nash:** Oh, don't... You're gonna give me PTSD. Stop.

**Justin Garisson:** ...because people are still running it from 2005. Like "I'm still on Java 9", or something like that. But I remember at Amazon they had this whole like shim layer that they built in. And I'm pretty sure there was a blog post about this, where they were like "Well, we're not going to rewrite all our Java, but we are going to compile onto the new virtual environment \[unintelligible 00:23:58.29\] the compiled VM runs." And they saved millions and millions of dollars, because they were like "We've just got better performance."

**Autumn Nash:** \[24:07\] The performance literally paid for like millions of dollars.

**Justin Garisson:** All the engineering time, plus more. Yeah. It was crazy. Just like "We just put a shim. We didn't rewrite the code. We recompiled it, put the shim..."

**Autumn Nash:** During the pandemic, when they were firing other people, our department kept growing, because that's how much money optimized-- It got to the point where they wanted to rewrite everything in Rust, but Java got so much faster that they could prioritize what they wanted to write in Rust. And Amazon does a lot of things wrong in open source, with the way the \[unintelligible 00:24:37.29\] team is built, and how they maintain and they contribute up open source upstream is just phenomenal. They hired a lot of very smart people to do a lot of amazing things, and I love that it's contributed back and it's not just taking for Amazon. I think if they ever do anything well, they did it for that team.

**Justin Garisson:** So... Fast-forward a little bit here. Let's get out of the .NET era, and -- at Honeycomb...

**Autumn Nash:** That's baller though, because .NET was like -- you know what I mean? Like, to do that all on one run time. Like, I feel like you said it, but you didn't say how that is amazing to run mobile, and for it to be able to do the decision -- or not decision-making, but to do the change for you to know how to run on that.

**Justin Garisson:** Build that into the language. Don't make it hard for the developers.

**Autumn Nash:** Yes. I don't feel like you gave yourself enough credit in that statement. Like, that is impressive.

**Phillip Carter:** Well, it was the hard work of a lot of people. But yeah, I think we had some pretty ambitious goals, and we kind of nailed them. And I'm really proud of that.

**Autumn Nash:** Yeah... You just talked about it like you just made the soup of the day. You're doing engineering magic over here. Like, what do you mean...?

**Justin Garisson:** And then you leave Microsoft and you're over at Honeycomb now. You went straight from Microsoft to Honeycomb?

**Phillip Carter:** Yeah. So it was kind of funny, because after we -- basically, one of our major success metrics was "Well, how many users are using the new net?" We reached about 5 million, and that was sort of like a major benchmark, and we hit it. And I just had a conversation with my PM director, and I asked him "So what's the next big thing? I mean, this was really ambitious, and we knocked it out of the park. What's the next big one?" And he's like "I don't know." And that was because he was switching jobs over into another department, offered a VP position at Microsoft. I'm like "Oh, that's why you don't know. Okay. Well, I guess maybe I'll look around too", because I really liked the team that I was on, but you know, you complete an ambitious arc and you're like "Okay, well, let's kind of look around what's out there. Maybe there's something new."

There's clearly a lot of interesting stuff going on in developer tools outside of programming languages... So like looking up stack, what are the things that are there? So I ended up talking with some folks at Honeycomb, just because I didn't know anything about observability at all. But I was aware of Liz and Charity, and I was aware of like a general consensus among some of the .NET developers that I knew that Honeycomb was doing things the right way, or the better way, or whatever. I'm like "Okay, cool. Let's explore. What's the worst that can happen?" Like, it's not for me? Alright, cool.

So I chatted with them, kind of did the whole interview loop... I really liked the people, and was kind of sold on some of the initial vision. Because Honeycomb - it came out before Open Telemetry, but it was still very, very early stages when Open Telemetry was formed. And Honeycomb as an observability tool is fundamentally different from the rest of the market. It has this ambitious goal of "We really want to help developers reshape fundamentally the way that they introspect their systems", and this gets from super-high level, like how you do an analysis workflow... Instead of saying "Oh, I'm going to look at my logs, and then I'm going to go look at traces that correspond to that, and see if I can find a match..." And like "Oh, I have this metric that says it's up. Alright, cool. Are there any logs that relate to this time range, or something?" Kind of a broken debugging flow compared to what we do. And that kind of attracted me.

\[28:08\] But then at the same time, they're like "Well, there's also this whole other thing with Open Telemetry", where regardless of our product shape or what we think people should be doing best, there's this open standard that's evolving, that is ambitious enough that people -- it captures the majority of what people care about. And we have some pretty big customers, who are like - them continuing with Honeycomb is pretty contingent on us being quite deeply involved in the project.

So one of our larger customers, quite literally, in clear contract terms, was like "You need to be significantly involved here, because we're taking a bet on standardizing on OTel, and we're taking a bet on using Honeycomb across all of our teams. And I do not want one of those pillars to falter in some way. So I trust that you care about your business, but do you really care about OTel? Figure it out." That's what the role was scoped to, was "Okay, we're going to take a bet on OTel. Great. We did it. Mission accomplished! But what is that bet? What are we doing, though? Where should we point our time, and our limited number of engineers we have? Should we hire for this? For how many? What are the most important things to invest in? What are the major problems that people have?" All the big stuff.

And I was just given the mandate to go and shape that into "Where do we point our force vector?" if you will, and "How do we keep doing that?" And then how do we start, a) trying to start skating where the puck is going, of like the project is evolving in this way... Can we make sure, at least at a very minimum, does the Honeycomb product not get destroyed by this thing in some way? We don't want to be caught by surprise, in some capacity. But then also, b) okay, well, we do have a perspective here. How much of our perspective on observability aligns with the overall perspective of Open Telemetry? How do we make these things come together in a way that fits very well, and works for everyone involved? And how do we ultimately demonstrate that we are leaders in the project, instead of just consumers of this open standard? That was the main thing. And that's what I did for about 3 years or so.

And being a startup, I kind of had my hands in all kinds of different places, but I was always very fundamentally rooted in being an Open Telemetry maintainer, which I've been since - -gosh, I think like the end of 2021... And trying to fix all kinds of problems that like "Oh, someone's trying to use Open Telemetry plus Honeycomb, plus this language, plus this environment that they want to run in. It falls over in this way. Okay, great. Is that a legitimate bug? Is that a documentation problem? Is that like they wanted to use an API in this way and they couldn't figure it out, and we need to add a more convenient API to something to just make it more obvious for someone how they accomplish something?" Just multitudes of that kind of work over the course of the years, and just being much more involved in the project and trying to shape what are the things that we try to make good in this big open standard that none of us have the time to really work 100% on all the time. And yeah, I don't know... Kind of \[unintelligible 00:31:10.17\] stuff, but did that. Still doing that, frankly.

**Autumn Nash:** You guys can't see it, but Phillip made the best face. It made my whole life.

**Phillip Carter:** So in fall of 2022, or late summer of 2022, I'd sufficiently been at Honeycomb long enough that I kind of got the whole breadth of what does the customer journey look like, what are people struggling with when they onboard, versus when they're on day 500 of using the product? And what are their struggles when they're trying to onboard other teams in their organization? ...because this one group buys Honeycomb and they have an awesome time, but that doesn't necessarily mean that this other engineering team that they work with is also going to have a great time, and their challenges might be slightly different... And I came to the conclusion that our product has all of these things that people want to do, where the answer lies on some probabilistic distribution.

\[32:06\] A very concrete example that ultimately turned in one of the features that I helped build was people come in saying "Hey, I want to query something in this way. I care about this information." Well, there's possibly hundreds of queries that could technically work for what you're trying to do, and there's no single one that's guaranteed to be the right one. If you say slow requests - okay, well, there is a way to technically measure that... But then you get into, okay, we have all these different aggregators you care about. An average. You care about a P80, a P90, a P95... Do you not actually care about any kind of aggregation? You just want to see a count of some kind? Do you care about like a max, and you want to see the maximums? And then when you say "Okay, slow requests, but with respect to what? Is it with respect to a particular call to an HTTP route, or a call to a database, if you have multiple databases?"

There's so many different ways to potentially answer this in terms of a query, and nothing in our product was like "Hey, here's how you do that." It just all assumed that you knew how to shape what you cared about in the right form and the right kind of query to do that. And this is just something that -- I mean, frankly, it's still a problem with Honeycomb. And the natural language querying thing that we built in early 2023 is just a step in the direction of helping people there. But I kind of wrote this document that was like "Hey, there's all these areas in the product where the solution lies on some probabilistic distribution, and there are parts of that distribution that are likely to be more useful than other parts." And that is squarely the domain of machine learning. So we should investigate, we should explore, we should experiment, we should try stuff, ship to learn, see what happens, \*bleep\* work around and find out... Or sorry, fork around and find out.

**Autumn Nash:** We've got to keep Phillip forever. He has to come back. He is our people.

**Break**: \[33:55\]

**Autumn Nash:** So did Honeycomb create OpenTelemetry, or was it like an open source project that they ended up adapting? Or did they start it as an open source product? Was it started as an actual product for Honeycomb that wasn't open source and then it was open sourced? How did all that come about?

**Phillip Carter:** Yeah, OpenTelemetry was founded by several folks... I don't think -- well, I don't remember if Liz was on the founding group or not. I don't think she was. But she was part of the initial governance committee. So basically, there were several open source projects, like OpenTracing, OpenCensus, Jaeger, Zipkin, all solving various flavors of the same problem, but not quite completely enough, to the point where there needed to be another project spun up to do something in a slightly better way. And so people who worked on all of these things, and also other folks who worked at Splunk, or at the time, I think Morgan was at Google, and stuff, but... Several of these folks, they all got together and they're like "Hey, we're all solving anywhere from 50% to 75% of the problem space that we need to be solving for, and we're all doing it independently. Let's all get together and go to 100% of the problem space that we need to solve for, together, as one standard. Because a million different standards that are slightly incomplete for certain use cases that people have is like -- we're not going to grow, and the world of proprietary instrumentations from all the other vendors is just going to stay there... And then that has its own set of negative consequences that organizations actually do not like... But we're not meeting them where they are, so let's get together and do that." It was this consortium in about 2019 where they did this.

**Autumn Nash:** I love that you got that many engineers and people good at things to like -- ot's like, for them to say "Okay, our projects maybe need some improvement, and we should work together." You got people that are engineers in a room to say that out loud?

**Justin Garisson:** Watching this all happen from the outside, right? At the time, I was just an observer of "Why do they keep changing the names on all these things?" Because OTel came from something else that was Open-Something. I don't remember what it was. But I remember watching Jaeger, and all those things... There were all these little projects spinning out of big companies, and they all were doing bits and pieces here and there. And then it all just got together, and the companies didn't want it, it didn't seem. All the companies were like "This is actually how we make money. Our instrumentation, the Splunk instrumentation in your app is what makes Splunk sticky. And if we can make that sticky, then we have a competitive advantage. And then once we're like "Oh, we can just democratize all of that collecting..." Because at the end of the day, it's all basically the same kind of stuff, and just a new flavor, a new API. And some of them didn't have support for different languages. So we're like "Oh yeah, if you want Scala, you've got to go over to this one. And if you want Go, you have to go to this one." It was like this huge thing, and like "Why don't we just collect all of that stuff?" And so from the outside, it was interesting just watching it all kind of collapse into this "Oh, one group is going to have all of the--" At first, I thought it was just tracing, open tracing. It was like the big thing. We're like "We're going to get all the languages together, and we're just going to do the instrumentation." And then it was like "Oh, well, we're also going to do the metrics. Oh, we're also going to do the logs. Oh, we're also going to do..." I was like "Oh, now it's like a full stack thing of what was going on."

And every time I'd listen to Charity or Liz talk... Like, it doesn't matter what the data is. You have to be able to look at it. You have to be able to understand what's going on. And the difference between collecting data and understanding the system are two different problems... Which I think is fascinating what you're calling out here, where it's like, I can't just have all of the data in the world, and all of a sudden understand "Oh, this is where the problem is." No, you have to know where to look. And like you mentioned, someone has to help you get there. And there are probabilities in those systems.

**Autumn Nash:** Not just that, but you need to be able to get the bigger picture of the data. People collect data all the time, and they have no idea what to do with all those logs, and what to do --

**Justin Garisson:** \[40:09\] Yeah, you just keep zooming out. When you have a log, you're like "Oh, I'm going to print here, in my code." I'm like "Oh, I've found the piece. I'm terrible at GDB, so I'm just going to do this one print and I find it." But once you zoom out to those 10 things calling it, "Okay, how do those things call? Is this network related? Is this DNS?" It's always DNS... And then just keep zooming out... It's like "Okay, now how's the application? What does the customer experience look like?" Honeycomb seems like they always approach it from that side of it. What's Charity's line? "Uptime doesn't matter if your customer has a bad day", or something like that. If your customer is angry, then all the uptime in the world doesn't matter.

And so being able to just go back to those basics... But as an engineer, where do I look? How do I look there? How did you start building that ML/AI infrastructure stuff to get people in, to nudge them in the right direction?

**Phillip Carter:** Yeah. So we approached this from a couple different ways. I was lucky enough to be able to go to several different conferences, and work with our sales engineers on just like doing demos for people and seeing what's the ideal story that we tell people. And I got to do all these demos, and stumbled through them, and eventually get my own storytelling craft down with respect to poking around with what these people care about, and then trying to map that to "Okay, well, we have this system, so I'm going to show you this system." It's like this eCommerce site, and I could show you some metrics, showing uptime, or memory use of pods, or something like that. But that doesn't tell me anything about the business problems that this set of services solve. There are real users, there are -- the concept of a shopping cart, and some users fill the shopping cart with more things than other users... And there are certain aspects of latency, or reliability errors, what have you, that matter more in some contexts than others in some contexts.

So of course, it's important when you have low latency. You should have low latency all the time. Yes, we all agree. But it's especially important if someone presses the checkout button when they've added a bunch of stuff to their cart... That thing had better not be slow, and it had better not have an error. And real systems being as complicated as they are, there's always going to be slowness and errors inherent in everything. But some things matter a lot more than others, and can you track that kind of stuff in a way systematically, such that you can start with a high-level view, and then always start from a high-level entry point that is a combination of broad, but yet also opinionated enough that allows you to narrow down toward a particular characteristic that does not require you to know upfront where you need to start narrowing down on? That's the fundamental thing.

Imagine you're a new engineer brought into this eCommerce site, you don't know how any of this stuff works, but you have to fix a bug because you got paged and you're now on call. Do you want to be in a situation where you have to know the exact lines of code that you should be watching out for? Well, no, that sucks. That's going to take forever. You're not going to be able to solve that. Or can you start with a high-level "Okay, well, let's say we do start from this notion of slow requests, but it's based on endpoints. Okay. I can narrow that down to -- there's this one endpoint that's weirder than the other. That's probably a breadcrumb to go and follow. I'll go with that. Okay. Well, what's interesting about a full distribution of latencies about this? Oh, I see. There's this weird little spike going on right here. I wonder what that could mean."

Using the Honeycomb tool - we have this anomaly detection thing where you can... It's called Bubble Up, but I think now we're -- at any rate, you do this thing called the bubble up, and you can visually select this part of a graph that looks a little different than the others... And then it'll just automatically compare all of the events in the selection, versus what's not in the selection, and display out via literally histograms all the values of each of those events, and all the values that correspond to all the columns in each of those events, and sort them in a way that you can say "Oh, well, there's these five columns, and these handful of values that associate with these columns in my data that are actually the characteristics that associate most with this spike in latency that I see here."

\[44:08\] But I didn't have to know upfront that "Oh, there's this one attribute in my data that is the thing that I should be looking at." And it's this generalizable thing. It's this thing that works -- like, when people watch this flow, they're like "Wow, this is how I actually do want to be debugging. Because when I get onboarded onto a thing, I don't get onboarded onto what every line of code does first. I get onboarded onto "What is the purpose of this thing? What should it be doing? What matters the most to our business?" This is how, frankly, most organizations should probably be working anyways.

**Autumn Nash:** It is. And they're not.

**Phillip Carter:** Yes. There's a whole other thing there. But this whole flow that I'm talking about, a) it's a little bit fuzzy. b) it's a little bit probabilistic. c) sometimes you get into a dead end, and you've got to back out. You're not always going to be 100% right every time, but it's fine. You're exploring, you're debugging.

**Autumn Nash:** You're also still learning about the process while doing that, though. So it's not valuable time wasted.

**Phillip Carter:** Right, exactly. In the course of doing that there's these ever more slightly opinionated and narrow views of the world that you get as you go through the next step. And so we said, "Okay, what are ways that we can start replicating that in a way to get people past "Empty page. What do I start with?" How do we get them onto a track where it's easier for them to start narrowing in on this particular kind of debugging?" And that manifested as "Okay, well, when we talk with a bunch of people, they can very often express what they want to start looking at." They can just say the words, "Well, I care about slow requests in my system." Awesome. Cool. What is a good query for slow requests in your system? "Well, it depends on your data." Oh, crap. Okay. Well, we can't like literally give you the single query for that. However, an ML model can look at the shape of your data and your schema, and have some examples of other shapes of data and other schemas and say "Well, in those shapes, slow requests can mean this kind of query. Given this shape that is kind of similar to these other shapes that I have in my example set - well, I can create a query that is probably going to show you something kind of like that."

And so there's degrees to this, where it can actually work very, very well, especially if you're using Open Telemetry, and there's a lot of like common names for certain kinds of operations. But we've found that GPT-3.5 back in 2023 did a shockingly good job of being able to say "Okay, well, if I have this named pair of - I have a natural language query..." Or named tuple, I should say. "I have a natural language query, I have a list of columns that are considered relevant for this natural language query... And I have a query shape, which is like a JSON object that follows a particular schema..." And basically said like "These three things, that query shape matches the two other things that you have there." It can then look at your column names and say "Oh, well, you measure latency with a slightly different name for a column, but like the name of it implies something to do with latency, and so that's probably a good candidate that we can pull in as context." And then just through like basic few-shot example prompting, you can actually just sort of trick GPT-3.5 into saying "Oh, well, my job is to output a JSON object that fits this particular schema." And in the system prompt there's some rules about like what makes for the right JSON object, and stuff.

This was something that like I experimented with in April of 2023. And in the course of doing that experimentation, I found "Wow, this thing actually does output really good stuff." And I know that there's going to be a very long tail of like it might not get something quite right, but... This shifted from "Is this even possible?" to "Oh, this is definitely possible." And this is probably also going to be useful for several people out of the box already. But what can we do to make it really useful to as many people as possible? And that's kind of like where my mindset shifted. And that's how the thing ultimately started into building our natural language querying system.

**Autumn Nash:** \[48:09\] You know what I think is really impressive about everything that you've said? First, the fact that you actually went to the conferences and listened to your customers... Like, the feedback loop of like customers... And especially, people go to conferences with their competition, and don't do -- I love going to the different booths and talking to their engineers and talking to their PMs, and the disconnect between their engineers or their PMs and their customers is wild. And then they never have the right information about the competitors that are 10 feet away from them, and they could have easily went to the booth and asked a question... And it blows my entire mind every time.

That is the best part about being a solutions architect, a PM, or whatever you want to call it... Just being able to compare the product and see where -- like, half the time there's low-hanging fruit that would be so easy to fix or to know more about to make your products better. But also, you're using AI for something that's going to actually make people's lives better, not something that we didn't ask for, not in a way that you're handicapping your developers.

A lot of times just adding to IDEs, you're teaching new developers bad habits, that they don't even know they're getting, and you're not enabling them to get the skills that they need to troubleshoot and to grow as engineers. But you're using it in a way that actually teaches you how to debug, and what the process is, and to help them learn processes, which makes engineers better.

So I'm so excited about this, and I want to go play with it, because I think we're going to handicap so many engineers in this next generation with different AI, because they're only -- it's like that one meme and it's like "Why hire a software engineer if they just google? Why give them six figures to just google?" And it's because you know what to google. You know what I mean? And we're almost taking that from people, because ChatGPTs, or just any GPT is going to become the source of truth, and they're not going to get the skills to figure out "This looks wrong" or "This looks right", because so much of it isn't just an error \[unintelligible 00:50:07.18\] That's not all of being an engineer, and putting all these pieces together.

So the way that you're describing it is so exciting, because you're teaching them a process. Even if they're going down the wrong -- you're, for one, making it faster, which we all know that every big company or a small company needs you to get faster from being new, onboarding, and writing that first commit in PR. But also, they need you to be effective and to learn. And you're bridging those two things, which is just amazing. This is the first time I've been so excited about AI... Because usually, I'm like "Oh, this sounds \[unintelligible 00:50:39.26\] That's actually amazing.

**Phillip Carter:** Yeah, yeah. And that was definitely the goal. And we have much more ambitious goals around this thing as well. We have gotten feedback from people where like they do want to drive their querying process end-to-end, using natural language. And you can use Query Assistant to do that today. It's not as good at that. And frankly, that was a scoping exercise, because the primary problem that we were seeking to solve right then and there - which, frankly, I think was the right problem - is a lot of people would come in, try to use Honeycomb, but they'd see our interface and they'd be like "I just don't understand how I can start to use this. I can express how I would like to start out, but I don't know how to shape that in a Honeycomb query." And we've found some pretty good success metrics where people would come in, they would use the natural language query feature a few times; sometimes quite a lot, actually. And then they would start using our manual querying interface to manually tweak things and explore a little bit more without even using the natural language portion of it. Sometimes they would, and it does support that, but sometimes they wouldn't. And from our perspective, we're like "Great." We don't really care if you're using the AI feature or the non-AI feature. We want you to explore your data. And if this helped you get to the point where you could start exploring more and get more curious, great. That's the problem that we're solving.

**Autumn Nash:** \[52:04\] This is the biggest value prop that I hear you saying out of everything, is that you're making them more efficient, but you're... So it's like alarm fatigue, right? You're going to start to ignore your alarms if they're always going off. And when you get so much log data that it's so much that you just need to delete it, because you don't know where to start, and it's filling up all your disk space, or... You know what I mean? But what you're doing right now is you're helping them to focus and to break down a problem, and that's kind of all of what engineering is. You take these big problems, these big systems -- especially at scale, right? And you break down the problem so you can learn...

I feel like we always talk about observability and metrics, but it's so hard to get the good metrics, and figure out what you should be paying attention to, and figuring out how your system works, whether you're new, or just maybe one of your coworkers built something and now you have to go fix it, or somebody leaves. Especially with all the turnover in tech right now, we are going to have these huge systems at scale that you might not have built.

In college, you sit there and you build these projects from scratch, but that's not being an engineer in real life. You're going and you're going to go work in a legacy codebase that's huge, that you do not have the time to figure out. You're going to have to just get thrown in there. And what you're doing is you're making them efficient, and you're giving them this whole process. And I just think that that is a huge value prop of why your product is valuable. And in this time, where people are really having to make those hard decisions to figure out where to budget, and where to put their money, something that's going to help your engineers grow and help them to be more efficient with their time, but also not handicap them... It's just like fire.

**Phillip Carter:** Yeah. Yeah. And we think that that's a good use for this kind of technology right now. I mean, there's a bunch of AI hype, nonsense, whatever. I barely even pay attention to it anymore.

**Autumn Nash:** But it's wild, because you're actually in AI, but a lot of people in AI would just be hyping it, and you're like "None of this makes sense." It goes back to what I said in the beginning of the podcast - you have enough honesty that you keep it real, that it makes me trust your opinion. You know what I mean? But also, your product actually genuinely sounds cool.

**Phillip Carter:** Yeah. I mean, frankly, that's what we're aiming for. People don't want to be replaced. They don't want things to be wholly replaced. People are willing to accept change, they're willing to accept "Hey, this thing that I might've liked doing in the past is now getting abstracted over. There's an engine that can do some of that." I think we've seen variations of that throughout history. I imagine there were probably some developers out there who really loved handwriting Assembly. And I think the majority of them have probably also come to accept that compilers are pretty great, and we can use compilers so we don't have to handwrite Assembly all the time.

**Autumn Nash:** It's like people who love to write Bash by hand for no reason, just to be mean to themselves...

**Phillip Carter:** Yeah. I will say, as far as -- I am so happy that I barely have to write any Bash in my life. I can just go to ChatGPT, and it does a good enough job, and I'm like "Thank you." Same thing with regexes. I find zero joy in that. I am so happy to offload that.

**Autumn Nash:** I have two friends who just -- they get great joy out of writing regex, and I'm like "I love you smart people, but I want nothing to do with them at all."

**Phillip Carter:** Power to them.

**Autumn Nash:** This shows that this product will outlive the AI hype. This is something worth investing in. There's always that turnaround cycle of "Oh, this new thing is cool", and then you onboard to it, and then you have to migrate off of it, and you're just stuck in this tech debt cycle... And I feel like this is like the value prop of why your product is worth giving a try to, worth investing in, and it's going to outlive this, because it actually delivers value to engineers, and it's not just a hype thing. It very much fits what we've been trying to teach engineers, in general. You need to be effective, break down problems, and just... You go and seek out that information. And this is just like taking, what we already were doing, but to a more effective level.

\[56:13\] A lot of times they're inventing the wheel just to do it, and just to make it very expensive... But you're not. You're actually just -- you're improving on the wheel. You know what I mean? So I think that's just really cool.

**Phillip Carter:** Yeah. Yeah. And as you might imagine, we have many more things that we're looking to build, and investing in our own - I guess you'd call it like AI team that we have. But philosophically, we're very much aligned with the thing that we went in on last year, when we built the first version of this, of like "We're here to help." We recognize that people come into the product, and the problems that they come in with are multifaceted, and there's people of varying levels, where like some people want zero assistance, and that's great. The product is amazing for them. People want some assistance...

Some people want a lot of assistance. Some people need a lot of assistance earlier in their journeys, and then they back off of that, some people want assistance in the weeds of when they're actually debugging stuff... And we are in a position to be able to help with that to varying degrees.

If you are not in the middle of an incident, but you have Honeycomb open, and you're curious about something, but you're like "Huh... My data has -- there's maybe 100 different questions that I could ask of this data, but I'm not even sure what those 100 questions necessarily are." Or are there even categories of analysis that I could do?" Well, great.

There's things that we can probably even suggest. "Well, based off of the shape of this data here, it looks like -- we think there might be these kinds of hypotheses that you could go and test. Do you want to explore some more?"

**Autumn Nash:** That's my favorite part of AI, just being able to get unstuck. You don't want it to write everything for you, but you just want to know -- when you're having that brain moment that you are just -- like deer in the headlights; it gets you to move forward.

**Phillip Carter:** Yeah. Unstick you a little bit, and fundamentally encourage curiosity. Because if we get you to dig deeper, get more curious, ask more questions, get more assistance that way, that makes you, frankly, a better user of Honeycomb. It's really good for our business. There's a direct line that you can draw between how many users in an organization that has purchased Honeycomb are actively engaging with the product, and how likely that organization is to want to purchase more Honeycomb, re-up their contract, maybe buy even a whole lot more... And it's like "Alright, cool. We have --" We managed to make it such that our business aligns on encouraging people to be more creative. And I'm like "Great. This is perfect."

**Autumn Nash:** But that also makes you better at building stuff, too. It's not just a reason for you to keep using Honeycomb, but it's just a fundamental thing of being a good builder of things. And just another thing that, because you're making people more efficient in ways of being able to give them suggestions, and give them ways to debug, you're also -- you know when you're an engineer, you're building something, or you're trying to diagnose something, you're so pressed for time that you need to get something back up, you're kind of panicked. So when you take a lot of that panic away, or you give people more time back, they have more time to be curious, and more time to do other things.

**Phillip Carter:** Yeah, exactly. Exactly.

**Autumn Nash:** How long have you worked at Honeycomb?

**Phillip Carter:** Three and a half years... Almost on the dot, actually.

**Autumn Nash:** You did all that in three and a half years? Do you take -- do you sleep?

**Phillip Carter:** I do, yeah.

**Autumn Nash:** How much coffee do you drink?

**Phillip Carter:** I don't -- not a whole lot, but I do roast my own coffee.

**Autumn Nash:** So you have very strong coffee, and...

**Phillip Carter:** \[59:45\] Yeah, it's strong, and - that's something in the coffee roasting community, because of course, there's a community for this... People really, really nerd out on it. It's amazing. There's all of these curves that you can draw about different dimensions of the coffee, and you can optimize for a particular aspect of it, depending on how you roast it, when you roast it, how much you let it degas, or as I call them, bean farts - degas its CO2.

**Autumn Nash:** I love that you're nerding out about coffee the same way that you nerd out about technology.

**Phillip Carter:** Hell yeah. It's great.

**Justin Garisson:** Well, yeah, so Phillip, will Honeycomb help me with my computer crash?

**Phillip Carter:** I'm afraid not. No. Different tech realms.

**Autumn Nash:** Phillip was like "This is not my job."

**Justin Garisson:** I'm very sad that I missed a good portion of your conversation...

**Autumn Nash:** I got to hog Phillip. It was fire. I loved it.

**Justin Garisson:** I'm happy for you.

**Phillip Carter:** We had a good time.

**Justin Garisson:** Thankfully, I have a backup iPad right now, so... But anyway --

**Autumn Nash:** What does the iPad run on? What kind of hardware is that iPad?

**Justin Garisson:** It is hopes and dreams.

**Autumn Nash:** It's Mac. You're welcome. And your Linux is down. Okay, keep going. What were you saying?

**Justin Garisson:** Which is also why I could not come into this room for like 15 minutes, because the iPad wouldn't let me in. So... Anyway. But yes. Actually, my computer did fully crash, and I don't know if that's hardware or not, because it just locked up and will not boot again. So we will be troubleshooting some things later today. But Phillip, thank you for coming on the show. Thank you for explaining to all of us -- we found you on Blue Sky, you had a thread about your AI infrastructure. So if people want to follow you, I'm assuming Blue Sky is the place to find you and interact?

**Phillip Carter:** It is a great place. I'm posting there a whole lot. Definitely not on Elon's site anymore. So I try to post as much interesting technical stuff as I can out there... Occasionally, there'll be a fun s\*\*t post, but...

**Autumn Nash:** I was going to say, tell me there' s\*\*t posts and memes, and just shade there... Because I've seen the faces at eBay in the last hour, and I know good things go on in there. Good things go on in that brain.

**Phillip Carter:** There's going to be a good one. I actually have a blog post I'm going to write soon that's going to be called "Maybe You Don't Need a Vector Database."

**Justin Garisson:** Ooh...

**Autumn Nash:** Did you see that? Did you see his face? That was like the cutest, nerdy, just -- it's going to be so good. I'm so excited.

**Justin Garisson:** I'm going to read that one. That sounds good.

**Autumn Nash:** I didn't think I could be excited about vectors, but here we are...

**Phillip Carter:** You kind of don't need a vector database for a lot of stuff.

**Autumn Nash:** You both do the eyebrow right before you say something shady, and it's the best. There's one eyebrow that just goes up... And I already know that this is going to be good. Phillip, are you going to come back when we have our new podcast? Because you've got to come back.

**Phillip Carter:** Yeah, absolutely. Very happy to do it.

**Justin Garisson:** And I can finally have a full conversation with you, hopefully.

**Autumn Nash:** I'm going to hog all of that one, too. It's okay.

**Justin Garisson:** You're the one DDoSing my computer. That's why it went down, I know.

**Autumn Nash:** I had questions, okay?

**Justin Garisson:** "Justin, get out of here...!" Alright. Well, thank you so much, Phillip, again, for coming on. Thank you, everyone, for listening. We will have one more episode after this, so if you haven't already, go find us at fafo.fm, and we will have feeds and website stuff there for the new podcast. And also check out Honeycomb. I've been a fan of what y'all been doing for quite a while.

**Autumn Nash:** OpenTel is baller. It's actually AI that is helpful. Go check that out, dude. I'm going to check it out. Also, you can now find us all on Blue Sky. So if you can't find the podcast, find us on Blue Sky, and we'll tell you where to go.

**Justin Garisson:** The podcast is on Blue Sky too, because the domains work there, which is awesome. So it's @fafo.fm. So we're good.

**Autumn Nash:** But I feel like it's always good that people know where to find us, just in case they forget the podcast name, because we all know that we're loud in there.

**Justin Garisson:** That's right. Thanks, everyone. We'll talk to you later.

**Autumn Nash:** Bye, guys.
