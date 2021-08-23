**Nick Nisi:** Hello, and welcome to JS Party. I'm your host this week, Nick Nisi, hoy-hoy, and with me is Chris aka. b0neskull. b0neskull, what's up?!

**Christopher Hiller:** What's up, Nick?! Yaay!

**Nick Nisi:** Yeah, welcome to the show! Very excited about our topic today, and on that note, I wanna introduce our special guest, and that is Luis Villa. Luis, how is it going?

**Luis Villa:** It's going pretty well. I mean, I'm really excited. Chris is just clearly so excited to talk to a lawyer... I'm just always really glad when I see that enthusiasm.

**Nick Nisi:** \[laughs\] Oh, yeah. Definitely.

**Christopher Hiller:** It's infectious, isn't it?

**Nick Nisi:** \[laughs\]

**Luis Villa:** Are we allowed to say it's infections now? It seems like that's one of those words that 2020 has ruined for us.

**Nick Nisi:** I didn't even think of that until you brought it up... On my side, I think so. \[laughs\] So Luis, tell us a little bit about yourself.

**Luis Villa:** I'm a former programmer, I got a CS degree in the last millennium, and worked in open source for a while. I got involved in open source while I was in college... Actually, originally hacking on the LEGO Mindstorms, the very first generation of LEGO Mindstorms...

**Nick Nisi:** Oh, yeah.

**Luis Villa:** And also just as a Linux user... This idea that people were building an entire operating system together on the internet was like... But I was also a political science major, so I was very interested in this overlap of politics and power and computing. It started off as just like -- I was interested in politics and I was interested in computers, and I really thought those two weren't related, and then by the end of the '90s it was like "Oh yeah, actually they're certainly super-related."

I worked at a startup called Ximian, which worked on the Linux desktop... And basically then after that, I was like "Actually, law school sounds like it would be fun." Pro tip, kids - law school, not fun.

\[00:04:09.19\] And since then I've worked at a series of Mozilla as an attorney, where I worked on the Mozilla public license, revisioned version 2.0. I worked at a big law firm for a while, working among other things on the Google/Oracle lawsuit for Google... Where fair use came up quite a bit, which is something we'll talk about today.

Then I worked at the WikiMedia Foundation, and now I'm the co-founder of a startup called Tidelift, where we are trying to make open source better for everyone by helping build a sort of economic and payment loop so that maintainers get paid to do all the sort of not-fun parts of maintenance... They're not fun, but they're really important for businesses and enterprises, so we're trying to close that loop for the businesses.

But yeah, I'm a copyright nerd at heart, and so I think that's sort why I'm here today.

**Nick Nisi:** That's awesome. This kind of ties into a meeting I had just before this, where I was talking to our interns... And really talking about how so much of the software that we use and so many of the big companies that we see and work with and use their products are built on all of this open source software... And it's really hard out there for open source developers, and I was kind of evangelizing that... So it's really exciting that you're working on making the lives of open source developers so much easier, so thank you for that.

We're not here to talk about open source too much today... Specifically, we wanna talk about Copilot and kind of get into that. b0neskull, do you wanna maybe explain what Copilot is and kind of get us going with that?

**Christopher Hiller:** Yeah, so if you're not aware of what it is, essentially it's kind of like an AI-assisted autocomplete on steroids, or something like that... And your IDE may have autocomplete suggestions of like "This is the name of the function" and then you hit Tab to complete it. But it's a lot more than that. It does AI things to try to give you more code. If you write a comment that says "This function does that", it can try to write the function for you. It's good at automatically completing boilerplate.

Right now, GitHub Copilot is in a -- is it called a closed beta? I'm not sure. You have to sign up and maybe they'll let you in... So yeah, it's not generally available yet.

**Nick Nisi:** Yeah. To that note, when you sign up, which I did on the first day, through that process they ask you -- because right now it's only available as a VS Code extension...

**Christopher Hiller:** Right.

**Nick Nisi:** And they ask you about your Visual Studio Code usage... And I answered as honest as I could, which is "I never open that app." So I don't have an invite... Luis, are you in that?

**Luis Villa:** So I do have an invite... I think it's fair to disclaim here - I mentioned that my first job out of college was at Ximian... Those of you who are real old-school open source will know that Ximian was founded by Nat Friedman, who's the CEO of GitHub... So I may have gotten my invite a back way... I didn't get one at first because my IDE these days is Word mostly, which is a Microsoft product that's not VS Code... So I admit, I got an invite purely because I wanted to troll people on Twitter by trying to see if I could get VS Code to write a license... But I admit, time has not been on my side, so I haven't done that project yet. So yeah, the backdoor was there for me. Nat and I haven't talked about this much, but I felt like that was a sort of appropriate thing to lean on him for.

**Nick Nisi:** Yeah.

**Luis Villa:** \[00:07:49.16\] I mean, I think it's fascinating... There's both the lawyer side of me -- but I do wanna say, boy, simply as an example of like... Some of the examples of code coming out of it are simultaneously amazing, and also very much occasionally the "Boy, the robots are not coming for us any time soon", right? I saw somebody used it to auto-generate a function about calendars, and it was like "Oh yeah, months are 30 days long and years are 365 days long", and apparently no one's trained it on like -- you know, that blog post "Falsehoods programmers believe about time" or believe about dates, or whatever... Like, nobody's trained it on that yet. Or maybe it's just not heavily weighted enough. But you know, it simply is a technical matter.

**Christopher Hiller:** Right. It will generate code, but that code is not necessarily correct.

**Luis Villa:** You've gotta double-check.

**Christopher Hiller:** Mm-hm....

**Luis Villa:** Though I have seen some amazing examples of it really filling in some -- and it was one of those things... One of the things, you know, with my business hat on - I think there's these really fascinating questions about where it goes from here... Because I assume - again, I haven't talked to anybody at GitHub about this, but this is the kind of thing that once you get it in place, the ways you can leverage it are really interesting... Like, how does it know about third-party APIs? Because it could, right? Right now it only knows about -- as best from what I've seen on the internet of people playing with it, it seems to know about third-party API's just by reading other people's source code...

But you could see -- I bet GitHub's partnerships team is thinking "How can we integrate this intelligently with third-party APIs?" Or security, for example - this is showing my age, programmer-wise - my experience of security issues, I'm thinking purely about C-based string parsing kind of stuff, instead of, you know, I guess with Java it's like cross-site stuff, and things like that. But from the examples I've seen online, it seems like the AI is still -- if there are a lot of bad code examples in the codebase, which \[unintelligible 00:10:02.18\] there are, it's gonna replicate some of those security fails... And what are they doing to train it to avoid some of those security fails I don't know, but I think that's gonna be really interesting... Again, with my nerd hat on as opposed to my lawyer hat on. We can get to the lawyer bits in a second, but I just think that's really cool.

**Christopher Hiller:** Yeah, right now it's just like -- I mean, it's pretty smart, but it's not that smart. And it just outputs things, it doesn't -- maybe in the future it will be cool if something like that could just look at your code and be like "Um, you know what? This is wrong." And it would look at what you're trying to do and it would compare it against known good implementations of that thing you're trying to do, and it will alert you to problems. That would be cool, too. So there's a lot of places it could go in the future, and that's going to be interesting.

So we've kind of explained what it does, and then a little bit of what it doesn't really do. It's still operating, its training set is just source code, it uses GPT-3, I believe...

**Luis Villa:** Yeah, OpenAI, whatever is behind the scenes for them.

**Christopher Hiller:** Right. So it's just dealing with a lot of techs. But - so when Copilot came out and people started playing with it, and then on Twitter you see that you can give it certain prompts and it will actually generate code that may have been -- I mean, it's kind of obvious that it's getting the code that it's writing from GitHub. So that's anything on GitHub. So a lot of people were kind of upset about this... So Luis, why do you think people were upset about it?

**Luis Villa:** Boy, that's actually a deceptively complicated question, because there's so many layers of -- you know, people are upset for very business reasons... Like, what if this code that's created is accidentally copyright-infringing for my company.

\[00:12:11.14\] I've heard -- maybe they're apocryphal by now, but I've definitely heard at least some CTOs, VPEs saying "Can't use this in our company's codebase until there's a little more legal clarity." So that's one reason people are a little angry. I think there's some sense that maybe GitHub was being a little sloppy about that... So that's one source of concern. Another source of concern is simply just the emotional -- you know, authors feel ownership over their code. That's very deeply-felt for a lot of people; certainly not for everybody, but for a lot of people, for a lot of authors, and that's not unique to code. It happens for authors of books and music as well... So we've seen some of the same kind of emotional reaction to -- like, some people who get sampled, some musicians who get sampled, they're like "Oh, this is so awesome! My music is being reused." You know, Nine Inch Nails - their stuff got reused by... I've never actually said this out loud, so I may mispronounce it - Lil Nas X. His stuff sampled from an old Nine Inch Nails track, and Nine Inch Nails was like "Cool! I finally have a number one hit." Whereas a lot of other musicians that get sampled are taking it to court, literally.

So there's that emotional component... And of course, there's this added component of some people placed their code under licenses that are explicitly reciprocal. The idea is that if you use part of my code, you've also gotta share with the world your code. The common name for those is copyleft, though I think reciprocal in this case really captures something important that copyleft doesn't necessarily convey... The idea is that they're supposed to be sharing and sharking-alike, and so a lot of people who deliberately chose to put their code under that license were pretty frustrated about that. So all those things sort of layered on top of each other to produce some pretty negative responses.

**Nick Nisi:** Yeah. Stepping back before we dig more into the legal side of it, I just wanted to disclaim that I haven't used it yet. I have used a similar tool, I think, called Tabnine, which was kind of doing a similar AI completion thing... But I don't think it was completing full functions, it was more like "Oh, I see you're naming a variable like this. This is a very common variable name", or something, and it would autocomplete it. I ended up turning it off because it was more noisy than helpful often... But I'm sure it's growing and getting better, and all of that.

But from an outsider's perspective looking at it, there are definitely good and bad that I've seen from it. When I first saw it, it was like "Whoa, this is just amazing", and not necessarily thinking it's gonna take my job tomorrow or anything like that, but it was like "Wow, this could really help... If I'm staring at a blank file, how can I get going with something." It seemed like a very good way to just kind of get something on the canvas, so to speak, to get going... And whether or not it's correct - you can kind of tweak it from there and it'll learn and get better over time.

It was also impressive that it didn't go the route of some other AI stuff that's come out over the years, like Microsoft Tay is coming to mind. It's good that it's not just immediately going that route, with very racist code, or something like that... But it's so far been pretty positive. And then at the same time, I've seen really (I'll just say) dumb examples of it, where somebody autocompleted an About Me page, and it autocompleted to the About Me including the Twitter handles of a GitHub employee, and stuff like that. So it's showing that it's literally just copy-paste at that point. But it is kind of in an intelligent way, so it's straddling this line of really simple and really complicated and really impressive that I think is an interesting place to be... But of course, this is the early days, so it's gonna continue learning and going from there.

**Luis Villa:** \[00:16:04.22\] You know, Nick, something that I was realizing as I was preparing to talk to you guys today... Actually, a lot of the -- I mean, even before, because there were a few other things like Tabnine... There's also just been IDE autocomplete for a long time, of various sorts. Like, it knows what kind of codebase you're working in... And it's one thing when it autcompletes -- I mean, we've had our brackets get matched automatically for ages in Emacs, right? But there's also been more sophisticated stuff that will read documentation, and try to guess structures of objects, and things like that... And that actually implicates some of the same copyright concerns. Because at the end of the day -- I mean, we literally did have a huge fight that took the better part of a decade and cost hundreds of millions of dollars of attorney's fees on whether or not API function names essentially, and function declarations, are those copyrightable?

And one of the things that I think that's an interesting "careful what you wish for" kind of thing here is - if a lot of this code is copyrightable and fair use doesn't apply, it's not entirely clear that even those simple, like "I'm gonna autocomplete the function name from the standard library...", like, some of the same arguments that Oracle used apply there, right? And it's actually been sort of interesting, and honestly a little frustrating for me - some of the same people who came out strongly in favor of fair use when it was Google saying "Yeah, reimplementation should be fair use." Basically, when it was Oracle's stuff getting copied, everybody was like "Hell yeah! Copying is awesome!" And now when it's GPL stuff -- like, I get the emotional valence there, but from a lawyer perspective, GPL is a copyright license, and Oracle's grungy, terrible, every-lawyer-hates-it terms of service \[unintelligible 00:18:04.24\] around their code, copyright perspective - those are both copyright licenses. Courts aren't in the business of saying "Oh yes, but we really like Richard Stallman and we don't like Larry Ellison, so therefore one of these is fair use and the other isn't."

There's been to me some sort of frustrating inconsistency about people who until a month ago were big fair use proponents... We can get into the nuances of that, because it is really complicated; the question of fair use in machine learning is in fact a really complicated one, and anyone who tells you that it's black and white - like, courts don't know what machine learning is... So the idea that you can say "Oh yeah, this is definitely fair use" or "Definitely not fair use" - there's so much grey area in there... We could go on about that for hours, but I'll pause and let you guys get in another question \[unintelligible 00:18:59.22\]

**Nick Nisi:** Let's actually break right there, and we'll come back after the break and talk about that. Yeah, it's potentially terrifying, just thinking about how the technical aptitude of a court could potentially decide the faith of software... That's terrifying.

**Break**: \[00:19:17.29\]

**Christopher Hiller:** So Luis, you mentioned that fair use can be a grey area around this sort of thing... Can you go into a bit more about -- I know this is a thing that continually comes up in trials, is "Is this fair use or not?" So where do you think something like copilot lands, and why?

**Luis Villa:** So let me first just start, for those who aren't copyrighters in the audience - and why you'd be listening to us if you're not I'm not sure, but... We'll start with a little bit -- so fair use is this very American concept - it's not present in a lot of other legal systems around the world - that copyright should be bounded. That yeah, of course, we give authors a lot of rights, it's very explicitly in the constitution that we give them rights in order to promote the progress of the country. That's literally the phrase. There used to be a copyright blog called Promote the Progress. The idea was that this was something that you gave to authors, and in exchange, they made everybody better off.

So in part because of that sort of founding intuition, first the U.S. court system, and then eventually it was transferred from the court sort of, to put it a little bit in programming terms - the court's prototyped fair use. They sort of made it up on the fly when they ran into some problems... And then the Congress sort of took those ideas that had been floating around the courts for several decades at that point - maybe even almost a hundred years at that point - and Congress sort of refactored it and said "This is how we're gonna steal a phrase from one court here, and a phrase from another court here, we're gonna put it into one refactoring, make it part of the law, and then judges will sort of go on elaborating and clarifying that."

This was done in - if I'm remembering my timeline correctly - the transition of fair use into actual statutory law, written-down laws as opposed to judges sort of making this up on the fly, happened in the '50s. And so very much the examples, if you go back to what was Congress talking about, they were talking about things like teachers. So if you want to use a few minutes of a movie in a classroom to teach some point, fair use protects that. Fair use says the copyright holder can't just unilaterally block that.

Another canonical example is literary criticism. If you wanna quote a paragraph of a book in order to prove a point about "This author is an asshole", then you can do that, and fair use allows you to do that. Fair use does -- Chris, to your point about "It seems like it comes up in court a lot..." The whole thing about fair use is that it is sort of "I know it when I see it." There are some guidelines, there's a four-factor test that everybody applies... But the fourth-factor is sort of like "Yeah, and whatever else we wanna throw in at the time." That's because the whole point of it is like "You know what - people may be doing something new and different and innovative with this stuff, and we don't want authors to be able to block that if we think it's a good idea." That's sort of the core of it.

So we think literary criticism is a good idea, and important there to note that it's criticism, right? One of the reasons that we have this fair use established is because if copyright holders could block that kind of use, then you would only have positive reviews of books. The authors would be able to say "Yeah, I didn't really like that review. Take it down." And they'd be able to use copyright to block that.

\[00:24:30.14\] And so baked in from the very beginning of fair use, one of the things is you really don't want authors to be able to just say "Yeah, I've got a bad feeling about that." Done. You want copyright to have some sort of safety valves for "This is really important." Similarly, news reporting fair use is used all the time, to be able to say "Look, here's a 10-second snippet of this politician's ad", for example. "We think that this politician's ad is misleading. Let me use this 10-second snippet to set the stage for this discussion of why this politician is misleading you."

The creators of that advertisement have copyright in that 10-second snippet. They could, if copyright didn't have the escape hatch of fair use, they could use copyright to take down that news segment, because they obviously don't like that the news reporter is saying "The politician is lying to you. Here's why."

So copyright originally existed for all that kind of stuff. But of course, it was written in the '50s. It literally has no concept of software, much less machine learning. So there's all this settled stuff -- like, academics don't sue over fair use very much because that stuff was all settled a hundred years ago. Whereas software - it comes up quite a bit, because in fact we have no idea. Congress has never really weighed in on this courts only way in on it once in a blue moon. A lot of the arguing in Google/Oracle over "Is this reimplementation of the API a fair use?"

One of the key cases in that was Lotus v. Borland, which was about whether the dropdown menus on an x86 PC in black and green on your CRT screen - a court found that those menus were a way of operating the spreadsheet in the 1980's. So here we were, 30 years later, and we're trying to -- one of the things, Nick, you mentioned about judges, how much tech do they know... We were trying to tell them, "Well, look, the API is sort of like a menu in a spreadsheet in the 1980's... How is any reasonable person supposed to find a reason--" So yeah, tons of grey area, and that's why fair use then comes in.

This question has come up a lot recently, these questions of -- we joke that you could write an entire casebook... A casebook is like a legal equivalent of a sort of intro to programming kind of thing, where you take snippets (ironically through fair use) of these cases and you say "Well, here's what a judge found about this. You budding lawyer should learn about the law by reading what the judge says about this." And we often joke that you could write an entire casebook about copyright just through the lawsuits that Google has been involved in... Because in the early 2000's they were just like "You know what - we're gonna scrape the whole web. It's gonna be great. We're gonna organize all the world's knowledge." And average people were like "Yay! Organizing the world's knowledge."

**Christopher Hiller:** And scan all the books...

**Luis Villa:** Scan all the books, scan all the porn... There's a whole line of cases that are about Google image search and this one porn company, who just -- the guy really just didn't like Google, or search engines in general. Perfect Ten. But there's a whole line of cases about Perfect Ten.

\[00:28:05.26\] Yeah, Google Book Search - another huge one where they literally just said "We're gonna scan all the books. And if you don't like it..." And the authors didn't like it. There was a big, extensive lawsuit from a bunch of authors, and the U.S. courts eventually found "No. You know what - we understand you the authors aren't happy about this, but this is so transformative."

Transformative use is a concept that is not found anywhere in the statute, but has really -- a lot of courts have found that a useful concept, starting in sort of the mid '90s. U.S. courts found this idea of like "Oh, well if it's really transforming how it was used, if it was some way that the original authors wouldn't have conceived of, didn't have a business in, and it's something really radically new and different..." And you know, the book publishers were not in the business of creating something like Google Book Search. And that's where the analogy starts getting really obvious. We as code authors - were we in the business of creating something like Copilot? The trend so far in the U.S. has been that machine learning typically is so transformative... Definitely not always, but almost always in a handful of cases the courts have really considered machine learning -- courts have tended to find it transformative fair use.

**Christopher Hiller:** And that typically involves the training sets then...

**Luis Villa:** Yeah. The training sets are really where there's a clear copyright. Copyright is really a set of rights which includes things like the right to copy it, the right to redistribute it, the right to make reproductions... So the first step of training is this idea, like "We're gonna scan all the training set", and you are making a reproduction there, and you're making a reproduction for commercial purposes, which doesn't always matter, but sometimes matters.

So yeah, you've just copied the whole thing. I mean, Google Book Search is a copy in a very literal sense of all the world's books, and at least the training set, that initial training of -- you know, presumably, OpenAI was not pinging GitHub's API for code snippets at every point during the training. Presumably, they vacuumed it all down, and then did their training on it. So a copy was made, so a copyright infringement has occurred, unless fair use defends that. And courts have generally found -- and there's some good policy reasons for this.

One of my favorite papers in this area is a paper -- I'll share a link with you guys so that you can put it on the... It's a paper about how fair use is actually really important to building equitable training sets. Because we know that a lot of training sets - this is not so relevant for code, but if you're doing a training set on face and you want a racially and gender-diverse set of faces in order to do your training on, you're gonna have to use fair use, because you literally can't buy a racially-diverse training set. It just doesn't exist, because Getty and all these other photo services actually have all kinds of biases. So you're gonna have to deliberately construct, and you're gonna have to rely on fair use for that.

If you rely only on things you can buy a license to, you're just introducing all sorts of biases into your training dataset. Now, of course, as we know, any of you who have followed artificial intelligence policy discussions, there's all kinds of other ways you can introduce bias... But fair use is one of the good tools, one of the few good tools we have to remedy that in the AI space more generally. Again, that hasn't come up -- Nick, as you mentioned, Microsoft Tay, or whatever... I haven't seen any egregious examples; I'm actually really curious.

\[00:32:02.22\] My first job out of college with Ximian was as a QA guy, and I'm deadly curios what kind of QA they did around race and gender and things like that. Because on the obvious use cases, something like "Copilot, build me a gender selector dropdown", that's fraught -- that's a super-complicated \[unintelligible 00:32:26.25\] I have no idea, I haven't seen any particularly bad examples of that; maybe I just haven't heard enough...

**Nick Nisi:** Yeah. And obviously, I haven't used it yet, so everything I've gleaned about it has been just from mostly tweets and a few articles here and there... But one that comes to mind in particular is Cassidy Williams from Netlify - she does a livestream coding thing every week, and at least one week she did a showing off Copilot on the stream thing, and was specifically trying to make it be biased about something. She was writing comments in Spanish... I could be misremembering, but maybe a gender dropdown was an example of that. And overall, just gleaning from her tweets about it, it was overall pretty positive. It wasn't going to any dark places with that. So that's probably where a lot of secret sauce comes in, to really take the training data and make it into something that is not only usable, but is also ethically in bounds.

**Luis Villa:** I can't wait -- one of these days somebody is gonna write a guide to regression-testing your AI, that's gonna have whole chapters on like "So - okay, you've regression-tested your AI, and it basically does what you want... Now let's test it and see how racist it is." Because at some level you do -- like, because we can't entirely peer inside the black box, we have to do... If GitHub didn't screw that up, they must have deliberately had some people poking at it with exactly those kinds of examples that \[unintelligible 00:34:02.19\] Which does actually get us to one of the interesting -- I think one of the things that might come out a little bit in our conversation is a little bit of frustration at times around... There are really interesting legal and policy questions around this. Most of the discussion online was not really about the interesting -- so much as it was emotional, frustrated... Which I get. I mean, I'm a big proponent of copyleft -- somebody challenged my copyright bonafides on Twitter and I was like "I literally don't think I can fit all the copyleft licenses that I've advised on into one tweet..." And there aren't that many of them, right?

So I get it. I do believe in reciprocity as an important part of how we build software... But at the same time, we've also always -- a lot of old school copyleft folks have also been old school fair use folks... So this is a little bit of -- I think there was some tension there and some frustration on both sides of that discussion, which came through... Welcome to arguing on the internet.

**Break**: \[00:35:15.17\]

**Nick Nisi:** Taking maybe a step back from this, and thinking about this from a software perspective, and specifically a software license perspective - maybe I'm misstating the argument around that, but is it considered fair use because it's just training off of potentially certainly licensed code, and not necessarily running it? And if it were doing something to run it, would that change the way that it might be perceived?

**Luis Villa:** So you do two steps if you're trying to figure out "Is there some sanctionable copy in here?" First is "Was there copying at all?" and that kind of thing doesn't come up -- you don't see that coming to court very often, or at least not in particularly dramatic, high profile ways, because usually it's pretty easy to compare this/compare that. Pretty much the same, right? That's sort of step one of your analysis.

And here, it's important to distinguish that there's two possible stages at which a copyright infringement could have occurred. There's "Did GitHub infringe people's copyright?" and "Are people who are using Copilot infringing the copyright?" And the answers to those may be different. I tend to think that the answer is in both cases "There's no infringement." That's sort of my bottom line. But it's important to distinguish between those two. Because you can see a world -- there's definitely arguments to be made that GitHub is infringing, but the user of Copilot is not. So let me get into a little bit why that is. So when you're looking at fair use -- I mentioned the sort of transformative concept, but before we get to that, there's these four rules, and I can't believe... Maybe I've had \[unintelligible 00:38:08.22\] than I thought... I should normally be able to rattle them off. But we'll go through them one by one and I will really try to remember the fourth one by the time I get to it.

So one is the nature of the taking. So are you doing this for some kind of societally-advancing purpose or not? This is where things like teachers get much more of a flexibility than a rival book publisher.

Another is "How much did you copy?" This is one of the key ways how GitHub is copied and how a Copilot user may copy is very different. Because Copilot undoubtedly, at some point in the process, copied the whole thing. So a court looks differently at "Did you copy the whole thing, versus did you copy one function fragment out of a giant--" This came up in the Oracle/Google trial, because Google - well, really Apache, but we'll say Google for simplicity - really only copied one type of thing; they copied -- I used to have these numbers right on top of my brain. It's a really good sign that I don't remember them exactly anymore... But it's basically like 10,000 of API function names, but they didn't copy the other several million lines of the implementation.

**Nick Nisi:** They just reimplemented them, right?

**Luis Villa:** They carefully reimplemented them. So a court will look at that and say "Oh, it looks like actually not much of this was copied." But this is where it gets a little complicated... And again, why does this go to courts to decide these things? There's a famous case about the biography of Gerald Ford, who's our nation's most boring president, essentially... Except that he pardoned Richard Nixon, right?

\[00:40:06.19\] So he wrote a biography, and a magazine go their hands on an advanced copy of the biography. And they basically reprinted the part about him pardoning Nixon. And the court was like "Let's be honest here, nobody was buying that book for any reason other than to read the part about pardoning Nixon... Because otherwise who cares? It's Gerald Ford."

So the court said "Well, even though only a very small part was taken, as a percentage of the book, it's still not a fair use, because that was really the core of the value of the book." And Oracle tried to make a similar argument, which was "Okay, yeah, you didn't copy 95% of Java, but you did copy the most valuable part, which is the API." So this is where -- you know a Copilot user is gonna get... I mean, I think they said in their white paper, which I recommend everybody read, and again, I'll send you guys a link, because it's pretty short and pretty interesting... They say in their internal testing something like 0.1% of suggestions actually matched back to -- like, when they did a sampled thing, only 0.1% of suggestions looked like they were copied from another source. The other 99.9% were original... Original in the sense of like being created by the machine learning --

**Nick Nisi:** By the AI.

**Luis Villa:** Yeah, by the AI. It's still sort of weird to talk about things being created by an AI, right...? So if you're trying to reimplement some competitor's API, I probably wouldn't use Copilot... Because then the output is gonna look like you took the heart of this other person's thing. It's probably gonna start autosuggesting code that looks a lot like their implementation, if it's an open source implementation... So if there's like a GPL implementation of something and you wanna write an MIT implementation of it, I suspect Copilot -- I haven't seen anybody try this yet, but I suspect Copilot is gonna start doing things that look a lot like the original implementation, and then you're gonna have a problem.

But because one of the tests for fair use is "How much of it did you take?", if you end up with like a five-line fragment out of somebody's GPL code that's like 100,000 lines of -- or, you know, what's the Linux Kernel these days? 6-7 million lines of code? A court is just gonna laugh that out of court. If somebdoy comes after you on a GPL claim for you as a user of Copilot - again, that's different from GitHub, because GitHub did presumably copy the entirety of the Linux Kernel.

So we've got the "What was the nature of the taking? How much did you take?" Another thing that courts are gonna look at is the commercial impact of this copying. So again, GitHub, since they're copying the whole thing and they're a big corporate competitor, possibly some big -- for you as a user of Copilot... Like, that company was not trying to sell you five lines of code. They weren't trying to license five lines of code to you, and you weren't looking to buy five lines of code. You were just gonna write it yourself anyway.

So a court, again, is gonna look somewhat skeptically at -- and this is something we know from the Google Book Search case, that a court is gonna say "Well, you all were selling snippet search of your book, so in fact, if anything..." and this is a key difference from Google Book Search to Copilot... The court found in that case that "Actually, this is gonna help you sell more books." Because people are gonna find books, there's a limitation on how much gets shown, and there's a Buy button right there... There's no equivalent to that in -- maybe GitHub will do something like "By the way, it looks like you copied this from the Linux Kernel. Click here to do GitHub Sponsors." That might be a little tacky, but you could see that as a thing that they could do in the future perhaps.

\[00:44:13.07\] So that's sort of the basic analysis of how much got taken, was it really important stuff that got taken, what was the commercial impact, is it something new and bold and different, that wasn't gonna happen anyway? And I think looking at all those -- I find a really hard time seeing that a court is gonna say that this was not a fair use... Because it's so different, the impact is so small... The emotional impact is real, and I don't wanna downplay that. As authors -- but again, the whole point of fair use is sometimes authors are pissed, and we ignore that as a policy matter. By the way, I should say again, this is all in the U.S. The E.U. has different sets of rules about this, and I really think one of the interesting things that is under-discussed, that I would love to see more of, is commentary from the European Union lawyers, Japanese lawyers... Because I don't think we have as good a sense yet of what that would look like in other places, other legal regimes.

**Nick Nisi:** Yeah,

**Christopher Hiller:** I'm getting the idea here that essentially you put your code on GitHub -- one, there's a Terms of Service that says "GitHub can use your code", right?

**Luis Villa:** Yup.

**Christopher Hiller:** Okay. That's one thing--

**Luis Villa:** Though you don't always put your code on GitHub.

**Christopher Hiller:** Right, but that's presumably what they used as their training set, right?

**Luis Villa:** I think I even saw some suggestion that they also looked at other repositories as well... Because OpenAI scans the entire web, so I did see some suggestion -- I don't know if it's been confirmed, but I see some suggestion they would have looked at other...

**Nick Nisi:** There are other repositories now?

**Luis Villa:** But at this point, the fraction of the world's code which is on GitHub is large, right? So it's probably most of GitHub.

**Christopher Hiller:** And \[unintelligible 00:45:50.26\] it seems like the license is irrelevant, right?

**Luis Villa:** I don't know -- I mean, I think it's important to say, I've been wearing my lawyer hat this whole call so far, right? And there's a whole other ethical, like "Is it legal?" I mean, like I said, I think the answer is probably pretty clearly yes. It's possible to be legal and still be a \*bleep\*. Excuse me, are we a family-friendly podcast here, or...?

**Christopher Hiller:** Waeeeee...!

**Luis Villa:** Waeee! Alright, great. Good.

**Christopher Hiller:** Jerod's not around...

**Jerod Santo:** Or... Maybe I am.

**Luis Villa:** \[laughs\] Yeah, my little guy's in camp, so... Yeah, you can still be a jerk, right? And I certainly think -- GitHub talked, in that white paper that I mentioned earlier, that they are implementing... I don't know where this is at; I don't know if it's rolled out, or anything... But they mentioned that they're gonna try to implement some kind of "By the way, it looks like this probably is not original. It probably came from this." Putting aside whether or not that's legally necessary - you know, in terms of like not being a jerk... Like, "Hurray! GitHub should not be jerks, right?" They're an 800-pound gorilla, and I think maybe in their rollout of this, I think maybe one of the things here is they didn't reckon with the emotional --

**Christopher Hiller:** Yeah...

**Luis Villa:** You know, the heft that they carry... They've been really good. I think -- I'm not a Microsoft apologist. I literally got into open source in part because I was convinced that Microsoft was evil; I'm still personally irritated by the Bill Gates image rehabilitation campaign... Like, the guy has all this money to give to charity because he operated in abuse of monopoly. That's why he has so much money. So it's nice that he gives it away, but let's not forget that first part.

So I'm not a Microsoft apologist, but I think Microsoft and GitHub the past few years have mostly done really well by open source, so I think maybe they got a little laurel resting, a little too comfortable here, and didn't fully think through how much this would really emotionally piss people off, even if the lawyers gave a full thumbs-up.

**Nick Nisi:** \[00:47:56.14\] Yeah, I think that that clout that they've built up in open source over the last couple of years probably should help give them some leeway in figuring this out... But definitely working to figure that out, figure out where the emotions are coming from, and things like that... But do you think that maybe some of this murkiness is just caused by its dealing with code itself? Or as with the books example, it's code to scan books and to open books up and create this product around that. This is using code to look at code, to suggest code... It's all just one thing.

**Luis Villa:** It's layers of indirection and layers of -- it's layers on layers on layers, and it's murky, because we don't really even... I mean, this is one of these big, sort of meta trends. Copyleft has been somewhat in decline, and certainly in the JavaScript community there's essentially no copyleft. So there's this sense of like "Yeah, look--" I sometimes call it almost like car exhaust... Putting code on GitHub is like this thing that sort of happens accidentally by way of doing the thing that you actually want to do.

A lot of people aren't entirely sure how much is copyright really a motivator for - especially in a SaaSy world, how much is copyright even... It doesn't have the same kind of motivational role that copyright, at least in the U.S, really assumes... It's like, "Why is this stuff even copyrighted? Because we're just gonna throw it on GitHub under a license that, by the way, we never enforce anyway." That's actually a different discussion, maybe a different day, about like - MIT and BSD require people to acknowledge, they require like "Yeah, you've gotta ship this license text." So if Copilot violates the GPL, Copilot also violates MIT and BSD, because those attribution clauses - they're part of the license. And we often pretend, in the JavaScript world... I shouldn't say "we" there, but certainly my observation is that we often pretend that MIT and BSD basically are just public domain. Nobody complies with these notice requirements pretty much, and everybody has just sort of agreed that "You know what - that's fine. That's not what I'm here for anyway."

So yeah... And the law hasn't really -- there's both layers of technical indirection and layers of just like "How much do we actually care about copyright in this space right now anyway?"

**Christopher Hiller:** I imagine there's some people who are looking at this and are all upset, and they're thinking "Gee, there has to be some sort of way for me to create code and put it out there", but GitHub and Microsoft can't take it and make something like this with it. And then I'm thinking, "Hm, that sounds a whole lot like the ethical open source movement that wants to place restrictions on things." So it's kind of like talking out both sides of your mouth, because --

**Luis Villa:** Yeah, absolutely. There's absolutely some sort of like "Oh, you can use it however you want, but not like that."

**Christopher Hiller:** Right.

**Luis Villa:** That makes me cringe, because that is not the -- Matthew Garrett, who's a former FSF board member, has written really eloquently on this in a long blog post on his vision of software freedom is very much about tearing down the copyright system. In his view, he thinks that -- he got into free software in part because the whole idea was more people should have access to more source code, and we should have fewer restrictions on how it's used. And GPL was a tool to get to that end, but in his blog post, he talks about how we should be cheering on something that helps break down some of those barriers.

\[00:51:52.16\] Again, as a long-time \[unintelligible 00:51:54.06\] FSF member, until the recent leadership stuff... I mean, I agree; it's actually really interesting, a lot of these copyleft licenses have clauses in them that very specifically say "This is limited by fair use. If there's a fair use--" And that's sort of redundant, in some sense... But you don't have to write that into the license, because it's already part of the law. So it's belts and suspenders... But it was also -- we put those in there, and I say "we" because literally, I helped put some of these into these licenses... We put those in there because it was a statement that fair use is important to us as like an ethical concern, not just a legal concern. So to see some people being like "Oh yeah, I love fair use when I get to fair use things, but when you're fair-using my stuff..." Hey. For those of you on the podcast who can't see my facial expressions, there's a lot of handwaving and grimacing right now.

**Christopher Hiller:** I'd love if you could share that blog post URL.

**Luis Villa:** Yeah, I'll do that.

**Christopher Hiller:** So we can provide it to our listeners.

**Luis Villa:** Yeah, will do.

**Christopher Hiller:** There's been a ton of fun writing about this; I can definitely send a few links. A former member of the European Parliament from the Pirate Party wrote a really good thing about it from a EU perspective... Because the EU, interestingly, actually did reform their copyright laws a couple years ago. I think I can say this without being too political, but Congress in the U.S. is not really effective at passing laws, especially when there are big lobbying companies involved, which a lot of the tech companies are these days...

The E.U. passed a rule that specifically said that machine learning is, interestingly, opt out. So you can in the E.U. write a license that says "You can't use this stuff for machine learning." But you have to explicitly say "You can't use this stuff for machine learning."

**Nick Nisi:** Are we gonna have robots.txt inside of our Git repos now?

**Luis Villa:** I bet it's coming...

**Nick Nisi:** \[laughs\]

**Luis Villa:** In fact, actually there's a W3C working group on exactly that.

**Nick Nisi:** Really?

**Luis Villa:** I'll send a link to the working group...

**Christopher Hiller:** Wow.

**Luis Villa:** One of the fun things about this for me is learning -- like, because my day job is very much like not machine learning, I have not stayed super in touch with it. There's this project called Eleuther AI. I don't know if I'm pronouncing it right, but... That's like an entire -- it's not like a, it is an open source GPT model. And they have not just the model, but it is trained, by hook or by crook they got some GPU hours to train it, and they've built a whole dataset, which by the way, includes a lot of open source code. And they specifically included open source code before Copilot. They specifically included open source code because part of their vision is open source code completion.

So that's out there... This W3C working group on robots.txt but for code is out there... A lot of cool stuff that I've found out about from the \[unintelligible 00:54:52.26\] about this. So I'm more optimistic...

\[00:55:00.05\] Besides -- yeah, I mentioned there's like the legal thing, there's the sort of "Are you a jerk thing?" and there's also this policy layer of like "Do we really like what AI is doing to centralize power with companies that can scrape a lot of data and have the GPU cycles to do training on that data?" And I think another strong reason why we should be strongly in favor of fair use in our community is that the weaker we make fair use, the more AI becomes a game that can be played only if you have a strong legal team. The position that a lot of people are taking around this would shut down Eleuther AI.

Now, there's still this question of "How do you get the GPU cycles?", because those are not cheap. So maybe the answer is "It's gonna be centralized anyway." But as long as there's \[unintelligible 00:55:55.19\] of people doing OpenAI, we should be really worried about what clamping down on fair use for training might mean for those folks.

**Nick Nisi:** Yeah. We should probably wrap it up there, but this was fascinating... And it just kind of shows that there's a lot more nuance to this than just the immediate emotional reaction that comes out of seeing a potentially transformative use of AI like this... And there's a lot to think about, and - yeah, I tend to agree with you. I think overall it will be a very good thing, and it will be good for software engineers going forward. It's not going to replace us, I don't think, yet... But it will be just fascinating to see how this grows and changes, and how we grow and change to adapt to it at the same time.

**Luis Villa:** Oh, absolutely. We used to have T-shirts say "Shut up or I'll replace you with a very small shell script."

**Nick Nisi:** \[laughs\]

**Luis Villa:** Now it's gonna be "Shut up or I'll replace you with a very expensive GPU cycle." It can be potentially so empowering for programmers... Hopefully, not in the long-term future, not just VS Code users, not just GitHub users. Hopefully, there's a brave new future where access to that is democratized... We'll see. It's gonna be interesting. Definitely not a problem that's going away, that's for sure.

**Nick Nisi:** Yeah. Part of that democratization should be to release a Vim extension, so I don't have to use VS Code to try it out.

**Luis Villa:** \[laughs\] Yeah, I was gonna say Emacs, but that's another conversation for another chat.

**Nick Nisi:** We'll have this battle offline... \[laughs\] Luis, thank you so much for coming on and talking to us.

**Christopher Hiller:** Yes, thank you very much.

**Nick Nisi:** It's been very interesting. Amazing insights.

**Luis Villa:** Yeah, a pleasure. Happy to talk legal geekery with you guys anytime.
