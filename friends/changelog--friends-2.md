**Jerod Santo:** Well, we're here for Changelog & Friends, and we have one of our oldest friends with us here to kick off this new talk show. It's Gerhard Lazu. What's up, man?

**Gerhard Lazu:** It's good to be back. Everything's up. I was just telling Adam - everything that should be up is up. Nothing is down.

**Jerod Santo:** Don't ask Gerhard that question.

**Gerhard Lazu:** Nothing is down, okay? \[laughter\]

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** It's all up from here... And of course, Adam's with us as well. What's up, Adam?

**Adam Stacoviak:** What's up? Chasin' the nines...

**Jerod Santo:** Chasin' the nines...

**Gerhard Lazu:** How many can we fit?

**Jerod Santo:** They get more expensive as you go, don't they?

**Gerhard Lazu:** They do, yes. Orders of magnitude, each of them.

**Jerod Santo:** That's right. What's our SLA and SLOs, Gerhard? We're kaizening... \[laughter\]

**Gerhard Lazu:** I don't know. What do you want them to be? We'll make them whatever you want them to be.

**Jerod Santo:** I want them to be just right. Not too much, not too little. Just right.

**Gerhard Lazu:** Yeah. I think for Changelog.com it's a 100%.

**Jerod Santo:** That's just right.

**Gerhard Lazu:** It's gonna be a billion dollars, please... Because it didn't go down. Changelog.com did not go down.

**Jerod Santo:** That's true.

**Gerhard Lazu:** And that's Fastly? Thank you.

**Jerod Santo:** Yup, that's Fastly.

**Adam Stacoviak:** Speaking of being an old friend... How long have we known you, Gerhard?

**Gerhard Lazu:** 2016? '15? '16, I think.

**Jerod Santo:** So '16 is when you started working on the codebase. In fact, I've been creating this -- I haven't got it finished yet, because it hasn't turned out very well... But I'm creating this visualization with this tool I've found called Gource. I don't know if that's how you say it, but it's Gource, like source... And it goes through your version control, and the whole history, and it creates a visualization of people working on the code. And I did one across the eight years of our codebase, and it was like 45 minutes long. Who's gonna watch 45 minutes? So I started futzing with it, trying to make it better... Anyways, long story short, I know exactly when you started contributing, because it was the summer of 2016. I remember your little avatar coming in on this visualization, and touching all the files. But I knew before that, briefly, at least; or I knew of you before that. I think you wrote a blog post for us about Ansible prior. I think we've told the story before on Kaizens past... But what is that, four plus three - seven years?

**Gerhard Lazu:** That's it.

**Adam Stacoviak:** That's a long time.

**Gerhard Lazu:** I think we started talking in 2015. I think it was December, or something around that time. And then it took us a couple of months to figure out how and why. The why was important for me, and I'm glad that we got that right. Remember the 10 questions? I mean, I still have the email; we can dig it up. I think we've done this. I think we've done this before.

**Jerod Santo:** We have. That's why I said we've told this story before on Ship It, on a previous Kaizen. So here we are now, we're on Changelog & Friends, but we're still kaizening. There was a big question on Ship It \#90, where would we Kaizen next, and this is where we decided to put our Kaizen episodes. Of course, it's also on the Changelog. This is our new show, it's also our old show, but it's just a different flavor of the Changelog. We're happy to have you here, Gerhard, and we could maybe throw this on the Ship It feed for those folks, if you want to, but we can talk about that perhaps offline. Maybe you'll be mad, because it'll be like episode 91, and you will it'll ruin your flow...

**Gerhard Lazu:** That's okay. I wanted fewer episodes, so... I think this is okay.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Why not? They're happening, but just less frequently now.

**Jerod Santo:** Well, for those people who listen to the Changelog and we haven't kaizened on the Changelog, except for maybe a cross-post years ago, when we first started Ship It, Gerhard, why don't you give the conceit of what Kaizen is, and then what we do on these episodes?

**Gerhard Lazu:** So Kaizen stands for "continuous change for the better", and it has a strong association with Agile. And I know that somehow has fallen out of favor with industry. I'm not sure why exactly, but I've seen that there's a lot of anti-Agile feelings out there. Maybe people have been doing it wrong, I don't know. That's my joke. So that's possible.

**Jerod Santo:** You're holding it wrong.

**Gerhard Lazu:** Yeah. And one of the principles in Agile is to keep small improvements, keep iterating, and keep continuously delivering those small improvements. So for us, what that meant was that on a cadence - for us it was every 10 Ship It episodes; that was roughly every two and a half months - we would talk about the improvements that we're doing for Changelog. So we don't have a release as such, there is no semver, there is \[unintelligible 00:05:01.04\] releasing, but what we do is we talk about all those improvements that we have shipped in that timeframe, whatever it is, on the Ship It, it was, and now on Changelog.

So this idea of continuously improving something, and then pausing and taking stock of what we've improved. It's almost like a retro, for those, again, that have done Agile the right way... Or even the wrong way. You can do retros the wrong way. Anyways, this was one of my favorite meetings, because it brought everyone together, and we would get so much better for it.

It's this idea of continuously improving. If you just keep focusing on that, and always be better today than you were yesterday, that's all you have to care about. It doesn't matter how big or how small it is, they compound. That's the beauty of it. All those improvements compound over time. So keep improving... One of my mottos.

**Jerod Santo:** So we're obviously fans of this process, and we're putting our money where our mouth is, so to speak, because we're not just talking about our improvements, but we're committing to kaizening every so often. Our new cadence we're going to try is going to be every other month here on Changelog & Friends.

\[06:13\] We were doing it once every ten episodes, like Gerhard said, which was roughly 2.5 months. Now, we've been a bit on hiatus, because we've lost our groove... We've got our groove back now. So it's been longer than a typical Kaizen time period; it doesn't necessarily mean I accomplished more than I normally do...

**Gerhard Lazu:** I think we did, actually.

**Jerod Santo:** I think you did. I think you did, for sure.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** So let's start hitting through some of the stuff we've been working on, in and around Changelog.com. So for those first coming to Kaizen, changelog.com is our open source podcasting platform. It's written in Elixir and Phoenix, it's deployed to Fly, with Fastly in front of it, has a Postgres backend, and a pretty cool - I don't know, deployment infrastructure? What do you call it, a pipeline?

**Gerhard Lazu:** I would say infrastructure. I think all of it, it's infrastructure - the way it's structured, the way we talk about it, the way we capture it... Even in documentation, the way it's documented, I think it's really cool.

**Jerod Santo:** Right. Yeah. And so we're doing this, we've been coding on this, like I said, since 2016; for many years, kind of in fits and starts. We go heavy sometimes, we go light, we continuously improve it... And we also experiment. So one of the reasons we have this platform is so that we can try new services, try new techniques, hit ourselves on the thumb with a hammer, and tell you all about it, so you can avoid said hammer, or give it a try if you'd like... And so that's kind of one of the ideas behind this; it's not merely to make changelog.com a better website, or make the distribution of our podcasts better, although that's definitely a huge part of it. It's also for learning, experimentation, and hacking, because we're hackers, and it's nice to have something to hack on together.

**Gerhard Lazu:** I think that's very rare, right? Being able to do this in the open source, in the spirit that it was intended, to have the time. We are very busy during our day, and during our workweek, and then the weekend comes&lt; and there's all sorts of pressure on your time... Being able to just give yourself permission to try things, just for the fun of it. It's so easy to just get down, you know, ruts, or delivering of a backlog, or whatever. There's never a time to try things out. So this is, again, us giving ourselves permission to do fun things, talk about them, but also keep improving the platform, the whole Changelog platform, in an open way. My favorite approach.

**Jerod Santo:** Yeah, so many tools I come across, I don't have a good enough excuse to try them. Because at a certain point in your life, it's just opportunity cost left and right, and it's like "If I try this thing, I can't do the other thing on my list of things to do." And so we almost need an excuse to tinker, and this has been, for me at least, in certain ways, one of my excuses where I can feel like I'm also pushing the ball forward while I do something, versus merely futzing around with my gitconfig or my vimrc.

**Adam Stacoviak:** Gosh, Jerod...

**Jerod Santo:** \[laughs\] The old vimrc...

**Adam Stacoviak:** Signed commits finally, I see... I think since the last time we kaizened you have signed commits now, Jerod.

**Jerod Santo:** I did do something with that.

**Gerhard Lazu:** We succeeded...!

**Jerod Santo:** I still see that there's -- when we merge some stuff, there's still that PRs that come in, there's still like a... What do you call it? A DCO thing that's like failing, because the sign-offs aren't correct. And maybe it's because I rebased via the web interface. I don't know, I've had some problems where I'm like "Why can't we just do it the old, easy way? Why do we have to have all this security, and stuff?" But you know, you're dragging me along, kicking and screaming...

Alright, let's get into some of the major changes since our last time talking about this. The biggest one, it seems like, was the upgrade of Dagger and the switch from CUE, the configuration language for configuring our pipelines, to Go. And I think we had that last time, but now we're actually using it for more stuff. So obviously, you can tell by the way I'm talking about it that Gerhard should be talking about it, not me. So go ahead.

**Gerhard Lazu:** \[10:08\] So in the last Kaizen - let me go back to the beginning. I think it was November 2021, that's when the story started; this experiment started -- it was a long, long one. And the idea was, "Why are we using YAML for all these pipelines?" And at the time we were using CircleCI; we wanted to migrate to GitHub Actions. We were just trading one YAML for another. So I came across this tool called Dagger, which was - the whole idea was you write CUE, you don't write YAML, and you can run your pipeline locally. And what that means is that you can run the same pipeline written in CUE, whether it's locally on your laptop, whether it's on GitHub Actions, CircleCI - it doesn't matter where you run it, it will always run the same way. It has a container runtime&lt; so all operations run in various containers, you have the caching, you have a lot of nice things. That was, again, November. It was 0.1. Were very courageous, but it worked well, and it was a good improvement. We talked about it plenty, we wrote about it... Where do we write on our pull requests. If you go to our GitHub repo, there's the changelog.com... Even the topics that we're discussing today - there's a discussion, 452, where you can go and see all the various topics. And this is the first one, "Migrate Dagger 0.1, the Dagger Go SDK 0.5." And what that means is that there was a big shift in Dagger, from people that like CUE, to people that wanted to do more. They wanted to do Go, they want to do Python. Why should you write your pipeline in any one language? Why can't it be the language that you love? And for me, it was Go. We didn't have Elixir at the time; by the way, that's changing. We can talk about it later.

**Jerod Santo:** Oh yeah, you're getting Elixir support. By the way, you came across Dagger, but then you also went and got a job at Dagger...

**Gerhard Lazu:** That's right.

**Jerod Santo:** So when you say "we", people might confused. When you say "we", you're talking about you and your cohorts at Dagger, right?

**Gerhard Lazu:** Yes, exactly. We means different things, depending on the context. But yes, I joined Dagger as well. I really liked it, beyond just the tool; you can tell I'm really passionate about deployment, about pipelines, about CI/CD, all that space. That's the space where Dagger sits. And remember how we met, Jerod? Deliver?

**Jerod Santo:** I do. Deliver eDeliver.

**Gerhard Lazu:** Exactly. eDliver was a fork of Deliver, the Bash framework for deployment that I wrote. So there you go, 10 years later - boom, Dagger came along. And the rest was history. \[laughter\]

**Jerod Santo:** Right. So 0.5, which -- actually, 0.3. Dagger 0.3 - it introduced these SDKs. So you can write Go, your pipeline in Go, your pipeline in Python, or Node.js. We picked Go. And we transitioned, we migrated from having our pipeline declared in CUE, to a programming language, which has, again, a lot of nice things. When you have a programming language, you have very nice templating, you have nice loops, you have functions, or whatever you may have.

**Jerod Santo:** Can't you loop and do other crazy stuff in YAML, too?

**Gerhard Lazu:** You can, but it gets very, very messy if you do that. Very messy. Yeah. And to be honest, why not use your language as much as you can? And again, we didn't have Elixir at the time; that's slowly changing. But I prefer to write my pipeline in Go. So the first thing which we did, we migrated 0.1, we were running it in the new one. So I think the last Kaizen, when we talked about it, it was just a straight import. Wrapping the previous version in the new version. A nice, gradual improvement. Now, all of that has been rewritten in Go. We're using Mage locally to run the pipeline. So many things happened... Again, this was two and a half months ago.

Now, I want to show you something really cool. I'm going to share my screen \[unintelligible 00:13:48.27\] Do you see that? This is a pull request that has not been submitted yet. And this is Dagger Engine on Fly Apps version 2. It's exactly what it says. We're experimenting with Fly Apps version 2, which is the latest implementation of Apps in Fly. We're running Dagger on it. I'm connected here, experimental dagger runner host, via WireGuard tunnel, and I'm running dagger run, the CLI, and I'm wrapping Mage CI. If your mind is blown, that's okay. I think you need to watch this video.

**Jerod Santo:** \[14:23\] So you're running Mage inside Dagger, inside Fly, on their v2 platform. Or locally.

**Gerhard Lazu:** I'm wrapping Mage in dagger run; dagger run is just a command; it's a CLI that connects my local command to a remote engine. It gives me this very nice view, which is my pipeline, and it's showing my Dagger pipeline that is running in this Dagger engine on Fly Apps v2, that I'm connecting to via WireGuard tunnel.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So what we can see here is we have three pipelines in one. And this is something that starts becoming even crazier. So we are building the runtime image, we are building the production image - which, by the way, makes use of the runtime image - and down here we are also running tests, mixed tests. But because nothing changed, everything is cached, it completes in seven seconds.

So let me go into application EX very quickly, and let me do a Foo2, just a comment, Foo2. And I'm going to run the same pipeline again. So now what's going to happen - it will detect the code change, and now it has to resolve the dependencies, compile the app, run the tests, compile the assets. And all this, we have a very nice UI that shows us the different pipelines, how they run and how they combine. I'm really excited about this. I don't know about you. Maybe you're still like trying to process what we're seeing...

**Jerod Santo:** Well, I'm still watching it stream by... And obviously, our listener here is imagining this in their mind, in their mind's eye. But it does seem very nice. I like the fact that it's going to cache everything. So let's say I just update an image in my assets folder, I don't touch any Elixir code, and I deploy that out. And with this new code, it's going to run just the mixed Phoenix digest command; it's not going to run compile, and stuff.

**Gerhard Lazu:** Not currently.

**Jerod Santo:** Ah, see? I went to the logical conclusion that you --

**Gerhard Lazu:** That's the next improvement. You beat me to it.

**Jerod Santo:** Okay, so I'm also excited. You'll have me excited later.

**Gerhard Lazu:** Almost excited, yes.

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** This is still good.

**Gerhard Lazu:** Now, if you're going to run this from start, by the way, it should finish right now, it will finish in a minute and a half.

**Jerod Santo:** Start to finish.

**Gerhard Lazu:** Start to finish in a minute and a half.

**Jerod Santo:** With no cache.

**Gerhard Lazu:** Well, you do have a cache. If you try to compile all the dependencies from scratch locally, it'll take you about six to seven minutes to get the dependencies compiled. Remember, you have to do it for both test, and prod, you have to digest the assets, build the image... There's a lot of stuff happening behind the scenes. The next improvement would be to split the static assets from the dependencies, from the actual application. So now all of a sudden you have like three inputs. Right now we have just the application, and the application means the dependencies, the static assets, and the application code. So it's all seen as one, which is why it would run everything if something changes in any of those files. One minute and 39 seconds, and just recompiled everything. And by the way, this would also rebuild the image if it needs to. Let's say we bumped Erlang; part of the same pipeline, it would rebuild at runtime, it would publish at runtime... All that would happen automatically. And that's why I don't have to worry.

There's a couple of good pull requests worth checking out. The first one is 454, if you're in our repo; you can see that whole migration. We removed the last makefile, we introduced Mage... That's a fairly big one, with a lot of refactoring there.

There is another one, 464, where we are reading the versions for all the different dependencies, the runtime dependencies - Erlang, Elixir, Node.js - from tool versions. And that's an ASDF configuration file. ASDF is - I think I need to refer to the page manage. So ASDF manage multiple runtime versions with a single CLI tool.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** \[18:00\] You could use brew to install Elixir, but then which version are you installing?

**Jerod Santo:** It doesn't do versioning very well, right? Having multiple copies or multiple versions of a binary, of a language runtime on your machine, and being able to switch between them is not easy with Homebrew. I think it's maybe possible with Homebrew, but not easy. Or maybe not possible. I'm not sure which one. But with ASDF, it's built specifically for this purpose.

So this goes way back to the days of RBENV, and - what was the big Ruby one? Because we had to do this in the Ruby world.

**Adam Stacoviak:** RVM.

**Jerod Santo:** RVM, Ruby Version Manager, and then there was NVM, Node Version Manager... And then there's probably EVM - maybe not - Elixir Version Manager... And so each little ecosystem, each language had their own version manager, and then ASDF folks came along and said, "Hey, let's build one that can handle all these distinct things with one API, one CLI." And it's a really nice tool. I've been using it for years, and excited to see this getting further into what we're doing. So keep going.

**Adam Stacoviak:** This also solves the one string to rule them all in terms of versioning too, right? We had an issue where there was multiple versions of Elixir in the codebase, and this is one now; only one.

**Jerod Santo:** Right.

**Gerhard Lazu:** Yes... If you're using it. So if you follow the updates of the contributing guide, you can see how to use ASDF to install all the things. Now, we are versioning two versions; we capture everything, including Mage, for example. Now, you wouldn't want to use Mage other than if you want to run the pipeline locally. There's also PostgreSQL. So PostgreSQL is also versioned using this. If, for example, you're in Linux, there's a couple of extra things that you need to do, because maybe you don't have some system dependencies. On macOS it just works.

So we are capturing every single dependency in this file, every single dependency version, down to the patch. So for example, with Brew - because you mentioned Brew, Jerod; you're right, there is a certain flexibility in terms of which version you can run right, to the minor. Some have major. So for example, PostgreSQL 14, or PostgreSQL 13; I think 13 is still available there. What you can't do - you can't say 14.1, or 14.8. And then there may be differences that you don't realize between your local development version that you're running... Everything looks fine; you push to production - guess what? Things start breaking suddenly, and you don't know why.

**Jerod Santo:** Well, we had one of those a long time ago, where it was actually the Erlang patch version that was different. Not even the minor or major version; it was just the patch, which had this bug in the TLS library, or something, that didn't exist on my local, but only existed in production. We ended up having to debug that sucker.

**Gerhard Lazu:** Exactly. So ASDF to manage all our dependencies locally. And you just need ASDF. That's it. I know there's certain tools which use Nix, but then - I forget the name; we mentioned it on Changelog. But if you have that, then you have to use the Nix Package Manager, and you have to install that. And I ran it for a while, but to be honest, you really want the NixOS to get the best experience. But then you're running Mac, you can get the Nix Package Manager, some things will be a bit weird, especially when you restart... At least I was my experience.

So ASDF is fairly lightweight for what it is and what it does. And we are reusing the tools versions file for our pipeline. We are reading this file in our pipeline, and that determines what version of Erlang we're using to compiling the image that we're using for tests, for example, and as well as building the final image; what version of PostgreSQL we are running in production, and so on and so forth.

**Jerod Santo:** Right. So it's .tool-versions... It's a hidden file, .tool-ersions. Is this an ASDF creation?

**Gerhard Lazu:** Yes.

**Jerod Santo:** It is. Okay. And what is the syntax, or what is the format of this? It looks like it's just like plain text? Do they have a spec, like "Here's how it works"? Or is it just simple enough that they don't need it?

**Gerhard Lazu:** \[21:52\] It's very simple. It has like multiple lines. On each line you have the name of the dependency, space, the version of that dependency. So you have Erlang, space, 25.3.2. New line. Elixir, space, 1.14.4, and so on and so forth.

**Jerod Santo:** Too simple to even write the spec down. Just look at it, and you can see how it works.

**Gerhard Lazu:** I know, right?

**Jerod Santo:** I do like simple tools. So as a homebrew user and an ASDF user, I sometimes have to ask myself the question of "What do I install this with?" And my go-to logic is like "Well, if I could ever imagine myself having to have two different versions on my machine at the same time... For instance, I have this project over here requiring Ruby 2.3.7, and then this project requiring Ruby 3.2.3, and I don't want to deal with switching, then I go with ASDF. Because of that, I'm a Homebrew install PostgreSQL guy, and now we have it inside of ASDF. And so do I need to uninstall and install with ASDF? Does that screw things up for me?

**Gerhard Lazu:** It doesn't screw things for you, no. It will keep things as they are. You can, for example -- it won't prevent you from running a PostgreSQL that you've installed via Homebrew. So there's no such guard in place.

**Jerod Santo:** Because it's all containerized, or at least isolated.

**Gerhard Lazu:** If you're using ASDF, it doesn't use containers. When you run the pipeline locally, basically it will ignore whatever you have running locally. It will read the versions from this ASDF-generated file, which is tools versions, and those are the versions that he will use for the pipeline, both locally and remotely.

Now, if you, for example, want to switch to PostgreSQL, the same version that we're running in production, the same version that we're testing with in our CI/CD system, what you want is obviously to do the ASDF integration. Usually, you want to integrate ASDF with your shell; that will prepend the ASDF path, which means that the PostgreSQL from ASDF will have precedence over the PostgreSQL from Homebrew.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** Same is true for Erlang, Elixir... So you can have Erlang installed via Homebrew, but as soon as you're in ASDF, and you have it nicely integrated with your shell, then automatically anything that you have installed with ASDF, that's what you'll be using in that specific directory.

**Jerod Santo:** Gotcha. So the pipeline though, it does use containers, correct?

**Gerhard Lazu:** Yes. Everything, all the operations actually run in containers. Imagine all the commands that you have in Docker files, right? You have like those one lines... Now, imagine if you could write those one lines in code. In our case, it's actually Go. We capture the equivalent of those lines -- thye're operations, basically. We're capturing the equivalent of those operations in Go code, they get submitted to the Dagger engine, they create a dag view of everything that needs to run, and it can reconcile what ran, what still needs to run, what has changed, which parts of the cache need invalidating, it has volumes... Behind the scenes, really, it leverages BuildKit, which is at the core of Docker, too.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** So anything that you can do -- and by the way, the dockerfile is just an interface to BuildKit.

**Jerod Santo:** So I love this... I love having one place to specify versions, and have all tooling and pipelining and production just do their thing... The one that always has scared me historically, or been more complicated, was Postgres, because sometimes a Postgres upgrade requires a data migration. How does this handle that circumstance?

**Gerhard Lazu:** So currently, the version that we have specified in tools versions is the one that we have deployed in Fly. So with Fly, when you deploy Postgres, you do it via the flyctl, and it's the version that we had at the time of running this command. It is a platform, so you run it, you have a ctl, and you also have a web interface. But in our case, we had flyctl, Postgres, deploy, create the cluster, with a whole clustering setup and everything... And at the time, we had 14.1 deployed.

\[25:59\] One of the things that are on my list to do is to deploy PostgreSQL again, like have another cluster, using Fly Machines, which is Apps v2, and basically pick whatever the latest 14 version is. I think it was 14.8 or 14.9 when I checked. I'm not sure one or the other. So once we do that, it will be like a data migration, and we will capture this version in our development environment via ASDF, which will automatically be picked by the pipeline, so that when we run any tests in our pipeline, in our GitHub Actions, GitHub Actions will obviously be connected to a Dagger engine, and the correct -- actually, the same PostgreSQL version will be used there as well. So we have dev, test, and production, same version. But the production is what determines the PostgreSQL version. And that happened when we deployed the cluster to begin with.

**Jerod Santo:** I follow. So if I want to upgrade Elixir, it's as easy as changing the version in the tool versions file.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** But if I want to upgrade Postgres, it's the other way around.

**Gerhard Lazu:** PostgreSQL yeah. Postgres is different, because it's like a stateful service... You're right. You have data... There's a bunch of things. You can obviously change it in the ASDF file, but that won't change what's deployed in production, because you're right, there's a data migration part to that.

**Jerod Santo:** Fair enough. It was not quite as cool as I thought it was, but it's still amazing, Gerhard.

**Gerhard Lazu:** Well, everything except that, right? The \[unintelligible 00:27:18.20\]

**Jerod Santo:** I'm two for two on finding the one thing it doesn't do...

**Gerhard Lazu:** You know where to look.

**Jerod Santo:** Oh, yeah, I do. I know what I like, and usually, what I want is the hard parts taken care of for me. So still, that's very cool. So the reason why I asked if this tools versions thing was ASDF, or if it was broader - because it seems like this little bit of our infrastructure at least could be generalizable enough to the point where maybe it's useful for people to say "Here is an ASDF-based pipeline integration that you can use."

**Gerhard Lazu:** Yup.

**Jerod Santo:** Do you think that's the case maybe?

**Gerhard Lazu:** That is possible, yes. That requires a bunch of things on the Dagger side as well. So right now - -I mean, obviously, you can get inspired by our pipeline. You can take it as is, and change it, and adapt it to your needs... It is a starting point. But really, what you want is reusable pipeline fragments or components. So for example, if you had like Elixir tests, how would you run those? You would want a component that you can just consume. That doesn't exist in Dagger today, but it's somewhere there on the roadmap.

**Jerod Santo:** Very cool. Well, that's progress... And not perfection, but it's progress over perfection. And besides, we have to Kaizen again soon, so we'd have to have something else to strive for. You can't just --

**Adam Stacoviak:** You can't do it all now.

**Gerhard Lazu:** You haven't asked me something important, so I'm going to ask myself the question... Hey, Gerhard, how long does our pipeline take to run? \[laughs\]

**Jerod Santo:** Good question.

**Gerhard Lazu:** So it depends, right? If you have it cached. So even today, we are connecting from GitHub Actions to Docker running on Fly. And again, if you look through our GitHub Actions workflow, you will see that. There is a Fly WireGuard tunnel set up, and from GitHub Actions we connect to Fly. That's where Docker runs.

Internally, whenever you run an SDK, it automatically provisions whichever version of Dagger Engine it needs. So what that means is that whenever our GitHub Action runs, if it's in our repo, we have everything cached. Even though we have things cached, we weren't parallelizing our pipelines. So we were basically running, "Build me the runtime image sequentially, then move on to building the test image, then run the tests, then build the production image", and so on and so forth. So the whole thing was one long line. What we did part of 464 - we parallelized these pipelines. So now they run all at the same time.

So the last pull request which I merged - there weren't any code changes. It just had to recompile everything, rebuild everything, just make sure everything is fine. It took, I think, about two minutes. There was just like a Markdown file change. So what I'm curious is next time that you run it, Jerod - I think it used to be six to seven minutes for the pipeline to run... I think it will be around four minutes now; maybe even three minutes.

\[30:02\] The next thing is to switch - and this is the pull request which I haven't submitted yet - to the Fly Apps v2 Dagger Engine, that by the way, we can stop from within GitHub Actions. So because these are very small -- they're Firecracker-based, you can start them within 20 seconds. So you don't have to have this thing running all the time. You spin it up, the state is there, there's a local NVMe volume... And this is all basically managed by the Fly platform. Super-fast. You run your pipeline, the cache is there, the state is there, whatever needs to change changes... A few minutes late - again, in my tests, one minute and 35 seconds to deal with a code change; recompile everything, everything runs in parallel... And the deployment part - that's the one that basically just depends how long it takes for it to be deployed. You can add another few minutes. But within three to four minutes - actually even like three minutes, I think - you can get a code change into production.

**Adam Stacoviak:** That's awesome.

**Gerhard Lazu:** And that's much faster than what you had to deal with, Jerod. It was like eight, nine minutes...?

**Jerod Santo:** Yes.

**Adam Stacoviak:** So much faster.

**Jerod Santo:** I love it.

**Adam Stacoviak:** So much so that I would forget it, and then sometimes the build process would fail, or something would happen strangely, mainly from my stuff, really. I don't know if it's like just a me thing or a you think, Jerod, but I feel like --

**Jerod Santo:** No... It happens for me, too.

**Adam Stacoviak:** Okay, okay, I don't feel bad then. I'd forget about it and like "Okay, I have no idea how to restart that action, I guess. I guess I can go back to GitHub Actions and say try again..." But then there's another thing going on, so then Jerod deploys, and it succeeds, and it takes mine with it, so it's fine.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Because we're committed to main.

**Jerod Santo:** Very cool, Gerhard. I love it.

**Adam Stacoviak:** Chasing not the nines in that case, right? That's the anti-nines.

**Jerod Santo:** Chasing the zeros, man. We're chasing the zeros.

**Adam Stacoviak:** Chasing the zeros.

**Jerod Santo:** How fast can we get this thing?

**Gerhard Lazu:** Well, I don't think we can get it down to zero, but... \[laughs\]

**Jerod Santo:** Maybe we can get zero in the minutes column, you know?

**Gerhard Lazu:** We can dream that it's already there. It will take some seconds... Yeah, I think that will be -- it'll be very difficult, because even if you run it locally, where everything is as fast as it gets... You can have the fastest Mac; if you're trying to compile some code, it will take some number of seconds. And it's not just that, right? You have to spin the process up, you have to reestablish connections... You have to do all those things. You have to check the health checks, make sure it's healthy... So it will always take some number of minutes, because you're bringing a new instance. And by the way, this is like running in production, so you have like blue/green, you have like a lot of traffic, you're shifting traffic... So it will take some number of minutes to get the code change out in production. And that's only with one instance... Which brings us to the clustering part.

To go to Fly machines with our app, we'll definitely need to solve that problem. We will need to be able to cluster multiple instances of the Changelog app. Without that, we may -- I mean, if the host has a problem... With Nomad, with Apps v1, the instance could be migrated. With Apps v2, the instance cannot be migrated, because it's tied to a specific host. If that host becomes unavailable, there's nowhere to schedule the app. Because again, that's how the platform was designed. So the idea is you need to have more than one instance. So we need to solve clustering, Jerod. It's time.

**Jerod Santo:** So you're pushing this on me. I see what we're doing here. Yeah, this one's on me... By the way, as a follow-up to your last statement... I just ran our test suite locally. It took 17 seconds to run. So I will accept a deploy of 20 to 25 seconds, no problem. \[laughter\]

**Gerhard Lazu:** Sure.

**Jerod Santo:** Yes, I did not get around to this. Although to my credit, I stated that I probably will not get around to this during this Kaizen period... Because most of my efforts have been in and around the migration of Changelog News onto its own podcast, and the meta feed, which is our three shows, which are all distinct shows, so they can have their own feeds, their own subscriber base, etc. And then the Changelog show, which is all three of those shows in one show, and the one-time migration of stuff... We had to reimplement how we do our newsletter, and stuff... And so that was what I've been doing the last three months. And it's pretty much finished now. We do have an idea for how we can make Changelog News' web pages better, which I would love to do, because it's quite the upgrade from what it looks like right now, and it simplifies things as well... So that's kind of like what I was thinking about doing before this.

\[34:18\] But we have Honeycomb tracing now from Phoenix, which we didn't have previously, thanks to you, Gerhard. So I'm now without excuse, because I can monitor the speed changes as I make these caching changes. And I have a prototype from our friend Lars Wikman, who showed me a way of doing a clusterable caching solution which doesn't completely rip out the guts of what we're currently doing, which was my previous plan... So the skids are greased. And the observability is observable. By the way, you guys have seen Honeycomb has their new Open AI integration in there? I just saw it today.

**Adam Stacoviak:** No, I didn't see this.

**Gerhard Lazu:** I haven't.

**Jerod Santo:** Yeah, man...

**Adam Stacoviak:** Spill the beans.

**Jerod Santo:** This is my new favorite thing, is like, never making you write a SQL query again. Never make me write a - whatever Honeycomb queries are, again. Just let me explain in plain English what I want you to do, and then you figure it out. And they integrate that. It's still beta. It errored out 50% of time I've used it, and I've used it twice. So the first one erred, the second one worked. But you just kind of tell it what you want to see, and it's going to have the Open AI API come back with what looks like a pretty good query to get you started inside of Honeycomb.

So kudos on them for rolling that out quickly... And I think this is just every tool. I mean, this was one of my complaints with Grafana, was like Loki, or whatever... Gerhard, the stuff that you wrote inside of there was like learning a new language. And I liked them, because you could save them as dashboards, and I could look at them. But I was like "I ain't never gonna write one of these from scratch, because I don't have time for that." But if I can go in and tell Grafana what I want, and it can put together the actual query... Which GPTs are very good at. I mean, I haven't written a SQL query in months. I've edited some... You tell it what you want, it writes the query, and you edit it to work correctly. And so anyways, it's cool that we're starting to see this stuff getting integrated. So it's there, inside of Honeycomb. It's limited, 25 a day, or something... And it errored out a couple of times, but...

**Adam Stacoviak:** They did quote it as useful in terms of saying they don't know what use was for you. So they put the word "useful" in quotes.

**Jerod Santo:** They hope it's useful.

**Adam Stacoviak:** Well, they said that \[unintelligible 00:36:29.00\] will produce "useful queries." And they said it's a loose term, because they're not sure, it's impossible for them to know up front what the perfect query is for you. So I guess erring out is one thing, but a bad query or something that's not useful --

**Jerod Santo:** Yeah, and that could have been a one-off. I literally have used it a couple times, and it erred one time. No big deal.

**Adam Stacoviak:** I'm looking at this, though; it's pretty cool. They have a gift at the top, and it's like "Users with the highest shopping cart totals. Results." And "Slowest DB queries. Results."

**Jerod Santo:** Because that's what you -- you almost always know what you want to see, right? Or at least you have an idea of where you'd like to start. "I need to know this." But it's hard to get from there to the query. It's not like hard-hard, but it's like speed bumps.

**Adam Stacoviak:** Sometimes that pain too, as a user, will make you not even use the tool at all.

**Jerod Santo:** Totally.

**Adam Stacoviak:** That's what I love about the way that generative AI is - I wouldn't even say disrupting; I would just say like "Man, fine-tuning the useful experience of something..." Because Honeycomb is so powerful, but only if you have certain keys to unlock doors. And this just lets you bypass the keys, because they're just like "Hey, go find me keys." It's kind of cool.

**Jerod Santo:** Sentry is doing something similar. I've been inside the Sentry dashboard... By the way, those are both sponsors of ours. This is not sponsored conversation by any means, it just happened to be the tools that we're using. And Sentry has this thing where they're like "Do you want us to tell you what might be the problem?" Obviously, that's not how it's worded inside their dashboard.

**Adam Stacoviak:** That's terrible copy. Rewrite that.

**Jerod Santo:** \[37:56\] I know. I'm not giving it credit, because I don't have the dashboard open. But it's like "Click on this button, and we will try to determine not just what this error is, but like..." It's kind of like "Let me google that for you", but on steroids. Anyways... I just liked the idea that all these developer tools are just getting these upgrades that make them more usable, at clips that are really fast, and super-useful. So anyways... Side convo.

**Adam Stacoviak:** Yeah, I concur.

**Jerod Santo:** But I have what I need with Honeycomb.

**Gerhard Lazu:** Yeah. That was pull request 456, by the way, if you want to go and check it out, how we integrated it. You can see the code changes. It wasn't that many, but you can see how we added -- how we were sending app traces to Honeycomb. I want to give a shout-out to A.J. Foster...

**Jerod Santo:** Shout-out.

**Gerhard Lazu:** Yeah, shout-out to A.J. Foster. He's aj-foster on GitHub. He had a good blog post about how to do that integration, which by the way, was inspired by Dave Lucius' blogpost. And that's daviddog187 on GitHub. So shout out to daviddog187. Thank you, Dave. Between the two of you, that was super-easy. And I added links in that pull request, 456, and you can check it out.

**Jerod Santo:** Nice.

**Gerhard Lazu:** So if anyone wants to do this integration - again, it was super-easy following these two blog posts.

**Adam Stacoviak:** Super-easy. Barely an inconvenience.

**Gerhard Lazu:** Yup. It just took an hour. That was it. And most of it was like figuring out where to get a credential, how to get it right, things like that.

**Jerod Santo:** Right. Awesome. Thanks, guys.

**Gerhard Lazu:** Just the wiring. I guess I could have asked ChatGPT for that...

**Jerod Santo:** Ah it's cut-off date it was, it's when they wrote it, you know? Although the new version is getting browsing, which Bard has... So I've done a little bit of Bard versus ChatGPT, just literally copy-paste the same command. I don't know if you have tried Bard yet.

**Gerhard Lazu:** Nope.

**Adam Stacoviak:** Still not yet.

**Jerod Santo:** And Bard has answered -- I mean, Google has answered to a certain extent. I still think GPT-4 specifically is better than Bard, because Bard by default, a) no cost. So I am paying for the Plus to get access to the faster features, 20 bucks a month, on Open AI. Bard is free to use; you have to be signed in, obviously... But it has default access to the internet. So you can like paste in a URL and say "Summarize this for me", or whatever you want to say, and it will go crawl that sucker and spit it into itself. So that's super-useful for documentation purposes.

And the new -- I mean, Open AI will be there briefly, like they have with browsing... But the same exact command -- all coding stuff; I don't care as much about the other stuff, but just the comparisons... And Bard has been 100% inaccurate on Elixir code. \[laughs\] It's completely failed on every attempt.

**Gerhard Lazu:** There's a lot of improvements that have to ship.

**Jerod Santo:** There is.

**Gerhard Lazu:** That's what I'm thinking.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Kaizen!

**Jerod Santo:** They need to kaizen that sucker. But it's nice for other -- I mean, it's cool to see the different responses. They both need to get better, but I always just thought that was really funny... Because the best thing is that I don't have in RAM storage Elixir, certain functions... I just, I use it enough, and I know "Okay, the enum module has these functions, but then like other ones are in list, other ones are in map... What's the function signature..." And I'm so insecure about my knowledge that every time -- and ChatGPT has done it as well; Bard was wrong, and I 100% believed it. I'm like "Oh, cool. I love this." And I went and tried it, and like, no, you can't do that. \[laughs\]

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** But I would love it if you could... So I think it's very optimistic.

**Adam Stacoviak:** Yes...

**Gerhard Lazu:** Well, if you look in Changelog discussion 452, which is again, the one for this episode, I asked ChatGPT "If we deployed 120 times between March 8th and May 20th, how many deploys per day did we do?" And it was accurate. It could figure out how many days there are between March 8th and May 20th. It was so nice. The answer is 1.62. There's a screenshot. 1.62. That's how many deploys per day we did.

**Jerod Santo:** Really?

**Gerhard Lazu:** And most of those were Jerod's changes. Yeah. Obviously, not every commit results in a deploy, because you batch them, so it's not quite that many... But one per day - I think we had one per day on average.

**Jerod Santo:** Right. Well, there's definitely some heavylifting there. So also, I am not a pull requests person, as you can tell. You keep referring to your PRs by number; you probably have like little tattoos with PR numbers on them...

**Gerhard Lazu:** Nope.

**Jerod Santo:** \[42:15\] You're like "This point in time, my first commit to Dagger, PR number--" No, just messing with you. But I'm just like a trunk developer. I'm just right there. I just want it to go out.

**Gerhard Lazu:** Me too. I think this context is perfect. The Changelog - and we developed it from the beginning. Every commit to main, master will go into production. That's it.

**Jerod Santo:** Right. So yeah, so I just keep doing that... \[laughs\] I don't have the patience.

**Gerhard Lazu:** The only reason why it's pull requested is because of these Kaizens. Like, what do we reference? "Oh, that commit, and there's that other commit, and there's that third commit... If you put them together, that's how we did it." It's a lot more difficult to talk about them.

**Jerod Santo:** Right. Well, that's why we're talking about your work more than mine, because I don't remember any of the individual things that I did.

**Gerhard Lazu:** Exactly. And by the way, Jerod did a lot more work than I did, just to make it clear. I just have pull requests to prove it. He has lots of commits.

**Jerod Santo:** That's true. You've got receipts. Fair enough... Well, your stuff is cooler, too.

**Adam Stacoviak:** The one thing about ChatGPT question is you didn't reference the year. Doesn't it matter?

**Gerhard Lazu:** It shouldn't.

**Adam Stacoviak:** Like, March 8th through May 20th will always be the same no matter the year, right?

**Jerod Santo:** As long as it's not a leap -- Gerhard knows leap years.

**Adam Stacoviak:** That's right.

**Gerhard Lazu:** I do. Yes.

**Jerod Santo:** You're going to leave your baby.

**Gerhard Lazu:** Yup. February 29th. So as long as you don't have to worry about February 29th.

**Adam Stacoviak:** Yeah, because March will always have 31 days, and I think May is also a 31-day month.

**Jerod Santo:** And here's the question - would it account for that if you went like January to May, ask for the day count? Would it say "Well, it depends on the year, because of leap years." Let's try it and see what happens.

**Jerod Santo:** Alright. Follow back up on that.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Alright. In the meantime, what else have we done during this time period? What else at least is worth talking about?

**Gerhard Lazu:** Well, I would like to give a shout-out to Ken Kost for W3c HTML Validation Fixes, That's pull request 462.

**Jerod Santo:** Oh, yes.

**Gerhard Lazu:** Thank you for contributing that. That was a good one.

**Jerod Santo:** Ken would like to get more involved. He hopped into our channel and said, "Hey, I'd like to hack on this." And I just honestly don't have a great answer to that. I'm just like "I would love help, but we don't know what we're doing..." \[laughter\]

**Gerhard Lazu:** Pretty much. We're just making this stuff as we go along, yeah...

**Jerod Santo:** I mean, when I see the thing, I do a thing... And I have visions in my head, but I don't write those visions down... Because a lot of those versions aren't ever going to be worked on. So it's tough having contributions. I love that he found a way of contributing. It was awesome. He just went through and fixed all of our HTML valid, he has an easy merge. But I wish we had about our story around contributions.

**Adam Stacoviak:** Something I want that he might be able to do is the ability to have Tailwind built into the app alongside our current SaaS pipeline, so we can incrementally move away from old design to something that's Tailwind-powered.

**Gerhard Lazu:** That's a good one.

**Adam Stacoviak:** And that requires a bit of infrastructure to do that, right Jerod? I know, you said you could do it...

**Jerod Santo:** That one's on my hit list. So there's things that I'm just planning on doing, that I'm not going to write up for someone else, because then I'll have to tell them exactly what I'm thinking... It just becomes -- now they like work for us, or something, and I'm like "Ehm..."

**Adam Stacoviak:** It'd be a task. You find your own job, you make your own job around here if you want a job, okay? We're not making your job for you.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** But that's the hard part, though.

**Jerod Santo:** It is hard.

**Adam Stacoviak:** Our repo is almost like open source, not so much anti-contribution, but we don't know how to tell you to contribute. It's not quite Ben Johnson level, where it's like "My code, limited contribution." Welcome, but in certain contexts, it's just we don't have a label out there for easy changes to make, for example, and certain tasks just kind of like hanging out there.

**Jerod Santo:** And we never have, and I don't know if we ever will; it's just a hard problem to solve without having a very clear and specified public roadmap of where we're headed with the website. But we make decisions all the time that changed where we're headed, and they could be like 30 minutes before I code them up. There probably are things that we could have out there, but we just don't... So thank you, Ken, for finding the way.

**Adam Stacoviak:** \[46:18\] Even this show here - this show was named something else. No, not the show. Changelog News was named something else for a bit there. And up to like the legit 11th hour, was it renamed back to something that was more meaningful, I suppose, to the brand?

**Jerod Santo:** Yeah. Or more aligned, at least.

**Adam Stacoviak:** And then all the -- you had done some schema, some visualizations in Obsidian, with how the feeds would shake out, and which one would be the primary feed... It was until like the 11.5 hour of that change, and then we were like "Okay, cool." Because you and I both had --

**Jerod Santo:** Because we don't always agree on things. I don't know if everybody knows that, but Adam and I don't always agree. \[laughs\]

**Adam Stacoviak:** Well, we partially agree, and we're just still sort of in that unclear state... It's like "Well, I kind of agree with that..."

**Jerod Santo:** Yeah. Or just not confident yet.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Sometimes we just need like the other person to become confident before we will be. I'm like "Well, Adam's not sure, I'm not sure." But once he becomes more sure, it's like "This is starting to feel good." Or I'll be 100% sure and have to convince him. And if I can, then he becomes sure. And if I can't --

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I mean, this is typical business stuff, but it makes it hard... And I definitely have empathy for people building in public. And there are teams that have SaaS products that are either open source, or open source-ish SaaS products with public roadmaps, where they're taking their users input and stuff, and trying to pick a direction... And I think that's just a very, very hard thing to do well.

**Gerhard Lazu:** Tell me about it.

**Jerod Santo:** I actually watched the Homer Simpson car clip the other day, the four-minute extract on YouTube, of when they asked Homer Simpson to design the car. It was such a good little analogy for the software world. And the best part is at the very end they go to present the car, and it has all the features. I'm not sure if you guys have seen this.

**Adam Stacoviak:** But it's ugly.

**Jerod Santo:** You know meme. Yeah, it's ugly, but it's souped up. I mean, it's got tons of stuff. And they present it to this crowd, because it's like a concept car. And the presenter goes to name how much it'll cost, and the guy just whispers it into his ear, and he's like "It costs what?!" And it's like $80,000 or something, and nobody wants it, because they just packed it to the brim.

**Adam Stacoviak:** That's right.

**Jerod Santo:** And so not only is it ugly, and that nobody would ever buy, but it's also completely too expensive, which - software, right?

**Adam Stacoviak:** It is half the battle, getting the price right. The right product, the right price, the right availability, the right quality... All the rights. Gerhard, in that example you shared earlier that visualization of all the dependencies and whatnot, the pipeline being built; you had Apps v2 mentioned. What's not in our list to talk about, but I'm curious of, since you were playing with Apps v2 was the machines versus Apps v2 consideration. We talked about it the last time we talked. Can you share anything on that front? Has there been experimentation, evaluation?

**Gerhard Lazu:** That was the one that I was showing... So we will ignore Changelog Social for now. There's a whole Changelog Social side of our infrastructure that we can ignore. We have three things today important for Changelog that are running on Apps v2. Apps v2 is the Fly.io platform that is based on Nomad scheduling. So there's a couple of limitations with that. Basically, it's the scale that Fly reached... And that basically meant that various things weren't working quite as well. There's a whole thread on Discourse where Kurt was very transparent about some of the issues they encountered with Apps v1 and what they're doing about that. So apps v2 is a complete redesign of the scheduling. The way I understand it, it's like their own proprietary scheduling, which does not use Nomad, does not use Kubernetes, does not use any of the things that you may expect... And as a result, it's a lot more robust, it's built for their scale, for what they need right now, and what it means in practice is for us, it's really, really fast to use and deploy things onto.

\[50:14\] So it means that you can get very fast, VM-like containers. It's using Firecracker VM, again, my understanding, behind the scenes... And they spin up very quickly, but they have all the security that you would expect from a VM. So spin up time is seconds, really; even less, depending on what you're doing. But obviously, by the time you do health checks and a bunch of other things, it can take, in our case, some things 20 seconds, 30 seconds to come up and be healthy, and for us to be able to use them.

These Apps v2 - they are pinned to specific machines, hosts, like physical hosts in this case. What that means for us is that we can't run just one. So right now we have a single instance of Changelog running. It's been like that for quite some time, and that's why the clustering is important, so we have more than one. But that's okay, because we have the CDN in front, and we do a bunch of things where even if the app goes down, we are still available. And Jerod did a couple of improvements, which means even the posts, for example - now they continue being available, when you do certain requests against like news items, and whatnot.

So our availability really relies on Fastly. And what that means is that it takes like a once every five years sort of event to take us offline, which is again, we discussed - I forget which Kaizen it was, but we talked about that, when half the internet was down...

**Adam Stacoviak:** Like two or three, I bet.

**Jerod Santo:** It happened once.

**Gerhard Lazu:** Exactly. Only once, and that was like in seven, eight years. So I think it's okay. And even then, it was fixed fairly quickly.

**Jerod Santo:** It's kinda like The End of Cable Guy. Have you guys seen The End of Cable Guy? Where Jim Carrey falls onto the broadcast dish...

**Gerhard Lazu:** No...

**Jerod Santo:** ...and everyone's TVs just go to fuzz. \[extract 00:51:52.07\] And they suddenly realize there's a whole world outside. And they look out their window, they step outside, their feet touch the grass, and they're like "Wow." That's what we did that day, when Fastly went down. The whole internet was basically down, because Fastly powered so much of it, that we just took a walk in the park.

**Gerhard Lazu:** Exactly. Systems were affected that you didn't even know existed.

**Jerod Santo:** And I just texted Gerhard, just like "Gerhard, what are you doing? It's down!"

**Gerhard Lazu:** "Sunbathing." That's what I remember.

**Jerod Santo:** That's right. You were sunbathing, weren't you? \[laughter\]

**Gerhard Lazu:** Exactly. It was like a day off, so it was good. Yeah.

**Adam Stacoviak:** Oh, gosh... TMI.

**Gerhard Lazu:** BBC was down, and the New York Times was down, and The Guardian was down... Changelog - it doesn't matter. It's okay. All the other big news companies are down. Anyways, the point was, coming back, that with Apps v2, if the host is unavailable, the app cannot be scheduled somewhere else. So we have to have more than one. We can't have just one. With nomad, with Apps v2, let's say the host was down, the same app could be scheduled elsewhere. Basically, the apps could move around the platform. In this case, in Apps v2, they're pinned to physical hosts.

So even though they're faster, they're better, they're more self-contained, like when one thing fails, it doesn't affect -- it's a lot more resilient; the platform as a whole is a lot more resilient. But that means that you have to design with this in mind, right? ...with blast radiuses, and when one thing goes down, how do you basically work with that, with partial unavailability? And it makes sense, but it means we need clustering.

So moving something like for example Dagger Engine, it's okay. Or Docker. Because if that's down, that's okay; it can fall back to whatever is local. And by the way, we do that in our pipeline. If PostgreSQL is down - well, you're already clustering that. You know, we have, again, some sort of redundancy there. In our case, we had one primary and one replica. And by the way, I think we should look into that as well, to see if we can get a proper, managed PostgreSQL service. We keep talking about that. Maybe Crunchy, maybe Supabase, try a few and see what sticks.

\[54:12\] To continue, we can still run on Fly for the PostgreSQL instance, even though I think they were mentioning at some point they will want to invest in that... So we'll see where that goes. Things may have changed; again, this was on their forum.

So we can move Dagger Engine, Docker, we can move PostgreSQL to Apps v2, to machines, but the app itself, it's a bit more problematic. Not without the clustering part, because of what I explained, like the limitation with hosts. So while it's a modern platform, it's very performant - again, all the tests which are ran, you get like very nice CPUs, the AMD \[unintelligible 00:54:43.23\] they're yours, especially if you get like the performance instances... You get local NVMes, again, very fast... But if the host becomes unavailable, it won't get moved.

**Adam Stacoviak:** So we have to get the clustering to do Apps v2 properly.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** Alright, Jerod...

**Jerod Santo:** The whole world is on my shoulders.

**Gerhard Lazu:** The whole Changelog world. You just quantified that.

**Adam Stacoviak:** There's a lot of things too we just talked about, Gerhard. You mentioned news items... I know they're still on our infrastructure, Jerod, but even -- there's a lot with this chain from weekly, and news items, and this news homepage, to this world we're in now, which is sort of like obsolete, and primed to delete code...

**Gerhard Lazu:** Right. There's a lot of places that we could delete from the app code, and we just haven't, because a) you want to make sure that you like this new home that you're living in for a little while...

**Gerhard Lazu:** Yes.

**Jerod Santo:** ...and you're not going to be like "Why did I throw that furniture away?"

**Adam Stacoviak:** Well, I like it a lot better already. I got my feet up.

**Jerod Santo:** I'm liking it, too. I don't think we're gonna go back... But I wasn't gonna rush into deleting the code. I do love to delete code, but my least favorite command is git revert, you know? A lot of the stuff that we built, even the whole impressions thing and all that - it's just obsolete. We're just not using it anymore. We're not doing news items like we used to.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And in fact, my concept, which - I guess before we started recording, we were talking about STI, Single Table Inheritance; Gerhard and I were reminiscing on more stories from the old Rails days... This was a feature - it's probably still in there - where you can do a classical object-oriented inheritance with a single database table, and use a type column to instantiate different classes. So you could have a table called Pets, and classes called dog and cat, which both inherit from Pet, but they get stored together in one table.

And my concept when I built this site - you know, you make certain decisions that are foundational to an application. And one of them, which served us very well for many years, was everything's a news item. And every news item points to something. So it can be on our website, it can be on somebody else's website, it can be audio, it can be video, it can be text, it can be a tweet, it can be whatever. And we decorate those differently, based on information we have about the news item itself. Now, I didn't actually use single-table inheritance to implement this, it's just similar conceptually. And that was great, and it served us very well for probably all the years until right now, where we literally are abandoning the news item part of what we do, and we're only publishing blog posts and episodes, audio episodes, and every other news item is just kind of like an appendage that is still there in the data structures, but only represents things that could just be represented directly, if I had to make that decision.

**Adam Stacoviak:** Aren't comments also hanging on the news items, too?

**Jerod Santo:** They are. Yeah, they're attached to news items.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Because that was like the foundational, atomic unit of content in the CMS. Like I said, it was good for us for many years, but as we simplify and change now, where we're just publishing -- I write Changelog News in Markdown, which I love. But Changelog Weekly was generated from a list of news items that we published throughout the week. And that's a foundational change to the way that we do content.

\[58:04\] This one is simpler, and I think more sustainable, and hopefully produces better content over time. But all of our infrastructure is built for that other way, and so there's stuff that we can delete, but there's also stuff that's just gonna be there, because it's like ripping out your circulatory system.

**Adam Stacoviak:** Well, when you look at, for example, changelog.com/podcast, which is where this show is at right now... The list of things there are news items.

**Jerod Santo:** Right. Everything we fetch is news items.

**Adam Stacoviak:** Right. Unless we change the design dramatically to render this obsolete, this still is pertinent. This is still useful.

**Jerod Santo:** Oh, yeah, we're still using that, for sure. That's why I say, we're not going to rip out certain things. But there's areas of the codebase that are news item-related that could definitely go away.

**Adam Stacoviak:** Like in the admin for creating a new issue, which was once Changelog Weekly - that can go away completely, because --

**Jerod Santo:** Right. We don't use that anymore.

**Adam Stacoviak:** Yeah, we're not turning back from that.

**Jerod Santo:** And we attached the newsletter content -- so Changelog News goes out at the exact same time, both the episode and the email, and we attach the email content directly to the episode, not to a news item. And so yeah, issues are gone, news ads can go away... There's a bunch of stuff in there around scheduling sponsorships - all that stuff was based on the old system... So yeah, there, we could definitely do some spring cleaning, probably summer cleaning at this point... But then you're like "Well, it's also not hurting anything, and they're sure waiting on me for this clustering feature... So maybe I'll work on that instead."

**Adam Stacoviak:** I love it man. Digging the changes, digging the Kaizen, digging the commitment to incremental change. It reminds me of the book Atomic Habits. If you can make a 1%, half a percent change today, and you do that for three or four days straight - well, what did you do? You made an almost 5% change. And you stress out about "I can't do all of it today." That's okay. Just do what you can today. Just enough to move the needle forward. Whatever it takes to progress, do that thing. We've been doing that for many, many years now, collectively. We've embodied that with Kaizen on Ship It, and now we've brought it here to Changelog & Friends with our oldest friend, Gerhard, with a sheer commitment to chasing the nines...

**Jerod Santo:** And the zeros...

**Adam Stacoviak:** ...the best pipeline ever. Like, TM that at the end, right? Trademark that thing. "The best pipeline ever."

**Gerhard Lazu:** It is world-class, honestly.

**Adam Stacoviak:** Gosh!

**Gerhard Lazu:** No one has a better one. No one has a better pipeline, seriously.

**Jerod Santo:** Do you hear that out there? Show us your pipeline that's better than ours. \[laughs\]

**Gerhard Lazu:** Yeah. If you check out the code to see a pipeline as complicated as ours in code, and how it all combines, with apt dependencies, with versioning, with how the app gets compiled... We even have - and again, I haven't finished this - the Erlang releases.

**Jerod Santo:** Let's get that sucker down.

**Gerhard Lazu:** And the Elixir releases. It's not there, again. And no one has thought of this, like "Hey, Gerhard, can you please get to those Erlang releases?" Or "Hey, Gerhard, can you please operate PostgreSQL?" These things happen organically. Because you're kind of like in the middle of it, and you kind of understand what the system needs; it's like a living, breathing thing. And if you have half an hour - and I even talked about this way back when - what is the most important thing I can do right now that will make this thing slightly better? An hour tomorrow, whatever the case; I have a weekend, two hours. Okay, so what can I do in those two hours? And all those things add up. And two months later, it's amazing how much has changed. And that's why we're trying to capture these changes in the Kaizen, because again, if you look at it every day, it's not a lot there.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Same thing with News. I've seen there's so many things that you had to do, Jerod, to get those news --

**Jerod Santo:** It was way too much work. I don't know what we were thinking.

**Gerhard Lazu:** It was worth it.

**Adam Stacoviak:** We had great ambitions, you know? It's always good to have good ambitions, but it's okay to admit you fail. We just didn't quit soon enough, Jerod. We just kept going, for years. We had the ultimate limp for many years.

**Jerod Santo:** Right. Well, so when you're dedicated to consistency, it's hard to stop something and do something different. Because like one of your major aims is to consistently do the thing that you said you're gonna do.

\[01:02:05.15\] And so yeah, stopping, and starting, and making changes - these are hard decisions to make, and especially when they require heavylifting... And you're experimenting. We didn't know if people would like Changelog News, so we started shipping it inside of our current infrastructure. If we had done all that work, and then people were like "This show sucks. Please stop putting this into my Changelog feed", then it would have been a bunch of wasted effort.

So I feel like we went in the right order, at least, and we're here now. There's a lot of things that we can improve, and we are dedicated to consistency on Kaizen every two months. So we won't have an episode number quite as sweet as every 10th, like Gerhard had on Ship It, but we do want to do it every two months. And we do have this discussions thread... So Gerhard, lay this out for folks. You can participate in our Kaizens, you can give us ideas of things you want us to try, things you want us to talk about on these episodes... You can obviously hop into the code and find your way where it makes sense, and how you can help out, to get shout-outs. We even have our most popular Changelog T-shirt is the Kaizen T-shirt. I wore it at Open Source Summit and got some compliments... So maybe you can get yourself a Kaizen shirt by getting involved... But each Kaizen episode has a discussion that we use on github.com/thechangelog/changelog.com. Hop in there, tell us what we should do for Kaizen 11. We will be in there, discussing what we're going to work on for Kaizen 11... And - what else? Anything else left to say here?

**Gerhard Lazu:** I would like to give a shout-out to Jason Bosco. He's the one that participated in Kaizen 10, with Typesense. Thank you, Jason.

**Jerod Santo:** Our partners, Typesense, they are powering our search, and we had some questions around how it worked. It sounds like it's working as advertised, at least at the basic integration. The key answer direct matches will beat fuzzy matches every time, I guess. It makes sense. It's just unfortunate, because LLMs versus LLM was the search terms we were using, and you tend to search for one, not the other, even though you tend to say the other one. Because there's many of them. So yeah, thanks, Jason for hopping in there and explaining that to us.

**Adam Stacoviak:** It's a great example.

**Gerhard Lazu:** And we can certainly delete the Algolia code. So if someone wants to help with that, it's right there... \[laughs\]

**Adam Stacoviak:** Well, I already deleted the account and everything, so we have no account there. So the code's still there...

**Jerod Santo:** I thought the Algolia code was all gone. What's left?

**Gerhard Lazu:** Was it? I don't know. I mean, that's what it says, April 9th.

**Jerod Santo:** Oh yeah, I ripped out some Algolia stuff.

**Gerhard Lazu:** Did you? Okay, so that's done. Cool.

**Jerod Santo:** Yeah...

**Gerhard Lazu:** See, no pull request. I don't know. It's a commit. One of 50. Good luck finding it.

**Jerod Santo:** I'm a follower of that gardening principle, you know, like whatever area of the codebase you're in... And you do the same thing with upgrades and stuff. Like, while I'm working on this, if I see something and I'm like "Oh yeah, we can get rid of that", I just do it.

**Gerhard Lazu:** Boy scout rule.

**Jerod Santo:** I don't have the PR, but I'm just like constantly improving any area of the codebase that I'm touching... And once it became clear that we were done with Algolia, and I was just futzing with the search stuff, I deleted it.

**Adam Stacoviak:** The cool thing - I want to plug real quick, because Jason did so cool, and Kaizen 10's mentioned there... If you're not familiar with Typesense, the cool thing about Typesense really is it's super-fast in-memory search. So if you can hold a terabyte of your data in-memory... Jason can speak better than I can; I'm speaking out of turn, really, but... Super-fast, and it's in-memory, which is the best. So check it out if you don't know about it, typesense.org.

Well, what's next? Where should we go from here? This is the first official Changelog & Friends, which is a brand new flavor of this show. And Jerod, I'm excited about this, because we've got lots of friends, and we don't talk to them frequent enough... And every two months, we're coming back here with you at least, Gerhard, so maybe sooner... I know you have some homelab material coming up; we want to talk about UniFi, Ubiquiti, networking, maybe some VLANs... I'm trying to talk Jerod into VLANs. He's like "I don't wanna do that..."

**Jerod Santo:** Should I have VLANs, Gerhard?

**Gerhard Lazu:** You should, especially for your kids...

**Adam Stacoviak:** See?!

**Gerhard Lazu:** You should have a kids network... I found it the hard way.

**Jerod Santo:** That's exactly what Adam was telling me.

**Gerhard Lazu:** \[01:06:08.20\] I think that needs a drink, that story...

**Adam Stacoviak:** Yeah. I have a separate Wi-Fi for kids, that's on the kids VLAN...

**Jerod Santo:** Okay...

**Gerhard Lazu:** And IoT -- you want like an IoT network, for sure.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Okay. Sell me.

**Gerhard Lazu:** You want two networks. \[laughter\]

**Adam Stacoviak:** Always two.

**Gerhard Lazu:** Two routers, two networks, two ISPs... Oh, yeah.

**Jerod Santo:** You know how hard it was for me to get one ISP out here in the boondocks? Getting two is not easy.

**Gerhard Lazu:** I'm sure it was. Yeah. No Starlink?

**Jerod Santo:** I could have Starlink, yeah, I suppose... But that's expensive, right? 500 bucks down, and then 100 bucks a month.

**Adam Stacoviak:** It's like 700-ish dollars in just hardware alone, and then it's about 100 bucks a month, I want to say, for decent speeds...

**Jerod Santo:** As a backup? Can I turn it off and turn it on?

**Adam Stacoviak:** I don't think so.

**Jerod Santo:** Doubt it. That's too much for a backup. My main line's costing $115.

**Adam Stacoviak:** That would be cool, actually, if they can have a plan that's just for backup service. Because I mean, you already own the hardware... How hard is it to just metered use? Failover. I don't know if your Dream Machine Pro supports it, but I don't think that has WAN failover. Does it have WAN failover?

**Gerhard Lazu:** Yeah, the Dream Machine Pro has it, yeah.

**Adam Stacoviak:** It does have WAN failover. I know my USG Pro did... And I say "did" because I used to own that, and I sold it like a fool. I want that USG Pro back so bad. It's so cool. The UDM Pro's pretty cool too, but...

**Jerod Santo:** UniFi has -- is it UniFi is the company, or is that the device?

**Adam Stacoviak:** Ubiquiti is the company, UniFi is the product level.

**Jerod Santo:** Oh, Ubiquiti is the company.

**Adam Stacoviak:** Ubiquiti is the company. They do live at ui.com though, which is like --

**Jerod Santo:** Yeah, ui.com is a sweet domain.

**Adam Stacoviak:** Phenomenal domain.

**Jerod Santo:** So they have a product that I really want. So you know I have a small acreage, I've got eight and a half acres...

**Adam Stacoviak:** Do you really want that still?

**Jerod Santo:** Of course.

**Adam Stacoviak:** You do. Okay.

**Jerod Santo:** Why wouldn't I?

**Adam Stacoviak:** I wasn't sure if this is a long-term thing.

**Jerod Santo:** Oh, I still want it. So --

**Gerhard Lazu:** What do you want?

**Jerod Santo:** WiFi BaseStation XG. It's an outdoor, basically, dish that just broadcasts your WiFi for... Hundreds of miles... No. 1,500+, 5,000 square-foot coverage. So one of the things that I do around my land is that I walk, and I listen to our shows for QA, for clipping, for stuff like that... And sometimes I'm uploading stuff... I'm basically working and walking, which is a spectacular aspect of what we do. I love that part of the job. I get down to the orchard, and I don't have WiFi. I'm on cellular. I want blanket coverage. I want WiFi all over my land. And this sucker will get me there, the WiFi BaseStation XG. The problem with it, a) it's sold out. b) it's 1,500 bucks. But it is powered over a POE, and I can run it up to my roof...

**Adam Stacoviak:** I think you can probably go with maybe the AC Mesh Professional though. That might do a similar thing.

**Jerod Santo:** Is that one cheaper?

**Gerhard Lazu:** Check this out...

**Adam Stacoviak:** Oh, gosh...

**Gerhard Lazu:** Check the wireless systems that Mikrotik has.

**Jerod Santo:** Microtech?

**Adam Stacoviak:** Gerhard is sharing links with us...

**Gerhard Lazu:** I have both --

**Jerod Santo:** Of course you do. You have two.

**Gerhard Lazu:** Of course. Yeah. Ubiquiti and Mikrotik. So I have a UDM Pro... I basically have like two networks. One inside the other, and one alongside the other. So they are like interweaved. So I have like two 10G trunks, basically; 10-gigabit trunks. And I really like the Mikrotiks. I think they are underappreciated. You need to be a bit of a hacker to get into them. But once you set it up, you have terminal access, you have like nice autocompletion on the shell... You can run containers if you're crazy enough, but you can run containers natively on the router if you want to; they have container support. It's a proper operating system. And if you use Ubiquiti, it's great. It's almost like a Mac. Mikrotik is almost like Linux; so that's the difference.

**Adam Stacoviak:** Oh, okay.

**Gerhard Lazu:** But however, some of their latest hardware is just so good. So, so good. The UI will not be as polished, but do you need that, or do you want the stability of -- just think Linux for your network. You can do 25 gigabits, you can do SFP, you can do all sorts of crazy things.

**Adam Stacoviak:** \[01:10:08.00\] If there's good docs and there's an LLM to power it, I would totally configure it. Like \[unintelligible 01:10:10.09\] I configure my stack stuff on Linux every day. No GUIs here, you know? So... I'm cool with that.

**Gerhard Lazu:** Their YouTube channel, lately, it's just so good. If you look at the YouTube Mikrotik channel, they have so much good content. Check it out.

**Jerod Santo:** Yeah, I'll definitely have to check it out.

**Gerhard Lazu:** That's a friend recommendation, okay? \[laughs\]

**Adam Stacoviak:** Well, that would just be a tease, then. So what I was really trying to do is just tease what could be the future of this show... Like, having friends like you to come up and talk with us about things. And I'm a nerd, and I will nerd out with Jerod, and he's maybe slightly less of a nerd than I am on networking and IoT and homelabby stuff... But way more nerdier than I am in backend coding, and databases, and stuff.

**Jerod Santo:** It feels nice to be in a place where I'm the least nerdy person; it's usually I'm the most nerdy of all people in the room, but... Not in this room. I like this room.

**Adam Stacoviak:** Not in this room. Maybe we could talk about Mikrotik and UniFi, and the Mac versus Linux of networking. That'd be kind of cool. Coming to a Changelog & Friends near you in the future. Okay, cool. We do have a little list here at the very end of this discussion, which says "What else is coming up?" Can you blaze through that in one minute, Gerhard, so we can close out the show and tease the next Kaizen?

**Gerhard Lazu:** So I really think we should improve our integration with 1Password, and secrets in general. Because right now it's copy-pasta in our GitHub Actions, and that's not good. Like, now we have the code... We can connect programmatically to wherever we store our secrets in a nice way, and get them just in time, and keep them secret throughout. Like, no copy-pasting, none of that stuff.

We switched off Pingdom, and now we have Honeycomb, just Honeycomb, so we need to configure the SLOs, just to have a better understanding of what's happening there. I have Uptime Kuma running locally, and I think we should have an instance on Fly.io as well; at least like a few. Just like deploy them, see what's happening from the outside world.

There's a bunch of upgrades like PostgreSQL that has to be upgraded, Apps v2, like roll everything that we can to absolutely to Apps v2...

A follow-up with the Fastly guys, just like to share our VCL madness, and our UI experience, and just figure out what exactly we're doing wrong when it comes to Fastly. On my list, part of that is to look into Cloudflare. What did Cloudflare add to logs, and how easy it is to integrate with Honeycomb? Because if they have a good logging story, maybe we should check them out. R2 has no egress fees. Currently, we're storing stuff on AWS S3; if we went to Cloudflare R2, if we did like a couple of things... They have some amazing stuff; CloudFlare... A bunch of things. They are a really cool company in terms of the technology which they develop. And as you know, I like running two of everything, so why not two CDNs? I know it's crazy, but you know... Many things were crazy to begin with, and they turned out to be great ideas.

**Jerod Santo:** I'm one step ahead of you on the R2 thing. I have an open tab, I have an account that I've created for us over there. I began testing the waters. One thing that I immediately don't like about it is that it doesn't support Transmit. It's an S3-compatible API, but not enough that you can use your S3 client Transmit, like my S3 client Transmit... And that just hurts my heart. It's not going to be a blocker, but it hurts my heart.

**Adam Stacoviak:** Surely there's gonna be an R2 CLI though, where you could do the same thing that Transmit gives us with the CLI...?

**Jerod Santo:** Oh, there's definitely ways you can do it. You can use Cyberduck if you want to. Just like years and years of using Transmit... Technically Transmit doesn't support it, is probably the way that they would say it. But they say they're S3 API compatible, and Transmit is an S3 client, but it does not work. Their S3 does not work with R2, so it's not a one for one. It has something to do with streaming data, versus chunked uploads, or I don't know; I didn't read the description. But it's like a known thing that Transmit is like "Yeah, we might add support", but they haven't yet.

\[01:14:07.25\] So anyways, that just bugged me, because I just like to drag and drop stuff in there with the same SFTP client I've used for ever. But what really needs to happen is "Can we simply change all the environment variables in our code, and will the ex AWS work seamlessly? Will all of our stuff work seamlessly with R2, to upload to R2?" And if that works, then we're pretty much good to go.

I also need to go through and change a bunch of our hardcoded URLs in our text areas from the S3 URLs over to cdn.changelog.com, which we should have been using the whole time. I just didn't even think about that. Because then we could seamlessly switch the backend without changing anything. So that's like a migration step that'll have to happen. But anyways, I'm down the road a little bit on that, because our fees at AWS are going up, and we would love to have zero egress fees.

**Adam Stacoviak:** I was gonna say, we need some motivation. In March, our bill was $50. $53.69, actually. And here in May 2nd -- and June's coming here soon... May 2nd it's $132.32. So we've almost tripled our bill in three months.

**Jerod Santo:** Yeah, it's on track for like $450 this month.

**Adam Stacoviak:** Is it really?

**Jerod Santo:** I thought so, inside the cost explorer.

**Adam Stacoviak:** $450 this month?

**Jerod Santo:** Because you said May 2nd it was $150-something.

**Gerhard Lazu:** I'll have to check this out. Remember when we did this last time, when we set up shielding? That was exactly during a Kaizen. So I'll have to check this out to see what exactly is going on here.

**Jerod Santo:** I used the Cost Explorer to try to figure it out, and I just thought it was S3... But I didn't actually drill down on what changed and when. So if you want to do a little bit of research on that, Gerhard, it'd be good. But I just started thinking, "Well, now's the time. R2. Let's just eliminate this problem for us." So that's on my hit list.

Also on my hit list, obviously, is this clustering stuff, with the caching stuff... Changelog News improvements will continue... And then my big - not for the next Kaizen, but my very big desire this year, this calendar year... I'm not gonna guarantee it, but I'm gonna shoot for it, because I want to migrate off SuperCast, and I want to provide a first-party Changelog++ offering that solves a few of the pain points for our Plus Plus members, specifically one feed to rule them all is just not good for people. They don't want one fee they want. They want their Plus Plus feed, but not the Master feed, which is what it currently is. And so we can provide that if we're off SuperCast. And so that's just a thing I'm putting out there as a big item for me here soon.

**Adam Stacoviak:** That would be good... Because they want it. Gotta give them what they want.

**Jerod Santo:** They do. It's like 50% of the people who sign up for Plus Plus, say "Hey, can I have just JS Party, or just the Changelog and JS Party? I don't want the other shows." And I always have to say "No, you've got to have all of them", and that just sucks to say, because I understand that. Unfortunately, SuperCast doesn't have that functionality inside there; we can only give them one feed. Whereas once we're on our own platform, obviously, everybody gets their own feed, and you can customize it, and have multiples, or whatever you want to do. So that'll be super-nice.

**Adam Stacoviak:** We've proved it enough though that it makes sense to bring inside.

**Jerod Santo:** But it also requires some of this caching stuff to be taken care of. It does. It's just there's so many little things with subscription services, and like Stripe integration, and blah, blah, blah, blah, where you're like, you start to realize all of the emails you're gonna have to send...

**Adam Stacoviak:** That is true, at least a few.

**Jerod Santo:** I mean, it's probably five or six different emails just to manage a subscription, plus a dashboard where you can go and change things, cancellations, this person's card expired...

**Adam Stacoviak:** Refunds...

**Jerod Santo:** Refunds... Yeah, Stripe handles the refunds part, but...

**Adam Stacoviak:** Yeah. I mean, you've still got to trigger it though. You've gotta get that UI to do something; you've gotta just manage the fact that either you're doing it as an admin, or they're doing it on the requesting something... Then they're like "Where is support?" "We don't have support. This is just --"

**Jerod Santo:** You're looking at them.

**Adam Stacoviak:** Yeah, this is support right here. Yeah. Yeah, Gerhard, figure out why our bill went from basically 30 bucks to 130 bucks.

**Gerhard Lazu:** As soon as I get permissions to billing, I'll have a look into that.

**Jerod Santo:** Back on you, Adam... Alright.

**Adam Stacoviak:** Oh my gosh, okay.

**Gerhard Lazu:** One more thing. This is important. How can we run multiple instances of the Changelog, with same data, without the second instance behaving as like the live one? Without sending any emails, without doing anything like that? Because when I'll be setting up the new 2023 infrastructure - and that is right next on my list; that starts with PostgreSQL, with the app, with whatever we can migrate, I do like a long blue/green. And that means getting another production, and having like a nice, easy way of basically migrating data, migrating everything, so it's like very easy to switch back and forth if we need to. But always my concern has been, when you have a second production, it shouldn't be sending any emails or anything like that. So I think that's a follow-up for us. Obviously, we don't have to solve it now, but that's something on my mind.

**Jerod Santo:** We're getting long in the tooth... Let's call this a Kaizen. Let's call this a Changelog & Friends.

**Gerhard Lazu:** I'm very happy to have been here. Thank you very much for having me over, and I'm looking forward to the next one. Thank you.

**Jerod Santo:** Thanks for hanging with us.

**Gerhard Lazu:** Kaizen. Always.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Kaizen always.
