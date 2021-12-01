**Nick Nisi:** Hello, and welcome to JS Party. I'm your host this week, Nick Nisi. Hoy-hoy. With me is Chris a.k.a. b0neskull. b0neskull, what's up?

**Christopher Hiller:** What's up, Nick? Yay!

**Nick Nisi:** Yeah, welcome to the show. Very excited about our topic today. And on that note, I wanna introduce our special guest, and that is Luis Villa. Luis, how is it going?

**Luis Villa:** It's going pretty well. I mean, I'm really excited -- you know, Chris is just clearly so excited to talk to a lawyer. I'm just always really glad when I see that enthusiasm.

**Nick Nisi:** Oh yeah, definitely.

**Christopher Hiller:** It's infectious, isn't it?

**Nick Nisi:** \[laughs\]

**Luis Villa:** Are we allowed to say "It's infectious" now? It seems like that's one of those words that 2020 has ruined for us.

**Nick Nisi:** I didn't even think of that until you brought it up. So on my side, I think so... \[laughs\] So Luis, tell us a little bit about yourself.

**Luis Villa:** So I'm a former programmer... I got a CS degree in the last millennium, and worked in open source for a while. I got involved in open source while I was in college... Actually, originally, hacking on the LEGO Mindstorms, the very first generation of LEGO Mindstorms... And also just as a Linux user. This idea that people were building an entire operating system together on the internet was like... But I was also a political science major, and so I was very interested in this overlap of politics and power and computing.

It started off as just like I was interested in politics and I was interested in computers, and I really thought those two weren't related... And then by the end of the '90s it was like "Oh yeah, actually these are super-related."

\[04:04\] So I worked at a startup called Ximian, which worked on the GNOME Linux desktop. Then, after that I was like "Actually, law school sounds like it would be fun." Pro tip, kids - law school, not fun.

Since then I've worked at a series of Mozilla as an attorney, where I worked on the Mozilla public license, revision version 2.0, I worked at a big law firm for a while, working among other things on the Google Oracle lawsuit for Google, where fair use came up quite a bit, which is something we'll talk about today. Then I worked at the Wikimedia Foundation, and now I'm the co-founder of a startup called Tidelift, where we are trying to make open source better for everyone by helping build a sort of economic and payment loop so that maintainers get paid to do all the sort of not fun parts of maintenance. They're not fun, but they're really important for businesses and enterprises, so we're trying to close that loop as a business. But yeah, I'm a copyright nerd at heart, so I think that's sort of why I'm here today.

**Nick Nisi:** That's awesome. This kind of ties into a meeting I had just before this, where I was talking to our interns, and really talking about how so much of the software that we use, and so many of the big companies that we see and work with and use their products are built on all of this open source software... And it's really hard out there for open source developers. I was kind of evangelizing that. So it's really exciting that you're working on making the lives of open source developers much easier... So thank you for that.

We're not here to talk about open source too much today specifically. We wanna talk about Copilot, and kind of get into that. b0neskull, do you wanna maybe explain what Copilot is and get us going with that?

**Christopher Hiller:** Yeah, so if you're not aware what it is - essentially, it is kind of like an AI-assisted autocomplete on steroids, or something like that... Your IDE may have autcomplete suggestions, like "This is the name of the function" and you hit Tab to complete it. But it's a lot more than that. It does AI things to try to give you more code. It tries to kind of -- if you write a comment that says "This function does that", it can try to write the function for you. It's good at automatically completing boilerplate.

Right now, GitHub Copilot is in a -- is it called a closed beta? I'm not sure. You have to sign up and maybe they'll let you in... But yeah, so it's not generally available yet.

**Nick Nisi:** Yeah. To that note, when you sign up, which I did on the first day, through that process they ask you -- because right now it's only available as a VS Code extension. And they ask you about your Visual Studio Code usage... And I answered as honest as I could, which is I never opened that app... So I don't have an invite. Luis, are you in that?

**Luis Villa:** So I do have an invite... I think it's fair to disclaim here - I mentioned that my first job out of college was at Ximian. Those of you who are real old school open source will know that Ximian was founded by Nat Friedman, who's the CEO of GitHub... So I may have gotten my invite a back way... I didn't get one at first because my IDE these days is Word, mostly... Which is a Microsoft product, but it's not VS Code. So I admit, I got an invite purely because I wanted to troll people on Twitter by trying to see if I could get VS Code to write a license. But I admit, time has not been on my side, so I haven't done that project yet. So yeah, the back door was there for me.

Nat and I haven't talked about this much, but I felt like that was a sort of appropriate thing to lean on him for... I mean, I think it's fascinating. There's both the lawyer side of me, but I do wanna say, it simply is an example of -- some of the examples of code coming out of it are simultaneously amazing, and also very much occasionally the "Boy, the robots are not coming for us any time soon."

\[08:17\] I saw somebody used it to auto-generate a function about Calendars, and it was like "Oh yeah, months are 30 days long, and years are 365 days long", and apparently nobody's trained it on -- you know, that blog post "Falsehoods programmers believe about time" or believe about dates, or whatever... Nobody's trained it on that yet. Or maybe it's just not heavily weighted enough. But it simply is a technical matter.

**Christopher Hiller:** Right. It'll generate code, but that code is not necessarily correct.

**Luis Villa:** You've gotta double-check. Though I have seen some amazing examples of it really filling in some -- and it was one of those things... I mean, one of the things that I'm with my business hat on - I think there's just really fascinating questions about where it goes from here... Because I assume - again, I haven't talked to anybody at GitHub about this, but this is the kind of thing that once you get it in place, the ways you can leverage it are really interesting... Like, how does it know about third-party APIs? Because it could. Right now it only knows about -- from what I've seen on the internet, of people playing with it, it seems to know about third-party APIs just by reading other people's source code. But you could see -- like, I bet GitHub's partnership team is thinking "How can we integrate this intelligently with third-party APIs?"

Or security, for example... This is showing my age programmer-wise. My experience of security issues - I'm thinking purely about C-based string parsing kind of stuff, instead of... You know, I guess with Java it's cross-site stuff, and things like that. But from the examples I've seen online, it seems like the AI is still -- like, if there are a lot of bad code examples in the codebase, which after a while there are, it's gonna replicate some of those security fails. And what are they doing to train it to avoid some of those security fails - I don't know, but I think that's going to be really interesting. Again, with my nerd hat on, as opposed to my lawyer hat on. We can get to the lawyer bits in a second, but I just think that's really -- it's cool, right?

**Christopher Hiller:** Yeah. Right now it's pretty smart, but it's not that smart. And it just outputs things; it doesn't -- maybe in the future it'd be cool if something like that could just look at your code and be like "You know what - this is wrong." And it would look at what you're trying to do and it would compare it against known, good implementations of that thing you're trying to do, and it will alert you to problems. That would be cool, too. So there's a lot of places it could go in the future, and that's going to be interesting.

So we've kind of explained what it does, and then a little bit of what it doesn't really do. It's still operating -- its training set is just source code, it uses GPT-3, I believe...?

**Luis Villa:** Yeah, OpenAI, or whatever is behind the scenes for them.

**Christopher Hiller:** Right. So it's just dealing with a lot of text. So when Copilot came out and people started playing with it, and then on Twitter you see that you can give it certain prompts and it will actually generate code that may have been -- I mean, it's kind of obvious that it's getting the code that it's writing from GitHub. So that's anything on GitHub. So a lot of people were kind of upset about this... Luis, why do you think people were upset about it?

**Luis Villa:** \[11:58\] Boy, that's actually a deceptively-complicated question, because I think there's so many layers of -- you know, people are upset for very business reasons... Like, what if this code that's created is accidentally copyright-infringing for my company? I've heard -- maybe they're apocryphal by now, but I've definitely heard at least some CTOs, VPs saying "We can't use this in our company's codebase until there's a little more legal clarity." So that's one reason people are a little angry. I think there's some sense that maybe GitHub was being a little sloppy about that... So that's one source of concern.

Another source of concern is simply just the emotional -- you know, authors feel ownership over their code. That's very deeply-felt for a lot of people; certainly not for everybody, but for a lot of people, for a lot of authors, and that's not unique to code. It happens for authors of books and music as well. So we've seen some of the same kind of emotional reaction to some people who get sampled; some musicians who get sampled, they're like "Oh, this is so awesome. My music is being reused." Nine Inch Nails - their stuff got reused by... I've never actually said this out loud, so I may be mispronouncing - Lil Nas X. His stuff sampled from a Nine Inch Nails track, and Nine Inch Nails was like "Cool. I finally have a number one hit." Whereas a lot of other musicians that get sampled are taking it to court, literally. So there's that emotional component.

And of course, there's this added component of some people placed their code under licenses that are explicitly reciprocal. The idea is that if you use part of my code, you've also gotta share with the world your code. And the common name for those is copyleft, though I think "reciprocal" in this case really captures something important, that "copyleft" doesn't necessarily convey. The idea is there's supposed to be a sharing and sharing and sharing-alike, and so a lot of people who deliberately chose to put their code under that license were pretty frustrated about that. So all those things sort of layered on top of each other to produce some pretty negative responses.

**Nick Nisi:** Yeah. Stepping back before we dig more into the legal side of it, I just wanted to disclaim that I haven't used it yet. I have used a similar tool, I think, called Tabnine, which was kind of doing a similar AI completion thing... But I don't think it was completing full functions, it was more like "Oh, I see you're naming a variable like this. This is a very common variable name", and it would autocomplete it. I ended up turning it off, because it was more noisy than helpful, often... But I'm sure it's growing and getting better, and all of that.

But from an outsider's perspective looking at it, there are definitely good and bad that I've seen from it. When I first saw it, it was like "Whoa, this is just amazing." And not necessarily thinking it's gonna take my job tomorrow or anything like that, but it was like "Wow, this could really help -- if I'm staring at a blank file, how can I get going with something?" It seemed like a very good way to just get something on the canvas, so to speak, to get going... And whether or not it's correct, you can kind of tweak it from there and it'll learn and get better over time.

It was also impressive that it didn't go the route of some other AI stuff that's come out over the years. Microsoft Tay is coming to mind... It's good that it's not just immediately going that route, with -- I don't know, very racist code, or something like that. \[laughs\] But it's so far been pretty positive like that.

At the same time, I've seen really (I'll just say) dumb examples of it, where somebody autocompleted an About Me page, and it autocompleted the About Me including the Twitter handles of a GitHub employee, and stuff like that. So it's showing that it's literally just copy-paste at that point. But it is kind of in an intelligent way, so it's straddling this line of really simple and really complicated, and really impressive, that I think is an interesting place to be... But of course, this is the early days, so it's gonna continue learning and going from there.

**Luis Villa:** \[16:09\] You know, Nick, something that I was realizing as I was preparing to talk to you guys today... Actually, a lot of the -- I mean, even before... Because Tabnine - there were a few other things like Tabnine... There's also just been IDE autocomplete for a long time, of various sorts. It knows what kind of codebase you're working in, and it'll -- it's one thing when it autocompletes... I mean, we've had our brackets get matched automatically for ages in Emacs, right?

**Nick Nisi:** Yeah.

**Luis Villa:** But there's also been more sophisticated stuff that will read documentation, and try to guess structures of objects, and things like that... And that actually implicates some of the same copyright concerns. Because at the end of the day -- I mean, we literally did have a fight that took the better part of a decade and cost hundreds of millions of dollars of attorney's fees on whether or not API function names essentially and function declarations - are those copyrightable? And one of the things that I think is an interesting "Careful what you wish for" kind of thing here is - if a lot of this code is copyrightable and fair use doesn't apply, it's not entirely clear that even those simple, like, "I'm gonna autocomplete the function name from the standard library...", like, some of those same arguments that Oracle used apply there, right?

And it's actually been sort of interesting, and honestly a little frustrating for me - some of the same people who came out strongly in favor of fair use when it was Google saying "Yeah, reimplementation should be fair use." Basically, when it was Oracle's stuff getting copied, everybody was like "Hell yeah! Copying is awesome!" And now when it's GPL stuff -- like, I get the emotional valence there, but from a lawyer perspective, GPL Is a copyright license, and Oracle's grungy, terrible, every-lawyer-hates-it terms of service or standard EULA around their code - copyright perspective, those are both copyright licenses, right? Courts aren't in the business of saying "Oh yes, but we really like Richard Stallman and we really don't like Larry Ellison, so therefore one of these is fair use and the other isn't."

There's been some (to me) sort of frustrating inconsistency about people who until a month ago were big fair use proponents... We can get into the nuances of that, because it is really complicated... The question of fair use in machine learning is in fact a really complicated one, and anyone who tells you that it's black and white -- like, courts don't know what machine learning is... So the idea that you can say "Oh yeah, this is definitely fair use" or "Definitely not fair use" - there's so much grey area in there. We could go on about that for hours, but I'll pause and let you guys get in another question edgewise.

**Nick Nisi:** Let's actually break right there and we'll come back after the break and talk about that... Yeah, it's potentially terrifying just thinking about how the technical aptitude of a court could potentially decide the faith of software... That's terrifying.

**Break:** \[19:26\]

**Christopher Hiller:** So Luis, you mentioned that fair use can be a grey area around this sort of thing... Can you go into a bit more about -- I know this is a thing that continually comes up in trials, "Is this fair use or not?" And so where do you think something like Copilot lands, and why?

**Luis Villa:** So let me first just start, for those who aren't copyright nerds in the audience - and why you'd be listening to us if you're not I'm not sure, but... We'll start with a little bit -- so fair use is this very American concept; it's not present in a lot of other legal systems around the world... That copyright should be bounded. That yeah, of course, we give authors a lot of rights; it's very explicitly in the constitution that we give them rights in order to promote the progress of the country. That's literally the phrase.

There used to be a copyright blog called "Promote the progress." The idea was that this was something that you gave to authors, and in exchange they made everybody better off. So in part because of that, sort of founding intuition, first the U.S. court system and then eventually it was transferred from -- the courts sort of (to put it a little bit in programming terms) prototyped fair use; they sort of made it up on the fly when they ran into some problems... And then the Congress sort of took those ideas that had been floating around the courts for several decades at that point - maybe even almost a hundred years at that point - and Congress sort of refactored it and said "We're gonna steal a phrase from one court here, and a phrase from another court here, we're gonna put it together into one refactoring, make it part of the law, and then judges will sort of go on elaborating and clarifying that."

So this was done in the transition of fair -- if I'm remembering my timeline correctly, the transition of fair use into actual statutory law, written down law, as opposed to judges sort of making things up on the fly, happened in the '50s. So very much the examples - if you go back to what was Congress talking about, they were talking about things like teachers. So if you want to use a few minutes of a movie in a classroom to teach some point, fair use protects that. Fair use says "The copyright holder can't just unilaterally block that." Or another canonical example is literary criticism. If you wanna quote a paragraph of a book in order to prove a point about "This author is an asshole", then you can do that; fair use allows you to do that.

\[24:01\] Chris, to your point about it seems like it comes up in court a lot - the whole thing about fair use is that it is sort of "I know it when I see it." There are some guidelines, there's a four-factor test that everybody applies... But the fourth factor is sort of like "Yeah, and whatever else we wanna throw in at the time." That's because the whole point of it is like "You know what - people may be doing something new and different and innovative with this stuff, and we don't want authors to be able to block that if we think it's a good idea." That's sort of the core of it. So "We think literary criticism is a good idea." And important there to note that it's criticism.

One of the reasons that we have this fair use established is because if copyright holders could block that kind of use, then you would only have positive reviews of books. The authors would be able to say "Yeah, I didn't really like that review. Take it down." They would be able to use copyright to block that.

So baked in from the very beginning of fair use, one of the things is you really don't want authors to be able to just say "Eh, I've got a bad feeling about that done." You want copyright to have some sort of safety valves for "This is really important." Similarly, news reporting fair use is used all the time, to be able to say "Look, here's a 10-second snippet of this politician's ad", for example. "We think that this politician's ad is misleading. Let me use this 10-second snippet to set the stage for this discussion of why this politician is misleading you."

The creators of that advertisement have copyright in that 10-second snippet. They could -- if copyright didn't have the escape hatch of fair use, they could use copyright to take down that news segment, because they obviously don't like that the news reporter is saying "The politician is lying to you. Here's why."

So copyright originally existed for all that kind of stuff. But of course, it was written in the '50s. It literally has no concept of software, much less machine learning. So there's all this settled stuff -- like, academics don't sue over fair use very much, because that stuff was all settled a hundred years ago. Whereas software - it comes up quite a bit, because in fact we have no idea. Congress has never really weighed in on this; courts only weigh in on it once in a blue moon.

A lot of the arguing in Google Oracle over "Is this reimplementation of the API a fair use?" I mean, one of the key cases in that was Lotus v. Borland, which was about whether the dropdown menus on an x86 PC in black and green on your CRT screen - a court found that those menus were a way of operating the spreadsheet in the 1980s... So here we were, 30 years later, and one of the things -- Nick, you mentioned about judges, how much tech do they know... We were trying to tell them, "Well, look, the API is sort of like a menu in a spreadsheet in the 1980s... And how is any reasonable person supposed to find a reason --" So yeah, tons of grey area, and that's where fair use them comes in.

This question has come up a lot recently in these questions of -- we joke that you could write an entire casebook... A casebook is like a legal equivalent of a sort of intro to programming kind of thing, where you take snippets around like fair use of these cases, and you say "Well, here's what a judge found about this. You budding lawyer should learn about the law by reading what the judge says about this." And we often joke that you could write an entire casebook about copyright just through the lawsuits that Google has been involved in... Because early 2000's, they were just like "You know what - we're gonna scrape the whole web. It's gonna be great. We're gonna organize all the world's knowledge." And average people were like "Yay! Organizing the world's knowledge."

**Christopher Hiller:** \[28:20\] Scan all the books...

**Luis Villa:** Scan all the books, scan all the porn... There's a whole line of cases that are about Google Image Search and this one porn company who just -- the guy really didn't like Google, or search engines in general... Perfect 10. There's a whole line of cases about Perfect 10. Yeah, Google Book Search - another huge one, where they literally just said "We're gonna scan all the books, and if you don't like it..." And the authors didn't like it. There was a big, extensive lawsuit from a bunch of authors, and the U.S. courts eventually found "No, you know what - we understand you, the authors, aren't happy about this, but this is so transformative." Transformative use is a concept that is not found anywhere in the statute, but a lot of courts have found that a useful concept, starting in sort of the mid-90s.

U.S. courts found this idea of like "Oh, well if it's really transforming how it was used..." If it was some way that the original authors wouldn't have conceived of, didn't have a business in, and it was something really radically new and different... And you know, the book publishers were not in the business of creating something like Google Book Search. And that's where the analogy starts getting really obvious. We as code authors - were we in the business of creating something like Copilot? The trend so far in the U.S. has been that machine learning typically is so transformative... Definitely not always, but almost always, in a handful of cases, the courts have considered machine learning -- courts have tended to find it transformative fair use.

**Christopher Hiller:** And that typically involves the training sets then?

**Luis Villa:** Yeah, yeah. The training sets are really where there's a clear copyright -- copyright is really a set of rights, which includes things like the right to copy it, the right to redistribute it, the right to make reproductions... So the first step of training is like "Yeah, we're gonna scan all the training set", and you are making a reproduction there; you're making a reproduction for commercial purposes, which doesn't always matter, but sometimes matters. So yeah, you've just copied the whole thing. I mean, Google Book Search is a copy in a very literal sense of all the world's books... And at least the training set, that initial training of -- presumably, OpenAI was not pinging GitHub's API for code snippets at every point during the training. Presumably, they vacuumed it all down and then did their training on it.

So a copy was made, so a copyright infringement has occurred, unless fair use defends that. And courts have generally found -- and there's some good policy reasons for this... One of my favorite papers in this area is a paper - I'll share a link with you guys so that you can put it on the \[show notes\]. It's a paper about how fair use is actually really important to building equitable training sets, because we know that a lot of training sets -- this is not so relevant for code, but if you're doing a training set on faces and you want a racially and gender-diverse set of faces in order to do your training on, you're gonna have to use fair use, because you literally can't buy a racially-diverse training set. It just doesn't exist, because Getty and all these other photo services actually have all kinds of biases. So you're gonna have to deliberately construct and you're gonna have to rely on fair use for that. If you rely only on things you can buy a license to, you're just introducing all sorts of biases into your training dataset.

\[32:06\] Of course, as we know, any of you who followed artificial intelligence policy discussions, there's all kinds of other ways you can introduce bias... But fair use is one of the few good tools we have to remedy that in the AI space more generally. Again, that hasn't come up, Nick, as you mentioned, Microsoft Tay, or those kinds of -- I haven't seen any egregious examples.

I'm actually really curious... My first job out of college with Ximian was as a QA guy, and I'm deadly curious what kind of QA they did around race and gender and things like that. Because in obvious use cases, something like "Copilot, build me a gender selector dropdown", and that's like a fraud... That's one of those things that it turns out there's all kinds of fraud. And I have no idea -- I haven't seen any particularly bad examples of that. Maybe I just haven't looked hard enough, but...

**Nick Nisi:** Yeah, and obviously, I haven't used it yet, so everything I've gleaned about it has been just from mostly tweets and a few articles here and there... But one that comes to mind in particular is Cassidy Williams from Netlify - she does a livestream coding thing every week, and at least one week she did a showing off Copilot on the stream thing, and was specifically trying to make it be biased about something. So she was writing comments in Spanish... I could be misremembering, but maybe a gender dropdown was an example of that. And overall, just gleaning from her tweets about it, it was overall pretty positive. It wasn't going to any dark places with that. So that's probably where a lot of secret sauce comes in, to really take training data and make it into something that is not only usable, but is also ethically in bounds.

**Luis Villa:** I can't wait... One of these days somebody is gonna write a guide to regression-testing your AI, that's gonna have whole chapters on "So, okay, you've regression-tested your AI and it basically does what you want... Now let's test it and see how racist it is." Because at some level you do -- because we can't entirely peer inside the black box, there's gonna be... If GitHub didn't screw that up, they must have deliberately had some people poking at it with exactly those kinds of examples that Cassidy was trying... Which does actually get us to one of the interesting -- I think one of the things that might come out a little bit in our conversation is a little bit of frustration at times around... There are really interesting legal and policy questions around this. Most of the discussion online was not really about the interesting -- you know, so much of it was emotional, frustrated... Which I get. I mean, I'm a big proponent of copyleft...

Somebody challenged my copyleft bonafide on Twitter, and I was like "I literally don't think I can fit all the copyleft licenses that I've advised on into one tweet..." And there aren't that many of them. So I get it, I do believe in reciprocity as an important part of how we build software... But at the same time, we've also always -- like, a lot of old-school copyleft folks have also been old school fair use folks. So this is a little bit of -- I think there was some tension there and some frustration on both sides of that discussion which came through. Welcome to arguing on the internet.

**Break:** \[35:46\]

**Nick Nisi:** Taking maybe a step back from this and thinking about this from a software perspective, and specifically a software license perspective - maybe I'm misstating the overall argument around that, but is it considered fair use because it's just training off of potentially certainly licensed code, and not necessarily running it, and if it were doing something to run it, would that change the way that it might be perceived?

**Luis Villa:** So you do two steps if you're trying to figure out "Is there some sanctionable copying here?" First is "Was there copying at all?" That kind of thing doesn't come up -- you don't see that come into court very often, or at least not in particularly dramatic, high-profile ways... Because usually, it's pretty easy to just compare this, compare that; pretty much the same, right? That's sort of step one of your analysis.

And here, it's important to distinguish that there's two possible stages at which copyright infringement could have occurred. There's "Did GitHub infringe people's copyright?" and "Are people who are using Copilot infringing the copyright?" And the answers to those may be different. I tend to think that the answer is in both cases there's no infringement. That's my bottom line. But it's important to distinguish between those two... Because you can see a world -- there's definitely arguments to be made that GitHub is infringing, but the user of Copilot is not. So let me get into a little bit why that is.

So when you're looking at fair use - I mention the sort of transformative concept, but before we get to that, there's these four rules, and I can't believe... Maybe I've had a longer morning than I thought. I should normally be able to rattle them off... But we'll go through them one by one and I will really try to remember the fourth one by the time I get to it. So one is the nature of the taking. So are you doing this for some kind of societally-advancing purpose or not? This is where things like teachers get much more of a flexibility than a rival book publisher.

Another is how much did you copy? It is one thing -- so this is one of the key ways in which how GitHub has copied and how a Copilot user might copy is very different. Because Copilot undoubtedly at some point in the process copied the whole thing. So a court looks differently at "Did you copy the whole thing?" versus "Did you copy one function fragment out of a giant...?"

This came up in the Oracle/Google trial, because Google - well, really Apache, but I will say Google for simplicity - really only copied one type of thing. I used to have these numbers right on top of my brain; it's a really good sign that I don't remember them exactly anymore... But it was basically like 10,000 lines of API function names... But they didn't copy the other several million lines of the implementation.

**Nick Nisi:** \[40:09\] They just reimplemented them.

**Luis Villa:** They carefully reimplemented them. So a court will look at that and say "Oh, it looks like actually not much of this was copied." But this is where it gets a little complicated... And again, why does this go to courts to decide these things - there's a famous case about the biography of Gerald Ford, who's our nation's most boring president, essentially... Except that he pardoned Richard Nixon.

So he wrote a biography, and a magazine got their hands on an advanced copy of the biography, and they basically reprinted the part about him pardoning Nixon. The court was like "Let's be honest here, nobody's buying that book for any reason other than to read the part about pardoning Nixon. Because otherwise, who cares? It's Gerald Ford."

So the court said "Well, even though only a very small part was taken, as a percentage of the book, it's still not a fair use, because that was really the core of the value of the book." And Oracle tried to make a similar argument, which was "Okay, yeah, you didn't copy 95% of Java, but you did copy the most valuable part, which is the API."

This is where a Copilot user is gonna get -- and I think they said in their white paper, which I recommend everybody read, and again, I'll send you guys a link because it's pretty short and pretty interesting... They say in their internal testing something like 0.1% of suggestions actually matched back to -- like, when they did a sampled thing, only 0.1% of suggestions looked like they were copied from another source. The other 99.9% were original... Original in the sense of being created by the machine --

**Nick Nisi:** By the AI?

**Luis Villa:** Yeah, by the AI. It's still sort of weird to talk about things being created by an AI, right?

**Nick Nisi:** Yeah. \[laughs\]

**Luis Villa:** So if you're trying to reimplement some competitor's API, I probably wouldn't use Copilot, because then the output is gonna look like you took the heart of this other person's thing. It's probably gonna start auto-suggesting code that looks a lot like their implementation if it's an open source implementation. So if there's like a GPL implementation of something and you wanna write an MIT implementation of it, I suspect Copilot -- I haven't seen anybody try this yet, but I suspect Copilot is gonna start doing things that look a lot like the original implementation... And then you're gonna have a problem. But because one of the tests for fair use is "How much of it did you take?", if you end up with like a 5-line fragment out of somebody's GPL code that's like 100,000 lines -- or, I mean, what's the Linux Kernel these days? 6-7 million lines of code? A court is just gonna laugh that out of court. If somebody comes after you on a GPL claim for you as a user of Copilot - again, that's different from GitHub, because GitHub did presumably copy the entirety of the Linux kernel.

So we've got the "What was the nature of the taking? How much did you take?" Another thing that courts are gonna look at is the commercial impact of the copying... Again, GitHub, since they're copying the whole thing and they're a big corporate competitor, possibly some big...

For you as a user of Copilot - that company was not trying to sell you five lines of code... They weren't trying to license five lines of code to you, and you weren't looking to buy five lines of code. You were just gonna write it yourself anyway.

\[43:58\] So a court, again, is gonna look somewhat skeptically at -- and this is something we know from the Google Book Search case, that a court is gonna say "Well, you all weren't selling snippet search of your book." In fact, if anything, this is a key difference from Google Book Search to Copilot... The court found in that case that actually this is gonna help you sell more books, because people are gonna find books, there's a limitation on how much gets shown, and there's a Buy button right there... There's no equivalent to that in -- maybe GitHub will do something like "By the way, it looks like you copied this from the Linux Kernel. Click here to do GitHub Sponsors." That might be a little tacky, but you could see that as a thing they could do in the future, perhaps.

So that's sort of the basic analysis of how much got taken, was it really important stuff that got taken, what was the commercial impact, is it something new and bold and different, that wasn't gonna happen anyway? And I think looking at all those, I find a really hard time seeing that a court is gonna say that this was not a fair use... Because it's so different, the impact is so small... The emotional impact is real, and I don't wanna downplay that. As authors -- but again, the whole point of fair use is sometimes authors are pissed, and we ignore that as a policy matter.

By the way, I should say again, this is all in the U.S. E.U. has different sets of rules about this, and I really think one of the interesting things that is under-discussed that I would love to see more of is commentary from the European Union lawyers, Japanese lawyers... Because I don't think we have as good a sense yet of what that would look like in other places, other legal regimes.

**Christopher Hiller:** I'm getting the idea here that essentially you put your code on GitHub... One, there is a terms of service that says GitHub can use your code, right?

**Luis Villa:** Yeah. Though you don't always put your code on GitHub.

**Christopher Hiller:** Right, but that's presumably what they used as a training set, right?

**Luis Villa:** I think I even saw some suggestion that they also looked at other repositories as well, because OpenAI scans the entire web... So I did see some suggestion. I don't know if it's been confirmed, but I saw some suggestion they would have looked at other --

**Nick Nisi:** There are other repositories now?

**Luis Villa:** But at this point, the fraction of the world's code that is on GitHub is large, so it was probably most of GitHub.

**Christopher Hiller:** Speaking of, it seems like the license is irrelevant, right?

**Luis Villa:** I don't know that it's -- I mean, I think it's important to say, I've been wearing my lawyer hat this whole call so far... And there's a whole other ethical, like "Is it legal?" I mean, like I said, I think the answer is probably pretty clearly yes. It's possible to be legal and still be a f\*\*\*\*\*\*. Excuse me on the f-word. Are we a family-friendly podcast here, or...?

**Christopher Hiller:** EEEEEEH!

**Luis Villa:** EEEEEH. Alright, great. Good.

**Christopher Hiller:** Jerod's not around.

**Jerod Santo:** Or... Maybe I am.

**Luis Villa:** \[laughs\] Yeah, you can still be a jerk. And I certainly think -- GitHub talked in that white paper that I mentioned earlier that they are implementing... I don't know where this is out; I don't know if it's rolled out or anything, but they mention that they're gonna try to implement some kind of "By the way, it looks like this probably is not original. It probably came from this." Putting aside whether or not that's legally necessary, you know, in terms of not being a jerk - like, hurray. GitHub should not be jerks. They're an 800-pound gorilla, and I think maybe in their roll-out of this maybe one of the things here is they didn't reckon with the emotional -- you know, the haft that they carry.

They've been really good... I'm not a Microsoft apologist. I literally got into open source in part because I was convinced that Microsoft was evil. I'm still personally irritated at the Bill Gates image rehabilitation campaign... The guy has all this money to give to charity because he operated an abusive monopoly. That's why he has so much money. So it's nice that he gives it away, but let's not forget that first part.

\[48:05\] So I'm not a Microsoft apologist, but I think GitHub and Microsoft in the past few years have mostly done really well by open source... So I think maybe they got a little laurel resting, a little too comfortable here, and didn't fully think through how much this would really emotionally piss people off, even if the lawyers gave a full thumbs up.

**Christopher Hiller:** Right.

**Nick Nisi:** Yeah. I think that that clout that they've built up in open source over the last couple of years probably should help give them some leeway in figuring this out... But definitely, working to figure that out, figure out where the emotions are coming from, and things like that... But do you think that maybe some of this murkiness is just caused by its dealing with code itself? As with the books example, it's code to scan books and to open books up and create this product around that. This is using code to look at code, to suggest code... It's all just one thing.

**Luis Villa:** It's layers of indirection and layers of -- it's layers on layers on layers, and it's murky because we don't really even... I mean, this is one of these big sort of meta trends - copyleft has been somewhat in decline... Certainly in the JavaScript community there's essentially no copyleft. So there's this sense of like "Yeah, look --" I sometimes call it almost like car exhaust. Putting code on GitHub is this thing that sort of happens accidentally by way of doing the thing that you actually want to do. A lot of people aren't entirely sure how much is copyright really a motivator, especially in a SaaSy world, how much is copyright even -- it doesn't have the same kind of motivational role that the copyright, at least in the U.S, really assumes. It's like "Why even is this stuff copyrighter? Because we're just gonna throw it on GitHub, under a license that by the way we never enforce anyway." That's actually a different discussion for maybe a different day, about -- MIT and BSD require people to acknowledge, they require "Yeah, you've gotta ship this license text."

So if Copilot violates the GPL, Copilot also violates MIT and BSD, because those attribution clause is a part of license. And we often pretend in the JavaScript world -- I shouldn't say "we" there, but certainly my observation is that we often pretend like MIT and BSD basically are just public domain. Nobody complies with these notice requirements pretty much, and everybody has just sort of agreed that "You know what - that's fine. That's not what I'm here for anyway." And the law hasn't really -- there's both layers of technical indirection and layers of just like "How much do we actually care about copyright in this space right now anyway?"

**Christopher Hiller:** I imagine there's some people who are looking at this and they're all upset, and they're thinking "Gee, there has to be some sort of way for me to create code and put it out there, but GitHub and Microsoft can't take it and make something like this with it." And then I'm thinking "Well, hm... That sounds a whole lot like the ethical open source movement that wants to place restrictions on things." So it's kind of like talking out both sides of your mouth, because you know...

**Luis Villa:** Yeah, absolutely. There's absolutely some sort of like "Oh, you can use it however you want, but not like that."

**Christopher Hiller:** Right.

**Luis Villa:** \[51:43\] That makes me cringe, because that is not the -- Matthew Garrett, who's a former FSF board member, has written really eloquently on this in a long blog post. His vision of software freedom is very much about tearing down the copyright system. In his view, he thinks that -- like, he got into free software in part because the whole idea was more people should have access to more source code, and we should have fewer restrictions on how it's used. And GPL was a tool to get to that end.

But in this blog post he talks about how we should be cheering on something that helps break down some of those barriers. Again, as a long-time card carrying FSF member until the recent leadership stuff, I agree. It's actually really interesting - a lot of these copyleft licenses have clauses in them that very specifically say "This is limited by fair use. If there's a fair use --" And that's sort of redundant, in some sense. You don't have to write that into the license, because it's already part of the law. So it's belts and suspenders. But it was also -- we put those in there, and I say "we", because literally, I helped put some of those into some of these licenses. We put those in there because it was a statement that fair use is important to us as like an ethical concern, not just a legal concern.

So to see some people being like "Oh yeah, I love fair use when I get to fair use things, but when you're fair-using my stuff..." For those of you on the podcast who can't see my facial expressions, there's a lot of handwaving and grimacing right now.

**Christopher Hiller:** I'd love if you could share that blog post URL.

**Luis Villa:** Yeah, I'll do that.

**Christopher Hiller:** So we can provide it to our listeners.

**Luis Villa:** Yeah, will do. There's been a ton of fun writing about this. I can definitely send a few links. A former member of the European Parliament from the Pirate Party wrote a really good thing about it from a EU perspective... Because the EU interestingly actually did reform their copyright laws a couple of years ago. I think I can say this without being too political, but Congress in U.S. - not really effective at passing laws, especially when there are big lobbying companies involved, which a lot of the tech companies are these days... The E.U. passed a rule that specifically said that machine learning is interestingly opt out. So you can in the E.U. write a license that says "You can't use this stuff for machine learning." But you have to explicitly say you can't use this stuff for machine learning.

**Nick Nisi:** Are we gonna have robots.txt inside of our Git repos now?

**Luis Villa:** I bet it's coming.

**Nick Nisi:** \[laughs\]

**Luis Villa:** In fact, actually there's a W3C working group on exactly that. I forget... I'll send a link to the working group...

**Christopher Hiller:** Wow.

**Luis Villa:** Actually, one of the fun things about this for me is learning -- like, because my dayjob is very much not machine learning, I have not stayed super in touch with it. There's this project called Eleuther AI (I don't know if I'm pronouncing it right) that is an entire open source GPT model... And they have not just the model, but it is trained; by hook or by crook they got some GPU hours to train it... And they've built a whole dataset, which by the way, includes a lot of open source code... And they specifically included open source code - before Copilot - because part of their vision is open source code completion.

\[55:16\] So that's out there, this W3C working group on robots.txt but for code is out there... A lot of cool stuff that I found out about from the sort of mini furor about this. So I'm more optimistic.

Besides - you know, I mentioned there's the legal thing, there's the sort of "Are you a jerk?" thing, and there's also this policy layer of "Do we really like what AI is doing to centralize power with companies that can scrape a lot of data, and have the GPU cycles to do training on that data?" And I think another strong reason why we should be strongly in favor of fair use in our community is that the weaker we make fair use, the more AI becomes a game that can be played only if you have a strong legal team. The position that a lot of people are taking around this would shut down Eleuther AI.

Now, there's still this question of how do you get the GPU cycles, because those are not cheap... So maybe the answer is it's going to be centralized anyway... But as long as there's sort of green shoots of people doing Open AI, we should be really worried about what clamping down on fair use for training might mean for those folks.

**Nick Nisi:** Yeah. We should probably wrap it up there, but this was fascinating... And it shows that there is a lot more nuance to this than just the immediate emotional reaction that comes out of seeing a potentially transformative use of AI like this. There's a lot to think about, and I tend to agree with you, I think overall it'll be a very good thing, and it will be good for software engineers going forward. It's not going to replace us, I don't think, yet... But it will be just fascinating to see how this grows and changes, and how we grow and change to adapt to it at the same time.

**Luis Villa:** Oh, absolutely. We used to have T-shirts that say "Shut up or I'll replace you with a very small shell script." Now it's gonna be "Shut up or I'll replace you with a very expensive GPU cycle."

**Nick Nisi:** \[laughs\]

**Luis Villa:** It can be potentially so empowering for programmers, hopefully in the long-term future not just VS Code users, not just GitHub users. Hopefully, there's a brave new future where access to that is democratized... We'll see. It's gonna be interesting. Definitely not a problem that's going away, for sure.

**Nick Nisi:** Yeah. Part of that democratization should be to release a Vim extension so I don't have to use VS Code to try it out.

**Luis Villa:** \[laughs\] Yeah, I was gonna say Emacs, but that's another conversation, for another chat.

**Nick Nisi:** We'll have this battle offline. \[laughs\] Luis, thank you so much for coming on and talking to us, and giving us these amazing insights.

**Christopher Hiller:** Yes, thank you very much.

**Luis Villa:** Yeah, my pleasure. Happy to talk legal geekery with you guys anytime.
