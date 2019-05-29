**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about Go modules and the Athens project. I'm joined by the one and only Carmen Andoh. Carmen, hello...

**Carmen Andoh:** Hello, hello!

**Mat Ryer:** How have you been?

**Carmen Andoh:** I'm doing well. And you?

**Mat Ryer:** Not bad, thank you. And guess what, I've got two other friends with us today. Would you like to meet them?

**Carmen Andoh:** Yeah, it's exciting!

**Mat Ryer:** Imagine if you just said no...

**Carmen Andoh:** Oh, that would just be equally as trolling--

**Mat Ryer:** You'd ruin it.

**Carmen Andoh:** Nah, I'm not a troll.

**Mat Ryer:** Well, we're joined today by two contributors to the Athens project, and we're gonna learn a lot about Go modules, and dependencies, and things from Aaron Schlesinger and Marwan Sulaiman.

**Marwan Sulaiman:** Hello!

**Aaron Schlesinger:** Hello!

**Mat Ryer:** Did your names fall out of my mouth correctly?

**Marwan Sulaiman:** 99%.

**Mat Ryer:** If not, you're welcome to correct it.

**Aaron Schlesinger:** Yeah, I'll give you 99% as well.

**Mat Ryer:** Oh, 99% is great. I work in machine learning, anything above 80% is brilliant. \[laughter\]

**Carmen Andoh:** Motto for life.

**Marwan Sulaiman:** Let's talk about that.

**Aaron Schlesinger:** Yeah, let's talk about that.

**Mat Ryer:** Aaron, you've been on Go Time before, haven't you?

**Aaron Schlesinger:** Yeah, I was on Go Time in 2016, I think. Back in the day.

**Mat Ryer:** And what did you talk about?

**Aaron Schlesinger:** I talked about teaching Go, and the Go in 5 Minutes program, and design patterns, I think.

**Mat Ryer:** Oh, wow. Great. That episode's still available, I guess, if anyone's interested to travel back in time and go and listen to it. Well, don't travel back in time; just listen to it now.

**Aaron Schlesinger:** Yeah. I was looking it up the other day; I think it's \#18, or \#19 or something.

**Mat Ryer:** Oh, wow. Very early then.

**Aaron Schlesinger:** Yeah, I was an OG.

**Mat Ryer:** Great. And Marwan, you have a very interesting back-story, I think... Assuming it's true. Why don't you tell us a little bit about that, please.

**Marwan Sulaiman:** Yeah, you're just gonna have to take my word for it. I am a Go developer from Baghdad, Iraq. I grew up in the early 1990s, which reveals my age a little bit, but it's kind of part of the story... Because even though I grew up under dictatorship, I was very lucky to have had a personal computer at home. I feel like my mom's story is a lot more interesting than mine, because my mom was actually a COBOL developer in Iraq in the '80s and '90s. Her job was a database design, transferring a lot of the Iraqi institutions from being paper-based to digital-based.

**Mat Ryer:** Wow.

**Marwan Sulaiman:** \[00:04:04.12\] But because fo the U.S. sanctions at the time, her developer salary was basically a sixth of what a personal computer would cost; the monthly salary, that is. Obviously, you'd have to save up for six months without spending a penny to be able to afford a computer at the time. But her father actually had sold the house, because he was targeted by the regime for a completely different story... And he had asked each of his six children what they wanted as a gift from the money he had made selling the house, and my mom asked for a computer.

That same computer he bought her is the one that I grew up with, and it's a super-old computer that I went around the internet looking for. I talked to my mom, I was like "Do you remember what it was called?" It was an Iraqi-assembled version of what I've found out to be the NEC PC-6001. In the U.S. apparently it was called the NEC TREK.

It's basically a big, bulky keyboard with a cartridge slot on the side. It came with two cartridges. One was a video game, and the other was the BASIC programming language. Basically, my earliest memory was that I could make it go in an infinite loop, and narcissistically have it say my name in different colors. \[laughter\]

**Mat Ryer:** It sounds familiar.

**Marwan Sulaiman:** And ever since I've always wanted to become a programmer. Fast-forward ten years later, the second Gulf War had torn the country apart, and in 2005 my family was targeted by terrorists, and my mom and dad wanted to send me as far away as possible without having to lose my education... So I actually ended up coming to the U.S. and living with a host family in Connecticut. I went to high school while I lived with them, and then I went to college and I studied International Affairs; I had completely forgotten about programming.

I did not like my first job, and thankfully I did not get the promotion that I wanted, so I quit and I remembered that I liked computers, and I joined a coding bootcamp in New York City, and that's when it all started, and here I am today.

**Carmen Andoh:** Wow.

**Mat Ryer:** That's amazing that your mom was into computers back then. That's amazing for any country.

**Marwan Sulaiman:** It's awesome. It's really funny, we've kind of reconnected in terms of talking about computers, because before I started programming again, for 10-15 years we never even talked about it. She only did it in the '80s and '90s and had switched gears since then.

The most interesting thing is that she still doesn't believe that COBOL is still relevant. \[laughter\]

**Carmen Andoh:** But it is.

**Mat Ryer:** It is.

**Carmen Andoh:** That's amazing. I've read so much about Iraqi culture, and a lot of women in science in math -- one of the Fields Medal winners in mathematics (she passed away a couple years ago) was someone from Baghdad. I can't remember her name, but she went to Stanford, and I just remember reading about her, and then her tragic succumbing to cancer, and all that stuff... So I'm sure your mom is the generation just before her, that led to that, and I'm so glad that she and you share that. Is she still in Iraq?

**Marwan Sulaiman:** Yeah, she recently accepted a job in Lebanon, so she is working in Lebanon. But my whole family is still back home.

**Carmen Andoh:** Okay.

**Mat Ryer:** She sounds awesome.

**Marwan Sulaiman:** She is, thank you.

**Mat Ryer:** Please tell her that from us.

**Marwan Sulaiman:** I will.

**Mat Ryer:** Aaron, do you wanna have a go at a back-story, or is it not gonna come anywhere close to that?

**Aaron Schlesinger:** No, it's the worst...

**Mat Ryer:** You should have gone first... \[laughter\]

**Aaron Schlesinger:** It's not even... I grew up in Chicago and then I moved here. That's it.

**Mat Ryer:** Oh, wow. You actually took quite a lot saying that. I'm a bit annoyed. \[laughter\]

**Aaron Schlesinger:** I know, I should just keep my mouth shut.

**Mat Ryer:** No, no, please.

**Aaron Schlesinger:** But I wanna take that time and instead say, Marwan, I'm super-glad that you remembered that you liked programming, and went through the journey, went through a programming bootcamp, and all that stuff, and among other things working on Athens with all of us.

**Marwan Sulaiman:** \[00:08:07.25\] Yeah, I'm glad I remembered it too, because I really did not like my first job.

**Carmen Andoh:** And I love the story about how it was a failure that prompted you to this path. Maybe it's a reminder that sometimes failure is a really good thing in our life.

**Mat Ryer:** That's a great point, actually. They do say that you don't learn from your successes, you only really learn from your failures... So the smartest people you encounter are probably also the biggest failures. A bit weird.

**Carmen Andoh:** Yup. There's a book called Tribe of Mentors, and he basically just goes around and does interviews with people that have been successful in their different areas, and one of the questions is "What is your favorite failure?" I just love that, because it embraces failure... So would that be your favorite, Marwan?

**Marwan Sulaiman:** I think so. I think being unhappy is my favorite failure, because I tried to get out of it as much as possible.

**Carmen Andoh:** And that's funny, because we had something a couple weeks ago where Ashley said coding bootcamps are predatory, but you were a success story of a coding bootcamp in that respect.

**Marwan Sulaiman:** Yes. Ashley at some point tweeted about how to start learning - for beginners, how to start learning programming - and I made the suggestion and said "I did a coding bootcamp and it worked out for me", and it kind of turned into complete opposite opinions. Some people said it was the worst, some people said it was the best.

I think it's totally true. Some people have had terrible luck, and I am one of the very lucky people that ended up enjoying it, and it kind of worked out. I honestly don't have a scientific answer to why. All I did is really try my best to learn as much as possible about the bootcamp, because I did hear in the beginning a lot of companies don't trust them, they don't know how much you know... There's all sorts of preconceptions about that, so really I just think I lucked out.

**Aaron Schlesinger:** I'm sure you've put a lot of work into it too, and didn't just luck out...

**Marwan Sulaiman:** Well, the bootcamp that I did was interesting... It had an interesting model, which was you don't pay for the bootcamp until you get a job, which kind of gave you a bit of a safety net that you're not just paying a bunch of money to learn nothing. They said "Hey, if you don't end up getting a job, you don't pay us", so part of it was that they really pushed you, to make sure you learn, because otherwise they wouldn't have made money.

**Mat Ryer:** Which bootcamp was it, Marwan?

**Marwan Sulaiman:** It was called App Academy. That was 4-5 years ago. I hope they're still as awesome as they were when I joined. They're in New York City and San Francisco.

**Mat Ryer:** Okay, good. I'm interested - we're gonna get to the Athens project for sure, because I think it's quite an important part of this story - but maybe we could just chat a little bit about the history of Go and dependencies in Go, for anyone that hasn't used it or doesn't know, or maybe you're new to Go.

It was interesting, because it used to just all be about the GOPATH, and one of the nice things I liked about GOPATH was the fact that the import path was also the URL of the project itself, where it was hosted. So it's just a simple thing, but it turned out in practice whenever you would go and look in a project and see a dependency, you could just copy the import path and paste it in the browser, and then it opens that project. I always found that as a kind of cognitive shortcut to be really useful.

\[00:11:56.06\] So I'm quite friendly when it comes to talking about GOPATH. I know that it's one of the most tricky things for a lot of people, and has been a challenge, and there are obviously other problems with it... But it's interesting to see that the Go team kind of acknowledged this as a problem, and the community and the Go team all kind of started to explore different ideas around how to do dependencies differently.

Has anyone got any feelings about anything in the history of that? Were there any projects -- what did you think of the Vendor folder? Was that something that you thought was a good step, or do we feel like that was bad? How do we feel?

**Aaron Schlesinger:** I'll butt in real quick... I think the Vendor directory was probably the most crucial change in Go with respect to dependencies. More crucial, I think, than modules, because it started the discussion about everything we're thinking about and talking about today.

**Mat Ryer:** If anyone doesn't know, vendoring essentially - you copy the dependency at the time that you add it; you actually copy it and stick it in a folder called Vendor, and then the Go toolchain will import it from that Vendor folder if it's there first, before going off and getting it from the website, right?

**Aaron Schlesinger:** Yeah. It was good to start that discussion, and it was also good to establish that there is gonna be sort of this lookup order, if you will, when you're building your project, for how the Go tool is gonna go and find the package that you depend on.

**Mat Ryer:** Right. There's an order; it's gonna check the Vendor folder first, it'll check probably the GOPATH next, and then if it can't find it, it goes off and gets it from the original source.

**Aaron Schlesinger:** Yeah, and if I'm not mistaken, that was one of the first times where it was common to set an environment variable to define where your dependencies are gonna come from as well. I think it was the Go 1.5 Vendor Experiment environment variable that was released after Go 1.5. And if you set it to -- I think the value was "on". If you set it to "on", then the Go tool would first look in your local Vendor directory for the dependency, and if it's there - like you said, Matt - it would build from that dependency, and then otherwise they would fall back to the GOPATH and then up to the version control if it wasn't in the GOPATH.

I just remember seeing that environment variable as an option, and just really liking the -- I guess it's kind of like the Twelve-Factor App sort of feel to it, where I can decide from project to project whether I want to use a Vendor directory or I don't, if I wanna go just use the plain old GOPATH.

**Marwan Sulaiman:** Which now is a flag called -mod=vendor. So you still have that option.

**Aaron Schlesinger:** Yeah, I still feel comfortable with my Vendor directory.

**Marwan Sulaiman:** I always thought that GOPATH was awesome until you needed versions, and that's when things got out of the way a little bit.

**Mat Ryer:** Yeah, absolutely. Because you'd start off -- I mean, this happened to me, where I would have a particular copy of version of the dependency on my machine, so in my local development machine it was using that. Now, meanwhile that project was changing without me realizing, and then when someone else joins and wants to build the same code, of course they don't have it on their machine, so it goes to the web to get it, and now it's changed, and their build doesn't work and mine does. That's just a very simple kind of explanation of the drawback really with the way that that worked. Are there any other--

**Aaron Schlesinger:** Well, what you've just said actually, Mat - that was the primary reason that we started building Athens; it's because there's been so many breakages like that across the community.

**Mat Ryer:** \[00:16:06.16\] Yeah. I did hear one thing early when I was in Go, that really resonated and also did sound a bit funny, which was when someone asked that question "What do you do if the packages change?", I think the answer was "Well, don't change them." So once you've released a package, don't change it.

**Aaron Schlesinger:** Yeah.

**Mat Ryer:** And to be fair, that does work.

**Marwan Sulaiman:** Maintain compatibility forever.

**Aaron Schlesinger:** Yeah, forever.

**Mat Ryer:** Well, you see, the Go core team do that. They do do that for the v1 promise. And presumably, like you said, the -mod=vendor flag, that also shows they are supporting, they care about this stuff; they don't want to just break everything. But does modules break things? Is it hard to turn a project, if you have already existing code, is it difficult to turn that into a Go Modules project?

**Marwan Sulaiman:** It kind of is sometimes. It depends if you are a package that has already been mature enough to have a tag that is equal or above version 2 - then converting to Modules is not only a pain to the author, but a pain to the people using that package... Because you have to update your import path to include v2 or v3 in them.

But if you're still version 0.something, or version 1.something, I think converting to Modules is actually quite an easy process. You can keep your gopkg.toml from dep, you can keep any legacy dependency management manifests. They can all work together, so you can support both Modules and other things at the same time... Hopefully. There's always weird edge cases.

**Aaron Schlesinger:** Yeah, and I think part of that v1 compatibility promise is the Go tool is decent, I would say, at basically taking what's in your - Marwan, like you said - legacy manifest file, and sort of translating that into the Go Modules format, which would be the go.mod file and the go.sum file. It's probably kind of like the 80/20 type of thing, but for a lot of projects that are - again, like Marwan said - v1, but not v2, it seems to work pretty well overall.

**Mat Ryer:** Yeah, maybe you could tell us a bit more about the go.mod and go.sum files. What actually are they?

**Marwan Sulaiman:** Sure. The go.mod file basically defines what your own import path is, and if it is a URL-looking path, then people can go get it. That's the very first line of a go.mod file - defining who you are, what this program is. And it doesn't have to be if you're working on a local project that you're never gonna share with anyone but your own computer; you don't have to have a full URL path as the name of your program, or the import path.

What comes after is basically a list of third-party dependencies and what version they are. That's where you kind of do most of the work, if you ever require third-party dependencies. If you do a go get from within that project, your go.mod file is automatically updated with the latest version that Go thinks you need. So that file is interestingly managed by the human and the computer, because a lot of go get and go build does some modification to the go.mod file... But sometimes you need to get a little bit more detailed; sometimes you want a fork of a dependency, and that's when the replace clause comes in.

Sometimes you could manually go in and change that file, and the Go command has some help with that, where you can say "go.mod replace", which at the end of the day is you're just changing the go.mod file to say "Hey, this import path (let's say) github.com/package/errors (for example), I don't want that code, I want that import path, but I actually wanna point to another fork. Something like github.com/marwan/errors, because I have a change that maybe is not yet merged into the upstream." So you could dig a little bit deeper. That's the go.mod file...

**Mat Ryer:** \[00:20:26.23\] I feel like just editing the file is probably easier than using that replace tool... Don't you think?

**Marwan Sulaiman:** That's what I do, yeah. I just wanted to be a little bit technical and say you could potentially never touch it, but actually if you go in and just put a replace clause there, copy paste the import path, it's quite easy. So that's why I think the go.mod file is a little interesting, in that it's kind of like the human and the computer working together to make your program build, which is in itself a testament to how complex dependency management is.

So that's kind of the go.mod file... And it has a companion file that you touched upon called the go.sum file. That one contains integrity information about the modules you are building. That's when things get interesting and kind of different from other programming languages, where you trust maybe a registry. The go.sum file - basically for every module you download, you keep a record of a checksum of the entire codebase. Go actually downloads the module and makes a zip file out of it, and then calculates the checksum, and that checksum is recorded in the go.sum file. That's when you start to say "Maybe I don't need the vendor folder." You can go get this dependency later on, and it has to match exactly to the byte of the original time you wanted that package; otherwise Go will not compile your program.

**Mat Ryer:** Yeah, that's interesting. So you can trust that everything is exactly as it was when you added that dependency, essentially, right?

**Marwan Sulaiman:** Yes. And if it's not, you cannot compile, so that gets into a whole other conversation that's like "How do I ensure that, okay, maybe something bad happened, and now I cannot build anymore..." That's when Athens and proxies and even Vendor itself puts a layer of guarantees that if anything bad happens on the internet, you can still compile your program.

**Mat Ryer:** Bad things don't happen on the internet, do they?

**Aaron Schlesinger:** Nothing. Never. \[laughter\] I've never seen anything bad happen on the internet.

**Mat Ryer:** Right...?

**Break:** \[00:22:41.29\]

**Mat Ryer:** So what happens if a dependency goes away, or a project just gets deleted? Nevermind there's a new version, but it's just gone.

**Marwan Sulaiman:** Yeah, if you have a Vendor folder, then you're good to go. If you have a copy of that dependency in your project, you might not even know that it was gone three years ago, or whenever. But if you're using something like a module system where Vendor is not looked at by default, so it went from implicit to explicit, saying "I want to build from Vendor" - if it's gone, you're out of luck. So you have to have another place to keep a copy of every single module that you need, and the Go team is working on the one for the open source that is currently out... And that's the public side of things, but what about private modules? That's when Athens comes in. But both of these really are trying to solve the solution of "When modules disappear, we don't want the internet to break." And because we're relying on version control systems for dependencies, we're not relying on a registry like Npm or RubyGems, so there is no contract; anyone can go delete their codebase. And they should. It's their code; they can build it, they can delete it, they can change it.

**Aaron Schlesinger:** I think the other cool thing on top of that, Marwan, is we can now sort of separate the code that the developer is working on and that whole workflow from the code that we actually get to use in our programs. I think sometimes in the CI/CD world people separate the concept of source code versus release asset. If you squint a little bit, that's kind of what it feels like we're doing here in the whole Modules ecosystem by saying "The source code is the source code, and then the module is the actual artifact that me as an app developer is gonna consume for your dependency." I think that is a big step forward for all of us.

**Marwan Sulaiman:** Exactly. Everything starts from the source code itself, and that really to me is the best part of the Go ecosystem. At the end of the day, the source of truth is your source code. So you don't have to say, for example, "npm publish" and maybe forget to push to GitHub. Or maybe you do a push to GitHub and forget to publish to the registry. So everything starts from -- the source of truth itself is your GitHub repository. But the moment a proxy makes a copy of it, it's no longer "disappearable", if that's a word.

**Carmen Andoh:** Yeah, it becomes a next logical unit of operation once software goes into production. I really loved how you said that we have been relying on version control for dependencies, and the ramifications of that that have been happening in the last I don't know how many years... But I look at Node.js' left-pad, which was a famous vendoring incident, right...? All these apps broke when a dependency was no longer available. And what would have happened if they had a proxy?

**Mat Ryer:** I love that story though, the left-pad thing.

**Marwan Sulaiman:** Someone would have saved money somewhere. \[laughter\]

**Aaron Schlesinger:** And Carmen, that points to this concept of federation too, which is a whole other cool thing that I think the module ecosystem has, that like you said, it would have helped in the Npm ecosystem for sure... But it kind of warms my heart to be able to say that the Go Modules ecosystem isn't just dependent on one server somewhere. Anyone can run a server, and there actually already are multiple public proxies, and you can run your own proxy as well. It all just kind of works together, and that's really cool to think about, to me at least.

**Carmen Andoh:** \[00:28:23.16\] I agree. And I loved Athens when it first came out. I remember that there was a white paper that came out, and it was -- Modules is based on protocols that people can use; it was basically empowering the ecosystem to build out solutions as they saw fit.

And then of course I saw Athens, and I think it was you that was -- we were at a meetup in Portland together and you did a presentation on it, and then I tried to steal away some of my work time to be a contributor to it... That was short-lived. \[laughs\] But I just love what you're doing, both of you. And of course, there's also Manu, and a lot of other people. It's such a great channel in GopherSlack Athens... So welcoming, and active, and people that are helpful... I really enjoy it.

**Aaron Schlesinger:** Well, everyone is welcome, and Carmen, if you wanna come back any time, we're happy to have you.

**Marwan Sulaiman:** We're annoyingly friendly.

**Carmen Andoh:** Yes, that is a good way of putting it. Totally, Marwan!

**Aaron Schlesinger:** Marwan, you should say your chill open source line.

**Marwan Sulaiman:** Oh, god... Yeah, who was it...? I think Carolyn was saying "I need to push this change before we release. I'll do it Friday", and I was like "You can do it whenever you want. If you \[unintelligible 00:29:37.26\] but otherwise it's a chill open source project. There are absolutely no expectations. Just the fact that you're here means a lot to us."

**Carmen Andoh:** \[laughs\] I love it! That should be the tagline. And of course, annoyingly friendly. That's a good tagline. What I really like about it is that you really take any and all questions. You just are a model of what I feel like open source stewardship should be.

**Marwan Sulaiman:** That's nice.

**Mat Ryer:** So anyone out there that's running an open source project, they should have a look at Athens and see what you can learn.

**Aaron Schlesinger:** Or just come hang out with us, too.

**Mat Ryer:** So what's the history then behind Athens? How did it get started and where did it start, and who was involved?

**Aaron Schlesinger:** Right when the series of blog posts that Russ published -- or I guess they're articles; I don't know what the technical term is... But right when those writings came out about vgo, they had that section about the download protocol, which at the time -- it looks pretty much the same now. It's like six HTTP endpoints that are at the core of it; or maybe it's five... Something like that; a low number. And basically, anyone can build that, just like you were saying, Carmen; it's this abstraction layer, and you can put whatever you want behind it.

I wrote a Buffalo app - shout-out to Mark, who's not here today - that basically implemented that, and it stored the modules in memory after it went and grabbed them up from GitHub, or wherever. If you did a go get against the then Athens proxy, it would in the background go and do its own go get, back up to GitHub or wherever, it would get the module down and then store it in the in-memory database. Then the next time you did a go get, it would serve that module directly out of memory. That was a toy, pretty much, but I showed it to a couple folks - Marwan mentioned Carolyn van Slyck - and I showed it to Eric St. Martin and Brian Ketelsen, and... If I forgot anyone, I really apologize, but I think that's almost everybody. And they were totally into it too, so we decided to work together.

\[00:32:00.22\] We created a new GitHub org to host this code in, and the code in. The code - I called it "vgo prox", like vgo proxy, which was totally lame... So Brian went to one of those startup name generators, because naming is hard... \[laughter\] I think the name that came out was like "Athens-Brass", so we went with the Greek theme and just called it Athens. That's how it ended up where it is.

Then Brian did a couple talks on it, I did a couple small things like meetups, and people just kind of at first trickled in, and then... I wouldn't say we're really having a massive surge of people, but it's more than the trickle now. It's gained some steam. Obviously, we have amazing contributors now, maintainers like Marwan, and we've got a bunch of others. I think there's like six core maintainers. There's gotta be 15 or 20 official contributors in the GitHub org now, and there's tons of other folks too, who'll come in and they'll ask a question, or they'll fix the docs, or they'll fix a bug, or whatever...

I guess just a shameless plug for the community again is like -- we consider anyone who comes to say hi even, or more, I just personally like to think of them as like they're part of the community of Athens. If they come in and they say hi, that's just as good as coming in and fixing a bug... Because they're in, they're part of it, and if they wanna go and do more over there, we're there to help them do more.

I went a little bit off on a tangent about community again there, but... I hope that paints a little bit of a history there.

**Mat Ryer:** No, that was brilliant. It's really interesting to see that -- what I love is that it comes out of having to solve real problems. Too much of tech - and it's so tempting; we're all guilty of this - is we just imagine cool things, and we almost imagine that there's these problems and we can build these cool solutions to it... So when there's a direct and obvious and real kind of pain point that's being addressed by something, I just love that.

I think every developer needs to know what that is when they're working on something. It's easy to get abstracted down or be lost in some big organization, but if you lose the why of what you're doing, then I think you're in trouble... So I always urge everyone to do that, and this is a great example of that. There's a definite issue, there's a definite problem, and some pain that we were just feeling for a long time, and then people rallied around and started to look at it. I think that's what I love about open source.

The Athens project, by the way, on GitHub now has 2,200 stars, which is pretty impressive. Not that we measure things with stars, but it does have that many stars.

**Marwan Sulaiman:** And half of them are just bots I created... \[laughter\]

**Aaron Schlesinger:** Then the other half must be the bots I created. \[laughter\] Good work, Marwan! To your effort! \[laughs\]

**Mat Ryer:** The bots I created don't work, so none of them are that. \[laughter\] So what about speed? Actually, let me ask you this first - what happens to the \_test.go files when a module is created, or a dependency clone happens?

**Marwan Sulaiman:** Right. It depends on when a module is created. If you're building your own project and you import a dependency, regardless of Athens or a proxy, when Go adds this module to your go.mod file, it does not add any test dependencies, and that's when you have to type a little magic in the command line, which is called "go mod tidy". "Go mod tidy" basically tidies up your entire go.mod file, it removes any dependencies you don't need, but it also puts in all of the test dependencies, so that if you ever run your dependency tests, you'll have the right -- or basically if you're running your own tests that are relying on some files or some packages in that dependency, then you're also gonna make sure that your tests are reproducible.

**Mat Ryer:** \[00:36:17.02\] Right. So the tests do go along in the proxy then, in Athens, when the copy gets created. It copies the whole thing, does it?

**Marwan Sulaiman:** Yeah. The interesting part about that is the fact that old proxies must use the Go command itself to download modules. They don't have to, but that means they're going kind of rogue. There is a bit of a background to this... For example, think that you're trying to build something from Athens. So you're on your local computer, there's an Athens server somewhere, and you say "Hey, can I please get package number one?" And if Athens doesn't have package number one in storage, it's gonna have to go get it from somewhere. It could go to GitHub and download it itself, and just return it to you, but the problem there is that you might have skipped a byte here and there, and your checksum is gonna be completely different from another proxy's checksum, or the original Go checksum.

So what you have to do is that when you download the module, or when Athens downloads a module, it has to use a Go command called "go mod download." I believe go mod download - and please someone correct me if I'm wrong - basically downloads the entire repo and makes a zip file of it. It has a couple of rules; I believe it skips symlinks and maybe a couple things, but it keeps pretty much most files in there, and it creates a zip file.

So it's a nice abstraction that Athens doesn't even have to think about. As long as it has the Go command, it calls "go mod download" and it basically downloads everything for you, and we just have to store whatever go mod download put on disk.

**Mat Ryer:** So if there was an image in that repo, and then someone changed just that image, would that then just be a different checksum, so therefore it's considered different, even though it is the same?

**Marwan Sulaiman:** It should be.

**Aaron Schlesinger:** I think the checksum is only over code... Is that right, Marwan?

**Marwan Sulaiman:** That's a really good question. I remember playing with it; I've glanced over the Go Modules code and there's quite a lot there... But I remember it skipped a few things. I don't remember it skipping random files and just looking at code, but I could be wrong.

**Mat Ryer:** Interesting.

**Marwan Sulaiman:** I will try to sneak in a quick experiment as we talk.

**Aaron Schlesinger:** Someone in the channel, if you know, paste it in there.

**Mat Ryer:** When they put the build caching in, I noticed builds were just a lot faster. What happens to speed with using Athens and using Go Modules? Do we get performance improvements there, too?

**Marwan Sulaiman:** The interesting part about using an HTTP protocol to download modules - whether it's Athens or something else - is that you're not using a Git or a version controlled system based way to download a module. Imagine if you're depending on, say CockroachDB, and you wanna download it. The old way would have done a Git clone, which means it would have downloaded the entire history. But with the new proxy, you know exactly what version you want, so you just want a zip-formatted state of that repository; you don't need to download the entire version control system history behind it. That's a huge performance gain. And once you have it in storage, that's even a higher performance because you don't need to go get it from the internet.

The performance -- I believe the original vgo papers had CockroachDB as an example, saying it's 4 minutes versus a few seconds, which is a big difference.

**Mat Ryer:** Wow. That is really cool... And actually especially important if you're in a country or a town where the internet connection really isn't doing it for you... And I know that there are gophers in this situation, with low-quality internet connections. That's gonna actually make a real difference there, to builds and dependencies. That's awesome.

**Aaron Schlesinger:** \[00:40:06.00\] I think another part is that since it's HTTP, it's the web, so you can cache it, you can put CDNs in front of it, you can do all the cool HTTP things that web developers know and love. I don't know all the details of some of the public proxies that are out there right now, but if I had to guess, I would say that they're probably sitting with CDNs next to them, and that means that if you do a go get using one of those proxies, you would be go getting one of those tiny zip files from somewhere really close to you, that has really good bandwidth.

**Mat Ryer:** Brilliant. That's awesome.

**Carmen Andoh:** Yeah... Mat, you said earlier how we're empowered to find a thing, and remember the why, and fix the why, and I think you just defined what makes for a healthy ecosystem. And I think Athens is an exemplary project for how dependency management is an interesting problem in distributed systems and developing software today, and how the community and the ecosystem shows up to help fix that.

**Mat Ryer:** Yeah, I love that.

**Marwan Sulaiman:** My favorite part is everything you said, and the fact that you can also extend what the base protocol is. To me, that's when I found Athens to be the most interesting project. You touched upon speed and you touched upon this need to have this, and then from there you can say "Wait... Now I have a storage of all my modules", so you can think about maybe a company wants to run an Athens server for all of its projects, and now its storage has every single dependency they know this company depends on. To me, that's my favorite part about a proxy versus vendor.

If each project vendor \[unintelligible 00:41:55.23\] own dependencies, you're really kind of not aware of what each project needs. You have to go in and look at the vendor, or go in each project and see what they depend on. But now you have a central place for this company's modules from all the projects, and you can do things maybe like scan over them and look for vulnerable projects, you can integrate with third-party security software if you will... You can do all sorts of things. You can basically build anything you want out of that central place.

**Carmen Andoh:** Not to mention the security implications, right? When you index it, you index it with a SHA or some sort of hash, and you make sure that any attack possible vectors can be \[unintelligible 00:42:37.18\] because you have indexed it and you know that the package that you're getting is the package that you want. I'm not sure if that is ever gonna be a possible exploit, or if it has been; I'm unaware. But I know that sometimes I've asked in the past "How do I know that the thing that I'm getting, if I'm not using SSH, isn't being fuddled with in the middle?" And version control certainly helps with that, because they do have commit SHAs and everything like that, but they don't do it with objects and releases and tags outside of GitHub. So if you're not dealing with GitHub or with GitLab, they \[unintelligible 00:43:08.27\]

**Aaron Schlesinger:** Yeah, and the security and integrity "story", if you will, and the whole Modules ecosystem - it's got a lot of cool layers to it. I call these internal organizational things the "enterprisy" features. It's a very technical term. \[laughs\] But Marwan, it's like what you and Carmen said, too - you have this ability to control entry point, instead of relying on GitHub and the VCS to do your authentication of modules for you. But then on top of that, the Go team has added another layer of auditability basically by letting you verify that before you even go get a module, it already knows and can prove to you that there's sort of an audit trail of what the checksum for that module is as well.

So before the code even enters your codebase, you can tell, you can actually prove that that code hasn't been fuddled with... And then after it's in your codebase from then on, you have those checksums that you can always look at, and it'll automatically fail your build, and all that great stuff as well.

It's kind of another testament to the community as well, that we've got these open protocols and now we can build all these different layers in the security space, in this case, that I think is just really cool.

**Break:** \[00:44:48.02\]

**Mat Ryer:** How do we use Athens today then? Do you use that Go proxy environment variable, or do you not have it hosted yet? Is it publicly available? What's the situation?

**Aaron Schlesinger:** Athens is made primarily to host internally, or for your own mirror, basically. Tons of people are running it in their CI pipelines. There are some folks I know who run it inside of really regulated firms that don't have -- they just shut down access to the internet.

I know of one person - this was as of a couple months ago - running it in an organization that you literally have to take code from a USB stick and get it approved by legal, and then you can load it into Athens.

That's sort of the main use case of it... But myself, and I think there are some other folks out there, we just like to have fun with it. I host it in the cloud, and then I do weird stuff and I build all these dumb extensions to it, and things like that.

One of the ones that I host is on our docs page, that's kind of like "This is the one you can try." You don't have to set up any Athens by yourself. You can just set "go proxy = this address" and start doing stuff with Athens. But then there are a lot of instructions on how to install it, everything from just running a Go binary all the way up to running it in Kubernetes, and stuff.

**Mat Ryer:** That's awesome. The website is great. I recommend anyone interested... It's it docs.gomods.io?

**Aaron Schlesinger:** Yup, that is it.

**Mat Ryer:** I recommend checking that out, if anyone is interested.

**Marwan Sulaiman:** Yeah. If anyone wants to download and use Athens, go to docs.gomods.io, but also go to the Athens Slack channel and you'll probably get a very quick answer there, too.

**Carmen Andoh:** It's very active in GopherSlack, the Athens channel, for sure. Super-helpful.

**Mat Ryer:** Brilliant. Were there any surprises as you were building Athens? Because I think a lot of the value in it really comes -- and this could be wrong, but it seems to me like a lot of the real value of it just comes from the design of it and the thinking of it... But was it technically difficult to implement? Were there any surprises as you were building it, and as you've been working on it?

**Aaron Schlesinger:** \[00:48:10.29\] Were there surprises...? I'm trying to think of a real example... Because all I remember right now is saying "Hm, I didn't think of that", but I don't remember what it was...

**Marwan Sulaiman:** I have a couple.

**Mat Ryer:** Did you not use a dependency manager for it? \[laughter\]

**Aaron Schlesinger:** I won't say.

**Marwan Sulaiman:** As of today, it still uses Vendor, and we're pretty close to having it not use Vendor, which is kind of a really funny thing. It's like "Do we even trust this new module system, even though we're building on top of it?" \[laughter\]

**Aaron Schlesinger:** Can you edit that part out...? \[laughter\]

**Mat Ryer:** It works when I say something bad...

**Marwan Sulaiman:** Yeah, that's really the funny part.

**Aaron Schlesinger:** Just kidding. \[laughter\]

**Marwan Sulaiman:** Honestly, I love the fact that we're still using Vendor, and we're just now thinking of removing it, because the vendor is something that's been proven and used for a long time now, and the module system is still very new, and it's only gonna be on by default in the next version... So I feel like it's a very "adulting" decision to make. We're excited about this, but we're also very careful and we wanna make sure that it works, and only when we think what we're building is good enough that we'll build it with Athens; you know, building Athens with Athens. I think we're there.

**Mat Ryer:** Yeah, I think it's fair enough, because remember, Go used to be written in C.

**Marwan Sulaiman:** Exactly, yeah.

**Mat Ryer:** So it's the same thing.

**Aaron Schlesinger:** I think there's another part of that, too... When Go first became open source, there was kind of a call to build a Go spec in lots of different implementations, and that's kind of what we're hoping for - and we're kind of getting - as a community now. There's the proxy.golang.org, there's Athens, there's GoCenter.io... I know there's another one called (I wanna say) GoProxy out there on GitHub. Someone showed me one that was built in Bash...

**Carmen Andoh:** Uuh...

**Aaron Schlesinger:** That blew my mind.

**Mat Ryer:** What?!

**Aaron Schlesinger:** If you were the one who built it in Bash, can you put the link to it in the GoTime.fm channel? Because that thing was cool...

**Mat Ryer:** But it's an HTTP server, isn't it?

**Aaron Schlesinger:** Yeah, you can do that in Bash, apparently...

**Mat Ryer:** What...!? That's my \*outraged\*.

**Marwan Sulaiman:** Yeah... All sorts of awesome implementations. And my favorite part is now in 1.13 the GoProxy environment variable is gonna be a comma-separated argument or value, so that you can actually tell Go to build things from multiple proxies. That comes with all sorts of cool stuff, where you can maybe have your internal proxy first, that only stores your internal code, and then for any public code you just tell it "return to the go command a 404", and it will move on to the next proxy. And maybe the next proxy is proxy.golang.org, but if it's down, maybe it will hopefully return a 404 and maybe move on to the next one for -- whatever; you can ensure high availability, as long as that proxy guarantees it, and you can put all sorts of different logic from the client side.

**Mat Ryer:** Do you know if they could support the ETags, and the If-Match header, and things? ...so that you could even say "Give me this dependency if it's changed. If not..." Or does that not make sense, because you're already asking for specific versions anyway?

**Marwan Sulaiman:** \[00:51:40.07\] You're not necessarily asking for a specific version, because when wanna download a module first. The Go Download Protocol comes with five different endpoints. One of these endpoints is a bit of a discovery endpoint; it's saying "For this module, what versions do you have?" So this is the v/list endpoint. So when you say "gopkg/errors/v/list", you might get a list of semantic versions, and if the repository doesn't have a semantic version, it will go to the next discovery endpoint, which is called \[unintelligible 00:52:12.18\] It's like "Okay, if you don't have any semantic versions, just give me the latest", which could be kind of like a Git commit type pseudo-semver. That said, currently there's no way to support -- actually, I'm not familiar with ETags, but any sort of special headers I know as of now it doesn't support, which I can get more into... But maybe explain ETags first...?

**Mat Ryer:** You just send a string, I think, and then the server decides whether it has a newer version based on that, and then it sets an ETag header. So it's just a caching thing, but I wondered if that played into this, or if it could... But it's quite interesting.

I was thinking as well about -- if somebody owns a GitHub repo or they maintain a project, is there anything they should be aware of now, that perhaps wasn't as important? I'm thinking specifically maybe tagging releases, and things like that... But are there other good practices and things?

**Aaron Schlesinger:** Yeah... Semver. You said tagging releases, but Modules really takes semver pretty seriously. Marwan touched on it at the beginning of the episode - when Modules sees that you've bumped a major semver, it actually requires a new path. By module path I mean if you're going from V1 to V2, which would be a breaking change, your module path would be -v2. If you're gonna do GitHub tags or Git tags, you've gotta really pay attention to whether you're making a breaking change or not, and if so, know that that's gonna mean folks who wanna pick up your breaking change are gonna update their import path to add that -v2 to the path itself.

**Marwan Sulaiman:** Just adding on to that, I believe the Go team is building a tool that will help you catch whether you're making a breaking change - at least in your API signatures, like function and type signatures - and it'll warn you, so that you know you shouldn't tag a new release as a minor version or a patched version that should be a major version. I don't remember where that code lives, but I believe it's in either Experimental or X tools.

**Mat Ryer:** That's a shame, because I just had that exact idea. \[laughter\] Not ashamed...

**Marwan Sulaiman:** I think there is a talk about it at GopherCon, if I remember...

**Mat Ryer:** Yeah, of course. A lot of that tooling now becomes possible. And dependency graphs, and things - writing tools like that probably becomes a lot easier as well.

**Carmen Andoh:** I like the point you made, how semver is now -- people who just half-ass semver, with Modules going into effect as default for 1.13, people are gonna have to be very, very thoughtful about semver versioning. I know at least I have definitely YOLO-ed my semver versioning, at least in the minor releases... But yeah, I think that's another good artifact of that.

**Aaron Schlesinger:** Yeah, I'm no exception. The only time I ever release a V2 is just create a new repository, because I don't even know what to do... \[laughter\] I'm just like "Yeah..." I'll just do patch if I feel like it's kind of small, or minor if I feel like it's kind of big, and... I try not to break anything. That's kind of what I do now. Probably when we do a v1.0.0 of Athens, I hope that there are other contributors that are way better at semver than I am, basically...

**Marwan Sulaiman:** My favorite use case is currently the Twirp framework, as trying to upgrade or migrate to Modules. They are already at version 5, and so there's a whole discussion about how to go to version 6 and introduce Modules, but still support people not using Modules... So it's definitely a complex when you want to ensure backward compatibility.

**Mat Ryer:** \[00:56:18.05\] Yeah. In fact, it's funny, because Mark Bates once sent me a message, and he just said "We can't be friends anymore because you haven't tagged your releases in this repo." \[laughter\] That was it. And I've not heard from him since. \[laughter\]

**Carmen Andoh:** And that's why he's not on this show today.

**Aaron Schlesinger:** Oh, you drove him away. \[laughter\]

**Mat Ryer:** Yes.

**Carmen Andoh:** So the moral of the story is "Tag your releases."

**Mat Ryer:** Yes, with semantic versioning.

**Carmen Andoh:** With semver.

**Aaron Schlesinger:** It just makes things so much easier too, to see a v1.1.1, or whatever... To see that in your go.mod file, instead of like a huge, long commit hash. Community-wise it just makes more sense to share your code that way, because it adds so much more information in it for a human to read than having a hash that you would have to go into GitHub and find, and do all that good stuff.

**Mat Ryer:** Yeah, and it's also good practice for other reasons as well. If we think about the Go's 1.0 promise of everything's gonna be backwards-compatible to this point, when you do tag that v1.0.0 release the first time, it's a significant event, and it feels more like that. Whereas if you're just not paying any attention to it, maybe you feel like you're at version 1 already, but actually doing it I think is quite a nice event that you get to look forward to in a project.

And I especially like -- you know, the Buffalo project has been running for years, and they're not at version 1 yet, and it's for the same reason; once they go to version 1, they're gonna make sure stuff always work. It's one of the things I think that really helped Go get its adoption and be one of my favorite tools and languages to use... Because I can rely on it.

**Aaron Schlesinger:** Yeah, that's a good point about the pre 1.0 releases, too... Because Modules assumes that anything pre 1.0 could break at any time. So if you're a v0.whatever.whatever, that's a signal to people in the Modules ecosystem that this could be a breaking change if it goes from anything to anything when you're at the v0.whatever tree of releases. It's kind of the inverse of the 1.0 promise, kind of... Because when you're at 1.0, then you know that you're stable.

**Mat Ryer:** Yeah. So when you say that Go Modules knows that things could break at any moment, what does it do with that information?

**Aaron Schlesinger:** Well, it goes back to the path that I was talking about, when you go from 1.0 to 2.0, in that event - or 2.0 to 3.0, or whatever... That's when you have to update your path to -v2, or -v3.

**Mat Ryer:** Right.

**Aaron Schlesinger:** But when you go from v0.x to v1, you don't have to change it in the path, because they assume that when you're at the v1 release you're gonna be at github.com/mypackage. And from that point onward, from the v1 onward until you get to v2, you should be able to able your minor and your patch release as someone who is depending on the package, the module that we're talking about, and you shouldn't have any breakages, obviously.

But they don't treat the event going from v0.whatever to v1 as a major event like that, because you are already supposed to assume that everything was gonna break when you went from v0.whatever to v1.

**Mat Ryer:** \[01:00:05.16\] Yeah, that makes sense. That's brilliant. Actually, it follows how we really are building things, doesn't it? It follows the reality of the fact that yeah, before version 1 it is gonna be fluid... And I like that. I like the fact that it has that sympathy to how the community already does things.

**Aaron Schlesinger:** Yeah. Sympathy to the developer, too.

**Marwan Sulaiman:** Yeah. And also, semver is purely -- I mean, not purely; it's mostly a human contract... You can do as much work as possible to have computers figure out API signature changes like I mentioned before, but at the end of the day computers can't really do a good job figuring out behavioral changes. Behavioral changes are also part of the contract of API stability, or compatibility, if you will... So really when you say "I changed my semver version. This is a new release", it's a human decision, because even if you kept your entire API the same, but you changed the behavior, you're supposed to change the major version.

**Mat Ryer:** Right, yeah.

**Carmen Andoh:** Marwan with the good sound bites today... "Semver is mostly a human contract", for sure.

**Aaron Schlesinger:** Yes...

**Marwan Sulaiman:** I have written them down. I have a few more... \[laughter\]

**Mat Ryer:** Just do them and we'll pick the best one.

**Marwan Sulaiman:** I have a document called "Good sound bites." \[laughter\]

**Carmen Andoh:** I need. I need in my life. Give it to me. \[laughter\]

**Mat Ryer:** Sound bites, spelled b-y-t-e-s, says Ian Molly on Slack.

**Marwan Sulaiman:** Oh, that's amazing.

**Carmen Andoh:** That's how I spell it. Isn't there any other way...? There's no other way to spell byte at Go Time. B-y-t-e-s...

**Mat Ryer:** Let me ask you this quickly... Do you know what 4 bits is called? 8 bits is a byte, right?

**Aaron Schlesinger:** Half of a byte?

**Marwan Sulaiman:** No, what is that...?

**Carmen Andoh:** Huh... It's a thing? It's a unit?

**Mat Ryer:** Well, I think so, because I have something in my head that I remember, but I just can't remember where it's from, and I've never checked it, I've never revisited it until just then.

**Marwan Sulaiman:** I have to say I'm kind of sweating out a little bit, because it feels like a job interview question.

**Carmen Andoh:** \[laughs\] What is it?

**Mat Ryer:** Well, we'll let you know... \[laughter\]

**Aaron Schlesinger:** Someone put that amazing one into the channel.

**Carmen Andoh:** I don't wanna give it away--

**Mat Ryer:** It's correct. It's a nybble. That's what I thought it was, too.

**Aaron Schlesinger:** Oh, that's...

**Marwan Sulaiman:** That's awesome!

**Aaron Schlesinger:** I love it!

**Mat Ryer:** Is it? I don't know if Ian's joking...

**Carmen Andoh:** N-y-b-b-l-e? Oh, my gosh... Someone verify this. Someone get me a link. We need to Snope the nybble.

**Mat Ryer:** Yes, it's verified.

**Carmen Andoh:** Ohhh! It's verified... But this is Wikipedia. I don't know...

**Aaron Schlesinger:** But it's so nerdy though it has to be true.

**Carmen Andoh:** I know, it really is. I want it to be true so bad.

**Aaron Schlesinger:** Me too. \[laughter\]

**Mat Ryer:** We can just make anything be true, we just have to all say it. It's easy.

**Aaron Schlesinger:** Oh, okay. Sounds good.

**Carmen Andoh:** Hm, okay...

**Mat Ryer:** Yes. Ian on Slack is saying he spelled it wrong, but actually if you read it, it does say that one of the alternative spellings is "nybble".

**Carmen Andoh:** So cool... \[laughs\]

**Mat Ryer:** Good.

**Aaron Schlesinger:** Am I the only one who feels like nybble with a y is more nerdy than with an i?

**Carmen Andoh:** Yeah, that's the best way.

**Mat Ryer:** It is.

**Aaron Schlesinger:** Okay, cool.

**Mat Ryer:** You might as well. I think if you're calling 4 bits a nybble... You know what I mean...? You're already not gonna be popular at most parties. You might as well pop a y in.

**Aaron Schlesinger:** \[01:03:21.19\] \[laughs\] Yeah! Go big or go home!

**Mat Ryer:** Yeah, exactly...

**Marwan Sulaiman:** \[unintelligible 01:03:23.02\]

**Mat Ryer:** Or go home. Just go home, please. That's what they say to me at the party. Not you. I'm not saying that now. That's what they say to me. \[laughter\]

**Aaron Schlesinger:** That's fair.

**Mat Ryer:** Yeah. Well, thank you so much. This has been an excellent episode, I think. Dependencies are a pain in any language, and Go had GOPATH before, and we got by with it, but it definitely wasn't right; it didn't feel right. So Go Modules seems like it's a step in the right direction, and it seems like it's gonna really help us here.

And then of course the dependency proxies and things are also here to help. If you need that in your own environment, then check out the Athens project. I think you're gonna love it.

That's all from Go Time this week. We'll see you next week!
