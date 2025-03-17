**Adam Stacoviak:** Can we go back as far as you'd to? Because I kind of want to know how we got here. I go to your homepage today, Beyang, and I see "Industrializing software development AI agents."

**Beyang Liu:** Yeah.

**Adam Stacoviak:** And that was not at all the headline, even a few years ago. And I feel Sourcegraph has taken 15 years to become, not so much successful, but -- it's been 15 years for you. And I would say seven of those years may have been really hard years. And I kind of want to just not let the people coming to Sourcegraph today think it's been the easy road for you. Because I kind of want to know the permutations of code intelligence to AI agents... How did we get here, for you?

**Beyang Liu:** Yeah. Yeah, so first off, I think we're in year 12 right now. So we've definitely been around...

**Adam Stacoviak:** Okay. I gave you three. I gave you three.

**Beyang Liu:** Yeah, yeah. We're working our way up to 15. I think we'll be here for the next 50 years, so it's still early days. Actually, it's funny that you should mention industrialized software with agents and how that's kind of a shift... I don't know if you have show notes that you can link to, but I can link you to a version of our seed deck back in April, May 2013, when we were pitching the company for the first time... And it has this phrase, industrialized software engineering. And so that part of the mission has stayed largely constant.

The high-level goal for us was really about basically making professional software engineering as enjoyable and as efficient as hacking on your side project is... That was really the motivator for us in starting this company. It was the delta between every programmer starts from a point of love or delight, at some point. The reason that you get into programming is there is this joy of creation, this spark of creation that everyone experiences at some point, whether it's at Hello World, or when you first get your first working program to run, and it's cool, and it does something, and you share it with your friends.

I think everyone who's working as a programmer is, to some extent, trying to chase that original high; that's the dopamine rush that makes the job joyful. And it also maps to doing useful stuff. Like, you get joy out of shipping features that impact your users' lives, and actually get used.

But then you contrast that with the day to day of a professional software developer, most of whom are working in a large existing codebase that they didn't write themselves, that is the product of the contributions of hundreds or thousands or tens of thousands of shared hands. And that experience is very different. And what we wanted to do is solve a lot of the problems that create toil for professional software engineers in large production codebases, and make it so that it's possible to focus on this creative part of the job.

\[00:07:49.14\] So the initial way that we solved that with the technology landscape at the time was focusing on search, because that to us was the thing that we spent a lot of our time working on. We got our career started out at Palantir, but Palantir by extension meant very large banks and enterprise codebases, because that's the team that we were on. And so the core problem there was just figuring out what all the existing code does, and figure out what the change you need to make, how that fits into the broader picture, and what sort of dependency or constraints that you're working with. And so that was the first thing that we brought to market.

AI was always sort of in the back of our minds. I had done a concentration in machine learning while I was at Stanford. I was actually -- Daphne Kohler was my advisor, and then published some research there in the domain of computer vision... In those days, the state of the art models weren't nearly as good. This was pre-ChatGPT, pre-Transformer, pre even deep neural net revolution. So in those days, the conventional wisdom was neural nets worked in the '80s for limited use cases, but they're mostly toy use cases, and real machine learning engineers use support vector machines, and boosted decision trees, and things that. So it was a very different world.

We're always keeping our eye on the evolution of this technology, and we actually started integrating current large language model embeddings based signals into the search ranking starting in early 2022. And so that was something that we'd kind of been playing around with, and then once ChatGPT landed, we were actually pretty well situated in terms of our understanding of the technology to be able to roll that into our platform.

We launched the first sort of context-aware chat, chat that pulls from the context of your broader codebase, and pages that into the context window and uses that to steer the generated code or the question answering that the LLM provides for you. And that helped launch us into the age of AI, so to speak, because that was -- I think now it's table stakes, right? Like, context-aware code generation. Everyone has that, because everyone realizes that that is absolutely essential for making AI useful in the enterprise. But we were first to market there, and that helped us establish our presence inside folks Palo Alto Networks, and Leidos is a big government contracting agency, and Booking.com, the largest travel site in the world... All these very large enterprises with complex coding needs that have adopted Sourcegraph and our AI coding system, Cody, as their preferred essentially platform for accelerating, automating, industrializing software development.

**Adam Stacoviak:** When you say industrializing, what does that mean to you? I think I understand what that means. What does it mean to industrialize software engineering, practically?

**Beyang Liu:** Yeah, that's a great question. This word industrialize, it's something that we've gone back and forth on, because --

**Adam Stacoviak:** It sounds cool. I dig it.

**Beyang Liu:** I mean, I it, too. I think if you go back to 2013, I think there were a lot of -- a lot of people read sort of negative connotations into it... Like, "What are you trying to do? Turn every development org into a feature factory?" Because that's what I think when I think of the Industrial Revolution.

**Adam Stacoviak:** Sure, yeah.

**Beyang Liu:** These days it's a little bit different, because the whole world is talking about reindustrializing, with all the geopolitical shifts going on in the world, the macroeconomic shifts... I think a lot of people are thinking about "How can we build the gigafactories of the future, and restart that process, that kind of tech tree exploration in the West?" So now I think it carries a very different connotation. But what we meant by it and what we mean by it today is really -- it started with this observation... When you think about software engineering as an industry, software engineering is actually quite unlike every other industry in the world, in one specific dimension, which is every other industry, as you scale production, you get economies of scale. Like, you build a larger factory, you can produce the next incremental thing that you're building at a cheaper cost, or more efficiently.

\[00:12:01.08\] So things get better and cheaper as you scale up. In software engineering, it's the exact opposite. In fact, at best case, they asymptotically approach some upper bound. Worst case - and I think the reality in a lot of organizations - productivity goes down after you scale past a certain point. And as a consequence, every piece of software that becomes successful very quickly becomes a victim of its own success. Because if your software gains users and gains revenue, it will also acquire feature requests and bug reports... And as a consequence, you'll hire more developers, you'll increase the number of contributors to the codebase, the codebase will grow over time, you'll lose that cohesiveness of vision... And then it's a frog in boiling water approach. Every incremental day you don't really notice it, but one day you wake up and the codebase is a mess, there's all these constraints, it takes forever to get a simple feature across the finish line... You wake up and now you can't get anything done. And there's kind of two consequences to this that are very salient.

One is that means that the vast majority of software that actually gets used day to day sucks... Because any -- again, any successful piece of software with a lot of users becomes this. So almost definitionally, any piece of software that you're using, you're using it because it was a successful piece of software. But by virtue of its success, it can no longer move quickly. The developers building it can no longer move quickly and build new things and keep that up to date.

The second consequence for this is the disruption cycle actually occurs much more quickly in pure software than in any other industry. Every other industry, we talk about the innovators dilemma. It's like, okay, yeah, I get it, every once in a generation something comes along down the line that shakes the foundation of this very industry, and then you get a whole new generation of companies that emerge. In software, it's literally every 5 to 10 years that happens naturally, because whatever -- you can literally see, in the past five or six years alone we've gone through multiple generations of accounting software for small businesses. Every couple of years there's a new YC company that basically does the same thing, but it's "Oh, we're going to do it better, because the old thing sucks now."

So this disruption cycle -- there's something more than the innovators dilemma in software disruption. It's this kind of phenomenon of as the codebase grows due to its success, it falls victim to the very forces that made it successful, because you're going to grow the number of lines of code, you're going to add more functionality, you're going to have a hard time preserving the cleanliness and sane architecture of the original codebase. And then at some point you can no longer make forward progress. And then some two-person startup comes down the line and does it a lot better, and then eats your lunch.

**Adam Stacoviak:** Well, they eat your lunch for a bit and then you acquire them, or they totally eat your lunch and they destroy you, right?

**Beyang Liu:** Yeah. Yeah, exactly.

**Adam Stacoviak:** Because that's sometimes what happens, too.

**Beyang Liu:** Exactly. So that's what we mean by industrialized software engineering. I think if we can tackle enough of the toil, and also give your senior technical leadership a lever to project their vision for how the architecture should evolve, we can actually get software as an industry to be a real industry. actually have economies of scale, where things can actually get more efficient. Imagine that. It's mind blowing. It's like, oh, things actually get more efficient as the codebase grows? I think that's just very antithetical to the way people think right now, but I think it's certainly within the realm of possibility, given modern AI in conjunction with all the other code-based understanding technologies that we built over the years.

**Adam Stacoviak:** \[00:15:57.22\] So given your history with machine learning way before it was artificial intelligence or AI, way back, and you're here now... You've iterated, you've sort of stuck to your gun, so to speak, of industrializing, or solving this complex codebase problem from the beginning, with search now to agents with AI... How did you know? What tea leaves did you read? Or were you just super-passionate because of your time at Palantir? Because they obviously had complex codebases, and you were "Well, this sucks. \[unintelligible 00:16:35.13\] solve this problem. I'll just keep solving it over and over and over until we reach critical mass."

**Beyang Liu:** Yeah, I would say -- I'm not going to say that I have the ability to kind of see the future. I'm definitely not going to claim that I could see how the landscape of AI would unfold from the vantage point of being in 2013. There's certainly a lot here that frankly I just did not anticipate.

**Adam Stacoviak:** That's 12 ago, so...

**Beyang Liu:** 12 years ago is a lifetime, and the technology was very immature and different back then. But what I did know, I think Quinn and I both felt deeply was, number one, we're both really, really passionate about programming and building software... That seemed to us the biggest leverage point. And it was really a combination of "Hey, this is a craft that I care deeply about, and I could see myself spending the rest of my life refining it, and moving it forward", because it does seem -- it almost rises the level of being something spiritually fulfilling. If you want to get philosophical, there's this whole it from bit philosophy of "What does it mean to exist?" and "How does information relate to physical being?" and all that. And you can get into the whole discussion of Turing completeness, what does it mean, how does it relate to our theory of mind, and the soul... Anyways, there's kind of --

**Adam Stacoviak:** Do you have thoughts on that you want to share?

**Beyang Liu:** We can get into it... I don't want to go down that rabbit hole just yet. But the point I want to get across here is that we both feel that this is a really cool thing to be working in. And that's one of the things that we chose this path as the professional path that we want to pursue.

The flip side of that was our experience at Palantir showed us that the pain that we felt in trying to practice this craft in a professional setting is felt across the entire industry, and it gets exponentially more critical the more impactful your software is. Because the more impact your software is driving, the more users and revenue it has, or it's generating, and the messier the codebase is. So it was kind of the marriage of these two things. It was personally fulfilling to be thinking about advancing the state of this craft that you feel a deep personal connection to, and then knowing that it's tied to just this huge amount of potential economic impact.

And so there, our thinking was like with the technology that we have today, if we focus on the fundamentals, building core technical capabilities, and then rolling those into delightful product experiences, there will be a huge company here that we could spend the rest of our lives working on.

**Adam Stacoviak:** Fun. I think it's fun, man. Wow. To have seen - not the future, because you said you're not a clairvoyant, you're not a future teller...

**Beyang Liu:** Yeah.

**Adam Stacoviak:** ...but you can certainly see the direction it's going. And you said, "I'm willing to keep doing this problem, keep solving this problem, for the rest of my career."

**Beyang Liu:** Yeah.

**Adam Stacoviak:** \[00:19:44.02\] Wild. Okay. And now we're at the age of literally AI agents... We can essentially deploy these agents similar to the way you would deploy a cron job, but now they're smart. They're so much smarter now, not just a dumb cron job that requires logging, and metrics, and observability, and failures, and fallovers, and system crashes... Now you've got agents that can actually do some cool stuff. You began with search, now you're here... What do you think it is that is attracting folks to the Sourcegraph platform today? Is it the promise of what AI can do deployed at scale?

**Beyang Liu:** I think there's a couple of different dimensions here. I think the most direct thing that attracts people is that we are solving for the challenges that developers face inside production codebases. So contrary to a lot of the other AI coding things that you see, our focus has less been on the indie developer who wants to show off a cool Flappy Bird clone on Twitter... Which, to be frank, it's really, really cool.

**Adam Stacoviak:** So cool.

**Beyang Liu:** It's really cool that you can one-shot that now. But our mission, the thing that gets us out of bed every morning is really to enable the software that drives the world to be built much more quickly and much more robustly. And so that's the thing that we're targeting, and that's the reason why the customers that have chosen Sourcegraph have chosen us... Because they have large, complex codebases and they appreciate the other technologies that we bring to the table, that help us be effective in that setting.

And that brings me to this kind of second dimension, which is - our technical strategy here is transformers, LLMs, AI... That's all really useful, it's game-changing technology, but we think that there is a step function more capability and power you can unlock by combining that technology with some of the other technologies that we've built around information retrieval, code search, mapping out the reference graph and the knowledge graph of the code... We think these technologies are highly complementary. In some sense, they represent the two sides of what traditionally has been called artificial intelligence. Before the current incarnation of what AI means, there was this classic debate between the formal methods, like context-free grammar, Chomsky kind of party of artificial intelligence, where everything's kind of rule-based, and there's some philosophy behind it that these grammars emerged from the mind of maybe some higher order being in our goals to discover the platonic ideal, the hidden structures that connect all these things... You know, very symbolic-based.

And then on the other end is the statistical approach, which is like we're not going to be opinionated about defining down a complete set of axioms or rules for describing what language is; we're just going to try to model it statistically and learn it from the data. I think the age we're living in, everyone sees clearly the limitations of the Chomsky approach, and it's very apparent to everyone the advantages of the data-driven approach now, with modern technology. But I think there's still actually highly complimentary. There's a bunch of productivity-oriented use cases that essentially combine a knowledge graph or some sort of symbolic representation with generative models. So you have the generative model providing some notion of reasoning, but you combine that with a symbolic representation to be very precise about how things are connected. And the composition of those two yields way more useful use cases than if you were to just use one or the other.

**Adam Stacoviak:** Maybe, for context, give me, if you can, give me a picture, if you can paint a picture of a day in the life of an engineer working at one of these large-scale enterprises that has this complex codebase issue, and you're removing their toil. What are the things that they have access to as a developer in this kind of ecosystem? Let's say Palo Alto Networks, for example; you mentioned them... I know they're a logo on your homepage, so maybe you can use them... Pick anybody. I don't care if it's them or not. Somebody. Give me an example of a developer or an engineer on a team like that. What kind of tooling do you give them or do they have access to when they buy Sourcegraph, essentially?

**Beyang Liu:** \[00:24:24.07\] Yeah, so the equivalent of a day in the life for an engineer is what does it take to take a feature from idea all the way to getting into production? It's like one whole loop of the software development lifecycle, which we kind of model as this two loops that are connected. There's kind of an inner loop, which is your kind of read/evaluate print loop in your editor, where you're kind of quickly iterating on the idea, and making it come together... And then there's the outer loop, which is sort of like the ops loop. You plan out the feature, you actually write it, you push it up, it gets reviewed, it needs to pass CI/CD, it gets rolled out, and then after it gets deployed, you've got to monitor and observe it to deal with any kind of production bugs or things that emerge.

So a day in the life of an enterprise developer or a developer working in the context of a very large existing codebase, it's kind of like you have an idea for a feature - what's the first thing you have to do? Well, the first thing you have to do is you have to go and acquire a bunch of context about the existing codebase. So in the pre-Sourcegraph world, what does that entail? It's a bunch of grepping for stuff in your existing repository, maybe you've got to clone down a couple of additional repositories if you're very intentional about it... Sometimes people just don't bother, because they're like "Ah, it's too much work. I will just assume that this thing that I'm building doesn't exist yet, so let me just go build it." Sometimes it involves pinging your colleagues for help. So if you're onboarding to a new part of the codebase, or you're a new engineer, you're going to go bug the senior engineer who was around when that code was written, who's very short on time, and kind of crotchety because there's like five other people you who have asked them a very similar question in the past two weeks... So that is a whole kind of tooth-pulling exercise. And that can take you, I don't know, weeks, even months... In some of the codebases that we worked in while we were at Palantir, it'd literally take months just to orient on "Hey, this is the part of the code that actually needs modifying." And there's a bunch of false starts along the way, because you start writing something only to realize "Oh, you should be modifying this other piece over there."

Okay, so that's just getting to the point where you're ready to start writing the code, right? Once you start writing the code, you're in your editor, most of the code you need to write is probably boilerplate, or what we call boilerplate plus plus. It's not exactly something you can copy and paste, but you basically want to find an existing example of using that one particular API that you need to use. And then you'd kind of turn your brain half off and just pattern-match against that example, because that's the reference point. So provided you've found that example, then you can pattern-match against it. If you don't find that example, then that's kind of this arduous "Hey, let me discover how to properly use this API, because there's no docs on how to use it." And someone's probably done this probably like a dozen times before, but I've never done it before, so now I have to essentially go and rediscover how to do that.

So you go through that exercise, there's multiple rounds of kind of iterating on it, and you finally get to the point where "Okay, I'm ready to push it up." You push it up to review... Maybe there's multiple stakeholders that have to sign off on on the change. There's the people you work directly with, maybe that's part of your code review process, maybe you also made some modifications to some other shared libraries, and now other teams that own that code have to also sign off on it...

\[00:27:57.29\] A lot of times those other teams don't necessarily care too much about the change that you're trying to land, because they have their own priorities, and they're incentivized to work on those, and not anything else that happens in the company. So who knows how long it'll take to get all the stakeholders to sign off on that change. Or maybe you realize through the review that you get from a senior engineer that this whole approach was wrong, because you didn't do enough search and discovery.

So it's almost like this game of chutes and ladders. You have a potential to shoot all the way back to scratch; you just wasted a week, a month's worth of work because he built the wrong thing. Best case, it takes a lot of time getting people to approve it, you finally get it approved, it rolls out to production, maybe it breaks something, maybe there's a test that breaks that you didn't catch locally, and so on and so forth... Once it gets into production, there's a long tail of issues that could arise too, in terms of it triggered some bug, or maybe there was some security vulnerability that got introduced... Anyways, I don't have to sketch this out, it's already painful just describing this.

**Adam Stacoviak:** I wanna quit right now. I'm like "Gosh... Save me."

**Beyang Liu:** Yeah. And this is just a simple feature. It could be the simplest thing, like center this div, or add support for this authentication protocol, or whatever. And most of your time is spent not on thinking about the end user problem and mapping that to the algorithms and data structures that you can use... Like, that's the fun part of the job. If I could do that all day, every day, I would do that all day, every day. But most of it is spent on box checking, writing boilerplate, finding answers to questions that you know have already been answered many times before...

And so Sourcegraph essentially targets all the kind of critical pain points and slowdowns in that process. So in the planning and search and discovery phase, that's where people use a lot of our code search functionality; or now we kind of have a deep research for your codebase feature that's built into the web application, where you can ask our AI a question about the repository, it will go and do a bunch of searches and file readings on your behalf, and print out what is usually a pretty reasonable summary of the relevant files to read, and how those fit to the tasks that you're trying to accomplish.

So automatically, that shortcuts you from having to have and wait on all these conversations with humans that -- let's be honest, developers as a collective group, we're not the most personable or affable people. I mean, many of us are, but speaking in terms of averages, we tend towards introversion and spending time with our computers. That's why we're doing what we do, right? Plus, even the ones that want to help, if you've answered the same question from three or four different people in the past week, you're at the point where you're like "I just want to do my freaking work. I don't want to have to deal with any of these other things", even if they're reasonable requests. So we can shortcut that process and just help you figure that out yourself through a combination of search and question answering.

Then within the editor there's all this stuff that reduces to boilerplate plus plus, which is like in the sweet spot for what AI can do. So you tag in the relevant file, or you ask it to do a search for the relevant code snippets on your behalf, and then ask it to generate code, it generates the code, you can refine that in the chat window, apply it into the file... And that is just such a -- it adds value in a couple different ways.

The first is the raw time saved, because you don't have to manually type out all the characters for that boilerplate plus plus. The second thing we've noticed is that it kind of changes the psychology a little bit, because it keeps you in flow state more. If you don't have to page out all the working state in your brain, because now you need to go down this rabbit hole and complete this side quest to get your feature built, if Cody can essentially do that for you, or even get you 90% of the way there, you essentially don't have to page out the context for doing the main thing. As a consequence, you can kind of remain in flow state for much longer; you don't have this context switching that is very destructive. So that is where we probably see an insane amount of productivity boost.

\[00:32:17.06\] I think the number that Palo Alto quoted at us, using their own kind of internal metric or proxy for developer velocity - depending on which number you use specifically, it's between 40% and 57%, which is a crazy speed-up; that's a game-changing speed up. And it turns out it just makes the job more fun too, because you don't want to spend all your hours writing boilerplate or pattern-matching against stuff that's already written. You want to get to the fun stuff of the job, which is really thinking about the user experience, and then the underlying algorithms and data structures.

Once you push things up to review, what we built in collaboration with a couple of our customers and is now in early access - and by the time this is released, we'll have open access for it - is a review agent. So this is code review that kind of understands how your organization does code review. So the idea here is, one, we want to automate the process of code review, because there's a bunch of comments that humans don't think to leave, or just, they don't get around to leaving. There's the old adage, if you put a push up a 10-line pull request, you get 10 comments. But if you push up a 10,000-line PR, you'll just get a rubber stamp "Looks good to me", because no human...

**Adam Stacoviak:** It's too much.

**Beyang Liu:** Yeah, it's too much. It's like "Well, what else am I supposed to do today, other than review this PR? I've got a life to live, I've got work to do." Well, an AI can just sit there and spend the time to surface a bunch of common things that you as a human, it's probably a waste of your time to check. All this stuff is automatable now with modern LLMs. So we want to do that.

There's also kind of a psychological component here, where we don't see our code review agent as being a complete replacement for human review yet, but it's at the point where if it leaves at least a first pass of comments, number one it allows you to you as the author of the change to kind of iterate quickly against that, and also it incentivizes the reviewer to go in and do a more thorough review, too... Because the comments kind of reflect a summary of the change itself. And just having a comment exist on the PR, it just makes the task seem already halfway done.

**Adam Stacoviak:** Momentum.

**Beyang Liu:** Yeah, momentum. It leads people to quicken the review cycle, too.

**Adam Stacoviak:** Psychology, baby. I love that.

**Beyang Liu:** Yeah. It's a combination of like if you introduce efficiencies, you also get these nice second-order psychological effects that further speed up the development cycle.

**Adam Stacoviak:** Right. Especially after a few cycles of this, you begin to gain some trust for the system, let's just say. I don't want to anthropomorphize this thing, but we tend to. Sometimes we even say "please" or "thank you" to our agents... Which is cool, whatever; you do your thing. You're just wasting tokens, basically...

**Beyang Liu:** Yeah.

**Adam Stacoviak:** But you begin to trust it. So it's like "Well, I at least know I've got to start somewhere." And so this analysis of the code review makes me feel like, even if I only had to do 10%, it's better than 100%, because now I can actually do my job today, I can do the two meetings I have planned, and actually potentially get a review in to potentially get this into production. And that's a great thing.

**Beyang Liu:** Totally. It provides -- it's almost like a smoother on-ramp. There's like an activation threshold you have to get beyond to get started on a particular task, like in this case code review... And without AI, it's like "Oh, I'm dreading this, because I need to get over that threshold." Now we can do the first one or two steps, and then that kind of leads you into -- it's the same thing as how some writers, they say making a mark on the page, writing a...

**Adam Stacoviak:** Anything.

**Beyang Liu:** Yeah. Anything.

**Adam Stacoviak:** A date...

**Beyang Liu:** \[00:36:10.20\] A very bad first draft, that's just like god-awful... Or if an artist's just drawing a squiggle on the paper, it kind of unblocks you. It gets you past this blank slate mental block that I think a lot of people suffer from, especially if it's a task that you associate with toil, which I think a lot of people do.

**Adam Stacoviak:** Daunting, yeah. It's like "I can't even do this." I've been there. I've definitely had to do some code reviews and I was like "Yeah, rubber-stamp that thing. It looks good."

**Beyang Liu:** Yeah, yeah.

**Adam Stacoviak:** You know, "Let's just -- let's test in production." Right?

**Beyang Liu:** Yeah. It's like, "You wrote a lot of code. I think you probably understand this much better than I do. Let's just -- we'll say it looks good, and then we can both get on with our lives." I think some version of that conversation happens all the time inside enterprises, and it happens out of necessity, but it's not good that it happens... Because you have reviewing standards for a reason, and that's how bugs and security vulnerabilities and bad architecture and loss of cohesion happen.

**Break**: \[00:37:17.13\]

**Adam Stacoviak:** So is that where -- I think we're here because we talked about the day in the life of... Where do we go from after code review? You're painting the landscape of Sourcegraph, what an engineer may have access to to reduce or remove some of the toil in the process.

**Beyang Liu:** Yup. So broadly speaking, I think where the day in the life of a developer moves to is -- yeah, I talked about inner loop and outer loop before. Our vision for these two loops is essentially like accelerate the inner loop. We should provide facilities that automate boilerplate and toil inside the inner loop, such that it feels like we're building leverage around human creativity... Because that is still the thing that is, quote-unquote, out of distribution of the models, and something that is not yet replicable with today's LLMs. And I don't see a clear line of sight to actually replicating that. I think that is truly the essential part of the job. That is the fun part of the job. It's like thinking up a new idea, connecting that with a user need, and then finding just the ideal, best data structures and algorithms that fit within your existing architecture to solve that. That is the essence of the job, and that's the thing that we want to enable people to spend 99% of their time on, as opposed to 1% of their time on.

So we're accelerating in the inner loop... And then the outer loop, I think is -- we want to automate as much of that as possible. Because everything in the auto loop is kind of like a factory. You spend all this time refining the creative aspects in the inner loop, and now the outer loop is just like "How do I get this thing that I have produced in my development environment into production?"

So the whole process of doing the review, and refining it, and making sure there's adequate test coverage, doing an automatic rollback, adding the necessary telemetry... In ideal world, that is all within the realm of automation. It's kind of like we built this Gigafactory, in a way, where if you got it working in your development environment, everything else to get it into production should be pattern-matchable by the LLM.

So in the future -- I think the future that we want to work towards is it doesn't matter what size codebase you're working in; it could be the smallest thing, or it could be the largest, oldest codebase in the world... You express your intent, we accelerate you getting to the experience that you want in your development environment, and then thereafter the machine just takes your change and lands it in production, guaranteeing security, reliability, and robustness.

**Adam Stacoviak:** Love those buzzwords, love those buzzwords. I'm being serious. I'm seeing this, where you're going... I was just half-joking there. That was some buzzword city there, though. Robustness.

**Beyang Liu:** Well, that's what you want, right?

**Adam Stacoviak:** You do want those things.

**Beyang Liu:** Our tagline is "Move fast, but don't break."

**Adam Stacoviak:** Okay, sure. I like that, too.

**Beyang Liu:** And that is now possible. With today's technology, it is possible to enable an extremely fast development cycle, that augments human creativity. But the things that could break your your system, like a security vulnerability, or too much technical debt, or a bug that wasn't caught because you didn't think to add the appropriate test... All these things are in the realm of automation now. They are automatable, we've just got to go and automate them.

**Adam Stacoviak:** \[00:44:09.14\] For sure. And you know what? I'm all for that, because there's scenarios where developers want to deploy code, and they'll forget "Oh, I didn't write or consider this one security thing that I should know about. But because I'm a human, I've got limited even emotional will, willpower", which is a finite resource to any human being. We all have brains, and those brains give us a certain amount of power. Regardless of how smart you are, you could have not had your sneakers that day, so maybe you're Joe Pesci for a moment or two, and you're just not thinking straight. Or it's four o'clock and you're trying to get this thing over the line, because - time. And you don't write the test, or you forget about a critical thing.

We should have automations and checks and balances in our flow from the REPL, which you were talking about, this inner loop, which says "Okay, now it's out of my safe world. It's out of my safe idea world. My innovation world. I've tested it, I've done all the things I can." Now it goes out to the outer loop, which - that's where automation should live, because you want to confirm "Is it a threat or is it an ally?" Is this thing that has been done a threat or an ally? And if it's an ally, to prod. If it's a threat, let's check those threats.

**Beyang Liu:** Yup. That's exactly right. And I think this willpower is a finite resource. That is a really good way of phrasing it. I think I'm going to steal that. We've seen it play out not just on the timeline of a day in the life, but we've seen it play out on the span of months and years.

To give an example, we have a customer where we partnered with them to build a sort of code migration agent that was targeting a project to retire all these dead feature flags that they had strewn about the codebase. So feature flags, you add them to do some experiment, and then once the experiment is over, you decide "Okay, we're going to either turn it to a hundred or turn it to zero", but then no one is really incentivized to remove the feature flag from the source code. So over time, these things kind of grow linearly and they add to the complexity of the codebase, because no one is quite sure just looking at the source whether it's fully turned on or not.

**Adam Stacoviak:** Right. Will it break then...?

**Beyang Liu:** Yeah, will it break? Which one of these branches actually execute? ...depending on what feature flag configuration I have currently in production. So they had a migration project... The target date for the project was 10 years down the line.

**Adam Stacoviak:** Gosh...

**Beyang Liu:** And literally, this is the sort of thing where the only people with the context to lead this conversation are the very most senior engineers in your organization, because they are the only ones who know the entire codebase, they know all the nuances of how these feature flags can break if you remove them improperly... And they're the only ones you trust to initiate a migration that literally touches every single repository in your codebase.

So the joke is -- if you ever read Kerouac, "I saw the best and brightest minds of my generation." The developer equivalent is "I saw the best and brightest developer minds of my generation go insane, because they had to spend 10 years of their lives working on a dead feature flag removal." Istead of anything interesting or fun, like building new features for your users or customers.

**Adam Stacoviak:** Stuff that really matters, basically.

**Beyang Liu:** Yeah, exactly. So when we ran that project with them - it's still ongoing, so it's not through to completion yet, but we're basically able to say "80% of these feature flag sites, you can automate within the next month or so." So it's kind of like -- and sitting down and just figuring out how to compose, build an agent to do this migration... We've gotten you within the realm of retiring 80% of these within essentially a month. And then the remaining 20%, they're a little bit trickier, and those will probably involve some amount of human in the loop... But already, we got 80% of the way there within a month. This thing is not going to take 10 years any longer.

\[00:48:19.29\] And just think of the -- that's a good chunk of your life, right? For multiple people, for multiple really, really smart people, who can now go and focus on other things that actually move the needle for the business and for the user experience.

**Adam Stacoviak:** Yeah, that really is the best use case really for automation, or intelligent automation... Because one thing I like about the idea of, I would say using today's newest frontier models, or generation, or reasoning in problems like that is because it can run scenarios. If it's sophisticated enough, it can say, "Run the scenarios if these five flags were removed. What would happen?" Because it has awareness of the database, it has awareness of its scalability of it, what the database actually is, or what the language might be, or how it's sharded or not sharded... Or whatever the scenario is for the application, it knows that and it can, to some degree, quantify, or try to quantify some of that reasoning... So that when you get there, the PR, you're mostly there; instead of having to go 100% of the way, maybe you only go 50%, or in this case 80%. You've gotten it 80% done, and you only have to deal with 20%. So hey, smart fellas, smart folks, go and tackle this problem. Now you only have to do 20% of the work, versus 100%. I would be so much happier if I were that intelligent person, having to deal with that issue. Because it's important, but not so important that you should spend 10 years of your life doing it.

**Beyang Liu:** Yeah. And the remaining 20% is the fun 20%. That's the interesting problems, the ones where you can actually wear your computer science hat, and God forbid, actually make use of some of the things that you learned in college.

**Adam Stacoviak:** Yeah. Okay, so that's one more layer of the day in the life. This is a long day in the life. Wow. Code migration, code review... What's left? What's left in this day in the life, this outer loop that you're going to automate? Is there more?

**Beyang Liu:** You know, I think we've covered most of it. There's specific pieces that we can get into, but broadly speaking, it's accelerate the inner loop through an amazing in editor AI experience - help automate the boilerplate, help automate the grunt work of doing simple things - and then in the outer loop fully automate as much as we can. So I think the last remaining piece here would probably be some sort of automated remediation of production incidents that happen. And I think there --

**Adam Stacoviak:** So you want to automate incidents now, too.

**Beyang Liu:** Yeah. I think the entire software development lifecycle -- we essentially want to be the platform that performs all of that. We're essentially building an agent construction mechanism into Sourcegraph, where the code review agent is just kind of patient zero for that. There'll be like a first-party agent that is customizable and composable, so that people can tune it to the specific needs of their enterprise... But that's just the beginning of the long and fat tail of toil that exists inside enterprises. So the common points here will probably be things like code review, test generation, issue and incident remediation... Those probably are the most salient things for us. But then inside every org, there's kind of a long tail of very specific things that you need to do for that organization. Like, if you're a big bank, you might have compliance requirements, or checks for proper handling of PII. If you're in healthcare, there's a lot you have to do around data privacy, and making sure that doesn't get leaked to a part of the system.

\[00:52:17.19\] Every industry has its own set of things that they needed to enforce in this life cycle, and so the way we've approached this automation problem is we're not trying to build a one size fits all thing that just does code review. What we really want to build is an agent authoring platform to enable our customers to go build the automations they need to build to address the toil that exists in their organization.

**Adam Stacoviak:** You're the runtime, they still write the smarts to it. Interesting.

**Beyang Liu:** Yeah, we're the runtime, we provide the common Lego bricks and building blocks, like a common inference point, a common context fetcher, a common way of composing these agentic chains... And then their developers are essentially able to go and with very low friction, assemble these blocks into the things that target the toil that they experience.

**Adam Stacoviak:** I love that. I kind of joked earlier about smart cron jobs. Do you feel that's kind of what this is? I mean, maybe at some level there's some things you do with cron jobs where you script something and you automate it based on certain timing, and it runs, and then you observe it, and "Did it fail, or did it pass?" and there's logs, and there's obviously the effects of the change that you construct... Is there a day where we will no longer write simple, let's just call them dumb cron jobs, and we'll write smart ones that are very agent-like?

**Beyang Liu:** I think there will be. And I think the point that we want to get to -- the way we've constructed our code review agent is to make it so that for the most part you don't have to think about the imperative logic of the review agent itself. What you can do with Sourcegraph is you can define these rules that should hold in a certain part of your codebase.

So a rule is just a declaration of some invariant that should hold across a certain set of files in your codebase. So maybe it's something like -- it could be as simple as "Hey, if you are writing the name of your company, make sure to camel-case appropriately", because a common misspelling is, you know, people forget the camel case, and that's not good. Or it could be much more complex than that, like "Hey, here's a complete style guide for writing code in Go. We've copy and pasted the open source Google style guide, because that's treated as canonical. Make sure all the Go code in the organization follows this style guide to the best of your ability."

Almost every sort of invariant that you want to describe is describable in a statement that, and we want to give people the power to define these rules in one place, and then have them be enforced across their codebase. And the mechanism of enforcement, there will be at least three places where this surfaces. One is inside the editor. So make the rules part of the context that guides the generation of code inside the editor, so that you feel confident that if most of your developers are vibing their code into existence, that vibed code actually follows your organizational standards. So it's not going to be like -- you're not going to have to rework 90% of it because it's using some framework that you don't want to use; you want to use this other framework or whatnot.

\[00:55:48.09\] The second layer is code reviews. So at review time, if anything falls through the cracks or if someone wrote that code manually, enforce these rules to make sure that nothing gets committed that causes any of these rules to break. And then the last thing is what you're describing with the cron jobs. You should just have a multitude of background agents in flight at any given point in time, just constantly crawling your codebase to ensure that these rules hold. And if they don't, if there's ever a point where they don't hold, push up a PR and then automate the review of that PR so that a human can come in and be like "Okay, yup, yup, yup. You checked the right things. This looks good, and you've added the appropriate unit test to make sure that nothing breaks. Looks good to me", to ensure that those invariants hold.

I think the combination of these three methods of enforcement will allow your technical leadership, the people who carry the architectural vision of the codebase, to really enforce consistency and coherency across the entire codebase. Not just catching the typo things, but you can actually describe architectural constraints, like "This component, if it talks to this component, should go through this interface", because that's the intention of the architect. It's very important that we maintain this interface boundary, because that allows us to keep the code clean and changeable moving forward.

That's the sort of thing where without this system, without AI, it would have been a losing battle... Because you only have a certain number of senior developer hours in the day, and at some point, some PR is going to sneak past the reviewer, because they've got other stuff to do. And then at that point you've broken the invariant, and then things slowly decay over time. And that to us, to get back to the industrialization point, that's a linchpin of being able to make coding a truly industrial craft.

Another point of reference for us is - if you've ever read The Mythical Man Month, that's the classic...

**Adam Stacoviak:** I have not.

**Beyang Liu:** Oh, you haven't. Oh, you've got to read it.

**Adam Stacoviak:** Oh, man. I'll put it on my list.

**Beyang Liu:** The book was written in the '70s, about challenges that developers faced building mainframe software, but it's 98% applicable to the way development currently works today... Which is - the thing that holds software back and prevents these actual economies of scale from being realized is the loss of architectural vision and coherency that occurs when you scale up the size of the team working on the software and contributing to the codebase. And so this is a perennial problem that has plagued software development since the mainframe software of the '60s and '70s, which this book was written about. But the same general principles apply today. With our system, this system of rules and invariance enforced through AI at different parts of the SDLC, our mission, our vision here is to give the architect of your codebase a lever by which they can enforce the constraints and architectural rules that must hold in the codebase to preserve the overall kind of cleanliness and design of the codebase. Now, for the first time in history - I'm not saying it's a solved problem; we're still in the process of solving it. But now for the first time in history, we have line of sight to solving that. And I think if you're playing around with these technologies and using them day to day, you can see how we get from here to the point where people can define these rules in one place and just constrain and control the evolution of the architecture as code grows. If we can do that, then we basically solve the fundamental problem of the mythical man month, and that ushers us into a new age of software development. We're literally transitioning from cottage industry or artisanal craft into actual industrial processes, where we do have economies of scale and we do have efficiencies where the team can actually, not even not get slower, but actually get faster the larger the codebase becomes.

**Adam Stacoviak:** \[01:00:01.06\] Yeah. I'm seeing this world. I mean, are we there yet? Let's just -- let's stop for one second. Are we there yet? Not quite.

**Beyang Liu:** No, not quite. And we're in the midst of building up --

**Adam Stacoviak:** What's required to get there. Okay.

**Beyang Liu:** For us, it's really about building these factories in collaboration with our partners. So one of the things that differentiates us is, first of all, we're thinking about this problem at all. And second of all, we can sit down with the technical leadership at the booking.coms of the world or the Palo Alto networks of the world and make this system work well for them... Because building the Gigafactory is very different than building something that works inside a small codebase with a couple of contributors. And I think the low-hanging fruit is definitely the small codebases, which is great. I'm glad there's a bunch of people working on that and making that better. But I think where we see a strong alignment with our mission and what we want to do in the world is really enabling software development to go much more smoothly and quickly inside these large, industrial scale codebases.

**Adam Stacoviak:** Well, the picture it seems you've painted - if I can just analyze a little bit - is if I'm an IC in any of these organizations, and like you'd mentioned, there's a certain interface I may have to write code to, it always has to go through that way, so the agent that may confirm that that's a truth or not for my codebase.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** When I deploy code, if I can do my REPL, my inner loop, my creativity, and I have insurances outside of it, like, no matter what I throw out there outside of my circle of trust, let's say within my own brain or my own team's brain of innovation, creativity, moving the ball forward, if I know whatever bounces back holds true against rules that my organization trusts, holds near and dear, is orchestrated and designed by the most thoughtful people... If I can be creative within confines -- it's like, you still have constraints, but now it's not rogue, because you can add more and more smaller teams to be creative, and to throw things outside their circle of trust, and get bounced back against this wall, so to speak.

**Beyang Liu:** Yeah. And the robots should be able to handle somewhere between 90% to 100% of the back and forth. Because before, this would be very painful, because you'd push up your new feature, you're all happy about it, but then some architects would be like "No, it violates this constraint. This part is not clean." You have to go and do a bunch of rework to fix it, and then you push it back up again, there's more comments... And this process just drags on, and both sides get increasingly frustrated, because finite willpower, at the end of the day. But now you can have the robots handle the vast majority of the back and forth, and so... Yeah, now you focus on the fun parts.

**Adam Stacoviak:** Worst case, you're mad at Cody, or whatever you name the next robot, right?

**Beyang Liu:** Yeah. And if you get mad at Cody, the brilliant thing is that - hey, just tag in Cody to go address Cody's comments, right?

**Adam Stacoviak:** Nice. Yeah. You'd mentioned in the pre-call specifically some things you do for enterprises and government agencies... What is it that those -- I mean, we probably talked about some of it, but what is it that those organizations need that has only been uniquely designed and engineered by Sourcegraph to help them do better?

**Beyang Liu:** Yeah, so there's two things here. One is the context awareness, building that in as a first-class citizen. I mentioned that we were first to market for that, and we actually have a way of delivering that really effectively into the enterprise. Sourcegraph has been self-hostable for many years now, because a lot of our early customers were very large enterprises. And so we've built all this DNA around delivering the best context for human developers in the form of code search and code navigation into all these different deployment environments... And we can essentially offer those same context fetchers as a kind of game-changing tool or capability for LLMs, as well; any sort of AI code generation or question asking.

\[01:04:01.08\] The other facet of this is just the security and compliance requirements that a lot of these larger enterprises have to comply with, or are constrained by. So in terms of being able to deliver something into a purely self-hostable environment, I think we're basically the leader in being able to do this. Even Microsoft, or Copilot, with all their enterprise branding, there's still components of their infrastructure that have to be tied to their Claude... And that essentially rules them out for a lot of, frankly, the largest software engineering organizations in the world. They're ones that you haven't heard of, but they're literally powering half the economy, and they have very stringent security and data privacy constraints.

**Adam Stacoviak:** So you can self-host everything we talked about today.

**Beyang Liu:** Yes, yes.

**Adam Stacoviak:** And it's by design; that's not obviously by accident, because you wouldn't do it by accident, because that's very hard. It's very hard to self-host.

**Beyang Liu:** Yeah, yeah.

**Adam Stacoviak:** So does that make it challenging to build Sourcegraph, to sort of have two deployment targets? Or I guess infinite, really, technically... Because you've got your own Claude, I'm sure, which - I can go there and be a Claude customer, you're hosting it, versus my own hosting.

**Beyang Liu:** It's absolutely a challenge and it's something that has slowed us down a bit. The in-editor experience, I think, we've had a bit more challenge in pushing that forward than we would have... Like, we ideally would have liked to move faster on the in-editor UX, but because we're targeting a variety of different editors and deployment constraints, that has constrained what we've been able to do there, to a certain extent. But I think now we're at the point where we've kind of figured out all the most important parts for how to deliver this into large-scale organizations... And so now revisiting the core UX, I think we feel pretty good about the degree to which we can implement all the things that people want in terms of AI code generation and agentic automation within the editor. But it does remain an ongoing challenge. It's not a trivial problem by any stretch to solve, and it's something that a lot of the upstart people trying to do things with like code plus AI they have not solved yet, and I think will take some time for them to solve.

**Adam Stacoviak:** Mm-hm. Is your most popular editor VS Code, or your target, where a lot of the generation is happening?

**Beyang Liu:** I think probably by usage numbers, VS Code is the most popular, but we have a ton of JetBrains users as well, and we also support Visual Studio and Eclipse, which - it might be surprising to some folks in your audience, but there are very large government agencies that are still on Eclipse, and they are constrained by factors beyond their or our control, and being able to deliver this into that editor is kind of game-changing. We're literally bringing the latest technology into a very old-school legacy editor, and it completely upends the speed at which they're able to move inside those codebases.

**Adam Stacoviak:** I know that one of your teammates, I think, went to Zed... I'm thinking, "Why wouldn't you just build your own editor or acquire one? Why not just acquire Zed, and make it easier?" And then deploy the best editor ever out there.

**Beyang Liu:** Yeah. So I think the teammate you're talking about is --

**Adam Stacoviak:** You can mention his name if you want to.

**Beyang Liu:** ...is Thorsten Ball. He's awesome. He actually just bounced back, actually.

**Adam Stacoviak:** I saw that.

**Beyang Liu:** \[01:07:54.06\] He rejoined us.

**Adam Stacoviak:** That's why I felt comfortable mentioning his name in this scenario, because he's back again.

**Beyang Liu:** Yeah. And look, he's awesome. Look, I love the Zed folks, too. We've had one of them on our podcast back in the day; I really love what they're doing. I think it's a fantastic editor, and I sincerely hope that it becomes really big. I think they have a unique approach here. They're not a VS Code fork. They're really kind of rebuilding an editor up from first principles, and focusing very much on performance, which I absolutely love to see as a developer. And I hope they succeed. I would love that to be an editor that I could use someday.

As far as our business is concerned, the way we view the in-editor experience is -- maybe this is a difference in our vision for the world compared to some of the other players in the space, but we don't think that there's going to be a single code editor that is universally adopted for every language and every platform in the future, much less a closed-source one. I think open source in the editor remains important, because it's so near and dear to the inner loop and the individual developer workflow.

So when we think about the type of in-editor coding experience that we want to enable, we start from a point of wanting to deliver that experience into the best editor for your particular ecosystem or your platform. I guess that's somewhat of a contrarian view these days, because there's all these VS Code forks floating about, that frankly speaking they've done a really good job on some of the core UX, and kind of pushed the frontier in terms of showing people what's possible with AI. But the long story -- I guess the short of it is for us, we are thinking about building for the large codebases that make the software that power the world. Those are multi-editor environments. They're also environments where it's not just the context inside your editor that matters, it's actually connecting it back to the overall context of your organization and the entire codebase. So the way we're approaching about building for the editor is to bring the best AI UX in the field in a way that feels native to each of the editors that we support. We eventually hope to support all the editors out there.

**Adam Stacoviak:** That makes sense. I mean, in essence, what you said was "Go where the developers are", versus force them into your stadium. You're going to all stadiums. A world tour.

**Beyang Liu:** Yeah, basically. And part of this too is like - when we look at the UX of how people employ AI inside their editor today, we don't see anything that fundamentally requires a different editor... Especially looking forward with model capabilities evolving as quickly as they are, I would say our point of view is that every six to nine months there is a step function increase in LLM capabilities where the assumptions that you had to build around in terms of what sort of user experience you enable, or what are the facilities that you have to build around the model, those entirely change every six to nine months... Because the gaps that you had to fill because the previous generation of models couldn't just one-shot the thing that you're trying to do, or couldn't just find the right tool - those constraints no longer exist.

\[01:11:53.17\] And the constraints that you have today, in another six to nine months won't exist either. And that has been the pattern since the release of ChatGPT. So we've seen a progression of these step function models. There was GPT-3.5, GPT-4, then Claude, Claude 3.5 Sonnet, and now 3.7 Sonnet. I think each of these has moved the needle in a way where a lot of the prior assumptions and constraints no longer hold.

So when we look at the ideal editor UX today, looking forward, we actually think there's a very clean way to integrate AI-generated code into every editor, that doesn't involve a lot of extra UX Chrome for things. It's mostly just relying on the model reasoning capabilities, providing it the right set of tools, in the form of both local tools and tools that call out to codebase-wide context fetching... And then having a constrained set of hooks into the editor; like, how do you render a proposed diff into the editor buffer? How do you render an edit suggestion into the editor? These sorts of things, which... Look, you have to build those integrations so they work well, but it's a very narrow API that we think we can implement really well. I think the thing that we'd like to build is kind of like an AI kernel that you can port to every editor... And maybe even to the command line, because it's a lot of the same usage patterns that you see there, where it's like, you want to describe the change that you want, you want to see what edits are proposed, you want to accept those, and then you want it to continue doing what it's doing, but keep you in the loop as to what it's doing, and how that affects the rest of the codebase.

**Adam Stacoviak:** Yeah, there's a certain framework that happens no matter what. There's certain interfaces you expect, no matter if it's your Zed editor - because I'm telling you to acquire it, or suggesting that you should - or every editor out there that developers use, no matter where it's at. Even legacy ones, or I suppose lesser used - I should not say legacy - like Eclipse. There's still lots of folks using Eclipse, for good reasons, I'm sure. For good reasons.

**Beyang Liu:** Yeah, if you think about -- there's another analog here, which is like, a couple years back a big innovation in the editor space was the introduction of the language server protocol, LSP. And that showed that, hey, you didn't have to build bespoke code navigation for every single editor. Before that, it's like "Oh, I want to use this editor because some hacker out there spent night and day over the course of weeks or months hacking into this compiler to rip at the internals, and now that editor supports really good go-to-definition for my language of choice." LSP came along and basically said, "Look - fundamentally, what do you need to do? You need a go-to-definition, you need to find references, and then there's a short list of other functionality; that's really useful to have. We can abstract that away and make that feel native in every editor, so that you don't have to reinvent the wheel." And I think something that is possible with LLM-driven code generation.

**Break**: \[01:15:02.21\]

**Adam Stacoviak:** Let's dig into, I think, something that you have a unique perspective and vantage point on, which is the frontier models, what is being used, what's being deployed. You obviously give access to all the frontier models, from Claude, to Sonnet... All the different ones. What is most useful to developers? Do you offer them all because they all have unique perspectives on code generation? Is there one you particularly like best? What are you hoping for in terms of frontier models, like open source, non-open source? Are you a DeepSeek user? I don't see it in your list... That's a swath of things. Let's go from there.

**Beyang Liu:** Yeah, so the landscape today, March 5th, 2025, is --

**Adam Stacoviak:** It could change tomorrow.

**Beyang Liu:** It could change tomorrow. By the time this comes out maybe it will be different. That's why I say the date, because I want to make sure that I'm pegging the statement to a specific point in time. The preferred model for our user base is the Claude Sonnet family of models. We have a lot of users still using 3.5, and a lot of users using 3.7... I think there's been some interesting discussion around 3.5 versus 3.7. For instance, I saw a bunch of Cursor users tweeting that 3.7 didn't feel like a big improvement; in some cases it's worse than 3.5. For the Cody users, it's actually been the opposite. And I think it's actually because Cursor has done more legwork around optimizing their prompts around 3.5. We've done less of that, because we've been more model-agnostic in our approach... And what we've found is 3.7 just has certain capabilities, especially around tool use, that have gotten substantially better. So that's why we're building -- the future of Cody is really going to be built around the set of capabilities that are now unlocked with 3.7 Sonnet.

We also see a lot of usage of reasoning-oriented models for trickier problems, or problems more around codebase understanding, where a non-reasoning model might make a hallucination or an incorrect interpretation, a shallow interpretation of some set of context... So we do see some usage of the reasoning-based models like O3 Mini, and things like that. DeepSeek is really exciting. I actually think it is available now in our model dropdown.

**Adam Stacoviak:** Oh, is it? Okay.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** Marketing says no, but I'm not inside the application. I'm on /cody of Sourcegraph.com and it's not there, so... That's fine.

**Beyang Liu:** \[01:20:05.14\] Oh, yeah, yeah. You probably need to be inside the editor. DeepSeek is also really exciting, because it's, I think, at the frontier of the open source models. And the open source models are also very interesting to us, because, one, we always like supporting open source, especially at the model layer; that makes it attractive from a variety of different points of view. I think LLaMA is also an awesome family of models that is available through Cody, and that we also see a lot of future potential around.

The second reason why DeepSeek and LLaMA are very exciting is their finetuneability. There's a bunch of use cases inside the editor, like suggesting the next edit, or applying a proposed change into the editor, where these open-source models provide a very good foundation for tuning a very fast model, that's specifically targeted at those use cases, where the use case is very latency sensitive. So we want to preserve the context awareness and preserve the intelligence as much as we can, but since it's constrained to the specific use case, it doesn't have to have as much of the general intelligence that a frontier model has. But because we have relaxed that constraint, we can push the latency and cost down to the point where it feels more instant.

**Adam Stacoviak:** Can you explain to me - or is this proprietary - how you interact with the various models? You mentioned you're agnostic, so I imagine just like you want to go where developers are, which means whatever editor they're using... So that means that you've got an agnostic approach to how you gain your context via Sourcegraph, and apply that to the age or the model that's going to give back the generation, or give back the reasoning. Can you explain to me how that works, from prompt, to Sourcegraph context, to the model and back again?

**Beyang Liu:** Yeah, so model choice was something that we prioritized as a key original design constraint around Cody. We basically made the bet that the model landscape would shift...

**Adam Stacoviak:** Constantly.

**Beyang Liu:** ...and evolve. And I think that prediction has panned out. And so we never wanted to be overly constrained to one specific model, or the current generation of models... And so we architected the code in such a way that we could easily introduce new models, and also customize the prompts that we use for each model, so that we can use the best prompt structure given each new model that comes along. And so because of that - one, it's advantageous if you're a user, if you want to play around with the latest model on the day it drops, most of these models we make available within 24 to 48 hours for users of Cody Pro. And then if you're an enterprise user, this is also helpful, because sometimes you have constraints around which model you can use. There's a bunch of enterprises, for instance, that don't want to use DeepSeek, because the progeny of that model just rules that out.

**Adam Stacoviak:** For whatever reason...

**Beyang Liu:** Yeah, for whatever reason. \[laughs\] And so we don't have to use DeepSeek in that case. Some people cannot use Anthropic, or OpenAI. Maybe they're tied to Azure OpenAI, or AWS Bedrock, so they're constrained to the models that are available on that platform, and we can easily make the functionality available given their model constraints.

**Adam Stacoviak:** Can the person or persons over at the org, Sourcegraph org, I suppose - can they delimit or remove the opportunity to even select a model they can't use?

**Beyang Liu:** Yes.

**Adam Stacoviak:** Oh, that's cool.

**Beyang Liu:** You can do that at the admin level.

**Adam Stacoviak:** That makes sense.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** That's the way to do it, man.

**Beyang Liu:** Yeah. Yeah.

**Adam Stacoviak:** Any plans to -- is there any more on that front? Did I cut you off?

**Beyang Liu:** I mean, so we partner very closely with all the various frontier model development shops. I obviously can't share anything that's not public, but I think we're seeing a lot of exciting things coming down the pipeline, and so we're kind of like building our future in editor experience with an eye towards where we see the puck going in terms of model capabilities... Which is very exciting for the future.

\[01:24:14.16\] I think the thing that I'll say here is that AI has already gone through two to four mini disruption cycles. We typically think of disruption cycles as being on the order of years at least, right? But the shift and the step function improvement in model capabilities that we see every six to nine months or so essentially resets the game for what the ideal UX is, at that cadence; every six to nine months. So rewind to the ancient age of --

**Adam Stacoviak:** One year ago...

**Beyang Liu:** One year ago -- 2023, right? 2023, Copilot was king, they seemed unassailable... Everyone wanted autocomplete. No one even cared about chat, or context awareness in that chat, right? Because autocomplete was where it's at. You want it to be fast, you want it to be snappy... You want it to be a little bit context aware, but people just wanted it to be fast, right? And that was the UX paradigm that was dominant at the time.

And then in 2024 the paradigm completely shifted. I think it first shifted with GPT-4, where - okay, that was a model that had a step function improvement in its ability to one-shot applications. So now it's like, why would I sit there, autocompleting stuff, when I could literally just generate an entire mini app from scratch? It also got a lot better at incorporating context, so now you can do kind of context-constrained code generation, which we deployed, and it had massive success in the enterprise. But then there were still certain things that it couldn't do well. The code was often sometimes broken, or didn't quite compile.

And then when Sonnet rolled out, that was like another step functions. Now all of a sudden these things that were kind of just beyond the capability, are now firmly within -- like, I can trust this thing to reliably emit JSON, for instance. That used to be -- that's a solved problem now. People used to write entire thought pieces around "How do you constrain the model output to produce a valid JSON?" These days you don't even think about that, because the model has been trained to treat that as a solved problem. And I think now we're seeing it in terms of in-editor agents. That is the future, and that's what we're building towards. A year ago, I think if you were pushing agents, there were certain companies that were like "We're going to build the agent that eliminates the developer entirely." I think now people recognize that they were kind of selling beyond their existing capabilities at the time. It made for a great kind of marketing moment, and they got their name in the headlines, but there was a disappointment in the actual product experience.

Now, with the newest set of models, we're seeing this approach, just like -- this is kind of the new paradigm. That's what we're building for. We have kind of like a wait list of people who want to get access to the thing that we're currently building in collaboration with a lot of these frontier shops... And it works very well in large, messy codebases as well, because again, that's the problem that we're solving for.

And so I think the future is very bright, and I don't -- at some point I think we might plateau in terms of model capability, but at least for the past two years, there's just been this regular cadence of step function improvements in model capabilities. It's just been really exciting to see that, and sort of ride the wave of the development and maturation of this technology.

**Adam Stacoviak:** This wait list - is it a secret, these details behind it? Can you enumerate at all? Can you tease at all?

**Beyang Liu:** When is this episode going out?

**Adam Stacoviak:** Next Wednesday.

**Beyang Liu:** \[01:28:00.21\] Oh, next Wednesday. Oh yeah, it's closed right now, but I don't know, DM me on Twitter... We're playing this very ad hoc right now, just because... I don't know, what we've learned over time is that new kind of skunkworks projects like this, it's never good if you make them overly formal too quickly. So we like it to be scrappy, we like it to be just a handful of devs kind of locked in a garage-like environment of some sort, just hacking on stuff... But I think we'll have more to share here soon.

**Adam Stacoviak:** You've already long-betted on the UX inside the editor, so that's not changing. It's an improvement, or maybe something like that with a particular model or model developer.

**Beyang Liu:** Yup, basically. So the way we think about it is basically like this... What we are doing, and what I'd recommend other organizations do is you want to position what you're building inside your organization to ride the wave of model improvements. So what that means is you have to just assume that the reasoning capabilities and the latency will continue to improve at approximately the same clip as they have been. So what do you do? To a certain extent, you have to hack around the existing limitations, but you don't want to invest too much in those, because another six months rolls around and those are kind of obviated.

I think where you do want to invest in right now is very high quality tools and capabilities that can be composed with the rapidly-advancing reasoning capabilities of frontier models. And so it's essentially -- for us it's kind of nice, because we've essentially been building these tools the entire time at Sourcegraph. It's like, we're building tools to help human brains explore the codebase, effectively, and build up a working understanding of it, and write effective code pattern matching against the existing patterns, and validate that that's correct and consistent within the style of your organization and the rules in your organization.

Now increasingly we're seeing the LLM brain being swappable in for the human brain in a growing number of tasks. Every kind of advancement in reasoning capability or context awareness or pattern matching capability advances the frontier of where an LLM serving as the coordinator of these tools, the orchestrator of these tools can now automate something that previously a human brain would have had to attend to.

And so the way we view it is we are really investing in the tooling ecosystem and infrastructure that we build around the model, with the assumption that all the frontier labs are going to be pouring, it seems like all the money in the world - billions, if not trillions of dollars - into pushing the advancement of this reasoning technology as far and fast as they can.

So that's the big wave right now, and the way we're designing our platform is to just provide the best tools for accelerating and automating the software development lifecycle, under the assumption that there's going to be kind of like a -- maybe Moore's Law is not the right analogy here, but I think you can assume some pace of advancement in reasoning capabilities for at least the next couple of years.

**Adam Stacoviak:** Yeah. Well, I'd imagine that you're getting this access and you can call these folks partners and work in this degree because Sourcegraph is a deployable target for all of them, essentially. They can't assume that "I go to the Claude website or to the Open AI website, or to my own ways", that Sourcegraph's Cody is just one more way to deploy and distribute those LLMs and those reasonings, so to speak, to developers where they're at, you know? I'd imagine that's probably true.

\[01:32:14.01\] Can you speak to how saturated your user base is with -- like, of the developers who are developers in quotes to Sourcegraph... I don't know what you call your people, so to speak; your user count? I don't know, I'm trying to get your lexicon in my brain.

**Beyang Liu:** Yeah, yeah.

**Adam Stacoviak:** Do they all use Cody? is everyone using Cody? Is Cody one of your most successful products?

**Beyang Liu:** I would say Cody has been, I think by far and away the most successful product that we've shipped, with code search being kind of a close second, if you track by user count. If you track by revenue, we have other features that drive a lot of revenue as well. Batch changes, which is the large scale refactoring thing - it's very, very useful and very, very valuable for large, messy codebases. But in terms of overall user account, developer count, I think Cody has been extremely successful.

There's not 100% overlap yet. We do still have some people using code search who don't use Cody, or some people using Cody that don't use code search, but we see an increasing number of people kind of flow between generating code with AI, to looking up context myself to make sure that I understand what the code actually does, and what APIs it's using etc.

And yeah, I would say we are seeing an increasing amount of people starting in one point and getting pulled into the other, and for that reason we've also made this AI question answering interface available in a web application, where you can go to any repository in the Sourcegraph UI and ask questions when you're viewing the code in the Sourcegraph web application. So just trying to connect the dots... We kind of developed Cody as a separate, independent thing, but increasingly, our user base is really pulling us to integrate it into kind of the unified Sourcegraph experience.

**Adam Stacoviak:** Yeah. It's hard to see from the outside how Cody is independent, because you can go to /cody, which is what it is, but the headline does not say "Buy Cody." The headline -- I don't even know what it says, but it doesn't say that. I think it's like "The enterprise AI code assistant", you know?

**Beyang Liu:** Yes.

**Adam Stacoviak:** And then somewhere in the line, it's like "With Cody, you can do X." There's not this named thing where it seems like it's a standalone product, that also is deeply integrated.

**Beyang Liu:** Yeah. I'd say candidly our marketing messaging hasn't been the greatest... I think there's some confusion over what the overlap is.

**Adam Stacoviak:** Very much, yeah.

**Beyang Liu:** And that's something that we're trying to address. I think one of the challenges for us is we built so many capabilities around accelerating and automating the SDLC over the years that there isn't a succinct way of describing what the whole platform does, other than it accelerates and automates your SDLC, especially if you're in a large codebase. But that's not as punchy as --

**Adam Stacoviak:** What is SDLC?

**Beyang Liu:** Software Development Lifecycle.

**Adam Stacoviak:** I thought so, but I just wanted to make sure... Unless it was something on the inside. I'm like "What is SDLC?" Okay.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** What's left unsaid? I know that we've talked a lot, you've got a short amount of time, you've got some other places to be... What can we say in closing? What's on the horizon that no one knows? Or knows less of, that you can mention in the closing.

**Beyang Liu:** I think for us it's really mapping back to these two loops - the inner and the outer loop. So expect a huge overhaul and improvement to the in-editor experience that we provide, around what the AI can do when you're coding, when you're vibe-coding, or when you're writing code in your editor... And expect an increasing amount of automation around that long and fat tail of the outer loop of the SDLC.

\[01:36:22.27\] And I think philosophically, the way we're trying to build this is we think the in-editor should be as open and adaptable as possible. So open source, cross-editor... These are the things that we value as developers, and I think pre-AI, every developer would say that they valued that. I think the first generation of AI coding assistants has kind of muddied that a bit, because a lot of folks have kept their solution closed source... But we think the end game here is going to be open, and we aim to build in the open here.

And then in the outer loop, I think the way we approach the automation here is that we're not trying to anticipate all the different ways in which we can compose the different building blocks. We want to build the building blocks and use those to provide a handful of first party automation tools, like the code review agent. But at the end of the day, we want to hand this platform over to our users, who are developers after all, to go and combine these things into the things that tackle the things that eat up your time, and produce toil for you today. So that is our philosophy.

We've been doing this for over a decade now, so we've kind of fully internalized the challenges and what a solution needs to be in order to work in the context of a large, messy codebase, as well as how to deploy that solution into your environment... And like I said at the very beginning, we chose this domain because we felt that we'd easily spend our entire lives working on this. This is where our passion is, and I see a long and bright future ahead for us as a company, essentially bringing all the biggest, most important codebases in the world to the point where they actually can achieve these industrial economies of scale.

**Adam Stacoviak:** Industrial economies of scale. I love that. I mean, I think it sounds cool.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** I'm excited about just the economies of scale really at that point, because it's generally been harder to add more developers to a team, and get better.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** You might go faster, but not necessarily always better. And it's not their fault necessarily, because of willpower, right? Or just like human nature, like "I don't like you" or "You don't like me." It's hard to work together. Or "I had a bad day" or "My weekend sucked." Whatever makes you less effective or productive.

**Beyang Liu:** Absolutely. And you should absolutely go read the Mythical Man-Month, because what you just said there is kind of like the core thesis of the book. It is adding more people to a software development project makes it take longer... Which is -- it is the truth that has held true since the dawn of software development. It is the fundamental challenge that we aim to solve, and it's frankly the thing that's holding back the quality of most software in the world today.

**Adam Stacoviak:** Very cool. Thank you, Beyang, for sharing the depths of Sourcegraph and your journey. It's been fun. Thank you.

**Beyang Liu:** Absolutely. Thanks for having me on again, Adam.

**Outro**: \[01:39:59.10\]

**Adam Stacoviak:** I had forgotten that you open-sourced Cody.

**Beyang Liu:** Yup.

**Adam Stacoviak:** And I feel deeply, like, "How do I not know that?" But there's so much that happens in our industry, and I can't remember it all... But I think what made me not realize this is like, it seems like to get into Cody, I have to have a Sourcegraph account.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** And then I don't know how to have a Sourcegraph account, because I try to have a Sourcegraph account and it says "That email doesn't exist." I'm trying to sign up even.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** I was doing it during the show and I was like "What's happening here?" So I don't know how that works or what's going on there, but share with me this wart that I've exposed.

**Beyang Liu:** Yes. We are fixing this. So here's the historical context... A couple of years back we made the really bad decision to eliminate any self-servability in our platform... And at the time, it was just a matter of focus. We were bandwidth-constrained, and a lot of the pull that we saw in the market was for enterprise codebases... Because those are the people for which the pain that we solve becomes existential. It's like, you feel the pain of context gathering in a small codebase, but you're still small, the codebase fits inside your editor... It's not the end of the world. Once you reach a certain scale, then it's like "Holy crap, we can't get anything done. This is existential." So that's where the pull in the market for us --
