**Jerod Santo:** So Ken, you've done a lot of audits... Why don't you tell us what that audit process looks like? What's the step-by-step of an audit?

**Ken Kantzer:** Yeah, sure. The process kind of evolved over time, as we did more of them, so I'll kind of focus on where we ended up, as the most evolved form of the audit. You know, at first, getting access to source control is really important. Making sure that we had all the repos within scope of the audit was super-important. Usually, our first step in the audit was... If you've ever seen Lord of the Rings, you know the scene in Helm's Deep, where they have that guy who kind of catapults over the wall, like the Berserker guy.

**Jerod Santo:** Yeah.

**Ken Kantzer:** So we'd always nominate one person on \[unintelligible 00:02:41.27\] to be the Berserker. And their job was to get a local dev environment running as quickly as possible for whatever code we were testing. And rather than have everyone kind of simultaneously struggle through that, we'd have one person do it, write up instructions... A lot of these companies that we were auditing were, like I said, series A to C. They didn't have good processes in place a lot of times, and so we'd have that berserker come up with a local environment... We actually started having them build it within a VM, like VirtualBox or something, so that they can kind of share it with us and we could skip that part. And then at that point, I think the first step was just to run some very basic reps on the codebases, just to see what type of thing we're dealing with. Like, is this going to be a pretty messy code audit, is this going to be pretty clean? And once we had that general context, we'd usually meet with the lead engineers on the project, get them to walk us through the structure and architecture of the codebase - the big moving pieces, the big third-party services that were being used. And then after that, we were pretty hands-off with them, with the engineering team. We usually tried to avoid getting too much into their daily cycles, letting them focus.

\[03:59\] At that point, our job was basically "Let's cover the OWASP top 10 as quickly as possible, and then learn as much as we can about this codebase, and start finding bugs." And you never really could know what to expect. We didn't focus on any particular frameworks, so a lot of where our research went was led by simply what framework we were dealing with. We kind of rolled the punches at that point.

**Adam Stacoviak:** What was the purpose of the audit itself? Was it security-focused? Was it contextual-focused? Was it how fast could you get the dev environments -- like, what was some of the main points you were trying to gather from the audit? What was, I suppose, the deliverable, so to speak? Was it like "Here's your ten facts about your codebase"? What was the --

**Ken Kantzer:** Yeah, so all our audits were focused on the security side. The output for the audit was a report, typical to what you'd see in like a pen test report. I would say as we went along, more and more people asked us for kind of just like our independent assessment on things outside of security as well. So that's when things got really interesting. We usually would produce a security-focused report, and then usually a report -- just general observations, like "Hey, you guys are doing this really well. That seems awesome." Or like, "Hey, I noticed you're using CKEditor, and it's a complete disaster for you in terms of security. This is like what we'd recommend there." It would get more into like kind of the consulting/consultative side. I think people were just interested in our thoughts after having looked at the whole codebase.

**Adam Stacoviak:** It's about perspective too, right? The perspective changes, because you've got the team that produced the codebase - some there still, some not there still; early stage of the company. And their focus is on direction of product, not so much like overall holistic health of the codebase at large. And the perspective you all bring as a third party is like, all this contextual knowledge about security, but then also best practices, because security kind of comes from best practices, depending upon the argument you might be in or not. But that perspective is like -- it's a different perspective. It's like, "I'm too close to the problem. I can't see the problem" and you're more like, "I'm further away, so I can see all the problem, and I can give you a more detail-oriented (as you said) output to what's actually going on."

**Ken Kantzer:** Yeah, absolutely. I would say the other thing is, there's a lot of insecurity that we saw in early-stage startups. And that is kind of the genesis of some of the observations that I made. A lot of people were like, "Oh, we have a pretty small team. Is that a second to be okay for us?" Or like, "Oh, microservices are really hot right now. We're like this kind of boring monolith on like a pretty boring tech. Should I be doing something else?" So a lot of it was actually that kind of concern. And yeah, that was kind of the genesis of some of the observations, of just man seeing that in practice, and being like "No, actually you're on a monolith and this is awesome. You guys should keep doing this forever, because this is a great product."

**Jerod Santo:** Sometimes you need somebody else to give you that confidence boost, just to reaffirm like, "Yeah, you're doing alright." Because you're so in the weeds, and you're all internal-focused, and it's like, "Am I doing this right? I don't know. I'm just trying to keep heading West." And having somebody else tell you, affirm your decisions, or tell you "That was a terrible decision. Let's change it." That's very helpful.

**Adam Stacoviak:** Right.

**Jerod Santo:** How do you guys know when you're done? Do you just set like a maximum number of labor hours you're going to spend, or when you have a trickle of new findings versus a lot of new findings? How do you know when an audit is finished?

**Ken Kantzer:** Yeah, we sold the audit in blocks of hours. 40.

**Jerod Santo:** Gotcha.

**Ken Kantzer:** So you could choose minimum 40, all the way up. Probably no one really went above 120. What we found was at that point it's really diminishing returns. But somewhere between 40 and 120.

**Jerod Santo:** So you wrote up this awesome article on your observations, your findings. As you said, you've done a bunch of these; always, startups. It's been seven, eight years since you've done a lot of these, and now it's like a time to reflect and look back, and these are your lessons learned. You shared a bunch of lessons; we're going to talk through as many of them as we can, we'll see how it goes. And I would love to just dive right in.

\[08:10\] So the first thing that you talked about, your number one finding - and I believe these are in somewhat of an order; not like best or worst, but maybe highest level to lowest level, and maybe sensational to less sensational. We'll just work vertically down. Listeners can check the show notes if they want to read along.

"You don't need hundreds of engineers to build a great product", which you've also wrote about this. But I'm sure you had a lot of startups that had a bunch of engineers, and you probably had some that had a handful. And it wasn't like -- you couldn't draw that correlation. Is that what you're saying?

**Ken Kantzer:** Yeah, exactly. There was no correlation between the number of developers working on a product and almost anything about the product in terms of quality and features. I might even go so far to say that maybe, if anything - and there was a slight correlation; again, this is not statistical - but it would be that the smaller teams were really punching above their weight. And I was kind of surprised by that.

I think there's probably an organizational aspect to this one too, which is -- I don't know if you guys feel this, but especially with just the crazy startup scene in the last maybe ten years, I think a lot of engineering organizations really felt very pressured to grow rapidly. They felt like if you didn't have a big engineering team, you weren't successful, like a priori. And I think that was something we came across pretty often. And that's also kind of what I'm trying to speak to in this first observation.

**Jerod Santo:** There's also - the more people involved, there's more of an opportunity for let's just call it low-quality contributors to kind of slip through the cracks, and not have to perform at a level that they would have to if there was less people on the team, just out of pure necessity. Now, maybe those people also end up burning out, because they're working too hard and etc. There's a lot of different factors, but I can see where in large engineering teams you'll have certain contributors who carry maybe the whole team, maybe a few people on their team. Whereas if there's just less people around, you can't really -- that just doesn't work.

**Ken Kantzer:** Yeah, less places to hide.

**Adam Stacoviak:** So in this output you put back to them as part of the audit completion... So this is a learning for you, in retrospect... How would this point permeate into the report? Would you tell them, "Hey, you have way too many engineers" or "You have these security issues or these concerns because you just have too many--" Like, how would this learning permeate back into a report, for example?

**Ken Kantzer:** Yes, so it wouldn't. And this is an example of something that now that I'm observing -- now that it's been seven or eight years since a lot of these audits were done... I don't know if, during the time I was auditing, I would have come up with this one, honestly. I think it was something that at the time, I was like, "Oh, like--" Like, maybe it was like scratching the back of the mind, but I certainly didn't feel confident enough to be going to the CTO and being like "You have 50% too many engineers." It's just probably out of scope for -- like, that's a cataclysmic observation to be making. I think it's really retrospect that's, at least for that one, making me reach that observation.

**Jerod Santo:** And it seems like that retrospect can look back and see which companies were successful and which ones weren't. Are you talking about the current state of the product when you audited it?

**Ken Kantzer:** No, you're totally right. A lot of it's like -- now that seven or eight years later these companies have kind of evolved, some of them have faded away, some have been acquired, some are now very successful...

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** Can we clarify the distance too in time from the last audit? You say "Some of them were seven to eight years ago." Not all of them. So what's the closest in distance and what's the furthest distance? Just to give a clarification on time distance from when these took place.

**Ken Kantzer:** Yeah, so we started doing code audits in 2014. The furthest out we are from these companies would be eight years. And I left PKC for my current role two and a half years ago. So I would say probably three to seven years later, for the majority of these audits.

**Adam Stacoviak:** \[12:25\] Okay.

**Jerod Santo:** Now, could you draw a correlation on team size to product surface area? Like, maybe not like lines of code count, but maybe like number of microservices, or maybe in the case of a monolith lines of code. Is it bigger team bigger product surface area? Or does that not even correlate, in your experience?

**Ken Kantzer:** It sometimes did, but you would think it would always. It didn't always. I'm still kind of scratching my head a little bit on -- sometimes we'd start the audit and there were like a lot of developers, and then we'd look at the code and be a little bit surprised... We're just like, "There's not that much code here. Like, a little bit... What are these people doing?"

**Jerod Santo:** \[laughs\]

**Ken Kantzer:** You didn't want to ask that obvious of a question. I think we had maybe even, if anything, a little bit of too much respect for what was going on. We were like, "I'm sure there's a good justification here. There's gotta be", because developers are expensive. It's not like it's easy to have a lot and not notice, or something. So I would say -- I mean, almost going back to your point earlier, Adam, when you have more developers, it's more likely that you have microservices, for example, because there's some extent to which choosing your architecture is informed by your actual engineering organization. The larger teams you have, the more microservices and the overhead that that requires begins to make sense. So maybe there was a little bit of correlation with like complexity of infrastructure, more so than code.

**Adam Stacoviak:** I almost wonder if there's wasteful hiring too, because when you're in a startup -- like, in your series A, series B, there's a mantra, "Always be hiring", right? Like, you're always hiring, and so maybe you're hiring too much. And there could be this aspect of wasteful hiring. And these types of audits, while they may be security focused in origination, maybe it's a wisdom practice for some of these startups to consider this as like a "Must do it after every series, like series A, or series B", or every raise, to sort of like get a glimpse, a holistic approach of what's happening, because this is a retrospective learning in your part; I guess you didn't uncover it in the process of the audit, but you can say, "Well, you might have too many engineers, or you might have too much of this or too much of that" because that's a learning you've kind of examined from this... But I'm just wondering if there's like a wasteful hiring aspect of this. Because, I mean, always be hiring - it can't always be good.

**Jerod Santo:** It seems like that's the kind of assessment that not a InfoSec specialist would make. Like, maybe they could try, but it's like, that seems like the kind of consultant, that would be doing other things, at maybe a higher or more organizational level, and could use the data from an audit to help inform that. But I don't know... Isn't there even a law about shipping your org chart, which is what you were referring to there, Ken, with microservices?

**Ken Kantzer:** Conway's Law?

**Jerod Santo:** Yeah, that Conway's Law. Yeah. The propensity for your product to basically be an outgrowth of the shape of your business, which is just a kind of a weird phenomenon that seems to hold true... Or at least it sounds like it. Is that what you've found?

**Ken Kantzer:** \[15:42\] Yeah, I think that Conway's Law is a really a really deep statement about how organizations and technology kind of interact with each other. And it's definitely very informative. I think you also get really interesting organizational dynamics, like maybe between two teams, two engineering teams, frontend/backend, two different services that may have a lot of overlap that they need to resolve... And you can see, kind of, almost by looking at the architecture and how the codebases are laid out, who's worked on what. You get a little bit of the history of the organization, as well as just the straight-up technical situation at the present time.

**Jerod Santo:** We'll link up Conway's Law in the notes. I just found the Wikipedia, and - first coined in 1967. To me, it's just amazing that he could have that insight and it could hold true for so long. Most of my insights don't hold true for more than 30/45 seconds. But Conway sure drilled that one.

**Adam Stacoviak:** Yeah... If we're trying to get through all 16 of those, we're doing a poor job, because we're at one so far... \[laughter\]

**Jerod Santo:** Yeah. Let's move on. Let's move on.

**Adam Stacoviak:** Not trying to rush, good conversation, but we're on one.

**Jerod Santo:** Okay, so two - "Simple outperformed smart." Counterintuitive. Probably an ego check for many of us... But tell us about this. Even yourself, as you call yourself a self-admitted elitist. It turns out smart - maybe that aligns with clever, which tends to bite us... Tell us about this finding.

**Ken Kantzer:** Yeah. So this one's interesting, because I think reading through some of the comments on this blog post, I think this one was actually a little bit misunderstood. I got a lot of comments that were like, "Oh yeah, Keep It Simple, Stupid. KISS. Totally right. Yeah, let's just go with that."

**Jerod Santo:** Right.

**Ken Kantzer:** I was saying something that I thought would get a little bit more controversial, which is - I was actually talking about engineering cultures. So like, not just like an engineering principle, but cultures that valued simplicity. And maybe, to put it really bluntly, like kind of scorned and had a little bit of like a chip on their shoulder for things that were complicated were better than organizations that I think valued what I'll call it rigor... Which is -- this should be controversial, because rigor is like, you want a rigorous engineering culture, don't you? Like, why would you not want a rigorous engineering culture? Wouldn't you want people who are very careful and who are planning ahead?

So that's kind of my current formulation of it. And I think that is like -- I think we can all agree that Keep It Simple, Stupid is a great principle, but I think it's less clear that you want a culture of simplicity over a culture of rigor. I think that might rub people the wrong way, to put it that way. But that's what I've found. That's why it was so surprising. And as an elitist who likes working with smart people, likes and is drawn to really complex problems, that's where I'm like, "Ugh, I don't like that." But the truth is sometimes not exactly what you like.

**Jerod Santo:** Yeah. I don't naturally draw those as antithesis though, simple and rigor. I think simple and complex. Rigor to me is like applied strictness, or thorough. I think you can be simple and thorough. So maybe that's my disconnect from what you're saying.

I do know that simplicity is difficult. And so we think "Keep It Simple, Stupid." But it's actually a lot harder; you actually have to maybe rigorously keep it simple, in certain ways... Because moving fast, as startups do, and changing a lot, as startups do... Right? You're trying to find that product-market fit. Those things are like against simplicity, right? They're against fast-moving, changing often switching directions. And that usually leaves a wake of either complexity, or impedance mismatches, or bad API designs that never got deleted, or whatever it is that end up being complex. So just kind of a stream of consciousness there, but I'm not sure if I think of rigor and simple as against each other necessarily.

**Adam Stacoviak:** \[19:58\] Definition alone though agrees with you, Jerod, that rigor is not the opposite of that. It says the quality of being extremely thorough, exhaustive or accurate. So being extremely thorough is, as you said, Ken, a great quality for an engineering department. Simple I think is not the same as rigor.

**Jerod Santo:** Or not the opposite.

**Adam Stacoviak:** Yeah, exactly. It's not the same, it's the opposite.

**Jerod Santo:** They can be simpatico.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So maybe then we're getting hung up on a semantic debate about a word, Ken, but that's what we do here. Welcome to the Changelog. \[laughter\]

**Adam Stacoviak:** We do that often.

**Jerod Santo:** But I definitely understand the desire for smart, clever and complex architectures. Maybe the what makes you feel like you're being rigorous, perhaps. It's like, "We must do it right the first time", to which usually I as a simpleton will say TAGNI on that most of the time. Maybe I'm not an elitist, but I've just been down that path so many times, and it's like "We're designing this microservices architecture", which is the example you put in the blog post, which I think is a good one, with regard to this topic, and "How do we know if we're ever going to need these things?" We're being too rigorous. Now maybe I'm coming around to your word... When we could just start with a simple thing.

Adam, you and I were just kind of debating this on our weekly meeting today about what we do here... And one of my other sayings - which I don't make up any saying, I just repeat other people's - is "Perfect is the enemy of good." And we desire to be perfect. We desire to have it all thought out and planned out and no mistakes and sweat the details. And sometimes that just paralyzes us from making progress.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And so I have to tell us that sometimes, like "Well, let's just ship a thing and see what happens."

**Adam Stacoviak:** Well, momentum creates the motion, right? So it's exact word. So if you get a little bit of momentum, sometimes you can start moving and you start to see the promise of the possibility. And the details you sweated was just like "Yeah, that didn't matter so much." It's better to just get it out there. It's better to get it out there, even imperfect. Because I think perfection actually is thoroughly unachievable. There is no such thing as perfection, because the moment you achieve it, somebody else has done something more, better. So it's always a moving target. So to pursue perfection for perfection's sake is just -- it's a fool's errand. It's not going to happen. So "Just ship it" is almost kind of smart.

**Jerod Santo:** Yeah, for sure. One thing you say in that post, Ken, is that the people that really impressed you as smart engineers - either that opinion changed over the course of the audit, or over the course of time now they haven't succeeded. Maybe their startups failed or have languished. And so that's part of this, too... Actually, the ones that correlate with success are the ones that were more hyper-focused on simplicity, and less, perhaps, I guess, intellectually impressive. Is that true?

**Ken Kantzer:** Yeah, it is. And that bothers me a lot. And that's not to say that on the teams that really focused on simplicity as kind of a core engineering principle - that's not to say that they didn't also have smart people. But those smart people were very disciplined about their smartness, and didn't view engineering as like purely an intellectual exercise. Like, I forget -- Adam, you mentioned wisdom. I think a lot of engineering decision-making is as much about wisdom as it is about intellect. And so maybe that's also what I'm getting at there. The value of simplicity is a wisdom thing, too. Knowing when to stop, knowing when to be like, "Okay, I've gotten really deep into this problem. It's time to pull back out and look for the plugin that does this in three lines of code instead of the 200 lines I've started to write so far."

**Break:** \[23:50\]

**Jerod Santo:** Number three was that your highest impact findings would always come within the first and last few hours of an audit. I think that's probably an interesting tidbit for those who are interested in doing audits, or those who are doing audits. And I think probably kind of a fact of how things often work. But not too much meat on the bones there for us. Let's go to number four, which I think is very interesting. "Writing secure software has gotten remarkably easier in the last ten years." What has contributed to that, do you think? That's a good sign, first of all.

**Ken Kantzer:** Yeah, yeah. I was surprised that more people didn't pick up on this one too, and kind of challenge it. I don't know if this one is true, but it really feels like when we audited older codebases, let's say before 2012 - it's kind of an arbitrary date, but I had to put something in there - we just would find tons of problems, a lot of very basic cross-site scripting, SQL injection... Really weird, homegrown authentication and authorization code... And it seemed like at some point -- I think two things happened. One is open source really started to become heavily used in these startups; I'll put it that way maybe. I mean, open source has been used for a really long time, but for example, I think people started to be like, "Oh, instead of writing my own authorization/authentication logic, I'm going to use like the device plugin for Ruby on Rails", for example. And so frameworks took off, people started fixing bugs in frameworks, and then when all the thousand startups that used that framework upgraded, suddenly this class of vulnerability disappeared for them.

I think the second thing is developers started knowing a little bit more about security. And we've found that older developers tend to not think as much about security as maybe the younger generation, just because the new cycle really -- I think in 2010-2011 security as like just a new cycle that entered our public consciousness really picked up. We had things like Stuxnet early on, which was the whole Russian -- or I guess not Russian; Iranian centrifuge bug thing that got a lot of public attention. Snowden happened... People just started thinking about security more and got more interested in it.

**Jerod Santo:** Yeah, I think those are both insightful. I think for sure the proliferation of libraries that implement best practices for you, whether it's inside a framework or out, has saved a bunch of us from a lot of the very common mistakes. I'm thinking specifically of things like SQL injection, where we used to rely upon ourselves to concatenate together strings in order to put SQL statements together. Most good database libraries that you would use nowadays - that's a salt problem; they are built in such a way that you cannot possibly get that wrong.

And then in addition, I do agree that I think younger developers, maybe more modern developers have grown up in an age where it's like crystal-clear that this is a problem, and one that we've maybe been trying to educate ourselves in order to not fall into that problem... where I think the previous guard, so to speak, lived in a simpler time, and more of an innocent age, so less concerned things.

**Adam Stacoviak:** Which is kind of interesting to think back to the more recent show we did with Schneier. Bruce - he was like, "Hey, open source doesn't mean that it's more secure." I severely remember him saying that like on the show, because I was like -- you know, I wanted to go a little deeper on that, but he was just like "Well, the more eyeballs and proprietary code etc, etc. You can pay somebody, Microsoft could pay somebody (he had said) to audit their code", or whatever.

**Jerod Santo:** Bruce talks very fast, so it's hard to go deep on things, because he's already on to the next subject.

**Adam Stacoviak:** \[30:15\] We had an agenda, and that one wasn't worth going deeper on... But it's kind of against that. So if this is your finding Ken, then his finding was -- or at least opinion, maybe it wasn't a finding; it was an opinion based upon findings, who knows... Was that open source doesn't necessarily mean it's more secure. I disagree, for the reasons you've stated. Like, this may be anecdotal, because you said you don't have any evidence to back this up, but your anecdotal evidence, which is the more proliferation of open source being used, more people seeing it, more people leveraging existing frameworks and building upon wisdom, rather than like everybody recreating the wheel - it totally makes a lot more sense to me. And what that means for the world in the last decade is like "Wow, we can actually go into these years with a more security mindset." And I think leveling up devs on these security aspects - that comes from open source. Because you may be solving one problem, which is build a web app; not necessarily trying to build authentication. You're like, "Well, I've learned about security because of what \[unintelligible 00:31:11.22\] does, and how it works", and these - things you sort of by osmosis learn about security. And in many ways, large part is because of the proliferation of open source.

**Ken Kantzer:** Yeah, I don't know if I agree with Bruce Schneier on this. I think, if I was to maybe -- I think open source can be not very secure. I think maybe what I would say is not all open source is created equally. If you're using an open source package that doesn't really get maintained, and kind of falls into abandonment, then yeah, you're probably maybe even a little bit worse off than if you had built something in-house. Because now, this thing that you haven't really looked at or scrutinized from a security perspective, or any other perspective for that matter, is now code that essentially you own, whether you think you do or not.

But certainly for the big open source projects, I would 1,000 times over recommend people stick with them from a security perspective, than try to write their own. There's a lot of scars, especially on stuff like Rails, the JVM authentication plugins... And a lot of times we look at those scars and we're like, "Oh, they're insecure", but each one of those is an example of a mistake you probably could have or would have made had you coded it yourself, that you got to get for free, essentially, by not coding it yourself.

**Adam Stacoviak:** I just think about how many apps - GitHub being one of them, Twitter being one of them - were built on Rails, sold for billions, worth billions, been bought for billions, however you want to shake it up... That built on top of Rails, that solved the security problems once and for all, or at least exposed a lot of them. And somebody didn't have to recreate that wheel. And that happened for Twitter, that happened for GitHub, and many others have used Rails. Shopify, for example, even. These are IPO-ed billion-dollar companies, or acquisitioned for billion-dollar companies, and they never had to really learn those mistakes. They got to borrow them, essentially, or inherit them, the learnings from them. That's such a blessing to the world, really.

\[33:32\] Yeah, you're absolutely right. I think one of the big challenges that I see with the Node JavaScript community in general is how difficult it's been for them to kind of standardize in the same way that a Rails has, for example. And I think maybe when we started moving a lot of stuff to Node in JavaScript, we may have underestimated how much water was under the bridge for things like Rails and Django, and how much tremendous amount of work had gone into solving some of the foundational problems. Maybe we took it for granted, in some ways.

**Jerod Santo:** So to play devil's advocate a bit on this point about the shared Ruby on Rails framework across all these startups turned large tech companies... Doesn't that also then create a shared attack surface? Doesn't that make Ruby on Rails itself the focus of attackers where they can get one exploit and go after all these high-value companies? Versus had GitHub rolled their own internal proprietary framework for web apps - then they could get a Ruby on Rails vulnerability and everybody would be vulnerable except for GitHub, because they've got their own thing over here. Maybe that's an argument for security through obscurity, and therefore not a great argument... But there's something there, isn't there?

**Ken Kantzer:** Yeah, I think that's kind of the defining question of the whole move to the cloud too, isn't it? Like, the big question that everyone had was "Are the things you're talking about, Jerod, going to outweigh the better security of those things from having more people and more resources scrutinizing them and looking at them?

**Jerod Santo:** Right.

**Ken Kantzer:** And I guess this kind of goes along with the point about security getting better. I feel like that question -- it feels like it's been definitively answered that yes, the trade-off is definitely in favor of centralization on these large platforms. I think the place where it's less obvious is for maybe like those mid-tier things that aren't like Ruby on Rails, or like AWS, and whatever Linux distribution they choose to centralize on. And it's kind of like those second-tier things where maybe they don't get quite as much attention, but they're still pretty heavily used by some large players. I'm trying to think of a --maybe Log4j could be a good example of that, where it's like, how many Log4j libraries are there out there where they're foundational to certain things, but they just aren't high-profile enough to get a ton of people looking at them constantly? And so like, you kind of break that trade-off there.

**Jerod Santo:** Yeah. Which is sort of the tragedy of the commons in that case. It's like, there's certain open source projects that kind of break out of the tragedy of the commons, and they get the resources and the attention - and Ruby on Rails is a great example of that. And then there's a lot of them which still are foundational, infrastructural things that we require, and share. And then one guy in Nebraska is maintaining it, as the XKCD. comic. So - well pointed out. So yeah, interesting. Interesting trade-offs.

**Adam Stacoviak:** Well, trade-offs, pros and cons, right?

**Jerod Santo:** Totally.

**Adam Stacoviak:** The other argument to play devil's advocate one layer deeper before we go on to point five and six, is would GitHub be GitHub if GitHub didn't use Rails? Because maybe they would have made their own thing, didn't move as fast, didn't innovate, maybe they burnt out their best players early, maybe they focused on the wrong thing and GitHub would be a framework creator, versus the place that open source lives, because they got defocused on their priority, which was the main thing. Jerod, you know this... The main thing, the main thing. Maybe they made Rails X their priority, versus just leveraging Rails.

**Jerod Santo:** Yeah, but now you've moved on to a productivity conversation and not a security conversation. So I agree with you wholeheartedly there; like, open source for the win. I'm with you. But I think on the security front, I can see how, in certain circumstances, there are drawbacks, and there are trade-offs.

Okay, let's plow forward, because we're never gonna make it. We're never gonna make it.

**Adam Stacoviak:** Too many layers.

**Jerod Santo:** Okay, so point six we're going to skip, because we've covered it. "Secure by default features and frameworks and infrastructure massively improve security." You covered that one. Let's hop back to point five, because it's somewhat cool... "All the really bad security vulnerabilities were obvious", which is kind of obvious once you say it, but also it's probably not very obvious when you find it. But like, there's some really bad stuff out there. Basically, the low-hanging fruit. Probably found it fast, and it's like, holy cow... Is that what you're saying?

**Ken Kantzer:** \[38:19\] Yeah. I think that -- what do I want to say here on this one...? I think there's like this myth amongst maybe securities, but also probably devs as well, that like "Oh a hacker is like this brilliant mind, and comes up with like this crazy hack that no one could have anticipated." And there's some evidence, there's some examples to back this up. Heartbleed is a good example... Or that one where it's like -- I forget what it's called, but basically they figured out how branching prediction worked on Intel processors, and then...

**Jerod Santo:** Yeah, and then broke all Intel-based things...

**Ken Kantzer:** Yeah, I don't remember what that's called. But I think most people have this conception of security research as always producing that kind of like 400 IQ problem. But the reality is most security researchers and most hackers are looking for the lowest-hanging fruit. They want to find the easiest things to exploit, and so those are the things that are going to pop up in practice when you actually do get hacked. It's going to be the cross-site scripting vulnerability that would have picked up on a scanner, but you didn't run scans. And I think that's something we've found in practice, too. There were a few things that we discovered that I would say were like more tricky, but they didn't end up seeming like the really high-impact ones. It was more like "Oh, your password reset response..." This was something that every dev should immediately check on their thing, because it's way more common than it should be. Make sure in your password reset response you don't include the token in that response. That, for some reason, tends to be a very simple gotcha, a very obvious one... But talk about high-impact, having anyone be able to reset anyone's password - it's gotta be at the top of the list.

**Jerod Santo:** Did you guys perform physical security audits at all?

**Ken Kantzer:** We did one, and it was very interesting. Can't talk too much about it in terms of what exactly we did, but we mostly focused on the code side of things. Physical security is its own unique gem.

**Jerod Santo:** Well, the reason why I ask is because if we go all the way back to like the Kevin Mitnick days, we're talking about obvious and easy and low-hanging fruit. it seems like probably to this day just asking somebody for the thing still probably works way too often... And I wonder how much that stuff is audited.

I know there are firms that do physical security, like on-premise things. I wonder how many call into help centers and stuff and try it to see if that works. But I mean, you're just one untrained help center employee away from the keys to the kingdom, in many cases.

**Adam Stacoviak:** Yeah. And people bow down to authority too, so if you seem authoritative and you ask for particular information, you may give it up. Or you may get duped into giving it up. It's happened.

**Jerod Santo:** That reminds me of this awesome social engineering thing which people actually tried... Do you want to know how to get into any event for free? Whether it's a movie theater, or a concert. It's simple. You walk in with a ladder. It works best with two people carrying a nice 10-foot ladder. And they'll just let you -- because everybody assumes if you're carrying a ladder that you're there to fix something, or hang a thing... They'll let you right in. There's actually some videos on - whether it's Instagram or TikTok, I don't know, of people trying that, and it works flawlessly. Like, they'll just let you right in, because you're carrying a ladder. And so it's a little bit of that assumed authority, right? Assumed "Everything's okay here."

**Adam Stacoviak:** \[41:59\] You belong here.

**Jerod Santo:** Clearly. "They're carrying a ladder, they must be working."

**Adam Stacoviak:** It's the same with like in Tenet, that character was wearing that vest, that particular vest. It's like, you wear it in an airport, because you're directing, the planes or whatever. Like, you must be authoritative if you've got this vest on. I forget what the name of the vest is called, so that's why I'm not being specific; I can't recall the vest is called, but it's this vest that's orange, it's flashy... Yeah. If you seem authoritative, then you don't get questioned. Or if you get asked for certain information, you might just give it up, because like you said, Jerod, untrained person working, just trying to do their job... It's like, "Well, this seemingly authoritative person just asked me for my password, so I gave it to them. I hope it goes well."

**Jerod Santo:** By the way, I looked up that Intel x86 hack... Meltdown and Spectre. Now it probably rings a bell. Spectre and Meltdown, if you all recall those. All the best, all the most non obvious high IQ hacks have cool names. There's no cool name for the one where you forgot to not send the token back on the password reset form. That one doesn't get a name, but it happens probably way more often.

Alright, let's move forward here... Number seven, "Monorepos are easier to audit." That one seems like -- I don't know, that one seems obvious when you think about it, because like, well, everything's in one place. But is there more to it than just that?

**Ken Kantzer:** Yeah, I mean - I'm curious on your guys' thoughts on this, but this is... There is like a more generalized and non security angle to this too, where - I just feel like developer ergonomics on a monorepo are easier. Like, anytime I would audit a microservices multi-repo setup, it's just -- I'm talking about like literally downloading all the repos to your local environment; like, now you've got to write a script that like -- we would write scripts that like scraped the GitHub page, and pulled down the repos that way. Maybe I'm missing something, maybe there's a clever button in GitHub where it's like "Download everything." But just stuff like that... It's just extra-overhead. And sometimes I wonder -- there's the debate about monorepo versus not is very intense. And I think there's good points being made all around. But I wonder if stuff like simple, every day ergonomics sometimes wins the day.

If I want to search for something and I'm in my IDE - yes, you can have multiple folders open... But searching across a lot of different repos is tough. If you want to find -- you lose the ability to control right-click on like a function, and get that nice little sweet pop-up of all the places it's been used... Because a lot of times your IDE isn't smart enough to know there's like ten different projects... Just simple stuff like that.

Sometimes there becomes so much of it that's like you wake up one day and you're like, "Oh man, the overhead here is high."

**Jerod Santo:** Right.

**Adam Stacoviak:** I'd say from a simple human perspective, it's visibility into things that aren't your problem, right? Not my code, not my problem, kind of thing. Maybe you care about the org or whatever, but it's easy to not care, because it's not in your visibility. And it's easy to just like forget about it, because it's so many services or so many things you can manage. I mean, that's not my problem. So you almost don't pay attention or can't pay attention, because productivity means you're focused on your problems and the things you can control, and so therefore everything that's outside that view becomes not a concern. So if your people, if your engineers are the ones that are sort of the visibility into the health of your code, the holistic health of your code, and if they're not viewing it all, then it's kind of hard to secure it or be concerned about security practices. Now, that may be a CEO's job or somebody up higher; maybe not an IC, as that's not their "job", but I think if you have a lot of Lego. It might be challenging to manage where they go. Bring the Lego back in, Jerod.

**Jerod Santo:** \[46:01\] Yeah. I mean, I'm a monorepo guy, but I'm always on small projects, small teams, so I feel like I don't have the perspective of somebody who would make the other side of the argument. We've never fully prosecuted that debate on the show or on any of our shows, that I know of...

**Adam Stacoviak:** Well, we went there and back again with Segment, right? Microservices--

**Jerod Santo:** Yeah, but that was that was more monolith, even more than just monorepo, which is like related, but not identical. I'm also a mono -- I'm just mono. So I get all the monorepo arguments, and I'm with you on them, I just don't have -- I can't represent well the other argument, besides separation of concerns perhaps, or some of the stuff Adam's been talking about. So yeah, I don't know... It makes sense that they're easy to audit. Everything's in one place.

**Ken Kantzer:** One of the benefits of not having a monorepo is you don't have to deal with high volumes of commits to any branch, or weird branching strategies. It's a smaller team, they can adopt something very simple...

A lot of the really large monoliths start running into -- like, if you're... I forget if it's Google that still had a monolith and have like millions of lines of code in it... But you really run into some problems with Git itself at that point. Like, they started a whole work stream at - I think it was Google - to basically improve the performance of Git. But you just run into, like, what happens if there's 30 commits an hour? And each time you want to rebase. Like, how does that work? How do conflicts work when you're just streaming a lot of commits through one mono repo? I think that's where people are like, "Ooh, I don't know if that's a good idea."

**Jerod Santo:** Yeah, I can totally see that as well, which is I why I said I don't have that perspective to represent. But I can see where that could become, at scale, way more cumbersome than splitting things out and letting separate teams work separately.

**Adam Stacoviak:** Which is not a Series A through C -- you know, a Series A through Series C company that's being audited by Ken and his team is likely not going to be at that scale. Now, there's obviously some series C companies that are pretty scaled. But at that point, maybe the monorepo versus - I guess multi repo? What's the opposite of monorepo? It's probably just less of an issue, the scale problem. Like, you're not Google scale at series C.

**Jerod Santo:** Let's move on to number eight... We're never going to get to the end. And this is a big one, I think... "You could easily spend an entire audit going down the rabbit trail of vulnerable dependency libraries." This is a big problem; supply chain security is a hot topic. And especially in the JavaScript world, or we'll maybe just call it the frontend world, because no matter what your backend is, most of us are running npm-based frontends. We have so many dependencies, and auditing the main thing is a lot of work. And what you're saying, Ken, is like going down that Node modules folder, or whatever your Deps folder is, if you're not in the frontend world... It's just like, there's no end. Like, how could you possibly audit all those things?

**Ken Kantzer:** Right, yeah. So part of it is like, usually, what we security researchers do is we just decide to limit the scope to code written within that company. But if you think about it, in some ways that's not correct, right? Like, why? Why is that? Like, why is it that a function that I imported is out of scope, but a function I didn't import is in scope? It's all code that gets run in the runtime environment... That's something that honestly I haven't fully processed. It just kind of worries me. Maybe if there's a counterpoint to the above observation, that security has generally improved, the counterpoint would be "Well, we just are running a lot more code now than probably ever before, and because of how easy it is to go out there and find an open source library, there's a lot of code running that hasn't been looked at very carefully." And that's the rabbit hole that if you go down it gets kind of scary.

**Jerod Santo:** \[50:08\] It's a hard problem, because how do you solve it? It's like a network-wide problem. Like, no single individual -- unless you just go completely Not Invented Here syndrome, and you're like, "We're only going to use code that we wrote internally, that fits inside of Ken's scope of work. We're gonna have zero dependencies." Like, that's the only real way. And that's not realistic, I don't think, or wise even, when we talk about productivity versus security trade-offs; it's just not wise to do that. So we actually have to kind of solve that at like a network-wide level.

And one thing you brought up that's helped is Dependabot, and systems like this, because they kind of have been -- well, at least in the sense of a particular organization... I don't know, as far as they can pass the buck, or have somebody else look over a certain area of their code, the known vulnerabilities that Dependabot will alert you of kind of keep you upgrading and keep you current, at least; not keep you secure, but have helped move the needle a little bit towards more secure.

**Ken Kantzer:** Yeah. The interesting thing is, I think Dependabot gives you a very concrete target as a developer to aim towards. It's like, "Okay, very black and white. These are the packages I need to look at; these are the things I need to upgrade." But there's a lot of false positives there, and it's incredibly hard to know, as a developer... Like, say there's a -- I don't know; like a JSON parsing npm package that you use, and there's a vulnerability in it, and it's critical. As a developer, one path you could go down is just to blindly fix it. And that's probably 90% of the time the right path. But say you try to upgrade and it breaks something. Now how do you figure out whether the way that your code uses that library is impacted? That is a problem that Dependabot does not solve. I don't think anyone solves that problem. And if someone wants a great startup idea, that would be a great one to do... Because I think that problem is really hard.

**Adam Stacoviak:** The closest we came so far to the solution really is what Feross and team is doing with Socket. I don't know if you've heard of this yet or not, but... The antithesis essentially is that the CVE is like too late. If it's a CVE, which essentially is what Dependabot does, right? It's CVE related. It's sort of like documented known issues, but they take a more proactive look at it when they look at the supply chain issue, which is like, "Have install scripts been added to the repo? Is there native code? Has there been script confusion?" I'm just reading the list, by the way... "Is there file system access? Is there network access for things that shouldn't have network access? Is there shell access, debug access?" All these different things that could be in a dependency that wasn't there before, that could have been a source of social engineering; "Hey, let me find a way to get your GitHub repo keys, change a thing on npm, millions of people download it, and now I've got bin access, or I've got a shell access, or network access to this thing that never had it before. Now I'm in your cloud, or wherever I'm at, and I'm doing my thing."

They're taking a more proactive look at it, which I think is pretty interesting. It's the most interesting thing I've seen thus far in the supply chain attack issue. The only issue I see really is that they're only focused on JavaScript right now. So there's some things we talked about Feross with on this show, in that episode. I think once they get past JavaScript and they do open source at large, Or Rust, Go etc, that things get more interesting. But JavaScript is a big footprint, but it's not all of it.

**Jerod Santo:** Small steps in good directions.

**Ken Kantzer:** I've not heard of that. That sounds fascinating.

**Jerod Santo:** \[53:51\] Yeah. They're still retroactive. It's more proactive, but it's still going to miss stuff. They're trying to provide a holistic view of your dependencies, and provide a score, and there's like -- it's going to get more sophisticated as they continue to advance their algorithms, but it's still going to miss a lot of things.

**Adam Stacoviak:** Well, anything that gives you more visibility into it. You can miss a lot of things if you get a lot of things, too. I mean, if you can prevent 20% of attacks, it's better than zero.

**Jerod Santo:** It is. The challenge with security is it just takes that one hole. It's so much harder on the defensive side, because the offensive actor only needs one way in, and you have to secure all the ways. Ken knows this very well as a pen tester; really, all you need is the one. Like, you may report on your audit, "Here's the 17 things we've found." But only one of those -- I mean, okay, there are better and worse hacks, some things will not allow you to escalate privileges etc. So it's not like they're all created equally. But generally speaking, once you get your foot in the door, that's pretty much all you need. So it's really a hard problem from the offensive angle. It's such a hard problem.

**Ken Kantzer:** I think one of the things we can do is try to limit the surface area as much as possible. I'm curious what you guys think about this, but sometimes I feel like we get Node-module-happy, especially on the Node JavaScript side. Sometimes I wonder if we should find the thing that works, like the Node module we want to import, and then just take the function you want. Like, the one function you went down the path to get it. It's almost like, "Don't abstract prematurely." Like, "Don't use the open source prematurely." If you can only use that one function, maybe like the ten lines you need to, just do that, and you kind of avoid the massive amount of code that you would import otherwise.

**Jerod Santo:** Yeah, absolutely. Especially for the simple ones. I know a lot of companies would not have gone offline had they just copied Leftpad into their codebase, versus depending upon it. Because when it disappeared, they would not have their builds broken. That's one example. That being said, a lot of your dependencies aren't so simple as copy-pasting a single function.

But I agree, if you can copy and paste a couple of functions, or even just take the thought there and rewrite it for your specific needs and own it that way, then at least when Ken's company comes by, they've got to audit it for you. They can't just say "Uh-oh, it's a dependency. Off limits."

Well, speaking of limiting surface area, number nine is about untrusted data. It seems like a common thing, especially in the PHP world, is people kind of willy-nilly deserializing stuff that they shouldn't. It sounds like this is a way that you get a lot of compromises.

**Ken Kantzer:** Yeah, we saw a lot of this on the PHP side. I don't know why PHP developers like serializing and deserializing objects, and storing serialized objects in databases and then using them. There must be something that's difficult otherwise. But the problem is that when you allow a user to have any control whatsoever about that, the contents of that serialized object, you suddenly basically give them the equivalent of like remote code execution. And I think it's not quite as obvious in the case of serializing and deserializing, and some of these other things like prototype pollution, that you're really giving them that much control... Because a lot of times the path to getting controls is a little -- you use weird features of a language.

I know there's some weird prototype pollution like thing in Rails, but the way to exploit it is like, you have to know that Rails objects have some pretty weird functions that get inherited; and they are like pretty powerful functions. You wouldn't see these functions in your everyday use of Rails as a normal developer. And so maybe that's why it's so prevalent.

**Jerod Santo:** Yes. Well, Ruby is highly dynamic, and so any language that is that dynamic and has features, not just reflection, introspection, but also things like method missing... Where, you know, in Ruby if you call a method on an object that's missing, there's a special function or a special method called method missing, where it can still execute other things... Which is very handy when you're creating DSLs and doing all sorts of cool metaprogramming, but it's not super-handy when you're trying to build a locked down, secure system.

\[58:25\] Now, it seems like this PHP problem or this deserialization problem probably would also be a situation where if you're using some sort of a library that people have worked on in order to handle the edge cases of this problem, you might be better off, or -- hey, just use JSON, right? Just use JSON and reconstruct those objects on your own.

**Ken Kantzer:** So PHP I think has like several attempts of this in the standard library, to like successively solve the problem. They keep on trying to fix it...

**Jerod Santo:** Once and for all?

**Ken Kantzer:** Yeah, exactly. That's why we eventually just started -- it got complicated to recommend something there, and so that's where we ended up with our recommendation being "I know it's a little bit more work... Use JSON, pass user data as JSON, in your own code do the right checks and construct the object on your side." It's a little bit more work, but it gets very hairy otherwise.

**Jerod Santo:** Number ten, "Business logic flaws were rare, but when we found them, they tended to be epically bad."

**Ken Kantzer:** Yeah.

**Jerod Santo:** You probably can't speak in specifics here. Name names...

**Ken Kantzer:** Yeah.

**Adam Stacoviak:** I think free accounts, man... Free accounts.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** We've just experienced this. Like, free for a little bit because of a business logic issue, probably...

**Jerod Santo:** Oh, yeah. We had a free account from one of our service providers for a while, because bad business logic put us into some weird state where we were both trialing... It's like, we were half-enterprise, half-trialing, and things were working that shouldn't have been, and they weren't billing us, and we had to like actually contact them multiple times and be like, "Will you please bill us? Because we're not paying for this thing because of business logic flaws." We won't name names either. But if you want to, Ken, we're not gonna stop you.

**Ken Kantzer:** I'll just give the classic example you pick up in security trainings, which is banks that would accept negative deposits. Or negative withdrawals maybe. I forget which one it is. But that's like the classic canonical "Business logic leads to people literally being able to create money for themselves." And the funny thing is a lot of these -- I do not profess to be a Web 3 or smart contracts expert. We never did any smart contracts auditing. But I have been following with this mix of fascination and horror some of these smart contract heists that are happening... And really, what it boils down to is that exact bank scenario. Maybe a little bit more complicated these days, but people find -- it turns out that code could be perfectly correct, but can still be exploited and manipulated. It's just been fascinating to see those take off.

Yeah, I would say the handful of times where we like called up clients and let them know that something was horribly, horribly wrong, it tended to be a business logic thing, rather than an exploit in some weird function that they had.

**Adam Stacoviak:** In the smart contract case, what happened? What made the exploit happen? Was it poorly written code in the smart contract, or was it the person, the human error didn't pay attention to the details? What was the true flaw?

**Ken Kantzer:** \[01:01:47.11\] So the one that happened the most recently, that I think I linked to in the article, is related to DeFi. Essentially, the smart contract had logic in it for being able to almost like index a lot of different cryptocurrencies and autobalance them. And so what the guy did was he found a way to inject a lot of like a very cheap cryptocurrency into the pool that was used for calculating the balance of the index, and through everything that was completely legal within the smart contract, was able to extract tons of money from the system. And maybe it's similar to how the stock market gets manipulated sometimes, like pumping and dumping stocks. It felt a lot like that. It was legal, perfectly legal within the system, but it just was not the original intention of the developers.

**Jerod Santo:** It's kind of like when you test a system, and the tests prove that the system works as specified, but the system is not designed correctly. And so the test is actually not helping you at all. It's just telling you that it's it works as it's written. So 100% test coverage does not mean that your bank is not going to let a negative deposit add to an account.

Well, when it comes to auditing, I think smart contract auditors are probably making pretty good money these days. They're well-employed, aren't they, Ken? You probably have a better view into that world than we do in terms of the auditing side. That's good business right now?

**Ken Kantzer:** Oh, yeah. Auditing, and also just bug bounties. I think I read somewhere that someone found a bug in Ethereum, and the bounty was like $10 million, which is -- that's a lot of money. It definitely dwarfs -- the interesting thing is it dwarfs a lot of the bug bounty money in like traditional software. I think Apple three or four years ago made huge news in that they upped their like top bounty, if you find a vulnerability in iOS or something to like a million, and that was huge news, because it was like 10 times more than anyone else was giving out. And now you have the smart contracts, where there's tons of money flowing through, and the bounties are even higher.

**Break:** \[01:04:09.03\]

**Jerod Santo:** Alright, we've gotta move on. You know I'm a completionist, Adam. Are we gonna make it? What do you think?

**Adam Stacoviak:** Five more to go...

**Jerod Santo:** Okay, number eleven... "Custom fuzzing is surprisingly effective." Can you first describe what custom fuzzing is for us and our listeners? And then why is it a surprise that it's effective?

**Ken Kantzer:** Sure. So fuzzing is when you programmatically send random or pseudo-random inputs into the code that you're testing. And you have some mechanism on the other end to kind of judge whether that random input produced an unexpected result. So that's what fuzzing is.

The thing that we would do for custom fuzzing is usually against APIs. So we would go into a company, we'd have a limited time to audit, and we'd have like 400 API routes that we wanted to cover. And rather than painstakingly review each single one completely thoroughly, what we would first do to kind of target our assessment is we would send bad input to all those APIs.

A really great example of that is we'd send an authorized request, and an unauthorized request. And if our authorized request got a 200, and our unauthorized request also got to a 200, that would probably be a bad sign. You don't want two hundreds for requests that should be authorized. They should be getting like a 403. And so it really was as simple as that... It's like, look at status codes that come back and see if there's anything that was weird. And then those are the areas you could focus on later on in the audit. And that was surprisingly effective.

**Jerod Santo:** Are there any toolkits or auditing things that you would use regularly? I'm sure you'd take that suite of custom fuzzers and probably run it against the next audit You'd kind of build up a cache of things that you run all the time, because why not; once you've written it once, why not run it against the next endpoint. But were there like common tools that you just recommend all auditors put in their toolbox?

**Ken Kantzer:** Yeah, so I know Burp Suite does custom fuzzing, but to be honest with you, actually, we would build it custom each time.

**Jerod Santo:** Oh, yeah?

**Ken Kantzer:** \[01:09:40.12\] In retrospect, maybe there is something we could have done... But I think the reason why we did that was because there were just a ton of different authorization methods, and we just never found a tool that was like -- it turns out every app in some ways is its own unique gem - pun intended - and... You wanted to write custom code and it turned out to not be super-hard to do that... And it worked for us, at least on the scale of like 20 audits. If you think about it, like -- look, I mean, 20 audits was enough to start forming interesting observations, but if you're a full-time pen tester or code auditor, there are companies that do hundreds a year, so I'm sure it would make sense for them at that scale to write and support a home framework on this.

**Jerod Santo:** Number twelve, "Acquisitions complicated security quite a bit." That's a common thing in startup land, is to acquire and be acquired. And surely, that complicates codebases and org structures and everything. How does it complicate an audit?

**Ken Kantzer:** I think it starts being -- as soon as you do an acquisition, you start thinking about integration, and how to integrate. There's so many different ways you could do it. You could just literally dump data from one side to the other, and keep it straightforward. You can integrate via API... And it was really hard to scope things. So like, we'd get in and a company would be like, "Oh, well we just want you to audit this app" and then we'd get in and find out there were significant integrations with another product that they had... And that's what made it difficult. The boundaries, as soon as you do the acquisition, they start blurring. And that's really where it gets really tricky. It also gets more expensive.

Doing an audit of three products is not unsurprisingly more expensive than just doing the audit of one product. I think a lot of startups didn't anticipate the increase in costs from this perspective. They were like, "Oh, can't we just have you do your normal 100-hour block and just look at three or four more products?" And it's like, "Well, actually, that's more code, and they interact, and so it's more money." That was surprising, I think, to a lot of the startups.

**Adam Stacoviak:** What's interesting is how you spend that time, really. I've been thinking about this during this conversation, because I'm thinking, like, when you get awarded this block, let's say, to audit one product - how do you discern how to spend that time? Does your client/customer tell you? How do you prioritize? That's just gotta be interesting. Because like you were saying, you build your own software... That's gonna spend at least an hour or two. I mean, you've probably done it 20 times; maybe you're getting more efficient every time you write the script, because you handroll it every time, but... Prioritizing how you spend those hours is interesting. And it's gotta be interesting to also get them to buy another block. Not that you're trying to sell more, actually like we use this 40-hour block pretty easily, because you've got issues, okay? We've gotta do more." I don't know, I've just been thinking about that as we've been talking, how you prioritize your time.

**Ken Kantzer:** Yeah. It's tough. And the honest truth is the block size is arbitrary, in a sense. It's super-standard amongst auditors to do this, because if you think about it, any other way, you can never really predict it. We had a list of hotspots, like a checklist for every app; we would look at authentication, authorization logic. Like, how were they determining who could get access to what. We would look at validation, so how are they validating that the parameters on an API request were in fact, what they were expecting. There was a whole handful of those. And then honestly, we would also ask the devs, we would say like, "Where in the code keeps you up at night?" We wouldn't treat that as God's truth, but... You know, developers have a surprisingly good sense, even without security knowledge, of what parts of the code are scary, and they're kind of worried about. They definitely have blind spots. That's definitely true. But in terms of like -- when we're talking about business logic, a lot of times they'll be like, "Yeah, this part is super gnarly. There's a ton of logic here, and it kind of works, but it also breaks a decent amount, and it's an important functionality for the app, so please check that out." So those two things really help to prioritize.

**Adam Stacoviak:** \[01:14:08.21\] That scary intuition reminds me of Severance, honestly. It's like, "Well, I can easily spot the scary numbers here."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** This next one's actually quite interesting, because - I'll read this one if you don't mind, Jerod... Number 13, "There's always at least one closet security enthusiast among the software engineers."

**Jerod Santo:** I love that.

**Adam Stacoviak:** And one thing you say in there is that there you're always surprised, because they never know it's them. It's like "There's somebody..." So our listeners, look left, look right on your team. One of you is a security enthusiast and you don't even know it.

**Jerod Santo:** \[laughs\] How would they find out?

**Adam Stacoviak:** They get told by the auditors.

**Ken Kantzer:** Yeah, we would let their managers know and let them know as well, a lot of times. So yeah, I love this one, and it makes me so happy that this is the case... But even in my current role I've had some of my engineers come up to me chatting with them for like 20 minutes, and then they casually drop this cryptography concept into the conversation and I'm like, "Oh. Hm... Tell me what you know about crypto." And they're like--

**Adam Stacoviak:** "What newsletters are you reading?!"

**Ken Kantzer:** Yeah, and they're like, "Oh, well, like, blah-blah..." and I'm like, "Oh my God, you know a ton about security. That's awesome." I think developers don't really think of it as like a viable career path, in some ways, because they think of security in terms of IT security, which is not unexpected. And so they're like, "Oh, you can spend all of your time focusing on like software security? People will pay you to do that? I just thought I would do that on my own, because it's kind of fun and interesting." So I think that's part of it.

But yeah, it was always fun working and kind of like having that a-ha moment with someone where they made a comment, you kind of dig a little deeper, and it turns out they're super into security and do you stuff on their own time on it.

**Adam Stacoviak:** One thing you say is having these folks be reliably identified... So what will be the feedback to the manager team, company, etc. to like how could they better leverage this individual and their passion/knowledge?

**Ken Kantzer:** Yeah, I think one way is a lot of times for like a secure software development lifecycle there's a step in it where the reality is if the developer is making a particular pull request or commit - it's their job to kind of alert someone on the security team that this is a potentially sensitive commit, and we want someone on the security team to review it. And these people who are secret security enthusiast are great people to pick up on that. They're oftentimes very curious, and naturally, when they see a given piece of code, think like, "Oh, I wonder how this would be exploitable." And so for a manager, they can be like, "Hey, when you think, don't just think to yourself. Flag the security team."

**Jerod Santo:** If you see a piece of software and you think, "What's the weirdest way I could use this?" you might be a security enthusiast. \[laughter\] Certain people can just break stuff. Maybe even on accident. But they just don't use things the way the rest of us -- I mean, there is no such thing as the rest of us, but the way a developer might think you would use it; they're just gonna use it in this weird way, and they can just have a knack for breaking things. And then if you pair that with the enthusiasm and the interest - well, then you might have magic on your hands there.

Number 14, "Quick turnarounds on fixing vulnerabilities usually correlated with general engineering, operational excellence." So if you leave a list of to do's and you come back later and they're not done yet, especially when it's like high, high-risk security vulnerabilities, that's not excellent. Is that what you're saying? That's not very good?

**Ken Kantzer:** \[01:17:58.12\] Yeah.

**Jerod Santo:** Does that happen a lot?

**Ken Kantzer:** Yeah, yeah, definitely. I think a lot of it has to do with classical DevOpsy things... Like, okay, it becomes a lot harder to fix security issues if you don't have an automated test suite. It becomes a lot harder to fix security issues if you deploy once a quarter. The traditional DevOps things apply directly to this; I think that's a big chunk of it. So like maybe a more refined way of saying this one is like, the ability to turn around quick security vulnerability fixes is correlated to good CI/CD, good DevOps.

**Jerod Santo:** Right. So if we can go back to number one, tie this one together, and I realize you're just doing this based on intuition, or whatever. Can you correlate operational excellence to startup success? Or there's no correlation there either.

**Ken Kantzer:** That's a really good question. I think you can correlate it with operational success, but there's so many different axes of operational success. Like, are we really good at hiring? Are we really good at coming up with good Scrum patterns for our teams that they buy into? I think operational success - maybe that matters for being tied to like product success. There was just like a ton of discipline on product development. I don't know if you guys have looked -- so Basecamp writes like a bunch of stuff on remote, but one of their earliest things was actually on like software development and how they do product... And they have this amazing observation, which is like -- one of the chapters is called "It doesn't matter. It just doesn't matter." And their point is like, a lot of times you get into these product and feature discussions, and the answer is like, "It just doesn't matter. It doesn't matter if the button is on the right or on the left." Maybe it matters like a smidgen, but it won't matter for the success of your product.

I've just found that a lot of the startups that I looked back on are worth like a half a billion dollars, and when we audited them they had like four developers, and I was like, "I don't know if they're gonna make it." And now I'm like, "Ah, I'm so pleased." They were just really disciplined about that. They were just very focused. And that's a form of operational excellence. They may not have had -- like, they may have been messy in other ways, but they were really disciplined where it counted.

**Jerod Santo:** Where it really mattered. Yeah.

**Adam Stacoviak:** What about the ones where you say -- you said the best cases were clients who asked us to just give them a constant feed of anything you'd found, and they'd fix it right away. What about those ones? Like, those ones who like, yearn for "Where are the bugs, where the issues? We want them to be squashed and fixed right now." Versus like, can get Scrum better, or can hire better. Like, specifically, this engineering practice where security in these vulnerabilities you showcased - like, correlate that to success, if you can think back.

**Ken Kantzer:** Yeah... So the most obvious correlation is that those same people who asked us to give them a steady feed were very agile and informal in their processes, and had a bias towards. That that's the closest I'll be able to say it, which maybe in some definitions of operational excellence isn't. But they were very informal. They're like, "Yeah, we'll just give you access to our GitHub repo, and just make an issue there. Don't give me a spreadsheet. I don't want have to convert a spreadsheet to our JIRA board, and then convert the JIRA board ticket to an issue and PR in GitHub."

**Adam Stacoviak:** Yeah, less red tape.

**Ken Kantzer:** Yeah, exactly. And they sometimes went a step further, like "Make a PR. Would you be willing to make a PR?" And those were like, "Ah, this is great." Like, there's high trust there that we wouldn't screw things up. And I know, it felt good, it felt very productive to be on those teams, and I'm sure the engineers on those teams felt the same way.

**Adam Stacoviak:** \[01:22:01.09\] The analogy I would probably bring in here would be -- and I think this might be the actual analogy, so correct me if it's not... But there's this saying that says "The car doesn't make the driver, the driver makes the car." And so if the product/company were trying to gauge the possibility of success based upon the ability of the thing that gets them there, which is the software, the product, the vehicle, so to speak - you know, just because the software and the team and everything is secure and amazing doesn't mean that the product would actually win. So it does take an adequate product to make it in the marketplace... Assuming no one's gonna work on something that isn't worthwhile, but you know... That's my point. It's almost like if you've got good tires on your car, does that mean you can corner? Maybe...

**Jerod Santo:** Maybe...

**Adam Stacoviak:** You might be the kind of driver that can do it. Somebody else can drift, and maybe you can't. That depends on the tires and it depends on the driver. So something in there is probably my assumption based on what I'm hearing from you.

**Jerod Santo:** Lots of factors, lots of factors. It sounds like JWT is hard. JSON Web Tokens. Not to change the subject, but... Number 15, "People get JWT wrong. People get WebHooks wrong." These were common areas of vulnerabilities. What's the lesson learned there? Just don't use JWT, or...?

**Ken Kantzer:** Yeah, I think you could say don't use JWT, but --

**Jerod Santo:** "If you're using JWT, double-check your implementation."

**Ken Kantzer:** Yeah...

**Jerod Santo:** "Put the podcast down and go check it right now."

**Ken Kantzer:** I think it's just they're a good intersection of things that devs don't understand super-well. So both JWT and WebHooks fall in that category. They're not like a super-common thing that you come across every day, and things where security does actually matter quite a bit. With WebHooks, it's pretty simple. Essentially, when you have a WebHook, you have an open receiver to someone else's -- that you're allowing a third party to like hit kind of arbitrarily...

**Jerod Santo:** Right.

**Ken Kantzer:** And the big problem there is, you know, I may be setting up a WebHook with Stripe to receive sign-up requests from them in real time... But there's nothing that says that Stripe is the only person who can hit that endpoint. It sounds simple when I say it like that, but a lot of times we tell devs that and you just see their eyes widen slowly... And then you'll always see the guy who like leans in, he's like very clearly going to the repo and trying some stuff...

**Jerod Santo:** Right.

**Ken Kantzer:** So it's not super-clever. It's just one of those things where--

**Jerod Santo:** They just forget to set up the authentication part to authenticate third party.

**Ken Kantzer:** Exactly. There are some WebHook implementations by relatively large third parties (that I won't name) that don't allow for authentication. That's a whole separate issue. That is really bad. But yeah, generally it's like "Oh, I didn't read the part of the document, that red box in the documentation that said, "By the way, you should also include this authentication token with the request in WebHooks."

**Jerod Santo:** So if you don't do that, someone could denial-of-service you, somebody could fill up your database with just garbled data... What other stuff can they do if they can hit your WebHook endpoint? I guess it depends on what it does.

**Ken Kantzer:** Yeah, yeah. A lot of times, it's pretty bad. Maybe you're an eCommerce site and the WebHook allows you to process returns from like a third-party service used for returns, and so now all of a sudden you get a lot of fake returns.

Stripe was a really common one, where - you know, now you're dealing with money, so that's pretty bad, in general. Or subscriptions... Yeah. So usually, it goes back to the business logic thing. A lot of times these were also -- you have the WebHook there for it to perform some pretty important business logic function.

**Jerod Santo:** \[01:26:02.29\] Yeah, so one example -- Adam and I were just talking about a Stripe WebHook today, about setting one up for our Changelog++ members. When they sign up for Changelog++, it goes through Stripe, and we could set up a WebHook so that we receive notice of that and then generate them a coupon code for a free sticker pack on our merch shop.

And if we just let anybody hit that endpoint at any time, then they could just generate a whole bunch of coupon codes that are junk, or send them out to their friends, or whatever.

So JWT, it sounds like you said not only do people get it wrong if you're implementing it yourself, but also a lot of libraries have vulnerabilities as well. So it's pretty fraught, it sounds like.

**Ken Kantzer:** Yeah. There was a pretty bad class break maybe five years ago with almost every single JWT library out there, where in a JWT token one of the fields specifies the algorithm that's supposed to be used, and for some insane reason that I still don't understand, you can literally set that field to the word "none", or like no algo. And when you do that, the intention is like -- okay, this is a JWT token that's probably coming from an internal system, and I don't need to like validate that the token is actually signed. But it turns out that almost every JWT library out there didn't do some sort of check when there was no algo included to see if the signature field was blank... And so an attacker just set no algo, and then the signature field would never be validated, and it totally broke JWT.

So that's an example where even the people writing the open source code got it wrong... But hey, it was also fixed. So the flipside of it is like no one ever did better than those libraries. Every single time people decided to handroll JWT, they did something wrong... Because signature validation or JWT is complicated. It's a crypto thing, and it turns out crypto is hard. So yeah, I think that's an example where even though the open source stuff had vulnerabilities, I would still highly, highly recommend everyone use the open source stuff, rather than rolling their own.

**Jerod Santo:** Don't roll your own crypto. Don't roll your own JWT, don't use MD5 anymore. Your last point, number 16. We've made it, friends. We've made it to the end. There's a lot of MD5 out there still.

**Adam Stacoviak:** Ooh, what a marathon.

**Jerod Santo:** Yeah. It's been a good one though. But it sounds like most of the MD5 out there isn't really doing anything that's damaging.

**Ken Kantzer:** Yeah, I feel like most people know now that MD5 hashing is not the right hashing algorithm to use. You should be using SHA-3 now, or something. And there's been a lot of publicity on that front. But we're now getting at the bottom of the list - this one is just kind of like a quirky, hipster observation. Actually, because everyone knows this, I'm gonna say that it doesn't matter, actually.

We've just found that especially -- I don't know, we've never found a case where someone was using MD5 to hash for example like a password. That's what you don't want, right? You don't want people to use it as hashing algorithm for passwords.

**Jerod Santo:** Totally.

**Ken Kantzer:** But it turns out people still use MD5 for other reasons that are good. Like, it's pretty fast... I think someone in my blog pointed out that SHA-1 is faster, because there's a lot of hardware optimizations for it. They leverage some special hardware modules... But it's fast -- I don't know, it turns out people use MD5 for things other than super-secure things. So that was just kind of a quirky observation.

**Adam Stacoviak:** Yeah. And for those who may not know - so it may be bad to use it, but why? What happened with MD5? What's the why for that?

**Ken Kantzer:** \[01:29:54.08\] Yeah. So if anyone wants to learn about crypto, hashes are a really great place to start. And basically, the idea with a hash is you take some arbitrary-sized input, and it will map it down to another -- like, usually, in the case of hashing algorithms, it will match it out to like a Base64-looking string. And the way security with hashing works is you don't want what's called collision. You don't want two inputs that are completely different to map to the same Base64(ish) string. The reason why is because usually the exact reason why you use a hashing algorithm, is because you believe that collisions are...

**Adam Stacoviak:** Unique, yeah.

**Ken Kantzer:** ...yeah, almost never happened. And so MD5, it turns out, over the last 20 or 30 years, people have gotten more and more clever about identifying collisions... To the point where now like it's pretty arbitrarily simple, given almost any input, to find another input that's a collision. And there's a lot of clever math that goes into that that I don't know... But that's

generally how it works. \[laughter\]

**Adam Stacoviak:** Yeah. Are you a fan -- sorry, Jerod, I have to do this... Are you a fan of Silicon Valley, the TV show?

**Ken Kantzer:** Silicon Valley?

**Adam Stacoviak:** The TV show, yeah.

**Ken Kantzer:** Yeah. Funny story about that - I think it was the first or second year at PKC, so this was like 2014-2015. I think it had been out for a while, maybe... But we were actually in the middle of building a product. So we built an end-to-end encrypted alternative to Slack called Balboa. Awesome experience. We decided to build it in Clojure, which is probably not the best choice ever... But it's a great language, and it's a lot of fun. So we were in kind of like the middle of building a product, and thinking about VC funding, and so we started watching the show with the original three founders... And halfway through the show, I look over, I'm like, "Wait, Dan's missing." One of the founders. We're like "Where the hell is Dan?"

We go into like this bedroom, and he's on the floor in like a fetal position... And we're like, "Are you okay?" He's like, "I can't, I can't take it. It's too much."

**Jerod Santo:** \[laughs\]

**Ken Kantzer:** So like, that's my view on Silicon Valley. It's an awesome show, but if you're actually going through--

**Adam Stacoviak:** It was too close to home.

**Ken Kantzer:** Yeah. If you're actually going through that, it's some of the most painful TV to watch, because it's just so true. It's great.

**Adam Stacoviak:** Okay. Well, thank you for that story. Season six, the very last season - I don't want to spoil the show for anybody, but essentially, they had built an AI that could predictably undo an algorithm like this. They could undo a hash; so they had broken MD5, they had broken SHA-1, they'd broken through all these different encryption algorithms, essentially... That's why I brought it up. I was just curious if you had known that, because that's part of the show, and it's pretty interesting to see like that at some point AI can be so smart to defy our security protocols by reverse-engineering the algorithms that protect us and our privacy.

**Ken Kantzer:** I have not seen that. That sounds incredibly scary though...

**Adam Stacoviak:** Yeah. You should watch -- well, if season one scared the crap out of your co-founder, maybe you shouldn't watch season six, because that is the ending...

**Jerod Santo:** You're not gonna make it at six seasons...

**Adam Stacoviak:** Very good though. But that's an interesting thought pattern... Like, we're producing such powerful computers, and while collisions may be the issue with MD5, which is basically an implementation flaw of the encryption algorithm... You know, at some point, can we develop such technology that we can break these encryption algorithms? Otherwise, through AI or through learnings, that's an interesting thought pattern. So I thought maybe someone like you might have watched that and could entertain me a bit.

**Ken Kantzer:** Yeah. No, in some ways, hashing is like a great use case for AI, because you can generate inputs, right? A lot of times, coming up with effective machine learning requires you to have a very large sample size, and you can't like just make it up. But in crypto, it turns out you can. It's called the oracle, right? I ask the MD5 oracle, and I get a response. I can do that a million times, and then hand the output to a machine learning algorithm, and say "Hey, are you able to correlate one to the other?"

**Adam Stacoviak:** \[01:34:23.23\] Right.

**Ken Kantzer:** Like, "I just gave you 5 billion inputs. You should be able to." And I liked that idea a lot.

**Adam Stacoviak:** Yeah. Well, that's the scary future. That's what had one of the stars say -- he said, "How should I feel right now?" He said "For you, abject terror." And that's all I'm gonna say. It was just hilarious. Phenomenal lines in the show. I mean, you're missing out. If you've heard me mention Silicon Valley and Jerod rolls his eyes, which you don't get to see, because it's an audio podcast, you're missing out. Watch it even if you curl up into a ball in season one. Persevere.

**Jerod Santo:** Curl up into a ball on your couch and watch some Silicon Valley. Long-time listeners of this show have already been spoiled multiple times, as Adam brings it up pretty much weekly, but...

**Adam Stacoviak:** I have to.

**Jerod Santo:** ...it's so relevant.

**Adam Stacoviak:** There's such correlation. There's such correlation. It really is.

**Jerod Santo:** Well, Ken, we've reached the end of your learnings... And it's been a long one. It's been a good one. I appreciate you joining us and talking through all this. First of all, I appreciate you writing it all down, so folks can learn alongside you. There's definitely a lot to be learned from people's experience, especially being like an outsider, getting to see the inside of so many startups and how they do what they do, what they're good at, what they're bad at, what correlates and what does not correlate in the startup success... Interesting stuff, for sure.

**Ken Kantzer:** Yeah, yeah. Thanks, guys, for having me. It's been a pleasure.

**Jerod Santo:** Is there anything we didn't cover, any ground left fertile that you want to talk about before we call it a show?

**Ken Kantzer:** You know, I was very surprised that the article was so popular. I got over 300,000 views on my blog as a result of this... And I don't know how much you guys are following, like, the market, and the tech scene market... I think it's like, it's on a lot of--

**Adam Stacoviak:** Very closely.

**Ken Kantzer:** ...devs minds... Yeah, it's important, right? Especially if you work at a start-up and you're in engineering. And I don't know, just my meta observations - I think maybe one of the reasons why this type of article was more interesting is like a lot of devs are asking questions about what has been considered maybe like standard startup truth. For example, if we aren't growing our engineering organization, we aren't growing as a company. The first point kind of speaks to that. And I think it struck a chord, because people are starting to question a lot of dogma within the engineering world, as a result of some of the market changing and forcing us to ask really hard questions of ourselves.

**Jerod Santo:** Well said

**Adam Stacoviak:** It's been good hearing your wisdom, both on this show and reading it as well. Thank you, for as Jared said, for putting this out. I mean, if we don't have folks like you go down hard roads and do a retrospective for us to learn from, what would the world be? We need more people like you, Ken. So thank you for going down that hard road, thank you for sharing that wisdom. We appreciate your time here today.

**Ken Kantzer:** Yeah, thanks, guys.
