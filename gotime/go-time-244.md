**Natalie Pistunovich:** Good part of the day to everyone, wherever yu're joining from. Here's Angelica and I, we are back to talk about pull requests. Hi, Angelica. How are you doing?

**Angelica Hill:** I'm very, very well, thank you. I didn't think that PRs would take two episodes, but I'm surprised and excited that they will.

**Natalie Pistunovich:** As everything about pull requests, it always takes a bit longer than expected, huh? \[laughter\]

**Anderson Queiroz:** That's true.

**Natalie Pistunovich:** Today we are joined by Anderson.

**Anderson Queiroz:** Hello.

**Natalie Pistunovich:** Hi. How are you doing, Anderson?

**Anderson Queiroz:** I am really good, and really happy to be here. Thank you.

**Natalie Pistunovich:** And you're joining us from the U.K.

**Anderson Queiroz:** Exactly.

**Natalie Pistunovich:** What are you doing in the U.K.?

**Anderson Queiroz:** I'm at the GopherCon U.K. I'm a Brazilian that's based in Berlin, but now I'm here in London, directly from a hotel room.

**Angelica Hill:** How are you liking it?

**Anderson Queiroz:** Oh, it's really good.

**Angelica Hill:** Yeah. And you're not just saying that because I'm on the call...

**Anderson Queiroz:** No, no.

**Angelica Hill:** Okay.

**Anderson Queiroz:** I love the U.K. I did an exchange program here for one year and a half in Glasgow.

**Angelica Hill:** Oh, awesome.

**Anderson Queiroz:** So yeah... I really like it.

**Angelica Hill:** I mean, I prefer Edinburgh to Glasgow - unpopular opinion...

**Anderson Queiroz:** \[03:59\] Yeah, true...

**Angelica Hill:** I mean, Edinburgh Castle is so incredible.

**Natalie Pistunovich:** Wait, no, that's the end of the show!

**Angelica Hill:** Oh, I'm sorry. I'm getting ahead of myself, Natalie. I'm sorry, I'm sorry! \[laughter\]

**Natalie Pistunovich:** It's fun to go back to in-person conferences, hm?

**Anderson Queiroz:** Yeah, that's true. It's really good. The last time I was here in London, my brother was here. We were like, "Okay, the place here is gonna be small to GopherCon U.K. at some point", but then the pandemic, and now I think it's smaller... So yeah, let's see.

**Angelica Hill:** Okay...

**Natalie Pistunovich:** So Anderson, tell us about yourself. You're doing Go.

**Anderson Queiroz:** Yeah, I'm doing Go since a bit before going to Berlin, so I think about five years now... I did before many Java; it was a lot of Java. I started with C, actually, some Python, JavaScript in the backend, and now Go. I love it, and I chose it as my language to specialize.

**Natalie Pistunovich:** And you're working at Elastic.

**Anderson Queiroz:** Exactly. I work with Elastic Agent.

**Natalie Pistunovich:** Which is the head product for all the products that we know and love, like Elasticsearch.

**Anderson Queiroz:** Yeah, exactly. Yeah.

**Natalie Pistunovich:** Formerly known as the ELK Stack.

**Anderson Queiroz:** Yeah. Now the Elastic Stack, yeah.

**Natalie Pistunovich:** Lots of Go there. I love this stack

**Anderson Queiroz:** There is, yeah.

**Natalie Pistunovich:** Fun. So as part of the job you do pull requests.

**Anderson Queiroz:** Of course.

**Natalie Pistunovich:** Do you also do merge requests?

**Anderson Queiroz:** We call everything pull request, yeah.

**Natalie Pistunovich:** \[laughs\]

**Angelica Hill:** Are you gonna do the same thing you did last time, when you caught us all off-guard with the many different --

**Natalie Pistunovich:** No, no, no... Just for those...

**Angelica Hill:** ...many different ways to refer to it... \[laughs\]

**Natalie Pistunovich:** It's crazy how many names are there for this... Yeah. For those who are listening now and have not listened to the previous episode, "The Art of the PR: Part 1", Angelica and I were discussing, among other things, also the many different names and concepts that represents. So Anderson, we asked you if you're doing lots of pull requests, but then we started talking about other things... Do you?

**Anderson Queiroz:** I do.

**Natalie Pistunovich:** Do you review more, or do you write more?

**Anderson Queiroz:** Now I write more. In my past job I read a lot more code. A lot of pull requests. And funny enough, I've never worked in a company that didn't have pull requests. To me, software development as a professional means pull requests and code review. That's my standard.

**Angelica Hill:** Why did you do more reading in your past job? Is it just a very different area you were working in?

**Anderson Queiroz:** No, my past company I joined among other things to help to lead the transition to Go. So they were pretty much a Ruby shop, and they decided to migrate to Go. They were migrating, but then needed someone with expertise in Go, to bring best practices, how to do... So I did that.

I did a lot of workshops, and teaching and mentoring, and it involved -- a lot of the teams would come to me with pull requests, so I'd do a really extensive review, not only code \[unintelligible 00:06:49.25\] functionality, but also as an opportunity to teach Go and \[unintelligible 00:06:52.19\] the conventions, the best practices.

**Angelica Hill:** And then now you've moved to somewhere where Go is bigger, so therefore you don't have to play such a big kind of a reviewer role.

**Anderson Queiroz:** Exactly. Now I am a software engineer, as a senior, but there I was a tech lead. I think when you go above senior \[unintelligible 00:07:10.03\] you start coding less, reading more, writing more... Right?

**Angelica Hill:** Okay...

**Anderson Queiroz:** I mean, writing more specifications and documentations.

**Angelica Hill:** So do you feel like there's a direct correlation between seniority and how much reading of PR versus writing you do? Like, if we were to plot that on a graph, how much you read PRs and how much you write... Could we, to generalize the industry, say that the more senior you are, the less you're gonna be writing PRs and the more you're gonna be reviewing them?

**Anderson Queiroz:** I think the more you are senior, you're gonna look for more things. So because you're gonna be able to evaluate -- if you're good in the language, you can evaluate the language and the conventions, you can evaluate the general software architecture. When you're in a role that as a senior you are also a mentor, there's a lot of meeting juniors in the team; I think you are reading a lot, because you have this responsibility of the team, of the product. But if you're in a company where everyone's senior-senior... In Berlin definitely the titles are inflated. So you know, perhaps everyone doesn't need this level of attention in mentoring or teaching; that happens a lot through PRs.

**Natalie Pistunovich:** \[08:21\] That's an interesting question, yeah... Because sometimes in Go they have this graph of contributions that is no longer just the squares, but also what type to bring more - to you make more issues, do you review, and so on.

**Anderson Queiroz:** Oh, yeah...!

**Natalie Pistunovich:** So if you can look in that, then you kind of know what people's roles are, or you see how it changes over time, or something.

**Angelica Hill:** If I showed you a load of graphs, would you be able to guess the seniority of that engineer?

**Anderson Queiroz:** Perhaps... I think I looked quickly at mine and now it's 50%.

**Natalie Pistunovich:** Nice.

**Anderson Queiroz:** Pretty much.

**Angelica Hill:** Do you think that that's the balance that most engineers would like, or do you think that there is such thing as someone who prefers to be reviewing more than writing?

**Anderson Queiroz:** When you think as a software engineer that the patch is about writing, writing... Right? They write code... I think at least either you want or you need to pass knowledge forward. So you're gonna need to read. I really like to review code, for both reasons. One... Because, I mean, I have a passion for Go, and I am a quite methodic person, so I like to ensure that the code is good, the conventions are there... I'm super-picky about proper error handling... So this is something that -- if you're not handling the errors properly, or you're really bad at the conventions, I'm gonna be commenting that. But I have special commenting to ensure that I'm not overwhelming the other person, or to feel like I'm just complaining, saying that your job is bad.

**Angelica Hill:** So you say you try to give feedback, you don't wanna overwhelm the person... How do you do that? Is it that you limit yourself to "Okay, I'm only gonna put six comments"? Is it the way in which you phrase your review? How do you make sure that you're not overwhelming?

**Anderson Queiroz:** Yeah, I learned to experience in feedback. I put tags. So I start a PR with suggestions, or sometimes I put questions... But a question is a question, right? So it feels a bit redundant, but I put. And then I have blocker... And sometimes the suggestion is \[unintelligible 00:10:18.25\] Go convention. Or depending on the wrapper, blocker \[unintelligible 00:10:25.29\] Go convention. So I try to categorize in suggestion, question, and blocker. I put blocker \[unintelligible 00:10:32.20\] So basically, the blocker is either I see there is a problem in the code, so it needs a change, or I believe there is a problem, or I don't believe that this implementation is good... So at least you need to answer that. You can say \[unintelligible 00:10:47.28\] that's fine, but I need an explanation. So these are the blockers.

Suggestion is exactly that - I believe it can be better. If I were writing this code, I would do it different, but you don't have to take it. Sometimes I put like init. It could be just "Erase this blank line between the function call and the error handling." This is init. Or a typo... So these things. And then if I've never reviewed a PR from this person, or perhaps I see there is a lot of comments, I go to the person, or even in the PR, I put "Look, there is these three categories. The only thing that's really important are the blockers. So the blockers, please comment or change. The suggestions are suggestions, and as always, you are free to \[unintelligible 00:11:33.11\] Just answer the blockers and talk to me." That's how I do.

**Natalie Pistunovich:** So you say that in some situations it kind of makes sense to just speak in person instead of writing a lot, for example.

**Anderson Queiroz:** Sometimes it's easier. I think sometimes speaking is better, sometimes writing is better... And on pull requests, writing on the pull request is a lot slower. Sometimes it's worth jumping on a Slack chat; it's already enough. Sometimes we talk.

I think nowadays at Elastic, because we are distributed, it's a lot more through Slack, rather than really a call... But sometimes - yeah, I've jumped on a call, for small things.

**Natalie Pistunovich:** \[12:18\] And how do you decide when it's better to do this and when it's better to not? Do you have a thumb rule, or is it all just feeling?

**Anderson Queiroz:** If there is a lot of back-and-forth, it's easier to jump on a call. Or if it's something that I really want to understand... But most of the times I always \[unintelligible 00:12:32.13\] on the chat. Now, Elastic is a distributed company, so we write a lot more. So it's a lot more common just to write than jump on a call.

I think jumping on a call is more personal, so if I'm close to someone, it's easier. It feels more natural to jump on a call. And if you don't know the person so well, or something, you kind of end up just chatting.

**Natalie Pistunovich:** So you say there's actually three types of giving feedback. One, writing in the pull request, two, writing on Slack, and three, hopping on a call.

**Anderson Queiroz:** Yeah. On Slack - I use it more to clarify. Because if it's specific about the code, I'd rather have it in the pull request. I kind of document it anyway, right? I try also to explain why what I'm saying... As I said, in my past company I was really with this job to teach, to mentor in Go; I would link a lot of references. Also because I learned in another company -- I remember my colleague and I, we were reviewing a pull request, \[unintelligible 00:13:38.06\] "Oh yeah, this function is too long. This function is too complex." This happens. And the guy was like "Why?!"

**Natalie Pistunovich:** "Why did you butcher my pull request?"

**Anderson Queiroz:** "You are guessing. This is your opinion." And I was like, "That's true. We don't have like a metric to say that." But also it was common sense. It was like "This is too big", you know, in the company. But this guy was a new-joiner, so everything was different for him.

So again, clarifications - I can do also in the pull request. But I think it's important to document what's happening in the code, there.

**Natalie Pistunovich:** In the code itself, to kind of document, to make it self-explanatory.

**Anderson Queiroz:** Exactly.

**Angelica Hill:** So in terms of -- you talked about giving feedback, not overwhelming... Do you feel like PRs are also a good place to kind of -- especially for more junior engineers, give them like props on things they're doing well? Like, "Oh, I really like the way you did this thing." Or "Oh, this is great." Or "This function is structured really well." Do you feel like PRs are also a way to give positive feedback?

**Anderson Queiroz:** Yeah. I think it is. It is important, and it's something that I would like to do more as well. I mean, I never go to a pull request looking for errors or to try to diminish someone's job. But at the same time, I go to a pull request looking for errors, so they don't go to production.

At the end of the day, you're looking for problems in issues to prevent things bad from going to production. But I think it's super-important to do the praise, to assert when someone does something nice. Sometimes someone just fixes something a bit random, but it's the same function. It's not really going away from the aim of the pull request, and this is really good, to praise. At least a thumbs up.

**Natalie Pistunovich:** So we said that there's some stages that you escalate the communication through some way, and definitely you want to include more positive feedback, that is not "Correct this", and so on. Or explain yourself. What other changes would you make to the PR process based on pain points you have with the flow?

**Anderson Queiroz:** It's a really slow process, because you write the code and then you submit the PR. And then someone else - sometimes more than one person - they have to stop and read it. And how do you synchronize that? And then I think it's gonna depend a lot how companies do... I've been working for different processes. Some processes, they ensure that the pull request will be reviewed, some not so often...

\[16:04\] Now I'm definitely overwhelmed by GitHub notifications, so sometimes it just slips through, some PRs, and days later someone tags me, "Anderson, can you give a review?" Like, "Oh my God, sorry."

**Natalie Pistunovich:** Because it's something that -- kind of a bit of a ping pong, or does it happen more with new pull request?

**Anderson Queiroz:** It happens when you have to re-review. You do the first review, and then you have to look again.

**Natalie Pistunovich:** Yeah.

**Anderson Queiroz:** So to get the proper ping, it's hard. And the other thing that -- at least on GitHub... I've used a bit of BitBucket as well. I've submitted one, perhaps two PRs to the Go wrapper, with Gerrit. But on GitHub it's really hard, when you do the first review, you're asking for changes, and then people do changes, to see exactly what changed. To be like "Okay, I'm gonna review just the changes."

**Natalie Pistunovich:** Isn't this a new \[unintelligible 00:16:57.18\]

**Anderson Queiroz:** If someone just forced --

**Natalie Pistunovich:** Oh, forced push. Okay.

**Anderson Queiroz:** If someone's a forced push... Right? So sometimes it's hard to get just the bit that I have to re-review. That's a pain point.

**Natalie Pistunovich:** Yeah, I had a Twitter poll the other day on "What do you do when the pull request stretches so much, and there's one million comments that lead to one million commits? Do you squash that or not?" And I think the answer that I liked most was "During the pull request have as many commits as needed, and ones that's good to go merge, then squash it all into readable, one or two commits, or however many logically needed..." But exactly to allow the proper review, like you say, as many commits as needed.

**Anderson Queiroz:** Yeah.

**Natalie Pistunovich:** Yeah, definitely a good practice.

**Angelica Hill:** So you kind of chatted a little bit about your love of Go... And this is a Go podcast, but I would love to hear a little bit about your approach to PRs in other languages, i.e. does the way that you review PRs differ depending on the language you're reviewing?

**Anderson Queiroz:** I think they do differ, most because of the expertise, right? I'm quite comfortable in Go to understand the language and understand what's happening, to know some caveats, some catches, and also to talk about conventions. In other languages, not so much. So I guess in other languages I am gonna focus more on general software architecture, because this is \[unintelligible 00:18:16.16\] and functionality... And of course, try to use as much as I know from the language convention.

I think that's another thing... Pull requests are great, great to learn language conventions. I've learned so much about conventions in Go and the other languages through pull requests... And then if I'm not so expert, I'm gonna try to put and point the best that I know... But I know that I'm not the expert. And a lot of the times it's probably not really my wrapper, so I'm not there to enforce anything. So they're gonna be more on the suggestion side.

**Angelica Hill:** I mean, taking kind of one step more granular, are there things that are more important for Go when you're reviewing, i.e. stylistic choices, almost principles that you might adhere to more closely than you would in other languages?

**Anderson Queiroz:** I mean, Go is opinionated. You have to `go fmt`. You have to format the code properly. Even though we still have some space to discuss about how to format... But I think that's the first thing. I usually would like to be super-strict about how the imports are sorted, but I am not. If the wrapper is consistent, I think it's a lot easier to enforce this thing. If it isn't, not so much. And in other languages they don't have so much, so it's gonna be more about team conventions, rather than the language. And in Go you get a lot from the language.

I haven't seen so much, but because Go is so focused, let's say, in concurrency, sometimes people try to either sneak in concurrency when they shouldn't, or they are not using the right tools... Also because, you know, "Oh, concurrency! Let's use channels!" No. Channels are for something. A mutex - they are for other things. Waitgroups are for other things, right?

\[20:08\] So this is another thing that I would say, "Okay, no. Perhaps we can do different, or we can do better." Or "This is too complex to understand if you use \[unintelligible 00:20:16.17\] If you remove this channel and put a waitgroup, it's a lot easier. \[unintelligible 00:20:20.02\] Channels - probably not. So I think of these things.

**Angelica Hill:** When there are new features and new things released in Go, do we see an uptick in people using those in PRs? Like, you just get over-excited, like "Oh, generics...! Every PR now has generics." \[laughs\]

**Anderson Queiroz:** I always wanted to push the new things and use the new, as soon as possible. I think in general if you're working with microservices, it's a lot easier, because you can just update the version and redeploy, and even if something breaks, you can roll it back a lot easier. Now at Elastic \[unintelligible 00:20:59.00\] that is gonna go to I don't know how many clients in the whole world... So we have a release cycle, so we have to choose "Okay, let's change the version."

We have several wrappers that use Go, and you try to keep everyone in the same version. So it's a slower process. But as much as I can, and as much as I know what's coming up, I try to incorporate, if I can.

On that topic, have you folks started to use any, instead of the empty interface?

**Natalie Pistunovich:** \[laughs\] It's an interesting poll to write. I don't know, I think I'd phrase that as an unpopular opinion. "Don't use that", or something. It can be one more unpopular opinion for your stash...

**Angelica Hill:** Your library that we're soon gonna have...

**Anderson Queiroz:** I think I saw the first use of it today, in the workshop with Bill Kennedy. His code had any, and I was like "Oh, yay! We can use any now."

**Angelica Hill:** What was the use case that he used?

**Anderson Queiroz:** It was a map for a logger...

**Angelica Hill:** Okay.

**Anderson Queiroz:** The map string empty interface. I think it was in a logger, or something. Or no, I think he was parsing at JSON. So instead of map string empty interface, it was map string any.

**Angelica Hill:** Okay. Well, we can do the poll and then tag Bill and be like "Please tell us. Give us the example so we can all understand how you use this."

**Anderson Queiroz:** Yeah... He was asking everyone to have Go 1.18 because of that. He was like "Okay, you're gonna use any, so please..."

**Break:** \[22:27\]

**Natalie Pistunovich:** What do you do when you have very large pull requests? Lots of files, lots of commits, lots of lines.

**Anderson Queiroz:** I sit and cry.

**Natalie Pistunovich:** How do you get on top of that?

**Anderson Queiroz:** No, that's a tough one... I try to review at once. Sometimes it's not possible. I think there's no magic, you just have to go through it.

**Natalie Pistunovich:** Do you review everything on a high level? You know, see the list of the commits, if they tell some story, or maybe look at the list of files, or do you just dive into the first one, and one by one, until it starts making sense?

**Anderson Queiroz:** I never look at the commits. I don't know if because when I'm coding and committing -- like, I'm gonna squash everything \[unintelligible 00:24:51.27\] First things first. So to me, the commits themselves - they don't matter so much. I try to put in a way - if I need to revert something, I do. But at the end of the day, there's a good chance that I'm gonna just do one commit. So I never look at the -- neither the wrapper commit history. Only if I need to understand why it happened. But in a pull request, I never look at the commit history. I just look at the diff, and it's always on GitHub.

**Natalie Pistunovich:** And look at the files by the name, basically.

**Anderson Queiroz:** The big ones I just go click, and "I've seen this file. I've seen this file."

**Natalie Pistunovich:** Hm... So just by the order of appearance. Because sometimes it's not always the correct flow, kind of.

**Anderson Queiroz:** Yeah. If it's hard to understand, I get the code, I check out the feature branch, and I go to see... Because I also sometimes... You know, I'm also going on, you wanna jump, you wanna understand how it was called to do something, and then it sits there on an IDE and you have the code. And also if I wanna suggest a change...

So either it's something really simple and I'm 100% sure that it works, or I'm gonna probably write it in the code itself, and I might test it, to not suggest something that is broken.

**Natalie Pistunovich:** Maybe even a few steps back... When you go to review a pull request, do you start by reading the issue? So the first thing you do is read the issue.

**Anderson Queiroz:** \[26:13\] Yeah. I have to understand what's happening there.

**Natalie Pistunovich:** Then do you review the diff on GitHub, or in your IDE?

**Anderson Queiroz:** No, on GitHub.

**Natalie Pistunovich:** So you go kind of file by file on GitHub.

**Anderson Queiroz:** \[unintelligible 00:26:23.08\]

**Natalie Pistunovich:** \[laughs\] Philosophical questions...

**Anderson Queiroz:** Good point. Because to me, that review -- actually, going back to the other episode... We're doing a code review. It's not the pull request so much, right? What's happening.

**Natalie Pistunovich:** \[laughs\]

**Anderson Queiroz:** You have to comment on it. So it's really hard to comment on it, at least for the tools that I use at GitHub and the IDE. It's hard to comment on the code. If it's something that for some reason -- you know when you do either a greenfield project, or the pull request is a huge refactor... You know, everything changed, so it's pretty much new code... So on that rare occasion, I might open the code itself, because then I can read in like an execution order, let's say... And then my comments - they are probably gonna be comments on the code itself.

I've done it once or twice, and then I created my branch out of this branch, and then I open up pull requests for this branch, so the person can see my comments in the code, without having to go look for it.

But this was pretty much in either greenfield projects - you know, when you start something new, or when you're just adding so much new code that the pull request itself, it's hard because it's completely out of order and everything, and there is a lot to comment on.

**Natalie Pistunovich:** Yeah, that's the hardest ones, when there's so much to handle there.

**Anderson Queiroz:** Yeah.

**Natalie Pistunovich:** Do you sometimes find yourself re-reading the whole thing to kind of - once to read it, and second time to make sense?

**Anderson Queiroz:** Yeah, definitely. Going back to an old Go Time, when you talked about documentation and reading documentation - I have the perseverance; if I'm not understanding, I'm gonna read it over and over and over again, and I'm gonna do my best to understand. If I don't, I'm gonna ask. But I think if something's puzzling me, then I'm probably gonna block and say "Look, I think this is important. I don't get it. Please explain."

**Natalie Pistunovich:** Yeah.

**Angelica Hill:** Do you comment as you go, or do you read through, fully digest, and then go through and do all your comments?

**Anderson Queiroz:** No, no, I comment as I go, as a string, and then when I get down there, I'm like "Oh yeah, that's why!" So I go back and delete the comment.

**Angelica Hill:** Oh, okay.

**Anderson Queiroz:** You know, you're like "Dude, it doesn't make sense." Something like "Why?! How does it work?" And then you read it, "Ahh...!" And then I go back, delete and edit the comments.

**Angelica Hill:** You go back, "Oh, I'm so sorry. Never mind..."

**Anderson Queiroz:** I mean, on GitHub you don't submit the review, right?

**Angelica Hill:** Yeah.

**Anderson Queiroz:** So I just delete. But the feeling is exactly that I'm apologizing for asking something stupid. \[laughter\]

**Angelica Hill:** When you're going over a PR, do you feel like - or any reviewer - should test the changes? And to what extent should you test the changes, if you think that they should be tested by the reviewed?

**Anderson Queiroz:** I think that's the one million dollar question.

**Angelica Hill:** Give us the answer, we're ready!

**Natalie Pistunovich:** Maybe another unpopular opinion...

**Anderson Queiroz:** No, I think the answer is it depends...

**Angelica Hill:** Okay.

**Anderson Queiroz:** We say that a lot at Elastic. But I think it depends on your role on this pull request. Imagine that I'm a maintainer of open source, and I'm taking something in from a person that's not from the wrapper, I'd be extra careful. So perhaps I would try to run the code. Usually, I don't really test the code. But again, if it's something that I feel that's really critical and I wanna be sure that it's 100% working, I might test it. But it's rare cases.

**Angelica Hill:** Okay. And does the length of the PR or the scope of the change change that opinion?

**Anderson Queiroz:** \[30:06\] Yeah...

**Angelica Hill:** Okay.

**Anderson Queiroz:** I think the length not so much... Let's be honest, the longer the PR, the less detailed is the review. We are humans, we get tired. Come on. If you're reviewing like 15-20 files, the last one - you're tired. It's just a human thing. And it's something that I've done a few times. I don't like it, but it happens. The longest PRs, I review, and then I submit, and then when I'm doing the re-review, I find new things; I'm like "Ahh... I can't let it pass. I'm gonna have to put a comment where there wasn't a comment, and it was not changed, because now I saw it." That's the thing...

**Angelica Hill:** So given that, what is a reasonable time to expect a PR review? If you put in a PR today, is it the next hour, by end of day, a week? Does it depend?

**Anderson Queiroz:** The real answer is "It depends."

**Angelica Hill:** \[unintelligible 00:31:00.20\]

**Anderson Queiroz:** Yeah. At my first job we -- did we use JIRA? I don't know, whatever; we used columns. We used columns, so there was the column "PR reviews." So the open PRs were there for review. And then there could be -- I think we were three people, so there could be only two PRs on review. So do you wanna put something for review, we have to take something to review. So this helped to keep the process running, everyone reviewing. Nowadays -- I think when you are really running a \[unintelligible 00:31:33.02\] a microservice you just deploy, you usually expect something in the next day to get an answer. Not Elastic... Within the week, I'd say.

**Angelica Hill:** Okay. And do you have different commitments when it comes to your internal team PRs, versus people who are maybe contributing to your service? i.e. like in our system we have a lot of external teams that will contribute to our service and ask for PR reviews... What is a reasonable timeline to commit to review those external PRs?

**Anderson Queiroz:** I think there are two categories. If it's just a normal flow, they can go in the same flow. But if it's something that someone external is doing, because our team doesn't have the capacity, and then it is really important, probably I will try to prioritize this review.

But also, if someone that's not from the team, who doesn't know the wrapper conventions, it's probably gonna be a more thorough review. I strongly believe that at least your code should be consistent. I'd rather have something that I don't like, but it's consistent and it's always there, than half of the code I like, half of the code I don't like, and another third I don't even have an opinion.

So in extended reviews I think there's the extra consistency in code conventions from the wrapper that you have to put through. And then it's better to be quicker.

**Angelica Hill:** For sure. I really like that column policy. I might have to implement that on my team.

**Anderson Queiroz:** Yeah, right?!

**Angelica Hill:** You can't put a PRon if there are already two. You have to review them. I love that.

**Anderson Queiroz:** Yeah, it makes things to move. And I think it's nice.

**Angelica Hill:** I agree.

**Natalie Pistunovich:** It's a waitgroup. We've pretty much described this concept now.

**Anderson Queiroz:** It's a channel with a buffer.

**Natalie Pistunovich:** \[laughs\] Yeah.

**Angelica Hill:** And then I'm gonna have to be the bad girl who comes into Slack and someone's like "Oh, I'm ready to put my PR in this \[unintelligible 00:33:22.14\] and I'm like "You're not allowed to..."

**Natalie Pistunovich:** \[unintelligible 00:33:24.15\]

**Angelica Hill:** "Go review Bob's PR."

**Natalie Pistunovich:** Throwing error...

**Angelica Hill:** \[laughs\]

**Anderson Queiroz:** Yeah... There's like the poking PR review. You only get your PR reviewed when you poke someone. You don't want that.

**Natalie Pistunovich:** Exception. \[laughs\] It could be a fun way of teaching all sorts of Go concepts, now that -- this gave me some ideas. Thank you.

**Angelica Hill:** What, doing a PR review?

**Anderson Queiroz:** By poking people?

**Natalie Pistunovich:** Yeah. With limiting this. This is a fun way to discuss this. And on the way you discuss error throwing, and correct errors, and also exceptions, and so on.

**Angelica Hill:** Okay...

**Natalie Pistunovich:** Goroutines, if you suddenly have to split into that... Yeah.

**Anderson Queiroz:** \[34:04\] Talking about teaching Go in unusual ways... I was thinking today someone should write a Go program that simulates how the queue for the food works here, and then make a proper Go concurrent, good program for that... Because the queues are necessary here. You have a lot of contingence. I was like "You know, you can make better concurrency here."

**Natalie Pistunovich:** Because you have lots of food stations that people miss?

**Anderson Queiroz:** That's the point, you have a lot of food stations. You can have a lot of concurrent access to that. But no, \[unintelligible 00:34:31.24\] A huge queue, and everyone goes to everything that they don't want. \[unintelligible 00:34:35.28\]

**Natalie Pistunovich:** They didn't read the docs. They don't know what's the food.

**Anderson Queiroz:** They didn't read the docs, exactly.

**Natalie Pistunovich:** Everything can be explained with \[unintelligible 00:34:44.20\]

**Angelica Hill:** Lesson learned. Always read the docs first... And if they're bad docs, then...

**Natalie Pistunovich:** Improve them.

**Angelica Hill:** ...improve them!

**Anderson Queiroz:** Open a pull request for the docs.

**Angelica Hill:** Yes. \[laughs\]

**Anderson Queiroz:** That's something that I love... If I'm reading documentation and it's easy to open a pull request, \[unintelligible 00:35:02.03\] or inconsistent something, I open a pull request. I think it's such a valuable contribution, and it's so easy most of the times... I love these docs that have the button Edit, and then you go direct to GitHub to create the pull request. That's fantastic.

**Natalie Pistunovich:** Yeah.

**Angelica Hill:** I feel like I get into a bit of a rabbit hole, and I have to stop myself editing documentation... Because it went from actually making it correct to actually just implying my personal stylistic choices when writing documentation, and phrasing... Like, "I like this adjective slightly better, actually..."

**Anderson Queiroz:** Oh, yeah...

**Angelica Hill:** So I had to pull back to be like "Okay, review for correctness, not for like "I want a comma here."

**Anderson Queiroz:** I think that's so hard... For me, as a non-native speaker, sometimes I don't think this sentence is correct. I think it's missing a comma, I think it's missing an article. And it was like, "Honestly, you don't know English so much. I don't even know if you could do that in proper Portuguese, like proper grammar." But I think it's important.

My take is if I believe it's compromising their understanding, I'm gonna probably suggest something. And also, sometimes when the comment is there for a long time, I just make that change and suggest \[unintelligible 00:36:15.19\]

**Natalie Pistunovich:** I sometimes put into some AI, if I don't understand something, and I read it 2-3 times, and I keep staring at it... I'm like, "Just explain that to me in other words", and that helps.

**Anderson Queiroz:** Good. AI... \[laughs\]

**Natalie Pistunovich:** It's like pinging somebody... But yeah. But also make the changes, just like you, because I think if I as a non-native don't understand this, there must be another non-native that gets lost there... And clarity is important.

**Anderson Queiroz:** Yeah.

**Natalie Pistunovich:** Let's say you're interviewing, whether you are the candidate or you are the interviewing person. And part of the interview is reviewing a pull request from somebody from your team. What tips do you have for somebody to do this well?

**Anderson Queiroz:** I've actually never been really in these shoes, on either side. I've been asked - in one of the codebases, any of the codebases, what would you change, or something? I think at the end of the day, a lot of the time, to interview for culture fit, and a person that's nice, and it's good to work with, this is super-important. So I think if you're in an interview, just be sure to be nice, in your comments and everything. Don't go like, "Oh yeah, this is crap. This is bad." Just be nice, be polite, link documentations, and \[unintelligible 00:37:34.26\] bring arguments; don't say "Okay, do that" or "Change that" or "This needs change" without a reason.

Usually, in an interview you don't have so much time... So I would go for "Oh yeah, this name is not ideal. The effective goal - there is a section on name conventions that explains why it should be like that. So as it's in Go, it's better to be like that."

\[38:03\] So try always to bring something to support your views. And when it's an opinion - and that's something that I really do in pull requests; when it's my opinion, I say "Look, this is my opinion. I believe that's better, because this, this and this. It's up to you, because I don't see a flaw here. I just think it can be better." \[unintelligible 00:38:18.17\]

**Angelica Hill:** If you were interviewing someone and their task was to review a PR, what would be things that they did that would maybe have you like "Oh, no... I don't know about that..."

**Anderson Queiroz:** A thing would be to be aggressive, and impolite. To just diminish the code and say the code is bad, or something... An \[unintelligible 00:38:41.01\] they show that they don't know what they're doing.

I think if you interview people, you know some people don't know what they're doing, or they're just trying to fool you. If it's such \[unintelligible 00:38:53.17\]

**Natalie Pistunovich:** It's better to say you don't know.

**Anderson Queiroz:** It's not like that... It's like, "Great! Just go!" And you know, I just go "Yeah. Mm-hm." I just incentivize. "Yeah, go. Go. Please." And at the end, "Ah yeah, thank you very much. We're gonna be in contact."

**Natalie Pistunovich:** Yeah. And definitely staying honest is a lot better than making things up.

**Anderson Queiroz:** Yeah. Please say "I don't know." I think if someone to me in an interview says "Look, I don't know. I don't remember." Or "I don't know, and I think in that place I can get the information" - you're always scoring a hundred points with me. If you're trying to just BS me through it... Nah.

**Natalie Pistunovich:** That's fair.

**Angelica Hill:** Anderson will not be having that.

**Break:** \[39:34\]

**Angelica Hill:** Okay, so we have touched on this a little earlier in the episode, but I wanna dig a little bit deeper... In fact, I will ask you a question first. Are you engaged in any kind of open source projects? I know you said that you contribute to Go \[unintelligible 00:42:19.15\] Is that a world in which you feel like you have engaged and put PRs in?

**Anderson Queiroz:** So I can cheat my answer, right?

**Angelica Hill:** Okay.

**Anderson Queiroz:** Yes, I'm involved in open source, because I work at Elastic, and the majority of the wrappers are open source, right? But as a 100% open source contribution that I'm not working for the company, no. It's something that I always wanted. As I said, I managed to get a commit too in Go, but I haven't fully got to participate in a project. I'm still trying. Oh no, I think I got one in Kubernetes, too. See, it's one of my goals... You know, there's plans, things you wanna do, so \[unintelligible 00:43:01.26\] back and forth... At GopherCon, again, perhaps the flame is just lighting up again.

**Angelica Hill:** Reignite that passion.

**Anderson Queiroz:** Let's see if it's gonna happen. But no, I'm not really engaged on, let's say an external open source project, that's not part of my daily job.

**Angelica Hill:** And when you have done it, is part of the reason why you think it's difficult to engage fully - is anything to do with the difficult or the different process to put in a PR when it is an open source project, as opposed to internal, like within work PR reviews and submission?

**Anderson Queiroz:** I think to me what's always difficult is to find something meaningful to work. You don't know what you can do... There is a tag, "First good issue" and so on, but I think that's the point - we're lost, and we don't have someone to go "Oh, please help me." Or "I tried that." Or "Shall I do that?" Because my \[unintelligible 00:43:55.17\] to go and do a refactor. If it's a completely external project that I don't know anyone there, or anything, I'm gonna be afraid. And sometimes you're not even able to run the project.

\[44:12\] So I think that's a lot of \[unintelligible 00:44:12.29\] if you would have something -- not necessarily a mentor, but perhaps \[unintelligible 00:44:17.01\] ask questions. And even say "Oh, I wanna take this issue." Because sometimes the good first issues - they opened one year ago. And it's like, "Dude, I don't know if it's worth to fix that or not." And then you open the pull request everything, and no one reviews it. And then you ping "No one reviews." That thing got stale, you got demotivated.

**Angelica Hill:** Yeah. Fair enough. And do you think there's a higher bar as to what you're willing to put in as a PR for an open source project? I speak about this from my own personal experience... When I was trying to get into like "Okay, I wanna contribute to open source." "Oh, you should just go in and do like a little change." But I was like, "Yeah, but I feel like I'm contributing it to an open source library where everyone can see." And they're like, "Oh, Angelica made like a one-line change... Or changed that one function name."

**Anderson Queiroz:** \[unintelligible 00:45:06.28\] I always had the feeling to contribute to open source projects the bar is super-high. You have to be an expert developer, and everything... And the reality is no. The issue is there, the problem exists... I think this is the best advice I can do to any junior developer - just go for it. The no, you already have, right? So your change is not there, the bug is not fixed. The documentation is not improved, the feature is not there. So this is not gonna change; if your change didn't get there, you learned something. You played with a new technology.

I was trying to submit pull requests for the Kubernetes code, just fixing linting issues. I understand a bit how that piece of code worked. And it was like "Oh, how they structured that. And look at the packages", because I had to read through the packages to fix linting issues. I think one PR got merged, the other ones got stale... That's life. It happens. And I learned something. So that's right, go for it. Let the other one say no. It's not your job to say no for you. It's their job.

**Natalie Pistunovich:** That is a popular opinion, I bet. It applies to many fields in life.

**Anderson Queiroz:** That's true.

**Angelica Hill:** Just do it.

**Anderson Queiroz:** Yes. Try.

**Natalie Pistunovich:** Yeah. Well then, alright... The fun part. Unpopular opinions. Before we started the recording, Anderson, you mentioned you have several unpopular opinions, and you were wondering whether you should go for the most -- how did you phrase that? I forgot. You used a good word. The most...

**Anderson Queiroz:** Controversial?

**Natalie Pistunovich:** Yeah, exactly. Or the least controversial.

**Anderson Queiroz:** Yeah. I'll pick a controversial one... But I can explain. As I said on the PR, you can explain. You should not write more than 100 columns. Write your code; your code should not really pass 100 columns.

**Natalie Pistunovich:** From width.

**Anderson Queiroz:** Yeah. First things - there's no magical number \[unintelligible 00:47:09.00\] I would say 110 is okay, when it's really bad to cut. 120 is almost a hard limit; don't really go over that. Why? First things first. Do you read books on landscape? No. Right? Come on, I think everyone had that; we got this email, you're like on your 4K or whatever monitor, and that thing goes from side to side, and you're reading -- for the listeners, I'm moving my head, as, you know, reading from one side to the other.

**Angelica Hill:** Like you're watching tennis.

**Anderson Queiroz:** I feel like a typewriter that goes from side to side. So it's hard to read, because we don't read in landscape, we read in portrait. The second thing is not everyone has got a screen as big as yours. There are people coding in 14, in 13 inches. They want to have two tabs open, perhaps. So if you go much more than 100, it's gonna be bad for some people, and I believe for everyone too long is hard to read. So that's my unpopular opinion.

**Natalie Pistunovich:** \[48:14\] I want to disappoint you that I think I agree with you, and I even take this into writing emails. I try to keep it -- I don't know how many characters that is, but I sometimes break lines. Like, one sentence into 3-4 lines, just so it stays, so you don't have to scroll in case images, logos, whatever happens in somebody's signature that it suddenly gets stretched.

**Angelica Hill:** I think you're unfortunately preaching to the choir with me and Natalie. We're both like, "Yes. Please! My neck will hurt."

**Anderson Queiroz:** Perhaps in Go --

**Natalie Pistunovich:** A Chrome plugin that just truncates things for you.

**Angelica Hill:** Yeah.

**Anderson Queiroz:** Perhaps in Go. But I think if you go to Java, the things are long there.

**Natalie Pistunovich:** Yeah, 100 characters is just the function name.

**Angelica Hill:** Oh, my gosh... \[laughter\] I feel like that one was a good one... But if we have time, Natalie, I wanna hear another one.

**Natalie Pistunovich:** Yeah.

**Angelica Hill:** I want us to get an unpopular one from you.

**Anderson Queiroz:** Oh, my God...

**Angelica Hill:** What was the other one that you were thinking about saying, that you cheekily in your mind were like "No, I'm not gonna say that."

**Anderson Queiroz:** No, I think this one's like the unpopular/kind of popular...

**Angelica Hill:** Okay...

**Anderson Queiroz:** I mean, I see a lot happening, so perhaps an unpopular... \[unintelligible 00:49:18.00\] is wrong. Period. You have to wrap the errors and add more context. Always. I cannot count how many times I had to go through the code and dig deep and deep and deep to discover where this error came from. You know, it's like when you try to write to the disk and you get an error. You get something like... I got one. "Too many colons in the address." You're like, "This is a valid address. How there is too many colons?" And then you have to understand where this address was gonna be used, which method it was, and then "Oh yeah, on this context there are too many colons." But they didn't have this information.

So \[unintelligible 00:49:56.01\] you have to wrap your errors. Now you don't have an excuse. You have error wrapping in the standard library.

**Natalie Pistunovich:** So you think wrapping errors will be an unpopular opinion.

**Anderson Queiroz:** Yeah.

**Angelica Hill:** I feel like this second one is gonna probably be more unpopular.

**Anderson Queiroz:** Yeah. Because a lot of people just return the error.

**Angelica Hill:** Yeah.

**Natalie Pistunovich:** Interesting.

**Anderson Queiroz:** That's one of the things that I look in pull requests. Everyone's like "Dude, could you wrap that?" And then it goes back on that. If it's my wrapper, my code, I might say "No." Now, when I say "my", please, my team's, right? I don't have this possessive. I think code must be owned by a group, and it must be a consensus in the group... But yeah, this is a thing that I'm gonna point. And usually if it's an external adding code, even more important. Like, your wrapper, your rules, our wrapper, our rules. \[unintelligible 00:50:44.12\] I play by your rules.

**Angelica Hill:** I like that one. I'm also having so many more ideas. This always happens when me and you have an episode, Natalie. I'm like "So many more episode ideas..."

**Natalie Pistunovich:** Write them all down!

**Angelica Hill:** "Does your code belong to you, or to the world...?"

**Anderson Queiroz:** I mean, in open source that's definitely a question, right?

**Natalie Pistunovich:** Yeah, also with AI tools that are writing code, that's a question.

**Angelica Hill:** Yeah.

**Anderson Queiroz:** Oh God, yeah.

**Angelica Hill:** Who is the true owner of code...?

**Anderson Queiroz:** Yeah, that's a good one.

**Natalie Pistunovich:** Yeah, licensing is interesting, for sure, within Copilot and friends.

**Anderson Queiroz:** When the AI put the bug in production, who do you blame? Who ran the AI, who wrote the AI...

**Natalie Pistunovich:** ...or who reviewed the PR?

**Anderson Queiroz:** That's a good one, right? Can I review a PR?

**Natalie Pistunovich:** For sure, for sure.

**Anderson Queiroz:** Would you trust that?

**Natalie Pistunovich:** I might have used that in the past, yes... \[laughs\]

**Anderson Queiroz:** Oh, that's nice. Okay.

**Natalie Pistunovich:** I'm a big fan of AI in coding. I think it's a fun combination. I'm very happy to automate myself out of a job.

**Anderson Queiroz:** That's good. \[unintelligible 00:51:45.22\] I know almost zero about AI in coding, but I'm super-interested. It looks really interesting to see where is it going.

**Natalie Pistunovich:** Yeah, definitely... Both from the side of writing and from the side that's relevant to this episode, which is the reviewing and the explaining, and so on.

**Anderson Queiroz:** I think in general, AIs can see the context, and they carry so much information. Part of the things that we just can't. And sometimes someone really experienced can, but they cannot teach it... So there's definitely a lot of value.

**Natalie Pistunovich:** Yeah, exactly. About the context in particular.

**Angelica Hill:** I sense a Twitter poll, Natalie... "Would you let an AI review your code?"

**Natalie Pistunovich:** Hm... Maybe this can be my unpopular opinion for this episode. I would not have it just review "Good/Bad", but I would use it as something like "Here's the code. What does it do?" Or "List the problems, and then read the output, and give it a secondary review." I think this might end up being a popular opinion.

**Anderson Queiroz:** True.

**Angelica Hill:** Now you've explained it and won us over to your side. I feel like it will be popular.

**Anderson Queiroz:** Yeah...

**Natalie Pistunovich:** Okay, my next Chrome plugin. Each episode is like 15 other ideas, yeah... Summarize this PR for me. Well, this has been fun and this has been inspiring. Anderson, thanks a lot for joining us and sparing some of your time at GopherCon U.K.

**Anderson Queiroz:** Thank you very much for having me. It was really good. I'm really happy.

**Angelica Hill:** Thank you so much. We're gonna have to get you back on for the "Who owns our code?" episode. \[laughter\]

**Anderson Queiroz:** Yeah, I would love it.

**Natalie Pistunovich:** It's a plan. And everybody \[unintelligible 00:53:23.22\] thanks for joining us this time.

**Angelica Hill:** Bwye!

**Anderson Queiroz:** Thank you very much. Bye-bye!
