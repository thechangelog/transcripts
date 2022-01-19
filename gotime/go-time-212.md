**Natalie Pistunovich:** Hi, everyone. Another year of GopherCon. It's so exciting to see everybody online again. I hope you had a wonderful first date, and I hope you had lots of fun in the workshops yesterday for whoever attended. My co-host for today is Angelica. Hi!

**Angelica Hill:** Hi!

**Natalie Pistunovich:** Joining from the overseas of New York.

**Angelica Hill:** Yup. But soon to be flying to London next week. Finally.

**Natalie Pistunovich:** Oh. Exciting time to fly.

**Angelica Hill:** Yeah.

**Natalie Pistunovich:** And we are joined by three wonderful gophers who have amazing side-projects that are written in Go. We have Sebastian Spaink, who is a software engineer at InfluxDB, and also -- you know what? We'll tell about your wonderful project right after the intro. We'll keep it interesting. For those who have not attended the talk, or your talk has not been aired just yet, because there's a few more days of GopherCon ahead of us... Sebastian, where are you joining us from?

**Sebastian Spaink:** I'm in the Microsoft Studios, here. So I'll be doing my talk here tomorrow.

**Natalie Pistunovich:** Oh, wow.

**Angelica Hill:** Because everyone knows where the Microsoft studios are.

**Sebastian Spaink:** \[03:58\] Enter Redmond, Washington.

**Natalie Pistunovich:** It's on the internet. \[laughter\]

**Sebastian Spaink:** Yeah.

**Angelica Hill:** Helpful.

**Natalie Pistunovich:** Washington. Cool. Daniela Petruzalek, you are joining us from my side of the overseas, from Europe. But not from the E.U.

**Daniela Petruzalek:** Yeah, so I'm currently based in the U.K. I'm based in \[unintelligible 00:04:15.28\] That is the South coast of England, basically. But yes, Europe. Team Europe, yay!

**Natalie Pistunovich:** Yay! And you're a product owner at JPMC, and you're a Google Developer expert for Go.

**Daniela Petruzalek:** Yes, yes. As people say. \[laughs\]

**Natalie Pistunovich:** And we have Linus Lee joining us. Linus, you're an independent software engineer, and you're working on creative tools. Welcome.

**Linus Lee:** Yes, I am. Thank you. I'm also in the Microsoft Studio. I'm across the hallway from Sebastian, but it doesn't look like it, through the magic of studios.

**Natalie Pistunovich:** Yeah, it looks completely different in your background, but the sound quality is amazing. So it's great of you all to join. We are here to talk about your fun projects.

**Linus Lee:** Let's do it.

**Natalie Pistunovich:** Right, Angelica?

**Angelica Hill:** We are, we are. But before we dive into your fun projects, do you wanna hear a little bit about when and why you started using Go? Where did it all start for you? Maybe, Daniela, you could dive in?

**Daniela Petruzalek:** Sure, sure.

**Angelica Hill:** How did Go come into your world?

**Daniela Petruzalek:** It's a fun thing - I used to like to tell this story, that I came for the community, and stayed for the community... Because I started with Go - it was a few years ago...

**Natalie Pistunovich:** We see what you did there...

**Daniela Petruzalek:** Yes. \[laughter\]

**Angelica Hill:** Good one!

**Daniela Petruzalek:** Nice catch! A few years ago... Anyway. Basically, back in the days I used to work at a company in Brazil, and they were heavy users of Go. I was getting engaged with the community in other languages, like PyLadies and other groups, and actually they asked me to help organizing a women's group, basically a Women Who Go chapter... And I didn't know what Go was about, to be honest. I was just helping to organize the community. Then I got the opportunity to go to GopherCon Denver, and then the magic happened. I was simply in love with the language. Everything I did after that, I was trying to use Go in some way or another.

**Natalie Pistunovich:** So attending the same GopherCon that you're attending now. This is how it all started. Wow.

**Daniela Petruzalek:** Yes, definitely. So it's a very emotional thing to be back here and contributing to this amazing community... Yeah, it has a special place in my heart.

**Angelica Hill:** Well, for all of us. How about you, Linus? How did Go come into your life?

**Linus Lee:** Yeah, so I actually started out in the web world. I learned to program doing JavaScript and HTML web stuff, and then Go was sort of my way to figure out how to do lower-level (I guess) backend programming. I had dabbled into things like Python and Ruby before, but I wanted something where I could have a little bit of a lower-level control over what my data structures look like, and things like that, without having to learn -- I guess the only viable option back then was C and C++, which were great languages on their own, but more complex than I could fit into my brain at the time, and Go was sort of this nice middle ground, where there were things like a good garbage collector, and it was dynamic enough where I could wrap my head around it, but still let me write programs that I wanted to, that were fast enough and small enough, and things like that. So that's the way that I got into it, and I've since stuck with it for all the things that it offers.

**Angelica Hill:** Awesome. How about you, Sebastian? How did you come to us?

**Sebastian Spaink:** Yeah - well, it was love at first sight. The moment I saw that Gopher mascot, I was like, "Let's do it. This is it. This is the language for me."

**Angelica Hill:** Me too! I had no idea what it was, and I was like, "I just... That Gopher."

**Sebastian Spaink:** Right. It was all I needed to convince me. Before, I was working with Python and C++, and it was kind of the same thing, where it was just like -- it felt a bit much doing the C++ and C stuff, and then Python was good, but it felt a bit messy, and I really liked Go's opinionated way of doing things... And then I started using it. I've been working on it professionally now, but before it was just projects stuff.

**Angelica Hill:** And no one really wants a Python plushy. A Gopher is so much nicer. \[laughter\]

**Sebastian Spaink:** Right.

**Linus Lee:** Before I came to the conference I was talking to one of my co-workers and he asked me, "You're going to this GopherCon thing... What is GopherCon about?" I was like, "You know, it's for all the people who love gophers. We just talk about gophers for four days."

**Natalie Pistunovich:** \[08:09\] Not showing off or anything, but here's the one from Singapore.

**Angelica Hill:** I was gonna ask. That's what I was just about to ask; I was being like, "I've not seen that purple, and I want it."

**Natalie Pistunovich:** It has a \[unintelligible 00:08:17.04\] in Singapore.

**Angelica Hill:** It's gorgeous. Okay, awesome. So we've heard about your start...

**Natalie Pistunovich:** Yeah, are you all still working in Go now? And how long, actually, have you been doing this?

**Linus Lee:** I could take a stab at it... So I've been using Go in one form or another for at least 2-3 years, I think, between when I wrote my first Go project... I've written Go professionally a little bit; I've squeezed into some projects here and there that aren't what you'd call production products, but that are infrastructure, or testing services, or things like that, just because it's a nice thing that you can build.

One of the nice things about Go is that we value stability a lot, so if you write a thing and it's not maintained daily for a few months, it doesn't break over time... But most of my usage of Go has been on side projects, on things like the thing that we're gonna talk about today, but also other things, like little chat clients that I've written... Learning exercises.

**Daniela Petruzalek:** Yeah, I can go next. Unfortunately, I'm almost like -- I'm trying to think of the best word \[unintelligible 00:09:16.11\] barely wrote any kind of Go code in production. I spent about (I don't know) one year back when I was working at GoCardless, but that's about it. And most of my "career" in terms of Go development is basically side projects and things that I like to do, and tutorials, and things, as you already know a little bit about... But yeah, I haven't been doing a lot of Go, unfortunately. I was trying to find my way into working with Go, but for some reason it didn't happen.

**Natalie Pistunovich:** That's super-interesting. That is unexpected, but that's cool. Sebastian, how about you?

**Sebastian Spaink:** Yeah, I guess I've had the good fortune of being able to work with Go now professionally for the past year, InfluxData, working on the Telegraf project. It's been fantastic. Because before that it was also just kind of dabbling with it, and just whenever I could, for projects. Technically, for a half year, I "professionally" worked with Go, but just because I was just doing it on a project that nobody else wanted to work on... But who knows what that ended up with. But now I'm doing it professionally with Telegraf, and it's been fantastic. An open source project written in Go... It's everything I could dream of as far as a career.

**Break:** \[10:29\]

**Natalie Pistunovich:** Speaking of career, Sebastian, would you like to tell us about your fun project in Go?

**Sebastian Spaink:** Awesome! Did you 3D print that?

**Natalie Pistunovich:** For everybody who is listening in but not watching, I have a little 3D printed gopher that I received from a colleague in a previous company... And he 3D printed it. I don't think he planned to print gophers, I don't think his team works in Go, but he is a fan of the mascot, so that was a nice gift.

**Sebastian Spaink:** Yeah, that's awesome. I should have brought some myself, that I 3D printed... But unfortunately I've got nothing to show off here; I guess you'll have to wait for my talk tomorrow. I've got some screenshots of them. So during my \[unintelligible 00:12:36.27\] was 3D printing, and the first thing I did was I created a thermo-detonator prop from Star Wars, and then used TinyGo to make the LEDlight shine and play some audio... So that was pretty fun. And then I kind of started looking at other ways I could involve Go with 3D printing.

So they've got this whole thing called OctoPrint that helps monitor and remotely-control your 3D printer, and I was kind of looking at ways to extend that using Go. But yeah, it's been fun. It's not like I'm writing the firmware for the 3D printer or anything, as far as Go was concerned; it was kind of like building around it. And also, 3D-modelling gophers to 3D print as well. So that's the main thing I was doing there.

**Natalie Pistunovich:** Yeah, that's not an obvious choice, to choose Go for 3D printing, for the modeling.

**Sebastian Spaink:** Yeah, which is actually pretty cool. I wasn't aware that you could do it either, because I was mainly using Blender and common open source projects for 3D modeling that use user interfaces... But there is a package out there that you can create 3D models using Go, and yeah, it was pretty cool. It's just like primitive shapes kind of glued together... I'll show a screenshot of that tomorrow, but you end up with a very round-looking gopher, because it's just a sphere of other primitive objects glued on it... But yeah, it's all written in Go. So a gopher written in Go is possible. And the open source package I used was called -- I forgot the user's name, but sdfx, I believe is, if you look that up... Yeah. Model your own gopher with it.

**Linus Lee:** \[unintelligible 00:14:08.22\] And the sphere is just the simplest shape to write a ray tracer for, so you start just building scenes our of only spheres, and everything -- your ground is just a gigantic sphere with an infinite radius, and you're building \[unintelligible 00:14:26.11\] on a giant sphere. What does it actually look like to build a model with Go? Are you outputting it to a file? Are you talking to an API for the printer?

**Sebastian Spaink:** Yeah, so what we output is an STL file, and it's like the standard format file that you're gonna do in 3D printing. It's a file format that describes the geometry like a bunch of triangles... It's like magic, but they use something called signed distance functions to define the primitive shapes in the code, and then output that to the STL file, which you can then slice into G-Code for the 3D printer to print out.

**Angelica Hill:** So how many times did you have to reprogram it if you actually got a beautiful gopher? Because I would assume you had a few interesting-looking shapes, that may have resembled a gopher, but may not have been a gopher.

**Sebastian Spaink:** Yeah, making its eyes and its pupils look like an actual gopher shape - that's tricky. But I think I got something that looks like a gopher. You've got your iconic mouth and teeth, and then you're like "Bam! It's a gopher. Done." It's a sphere with eyes, and a square, but that's all you need. The beauty of the gopher transcends all shapes.

**Daniela Petruzalek:** I must say, I really admire anyone that can do 3D modeling. This is such a thing that my brain can't process. That's why when I go to my hobbies, I only do 2D things, because my brain just can't process a third dimension. I really admire that. Looking forward to seeing your talk, how it works.

**Sebastian Spaink:** \[15:57\] Yeah. I did cheat and use Blender to make it sexier-looking than the spheres, but... Yeah, it's definitely my first thing I've ever 3D modeled before. Usually, I'm also just working on the 2D space; it's definitely more comfortable.

**Angelica Hill:** And did you use Go because it was the best language to do this, or because you write Go anyway, or did you think about using other languages, try it out, before settling on Go?

**Sebastian Spaink:** That's a good question. No, I chose it because I wanted to write in the language. Because technically, Python is what OctoPrint, that software I mentioned, is written in, and that's the ecosystem... There's a lot of Go community work around it, but I was like, "No. I'm gonna against the stream, do it in Go, regardless if it's the best choice or not. I'll find out at the end."

It's pretty nice to work -- you know, just all the benefits of using a Go binary that you can send around easily, and don't have to worry about Python versions, and setting virtual environments...

**Natalie Pistunovich:** Interesting. You can cross-compile to all the different 3D printers.

**Sebastian Spaink:** Right.

**Linus Lee:** Is there anything that using Go allows you to do that you wouldn't be able to do with Blender? I guess you could programmatically generate a bunch -- like, if you want \[unintelligible 00:17:04.24\] you can programmatically generate it... But yeah, what have you experimented with it that would be hard to do in Blender or another piece of software?

**Sebastian Spaink:** I am pretty much a novice as far as 3D modeling is concerned, so the reason why I used Blender to finalize the gopher -- because I couldn't really figure out how to make a nice hourglass shape for the gopher... You know, that perfect body, so it wasn't just to spheres attached to each other... \[laughs\] But I guess the benefit of using Go for it is the fact that you can now just send that piece of program to somebody and they can adjust it. It's easily shareable.

I mean, right, you could send your blender files, share those as well, but I felt like the learning curve was also a little bit easier; the fact that it is just Go, and just defining shapes, while using the user interface for Blender is tricky. There's definitely a steep learning curve there. Have you used it before? Have you done 3D modeling?

**Linus Lee:** I have personally not. I've looked at it... I had some friends -- my roommate in college was a mechanical engineering major, and he dabbled in it, he would make some stuff for me occasionally, and I always thought it was cool. But again, because of that learning curve, when you look at someone's computer when they're doing it and you're like "I'll never be able to do that." That looks like a professional power tool kind of interface, and that scares you off a little bit. But if it's just a Go program, maybe I'll give it a shot.

**Sebastian Spaink:** Yeah, I definitely recommend it.

**Angelica Hill:** I feel like I need to go buy myself a 3D printer now...

**Sebastian Spaink:** I also recommend that.

**Angelica Hill:** ...and give it a go. \[laughter\]

**Sebastian Spaink:** Yeah, and there are surprisingly consumer-friendly as far as the price and the setup is concerned. You'll need space, I suppose, is the biggest thing. And patience.

**Angelica Hill:** I'll just put it right in the middle of my lounge. It will be the centerpiece... And I'll just continuously churn out gophers.

**Sebastian Spaink:** That's the ideal setup. That's how it works on my house.

**Angelica Hill:** Yeah. \[laughter\]

**Linus Lee:** A thing that you alluded to earlier, from another question, was the debug cycle, which I imagine is a little slower than just running the code. I guess you can run it and look at the model inside Blender, or something like that... But do you ever have like a hardware debug cycle, where you print it and you're like, "Oh, this looks bad", and then you have to rewrite the program?

**Sebastian Spaink:** I kind of missed that question. Yeah, that's right... I don't know if there's a better way of doing it than just building it and running it and being like "Well, it's a couple millimeters to the left", and then scoot it over. A big advantage of using Blender, if you use their interface, you can just scoot it over, and you can see where it's supposed to land... But in the world space, I was definitely just guessing the coordinates. I'm definitely gonna mention that in my talk, where it's like, "These numbers are made up." This was just me hoping for the best, and they ended up in the right spot... So yeah.

**Angelica Hill:** Trial and error.

**Sebastian Spaink:** Right, yeah.

**Daniela Petruzalek:** I had an interesting experience with that when I was writing some games. Also, you do a lot of guessing in terms of positioning things... So in the end, I ended up using Steve Francia's -- I don't remember now if it's Viper or Cobra; that library that helps load the configuration dynamically... So basically, every time I had something I need to set up a different thing on the screen, I used the dynamic configuration and it was reloading JSON files on the fly... And you just couldn't see anything, because the renderer was just updating the screen every single frame. I was just kind of automating my trial and error with dynamic configuration. I don't know if you thought about something... I'm not sure how fast is rendering, but in my case it was just one frame, so that was pretty fast.

**Sebastian Spaink:** \[20:18\] Yeah, it was pretty quick in the sense that there was like -- I was using the Slicer program to get it to the 3D printed format, and I just... You can reload it in there. It felt pretty hacky, but -- yeah, I'm sorry; what were you gonna say?

**Angelica Hill:** I was gonna say "Let's hear more." Let's go from 3D to 2D. Daniela, I would love to hear a little bit about -- you talked about some of your in-the-weeds, how you got it working, how you tested it... But what is your project, and how did it come to be? I would say \[unintelligible 00:20:44.08\] I have a very, very special place in my heart for this project, because when I was but a young gopher... Not even. When I was but a young newbie, dweeb, looking at the computer science world for a language that fit, I went to Gotham Go and saw you do your talk on this side project. And it got me so excited I went home and spent the entire weekend building it. And that was one of the main things; I was like, "This is my language. This is so fun. I'm ready. Let me be a gopher."

**Daniela Petruzalek:** Right. I love this attitude, and I'm really happy that it had such an influence \[unintelligible 00:21:21.23\] from the beginning, since people don't know my project yet... Basically, I wrote this tutorial which I call Pac-Man From Scratch, or Pac Go for short, because it's not a man, it's a gopher, maybe... And the idea is to rebuild the classical game of Pac-Man only using Go and the standard library; no external fancy packages. And in order to abstract the drawing function - because this tends to be the most complex thing in games, how you render it to a screen, and I didn't want to expose people to this level of complexity... We ended up using the terminal as your screen. And Cisgo supports Unicode. You can actually bring emojis in the terminal. So the entire board of the game is rendered using emojis, and using some clever tricks with \[unintelligible 00:22:11.15\] escape sequences. You can put colors, and draw walls, and things like that...

There are some things that Go makes really easy to do, especially -- for instance, if you want to separate your input handling from the main program, you can use a goroutine, and channels... So things like this in other languages - I tried to do this before in C++ and others, and you need to learn threads, you need to learn synchronization, all these more advanced concepts, but Go makes it really easy for a beginner to have a look, "Oh, yeah." Maybe you don't even fully understand what a goroutine is or a channel is, but it's enough for you to get started and do something.

The whole idea of this project was to give the community something in terms of a tutorial, a starting point, a bit more interesting than building APIs. Because I know, APIs -- we ended up doing this for work. Why not having something more fun, that has visual feedback, so that you can see things moving on the screen? I don't know, for me it's magical, but maybe that's because I also -- the only reason why I'm in this industry now is because I love games, and I always wanted to work with games, and that was kind of like my "Oh, yeah! I've never worked with games before, but this is my opportunity. I'll make something with games and Go." That's how it started.

**Angelica Hill:** Yeah. And I think the beauty of it is exactly what you've just said, that people who are learning Go, whether from another language, or completely it's their first language, you go through that phase you're like going through all the Go tutorials, and you're trying to do this little app, and you're trying to print Hello World... But then you hit this ceiling where you're like, "What do I do now? I know the basics. I wanna build something that feels like an accomplishment, that feels exciting, that feels like "Oh! This is something I wanna show my friends, show my family, and be like "Look, I can code now!"

\[24:02\] And this is fun, it's colorful; as you say, it gives you that visual feedback, and it gives you, as a beginner, that feeling of accomplishment, and like "I did this. I've made it through that tutorial, and I accomplished this thing."

I think the beauty of how you framed it is that you've really paid attention to making sure it is truly step by step, and it really does guide everyone through why you made the decision, how you did it, you provided the code so that you can look through... I'm waiting for your next game to come out. What's going on...?! \[laughs\]

**Daniela Petruzalek:** Yeah, I've been a bit busy with life, and things... Definitely, there are more things coming your way, yeah. Stay tuned. I did actually a talk at GopherCon UK about my next project, which now is a card game. I'm rebuilding an old '80s card game that -- I can't even say it was popular where I came from. It was just the game we had when we were a child and we played that game.

I couldn't find an international version of it. I only had a scan of the cards that I used to reference the game, but basically, I'm rebuilding it. But now I'm trying to be a bit more professional, if I can say that. Definitely, I can say that. Nothing close to being a professionally, but... I'm using this library called Ebiten, which is a proper game development library within Go by Hajime Hoshi. This guys is amazing. Thanks for writing Ebiten.

Yeah, so this work in progress - it's not very pretty now, but I have a functioning prototype, and the code is open source, but I didn't advertise it that much, because the game is ugly now. It's not very beginner-friendly. It was just kind of like a proof of concept, trying different things, learning everything as it goes... As it goes, I did that again. \[laughter\]

**Angelica Hill:** It's hard not to say it. It's very easy to call into the pattern. So as you've been iterating on this project, as you've been building, and as you've been delving more into the world of games and programming for games, is Go a good language for these kinds of projects? Or was it that you already liked Go, and it was fun? Or in fact is Go interesting, good to play with, but there are other languages that may serve the gaming function better?

**Daniela Petruzalek:** I think Go is a very good language, with some asterisks, some side-notes maybe... Because the traditional language for writing games if you are old-school like me is C++, and C, and things like that. I tend to see Go as an improved version of those languages, because it abstracts so much. You don't need to worry so much about memory management... You still need to worry a little bit about memory, but not as much as you had to in the past with these other types of languages. Of course, they also evolved, but I really like how Go is pretty straightforward, it has a simple syntax, very consistent across all different features of the language... It gives almost that feeling of a scripted language. It's very simple to do simple things, and I think that's the build of it. It also becomes very productive.

The problems come -- because Go is traditionally a systems language, it's not very popular in the gaming industry, you don't have a lot of library support, and things like that. The basics you have - you have SDL bindings, you have Ebiten and a few other gaming libraries, but it's not widespread, so you don't have a large community that can help you support it. But essentially, everything that you need to build a game, you have there. I love the language, and I think that's almost like a -- Sebastian said that as well, maybe Go was not the best option... But that was the language I wanted to work with, so that's kind of why I decided.

But overall, I think that you can do good games with Go, and even Ebiten - they are just recently publishing their first game on Nintendo Switch... So you can see, it can be used for real games, like real commercial games.

**Break:** \[28:05\]

**Natalie Pistunovich:** Daniela, I'm so very curious, as somebody who knows nothing about game development - when you say "gaming libraries", what kind of tools do they give you? What do you need in a gaming library?

**Daniela Petruzalek:** A lot of things, actually... But I would say the most basic ones are how do you handle inputs? When you're writing a game, you don't really want to care if the player has a keyboard, a gamepad, or anything else. You don't want to worry about specific drivers for different types of inputs. You want a game library to give you this for free. Once you know "key was pressed", you do your mappings into the thing.

The second thing is drawing to the screen, another good example. You don't really care about the low-level part of drawing to the screen, you just want to say "plot my pixel there", and that's it.

**Natalie Pistunovich:** So like relative 10% down from the beginning of the screen, kind of...

**Daniela Petruzalek:** Yeah. And I'm talking only about 3D; and 3D gets way more complex, but... Scaling operations, rotation... The kind of transformations you can do in an image. And also, sound is a huge thing. I don't want to write a music player. I should get this for free from my gaming library... Things like that. Maybe sometimes you will have some kind of artificial intelligence processor that you can just write an AI as in a script, and the engine will load that script and control your enemies, and things like that. So this is kind of support... So you can focus really on the content creation. Because what makes or breaks your game is really not necessarily the code, it's the art, it's the sound, it's your assets. Actually, it's all about your assets.

**Linus Lee:** That resonates with me a lot, actually. I'm not a big gamer, but occasionally I've come across little \[unintelligible 00:30:35.23\] games that I thought were really beautiful and well done. At times, I've had the thought of "Oh, maybe I should try to build a game of my own", and the thing that I always bump against -- so I can write the logic, I can probably learn to use one of the game engines and try to make something that's interactive and do the things that I wanna do, but the things that make a video game really compelling is all the art, and all the sounds, and the design... That requires making 3D models, which as we discussed, is difficult, and doing art, and having -- even just building a storyline behind it, and all the character design, and things like that... That's a whole other art that's outside of software.

**Daniela Petruzalek:** Yeah. There's a huge iceberg of game development that's about -- the presentation is just a thin layer, but you have assets, in terms of art, sound effects and music. It's also -- it either kills your game, or it will give amazing results.

But also, the whole part about game design, of how your game mechanics work, like what are the winning scenarios, what are your objectives, how can you make that thing rewarding for the player, so they will be engaged and really enjoy playing your game? How can you balance your game? This is a decent amount of challenge, plus reward... So these are the hard parts, and also, my brain is kind of -- I'm really bad at this, and I'm trying to get better, but also partnering with the right people can definitely help a lot.

**Natalie Pistunovich:** I have a great idea for your game, Daniela, to make it pretty rewarding... You can use Sebastian's work and 3D print the cards. \[laughs\]

**Daniela Petruzalek:** I think that's a great idea.

**Natalie Pistunovich:** \[32:10\] You know, you always feel paper cards in the hand, and once you'll feel more chunkier, reminding of like a phone, it will be very interesting. You'll have to pay more attention when you do that.

**Sebastian Spaink:** Revolutionary.

**Natalie Pistunovich:** \[laughs\]

**Angelica Hill:** Talking about something that's very challenging, engaging and rewarding... Linus.

**Linus Lee:** Yes.

**Angelica Hill:** Let's hear a little bit about your awesome project.

**Linus Lee:** Yeah, so my project is called Oak. It's a toy programming language, is what that means. It's a programming language that you can use to write things like web servers, and little apps, and command line interfaces, and things like that... But it's a toy language, so it's not something that you're gonna use at work, or to build a production service, for lots of reasons. But it's dynamically-typed scripting language, it looks a little bit like JavaScript, it works a little bit like Lua if you've used it... But it's a Go program. So it's a language that's written in Go. And what that means is that when you run the Oak CLI to start up a repl, or to run a file, that thing that is running the file is a Go program. But the program's source code that it's running is written in a language that I made up, called Oak... If that makes any sense. It's a little bit sort of recursive.

So part of it was designing the actual syntax and semantics of what the language is gonna be able to do, how it works, what are the types, what are the values, what are the things you can do, how do you define functions, and things like that... And the other part is actually implementing, in Oak's case, the interpreter, that actually takes the syntax, the program you've written, and does the thing that the program is supposed to do... And also, incidentally, other things, like telling you errors, and concurrency, and lots of other things that you might encounter as the interpreter.

**Natalie Pistunovich:** How did you come up with the idea to do this in Go? Did you say "I want to learn Go, and I want to learn Go by creating a new language"?

**Linus Lee:** It was a mix, actually. So before Oak, there was Ink, which is the conceptual predecessor to Oak. They're very similar languages, but Ink was the first toy language that I made. I made it after having gone through a tutorial on how to make a basic Lisp interpreter, and I wanted to make something that was a little more usable, and had the syntax that I wanted... Because everyone, always, when they first learn programming, they're like "I really like this language, but I wish this keyword said something different", or the symbol was a different symbol... And it was my chance to play God with my own language.

At that point, I was mostly proficient with only the really dynamic languages, like JavaScript and Python, so I needed to learn a compiled language that was lower-level, to be able to build an interpreter that was actually usable.

Go is not the typical language that you would use for such a task. You usually use like C++, or more increasingly common is Rust, or other languages like that. But as I've noted before, it was harder for me to wrap my head around those at the time, than it was for me to learn Go. Go was low-level enough for me to be able to build an interpreter. Ink was my first learning Go project, and simultaneously I was also trying to learn how to build a programming language.

**Sebastian Spaink:** That's super-cool. Has anybody made anything real cool out of your programming language Ink?

**Linus Lee:** I have... And then other people have used some of the stuff that I've built. Actually, one thing that's relevant for the Go community is - if you guys are familiar with the Go By Example website, where it sort of walks you through Go, and gives you different examples of how different parts of Go works... A guy named Andrew -- man, his name is escaping me now. But Andrew-something - we've talked on the phone before, but he made an Ink By Example site. And just as Go By Example is written in Go, and Go compiles the website, Ink By Example is written in Ink, so it compiles itself... And Ink has its own syntax highlighter, and code formatter, and things like that.

So the website is inspired by Go By Example, but it's a website for Ink that someone else made, that isn't me, which was super-cool to see that there's another user for the language. And then on top of Ink, I've made a bunch of my own personal apps, like Twitter clients, and notes apps, and things like that, that I use day to day.

**Sebastian Spaink:** That's very cool.

**Daniela Petruzalek:** You mentioned Lua in your opening statement... I was just wondering, because Lua is very common in the game development community, for AI scripts.

**Linus Lee:** Right.

**Sebastian Spaink:** \[36:05\] Would you see your language could be used for the same type of use, like writing scripts for AIs, or things like that?

**Linus Lee:** Yeah, that's a great question. So a lot of the domain of tool languages is actually fr embedding in other programs, and Lua is a great example of that. I think there's some specific things about Lua that make it really great for embedding in a game, specifically. The things that come to mind are -- Lua is a really small language, it's written in C, it's pretty readable, so it's fairly easy to embed in terms of just like the technical work involved, to embed it into another program.

The other thing that makes Lua unique is that it has features of the language and of the interpreter that make it easy for you to fit it into another larger program. So Lua has -- I forget what it's called, but it has like a type that is supposed to be like an opaque type, that just wraps something else from the host program... So if you have a game, and you have like a C struct that represents a character, or an object, or something, you can just wrap that and expose it to Lua with some APIs. It's also fairly easy to define foreign function interfaces for Lua code so people could call C functions... And I think that's what makes Lua really great for game development.

Oak, in theory, has those things, minus the C FFI, but because it's embedded inside Go, anything that includes Oak has to also include the Go runtime, which makes it a little heavier, and is more opinionated.

**Natalie Pistunovich:** How can the community contribute to these languages, to Ink and to Oak? Are you looking for documentation, code contributions...?

**Linus Lee:** Yes, for sure. So one of the reasons I made Oak was that I made Ink, and then I used it for a couple of years to build stuff... And it was usable, because I made stuff with it; by definition, it was usable. But it was not very good. The language was kind of tough to use, the interpreter sucks a little bit because of the particular ways...

When you learn to build an interpreter in school or in a course, there are specific things that you spend a lot of time on, like parsing and compiling... And there's things that you don't spend as much time on, that it actually turns out are really important and hard to get right... And one of those things is error handling. If you're trying to get other people to use your language, most of the time they're gonna be spending initially is going to be writing incorrect programs and getting errors. To do error reporting correctly, you have to gather a lot of information about the runtime of a program, like where it's happening, what's causing it, and be able to give users really helpful errors. And none of the tutorials cover that properly. Mistakes like that accumulated over time, and eventually I went and wrote Oak, and fixed a lot of those. Ink isn't as usable as Oak. If you wanna check things out, I'd check out Oak. I'm still sort of tinkering away at it as a solo project, but if \[unintelligible 00:38:23.00\] you're welcome to try it. And then if you have any problems you find with it, or bugs, filing those would be super-helpful.

If you have opinions on how Oak should work differently - I have my own opinions, and the point of Oak is to manifest them... But if you have your own opinions, it's a Go project; it's not that complicated, you can probably read through it, and come to my talk to figure out how it works. And it's only a few thousand lines, so you could fork it, make it into your own, change all the keywords and all the syntax, and make your own language out of it, too.

**Angelica Hill:** That's awesome. Tempting. How about Daniela - if people wanna help, wanna get involved, wanna \[unintelligible 00:38:55.26\] how do they do that?

**Daniela Petruzalek:** So I have the GitHub repo for PacGo is github.com/danicat/pacgo. We already had actually a lot of contribution from the community. I think I've built it to step eight, and I think we now we have step ten, or eleven, or something like that. So people definitely were inspired and started creating new content for it. It's a bit abandoned now, from my perspective. I wish I could have supported it better. So things like Go modules, testing, are some topics that were not covered in the traditional workshop... But I think if people are willing to contribute, that would be amazing. A chapter on Go modules, a chapter on testing, things like that. That would be great.

**Angelica Hill:** Sebastian, how do we contribute? How do we help? How do we get involved?

**Sebastian Spaink:** Yeah, I guess I'm mostly thinking of using Oak to write a Pac-Man game now... \[laughter\] But yeah, I guess I've got my gopher model uploaded, so you're welcome to download and 3D print that... That helps me, just seeing more gophers out in the world... But then part of the thing I worked on was a plugin for the Telegraf project that I'm working on now as a full-time maintainer, to interact with OctoPrint. And that's just an open source repository, you're welcome to do whatever you want with it; it's written in Go. Maybe extend it, add more features to it.

**Angelica Hill:** Awesome.

**Natalie Pistunovich:** Cool. Well, that's inspiring, and also gives us all ideas on what can we do in our free time. Okay, time for Unpopular Opinions.

**Jingle:** \[40:27\] to \[40:43\]

**Natalie Pistunovich:** Okay, so you know the rules... You have the stage to tell us what is your unpopular opinion. It does not have to be about your project, about tech, about anything at all. It can be about any theme. And we will then go and ask on Twitter to see if your unpopular opinion is really unpopular, or yes-popular. Linus, would you like to start?

**Linus Lee:** Sure, I'll take it. My unpopular opinion is that -- it's actually probably a more popular opinion, but the way that I'm phrasing it I think is important... I think it's an accident of history that we don't expect every computer user to be able to program. I've been watching a lot of... And this is gonna reveal my age now, but I've been watching what I consider to be older TV programming about computers - computer programs that were coming out in the mid '80s, early '90s - and it's kind of astonishing how all those programs sort of expect the user to buy the program and then use macros or scripts to program it to fit their use case. Things like databases, or word processors... There's tons and tons of support for just -- you buy the thing, and then to make it useful, you program it. And to a certain extent, all these consumers of software expect it to program a little bit and know how computers work and customize it... And it's a little sad, I think, that we don't expect that of users anymore, and we expect them to just take the product and use it.

I wish there was more software that expected and taught people to think in terms of programming and try to customize their software to work the way that they want it to.

**Natalie Pistunovich:** Okay. Sebastian.

**Sebastian Spaink:** Yeah. I guess my unpopular opinion is I think that if your open source project has a hand-drawn logo on it, then it's a good open source project, and it can be trusted. So you can just it by the cover.

**Natalie Pistunovich:** Cool. Hey, Daniela...

**Daniela Petruzalek:** Okay, I think my unpopular opinion will make me the most unpopular person in GopherCon this year... Sorry, guys, but I don't think Go really needs generics. \[laughter\]

**Natalie Pistunovich:** What a mic drop to the end of the show. Thank you, Daniela. We knew you'd say that, maybe... That's why we asked you to go last. But yeah, that's a brave choice.

To wrap this up, thanks everyone for your interesting insights and sharing about your fun projects, and for talking about that at GopherCon. Thanks everybody who tuned in and enjoyed the talks, and see your around on Discord.

**Linus Lee:** Thanks for having us.

**Sebastian Spaink:** Yeah, thanks.

**Angelica Hill:** Thank you to our awesome host, Natalie. Awesome as always.
