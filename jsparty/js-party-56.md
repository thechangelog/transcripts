**Safia Abdalla:** Welcome to JS Party! Thank you for joining us on this lovely Thursday afternoon or morning, depending on where you are. Today's topic is going to be super-interesting, and it's a little bit of a follow-up on last week's topic... We're gonna be talking about third-party and open source dependencies - how do we use them, when do we use them, and how do we support the ecosystem of open source dependencies.

Joining the conversation today we have myself, Safia, Chris, Nick and Kevin. How are you all doing?

**Kevin Ball:** Good!

**Nick Nisi:** Wonderful!

**Christopher Hiller:** Super!

**Kevin Ball:** I guess I'm supposed to say "Terrific!"

**Safia Abdalla:** We could just get all the adjectives out there... Throw in a supercalifragilisticexpialidocious, too.

**Kevin Ball:** You said an adjective right now...?

**Safia Abdalla:** Mm-hm!

**Kevin Ball:** Like, would I say I'm having a supercalifragilisticexpialidocious day?

**Safia Abdalla:** I think it's a flexible word. I think it's both an adjective and a noun.

**Nick Nisi:** It's quite atrocious.

**Christopher Hiller:** Oh, boy... \[laughter\]

**Safia Abdalla:** Alright, so let's dive into today's conversation. Following some of what happened last week with the event-stream debacle, a lot of people have been having discussions about supporting open source, using open source, and I figured we would continue that conversation with a little bit of a focus on how we interact with dependencies as software engineers.

The first question I'm really curious to know about from you folks is "How do you decide when to use a third-party dependency or a library during your development process?" What is the criteria in which you say "Alright, it's time for me to bring in another library, something outside of my control, into this code that I'm writing."

**Kevin Ball:** Wait, we're talking JavaScript, right? So the answer is "Does the package exist?"

**Safia Abdalla:** \[laughs\]

**Kevin Ball:** I mean, that's our approach, right?

**Safia Abdalla:** This is JavaScript, but if you're working in ecosystems that are like Java or Ruby, feel free to bring in those discussions, as well. I'd be curious to know if this is something language-specific... If the environment and language you're working in kind of dictates the criteria that you use when selecting dependencies... Because each programming language has a different profile around third-party dependencies and package management, and stuff like that. But let's go with JavaScript for now.

**Kevin Ball:** \[04:01\] Well, it was a little bit of a tongue-in-cheek answer, but sort of saying "In this ecosystem the tendency is to always reach for a third-party package", and I suppose what you're highlighting is that that is probably not always and everywhere the right tendency, but I think it is something that is almost cultural more than anything... Different language ecosystems have different cultures and different ease of installation. If it requires manually pulling things in and doing a local build, as compared to a simple add-a-line, or do an npm install save, like, that's gonna change how easy or hard it is, and that's gonna dramatically lower the barrier to pulling dependencies in.

**Safia Abdalla:** Yeah, I totally agree with you on that.

**Christopher Hiller:** I feel like I don't fit in, because I don't like doing that... I don't like pulling in very small packages; I like pulling in bigger packages that I don't want to write, or don't feel like I have the skills to write properly. So you'll never see me writing my own crypto, or anything like that... But for small things, like a simple (I don't know) custom functional method for an array, I would probably just write that myself, and then write tests for it.

**Safia Abdalla:** I'm curious to know, do you do that for things -- one of the most common use cases for me for small packages is trying to figure out if a string contains an email, or a link, or stuff like that... It's mostly like parsing and other mundane tasks that I don't have the patience to deal with. Does that fall under your criteria of things that you would write on your own, or would you bring in a third-party dependency for that?

**Nick Nisi:** That's a good question.

**Christopher Hiller:** I would always bring in something, or look for something... At the end of the day, if it's going to save me time, I'm probably gonna go for it. I find I have the most success -- I mean, maybe it's the other way around; I have the most failure when I try to implement something myself which turns out to be much more nuanced than I expected... For example, getting an executable in the user's path - that is not always a straightforward thing to do, so in that case I'd wanna pull in some package to do that for me, because it's going to hopefully cover more edge cases and corner cases than I would have thought of.

When I run into trouble is just trying to hand roll things that are -- just naively do it, you know what I mean? So yeah...

**Nick Nisi:** I guess I start from there and I just naively do it, and then use that as a learning experience. If it does get more and more complex, then I will reach for something or look to see what's out there... But I don't know. I guess it's good that we have differing approaches to this.

**Kevin Ball:** Chris, I think you brought up one of the key questions that I tend to ask myself when I'm looking at it - it's "How much time is this going to save?" Is this something that is a really complex thing, or is this something that is like a three-liner that I could also do myself? How close is the library to my desired behavior? If it's exactly what I need, that's gonna save me a lot more time than something that I'm gonna have to push and mold and move around and hack around often to get it to do what I want.... And also how well-supported is the library? If I run into an issue, is this something where if I file an issue somebody's likely to fix it? Is it something where if I submit a pull request somebody's likely to merge it, or am I gonna be having to, if I run into issues, support my own different branches of this library to get it to work?

**Christopher Hiller:** \[08:07\] It seems like two different questions to me... One is "Do you want to pull in some third-party dependency to solve this problem?" If the answer is yes, then how do we choose which one? Because if you're looking at npm, there's gonna be ten things out there that do roughly what you want, so how do we pick them? Once you've decided to use a dependency, what goes into that decision?

For me, the major red flag is if I go and look at something and see "Oh, this hasn't been updated in two years... Forget it." That's not gonna fly. I'm going to want something that has recent -- depending on what kind of package it is, how recent...? If it's more of a larger thing, I would want active development. If it's one of these tiny modules, maybe something in the last six months... That sort of things.

And then, of course, it depends what context you're doing this in? If you're doing it at work, if you're doing it for a hobby project etc. Where you work obviously has a lot to do with that as well.

**Kevin Ball:** Well, and it raises kind of an interesting question, when you talk about maintainership... And this is something that I think, frankly, I haven't thought about that much, but it's come up a lot recently, with the event-stream hack, and other things... It's like, "How do you determine which maintainers you can trust?" Is this activity that's in the last six months - is that from the same people that started this package, or is that from somebody brand new, who we don't know if they built up trust or not?

**Nick Nisi:** That's tough too, because it's just a rabbit hole of trust. That project might rely on a project that brings in ten other projects, that brings in a hundred other projects, and can you trust all the way down? Can you trust everyone along that chain to have verified everything?

**Safia Abdalla:** I think a big part of bringing in third-party dependencies is about risk management and how much risk you're willing to have in your application... Because I'm not going to say that we're going to live in a world where you get access to free open source packages that are always secure and mostly bug-free, with reliable and well-versioned APIs... Well, we might be able to, if people fund that, but we'll be discussing that later, so stay tuned... But yeah, I think a big part of it is just like what are your organization's and your own risk management techniques for a codebase?

One of the interesting things that kind of like struck me about the event-stream issue - and I think a couple of other things - is there's usually such a huge time span between when people realize that something fishy is going on, and then when it actually becomes mainstream news... In the case of event-stream, for example, there was a five-day gap between when somebody was like "It seems like there's some malicious code in here" and when it was actually discovered what the malicious code was and how it was impacting users, and how it worked, and all that. In those five days there was not a ton of engagement, at least not as much as there was after those five days.

I found it interesting that very few people who had installed event-stream or had it as a dependency were watching the repository on GitHub. Admittedly, it can get a little noisy, but it's one of those things where I feel like for me as an open source maintainer, people's engagement with third-party dependencies ends at install time, and they're not willing to participate in technical discussions about the future of the project, or just keep up to date on what's going on and what's being merged, who's doing the merging, and develop a personal understanding of the project... And I feel like that's the distinction between you installing a dependency and you installing an open source package, as I do think you have to engage with the open source part of it to be able to effectively use it in your own code.

**Kevin Ball:** \[12:37\] That sounds like a pretty big ask, especially when you look at the dependencies or dependencies' issue... The example I've been using is like if I install a vanilla, empty Vue application or React application from one of their templates, I end up with a thousand packages in my repository... From start new project that is using this framework, there are a thousand dependencies; there's no way I have the bandwidth to engage with a thousand communities. I don't even know what 950 of those dependencies are.

**Safia Abdalla:** Yeah. I don't think you necessarily have to engage with every dependency, but there are the key ones that you need to do. For example, in that case you would engage with the community that's working on managing that -- I guess you were saying it was like Create Voo App, or something...

**Kevin Ball:** Vue is coming from Vue CLI, but the event-stream one - that's sort of the example of the weakness of that, because that's two or three levels down. This is a tiny library that happened to get picked up to handle this... And it ended up targeting this Bitcoin wallet that was probably (I wanna say) two or three layers up the dependency chain. I think putting it on the individuals is probably doomed to fail. We need to put some sort of process and a technology helping solution in there, whether it's a system around validating dependencies and marking which ones are validated and have maintainers that have been consistent, or some way... We're trying to do this with security audits right now, with Npm Audit. I say "we", but I'm referring to the community; npm is trying to do this. But that's sort of reactive, in the sense that it's going out and auditing things, and then when something has been shown to be a security problem, then it puts it in there... But I think we need a proactive version of that, of "How are we marking libraries as well-maintained or unmaintained?" and marking changes of maintainership and tracking that through all of our tools.

**Safia Abdalla:** Yeah... And I think even if those proactive solutions end up being technical before you put something technical into place, you have to have a person-to-person understanding of an open source project and who's maintaining it, and actually follow a particular project that you're invested in as part of your ecosystem before just rolling out a technology solution. I think, again, this might be my bias, being someone who's had to maintain a few projects, as people do tend to be reactive. They only come in when there's a problem, or you've been discussing an architectural issue for months, and then they come in at the end of the discussion with an idea or a feedback... And it's a little frustrating when people feel like they are owed a certain amount of attention from a project when they're not giving it to it.

**Kevin Ball:** Oh, yeah... Yeah. I mean, I've had those where you have this architectural discussion for months and months and months, and then at the end of it you do a first implementation and that's when everybody wants to give feedback... They say "What are you doing?! Why are you architecting it this way? This is terrible!" And you say "We've been having this discussion and literally begging you...

**Safia Abdalla:** \[16:06\] "We've been talking about this for years...!"

**Kevin Ball:** ... to contribute your ideas." But once again, you could take that as a way to blame people, but I'm not sure that that's actually gonna make it better, because that's just kind of how people are. It's not limited to open source, right? People react to things that impact them; they don't go out searching for things. If we're looking for this to be an individual ethics problem, it's never gonna solve the problem, because people can't; they're overwhelmed.

**Safia Abdalla:** I don't think it has to be on the individual, but it certainly has to exist at the level of at least like an engineering team.

**Nick Nisi:** Do you think that there's a problem that there's a disconnect between the source that you can view and what might actually be in an npm package?

**Safia Abdalla:** Yeah, that's definitely another tricky thing - the thing that's on the npm registry is not the thing that's on GitHub.com, and that void does cause a lot of problem, again, especially with third-party dependencies.

**Kevin Ball:** Yeah, I think you need a way to have visibility; I'm not sure that you can require -- because people don't have to host their code on GitHub... That's one private company. But there needs to be some way to transparently see what is the code that got released in this package.

**Nick Nisi:** Sure. But a lot of teams, if they were gonna do a security audit, they'll probably start at GitHub and be looking at the code -- I mean, where the code is hosted, and looking at the source code of it to try and understand it, and trying to make a determination that there's no vulnerabilities... But what they're actually getting from an npm install could be completely different.

**Kevin Ball:** Yeah... I think you might be able to -- once again, it's hard to make requirements across entities. There are things you could do with hashing. You say "Okay, we're gonna do a hash of exactly the source code at this point" and then publish that anywhere -- like, if I look at a release on GitHub and I look at a release on npm and have that be a way to verify that... But you could also have npm say "We're gonna host the code in a way that you can browse it", for example.

**Nick Nisi:** You'll still run into problems though, I think... And I'm not advocating this kind of thing, I just think that it's a grey area where problems can easily come up. On Dojo, for example, we write in TypeScript and then publish UMD packages to npm, and I certainly wouldn't want to force the users of it to have to compile our TypeScript; they can just bring it in and use the UMD. But I wouldn't want to have that on GitHub, the UMD part, either. It's just a problem area, but I'm not sure that there's really a solution.

**Kevin Ball:** That's really interesting, yeah. I wonder how you would -- like, could you have a "Here's the compiled--", like, at compile time it generates something that you then check in... I don't know how you'd do that. And you can't guarantee, once again, that it's the same. Anything that is checked in deliberately could be maliciously manipulated. It's gotta be something that's generated.

**Christopher Hiller:** We're talking like people don't know what they're deploying. I mean, if you don't know what you're deploying, that's a problem, sure.

**Nick Nisi:** Well, that is what happened with event-stream, right?

**Christopher Hiller:** \[19:34\] Yeah... Okay, say you've solved that problem and you know what you're deploying... So you're in your development environment, you npm-install, or yarn-install, or whatever, you have your lockfile... I mean, you're gonna see what's in your Node modules, and if everything's working properly, that's what you're gonna get when you deploy it. You would look in there, obviously; if you look at the GitHub repo, that's not always gonna be the same stuff, so you'll have to look at your Node modules.

I wasn't present for the chat last week, but yeah... I don't know if we're going down that road, back into the discussion about event-stream, and stuff, but... Yeah, that's a tough problem, and you can either pin your dependencies or something, and then manually validate everything that you pull in, or you can just trust people not to do stuff bad, and deploy things, and it's all about how much time it's gonna take, and how much risk you're willing to accept, at the end of the day. It's either you hand-check everything, or have some tooling to help you do that.

**Safia Abdalla:** I think the interesting thing about event-stream - it was definitely very edge-case-y in the world of dependency-related security issues; there were just a lot of really interesting things that happened with that. But I think you highlighted something really important, which is having knowledge about what you're actually deploying, and I think that's just another criteria for deciding whether or not you are going to use a library - do you have a certain amount of confidence about the code that's written? Its quality, its longevity... Have you just done a look-through as an engineer to see if it checks all the boxes, without even looking at its dependencies, or anything.

Sometimes I find that that's something that I don't do often, which I'm ashamed to admit... And certainly, engineering teams I've worked with - there is definitely not a ton of looking through things to validate the code, the license, and code quality and all that. But I think it's getting better with tools that exist that allow you to confirm those things.

**Kevin Ball:** I'm gonna take issue with the statement that most people know what they're deploying... I just ran - for fun - install create-react-app, which is I think what a lot of people use to start building their React applications. Npm tells me that running that to create a blank React app added 1,775 packages from 679 contributors. So if I go in there and I look in my Node modules, ls node\_modules, I see packages like topo, tr46, svgo, ini, internal-ip, invariant, \[unintelligible 00:22:57.26\] I have no idea what a lot of these packages are, and my intuition is that most people who are deploying React apps also have no idea what any of these packages are, because they're probably two, or three, or four, or even -- I don't know how deep the tree goes, but if I deploy a React app built on this, I'm assuming that one of these contain an obfuscated malicious piece of code.

**Safia Abdalla:** Yeah. Like I was saying before, I think the issue of deep dependencies -- I'm forgetting the word for it now, the thing that's like a dependency of a dependency... It's on the tip of my tongue. Oh, my goodness...

**Kevin Ball:** Nested dependency...?

**Safia Abdalla:** I guess that might be the word... I think that's always just gonna --

**Kevin Ball:** Transient dependencies, from Mark R. in the chat...

**Safia Abdalla:** \[23:55\] Yeah, transient dependencies. Thank you, Mark. I think that's always going to be a little unsolvable, just because at that point you're -- like, if someone truly wants to figure out an export, they will, and it's very hard to be proactive about those, to a certain extent. There's a lot of safety checks you can do, and tasks and validations and stuff like that, but I think if somebody really wanted to do something malicious using some transient dependency, they could... But I think it's unfair to ask people to check those deep down dependencies, but it is fair to have them be aware of how Create React App works, what's being loaded, and the general architecture of the project. That's a reasonable ask... And what it's using just as top-level dependencies. Anything deeper than that I think that's where you need to have automated tools doing the checking, and just pray that people in the world are good and won't try to mine Bitcoins all the time.

**Nick Nisi:** I think that's a good place to start... And then you do get a little bit more security through the trust of something like Create React App, which is huge, and hugely popular... There's a little bit of comfort in if there is a problem, it's probably gonna be found out pretty quick, and you can kind of lean on that a little bit, but you might be bitten -- just like in the case of event-stream, \[unintelligible 00:25:25.19\]

**Safia Abdalla:** I think this discussion around how do you do security checks and audits, and what is the process for bringing in a third-party library is a good segue into the next segment, which is "What are some of the processes and steps that companies have for deciding whether or not to bring in external dependencies?" We'll be talking about that right after the break.

**Break:** \[25:56\]

**Safia Abdalla:** I'm curious to know for where you currently work now, or where you've worked before, or any interesting processes you've heard from other companies, do you have a checklist or a process for bringing a library into your codebase, and what does that process look like?

**Christopher Hiller:** For most of my career, that's been the case - there was really no process. "Does it do what you want? Will it help us ship? Add it. Who cares...?" The process has been no process.

Now I am at a larger company, so it really just depends what you're building and who you're building it for. Different clients will have different requirements; that might be certain licensing requirements, but if we're building anything at all, bare minimum licenses are gonna be checked.

But I don't know -- I imagine it varies per team to team a little bit as well, insofar as how stringent they are about adding dependencies. Maybe that's typical of any large company.

**Nick Nisi:** \[28:03\] I work for a consulting company, so I get to work with a lot of different teams, and it's kind of the same thing - it depends and varies from team to team. Sometimes we just come in and they've already got what they think we need all set up, and we're just gonna work with that, and we have to go through an approval process if we wanna bring in something else. Other times we'll let them know what we wanna build and they might give us direction on like "Oh, use Angular, use this...", and we might put that. And we'll actually put in our contracts with them "This is the open source that we're going to use." And I won't list everything; I'll say "Oh, we're gonna use Angular", but not the 10,000 dependencies that come with Angular. We'll just put Angular, and assume that they understand that.

But then if we need to bring in something else, it's usually just a discussion about why we think we need it, and yeah, licenses are checked as well... But assuming there's no problems there, then it's pretty easy to justify it.

**Christopher Hiller:** And do you typically check the licenses all the way down a dependency tree?

**Nick Nisi:** Good question, no... \[laughs\] We probably should.

**Kevin Ball:** That's kind of an interesting question, right? If a framework, for example, asserts that it's MIT-licensed, what happens if it pulls in code that is, for example, GPL-licensed?

**Christopher Hiller:** Companies won't use it. That's what happens. \[laughter\]

**Kevin Ball:** If they notice...

**Nick Nisi:** That's the thing, I think... I try and check the licenses of the direct dependencies that I will think of or need, and then rely on trusting those projects to have done the due diligence on the dependencies that they need, and so on... Which isn't perfect, of course, but it's all about whether they notice, I guess.

**Christopher Hiller:** As a side note to this, there is - at least for JS Foundation projects, and maybe even they have like a free thing for open source projects... There is this thing called FOSSA, and what they do is they automate license checks of open source projects. Mocha has this setup where you can go and look at the readme, and it has this information from its FOSSA analysis, which talks about all the licenses used, all the way down our dependency tree.

If you have something like that on your open source project, that might be able to help people who want to adopt enterprises that worry more about licensing than maybe your average company. So that's something to check out, it's called FOSSA.

**Safia Abdalla:** Mark R. on the Slack channel also just posted a link to a Node package called the NPM License Crawler. It looks like it is basically a license checker for all of the dependencies in your Node modules, and it just spits out a report of all of the different licenses you're bringing out, or bringing on... I think that accomplishes a similar task, if you wanna just be running the checks yourself as part of your process.

Thank you for sharing that, Mark!

**Kevin Ball:** Oh, I'm gonna run that on my Create React App empty thing and see what happens.

**Safia Abdalla:** I'd be curious to see, too.

**Kevin Ball:** Okay, so what do I need to do...? Install it globally, and run it--

**Christopher Hiller:** The thing that you see often in these types of tools is projects that have no license at all... \[laughs\] So what do we do with these?

**Safia Abdalla:** \[31:41\] Yeah... I think the onus is definitely on the maintainer. I think if you do see that you could probably just reach out to them and request that they add a license, I think most of the time it's just a lack of knowledge, or time, on behalf of the person who made the package to add a license. I think GitHub has made that a little bit easier, by adding the license as one of their dropdowns in package creation, and just by hiding it a little bit more in their UI and having it as part of their checklist for project health.

I'd love to see how those kinds of UX/UI decisions on GitHub's part have changed how many new projects emerge with valid licenses to start... But I think the licenses are one front to explore. I'm curious to know, have you worked at any organizations where they have had security teams that will audit packages before bringing them into your codebase?

**Nick Nisi:** I have, yes. That resulted in one guy manually reading source code, and then determining whether or not it could be used on a project.

**Safia Abdalla:** Interesting.

**Nick Nisi:** I don't think it was efficient. \[laughs\]

**Safia Abdalla:** Yeah... Was this person a security expert who was used by different engineering teams within the company, or what was the relationship like between that person and the engineering team? Were they part of the team?

**Nick Nisi:** Security was more their main thing, and they would work on that. And anytime you wanted to bring in a dependency, you'd have to go through them and they'd have to put their approval... And I know that they ran some automated scans, but then also did some manual things that I wasn't aware of... But the results were almost always comical.

**Safia Abdalla:** It sounds like you might have some interesting stories, but we don't have to dive into them... \[laughter\] I have worked at organizations where you had to fill out a form before you brought a third-party dependency in or started using some external SaaS, or whatever... And they were checking for things like "Oh, is this software project or this SaaS service hypo compliant? Do they serve their website through SSL?" There were a couple questions that you would have to fill out and submit as engineering managers about the project before you could use it.

I think that's the most level or process I have seen any of the organizations I've worked on, where you kind of have to go out of your way to check things yourself, and fill out the information, and then you're also responsible for certifying that the information you provided is accurate... And if stuff goes wrong or something is off, you have responsibility over that.

**Kevin Ball:** I have the answers now, by the way, about the licenses... It took me a while to put together the Bash string to separate out their nonsense, and strip white space, and \[unintelligible 00:34:48.02\] but I count... Let's see - one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twenty-one, twenty-two, twenty-three, twenty-four, twenty-five, twenty-six, twenty-seven unique license strings, including combos... So this is Apache 2.0 or NPL 1.1. Some that I've never heard of... What is WTFPL? I've never heard of that.

**Christopher Hiller:** \[laughs\]

**Safia Abdalla:** I think it's whatever the f\* you want. I'm cursing a lot in this podcast episode, I'm sorry.

**Kevin Ball:** So there's WTFPL, there's ISC, which I also don't know what that is...

**Nick Nisi:** That's the default one.

**Kevin Ball:** The default one, okay...

**Nick Nisi:** Or if you did npm init, it gives you ISC as your license string in there.

**Kevin Ball:** Okay.

**Safia Abdalla:** Yes.

**Kevin Ball:** There's various versions of CC (Creative Commons) different ones, MIT, MIT X11 (interesting), NPL 2.0, Public Domain Unknown, HTTP (interesting), and one that just says "See license in license.md." So the tool is not perfect, but it gives you a sense of the varieties... No GPL showing up, so I guess I can keep using Create React App, but...

**Christopher Hiller:** \[36:08\] Please don't license your code under Creative Commons...

**Kevin Ball:** Yeah, I wonder if it lets me dig into which ones come from which license... I think I can output to a csv or something that would let me see that, but... Yeah, kind of an interesting exploration... Like, what is CC BY 4.0 versus CC BY 3.0?

**Safia Abdalla:** I think they're different versions of the Creative Commons license. I might be wrong though...

**Kevin Ball:** Yeah. Interesting that people would use that for coded dependencies.

**Safia Abdalla:** Yeah, I've never seen that. It would be neat to see which projects are doing that in particular. So if no one has anything else to share on organizations having a process for bringing in external libraries, I'd love to jump into the discussion on how both you as an individual, and then your company contributes to a healthy open source ecosystem, and what does that relationship look like, and what you and your organization can do to make sure that open source packages are thriving.

I think we can take a little bit of a break, and then we'll jump into that discussion. I'm sure it's gonna be an interesting one.

**Break:** \[37:30\]

**Safia Abdalla:** We're back. We are discussing ways that your organization can contribute to a healthy open source ecosystem. During the break we got a conversation going about non-traditional ways that your company can fund open source projects. One of the things that was mentioned is donating engineering time to an open source project...

So having somebody who's got like a day or a couple of hours a week to contribute to open source software that their company uses. We were talking about whether that's considered a form of funding, and coordinating all that and other fun things... So we're gonna continue the conversation from there.

**Kevin Ball:** This idea of people vs. money is really interesting, because there's kind of multiple ways that a company might have their own engineering time focused on open source. You have the Facebook model, where they have a set of Facebook open source projects that Facebook engineers work on... And they probably also have some folks who work on third-party things, but really there's this corporate-run open source project type model. Then there's the model where folks are using a technology and they'll hire somebody who is a core developer there and have them dedicate either part or full-time towards working on that.

For example, the creator of the language Elm was hired by a company that uses Elm, and he was paid just to work on Elm... Because they use it, they wanna ensure the robustness of the tools they're depending on, things like that.

And then there's the "I use this project and I'm allowed to put some time into..." - say I run into a bug, I can go and fix it and submit that back, or things like that. All of these are different models within the context of "We're spending engineering time to support open source."

**Safia Abdalla:** \[40:15\] The one that I've had the most interaction with is probably two and three, which are situations where -- you know, I think with something like React it's a little bit different, because Facebook was the entity that open-sourced the project; it was something internal that was then made public... So I think that's a little bit different than someone independent on any company starting a project and then getting support for that.

The examples that I've worked at - generally, the way the relationship works out is the open source project has some sort of roadmap or some sort of action items that need to get done, and the company that is going to be funding engineering time on those action items has some sort of interest in seeing them be done, for their own internal reasons, or whatever... And they make I guess an in-kind donation or commitment to have their engineers working on it, and collaborating actively with the open source contributors who are not affiliated with that company.

There's always an interesting dynamic when you have a team of people who are just open source contributors, who have started the project or are very invested in it, and then a group of people who get paid to work on it by their companies for a certain amount of time. They tend to come in with different perspectives on how to solve things and how to allocate resources just by virtue of their different situations.

Then the third is more of like the Ruby model... I've not had an experience personally with that one yet. So I would say two is the one that I've had the most experience with.

**Christopher Hiller:** What's the Ruby model?

**Safia Abdalla:** That's the one where because a company is invested in a technology succeeding, they have an engineer working on it... And I think that's the case for Shopify, which is deeply invested in Ruby, Basecamp, which obviously created Ruby and is still deeply invested in it...

**Kevin Ball:** Created Rails...

**Safia Abdalla:** Rails, yes. So things like that, where you are like -- I guess it connects a little bit more so with two, but I think in the case of two it's more than one or two people working on something. It's like a whole team that's partly contributing to open source.

**Nick Nisi:** What I've picked up on -- you know, I haven't worked at a super-mega-corp for very long, about a year, and before that I worked for small companies... But with these larger companies, and in my interactions with people at larger companies, it's often the case that it is really difficult -- it's so difficult for a developer who uses some third-party dependency to actually contribute, because there is a bunch of bureaucracy involved; it's gotta get signed off by legal, and all this stuff...

Where you're getting the big problems -- it's like, the more dependencies you pull in, like if you're in a JavaScript ecosystem, the harder it even becomes, because you can't spread... It's just way too much red tape if there's like 20 projects you wanna contribute to versus one.

\[43:53\] I think a question that we can -- I mean, I don't have any magic solutions, but something we can start thinking about is how can we make it easier for larger companies, and their legal departments or what have you, to allow their developers to contribute to these open source projects? Maybe that is some sort of certification, I don't know; I'm certainly no lawyer, but... That's kind of a problem I've noticed. I'm not sure where to go on that one.

**Kevin Ball:** That's really interesting actually, if you look at what Tidelift is doing on the financial side, or what some of the foundations like the JS Foundation do on the financial side. Those are organizations that are set up to allow big companies to financially contribute to the projects that they're involved in, without having to create relationships with all the individual developers.

I wonder if you could set up a similar sort of arrangement where you are asserting things about those licenses such that legal doesn't have to check them all out individually, but rather can say "Okay, these are all okay for our people to contribute to."

**Christopher Hiller:** That's a cool idea. I wonder about though if you were to take a foundation, say the -- whatever the merged Node and JS Foundation looks like, hypothetically, and you wanted to add this thing to it that said "Okay, you are a member, so therefore we have vetted all these projects..." I mean, basically, anybody who would be a member of that -- I mean, this is a trade foundation; any member company would need to vet any project added, you know what I mean?

That would potentially cause some conflicts where maybe a project wants to join the foundation but it competes with a product owned by one of the member companies. I feel like that's something that needs to happen separately, from at least a trade organization, or that reason that it's just like there's too much potential for conflict of interest.

**Kevin Ball:** That's interesting. So the vetting is not just sort of legal standpoint, but "Are we contributing to something that's potentially a competitor?" and things like that.

**Christopher Hiller:** Yeah, absolutely. Companies are not just worried about the licensing. They wanna make sure that we're not contributing to a competitor.

**Safia Abdalla:** There's only so much that an independent open source project can do... From some of my experiences with it, it's not actually as hard to get all of the paperwork done as some people might make it seem. Obviously, I think it depends on what team you're in... It's very specific situations, but I think for some of the people I know who work at big mega-corps and contribute to open source projects I'm affiliated with it's not the worst thing in the world. Could it be easier? Yes, but it's not boundary-setting, or like a complete barrier to open source.

I think an organization has to figure out internally to set up a smooth and quick process for getting people into a position where they can quickly contribute to open source projects that the company has vetted out.

It's one of those things where if your organization is committed to making it happen or values open source, they're going to invest the time in making that process smoother... And if they're not interested or super-committed to open source, then it's not gonna be as big a priority for them.

I think I generally tend to place the onus on the company with money and lawyers to figure this out, as opposed to the community, because ultimately it is an internal process, not something that open source projects have too much say in.

**Nick Nisi:** \[48:15\] And another perspective that they could potentially take from a marketing perspective is if you're allowing your developers to occasionally contribute to open source projects, that's a big marketer for future developers that you want to hire, in a lot of cases.

**Safia Abdalla:** Yeah, I've definitely seen that. A lot of companies where they have one person come in and start contributing into a project, and they realize there's this whole talent pool that they wouldn't have had access to through their traditional recruiting means... And recruiting is really expensive, especially for engineers, and it can definitely pay off if you use open source contributions as a recruiting pathway.

**Nick Nisi:** Absolutely. And if you look at someone's GitHub repo when you're thinking about hiring them, you should only do that if you're also actively letting your employees contribute to open source.

**Safia Abdalla:** Yup.

**Kevin Ball:** What do you all think about the trend towards funding people to work outside of companies on open source projects? ...whether that's through formal organizations -- like, I know the Ruby community has Ruby Together, where they were fundraising, and they literally hired people to work for Ruby Together, to work on Ruby infrastructure... But then there's also these more informal things, like Open Collective, projects getting themselves funding via that, people doing stuff on Patreon, or the Tidelift subscription, trying to fund essentially developers to directly work on open source outside of the context of a company.

**Safia Abdalla:** I have experience with that... There have been two occasions in my life where I've been funded to work on open source. One was through a grant from a non-profit entity to the open source project I worked on, and the other time was a private donation from a company that was invested in the project.

It wasn't Patreon or Open Collective; it was a bit more -- I guess "formalized" would be the word for it... And I found it really valuable... Just having like two weeks, or like a six-month contract to just be paid to work on something and invest all my time in it was such a huge boon to the open source project, because I had the time to just focus on something, and get it done... And it was also just fun for me to be paid for something that I love to work on, which is the ultimate life goal for a lot of people.

I think when it is a private company or a grant from a foundation, or a non-profit group, or a government to work on something, it can be really successful and great. I've also seen situations where they've been able to employ entire teams of people, because they got multi-million-dollar grants for a project.

The Patreon thing I don't have too much experience with... I don't know how I feel about it, because I feel like with Patreon and Open Collective and stuff like that a lot of it comes down to celebrity a little bit, and people are more likely to donate to the maintainers and contributors who are most visible in a community. That might be the person who's the most active and doing the most work, but it might also not be... So yeah, those things are always tricky, because they tend to be mostly funded by private individuals, as opposed to companies, in the case of Patreon specifically... And generally spread through word of mouth or social media, where being a name in the industry plays a big role in how likely you are to get funded. So I think those are like the two thorns with that situation.

**Kevin Ball:** \[51:58\] Yeah, it seems like Open Collective in particular -- and the successful folks I've seen on Patreon, actually try to bring companies into it... The individual donation stuff really doesn't scale very easily... And it's a question of like "Should it be individual engineers donating?" That seems like a pretty sketchy way to support this stuff.

Where I've seen some more success - people are essentially making a business out of it. Evan You, who does Vue.js, the big donors are doing it because it gets their brand in a link on the pages of the docs that are sent over. So you're turning it into a business, essentially.

I'd love to see something where we were well-funding people to work in this, because I feel like this is the infrastructure of modern software. Open source is what makes modern software much more productive, and faster to get to things, than it was five or ten or even however long ago... But I'm not sure these models are scalable. I'm wondering, is there a scalable model out there for funding independent open source development?

**Christopher Hiller:** I missed the last minute or two of the chat, but I feel like yes that is -- it doesn't work for everybody. It doesn't work if you aren't freelancing. It doesn't work if you're already working two jobs. It doesn't work if you're a single parent. You can't pay somebody a thousand dollars a month and pretend that's enough to live on.

If we wanna go funding people, the holy grail is you need to pay people essentially a competitive salary. A lot of people, and myself included - I have kids and a mortgage, and I don't wanna be a freelancer anymore. I want health insurance, if you're in the United States... Gosh, well that's another thing, too - health insurance for open source developers.

**Safia Abdalla:** Yeah.

**Christopher Hiller:** It doesn't work for everybody, it can be difficult to -- if a project in particular is receiving funds instead of an individual, it can be difficult to... It's political about what you do with that money, as well.

What I would love to see, at least for my project, is just give me your development time. That's what I think is really going to sustain open source. We need that in addition to funding.

I saw this great thread on Twitter - I don't have it handy - about how donations are incredibly problematic for a lot of companies, because you need a product... You need to be purchasing something in order to spend money, and they make it really difficult to just give money away, so... What are you buying?

One solution was, "Well, you're buying support." And I'm thinking, "You know what, I'm not a support desk. I'm a developer. I don't wanna support my project, I wanna maintain it. And I don't wanna be on call, or what have you." Support is also not the be-all solution for it, unless you're Red Hat, or something... But we all know how that ended.

**Kevin Ball:** The billion-dollar acquisition, right? \[laughter\]

**Safia Abdalla:** Who was that acquired by again?

**Christopher Hiller:** IBM.

**Safia Abdalla:** \[56:00\] Okay, right. In both of my cases, there was a non-profit entity that companies were able to donate their funding to... Unfortunately, I'm a little misinformed about how it worked internally from their end, but because they were working with another incorporated entity to process the funding, it was a little bit easier, and they had their stuff forked out internally... And I think that's what tends to be the most helpful - it's when a corporation is talking to another corporation and sorting things out that way, as opposed to a corporation donating to a Patreon or an Open Collective.

I think Open Collective technically is a 501(c)(3), and all of the projects under its umbrella are physically sponsored projects, so it might work a little bit more smoothly.

**Christopher Hiller:** Open Collective is for-profit.

**Safia Abdalla:** Oh. Okay, cancel that. I am misinformed on the topic. For the group I'm affiliated with, the parent organization is a 501(c)(3) and all of the open source projects under its umbrella are physically sponsored entities... So it tends to work out easier, just because there's an incorporated tax entity behind all of these open source projects.

I guess that is not the case for Open Collective, which is interesting, because \[unintelligible 00:57:18.23\] But yeah, someone on Twitter made a really funny joke that if a company has a fax number, then corporations will move really quickly to work with it, because it's supposed to be established and prestigious... Kind of just a tongue-in-cheek comment about how companies like to work with older, established organizations.

So all you have to do to get funding for your open source projects is get a fax number, and start putting it on your letterhead and your readme.

**Christopher Hiller:** In the Request for Commits podcast (Rest in Peace) there was a great episode about grants for open source work... Yeah, you can get grants, but I was thinking "I wanna apply for a grant", so I started looking into it. I wanted to apply for Mozilla's thing; Mozilla has an open source grant they give out... And it turned out they really did not want to give a grant to an individual. They only were really comfortable with giving a grant to an entity of some sort, so that's also kind of a stumbling block, I think, for a lot of people.

If you're just an individual, you're gonna need to find some sponsorship, maybe by a foundation, or somebody who wants to -- I don't even know how that works or why it is the way it is, but that's kind of tough.

**Kevin Ball:** Yeah. Well, there's lots of people trying to solve this problem, because I think we acknowledge that it's a need... But the dollar figures that people are able to get to right now are still so low. If I look at Open Collective, the most successful project on Open Collective is Webpack, I think largely because it had Sean Larkin doing incredible marketing for it... And their yearly budget is just under $400,000, which is enough to pay for two full-time engineers, maybe three... Maybe.

Tidelift is a really interesting proposition. They're packaging things together and saying "We're gonna provide professional support in a way that funds maintainers..." yadda-yadda-yadda. If I look for very popular packages on there, like Babel, their monthly estimate of how much money would flow through to Babel is $10. Babel Core is $40. Ruby on Rails, $400 monthly. So we're talking very small amounts of money here, and there have been a couple folks who managed to support themselves with Patreons, but... Yeah, it's a rough market.

\[01:00:19.18\] It's infinitely easier to get yourself a consulting gig if you're wanting to do this type of thing, and be independent, which is what this involves. So yeah, I don't know what the solution is. None of the attempts out there seem to be getting anywhere close to scale.

**Safia Abdalla:** I think some good action items for anyone who's listening and does wanna give back to the community or start to be more formal about this is start talking to your engineering management about figuring out a way to dedicate some of your time to contributing to an open source project in your stack. It's probably gonna take a lot of effort, but depending on how management feels about it and how things work at your company, you can get into a position where you're spending a couple of hours a week just contributing to open source. That's one avenue if your company doesn't have the infrastructure to donate to an entity, or all of that stuff.

Then also one of the things that I thought was really interesting is if you're using an open source project, just email people and ask them to come in for training or a talk, and pay them for it and have that serve as like a purchase they can make, if the contributor is willing. That always works, as well.

So there are a lot of avenues for you if you're willing to advocate for it, to have your company engage and contribute to a healthy open source ecosystem.

**Kevin Ball:** And you can help without diving into code. There's lots of additional things. Project management goes a long way in open source... Or even just triaging issues and being able to help... Somebody filed an issue - does this have all the information we would need to reproduce it? ...all those different things. There are many, many ways to contribute.

**Safia Abdalla:** Yeah, that's a great point, too.

**Christopher Hiller:** That's true, but at the same time there isn't this culture or hacker ethos around project managers, or seemingly designers as well. It's really tough to find somebody who's a designer who wants to contribute regularly. It's interesting, we say "Yeah, we want this stuff", but some of that needs to come up from those industries, or those professions... I don't know.

**Safia Abdalla:** Yeah. I think a big part of it is just starting to phrase open source contributions not as code contributions, but really as a way to build your personal brand and advance your career and your skillset outside the walls of a corporate entity. The work you do in open source is your work and your way of showing your skillset and talent, and you don't need anybody else to vouch for it \[unintelligible 01:03:05.00\] that ecosystem.

Tying it into someone's personal brand and career is a great way to incentivize them to contribute to open source, as opposed to just "Oh, come hack with us", which might not necessarily suffice for a lot of people.

**Christopher Hiller:** And that's cool if you have time after work to do it, but... I mean, what I'd really love to see is this coming from the companies, that get so much value from open source... Pushing their project managers and designers and their technical writers and everybody else to contribute to these projects. I don't know how to make that happen, obviously, but I feel like that's what should happen.

**Safia Abdalla:** I do have hope for the future as bigger companies like Microsoft and Google start to be more visible about how they're engaging with open source. I think that kind of acts as a lighthouse, and like a model to follow for other companies in the industry. I think overall there's hope...

**Kevin Ball:** \[01:04:09.21\] I think we do need to be very careful about how we're talking about this... Because talking about it as a brand builder - that falls into the same trap as like "free internships." These are ways to get ahead if you already have the privilege of having time and money to be able to do things... But we have companies making billions of dollars on open source software. And so long as we build it as "This is something that you're doing to get ahead", we're leaving out huge numbers of people and we're not putting the responsibility on the people making money from it. That's an exploitative environment, just like free internships are. I totally get free internships if you don't have any money, but tech companies have money.

**Safia Abdalla:** I should clarify this... The personal brand thing was not promoting free internships. I'm very well aware of how exploitive open source can be, but I think the important thing to know is that all of these different motivations can exist in a healthy ecosystem, with each other. You can be a for-profit entity that funds time for your employees to work on open source because you care about their own brand and their own career advancement; you also care about some of the marketing and recruitment work that open source will help you do.

There's a lot of ways to kill two birds with one stone, or multiple birds with one stone, just by contributing to open source... And it's a way for you to benefit your company, to benefit the ecosystem, benefit your employees, benefit your recruitment efforts... It's not just one thing. There's so many different ways to market it and look at it, and it's just about who you're messaging and what are the particular benefits that you share with them... Because the message is different when you're trying to get Google to fund your project, versus getting the government to fund your project, versus getting a foundation, versus just getting college students to be more engaged. There's all of these different -- it's all marketing in the end, I guess that's what I'm saying.

**Christopher Hiller:** Exactly.

**Safia Abdalla:** But I think there's a lot of ways it can help people.

**Kevin Ball:** The older I get, the more I believe that life is all marketing.

**Safia Abdalla:** I really think so, too. That was a super-interesting segment; it ran about as long as expected, and I think we learned a ton of different things, and had a lot of really interesting ideas come up.

Thanks, everyone, for joining us on this edition of JS Party. If we have any links, they will be down in the description, along with the transcript for this podcast recording. Thanks again for joining us, and we will see you next time.
