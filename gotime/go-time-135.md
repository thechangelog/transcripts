**Jon Calhoun:** So today we're gonna be talking to you about regrets. Specifically, we're gonna be talking about technical regrets; no need to go into how I broke my nose two weeks in a row... We'll talk about what caused these mistakes, how we learned from them how teams and companies can maximize the learning potential from whenever somebody on your team does make a mistake... And really just trying to show everybody that it's okay to make mistakes, that we all make them... Because I think that's something that we all need to understand going into tech, is that you are eventually going to mess up, and that's okay. What's more important is how you move forward.

To start with, does anybody wanna talk about a time they made a mistake?

**Aaron Schlesinger:** Well, since it's crickets, I'll give it a shot... When I came to Go, I was really psyched about the concurrency. I came from Scala at the time, so I was doing actors and thread pools and all that... And for me at least, it was super-complicated, and I had to re-read docs every other day to figure out what was going on under the hood. So I came to Go, and I was like "Yes! Goroutines, channels... I've got this." And then I immediately wrote actors in Go, which just felt in retrospect like fitting a... What is it- a square peg in a round hole? Or the other way around? So definitely a mistake. I regret it, because it cost me like a month, after it was all said and done... But looking back, I think I learned a lot about Go concurrency basics, without at the time having really read through anything deep about concurrency in Go.

**Ben Johnson:** I feel like everybody has the channels phase of Go, and whenever new people come with learning Go and how excited they are about that, I always almost forget those channels. I just don't use them that often. It's like "Oh yeah, there's that thing. It's really cool, too." But yeah, I agree, there's definitely a lot of ways to go around that issue of concurrency, and figuring out which one's appropriate at the right time.

**Jon Calhoun:** \[00:04:06.19\] I've seen that a lot -- so people go to learn how to build web servers, and the first thing they'll ask is "Well, how do I use this concurrency?" because they're really excited about it... And I think -- I don't know if they're disappointed, but when they realize that it's already there and happening for them, and they don't have to worry about it, I think some of them are just like "Oh. Well, I thought I was gonna actually get to do something, and use these things." It's like, "No, you just write regular code, and just make sure it's thread-safe, and you're fine."

**Kris Brandow:** I guess over the time of going into new jobs, whenever I'd look at a codebase I can kind of gauge how familiar the person who wrote it is with Go, based on the number of channels and goroutines I see sprinkled throughout the code. I tend to see a ton of new people. And I definitely did it when I was first learning Go, that's just like "Oh, I should just put goroutines everywhere. It'll be fine. There won't be any problems", and then you try to debug the code three months later and it's like "Who wrote this, and why did they do it this way?" And you're looking at \[unintelligible 00:05:00.11\] and you're like "Oh. Oops..."

**Aaron Schlesinger:** Break out the old Git blame, and then you shut it down real quick when you see your name on there... \[laughter\]

**Jon Calhoun:** I think that's okay though, making those mistakes, I should say... Because -- one of the mistakes I made when I first was jumping into Go was that I just felt like I over-planned, or I tried to over-optimize for getting things perfect... So you'd read about how you shouldn't use MVC, and you shouldn't do all these different things... And I sat down, I'm like "Alright, I'm gonna write this side project." It was a side project, it wasn't my main work stuff...

So I was like "I'm gonna build this thing, and it's gonna be good Go code...", and I think I spent so much time rewriting some stuff, because I was like "Oh, this is a bad way", and I realized why, and then I'd go back and rewrite it... And in the end, I'm pretty sure what I ended up doing was just using a simple MVC model, and just got it done... And then later I was able to come back and tweak things and adjust. But I wasted so much time trying to meet the expectations of everybody, I guess it's how I'd put it. To me, that was a big mistake, because I feel like you learn more by just kind of jumping in and doing stuff, rather than trying to find the optimal path.

**Ben Johnson:** Yeah, I totally agree. I think that definitely early on it's less important. I feel like once you start sharing code, and libraries, and stuff like that, there are a lot of those idiomatic things where if you didn't do it at first, it might require an API change in the future, you might have to change your versions to a new major version... I think it's more complicated there, but yeah, first, for sure, just jump in. All my code was basically Ruby inside Go, the first couple projects... So that was rough. But you figure out as you go, for sure.

**Aaron Schlesinger:** And I find over and over I make a lot of the same mistakes in terms of over-designing. Most of the time I like to do it because it's fun... And then I turn around, and I say "Well, this could have been way simpler. I could have deleted this function" or whatever. But I keep finding over and over that Go is a really forgiving language when you have to uncomplicatedify... I hesitate to say "simplify", because it's really not making the code semantically simpler. It's literally deleting syntax. It's just really forgiving, and allowing you to do that without changing large swathes of code outside of that area you're working with.

**Jon Calhoun:** I also like to think about -- I don't know if it was Cory LaNou... It might have been him that I was talking to, but he'd basically mentioned that when you're writing code, getting something working is more challenging than refactoring something. So just keeping that in mind, and knowing that it's okay to make mistakes, and that's part of the reason we have code reviews, and peer reviews, and all these other things in place, is so that we can learn from each other and improve things... Not because we expect people to have the perfect first version.

\[00:07:58.21\] I think that's a mistake a lot of people new to programming make, is that they see code that somebody like Kris or Ben would have wrote, and they're like "Oh, I need to write this the first time", and I'm like "They probably didn't even write it like that the first time, so I don't know why you're expecting yourself to do it."

**Kris Brandow:** I think that's an important point about the difficulty of writing new code. I'm definitely experiencing that myself right now. I have this new project at work, and it's like "Oh, write from scratch. Don't use anything else anybody has. Just write a brand new thing", and I'm just struggling to remember how to build all this stuff I'm used to just being there already... And that's a really odd experience for me. But it makes me appreciate a lot the coming into a codebase and just being the person that gets to "fix it", or "make it better and improve it."

**Ben Johnson:** Yeah, I'm working on a database project right now, and it's just in its infancy, but it's all just some for loops over some basic data structures, and it would just make any database engineer just cry, just how slow it'd be. But I'll get some tests around it, and it's so much easier once you have all that in place.

**Aaron Schlesinger:** Yeah, and I feel like if you go on GitHub and you look at some popular open source projects, I feel like that's sort of the Instagram of programming; you see the perfect result, after everyone's put on the make-up, and rolled the camera, and everything. We put that on ourselves... Whereas, like you just said, Ben, you could just go in and write a for loop and it'll be good for a while. You've gotta start somewhere.

**Jon Calhoun:** And there's always the tell-tale sign of initial commit has 20 source files and 4,000 lines of code, and you're like "That was your initial commit?" It's like, "That clearly was not your initial commit."

**Ben Johnson:** I like to just kill the folder, and just restart after probably a couple hundred commits in.

**Jon Calhoun:** Oh, I'm the same way. I've got the initial version, and then that eventually gets to something, and I'm like "Okay, I'm okay with sharing this." And then I delete and just go from scratch.

On one hand, I get why you do it, because you don't necessarily want that bad history there, but on the other hand it is kind of hard for somebody jumping in who actually thinks that might be the initial commit.

**Kris Brandow:** Yeah, seeing code evolve over time is definitely helpful when you're trying to figure out how some feature in a codebase works. I've definitely done that with things I've been curious about, like "How does this feature of this big open source project work?" Kind of just like dig through the path... So it's really nice when the whole history is there, but I think there's kind of like an engineer ego a little bit, that's like "I don't want people to see my very early on work, where I made all the stupid mistakes that I made. I spent five commits trying to figure out why this for loop wasn't working correctly", or something.

**Jon Calhoun:** That's a hard one too, because I think naturally everybody doesn't like to admit that they make mistakes or that they're wrong. You almost don't wanna be seen as human... I don't know, I just feel like that's something that's hard to get over, is that fact that it's okay to be seen as somebody doing that stuff.

I suspect that some people who livestream and do that sort of thing more often are better at it. I've always been bad at livestreaming, because I'm like "What if I make a big mistake on there and look like an idiot?" For whatever reason, that's just a mental barrier. But then I see other people who stream, and I've even seen people who learn to code a new language, livestreaming the whole process...

**Kris Brandow:** That is bold.

**Jon Calhoun:** I don't know how you do that, because I would just sit there and be like "I'm gonna get made fun of a lot here, or something..."

**Kris Brandow:** It's certainly been my experience in the past... You just kind of get used to it over time. I remember working on the Go driver for MongoDb; getting the first big release out was so agonizing... So I'm like "No, it has to be perfect, and everything has to be golden." And then I remember there was a really big minor release we were pushing out; we released it, and either a test had failed, or something didn't work, and we had to immediately release a patch for it. I was like "Oh, okay. Yeah, whatever. Mistakes happen, we can't get it perfect all the time." That was such a large growth for me from the beginning, to that point, to be able to just be okay with that. I think a lot of people would just be like "Oh my god, no. I messed up. I'm done forever. I'm gonna go run away and hide now."

**Jon Calhoun:** \[00:12:14.01\] I think the other thing with mistakes is depending on how an organization or a company handles it can kind of shape how people address them in the future, I guess is a good way to put it. One example that comes to mind - we've all probably heard a story about some junior developer or somebody deleting something, or breaking something... Somehow breaking production, whether they delete a database file, or whatever they end up deleting... And I think some organizations handle it well as a teaching experience and a learning experience, of like "How can we prevent this from happening again?" and others are like "He's fired. It's not gonna happen again." I'm like "That doesn't prevent it from happening again. The problem's still there." So beyond the obvious "Don't fire people for making a simple mistake", are there other things you've seen that work well in organizations to sort of foster that growth through mistakes?

**Aaron Schlesinger:** One thing I've seen at least is encouraging the folks who did make the mistake to build tooling to prevent it in the future, whether it's production tooling, or like a CLI to help you automate the thing you messed up, or whatever it may be; they get a deeper understanding of what they did and how the right way to do it is. Also, they just transmit that knowledge via code to everybody else.

**Kris Brandow:** I think too deeply analyzing the system and processes in place that led to that failure or mistake is super-important. I think a lot of the time when we go through and we do a blameless retrospective or something, we might not pay as critical attention to the system overall as we probably should, and figuring out "Well, what things do we not have in place, that would have prevented this not just on this team or for this project, but across all of our projects?"

**Jon Calhoun:** I think a lot of orgs tend to call them post-mortems... Is that what you had in mind, or is that a little bit different to you?

**Kris Brandow:** Yeah, I think I meant post-mortem, not retrospective. It's definitely the word I was looking for.

**Jon Calhoun:** Either one's fine; that wasn't meant to be a terminology -- I wasn't trying to fix or correct you there, but that's the term I've heard... And I've seen -- I think GitLab has done some, where they've lost data and had a public post-mortem. I think some companies do like just private ones internally, depending on the mistake and the severity of it... But I was just trying to make sure that's what you mean and that's the kind of thing that you're referring to...

**Kris Brandow:** Yeah.

**Jon Calhoun:** Okay. Yeah, I definitely agree that sitting down and having a discussion about it is useful, especially -- one piece of advice I've seen is to sometimes do that without computers too, just to sit down, and like it's more about the human interactions, and openly as a group... Like, not trying to Git blame and look through the code and see who messed this up. It's more of a "How can we as humans make sure these types of mistakes don't happen again, and how can we work through this trying to be empathetic?"

**Kris Brandow:** And I think writing things down afterward is important too, so that when new people come along and they wonder "Why do we do this thing like this?", you can have something to go reference. It's like "Oh, we had this really big outage, and here, you can go read about it. That's why we do this in a certain way." So that's the first thing that I tend to do, but I think a lot of people do when they go to a new place, is start questioning the processes and being like "Well, why are we doing it this way? Is this because we've just always done it this way, or is there some deeper underlying thing that caused us to do it this way?"

**Aaron Schlesinger:** Yeah, and I think it's all the better if the company's able to publish them publicly, because the person can get a feel for how a company deals with it before they even join.

**Jon Calhoun:** \[00:15:51.13\] I'll definitely say companies that do public post-mortems like that, I'm far more inclined -- like, if I was looking for a job, I'd be far more inclined to consider them than the ones that privately don't tell you what happened and you're always sitting there wondering "Did the person get fired for this? What happened?" Especially when they're mistakes that you're like "I could have easily made that mistake." And sometimes I don't even think it matters how much experience you have.

**Ben Johnson:** To touch off on the outage piece - I feel like that's another side of it. A lot of these companies - I've talked about this before - where like GitHub will go down and everyone kind of stops work for a while, they're all freaking out... But no one's leaving GitHub. The cost of that outage - it's frustrating and whatnot, but if they're down for an hour, we all find ways to get around it... And sometimes those things that seem so big, those big outages aren't usually as damaging as you might think; I mean, personally.

Sometimes, depending on what you do, you really need to have that super-high uptime, but other companies just aren't the same... I think it's important to get some perspective on that side, too.

**Aaron Schlesinger:** I think the public aspect of it builds trust in the company, too... Because if they're willing to not only admit they made a mistake, but also give you a look inside of their infrastructure in order to tell you what happened - at least for me, that gives me a really good feeling that the company is gonna be around for a while, they've got a good internal culture, they're gonna be able to track good people to make it better in the future, the features are gonna stick around... There's a long list of things that I immediately go to when I see something like that, and almost all of the things on that list are good.

**Jon Calhoun:** I think it's also nice to see what they're doing, so it doesn't happen again. The best post-mortems are like "Here are the steps we're taking so this problem does not happen again." Then there's some that -- the biggest one that comes to mind is when we all had the credit leaks from... I don't know which company it was, so I'm not gonna name any of them...

**Ben Johnson:** All of them, probably...

**Jon Calhoun:** All of them, probably...? So whichever ones it was... But even now, I don't feel like I know what they're doing so it doesn't happen again. As far as I know, they were like "We're gonna give you free credit checks for a year", and I'm like "Well, that doesn't prevent this from happening, it just gives me a credit check for a year." So it'd be nice to see a list of like "Here are the steps we're taking so that this won't happen to you again." Without that, it's really hard to have confidence that they're not going to have the same issue.

**Break:** \[00:18:24.01\]

**Jon Calhoun:** Alright, so let's take a step back and look at another mistake that somebody has made, and dive into that. I don't wanna call anybody out, so if anybody wants to jump in...

**Aaron Schlesinger:** I already bared my soul, so...

**Kris Brandow:** I guess kind of a long ongoing mistake in my career is just not understanding the underlying technologies that I use... Especially early on, using an HTTP framework, web framework. I'd just assume that that's what you do. But understanding that framework, and maybe even layers on top of that framework, is a lot of times more complicated than just understanding HTTP, or whatever that underlying technology is. So I feel like I've done that for a long time in my career... But more recently, just trying to step back and just understand what do those frameworks actually give me, what do they add... And a lot of times that HTTP \[unintelligible 00:20:42.12\] a router.

**Jon Calhoun:** So I guess first off, are you talking about all the way down to actually understanding how TCP works, and going even below that, or...?

**Kris Brandow:** I mean, I think it's a trade-off of like "What do you get for the abstraction that you're working with?" I'm not pushing bits across an Ethernet cord, but if I can understand just basic headers, and what they do, rather than having some other library on top of that to actually set certain parameters... I feel like just understanding that underlying HTTP/RFC or some aspects about it helps me to write more direct code, instead of the candy-coding on top that you don't really need... Syntactic sugar. That's the word.

**Jon Calhoun:** Okay. So when you're looking at that, I guess my follow-up question would be like how do you balance that with the "taking on too much" aspect of it?

**Kris Brandow:** Sure, I think it's definitely a trade-off. I guess I don't know when -- there's not an easy way to say "This is when you should do it. This is when you shouldn't." So I guess it's probably more trying both... And a lot of times I can work faster not using a web framework, when I can using one. So I think for that aspect it's been much better.

I feel like another example would be like ORMs. I used those for many years in my career, and honestly, just going back to straight SQL - there's a bit of a learning curve there, but once you get past that, you just have a much more direct idea of what's going on in your code, how data is moving, and you can optimize it and you can change it around... Whereas the ORM has just this whole, crazy -- all these little tentacles going out, and trying to figure out what it's doing.

**Jon Calhoun:** I've definitely seen both sides of that. Back when I was working on a Rails project - it was a startup, and one of the people I was working with wasn't technical, but they knew enough to get the code running... And at one point they started writing what was -- basically, they were trying to use the Rails ORM to be like "You can call user.comments and look up all users' comments." So they had this query written out, and I looked at it and it made absolutely no sense to me. And then I realized that they just assumed all this stuff was magically there; like, you're just looking for stuff that wasn't there. And it kind of clicked at that point, and I'm like "Oh, I could definitely see somebody - especially somebody relatively new - not really understanding how this maps to SQL queries and how this maps to a database table, and just being confused by what's going on.

So I guess I see both sides of it, because I will definitely say that I've never written web applications as fast as I did with Rails in Go, but at the same time, I've never understood my application in Rails as much as I do with ones that I write in Go. And there's definitely trade-offs to that, in the sense that when you really understand things and things go wrong, I think that's where it sticks out the most.

**Kris Brandow:** I think it definitely comes down to a trade-off with like "Where do you want to spend your time?" If you just wanna get something done really quick, I think then yeah, go with a framework... But that's gonna come back and bite you later, when you've had some bug that's in that underlying thing, and if you don't understand how that works, it's gonna be a lot more frustrating to figure out "Oh, where is that weird thing that's happening?" I've definitely encountered that a number of times in my career, where it's just like "Oh, we didn't set a timeout properly on a TCP connection, so we have a process that's trying to \[unintelligible 00:24:07.11\] for like 40 hours." And it's like "Well, how do you figure that out? How do you find that out if you don't know how the underlying stuff works?"

**Jon Calhoun:** \[00:24:17.10\] I think that's part of why I'm so hesitant to try a new technology. I have not used Kubernetes pretty much at all, and part of that is because I'm like "I'm gonna push something into production, it's gonna break, and I'm not gonna have a clue what's going wrong." And that's slightly terrifying to me, especially when we're talking about something in production, where you really don't want that happening.

**Ben Johnson:** Everything seems to be trickling down from big companies. I've worked in moderately large companies, I've worked in tiny companies, and just the approaches you need for both are so different that -- I mean, everytime I've used Kubernetes, it just seems like one crazy layer of complexity on top of another, and I don't ever feel like I'm writing software; I just feel like I'm debugging software. It's frustrating.

**Aaron Schlesinger:** I feel like you can kind of feel it when there's such a big barrier to getting something up - whether it's Kubernetes or something else; there's just this point where you feel like "Okay, I wrote this app, it's X number of lines long, and it took me a month. And now (I'm taking Kubernetes as an example) I'm writing 500 lines of YAML, and for each line I have to go back to docs, and look something up." If you're an indie developer or you're a small team, you kind of get that feeling that "Hey, this isn't something we're ready for yet. It's a signal that, like you said, Jon, something's gonna break in production, we're gonna have no idea how to fix it, and we're gonna be under the gun." And that's a feeling I think that people develop over time as developers, especially when they push stuff to production and get those battle scars.

**Kris Brandow:** Yeah, I think the point around different size companies needing different things - I think that's really important, and I think a lot of small companies dive into Kubernetes because they're like "Oh, Google needs this thing, so \[unintelligible 00:26:16.15\] I need it." It's like "Well, you probably need a VM that you know is gonna keep running and you'll be fine", and if you have 40 minutes of downtime, it's gonna be okay. You can make that trade-off, instead of like this huge complexity that comes with something like Kubernetes.

**Jon Calhoun:** I think that's a general mistake that so many people make - wanting to use these complex technologies... And some of it is just genuine interest, which is fine. I completely understand that. If you really just wanna learn something, then by all means, you should go learn it. But I think sometimes trying to push it into a company or an organization is not the best way to learn it, because it does present those problems. And I've just seen countless examples where you get that added complexity that you don't really need to be there, and then you're just left with something that's really hard to maintain.

**Ben Johnson:** I find it crazy - with Moore's Law we've just expanded computing power at a crazy rate, but somehow I feel like our applications are slower, because we just keep adding all these little bits of cruft here and there... It just makes me sad.

**Jon Calhoun:** Yeah, I mean - GraphQL is one that I see a lot of people pushing towards... And for me, I completely understand why Facebook came up with it; there are times where I just don't understand it for -- like, if you're writing an API and you have literally one web client that's utilizing it, I'm like "Just make it return the data you need." You don't need a query language for that; just return what you need. Whereas the Facebook use cases - there's tons of different versions of mobile apps, and people are in different places where bandwidth is limited, and there's all these different factors that come into play... And I'm like "Yeah, it completely makes sense there." But I do think it's a mistake to try to let others dictate what technology we should be using, or to just mimic what other people are doing... And I see that all across tech, whether it's databases, or all these different things that they use, and I think that's a big mistake. It's almost like it doesn't matter if you tell somebody not to do it; you almost have to let them make that mistake.

**Aaron Schlesinger:** \[00:28:17.20\] Yeah, we love shiny things as engineers. It's so hard to really strip down to what you need in the practical sense, and separate that from "What do I wanna learn? What's the newest thing that I wanna put on my resume?" or something like that.

**Jon Calhoun:** It's especially hard with small teams, because you're usually so busy that the only way to learn something is to do it on a work project. So then it gets there, and if you're not doing it for your resume, that means you're probably looking to leave, and that makes it even worse. \[laughter\]

**Kris Brandow:** I think too there's this -- sometimes we do things as like a hack, to make things look better. I think a good example of this is clean URLs, which came around in the PHP time, and you're like "Oh, I just want it to be like /user/123, and then make URLs hackable. That's really cool and really fun." And I think that just got translated into our APIs, so we started building these complex web frameworks that could pull wildcards out of the URL... But HTTP comes with query parameters, which essentially do the same thing, and actually have a nice name. But it's super-popular across most of the industry to just use clean URLs with \[unintelligible 00:29:27.24\] And I always find that so confusing. It's like "Why do you care if your APIs are a little bit uglier?" ...if you have ?user=1234, instead of just having it in the main path itself? And I think we do that with a lot of things, where it's just like "Oh, well someone did that because there was this specific use case where it made sense", and it was a good user experience enhancement, but it might not apply to other places where you just kind of pick it up and try and put it everywhere else.

**Jon Calhoun:** One example I've seen of that where it's useful is I was actually looking at the source code for Pace with Mat Ryer, and they have URLs where they try to stick -- basically, the name of the task is in the URL, so if you copy-paste it somewhere, somebody can actually see... Just glancing at the URL, they can tell what it pertains to. But they don't actually use that part of the URL. It's just like a slug that you can change to anything. And there's another part of the URL that actually has the ID, and that's what matters. And doing it for cases like that completely makes sense if you're just trying to make more visibility for something... And I think Medium's a good example of this too, where most blog posts have a slash - the title of the blog post, and then at the end f that tile there's a slug that they actually use. In those cases, I'm like "Okay, cool, you're making this more readable." But then there's others, like you said, that are /user/3/comments/456 and you're like "That doesn't really tell me much, aside from I'm looking at maybe this user's comment... But it's not really helpful."

**Kris Brandow:** Yeah. I think too there's that key difference of like "Is this a URL that someone's gonna copy and paste, or is this a URL that's just like two machines are gonna send between each other?" I think in the latter case it doesn't really matter what your URLs look like, if they're just machines sending them between each other...

**Jon Calhoun:** Have you guys seen -- it's like a JSON API spec where you have a self-documenting API that sort of defines the URLs for additional resources... I forget what it's called.

**Kris Brandow:** Oh, like hypermedia APIs, or...?

**Ben Johnson:** I know what you're talking about, but I can't think of the name.

**Jon Calhoun:** There was something for APIs where if you looked up a user, it might give you a bunch of links to like "Here's the path to look up this user's comments", or something. It was supposed to be like a fully self-documenting way to design your API... But what never made sense to me was I was like "Who uses an API and doesn't understand what the end points are, that they're gonna start scouring at this way?" I'm like, I'm not writing code that's like "Tell me what I can get and I'm gonna magically decide." So some of the use cases there just didn't fully make sense. What you said made me think of that, for some reason.

**Kris Brandow:** \[00:32:05.24\] Yeah. I think that's the general idea behind hypermedia APIs. I've spent a lot of years studying hypermedia APIs. I think I'm a pretty big proponent of them as well. I think yeah, that first confusion of like "Well, I should know what all my URLs are." I think the main reason behind wanting to differentiate those two things comes down to semantic versus runtime, I guess. We often tie those two things together, and that makes APIs pretty brittle. If you wanna have a new version of your API, now you're shoving v2 and stuff all throughout your URLs, because you can't use the same name to mean a different thing.

So I think that's partly where that stuff comes from, but I also think it's very poorly explained to people, especially when you first come into a hypermedia API or something like that... Like a new concept, and people just \[unintelligible 00:32:57.19\] That curse of mastery, where you just assume that everybody has acquired this knowledge that you have... So it's like "Oh, I understand the difference between what a target URL is and what a semantic name for that URL is, so everybody must understand these things."

And I just think too, in some ways we haven't pushed it enough as like a sub-community of the industry. Hypermedia is a thing that we openly accept when it comes to browsers, but with our APIs not as much. We'd go probably pretty mad if Facebook decided to update some URL somewhere and Chrome was just like "Oh no, that's not what I have recorded in my source code, so you can't use Facebook anymore." We'd all be like "No, that's not how it works." But I think making that translation from how something works in the browser to how something works in our APIs is difficult.

**Ben Johnson:** It's also something that, Jon, you were saying - you should know what the API does. This is a little bit of a tangent, but just documentation in general I feel like is a regret I've had in the past, of just not doing enough, and that projects that have actually done really good documentation... \[unintelligible 00:34:06.06\] I did a lot of documentation on it; I feel like that was the main selling point for a lot of people... It's just like "Oh, well, this looks like a legit project, not just three lines in a readme." So I think that's another regret to put on there.

**Jon Calhoun:** I think that's what a lot of companies should have... I see so many API companies, then you go read their docs and you're like "I don't know how this works." It's frustrating. And then you look at something like Stripe, and - generally speaking, Stripe is one of the better ones. And not to bash on them, but there are definitely cases where I'm like "This could have been better." And they're still the gold standard, because so many other APIs it's just like "Here's a list of endpoints, and that's about all you're getting." And I'm like "That doesn't really tell me what the general process looks like at all.

**Aaron Schlesinger:** I think you can tell at what stage of the development process they wrote the docs, just based on reading them... Because you know, when you see incomplete stuff, I would guess they were trying to rush it out the door to meet a deadline. And they may understand everything in their head - they being the development team, or the PMs, or whoever... But sometimes it's hard to get such a complex topic down to size into that paragraph, or whatever it may be... And I would go with "Write the docs first", and that just feels like it takes a lot longer, so I think that may be why you see some of those docs that are just "What does this mean?" That's everyone's reaction to them.

**Jon Calhoun:** I guess the companies also make the mistake of -- like, they make the API or something like that purely for the publicity, or just to claim they have one... And you can kind of tell whether it's a first-class citizen and all the things they offer, versus "Oh, it's here, but we don't really care about it."

**Aaron Schlesinger:** \[00:35:57.11\] Yeah, I think that's a good skill for engineers to have too, to know "Is this a real thing that's gonna last?" or like you said, "Is this just off to the side and they're gonna ditch it the minute they can?"

**Ben Johnson:** I think it requires empathy too, just to put yourself in someone else's shoes that doesn't understand this stuff. I think it's a good exercise.

**Break:** \[00:36:13.07\]

**Jon Calhoun:** Somebody in the chat is asking about mistakes in testing; specifically, theirs was using time.Sleep in tests, so they said "Thanks for the clock package, Ben."

**Ben Johnson:** You're welcome.

**Jon Calhoun:** Do you have any other examples of times that you've made mistakes with tests, or what you've learned from them?

**Ben Johnson:** I can start with table tests, I used to do those a lot... And I hate them now. I find they are way more complex than they should be, especially if you do a sub-test now; I think that clears up a lot of the needs of table tests. Table tests could just be a function, and just do a bunch of them. So that's my rant on table tests.

**Jon Calhoun:** I will have to see what you mean, I think... Because I've definitely seen table tests where just having a couple types and that's all that's in the table is very hard, especially because once you set a type up, you almost need to dynamically get something from it for what you expect in the result, and that makes that type of table test tricky, I guess. Does that make sense?

**Ben Johnson:** No, but...

**Jon Calhoun:** \[laughs\] Let's say I'm testing a database implementation, or some sort of store implementation. If I create a user, a part of my verification that it worked might be to check that the ID is set to something, and then we update that later, and make sure some other fields are checked... But I don't know what the user's ID is going to be early on. I kind of almost need to be like "I need results from some steps to move on to the next steps and figure out what makes sense." And sometimes that's hard with a table test. I still feel like it's a terrible example...

**Ben Johnson:** I mean, sometimes for very simple pieces of code I'll use table tests. I could see using a table test if you have multiple implementations... But I would say those are probably the two use cases where I'd use it.

**Jon Calhoun:** Are you writing more unit tests, or are you writing more integration, or what would you say the classification is there?

**Ben Johnson:** Yeah, it's a good question. I definitely write a lot of unit tests... I try not to write tests for things that are too simple, I guess... But I guess it's so much easier to iterate when you have something very low-level. But yeah, integration tests are definitely important, so I'd say -- that's a good question; I have to think about it. I would say I have transitioned more to integration... If you can test a bunch of things at once... I guess it depends on the complexity of your app, too. I don't have a great answer for you, honestly. It really depends. Just that more tests are good.

**Jon Calhoun:** \[00:39:36.16\] I had asked because a mistake I've made is when you're writing unit tests for a relatively small piece of code, that's when I feel like table tests are very easy, because it's just like an input/output is all you need... And when you write a bunch of table tests, it feels like you're being really productive, but you really might not be. Because you're writing code, you feel like you're doing something productive, but you might not actually be testing things that are that important. If you have a package that splits strings on spaces, or something, do you really need 50 different test cases, when a couple might give you enough confidence just to move on and do other work?

**Ben Johnson:** Yeah.

**Jon Calhoun:** So I guess that's why I was wondering if it was a case where when you moved more to integration testing maybe you just didn't see it as much, or what it was...

**Ben Johnson:** Yeah, I think integration tests definitely give you a more real-world kind of test. Actually, one thing I will say I do a lot more recently is more kind of a quick-check test. There was testing/quick in the standard library. So - quick-check tests, you know what they are. It's just basically randomized testing. And there's really fancy quick-check stuff in other languages, but on Go you're basically just handing that off a rant, like a math rant to a test, and then generating tests from that. I find that to be one of the best ways, especially for libraries, where they're more self-contained, to actually go through all kinds of different iterations you wouldn't expect.

I had an implementation of immutable sets, immutable collections, where I'd actually make a -- I had the immutable collection, which... So immutable collections, if you don't know what they are, is whenever you make a change to the collection, you make a new copy of that collection. And it doesn't make a whole giant copy, it just gives you a new copy with a little bit of a change.

So I did the tests... It was a quick-check kind of test, where I would basically randomly insert/delete/change around the collection, but I'd also do it on another kind of just in-memory basic collection. It was very inefficient, the in-memory one, but I knew that it would work... Just like a Go map, basically. So then I could test that both implementations did the same thing, with random different inputs. I find that to be super-helpful.

**Kris Brandow:** I think it depends a lot on the type of thing you're building, what types of tests you wanna have as well. I noticed that when I'm building more library-like things, I tend to try and test more of the granular components, because I know I'm gonna mess around with them a lot, and change them a lot... But I think if you try and do that too much with an application or a binary, you get this kind of code paralysis point, where you wanna change a function, but now since that function is so well-tested, you've gotta change a whole bunch of unit tests because of that.

I think that's definitely one of my regrets, is the way I used to write unit tests, where I'd just try and test and cover everything, and it was always about implementation details, instead of testing the interface. And in my more recent libraries/applications I've built, I've started to move more toward black box testing, and really getting my interfaces correct, and making sure that I can test the different code paths throughout my application from the outside, and not needing to finagle with internal state, or anything like that.

**Aaron Schlesinger:** That one hits me really hard, because even these days I find myself writing unit tests, because I wanna be able to tell exactly what broke if the test suite fails... And then yeah, I end up adding something to a function or whatever, and then all the things broke. It's like eight tests that failed, or ten tests that failed underneath the function... When in reality, like you said, I could have just had a black box, if I needed to test the mock version of the function... Throw an interface in there and then just call it a day, and probably get the same amount of coverage off of that one test, instead of those eight.

**Jon Calhoun:** I think that's a mistake I've seen, where we see how other people are writing tests, or somebody will say "Oh, 80% unit tests is the way we go", and we'll think that's what we should be doing, when in reality it depends so much on what you're building that you can't just go based off what others are doing; you have to sort of decide what makes the most sense for your project... And one example I saw of this -- like I said, I was looking at the code for Pace when I was talking to Mat, and it's not maybe all of their tests, but a good chunk of their tests are integration tests that literally spin up a Firestore database, and they spin up some other stuff...

\[00:44:01.19\] I think it actually spins up their server, and then has a Go client that just makes web requests to it, and that's the whole test. So the entire thing is running, and they're doing all this stuff... And I think for some people that would seem a weird way to test it, but for them, it gives them the coverage and it allows them to pinpoint what's working and what's not... So I'm like, "If that's what works, don't let others dictate what you should be doing."

**Ben Johnson:** Yeah, one thing I'll say on the black box testing - I don't see a lot of developers doing this, but when you write tests, you can actually make your test package different than your regular package. You could just do \_test. I do that a lot, but I don't see a lot of other developers doing that... But that kind of forces you to actually stay black box testing.

**Jon Calhoun:** I've seen that, and then I've also seen occasionally the export -- they used to make an export file, and then they'll assign variables to unexported functions, so they can access them inside of the black box testing, almost defeating the purpose of it... And I'm like "I don't think you understood why we did this..." But it's okay, I guess they're trying... It's just funny, because I think when they do that, they're doing it because they see other people doing it, and they don't fully understand the reasoning behind it.

**Ben Johnson:** Yeah, it makes sense.

**Kris Brandow:** Yeah, I feel like the word "unit" and "unit test" has also been something that's kind of gotten a little bit out of control. I think about a month ago I was on this spree of watching YouTube videos of Kent Beck and other people that came up with test-driven development, and all these other ideas... And it's quite apparent that what they were thinking about when they talked about unit tests or test-driven development - it's not what I think a lot of us have come to associate with those terms... And I think that leads to confusion. For me, it's definitely one of those "How did we get here?" moments. Are we doing these things just because everybody else was doing them, not because they're things that actually make sense for us to do. I think it's real tough to get away from that herd mentality of using technologies or using test methods just because everybody else is using them.

**Jon Calhoun:** Yeah, I think that's a hard one... I see so many people that just assume you need to learn programming and do test-driven development because it's a hot term... And I don't know, for me that was a mistake, when I tried to just do purely test-driven development. It just never worked for me. So I don't know if it's just me, or what - it's just I could never write tests first for everything before I wrote code. I'd sometimes have to get a basic implementation, then I'd go write some tests that I wanted, and some of those would fail then... But I kind of needed a basic thing to wrap my head around before I could write tests.

**Aaron Schlesinger:** Just real quick, I'll share a dirty secret that I have... I've probably written the tests before I wrote the code like ten times in my career... It all seems to work out for me. But I think the reason I have to do it that way is I only know the user experience that I want. I don't know yet the ins and outs of exactly what the implementation needs to be. I keep user experience in mind while I build, but after I'm done building and I've found all those warts in the edge cases and everything, that's when I have to go back and really think about how I'm gonna test this thing.

**Kris Brandow:** Yeah, I feel like TDD is really a stand-in for a certain phase of the software engineering lifecycle. \[unintelligible 00:47:19.17\] when you're actually writing code and trying to figure out how you should build something. I think TDD works really well for some people, but I think there's a bunch of us that are just like "No, we really like to think about it in our head, and then just write the code that does that, and then confirm what we thought would work with tests afterward. I think that's a completely legitimate use case. Usually, you'd get yelled at if you try to push for that, but I think both ways can lead to really high-quality and good code. I think it's more about the process of actually thinking through what you're going to build before you build it, or as you're building it, more than the specific practice that you're doing.

**Aaron Schlesinger:** \[00:48:04.13\] I see that kind of a guideline - I see that elsewhere in development, too... One that popped in my mind is REST API, the concept of REST APIs. I know it's not actually -- for a long time it wasn't actually specified anywhere, but it seemed like there was this tribal knowledge, just like there is with testing, of what's "right" and what's "wrong"... And I definitely feel that sort of pressure in both scenarios, where it's like... For TDD, for example, "Oh, I'm a bad person for not writing tests before I write code." I think it's hard to really realize your style of writing code before you really start following the trends, or even evaluating the trends that you hear.

**Jon Calhoun:** Along with your style, I think everybody has a different level of tolerance for mistakes and bugs... Earlier we talked about deploying and needing no downtime deploy... But for a lot of us, that doesn't matter. I could take many of the apps I'm running and I could restart them at midnight, and even if it took ten minutes to restart, nobody would know except for me. And we have this idea that we have to do these things, like that there's one way to do it almost... So I guess what I'm saying is with testing I've found that there's a lot of stuff that I just don't bother testing, at least well, because I'm just not too worried about it breaking, and my tolerance for that is pretty high... But a lot of that is because I'm the person who fixes it if it's broken. It's just me working on it, and most of these are projects that just aren't that important. If they go down -- I've got a fly in my office, apparently... That's what I get for opening windows in the hot summer.

But you know, if you've got that tolerance, that's okay. But if you're running a bank, maybe that's not so much the case. I think people need to acknowledge that sometimes it's a mistake to assume you need to test everything thoroughly, and sometimes it's a mistake to over-test.

**Kris Brandow:** On that too, I think sometimes we don't really define what we mean when we throw out numbers. People say "Oh, we want four nines of uptime", or something like that. But that's just part of the metric. You need more qualifiers than that, and I think that also makes it really hard to determine when you're actually in compliance with something, or where you can make mistakes, or where you can ease off of these high restrictions. I think a lot of the time, no matter how many nines someone usually says -- or business people tend to think of it as like "Oh, 100%! It should always be up." And I think by not defining those tolerances more concretely, we do ourselves a disservice.

So instead of saying "Oh, we have to have four nines of uptime within this window of time, at the minimum", so you can actually properly track it and understand that that's what you're actually doing.

**Aaron Schlesinger:** I had seen some pushback on that concept of our nines. It was like, someone said you're allowed to be down for some number of seconds per year if you've got four nines of uptime, and that illustrated to me that with any complex system you can claim uptime pretty much whenever. You can say "Oh, the user service was up, even though the website was down." Or "The database was working, even though whatever else was down." So I'm really with you there, that you have to really qualify what you mean in detail by four nines of uptime, or whatever else it might be.

**Jon Calhoun:** I've seen some that claim they're up like you said, but for a subset of users it's down, and it's like "Well, what does that classify as?" Or for a subset of users they're just timing out, and it's like "Well, we're technically up; we're just taking forever to respond..." I'm like "Well, that's not useful." So there is a lot there that's tricky to figure out.

\[00:52:05.14\] And when you were saying the pushback, I think one of the ones that always was interesting to me is that if you're relying on other services that also have four nines of uptime, if you just have a couple of those and if any one of those goes down it counts as downtime for you, well then all of a sudden you pretty much have to be perfect. It's like, "Well, that's not possible."

**Ben Johnson:** Yeah, I think performance is a bigger metric that I don't think people focus on as much. It's just one of those grey ones, where it probably helps you a lot more than actual uptime. Being down for an hour a month or something like that - that's not great. But if your website takes two seconds to load, or your whatever app call, I feel like your users are just gonna get tired of that. That's their actual real experience for most of them.

**Jon Calhoun:** It's also probably important to pay attention to when these things happen. I imagine if you're Stripe and you're down during Black Friday, even if it's only for ten seconds, that ten seconds is way more important than being down for an hour on some day at 1 AM when very few people are shopping.

**Ben Johnson:** Yeah, I bank at Chase, and they're down all the time... I'm still with them. \[laughter\]

**Aaron Schlesinger:** You're captive audience for it... \[laughter\]

**Jon Calhoun:** They can claim 100% uptime as long as somebody is in the bank during business hours. Is that how it works?

**Ben Johnson:** Something like that.

**Kris Brandow:** I think that in certain parts of the industry we think that we need to have this ridiculous uptime, or these ridiculously high experience metrics for our customers, and then you go look at things that everybody in the world depends on, and it's like "Oh no, we're just gonna take our banking site offline for four hours while we do an upgrade." If something that important can go do that, do we all really need to be able to do seamless upgrades all the time? Is it really worth the trade-offs of having people wake up at weird hours of the night to accomplish some of these goals that we have? We don't really need it.

**Aaron Schlesinger:** But those technologies that enable it are certainly shiny...

**Kris Brandow:** Yes, they are...

**Aaron Schlesinger:** Kubernetes... That's all I had; they're shiny and they get a lot of attention, and folks pick them up.

**Jon Calhoun:** It's because it's kind of boring to talk about SQL at this point... And even writing about it, despite the fact that you can help people, it's hard to justify writing, because you're like "There's a million articles out there that already teach these things." At the same time, we've got people who look at an article and they're like "Oh, that was published a year ago. It's no longer good." And it's like "That's not how all technology works..."

**Kris Brandow:** I've definitely noticed that with myself, where I look for books or something and I'm like "Oh, this book was published four years ago. It can't have any good information in it." It's like "No, no... Actually, knowledge does not change that fast for everything." It's just for some specific things... Kubernetes, where it changes very rapidly and old information can be not as good.

**Aaron Schlesinger:** I just stepped into the JavaScript world two weeks ago, and man - if we thought it was fast-moving here... I feel like I have to know the JavaScript calendar before I can figure out what framework to use.

**Jon Calhoun:** One of the things that's interesting to me is when I look at a Go post, usually all you need is the minimum version of Go, because that's when the feature is introduced. But with JavaScript, you almost need an exact range of like -- you've gotta be between 16.12 and 16.16, otherwise this doesn't work.

**Ben Johnson:** I wrote a React Native app two years, and I can't even get it to run. I can't get it to light up, I can't do anything anymore. It's gone.

**Jon Calhoun:** That's a hard thing to explain though... Because I think people associate dates so much with that, which - I write on a blog enough that I see that, where they're like "You should put dates", and I'm like "What I really should do is go back and write what version of Go I used for this, and which ones it's good for", because that's really all you care about. But sadly, that's a lot of work.

**Ben Johnson:** \[00:56:07.16\] One other topic I'd be curious to hear other people's opinions on - I've been debating about this... So I have a new database project I'm working on, and I'm debating about open contributions on open source projects. One other database project, like SQLite \[Sequel Light\], for example or SQLite \[SQ Light\]... I think it's actually SQLite \[SQL Ite\], as I learned from a previous Changelog podcast... They actually don't allow people to contribute code. You can file issues, you can talk to them, they have a community, but they don't actually take contributions, in part because it's a lot of overhead and just maintaining other people's code, which may be coded differently than yours, and you start mixing styles in your codebase... So I'm debating whether I open up contributions or not. I'm curious other people's thoughts on that.

**Jon Calhoun:** I will definitely say that one of the biggest mistakes I made in the first popular open source project I had was that I just accepted anything and everything, without fully thinking it through. And even if something has tests, that doesn't necessarily mean you should accept it. So I definitely see the restrictive side of it.

I think if it were me, I'd probably lean towards the - it's okay to tell people to follow your styleguide, it's okay to maybe say "I'll accept this, but I only wanna include these things, because that's all I'm comfortable maintaining..." Like, to basically restrict what you're willing to accept. But I would probably still accept code if somebody was willing to jump through those hoops, for a lack of a better way to put it. But I completely disagree with -- if somebody has the idea that you should accept any PR, and "I'm gonna submit these things, and you should take my feedback", I think that's kind of a bonkers viewpoint.

**Kris Brandow:** I definitely agree with that as well. There's a dance you have to do, or I guess a dance you probably should, around which contributions you accept, and the level of effort people will put in... Because there's lots of times where people just do a drive-by PR, where it's like "Hey, I have this problem, and I fixed it so it worked for me, so here's a PR", and it's like "Well, no. There needs to be equal effort on both sides if we're gonna actually accept something."

But I really think having other contributors can be useful, especially for people that are really invested in the project and want to help you maintain it and want to help you develop it. So I think if you do eventually (or ever) want to have help building the project, I think it can be good to have contributions... But I think there probably should be a bar, especially if it's anything complex, like what you're talking about, before you can actually get your code in... Show that you actually understand how things are working, and actually want to be a part of the contributor list, and just someone that's just like "Yeah, well there was this tiny bug that I fixed... And I don't care about your styleguides, I don't care about actually understanding anything at a deep level."

But I also understand the cost of having to sit down and analyze other people's code to see if it does fit, to see if it has fixed everything that they're purporting it to fix, and it doesn't break other things... So yeah, I think it's probably a case-by-case basis.

**Aaron Schlesinger:** I've seen some repos that just set an expectation upfront that they'll code, but they might close PRs without acknowledging it, or they might take forever, and then ask for fixes a month later on a PR... And just kind of set the stage that you can try, but it's not guaranteed that you'll get on their review right away.

**Jon Calhoun:** \[00:59:32.25\] Generally speaking, I would say that I think as contributors, people should try to reach out before they write code. Kris, when you mentioned the drive-by PRs, I think part of that is junior developer -- maybe not junior, but people who don't really know any better, who are just like "I'm just trying to help." Because I know when I was really early in my career I had a library that did that, and I submitted a PR, and they basically said "We're not gonna take this for these reasons." And they were really nice about it, but I just didn't really get it at the time... But now I completely understand that it probably wasn't gonna help them in the long run. It would have just caused more issues. So I definitely think there's a lot to balance there.

And I do agree with what you were saying, Aaron, that reading that code is definitely hard, even though -- like, doesn't GitHub have a feature now that you can allow the person you're submitting a PR to to modify it?

**Ben Johnson:** Yeah, you can do that.

**Jon Calhoun:** I was gonna say, even that would help, but you still have to read through the code and understand it, and I think that's a balance of -- you almost have to communicate that if it's easier for me just to implement the fix myself, that's what I'm probably gonna do... Versus reading and understanding your code, and trying to help fix it to the point that it needs to be. But I think that's hard, because there are also open source projects where -- there's one in Go, I forget what it was; it was like an HTTP framework, that essentially people claim that they just took submissions, and they copied the code and submitted it and didn't give anybody credit for it, and people got upset with that... And I get why they got upset, but I don't know how you balance that, I guess is the best way to put it.

**Kris Brandow:** Yeah. There were a number of times when I was working on the Go driver, where someone would be like "I want this feature" and they'd submit the code, and be like "Oh, actually there's this way we can add this interface over here, put in this extra flexibility that allows you to do what you wanna do, and also a whole bunch of other people to do what they wanna do, so we're gonna do that instead." That's definitely a good way to go about those types of things, but that also, once again, takes a lot of time and energy and effort... And especially when something is a side project, I think it becomes difficult to weigh those costs well.

**Jon Calhoun:** So let me ask you this, Ben - are you planning on getting a community of active developers around the project?

**Ben Johnson:** Using it, or contributing to it?

**Jon Calhoun:** Contributing, I guess.

**Ben Johnson:** Not necessarily. I guess my experience with writing Bolt was that there were a lot of contributions that were usually small fixes; there weren't a lot of complex contributions. So it was almost kind of a trade-off. And even if you'd get a complex contribution, you've gotta wrap your head around how they implemented it, and there's some of those where, looking back, I probably would have done it a little differently, to keep the same code style, and whatnot.

So yeah, I mean, as far as contributions, I'm still on the fence about it. I'm just kind of leaning towards closed contributions, but open issues.

**Jon Calhoun:** I guess the way I'd kind of view it is if you're building something like Go, where you want more than just your core team, you want other people actively involved in the project and continuously writing code for it, I think the upfront effort of reading their code, understanding their code, teaching them styleguides and that sort of stuff makes sense... But if it's a project where that's not going to be the case, it's gonna be one or two contributions and that's about it, then I think you're completely justified in saying "Just give me some issues and PRs and I'll prioritize and fix them myself."

**Ben Johnson:** Yeah. I'm just curious how that lands in the community, as far as closed contributions. I haven't seen any other Go projects do that so far.

**Aaron Schlesinger:** There was one, it was an implementation of WebPack. It did the same thing as WebPack, bundling up JavaScript... I wish I could remember what it is. I can try and dig it up later. Anyway, at the bottom of that readme it said "This is alpha software. I'm working on it, but I don't plan to take any contributions."

**Jon Calhoun:** That's probably a challenge with GitHub in general, is that in some ways you wanna share code, and in other ways -- like what people view as open source is kind of different, and it can't be the same thing to everybody if they all have different expectations. I think we even saw this in the Go community recently, with them changing language in the internal stuff, and people flipping out... And it's like, "If you aren't involved in the project, I don't really see (at least me) how your opinion is relevant."

**Aaron Schlesinger:** \[01:04:03.05\] Yeah, I think there's nice ways to say that you're not interested in other people to contribute, but you are interested in people to use it. It's just a matter of...

**Ben Johnson:** Finesse.

**Aaron Schlesinger:** Yeah, that's the right word. \[laughter\]

**Jon Calhoun:** It's especially hard too, because I think people view open source as "Just submit code", and in every successful open source project I've seen that's not the way it actually works. You don't just submit code. You talk about an issue first. And then eventually, once you've sort of talked about how you're gonna implement it, you can do it... But it's very rare that just submitting code is a good way to go about it.

Alright, so we're a little bit late, and I forgot to do the Unpopular Opinion segment. I don't know if any of you guys have prepared for this, but usually we'll ask our guests for an unpopular opinion...

**Jingle:** \[01:05:00.03\] to \[01:05:15.14\]

**Jon Calhoun:** So does anybody have one they'd like to share?

**Ben Johnson:** The closed contribution one...

**Jon Calhoun:** I think for any maintainer it's not that unpopular...

**Ben Johnson:** That's fair, yeah. That's fair.

**Jon Calhoun:** ...but for anybody who's looking at open source, it might be.

**Ben Johnson:** Yeah. I would say -- I don't know. I feel like most new technologies are just not necessary, I guess. That would be my unpopular opinion. Docker, honestly, or Kubernetes, and a lot of those - I feel like you can run a stack... Not the same stack, but you can run basically what we used to run back in the '90s or early 2000's, where it's just like "Here's a web server running." You can run a business off of that and it probably would be fine. I mean, obviously, back up your data, but... That'd be my unpopular opinion.

**Kris Brandow:** I think for me an unpopular opinion I have is... I guess once your organization, or I guess the engineers in the organization reach a certain level, that you shouldn't really just take software from other companies. I think gRPC is a big one for me, where it's just like once you have a group of people that understands how to build things with TCP and HTTP, you could probably just build it yourself. And you should do that, because your organization's needs are gonna be very different than what Google needed for when they built gRPC.

So I fall closer to that -- what used to be called "Not invented here" syndrome, and I think that's probably where we should be edging back to, but I realize that that is wildly unpopular with a lot of people, and they usually say "Just use whatever is out there, because that's better."

**Aaron Schlesinger:** Well, I mentioned REST APIs earlier... I don't think they're good. That's my unpopular opinion. I think they cause more confusion than problems they solve. I do think URLs and HTTP methods are good, but the pattern of having specific rules for specific types of requests, and we also mentioned putting things in the right place in URL paths - it's all well and good, but documentation can solve those problems really well, and a good SDK on top of the REST API... Well, the API; maybe not REST API. \[laughs\] Documentation and good SDKs can really solve those problems a lot better than some magical document or tribal knowledge floating around somewhere.

**Jon Calhoun:** I would definitely agree that the best APIs are the ones that you don't know if they're running JSON -- by JSON I mean like a REST API, which is JSON responses... GraphQL, XML, or whatever - if their library is good enough that you don't need to concern yourself with that stuff, that's almost always the best API experience.

**Kris Brandow:** You mostly don't have an SDK for your language then...

**Jon Calhoun:** Well, then you're just not gonna have a good time. But the best ones have all those things down. \[laughter\]

**Aaron Schlesinger:** \[01:08:01.18\] I think even then, if it's all post and get with query strings and post bodies, every language can do that pretty easily... And I think the hardest part in most SDKs is figuring out auth anyways... So you're probably wrestling with that more than...

**Ben Johnson:** I agree with that, yeah.

**Kris Brandow:** I guess on that REST API thing, too - it feels like we lost the spirit of hypermedian REST, and just kind of started looking at these strict rules that everybody laid out... I think that's what causes a lot of the pain.

**Jon Calhoun:** I think what makes it hard for me is that I don't truly know exactly what a strict, by the definition, REST API is... But I think the idea of separating things by resources can be useful, but I definitely think there's times where it's not. One example is when I was building the backend for -- so I have Go courses, and every course has sections and sections, basically chapters, and chapters have individual sub-chapters or lessons or whatever you wanna call them.

If you're looking at them as strict resources, it's be like -- you know, a course would just return the course, and then you have to call an API end point to get all the sections, and another one to get all the lessons... And separating resources that way didn't make sense from a REST API standpoint... But at the end of the day, what really made more sense is four end points that just return the data I need for different pages... And to me, that made more sense, because it's what I needed. But I could see if you get caught up in this, you have to follow REST, do exactly what it says; that would be kind of rough.

**Kris Brandow:** We do that a lot in our industry, whether it's Agile, or TDD, or whatever it is... There's really good ethos, that's just like "Hey, we're just gonna help you make something", and then people just put a bunch of rules around it, and then if you don't follow those rules, it's like "You're doing it bad!"

**Jon Calhoun:** I feel like a lot of that stems from this desire to make things generic enough that it can work for anything... And that's usually not useful. I think we do that with even like databases, where the interface we interact with is generic enough that it works for everything. At the end of the day you're like "Why are these queries so slow?" It's like, "Well, it's because of the way you wrote this." It's not possible to actually realize that you need to do a bunch of joins and do them properly.

**Kris Brandow:** Yeah, I think -- to go back to something Ben said earlier about learning the underlying technologies... I think sometimes we try to create all of these interfaces and these nice facades that really mix a bunch of layers together and create these very complex things we have to deal with, when it'd be much simpler if we just properly layered everything and just had very simple layers that we interacted with.

**Jon Calhoun:** Alright. Thank you, Kris, Aaron, Ben, for joining me today. This has been a good episode of Go Time. If anybody else has comments or anything like that, feel free to reach out in the GoTimeFM Slack.

**Ben Johnson:** Thanks for having us.

**Kris Brandow:** Thanks for having me.

**Aaron Schlesinger:** Thanks a lot.
