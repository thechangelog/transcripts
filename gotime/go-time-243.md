**Natalie Pistunovich:** Hello, and welcome to Go Time. Today we're going to be talking about PRs. What makes a good PR, how do you do the best PR review, is there such thing as a PR that is too small, too big, too filled with emojis...? We'll be debating all the details and trying to help our fellow Gophers master the art of the PR.

Today I'm joined by three wonderful PR pros. First, we have the wonderful Jeff Hernandez, who is an associate software engineer at the New York Time. Hello, Jeff. How are you today?

**Jeff Hernandez:** Hi. Doing well, thanks for having me back.

**Natalie Pistunovich:** Thank you for joining us again. Next up we have Sarah Duncan, who's a staff software engineer at the New York Times. She also teaches an introductory programming course at a high school. Thank you for joining us. I know you're a first-time Go Time guest, so - lovely to have you.

**Sarah Duncan:** Yeah, thanks for having me.

**Natalie Pistunovich:** And last but certainly not least we have Natasha Dykes, who is a senior software engineer at the New York Times, and happens to be a cycling enthusiast.

**Natasha Dykes:** Hi. Thanks for having me.

**Natalie Pistunovich:** Hi. Thank you for being here. And we have the beautiful, the wonderful, the incomparable Natalie, who is my co-host. Hello!

**Angelica Hill:** Hi, Angelica! I think it's very smooth you skip pronouncing my last name. I would probably do the same thing. It's so complicated.

**Natalie Pistunovich:** I haven't been on in a whole second, so I'm kind of trying to minimize the amount of babbling and mistakes I get myself into. \[laughter\]

**Angelica Hill:** Great strategy.

**Natalie Pistunovich:** Yeah. We'll see if that persists throughout the episode... I might just get over-excited and fumble over my words. But thank you all for joining me today... I'm extremely excited to talk about PRs.

So we're gonna start with the very basics - what is a PR, and why do we even do them? I'm gonna pass it over to you, Sarah... When you're talking to your wonderful high school students and they go "What is a PR? What is this thing?", how do you explain it to them?

**Sarah Duncan:** Well, PR stands for pull request, and it is typically used to refer to somebody who's been making changes to a shared codebase, making a request to add those changes back into the common, main - typically it's like a branching situation, so the main branch of that codebase... And that also typically corresponds to moving that code into production, if it's a production system... So it's a way to get a review on your work and basically ask to add code to the main system.

**Natalie Pistunovich:** And why is it useful? Why is this something that we want to be doing? Is that something that maybe -- I don't know, Jeff, do you find PRs useful?

**Jeff Hernandez:** I mean, coming from, at the Times at least, I'm an associate software level, so I'm kind of like the entry-level... So it's a great way to get feedback from my senior engineers, and basically get a lot of kind of feedback from them in terms of I can be doing better, or code structure, how that could be improved... Or even tiny, little optimizations... Or maybe there's a certain way that, for instance, Go likes to do things, because as we all know, Go is very opinionated... So it's like a way to tap into that resource from our senior engineers.

\[00:08:01.02\] I feel like it's a great tool, especially for someone that's coming into a new team, kind of getting the lay of the land, getting the norms that you typically might not get in through other forms of documentation.

**Natalie Pistunovich:** For sure. And in terms of assessing PRs, is there such thing as a good PR review? Is there such thing as a bad PR review? I would love to hear how you assess going about either putting in a PR, or reviewing a PR. Maybe Natasha - when you're putting in a PR, how do you decide whether it's time to go, or whether you need to wait and do some more work... At what point do you feel like "No, this is ready to be reviewed by my peers"?

**Natasha Dykes:** I think for me it's helpful when I review a ticket - usually, it's for a feature or something that I'm working towards... I review it to see if the work that I've done actually meets the requirements, and at that point I can either say "Okay, it's ready to go." I've cleaned up any notes for myself, or made sure I did gofmt, all of those small things... And then I'll open up a PR. But I would say you can even open up the PR before you're ready to merge. Sometimes it's good to just get that early feedback... So it really depends on the work that I'm doing.

**Natalie Pistunovich:** And Natalie, I see your intake of breath... Do you have something you'd like to add?

**Angelica Hill:** Yeah. You asked earlier what is a PR... And it's interesting also to compare PR and CR, and why is it even "pull". So PR, as Sarah said, stands for "pull request." So let's split that into two questions. Why "pull"? Why not "push", why not "merge" or some other thing? And what is the difference, or what do you prefer - CR, which stands for "code review", or PR as "pull request"? It's an interesting question to discuss, it's also interesting even a little bit in the context of like what does that represent. I'm curious to hear everyone's thoughts.

**Natasha Dykes:** I think code review is more semantically correct for the work that I'm typically doing... But I think the changes that you could potentially make don't necessarily need to touch code. It could be like a readme update, it could be some other stuff that's kind of supporting the repository versus just the code. I don't know why it's called "pull request" though, I've never really thought of that, so I'm curious to see what others think.

**Jeff Hernandez:** Now, this gets me kind of wanting to go to Wikipedia and learn about where "pull request" came from, and that whole background. That's one of the things I'm interested about, just like where everything came from in terms of software engineering best practices, and naming conventions... Because once you're in the industry, you know, it's just something we know; but it's not something -- at least it's a term that's used across the whole industry, but it's not something that we as a team choose to use. It's kind of like a shared language amongst software engineers.

**Natalie Pistunovich:** So I was super-cheeky and I did google it just now... And it says that the name "pull request" comes from the idea that you're requesting the project to pull changes from your fork. That might not encompass all ways that we now use it in our language, but that's what Google's telling me on the top line...

**Angelica Hill:** Yeah, it is interesting, right? You have this project -- I think most of us use Git in some way; GitHub, GitLab, or... I don't know too many other personal variations, but I'm sure that exists as well. So we all kind of eventually are used to the concept of having a main branch, and then branching your changes from that, and then asking to merge that back, whether frequent, or not frequent... And yeah, we all say PR. I've been always saying PR, but then recently I had to work with this ticketing system that is called "Click up." And there they said that the label was code as in CR. And that was kind of interesting. Probably the first time I remember, let's say, encountering \[unintelligible 00:12:00.17\] so I wanted to dive a little into the semantics of that. Then there's also merge request, which kind of makes sense, but actually also not really in use.

**Natasha Dykes:** \[00:12:12.00\] I've also heard it called a changelog, or CL... So there's a lot of different terms for it.

**Angelica Hill:** What are you familiar -- what do you know changelog to be?

**Natasha Dykes:** It's the same thing as like a pull request, but certain companies call it a changelog.

**Angelica Hill:** So you're submitting a changelog?

**Natasha Dykes:** Yeah, that's what I've understood it to be. It's just like something I heard in passing.

**Jeff Hernandez:** Yeah, I've seen that in the Go repository, references to actually the GitHub Go repo, and issues, people referring to changelogs.

**Natasha Dykes:** Yeah. It's a Google thing.

**Jeff Hernandez:** It's a Google thing, yeah. I'd totally be interested in learning more about that.

**Natalie Pistunovich:** And that was me thinking that the most basic of questions, "What is a PR?", was just me doing my due diligence for the newbies, but now I see it's a whole debate. There's so many different words to use. This is great, we're opening up a Pandora's box of PR words, and ways to think about code...

**Angelica Hill:** I mean, software is all about naming things... It starts this early.

**Natalie Pistunovich:** Okay. So when you're thinking about a PR, I've heard many people complain about "Oh, this PR is too long", "Oh, this PR is so short. Why didn't you put it in one big PR?" Is there such thing as a too long or a too short PR, too big/too small? Or is it really just down to dealer's choice, whatever that team is happy to review. If you're happy to review a 1,000-line PR, or a 5-line PR. I'd love to hear anyone's view on the length of the PR and how big it should be.

**Sarah Duncan:** Yeah, I definitely think that pull requests - or merge requests, or code reviews - can be too long. Sometimes a pull request is too large, and my benchmark for helping set that norm on my team for what is an appropriate-sized pull request is really around how well the pull request can be reviewed. So if you do have a thousand-line pull request... Another common adage about engineers - we're lazy, and we're probably not gonna review a thousand-line pull request as in-depth as we would a 20-line pull request.

So I think it's about thinking about how you can best set up your reviewers to give you a quality, thorough review. I have some thoughts around how to set that norm, but I'd love to hear from others what you think about a length of a PR, and whether a pull request can be too big or too small.

**Natasha Dykes:** Yeah, I don't think that pull requests can necessarily be too small, because it just takes one character to make a bug... So you're gonna have to make that change... But I do think that -- I agree with you, it could be too long to have a reviewer to actually sit down and understand all the changes, especially if they're not as familiar with the code as you are... So I don't necessarily have the best strategy, but I think just encapsulating certain functionalities helps, instead of just an entire feature... Because it might be broken down into different core parts. So that's typically how I lean on it. I don't know, Jeff, do you have any thoughts?

**Jeff Hernandez:** Yeah, I think it's totally depending on what you're working on at the current moment. So if you're building a new API from the ground up, setting up the handling for the JSON, the payload, maybe that can be a PR. And then the actual business logic can be a separate thing. You're building up as you go. That's something that I've learned from other people on the team... Because I have been guilty of the extremely large PRs, where the ticket is done, but it's all in one PR, and no one wants to review it, so you're gonna maybe get a review by next week if you keep pinging people and bothering them... But otherwise, no one's gonna wanna touch that.

\[00:16:04.12\] And then you don't ever wanna get in a situation where you have to offer to go step by step with the reviewers... Like, "I've made this change because of this reason", on a call. I feel like that's the worst-case scenario, where you have to actually walk them through it. Sometimes it's necessary, but it's something I would avoid. It's kind of like a walk of shame. You have to go through the whole thing with them, but... They can definitely be too big.

**Natalie Pistunovich:** A walk of shame where you can walk through the glory of your coding... \[laughter\]

**Jeff Hernandez:** I guess... \[laughs\]

**Natalie Pistunovich:** I'm just teasing.

**Jeff Hernandez:** It's all how you think about it, right?

**Natalie Pistunovich:** "Look at this beautiful PR that I've constructed over many months, that you now have to review with me... Look at this clever naming convention I did. Look at this great function. Don't you love this goroutine?"

Awesome! So we talked a little bit about -- well, actually you alluded to this, Sarah, like being cognizant of the people who are reviewing your PR. So I'd love to hear a little bit about how many people should review your PR before you merge it; is it one person, is it two people, is it the entire team? What are the thoughts around reviewing the PR and how many people need to know about this great work you've done before it's in the world? Natalie, you're smiling...

**Angelica Hill:** I'm sorry I'm doing this again, I want to bring back to the previous question... \[laughter\]

**Natalie Pistunovich:** Do it.

**Angelica Hill:** So when you say too long or too short, what do we measure? Number of lines? Number of commits? Number of files? It can be -- depending on many things, the answers can vary in the same PR. It can be one PR where you removed one file, but that's like many lines... Is that long, is that short? This is my thought now. But whoever listens doesn't know that Angelica can see me thinking out loud like that, so... I'm guessing there's a question coming up, so you have to trust her psychic abilities as a product manager to kind of look at the engineers in front of her and like "You want to say something. Speak." That's the secret superpower of product managers.

**Natalie Pistunovich:** Yeah, I can see it. Also, I'm learning, now, actually just as a Go Time host, every time I ask a question I should pause and defer to Natalie, and be like "Do you have a follow-up question?" \[laughs\] That is a great question, I'm very glad that you answered-- asked it... That definitely \[unintelligible 00:18:21.25\] asked it... I'm already babbling. Do you have a view on that?

**Angelica Hill:** Yes...

**Natalie Pistunovich:** Wonderful. I'd love to hear it.

**Angelica Hill:** But we're here to hear other people's opinion, so I'm curious to hear the crowd's opinions more than I am interested in sharing. I mean, I'm also happy to share mine, but I'm more curious about others. Is there a convention in your team, for example? Would you say this is too much - what would look at?

**Jeff Hernandez:** Yeah, I'm really curious about hearing more about Sarah's - the team's standard... But at least from me, if I'm reviewing something, the first thing I look at is the number of files that were changed. That's just like the easiest thing to look at. If it's a long list, I am gonna go to lunch maybe, and then come back to it later... It's definitely easier to review something that's a couple files, versus something that's touching multiple directories at a time... Because then I have to go back and forth, referencing things and seeing how it might affect other things... So definitely files would be my number one thing. And then, typically the norm on our team is one commit per PR. So it's not something that gives much information for us.

**Sarah Duncan:** Yeah, I definitely think files are a good initial indicator... And sometimes that can be misleading, because you could have a bunch of files only have one line change, or you moved a folder into a subfolder, and that changed a bunch of files, and you can just check all those off as okay... But I think that it's a good question, because I think it's a hard thing to actually measure well...

\[00:19:57.22\] The analogy I try to use and that I recently used at the New York Times to kind of explain how to break down your PRs - it ties into your question, Angelica, about the number of reviewers... My analogy is that if my ticket is to bake a cake, and let's say it's chocolate cake, we've got some butter cream frosting, a little raspberry layer in there, it's a nice cake - if I go and bake the cake and come back... And Angelica, you're a frosting expert, and Jeff, you're a cake expert, and Natasha, you are the absolute queen of fillings - it's harder, I have to get all of you in a room and cut a slice of cake, and you have to pick it apart and be an expert on your piece, and it takes more work to give feedback... And it takes more work for me to go fix something.

So if I'm trying to perfect the chocolate cake, and Jeff, you're like "This cake is too dry.", You have to go back and make it less dry", that is so much more work for me to reconstruct that cake all over again... But if I break that down and first I make my chocolate sponge, Jeff, you taste that and you give me feedback on it, I make my filling that I'm gonna use, and Natasha, I get your input on that... Angelica, I ask you for your input on the frosting, and kind of perfect those individual pieces, and then I assemble - that final assembled cake is gonna be a lot more successful.

So I like to think about it as like breaking it down so that ideally one person could review it, and maybe one subject matter expert could review that part. Then when we get to the assembly piece, you're judging me on the assembly, you already know that the individual components are -- we're all on the same page about what those components are.

So I think it's a hard thing to measure, because even just that "Oh, one subject matter expert is not a hard and fast rule." This is one of the things I think is something that comes more with experience and intuition. It's a skill that you're able to hone as you gain more experience around what the right size to ask for feedback on is... But that's my analogy, is that if you're baking a cake and you're asking for a review on it, it's easier to get the individual components reviewed first, and then bake your cake... Or assemble your cake. \[laughter\]

**Natalie Pistunovich:** That was so great...

**Sarah Duncan:** The teacher in me... You know, we've gotta bring in the fun things.

**Natalie Pistunovich:** That was wonderful. I feel like I've learned so much, genuinely. I will never think of PRs and constructing of a feature again in the same way. Like, "Can I see the frosting, please?"

**Sarah Duncan:** Please. \[laughs\]

**Natalie Pistunovich:** "Let me check the topping."

**Sarah Duncan:** Yeah. How moist is the cake?

**Natalie Pistunovich:** "How moist is this cake?" I'm gonna have to be very careful whom I say that to, because some people don't really like the word "moist". I don't particularly, but it's fine.

**Sarah Duncan:** Judge your audience, yeah.

**Natalie Pistunovich:** Judge my audience. Good perception. So flipping over kind of to the other side of a PR, how do you go about reviewing a PR? I'm gonna pause. Natalie, would you like to talk about putting in a PR in any more detail before we switch over?

**Angelica Hill:** \[laughs\] No, no, sorry. I'll go back to being German and sticking to the schedule.

**Natalie Pistunovich:** No, no, please, don't. I came across like I was being a little bit sassy...

**Angelica Hill:** No, no, no...

**Natalie Pistunovich:** ...but it was a genuine question.

**Angelica Hill:** I love making German jokes, any day.

**Sarah Duncan:** I should have made it a German chocolate cake. I'm so sorry that I missed that opportunity... \[laughter\]

**Natalie Pistunovich:** Oh, my gosh...

**Angelica Hill:** A Strudel... This is Austrian.

**Natalie Pistunovich:** Natalie will be the final -- like, once the beautiful cake has been constructed, she is the ultimate \[unintelligible 00:23:51.03\]

**Angelica Hill:** Wait, did you use sugar or salt?

**Sarah Duncan:** The ultimate taste testing... \[laughter\]

**Break:** \[00:24:00.12\]

**Natalie Pistunovich:** Great! So you are going to review a PR... What are the almost unspoken rules of PR review? Are there actual rules of PR review? I'd love to hear how do you approach reviewing your colleagues' PRs.

**Natasha Dykes:** I think it goes a long way if you lead with empathy. Go through the PR, address anything that you think could be updated, but not in a way that you're talking down to people... Just having a willingness to learn, a willingness to teach... I think these are all core factors of doing a good PR review. And then you can get into the nitty-gritties of like your team-specific strategy, and patterns and all of that, and the correctness of the code. But I think the first part is really key.

**Sarah Duncan:** Yeah, I totally agree. I think there are a lot of small behaviors that we as engineers can adopt to be more empathetic in our code reviews. I really enjoy some of the resources that other people have already written and shared around this. I particularly like Alex Hill's "The Art of Giving and Receiving Code Reviews Gracefully" (something like that). That idea of giving a code review gracefully I think ties into the empathy thing you were talking about, Natasha... Just like putting yourself in the position of the person who's receiving the feedback. Ultimately, a pull request - this code review is feedback, and is collaboration in our every day as engineers... So some of the simple things, like instead of saying "you", saying "we". Instead of making a statement, asking a question.

For example, instead of saying "Oh, you should use this other function. It already does what you're doing here", asking "Oh, can we use this other function here? Is there something that we can reuse?" And that gives the opportunity -- because you could be wrong. I'm a staff engineer, and I'm wrong all the time... So if I'm just coming into a code review and saying "Oh, you should have done this" and "You should have done that", that not only is not giving feedback in a way that will be easily received, but it's really assuming that I always know the answer, and I always know what's best.

\[00:28:13.01\] I think remembering that the person who's coming in with the pull request has spent so much time, presumably, on this problem, that - yes, the fresh pair of eyes is really helpful, and you might see something that they didn't, but also giving acknowledgment to the work that they've put in on this pull request, and that they might have thought through that problem, and that there might be something that you're missing, because you haven't spent as much time thinking about the solution. So that empathy is really important.

**Jeff Hernandez:** Yeah.

**Sarah Duncan:** Check your ego...

**Jeff Hernandez:** Totally, plus a thousand what they've said so far. It's not a one-sided street, it's two sides. You can take something back from the review, and then they can take something forward... It's always an opportunity to learn something new, especially from people who have way more experience than you do. And this is just an opportunity to ask questions, especially like "Oh, why did you do it this way, versus some other way?" It's definitely a great opportunity to kind of -- you know, just learn more about what they're working on, and learn more about the system. There always has to be an eye for "Oh, is this what we're trying to achieve with this particular ticket" But definitely leading with empathy is something that's great. I also wanna look up that article now, because I've never read that... The Alex Hill one.

**Sarah Duncan:** It's really great.

**Natalie Pistunovich:** I'll make sure I put it in the episode notes. And it is a great article... So when you're thinking about reviewing, are you predominantly reviewing for the functionality, and like "Does this thing work?" or are you also commenting \[unintelligible 00:29:48.13\] rules around commenting on style? Like, how the code is being written, the stylistic choices that have been made.

**Natasha Dykes:** I think a bit of both...

**Sarah Duncan:** Yeah, definitely. And not to over-reference this article, but one of the things I think is one of my key takeaways from this was that there are those kinds, like code style things that can be automated. So having a team norm of "Oh, we're always using this linter for this codebase, we're using this formatter. Pre-commit hook - those have to pass before you can make this pull request." It just automates away a lot of the things that we can be kind of nitpicky over... But sometimes there are more code patterns, and those are harder to automate, but they can be a source of contention, because there can be a lot of very strong opinions around what patterns we're following and how code should be structured.

That's where I think having a set of norms on your team that you regularly revisit when somebody new joins, when you have a new repo you're working in... Those norms will help smooth that conversation, because if you have all already agreed, like "Oh, we're gonna make sure we follow DRY practices", or whatever - those kinds of agreements make it a lot easier to have that code review conversation, because that's like a shared expectation that you have. And it's the same thing for giving interpersonal feedback. If you have a shared expectation and a shared goal, then you can easily use that as a reference point and be like "Hey, since this is something that we've agreed on as a team, I'm noticing this here. Do you think that we could reshape this so that it follows this practice that we have agreed to use for this repo?" That's a much easier conversation to have than "Oh, I don't like how this is styled. I think we should do it this way instead", and kind of like bringing your perspective into it. It's a lot easier to bring a team norm that you've already all agreed on, that's like the team's perspective on this, and the team's perspective on how to move forward.

**Jeff Hernandez:** \[00:31:58.00\] It's really important having that team understanding. At least in my previous company we had shared standards as to how things -- we had pillars in everything, we had a standards committee that we were trying to... For code style, and stuff like that.

But on the other side of the coin, I'm kind of -- sometimes if I see a spelling mistake, I will point that out in the PR, just because it's... Like, if it's already committed and I see it, I wish someone had called it out in the PR. In my PR I will fix it...

So it's just like those little tiny things that kind of add to your personality as a reviewer. You might \[unintelligible 00:32:34.20\] that calls out your grammar mistakes, which I feel like I used to be, and I'm not as much these days... But when I see it, I will sometimes call it out.

**Natasha Dykes:** I think I've gotten that feedback on my review from you, so... \[laughter\] So I can attest.

**Natalie Pistunovich:** I'm intrigued - do you review differently depending on the level of the person that put in the PR? I.e. if you're going in and you're reviewing a staff engineer's PR, versus an associate engineer's PR - do you approach it differently?

The reason I ask is that - maybe this is a leading question... Say you're a staff engineer, and you're reviewing the PR of someone you know is preferably new... Would you approach that slightly differently, in that you might add more comments, and maybe more detail as to why you've suggested it, because you know this person's still learning? Or, agnostic of level, you approach every PR in the same way. To summarize, does it matter who put the PR in?

**Natasha Dykes:** I think it could help. If I know that someone is new to the company or to the team, I usually kind of pepper my review comments with links, or context, or even ask if they want to jump on a call and we can talk through certain things, if they have more follow-up questions, just so it's a little bit more synchronous conversation-wise, instead of all over the place... But I also try to leave good feedback, even if there's a person who's above me and run laps on me with the work that they do... I like to just say "This is great. I learned a lot" or praise some of the work that they've done... Because I think it could be easy to just not get that type of feedback as often, because we're kind of expected to do that kind of work.

**Jeff Hernandez:** Being the least senior person on the team, it's difficult not to feel intimidated by other engineers when they ask for reviews... Because you're like "Oh, I'm early in my career. What do I have to offer to someone else who's been working for 10-15 years?" But I try not to think of that as much anymore; I try to think of it with my current understanding of things, I try to give the best feedback I can to that person... Because it's always nice to have a second pair of eyes, even if they're less experienced. It's always nice to have a fresh pair; they might see something that you've missed... And I take it as a learning opportunity at the same time for myself.

**Natasha Dykes:** Definitely.

**Natalie Pistunovich:** It's a fresh pair of eyes, but also that might be some very, very senior engineer who's been doing the same thing for many, many years, and therefore has gotten into a habit of doing things a certain way... And you, fresh bunny rabbit that you are, coming in with all the new technological lingo, and new open source -- like, you might be way more engaged and be much more on top of the new technologies and ways of doing things, so you might be able to come in and be like "Hey, have you considered this new style that you haven't done in 20 years?" Maybe it will be useful, and you can teach them something.

**Jeff Hernandez:** Exactly. Usually, when I do "Oh, you should try it this way", I usually have links to support what I'm saying, just to be like "See, these other people are doing it this way as well. It's not just me."

**Sarah Duncan:** \[00:35:52.14\] Yeah, and I think the value of a fresh perspective also is in challenging assumptions. I'm a staff engineer, but there are definitely things that, to your point, Angelica, I've gotten used to, or I've gotten into the habit of, and sometimes that does lead me to make assumptions, and I work to check myself. But having teammates being able to ask questions and check assumptions I think leads to really valuable conversation, because maybe that will lead us in a different direction, maybe I can explain more about something that I've done in my work...

But I actually think when I'm approaching reviews and when I'm asking to be reviewed, I think of it more as like the subject matter expertise in a codebase, because I recently switched teams and I'm coming onto my new team and I have a lot of wealth of knowledge in terms of architecture, and some of the things that I'm bringing from my past team... But I'm actually learning some of these languages for the first time. So even though I have a big-picture idea around our architecture, and I'm doing a lot of things as the tech lead for my team... So my teammates actually know these languages, and the language patterns that come with these repos better than I do... So I actively look for them to be critical of the code that I'm putting forth... Because that allows me to learn the same way that if they were putting in a PR in Python, and I'm more experienced in Python, I would wanna teach them some of the things that I have picked up about Python along the way.

So I actually think this is an area where I would hope leveling doesn't matter. It's more about the subject matter expertise in a repo, and helping that person level up their expertise a little bit further. And anybody can help anybody else level up their expertise.

**Angelica Hill:** It's interesting to hear for me all the answers. I guess you're all U.S-based, and you mostly work with American colleagues... Is my assumption correct, or would you say your teams are also -- or you get to work, let's say, with people who are not Americans?

**Sarah Duncan:** Yeah, I've worked with non-native English speakers before. On my current team I'm working with mostly native English -- all the engineers are native English speakers, but one of my teammates even was recently working with some of our engineering teams that are working out of other countries as well. So we have some international work...

**Angelica Hill:** Would you say your experience of feeling comfortable to correct and to be corrected is the same as with people from the same background as you? Or is it different in any way when you review the code, or get reviewed by people, wherever they're based? Like, who just grew up in other places.

**Sarah Duncan:** Yeah, that's a really great question. I definitely think that I have an easier time giving grace to somebody who's giving me a review if English isn't their first language... Because tone is a hard thing to pick up. I've worked with -- whether English is not their first language, or whether somebody has issues with tone for some other reason, like some kind of mental illness - or disability is probably the better term - for thinking through how something is gonna be perceived. I've worked with colleagues who are on the spectrum, and that's not always something that they have an easy time interpreting and figuring out how tone is gonna come across...

So in those situations it's easier for me to give empathy to that person when they're giving me a review... Being like, "Oh, they didn't mean to hurt my feelings. They're just giving me feedback." But sometimes, because we are a big company, sometimes you are getting a review from somebody you don't know, so you don't always know if that's the case...

I think it's easier when you're working with somebody you know. If English isn't their first language, I always have an easier time being like "Oh, they didn't mean it in a way that hurts my feelings." \[laughs\] Sometimes that's harder for me to get to that point; if it's somebody who isn't a native English speaker and it's one of those things I think is easy to make assumptions around, which is why I brought up working with somebody who is neurodivergent, it's just like... That's not always something you can tell right away. It's easier to tell English isn't somebody's first language, but I try to take that empathy that I learned working with those colleagues and bring it to all my other colleagues as well.

**Angelica Hill:** \[00:40:25.05\] It's also interesting to think of -- I mean, yes, English is not the native language, so that's a very good differentiator... And also, different cultures have different relationships with feedback, or even saying to somebody "You did something wrong."

**Sarah Duncan:** Yeah. That was a good point.

**Natalie Pistunovich:** Being the only person who is not in the U.S, I would actually love to hear your perception on this. I know you keep on saying "We need to hear from the guests", and I agree, these wonderful guests... But I would love to hear your experience. I mean, I got culture shock moving to the U.S, but I wasn't reviewing PRs in London.

**Angelica Hill:** And you are a native speaker.

**Natalie Pistunovich:** Yes, and I am a native speaker. So I have those two things which make it slightly easier coming in... But I would love to hear your perception, and kind of what you've heard from colleagues, friends, in your experience.

**Angelica Hill:** Almost all the teams that I worked in are quite mixed, because Europe is a lot easier for work relocations. The Green Card and so on exists in the U.S, but it's quite harder than just the work visa in Germany or other European countries... So I don't remember the last time I worked in a team where everybody comes from the same country, or we had more than 10% native English speakers. Although English is always the main language, because you need to have something that is not the programming language...

And I think in the beginning I used to have some kind of misunderstandings exactly, because what was said, understanding empathy, understanding they did not mean that, they meant this... Coming across myself sometimes as a bit more "Why don't you say that in a nicer way?" and so on.

So definitely, there's all sorts of balance there to strike, and it's very interesting to hear how people cope with that, and it's obviously written \[unintelligible 00:42:08.19\] written communication in comparison to spoken communication. And even in spoken you can easily get lost, and so on, and intonations mean different things...

The thing about the culture is let's say that sometimes it's kind of impolite either to correct, or even to just say no to someone. So I had to learn and actively practice that when I propose some idea, I have to start with something like "Feel free to reject that", or "There might be better alternatives, but..." And sometimes still, depending on the context, it sounds sort of foreign, but I think it's fine that it sounds foreign, because it's kind of like a standard across all the different cultures you'll get to work with, that this is "Be nicer" over being not nice enough.

**Sarah Duncan:** Yeah, definitely.

**Natalie Pistunovich:** My comment is gonna be slightly less serious, but it came to mind and it sounded like something that I would love to do... Can you attach voice notes to PRs?

**Angelica Hill:** You have Looms in Git pull requests...

**Natalie Pistunovich:** Yeah. Because I feel like I would love it if someone made a suggestion and then I could have a little voice note where they could say "This is why..." Because then you'd hear their tone, and you'd hear them explaining it, and then you could do like a verbal readout of your very long PR... That might be cool.

Do emojis help with that? I find it really difficult to communicate through my words without emojis. I use emojis to help me more accurately portray the intention behind my comments. I.e. when I say something like "Oh, I'm not sure about this", I'll do like a thinking emoji, and like a funny, like a tongue emoji to show that it's not like a "What is this?" Because I feel like words are not enough, which is why - and those of you who interact with me regularly, I think it'll be very hard for you to find any space where I haven't put an emoji after my message, or some kind of imagery, whether it be a meme or a GIF, to try and level up my communication from just being words, to having that extra layer of emotion.

Is it appropriate to add many emojis to your PR? I know you can add the emoji reactions, but within it, is that a useful tool that in fact can be used to try and alleviate that risk of being misconstrued via just written word?

**Angelica Hill:** \[00:44:37.23\] You mean the pull request description, or actually each commit?

**Natalie Pistunovich:** I'm open to views on either.

**Sarah Duncan:** Yeah, I recommend using emojis, and setting up norms around emojis in code review norms. It's one of the suggestions that some of the other staff engineers and I put together in the norms template that we shared out internally at the times... And I think the way that we use emojis in that template is around communicating the intention behind a review comment.

One of the things that's really hard to tell based on just the written word in terms of tone is whether that piece of feedback is blocking or not. So is this just a stylistic thing that you think will help me level up my skills? Is this something that I actually need to do before merging in this code? That kind of communication can sometimes be hard, and especially I think within different levels. I know when I was more entry-level I had a hard time just coming out and asking "Do I actually have to do that though?" So we use emojis as a way of kind of categorizing the comment. So if it is blocking, you can communicate that, being like "Oh, this will cause implications in this way", and it's a good prompt for the reviewer to think about why it's blocking, and communicate that. But it's also ways of sharing stylistic feedback in a way that's not blocking, and saying "Oh, I see that you did it this way. Typically, when I approach this problem, I do it this other way." It's just different styles. Sharing my style...

So I think it helps to categorize the intention, to your point, Angelica, around what the comment is supposed to be communicating. It adds a little bit of color, I think, to just the plain text otherwise. But I'm curious if others have different opinions on it. Maybe you find them annoying... \[laughs\]

**Jeff Hernandez:** Follow-up to that... So I'm 100% pro emoji, as people on my team can attest to... I'm always using emojis in Slack, and sometimes in GitHub. But I guess if it's kind of meant to convey blocking versus non-blocking, as per your example - is that like a way to kind of not have to use the actual supported GitHub features? Like, you're requesting changes and kind of blocking the merge, like full-stop? Because I don't know how people perceive that, but maybe it could come off a little harsh actually using that feature, and maybe the emojis is a nicer way to say that... But if it's really blocking, shouldn't we just be using that specific feature to prevent it from actually going through?

**Sarah Duncan:** I think in that scenario you still do request changes, and kind of formally block the pull request... But I know as a reviewer if I get -- like, a change is requested on my PR, and I go in and there are like 20 comments, it's hard for me to maybe initially sift through those comments to figure out which ones are the ones that are causing the PR to be blocked. So it helps streamline the communication in that way, where if I'm blocking Angelica's pull request and I leave a bunch of comments, and some of them are like "Great job! This is really cool!" and some of them are style, and some of them are actually questions, and then actually some of them are actual blocking requests for changes, it helps narrow to those, and create a clearer checklist, in a way, of what you're expecting to be changed before being asked to re-review the code.

So I just think it's helpful, even if you are formally blocking the pull request, to communicate what things you expect to be changed before you think that it could be merged.

**Jeff Hernandez:** Gotcha. I don't know if I was just projecting my own fears saying that... \[laughter\] Like the email where it says "Changes have been requested", and "Oh no, what did I do wrong?" \[unintelligible 00:48:40.04\]

**Sarah Duncan:** Don't worry, we all do stuff wrong in our pull requests all the time. It is part of being an engineer. \[laughs\]

**Break:** \[00:48:49.08\]

**Natalie Pistunovich:** So I just have one more question, because we are running out of time, regrettably... But my question is "Can you teach people how to do a good PR, how to review PRs?" Is there truly an art to reviewing a PR, or is it really just us all bumbling through, learning as we go, trying to do the best we can, and really, you're never the kind of PR pro; you're always gonna have more to learn about how to create a PR better, review a PR better. Are you ever gonna be like "Right, I'm done. I am the PR pro. Amazing"?

**Jeff Hernandez:** I think there is an art to it... You're kind of balancing the empathy of giving this person feedback, and acknowledging how much work they've put into it, but at the same time you have to -- it feels like a critical service; you're going to be the one that might be paged during the middle of the night if something goes wrong, and "Oh, this commit is what's causing the issue."

But also, you kind of have to balance that with the time. You still have to get things done. It's a big balancing act of how much -- like, is this critical that this needs to get changed, even though it's like a stylistic thing that goes against our team norms, but it's imperative that this gets through?" Or maybe they've already spent a lot of time on it, so it's definitely the art of juggling or balancing, so...

**Natasha Dykes:** \[00:54:14.09\] I think just experience goes a long way. Learn by doing. You can kind of experience a lot of things that you wanna emulate, or things that you're like "Wow, that didn't leave me feeling really good about myself, so I know not to do this in the future." But also, just getting more experienced in whatever language that you're working on to then make those suggestions that can make the code better, and more performant. That's like another layer of doing a PR review... But it's still something that comes with more time.

**Sarah Duncan:** Yeah, and I think from the perspective of authoring a PR and asking for a review, that's also something that is like a skill that can be honed and taught and improved at any level... Because figuring out when a PR is done, how big it is, but also in some situations maybe you're introducing a change, and maybe you have to write up why you think that change is the right path to move forward, and there's always room to improve on making a concise argument. I think that's something that we can always improve on, is how to make a concise, clear argument for the change that you're introducing, or how to best walk your reviewer through the pull request just based on your PR ask. There's a lot of skills that can be honed in this whole process, on both sides.

**Natalie Pistunovich:** Well, thank you. Regrettably, we've babbled all our time away, so we are going to move into our Unpopular Opinion time.

**Jingle:** \[00:55:49.00\] to \[00:56:04.02\]

**Natalie Pistunovich:** Right, so get ready, guests, we're gonna jump right on in. Jeff, what is your unpopular opinion?

**Jeff Hernandez:** I don't know how I'm gonna top my last unpopular opinion, but... I don't know, I feel like I'll just spark a -- it's not a big unpopular opinion, but it'll start like a war... Kind of like Playstation vs. Xbox. I'm gonna go with "Dogs are the better pet than cats." I know there's lots of cat people...

**Sarah Duncan:** Whow... \[laughter\]

**Jeff Hernandez:** So it'll be the unpopular opinion in this group, but... I have three dogs, and...

**Natasha Dykes:** Okay... \[unintelligible 00:56:37.27\]

**Sarah Duncan:** \[unintelligible 00:56:38.03\]

**Natasha Dykes:** Just put it in your next PR.

**Jeff Hernandez:** \[laughs\] Exactly. They're fighting words, you know?

**Natalie Pistunovich:** I've got your back, Jeff. I'm team dog.

**Jeff Hernandez:** Team dog, all the way. Yeah.

**Natalie Pistunovich:** Sarah, what is your unpopular opinion?

**Sarah Duncan:** Yeah, I'll be interested to see how unpopular this is or not, but I think aspiring software engineers would be better off taking more writing and philosophy courses, and fewer computer science theory courses.

**Natalie Pistunovich:** Yes...

**Natasha Dykes:** Interesting.

**Natalie Pistunovich:** No, that's intriguing. Why is that? Can we dig one level deeper?

**Sarah Duncan:** Yeah, I think a lot about being a successful software engineer is kind of this ability to be able to make a concise argument, be able to understand other arguments and perspectives, and incorporate it, and use that to kind of revise your opinion and put forth another concise argument. We see this in architecture documents all the time; I was on the architecture review board at the Times for a long time, and I chaired it for a while... I know Natasha has been on the contributor board as well, and we see so many long, long documents that could be half the size they are, and I think a lot of engineers don't use the theory classes that they took in college, or -- assuming that if you are studying computer science in college, I think a lot of those classes are not put to use as a practical software engineer... But the area where I see a lot of software engineers kind of having to improve on the job is in their ability to make a concise argument.

\[00:58:16.07\] My sister is getting her Ph.D. in English, so I'm maybe a little biased, because I see how much work she has put into this skill... And I myself was -- my major was in the philosophy department, even though it was a logic and computer science interdisciplinary degree... So I use the skills that I got from my humanities classes more than a number of the computer science theory classes that I had to take in college.

**Natalie Pistunovich:** Hm. Okay. Jeff... I didn't know you renamed yourself Natasha, Jeff... \[laughter\]

**Jeff Hernandez:** I was gonna say, it sounds like you did a Go Time episode debating the value of a computer science degree vs. a dedicated software engineering... Because they're two different fields, essentially, right?

**Sarah Duncan:** Invite me back for that one...

**Natalie Pistunovich:** Shameless plug - I think we did one that was beating around the bush of that. I'd say a few months - maybe it was years ago - ago. Me and Kris Brandow, who's another Go Time host. We did one around English literature and its value to software engineering... But I think that was a while ago, so absolutely, let's do another one. But again, certainly not least - Natasha, what is your unpopular opinion?

**Natasha Dykes:** My unpopular opinion I think might be accepted in a computer science, like this kind of circle, but who knows...? I feel like the world doesn't need another superhero movie. There's too many of them already. I'm done with it. There's so many other stories we could tell... So yeah, \[unintelligible 00:59:39.06\] At least take a break for a couple of years.

**Natalie Pistunovich:** There are so many more bugs that need to be superheroes. We've gotta have Beetleman, Ladybird Lady, Catterpillar \[unintelligible 00:59:53.20\] There's so many opportunities.

**Natasha Dykes:** They could do something with the gopher... Like Gopherman, or something...

**Natalie Pistunovich:** Gopherwoman.

**Natasha Dykes:** Okay, yes.

**Angelica Hill:** Sarah, I loved what you said. You gave me an idea to see my -- next time I have some free time to hack, I'm gonna use something like GPT-3 to just create a plugin for GitHub that will just run whatever you wanna say through that, to sound more empathetic and more... Something. I don't know.

**Sarah Duncan:** I love that.

**Angelica Hill:** By the time this episode is out, maybe it will be on the marketplace.

**Sarah Duncan:** Incredible.

**Angelica Hill:** This will be really, really, really useful for everyone.

**Sarah Duncan:** Yeah, send it my way.

**Angelica Hill:** \[laughs\]

**Natalie Pistunovich:** Action item for everyone listening... Make it happen. C'mon. Put our heads together, we can make that happen.

Well, it has been an absolute joy talking to you all, genuinely. I can't wait to get you all back; I have so many more episode ideas... I'm sure you do too, Natalie... I hope you have a wonderful rest of your days, but for now, adios, and goodbye.
