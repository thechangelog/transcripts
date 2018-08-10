**Adam Stacoviak:** Katrina, it's been a journey; you've been on the show several times, you've been on Spotlight, you've been on GoTime, you've been on The Changelog... Exercism is your thing, but it's not your full-time thing... But it takes so much of your life up, and now you're here at version 2.0, with some big, big stuff happening. Catch us up, what's been going on?

**Katrina Owen:** That's a really complicated question.

**Adam Stacoviak:** Of course it is!

**Jerod Santo:** We have an hour, so just go ahead... [laughs]

**Adam Stacoviak:** Yeah, we're listening...

**Katrina Owen:** So I started Exercism five years ago, and talked to you right after that. For the past five years, I've been switching jobs up a little bit, trying things out, mostly trying to keep Exercism running as a background process, but sometimes it does take over...

**Jerod Santo:** Background job...

**Katrina Owen:** Yeah... It does tend to take over at nights and weekends, a lot. Sometimes I'll take vacations and then work on Exercism, which is, I've heard, a bad idea, because it turns out you need vacations... So I'm trying to fix that to where I actually get to take vacations.

But yeah, I work a full-time job at GitHub on the API team there, and then Exercism is my second gig.

**Adam Stacoviak:** It seems like truly a second gig too, because you've got a gigantic staff of mentors, you've got volunteers, you've got tons of things happening. I mean, 48 different tracks/languages... A lot. This is clearly not a one-person operation.

**Katrina Owen:** [00:04:03.13] No, thank goodness I'm not alone on this anymore. 48 active tracks. Each of those tracks has their own maintainers, so people who are familiar with the language, comfortable with the language, who care about the language and who help ensure that the track is solid, that we have exercises that cover the broad range of language features, and the broad range of the standard library to give people something to sink their teeth into...

**Adam Stacoviak:** Yeah.

**Katrina Owen:** And then we have a bunch of people who kind of contribute to Exercism in general... Not necessarily to one track in particular, but who will jump in and help out either on GitHub on the Exercism Org, answering issues, fixing little things across the board, or also jumping into some of the chat channels that have sprung up around Exercism and helping people get unstuck and started there.

**Adam Stacoviak:** So the individual Slack -- I'm assuming Slack, or other Slack-type things, where teams are happening, or communities are happening around Exercism...?

**Katrina Owen:** Yeah, so we have a Gitter channel that I don't personally go to, because you can't turn off emoji in Gitter, so I just can't handle it very well... But people do hang out in the Gitter chat, and a bunch of volunteers are there constantly, helping people get their environments set up, or debug the command line client issues, or just even with programming questions. Some wonderful people there who hang out.

**Adam Stacoviak:** Maybe just to catch everyone up, what is Exercism?

**Katrina Owen:** That's an excellent question. [laughter] Exercism is a platform for practicing programming. In particular the key place where Exercism shines is where you know how to program, or kind of know how to program in one language or several languages, and you need to ramp up quickly in a separate language... So that gives you a quick path or a solid path between that awkward Hello, World where really everything -- you can write code that will compile, that will work, but it's a struggle. You have to keep looking up; you don't remember the syntax, the data structures; you're not familiar with the standard library.

Then it gives you a bunch of little exercises that you can run through, which give you an excuse to use the language in really trivial settings, and then at the end of it you should be familiar with it, you should have that sense of fluency where you're no longer feeling like you're trying to communicate with your hands tied behind your back.

**Jerod Santo:** At the risk of just completely side-tracking this conversation, did you say that you can't go into Gitter because it won't let you disable emoji?

**Katrina Owen:** Yeah, I can't stand emoji.

**Jerod Santo:** Are you just like allergic to emoji, or something?

**Katrina Owen:** First of all, I find them kind of obnoxious, and then second of all, they add a layer of translation to communication that I find really difficult to process. So it'll be some sort of face, that has some sort of emotion painted on it, and I can't tell what that emotion is, so I'm always forever looking up what the emoji actually corresponds to... And it'll be like "Thinking" or "Worried" or "Grinning", and if I just see the emoji itself, I can't tell what it's supposed to mean.

**Jerod Santo:** So you're probably having a difficult time in an ever-changing world where emoji usage is just kind of sky-rocketing at the moment.

**Katrina Owen:** Yeah, try working at GitHub... [laughter] They literally will write out sentences that consist of emoiji, and assume that you'll know what it means. "Ice-cream bike blow cloud" - it's like, "I have no idea what this means." "It means I'm going to lunch", or whatever... I have no idea.

**Adam Stacoviak:** [00:07:58.29] Just say I'm going to lunch.

**Katrina Owen:** I know, right?

**Adam Stacoviak:** So you must have a tough time on the internet then, basically. There's really nowhere you can go that has solitude, a sanctuary for you.

**Katrina Owen:** Well, you know, I just don't go there very often.

**Adam Stacoviak:** There you go. Well, good thing you're building things for GitHub's API and [unintelligible 00:08:13.29] like Exercism.

**Katrina Owen:** See, in the API we don't really deal with emoji, except for accepting emoji as parts of comments or labels... So I don't have to look at them all too much in my day-to-day work.

**Jerod Santo:** You just prefer to look at the Unicode code points, you know?

**Katrina Owen:** There you go.

**Jerod Santo:** [laugh] Just translate those... So that's interesting. I haven't heard of anybody; I know there's people that do not prefer to use emoji or don't like emoji... But people that are actively disengaging a specific community because of emojis just caught my ear.

**Katrina Owen:** So in Slack they let you turn them off, which is really great. And they even fix the reactions. It used to be that you could turn them off, but it would only turn off in the actual discussions, in the threads, not in the reactions... But now the reactions will also show you :thinking: or :party: or :pizza: or whatever it is.

**Jerod Santo:** I see. So it just leaves the underlying text.

**Katrina Owen:** Yeah, which is much more helpful.

**Adam Stacoviak:** Yeah, I can see that being a good compromise for someone who wants to not see the image. Just give me the text version that translates it, and I'll deal with that.

**Katrina Owen:** To digress even further, I actually find emoji really useful for statuses, like predefined labels that mean something. You have an agreed-upon convention that the green checkmark means that this is done, the eyes mean it needs someone to review it - stuff like that I find really useful. But then it's a very small set, and well-defined.

**Jerod Santo:** Yeah. I like to use them in labels, for instance... Like, in my notes I'll have different categories of notes, like "Changelog, house, ideas", all these things... And at the beginning of each one I'll put -- like, for "ideas" there's a lightbulb emoji, and for "house" there's like the house emoji... So since that's first, I can identify that faster than I could actually identify the words, as I'm scrolling to get to the right folder. I find that very valuable.

**Katrina Owen:** Yeah, with a well-defined taxonomy, I think that emoji are really great... And I totally understand that for other people it makes things playful and it helps them communicate better... It's just my personal thing - I find them kind of challenging. Shall we bring it back to--

**Jerod Santo:** End digression, yes. Let's go back to the stack, pop that off, and start where we were, which was Exercism. Adam mentioned that we had you on -- it was like five years ago, and you said that was briefly after Exercism had launched. I remember at the time I think you had gotten featured in Wired, and usage just went through the roof. Was that the right train of events? There was a big feature, and all of a sudden, Exercism was blowing up.

**Katrina Owen:** Yeah, it was blowing up not just because of the Wired thing, but it also hit the top of Hacker News and the front-page of -- I can't remember what it was... Slashdot, at the time... So it got a ton of attention, which I was completely unprepared for.

Then another thing that made that particularly difficult was we didn't really know what Exercism was at that time; now it's very clearly the path between the awkward Hello, World and the basic fluency, where you're not very proficient in the language, but you are fluent in the idioms and the basic usage. And at the start, we had no idea... People were complaining because Exercism wasn't teaching them how to program.

The title on the Wired Article was actually "The site that will teach you how to program well enough to get a job", or something like that, which I had never claimed at all... And which Exercism didn't do. So we got a lot of people who tried to use it who were definitely not well-equipped at the time to get started by trying to download a binary and stick it in their path; of course, they'd never heard of path before...

**Jerod Santo:** [00:11:58.26] Right.

**Adam Stacoviak:** I remember talking about rewriting the CLI from Ruby to Go, and that was a bleeding edge at the time.

**Jerod Santo:** That was influential.

**Katrina Owen:** It was pretty early on. That was Mike Gehard from Pivotal Labs, at the time. I don't know where he is right now... But he was the one who suggested Go as a solution to our problem where -- so the problem was that when Exercism launched, we only had exercises in Ruby, because I was just doing this as a workflow thing at work. Then someone added Haskell, and then the Haskell people were like "Why do I need a whole Ruby environment just to do exercises in Haskell?" That's a really good question.

So Mike did the first reimplementation of the CLI, and then I've had a couple people help maintain it over the years, and we've done a complete rewrite again, still using Go for the v2 launch.

**Jerod Santo:** Yeah, which we're gonna dive into all of the details of v2... Which, like you said, was a ground-up rewrite or rebuild, according to the launch announcement. You really revisited, it seems, every aspect of the platform. So here it is, five years later... Now it feels like you know what Exercism is now, so maybe that's part of like this rebrand, you can tell us a little bit about that journey... But I guess even more foundationally, Adam and I were wondering before we hopped on the phone with you about your motivations and desires with this, and where they were when you started it, and then just to put it very frankly, why are you still working on this today? Why have a second job, which is just a passion project? Tell us your motivations.

**Katrina Owen:** Early on, at the beginning, I didn't really have a reason to do it, other than that it scratched an itch that I had, and I thought it would be fun... And I was kind of right about that; it was a lot more work than I expected, but for a while there, I was doing it out of a sense of obligation, where I felt like I could let the community down. There were thousands of people using it, and I got e-mails and tweets and things from people who were telling me how much it really helped them get past a barrier, or get their first job as a junior developer, or land a gig using a new language. So I felt this huge sense of obligation to not just drop it or let it die.

Over time, I've found that as long as I get help, that it's not just all on me, I actually care really hard about this problem of fluency. There's something that's really challenging about learning how to program in a new language, especially if the language is in an unfamiliar paradigm. And what I find is that there are very many tutorials that are like "This is how the syntax works, or this is what you've confined in a standard library", and then you have a ton of tutorials about "This is how you write a reverse proxy in this language", or sort of the bigger problems, and there's a gap between where you are just getting started with a language and where you are actually ready to go write a reverse proxy. And what makes it really hard to write a reverse proxy is that not only are you trying to figure out how a reverse proxy is supposed to work if you don't know how to do that, but you're also trying to remember where to place the braces, and do string templating, or whatever it is, in the language.

So I think that it's really important to be able to address that gap, to help bring a lot more people into a lot more languages in a way that's really comfortable, and challenges you just at the right level, and gives you lots of feelings of success - lots of successes, lots of small wins, so that you're not feeling dumb and stupid and overwhelmed, and feeling like "Maybe Rust is just too hard for me, or maybe Haskell is just too hard for me. Maybe I'm not smart enough."

**Jerod Santo:** [00:16:04.05] So it started as a scratching of an itch and perhaps an exploration in fun, as a lot of side-projects do, and at a certain point, because it was so useful and successful, it became, like you said, somewhat of an obligation, like yo had to keep it going for people.

**Katrina Owen:** Yeah.

**Jerod Santo:** But then you started to speak a little bit more of, I guess, some of the -- I don't know, maybe you're seeing the benefits more, so there's some sort of intrinsic motivation beyond the obligation that you're hitting that now... Am I sensing what you're trying to say?

**Katrina Owen:** Yeah, definitely. I care a lot about this type of solution for its own sake, rather than just like "This needs to exist, and therefore I will write it." You also asked about why I have a second job, or why Exercism is my second job... Well, that's because I haven't actually put a business model around Exercism; everything is free, and all the work is volunteer. I need to pay my bills, so I have a second job.

**Jerod Santo:** Did you try that? Did you think about that? Are you thinking about that? I know you say "Exercism is 100% free forever", in bold, so... That doesn't mean you can't monetize in other ways, but that's a principle that you've laid out. That being said, everything else about the new website, to me and to Adam as well, feels very professional, very business... The team of five, the core team, the hundreds of mentors, thousands of people using it... I'm thinking, "This seems like better than a lot of startup websites that we see out there."

**Katrina Owen:** Yeah, so when I started working with the Thalamus team, the four others that are on that team page - that was almost two years ago now, or a little over a year and a half ago - we talked about what it might look like to turn it into a proper product. The key interesting thing about it was I was feeling overwhelmed, I was feeling burnt out, I was feeling absolutely over all of it, really, and still feeling that burden of like "I just have to do it, and I'm kind of on my own..." Even though we have thousands of people who are contributing to the open source side of things, there are a lot of types of work that don't get done within the framework of open source, so I was really feeling the burden of it.

I was talking to Jeremy Walker, who's on the team page there, and I was telling him -- I was whining, basically... I was complaining about how there was so much to do, and I didn't really understand how to fix any of it, and the product was terrible, and the user experience was terrible, and I had 200,000 users... And he was like "You have what?!"

**Adam Stacoviak:** Right... [laughter]

**Katrina Owen:** And he's run a number of businesses. He's created and sold a startup, and runs several startups, so he was like "Wait a second... Stop there." And I can't remember what the number was; it was some big number. "Stop right there..." So he explained the thing that should have been obvious, which is I had found something that worked. The core idea worked, and all of the stuff that was missing was just the design, the user experience, the marketing, the business model, all of that... Whereas what he was saying was a lot of startups start with an idea, and they do the design and they do the product work, and they might not actually have something that jells, that fits.

So he said, "This is totally solvable", and then he offered to help solve it. So he and this team worked with me over the course of 18 months, and they did phenomenal work. For the first 8 months we only asked questions, basically. We started digging into "Well, who uses Exercism? What are they using it for? At what points, when you're learning the language, are you feeling vulnerable? What are the negative emotions that are associated with using Exercism? How could we avoid that or mitigate that? What does it mean to be done with a language track? What does it mean to be done with an exercise?"

[00:20:09.25] All of these questions led us to really go to the fundamental meaning of what is Exercism and how does it need to be structured in order to properly support people's learning, to cover just this bridge?

It turned out there were so many things where -- we were optimizing previously for three groups of people: people who were learning to program for the first time, or who are learning their first programming language, professional programmers who are ramping up in a second language because they need it out of curiosity or for a project or a new job, and then the third group was what we like to call the artisans, the people who really care about the idioms and readability, and how do you best use Ruby to make it feel and smell and taste like Ruby...

What we found is those artisan conversations are super-interesting; they go so deep. They will spend dozens of comments going back and forth to explore the nuances in some super-arcane part of the language... And that's fun, but it's not actually what Exercism is about. And same with the people who are new to programming - in order to successfully use Exercism right now, you have to have already installed a programming language on your computer; you have to know how to assign a variable and write a function. So we're not gonna be teaching you to program from 0 to 1, which helped us narrow in what the feature set needs to be, and then how to optimize that path, from Hello, World to basic fluency.

**Adam Stacoviak:** Well, it's pretty incredible to have product market fit, as you call it, out of the box... But at the same time, as you've mentioned, the examination of actually who you are, the ability to get to the next step successfully - that resonates with us, a lot. As she was saying that, I was thinking "That's what we did." We had to figure out who we were, to actually be who we thought we were, you know what I mean? We couldn't be successful without doing a retrospective on who we actually thought we could be or should be, and who we actually thought was benefitting from what we do.

**Katrina Owen:** Yeah. And the ultimate goal is actually to earn some money, so that we can hire people to do a lot of the work that doesn't happen naturally through just the normal, day-to-day open source contributions, and that sort of thing... But it was really important to get the website out and launched, and the design finalized, or at least to the point where we could launch, before starting to talk about -- or at least talk to the partners that we hope to connect with in order to generate some revenue.

**Adam Stacoviak:** So the plan is to potentially revenue, or for sure...?

**Katrina Owen:** For sure, but not by charging individuals who use the website.

**Adam Stacoviak:** Gotcha.

**Katrina Owen:** Yeah. So we have two ideas right now around what we think might make sense for Exercism. The first is to look at community sponsorships, in particular for individual language tracks. We have a Rust track; it's really popular, it's one of the top three tracks on Exercism, adn I have reached out to the Rust team to work with them to make sure that Exercism is the best possible funnel into their community; that we cover the language features that make sense to cover for Rust.

And especially with Rust - there are some language features that are really different from what a lot of people are used to, so we need to make sure that we cover that well. Also, all the parts of the standard library that they feel is important to cover, as well as working with them to make sure that the mentorship in the Rust track really reflects how the community feels about the language, and helps people fall in love with Rust.

So if we do that well, it could make sense for Mozilla to be a track sponsor on the Exercism Rust track, for example.

**Adam Stacoviak:** [00:24:07.13] Yeah, if it's such a great on-ramp for languages in particular, obviously... I guess potentially even some frameworks, too; that remains to be seen. But if you're that much of an on-ramp, it would make sense... You're a first stop, so to speak, on a path, for a newcomer or someone just getting started, or whatever. It's a clear stopping point for somebody.

**Katrina Owen:** Yeah. So that might make sense. We want to have the site out for a while first, so that we can see what the numbers look like and make sure that we have the features to support the mentorship and the new user experience before we start reaching out to potential partners or sponsors. But that's one way.

Another thing that we have been considering is partnerships who are in publishing. Someone who creates a lot of great content for Python - it might make sense to have sponsors in the Python track to say "Hey, you've completed the Python track. Here's some great next steps for you."

**Break:** [00:25:12.24]

**Adam Stacoviak:** Katrina, I think the next stop in this conversation would make sense to sense to say -- since revenue is on the table, but you're not gonna charge users, what are some ideas you have for legitimizing this thing into something you can not just be a side project, but be a profit center for you?

**Katrina Owen:** Yeah, so there are a number of things that I think we can do and that I've talked about with Jeremy and the others at Thalamus... The first thing is track-specific sponsors, which we talked a little bit about.

The second thing is potentially partnering with publishers to have relevant content for the users, and then we've also talked about a number of spin-off products, especially as we narrow down the feature-set of the core experience. There are things that people use Exercism for that we don't currently explicitly support, and it might make sense to add either other subdomains, or other sub-sites that we would charge for, that provide just the add-on features that are relevant to business, who are either helping their teams level up... Or a different possibility is people use Exercism a lot when they're recruiting, in the hiring process, to have people do exercises, see how they approach problems, have some sort of trivial problem to talk about without making them go deep into their own codebases...

And a lot of people also - which I think is interesting - they use it to ask someone to give someone feedback. So they would send people to Exercism and say "Do three exercises and then go give other people feedback, and then send us the link to that" and then discuss sort of "What does good feedback mean", "What does this mean in the context of team communication, or team leadership (if that's that type of position you're looking for)."

**Jerod Santo:** [00:28:05.20] That's definitely an interesting use case that I wouldn't have thought of. So you mentioned that you worked with Thalamus, these other four people on your core team now, and you spent 18 months roughly doing a ground-up rewrite, those first eight months or so you said you were just asking questions and really just diving deep into what Exercism is and what you want it to be... So share with us some of those answers, and some of that focus that you gained and how that turned into - maybe not the technical bits necessarily; we'll definitely dive into the rewrite... But maybe even the rebrand and some of the changes around that. What were the outputs and result of that process?

**Katrina Owen:** I wanna say that there are probably three really key changes. The first one is the brand itself, where Exercism was just a name I came up with, using Wordoid.com, because I thought it was funny... Like, there was no reason to call it Exercism other than that the Ruby community likes puns, and it was a pun.

And then the logo kind of fell out of that, as a reflection of "Oh, this is so close to Exorcism, so we should have a logo that's an E with horns on it", and I was like "Yeah, why not?" It was still just in sort of "This is all just for fun" sort of domain, I guess...

**Jerod Santo:** Right. Playful, and silly.

**Katrina Owen:** Yeah, and that works for a lot of people, and a lot of people miss that now that we've changed it... But there were a couple of things that I've realized in the past few years. The first is that there are people who are religious in the Catholic tradition, and some people find that kind of offensive, that we're playing on the concept of exorcism, which is a serious concept in their belief system... So I find it completely unacceptable to be offensive to people based on their beliefs, so I wanted to remove that as a possibility.

And the origin of the name wasn't really a pun on exorcism, it was a pun on exercise; I just thought it was funny that it had the similarity in the word... So it wasn't really intended to be--

**Jerod Santo:** It wasn't the point...

**Katrina Owen:** Yeah, it wasn't the point, and then the original tagline is the devil is in the details, but that's because it's amazing what you can learn from 20 lines of code... Like from really going deep into every detail on 20 lines of code, you can learn really fascinating things about your assumptions about programming, about how you communicate, about how a language works. So that was much more -- it was all part of that whole playful thing, but it played far too heavily on the idea of the devil... So that was something that we wanted to move away from.

And likewise, the color was very sort of aggressive and pink, and it's kind of like we -- when you're learning how to program, we really don't want to have this sort of aggressive feeling; we want to make it so that you feel like this is a place where you can be supported in the journey as you learn a new language, and the really overwhelming, aggressive pink didn't really do that.

And then the third thing was that every once in a while, someone would see the logo and they'd be like, "Oh, is this an emotional support group for people who don't like Internet Explorer?"

**Adam Stacoviak:** [laughs] That's funny.

**Katrina Owen:** And once you see it, you can't really unseee it, and that's also not the point, so... Yeah, we moved away from that.

**Adam Stacoviak:** That's really funny. Did you get a lot of those?

**Jerod Santo:** Enough...

**Katrina Owen:** I mean, more than once, yeah...

**Adam Stacoviak:** Too many?

**Katrina Owen:** I thought it was -- I mean, I didn't mind so much, but it's definitely not... Like, again, I don't want to link this to some particular technology that already exists, or if people have bad feelings about it, that's definitely not what I want them to associate with it.

**Adam Stacoviak:** What did you learn about the learner type? What do you call the learner in your taxonomy?

**Katrina Owen:** [00:32:00.15] Sometimes I call them learner, sometimes I call them author... Like, just the author of a submission, as opposed to mentor; so that's usually in context of author versus mentor.

**Adam Stacoviak:** Gotcha.

**Katrina Owen:** But yeah, I prefer learner over student, because we're not teaching anything; we're helping you learn something.

**Adam Stacoviak:** So the learner then - you'd mentioned doing some introspection on what their focus was; you said you optimize for three different types. Did you whittle that down to one? What was the change there?

**Katrina Owen:** Yeah... So it used to be we supported people who were new to programming, or we were trying to support people who were new to programming, people who are professional programmers ramping up in a new language, and people who are artisans who are doing a deep dive in one of their favorite languages or their main languages... And we completely have removed any features that are optimizing for the artisans who are doing a deep dive in their primary languages, as that's really -- it doesn't cover the awkward Hello, World to basic fluency pathway... Though we will be adding back team features, which will let them set up their own space to go do those deep dives together. It's just we're not optimizing the core experience for that.

And in terms of new programmers, you can be fairly new to programming when starting to use Exercism, but you can't be brand new. We really don't cover those very first steps, and I don't know if we will. I was talking a little bit with the Rust team earlier today, and they had some suggestions on how we might help bridge the gap for those who are not so familiar with some of the basic programming concepts in themselves, but overall, we're aiming at people who at least have some basic knowledge in programming. So they might be learning their first language and they might have done a couple of months' worth of the weekend meetups, or workshops, or some of the online tutorials and some of those things, and be ready to actually get started using the language... And they often -- people will say "Oh, you just need to write a lot of code", and it's like "Yeah, well... What do I write? How do I do that? I don't really know even what problems to tackle", so this gives people sort of an easier ramp into just ideas of things to use the language for, to help that early practice.

**Jerod Santo:** One piece of advice that I give to people who are trying to get into the industry is to find something real, that they want to exist in the world, that doesn't exist... Especially if it's like, they wanna get into web development; it's like have a tangible, real goal in mind, and then use the tools, the languages, the frameworks, all the stuff that you're learning as simply means to come to that end, and you'll find your way through the road bumps and the tough stuff, because the driving motivation isn't just to learn... Which often times, if we just want to learn a thing, it's very easy to stop when the going gets tough, because that motivation isn't super strong; but if it's like "I'm trying to build a thing", that thing that you want to build sometimes will pull you through that.

With Exercism, it's all pre-created, small -- I love the scope of a lot of these tasks or challenges... Do you feel like there's a missing piece there, or do you feel like it's different strokes for different folks? What are your thoughts on challenges vs. real-world things?

**Katrina Owen:** [00:35:45.27] I completely agree that having a real-world goal makes it much easier to stick with it; however, a lot of people aren't even sure how to make a real-world goal... For some people it's like "I want to make an iOS app and it has to do this... It's a way of exploring shoe design, or whatever..." and they don't know exactly where they wanna go... They will be able to just go after that.

Other people are like, "Yeah, I find that programming is fun" and they might have some ideas around what they might wanna make, but it can be really hard to actually come up with something that is concrete enough and within reach enough...

**Jerod Santo:** Within reach is definitely the hard part, yeah.

**Katrina Owen:** Yeah, so I think that Exercism can fill the gap for the people who aren't able to just run with it. There are people -- I saw a talk at the second GopherCon, I think, by Audrey Lim, who was a lawyer in Singapore, I think, who was like "I'm going to learn programming."

**Adam Stacoviak:** Yeah, she stole the show for that GopherCon... That was a big deal.

**Katrina Owen:** She was amazing. That talk was so good... And she was totally able to just pick up things that she wanted to explore and then run with it, and that helped her get through all the early parts of learning the language... Whereas I've found other people on Reddit who are complaining about how they've been doing web development for years, and they're trying to get into Go, and they're finding it very difficult, because a lot of the recommendations were like "Just write a thing. Just write code. Just write a real project", and they were like "But how do I get to where I even know what the project is?"

**Adam Stacoviak:** It's like saying "Learn by doing." Well, do what? What should I do? Give me some guidance. Where should I go with this thing?

**Katrina Owen:** So for people who do know, I think that learning by having a project is incredibly powerful. And for people who don't, I think that these types of challenges can be a way to help you get to the next step, where you are in a better place to choose real-world challenges.

**Jerod Santo:** Yeah, absolutely. I think for your second case, the people who maybe know one language and they're wanting to pick up a second one... I think specifically the person that wants to learn their second or maybe third programming language - this is perfect for that use case.

**Katrina Owen:** Yeah, it's really good.

**Jerod Santo:** Once you get to a certain proficiency of polyglotness, like picking up the next language, at a certain skill set, it just becomes easier and easier to do that, if you're just trying to learn... Unless it's a brand new paradigm. But for that second or third language, this should be spectacular. And actually, if I was going to hop in and say "I just wanna write some Lua and just find out about it", I think even as somebody who knows three or four languages, Exercism would be a great way to do that, because you get that mentor feedback right away. You have these pre-defined scopes; I don't have to come up with stuff... So it seems really good for that, too.

What's the mentor motivation? We talked about your motivations, we talked about potentially having some income eventually... There's lots of people mentoring now; I was just looking at the Elixir track and there was... I just lost it. I'm all over your website, and I can't keep my tabs straight; anyways, there was a bunch of mentors on the Elixir track, and I'm curious, where do they come from? Is there a demographic of these people? What are they getting out of it? Is it all warm fuzzies? Is there more to it? What are your thoughts on the mentor side of it?

**Katrina Owen:** So the mentorship is completely new in the new design. It used to be very ad-hoc; anyone could give feedback to anyone, which led to a lot of varying in the quality of the feedback, and a lot of people not getting feedback. So with this, we wanted to do two things - we wanted to have a community of mentors who we can work with specifically to ensure that they have what they need and they're getting what they need, that we can make tooling to make sure that everyone gets feedback, and the quality of the feedback is good; we can start adding in features to help optimize the process of giving feedback, of noticing things to give feedback about...

So the whole mentor thing is very new, and as part of that, we are asking people to literally sign up to be mentors.

[00:40:05.04] They get added to a Slack workspace, they sign our code of conduct, and as part of that, we ask them "Why would you do this? Why do you care? What do you want to get out of it?" and the answers were fascinating; they were all over the place. There were a few common threads. The first one is they get a kick out of helping other people learn, for a number of reasons. Sometimes it's warm fuzzies, but more often, they find that they are challenged in ways that are really interesting when they are helping other people learn. So they learn a lot by helping other people learn.

Some people were very much in the "You know, other people mentored me, and now I wanna give back", and I don't actually know if they'll stick around; I don't know if that is as strong.

**Jerod Santo:** How long it will last with that motivation, yeah...

**Katrina Owen:** Yeah... Now, it might turn out that they actually get a kick out of doing it once they get started and they might stick around, but as a motivation, I'm not convinced that "I wanna pay it forward" is a really strong once. And then you have--

**Adam Stacoviak:** It's a good ambition.

**Katrina Owen:** Yeah... Yeah, I like it. I mean, it's admirable, but I don't know how lasting that is. The really interesting one, I find, is the people who are looking to move up in their careers and are realizing that a lot of the engineering leadership skills have to do with teamwork, communication, a better ability to receive feedback and to give feedback, and who are using this as a way to sort of practice those types of skills.

**Adam Stacoviak:** I think of it too -- like, especially with your focus on languages, and as you talked about the revenue options and just how this fits into the overall ecosystem of individual languages and getting involved in them, to me it makes sense that a mentor would be somebody who 1) cares about the community, but then 2) is somebody who's a leader in the community, and to be seen as someone to come and reach out to to get started, or to get involved, or invited, or introduced, whatever. That's the kind of person I see fitting that role. Is that what you see?

**Katrina Owen:** I would say that I would love to have a few people who are considered leaders in the language communities that we cover, but I think that most of the mentors will probably be much more at a sort of "in progress" part of their career, rather than in sort of a leadership position within a community, because to give good feedback in a language, you don't have to be that expert. You do have to have familiarity with the language, with the tooling, with the idioms, with the community, but you don't have to be one of the driving forces of that community or one of the known, famous names, or whatever... Because a lot of the basic feedback to get someone into the community is really, really fundamental things, like "Hey, if you're doing Go, you should use gofmt, and you should know how to write proper doc comments", and you don't have to be famous in order to give that feedback.

**Jerod Santo:** Well, I was thinking, from Adam's perspective, more the idea - and maybe this is just me interpreting what you're saying, Adam - not that these people are necessarily already experts or leaders in their camp or their language, but that this is an opportunity for somebody to establish themself, over time, as somebody.

**Adam Stacoviak:** Right, yes.

**Jerod Santo:** Like you said, maybe they're one step above a learner, which is all you have to be to be a great teacher.

**Adam Stacoviak:** They might be somebody who's like "I write blog posts often, or as often as I like to, I released the course, but I'm not really anybody. I need to get more well-known, or I'd like to be more well-known. I'd like to help more people", and this is one more way that they can take 5%-10% of their week and give it back, because [unintelligible 00:44:07.14]

**Katrina Owen:** [00:44:11.14] It might work, I have no idea...

**Jerod Santo:** Well, similar to the motivation of people who help other people in Stack Overflow, and a lot of them are -- I mean, it's gamified; I don't know if you're doing any gamification with the Exercism mentorship, but you know, it gives them the street cred over time... So they think that all that helping will eventually come back to them, and I think in certain cases it does.

**Adam Stacoviak:** Yeah, and if I can masquerade around -- [unintelligible 00:44:33.03] Exercism.io as a mentor, then for one... I mean, sure, I'm helping people, but I also get to have some notoriety, some clout, some abilities, some sort of super-powers... I don't know. I'm somebody there to help.

**Jerod Santo:** You're just there to masquerade.

**Adam Stacoviak:** [laughs] I'm there to masquerade...

**Jerod Santo:** Well, the other thing about it, which I've mentored or I've taught web development to people, so I've learned this very much first-hand - and you learn this as you begin to mentor other people - is that actually it's like a lifehack, because you're the one that's learning more than the learner...

**Adam Stacoviak:** Absolutely.

**Jerod Santo:** It solidifies, it questions things that you'd never questioned, because you have fresh eyes asking you things that you wouldn't have thought of in the first place... And then like you said, Katrina, is that you are honing your ability to communicate, empathize, and help other people, and that's useful in every walk of life.

**Adam Stacoviak:** Yeah, I see that. So what about the need for more mentors? Is there always a "Always hiring, always more mentors" kind of situation? Is there a term of service? What are they signing up for? How do they sign up? What's the process?

**Katrina Owen:** So there's a website that starts the process... It's mentoring.exercism.io. You are not committing to anything in particular when you sign up as a mentor. We hope to have enough mentors that everyone -- nobody should have to do more than an hour a week, say; we're still trying to figure out how many mentors does that mean.

We think that to handle the current load we need about 1,000 mentors. I think we currently have about 800. So we're falling down in certain tracks; we're falling down on giving feedback to some of the optional exercises, we're focusing on making sure that people get feedback on the core 15 or 20 exercises that we have used to define each track...

But yeah, we always need more people, and we want people to be able to go on vacation, or go on parental leave and not have to worry about giving feedback on Exercism during that time.

**Jerod Santo:** So we have a polyglot audience around here, so if you have specific tracks that you need mentors in... Like, if you're gonna say -- like, go ahead and name them out... Where do you need the most help, where somebody could have the biggest impact?

**Katrina Owen:** I'm gonna say Python is our most active track, by far. Not quite an order of magnitude, but it is probably 40% more active than the second most active tracks. Rust and Go and Javascript and Java are probably the other tracks where we are always desperate for more people.

An interesting thing is the niche tracks - if you know PL/SQL, boy, do I have work for you... [laughter] It's so hard to find people who have enough fluency with some of these more niche languages to actually step in and mentor... Some of those can be -- if you know a niche language and we have it on Exercism, you can bet that your help would be greatly appreciated.

**Break:** [00:47:51.18]

**Jerod Santo:** So Katrina, this rethink, this redo, this take two - we've talked about the new branding, we've talked about this new mentorship model and how you're making them official sign-up mentors, and then you also have the tracks themselves, which you've redesigned a little bit from the ground up... Tell us about what's new with the individual tracks, and then we'll get into how you went ahead and technically accomplished this.

**Katrina Owen:** So in some ways, the tracks are what have changed the least if you just look at them. The description inside the repo on GitHub - it;ll have the same exercises, it'll mostly have the same documentation... But we have fundamentally changed how we structure the track and how we lead you through it.

It used to be you would sign up to C# and we would give you one exercise, and then the next one, and then the next one, and after about 110 exercises, you're done. And if we add more exercises, you're no longer done, which is kind of frustrating.

It's frustrating for a number of reasons. The first is this moving goal post, where if we add more exercises and if you are feeling completionist, suddenly we've kind of ruined your day. The second thing is that there are a lot of exercises that go down little rabbit holes, or side explorations, or are all about a thing that you don't really need to learn about, or that you don't care about... And when we put everything linear, you kind of -- if you were one of these completionist types of people, you often felt like you had to do all of the exercises in order to get through the track, and that's not really helpful and also not really true.

When are you done with an Exercism track? Well, it's kind of when you are feeling fluent, you have that basic fluency and that ease in the language. So if you are done after 20 exercises, there's no real reason for you at that point to do 100 more.

One of the big learnings there came from role-playing games, where in a role-playing game there's this core track through the game, where you complete certain challenges and you participate in certain activities, and you can finish the game just by doing that core track... But along the way, as you complete challenges, you unlock all of these side-challenges that you can then go and explore, if you want to. So some people might do the entire game straight through, and other people might spend four, five, or eight times as much time going through all the little side explorations as well, and also finish the game... And there's not someone who didn't finish and someone who finished - no, everyone finished, just some people took a more scenic route, or went more deeply.

So we wanted to replicate that with Exercism, and chose to have -- for every track we choose a certain number, usually between 15 and 25 core exercises that are required in order to complete the track, and all of the other exercises come in as optional exercises that get unlocked as you progress through the core exercises. And each core exercise, if you're in the mentored mode, you need to get the core exercise approved -- you need to work with a mentor and get it approved by a mentor before you can move on, which is one of the reasons why it's so crucial that we have enough mentors, so we're not blocking people as they go. And then you always have a handful of optional exercises as well that you can play with as you're waiting for feedback, or to explore.

**Adam Stacoviak:** I love the idea of this path process, because there's times when I felt like the loser who didn't finish.

**Katrina Owen:** You don't want that.

**Adam Stacoviak:** No, I don't wanna be the loser.

**Jerod Santo:** Tell us more, Adam. For instance...?

**Katrina Owen:** None of us want to be the loser... [laughs]

**Adam Stacoviak:** That's a whole different show, Jerod. [laughter] But yeah, I like that; the scenic route sounds really cool, I like that.

**Katrina Owen:** [00:53:44.17] Yeah. One of the discoveries that I had as I was talking to the Rust team recently was that -- so they use Exercism when teaching their Rust Bridge workshops, and the math exercise... There are a bunch of little exercises that are mostly inspired by Project Euler exercises, so they're very math-heavy, and a lot of the people who go through the Rust Bridge find that incredibly intimidating... So one of my next tasks is to go through all of the tracks on all of Exercism and script PR's to make sure that a) their tag does math, so that you can just filter them away and not have to worry about them, but also that they're never on the core track; that they're always optional.

**Jerod Santo:** Another thing that we haven't talked about and think it's probably what we need to talk about next is the technical side of the rewrite. Now, anytime somebody wants to start a big rewrite, Joel Spolsky comes out of the closet and slaps you across the face before you do it... No. People pull out that old blog post of Joel's, "Things you should never do", which is a ground-up rewrite is like anathema.

**Katrina Owen:** Yeah, and he's right; and we did it anyway.

**Jerod Santo:** [laughs] Tell me more.

**Katrina Owen:** This is the same thing as with refactoring - you should almost always refactor, rather than do a rewrite, just because there's so much that has been encoded into the existing codebase, into the existing features, and that you're going to lose. In our case, we wanted to lose all of those accidental things. We really wanted to start from scratch. We had a much clearer idea once we had done those 8 months of exploration; we knew where we were going, and it had nothing to do with the existing site, which could be termed a prototype, but it did last for five years, so maybe not.

**Jerod Santo:** So yeah, you're excited to lose a lot of stuff... That being said, was it still a larger undertaking than you expected, or was it about what you were thinking?

**Katrina Owen:** It was about what I was thinking, actually. The initial rewrite to get the basic features that we had actually sat down and thought, "Gee, this would be a good feature to have", rather than just kind of accidentally slapping together, like the old site. That didn't take very long; the basic work was done in about six weeks. And then you have the other 90%. [laughter]

**Jerod Santo:** Exactly.

**Katrina Owen:** And so that turned out to be -- the biggest problem wasn't actually writing the features, it was that we all have day jobs and other businesses that we're running, and all of that... And there were family crises, people ended up in hospitals... I mean, for a number of reasons, there were six months there where we got nearly nothing done.

**Jerod Santo:** People ended up in hospitals due to this rewrite?

**Katrina Owen:** No, thank goodness... No.

**Jerod Santo:** [laughs] That's how it sounded.

**Adam Stacoviak:** I'm like, "Geez, we're really [unintelligible 00:56:39.10]"

**Jerod Santo:** You have to take breaks...

**Katrina Owen:** Yeah, totally... Vacations. Yeah, so the rewrite was about as much work as we expected, but it took much longer because we had unexpected life things happen.

**Adam Stacoviak:** Maybe a recap [unintelligible 00:56:54.00] of like "What's the architecture?" So the site's in Ruby, you've got a CLI that's written in Go, that's been rewritten in Go... There are some other aspects... What's the breakdown of the architecture?

**Katrina Owen:** Yeah, so the site itself - it used to be some cobbled together Sinatra apps, multiple Sinatra apps. Some of them were all mounted inside the same app, some of them were running separately, along with a Ruby gem that I updated more or less every day to get all the changes to the tracks in... It was a complete mess, and it was also nearly impossible to contribute to, because it was all custom. Nothing followed any sort of conventions, and Sinatra is fairly well-documented, but it's really flexible... So there was not good jumping in point, even if you were familiar with Ruby, to help out with the website.

[00:57:55.24] So for the rewrite we chose Rails, which is still Ruby, but it's a framework that is much more widely used than Sinatra, very well documented, and it's something that everyone on the core team is familiar with... So it was a really rapid -- it was something that we could do very quickly, the rewrite, whereas if we had chosen a different technology, if we had chosen to go with, say, Clojure or Python with Django, or something like that, we would have had to ramp up a lot... So even if maybe Django is more common or more familiar than Rails is in general, it would not necessarily have been a great choice for us.

One of the really interesting pieces was figuring out how to get all of the changes from 45 different language tracks into the site, without having to make individuals deploy every day. One of the problems I ran into was I was the only person deploying the old site, and people would be like "Hey, so I've made this change to the Elixir track, and I'm not seeing it on the site." I'm like, "Yeah, that's because I forgot to deploy." [laughter] Or if I got sick -- I got surgery last year, and for a few days there I was not deploying Exercism.

So there were all of these things where I was a bottleneck, and we needed to not have me be a bottleneck, or not have anyone be a bottleneck. So we did quite a lot of work to figure out how do we architect this into the site, where we have webhooks that are -- so we're listening for webhooks from GitHub to know when there are changes, and then we schedule an update so that the server's pulling all the new changes... That happens usually within moments of the new change going into master on the various tracks. And also, for the website copy, and that sort of thing.

**Jerod Santo:** That sounds like us. We have our transcripts and our show notes as two separate repos on GitHub, and we listen for webhooks on specifically pushes to master, that then our CMS goes and grabs the updates and makes sure that the website itself is updated immediately... And it even surprises me how fast it happens. By the time I can write the little thank you note in the comment, it's already live.

**Katrina Owen:** That's awesome.

**Jerod Santo:** It is cool.

**Adam Stacoviak:** I like how you say "It's probably already live, because by the time I comment, the webhook has already been caught, and--"

**Jerod Santo:** I always add a "probably" in there, because there's that outside chance that something failed this time and it's not live...

**Adam Stacoviak:** It's your insurance.

**Jerod Santo:** It's how I hedge.

**Katrina Owen:** And we have been known at GitHub to drop the occasional webhook... I'm just saying.

**Jerod Santo:** [laughs] I didn't say it. You said it, not me.

**Katrina Owen:** I said it. I'm on the API team; it's my fault when it happens, you can blame me.

**Jerod Santo:** It's your fault. I'm gonna look you up next time. [unintelligible 01:00:47.00] the webhook...!"

**Adam Stacoviak:** Correct me if I'm wrong... I know we're still here in the technical details, but I'm kind of hearing some insights into what you seem to be doing - you in particular, Katrina - is like, you've been excited about this, it's been a long road, you received and achieved product market fit early on, you had to kind of work back from brand, and stuff like that... But it sounds like what you're in the motions of now is like incrementally removing the mundane burdens that take away the joy, to give you the joy back so you can lead.

**Katrina Owen:** Yeah, that's the biggest challenge right now... Now that the design -- it feels like we're in the direction with the usability of the site, the user interactions, the design, all of that... We need to make sure that the drudgery, the janitorial work is not something that someone is stuck with, because as soon as someone is, then it falls over, it falls apart. So that's definitely one of the -- automation is one of the big key pieces that I want to get better at, both in Exercism and the product itself. Like, how can we automate giving mentors hints about what would be useful to talk about in this particular exercise? We can do a lot of static analysis, because we have five years' worth of data about how people make mistakes in this particular exercise, so we can give hints there.

**Adam Stacoviak:** [01:02:09.27] Is that something you spend a lot of time on yourself though, that thing in particular? Giving hints to mentors?

**Katrina Owen:** No, not at all.

**Adam Stacoviak:** What areas are you trying to automate that would remove burden from humans to deal with janitorial work, as you mentioned?

**Katrina Owen:** So linters and automatic fixes to the various tracks. One of the things -- each of the tracks needs to adhere to certain conventions, otherwise it won't work on the site, so we're adding a huge number of various types of linters, and auto-formatting in config files, and making sure that -- so when you merge a mentor bio, we have CI that checks that if you wrote "GitHub profile", you spelled GitHub correctly...

**Adam Stacoviak:** Oh, boy...

**Katrina Owen:** If you have a link to a website, it has a protocol on it. So lots of little details that keep tripping people up and making people do work over again, or... We find people who are manually reviewing and keep asking for the same fixes every time; we're adding linters to that. We're adding GitHub apps, specifically using the GitHub API to help make it easier to add more maintainers to different tracks.

Right now, the people who are maintaining the Javascript track have a new contributor who's been around consistently, they're enthusiastic, they give great feedback, they do good code reviews, they contribute consistently over time and are really great to work with - we want to add them as a maintainer on the Javascript track. Right now, the only person who can do that is me, because I'm the only org admin on the Exercism work on GitHub, and I don't actually wanna give other people -- well, aside from Jeremy at Thalamus; he's also work admin... But I don't want to be giving individual maintainers access to the admin parts of the Exercism org... So having an app that can let maintainers add other maintainers to their own tracks, but nothing else, is something that would reduce a significant burden.

Another thing is we have a core set of problem specifications... So it's a description of an exercise, but without a language-specific implementation... And then various tracks take this specification and turn it into an implementation by adding a test suite and making sure that the readme has what it needs for that language.

When we add a new problem specification, it would be really nice to have an issue open on every track that doesn't have that exercise yet, to let them know... So things like that.

Or when an exercise changes in some way, to have an app that will open issues everywhere where it is implemented, in all the language tracks where we do have the exercise, to say "Hey, take a look at this change, see if you need to do anything to update."

**Adam Stacoviak:** I can tell you that automation on that - we've done a lot around here - a CI is important. If we had to wait for Jerod to be around - he's around a lot, but if we had to only rely upon Jerod to deploy, it would be a pain in the butt. So you've got a CI in place, you've got other automations in place to remove yourself as the barrier to allowing others to the progress...

**Katrina Owen:** Yeah, I think that's crucial in any open source work as soon as there's any sort of volume.

**Adam Stacoviak:** Yeah.And even, like you mentioned, issue automation, and stuff like that - that's key too, because you would forget the checklist - "Oh, I should go and let these other tracks know this change." If you can automate the things that make sense, the things you've done 17 times, you should probably automate that.

**Katrina Owen:** Yeah. I still have to automate the release process on the CLI. That's one thing where I keep -- I keep doing it, and I keep telling myself "I just have to write the script that will upload all the binaries and everything together", and I keep not doing it.

**Adam Stacoviak:** [01:06:06.25] Well, there's always something to do, that's for sure; it's just a matter of "Is it something I should do today?", it's not so much "Should I do it at all?"

What about the future? It's been five years, we've been on this journey with you, obviously we care deeply about you and the mission you're on, and everyone involved... What's the future? You've got good branding behind you, you've got good design behind you, you've got clear, measurable goals to reach towards? What's the future for you?

**Katrina Owen:** I'm hoping that in the beginning of 2019 we'll be able to get some amount of revenue, and the first thing I wanna do with that revenue is hire someone to help [01:06:45.24] mentors, help work with the mentor community, figure out what tools are necessary, figure out what features are missing for mentors on the site, help with code of conduct violations, help mediate when people are unhappy, all of those sorts of things, and I think having a specific person whose job it is to be the mentor manager I think is the most critical thing that we're missing right now.

And then it would be lovely if Exercism over time could start paying the bills for some of the people who are putting in very large amounts... Especially in the areas where open source usually doesn't cover it... Product design work, user experience design, any of the business stuff - figuring out how to reach out to partners and sponsors, or doing accounting stuff (it turns out you have to do that).

So being able to pay people to do a lot of those pieces would be lovely. It would be amazing if we could hire people on short-term contracts to solve specific problems that aren't being addressed quickly enough in just the day-to-day open source things.

And then I would love to see a way of really rewarding the people who are part of the Exercism community and who have given a lot to Exercism... I don't know what that looks like, whether it's custom swag, or do we invite people to a summit, or regional summits and have them share experiences or what, but I'd love to find a way if we start getting some sort of revenue or funding to really acknowledge all of the work that people have put into it.

**Adam Stacoviak:** I'm asking a question that might be a little off-color, to some degree... We'll see how you receive it... But what happens if at the end of 2019, if you don't hit to a point where you have sustainably income, revenue coming in... You know, revenue is one thing, but sustainable revenue... So you're still kind of proving -- you're in that space where you have some runway to generate something that creates revenue.

**Katrina Owen:** Yeah.

**Adam Stacoviak:** So if over the next year it seems like the future of Exercism requires some level of revenue - I'm not sure if it needs to be large amounts, but enough to sustain it... Like, what happens if you don't get there?

**Katrina Owen:** I don't actually know. I have thoughts about it, but if we do end up in that situation, I might completely change my mind about how I feel about everything.

But my current thinking is it is absolutely possible to tie off Exercism at some point and keep it running with minimal maintenance, as long as we have enough mentors. That's kind of the key piece. If we can get all of these tracks into a reasonable state, and it's a basic feature set, but it does what it needs, and we have enough mentors on a rolling basis, then I think we could let Exercism do its thing without a huge amount of day-to-day effort.

The thing that makes us want to look for revenue is that we think that there are so many other opportunities to grow Exercism beyond what it is right now, and that would require revenue.

**Adam Stacoviak:** [01:10:22.02] Yeah. Well, let me just say that I asked that as a devil's advocate approach, and less like I actually think it's gonna happen... More like I wanted to know what you would do if it did. I like to prevent it, you know? I think the listeners of this show, the people listening to this can say "Hey, this is obviously cool enough and needed enough that if you work somewhere, you can see some benefit for your company to Exercism, or whatever, then reach out and talk about different ways to work together... Or get on some sort of mailing list where it's like, "Hey, if you're interested at all about the future of Exercism, here's how you can help out", whether it's sponsorship, or some sort of products you'll have in the future, whatever. I just wanna raise that awareness to people listening now, that if this is interesting to you, I'm assuming, just reach out, right?

**Katrina Owen:** Oh yes, please. My e-mail address is on my GitHub profile, so I'm always easy to find.

**Adam Stacoviak:** Well, we're tailing off here... What else can we cover before we say goodbye? What else have you got? What's on the horizon? Anything that people are not aware of? Something fresh and brand new that no one knows about.

**Katrina Owen:** Fresh and brand new... It's coming so soon that you might blink and it's already there.

**Adam Stacoviak:** That's right. If it was here next week, it'd be cool.

**Katrina Owen:** It would be cool. Teams features. So the old site had some sort of notion of teams, where you could kind of group people into a team and you would get a custom activity stream for everyone who was in that team. We had to remove that for the new site just to be able to launch, because we were under a bit of pressure to actually get the code out the door... And we've been working on redesigning, and actually thinking through how teams should work.

We've completely rethought a very basic Teams functionality, which we will be launching very soon under teams.exercism.io, I believe... I thought it was gonna be out by now, so literally, it might be out in the next couple of weeks.

**Adam Stacoviak:** Oh...! Go hit refresh.

**Katrina Owen:** There you go.

**Adam Stacoviak:** Well, Katrina, it was great catching up with you. Like I said, we're certainly big fans of yours, and we'll always be here for you and love to hear your journey. I'm bummed that it's been somewhat that long since we've talked, so maybe let's shorten the runtime between next time.

**Katrina Owen:** Let's do that. This has been great. Thanks so much.
