**Nick Janetakis:** That is interesting how that works, too. I tend to buy domain names first as well, and then they just sit there and nothing happens.

**Jerod Santo:** Yeah. Just last Friday Adam and I were talking, and we have this idea, and we're talking about the idea, and we're both independently doing domain name searches while we talk about an idea... You know, because you almost have to have -- for some reason, there's like a road bump and you can't continue forward until you have a good domain... \[laughs\] But then also lots of times that's the farthest it goes, right? You get the domain and you're like "Yes!", and then there's some sort of satisfaction to that that it almost removes the impetus, or at least it has for me, where I'm like "That's good enough. I'm gonna sit on that for a few minutes", and it turns into ten years.

**Nick Janetakis:** I feel the exact same way.

**Jerod Santo:** So Janetakis...

**Nick Janetakis:** It's Greek.

**Jerod Santo:** And you're from Greece?

**Nick Janetakis:** No, I was born in the U.S. Just my dad's side is Greek.

**Jerod Santo:** Okay. Where do you live?

**Nick Janetakis:** New York.

**Jerod Santo:** Okay. Manhattan, or...?

**Nick Janetakis:** No, Long Island. It's a little bit East of Manhattan.

**Jerod Santo:** Born and raised?

**Nick Janetakis:** Yup.

**Jerod Santo:** Cool.

**Nick Janetakis:** I would like to move eventually, but I wanna become one of those digital nomads, where you just travel the world for a couple months in different countries.

**Jerod Santo:** Isn't that what everybody -- that's the dream right there, all the digital nomads... And they write blogs about they're nomadic, and we're all just reading the blogs and envy them.

**Nick Janetakis:** Yup. \[laughter\]

**Jerod Santo:** That's kind of how it goes. That's Instagram for nerds - blogs of digital nomads, where we can see lives that they've prepared, handwritten what their life is like, and we can just envy them. Very much Instagram-style, at least, where you see the curated version of people's lives, and then you look at your real life and you think "This isn't adding up."

**Nick Janetakis:** Right. You see the five seconds of 24 hours.

**Jerod Santo:** Right. By the way, Backstage \[unintelligible 00:02:23.21\] In fact, this could be a show right here... Why not, in fact...? So listeners out there, if you have listened to the most recent episode of the Changelog, which would mean you're a hardcore listener, because this is the Monday following -- I think we released it on Saturday this week, because reasons... If you listened to that, episode 344, "Inside the 2019 infrastructure of Changelog.com", you'll hear Gerhard mention Nick... And I'm not sure if he called you Nick Janetakis (I can't recall what he called you), but he mentioned, Nick, that you are a person who's been in the Changelog community for a while, you've been involved in our codebase, you are using it to a large degree for inspiration or even guidance on the CMS that you're building for your business... Why don't you introduce yourself to me? I mean, that's about as much I know about you; I know you're making videos online, I know you're big into Docker, and that kind of stuff, and you teach people these things... But that's about all I know, so maybe introduce yourself to me.

We've known each other just casually in our Slack chat, but we tend to talk shop, and I thought "Hey, let's hop on Backstage and talk shop, because it's fun", and others can benefit perhaps as well. Tell everybody what you're up to with your videos.

**Nick Janetakis:** Right. I guess the TL;DR - my name is Nick Janetakis, I've been a freelance web developer for about 20 years, and as of about four years ago I started doing video courses, mainly around Docker, Flask, and other programming topics. Since then, I started a blog, and I pretty much write about everything openly, from the dev business point of view up to technical details as well.

**Jerod Santo:** \[00:04:14.14\] That's definitely where your and my paths cross - both the technical details and on the dev business. I know you're selling subscriptions or videos directly to developers, we are providing content for developers, so we have a lot of similar thoughts, similar tasks, the exact same audience... Slightly different angles on it, but... Talk about your application you're building. I know this is a side project, to a certain degree, and you have existing videos that you've been selling other ways... Help me understand where you're at in the technical sense.

**Nick Janetakis:** When it comes to hosting videos, you don't necessarily need to develop your own course hosting platform... There are these other platforms out there, like Thinkific and Teachable; I'm not sure if you've heard of them before... But they're basically like a course-hosting platform as a service; they're a SaaS app that you sign up for, you pay whatever ($50-$100/month) and they give you the whole enchilada. So people can sign up, they can create an account, they can put in billing information, credit cards or PayPal, and then they can go consume the courses that you've created, because those Teachable and Thinkific sites, if you're the course instructor, you get an admin back-end where you can assemble the course however you see fit. You create your table of contents, upload the videos, etc. So they're just like an end-to-end SaaS for building courses, and distributing them as well.

But you know, when you're a developer, you just think in your head that you wanna develop things, and I feel like... \[laughter\] I think developing my own course platform has been something I've wanted to do for a long time, but I still do freelance work now, so it's very hard to balance the time of creating the actual course I wanna create, and then develop the course platform, and then do freelance work, and then do what I can to contribute to open source, based on projects I'm doing, writing blog posts, the whole social media thing, personal life - there's a lot to take on.

So I actually did start building my own course-hosting platform about nine months ago, and this is kind of how I got introduced to your codebase... So I determined I wanted to use Phoenix with Elixir. Right now it's quite popular as a technology, but it's not on the same level as Rails when it comes to tutorials, and things like that, so it was a little bit tricky to get started, especially if you've never used a functional programming language before, which I haven't done... And then I just ran across the Changelog codebase, and it's kind of funny, because one of the courses that I wrote - and I'm not trying to pitch my courses here, but "Build a SaaS app with Flask." So it's a Flask course where we actually build a real-world SaaS app; accepting monthly payments, and custom admin dashboards, and Stripe integration, and all this good stuff... And it's like a real application, with like 4,000 lines of Flask etc. and I was very, very fortunate to find your project on GitHub, because it reminded me of that type of project. It's not just a simple to-do app, or "Here's how to make a blog with comments." You know it's a real app, running in production, really good test coverage, really good everything; best practices... And for me that was heaven.

I basically used your platform as almost my sole learning experience for getting used to Phoenix and Elixir. Sure, I read the documentation, but it was more like I read the docs to get the super-duper basics, and then it was like I'm just looking at your code, and then occasionally harassing you on Slack if I get really stuck...

**Jerod Santo:** \[laughs\] Yeah.

**Nick Janetakis:** But I owe everything of the platform --

**Jerod Santo:** What's funny about that-- now, go ahead, you were just gonna give me a compliment, and I'll take it. \[laughs\]

**Nick Janetakis:** \[00:08:07.25\] Oh yeah, I said I owe basically everything based on what I've done so far in the course platform to your progress of what you've done for the community on that front.

**Jerod Santo:** Awesome. So that relates to what I was just gonna say - we were on WordPress for years. In fact, we started on Tumblr - this was even before I was involved; Adam and Wynn set up a tumblelog -- I think that's what they're called, Tumblrs or tumblelogs back in the day, because Tumblr was super-hot... And then it moved to WordPress when it relaunched, in 2012, I think, or 2013... Adam did most of the heavy-lifting there. Then we've been on WordPress for years, and it was just lots of headaches. We love WordPress, it's a great general purpose CMS, but like you said, as developers and as hackers we have very specific needs, and we want things to work in very specific ways, and the freedom to diverge from the mainstream is really what we desire... And I build web apps for a living, and I have for a decade, mostly in Rails previously...

So I wrote the new CMS in Elixir and Phoenix, and had to go through a lot of the learning curve and the pain. One of my strengths as a developer is I will just endure until I actually figure it out... So it took us a long time to get me running, but the language itself, once I understood pattern-matching, was very productive. It was just like "Okay, now how do I do this particular thing in Elixir or in Phoenix, in this context, which I know how to do very well in other contexts... How do I do it here?"

So it was very much a learning experience for me. In fact, we didn't open-source it right away. We open-sourced it maybe like a month after we relaunched on the new CMS, and some of our internal conversations (Adam and I) about open-sourcing it - we knew we wanted to, but the question was like "What value would it provide others?" Because the first fear is like "Well, if someone is just gonna rip us off and build a competing podcast and news platform, basically using our platform to compete with us in the space...", it's kind of like "Well, the platform is not really what we do." It is more so now, because we have news and it streamlines the way we put content out, and everything, but if you're going to actually compete with us, you have to create good podcasts. That's really what you have to do. So there wasn't much fear of that.

Also, it's completely custom. And I didn't build it like this, as a general purpose podcasting CMS. We had our own show slugs hardcoded in the areas of the codebase... It was not built as a general purpose thing. So I thought, "Well, the way it's gonna provide value is the exact way that you're using it", which is there weren't very many (and there still aren't very many) open source real-world -- even if it's a pretty small domain, and pretty basic functionality in terms of like it's a content management system with some nifty features... It's gonna be a good example for people.

And then the readme, one question in the FAQ was "Should I use this for my podcast?" It's like, probably not. You probably shouldn't fork this, or have like a "Deploy to Heroku" button for you; it doesn't really make sense. But you could absolutely use it in the exact way that you're using it, which is kind of like just a path of somebody else has plowed down in front of you, so you can save time and learn along the way... So it's pretty awesome that you got whole hog into that and basically built your own, using ours as kind of a roadmap.

**Nick Janetakis:** Yeah. And just to be clear, I never even -- well, I did clone the project, just so I can look through the codebase locally, but I didn't fork your project.

**Jerod Santo:** You started completely from scratch.

**Nick Janetakis:** Yeah. Brand new, totally from scratch. And then I just pulled out the components of things that I liked from your app into mine... Like the user registration, with the magic links, and all that stuff. That's very non-specific to a podcast platform.

**Jerod Santo:** \[00:12:07.26\] True. I talked about one of my strengths as a developer... But one of my weaknesses as a developer in terms of being generally useful code is I don't ever (pretty much ever) go back and abstract libraries from things I build. I will build this magic link-based sign in system, and if I were to start tomorrow on a brand new site, instead of packaging that up into a mix -- what did I call them? I forget... Libs, packages... I don't know.

**Nick Janetakis:** Yeah, packages.

**Jerod Santo:** Yeah, packages... And then reusing my library, and then having a library. I will actually do the same thing that you just did - I will go look at my old code and I will write it again, with my newfound knowledge; or improve it the second time. I don't do libraries, it's just weird. I know a lot of people think in libraries. General use, reusable libraries - I never think that way. I always just build.

So like you said, this is a thing that more people would like to use. If I would have had the forethought, I would have built it in a way that it could just be a library, and then we would have more open source stuff... So it's kind of a downfall of mine that I just don't think that way.

**Nick Janetakis:** I also think in a weird way having it in-lined in your codebase -- I mean, it doesn't necessarily make it better, but it makes it easier see how it's being used in a real application... Versus a tiny, little microscopic package that does just the user authentication with the magic link, it may have been tricky to figure out how do I actually implement that into my app. I guess technically if you did that, you would have implemented it into Changelog, so I could have seen that, but...

**Jerod Santo:** Right. But that would have been one implementation, versus...

**Nick Janetakis:** Exactly, yeah.

**Jerod Santo:** I've had that struggle as a library user for years... Thinking back to the early Rails gems, and Devise became the gold standard in Rails gems... But it was like, I can pull in Devise, and it has all these features and it's great in terms of I can turn on or off a certain aspect; like, do I want the "Remember me" thing, and do I want logging etc.? And passing an argument turns that off or on - that's really cool, but I would rather just have the code in my code... Even if somebody else wrote it. That's why I was cool with code generators back in the day, back when I used them more - it was because I don't want to have to peel back this black box and find ways of overriding methods and doing all these tricky things in order to customize, when I could just have the code in my code.

So maybe that's another reason why I don't think in libraries, because I don't like to use them very much... Unless they're just like a JSON encoding thing, like encode the JSON/decode the JSON; I'm not gonna have to peel that back. But really application-level features specifically are very difficult as dependencies, and so maybe that's why I don't think that way.

**Nick Janetakis:** Yeah, absolutely. Plus, to make a really good abstraction, that's -- I don't know if Devise is the best, but you can't knock it for what it is; it's pretty popular, for the most part... But yeah, creating a good abstraction is very hard, and often times you need to duplicate your code, maybe in 3, 4, 5, 10 different projects, before you get something that might even be reasonable to have as an abstraction.

**Jerod Santo:** Right. And that's a very good point, one that I've learned over time - we tend to prematurely abstract things. And while I don't think in libraries, I definitely think in terms of abstractions, and dry. We tend to really want dry. And as soon as we see a pattern once - I'm saying this like the royal we, but I'm probably talking about myself... We want to say "Okay, pull out a function, pull out a module here, and I'm gonna reuse this in ten places." And what you find out is a) YAGNI, in those cases; you actually aren't gonna use it ten times. Maybe you're gonna use it twice, maybe three times. But what you realize is that third time that you use it, it's different enough contextually code that you're now complicating the function that you're pulling out in order to take different arguments or handle a slightly different case.

\[00:16:29.25\] So the rule of three, which I think Jeff Atwood has written about and many people talk about is so powerful, and I've learned it over time, if you're not using it three times - and in my case, I think if they're not pretty much identical uses - then you shouldn't be drying that code up; just go ahead and leave it wet, and let it be, because you're gonna cause yourself more harm down the road.

That's something that I have learned the hard way, it's taken years... But now I see it all the time, especially in less experienced developers, who are just like "Ooh, a pattern. I'm gonna pull it out", and you end up causing yourself more harm than good.

**Nick Janetakis:** Yeah, absolutely.

**Jerod Santo:** So where are you at with your deal? I know you're still working on it, you said nine months ago... Where does it stand?

**Nick Janetakis:** Well, nine months ago I started it, and I was super gung-ho about working on it, but it was so hard to really fit in a time to do it then, because I was just too overburdened with too many things going on... And it's another weird thing to talk about too, it's like, well, Thinkific, which is the platform that I'm currently using now, or Teachable an alternative... It's sort of good enough, but it's not quite what I want. There's certain things that I don't -- I don't wanna just bash them openly on a podcast, but there's certain UI decisions and certain things that have happened in the past, that... I wanna change these things, but I can't do it, because it's not my platform.

Even things like I wanna customize the workflow for actually creating a payment, but they control the whole entire template for that page, and I have no control over that. Little things like that.

**Jerod Santo:** The problem with being in that circumstance is there's no fire under your butt... Because the thing that you're on is functional, and working, and it's not as if this has to get out tomorrow or you're losing money, or whatever it is. So that means that you can just kind of trudge along. Do you find that to be a limiting factor on your progress, like you don't really need it that bad, so you just kind of work on it...?

**Nick Janetakis:** Exactly. And it's not like people are emailing me and being like "Nick, the platform is garbage. You can't click this option or that option." This work. I will say this - five days ago, or -- April 29th, about a week ago from here, PayPal integration just stopped working with Thinkific's platform. People would try to pay with PayPal and an error would come up, and it just says "Payment provider not supported", or something like that. It was a generic error that came up, and Thinkific didn't notify us instructors about this. They have a public status page, but you're not going to the status page habitually. You're not going there three times a day, "Is it up? Is it up? Is it up?" You would expect something as big as transactions not working for them to email you that "Hey, by the way, half the people buying your courses can't pay for it." That kind of fueled the intensity of a thousand suns to get me going. \[laughter\]

**Jerod Santo:** Another angle at this is that similar to us, where our website stack provides us certain luxuries, and one of the things that Adam and I do is sweat all the details; that's just who we are, we want everything to be great that we do... And that was really where we were with Wordpress. It's like "This is good, but it's never gonna be great, because a) we don't enjoy hacking on it, and b) we're always fighting against the generic." So that's why we built custom - so we can make things exactly the way that we want, because we run everything.

\[00:20:13.12\] That being said, like I said before, a podcasting and news CMS is not our business. Our business is creating content. We wanna be logging the news, we wanna be recording and producing podcasts, not necessarily writing software... Because no one's banging on our doors saying "More software, please."

So in your circumstance, every hour that you spend on your custom CMS, you're not spending on creating video tutorials, which is where your value is... So that's something you probably consider, too.

**Nick Janetakis:** Sure. And the reason why I'm even starting a back-up now creating the course platform -- I don't know, it is hard to balance all that stuff, because doing a 10-hour video course, the final video length, that might take 4-5 full-time months of developing. It takes a long time to plan it out, write the scripts, get the source codes... And the source code needs to be not just okay, it needs to be really -- I went over it many dozens of times, and had people beta test it... It's a huge process, so it's hard to get into the mindset where you can balance your life almost.

For me, I've always had the horse rider's arm on, like "one thing at a time" type of thing... But nothing gets accomplished outside of making the course if you think like that... So now I'm trying to balance my time a little bit better, where I'm just gonna allocate an hour or two a day until the course platform has some type of MVP that I can ship out.

So rather than be like, okay, I'm gonna finish the next course I'm working on maybe in June or July, or something like that, and then work on it... So I'm gonna try out the balanced approach and see how that works.

**Jerod Santo:** Yeah. Slow and steady, that's a good way to do it.

**Nick Janetakis:** Yeah.

**Jerod Santo:** You have made your coursework -- is this your full-time endeavor, and you've been able to support yourself completely on the coursework?

**Nick Janetakis:** No, I still do freelance work as well.

**Jerod Santo:** Okay, consulting plus... But not like a full-time job.

**Nick Janetakis:** No, I've never been employed at a corporate type of programming job. I've always been self-employed in some way.

**Jerod Santo:** So is it mostly training, are you contracting our your development time? How are you adjuncting them?

**Nick Janetakis:** For the freelance work, it basically comes down to -- you know, people usually email me... Which is kind of interesting, as an aside. The course has actually fueled quite a bit of my freelance work, so I'm not going out there pitching myself or looking for work. Some people will just take my course and they want a personal experience. So it's either doing custom work, and actually sitting there writing code to implement something that they want, or sometimes we just hop on a call like this and we do some screen-sharing, they show me a project they're working on, I give insight on this and that...

And then I'm almost acting as like an accountability partner. I offer advice as well, but I have a number of clients where once a week I meet with them, and they just show me what they've done in the previous week... Like, "Is this good? Is this bad? What can we change here? Next week's stuff", things like that.

**Jerod Santo:** Yeah.

**Nick Janetakis:** I'm not sure if I ever wanna phase myself out of doing that type of work, because it almost comes full circle back to creating the courses. When I work with these people on a regular basis, I'm being exposed to all sorts of crazy, interesting and cool problems that I never would have been exposed to if I didn't speak with them... So I often get decent blog post ideas, or even course topics that I always make generic. I'm never gonna use their company name, or anything like that, but it's a good idea generator.

**Jerod Santo:** \[00:23:55.10\] Yeah. I'm in a similar spot, I've been doing contract dev since '06, and on my own since 2012, and continue to this day to do that, and The Changelog has always been my side project. Now, we've been fortunate enough that Adam was able to make it his full-time project. It was always a hobby/side project for him up until -- I think it's been three or four years now... 2015-2016 he went full-time on Changelog, so it's been going very well... And we're at a point now where I could come on full-time anytime now, so we're getting close to doing that.

One of the things that I've always thought was a must-have - I've taught web development as well - is having real-world experience on a day-to-day basis. Not moving into the realm of someone who just talks about things... Even as a teacher, I didn't wanna be a teacher that just taught what I used to do, or what I learned; I wanted to have actual real-world, in-the-trenches experience to bring to my teaching. And the same thing with podcasting, these conversations... It helps being in the thick of it, day-to-day, and having client work where everything is -- like you said, I've seen it all, I've experienced lots of different codebases, different circumstances...

That being said, my desire is to move over and do Changelog full-time and not do the client work, because lots of reasons that we could go into if you find it interesting... But I'm sure you probably know the reasons pretty well as a freelancer yourself. But then the question is "Well, how are you gonna stay sharp?" And I think the answer to that is there's tons of software that I could be writing around here; I'm always gonna be writing software, it just won't be other people's software, it will be our software... Which to me is like a tractor beam. That's engaging, that's something I would love to be doing... Because I've been writing software for other people for so long.

But it definitely is a concern, it's like maybe I'll lose a technical edge by not exposing myself to so much software besides our internal projects.

**Nick Janetakis:** Yeah, that is something I thought about in the past too, for wanting my own course platform... Because that really is the ultimate -- it's like the Changelog equivalent for a course creator; having your whole platform that you just develop yourself and maintain - that is real-world experience, if people are signing up, paying money, launching courses...

**Jerod Santo:** For sure. Yeah, and my hope is that not only continuing to use our platform as real-world production, day-to-day grind software, but also now having the freedom to experiment with more of the things that we come across... Because just time-based -- I mean, there's so many software projects that we either have on the shows, or it pops up in Changelog Nightly and I log it on Changelog News, that I would love to actually dive deeper into these things, but I just don't have time now... Whereas I believe I'll have time to do deeper dives, maybe in video, maybe on the streams (like I was doing on Twitch for a little while) into other people's software and the community, and contribute back some more, and stay sharp that way... Which I just don't have time now, because I have client work really balancing out my schedule.

So that's another hope - I'll have the platform, I'll have our internal tooling to work on, and then I can also do more experimental coding, which let's face it, that's the fun stuff, right?

**Nick Janetakis:** Sure. I have a question for you though - how much time do you actually put into the Changelog codebase? Infrastructure, the actual application etc.

**Jerod Santo:** \[00:27:58.21\] Personally, not very much at this point. It comes in fits and spurts. We have ongoing features that I work on, but... Are you looking for an hours/week number?

**Nick Janetakis:** Yeah, like a rough estimate.

**Jerod Santo:** I would say in the current phase I think we're probably at 5-10 hours/week on the code specifically. There's a lot of stuff around the code, and around our site or infrastructure, even just working inside the community that flushes that out... But it's not a full-time job by any means.

**Nick Janetakis:** Right.

**Jerod Santo:** You're probably putting way more hours in because you're in the active development phase. We have a feature list, and we have things I'm working on, but they all kind of interact -- for instance, right now we're doing something called metacasts, which is kind of a... I was about to say "kind of a hack." It's completely hack. But I think it could be pretty cool.

One of the issues that we have is our search kind of sucks inside of podcast directories. Finding us inside of Apple Podcasts, finding us inside of Overcast, which has gotten a lot better, finding us in Spotify etc. isn't as easy as we think it should be... And it's obviously a primary way that people find us, is they're searching for things inside of the podcast indexes. Some of that is just because these indexes have really rudimentary search engines. So for typical phrases -- this is kind of like search engine optimization, but only inside podcast indexes. For certain topics and phrases we're just nowhere to be found, and we can't figure out why. All the metadata is there, we've done all the things that I know to do to make it as good as possible, but it's not good enough... So what we wanna do is create these things called metacasts, which is basically a kind of a cross-cutting podcast based on topics and specific podcasts, which can have its own name, have its own artwork, and hit really strongly on specific keywords. They won't be publicly on the website, they'll just have RSS... And they will be submitted as new podcasts to Apple, to Spotify etc. But they're gonna be keyword-based.

For instance, maybe just easier with an example - Kubernetes. Kubernetes is very popular, people would love a podcast about Kubernetes; there are Kubernetes podcasts, but across our five shows, especially GoTime and The Changelog, there's tons of Kubernetes content... So a metacast on Kubernetes and basically cloud-native things, where it pulls in based on the topics that we tag our episodes with, specific episodes from those podcasts, so that we can have a podcast called "Kubernetes from the Changelog", and that's the very first word in the title - that will really help us, we think, in the podcast indexes. So that's something that I'm building right now. Internally we call it metacasts.

That also is tied into some of the artwork changes - each one has to have their own artwork, so there's some design decisions involved, and there's other reasons why it hasn't quite shipped yet, it's not done... But I can't just crank it out and be done; there's things that are timeout-based... They just kind of like product things that slow down development.

**Nick Janetakis:** Right. A lot of good stuff packed in that conversation.

**Jerod Santo:** Yeah. Have you done any search engine optimization, or anything like that?

**Nick Janetakis:** \[00:32:09.18\] A little bit. That's like a whole topic that I've been thinking about for the last 4-5 years when I started making a blog. It's like "Do I wanna put all of my content on my main nickjanetakis.com/ site, or -- because right now I actually host my courses on their own domain name, so diveintodocker.com, buildasaasappwithflask.com etc. So I really just have that one landing page for the course, like the description of the course before you would buy it... Whereas all of my content - I don't know how many blog posts (like 200-something), they all live on my main site... And I always wonder if it would be better if certain content were posted on those course domains instead, like Docker content on a Docker course. But it really comes back down to abstractions... Like, if I put all of my Docker blog posts on the diveintodocker.com domain, because that's one course, what happens if I make a new course - which I'm planning on making - for Docker in the future? It's like, well, do blog posts go on that second Docker courses domain name, or the first one, or somewhere else?

**Jerod Santo:** Right...

**Nick Janetakis:** It becomes a weird mess now, of like "Where does content go?"

**Jerod Santo:** Yes. If you're looking for a take on that...

**Nick Janetakis:** Sure.

**Jerod Santo:** I would say at the end of the day what you offer is your teaching, so I would tend to put everything on nickjanetakis.com, and then link to the specific courses... I could flip-flop on that; that's a tough one. Long-term I think you'll do better to build your own personal brand, versus these specific course brands, because you will outlast your courses, especially in this industry... But then you also risk the chance of attracting someone to your blog and having them not ever know that, by the way, you have a Docker course which they are interested in.

So if you do a good job of the cross-promotion and the CTA in your blog design, maybe linking to specific things based on what you're writing about, I would tend to think I would put everything under a name, versus the courses... But I could definitely be talked out of that, too; that's just my first initial thoughts on it.

**Nick Janetakis:** Yeah. I don't know if you wanna look at the site now - you probably don't have to, but... I do have a courses link in the nav bar, and then it just gives you a listing of all my courses. But of course, if I do write a blog post that's relevant to Docker, let's say, there is like a call-to-action at the top that says "Hey, by the way, look who has a Docker course!"

But yeah, I feel like developers -- we're both developers ourselves... I don't know, I'm basically immune to advertising, entirely. Of course, I run AdBlock. I would never even think to do paid ads. But even like any marketing stuff, like - really? You're gonna put pop-ups on your page? Unless your content is unbelievably amazing, I'm just gonna immediately close... So it's very hard to find ways to market to developers, and that's also something I've been struggling with for a while. But I just keep powering through, create video content, text content... I don't try to word my blog posts to be sales pitches; I just write about the thing naturally. I don't know if it's the most effective thing in the world. It works okay, but I'm sure there's way to improve, and it's an interesting thing, I think.

**Jerod Santo:** Yeah... It's a balance. Looking at your website right now, I would definitely say your "Learn Docker with my newest course" banner - I think that's really solid. I think it's not obtrusive. The fact that you have the taste to not overlay "Sign up for my newsletter", "Buy my new course" as I'm reading, is key. I'm an insta-close on anybody who pops up anything on me... Which is the same thing that we do. And we have a strong call-to-action to sign up when you hit the homepage signed out. Changelog.com, you're signed out - there's a nice, big banner there. It's not an overlay, but you can't miss it. You can exit out, and we'll store that in the cookies so we won't show it to you again.

\[00:36:15.27\] If you're signed in, it obviously won't show it to you, because you've already signed up. But we try to stay super-tasteful with any sort of promotion that we do, because we have being offended by pushy people. You know, we're developers...

So I'd say you're doing quite well in that regard. I'm just looking at one of your blog posts; there's a quick jump-down to a video, it's cool... Do you have one that's specifically -- this one I'm looking at is "Calculate invoice amounts with Bash", that's the most recent one.

Here we go, "Docker tips." So does this one have it's own at the end?

**Nick Janetakis:** Yeah, there's a little CTA at the bottom where people can actually -- well, in the Docker posts they can sign up for free and they get a little emailed based Docker course that eases them into the paid video course, if they want... But of course, opt-in; it's not an annoying pop-up type of thing. Which is funny because -- I don't know, I don't think I'm a natural when it comes to sales. For me, sales has always been like the snake oil/car salesmen, and it's like "Buy my stuff!" while he's hovering over your face... So to get better at sales, what do you do when you get better at stuff? You practice things, you read up... So I read so many different copywriting books, and tried to follow all these "influencers" on YouTube; people who are internet marketing gurus... They're all like "Oh yeah, you have to have all these pop-ups, and things like this, and hammer that person with 10,000 ways to opt-in..."

Even newsletters... When was the last time -- I'm not bashing newsletters, because your whole entire business makes sense to have a newsletter... But for the random developer like me, who's just a dude blogging about whatever the heck I'm interested in, like Bash scripts, and Docker, and Flask, and programming in Elixir - you're not gonna sign up for that guy's newsletter... What is he gonna give you that's that valuable, you know?

**Jerod Santo:** Yeah, I do know... That being said, it seems like you do have a fair amount of content that would be pretty valuable to people. You do have the free email course, which I do think is a good way of going about it... But do you mean like a weekly thing, where you're writing a newsletter every week?

**Nick Janetakis:** Yeah. Even if it's custom things, or just regurgitating the blog posts, because maybe you don't go to the site manually.

**Jerod Santo:** Yeah, it's interesting... Nadia Eghbal recently wrote a post which I really appreciated. It's called "The perks of patronage." She wrote it a few weeks back... And it's a very interesting thing. I don't know if you're familiar with Nadia's work at all. She's a long-time community member of ours, and has written a lot about open source sustainability; a lot of the human side of software an technology, very insightful stuff... And there she's writing about what patronage looks like nowadays, and what people are coming for when they're subscribing to somebody, whether it's a Twitch streamer, or they're buying video courses... I think specifically she's focusing on Patreon and Kickstarter as subjects of that post. I'll send you the link to read it...

One of the things that she says that was interesting to me, which I hadn't really considered before, and it made me wanna do more stuff that's personality-based, or personal, or... Even Backstage - we've been doing Backstage for a while; we don't record it very often... But I wanna do more Backstage stuff, because she says that there's actually a relationship to a person that matters more than the ones and zeroes of what you're providing them, or the dollar value of "This content is worth this value."

\[00:40:10.06\] Anyways, I don't have much beyond that to say about it... It's made me change a little bit my perspective, because I would originally agree with you. But now I might say "Well, maybe people just like to hear from Nick Janetakis", and maybe they appreciate your work, and you do help them learn, and they would love to just keep up with what you're doing, and what your thoughts are on whatever it is you think is interesting to write about.

Some of it is around this idea of the new rise of personal newsletters as the newest social network, as people are starting to move away from public everything into more private, inbox-based writing. Kind of a new version of blogging. Anyways, I'll send you that link.

**Nick Janetakis:** Yeah, please.

**Jerod Santo:** It might stoke some of your thoughts on that.

**Nick Janetakis:** I am 100%. First, let me get this straight here - I think the value of the newsletter is as high as it gets. When I'm ready to release a new course, I am sending that out to my list. A very large percentage of the course selling income is from those initial emails blasts. Very infrequently, but yeah. I totally agree about--

**Jerod Santo:** Do you read newsletters? Do you sign up for newsletters?

**Nick Janetakis:** It's so funny how that works, at least for my brain... I'm signed up to a number of newsletters, and I read almost none of them.

**Jerod Santo:** Hm... What about RSS? Where do you get your news?

**Nick Janetakis:** Well, fortunately (or unfortunately; maybe fortunately), I just go to Hacker News every once in a while... And by "once in a while" I mean like every 15 seconds...

**Jerod Santo:** \[laughs\]

**Nick Janetakis:** No, not that bad, but usually I just scan Hacker News, and then maybe some Subreddits...

**Jerod Santo:** Yeah. I was addicted to Hacker News for years. I was one of the very early adopters of Hacker News. I went straight from Digg to Hacker News, when Digg went south. I know a lot of people went from Digg to Reddit, and then Hacker News eventually... So because I saw Hacker News in what I would consider its glory days... Of course, this is like the person who discovers the band, and then when everybody comes and likes their band, they think they've sold out. But Hacker News used to be a treasure trove of everything, and I've weaned myself -- the way I actually weaned myself off of Hacker News was by subscribing to the Hacker Newsletter. Because there's this thought of like "I'm going to miss out, so I have to check what's number one today", or whatever that thing is where you say "Once in a while, every 15 minutes." Because I used to be one there all the time probably 8-10 years ago.

Hacker Newsletter really helped me out, because he does a great job of basically including all the links that are good that week, and he sends it on a Friday morning, or Saturday morning if he slacks... And so you just don't have to go there, and you can still feel like you're keeping up. That's the way I weaned off Hacker News.

I actually have used Reddit more now than I used to. Specific Subreddits are pretty good. The home is trash mostly, but...

**Nick Janetakis:** Yeah.

**Jerod Santo:** Yeah, I still do RSS... I subscribe to specific people. Again, it's that personal touch. I'm not gonna subscribe to The Verge on RSS; that's just insanity. Or I personally wouldn't subscribe to Changelog News on RSS, because we're gonna post 5-10 things a day, and I don't want that. I wanna know what Nick has written lately. I subscribe to specific developers' blogs, because they're infrequent and high-quality usually.

But I also do newsletters now... And I used to be a "Kill the newsletter" kind of guy, like no email. It's actually kind of nice having something just put in your inbox once a week. Of course, you can ignore it if you want to... But I like how it's packaged up and presented. It's not like a Daily Star, minute-by-minute stream of what's happening in this time box.

**Nick Janetakis:** \[00:44:21.13\] Yeah, I've even had some people who have subscribed to my list be like "Just send more stuff."

**Jerod Santo:** Send more stuff... \[laughs\]

**Nick Janetakis:** Because for a while it just got to be like -- I would post something every three or four months. Very, very infrequently. But I think when someone connects with you at a human level, and they're one of your true fans, or whatever, you just wanna consume as much of their content as possible, I think. That's how I am. When I find someone interesting, I'm just gonna binge all of it, everything they do.

**Jerod Santo:** Yeah. I've never been a binger. Will you go back-catalog? If you find a person who podcasts, and you found them episode \#68, will you go back to \#1 and just back-catalog them?

**Nick Janetakis:** I wouldn't watch all of them from \#1 up, but I would absolutely go to the back-catalog and just look through all the topics and see which titles catch my eye. Like, "Oh, that sounds interesting..." And I'll be way more lax about that, too. If I really enjoyed one of their podcasts, I would be more inclined to watch more of their older stuff, versus someone who is like a so-so podcast. So-so I probably wouldn't even go back.

**Jerod Santo:** Yeah, that's what always surprises me. If I find somebody, I will rarely go back. I will subscribe and I will be a faithful subscriber to a new contact, but I'm just not really a back-catalog person... And there's some slight exceptions to that, but pretty much that's a rule.

But we have so many people that go back-catalog on our shows; it always surprises me. They're back there, listening to episodes \#1 through \#20. And now, let me just say to you... If you like The Changelog - okay, go back to \#200, maybe go to \#300, but don't go back to \#1 through \#20, because we've gotten a lot better at what we do since then; there's some lower-end podcasts back there in that catalog.

**Nick Janetakis:** Yeah. That's definitely a testament to creating content. Just like coding, at the start, it's gonna be pretty bad, but then you just keep doing it and doing it and doing it, and 100 episodes later it's good.

**Jerod Santo:** Yeah. How many videos have you done?

**Nick Janetakis:** 190 of them are in the Flask course. The Docker course has like 75. There's probably been about 20 hours of actual final cut video. But the amount of recording that took place to get to that point was a lot. So I don't have exact hard metrics off the top of my head, but usually, for every one minute of final video that I'll release to someone, it's about 7-8 minutes of real lifetime to get to that. Just between having to take, and retake, and then edit, and all that stuff...

**Jerod Santo:** Yeah. I'd love to hear your process real quick maybe, before we tail off here... How you go about -- maybe even tell me how it's changed over the years, but specifically what are you doing now and what works well for you?

**Nick Janetakis:** Well, I'll try to condense this. I don't know how much time we have left - like 10-15 minutes, something like that?

**Jerod Santo:** It's our show, it can be as long as we want it to.

**Nick Janetakis:** Okay. I'll try not to ramble too long...

**Jerod Santo:** \[laughs\] Yeah, 10-15 sounds fine.

**Nick Janetakis:** When I first started doing courses I didn't even have a real microphone. Basically, my cousin had a non-RadioShack microphone... You know those really wimpy ones?

**Jerod Santo:** Sure, yeah.

2: He had something that looked reasonable. Okay, so let me use that. Back then I didn't even use noise reduction, and all this other stuff. You can hear crickets in the outside, because it was during the summertime, and it was like 8,000 degrees with the windows open... It wasn't extremely bad, but I also had terrible headphones. I didn't even hear half that stuff then. Ignorance is bliss type of thing. \[laughter\] So then eventually, as I did more courses, I upgraded my equipment.

\[00:48:07.28\] For the longest time I was using this one program ASIO Link Pro on Windows, and what it allowed you to do was -- I was never that type of person who wanted to record my audio, and then have to go in and actually remove noise for all the tracks, and then import it into my video afterwards. I'd much rather have all of that stuff done in real time... It saves so much time in the editing process.

So one of my biggest improvements for workflow was a couple years ago I started using that ASIO Link Pro program, which allowed me to take input from my microphone, direct it through that program, put it into an actual digital audio workstation - I happened to use REAPER back then... Do the noise cancellation, and leveling, and compression there, and then output it directly to the program I was using to record the videos. So when I hit Record to record a video, my audio was already pristine, in final form. That saved a ton of time when editing.

But then something really unfortunate happened, and I feel terrible about it. The developer of that software literally died, and his brother ended up making a post on the Subreddit...

**Jerod Santo:** Oh...

**Nick Janetakis:** Yeah. And it was one of those programs -- it wasn't free; it was like $50 or something... But it had a registration server key where it phoned home every time you opened the program. And with him, the server went down as well... So I literally couldn't record my courses anymore. I mean, his problems were a lot worse than mine... But yeah, that made me rethink about my whole entire audio situation.

Right now what I'm doing is I have a $60 Dynamic mic that has an XLR input, and it goes right to an audio interface. I don't know if you know Scarlett 2i2. It's that red--

**Jerod Santo:** Yeah. It's sitting on my desk right over there.

**Nick Janetakis:** Yeah, so that's a pretty good audio interface. It seems to work well on Windows, Mac, and even Linux. So I have that hooked up, but then I also have now a new piece of hardware that's basically replacing that ASIO Link Pro, that does noise cancellation, and a little bit of compression and DS-ing. That's the DBX286S. A little bit expensive, I think it was like $199, but... It means that now I can just flip the mic on and talk, and I don't have to worry about the audio quality at all. It might be a little bit weird over Skype, but when you're doing it with no network latency, the audio comes out pretty good.

And then for the editing process with the videos I just use a program called Camtasia, which works on Windows and Mac. Also a paid program. Basically, I hit Record on that -- or sometimes I use OBS when I wanna do some webcamp stuff, but... Yeah, I'll just add all my videos in there.

I think Camtasia is pretty nice, because it's very optimized for screencast-style videos, where you're recording your desktop with maybe a webcam... But sometimes in post-production I wanna do things like zoom into a specific area of my screen, or maybe highlight a specific area with a highlighter, or like a fade-out type of thing... There's all these really nice effects where you can do overlays and tooltips with text that is just very hard to do with other video editing programs, like Kdenlive, or Davinci Resolve, or just some open source one. Davinci is not open source, but they're free, technically.

But yeah, for me I think - just like coding - when you're making courses, you wanna always improve your workflow to create the content as fast as possible, and have it look as good as you can, within reason. So that's pretty much my process now.

**Jerod Santo:** Very cool. Yeah, I've used Camtasia. It seems like pretty good software. I've got the Scarlett sitting over there... I haven't done too much in terms of video; I'm just kind of dipping my toes into that water, but always interested in hearing how people who create good coding videos go about it.

**Nick Janetakis:** \[00:52:14.09\] I'm gonna change it around, though... About a year ago (or six months ago maybe) I did want to -- so right now, I don't know if you know this, but I am running Windows, unfortunately. At least there is the subsystem for Linux, which is pretty decent... My whole dev environment is actually driven by Tmux and Vim and all this other stuff; very command line-focused, and it's actually pretty good. But I did wanna switch to native Linux, but unfortunately I had some issues with the Scarlett in Linux. I kept getting these weird -- the audio would completely drop out... A hardware malfunction type of drop out. It wasn't even like -- what's that term...? It wasn't like something was getting overloaded, it was just like a signal drop. But apparently it's not happening to everybody, and I was using the Debian Testing channel, so maybe there was something wrong with that... But yeah, ideally I would love to go native Linux and just record with FFmpeg on hotkeys, and optimize the heck out of it.

**Jerod Santo:** That'd be cool.

**Nick Janetakis:** Yeah.

**Jerod Santo:** Well, Linux and hardware historically have been the source of many, many lost hours of people trying to figure out why the Wi-Fi doesn't work, or why this particular headset doesn't work, or that interface... I think it's been the -- I won't say the downfall, but it's definitely been a stumbling block for a lot of people using Linux, those particular weird scenarios with drivers, or whatever it happens to be... That's where we're at with people recording on Linux, especially because we use Skype, and Skype on Linux is just not reliable software... Whereas for audio calls, Skype on the other two platforms is reliable software. It's not the best user experience, but it is the best in terms of latency and keeping that connection alive.

When we have somebody who calls in and they're like "I'm on Linux", we're like "Oh, it's gonna be a long afternoon", because things are going to go not well. It's a shame, because everything else about it, in my experience, is pretty awesome.

**Nick Janetakis:** Yeah. It's really unfortunate too, because I discovered i3, which is a tiling window manager. I don't know if you know a little bit about that stuff, but -- oh, God... There's nothing on Windows that's even remotely comparable. Sure, there's some built-in hotkeys where you can split two windows left or right, or up or down, but a proper tiled window manager... I don't know. I fell in love with it immediately, but now I feel like that alone is enough to switch to native Linux, if I can get my audio working well... Because there's hardcore solutions to get Camtasia to run on Linux. It doesn't run natively on Linux, but you can technically buy the second video card and then do like a GPU pass-through virtual machine through KVM. Then it's almost like the VM has dedicated access to that second GPU or video card that you have, and then you can actually just run Windows on that. Then it's like you're kind of running Windows and Linux side by side, but Linux is still your primary host OS, type of deal...

**Jerod Santo:** Right. That's cool.

**Nick Janetakis:** Yeah, I've seen people gaming at 120 frames per second on very modern games through that type of setup, so I'm pretty sure video editing should be fine.

**Jerod Santo:** There's a piece of software - I can't think of the name right now - where you can basically merge two machines across two monitors, with one mouse, one keyboard.

**Nick Janetakis:** I've heard of that.

**Jerod Santo:** Yeah, I've used it. It worked really well. In fact, somebody put it in Ping. Let me look it up. Ping is our repo on GitHub where people suggest shows, and stuff... They said "You should have these guys on", and I was like "I love that software!"

**Nick Janetakis:** \[00:56:07.21\] Yeah, I know exactly what you're talking about, but I can't think of it.

**Jerod Santo:** The guy didn't actually end up coming on, otherwise I would totally remember what it was.

**Nick Janetakis:** It for sure starts with an S. But I think what I'm gonna do is -- you know, I'm in the middle of working on a course now, so once that course is rolled up and out, I may experiment a little bit more with some native Linux stuff, even if it involves buying a completely different set of hardware.

**Jerod Santo:** Synergy.

**Nick Janetakis:** Yes. Maybe.

**Jerod Santo:** That's right. I've found it. The story of Synergy... Synergy is -- that's the name of the Ping, I've found it. It was closed. I close them once I do the invite, just to keep it cleanly. But... I feel like the guy just never responded. The story of Synergy... Yeah, this stuff goes back years. Basically, what it is -- I mean, talk about a hack... It's basically the thing that bridges... And I think you install the client on both machines. Let's say you have Windows on your left-hand machine, your monitor on the left, and Linux on your monitor on the right. And a single keyboard, single mouse. You install -- I think one is a client server, if I remember... You install it on Windows, then you install the client on Linux, and it just -- I mean, Synergy is a pretty good name, even though it's a lame business term for this, because it actually just merges the two. It feels like one machine, and you're switching environments just by dragging your mouse across to the other monitor. It's pretty cool. "Synergy - combine your computers into one cohesive experience. Share one mouse and keyboard between multiple computers."

It's one of those things where you just think "That's gonna be buggy..." And maybe there's bugs; I'm sure there's bugs, it's software... But man, it sure worked seamlessly for me back when I used it. I had a similar scenario where I wanted to use Linux, but I had specific Windows needs. This was way back before the hardware on laptops was really strong enough to do VMs and stuff without totally bogging your machine down... So I ran two machines side by side. You can even copy and paste between the computers. Cool.

**Nick Janetakis:** Yeah, there was a video I watched of it a couple months back, and it was very nice... It seamlessly moved the mouse from one OS to the other.

**Jerod Santo:** Yeah. Each time you do it, you're kind of impressed. Every time you drag that mouse across to the other OS, it's just like "Oh, man..." Cool, Nick. Well, this has been fun. Like I said, Backstage is a great place to talk shop. You and I have lots of shop that interacts with each other. I loved hearing about what you're up to... And make sure you send me any links with things that we mentioned, so we can put them in the show notes, for people that are interested. I'll put Synergy in there, as I'm sure listeners are at least intrigued if they'd never heard of that one.

\[00:58:54.24\] Listeners, let us know if you enjoyed this. We have discussions on Changelog.com. Speaking of our custom CMS, we have recently added commentary. So while everybody else removes comments from their websites, we're putting them back. We're putting them back on the website. One of the cool things about that is you can discuss specific episodes. All news items get comments, and each episode of the podcast gets its own news item, so you can comment on podcast episodes.

To do that, if you open your show notes, there's a link to it in the show notes. It says, I think, "Discuss on Changelog News", or something like that. Click that link. If you're on the website, click the Discuss button there in the toolbar, let us know what you think. If you have questions for Nick, or for me... If you like this style of episode, let us know; if you hate this and hope we never publish it again - well, don't be mean about it, but we appreciate that feedback as well... And yeah, I look forward to doing this more often, if people think it's something they wanna listen to.

**Nick Janetakis:** On that note, thanks a lot for having me. And on the topic of comments, really quick - I'm really happy that you added that feature to the Changelog site, because that's gonna come in handy for my platform as well.

**Jerod Santo:** \[laughs\] Anything else I can add to our site, so that you can benefit...?

**Nick Janetakis:** Yeah, absolutely. What you can do is in the markdown preview for the comments in that text box, let's get things set up - and by "let's" I mean purely you - add some front-end capability where I can take some image in my clipboard, or drag and drop the image in there, have it get uploaded and produce the URL, similar to GitHub, how they do the issue comment. I would be a very happy person if that were to happen by tomorrow afternoon.

**Jerod Santo:** Oh, boy... I can't make -- actually, I can make a guarantee on timing; it won't happen by tomorrow afternoon. That being said, if you procrastinate long enough, that's definitely on our hit list, because we want the commentary to be as capable as people are used to on other websites... So that's definitely something that we will be doing, just not any time real soon.

**Nick Janetakis:** That's okay. I have plenty of other things to work on.

**Jerod Santo:** \[laughs\] Alright, see you later, Nick.

**Nick Janetakis:** Alright, thanks. Bye.
