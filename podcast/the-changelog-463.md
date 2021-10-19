**Matt Rickard:** Matt, welcome to the Changelog. 10,000 hours is a lot to put into anything, and at some point you hit mastery... In your blog post on the subject, titled "Reflections on 10,000 hours of programming" you quoted Malcolm Gladwell from Outliers, "The key to achieving world-class expertise in any skill is to a large extent a matter of practicing the correct way for a lot of around 10,000." So 10,000 to master a skill, that's where we're at. You've got some lessons here you've shared, reflections for you, but lessons for us, so let's dig into those... Where do you begin when you reflect on 10,000 hours of anything?

**Matt Rickard:** Well, just when I think about 10,000 hours - I mean, it's a long time. I think about how long I've been doing this... I've been programming for probably 15 years now, and it's a lot of time to do anything. I've had tons of failures along the way, learned a ton of things, and I've been trying to blog more and write down these ideas so that I don't keep on making the same mistakes over and over again.

**Jerod Santo:** Ha-ha...

**Matt Rickard:** So it's a lot for me as well.

**Jerod Santo:** It's the DRY principle that I do adhere to, Don't Repeat Yourself when they're mistakes; don't repeat your mistakes. DRY them, as they say.

**Matt Rickard:** Oh, yeah.

**Jerod Santo:** What is 10,000 hours? So if we assume eight hours a day, five days a week... Let's just say eight hours a day times five, right? Times - call it 50 weeks a year... That's 2,000. So if you're working a typical 9 to 5, take a couple weeks off for vacation, that's 2,000 hours a year. And you've got 15 years, so you're well over the high watermark. Did you do the math, or you're just like "Yeah... I'm there."

**Matt Rickard:** No, I did the math. And I've spent a lot of time in open source as well, so it's not even a 9-to-5, it's like a 6-to-12, or whatever. I mean, it's an all-day thing.

**Jerod Santo:** \[00:04:07.10\] So you're well over. Where did you earn your keep? You've had a couple different jobs... Do you wanna tell us about the 10,000 hours you've put in? ...where it was and what kind of stuff you worked on.

**Matt Rickard:** Yeah, so I've just been programming a bunch... I programmed a bunch in school, after college I worked in New York for a bit as a programmer... I came out to the West Coast here to work at Google. I worked on open source, I worked on Kubernetes, and specifically a bunch of sub-projects in Kubernetes. I was a maintainer of minikube, kind of the local development environment for Kubernetes. Scaffold, which is kind of a Kubernetes tool to help you build and deploy your apps... And then Kubeflow, which is a machine learning toolkit on top of Kubernetes as well.

In addition to that, I've just been kind of hacking on all sorts of open source projects. I wrote this configuration language Virgo, which is -- you can think of it as like if Yaml was for graph-based configuration instead of more hierarchical, and then built a computer vision bot for Runescape, which was just a game that I used to play as a kid a ton...

**Jerod Santo:** Nice...

**Matt Rickard:** I learned a lot about programming through that, just because, you know, I was too lazy to mine the rocks or click the buttons all day... And just tons of projects like that.

**Jerod Santo:** Awesome. Well, you can learn from experience, but you can also life-hack - learn from other people's experience. So I loved this post... You've got 31 things that you've reflected, and it is specific to programming. These are not large life lessons or more people lessons, you say; these are specific programming lessons that you've learned... And I thought "Let's get some of these out." We're not gonna cover all 31 here; we'll reference the blog post, of course... But it's nice to have the one-liner, because it can resonate with you, or maybe shock you, but then I think it's even nicer to have a conversation around these things; hopefully, they become ever more sticky or more real to people.

So we're just gonna go down, pick a few, see how long we last, and talk about some of these reflections of yours. Sound good?

**Matt Rickard:** It sounds good.

**Matt Rickard:** I have a bonus for our listeners too, by the way... Since we don't know how many we'll cover, and there's a free T-shirt in mind here - I'm curious if someone can listen closely, and the first person who can say how many we cover - if we cover all 31 or not, or at least how many we cover - in the comments, gets a free T-shirt. So the first person to do that - comment, get a free tee. What do you think, Jerod?

**Jerod Santo:** Sounds good. We'll have to partially cover a few, so we'll have arguments over "Was that actually one...?"

**Matt Rickard:** That's right. It could be ambiguous, right?

**Jerod Santo:** We won't use any of the real words... All the words have been changed to protect the innocent. It sounds good; free T-shirt... Why not, right?

**Matt Rickard:** That's right. It could be like The Price is Right - just don't go over.

**Jerod Santo:** Okay, don't go over. \[laughs\] Adam will post the official rules in the show notes.

**Matt Rickard:** Best effort, get the T-shirt.

**Jerod Santo:** This audience is software developer; we are pedantic, so we wanna have the specifics laid out... In code, if possible. Can you put it in a smart contract, Adam? That would be appreciated.

**Matt Rickard:** Yeah. I wanna write it in Ether, honestly. It's gonna be fun.

**Jerod Santo:** Alright, let's pick up on a reflection... This seems to be perhaps your favorite, or you said you wrote some configuration language yourself... Here's one about configuration. I had not heard of this... This is reflection number 30. Oh, I probably shouldn't list them now, because we're making it more difficult. This may or may not be in your list... And this is about the Heptagon of Configuration. Matt, I'm gonna let you explain that to me, because I've never heard of this before.

**Matt Rickard:** Yeah, you've probably never heard of it, because I tried to come up with it myself... I tried to coin the term. So it's a new thing. But it's me trying to describe a pattern that I've seen in software configuration where a configuration seems to evolve through specific, increasing levels of flexibility and complexity before returning to either hardcoded values or Bash. So you go from hardcoded values, which are the easiest/simplest configuration, but provide very little flexibility.

\[00:08:04.03\] And as the program surface starts to increase, and with that configuration you start to incorporate environment variables, flags, and eventually you wanna start to check that into version control, so you turn it into a configuration file, maybe Yaml, JSON, something like that... And then as you kind of turn on this heptagon of configuration - and I only call that heptagon just because a lot of the ideas came from Kubernetes, and the Kubernetes logo has got the seven points, and it just kind of worked out well...

**Jerod Santo:** Right...

**Matt Rickard:** But as you're going from configuration files, you start to need a little bit more extensibility in terms of templating, and I think templating is something that we're all unfortunately accustomed to a little bit too much... So that's kind of one wheel on the configuration heptagon, a configuration. And then from templating, you go to kind of a DSL, a domain-specific language, and that allows you to have a little more type safety and a little more domain-specific reusable modules... I'm sure some of us have used Puppet in the dev ops world, or there's tons of other DSLs out there... But eventually, these DSLs become a little too inflexible. Maybe the requirements change, the domain changes, and then we go back to Bash. So that's kind of like this never-ending cycle of configuration that I've seen. And I saw this a lot in Kubernetes. There was a lot of Bash in Kubernetes, and a lot of configuration...

**Jerod Santo:** Yeah.

**Matt Rickard:** Maybe we skip the DSL part, and maybe that's more of kind of a configuration-as-code, or something like Pulumi... But you know, maybe we'll go back to hardcoded values at some point.

**Jerod Santo:** What's the takeaway there? Just stick with Bash, and everything will be better? Or is this like necessary complexity here? Is this cycle virtuous, or vicious?

**Matt Rickard:** That's a really good question. I don't know if it's either. I think it's just necessary complexity, and I think it's important to know maybe where you are on the spectrum, because I do think that you need to -- you can't necessarily jump from something like hardcoded variables or environmental variables to going to a DSL. I've never really seen that work out... So I think you do need to increase the complexity, but in a way that complexity can be absorbed by the projects or the developers.

**Matt Rickard:** I almost feel like the process of iteration is necessary. You almost learn something -- you said that as the surface area of the program evolves, it's almost like this iteration through the flow, this heptagon is necessary to sort of like flush out the brittleness, or the flexibility and the eventual brittleness again of an application... Because you sort of learn something about it. You provide configuration to the user base, so that they can use it in a more flexible manner, and then those flexibilities turn into like "Well, this is now a best practice." So all those things solidify to now you just wanna hardcode them, so almost everybody uses the same flexible configuration, in some cases. I mean, there's a thousand different ways you can slice how this is used in the real world, but that seems to be a necessary iteration process.

**Matt Rickard:** Yeah, I really like that point. I think it's a lot about discovering what those best practices are, and starting to codify them in different sorts of ways.

**Jerod Santo:** There's an analogue to this in economics. Benedict Evans talks about the process of bundling and unbundling, and he says in any given industry you're either in a bundling process or an unbundling process... And it's cyclical, right? So an example of that is television, where we're all cable TV, everything was bundled as one, and then we broke out of that individual, on-demand, subscribe to this, that and the other thing, and how we're like in a rebundling that's happening; you can see it with YouTube TV, and different aggregators trying to pool together content. And that sounds very inefficient... Your heptagon sounds inefficient, because it's like, "Well, we're going around in this circle."

\[00:11:57.23\] But what I've heard pointed out is that progress often looks like a circle when you look at it on its head, like in a two-dimensional plane... But then when you look at it in three-dimensional, it's more like a helix, where it is moving in a circular way, but it's getting better as it goes... And I think with software, that's a lot of what we're seeing - these iterations, and a lot of times returning to the old idea, but you're returning to it with new eyes. You're returning with new tools. And so you are building up, but you're not like building blocks on top of each other; you're kind of like circling the wagon, but you're going up... You know, it's like a helix rising... Which is slower than we would want it to, but it's still progress, right?

**Matt Rickard:** Yeah, yeah. I think that's a great point, and I think we're seeing that play out in the data stack a bit, with a lot of old ideas and tooling around data warehouses... And now that we have cloud data warehouses, you have Snowflake, BigQuery, Redshift etc. we're bringing back a lot of those old ideas, things like OLAP cubes, there's analogues to that now... And it seems kind of like more of the same, but it's really different once you start to look under the surface.

**Jerod Santo:** Well, another lesson here is one that we touched on with the Prag Prog fellas themselves around DRY. This is always controversial, DRY... And it's because we all think about it a little bit differently, or I think that we all misunderstand what their point was. They did point out on that episode when we had their 20th anniversary show that one of the most misunderstood points in the Prag Prog book is the chapter on DRY. So they tried to rewrite it. I haven't read the rewrite very closely to know if they accomplished clarifying that, but you have a point here... One of your reflections says "Know when to break the rules. For rules like "Don't repeat yourself" sometimes a little repetition is better than a bit of dependency." And you link to another blog post of yours called "DRY considered harmful." Do you wanna unpack that one for us?

**Matt Rickard:** Yeah... I mean, the DRY considered harmful - maybe that's...

**Jerod Santo:** Clickbaity? \[laughs\]

**Matt Rickard:** Yeah, a little clickbaity. And you know, I don't think it's actually that harmful. I think the way that it's been dogmatically used is sometimes a little dangerous... But it's just more of a point about how as programmers we have a bias for abstraction. Understanding that we have that bias and trying to keep it in check, especially when it comes to duplication versus encapsulation... I just think that it's a path that I've gone down too many times, of carving out microservices, or creating service boundaries where there really shouldn't be... Or prematurely optimizing when requirements aren't really finalized; and you know, the requirements are never finalized. And just the wrong abstraction at a low level can really cause a lot of issues in terms of refactoring and just added work down the line.

**Jerod Santo:** Yeah, I think we fall prey to this because we're such pattern matchers... And as soon as you spot that pattern, you're like, "Ooh... Opportunity." Some of those abstraction layers are the power in software. The ability to build those abstractions are what give us leverage. So every time we see one, we think "Boom! I'm not gonna repeat myself. I'm going to DRY this sucker up." But like you pointed out, oftentimes that second iteration, that second usage is not actually generalizable, or it looks generalizable until you find the third one, which - you know, just throw another param on the function. It's what we do. We're like, "Well, I'll just throw a true/false at the end of this thing." Then I have this extra branch in my function because it didn't actually map onto the use case like I thought it did. So a lot of it is just that enthusiasm of like "Oh, here we go. I'm gonna DRY this sucker up." It feels so good, but it does come back to bite.

**Matt Rickard:** Yeah... I don't really know how to get around it. I keep on falling prey to it over and over again... But maybe that's just kind of the name of the game.

**Matt Rickard:** \[00:15:48.16\] And what do you think comes out of the falling prey to it again and again? Do you think that it's a necessary thing that you just learn from and grow from as a result of like just this awareness that it's not efficient to repeat yourself? Instead of saying "Don't", let's say "Maybe not repeat yourself", or "Should not" versus "Don't." It's kind of a little softer on the -- it's maybe just being more aware of the times when there are the patterns... As you said, Jerod, the pattern matching - to just be aware that these can lead down bad roads if you repeat yourself too often, and it makes sense to DRY up things...

**Jerod Santo:** To treat it more loosely?

**Matt Rickard:** It's like an awareness thing.

**Jerod Santo:** Well, it's worth pointing out what the rule really was, or is, that they point out in the Pragmatic Programmer book... And the repetition is not about code. That's where we all get it wrong. Anytime you're repeating code it's bad, so don't repeat yourself. So let's create a function, name it etc. Abstract a function. What they were talking about is knowledge in your system. Every piece of knowledge in your system should live in one place and one place only. But because the acronym was DRY, and it's such a catchy thing, and it's easy to remember "Don't repeat yourself", as soon as you start repeating something, you just immediately apply it, right?

**Matt Rickard:** Yeah.

**Jerod Santo:** But that's not the point. It's not about the code that you write. Now, some code does represent knowledge, so it does overlap. These things are not completely black and white, but... That was what they were trying to say. Maybe they say it much better in the 20th anniversary edition. But that's why we all get it wrong. I don't know, Matt - has anything helped you... I mean, you're writing this as a reflection, so you've obviously thought about it... Do you just tread more softly? I have introduced the rule of three for myself, which I think I got from Jeff Atwood's Coding Horror blog, where he's like "You have to use something three times before you'll generalize it", because I have found that it's usually that third use that points out how bad my abstraction is... But I've also found out sometimes it's like the sixth or seventh use, so it doesn't always help... But it does help me slow down a little bit. Maybe just like, bite the bullet one more time. What have you found?

**Matt Rickard:** Yeah, I think the distinction that you made that the knowledge shouldn't be duplicated and it's not so much about the code - I think that's a really good lesson. For me, I try to understand the bias I have for abstraction, and correct against it... So if that means erring on the side of duplication, then that seems to be kind of the most helpful for me, especially on smaller projects where it's either just me and a few other devs, or just me... Duplication I think is fine, because the knowledge tax is maybe not as high... But on large teams, I think maybe go the extra mile and make sure that you're not repeating yourself, because the cost of repeating yourself in that context is maybe much higher.

**Jerod Santo:** Well said. I had to just practice this discipline yesterday, because I was creating a gameboard for Go Time's 200th episode; we played Gophers Say, which is their Family Feud edition... And I wanted a visual aid, so I've found a guy who had written one on CodePen. I just wanted to like "Just show me that thing" -- you know how Family Feud works, right? And you guess it, and they're like "Show me what the survey says", and a thing bings, and it shows the number. And I wanted that for the live show, so I grabbed this guy's CodePen, I just downloaded it... An index file, a CSS file and a JS file. And I started tweaking it, so it would work for ours. And I know I needed seven rounds.

So programmer me was like, "Alright, now I need a templating language", so I can just template this out and then have a JSON data blob that represents that... And then pragmatic me was like "Dude, just copy and paste this file seven times, and write the actual data into the HTML. You're never using this again... And if you do, then maybe you can abstract it later. But just repeat yourself." Even seven times... Because I knew that was it. I was gonna do it seven times, and I was never gonna touch this again. And I had to exercise the discipline, because engineer me had such sweet solutions for how I could generalize this sucker, and maybe turn it into a web app that other people could use. YOu know, that inclination.

What helped was I had to have it done in like an hour and a half, and so I'm like, "Don't start coding. Just hardcode the values and move on, man..." It's tough. It's tough to fight that urge to generalize.

\[00:20:07.26\] Let's move to the next one... Here we have a reflection of yours on code comments. You say "If you have to write a comment that isn't a doc string, it should probably be refactored. Every new line of comments increases this probability." And then you have a link to a more nuanced take, which is from the Linux Kernel documentation, which I did not read, because - who has time for nuance, right?

First of all, tell us what -- when you have that and it's not a doc string, what specifically do you mean by a doc string? And then how did you learn this, and why do you believe this?

**Matt Rickard:** Yeah, I think a doc string can mean a few different things in different languages. I think for something like Java maybe it's a little bit more defined... But basically, it's just a comment that describes what the function is actually doing. Maybe that feeds into some sort of language server or automated documentation.

**Jerod Santo:** Right. So you're talking about in-line comments, like contextual things, hints.

**Matt Rickard:** Exactly.

**Jerod Santo:** Okay.

**Matt Rickard:** And I wrote this more as kind of like -- you know, it should be maybe a yellow flag, maybe not so much a red flag, in terms of when you see this happening... I went into the Linux Kernel documentation and I think they described it very well. They say you should never really try to explain how your code works in a comment. It's much better to write the code so that the working is obvious. And you want your comments to tell what your code does, not necessarily how. And I think that's kind of the right way to go.

When you're really trying to explain exactly how your code works, then maybe you should refactor it, and maybe that's a sign that other people are really gonna have a tough time understanding what's going on, even with the comment.

**Matt Rickard:** Is there a best practice for commenting then? Like, are you commenting every function, to get to the point where you need to explain every single thing? Like, if you're gonna explain what it does versus how it does it, how often are you personally commenting in your code? Is it frequent? A lot?

**Matt Rickard:** Yeah, I would say in terms of in-line comments inside the function, I would say rarely... Unless you're doing something really clever, where it's not that obvious and you can't get any sort of context clues from variable names, or control structure... I think it's pretty rare to see that. I mean, it also depends what kind of program you're writing. If you're writing a really low-level library, I think it does make sense to be overly verbose. But if you're writing some sort of business logic, I think it maybe makes a little bit more sense to keep it at the function level, or put it in maybe a different place.

**Jerod Santo:** Yeah, I think the rules change entirely for library authors, maybe API designers, versus somebody who needs to write an application code, business logic... I think the rules change, the best practices change. Most of my comments are apologies to my future self, like "Sorry, I couldn't think of a better way to do this", you know? \[laughter\] Or admitting this is a little bit gnarly, but I couldn't think of a better way... And sometimes you just have to move on and come back and it'll come to you.

But yeah, I think the what and the why's, those should be in-line comments. Not the how's. Because the how can change; that's an implementation detail. Oftentimes we see jokes because the comments describe something that no longer exists. Comments because out of date, especially when you're saying how. That's the most out of date thing, because that's gonna churn, is the how, usually more than the why.

**Matt Rickard:** Yeah.

**Jerod Santo:** But this ties into another one that you say, which is if it looks ugly, it's most likely a terrible mistake... \[laughter\] But I just love that, because it can apply to so many aspects of life. But your point is like, refactor the code, versus making the comment, if you can. Refactor the code so it's readable and clear. But then you say if it's ugly, it's most likely a huge mistake. Where did this one come from? I love it, but I'm not sure where you drew that conclusion.

**Matt Rickard:** \[00:23:55.20\] Yeah, definitely personal experience here... When I was working on minikube, a lot of the complexities around spinning up a single-node Kubernetes distribution on your laptop - so not only are you one layer deep with containers, you're also another layer deep with the fact that it has to run in a virtual machine on your laptop... So that's Widows, that's macOS... We optionally spin up a VM on Linux... But I've found myself working with some pretty undocumented virtualization libraries on macOS, and I was trying to think "Hm, maybe this is not the most maintainable way forward." So I think that's one piece of personal experience where when it was ugly, it was maybe not the right way to go.

**Break:** \[00:24:40.04\]

**Jerod Santo:** So anytime you reflect on 10,000 hours of programming, surely Stack Overflow comes into those reflections... And it turns out it did, because one of your findings or one of the things that you believe now, after all this time, is that browsing the source is almost always faster than finding an answer on Stack Overflow. Now, I kind if agree with you, but I also kind of disagree, so I'd love to have you elaborate a little bit on this one.

**Matt Rickard:** Yeah... I mean, this is one that I've found super-helpful, just because the code can never lie, and the documentation can be out of date, the blog post you're reading could be out of date, the Stack Overflow answer could be out of date... But if you're looking at the right commit, then the code necessarily can't be out of date.

I do think that it's maybe a little bit language-dependent. I write a lot of Go, so there's GoDocs, the code organization in Go is maybe a little easier to grok than something like JavaScript, where APIs can kind of be all over the place, and you're using libraries that might be nested ten libraries deep... But for the most part I've found that just looking at the code is the right way to go.

**Jerod Santo:** Now, what if you're looking at some code on Stack Overflow? \[laughter\] You're still looking to code, right? Code can't lie...

**Matt Rickard:** That's true. Maybe that's the loophole.

**Matt Rickard:** You definitely have to check the date on Stack Overflow, that's for sure... Because if it's like from 2016, and it's 2021, it might be out of date. It might be. I don't know, that's a hard one too, because it depends. And the reason I say it depends -- and maybe this is where the difference is; these are reflections about pure coding, whereas my example here I'll give is more about using. So I've been doing a lot of stuff locally with Docker, a lot of containers on my local network, and I'm doing things with Docker Compose, and just learning more about different ways to extend and use Docker Compose. They're Yaml files; configuration, essentially. And I'm not gonna go read the Docker source code to learn about Compose, because the docs are pretty good. So in that example -- but that's not pure coding.

**Jerod Santo:** That's not Stack Overflow either.

**Matt Rickard:** \[00:28:09.20\] It's kind of coding, right? I'm coding a config file, which isn't necessarily coding.

**Jerod Santo:** You're using a thing.

**Matt Rickard:** It's sort of the ambiguous middle there, of coding.

**Jerod Santo:** Yeah, it's almost like -- a good example is like "How do I properly call FFmpeg with these files from my app?" I just say that because we call FFmpeg from our app, and I know I've looked these things up... And it's like, okay, well the man page is a start... But holy cow, have you seen FFmpeg's man page? It is massive.

FFmpeg - I give it praise often. It's one of the most robust tools I've ever seen. The thing can do so many different things. It's amazing, and it's incredibly black box. Even the flags are very weird. I ended up on Stack Overflow a lot, and I never look at FFmpeg source code. Now, maybe in that case I'm just a user of a tool, and so source code is never gonna be where I would go, unless things aren't working correctly. Maybe you just say "Well, now the man page is really what I'm kind of thinking about." So contextually, when you say that, are you referring to how to solve my particular language feature problem, or how do I loop over these arrays, or how do I use this reduce function? What context are you saying "Look at the source code" or what kind of source code are you referring to? Your own? Other people's?

**Matt Rickard:** For me, I think it makes the most sense to look at the source code when you're taking a dependency on a library... I think that's the most obvious one for me, just because you're not accessing an API on HTTP, you're not accessing an RPC, you're actually taking a dependency on some code... And sure, there might be a documented way that, you know, these functions are public, and these are the ones you can use... But for the most part, I think once you're at the code level, you should stay at the code level. If you're at the binary level, if you're at the CLI level - yeah, I think it makes a lot of sense to look up "How do I cut this clip to 30 seconds?" That makes sense, right?

**Jerod Santo:** Right.

**Matt Rickard:** You might not even look at the man pages for FFmpeg...

**Jerod Santo:** No, I just google that immediately and end up on Stack Overflow.

**Matt Rickard:** I'll admit that this advice would have been good yesterday actually for me...

**Jerod Santo:** \[laughs\] Matt, you're a day too late, man... A day late and a dollar short...

**Matt Rickard:** So I'm having Matt Biilmann and Christian Bach from Netlify on Founders Talk soon, and I was digging into my personal site, which actually is using Netlify. And so I was gonna make some updates to it. It's a Jekyll site essentially... And I'm using a plugin called Jekyll Assets. And something changed with Jekyll since the last time I updated it in 2019, to 2021...

**Jerod Santo:** Of course.

**Matt Rickard:** ...so now I guess Jekyll Assets works differently. So things that were working once were now broken, and I was digging through documentation rather than source code, and I wasn't finding my answers. I think if I had taken your advice and just dove into the source code a bit more I can understand a bit more how I might be able to pull assets like I'm expecting... Because I can see the code change.

**Jerod Santo:** That's a great example.

**Matt Rickard:** Rather than the documentation be obsolete or non-existent for my use case, I can actually read the docs on how Assets calls an image, for example, and what happens as a result.

**Jerod Santo:** Let me add on -- I think it's a great example there... And let me add this to what Matt is saying, because I believe this to be true. If you have a library dependency that your application relies upon, and you're afraid to, or for whatever reason will not peek under the covers and grok its source code, you should not be using that piece of software. You should be ready, willing and able to read the source code of your dependencies.

\[00:31:51.23\] Now, sometimes those people are better at writing software than you are. I've learned tons of things... Other times you're like, "What the heck is going on?" Well, if it's ugly, it's probably a huge mistake... \[laughter\] You will level up as a developer, you will better maintain your application, you will better own and operate your application, and you'll be much better at vetting dependencies being willing to do that. So I think Matt's advice there really pays dividends, because not only are you getting at what is true, but you're also getting familiar with your entire stack, versus just the parts that you're used to maintaining.

I think black box is kind of a lie... There are some things which can be a black box for a while, but that's just somebody else's abstraction, right? So you're gonna have to -- it's gonna leak eventually, so be willing to dive in there and look at that code.

Now, when it comes to learning, you have another one here... Only learn from the best. So when you were learning Go, you read the standard library. Now, I produce Go Time, and I know that there's people that wrote the standard library that may say "Yeah, don't read this part of the standard library..." But nonetheless, you went after it, and of course, the standard library is written by expert Go developers. Do you want to tell us more about this particular reflection?

**Matt Rickard:** Yeah, I think that -- maybe the Go standard library is a little strong for most people, maybe it's not at the right level of readability for most projects, depending on what you're doing... But just as a general rule, find the best examples of code and emulate those.

I look at a lot of the code that I've published as open source, and I really hope that no one's reading that... Just because it's kind of half-complete sometimes, it's maybe not using best practices, I'm doing workarounds... And when someone else builds on that foundation in a similar way, I think that doesn't work out too well.

So even though there's a lot of terrible code in Kubernetes, and I wrote a lot of it, there's a lot of great examples of what an API should look like, API versioning, API machinery... And I think those are the examples that you should be looking at, depending on what you're building.

**Matt Rickard:** I actually learned a similar lesson to this from a fellow named Brian Tracy, but it was more in the sales vein, and more of a self-development vein than it was simply programming... But the analogy is very similar. Basically, if you want to be good at something, or excel in some way at something, look at who's already doing it really well, and emulate them.

So the practice essentially is if you wanna do something really well, find out who's doing the best currently at it, or writing the best current version of it, and emulate what they've done. Not so much to copy them, but to follow their path to greatness. And you may branch off and find your own path, but follow the greats to greatness and you may be great yourself.

**Jerod Santo:** I like that. Now, how do we identify the greatness?

**Matt Rickard:** Luck...

**Jerod Santo:** \[laughs\] You wanna be good? Gotta get lucky...

**Matt Rickard:** Well, I think in the case of, say, the Go standard library, I think it may have been written by some really well-known and knowledgeable people inside of Google, for the most part. So I think they're pretty good examples of people to emulate, considering their career and what they're touched and what they've brought to market. So I think that's a good example there.

I think otherwise you've just gotta follow your peers. Pay attention to the Changelog, this podcast, for example; that's how you find greats - you pay attention to the media and the content happening in the space, you pay attention to Twitter, you pay attention to maybe TikTok, who knows... But for sure, Stack Overflow, for sure GitHub, for sure standard libraries, for sure the package registries, what are other people using, what are other people using as dependencies... And all that work will shake out who's great.

**Jerod Santo:** I almost stopped you at TikTok, but let you keep going... Alright.

**Matt Rickard:** I know. So I have a rule, I have to mention TikTok at least once every podcast from now on.

**Jerod Santo:** \[laughs\] I thought that was Silicon Valley.

**Matt Rickard:** That's that, too.

**Jerod Santo:** You're still working on that one...

**Matt Rickard:** I'll bring up Silicon Valley if you want. We can do it.

**Jerod Santo:** Go ahead, bring it up right now.

**Matt Rickard:** \[00:35:54.03\] What's a good example of the greats there? I think in Silicon Valley in particular - and this may be just a break, or something else, but... The way you've found the greats there was just by paying attention to where the money was going. Who was getting funded, who was competing, who was stealing engineers away from others? In many ways it was Gavin Belson, the evil bad guy, essentially, the big tech person, fighting the little guy trying to build the best algorithm to build a better internet. You find the best by just seeing who is actually putting stuff in the market and winning. So that's how you find the best.

**Jerod Santo:** Alright, I take it back. Do not work in a Silicon Valley one right there... It was a good effort though. While we're talking about other people's code, reading their code, learning from them, number 14 - I'll give you guys this one, listeners - definitely counts as a lesson. Use other people's code religiously. I think it ties in what I was just talking about when I was saying don't be afraid of looking at the said code. I was saying you shouldn't use it if you don't. It doesn't mean you have to understand it, but you have to be willing to dig into it, I think.

That being said, you say like, you know, go ahead and use... And the corollary is most code is terrible; sometimes it's easier to write a better version yourself. Well, these seem to be a little bit contradictory. Like, use their code, but don't use it when it's bad...?

**Matt Rickard:** I think what I was trying to say there was that all code is terrible, to some degree... Even if you look at a library and you say "Oh, maybe I could do this better", sometimes it still makes a lot of sense to take a dependency on that library and use it. Just because it's been maybe more battle-tested, it's maybe a time thing in terms of -- you know, maybe you could write something as good; you haven't really tried... But is that kind of the core value that you're trying to drive in in your application, or something like that?

So I think maybe just don't be afraid to take dependencies. Know what you're getting into, to some degree. A lot of the others rules are around not tangling your dependency tree, not taking dependencies on super-tiny libraries... But for the most part, I think you have to use other people's code, because that's the only way to continue building exciting things.

**Jerod Santo:** I have a half-written blog post about the continuum between dependency hell and not-invented-here syndrome... And how that we all live somewhere along this spectrum. I think that your appetite changes over the course of a career. I know that when I was first getting started, I used almost exclusively other people's code... Because I wasn't very good at writing code, so I couldn't really accomplish very much on my own.

Easy example - maybe you're using Ruby on Rails and you're like "I want to do authentication", and it's like, "I don't know how to do authentication." And then - this was years ago - you would find the Devise library and you would use that code, and all of a sudden, I could do authentication. It gave me powers I didn't previously have. Fast-forward 5-10 years, I could now write that from scratch very easily, because I've now seen how it works, I've used it, I've got opinions on it, I've implemented it myself a few times... Not the entire Devise library, but authentication.

So now my appetite kind of changes, and the decision-making process kind of changes, because it wasn't like, "Hey, I couldn't do it myself", but now it's "Should I do it myself?" So how do you make these decisions? Matt, you've put your time in, surely you've gone, in certain areas, from "Can't accomplish it" to now you can accomplish it; you could code it up. But how do you decide what are the circumstances in which I go ahead and take on that dependency, or when do I break out the text editor and write it myself?

**Matt Rickard:** I think a lot of it is context-dependent on what you're building. For instance, when I was writing lower-level library code, in that sense I think you wanna take as few dependencies as possible, just because it can really complicate some of your downstream consumers if they need a dependency on, let's say, Leftpad, or something like that. But if you're writing more higher-level application code, I think you've gotta ask yourself what goal, what are you trying to achieve here.

\[00:40:00.17\] If you're working on a startup, I think it makes sense to outsource as much of the non-core value proposition of your application. It's possible. Sure, you can write your own authentication library, but just look at how many amazing startups have been built on Ruby on Rails - GitHub, Shopify, GitLab... I'm sure there's a ton others. But sometimes it makes sense to just use other people's code in that case.

**Matt Rickard:** Would you also say it's proven ground, where if you're at a lower level, you're on less proven ground, so there's probably less code to potentially even choose from, even if you could? ...and maybe where you're in more proven ground, say a frontend, where things are sort of stabilized or something like that, it makes a lot more sense, because maybe even the user base of that dependency might be great. They've got a lot of community happening there, a lot of support coming in, so it makes zero sense for you to invent here, rather than dependency yourself.

**Matt Rickard:** Yeah, I think that's a great point.

**Jerod Santo:** Yeah, especially around certain projects where the community rallies into a specific project. I mean, Devise is a good example from maybe 5-10 years ago now, where all of the authentication things -- like, instead of rolling your own, you use Devise, and then you worked on Devise with the Devise people, and everybody is making that one thing better. So you have way more eyes on it, you have way more feature development, bug fixes while you're sleeping... That whole community open source flywheel gets rolling, and that's a rel benefit.

Now, on the other side, a community can move away from you and your project. All of a sudden, they're adding things that you don't want or need, and you disagree with, and too bad the community all thinks this is good, but hey, I don't need SMS-based 2-factor auth.... And now you're just adding lines of code to my project when I upgrade, and I don't care. Not in Devise's case; it's pluggable. It was pretty good software, it still is probably... But you know what I'm saying - a piece of software, a dependency can start off like completely fitting you, and then a few years later it's like "This thing's heading another direction that I don't like. It's time to jump ship, or find another alternative, or start writing it yourself." There's a lot to think about these things.

**Matt Rickard:** I think it goes back to your earlier point about the cycle of bundling and unbundling as these libraries just grow to accomplish all use cases, as your API needs are much smaller. Maybe it makes sense to break out and roll your own, to actually reduce that API surface... And it ends up being actually a more stable and maintainable piece of code.

**Jerod Santo:** We had a show on JS Party with Ahmad Nassri, who was Npm's CTO for a while, he also started Kong, or he was involved in Kong... He's been around the block, he's seen a lot of things, and he takes a very hardline stance that you should only write code that only you can write, or you and your team. Only write the code that makes you unique and different, and you have the special skillset. Everything else, you shouldn't be writing. Him and I actually go back and forth in that episode; maybe we'll link up to it, because it's an interesting conversation. But I thought, "Wow, here's a real context-independent--" Right? I agree with you, I think context does matter. But he's saying, "Nah... Pretty much, if it's not unique to you, you're wasting your time and your cycles. You should be outsourcing that and you should only write the code that makes you, your company, your org, whatever, unique and different, or adds something to the world, versus reinventing."

**Matt Rickard:** I think in small teams that makes sense, for sure... And even if you're in a big org, you'll still be in a small team.

**Jerod Santo:** True.

**Matt Rickard:** So you're always sort of like resource-aware. So if you're resource-aware, you shouldn't waste time... So wasting time would be writing code you shouldn't write... And being efficient would be writing code that you should write, only you should write. So I think it kind of depends still yet... But even in a big org, you can be a small team.

**Jerod Santo:** True. There's also business decisions that go into a lot of these things, beyond merely the engineering decision-making. Matt, you were talking about a lot of these large companies have rolled their own databases internally, and they weren't the only one that needed that... But they had specific business reasons to do it, or they had specific needs, or they didn't want to -- I mean, the context goes on and on and on for these decisions.

**Matt Rickard:** Yeah.

**Jerod Santo:** \[00:44:07.07\] Yeah, definitely I think size matters. Well, while we're talking dependencies, cyclomatic complexity... Let's squeeze this one in, huh? Because this is right on topic, isn't it?

**Matt Rickard:** Yeah, yeah.

**Jerod Santo:** Yeah, it sure is. We don't wanna change subject... Number 20, "Avoid cyclomatic complexity. Novice coders don't even know that they've tangled the dependency graph until it's too late." Ouch... \[laughter\]

**Matt Rickard:** Maybe a little harsh. I only say it because I was there. I'm still there, in a lot of regards.

**Jerod Santo:** Oh, yeah. Well, we've all been in a tangled mess before; this is the dependency hell side, right? Like, how did I get here? I can't get out. Can you quickly define cyclomatic complexity for those who are unaware of the term, or the understanding?

**Matt Rickard:** Yeah, so it's basically just like an actual quantitative measure of how many independent paths exist in your source code... So think of control structures, so like if else statements, how many nested if else statements are there, how many nested for loops are there... It's something that a lot of static code analyzer tools can tell you. It's not always maybe apples to apples in terms of "Oh, this project has this super-high cyclomatic complexity, and that means it's a bad project." I think you really need to look at it at a relative term... But it's something good to track with your project, and I know there's a bunch of tools for Go that do this, just to know if you're introducing some really gnarly control flow in terms of super-nested if statements, super-nested for loops etc... Because the cyclomatic complexity, while it is kind of relatively good or bad, it does correspond to the number of test cases you need to cover your code, if you think about it that way.

**Break:** \[00:45:53.09\]

**Jerod Santo:** So Matt, number 15, which says "Most code out there is terrible" was a corollary to number 14, which said "Use other people's code religiously." I think a corollary - if I know what a corollary is, and maybe I don't - to "Most code out there is terrible" is number 3, "Delete as much code as you can." Does that sound right?

**Matt Rickard:** It pains you to delete the code that you put so much hard work into writing. I mean, the best code is no code, to quote Kelsey Hightower, in his nocode repo, which contains absolutely no code, but also no bugs.

**Jerod Santo:** Yes, that's right.

**Matt Rickard:** It's true.

**Jerod Santo:** Bug-free. And zero dependencies, right?

**Matt Rickard:** Zero dependencies, easy to deploy, free to deploy...

**Jerod Santo:** That's right.

**Matt Rickard:** It's something that's really hard to do, but it's really satisfying when you do it. One example that comes to mind is in the early days of minikube we were actually vendoring the entire Kubernetes distribution into the minikube binary. That meant the kubelet was in there, all the different components were in there... And maintaining that was a complete nightmare, just in terms of - we weren't depending on external APIs, we were depending on actual internal APIs that had no guarantee whatsoever.

So once we were able to move over to a different solution - I mean, I probably deleted maybe like four million lines of code in one PR.

**Jerod Santo:** Wow.

**Matt Rickard:** It was great, because our unit test coverage went way up, the tool became much more reliable, and we didn't have to spend nearly as much time maintaining all of these different patches and different pieces of code.

**Matt Rickard:** The difference there might be that you didn't write that code, right? You wrote the code to maintain, but you didn't write the four million lines of code.

**Matt Rickard:** That's true, but I think even deleting a package dependency in my mind still counts as deleting a ton of code.

**Matt Rickard:** Sure. I don't mean to downplay what you did... What I mean is the emotional tie to the code.

**Matt Rickard:** Exactly, yeah. It's much easier to delete someone else's code than to delete your own code...

**Jerod Santo:** Right...?

**Matt Rickard:** But yeah, I think deleting your own code is definitely much more important.

**Jerod Santo:** I have never identified closely with my code; I think that a lot of people do, and I do understand why you would... Because like you said, that's your thoughts in software, it's your time, it's your effort. I understand it, but I do not and have not identified closely with my code... In other words, I've always loved to delete my own code. I've never been "Aw shucks, I'm really gonna miss you, 40-line function!" -- you know? I've just been like, "Good, I don't need this anymore." Because it always felt like a liability to me. It's never felt like something precious to hold on to, like other things do. I don't know about you, Matt... Have you ever felt like some code has been hard to get rid of? Maybe there could be sentimental value around something that brought value? I don't know... I get it, if the whole project disappeared, sure. But that function...? Why do people identify with these things, do you think?

**Matt Rickard:** You know, I find it very difficult to delete code, especially when the code has been there a while, it's been battle-tested, it represents a lot of toil... Maybe it's not that 40-line function, maybe it's that 10-line function that you thought was really clever and you've spent hours figuring out the algorithm too, just to figure out that maybe it should be replaced with something else, or something much simpler. Maybe it should be replaced with a 40-line function.

**Jerod Santo:** \[laughs\] Maybe it should. Maybe you should have copy and pasted something off Stack Overflow.

**Matt Rickard:** Exactly, exactly. So that's tough, but it's just so necessary.

**Matt Rickard:** I wonder if it speaks to confidence in yourself... To go psychological.

**Jerod Santo:** How so?

**Matt Rickard:** \[00:51:57.01\] To feel like you shouldn't or can't delete it is having less confidence in yourself that you could rewrite it better... You know what I mean? Like, you wanna hold on to it because maybe you're less confident that you -- so Jerod, to your point, and maybe a hat tip to you might be that you're highly confident in your abilities to rewrite the code better.

**Jerod Santo:** Maybe I'm overconfident.

**Matt Rickard:** Overly confident, high confidence, say i how you like... But it leads maybe to a lack of or a high degree of confidence, potentially.

**Jerod Santo:** Maybe. And probably lots of factors will lead into his... I will say that version control helps me delete code much more confidently. Because I feel like if it would be difficult to go back to here ever, maybe I would be more reticent, to say "You know what - I may need this someday. I'm gonna hold on to it." I see a lot of people, novices mostly, just like comment out huge swathes, but leave them right there. Like, this function is just commented out, but why is it still in the source code? Because they don't trust their git foo, or something... It's like, you can get back to that. That's what version control is for; go look at a previous version.

**Matt Rickard:** Finding that might be challenging, though. I suppose if you can code search even history you could...

**Jerod Santo:** It could be. I think it's like, "I might toggle this back on with my next commit" kind of a thing. There's lots of reasons why that happens... But I find that a lot. I've never been a commenter-outer. I'm just like "Delete that crap. Get it out of here. It's noise."

**Matt Rickard:** Yeah. As somebody who is somewhat of a digital pack rat, I can empathize with the person who has a challenge in deleting it... Not because I find it useful or that I'm emotionally tied to it, but what if I wanted to reference it? What if this could be useful someday?

**Jerod Santo:** Right.

**Matt Rickard:** But I also say I like to delete code. It's nice. There's some value in that too, because you can sort of see a better future... And I think it kind of depends, really. It depends on how emotionally connected you are to it, what your confidence might be of it, if you do believe in Git... Which is totally true. If it's in Git --

**Jerod Santo:** It's in there.

**Matt Rickard:** Or even anything else. Fossil, for example.

**Jerod Santo:** There you go.

**Matt Rickard:** The new and upcoming Git.

**Jerod Santo:** Yeah, go agnostic. Maybe it's in Mercurial, who knows...?

**Matt Rickard:** \[laughs\] Well, then you've got it in your history, so it's not gone forever.

**Jerod Santo:** That's right. But if most code is crap, then deleting it sounds like a pretty good idea. I don't know... I'm with you, delete as much code as you can, but no more. Don't delete more code than you can. That would be a bad idea.

**Matt Rickard:** Yes.

**Jerod Santo:** Alright, back to code that we write, not that we delete... Number 18, "Organizing your code into modules, packages and functions is important." You mean not just one big function called "main"? "Knowing where API boundaries will materialize is an art." That kind of goes into the DRY thing, doesn't it?

**Matt Rickard:** Yeah. And something that I think about a lot with the monorepo versus microservices debate - not to even get into that, but just... It's really hard to know where these API boundaries are gonna exist, especially early on, when you're first coding your app... And I think as programmers, I think we wanna split everything up. The users service has its own file, the other service has its own file... But I think a lot of times we maybe prematurely codesplit, and that causes a lot of issues just down the line in terms of versioning things and releasing things that actually need to be versioned together... And I think if you find yourself in that situation, maybe you kind of roll it back up in some regard. Maybe it's not microservices versus monorepos, but maybe it's just something as putting things in the same package, or putting things in the same file.

**Jerod Santo:** Yeah, you would think these would be small concerns, but they end up becoming large concerns in software architecture, right? It's like, where the files go, how I name things, where to put things... Especially when you start working on teams, then there's disagreements over how this works... You're introducing logistics into your software by having these distinctions prematurely, and having to make sure everything's in the right place, named the correct way etc. Start simple, and then only abstract when it's necessary and beneficial. That is an art though, and it does take time to learn, and even somebody who's done it for -- I think you and I are in very similar boats. I've definitely been writing software for 15 years... I still screw that up. I still make the wrong call, and then maybe it's hours later, maybe it's days or weeks, and I'm like "That was the wrong call", and then I go ahead and roll that back... I'm gonna go back to where I started and go ahead and just try it the other way and see if it works any better.

**Matt Rickard:** \[00:56:19.13\] What are the downsides? Let's say over-organizing... Is there an over- to that, potentially? So you wanna organize it, and it's an art to do so, but what about over-organizing? Can it be fatiguing, so to speak? The reason why I ask this is I often see this in the -- on the frontend mainly, where I play most, in SaaS. I know that when SaaS came about, it was -- you can always add import CSS files, for example, on the frontend... But it was less common, because it really in the end just created one big CSS file on the frontend itself when you moved it along. But in SaaS, I noticed that a lot of people would compartmentalize little components, and it would be like a five-line rule set for CSS in there, and it's like, "Well, that could have been in the regular file..." You just find yourself \[unintelligible 00:57:02.26\] in so many different files, it's like, "Is this really helpful?" What's the downside to over-organizing?

**Jerod Santo:** Hard to find things?

**Matt Rickard:** Yeah...

**Matt Rickard:** I think cyclic dependencies as well... I think it could put you in, let's say, like a Go package, or something like that, if you over-code-split, but you're actually not respecting the underlying dependencies of how the code is actually flowing... Then you can get yourself in kind of a bad spot, where package A depends on package B, or maybe a diamond dependency problem where package A depends on B and C, but then B and C also depend on D... I mean, you just get yourself into all sorts of package hell, depending on what level you're working at. So I think it has real ramifications for over-splitting or over-- yeah.

**Jerod Santo:** The other thing is you end up rearranging a lot of furniture, for no real benefit. At the end of the day, you're supposed to be pushing your project forward. Anytime you're just rearranging furniture, which is like "We're gonna put things over here... Wait a second, that has to actually go here... Nah, I liked it better when it was the other way" - these are all things that are nice for procrasticoding, which is something I'm very good at, but they're not great for actually getting anything done. Any time you spend dealing with this other cruft, you're not making progress. Where we like to be is flow. We like to be where we're just like solving problems, making progress... No one's in the flow as they're renaming files and switching from camel case to snake case, or in a cyclical dependency hell... I mean, that's like the worst place to be, right? I can't even get these things to stinking require each other, import each other. But it starts off being beneficial, because now you're just following a convention. You have a convention, you're following it, it starts off beneficial, and then over time you can overdo it.

Speaking of things that are hard... Naming variables. You say "Naming variables correctly." This is your point; this is just like three words. Oh, sorry, it says "Name them correctly." Well, that's helpful, Matt. \[laughter\] Name them correctly. Lesson learned. But then you admit, again, this is an art. Name your variables correctly. Any tangible advice for us on this point?

**Matt Rickard:** Yeah... Unfortunately, that's why I called it reflections on programming, not maybe lessons...

**Jerod Santo:** Okay, we're trying to draw some lessons, but we'll just have to reflect with you.

**Matt Rickard:** Yeah... I mean, I think the only lesson is that definitely -- at least personally, I have a bias for naming variables as short as possible, and that is probably one of the most unhelpful things you can do, to your teammates and to your future self.

**Jerod Santo:** So you'll abbreviate things, and really condense them down?

**Matt Rickard:** Exactly. Single-letter, sometimes two or three letters... And honestly, that's not super-helpful; at least I've found.

**Matt Rickard:** Ooph!

**Matt Rickard:** You're saving a few spaces, but you're not really -- it's like the old adage, "Debug for six hours and I saved myself ten minutes of reading the man page", or something like that.

**Jerod Santo:** \[01:00:00.01\] Right. Yeah, we were debating the pros and cons of abbreviating variables on a Go Time episode that I happened to be upon, and I learned something there... Or maybe it was just coagulated there. It's from Dave Cheney, he said something along the lines of "The further away the variable is from being used, the longer its name should be. But the closer it is to being used, the name can be shorter and shorter", like to the immediate context.

A for loop is an obvious one, where it's like, "Yeah, i is fine." Because "Here's i, it equals this... I'm gonna iterate it, increment it, whatever. And then I'm done with it." And it's like, we all understand that. It's i. It's not actually confusing. But if you start naming your variables that are used further down, or elsewhere, maybe they're exposed somehow, i, or z, or foo, bar or bazz - these don't signal anything to somebody who doesn't have your immediate context.

That was a pretty good way of thinking about it, because I've always gone for this balance of clarity and brevity, but it's always been a hard balance to strike.

**Matt Rickard:** Would it be more helpful if it was - instead of i, if it was "iterate"? Or "increment"? That's where you can really drive that point home. Because if you can say "What would the extended version of i be?"

**Jerod Santo:** Iterator.

**Matt Rickard:** "...and would it be more useful?"

**Jerod Santo:** Yeah, I think in the case of a for loop, I think i is just totally fine. That's my take on it. I would use it --

**Matt Rickard:** Of course it is. But let's do the exact opposite, as a fun case. Let's expand it to its full word. Would it be "iterate", or "increment", or what would it be?

**Jerod Santo:** Yeah, I would think it's an iterator. That variable is one that you're using to iterate, so I call it iterator. Something like that.

**Matt Rickard:** So would it be more helpful or less helpful if it was for iterator? You know, if the variable was iterate, instead of i?

**Jerod Santo:** It's too much typing, man... Too much typing.

**Matt Rickard:** Too much typing, right? So the answer is no. Not more helpful.

**Jerod Santo:** This is why Matt likes to make them as small as possible, because it's just annoying. It's just a balance of "This annoys me", even with tab completion, versus "This has a useful symbol." I don't understand in Go, so like if err!= nil... You know, err. What's up with that? You're saving literally two letters - error, versus err. But it's a convention of the community, so everybody knows what it is. I don't think it's ambiguous when you see "if err". I understand that that's the error. But the abbreviation there to me is like "What am I gaining? I'm saving two letters..."

I understand when you take internationalization and you say i18n. That's a huge win for all of us, right? But err as an abbreviation for error just seems a little bit silly. That being said, we all do it, we're all on board. It's clear. It's not a problem, I just don't understand the win.

**Matt Rickard:** I don't know if that's short for error though... Is it?

**Matt Rickard:** Yeah, it is.

**Matt Rickard:** Well, isn't err an actual word itself though? Err...

**Jerod Santo:** Yeah.

**Matt Rickard:** It's a word. So is it a shortened version of error, or is it just a shortened version of the word.

**Jerod Santo:** Well, I'm sure -- and I know Matt, you're more of a Gopher than I am, but I think in the Go community when you use err, it's representing an error, isn't it?

**Matt Rickard:** Yeah, yeah. I mean, maybe there's a little confusion because error is the interface that it implements... So maybe there's a little ambiguity there, even though it is case-sensitive, I think... But yeah, I totally agree. I think when there's a convention and you use convention, stick to that.

**Jerod Santo:** Yeah, I agree.

**Matt Rickard:** If you were to say e instead of err, maybe that's a little wrong, because you're not sticking to convention, and you're shortening it a little bit too much.

**Matt Rickard:** Yeah.

**Jerod Santo:** Right, I agree. Whatever are the idioms of the language, or the runtime, or whatever it is, the community that you're working in - follow those conventions, because that's where clarity is just for free. You get it for free. And even if your idea is more clear to you, you're breaking convention, so it's less clear, almost de facto, to everybody else.

But in a case where there is no convention, I think Dave Cheney's rule of like "The further away a thing is from being used, the more verbose or more information has to be in the variable name" - I think that's a pretty cool rule of thumb. Obviously, rules are meant to be broken, so there are times where it may not make sense... But I thought that was an actual tangible way of a takeaway... Because I like to say "Hey, this variable name is terrible, too", but lacking any other information, like "Well, that's not useful." How could it be better? Well, it's 27 characters long, so... \[laughs\] \[unintelligible 01:04:13.20\]

**Matt Rickard:** \[01:04:21.25\] I think the point he's making there is like if you're gonna see it frequently, make it brief. Because you're gonna see it more often. The quicker you can get something done that you're familiar with, or going to happen frequently, probably the better. So the more often you're gonna read err versus error, as an example - if you read that 50 times a day versus once a week maybe, do it briefly.

**Jerod Santo:** Yeah. If you can't think of a good variable name, this is where Code Comic comes into place. Apologize. Be like, "This is not the greatest name ever, but I needed to finish this feature... So this is what I got. Please, think of a better name."

**Matt Rickard:** Yeah, open a consideration. Feedback welcome.

**Jerod Santo:** If you're confused by this variable name, you're just like me. I'm also confused. \[laughs\] Those are the kind of comments I enjoy... Because you get to chuckle even when you come back to it later, you're like "Oh yeah, I couldn't think of a name for this thing." Then you sit there and you're like, "Hm... I still can't think of a good one." But sometimes it just comes to you.

Alright, let's hit another one here... This one's a little bigger picture - "Technology does not diffuse equally." Now, there's more to your reflection than just that, but I wanna stop there and have you talk first. So go ahead and unpack that for us. Why do you think that's the case?

**Matt Rickard:** Yeah... I think of it as almost like kind of continuous learning. We can learn so much from these different sub-communities, especially as what it means to be a software developer; it means so much now... You could be a frontend developer, you could be a backend developer, you could be a data analyst, a data engineer... I mean, there's just so much that goes into actually writing code.

I think tangible examples are backend engineers can learn a lot about UI and UX from frontend engineers, especially what it means to make a user-friendly CLI, or user-friendly error messages. I think sometimes backend engineers over-index on complexity, and maybe not thinking of the user, and in a lot of cases it's another developer... It's one of those things where there's just so much we can learn by looking at these different sub-communities... So it's something that I try to keep an open mind to.

**Jerod Santo:** That one absolutely resonates with me. One example I cite often, which I'm still impressed by, is Dan Abramov's stealing of the Elm architecture for Redux. He came on the show back when Redux first started getting wide use in the React community, and he basically said "Yeah, I saw what the Elm folks were doing over there, and it was awesome, their architecture for state... And I decided that React needed that, so I built Redux." Shamelessly, great artists steal. And he gave credit to the Elm folks for coming up with a cool system that Dan learned about, and appreciated, and said "I'm gonna bring that over here." Everybody benefits, I think, when those things propagate across community bounds, for sure.

So the individual takeaways there I guess is kind of like "Keep your head up and know what other people are working on", or don't niche down, or don't go so focused in on a singular aspect of any specific part of the tech world. Is that the advice then? It seems like it is.

**Matt Rickard:** Yeah, I think your example from Dan is amazing. It's just ideas like that that can pop up in a lot of different places, and you can look at it and say "Oh my God, this would be amazing for the project or the part of the stack that I'm working on..." And I just think there's so much cross-pollination that can still happen, and it's just such low-hanging fruit in terms of how we can push all of this technology forward.

**Matt Rickard:** Yeah. We often think in camps; we often think "Oh, JavaScript, or Go", and this is an example we often run across with Go Time and JS Party - like, which one's better; always a competition...

**Jerod Santo:** \[whispering\] JS Party... \[laughs\] Sorry.

**Matt Rickard:** \[01:08:07.16\] But to be able to look beyond the lines of the camps, and say "What ideas have you implemented that would translate to our ecosystem and make sense for us to look at?" I think it's something that's been a hallmark for this show really, since inception. We began as the Changelog. We began not choosing the Ruby camp, despite our Ruby roots, in many ways. We didn't choose a specific camp and say "This is the Ruby Changelog." We just said "This is the Changelog", because open source was moving fast, it was difficult to keep up, and this show and the blog that came from it was an example of how to pay attention agnostically across the board, and to cross-pollinate those ideas. So I think this is core DNA for us and phenomenal advice from you.

**Jerod Santo:** Here's another awesome example... This happened just recently. I loved seeing it, because it means we're having a little bit of impact out there... So there is this idea with to-do comments, which talk about commenting and best practices, is that you always leave these to-do's lying around our codebases... And then nothing else happens; like, that's where they are. And usually, these things never get done. And a lot of times it's because you forget about it, or it depends on something else changing... Well, there was a cool idea coming out of (I think) the Rust community, and there's also a Ruby Gem for this, where they started having these self-destructing to-do's... Have you guys heard of these?

So it's like, you write your to-do -- it's like a static analyzer kind of a thing. You write your to-do's in a specific syntax where you can apply criteria to your to-do, whether it's based on a certain timeframe or based on a URL that has to -- whatever. I can't remember all the different things... But you can add these conditions to these to-do's. And then the tooling provides integrations, I believe, into editors, and different linters and stuff to float those to-do's... It's kind of like with Gmail, where you can push things off till later, and then they come back... That was a really cool idea.

Well, then somebody got inspired by that and they made one for Python. That person's name is Klemen Sever, and he wrote todo-or-die (they're called todo-or-die) and they're a todo-or-die Python edition. So we covered that one. We covered the Rust one, and then the Python one cropped up. And then somebody else was inspired by that, Brian Underwood, and he wrote one for the Elixir community, in Credo, called Credo To Do or Die. And Credo is like a linting tool, or a best practice following kind of analyzer tool for Elixir.

So now this concept, which was over there in the Rust world, of "Hey, what if our to-do's were better than what they already are?", that idea has picked up and kind of propagated around, and way more people get to benefit, because these people were paying attention to other camps, and willing to put the work in to provide that for their language of choice. It's pretty sweet.

**Matt Rickard:** That's awesome.

**Jerod Santo:** Yeah. Well, Matt, we've come to the end of our time here. This has been awesome. I appreciate you writing down what you did, so that we all can learn from your reflections. We can discuss, and pick them apart, and agree or disagree... Certainly, propagating good ideas and your hard-earned experience out there for other people to learn from. I think that's really cool. And I appreciate you writing up. It looks like you're blogging quite a bit lately; we'll have links to your blog - this article, everything else we've mentioned that JS Party episode as well in the show notes for everybody, the one that I've referenced with Ahmad Nassri, if you wanna listen to that discussion as well...

Anything else you wanna say, Matt, before we call it a show?

**Matt Rickard:** I mean, thanks for having me. I had such a blast, and I've been such a long-time listener, so it's fun to be on the podcast.

**Matt Rickard:** It's good to have you, Matt.

**Jerod Santo:** Yeah, it was lots of fun. We appreciate it.
