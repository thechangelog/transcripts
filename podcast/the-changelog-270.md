**Sean Griffin:** Alright, I'll jump right into it. \[clears throat\] Added helper types of inner join and left outer join. Diesel debug query has been added as replacement for debug SQL. Added support.

**Jerod Santo:** Is this your changelog?

**Sean Griffin:** Yeah. Is this not where I come on and dramatically read Diesel's changelog? \[laughter\]

**Jerod Santo:** That was pretty good.

**Adam Stacoviak:** That was good, yeah. Keep going!

**Sean Griffin:** Well, I'm way unprepared if that's not what this is about. \[laughter\]

**Jerod Santo:** I was entertained for a split second.

**Adam Stacoviak:** Literally, the changelog. Love it.

**Sean Griffin:** Sorry, I had to get one dad joke in early on. I came up with that one two days ago, I've been waiting for it. \[laughter\]

**Jerod Santo:** I like it. We should leave that in.

**Adam Stacoviak:** I don't know why -- this is taped, man. Let's go!

**Jerod Santo:** Alright, let's go. Well, now that we know what kind of guy you are, Sean, you'll fit right in here on the show... But we have two subject lines; I believe they're intertwined (as most things are), and that's the subject of you full-time on Rails, and your work there on ActiveRecord, and then secondly, what you're up to with Diesel, which is an ORM and query builder for Rust, and the interrelation between those two things.

But let's start off learning a little bit more about you and your path to what we often call living the dream, which is working on open source full-time, and in a way, that seems like a pretty awesome way. So tell us about your work with Rails, how you got involved and how you ended up full-time at Shopify.

**Sean Griffin:** Sure. Let's see - so I got started with Rails four years ago now, I think; I'd done a commit here or there, but nothing particularly major... But I'd been on some projects for a while that all sort of had these weird, similar needs in terms of modifying attribute accessories on ActiveRecord objects, and I think it was Ruby Conf like 4-5 years ago - Ernie Miller gave a talk where he was talking about how Rails is missing a lot of API's that are kind of one level down in abstraction... All this culminated in me wanting to build out what is now today known as the Attributes API.

It just so happened that Aaron Patterson was -- I lived in Denver at the time, and he was in town for a local meetup to give a talk. I went out for drinks with him afterwards, and was like "Hey, I have this idea for this API." It sounds polite, but I was actually really drunk and kind of shouting at him about this API...

**Jerod Santo:** \[03:58\] Whatever works.

**Sean Griffin:** But anyway, so he was like "Yeah, sure. Whatever. Do it." I think he was partially just trying to get me to stop asking him about this idea that I had, since the majority of people who do that are never gonna follow through...

Anyway, that resulted in a pull request that was way too large to be reviewed, and then a series of smaller pull requests over time, and ultimately I vastly underestimated the amount of work that implementing that was gonna require, and when it was all said and done, I had rewritten a significant chunk of ActiveRecord for non-association and non-Arel-related things... At which point I was like, "Well, crap. I guess I'm maintaining this code for the rest of my life."

**Jerod Santo:** So I assume it got merged, then.

**Sean Griffin:** Oh yeah, definitely.

**Adam Stacoviak:** What was that like, to feel like you're maintaining it for the rest of your life? Are you being facetious or are you being serious?

**Sean Griffin:** I mean, both... I didn't really go "Well, I'll maintain this for the rest of my life", but yeah, it ultimately was part of why I ended up sticking around, it was just because I felt a responsibility to be around to fix the bugs in this code that I had submitted, and make sure that it will continue to evolve in the way I envisioned.

**Jerod Santo:** So just real quick for clarity, for those who are not in the Ruby on Rails scene - ActiveRecord is the ORM or the database library that ships with Ruby on Rails and is a significant portion of the Rails codebase, and probably a significant portion of the complexity in a lot of the bugs, so rewriting any small subset of ActiveRecord itself is not a small undertaking.

And probably, Sean, you know better than anybody at this point as a maintainer of ActiveRecord, while thousands, if not tens of thousands or hundreds of thousands of people who use ActiveRecord, there's probably a group of people that you could count on one or two hands that are intimately familiar with the way that it works. Is that fair?

**Sean Griffin:** Yeah, I think so. And to give some actual numbers, I don't know what it is in the codebase today, but around Rails 4.2, so not including action cable and not include active storage, ActiveRecord accounted for about 80% of our codebase, and back then I would say it was about 80% of our issues, as well.

Certainly, I would guess the percentage of the codebase has gone down, just because we've added two additional libraries, but probably still similar... Probably like 70%, I would guess. Although interestingly, I've been noticing that it is starting to become a smaller percentage of our opened issues, which is good.

**Jerod Santo:** Yeah, you can probably see that as a win, since you've been dedicating a lot of your time there...

**Sean Griffin:** Yeah.

**Jerod Santo:** So you opened up this massive PR, this idea that you were challenging there, and Patterson, who was then very involved with Rails - I'm not sure of his current status; in fact, he was full-time on Rails I believe working for AT&T Interactive, or somebody was paying him full-time to work on Rails back then. He now works at GitHub, and I'm assuming he's still very much involved. So he said "Go ahead and do it", you went out and accomplished this goal, and now a lot of the ActiveRecord codebase is your own, so you begin maintaining it. That doesn't get us to full-time at Shopify, so tell us the personal/business end of that same timeline, how you ended up being able to do this as your job.

**Sean Griffin:** \[07:37\] Yeah, so I guess the first thing is when I decided that this is what I wanted to do... Because it's funny, you call it "living the dream", and to a certain extent I kind of call it "living the nightmare".

**Jerod Santo:** That's the great irony, isn't it?

**Sean Griffin:** Yeah... But basically, I'm bad at work/life balance, and I started to realize that if I didn't do this as my full-time job, I had two full-time jobs. So I set out to switch to doing it full-time, simply because I'm bad at convincing myself to not work, and if I didn't do it during work hours, I was just gonna be doing the same amount of work on my own time. So it was purely a move for my own sanity.

I'd sort of really started to get a taste for like actually spending a significant amount of my time doing it. I was working at ThoughtBot as a consultant at the time, and I had some significant downtime between projects. That was when I started to try and spend more of my work hours doing it. I've been looking for ways to convince management that it was a worthwhile for me to be able to continue doing. Ultimately, the interest didn't align there, so I ended up leaving.

I ended up at Shopify because basically I went to a conference and begged a lot of people to give me money, and Shopify ultimately was the company that saw the value proposition. Because when you say full-time open source, it's a convenient way of kind of summing up a job with the emphasis on the focus of your job as working on open source, and it does not mean that I spend 100% of my time working on open source.

**Adam Stacoviak:** Open source is more than just code, it's a lot more than that - it's documentation, community, and even research and development, I'm sure. It's not just the things you do.

**Sean Griffin:** Yeah.

**Adam Stacoviak:** How long was this timeframe of like you petitioning the community, so to speak, with what you wanted to do and how you wanted to do full-time? How long was that span of time?

**Sean Griffin:** About six months.

**Jerod Santo:** Not too bad.

**Adam Stacoviak:** And you were full-time at ThoughtBot during that time?

**Sean Griffin:** Yeah.

**Jerod Santo:** Let me just do something unprecedented here at the Changelog. With your permission, Sean, I'm gonna read Sean's LinkedIn bio. I mean, he was reading the changelog to us --

**Sean Griffin:** Oh man, I haven't touched this in a long time. Yeah, go for it.

**Jerod Santo:** I'm assuming you haven't changed it for a while, because it sounds like it's still in your petition phase.

**Sean Griffin:** Oh, I had that there just to get recruiters to stop spamming me.

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** I enjoyed this. I knew that Sean was at Shopify, but I wanted to see where he was previously. ThoughtBot makes a lot of sense, because that's probably where you started doing The Bike Shed... So I saw this on LinkedIn and I thought it was funny. He said "I'm currently only interested in opportunities that will allow me to focus primarily on open source contributions. The best way I can contribute to the community is with my work on ActiveRecord, if that includes your company. If you agree, drop me a line."

This is where it gets good:

"My dream stack is the one where recruiters leave me the hell alone. Please read the previous paragraph. If you think that 'Focusing on open source contributions' working at a company that uses open source are the same, then go away."

It's interesting there, because you were very clearly stating at that time - and probably to this day - that you were interested and you were set on opportunities that allow you to do open source contributions full-time; or 'primarily' is what you said, which is probably more fair than full-time.

**Sean Griffin:** Yeah.

**Jerod Santo:** And then of course, the call to get recruiters to leave you alone is hilarious, because I've been on LinkedIn for many years, and the only people who've ever contacted me on LinkedIn is the recruiters. I haven't had a legitimate request, ever.

So I thought that was kind of funny, and perhaps written back when you were ready to go from consultant at ThoughtBot to maybe on the path that you're down today. So tell us, at Shopify - you got the job... Can you tell us what your official position is? You said it's more than just doing open source stuff. What all is involved in your role at Shopify?

**Sean Griffin:** \[12:02\] Well, my official position is 10x hacker ninja guru.

**Jerod Santo:** Oh, good.

**Sean Griffin:** If you're wondering what that means, it means that I once thought it'd be funny to see what happened if I put that on a government form, into my work permit, and it turns out what happens is that I cannot legally work in Canada with any job title other than 10x hacker ninja guru.

**Adam Stacoviak:** Oh, my gosh... \[laughter\] That is so true!

**Sean Griffin:** Right now I'm the only person who focuses on rails as their full-time job, and one of the biggest challenges that we face as a project is just issues and pull requests come in at a greater volume than we can generally process them. So I try to keep it at the very least one of the baseline things I do as part of my job is day to day - or, I guess, week to week - open issue count doesn't go up, and open pull request count does not go up.

Probably the majority of my day is just doing issue triage more than anything else, and reviewing pull requests and merging or closing them.

**Jerod Santo:** Does it feel like you're making significant progress? I mean, when you say that the majority of your time is issue triage, and when I think about different ways that people work on open source, and the ways that I think companies should invest in open source, I think the way that Shopify is going about it is necessary in terms of pushing this thing forward, because certain projects, certain tasks and needs are so intellectually -- not stimulating, but stressful; they require so much thought that you couldn't possibly one day a week, or one week a month, or two hours at the end of your day make significant process, like for instance on a rewrite of ActiveRecord, or a portion of it.

I think we need people who are thinking about these things all the time, because that's how you move software forward - you have to have the entire system in your head, and I like to think "Hey, at least Sean Griffin has ActiveRecord in his head and he's moving it forward." And then when I hear you say "Most of my time I'm triaging issues. It's not that I'm working them down, it's that I just don't want them to get any bigger", and I wonder "Wow, are we moving forward or are we just maintaining the status quo?"

**Sean Griffin:** I mean, a little bit of both. I think that moving forward also has a different meaning for ActiveRecord today than it used to. If you guys go to a Ruby Conf or a Rails Conf, you'll notice the tone is very different than it was a few years ago. There'll be a lot of people like "Oh my gosh, is Rails dying? Is Ruby dying?" I think the notion of that in general is sort of silly, but I think what a lot of that comes from is a misinterpretation of the signals that come from just "We, as a community, are no longer at the point where we're going to be hip and breaking new ground." Ultimately, Rails has shifted to a mature, stable framework.

It's interesting, because I've been finding it harder and harder as time goes on to convince people why they should upgrade to new Rails versions, because we just don't have as many killer features as we used to. But there's a lot of work that goes into each release, and I think a lot of the things that people are missing -- at Shopify I end up pairing with some people quite a bit on trickier test failures that they run into as part of upgrading Rails versions, and one of the ones that I've seen a lot recently was I changed how Dirty behaves in after\_save callbacks in ActiveRecord. Basically, if you ask if an attribute has changed inside an after\_save callback in 5.2, that's going to behave the same as if you had that code, rather than in a callback, if you actually just put that code directly after the call to save, so it behaves as if it was after save.

\[16:01\] In 5.1 earlier, the way it works is we did a persistence, we would run the after\_save callbacks, and then we clear the dirty flags. In 5.2, the way that's gonna work is we do the persistence, then we clear the dirty flags, and then we run the callbacks. So it's a bunch of new methods that are also more clear on what question you're trying to ask.

The new methods are all named "Do you wanna know if there is a change that has yet to be saved, or do you wanna know if there is a change that was just persisted?"

**Jerod Santo:** That's nice.

**Sean Griffin:** And all of the places that I've run into on Shopify that I've inadvertently broken things are places where there's a bunch of code that is like in an after\_save callback, mutating something and then expecting changed attributes to include both the things that were just saved, AND the thing that has yet to be saved. That actually just doesn't work in 5.1. That change will only be reflected in the "Do we have an unsaved change method?"

Anyway, so every time that I've gone in with somebody to look at how to fix this test failure, ultimately we've realized that the code was really funky to work around this quirkiness, and once we fixed the test failure, we actually were able to just delete a bunch of this hacky code that was working around a quirk in ActiveRecord.

I think that's a thing that a lot of people don't realize going from version to version. For me, a successful Rails version is when you can upgrade and delete a bunch of your hacks.

**Jerod Santo:** So that's definitely progress, especially when you talk about moving from franticness or from a lack of clarity or conciseness to a state of like a good, thought-through API. And we have that many people using different versions... Just moving a thing from step 1 to step 1.5 perhaps requires a lot of work, such as clarifying those specific -- even just the method names in 5.1 versus previously.

So a lot of work goes into it. On the outside, when you're looking at the new feature, it has less of the wow factor, less of the big wins that we were getting perhaps in the first ten years when there were obviously things missing and huge gains to be made.

**Sean Griffin:** Yeah. Certainly I think probably active storage is the thing that was most obviously -- that we've added since Rails 5, it's the first time we've had something I think everybody would agree was just a thing that almost every application needs and was obviously missing from Rails.

**Jerod Santo:** Yeah, tell us about active storage. This is the cloud storage, the after type stuff?

**Sean Griffin:** Yeah, it serves a similar purpose to Refile, or... Why am I spacing on the name of the other one that's really popular...?

**Jerod Santo:** I'm still using Paperclip. Does that make me old-school?

**Sean Griffin:** It does, yeah. \[laughter\] CarrierWave is the other one I was thinking of. Paperclip is a thing that -- it used to be CarrierWave and Paperclip, but I don't think anybody is really using Paperclip anymore.

**Jerod Santo:** Well, you found him.

**Adam Stacoviak:** On that note, though - maybe this is a wrench to some degree in the conversation, but you said (and maybe it's even something you can't speak about) how you left ThoughtBot because management didn't align, which I'm not gonna assume exactly what you said, but it was something about your desire to do this full-time... But then, Jerod, you use Paperclip - that's a ThoughtBot project, right?

**Jerod Santo:** Right.

**Adam Stacoviak:** And there's so much open source out there around Rails that's almost default for many Rails developers that's from ThoughtBot. So you would assume almost that ThoughtBot and management of ThoughtBot would see eye to eye with your future, Sean, and what you were trying to do; in hindsight, seeing this and this conversation has reminded me how prolific ThoughtBot is to Rails and open source, and... I don't know, I kind of have a question mark on that.

**Sean Griffin:** \[20:12\] I don't wanna undersell their dedication to open source...

**Adam Stacoviak:** Right, of course.

**Sean Griffin:** ...but there's a big difference between a developer who is billing and works on open source one day a week - because ThoughtBot just does not bill on Fridays... So there's a big difference between that and somebody who is not billing at all.

**Adam Stacoviak:** You needed to be somebody that was doing this consistently, day-to-day, full-time, and that just wasn't possible.

**Sean Griffin:** Yeah, exactly. So it's a big question of just -- I don't wanna be working somewhere because it's charity. I think that for the right company I very much do earn my paycheck and bring sufficient value to the company to justify my job's existence. So when I say "Our goals didn't align", I mean that it just was not a situation there where I was gonna be able to justify my paycheck there.

**Adam Stacoviak:** Sorry, I actually asked that because I was like -- you know, hearing Paperclip here in this conversation reminded me that they do such great work, and that's why I just had that question mark.

**Jerod Santo:** Well, it was probably a couple years ago now, Adam, we were on the Giant Robots podcast, back when Ben was hosting it, and I even said to him that day that my career has very much been just following ThoughtBot and what they do, and using their open source tools, and even today, our new stuff is not on Ruby on Rails; our CMS is on Elixir and Phoenix, and yet we're still using some ThoughtBot libraries that happen to be Elixir-based... So I couldn't speak more highly of the open source stuff that they've done through the years.

**Adam Stacoviak:** Absolutely.

**Sean Griffin:** Yeah.

**Break:** \[22:15\]

**Jerod Santo:** Back to active storage now, because I've only read it in brief, but give us -- I think this is probably a big deal, in terms of like this is a flagship type of feature... Tell us a bit more about it, when it's coming and that kind of stuff.

**Sean Griffin:** So it's coming to Rails 5.2, which as far as I know we haven't actually announced the date yet, but it's currently on Rails master. It's sort of the similar purpose to CarrierWave and Refile. I'm honestly not intimately familiar enough with either of those libraries or active storage to tell you specifically how it differs, other than generally, as with most things when they come into rails, API that kind of better suits what we see as the Rails way.

\[24:01\] I think the one thing that it does much more upfront than any other solutions thus far is it has a big focus on making direct upload for servers like S3 much easier and more integrated, which is a big deal if you are expecting large file uploads and you're hosting on something like Heroku, where if your user takes more than 30 seconds to upload that file, you're screwed.

Or actually, if the combined time for them to upload to your server and also for you to upload to S3 or otherwise transmit to your database or wherever else you're gonna store it - because you can't store it on a file system at the server...

**Jerod Santo:** Right. The second part of that transaction is usually pretty fast, because Heroku is on AWS infrastructure, so as long as you are on AWS also, it's fast... But yeah, point taken.

**Sean Griffin:** Yes. Anyway, direct upload is a thing that you end up needing, and it's a thing -- I've used a gem 4 in the past actually with Paperclip, I think... That worked fine, but now it's built in out of the box. From the maintenance point of view, it has an interesting structure just for -- all the files themselves actually do live on a single table, which is... I've never looked ar Refile; CarrierWave, as far as I know, doesn't structure things that way. I know PaperClip did it as columns on your table of the model it was attaching itself to... So that's kind of interesting, that you can always just add attachments to a model without needing a database migration... But like I said, I really can't speak to specifically how it differs from the other libraries out there too much.

**Jerod Santo:** One last topic on the Rails and full-time aspect before I move on to talking about your new shiny, which is Diesel... I was recently on your guys' show, on The Bike Shed - if you all don't listen to Sean and Derek Prior on the Bike Shed Podcast, check that out... We'll link up that episode in the show notes, where we talk about funding, sustainability, platforms, so on and so forth; if you're not sick of us talking about that, go listen to that episode. If you are sick of it, well, bear with us a little bit, because we've gotta get this figured out.

One of the things I said on that episode was that I would love for there to be more Sean Griffins out there, and more Shopifies, specifically... Shopify is a company that I think because of its leadership and because of its roots in programming in Rails, I think gets it better than most in terms of the value in having a full-time staffer working on the infrastructure that they rely upon. But first of all, do you think there's a future for more people in roles like yours, in the corporate - I was gonna say "corporate America" - world, and then secondly, if so, how do we go about getting more Sean Griffins out there?

**Sean Griffin:** Oh boy, that's a loaded question. Yes, I think there's room for more people with similar roles; I think that for it to be successful, it does need to be a job that is worth having, regardless of the PR aspect of it. So it needs to be structured in such a way that it brings value to the company. There's a couple of things that are always going to exist that bring value for having a full-time. Number one is -- I sort of try to avoid specifically doing something in Rails because Shopify needs it; that said, I tend to fix the problems that I'm most exposed to, and I'm exposed to Shopify's problems more than other people's problems, so things tend to get priority that way.

And certainly, when I do just notice something that, regardless of Shopify or not, that just when I'm pairing with somebody, like "Oh, that's bad. We should fix that..." There's a certain benefit to just when you notice something during that sort of work to just be able to go and commit it. And then the other one is just having the resource available of a person who can answer questions that not many other people can, and can generally act as sort of a multiplier on the rest of the team.

**Adam Stacoviak:** \[28:12\] You act as a liaison essentially too, answering questions in and around Rails to Shopify and the developers there.

**Sean Griffin:** Yeah. And sometimes it's more beginner questions that other people could answer, and that's fine... There's also benefit to just having a flexible enough schedule to be able to spend as much time as people need answering questions, but every now and again there'll be a time where I'll be helping somebody debug something and we'll spend two or three hours on it, we'll figure it out, and it'll be this sort of thing where it would have taken them a day or two otherwise. Those are the days that I feel really good about my job.

**Adam Stacoviak:** So that's the part that feels good about giving value back to the company that's obviously employing you... Not just the success you wanna have as being full-time open source on Rail. Those are kind of two different things, to some degree?

**Sean Griffin:** Yeah, I mean...

**Adam Stacoviak:** Because it sounds like you wanted to be employed somewhere to be full-time doing what you wanna do, but also give the value back. So it seems like it's two-headed in some capacity.

**Sean Griffin:** Right. Like I said, full-time open source does not mean 100% of my time is spent on open source. It's just a nice way to bundle up the "and the focus of my job is open source." I think one of the benefits that just comes from it is if somebody does just need somebody to pair with them on a hard problem, whether it's Rails-related or not, I tend to be less bound to deadlines, because I don't work on the products, so I'm much more available than most people are for whatever impromptu -- for answering questions, for pairing with somebody on whatever, doing code review... Shopify could probably use a few dozen people like that with the number of developers we have, but there's certainly a lot of value in just having people who are available... Senior developers who are available just to help in general, who the answer is gonna be "I would love to, but I really can't because I have to finish this feature."

**Jerod Santo:** Yeah. I've been trying to think of a metaphor that works well in discussing maybe the roles of developers inside of a company, one that gets to a scale where it's beyond three people, or a small team, where there's multiple teams of developers doing different things, and what makes sense in terms of like business language that people can use with regards to roles like your. I think one metaphor I've been thinking about is in terms of kind of back-office/front-office type of employees. I'm not sure how business-centered you all are, but with regard to people who are in sales, marketing (HR would be back-office), certain customer-facing jobs, versus accounting, controllers... Those types of roles where the people upfront are the ones "making the money", and the people in the back are the ones "saving the money" or "managing the money."

With developers, I think at a certain point when so much of your infrastructure is outside of your control - in the case of software as a service you get to a certain size and you have hundreds of thousands, if not millions of lines of code that are maintained by people that don't work for you, I think having your front-office developers - these are the people who are working on new features, new products, so and so forth, and then having kind of a set of infrastructure people... Which is really nice, like you said, Sean - when somebody does need help or needs to pair, you're generally more available, because you don't have that deadline.

**Sean Griffin:** Yeah.

**Jerod Santo:** I wonder if that's a metaphor that resonates with you guys, or if I'm just barking up the wrong tree.

**Sean Griffin:** \[31:54\] No, it makes a lot of sense. To a certain extent, the reason I've tried to structure this position the way that it is for me is just because at the end of the day, if I'm working on the product, I'm not gonna be that much more effective at building a Rails app than any other developer is.

The majority of building a Rails app is boring, which is a good thing, but... I mean, not boring like "I don't wanna be doing it", but boring in that just about any developer is gonna be able to do an equally good job and take about the same amount of time. And I do think that there is a unique knowledge set that comes with just maintaining the framework that I wanna be able to apply as much as I can.

**Adam Stacoviak:** If you had to, what would be a way to template the kind of role you have, to others? If we can copy and paste what you do there, is there a job description? How do you outline the type of role? I mean, obviously, you covered the things you just did here now... How do you take that to LinkedIn, GitHub -- obviously, GitHub does probably a lot, and Stripe does a lot... But how do you take that to the non-deep tech companies and say "Here's how you embed somebody..." - like Jerod said, you have so much leaning on lines of code you don't ever control, that aren't employed by you... How do you copy and paste what you do and apply it elsewhere?

**Sean Griffin:** That's the thing, I don't know that that's the way to grow it. I think that for the people who want to do it full-time, it is going to be a very unique job, depending on both the person doing it and what they want out of the role, and also what makes sense for the company that's hiring them.

I think really the way that we grow more people in open source is we do just have more people who aren't necessarily full-time on it, but are spending some portion of their time...

Issue triage, for example, is the sort of thing that can generally much more easily be done on a day/week scale; smaller features are something that can be done on a week/month scale. Something that Shopify has been doing recently which I think is really cool is we have people in the company submit proposals to the Rails team of stuff that they would like to work on, and then we pick some people and they come join the Rails team for a quarter, and just do open source full-time for one quarter. Not everybody in the company does it that way, it's just whoever gets picked, but ultimately, that is the sort of thing people talk about 20% time, and I would wager 25% time is not a huge jump after that.

I think if more companies offered 20%-25% time for open source and also gave people the flexibility to spend that time in whatever chunks make sense for the thing that they're trying to accomplish - so if they're just wanting to get their feet wet in open source, Fridays makes a lot of sense. If they're maintaining a project, a week/month might make more sense, and if they really wanna dig into building a big feature, there are things that you just can't do that take more than a week that you just cannot effectively do unless you're able to really go heads down, spend the full time thinking about it... So allowing people to go even a quarter/year. I think if more companies offered that sort of thing, that would be the better way to grow it than more positions like mine.

**Jerod Santo:** One last question on this and then we'll cut ourselves off, because honestly, I think Adam and I could prod you about this particular thing all afternoon.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But the last thing I'll say - I said that you're "living the dream", you jokingly said kind of more like "living the nightmare", but in all honesty, are you happy with what you've achieved in terms of your role and the ability to do it? Does it play out overall good or overall bad?

**Sean Griffin:** Another loaded question.

**Jerod Santo:** No, that's not loaded. That's fair.

**Sean Griffin:** I'm very satisfied with how things turned out, and I think I'm happier doing what I am right now than I would be doing something else.

**Jerod Santo:** That's the safest way to answer that. Good answer.

**Sean Griffin:** \[36:08\] That's my very political way of saying "No, but I'm gonna be more miserable doing anything else."

**Jerod Santo:** \[laughs\] Right.

**Sean Griffin:** So that was the other half of why I went into doing this full-time - I found myself less and less able to get motivated by business problems... Which would be a whole rabbit hole, so we don't have to go into that, but...

**Adam Stacoviak:** That was discussed recently on GoTime. We mentioned that in the pre-call, jokingly - "Hey, it's go time, but we have a show called Go Time." And it was discussed on their recent show; I think it might have been Chase Adams, or somebody else, I can't recall the person, but if we do, I'll link it up in the show notes. They were just saying they enjoyed building developer tools more, serving the developer; the developer was their customer, rather than the product that the company was delivering. So they felt comfortable in that arena, much more than they did, as you had said, which was like dealing with business problems.

**Sean Griffin:** Yeah. Well, then that's why open source as a full-time job can kind of suck, because how many developers give every single one of their customers a direct hotline to them?

**Jerod Santo:** Sean, you write in Ruby ORM as your day job, and for some reason you decided to build a Rust ORM - that's what I'll just call your side gig. Tell us about Diesel and why you decided to dive into the world of ORMs once again, this time in Rust.

**Sean Griffin:** So just to preface one thing, because I've been noticing a lot of people tune out Diesel immediately with that label, so I'd like to preface it with Diesel is very much more of a query builder first, and an ORM second.

**Jerod Santo:** That's funny, because in our notes I actually have a specific question - is it really an ORM, and do we care to bikeshed the acronym for a while? Because we can, and I'm sure people do.

**Sean Griffin:** It is an ORM in that it does provide some functionality to map rows in your database table to objects in your system.

**Jerod Santo:** Okay, but more about the query builder.

**Sean Griffin:** Yes, but it's more about the query builder than anything else, because I think that's the more interesting part.

**Jerod Santo:** Why do people tune out when they hear ORM, do you think?

**Sean Griffin:** I think that when people hear ORM, they think...

**Jerod Santo:** Boring?

**Sean Griffin:** They have PATS flashbacks to the most painful parts of ActiveRecord of Hibernate, or Django; they think about callbacks and over-coupling business logic to persistence logic, and all that good stuff.

**Jerod Santo:** Fair enough.

**Sean Griffin:** Anyway, so you had asked what made me wanna jump back into it. So Rust was a language that had -- I wanted to jump into it because of Rust, basically. Rust was a language that before I ever tried writing a line of it, was aware of and interested in, just because I was very into various functional programming languages, mostly Scala and Haskell. I found Rust interesting because everybody is trying to solve the problem of shared mutable state, and most functional languages are going about that by removing mutability, and I found Rust, if nothing else, novel, because it went about fixing it by removing sharing. It piqued my interest, if for no other reason, then because it was doing something novel.

I had inadvertently towards the end of my time at ThoughtBot become the 3D rendering engine guy.

**Jerod Santo:** How did you do that?

**Sean Griffin:** Basically, I wrote a 3D rendering engine; it turns out when you do one of those, there's a lot of 3D rendering engine contracts that come out of the weeds. And why I ended up having to write one is a story that'll take me ten minutes to tell, but basically out of necessity I ended up having to write one for a different project, at sort of the beginnings of WebGL being supported by browsers, and then the projects kept coming.

\[40:10\] Anyway, so we're on this project that was C++, and it was for mobile, and because of the polycount requirements we couldn't take the overhead of a framework like Unity. So it was a kind of raw OpenGL engine. Rust had just gone 1.0 at this point in time, so for fun, on nights and weekends, I sort of ported it to Rust, just to get a feel for the language. And got sold on it if nothing else as a replacement for C++, because I had a segfault that was having a bear of a time tracking down, and this was like me just one-to-one, as close as I could porting the C++ code over. And this was not modern C++, this was a guy with a decent understanding of C trying to write C++, so not using templates in any meaningful way, certainly not using smart pointers the way I should have been...

So it was generally pretty easy to directly port to Rust, but then I finally figured out where the segfault was coming from, because it wouldn't compile. So I never shipped the Rust port, but just the act of porting it fixed a bug in my code. So I still \[unintelligible 00:41:23.13\] a replacement for C++ immediately there, but I don't generally write C++, because I'm very bad at it, so that wasn't terribly interesting... But I did realize how amazing its type system was as a part of that project.

The Rust type system, to a certain extent it is what if you took Haskell's type system, removed higher kind of types, but in exchange gave certain other types of genericism in type class instances, and you end up with the Rust type system.

That was really cool, and so then I started wondering, "Hm, I wonder if Rust could work as a high-level language..." So Diesel was me trying to answer that question originally.

**Jerod Santo:** That's an interesting concept. Maybe you should write a book, because two ways that you described Rust to me just now are a bit more tangible, and we've had shows on Rust... Steve Klabnik taught us about Rust, Yehuda Katz, and it never sticks with me.

**Sean Griffin:** That was the upset that actually originally got me interested in Rust.

**Jerod Santo:** Oh, very cool. So it's a circle of life.

**Adam Stacoviak:** Wow...! Nothing we love here more than that. That's so awesome.

**Jerod Santo:** That's right.

**Sean Griffin:** So a random aside on Haskell... RustConf was this weekend, and I was there giving a talk. The talk was about the Rust type system, and it was called Type System Tips For The Real World. The actual goal of the talk was to explain the concept of metamorphisation in a way that was accessible to people who were new to both programming and new to Rust.

I'm not gonna recap the whole talk; I don't know how long editing is, so it may not even be online when this goes out. If it's out, there will be a link in the show notes, but if not, the video will be out in a few weeks. But there's this case of infinitely-sized types, that's kind of an error that you really only run into if you're trying to implement a singly linked list in Rust, where the naive way to write it is you have a struct or an enum of some type where one of the fields is the same type, and in a language like Haskell that's sort of implicitly behind a pointer, everything's keep allocated, so the size is known and that's fine, and that's how you solve the problem in Rust, as well... But in Rust if you kind of naively just write a struct where one of the fields is the same type as the struct itself, then that has an infinite size because the size of a struct is the sum of the size of all of its fields.

The example that everybody uses for this is singly linked lists, because that's really the only time you ever practically run into this. But in every example I've ever seen, you always have it be like it's a list of bytes specifically, because you don't wanna deal with generics, explaining this problem...

\[44:15\] And I've always kind of hated that, because 1) not everybody knows or cares what a single linked list is, and 2) nobody's ever gonna be implementing a list of bytes.

I had this revelation when I was working on this talk. If I make it specifically a list of type car, I can call it list string, and number one, it becomes more tangible to people who don't know what singly linked lists are, and number two, I get to make fun of Haskell a lot during this talk. \[laughter\]

There were like three people in the audience who did Haskell as their full-time job, and they thought it was really funny.

**Jerod Santo:** That's when you're really talking to a niche. You're at a RustConf, and at a RustConf you get three people in an audience that understand your joke.

**Sean Griffin:** Well, a funny other story I'll tell in just a second, but no, I think a lot of people got the joke, because just representing string as a singly linked of characters is kind of a bad idea in general, and most people seem to just at the very least laugh, but there were the three people - just because I think everybody who does Haskell will agree that that choice has caused so much pain to the Haskell community...

**Jerod Santo:** Oh, I see.

**Sean Griffin:** ...so they laughed much more because of that.

**Jerod Santo:** So it wasn't that three people got it, but the three people were hit by it, basically.

**Sean Griffin:** Yeah. My very first conference talk I ever gave, my first slide was a joke that was really only funny if you knew Haskell. It was at a Ruby conference, and I way over-estimated the number of people in Ruby who know Haskell. Jessica Kerr found it very funny; I know that because she was the only person in the entire room who laughed.

**Jerod Santo:** You should put that on a T-shirt of something, "Jessica Kerr thinks I'm funny", you know?

**Sean Griffin:** She thought that one joke was funny, if nothing else. \[laughter\]

**Break:** \[46:05\] to \[48:49\]

**Jerod Santo:** You had mentioned that Diesel was an attempt to - I'm paraphrasing your words now - basically present Rust as a higher-level language...?

**Sean Griffin:** It was to figure out if it could even be that.

**Jerod Santo:** Yes, and I think that and some other efforts around web frameworks and such things are starting to cast Rust more in a general purpose light, whereas when it was first presented to the community - and it's been around for a little while now, but we've always said this is a systems language... And I remember you saying on The Bike Shed at some point that you think it has perhaps done a disservice to the language... I was curious if you could expand on that.

**Sean Griffin:** Yeah, so I think the problem with just referring to it as a systems language is -- the things that systems languages can do and the things that Ruby can do... This isn't like a Venn diagram, it's not like two disjoint sets, right? A systems language -- being a systems language does not prevent the language from doing anything that a high-level language does; it's just that historically, languages that were able to do the sort of things that systems languages are able to do, which is generally just be able to control memory allocation, have been painful to use for higher level tasks. C++ developers may disagree with me here, but that's fine.

Go, for example, was originally presented to the world as a systems programming language, and they eventually reframed it as a general-purpose programming language, because ultimately, even though technically general purpose is less general -- like, if you're gonna classify things, general purpose is less general purpose than systems. Ruby is a general purpose programming language...

**Adam Stacoviak:** Right.

**Jerod Santo:** Yeah.

**Sean Griffin:** Nobody's gonna claim that you can write an operating system in Ruby; I mean, you can, it just won't be a very good one, or a very fast one at least.

**Jerod Santo:** That's one of the reasons I appreciated how Swift was presented to the world, because it was very clearly from the start, it's supposed to be everything from a single-line script that you execute just in time, to build an operating system with it. So it had this huge ambition, but they clearly stated it from the very beginning, at least from the release date... Whereas with Go and Rust they've kind of been like trying to figure -- not really figure out what it is, but realize that maybe perhaps it's been cast in a light that people will tend to put it into a corner and say "Oh, you're just for that", so they don't think of it as a tool they can grab.

**Sean Griffin:** I think that the Rust team overestimated Rust's appeal to C++ developers and underestimated its appeal to the broader audience.

**Jerod Santo:** It's interesting, because you're coming to it as a Rubyist who had some C++ skills, but you like to --

**Sean Griffin:** I do not have C++ skills, let's be clear about that...

**Jerod Santo:** Well, I said "some skills", because you were building this thing with C++, so there's some skills right there..

**Sean Griffin:** Yeah... But I think that's telling, right? That the only reason I decided to actually take a look at it was as a replacement for C++. I was aware of it before it, I just never actually realized what it could do outside of "Oh yeah, you would use it for everything you would use C for."

**Jerod Santo:** \[52:07\] Right. So you set out to see if it was good at such things as being an ORM, so you started building Diesel, and that was a while ago. Tell us where you got with that, where Diesel is at in its life... Just open up that a little bit for us.

**Sean Griffin:** Yeah, so I shipped Diesel Thanksgiving Day 2015, because I was trying to avoid family... \[laughter\]

**Adam Stacoviak:** Family's listening...

**Jerod Santo:** Oh, boy...

**Sean Griffin:** I hope not. I doubt it. \[laughter\] So Diesel is coming up on its second birthday. Right now I guess where it's at in its lifespan is we are looking to ship 1.0, and right now our target date is November 23rd, which will be Diesel's second birthday. That by no means it's gonna be like "Diesel's feature-complete", but it is a commitment to stability of the API, and basically all of the features that I expect to be able to implement in the near future - by the near future, I would call that like within 2-3 years - that I also expect to require breaking changes, are done.

So the features that have been on the 1.0 milestone are not the sort of things that are like super pressing, compared to some of the other things, but are the things I expect to require breaking changes.

One of those is -- actually most of the stuff is actually gone now... But refactoring our error types to be a slightly better structure; it's one of those things that like -- that's actually been on the issue tracker since June. It's a low-priority thing, it's one of those, like "Yeah, there's a few tweaks we wanna make here, but there's no pressing need for it. It's not like our current error-handling API is super bad" but it's one of those that is gonna be a breaking change, so we need to do it before 1.0, or commit to not doing it for a while.

Ironically, as I've been going through this milestone, actually I've been finding more and more things where I'm like "You know what, actually I think I can do this backwards-compatibly, so I'm gonna take this off the milestone."

**Adam Stacoviak:** You mentioned that you started this Thanksgiving 2015.

**Sean Griffin:** That's when I released 0.1.

**Adam Stacoviak:** Okay.

**Sean Griffin:** I started on it about six months before that.

**Adam Stacoviak:** And you mentioned that you got into this as a desire to learn more about Rust, right? So was this your learning thing for Rust, or is that not where you started?

**Sean Griffin:** No, no. Certainly, my learning thing for Rust - at least for like the very basics of it - was that 3D rendering project. Certainly, I learned a lot more about Rust as part of writing Diesel, but I definitely had a reasonable understanding of the language when I started the project.

**Adam Stacoviak:** So were you scratching an itch when you did it, or why is it even existing?

**Sean Griffin:** I mean, it was, very much. So it exists because there was not a good ORM at the time. I was originally going to -- my original plan was actually to go full-on web framework, which you know, if I had infinite time would have happened... An ORM was the first logical part of that. But it was very much like I just wanted to explore Rust as a high-level language. I didn't know when I started if Diesel was gonna ever be a library that was good enough to ship, but I wanted to see if Rust could work as a high-level language. It was a language I wanted to spend more time with, so to me high-level means web and pretty much every web application out there that needs to interact with a database, and I wanted a library that made it easier to interact with a database.

So it wasn't so much to scratch an itch per se, because I didn't have an existing application in Rust that was missing a good database library. That said, good open source libraries are not built in a vacuum, so I very quickly realized I was gonna need an application. For me, that application was Crates.io, which was Rust's version of RubyGems.org, which does some surprisingly complex interactions with the database.

**Jerod Santo:** \[56:09\] See, I would assume that that's relatively straightforward.

**Sean Griffin:** You would think, but they're doing some interesting things in the database that a lot of people would have otherwise done in their native language. For example, one of the things that Diesel supports as a result of Crates.io is the ability to use arbitrary user-defined SQL functions in the query builder. That was because Crates.io has a function called canon crate name which is just where they canonicalize the name, replacing underscores and hyphens and changing the casing, and they do that in the database.

That was one of those like -- okay, you would have made sure that you always called .downcase and .gsub in your scope in Rails. I don't actually know that there's a huge benefit to doing it in the database, because you also just have to remember to call this function, but that was how they were doing it, so Diesel sports arbitrary SQL functions... And it turned out to be -- number one, just because it's a good thing to sport, but it turned out to be a really good move, because there's a bunch of functions that have non-trivial signatures to write when you actually try and figure out the type signatures of it... Like, just "lower". Actually, I think we have "lower" in Diesel. I'm trying to think, there was a really common one where depending on the type that you -- COALESCE is probably a good one, because COALESCE has no meaningful type signature that you could write in most languages. Certainly, Rust does not have variatic length functions, so figuring out how to write COALESCE would have been a pain in the back. But because we sport arbitrary user-defined SQL functions and it's really easy to do so, you just define COALESCE with the actual signature you need for that one case where you're gonna call it, and we were able to just solve that issue entirely.

**Jerod Santo:** Yeah, it saves a bunch of code.

**Sean Griffin:** Saving code is a benefit, for sure. It's one of those things, like, if I had a good idea in my head of how to reasonably write COALESCE in a way that wasn't painful for people to use, I would do it, but I don't, so that's okay, because you can still do COALESCE, and it's fine.

**Jerod Santo:** Right. It saves you from coming up with a painful solution, whereas people can all just do it the way that they need to. So I imagine - Adam asked why does it exist, and you said it wasn't really to scratch an itch, but you wanted to try the novelty or Rust; you've already tried Rust, you wanted to provide a thing in the Rust ecosystem that didn't exist, which is one of the ways that languages get adopted - people have tools that can solve their problems... Especially if you're trying to build web stuff and there's no web stuff or database stuff available, it's sometimes a non-starter for folks.

I was wondering if a lot of Diesel's - maybe not the genesis of it, but maybe the design of Diesel and the feature set are a product of your experience working with ActiveRecord, and the history there, and how much of it is a product of Rust's design? How much of it is because of where you've been with ActiveRecord, so the things that you've seen that you don't wanna do, with the good ideas that you do wanna do, and then how much of it falls out from Rust's properties as a platform?

**Sean Griffin:** Yeah, so it's a combination of both. I have joked that Diesel is my apology for ActiveRecord... \[laughter\] Even though, of course, I'm not responsible for a lot of ActiveRecord's design; I do see the effects of its design quite a bit. So certainly one of the big things I wanted to avoid are things that are common sources of issues on the Rails codebase, and there's two kinds of issues that come in, right? It's either a person has an actual -- there's an actual bug, and there are features in Rails that are just more bug-prone than others, generally because they're more complex, or it's because a lot of people misunderstand the feature. So we close those issues, but I still notice them getting open.

\[01:00:06.16\] So I was very much not trying to write ActiveRecord for Rust. It was very much I wanted to build an ORM that was true to Rust, so I spent a good bit of time thinking about what that meant, and to me that means safety. So Rust touts that it's a memory-safe language, but it's also a very type-safe language.

So the defining vision behind Diesel was Diesel should disallow an incorrect SQL query at compile time. Now, what I thought that was gonna be originally and what it turned out to be are two completely different things. I originally envisioned as being like you just had some fragments of SQL as strings, and we provided an API to kind of stitch those together, and then we connected to your database at compile time and asked the database like "Hey, is this a valid query?"

What we ended up with does none of that. The smallest little inkling of that that came through is that we have an optional feature where you can -- we have a bunch of data structures that we generate that represent your database schema, and we can generate that for you at compile time if you give us a database URL. That's the only part of that design that actually survived...

**Jerod Santo:** Because it was bad design, or a bad idea, or there was a better way of doing it? Didn't need it?

**Sean Griffin:** Just didn't need it.

**Jerod Santo:** Yeah.

**Sean Griffin:** It turned out that the Rust type system is flexible enough; I can represent a SQL query in a way that is very close to the one with the underlying SQL in pure Rust, and give more meaningful error messages that way.

The main reason you want a query builder to begin with is that SQL strings are not very composable, and they're hard to reuse. You'll notice a lot of Diesel's API's that will look very similar to Rails. For example, if you wanna pass a select clause, it's gonna be .select; it's passing us some symbols -- basically, if you're just passing a list of columns, it will look exactly like it does in Rails, but there'll be an extra set of parentheses, because you're passing us a tuple, and then it'll remove all of the columns, because each column on your table is an actual type, so you're passing us just those structs.

The other big difference though is that when you wanna select a clause that's more complex than just a list of columns, you're going to just do whatever you want with the query builder, because you were never passing a list of columns, you were passing us an arbitrary SQL expression that is valid for the given from clause. So if you wanna call lower on one of those columns, you just lower in that same column but that's all still Rust code; we just support a much wider range of what is possible in the SQL.

We don't support everything that's possible in SQL, and I don't think we ever will support everything that is possible in SQL, but I'd like to get to 95% of at least ANSI. I definitely don't want Diesel to be chasing every backend-specific feature until the end of time - that is something that third-party libraries can do - and from the get-go I've tried to design this in a way that there is a solid foundation of API's for people to add additional plugins.

Crates.io does full-text search stuff, so sort of as my canary I maintain a full-text search crate for Diesel; that's support for just the various operators and types that are required for a Postgres full-text search. I guess the goal was to have it be as productive as ActiveRecord is, but catch errors at compile time, within reason; there are certain things that we just don't catch, one of the biggest ones being -- like, we don't know what your check constraints are, so certainly inserts are probably the least checked part of Diesel in updates, because we don't know enough about your database schema to actually fully verify "Are all of invariants represented in a Rust-type system?" and I don't really care to, because that's getting into the really, really high-cost, low-gain type of things.

**Jerod Santo:** \[01:04:13.28\] Yeah, it's heavy-lifting to get that done.

**Sean Griffin:** And then we sort of assume that all forward-given type in SQL, the equivalent type in Rust - all values can be mapped between the two, which is not always true. The two examples that really come to mind are, like, Postgres, even though it claims it accepts any UTF8 string, will not allow strings that contain null characters. And there actually is a type in Rust called C string that very specifically represents a string that does not contain null characters, but we just take a normal Rust string, because it was too painful to disallow that.

And then Chrono, the commonly-used date/time library - I don't remember what the mapping is, but basically either Postgres supports dates that are earlier, or Chrono accepts dates that are earlier, but then whichever one isn't that, allows dates that are later. So there's a subset of dates that are accepted between the two, but it's something like anywhere from 20,000 BC to 23,000 AD. So not something I'm worried about, but anyway... So we want to prevent runtime errors within reason.

Then the other half of your question was "How much of it came from Rust, versus how much of it came from ActiveRecord?" So there's a lot of things that are kind of lessons learned from ActiveRecord. Certainly, there's no semblance of Dirty, or validations, or callbacks... Things like timestamps are handled purely at the database. We provide database-level helpers that you can call on your migrations. A created add doesn't mean anything other than a default in the database, and an updated add is handled by a trigger, and because I can never remember the syntax for creating a trigger, there's a Diesel-managed updated add function which checks the name of your table as a string in your migrations to the SQL function... And that will create the trigger and set up the trigger for you.

As a result of that, that means all of our functions around inserts and updates use the returning keyword, so that way we actually reflect what was stored in the database.

A big thing that was just sort of a learning from not just maintaining Rails, but also my time as a consultant, is that it's unidiomatic in Diesel to use the same type for reading from the database as you use for writing. You guys mentioned you do Elixir and Phoenix, so this will probably be familiar to you guys... So we have a separate struct that you'll implement a trait called "changeset" for, mostly just by putting a derived changeset on it, or a derived adds changeset on it. And the design of Diesel is meant that your structs which implement queriable are meant to be one-to-one with the queries that you're executing, and that may or may not be one-to-one with your database tables.

And then your structs which implement insertable or adds changeset, and often times you'll have one struct which implements both - those are meant to be one-to-one with your API endpoints or web forms. Because in my experience, the needs of those two things tend to diverge over time and they change for different reasons.

So the design of Diesel -- it's possible to have those two on the same struct, but it's a little bit painful and it's unidiomatic, and the design of Diesel is meant to kind of gently nudge you to separate those early on, to make your life a little easier later on.

**Jerod Santo:** That actually sounds pretty nice, going from where I've been... Having those separations I think definitely would grow better with an application than the way ActiveRecord does it.

**Sean Griffin:** Yeah.

**Jerod Santo:** So what about the other way? Has anything from Diesel, any gleanings from Diesel that have found their way back into the Rails codebase, or perhaps will be?

**Sean Griffin:** \[01:08:03.18\] Oh yeah, all over... But there's only a few instances I can list as explicit cases; it's very hard for me to talk about all the places where just like because I made Diesel I'm better-equipped to maintain Rails. But there are definitely a few concrete cases.

I'm eventually looking to get rid of the ActiveRecord relation. And by "get rid of" I don't mean deprecate, I mean move to a gem, and continue to maintain that gem, because I don't wanna do Rails 2.0 to 3.0 all over again... But move it to a gem and start to explore alternate query builders, because ultimately, relation uses a full SQL query as its unit of composition, and I think that is the wrong level of abstraction for a query builder to operate at, and I think that's most apparent in how long a relation OR took us to add and why it was so tricky. There's a conference talk where I went into the details of it, we don't need to recount all of that here.
Anyway, so Diesel is very much kind of what I'm imagining an eventual future Rails query builder might look like. So there's that.

A slightly more concrete example is I'm working on a new Postgres driver for Diesel right now. The current Postgres driver is built on lib/pq, which is the C library for interacting with the Postgres wire protocol that is shipped with Postgres itself. It's also what the PG Ruby Gem is built on top of.

Very specifically - Postgres allows you to transmit values as either a binary representation or text representation, and we use text representation always, because the binary representation is generally undocumented and not considered to be stable, even though it is effectively stable at least for the most common types.

The only thing that is actually documented is that the binary representation of number types is network NDN, and everything - you go look at the C source code.

Diesel right now always uses the binary representation, and there are certain data types that I've just not added support for yet, because I don't wanna figure out their binary representation.

On the flipside of that, the binary representation of the timestamp type in Postgres is a signed 64-bit integer representing the number of microseconds since 1st January 2000, and an unsigned 32-bit integer representing the -- or I'm sorry, the number of seconds... And then an unsigned 32-bit integer representing the sub-second portion of that, which is I believe micro-seconds, but it's actually dependent on a compiler flag. But it basically can assume it's micro-seconds. So date/time is the most expensive core type supported by Rails in terms of typecasting. And the difference in performance between turning those two numbers into a Ruby time object, versus doing arbitrary string parsing is enormous.

The actual main driver for me doing this for Diesel is adding Async.io, which Rails would not be able to take advantage of. But then one of the other drivers is lib/pq - it allows you at the per-query level to say "I would like all of the results back as binary, versus text", but the wire protocol itself actually allows you to specify per column whether you would like the result back as binary or text.

So when I finish this driver for Diesel, I'm then going to pull that out and write a Ruby wrapper for it and ship that as an optional new Postgres adaptor for Rails, which may or may not become the default, depending on how well shipping a Rust dependency of Rails ends up going.

And then the final most concrete way of the Diesel's influence to Rails - about three weeks ago I made a change to Rails where I changed how we handle bind parameters and fixed a bazillion long-standing issues that were mostly gone in 5.0, but kind of still hung around, and now are completely impossible.

\[01:12:02.07\] It was a change to Arel and basically how we manage bind parameters with our AST, and since we're running short on time I won't get into technical details, but the way I implemented it was I took some code from Diesel and I pasted that into Arel, and I converted that to Ruby syntax, and then just followed the test failures until everything was green.

**Jerod Santo:** The old copy/paste...

**Sean Griffin:** And now that I've realized I can do that and it works...

**Jerod Santo:** Legit strategy...

**Sean Griffin:** That's just my strategy now.

**Jerod Santo:** \[laughs\] It's your first step on all bugs - just copy some stuff out of Diesel, paste it, and...

**Sean Griffin:** Yeah. First implement it in Diesel, and then copy/paste it into Rails.

**Jerod Santo:** That's hilarious.

**Sean Griffin:** Alright, so that's probably a little more wordy than you were looking for, but...

**Jerod Santo:** No, those are great concrete examples, and I just love seeing basically the fruits of labor in one place get applied across -- especially in a project like Rails, which so many people benefit from your work there, so that is good stuff.

We're running real short here - two really quick questions, and we'll call it a day. The first one is Diesel hits 1.0 - are you ever planning on picking up the full web framework in Rust and building that?

**Sean Griffin:** No, I had a baby; I don't have time for that anymore. Ruby takes up all my time now. My baby is named Ruby, by the way.

**Jerod Santo:** Your baby is named Ruby?

**Sean Griffin:** Yes.

**Jerod Santo:** It's a great name.

**Sean Griffin:** Actually, I'm not sure if this is gonna be a thing or not, if I could just plug this and maybe you'll cut it if it doesn't end up happening... Also, if you're interested, I have these really cute baby Ruby stickers which are for sale on DevSwag and there's a link in the show notes if you wanna support my development of Rails and Diesel.

**Jerod Santo:** There you go. Get out there and support Sean; buy a baby Ruby sticker... Or ten, if it's a thing. Alright, last question - hypothetically, you're stranded on a desert island and you only get one programming language that begins with RU... Which programming language do you pick and why?

**Sean Griffin:** \[laughs\] I'm trying to think of a third programming language beginning with Ru, to give a facetious answer.

**Jerod Santo:** Yeah, if I would have said "R", you could have just said R \[unintelligible 01:14:09.21\]

**Sean Griffin:** Probably Rust, because Rust can do everything Ruby can, but the inverse is not true.

**Jerod Santo:** Smackdown. There you have it.

**Sean Griffin:** And also, I love Ruby, but I do often find myself working through problems in Ruby by prototyping it in Rust.

**Jerod Santo:** Good answer. Sean, thanks so much for joining us. It was a lot of fun!

**Sean Griffin:** Yeah, thanks for having me.
