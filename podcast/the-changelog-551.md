**Adam Stacoviak:** Abi Noda, welcome to the Changelog. We were going to have you on Founders Talk, but it made sense to promote this to the Changelog, because it's such a big topic. It's not just your journey personally, and then also with DX, your company, but more so developer experience at large. You've got such a rich history; you've been steeped in it, you're knee-deep in it, all that good stuff in it... So I figured let's get into it here on the main show, the Changelog. So welcome to the Changelog.

**Abi Noda:** Thanks so much, Adam. Thanks for the opportunity.

**Adam Stacoviak:** Hey, man. So I've been a fan behind the scenes; we met up about a week-ish ago, I want to say... You gave me a peek behind the veil. So when people go to getDX.com and they think "What is this thing?", you showed me what is this thing. But I wanna know how you got there? What exactly is DX? These are big questions I wanna answer. Let's not begin there necessarily, but what is DX? Who are some of the movers and shakers behind the scenes? You've got PhDs, you've got yourself... I'm not even sure what your credentials are besides your experience. So assume the listenership is obviously a developer, so help us all understand truly what DX is, and why we're so fascinated with it, and why it's important to get it right.

**Abi Noda:** I mean, so many places we could begin. I'm sure we'll go in all kinds of directions... But it's a boil it down, DX, the company, the research, the product, my journey over the last few years all exists to tackle this one hairy problem of how to get data, how to measure developer productivity. This is a question, this is a problem that's eluded everybody in tech for decades. I was talking about - hey, software development has only existed as a discipline for what 30-40 years. Maybe longer than that. And figuring out how to measure software development has been an unsolved problem. And it's a big problem. All businesses want to know how to figure out who's been good, who's been bad, how to make teams more effective, how to get more productivity out of the immense amount of money that's invested in software development... But there's not a good way, really, till today; at least that's my point of view.

But I've spent the last seven years trying to figure out this problem, starting with being a developer myself, who was subjected to different types of metrics on different teams, and different management styles, and then becoming a manager and being asked by my boss "Hey, Abi, show me something that tells me how good engineering is doing", to going and talking to mentors and experts, and realizing that no one really had a good answer... And then spending the last five years trying to actually solve this problem through different products, different experiences, different research. So DX is really a culmination of that journey, and it's still an ongoing journey. I wouldn't necessarily say I've cracked the problem fully yet.

**Adam Stacoviak:** So we will have a challenge then with the company being called DX, and then obviously the discipline that you're trying to measure being DX as well. Great brand name for your company, but kind of confusing when you're actually trying to have a conversation around what developer experience is, not DX company. So that's okay, though. Just be particular whenever you say your company name, so we're not confused.

**Abi Noda:** Yup.

**Adam Stacoviak:** \[00:08:19.03\] So how did you get into it particularly? Sure, you were a developer, you were an engineer... Why did you fall -- I suppose, are you in love with it? Did you fall in love with it? Why did you seemingly fall in love with this discipline to measure developer productivity?

**Abi Noda:** Yeah, I don't think I'm I woke up one day and decided "Man, I really want to be an expert on measuring developer productivity." I think I've just been attracted to problems... Any problem in my own life, I tend to go down the rabbit hole. And this is one that's kept me pretty occupied for a number of years.

I think it's a personal issue, having been a developer; my father was a developer, my brother is a developer... And even at some points we worked together on teams, and dealt with --

**Adam Stacoviak:** Wow.

**Abi Noda:** Yeah, and dealt with, at times, dubious management practices, as all developers have faced at one point or another. But this problem really, really struck for me when I became a manager, and in a way, I also wanted to understand how productive our team was, from a standpoint of personal mastery and drive. Like, we all want to feel like we're good at what we do, and we all want to feel like we're getting better. And in software development the question is, "Well, how do I know how good I am? How do I know if I'm getting better?" Of course, my boss had the same question, and I needed an answer for him... But figuring out "How do we answer those two questions?", that's really fundamentally what's kept me occupied.

And then realizing that there's a lot of things a lot of leaders and companies are doing out there trying to solve this problem, but don't work. And not only did they not work, they really pissed off developers and really set teams back. I mean, all kinds of bad things happen when you use subject developers to the wrong metrics. This is also a really important problem, I think, and a problem that has real implications for our industry in the future, all the technology and software that's being created. So that's what's kind of sucked me in.

**Adam Stacoviak:** Yeah, I wanted to ask you how you describe developer experience, because there may be some - and I was in that camp, and kind of still am, to some degree; I think it may be it's multifaceted, because you might say, "Well, this product has a good developer experience", which just means I'm a developer using a tool or service that's aligned and for a developer, and so therefore I want it to have a good, developer-first experience. That's different than developer experience as its measured in productivity, which is probably what helps the product be good and have a good developer experience, but it's not what we're quantifying as developer experience. Can you break that down like that, those divides there? I mean, that seems pretty obvious, but can you explain why they're different and make that super-clear for me?

**Abi Noda:** Yeah. I mean, you're getting at -- accurate statement here, there are two different kinds of contexts in which the term developer experience is used... One of which is what you've just described. If you're a dev tools company like GitHub, and your users are developers, we typically are used to calling that user experience. But if you're a dev tools company, you often call that developer experience.

**Adam Stacoviak:** For sure.

**Abi Noda:** But that's just really referring to user experience where your users are developers. And then there's this other context, which is the one sort of I live in, and I'm focused on, and the companies we work with are focused on, which is we are a company that's trying to improve our developer productivity. And in order to do that, we need to make sure that developing software is fun, delightful, fast, efficient, easy... And that is the other developer experience. That's the developer experience of "How do we enable developers within our organization to have a good experience, so that they can deliver maximum value to the business, so that they can be as productive as possible?" So yeah, those are the two different -- external/internal-facing developer experience might be an easy way to remember it... But those are two kind of different definitions of it.

**Adam Stacoviak:** \[00:12:18.02\] Yeah. Because when I came to DX, or the domain getdx.com, I was thinking "Okay, is this a company that helps me ensure that my developer-facing dev tool has a great experience? Or is it something else?" Because I've been in product management; not really engineering management, necessarily, but product management. And so I've interfaced with software developers; I've never had to measure necessarily exactly how efficient engineering is personally, but I've had to measure how efficient we are at building products... Which is kind of the same, but not quite the same always, because that interfaces with business, that interfaces with marketing in some cases, that interface with product alignment, and product-market fit... Which is not necessarily just simply "How do we build this thing? How efficient is this?" Simply just the developers, the engineers building this thing. And so I've never really been in the camp I'm measuring specifically productivity. Why not just call it developer productivity though, or something else? Like, why only murky the water any further? Who named this thing, Abi?

**Abi Noda:** Yeah. Well, first of all, that's good feedback on our marketing in general. You're not the first person to have that confusion. But this problem we're talking about here actually exists outside of just our branding and marketing.

**Adam Stacoviak:** For sure.

**Abi Noda:** DevEx is a -- a lot of our customers are DevEx leaders, like VP of developer experience, developer experience team... So this is a term and a concept nomenclature that's starting to gain traction outside of just this conversation. But to your question, this question around "Do we talk about productivity or do we talk about experience?" This is a conversation, this is a tension that's been going on in my head, and within our company, since we started the company. Even just months ago we were having this conversation, and it's often gotten confusing just in terms of how we're thinking about it. Like, is developer experience different than developer productivity? Or are we just using a different term to talk about developer productivity? If they are two different things, how are they related? Which one's more important? Which one comes first?

So to answer your question directly, the term productivity is a little bit of a tainted word, especially in software development. So to answer your question, we know that we don't want to go around -- like, when we say "Hey, we help companies measure developer productivity", every developer out there, same thing comes to their mind immediately. Like, "This thing is gonna suck."

**Adam Stacoviak:** Okay...

**Abi Noda:** Right? "This thing is gonna \[unintelligible 00:14:50.04\] All the bad metrics that we've ever heard of, that's what comes to their minds. And they feel like "Oh, this is a tool for managers to figure out who's good, who's bad, with stupid metrics, and hire the wrong people", all that kind of delightful stuff that does really happen at a lot of companies.

And so one of the reasons for naming this thing around developer experience is to make sure that it's clear that that's not what we're doing at DX. We're not focused on counting lines of code, and commits, and using that to stack rank developers, or even measure teams' success. What we're trying to do is - our point of view in general is "Hey, if you want to improve productivity, you've gotta eliminate the friction that's in your developers' way. You've got to help them have a good experience." And so that's really our mission. That's the philosophy, that's the lens through which we're viewing this problem of developer productivity.

So we're absolutely still trying to provide signals and measurements on how to improve and understand developer productivity, but it's through the lens of developer experience. It's a different approach to an age-old problem. So that's really the genesis of the name and why we align with this term.

**Adam Stacoviak:** \[00:16:03.17\] I'm going to use potentially your words; you had some co-authors, you had Dr. Margaret-Anne Storey, Dr. Nicole Forsgren, Dr. Michaela Greiler -- I believe these are all doctors... I can't say her last name, I'm sorry.

**Abi Noda:** Greiler.

**Adam Stacoviak:** Greiler. Gosh, I've never heard it out loud. I'm so sorry, Michaela. And then of course, you authoring this at acm.org, for ACM Queue back in May. This is how you described what is DevEx, and you being the proverbial you, all of you writing this. You said "Developer experience encompasses how developers feel about, think about and value their work." I think that is really a great description of what exactly it is, because when I can't sleep at night and I'm focused on a problem... Because sometimes you don't solve the problem at your keyboard; you value your work enough to think about it after work, or whenever you're eating dinner, or whenever you're on your run, or whenever you make your morning coffee, or whatever it might be... But how do you think about, how do you feel about, how you value your work - all of that feeds into my ability as a developer to care about those problems, even if I don't care; like, if I love my team, if I enjoy the team members I'm working with, if I enjoy the problem I'm working on, the language we've chosen as an organization, how frictionful or frictionless it might be to get problems solved and get code shipped... All these things I'm sure come into play; you're nodding your head, because nobody sees your video, at least -- maybe it's a clip, and they're seeing that, but in the audio they're not seeing that. So that's a good description. Can you kind of go a couple of layers deeper on how this truly plays out when you think about how developers feel about, think about, and value their work?

**Abi Noda:** Yeah, it all starts, again, with this point of view on developer productivity, which is that -- I mean, taking a step back, how do you make developers productive? Let's say, Adam, you have developers; how do you make them productive? There's kind of two ways you can go about it. There's the way where you kind of like give them really tough deadlines, crack the whip, tell them to type faster, work longer, work harder, move faster... Right? That's one approach.

**Adam Stacoviak:** Sure.

**Abi Noda:** And you could probably do a little better than that...

**Adam Stacoviak:** Diminishing returns, probably...

**Abi Noda:** Yeah, diminishing returns. People might leave...

**Adam Stacoviak:** Temporary increases, long-term no gains, yes...

**Abi Noda:** Exactly. Then there's another approach, which is you say, "Okay, I'm paying these people a lot of money. They're smart, they're really smart people, and they really love what they do, they really care about the work. They could work anywhere, they decided to work here. How can we help them be productive? What can we do to create an environment where they can move as quickly as possible, create the most beautiful products? How can we do that?" And if you've thought about that question, like how do we enable reaching maximum potential, so to speak, you'd start thinking about a number of things. You would think, "Okay, how can I get people really excited and motivated to actually work? I'm not going to tell people to work 18 hours a day, but what if you could just get them so excited and motivated that they did work 18 hours a day? I mean, all developers have put in really fun 18-hour days. I do all the time. And it's not because someone's telling me I have to, it's usually because I'm sucked into a problem like the one we're talking about here.

You would also think about "Alright, where are they wasting time? Like, where's time just getting lost because they have stupid tools, stupid processes, and we're not even giving them clear instructions on what the business needs? Where are they maybe kind of \[unintelligible 00:19:27.15\] away from the team because something's stressing them out, or there's a conflict, or just the way of working is causing friction?" So these things, all these things, these social factors, these technical factors - this is what makes up the developer experience.

There's various kinds of academic definitions of developer experience. We provide one in this paper, and another in a previous paper we've written, and it builds on all kinds of prior literature on psychology, which are really complicated and interesting, like the trilogy of the mind... Pretty interesting concepts.

**Adam Stacoviak:** Sure.

**Abi Noda:** Like, what is experience? There's research and literature defining--

**Adam Stacoviak:** \[00:20:08.09\] It goes deep, huh?

**Abi Noda:** Yeah, it goes really deep. Too deep. But in layman's terms, developer experience is the sum of all those parts that I just kind of painted a picture around, like the friction, the motivation, the things that get in your way, or pull you in and help you go faster and feel more excited about your work. That is what developer experience is, and our point of view is that by measuring and improving those things, you're going to maximize the potential, whether it's productivity, or quality... There's more than one outcome here that we're trying to optimize for, but you'll be able to maximize the potential of your tech organization in that way.

**Adam Stacoviak:** Take me back to the prior company you started, Pull Panda. I believe it was acquired by GitHub at some point, I'm not sure when necessarily...

**Abi Noda:** 2019.

**Adam Stacoviak:** 2019? Okay. So that's what probably got you started at GitHub, because your company was acquired. Based on LinkedIn, it says you helped 7,000 companies with their tooling to be productive for developers. What was it like then? How was this, I guess, tooling market thinking around DevEx change over these years, since Pull Panda to now? How much have you learned, how much has changed?

**Abi Noda:** A lot. I mean, 180. And I'll get into that. So when I started Pull Panda -- Pull Panda did a number of things. It was a suite of products, it was priced very cheaply, hence why there were 7,000 companies using it. It was priced way too cheaply, but it was a good business. In any case, the core problem I was trying to solve with Pull Panda is the same one I was trying to solve today.

At the time I started Pull Panda, I was just starting to grapple with this problem. I'm talking about "What can we measure? We've gotta have something. We have nothing. People are telling me you can't measure it... That can't be true. That can't be the final answer here."

And at the time, there were starting to be a couple of companies popping up that were advertising that they did measure software engineering. They could give you a view into the black box that was software engineering. These companies were primarily doing it by ingesting data from tools like GitHub and JIRA - so pull request, commit, ticket data - and then giving you a bunch of analytics on that data. So things like how many tickets are people producing? How often is a line of code changed after it's written? How long does it take to do a code review?

So at the time, I believed there's potential that there was opportunity there to provide useful insights by looking into the code repositories of development teams. And so the flagship product of Pull Panda was something called Pull Analytics. And what it was was a tool that pulled data from your GitHub repositories, and then gave you a whole bunch of charts, metrics, leaderboards... All kinds of stuff pertaining to what was going on in your development team.

What I've found through this experience - the thing I've found... I've had thousands of teams, thousands of companies using this. And there was something really unsatisfying about it. Well, first of all, a couple of anecdotes I would share... First of all, I just looked at engagement numbers, and just not that many people were looking at this data. A lot of people were excited about the idea when they first heard of it, and like signed up, or I told them about it... But when I was looking at the user engagement, I was just like "Are people really using this? Are people really getting value out of this?" And so I began to probe. I began to ask "Hey, tell me, are you using this? What are you using it for?" And what I kind of discovered was that they were only using it for really narrow use cases. Typically, it was just "Hey, we're just trying to understand our code review process", like optimize code review turnaround, which is a great use case, but it was really small compared to the problem I was trying to solve, which is "How do you measure developer productivity?" So I was like "Okay, this is like a thin slice of the problem. This is one slice around code review. What about everything else?"

\[00:24:12.19\] Then people started asking me for more metrics. So let me give you one example... They would ask things like "Hey, well now we're doing faster code reviews, could you tell us how good those code reviews are? Give us a metric on code review quality."

Then I remember a really reputable company suggesting, they're like "Hey, could you count how many words are in the comments people are writing in their code reviews, and use that ratio against the number of reviews? That ratio could be our metric in code review quality." So I was like "Yeah, we could do that... That seems pretty -- there's a lot of reasons why that's not going to give you a good signal."

**Adam Stacoviak:** Right.

**Abi Noda:** And it was around this time that I started having this much larger sort of realization, if you will... And what I started to realize was like, okay, companies are trying to use this data to answer questions, like "What sucks? What's slow? What's holding us back? How good are the code views?" And what I began to realize was "Hey, every single one of these questions --" I literally had a spreadsheet where it was like question, potential metric; question, potential metric. And the metrics were things like this, like number of commits divided by x, blah, blah, blah. Kind of weird quantitative metrics. And what I began to realize, what kind of hit me - and it really hit me after I read this book called "How to measure anything", which I would recommend to listeners, is that every single one of these questions that we were trying to answer with this quantitative data from GitHub - you get a better answer if you just ask your developers. If you just literally asked your developers, "Hey, how do you feel about the quality of your code reviews?", that would give you a lot more information than how many comments per review comment per GitHub pull request?

**Adam Stacoviak:** Yeah.

**Abi Noda:** If you just asked your developers "Hey, do you get code reviews fairly quickly? Or do you sit around and wait?" That would give you a way better signal than the really kind of messy data we were pulling out of GitHub. So this idea that, "Hey, we could get way better signal if we had a way to kind of systematically ask developers about their experience, if we could turn that into numbers, and put it on charts, and make executive dashboards, then everyone would be happy", that was a realization and an idea that was born right about the time I sold Pull Panda to GitHub.

And then at GitHub, funny enough, they put me in charge of essentially the same problem of "How do we measure software development?" Funnily enough, at GitHub we were trying to tackle that internally as well. GitHub had just been acquired by Microsoft, new leadership... Leadership felt like "Man, engineering is moving too slow. How do we speed this thing up? Let's get some metrics and figure this thing out." So through those experiences, which I can go into more if you'd like, I became convicted in this belief, that "Hey, just pulling the data out of the pipelines and the repositories - that's just never gonna give us enough. That's gonna give us some good data, but it's not enough. And if we want to get the whole picture, we're gonna have to tap into the developers' minds and their own report of what's going on in SDLC."

**Adam Stacoviak:** Yeah, I agree with that. It's almost like the adage, "Talk to your users." It's kind of like that. You don't not talk to your users to figure out what they want, you talk to them and you get that relationship, you get that true human feedback. My suspicion is that there's potentially some angst to answering these questions if it's not served in a way that is not like personally threatening to the individual answering. If they understand why management etc. is asking these probing questions, and not just looking at "Hey, just look at the JIRA tickets", or whatever; like, the initial thought might be "Just probe the data within the tools, and you'll get your answers. Why are you asking me this?" Is there any pushback? You mentioned psychological aspects to this process; is that part of it? How do you get these folks to not be concerned that you're asking them questions, and getting them to be truthful in their responses?

**Abi Noda:** \[00:28:18.00\] Yeah, well, first I'm gonna call out - just in our paper we provide some advice on how to run developer experience surveys. This isn't something we've invented. This is a practice that companies like Google -- Google's been doing it since I believe 2018; companies like Microsoft, Shopify, Stripe... All the top tech companies, this is something they invest heavily in, and have for a number of years.

When we got started, I actually didn't know that myself. I didn't connect all the dots. I was kind of in my own bubble of "How do I measure productivity?" I was a little disconnected from some of the developer-listening, developer survey stuff that big companies already do. And one of the things that really surprised me, that we learned really early on with our company DX, was that developers actually really enjoyed participating in these surveys.

**Adam Stacoviak:** Is that right?

**Abi Noda:** Yeah. I mean, to paint a concrete picture, when we started kind of pitching this idea, this vision, "Hey, we're going to ask your developers questions to get insights", the majority of companies we talked to did not believe that we could even get participation. Like, "No way developers are gonna fill out these things out." And me, having come from my previous company, where another product was called Pull Reminders, and all it did was send reminders developers that do their code reviews... I was like "Yeah, if it's hard for them to do code reviews, it's gonna take a lot of nagging to get them to fill out surveys."

**Adam Stacoviak:** Right.

**Abi Noda:** But what really surprised us was - and I've heard the same thing from other organizations like Google, where they're like "Actually, developers really engage with this type of stuff." And when you take a step back -- so what we've seen is the participation rates can be really high. I mean, I'm talking like 90+ percent. So across our customer base, we average over 90% participation, which is way higher than benchmarks for HR surveys...

**Adam Stacoviak:** For sure.

**Abi Noda:** ...in most organizational surveys in general. The other thing we see is in the comments in the surveys, the open text responses - we see developers write essays in these things. I mean, it's mind-blowing. I mean, they really pour their minds into providing feedback. And a researcher I was just talking to at Google said the same thing about their surveys. He remarked that people write so much stuff... And when you take a step back, it makes sense, because I think one thing we would probably both agree on in terms of a characteristic of the developer population is that we have a lot of opinions.

**Adam Stacoviak:** Oh, yeah. Yup.

**Abi Noda:** And I think we're often not giving them voice.

**Adam Stacoviak:** Strong opinions, sometimes loosely, sometimes hardly held. Yeah. For sure.

**Abi Noda:** Exactly. And we don't just have strong opinions, but we're often not heard, especially at an organizational scale. My observation has been like that this is almost like releasing a pressure release valve. That's what it kind of feels like when companies deploy this type of program, is they get a ton of feedback. And to your point earlier, there are always concerns around "Hey, how's this data going to be used? Is it anonymous?", all those sorts of concerns... But those are fairly easy to address, and when positioned in the right way, and with the right safeguards in place, we're seeing organizations sustain this in really successful ways.

**Adam Stacoviak:** I mean, my empathetic standpoint would be to put myself into someone else's shoes who's in that position, and try to best mirror exactly their experience in life, would be if I answered these things fully and wholeheartedly, and they improve my teammates' lives, and my life, and my work life etc. and ultimately help me get more value and more joy out of my work, then I'm gonna be more inclined to participate to as best degree as I can offer.

**Abi Noda:** \[00:32:11.23\] Absolutely.

**Adam Stacoviak:** And maybe, like you said, write essays, in the real tech side of it comment back, and have that fidelity in there... Because that's going to help me enjoy working wherever I'm working. And then I may actually gauge and judge my next opportunity should I decide to move to a different team, in the organization or somewhere else, "Do they do DevEx surveys", or whatever you call these things? Because if they don't, then maybe they don't care. Maybe they're not trying to improve, or they're not measuring the necessary things to improve. And it may then become a gauge to value future opportunities and say yes or say no.

**Abi Noda:** And I hear that all the time. I mean, I get emails and messages from developers all the time, like "Hey, I just read this paper on developer experience, and man, things are really rough where I work... And I'm looking for a new job. Are you guys hiring?" \[laughs\]

**Adam Stacoviak:** Right... That's cool.

**Abi Noda:** And to your point about how this is positioned, it's really important -- you know, traditional HR surveys are usually very sensitive. I mean, they ask you questions like "Do you think your manager is good? Do you trust your team?" I mean, these are pretty sensitive subjects, and it's very confidential. I've personally unfortunately been in experiences where my manager says, "Hey team, the surveys are not making me look good. What are y'all doing?"

**Adam Stacoviak:** Is that right?

**Abi Noda:** Yeah, \[unintelligible 00:33:35.04\]

**Adam Stacoviak:** "Can you please be less honest...?"

**Abi Noda:** Yeah, this has happened, unfortunately, at a couple of companies I've worked at. But DevEx - this type of survey is different. This is coming from a team - not usually even like an executive; this is coming from a team, maybe like a developer experience team, whose job it is to make your life better. To make it easier for you to deliver software, to improve your tools, improve your processes... And they're saying, "Hey, can you help us? Can you help us do our work better? Can you help us understand where to invest? What area of the organization to focus on, how things are going? ...by telling us how things are going." So it's a very non-threatening type of a survey. Very different than -- but to a lot of people, because they're used to the HR surveys, the rate your manager surveys, it does take some education and clarification up front to make sure people understand "This is not that type of survey."

One thing we do with these results is actually they're completely transparent to everybody. So developers, managers, leaders - anyone can access this data. Of course, it's aggregated, so you can't see "Hey, someone's rated this specific thing as being sucky." But everyone -- it's completely open, everyone has access to the data, anyone can get value out of the data... Very different, again, than an HR survey, which typically even managers don't always get access to the data. HR kind of filters it down, and distributes kind of dumbed down reports with only the parts you're allowed to see... So a very different type of process.

**Adam Stacoviak:** So why do you think no one's gotten this right yet? Why are you the one, Abi? Why is DX the company that's getting this right?

**Abi Noda:** Well, it's really interesting... Sometimes I ask myself that question. First of all, it's just coming to the conclusion that this is the more promising path to getting insights on your engineering decision. I mean, that took me five years; five years of like mental strain. It's not like it was obvious to me, "Hey, yeah, we can't just measure this stuff from pull requests. We've got to --" Like, that took years to even arrive at a place where I was willing to try that out, and began connecting the dots.

So I think we're early in the sense that we've decided "Hey, that's what we believe, and we're going to do it." And I think a lot of other folks are going to do the same, because I believe this is the right way... The other thing is that even once we've decided "Hey, this is what we're gonna do", it's been really hard to figure out how to actually do it. For example, at GitHub we ran - and they still do run - developer experience surveys. And to give you a picture of how that was going, we never, to my knowledge, got more than like a 40% participation rate. And to even sustain that, we never ran the survey more than twice a year.

\[00:36:25.28\] To run a survey, it took a team of senior leaders and a group of PhDs a lot of time and effort and money to try to figure out what questions to ask. Of course, the first time you ask these questions, you realize half of them suck. They don't tell you anything. So on the next survey six months later you change it up again, so now you don't have any trends; so your data is not that useful.

So it's a painstaking process to do surveys right, just from a design standpoint. I'm not an academic in this field, I work with people who are, but I've got enough books on my bookshelf now to be able to tell you how difficult it is. I always tell people as a joke, "Look, writing SQL queries on the pull request data - that was easy." Designing surveys that can really measure in a reliable and valid way technical debt? Like, that's really hard. And that's not just hard for us. I speak with folks at Google who are trying to tackle that same problem.

So surveys are really hard, and I don't think you really realize that till you get into it. All the problems around design, data analysis, participation rate, communication, workflow around it... It's really, really hard stuff, that involves a lot of expertise that doesn't really exist in most tech organizations. Industrial organizational psychology - those folks typically end up in like people analytics and HR, not in engineering. So there's kind of a skill and expertise gap that exists, that I myself had when I got into this... But I think it exists in most organizations, that makes this not as accessible as an approach as you might think it would be.

**Adam Stacoviak:** Are the questions contextual to the team, in most cases? Or are they unanimous questions that are like "Okay, we can ask this type of question to almost any engineering team of 100+", or whatever it might be? Can you give examples of questions, and that way we can sort of like judge the question, live here on air also, just for listeners? Like, "Okay, Abi, obviously, you said this is hard to ask the question..." What are some of the questions you might ask that pose the challenge?

**Abi Noda:** Yeah. Well, I'll give you an overview of how we kind of approach this, and then I'll workshop one with you that will really highlight how hard this is, and what's kept me up.

**Adam Stacoviak:** For sure. Okay.

**Abi Noda:** Just one example of something--

**Adam Stacoviak:** We can -- maybe scenario basics.

**Abi Noda:** Yeah. So to give you an idea, we do a mix of things. So we have some questions that are role-specific. If you're in a technical role that doesn't write code, we're not going to ask you about code. If you write code, we're gonna ask you about code and the tools involved with writing code. We also have questions that are more objective, and some that are subjective. An example - if I asked you a question like "How old are you?" You're gonna give me a fact, I hope...

**Adam Stacoviak:** I might lie...

**Abi Noda:** If I asked you, "Hey, how much do you enjoy podcasting?" That's a subjective question, and you're gonna give me a feeling. So we asked both types of questions. We asked what are called attitudinal questions, which are feelings and opinions, and we asked behavioral questions, which are really facts and events.

Now, then we also ask questions along a number of different topics. And those topics themselves - I think we talked before this show about how we kind of figure out what are the right topics to talk about... But in a broad sense, we have a framework, we use kind of statistical analysis to constantly identify and reidentify what are the top 25 things that affect developer experience, that are the things that most organizations should be focusing on. Organizations can definitely customize and have their own ideas, inject their own questions and opinions into this.

\[00:40:12.28\] Now, I want to walk you through, I think, a good little exercise here to show how hard this is. So let's talk about technical debt. So you're an organization and you're like "Alright, we want to measure technical debt." Okay. Well, first of all, what the heck is technical debt? That is, first of all, a problem. We're not going to rabbit-hole into that, but Google recently, just a couple months ago, published a paper where they said, "We tried to define technical debt, and were able to define it in terms of these seven things." Now, I think they should win the Nobel Prize for that paper...

**Adam Stacoviak:** Is that right?

**Abi Noda:** Yeah, it's impressive. But let's forget even what technical debt is, but let's just -- like, how would we measure it? Well, early on, one way we tried to measure it - we were just saying "Hey, how do you feel about the amount of technical debt that you have on your team?" Can you guess what we saw from that?

**Adam Stacoviak:** I don't know. Low? High?

**Abi Noda:** Low.

**Adam Stacoviak:** Very low?

**Abi Noda:** Everybody was low.

**Adam Stacoviak:** They're like "Our stuff is locked solid over here, okay? We're good."

**Abi Noda:** \[laughs\]

**Adam Stacoviak:** "We write good code, no bugs, very little bugs... No tech debt."

**Abi Noda:** What we've found is that developers pretty universally have angst towards their code. Well, not just code, but the state of the codebase. And that's no surprise. Technical debt is not like do you have it or you don't? It's actually a matter of how much of it do you have, and how bad is that? Are you bankrupt or not?

**Adam Stacoviak:** Right.

**Abi Noda:** So then it's like, "Okay, well, how do we actually provide a good measurement of that?" So one thing we did - and this is to your question of do we ask the same questions, or different? So we asked the same question a bunch of different companies, and now at least we could compare them and say "Hey, look, everyone's pissed off about technical debt. But your company is more pissed off about technical debt than the other company." That is an interesting single, potentially. But then it's like "Okay, how much does this even matter? Why does this matter to the business?" Okay, we all have technical debt, we're all kind of pissed about it; we're more pissed about it than other companies. Why does it matter? Okay, well, how do we try to measure that? How would you measure how much time you're losing, or what the impact is of technical debt? Well, there's a lot of impact. Technical debt can make things harder; the things can just literally break, because they're just kind of duct-taped together. The quality... Like, that takes time, and costs money... There's just like "This is such murky, mucky code that I don't even -- I'm afraid to go develop this feature. I'm not even going to do it. We're just going to not do certain things, because they're gonna be really hard." So how do we measure that? How do we measure the cost?

Well, this is a work in progress, but we've tried a lot of different things. We've tried to ask them "Hey, on average, how much slower does your team move due to being hindered by technical debt? Can you provide a percentage?" Well, developers say "Ah, percentage..." Developers care a lot about this, I'm telling you; if you ask a question that they can't answer, they'll go look at their own commit history to answer. They'll be like "I can't estimate that. How can I estimate that, Abi?" Like, just give a ballpark. "We can't do that." Okay... So what do we do? Well, maybe a better question is like -- look, we all have technical debt, we're all slowed down by it. What are we going to do? We all have a business to run. We can't even fix it. No one's gonna fix tech debt at their company completely. So maybe a better signal would be around "Are we investing the right amount in technical debt now? Is the balance of technical debt to feature work, in your view, to the developer, optimal?" Maybe that will give us more actionable signal, because developers are smart. They know that we can't just work on technical debt; there's always technical debt. We can't also just work on features, because that's going to put us into debt, and ultimately make us slower. At GitHub we paused feature development - I think you may have had other guests on your show talk about this, but we've paused for a quarter; we paused features for a quarter just to work on like DevEx and technical debt.

\[00:44:14.18\] So that's an example of just a journey I'm taking you through where it's really hard. And I'm not even talking about like designing the actual questions themselves, which have some -- well, what technical debt are you asking about? Are you asking about my team? Are you asking about my codebase? Which part of the codebase? Are you asking me in general? Are you asking me about my code? What timeframe?

**Adam Stacoviak:** Right...

**Abi Noda:** So it's really hard. It's really, really hard.

**Adam Stacoviak:** And if you're only having to answer these questions twice a year, or be able to ask them, in the GitHub case, of the assurance like "Well, if we asked twice a year and we get 40% ish involvement, then..." Yeah. I think I might be kind of good at asking these questions, Abi. I'm sitting here thinking about these in particular, because around here at Changelog we have some code that we know, we have identified that we would just delete. And that's great, because that's kind of like tech debt. It's code that is no longer useful.

**Abi Noda:** That's one of the categories from Google.

**Adam Stacoviak:** Right. Or it's code that stops us from being able to be productive. And it's like "Okay, well, do you have any code that you would delete? And if you deleted that code, how would it impact your personal work or your team's work?" So I'm not envying your job, but I think that I can ask some pretty good questions. That's what I do naturally, so...

**Abi Noda:** Yeah. You're a journalist.

**Adam Stacoviak:** There is certainly a science to this, for sure. A science and an art, to asking the right kind of questions to uncover the depth of what might be there. But you're right, when you ask about tech debt, you kind of have to get specific timeframe, my code, our code, the code... It's like, okay, you have to almost define things... Like, here's a thesaurus first of all the things I'm talking about, and definitions etc. and now here's the question. Based on this lexicon, here's the question, and it's a one-liner.

**Abi Noda:** Absolutely. And we skipped one of the hardest parts, which was like "Is there even a common definition of technical debt?" Because you even use that term in your question. Because if different people don't even have the same definition, then you're not going to give answers that are the same. And this scientific side of survey item development is fascinating. And I mean, this is another rabbit hole I've personally gone down... I mean, how many scale points? Likert scale, unipolar/bipolar scale... I mean, there's too much--

**Adam Stacoviak:** There's other scales? There's many scales? \[laughter\]

**Abi Noda:** There's many scales, and... Oh, and there's different ways to score them. Do you wanna do top box scoring? Do you want to do mean scoring? Do you want to do both? There's NPS scoring, there's net scoring, CSAT...

**Adam Stacoviak:** I don't even know what you're talking about. My eyes just glazed over. What are you talking about?

**Abi Noda:** Things that no one should hopefully have to struggle with as much as I have. But what's been really interesting is -- two things I kind of like want to highlight here. First of all, developing survey items is actually very similar to the way we think we should develop products... Meaning that to actually develop survey items in a rigorous, scientific way you actually go through a process where you put them in front of people, and you essentially do controlled studies around how people interpret, and respond to them. And that's a really, really interesting process. It's been a part of DX, and working with researchers...

Another thing that -- and I shared this in an interview we did about the paper, with Nicole and others... But there's actually a book on my bookshelf, it's called "The psychology of the survey response." And in the book - it's actually one long paper; it's really hard to read. But they have a thing that actually breaks down the cognitive steps involved in answering a question. And it's really fascinating, because it looks like a computer program. I mean, it looks like an algorithm.

\[00:48:00.10\] And so when you think of the human minds not as like just an emotional, unreliable, biased, subjective thing, but rather if you look at the human mind as an algorithm that can be used as a measurement instrument, then you can begin to design questions in a way where you understand the program that the floppy disk is being inserted into. And when you understand the steps the human mind goes through... I mean, literally, the terms are like "retrieval." Like, "information retrieval." When you look at the human mind as a program, almost like a computer - hopefully, that's okay to say here, but...

**Adam Stacoviak:** That's okay to say here. I agree with that.

**Abi Noda:** Yeah, it's really, really interesting. And it really opens your eyes up to what's possible... It really moves you away from this place of not viewing humans and survey data as like a bunch of biased, unreliable, "What did they have for breakfast that day" type information, but rather like "How can I fine-tune my measurement approaches so that I can feed this algorithm that the human mind is measuring -- this measurement instrument? How can I feed it the right input such that I'm gonna get back reliable output?" And when you look at it that way - I mean, again, there's a lot of work involved in doing that, but I think you can see it for its possibilities a lot better. I mean, you can really measure anything. And in fact, the book "How to measure anything", which I really recommend, really talks about this. The human mind as the ultimate measurement instrument.

I mean, before AI -- it's like, how hard is it to write a program that can recognize people's facial expressions? That's pretty hard, right? It's pretty hard to do that with software objectively. But a three-year-old can do it; the human mind can do it. So how can we leverage the human mind as a thing that gives us information reliably? That's ultimately the problem we're trying to solve when we design surveys.

**Adam Stacoviak:** That is deep. That is deep. And it makes you think about potentially even detective work, to some degree. Or even believability or accuracy to like eyewitness recounts, and stuff like that. Because there's things like time away from the problem, and you forget, and you'll remember the good things... And so therefore there is no tech debt, because you're so removed. But then if you get steeped back in the context, in the muck of the details, then you're like "Oh yeah, I forgot about this, that and that. Wow, okay. I'm that far removed."

So you almost have to ask these questions, to some degree, with a timing aspect too, like you said. I can only imagine this job gets infinitely harder as you start to unlock it. But if you can really do the research and apply psychology in ways that does make sense, then you probably get pretty good results. Much better than you do out of just lines of code, bytes in a commit etc. That's just not -- that's waypoints, not truth necessarily. And I think truth comes from truly what is happening on the ground. But you've got to ask the question in a timely fashion. If you're asking me about three months ago, I may forget; or five pull requests ago, and I invest two hours pull request... Well, my mind only has so much personal mental RAM that I've forgotten the hard details. So you've got to ask me within the context of the challenge, and the problem, and the pain really even, too.

**Abi Noda:** Exactly. And I hope we haven't gotten too deep, because I think this was all a response to your question of "Why aren't more people doing this already?"

**Adam Stacoviak:** Kind of, yeah. Yeah.

**Abi Noda:** Yeah. And I said, "Hey, it's hard." Yeah.

**Adam Stacoviak:** Well, I think the answer probably is that it's hard. That it's hard, right? And it sounds like there's organizations, like Google, or some of the larger, well-known companies in our industry, that have their own companies within the company that are in charge of doing this. Their own --

**Abi Noda:** PhDs...

**Adam Stacoviak:** \[00:52:03.25\] ...PhDs, their own researchers... But who is out there for everyone else? It's almost like the same reason why Sourcegraph exists. Sourcegraph exists because Beyang and team was like "Hey, this tool exists in Google, but nowhere else." And the same thing happened with Facebook; there's certain people who go work at Facebook and have tooling that exists there, but nowhere else. It's kind of like that. DX seems to be this research organization for everybody, to help them to find ways to ask their people the right kind of questions, to get the right answers.

**Abi Noda:** Yeah, I think that's an accurate description. That's the way I think a lot of the companies we work with view us. I've heard them say "Look, we can't hire a bunch of researchers..." I mean, I've talked to leaders at top tech companies who tell me "Look, Google has more people working on developer productivity than we have total engineers at our company. How do we compete with that? We can't."

**Adam Stacoviak:** That's right.

**Abi Noda:** So hopefully, companies like us can come in and help, so those companies don't have to stay up all night, thinking about unipolar vs. bipolar scales, and things of that nature.

**Adam Stacoviak:** Yeah. Because I don't want to think about that. I want somebody who's an expert at it, who's written papers, works with the necessary PhDs, who's been -- like Dr. Nicole Forsgren, she's been studying this... She was an engineer beforehand, but for the past 10 years she's been in research. And to be in research, and that kind of thing, like she's doing, and writing the book Accelerate, and coming up with the DORA metrics, and like all these different things to sort of give the framework to the framework... Like, you need those kind of people to be that deep in it, to give everyone else the right kind of tooling to even tackle the problem in the first place. It's a deep problem.

**Break**: \[00:53:48.11\]

**Adam Stacoviak:** So where can we go from here? Maybe how DX actually works... Are you just a survey company? I'm asking a very negative question, because I know how you're gonna respond to this... Do you just do surveys? Is it just a survey company? How do you work?

**Abi Noda:** So we don't just do surveys. I kind of started this conversation by telling you my personal journey, how I started with all these quantitative metrics, kind of hit a ceiling with them and then said "Hey, I think we ought to try surveys." And ultimately, where I've landed currently is that we need both. And I learned this term from Google... In research there's a term called mixed methods research. And mixed methods research is about "Hey, we need different types of data, we need different types of information to get the whole truth." And so in software development measurement, so to speak, mixed methods really means "Hey, we need --" Look, those objective metrics we talked about earlier, the quantitative stuff - those are great. I mean, we can get those... Like, that tells us stuff. It's not going to give us the whole picture, it's going to give us more of a slice of it... But hey, that information is useful. Then - hey, to get kind of the rest of the stuff that we can't measure from our systems, we can use surveys. So DX as a company - we're very much focused on this concept of mixed methods. Like, how can we bring -- we're not going to solve this problem with one product; we're not going to solve this problem just with surveys. And there's actually different types of surveys, Adam, we haven't even talked about. There's different types of surveys we can use for different types of questions and data...

So really, at DX what we're trying to do is provide a whole bunch of different tools that companies can use. We want to be the complete solution. We don't want them to have to use us for one thing, and then go figure out how to write other unipolar scales for something else. We want to be a complete solution, but we recognize that this decades-old problem, measuring productivity - it's not one simple quarterly survey; it isn't going to solve it. So we offer multiple products that capture data from different sources, in different ways. We have our eyes set on developing quite a few more new approaches. And taken all together, our goal is to give organizations that complete view, deep understanding into exactly where they need to focus, exactly what's holding them back, how much they're improving.

Bigger picture, I always tell folks, the North Star for this company is to allow any company to get better. Concretely, I say "Hey, if the CEO of Pepsi is in the shower one day..." I don't know who the CEO of Pepsi is, him or her, but if they're just like "How do we become like Google? Look, Google is crushing it with software. We are barely holding it together here. Half of our organization's actually outsourced offshore. How do we become like Google?" I would hope that they could call us; that we would have the research, we would have the solutions... And we would also be able to connect them with not just understanding what their problems are, but knowing what steps to take next. What are ways they can actually improve? What specifically can they do? They might not even have the expertise and the people necessary to do it all in-house; how can we connect them with the right folks who can help them? So taking organizations from point A to point B transformation - that's ultimately what we're trying to get at with DX.

**Adam Stacoviak:** Are you transforming companies currently? Can you share before and after, or prior to understanding how to do this well, and this transformative process to actually survey and get other details that sort of give this feedback to improve?

**Abi Noda:** A great question. I think -- this is an honest answer. I think right now we're transforming the way companies measure and understand their problems. There's certainly a lot of examples I could point to and know about where we've seen them move those numbers in drastic ways, and drive really meaningful improvements. But in terms of where I think my own eyes are set, I don't think we're there yet in terms of truly -- like, if Pepsi called today, it'd take quite a bit of effort to take them on that transformation journey. So we're not quite there yet. But we're absolutely completely changing the way companies are measuring and thinking about productivity.

\[01:01:44.16\] Many of our customers are coming from "Hey, we've got some pull requests metrics, there's some JIRA data, or some DORA metrics", to "Boom. Now we have all this other information that tells us really what's going on." That's been really transformative in terms of just helping leaders and organizations be informed about what their problems are, and where should they be investing.

A lot of those companies, like I said, have made investments, changed the way they work, both at the global level, local levels, and we see improvement in their numbers. But I don't know, transformation is kind of a big word, and I'm hesitant to claim that we do that now, but...

**Adam Stacoviak:** You're a little close to it. I think you might be self-deprecating, to some degree. Sometimes when you're so close to the problem, and you have such high standards, it's hard to see the great change... So I'm going to give you that. I think that might be the case for you, because I can imagine the kind of companies you do work with, based upon the logos on your homepage... If those kinds of companies would not trust you to do what they do, and how they even operate if you didn't help them transform even in some way, shape or form.

It's interesting, because you think about -- you mentioned Google and having a large organization who thinks about this. I've gotta imagine, similar to the way OSPOs have sprung up with open source and programs offices in smaller companies, or even midsized companies, something like this might take shape, where the improvement might not just be simply the actual transformation, but as you said, thinking about the problem, understanding the problem more deeply. Now they're thinking "Well, we actually have a have to have a small team that just simply focuses on developer experience. That way, when we ask these questions, they trust that person, and they understand", they being the team. So I think, who really cares about DevEx? Is it VP of \[unintelligible 01:03:32.00\] is it CTOs? Is it team leads, is it tech leads? Is it the ICs? Maybe it's all of them, but who really cares? Who's pushing that ball forward?

**Abi Noda:** Well, this kind of gets into our startup journey, because a big part of a starting a company like this, you've got to figure out who cares, because they're the ones who are gonna buy your product. And of course, your think, just like you said, "Well, I think everybody cares." I mean, what manager is gonna say they don't care about productivity? What CTO or VP is gonna say they don't care about productivity? Everyone should care about productivity. It's kind of what we do in capitalism. That's kind of what we're all about.

But what we've seen is that -- well, to your point, absolutely, many organizations put together dedicated full-time roles, full-time teams, specifically focus on these problems. And this isn't a new concept. There have been DevOps teams and guilds for a long time, and now we see kind of a rebranding of them. We see like platform teams, we see enablement teams, developer productivity infrastructure, developer experience teams... But I guess the point I'm trying to make is that although a CTO -- this isn't true of all CTOs, by the way. I'm making a generalization here. CTOs care a lot about developer productivity. But how much of their day to day time is actually spent being able to think about that, or do anything about it? Very, very little. I mean, you're busy reporting to the board, the CEO, putting out the next fire, headcount budgets... I mean, you don't have time to dig into developer productivity actually, right?

So the people that care a lot about developer productivity are people whose full-time job it is to improve developer productivity. And who are those people in an organization? It's actually not, like you were saying, usually like the managers, and the directors, or even the CTO. They all care about developer productivity, but that's not their full-time job. Their full-time job is like hitting deadlines and putting out fires.

The people whose full-time job it is to focus on developer productivity are actually, for example, platform teams, and the infra teams, and the developer productivity teams. And their literal mission of these teams is improve developer productivity, and understand -- some companies also have dedicated teams just for the measurement piece, right? I mean, of course, Google has an entire organization focused on literally developer intelligence, developer insights. That's true at even smaller companies. I know a lot of companies that have -- I mean, at GitHub we had a team in charge of just pulling together the DORA metrics, which took two quarters to kind of just get that data in one place and put together \[unintelligible 01:06:12.24\]

\[01:06:16.17\] So yeah, to answer your question, there's a lot of people out there, more and more, which is good for us and good for the world, that are in full-time roles where their job is to build products, or build programs, or produce insights to improve developer productivity. And if that's your full-time job, then you're going to need a solution like ours. I'm not saying buy our solution, but you're going to realize you're going to need some good data, otherwise you don't know where to focus, and you don't know what the organization should be focusing on. You sure as heck don't know if you're getting any better, if anything you're doing is actually working... So you really can't do your job without having good information like this.

**Adam Stacoviak:** Yeah. At what size company or organization, and how many people tend to be in these -- let's say a brand new organization that says "Okay, we've got to measure this. Nobody's been doing this. Well, you've been doing it, and you've been doing it, but that's not your job. It's kind of your job because you care, but now we need to actually give a dedicated role." How are teams beginning to adopt this practice and grow into this team? Is it hire one person, hire two people? Simply outsource to your company? I've gotta imagine you're not really useful to a team that doesn't have somebody, at least one person dedicated on the inside.

**Abi Noda:** Correct.

**Adam Stacoviak:** You're a tool to be used, not just a service to hire. At least maybe now.

**Abi Noda:** Yeah. We're definitely not a consulting company. We don't come in like McKinsey and do an assessment, so that I can give you some decks to the C-suite... I mean, there could be a world -- I mean, McKinsey does do that. They actually do exactly that, for developer productivity. But we don't do that. We do provide a tool that people can use.

First of all, I should say that this whole -- this DevEx team, platform team is kind of like the new DevOps and microservices. I mean, it's an industry trend outside of our company and what we're doing. I mean, thankfully, we're benefiting; I'm speaking as an entrepreneur here, but... You know, there's a real trend right now, with the rise of platform teams... Team Topologies, that book - really influential. DevEx just becoming this thing... But I mean, when we started the company, Adam - this is at the beginning of 2021 - we call it DX, for developer experience. I wasn't sure if developer experience was -- you know, it wasn't really a term back then. But we used it at GitHub... We've used that, but I was like -- so I was like "I hope this becomes a thing. I hope developer experience becomes a real thing." And it has. Not because of us, just because of industry wins.

But what we see most mature - when I say mature, I mean most tech organizations with 150+ engineers have a team that is -- I mean, they might be called... Who knows what they're called. The naming is interesting. There's a lot of variance there. But there is a team that's working on something internal-focused. It might just be like "We're just trying to fix our builds, because builds are way too slow." That's really common for a lot of these companies.

**Adam Stacoviak:** Right.

**Abi Noda:** DevEx team might mean build team.

**Adam Stacoviak:** But it is a productivity thing, yeah.

**Abi Noda:** Absolutely. And so by 150, often earlier, there's definitely at least a person, if not a team. Even before then though, there's always that person in a company who's like "We could be doing better. Look how inefficient we've become. Look how hard it is to do work here." And I think most organizations at that point -- a lot earlier. I mean, even like 30... Like, just when you're going from "We're just one team, small startup." "We have four teams", all of a sudden you're like "Oh, boy. It seems like people are struggling with different things. Like, how do we get this under control?" And so the smallest, most granular form, the seed of this concept at a small company is usually just like an engineer who has been there a long time, who's like "I'm trying to improve our processes. I'm trying to improve our tools. We're growing... How do I do that?" And they don't have a title. They're not a DevEx team. We call it DevEx team of one. That's like the persona, the label we give it. But these people are just kind of trying to figure out "Alright, we're growing, we're getting slower, things are getting harder, we can't see what's going on anymore... We've got to do something about this." So that happens pretty early.

\[01:10:36.00\] And then what we see is like that turns into, "Okay, they're going to solve a problem." And then if that is successful, then now they're given a real name, like "This person is in charge of DevEx." Then that team grows, and by the time you're a mature organization, your infra and DevEx organization can be 25%, even up to 40% of your headcount in terms of allocation. So it can be a major, major investment, especially as an organization grows.

**Adam Stacoviak:** So this DevEx team of one - do you think that your company currently, in the way it is, is a good thing for that DevEx team of one? Should they build some of this tooling first, or should they just -- I'm not suggesting people come from this podcast and go and buy your thing, but more like how effective are you for that DevEx team of one at this point in time?

**Abi Noda:** Yeah, it's a great question. I view the DevEx team of one -- I think we provide that person, or try to, or hope to, I should say, a very specific value that's different than the value we provide to an established team or function. And the value that we can provide, I think - and not just us - doing what we do, not uniquely us...

**Adam Stacoviak:** Right. The practice of surveying, and measuring...

**Abi Noda:** Yeah. What we aim to do is help -- usually, this DevEx person of one, team of one sees a lot of problems. And they're telling people, "Hey, we've got problems. I'm seeing problems here, I'm seeing problems there, things are slow, people are pissed..." But no one cares. No one cares. They're too busy building features. The executives are too busy trying to hire and hit the deadlines. No one's listening. No one's listening. This is not a high priority. And so what I think a method like ours can do for that person is to give them data to wake everyone else up. To have actual data that says "Look, we've got problems. And here's the impact on our business, here's the opportunity. So we should pay attention."

So early on it's not even about "This is data that helps you form your strategic roadmap, or measure your progress", it's like "Here's some data to just validate that developer experience as a thing people should be paying attention to at the company." And if you can't do that, you're not going to get -- a DevEx team of one is going to go to a DevEx team of zero if you can't do that.

So our goal with a DevEx team of one is "Can we help you go from DevEx team of one to like DevEx team of one with executive buy-in?" That's really the goal, and that's the value. And these people reach out. I talk to a lot of these people, "Hey, I'm at this company, and man, things suck. I don't know if I can get budget. I don't even know if I'm going to be here in three months. Can you help me? What would you do?" And I tell them, "Look, the best you could try to do is just get some data and make the case to the business that this matters." And so to get the data - again a survey is a pretty good way to do that quickly and cheaply, as opposed to building a bunch of advanced API extraction from GitHub, and then it doesn't tell you the full story anyways... So anyways, that's what we hope to be able to provide.

**Adam Stacoviak:** Well, I've gotta imagine that person has got a lot of hypotheses that they need to validate as true... And how do you do that? You go around and you ask your peers questions, right? I mean, that's essentially what you do... But you do it in a way that allows you to present the data at a higher level, right?

**Abi Noda:** \[01:14:01.27\] Yeah. I suppose you could just simply start by asking questions or writing them down... Like, this person, this person and this person has validated that -- I know there's this problem, I think there's this problem, and they've validated it's also true for them. How much more is this problem a problem at large, across this team, this team and this team?" I see it happening in our ships. There's other things, I suppose, maybe in the DORA metrics, that we can talk about to some degree, which is like "How do you measure these things?" I'm trying to grab my notes super-quickly, because -- but you probably know this stuff...

**Abi Noda:** Yeah.

**Adam Stacoviak:** ...like mean lead time for change, mean time to recovery... And these are all things they see that's happening; they don't know the term necessarily. They just see "Well, okay, we've shipped something. It broke. We couldn't roll back quick enough. That's a meantime recovery in a situation." Like, we have these once a quarter. Why is this happening? This sucks for this customer. We've lost money in these ways, but nobody knows why the problem is there. And this - they're like Chicken Little, basically, running around saying "The sky is falling. The sky is falling."

\[01:15:02.16\]

*Chicken Little, what is it? What's going on? *

*The sky is falling, the sky is falling!*

*The sky is falling... Are you crazy?!*

**Adam Stacoviak:** They need buy-in by asking questions and getting validation.

**Abi Noda:** Yeah. And DORA metrics are really interesting; that's such a step forward for the industry, and really valuable metrics, with research behind them, and a standard that both can align with, and benchmarks... But again, to our conversation earlier, those four metrics only give you a slice of what's going on. They tell you the what, they don't tell you the why. They also miss out on a lot -- the scope is kind of narrow; it's kind of focused on system performance... Is it really about productivity, or is it about like system health? So a lot of teams that we work with definitely have the DORA metrics, but that hasn't been enough.

And the other thing, which you kind of touched on, as far as what we can do for the DX team of one - there's really two problems with measurement. There's the problem of actually getting the data, then there's the problem of people sitting around the data and interpreting it, and making meaning out of it, making decisions based off of it, believing it... And that's, again, part of the problem I think we solve is at a more kind of meta level, where if you're just a DevEx team of one, you don't have a lot of political capital, right? You do not -- I mean, usually, these people have some cred at the company. That's why they even have the liberty to be thinking about these problems. But not always. And if they were to just spin up some metrics and present them to leadership, leadership might -- I mean, they might not even buy into the things that are being measured, right? It might just end with "Hell, whatever... This person's just like -- whatever. This isn't important." But instead, they can bring us in, and we have the PhDs, we have the papers, we have the research, we have the logos, we have the benchmarks... And so by bringing in an external third party, the independent auditor, so to speak... We're kind of like the independent auditor, and you can bring us in and say "Look, this is an industry-standard way. Here are the benchmarks, here's how we stack up..." So we can kind of help almost -- and we're called DX, right? That's the name of our company. So we can kind of like validate -- we can bring a level of credibility to the conversation around developer experience that is hard to do on your own, especially if you're just getting started in an organization that doesn't yet even believe in this idea at all. That's one of the things we do at a meta level.

**Adam Stacoviak:** But you don't do consulting.

**Abi Noda:** Correct.

**Adam Stacoviak:** How do you buy your products and get this consulting measure? I mean, you can have the PhDs and the papers and stuff, and even the name that totally aligns... But I'm a team of one, I come and buy your product, I do a survey based upon my own reading Accelerate, and I've listened to this podcast, and I'm digging... I'm digging, and I'm like "Okay, fine, I'm gonna try this thing out." How do they get your expertise beyond simply using the service?

**Abi Noda:** \[01:18:08.00\] Yeah, this is the other part of our business. And also, just speaking as an entrepreneur, a part of the business, I'm not as used to running; my previous companies were very self-serve, sign up, you're on your own, here's how to use the product. And with what we do at DX, we don't want to be -- we want people to be self-sustaining with this. That's just the business model we want. Like I said, I think a lot of companies -- there are a lot of consultancies that you can hire and they'll come in and like interview people and tell you what's wrong, do an assessment. That's not what we're trying to do. We're trying to provide a platform that organizations can use for themselves to tackle developer productivity for the long-term. And so when working with a DevEx team of one, or a DevEx team of 50, I mean --

**Adam Stacoviak:** \[unintelligible 01:18:52.03\] A few. A budding DevEx team even, you know?

**Abi Noda:** Yeah. Or a mature one. Either way, a huge part of what we do is the expertise we have on the program side. Like, "Oh, you want to run a survey? Well, how do you get buy-in to do that?" People might say, "No way. We're not distracting our developers with this." How do you even get buy-in? How do you actually communicate the survey in a way where people aren't gonna get scared, like we were talking about earlier? How do you do that? How do you get managers looped into this process so you're bringing them along, instead of this feeling like a thing that's just taking a chunk out of their day and Slack queue? How do you do that? How do you talk about the results in a way that resonates with leadership? How can you present the information in a way that leadership cares? How can you use this to advocate for additional resources to fund the investments that you believe need to be made? How can you use this to create a positive feedback loop for teams?

All that stuff I just described has nothing to do with really our tool. It at all has to do with things that need to happen outside of our tool. And what we do at DX - they have kind of a long title, so I'll skip their job title... But we have effectively people in dedicated roles at DX who work directly with our customers, and their job is to handhold them through this process. I think that it's just such a rewarding part of what we do, and what we can offer, because it's almost like executive coaching. That's how I think of it. We're helping these budding DevEx leaders, we're giving them kind of the playbook that we've seen work at much more mature organizations; we're helping them get promoted. We're helping them get funding for the role and initiatives that they care about.

I always kind of joke internally at the company, I'm like "Our North Star metric should be how many of our customers -- like the specific, not the company, but the people we work with... How many of them get mega-bonuses or promotions at the end of the year?" That is how we should be measuring how well we're doing. Because there's a people side to this. There's all this measuring, that strategy, but ultimately, we're working with people, and we're trying to help them evangelize and build, improve developer experience in their organization. And if they're not successful individually... Like, if they're not getting promoted, they're getting defunded. And if they're getting defunded, productivity is not getting better at the company, and we're not going to be around either.

**Adam Stacoviak:** That's for sure. Man, it's a deep roll. I almost wish you would share the title of this person, because we talked about this in the pre-call at one point, and I thought it was a long title. Can you share it? Do you mind sharing it?

**Abi Noda:** Yeah, yeah. So traditionally, we called it customer success. I mean, that's an industry term for this role. There's actually a whole -- but what's happening in the SaaS, software as a service space right now is like customer success is actually just becoming a veiled sales role. Customer success at a lot of SaaS companies is like "We're just trying to upsell you to make more money." And we also want to make more money, but I think what we do is really a service. And it's a necessary -- like, we couldn't exist without it. As much as I would love to just have a streamlined software company that self-served --

**Adam Stacoviak:** \[01:22:09.18\] Automation. Yeah, this really needs a lot of education around it.

**Abi Noda:** Yeah, it's not going to happen. No one's going to launch a survey to 5,000 people without some expertise in the room of how to actually do that successfully, without getting fired if you screw it up. It's not easy to do that. So our title, if I'm gonna get it right here, is we call our folks managers of strategic programs. Enterprise strategic programs. And this is a befitting name, because what we're really doing at these companies is helping them build a developer experience program... Whether that's a team, or just an initiative that's shared by several teams... We're helping them build a flywheel. Not a one-off assessment, but a long-running flywheel that's going to take them - again, referring back to earlier - from point A to point B, where point B is them being a markedly better and more effective organization. But yeah, that's what we call them, because that's really what we're trying to do.

**Adam Stacoviak:** Yeah. This playbook that you mentioned, that you see more mature organizations use, one thing I think you could do to get buy-in would be to share stories of that transformation, one. Like, "We went from DevEx team of one, or some, and over time we were deploying these surveys, and gaining these metrics, and improving little by little, and we started here, and now we're there." That's one way. Because you share the story of change. But then two, this playbook itself. Is this playbook pretty concrete? Is this something that you plan to release in some way, shape or form? Or is this sort of secret sauce?

**Abi Noda:** I think it's secret sauce right now. And to be frank, it's a work in progress. We're still challenging core aspects of it all the time. We're always rethinking -- because it's hard, and the other thing is that we work with so many different types of organizations: different sizes, different culture, tech, non-tech, traditional, distributed, non-distributed... And so we're still developing different playbooks depending on -- and not only that, but our own point of view. We're not just balancing seeing what's happening on the ground with different companies, we're also -- we have a future vision of what a program should look like and can look like, and we're kind of trying to move toward that vision. So it's constantly evolving, but we have recently started trying to put out a lot more content, like case studies, and examples, bring organizations that we work with on our podcast to talk about what they're really doing... Because really, if nothing, it was just to bring recognition to the fact that this is really hard. Because like you asked a few minutes ago, "Is this just a survey tool?"

**Adam Stacoviak:** Right. \[laughter\]

**Abi Noda:** And it's like "Oh, my gosh..."

**Adam Stacoviak:** I was just trying to be negative a little bit just to probe you a bit...

**Abi Noda:** Yeah. Push a button. Yeah. Well, funny enough, we used to get asked that all the time. When we started the company, the first problem was no one believed anyone would fill out any of these surveys. The second problem was they were like "Why would I pay for this? This is just a survey tool. Can't we use Google Forms?" \[laughs\] I've heard that question so many times, and -- I mean, hopefully, by talking about the challenge of a survey in and of itself, and then all the stuff that happens outside of the surveys, and then taking all this data and combining it with other data and other types of information that we're collecting, and understand it all - it's a lot of work; it's really hard. Don't do it at home, that's kind of the message.

**Adam Stacoviak:** Yeah, for sure. For sure. Okay, so let's give a prescription then for anybody out there who's listening to this show; they made it this far, they're feeling the pain, they're on the edge of their seat... They're like "You know what, I've got my hand up. I am that DX team of one" or "I've got a budding team, because we feel like we're maturing. We've done some of these things internally. We've used Google Forms, we've done something..." What do you suggest to people? Not so much, "Hey, go buy my product", but more like "Okay, how do you mature and help these people to embrace more?" Read certain books... How can they improve this team or grow this team to get more - not just productivity, but I would say happiness out of the joy of doing the work?

**Abi Noda:** \[01:26:19.14\] A couple of things I would say. One is that I just empathize with anyone in that role. It's hard right now, and we take it upon ourselves personally to try to solve this problem; that team of one out there, that's kind of on an island and it's sinking, it feels like it's sinking... Especially right now, with the economy, and people getting laid off. We've seen a lot of DevEx teams get laid off, or reduced. It's been tough at times. And so what we're trying to do - and this probably also exists outside of what we're trying to do... My advice would be you need evidence. Speaking from my own personal experience, it's hard if you're on an island to make the case for developer experience, and you're going to be -- you need weapons. You need some artillery, and things like our paper. Things that really put credibility to this as a discipline, for one. But another thing we're working on is - people don't realize the top companies like Google do this. We're trying to make that more visible.

Then there's the FOMO factor, like "Hey, Google does it." That's usually enough for the tech industry to take new practices on, "Hey, Google does it" or "Spotify, does it. Netflix does it." Third is more -- not just "Hey, they do it", but market insights on this. We have a lot of data we're gonna try to start sharing around how much do companies invest in this. It's a lot. There's a lot of headcount at mature organizations going into developer productivity. And so if you're a team have wine, it should be easy for you to say, "Hey, look, all these other companies - this is what they're investing; you're investing one. Not even one, because this ship is sinking right now." "Hey, look, this is what we should be doing if we want to be able to ship software as fast. If we don't do this, we'll just get slow." But if you want to be fast, this is what it takes.

The other thing I would say is that a lot of these folks we talk to have tried a Google form, and they've had not a great experience. They didn't get good data from it. They didn't get a good participation rate. It fizzled. They're not even typically doing it anymore. I mean, I've heard crazy stories. I've heard people tell me "I walked around the office with an iPad, begging people, handing out candy to fill out the survey, and got 30% participation."

So just don't let your prior experience with surveys taint your hope and optimism around what they can offer, because I think there's a lot more to surveys -- like we talked about earlier, all the science... There's a lot more than meets the eye, and a lot of people kind of write surveys off based on a single experience that wasn't really representative of what's possible.

**Adam Stacoviak:** Yeah. It almost would be smart to figure out why people fill these things out in the first place. Like, why are you able to systematically get, or consistently get 90% plus participation?

**Abi Noda:** Yeah.

**Adam Stacoviak:** Is there something inherently unique about the way that you as a service deliver it? Or is it just simply -- like, what's the intrinsic reason why people participate in these? Is it because they were told something beforehand, like "Hey, I've got your back. I'm trying to improve it. Hey, I'm on your team", or "Here's how this data is gonna be used. We're gonna see improvement", and sort of project that future vision? It's almost like an entrepreneur, in a way; like, this leader that can project this super-vision that may or may not be true... But I can get there if I have you on my team. If you answer these questions, then it's going to help us all get there. Is there anything to uncover on that, like why participation might be high?

**Abi Noda:** You know, to some degree this is secret sauce of the company.

**Adam Stacoviak:** Okay. Gosh.

**Abi Noda:** Well, I can share, but... We have to North Star metrics at the company. One is revenue, and the other is participation rate.

**Adam Stacoviak:** Okay.

**Abi Noda:** \[01:30:04.13\] So that is one of our two core metrics, and we look at that as a core metric for the business to show us how much impact we're having. Because if participation rate is dipping, there's two problems. One, the customer is not going to get as good of data, and two, it signals that people aren't filling it out, because they're not seeing a point to filing it out. So to answer your question, there's a lot of things that go into participation rate. I mean, well over a dozen things that we do, just nuts and bolts, both in the product, outside of the product, the design of the product, that affect participation. Something that's probably useful for your listeners is to think about -- there's a big difference between first survey participation, and nth survey participation. First survey participation, most people -- I mean, if you put enough just elbow grease into it, you can walk around the office with an iPad, or get an executive really just rallying everyone to do it. Hopefully, you can get people to participate. Where it starts to get really scary, really dicey is the nth survey... Because you can't just rally people around a promise or a vision -- like, people have participated in the survey before, and they've been able to observe how it went, and what happens. Like, "I've spent 15 minutes, or 30, sometimes an hour filling out this survey. What came out of it? Did this make my life better? Did anyone do anything with this data? Did I even see the data? Did we even analyze the data?"

**Adam Stacoviak:** Right.

**Abi Noda:** So the nth survey, the sustainability of these programs is really the challenge. Not just how can you get people to participate in a survey, it's how can you create a program where you can ask questions... And we have customers who ask twice a quarter, which is almost scary to me. I sometimes am a little scared for them. Like, that's pretty often to be surveying... But they're able to do it.

And I think that the takeaway for listeners should be that it's not rocket science. Developers will do something if it seems worthwhile. And the question is, what would make it worthwhile for a developer to spend 15 minutes filling out a survey?

**Adam Stacoviak:** Yeah.

**Abi Noda:** And there's a lot of things that can make it worthwhile. I mean, if it just seems like it's helping somebody - you know, we want to be good coworkers. If John or Katie over there asked me to do it, because it's gonna help them with their job, I might do it, just for that. But if you're asking me every quarter to do it for that, I might be like "Dude, come on. I already gave you the -- do you really need me to fill this out again, and again, and again?"

So how do you do that? Well, people are selfish, right? So to make it worthwhile, there has to be benefit to the developer, to the individual. Well, how do you do that? Well, executives talking about "Yeah, based on the results, we're gonna -- fiscal year 2020, whatever, we're gonna do blah, blah, blah." And that - look, developers know, "I'm not gonna be working here by the time that matters to me. I'm not going to be here."

**Adam Stacoviak:** Right.

**Abi Noda:** One of the things we do and focus on a lot is how can we make the data useful to the team itself, to the immediate team? And that's, I think, one of a lot of many things we do to drive participation. This data - it can't just be like going off into the ether, just executives talking about it. To make it worthwhile for developers, it needs to be a fast feedback loop. This data - they fill out the survey, they get the data. That's nice. Just being able to see the data is pretty unique. Most surveys you never even get to see the data. Then your team gets the data, and you talk about it, and you actually improve something. That's pretty -- even if it's small.

**Adam Stacoviak:** Like a retro, almost.

**Abi Noda:** \[01:33:42.21\] Like a retro, exactly. So that's one of the things that we do, and that's on the product side, and the program side in terms of how we kind of design and roll this guidance around how to use this, is really focusing on -- this isn't just a tool for the DevEx team. It's actually also a tool for the individual teams themselves, the cross-functional teams. And if they can get even a little bit of value, take even a small step forward, or learn something from doing this, then there's a positive feedback loop. So that's kind of my insight I can share on this.

**Adam Stacoviak:** Well, let's leave it there, then. That's good for me.

**Abi Noda:** Yeah. Cool.

**Adam Stacoviak:** It was awesome. Thank you.

**Abi Noda:** Yeah, this was fun. Hopefully, it's entertaining. I always tell people who come on my podcast, I'm like "Dude, this is an entertainment business. Don't forget."

**Adam Stacoviak:** Right. \[laughter\] Yes. Try our best to be -- I mean, you know, yeah, you have to be entertaining. This is a deep subject. This is like a semi-even-provocative subject, to some degree.

**Abi Noda:** Yeah, hot button. Hot button subject. Yeah.

**Adam Stacoviak:** You've got to get it right. If you're a team of one, it's challenging. If you're a team of some, it's even challenging. If you're a larger team, it's like "Well, gosh, we might get fired. There's a downturn, there's the economy..." There's hot buttons all around this subject matter. But on the other side though is teams that enjoy their work more. People who enjoy their lives more because they enjoy their work more, and they're able to actually have great purpose, and help their team, and that kind of stuff. So it's good to get it right, and it's taken you so many years to even come close to getting it right, right?

**Abi Noda:** To come close. Yeah.

**Adam Stacoviak:** Cool, Abi. Thank you so much for breaking it all down for us, man. This has been fun, diving into the DevEx world. Thank you.

**Abi Noda:** Yeah, thanks so much. Fun conversation.
