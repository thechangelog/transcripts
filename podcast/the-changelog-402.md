**Jerod Santo:** So we're joined by José Valim. José, we thought it was just a couple years ago; it turns out - four years since you've been on The Changelog. Welcome back, my friend.

**José Valim:** Thank you, I'm glad to be back.

**Jerod Santo:** We're glad to have you. We wanna catch up with you, and with Dashbit, and with the Elixir - big news coming out. Back in January, Plataformatec, the company that you co-founded and THE Elixir company for all those years was acquihired by Nubank, a fintech company in Brazil. Tell us that story.

**José Valim:** Oh, sure. It feels like such a long time ago, because this year has been so crazy so far... So Nubank - they acquihired Plataformatec; when the whole thing happened -- since it was an acquihire, they were interested in our talent... And it's interesting, because I think for everybody outside Brazil, Plataformatec was really known because of its open source work. Started back in Rails, we've devised a simple form, and then later with Elixir... And that was one of the reasons - we always had a very good technical team, and that was one of the reasons for the acquihire. But in Brazil, Plataformatec was really known because of the way we manage projects, and our "processes"; I'm doing air quotes when I say "processes", but you know, the whole way we would do project management and work with clients... And that was also another very important aspect behind the acquihire. It's actually a part I'm not super-involved, so I don't know how to explain everything we did...

**Jerod Santo:** \[00:04:21.10\] Sure.

**José Valim:** In Brazil, when we would work with clients, it was one of the big reasons why they wanna work with us, besides the technology aspect. So yeah, that was basically why it happened. But I think what is more interesting first to talk about from the Changelog perspective I guess is about how does that affect all the open source that we have been doing... Does that make sense?

**Jerod Santo:** Absolutely.

**José Valim:** Yeah, so as soon as the acquihire was announced, we knew that there would be a lot of questions. What it meant for \[unintelligible 00:04:52.01\] which were still under Plataformatec's responsibility, and also to Elixir... And there are many aspects to it. So the thing that we did immediately was that we told everybody that because those efforts were mostly community efforts, we would be giving all the assets back to the community. So we reached out to the device maintainers, and we said "All the assets, they are now yours. You are now responsible for the project. We won't be here, overseeing or holding control of the logo, and these kinds of things." So we did that for all of our projects.

So we transferred to the maintainers, and for Elixir itself we transferred everything to the Elixir team... And that's me and other four or five. My math is not good right now, but yeah, to the Elixir core team. And that was one of the things that we needed to do - you know, like who controls the codebase, the assets, and everything... But also something that people worried a lot in the beginning is what that also meant in terms of who is going to continue developing Elixir and the other open source projects... And I said, since the beginning, I'll be involved in the project in the same capacity. At the beginning, people were still like "Hm, I'm not sure... Is that going to be true?" But now we are 5-6 months after everything happened; it's true. I continued evolving, the same way as before, part to Dashbit, which is my new company, and we can talk about it soon...

But yeah, so the whole process - I think it's normal. When there was the acquihire, in terms of open source, a lot of people were worried what that meant, and if it meant less people working on Elixir or not... But I think besides this initial concern, everything went really smooth, and I think in practical terms nothing changed.

**Adam Stacoviak:** So to be super-clear, Nubank acquihired the consulting company you ran, not Elixir.

**José Valim:** Yes, yes. Nubank - what is really interesting is that they understand how important is open source, and they really supported us in this decision, because they understand that we need to continue leading Elixir with our vision, and it doesn't make sense for them to impose a vision of how the language should be. So when we were having discussions, we were like "Well, we want to give open source back to the people who actually maintain it." Everybody that was on the table, everybody agreed immediately.

**Adam Stacoviak:** Sure. How much did the Plataformatec bankroll Elixir development? In the acquisition mentioned by Nubank they say that "We're confident that the language, its contributors and projects will keep growing and developing independently from Nubank", but it kind of depends on how much Elixir was really depending upon funding, or "bankrolling" the language.

**José Valim:** \[00:08:02.27\] Yeah, that's a very good question. Basically, Plataformatec funded me, working on Elixir. Initially it was part-time, when I started back in 2012, but I would say from 2014 or so I have been full-time. So the cost, if you don't factor in the opportunity cost, but the cost would be a developer full-time for like eight years or so. At the end - we can talk about these when we talk about Dashbit - we had more developers working on Elixir, but most of it was me full-time.

And that's the thing... One of the things that I have always been careful - and all of my co-founders, we agreed with this decision since the beginning - is that it cannot be seen as a company effort. We always need to have the community involved since the beginning. So Plataformatec was sure -- we were the creator, the catalyst, but as soon as it didn't depend on us, on Plataformatec as a company for the language to evolve, that would be the best... What I like to say is it's not the best way to think about it, but just as an example, if you think about programming languages today, and programming languages "competing" for market share (I'm doing air quotes again), we're talking about like Swift from Apple, Rust from Mozilla, Go from Google, F\# for Microsoft... So how can a company that had 70-80 employees compete at this level?

**Jerod Santo:** Right...

**José Valim:** So we knew that it needs to be a community effort. So I think the first person, who was Eric - he joined the core team in 2014, and since then, the core team has been growing. So when it comes to Elixir, I was the only person that was really bankrolled at Plataformatec. It was not like half of the core team, it was one-sixth, one-fifth of the core team was bankrolled. And I think that's great, because there's always the buzz number factor as well. I don't want things depending on me, like if I die, does it mean the project is over, for example?

**Jerod Santo:** Right.

**José Valim:** So Elixir was not really dependent on Plataformatec, and not on me as a person. And sure, some of the people in the core team, they work on there full-time. Other developers, like Eric - he's sponsored by Brex, the credit card company, to work on Elixir full-time... So you know, it has become like -- is it correct to say stakeholders? There are like many stakeholders now, people involved and investing in the language and the ecosystem, and not a single entity anymore. It's how it was planned to be early on, because I don't think we'd be able to grow otherwise, or to get to the place where we are right now.

**Jerod Santo:** So if we were to put me into a time machine and give me a billion dollars, send me back to the mid-'90s, I might buy the Chicago Bulls. But I wouldn't buy the Chicago Bulls and not get Michael Jordan. So let's talk about Nubank - they acquihired Plataformatec, but they don't get José Valim? That's a blunder, isn't it?

**José Valim:** \[laughs\] I think there are two aspects to this, in the part of the acquihire. There were two factors - one was our technical team, and the other one was everything that we do in terms of methodologies in terms of projects, which I don't contribute at all... And I believe that was very important for them, because they are really growing very fast. They started in Brazil, they're expanding to Latin America, and everything...

I think there's a recent -- I haven't seen it, but there's a recent documentary on Netflix, and I think one of the discussion points was that there was somebody who played with Jordan, that was very important for the whole team to function...

**Jerod Santo:** Oh, yeah.

**José Valim:** Do you know? I don't know anything about basketball...

**Jerod Santo:** Scottie Pippen.

**Adam Stacoviak:** Scottie Pippen. Yeah, of course...

**José Valim:** Okay, yeah. I don't know enough.

**Adam Stacoviak:** They're a pair. He's short, he's tall...

**Jerod Santo:** Yeah, they're both pretty tall.

**Adam Stacoviak:** I mean, he's shorter than Jordan... \[laughter\] Comparatively...

**Jerod Santo:** I think he's actually taller... \[laughter\] Regardless, they were definitely a one-two punch... And Jordan was the superstar, but Scottie Pippen was the glue.

**José Valim:** \[00:12:14.25\] Yeah, so we can say maybe Jordan did not go, according to your metaphor, but there were like three Scottie going there, and helping them.

**Jerod Santo:** Okay.

**José Valim:** And the other point is that they are mostly using Clojure, I believe...

**Jerod Santo:** Oh, really?

**José Valim:** Come to think about it, they are one of the biggest cases of large companies using Clojure at a really large scale... So it's actually interesting to hear about everything they are doing with Clojure, and the interesting cases, and how they are using the Clojure stack... And they write about it, they give talks, so it's very interesting to check that out.

So in that sense, if they brought me, maybe they would be bringing Michael Jordan to play soccer... \[laughter\] That's not going to be a good fit, right?

**Jerod Santo:** Well said...

**José Valim:** So you know... Anyway, it could be Michael Jordan to play soccer, but one of the things to talk about as well is because I like to say Elixir has three major influences, which are Erlang, Ruby and Clojure... So you know, a lot of the ways of thinking about problems are shared between Elixir and Clojure, and that's definitely something that hopefully was important as part of the acquisition, as well... But yeah, for me it was very important, personally speaking, to continue to be involved with Elixir. It's what I wanted to be doing.

And as I said -- you know, when we said about the importance of Elixir and of the open source projects, everybody agreed with that and understood that.

**Adam Stacoviak:** Were you ready to move on? Was it a good timing for you? Were you done (so to speak) with Plataformatec, and focus more on Elixir and what your next big idea might be, since you were so focused on Elixir?

**José Valim:** That's a very good question. I feel like personally speaking -- it's a yes or no. I'll explain why it's a yes/no. Let's say when you build something and you have an experience - in our case, Plataformatec was 12-13 years - and you work with a bunch of amazing people, and you work with the founders for that period of time, there is always that feeling like "Oh, it's changing." The relationship is changing; those are not going to be the people I talk to every day, and this kind of stuff... But there is also the relationship of like "You know what - we did this, we've built this, and it ended well, and we feel accomplished by that terminating", which is not a feeling that you get if that's ongoing.

Sometimes you feel a lot of accomplishment by saying that something has stopped, and has reached a dot, has reached a stop. So that's why it's yes and no. And I think being able to say "Oh, this was our journey that we shared together. This is what we've built. We are proud" I think that's great. But of course, I miss the people that I worked with. I still talk a lot with my co-founders, and we still exchange ideas, but it's definitely a different dynamic.

But the other aspect as well is that -- so let's start heading a little bit into Dashbit. Let me give an introduction for those who are not familiar. Dashbit is my new company; it's the company that I've founded after Plataformatec. What we do is that we offer a service called Elixir development subscription. The idea is that we help companies (startups and big corporations) to adopt Elixir, and we do that together with open source. So we try to build this virtuous cycle where we have companies with us, we get positive feedback, and we put that back into our open source work, and that hopefully leads to more companies adopting Elixir... And then we have this cycle going. That's the vision with Dashbit.

And the thing is that this vision - it has been running inside Plataformatec since 2018. So in 2018 basically I had a conversation with my co-founders.

\[00:16:15.16\] We had been investing in Elixir - mostly me - for six years (since 2012 to 2018) and I would love to have more people working on Elixir together. That would be fantastic. That's something we always tried, but it's always hard to make that dynamic work in a consultancy... Because what you do - maybe somebody is outside of a project for two months, and then they can do open source, but then they need to go back to a project, so what about the work that they worked on two months. So it requires more long-term investment.

When we launched Elixir development subscription it was like "Can we think of a way that we can help companies adopt Elixir, and that can be a kind of recurrent revenue for us to continue investing in open source, and for us to grow our team?" So this experiment has started inside Plataformatec, and it worked out well. It started only with me, and then Wojtek joined our team. Wojtek worked on Ecto, a way to communicate with the database in Elixir. He works on the Hex package manager... And then later, Marlus joined my team. Marlus has evolved things like the ElixirSense, which is like if you're using Elixir and you use an editor, and you have autocompletion, ElixirSense helps with that. So we were able to grow the team and we were able to multiply a lot what we have been producing in terms of open source since this effort started.

What is really interesting as well is that I believe this idea, the Elixir values description - it has really resonated with our clients, as well... Because what we would do before as a consultant is that somebody would say "Hey, José, can you come here, stay with our team for three days? We are kind of going to go over everything, and then you disappear." So it's like a basic consultant gig.

So I would do that, and then I would give the feedback, I would write a report, and then it would be like 1-2 months later that they would then actually start working on that report... And then they're like "Hey, we need help again." But now we were no longer under contract, maybe I was with another client... So the idea with the subscription is that you are in contact with our team all the time, and we are helping you review code, discuss changes, and so on... And this constant feedback, this constant communication is very important, and that's what resonated.

So we started this inside Plataformatec. When Plataformatec - the acquihire process started, and I just could not announce at the time... That's why I said in the blog post that I will continue to be involved in the same way, because I knew that me and my team, Marlus and Wojtek, we would just -- you know, we already have the infrastructure running, we already have everything running, and we are just going to put up a new front, and everything inside that shop, everything is how it was working before, and we would continue to be working with our clients and we would continue to be involved in open source.

**Break:** \[00:19:19.18\]

**Jerod Santo:** So the Elixir development subscription, which was created inside Plataformatec, really becomes the major first feature of your new company, Dashbit, with your two collaborators. Is it pretty much the exact same thing? And did you also get to take over existing clients as part of the shift over to Dashbit, get a leg up because you had some people already doing this, or did you have to start from scratch?

**José Valim:** No, we definitely got a leg up, and it's pretty much the same thing. So really what we did was just we made the website and we went public about it... Because that's the other thing - because at the beginning, when we started inside Plataformatec in 2018 with this idea, we didn't know if the idea was going to work in terms of dynamics, like "Can we actually help those companies adopt Elixir while still being involved in open source?" And the being involved in open source is really important for us. It's why we were trying this. So if I would have to spend 80% of my time not on open source, that would not be a good deal for me.

So we have been kind of like stealth doing this inside Plataformatec, and I would measure this on Elixir events, but I did not have a website. There was nowhere you could go to a Plataformatec website and know about this.

**Adam Stacoviak:** It was a hidden feature people had to find, pretty much...

**José Valim:** Yes, but people came to Plataformatec, to us, for projects, and this kind of stuff... And then depending on what they needed, we were like "Oh, you want to hear more about the subscription?" and that's mostly how we grew for the first year or a year-and-a-half, just from the incoming sales pipeline. And it was good, because we were able to grow very slowly, we were ready to take our time and make sure that everything is in place...

So yeah, when Dashbit came, it was literally like "Hey, \[unintelligible 00:22:26.02\] site." Everything else was pretty much how it was before... So we definitely got a leg up.

**Adam Stacoviak:** That means revenue was in place potentially... So you really were able to, I guess, navigate this acquisition, this acquihire, knowing that -- I'm sure you got some sort of \[unintelligible 00:22:45.29\] as part of it, but then also the next thing in, to continue to be able to invest in Elixir - I can imagine how that would make you feel pretty secure about your next steps.

**José Valim:** Yeah.

**Adam Stacoviak:** Is that pretty accurate, what I said?

**José Valim:** Yeah, I think so. It goes back to the thing I was saying - everybody understood what was the importance of this, that's why everybody was on the same page. We have followers that -- they are not technical ones, but they are really proud of us building Elixir, and being able to create this software that there are a bunch of people using... So all of us had all the time, and Elixir's best interest at hear, and that's why it was, let's say, very easy for me to do this transition, because I was really supported by everybody along the way. Everybody supported it.

**Adam Stacoviak:** I love the goal that's listed here on "Why Dashbit?" The goal is to advance the Elixir ecosystem through continuous adoption and sustainable open source development. That to me - the José I know, that's more your heart than the heart where you're doing consulting; I guess you're still doing that through the subscription, but that goal being an overarching goal of this shift for you is super-cool.

**Jerod Santo:** \[00:24:00.17\] Are there any other setups like this? I mean, we've talked about some of the other popular languages; most are bankrolled by major tech firms... Others are just smaller or more niche, some are started inside a company... This development subscription, and the fact that it could just transition right out of Plataformatec, right into a brand new thing and still be -- I would say, from my perspective as a member of the Elixir community, was like "This doesn't bother me. This doesn't worry me." This didn't bother me.

A lot of times when there's an announcement like this, it's a shake-up, and people wonder "What's gonna happen?" Even just Npm, acquired by GitHub, like "What's gonna happen?" But from my perspective, I was just kind of like "Oh, cool." You never know with an acquihire - is this a congratulations or an "I'm sorry". I think it was a congratulations here in the story, so congrats to the whole team, and I'm not worried about Elixir's future. That was just my own personal response to the announcement. When you say everybody has been behind you, has that been kind of the community reaction? Has there been any pushback, or worries, or fears stated to you about Elixir's future?

**José Valim:** Yeah, definitely worries... And I think they are natural, to be very fair. There are always some people -- like, the only thing that bothered me in this whole experience was that I could not prove the guarantees. I said "I'll continue to be involved in the same way. That's my word", and some people wanted proof of my word. That rubbed me the wrong way, because the implication is that I was lying, right?

**Jerod Santo:** Right... And you can't prove it without time. You need time to prove that.

**José Valim:** Yeah, I needed time to launch Dashbit. And even if I could announce there, I think -- it was not a long period; I think it was a 2-3 weeks period between when we announced the acquihire and when we announced Dashbit... But I also think it was a very good exercise, how the community is going to react to such a change... And it can help find flaws or gaps in the community.

As I said, Plataformatec was never really the big company behind Elixir. We created it, but today it's a community project. It belongs to everybody. So why were people still having these impressions, what do we need to improve in our communication?

So it was still a useful exercise to see where people would feel uncomfortable and skeptical, and see how we can improve the communication around those areas, to make sure that, again, if I die, it's not going to necessarily translate "Oh, Elixir is dead", and this kind of thing.

So there was definitely a little bit of pushback, some things that rubbed me the wrong way, but I feel like with the announcement that we did, that we would continue to invest in open source, most people were already reasonably comfortable (or comforted) by it... And when Dashbit came along, and people saw that I was involved in the same way, my team was there with me, I feel like 99% of the remaining reservations people had probably dissipated.

**Jerod Santo:** So since transitioning over to Dashbit - you got it launched out there a couple weeks later - some things transferred over... You mentioned Marlus works on Broadway, which was a Plataformatec project; now it's on Dashbit.co on GitHub. Of course, there's things inside the official Elixir -- is it elixir-lang, or the Elixir org... And then Ecto has its own org... So things are kind of spread out.

First of all, tell folks what Broadway is, for those who haven't heard of it... Because it's pretty cool, and we haven't talked about it before. What's this Broadway project?

**José Valim:** \[00:27:42.04\] Yeah, so Broadway is a library for doing data ingestions in data pipelines in Elixir. If you want to consume data from SQS, or RabbitMQ, or Google Cloud Pub/Sub or Kafka in a very efficient way, utilizing all the cores in your machine and doing batching, automatic acknowledgments, all those kinds of things that are expected from a robust data processing pipeline or data ingestion, Broadway is exactly for that.

And you know what's the coolest thing about Broadway? It's how and why we created it. That goes directly to what Adam was saying about the heart of the company... So when we started the subscription - this was still back at Plataformatec - we were working with different clients, and we were using a library called GenStage. So Broadway is built on top of GenStage, and it's called Broadway exactly because it coordinates these stages for you; that's kind of the pun in the name.

So we have a lot of companies that were using GenStage, our clients, and they were building those complex pipelines, and we were seeing out clients make the same mistakes over and over again... So we would work with them, improve, and then it came upon us, like "Wait, if everybody is building this and everybody is making the same mistakes, there's probably something that we can do about it, or maybe there's a higher-level abstraction."

So we started working on Broadway, that's how Broadway came to be... And it was really nice to later work with those clients, where they were getting their old code and they would ping us in the PRs, like "We have removed 600 lines of code, and we are adding 50 lines of code thanks to Broadway." So it was really just like, you know, work with the client, see exactly what's wrong or where it's lacking, getting that energy, putting it back into open source, and then going for this whole cycle of getting this feedback... But yeah, that's Broadway, in a nutshell.

**Jerod Santo:** Super-cool. So how many of these subscriptions have you done or are doing? Is it the kind of thing where there's just like one development subscription at a time? Or since there's three of you, can you get three of them going? And what kind of projects do you work on?

**José Valim:** Yeah, so I can probably not go a lot into that, just because of confidentiality with clients...

**Jerod Santo:** Sure.

**José Valim:** We have worked with more than 20 companies, and we have multiple companies with us at the same time. We're at a point where we are kind of like being very slow with taking new clients right now, exactly because we are in a comfortable place... And it always goes back -- like, if we start having a lot of clients, we cannot reply to them or work with them in a positive way, everything starts to go slow, so the quality is worse... And it also goes back to open source. If we have a lot of clients and we're working all the time, we can't do open source, and we're really in this because of the open source... But yeah, we have worked with more than 20 different companies. A lot of different companies are working with us at the same time.

We work with big companies, that have more than 100 engineers, so it wouldn't make sense for us to reveal the code produced by 100 engineers. It would never work out. Usually, the way it works is that you have a subset of your team, or when it's such a big corporation like that, you have the technical leaders, or somebody that is tackling a new, important project inside the company, then they are working with us. So we work with different clients and with relatively small teams, let's say from like 2 to 5.

**Jerod Santo:** I guess before I ask you too many questions in a row - because you skipped one of mine, which was "Is there anybody else doing this?"

**José Valim:** Oh, is anybody else doing this...

**Jerod Santo:** Yeah, like can you get a Perl development subscription, or can you get a Ruby development subscription?

**José Valim:** Well, I know there are support subscriptions for many things, like databases, for example. When we started, I've seen examples of other companies doing this, but if you go out to most database providers, they do have kind of like a support thing...

**Jerod Santo:** Like MariaDB, for example...

**José Valim:** \[00:32:01.23\] Yes, another example... And I know there are open source projects where their model for sustainability is based on top of support, as well. So it's definitely there. There are definitely other people doing this. I don't know if there are other people doing the mixture that we do today, which is - it's not really about support, but working with your team, being together in code reviews and participating on decisions. I don't know if there is that mix.

I assume that if I hire MariaDB and I'm going to design something, I can probably jump on a meeting with them in the support and talk about this stuff. But for us, that's something that is very important, and that's how we actually work with our clients most of the time - it's actually through code reviews.

**Adam Stacoviak:** When it comes down to the goal really, the goal is to 1) advance the Elixir ecosystem, and then 2, sustain the open source development of it. If that's your goals, then the reason why you're doing this is so that it can achieve those goals... So the question is, is this a model that other teams can adopt?

One question you said, Jerod, was "Are there others doing it?", but I think the bigger question is "Could they?" and "Is this working to do those two goals?"

**José Valim:** Is that a question for me? \[laughs\]

**Jerod Santo:** Yeah, is it working?

**Adam Stacoviak:** Is it working?

**Jerod Santo:** And is it reproducible by somebody else?

**José Valim:** I'll be very honest, I have no idea if it's reproducible. Not that because what we are doing is hard, it's just that I don't want to give anybody the impression that it's reproducible and be responsible for it. It may be reproducible, I don't know. I did it just once, and I know of anybody...

**Jerod Santo:** Step one, make a programming language. Step two, make it extremely popular. Step three, profit. No, step three is question marks, and then step four is profit.

**José Valim:** Or profit just the amount necessary, so you can continue investing on it.

**Jerod Santo:** Just enough to stay alive, yeah, exactly. \[laughter\] And do you feel like this is working for you, personally, in your life?

**José Valim:** Totally. I don't know usually how big are our cycles, like when you start a new journey, how long is it supposed to last... But we have been doing this for two years, with the team as well, and we are close; we talked a lot about these -- you know, we are taking decisions together, so when we say "Okay, let's ease a little bit and not take new clients, so we can continue comfortably"; it's a decision we take together... And we are always asking ourselves, "Are we enjoying this? Is this working?"

So to answer your question directly, when we ask ourselves this question, the answer is generally "Yes, this is working. We are happy." We are happy to work with our clients. We can work with them for interesting and challenging problems - that is always rewarding on its own, and we can continue investing in open source and doing the things that we love, and see our work affect the community directly... So answering more directly, it's definitely working for us... But how much can we reproduce it - that's a very good question, and I guess people will have to try and we'll see.

**Adam Stacoviak:** I think you'd find that out at scale. I think if it's working and we've already identified the goals, it's personally working for you; however, there is a bottleneck in the fact that it's the three of you. So you have to sort of take on clients, or subscriptions (using your terminology), you have to scrutinize them more, because "Does it take you away from the open source?", you said. So I guess the question is "Is this something that you could scale, desire to scale, or plan to scale?" Meaning bringing in more Elixir developers to take your seat in the seats metaphor, and enable you to add more and grow even further. Is that part of the plan?

**José Valim:** \[00:35:52.14\] So right now the answer is no. I don't want to grow our team beyond us three. I feel like if it could grow our team, it could have a really good, positive outcome, which is - now we are three people working on the Elixir community and project; what if we are five, what if we are ten, and everybody's contributing? I feel like that would be great if we could have ten, but I'm worried what is going to happen with me if I am the person who is making it grow?

Maybe if we are ten and then I can come back on this show and then you ask "Hey, José, is it working for you personally?", maybe my answer would be no, because I'm like "No, man. I'm not doing open source anymore. And that's why I was doing this thing in the first place." So maybe it can scale if somebody else comes and wants to make it scale and worry with that part of the business, so I don't have to... But at the same time -- right now, it's like, when you find the perfect temperature in the A/C, and you're like "Don't change it. Don't touch it." Right?

**Jerod Santo:** Right...

**Adam Stacoviak:** But what if you did change it and it was amazing?

**Jerod Santo:** It was even better...

**José Valim:** Right, yeah...

**Adam Stacoviak:** You would never know, right? That's risk, at its best.

**José Valim:** Yeah. I'm not curious to find out at the moment. Maybe in the future my mind will change... But at the moment I am enjoying staying small. I was at a company where we were 70-80 employees. I've kind of seen how that works. I want to celebrate staying small for now and enjoying that... And it may change in the future.

**Break:** \[00:37:43.14\]

**Jerod Santo:** So you weren't busy enough and you had another big idea, which is Bytepack, which - I'm reading on the website, it was actually a yak shave from another idea... So you've got things working at Dashbit in addition to the development subscription. Tell us about Bytepack and what you've been working on on the side.

**José Valim:** Yeah, so Bytepack was a yak shave... And it's a very funny story, because we were working on our own software product, so something that -- it's not fully decided yet, but you can think like probably something based on the open core model, where we would release a new project, and then there would be advanced features on top of it that would be paid...

So we were working on this idea, on this product, and the reason why we were working on the product is that we didn't want to build a SaaS; because building a SaaS now means that maybe someone needs to be on pager duty, things need to be working all the time... We were working on the software product idea that people would install somehow -- it would be an Elixir project, but maybe you would install it as an Elixir package or as a Docker image...

So we were working on this, and then we figured out "Okay, sure, but when we have this ready, what is the next step?" People need to be able to buy it. People need to be able to buy a license. So we need to manage licenses for them. Then they need to be able to download the latest version, so we need to integrate with whatever tooling they are using... And then we'll have to create a landing page for this product, and any other things that I learned along the way, like things regarding taxes... I learned that if you're selling a digital good, you may be liable for taxes in any country in the world, if some person buys from that country...

So when we started looking into it \[unintelligible 00:42:02.26\] we need to run a service for supporting this distribution of the software product. And then we started talking to people, and people were like "Yeah--" People that were running their own software product, they already have something that they are selling to other developers, they were like "Yeah, that's what I had to do." And I basically MacGyver the whole solution here. I connect this service with this service, that pings the service that gives a token, and somehow things work together... Or sometimes I'd still need -- if somebody cancels a subscription, I need to remove the token manually, and they are like "You know, it took me a lot of time, a lot of effort." And I would actually talk to some people where they were like "I want to launch my software project, but I know I have to solve those things and I don't know how, or I don't want to."

So the yak shave came where we said "Well, what if instead of solving this problem just for us, can we solve this problem in a general way, that is going to be useful to other people as well?" So our goal is to still have something that works for us, but if it can help other people along the way, that's going to be fantastic.

So the idea with Bytepack is that we help you sell, package and deliver software products to other developers and to companies, to enterprises. So the idea is that if you are a developer and you want to sell a pro version of an Npm package, for example, you will be able to do that for Bytepack. You're going to push the package to Bytepack, your clients are going to receive the versions, they can audit the versions, they can control, they can download it... So that's what we started working on. And I think maybe 2-3 week ago we launched a landing page to collect feedback on our idea. We have a beta that we're already using internally, but what are the features that people think we should focus for, \[unintelligible 00:44:04.29\] are most interested on, and so on.

**Jerod Santo:** \[00:44:10.00\] So it's kind of like an iOS app store, where Apple handles all of the nitty-gritty - the distribution, the payments, the spammers and scammers, taxes, all that kind of stuff. You just upload your binary to Apple and let them distribute it. With Bytepack you just kind of send your package to Bytepack, and set some pricing or whatever, and then folks just install it from there - is that it, in a nutshell?

**José Valim:** Yeah, that's one way to phrase it... But the thing about the app store - it doesn't necessarily give a lot of visibility to the team and the person who maintained or created that product.

**Jerod Santo:** It's software-first, and then the team is -- there's a by-line; there's like an author.

**José Valim:** Yeah, it's a footnote in there. And for us, especially if you're thinking about -- in our perspective, we feel like if we launch a software product on any platform, one of the appeals of the software product is that it's going to be the Dashbit team behind it, right?

**Jerod Santo:** Okay...

**José Valim:** So with the app store model - it wouldn't work in that sense, because we want to give visibility to the team, because we think the team that is behind it is really going to be the soul of the product that you're selling, and we would not want to take it away. A lot of times -- it's like when you are working with Dashbit; why are you working with Dashbit? Sure, you like our team, but part of the reason is probably because you're also vested in the future of the Elixir community and when you buy something that is open core, or dual license, or something like that, you have that interest as well. You want to see that project succeeding, and it's one of the reasons why you're moving forward.

I think it's very good with the app store, but there is a line we need to draw there... Recently, I learned that this line even has legal complications, for example. One of the things that we have been exploring with Bytepack is being responsible for handling taxes, and so on... But that's only possible if we indeed hide who is selling the thing, if it's not a big deal. But if you want to make it very clear, like "Oh, you are buying this because you're supporting this team and this product, and this is not something from Bytepack. We actually cannot say that we are -- you know, the liability for taxes may change depending on the legislation... So it has been really interesting to -- maybe not interesting, but... \[laughs\]

**Adam Stacoviak:** Complicated.

**Jerod Santo:** Yeah.

**José Valim:** Yeah, it's a mixture of either "Oh, this is annoying, but at the same time it's interesting." It's weird navigating those waters and trying to find a way where we can position Bytepack so it's most helpful for everybody... Yeah, I kind of went on a tangent there, with the taxes... \[laughs\]

**Adam Stacoviak:** That note there makes me think about your goals personally with Dashbit and what we talked about there... And thinking about global tax compliance, I can't imagine personally that's something that interests you. What do you think about that?

**José Valim:** Right, so that's a good point. I am torn on something like that, because on one side, if we can help people be successful on the platform and that's one of the features that people evaluate and they think they are getting a lot of value out of it, then that can be great. That's we put the landing page out, to see what things people are actually interested in and see what they need... Because part of the goal with Bytepack is exactly to help people -- I like to say it's to allow people to play with the numbers, especially when you're talking about sustaining open source...

\[00:48:05.09\] Because a lot of the times when you're talking to people about sustainable open source, it's a numbers game. If you are a really big project and you want to be sustainable, if you're really popular, if you have a good onboarding experience for contributors and so on, you're going to have a lot of people contributing and joining the team, and that's going to happen naturally, and you can achieve sustainability for that... But when you consider the long tail, or if you're a big project and you're going for donations - sure, you're going to potentially get a lot of donations, but when you look at the long tail, I want to allow people to play with the possibilities...

Well, which one is easier - is it easier to find 1,000 people who are going to donate $5/month, or is it easier to find 100 companies that would pay $50/month to use the pro version of my product? So if doing everybody's taxes sounds horrible... \[laughter\] If doing everybody's taxes can help with that, then I think that can be really cool... But you know, maybe that's not where most of our value is going to be, and that's something we will have to figure out.

**Adam Stacoviak:** The other side of that too is license compliance. Based on the 1-2-3 at least currently on the bytepack.io, step 2 is "Developers and enterprises buy this license directly through Bytepack", and then they download the product using the same standard tooling, Npm, whatever... Then I'm wondering if you've gotta somehow verify and do license compliance, too.

**José Valim:** Right, so I think license compliance is going to be basically -- I think they call it \[unintelligible 00:49:50.08\] A lot of people who sell software products today where they are serving for Npm or Ruby Gems... So if they have something that is per user, they trust you to be following the license legally. They trust you, because there is actually no way for us to enforce it. We could phone home, but if we phone home, I'm pretty sure it would be a no-deal for a lot of big enterprises, right?

**Adam Stacoviak:** Yeah, totally. It's gonna break sort of like the whole purpose...

**José Valim:** Right. Especially because when you're installing a Hex package, a Ruby Gems, an Npm package - they are usually running within your software. So if you are phoning home, I can send your database credentials, I can send your client information.

**Jerod Santo:** Totally.

**José Valim:** And again, if it's an Npm package, or a Hex package, or Ruby Gems, nobody's going to run compiled code, or obfuscated code... Because again, the person could be doing anything with that. So I think the nature of this module - it needs to be based on... I think \[unintelligible 00:50:58.04\] and if you say "Hey, you need to buy per user..." -- but not everything's per user; some people just say "Hey, it's a team license." Let's say "Oh, if you're using one person, it's a single license. Otherwise it's a team license." And then there's basically a kind of trust situation that you are doing those things, and you are going to follow those rules.

And the other thing is most companies - they will do that, because nobody wants to have legal trouble because they are not following a certain license. And the people that are not going to follow the license - they are probably the people that would not be interested in paying for our software in the first place... So there are those things to balance.

So with the license - we are going to do a lot to make sure that if it's through license, we are going to have the UI to manage that. And you know, for the organization it's also great, because if you're a big organization and somebody is removed from the organization, you need to make sure they did not have access for those packages and this kind of stuff, because it can be a liability. So if somebody gets some paid software out of a company, it's actually the responsibility of that company to make sure it doesn't happen... So the corporations are also interested in making sure that all of this works together, but a lot of it will be \[unintelligible 00:52:14.21\] And again, it goes back to the idea of supporting the team, supporting the open source project, and everybody understanding those goals and making the correct decisions, and the legal decisions as well.

**Jerod Santo:** \[00:52:30.10\] So would an ideal customer for Bytepack be Mike Perham, with Sidekiq and Sidekiq Pro, where you have an open source, free version and then you have a freemium or an upgradable -- I guess it's an open core, basically, where the additional features are then distributed via Bytepack. So maybe I use Sidekiq, and it's also .rubygems.org, and then I use Sidekiq Pro and it's hosted on Bytepack's infrastructure...

**José Valim:** Yeah, Mike Perham would be a great example... And similar ideas, like -- I like to give examples about \[unintelligible 00:53:01.02\] you want to have an admin dashboard... And I've seen in my life a lot of people starting those kinds of dashboards, and then with time, the project goes unmaintained... Because it's a huge effort making an admin thing that works for everybody.

**Jerod Santo:** yeah.

**José Valim:** Most of it starts with somebody doing something that works for them, and then starts the feature creep and then it becomes very complex. So maybe something like Bytepack can actually be a way for those tools to actually exist... Because the worst scenario is when the tool is no longer there, because it's unmaintained; there is nobody maintaining that, they do not have fun, there is no tool for people to use... So yeah, I think there are a bunch of potential ideas of things that would work for Bytepack, and some ideas that maybe they can find a more sustainable model when it comes to complexity and growing with time.

**Adam Stacoviak:** So essentially if somebody has the hurdle in front of them, they're not selling something like a digital/software product like this, that fits this model, because they don't wanna deal with the essential headaches that come with tax implications that we're talking about. They would be a great candidate for the platform you're trying to build.

**José Valim:** Yeah. All the things they need to do, like setting up payments, managing the licenses... And then maybe running your own version of Ruby Gems, and making sure that that is up to date all the time, our own version of Npm... If you don't want to have to do any of that, that's the model. But one of my hopes is just that -- I think there are people that don't even consider this option just because the barrier to entry is too high... And I think just reducing that is going to make more people consider it. So it's not necessarily only about the people who have thought about this and they were kind of demotivated, but maybe we can make more people think about it and try different ideas. Like I said, try with the numbers.

And again, maybe Bytepack doesn't work for a lot of projects as well, but if you want to find a way to make things work having one extra option out there for you to consider and try out and explore, it's going to be great.

I think even Mike Perham that you mentioned - he actually had to try a couple things out before he figured out what worked for him. Maybe Bytepack is what's going to work for some people, maybe it isn't... But I would be interested to see what people are going to try, and if it can have a positive outcome in general or not.

**Jerod Santo:** So Bytepack's cut is on a transaction basis then. You guys are basically just taking a fee per payment; that's the way that you're making money.

**José Valim:** We are not sure yet, to be very honest.

**Jerod Santo:** Okay.

**José Valim:** \[00:56:01.00\] It can be a fee, it can be a flat fee, I think... Since we launched the page -- and the page is out there, so it people want to try it out and still submit feedback, there is a form where you can say if you're interested... We are talking to a lot of people and see what works for them. You mentioned the app store, right? The other thing is the app store has -- what is it, like 30%, which is just absurd...?

**Jerod Santo:** Yeah.

**José Valim:** I can never charge something like that, because I also don't control domains, right? The benefits of a monopoly, let's say... So we are still considering that, and I really want to find something that feels like -- for both parties, they feel comfortable. People would always say "Oh my God, they are really going after me." I want to find something that's going to work for everybody, so that's going to depend a lot.

I personally don't think -- I've not started Bytepack because I want to make it a big company, because I want to maybe get VC and then sell it later... That's not the reason. I'm doing this to sell my own product; that's the most important goal. So I'm not worried about creating Bytepack to try to make as much money as possible from people that are using the platform. i just want it to be fair. I want it to be something where I feel like "Hey, this is working for me. I'm not losing money over these", for example. We can maintain the team, continue improving the platform, without being something where we are bleeding out the people that are selling or buying from the platform. And that's going to depend, what works best - if it's a flat fee, or a percentage. It's still to be defined.

**Adam Stacoviak:** That's clear, too.

**Jerod Santo:** \[laughs\] That's the real reason why the app store comparison falls short. You're like "Hey, don't associate us with that 30%. Come on now."

**José Valim:** Yeah, right?! Yeah, yeah.

**Adam Stacoviak:** Well, Apple is also -- or any app store out there. That's the Apple app store I think you were mentioning... But anything like that is totally a gatekeeper. But based on your current documentations and the FAQs, you're proving what you're saying by saying "You're gonna build directly on their payment provider account, not your own", so the subscriptions and sales will be managed by Bytepack, but not the actual transactions... So you're currently supporting Stripe and you're giving complete access to their data and their customers. You're not gatekeeping these things. This is just simply by solving the problem, not so much gatekeeping the data from them.

**José Valim:** Yeah, exactly. I really don't want to be like those kinds of companies, especially because I am an open source developer. I am a person who builds software, who writes software. I don't want to put people exactly like me in this awkward position, like "Oh, I want to leave Bytepack, but they have all my customers, and all they give me is a CSV file that I'll have to import and manage somewhere else..." And because we're bidding for ourselves and we're thinking "Me as a customer, what I would be happy to use, and what I would be happy to do", and making sure that me as one of the customers - that I will be happy and proud, and it'll be something that I will support and want to work with.

**Adam Stacoviak:** What's the state? Is the only customer you at this point, since you've mentioned your motivation with selling your own products? Is this vaporware at this current state? Where are we at?

**José Valim:** We have a prototype that we are running -- or let's say staging. So it's not in prod yet. And we have two other (let's say) companies or developers trying things out, uploading their packages, getting things done... But it's still in a -- it's not ready to be out yet. So we are focusing a lot on (let's say) the seller workflow, people that are going to sell things on the platform, because if we don't have sellers, there's nothing for people to buy, so that needs to be the first thing... And then Max will start worrying about the onboarding process... But we are starting with Hexpm support, because that's what we know best - it's the one for the Elixir community - and because that's the one we are going to use... And what's going to come after that is basically depending on who wants to jump on the train with us next.

\[01:00:15.10\] So it's definitely not vaporware. We're getting to beta soon, and it's already beta for some of our user base, for our user personas... But we still need to work a little bit more to be something that we can say like "Hey, you can start onboarding your buyers now, and they can download things for Bytepack."

**Adam Stacoviak:** So you have the forum out there for people to fill out if they have some interests, and you also have the option to sign up for your launch email on Bytepack.io. So if anybody's listening to this and they think like "I'm on. You had me at hello, José. Let me beta this thing with you" - is that the best route, submitting this forum, or getting that email subscription? Or is there a more faster route to get in touch?

**José Valim:** The form is the best. We are following the forum every day... And right now we are basically using it to see what people are interested in next, and those kind of features... Apparently, not a lot of people are interested in the landing page feature, and I think that makes sense. People can set up their own landing pages... So we are using that to prioritize internally, and also to prioritize which package manager we are going to support next. And then depending on -- so people that have reached out to us and they're like "Hey, I want to use Hex, because that's what we have working", we are reaching out to them immediately, and then the next is going to be as we onboard the next stages and figure out.

But I'm also reaching out to people who have filled in, and having conversations with them, and it has been really nice, just talking to people \[unintelligible 01:01:59.06\] or what they struggle with, and their opinion on all those different topics and how to best shape the product. It's something that I have never done in my life, and it's really cool. It's really nice.

**Jerod Santo:** Here's a nice note from the FAQ. It says here that Bytepack is 100% written in Rust...

**José Valim:** \[laughs\]

**Jerod Santo:** Just kidding. I assume you're still loving Elixir, just like you were the first day you conceived of it, José...

**José Valim:** Yeah, yeah. So Bytepack is of course in Elixir, and we are even implementing the other registries in -- we did some proof of concepts internally, so we are implementing Npm in Elixir, and it has been fun; like, Ruby Gems in Elixir.

**Jerod Santo:** Huh.

**José Valim:** Because we need to have some kind of access controls that -- let's say the official ones are the open source ones, because they're almost all open source \[unintelligible 01:02:56.20\] so we are building our own, and it has been very fun.

**Jerod Santo:** That sounds a lot more fun than global taxes.

**José Valim:** Right?!

**Adam Stacoviak:** \[laughs\] Yes.

**José Valim:** Yeah, we do everything with Elixir. If we do a cargo, we may actually build it in Elixir. And the nice thing is that we're building everything with LivewView. So for those who are not familiar - it's Phoenix LiveView, that comes from the Phoenix app framework for building interactive and real-time applications... And it has been also super-nice to be building stuff in \[unintelligible 01:03:30.01\] with LiveView. We have been using it to drive some of the features in LiveView, in the recent versions. It was driven by our needs, things that we feel are necessary to build the product.

So it has been a really good experience so far... Ask me again in two years and we'll see if it's still the same, but right now, at the very beginning, it's going great. We are very excited with all those different things that we were not doing two years ago.

**Adam Stacoviak:** Yeah, that's a good thing. Let's not wait four years, let's wait two years maybe; I'd say one... Hopefully, this is out of beta and out there kicking butt before two years from now.

**José Valim:** Yeah, if you want, I can be back when it's out of beta...

**Adam Stacoviak:** Let's do it. Let's earmark it. Let's hear what the next step is. Audience, if you're listening to this, thinking "Gosh, I wanna try this" - Bytepack.io. That's how you check it out. Reach out to José, he'll help you out.

José, thanks for being so dedicated to open source. There's a lot of people out there that are very dedicated, and you're definitely one of them... To be so inspired by Ruby to create a language - which we use, here at Changelog. If you haven't checked that out yet, our entire codebase is Elixir; Phoenix framework etc. Jerod, you can riff on that, but...

**Jerod Santo:** That's right.

**Adam Stacoviak:** We're appreciative of all your hard work, José, and it's great to talk to you again.

**José Valim:** Thank you, I appreciate it. Thanks for having me.

**Jerod Santo:** Anytime.
