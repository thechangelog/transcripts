**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. We are back from a long two-week vacation. Hopefully everybody got some rest and relaxation and maybe some detox time. On today's show the panel consists of myself, Erik St. Martin, Carlisia Pinto is also on the call, say h--

**Carlisia Pinto:** Hi, everybody. \[laughter\]

**Erik St. Martin:** Oh, you're ruining it! I thought I was \[unintelligible 00:01:01.09\]

**Brian Ketelsen:** You ruined it, Carlisia! Game over!

**Mark Bates:** You're also like a well-oiled machine, let me just throw that one out there. Clearly, this has been practiced several times.

**Erik St. Martin:** I was holding back the laughter until Carlisia -- alright, so we also have Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** There was a slight delay there...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And today's special guest, live from Dunkin' Donuts, apparently, is Mark Bates.

**Mark Bates:** Hello.

**Brian Ketelsen:** Are you taking orders, Mark?

**Mark Bates:** It's a very caffeinated Mark Bates sitting here in the corner of a Dunkin' Donuts. \[laughter\] Coming to you live...

**Brian Ketelsen:** Thank you for sprinting to Dunkin' Donuts to get power, since the power went out in your block; we appreciate that very much.

**Mark Bates:** Oh, I'm glad I could eventually find a place.

**Brian Ketelsen:** But the show must go on!

**Mark Bates:** That's what they say.

**Brian Ketelsen:** We have a saying in the show business, and we are in show business; even though Adam doesn't follow us on Twitter, we are in show business, and that saying is that the show must go on.

**Mark Bates:** I've got some great stories about that, but it's probably not safe for this podcast.

**Brian Ketelsen:** This is a family-friendly podcast. Thanks for filtering yourself, we appreciate it.

**Mark Bates:** Then we're gonna be in trouble, because almost all of my stories are highly inappropriate. \[laughs\]

**Brian Ketelsen:** Oh, we're in trouble...

**Erik St. Martin:** You have to shift them from "Not safe for work" to "Somewhat safe for work."

**Mark Bates:** Okay, I'll just substitute anything bad with the word Belgium, and we should be fine. \[laughter\]

**Brian Ketelsen:** And then Belgium! Yeah, this is gonna be a good show, folks.

**Carlisia Pinto:** Let's get to it, because I am dying to know what it is that it is the big secret!

**Brian Ketelsen:** Oooh, the big secret...

**Mark Bates:** Oh, the big secret. Well, I can't talk about the big secret.

**Carlisia Pinto:** Oh, come on! I thought you came on the podcast to talk about the big secret.

**Mark Bates:** I did, and then yesterday the big secret got even bigger and better...

**Brian Ketelsen:** Way bigger...

**Brian Ketelsen:** Yeah, than I could have ever imagined it would, and so we have to not talk about the big secret today.

**Erik St. Martin:** But there is something really cool to talk about, that a lot of people may not already be aware of, which is your new project you've been working on.

**Mark Bates:** Yes, we can talk about Buffalo. GoBuffalo.io... Till the cows come home. Or till the buffalos come home anyway.

**Brian Ketelsen:** Till the buffalos come home, that's right.

**Mark Bates:** \[laughs\] That's right. I'm very excited about Buffalo. That, I definitely wanna talk about, because it's some pretty cool stuff, I think.

**Brian Ketelsen:** So why don't you start by telling us what the hell Buffalo is?

**Mark Bates:** Besides just a terrible name for any project, Buffalo is another web framework in Go. I use the word "another" because there are a collection of them out there. This one aims to be slightly different in that I have decided not to reinvent the wheel that a lot of these frameworks have invented, but instead I'm gluing together a bunch of my absolute favorite packages and kind of putting them together in a "If you use this opinionated set of packages, your life developing web apps in Go will be as nice as - and I'm saying this with huge quotes and a huge lick of salt - Rails."

**Brian Ketelsen:** \[\\00:04:18.09\\\] \[laughs\]

**Mark Bates:** That five-letter word that no one wants to talk about.

**Erik St. Martin:** When I first heard about Buffalo, my first thought was the xkcd Standards comic, you know? Like, you have 14 computing standards. Ridiculous! We need to develop one!

**Mark Bates:** A 15th, yeah.

**Erik St. Martin:** So what was the motivation for creating another web framework?

**Mark Bates:** That's a great question. The Why has haunted me for a while, I wanna write a blog post about the Why. I have, over the years, tried some of the big Go frameworks, and I'm not gonna name any names, and I don't wanna poop Belgium on anybody's framework...

**Brian Ketelsen:** We're not shaming anybody!

**Mark Bates:** Exactly. So I've tried a lot of them, and the biggest problems I found with a lot of them is a) they're not idiomatic Go, b) they're too complex, c) they don't think of the problem holistically; they don't start you off right from the beginning with "Here's a generated base of things to work with. Just start plugging in your code." It's "Here's our framework. Start typing out framework code, so you can then start doing your thing." And taking it from frontend, including a massive pipeline, through a good templating system, through good testing and good frameworks, good routing and good middleware, all that sort of stuff.

That's really what I was looking for, and that's kind of how Buffalo came to be. It was years of me curating these packages and building essentially a Buffalo for every single web app I've developed in Go. I got sick and tired of doing that, so that's kind of how Buffalo was born.

**Brian Ketelsen:** So would it be accurate to say that you took the best of all of the packages that exist out there, sprinkled in some SuperGlue and turned it into what you're calling in air quotes a framework?

**Mark Bates:** Yeah, that's about right. If you look at the core Buffalo package itself, most of it is just glue code. There are a handful of sub-packages to other things, like provide basic rendering frameworks... You know, that could be extended using a very simple interface, and stuff like that.

I found a great router, for example - the gorilla/mux router is a great router. Great, let's wrap that. Let's wrap then the ability to add some nice middleware on it, an easy to use declarative syntax, a context structure, the ability to skip middleware, which nobody really does, but very useful... So that sort of glue work.

And even things like the Acid pipeline; I just pulled in Webpack and set up Webpack for you and made it kind of all work. So just taking the best of all those worlds.

**Brian Ketelsen:** What is an Acid pipeline? Can you explain that for people like me who don't know a damn thing about the web?

**Mark Bates:** \[laughs\] Yeah, I know that because I've tried to help you with it several times.

**Brian Ketelsen:** Aww...

**Mark Bates:** \[laughs\]

**Brian Ketelsen:** The pain!

**Mark Bates:** I know. I love you, Brian, but you... I thought I was bad at frontend work, but... \[laughs\]

**Erik St. Martin:** We won't shame web frameworks, but we will shame people.

**Brian Ketelsen:** Yeah, apparently shaming Brian is perfectly okay.

**Mark Bates:** \[laughs\] I've got a document saying to shame Brian, from Erik. Was I not supposed to do that?

**Brian Ketelsen:** Oh, I didn't get that.

**Carlisia Pinto:** You're fine, that's another document, Brian... We have it on \[unintelligible 00:07:34.20\] \[laughter\] You're fine, Mark, go ahead.

**Mark Bates:** So an Acid pipeline is a term kind of coined from the Rails world. Essentially, it is a build system around your Javascript, your style sheets and your images and the like. In the Rails world they do it all on Ruby and it's painfully slow and difficult to use. In other worlds, they use tools like Webpack, which are faster but also difficult to use, as I've found out, but it's the latest and greatest.

\[\\00:08:07.19\\\] So I pulled that in, and the nice thing about that is by using something like that you can develop ES6 right out of the box with Buffalo. You can use SASS stylesheets right out of the box with Buffalo. The Buffalo dev command does hotcode reloading of both your Go app and your asset, so as those change, it recompiles them and they're ready for you in your browser when you get there.

The Buffalo build command will build up a binary of all of your code - your Go code, your assets, your migrations, everything in one single binary. It's pretty slick stuff, I think.

**Brian Ketelsen:** Wait, wait, wait... Go back for just a minute. Did you say that you bundle all of the assets and the migrations directly into the binary?

**Mark Bates:** Well, yes I do, Brian. I did say that.

**Brian Ketelsen:** That is freakin' amazing!

**Mark Bates:** It is. It's one binary to rule the world, as I like to say.

**Brian Ketelsen:** How do you enable such magic?

**Mark Bates:** \[laughs\] Through the power of code generation, Brian. Yeah, there's definitely a lot of magic going on. All I would say is if you follow "the Buffalo way", if you generate a stock Buffalo app and you use it as such, and you use the Acid pipeline and the way the folder structure is set up for you and everything, when you run that Buffalo build, it just grabs all that, holds onto it, makes a binary that you can run "my binary migrate" and it'll run your migrations. "my binary" - just start it up and it just starts the applications and knows where all those templates are, and everything.

It really is beautiful. It's been one of my biggest pain points in Go web development over the years.

**Brian Ketelsen:** Alright, so all campiness aside - I built the current GopherTrain website and the current GopherCon website using Buffalo, and it's actually brought joy back to my life in web development. I did Rails for a long time, and I've liked the idea of Rails; there were pain points in Rails that I didn't like, but there were certainly great things about Rails and Buffalo brings back all of those great things, but in an idiomatic, compiled, type-safe, Go sort of way, and it really makes me happy. So I'm excited to have you on today, talking about Buffalo, because it's brought joy back to my web development life.

**Mark Bates:** Aww... That makes me sad for making fun of your earlier.

**Brian Ketelsen:** It should.

**Mark Bates:** I mean, you know...

**Brian Ketelsen:** Because I've never done anything but say nice things about you.

**Mark Bates:** That is true.

**Brian Ketelsen:** Well, actually, it's not, but you don't know better, so...

**Mark Bates:** \[laughs\]

**Erik St. Martin:** Publicly he's only said nice things. \[laughter\]

**Mark Bates:** Hang on a second. Excuse me, I'm being interviewed by Casey Affleck right now... Would you mind being quiet? Yeah. No-no. It's Casey Affleck, you know? The "dood-basterd...", yeah. Okay.

Sorry. I was being bothered by a local. \[laughter\]

**Carlisia Pinto:** Did that just happen? \[laughter\]

**Brian Ketelsen:** Oh my god.

**Carlisia Pinto:** So back to the Buffalo.io... I am curious to know what third-party libraries are you using? You already said you were using gorilla-mux, which I think is awesome that you made that choice. I'm wondering, are you wrapping around any database library and what else are you using?

**Mark Bates:** Yeah, that's a great question. So one of the big things about Buffalo is I believe Buffalo stands on the shoulders of giants. As a matter of fact, whenever I cut a new release I generate a file called shoulders.md, which lists all of the packages that I use inside of Buffalo because I wanna make sure everybody has the props that they deserve for these wonderful packages.

\[\\00:11:52.08\\\] So for me, some of the packages like go.rice, which allows you to bundle static files into Go - it's a great package. What I love about that package is you don't have to keep running it in development, it falls back to your file system, which is really nice. So you only need to generate those kinds of bindings at build time.

We were using the raymond package for our templating system, but unfortunately we ran into just a few issues with that library, but we leveraged the AST and lexer and parser from raymond; it builds basically raymond on top of raymond, but fixing a few of the issues we had and kind of improving upon it. It is a great templating library and he did a great job building raymond initially.

A lot of the gorilla stuff - we use a lot of that. For things like database, we're actually using a package I wrote called pop, which I quite like because it offers actual migrations versus auto-migrations. I'm a big fan of being able to control when my database gets upgraded and how. It's kind of a halfway between magic and halfway between straight Go, so it's not as heavyweight as some of the other ORM systems out there.

I know Brian has used it and is favorable towards it, if I could use those words, Brian...

**Brian Ketelsen:** You're putting words in my mouth, but yes, I think pop is good, and I've used gorm quite a bit in the past, which is a whole lot of magic in the ORM side of things. And I like pop quite a bit; it's not much magic at all, but it gives you the power to get things done with just enough glue on top of sqlx in the background. I think Mark's been sniffing the glue though, that's the problem.

**Mark Bates:** \[laughs\] I have. I do love sqlx, that's such a great package. But yeah, so just a ton of them. Just some really great... Like, blackfriday... I support markdown templates as well as HTML templates, so blackfriday is there... Just a ton. I recommend people check out the shoulders.md file, because there's so many great packages and I'm really appreciative of everybody whose shoulders I get to stand on to build something like this.

**Erik St. Martin:** You know, one cool feature that I saw was there that I haven't seen in any of the other frameworks is the REPL, which is really cool.

**Mark Bates:** Yeah, I pulled in Gore, which is, again, an awesome little project. I do, again, just a little bit - I generate a little bit of code to import your models and actions into the REPL right away, so you don't have to import those later. But yeah, it's really cool, and again, it didn't take much time at all to pull something like that in.

**Erik St. Martin:** And if the term REPL sounds odd or confusing to anybody, I believe it read-execute-print loop, if I recall...

**Brian Ketelsen:** It might be 'evaluate'.

**Mark Bates:** Yeah, I think it's 'evaluate'.

**Erik St. Martin:** Yeah, it might be 'evaluate'. But it's basically just a console to interact with the language.

**Mark Bates:** With your Go application - how awesome is that?

**Brian Ketelsen:** It's very awesome.

**Mark Bates:** The other thing is we also use Grift, which is a library that lets you run kind of reusable tasks, very similar to rake in the Ruby world... Which is great for doing things like seeding and stuff like that.

**Brian Ketelsen:** You stole my thunder, I was gonna mention Grift. Grift is my favorite part of the whole thing, because you get to do that whole rake thing. If you're used to the Ruby world where you ran rake db:migrate or whatever, you could make your own Grift tasks that interact with your Go code.

Yesterday - not yesterday, maybe Friday - I created a meta Grift that runs Grift on the remote server, so you can run Grift-Grift, and it creates a Grift that runs a Grift on a remote server, which is just awesome, so you can do your production db migrations over SSH. Very awesome.

**Mark Bates:** My favorite part is being able to say "I'm running a grift." \[laughter\]

**Brian Ketelsen:** \[unintelligible 00:16:00.27\] a grift. \[laughter\]

**Erik St. Martin:** Don't say that in front of that undercover cop.

**Mark Bates:** \[\\00:16:05.29\\\] \[laughs\] Oh, this Dunkin' Donuts is pretty used to that sort of behavior.

**Erik St. Martin:** Carlisia, you were about to say something?

**Carlisia Pinto:** Yeah, a couple things I wanna say now. First, actually I do wanna make sure people understand that there is a listing of all the libraries that Mark is using, and it's worth taking a look. There's some very interesting stuff, including the libraries that were just mentioned. And a lot of the libraries that were just mentioned are actually libraries that Mark has developed, and my previous question was actually "Are you in massive need of help to maintain these libraries?" How are you managing this?

**Mark Bates:** \[laughs\] Absolutely. I'm always looking for help, I think like any good OSS person is always looking for help. Yeah, they are... Well, thankfully, with the exception of Buffalo and pop, a lot of the libraries are very small things that don't do very much; they're just little helpers and bits that I find very useful. But some of them are bigger, like pop and Buffalo, and... Goth is not part of Buffalo; there is a goth generator, and goth is probably my most popular package I've written for Go. It's an OmniAuth kind of clone; it lets you create authentications using OAuth2 and OAuth providers, and that's pretty cool, too. So yeah, always looking for help.

**Brian Ketelsen:** If goth is really popular, do you think Adam follows it on Twitter? \[laughter\] Probably not.

**Carlisia Pinto:** I was drinking too, and I almost spit it out. \[laughter\]

**Erik St. Martin:** So you can actually make fun of it now, because he can't interject, so you can say whatever you want.

**Brian Ketelsen:** Don't break the fourth wall, Adam. Don't do it. \[laughter\]

**Erik St. Martin:** I actually wanna play with pop, because I haven't seen it. I haven't had to do database migrations or anything in a while, but there seem to be some tools in the early days for migrations, and many of them seem to get abandoned.

**Mark Bates:** Yeah, I was using one - I think it was called Migrate - very early on, and it was great... I'm trying to remember the issues I had with it; I tend to start - that's kind of my development process... I find something, I love it, I start using it, I try to contribute; if things aren't happening, if the maintainer is not accepting PRs or they've kind of dropped it, then I end up usually taking things into my own hands... Which is sad.
I've asked for a bit commit on several repos in the past that have gotten nowhere, so I guess my call to OSS maintainers is if you can't maintain your OSS, be willing to give it up. Be willing to give it to somebody else who wants to maintain it.

**Erik St. Martin:** Yeah, I guess that's a fair point. And sometimes it's hard too, because sometimes it's not intentional, right? Many of us create little things to solve a purpose, then we share it with the world because we're like, "Hey, this might be useful to somebody else" and then you forget about it.

**Mark Bates:** Right.

**Erik St. Martin:** I've had a couple of those that I'm sure I probably have GitHub issues that have been open for years and I've never even seen them.

**Brian Ketelsen:** Has anybody seen the GitHub statistics thing that's running around Twitter that shows you how many commits you did last year, or whatever...? There's a list of the GitHub repos that I committed to last year, and I committed to like 213 repos, and a hundred and something of them are mine. And I thought to myself, "I have a hundred and something Go libraries that I've been maintaining?" It scared me a little bit... I actually can think of maybe one of them, so... Who knows? \[laughter\]

**Erik St. Martin:** You can only hope that they're forks of other people's projects that are being maintained.

**Brian Ketelsen:** Right?!

**Mark Bates:** I try to delete my forks as quick as possible. It's for the best.

**Erik St. Martin:** \[\\00:20:04.27\\\] Nathan Youngman in the GoTime FM channels says that there is a fork of the migrate library - that's our tool, or whatever you wanna call it by \[unintelligible 00:20:13.28\] that also has Cassandra support, so that's cool.

**Mark Bates:** Yeah.

**Erik St. Martin:** I love Cassandra, too.

**Mark Bates:** I think that was my problem with Migrate - it wasn't Cassandra support, I just remembered... It was everything had to be done via parameters on the command line, and it was difficult to work with since I was setting up configurations for within my app, and then now I'm running migrations outside the app, and being able to configure all those things with one way was the big problem for it.

**Erik St. Martin:** Nathan also said - and this is actually on your Shoulders page - fsnotify.

**Mark Bates:** Yeah.

**Erik St. Martin:** It's a really, really useful library. He says he sucks at maintaining, who wants to maintain it? \[laughter\] So if you're looking to help maintain a project...

**Brian Ketelsen:** This is a swap meet?

**Mark Bates:** \[laughs\] I'd definitely love commit access on fsnotify, I use it a lot. It's a great library, and it's what basically powers the ability for Buffalo to rebuild your binary whenever a file changes.

**Carlisia Pinto:** I think you should take it over, Mark.

**Mark Bates:** I'm happy to get commit access to it, definitely.

**Brian Ketelsen:** Look at this, we're making deals... Brokering stuff right here, at Dunkin' Donuts, live in Boston.

**Mark Bates:** Right, but Nathan has to take commit access on one of my projects too, that's the way that works. \[laughter\]

**Erik St. Martin:** Oh, nice.

**Carlisia Pinto:** Wow, you're smart. \[laughter\]

**Erik St. Martin:** So I also have to interject... I just saw an e-mail come through, and the last early bird ticket for GopherCon is officially gone.

**Brian Ketelsen:** Nice!

**Mark Bates:** Woohoo!

**Carlisia Pinto:** Wow... What - two days?

**Brian Ketelsen:** One day.

**Erik St. Martin:** Yeah, a day and a half, because late tonight it will be two full days. So yeah, that's awesome. So anyway, I kind of just totally derailed our Buffalo talk, but we'll get back to it at GopherCon.

**Mark Bates:** GopherCon's gonna be amazing this year, I know that for a fact.

**Carlisia Pinto:** It sounds like there will be a lot more people this year than last year.

**Erik St. Martin:** So before we get on to all the news and stuff, I'd love to hear kind of like -- so Buffalo is kind of just in its infancy... What's the future for Buffalo? What are some of the things you're looking to do with it? Where would you like to see it go?

**Mark Bates:** Yeah, that's a great question. So we reached 0.7.0 yesterday, which was a huge release because it brought it all that build compatibility yesterday. Things that I would love to see worked on are more generators - I'm a big fan of generating all the things, like Brian is. You could do "buffalo new" and it generates a great skeleton app for you, and there's a couple other generators in there that are really wonderful, but I wanna extend those and make those even more powerful so that we could just get onto the problem with building our apps and not all that code.

Definitely need to look at support for background jobs; I know there are several sidekick-like worker jobs in Go world, so we'll get support for those, we'll get support for mailing, creating mailers. Again, I look for really nice packages and then just try to write some glue around it that makes it easy for everybody to use. So making mail interact with background jobs, for example, is that little bit of glue that I'll probably add. Those are definitely things that are on my plate before 1.0 comes down.

**Brian Ketelsen:** That's awesome.

**Carlisia Pinto:** That's a lot.

**Mark Bates:** Oh, and form builders. I was working on a form builder today.

**Brian Ketelsen:** Validations. Validations would be useful, too.

**Mark Bates:** Yeah, those just dropped in pop today, actually.

**Brian Ketelsen:** Ask and you shall receive.

**Mark Bates:** \[\\00:23:55.20\\\] \[laughs\] I'm like that. Yeah, you can now "validate and create", "validate and save", "validate and update", that sort of thing. So yeah, those are already in pop, and they're ready to go. The generator generates basic validations for you now.

**Brian Ketelsen:** Wow! All of this since we talked yesterday?

**Mark Bates:** Yeah, man. I'm a machine. \[laughs\]

**Brian Ketelsen:** Do you have a life? How does your family feel about your abandonment of their needs?

**Mark Bates:** Um... Who? \[laughter\]

**Carlisia Pinto:** What fuels you, Mark? Dunkin' Donuts? How do you get so much done?

**Mark Bates:** Are those the people in my house?

**Brian Ketelsen:** That explains it all.

**Mark Bates:** That explains it... Both my sons call me Mark, which I think is kind of odd... \[laughter\] No, um...

**Erik St. Martin:** I don't think it's supposed to work that way.

**Mark Bates:** I don't think so either. I've got a wonderful wife and two wonderful children. I honestly couldn't be -- I couldn't do any of this without their support. They're wonderful, they always have been. My conference talks, my books that I've written, the projects I've started - they've always been big supporters, my wife in particular. I just feel like I'm pretty good at time management... That's honestly the key to doing all of this. If you're terrible at time management you're just not gonna get anything done.

So I code pretty feverishly between when my wife and kids leave for school and work in the morning and when I pick them up. The kids up about five, and then from five till eight-thirty, nine o'clock I'm a family man, I just do my things with the family. On the weekends I leverage the kids' downtime, when they want to be down, I try to leverage those free hours, but for the most part they keep us busy on the weekends. It's everything I can do to keep it all in balance.

**Brian Ketelsen:** That's awesome. Just looking at your GitHub profile - you're prolific. Every two minutes you're putting out a new change. I think working on Buffalo or working with Buffalo over the last couple weeks - it's blown my mind just like the validations. I ask, "Hey, you think it would be possible to do X, Y and Z?" and of course, Mark's first response is "We love pull requests", but his second is "Yeah, I added that yesterday." I don't understand how you have time to do it all, it's amazing. You're far more productive than I am.

**Carlisia Pinto:** It's because he drinks Dunkin' Donuts coffee.

**Mark Bates:** It's because I drink Dunkin' Donuts every morning. I actually do drink Dunkin' Donuts coffee every morning. \[laughs\]

**Carlisia Pinto:** That is the secret, there we go.

**Mark Bates:** That is the secret. The bigger secret is I only started drinking coffee just over a year ago, so I don't know how I was doing this productivity stuff before then.

**Brian Ketelsen:** Wow.

**Mark Bates:** Yeah.

**Carlisia Pinto:** Wow.

**Mark Bates:** The key is just drinking. Just... Booze. \[laughter\]

**Brian Ketelsen:** That's my problem, see? I'm almost a complete teetotaler, so if I drink more, maybe I'd be more productive.

**Mark Bates:** Exactly. \[laughs\] The funny story is I've written three books over the years, and the longest one took me about three or four months to write, at night, part-time. I would sit down at about nine o'clock in the evening after the kids went to bed and I would crack open a six-pack of Guinness and a bag of M&M's and I would write until like three in the morning and I would just send them off to my editor and I wouldn't even look at them... I would do zero revisions, I would just send them off.

Then they would send me back the changes, the corrections a couple days later, and it would start off perfectly fine, you know, and as it went on there'd be a little bit of red, and a little bit more red, and then finally by the end there'd just be like whole paragraphs scratched out and all red... "This isn't a word", "These aren't sentences", "This is the lyrics to 'I am the walrus'..." \[laughter\]

**Carlisia Pinto:** Wait... So you realize what you are doing is actually getting your editor to write a book for you? \[laughs\]

**Mark Bates:** Well no, no, because then I'd go back and change, correct the things that were the lyrics to "I am the walrus" and make them actual sentences again.

**Carlisia Pinto:** \[\\00:28:03.07\\\] \[laughs\] Okay... It's the equivalent of making an incorrect statement on StackOverflow and have people just give you the right answer.

**Mark Bates:** Well, everything's an incorrect statement on StackOverflow, so I don't... You know... That's like saying there's hatred on Hacker News, and that every statement is misguided or misinformed... \[laughs\]

**Brian Ketelsen:** It's not true...

**Carlisia Pinto:** Oh my god... I'm hyperventilating here. This is funny.

**Mark Bates:** That is not true. Everything Brian puts on there is full of love and honesty. \[laughter\]

**Brian Ketelsen:** True.

**Mark Bates:** But yeah, "suppress your inner editor" I guess is how I did that. \[laughter\]

**Erik St. Martin:** Okay, so we should probably move on to projects and news. Before that, let's take a quick sponsor break.

**Break:** \[\\00:28:58.14\\\]

**Erik St. Martin:** So, projects and news... What do we wanna talk about first?

**Brian Ketelsen:** Oh my god, there's so much to talk about. I think we have to start with the biggest one. Talk about shots fired - Scott Mansfield said "shots fired" in the GoTime Slack channel. Shots fired happened when Google yesterday released Grumpy, which is a Go backend to a Python interpreter, and holy cow, the Python world is completely on its ear... "How could you possibly make a Go backend for a Python interpreter?", but if you look at the blog post, the performance of these Python applications that are being run transpiled into Go - it's insane. I mean, drastically, a thousand percent faster. Insane. Really awesome.

**Mark Bates:** Yeah, that project looks insanely good.

**Brian Ketelsen:** It does. I know that it's not even close to code complete. There's a lot of the Python standard library that's missing, but holy cow... It's fast, it's really fast, and it already works for several cases of Python apps, so if you've got Python code that you're looking to make fast, you can run it with the Grumpy interpreter and get the best of whatever it is that you like out of Python running on the Go runtime.

**Mark Bates:** Admittedly, they did cut a few corners... No C extensions and no global interpreter lock, which is actually a good thing.

**Brian Ketelsen:** Well yeah, you don't want the global interpreter lock. C extensions - yeah, I don't know...

**Mark Bates:** Yeah, that was always a problem with the alternative Ruby versions - they all struggled supporting C extensions, and because of that, people struggled to use them.

**Brian Ketelsen:** Yes. We should get Evan Phoenix and Charlie Nutter on here and talk about all of the people that are building alternative Rubys and we could just have a big crying festival. \[laughter\]

**Carlisia Pinto:** Is Python one of the approved or supported languages at Google? I think there are five of them.

**Mark Bates:** It is, yeah.

**Erik St. Martin:** I think it's one of the primary, actually. If I recall, I think YouTube is a lot of Python.

**Brian Ketelsen:** Yeah.

**Carlisia Pinto:** So is that why they did this? Because I don't think this will necessarily increase Go adoption. I don't think that's why they did this.

**Mark Bates:** \[\\00:32:01.09\\\] No, that's not... If you read the blog post, they did it in order to get better performance out of their Python without having to rewrite all of the Python apps in something like Go.

**Carlisia Pinto:** Gotcha.

**Erik St. Martin:** So almost for the same reasons of like a HipHop VM to PHP or something like that, where rather than having to make that transition, it's just easier to write something to make your code run faster.

**Brian Ketelsen:** I think it's just a tacit admission that Python is slow and their developers can't be taught.

**Carlisia Pinto:** Ouch! \[laughter\]

**Brian Ketelsen:** I was waiting for the laughter. There was none. Alright, fine.

**Mark Bates:** Even I was silent \[unintelligible 00:32:36.18\]

**Erik St. Martin:** Yeah, that was like, "Whoa, shots fired for real." \[laughter\] It's hard to change the wheels on a moving bus, is the saying, right?

**Mark Bates:** Very hard, right.

**Brian Ketelsen:** Absolutely. So Grumpy sounds very exciting.

**Erik St. Martin:** Yeah, so we've actually got like a couple of big things to talk about this week. So it is after the first of the year, which means GopherCon 2017 CFP has been opened, along with registration. That's huge! I'm really looking forward to GopherCon this year.

**Carlisia Pinto:** Do I understand it correctly that the CFP closes at the end of January?

**Brian Ketelsen:** That's correct.

**Erik St. Martin:** We've toyed with this, and one of the times we gave everybody 90 days to write a proposal, and what we found was everybody submitted their proposal in the last 48 hours. So then we gave everybody a month, and everybody submits their proposal in the last 48 hours. \[laughter\] So it doesn't really matter what the timeline is, everybody waits till the end. So if you have something interesting to talk about, definitely submit a proposal.

There's three types of things you can submit for: keynote session or plenary session, that will be in the main hall, kind of directed towards everybody; tutorial sessions, that will be kind of like a more direct group of people you're speaking to with similar interests... And then we actually opened it up for workshops for anybody who has interesting things they wanna teach in the day before.
The dates of GopherCon: 13th and 14th July are the main talk days; 15th - we typically used to call this Hack Day, we're now calling it Community Day, because I think it's a lot more in line with the spirit of the day. The Go team has continued to increase their presence there. Last year we had this really cool community room where they had discussions about some hot topics going on with the community, so we're gonna kind of expand on that, make that room bigger and get good at A/V. What else have we changed this year, Brian?

**Brian Ketelsen:** I think we decided that we're not gonna let Mark Bates MC anything...

**Mark Bates:** What?! \[laughter\]

**Brian Ketelsen:** Oh, there's a big change...

**Mark Bates:** I love how I find out online, in front of everybody.

**Carlisia Pinto:** \[unintelligible 00:34:58.04\]

**Brian Ketelsen:** ...the CFP this year is hosted on some weird website called PaperCall.io.

**Mark Bates:** Yeah, I've heard nothing but good things about PaperCall.

**Brian Ketelsen:** And the inside joke is that that's hosted by Mark and someone else, so PaperCall is one of Mark's creations. Now tell us quickly, you said you were doing some experimentation on PaperCall, running it in Buffalo versus Rails. Give us an idea of how much faster it is in Buffalo versus Rails.

**Mark Bates:** Of course Cory just jumped into the Slack channel with saying "It's not written with Buffalo." It is not. It is actually written in Rails, and it's the bane of my existence because of that. But I have been rewriting it in Buffalo - don't tell Scott, my co-founder; he doesn't know... But it's roughly a hundred times faster and uses something like 40% less memory in CPU usage, or something ridiculous like that.

**Brian Ketelsen:** Wow... Good stat.

**Mark Bates:** \[\\00:36:00.01\\\] Yeah, it's insane. Requests that were taking about 300 milliseconds take about 3 milliseconds, and the app on average uses about 5-6 megs of memory, versus the Rails, we're gonna start you with 512, or something along those lines.

**Brian Ketelsen:** Nice.

**Mark Bates:** Yeah, it's pretty slick. I'm very excited and desperately trying to finish it, so I'd get it out there. But yeah, PaperCall is pretty awesome, and if you host a conference, obviously you should host it on PaperCall.

Speaking of which, the lightning talks - can we talk about those for a minute?

**Brian Ketelsen:** Sure.

**Erik St. Martin:** Sure.

**Mark Bates:** Because I'm sure people will ask...

**Brian Ketelsen:** The ones you're not hosting?

**Mark Bates:** The ones I'm not hosting; well, in that case, you know, screw 'em. \[laughter\]

**Erik St. Martin:** We already hired security and they have your picture. I'm just saying...

**Mark Bates:** Oh, what? You just tell Heather, "Don't let Mark in?"

**Erik St. Martin:** Pretty much! And you know Heather, she'll make that happen.

**Mark Bates:** She has banned me from GopherCon I think every single year and I somehow managed to still sneak in the backdoor, so... Your brother Steve lets me in. \[laughs\]

I'm assuming we're gonna open up lightning talks CFP later in the year for those who wanna give lightning talks.

**Brian Ketelsen:** I'm doing a lightning talk.

**Erik St. Martin:** Yeah, focus on the real talks. Not real talks, but the plenary talks.

**Brian Ketelsen:** Lightning talks are important, too.

**Erik St. Martin:** They are.

**Carlisia Pinto:** They are fake, though. They're not real. That's what Erik's saying.

**Brian Ketelsen:** I started the wheel spinning today to get approval to bring my barbecue grill to GopherCon to the Convention Center, so that I can do a lightning talk about Cupid and barbecue and IoT using Go and the GoBot framework, so if we can get approval, there will be a lightning talk that involves barbecue, with live barbecue.

**Carlisia Pinto:** If you are planning to turn that thing on, you're not gonna get approval. \[laughter\]

**Brian Ketelsen:** Well, we will just have to see about that.

**Erik St. Martin:** If it can be done, Heather will make it happen.

**Brian Ketelsen:** That's right. Our people know people.

**Mark Bates:** That is true. If anybody can do it, Heather can.

**Erik St. Martin:** Another cool thing with the community day too that we're gonna try to do this year - no promises yet, but we're investigating - is the potential to maybe offer people the ability to just come to community day. So if they don't have the time or financial ability to come to the core event, they might still be able to participate in the community day. We've gotta figure out the logistics of that, but that would be really awesome to make happen.

**Brian Ketelsen:** That would be very cool.

**Carlisia Pinto:** I'm sorry, I just got very distracted by something Cory said.

**Brian Ketelsen:** Barbecuing gophers?

**Mark Bates:** We all get distracted by things Cory says.

**Erik St. Martin:** This is like the ADHD episode. Like squirrel... \[laughter\]

**Carlisia Pinto:** Cory, I'm gonna kick you out of the channel.

**Brian Ketelsen:** Voted.

**Carlisia Pinto:** Anyway, moving on.

**Brian Ketelsen:** Let's talk about Go 1.8, coming out in February, on 16th. Dave Cheney once again is organizing release party across the globe for Go 1.8; so if you organize a meetup or if you're a part of a Go meetup, then we'll put the link in the show notes for a way you can find information about how to do a Go 1.8 release party at your meetup. We are definitely hosting one here in Tampa, for the Tampa Go meetup. It will be the first meetup we've had in like nine months... But we're gonna do one for Go 1.8, and that's a big deal, because 1.8 is a big deal, and we're all very excited about it.

Alright, other exciting projects, let's see... These are all my projects; did you guys do nothing in projects and news? I'm just gonna say them all, because I've put them all in here. So a really cool app that I found is called Releaser, and it's in the repository at github.com/goreleaser/releaser.

\[\\00:39:52.10\\\] It's an awesome app that does cross-compiling and it will automatically build your app and tag a release on GitHub and upload the binaries for you, which is really cool, something I was looking to do recently and didn't have a way to do it without RubyGem. So that one's pretty slick, I like that a lot. I wish it would actually do the tagging for me, but it doesn't do the tagging yet. I'm sure PRs are accepted.

A cool one I found this morning - Mutagen, at the GitHub repo havoc/iomutagen. I'm a huge fan of synchronizing code between 8,000 different machines that I use, and Mutagen is kind of like a Unison clone, if you've used Unison before. It's really fast, and it runs in the background and it has some nice tools; so I was playing with that today. I like Mutagen quite a bit.

**Erik St. Martin:** So what happened to -- was it SyncThing, the one you were using before?

**Brian Ketelsen:** SyncThing ate my breakfast once, and I haven't been able to turn it on since. I lost a day of code with SyncThing. I'm sure it was my fault somehow, but yeah... I haven't turned on SyncThing since I lost that day of code. It made me grouchy.

**Carlisia Pinto:** You weren't committing? How was your fault?

**Brian Ketelsen:** So I was synchronizing code between multiple machines...

**Carlisia Pinto:** But not committing it? Just committing on one machine, or...?

**Brian Ketelsen:** Yeah, just saving it on one machine, and then it gets synchronized to other machines... And something happened - I don't know, I deleted something somewhere and it ended up wiping out the entire source directory for my Go stuff, and everything that wasn't committed to GitHub got lost, and it made me sad.

**Mark Bates:** That's painful.

**Brian Ketelsen:** It was. I stopped using SyncThing at that point.

**Mark Bates:** Do these tools all work on your Windows machine, or...?

**Brian Ketelsen:** Yes, so far all of them do. I wish I could remember what I did. I'm sure it was a user error, and I don't want to speak poorly of SyncThing because lots of people use SyncThing very successfully, so I'll take all of the blame for my user error there, but I haven't used it since.

**Erik St. Martin:** So basically it's not a SyncThing thing, it's that you're scared you're gonna screw it up again, it's what you're saying...?

**Brian Ketelsen:** Exactly, I'm positive that I'll do something foolish and lose source code again. I don't wanna do that.

**Mark Bates:** I do all of my development in Dropbox.

**Brian Ketelsen:** Dropbox?

**Erik St. Martin:** I did that early, early on, but I stopped doing it.

**Mark Bates:** Yeah, I do everything in Dropbox.

**Carlisia Pinto:** Yeah, I had a bad experience with Dropbox.

**Brian Ketelsen:** It sounds like everybody's vodka story. \[laughter\] "Yeah, I drank too much Dropbox once. It was bad."

**Mark Bates:** Yeah, knock on wood... In five or six years I've never had anything bad happen, and almost my entire home folder is in there.

**Carlisia Pinto:** Just Git commit, you'll be fine.

**Erik St. Martin:** See, so that's the scary thing about having a hundred percent synchronization over a backup strategy, right? If you destroy the file in one place, you destroy it everywhere.

**Mark Bates:** See, Dropbox offers history.

**Erik St. Martin:** It does.

**Brian Ketelsen:** Well, again... I'm sure it was a user error. PEBKAC.

So the last awesome tool I found is called Prism, and there's an article on Medium today... Let me copy and paste that URL.

**Mark Bates:** Is Medium still going today?

**Brian Ketelsen:** Oh, just for today.

**Carlisia Pinto:** It's up right now, but who knows...?

**Brian Ketelsen:** Yeah, who knows...? So Prism is a pretty nifty open source profiling tool for Go code, and the thing that I really like about Prism is that it shows historical diffs over time. So you can run a profile on your app, and it has pretty decent-looking output - better than pprof, obviously - and as you make changes to your application, you can view the difference in those profiling changes from the most current revision to the last one, or you can view the entire profile difference. So you can say "This change made me 5% faster, but since I started profiling, I'm 1000% faster."

\[\\00:43:57.06\\\] It's really neat to show historical changes in your profiling. And it's got a nice interface, it looks really easy to use... I have not yet tried to use it, but it looks pretty nice. So Prism... I don't even remember what company released it, but it looked pretty cool.

**Erik St. Martin:** Yeah, I haven't played with it myself personally, but I love the \[unintelligible 00:44:16.08\] of it, the comparison against previous versions. And the name is cool too, Prism. And it's inspecting stuff, monitoring stuff...

**Brian Ketelsen:** Yeah, it sounds like a CIA Black Ops project - Prism.

**Erik St. Martin:** I wanna say those were kind of the core things this week that we ran across... There was probably some other stuff, but two weeks away is a long time.

**Brian Ketelsen:** It is.

**Carlisia Pinto:** And by 'we', we mean Brian. \[laughter\] We're just riding on your back, Brian.

**Erik St. Martin:** Hey, in my defense, I dropped the Grumpy link in the GoTime FM channel for the hosts a while back (a couple days ago, something like that).

**Brian Ketelsen:** Only after I saw it, though. It's too late. Nice try.

**Erik St. Martin:** Can I say that then?

**Brian Ketelsen:** Yes.

**Erik St. Martin:** Does that count? I saw all the stuff first; I just was lazy and decided to let you do it.

**Brian Ketelsen:** Yep, that's fine. Nobody will believe it, though.

**Erik St. Martin:** Works for me. So let's move on to \#FreeSoftwareFriday. This is the part of the show where we give shout outs to projects and people that make all of our lives easier. Who wants to go first? \[pause\] Nobody?

**Carlisia Pinto:** I can go first. I wanna give a shout out to this library called Refresh. It sounds very cool, I'm actually gonna start using it. I just found out about it, and guess what? It was written by our guest.

**Brian Ketelsen:** What?

**Carlisia Pinto:** Yeah.

**Mark Bates:** I know.

**Carlisia Pinto:** So basically, if you're working with a Go project and you run this library, if you change your Go files, you will -- what is it, Mark? Why don't you explain it? I know what it does, I'm just having trouble explaining it.

**Mark Bates:** It's pretty simple; there are actually a few of these types of libraries out there, but essentially it watches your file system using the fsnotify package, and as your Go files change, or files that you say "I'm watching" change, it will rebuild your Go binary and start it back up again.

**Brian Ketelsen:** Does that use ionotify under the background?

**Mark Bates:** Fsnotify.

**Brian Ketelsen:** Fsnotify, I'm sorry, my bad. Sorry, Nathan.

**Mark Bates:** It also offers a webhook that you can put into your Go code that will show you in your web browser what error has occurred compiling your app.

**Brian Ketelsen:** Nice.

**Carlisia Pinto:** I have something embarrassing to share, but I will because I don't care. I lost half a day one time doing work and checking my work manually, and the changes weren't appearing, and I thought because I was just doing it wrong, and I forgot that I had to rebuild my binary... \[laughter\] Oh my god...

**Brian Ketelsen:** Okay, that is embarrassing. I probably wouldn't have told anybody that.

**Carlisia Pinto:** I know. But I never did it again, though.

**Erik St. Martin:** I've done similar things though, too. I was building a CNI plugin for Kubernetes, which is the container networking interface, to basically control the networking interfaces that pop up in the container, and their IPs and all that stuff, and I couldn't figure out - it was at least a day, maybe a day and a half - why my CNI plugin was not getting called, and I realized that I was using host networking, and of course host networking \[unintelligible 00:47:51.15\] \[laughter\]. Yeah, that kind of sucked. Talk about some time wasted...

**Brian Ketelsen:** \[\\00:47:58.00\\\] That's not as bad as developing on a remote Linux box and then opening a local host, calling it 8080 and wondering why your web server isn't started. \[laughter\]

**Mark Bates:** Oh, I can beat that. I have had Vim open and in my file finder I have deleted the folder, and I've been editing in the trash folder. \[laughter\]

**Brian Ketelsen:** Oh, man... The pain.

**Mark Bates:** It's happened to everybody.

**Brian Ketelsen:** I feel better now.

**Erik St. Martin:** Those are those days where you're like, "Am I really qualified to do what I do?"

**Brian Ketelsen:** The answer is always no... A resounding no.

**Mark Bates:** Those are the days I just get up and watch Police Academy. \[laughter\] Just all of them, back-to-back, even the non-Guttenberg ones.

**Brian Ketelsen:** No... Those are terrible. So my \#FreeSoftwareFriday shout out is for Buffalo. Even though it's topical today, it really has changed how I look at web development in Go. I didn't use to think that web development in Go was fun, even though I typically consider myself a Go apologist and I said, "Oh, absolutely, you can do web development in Go", it still wasn't fun. Now it is again, and I very much appreciate that application and whatever guy is that wrote it.

**Mark Bates:** Thank you, Brian. I feel exactly the same way.

**Carlisia Pinto:** Sound like that guy will be getting into GopherCon after all...

**Brian Ketelsen:** Nope. \[laughter\] Pictures at the door.

**Erik St. Martin:** He's got \[unintelligible 00:49:30.16\] countdown here, 189 days to redeem himself. \[laughter\]

**Mark Bates:** Yeah, I'll have to grow a beard, dye my hair...

**Erik St. Martin:** Then we might let him in on good behavior...

**Mark Bates:** I was gonna tell everybody I'm Cory LaNou, and then I'll definitely not get in, I guess...

**Erik St. Martin:** No, he's invited.

**Mark Bates:** Oh, whatever.

**Erik St. Martin:** So did you have anybody you wanted to give a shout out to, Mark? I know you like the shoulders of giants.

**Mark Bates:** I was actually gonna point people at my Shoulders of Giants file because there is too many people to thank for all the great work that they've done, not just for Buffalo, but just in general. Everybody who's committed to Gorilla, people like Fatih, for all the work he's done in the community, and Dave Cheney... If you haven't used Dave Cheney's errors package, what are you waiting for?

**Brian Ketelsen:** Oh, you have to.

**Mark Bates:** Yeah. There's just so many... Just go there and find all those people and say thank you to them, because they do great work.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** So you actually brought up mine in yours... I'm actually gonna thank a person, which is Dave Cheney. Many of us have learned a lot about the language through a lot of his blog posts, but he participates I think in a lot of stuff that people don't even really know. He's constantly behind the scenes contributing to projects, to proposals to the Go staff... I think he's involved in almost every Go conference, to varying degrees of capacity.

He's the program chair for GopherCon - the great programs that we have at the conference are largely thanks to him and all the work that he does in his spare time there, so I think we can't give Dave enough props for all that he does in the Go community.

**Brian Ketelsen:** Even if he's Australian.

**Erik St. Martin:** Especially if he's Australian.

**Carlisia Pinto:** Yeah, Dave is awesome.

**Brian Ketelsen:** Somebody on Slack mentioned that the errors package should be in standard library. I've been begging for that ever since it came out, and I think we need to start an actual movement and just get it to happen, because it's completely compatible with the errors package in standard library; there is no reason not to have it included. So let's start calling our representatives and elected officials and make that happen.

**Mark Bates:** I one hundred percent absolutely agree. Not having stack traces and errors seems like a bit of an oversight, and being able to have those back because of Dav Cheney is amazing.

**Brian Ketelsen:** Yes. Thanks, Dave. We love you.

**Mark Bates:** \[\\00:52:00.12\\\] I would say I'd buy him a steak, but I've already done that. I have one more shout out I'd like to make, because it just dawned on me... The Octotree plugin for Safari, Chrome, Firefox. If you haven't seen it, it's amazing. It's a plugin, and on the left side of your screen you have a file tree for GitHub repos.

**Brian Ketelsen:** Oh, I have seen that. I wanna say that I did it right away, right after they released it, and it crashed Chrome for me. Is it more stable now?

**Mark Bates:** I've been using it for ages and it's amazing. I honestly can't imagine using GitHub without it.

**Brian Ketelsen:** That is awesome.

**Erik St. Martin:** That is really cool.

**Mark Bates:** It's a non-Go shout out, but I was looking at something on GitHub just now and I was like, "Oh my god, I need to shout out to this."

**Brian Ketelsen:** Yeah, \#FreeSoftwareFriday doesn't have to be just Go."

**Mark Bates:** Exactly.

**Erik St. Martin:** We've thanked many a tools that we use on a daily basis.

**Brian Ketelsen:** Who are you calling a tool? \[laughter\] This show just went from PG to PG-13.

**Mark Bates:** Excuse me just one second... I will leave when I am damn well, good and ready to leave. \[laughter\] No, I haven't bought anything, and I don't plan on buying anything. How's that?! \[laughter\] I'm on with Casey Affleck. Yeah, CASEY! Not Ben. Yeah, the talented one. \[laughter\] Yes, thank you. Sorry about that. \[laughter\]

**Brian Ketelsen:** I'd say that wraps our show. Yeah, that's a wrap, kids. \[laughter\]

**Erik St. Martin:** So people are gonna leave this episode with either the feeling that they've listened to comedy hour, or just completely confused.

**Carlisia Pinto:** I don't know if we lowered or raised the bar by a lot, but it's one of the two.

**Mark Bates:** The bar is typically lower whenever I enter a room... I tend to bring a screeching halt to anything I'm a part of, so yeah...

**Erik St. Martin:** If this episode is one of your favorites, thank Mark. If it's one of your least favorite, just know that whenever Mark shows up, he brings the collective intelligence of the room down. \[laughter\]

**Mark Bates:** Exactly.

**Brian Ketelsen:** You know what's really embarrassing? I just finished a live class for O'Reilly, and I think there were 250-300 people in the class and I said, "Everybody needs to go listen live at changelog.com/live after this class." That might have been a mistake.

**Carlisia Pinto:** You feel sorry now.

**Mark Bates:** Sorry, everyone.

**Brian Ketelsen:** Yeah, it might have been a mistake.

**Mark Bates:** So this is why we can't have nice things...

**Brian Ketelsen:** It is. Mark is why we can't have -- well, actually, Mark is what brings the love back to Go web development, so we're gonna let it slide this time.

**Erik St. Martin:** It's a love/hate relationship.

**Mark Bates:** Yes. I always joke, my parents recently moved in down the street from me...

**Brian Ketelsen:** What?!

**Mark Bates:** Yeah, don't even... \[laughs\] So they leave down the street from me and I say it's like living in the sitcom now "Everybody hates Mark." \[laughter\]

**Erik St. Martin:** So now I know the story of how you lost power. They're like, "Nobody needs more Mark." \[laughter\]

**Mark Bates:** Exactly.

**Erik St. Martin:** "Shut it down!" So we should probably end the madness... Definitely thanks to everybody who's on the show. Thank you, Mark, for coming on the show. Thank you to everybody who's listening live and will be listening to this when the recording has released. If you aren't currently, we are at GoTime.fm, we are @GoTimeFM on Twitter, and there is also a GoTime FM Slack channel. If you subscribe, we will have a weekly e-mail starting up sometimes. If you wanna be on the show or have suggestions for people on the show, github.com/gotimefm/ping.

Huge shout out to our sponsor StackImpact for sponsoring the show, and with that, bye everybody!

**Brian Ketelsen:** Goodbye. Thanks, Mark!

**Mark Bates:** Goodbye, thank you guys.

**Carlisia Pinto:** This was fun, bye!

**Mark Bates:** Bye!
