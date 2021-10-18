**Jerod Santo:** Jessica, you're a software developer, you're a consultant, you're a symmathecist. I know what a software developer is, I know what a consultant is... What's a symmathecist, and why do you use it to describe yourself?

**Jessica Kerr:** A symmathecist is an active participant in a symmathecy. A symmathecy - I didn't coing this word - is a learning system made of learning parts... Such as the economy, which is made of businesses, but every business is responding to every other business, and the buyers, and the people, and the environments, and stuff.

**Jerod Santo:** Right. It's like a living thing almost.

**Jessica Kerr:** Yeah. It's not bounded like an organism is. Somebody said that ecosystems and economies are not organisms, but organisms are ecosystems with a very strong boundary.

**Jerod Santo:** So how does that apply to software then? I'm assuming it does...

**Jessica Kerr:** Yeah, so our teams are definitely symmathecies, because the team as a whole learns as each individual learns. And we're constantly learning from our interactions with each other. So Ackoff says "A system is not the sum of its parts. That would be an aggregate."

**Jerod Santo:** Right. It's more than that.

**Jessica Kerr:** Yeah, it's a product of its relationships. That's why we call it a system. But a symmathecy points out that each part is a product of all our past interactions, and that's even more powerful.

**Adam Stacoviak:** It's like future you is only the future you because of the current you.

**Jerod Santo:** And past you.

**Jessica Kerr:** Yeah, yeah. Everything we do has some side-effect on the world, and the next version of ourself. Just like in the actor model.

**Jerod Santo:** Okay, so isn't that a little bit overwhelming though?

**Jessica Kerr:** Is it overwhelming...?

**Jerod Santo:** Doesn't that put a certain amount of weight and gravity to every single thing you say and think?

**Jessica Kerr:** \[04:20\] You know, I think really it puts a gravity on where we choose to put our attention. In that sense, the control we have over future us is by where we choose to put our attention.

**Jerod Santo:** So where are you putting your attention nowadays?

**Jessica Kerr:** A bunch of places... See, it's May now, and we've been in a quarantine for over two months, and so you'd think we'd have more time, but I find that is not the case. It turns out that when you cook at home every night, you have to wash dishes every night, and do so much laundry...

**Jerod Santo:** Yeah.

**Jessica Kerr:** ...and keep on good terms with your family; I can't just ignore them, and let the relationship deteriorate until we see each other again... So some of my attention has been on consciously maintaining the relationships within the house, because we really need to continue to like each other... So far, so good. We like each other.

**Jerod Santo:** Well, that's a win.

**Jessica Kerr:** Also, now that I can't go to conferences and talk to a bunch of random people, I have found it easier to focus on something more technical. Avdi and I started an app, and this has gotten us to try a new Rails 6 implementation in Heroku... And we're also learning a lot about Docker, especially in VS Code.

And let's see - for work, I'm learning about secure code... Oh, and we implemented Honeycomb in our toy app the other day; that was very exciting.

**Jerod Santo:** Okay, so you're having some fun, it sounds like it.

**Jessica Kerr:** Yeah, piles of things.

**Jerod Santo:** Yeah. I wanna get into some of that VS Code/Docker stuff, because I'm completely ignorant of that domain... I mean, I'm not ignorant of VS Code, and I can use Docker a little bit, but I don't understand exactly how they fit together... But first, I don't wanna bury the lead, because as we were preparing for the show, one thing that you mentioned you wanna talk about, and I feel like if I wait till the end to talk about it, it's like "Come on, people, give us what we want." You teased up the single most important thing to know as a dev. Gotta get that right off the top, don't we?

**Jessica Kerr:** Okay, yeah. The tricky bit is it's different for every dev, or at least every team.

**Jerod Santo:** Okay.

**Jessica Kerr:** But the single most important thing to understand is how your system works; not just any system, not any abstract architecture... The specific system that you work on - why does it work, and what impact does it have on the world, and how does it accomplish that?

**Adam Stacoviak:** Could you use a well-known example out there to be less abstract?

**Jessica Kerr:** Oh, sure.

**Adam Stacoviak:** Let's say like Uber, for example; a large system. I'm just thinking out loud.

**Jessica Kerr:** Yeah, I don't know how Uber's system works, but it also depends where you are in Uber. For instance, if your team works on -- let's go with a piece I can see, the mobile app... Then you need to understand, from the outside in, generally how ride-sharing works and what the point is. And then at a lower level, you need to understand the systems that your app interacts with specifically, and then you need to understand the internals of how your app works, and how it deploys. So you need to have a good idea of who is interacting with your system and what they wanna accomplish... But then intricate knowledge, at least part of it, that as a team, you collectively need this knowledge, so as an individual you have some subset of it.

**Jerod Santo:** Right.

**Jessica Kerr:** \[07:57\] You need to understand how iPhones work - if you're on an iPhone app - enough, and you need a good understanding of your programming language. But the most important thing is what your system is trying to accomplish, the business domain, and how the different pieces fit together. And I think a lot of the engineering principles and techniques and practices that we use - people talk a lot about "You have to use TDD, you have to use SOLID principles..." Well, okay, SOLID starts with Single Responsibility; first, you have to understand what the responsibilities are. A lot of these are just driving us toward a deeper understanding of the system we work on, making us think about it.

**Jerod Santo:** So I can see as a single developer of a team, it's easy to get in your particular vertical (for a lack of a better--) like your little sub-system, and understand that intimately, and know where every line of code is.

**Jessica Kerr:** I wouldn't say that's easy. That's not easy. That's really hard. It's easy only when you wrote it. If you've been on that team for 15 years, okay; but that's because you wrote a lot of those lines of code, and you were there for their creation. But if you join a team, that kind of intimacy is incredibly hard to build. This is why a developer coming into an existing project is not productive for 4-6 months, even if they know the language, even if they know the frameworks and the things that they put on the job description. You have to know that particular project, and the people who are already there, who think it's easy to get that knowledge, don't know how to explain it.

Transferring that mental model of how the pieces fit together, where everything is... The hardest part of writing code, even before naming - you have to decide where to put that code, and that's hard. And it matters. So transferring that mental model is way harder than you think it is.

**Jerod Santo:** So what are some ways that people do it? You've got documentation, you've got in-line comments, you've got tutorials...

**Jessica Kerr:** Yeah, yeah, you think that helps... None of those help nearly as much as you think they do. Because when you write that documentation, it says exactly what you meant, in your head, to you. But the people coming in don't have the same context.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well, what do you do then? You sit them down, and "Let me tell you a story. 15 years ago..."

**Jessica Kerr:** That helps, actually, yes. Getting the history of the system is hugely helpful.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** You'd be surprised how much those old stories make the names in the code make sense, for instance.

**Jerod Santo:** Right.

**Jessica Kerr:** And then you don't look at it and go like "God, who wrote this crap?" You go "Oh, I see that previous circumstance that was a constraint, and that I heard about 10 years ago. I know they've broken it now, so I know it's okay to fix it now."

**Jerod Santo:** Yeah. It's like, every bad decision in code was a good decision that just didn't age well. Or it obsolete now. Like, "Well, that had a reason... There's a reason that line's there." It probably is obtuse to you. You have no idea why it's there.

**Jessica Kerr:** Right. But the person who wrote it then, in the time - not that person now; that's a different person... But yeah, it made sense to them. It worked.

**Adam Stacoviak:** Yeah. This idea of story is pretty interesting, because we just covered this on Brain Science, a future show coming out... It's probably out by the time this podcast is out there. It's called "The Power of Story." And it's more like the context... So think of your favorite movie where there's a villain, doing all these bad things, and you don't like them... But then they give you some of the back-story about why they are the way they are, and suddenly you're like "I'm rooting for them." It's because of context. If you understand the scenarios of why a back-story really matters - you understand the story of why they made these choices, why in this context this solution made sense, why this system works in this way... Then you can sort of unravel the whys and the hows of the choices and reimagine the future of it because of this context, this back-story.

**Jessica Kerr:** Yeah, you can reimagine a future that includes that person constructively.

**Adam Stacoviak:** \[12:03\] Yeah. I like this idea of fireside chats, or campfire chats, or whatever, around "This is why our system is the way it is." That would make sense to me. Is that a thing? Do people do that often in teams?

**Jessica Kerr:** That's why going out for beer is often very helpful, because it's over beers that you talk about how things are the way they are, and how they used to be, and you tell the story of that incident that you still have scars from, organizational scars...

**Adam Stacoviak:** True.

**Jessica Kerr:** The other thing that helps is pairing.

**Jerod Santo:** Right.

**Jessica Kerr:** And see, both of these things, like you pointed out - when you hear the story, you can kind of put yourself in that character's place... It's through experience that we learn, and it's through shared experience that we converge our mental models and our vocabularies and our viewpoints of the world.

**Adam Stacoviak:** I don't wanna give too much of this show away, and it's not the point, but Dr. Mireille Reece, my co-host on that show - she unpacks some research around how we learn differently (better, essentially), through stories. The way it connects information, the way emotions are invoked, that emotion response etc. transmits and keeps memory differently than in no-story form. So there's a neuroscience perspective to memory and learning when it comes to storytelling.

**Jessica Kerr:** Yeah.

**Jerod Santo:** It seems like putting a lot on ourselves, or a lot on developers, where it's like, it's hard enough to get the stinking computer to do the thing you want it to do, but then you also have to be a storyteller, and a beer-drinker perhaps...

**Jessica Kerr:** Yeah, you have to be human!

**Jerod Santo:** Yeah. That's asking too much, Jessica. Come on!

**Jessica Kerr:** \[laughs\] Because every human is a storyteller. You don't have to drink beer, you do have to drink some sort of liquid. That's also part of being human. And interacting with each other is part of being human, which -- I mean, Lord knows, we're feeling that these days...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** When your job is making the system, and all you wanna do is make the system, and not have to be the everyday human, that's tough though, right?

**Jessica Kerr:** Well, your system isn't just the software, that's the thing. Just like you need to understand not just the code, how the code works together, you need to understand how it deploys, because that's the way you change it. And our job isn't writing code or designing code, it's designing change in the system. So we have to understand how the system changes... Which includes the deploy system, but also includes every other human who's involved in the changing of it?

**Jerod Santo:** How can we achieve that?

**Jessica Kerr:** We do that naturally, as people, when we talk to each other. It's just that we think that's not productive, but actually -- you know, when I go into the office for eight hours, way back in the day when I got to go to an office... I've been remote for a while, and--

**Jerod Santo:** \[laughs\] You're feeling it.

**Jessica Kerr:** Well, yeah, because just this year I decided I don't wanna be remote anymore, and that didn't work out... \[laughs\]

**Adam Stacoviak:** It backfired on you.

**Jerod Santo:** Bad timing, yeah...

**Jessica Kerr:** But sometimes when I'm working from home, and after six hours I'm just "Sigh... I didn't actually work. I only worked six hours." Well, I never work more than six hours in the office... That would be a lot, actually, of work to get done. But the thing is, those in-between times, we happen to usually talk to humans.

**Jerod Santo:** Those micro-moments.

**Jessica Kerr:** Yeah. What we don't realize is forming those relationships is our work. That builds a company. Avdi pointed out the other day - a company is a structure that's made of relationships with people that collectively forms a capability to do something. But those relationships matter, and that's how we transfer information well. We don't transfer information from documentation. The documentation that does work - trust me, professionals spend a ton of time tweaking that documentation, and getting input from lots of people, and you are not gonna spend that kind of time; it's way more time that writing the code. But the way we do transfer information is by trusting people, and we build that trust through those little tiny interactions of "I see that you are a human being."

**Adam Stacoviak:** \[16:12\] It is the relationship and the interaction process built up of many parts though. The documentation obviously plays a role, because people read it...

**Jessica Kerr:** It can help. It can help. But it never conveys as much as you think it does.

**Jerod Santo:** It can't tell that full story.

**Adam Stacoviak:** So what are the building blocks of this that you advocate for? Is it like docs + relationship, or is it docs + beer + relationship? If you had to give a list of "Do these things right, and you get these relationships and trust-building to happen..."

**Jessica Kerr:** Yeah, start with the people, start with talking to them. And this is another thing that you get out of pairing - when you pair with someone, please chit-chat for at least the first five minutes. Like y'all do with this podcast; break the ice. We are humans pairing together first... Because that's how everything else goes smoothly. And that makes the pairing session produce more than code. Because the output of every pairing session is several things; there's a side effect on the world. And then there's the side effects on each of you, what you learned and who you become over the course of the activity, and then there's that relationship.

One thing I've started realizing is that every interaction with a person is about the relationship more than the content. And that lets me chill out and not get impatient in meetings or in chit-chat and stuff, because the content will be easy to transfer when the relationship is healthy.

**Adam Stacoviak:** That's like process versus outcome, right? The process is the relationship, and the outcome is whatever is formed because of the relationship.

**Jessica Kerr:** Yeah, and the outcome that you see in the course of an hour is whatever code you made. But you've also built a foundation for every future pairing sessions...

**Adam Stacoviak:** Sure.

**Jessica Kerr:** And pretty soon you work smoothly together, and with the other people on the team, and that's when it gets good. When we try to resist that human connection, it gets hard. It's expensive.

**Jerod Santo:** One trend that I've seen in our industry, which low-key disturbs me, and it actually -- you're bringing it to mind when you talk about the knowledge transfer, which takes time, and the relationships, which take time, is that so many software developers are moving between organizations at rapid paces.

**Jessica Kerr:** Yeah...

**Jerod Santo:** I was speaking with a young man the other day who had had -- he's like "I can't even make it a year", just speaking experientially.

**Jessica Kerr:** Oh, man...

**Jerod Santo:** He's like "I've been 11 months at Company A, and I was 9 months at Company B..."

**Jessica Kerr:** Ouch.

**Jerod Santo:** And whether it's a better opportunity, or layoffs, or a merger, or a startup that fails... Our industry has - we call it churn - worst moving organizations. This is one of the reasons why when Adam and I meet people...

**Jessica Kerr:** We have no idea how much that costs.

**Jerod Santo:** Oh, man. It has to be so inefficient. Because if you're learning a brand new system every 12 months, and you're working with somebody who's been there three months before you have...

**Jessica Kerr:** Oh, my gosh.

**Jerod Santo:** They don't have that context. They're still getting it. So this seems like something that we would wanna fix, but it's counter-cultural at this point to stay somewhere for very long.

**Jessica Kerr:** Yeah, and... I mean, I can't say anything, because -- well, I've had two jobs where I worked there like four years... Oh, maybe three now. Almost three. But now I need to be a consultant, because it gets too easy. \[laughter\]

**Adam Stacoviak:** It gets too easy... Which part?

**Jerod Santo:** What gets too easy, your job does? I know this place too well.

**Jessica Kerr:** Exactly. When you do know this system really well, when you are that person that people can just come to with questions, and when you do something you know exactly where to push it and what buttons to twiddle... I can do 15 minutes of work a day, answer questions for a good chunk of the rest, and be more productive than anyone who's been there for two years or less.

**Adam Stacoviak:** \[20:06\] Yeah, exactly.

**Jerod Santo:** And why would you wanna give that up?

**Jessica Kerr:** Because I'm bored!

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Sure... Okay, well what about the flipside of that, of being extremely useful?

**Jessica Kerr:** So I do value that. The trick there is that most organizations do have ways of continuing to challenge yourself, and this is where a lot of people get into DevOps, and infrastructure, and architecture... You broaden the scope of your influence and you can continue to have challenges. And this is where we need to automate ourselves out of a job. If you do anything repeatedly, automate it. But then the other challenge is -- it's correct at that level to spend most of your time helping other people get to your level.

I read somewhere today on Twitter that senior developers probably commit a lot less feature code than junior developers, because they're influencing at a higher level.

**Jerod Santo:** Right.

**Jessica Kerr:** And also, I'm only gonna get bored like that if I've been on the same team, working on the same piece of the system. So if you move to another team - or as Charity points out, you can move back and forth between manager and developer; that's another thing you can do. But when you move to another piece of the system, you have a whole new thing to grasp... But all of your context and familiarity with the previous system and the deployment and the infrastructure is still relevant and useful. So if you've got a developer who's not been on one team for 15 years, but been on ten teams in the same organization over 15 years - that's a powerful person.

Also, we don't pay people for their experience at a particular company... And this is one of those -- you used to have the thing where people would get paid for longevity.

**Adam Stacoviak:** Yeah, seniority.

**Jessica Kerr:** Yeah, yeah. Now, if you replace seniority with a deep understanding of the business and the software as it exists, that is incredibly valuable.

**Jerod Santo:** Oh, yeah.

**Jessica Kerr:** But then you've got golden handcuffs, because you can't leave, and then you stay, even though you don't like it anymore, and then you've just defeated the purpose of having someone productive. So that's a mess.

**Jerod Santo:** It's a hard problem. I have a close friend who works at one of the largest credit card processing companies in the world, and there are people there... There are a few of them, but you could probably count them on one hand - these people have been there for 30-40 years, and they are literally the only ones who know how certain aspects work... They're priceless. They're absolutely priceless.

**Jessica Kerr:** Yes, they are...

**Jerod Santo:** It doesn't matter if they know COBOL or not. When you teach people COBOL, it's like "Well, you're not gonna teach them this mainframe, and the intricacies of millions and millions of lines of code, written over decades..."

**Jessica Kerr:** Yes, it's not about COBOL, it's about the system, right?

**Jerod Santo:** Exactly. And it's like, when those people retire or die off, there's gonna be serious problems.

**Jessica Kerr:** So that to me - my definition of legacy code is code that's not alive in someone's head. So as soon as that person leaves, those millions of lines of code become complete legacy. They're just barely not, at the moment. They're hanging on by a tiny thread... But one reason to replace code regularly is to have it continue to be alive in people's heads... Because it's really, really hard if you weren't involved in writing it to get that familiarity with the system.

**Break:** \[23:34\]

**Jerod Santo:** So you mentioned VS Code and Docker, observability, and some of the stuff you've been tinkering with... Tell us about it.

**Jessica Kerr:** Okay, so VS Code is the IDE of the future and the present... And I'm sorry, but Microsoft is now the winner in the development space, and they are now going to have a monopoly on development, because they are the ones doing it right, and making it free. That's my opinion. \[laughs\]

**Jerod Santo:** It's well-founded. Does that make you happy, sad or indifferent?

**Jessica Kerr:** Oh, they're doing a good job...

**Jerod Santo:** I agree.

**Jessica Kerr:** Yeah, I'm happy about it. I'm happy that they bought GitHub and Npm. That's sweet. But VS Code...

**Jerod Santo:** You're happy they're doing VS Code, yeah.

**Jessica Kerr:** Yeah. So what they've got - one of the major things that they have got really right in VS Code is the separation between project space and human space. So you've got the developer, and you like to type with your themes, and your keyboard layout, and your Vim or Emacs, or ParEdit... I wish they had ParEdit for TypeScript, but we don't yet; somebody please make that.

There's your preferences, and then there's what the project needs. So if it's an Elixir project, you need the Elixir plugins, and the formatter that is your standard for the project, and whatever databases and stuff that you need for testing, your testing frameworks, and things like that. So VS Code draws the line between them, and then it lets you containerize your development environment. And when we use Docker for development, don't think about production. Everything that they tell you to do for your Docker containers in production - don't. Use the nice FAT Debian instance as a base, not the scrawny Alpine one that doesn't have Curl, okay?

**Jerod Santo:** This is news to me. Why would you do this?

**Jessica Kerr:** Because this is for your convenience.

**Jerod Santo:** Because you want Curl.

**Jessica Kerr:** Yes, you want Curl, you want everything. In fact, I always do AppKit update, and I do not clean out the files.

**Jerod Santo:** Oh, you're living dangerous.

**Jessica Kerr:** Well, what am I using? Extra disk space on my computer. That's it. That's the only reason to clean out those files; it just saves people disk space. No, if I'm gonna push an image up to Docker Hub that other people are gonna download, then yeah, I'm gonna clean out those excess files. But locally, the trade-offs are quite different between development and production. So I'm talking about a totally different Docker container than production.

**Jerod Santo:** Okay.

**Jessica Kerr:** And then VS Code, when I configure it, which is like Ctrl+Shift+P, add development container configuration, enter. If I already have a Dockerfile, it's gonna use that, or I can pick one - Node and Postgres - and it'll give me a Docker Compose and set it up. Then I can play with the Dockerfile, I can mess with it.

Then, when VS Code starts up the container, it installs a VS Code server on it. Not in the image, only in the container. And then -- so you've got two copies of VS Code running. You've got one in the Docker container, with all the project-specific plugins installed, and that one's doing the file manipulation. And then it's talking to VS Code on your host, on your Windows PC or your Mac. They can be completely different, and everybody's fine, because all your actual test commands and stuff are running in Linux, on the Docker container. It's the same for everybody. But then on your host VS Code you have your themes, and your keyboard layout, or hotkeys, and all of that customization that's about the interface with you.

\[28:15\] So they've separated the interface with the project and the code and the deployment. You can install whatever development tools. I will, at some point, set up CI to do this, but right now I have the Heroku CLI installed on the Docker container, which I will still use for logs, and stuff... So everything that's specific to the project is there, everything that's specific to you is in the host, and everyone's happy.

And then on top of that, it means that because VS Code has the server concept, you can connect multiple hosts to the same server. This is where you get the remote pairing thing happening... Because with VS Code you can connect two hosts to it. That means wherever VS Code is running, with your project, the VS Code server - and that can be in the cloud or it can be on one person's computer, the other person can connect their host, and you can both type and manipulate the same files, because you're talking to the same server. And that server can point each of you at where the other one is looking.

So I can be in "just follow what Avdi is looking at" mode for a while, and then Avdi is doing this thing, and I have a question about this other thing, and I can just switch out of "follow Avdi" mode (that's not an action, I just open a file), and I can go look at what I want, until he says something that I have to go back and look at what he's doing. Or I can say "Come look over here, and he can click to follow me and see what I'm seeing."

**Jerod Santo:** So you're both editing the same files.

**Adam Stacoviak:** When you say "see", do you really mean see-see, eyeballs-see, or keystrokes, cursor-see?

**Jessica Kerr:** Um... Both?

**Adam Stacoviak:** Both. Okay, interesting.

**Jerod Santo:** How do you see without your eyeballs, Adam?

**Adam Stacoviak:** Well, I mean, see what Avdi is seeing, so what he's looking at, or where his cursor is at.

**Jerod Santo:** Oh, his inputs...

**Jessica Kerr:** Yeah, where his cursor is at. It's the files he has open.

**Adam Stacoviak:** This is really advanced eye manipulation and following.

**Jerod Santo:** Eye-tracking.

**Jessica Kerr:** Oh, okay.

**Jerod Santo:** Not quite that good yet.

**Jessica Kerr:** Where his cursor is. But what files he has open, and the place in the files that he has open.

**Jerod Santo:** Is there a mode where you can just say "Track everything that person's doing"? Like when he opens a new file, will it open it on your machine?

**Jessica Kerr:** Yeah, yeah. That's the follow mode.

**Jerod Santo:** Okay. That's nice.

**Jessica Kerr:** You can just sit back and see what the other person opens, and see what they type.

**Jerod Santo:** Okay, so he's connected to the VS Code server...

**Jessica Kerr:** And then you can randomly hit a key and bother them...

**Jerod Santo:** \[laughs\] You just hold the Delete button down as he types...?

**Jessica Kerr:** \[laughs\] That would work, yeah.

**Jerod Santo:** So he's connected to the VS Code server in a Docker container, and you're connected to it in the container? Is that right?

**Jessica Kerr:** Yes. So the VS Code server is running in the container, which could be on my computer or on the cloud.

**Jerod Santo:** Okay.

**Jessica Kerr:** And then both of our VS Code clients on the host are connected to that same server.

**Jerod Santo:** Okay. So when you kick off a test run, will it run it in the container?

**Jessica Kerr:** Yes.

**Jerod Santo:** Will Avdi know that those tests are running? Can you clash that? How does that work?

**Jessica Kerr:** It will run in the container, so if he's following me, he'll see the terminal open and he'll see me run it. Now, for security, if that container is on my box, then by default he doesn't have write access into it... I have to give him permission to type in my terminal.

**Jerod Santo:** Yeah, it makes sense.

**Jessica Kerr:** I think you can do this without containers locally, but don't. Just do it in the container. But then you can both have permission to type in the terminal and run tests or whatever, and you can see what the other one is doing.

**Jerod Santo:** So we have a Docker container, a dev Docker container set up for Changelog.com. It's a Phoenix app, it's open source etc.

**Jessica Kerr:** Yaay!

**Jerod Santo:** \[32:05\] I never use it, because I just feel like there's like an unnecessary layer in between me and what I'm trying to work on, when I could just have -- we also can set it up directly on your machine, or you can use a Docker container. So do you find that's actually a problem in practice, or am I just being a curmudgeon?

**Jessica Kerr:** In open source it's definitely a thing. If you want someone to contribute to your project, or someone wants to try it...

**Jerod Santo:** Right.

**Jessica Kerr:** ...they don't need to make their computer look like yours. And the Docker container's huge.

**Jerod Santo:** No, absolutely. Which is why we have a Dockerfile for that. We want people to be able to use it.

**Jessica Kerr:** How do you test it?

**Jerod Santo:** Mixed tests.

**Jessica Kerr:** No, the Docker container.

**Jerod Santo:** Um, somebody else does that. I don't know. \[laughter\]

**Jessica Kerr:** Oh, okay. Well, you wait until you get a bug report on it. That's probably how.

**Jerod Santo:** Yeah, exactly.

**Jessica Kerr:** That's okay.

**Jerod Santo:** So you said in your circumstance you have the Heroku CLI, and it's inside the container... So are you basically running those commands from your terminal, inside the container?

**Jessica Kerr:** Yeah. I have a principle - "No, I'm not installing that on my computer."

**Jerod Santo:** \[laughs\]

**Jessica Kerr:** I have Docker on my computer, and I will install that in a container, and that is it. \[laughs\] I mean, where that is specific to anyone's project.

**Jerod Santo:** Yeah. I like that principle.

**Jessica Kerr:** You have one project that you're in-tune with...

**Jerod Santo:** Right. And the setup pre-dates the Docker container.

**Jessica Kerr:** Yeah, and you're already there. When your laptop is stolen, you'll probably use the container for a while, because it'll be so much faster to get up and running.

**Jerod Santo:** Yeah, for sure.

**Jessica Kerr:** But in the meantime, you have this symbiosis with that project.

**Jerod Santo:** That's right. I'm holding on to the past.

**Jessica Kerr:** IntelliJ also is really great if you use it every day for the same project... Because you get it set up, and you get it tweaked, and the endless updates don't seem endless to you, because they're only once every other time you open it, not every time. It's not really that often, it's just that when you don't use it that often, it is every time.

**Jerod Santo:** Right. It feels like it.

**Jessica Kerr:** Yeah. So you get in that kind of synergy, and it's okay that your personal laptop, which is your Umwelt, your environment that you have set up, that is meaningful to you...

**Jerod Santo:** It's an extension of my body at this point.

**Jessica Kerr:** Yes, exactly. Exactly. And because this one project is what you care about, it's fine for you to customize the extension of your body to work with that project.

**Jerod Santo:** Okay, good.

**Jessica Kerr:** But don't ask anyone else to do that, to work on your project.

**Jerod Santo:** No, I wouldn't do that.

**Jessica Kerr:** Yeah.

**Jerod Santo:** I'm actually asking you to convince me that my symbiosis isn't even worth it. I should ditch this and use Docker all the time. And some of these VS Code things are very interesting in that way, but I'm not sure if I'm right there yet. So what are some of other stuff, the advantages of having this VS Code server talking to the other VS Code server inside the container?

**Jessica Kerr:** The VS Code client on your host...

**Jerod Santo:** The client, yes. Excuse me.

**Jessica Kerr:** And the VS Code server and the Docker container - well, see, if it's only about you, then having your own computer set up is probably the best... Until you lose your computer, and then it sucks.

**Jerod Santo:** Okay.

**Jessica Kerr:** But if you want other people to be able to work at it, or pair with you, then isolating that into a defined environment -- because right now you don't know what all you have installed on your computer that is helping you right now. You don't know that until you lose your computer, which I have done like three times in the last four years, at least. I think more. So I've gotten sensitive to this. \[laughter\]

**Jerod Santo:** I can tell you're speaking out of experience. Adam, have you ever lost a computer that was all customized and set up for you?

**Adam Stacoviak:** No, I haven't.

**Jerod Santo:** We don't go out much...

**Adam Stacoviak:** Well, I have a laptop -- it mobiles inside my own home. It doesn't mobile outside of it, you know what I mean? \[laughter\] It's not mobile in that sense. It's movable.

**Jessica Kerr:** It's more cordless than mobile.

**Adam Stacoviak:** \[36:03\] Yeah, exactly.

**Jerod Santo:** A cordless computer, I like that.

**Adam Stacoviak:** I like that analogy. Well, what I'm seeing here with this is that for us in particular, if we had like a DevWithMe kind of thing, Jerod, where this Docker container was used by you constantly and you know how to use it, it would be easy for us to on-ramp others, or just form relationships with them directly, but then also have some documentation, and maybe some beers... \[laughter\] To get folks who are interested in this Elixir app that is marketed by Jose and others... This is a good app to look at to learn their practices of Elixir and Phoenix, for example. For one, that's a good thing. But then, if you wanted to pair with somebody, which is something we've been doing before - we've thought about doing that on Twitch, live coding sessions... This enables that a lot easier.

**Jerod Santo:** Yeah, I'm thinking about this specifically for that. One of my ideas for a YouTube series is called Code Review - just testing that term right there - where I'm joined by an expert in a system... Maybe it's somebody who works on Node; I don't know anything about Node's codebase, but it's open source, so I have the codebase open, they have the codebase open... They're gonna tell me the story, whatever story they happen to know.

**Adam Stacoviak:** Storytelling...

**Jerod Santo:** And I'm the neophyte, so I don't know anything, but I know what some code looks like, so I can say "Where does it all start? Why is this doing that?" and they know the answers, presumably...

**Jessica Kerr:** Yeah, but you have to draw those out of them, because what is obvious to them is not obvious to you.

**Jerod Santo:** Exactly, so therein lies the rub.

**Jessica Kerr:** That's that challenge of too much knowledge.

**Jerod Santo:** Yeah. So maybe it's a good idea, maybe it's a bad idea, but this VS Code setup sounds really awesome for recording video or remote pairing sessions, basically.

**Jessica Kerr:** Not on my Surface Pro, but on this ThinkPad, yes. \[laughter\]

**Jerod Santo:** Do not use the Surface Pro for podcasting...

**Adam Stacoviak:** And you could follow them, too. You can be handsfree, following them, like you'd mentioned with the "follow Avdi" mode. You could just watch them open files, explain the path of where the class is, where it ties to the module, whatever it might be... You can really go deep with them and follow them through their own codebase, and hear the story. So it layers in the storytelling aspect, which I like.

**Jerod Santo:** That'd be cool.

**Jessica Kerr:** Yeah, that'd be sweet.

**Jerod Santo:** How many people can connect to this thing? Because we could just ditch the video indirection and just have a whole bunch of people following you directly.

**Adam Stacoviak:** Just the code. Just in VS Code.

**Jerod Santo:** Yeah. Is there a limit -- I mean, it probably doesn't scale very well.

**Jessica Kerr:** It's a little beta... It doesn't work perfectly yet with 2.

**Jerod Santo:** Okay. So this is not a good idea... \[laughs\]

**Jessica Kerr:** Sometimes it just works... By all means, try it. If you have a Discord server where you talk about this stuff, you can stream it, and also give them the link, so they can try to join... But if not, just watch the stream.

**Jerod Santo:** Right. Is it just a URL? You just point your VS Code at this? How does it work on a logistical level?

**Jessica Kerr:** Yeah, you pass a link.

**Jerod Santo:** That's so cool.

**Adam Stacoviak:** Well, worst-case -- I mean, Microsoft is committed to this idea of VS Code, obviously. They've won developers, as you said, Jessica... So I think that even if it's not perfect right now, they need people using the feature in these ways, to hit the bottlenecks and the bugs and the gotchas to get that to the team in feedback and make it better.

**Jessica Kerr:** Yeah. One of the things you get - if you do your work in a Docker container, then you know that Docker container works. You know that every tool that you need installed is installed, and it's installed in a way that's documented in the Dockerfile... And randomly, sometimes you'll rebuild the container, or VS Code will rebuild it for you. And everything that you installed but didn't put in the Dockerfile will be gone, and you'll notice, and you'll put it in the Dockerfile. So it pushes you to document your dependencies.

**Jerod Santo:** I'm now remembering why I don't use Dockerfile, besides curmudgeon, which is also there... But actually, Docker for Mac is super-slow, for some reason... And so now I'm gonna have to switch OSes if I wanna get this going.

**Jessica Kerr:** \[40:07\] Yeah, Docker desktop for Mac used to be the best, but I think now it's better on Windows. It's not perfect, sometimes... I mean, one thing that we rely on in our programs, that we think -- we just keep assuming the file system is solid; the file system is not solid in a Docker container, running Linux on Windows. Not solid.

**Jerod Santo:** Not solid.

**Jessica Kerr:** And the answer is not restart your container, it's not restart Docker, it's restart Windows. We're back to that.

**Adam Stacoviak:** Great.

**Jerod Santo:** We're back to restarting Windows...

**Jessica Kerr:** I keep forgetting, and I get really frustrated. But Npm install, with the number of files, when it's downloading thousands and thousands of files into that directory - oh, that can kill it...

**Jerod Santo:** That is no bueno.

**Jessica Kerr:** Yeah, it's not perfect. When you have that extension of yourself set up, that is more efficient. It is faster. And for your own work - I mean, I'm not gonna tell you you ought to use Docker. Anyone else ought to, and you ought to once in a while, just so you make sure it still works.

**Break:** \[41:06\]

**Jerod Santo:** Do you wanna talk about DevOps and Honeycomb or anything like that?

**Jessica Kerr:** Oh, okay. So Adam, you were talking earlier about brains, and Brain Science, and some of the stuff I've been reading lately about ecological and inactive-something - as people, as animals, we learn about the world in order to act. Acting and learning are entwined. We constantly have to do something, and this is directly related to our learning.

We have to learn in order to choose useful actions, both as animals and as people. And I've noticed for years that in code, learning and changing are like the same thing. If you do want to learn a codebase, you need to refactor it, or tweak something and see that change the output, or add a printf to see if that's really what it is... We need to see change in order to learn. We need to do something and then see the world around us... And TDD is like that. TDD gives you that buzz, because you do something, you see it change. You write a test, you see something red.

**Jerod Santo:** Yeah.

**Jessica Kerr:** You implement a test, you see something green. You refactor it, you can live with the code. And then you write another test and you see something red. \[laughs\]

**Jerod Santo:** In reality, most of us skip the refactor step.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** Well, that's because it was fine the first time, because it is in our head. Come back the next day, and then you'll wanna refactor.

**Jerod Santo:** No doubt. \[laughs\]

**Jessica Kerr:** You know, now that we have continuous delivery, and now that we have systems composed of a zillion different services with actual useful documentation that people spend more time on than they did writing the code, the level of reuse as the company - that's a thing. Anyway. Now that we have things like Heroku and Netlify, that we can push our stuff into the world immediately, I'm not satisfied with red to green anymore. I constantly want to see how my actions affect the world.

\[44:11\] So the first thing I do -- so Avdi and I have this toy app, which whenever we sit down to work on it, and it's been a week (because it's always been a week, because it's the weekend), the first thing I do is push some change to production, to show that I can still change the world in this way.

Last weekend -- we haven't implemented any real features yet. It's pretty Hello, World at this point... But darn it, we have system tests running, and darn it, I integrated Honeycomb for observability. And we haven't done anything in Honeycomb yet. All I did was installed their gem, tweak their configuration so that I wasn't hard-coding my API key and pushing it to GitHub... And that's it.

Then now when I deploy the site, I can go and look at the graphs in Honeycomb. And whenever I hit the site, I can see something change in the world. I see that graph bump, and then I can trace down too and see what made it take so long, which - it doesn't do anything yet, so it doesn't take long... Well, unless Heroku had to boot its Dynamo, in which case it takes forever. That's okay.

**Jerod Santo:** Right. First request.

**Jessica Kerr:** Yeah, but we're probably not seeing that yet, because I don't think it -- anyway, I can see an effect on the world even just by clicking on my site now... And I can see whether other people are clicking on my site. So now, when my app starts being useful someday, I'll be able to see that and look at it... And that to me is like -- it's what TDD wants to be when it grows up. \[laughs\]

**Jerod Santo:** Hm, I like the way you put that. It's like real-world -- well, it's testing in production.

**Adam Stacoviak:** It sure is...

**Jerod Santo:** \[laughs\]

**Jessica Kerr:** Yeah. And we need testing at all these layers...

**Jerod Santo:** Right. It's additive.

**Jessica Kerr:** We need testing both locally, and in CI - which is consistent - and in production.

**Jerod Santo:** You're still not all the way to the end result necessarily, right? I think a lot of the "Move fast and break things" attitude, even if you're testing and having your observability in production, it's like not seeing the logical, or sometimes illogical conclusion of your changes as they manifest in the real-world.

**Jessica Kerr:** Yeah, because you can meet requirements; you can make it do what they told you to make it do, and that still be totally useless and bad!

**Jerod Santo:** Right. Backwards.

**Jessica Kerr:** So if you don't test in production, you're not testing the system in its environment, you're not testing whether the system works. You're only testing whether it does what they told you to make it do.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** And if that's all you get paid for and all you care about is getting paid, then you're fine. But I think all of us care about more than getting paid.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** ...in this Zoom anyway.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** And one or two listeners, for sure.

**Jerod Santo:** That was a huge qualifier. That was the biggest qualifier I've ever seen. She went from everybody to "in this Zoom." From millions of people to three.

**Jessica Kerr:** Well, okay...

**Jerod Santo:** \[laughs\] At least extend it to our listening audience.

**Adam Stacoviak:** Sure.

**Jessica Kerr:** If all you care about is getting paid, you're not my audience. \[laughs\]

**Jerod Santo:** There you go.

**Adam Stacoviak:** What you're doing though is you're learning about doing, though...

**Jessica Kerr:** Yeah.

**Adam Stacoviak:** That's what's happening in this scenario, to change the world like that. And you need that feedback. That feedback is part of the learning process.

**Jessica Kerr:** Yeah. And you know what, this is another reason that stories are so powerful... Because as humans, we were built to learn, in order to do, in order to learn, in order to do. Naturally, we only learn with action. But here's the thing... So looking at it that way, it makes sense that we only learn from our own experiences, and we're terrible at learning from anyone else's. But the thing is that we can simulate the doing in our brain. When we hear a story, we're simulating the doing in our brain. It's like the mirror neurons thing, where you watch someone do a physical motion and your brain fires in the way that would make you do that physical motion, even if you're not moving. So we have that experience, and take those actions with them, and see the results with them.

**Adam Stacoviak:** \[48:32\] Yeah.

**Jessica Kerr:** So stories are so important that way.

**Adam Stacoviak:** The mirror neurons is really interesting, because - back to VS Code and Docker and "watch Avdi" mode for example... Because you're watching Avdi do it, for example, your mirror neurons, the way you learn, the way you watch, your brain would light up the same way Avdi's did as he's writing it, because you're seeing it... You could see it and you could do it.

**Jessica Kerr:** Hopefully, he'll be talking through the why...

**Adam Stacoviak:** Right, right, exactly.

**Jessica Kerr:** ...and they key combo he just pressed.

**Adam Stacoviak:** It's really interesting how all that plays out. These mirror neurons are a key component to empathy, a key component to compassion obviously... But you can watch somebody do something and get the same brain responses as if you did it yourself.

**Jessica Kerr:** Do animals have those?

**Adam Stacoviak:** I don't know. I don't know that.

**Jessica Kerr:** Well, they certainly don't have it in response to language, because they don't have language the way we do...

**Adam Stacoviak:** Well, I think they do... I don't know how to describe it, but that's a good question though. I'm pretty sure though you can see monkeys do these things. That's why they do tests on rats, and monkeys, and things like that...

**Jerod Santo:** Mimicry.

**Adam Stacoviak:** Because they simulate... And dolphins even, too.

**Jessica Kerr:** Yeah. Yeah, monkeys would. Monkeys would.

**Adam Stacoviak:** Yeah. It's deep.

**Jessica Kerr:** Yeah.

**Jerod Santo:** So this could be like a really subtle form of mind control, right? The person is informing your mind... Someone's firing mirror neurons in your mind...

**Jessica Kerr:** That's a thing.

**Jerod Santo:** ...while you're watching them code. It's kind of deep.

**Jessica Kerr:** We conform to what the people around us are doing... And this gets back to - if you wanna change yourself, think about where you put your attention.

**Adam Stacoviak:** Absolutely.

**Jessica Kerr:** Because you're going to mimic what you watch.

**Adam Stacoviak:** Yeah. Your awareness/attention is absolutely key. Where you place your thoughts, the framework in which you have your thoughts - it all begins with awareness, and your attention.

**Jessica Kerr:** Agreed.

**Adam Stacoviak:** The idea though, Jerod, you mentioned, mind control - it's really interesting, because MKUltra is a real thing. It's quite possible that we're in a simulation, and this is all mind control.

**Jerod Santo:** You're just saying that because you wanna go watch Space X, and you're thinking about Elon Musk...

**Adam Stacoviak:** Yes, yes.

**Jessica Kerr:** If it's a simulation, they have something way better than this ThinkPad.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** A little back-story - it had some crashing earlier...

**Jessica Kerr:** \[laughs\]

**Jerod Santo:** Yeah, they've probably learned that through osmosis.

**Jessica Kerr:** On the Surface Pro. The ThinkPad's been great.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** \[laughs\] And if you want to hear more from me and more thinky-thoughts, newsletter.jessitron.com.

**Adam Stacoviak:** We'll put that in the show notes, for sure.

**Jessica Kerr:** That's it.

**Jerod Santo:** There it is, links in the notes.

**Jessica Kerr:** Yeah. Cool.

**Jerod Santo:** If you are familiar with Jessica's voice, you've probably heard of her on Arrested DevOps and Greater Than Code. Great podcasts. If you haven't listened to those yet, give them a listen. We really appreciate you coming on the show.

**Jessica Kerr:** Thank you for inviting me.
