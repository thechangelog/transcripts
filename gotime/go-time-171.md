**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and I think you should be able to paste without formatting by default. I don't think I should have to contort my hand into some kind of copy and paste claw in order to get the text not matching the source formatting. I've never wanted it.

**Mark Bates:** I believe that same key gesture is actually the EMACS one for Save.

**Mat Ryer:** Oh, well then that's just a disaster waiting to happen, isn't it? Luckily, I use VS Code. Well, that voice you heard preemptively, before his introduction, which is strictly against the rules, but there we go, to give you a sense of the man, it's -- oh, hi Mark! It's Mark Bates. Welcome back!

**Mark Bates:** The man, the myth, the legend.

**Mat Ryer:** Yeah. Well, you're man, aren't you? Definitely. One of out the three--

**Mark Bates:** No, I'm definitely a myth, actually.

**Mat Ryer:** Oh, yeah?

**Mark Bates:** I'm all myth. It's just all a myth.

**Mat Ryer:** \[00:04:05.09\] \[laughs\] Well, hopefully we have some real people here, too... Let's meet them. We're joined by Wayne Ashley Berry. Hello. Wayne is a principal engineer at GoDaddy, and... Wayne, you're an artist, right? Welcome to the show.

**Wayne Ashley Berry:** Thank you for having me. Long-time listener and very excited to be on the show.

**Mat Ryer:** You're very welcome. What sort of art do you do?

**Wayne Ashley Berry:** I started drawing, and then I got into computer graphics, and it was all downhill from there... And that's actually what got me into programming in the first place, so... That's why I'm here.

**Mat Ryer:** Oh, wow... Very cool. Well, hopefully we get to see some of that; not on the podcast obviously, but maybe you'll share your Twitter handle in the show notes. We are also joined by Carl Johnson. Carl is a software engineer with a Ph.D. in philosophy, and is the director of technology for Spotlight PA. Is that right, Carl? Welcome to the show.

**Carl Johnson:** That's right. Hi. Thanks for having me.

**Mat Ryer:** No, thanks for coming. Today we're talking about //go:embed. This is a new thing that came in Go 1.16, and it lets you put files inside the binary. But why would you want to do such a thing? Tell us, somebody...

**Mark Bates:** Why wouldn't you wanna do such a thing?

**Mat Ryer:** Why is it useful then?

**Mark Bates:** Yeah, it's a great question. We've been doing it for years, in a variety of ways, so it's really nice that we finally have this. This problem of wanting to do this - and I'll get to why we want to do it - has been here since the very beginning... So this is my little preamble to say I'm super-excited for this release, and I'm super-excited for embedding... Because why do we wanna do it? We wanna do it for so many different reasons. The one that everybody usually talks about is web apps. If you wanna build web apps, what do web apps have? They have images, they have style sheets, they have JS, they have templates... And wouldn't it be nice if all of that was self-contained and we didn't have to have all those files on disk, and didn't have to manage that problem? And that's one of the reasons why; that's kind of the use case scenario.

When I first started doing Buffalo way back, I talked about how it was extracted from a real project... And embedding those files into that binary was part of that original project, because they needed to be able to ship one binary that had everything. So like I said, this was a problem we've had as a community. And this goes to any kind of application, but the canonical one is the web.

**Mat Ryer:** Yeah, so that's the point then - you get to put files that otherwise you have to corral and manage, and remember to deploy alongside the binary. You get to put them inside the binary. Is it just for deployment? It makes deployment easier? Is that really the main reason why you do it?

**Mark Bates:** That's certainly the biggest reason... Because again, over the years we've had different solutions that have made the problem either kind of cumbersome, or transparent. Some required you had to always compile in, and now that's a cumbersome thing, and you're doing that because you need that advantage of \[unintelligible 00:07:07.25\] deployment. Thankfully, in the new solution, like a lot of the other ones, is transparent...

So yeah, you wanna be able to deploy. Having that easy-to-ship binary. And whether it be to your web service or to your customers. You can just package one thing that has all your migration files... Just everything nice and tightly packed. It's just simpler and cleaner, it's just one thing.

**Carl Johnson:** Well, another example is the Hugo Static Site Generator, which was created by Steve Francia... That has internal templates. So it's a tool for creating your own website, and you give it your templates and tell it how to make your website. But it also has some internal templates. And right now, if you look at the source code for it, they have the HTML files in one part, and then they have a Go file that is essentially the exact same file, and it has like a comment at the top saying "Auto-generated. Do not edit." And they just have to keep them in sync, that whenever the internal file changes, they change the Go file to match it.

**Mat Ryer:** \[00:08:12.22\] So they probably have some kind of script or something that does that for them automatically, right?

**Carl Johnson:** Yeah. They have a go generate script that does that. So that's an example where the Hugo binary is just one file, it's just a single executable. You can get it for Mac, or Windows, or Linux, and it has everything it needs in it. And so then that means that they have to go through this kind of annoying build process where they take these templates that they wanna ship with it and turn them into Go code, so that they can put it into the binary.

**Mark Bates:** Yeah. Buffalo - same thing. Anything that does generation has their own templates that they need to ship, but it's a real pain... But that problem you were just talking about, about keeping those Go files in sync, was such a pain... Because if you think about it, the only way you can get those files in is you have to create Go files. And so you need to either keep those Go files constantly in sync - like you said, on disk - so that if somebody does a go get, they're gonna get the embedded files... Or you have to set up the expectation that if you want the embedded files, you have to run this build script to get those files. And that was a real pain, too... In this new system you don't have that. It's just like Go modules, much more streamlined...

**Mat Ryer:** So Wayne, have you used other solutions to solve this problem before //go:embed?

**Wayne Ashley Berry:** \[laughs\] Packer and Pkger as well...

**Mat Ryer:** Never heard of those... Those sound rubbish. What are they?

**Wayne Ashley Berry:** I think someone on this call might have heard of them...

**Mark Bates:** Yeah. And I'm sure the maintainer is happy that 1.16 has come out and doesn't have to maintain any of that anymore...

**Mat Ryer:** Well, that's true though, because you really don't now have to build anymore of these things again, Mark, right?

**Mark Bates:** Yeah, and it's not just me. Like I said, this is a problem the community has been facing for years. Go-bindata, Static, Gorice... The lists go on and on and on. And also just the ones that we kind of know about - there have been so many over the years... And I'm sure people have written their own.

**Mat Ryer:** I definitely have. I've done it where I just needed an HTML file, and I start with just having a const in the Go code... But then you don't get any help with the IDE, or anything... So then I had a separate HTML file, and then the little build script - I couldn't just do go build; I have to then run some other things first. It would do basically that thing that we talked about that Hugo is doing. But with //go:embed you can just use normal build toolchain, right?

**Carl Johnson:** Yeah. There's a saying in architecture that you should pave the grass -- I don't know, maybe somebody knows the saying better... But the idea is, if you have a campus of some sort, like a college campus or whatever, and you have different buildings, and you're thinking about "Where should I put the sidewalks for it?", well, one way to do it is you just sort of guess, "I guess people are gonna wanna go from building one to building three a lot, so let's build a sidewalk there." But another way to do it is you just put out a big, grassy field, and you leave that for a year, and then you come back and you see, "Oh, well people are always walking from building three to building four, and I can see that because the grass is completely worn over. I'm gonna turn that into the sidewalk."

I think the Go team has been really good about paving the grass -- I don't know how to say this, but paving the areas that people are actually using... Paving the footpaths - is that the phrase for it? Because they look at what are the real problems that gophers are having, and then they try to make it so that that Go tool can solve those problems.

We mentioned modules before - that was a real problem people were having, of like "How do we incorporate open source software into our programs, into a way where we know what version we're getting in and what versions are coming out?" and all that works...

\[00:12:02.02\] So this is another one where people have been doing lots and lots of tools over the years, including Packer, Go-bindata, and Static etc. the list goes on, and now we have it built into the Go tool. So I think for those of us who have been using those tools, it's very exciting to see it built in.

**Wayne Ashley Berry:** Yeah, this reminds me of when I started using Go... And you get this promise of a single toolchain. There's a built-in command for compiling, for testing... You get that single static binary that -- I've actually sent some binaries to people over Slack before... It's quite useful.

**Mat Ryer:** Hm. Instead of email, you just embed the message in a binary, just to use the feature... \[laughter\] It's a nice idea.

**Wayne Ashley Berry:** And you start using Go and then you realize "Oh, I actually need these HTML files, and I need these CSS files", and you start to lose sight of that simple deployment mechanism. Now we're back at that place where you don't need to figure out "Which tool do I need to use to embed files?" Everyone can use the same tool, you can have standards across projects, and it's that true kind of original promise of Go, that everyone's got these same tools that just work.

**Mat Ryer:** That's great. What about secrets? Should you use //go:embed for embedding secrets in binaries? Or do you have to just assume that people are gonna be able to still see them, see that content?

**Mark Bates:** I think you always have to assume that people can see everything. \[laughs\]

**Carl Johnson:** Yeah, if you're doing it as like just "I wanna send this off to my server", I suppose it would be fine, as long as you keep the binary secret. If you're shipping it out to clients, clients could easily decompile the binary and remove the secret and spread it on the dark web. So it's probably not a good use case for that. It just depends on exactly what the nature of the secret is.

**Mark Bates:** Yeah. And one use case that you could use it for, kind of a secret thing, is maybe an application that has the license built in for a particular client... Where the worst thing that they're gonna do is deconstruct the license to pull it out; but it's gonna be hitting as a license server anyway, so if they mess with it, it's just gonna break their binary.

**Carl Johnson:** Yeah.

**Mark Bates:** So that's one kind of a thing... Plus, you could have the Go tags that build the binary to that client's license model as well, right?

**Carl Johnson:** Yeah. A similar issue that I've run into is trying to include the build version in a binary... So there are a couple of different ways that you can do that. One way is if you use the Go linker, if you send a certain command to it, you can say "Here's a string variable in my binary. Replace it with this." And so you can write a little script that says "When you build my binary, replace version string with the git hash that I want to have in there." The problem with that is that now you're really dependent on this script for anything to build your project, otherwise they just get like a blank string there... So another way that you could do this with Go embed is you could have the Git hash written out to a simple text file called version.text, and it can either be like a human-friendly version, like 1.2.3, or it could be a git hash or whatever you need, and then you could embed that in your binary when you're shipping it out, and the client says "It's not working for me", you can say "Well, run command-v and let me know what the version is, and then I'll tell you why it's not working."

**Mat Ryer:** So //go:embed works by putting files in... You can't, with go generate, run executables. You can't run a script, or anything.

**Mark Bates:** No. But what Carl was just saying, one of the things about //go:embed - and we haven't really talked too much about how it works, but it has basically two concepts... You can have a file system, which as you can imagine is a collection of files, and then you can also embed stuff directly to a string or a slice of bytes.

**Mat Ryer:** Oh... That's very interesting.

**Mark Bates:** So to Carl's example, you could have a version string just like you do now... But you can use //go:embed to embed the version number into that string or slice of bytes directly.

**Mat Ryer:** \[00:16:18.15\] Yeah, I guess you'd still need to run a script before to prepare that other file, but it saves you from messing around with those fiddly flags, the linter flags or the linker flags that you have to pass in.

**Wayne Ashley Berry:** Yeah, and the nice thing there is that you'll get a compiler error if the file that you expect isn't there... As opposed to ldflags or some other hacky solution where sometimes you just get a silent error, and then you ship the binary with no vision information in it at all.

**Mat Ryer:** Yeah, that is very good. Someone needs to write a blog post about the modern way of solving that problem. I do it every time; I do it using those ldflags.

**Mark Bates:** That's how I've been doing it for years...

**Wayne Ashley Berry:** Yeah, same. \[laughter\]

**Mat Ryer:** I set the default to def.

**Carl Johnson:** I read my own blog posts. I have to google myself and then find my blog post that says what the ldflags are, and look them up, and just copy-paste and hope that I got it right when I wrote it.

**Mark Bates:** Oh, I think everybody copies and pastes. We all have one that we wrote somewhere...

**Wayne Ashley Berry:** ...for ourselves.

**Mark Bates:** We just copy and paste it around.

**Mat Ryer:** Yeah.

**Wayne Ashley Berry:** We've actually got an internal command that generates the parameters for that flag...

**Carl Johnson:** Oh, great.

**Wayne Ashley Berry:** ...so you just pipe the output from that command into the *go build*.

**Mark Bates:** See, this is great... We have all these old, hacky solutions we could start getting rid of now.

**Break:** \[00:17:39.24\]

**Mat Ryer:** Okay, so maybe we could explore a little bit more then about how //go:embed works... It's a kind of special comment, isn't it? And this is unusual in Go. It's one of the unusual things I think of, the design, where specific comments have special meaning. Go generate is another one, and there are build tags, but how does it actually work? How would you use //go:embed if you wanted to bring in a file into a string?

**Mark Bates:** It's actually quite pleasant and easy, fairly straightforward to use. I'm obviously hesitant -- I never wanna say the word "easy", or "simple", because it's never that... As a matter of fact, I struggled with trying to figure out how to embed files by an extension, \[unintelligible 00:20:05.22\] Basically, what you do is you set up the variable that you want to embed into, whether it's a string, a slice of bytes, or an embed.fs variable. Those are kind of your three choices. Somebody please stop me if I forgot one, but I'm pretty sure those are your three choices that you can put this directive above.

\[00:20:27.14\] So you've got your little go:embed directive, and then you tell it what kind of files you want. And those files - and as somebody who's written these systems, this is what I love... Those files that you're asking for are relative to the source code. So there's this kind of consistency to it. If I'm in cmd/foo/main.go and I reference template/css, it's gonna expect templates to be right next to main.go, and so on. And that sort of resolution can be really tricky to do if you don't have the Go tooling behind you, like if you're not in the Go tooling; if you have to do it all after market. Because those are the kind of problems you do.

And it works for, like I said, all three of those. And you can do -- you know, I want templates, so I can do template/\*, so there's a wildcard... You can also use \*.css, for example. The struggle I came into was I had assets/css/ and then a bunch of CSS files, and then I just did, for my embed directive, assets/\*.css. So it was only looking into one directory, so I needed another star, another slash to kind of recurse through all of them. But once I've figured that out, it was great.

**Carl Johnson:** The gotcha there is that Go has built-in pattern-matching - it's in filepath.match - and it kind of stinks, to be honest... I mean, it's fine for what it is, but it's purposefully very simple in the way that a lot of Go tools are... So it doesn't support \*\*. So if you're familiar with a lot of the JavaScript asset building tools, they all have \*\*/\*.css. That would mean any CSS file anywhere underneath this particular path. And the Go filepath matcher does not have that. It only supports a single star in a particular location. So if you say go:embed assets/\*.css, it'll get any CSS files that you have that are in the assets folder, but not in the CSS folder that's underneath the assets. So it's a little bit of a gotcha.

**Mat Ryer:** Yeah, that's interesting. I don't mind that though...

**Mark Bates:** Well, like you said, you could do an intermediate star, just the one star, and then it'll do all folders...

**Mat Ryer:** No matter how deep they are?

**Mark Bates:** I don't know about that...

**Mat Ryer:** Well, here's the thing though - in a way, it's better that it's just really clear and obvious, and if you want to embed more things, you have different... You know what I mean? It's almost like it'll be hard to find what you were looking for, potentially, if you had lots of CSS files in a big directory structure, with CSS files (say) that are named the same, separated only by path, which happens if you've got theming and things, sometimes. Tricky.

**Mark Bates:** Yeah. The thing for me - I had nested JS files, I had a vendor directory, and trying to find the files in the vendor directory. That's where I kind of ran into that problem. But it was such a simple -- like I said, it is very basic, and it is very simple.

What I was amazed at is - my editor, I use Neovim with vim-go, and I'd get go vet warnings if my pattern was wrong, if the files don't exist.

**Wayne Ashley Berry:** Oh, nice.

**Carl Johnson:** That's interesting, yeah.

**Mark Bates:** So right there in my editor I was getting a nice little warning saying "Oh, that pattern doesn't work."

**Mat Ryer:** \[00:24:07.15\] That's nice. And it would be a build error too, right?

**Mark Bates:** Yeah, I believe so.

**Mat Ryer:** Yeah, that is nice.

**Wayne Ashley Berry:** Actually, I forgot that you can also specify multiple directories and multiple patterns if you're embedding into a file system... So my first take at this, I would have var css, and embed the CSS directory in there, and then var images, and put images in there. But then you can actually just have var static, and just embed everything in there... You just need to remember that they still exist in their directories. So you need to reference html/index.html.

**Carl Johnson:** Yeah. That's actually a very good way to do it. So if you have var static, or var fs, and then you say in the go embed comment above it, go embed assets/css/\*.css assets/js/\*.js, and then images, and so forth... And you can put it all into a single file system that way.

**Mat Ryer:** That's cool.

**Mark Bates:** Yeah. And if that line starts getting too long, so it's just space separated, you can use multiple lines.

**Mat Ryer:** Oh, really?

**Wayne Ashley Berry:** I didn't know that.

**Mark Bates:** So you can have multiple go embed directives above the variable declaration. So you could do it really nice and -- one line if you've got two or three things, but after that you can put a really nice, even ordered list; you could sort it and just make it all look nice. So that's really nice, too. You can build up your static very deliberately that way.

**Carl Johnson:** Just in a hurry, if you just do go embed assets, it will embed almost everything in the assets recursively. The things that it doesn't embed are dot files, so files that begin with dot, which you would kind of expect. It also doesn't embed files that begin with underscore... And the logic behind this is that Go will not compile files that begin with underscore. So if you've got \_myfile.go, it will just be ignored by the Go compiler. I think that's a little bit weird, to be honest, the logic behind it... But if you find that that's a problem, if you explicitly name your underscore files, or if you say assets/\_\*, that's a way of working around that.

**Mark Bates:** Yeah. That pattern of using underscore file names is very common in the Ruby on Rails world for doing partials... So anybody who's brought that theory over... That's a great little gotcha. I didn't make that connection that it would do something like that, like throw away an HTML file that began with an underscore.

**Carl Johnson:** If you say template/\*.html, it will include the underscore files.

**Mark Bates:** Yeah, it's the default.

**Carl Johnson:** If you just say embed templates, and you think "Okay, not it's gonna embed everything in templates and all of the subdirectories of templates." Fortunately, it's the kind of error that you'll notice as soon as you try to use the partial and it's not there.

**Mark Bates:** Yeah. Oh, this is actually a really great segue to the tooling. The Go tooling will tell you what it expects to embed in your code. So if you were on go list -json, it's gonna spit out kind of a JSON build -- basic kind of module and package information, and in that it's gonna be all the files it's going to embed.

**Wayne Ashley Berry:** Wasn't there a similar command in Pkger, where you could \[unintelligible 00:27:33.10\] I use that all the time, because sometimes files would just disappear, and in your CI you need to see what's actually going on.

**Mark Bates:** Yeah. So that's a really nice way... And obviously, you could test against that if you wanted to... But then you start testing against the language too, I think... But the tooling shows you that information. So if you are like "What is happening? What is actually being put in here?", you don't have to go digging through debug logs; you can just quickly run go list -json. "Those are the six files it's embedding. I thought it was supposed to be embedding 106 files. My pattern is wrong, or I'm missing a whole folder stuff." So it helps you immediately jump back to where that problem is.

**Wayne Ashley Berry:** \[00:28:25.23\] It is interesting how in Go generally -- it's a very simple language, there's very little magic, but then sometimes you get these opinions baked into the language... So automatically excluding files starting with an underscore. If you don't know about that, then it's not very clear, and it seems a little -- if feels a bit more like a framework than a language sometimes, because the Go authors have taken opinions... And generally, I find it's best to just lean into them and enjoy them, and it just keeps everything nice and simple and clear. But you do need to figure out what those opinions are.

**Carl Johnson:** That's a really good way to put it.

**Mat Ryer:** Yes. Polite, wasn't it? \[laughter\] Well, here's one - and we're not at the Unpopular Opinions section yet, but if you thought that the magic comments in Go was weird, what's going on with this \_import for embed? You have to import \_embed?

**Carl Johnson:** The reasoning behind this is that they don't want somebody who's using Go 1.15 or below to accidentally try to build something that requires an embed, and it looks like it works, and then you go to run it and it doesn't actually work. So to get around this, they require you to import the Embed package anytime you use an embed. But if you're just embedding a file as a string or embedding a file as a slice of bytes, you don't actually use the Embed package. So to get around this, you do \_import\_embed, and that tells it "Okay, I'm using the embed feature in this file, so make sure that it's available." But it's another one of those things where if you don't understand why it's there, it just sort of looks bizarre, like "I have to include this import that doesn't do anything for no reason."

**Mat Ryer:** Yeah.

**Carl Johnson:** But there is a reason.

**Mark Bates:** Well, we do that already in several places in Go; the registration of a database package is kind of a great example of that, where they're doing it for the side effect. Now, we could argue whether they should be doing it for the side effect or not...

**Mat Ryer:** We can't. They shouldn't.

**Mark Bates:** I've got my opinions... But the side effect is it gets registered to a global map when that happens, that driver. So there is precedent in the standard library for that type of technique. It doesn't necessarily mean I like it...

**Carl Johnson:** This is even more strict than that though, because with the database example you only have to import it in your package main. Or import it one place in your entire program.

**Mark Bates:** Yeah.

**Carl Johnson:** But with this, every time you embed into a particular string or slice of bytes, you have to make sure that the import of embed is there, or else it will say "You didn't import embed."

**Mat Ryer:** I like that.

**Mark Bates:** See, that doesn't bother me too much...

**Mat Ryer:** Yeah, I quite like that.

**Mark Bates:** As somebody who's, again, written these types of tools, I also look at that as a marker... Like, before I go and start parsing this whole Go file, are they even used in the package? If they're not using embed, why should I bother to parse this? So that to me is less egregious than setting the registration of a database driver.

**Wayne Ashley Berry:** I tend to put all of my embedded resources in a single file. So top-level I have a resources directory, Resources.go, and that's the only place I'll embed anything... And then all other packages can import from there. They don't need to know about embeds at all. But it is one area where I hope that the tooling can maybe get a little bit better... Because you know, if VS Code or Vim or Neovim could detect you're using 1.16, you have a //go:embed directive in your code, it could just import that for you, as opposed to not.

**Mat Ryer:** \[00:32:23.14\] I think it will.

**Carl Johnson:** I'm sure goimports will be updated with that functionality eventually, if it hasn't been already.

**Mat Ryer:** Yeah, I think so. I once put that to Brad Fitzpatrick, about whether just importing a package and relying on the side effect of doing that - whether in retrospect it changed that... And he looked at me in a way that said "Yeah, you are the best", so... And that's Brad Fitzpatrick.

**Mark Bates:** I think you had just had some bad lunch, if I remember correctly. We had gone out to that really dodgy place...

**Mat Ryer:** No, that was delicious...

**Mark Bates:** Yeah, well...

**Mat Ryer:** \[laughs\]

**Break:** \[00:33:00.22\]

**Mat Ryer:** Just a quick question, and I'll put this to all three of you... What's the best thing you've ever embedded? Mark, you can go first... Don't laugh away from the mic. We need that. I really need that.

**Mark Bates:** The best thing I've ever embedded is an ASCII image of Jim Wyrick.

**Mat Ryer:** Oh, what a great answer.

**Mark Bates:** Thank you.

**Mat Ryer:** Can anyone beat that as an answer?

**Wayne Ashley Berry:** I have a similar answer, but I embedded an image of Pikachu in a test, because we had an algorithm that was detecting prominent colors from images. So I embedded Pikachu in my test, so that I could run that through my code.

**Mat Ryer:** That's actually a great one.

**Carl Johnson:** So Mat, you said at the top that I had a Ph.D. in philosophy... It doesn't come up in my job very often, but it does for this, which is that I embedded a quine. A quine is a kind of computer science joke named for W.V.O. Quine, who was a philosopher very active in the '60s... And it's a thing in computer science where you make a program that embeds itself, that can print itself out.

So if you wanna make a program that can print itself out, all you have to do is say "go embed, the name of your file.go" and then print out the embed. So it's recursive, it's embedding itself.

**Mat Ryer:** That is amazing. That is very meta, and I feel like is the start of how Terminator happens. Something like that...

**Carl Johnson:** Yes, it embedded itself, and then it just grew too complicated.

**Mark Bates:** Go:embed is how Skynet starts. Not the Amazon flying drones, or any of that stuff... But this. This is it.

**Mat Ryer:** It uses the AWS APIs to control those.

**Mark Bates:** Russ Cox has started Skynet off with the //go:embed. Thanks, Russ.

**Mat Ryer:** Go generate as well.

**Wayne Ashley Berry:** That actually reminds me, there's a -- was it Russ Cox who did the draft design presentation on YouTube of //go:embed?

**Mark Bates:** Yes, I believe so.

**Wayne Ashley Berry:** \[00:36:07.09\] This was June last year...? And one of the first things that he did was embed the file, but within a function. And it's funny, because that was the first thing I tried to do when 1.16 came out, but you actually can't. You have to embed at a package-level variable, which I don't know how I feel about, to be honest...

**Mat Ryer:** Yeah... Interesting, because a lot of us are trying to avoid global state altogether... But in a way, is it okay that this breaks that rule?

**Mark Bates:** The very earliest draft to the proposal - I think even the ones before they went out to the public kind of thing - circulated around through some of us who had written these kind of packages... And that was one of my first comments, was "Why can't I do it at the function level? I think people are really gonna want that, and it's definitely gonna come up. People don't like globals... Yadda, yadda, yadda."

I don't remember quite what Russ' exact issues were or problems with it, but he did make very valid points as to both the technical issues around trying to make it work, and also the practicality of why you would really want that kind of a feature for something that is essentially a global pool... Just like your file system. Your file system is a globally accessible pool. So you don't have a separate, only pool within this function; that doesn't even make sense conceptually. So he had a lot of interesting takes on it.

**Carl Johnson:** If you get the earliest beta of Go 1.16, it actually did let you do embeds at the function level... But then the problem that people found as they were using it was that if you embedded a slice of bytes, someone could mutate that slice of bytes. And it wasn't clear what that should do. So if I have a particular function - let's say that it embeds a file as a slice of bytes, and then someone changes the file... What does that mean? What are the semantics of that? Should that cause a crash? Should that be legal? Should it be the same when you re-run the function?

It was too confusing, and so then they decided "Let's make it so that you can only do embedding at the top level." Logically speaking, that's the only level where it really makes sense to have embedding... And so because that was the decision, they ended up dropping the feature of letting you do it in the function... Which is kind of inconvenient, but it goes back to that idea of Go authors - they have very strong opinions. It's not magical; it's simple, but at the same time the opinions are very strong. So the opinion is if you really need it, you can deal with it being a global, and just don't use it wrong.

**Mat Ryer:** But you can still change those. It's a variable in global space, right?

**Mark Bates:** You can change -- so in the case of embeds, the FS, you can swap out one FS for anpther FS. But the FS'es themselves are read-only. They're thread-safe, so they're meant to be used globally, and they're also read-only. So you can't mutate them, unless you swap out an entire, whole new FS.

**Mat Ryer:** Gotcha.

**Carl Johnson:** So Mat, the issue I think you're talking about is that if you have this slice of bytes and it's at the top level, you could of course change it. But if it was in a function, you could change it and then you would re-run the function; and should you get a fresh copy that was the original, or should you get back the embedded one that just got changed? If you're used to C or C-based languages, they have a concept of a static variable, where every time you run it it's the same variable...

**Mat Ryer:** \[00:40:03.14\] It's the first one.

**Carl Johnson:** ...and if you change it, it's the same between runs... But there's no such concept in Go, so they would have had to basically invent it for it to make sense.

**Mat Ryer:** Yeah, that does make sense. And I'm kind of with you on this. I don't mind these restrictions, and it's about really learning the right ways to do things. You can always pass arguments around; you could always pass a global into some other type or something else, if that's what you want to do...

**Mark Bates:** And that is what is encouraged, by the way. You're encouraged to write your functions to take an fs.fs interface.

**Mat Ryer:** Right. So then you can do that for testing quite easily.

**Mark Bates:** Then you can do that for testing. So you'd have a global CSS folder, let's say, but your function just takes an fs.fs type. So you could pass in that CSS folder, or you can use the map fs that's in the testing package for creating your own fictitious file system for testing and just pass that in. Or you can write your own interfaces around all of this; you can fulfill those interfaces, and do all sorts of wonderful interesting stuff in the middle... But you're encouraged to take an fs.fs as your function, and not refer to the globals. That's kind of how they're getting around it a little bit, too.

**Carl Johnson:** What Mark is saying is there are two different types. There's the embed.fs, which is specifically used for embedding these groups of files, and now there's a new type called an io/fs.fs, and that is an interface that lets multiple different types implement being a file system. So embed fs implements this interface, but also Zip reader does, and also memfs does, and they're working on making it so the tar text -- so if you ever are on the Go Playground and you know how there can be multiple files in there, that format is called tex tar. That format - they're making an fs.fs implementation for it.

So just any different kind of format where you have a bunch of files together, you can make an implementation of fs.fs, and if your function or method takes an fs.fs, that can be put in there. It doesn't have to be an embed.fs that is hardcoded into the binary. It can be anything that you swap out in real time.

**Mark Bates:** Including the local file system.

**Carl Johnson:** Including the local file system, right.

**Mark Bates:** There's a helper in the os package (I believe it's the os package) to give you the underlying OS. So if you're building a tool that's supposed to be looking at the underlying OS and you're taking an fs, you just grab that and kind of pass it along through.

**Mat Ryer:** So that begs the question - do you think that should be best practice, if you're gonna work with files in the local file system? Should we just use FS, and just use that abstraction because it's more versatile? Or would you still just use os.Open?

**Mark Bates:** I'm planning on using it, to be perfectly honest, because it does make my testing -- I write a lot of tooling that deals with the file system. Everything from generators, transformers, reading and writing... The fact that I can just mock up my file system is wonderful.

**Wayne Ashley Berry:** Is that interface read-only as well, like the Embed file system?

**Mark Bates:** Yeah.

**Carl Johnson:** It is read-only at this time, yeah.

**Mark Bates:** Yeah. You can't add files to it, and stuff like that. But like I said, there is a testing in the FS testing package, there is a mapfs that you can use for testing... So here's all my different files that I want.

**Mat Ryer:** So since this happens at build time, is there a way that you can have a situation where you can just be editing the CSS files and just sort of refreshing things in order to see those updates? Or do you have to rebuild? Do you know what I mean? Is there a way to have a sort of passive mode where it will just read, or would you just build that yourself in your particular case?

**Carl Johnson:** \[00:44:00.21\] So that's where the fs.fs comes in. You could have in your program, depending on how you do command line arguments and flags and variograms or variables and whatever it is you do - but you could say "If this value is true, then you use the embed.fs, and if it's false, then you use the os.fs, and switch between those two as necessary." So that could be a really good way for development for things like Buffalo, where you wanna have things refreshing as the files get changed on disk. But then, when it's time to build it and ship it either to the server or to the user, you can bake it in and make sure that it's concrete.

**Wayne Ashley Berry:** I actually like that that's not the default behavior, because I don't often do that kind of work, and I've found that with the pre-existing solutions, the third-party tools we're doing this kind of thing, I would have so many problems with local file system embedded files, generated code that's lying around, and it would be so difficult to know which files were actually being read. I actually prefer that there's one way of doing it, you know the files are always embedded the same way, whether you're running locally, or shipping and deploying in some way... So I actually love this, but that interface is incredible as well, because now I can just go through all our libraries, and the standard library as well... It can become that common point of abstraction.

**Mat Ryer:** Yeah.

**Mark Bates:** And it's showing up in a lot of standard library places. Carl was talking about a bunch, but the http package understands fs...

**Mat Ryer:** Ooh...

**Mark Bates:** ...for serving up static files. The template package - so you can parse an fs. So again, those of us who maybe write code generators, being able to just parse an fs is wonderful. There's a lot there.

**Carl Johnson:** You can pipe them through in funny ways, too. You could, say, distribute to your client a zip file, and then because the zip file can now be used as an fs, you then turn the zip file into a template file system. So instead of saying "Here's this directory of templates and I need you to unzip it and put it in this particular place", just send them the one file that contains all of the templates they need, and they can point it at that file and everything will happen automatically.

**Mat Ryer:** Hm... That's good, ain't it?

**Mark Bates:** \[laughs\]

**Mat Ryer:** That is good.

**Mark Bates:** Finally having interfaces around things like files...

**Mat Ryer:** Yeah.

**Mark Bates:** ...is wonderful. Like you said, I don't know about a lot of other Go developers, but I'm constantly working with the file system, and I'm constantly trying to take files and process them through a pipeline. First I wanna convert the Markdown to HTML. Then I wanna run that through a Go template. You know, all these sorts of different things or whatever it is, to be able to have interfaces; just kind of mutate and pass along a new version of this file down the chain, which is just wonderful.

**Mat Ryer:** Right. I look forward to the cloud providers also implementing it in their clients, so that you can just use the file system that's in an S3 bucket, or other storage that's available.

**Mark Bates:** And that's the other thing too, is you could write interfaces now for S3, that just look like regular files... And you can write a file system interface that talks to S3. Or talks to a database. So you can use Postgres now as a virtual file system if you want to. You could do all these different things. You can, like you said, use S3 as this virtual read-only file system... SQLite, if you're doing, say, an embedded thing.

**Carl Johnson:** \[00:47:59.01\] One of the nice features of Go has always been the io package. When you're a new gopher, it can be a little bit confusing... Like, "What is package io? What are these read and write methods? Why do I have to do them? Why can't I just use a string?" But when you get to understand them, how they work is basically an io reader is a read-only file, and an io writer is a write-only file... And it lets you abstract away what exactly the file is. Is the file on disk? Is the file an HTTP response that you're reading? Is the file an S3 bucket somewhere that you're reading from?

Go has always had a way of abstracting away an individual file using package io. But now with package io.fs you can abstract away a file system. And so it's not just the one file that you're looking at anymore... Because you could always say "I'm getting this io reader from S3" or "I'm getting this io reader from a zip file" or whatever. But now you can have a whole system.

**Mark Bates:** Yeah, but io readers don't have file sizes, they don't have mod times, they don't have any of those.

**Carl Johnson:** Right. So they don't have the properties of an actual file in terms of being a file on disk. They don't have a name, they don't have permissions.

**Mark Bates:** Exactly.

**Carl Johnson:** So now we can mock out all of those things.

**Mark Bates:** Yeah, and that's just super-exciting to me. But I like to do terrible, awful things with code.

**Mat Ryer:** I've seen some of it. Great. Well, what's gonna be abstracted next? All the things. It's actually time, if you check your timepieces, for Unpopular Opinions.

**Jingle:** \[00:49:33.18\] to \[00:49:50.29\]

**Mat Ryer:** Okay, so who's got an unpopular opinion for us today? Carl, what do you think?

**Carl Johnson:** So this is not really a Go opinion, this is more of kind of a global open source software opinion I have, which is that there should be some sort of system for government funding of open source software. So if you think about science, in America we have the National Science Foundation, we have the National Institutes of Health. For art we have the National Endowment of the Arts and the Corporation for Public Broadcasting, so we have these different streams for funding... But in terms of open source software, right now there's basically just two ways to do it. One is what Go does, which is that there's a corporate sponsor, in this case Google, who is putting a lot of money and time into these features.

So Go Embed - Russ Cox did most of the actual development work on it. I mean, if you just think about what his time costs, this feature probably cost Google somewhere in the ballpark of like $10,000-$50,000, just adding up how much time their engineers have put onto it... And that's not counting all the people who contributed to the issues. If you added up all that time, it would be even more expensive.

And then the other way that we fund software is through the Patreon model. So there are a couple of different projects that are funded that way, like the Zig programming language, where somebody will either go on Twitch, or do something so that people are interested in seeing what they're doing, and then you give them money to keep them as individuals developing. But there's no real government funding of open source software, and I think it's something that really would be helpful.

The pushback that I've gotten on this opinion is like "You're saying that the government should pay the Leftpad guy?" \[laughter\] I think that's a fair criticism, but I don't think that that would really happen in practice... Because if you look at how science is funded, usually the government will put together some sort of grant, and the grant will say something like "Can you research how to cure the Coronavirus?" And then you go to that grant committee and you say "I have these scientists working in my team. We have this theory about how we could build a vaccine. We've done these vaccines in the past, that show that we're qualified to do this", and they evaluate your grant proposal and give it a score, and the proposals that score highest get the actual money.

\[00:52:20.07\] So in this case there would be some sort of board of software funding where people would look at "Oh, Go is a popular programming language. It has millions of developers worldwide, and they all say that they would be really excited to use this embed feature... So why don't we give $10,000, $50,000 to this developer, and then get some number of months of his/her time and they can work on the feature so that everyone else can benefit?"

I think something like that -- I don't see it happening anytime soon. That's why I'm putting it in Unpopular Opinions... It seems like everybody wants to cut government funding, instead of increasing government funding... But I think it would really be helpful just to have this third stream of ways that you could fund open source software and prevent developers from getting burned out, or the situation where the corporation changes its mind about what it wants to work on and it walks away.

**Mat Ryer:** Yeah, very interesting. Cory in Slack made the point, which is even the government systems themselves are using a lot of open source software... So they even would directly benefit.

**Carl Johnson:** Yeah. I used to work with former guest of this show Paul Smith, at the Ad Hoc team... And they're great. They do as much as they can in open source. Anything that they can get permission from the government to make open source, basically they do... But I think that's just one angle of things, which is the angle of when the government builds its own software and there's no reason to keep it secret, they should probably open-source it. But there's another angle, which is for software that isn't necessarily useful to the government, there should be some way for the open source maintainers to be able to earn a living with it.

**Mat Ryer:** Yeah, very interesting. We will put this to the public on Twitter polls, which is Go Time's flavor of democracy, and we'll find out if that is indeed popular or unpopular... But it's a good one.

**Wayne Ashley Berry:** I have a potentially unpopular opinion...

**Mat Ryer:** Okay, \[unintelligible 00:54:21.20\]

**Wayne Ashley Berry:** ...and it is that we should strive to use as few mocks as possible, and the amount of mocks should decrease over time. This isn't Go-specific, it's just programming in general... And I actually use the philosophy that I heard from a band member once. He said "You should practice how you're gonna play." So if you practice at home and you've got your headphones on and your amp is on 2% volume, and then you're expected to walk onto stage, turn that amp up to 110%, and all of a sudden those skills transfer - that doesn't happen.

I think in software if you're gonna run your code against MySQL, then test your code against MySQL. There are obviously limitations... You know, if you talk about billing, you don't wanna start charging your own credit card, or something like that... But often, those kinds of services will give you emulators that you can run locally, things like that... And I find that it's actually been incredibly helpful for me over time, because I got to the point where one of the services I've been working on for the past year - I actually haven't run it locally in a year. I've only run the tests ever. So if someone asked me "Go run main.go, what environment variables do I have to set?" and I said "I don't know. You go write a test and you run the test, and that's how you know it's gonna work."

**Mat Ryer:** Yeah... That's very interesting. I do like that point. We will test that one, too.

**Mark Bates:** I never mock my database calls.

**Mat Ryer:** Right. You always use a real database.

**Mark Bates:** Always.

**Mat Ryer:** Yeah.

**Carl Johnson:** \[00:55:59.21\] Well, how do you consider fs.fs? Is that a mock, or is that an interface? If in production you're using the embed.fs, but in development you're using the os.fs - do you consider that a mock, or do you consider that something different?

**Mark Bates:** It's an implementation of an interface. I can see what you're saying...

**Carl Johnson:** What is a mock? It's what Mat does to Mark the whole episode long...

**Mat Ryer:** Yeah. And vice-versa.

**Mark Bates:** Oh, I have an unpopular opinion...

**Mat Ryer:** Okay. Before we do though, I just wanna say - Roberto Clapis made this point, to your point, Wayne... That if you have code that uses random numbers, then your tests should also use random numbers. It's kind of common for us to want to control the seed in test code, so that you have predictable tests... But in a way, that stops it being the real world a little bit, and actually it'd be better off if you were using random numbers. So that's an interesting point that extends to your point, Wayne... Yeah. If you've got nothing to say about that, then we'll listen to Mark's unpopular opinion. \[laughter\]

**Mark Bates:** Mine just popped into my head when we were talking about sandwiches... I know, right? I don't particularly care for bacon.

**Mat Ryer:** Oh...

**Carl Johnson:** Wow... You're kicked off the internet.

**Mark Bates:** I think it's highly overrated, to be perfectly honest...

**Mat Ryer:** Right.

**Wayne Ashley Berry:** Very unpopular.

**Mark Bates:** It's a wildly unpopular opinion, I get that.

**Wayne Ashley Berry:** What would you rather eat?

**Mark Bates:** I would rather have sausages instead of bacon with my eggs.

**Mat Ryer:** Right. That's fair enough. Well, there's different types of bacon, isn't there? Because in England the bacon is very different to -- I've had it in the U.S.

**Mark Bates:** It is, yeah. I don't care for either.

**Mat Ryer:** Yeah, fair enough.

**Mark Bates:** I'm just against any kind of bacon.

**Mat Ryer:** If you like really floppy bacon, you wanna get yourself to London, because we've got the floppiest bacon in town; I mean in the world... If floppy bacon is your thing. Yeah, actually - an American friend of mine ordered a cocktail, and I guess in New York this would be a normal thing... They asked for bacon in the cocktail. Which, if you imagine in New York, in a cool place with American-style bacon that's like firm and sticks up... You know? But if it's floppy, you can't have that in your drink. Honestly, it's horrific. It gave me nightmares. They wouldn't do it, but...

**Mark Bates:** Yeah, the appeal of that is not nearly as nice. But yeah, there you go; there's my unpopular opinion.

**Mat Ryer:** Well, we'll see how unpopular that is. Probably not that unpopular with the vegans... But maybe with the carnivore listeners.

**Mark Bates:** Yeah, I think so. I do like plenty of other meats though...

**Mat Ryer:** Well, you know, maybe we should save this for another episode, because \[unintelligible 00:58:43.19\]

**Mark Bates:** I think so... Where Mark just lists his favorite meats...

**Mat Ryer:** Favorite kinds of flat meat... We only have really charcuteries fine, because you can slip that under the door, but... Yeah, a juicy ribeye - no chance.

**Mark Bates:** That's right.

**Mat Ryer:** Okay. Anyone else got anything mental to add? Not mental, I shouldn't have said that. Anyone got anything crazy to add? No.

**Wayne Ashley Berry:** Nope.

**Mat Ryer:** Okay. Well, we've run out of time, but we could just save a few minutes for some light chat... Carl--

**Mark Bates:** Nothing says "light chat" like telling everybody we're about to have a light chat. \[laughter\]

**Wayne Ashley Berry:** And... Go. Go!

**Mat Ryer:** This is the light chat section, yeah. Carl, you've got a blog, haven't you? Because I've read about how to use go:embed on your blog. What's the internet resource indicator, the uniform resource indicator for your blog?

**Carl Johnson:** Blog.carlmjohnson.net.

**Mat Ryer:** Right. Is that what your middle name is?

**Carl Johnson:** Oh, and carl with a c. It is, coincidentally.

**Mat Ryer:** Okay. Good name. Wayne. Your middle name is Ashley, isn't it?

**Wayne Ashley Berry:** It is, indeed.

**Mat Ryer:** Do you go by Wayne Ashley Berry, or is it just Wayne Barry?

**Wayne Ashley Berry:** I do. I like using my full name. I don't know why... It was given to me, so why not?

**Mat Ryer:** Yeah. I went to school with a kid called Ashley Barry... So that's actually really jarred in my head. He was an absolute idiot. \[laughter\] He tried to set fire to my trousers.

**Wayne Ashley Berry:** \[01:00:11.10\] Oh, dear...

**Carl Johnson:** Do one of you three know the most popular Carl Johnson off the top of your heads?

**Mat Ryer:** Is he in the Simpsons?

**Carl Johnson:** That's close...

**Mat Ryer:** No then.

**Carl Johnson:** It is CJ from Grand Theft Auto 3 San Andreas.

**Mat Ryer:** That's his real full name, is it?

**Carl Johnson:** His name is Carl Johnson. So if you search for my name without the m, you get pictures of Carl Johnson posing in front of cars in very low polygon resolution.

**Mark Bates:** What's funny is if you search Mark Bates, you get the same thing... Except me posing in front of cars...

**Carl Johnson:** Yes.

**Mark Bates:** ...in incredibly low resolution.

**Carl Johnson:** With a tank top on, and...

**Mark Bates:** Yeah... How else are you gonna pose in front of a car?

**Carl Johnson:** It goes without saying.

**Mat Ryer:** And yet we did... And yet, we did. Well, that's all the time we have for today on Go Time... But thanks for listening, and also thanks for being on it, Mr. Bates, Mark Bates. Thank you very much for coming. Carl Johnson, you'll have to come back.

**Carl Johnson:** Thanks.

**Mat Ryer:** And also you, Wayne Ashley Barry. Please also come back another time. It's been great, very informative.

**Wayne Ashley Berry:** Thanks for having me.

**Mark Bates:** Whoa, I'm sorry. They've gotta come back anytime?

**Wayne Ashley Berry:** \[laughs\]

**Mat Ryer:** Oh, you noticed... You noticed that.

**Mark Bates:** You just kind of like waved me off. You're like, "Thanks for coming, Mark. Bye!"

**Wayne Ashley Berry:** I think it was the bacon comment that did that.

**Mark Bates:** Well, Mat's a vegan, so he's gonna be on board with that one.

**Mat Ryer:** Yeah, I don't eat bacon. Don't tell everyone.

**Carl Johnson:** Well, there's the fake bacon. Do you like fake bacon or no?

**Mat Ryer:** I don't know why we're spending all this science energy trying to make fake meat... So no, I don't -- I mean, no. I don't get it.

**Carl Johnson:** The times when I've tried vegan diets, that has mostly been my experience, is that all the fake meat is not worth it... But I do think that some of the fake bacon is okay.

**Mat Ryer:** To be fair, there are now burgers that are very good. Impossible Burgers, and there's another one (I forget), that are just as I remember eating burgers. And they're actually terrible for you as well, so... Bonus. \[laughter\] \[unintelligible 01:02:20.01\]

**Mark Bates:** All of the health benefits of a burger with none of the taste.

**Mat Ryer:** Exactly. It's actually worse for you. It's less healthy than-- it's better for the animal, you could say...

**Carl Johnson:** Well, but they make up for it by setting an oil refinery on fire every time...

**Mat Ryer:** Exactly, yeah. That's what it tastes like, actually.

**Carl Johnson:** It's like a Carbon offset, but in reverse. \[laughter\]

**Mark Bates:** Mat has to drive 200 miles just to get one, so...

**Mat Ryer:** Yeah. It's Carbon onset.

**Carl Johnson:** Oh, it's a Carbon onset, yeah.

**Mark Bates:** Mat wakes up every day, "How much more Carbon can I bring into the universe today?" And the answer is none, because it already all exists.

**Mat Ryer:** Well, yeah... Does it? Nah, you can create Carbon... Can't you? Inside stars is where things are made...

**Mark Bates:** Well, let's call Neil deGrasse Tyson, get him on Go Time next week...

**Wayne Ashley Berry:** I think that's a different podcast...

**Mark Bates:** ...and let's solve this thing.

**Mat Ryer:** Yeah, he won't come on. He refuses to, because he's a JavaScript guy, so...

**Mark Bates:** I thought it was because of what happened the last time he was on. \[laughter\]

**Mat Ryer:** Yeah, talking about black holes...

**Mark Bates:** That really was embarrassing.

**Mat Ryer:** Okay, well if that's not baffling enough, join us next time; I'm sure we'll be able to equal that or make it worse. Thank you very much... See you next time.
