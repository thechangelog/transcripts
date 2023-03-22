**Mat Ryer:** Well, hello there. Welcome to Go Time. I'm Mat Ryer, and today we're talking about docs. This episode is called "This is going to blow your docs off." I'm joined by my co-host - it's Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Happy to be back.

**Mat Ryer:** Happy to have you back. Do you do docs? Do you like docs?

**Johnny Boursiquot:** Oh, I love docs. I'm all about the docs.

**Mark Bates:** Why don't we get to see Johnny's pretty face? Can we see Johnny's face?

**Mat Ryer:** Can you not see him?

**Johnny Boursiquot:** Yes, here it is. Yeah, yeah.

**Mark Bates:** I don't see him. Do you guys see him?

**Mat Ryer:** Yeah, I can see him.

**Mark Bates:** Oh, I just have a black box for Johnny.

**Mat Ryer:** Oh. I don't know. You're not a black box, are you, Johnny?

**Mark Bates:** It says that Johnny's video will improve when his quality of internet improves, apparently. I don't know.

**Johnny Boursiquot:** Wow. I'm hardwired.

**Mat Ryer:** Yeah.

**Mark Bates:** Nevermind. I'll have to make do with the soothing tones of your voice.

**Johnny Boursiquot:** Yes, they can be.

**Mat Ryer:** Well, just - we'll send you a photo. We'll send you a photo of Johnny, so you can...

**Johnny Boursiquot:** \[laughs\] I'll frame it for you. You can hang it on your wall.

**Mark Bates:** Fair enough. Thanks.

**Mat Ryer:** Well, that voice you heard not respecting the format is none other than Mark Bates. Hello, Mark. Welcome to the show. Now you can speak.

**Mark Bates:** Hello. Now I can speak...? \[laughter\]

**Mat Ryer:** It's great to have you back.

**Mark Bates:** Well, since when would I ever respect the format of the show, really?

**Mat Ryer:** Yeah, I know. Exactly. I don't know what I was expecting, really. On the other hand, very professional Cory - not made a peep yet, because he's not yet been introduced. Cory LaNou's with us. Hello, Cory.

**Cory LaNou:** Hey, everybody.

**Mat Ryer:** Welcome to Go Time. Excited to talk about docs... it's docs, isn't it? This is like one of those things that we have to live with as engineers, and sometimes it feels like a very big chore, writing docs, and--

**Mark Bates:** Well, I don't think anybody likes going to the doctors. I mean, it can be uncomfortable. It can be unpleasant. Did I get the wrong show notes?

**Johnny Boursiquot:** Especially when they've got that glove on...

**Mark Bates:** Hang on, hang on... Sorry, wrong show notes. Yeah, sorry. My bad. \[laughter\]

**Mat Ryer:** No, you've got the right ones... Mark's gonna be talking about the doctors, and we'll be talking about writing things down.

**Mark Bates:** I'm gonna be talking about all my medical issues as a middle-aged man.

**Mat Ryer:** It's just an hour show, we don't have enough time... You know...

**Mark Bates:** Fair enough. There's Johnny!

**Mat Ryer:** Oh, can you see him now?

**Mark Bates:** Yeah, he's a little fuzzy, but he's there.

**Mat Ryer:** Johnny, what's going on? Is something up?

**Johnny Boursiquot:** Yeah, I am a little fuzzier these days...

**Mark Bates:** Aren't we all?

**Mat Ryer:** Yeah, but you're not low-res, are you? Johnny, it's like you're feeling unwell, and how that manifests is you go low-res; that's how you can tell... I've got a bit of a cold, I'm a bit low-res... and then you have to recover...

**Mark Bates:** We're all pixelated...

**Mat Ryer:** A little bit...

**Johnny Boursiquot:** Yeah, yeah.

**Mat Ryer:** But you two live nearest each other on the planet, so I would expect you to have a good connection.

**Mark Bates:** I mean, we live on the same coast of the same country...

**Johnny Boursiquot:** Right.

**Mat Ryer:** Right. Well, there you go.

**Mark Bates:** I don't know if that makes us super-close or not. We're in the same time zone...

**Mat Ryer:** Well, it's closer than you are to me.

**Mark Bates:** We used to live super-close. We used to live very close. But yeah, that's not the case anymore. As a matter of fact - I mean, I don't know... Cory is in Wisconsin. I don't know which of us is actually the closest to each other. It's probably Johnny and I, but...

**Johnny Boursiquot:** Yeah. Because I'm an hour flight from you.

**Mark Bates:** Yeah. Cory is in the middle of nowhere.

**Cory LaNou:** I'm an hour from the airport. \[laughter\]

**Mark Bates:** And that airport then takes you to another airport where you can get a real plane to go somewhere else... I've been there. I've been there when the airport wasn't open yet.

**Mat Ryer:** What were you doing there, Mark?

**Mark Bates:** \[06:02\] I was there too early for my flight, and the airport wasn't open.

**Mat Ryer:** Oh, I thought you meant like they'd not even built it yet, finished building it, and you were there, trying to get a flight.

**Johnny Boursiquot:** No, it wasn't in operating hours.

**Mark Bates:** It wasn't in operating hours, yeah. All the big metal gates down over like the two gates that they had... They like like two scanning rows or gates are down...

**Mat Ryer:** Wow...

**Cory LaNou:** Well, in fairness, it's two gates, but it's the same gate with just two different numbers... \[laughter\]

**Mat Ryer:** Not even two gates...

**Mark Bates:** There's one/two, over one door.

**Mat Ryer:** Oh, I like the sound of that. You'd be like always going first class; you get your own... You're whole-- own experience. It'd

be quite nice.

**Mark Bates:** I know, it was pretty cool. It was pretty fun.

**Mat Ryer:** Did they open the gates for you then, Mark, basically, or no?

**Mark Bates:** They did. It was pretty remarkable. I felt like they opened the airport just for me. I was the first one in line for baggage check on a Tuesday. It was quite funny...

**Mat Ryer:** Oh, that's nice.

**Mark Bates:** Anyway. Should we talk about docs?

**Mat Ryer:** Yeah, tell me about docs. Do you like writing docs, Mark?

**Mark Bates:** No, I don't. Do you, Matt?

**Mat Ryer:** You've got a book out, you big idiot... \[laughter\] Sorry, I've gotta be nice to Mark on this; so I've been told.

**Mark Bates:** Writing books and liking writing books are two very different things. They're not the same.

**Johnny Boursiquot:** True, true.

**Mark Bates:** I've written four of them, and I hated the process of every single one of them. By the way, the book we're talking about, for all those who are listening, is "Go Fundamentals", available now where all good books are sold. Just search for "Go Fundamentals: Gopher GUides" and you will find it. Sorry... You can cut that out of the show. I had to do it.

**Cory LaNou:** \[unintelligible 00:07:30.11\] goodbye. 

**Mat Ryer:** What's it about?

**Mark Bates:** Go fundamentals...

**Mat Ryer:** Is it? Good title then.

**Mark Bates:** No, seriously... Serious question to the group - does anybody like writing docs?

**Johnny Boursiquot:** I'll jump in and I'll go against the flow. I actually like writing docs, but not -- I don't like writing the documentation for, say... You know, since this is a Go podcast, I don't like writing the docs for my export identifiers. Even though they're what help with generating the Go doc, and all that stuff, and those things are useful. When you're looking at an API, you want to know what things do. Well, not that I don't like them; I think I have a preference for sort of a readme development sort of a doc-ing, or documentation, or architecture documentation, or system design documentation. I much prefer those, because I think that's where the creativity comes in.

**Mark Bates:** Well, you're allowed longer-form exposition, too.

**Johnny Boursiquot:** Exactly. You're not trying to be succinct, and you're not trying to write a manual for the specific bits. You're just describing what the thing does at that point, right? Because the thinking, the creativity or that design work has already come, and ideally, you have documented that, I prefer that bar.

**Mat Ryer:** Yeah, because you've got reference material that is -- that's what the Go docs are. So that's useful, and it's like, when you have docs generated by Swagger, and you just get an enormous index, and you're just sort of on your own. So there's no curated experience, there's nobody taking you through this and telling you a story about the docs. It's just, "Here's just all the reference material. Good luck." And you never know what to do with it.

**Mark Bates:** My problem too is - I don't know if anybody else has the same problem, but I hate writing them, because what I hate writing about them is I always feel like what I'm writing is so obvious to what is happening in that function, or method, or identifier... Because a) I try to use good naming of my identifiers... And so that alone helps so much if you can really name something well. And then, if you're keeping your methods and functions really short, they're not doing a ton. And so I always feel like I'm pretty much like "This function does exactly what its method name says it does." Like, what else do you want me to say? It's a string function, it returns a string. I mean, a string returns a string representation... Yeah, obviously. But that's where I struggle with that short-form kind of little bit of writing.

**Mat Ryer:** \[10:10\] Yeah, it's that thing... It's the pattern, isn't it? We do that -- we do it because it's good, and then therefore, we do it all the time. And sometimes it's silly. But I noticed you don't -- in the linting tools, or whatever the tool is Go doc check, there's like s a tool that checks docs... It doesn't complain if you're implementing common interfaces. So it doesn't actually make you say "String is a string representation." But there are other examples when it's not part of those kind of standard interfaces, where it will just say "Oh, you need to put a comment here", and the thing's just called something really -- like "Stop." And it's a thing that you've started. It's like "Stop stops this." It feels unnecessary, but...

**Mark Bates:** And "Start starts it." It's like --

**Mat Ryer:** Guess what? Start starts it.

**Mark Bates:** And if there's a problem, it's gonna return an error. Like, what else do you want me to say?

**Cory LaNou:** I think there's really two styles of docs, like Johnny was saying. There's the "I've gotta document my code", which is going and give all my exported symbols something to say. But then there's the "I have to write the readme. I have to write the blog about what this does." And that's the stuff that - I enjoy writing that. I think a lot of people enjoy writing that. But that's also by far the hardest part to write. That's a lot of work.

And there's two stages to documents that always frustrated me. There's the initial documentation. You write it, and then you come back six months later. And is that documentation up to date? No. And you think to yourself, "I'm going to update this", but you never do. And then people come to it and are like "Oh, I tried your example, but it doesn't work." Well, because it's six months out of date.

**Mark Bates:** Or the example itself is broken, because you never actually validated that the code could compile in general. You forgot a thing somewhere, a comma, or something stupid, that makes the whole thing not even -- yeah, readmes are the worst.

**Johnny Boursiquot:** It's also worth sort of calling out the -- there's some documentation... I've seen APIs that are well-documented, where they have good names, and like Mark's talking about, it's self-explanatory what the thing is and does. But to Cory's point, if you have a readme that's showing usage documentation, you might have very sort of -- at the unit level, each function is indeed self documented. But depending on the complexity of the library, and what it is that it sets out to do, you're typically composing various bits and pieces of the library or whatever that thing is. So that's where the usage documentation -- what is the how should you be approaching this project. Because I've seen APIs that are well documented, Go doc everywhere, but then the readme is very sparse, and I'm like "Okay, well, where do I start? How do I actually use this? What's my starting point here?" And that right there, I think, is perhaps, even -- I would prefer that over 100% documented Go doc. I'd prefer, "This is how you use this thing", and then I can infer what a particular function does, if it's well named.

**Mark Bates:** I completely agree. There's nothing worse than going to a project and the only thing on the readme is that the tests pass, and here's a link to the Go doc to find out more. Like you said, "Well, that's great. Now I'm looking at 56 types, all these functions, methods, constants, and all these different crazy things going on..." It's like "Well, where's my starting point? How do I get this thing to do a basic thing? And then how do I get it to do a slightly less basic thing?" And so on and so forth. Yeah... Especially when you have large, large projects like that. It's one thing if you go to kind of a utility library, and it's got a handful of types and functions or whatever, and they're pretty small, it's pretty easy to just look at the Go doc and say "Okay, I know exactly what this is doing. It's not too crazy." But yeah, if you're trying to -- imagine if Docker was just like "Hey, here's my readme. Just go look at the Go doc for Docker and figure it out for yourself." \[laughs\] Or Kubernetes, or some massive library. It's just like "Here's the Go doc. Have fun!"

**Mat Ryer:** \[14:16\] Yeah. That's when it has the opposite effect, I think, where this is actually too overwhelming; there's too much stuff here. It feels like insurmountable, and that could put people off. People just build little versions of stuff. And there are libraries and tools out there, but they're very big, and they're quite intimidating. So that, I think, is a good reason to keep things as simple and small where you can anyway. But I think it's a docs issue. Like you say, there isn't somebody saying, "Okay, first thing you're going to do - import this package, get this type, do this little thing." That's basically what you're trying to do here. That's the basics. And then from there, we can take you on a journey. It's a kind of storytelling, isn't it?

**Mark Bates:** It is, and I think that's why as a whole I think we'd all prefer to write those sorts of docs, than the Go docs sorts of docs... Because we can tell a story, and we're all better at that, than writing these weird, succinct little sentences that describe a fraction of an idea that is a method... You know, this small little thing. Where you can tell a story, and you can say, "Okay, hey, we want to go from point A to point B. Let's walk through how we're gonna get there. And we're gonna use this library or tool, whatever it is, to get from point A to point B. Let's walk you through it." And that is a much nicer experience, I think, for the user. It's also much harder to do. Well, it's harder in a very different way than writing the Go docs is, how's about that?

**Johnny Boursiquot:** And somehow we like to throw newbies, or at least people who are new to a library, to say, "Hey, this is what I'd like you to do." Like "If you wanna contribute, write some usage docs." And now we're putting a task on their shoulders that is - like you just said, it is hard to weave together a story... We often elect those -- we'll put like a "Good starter" tag on these things on GitHub or something like that, and say, "Hey, yeah, write this doc", but we take for granted how hard it is to truly weave together a story that tells you exactly how to do something.

**Mark Bates:** Oh, God, yeah. It's so hard.

**Mat Ryer:** I think it tells you something about the mindset, really, if you're giving a junior person like "Oh, cool, just to get started, you can just work on docs." That really tells you the attitude towards docs, that it is this sort of necessary evil; we just have to tick a box, we've just got to make sure we've got all the coverage, or whatever it is. So is it kind of a bit of a red flag maybe if that's happening.

**Mark Bates:** Well, developers - I mean, I can only speak for myself - would rather code than write docs. Right? I mean, we're a fickle bunch. We don't want to do anything we don't want to do. And if it's not coding, most of us don't want to do it. And that's where you get stuck there, and that's why it becomes this chore that you throw on a junior engineer... Because you don't want to do it; you'd rather be coding, right? Like, let the junior engineer write, so you can write all the cool code. Of course, the junior engineer's not getting the great experience they need in the code, but they're hopefully becoming better technical writers...

**Cory LaNou:** Well, I think a big part of it is, like you said, that chore, the documentation. I think that's part of what we're gonna talk about today, is what if it wasn't a chore, right? I think that's a big part of it. What if it was actually easy to write these docs? Because I like to write the stories. I mean, I like to write the blogs, I like to write the presentations. But when it's a lot of work, you kind of dread that. When it's not a lot of work, then you don't dread it so much.

**Johnny Boursiquot:** Well, is it that it's not rewarded?

**Cory LaNou:** \[17:50\] It's tedious, right? It's tedious. Think about just like a really simple Hello World introduction, right? I have to write the code, and then I have to take the code and I have to copy it and put it in my documentation. Then I have to run the code, and then I have to take the output of that code and put it in my documentation. And then if I make one change to my code, I have to update everything all over again. Like, it's incredibly tedious and mind numbing. And as developers, we don't like to repeat ourselves. We don't like to repeat when we say things, we don't like to repeat when we code things... We certainly don't like to repeat when we document things. And so part of that process of documentation is so much repetitiveness over things that should be like "Can't this document do it on its own? Why can't it do these simple things?" So that I can write code, and then I'm done. I don't have to put that in my story by hand. My story just generates all that. And Mark Bates kind of took that to the next level.

**Mark Bates:** I love when I hear my name mentioned in the podcast that I'm on. What were we talking about? I wasn't paying attention.

**Mat Ryer:** You weren't paying attention. That's why he said your name, I think.

**Cory LaNou:** Well, let's think about it this way - as Gopher Guides, we're a training company, and a lot of people think what we do primarily is train. They would kind of be wrong, in a way. What we primarily do is generate documentation; like, oodles and oodles of documentation. It's all we do. And then we maintain documentation. Because every six months a Go release comes out, and all of our code gets updated in certain areas. Some chapters get completely rewritten, but some just need a ton of refactoring. Something as simple as ioutil gets deprecated, right? I have to search everywhere that ioutil was ever mentioned anywhere in the documentation, and now put it in the right spot. So it's not just changing your code, now it's changing your documentation. But I shouldn't have to change my documentation. I should just have to change my code, right?

And so we spend all our time writing docs. So when Gopher Guides first started, Mark went to task and wrote an initial tool that really helped creating documentation very quickly, especially technical documentation. And that just graduated over the years into this tool that we use today that almost writes documentation for you.

**Mark Bates:** It is a little disturbing how...

**Cory LaNou:** And I'm going to let Mark kind of take off from there and explain --

**Johnny Boursiquot:** Is it GPT-based? \[laughter\] Mark...?

**Mark Bates:** I know, right?

**Cory LaNou:** But in a certain way, like if we actually enable this to be GPT-based, or even just -- whatever the one GitHub has there...

**Johnny Boursiquot:** Copilot?

**Cory LaNou:** Yeah, Copilot. In fact, I think Mark used a lot of Copilot when we actually wrote some more stuff.

**Mark Bates:** No...

**Cory LaNou:** No?

**Johnny Boursiquot:** \[laughs\] He's like "What do you mean...?!"

**Mark Bates:** What are you talking about, Cory?

**Mat Ryer:** We don't know who owns it yet...

**Mark Bates:** Yeah, I guess to kind of jump off what Cory was saying, the biggest problem with documentation is the upkeep. And that -- when I talk about why I don't like writing documentation, it's because there's another... It's not just that initial chore, which I can do... You can do that initial chore, you're in the moment, you're there; it's the maintenance of that chore. As our APIs change, as Go changes, as whatever changes, there's a chore associated with that, that we must do every time we make those changes. And that's the chore that sits in the back of my mind when I'm writing documentation, and that's what makes me go "Ah, I don't want to write the docs." It's not the initial, it's the future, the years of maintenance that go into keeping that readme up to date.

**Mat Ryer:** Yeah. And I've seen projects that will deliberately -- they don't want to do the docs yet, because the API is still in flux. But the thing is, it's hard to get right the point at which you should deliver the docs, knowing that things are still going to change. So making them changeable, like making that automatic - yeah, I think that's a very big win. And yeah, it's really about the maintenance cost. That's often the big one.

**Johnny Boursiquot:** \[21:47\] Well, that's because we don't account for -- we don't include doc writing as part of the task. It's like a bolt-on. I think there are memes out there even. We have to take like tests, right? So in order of the things we prefer as developers, we'd like to write the code that does the thing. Next, we don't love to write the test, but we know that "Okay, if I need to get this thing merged in, I have to write tests. Okay." And it becomes sort of this other thing maybe you might even have a different estimate for your on your board, that's just like "Okay, now I've gotta write the test." And then least of all is the docs. So you go from code, to tests, to docs. And then rather than looking at all these things as just one unit of work, we're like "Okay, let's just make them three separate things, and let's do the thing I love first, and the thing that's the most fun", and then from there, it's just downhill. We just don't look at it as just one thing.

**Mark Bates:** And that's what you have the junior engineer for. \[laughter\]

**Mat Ryer:** I do TDD. So I actually do like that testing bit. But I'm splitting hairs... Because you're right, that is essentially the process. Imagine if you could have tests for your docs...

**Mark Bates:** Well, that's kind of partly where we're coming for, where kind of Cory was kind of alluding to. So we generate so much documentation and content. That's what we do. A few years ago we wrote 600 pages worth of articles for Digital Ocean in like three months. You can go online, there's an eBook of it on Digital Ocean, and it's like 600 pages where we break down booleans in great depth; these sorts of articles...

**Mat Ryer:** Is that true?

**Mark Bates:** That is true, yeah.

**Mat Ryer:** Yeah. It's a boolean joke.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** No, I want to read it though, because I want to find out what there is to know about booleans.

**Mark Bates:** That was, that was good. You should keep making those jokes. Anywho... And then, of course, things like this. This is nearly 600 pages of technical writing, the book. And Cory said that we wrote this book by accident, because we were working on a 12-week course that we were going to do. We did a 12-week fundamental course, and it went really, really well. It was like a master-style college-level course; it was so good. But then we got so busy with the corporate and then writing the book, we unfortunately were never able to actually get back to that. But that class that I was writing became this book, accidentally. And it's all because of this tool that Cory was talking about, that we've built to help us fix these problems we have with all this documentation we were just talking about - the maintenance, the upkeep... And portability, right? We write code, we write documentation, but there are many places where we need our documentation. So for us, we're writing all this content, we're doing all this heavy, deep technical writing, we're publishing it to the web, maybe as blog posts, or in a slide format, or republishing it to Canvas, which is like the world's leading learning management system, via a Rails API that they have. Or LaTeX, when we did the book, the publishing company Addison-Wesley needed LaTeX, so we had to take our content and give it to them LaTeX.

So we have all these different places we need to put it: databases, and APIs, and HTML, LaTeX. And the last thing we wanted to do was rewrite all of that same content for all those different places, and have to spend a lot of time reworking that content. Because every time you do that, if you keep splintering that content out to all these different places, and it's not centralized, then that maintenance nightmare we were just talking about becomes exponential. So if I want to update now a course in Canvas, that LMS system, I now have to go there and do all the updates there. And then I have to make the same updates to LaTeX and the same -- whatever it is.

As documentation writers, as technical writers, we need to be able to disassociate what we write from the presentation layer, and where it goes. And a lot of tools out there connect those two, or they disconnect them in such an abstract way that it's -- like, it's all via JSON, and all these like configuration stuff, that you're now caught up in that.

\[26:08\] What we wanted to do, and what we had to do is we wanted to work in editors, and we wanted to work in our editors, in Vim, or VS Code, or what have you, we wanted to work with local files, we wanted to be able to write in something simple and easy, that we know, like Markdown... We all write our readmes in Markdown, it's a nice format for doing that, but it's limited. It doesn't allow us to do things like insert code samples, snippets from files, or run output and include it automatically; or inject go doc directly into the documentation, or any of those sorts of things. Or validate it, or allow us to pull it apart and do all these things.

So essentially, what we did was we just built that system. We took markdown, and added the ability to put some custom HTML tags in there, and then from there, we were able to parse it and execute the document and do all sorts of different things, and then put them wherever we want. We can execute this document and have all of the code samples, and we can put in there "Okay, I want the Go doc for io.EOF, and it's going to go, and it's going to run Go doc, and it's going to capture that output and it's going to stick it in for us."

If I say "I want to run here, I want to show this piece of code, and then I want to run go build, or go run, dot, or whatever it is I want to run, and I expect that this code sample is going to fail, because I'm showing something that panics." So I can even say "I want to make sure that it exits with a one or a two", or whatever.

And so we can put these nice little simple HTML tags in there, we can execute the document, and it's going to fill in all of that. And if there are problems, we're going to get back errors immediately, telling us our code was wrong, the exit status was wrong, the image didn't exist that we were looking for, the included file didn't exist... Like, there's all these different validations and kind of understanding we can get by compiling the markdown document like this. And then we can take all those different elements and post them up via APIs, put them into a database, write HTML, create LaTeX, whatever we want.

But the key for us was really writing and keeping things very, very simple. Local files, Markdown, and HTML. There are tools already in every editor for Markdown, HTML; we all know Markdown and HTML. There's no learning curve; it's just practically a very little learning curve to do it. And we just work in our editors, and everything just kind of falls into place, and it's just such a nice way to work, to know that every time we make a change to that code, that we're being told whether our documentation is valid or not. And that's the big thing for us.

**Break:** \[28:58\]

**Cory LaNou:** One of the other key concepts too that really came into this tool that I think works really well is that it allows us to develop documentation in the same way that we code. Now, what does that mean? Well, if I've got a Kubernetes project, when I open that up, I don't look at every single file at the same time and try to write code. I open up one package or one file, and I work with that subsection. And then I make sure that subsection is tested, runs, all that kind of good stuff. So the way that it includes work and basically partial, if you want to call them that, with our tool, is if I'm writing a section on the file system, I will literally create one folder that just talks about one type. And I'll write two or three paragraphs about that, I'll put one or two code samples in that, I'll make sure that they know what the outcome is, whether they pass or fail... And that's that one section, and I can see it all on my screen, and I'm just looking at that one piece; I'm seeing the output, I'm seeing the rendered documentation... It's just literally a couple paragraphs and a little few code snippets. And then I can back out of there and say, "Okay, now I've inserted that into the larger chapter, and how did that flow?" And I can back out of that and see the larger chapter again, and see how that flows. Just like you do code.

It also means that when that type of system changes - maybe they make an update in the language, when they go ahead and make a new release - I can just go into that little piece of code, and that one little two or three paragraphs, and make just make changes right there, and refactor just that little bit of documentation and code, just like you would Go code. Like, you wouldn't edit 25 files at once; you would edit two or three files at once.

And so this really gives you that very hyper-focused ability to concentrate on really specific topics, and really be able to see them at a glance. And then you can pull back and kind of see "How does this go into my documentation now, and how does it flow?" And it really lets you write really, really solid documentation, and really, really comprehensive documentation when you approach it that way. And it feels like you're writing code; that's another thing, too. Like, now I don't feel like I'm writing documentation. Now I feel like I'm writing code. And as a developer, I want to write code. And if it feels like I'm writing code, I'm having fun again.

**Mark Bates:** Yeah. I mean, we've got each Markdown file -- because everything's relative. The tool handles, when you include, it'll actually rewrite all the links to make sure that the relativity is proper, all the pathing is there. So like you said, you can work on a partial, and all the links and everything, all the images are going to get to be there, and proper, and the files, but then when you include it into something bigger, all of those relative links are going to be rewritten to be properly linked again. So you're never worrying about that; you're never dealing with "Oh, it works here, and then I include it here and now these links don't work, and the images are broken", and stuff like that.

But inside of those files - yeah, we're really working with Go files and other source files, because we're just including them into the Markdown with an HTML code tag, and saying "Here, include this source file" or "Include this snippet within the source file." We can use comments within our code to do snippets, to mark off snippets in our Go file, so we can extract those right away, and just shove those straight in, too.

**Mat Ryer:** Well, that's better than using static lines, of course, for maintainability, right? Because if you use static line numbers, when things change around, then normally, docs are out of kilter again.

**Mark Bates:** Yeah.

**Mat Ryer:** What's the tool called, by the way?

**Mark Bates:** It's called Hype.

**Mat Ryer:** Hype.

**Mark Bates:** Hype, as in "Don't believe the hype."

**Mat Ryer:** Oh, yeah. But believe it.

**Johnny Boursiquot:** Is it out there? Is it open source?

**Mark Bates:** It is not, no. It's our secret sauce.

**Johnny Boursiquot:** So that's part of the secret sauce?

**Mark Bates:** It is. If anybody's looking to buy us for that secret sauce, you just let me know. GitHub, I'm looking at looking at you. Imagine... Imagine if GitHub had this sort of technology built into its readmes.

**Cory LaNou:** \[33:59\] The fact that you never write your readmes again, they're all generated... So anytime you update any code, anywhere in your codebase, if you readme referenced that code, as soon as you check it, in that readme recompiles, because it's generated.

**Mark Bates:** And you have the outputs, you have those code examples... Everything would be live, right there in your readme. Wouldn't that be nice, GitHub?

**Cory LaNou:** Part of it is -- you know, I've been developing for 20+ years, and there's people who have been developing 40+ years. The fact that our documentation tooling is this out of date yet is baffling. It's baffling. I mean, our doc tooling is truly like banging rocks together. And that's where --

**Mark Bates:** Not ours. Not Gopher Guides' tooling. Gopher Guide's tooling is amazing. \[laughs\]

**Cory LaNou:** Yeah. One of our competitive advantages I think early on was that we could update our material so fast that within two to three months of new releases in Go coming out, our material was already updated. In the reuse, so when I go and I update my interface chapter and start to add generics and start to say, "Hey, instead of using an empty interface, now we'll use the keyword any", I'm editing code files that probably show up in 2,000 courses I've taught. And so when these people come back and see their courses that they've taken over the years, I only edited one file. That was it. And everybody got the updates. Because it's code, right? Just like when I update a package, and it's included, that's what we do. That's how our docs. They're just included. I don't write about interfaces 1000 times; I write a note one time, and then everybody gets that file.

**Mark Bates:** And the nice thing too is when you're using things like Markdown with HTML - I mean, it's super-easy to diff, and comment on, and talk about in a PR, and all this sort of stuff. And then you've got all the code, which you can then comment on just like you would, too. So you can pull it down, you can run those examples locally to make sure your partner's not losing their mind, you can change the examples... You can do all these nice things, and you're just working with regular code, in a branch, or whatever, and then you end up with a book when you compile it, or you end up with a website, or you push to an API.

**Mat Ryer:** Yeah. It's funny, that concept of compiling your docs. I feel like that really does kind of feel nice. And also, because I like TDD, I have before done document-driven development, in that I wrote the readme first to kind of explain, "Oh, this is how I imagine it's going to be", and that really then influenced the tests, which influenced the code, and influenced the whole design. Could you do that with that? Could you just do docs first too, and actually have them build and fail? They're kind of like tests and docs at the same time, aren't they?

**Cory LaNou:** Absolutely. In fact, it's interesting that this tooling has changed the way I write documentation. Because I think about that -- you know, we write a lot of blogs, but anytime you write a blog, traditionally you kind of write that blog, and then you go back and you read the blog, and you realize you're missing these pieces... Because you write a bunch of stuff, then you go back, and you don't really read the blog until you're done. And you would never do that with code; you would never write pages and pages and pages of code, and then run a test. You would be running your tests as you're writing your code, very much like TDD would be, right?

And so with this documentation tool, because you've always got a window up that's showing you the documentation as you're writing it - you're writing documentation, and in real time, you're watching it flow. Like, you're literally watching it render real time. I write a code sample, I include it real time, it's there. And so you're doing that, and so what you're catching right away is you're catching, "Oh, you know what? I jumped a step." Like, I realized I already jumped a step, so I've gotta go back and backfill that step real quick, and show, "Hey, I'm talking about this thing, but I forgot to tell you about it."

And so by the time you're done with this blog, when you go back to reread it, it's mostly done, because you've been testing it as you've been writing it. And that's the thing about documentation that you don't have with other tooling - you kind of have to write this whole story, and you go back for ten different revisions, and then you give it to your buddy, and they have another ten revisions, and it's just really kind of a grueling process. It's not fun. But if you have real-time feedback, and you're watching it literally render as you go, it just completely changes your mindset on it, because you can see it, you can absorb it, and consume it immediately.

**Mat Ryer:** So it must be much better quality just by that nature, right?

**Mark Bates:** \[38:07\] Oh, yeah. And you just start getting into the flow after a while. It's disturbing how easy it becomes to write in this nature. Our editor hates us; he told us not to say this, but the truth is the original manuscript of this book was a thousand pages, and they made us trim it down. It was either that, or we put out two books, and we opted for one. But it was just that easy to write the content, because we could include -- you know, what's cool when you read the book... Like Go doc - we include the Go doc right there, for methods and types and stuff that we think are important for you to see. So you don't have to go and read the Go doc somewhere else. It's included right in there. And when you start doing stuff like that - yeah, it's easy to add bulk to your page count. But those things are useful to people, and they're right there. And for us, it's one line of HTML that's just go doc = ioeof. There you go, boom. There you go. And it's all put in there, and everything.

**Cory LaNou:** And what's critical about that too is when Go 1.22 comes out, all we do is recompile the docs, and whatever doesn't compile means something either changed, or - you know, if the Go docs got updated, our documentation got updated. Like, even the things we depend on. Like, Go doc isn't part of our -- we didn't write Go doc. It's just a tool that we use from our tooling. If the output of the go build command changes, or the go run command changes, our documentation is 100% up to date automatically, just by recompile. We don't have to touch a line of code, a line of documentation, absolutely nothing has to change. And we're 100% up to date.

So I'm really waiting for when they come back and say "Hey, we want you to do your first revision of your book, and update it with 1.25", like "Okay, yeah (press the button), here you go. We're done." \[laughter\]

**Mark Bates:** Add in the three extra paragraphs of what's new and call it a day.

**Cory LaNou:** Yeah, exactly.

**Mark Bates:** I mean, I use this sort of tool because it's just so easy. I use it for all my writing, to be honest. I do my papers for -- I'm doing a master's degree, and I write all my papers this way.

**Mat Ryer:** What are you doing your master's degree in?

**Mark Bates:** Oh, in audio production.

**Johnny Boursiquot:** The sound of music?

**Mark Bates:** Yeah, it's music production, or something. I can't remember the exact title of the degree. But yeah, I use it to write all my papers for that, because it can be incredibly useful. At times, I'm pulling in all sorts of weird information, and I've found it to be incredibly useful, and it worked really well for what I wanted it to do.

**Mat Ryer:** Well, just for some balance... If anyone did want to buy Gopher Guides, you would also have to get Mike. I just want to put that out there, just to sort of balance this out...

**Johnny Boursiquot:** \[laughs\] Be warned... Be forewarned...

**Mark Bates:** If the offer's right, you don't have to take Mike. \[laughs\] I think the bigger takeaway, apart from this as -- you know, we've built this great tool that we love, and we use, and whatever... It's the general idea that the tooling around documentation overall is just too painful. And people who write those sorts of toolings, and who are expecting others to contribute to their projects from a documentation standpoint, need to consider the UX of that interaction for junior developers, for new people, for existing people. Like, what is it like to write documentation for you? Do I have to do a bunch of JSON, and all this weird stuff? Or can I just write some Markdown and give it to you? What is that process? Try to make it as easy and as simple for you and for everybody else, and try to come up with those ways that you can make this process of writing documentation better.

I'm not saying everybody has to go out and write their own tooling, or whatever... But these are things that we've found were real big problems to us, and we've spent five, six years working on tooling to help us solve these problems... Because they're problems that everybody is having. And some of them can be easily solved with better practices, and a little more time and care. I think it was Johnny who was saying earlier, instead of kind of pushing docs all the way to the very end, let's bake some time in for them into the process.

\[42:20\] We were able to get testing baked in finally, into our process... That took years. I know I used to lie through my teeth to people about estimates, just so I could add testing in there. Because as soon as you would say to somebody, "Oh, I want to add testing" in 2005-2006, the CEO would go "No, absolutely not. Get it out the door. We don't have time for two more days of testing. What are you, crazy?!" So you'd lie through your teeth and just say, "Oh, it takes five days instead of three." Now I've got my two days for testing. Now at least people understand that; testing has become such an integral part of what we do as engineers. We're also pro testing the -- um, pro, space, testing. Or pro, dash, testing. We're not protesting... \[laughs\]

**Mat Ryer:** That'd be a good alternative name for your project.

**Mark Bates:** There you go. We're all for the act of testing, and management has kind of eventually come along for the ride, and we need to do the same thing with documentation too, is I think what I'm trying to say.

**Cory LaNou:** I think one of the other things, too - and we really didn't underscore it heavily, so I want to underscore it now - is technical accuracy. When writing technical documentation, there's nothing more important than the code sample being correct, that it runs. And so that's the other thing that this tool really does a good job of, is it makes sure that every single one of your code examples runs and exits with a zero; makes sure everything's proper. Additionally, like Mark was saying earlier, there's plenty of times you want to show an example of where it doesn't work; it's going to fail. And you even want to show the output of it failing. Well, a lot of tools do a really good job of "Okay, if it's successful, we put it in." But if it fails, your whole documentation changes, blows up and you can't run it.

We actually want to see when failures happen, and so the tooling allows us to say, "I expect success, and it has to compile with success" or "I expect failure, and it has to compile with failure." And I even want the output of the failure to show you exactly what I'm talking about, like "This is how it fails." And that allows us to write a lot of code very quickly and never have to -- I mean, that's your testing part of it, right? So when you're writing code, you're writing tests. Well, this tooling - basically, I'm telling it "Here's the expected output, here's the test output I want." And that is super-critical to this toolchain when you're writing technical documentation. Now, this is not just Go; it can be done with Java, or Rails, or Ruby, or Python... it doesn't matter. It's not distinct.

**Mat Ryer:** Yeah, I think it's the UX of the docs; that's a really nice way of thinking about it. Like, who's going to use this, and what's their state of mind when they come to this? What's that journey you're gonna take them on? I think that applied here makes a lot of sense. Well, I'll tell you what - you won't believe what time it is now... And if you check the doc, it does make it clear. It's time for, your friend and mine, Unpopular Opinions!

**Jingle**: \[45:06\]

**Mat Ryer:** Okay, who has an unpopular opinion for us today?

**Mark Bates:** I have four.

**Mat Ryer:** You have four unpopular opinions?

**Mark Bates:** I haven't been on the show in a while.

**Johnny Boursiquot:** You've been keeping them in a bag of unpopular opinions? \[laughter\]

**Mark Bates:** I have. Maybe that's the unpopular opinion, is Mark shouldn't be keeping tabs on all these unpopular opinions. Can I share all four, or just one?

**Mat Ryer:** We'll do one first, shall we? And then see how we go. Pick your best one. Pick your best one.

**Mark Bates:** Oh, but there's so many... I've got four. I'll start with the one that always irritates me, and that's the main function is poorly designed.

**Mat Ryer:** Oh, interesting. Tell us more.

**Mark Bates:** \[46:01\] It should take arguments and return an error. That's my unpopular opinion. I don't like os.args, global variables. Thank you.

**Mat Ryer:** That's almost another one...

**Mark Bates:** So that's my first one.

**Mat Ryer:** You almost got two out there.

**Mark Bates:** Yeah. No, but that goes with it; that goes with the poor design. It forces us to use global variables.

**Mat Ryer:** Yeah. I agree, and I actually have a pattern where I'll always call out to a run function that takes in the environment bits, like args... STDIN, STDOUT even, STDERR... And then also can return an error. And then in the main, all the main is only ever five lines where it calls that, and then you handle the global error once. And there's no global state, and it makes it very easy to test as well, because you can just call this run function like a normal function.

**Mark Bates:** I use a different pattern, which is like a commander interface, which is just - the interface is a main method, and it takes a context, present working directory arguments, and returns an error. And from that, I can pretty much do everything I want, because I can put io on the type that has that interface, and I just call out to that in another package. So I get out of main as quick as I possibly can. But yeah, I think that's \[unintelligible 00:47:14.20\] It'd be so nice if we could just return an error, instead of -- like, I understand we can control all that, but we could also control it OR return an error.

**Mat Ryer:** What about it just returning an error though? What about the exit code? Because a big part of programs, as we've talked about already, is the exit code. And in C, it'll be often there's an int; you can just return, and you just return the exit code. It's very clear what's happening when you do that.

**Mark Bates:** Yeah, I think the way I would probably do it would be the default is you've got a one or something like that if you return an error; maybe that error could also implement an interface that has a status code function on it, which is something I've also done in my own patterns, I've used that interface before, to check against an error and then use that... Or if you really want to customize it, then you can just call os exit yourself, and you don't have to return anything. That would be the way I would design the main function. But that's just me.

**Mat Ryer:** Yeah. What do you think of that, Johnny?

**Johnny Boursiquot:** I do like to keep as much as possible out of the main function. Not always; it depends on what it is I'm trying to accomplish. If I'm writing a quick sort of executable just to get something done and get it out the way, I don't spend a ton of time -- it depends on basically the longevity of the code. And I'll say that I don't always write tests, especially if I'm using libraries that are already tested. If all I'm doing is I have a main that's just using a library to do something, I don't see the value in removing code out of main to go put it in something else just so I can test that. All I'm doing is basically writing a project that integrates things that are already tested. So depending on basically what it is that I'm trying to accomplish, I may keep things out of main, or just write the dozen lines or so that I need and call it a day.

**Mark Bates:** Oh, yeah. When we're all hacking scripts, that's a different argument. That's a different story altogether. \[laughs\]

**Mat Ryer:** Well, I think that's where the design came from. The idea is, if you want to write a quick script, it is easier to do that just having global state... But only in those simple cases. Otherwise, you don't want to overdo it. You \[unintelligible 00:49:24.04\] that global space.

**Mark Bates:** Yeah, but actually, I don't think that's actually a valid argument for the design, to be perfectly honest. I think that actually goes against it. Because if you really want an easy way to write a quick script, you'd let them return an error and give you arguments; you wouldn't have to reach out for global variables, you wouldn't have to handle exiting on your own.

**Mat Ryer:** Yeah, it's a fair point. I mean, I agree with you. Like, I'm. We could also -- we could do this. We've got obviously the backwards compatibility; it would always support the func main. But you could probably, as a special case, have a new main that was different in some way. Like, it's not the end of the world, is it? It's possible.

**Mark Bates:** \[50:07\] Yeah, I don't think that's going to happen anytime soon.

**Mat Ryer:** Yeah, but it's possible.

**Mark Bates:** You know, just being realistic, I can't see that as a thing in Go. Because now you're kind of getting into almost Java-like syntax, where you have different versions of the exact same function...

**Johnny Boursiquot:** Overloading.

**Mark Bates:** ...overloading, yeah. So you've got a main that takes nothing and returns nothing, and then you have a main that takes args and returns an error...

**Mat Ryer:** That'd be an error if you did that.

**Mark Bates:** It would. It's just kind of weird to me today to be able to do both, but...

**Cory LaNou:** I don't like main, it makes liars unless it's trainers. Because as trainers \[unintelligible 00:50:38.17\] code snippets day after day of everything in main, and then when we get all done, we're like "Oh, by the way, never use main." "What do you mean don't use main?" "Yeah, never use main. Get out of main as fast as you possibly can. Do not stay in main." But we just spent five days showing you everything in main...

**Mark Bates:** And can I just go on record as saying I like the state of Maine? They have really tasty lobster, and we're not talking about you...

**Mat Ryer:** Oh, yeah. Thanks. We should make that clear.

**Mark Bates:** I just want to make that very clear, because I enjoy going to Maine for lobster.

**Mat Ryer:** You get letters, won't you, if you're not --

**Mark Bates:** I will, I will. I don't want anybody to think I hate the state of Maine.

**Mat Ryer:** Funky Maine... "He called us Funky Maine!" I don't know how they talk, but probably like that.

**Mark Bates:** No, they don't talk like that. They talk like they're in Stephen King novels. There's a lot "You can't get there from here... And that there road nearly killed a man. You've gotta watch out there for your son there, Jason."

**Mat Ryer:** I like these people just based on that.

**Mark Bates:** Yeah, very down home. Go watch Pet Cemetery to get a good understanding of the accent.

**Mat Ryer:** \[laughs\]

**Mark Bates:** So anyway, that was one of my unpopulars.

**Mat Ryer:** Great. Good one. Cory, have you brought an unpopular opinion today?

**Cory LaNou:** I do. And as a trainer, it's kind of a harsh one. I don't think Go is an easy language to learn as a programming language.

**Mat Ryer:** Really...?

**Cory LaNou:** And here's why. When you think about Go - I mean, one of the big things that kind of slaps you in the face is that it doesn't have inheritance, which is a good thing. As Go developers, we know it's a good thing. But when you try to teach people Go, and their entire life as a program revolves around inheritance, not only do you have to teach them about writing code that doesn't use inheritance; they have to learn a whole new way of even looking at examples and samples. Everybody's got the shape example with inheritance, or the animal example with inheritance... And so they understand, "Okay, well, how do we do that in Ruby? And how do we do that in C++?" And it all kind of has that same story to it.

Well, Go invents brand new stories, to tell brand new tales, because we don't have the same tooling. And so not only are you trying to teach new idioms for code, you're also trying to tell new stories that they've never heard. They have to learn the story as well. And I think that's what makes Go harder to learn. And it's deceiving... Because you can memorize the language in a day. Right? Like, literally, if you had to take a test, and say "You need to know every single symbol that comes in the Go runtime by tomorrow", everybody could probably do that. 130 words, roughly. You could do that. In a day, you could literally memorize the language. But you don't know the language. You're so far from being an actual credible Go developer it's not even fun.

**Mat Ryer:** Yeah, that is a very good point.

**Mark Bates:** I agree. We've seen this as trainers, and Johnny, I'm sure you've seen this too, the same thing... When people are brand new to kind of coding in general, they can get Go a little bit faster, I think, because they're not pulling those preconceived notions. But when I'm teaching a group of Java developers, or .NET developers, or Ruby developers even to some extent - yeah, all of a sudden there's these tons of preconceived notions around statically-typed compiled languages, how they work, how things get done, what those patterns are you need to use... And yeah, I think people do get really caught up on the way go does things, which - it is a little different in a lot of different ways. So it can be difficult, I think, if you're coming from another language.

**Cory LaNou:** \[54:12\] There's been times in class too where someone asks, "Well, why don't you do this?", and I'll literally just finally say, "Because we just don't in Go. Like, we just don't. I can't even tell you why; we just don't." Or the amount of times they'll say, "What happens if you do this?" I'm like "I have no idea." And they're kind of like "Well, wait... You're training Go. How do you not know what happens if you do this?" I'm like "Because you would never do that in Go. It would never even occur to you to do that in Go." "Well, let's do it. Let's run it." And sometimes you're shocked that it actually works. You're like "I can't believe that actually works in Go." And then other times, "Yeah, compile time error. Exactly what I expected." But that's where Go is just so different.

And then for training, we do these bootcamp-style trainings... So in five days, you're trying to impart six months of knowledge onto these students. And that's complete brain overload every single time. And the only saving grace you have is the fact that you've shown them everything, and now they can come back and reference it later. Because we spend a day and a half on concurrency. Concurrency should be two weeks. But you're gonna get a day and a half. You're gonna get six hours, that's what you're gonna get. Like, good luck. We gotcha. And so it's great. I mean -- and concurrency is fine when you're doing WaitGroup, right? Hey, this is easy. Oh, now I'm gonna introduce channels to you... And now I'm going to show you the SLA pattern where I'm going to actually timeout and make sure that if I exceed this a certain amount of times, that I return early... And "Oh, hey, there's this thing called the blocks goroutine now you have to look out for, and here's what happens there." And by the time you get to that point, people are like "What are you talking about? Concurrency was so simple, and now I have no idea what I'm doing."

**Mark Bates:** Yeah. As soon as you bring channels into the mix, concurrency gets really complicated.

**Cory LaNou:** And I show an example where I retrieve 100 websites concurrently, and I use this thing .waitgroup to do it. And I literally take an example that just is in a for loop, and calls out 100 times. And in five lines of code, I can make that work with this thing .waitgroup concurrently. Five lines of code.

Now, to get that same code to work with channels, literally the code is four times as long, and it doesn't even look the same anymore. Now, it's production ready this time, because now I can handle things like timeouts, and send the errors back in the right spot, and all that kind of good stuff. I can manage -- you know, I don't want to have 100 connections at a time, I want 20 connections, so now I've got a connection pooling built in. You've got all this stuff going, Right? And it's totally production-ready, and it's four times the size... Whereas this thing .waitgroup was five lines of code I had to change, right? But I would never ship that to production.

**Mat Ryer:** Okay. Well, yeah, good one. Pretty good. Interesting. I mean, I agree; in fact, I do ship WaitGroup stuff to production if I can get away with it, because it's so much simpler.

**Mark Bates:** I use ErrorGroup mostly, but...

**Mat Ryer:** You use what? ErrorGroup?

**Mark Bates:** Yeah.

**Cory LaNou:** \[unintelligible 00:56:51.23\] I can't get behind it, because it never made it as a real function, right? It never made it into the standard library. So for me, I'm like "No, it never made the grade. I can't use it. It stayed experimental forever."

**Mark Bates:** It works... It's nice...

**Cory LaNou:** It's a batch failure only...

**Mark Bates:** Most of the time it does pretty much exactly what I want. I usually just care about getting --

**Mat Ryer:** Tell us what it is, please, Mark.

**Cory LaNou:** Yeah, so what ErrorGroup versus WaitGroup is, is that you can get the error back. So if you launch 100 goroutines, it'll wait for all 100 to exit. But whenever one returns an error first, it reports it as the error. So if you just need to know that anything in there failed, you can basically abort your batch, which is kind of that concept... But if 25 errors occurred, you're only getting the first one back. Most of the time, I need to know all the errors. I need to know everything that happened, to report that. But there is a set of use cases where you're doing batch programming, where you're gonna kind of roll the whole batch back, and anyerror says roll it back, then that's where it work.

**Mat Ryer:** We do have multi-error now in Go 1.20. And if you want to learn more about that, I suggest you listen to the episode with Carl Johnson and Johnny and I... It's a great one, and it talks about that new multi-error that's coming in Go 1.20.

**Mark Bates:** That's already here.

**Mat Ryer:** It's here. That was the Stephen King line from Maine again. \[laughter\]

**Cory LaNou:** Yeah, one more thing I have to go update my documentation for.

**Mark Bates:** Exactly.

**Mat Ryer:** \[58:17\] Alright, Mark, I think we've got time for another one of your unpopular opinions... I feel like you've done three now, I've counted, but...

**Mark Bates:** Okay, so... Imports for side effects.

**Mat Ryer:** Oooh... Bad.

**Mark Bates:** Awful, awful idea.

**Mat Ryer:** This is not going to be unpopular.

**Mark Bates:** I want to slap on the wrist whoever thought that was a very good idea to use in the standard library. And it's used in several places.

**Mat Ryer:** So just for people that don't know, this is where -- you know, because we have the init function that you can run, and it just runs --

**Mark Bates:** Which is also bad, but go on...

**Mat Ryer:** ...and the program just starts. Yeah... Good for like some cases, again; it's easily abused, one of those... So just by importing a package, you actually then -- that init code will run, and it's kind of hidden, and it can do things... It can change the default HTTP client, for example, and things like this. I've seen code that does that. But it's a surprise every time, isn't it?

**Mark Bates:** The biggest -- the one that everybody kind of runs into is importing database drivers to register with the SQL package. And we all do that. We put the little underscore to keep that package import, even though we're not directly using it... Because all it's doing is running an init function, which calls back to the SQL package, and registers itself. And then, if you try to -- you have no control over this registration either. If the registration fails, for any reason, it panics.

**Mat Ryer:** Yes, it has to, right?

**Mark Bates:** Yeah, because you've got this weird system for registering code... Where what it should be is - if you're gonna make me register at the package level, then give me a function or a method, the call that would return an error if there's a problem with the registration. Right?

**Mat Ryer:** So you'd just rather have an explicit call, wouldn't you?

**Mark Bates:** Yeah, of course.

**Cory LaNou:** And it could be \[unintelligible 01:00:07.08\] Because you know, whenever I teach that topic, I teach the side effect, and I show them - the only reason you have a side effect is because you have an init... Neither one you should ever do. Like, avoid at all cost, because it's magical, and we're not in a magical language anymore. But then it really is one of those things where I'm just like "Why don't they just pick an idempotent call?" Image package is a great example, right? I write a piece of code that compiles, and it runs just fine, but when it goes to actually decode a PNG file, it fails. Why? Because I didn't import the image-png package. Literally, I make the code pass by adding a side effect import. That's the only thing I do to the entire code, and that-- Now it passes and it works... Which is so wrong. Like, that should not make my code work.

**Mat Ryer:** I have a feeling if -- I think the people, whoever came up with that would probably agree now... Sometimes things are just in the standard library... You know, it was written at the time really before these things were established. It's kind of amazing to see this change.

**Mark Bates:** Oh, as a trainer, that's one of the biggest things we fight against constantly. I'm constantly telling people not to do what the standard library is doing, in their face, all the time. I'm sitting here saying "Don't do this very pattern", yet we can name numerous examples in the standard library where this is happening. And this is like a known pattern, encouraged by the standard library.

**Cory LaNou:** The good part about being the trainer though is that when people get really upset about it, the answer is "Well, listen, I didn't write it. I didn't write the language. "Why do they do this?!?" I didn't write it man, I don't know.

**Mark Bates:** Yeah, I don't... So yeah, hopefully -- again, I understand maybe why it was written that way when it was written... But even then, to me it would have felt wrong, because there's this level of magic.

**Cory LaNou:** Yeah, that should have been the first red flag that went up, when they put the init in. It should have been a major red flag... Like, wait a minute, this all of a sudden feels magical. Nothing else in Go is magical. Not a single thing. But this little init thing is magical.

**Mark Bates:** Oh, don't forget the magic okay.

**Cory LaNou:** Yeah, that's --

**Mat Ryer:** \[01:02:10.29\] That was one of my unpopular opinions, was I would make you always have to have both arguments, and use an underscore... Just preferring explicit and verbose over anything magic. Yeah, and that's very Go...

**Mark Bates:** Yeah. Like, why, for example -- here's another unpopular opinion. This wasn't even on my list... Why can't we do type assertions without checking for the magic okay?

**Mat Ryer:** Yeah. Well, it's if you'd know it's gonna be that.

**Mark Bates:** Yeah, but if you know it's gonna be that, then why are you taking an interface?

**Cory LaNou:** Now I feel like I'm preaching to my students. It's like "No, no, no, no, because you only know it today. Tomorrow, when somebody changes your code, they break it, and it panics in production, and somebody hunts you down at 3 o'clock in the morning, and says "Why is your code broken?"

**Mark Bates:** Yeah. And if you're expecting a bytes buffer, take a bytes buffer. Don't take an interface and then do a hard cat type assertion against it. Like, no. There's no reason why you should be in that middle ground of "I don't need to check the okay."

**Mat Ryer:** You might find generics helps with that a little bit... Because I think sometimes it's where they support multiple things. But again, it's quite magic. So you can have the strongly typed alternative methods instead, which I'd probably prefer...

**Johnny Boursiquot:** Now you're touching on my unpopular opinion...

**Mat Ryer:** Oh, okay, Johnny. Let's do it, shall we?

**Johnny Boursiquot:** I think... I think we put generics in Go to shut the critics up, not because we really needed it.

**Cory LaNou:** I agree...

**Mark Bates:** Yeah. I use them for a few things, but my code hasn't changed radically because of it. Maps. Maps are like the number one place I use it, I think.

**Cory LaNou:** There were some nice things to do, like maps, like slices. I can do like a slices.key, slices.values... That was kind of nice. But they could have done that without introducing generics. They could have just done the syntactic sugar in the runtime, or the compiler, or whatever it was going to be, and done those things without introducing generics. Because generics are gonna ruin the language. Give it another two, three years, you're gonna see the worst code ever. And the fact that we didn't have -- it forced you, it forced you to get it right. It really did. Again, there's a place for generics; like, there is.

**Mark Bates:** I don't know if they're going to ruin the language, because as they are right now, they're so weak and so limited in use.

**Cory LaNou:** So I always tell people, Go doesn't have generics, they have generic function and method signatures. There's a big difference.

**Mark Bates:** Yeah, that's it. Yeah. Very, very different.

**Cory LaNou:** I think people -- when we say generic for other languages, that means something radically different than what it means for Go. We just have generic signatures in Go. And I think that is a good thing. True generics would have been a disaster. So that's kind of good.

**Johnny Boursiquot:** Parametric polymorphism...

**Mark Bates:** Ooh, that sounds like fun.

**Mat Ryer:** It sounds like a Harry Potter spell.

**Mark Bates:** I'm gonna have to go and get a CS degree, I think... It does sound like a Harry Potter spell.

**Cory LaNou:** All our unpopular opinions are too popular.

**Mat Ryer:** Well, we'll test these on social media... Because you might be surprised. We often are surprised. What we should have -- because it's hard to know; usually, they hear the case made very clearly, and that's what they're voting immediately afterwards. What we should have is Devil's Advocate, where someone makes the opposite case... Because I could make the opposite case for yours, Johnny. Is that why they did it?

**Johnny Boursiquot:** It's not the only reason...

**Mat Ryer:** Do you think...?

**Johnny Boursiquot:** I don't think it's the only reason, but prior to the critics and everybody saying, "Oh, for such a modern language, Go lacks modern features such as - blah, blah, blah." I mean, when Go came out, I never heard anybody in the Go team, or even the co-creators, folks like Rob Pike and whatnot, talking about "Oh yeah, the language is not complete because we're missing generics" or some things of that nature. That only came about really from -- I heard about that missing feature from the critics; it became popular through blog posts, or YouTube videos... And people are like "Yeah, why doesn't Go have generics...?" And it kind of became --

**Mat Ryer:** \[01:06:26.18\] Stephen King film...

**Johnny Boursiquot:** And I was like "Okay, I've been writing production Go code for years, and it's not something I'm like "Oh, you know what would be really good here? Generics." And because I can't, like F- this language. I mean, I don't know... To me it just feels so much like we're trying to appease people.

**Mark Bates:** I'm with you. I felt the same way. I had no idea what generics even were, because I'd never worked in a language with generics before.

**Mat Ryer:** Yeah, but you used Ruby, mate, which is basically the whole thing's just generic, just do whatever you like.

**Johnny Boursiquot:** \[laughs\] Metaprogramming, a.k.a. generics.

**Mat Ryer:** But Johnny, if that were true, that this was to silence critics and sort of a PR exercise, is that worth doing? If people were turned off because they just thought, "Oh, it's not good enough", even if they have a particular use case for it, is it worth doing things like that to satisfy the community? Like, devil's advocate.

**Johnny Boursiquot:** Well, don't get me wrong, the generics has its uses, or rather - for the sake of this conversation, I will stop calling it generics and start referring to it as parametric polymorphism. Right? That is very useful. I've come across situations where I have some boilerplate code - mind you, new code that I write. I never go back and refactor non-generic code to be generic. For me that's a no-no. If I'm writing new code, and I'm finding, "Okay, there's a lot a lot of boilerplate", especially if I have to create -- take, for example, if I'm writing multiple sum functions, or something; I need a sum float, and a sum ints, and a sum whatever... And I'm like "You know what - the body of this function is the same thing with all of these functions." Things that I would normally take care of with a go generate, or something like that, right? Now I'm like "You know what - yeah, I can probably just refactor just this one thing, taking a type constraint, and just call it a day, right? Those use cases - great. I can definitely see the usefulness of that. But anything beyond that, honestly... I've had a -- I mean, was it really that necessary? In my view, it was useful; I think it needed to be there as a modern language. We needed to have something of that nature. But I don't think it really, truly revolutionized the language as much as people thought it would.

**Mark Bates:** I agree. I have like a synchronized map type I use. It's a struct, and with that, I can set the key and value with generics. And that's really nice. Like, that to me is like one use case where it's been incredibly helpful. I have this nice synchronized map that I can use the exact types I want for. It's that, and then it's basically -- after that it becomes MapReduce functions.

**Mat Ryer:** Yeah.

**Mark Bates:** That's essentially pretty much all that's left. Because I mean, even what Johnny was just describing was essentially a MapReduce when you're talking about summing...

**Mat Ryer:** Yeah, but like data structures and things like that - I can see a use in that, if you have the same kind of thing, but with different flavors. But yeah, I don't know; I haven't used it a lot. We want to do an episode - and this is a shout-out if anyone's got any good examples of places where you've used generics, and you thought "Yes, this is right." I'd to do a kind of "Generics in the wild" episode of Go Time and look at some good use cases.

**Mark Bates:** \[01:09:44.11\] I just told your mine. That was it. It's 30 seconds of the episode.

**Mat Ryer:** Yeah, but you did it in the Unpopular Opinions section.

**Mark Bates:** I have one place where I've found them really useful.

**Cory LaNou:** I would caveat that request though. I would say beyond like this -- I don't want to see just MapReduce, or slices and maps. Outside of those reasons, that's where I want to see it, because I'm in complete disbelief that it's useful outside of those scenarios.

**Mat Ryer:** I've got one... JSON marshalling and unmarshalling. You can just have a method, strong types.

**Cory LaNou:** So yeah, when it comes to [\[unintelligible 01:10:11.18\]] that stuff, I can see that. Like database -- anytime you're marshalling anything... I can see that.

**Johnny Boursiquot:** If we do bring someone on the show for that episode, I think we need to bring -- I think perhaps you and I, Mat, would be balanced in our view of it. Well, I'm not gonna speak for you, but I will take a very balanced view of it... But we should definitely bring someone who's pro generics, and hopefully bring examples of how it has improved their lives considerably... And then we should bring somebody who's anti. Who sees no value. And ideally, we should bring people who had gripes with Go for missing generics, and now bring them on the show and talk about "Okay, now that the language has those features, have you actually used them? How has your life improved? Did you get what you wanted?" I want to hear from those people, because they were very, very loud. Like, come be loud on the show. We want to hear from you.

**Mat Ryer:** Yeah, I think that's fine. I mean, it's a bit scary the way I pitched it, but I think -- \[laughter\] I think definitely. And if that's you, please reach out. We're @gotimeFM on Twitter, we're in the Gophers Slack, in the Go Time channel, Go Time FM... Or you can get in touch through Changelog...

**Mark Bates:** And you can also find Go Time by searching for Go Fundamentals by Gopher Guides, on Google and amazon.com. \[laughter\]

**Johnny Boursiquot:** Shameless... \[laughs\]

**Mark Bates:** We're not doing shameless plugs right now? I thought we were. Sorry.

**Mat Ryer:** That's another section we should start. It should have its own little theme tune.

**Mark Bates:** The Shameless Plugs section?

**Mat Ryer:** Yeah, like \[Silly noises\] Something like that, like bouncy, and... Yeah, it'd be nice. The book looks good, though... Where can people get it? Is it available now?

**Mark Bates:** It is available now, at all fine bookstores near you. So no bookstores near you, because they don't exist anymore... But if you can find a big bookstore, you might find a copy in there, because they do have them... Or you can just go to Amazon, or all that good stuff... Just search for "Go Fundamentals" by Gopher Guides.

They make great Christmas presents, Hanukkah presents, birthdays, divorces... Really, any kind of party you might be going to, any sort of special occasion. Step Father's Day... Arbor Day? Huge. People love getting a big paper book on Arbor Day to celebrate the trees.

**Mat Ryer:** Never heard of that one, but...

**Mark Bates:** Exactly. Why not celebrate Arbor Day with a paperback copy of a 600-page book, folks?

**Johnny Boursiquot:** Have some dead tree with your live ones...

**Mark Bates:** Exactly. Nothing says be green this Arbor Day.

**Mat Ryer:** Well, unfortunately, that's all the time we have today... Thank you so much, Cory LaNou, Mark Bates... From Johnny Boursiquot, myself... Thank you, Mark and Cory. See you next time on Go Time.
