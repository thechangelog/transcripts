**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I'm your host, Adam Stacoviak. This is episode \#230 and today Jerod and I are talking to Hillary Hartley and Aidan Feldman of 18F, talking about the way the federal government builds, buys and uses software, digital services, things like that. A lot of fun conversation about where the 18F came from, the roles that both Hillary and Aidan play and how pivotal they are, interesting projects like Micro-purchase, 18F Guides, cloud.gov, analytics and more.

We have three sponsors today: Code School, Rollbar and GoCD from ThoughtWorks.

**Break:** \[00:00:55.00\]

**Adam Stacoviak:** We are back. We have a fun show today, Jerod. 18F... This is a show I think at least six months or more in the making, right?

**Jerod Santo:** Yeah, that's right. It's a show that we've wanted to do for a long time, and we had people ask us specifically in Ping - Chris McKay gave us the idea for this show. When he first asked us, I just didn't know who to talk to. If you go to 18F's website, you'll find that their team is hundreds of people large, and I didn't know the best person to talk to. Thankfully, I'd like to give a shout out to Atul Varma, who was in Ping on a different issue and we got to talk and realized Atul has connections at 18F (he may even work there, I don't recall). Atul introduced us to Hillary Hartley and Aidan Feldman, and we were able to line up a show. Hillary and Aidan, thanks so much for joining us on The Changelog.

**Aidan Feldman:** Thanks for having us.

**Hillary Hartley:** Excited to be here!

**Adam Stacoviak:** I guess one \[unintelligible 00:02:19.28\] Jerod is Sarah Allen, when we had her back on the show, episode \#157 actually... That was a while ago, but we talked to her a little bit about some of the things -- it was mostly about building bridges, which is Bridge Foundry and what not, but that's kind of where I was first enamored by the work being done at 18F.

**Jerod Santo:** Yeah, absolutely. Go check out that show, Sarah is awesome. Before we get too far into it, we just keep talking about 18F... Perhaps we should get a definition? Let's leave it to Hillary... Hillary, you are the deputy executive director - which is an awesome title - there at 18F; why don't you tell us what it is and what you all do?

**Hillary Hartley:** Sure. 18F actually came out of the Presidential Innovation Fellowship, which is how I got involved and how Sarah Allen got involved. We were both PIFs, which is an unfortunate acronym, but we've stuck with it. We were both innovation fellows in 2013, and at the end of 2013 a few things happened - there was a government shutdown, there was also a fairly large government website that failed, and 18F self-configured to the rescue of healthcare.gov, but that moment kind of catalyzed a lot of things at the federal government level and it gave a lot of us working on technology in that space kind of a common vocabulary and also a common playbook for how we were going to approach this stuff.

At the end of 2013, a bunch of Presidential Innovation fellows decided to stick around the General Services Administration for a little bit longer, and we created a small team at the time which was designed essentially to work with other agencies, helping them build software and digital services.

\[00:04:08.03\] In a nutshell, 18F is a consultancy made up of federal government employees; we are a government team inside the General Services Administration (GSA) that works with other federal agencies. Over the last two and a half, almost three years we've grown from about 15 people to about 200 people. We worked with something like 37 different federal agencies, helping them deliver services, but also in a consulting capacity, too. We do a lot of short-term consultant engagements now. I think at the heart of what we do is helping an agency or a program manager see their problem in a new light, and see a path forward in a new way. We either become the team that helps them build something, or we help them get a project back on track, either by helping them buy something, or create an RFP (request for proposal) or maybe even work with an existing vendor. That's kind of the scope of what we do... Again, at the heart of it really just being the people who are helping our agency partners see their technology challenges in a new way.

**Adam Stacoviak:** You said the word "agency" - is that how you act internally, as an agency?

**Hillary Hartley:** Yeah, we are inside the General Services Administration, which is a federal government agency, and we work in partnership with the other federal government agencies.

**Adam Stacoviak:** The reason why I ask that question is it's common in bigger companies to have essentially what gets branded or termed "the marketing team", right? But they're essentially an internal agency to the organization, and it may have many departments, many branches, and this seems like a much bigger, broader version of that, that a lot of larger corporations tend to have. Is that accurate to say, where you work for different departments and they kind of reach out to you for different things they're trying to do or new problems they're trying to solve, and you help them and come alongside them to solve those problems?

**Hillary Hartley:** Yeah, I think that's definitely a fair comparison. One of the reasons we frame it as a consultancy is because we actually operate that way - we operate as a business. We are inside government, but we're not getting appropriations from Congress, we're not getting money given to us; we actually charge the other agencies an hourly rate to work with us.

**Adam Stacoviak:** Right. Very similar in organizations that are like that, too; it's slightly different, except they're not exchanging money, but they do tend to bill hours or at least think about time and effort, and things like that; they just don't say it's an open check and "Have fun!"

**Hillary Hartley:** Yeah.

**Jerod Santo:** Well, in terms of getting to know you guys a little bit, Aidan, why don't you give us a little bit of your back story with regards to how you got involved in 18F? You are an innovation specialist, a.k.a. a developer at the organization - how did you get involved?

**Aidan Feldman:** Yeah, so I've been at 18F for just over two years. I have worked at tech companies, startups and things before that, and never ever considered working in government until a former co-worker pointed it out to me and said "This is a really cool team that leads really strongly in open source", which is something I feel really strongly about, and you can't really ask for a better mission, so I ended up talking with a couple people on the team, and... Yeah, just kind of fell in love, and I've been there ever since.

**Jerod Santo:** I read that you're also an instructor at Cornell - can you tell us about that a little bit?

**Aidan Feldman:** Yeah, so outside of my work with GSA I do some teaching; right now I'm doing a class at Cornell, teaching about how large-scale systems work when you're doing web development, understanding dev ops principles and all the different layers of the stack, that kind of thing. In general, outside of work, I deal a lot with people learning to code, and that's something I'm also really excited about.

**Jerod Santo:** \[00:08:19.18\] Very cool. Hillary, we have to ask you about this, because you have an awesome, single-word Twitter handle, @Hillary, which shows that you've been around, you got that one probably early... As many of us have to go with either a mock name, or a full name, or...

**Adam Stacoviak:** Underscore-something...

**Jerod Santo:** Yeah, or put our age at the end, or something like that. But you got @Hillary, which is an awesome Twitter handle, but I gotta imagine, being "the Hillary" during the 2016 election probably brought you a lot of noise. Can you tell us about what it's like to have that handle on Twitter this year?

**Hillary Hartley:** Yeah, the last year or two even, Twitter has not been especially usable for me, at least how I used to use it to keep in touch with friends and family, but also if I'm speaking at a conference, for people talking to me, asking questions etc. Most everything that is actually something I would want to read is completely buried, and "noise" is a very nice way to say it. If you go to search Twitter.com, search for @Hillary and see it for yourself.

**Jerod Santo:** Oh, man... I was happy for you at first, and then I realized all that probably goes along with that.

**Hillary Hartley:** Yeah, it's not been especially fun to use for the last 18 months or so.

**Adam Stacoviak:** What about your position there at 18F? You're the deputy executive - is that right? Or director? Which one was it?

**Hillary Hartley:** Yeah, technically, my title is deputy executive director.

**Adam Stacoviak:** Okay, gotcha. So it's all three of those.

**Aidan Feldman:** All of them.

**Adam Stacoviak:** All of them. \[laughter\]

**Jerod Santo:** You must do everything.

**Adam Stacoviak:** Do they give you a badge? Do you get the badge with it, or is it...? I'm just -- my jokes are bad today.

**Hillary Hartley:** Yeah, I don't have a badge, but I do carry a lot of stickers with me everywhere I go.

**Adam Stacoviak:** Nice. So what are some of the things you do?

**Hillary Hartley:** Essentially, I helped get 18F started when it was, as I mentioned, about ten fellows, that sort of rolled over from our roles as innovation fellows, and then created a small team. There were three of us that really kind of became - as a couple of our co-workers called us in the early days - the "parents" of the group. I've just sort of evolved into the role of not having the burden of actually running the show, but getting to help run and be an advisor in a lot of things. In the early days I was really focused on building out our design capacity and also our communications capacity, so I kind of helped to recruit the first designers of the team, helped build a small team and then find a director for that team, which is growing now into an amazing force of almost 40 designers. We have grown a small communications team that is about five people now, focused on getting the good word of 18F out into a lot of different channels and to our customers.

**Jerod Santo:** You mentioned stickers and I just had to recall a moment I had... A week or so back I was in Portland, staying outside of Pine State Biscuits - which is spectacular, by the way - with a few friends, and there was a lamp post there that had all of the stickers on it from bands and political movements and stuff... And there was an 18F sticker, it was definitely your guys', right? They were on a side of that lamp post, and I said "Hey, I'm interviewing those people next week."

**Aidan Feldman:** \[00:11:59.18\] 18F does not endorse defacing city property. \[laughter\] But yeah, \[unintelligible 00:12:06.00\] they get to some interesting places.

**Jerod Santo:** It was awesome.

**Hillary Hartley:** We have I think five people in the Portland area right now.

**Adam Stacoviak:** That's how they got there then. Somebody put it there.

**Jerod Santo:** I think probably those people are going to Pine Estate Biscuits because that place, like I said, is spectacular. If you're in the area, check them out; this is not a paid endorsement.

**Hillary Hartley:** I don't know if this is something that's interesting to you or not, but the fact that we talked about Portland, and Aidan is in New York, and I'm in the Bay Area, and about 40% of our team is in DC... We've been able to build this really distributed team, and people are working from coast to coast using video conferencing and collaboration tools. It's pretty amazing; it's the first really remote-first team that I've ever worked on, and it's been a pretty cool experience.

**Jerod Santo:** That is cool, especially for a government agency to be spread out like that. I noticed that 18F, for those curious about the name, comes from 18th and F streets, which are in Washington DC and probably the crossroads of your main headquarters. Tell us about working remotely and building a remote team, and maybe even some of the tools that you guys use.

**Hillary Hartley:** Aidan, do you want to talk a little bit?

**Aidan Feldman:** Sure. Yeah, so you mentioned we have people all over the country, and not just limited to cities either; we have people in Wyoming, we have people in Southern Illinois, we have people all over the place. I've been working remotely for a few years, including before 18F. I think it takes a lot of commitment to have a remote-first team, but actually GSA, the agency we work for -- I think 18F does remote really well, but really the agency has been doing remote longer than 18F has existed; GSA has a really forward thinking telework policy. I think there is more distributed work in government than maybe someone would guess, just because of the sheer size of it and the fact that it has to cover the entire country.

Within 18F, we chat all day, we use Slack very heavily... I think we have hundreds of members and probably like 700 channels, something like that. We use a lot of video conferencing, so tools like Hangouts and Zoom, Google Box and GitHub for noting collaboration, things like that.

**Jerod Santo:** Those sound very typical in terms of a technology-based company these days. I guess when you think of a government organization you think of having to use internal tools or things that are behind the times, and it sounds like you all haven't been put into that circumstance, which is nice.

**Aidan Feldman:** Yeah, I think credit to Hillary and others that have been around since the beginning... When I came in, you sort of wouldn't notice that 18F weren't an actual startup in the private sector. Where you really start to feel it is in the projects and the bureaucracy that you have to go through for HR or other limitations on what you can or can't talk about, those kinds of things. At 18F I think we strive to make it feel like a startup where you wouldn't even notice that it's different in terms of tooling, culture, that kind of thing.

**Adam Stacoviak:** Hillary, in one of your e-mails back to us you'd mentioned some details around why you're an open source team, and maybe even why open source is such a big deal to the government and maybe even 18F directly, and then all of those that hire you internally in the government to do some cool stuff.

\[00:16:04.06\] In your own words, what are some of the reasons why it's important to you? What is open source towards the government? What influence does it have for the government?

**Hillary Hartley:** Well, at the end of the day everything that public servants build, everything that we create is actually open source, whether we call it that or not. It belongs to the people. Any work product that we create is the people's, it belongs to our country.

**Aidan Feldman:** Public domain.

**Hillary Hartley:** Yeah, it's public domain. So fundamentally, it's just the right thing to do.

**Adam Stacoviak:** So was GitHub a beacon of light so to speak for your efforts in government? I know in 2013 you mentioned a failed site (that we won't name) that was sort of the impetus and reason for...

**Jerod Santo:** Oh, she named it.

**Adam Stacoviak:** Oh, okay. I don't wanna throw any shade, that's all... \[laughter\] So was GitHub a beacon of light to be able to have a more de facto place to share this stuff and invite the community, the general public to peek into or peek behind the veil of what is -- like you said, it's open source, but to me... I think, "Okay, it's open source, but how accessible is it?"

**Hillary Hartley:** Right, that's a really fair question and something that I think we're getting better at thanks to a lot of effort by Aidan and others on our team. If you look at GitHub actually, there have been government teams using it for a number of years now. Code.gov just launched and it's pulling in repositories, and it's going to be the official place to go find government code. But actually, if you go look at govcode.org, that's actually one of our colleagues that pulled that together before he even worked for 18F, and you can see that there are a lot of different teams and a lot of different groups and a lot of different agencies using GitHub. It's definitely been a tool that has acted a little bit as a forcing function for us and for others, because it is so easy to use to a certain extent.

I said that at the end of the day it's the right thing to do, but it's also hopefully the amount of reuse and the amount of savings that we will see (across the government) not just at the federal level, but also at the state and county and territory level; hopefully into the future we'll see a lot of cost savings that come from people being able to easily find and adapt tools and things that 18F and other teams built.

**Adam Stacoviak:** I also feel like security has an impact there, because with so many people having the ability to look into whatever -- you know, if it's a new feature that's being developed, an API or something like that... Having people be able to see into that and actually peek into it, and... Everyone wants this country to be a good country obviously, and also because it's open source, by the nature of open source, other countries are going to adopt things we're doing. We've had Code For America on here, we've had fellows on here before, so we've talked about Gov 2.0, we've talked about open data, we've talked about those things. So it's important to have visibility into those things, and to me it seems like it might impact security, too.

**Aidan Feldman:** Absolutely. We believe really strongly in open source and we are open source by default. The security angle... Again, we are not the first people in government who are doing a lot of this. The Department of Defense, of all places, actually put out a memo in 2009, saying that security by obscurity - in other words hiding the source code - is not a legitimate security protection. In fact, like you mentioned, having the ability for other people to audit that code - this goes alongside with us using open source frameworks that are already getting a lot of security eyes on them - is a huge benefit for us, security-wise and otherwise.

**Adam Stacoviak:** \[00:20:11.24\] Coming back to GitHub, too... I'm not sure if I got a direct answer, if that was a beacon of light of not, but it seems like it might have been, because it seemed like maybe the creation of 18F may have been an easier sell so to speak. Because as you've mentioned earlier, if this is the general public's public domain code, being able to actually put that into a community where it is normal to share, normal to collaborate, normal to fork, normal to send a pull request and be in the same mix - it seems like it made the process of doing what you're doing around 18F so much easier.

**Aidan Feldman:** Yeah, we are certainly very heavy users of GitHub. I'm sending pull requests all day, and we certainly receive a lot of contributions from outside. I see GitHub as a tool; there's a strong community, there's a lot of people that know how to use it and therefore it makes it an easier path to contribute... But really the long game for me is "How do you encourage those contributions? How do you encourage that reuse if GitHub is the right tool?" which I think it is right now. We're not using GitHub because it's GitHub, we're using GitHub because it helps us succeed in our mission.

**Adam Stacoviak:** Of course.

**Jerod Santo:** Let's talk about some of your guys' code on GitHub. You have over 620 repositories that you're the source of, probably plenty more with forks; one thing Adam asked earlier was about the accessibility, and some of that to me leads to the idea around the community and what kind of open source projects they are, and I think you mentioned it's all public domain, so I assume that they're all licensed in the public domain - you can correct that if it's wrong. But in terms of like what kind of projects these are, with regard to community - are these like "It's open source, so you can look at what we're doing", or is it open source because it's a call to action, "We want everybody to work on this" - what kind of open source is it?

**Aidan Feldman:** Yeah, so there's a lot in that question. The first part, around licensing... I learned something interesting recently; I believe the U.S. Government is the only entity essentially in the United States that can waive copyright, or that does not have copyright automatically assigned. Before my time it was sort of chosen that we at 18F would use the Creative Commons Public Domain license, CC0, and that has special provisions to waive copyright in other countries where possible, but individuals can't actually waive copyright; it's not actually a thing that you can do. Creative Commons essentially says, "I am trying to waive all copyrights that I can", but the U.S. Government is actually uniquely positioned to say, "We don't have copyright, it is public domain." So that's one thing.

In terms of contributions, I think there are lots of different ways to do open source; there's the sort of "throw it over the wall" in the sense of "Our code is available here. You can look at it and you can download it", but we really strive for the far end of doing all of our work in the open, at least in terms of code changes and those sorts of things. So you'll see all of our repositories have pull requests and comments and feedback and things like that from people on the team. There's some cool benefits; if there's a question that people on my team don't know the answer to, I can phone a friend and send him a link to a pull request, and they can actually comment in the same workflow that we use. So there are some really nice benefits there in terms of getting input on government projects, as well as anyone being able to open an issue or create a pull request, that kind of thing.

\[00:24:15.17\] Given that we do have so many public repositories I think it's kind of overwhelming for people, so I think one thing we don't necessarily do a great job of is helping people understand, "Okay, I'm interested in contributing. Where do I start?"

**Jerod Santo:** Right.

**Adam Stacoviak:** Which is the question we'll definitely ask you towards the end of the show, because we like to give people that listen to this show waypoints, so to speak; where can people step in to help with 18F initiatives, whether it's in repositories, whether it's in bidding on a features if they're able to...

**Aidan Feldman:** Absolutely.

**Jerod Santo:** I wanna speak to one point you made there, which I've just recently really enjoyed as well, when you mentioned that you can link people directly into things, and you can have their comments in line... We've recently open sourced the code behind changelog.com, and I have lots of personal projects open source, and other things, but never a project that I've continually been working on, and like have issues and perhaps trying to explain things to people... One thing that's really cool about having it open source now is, especially when I'm looking for help on a certain thing, or I have a question about some code, instead of having to grab that code and throw it in a Gist or a Pastebin, I can actually just deep link directly into the areas of the code to show people what I'm talking about, and that's really nice.

**Adam Stacoviak:** It's almost like having a common API or a common language to speak around, basically.

**Aidan Feldman:** Absolutely.

**Jerod Santo:** And just show... Instead of having to tell people, you just show them. It's like, "It's right there, have a look." Really cool.

**Aidan Feldman:** Yeah, absolutely.

**Jerod Santo:** Cool. Well, I think we're hitting up against our first break. You guys have a lot of projects... We're gonna highlight some of your major ones and most successful ones, so on the other side of this break we will talk about success stories and we will dig into some of the details around the technologies and the ideas behind some of 18F's most popular open source projects. We will be right back.

**Break:** \[00:26:09.18\]

**Jerod Santo:** Alright, we are back with Hillary Hartley and Aidan Feldman, talking about all things 18F and open source code with the U.S. Government. We teed up before the break talking about some of your success stories, some of the projects that are on GitHub and out there to be seen and to be interacted with... Let's just talk about a few of them, starting with Micro-purchase. Who wants to give us the rundown on that project?

**Hillary Hartley:** I can give you two cents on it, which is that part of how we have expanded our work over the last couple of years was by realizing that we're only a finite number of people inside a pretty big bureaucracy, and there are a lot of people out there that can work like we do and can do amazing work, so we've done a number of experiments in the acquisition and procurement space around helping government be a better and savvier buyer of technology. Micro-purchase is a pretty cool example of that, where essentially what we're doing is we have the hypothesis that we could buy small chunks of code with our government credit cards and have a limit of $3,500 dollars. The question was \[unintelligible 00:29:29.09\] a credit card, for $3,500 or less. What that means is we have to scope tasks really well; we have to get both our people and the partner that we're actually writing a task for to kind of think concretely and discreetly about these things, which is great for us.

Then it means we put this task out there in this marketplace and people reverse-bid on that task. It starts with $3,500 and it works its way down. The very first task order that we put out actually, the winning bid was a dollar. We did not expect it, but it was sort of a great monkey wrench in the early hypothesis; it made us think about the approach, and it also made us realize that a lot of people are hungry for opportunities to do open source work for the government. The guy who won actually made a point to say, "I would have done this for free, but I had to bid a dollar. I wanna help."

So we had a couple of one-dollar bids since then, but mostly I think the average bid is - I can actually go to the website and tell you - just under a thousand dollars.

**Jerod Santo:** $930.

**Adam Stacoviak:** I was gonna say that, Jerod. You beat me.

**Hillary Hartley:** There you go. You've been looking at the Insights...

**Adam Stacoviak:** Yeah, the Insights tab is really awesome, I love that.

**Hillary Hartley:** It is. My favorite stat on there is actually the number of vendors that we've added to this ecosystem. There are a lot of people that do work for the government; when you wanna do work for the government, you actually have to get qualified via this website called sam.gov - I think the acronym is System of Acquisition Management.

**Adam Stacoviak:** System for Award Management.

**Hillary Hartley:** Award Management, yes. It's essentially where you go to get listed, and verified at your business and that you're able to do work for the government. So we've registered 92 new small businesses, which is awesome. These are businesses that now might do other work for the government, but hadn't before. We're really kind of widening \[unintelligible 00:31:43.06\] people and vendors and businesses that want to and can work for the government, and that's really exciting.

**Jerod Santo:** This is so cool.

**Aidan Feldman:** I should also add that the one-dollar bid was maybe the first time in history that the government has been criticized for not paying enough for software. \[laughter\] I really like this project as an example of taking this unique government constraint of this magic number of $3,500 where things get a lot more complicated over number, and "Okay, how do we make that work for this sort of quick iterations and working in open source that we want to?"

**Jerod Santo:** \[00:32:25.12\] Yeah, I can see this working quite well inside of the enterprise as well, as they often have similar constraints around what you can purchase without a PO or without going up a level to a manager, and I love that this started with "We have $3,500 that we can put on a credit card, so let's break up these projects so small that we can just do that however many times necessary to get it done." That's a great hack.

**Hillary Hartley:** It's also been forked by the government of Singapore. They actually took our code and they're running it, and they're running their own Micro-purchase purchase platform now.

**Aidan Feldman:** New York City is trying, as well.

**Adam Stacoviak:** There's also an API extended off this to the... The current version is 0.0.1, so it's certainly early, in its infancy in terms of an API, but how does the API play into Micro-purchase? What can people do with it?

**Aidan Feldman:** We use a different system internally to do sort of like a purchase tracking, so I think a lot of the API usage is internal, where we actually need it to integrate with our other systems, but a lot of our projects - and I'll think we'll talk about this with the other ones that come up, too - I think we do have a very strong commitment of opening up the data, and the best way to do that, especially where the data changes, is by having an API. It's important that people can be able to audit us, whether they're actual auditors, or journalists, or people like that. I think there's a lot of people in the civic tech community who are interested in different kind of government data, so having an API is an enabler for them, on top of just the use that it has for us internally.

**Jerod Santo:** Just to flaunt a little bit of your technical abilities, Micro-purchase is a Rails apps, and it proudly has a couple of badges: Code Climate 4.0 rating, and 96% test coverage. So it sounds like being public has definitely made the team write good code.

**Aidan Feldman:** Yeah, and we try to use a lot of industry standard kinds of tools, like Travis CI and Code Climate and things like that, to be able to see your test run when either we or an outside contributor contributes code; it works the same for everyone, we don't need the government's specific tools for most of these things... It's just code, so we should be able to use what everyone else does.

**Jerod Santo:** That's awesome. Micro-purchase - we'll link that one up in the show notes for those interested. Definitely the kind of project that you could fork and set up for your company or for other uses. It's very cool that Singapore has hopped on board, and New York as well. Anything else on Micro-purchase? It seems like a good idea well executed - anything else to say on that before we move on?

**Aidan Feldman:** I'd say just that it's part of our additional effort that isn't just around building software. The internal slogan is "Making procurements joyful", so trying to make it so that working with high-quality outside vendors... We don't wanna be the one dev shop that does work for the government. I think if 18F succeeds, 18F won't be necessary in the future, if we can enable good vendors to get work in the government, and for the government to be able to vet that work well and scope that work well... Then we'll have won.

**Hillary Hartley:** Amen.

**Jerod Santo:** Yeah, it leads us a little bit in the cloud.gov... What do you think, Adam?

**Adam Stacoviak:** Well, cloud.gov is the platform as a service for the government. That's pretty cool.

**Jerod Santo:** \[00:36:05.07\] Yeah, tell us about that.

**Hillary Hartley:** Cloud.gov, as you said, is essentially a platform as a service for government, and the reason that the "for government" part is important is that as a developer on a team inside the federal government, you are actually supposed to be familiar with a number of regulations and memoranda and all kinds of things that tell you how to be in compliance with your code. We added it up and I think it's currently about 4,400 pages of compliance code, essentially, that people need to be aware of just to ship code, just to go from 0.1 to a 0.2.

What we really are trying to do with cloud.gov is scratch our own itch, but in so doing, we are essentially enabling any government team to be able to more easily deploy their code and their services. Aidan, do you wanna say a little bit more?

**Aidan Feldman:** Yeah, we started off with 18F during a lot of our deployments on Amazon Web Services - again, something very common for people to use - but found that because we have this sort of consulting setup where we're working on a lot of different projects and deploying new things all the time, we didn't have enough infrastructure experience to be able to manage servers for every single one of these dozens of projects and spinning up new environments all the time and that kind of thing. So cloud.gov came out of us looking at the landscape and saying, "How can we centralize this experience a bit and not have to have a huge amount of overhead, and setting up servers and renewing certificates and installing security patches, those kinds of things? How can we centralize that so that teams can just focus on their actual task at hand?"

It started off as a project that we were using internally and it became clear very quickly that there's no reason this wouldn't be useful to other government agencies who have this compliance burden. Not only can we centralize a lot of the technology things that are needed - things like access control, things like the security updates etc. By cloud.gov taking on those burdens, we can kind of solve all at once both from a technical and compliance perspective, and then for teams to get through that compliance hoop is much simpler, because they're just focusing on the things that are specific to them.

**Jerod Santo:** Is this like a sustainability play? Is this platform going to be something that can sustain 18F moving forward in terms of income from other agencies?

**Aidan Feldman:** Yeah, we have a couple business units. We'll do projects that are specific to agencies that we intend to hand off to them or a vendor to maintain on their behalf, a bulk of the projects. Then we also have these products and platforms... Cloud.gov is something that we plan to run indefinitely, and that enables our other projects, but it's its own business line really; it has customers and it has teams that are working on projects that 18F wasn't involved with, but they just needed somewhere to deploy that was going to be technically and compliance-wise easy to use and make their life easier. Cloud.gov has been a big boon for that.

**Jerod Santo:** \[00:39:54.00\] And it makes total sense from your team, who's solving your own problem and then turning that over. Are there are alternatives aside from an AWS? Are there any competitors in this space trying to provide platforms for specific government needs in terms of security and the regulations, or is this basically greenfield (there's nobody else doing it)?

**Aidan Feldman:** There are certainly other platforms as a service in the world... I think Cloud Foundry, which is the tool that we're using under the hood in cloud.gov, that was developed originally by Pivotal and is also being used by HP, and Chase and a lot of other big companies, both as a commercial offering and not. Some infrastructure as a service offerings, things like AWS and Azure exist, and those are certainly heavily used in government. At the time - and, I believe, still to this day - there's no platform as a service that is going through FedRAMP certification. There is no platform as a service that is commercially available -- or, I should say, available to government, from the commercial world.

I hope that changes, actually, because one of the benefits of using this open source platform is that there is a lot of platform independence. If your app works on cloud.gov, it will work on Pivotal Web Services or these other companies that are offering Cloud Foundry. So if there's other offerings - and that can save the government money - that would be great.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What is FedRAMP? Is it essentially a certification...? Is it around technology services for the government? Is it like a stamp saying "This is okay to use", or what is this?

**Aidan Feldman:** Yeah, essentially... There's a lot of nuance, but it is essentially a stamp saying, "This cloud provider..." - whether it's infrastructure or things like SalesForce - "...have gone through all these compliance checks", which involves a lot of security and that kind of thing... So other agencies can kind of say, "Okay, we trust FedRAMP, and therefore we are able to leverage this with much lower barrier to entry than if we were doing the whole evaluation ourselves." Because the U.S. Government is very decentralized, and so each agency is kind of doing this on their own, but FedRAMP is meant to be a centralized "Okay, trust us", and then you can do whatever additional checks that you need to, but the barrier is much lower.

**Adam Stacoviak:** Is the long-term play to have the government at large use cloud.gov to host things? Is that the long-term plan for this? Because it seems like it was born out of your interest to do what you needed to do to get your mission done, but it has a larger ability to help the government long-term.

**Aidan Feldman:** Yeah, we already have external customers, like the Environmental Protection Agency launching something that their teams are building...

**Adam Stacoviak:** All this is under 18F then? Is this built by 18F?

**Aidan Feldman:** Yeah, but it's not meant to be the exclusive offering. We're never gonna be in a position where we mandate that people use cloud.gov.

**Adam Stacoviak:** Right, but if you have a barrier to get certified though, or to get FedRAMP-ed, as you mentioned... If that's a thing, if "FedRAMP-ed" is a thing. If you have to have that stamp, if that pool of availability is limited, then you might be the easiest choice, so by definition federated or mandated.

**Aidan Feldman:** Yeah. I mean, actually I'm also working on making the FedRAMP barrier lower; like the acquisitions, we don't wanna be the only game in town. We are doing a lot of this work because it is actually, in a lot of ways, easier to do it from within government than outside. But yeah, we don't want to exclude vendors; we believe competition is good, so if we can offer this but also simultaneously try and lower those barriers, that's a win for everyone.

**Jerod Santo:** \[00:44:02.07\] It seems like your actions have definitely backed up that sentiment in terms of Micro-purchase and in terms of this idea behind making procurement a joy. One way to do that is to have more competition amongst those that you can procure from. I just wanted to say that that seems like more than just lip service to me; it seems like you're actually speaking out of the organization's desire for real.

**Aidan Feldman:** Absolutely.

**Hillary Hartley:** Someone kind of alluded to it a minute ago, but there's a good saying that we definitely were not the first to use, but that applies here and it applies to a lot of our projects, which is essentially to make the right thing the easiest thing, and cloud.gov definitely falls into that category. So while were never mandated use, we do believe that it's making it easy to be in compliance \[unintelligible 00:44:54.07\] That goes for the Web Standards project that we've worked, the standards.usa.gov, encouraging folks to think about that common look and feel across the government. That conversation doesn't always go the way that you want to, but if you can make the right thing to do the easiest thing to do, then you see adoption go up. I think cloud.gov is a great example of that.

**Jerod Santo:** Yeah, especially with regards to your open source code. If you have other agencies that can be reusing something that you've built... Now you've already built it the way that you believe is the right way of doing it, and it's so easy for them to do it the right way because they don't actually have to reimplement that. You have a win in terms of labor (reduced labor) and you also have a win in terms of germinating the right way of doing things into these other agencies.

**Aidan Feldman:** Absolutely. That can go for using all of cloud.gov, and there's even pieces of cloud.gov... As we've built things around Cloud Foundry, the Australian Government is using components of cloud.gov, and setting up their own instance of Cloud Foundry.

It goes even deeper, even if it's not the same actual system that they're running; the more modular you make things, the better your document, the better you think about making it provider-agnostic, that kind of thing, the more potential for reuse.

**Jerod Santo:** Hillary, probably now you're very much preaching to the choir; we totally understand these things, we are with you a hundred percent of the way. All the fans of 18F in the software community and in open source - we already understand all the virtues of open source, and we have a common ground in terms of value and the arguments for. I imagine throughout 18F's history there's been pushback, there's been naysayers, there's been fights that you guys had to fight. Can you give us some insight into how well these ideas and this user-centric digital services, which is something that you believe in and open source has been to establish as a thing the government should do?

**Hillary Hartley:** It's interesting... There have probably been some conversations and some pushback, but for the most part we've been really lucky for two reasons. One, we have great support from our agency. Inside GSA, they believe in what we're doing and they want to give us the \[unintelligible 00:47:33.24\] and the room to experiment and to try to figure out what the right things to do are.

\[00:47:43.22\] The second thing is that we grew very slowly from the beginning, and we're lucky to find early customers, early partners inside our agency and in other agencies, like the CIO of the U.S. Citizenship and Immigration Service, Mark Schwartz. We were able to find great early partners like him who already had agile teams; they were already drinking the Kool-Aid about open source and user-centered design, so it enabled us to really build up some wins and build up some talking points and create some stories early on that we could then take out to folks who were new to some of this.

Those two things really set us on a path... We say all the time inside our team, "Show, don't tell." Show the thing. And that's what I think enables us to bring folks along who may be new to unknown territory. But we also insulate ourselves from it a little bit as well, because we write the way that we work and the how of 18F - we write a lot of that into our contracts, if you will... We don't exactly do contracts, so to speak; they're called inter-agency agreements. We write a lot of that stuff into our inter-agency agreements, so that when people do sign on the dotted line to work with us, they know that we're an open source team, which means we're going to default to being open source unless there's a very compelling security/privacy reason not to. But it also means that they know that we're an agile team, that we're gonna talk about it vociferously, we're gonna blog, we're gonna tweet, we're gonna engage them in talking about this. I think that was another key thing that we decided to do early on, really just to enable buy-in.

**Aidan Feldman:** I'd add doing a lot of user research, too.

**Hillary Hartley:** Yeah, absolutely. I think the biggest pushback - and rightly so - comes from the industry... Wanting to work with us, but having \[unintelligible 00:50:12.13\] that's not gonna be open source. It is their bread and butter, it's how they make money, but they still wanna be able to partner with us, they wanna be able to compete, they wanna be able to do work, so I think the next frontier for us - at least in our consulting work - is to start doing some work around what can our team do to help shape... Again, if we're trying to essentially make our customers better, savvier buyers of technology, sometimes that does mean understanding the landscape of what's out there. We don't wanna build everything from scratch, so I think we will start to get involved with understanding market research, and maybe creating rubrics around how we do approach some things that are not open source. But it will always be in our DNA, it's always what we're going to default to, because we do fundamentally believe that even just on a cost and reuse side of things it's what we wanna model for the rest of the government.

**Adam Stacoviak:** That process there to -- you call them inter-agency contracts?

**Hillary Hartley:** It's an IAA - an inter-agency agreement.

**Adam Stacoviak:** Inter-agency agreement... So when you do that and you have to do user research and things like that, and you mentioned before you charge a rate - is that research part of it to even get the contract? Is that written into it? How do you account for making sure that you remain financially stable?

**Hillary Hartley:** Yeah, it's a delicate balance. We do a little bit of upfront work to basically decide if we can take on a project. So there'll be a little bit of research, there'll be a little bit of discovery, just so that we can decide if we have the right people with the right skills to approach this.

\[00:52:03.23\] But generally, for any heavy user research or heavy discovery period we engage the agency for short periods of time to do that (four to six weeks), essentially to say "Come on board, we'll put together a team to help crack this thing and help figure out this problem and chart the path forward." So we do charge for those engagements.

**Adam Stacoviak:** I imagine just like any other agency you have the same problems, just different areas... It's about perspective, really. We're getting close to our next break, I wanna tee up what we're gonna talk about on the other side though... It's the 18F Guides, which I think is super awesome. It's the repository for best practices. You mentioned Agile earlier, how those that work with you realize you're an agile team and a lot of what you do as 18F, as an agency is outline these guides. It may not be exactly customer-facing, but it's at least transparency. So I think this is pretty interesting; you've got APIs in there, you've got your testing cookbook in there, you've got your Agile practices in there... It may not be super deep for each subject, but this is a lot of information for everybody to -- I think it's really interesting just to have the transparency level of that. Each of them tie back to a repository, so it's open and people can see it, people can contribute, even if it's simply just a typo. So it's not just code that 18F is producing.

I'm teeing that up real quick before the break, and we'll dive deeper on the other side. We'll be right back.

**Break:** \[00:53:30.26\]

**Adam Stacoviak:** Alright, we're back from the break, and I mentioned the 18F Guides beforehand, the repository for best practices across the teams. I think this is super awesome to have this. Jerod and I have this sort of behind the scenes to some degree. We have this thing called One Voice - it's not exactly our playbook, but to some degree it sets the foundation for some things we do. Although Jerod's speaking out a lot, I think we probably could do better and should do better around following the 18F's ways of doing this, I think these guys are really awesome.

We've mentioned cloud.gov, we've mentioned Micro-purchase, and now 18F Guides - these are all unique ways that the government is doing some cool stuff around open source, and this isn't code, this is essentially prose.

**Hillary Hartley:** Yeah, the 18F Guides are essentially documentation of our best practices. Being a remote-first team, being a distributed team, being an open source team meant that we had to take documentation seriously, and we also had to really think about codifying some of the ways that we work.

The other factor that actually goes in here is that we were all on kind of term appointments; none of us are career civil servants that are going to be around for decades, but we're all here for 2-4 years. There will always be a little bit of turn in our workforce, so it's super important to document how we work and how we've done things in the past so that people don't have to reinvent the wheel over and over and over again every time someone new joins or someone leaves. Their knowledge is not lost.

\[00:56:14.25\] The guides were sort of similar to the origin of cloud.gov. The guides are selfish in one way, in that our accessibility guide, our analytics guide, our Agile guide, our content guide - those are things for us, they're for our team, and this is how we think about these topics. But then, at the end of the day we want them to be open, we want them to be a resource that our peers and our partners can also use and learn from. This is our way of documenting the heck out of everything that we do and turning it outward for the benefit of the rest of the government and for anyone else who wants to learn a little bit about it.

**Adam Stacoviak:** I think that the first time I saw someone do some guides really well was thoughtbot. Jerod, I don't know if you had seen their playbook, they had it open source. I love Chad Pytel and the team he's built at thoughtbot. I think they've always been inspiration both as an agency, as well a product team, as well as open source. They've definitely lead the way. For listeners who care, there's an episode of Founder's Talk with that where I talked to Chad Pytel about a couple years ago - it was actually just when they were expanding their offices to different countries and it was pretty interesting. Their playbook is an inspiration to me. To see you all as a government organization take the same approach, to have transparency and to codify your term, what you learned that way... Aidan, maybe in a couple of years you won't be in the position you're in anymore with 18F, but yet your knowledge base that you've kind of collected will live on.

**Aidan Feldman:** Yeah, and I think for a lot of our guides - things like \[unintelligible 00:57:56.01\] guide, for example... A lot of that content is going to be very general purpose; it describes our best practices, but I think that would work in any organization that is trying to adopt those kinds of things.

We also have a lot of things that are very government-specific; there are very extensive and strange and not intuitive regulations and compliance things we have to deal with, where codifying what we've learned and how we've figured out how to do certain processes - for example, how we manage our GitHub team, what CI systems we can use based on what permissions they ask for in GitHub, how we do Slack integrations and consider them... All these kinds of things are very specific to government and not something that you probably have to think about outside. But us having codified that for our internal admins and things to use, someone else from another agency can see that and say, "Oh, they've already figured out how to do this in a safe and legal way, or a regulation-friendly way, so we can just reuse that and not have to reinvent the wheel."

**Adam Stacoviak:** How does that make onboarding easier? I'm imagining that adding to or taking away from the team has gotta be strenuous whenever... You know, there's just so much to learn about -- this is a new frontier; this isn't like you've been a 20 or 30 or 40-year-old agency inside the government. You're fairly new, so a lot of the things you're doing are sort of new frontier. I gotta imagine doing this makes that process easier to add to and take away from the team.

**Aidan Feldman:** Sure, yeah. Our documentation is available. People, before they join, can learn about what the onboarding process is like. They can read the guides and read what's gonna be expected of them, that kind of thing.

\[00:59:49.28\] We even have a tool that we've built called "the Dolores Landingham", which is a nod to the West Wing character, that helps with onboarding by essentially doing like a drip campaign over Slack... On the first day, like "Hey, have you remembered to sign up for your healthcare?" or whatever; on the second day, "Hey, have you gone and read this guide?" Onboarding in government is not a small feat, so we can have guides and tooling, all of which are open source and reusable that can allow that.

**Jerod Santo:** That's a very cool idea, an internal drip campaign via Slack to onboard people. I like that.

**Aidan Feldman:** Yeah, that's been reused by other organizations too, so grab the code.

**Jerod Santo:** I'm over here perusing your blogging section. You have a section called Writing a Great Post, and I'm just taking down notes on how I can be a better blogger. When you say general purpose -- this is very general purpose.

**Aidan Feldman:** Definitely.

**Adam Stacoviak:** Is it essentially "If you've learned something, do your best to share it here as a guide?"

**Jerod Santo:** No, it's even better than that. They have specific tips.

**Adam Stacoviak:** No, I mean how they add to 18F.

**Jerod Santo:** Oh...

**Aidan Feldman:** Yeah, if it's not written down, it sort of lives with that person, and that person might leave government, so I feel pretty strongly about -- if you're really thinking about getting the best bang for the buck in terms of value to the taxpayers, for the dollars spent essentially, if you don't distill something you've learned into documentation, you're kind of wasting some value there.

**Adam Stacoviak:** Right. That's what I was meaning, Jerod... Not so much the blogging side of... It was how do they share with the team how to give back through guides.

**Jerod Santo:** Yeah, that makes total sense... I just thought you were talking to me. And I don't know how they do that.

**Adam Stacoviak:** Well, I'd like to learn. Aidan, won't you tell us? \[laughter\] Somebody tell us! \[laughter\]

**Aidan Feldman:** Yeah, I mean, all of our documentation, just like our code, is in GitHub repositories, and we welcome contributions there as well. We try and specify when things are government specific versus something we think is general. Yeah, I mean... Open issues. None of our projects are Rails or something to that scale where we are worried about noise from issues, so just don't hesitate to open issues and ask questions. We're happy to talk, we're always excited. Tweet at us... Whatever method, you'll get in touch with us.

**Adam Stacoviak:** Engage, basically.

**Aidan Feldman:** Yeah, and we also have some open Slack channels... chat.18f.gov. You can join some of our public Slack channels and talk to us there. So really any way you can get in touch with us, you'll be connected to the right people and we'll help you figure out what you wanna contribute to.

**Adam Stacoviak:** Very cool. We're gonna add the chat.18f.gov into the show notes for sure, because I love it whenever organizations like yours embrace the general public being able to reach out, whether it's a GitHub issue or a Slack channel, or even the guides being open source. This is something to be celebrated and to be modeled after.

**Aidan Feldman:** Yeah, we'd love to hear from people.

**Adam Stacoviak:** One thing we wanted to talk about before we begin to close out was something we probably couldn't shy away from if we did the show. The last thing Jerod or I want is when someone listens to this to say, "Hey, this post came out on the Washington Post and you didn't even mention it. You talked about sustainability, you talked about the stability of 18F and you didn't mention this clickbait-type title post." It's probably a great post from Joe Davidson, he's a columnist there. The title is, "Why a Federal Hi-Tech Startup Is a Money Loser." It's basically talking about how 18F is essentially destined to lose money and has been losing money, and it kind of outlines some of the things.

\[01:03:54.26\] In the breaks we mentioned we were gonna talk about this, so Hillary, you mentioned this non-endorsed, I guess... It's written from a fan of 18F that says the exact opposite, which is 18F is hardly a waste of money. So we have these two \[unintelligible 01:04:11.05\] and just generally as an organization who cares about open source and the stability of it, and we certainly have outlined some of the value you've added back in; to add value you always have to invest, it's not always about just simply making money or financially profiting, so to speak, but having good software for our government agencies, good practices for our government agencies, and certainly a beacon of light for other agencies in countries like Singapore to be able to pick up some of these things and do this.

I'm kind of curious what your thoughts are on that post or these posts, and maybe help us understand the back story here.

**Hillary Hartley:** Yeah, absolutely. The back story is that each federal agency has an inspector general. The inspector general (IG) of that agency is essentially generally charged with \[unintelligible 01:05:05.23\] waste, fraud and abuse. We've been saying for two years that our time was coming, because every program gets audited at some point or another, and 18F went under audit by our IG starting at the beginning of 2016. So basically from about January through July or August we were essentially under review, and mostly they were scrutinizing our finances.

This is probably a little more information than we need, but essentially 18F is funded by an internal revolving fund that is inside the GSA; it's a fund called The Acquisition of Services Fund, which is managed by one of the top-line business units in GSA called The Federal Acquisition Service.

**Aidan Feldman:** It's a seed fund, essentially.

**Hillary Hartley:** Yeah, The Acquisition of Services Fund is essentially a revolving fund that they use to purchase good for government services and tools, essentially. So they made an investment in 18F; we have a three-year memorandum of understanding with them that essentially says, "We're gonna be your startup fund." When we use the ASF, as we call it, programs are required to have a plan to get back to cost-neutral, so we've gotta be cost-recoverable; we've got to eventually get to the place where we are putting the investment back into the fund.

I think to date, over the last three years, we have lost about ten million a year, but again, we grew from 10 to 200, we've made investments, and interestingly, we've focused on projects like cloud.gov, like the Micro-purchase platform, even our guides, that, as we discussed, we could not operate as an efficient team, nor could we plan to be a sustainable and efficient team into the future without those guys and without all that documentation. That all takes time, and it's unbillable time; it's things that we don't bill to anyone but ourselves, and that's we got scrutinized for in this report... It was really kind of not putting enough back into the fund. But we are on track.

A similar investigation was actually done by the General Accountability Office... The GAO looked into those 18F and USDS over the summer as well. What we've confirmed is that we do have a plan to get there. We've been saying that we will probably be cost-neutral in 2019, and in the meantime we are growing revenue...

\[01:08:07.17\] I think the stat that we put in our blog post as a response to that IG report was that just from the fiscal year 2015 to 2016 I think there was a 69% increase in revenue. We are growing our pipeline, we are growing our business, and we also are now able to spend less time on some of this foundational work. We've invested the time in the Agile Blanket Purchase Agreement so that we now have 17 other vendors that we can go to to help us scale our efforts. We've invested the time in the Micro-purchase platforms, and we've got 92 other businesses that are helping us do small tasks; we've invested the time in these guys, and things like that.

I think it's just really important to not miss the forest for the trees. Absolutely we haven't been perfect, we've been in startup mode, but we're on the right path.

**Aidan Feldman:** I think it's also worth noting that if you just frame it in terms of expenditures or revenue, all of government that is not the IRS is a money loser, right? They're not bringing in money, and that's not really the point. They're providing value in that cost money. We aren't doing a lot of things to try and operate it more leanly and have smaller overhead, that kind of thing, to try and reach cost recoverability, but it wasn't a waste in that that money was just poured down the drain, or something like that. Like Hillary said, that went to building projects, that went to developing documentation, that went to all the work we've done with our partners etc. It just hasn't balanced out to the point that we need it to, and so we're working towards that. But it wasn't just gone.

**Jerod Santo:** Do you think because of the model applied, of the startup business agency inside the government, this unique thing, that you are held to a higher standard to produce revenue because of that?

**Aidan Feldman:** Yeah, I mean it certainly is unusual. GSA is the only agency that I really know of that is meant to have these revenue-neutral programs, so it is unusual for government, and that means we're operating more like a business than a normal government agency. Yeah, it's certainly challenging, and we're not perfect but we are constantly improving and on track to get there.

**Jerod Santo:** We'll definitely link up both the article in the Washington Post by Joe Davidson, as well as a Medium post by I believe a third-party fan or someone who just is in support or 18F, so that people can read those for their own. Adam, real quick, you were sure this is a good article... I just wanna say he did use a good pun in his article in the Washington Post; he said he gives 18F's financial administration an F... Get it? \[laughter\]

**Adam Stacoviak:** So good!

**Jerod Santo:** That's journalism right there.

**Hillary Hartley:** Just one F, or 18 F's? \[laughs\]

**Jerod Santo:** Yeah, really...

**Adam Stacoviak:** Tom VanAntwerp, good job!

**Jerod Santo:** Well, let's end on a bit of a happier note in terms of people getting involved. One thing you already mentioned, Aidan, is the Slack channel, but for those open source hackers out there who like what you guys are up to, and your mission, and the way you're going about building user-centric systems and open source things, what are some ways that we, the community of open source developers, can help 18F in its purpose?

**Aidan Feldman:** There's a blog post from a few months ago called -- it's something like a bunch of 18F reusable tools, tools that you can reuse in your organizations, or something like that. For that, we sort of combed through our vast number of GitHub repositories and multiple projects that, you know, aren't gonna be the FAC (Federal Action Commission) homepage or something like that, but are more reusable tools that we think could be applied in different contexts. So that's a good one, especially if you are interested in finding 18F projects that can be used for whatever team you're on.

\[01:12:26.22\] We do use the Help Wanted tag on GitHub on a number of repositories, so you can search for that. You can tweet at us - that's, honestly... You know, if you tell us what your skills are and what you're interested in, it might be the easiest way to be directed to something, or ask in Slack etc.

**Jerod Santo:** Is the 18F Twitter account pretty active in terms of actually reaching a team member, or is it more of an announcement style black hole?

**Hillary Hartley:** There are real people behind that account.

**Jerod Santo:** Cool.

**Aidan Feldman:** Yeah, we definitely respond to any questions or things like that that are tweeted to us.

**Adam Stacoviak:** And it's just @18F, as you would expect, on Twitter, so that's pretty easy.

**Aidan Feldman:** Yeah.

**Adam Stacoviak:** It can't get any easier than that, besides @Hillary. \[laughter\] We are really close on time... You had mentioned earlier though in the break - and I hate to broach another subject, but if there's a quick mention you could mention about new stuff at code.gov... I know you blogged about it recently, there's a lot of interesting things happening there. Can you just give us a 30-second version of what's happening there? That'd be awesome.

**Aidan Feldman:** Yeah, so the Federal Government, the Office of Management and Budget specifically in the White House, just adopted a federal source code policy. This is saying that basically "We, the Federal Government, want to have our commitment to public domain to actually translate into source code being available." Code.gov is sort of an accompanying piece to this policy, providing a list of actual code repositories from various agencies, and it's sort of a collector of those, as well as providing guidance to agencies on how to do open source, like how do you deal with mixed licenses, how do you deal with outside contributors, do they need to sign a contributor license agreement, what sorts of protections do you need to have on your source code in terms of what gets merged? That kind of thing.

It's a kind of hybrid of public-facing, in the sense that "Here are projects that you might be interested in" or "Here's what the government has available", as well as government-focused guidance.

**Adam Stacoviak:** Very cool. It's code.gov, and I know there's some recent blog post on the 18F blog about that, so we'll link up a couple of those interesting things happening there. I think that's certainly a good thing... "code.gov is the next milestone in federal open source code" is the headline for this post, on 7th November. I certainly wanted to mention that before we close out the show.

If there's anything else that either of you want to mention before we close out, this is a chance to do it. Do any of you have anything you want to close with? If you've got the ear of the open source world, something you can share that's about your journey, advice, inspiration to close out on?

**Hillary Hartley:** In case people stumble across this and they work for government, whether it's federal government or state government or local government, and maybe they haven't done too much open source just yet, one thing that we've been doing lately is to challenge folks to say, "Take one project that you're working on this year and try to open source it." I think that's just really important as we start to see this ethos kind of take over across government, and not just federal government or state government.

\[01:16:02.09\] Because again, we're actually starting to see some cities working together to solve problems. In San Francisco they're really interested in getting three or four cities together to figure out how to solve something with regard to \[unintelligible 01:16:16.17\] or identity, and open source is going to be the path forward with that. That's really exciting.

**Adam Stacoviak:** That's a great way to close, Hillary, and you actually have a guide to back it up. There's an 18F open source style guide, which is essentially processed to name your project, making your repo descriptions clear, readme, documentation... So if anybody out there is listening, as Hillary just said, we're gonna link up in the show notes this open source style guide to kind of help you take that next step \[unintelligible 01:16:46.24\]

And if you're in government and you're listening to this show, reach out to us. We wanna hear what you have to say about this project, and just in general your questions on open source. You can e-mail us at editors@changelog.com or hit us up on GitHub; we have an open inbox there called Ping, so if you go to GitHub.com/thechangelog/ping, submit an issue... We like to do that \[unintelligible 01:17:08.08\] because, Jerod, how cool is that? This show started as an open source or an open repo ping, and it's our open inbox...

**Jerod Santo:** Right.

**Adam Stacoviak:** ...it helps us (mention) @Hillary, @Aidan and be able to pull them into this show and have this conversation.

**Jerod Santo:** Absolutely, we love it. Definitely go out there if you have show ideas, send them to us. We are all ears.

**Adam Stacoviak:** All ears. With that, that is the show, so we'll close out. Hillary and Aidan, thank you so much for your service for our country in the government, and as fellow hackers, we appreciate your care and love for the open source software out there as well as the community that powers it, and making it such an important endeavor for our country to support. That's just super awesome.

Listeners, thank you so much for tuning into this show. With that, let's say goodbye.

**Jerod Santo:** Goodbye! Thanks!

**Hillary Hartley:** Au revoir!

**Aidan Feldman:** Bye-bye! Love you!
