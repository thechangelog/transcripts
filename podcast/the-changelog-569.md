**Jerod Santo:** Well, we are here with Drew DeVault from Sourcehut and from Hare, the programming language. Drew, welcome to the show.

**Drew DeVault:** Hey. Thanks so much for having me.

**Jerod Santo:** We are excited to have you. I love ambitious projects. I think anybody who has ambitious projects finds their way on this show relatively easily... And so this one was kind of a no-brainer for us. First of all, I've been reading your blog for many years. I was just scrolling your blog today in preparation, and I saw a lot of purple...

**Drew DeVault:** Oh, cool.

**Jerod Santo:** ...on those titles. It's just like all your posts are on one page... You know, the old visited attribute of HTML was paying off.

**Drew DeVault:** Oh, I'm glad you like it.

**Jerod Santo:** So lots of stuff... We've linked to you out in Changelog News and stuff... So your reputation preceded itself with us. I didn't know what you were up to was Hare until you reached out. This aims to be a 100-year programming language. I mean, that's an ambition right there. So let's start with that why, I guess. Why 100 years? And how will follow.

**Drew DeVault:** Well, the basic idea behind the 100-year language is that - you know, Hare is more conservative. So you have languages like Rust, which is working on experimental and interesting stuff like the borrow checker, and you have Zig doing its comp time thing... I think the distinguishing feature for Hare has less to do with the concrete features and new stuff you get, and more to do with setting stability as a goal. And I don't think a lot of other projects are doing that. So we want it to be something which can be completed, and then depended on, and used to build software which lasts a long time. And I think that's what distinguishes Hare for that purpose alone.

**Jerod Santo:** So that I understand, but why do you have that goal? Why do you want to build software that lasts a long time? Can't we just continually reinvent for the modern era?

**Drew DeVault:** You know, I think there's a lot of value in continuous innovation of that sort, but I also think that there's a lot of value in for some projects choosing longevity as a goal instead. If you're running Linux, for example, you're gonna have a hard time getting a binary compiled four years ago to run on your PC today, because there's this kind of continuous change going on. And a lot of the times change is good, but a lot of the time we don't really need it. You also have a bunch of stuff which hasn't really changed in a long time. Stuff like your core utilities, your shell; a lot of things like that are still good without that continuous integration. And I think Hare is kind of targeting more of that stuff, than the stuff which is really innovating and pushing the boundaries of the ecosystem.

**Jerod Santo:** What made you kick into it in the first place? What made you decide to start a programming language?

**Drew DeVault:** I started Hare for the same reason I start all of my projects, which is that I wanted it to exist and it did not exist.

**Adam Stacoviak:** Okay... But why? \[laughter\]

**Jerod Santo:** Why did you want it to exist?

**Adam Stacoviak:** What's the why behind that?

**Drew DeVault:** \[08:01\] Okay, yeah, you're right. So basically, I have all kinds of ideas of stuff I want to work on, because I find it fun or interesting or useful to me... And there was a lot of stuff I wanted to build, that I felt that the tools I had available to me at the time were not really ideal for that purpose. And so I'm yak-shaving. I had to invent the programming language to make these projects that I want to write with it better.

**Jerod Santo:** Oh, okay. Going all the way back to the language itself.

**Adam Stacoviak:** Wow. Yeah.

**Jerod Santo:** So this is like echoes of Serenity OS, to a certain degree...

**Drew DeVault:** Well, I'm also using Hare to write an operating system, for what it's worth.

**Jerod Santo:** I had a feeling you might say that. \[laughs\] Okay, so bare metal... I mean, you just invent it from the ground up. To create a peanut butter and jelly sandwich from scratch, you must first invent the universe... And Hare is part of that universe for you.

**Drew DeVault:** Yeah. Hare is made out of hydrogen and time.

**Jerod Santo:** Love it.

**Adam Stacoviak:** Stardust.

**Drew DeVault:** Yes!

**Jerod Santo:** There you go. So how do you put actual peanut butter and jelly sandwiches on your plate? ...assuming that you eat peanut butter and jelly; insert your favorite.

**Drew DeVault:** You know, I don't really eat peanut butter and jelly as like a habit, but I'm not opposed to it. And if I were asked to make a peanut butter and jelly sandwich, I would go to the store and buy the ingredients and make a peanut butter and jelly sandwich. I would not start a farm.

**Adam Stacoviak:** Okay. That's good to know.

**Jerod Santo:** We're on the same page there.

**Drew DeVault:** Are you asking me to make you a peanut butter and jelly sandwich?

**Jerod Santo:** \[laughs\] That'd be a roundabout way of asking, wouldn't it be?

**Drew DeVault:** It would be, yeah.

**Jerod Santo:** "This guy is very passive-aggressive. He wants me to make him a sandwich, but he won't even pseudo make me a sandwich." No, I'm just wondering - you know, you have these huge ambitious projects that you start like ground-up, and you want them to exist, and you're creating them... And I'm always wondering, "Well, then how do you eat, and how do you sleep, and how do you do the other things that humans have to do to remain alive in the meantime?" Is Sourcehut your business? Is that how you're making money and this is on the side? Does this play into the business somehow, or how does it all work?

**Drew DeVault:** Well, it's kind of vague, I suppose... But Sourcehut is a business. It's a profitable business. We publish our financial statements every year. But it is a business which employs myself and two other employees, for the purpose of building exclusively free software. And it has this revenue model where it has a platform, and people can pay for accounts, and they use our software on our infrastructure, so that we have the infrastructure expertise and we have the capital investment for buying a bunch of servers and so on... And then they just paid two bucks a month; it's a pretty good deal. And the software is still free. But that's kind of like a tool that I designed along with the help of my colleagues to enable us to build the free software we wanted to build, to build the free software we thought was important, without necessarily thinking about how to pay for it. So this stable revenue - we work on the platform, we expand the platform, we build the platform, but it's one of many projects we have, and we work on the stuff we think matters without necessarily finding a financial incentive. And because we did it in this framework, we can eat.

Sometimes those projects end up providing some kind of financial or revenue stream, and sometimes they don't. But we're not really thinking about that. Like, we built some IRC tools, for example, for Internet Relay Chat, because we thought it was important and it needed work in that ecosystem, and then it turned into something that we started to be able to sell. And sometimes that happens, sometimes it doesn't happen, but at the end of the day we're making money doing free software, and that's really where we want to do.

**Adam Stacoviak:** Can you expand on who the "we" is, and what you're optimizing for as a team?

**Drew DeVault:** Yeah, so it's myself, my colleagues Simon Ser and Hoffmann, and... It's just three of us. We occasionally have contractors that come on board to help out with this or that, but we're the full-time employees. And our goal, again, is - it's very kind of self-directed at the discretion of our engineers. So we work together on what we think is important together, and we work independently on what we think is important independently. And we also engage with the larger community. So we're full-time maintainers of our own projects, and we contribute to a wide variety of projects in the ecosystem.

\[12:03\] So our motivations and our structure is essentially the same as any other free software contributor. We work on what's important to us, or what we care about, or what we depend on, but we've built a structure wherein we can engage in that kind of work and make money from it.

**Adam Stacoviak:** Are you all close geographically?

**Drew DeVault:** No. We're all in Europe, but where we're distributed. We don't have an office or anything.

**Adam Stacoviak:** Gotcha. So like any internet thing, or open source or FOSS project, you've got collaboration on the internet, basically. How did you get to alignment with views on software? Did it just naturally come about, or did you all sit down and say "Hey, this is how I feel. Do you feel this way? Wow, we should do this together." Was it just like that, or was it different?

**Drew DeVault:** Well, I started the project and then I reached out to them through my existing network of free software projects that I was already working on in my spare time. I was like "Hey, I think you'd be great for this. Do you want to work together with me on it?" And so it was kind of self-selected by reaching into the FOSS communities network for people who believed in the mission of free software.

**Adam Stacoviak:** What makes you believe so deeply? I mean, this is to some degree maybe obvious, but what makes you believe so deeply in open source software? And in the pre-call you asked if we can Creative Commons this podcast, and we kind of said no in one way, but yes in another, because we're all about free and open source software, and sharing and remixing and collaborating... But what makes you really feel deeply about that? What happened in your life to make you feel like "Wow, this is the way it should be, and I want to make sure that my life's work is involved in that"?

**Drew DeVault:** You know, I love writing software, so I was always going to do that. And doing it in the context of free software for me, from a practical point of view, it's the best way to write software, because it's efficient, and it works, and you get high-quality software, and you can tap into a whole bunch of other people who are interested, and you can collaborate on stuff in a way that's not feasible, especially on a small scale, for non-free software.

And from a philosophical or like inspirational point of view, as to like "Why do it?" in my soul, I believe it's right, I believe in the virtues of free software, but also, there's this moment sometimes which really connects with me and reminds me why I care about free software, where I could be working on a website in the morning and I could find a bug that I needed to work on. And by the evening, I'm knee-deep in the Firefox codebase because it was a Firefox bug. And then I ended up in HarfBuzz, because it has to do with text rendering. And then I end up in GCC, because it turns out there's also a compiler bug. And I like having this autonomy and agency over all of my software, whereas I can take responsibility for the operation of my system, because if I have a problem or if I want a change, I can go to anything that I use in terms of software, read the code and make the change that I need, and then I can contribute it so everybody benefits from that. And that's a kind of autonomy and a level of the right to take responsibility for computing that I think is really important to me, and completely impossible if I use proprietary software.

**Jerod Santo:** So was Sourcehut a response to GitHub being a proprietary piece of software that hosts many free and open source software projects, but not itself free and open source? Was Sourcehut a response to that, or was it just like you had a better way of doing it? What was the impetus behind Sourcehut?

**Drew DeVault:** You know, it's something of a mix of all of those factors. So even when I started Sourcehut there were existing free software solutions which were seeking to be competitive with GitHub. So like GitLab, for example, already existed, and Gitea, and a number of other platforms as well. Something that kind of like GitLab, and Gitea, and a couple of others have in common is that they're really forward about trying to compete with the GitHub market on GitHub's terms.

\[16:07\] And it's a little bit disingenuous to say this; I know that these platforms have their own appeal, and their own design sensibilities... But to some extent, they're all clones of GitHub. And so Sourcehut is not a clone of GitHub; it is what we believe is a better way to write software. It's inspired by the way Git was designed to work by Linus Torvalds, the way that it's used for Linux kernel development, and we have a philosophy of working on free software with a workflow that we have built into Sourcehut, which is distinctly very different from the GitHub workflow.

And so it's its own thing, and we think it's important that it's its own thing, but it's also to some extent a response to the fact that the majority of open source software is using a closed source platform, and we do believe that's very important for free software projects to depend on free software infrastructure.

**Jerod Santo:** So what does it feel like then from a person who's used to using a GitHub or GitLab style collaboration around, pull or merge requests, and that whole deal - what does Sourcehut feel like to use as just a day to day programmer?

**Drew DeVault:** Sourcehut is much more distributed and decentralized. The promise of Git is decentralized version control, and Sourcehut kind of embraces that. You know the old cathedral and the bazaar metaphor; Eric Raymond is a character, we don't need to open that can of worms... But the metaphor, I think, is very good. I think that GitHub is kind of built around the cathedral analogy, where you have the repository with the pull requests and the issues, and you go there to GitHub to interact with it. But Sourcehut is much closer to the bazaar, because we use email for sending patches, so you don't go to the website and click Send Pull Request; you send an email with the code, and Git comes with built-in tools, because it was designed for this workflow, to facilitate collaboration over email.

And so personally - I mean, I am the founder of Sourcehut, and I designed it from the ground up, and I actually rarely look at it, because it's designed to integrate with all kinds of other tools. So the main way that I work on Sourcehut, or with projects that use Sourcehut, is through my mail client, through IRC, things like this, because it's designed to interoperate and decentralize.

**Jerod Santo:** Do you like using mail for source code collaboration?

**Drew DeVault:** I love it. It's so much more productive, to the point where I wrote my own email client to make it even more productive.

**Adam Stacoviak:** Gosh! Of course you did. \[laughs\]

**Drew DeVault:** Of course.

**Jerod Santo:** I love it. I love it. Okay.

**Adam Stacoviak:** That's so awesome. What makes you love mail -- what are the attributes that you love about the process?

**Drew DeVault:** You know, there's a lot of stuff to love about it, but I think the most compelling reason is just that it's a much, much, much more efficient workflow. I sometimes give an example of like assume you don't have a GitHub account, and you want to contribute some code. You need to have an email account first and foremost. So that's a prerequisite that we share. But then you need to go to github.com, and you to register for an account, you need to confirm the account, and you're gonna switch from your web browser, to your mail client, to your web browser, and then you're going to make a fork of the repository, you're going to click some buttons on your web browser, and then you're going to come back to your code and you're going to use your editor, or your terminal or whatever... And then you go back to the web UI, and you click Open Pull Request. And it's the same for reviewing pull requests. Whereas if you use an email-based configuration, you set it up once and then it's one command: gitsend-email to send a patch. So you just write the code, you commit the code, you write one command, and you're done with your contribution.

And from the maintainer's side, it's even faster, because I get so many emails -- I have right now in my mail client here something on the order of 500 emails, which mostly are patches that I need to review... And I could not cope with that level of workload if I didn't use this workflow. I can get through those 500 patches in like two days with the mail workflow.

**Jerod Santo:** Huh. So I'm an inbox zero guy. I couldn't handle it.

**Drew DeVault:** Oh, I'm an inbox zero guy, too. I just have 500 emails in my inbox. Those are all actionable in the near future.

**Jerod Santo:** \[20:08\] Okay. So you're an inbox zero guy who's drowning at the moment...

**Drew DeVault:** No, no, I'm not drowning. It's manageable because I use this workflow.

**Jerod Santo:** So you're more of an inbox 500 kind of guy, then.

**Drew DeVault:** Yeah, I guess...

**Jerod Santo:** If it works for you...

**Adam Stacoviak:** He can't help his volume, Jerod. \[laughter\]

**Drew DeVault:** I mean, imagine if you contributed to hundreds of open source projects, and you maintained large projects like the Hare programming language, and Sourcehut, and all of the work on that was through emails. You would get a lot of emails. But the workflow makes it very efficient to work with those emails.

**Jerod Santo:** Absolutely. You know what I like about you so far, Drew, is you make everything sound so easy. It's like, "Well, we work on what we want to. Sometimes it makes money, sometimes it doesn't... And I just use email. I don't use anything else, and it's super-efficient", and life is good over there. I mean, it sounds very nice.

**Drew DeVault:** I mean, it's not easy, and I don't want to make it out to be too easy... But there's also a big element of luck. There's the hard work to figure out how this way of writing software is possible, but there's also - not everybody has the opportunities to do that... And there's a lot of luck involved. So it sounds easy, and honestly I'm living the life, but I understand that this seems like something that's a little bit unachievable for some people, and I respect that.

**Jerod Santo:** Yeah, a lot goes into it. There's luck, there's talent, there's hard work... There's all sorts of things that get people to where they are. But you're here now, you're working on a lot of stuff, it sounds like... But Hare is what we're here to talk about... Because again, it seems like the most ambitious of your projects. You're trying to create a programming language that outlasts yourself by probably quite a ways.

**Drew DeVault:** Well, it's a 100-year language, so I'm only 30... I don't know how much we could say it's gonna outlive me by a long time... Hopefully by a short time.

**Jerod Santo:** Well, let's not split hairs on that one. Pun not intended, but always appreciated when I stumble across one. If you're going to create a programming language to last that long, it has certain attributes that you're going to prioritize. Can you enumerate those for us? First of all, has there been one? I mean, C is pretty old...

**Drew DeVault:** Yeah, C is 50 years old. It wasn't designed to be, but it had a lot of traits which made it possible for it to have that staying power. Yeah.

**Jerod Santo:** Okay. And it'll probably make it to 100, don't you think?

**Drew DeVault:** I bet it will, yeah.

**Jerod Santo:** Yeah. So what are some attributes of C then that are good, or that will be shared by Hare?

**Drew DeVault:** You know, there's a lot of things that Hare does differently, because C was never designed to have this staying power, and with Hare it's a choice that we've made to try for that... Which is an ambitious choice, and it might not work, but we're trying it. But some of the things I think about C that gives it the staying power is it's incredibly flexible; many people would argue is too flexible, and I would agree with them. But it can be applied to a huge variety of problems. And it's exceptionally portable. And it's standardized. And I think all of these things work together where - you know, we had the accident of Unix, which kind of made C indispensable, but also it had these other traits that I think helped to make sure that it would become popularized and useful for a wide variety of applications that are very important. There's few programming languages you can write a kernel in. You're not going to write your kernel in Python. So we need a language that does something like C in order to build everything else on top of. And the things that C does tend to need to be reliable and last for a long time, and so C tended to end up being the language which best fit into what those low-level components needed.

**Jerod Santo:** Okay. So what are some design attributes of Hare? Maybe give the baseline, like what it is as a programming language, and then we'll talk about specifically the 100-year aspect of it, which I'm sure is a huge part of it. But what does Hare look like or feel like as a programming language first?

**Drew DeVault:** Yeah, so Hare is a systems programming language, and it compiles down to machine code, and you can use it for a whole lot of low-level use cases for that reason. I'm writing this kernel with it, and we're doing a bunch of other stuff along those lines of that.

\[24:02\] It has a syntax which comes from the C lineage, it has braces, and it has those fixed expressions, these kinds of things you would expect from a C derivative syntax like JavaScript, Java; these are similar syntaxes. And it gives you the tools you need to do a lot of the same stuff C does. So it can feel like you have the power of C, but it also has 50 years of hindsight that C didn't, and so it has a lot of features which kind of address paper cuts in the space that C is occupying right now. We have better error handling through tagged unions; that feels very comfortable to use, so you can write more robust code more easily. We have things like slices, which is a sorely missing feature from C. We have better string support, and we have a handful of safety features - nowhere near what Rust does, for example, but things that were sorely missed for C programmers... And we let you take the training wheels off as well. So if you need to do something in a kernel context, writing a driver with unsafe memory patterns, it's easy to do that in Hare.

And then we also have a standard library for Hare, which is, in my opinion, significantly better than C. I think one of the \[unintelligible 00:25:13.01\] parts of C is the standard library, and with 50 years of hindsight and a bunch of other languages for inspiration, we were able to come up with something a lot better.

**Jerod Santo:** So you mentioned Rust... There's been large pushes in the programming language community, especially amongst web people, to rewrite core infrastructure in memory-safe languages. A lot of that work is being done in Rust. We were just speaking with Ben Cohen a couple of weeks back from the Apple team; he thinks that Swift is a decent choice for that. Zig now is making waves. I mostly hear about it because of the Bun JavaScript runtime written in Zig. I hadn't previously even heard about Zig, but it seems like it's very much playing in the same pond.

**Drew DeVault:** Yeah. Actually, I collaborate sometimes with Andrew Kelly on like programming language design decisions and so on. We have similar goals.

**Jerod Santo:** Okay, interesting. He's actually on my -- I have an open tab of AndrewKelly.me right now. He's on my list of people that we'd love to talk to at some point in the show. Did you know about Zig when you started Hare? Is it spiritually aligned enough that you could join forces? Are there design decisions you've already made that kind of make them two separate? ideals, or what's the situation there?

**Drew DeVault:** I mean, we do have different ideals. Zig predates Hare, and I actually investigated Zig and was fairly optimistic about it as like "Maybe this is the answer to the problems I'm trying to solve." And I didn't think it was. I think Zig's a really cool language, with a lot of cool ideas, and it was one of the closest things I've found to what I needed, but it wasn't quite there. And Hare is different in many ways, especially in terms of design and philosophy, but the languages are capable of similar things.

**Break:** \[26:53\]

**Jerod Santo:** So let's get back to the 100-year aspect of it then. So you put out on this post - which we'll link to - "Hare aims to become a 100-year programming language", five points which are important for this purpose. I thought maybe we could breeze through these and camp out on areas that we find interesting. The first one is that conservatism is in the language design. The second one is the importance of the standard. Three is the necessity of a feature freeze. Four, defining long-term API stability goals, and five, fostering a culture that values stability. That one might be the hardest, as we software developers tend to value anything but stability, right?

**Drew DeVault:** Oh, yeah.

**Jerod Santo:** We trade that in at every turn. Is number one on purpose? Are these more important as you start, and work their way down? Or you just had to put them in an order and just picked?

**Drew DeVault:** Yeah, I guess I use a numbered list on the blog post, and it might have been better as bullet points.

**Jerod Santo:** Okay. So they're not ordinal.

**Drew DeVault:** Yeah, they're not ordinal. They're of different importance, but they're all very important.

**Jerod Santo:** So what does it mean to have conservatism in language design?

**Drew DeVault:** So I alluded to some of these ideas about where Hare finds conservatism and why Hare values conservatism in terms of language design. So when I say "conservatism in terms of language design", I'm talking about careful choices of how to do the language design that err on the side of caution, and on the side of more proven solutions, and less on the side of experimental stuff and trying new things.

So Zig, for example, one of it big value-adds or selling points is the comp time feature, which is very unique to Zig. And I think that's really cool, and I hope they do really cool things with it... But something that differs from Zig in terms of Hare's design philosophy is we're not trying to add a big feature which is experimental and unique to Hare, because instead, we think that in order to achieve goals like this 100-year stability, what we want to do is distill the state of the art and understood systems programming design techniques which have already been proven in the field of battle, and take sensibilities about good systems programming language design as they are today, and put those into a programming language, and then stop.

**Jerod Santo:** So stop as in it's done.

**Drew DeVault:** Yes.

**Jerod Santo:** All continued efforts will be elsewhere, like in the standard library, or even beyond the standard library, but like the language itself is feature-complete. Is that what you mean by done?

**Drew DeVault:** Yeah. And there was this point you mentioned about the feature freeze; this is a goal that we have which ties into that, which is that when we finish designing the language, when we finish writing the specification, and we finalize the compiler, or the grammar and the syntax and the semantics, we're going to say "It's done" and call that 1.0, and there will never be a 2.0. We're going to commit to not making breaking changes or adding new features even to the core language, ever, once we're done with it.

**Adam Stacoviak:** \[34:08\] How in the world do you do that? Wow. It's like JSON all over again.

**Jerod Santo:** You say no to everything else. \[laughter\]

**Drew DeVault:** We have this process that we're going to use to try to make sure that when we say it's done, that it's good, which is ambitious, I know. It's hard ever to say something's good for sure, but we're going to create this process of acceptance testing, where we're going to split up into teams and we're going to outline a list of things that we need to validate in terms of design, and we're going to go over the whole language with a fine tooth comb, and compare notes. And we expect this process to take a few years worth of validating the design. We're going to say "We think it's done", and then we're going to check our work, and then we're going to say "It's done" a few years later. And at that point, Hare becomes a time capsule. And it's okay for other programming languages to keep innovating and trying new things, and I'm really excited about the new things that they're going to do... And I know that Hare will eventually become obsolete, but I think that because we're going to make this decision, Hare will not become the best way to write code, but it will keep working. And I don't think a lot of other languages will.

**Jerod Santo:** Okay. So define "keep working". Let's say it's 80 years from now, and I just have Hare 1.0 still, I guess. That's how it keeps working. And if I have some source code that was written to run on Hare 1, which is the only Hare there is, then I'm gonna compile and I'm going to execute.

**Drew DeVault:** Well, we are going to keep working on it, we're just not going to make breaking changes. So there'll be a 1.0, and a 1.1, and a 1.2... But the pitch that I give people is on the day Hare 1.0 is rereleased, you can write a program in Hare, and in 100 years that same program will still compile on a modern system, assuming that people care enough about it for 100 years to keep porting it to new systems. But we go even further; we say "If on the day that Hare 1.0 is released you grab a copy of the specification and you implement your own compiler, that compiler in 100 years time will compile contemporary programs."

**Jerod Santo:** Okay, interesting. So that brings us to the importance of the standard, right? Because Hare is going to be more than just the implementation that you're creating. It has to necessarily be the standard, because there needs to be new implementations over time, like the quantum version, or whatever... As we have quantum leaps, so to speak, in technology, there has to be new implementations that will then implement the standard that you are designing today, right?

**Drew DeVault:** Exactly. And if we want people to port it to new platforms, and to proliferate in a similar way that C does, and to keep it maintained and working as technology evolves, you need a specification which defines what is the language, and how does it work. It also keeps us honest. It means that we're saying "This is how the language works." And we fix our compiler if it disagrees with the spec. We don't fix the spec.

**Jerod Santo:** Okay. It strikes me that you named it backwards. Shouldn't this be the tortoise? I mean isn't Hare a misnomer then?

**Drew DeVault:** This has not been lost on me.

**Jerod Santo:** \[laughs\] Okay. So you had the idea of longevity later.

**Drew DeVault:** I think a hare is cuter than a tortoise, and I think the file extension is better.

**Jerod Santo:** I'll give you that one. Like, who wants a .tortoise file extension? Nobody.

**Adam Stacoviak:** Tort could be good, though.

**Drew DeVault:** That would be cool.

**Jerod Santo:** Tort? That would be kind of cool.

**Drew DeVault:** It is .ha at the moment, and I'm happy with that.

**Jerod Santo:** Okay.

**Drew DeVault:** Actually, the origin of the name of the language is not a metaphor at all. I told my buddy, Louis Taylor, I said "Hey, Louis, I want to make a programming language, and I want you to draw me a cute mascot, any animal that you want." And he drew a cute rabbit, and I said "Okay, it's called Hare." Oh, the mascot is named Harriet, by the way. That's a fun fact about Hare.

**Jerod Santo:** It is a cute little mascot, I'll give you that. See, here Drew goes -- he continues to make it sound so easy. He's like "Just draw it. I'll just call it Hare. No problemo." Some of us sweat over names for years, you know?

**Drew DeVault:** Oh, \[unintelligible 00:37:55.03\] I had to unlearn that habit.

**Drew DeVault:** Yeah, that's probably a virtue, is the ability just to not care so much, and just name it Hare. Well, I thought it was because it was fast, or something... I was trying to figure out why. Then I saw your 100-year thing, and I'm like "Well, he's not going for the tortoise versus hare metaphor", because that would be backwards.

**Drew DeVault:** \[38:15\] No. It's named Hare because of the cute mascot. The mascot came first and the language came later.

**Jerod Santo:** Yeah, mascot-driven naming. There you go. Which one came first, the hare or the name...? Okay, so we have the importance of the standard. Conservatism - I just feel like that's going to be so hard. Because a) like you said, it's really hard to call something finished and good... Right? And sometimes you can just quit.

**Drew DeVault:** So there's another point about like stability guarantees in the standard library, which is important, because we're not actually going to call it finished, we're going to call it stable. So the language syntax and semantics are not going to change, but we're going to add features to the standard library perhaps, and we're going to improve the compiler optimizations... We're gonna keep working on it and improving it, but we're going to maintain perpetual backwards and forwards compatibility.

**Jerod Santo:** Yeah. Jose Valim did something similar with Elixir. He at one point said Elixir is feature-complete, and the language won't change from here. And he's continued to work on it, and the team has continued to work on it... There's so much you can do in tooling, and in the libraries... In tons of places. So it's not like they're done working on it, it's just like the language itself is finished... Which I think gives a sigh of relief at a certain point when you're riding that wave of newness, is to be like "Okay, it's over now." Where do you think Hare is in that progress? Like, if you had a give it a percentage done... I know not done, but percentage designed. Feel free to use a range. Would it be like halfway there? What percentage is it to being 1.0?

**Drew DeVault:** You know, it's hard to say... We maintain the tradition of it's done when it's done, of course. But we have some focus areas which are going to matter to the ability for us to stabilize the grammar and the semantics... Which comes in the form of a few research areas that we're thinking about looking into. We're thinking about researching linear types, for example, which is going to change -- if we end up doing that, it will change some of the syntax and add new language features. We're also doing miscellaneous small stuff. There's some proposals on the RFC mailing list right now for things like adding optional parameters for functions... And so we kind of have this mix of a couple of things we've identified that we need to figure out if we're going to do it and how we're going to do it before we can call it stable, like linear types. And then we have a small collection of like refinements. And I would say the refinements are going to keep on rolling for a little while longer, and we're going to do that research on those couple of things... And then we're probably pretty close.

And as it stands today, Hare is a useful programming language that people are already using for things, with the understanding that we haven't made the stability guarantee yet, but it's still being used, and it's useful, and people are writing cool stuff with it. And so it's not necessarily a blocker for us to finish all of these things for people to use it and for it to become interesting. So we're not really in a rush. It's already useful, and we're going to take your time. Because if we rush it, then we're going to freeze a bad language, you know?

**Jerod Santo:** Right. Yeah, you don't want to have regrets, especially once you've \[unintelligible 00:41:15.20\] that moment in time, that freeze moment. There's no going back.

**Drew DeVault:** That's right.

**Jerod Santo:** So you might as well take your time.

**Adam Stacoviak:** What's wrong with the LTS'es like Linux does, or Ubuntu does, versus just like literally freezing it? Because you said regrets, Jerod, and that's the whole point of versioning, right? It's like, no regrets, because you can version.

**Drew DeVault:** Well, Linux is frozen in a sense, which is that the cardinal rule of Linux is "We never break user space." And so Linux is infamously unstable in terms of like if you compiled a binary five years ago, you can't run it today. But that's entirely because the userspace is unstable. And glibc does symbol breakage all the time.

\[41:56\] If you were to statically link something where it just relies on the Linux syscall ABI, or on the SYSFS or PROCFS layouts, that kind of thing; if it's just talking to the kernel, something that you wrote 20 years ago for Linux in this manner would still run today, because Linux has made that guarantee.

**Adam Stacoviak:** So what's wrong with LTS'es then? Like LTS-ing a version, like a long-term support kind of thing, where you can stabilize to a degree over a period of time, provide support to it? Does that not provide enough encapsulation or enough -- what was the word you used before, like freezing it? Or what did you say before?

**Drew DeVault:** Stability...? Not sure.

**Adam Stacoviak:** You said something about it. Maybe it was freeze. I don't know. Disregard. But...

**Drew DeVault:** Yeah. I mean, there's a difference between the way that LTS as it's applied to Linux is compelling, and the way that it's less compelling when applied to Hare. So first of all, Linux is a piece of software for like end users. It's run on your computer on billions of devices around the world. Hare is a tool which is used to build programs, and so it has different needs and design constraints.

And also, Hare is significantly simpler than Linux, and it has a fixed scope. Whereas Linux has an open scope. So Linux is always going to have to add new drivers and new abstractions to support those new drivers. Linux can never be done and still meet its goals. Whereas Hare can meet its goals and be done.

**Adam Stacoviak:** Well, I cannot argue with you, because I have zero of your talent, so I will not anymore. \[laughter\]

**Drew DeVault:** Well, I mean, different strokes for different folks. I couldn't sit down to interview you, I think...

**Jerod Santo:** Well, also different kinds of programming languages for different uses...

**Drew DeVault:** You also have a far better sense of style than I have.

**Adam Stacoviak:** Well, thank you. I try to have good style, but...

**Jerod Santo:** Adam, you do make it look easy, I'll give you that much.

**Adam Stacoviak:** Thank you very much. Thank you very much, Jerod. I think just the concept of LTS seems to logically make sense when applied, but I'll take your word for it.

**Drew DeVault:** I mean, different people make different decisions. A programming language like Rust might benefit from an LTS release. But for what Hare is trying to do, it doesn't make as much sense.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Plus a diversity of programming languages is awesome... And if you have Hare 1.0 that's continuing to grow, and it's one, or one point whatever phase, 15, 20, 50 years from now, somebody comes along and hits that fork button or whatever the Sourcehut equivalent is, and says "Here comes--"

**Adam Stacoviak:** It's Reply, Jerod. It's Reply.

**Jerod Santo:** "Here comes Tortoise." And they hit Reply All.

**Adam Stacoviak:** \[laughs\] That's right.

**Jerod Santo:** And they said "Here comes the Tortoise. I'm gonna fix all the things Drew messed up, and we're going to modernize this sucker." And that's just fine, too.

**Drew DeVault:** I invite that.

**Jerod Santo:** Yeah, I'm sure you do.

**Drew DeVault:** Yeah.

**Break**: \[44:38\]

**Jerod Santo:** Here's the one that I can't get over quite, because you know, I am a working programmer, believe it or not... "Fostering a culture that values stability." So I do have some years behind me, so I value stability, but I also have that childlike wonder of the new and shiny, that I just can't get rid of no matter how many of my hairs turn gray... Are you going to find enough people to care about that, that Hare becomes actually -- because really, what will probably make Hare last 100 years is that people are still finding it useful N years from now. So the user base, which - is it going to appeal to folks when Rust is adding new things, maybe Zig's adding new things, and maybe some brand new feature comes out 10 years from now that you've just got to have, but Hare doesn't have it because it's feature-frozen? How are you gonna get that community base going?

**Drew DeVault:** Well, that's a really good question. And this is the hardest part in all of these goals, is fostering a culture of stability. I don't think in terms of scale; we don't have ambitions to be especially popular. We just want to be good, and if people like it, they'll use it. But it is an important question, because yeah, if nobody's using it to write cool software, then there's no point for it to be stable for that long. And I think we attract people because Hare is really fun to write, and you can do a lot of stuff with it... And it's super-fast, you can bootstrap the entire tool chain from scratch, including the backend, which is not LLVM, in three and a half minutes, including running all of the tests. The compiler is super-fast, it's a very pleasant workflow to use... And we have great documentation tools that feel really good to use... And a lot of people feel like they get their Hare code right on the first try. Especially, they get their APIs right, which is really the most important part of designing software, is to get your interfaces right. And people feel like they just know how to express their interface goal in Hare in the one true way of writing Hare.

And so there's all of these things about writing Hare as an experience that feels really good. And a lot of those things that feel really good, like making it easy to design a good interface, also lend themselves to supporting the stability goals. Because if you make a bad interface, you have to make a breaking change to do another one. And so we want Hare to just be a good language, which is enjoyable to use, and applicable to a lot of projects in the systems programming space. And we think if we build that, people will come. But we don't actually set it as an explicit goal. We make it good because we want it to be good for us, not necessarily because we want to take over the world.

\[52:27\] But that's kind of secondary to the whole culture of stability thing, which - you know, you're right, people love shiny, new things, and that's an instinct which we're trying to kind of push back against... And that's probably one of the hardest goals for stability that we're trying to take on. But I think it's working. And I don't know if it's going to scale, but what we're doing right now seems to be working. And the way we're doing it is Hare is a community which is growing a little bit more every day; it's kind of small, but it's also a little bit closer-knit, and we focus on making a place where people feel comfortable participating. And we have kind of a close community where we can not just collaborate, but also share values. And so if somebody comes into the project, and we make it easy for them to participate in our discourse, they're exposed to our ways of thinking, and understand how we value stability and why we value stability, and how they can apply those values to productive purpose.

And we also have design decisions which also kind of nudge you into that. We have, for example, no package manager. We don't want to have an npm situation where you have 1,000 dependencies \[unintelligible 00:53:41.17\] And so we have both a small number of technical things, but mostly we just have this discourse where the way we talk about Hare, and the way we talk about values within the project causes people to, as they acclimate to the culture of the Hare community and start learning Hare and seeking help from experts on Hare, they kind of start to get it. And this is a big experiment, and it's a social experiment, so who knows, but we're trying to make the culture value that. And it's something we're deliberately trying to do, but it's also, by far, the hardest goal.

**Jerod Santo:** Where does that community exist?

**Drew DeVault:** Mailing lists and IRC, for the most part?

**Jerod Santo:** And how's it going so far? I mean, do you feel good about it?

**Drew DeVault:** Yeah. It's been a couple of years now that I've just been a Hare user, not just a Hare developer... And it feels really good to write Hare code. Sometimes I joke that I won programming, which is a very -- it requires a great absence of hubris to say that, but... I really love writing Hare code, and so does everybody else who's using it and working on it. Like, it just feels good to write, and we're all really enjoying it. So we're using it to build a bunch of cool stuff, and it's really cool to see the ecosystem starting to grow, and... It's early, but it has momentum, and we really love what we're doing, and so it feels great.

**Jerod Santo:** You've gotta love that. You almost wonder, as you draw more to your crowd, when will the people show up and ruin it at all? Because small communities are nice, and medium-sized communities can be nice, but it seems like on the internet large communities almost de facto are not nice. And so maybe you'll stay small just because you're being so intentional with your community, and that will be a good thing. Maybe that'll help it survive for 100 years.

**Drew DeVault:** I mean, we've also been deliberate about accommodating the community as it grows. So you know, it's small, but we have 100 people working on Hare. And we recently did a bunch of reforms to the governance structure. We added more maintainers and we subdivided the project into subsystems, and assigned specific maintainer to those subsystems. We set up a code of conduct, and we created a social space for the community... And so we're taking these measures as it grows; we're watching it grow, and we're identifying where things aren't working, and then we're changing and adapting.

\[56:06\] So far, we were able to preserve our culture by doing that. And it's not known if as it goes bigger and bigger, or if it grows bigger and bigger, if we'll still be able to do that, but it's something that so far -- we have had to deal with growth, and we've done it in a way which was measured and good for our community, and allowed our culture to persist.

**Adam Stacoviak:** Have y'all met in public yet, face to face, IRL? You said only mailing lists, only IRC...

**Drew DeVault:** Yeah, some of us have. I've met a few of the people who work on Hare personally. And this is a project which creates friendships, and a lot of people have become friends, and spend time with each other, and seeing each other on their trips, and so on... And then we have also had a couple of meetups at FOSDEM.

**Jerod Santo:** Cool.

**Adam Stacoviak:** I was thinking of a way to use the word "bunny", a fun word...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** ...in something like -- I was thinking like "Welcome hare..." You know, some puns... Or maybe an alternate version of Hare, which is bunny; it's just a fun --

**Drew DeVault:** I thought you were gonna make a sex joke with the community growing, and the reproduction of rabbits kind of thing...

**Adam Stacoviak:** Well, that's good, too. I like where you're going with that.

**Drew DeVault:** I don't know how to pull it together though, so you've got to work on the punch line.

**Jerod Santo:** Yeah, that's a tough one to pull off without violating some codes of conduct.

**Drew DeVault:** Right.

**Adam Stacoviak:** Well, you could call it Bunny Farm, because it's a play on Funny Farm... But anyways, just thinking out loud about some IRL stuff, and just being fun with it... Because that's kind of what you're doing anyways, right?

**Drew DeVault:** Yeah.

**Adam Stacoviak:** What developer doesn't love a good pun? I'm here for the puns.

**Drew DeVault:** And this is a project that we take very seriously, and we care a lot about the craft, and we're deliberate, and we're very careful with design, and we set stability as a goal... But doing all of those things is fun for us. We're the kind of weirdos who love doing that, so it's going pretty well.

**Jerod Santo:** Well, we opened up talking about this kernel that you're building in Hare...

**Drew DeVault:** Yeah.

**Jerod Santo:** Let's close by talking about something a little more secret that you're building in Hare. Himitsu? Is that how you say it?

**Drew DeVault:** Himitsu.

**Jerod Santo:** Himitsu. A secret storage system. This is out there, source code available for folks to check out... You've built this in Hare. Do you wanna tell us about that?

**Drew DeVault:** Yeah, sure. So Himitsu is the Japanese word for "secret", and it's a secret storage manager, which is kind of a superset of the features of a password manager. And so I have all of my web passwords in it, but I also have my SSH keys and my PGP keys, and the PIN code for my credit card. It's a general-purpose system for storing secrets. It's inspired by the Plan9 factotum system, which most people who listen to this podcast would have never heard of... But Plan9 is this amazing operating system that I have a lot of respect for, and I saw this factotum feature in it when I was using it, and I was like "I want to use that on Unix, but also there's some room for improvement", so Himitsu is kind of deeply inspired by that, but doing its own thing.

And so it can store all kinds of secrets, and I do have a Firefox add-on to fill in my passwords with, but I also have an SSH agent which runs my SSH signature requests through the Himitsu daemon, so it pops up a consent dialog for Himitsu when I try to SSH somewhere, and I hit Bang, and it signs the SSH encryption challenge, and off to the races. So we can store it and work with any kind of secret.

**Jerod Santo:** Very cool. So I think that is a great starting place for anybody who's curious about Hare. Perhaps. Maybe there's a better starting place; just to like check out a real-world Hare codebase that's serving a purpose for Drew. Or is there a better place for folks who are just interested in the language itself, and seeing what it looks like, how you can compile it and run it, and like a real-world program that's written in Hare?

**Drew DeVault:** \[59:51\] We do have a great tutorial on the website, which includes instructions on how to compile it. If you build everything from scratch, you're up and running in three minutes; maybe five minutes, I'll be generous. And we think the tutorial's great. It's a good introduction to the language features, presented well, I hope... And if you just want to see the language and learn about it, go there, and if you want to see real Hare code, Himitsu is great.

We also have kind of a stock project for people who want to look into Hare, or do their first real contribution by writing Hare, which is hautils, which is an implementation of the POSIX core utilities, written in Hare. It's not like a particularly serious project that we expect people to like install and use, but POSIX is standardized, and it's just good, bite-sized, real-world problems for people to solve. That's a good place to see how those problems are solved, and maybe to solve one of those problems yourself.

**Jerod Santo:** Very cool. Harelang.org. Adam, any other puns you want to work in before we let Drew go, or any other questions for him that we haven't asked yet, that you've been stewing on?

**Adam Stacoviak:** I would just say words more so, like thumper, or carrots, or hop, or twist... \[laughter\] Just like different things that play on the bunny world, the hare world is up for grabs, I guess.

**Drew DeVault:** Yeah. This is good. I'm writing this down.

**Jerod Santo:** Yeah. You feel like our own personal LLM, Adam. We're like "Give us 75 words that have to do with rabbits." And then you're just spitting them out for us.

**Adam Stacoviak:** That's right. Buck, I believe, was -- that's a famous Creative Commons, I think, video that people use as like a demo.

**Drew DeVault:** Yeah. From Blender.

**Jerod Santo:** Buck? Bunny?

**Drew DeVault:** Big Buck Bunny.

**Adam Stacoviak:** Big Buck Bunny. That's right.

**Jerod Santo:** Not the Warner Brothers version...

**Drew DeVault:** Is there one?

**Jerod Santo:** Well, I don't know. Is that Warner Brothers? Bugs Bunny... Who owns that?

**Drew DeVault:** Yeah, Bugs Bunny. That's Looney Tunes.

**Jerod Santo:** Looney Tunes. Yeah, which was... A Warner Brothers thing?

**Drew DeVault:** Yeah, I think so. That was Warner Brothers.

**Jerod Santo:** Okay. I was on point there.

**Drew DeVault:** Yeah. I remember the pig character, with the Warner Brothers water tower, you know?

**Adam Stacoviak:** For sure.

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** And if you went with tortoise - I mean, you'd be limited. I mean, what can you do with tortoise?

**Drew DeVault:** Not a lot.

**Jerod Santo:** Right. Which is why he really did. He really did land on a good name. I mean, there's so many things you could do. While tortoise...

**Adam Stacoviak:** You've got shell, turtle... You know... That's about all you've got so far. \[laughter\]

**Drew DeVault:** You can make a joke about turtle soup.

**Jerod Santo:** You're not the best LLM. You're like "I could only think of two words for tortoise."

**Adam Stacoviak:** What I like about tortoises though in particular is that their shell is based on the calendar. Did you know this?

**Jerod Santo:** No.

**Drew DeVault:** What?

**Adam Stacoviak:** Yeah. If you look at a tortoise, not all of them, but some of them have what seems to be a clock or a calendar around it. The multiples -- like 12 months, for example.

**Jerod Santo:** Really?

**Adam Stacoviak:** Ain't that crazy?

**Jerod Santo:** Like, they have 12 quadrants on their shell?

**Adam Stacoviak:** That's right. Yeah, some of them do.

**Jerod Santo:** Could that be happenstance, or is that based on --

**Adam Stacoviak:** There's something a part of that; time is baked into the turtle shell.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Yeah. That's part of that stardust that created everything.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Anyways... It's time to go.

**Jerod Santo:** Fact-check that, listener...

**Drew DeVault:** You're doing great, don't worry.

**Jerod Santo:** He's a professional, everybody.

**Adam Stacoviak:** I'm here to name things and question you about LTS. That's it.

**Drew DeVault:** I'm gonna give you a call when I need a new project name.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Well, I will answer. I'll give you my phone number.

**Drew DeVault:** Okay.

**Jerod Santo:** We'll talk to you in 100 years.

**Drew DeVault:** Ha!

**Jerod Santo:** Alright, Drew, we appreciate it. We'll link up all the things in the show notes for folks, so they can find all the places. Interesting stuff, ambitious stuff, and best of luck to you and the whole Hare community as you continue to -- Adam, what was the pun? Thumper it?

**Adam Stacoviak:** Thumper it, yeah.

**Jerod Santo:** ...I don't know, let's just say goodbye.

**Drew DeVault:** It's been great. Thank you guys so much for having me.

**Jerod Santo:** Thanks, Drew.

**Drew DeVault:** And for all the puns, too.

**Adam Stacoviak:** You got it.
