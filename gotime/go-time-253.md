**Mat Ryer:** Hello, and welcome to Ghost Time. I'm Matt Ryer. Today we're talking about tech horror stories. I'm joined, as ever... Johnny Boo! Johnny Boursiquot is here. Hello, Johnny.

**Johnny Boursiquot:** Hello, Matt...

**Mat Ryer:** Welcome to the spooky Go Time episode. Again, in the spirit of it -- you've really got to get in the spirit of it... No? Yeah... \[laughter\] We're also joined here by Kris Brandow. Spooky ghosts... Hello, Kris.

**Kris Brandow:** Hello! I'm back, again. Finally.

**Mat Ryer:** Yes, welcome back again. We're also joined by your friend and mine, Natalie PistunoWitch. Hello, Natalie.

**Natalie Pistunovich:** Hello!

**Mat Ryer:** Yeah, getting into the spirit... \[laughter\] We have a special guest joining us... You're not gonna believe this. It's spoopy Dee. Dee Kitchen. Welcome, Dee.

**Dee Kitchen:** Thank you. I'm enjoying being here. I even got the backdrop right...

**Mat Ryer:** Good. Well, that's a good start, because we've literally just started. I mean, really, the only way is down now, in a lot of ways... But hopefully we don't go there. But we are talking about scary things today. How are you generally with scary things, Dee?

**Dee Kitchen:** That's my career. All of it.

**Mat Ryer:** \[laughs\] Yeah. Okay. Anyone else? Anyone scared of ghosts?

**Natalie Pistunovich:** I'm scared of Ghost Time.

**Mat Ryer:** Yeah, you're scared of Ghost Time.

**Dee Kitchen:** I'm actually scared of horror movies. I don't really watch them.

**Mat Ryer:** Oh, yeah?

**Natalie Pistunovich:** Same.

**Dee Kitchen:** Heebie-jeebies for me.

**Mat Ryer:** Hm...

**Kris Brandow:** I just find them boring.

**Mat Ryer:** Yeah...

**Natalie Pistunovich:** Did you come from the industry? I remember you saying, Kris, that you see a movie, the first few minutes, and you know exactly how it's gonna be laid out.

**Kris Brandow:** Yeah... It's the curse of having a creative writing degree and specializing in screenwriting... All movies are just kind of ruined.

**Natalie Pistunovich:** It's all generics.

**Mat Ryer:** That's what I said, you'd be happier if you're just an idiot. I've always said that.

**Kris Brandow:** Is this something you know from personal experience, Mat? \[laughter\]

**Johnny Boursiquot:** Ooh, shots fired...

**Mat Ryer:** I also don't really like horror films, especially if there's any kind of contradiction in it. I can't deal with that. Like, if there's an invisible thing that can grab you, first of all, it's invisible, it would be blind; we've covered this. But also, if it can grab you, you can grab it, you can hurt it... Like, it's not fair. It's like when the physics don't apply generally; then I'm just out. And I just tell everyone in the cinema, I'm like, "Sorry, everyone. I can't stay. I've got to go because of the inconsistencies of the physics." And I just go and get some popcorn and go.

**Natalie Pistunovich:** \[00:06:10.01\] Do you get sweet or salty popcorn?

**Mat Ryer:** Salty.

**Natalie Pistunovich:** Do you have a choice? Or is it always salty?

**Mat Ryer:** No, you have a choice. \[laughter\] Don't you have a choice? Yeah... What do you mean? Like, the police are going around saying "Hey, \[unintelligible 00:06:22.25\] salty? What are you doing?"

**Natalie Pistunovich:** I only discovered in my late 20s that some other countries sell popcorn that is not just salty in the cinema.

**Mat Ryer:** Oh, right? Yeah...

**Natalie Pistunovich:** And then I came to the US, and then it's like not just two flavors, but 15.

**Mat Ryer:** Yeah, of course. Yeah. Yeah.

**Dee Kitchen:** That's a horror story there...

**Mat Ryer:** Yeah. You can choose individual bits of corn, and have different flavors, and just have as many as you want. You just program it. You do it as an app, and then it pops it on demand.

**Kris Brandow:** You say that, but we do have soda machines where you can choose your own flavor.

**Mat Ryer:** Yeah, I've seen that.

**Kris Brandow:** Those freestyle Coke things...

**Mat Ryer:** Has anyone come up with a good one yet? Because I imagine they're all terrible. Someone's like, "You know what? I've accidentally pressed these three, and I've made a brand new flavor that never existed before."

**Kris Brandow:** Well, no... I think they make it so you can't make any truly terrible-tasting ones, because that would be perhaps bad for them, so...

**Mat Ryer:** Oh, really? Clever. How did they do that? Well, we'll never know... Well, speaking of horror stories - let's get into this, shall we? Who Wants to kick us off with a spooky story? Oh, by the way, we should actually introduce Dee, because Dee, you wrote a package that I think a lot of people here will be familiar with. Can you tell us about bluemonday?

**Dee Kitchen:** Oh, bluemonday... It's named because there was a package we'll call Black Friday, which has all the best markdowns, and it's a markdown package. And after you've generated markdown, markdown can include HTML, which makes it dangerous. It's probably you're using this because you've got user-generated content, and you want to sanitize it. So bluemonday is named after the New Order song, but follows Black Friday... And it basically sanitizers HTML; it's the only Go package that sanitizers HTML, which is a foolish and reckless thing to attempt to take on. But that's what I did.

**Mat Ryer:** Amazing. And what do you like about it, and what don't you like about it?

**Dee Kitchen:** I like that it works. \[laughter\] It's a streaming parser, it's got fixed memory, so you can use it quite comfortably in a lot of situations, and \[unintelligible 00:08:20.10\] I don't like when people tell me there's security issues with it, and then I have to go "Oh, I'm supposed to take this open source thing seriously?" I do appreciate it. I should actually say, I do appreciate security reports. But at the same time, you never can predict when they're going to turn up, and you never know what kind of words you're going to open to try and actually figure it out.

**Mat Ryer:** Yeah, there must be a lot of responsibility, actually, because it is a package that is used, and quite trusted.

**Dee Kitchen:** Yeah, it's used. I don't know how many stars it's got, but the stars don't portray the amount of times it's used. Like, it's used in Hugo, and everyone uses Hugo. And this is the HTML sanitizer that keeps Hugo safe. And it's used in so many things. It's got literally thousands of dependencies. Do I take it seriously and stressfully? No. No, I don't. I've figured that if someone is brave enough to take an open source project with an MIT license or a BSD 3-Clause, or whatever it is, and incorporate into their production software, that's on them.

**Mat Ryer:** Okay, fair enough. Well, I have done that, but... Good to know. I genuinely have used it though, quite a few times, so... I like it, because it's like you opt into what you want to support. You explicitly say the things that you want to allow.

**Dee Kitchen:** Yeah, there's no way of defining what makes a good HTML sanitizer. Everyone's got a different rule, depending on their use case. But the Java OWASP, Open Web Application Security thing - \[unintelligible 00:09:43.05\] to find this really beautiful interface for sort of going, "I want to allow images, but I don't want to allow these images that end in .gif." And I copied their API, and then extended it for my own use. So yeah, it's a really good way of doing it.

**Mat Ryer:** \[00:09:58.29\] Nice. Okay, well, I'm gonna tell you about a horror story in tech of mine, that happened quite recently... I have this project which interacts with Twitter, and it interacts with the Twitter API... And so it polls results and then compares them, and stuff. And that's just one of the things it does at a regular interval. And then what happened recently was something happened where the API key changed, and that request failed. And because of the way I was doing it in GCP, it meant essentially that it would retry. And because it was scheduled, it kept compounding. And this ran up a $1,000 bill for me, for yours truly... $1,000 given, paid, gone... So that's a bit of a tech horror story. And the advice for me --

**Dee Kitchen:** Is it tax-deductible? \[laughter\]

**Mat Ryer:** Probably...

**Dee Kitchen:** AWS famously refunds you if you get something wrong. Did GCP not do that?

**Mat Ryer:** I don't know. It's quite recent. I haven't yet tried that. Do you think I should get in touch with support and see if they'll --

**Dee Kitchen:** $1,000 would motivate me.

**Mat Ryer:** Yeah. There you go, $1,000. Okay, well, I'll try it, and I'll let the listeners know how we get on...

**Johnny Boursiquot:** It could have been worse, right?

**Mat Ryer:** It could have been $2000...

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** Or just $1,001. It would be worse, wouldn't it?

**Johnny Boursiquot:** It would.

**Mat Ryer:** What would you do, Johnny, if you saw that...?

**Johnny Boursiquot:** I'd call you and say "Hey, you've got a grand? I hear you're loaded... And just wasting $1,000 here, $1,000 there, on your bugs, and stuff..."

**Mat Ryer:** Honestly, when I found out about it, I wanted to just karate-chop the air. That was the kind of spooky reaction I had to it. Just like \[unintelligible 00:11:38.17\] in the air. Angry. But yeah, it's a good lesson though. Like, set budgets and stuff on your things.

**Johnny Boursiquot:** Do set an alarm, yeah. Budget alarms.

**Mat Ryer:** Yeah. Observability.

**Johnny Boursiquot:** Yes, yes. And you'd know a thing or two about that, yeah?

**Mat Ryer:** Yeah... Okay, who can beat my $1,000 bill? Not $1,000 bill? Oh yeah, it was a $1,000 bill; but that makes it sound like it was one thing, doesn't it? Like a single bill that had $1,000 on it; so it's not that. It was just paid through a bank transfer. Okay, who's got another one?

**Johnny Boursiquot:** I have one that could have cost many 1000s of dollars...

**Mat Ryer:** Oh, Johnny...

**Johnny Boursiquot:** ...if it wasn't spotted. So one of the things you can do with function as a service things, like AWS Lambda, for example, is that you can trigger a Lambda when you write an object to an S3 bucket. Word of advice - do not have your Lambdas write to a bucket that they are themselves responding to. \[laughter\]

**Mat Ryer:** Ohh...!

**Johnny Boursiquot:** Because that's gonna give you a very nasty bill. Yeah, and you will not like what you see. So yeah, thankfully, budget alarms came to the rescue... \[laughs\]

**Mat Ryer:** Yeah, there you go. That's the lesson there. So what happens is, an object goes in the first time, that triggers the Lambda, the Lambda then writes something into that same bucket, which then triggers another Lambda, which then writes something.

**Johnny Boursiquot:** Right.

**Mat Ryer:** And how quickly does that get out of hand?

**Johnny Boursiquot:** Very quickly. \[laughs\] Like, if you want to see how well a Lambda scales on your own dime, you can do that. And, yeah, it'll cost you money very quickly.

**Mat Ryer:** Wow. Yeah. Okay. Pretty good... But yeah, that's -- the alerts came to the rescue. Nice one. Okay, anyone else got one for us?

**Dee Kitchen:** I've got another infinite loop one... Are we allowed to name company names? I don't know, maybe it's internal and I shouldn't...

**Mat Ryer:** Yeah, I don't know.

**Dee Kitchen:** I worked for a certain company which has an orange logo that has a bit of a light shining behind it, and they man-in-the-middle the entire internet... Now, with that in mind, when I was working for said company, in their DDoS team... We didn't DDoS people; we were protecting against DDoSes.

**Mat Ryer:** Yeah, I've wondered... The DDoS team!

**Dee Kitchen:** \[unintelligible 00:13:56.02\] that's the opposite of what we're doing. No, we were trying to protect, and they have a system... They've got all these 200 POPs (points of presence), and thousands and thousands of servers... And every single one of these is protecting some of the traffic; each machine can do like 20,000 requests per second.

\[00:14:15.19\] And yet, they need to be able to actually show the value back to the customer, and make these sort of decisions centrally. So you send all the logs somewhere, and they're all been sent to one data center. So what you end up with is like, if you're doing globally 10 million requests per second, you get 10 million log lines per second in one place.

**Johnny Boursiquot:** Nice...!

**Dee Kitchen:** A certain customer, on a certain point in time - industry and type to be non-disclosed - wrote an infinite loop in their client, and it basically spikes 8 million requests per second on top of our normal load.

**Mat Ryer:** Oh, wow.

**Dee Kitchen:** And they basically broke our logging, the entire visibility. So they were effectively under attack, but now flying blind, because we couldn't see anything because they'd broken all the logging. That was not a good day.

**Mat Ryer:** Yeah... That one doesn't sound fun? What happened?

**Dee Kitchen:** We figured out which customer it was, but we couldn't figure out the rest. But we asked them what they've done, and they figured out that bit and stopped it.

**Mat Ryer:** Oh, wow.

**Johnny Boursiquot:** They fessed up to it, they owned up to it? Somebody wrote an infinite loop?

**Dee Kitchen:** Yes. \[laughs\] I think they realized... They must have seen what was happening on their side.

**Johnny Boursiquot:** So they didn't pull a well -- well, I will not name names, but they didn't blame it on on of the interns?

**Dee Kitchen:** Oh, we've got a certain thing where actually an intern did that. I had that intern, and he's actually really good tie. He's become a full-time engineer in that team. He's really good. Learned a lesson that none of us will replicate.

**Johnny Boursiquot:** Oh, yeah. I love interns. I just don't like to throw them under the bus when something goes wrong with my company... \[laughs\]

**Dee Kitchen:** No, that one was interesting... Also, at said man-in-the-middle company, we had a system -- the system was brilliant, right? You could send an instruction to any machine in the world in under 10 seconds, and every machine received the same instruction. And that's great when you want to say there's a new domain name, because you just have the whole world at the same time. But it's really bad when you say there's a new way to stop traffic. And we've made a greedy regex. And the greedy regex was the problem. Now, frankly, the system shouldn't have allowed it, but the system did allow it. And we were all at lunch, it was an all-hands lunch, and the next thing we know, we just get people running and going "The internet's down." Because we used our own systems. And we lost everything internally at the same time. That was hard, too.

**Johnny Boursiquot:** I feel like there are many lessons there...

**Dee Kitchen:** There was a lot of lessons.

**Mat Ryer:** What we're having for lunch... \[laughter\]

**Dee Kitchen:** Lunch went cold...

**Mat Ryer:** That's scary, ain't it? But hang on... So can you explain - someone that doesn't know what a greedy regex is... What do you mean by that?

**Dee Kitchen:** Yeah, a greedy regex... I mean, if you do something like .\*, what you're saying is match any character, any number of times. So if you .\*.\*, you've now exploded this any character, any number of times, followed by any character, any number of times. And what you're doing is you're increasing the CPU computation. You're still putting the same fixed input in, but what it can match is now -- you've doubled the possibility in just that one go. And essentially, that's what happened. But some of the inputs were web pages and web traffic, so they weren't small. They were quite large inputs. And under that condition, they consumed all the CPU.

So wherever this rule was applied - and we had shipped it globally to every single website, every single bit of traffic - we fried every single machine instantly. So it was about four hours for us to recover from that. And the teams I saw, they did interesting things. We were connecting directly to machines, and looking at the Prometheus on them, because we had no other observability.

**Mat Ryer:** Wow... And what was the impact of that? How many people were affected?

**Dee Kitchen:** Everything was affected. We knocked out a lot. DNS, TLS, HTTP, everything. It was one of those nightmare scenarios. And you sit there as a company, you sit there and you sort of go, "What are these meteorites?" the dinosaurs went extinct by a meteorite. "As a company or product service offering, what's the meteorite that's going to hit us?" At that company, we were hit by every meteorite we predicted. It survived, but still, on the days when they hit, it lays waste to everything.

\[00:18:15.06\] And everyone has them. The thing that you've got to realize is when you're there, you've got to sympathize with -- you can accidentally see another company go through this... They're having a bad day, and you've got to sympathize, because one of those meteorites is gonna hit you one day.

**Mat Ryer:** Yeah, we see the \[unintelligible 00:18:25.11\] goes around often on social media, and things, of people sending their support in those difficult times...

**Dee Kitchen:** Yeah, there's a good tradition of sending cakes to each other to sort of go "Thinking of you..."

**Mat Ryer:** Yeah.

**Dee Kitchen:** And try and not have your salespeople ambulance-chase.

**Johnny Boursiquot:** How well was your break-glass procedures documented?

**Dee Kitchen:** It was pretty good. We were lucky that this happened during a London lunch hour when all of the SRE team - the original SRE team - were there. It's possible for a few people to break glass; they could do so in about five minutes once we actually understood what we actually had to do. It took about 20 minutes for us to gain any visibility and to sort of understand, "Hey, it's this feature. Go turn that off."

**Johnny Boursiquot:** Regular expressions, huh...

**Dee Kitchen:** That's still hard. They're hard for everyone. Easy to write, hard to understand what they're doing.

**Mat Ryer:** Why are they called that? What is regular about them?

**Dee Kitchen:** That's out of my domain. I don't know if anyone's got the answer for that...

**Mat Ryer:** No, genuinely...

**Kris Brandow:** I've just watched a talk from Strange Loop about regular expressions, and the speaker did go into this, and I've completely forgotten what she said. But we can probably put that talk in the show notes. It was a really good one, about just like the history, like Ken Thompson came up; it was pretty cool. So I'm like, "Oh, I know that dude..." Yeah, but no, it has to do with like mathy things, and finite automata, and all of that...

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** When I was a junior, which is the closest to intern I was, I was working with a team lead, and when we deployed something together, we looked at it... And I forget what it was exactly, but this is a company that receives a lot of pings from the SDK of the many clients, and it's all real time. And if that is not logged, then the entire transaction flow, user flow is gone forever. And we deployed something we worked on together, we worked on it for half a day, we tested it, we did all the good practices - because that's how you do with a junior, you want to show that you're very thorough, and you go through all the tests, deploy, look at all the metrics, and see that it behaves as expected. And then he went to lunch, and then I stayed. Ta-da...! \[laughter\] And then I proceeded to do something else, and then suddenly, a weird behavior started pinging Slack, all the monitoring channels, that "Something's wrong, something's weird."

And then some of the colleagues that were there tried to see where it comes from, and we couldn't figure this out in 15 minutes, and then, bravely, I came to the head of the DevOps team - there was no SRE team at the time - and I said, "I think it's this thing that we did. Can I revert it?" Nobody else from all the other senior people that was - I don't have another better word than brave, but I don't use the word brave... Nobody else wanted to do anything about that, because nobody was sure. And then I was like, "Let's do this. Let's try. At worst -- it cannot get much worse than that", and reversing that indeed succeeded, and then we were all very happy. And then I was like, "I think I know how to fix it. Can I try?" and then he looked at me and said "No. Stay away." \[laughter\] Yeah, I to next-level brave.

**Mat Ryer:** Yeah. Well, what a great way to learn stuff though, isn't it?

**Johnny Boursiquot:** Break them, yeah.

**Mat Ryer:** How often does that memory come back to haunt you, Natalie?

**Natalie Pistunovich:** Every time I'm asked, at least... \[laughs\] Every time I get to speak with other junior people. To give the good example of it, obviously, we'll break something, so...

**Mat Ryer:** Right.

**Natalie Pistunovich:** ...be reasonable about your expectations.

**Mat Ryer:** \[00:22:01.09\] Nice.

**Johnny Boursiquot:** I'm curious if you have a way -- like, now that you're older and wiser, and you've been through the experience, and it was a great teacher... I'm wondering, do you have strategies now for doing things that are scary, that could break things? Like, do you have a strategy for tackling that now?

**Natalie Pistunovich:** The thing is we did everything right at the time, right? So we did all the tests we could think of, we thought what do we expect in the logs, in the monitoring, in the dashboard, and we observed. So the only thing that I would do different is not deploy before lunch. \[laughs\] So you can, I guess, observe for longer. Speaking of spooky things, right?

**Mat Ryer:** What were you having for lunch?

**Natalie Pistunovich:** I don't think I had lunch that day. I mean, I was like \[unintelligible 00:22:44.22\] stuff, but I don't think I had a lunch-lunch.

**Mat Ryer:** Yeah, there's another theme emerging here... One of the main reasons to write good code is so you can just have lunch... For a good reason.

**Natalie Pistunovich:** That's another thing I would the differently; I would write good code. Yeah. \[laughter\]

**Mat Ryer:** That's optional. If you've got good tests, you don't need good code. Controversial.

**Johnny Boursiquot:** So to me, what I usually tell junior members of staff is to be like, "Look, we expect you to break things. It's just part of sort of maturing as an engineer. What is helpful, and even if you follow the playbooks and you do the right things and everything else, sometimes things will go wrong; whoever writes these things, how many people have touched the documentation you're looking at, there's a chance that they might have overlooked something, or they took something for granted that you as a junior haven't encountered yet, so you don't take it for granted. So there's some steps in between. So there's some unwritten things in between the lines, that are sort of being conveyed, that you have not yet matured enough to kind of pick up on. So just document every step you take."

It's much easier for the team to go back and say "Okay, what --" Because the first thing they're going to do is ask you, "What did you do?!" Right? \[laughter\] So after everybody calms down, you can say, "Well, these are the steps I took." Even to this day, I do this, right? If I'm working with a system that I haven't come across before, and I don't know what the side effects are of the things that I'm going to do, I'll literally, in a document somewhere, literally be copying the commands that I'm issuing in the command line - I'm literally gonna copy them into this doc, and I'm basically I'm capturing the output as I go.

Now, one could say that's sort of extreme... I mean, again, if there was a playbook for it, if there was some automation that I could just click the button, or issue the command and let it do its thing... But if I have to do this step-by-step thing, that means there's no playbook for it. That means there's no automation, there's no script, whatever it is. So I'm just gonna be literally documenting what I'm doing step by step by step, and if something breaks, I know exactly what broke. Or if I can't tell what broke, I can ask my team and say, "Hey, these are the steps I was following." Right? And then nine times out of ten - maybe I'm just lucky - they'll be like, "Oh, yeah, this thing - you should have done this command before you do this", whatever, and then we find out that there's a gap in the documentation, or a gap in the process, or something like that.

**Mat Ryer:** Yeah. And you can update it.

**Johnny Boursiquot:** Yeah. So literally, just track what you're doing; that may actually end up helping you. Hey, guess what - that might even turn into a playbook or an opportunity for automation for whatever it is that you're working on.

**Mat Ryer:** Yeah, it's like step one, SSH in. Step two, check the Go version. Step three, drop all the database tables. \[laughter\] Spot the problem.

**Natalie Pistunovich:** It's just pen testing. It's fine.

**Mat Ryer:** Exactly. Yeah. You shouldn't be able to do that, really. If you can do that...

**Dee Kitchen:** I think that's important though, that they're taking steps, because it helps with something else... It helps people admit that they've possibly done something. Who in their early career has got the courage to say, "I've \[unintelligible 00:25:31.27\] up", right? "I potentially have lost you money, or time." Most people are terrified; and you're terrified legitimately, because you've got no experience in the industry, you're brand new, you're finally being paid to do something, and you think you're not very good. We're long in our career, and we probably think we're not very good. So early career, you're crushed. And that ability to turn around and go, "That might have been me. I think I did that. I pressed this button, and then it broke." That's tough.

**Mat Ryer:** \[00:26:01.02\] Yeah. Well, I think that speaks to like the blameless culture that's important. It's important to reach the point where your people aren't punished for these mistakes... Because the last thing you want is people - like you say, they bury it, they try and hide it, or just don't tell anybody, which could make the problem much worse. So yeah, I think that culture plays a big part, doesn't it?

**Kris Brandow:** Yeah. You should always blame systems and not people. If something went wrong, it's not the person's fault, it's why did the system allow the person to do that?

**Mat Ryer:** Right. So when Johnny says something that's mean to me, it's not Johnny that I have to complain about. It's the system that lets Johnny get on the podcast and be horrible to me. \[laughter\]

**Kris Brandow:** Exactly. It's part of the system to be mean to you, Mat, don't you know?

**Johnny Boursiquot:** Indeed.

**Mat Ryer:** Yeah, it feels like it sometimes...

**Break:** \[00:26:51.00\]

**Mat Ryer:** Have we got any more horror stories? Oh, by the way, this campfire's warm isn't it? We can probably put an effect of a campfire over the top; let's pretend we're all gathered around a campfire. Oh, what do you think of the campfire, Johnny?

**Johnny Boursiquot:** Sure. Yeah, yeah. \[unintelligible 00:28:44.21\]

**Mat Ryer:** I'm convinced by that performance, Johnny... Have you done actual theater? What about you, Kris? What do you think of the fire? It's cozy, isn't it?

**Kris Brandow:** Sure.

**Mat Ryer:** Okay...

**Kris Brandow:** Crackly, warm fire... We don't have any marshmallows, so it's not as good...

**Mat Ryer:** Don't we? It's imaginary land. It's podcast land. You can have anything you want. Check this out... What's this? Look, look at your face... Look, it's marshmallows. Natalie, what do you think of the fire?

**Natalie Pistunovich:** It shouldn't be burning servers...

**Mat Ryer:** No, it shouldn't be burning servers though... No, this is a fire that doesn't actually release any carbon. It's a good fire.

**Dee Kitchen:** It's basically my GPU overheating. \[laughter\]

**Natalie Pistunovich:** It's the \[unintelligible 00:29:24.02\]

**Dee Kitchen:** The money fire... My electric bill...

**Kris Brandow:** It's some old Intel Macs, you know... We just turned them on, opened Slack, and now they've made us a nice fire. It's good.

**Johnny Boursiquot:** \[laughs\] Just have Slack and a regular expression running; it'll generate enough heat to cook your marshmallow.

**Kris Brandow:** And those fans can definitely fly us somewhere. We could all go visit Mat in the UK.

1:Yeah. I mean, make sure you do go through proper passport control. Don't just fly in at any point, because that's illegal. But yeah, otherwise do, please visit; we'd love to have you.

\[00:29:57.26\] Yeah, I remember talking about hot CPUs... The CPU Hot program that I used to have on an Amiga, and basically run it, and it made the CPU hot. And that was a program that you could have -- it was on like a front of a magazine, for some reason... "What's that doing...?"

**Dee Kitchen:** Someone wrote another infinite loop...

**Mat Ryer:** Yeah, there you go. They've turned their horror story into a big success story, because they got on a magazine cover with a floppy disk. So...

**Natalie Pistunovich:** Interesting. Now with the energy costs going up here in Europe, all the heaters are becoming more expensive, because people assume they will not have gas to heat their house. Many apartment buildings have these systems with gas. So you buy like electrical heaters to warm the place in case you might need that. And they've become really expensive. So really, what you're saying is that all you need is an old computer... Which is probably cheaper at this point.

**Mat Ryer:** I bet we see a spike in the downloads of Slack in that area... \[laughter\]

**Natalie Pistunovich:** Or that CPU Hot...

**Kris Brandow:** How many Electron apps can I install on one machine?

**Mat Ryer:** Okay, has anybody got any other horror-horror stories?

**Dee Kitchen:** I've got more... I've got one which is something that's kind of triggering. I don't know if anyone else has got sort of triggers from being horrified. One of my old bosses used to come to me, and if he started the sentence with, "What do you know about...", then I knew immediately it was downhill. It's like, "What do you know about Perl?" It was like, "Uh-oh... Where is this going?" Or "What do you know about directory services in exchange?" It's like, "Um... That they exist?" "Great! You'll do!" and off you'll be shipped to a client site. \[laughter\]

And I ended up at one of these clients sites, and there was a customer... And it was a big, big company. And they were basically doing a split. Merger and acquisition is the normal thing you hear about; they're doing the other thing, they're splitting in two. And they basically said to the contractor, the company I worked for, to split their Active Directory, to clone it, and then rename it to the other company name, so they had a perfect copy renamed. And I just turn up on site, I know a bit of Visual Basic, a little bit of C\# at that point... How do I approach this problem? I did not know at all.

So I get in touch with Microsoft Professional Services and go "How would you do this?" And they're like, "You don't. That's impossible. Don't do that. That's reckless and foolish, and it's not supported." And I was like, "Okay, but I'm being paid for this, and I know no better, because I'm barely in my mid-20s, and I'm gonna take a stab at this."

And I wrote a script for the registry on one of the cloned Exchange Server machines, and I basically renamed everything. And I fired it up afterwards, and it worked.

**Johnny Boursiquot:** Wow...

**Dee Kitchen:** That was my day's work done. I left. I have no idea whether that worked... \[laughter\] It appeared to work.

**Johnny Boursiquot:** "Why \[unintelligible 00:32:41.22\] notice exactly after this project ended?" "Oh, I don't know. I don't wanna know." \[laughter\]

**Dee Kitchen:** \[unintelligible 00:32:48.02\] contractors, that's what you get.

**Mat Ryer:** Wow... That could have just worked though. But you know, I never trust code that works first time. That's why I like a failing test before...

**Dee Kitchen:** The only thing that I was really, really scared about -- the name of the company in the Active Directory was six characters long. And I was reasonably sure that that was a magic value. So I asked them for a new name to be the Active Directory name that was also six characters long. That's the only thing that I think was intelligent about what I did that day. The rest of was luck...

**Natalie Pistunovich:** And lots of regexes... \[laughs\] Again.

**Johnny Boursiquot:** Yeah... Good call.

**Mat Ryer:** Spooky... Spoopy.

**Kris Brandow:** Spoopy...

**Dee Kitchen:** But yeah, that's the scary question... No one's asked me that for years. "Hey, what do you know about...?"

**Johnny Boursiquot:** Now you'd be like "Nothing... Nothing. Nothing at all. I don't want to know anything about it. I know nothing."

**Dee Kitchen:** Maybe that's the thing though... When you see people late in their career, and you're just like "What do you know about this?" and you think they're doing the "I've forgotten more than you'll ever learn", but no, they're actually going "I don't want to do this..." \[laughter\]

**Mat Ryer:** Active Directory. Never heard of it, mate. Never heard of him. \[unintelligible 00:33:55.26\] man's name... Active Directory. That's a weird name for a man. I think that's a man, just really selling that you know it, just to get the job... Oh, just a tip there for people that want to get into that. Like I said, I'm jet-lagged. And this is a spooky Halloween party special... How are those marshmallows looking, Kris?

**Kris Brandow:** \[00:34:15.10\] They're toasty, and brown, and delicious.

**Mat Ryer:** Oh, perfect. Well done. Are you gonna share, or...?

**Kris Brandow:** No...

**Mat Ryer:** Nah...

**Kris Brandow:** These are my marshmallows now.

**Mat Ryer:** Yeah. Although they're imaginary, but... But you know, I still want one.

**Kris Brandow:** We have an infinite supply. Everybody can make their own marshmallows.

**Mat Ryer:** Oh, yeah. Okay.

**Natalie Pistunovich:** All you need is an infinite loop.

**Johnny Boursiquot:** Speaking of loops, I have a scary story... But it's actually the story that I think helped me gain a new appreciation for sort of how to integrate systems, how distributed systems have sort of pitfalls, there's a trade-off for everything, and all the things that we value as best practices for dealing with integrating systems.

So I was working for an organization, a very awesome organization, a nonprofit, which basically helps students, especially in underserved communities, sort of prepare to take sort of standardized testing, and that kind of thing. So for months, leading up to a major sort of testing day - students are going to come, sit down into their classrooms, they're going to be logging in and taking an assessment to help them with the real things. And this is like a coordination across multiple schools and everything, so that the whole county is doing this thing. So we're talking maybe like 3,000 to 4,000 students that are gonna all sit down and do this thing.

**Mat Ryer:** Wow.

**Johnny Boursiquot:** And basically, I'm part of the team that basically has been working on this sort of integration for months now. We had different systems talking to each other, and everything else. And development, and even in staging, everything works perfectly. \[laughs\] Systems can talk to each other, we're sending lots of traffic, keeping an eye on things, and we are observing to the best of our ability with the tools that we have on production day, basically, which is when students actually sit down to do the thing...

What we didn't test against is basically having roughly 4,000 students trying to log into the system at the same time. \[laughs\] And because you have these systems that are talking to each other for authentication, and pulling things, whatever it is, basically, we just had a thundering herd kind of situation happening, and we didn't account for that, because all of our tests, even our integration tests and everything else - they didn't factor in that kind of scale. And I take responsibility for that, because I was one of the team leads, and basically, one of my questions was supposed to be, "What is the expected number of users and clients on this system?" And we touched on these things, but there were bottlenecks in the system that we should have better accounted for. And thankfully, we had enough of an understanding of what was happening, we had enough observability to be like, "Oh, crap, we know where the bottleneck is. We need to go do this", whatever.

So within a matter of about an hour and a half or so, while students are waiting there - because they can't really dismiss everybody and send everybody home; we're talking like countywide 4,000+ students, all this coordination across months... To me, this remains the best and worst moment of my career, because I'm like, "Here I am, I'm supposed to be serving these kids." Often, we are so far removed from the consequences of our code, right? Good or bad. We're so far removed from it. But here I am, I knew exactly what the impact that my mistake was having on these kids, right? And they already have been given a short straw in life, and here I am just making that worse, right?

So after that incident, I was never again, like, "What do I need to do? What do I need to learn? Who do I need to talk to?" Like, it was -- I had to level up. And any point in my career - I can't remember a single incident that has driven me to level up as much as this one, because the impact was so real. It was so in my face. Just undeniable. I thought that was scary...

**Natalie Pistunovich:** \[00:38:11.13\] That is the $1,001 bill.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Listen, I would have gladly handed over $1,000 out of my pocket like to be like, "Look, whatever this is, make it go away right now."

**Mat Ryer:** Like, to the kids. Just give it to the kids.

**Johnny Boursiquot:** To the kids. \[laughs\]

**Mat Ryer:** "Uncle Johnny has messed up again. Come and collect your $20 bills, everyone... No college for you, but here's some..." Yeah, that's horrific. Yeah, but when the stakes are that high, Johnny, it's like... That is scary.

**Johnny Boursiquot:** Yeah. And you feel awful. Like awful, awful, awful for being the responsible for that.

**Dee Kitchen:** What do you think about engineers sort of having that sort of sense of consequence? Because it comes in multiple directions; you get salespeople going, "If you don't do this, we're gonna lose a million-dollar deal." It's not that the engineer's gonna receive no million dollars round. They're just gonna get their normal salary; they're getting the normal pay. That's a little bit abstract. It's a ton of stress.

And likewise, when you're working in incidents, someone will turn and go, "It's affected this air traffic control signal" or "It's affected this sort of kids, or hospital, or the traffic lights are down" or whatever. Kind of unhealthy, isn't it? It's like, we've got to keep it abstract enough that -- because I get that it changes us. Probably all of those incidents changed all of us. They were all horrifying moments. But I'm also like, "That's the path to burnout, sort of accepting the consequences for all of these things."

**Mat Ryer:** Yeah. Some value in being somewhat abstracted from the consequences.

**Dee Kitchen:** Yeah. If you consider it too much, it just weighs so heavily. It's too serious. It's too much of a... And the things you need to do to actually get out of those situations - they become even more horrifying and scary. "What if I prolong this? What if I make it worse?" And sometimes you've just got to be a bit fearless, and you can't if you've got that sort of burden on you that we put on ourselves.

**Kris Brandow:** I feel like this is where systems can be helpful, though. I think we as an industry are pretty bad at understanding that there can be bad consequences. It's like, something terrible happens and we're like, "Oh no, this terrible thing happened", but so much of the time, that terrible thing was completely predictable, and we just didn't predict it, because we thought it'd go fine.

Like, I worked for a lifeguard -- when I was young, I worked as a lifeguard, and I remember one of the things that we always did is we trained a lot, but also did a lot to make sure that the environment was always a safe one. So we did a lot of that. That's why lifeguards yell at people so much, and they're like, "Don't run! Don't do these things that might result in you getting injured." I kind of feel like in software engineering we just let people do whatever, and then people slip and bash their head, and they're bleeding all over the place, and we're like, "Oh no, how did this happen?" And it's like, "Well, not only did we not tell people not to run, but we also left giant puddles of water on the floor, because we didn't put down the proper mats to make sure that, if they are running, they can do it safely..." Like, there's all these other things that you have to set up as precautions. I feel like in software engineering we just kind of don't do... And part of me wonders if we don't do that because there aren't enough consequences flowing down to the engineers.

I feel like the number of times I've been at companies that -- I've worked at banks, and people have been like, "Well, this isn't like life or death." And I'm like, "This is affecting people's money and their livelihood. What do you mean?!" And like, that's always the thing that gets rolled out, is if it's like, "Oh, well, we're not doing things that could kill people." It's like, "Well, but we're doing things that can substantially affect people's lives", and I feel like we have to take that into account. Because when we don't, we do lots of immoral things, like run psychological experiments on people without their knowledge, and other terrible things, because we're like, "Ah, what's the harm?"

**Mat Ryer:** I haven't done that for weeks. I don't know why you're bringing it up. \[laughter\] It's spooky, ain't it? It's a spooky show.

**Break:** \[00:41:59.11\]

**Kris Brandow:** I have a spooky story, I think... It feels spooky. So I'd recently joined this company, and of course, because it's the modern day, they're using Kubernetes.

**Mat Ryer:** Classic.

**Kris Brandow:** And of course, they're using all the shiny things with Kubernetes, so \[unintelligible 00:42:16.28\] Istio. No one actually knows how any of this works. It's just like, "Oh, this is what we're supposed to be using." So we have this big ol' cluster, and it's running, and our DevOps people are pulling their hair, because they hate all of this... And I start like reading through the codebase and looking at things, and I'm like, "Okay, these auth policies look a little funky." And then I go talk to people, and they're like, "We don't really have any auth policies. Everything's just kind of open right now. Like, everything in the backend can just talk to each other. There's no auth policies." And I'm like, "Are you sure? Because I see these auth policies in the codebase." And they're like, "Yeah, but we don't think they're being used for anything." I'm like, "Okay..." So I just kind of like let it go, and go about my business... And then I have like a few more of these conversations, and I'm like, "This feels weird. But you know, all these people know more than I do."

And then months and months later, someone stumbles across this one auth policy that has no labels, and no access rules, which in Istio language means that it applies to literally everything, and allows all traffic in. So this one policy had just opened our entire API, including the public API, to the entire internet, for anybody to do anything without needing any authorization. You just needed like a JSON web token that you could easily get from anywhere. And I was just like -- so it caused all these problems, everybody's freaking out, and then they just rip that policy out and they're like, "Okay, well, without this policy, we'll be fine." But then all of those auth policies that had been sitting there, that I was like, "These look funky", all those took over, and all of those were broken. So then it broke all the APIs. So then they had to put the other policy back, and then go through, and like, go find every single auth policy within Istio, and then fix all of those auth policies, and then they could finally remove that one policy that was opening everything to the world.

I think the total amount of time that the door was just open was about nine months, and to the knowledge that people had, nothing bad happened... But yeah, it was quite horrifying.

**Johnny Boursiquot:** That is still a security incident requiring disclosure, I'm afraid.

**Kris Brandow:** Yeah.

**Dee Kitchen:** I know. I'm just like, "Is this disclosure?" \[laughter\]

**Kris Brandow:** Yeah, it was like, "Oh... Oh, no." It taught me a lesson that like when I see funky things, I should probably bring them up a little bit. Like, "No, no, that policy is there", and that policy definitely doesn't work. And some of the broken things were like some YAML white spacing thing, where it's like something was tabbed in a little too far, and then people were just copying and pasting these policies, and then not testing them, which was like another thing that we had to go back and be like, "Please test the things that you put into the codebase... Pretty please, thank you..."

**Mat Ryer:** Yeah, I think that also is a bit of a lesson, is if there are bits of code and you're like, "No, yeah, but that doesn't do anything now. Like, that used to be doing something and now it doesn't." It's like, either take it out... If it's really not doing something, get rid of it."

**Johnny Boursiquot:** Prove it.

**Mat Ryer:** Exactly. It probably is doing something... And if it isn't, maybe it should be, like in your case, Kris.

**Kris Brandow:** Yeah.

**Mat Ryer:** Spoopy...

**Natalie Pistunovich:** The zombie apocalypse.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** ...will be caused by Istio... \[laughter\]

**Natalie Pistunovich:** Zombie code just haunting us.

**Dee Kitchen:** I'm never sure what's worse than those things... Like, the insecure environment, where it just like nothing applies, or the extremely secure environment. I've seen somewhere, they've been really locked down, and like everything; you've got an IP firewall rule for everything, and you're like, "I have total confidence." And then mysteriously, API calls between machines just didn't work. And it's like, "Why now?"

And what we realized - the debugging for this went wild; it went really low. And we were down at Wireshark and we're watching what's going on, and we're watching what's going on inside the kernel, but we were turning on contract connection tracking. And this is in TCP, it's got little tables, state tables in there to keep track of the sort of TCP connections. But you can overflow these tables; we were turning them off, and every time we turned them on and off, we were toggling which IP firewall rules were actually matching or not.

\[00:46:16.09\] So we were taking existing connections and then just randomly dropping them every time we flipped these things... But we could never observe it, and we were just there the whole time, just going "We've lost it again. There goes the connection."

And it took us weeks of just poking around, going "What's going on? I can't see it. Ghost in the machine." Yeah, too secure is a problem. Honestly.

**Mat Ryer:** Well, in that spirit, Dee, what's your pin number? Just give us three of the numbers. Let's play mastermind.

**Dee Kitchen:** It's just like -- what was it, Spaceballs? 1234... \[laughter\]

**Mat Ryer:** Yeah. No one's gonna suspect that, I think. No one's going to try that, are they?

**Kris Brandow:** 0000...

**Dee Kitchen:** Does it allow you? I don't think systems allow you to do that.

**Mat Ryer:** Why?

**Dee Kitchen:** I don't know. I'm gonna try and change my pin now... \[laughter\]

**Mat Ryer:** Oh yeah, I don't know... Maybe because it's too easy. But I don't know. Any other horror stories before we throw a -- what do you put on fire, water? You don't do that, do you? You just let it die out on its own. No, we've got to be responsible. How are we going to sort this fire out?

**Johnny Boursiquot:** By throwing water in the electrical equipment?

**Kris Brandow:** Foam. We'll use foam.

**Dee Kitchen:** Turn it off.

**Kris Brandow:** We'll use found close Slack. Yeah, close Slack...

**Mat Ryer:** Yeah, and the fire will die down. So before we put the fire out, has anyone got any other final horror stories?

**Dee Kitchen:** Well, you know a few of mine... Any one you want to hear?

**Mat Ryer:** What, do you mean in real life? \[laughter\]

**Dee Kitchen:** I wrote one down, which actually I wrote in advance, about doing a SQL statement and accidentally double -- putting in the semicolon after the from table. So an update. So the WHERE statement didn't apply... And that was to a production system...

**Mat Ryer:** So what was the effect of that then? So normally, you would be updating something and specifying the WHERE, which will limit what gets changed, right?

**Dee Kitchen:** Yeah, exactly. I tweeted this when you actually asked about it, and I think no one really appreciated what it does and how it happened. But I executed the query; I was just tidying up some debt that was leftover, and it should have been really trivial... And I practiced it, and then I copy and pasted it into the console. But after I copied and pasted the first one, for whatever reason, I fingered a semicolon, and then put in the WHERE line. But that makes it two commands. So it successfully did the update column set value equals on table, and it didn't apply the WHERE. So it updated -- I think was like 90 million rows, or something...

**Kris Brandow:** Oh, God...

**Dee Kitchen:** And the machine was very fast; faster than I was at finding Ctrl+Z.

**Mat Ryer:** Oh, no...!

**Johnny Boursiquot:** And that's why you work inside of transaction blocks, kids. \[laughs\]

**Dee Kitchen:** That's why that's advisable, but it was not what I was doing that day. The real \[unintelligible 00:49:00.24\] was actually sort of going "How can we restore this when our database backup was like 12 hours ago, and there's 12 hours of changes in other tables since then?"

**Johnny Boursiquot:** Ouch...

**Dee Kitchen:** So you're not going to sort of do anything there. So it's a pull the old sort of thing, extract that table, and then go and update all the necessary rows to the right things. It takes time...

**Mat Ryer:** Yeah. I liked that you couldn't keep up because the machine was so fast. Is that why you now insist only on running on Raspberry Pi's?

**Dee Kitchen:** Intel Max. Run on Intel Max. It's the solution for everything. \[laughter\]

**Mat Ryer:** Okay, well that sound - we all heard that sound, didn't we? How would you describe that sound that we just heard?

**Dee Kitchen:** Spooky...

**Mat Ryer:** Natalie? Spooky, yes... Natalie, how would you describe that sound we've just heard?

**Natalie Pistunovich:** Did I miss the sound?

**Mat Ryer:** Yeah, we heard that sound... Kris, how would you describe it?

**Natalie Pistunovich:** Was it the marshmallows?

**Kris Brandow:** I think it's the sound of us closing Slack so our fire's going away.

**Mat Ryer:** Was it marshmallows? Yeah, it's kind of a spooky sound... Wasn't it, Johnny? How would you describe that, Johnny?

**Johnny Boursiquot:** As silent as your hairline? \[laughter\]

**Mat Ryer:** \[00:50:13.05\] I mean, it's getting very poetic, and slightly unusual banter there...

**Johnny Boursiquot:** You asked for it. I mean, you did ask for it.

**Mat Ryer:** Amazing. Yeah. Is it silent because it's so far away? Like, it's in the distance... That's what we mean. Like, it's screaming, but you can't hear it...

**Johnny Boursiquot:** It's too far back?

**Mat Ryer:** Yeah. It's just screaming "Why, dad?! Why?!" You know what I mean? If you know you're going to look like this, don't have kids. If you know you're gonna make kids that look like me, don't have them. That's my advice... But dad didn't listen.

**Johnny Boursiquot:** We're all talking about recessions nowadays, but you've been in one for quite some time, right Matt? \[laughter\]

**Mat Ryer:** Oh, there we go... That was a good one... That was a good one, yeah. Good point. Okay, well... That sound of Johnny talking tells us it's time for... Unpopular Opinions!

**Jingle:** \[00:51:16.25\]

**Mat Ryer:** Okay... Who's gonna kick us off with the first popular opinion? Dee! You've been chosen.

**Johnny Boursiquot:** You scared him. He was like, "What?! What happened?! What happened?!" \[laughs\]

**Mat Ryer:** It's just sounds. I promise no one's pushing their hand around the Ouija board to make it spell out about my hairline. I don't want to hear anything from the ghosts about my hairline, Johnny... Right? So don't make it do that. Everyone put your hand on it. Let it be natural, and we'll see. Yeah, it's floated over to Dee. Okay, Dee...

**Dee Kitchen:** It was a fix... \[laughs\]

**Mat Ryer:** ...what's your unpopular opinion? It was a fix, yeah.

**Dee Kitchen:** Mine comes from the last Go Time. One of the guests said that Go is brilliant, you don't have to worry about security; it does everything for you. You don't have to worry about the memory management. Everything's super cool. And I think it actually has made Go more insecure, because people are so -- they put so much trust and safety in the actual sort of language, that a lot of the basics are dropping by the wayside.

For me, the number one thing people should do is sanitize inputs. And it's not because I wrote \[unintelligible 00:52:35.20\] but they should do it on everything. And I just don't think I see anyone doing it anywhere. There's just great, big holes in everything, but people are still there going "But we've got memory safety." Memory safety saves you from yourself, not from others.

**Mat Ryer:** Hm... What do we think? Is that popular, or unpopular...?

**Kris Brandow:** Well, it should be popular... Sanitize all your inputs?

**Dee Kitchen:** It should be. But if you look at all of the open source stuff that's out there, very few people actually sanitize, check, validate their inputs. They're just like "I've mapped this input directly to a struct, and I'm going to use it." They take their form fill, and they're on their way.

**Mat Ryer:** Yeah. One simple version of that is just a limit reader when you're reading a body, or like of a request; you can error if it's too big, and things like that. There's bits like that. But you end up doing quite a lot of that heavylifting yourself every time.

**Dee Kitchen:** There are libraries out there where you can add tags and say "This should be a text field. It should be no longer than this length. There should be a number, and it should be no longer than this." But far too few projects do it.

**Mat Ryer:** Do they use reflection? I think I've avoided them if they -- but it's not a great reason to avoid it. I just tend to not...

**Dee Kitchen:** Why are you afraid of your reflection? Are you a vampire?

**Mat Ryer:** Well, it's because I am DraCool -- \[unintelligible 00:53:54.11\]

**Kris Brandow:** Because he doesn't want to see that hairline, obviously...

**Johnny Boursiquot:** Ohh...!

**Mat Ryer:** That's why I don't have mirrors...

**Johnny Boursiquot:** Kris is in on it... Alright, everybody take a turn.

**Mat Ryer:** Yeah, Kris is in on it.

**Johnny Boursiquot:** Take a stab at Matt... \[laughs\]

**Mat Ryer:** \[00:54:10.12\] I'm like a pinata. I'm like a really rubbish pinata. Imagine buying a pinata for kids and it's me. \[laughter\] You'd take it back, wouldn't you? You'd be like "No, we'll probably go for the unicon instead, on second thought... I should have guessed that, really..." Okay, yeah. Fine. Thanks, Kris. It's a Halloween special, you're allowed to do that...

**Natalie Pistunovich:** Spooky pinata.

**Mat Ryer:** Yeah, exactly. Okay, and other unpopular opinions?

**Natalie Pistunovich:** I have one.

**Mat Ryer:** Natalie PistunoWitch...! \[wolf howl\] They don't know I've just done that, so it just sounded like a sound effect in the background. Come on.

**Natalie Pistunovich:** Some of the training that you should be taking occasionally throughout your career, even annually, should not be about things that are in the future, like new things, like new technologies coming and so on, but also a little bit about the back. A little bit of Assembly every now and then. It might be useful accidentally at some point in your life, because you did it, and even if not, it might -- like, you'll see patterns, because it's all the same things, with just more and more abstractions. But it's still the same things. Just seeing how it's done, and how things were solved, and how problems worked... It might help you figure out the future when you rely on the past.

And it's unpopular -- I know, you will \[unintelligible 00:55:23.11\] I also did not do that, and don't allocate time or budget for that.

**Mat Ryer:** Hmm... I do know what you mean. I actually have this book called, "But how do we know?" I got it off the Amazon website. And basically, it talks about computing from the very bare beginnings, like literally logic gates, and then how you make a bit out of two NAND gates, just showing how the logic works... And then building up everything in a computer like that. And it is amazing. But yeah, that was like, not something I need.

And actually, something else that occurred to me when you were saying that one is having like training or paying attention to things that you already think you're good at. So not just new things that are new to you. Things that you already think, "Yeah, I've got that nailed." You might be surprised; like, plenty of other things to learn. Yeah, I like that one. We'll test that one, and see if that's unpopular or not.

**Natalie Pistunovich:** Even the way you did that is interesting, because you were already a couple of years a software developer, and then you look into gates, and so on, and that kind of helped you put this in place. When I started my degree, the first course I did was those logic gates, and everything was scary; calculus was scary. And then those gates - like, what? I don't know, just let me pass that test and leave me alone. And if it could be the other way around, start with the programming courses, and then you go about semiconductors, and then you go about circuits, and then you speak about gates - it might have been more interesting, and actually it would make more sense. Maybe for me, at least.

**Dee Kitchen:** I think that's the path that people take accidentally. Like, those who do bootcamps, and then they gradually, eventually, over like 5-10 years become like systems engineers and are working on like the Kernel, or TLS, or something - they don't know they're doing that, but that's kind of what we're doing. They're looking back at the fundamentals. I agree it's unpopular. I don't know anyone who does that, but I think it's genius, and we should.

**Natalie Pistunovich:** We should open a university teaches that way.

**Kris Brandow:** I feel like that's how my career has been. I just have gotten like down the stack further and further...

**Mat Ryer:** That's interesting, yeah.

**Kris Brandow:** It's been fun. I've written like a few operating system kernels, like toy kernels. It was infuriating. Modern processors are terrible... But mostly because they're so old. Like, "Oh, maybe I have this code from the '70s I might need to run on my Intel 12-gen chip", or something. You never know. It's like, "No, Intel, I don't need to run code from 1980 on my new processor. Thank you."

**Mat Ryer:** I like that too though, that people can start higher up in the stack, and can still be doing things without understanding everything. Because I've seen it, people held themselves back because they think "Well, I just don't know how all of this stuff, and I need to--" They don't know that they don't need to know it necessarily, which is why I say you sometimes don't need to know a lot of this stuff. Just sort of get on with it, and try things... But it doesn't work for everybody. I think there's so many different styles and things that people appreciate, and things that work... So I wouldn't like to force it on everybody; as we like to say, it depends.

And I'm afraid - put down your goblets of red wine. Yes, it was definitely wine, yeah... And put also away those sandwiches of miscellaneous... No, there weren't any sandwiches. No, let's just not do the sandwiches, but we'll do the wine but, and then keep the wine, because they think it's blood.

Okay, and that's all the time we have on today's Ghost Time. Thanks for joining us, everybody. See you next time, and stay spoopy!
