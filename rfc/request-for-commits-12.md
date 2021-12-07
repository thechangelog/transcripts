**Break:** \[00:00\]

**Nadia Eghbal:** I'm Nadia Eghbal.

**Mikeal Rogers:** And I'm Mikeal Rogers.

**Nadia Eghbal:** On today's show, Mikeal and I talked with Evan You. Evan is the creator of Vue.js, a JavaScript framework that recently reached two million downloads. Evan works full-time on Vue and currently funds his work through Patreon.

**Mikeal Rogers:** Our focus with Evan was crowdfunding and community organizing. We talked about what it's like to use Patreon to fully fund yourself, why he decided to do it, and how he balances his own paid work for the growing community of contributors.

**Nadia Eghbal:** We also talked about running a community project in the midst of other corporate players and where he sees the future of Vue.

Evan, you started Vue while you were at Google... Is that also where you started getting into open source, or did you have a background in open source before then?

**Evan You:** Well, it's an interesting question because I had a small project when I was still in school called HTML5 Player. It was kind of like my first ever project that got some attention. It had several hundred stars on GitHub. That was my first taste of people paying attention to your open source work. But it was not particularly an open source project, it was more like just some code that I decided to post online for whatever reason... So I think Vue is technically the first open source project that I put online and was dedicated to maintaining it.

**Nadia Eghbal:** Pretty awesome first experience.

**Evan You:** It depends on how we define it, yeah.

**Nadia Eghbal:** Did you contribute to open source before then, or...?

**Evan You:** I think I did a little bit... I think I started contributing more as I started working on Vue, because when I was working on Vue I also used other people's projects, and I started to run into bugs in their projects, and I started submitting PRs to fix them so that I could use them for Vue.

**Nadia Eghbal:** \[04:01\] Nice! So was that like completely terrifying then, that Vue was your first intense open source experience?

**Evan You:** I would say that, yeah.

**Mikeal Rogers:** Why did you end up making Vue? What was the impetus behind getting that created?

**Evan You:** I think in the beginning the motive was very simple. It was something I wish I had when I worked on some of the projects I was working on. At the same time, it seemed like a good opportunity to just flex some technical muscles and sort of like -- the feeling that we see some great ideas or some interesting ideas that you see in other people's code, and you just want to try it out and write it yourself and see if you can actually implement it. It's a combination of the two.

The motive for the project changed over time. It started more like an experiment, but it gradually evolved into something that I want to open source and maintain, but it was more like just giving it a shot, and it turned out people were actually liking it. The more people used it, the more responsibility I felt that I should keep it well maintained, and the more I felt motivated to make it better.

The scope of the project grew, and I guess the goal for the project also kind of evolved along the way. The goal today I would say is more like providing a framework that helps make it easier for people to build the applications. It sounds crazy ambitious. When I first started, that was definitely not what I had in mind.

**Mikeal Rogers:** You said that there were some projects that you were doing at Google at the time that kind of drove you needing it... What were those kinds of projects and what are the kinds of projects that people are using it for now and is there any difference between those?

**Evan You:** Yeah, definitely a lot of difference. The department that I worked at Google was called Google Creative Lab. It's a very special department where we don't work in production engineering products, but instead we work on a lot of prototypes, experiments... Some of the projects were more like things you saw with Chrome experiments, but some of them were internal and they were a collaboration between the product teams, and it helped them design the next iteration of what their products would look like.

Some of them would be super experimental, like just imagining what this product could be in five years or ten years. These required a lot of rapid prototyping, where we would maybe come up with 3-4 crazy ideas and we want to see them become tangible in a very short amount of time. Basically, my job was to create these things as a web-based prototype.

The whole idea was I needed to turn ideas into tangible prototypes as fast as possible... Some of the common elements in building web applications today, for example we want declarative rendering and components and all that would become very helpful in these scenarios too, but at the same time they probably didn't need some of the things that were geared towards larger scale applications, so that is why I felt Angular was a bit too heavy for my use case at that time.

The initial version of Vue was essentially a version that extracted the parts that I felt useful from Angular and threw away the things I felt I didn't need at that time.

**Mikeal Rogers:** \[08:10\] So now that the project has grown, presumably people are using it for more than just quick applications, like they actually need to maintain it. Has that shifted some of the goals of the project, or have you really maintained that you don't wanna sacrifice any of that speed?

**Evan You:** Yeah, that's interesting... Obviously, there are many people using Vue to build large production apps today, and the framework today is also very well-suited for those purposes. But this initial version of Vue that focused on this ease of use and this use case for rapid prototyping is still there today. So as we look at how you can use Vue, you can still use Vue by just dropping it into an HTML page with just a script tag or a link to a CDN file and instantly start writing code.

This is kind of now a feature that we had when Vue was initially released, and it's still true today. Alternatively, if you want to build the professional way, you can obviously use our CLI to scaffold a full project, with boilerplates and Webpack and all the build tools, testing tools, with all the fancy stuff built in. So we offer different tasks, depending on how much you actually want from the framework.

This is also why we call it a progressive framework, because it's incrementally adoptable. You can use very small pieces, just the core, for simple use cases, for rapid prototyping, but you can use the full stack for more ambitious apps. So the whole stack is incrementally adoptable; you don't have to use everything all at once.

**Nadia Eghbal:** I have a question about the early stages of Vue... I read that the Chinese community had kind of helped you find popularity around Vue and get it out there... Can you talk a little bit about your involvement with the Chinese developer community?

**Evan You:** Sure. I myself am Chinese; I grew up in China and I came to the U.S. after high school. I also am pretty active on the Chinese social networks - basically, the Chinese version of Twitter, the Chinese version of Quora, and I will obviously talk about Vue or answer your questions about Vue on those social networks.

Interestingly, a lot of people discover Vue first because of -- it's kind of like Vue got popular in the U.S. and then some people in China discovered it and realized "Oh, this is actually written by a Chinese guy" and they got really excited about it. Then they found out I'm actually active on Chinese social networks.

It was kind of an interesting round trip, but somehow Vue also got really popular in China. I'm not sure how much of my social network stuff contributed to it, but I think me being Chinese definitely played a role in it... But it's also because maybe in Chinese also helped some contributors from China to voluntarily translate the docs into Chinese, which helped a lot in the adoption.

**Nadia Eghbal:** That's awesome.

**Evan You:** Yeah.

**Nadia Eghbal:** The thing is it all happened pretty naturally. I didn't intentionally try to promote it in any way. I think probably the biggest contributing factor in Vue's popularity in China is because of my answers on Zhihu which is sort of like the Chinese equivalent of Quora.

\[11:59\] A lot of people directly ask questions about Vue and then ask me to answer it. A lot of times, when I have nothing better to do, I just answer those questions. I think that helped people a lot; it made them feel connected to this project more, because they were able to see the direct interaction with the author of the framework and it made them feel like the project is more connected with them.

An equivalent example would be Dan Abramov interacts a lot with React users, and I think that helps a lot of users connect with React better. So I guess that's the positive part of having someone representing a framework being really active on social networks.

**Nadia Eghbal:** That's awesome.

**Mikeal Rogers:** Yeah, I've seen this in the Node community, too. There are certain projects where because the maintainers are in China and available on the social networks, there is just more localized support for it. It's not like those projects aren't used anywhere else, but they certainly have more of a following in China than elsewhere, which is really interesting. I've noticed with the coroutines stuff in Node.js. There's a lot of people that follow that, particularly in China.

**Evan You:** Yeah, I think one of the core maintainers of Koa is Chinese, and a lot of the active Node contributors are from Alibaba, because they use Node.js pretty heavily in production, and they've open sourced a lot of modules. I think it's a very good thing; they contributed a lot to Node.js's popularity in China because of all the open source work they do.

**Nadia Eghbal:** From my perspective at least, being newer to open source, a lot of conversation at least seems dominated by the U.S., Europe and Australia... For the both you - have you noticed that developers outside of these areas can feel siloed off? How do you make them feel involved? It sounds like part of what was cool about Vue was that it just made them feel connected to you and to the project.

**Evan You:** I think primarily it's still the language and partly the cultural barriers - they're kind of inevitable. A lot of the developers in China - they can read and understand English, but a lot of them don't feel comfortable communicating in English. It's a lot of extra effort for them to say... The simplest example is when they want to open an issue. A lot of them have trouble just articulating some of the subtle concepts in programming using a language that is not native to them.

I think this is just a natural barrier for them to be able to contribute more, which is also why programmers in China often say "English is as important as your programming skills if you want to become a really good programmer." Because so much knowledge and so much open source work and so much resources are written in English, it is almost essential for a programmer to be proficient in English to be able to stay up to date with the latest resources.

Most of the programmers actually can read English, but when they try to use it to convey some of the more subtle concepts, it becomes a struggle. I think that's the primary reason for them to be less active on the main stage of open source. But because I'm Chinese, I'm able to get a peek at the Chinese open source scene - it's actually very active. It's mostly kind of siloed off because of the language barrier.

**Mikeal Rogers:** \[15:59\] Yeah, in the Node project we have some metrics, and it's huge. It's like 12% of all of our users, which is like a lot of people.

Moving along a little bit, I just wanted to know... You've taken a step to kind of go full-time working on Vue.js, or at least attempted to. What was that decision like? What made you wanna start working just on your open source project full-time, rather than also doing a lot of the other work that you've been up to?

**Evan You:** Yeah, so I was working for Meteor in 2015, I think... Wait - when was that? Yeah, 2016. Early 2016, that was when I started working on Vue full-time. Before that I was working for Meteor. At Meteor I already started feeling the pull of this unsustainability of having a day job and at the same time maintaining an open source project that's growing more and more popular. The amount of issues and maintenance and the growing scope of the project was just -- it just started feeling too much to be something that I work on in my spare time, and I felt it was not sustainable.

I started seriously thinking about which do I actually want to work on more, and I think the answer was "I want to work on Vue more." So that's when I started to think "Is there any possible way for me to turn this into my full-time job, instead of something I can only attend to in my spare time?" I guess that's kind of the question a lot of other open source maintainers are also asking right now. I didn't really have a good answer at that time. In fact I still don't, because the Patreon campaign was more like just an experiment or an explorative move on my part...

I thought that there were people sustaining themselves by creating content, and I compare that to Vue.js or I compare that to an open source project. I felt like "I'm working on this project and it's creating value for people. If I'm creating value for people, is there any way for them to somehow give back in a financial form so that I can sustain myself?" and this kind of model seemed probably the most direct model that I see. If someone uses my software and they feel like it has helped them, and they don't want the project to die, then at least they have an incentive to give me some money so that I can keep working on it.

So I started the campaign. I didn't really think too much about it, and I just threw it out there. It turns out people actually wanted to give me money, and some of the companies were really generous. I had the tiers of like $100/month, $500/month, and there was one tier that was $2,000/month. I put it out there just thinking no one would probably ever do it, but there was this company called Strikingly - it's a startup... They were a Wi-Fi company, but they somehow moved to China because the founders were Chinese and they couldn't get a U.S. visa... And they don't actually use Vue, but they have this fund that they just use to donate to open source projects that they felt were doing a good job. So they signed up for the $2,000 tier and they were basically saying "We liked your project, we want to support you, so we're just giving you $2,000/month."

That was a really huge help in the beginning. They did it for six months, and that was probably like -- if it wasn't for them, I don't think the campaign would ever grow to what it is today. Today we have like $9,000-ish a month, which is already enough for me to somehow sustain the family and all that.

\[20:17\] I still consider myself extremely lucky to have pulled this off. Whenever some other open source maintainer asks me for advice, I'm always hesitant to recommend them going this way because I don't feel this is something that's easily repeatable, and it really depends on how much traction you have gained, and it depends on what financial situation you're already in. I have some money saved up, and I was basically planning to do it for free for a few months just to see if it would ever work... But it turns out I got to $4,000/month pretty fast.

I was almost able to sustain myself, and it just kept growing until it became -- today I'm pretty proud to say I'm fully sustained by open source work.

**Nadia Eghbal:** That's awesome.

After the break, Nadia and Mikeal talk with Evan about how he's been able to make open source his full-time job, treating it like a job for better balance in life, better balance with his family. We also talk about an often uncomfortable topic - funding. Who should get paid? Where should money be spent? Should this project have a full-time paid developer and how to sustain that? All this and more after the break.

**Break:** \[21:47\]

**Evan You:** I felt that I wanted to work on Vue more as my full-time job... And I generally felt much, much better after I switched to working on Vue full-time, because now I can actually treat it like a job. I set hours for myself, I don't have to stay up late at night anymore, so I can actually spend time with family, having spare time as I actually should have, and I feel like this is something that's much more sustainable now than having a day job and working on it at the same time.

**Mikeal Rogers:** How many other contributors were there to the project when you started the Patreon campaign, and what does the team look like right now?

**Evan You:** I can't remember exactly how many when I started the Patreon campaign... I would say probably only a few. Today we have a pretty decently sized team, but we have like 20-ish people in the Vue.js organization on GitHub.

\[24:08\] The team is pretty loosely organized. Everyone is just contributing on a volunteer basis, and we don't have a very formal structure of assigning people tasks or expecting them to do something by a deadline.

The team also grows pretty organically. Whenever someone makes quality contributions on a regular basis for a while, I just invite them to the organization and ask them "Do you want to do this on a regular basis? Do you want to become a part of the team?" but overall it's still pretty loose. I don't really feel comfortable -- because they are doing voluntary work, I don't feel comfortable assigning them stuff as if it's their duty.

**Mikeal Rogers:** It's pretty easy to put yourself in that same position, being that you were just doing that recently. You wouldn't want people assigning things to you when you were working on it in your own time, right?

**Evan You:** Yeah, definitely. But I have to give a shoutout here, because the team is doing such an amazing job at dealing with the most tedious part of open source work, which is triaging the incoming issues. It think the amount of issues we get across the whole Vue.js organization is totally becoming unmanageable for one single person, and luckily we have a team helping me to filter out these issues that can be relatively easily dealt with, and leave me with the ones that are critical or are really important, so that I can better focus on the things that matter.

Other than that, obviously some of them also make high-quality contributions to the codebase itself, which are really helpful.

**Mikeal Rogers:** That's interesting... I wanna hear more about that. You have a growing community, people are taking on more responsibility, a lot of new stuff is rolling in... How did you end up pricing the Patreon campaign? Because you know that you need your time, but like you were saying, you're already doing pretty good even with where it's at... You have a bigger goal. So eventually it sounds like you wanna spend more money on the project beyond just your expenses.

How did you kind of price the Patreon campaign and what was the goal in terms of supplementing what was already going on on that community side?

**Evan You:** I'm not sure how you would define pricing the Patreon campaign. It was more like... I just set the numbers based on just jumping up in tiers. I didn't really think that much about how to distribute it between contributors at that time, and I think Open Collective didn't even exist back then. Patreon was kind of like the only obvious solution there... And even today -- I actually had a talk with one of the more frequent contributors, Chris... He's been making a lot of contributions to the docs, and I even discussed like -- I wish I could have allocated some of the incoming Patreon projects to him, to help him spend more time on this stuff, but he didn't want to. It has this very subtle social aspect of it, because he felt if he took some of the money, then it seemed fair for other contributors who also did the work, and it becomes a problem how to properly quantify and measure the work that each contributor does. It also creates this really awkward dynamic between the team members... So this is actually a question we are still thinking about how to best solve.

\[28:16\] At this moment, we're trying to somewhat -- one of the alternative ways we try to give back to these contributors is, for example, Chris has got a deal for working on educational content for O'Reilly, because he's part of the core team and we connected with O'Reilly. He was able to get that, which offers pretty good compensation on his part. There's also -- I think some of the members got contacted by publishers to work on books and other sort of content... So these are somewhat indirect ways that we can give back to the contributors. Because they are now part of the core team, they get much better recognition for their expertise in Vue.js.

**Nadia Eghbal:** That's awesome.

**Evan You:** Yeah, but we just feel that direct allocation of money is somewhat tricky, because it's really hard to properly quantify it and we still don't feel there is a very elegant solution to this problem.

**Mikeal Rogers:** Yeah, I mean, the Patreon campaign is really set up to fund you, really specifically... In fact, you could extend this to some other -- if you had another idea, you could allocate some work to that, right? People really are backing you and investing in you, even though you probably have enough left over for the project.

We've actually heard from other people too, it's like when you get money for the project, it's actually hard to figure out what to spend it on...

**Nadia Eghbal:** Right... What is the project, versus what are you doing...

**Mikeal Rogers:** Right, right. But when people are funding you, they're literally saying "I want you to work on open source full-time."

**Evan You:** Yeah, that's a different way to look at it. In some way, this is basically the majority chunk of my income now. I need to use this money to pay the bills, I need to put these into my savings, even pay for retiring and all that stuff... So in some way Patreon is more directly connected to the creator, the person, rather than the project.

It's a little different from the mindset or the model that Open Collective is pushing forward, where the funding is going to the project. I think it's an interesting dynamic, and it kind of depends on how the project is structured and how the creator or the maintainers want to frame the story.

I just feel like this is an interesting difference between some of the different funding models that we see in some of the more popular open source projects.

**Mikeal Rogers:** Yeah, I find it really fascinating. One of the hazards that we keep hearing about is that when you start paying some people, other people don't feel as valued sometimes... And it's interesting - you're not running into that. You actually have a pretty thriving community that's still growing, and even within that community, they're kind of saying "No, we actually don't wanna be paid directly... Forget this stuff!" \[laughs\] It's still a concern, even though you have your Patreon set up to continue to sustain the project.

**Nadia Eghbal:** And it's really interesting to see how there are like other benefits to being a regular contributor that might not be "I'm getting paid to work on those, but my reputation grows, and then I have this book deal..." That's really interesting to think about. My brain's going in like 100 directions right now. \[laughs\]

**Evan You:** \[32:01\] Yeah, and another aspect that I wanted to mention is one of the core members actually started to work on a project that's fully dedicated to Vue resources... Kind of like making Vue videos and all that. I think it's somewhat like a way for him to both contribute to Vue and provide more content for the users, and also in this process try to financially sustain himself.

**Nadia Eghbal:** Interesting. Do you say that was a Patreon campaign?

**Evan You:** It's not a Patreon campaign, it's more like a subscription service, similar to Laracasts.

**Nadia Eghbal:** It'd be interesting to think about, like, if different contributors feel motivated to raise money to work on Vue for their own time, I guess, but it's still different from raising money for Vue; it's "Raising for my work on Vue", in this aspect.

**Evan You:** Yeah. It's something Chris has been thinking of, too. He backed off, because he felt it could be distracting to have multiple campaigns that are in fact for the same project, and I think this increasingly reveals the problem between "How do we support the project? Do we support the people behind the project directly, or do we support the project and then somehow let the maintainers figure out how to allocate the money?"

**Nadia Eghbal:** Yes, that's exactly it.

**Evan You:** I think this is something that we haven't really figured out at this point. I hope we can find a good model for this in the near future.

**Nadia Eghbal:** I'm wondering a little bit about just like the logistics of -- knowing all that now, is there a legal entity that's associated with Vue? Is there a company?

**Evan You:** Currently no...

**Nadia Eghbal:** Wow, that's so interesting.

**Evan You:** Yeah. I mean, I have a single-person LLC, but it really has nothing to do with how the project is organized; it's mostly just for me to send invoices, and stuff. But as far as I know, I also looked if it's possible to start a non-profit organization for it, but it's awkward because Vue is at a scale where it's not big enough to warrant a full foundation-like work, but it's also big enough that it's not sustainable as a spare time project.

It's stuck in this awkward place where we're basically trying to figure out what to do with it.

**Nadia Eghbal:** Yeah... That's so interesting, because people -- I refer to it as like "Vue is funded through Patreon", but really it's your work that's funded through Patreon, and Vue is still an open source project without an associated entity, which is actually really cool.

**Evan You:** Yeah.

**Nadia Eghbal:** I have to ask the obvious question of like why didn't you decide to start a company and raise venture? I mean, you worked at Meteor - they kind of went that path?

**Evan You:** Yeah, there were actually people asking me that. There were some VCs in China that actually wanted to give me money, but the biggest obvious problem is I don't have a very clear business model for making money off of Vue, because it's an open source project; it's MIT-licensed. I don't want to sell it. I don't want to license it and then ask people to pay money for it, so I just don't see a business model that would align with what a VC would want to see. With that, it just feels awkward to take VC money.

I also don't want to feel the pressure of scaling and monetizing beyond what is enough to sustain myself, at least at this stage. That's something that's been put on the table before, but I just don't feel like it's the right choice, at least for now.

**Nadia Eghbal:** \[36:25\] It makes sense.

**Mikeal Rogers:** Not having a business model hasn't seemed to stop most startups in San Francisco... \[laughter\]

**Nadia Eghbal:** Yeah, at least you're honest. \[laughs\]

4: I think it's interesting, because frameworks like React and Angular are essentially backed by huge business entities, but Vue is completely independent, I would say. It's an independent open source project. For similar projects in the same boat with Vue, independent open source projects that are pretty popular but not backed by a big business entity, I think this is unknown territory where sustainability is really something we haven't found a successful or a replicable model to sustain this kind of project.

I kind of want to mention a project, which is Babel. Many people kind of have the impression that Babel is backed by Facebook, which in fact it is not... Although Sebastian, who is the original author of Babel, works for Facebook now. He actually no longer maintains the project. It's largely maintained by Henry Zhu, in case you don't know it.

Henry worked at Behance, but he actually worked on Babel mostly in his spare time. I talk with Henry pretty often, and he's struggling with finding more time to work on Babel. He asked me for advice because he saw me have a pretty successful Patreon campaign. When we talked about how we could potentially fund his work on Babel, we went into all these little problems that we've just mentioned, like how -- because he is not the only maintainer of Babel, so how do we justify him taking the majority of the fund, and would it make sense to start his personal Patreon, or would it make sense to start one for the Babel project... The subtle difference here is I am the creator of Vue and I am still the -- people essentially associate me with Vue, so they feel comfortable giving me money, knowing that it's going to support Vue.

In Henry's case, a lot of people don't even know he is the main maintainer behind Babel now, so it's really hard for Henry to start a campaign and say "You should give me money for me to work on Babel." We've discussed this a lot behind the scenes, but sadly we haven't really found a really good way for him to be able to dedicate more time on it.

**Nadia Eghbal:** Absolutely.

Coming up after the break, we go further in this conversation. Nadia, Mikeal and Evan go into the struggle of corporate and community-funded open source. We asked questions like "Do you have a sense of being David battling Goliath? Do your goals change in open source when you start working on it full-time?" and as Vue grows, does Evan have a plan or know how to fund beyond the current Patreon campaign? Stick around.

**Break:** \[40:00\]

**Nadia Eghbal:** Evan, you were starting to touch on Henry's story with Babel, and the perception that Babel is supported by, or is an official Facebook project... I'd love to dig in a little bit more around -- I think a lot of people are perceiving right now that companies are getting involved in open source, and that community-generated and supported open source is harder and harder to support. Do you think that there is a future where corporate and open source worlds overlap and can live harmoniously, or is the future gonna be one or the other?

**Evan You:** I can't really make a prediction, but I think if we want to have a world where corporate and independent open source live in harmony. I think the enterprise and a lot of the businesses that are using open source need to have their mindsets somewhat transformed or updated.

Sometimes - I've been thinking about this; maybe it's just speculation, but it just seems the incentives for businesses to give open source projects money is at this moment just too weak. They're getting value out of these open source projects, but they don't feel obliged to do it, even if the open source project is actively asking for donations or pledges.

One of the things I've encountered in Vue's campaign is in the survey, actually 25% of potential donors backed out because they couldn't get their managers or whatever to approve the charges. And I think this somehow shows that some of the businesses don't even consider donations to open source are a valid type of expense. They feel like this is not something they've done before and they don't ever want to do it, or they just don't feel like this is a justifiable form of expense. I think this is somewhat problematic.

If we can somehow clear this barrier, where when a developer's saying "Hey, we're often using this open source project and we should support it. We should donate money to it", and if we can somehow make it so that these businesses would gladly agree that they should do it, I think would be in a considerably better situation.

I know that a lot of developers don't even ask their managers, because they know they would not approve it. This is somewhat sad. I think if we can somehow raise enough awareness that the industry actually considered donating to open source a very regular, very common thing, then we'd have a much better world.

**Nadia Eghbal:** Absolutely.

**Mikeal Rogers:** \[44:01\] I think that there are some companies that at least are willing to put in people resources; they're at least willing to open up their people to contribute back. But you're right, there's this whole other section of companies that aren't willing to do that and aren't willing to put in any money for things that they critically depend on, right?

**Evan You:** Yeah.

**Nadia Eghbal:** I'm just thinking back to how Patreon is really about funding your work more than Vue as an entity, and whether -- I think in Henry's situation, he got his employer to agree to give him more time to work on Babel during work hours... I wonder if that's sort of like a viable solution, instead of donating?

**Evan You:** Yeah. In some way, I think Behance can be considered the main sponsor of Babel now, because they allow Henry to work on Babel for some portion of his time. And I think that's cool. I don't want to put Henry in an awkward situation, but I think --

**Nadia Eghbal:** We'll just have to get him on here...

**Evan You:** Yeah... This kind of arrangement still has its potential problems, where the maintainer's energy is kind of pulled between what the company would expect of him, versus what the open source project itself calls for. But as far as I know, there are some cases where similar to how some engineers at Google work full-time on V8, some people work full-time on Webkit at Apple. These are more mature and ideal examples of people getting paid full-time to work on open source, but technically they're actually still employers of a bigger enterprise.

**Nadia Eghbal:** Right.

**Evan You:** The thing is these projects originated from within those companies were -- as the case for Babel is... Babel is essentially still an independent open source project. No one owns it. The code is maybe MIT (I don't know); it's not technically owned by a company. It's fully driven by the maintainers. Although Henry is now the main maintainer, he was originally a part of the community and he is still part of the community, so we can say Babel is fully community-driven, and that's kind of still very different from the kind of open source projects that are largely controlled by a company and just made open source. There's still some difference in there.

**Mikeal Rogers:** Let's talk about that a little bit. I think that you've identified one of these interesting cases where corporate sponsorship - for a lack of a better term - or even in this case just the appearance of corporate sponsorship is actually kind of a liability, because if they're not putting in enough people to actually maintain the project, then it's actually harder to get funding for people like Henry for the project, because people are like "Oh, that's a Facebook thing, they'll take care of it." But there's this whole other section of projects where they really do use that corporate backing not just to help out with people resources but also to add like an air of legitimacy to the project.

I remember when Angular was released... The fact that it was used for Google-scale web apps was a selling point, and the same thing for React from Facebook. You've been on the other side of that, sort of building up a project and not saying, "Oh, we're backed by a mega-company" and you turned that into an advantage, right?

**Nadia Eghbal:** I wouldn't say that has given us much advantage; I think we've always been fighting an uphill battle as in that we almost every company adopting Vue are asking the question of "Why wouldn't we choose React or Angular, because they're backed by Facebook and Google?" I've been asked that question so many times, and honestly, I still don't have a good answer for it, because people just naturally pick corporate backing as somewhat as a badge of -- they just feel more comfortable using something backed by a big company.

\[48:17\] To that, I usually ask them "What do you actually think it means for an open source project to be backed by a big company?" and they say, "Oh, it's more stable. You know because they rely on it that this project wouldn't die all of a sudden", and I guess in some cases the buzz factor is smaller... So usually in response to that I would just point them to look at some of the stats. I would say "If you are worried about how well maintained a project is, you can look at the track record" because everything is open, it's on GitHub. You can go and look at their commit history, you can and look at the issues, you can see how many total issues have been filed and how many of them have been handled and how fast they're handled, and how many pull requests they get, how fast the pull requests get merged and reviewed, and how many contributors they get.

I think it's usually more reliable if you look at these numbers directly, rather than making assumptions just because some project is backed by a big company. In reverse, you make the assumption that if a project is not backed by a huge company, it must be somewhat inferior in certain aspects. That's usually the best answer I can give, but... I don't know. I guess being backed by a huge company is still a pretty big positive factor in terms of adoption for open source projects.

**Nadia Eghbal:** It's interesting to think about... Because there's also so many examples where a company has shut down an open source project, or kind of just abandoned it or not really paid attention to it, so it's funny that the assumption is that somehow it's more stable or supported.

**Evan You:** Yeah, I usually try to avoid mentioning that, but it's true... The thing about company-backed open source projects is that in a lot of cases big companies open source their projects sometimes because they want to make it sort of an open standard for a certain industry, or sometimes the simply open source it to serve as some sort of publicity improvement to help with recruiting. But fundamentally, this project needs to be supporting the company's internal work, their production projects.

If this project no longer serves that purpose, then most companies will probably just cut it, or (in other terms) just give it to the community and let the community drive it. I don't know... I'm not arriving at any conclusions here, I'm just trying to...

**Mikeal Rogers:** Well, I think you actually covered the contrast earlier a little bit. You talked about earlier how the needs of the community and what people were building continued to kind of drive where Vue.js was going. In these corporate-backed open source projects that's not always the case. They're driven by whatever that particular company is doing with it, because the needs of the community are kind of secondary to what the company wants.

So their whole notion of "Well, it's always gonna be around..." -- well, it may not be around in a way that's even usable to you. Angular 2 went off and did a giant breaking release that I don't think a lot of their community was asking for. It was sort of driven by the people internally at Google that wanted to make that change, whereas your solution to that is "Look, you can contribute to this project, you can become a member of the community and help drive it... You can also put in money and pay for it and continue to drive it", right?

**Evan You:** \[52:16\] Yeah.

**Nadia Eghbal:** Mikeal and I have talked about this - my experiences talking to especially older generations in open source... They see what's happening now and they're like "This is the thing that we were trying to prevent." This is why you have like -- I don't wanna speak for Apache, but you have stuff like Apache where that can sort of like diversify risk, where people aren't participating as companies, but they're participating as contributors and they're trying to avoid the situation where everything is pinned on one sponsor who might change their mind.

That's why I also - especially earlier on - would hear a lot of resistance to people bringing money into open source... Because they said, "The amazing thing about open source is there is no money involved" or "The project is not being directly funded, and that means no one can take it away. People are just contributing because they want to" - I don't think that that's sustainable anymore, but there are some interesting lessons to be learned from those older generations of open source, where community-funded is really great because they can also diversify risk.

**Evan You:** It's true, yeah.

**Mikeal Rogers:** I also don't wanna lose another thing that you said, Henry, that was really, really good, which is that...

**Nadia Eghbal:** Evan...

**Mikeal Rogers:** Sorry, yeah... We were talking about Henry for a while... \[laughs\]

**Nadia Eghbal:** We talked so much about Henry... \[laughter\]

**Mikeal Rogers:** We'll interview Henry eventually, don't worry... \[laughter\] You mentioned that a lot of times these companies open source these projects so that they can get a standard within a particular industry, and I find that kind of fascinating because what they used to do for that was write standards... Companies used to control a lot of the standards bodies and drive a lot of standards, and there was like a decade of driving standards in this really weird direction that nobody cared about.

Now it seems like they're just skipping the standards phase and going straight to open source projects.

**Evan You:** Yeah, I think the problem with directly drafting standards is you have this big risk of just having something written as specs and it turns out people just don't like it, or it's really hard to work with. Or it turns out after you have published the specs you realize it hasn't really gone through enough field testing, so it's actually not good enough, but then you're stuck with it.

You generalize from something that's already working in the field, so that you spec based on top of that. I think the way ES is spec-ed right now, somehow we have these different stage approvals, and Babel kind of serves the role of letting people play with it before it's actually become part of the spec. Now we have a much better feedback loop, because you actually get real feedback by people using these features before they are even part of the spec.

I digress, but I think it's actually a good thing that we try to -- I'm not sure it's essentially a good thing, but from an implementation perspective I think having some open source project being successful kind of paves the way of having a solid spec on top of it. It becoming successful means it's working for people and it solves a real problem.

**Nadia Eghbal:** I'm actually wondering about that as you kind of move into a more mature phase of Vue... I'm thinking about what are all the different stages of an open source project, and I imagine early on it's sort of like spreading the word, getting downloads, and at some point you start to double down on users... I mean, how do you know who's using the project and how do you make sure that people are actually using it because your funding depends on it, right?

\[56:07\] If people think it's cool and then kind of get bored with it, they're just gonna stop funding you.

**Evan You:** Yeah, I think we get some sort of very general sentiment based on tweets that I get, and I somewhat keep very loose track of, say, the Google search trends or GitHub stars, or Npm download counts... None of these alone are very good metrics to determine the growth of the project, but when they are combined together, you would get this pretty good combined growth curve. I've basically been using that as an indicator.

Actually, a better indicator is probably the weekly active users of the official DevTools plugin... That's kind of like -- the real developers, the actual developers that are actually using Vue are using DevTools. It's kind of a good metrics that I look at pretty often. Aside from that, we also have -- I also added the feature in our DevTools plugin which allows us to... Basically, the logo just brightens up whenever you visit a website that's using Vue, so sometimes community members would sent tweets at me saying "Hey, I just discovered this website is using Vue."

**Nadia Eghbal:** That's cool!

**Evan You:** Yeah... So that's kind of one way of doing it. I've done a few surveys in the past, asking what companies are using Vue in production. The last one I did I think was almost a year ago maybe... But overall, I'm constantly surprised. Sometimes for example I'm on Twitter and someone mentions me, and you see this pretty cool website that's built with Vue...

Another channel -- as we are preparing VueConf, I get a lot of -- so we are reviewing the talk submissions, and there you start to see all these real people who are excited enough about Vue to submit talks to your conference and you see what products they work on, what company they work for, and it's pretty eye-opening.

I think I'm not even fully aware of all the people that are using Vue across the world, because by the statistics there are more than 100,000 active Vue developers as of now... Then how many applications they must be working on?

Honestly, I don't think I myself have a good enough grasp of the scale it's now at. I think it's maybe time for another survey.

**Mikeal Rogers:** \[59:14\] I think on that note -- I think that's a great way to take us out, with the burgeoning, amazing user community. Hopefully we'll have you back on in a year or so, once you figure that all out, and then maybe we'll have something more to say as well.

This has been great... This has been a really great chat. We really got into a lot of really great stuff, so thank you.

**Evan You:** Great!

**Nadia Eghbal:** Thanks for coming on, Evan!

**Evan You:** Yeah, thank you for having me! I think that's it...

**Nadia Eghbal:** Go to bed! \[laughs\]

**Evan You:** Yeah, I should go to bed... It's like almost 3 AM now. \[laughter\] Alright...
