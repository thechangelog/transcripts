**Kris Brandow:** Welcome to Go Time! I'm your host, Kris Brandow, and today we will be talking about the Go Annual Developer Survey. Joining us today, we've got Todd Kulesza. How are you today, Todd?

**Todd Kulesza:** Doing great. How are you doing, Kris?

**Kris Brandow:** I'm doing well. To give you all some background on Todd - Todd joined the Go team in 2018 as their first user experience researcher, working towards more systematic processes for collecting and understanding developer feedback. He's also interested in understanding how the UX discipline can support open source development more generally. Before joining Google, he worked on developer tooling at Microsoft, and studied computer science and human-computer interaction at Oregon State University. I'm super-glad to have you here, Todd.

And joining me as well is Alice Merrick. How are you today, Alice?

**Alice Merrick:** I'm amazing, how are you?

**Kris Brandow:** I'm doing great! Alice joined the Go team in 2019, after working on Gerrit Code Review and Google internal tooling. Her background is in cognitive science and human-computer interaction - I'm having a lot of trouble saying that today. She's interested in the benefits of diversity and inclusiveness in software development, and works on the accessibility of developer tools in addition to her work with the Go team.

And joining me as well is my wonderful co-host, Natalie, who needs no introduction. How are you today, Natalie?

**Natalie Pistunovich:** I'm doing great. That's a very smooth way of not pronouncing my last name. Kudos to you, Kris. I'm very impressed. \[laughter\]

**Kris Brandow:** I feel like I've pronounced it before, but...

**Natalie Pistunovich:** It's true, you did. And I just wanted to celebrate that.

**Kris Brandow:** Okay. \[laughs\] Alright. So yeah, today we're talking about the Go Developer Survey. For those of you who don't know, this is an annual survey that the Go team puts out to collect information about how everybody out there is using Go. So as my first question to either you, Todd, or Alice, how did the Go survey get started?

**Alice Merrick:** Well, I'll answer this, because I've got a little bit more context today, because I talked to somebody who actually started it, in its current incarnation of it anyway. So the survey is old, it predates both of Todd and my tenure on the team... And there actually was -- I've found while I was posting an announcement for the current survey, I actually found something that dated from like 2011, something so, so old. The current survey has no relation to this at all, but it was sort of the first survey, and it was started by Andrew Gerrand (adg, I think, was his handle), who was just looking for information about the Go community, asking people "Hey, who are you? Where would you like to go to a conference?", that kind of thing. And then I think for about five years I don't think there were any -- maybe there were some other community-driven things... And then I think it was in 2016 there was a notable one from the community. I think the name was Ed Miller... Is that a familiar name? ...who did a survey. And then not long after that, Steve Francia joined Google, and realized "Hey, we're missing some information here. It would be useful for us to do some data collection from the community."

And the original survey, quite interestingly, was two different surveys. They used to do an internal survey and an external survey. So that's for people who are using Go at Google, and people who are using Go outside of Google. And they did that for a couple of years. They were surprised at how different developers were outside of Google, and realizing that "This is where most of our users are. We should really pivot and focus on these external developers." So now we don't even run an internal version of the survey. We just focus on the external community. But yeah, that's kind of how it evolves, until eventually it got UXR support, and so now Todd and I are kind of running the show.

**Kris Brandow:** Alright, awesome. That's quite the history there.

**Alice Merrick:** Yeah...

**Kris Brandow:** \[08:02\] I've only taken the survey for the last couple of years and I thought I'd just missed it in years before, but it sounds like it kind of like wasn't even what it is in its current incarnation back then.

**Alice Merrick:** Yeah, yeah. It's still very new. It got official in like 2016 or so, and it didn't get UXR support until 2018, or the 2019 survey maybe...?

**Todd Kulesza:** The 2019 survey is really when that started. I came on as we were doing the analysis of the 2018 survey data... Which was a really great place to kind of join the team, because your first experience is essentially learning all of the feedback that the community has, all in one giant brain dump. So that was really cool. And then in 2019 was when we started to sort of evolve the survey \[unintelligible 00:08:46.14\] UX best practices, essentially.

**Kris Brandow:** Well, I have a follow-up question to that... Since we've had it in this kind of official UXR capacity, how has the survey changed or grown over the last couple of years?

**Alice Merrick:** Well, the first big change was focusing on the external, which was very early on, but then Todd took it over, so he knows more of what that was like in the changing hands to a dedicated researcher.

**Todd Kulesza:** This would be applicable to the 2019 survey. We started to make some changes in the way that questions - for the most part, not the way that they were worded; we wanted to kind of preserve as much as we could for year-over-year comparisons... But we had started to realize that some of the ways that we were analyzing the survey were based on overall number of respondents to it, which was artificially deflating all of the metrics that we were collecting, essentially.

To give you a more concrete example there, a large number of people drop off as they're taking the survey, and so a question near the end may only have 50% as many responses as questions earlier on in the survey... So if we were using the same denominator, questions at the end would look a lot worse, simply for the fact that they came at the end of the survey. So that was once change we made in terms of how we were analyzing that data.

One of the things that stood out to me immediately, the first time I was starting to look at the survey, was this realization that for all of the lists of choices that were presented in like an alphabetical order, you could see that basically the responses people gave also lined up in alphabetical order, which told us we needed to randomize the order of those choices, wherever it made sense at least, in order to prevent that sort of bias.

So the first year was really just trying to kind of put more best practices in place and reduce any bias that we were seeing in the survey, while also trying to preserve as much of the year-over-year data as we could, and make sure that we could kind of continue to learn from it over time. After that, I handed it off to Alice the following year, who made some great changes. I'll let her talk to those.

**Alice Merrick:** Yeah, the next year it was a big change... I think the number of questions on the survey effectively doubled the year that I took over the survey. We had this idea of "Well, we have like 10,000 respondents or so... We don't actually need 10,000 respondents to be confident in some of these multiple-choice questions. We only need a fraction of that. So what if we only showed this question to half of the people, or 40% of the people, or something? We could ask a lot more questions and we could get a lot more bang for our buck here. And it wouldn't make the survey longer for any one person. We would just kind of randomly select what blocks they saw." We had the questions organized into blocks; the number of questions basically doubled. It was really just kind of an exercise in finding "How many questions can one research or reasonably analyze, given an amount of time?" And I think we've found it.

\[12:00\] We definitely asked a lot of questions, we got a lot of data, and that was a huge format change for us, just with the amount of things that we could ask. And we asked just -- if you could think of it, we basically asked that question, without too much worrying about "How are we gonna use this?" It was kind of like "Well, we wanna know this. We wanna know this."

Of course, this year is my second year doing it; I learned a thing or two. You definitely wanna have a little bit more focus in the kinds of questions that we're asking, and we wanna make sure we're making the most use out of a researcher's time in terms of analysis. So we've sort of trimmed it down a little bit this year.

**Kris Brandow:** Okay, nice. Nice. So I'm kind of wondering about the past couple of years, there's all this new information that we've gotten, or you've gotten out of the survey... What are some surprising things that you've found in the past couple of years? Things that maybe the Go team was like "We think it's this way, but actually it's completely different", if there are any of those things.

**Alice Merrick:** Yeah. I can talk about like kind of in the early survey there were some real big shockers early on, apparently. This is coming from Steve, who ran those first couple of early surveys about just the differences between using Go at Google and using Go outside of Google. It was super-surprising for them to see so many people using Gopher CLIs. That was not what they had expected. And so many people using Go for web development. They hadn't expected that either.

They were mostly Emacs users; they thought everybody -- they didn't understand why nobody else was so gung-ho about Emacs, and why was everybody else using Vim, or VS Code, or whatever. There were some of those really big surprises in terms of just the difference between Go at Google and outside of it, but I think Todd can speak more to some of the other changes, or some of the other surprises.

**Todd Kulesza:** Sure. A big one for me was when we first started asking when developers upgrade to, or at least attempt to upgrade to the latest Go release in production at work; for a lot of languages there's a certain amount of lag time when a new version of the language will ship before they actually adopt it. Java is a great case study of this, where you still have a lot of people on Java 8, or Java 11. With Go, it was surprisingly fast. So much so that the first year I think we asked about like 6-month-time chunks, and almost everybody said that they upgrade to the latest release of Go for production uses within the first six months. So the next iteration of the survey we actually broke that chunk down even more granularly, to try to get a sense of like "Okay, do people just try to upgrade basically right away?" And that seems to be the case, from the evidence that we have. Usually within one point release or so people start trying to upgrade to the latest major version, which is not behavior that you see for a lot of other programming languages.

Another big one - and Alice really alluded to this earlier... The very swift adoption of both VS Code and GoLand by the community was something of a surprise to me. If you look at the older data, you can see Vim was kind of a premiere editor for a long time, and there was a lon tail of author editors... And then over the last couple of years (a few years, I guess), both VS Code and GoLand have just become kind of co-dominant in that space, where I think they account for something like 75% or 80% of all survey respondents at this point between those two editors. Alice, anything else comes to mind?

**Alice Merrick:** I mean, I'm always surprised by just how much love there is for Go, to be honest... I used to work on Gerrit, so maybe that sort of colors my current perception... And also the fact that our sample - these are people who are following the Go blog, or looking specifically for Go things. So it does sort of skew in that direction. But the satisfaction is higher than I'm used to seeing on some kinds of developer tools. So it seems like there at least are some happy individuals who are happy to tell me about it more so than I've seen in other products.

**Todd Kulesza:** \[16:17\] That's a really good point. I had a similar reaction the first time I worked on the survey - just how many people respond to it... And they do so out of the goal of making a better programming language, a better environment for the whole community. We have a lot of colleagues that when they run surveys, they have to really keep pushing people to respond to a survey, and I feel like we get this wealth of really rich, useful data simply by posting a blog about it, and the community is very responsive. And that's just been a wonderful thing to see.

**Alice Merrick:** Yeah.

**Natalie Pistunovich:** You mentioned the question about the velocity or the speed of the version update as something that surprised you, and you kind of edited the questionnaire to focus on that more. Do you have some more examples of interesting responses that you got from the community that made you change the structure of the survey?

**Alice Merrick:** Yeah, so definitely that question - that's a good example of one that we were like "Okay, we need finer buckets here to understand what's actually going on." There were a few questions at the end that have changed over time, that have to do with diversity and inclusiveness, and those have changed in response to things like GDPR, and things like that, but we've also changed them in response to how people have responded to them. I think there was one that we asked if they identified as female. I think that was changed to identify as a woman eventually... We've done a lot of work on that question to make it more inclusive this year. So in our current iteration we ask about different gender identities... So that's one example, and there's some related questions there. Because either somebody didn't feel comfortable answering that question, or felt excluded in the way that it was worded... So that's one that we've worked on a lot.

But then there's another sort of suite of questions that has changed recently in how people respond to what prevents them from using Go more. That's one that we've had to really examine, because it's kind of like asking somebody "If I served strawberry ice-cream, would you buy more ice-cream from me?" And everyone's like, "Yeah, of course I would, because I love that flavor. I definitely would go to your ice-cream shop more. That's the only thing preventing me from buying more ice-cream, is the fact that you don't have this flavor." It was kind of like that. And we're starting to change our approach in how we ask some questions, just so we can get a better idea of what is actually preventing somebody from using Go, or what has prevented somebody from using Go in the past.

So there's some things that have changed in a little bit more subtler ways to kind of get at "Don't just tell me what your favorite flavor of ice-cream is. I wanna know what's actually going on here."

**Natalie Pistunovich:** More about that shopping experience.

**Alice Merrick:** yeah.

**Todd Kulesza:** To add on to that, one thing that has changed on a lot of questions - or maybe this is more about our process in terms of how the survey evolves... When we don't have a great sense of what the community's response to a question is going to be, we tend to leave it pretty open-ended... And so those questions can be really hard to analyze. Sometimes you'll get people that don't provide a lot of context there, or we're trying to infer too much from what they tell us, and we have to read through every response and try to take some meaning out of that... And we do that by basically going through in a huge spreadsheet and trying to assign categories or tags to each piece of feedback, and looking for patterns in the way that those categories or tags build up... And then the next year what we might do is take all of those categories that we identified, all of the themes in those open-ended responses, and create a question that is multiple-choice. And say "Now select all of the ones that you identify with", to try to kind of work backwards from the data that we collected one year, and create an easier form of that question to answer; something that takes less cognition on the part of the respondent to actually fill that out, and is easier for us to analyze.

\[20:25\] But sometimes that doesn't work that well... And to Alice's point, we definitely saw that with the things that were blocking Go adoption. In working backwards, we ended up with a list that sort of -- it had a whole lot of holes in it. It didn't cover a lot of situations that we suddenly realized "Oh, these should be in here", and so questions continued to evolve over the last couple of years.

**Alice Merrick:** Yeah... You can look through the various years and see how it's changed over time... And sometimes the changes are very subtle. Every time we do this, I feel like I learned something new. I learned "Okay, next time let's do this instead. Let's ask it like this instead." And it's an iterative process. It's just like software development. You're not necessarily gonna get it right the first time. It's important to have that constant improvement, I think, on what we're asking, how we're asking it, is it still useful... Every year when I'm doing this, I start with what we asked last year, and I have to say "Okay, what do we still need? What should we throw away? What should we change?"

**Break:** \[21:36\] to \[23:03\]

**Natalie Pistunovich:** A few episodes ago, to celebrate episode \#200, we had also a sort of a survey to the listeners, and asked all sorts of questions, and it was definitely one question that sounds similar to that... It was phrased something like "What is a keyboard shortcut abbreviation that you're using?" And the game was that -- so we asked this question ahead, and then a few hundred people answered, maybe one hundred... And there were two teams of panelists trying to guess the answers. And when this question came, all the panelists were like "What does this mean? Give me one example. What is this question? I don't know..." \[laughter\] I think, Kris, actually, you got one of the answers right, and you said -- was it like LOL, or AFK, or one of those...?

**Kris Brandow:** Yeah...

**Natalie Pistunovich:** And it's not in the context of Go, and that was definitely a confusing question.

**Todd Kulesza:** That's a really good point, too... Alice can speak to this in more detail, but one of the things that we typically do is pilot the survey each year, or pilot-test it with a couple of people just to get a sense of "Do these questions make sense? Is there something confusing here?" and see how they would respond to those, and whether those responses turn out to be something that we could then parse, and would be useful to our analysis.

**Alice Merrick:** \[24:12\] Yeah... Part of the Go team, what we ask them to do is go through it and give us any feedback on wording, what makes sense, what doesn't... This year we also had a trusted tester from the community go through and be like "Okay, is the question that I'm asking the thing that is understood by the other person?" and getting feedback on that. That was super-useful. I would love to just keep doing that on future iterations of this survey, because it's so valuable.

I mean, I'm not a Go developer. I'm in the community, but I'm not having to use Go every day, and so what somebody else understands and what my understanding of -- there may be some mismatch there, and it's so useful to get that other perspective.

**Natalie Pistunovich:** Do you find information from other developer surveys to be useful for you? For example the Stack Overflow Developer Survey for '21 has been published... Is that something you read and you learn from the questions, you learn from the answers?

**Alice Merrick:** I do, I do. So I look at what's JetBrains doing, what's Stack Overflow doing, what is Rust doing, what are the questions that they're asking their community... I mean, one, it does give you an idea for questions, just in terms of like "Oh, how should I word this?" It can also give you ideas for like "Oh, if I wanted to do this comparison with this community, then I should ask that question on my survey." And 1) you can look at the differences in their responses, but you can also look at "Okay, how is my population different from this population? Can we even make good comparisons?"

**Todd Kulesza:** Yeah, we particularly do that with Stack Overflow, since that's such a large survey in the developer community... And we know it's not perfectly representative. No survey that's kind of sampled in this way, where you just publicly release the link and let people kind of take it as they want to is going to be randomly sampled, and thus you never quite know if it's representative of the developer population... But since the Stack Overflow one is one of the best that we have, we've added questions to the Go survey that are basically similar to what's on the Stack Overflow one, so that we can compare some of the demographics of who responds, and get a sense of "Well, is our sample basically skewed in some interesting way that is different from Stack Overflow, and by comparison different from what we believe the larger developer community is like?"

**Natalie Pistunovich:** That's interesting. Is there anything you learned that would characterize the Go community in such a comparison, or is it still under construction?

**Todd Kulesza:** Thankfully, we learned that at least the questions that we were asking, we didn't see any significant differences from the Stack Overflow survey response population... Which was a great sign for us. That builds confidence that we are not hearing from sort of a skewed set of respondents.

**Natalie Pistunovich:** That's very interesting.

**Kris Brandow:** And on that as well, I think the estimate of the Go community size is in like the couple millions, I think... You said ten thousand, which is not an insignificant number of people. And as you said, kind of not randomizing the ideal way that you might do it if you had more control over things. Is there other things you try to do to correct for that? Are you trying to get more people to take the survey, or is it like "No, we have a good enough sample of people here, where we want to -" like you said before, which is ask more questions to fewer groups of people, so you can get more coverage? Because that's always been something that's been in my mind, of like "Ten thousand people? That does not seem like a very good representation of millions of people", but I am also not a UX researcher or a statistician, so...

**Todd Kulesza:** That's a really good question. To kind of answer it in two parts... First, the number of responses we get to the Go survey are huge. And if it was randomly sampled, we would have very high confidence, based on a sample of, say, 10,000 people responding. That's much larger than what you would typically get for a survey like this. So that gives us a lot of power and a lot of confidence that the responses generalize.

\[28:09\] The problem we run into, as you pointed out - it's not randomly sampled. And one of the things that we're doing this year to try to get around that is introducing a prompt in our VS Code exception to randomly ask developers who are working with Go to take the survey that way, on the idea that we are never entirely certain that people finding the survey link from the blog, or from -- you know, it'll probably get posted or shared on Reddit, on Twitter, Hacker News, all of these different sites... We don't know the audience of people that are looking at those sites, and we wanna make sure that we're being as inclusive to everyone as possible. So by prompting right in the IDE when we can, we're trying to get a more representative, random sample... So this year we're going to be able to do a comparison of the people that found the survey through the IDE, versus took it from one of the links that's posted on, say, the Go blog, to see if there are substantial differences between those groups.

**Alice Merrick:** Yeah. I guess I could talk more about that. In terms of representativeness, this is just one signal that we use. So this is not like everybody's voting for what happens next in Go. This is one signal we use. It's funny, when you asked about surprises... You know, a lot of times, if we're doing our jobs right, there shouldn't be surprises, because we're doing other research as well, and sometimes we are using the survey to sort of get a quantitative measure for something that we already found through other kinds of research or other surveys, and this is a way to triangulate a hypothesis we're already confident in... And also, in terms of representativeness, it's also -- it's a sliding scale, really. It's probably more representative than something like the population of people who file bug reports... Or at least it's a different sample.

One thing that I like seeing on the survey is actually only about I think a third of respondents have ever contributed to Go, or Go open source projects. And I actually really love seeing that, because it shows all the other people that we get to hear from, that aren't necessarily commenting on pull requests, or they're not necessarily super-involved in other things. It's so amazing to get to hear from people outside of that, that we wouldn't normally hear from.

So in terms of representativeness - obviously, not perfect; always trying to get better. But it's nice to get more representation than we would otherwise.

**Natalie Pistunovich:** So you could say that you feel comfortable saying that some results that come up are pretty representative? Or would you say that because of the sample \[unintelligible 00:31:00.25\] it tries to provide insights about smaller scopes?

**Todd Kulesza:** I think it's safe to say that everything that we publish on the blog we're very confident in...

**Natalie Pistunovich:** That's a first statement... \[laughter\]

**Todd Kulesza:** It's a really good question. And to kind of dive into that a little bit more... Alice was just talking about this - the idea that if we see an interesting signal in a set of developer interviews that we're doing, or a usability study on some other part of the Go ecosystem, if we see something surprising there, we'll try to validate it at a wider scale on the annual survey. So it may not be something that we're thinking of as a surprise anymore, because we've already been surprised, and that's why we're kind of trying to triangulate with a different data source, or we're trying to in some way validate this hypothesis that we've formed... It's relatively rare, I think in surveys in general, to ask questions that you don't already have a pretty good idea what the answer is going to be.

\[32:01\] You're looking to validate the hypothesis that you've formed doing other forms of research, and you're looking to see changes in a community over time; you know, trends changing over time, the types of things people are building, and things like that. And we also have a number of just health metrics really in the survey, that we wanna track over time... Does that answer your question?

**Natalie Pistunovich:** Yeah, definitely. That also makes a lot of sense.

**Kris Brandow:** As someone that's taken the survey in the past, I've seen all the multiple choice and single-choice questions, but there's also a lot of text boxes, and kind of free-form text fields... How are those dealt with in process? Because people can put anything in there, so I imagine it's a little bit more difficult to grok things... But how useful have you found that information in the past? Is that maybe a source where some of the surprising information comes from?

**Alice Merrick:** Yeah, actually Todd touched on this earlier; he explained the coding process... This I think used to be done -- I think they just did a tag cloud or a word cloud I think was how it was before they brought us onto the project... So now a human actually goes and reads your responses; so if you wrote something mean or nasty, I read it. \[laughs\] And yes, people do read them, because I've also seen comments of like "Nobody cares about this." And I'm like "Oh, Alice cares..." \[laughs\]

So yeah, I do read what people have written, and other folks read them, too. I share them with people who might have a vested interest in that particular question, to go and read the open text responses; they're all coded, and - I don't know if Todd wants to talk specifically about any particular one that was super-insightful, or...

**Todd Kulesza:** The most useful ones to me have been when we were asking questions around "What are your biggest challenges with the ecosystem?" The well-formed questions. And we don't always know what's gonna be a well-formed question when we first start drafting it. It's something that we tend to learn through this very iterative process. But like Alice was saying, it is a lot of effort to go through those, and so we try not to ask too many open-ended questions.

I think last year we had more of them on the survey than we ended up being comfortable with, and so we're trying to reduce that. You should see a lot fewer of them this year. Part of that was also I think just a factor of using that sort of modularized survey design, where any single individual probably didn't see lots of open-ended questions, or at least we hope that they didn't... But we saw lots of them as we were analyzing it, because there were a lot of them in the pool of questions that could have randomly been asked of any given participant.

And so trying to scope that down has been a big effort for this year, because those questions - they take a lot of effort to analyze, and again, you don't have a lot of great context there. Those are questions that we much prefer to ask in more one-on-one interviews, or focus group type settings, where we can dig deep and try to understand "Okay, why do you say that?" and get more context around it.

**Alice Merrick:** Yeah. If we could just ask one or two open text questions a year, that would be -- I would love to get it down to something like that.

**Todd Kulesza:** Yeah. But that said, it's inevitable that it's like -- we're putting together a draft of the survey and realize, "This is a really important question, that one of the teams needs an answer to. We have no idea what the responses are gonna be. We can't write a closed form, with a set of multiple choice responses to select from. It's gonna have to be open text.

**Alice Merrick:** Yeah. One thing I'd like to do this year in the analysis phase is actually incorporate more of the team into that process, to get familiar with and/or contribute to the codebook that we are using to classify responses. I feel like that could be -- I mean, useful for me to have some help, but also I think useful for the team as well, to sort of be able to internalize some of those findings...

\[35:54\] You know, if they're triaging bugs, or whatever; they have some more context, other than the "Well, this is just a one-off bug." They have like, "Well, about 20% of people on the survey who answered that question were talking about this", so now I have that additional context. So I would love to get more of the team involved this year.

**Todd Kulesza:** That's a really good point, yeah. It definitely helps me as well when we have the engineers that can see -- they might have a better hypothesis as to what somebody means than I might, or Alice might, as we're looking at those responses. So yeah, big +1 to that.

**Kris Brandow:** And on that, something that just kind of occurred to me, too... The Go language is developed by -- I think it's now more people outside of Google are contributing to the language than the number of people inside Google, on the Go team. I wonder if there's any community involvement for the kind of analysis of the survey... I know you've mentioned earlier how you've had someone trusted in the community that helped screen the survey, to be like "Are these questions the right type of questions to be asking?" Are there any plans to ramp up more involvement of the community, instead of it just kind of being the Go team at Google?

**Alice Merrick:** I would love for that to happen. I've sort of just gotten some ideas, just like this year... You know, this is only my second time running it, so I imagine it will get better over time... But I have gotten some ideas of "What if we publish the data? What if we make the data available?" Somebody has asked me about that.

There is lots of hoops for me to jump through to make that happen, but I would love for that to happen. I would love to have maybe a section on our methodology behind why we ask each of these questions... Right now there's not really a feedback mechanism on the survey itself that's kind of like a meta question of like "Give us feedback on the survey." That would be a thing I would love to see happen in the future, because one thing that we used to determine what we ask is "What's going to be useful to the community?" So that's something that we wanna be mindful of, is "What does the community want to know? What does the community think of the survey in general?" So yeah, I would love to get more of that in the future, for sure.

**Todd Kulesza:** Absolutely agreed. One little wrinkle there is that we've looked into sharing this data and we think that -- as Alice said, there are a lot of hoops for us to jump through to make this happen, but we're trying... We can share the data for the closed-form questions, but the open text questions are kind of off-limits, because the data that's in there is so potentially rich, and it can reveal who wrote it, inadvertently, based on what they were talking about. They may not realize that it is self-identifying, but it can very easily be. So to really protect everybody's privacy, that particular data I don't think we would be able to release... But the closed form questions we'd love to be able to do that with, and that is something that we're trying to push towards.

**Natalie Pistunovich:** The tags, as you mentioned, can be an interesting thing to publish as well. The categories that you've put the open answers into.

**Todd Kulesza:** Oh, I like that.

**Natalie Pistunovich:** It could be like a meta way...

**Alice Merrick:** The codes... I mean, those are technically shown in the results, but we don't really share the process of how we did it, which could be a thing to explore doing. I like that idea.

**Kris Brandow:** Just a question about the open text boxes. I don't know if you answered it the last time we've talked about this, but... How many people actually fill out those text boxes? Is it like a huge percentage, or is it like kind of a small percentage of people that are passionate and vocal?

**Alice Merrick:** Well, it depends on how many people see that question. And actually, I'd have to go -- there's some questions where I think more people respond than others. I think it also depends on where it appears in the survey for them. Did they see it earlier? They might be more inclined to answer it. So I would have to go and compare the response rates for each open text question, which I have not done. A lot of times we get plenty of responses. Sometimes there's thousands.

**Todd Kulesza:** \[39:53\] Yeah, I've seen up to 2,000, particularly for questions like "What is your biggest challenge using Go?" There are some critical ones the community does tend to spend some time answering... And that's like 2,000 responses out of a year when we had 11,000 respondents overall... So that's a pretty good response rate for an open text question, honestly.

As you were sort of hinting at, typically, those are the questions that are gonna be least likely to be answered on a survey, because they take the most cognitive effort.

**Alice Merrick:** Yeah. And feel free to skip them. No question on the survey is mandatory. If you don't wanna respond to a question but you still wanna give us some data, answer the 5 or 10 questions you wanna answer, and that's better than not participating at all. So you can determine how much you want to invest in it. If you wanna answer everything in perfect detail, and go through everything very slowly, you can. But you can also just fill out a couple of pages and be like, "Yeah, I'm done."

**Natalie Pistunovich:** And this year's survey is about to come out soon.

**Alice Merrick:** Yeah, so it launched today. So you can now go take it. If you're still listening, you can find the link to the Go blog, you can find it on Twitter, and you can just go take it.

**Kris Brandow:** How long does the survey typically stay open for?

**Alice Merrick:** I think about three weeks. I think that's what we've been doing the last... Is that --

**Todd Kulesza:** Yeah, it's been three weeks for the last few years now, I think.

**Alice Merrick:** Yeah.

**Kris Brandow:** Okay. So for our listeners that are listening to the recorded version of this podcast, you've only got a couple weeks left to go, so... We'll have a link to it in the show notes, so as soon as you're done listening to this, go take the survey.

**Todd Kulesza:** Yeah.

**Alice Merrick:** I think it closes November 16th... Is that right? Is that a Tuesday?

**Todd Kulesza:** That's right, yeah. And the link is go.dev/blog. That's where we have the official post up for it.

**Natalie Pistunovich:** We'll have that in the show notes, so everybody who's watching can get that.

**Alice Merrick:** Yes. If you miss this year, which - hopefully, you're listening to this and you're like "Oh, I'm gonna go do this right now..." But you know, if it's after November 16th, we are thinking about doing the survey a little bit more often next year. We might have two. So we might need to change the name of the survey from "The Annual Go Developer Survey" to something a little more general, or maybe "Go developer survey springtime edition", or something like that.

**Natalie Pistunovich:** Add versions to that. It's going to be funny. Just like Go versions.

**Alice Merrick:** Yeah, there you go.

**Todd Kulesza:** But yeah, given the release of generics coming up soon, we really wanted to get a pulse of the survey out after that had shipped, without needing to wait until the following fall.

**Natalie Pistunovich:** Maybe you can even have that match the current Go version, and then maybe you'll skip your -- like, it will not be consecutive in the version of the survey, but it will be \[unintelligible 00:42:39.26\]

**Todd Kulesza:** Yeah. If we're doing one in fall and on in spring, assuming we keep the same release schedule for Go itself, it'll always be sort of versioned to a most recent major Go release. I like that.

**Alice Merrick:** Yeah, maybe we can ship it with the release. "Oh, by the way, also take our survey, since you're so happy about your new Go version..."

**Kris Brandow:** Big, cool thing to build into the Go command too, of like "Go Survey" and it'll just take you there, so you could take it...

**Todd Kulesza:** That's a really good comment...

**Alice Merrick:** I want someone to build this for me. \[laughter\]

**Natalie Pistunovich:** Anybody that's listening and you wanna make your contribution this Hacktoberfest...

**Alice Merrick:** I want my own personal data engineer... \[laughter\]

**Kris Brandow:** You also mentioned earlier that people are gonna get it through the VS Code extension as a randomized thing... Are there any plans to do it through other integrations? Because there's plugins for most of the other editors, and it seems like you could do basically the same thing in Vim, or GoLand, or Emacs, or whatever... Or is that like "Just try VS Code this year, see how it goes, and kind of revisit it for the next one"?

**Todd Kulesza:** It's the latter of what you've described. This is a pilot, so we'll see what the data looks like. It's entirely possible that we'll realize there is basically no difference in the audience of people that find the survey through the blog links, versus who get prompted from the code editor.

**Alice Merrick:** \[43:59\] Other than their editor of preference, probably...

**Todd Kulesza:** Spot on, yes. \[laughter\] We know what we'll see there.

**Alice Merrick:** Yeah. There are some things that we can expect to be different... \[laughter\]

**Kris Brandow:** Right.

**Todd Kulesza:** But we'll see, and if it goes well, it's definitely an option that we could try rolling this out to different editors as well, or different touchpoints or tools in the Go community.

**Alice Merrick:** And this year, this is the first time we're announcing it on Go Time, so hopefully we're reach a whole other level of representativeness of Go Time listeners.

**Natalie Pistunovich:** Absolutely.

**Alice Merrick:** Hopefully, they are different enough from our previous sample of Go blog readers... \[laughter\]

**Natalie Pistunovich:** Speaking of those personality or persona samples, do you have a kind of way to describe how the persona was changing in the last 1-2 years?

**Todd Kulesza:** That's a really good questions. It makes sense that you haven't seen much of a change, because it hasn't been that pronounced in the last couple years. But prior to that, there was a really strong difference. You still see it if you look at the experience that someone is using with Go, versus which other languages they're familiar with and prefer to use. There's a very strong shift from a lot of respondents being very familiar with C and C++ early on in Go's history, and that has shifted more towards - you see JavaScript, and TypeScript, and PHP, and Ruby come up much more prevalently after that. Python seemed to be sort of like the great uniter. It doesn't matter how experienced or how long you've been in the Go ecosystem, everyone has about the same level of experience with Python it seems, which is interesting... But I think that does tell us the types of things that people were building has sort of shifted over time, and their experiences, their expectations have shifted over time, because they're coming from different programming ecosystems.

**Alice Merrick:** Yeah. I have noticed the editor usage. That I have noticed it shifted over time. We saw this kind of surge in VS Code and GoLand or IntelliJ usage, but even that seems to have kind of leveled off. From like 2019 to 2020I don't think there were a lot of changes there... But I hadn't noticed it previous to that. But yeah, I'm looking forward to seeing if we have any shifts this year, especially with the introduction of the random sampling through VS Code. Maybe we'll find something interesting.

**Natalie Pistunovich:** I'm curious if you have any question about Codex, and something along those lines, of like automated generation of code... A question of like "Are you worried that the AI will write better Go code than you?"

**Todd Kulesza:** Oh, that's interesting... We don't have a question on that this year, do we?

**Alice Merrick:** No, we don't. Is that a concern that we should be tracking?

**Natalie Pistunovich:** This is my very personal interest, so...

**Alice Merrick:** Existential dread? \[laughter\]

**Kris Brandow:** I have seen a couple articles pop up around low code, or no code, and like "Oh, we're gonna get replaced with a machine or a robot." Although I've worked in many large companies, and I've seen how many people spend their days filling out spreadsheets, so I don't really know how much it's gonna be like "They're coming for our jobs." But it'd be definitely interesting to see what kind of sentiment or concern the community has around that sort of thing.

**Alice Merrick:** Okay. Maybe a future question.

**Break:** \[47:18\]

**Kris Brandow:** You mentioned earlier too that the Go survey, this annual survey, soon to hopefully be semi-annual - is that the word?

**Alice Merrick:** Bi-annual, semi-annual...

**Kris Brandow:** One of the two. Anyway.

**Alice Merrick:** Di-annual...

**Kris Brandow:** \[laughs\] So you have other surveys that you do... Can you get into what some of those are, where people might be able to see and find them and participate?

**Alice Merrick:** Oh, yeah. I think Todd has lots to say about that.

**Todd Kulesza:** Thanks. I do. \[laughter\] So we do have a lot of other surveys for different parts of the Go ecosystem. One of the big advantages or one of the big changes from those as compared to the Go annual developer survey is the fact that they're randomly sampled. So these are the little surveys that are popping up on the bottom of pkg.go.dev, or go.dev itself, or inside of the VS Code editor when you're using a Go plugin you might get a prompt...

They're intentionally randomized, so it's not like it's this sort of thing that people can go and take. The idea is to try and catch a representative sample of people and get their feedback at different points in the development experience, essentially.

One of the things that if you add a button to a system that says "Click here to provide feedback", you know right off the bat that you're gonna get feedback from people who are very frustrated and very excited, and you're not gonna hear quite so much from people who are having just a normal day-to-day experience. And so by prompting randomly at different times, for different respondents, we try to ameliorate that bias a little bit and get a more representative sample of data.

But for anyone who has seen those surveys pop up on any of the Go websites or code editors, that's the reason that you're seeing them, and that's what we're trying to do with that data, is get a better understanding of how the tools are working for people in their day-to-day experience.

**Alice Merrick:** And humans read what you say.

**Todd Kulesza:** \[laughs\] Absolutely.

**Kris Brandow:** So if you're out there and see a little pop up on pkg.go.dev or any of that - people are actually gonna read it, so go fill out, tell everybody how you feel about things.

**Alice Merrick:** Tell Alice and Todd.

**Kris Brandow:** There are people listening to you. It's not some just weird AI that's gonna crunch the numbers, or something like that.

**Alice Merrick:** Yeah. It doesn't create a tag cloud, or word cloud.

**Todd Kulesza:** \[51:57\] We did try a machine learning approach, and it did not work well... So yeah, it's all human analyzed.

**Alice Merrick:** Aside from the surveys, we do run other kinds of research. And Todd, you will know more about this. Is there a way that people can sign up specifically for our developer surveys?

**Todd Kulesza:** Thank you, Alice. It is an awesome question. I know this sounds scripted, but it's not. I don't think I've shared this... We are in the process of launching a direct sign-up form to participate in research studies around Go. It should be launching -- it's already October 26th. The goal is to get it out by the end of the month. We may still hit that; it's in its final revision right now with another team at Google. But yes, we are gonna be getting that launched, and then we'll have sign-up links on some of the Go websites themselves, we'll probably advertise this more broadly on other places where developers gather, like a Stack Overflow and things like that, to try to get more people signed up in the pool of respondents that we reach out to when we're running interview studies, or things like that.

**Alice Merrick:** Maybe we can add those to the show notes.

**Kris Brandow:** Absolutely.

**Todd Kulesza:** Once we get the links, yes.

**Alice Merrick:** I'm just so desperate for people to talk to me, that's all. \[laughter\]

**Todd Kulesza:** The other thing that we've done with a great amount of success is just put out a call on Twitter or something like that, social media in general, and ask for Go developers that way, and we've had great sign-up responses for that.

**Kris Brandow:** Awesome. So the survey is happening over the next three weeks... When can people expect the results of that survey to kind of come out?

**Alice Merrick:** Well, that's always the big question... I think last year we got them out in March. Obviously, I don't want to get them out any later than March. I would love to get them out in February or January, ideally. We'll see how that goes. It depends on how much vacation time Alice needs to take between now and then.

**Natalie Pistunovich:** We hope you have a long and good vacation. You should focus on that. It's especially important now. \[unintelligible 00:53:53.06\]

**Kris Brandow:** Vacation is super, super-important. Alright. And with that, we'll go into our final segment of the show...

**Jingle:** \[54:08\] to \[54:27\]

**Kris Brandow:** Alright... So if you don't know how this works, this is just a segment where you get to voice an opinion you think is unpopular. It does not have to be related to Go, or tech; it can just be anything. And then we're gonna throw them up on Twitter and see if they actually are unpopular or not. And if it's not unpopular, you have to come back and give another one until you actually get one that's unpopular.

**Todd Kulesza:** I like the validation. \[laughter\]

**Kris Brandow:** So Todd, do you have an unpopular opinion?

**Todd Kulesza:** I am not sure if this is popular or not yet, but I think it's unpopular... I am excited for the notch on the new MacBooks. Granted, if you could put a camera in there and not have the notch at all, that would be even better, but I am very excited at the idea of getting a little bit more screen real estate that is devoted basically to status indicators and menu bars. And if you can get that extra screen real estate, I don't see why you wouldn't do it.

Now, I'm saying this having not used any of these computers, and I know they're just coming out right now, so maybe the first time I end up using one, I will absolutely despise it, and will justly get a lot of grief for this opinion, but... My first take on them so far has been I'm actually excited for the notch.

**Kris Brandow:** If it's anything like the iPhone 10, it will be massively unpopular to begin with, and then people will use it and then they'll be like "Oh, this is fine." And then all the other people making fun of it will see notches in tons of laptops in the future \[unintelligible 00:55:48.20\]

**Todd Kulesza:** Exactly.

**Kris Brandow:** I feel like that's gonna be a 50/50 maybe. I don't know. I'm feeling you might get right in the middle. Alice, do you have an unpopular opinion?

**Alice Merrick:** I have so many unpopular opinions... I feel like I'm trying to balance between "Don't get fired" and "Share an unpopular opinion..." \[laughter\]

**Kris Brandow:** You can also give more than one if you'd like. It doesn't have to be a single unpopular opinion. It could be multiple unpopular opinions.

**Alice Merrick:** \[56:16\] Because I could just say something outrageous that nobody's gonna agree with, or I could get on a soapbox and preach about something I believe in... I'm gonna go with something that I think is probably unpopular, and it's not work-related, so I'm off the hook there... I'm gonna say that Snow Crash by Neal Stephenson is a terrible novel.

**Natalie Pistunovich:** I don't know that one.

**Alice Merrick:** It's a very popular Sci-Fi novel that gets tossed around as an inspiration for a lot of things... It's not unreadable, but it's almost... So I think that might be like my safe unpopular opinion, because I don't think I'm going to start any wars over it, but also it's probably not popular. It seems like people really love that book, and I just don't.

If I want to be even more contentious, I might say something about Harry Potter, but... I've actually never read -- this is funny... I've never read any Harry Potter. And that's kind of a shocking thing. If I'm playing "Never have I ever", I win with that one every time.

**Kris Brandow:** Wow.

**Alice Merrick:** But yeah, I'm curious to see how other people are feeling about Snow Crash.

**Kris Brandow:** Alright...

**Todd Kulesza:** I haven't read it in a very long time, but I remember loving it... But it's been a long, long time. \[laughs\]

**Alice Merrick:** Yeah. I mean, I could talk about why I don't like it, but I think I'll just let it stand as is. I don't feel like I need any justification. In fact, I invite all -- like, I want it to be super-unpopular. I'm trying to win here. \[laughter\]

**Kris Brandow:** I have played that game before and I have won that game before. \[laughter\] I think we put out on Twitter a couple of tweets about who's had the most popular unpopular opinion, so people were like "No, that's popular." \[unintelligible 00:58:09.09\] the most unpopular unpopular opinions... And I think I got like both first and second place for the most unpopular unpopular opinion, so...

**Alice Merrick:** Amazing. Now I have to know, what was your unpopular unpopular opinion?

**Kris Brandow:** I think I actually talked about it a couple of podcasts ago, but I think the one that was THE most unpopular unpopular was I said that calling Go Golang is a respect problem, and that it can lead to other things in our community... I think the thing that really pushed people over the edge was that I said it can lead to other things, like dead naming, or misuse of pronouns, because not using a correct name is not using a correct name... And it was very, very unpopular.

**Alice Merrick:** Wow...

**Kris Brandow:** Which - I kind of knew it was gonna be unpopular by saying it, but it's one of those things where still inside I was like "That shouldn't be unpopular..." But it's okay. And \[unintelligible 00:58:59.16\] The language's name is Go. But that was my big unpopular opinion, that I still kind of stand, and I'm like "This should not be unpopular."

**Todd Kulesza:** Based on the way you explained it, I agree. That should not be unpopular.

**Alice Merrick:** Now I've gotta know how do you pronounce the language server...

**Kris Brandow:** I mean, they told us it's "Go please", so...

**Alice Merrick:** Okay.

**Kris Brandow:** ...I feel like that's how --

**Alice Merrick:** Is that canon? Is that the official --

**Kris Brandow:** I feel like it's as much cannon as gofmt and the other things that we have. We have random pronunciations for things...

**Alice Merrick:** You know, I'm a long-time listener, first time caller here. When I joined the Go team, I started listening to this podcast, and this is how I learned how to pronounce anything, is through this show.

**Kris Brandow:** We're happy to be of service.

**Alice Merrick:** \[laughs\] Yeah. I'm glad I was using an authoritative source here.

**Kris Brandow:** We at least try to pronounce things the way that (I guess) the Go team intended, or the Go creators intended. Gofmt is always one that people -- some people say "go format", some people say "go f-m-t"... It's kind of like the same thing with kubectl, how some people are like "It's Kube CTL", "It's Kube Control..."

**Alice Merrick:** Kube Ectal...

**Kris Brandow:** \[01:00:21.04\] Yeah, there's all sorts of... I think I've heard one for CoreOS, some called it cOREOS, because if you take the C off, it's OREOS, so they called it cOREOS... I was like "Oh, okay..." We just do this to ourselves, we really do.

**Alice Merrick:** Yeah. I appreciate hearing the diversity of pronunciations, because if I'm talking to somebody one on one, like a Go developer, and they're throwing proper names out there that I may or may not be familiar with, it's useful to be familiar with various pronunciations of thing... So I'm like, "Oh, okay, so that's how you say it. That's how I'm going to say it, for the sake of our conversation here..."

**Kris Brandow:** Right, yeah. I think with some things it's just like -- I don't know, as long as we can understand each other, it's fine...

**Alice Merrick:** Yeah.

**Kris Brandow:** ...as long as you don't say Golang. That's my big no-no. Don't do that. But anything else, I'm like "Sure, it's fine. Whatever. You can do as you like." There's not an official pronunciation.

**Natalie Pistunovich:** I wonder if we can turn those into a dialect. If somebody bothers and says "Kube Control", the whole thing, so you kind of would assume that they are very thorough with their code, or test coverage.

**Alice Merrick:** They're long-form.

**Kris Brandow:** Yeah. They write iterator, instead of i. \[laughter\]

**Todd Kulesza:** Exactly.

**Kris Brandow:** Or index, you know...

**Alice Merrick:** They wanna be very explicit.

**Kris Brandow:** Very verbose.

**Todd Kulesza:** A high level of verbosity, yeah.

**Alice Merrick:** Yeah.

**Kris Brandow:** Probably a Java developer in a previous engineering life. \[laughter\] \[unintelligible 01:01:54.15\]

**Alice Merrick:** That'd be an interesting behavioral experiment, for sure.

**Kris Brandow:** I think we've talked about it a few times on the podcast before, about how people can come in and they just -- you know, "Oh, you're still writing Java, or Ruby, or Python. It's just Go syntax, and it compiles in Go", but like, this code is definitely still Java-y code. One of the nice things about Go - it's super-easy to learn; one of the top things about Go is it's super-hard to master, and people just kind of come in, they're like "Boom!" \[unintelligible 01:02:23.07\] how many people actually are coming from Java. Is it proportional to the number of codebases I've seen that are this Java-esque Go. And if not, those people should take the survey, so we can --

**Alice Merrick:** Yeah. Actually, we do see a large proportion of people who come to Go are coming from Java and Python. That's not super-surprising, because there are so many Java and Python developers, but also, you don't see as many from, say, like C++ or something, where you might expect that because there are so many C++ developers, right? So we do see -- there are certain populations that are more likely to migrate to Go. That's interesting.

**Todd Kulesza:** Yeah. And as you said, I know you've talked about it on the podcast before, but - it's a common thing we hear from developers working in industry, that when they first introduce Go to a new organization, there is a tendency to keep writing it as if it was the last thing which they had been working with predominantly. It's actually a bit of a barrier internally, and they try to come up with their own sort of best practices typically, and try to figure out "How do we get people to map their mental models from, say, Python over to Go, for different types of development?"

**Alice Merrick:** I think that would be a good study to do.

**Natalie Pistunovich:** I'd be very curious to compare that for the different languages with going back to AI-generated code. I'm super-focused on that, because that's my talk at GopherCon this year. So everything connects to that in my mind in some way...

**Todd Kulesza:** Awesome.

**Alice Merrick:** It's like an AI is writing Go, and the comparison between what a human would write and what's written by the AI?

**Natalie Pistunovich:** This is not gonna be in this talk, but now that we talked about how people write Java, but in Go - so to compare this, Go that comes from other languages with the one that came from the AI, to see if it has any flavor...

**Alice Merrick:** \[01:04:16.25\] Who can write better Go, an AI or a Java dev?

**Natalie Pistunovich:** \[laughs\] Or what the underlying language would be from that AI-generated one? Like, is it sub-trained in something else, or...? That would also be interesting, one day...

**Todd Kulesza:** Yeah, is it idiomatic Go that it's writing, or does it look like they're writing Java, but with Go syntax?

**Alice Merrick:** Or could you get an AI to write Go in Java syntax? Or write Java with Go syntax?

**Todd Kulesza:** Or could we fix it if it did that? \[laughter\]

**Kris Brandow:** There's definitely some codebases I'd love to run an AI that could just change things into idiomatic Go, and like "Oh, here's some very popular codebases that you should go rewrite and make better."

**Alice Merrick:** Yeah.

**Todd Kulesza:** \[laughs\]

**Kris Brandow:** We do have one kind of I guess like after hours question from our Slack channel, if you two are up for answering it...

**Todd Kulesza:** Sure.

**Kris Brandow:** They asked if there's any or what attempts are made to account for dark matter developers. I guess the quick synopsis of them is -- they're kind of like dark matter in the Universe, where like we know they exist, but we can't reach them as much... So the mass of developers that aren't on mailing lists, aren't on social media, don't go to conferences. There's that common thing where a good 80% of people or 90% of people that attend conferences are first-time conference attendees, at every single conference. So there's this big pool of people that have never interacted with stuff before. So are there things that you do to account for that group of people?

**Todd Kulesza:** That is a really great question. I think the stuff we were talking earlier, about trying to kind of randomly prompt people using the tools that they're working with, as opposed to reaching out in some other way - that goes a long way towards finding that group of developers that we wouldn't expect to answer our surveys from blogs, or Twitter, or things like that.

We don't really have much logs data with Go. We don't know what people are doing on their own computers, and things like that... So by prompting instead in an IDE and hoping that they'll take that survey - that's at this point the furthest that we've gone in trying to get some feedback from that group... But it is an open question as to how many people even respond to those prompts.

We don't even have telemetry telling us the non-response rate for when we prompt in VS Code and people just close the dialogue and don't answer. So yeah, it's a good question, and it's one that we're still actively working on.

**Alice Merrick:** Yeah. Just trying all the different channels we can. I mean, sometimes personal networks also are a way to do it. I actually know some Go developers in real life make friends, and tell everyone at work to take the survey.

**Kris Brandow:** \[laughs\] Right. Is a potential thing of research in the future maybe trying to add more anonymous collection of information when people are like running Go commands or whatever, just to kind of see what people are actually doing, or is that kind of like "We don't wanna step into that area"?

**Todd Kulesza:** Yeah, that's not on the table...

**Alice Merrick:** We would never do that without explicitly making that very clear that that's what we were doing, and exactly what we would do with that data. That is not a thing that we would just be like "Hey, let's just kind of see what people--" We would never...

There was one thing we had thought about doing this year, which was asking people to run a diagnostic tool and giving us what came out of that. It didn't end up happening. But you know, I could see us maybe in the future doing something like that, if we really needed people to do that. But we would tell them "This is exactly what the tool is gonna do, this is exactly where to put it in this box", and we'll share the results... It would be very, very explicit if we were doing anything like that.

**Kris Brandow:** \[01:08:00.17\] Yeah. I know Steam does that sort of thing... They do like a hardware survey - I've gotten it a few times - where they're like "Oh, tell us about what's your GPU, what computer are you using? It helps us figure out where our users are going." So I think that would definitely be a cool thing, if it was definitely explicit.

**Todd Kulesza:** Yeah.

**Kris Brandow:** I'd be super-interested in knowing what machines are people writing Go on, and how are they deploying it... That kind of stuff.

**Alice Merrick:** Yeah. And that's something that we ask on this survey, but again, it would be cool to see that from maybe some of those dark matter -- I've never heard them referred to as dark matter... But yeah, like, the dark matter developers.

**Todd Kulesza:** It's a new term to me too, and I like it.

**Kris Brandow:** Yeah, thanks to Damien in the chat for that. We're definitely gonna add that to the show notes as well.

**Todd Kulesza:** Where are they hanging out? I've gotta meet these people?

**Kris Brandow:** I think the point is they're not hanging out anywhere. I mean, like the 9-to-5... Like, "I have something else that brings me joy in life. This is just my paycheck."

**Todd Kulesza:** Exactly.

**Kris Brandow:** Probably working at some big co somewhere, and they're just like "Nah, I just go in, write Go, go home... I like playing video games, or raising my family", or whatever it is. I've definitely met a number of those developers in the past, and I'm like "You should come get involved in stuff." They're busy with all this other stuff.

**Alice Merrick:** Yeah.

**Kris Brandow:** Alright. Natalie, do you have an unpopular opinion you wanna share before we close out the show?

**Natalie Pistunovich:** Yes. I spent the last 2-3 weeks maybe having a cold, and I would like more people to say "Bless you" every time I sneeze. I'm a person who sneezes many times. I don't do one sneeze. I do like five sneezes in a row, and I think it would be very nice to hear five times "Bless you!" \[laughter\]

**Alice Merrick:** Yeah, I think that's probably pretty unpopular. I think most people are good with just like the one, or even just zero.

**Natalie Pistunovich:** Yes. Yes.

**Kris Brandow:** So you want people to count how many times you sneeze, and make sure they say Gesundheit or Bless You after every one?

**Todd Kulesza:** Do you do this for other people?

**Natalie Pistunovich:** No, one by one. I do take a break between sneezes, so there's enough time to say it... I'm considerate.

**Kris Brandow:** Okay...

**Alice Merrick:** Alright, yeah... Do you give them a pause of silence in expectation for the Bless You...

**Natalie Pistunovich:** Exactly.

**Alice Merrick:** ...before you go into your next sneeze. I see. Okay.

**Natalie Pistunovich:** I'm trying to establish some eye contact, it's like, "Hello...?"

**Todd Kulesza:** You meaningfully stare at them until they say it... \[laughter\]

**Kris Brandow:** But the question is would you hold the sneeze in until they've said it, and then it's like a--

**Natalie Pistunovich:** No...

**Kris Brandow:** \[laughs\]

**Natalie Pistunovich:** If I have to hold a sneeze, or if I have to skip a sneeze, I will also hold a grudge. This will not go anywhere good. \[laughter\] I really like sneezing.

**Kris Brandow:** I think that's an unpopular opinion right there. I don't think anybody loves sneezing. Or most people at least.

**Natalie Pistunovich:** Well, in Covid days, it's absolutely unpopular. That's 100% true.

**Kris Brandow:** Yeah, don't sneeze on public transit either. People will be mad at you. \[laughter\]

**Natalie Pistunovich:** Well, you should have a mask anyway... At least in Germany. I think the mandate is still here, but I lost track which country has what mandate.

**Kris Brandow:** In the U.S. we still have a mandate for public transportation masks, but... Anyway. That was a very fun way to close out the show. Thank you all for taking a listen, and thank you Todd and Alice for joining us today.

**Alice Merrick:** My pleasure.

**Kris Brandow:** Thank you, Natalie, for being my wonderful co-host.

**Natalie Pistunovich:** Thanks, Kris.

**Todd Kulesza:** Thank you, Kris and Natalie. This was really great.

**Outro**: \[01:11:14.01\]

**Alice Merrick:** I've gotta know who the composer is.

**Natalie Pistunovich:** Right, I have that on Slack. I was talking about that with Jerod...

**Kris Brandow:** I know Mat did the unpopular opinion one, but I don't know who did our intro and outro. I think it is said at the end of every podcast, and I've heard it before... I feel like maybe it's Breakmaster Cylinder. I feel like that's --

**Natalie Pistunovich:** Yes! Yes. That's him.

**Kris Brandow:** Okay. Wow, that just came out of my -- just right off, the tongue, just Breakmaster Cylinder... There we go. \[laughter\]

**Todd Kulesza:** Nice.

**Natalie Pistunovich:** That was also not scripted.

**Alice Merrick:** I guess if you hear it enough, it kind of just -- you know, subliminally almost, it's in there.

**Kris Brandow:** Right, yeah.
