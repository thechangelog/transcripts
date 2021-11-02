**Adam Stacoviak:** Quinn, let's begin at the beginning, man; I'm a fan of your company, I think what you've done is pretty awesome... I've been paying attention to you for a while now. I met Beyang a while back, at GopherCon, and was just really fascinated with this idea of code search... But let's begin with the big news you've got. You've got a series D funding that just took place, led by Andreessen Horowitz (a16z). 2.625 billion dollars valuation, raised 125 million dollars... That's gonna make you happy, right? You're on cloud nine right now, right?

**Quinn Slack:** Yeah. We love code search, we wanna get code search to every single developer, every single company. We started in 2013. A lot of people thought code search was weird back then. We had some really strong fans...

**Adam Stacoviak:** Still weird. But it's getting cooler. \[laughs\]

**Quinn Slack:** Yeah, yeah. Weird in a good way...

**Adam Stacoviak:** Yeah.

**Quinn Slack:** But we're all weird together, with almost a million users now... And it's just great to see way more people getting in code search, and people on the business side understanding the impact of that. So it's not just us devs talking about how much we love code search. We've definitely come a long way, but we've got a long way to go, because most devs still don't use code search, and most companies still don't have it.

**Adam Stacoviak:** Yeah, I think there's this demystification really, too. You think Cmd+F or Cmd+Shift+F in your ideal code editor is code search. Obviously, we can go into the details of that, but... I think even six years ago, when you began -- did I hear that right, six years ago?

**Quinn Slack:** Eight years ago at this point.

**Adam Stacoviak:** Eight years ago, okay. Sorry about that.

**Quinn Slack:** Time flies.

**Adam Stacoviak:** Time does fly. So even eight years ago - I think about that, and that's like roughly a quarter of GitHub's history. Or actually three quarters of GitHub's history... Because GitHub is around 12 years old, and I think as the idea of having multiple codebases, and the maturity of dev teams and whatnot - just the idea of repositories has exploded over the last eight years. So I'd even say that when you began, you began - I guess as any good idea might - a little premature to the market, right?

**Quinn Slack:** \[04:13\] Yeah.

**Adam Stacoviak:** So even this last eight years, you've really had to go uphill to express the importance of code search. And I think you might be at the perfect moment now, considering 1) the funding, so that's a great, resounding support of your idea, but then 2) I think your current tagline is pretty awesome... "Move fast, even in big codebases." That's gotta say most of that, because a lot of teams have big codebases, multiple repositories, a lot of dependencies in open source... And being able to grok a majority of that with Cmd+Shift+F just isn't possible without a lot of setup, really. Can you speak to that?

**Quinn Slack:** Yeah. Well, it's crazy to think of how quickly coding is moving. When we started in 2013, I am pretty sure that there's more code in the world written after 2013 than before 2013. I don't know what the cut-off is, but there's way more code than ever before.

**Adam Stacoviak:** Is that a stat? You know that for sure? Or is that a belief?

**Quinn Slack:** We would love to get that to be a complete stat; right now it's a belief. Maybe the cut-off is 2011, maybe it's 2015, who knows, but there's a lot more code being written all the time. And as you said, GitHub was started in 2008; now that feels like something -- you know, of course everyone uses a code host, but people didn't do that before GitHub, and these other practices like continuous integration, or testing, or continuous deployment. They seem obvious, but -- I mean, I remember the world back in the late '90s, when you would edit a file in your folder, you would FTP it up to your site in a CGI bin, and it would run... And it's not that long ago that coding practices were so different. So yeah, we think code search is gonna be one of these new things that every dev just uses, like version control, and like code review, and like code hosts. That's why we started Sourcegraph. But it's very humbling to just think of how fast things are moving in coding.

**Adam Stacoviak:** Yeah. Do you think that code search is an every developer problem though? Is there a point where there's diminishing returns? An individual who has maybe a small codebase; doesn't have a big codebase. Is there a threshold where it becomes far more useful? ...that's kind of what I mean.

**Quinn Slack:** Today, definitely. And I think you see this in every new software development practice; when it comes to continuous integration, it was the really big teams, with mission-critical products, that needed to move quickly, that would use continuous integration. But now, it's so good, and the friction is so low, that if you're just working on a tiny little project, you can drop a GitHub Action file in your repo and get continuous integration.

So yeah, it starts at the high end, but then the act of bringing it to every dev in every company, as we're doing now, is about making it so that it's easier to use it than to not use it.

And I would also say - when you're a dev, your job is complex and hard, in proportion to the amount of code that you have to deal with... And you probably are using so many open source libraries... And if you're not - well, you probably should be. And that's this whole, massive web of code that's out there that you should be tapping into, and code search will help you. Kind of in the same way that if you're a seven-year-old kid your life is probably not that complex, in many ways; you don't have a full-time knowledge worker job... But you probably use Google to find out music, and facts. For me, it was researching how to get my parents to get us a cat in our family.

**Adam Stacoviak:** Wow. So you used your coding skills to influence your parents to buy a cat? Is that right?

**Quinn Slack:** Well, that was me using search engines and the web.

**Adam Stacoviak:** Okay.

**Quinn Slack:** It's not like Google is only used by professional knowledge workers, at work. It's used for so many things, because it's so easy to use, and all this knowledge is at your fingertips. And with code search, we wanna make that the same way, so it's so easy for any dev, even if they're on a tiny little project.

\[08:01\] And one other thing about code search is once you've used it, you can't live without it. For me, I work on some random side projects; one of them is this simulation of the aviation industry. It's not like a flight simulator, which is probably a lot cooler... But yeah, you can make airlines, and fares, and discounts, and baggage fees, and run all that. Tiny, little random hack project. I use code search on it, even though it's just me, and I'm almost embarrassed to talk about it publicly, because it's such a nerdy project.

**Adam Stacoviak:** Well, I'd imagine code search is probably second-nature to you, so may have a bias... But that's cool. That's okay. It's still useful. It doesn't change its usefulness...

**Quinn Slack:** Yeah.

**Adam Stacoviak:** But let's speak to maybe a little bit of specifics with Sourcegraph... Because I think the one thing that may be a challenge - and you can speak to this - is getting it set up for you, and then others. Because it requires a little bit Docker knowledge, a little bit of maybe self-hosted knowledge... I think you have a cloud product. I'm not sure of all the details of how your products are shaking up, but there's a bit of a ceremony. There's a bit of a cadence to getting set up with even Sourcegraph, let alone anything else that might be Sourcegraph-like. Can you speak to that?

**Quinn Slack:** Yeah. We try to make it as easy as possible, so you can set up a Docker, just docker run and see it running locally... And we have a self-hosted offering, so you can run it completely on your own network; you don't need to send any code up. And we're coming out with a cloud product.

I know a lot of companies do it the other way - first they start out with a cloud product, and then they're like "We wanna go after these really big companies", and they come out with an enterprise offering. Maybe I could just talk through how we got to this point; all the stupid mistakes we made in hindsight at Sourcegraph.

**Adam Stacoviak:** Yes. Please.

**Quinn Slack:** For me, my personal story with coding starts when I was nine years old, learning to code; my parents had a marketing agency, they worked long hours... Great parents, but I had a lot of time on my own, and I would get on the computer and go on the internet. I taught myself to code, and I'd be in these chatrooms, and started fixing other companies' websites, building apps, building Perl scripts... And this was late '90s, when it was a more innocent time on the internet. And what I loved is that all of this knowledge about coding was out there. This was way before Stack Overflow, or GitHub... It was around the time that Sourceforge --

**Adam Stacoviak:** What year, roughly?

**Quinn Slack:** '97 to 2001. I could read the best code out there, on the internet, and that was amazing. And I love that, as a kid, I didn't know anyone else in real life who coded; I didn't go to college, I wasn't one of those kids that went to college really early... I was just at home, and no one knew that I was like ten years old and I felt like I could read, and learn from, and participate in coding. And it was so open. It's one of the most open things out there. And that's what got me into coding at first. I loved that ethos.

Fast-forward, I was working on patches to some bigger open source projects - Curl, and OpenSSL, NSS, GnuTLS, and things like that, these massive codebases... And again, as a self-taught programmer, I didn't have the instinct to go and tap people on the shoulder, or things like that. I'd set up these code search tools to try to understand these big codebases... And I kind of assumed that everyone would do that.

This was around 2009 to 2010. I would set up OpenGrok and I would just have my editor, Emacs, up on one screen; on the other screen - OpenGrok, and I would use it to browse through, understand, search the code to find usage examples, or "Hey, this new class was added. Let me look at the commit that added it and understand why that person did it that way. Let me see the changes over time of that." And I learned so much. I loved that anyone could just go and learn that.

\[11:50\] I think I probably thought that everyone used code search at the time. For my co-founder at Sourcegraph - similar story. He was at Google, where they famously have this awesome code search tool that every Google dev uses; it's called Code Search, naturally...

**Adam Stacoviak:** Good name.

**Quinn Slack:** Yeah. I mean, it says what it does on the tin. And Google devs loved this tool. They use it all the time, and a lot of Google devs, when they quit, it's the thing that they miss most. It's not the other perks of Google, the foosball, or whatever; it's this code search tool. And my co-founder, Beyang, he had seen that when he was working on a really big codebase at Google, and assumed that everyone used it.

But then we went to some big banks, we were working inside some big banks together, and - well, they didn't have code search. And if we wanted to find out how this API works, or if we wanted to change something and understand everything that could break, we had to call meetings. And these weren't Zoom meetings; these were flying people in around the country... It was really painful. And we just thought, like, this code search thing, it could have solved this problem or answered these questions for us in three minutes, instead of flying people in from all around the country. And that's kind of an extreme case, but... That's when we realized that not everyone had code search, and we were actually the few that had seen it at that time.

So we started Sourcegraph in 2013 to bring code search to every company and every dev, because we loved it... And one of the most magical things in the first couple weeks of building it - we were hacking on Sourcegraph, and I was writing some code to analyze Go code, and that would be used to help me find usage examples... And I was using Sourcegraph to build Sourcegraph; and Sourcegraph helped me discover that someone else had written this library that did so much of what I was gonna do in the next two weeks. So I just used that library instead. It was this guy, Roger Pepe in the U.K. So shout-out to Roger...

And just then, Sourcegraph saved me two weeks, and it meant that we didn't have to write a bunch of code. It meant that our product was better, and we could move more quickly... And after that first two-week period at Sourcegraph, I was like, "Oh, this is gonna be easy." You know, we already got to something that was working.

So that was 2013, and just to give people a timeline, it wasn't really until the end of 2019 that we really found that product that was working, and started to really grow. And we made a ton of mistakes in the meantime; should I just go through some of those mistakes we made?

**Adam Stacoviak:** I have a couple questions first. I definitely wanna talk about mistakes...

**Quinn Slack:** Yeah.

**Adam Stacoviak:** One, this repository that saved you some time - how was it available in your code search? Did you just have all of GitHub, or all of your dependencies? How did it become discoverable to you to be like, "Okay, let me search probably a function" or some sort of functionality you might write, and you discovered somebody else's project. How did it save you time?

**Quinn Slack:** We indexed a bunch of open source Go repositories - on GitHub, on (at the time) code.google.com...

**Adam Stacoviak:** When that was a thing, yeah.

**Quinn Slack:** Yeah. And this was one of those. I think this repo was actually on code.google.com. And then Sourcegraph just showed it when we were looking for usage example of this Go standard library function to parse the documentation of a Go package.

**Adam Stacoviak:** Is that a common practice then for Sourcegraph users today, to index large swathes of a particular language to discover accidentally? Is that like a common use case, or is that sort of like a one-off?

**Quinn Slack:** It's a really common use case. So the indexing is already taken care of, so you can just go to Sourcegraph and search for doc.new. That's what I typed in at the time. Or any other function name you're trying to use, or library that you're trying to use, and you're gonna see how other people are using it across the entire world of open source code, or in your company, across all of your company's private code.

**Adam Stacoviak:** Right. Because naming is a challenge for developers; obviously, it's one of the hardest problems we often face... Like, "What do I name this thing...?" But you may have a similar idea, like doc.new, as another developer... So if you can search for doc.new across a span of code that may be useful to you, a dependency, or something in open source, then maybe you find something that's similar to what you might write. You read a little bit of code, you discover it has similar features, or the same exact features maybe in this case... You're like, "Well, I'm gonna save myself two weeks and I'm just gonna use their project", temporarily, or long-term, as a dependency.

**Quinn Slack:** \[16:14\] Yeah. You'll probably learn something, even if it's not exactly what you need to do; even if you can't just copy and paste it, you'll definitely learn something.

**Adam Stacoviak:** That's what it's really about, too - finding code that's similar or useful within whatever your search parameters might be. Being able to find, discover and use that, cross-reference to other repositories, and being able to really kind of dig deeper into -- you know, it's kind of like finding the needle in the haystack, essentially. You've got the haystack of code, and the needle is what you really need to fine-tune and find that point of, to use the analogy well... And that's your ability to search across; that is your sort of lens to find the needles within the haystack. Is that kind of how you describe Sourcegraph and the usefulness?

**Quinn Slack:** Absolutely. And I think there's also the analogy at Google, where Google is kind of an extension of your brain now. You go there where you wanna find a turkey chili recipe, or how to get to the restaurant...

**Adam Stacoviak:** That's how I do it.

**Quinn Slack:** Yeah.

**Adam Stacoviak:** The other day we were making baked sweet potatoes. And I know how to do baked potatoes, night and day. It's too easy for me. And I figured sweat potatoes were pretty much the same, and they kind of were. And thankfully, Google pointed me to a recipe that said "Yeah, you're right. It's pretty much similar. Poke holes in it, put it in the oven...", whatever the process might be. At this point, it's done. 205 degrees, 210 degrees, pull it out, cut it up and eat it, kind of thing. Or let it rest, or whatever. So I did need my second brain, Google, to confirm my hypothesis, which was pretty much on point.

**Quinn Slack:** Maybe you would have found someone who's got a different recipe, and you would try it out. And maybe it would be bad.

**Adam Stacoviak:** And I tweaked it, yeah.

**Quinn Slack:** You get to try it out. For a lot of recipes -- like, I'll search for people that are talking about that recipe on Reddit, because people seem to be freer to just talk about things on Reddit. And with code, all the open source code that's out there - it provides this view into how thousands or hundreds of thousands of random devs thought about how to use some piece of code... And maybe they're completely wrong and crazy, but you'll probably learn something.

**Adam Stacoviak:** Well, let's go into some of those mistakes then, because I wanna talk a bit about how Sourcegraph works, and I think by doing that we'll discover iterations gone wrong, so to speak... Because I think at one point it was an extension in the browser - I could be wrong - where you can sort of like do something that you're doing here, where you find a function in a different repository, but not quite code search. It was sort of like function finding... I can't recall all the different iterations, but... Help me find the specifics and whatnot to the mistakes, and what got you to here, essentially, that we feel like this is the product to build upon.

**Quinn Slack:** Yeah. Well, where to begin with the mistakes...? The first is just "What do we call it?" We'd call it Code Search, Universal Code Search now. That seems really obvious in hindsight, but we didn't call it that... And this is on me. I'm the CEO and co-founder here at Sourcegraph... And we heard from a lot of people that code search is a feature, it's not a value; you need to talk about the value... And this is a kind of exaggerated case, but we should call it "the empowerment and enablement of enterprise productivity and value creation tool." Clearly, that is not going to make a developer want to set it up.

**Adam Stacoviak:** Right.

**Quinn Slack:** And I look back and I wanna smack myself in the head for thinking about calling it anything confusing. It's code search. And I see a lot of other dev tools companies that are starting, struggle with that. Do you talk about the value, as so many people say you should? Or do you talk about "What is it? What is the noun?" and be really concrete? And if you do the latter, then you open yourself up to other people thinking you're naive, you don't know how to build a business, you don't know how to sell. You're not gonna be able to get beyond just the people that already know it. And those are fair criticisms, and you should take it, but... We just found that it didn't work unless we called it Code Search, and that was one of the things that went into us really starting to take off in 2019, was just being really concrete about what Sourcegraph is... Not developer platform, not something else or other. Just code search.

**Break:** \[20:23\]

**Adam Stacoviak:** How early on in your lifespan of the business did you do sort of an introspective process to -- you know, I wanna call it branding, but less around the logo design, but more about who you are as a company? How soon from inception did it take you to sort of do an exercise like that? Have you ever done one?

**Quinn Slack:** We've done several things like that, and they were helpful, especially as they surface what kind of values we had as a team. I would say that it didn't really gel or stick fully until we had customers wanting to pull our product out of our hands, and they really demanded it. And that kind of stress that a company goes through - that is a test, and you see which of the values do you actually refer to? Which of them are helpful? Which of them are just a nice thought that you want to have? So I think it was good to think about those things, but just be prepared to regularly reevaluate them for what's actually in use.

So we have our values now, that are on our handbook, that's all public, and we are really explicit about - these values will change. Maybe they'll change in wording, maybe we'll realize that for this next phase of the company, we need to have a different value. And we don't want to just add a value to that list and say "Okay, everyone do that", because that's not how values work. We need to find the values that are driving really good behavior, and surface them, and then write them down. And write them down in a way that it's easy to refer back to them. And if a value is not being referred back to, it's probably worthless, and we delete that.

**Adam Stacoviak:** Interesting. How do you mean a customer is trying to pull the codebase out of your hands?

**Quinn Slack:** Oh, I just mean feeling immense demand from the market.

**Adam Stacoviak:** Okay, gotcha. I was like, does that mean to self-host? Is he reflecting on self-hosting, or is he reflecting on the idea of the cloud project? I wasn't sure if you're talking about cloud, or if it was like "They really wanted it", which is a good thing.

**Quinn Slack:** Yeah.

**Adam Stacoviak:** So I did a quick search to find your values... The first one is "Be customer-driven." Second one is "Work as a team." Third is "High agency", fourth is "High quality", fifth is "Be welcoming and inclusive", the next one is "Open and transparent", and the third one is "Continously grow."

So you went through an exercise to sort of discover these things? Did you lock yourself in a room for a couple days? What was the process to get here? Was this iterative over years, or was it something that you had brought, and Beyang had brought, and other team members had brought? How did it come together?

**Quinn Slack:** \[24:05\] We really evolved to this point. We're a global and all-remote company, so we didn't lock ourselves in a room. It was an async process, and it was asking the team for what kinds of behaviors do you think are really good, that you want an easy way to reinforce?

I think we started with three, and then we've added some more; we've also removed some since then... And you can actually look in the history of that page on our handbook, in the Git repository, and you can see all the changes that have been made since we've set that up.

**Adam Stacoviak:** Wow. Very cool. I love that. The reason why I asked that question around branding and sort of knowing some things about like how do you talk about who you are is because we had a similar conflict here at Changelog Media, because -- while we're a very small company in comparison... We're a global company, but we're -- how many are you now? 50, 75? Probably more than that...

**Quinn Slack:** We have 180 people.

**Adam Stacoviak:** 180. So I was half as much with my highest estimation... We have two as the primary owners of the business, and probably another 20 or 30 contributors across the board. So I'd say, if we had to reflect on company size, 25-30(ish), but we're not quite your size. Almost none of those are full-time employees; a lot of them work consistently, but they're not full-time employees... And that's just by nature of how we work, and how they desire to work, too. It's not because we're unwilling. It's just the nature of how things work. But for us to really understand who we were - this is six years back... We locked ourselves in a room, we did a branding exercise for two days... We didn't lock ourselves literally in the room for two days straight, but you know, we did two days of eight hours of just reflecting.

And what I've found was the most beneficial thing was less of what we came out with, but more what we discovered within, which was unifying ourselves. So you and Beyang, for example, or you and many of the team members who are stakeholders in the business, or whatever it might be - having a unified vision for what you're trying to achieve together. Because if you don't do that, you sort of assume. You assume Beyang knows what page you're on, he knows what page you're on, and vice-versa, and all this assumption happens, and meanwhile, you make a bunch of mistakes.

**Quinn Slack:** Yeah.

**Adam Stacoviak:** Or you assume a lot of different things... Is that at all true for you?

**Quinn Slack:** Yeah, absolutely. So a lot of the conflict or big decisions that people went different ways on - a lot of times you'll find a misalignment of values in there. Not in a bad way; I know people hear "misalignment of values", and some people might interpret that as "Oh, one person is good and one person is bad." That's not it, at all. And people in general wanna be working together, and getting those values aligned, finding the root of some disagreement or conflict that's bad for the business, what that disagreement is - I think values has been a really helpful way to do that.

**Adam Stacoviak:** Yeah. We all wanna go the right way... And what way is the right way? And if everybody has a different answer for what way the right way is... Because you're all trying to do good by probably a core tenet, which is "Create awesome things that are useful." Right?

**Quinn Slack:** Yeah.

**Adam Stacoviak:** That's probably the most core tent for every business - do things that matter, that are useful... That's sort of the barrier to entry, or the lowest bar in business. You have to be unified in what that goal is. One thing I like to lean on, this question I like to lean on is "What are we optimizing for as a business?" You might go to contributor number one, or manager number two, or team leader number three... What are we optimizing for? And kind of get that same answer from each of them. From that, sort of identify what the assumptions might be, and "This is what we're really going for. Do you believe in that mission?" "Yeah, I believe in that mission." Well, now you're unified. Now it's spoken. And in your case of a handbook, it's written down; you can reflect on it, you can change it, you can edit it, you can contribute to it etc.

**Quinn Slack:** Yeah. And there's probably a lot of different perfectly right answers to what are you optimizing for, but you all have to have the same answer.

**Adam Stacoviak:** \[28:02\] Yeah, eventually... And that's the fun part and the hard part, is coming to that same answer... Because I think once you're unified, which I think you can speak to, because as I said before in the top of the call, I am a fan; I'm a big fan of Sourcegraph, I've known Beyang longer than I've known you, but I'm also a fan of you as well... And I'm a fan of what you're doing. It was not always easy to understand what you were trying to do over the years... And I think you do that with a brain discovery, or a product discovery, or how do we deploy this discovery, how do we -- we understand the value of code search, we understand the usefulness of code search to every developer, but how do we put it in the hands of developers so it's actionable? I think that's the hard part there... Which might lead to another mistake/failure at the product level, which is you went cloud, not self-host first. So you began with cloud, and you didn't do self-host... Talk about how you (I suppose) engineered the application to be as a service, not as a service, as a cloud service... How did you begin? How did you know it was wrong? How do you know it's right now?

**Quinn Slack:** Yeah. A lot of mistakes and a lot of things in the product went into that. First, when you hear code search, there are some people who even in 2013, when we started the company, knew exactly what that meant and wanted that. And those were the ex-Googlers, the ex-Facebookers, because they also had code search... It was the other people like me, that had worked on these big open source projects that had code search tools set up... And those people generally think in terms of "I wanna search across all my company's code", and they work at generally bigger companies. That's one population that we could go after.

The other population that we could go after is just the mass of devs, getting individual devs as users, and letting them search open source code, and then they auth their company's code on... And we, not being enterprise salespeople at the time, we thought "Well, we know individual devs. Let's go after them." And it turns out that it was very difficult and expensive to make code search across all the world's open source code.

And also, you don't really go through your day thinking "Oh, I need code search for open source code", especially if you don't know anyone else who does it, and you've never had it before. You don't really know what you're missing. Maybe it's a good thing, but we needed a way to break that cycle.

And from a business point of view, when we were a tiny company building code search, a lot of devs would say "Oh, this is cool. Let me try my company's code", and they'd get to that GitHub OAuth screen that asks them to authorize sending their company's code over to Sourcegraph. We were a tiny company... Not that we did anything wrong, but they had no reason to trust us at the time. And code is a very sensitive asset. And everything just got blocked there. No one wanted to author code.

There were a few, very small companies that wanted to do it. And the reality is they didn't have that much code; with like seven developers, there just wasn't enough code so that people were like, "Wow, onboarding is really hard." Or "I can't understand this code", or "I'm doing a big refactor and I need to figure out where it's gonna be affected." They just didn't need code search in the same way that a company like Uber or Twitter needed code search.

**Adam Stacoviak:** So just by nature, it was enterprise. Just by nature of how it's useful, it seemed to be enterprise-first, at least.

**Quinn Slack:** Yeah.

**Adam Stacoviak:** And you didn't discover that until later.

**Quinn Slack:** We didn't discover that until we tried doing it the other way and it failed. We had some individual users, but no real companies were getting on... And there's other aspects of founder psychology that hurt us here. The feedback we were getting was "I don't feel comfortable clicking that green button to auth our code." And I think we wanted to be very introspective, and reflective, and honest with ourselves, and it seems very convenient as founders who loved our product to say "Yeah, it's just a security problem. Let's just overcome that." But we wanted to be more introspective, and think like "Well, maybe if the product was more valuable, then they would click that green button. Because there are other companies that they do trust with their code. They might have their code on GitHub, for example, and that means GitHub is more valuable, so how do we make our product more valuable?"

\[32:14\] I didn't wanna be the headstrong founder to just say -- I know it sounds silly in hindsight, but I didn't wanna just say "Yeah, it's a security objection. Let's address that." Well, we tried to make the product more and more valuable, but we were just going after a segment that wasn't where that intense need was, and the product wasn't good enough, and it was still too high-friction. So finally, we said "Okay, it must be a security objection. Let's just try that." We didn't really have any alternatives. And we made it so that you could run Sourcegraph self-hosted, and self-service. You didn't even need to talk to us to get it set up. It was just the docker run command, like we have now...

**Adam Stacoviak:** Yeah.

**Quinn Slack:** ...and that's when things really began to take off. We got some really big customers really quickly. Uber was one of our first big customers. And we'd made the product good enough so that every dev at Uber was using Sourcegraph. And those four to five thousand engineers using Sourcegraph in their company, where if you joined Uber, in your engineer onboarding packet it would say "Go to Sourcegraph" - that was more usage than we'd ever seen, and that was exactly the right way that people get brought into loving code search, when it's the only way that they can hope to understand this massive codebase they've onboarded into, with thousands of repositories, languages, so much history, so many dependencies... And we hit the sweet spot for our product, solving an intense need, and also having a way to get distribution... Because any dev could bring Sourcegraph in; it's self-hosted, so you didn't need permission even as a dev, because it didn't send any code out. And that was a huge unlock for us at Sourcegraph.

**Adam Stacoviak:** Yeah, step one is adoption, right? So at this time, let's maybe open the licensing and open source aspects of these things too, because I would imagine -- I don't know the exact history of your license changes, but I think at this time it was quite permissive open source, is that right? You could just use it... And now it's a little less permissive. I recall Fair Source licensing being a part of this... Help me understand the liberal nature, the permissive nature of being able to docker-install and use Sourcegraph... And then maybe how that couples into "Well, how do you build a business around that?" If I can just go and install Sourcegraph on my own, how do I then eventually pay Sourcegraph, if I'm Uber? How does that transaction occur in an open source, distributed codebase product?

**Quinn Slack:** Yeah, there's some random experimentation we did back in 2014, but since I think 2018 we've been open core; so about half the code is Apache 2, and half the code is basically not Apache 2. You can look at it, it's not under any special license; it's under the same kind of license as if the New York Times publishes an article on the internet. You can read it, but you can't just go and use it.

**Adam Stacoviak:** Right.

**Quinn Slack:** And all of our code is public, and we think that's really important. We hear from so many devs who appreciate the transparency. They can see all the development that's occurring on Sourcegraph, all of our PRs, all of our issues, all of our code changes... And this single repo has got some directories called Enterprise, and that's the non-open source code; everything else is open source in there. And in that, we do it just like GitLab does it, so we learned a lot from them in how they do that.

**Adam Stacoviak:** So you've got your Sourcegraph OSS is under the Apache 2 license, and basically anything under the Enterprise or the Client Web Source Enterprise directories are subject to the Sourcegraph enterprise license... Which makes sense.

**Quinn Slack:** Yeah.

**Adam Stacoviak:** That code is still available though, you just can't use it without a license, right? If you're using that, it's because you're paying Sourcegraph some sort of fee, that doesn't break any legal infringements. So the source is still available, you can still read that source...

**Quinn Slack:** Yeah.

**Adam Stacoviak:** \[36:02\] ...potentially even contribute, I don't know; you could probably speak to that. CLA involved in that, but I'd imagine no...

**Quinn Slack:** And the enterprise build - that's the default built that if you do docker run, then you're gonna get that. So I think people add a lot of complexity in their mind when they think of software licensing, and I think a good analogy is to the New York Times. Is the New York Times open source? No, but you can go and read the articles for free. And then also, even things like Google Chrome and VS Code and Android... Android is mostly open source, but there are some components that Google mixes in at the end, that they've chosen to withhold... And we go a little bit farther in terms of open source than VS Code and Chrome and Android, in that everything is public... But it's a good mix, I think. We've found it to be a good mix, because it's really important to us to show devs everything we do, and to build that trust.

**Adam Stacoviak:** It would make sense to think of this as like a proportionally open source. Apache 2 has got its limitations, but it is an open source -- it is sanctioned by the OSI as an open source license... So essentially, everything under the Enterprise directories is simply what they call "source available", which is becoming more and more popular... For many, many reasons, obviously. If you had a permissive license on it, then you'd have to find a way to, I guess, be the police of who's using your code unlicensed, etc. Whereas a source available license like the Sourcegraph enterprise license might make it more restrictive in terms of how you can use that code, but at least it's source-available, and it's actually intended to be enterprise use code. So it's gonna be in a commercial environment, in an environment where someone's paying Sourcegraph.

Let's face it - you're a business, you have to make money... How does that transaction transpire then? So if any developer listening to this is like "I wanna try Sourcegraph", they can go and docker run, find your container, go through the guides, you have guides doing this... I've set it up myself, it's pretty easy... But at what point do you use Sourcegraph to the point where you can engage these enterprise licenses and then have to determine or establish a relationship? How does that relationship occur? Does it occur in the dashboard, does it occur by calling to help and talking to a salesperson? How do you go from interested open source user, or just freely available to just install it themselves? Point at some repositories, put some sources in there, do some searching etc. to using enterprise licenses and having this paid relationship that you have to build your business?

**Quinn Slack:** You can go set up Sourcegraph on your own laptop, or on your own infrastructure, just using docker run, or something like that, without talking to us. You can use it for up to ten users. Once you hit that cap, it's not gonna let you add more users, and it's gonna show this to you in a side admin panel. And then at that point, just reach out to us; you can buy a license, you can get a trial, roll it out to more people... But the whole time, you can use it with all the code you have, so you get to see that it works at scale. We wanna make it so you can see it working completely, before you need to talk to us, or anything like that.

Going back to business model - there's a lot of business models that software companies use... And for me, I'm a dev; what I like is companies that are transparent. We chose to make our source public... And the alternative is not "Oh, Sourcegraph is gonna give everything away for free", because we are a business. We can't do that. We need to charge for something. We decided to make our source available; half of it is under Apache 2 open source, half of it is not... We like to be really clear about how we make money. I think a lot of the skepticism that developers have is not "Oh, we don't want companies to be building a business", it's "We don't want companies to be hiding that", or we don't wanna be the product ourselves. We wanna know that as customers, the company is devoted to us. And you know, you mentioned our first value is to be customer-driven... We make money when all the devs at a company are using Sourcegraph. The company will pay us for each dev that uses it... And it's really simple, like that.

**Adam Stacoviak:** \[40:17\] So we got to this subject by keying off of mistakes. Initially, you went cloud; the discovery was to go self-hosted. That way it was less around a business success, but more of an adoption success... Because one, as even a half open source project, the first thing you've gotta do to be used is be adopted, right? That's the hardest thing for any open source really, that intends to be at scale, is to find adoption. So you have to, I suppose, remove the friction of... So if you were cloud, you were not easily adopted because of security constraints. Let's go back to that though, because I think you said -- in that scenario, you said that the security concern was top of mind at first, but it seemed like you kicked it down the field a bit, and you thought, "Well, that's just too simple. It can't be the security. We have to improve the usefulness of this thing, the value of this thing."

**Quinn Slack:** Yeah.

**Adam Stacoviak:** It seems like a lesson learned there might be the simplest solution might be... The solution, right?

**Quinn Slack:** Yeah.

**Adam Stacoviak:** ...because if you'd have maybe paid attention to your hindsight earlier... But you know, what - sometimes mistakes are made and they're learned from. We can't always get upset with ourselves for the mistakes we make, because sometimes those mistakes, while they're not intentional, but they can teach us something for the future iterations of things we'll do. You can always use that negative as a positive in the future. It may be a negative now... But go back to that - security seemed to be the most simple solution, but yet you said "Let's go with add more value."

**Quinn Slack:** And it's so silly, because I am the kind of person who also freezes at that scary OAuth screen for other products...

**Adam Stacoviak:** I do, too.

**Quinn Slack:** ...and no way am I authing my email or calendar or code to this random company. So I knew it, deep in my bones, and for some reason, it didn't click. And I've seen a lot of other founders since I learned this the hard way, walk right up to this problem themselves. And one thing I ask them is "Okay, you think all these companies are gonna auth their code (or whatever) to your service? Do you auth your company's code to other services run by companies like you?" And very often, they say no. And then I think it clicks.

**Adam Stacoviak:** Well, that dovetails into a success then, because you've got, from what I understand, 800,000 or more devs using Sourcegraph today, or at least in the last year... Maybe you can give me an updated number of that. But since that decision, since understanding "Okay, it doesn't make sense to ask the world to auth their code to us. It makes more sense for us to deliver a distributed version of this software in a way that's easily installed." Docker is super-easy. You can manage that container super-easily. That's a common pathway for a lot of developers to try new things. I've done it with Pi-hole, with Bitwarden, with a lot of different things I've run here on my local network... So I don't know about you, but I'm a Raspberry Pi tinkerer, to some degree...

**Quinn Slack:** Cool.

**Adam Stacoviak:** ...and I love having my Pi-hole on my network. It's so awesome. I love the team behind Pi-hole. Can't wait to have them on a podcast, eventually. I've run that via Docker, for example, so it's pretty easy to try something and get adoption... And you've done that really well since essentially learning this lesson of, you know, you went cloud-first to a distributed model... And maybe there back again, so maybe you could speak eventually to the future of cloud for you guys. But let's talk about success. A lot of devs are using Sourcegraph. Help me understand what the surface area is of your user base right now.

**Quinn Slack:** Yeah. It started out with companies like Uber and Lyft and Yelp, and so on. We have three of the five FANG companies using Sourcegraph now, we have companies like Capital One, and Atlassian, and GE... We've got companies all around the world. We've got large banks, we've got large government customers... We've got so many of the companies that make the products that we use every day, which is really motivating.

\[44:07\] And what worked for us was making a product so good that every dev used it in a company, and having that be the benchmark. So we wanted to never lose a customer, we wanted to always grow virally within a company... And by the way, we've found that to be much easier than trying to go and get like 40 million devs to just use Sourcegraph for open source code.

Having code search within a company was just way more immediately valuable to the company's devs than finding individual devs and having them see a ton of value early on. And when you look at where we have the most penetration now as the mid-market, it's companies up to 5,000 devs. We've got a ton of companies that are in the larger enterprise segment, and they need features like way more complex permissions, or they have a million repos and we need to scale up to that; they have other compliance requirements. But because we've shown like a hundred amazing logos that are all around the size, maybe a little bit smaller in some ways, a little bit bigger in other ways, we can just take a small step forward and bring in a lot of new customers.

The beauty for a dev tools company of starting with companies like Uber is any dev can bring you into a company like Uber, because they put a lot of trust in their devs to bring new things in... And it's generally a single big codebase, or a lot of repos, but most devs have access, and they really understand the value of developers being happy and productive. So it was a really great place to start. But now, as we grow - yeah, we see way bigger enterprises needing this, and they have way more code, way more complexity, way more legacy code, so the pain is bigger.

We also see companies starting to trust us on the cloud, where they didn't when we were three people in a random office that they'd never heard of. Now that we have these customers, and we have a record of being secure and transparent, now companies are saying "Well, yeah, we do want code search on the cloud." So now we're kind of doing what didn't work for us in the past, but it's very rewarding. So it's not yet GA, but I have individual private code on Sourcegraph.com; it's in very limited beta right now, and that's really exciting. We're working up to that.

And then one other thing that's really exciting is as we build really good code search, that every dev at all of these companies uses - you know, they're using it for finding usage examples, and seeing what can break, and best practices... And they're paged at 3 AM and there's a problem with access tokens, seeing what are all the access token changes... The product has just gotten a lot better. Way lower friction, way faster, way better-looking, way easier to get spun off to using... And all that means lower friction. So going back to that individual dev, to be able to just search across the open source universe on Sourcegraph and find some stuff that helps them as a dev - it's a lot better, and we are ready to go and grow, and win a lot more individual devs using Sourcegraph.

**Adam Stacoviak:** That's a good thing you got that funding then, right?

**Quinn Slack:** Yeah. That's helping us a lot.

**Adam Stacoviak:** I would imagine... This 125 million dollars series D funding, as I said before, led by Andreessen Horowitz. The valuation is awesome too, I mean -- it's a number, but it's a milestone, right? But the real rubber meeting the road is how you use 125 million dollars to push this product forward. And I think you're at a place now - and you can speak to this yourself... You know, as you had said, while it may be in limited beta, this cloud product - you're back to a point where you have gained the necessary trust. I'd imagine that a lot of these organizations are thinking "Can you just manage this thing for me?"

**Quinn Slack:** Yeah.

**Adam Stacoviak:** \[47:56\] So when you talk about this funding and this series D round, what are some of the ways that you're gonna roll out these dollars to make a better product, a better company? What are some of the key things you're really hoping to happen with that money?

**Quinn Slack:** Well, 90% of our money goes to our team, our people, hiring amazing people. So it's really growing the team by a lot. Engineers who have felt the problem of tons of code, and who have used code search in the past maybe, or who wish they had it - we are hiring in basically every single team, and the main increase in hiring that's come from this funding round is massive increase in our hiring plan on engineering.

Now, it's really important that we don't just go and hire in a foolish way. There's a maximum rate that you can sustainably grow an engineering team. So we've made it really clear to each team, and you can see this in our handbook how we do this, that anyone on the team can say "Hey, we're not ready as a team to bring on another person", and we always want a minimum viable team; that means before we expect them to produce anything sustainably, they've gotta have a product manager, an engineering manager, a tech lead... And before that, they're in an onboarding phase. So we're trying to be really thoughtful about this, but we do wanna grow as fast as we sustainably can, with amazing engineers, to go and bring code search to way more devs out there.

And there's so much that we can do, given that in all these amazing companies we are the only tool that's got all the code at the company in one place, and that all the devs are using. Because you look at the other tools the devs use - they're so fragmented. People use all kinds of different programming languages, editors... I use Emacs, so does Beyang...

**Adam Stacoviak:** Yeah. Other people use Vim...

**Quinn Slack:** Plenty of people don't...

**Adam Stacoviak:** ...and don't use Emacs...

**Quinn Slack:** Yeah. Even code hosts. GitHub is great, GitLab is great, and they're a fierce competitor. Bitbucket is popular, Atlassian Suite is really compelling... There's other code hosts out there... And there's probably some new code host idea/concept that we don't even know about, that is gonna sound totally crazy to us, but someone is building or thinking about right now, that's gonna make GitHub and that paradigm for code hosts look so outdated. And in any decently-sized company, you've got code scattered across GitHub.com, GitHub Enterprise, that team over there loves GitLab, you acquired a company using BitBucket, you've got legacy code in Perforce whatever... So everything is fragmented around us, but Sourcegraph is this one universal thing. In these companies it's the only universal thing across all the code and all the devs.

So our customers are asking us to build so many more kinds of things on top of that, and to make it so they can as well, which is really exciting and keeps us busy.

**Break:** \[50:44\]

**Adam Stacoviak:** Okay, so 90% of the money is going to growth in terms of people. You're going to do it in a healthy way based upon your handbook and team growth intentions. You mentioned cloud being in beta, so I'd imagine that's high on your priority list when it comes to how you're rolling out product and what you're focusing on...

**Quinn Slack:** Yeah.

**Adam Stacoviak:** Can you give us a peek behind the veil of some of these things you might be able to build upon on top of this ubiquitous space, where as you said, everything else is fractured and fragmented... Code search, Sourcegraph for teams - that's the one place we can see it all. What else could you build upon on top of that.

**Quinn Slack:** There are a lot of things. I'll share some of the ones I'm most excited about. One is bringing in information that all these other tools that you already use know about your code. Like, Datadog knows which parts of your code are running in production, errors that are thrown in logs, performance... We want any dev to be able to see that overlayed on the code; when they're looking at the code on GitHub, in a code review, on Sourcegraph and code search... Even in the future in their editor. And you don't wanna see it all the time, but you can toggle it on and off. And it's not just Datadog, it's SonarQube, it's your custom tool for identifying areas with a lot of code churn, or showing who in compliance signed off on this, so that you don't need to go digging. All these things that know about your code - well, all that information should be in one place, and right now you've gotta go to so many different tools to find it. Think of it like -- you can write something that looks like an editor extension, but instead of just working in one editor on one person's machine, it's rolled out across every single dev in all the tools they use. And there's a lot of work to smooth out all the tools they used to present a common API, but that's the work that we're doing with our extension API, and I'm really excited about that.

Another thing is batch changes. In the past, before this, Sourcegraph had been a way to find across your code... But you look at Google, and more than two-thirds of the code changes at Google are automated. And that means that human devs have a ton of leverage. They don't have to do as much of the gruntwork, because they've got a really smooth tool for writing a program to make a code change, and rolling that out. And doing all the annoying orchestration stuff, like opening up PRs, keeping them updated, nudging people, maybe opening 1% at first to see if there's any problems, making it so that the CI doesn't crash when you open up a thousand PRs... And we built that, it's called Batch Changes.

So now with Sourcegraph it's not just finding code, but you can also fix code, and you can open up a thousand pull requests and monitor the progress. And what that means is if you're some kind of central platform team or security team, instead of being really annoyed when you open up JIRA tickets and ask people to do things and they don't do it, you can put a little bit more work yourself, but have a way bigger impact, and clean up so much tech debt, get the code in a much better place, and it is a way more pleasant kind of relationship and a proactive mindset that you can have, is those kinds of teams. So that's batched changes. That was actually the first product that we built on top of code search, and we've got a ton of customers using it already. I hope we can do a lot more things like that.

**Adam Stacoviak:** So Batch Changes is an available add-on, I imagine, in the repository. It's under the Enterprise section...

**Quinn Slack:** Yeah.

**Adam Stacoviak:** ...under the Enterprise directories. So that's already available, and you can use that now... And I can see that being super-useful. I imagine that even if you're one of these security teams or whatever, you can hypothesize, "Okay, what if we did all this to the legacy code, do that, run a build, and instead of maybe creating a bunch of pull requests, maybe you run all the tests, and then you showcase that to your higher-ups, or to your other teams, and say "Listen, we've done all the work, we're not passing you JIRA tickets anymore. We've done the work, we've got the tests passing, we've done all this stuff to the legacy code to make it more secure... We just want you to do a cool review of the tests, that they are passing, and then we're gonna submit a pull request and you can review all the code, and then we'll ship it, obviously."

\[56:11\] It's a new chance where you sort of empower developers. Going back to something you said before - go and empower developers with code search and the power it offers individuals and teams. That to me is like -- batch changes is one of the coolest things, because we encounter in some areas so much legacy code, and it's almost like "Don't ever touch that. It works... Don't mess with it."

**Quinn Slack:** Yeah.

**Adam Stacoviak:** But if you could, in a way that was responsible, and maybe in a way that you can automate it and not have to nag developers or pull them away from product, while still making progress - to me that seems like a good thing. Can you share some examples of -- maybe some examples you know of where that's happened in the wild, and any customer stories?

**Quinn Slack:** Yeah. To start with a really simple case, there's a company that wanted to move a bunch of Yaml files across a ton of different repos, that specify how something is deployed to EC2, from dedicated instances to non-dedicated. This is a simple text change, pretty simple, but you make a little program that opens up the Yaml file, makes that change, and writes that back to disk... And then with batch changes you just run it across all that, and it opens up 700 pull requests, and boom. You've migrated all these deployments to be non-dedicated instances.

We've seen another case which is all the Docker files at a company that mentioned "latest". That's dangerous, because latest is non-deterministic; it could change. Bad for security, bad for repeatability... So write a program that looks and sees all the Docker image tags "latest" that are referred to, we'll go and find that Docker image digest, and pin it, so that it's deterministic.

We've seen when a central platform team is deprecating an API and wants to replace it with another - go write a little code modification script that will update in each repo the version of the library that's being used, to the new one. And then update the call site as well, to use the new API.

And you might think, "Well, it's hard to do that automatically." Sometimes it is hard to do it automatically. But if you can get it 95% of the way there, maybe 95% of the pull requests pass, and they're correct, and 5% aren't - you know, hopefully they're caught by CI, and if it's red, then go in and fix those manually and you've cut down the work to one twentieth of the amount of work that you had to begin with.

Then we've talked about how batch changes are used within a company, but we have a vision of something that's actually much easier in the open source work, which is when you're an open source library author, you should be able to include with the new release of your library some scripts that will update all the callers to use the new, better APIs that you're exposing, so that you don't need to maintain arbitrary back-compat for a long time, so that callers can opt in to having their code updated using scripts that you provide. And that's not something we do today, but it's something that would be really powerful for the open source world, and we hope to be able to provide that. And the net of that is all the world's code is gonna be a lot more up to date, and devs won't have to do so much boring work... Because nothing is more painful than when you upgrade some library that you didn't actually need to upgrade, and then you have to fix all these other things that broke for some other reason. We wanna free developers from that.

**Adam Stacoviak:** That's interesting, because now, thinking about Sourcegraph as the non-fragmented, central place where you can see all the code of an organization, it would make sense to begin to layer on automation on top of that. You mentioned writing your own program to do some of this scripting... Have you considered or are you considering no-code or low-code tools, that helps with that process? Sure, everybody can probably reach for Ruby, or Bash, or Zsh or something to do some sort of scripting... JavaScript even. Are you considering automation tooling on top of that, that might be no-code or low-code-like?

**Quinn Slack:** \[01:00:04.27\] Yeah, my personal thought with no code or low code is people who want those things - they want things that are easy, so I replace no code and low code with the word "easy" in my mind. We wanna make it really easy for you to migrate code, and past that might be writing, no one would wanna do this because it'd be so complex, that'd be writing a program that parses the AST, runs a compiler against some code, and those kinds of things. I've written those programs; they're really complex, no one wants to write them... But we have this thing called structural search, which was built by a team member at Sourcegraph that had built something similar inside of Facebook, that lets you write a really simple syntax, like a rewrite syntax, where you just write what the code looks like today, and then what you want it to look like, and you can just put dot dot dot for when there's some kind of expression. So if you wanna change function call a to function call b, you'll do a(...) and the rewrite is gonna be b(...) and so on. And that's not no code, because it's literally writing code to make that change, but it's so easy to do.

**Adam Stacoviak:** I think low code is probably the way it's gonna be, because you have to write something in that. You can't have a push button interface that does everything. That's what they would call too easy, Quinn. Too easy. You wanna go for easy. That's too easy, right?

**Quinn Slack:** Yeah.

**Adam Stacoviak:** Too easy is no coding at all. I guess it's hard for some, because you have to make the interface, but too easy for the individual user, I would say... But you're going for easy, so easy is probably low code, not no code.

**Quinn Slack:** Yeah, that's right. And with no code, in general - I think no code is a gateway to people writing code, and I welcome that.

**Adam Stacoviak:** Totally.

**Quinn Slack:** I think the more no code/low code things we have in the world, the more overall code there's gonna be... And I think in anything that you want to do, there's a fundamental complexity, and doing it in visual icons and symbols does not remove that fundamental complexity, in the same way that Egyptian hieroglyphics, the symbol language that was used - that is a language, even though it's drawn with pictures, and -- would we all be better off if we switched from using a human language like English to just emojis? No. We'd come up with something just as complex to represent the same ideas using emojis. It's not like we can fundamentally simplify problems beyond the irreducible complexity, just by getting away from code.

**Adam Stacoviak:** Let's take a somewhat hard right then. I wanna talk about your role in particular as CEO. I wanna look at your day-to-day operations, maybe the way you lead, the way you're building your team, things like that. What can you speak to in terms of like, say, today's challenges? I know you have some upcoming things in your life happening, you can mention that if you want to, but I'm curious what, say, your current challenges are when you go to work? What do you do, what are your challenges, how do you get over them, how do you tackle team problems...? Give me some examples of a day in Quinn's life.

**Quinn Slack:** Yeah, the upcoming thing that you're referring to I think is the second kid that my wife and I are expecting very soon. We at Sourcegraph are all-remote; we went all-remote before the pandemic, and I love being able to be at home and see my kids all the time and family all the time.

**Adam Stacoviak:** Yes, sir.

**Quinn Slack:** It's an amazing thing about being all-remote. One of many amazing things there is about that. When I think about my job as CEO and co-founder here, we've grown a lot. In the beginning of 2020 we were around 35 or 40 people, and now we're 180... So we've doubled many times over in that time. And it's become clear to me, if it wasn't already, that I have to build the team to build the company. I am not doing the things, I am finding amazing people, and making it so that each morning they wake up and decide to sit down in front of their computer and work at Sourcegraph that day.

\[01:04:11.22\] And they have so many other options out there... In any time, the kind of people who come to Sourcegraph have a ton of options. Right now anyone on the team, in two hours, could probably find another role at an amazing company. So it is so competitive out there, and I feel so grateful to have the team that we do... And we have to earn that right for them to want to be a team member every single day. So that's very humbling. And it sounds kind of corny to express this to team members, but I am so grateful that they choose to do this and work on this crazy idea to bring code search to every dev, and eventually we wanna make it so that everyone can code.

**Adam Stacoviak:** Yeah. How do you do that practically. How do you make Sourcegraph a place that people wanna show up to every day? I know you've got -- and maybe you can even call back to your handbook, because I was gonna ask you about that... Like, how does that play into creating a unified team? How does the handbook play into, say -- I mean, does everyone have access, not to it, but can they suggest changes to it? How does that play a role in creating a team worth being upon.

**Quinn Slack:** Yeah, everything at Sourcegraph is editable. And a lot of the good things that we do now, or the good things about being at Sourcegraph have not been -- it's not like, oh, some great idea that I had some day. It's been an idea from a team member. And at the root of it is though this kind of fundamental confidence that what we are doing at Sourcegraph is valuable, that we are directionally right, in that there are gonna be way more people coding in the future, there's gonna be a lot more code, and we're gonna go solve all the problems that come about because of that. And what I care about is getting that direction right, and I think that is true.

Beyond that, I want to surface all the problems, all the mistakes, all the bad things that can happen along the way. I want to get everyone at the team together in solving those. And I wanna be really open that there's gonna be a ton of challenges.

One thing with being as transparent as we are, making our code completely public, making our handbook completely public. And internally, we're very transparent. The moment we start working on slides for a board meeting, they're just in our Google Drive for every sourcegrapher to see.

What I like about that is it makes us a very robust company. Suppose Sourcegraph was just eking by, being successful because we kept our code secret, and that was the only defensibility that we had. And then let's say someone leaked our code one day, and then all of a sudden everyone else could do this. It's not true. But that would not be a very robust company, because one little change could knock everything over.

And similarly, if we were a very secretive company, then it relies on each person doing the right thing, despite having a tiny bit of information about what everyone else is doing... People might find out that some other team is doing something and be like "Well, that's not good", and get upset. So if one little piece of information was shared, that could knock the whole thing over. I don't want to be running a company like that. I wanna be able to sleep at night as a CEO.

With our customers, for example, let's say that -- this is, again, not true, but... Our customers are only using Sourcegraph because just didn't know about the existence of some other code search tool that's out there. Then I'd have a tough time sleeping every night, because I'd worry that some dev at our customer is gonna find out that "Oh, there's this other tool out there", and then they can switch. That would freak me out.

So we go to our customers with other code search tools and say "What do you like about this? What don't you like? What can we learn from that?" And we show it to them, and we try to make it so that we're winning in big ways, in sustainable ways and in really robust ways, rather than just because we're kind of juggling everything and we haven't hit any kind of bump while we're doing that.

**Adam Stacoviak:** Wow.

**Quinn Slack:** \[01:08:10.07\] So we're very open about the problems that we face when we don't hit a goal; when I make a mistake or do something wrong, I love it when people give me that feedback. That helps us be as robust as possible. I think that's what it all comes down to. I want us to win, because we have an enduring advantage. We have built a team that can do things way better than any other team out there. We've built a product that is so much better than everything else out there. I don't wanna win by a hundredth of a second.

**Adam Stacoviak:** A full second.

**Quinn Slack:** I wanna win by an hour in the marathon.

**Adam Stacoviak:** \[laughs\] It's nice to look back and see no one else there. I saw this marathon actually recently with -- I think it was the women's marathon in the Olympics recently... And I could be wrong on this; I just caught a clip... But she looked back and no one was there; and she just started crying, because it was just such an emotional moment to 1) reach the finish line, but then reach the finish line by so far ahead of someone else. And that to me is like -- that's how I wanna win, too. And not because I wanna put people down, but I just want my team, all the work we do, I want it to be so successful that we can look back and see no one else in our path, because we've just done such a great job at what our intentions were doing to deliver what we're trying to deliver... And I think that's an admirable goal, for sure.

**Quinn Slack:** Yeah. And you know, it's not a zero-sum game. Building brand new products, creating products... One thing I love about it is it's not zero-sum. So it's not like we will win at someone else's expense, which is really good. And all of this - we decided to adopt this mindset, when we started Sourcegraph back in 2013... Because let's say we weren't on the right direction. Let's say our idea for Sourcegraph was fundamentally wrong. But we wanted to find that out in like 2014, and only waste a year of our lives on this, rather than postpone the inevitable and maybe just squeak by, and always be just on the edge of failure. We wanted to know really clearly where we stood, because the most precious thing is the time that you spend, and we want to get to success or failure as quickly as possible.

**Adam Stacoviak:** So true. I have one last question for you, Quinn, and I haven't told you what it would be... So it's kind of a curveball, and you can decline or answer if you'd like... But what's on the horizon, that not many people know about, or no one knows about, that you can share here on Founders Talk today?

**Quinn Slack:** I think that a single person writing code can have a huge impact on the world... And I worry that we have lost that, or forgotten that. There were some cases where that's been really clear, like with the creation of Bitcoin, and Ethereum... But what you see more of is people that can write code being pushed to go and build a software business, usually an enterprise software business around it... And in many ways, there have been successes, but I think there's so many people out there that just through their code can have a huge impact on the world. And I don't want to just have two data points from that, I want people to be able to build big businesses, and build products that tons and tons of people can use just on their own. And that happens today if you're a writer.

If you're a writer, you can write a book, you can write articles that have a huge impact on people. And when you do that, no one says "Hey, you should go start a publishing company." But if you're a coder, that's what people tell you to. And I worry about the skill and ambition and enthusiasm we're losing from those people, and also from all the people that say "Well, I don't wanna get in the business. All I wanna do is code", and knowing that that doesn't seem possible, they don't even get started.

\[01:11:56.21\] So if one impact we can have at Sourcegraph is making it so that a single coder can have a much bigger impact on the world, that would make me very happy. And certainly, I feel this as someone who loves to code, and who is now a CEO of an enterprise software business... There's so many things I love about that too, but sometimes I think "How can that single person coding have even more distribution, even more impact? How can we celebrate that as something that someone can do for their whole life?"

**Adam Stacoviak:** Does that play out in your involvement in a Hack Club, or is there another way that you or Sourcegraph plays a role in making that possible?

**Quinn Slack:** Hack Club is such a clear illustration of it. Hack Club is this non-profit that runs coding clubs and communities for high-school age students all around the world. And the amazing thing that high school students can create with just a few weeks, or months, or years of coding education all on their own, all of their own initiative, is amazing.

And sometimes I see what they can create... Like, a computer vision program that waits for you to put your middle finger up and then takes a picture. You know, that's a complex computer vision algorithm, and I think how much harder that would be to build without that single person's initiative around it. So if that was a product in a company, that was spec-ed out, and had business and marketing and product management, all these other people involved in it - it'd be better in many ways, but it'd take a lot longer, and it would lose that kind of spark, that special nature. And I just worry that with a lot of the stuff that gets created in code today, it's not that really special feeling you get when it's something built by a single person, where they have just poured their heart into it. And I think we need more code and more software that comes out of that mindset.

**Adam Stacoviak:** Well said. Well, Quinn, I'm a fan. Congratulations on your funding, congratulations -- I suppose, pre-congratulations on your future new child in your life. That is amazing. One thing I'll share in regards to working remotely, or being able to work from home, essentially - I have my own home office, but I always enjoy something I call micro-moments. So I'll get up from this call... And right now it's 3:30 EST, my time; technically, I've got a little bit more time left in my day. I'm gonna come back to work... But I'm gonna take a break after this call with you, and I'm gonna go see my wife, I'm gonna give her a hug and kiss, I'm gonna see my sons, give them a hug, and I wanna have a moment with them briefly - 10-15 minutes. I might play legos real quick, or something like that. I might do something fun real quick. The point is - I call those my micro-moments. I love those, and I hope you have more of those in your life.

Congrats again on the funding, and thank you so much for sharing your thoughts and wisdom here today on Founders Talk. I appreciate it.

**Quinn Slack:** Yeah, thank you. Happy family, and happy coding to everyone out there.

**Adam Stacoviak:** That's right. Thanks, Quinn.
