**Jerod Santo:** Oh yes, it's time once again, friends - it's time for JS Party. I'm Jerod, I'm your friend, and I'm joined by some of my friends. Nick Nisi joins us today. What's up, Nick?

**Nick Nisi:** Hoy-hoy!

**Jerod Santo:** And Amal Hussein is back. What's up, Amal?

**Amal Hussein:** Hey, everyone!

**Jerod Santo:** And we are also joined by a special guest, Yoni Goldberg, the curator, creator and maintainer of the Node Best Practices repo on GitHub. Yoni, thanks for coming on JS Party.

**Yoni Goldberg:** Thanks for inviting me. So happy to be here!

**Jerod Santo:** Yes, we are happy to have you, and we are happy to learn and discuss from you -- you have this really cool set of Node best practices, which... A lot of these repos on GitHub start off cool, and then they just kind of fall into disrepair or non-maintenance, and one thing that's impressed me about this repo is that you've kept it up to date and active over time... So give us the lowdown on this - where it came from, why you started it, and what's going on with this project.

**Yoni Goldberg:** Sure. So it all goes back to when I was a .NET developer, 15 years ago - Microsoft had a team that was called the Patterns and Practices team. They were kind of inspiring everyone how to write code, and their entire .NET community followed their advice... And I kind of admired them. I wanted to be part of the Patterns and Practices folks. This didn't happen, but once I switched to Node.js land, there was almost no practices and understanding how you build an application... Unlike Java, Ruby, who have a very strong opinion on the application structure. So this was my chance to build a Patterns and Practices of Node.js. I've put a lot of effort into it, and to an extent it worked.

**Jerod Santo:** Yeah, it's interesting - when you have a brand new ecosystem spring out of nowhere and go into such a place of use... It became from a very small start, just exploding, and used in so many different ways, and enterprises, and hobbies, that there's opportunity in them hills. It's like "Okay, I can be the best practices guy if I just go ahead and put the effort in." Did you come up with the best practices? Did you find them from other people? Where does the actual content come from? Our of your brain?

**Yoni Goldberg:** \[04:03\] Partially. It was a mix between things that are common knowledge in other platforms, and you just import them into Node.js land. Other stuff needs some adaptation into the Node.js world, because Node has some special characteristics and behavior. So some of this stuff needed to be adjusted... And there was also quite a bit opinionated decisions to make, like "What is the right architecture for Node.js? Is it one from the Java world or from the Ruby ecosystem?" So it was a mix of different types of contents and decisions to make... I guess we'll speak about this very soon.

**Amal Hussein:** Yeah, I have to say, that makes sense to me - ultimately, there's a general set of security best practices. I think of that list - WASP? I can't even pronounce it... What's that community that sends out the top ten threats every year?

**Nick Nisi:** OWASP?

**Amal Hussein:** Yes. So there's generally best practices within security, but I think for me what I'd love to hear from you on is there are things that are unique to server-side JavaScript being a novel thing, and then also just the youngness of this ecosystem, as well as a lot of the cultural baggage that I think JavaScript developers have, around "Move fast and break things."

I think JavaScript security is a unique challenge, because I think it's the hardest group of nerds to hurt... Because ultimately, it's also the biggest community, period... And then I think the server-side shift - it was very fast and furious. So I think there's this whole swathe of -- and for me, Node is very much like a LegoLand community; you have to build your own modules, and you create your own storyboard... But there are so many challenges with Node, because it's very easy to shoot yourself in the foot. There aren't strong conventions there, and that's how you see things like LoopBack, tools like Happy.js - they have come in to fill that need, the conventions gap... So what have been some challenges for you there?

**Yoni Goldberg:** I totally agree, mostly about it being LegoLand, where everyone has to craft and reinvent sometimes the wheel. I think that in terms of security there are two things that make Node.js security more challenging than other platforms. One, as you said, is the maturity. There are not yet enough set of tools to address all the concerns... For example, if you want to limit your process permissions, it's not very easy with Node. By the way, this is one of the selling points of Deno, the so-called Node replacement; we are more secured, and I guess there is a reason why Ryan Dahl, the creator of Deno, chose security as one of his differentiators.

The second point is the single thread thing. With Node.js at least there is one thread that serves users, and when you have one thread, it's much easier to attack your code. Because if this thread is gone, at least a big part of your service is gone. So this is what makes security in Node.js -- security is always challenging, but in Node.js it's even a bit more.

**Jerod Santo:** So the plan for this episode is we're gonna try to treat this in three segments/sections. There's lots of best practices, there's lots of areas... And full disclosure, Yoni's favorite area is testing. In fact, when I said "Hey, come talk about Node Best Practices with us", he was like "Are you sure? Because I could talk about testing..." And I was like "No, I'm sure." But maybe we'll do testing again later, so we're not gonna deep-dive on testing. We have a lot of testing advocates on the panel... But we're gonna start off with writing our code, and then we're gonna talk about testing the code a little bit, and then also securing the code, lest we get too far ahead of ourselves in the securing section.

\[08:13\] Let's go through some of the best practices laid out in this guide for how you go about writing your code. As we've stated before, a lot of this stuff is really what I considered Wild West for a while, cowboy land of like "Well, how do you like to do it?" And over time, these things start to develop and you realize "This is worse, and this is better", and people come to these conventions. So when it comes to writing code, Yoni, what do you have in the best practices, or what has the community landed on in terms of project structure, error handling, style etc. for Node code?

**Yoni Goldberg:** Yeah, so I picked some of the more impactful and important practices for writing code... Although \[unintelligible 00:08:56.25\] the bullet that has the most traction and flammable discussion was about "Semicolons or not? Brackets?", but I think that we'd better focus here on things that are more painful and impactful.

**Jerod Santo:** We could spend an hour on tabs versus spaces if you'd prefer...

**Nick Nisi:** Tabs.

**Amal Hussein:** Yeah, definitely tabs. No question.

**Jerod Santo:** Spaces...

**Amal Hussein:** Oh, please... That's just like a waste of energy. Preserve your knuckles, people; you need to use them for a long time. Yoni, just to confirm - when you said the semicolon, are you talking about ASI (automatic semicolon insertion)? I'm just curious why semicolons play into the security story at all.

**Yoni Goldberg:** Yeah... So first, here I'm more referring not yet to the security part, rather to writing code in general.

**Jerod Santo:** Right. Just coding style.

**Yoni Goldberg:** Yeah.

**Amal Hussein:** Okay, coding style. Sorry. Clearly, I'm foaming at the mouth to talk about security.

**Jerod Santo:** She's already in segment three.

**Amal Hussein:** I am going to unfurl myself. Let's talk about writing.

**Jerod Santo:** To semicolon or not to semicolon is definitely a thing, right?

**Amal Hussein:** Oh, for sure. That's a thing, yeah. I was at npm and we use standard at npm, and it was the first time I've had to write code without semicolons, and it was a big adjustment... Especially because I'm very familiar with the traps of ASI (automatic semicolon insertion), so I was always just like "Am I gonna take down the registry? Am I gonna break all the builds?" \[laughs\]

**Jerod Santo:** Valid concerns.

**Amal Hussein:** Valid.

**Yoni Goldberg:** But it was really funny, because we could write highly opinionated and controversial stuff, like "Hey, you should all use Oracle databases" and people are like "Okay..." But if we write "You should use semicolon in the end", there's hundreds of comments, discussions. So we erred to run away from these flammable discussions anyways. So about writing code, I think that the first best practice that I picked is distinguishing between what are catastrophic errors versus non-catastrophic errors... Because in the single-threaded land making a decision when to make your thread crash is really impactful. There are other thousand users now on the line. If you make the thread crash, then the damage is huge.

So when I started with Node.js, the advice was "If you have an unfamiliar error, you should just let the thread crush. Why? It's just safer. You don't know what are the implications of the error if it's not familiar. Maybe you have some critical zombie component, like database connections that is hanging... So better be safe. Crash." Okay, this is what I started with... And then when I worked with customers, I always put that line, process.exit, if the error is unknown. Process.exit. And the funny part is that almost everyone, after some time, after weeks, someone commented out this line.

\[11:58\] I got back two months later, looked at the GitHub repository, someone deleted this line. And the reality just told us that in most of the time, the errors are not really catastrophic and affecting all the process, but killing a thread is really painful in production, so many times.

So after some time I adjusted my practice, so I just go with a balanced approach. If the error is originated from a specific request, like a specific HTTP request, it is probably not catastrophic. This is just something that happened during the request. Yes, it's a risk, but making the thread stay alive is an educated guess.

On the other hand, if the error happened during a critical phase, like the startup or something, regarding to some global object like the database error connection, it's probably a catastrophic crash. This happy medium, based on my experience, works better for most of my customers.

**Nick Nisi:** So is this information or guide specific to server apps, as opposed to command line apps, or something? Because there is a lot to pass when you exit with a specific error code, for example if you want to pipe that into another process or something, for command line apps. So is this more focused toward server-side apps?

**Yoni Goldberg:** Absolutely... Because a server-side thread probably at the moment is serving a thousand users. So only to get the exit code to now let down 1,000 users doesn't make sense. You can just properly log the error, get it to the ops systems, and stay alive.

**Amal Hussein:** Yeah, this is really fascinating, because I feel like I've had a very similar evolution, except for -- I think for me it ties very much into the logging story, because I'm really a data freak, so I love monitoring and logging and classifying my errors, and making sure that if there's something new that's out of bounds, I'm notified right away and we're able to hop on it. That's kind of like that triage process.

So I think for me it's very interesting -- I'm not sure I'm fully on board with "Universally just don't crash." Ultimately, if there's memory issues, or if there's flushes that you didn't do, the system is gonna crash anyway. It's gonna crash on its own, whether you explicitly exit or not. But I think for me, especially during development and testing and staging - I don't know, I would err on trying to collect as many of those data points and making sure that whatever logger you're using, that you have event listeners set up on process exit and crash, so that you can capture that stack and that error, so that you're able to send it somewhere, like put it on disk, and whatever... If you have a log rotate policy, or if you're using a Fluentd, or something like that, you're able to capture that data.

So where does that come into play for you? ...you know, the logging story, and the monitoring story, and the triaging; how does that fit into that flow? Because I think for me without a rubric there, it's very hard to implement any type of universal guideline. At least for me.

**Yoni Goldberg:** Yeah, I think that the ops involvement here - the monitoring, the logging, the other side of the error handling; the one that you take some proactive act - is a really important piece of the puzzle. This is, by the way, another reason why you should not always and blindly crush. Remember, there are people there watching the applications. They might make thoughtful decisions. If you decide to crash based on one error that you have, and then you make the thread crash all the time - congrats, you now have two problems. Very soon we will discuss - the next best practice is about metrics, and how to visualize your application health.

**Amal Hussein:** \[16:07\] Okay, so it ties in over there.

**Jerod Santo:** I think it makes sense to think of those as distinct, and it's like your development practices are allowing for your ops practices to get what they need. And that may still be you; that may still be the same person. But if it's not, it scales well. So one of those things, Yoni, as we go down the list here - you have extend a built-in Error object. Do you wanna tell us more about that?

**Yoni Goldberg:** Sure. And I guess it's complementary to the first one; we're building the story here... \[laughter\] The idea is that anytime you throw an error, you should throw only in your object that inherits from the base JavaScript error, and not anything else. There are two groups that I believe are doing it wrong. The first one - you know, in JavaScript you can throw anything. It's JavaScript; you can throw an integer, you can throw a boolean, I guess you can throw an emoji of a unicorn...

**Amal Hussein:** You can throw a party, which is what we do here every Thursday...

**Jerod Santo:** That's how we handle it.

**Amal Hussein:** One PM Eastern... JavaScript party.

**Jerod Santo:** Yeah. Some people think it's an error, but we don't think so. \[laughter\]

**Yoni Goldberg:** At least not a code one.

**Amal Hussein:** It's a custom error.

**Jerod Santo:** That's right. It's our error, okay?

**Yoni Goldberg:** Yeah... So I guess it's obvious to everyone why this is wrong. You lose the stack trace, it's obvious. But the other type of mistake is so popular... And going by this mistake is when you throw the error object of JavaScript; I see it in many places, and even the Node.js core was doing this for a while. So the idea is that you just include a very long message, and then once you need to handle the error \[unintelligible 00:17:40.04\] you have to compare with a very long string. And if someone just changed a word in this string, then a million applications in the world break, because they're relying on this specific string. Not to mention that many people -- it was a funny thing to observe... Many people install a localized version of Node.js. So the error messages change per language. They are localized.

**Jerod Santo:** Wow.

**Yoni Goldberg:** Yeah... At some point the Node.js core realized it; maybe they already done it, I don't know... They switched to what I proposed. And not because of me, by the way... \[laughter\] The idea is that to include in every error an object, some identifier property; a name, a code, something that's a strongly identified error... And then it's very easy to reason about the error type and compare.

**Jerod Santo:** So if I were to reiterate and just make sure I'm following you - don't throw the STDERR, don't throw the non-custom error, but also don't customize the crap out of your errors. Have some classifiers for types of errors. You're suggesting some structure in your error messages, but not a hierarchy, or extreme unique errors for each circumstance. Is that what you're saying, or am I not following?

**Yoni Goldberg:** I believe that there are two valid practices here. One of them is just inherit from the base error object, and add at least one property that identifies \[unintelligible 00:19:03.12\] invalid input, payment failed, or whatever.

**Jerod Santo:** Right.

**Yoni Goldberg:** The second type of implementation, which is valid, is creating a different class per error type. Then you achieve the same goal. You can identify the error type quite easily. It's just more verbose and demands more work, but I guess valid, as well.

**Amal Hussein:** Yeah, it's just functional versus composition, right?

**Jerod Santo:** Right.

**Amal Hussein:** For me it's very clear when logging and trying to capture errors or any type of logs within your application. You really need to have a standard format, and I think that's what Yoni is alluding to... But also, for me there's a very clear, core set of things that I log for, like that unique event name, or in this case unique error name, that's like a string that's tied to some constant or enum in my system... As well as "What servers did this come from?"

\[20:10\] There's a set of core things you want in every error, and the way I handle for dynamic data - dynamic data being anything else that I wanna capture where the error happened, whether it's arguments, whether it's additional context or any other data that's contextual, beyond the stack trace, which is a standard item... I use a specific key, something like payload, or data, and I put everything in that object. So even the dynamic data has a standard format.

I one hundred percent relate to the example that you used around the string matching, and anybody changes that format, all of a sudden everything breaks. It's ridiculous, especially when splunking... People are splunking on these crazy string formats... I'm like "Jesus Chris, just use a data structure that makes sense", you know? So yeah, plus a million on that.

**Jerod Santo:** Alright, let's move on to the next one. We have "Layer your code with N tiers." That means you have to cry the whole time, or what does that mean? That's a terrible pun. So this has to do with the actual layering and styling of the architecture of the code, and you have best practices on this as well.

**Yoni Goldberg:** Yeah, this is about the project's structure, the project's architecture, or practically the folder structure in your application. These types of discussions are always opinionated, and when I started, I thought to myself "Do I want to get into this?" and I decided that yes, because there were no standards at all in Node.js land back then about "How do I build an application?" And obviously, I wouldn't invent anything new, but my debates were between choosing the heaviest architecture, Java-style, like hexagonal, clean onion... Those are architectures that have many, many moving parts, and a lot of interface, and it's really heavy stuff. I don't want to now elaborate a lot about an architecture like hexagonal.

The other option was Ruby-style architecture, like MVC, which was quite popular when Node.js started. I believed that Node needs something between the over-structured architectures of Java, to what I believe are the under-structured MVC. Something in the middle, some happy medium.

The reason, by the way, that I believe that MVC is under-structured and not powerful enough - I believe it was uncle Bob who said that MVC is a delivery pattern. It's not a way to architect your back-end. It says nothing about how you structure your business logic, your data access layer, your services facade, access to other services... All of this, by the way, in MVC falls under the letter M.

**Jerod Santo:** Model, yeah.

**Yoni Goldberg:** Yeah, everything is a model. MVC never meant to answer this question. N-tier is a great medium between having something -- make a great separation between the API, the entry point... Let me emphasize about what is N-tiers. N-tier architecture simply means that you have layers. In plan JavaScript, in Node.js, a layer is just a folder. And then as you request - think about some API request flying in - it just goes through, for example, three different layers. The first one is the entry point, like the API. So you have one folder with only API-related code. Only \[unintelligible 00:23:42.04\] related to receiving the request.

Then your second layer is the business logic, or the domain. This is where you apply custom data change, logic, orchestrating if you need to call other services... Everything that is - as the name says - the business logic of your application.

And then the third folder, the third tier is the data access. If you have an ORM, this is where it goes to. So you have a very simple and clean separation of concerns, but it's also very intuitive. This is also how the request is physically going - from API, to some logic, to a database. I chose this architecture as a good medium. What do you think about the reasons that led me to this proposal?

**Amal Hussein:** \[24:33\] I have thoughts on this, but I wanna hear from Nick and Jerod... I'm calling it MCD, for the record.

**Jerod Santo:** Hm...

**Amal Hussein:** Or I should say CMD... Controller Model Data Access... Or CMDA, how about that?

**Jerod Santo:** \[laughs\] It's a work in progress.

**Amal Hussein:** Yeah, you're getting an insight into my brain right now. So it's Controller Model Data Access Layer maybe...

**Jerod Santo:** That's CMDLA.

**Amal Hussein:** Yeah, CMDLA I wanted to say. CMDLA.

**Jerod Santo:** Nick, what do you think about it? You've got boots on the ground in big Node applications... Is this a pattern that you've seen? Do you like this idea of these tiers, versus MVC, or something even more strict and heavy?

**Nick Nisi:** Yeah, correct me if I'm wrong, Yony, but I feel like this is kind of the architecture pattern that a Nest.js application would use, if you're familiar with that. That's what I have a lot of experience with lately. Bringing everything up into controllers, then -- or basically the API endpoints, that then talk to services, that have all of the business logic, and then going into (in our case) a type ORM backend to access the data and manipulate that.

**Yoni Goldberg:** Absolutely, yeah. Years later, NestJS did a very similar thing. I think what Nest resembles more than anything else kind of N-tiers approach.

**Jerod Santo:** Interesting.

**Amal Hussein:** Yeah. I feel like Express also did this really well initially, many years ago. I just don't think they did as maybe -- I don't wanna say "as good of a job." That's not the right word. What was kind of not as defined was the separation of concerns between models and data access. So I don't think we ever really had a very good early pattern for that in the Node community. It was just like a bunch of conventions that were not similar across the board between teams.

**Jerod Santo:** And I come from a Ruby on Rails background back in the day, so I was thick into MVC... And I always thought it made a lot of sense, with the problems that Yoni stated, that most developers thought that those three words were the only place where you could put your code... So maybe it was for a lack of structure, which is why the M became -- like, "Everything's in the model. Everything's in the model." And then there was the backlash to that, which was the skinny models/fat controllers idiom. Or no, sorry; the controllers got too fat. Anyways, you were supposed to have skinny controllers -- I don't know, I can't remember; too long ago.

**Amal Hussein:** Yeah, skinny controllers, fat models.

**Jerod Santo:** Yeah. Because everything was shoved into the controllers, and it's like "Well, you should shove it into the models." Well, then we ended up with these really fat models... And I never at a personal level felt the pain, but I saw the pain in so many Rails projects, where it just became unwieldy, and I think it was because there were just not enough buckets laid out, even though \*spoiler alert\* you can create your own buckets. Like you said, this is not about that... But I haven't done N-tiers, so I'm very interested in checking out what Nest is up to.

Are there other projects, or open source things, or people using this tiered approach, where you could say "Here's a codebase. Check it out. Here's what it looks like"?

**Yoni Goldberg:** No.

**Jerod Santo:** No. \[laughs\]

**Yoni Goldberg:** And this is something that --

**Nick Nisi:** Dang it...!

**Yoni Goldberg:** Yeah, this is the sincere answer... And we've been asked so many times to provide an example application, and I just didn't have the time. I definitely plan to.

**Amal Hussein:** Yeah, maybe one of our listeners can help contribute to that.

**Jerod Santo:** That would be really powerful.

**Amal Hussein:** Is there like an open issue that we can link in the show notes? Or should we create one so people can chime in? I'm just curious, where are you tracking that backlog work?

**Yoni Goldberg:** The backlog work - you mean of the repository, right?

**Amal Hussein:** Yes. Well, with these feature requests, to kind of like provide an example...

**Jerod Santo:** \[28:21\] Right. So like the Node Best Practices repo would be cool if it linked out to examples of this in practice... So maybe creating that example would be the first step. Maybe in the GitHub issues for that repo, or if you have a separate way where the community says -- I'm sure there's debates on which best practices to add, or remove, or change... So maybe a place where you could go and say "Here are things that need to be done to improve this set of best practices."

**Yoni Goldberg:** Yeah. So first, we do manage all the backlog and issues in GitHub, and there was a handful of discussion about this. We actually have some hidden examples there. It never matured enough that we felt confident enough to share it... But if any of the wide audience wants to get a quick look into an example that is not finalized, feel free to approach on GitHub and I'll be glad to share with you the link.

**Amal Hussein:** That's awesome. Thanks, Yoni. So just one last question before we wrap this topic... I think what Jerod said earlier about people feeling constrained by these letters, these MVC letters, which were maybe not so fully baked ideas...

**Jerod Santo:** ...are part of the story.

**Amal Hussein:** Yeah, part of the story was a suggestion, first try. So I'm just curious -- a lot of our listeners work on frontend applications, as well as backend... But for folks that are working on progressively thicker clients - is there an N-tiers mirror model for browser code that's written in JavaScript or TypeScript?

**Yoni Goldberg:** Well, I guess you can structure your -- it makes sense for everything. I guess you can structure your frontend calls with N-tiers, because also in frontends there are multiple big concerns, which are good candidates for partitioning the frontend. But as we all saw the movement in the frontend world, the state thing gets most of the attention

**Jerod Santo:** Right.

**Yoni Goldberg:** Almost all the frameworks are all about "How do I just manage the interaction between the state and my UI?" and this is why it probably won't get any much popularity if you plan on suggesting that to the frontend world.

**Amal Hussein:** Yeah. I mean, I might be able to actually take a stab on this. I'm working on a big proposal for UI re-architecture at work, and so I don't know... Maybe there's something that can come out from there. But I think that the frontend community is very much subject to the Pareto principle, 80/20. Oh, that's so funny - it's actually in your notes, too. 80% I think of frontend apps - their biggest pain points are state management.

I think that the remaining 20% still have state management problems, but in addition to other things. So I think for me it's that 20% or 15% of applications at massive scale that I would be interested in codifying, so that's a really good takeaway from this conversation.

**Break:** \[31:20\]

**Jerod Santo:** So we touched on logging in the first segment... We are going to talk more about it now, because you have more things to say... Logging, metrics - open it up, Yoni, for conversation. What are the best practices here?

**Yoni Goldberg:** Yeah, so it's not coincidentally that many of the best practices are focused on ops, on operations, on production. I really believe that what I call production-oriented development is something that should be embraced more by development teams. And one of the things that I think most projects are not doing enough is emitting metrics. Metrics are meaningful, measurable pieces of information that the applications share outside, usually with the ops, production, monitoring guys. These allow to monitor and measure and alert when certain meaningful events happen.

For example, it might be the amount of errors - if we know that there is an increase in the error rate in the last 20 minutes, something is probably wrong. It might be the event loop delay in the last one hour, it might be also a completely custom business metric, like a payment fail.

Instead of doing also this, developers mostly rely on logging... Which is important, very important, but logging is not good enough for this type of thing, because first, there's a big bulk of text. So if I'm an ops guy looking at the application and looking at the logs, it's very hard for me to extract what is important. What many are doing is just trying to scrape some text and extract events based on this... But then if a developer changes just one word, it all breaks. And not only that - usually, log lines are not measurable. It's not numbers. It's also not documented. Who documents log statements? It doesn't make sense.

Metrics are the solution to this. A few, 10, maybe 30 specific events that are documented by design, whatever framework you're going to use - it's very clear to your ops what your application is going to emit. So it's kind of an interface between the dev and the ops. Practically, it's very easy to do it. As a developer, you just throw a plain JSON with an identifier... Usually, it's a counter or a specific numerical value. It has a name, sometimes it has labels... There are many supportive frameworks for this, like DataDog or Prometheus if you are into the Kubernetes era, or CloudWatch if AWS is your thing... It's really easy, it's really powerful for the ops, and yet not enough are doing this, so I think it's an opportunity for many projects to embrace metrics.

**Nick Nisi:** How do you decide what specifically you want to have metrics around? Is there guidelines that you follow for that?

**Yoni Goldberg:** Yes. I'm putting aside infrastructural metrics, because it's more about a development show. So the ops don't need us, the developers, to show infrastructure, like disk space, CPU; there are other tools for this. So in your code, the type of metrics that you want to show are of two types. One is your platform-specific metrics, because your ops -- I would say first, your metrics should reflect what is important to measure and alert on. Usually, it's platform-specific measures. If we are in Node.js, the ops guy don't know about the event loop, and how sensitive it is. So platform-specific in Node.js - it will probably be something like the event loop, the open file descriptors... Usually, also the HTTP request behavior, or the length of an HTTP request, the amount of HTTP requests... The amount of errors - very important. This is one category.

The second one is business metrics, or product metrics. Stuff like payment failed; really important stuff. Payment failed - wow, we really want to measure this? If there is an increase in payment failure, then obviously someone has to go online and watch.

**Amal Hussein:** \[36:30\] I'm so glad we're talking about this, because for me -- first of all, logging and monitoring of any kind has a cost. And I've seen a lot of developers fall into a trap where they over-log, and then once their application scales, it's like "What's going on? Why are my server builds so high?" and/or "Why are things slow?"

So a) understanding that monitoring and logging have a cost, and then making sure that whatever tools you're using to do logging and monitoring meet high-performance benchmarks. So I wouldn't be using \[unintelligible 00:37:08.01\] exist. So ultimately, it's one of those things where you really -- the maintenance part of this as a developer, I can tell you the way I've handled this... I typically have an abstraction around my logger.

**Jerod Santo:** Totally.

**Amal Hussein:** I've created my logging interface in my language, my class, my code, my set of functions, my module, and whatever tool I'm using is abstracted away in there. And what that gives me is a lot of flexibility to move with the best tools as they become available, and as benchmarks improve. There's no loyalty here. The only loyalty is speed when it comes to monitoring performance. \[laughs\] So there's that, although Pino has set a really high bar, and I think Matteo is only going to be continuing to innovate. Matteo Collina, who we should have on the show sometime, by the way... He's gonna be on our show pretty soon, The Web Platform Podcast - but Matteo has this unique advantage where he's a maintainer of a lot of popular Node libraries, like Fastify and Pino, but he's also on the Node Technical Steering Committee, so he has this unique advantage where he is able to leverage his understanding of the internal workings of Node to do performance optimizations. I think that's super-cool.

But anyways, getting back to the decision-making around performance as a cost - you also have to understand that what you're monitoring and what you're logging also fall into two different categories. Like you said, there's the business intelligence type stuff, like new user, transaction happened, and then there's metrics around health and performance, which is like "How long are your requests taking?" etc.

So I think for me, the management of those two, and then deciding on what to log, and how often to log, and at what verbosity, and what your debug path looks like in production...? Those are really big decisions, and I still haven't found a way to codify and organize it so that I can have a very seamless interaction or seamless set of communication with ops, that's actually doing this monitoring and setting these benchmarks, and setting the bounds. Do you have any kind of feedback on this? Who's done this well? Are there tools that you can use? I'm thinking of like infrastructure as code. There's no infrastructure as code equivalent to fixing this problem and organizing and codifying it and making it easy to communicate. The only thing I've found that has worked for me in the past is to, like I say, create my own abstractions, create my own modules that at least limit the points of change. But other than that, I don't know.

**Jerod Santo:** What's fallen down with that? I do that as well, and I find that it's a really good pattern, and it just works. Have you found limitations with that, or you just don't wanna do it every time, or...?

**Amal Hussein:** \[40:01\] No, no. I just think that Yoni brought up a really good point about your ops team -- you need to be in communicado with your ops team on this stuff... So ultimately, what's that process? The only thing I can think of is like a manual human process...

**Jerod Santo:** Yeah.

**Amal Hussein:** ...and I just wasn't sure if there was a programmatic way to do that in a consistent way, that's all. I'm trying to over-optimize; this is what I'm doing here.

**Jerod Santo:** \[laughs\] Well, Nick's probably written a robot to talk to his ops teams. Haven't you automated that away, Nick? You probably don't have to talk to anybody anymore. You just tell your robots to.

**Nick Nisi:** I wish...

**Jerod Santo:** \[laughs\] Sorry, Yoni. You were about to say something before I picked on Nick again.

**Yoni Goldberg:** Ha-ha! No, to Amal's point - Amal, you just kind of packed a few great and very useful best practices. First - yeah, always create a wrapper around your logger and anything that is external. And also, separate the verbosity of your log entries. Do infra-level logs on major events, like start of \[unintelligible 00:41:04.00\] request, moving to another layer... And anytime you write these huge messages with custom variables - yeah, keep it verbose. I even agree about Matteo Collina, which has a genuine skill for taking things and making them somehow so much faster. Amazing.

Now to kind of combine metrics and logging - we'll solve the answer with different questions, but many times what I hear from developers is "Okay, I understand why metrics answer a different question. It's not about investigating a specific flow, it's about getting a sense of the overall system health now." But I don't want to present now a new infrastructure, a new transport layer. Anyway, I'm doing my alerting on CloudWatch, or ELK... I have logging. So - great, it's a good point; you can use logging for metrics. My advice then would be create a dedicated method for metrics. Like you have logger.log, logger.info, have logger.metric. And there, have a very specific variable - metric name, metric value. And next time a developer comes to change something, he'll probably be cautious about changing this line, the metric, because it knows that this specific log usage is a direct contract with the ops. So it's a kind of good balance between using our convenient tools, the logging, but making them a bit more ops-oriented, shall I call it. Makes sense?

**Amal Hussein:** Yeah, that's a really, really good idea. I love that. I think that actually gets me one step further than my process right now, so that's great... And thank you for highlighting that I call that best practices. I pride myself on best practices usage. In fact, if I could have my middle name be Amal "Best Practices" Hussein, I would legally make that change.

Just one last point, to kind of further drive this automation home - as you can tell, I'm an optimization nut... You can actually use ASTs or something like that to either have something as part of your pull request check... So anytime somebody adds something new or removes something that's logger.metric, you can have a Slack channel notification, you can have a backlog ticket that's put for the ops team. You can put that into somebody's queue for review. What you're doing is kind of taking away some of that gatekeeping around process change, and kind of flipping the switch into just having a monitoring process for process change; that way, if you need to swoop in, you can. But if you don't need to - full steam ahead.

Personally, I'm embracing that model. I just realized I -- I'm in a principal software engineer role right now, and I wanna enable developers to work quickly, but also with convention and standards. So I'm using that kind of methodology to monitor, but not get in people's way, and only get in people's way when I need to, if that makes sense.

**Nick Nisi:** \[44:02\] I love that. That's the robot right there that's talking to ops for you.

**Jerod Santo:** There it is.

**Amal Hussein:** Yeah, totally. There you go. Thank you so much, we've fixed this problem, ladies and gentlemen.

**Jerod Santo:** We've fixed the bug.

**Amal Hussein:** You're welcome.

**Jerod Santo:** \[laughs\] Anything else on writing code, best practices? We have a lot to say about security, so we're gonna skip right to that, unless we have any more on this topic. Of course there's more to say, but for this particular podcast...

**Amal Hussein:** I just had questions on STDOUT, STDERR, versus -- there's one more, I forget...

**Jerod Santo:** STDOUT, STDERR and STDIN, but that's the other direction...

**Amal Hussein:** In, yeah. In is different. Yeah, thank you. Okay. I don't know; I guess any light to shed there, really briefly, Yoni...

**Yoni Goldberg:** Yes, so you're referring to the best practice that is called "Log to stdout".

**Jerod Santo:** Right.

**Yoni Goldberg:** I guess it's kind of common wisdom for many developers... The idea that anytime you log, your medium is not a file or a database, it's the stdout, the standard output, or error; I don't differentiate now between the two. It's the standard output of the process, because then at production, at deployment time, there is someone - maybe you, maybe someone else; we always plan in advance that it will be someone else - who could bridge this stream into his convenient log aggregator system; maybe it's ELK, maybe it's CloudWatch... We don't want to make this code decision. However, the most popular logger for Node.js for years - at least until recently - Winston, in almost all of the examples they were showing how you log to a file. And to make it more tangible, if you log to a file in Kubernetes, it's so hard to extract all the files from all the pods and unify them. However, if you do it to stdout, it's just happening. It's another point where developers don't think in an ops way soon enough.

**Amal Hussein:** Yeah. Well, but there is a nuanced difference between stdout and stderr, and it has to do with (if I remember) when your application is crashing, and/or blocking threads... Maybe you can shed some light there briefly. It's a very important -- it's more an advanced topic, but I think it's an important nugget for people to digest.

**Yoni Goldberg:** Yeah, I believe this distinguishment was made mostly for CLI applications. In CLI applications you need two feeds; one is what the user - the user is the one who \[unintelligible 00:46:37.25\] probably the administrator or a power user...

**Jerod Santo:** Right.

**Yoni Goldberg:** ...what he sees on the screen... And on the other end, what the program prints when it exits, or for the agnostics. There was kind of a separation. However, in backend application - this is the context I used here - this distinguishment is not very useful... So this is why I didn't differentiate. If you want to go by the book, stderr is the target for...

**Jerod Santo:** Yeah, well said. A lot of times services will wrap those two up and there's no differentiation in where those actual entries go, like if you're sending them over to a papertrail, or something like that... It definitely makes sense on the command line though, as you have certain things that you want the person to see, regardless of something going wrong... Like, they asked you for an answer and you give them an answer, and then perhaps they ask you for an answer and it's an invalid question, and you log that to STDERR, versus STDOUT.

**Break:** \[47:41\]

**Jerod Santo:** Okay, let's turn our focus over to security, because there's so much to say here... And this is a place where many of us know a thing or two, but not everything. And even if we think that we have a good grasp, there's so many ways you can shoot yourself in the foot and accidentally write insecure code, or deploy things in an insecure way... And surely, there's lots of best practices around that. You have a whole section in the repo on security best practices, so let's pick a few and talk through them, Yoni. What are some globalized best -- like, everyone should know about these, don't do this/do this kind of security practices?

**Yoni Goldberg:** Yeah. Well, I tried to pick some interesting security practices that kind of reflect on the complexity of configuring our application security. The first one is that you should hopefully inspect for outdated packages. But the important question is how soon should you update your packages? Because one common sense believes that "Yeah, we should always update as fast as possible. We want to get the latest and greatest, as soon as they become available..." But what we have seen in the industry in the past two years, at least, is that most of the security breaches, the hilarious npm security breaches were discovered by the community in -- I tried to calculate this; it was around maybe 30 days. So if someone waits, before updating, 30 or 40 days, you're greatly decreasing the chances of being affected by some new security breach in npm. I'm not sure if you're familiar with the infamous EventStream incident...

**Jerod Santo:** Yes, we are...

**Yoni Goldberg:** Maybe a quick recap on this?

**Jerod Santo:** ...but our audience may not be. Yeah, for sure. We did have a conversation - there was a show about this back in December of 2019, when that happened, Nick, if you recall. I think it was you, I and Feross that talked about EventStream. We even had Dominic on, maybe it was on the Changelog. Anyways, we've covered this topic, but it's been a while, and even I don't remember the details, so please do review it for everybody.

**Yoni Goldberg:** Yeah, so shortly - there is a very popular type of attacks which are called the supply chain attack. The idea is don't try to intrude into someone's production. That's hard and complex. Instead, just socially become a friend of a maintainer, become one of the maintainers of a package, and then you get infinite power. So EventStream is one of those very popular packages - I believe it was downloaded 8 million times a week, or a month; I can't remember - but it's not really maintained anymore. There's not much to add to it; it just works. And at some point, some new maintainer kind of shows intent to start contributing, and got the trust of the core maintainer... And then for a start he does a lot of useful stuff, and at some point injected a new dependency into the code. Nobody noticed, and this dependency was a very malicious one. I believe it tried to steal some Bitcoin files from the local developers...

\[52:09\] The important point here is that it affected -- I believe eight million people downloaded this package until it was discovered around 30 days later. So those who waited, those who are patient, benefit. The bottom line here is keep your code updated, but maybe some kind of grace period before you do that.

**Amal Hussein:** I'm so glad that you're bringing this up, because I literally -- we should put this tweet in the show notes, Jerod...

**Jerod Santo:** Okay.

**Amal Hussein:** ...one of my really good friends, who was the former CTO of npm while I was there, literally were making fun of Dependabot yesterday. We were saying "If you're not updating your repo six times a day via Dependabot, can you really call yourself a developer?"

**Jerod Santo:** \[laughs\]

**Amal Hussein:** And while I was at npm, one of the things I worked on was updating the Unpublish package feature... So we actually gave a little more autonomy to users; we can link to the blog post on that as well. So now you can unpublish packages with a little bit more of a grace period and more leeway, if you meet certain criteria. So we just kind of took a first step at widening that.

It was a lot of headache to get that feature out. It's a very sensitive topic. Once you publish something, in theory, the npm registry is this immutable thing. I consider it to be immutable. In fact, Isaac, who was the creator of \[unintelligible 00:53:35.21\] he said that he regrets adding the Unpublish feature into the API, because it takes away from the immutability... And while I was at npm, there was tons of security packages that got removed from the registry; if it's something malicious, we remove it, and it's gone, regardless of who was downloading it or not.

So I am very much in the favor of being one major release behind for everything. I just think living on the edge - there's just too much churn, the bigger your engineering team. The more you have at stake -- so for me, that's the rule that I use. I like being one major version behind. That gives enough -- especially with the npm ecosystem, there's enough dependencies on the dependencies; your dependencies have dependencies, and peer dependencies... There's just too much interlocking, and the more time you wait, the more everything is gonna just work together, in a seamless way... Versus upgrading your WebPack, and then all of a sudden, Babel still hasn't caught up, or they're still fixing bugs... Why take that cost?

I think our obsession with new is something that we need to acknowledge as a problem and actively curb in our community. It's just unhealthy... And it promotes unsafe code practices as well, like Yoni just highlighted with \[unintelligible 00:55:07.03\]

**Jerod Santo:** Yeah. So stay a version behind, I think that's a pretty good practice.

**Amal Hussein:** Major version.

**Jerod Santo:** A major version. I would also submit "Limit your dependencies", right?

**Amal Hussein:** Boom.

**Jerod Santo:** I mean, limit and scrutinize your dependencies is an actual practical takeaway here... Because the problem with this kind of an exploit - we're talking about different kinds of exploits; this supply chain exploit is - you are not in that supply chain. As a developer, you're just sitting over there, minding your own business. You're dependent upon the supply chain. What can I actually do as a person typing into my terminal and my editor to guard myself against this problem? And really, the couple of things you can do is stay a version behind - or a major version if you're very paranoid - at least a patch or a minor version - and limit and scrutinize your dependency... Because while you didn't write that code, you don't maintain that code, you don't know where that code came from, the buck does stop with you. It's your code once you execute it and run it. So the only thing you can do is limit that attack surface and verify (try to) that you're using dependencies that are reliable, that are maintained, and be aware of what's going on around you... Which is difficult to pull off, but necessary in this ecosystem.

**Amal Hussein:** \[56:22\] Jerod, you're a man of my heart, really. Because I can share some insight on this... As someone who's been a lead engineer for a while, like when evaluating new tools and libraries, my personal rubric - which I should probably write a blog post on, because I think this is useful to more people - an element of my rubric involves looking at the dependency chain of the tool that I'm gonna install. For example, you look at something like a Lodash module that's just pure function, no dependency. That gets a high score from me; that's a plus.

If I look at a module that is not doing magic/rocket science, but it has 71 dependencies, I'm not into it. I would rather find a tool that's more static; even if it's not as well maintained, I will use that over just adding 71 new subdependencies into my project.

So ultimately, there is a process and there should be a rubric that you have based on your business needs and goals as a team or as an engineering org when adding new dependencies, and that rubric should include "Who else am I getting into bed with? Who else am I marrying when I npm-install save?" Because you are, just like Jerod said, responsible for maintaining that code, whether you like it or not. And Node modules are absolutely the heaviest objects in the universe, so...

**Jerod Santo:** Right. Let me do a shameless - not self-promotion, but self-show promotion. There's an excellent JS Party episode - Nick, you were on it - episode 56, called "We're dependent. See?" It's Safia and Kball and Chris and Nick, and they discuss at length how they decide that rubric, their own personal rubrics; they go \[unintelligible 00:58:10.21\] when and how to select a third-party dependency. That episode was just filled with wisdom, so I'll submit that to the listeners to go and check that one out.

But then also - I feel like this kind of thing, this dependency selection process is something that needs to be blogged and referenced...

**Amal Hussein:** And codified.

**Jerod Santo:** Yeah. Because you do it enough over time and it almost becomes intuition. I can sense when this is a bad idea, but that's just because I've internalized my own rubric. I know what to look for, and Amal, you know what to look for. Over time, you develop this sense of what is a good or bad choice in that regard, but these things can be enumerated and explained and scored, and you could actually have very useful, transferable knowledge that way.

**Amal Hussein:** Yeah. Or hire Yoni, if you have the budget.

**Jerod Santo:** \[laughs\] There you go.

**Yoni Goldberg:** Thanks for promoting me, Amal. \[laughter\]

**Amal Hussein:** I hope one day to hire you, I'm not kidding. It's extremely valuable to get external feedback on penetration testing and security best practices. It doesn't matter how good of a team you are; you have bias. I have blind spots, we have blind spots collectively...

**Jerod Santo:** So that's supply chain problems. What about the problems that we introduce in our first-party code? Because we have a much more direct relationship with that, and there's things that you can do to avoid that kind of attack. There's SQL injection, there's cross-site scripting, there's all sorts of things that can happen right there in the code that you're typing out, Yoni... So what are your best practices around how to handle problematic input from your users that you weren't expecting coming into your Node app?

**Nick Nisi:** TypeScript...

**Jerod Santo:** \[59:55\] No TypeScript this episode.

**Yoni Goldberg:** Nick, did you just say TypeScript?

**Nick Nisi:** No, never. \[laughter\]

**Jerod Santo:** The ghost of Nick past...

**Yoni Goldberg:** Yeah... So I guess that malicious or challenging input is a big topic, but first - I do agree with you about TypeScript, but I would phrase it in a more generic way. This was very important advice in Node.js land three years ago; now it's almost common wisdom - you should have some mechanism of presenting the schema that you're expecting in the request... Whether it's a TypeScript or a JSON schema, or a class validator becomes now very popular... \[unintelligible 01:00:36.18\] something that should limit the attack surface and the -- you know, it's funny... I think that I tried many, many times - at least until a year or two ago - to do a very simple attack against a Node.js application. You know that there is some post route - just send a custom JSON, with other property. And a big portion of the application just crashed after this, because someone was doing that -- I expect some property dot other property, but it wasn't there, so there was an uncaught error. So yeah, validation is obviously one tier, and our linters that will catch (think like) SQL injections, or an \[unintelligible 01:01:18.19\]

One of the interesting stuff is \[unintelligible 01:01:22.18\] get dynamic input from the user. So it's not a structured request, with a specific JSON schema; it's kind of free-form content user \[unintelligible 01:01:34.03\] How do you treat that escaping of the string? Should it happen on the first tier before saving to the database, should it happen on the upstream, when we send back to the user? One of the things that we learned is that this type of escaping should happen on the upstream; in other words, when you return it back to the device user that is querying for the information. Because escaping is a platform-specific thing. You escape differently for browsers, you escape differently for mobile applications, for some platforms you don't know how to escape... So typically, you should save in the database the raw information - obviously, after you have ensured there's no SQL injection there; and if you used the right ORMs, or tools, wrappers, there shouldn't be an SQL injection. But generally speaking, the raw content should be stored in the database, and the sanitizing/escaping should happen as the content is served back to the user.

**Amal Hussein:** Yeah, that makes a ton of sense. I'm always amazed at how much bias I had, being a quality and performance and whatever -- I'm an obsessive/compulsive person... I'm amazed that there's just basic stuff that I consider just like "D'oh!" that not everybody does... And one of those things, for people who write a lot of backend services, is schema validation via a tool like the OpenAPI Spec, formally known as Swagger... Just how important it is to have that for your requests and responses, because if somebody is adding something that you didn't expect - you're able to catch that, log that, monitor that, and have it go through security review cycles. You can loop back -- it's a lifecycle event where having those things allows you to have that improved communication flow between DevOps and security and engineering... I'm just curious if you have any thoughts on that.

**Yoni Goldberg:** You mean thoughts on the overall process of proofing your security level, or more specific?

**Amal Hussein:** Well, leveraging tools like OpenAPI Spec as well, to ensure there isn't a drift on the contract between requests and responses.

**Yoni Goldberg:** \[01:04:05.02\] Yeah, so I'll start with the OpenAPI thing. I'm sure Nick will be pleasant and already aware that there is a great movement in the Node.js ecosystem toward more structured things like TypeScript, and with NestJS now it's much easier to introduce OpenAPI and get upfront validation of the OpenAPI Spec. Specifically, we will probably discuss it in the testing session, but there are also very neat testing tools that allow you to check upfront if during your test one of your requests violates the API spec (Swagger), then it detects it automatically. Even if your code didn't detect it and let it flow by, the test will discover it based on the network traffic.

I would also mention the move to GraphQL as a very popular transport... It's all going toward getting that structure that we need. I would even argue that attacking using some surprising input would become a bit more difficult for attackers now, due to all of this--

**Amal Hussein:** The hardening of schemas and built-in validation, yeah. I agree. I feel like for me, the industry here being library authors and ORM developers and/or the services world - we're heading into stronger defaults, better defaults out of the box. So give power users flexibility, but also give novices less of a chance to shoot themselves in the foot. So yeah, it seems like we're heading in the right direction.

**Jerod Santo:** I think another way that we could move there together, faster, better, stronger, is to collaborate more. One of the things that I see inside our ecosystem is this ethos of like the indie dev with 1,000 npm packages. Like, one person, many packages. And that's amazing, and those people are amazing. But what can be more secure and maintained and sustainable is many devs working together on less packages... Because now we're bringing our collective knowledge.

And even inside the security research field, there are verticals inside of information security. There's people with this particular niche expertise, and they can bring a different eye on a security question than somebody else; somebody who understand cryptography inside and out, versus somebody who understands databases inside and out, and all the ways that a database can be compromised.

So more people working together on less projects, which really comes into things like frameworks versus libraries - teaming up on a framework has a lot of advantages... And one of those advantages is all of us looking at one codebase, versus me looking at thousands of little codebases... So that's just an idea I'll throw out there.

**Amal Hussein:** It's such a good point. We should blog about that, or we should do a show about that, Jerod. Seriously, it's such a good show; maybe we can have a panel of framework authors, and talk about how the collective makes them better.

I think of Next as a really good example here, because I think they've done a lot to have those good defaults, so you don't have to worry about performance and all these other things... Because there's good rails for you, so you don't go off the rails, right?

**Jerod Santo:** Right.

**Amal Hussein:** Just really quickly, Yoni, I wanted to ask you, specifically for folks that are writing a lot of frontend code - what are some common things that you see as security faux-pas that start in the frontend and affect backends? Commonly, I'm just curious - whether it's escaping CSS, HTML, JavaScript... How can folks who are writing frontend code make less work for backend security?

**Yoni Goldberg:** \[01:08:16.16\] Make less work. Interesting.

**Amal Hussein:** Less work, yeah.

**Yoni Goldberg:** Yeah. Just before answering that, I want to relate to something very interesting that Jerod said. I think that Jerod's idea - and I'm getting back to your response, Amal, in a second... What you said I think is a really strategic point in Node.js now, and it can be generalized to everything, not only security. It used to be - and I say it many times - I'm now building this Lego puzzle from many pieces, and I'm overwhelmed by the amount of decisions and architectural stuff that I have to make decisions on. The quality of every decision is diminishing... But now that we're starting to see mature frameworks like NestJS, then not only security will become this pattern of many people looking at one codebase; it will be very beneficial not only related to security, but everything: performance...

**Jerod Santo:** Features...

**Yoni Goldberg:** ...structure... Yeah.

**Amal Hussein:** Chromium is a very good example of that. Chromium, formely Blink, formely WebKit, or whatever. I don't know, maybe not formely Blink, but formely WebKit. It's like more than a million person-hours of engineering time has collectively gone into making up that browser rendering engine.

Nobody's gonna write a new browser. Folks like Brave forked and added their flavor of features to that, but no one's gonna put in the work -- and Brave also, they're constantly pulling from master. They're keeping up with Chromium and they pay the price for that... But I'm just saying that that is a very good example of open source projects where lots and lots of people are working on one thing, and collectively are able to make it the best.

**Jerod Santo:** Mm-hm. So wrapping up the conversation of what frontenders can do - ultimately, I will say that your backend has to be secure; the frontend - you cannot trust. Somebody could throw away your frontend and send you whatever input they want via a proxy, via an HTTP request creator curl... But there are things that frontenders can do to help out, and one of those things I'll just throw out there is that they can validate inputs on their users' behalf in the frontend. That will not stop the malicious user, but it will stop what most of us hit most of the time, is users just using our product in ways that we did not expect, and creating malformed inputs and submitting them via forms, which can definitely accidentally either hack your system -- you're not gonna probably accidentally hack somebody, but you can definitely DDoS somebody by causing their backend to crash. Yoni, any other thoughts from you on things frontenders can do? Or Nick, as well. You do a lot of frontends and backends, so surely you've run into these issues where the frontenders can help out the Node side of the fence.

**Yoni Goldberg:** From my side, just to first reiterate what you've just said - there shouldn't be any trust between the backend and the frontend, in most of the time... So I don't see a practical way where the frontend can actually...

**Jerod Santo:** ...secure things.

**Yoni Goldberg:** ...help the backend maybe in realizing patterns. But there are two different teams, at least from a security perspective. One of the challenges - it's not the frontend to blame, but one of the movements that is triggering now more challenges to the backend is what I call the backendless pattern.

\[01:11:50.16\] We've seen a lot of demand now that the frontend will be the core thing, with most of the code, most of the innovation and changes happen, and the backend is kind of a much more generic thing, that rarely changes. You can see stuff like, for example, AWS AppSync, or GraphQL. GraphQL is kind of a thing "Hey, backend, give me a very, very flexible schema. I don't wanna ask anytime for a new API route", and my frontend can now get much more power. But then, on the backend you have to implement a much more generic and dangerous code.

Using graphs, for example, I could limit and say "Hey, you can only query for this entity, using these fields." Now with GraphQL, the user kind of can traverse and explore my database, or at least my data provider, in a very freeform style. Of course, we have to limit this, and there are tools, but this need to create a very generic layer for the frontend imposes many security challenges. If I should choose one thing to blame the frontend for, it would be this one.

**Amal Hussein:** Wait, what's the generic layer? Why does the generic layer cause this issue? ...if ultimately there's no trust to begin with. Why does it even -- ultimately, the backend is gonna always validate its inputs, and sanitize, and do whatever. There's no trust, so why would the frontend cause any more burden in this regard?

**Jerod Santo:** You're providing a larger surface area. You're requiring a larger surface area.

**Amal Hussein:** Oh, the surface area. I understand, okay. Okay, got it. Thank you.

**Yoni Goldberg:** Yeah. And in plain words, now if I have four database tables, and I used to know that if you approach this route, you just get data from this table, querying by two fields, now using a single endpoint (because GraphQL is a single endpoint), you can query something that I don't really predict from all of my tables, using some kind of relations. Of course, we have tools to limit this, and we absolutely need to limit this, but the entire idea of getting you so much flexibility is challenging.

**Jerod Santo:** It's a bigger challenge, absolutely. Well, one thing that was a challenge was fitting all of this amazing content into one episode of JS Party. You may be wondering "What about testing? You're not talking about testing." Well, we're punting on testing. We're gonna bring Yoni back here soon, and we will have a show on testing, because it is a huge topic. In fact, maybe even a mini-series will be coming your way.

Holler at us if you're interested in the topic of testing. Holler at us if you don't wanna hear about testing... Because you have to eat your veggies. But maybe we'll mix them in with some other sweets as well, I don't know.

This has been an awesome show. I learned a lot, and I hope y'all have, too. Yoni, thanks so much for creating this repo, for maintaining it... Of course, the links to Node Best Practices is in the show notes. Hop in there, git it a star, bookmark it so you can reference it... And hop into the issues and help out. Surely, best practices change, they evolve; this is one person's thoughts melded with many people, and his experiences... So as we get more people looking at it, more people contributing, we can really round it out and have a great reference for the entire community.

Thanks for joining me, guys. Any final thoughts from the panel?

**Amal Hussein:** Where can people find you on the interwebs, Yoni, and how can they connect with you and help you?

**Yoni Goldberg:** Yeah, so if it's related to the Node.js Best Practices repositories - and by the way, I also have a JavaScript testing best practices repo - then I'll really be glad if you approach me there, and help. There is a lot of learning while you write and think together about this stuff.

And in overall, Twitter, or the common social medias - you're welcome to approach. I'm a very nice guy, by the way. It was a pleasure...

Quick promotion - we are publishing Docker and Node.js Best Practices probably next week, so...

**Jerod Santo:** Cool!

**Yoni Goldberg:** ...yeah, I'll be glad if you pay a visit. And again, I hope to be here again. It was a real pleasure being here with you guys.

**Jerod Santo:** Awesome. Yeah, we appreciate it, Yoni. Amal, thanks for hanging; Nick, a pleasure as always. That's our show, we'll talk to you again next week.

**Outro:** \[01:16:11.19\]

**Jerod Santo:** We'll come back on testing code for its own episode, and we just continue on writing code and then go straight to securing code for segment three.

**Amal Hussein:** I like that idea better. I think securing code and writing code are a better pair.

**Jerod Santo:** Tandem...

**Amal Hussein:** Yeah. But I think testing code could be its own show, and it deserves to be its own show, do you know what I mean?

**Jerod Santo:** Totally.

**Amal Hussein:** So yeah, I think that's a good idea.

**Jerod Santo:** I mean, it could be its own series, because there's so much to talk about.

**Amal Hussein:** Oh, for sure. Yeah, like multi-part. We could do a series on testing.

**Jerod Santo:** Yeah. Like, the most boring month in JS Party history.

**Amal Hussein:** What are you talking about...!? \[laughter\] It's a vegetable. I am all about my vegetables, okay? I don't eat enough vegetables in real life, but I sure as hell eat a lot of intellectual vegetables.

**Jerod Santo:** You know you're on the JS Party podcast, right? You know, we play games, and we debate things, and we sing songs... \[laughs\]

**Amal Hussein:** I know, I know... But testing doesn't get enough love, and I'm a testing nerd, by the way; so - full disclosure, I'm a big testing nerd.

**Jerod Santo:** I'm pro testing, and I've tested for many years.

**Amal Hussein:** Yeah. No, pro testing is different than being a testing fanatic. \[laughs\]

**Jerod Santo:** Okay. I never said I was a testing fanatic, I was just telling you that I am pro testing.

**Amal Hussein:** Okay, okay.

**Jerod Santo:** But I'm also protesting too much testing talk. Ohh, see what I did there...?

**Amal Hussein:** Yeah... Well, you just have to be sneaky with it. Just like you have to hide vegetables...

**Jerod Santo:** That's right, you've gotta work it in. That's why I said a full series on testing - we'll lose most of our audience. But if we sneak it in every episode, then we're just giving them that they need, you know?

**Amal Hussein:** Right, right.

**Nick Nisi:** You've figured out my TypeScript model. \[laughter\]

**Amal Hussein:** Yeah, we're blending the broccoli into the chicken nuggets batter.

**Jerod Santo:** We've been onto you about TypeScript, Nick... You're not fooling anybody!
