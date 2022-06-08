**Gerhard Lazu:** I'm Gerhard, today is the 19th of November 2019, day one of KubeCon North America + Cloud-Native Conference. We are here with Bryan Liles. He's the co-chair and senior staff engineer for VMware. We watched this morning Bryan have a great keynote. I really enjoyed it, and especially the dance that he started with; I really loved it, and I thought it was a great keynote.

I enjoyed the conference so far. This is my first KubeCon. It's a great conference, 12,000 people. That's so many people. But tell us how it was so far for you, KubeCon.

**Bryan Liles:** Oh, wow... So my KubeCon journey for this conference started months ago. Oh, wow... I think we started in July, and -- just to let everyone know how this works... We put out a call for papers, and I don't know when this is going out, but we're having another call for papers December 4th for KubeCon Amsterdam the next year in March... But we put out a call for papers, and we get many replies. I don't know the exact number, but it's thousands.

Then we have a program committee. The program committee - we need that, because we're doing 14, 15, 16, 17 different tracks here at KubeCon, and there's no way that me and my co-chair Vicky could actually read all those talks, and then score them. It just would never work. So what we do is we bring together about 110 people and we tell them "Here, you're going to look at talks and applications, or operations, or machine learning, or networking", or something like that... And we make sure that every talk gets about 4-5 reviews, and they're scored.

The scores are interesting. They're scored in like 4-5 categories, like originality, what we think the speaker has done in the past, have we seen talks like this before... And then what happens for there is then we get this huge spreadsheet (yeah, we use a spreadsheet). And then what we do is we go through (and the co-chairs go through) every single talk; let's say if we had 3,000, we have to look at 3,000 talks, times 4-5 reviews, so imagine that can be up to 15,000 things. Then we just put together and we figure out that we have 12, 13, to 17 talks per track, and we order them, and we make this thing.

\[04:13\] So what everyone is seeing now who came to KubeCon is a lot of work. I did it over vacations, and over weekends, and it was a ridiculous amount of work. But the reason we do that is for this reason that people come and they see our keynotes, and they're like "Oh wow, that keynote was inspiring!" Or they go see a talk and they're like "Wow, I saw this talk." But the best part is that all this stuff that we're doing - minus a few talks - are gonna be on YouTube in a few weeks, so you could just not come. But that's only part of the conference.

The other part of the conference is our SIG stuff. Our SIG updates are -- we have two types of SIGs. A SIG in the cloud-native world is a Special Interest Group. It's a group that is focused around some kind of topic. So we have Kubernetes SIGs, and then we have CNCF SIGs. Kubernetes SIGs probably, as you can figure, are around Kubernetes. There's a lot of those, so all of those will get one or two talks. It's usually like an intro talk, like let's say SIG Apps, and that's talking about applications running on Kubernetes. SIG apps would have an intro of what they are, meet the members, and then they would have a deep dive into some topics that they're trying to solve right now.

Then on the other side we have our CNCF SIGs. What those are, like the cloud-native - they're not focused around any particular product, like "And here's something else." I co-chair that. I do my day job, but I also co-chair one of the CNCF SIGs, and that SIG application delivery. And what we're trying to do is figure out how people are writing applications in the cloud-native world. So we'll do a beginner talk, and then we'll do an advanced talk.

The goal here, including our pre-day stuff, where we have a whole bunch of mini conventions all in one, is to get people who are in this cloud-native space somewhere to come meet people, and hear topics they would not hear about. And the best part about this is the first piece. It's meet people.

I will not go to a single talk while I'm here at KubeCon, but between now and probably January/February I'll probably watch 50 or 60 on YouTube. But I take advantage of being here to actually meet new people, forge old relationships, and just basically put myself out there as a person who is trying to succeed in this space. Long answer, but that's what it is.

**Gerhard Lazu:** It's very comprehensive, and I think we got so much out of that. The thing which I would like to add is that... You're right, the talks - we can watch them on YouTube. But there's so many other things happening around the conference. It's difficult to even comprehend the scale of the exhibits that different sponsors have, and some great interactions happening there - games, contests, demos, pairing stations and pairing setups, and solving problems together. It's so amazing to watch everybody contribute.

The thing which I enjoy today very much was going to talk to the Ask Me groups. There was the Prometheus group, there was an ETCD group, the FluentD group... It was really great to go and talk to those maintainers in a corner, and the sort of interactions that -- where would you have that? You'd maybe have to go to PromCon, or to the specific conferences to get that. I was so impressed by these small things, which in themselves are really big, if you think about it.

**Bryan Liles:** \[07:47\] One thing about KubeCon that's different from a lot of conferences - KubeCon can only be put on at this level because we have lots of great platinum and gold sponsors paying lots of money to the CNCF. And people can have opinions about that, but it's not about that. It's not about enterprise. You'll notice that on the stage, when big companies like Microsoft or IBM Red Hat or VMware come on the stage, they can't sell a product. And we actually coach them not to sell a product. We want the people that come on stage from these companies to talk to the audience, who is mostly developers and operations people, and there are some executives and VCs out there too, but we wanna talk to our community, the community that's building things... So what you said, especially around the Ask Me's - those are important, because of two things. One, I wanna talk to people who write the software that I like to use. Like, yeah, it's nice to be able to meet people from the Prometheus project, or people from the Envoy project. That's real cool. But the other side is for the writers of the software.

This morning I did a project update for CNCF Incubating and Graduated projects, and I just picked a few, and then I brought people on stage, for two reasons. One, I don't think some projects are getting enough press, because their developers just don't think that way, or their heads are down, or it's just boring stuff. DNS is boring, and it should be boring. If DNS is exciting, we have bigger problems in life.

So starting off with CoreDNS was just to show people "Hey, I didn't put a URL up there. Just go google it, or something, and if you like it, you like it. If you don't, you don't." But also, getting these developers who write software... A good example of that was I brought one of the founders of the -- what's it called? The Open Policy Agent...

**Gerhard Lazu:** OPA.

**Bryan Liles:** OPA. And you know what? That software is boring, too. But to see the passion of Torren explaining about their custom language Rego and how all the integrations work - wow! Yeah.

**Gerhard Lazu:** And the WebAssembly piece. I thought it was really interesting how that fits into the big picture.

**Bryan Liles:** Right. And if you didn't know that, you were like "That's policy. Boring!" But it's not boring. It's interesting. And I want these developers who spend all this time working on this stuff to have an outlet. And it's a little counter to what people were doing before, and whoever comes behind will probably do it different... But my thing is spotlight on people creating good things. And that's what I take these opportunities to do. I have a platform, and I'm gonna use it for that.

**Gerhard Lazu:** Yeah. That's a great summary of what happened this morning. I really enjoyed being in the audience, from my perspective. As you mentioned, OPA - I haven't even heard of that project, the Open Policy Framework, the Open Policy Actor...

**Bryan Liles:** It's Open Policy Agent. It's made by a company called Styra, and the gentleman I'm talking about - his name is Torren. The crazy thing is that -- of course I waited till the last second to put these together, just because that's just how the world works... So I reached out to Torren last Monday, and I'm like "Hey, this is gonna happen. Give me slides."

**Gerhard Lazu:** So even though you spent six months reviewing all those submissions, and preparing, there were still last-minute things, and all that to make a conference which has been running so smoothly. It's only day one, but already I feel that so much has happened, and I connected with so many people, I had so many interesting conversations... So I think the focus on that, the focus on getting people together, and less about attending talks, unless you're really interested in them. I think that's a great way of approaching it.

**Bryan Liles:** \[11:46\] Right, it is. And I know this is Changelog, and you all talk about open source so... This is what we're doing. Funny thing - KubeCon/Cloud-NativeCon is the largest open source conference in the world. Crazy. We are talking with big companies, and small companies, and all in between, and end users, and individuals, or people who are just talking open source. I mean, it's all around cloud-native for the most part, but it's all open source. So it's great that we are giving people the outlet...

And yeah, I did wait till the last minute to do the updates, because there's so much other things going on. The update talk is actually the last thing on my mind. So it's more of "Let's get the talks, the agenda", and then let's get my keynote, which I'm going to do on Thursday, and I'll talk about that in a second... And then we'll talk about this update. Because it's a couple hours of work. So that's how we do that.

**Gerhard Lazu:** So when it comes to representation and difference companies, every single Changelog sponsor is present at this conference. I was looking through everybody there, and it took me a good hour roaming the halls and the showcases for the sponsors. It's unbelievable how many people are here, and the buzz is immense. I really enjoyed that. And I haven't seen this happen at any other conference. So hats down, the biggest conference. Amazing discussions, amazing people, and everything is running so smoothly.

**Bryan Liles:** I will actually say this about things running smoothly... The Linux Foundation has the best events team in the industry. There's a lot of good events teams out there, but the Linux Foundation - they're really good at this. And a lot of the success goes to people who don't get named in these talks, but they're there, they're coordinating the location, they're working on the speakers, they're setting up the agenda, they're actually doing the groundwork for this. So this is a big event.

**Gerhard Lazu:** Okay. Any last remarks that you wanna make?

**Bryan Liles:** Yeah, actually. Since I'm on an open source podcast, I wanna talk about my open source. Actually, it's really relevant to this whole thing. I'm working on a piece of software called Octant. I wrote it over the last year, and the long story short is that we wanted to solve the problem of how can a person who is not familiar with Kubernetes sit down and understand what's going on with their workloads? It's a really heavy topic. So I created a proof of concept last year, and we went through and we got it all approved, and now it's a piece of software. But that's not really what I wanna talk about.

I wanna talk about the power of open source, and this whole concept of a 10x developer. I like to think of myself as a 10x developer, and I can just imagine people stopping this conversation and they're like "That guy Bryan - what is going on?" So this is why I think I'm a 10x developer. And no, I'm not telling the binary joke; that's not even funny.

My job as a developer is to inspire others to do things and to write software that allows others to do things. But the real testament of a piece of software, whether it's good software, or even mediocre software, is if someone can take your software and do something with it that you'd never even thought of doing.

The reason I brought up this piece of software of Octant, where you can actually go and view your Kubernetes clusters, and we're putting more features in there, like terminals and all sorts of things... But what I've found is that I've put a plugin system in there a few months ago on a weekend - because why not? Plugins seem pretty cool... But being at this conference this morning, I found 4-5 people that came up and said "Oh wow, your software is pretty cool", and I'm like "Yeah..." But I'm like the developer who's saying "Well, I could have fixed this, I could have fixed that..." They're like "No, no, no, no. It's amazing. And I wrote a plugin using your plugin system, which is crazy, because we didn't document it."

\[16:04\] So people are creating software based on software that I wrote, so I've actually inspired people to do things, and someone has come and created something that I could not imagine with my software. That's what makes me a 10x developer. I've made more than ten developers more productive, so guess what - 10x. I've 10x-ed myself. And that's what I actually wanna leave everyone with - this whole myth of the 10x developer; your job, if you can make two developers more productive... So if you have two times two, that's four, so guess what, you're now a 4x developer. So if you can do it for 10, or 100, or 1,000, or in some cases at high levels, like a million, because it's possible - that's how you actually scale yourself.

And here's the crazy thing - am I a good developer? I think so, because I practice. Am I the best developer? Probably not, because someone's practiced harder than I am. But we can still all be developers who are multipliers, and open source is actually one of the greatest ways of doing that, especially whenever you're using permissive licenses and you're allowing people to build things that aren't even possible without your software. And that's crazy. So I just wanted to leave everyone with that, and that's actually why I do all of this. I'm here to inspire on the stage, but I'm also here to inspire in software, and just be inspirational all the way around. So that's my positivity moment for the afternoon...

**Gerhard Lazu:** I think that's amazing, and it's a rare skill to see the best in people... And it's even a rarer skill to want to contribute and make them even better, and to not empower others, but emancipate others. That's a word which I like very much - emancipating others to do things that they themselves couldn't do; giving them the idea, giving them the inspiration, or just a glimpse, like "What could be?" And that's amazing.

**Bryan Liles:** Yeah, and that's something -- I think my parents taught me that... My dad taught me that the best idea you've ever had is that one you give away, and it made it someone else's best idea... And it took me -- it's funny, we were talking right before we started recording about being an adult... That's whenever I knew I was an adult - when I realized an idea was just an idea, and whether I did it or someone else did it, it didn't matter. If it's your best idea but I came up with it, that's fine. I made you better. And then hopefully you either do me another favor, or you go out and make the world better. So either way, I win. That's how I look at it.

Maybe I'm a bit naive, or I have a little bit of blinders on, but the world will always be weird and bad, so you have to go find your happiness. This is how I find my happiness.

**Gerhard Lazu:** That's amazing, Bryan. Thank you. I love that. That's a perfect way of ending this. Thank you.

**Bryan Liles:** No problem, I'm glad to do it.

**Break:** \[18:53\]

**Gerhard Lazu:** Day two of KubeCon. It feels like it's been like a week.

**Priyanka Sharma:** I know...!

**Gerhard Lazu:** So many things have happened.

**Priyanka Sharma:** It's crazy.

**Gerhard Lazu:** I know. It's the biggest conference I've been to, it doesn't stop surprising me... The amount of talent, the amount of openness, friendliness... I am really, really surprised by what I've seen here. So today we have Priyanka from GitLab, and Natasha, also from GitLab. They're here to talk about Kubernetes releases, and anything else in between. Would you like to introduce yourselves and tell us a little bit of the history?

**Priyanka Sharma:** Sure. Thank you so much for having us. As you said, I'm Priyanka. I serve as director of technical evangelism at GitLab, which is very similar to developer evangelism/developer advocacy in other companies. Our job is to build GitLab's technical brand by participating in the ecosystem, by being useful members and contributors.

I also serve on the board of the CNCF, which is the Cloud Native Computing Foundation, who are the people who bring you this event, and are the home for Kubernetes and a bunch of other projects. That's me.

**Natasha Woods:** I'm Natasha Woods and I'm the head of Corporate Communications for GitLab. A little bit of background... Before that I worked on PR and Marketing for CNCF. My first announcement was Kubernetes coming to the Foundation several years ago, so that was very exciting. I also worked on a lot of the promotion for KubeCon, including the first one under the Foundation, when there was only 1,083 of us, and now there's 12,000 of us here this week. I'm also a Kubernetes contributor. I was the marketing lead for release 1.9, 1.10 and 1.15.

**Gerhard Lazu:** Wow, that's amazing. That's a lot of releases... So you know things have changed a lot since those days, and the whole community and ecosystem has grown so much. What do you remember from those days?

**Natasha Woods:** A lot of work... \[laughter\] No, the spirit is still very much there. At that time, everybody was really excited about it coming under the foundation, and a lot of contributions, and a lot of people outside of Google. Google was very much still involved, but a lot of people from Red Hat, and \[unintelligible 00:22:22.27\] and tons of different companies were getting really involved... And there was just a really great spirit of community and collaboration, and just trying to kind of figure this out, like "How do we take all of these contributions and how do we release on a smart cadence?", and just for KubeCon, "How do we make this a developer-first event, and how do we educate people? How do we bring people in that have been doing this for a while and pair them up with people who maybe haven't been doing this for a while?" And then on top of it, it's launching a foundation. This was kind of an experiment, like "Is this going to work? Is this going to thrive?"

The Foundation has 129 end user members. I'm not talking about the vendor members; that's over 500. But that's just end users. The Ticketmasters and the Home Depots, and...

**Priyanka Sharma:** Fidelity...

**Natasha Woods:** Fidelity, and the Air Force, and companies like that... So it's really a testament to all the work that everyone's been doing the last five years - with Kubernetes the last four years - with the Foundation. It's been a lot of fun. Now I'm at GitLab and I'm getting to do it all over again with the rocket ship of a company this is, so it's a lot fun.

**Priyanka Sharma:** Yeah. I think I attended the first KubeCon that was under the Foundation in Seattle, right? Yeah. There were, I think, 700 or so folks in the room there. And it was totally different size-wise, and it was the first time I was actually engaging with the sort of like what I call the systems people, because I'd done mostly web development stuff before. So I was extremely nervous. I basically didn't want to go... \[laughs\] But I went, because I'd been working on the Open Tracing project, which we wisely put in the Foundation.

\[24:14\] The day zero kind of thing there was a meetup, the Kubernetes meetup, and I went there and I was like "Everybody knows so much. This is intimidating. I should just run away." But people were so nice. Everybody just welcome me, and they made me feel so comfortable... People were going out of their way to do that, and they didn't even know me. My heart just warmed, and I actually ended up having a great time at the conference. Since then, I've been attending all of them, and been on the program committee for a lot of them. That's the nice thing; that ethos is the same, as you were saying, Natasha. It's like yes, there's 12,000 people here now, but so many people are new, first-timers, just like I was in 2016... And we're bringing them all into the fold, we're welcoming them in. I think this is why it's the best community ever.

**Gerhard Lazu:** I totally agree with everything you've said. The one thing which really stuck with me from today was -- Tim, I believe... He was talking about "Project over company." He was saying how it doesn't matter which company you're from, because we're meeting in this space, which is the open source, the Kubernetes, and everything that goes around it - CNCF, right? It's so much more than just Kubernetes. And the approach, the way everybody approaches the problems that we're trying to solve is so friendly. And the scale, even though it's so much bigger than it was a couple of years ago (exponential growth), is exponentially better. So things haven't changed in the way people approach it, but the scale makes it so impressive. The one thing which I keep noticing is the documentation for all these projects is so good. Why is that?

**Priyanka Sharma:** I think there's a lot of hard work that goes behind it. I think the CNCF does a good job of gently pushing projects in that direction of like "Hey, documentation is really important." And I think it's part of the graduation criteria as well, right?

**Natasha Woods:** It is, and they also provide documentation funding...

**Priyanka Sharma:** Resources, yeah.

**Natasha Woods:** They provide resources, which I know a lot of projects outside of the Foundation and outside of a large company may not have such resources... But they do provide those resources, which is wonderful.

**Priyanka Sharma:** Yeah. And the cool thing -- as you were saying, and Tim said, project over company... So people's identities are becoming about the work they do on project X, Y or Z; and when that's the case, you start thinking holistically. So your project is like a product. You want people to use it. Otherwise what's the point? So I did this myself on the Open Tracing project. When we got it going, we weren't developing in a vacuum, we were developing for people, so you've gotta make it easy for them to use it... So I spent - as Natasha said - a lot of time on the Open Tracing website, just writing things down. Or if I didn't know some level of technical detail that was beyond me was harassing people to make them do it... \[laughs\] It's like "Hey, hey... I don't understand this. Can you explain it? Can we do this?" And it was kind of grunt work, it's not the most fun. But we pushed through, and then suddenly we had a bunch of stuff that was super-useful. And then adding to it is actually a lot easier.

Actually, at GitLab we have -- there's the product documentation, but there's also the company process documentation, which we call the handbook. And I can't even imagine what it must have been like for Sid, our CEO, when he started it, because it's the blank slate/page problem. But now it's so in the habit that "Oh, update the process on the handbook", that's the natural thing you do when you change your process. So I think once the ball is rolling - same for documentation, same for process documentation - then edits are a lot easier. So I think that's kind of where we're at with CNCF projects, and that's why I think it's very good.

**Natasha Woods:** \[28:27\] Yeah, at GitLab we say "Handbook first", and we iterate a lot. It's actually one of our values, it's iteration... And I think that that's a really good lesson for open source projects - document first, iterate. It's really gonna help you go back, and it's also gonna help new people coming in.

**Priyanka Sharma:** I agree.

**Natasha Woods:** So that's a big advice that I think we would give to someone that's getting involved in this area.

**Priyanka Sharma:** I think the nice thing - which is true for GitLab and also most open source projects - is that everyone's distributed. Everyone's remote, there's no office. And then there's no way to communicate if it's not written down, and that ends up helping a lot.

**Gerhard Lazu:** One thing which I would add to this is that I was watching PromCon a couple of days ago... And I forget his name, but what I do remember is that I went to the GitLab handbook, and the dashboards, the operational dashboards.

**Priyanka Sharma:** Ben Kochie, or Andrew Newdigate?

**Gerhard Lazu:** I think Ben Kochie.

**Priyanka Sharma:** Yeah, he's a Prometheus core team member and GitLabber.

**Gerhard Lazu:** Right. And having looked at the handbook, everything was there. So even from someone that didn't know that that thing even existed, it was so approachable. So I looked at that, I clicked a couple of links, and all of a sudden I could see everything I wanted to learn from. And that's something that just happened.

**Priyanka Sharma:** That is so cool you had that experience. That's what we aim for! \[laughs\]

**Natasha Woods:** Yeah.

**Gerhard Lazu:** So I really enjoyed that, I have to say. It works beyond the internal team. It also works for outsiders that may be interested in "Hey, how does GitLab do this, or how do they do that?"

**Priyanka Sharma:** Yeah. There are people -- I talk to a lot of startups (I don't know why; it just happens) and they're telling me "We basically are copying your GitLab handbook, because it's the best way to document the process and be efficient as a company." And it's nice that we've been able to provide a starting point for a lot of folks, and I'm seeing this momentum grow; more and more people are coming and telling me this. It's pretty cool.

**Natasha Woods:** I would just go a step further with the documentation... A little story of working on the release team... When we were working on release 1.7 and 1.8, more from the communications side - and I mean communicating with the different stakeholders and contributors, and people that are really giving back, but also the companies that are seeing what's coming down the line for the new releases, and things like that... We didn't have a ton of documentation on that. So for 1.9, \[unintelligible 00:31:09.01\] really championed documenting the process, and documenting everybody's roles.

So you can go and you can see all this documentation now, but what are each release team member's roles and responsibilities, what is the previous experience that they should have before they are elected to these roles, because it changes each time for the release... And what are the key steps that need to happen from a timeline perspective. I mean, they've always had a timeline, but it was a little bit more detailed. And then we've just iterated on it for several releases. So Jace came to me and he said "We need to write down something for marketing." And marketing is always a very last thought, but there's so much more into it than just maybe tweeting something out, or calling a reporter to get an article.

\[32:03\] So I sat down and I documented everything I did for that release, and we implemented it, and then we implemented it for 1.10. Then I was lucky enough to have my second child, and I was on maternity leave, and so I wasn't able to really update the next person and help them through if they had questions, because I wasn't available. So they were able to take everything that I documented and implement it from a marketing perspective for the next few releases, which was really great and really helpful...

So some of those things were, you know, learning what is coming down the pipeline from the SIGs, and what is going to make it into the release and what's not going to make it in the release, and why is this relevant to the audience, and who is the audience; why is it relevant to a vendor, why is it relevant to a customer, why is it relevant to another developer, and then making sure that that is communicated not only within the blog post, but it's also communicated to any press that are covering it, because you don't want misinformation out there and confusion to happen. And then how is this being communicated to, say, the companies, the Red Hats, and CoreOS back then, and those types of companies who are following along with the releases, how are you communicating that to them. So we actually created this really great, detailed process out of it.

Obviously, Kubernetes is in a different league, the same league as Linux. But for the smaller projects, you can take pieces of this and see the importance in communication across everything, and also documenting.

**Priyanka Sharma:** I'd like to talk about documentation from a slightly different angle, which is that -- we were just talking before we went on the air that the open source ecosystem today is a lot more than some code, some library that you pull in and throw into your own software. It's a much more vibrant community, there's a lot more value when things are going on. And part of that value is if you are building something - let's say you're being entrepreneurial and building an app, or something... It's a community where you can discuss ideas, where you can find friends to test your stuff, to give you feedback, all of that... And documentation actually plays a really strong role in that.

As an example, I'll tell you - the Jaeger project did this the first time, and I thought it was really cool... They don't have any user telemetry baked into their project that's open source, but they wanted to know who is using this, what's going on, how can we improve... So they started an issue where it was like "Okay, anybody who is using Jaeger proactively, if you are open, just share what you're doing, what you like, what you don't like..." And I was like "Who's gonna write that...?" No, it's a long, long, long issue, with so many people writing in... And then that moved into, I think, a readme... But what that did was suddenly they had this great feedback from their community on how to iterate.

And then I actually -- I sometimes contribute to the Jaeger project when I have time; I help them out... We picked people off of that list and asked them "Hey, would you please do case studies?" And people were already so engaged. Normally, what's the case study process when you're a product? People feel like they're doing you a favor, and there's a bit of a power dynamic, I think... But in this case, they were grateful we called.

Then suddenly we were writing all these case studies, and had this really deep detail of how to use Jaeger, what are the benefits etc. And all of that started because we used existing channels - issues, readmes - to write down that we're looking for X, people come and respond... And you're not just telling me, you're not just telling an individual, you're telling the whole community what you're doing. The many-to-many communication, which is what documentation is, I think is really powerful. It's about the how-to, but it's also about "How did it go? Where should we go next?" And it changes how we do things, which is really cool, I think.

**Gerhard Lazu:** \[36:26\] I think that sounds really good. Going back to what Natasha was saying a bit earlier about the Kubernetes, and the releases, and how the documentation plays such an important role in the Kubernetes releases, I'm wondering how much of that influenced the way other CNCF projects do documentation. Kubernetes, a very popular graduated CNCF project, the way things are done in Kubernetes - I'm sure they must have inspired the other projects, and Kubernetes itself must have been an example of how to do it well, because it's proven itself over the years how effective that is, and so many projects could have learned from that. And I'm wondering if some of those learnings made it in the graduation process of the CNCF itself.

**Natasha Woods:** I would say that you would have to talk to the TSC about their decisions around the graduation process... But I will say that events like KubeCon bring the communities together, and allows them to talk to each other and learn from each other. The projects will host different deep dives at KubeCon... So you can go into the deep dives and really dig into the project, what it's doing, ask questions, learn, things like that.

I think there's a lot of cross-communication that happens, and I know definitely for some of the younger projects coming in probably did look up to Kubernetes and what they were doing... And everything is freely shared between each other, which is great.

I launched a lot of the projects that came in from a PR perspective. So I would write the blog posts, and I would work with them to get some press about what their project was, and things like that... And I looked at the documentation and the antidotes of people, of how they use it, to get myself up to speed... Because all these technologies are not the same. So I had to learn a lot of those very quickly, and not having a background as a developer, this was really helpful. But people could also read through everything that's documented and make a decision on if they even wanted to donate their project, and if they wanted to be part of a community. So I think it's powerful in different ways.

**Priyanka Sharma:** Yeah. As someone who's worked on a few of those smaller projects, I can definitely say that the Kubernetes governance model and how they're structured, how you do the releases with them and what the processes are - they absolutely influence how smaller projects do things. I think there's obviously things you will do when you're a Kubernetes-level project that you just don't need to do when you're like a sandbox project that just came in. It just doesn't apply. But what Kubernetes has provided is it is a great framework of how to grow. And when you start feeling those growing pains, like "Here's a good way to do governance. Here's how you start special interest groups to address whatever concerns."

Actually, as an example - there's a sister foundation called the CD Foundation (Continuous Delivery Foundation), and GitLab is a member... And some other members and we were talking about how interoperability is a key thing that we all set out to do with this foundation, but we're not sure if it's there yet... So seeing the example of how Kubernetes had Special Interest Group 6 - that's what we actually proposed. I put my name down as some of the people who proposed that "Hey, why don't we have an interoperability SIG?" So we had this structure -- is structure the right word...?

**Gerhard Lazu:** \[40:15\] Framework maybe?

**Priyanka Sharma:** Framework, yes. Exactly. We had this framework to learn from, and then we moved a lot faster than if we were the first people to think up of SIGs, right? So that's been really helpful. And I also think, to your point about how KubeCon - everybody comes here and learns - that started off very Kubernetes-driven, right? And the other projects, I think, followed suit in how to present themselves, how to educate the community. So the learning is, I think, deeper than just like "Oh, this is how Kubernetes structured their docs. Let me do the same." It's more like processes, governance, the how-to-be... \[laughs\] We learn from Kubernetes.

**Gerhard Lazu:** I can see this openness, this desire to be better, this desire to learn. It's so present in everything. And it doesn't matter whether you're at Red Hat, or whether you're at GitLab, or whether you're at Google; they all learn from one another, and they're willing to accept that there is a better way. And I haven't seen this before. This feels something new. And the scale that it reached... We are all trying to improve the technology around us, and it doesn't matter where we're from, we have this common language, we have these common frameworks that we can apply, and these approaches which have proven themselves over the years... And the things that we are creating and the way we are working today feels so much better than it was five years ago.

**Priyanka Sharma:** Yeah. I would like to give a shout-out to the CNCF leadership, as well as the board... Not myself, the other people. \[laughs\] I'm definitely a newer member of the board, relative to some folks who've been around for a while. I noticed that we had the board meeting on Monday, and I just noticed how passionately people were sitting, debating some topics that were brought up... And someone asked me, like "Why do these people care?" Many of them have become independently wealthy because of this ecosystem; why do these people care? It's like, because we always want to be better. You're never perfect, and the drive these people have... They could totally rest on their laurels, they could just chill and be like "We did this. This is great." No, no. It's a constant discussion of "What's next? What's next?" and I'm just inspired. I'm so grateful that I get to be in that room and see this, and because that motivates me in whatever I do, to be always trying to be better. It's pretty cool.

**Natasha Woods:** Yeah, I sat in on -- I think it was the second or third board meeting for the CNCF ever, and it was just as passionate. I was as passionate and driven.

**Priyanka Sharma:** You bet!

**Natasha Woods:** And I think that's also part of a culture change, too. You have obviously different age groups here, and you have very young developers, and even some of them are very young teenagers, and all the way through... And we want to make changes and we wanna be passionate about what we do every day. We don't wanna just be stuck in a rut, or work on something that we don't seriously believe in and love. I think that's why this is a great space.

**Priyanka Sharma:** Yeah. And I think that's also why the scale that you were commenting about is happening, is because nobody is resting on their laurels... It's like, proactively identifying "Okay, this is maybe not a problem right now, but within six months it will be." And that focus on preempting problems I think is what's keeping this community growing really well.

**Gerhard Lazu:** \[43:57\] I'm wondering how much the fact that everybody is doing things for the right reasons has contributed to this community becoming what it is today. There's no competition - or at least I don't see it - there's no trying to be better than someone else... We're trying to be better for ourselves, and better than I was yesterday, but I'm not competing with--

**Priyanka Sharma:** There's enough work just being better than yourself... \[laughs\] It's hard enough to do that.

**Gerhard Lazu:** That's right. And it seems like that is the best reason to contribute and to be part of this, because it's forcing yourself to be better. And you're not competing with someone else; they're all your friends, and they all have these goals which seem to be the right goals, and that's why everybody is growing and everybody is happy, and there is no conflict. I haven't seen, at least, any conflict.

**Priyanka Sharma:** I think there's healthy conflict. It's not like "Oh, let me step on this person's toes to be taller myself", it's more like "Well, maybe I disagree with you on how we should move forward, because of my reasons, and this is my logic", and somebody else will think something else. That I see actually often. As we said, very passionate board meetings.

**Gerhard Lazu:** Right.

**Priyanka Sharma:** And also, to your point - I think what you're getting at is that it seems like a healthy community, and not self-interest-driven.

**Gerhard Lazu:** Exactly.

**Priyanka Sharma:** And I think -- obviously, we're all very great, but there's also good checks and balances, in my point of view. I have noticed this - any time it seems like let's say somebody is maybe unintentionally taking advantage of something, it's brought up really quickly, and it's discussed in the open. So I think people nip it in the bud. And you have to be watchful of that, because realistically, this community is a powerful community; everyone's really humble, but these are the people that control a lot of IT budgets, and decisions on what software is bought somewhere etc. So people could get very self-interest-driven, but I think here's a check and balances... And also, the avenues for people to actually promote themselves.

I voluntarily spend a lot of time in the sponsor showcase today, because I was having such a good time talking to different booths; I even tweeted about them. No one told me to do it, but I was actually enjoying myself as an attendee in doing that. So I think providing that space where people can express self-interest, and nipping it in the bud really quickly wherever something's not the right avenue. That combination is really important.

**Natasha Woods:** Yeah. And I would say that the community has a code of conduct, the events have a code of conduct, the Foundation has a code of conduct, projects to graduate need a code of conduct... And Kubernetes has a been a really great example of a code of conduct. I know Sarah Novotny and Michelle Noorali and countless others worked on Kubernetes' code of conduct very passionately, and when there were violations they took it very seriously. Even here at KubeCon, if there's a code of conduct violation, the events team takes it extremely seriously. I think that in itself sets a precedent for everybody.

We have a code of conduct for GitLab if you're contributing on the issues, and we remind people of it. So it's definitely very serious, and I think that helps with the checks and balance, it helps keep people in check, and they more come to this conference with that open source code of conduct mindset, or the way that they contribute with each other on the projects, or cross-company partnerships... And I think sometimes that has been trumping capitalism and competition.

\[47:49\] I do disagree there is competition and companies do need to make money, and some of them are doing very well, and some of them are great upstarts... But there's a level of respect that's in this community that maybe some other communities -- it's a little bit more cutthroat... And I really appreciate that.

**Priyanka Sharma:** Yeah, I totally agree. And there's this nice -- the code of conduct is so important, now that you bring it up... I feel like how the leadership or the events team handles code of conduct reports is really important. Sometimes people might feel like when they report, if it feels like they're seen as a complainer, they will not be incentivized to do that. I actually reached out to the events team at - not this event, one of the other events - because I'd noticed something which I thought was not okay... And I wasn't even sure, frankly, if it wasn't okay. I just was like "This is seeming off. I should notify somebody, just to check into this situation." And I didn't even worry about "How will I be perceived?", or any of that stuff.

I emailed them and I was like "Hey, this is what I noticed. I thought you should know. I'm not saying definitely something bad happened, but maybe worth looking into as a preemptive thing." And they were just so grateful, they were so nice. I connected them to the people they had to talk to, all of that... And it was an easy process for me. It was a frictionless, and no judgment, no shame. Creating that environment is really important. I think they did a good job of it.

**Natasha Woods:** I think it creates a safe space. If you looked at when Dan Kohn did his opening keynote and he said "How many second-graders or first-time KubeCon attendees do we have? And how many fourth-graders, or veterans?", there was so many hands that went up... And walking around and just getting to know new people this week, I ran into so many different people that are new... And they keep saying how welcoming the community is, and how they feel like this is a safe space. I think that's really important, because if you're stepping out of your comfort zone and you're new to a community, and you may be new to development, so that's very intimidating as well... I mean, I was nervous doing my first MR...

**Priyanka Sharma:** \[laughs\] Merge request, for the uninitiated...

**Natasha Woods:** Yes. \[laughter\] But it's definitely a safe space, and I think that the communities have come together; not just Kubernetes is here. Obviously, we have Prometheus, and Open Tracing, and Jaeger, and Linkerd, and all of those... But these communities have really come together to make it a good environment to contribute. If you haven't contributed or are thinking about contributing, I think it'll be a good experience.

**Gerhard Lazu:** Yeah, I would agree with that. This was my first KubeCon, and...

**Priyanka Sharma:** Yay!

**Gerhard Lazu:** ...as I mentioned to begin with, I was definitely a second-grader... And that's why everything that I've seen has been so positive. And you're right, a lot has happened in the past - all good things - which led to this safe space, or this great way of collaborating, of communicating, of just being together. And the way things are being managed, it's amazing.

**Natasha Woods:** Yeah, and you mentioned earlier about - you know, you wonder if Kubernetes has influenced the smaller projects that have come after it... And the same could be said - has KubeCon influenced some of the conferences that have come after it? And I'm gonna give a big shout-out to Priyanka here, because she worked tirelessly to put out the first GitLab Commit event, which happened in Brooklyn in September, and it's GitLab's first user conference. We've never done this before. And obviously, more larger companies than us have their conferences... And we fashioned a lot of that conference after KubeCon.

**Priyanka Sharma:** Yes...

**Natasha Woods:** We wanted it to have that same learning and open community feel, we wanted it to be a safe space, we wanted people to walk away just having a great experience... And our events team has been great about doing that. But it was a big influence for us.

**Priyanka Sharma:** \[52:03\] Absolutely. The biggest thing, at least for me, when I was thinking about GitLab Commit, was that we wanna be like KubeCon in that "Content is king." You have to educate, you have to have real stuff to say, not some pitches. And I borrowed a lot from -- I'm on the program committee for KubeCon, and thank God, because I was able to mirror that process. We didn't need to be as complex, because it was a first-time event, but I had a framework/playbook to work with, and that, I think, created the good content that we saw at GitLab Commit.

**Natasha Woods:** Because everything was documented.

**Priyanka Sharma:** Everything was documented. \[laughter\]

**Gerhard Lazu:** So circular! We keep coming back to this, right? It's... Yeah. That's right.

**Priyanka Sharma:** It's really cool.

**Gerhard Lazu:** So what do the next six months look like for you, or maybe between now and the next KubeCon, which is in 2020, October or November, in Boston?

**Natasha Woods:** Amsterdam first.

**Gerhard Lazu:** Right.

**Priyanka Sharma:** So there's three, actually: EU, Asia-Pac and U.S. So three checkpoints in the year, I think. So what's next? Well, from my perspective, I'm actually really excited about Amsterdam, because it's in about six months, and I think a lot of stuff that we're seeing, that I attended talks about, will have -- you know, there'll be more projects that will have joined CNCF, as some technologies will have released 1.0's... And I feel more prepared now for that. This has been a good checkpoint for me.

I think my focus as a technical evangelism person at GitLab is going to be to make sure we're engaging in those conversations and bringing the GitLab perspective... Because the nice thing that I think GitLab contributes to these conversations is that we are very close to the end users. We ourselves are an end user, because GitLab is also on a DevOps transformation cloud-native journey, and over 100,000 organizations use GitLab pretty extensively. Even randomly walking down these halls I would meet people that would be like "Oh yeah, I'm a GitLab user. I'm using it to deploy to Kubernetes." I was like "Rock on! That's awesome!"

So it's a really big priority to just engage with the community and keep bringing that perspective in. So that's on a high-level what I'm thinking about.

**Natasha Woods:** Yeah, not to freak you out - it's four months away. It's March 31st. \[laughter\] No, I think a big priority for us is we have GitLab Commit San Francisco on January 14th, so again, just bringing our community together... And it's great, because there's a lot of lessons learned, and a lot of great content here, and just seeing the way that people are learning, and kind of taking that back to that conference as well, and then transitioning over to the next KubeCon will be a lot of fun.

I'm excited for some of the next releases GitLab has coming out... We have a great EKS integration...

**Priyanka Sharma:** AutoCluster Create... Sorry, it was a mouthful.

**Natasha Woods:** Yes, thank you. AutoCluster Create. We have a great Crossplane integration...

**Priyanka Sharma:** That's a big one.

**Natasha Woods:** ...for our release coming out on the 22nd of November, so I'm excited to see that. I'm excited for Christmas, because I'm tired, and I need a break...

**Priyanka Sharma:** Yay...! \[laughs\]

**Natasha Woods:** That'll be fun. No, it's just really cool to see the community. This is the first KubeCon I've attended not working for CNCF.

**Priyanka Sharma:** Oh...! That's a big deal.

**Natasha Woods:** It's a big deal. That was a big, big part of my life, and I'm still very appreciative of everything I learned, and just being part of the community... It's been really nice. I can't tell you how many great conversations I've had this week, and how many hugs... Just a wonderful time spent catching up with people and what they're doing, and just watching the foundation grow, and just being so proud, and...

**Priyanka Sharma:** \[56:02\] You've done so much for it. It's amazing.

**Natasha Woods:** And just proud of all the little technologies, and how far they've come... And when I heard CloudEvents hit 1.0, I was like "Yes...!" I was so excited for CloudEvents... If you haven't heard of CloudEvents, go check it out. But they hit their 1.0 and I was like "Man, I remember when Doug Davis first brought that into the SIG, and look what it looks like now..."

**Priyanka Sharma:** Yeah, that one actually is really useful. I'm a track host at KubeCon, so I introduced a talk about CloudEvents... And there's a lot of confusion around CloudEvents, Knative, which one to use, that type of thing... And this talk is by Ian Coffey, so people can look it up, and I think it's "The Future of CloudEvents", something like that; there's "future" in the title. But it really shows well how those two work together.

CloudEvents has - and I learned, which I didn't know before that session - really matured, and is a pretty useful part of how to do serverless eventing, basically.

**Natasha Woods:** I'm gonna have to go to the CNCF YouTube page and check out that video from his session.

**Priyanka Sharma:** Yeah, it was so funny... He had this demo, which was like AI bots talking to each other, and there were moods he could set. So he set the mood "Distracted", so the bots just started saying things like "Sparkly-Sparkly! Unicorn here!" It's so distracting... It's just like random stuff... But it's demos like that -- it makes the story accessible, and interesting. I feel I came away much more knowledgeable of CloudEvents and Knative, and how the two work together etc. So I highly recommend that one.

**Natasha Woods:** Can I add that application to my kids and go "And sleep!"? \[laughter\]

**Priyanka Sharma:** That's really funny.

**Natasha Woods:** That would be wonderful.

**Priyanka Sharma:** I actually just wanted to -- the 12.5 release that you mentioned, for GitLab, I think has really got some impactful stuff. One thing that we had so much cool stuff to discuss that we didn't touch upon is just the importance that we are seeing at this conference of multicloud. Our CEO, Sid - we hosted MulticloudCon and he said "Kubernetes is the great equalizer for the cloud", and that's so true. And in 12.5, which is coming out in two days' time, GitLab is gonna ship with Crossplane, which is an open source project which basically enables application portability between clouds... Because it's a universal control plane where every cloud is a first-class citizen. It's pretty amazing, and exactly what's needed.

I think that one is a big one, because it will help end users in the desire to be not locked in, to be multicloud, go a step further, and within the comfort of the tooling and workflows that they're used to... So I did wanna give a shout-out to that.

**Gerhard Lazu:** Yeah, Crossplane - I've been following them closely... Markus - he was working for Linode at the time.

**Priyanka Sharma:** Sorry, who?

**Gerhard Lazu:** Markus... I forget his last name. Johannsen? Not Johannsen. Markus...

**Priyanka Sharma:** Not sure. \[unintelligible 00:59:05.28\]

**Gerhard Lazu:** Yeah, so first name Markus, and he worked a lot on Linode, on the Terraform provider, on the Kubernetes building blocks, and that's when we were working together from the Changelog side... And \[unintelligible 00:59:20.29\] because Linode is one of Changelog's partners and sponsors. And when he transitioned to Upbound and started Crossplane, I was so excited to see 0.3, 0.4, and the livestreaming which they are doing, and the Kubernetes interface to interact with all these clouds, and making them so accessible - that was amazing.

**Priyanka Sharma:** Exactly what's needed. Exactly what's needed. It's pretty cool.

**Gerhard Lazu:** \[59:54\] Right. So Kubernetes just goes beyond what people have imagined to begin with, and now all these extensions being added... I really, really like that. It's so exciting.

**Priyanka Sharma:** And like all clouds, and on-prem. Everything.

**Gerhard Lazu:** Right, right.

**Priyanka Sharma:** So it's like, there's no second-class citizen. We have an end user called Genworth who spoke at MulticloudCon, and they're an insurance company, so regulations really matter for them... And they're like, the reality is that different regulatory reasons will make you actually pick different clouds many times. It's not like you just feel like it; you have like a legitimate -- you just have to. So the end users are like "We have to use multicloud both", so we've gotta help them. We have to make progress to just level the playing field of operations.

**Natasha Woods:** Yeah, you make a really good point. I think Crossplane and GitLab and a lot of the companies you see here are having to meet the end user where they're at, versus "Oh, they have a desire to do this." Well, sometimes they're locked in and they can't. And I'm not talking about vendor lock-in, I'm talking about regulation lock-in, things like that... So it's really meeting with them where they're at, and knowing that going in. It's, again, the wanting to help, the being nice and wanting to contribute back, it's "How can we help you?", whether you're using the open source tool or a paid version.

**Priyanka Sharma:** It doesn't matter. Actually, at the same MulticloudCon we also had a panel of venture capitalists, and we were asking them questions, and like "This ecosystem is really evolving, and the type of companies you were funding before - now what's the difference?", and one of the things they said was that in the initial \[unintelligible 01:01:37.11\] when Kubernetes came around was people had these futuristic technologies, awesome tech, but a regular company would have to jump through a billion hoops to get there. And some of those tech were getting funded back then, but now I think there's been clarification in the market, where if someone is not able to meet the end user where they're at, it's not a very fundable idea anymore. And I think that's a great thing... Just because like -- it was the point of like designing rocket ships if people need cars... You know what I mean? That disconnect isn't good, so I'm really happy to see that change.

**Gerhard Lazu:** Thank you very much, Priyanka, Natasha. I've learned so many things.

**Priyanka Sharma:** We all learned so much!

**Gerhard Lazu:** The gift that keeps on giving... I'm so glad that we had this opportunity, I'm so glad that KubeCon is happening so often across the entire world. I highly encourage anybody that is even mildly interested, or even if they're not - just join it, see what it's all about. It's an amazing experience, and it's really difficult to capture it in a couple of words, or even in half an hour. We could be talking about this on and on and on. There's so many aspects... A bit of something for everybody, and actually many things, and things that no one even expected. There are many things which I didn't expect, and they're all amazing, so... Thank you.

**Natasha Woods:** Thank you for having us.

**Priyanka Sharma:** Thank you so much for having us.

**Break:** \[01:03:21.21\]

**Gerhard Lazu:** It's the 21st of November, 2019, it's the last day of KubeCon. It's a sunny day... We had two days of rain and wind and misery. The spirits were high, everybody was super-excited, and now, on a sunny day, we have Alexis from Weaveworks with us here, sharing some of his mindset and sharing some of his takeaways from this amazing event.

**Alexis Richardson:** Thank you. Nice to meet you, Gerhard. Glad to be here.

**Gerhard Lazu:** What got you really excited at this KubeCon?

**Alexis Richardson:** I was tweeting about this this morning... Something I saw today that was exciting - and yesterday - I was very happy to see that the conference has grown, but also the Foundation has changed its style a little bit. People are now coming through the community, and from other open source communities out there, technology communities, and saying that they want more of a say and a role in how the Foundation works, and therefore how the ecosystem functions, how the projects work, how we add value to end users, and all of these things, which I think represents a passion from the community. I could be very passionate about other people's passion, about the success of the project...

People are saying "How do we get elected to the TSC? I wanna be elected, I wanna stand... Where does it say?" And it turns out that this isn't very well described, and it's a little bit complicated, so we need to make it clearer to people how to get involved, how to help. We need to simplify the process of people getting involved, so the community can run this thing. So that's very exciting to see... It represents a real maturity.

On the commercial front, I've been on the floor this morning, and talking to lots and lots of people, companies using Kubernetes, GitOps, Weaveworks very successfully, to build real commercial platforms. Kubernetes app platforms, app delivery, CI/CD... All of these things are things they're already using now. A couple of years ago they were just getting started, and that's really a change.

Yesterday I was on stage with Fidelity \[unintelligible 01:08:29.20\] a solution for the Fidelity platform and the cloud... You know, it's been a long time waiting for a big financial to make that kind of bet, of putting everything in the cloud. There's been a few others as well, but it's very impressive. So that's been great.

**Gerhard Lazu:** I think that's really exciting to see. It's not just a maturity in the way the community is approaching this ecosystem, which has grown so much... And a lot of ecosystems, when they get to a certain point they start to degrade. I think this is something that we're seeing here, where there's some good balances and good checks in place which make sure that everybody participating is focused on the positive, is trying to do things better, is trying to improve, so that the ecosystem continues to grow in the same positive way.

**Alexis Richardson:** Absolutely. If you think about the ecosystem as an economy or a marketplace of ideas perhaps, you might use phrases like "level playing field" or "fairness and trust." Continuing the analogy, if it were a table like the one in front of us, somebody could overbalance it. You could have those four corners, which are the end users, maybe the projects, maybe the small vendors, maybe the big sponsors. And if you overweight the table by putting a big weight on one corner, it will collapse. And we've seen that happen with other foundations. Or they didn't quite collapse, but they became wobbly, and they had to spend several years fixing themselves. If you don't have a balance of interests, so that everybody can participate, the whole thing falls over.

**Gerhard Lazu:** \[01:10:09.01\] I think that's a great analogy, and that helps people understand a little bit more what is maybe one of the things that are special about the CNCF, about the Linux Foundation, about Kubernetes and KubeCon itself. We can see these good principles everywhere around us.

**Alexis Richardson:** Yes. For example, we wanna see great projects. I'm personally involved in projects like Flux and Argo now, which have joined together. Flagger... Weaveworks have other projects as well that are either in or hovering around the CNCF, like Cortex and Scope. Now, we want the CNCF to be a great place for fantastic open source projects, a really appealing place to put your project if you wanna be a real leader in the space, and we want to bring in the ones that we think are the best. Not necessarily individually the best; sometimes there'll be several projects that collectively cover different aspects of one space \[unintelligible 01:11:02.08\]

Some people have said "I am confused. There are components. Where is my platform?" If we were to pick one stack or one platform, we would be forced to focus on just one use case. So instead what we've done is we've created an environment where vendors and big end users and systems integrators can choose how to assemble platforms and create economic value around that and create products. So we have a separation of project components and commercial products that the CNCF encourages.

Now, with other foundations, there's been things where even naming any commercial interest at all in the room gets you sent out. And I used to work at VMware and we were responsible for Tomcat, and if we used Tomcat in the wrong way, we'd get letters from the Apache Foundation.

Then there was the Eclipse Foundation, which moved a long way towards the commercial interest, but unfortunately, you know what's happened to that; it struggled a bit. I think with OpenStack one of the things that wasn't quite right was they tried to create a single stack-like organism at the beginning, which meant that the more it grew, the harder it became to change. And it was only suited to one use case. And of course, if they got the use case wrong, because they thought it might be a public cloud, then it was private cloud, then it was an automated data center... Then the stack wouldn't necessarily adjust with that. We don't wanna make that mistake, so we want there to be great projects that you can build into platforms and products, but we see vendors doing that.

**Gerhard Lazu:** Right. A thing which I would like to add to this is that many mistakes have been made in the past, but the difference that I can see in this ecosystem is that sufficient people that have learned from those mistakes came together and are very wary of what happened in the past, and they're very conscious; and just like yourself, they're saying "Let's not make those same mistakes again." And everybody seems to be pulling in the right direction and seem to have the right reasons, and the right reasoning, so that what is happening now is like a best of many worlds.

**Alexis Richardson:** I believe that the analogy for the cloud-native change is the rise of the World Wide Web in the 1990s. That was the last time we saw a really significant technology replatforming, creating massive business opportunities for large and small companies, but also fun things to do, technology changes for developers and for the community, held together by open source and also open standards like W3C, with all the big technology creators pushing in the same direction together. If you were part of that, it was just a lot of fun as well. And I see that again today; that's what makes the CNCF so exciting - we have a collection of technologies that's creating a new platform, for a new class of applications and digital experiences... And companies that don't understand that are lost. I think they just don't get it. They are so confused, and a couple have struggled; it's been a bit too difficult for them to understand how the end users are driving this as well now. We didn't see that with, say, OpenStack, or big data. Where were the J.P. Morgans or the Intuits? I'm wearing an Intuit T-shirt... So yeah, there you go.

**Gerhard Lazu:** \[01:14:30.11\] Okay. So to take one specific aspect which I know that you're very passionate about, is GitOps. And just to go a bit down on the vertical as far as GitOps is concerned, first of all, what is GitOps?

**Alexis Richardson:** GitOps is -- we called it "operations by pull request." It's fundamentally about automation. Git and ops. Git is, as you know, an open source shared control system for documents and code, which has many implementations including GitHub, GitLab, BitBucket, and others... And actually, you don't even need to use Git for GitOps, but it's probably the best implementation of the concept.

And around Git we have developer workflows. And the developers who are doing these workflows used to just write code and push it, and then they would have other tools that did infrastructure automation. With GitOps we see a much tighter coupling between that and a new class of automation tools for operations. So in GitOps, operations is as automated as you like, and is triggered by changes in what's in Git, which we call "the source of truth."

The people who love GitOps love it because they can ask questions like "Is my infrastructure/my cluster in a correct state? If I destroy my infrastructure or delete it, can I start it again in the right state, and can I upgrade just by making config changes?" If you can't do those things, you will end up in a manual, semi-automated mess, and that's why so many people today have got stuck with one or two or three snowflake Kubernetes clusters, which end up getting frozen... And then when the team that built them move on, they don't know how to adapt them to new circumstances.

Commercially, we are engaged with customers who are building application platforms using this. Yesterday on the stage with Fidelity we showed how GitOps was an enabler for -- currently it's on Amazon, but it's designed inherently to be MultiCloud. A new class of application platform for categories like machine learning, big data, mobile apps etc. So it's a very, very powerful technique for building application platforms using our products, and also many open source tools.

**Gerhard Lazu:** So would you say that GitOps is enabling the Kubernetes landscape, or the Kubernetes landscape is enabling GitOps?

**Alexis Richardson:** I would say if Kubernetes is the problem, GitOps is the solution.

**Gerhard Lazu:** Really? Okay, that's a great way of putting it. So beyond Kubernetes, do you see GitOps going into other areas? Can it expand beyond that?

**Alexis Richardson:** The concept of git ops was invented by Mark Burgess with CFEngine in the '90s. Then it was popularized through the continuous delivery movement and infrastructure as code, with books like Continuous Delivery by Jez Humble and Dave Farley, which talk about this idea of having autonomic convergent changes. So the idea is you make a change in config and then you never touch production, but it always converges to the correct state based on automation tools. That was a prediction, because we didn't have all the tools yet.

Then we had tools like Puppet and Chef, which -- the declarative approach turned out to be a better one. People started \[unintelligible 01:17:44.20\] infrastructure as code. Then we had immutable containers, which is another piece of the puzzle, and then we had tools like Terraform and Kubernetes and Flux and Flagger, and many other git ops tools. You don't have to use us, there's others as well. Argo is one of them, from Intuit.

\[01:18:02.28\] Yeah, I think that git ops is spreading beyond the core Kubernetes environment. If you're using Terraform, you're doing git ops for broader things. I'm seeing it being integrated with back-end services by both Google and Amazon projects. I'm seeing git ops for Lambda functions coming through, I'm seeing git ops for database schemas and database upgrades coming through... There's a company called \[unintelligible 01:18:27.02\] that has just released a bunch of really nice git ops tools which cover interesting cases like that.

What we haven't seen yet is git ops for data. What is the versioning story for that? Obviously, considerably more complicated. Probably best to leave it alone for now.

**Gerhard Lazu:** So there is Argo and there's Flux, and there's this continuous delivery, and there's the git ops... Very powerful concepts. Where does running tests, continuous integration come into play?

**Alexis Richardson:** So the great news is you carry on doing that. If you were using Jenkins, please carry on using Jenkins. If you're using commercial Jenkins, cloud-based, carry on doing that. Or you're using CircleCI, or you're using GitLab. These are all wonderful tools for doing what we think of as a dev cycle. But instead of actually having the external dev orchestration powered by your CI tool, be responsible for deployment and management.

In GitOps we put all of our deployment artifacts into our repositories, which will be the containers and the config files. These are immutable things. Then the ops is done autonomically, automatically - or automagically - by the tools that are responsible for managing the stack. So they deploy the changes, they make sure they're converging correctly, and they manage the system and they alert you if it's drifted from its correct state.

So what we're doing is we're pulling back the responsibility of CI just a bit, so it's no longer doing deployment, management and any kind of observability, because that's not really the role of CI. The external orchestrator drives the dev cycle, the internal orchestrator drives the secure deployment of changes. So the test and dev just carry on as before.

Now, the other one is testing in production, progressive delivery. That can be done using GitOps, too. We've created a tool called Flagger, in Argo; it's Argo Rollouts. These will eventually - I hope - become one project under the Argo brand. But Flagger lets you make a change and then adjust the impact of that change in the live system.

You, for example, could roll out a Canary - meaning a new image - with a new feature, you could direct 5% of your traffic to it to test it in production, you could even run a security check and roll back automatically if things are insecure. You can do feature flags in the same way... The future is thousands of clusters running thousands of experiments concurrently, so that everybody can make incredibly fast, iterative changes to their systems, all powered by GitOps.

**Gerhard Lazu:** So I hear a lot of tooling, different names... For someone just wanting to get started, what would you recommend? Which is the best way of getting started, to understand wha they are, how they fit together, how to start using all these tools?

**Alexis Richardson:** We have a lot of information on our website, weave.works, about this. Go to the GitHub pages. There's an independent site called gitops.tech, which I recommend as well. There are tools like \[unintelligible 01:21:28.04\] those, you can start doing git ops immediately. And in fact, more and more companies are getting into git ops.

I think one thing that we're missing still is the ultimate Getting Started guide. That could be a great thing for somebody to write.

**Gerhard Lazu:** Excellent. So contributions welcome, and contributors welcome. I think this is one of the areas which are worth emphasizing how there's so much great documentation and so many people willing to help. Anybody that wants to join, anybody that wants to at least get interested, and if something isn't there, reach out and you can definitely help. So just by pointing out that "Hey, this doesn't make sense" and contributing what you think would make sense - that's a great way of contributing on its own.

**Alexis Richardson:** Or just ask questions on Twitter, whatever you like. I'm @monadic on Twitter, I'm happy to take GitOps questions, as long as there aren't too many of them... \[laughs\]

**Gerhard Lazu:** What's next for you? What do you have coming up? What's into 2020 the first thing that you're excited about?

**Alexis Richardson:** Well, Weaveworks is an American company, with loads of great American staff distributed all around the U.S. We're hiring very quickly. Please get in touch if you'd like to work with us. We work remote, distributed, as well as we have a few offices for people in big cities. However, I'm - you may have noticed - British, I have an English accent; I will be enjoying next week what we think of in England as the quiet week, while all the Americans are partying with their Thanksgiving, because the week after that is Amazon re:Invent, and I'll be in Vegas, with all that that entails.

**Gerhard Lazu:** Exciting. Too many conferences, right? Too many great conferences. It's really difficult to pick which ones to go to.

**Alexis Richardson:** I try to go to as few as possible because of the Carbon footprint impact... But I think that these ones I have to be at at the moment.

**Gerhard Lazu:** Thank you very much, Alexis. This was great.

**Alexis Richardson:** Thank you.
