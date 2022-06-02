**Jerod Santo:** So we've got Tomas and Greg here from Graphite. Welcome to the show, guys.

**Greg Foster:** Thank you, good to be here.

**Tomas Reimers:** Thanks, Jerod. Excited to be here.

**Jerod Santo:** We're excited to have you. You're working on something very cool and very right in our wheelhouse - code review tooling. Graphite is your company, it's still early days, join-the-waitlist kind of a situation as we record... It's an open source CLI and a code review dashboard built for engineers who want to write and review smaller pull requests, stay unblocked, and ship faster. If that sounded like I did it very well, it's because I'm reading it off your homepage... \[laughter\]

**Adam Stacoviak:** \[04:05\] You're reading, Jerod...

**Jerod Santo:** I'm just reading, I'm not just coming up --

**Adam Stacoviak:** You did it well, very well.

**Jerod Santo:** I'm actually pitching to be on your marketing department. I feel like that's a pretty good pitch.

**Tomas Reimers:** To be honest, I heard the pitch and I was like, "Wow, he's really got this down." And then you've told me you're reading, and I'm like, "Well, that's because we wrote it." \[laughter\]

**Adam Stacoviak:** But that sounds really good.

**Jerod Santo:** Dirty little secret - if you want people to like you, just repeat their own words back to them. They'll tend to like you. So take us back to the beginning of Graphite, and maybe a little bit of how you two met, the back-story... There's a college involved, I believe there's Facebook, there's Airbnb, there's all these engineering jobs you've had, and then brought you here. Give us the quick version, and then we'll find out why you're building this kind of things.

**Greg Foster:** Yeah, I can speak to that a little bit. We have three co-founders - we have Tomas, myself, and another guy named Merrill. All of us have been friends since college. Merrill was a couple years older than us, but we were all in the same computer science clubs. Tomas and I were in the same year; we were project partners on nearly every class in college, late nights doing operating systems, just getting beaten up by algorithm problem sets... And every summer we'd be interning out in San Francisco, sharing housing, going on adventures.

One -- I think during our junior year actually I was talking to Tomas, and I was saying "Wouldn't it be cool if we got internships out in New York, and we tried out a different city? San Francisco is really cool, but New York sounds amazing, too." Thomas thought that was a good idea, and I lined up a Google internship, he lined up a Facebook internship, and then very last-minute I swapped -- at Google they said "Hey, we've got this kind of boring Google Docs team in New York, or you can be on this cool prototyping team in Area 120 in San Francisco." I said "You know what, Tomas - last-minute, I think I'm gonna go take this even better team in San Francisco."

Fast-forward, Tomas is out in New York full-time, still working with Facebook. Him and Merrill are spending time every weekend talking about startups... I'm out in San Francisco still, this time with Airbnb, and it really wasn't until we started Graphite that I got to complete the circle and finally get pulled into New York, work with the people I love, in a very exciting city, on a product I love.

**Tomas Reimers:** Yeah. And what's funny - Jerod, to answer your question - when we started this company, we didn't actually start as Graphite. We started as Screenplay. The idea of Screenplay was to help you roll back iOS apps the same way you can roll back a website. So let's say you push out a bad update to the store; you realize "Oh, that's actually broken. It's crashing on users. Give me just a feature flag to revert it by packaging it with the old version of the app, and then doing some deduping to get the app size down."

It was in building that that we started to actually think "Hey, we need some developer tooling ourselves." At that point we were fortunate enough - we had had one of my old teammates, Nick, join us... And Nick and I, coming from Facebook, which had had different code review tooling, sort of looked at GitHub with (I'd say) a set of fresh eyes, and we were like "Yeah, there's some stuff from Facebook we miss..." We get how this works. We tried to force ourselves to use it for quite a few months, and then we were like "Well, let's give a shot at building some of the things we had, or tooling inspired by what we had, a shot." This was back in probably January or February of 2021.

**Greg Foster:** The whole early part of this company was an experience. I mean, we unintentionally started like day one of the pandemic... Because as co-founders and friends do, we had been talking about working together, and starting a company... And we put in our notices like three months in advance, and we leave our jobs, and set out -- we start shaking hands with venture capitalists, and literally, the weekend we quit and the week we start raising, it was like March 15th of 2020... Everything's closing down. We're in the final meeting in the room in San Francisco and we're like bumping our flights up earlier to get back to New York. So yeah, the whole journey has been unexpected.

**Tomas Reimers:** \[08:00\] That was a crazy week. I remember just so vividly shaking hands with different venture capitalists, and every one of them would be like "Yeah, when's your flight back to New York?" and we'd be like "Well, Sunday, I think." And they would be like, "Listen, I have a friend who has a friend who told me flights are gonna be grounded, so you'd better move those up. Things are about to get real weird." So we ended up moving them up to Friday, I wanna say...

**Greg Foster:** I liked the part where they were like, "Yeah, make sure you use hand sanitizer. We won't shake hands...", but otherwise crammed into this small meeting room with 15 people, like "This is fine. Just don't shake hands."

**Jerod Santo:** Right.

**Adam Stacoviak:** Wow. Yeah.

**Tomas Reimers:** Pandemic craziness aside, we built this tooling out for ourselves, and it was then last summer that we pivoted to doing code review full-time.

**Jerod Santo:** Yeah. It's interesting how many stories are like this, where it's not your main product that becomes your main product. I think Slack -- wasn't Slack the internal chat app? They were trying to build games, and they were like, "Wow, this Slack thing is pretty cool that we've built", and started selling that, and it obviously became a big deal.

**Adam Stacoviak:** The same thing with Flickr, which - no one knows about Flickr anymore, right? But Flickr began as some sort of Flash video game, and then it turned into image sharing. It was the Instagram before Instagram.

**Jerod Santo:** There you go.

**Greg Foster:** I think it's one of the purest ways to discover something. If you solved the need for yourself without some grand idea of making it into a company, but it ends up being that useful, and people really want it... It's quite pure.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It kind of leans to the iteration process, too... Even innovation requires iteration.

**Greg Foster:** Totally.

**Adam Stacoviak:** You can't get to a problem, or even a solution, without having a problem. And sometimes you have to go on a journey, which might be the wrong tool, or the wrong thing, and you sort of discover from your exhaustive iteration that you've got this diamond in the rough if you just put things to work, and... There you go.

**Tomas Reimers:** Iteration is one of the things we value a ton at this company, I'll say that for sure... We've got a lot of talks about that. To add to that - it's that you get that iteration before you get users when you build it as an internal tool. You are your own users, maybe, to say that a different way.

When we first started offering Graphite to everyone back in August of last year, at that point this thing had been around for eight months. So it wasn't just we built it -- our earliest version was still somewhat... It still had quite a bit of logic and functionality baked into it, which I think our users appreciate and called out. But it was still rough then, too.

**Greg Foster:** Oh, yeah.

**Adam Stacoviak:** There's something with patience though that comes with iteration. I think that's why I'm harping on this, because we could be so fast to get to the thing... Especially with your journey - through school, you're like "You know what - we're done with school, we're done with whatever. Let's just get to a city and do our thing. Let's just get to this mission and be successful." But there's a patience and a process to the iteration, and I think that's something I wanna instill into the listeners of this show and other shows we do... It's like, if you're not patient with the process of finding the problem and the right solution to that problem, you might just be like chasing your own dog. It's a bad situation if you don't be patient.

**Greg Foster:** We've found this book named "The Mom Test" as we were going through this startup, and this thing was arguably the most useful thing we read and tried to follow throughout the seed stage, and iterating to finding the right idea... And it just harped on this idea of being very scrutinizing of positive feedback, meaning very scrutinizing of compliments, and really look and search for stuff that's truly valuable to people, and that they're willing to use or willing to invest their time in, they're willing to refer to their friends, beyond any one compliment.

I think our earlier ideas weren't fully passing that bar, and we were lying to ourselves a little bit. Graphite ended up being night and day in comparison.

**Tomas Reimers:** Totally.

**Jerod Santo:** So when you're first getting started and you're building this main product, which is like iOS deployment tooling, and you're a small business, you're probably a handful of people, maybe just the three of you at the time, how do you justify just amongst yourselves "Well, we're also gonna build this code review thing for ourselves..." That is the classic procrasti-coding, like - you don't feel like working on your main thing? Or is it so compelling? Why did you guys build this, when you were supposed to be building something else?

**Greg Foster:** \[12:08\] Totally. I honestly think it comes from a debate Tomas and I had, where I came from Airbnb and I was used to standard GitHub, standard pull requests... And Tomas had come from Facebook and he had seen their internal code review tooling, Phabricator versions of Mercurial, where they don't create branches and pull requests, they create diffs and they stack them.

And we had talked, and as we were setting up the company and we were picking the infrastructure, Tomas was like "Oh, we should really go with Phabricator. It's gonna enable this workflow. It's fantastic." And I was like, "You know, workflow sounds interesting, it sounds fine, but I really don't wanna move our code hosting off of the industry standard here. We might open source parts of it... There's huge benefits to having our main organization repos in GitHub." With Phabricator we'd have to host an old PHP app, run it within our Amazon cluster, maintain it, upgrade it, have all of our code hosted on it... I was like, "This thing is probably gonna be deprecated soon." And it was that tension, where Tomas --

**Adam Stacoviak:** No faith.

**Greg Foster:** Yeah, well -- I tried, I spun it up and it just wasn't quite there... And I think it was this tension of like "Okay, we know this workflow would be fantastic, but we also have this constraint of sticking to GitHub..." So all that early tooling was bringing back that workflow, but allowing it to be 100% on top of GitHub and not disrupting our coworkers.

**Tomas Reimers:** It's funny... So we had this debate -- we started this company in 2020, put it down at that time; I was like, "Fine, I'm gonna use GitHub. I'm gonna learn how to do this." I think what was interesting -- so Nick, my old teammate, joins us... And I remember, I think it was his first or second month; he comes to me and he's like, "Tomas, how are you doing good review? Compared to what we have, I feel like a caveman." I think the quote was something to that effect. And I was like, "I want you to take exactly that and just go tell that to Greg." \[laughs\] "I have to let go of this conversation. Go tell that to him."

**Jerod Santo:** "Fight my battle for me", yeah. \[laughs\]

**Tomas Reimers:** Yeah, exactly.

**Greg Foster:** I mean, that's where it came... It was like, "Hey, if people wanna write scripts on top of this, if they wanna stack their pull requests... Be my guest." We were able to do in a manner -- and Nick and Thomas were able to start building this out in a manner that wasn't disruptive to other people who weren't yet using kind of a stacked workflow.

But I'm sitting there and I'm watching them starting to put up stacks of ten recursively-branched pull requests, and it honestly started looking quite impressive internally... Even then, I still hadn't hopped on the train, but it was at that point I'm like, "Okay, fantastic. One, my teammates can use this, and I can still review them, and I can work with them, and it doesn't disrupt me. And two, this is actually starting to look impressive. I actually am starting to see what it looks like when a peer puts up ten small interdependent pull requests."

**Tomas Reimers:** So Jerod, to answer your question, how do we make time for it - I think at first, Nick and I started trying to do this manually. So if you've ever tried to make a pull request off a pull request... If you're a listener and you've done this, you know the pain that comes along with it. There's a lot of rebasing, which if you're familiar with Git, it's fine; it's still painful. I think at no point are we like "Oh yeah, this will be great."

So the first version we built was just trying to automate some of that nastiness away from us. And the argument there was like "Well, we're spending out time doing this anyway. If one of us were to just like bang out a script maybe in a day that does this for us, we'd probably save a lot of time." So I think that was the thing that seeded it. And I think once you have a tool seeded in an engineering company that people like, engineers will keep building on top of it. We've seen this with Graphite even today. We use Graphite for code review exclusively, and every so often there'll be a feature which someone will be like "Why doesn't it do this?" and everyone else will be like "Well, just go make it do that. This isn't that hard, right? Go add that feature." So it snowballs from there.

**Jerod Santo:** Yeah. I think this speaks to what Adam brought up with iteration. It's not as if you set out to build some big tool on the side. You were just kind of like trying to grease the skids or your collaborative process, and just like all engineers do, you start with a simple little script, and then if it's helpful, more people use it; and then if it's helpful, it could always be more helpful, and so you start to build and add... And at what point did you know "Holy cow, we've got a product here. We have a business, potentially, that might be better than this business that we have been building." How long did it take, and what were the signals that told you guys "It's time for a pivot"?

**Tomas Reimers:** \[16:28\] Yeah, so we start building this... Every so often, someone would ask for it; we'd have old colleagues or friends who'd be like "Hey, I know you've talked about this workflow. I haven't heard you complain about it so much. Did you solve it? Do you have something I can use?" And we'd always be like, "Yeah, we've built this small internal thing. Don't worry about it." Or maybe someone would see our tool sort of in the background when we were screen-sharing, and they'd be like, "Hold on, what's that?" and we were like, "Don't worry about that. Focus on the real product, which is what we're here to talk about."

**Adam Stacoviak:** "I'm trying to talk to you about the thing here. C'mon!"

**Tomas Reimers:** Yeah. \[laughs\] Exactly.

**Adam Stacoviak:** "You're distracted by my other cool thing!"

**Tomas Reimers:** Literally, that's what was happening. And it was summer of last year where Phabricator, which is this tool that spun out of Facebook in 2012 - it was what they had for code review back then. They've definitely iterated past that, but it's a good jumping off point. That company decides that they're shutting down. So what we saw was -- we were in some Facebook alumni groups, and a lot of people were like "My company uses Phabricator. Phabricator is end-of-lifed this year. What am I moving to? Please don't let it be GitHub." And we saw a lot of that happening, to the point where we were like "Okay, maybe there's something we should do."

I remember we started out being like "Let's first figure out how many people would be interested in it." So we put out this survey, being like "Hey, if we were to--" We weren't even sure what we wanted to do. We were like "Maybe we open source it, maybe we just give it to you, maybe we let you into our internal platform..." Because at this point, this was a thing that -- I'm not exaggerating when I say it had our repo names and our branch names and our usernames hardcoded into it. This was built for us; this was not meant to be a product, this was our script. And we said "Okay, if we could magically make this available, are there like 20 people who would be accepted?" We really wanted to get 20 to try and experiment, and we ended up with 40 people that were like "I need to be in this beta. I will die if I'm not in this beta."

**Adam Stacoviak:** Wow.

**Tomas Reimers:** And we're like, "Okay..." So that was August. We got a lot of good usage from them. We got a lot of good usage from them and it was a lot of -- there were people at very well-known companies who we were like "Okay, this is interesting. We should go from there." That was August. September we decided to pivot to this full-time and say "Let's build towards getting a proper waitlist out there", which isn't just us putting a poll and some alumni groups, but see who else we can get. That's November.

So November 17th we post our waitlist to Hacker News, expecting about 500 signups. We get 3,500 in that first week. And we're like "Okay, this is what we're looking for. It seems like there's some appetite here for better code review tooling."

**Adam Stacoviak:** Yeah. That's a good spot to be in, honestly. To have low expectations and get a higher than expected list built... It's like, "Wow. Okay, clearly there's something here that we were not thinking of." And Greg, you mentioned it. You called it. Phabricator would end-of-life. So your initial apprehension was true, and then validated, and then there's this vacuum. So the vacuum that's left there was evident, clearly.

**Greg Foster:** Yeah, it really does feel like the right time for this tool to be built, in the sense that Phabricator's been end-of-lifed, so you have people shifting to GitHub, but wishing they had a different workflow. On top of that, it's one of the first times where GitHub's APIs had been mature enough that you can build a platform on top of it, offering code review but it's still 100% synced back to GitHub. If you go back a few years, that level of API access hasn't been available.

It kind of felt like the perfect time for this to come into existence. You have other products, too. Google offers an open source version of Gerrit; but similar to Phabricator, it's not at all modern. I think it's only being used really for Chrome and Android these days. Most companies don't run it internally. There's kind of been a hunger that we realized talking to people for any alternative to a standard GitHub code review.

**Tomas Reimers:** \[20:22\] It's funny - so building this out, we then put ourselves out there and see "Okay, who's interested in this?" And we at first - we knew that Phabricator users would be interested. What was interesting was the Gerrit users were certainly interested. I think Google has sort of put Gerrit in the backseat, since they've started using Critique internally, which is their new, exciting, shiny code review tool.

We saw the same enthusiasm from GitHub and GitLab users, who I think really were like "Yeah, I know that there can be better, I haven't seen it here, but I'm interested in it." And then I think Bitbucket's end-of-lifed this year as well. So there was this perfect combination we talk about, of things that just created space for us to exist.

**Greg Foster:** Yeah. We try to set a high bar, too. We were very -- like I said, when we were thinking about like the mom testbook and other learnings, we wanted to be very skeptical of any new idea. Make sure we're not just getting excited about something shiny. Because of course, we have our natural biases. And when we were talking to these people, we said "Hey, we're gonna give this to you, but can you hop on a 30-minute call every week, for ten weeks, while you're using this?" And people were like, "Yeah, no problem." And "If you wanna join this waitlist, can you refer five people you work with?" And people would do it. People would say "No problem."

We tried to set up differing bars to really understand "Are people just interested, or are they actually finding meaningful value?" Even in the early days, even when you kind of have to walk on glass to use this, even if our documentation is terrible, and the thing still has bugs in it... And when we saw people doing that, and they would go through these steps and they would say "No, I still love this. It broke on me... I'm actually annoyed it broke on me, but please fix it, because I wanna keep using it." It was very affirming.

**Tomas Reimers:** I think that was the magic moment for our designer... We had built out this thing in the dashboard, it was fairly new, we were excited about it... And I think some of our users were like, "Yeah, I wish it behaved this other way." And one of them went so far as to actually just mock up the site as they thought it should be, and just send it and be like, "No, no, no... This is what I need. Just build this." It wasn't people just churning, it wasn't people walking away; it was people being like "This needs to exist, and I don't care if you're doing it wrong, we will help you get there. But we need someone to do it for us." And that was cool.

**Adam Stacoviak:** That's what's interesting to me... There was this thing -- you've got this demand, and... I'm not trying to be negative towards what you've built... They're not necessarily coming because you built the coolest and best thing, it's because there's such a need. Which is almost even more invigorating to be in your position, because there's such a need for it, despite maybe your thing not being the best version of it yet. There's a need for a better flow or a better workflow, and the incumbents - massive, by the way; 15 billion dollar opening deal on the IPO list, on the stock market, GitHub massively acquired by Microsoft - these are massive organizations that have not gotten it right, and there's a significant need, with a massive adoption possibility. So your total addressable market is just massive already, and going to grow infinitely as developers keep coming to dev land, which they will.

**Tomas Reimers:** Yeah. You know, Adam, there's something you said which I think is actually really interesting... Because we wondered for a long time, like "Why haven't GitHub or GitLab done this?" They're big companies, we have a lot of respect for them, they clearly have the resources for it... I think the answer that we came up with, for GitHub certainly - and GitLab, which came a little after them - was this realization that what they're focused, or at least what GitHub's focused on is open source. And open source code review and company code review look very different. So if you're in open source, you have a maintainer, maybe some contributors like me writing some code, committing it regularly... Someone comes along, they write a pull request - I have no idea who this human is. Frequently, the pull request is incomplete, perhaps it needs tests, the code isn't up to par, because we just haven't worked together... All sorts of things can go wrong. And so getting that pull request merged takes quite some time. It's very rare that you find a project where people put up PRs and those PRs get merged very quickly.

\[24:16\] Flip to a team - what team code review looks like is very different. Greg and I review each other's code 10+ times a day. We know each other at this point quite well, we've been working together for years... And so the kind of collaboration software that we need and the kind of collaboration software that you need when doing open source are two different types of collaboration software.

**Jerod Santo:** Doesn't GitHub use GitHub to build GitHub? Aren't there large projects there? I mean, I know that large projects like Ruby on Rails, for example, or Kubernetes, I feel like - and this is me going based off of not total data at this point; just feelings. I feel like at a certain point they all start to build their own systems inside of the system, or they're actually like "Hey, we're using Phabricator on the side", or something, when they get real big. So maybe I'm answering my own question. But GitLab probably uses GitLab. Aren't they like a team, like a --

**Adam Stacoviak:** Pretty big, too.

**Jerod Santo:** I don't know, why are they not seeing what you're seeing, is the question.

**Greg Foster:** I think a lot of the companies, when they do reach a certain scale and they can staff an effort... Because these kinds of systems are not easy to staff and create internally. But when they reach a scale where they can - I think Microsoft has done this, Google has done this, Facebook has done this... They will eventually either take Phabricator, for it and expand it internally, or they'll just create their own thing from scratch. I believe honestly it's because they look at GitHub and they say "This isn't the pinnacle of what code review can be." It's wonderful for open source software, it's good for code hosting, but it's not the pinnacle of where code review could be.

You see so many features that companies have built on top of. We talk about stacking, but for example another one that we heard from a Microsoft engineer was this pattern of crash detection, where if you open a pull request that's modifying some files, and a peer has an open pull request, or even like a local pull request that would be notifying those same files, why don't you notify those people upfront, and let them know that "Hey, you might be about to have a rebase conflict. We're working on the same thing. Maybe cooperate?"

There's so many small, incremental features that have been built out, from the UI, from the code intelligence, that haven't been brought into GitHub. If you have a big enough engineering org you say "Hey, these are still valuable. We're gonna build them internally."

**Tomas Reimers:** And I think then - to answer your question around "What about GitHub though as a company, why haven't they built this out?" So I don't have a great answer for you there. I think the best answer I have for you there is that when we've talked to engineers from GitHub, like "Hold on, you've seen the same things we've seen. Why aren't you building some of these features?", what they describe to us is what they have compassionately referred to as settings hell which is "Hey, maybe you think that every company looks the same, and every company has one trunk branch that they're merging into, every company has CI. This is not true of our repos. So when we're building a feature, we don't just need to think about us, we need to think about everyone, and everyone actually looks quite different."

But when we, Graphite, are thinking about us, we've made it very clear, "Hey, there's a very limited configuration of like repo configurations that we wanna support." Now, we believe that many software companies fall into this category, which is why we're okay with this assumption, but certainly not everyone does. We've certainly heard this case of "Hold on, actually in our repo land we have like three trunks, and they merge into each other." And we're like, "Hey, that's great. Graphite is the wrong tool for you." But if you look like a more (I'm gonna say) canonical software development stack, where one trunk you have feature branches off of it you merge those feature branches back in, you need reviewers, you need approvals - that's where our tool really shines.

**Break:** \[27:50\]

**Jerod Santo:** So let's talk about the workflow. Stacked diffs, lots of smaller little PRs... I've watched your demo video; we'll link that up in the show notes, that your co-founder did. Interesting stuff. It seems like it's just moving at a very quick pace. Like you said, you guys review each other's code ten times a day. That's a world I've never lived in. Tell me about it.

**Greg Foster:** I think foundationally, it's pretty easy to get behind the idea that many small code changes are gonna be better than just massive, large one-off changes from time to time. I think there was a paper out of Google ten or so years ago, that talked about this. They did a deep internal study at the company and they've found that not only do small code changes get reviewed faster, if that makes sense - your peers aren't gonna procrastinate them - but they actually get better feedback and more comments on them. Because when you hit a certain scale and you put up a 500, a 1,000-line pull request, people start skimming it, and start relying more on trust. When you put up a series of 50-line code changes, people actually give it a proper look.

On top of that, of course, it's easier to bisect if there's a bug; if CI breaks, you have a smaller scope of change to act on. So I don't think it's too crazy of an idea to get people behind this idea of just plentiful small changes, over larger, one-off changes.

**Tomas Reimers:** I feel stacked diffs, Jerod, is just such a loaded term, where people will hear it and have an opinion one way or another... And I'm gonna just bring that back and say - I think the thing we advocate for is small changes that have to be on top of each other, because you're working on the same functionality. The analogy I like to make is let's say that you're trying to build - I don't know, promo codes. You just built the checkout flow, the checkout flow is written now, it's up for review, you now need to add promo codes into it. What are you gonna do? You can add it to the first PR, but then it becomes large. You don't like that. I can go bother my reviewer, and I can be like "Hey, blocked on you. Can you give me a review?" And they're like, "Man, this checkout flow thing's already 2,000 lines. I'm not just gonna drop what I'm doing to work on it." Or you can go work on something else. And then you kind of like -- I mean, we're all developers here, right? You forget the context... You come back to promo codes, you're like, "Alright, I remember roughly in the code where I need to add this", but now it's been a few days since I last worked on this, it took a little bit of time to get reviewed... So stacking is just this idea of "Okay, cool. Fine. Just build the promo code PR assuming that the checkout flow PR landed as-is." And in truth, that's not the case. Maybe you'll have to edit the checkout flow PR. But the bet you're making is that the edits you're gonna make to the checkout flow PR aren't super-duper substantive. Like, yes, it will still probably look somewhat similar to what you already wrote, and so just start running it ahead a little bit.

**Jerod Santo:** \[32:15\] Hm. It makes sense to me. I've done some code review. I've always worked in very small teams, I have been a manager... When I was doing consulting, I would have freelancers that worked for me and I would review their code... And I despised when I would get a PR in my inbox, because I was like -- I just don't like that part of the job. I don't even like to look at my own code. Just ship the sucker. So I'm not very disciplined. But I think the size of it was part of it, is where I'm driving at. I would get this feature in my inbox to go code review, and it was like "This is my job. I have to make sure this is good. And I'm gonna do it, but I'm gonna despise it, because there's so much mental overhead to get into that." It doesn't feel like it can be quick. So maybe if that is the idea, like that could have been five small PRs...

**Greg Foster:** It's better. It also allows the author - you know, if you're skilled - to take the reviewer on a logical journey. Because it's not only five small PRs, but they're usually logically stacking, so you can see how the person is bringing together a larger feature. Maybe they add a function, then maybe they add the callset to the function, and then add the test to the function, and then add the other system that starts depending on it... And each pull request - they're all bite-sized. We see internally - I think the best size is of about 50 lines. It's so easy to review and think about.

What's even best is that you don't have to review all of them yourself. You could get in there, review one of them, get pulled away, go to lunch, another peer could come along, continue reviewing the stack... At no point are people blocked. Even the original author, they can say "Great. Hey, I've got the first half of these reviewed. I could choose to start merging these in if I want to. I can wait, I can keep stacking on top." It really just breaks up the process and keeps everyone unblocked.

One way I like to think about this - you know, we often get asked, especially as kind of an early-stage startup, if we're ever gonna build out real-time collaborative coding. I think there's a lot of startups interested in this idea, of like Google Docs style, like - where is the logical limit? Do you start getting multiple cursors on a VS Code? I think our take is probably not. You won't see a Figma or a Google Docs in my opinion, because code has this interesting property where the intermediate state is constantly broken. So real-time collaboration is kind of hard, because you're just constantly breaking each other's actual logical flow.

The closest you can get to real-time collaboration is just small, atomic changes which each are functionally correct and passing all your test cases, but are as small as possible otherwise. And I think that that's another kind of way to reason about this workflow, is it gets closer to a real-time collaborative process, because we're just really breaking down coding into the smallest change chunks that still pass tests, that are still logically sound.

**Tomas Reimers:** You know, my favorite part about it is actually as an author. What Greg was saying - Jerod, I don't know if you've ever had this; you get this pull request, it's like 4,000 lines. Maybe it's 2,000 lines. You agree with the first 1,600 of them, and then there's one bit which you're like "Well, I don't know if this is the thing we should ship. Or maybe we should do this one a little differently." But as an author, I actually don't care, because if we can agree on the first basic things, I can actually start landing this, and that means I don't need to worry about rebase conflicts, I don't need to worry about continuing to think about that. You don't need to read it in future versions. I can just get that out the door. Kind of as you say, "We can just ship this sucker." And then there's that last bit which we still need to talk about, but it's much smaller.

**Greg Foster:** Yeah. It massively decreases -- we see just a huge decrease in time to land. The longer a pull request is up without merging in, the more pain, more problems everyone's gonna have.

**Jerod Santo:** Sure.

**Greg Foster:** And the more you trunkate them, we see just a faster time to land.

**Jerod Santo:** So as you author, are you writing a feature and then splitting it into logical stacked diffs, and then opening PRs? Or are you actually building those -- are you opening those PRs as you go, and then you finally get to the end? How does it work in practice?

**Tomas Reimers:** \[36:15\] People do both. We generally suggest that you do it as you go. I think many people find that a lot easier. And so the idea is in the same way that you might be making commits as you go by using git commit, or something like that, when you're actually doing the Graphite workflow, make branches there. So instead of saying, "Oh, I wanna make a commit", just make a new branch. And the reason we make a branch is because on modern code hosting platforms - GitHub and GitLab - a branch is the smallest unit that you can open a PR against. So rather than making a bunch of commits that you open PRs against, you need to make a bunch of branches that you then open PRs against, and then you can run CI against those, review those independently, and merge those independently.

**Greg Foster:** Yeah. But to your point, the tooling also supports this idea of making one large change; you look at the state of your Git repository and you see ten files are changed. You're totally free to just take two of those, create a branch, the next two stacked on top etc. We make that really easy with the open source CLI to sync all these changes back and forth to however many open pull requests you have at a time. So even if you have a stack of ten, it's one command just to sync all of your local changes back up.

**Jerod Santo:** It seems like a commit per PR makes a lot of sense. Is there a way of doing that? Say I just go ten commits down the road and then say "Alright, here's my ten PRs" and you can just go create the ten branches for me if I need to?

**Greg Foster:** I think our teammate Jacob is building that feature into the CLI as we speak. This is a requested feature, and it's totally possible.

**Jerod Santo:** Add my +1 to that one. I'm just thinking how I would probably actually use it, and for me, that's probably the way that I would do it. Because I tend to think about my commits that way, is like "This little chunk of work is done, then this little chunk of work is done..." And those seem to translate very well into an opportunity for code review.

**Greg Foster:** Yeah, it's a shame that the code review platforms by default don't let you review on the commit level... But it is what it is. I think we thought initially at the beginning a lot around "Should we mandate single commits per branches, or do we wanna support multi-commits per branch?" And we realized talking to folks that this is a flame war, and there are strong opinions on both sides, and we said "Hey, whatever. We'll be agnostic." Both are totally fine by us. You can have one commit in your branch, you can have many... It all works.

**Tomas Reimers:** Exactly.

**Jerod Santo:** So what happens when you're dead-wrong about one of those little PRs, and you think "There's not gonna be massive changes" and then you just move on and you're just building your stuff, and all of a sudden your reviewer is like "We're not going this direction!" Then you're in more trouble that you were if you had just sand-bagged it.

**Greg Foster:** You'd be surprised how rarely that happens. But if it does happen, you've got a couple options. Perhaps the change that's been flagged is halfway up your stack, and the first half of those changes were actually totally valid and meaningful... In which case - cool, merge in what you've got, and consider refactoring or throwing away the rest. That still might be better than if you just had one massive change, and the whole thing is not gonna land.

But honestly, in reality - maybe perhaps it's this nature of the teams we work on - it's rare that you go too far off the rails in a direction. One more thing I'll say on this is that if you are breaking up your pull request and you're putting these things up as you go, you're probably gonna get that feedback that you're going in the wrong direction faster than you would if you were working on one monolithic change. Because someone might be code-reviewing the earlier parts of your stack before you've even finished the top of it.

If I did it all as one big go, if I sat in a hole for a week and made up a 3,000-line pull request, I might not get that feedback for a week or two, and that's gonna be even more frustrating.

**Adam Stacoviak:** Right. It's about efficiency really, right? You wanna be able to give -- you were saying, Jerod, before, that you hate the part of code reviewing.

**Jerod Santo:** I do.

**Adam Stacoviak:** \[40:08\] And we've been talking from the person who's committing, so the developer, right? But as the code reviewer, you're like "I wanna be able to grok it." And to have to have documentation for a pull request would be like "Come on..." You wanna be able to get through some of it, and I think this method provides the whole "Stay unblocked, do it faster" efficiency for a team, rather than having to get like this thousand-line pull request that - sure, as a committer, as a developer, it's fine for you, because what do you care, right? It's the code reviewer - that's the person, or the team who may be like "Okay, you have to make it easier for me to help you, help me, help us", which is "We're the team, we have the same jersey." Right?

**Tomas Reimers:** It's funny, Adam - exactly correct. I remember when we started this company... So Greg and I came from different cultures, right? He came from Airbnb, I came from Facebook. And we were talking around -- so there were a lot of conversations we had in those early days, kind of figuring out "Okay, so what have we learned at these jobs? How do we wanna build this engineering culture?" And I remember one of the things he told me early on was like, "Yeah, some mornings I just take two hours to sit down and do an individual code review", and I'm like "What?! Someone sent you a code review that took you two hours to do?" And he's like "Yeah, that's pretty normal." I'm like, "What...?" Like, no way I'm gonna sit down for two hours and review someone's code. If it's two hours long, I'm gonna tell them to split it up so that it's easier for me to understand.

And I think that's one of the cause of things that falls out of this workflow. It becomes a lot easier to review, and therefore you can keep moving forward.

**Greg Foster:** It's part of the whole movement -- I see this broader trend, and you guys have probably seen this too, towards just a continuous workflow and continuous changes. Whether it's integration tests, continuous delivery... In this case it's -- one could argue continuous code changes are something... The whole thing is becoming much more stream-based and much less waterfall-based. In some ways, I view this as the code review part of that evolution.

**Jerod Santo:** You wonder how far that can go... I guess the Google Docs live real-time collaborative coding is kind of like the end game of that. And do we ever really want that? Greg, you think maybe not... Some people think maybe we will. I think we'll find out if we want it, because someone's gonna build it and we're gonna see if it survives in the market. That's what innovation is about, what do people actually want. You have to build something that we wanna use. And maybe we do, actually, want that, or maybe we're gonna stop somewhat short of that.

I think from the demand that you guys are seeing, and I think just from -- I'll just call it the mental stimulation that I'm having around these ideas, it seems like this is a step in the right direction from where we've been, and kind of where some of us are today.

**Tomas Reimers:** Yeah. I mean, I think -- will we ever see a totally collaborative code editor. Maybe for pair programming. But I think the question is, is that how all code for companies can be written? No, probably not. I don't imagine a world where we just have main, master trunk, whatever you call it, and you just see however many engineers you have at your company's cursors just going at it. That sounds impossible to get right. \[laughter\]

**Jerod Santo:** More like an MMORPG, you know? Like, who can type faster wins the game.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Can you delete my line of code before I write the next one?

**Tomas Reimers:** Yeah, exactly. But might we see that for more targeted collaboration? Possibly. And one of the things that we actually do see is people will use stacking as a way to collaborate, where they're like, "Hey, I have a feature branch, but I'm not the only person working on it. I'm gonna write two commits." And then someone who's like "Hey, can you land that thing so that I can start working on something?" I'm just like, "Hey, can you just stack on top of me?" And then you've got these towers built by many groups of people, which are collaborative, but have discrete chunks built by individuals.

**Greg Foster:** Yeah.

**Jerod Santo:** So what does it feel like to use Graphite? Because when it comes to using Git and we're coding from a thousand different directions - you've got people using GitHub Desktop, you've got people using the Git command line, you've got people who put it in their Vim, and they've got it in their VS Code, or maybe it's up in your Stackblitz... I don't know where people are using Git these days, but in many different ways. GUIs etc. Surely, Graphite has --

**Adam Stacoviak:** \[44:16\] Show notes...

**Jerod Santo:** It's in your show notes, yeah. We sync our show notes with GitHub. So we're using it even when we're just adding links and Markdown. How do you use Graphite? What does it look like day to day?

**Greg Foster:** I think when we were first building out the command line interface, we wanted to make it as interoperable with Git as possible. I think the worst thing as an engineer is being forced to go whole hog on something, completely adopt some opaque black box tool and throw away the other tooling and workflows that you fully trust... We said, "Okay, can we build this on top of Git primitives? Any metadata that we're creating - can we store that within Git refs themselves? Can we make the commands just be complex overlays on top of underlying Git commands? And can we make it so that at any point, if you want to, you can break out and you still just have your Git branches and your pull requests like normal?" That was really our initial design goal, and we achieved that.

In a lot of ways, the CLI is just everything Git offers you, plus a bit of metadata that keeps track of the DAG or which branches are parents of which other branches, and helps you with those rebase operations when you wanna perform them. But there's nothing to stop a user at any point from saying "No, I'm gonna run Git to create my next branch" or "I'm gonna run Git to create a commit." You can do it with Graphite, you can do it with Git... You can use Graphite after Git to just realign your stack and make sure everything's in order.

**Tomas Reimers:** Yeah, we started with a CLI because we figured it was where a lot of people use Git. We wanna be everywhere in the long-term... So one day you will find us in Vim, in VS Code, in a GUI, all of that. For us, it's a question of sequencing. So the CLI came first, GUI probably comes next, to help some people who are less familiar with the command line tools, but still use Git, use Graphite as well. And then from there, I imagine we'll start to branch into VS Code, IntelliJ, wherever you may be. But one step at a time for us.

**Greg Foster:** Yeah. I think we're quite agnostic about the whole interface. It's helping engineers work together, adopt this workflow, move faster... But if you wanna do that in a GUI, you wanna do it in a CLI, that's up to you. We just wanna be there to support you.

**Jerod Santo:** I think that makes sense. I think starting at the command line makes sense. I think when it comes time to do -- I think basic Git at the command line is just fine. Once you get into the more interactive - the rebasing, the squashing, the picking, staging, line-by-line etc. command line Git, for me at least, becomes cumbersome. And that's usually where I do reach for a GUI.

Now, I watched the demo video again - we were referencing it; we'll have it in the show notes. People should check it out, because it's a nice overview of what it feels like, I think, to work with Graphite, at least at the time that that demo was created by your co-founder... And it has some nice-looking stuff in there. It's like, he was using the gt command, which I'm like "Is that an alias, or is that what your guys' Graphite gets installed as?" How do you actually do the stacking and the rearranging from the command line? Are you referencing hashes, or numbers, or what's that like?

**Greg Foster:** It's really as simple as create your changes as you normally would, stage them as you normally would - you know, "git add my files" - and then where you might otherwise just create a new commit, you can just create a branch, and you use Graphite to create the branch. You say "gt branch create".

Actually, for some of these commands we looked at Git and we said -- the nomenclature is a little bit hard to understand for beginners. I think in Git it's "checkout-b", that's how you create a new branch. We tried to just do a noun-verb pattern and say "branch create". That under the hood is quite simple; it just creates a new Git branch with your changes, and then sets the parents metadata. And we use that parent metadata if we're ever gonna perform a rebase for you, or if we're opening a pull request against GitHub and we wanna set the merge base correctly, we use that metadata. But mostly under the hood - and it's all open source, you can read it - it's mostly just executing common Git operations for you underneath.

\[48:14\] So you might go along, you might call "create branch" a couple of times. You have three branches locally. And then the next command that's most frequent would be "stack submit". So not only can you run commands that operate on any individual branch, but we have commands that operate on the stack level. "stack submit" would open up pull requests for those three branches all in one commit.

With different flags you can specify the description, you can specify if you're opening it as a draft... But in general, open up those three pull requests. It's also idempotent. If you've made some changes to already existing pull requests, it'll just sync those up and keep them fresh.

And then lastly, we have one or two final commands that if you start merging those in, it will automatically clean up the branches locally and shift your stack down. So say you merge in half those pull requests - we can just, in one go, shift that down and keep your local stack synced.

**Adam Stacoviak:** It's handling a lot of the hard parts, I suppose, behind the scenes for the user. So it seems like a complex workflow, but Graphite simplifies a lot of it by doing a lot of the behind the scenes for them.

**Greg Foster:** The whole thing can be done in, I think, about four commands.

**Tomas Reimers:** Yeah.

**Adam Stacoviak:** Cool.

**Tomas Reimers:** And another side of the story here is we have a web dashboard. The web dashboard... The goal is, you know, once you start stacking, you end up with a few more pull requests than you might have otherwise, and so keeping track of where they are, what do I need to review, where are they in the process, becomes even more important.

Our website - login with GitHub, it immediately off the bat just shows you "Okay, here are the PRs which are ready to land, which you need to review, that you're waiting on someone else to review", and then other stuff that maybe you just want eyes on and you're waiting for an author for. So if I request some changes on a PR that Greg put up, or maybe I approved, it, I'm waiting on him to take action. And then within that, you can actually go ahead and code review in there.

So that is entirely synced to GitHub. You see all the same functionality as GitHub, so you can leave comments there, you can suggest that it's there. And then we're trying to add a little bit of our own special features in there. So you have everything ranging from memes and macros, things that just make code review more fun for you as both a reviewer and an author, to things like being able to leave comments outside of the lines that were just changed.

So in GitHub you can only comment on change lines. One of the features that we always got was "Hey, can we comment actually on any line in the PR?" Because sometimes you change a variable name and you need to actually just like change where it's referenced later on in the code. You can leave that comment in Graphite and we will just leave that back in GitHub as best we can, saying something like "Hey, this comment was left using Graphite and was meant to reference this line", with a little x

**Greg Foster:** A really common workflow is we'll get one person at a company who will start using Graphite, they'll create their stacks, they'll use the web dashboard to maintain those pull requests, and maybe even merge them in all at the same time; we support batch merging. But their peers are still just using GitHub, and again, they don't have to get disrupted. They can see those pull requests like normal. Graphite puts a little comment on those pull requests, helping show with links navigation around the stack... But it still just looks like normal; it's 100% synced back to GitHub underneath the hood.

And then what we often see, honestly, is teammates will look at this and they say "Hey, it's the same thing I did. My team is actually putting up a lot of good code changes. This makes sense. Let me give this a try." And it seems to naturally spread.

We put very little effort into marketing or sharing this thing out. It seems to have a natural virality to it, which we appreciate.

**Break:** \[51:50\]

**Adam Stacoviak:** One of the challenges with beginning anything or building something - and you just pray that it gets adopted - if it's a team tool like this is, will the whole team have to use it to use the tool? And I think that's the beauty of Graphite, at least from this vantage point, is that Jerod can use it, and I don't have to use it. And there's some virality to it where while he's using it I can see he's efficient... Like you had said, there's comments on the pull requests, it's still normal GitHub workflow etc. You can even buckle down to just straight up Git if you want to. So there's not a lot of like you have to be all in or nothing, which I think is super-important for a tool. Is that just by happenstance, or was that literally by design in how it worked out?

**Tomas Reimers:** I think it's one of the things our users first asked us for. When you're an early dev tool and you're trying to convince developers "Hey, I think I have the workflow you want. You've just gotta try us out", the first question we got was like "Hold on, what if I don't like it? Am I locked in?"

**Adam Stacoviak:** Right.

**Tomas Reimers:** And then our answer was actually the same it's now. It's "Hey listen, we store all of the metadata in Git, so nothing's locked into us." So we actually store all the branch parents all in Git. And then you can always drop into Git if you need to. And we sync everything to GitHub. So between those two, your data is your own, you understand what's going on... Yes, we do a lot of magic in terms of rebasing and automating, but more than happy to explain that to you; you can read about how we do it online.

So we wanted to make this thing really accessible and understandable for people to be able to sort of go in, understand part of the reason the CLI is open source is so that people can see "Oh, cool, this is what it's doing."

**Greg Foster:** And we're developers too, we have all these same concerns when we're using new tools when we're using the tool that we're building ourselves. Sometimes there's a bug in it and we wanna make sure there's escape hatches. We don't want someone to be blocked by this tool that we're building out quickly.

\[56:00\] I think there's a whole level of empathy, of dogfooding that we try to really practice... And we have - again, I think I've mentioned before, but we have this Slack community full of developers who are using this, giving feedback... And everyone's just so honest with each other, whether or not it's a bug report, it's feedback... It's us saying "Hey, we're so sorry. We had a bug in the last version, we messed up... If you're curious, here's exactly what went wrong and how we've fixed it. Thank you for bearing with us."

There's a human element to the whole thing that is very nice. It's nice to build for other developers.

**Tomas Reimers:** Yeah. I think some of it is by design. So when we first first built this, Nick and I were like "Cool, we want this different workflow", and Greg was like "I want nothing to do with that. Make sure I don't see it, make sure I can still do the thing I wanna do..." So when we first built it, it was like, "Cool, we need --"

**Jerod Santo:** Kudos to you guys for not just kicking him off the team, by the way... You could have just offed him right then, but you let him stick around. That was wife.

**Greg Foster:** \[laughs\] Just change the lock on the door...

**Tomas Reimers:** "Anyway, cool, we solved the problem through a different means..." \[laughter\] So we needed to figure out how to work with that, and I think that led us down this route of "Okay, how do we make it interoperable?", but really.

**Adam Stacoviak:** Yeah. How does that lead to, let's say, the business side of things? So there's obvious growth here; you announced your series A, I believe... Was it seed, or series A? I don't even --

**Jerod Santo:** Series A, 20 million.

**Adam Stacoviak:** Series A, 20 million. I knew the number, but I wasn't sure if it was series A or seed. So congrats on that, by the way... Which means that you're at least on your way to the right direction. I've gotta imagine that's gotta be helpful with adoption, too. I think you kind of began enterprise-first, rather than smaller teams, it seems, based upon the logos on your website and whatnot... But talk to us about how that led into just adoption. Does that make it easier? Obviously, it does, but... Is it harder? What's the process to gain new teams, gain new trust?

There's obviously Phabricator out there, and Merit and all these different routes. There was this demand, but how do people know about this workflow that's beautiful, that is in GitHub or GitLab, and then how does this model, this non-lock-in, this DX and empathy-focused developer pattern work into adoption?

**Tomas Reimers:** So when we raised the round, we were looking for something very specific, which is we did not wanna be forced to -- how do I say this? Become like a business-y business super-quickly. Our belief was "Hey, we think we're building a workflow. We think that there's a lot of value behind code review, but we think we need to first get the world to understand it, get the world to at least try it out and use this."

So we were incredibly excited by Andreessen, because the partner who joined us, Peter Levine - he's the one who led GitHub's A, actually. So when he first met us, he was like "I get it. This is GitHub. This is what it looked like." Because when GitHub came out, Git wasn't a surefire thing; it was this new technology that some people were like "Well, maybe this is right, maybe this isn't right." And so I think to him and to some of our early users the belief was like "No, this is the way the world is going. We all believe--" much like back then, we believed in collaboration; we still all believe in collaboration. We believe smaller changes are the way to do it. So what we were looking for was a partner who was gonna support us in saying "Okay, how do we introduce the world to that concept? How do we introduce the world to smaller changes, to team-centric code review, not open source-centric code review (as we describe it), and who's gonna have the expertise to help us carry through?"

So we were very grateful. Not only did Andreessen join us, all of the angels we brought on were former and current executives, actually, from GitHub and GitLab, who came on and were like "Yup, we know what we need to do here. We first need to sort of start to teach this workflow, we need to focus on actually building familiarity with this and doing right by the community, because that is why we exist." It's a community of 3,000 developers on Slack who care about us, who help each other out, who write edits on post-it notes and send it to our designer, that give us the right to be a company. And how do we grow that to not just the 3,000 people who have taken early bets on us, but what we want to be the developer community at large, the tens of millions of developers that are out there.

**Greg Foster:** \[01:00:11.01\] It's awesome -- I imagine it's nice for companies who are starting to go, honestly, all-in on Graphite. Some companies - it's had this bottoms-up spread so far that most all of their engineers are using it... And I hope it's nice for them to see us raising that round too, because it means we have plenty of runway, it means we don't have to worry about will we have enough money to keep paying our team, will we have to pressure into enterprise sales really quickly? Hopefully, it gives them a little bit of peace of mind there.

**Adam Stacoviak:** Maybe this has been confirmed somewhat by internal conversations with people at GitHub, but - what do you do whenever they feature this thing, whenever they Codespaces or Copilot you? There's Gitpod out there, Codespaces is obviously in that space too, agnostic to all the places, Tabnine is out there in terms of AI-assisted development, Copilot... Is this like Dropbox to Apple one day? Is this just a feature, as Steve Jobs once said? Or is this something that -- I mean, to quote Mr. Wonderful, can they crush you like the cockroaches you might be?

**Tomas Reimers:** I think it goes back to what we said, of I think their audience is fundamentally different. I think when we think about the audience, that GitHub primarily is beholden to, it's that open source audience. And I think because of that there is a slew of settings and features that they need to support that we just don't. That will continue to be our strategic advantage.

**Greg Foster:** I think we're passionate about being a platform. When we talked to some of the GitHub folks these days, they don't want to get into the game of having companies build on top of them, and then just try to cut them down. They're trying to be a friendly platform.

I also think - I mean, this is more subjective, but I think they're trying to focus on finding ways to sell Azure compute. And when you talk about some of these projects, like Codespaces and Copilot, as well as GitHub Actions, they're funneling users towards buying Microsoft compute. And that actually makes a lot sense as a business. But it does mean that code review for the time being is perhaps less interesting to them, and they might be more supportive of just companies building on top of them. If their true passion is compute and it's code hosting, I think there is room for companies to be built on top.

One more thing I'll say on this - there's a benefit to us existing in this space and in the long-run us being agnostic to where the code is hosted. We currently support, GitHub, but there's no reason we can't' support GitLab, we can't support private code hosting, you name it... The same way Terraform is nice in a world of Amazon CloudFormation, for example, there are sometimes benefits for a company to adopt a tool that is more agnostic to the backend, and less coupled.

**Jerod Santo:** So Graphite exists today as a command-line tool that layers onto Git, as well as a web-based dashboard. Are those two things decoupled? Can I just use the command line tool as a regular user and just hop on Graphite's ideas, and not necessarily become a Graphite account, and a customer? Or is it all kind of like you've gotta buy into the Graphite business to use our command line tool?

**Greg Foster:** Yeah, I mean, as long as you're not going network-based operations, so things that would require GitHub-level authentication, the command line tool works fine. As Tomas said, you can create stack branches, you can reorder them, fix them up, split them out, and all that is doing is modifying metadata within your Git repository itself.

I think the only command we have that will require you to set up some account with us would be "submit", and that's because it's doing work on the server to open up N number of pull requests against GitHub and then link them together.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Because there's a GitHub app involved.

**Tomas Reimers:** Exactly.

**Greg Foster:** Again, it's somewhat community-centric, right? If we don't need you to go through our server, you don't have to.

**Tomas Reimers:** And we definitely do have users who will set up the web account, hook it up with the CLI, and then predominantly just use the CLI, and that's totally fine as well. We end up just needing the web account as a way to call into the GitHub API.

**Jerod Santo:** \[01:04:24.08\] Mm-hm. So tell us - I don't think we touched very much on that web dashboard and what it looks like today, and maybe there's a future of pro accounts, or team... I figure, when you start to think about monetizing, which you very well said that you're trying to defer those kinds of decisions until you have critical mass - fair enough; that's what VC is for. But surely, in the back of your mind you're thinking "Well, this could maybe be a monetization thing. Maybe this could be a monetization."

It seems like the webby stuff, the collaborative stuff, also licensing for teams etc. could also be a good route. But what's the web dashboard do today, and maybe do you have plans for that being more awesome down the road?

**Greg Foster:** Well, maybe I'll say what it currently does, and Tomas can talk about the incoming features. One of the things I'll underscore is - like you said, you can use the CLI without using the web dashboard. You can also use the web dashboard without using the CLI. You don't even have to buy this whole idea of stacking your code changes. You can just use this and say that "Hey, if I work within a large company and I'm doing pull requests against 20 repositories, lots of different people", you might say that there's not an easy way to see at a glance, kind of like a Gmail inbox with like "Okay, what are the three things I need to review? What are the three things I need to merge?" We provide that to you. That's the first page within the Graphite web dashboard, is customizable sections, almost like an email inbox, of actionable pull requests.

The second main view we have is if you click into any of those, similar to Phabricator, we show you a single page with all the comments, with a description of the pull request, the code itself, all keyed out with shortcuts, modern-looking interface, file tree, you name it. And people tend to enjoy this interface a little bit more, honestly for code review and merging, because it's a little bit snappier, it's a little bit more responsive, it's a little bit more modern of an experience. It has GIFs, it has keyboard navigation... It has a couple features on top of GitHub. That's where the web stands currently. Tomas, do you wanna talk about what's coming?

**Tomas Reimers:** Yeah, so the biggest thing that's coming is we have a bunch of UI improvements coming out, which are aimed to make that PR page even simpler, easier to understand, easier to just get involved.

I think one of the funny things to us is when you look at most pull requests page, of like "Okay, where is the information I need to collect?" and it's scattered throughout a bunch of tabs, and it requires a very careful read of timelines and things like that - we wanna make this even easier, because as you said, Jerod, many developers do not love this part of their job, and they're just trying to get in and out of code review as fast as possible. And we wanna facilitate that.

So that's our goal, is those UI updates. I think what happens after that then is some of those -- that GUI that we talked about earlier; features that are aimed at making Git more accessible and easier to understand for people who are newer to the experience. And I think what happens even after that is probably some of those team collaboration features. The magic that really happens when you and I are both Graphite users, what can we start to do because we're both on Graphite and because we have that new interface.

**Greg Foster:** I guess if you're listening to this and you think this is interesting, but you wish that code review had some random feature, let us know. We're super-receptive. We went so far as to -- one of the primary views in the website is just an upvoting feature list, and any user can go on there and just "Hey, I wish my code review had this feature", upvote existing suggestions... And a big part of our roadmap is actually just picking those top community asks and implementing them.

One thing we think is really exciting is we've got this amazing, loving community, and they get to say what they want the future of code review to look like, and we'll probably help build those.

**Adam Stacoviak:** \[01:08:00.29\] Yeah. So you have the command line interface, you have the pull request inbox, which obviously is super-helpful... And then you have a separate tab, I'm assuming, in the web view of this, which is code review, where you're digging into, you're looking at different things...

Assuming that the code host is GitHub, if you adopt or a team adopts Graphite, if they're in this world, do they ever have to actually go to github.com/their-repo or whatever to even do anything? If they buy in and they see value, do they sort of eject from all GitHub workflows, basically? Aside from code hosts, and maybe discussions, or something else that might be on GitHub, obviously, workflow-related - pull request to inbox, code review... Is that sort of like away from github.com, essentially?

**Tomas Reimers:** Yeah, Merrill, our co-founder, had a good way of thinking about this when we first built it out... Because we dogfood this thing, too. And the idea was "Can we as a team get to the point where we have no reason to go back to GitHub, beyond maybe changing some extreme admin setting or something?"

**Adam Stacoviak:** yeah.

**Tomas Reimers:** We got ourselves to that point, and I think a lot of the teams who use us feel the same thing. There's a long tail of fringe features and settings that one might go to GitHub to configure, but for common workflows - correct me, Tomas, but I don't think there's a reason to go back.

**Greg Foster:** You know, I think it's funny, actually... I think to actually fully round out the conversation, what we were saying - it started as this tool of just "How do we get ourselves into this better platform?" And to that snowball effect that you were talking about - as we build it out, as we see opportunities to improve various parts, we've just been adding to it.

So for ourselves, any place where we find ourselves going back to GitHub, we tend to code around it and say like "Okay, cool, this might be an area for us to add." I still think there's a ton to do.

I still end up going back to GitHub for various things, like what's the timeline of commits; code search is something I frequently need. But in general, in the pull request flow, that's a thing I now keep entirely on Graphite.

But you know, even on our PR page, there's just a link back to GitHub, to view it on GitHub. So again, at no point is there any lock-in. And if you need to access a different feature, you just click in.

**Adam Stacoviak:** I'm thinking about this from a different angle. The reason why I asked this question is 1) What's the actual user experience, but then 2) the pull requests and those kinds of things on github.com are valuable to github.com because they bring the user back to github.com. You could totally ship and do all your work inside Terminal and never touch github.com, unless you're reviewing code and doing different things. You can eject from "their brand", basically.

I think as you become more popular and you gain more inroads, you may be more threatening to them than you realize today, from a brand perspective... You know what I mean? Because if they can eject from github.com, their workflows, and - sure, you're valuable, and they're friendly now, I'm just thinking at some point you may be threatening to them because of that.

**Jerod Santo:** So be careful out there.

**Tomas Reimers:** Yeah, I think there's probably a lot of roads before then. I think before then they'd probably talk to us. I think we'd probably have a conversation.

**Adam Stacoviak:** Yeah.

**Tomas Reimers:** I think there's a lot that they want to own, but we have no intention or desire to, in terms of projects, Codespaces, Copilot, Actions.

**Adam Stacoviak:** Sure.

**Tomas Reimers:** I think that as we grow there, I'm sure there are conversations that will happen.

**Adam Stacoviak:** Yeah.

**Greg Foster:** I think what Adam's saying, Tomas, is you've gotta look over your shoulder in case someone's following you in the night... \[laughter\]

**Jerod Santo:** That's right.

**Adam Stacoviak:** No, I don't quite mean it like that threatening, but I think there is gonna be a day when you may not play nice, or a table conversation may need to be had, because you may gain that much power in this space where -- you know, they're power users. These are enterprises, these are the large customers for them, and if they can, for the most part, eject from the github.com workflows, and they're not users of Codespaces, or maybe they're not using other tooling, it can be an issue for them, long-term, potentially. I'm just thinking outside the box, I don't know. I could be totally wrong.

**Tomas Reimers:** \[01:12:10.12\] Totally. I mean, we'll have those conversations when the time comes. I think the thing that keeps us on the right track is focusing on the developers, and saying "Hey, we will build what's best for them what's gonna be most helpful", including ourselves too, because we're dogfooding this.

So I think if we just keep our eye on the community and on what's actually useful for the world, that'll pull us in positive directions. If there needs to be corporate conversations, we'll have them.

**Adam Stacoviak:** Sure. Well said. That's a good way to put it, for sure. I like that approach and I like that sentiment, too. That gives me faith in the direction you may go.

So we've asked you lots of questions, we've talked deeply about your workflow, your tooling, some of your business model, to some degree... You mentioned your large round of funding, you're sort of punting on some of the business direction you might go now, because you wanna make sure that you get critical mass, and are actually valuable and useful. You've got a Slack community that people are involved in, you've got a lot of garnered respect, a lot of demand happening out there... You're still currently on waitlist. You mentioned 3,500 earlier... What is your waitlist size now? If someone's listening to this show today and they're like "Okay, I've gotta have this tool. I wanna buy--" They can't buy it now, they have to join the waitlist. What is the process, what's the next step for would-be, should-be, could-be users from this point?

**Greg Foster:** Yeah, Tomas, what's the promo code? \[laughter\]

**Tomas Reimers:** Yeah, I think the short version is DM @withgraphite on Twitter and I'll let you through, to any listener of this show. More than happy to.

**Adam Stacoviak:** Okay.

**Greg Foster:** Part of the reason we have a waitlist is, honestly, to make sure we're growing at the right pace. There are times where we get an announcement, or an article, or maybe this podcast, where a wave of a couple thousand users try and sign up... And you know, part of it is us respecting our servers from some new wave load... And also, to make sure that as users come aboard, they're having positive experiences, and that we're able to respond if they have a problem, or a bug, or a feature request. So I think we use the waitlist purely as kind of a smoothing function.

**Adam Stacoviak:** A buffer, yeah.

**Tomas Reimers:** I think we use it -- it's one, the smoothing function, and then two, it's still early days for us, so every so often we'll see a bunch of people sign up, and we're like, "Well, today is the day we were planning the database migration, so... Hold on to them for a hot second. Let's get through that first, and then we let them on." \[laughs\]We generally let most people through. I think actually we've let almost everyone through at this point.

**Adam Stacoviak:** So you don't have a massive waiting list sitting there. It's sort of like trickling... You get somebody on there that are maybe on there a few days, or a week at most, and they're through.

**Tomas Reimers:** Exactly.

**Adam Stacoviak:** Okay.

**Tomas Reimers:** We also end -- if anyone's particularly motivated, email us, tweet us, whatever you need. More than happy to let people through. That is not the goal. The goal is more for our side, for capacity planning.

**Adam Stacoviak:** \[01:14:54.23\] Gotcha. Okay. So I guess on the flipside of that, we've asked you lots of questions, as I mentioned... What have we not asked you? What have we not asked you to talk about, or what's particularly interesting that we just haven't covered, that needs to be covered before we close?

**Greg Foster:** Tomas, if you're someone who loves working on dev tools and modern code review in New York, is there a way of getting involved?

**Tomas Reimers:** Yeah, I mean, also definitely reach out, I'll say that, for sure... \[laughter\]

**Adam Stacoviak:** Nice plug for hiring...

**Jerod Santo:** So you are hiring... Is that what you're trying to say?

**Tomas Reimers:** Yeah, we are hiring... Actually, I'll take in two regards. One is we are hiring. Two, we have plenty of users who like to contribute to us anyway. Our CLI is open source; we do accept open source contributions. Actually, our Windows and Linux installations are entirely community-led. More than happy to help support people ramp them up in that regard.

**Greg Foster:** Yeah. It's a community, both inside the company and outside.

**Tomas Reimers:** Yeah. If you're just interested in checking out the tool, I think the thing I'd say is join the Slack.

**Greg Foster:** Yeah.

**Tomas Reimers:** I think the Slack is this really wonderful place, where you see people joking around, you see them helping each other, you see them asking us questions, you see us asking them questions... It's a really great way to get to know the company and the tool... So definitely check that out as well.

**Greg Foster:** I'll just underscore again... If you're listening to this and you have ever wanted more from your code review, this is the best time to tell us about it and we will make sure it happens.

**Jerod Santo:** Get your feature requests in now, while they're still small.

**Greg Foster:** Exactly.

**Adam Stacoviak:** Yeah, exactly. One more point I wanna mention there... Greg, you mentioned hiring, you mentioned New York... So are you not a remote company? Are you open to anywhere? What's the state of how you're hiring and how your team works?

**Greg Foster:** Yeah, we're currently (I think) bucking the trend a little bit and we are a full in-person team in New York, about seven people total. We have an office here in Williamsburg; I'm sure we'll move it back to Manhattan as we scale. One day we might open the doors and go supporting hybrid or full remote. But for the time being, while we've been small - you know, I say seven people... We've benefitted massively from that internal communication, that culture building... Just the positive experience of all working together every day, literally shoulder to shoulder, sharing lunches, dinners...

I could believe there's a limit to how that scales; I could also believe that the future is unknown about how Covid and other work patterns evolve. But yeah, currently we're one of the few full in-person tech startups.

**Adam Stacoviak:** Cool. Well, if you're NYC-based or desire to be NYC-based, give them a shout. Greg, Tomas, thank you so much for iteration, patience, listening to the community, caring about the community, open sourcing the parts you can, obviously, and just caring about better workflows. We all need better workflows; all efficiencies are welcome here, so thank you for your time today and thank you for, I guess, hope in a modern code review process. Thank you.

**Greg Foster:** Well, hey, thank you for having us.

**Tomas Reimers:** Yeah, exciting to be here.
