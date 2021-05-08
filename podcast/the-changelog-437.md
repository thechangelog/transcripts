**Jerod Santo:** Domen, you're here to tell us all about Nix. Welcome to The Changelog.

**Domen Kožar:** Thank you.

**Jerod Santo:** We are excited to have you... I heard a lot about Nix; I hear a lot of smart people saying the word Nix... And I also hear them saying UNIX. Not the same thing... But Nix is a lot of things, from my research... Can you tell us what it is, in your words?

**Domen Kožar:** Sure. The way I see it, it's an ecosystem of tools that you can use to develop, build and deploy software. In other words, I'd say it's a kind of Swiss Army knife of DevOps. Particularly, Nix is two things, or maybe even three, so that's what makes it a bit confusing... It's the language, the package manager as the facade, and it's a bunch of concepts behind it that are very different to a typical package manager.

**Jerod Santo:** Okay. So where did Nix come from? Who created it, and why did it come into the world?

**Domen Kožar:** Yeah, so I think it's almost 20 years now since Eelco Dolstra started research in Utrecht, if I'm correct, in the university there. He eventually had his Ph.D. thesis be about Nix... And also developed the first prototype and the first version of it. So that's where it started; it was essentially sponsored by grants, and so on.

**Jerod Santo:** So it was a research project sponsored by grants...

**Domen Kožar:** Exactly.

**Jerod Santo:** And what was the purpose? What was its intended--

**Domen Kožar:** \[00:04:11.28\] The purpose was - again, this is according to me talking to Eelco many years ago - to see if functional programming paradigms can be applied to solve packaging problems.

I think that the university there has a pretty big department on functional programming research, and this was one of the areas that they tried to apply to it.

**Jerod Santo:** So what was your introduction to Nix then? It came much later, I suppose, than that 2001, if it was about 20 years ago...

**Domen Kožar:** Yeah, it was around then, yeah.

**Jerod Santo:** It became a research project... When did you find it and what got you excited?

**Domen Kožar:** That's an excellent question, yeah. I was doing a lot of Python development in 2012, I believe it was... And particularly, I was working in the community called Plone. It's a CMS, pretty old now, and not that well known as it was before... But we had a lot of packages there. I think it was about 300 packages to install Plone, and some of it depended on C libraries, and so on... And you know, between Linux and macOS and all, things broke really, really often... So a friend of mine, Florian Friesdorf, actually discovered it, and I don't know to this day from who. He suggested "Look, this is a really cool research, and it works already. We should give it a try to solve these problems." So that's how I was introduced to it. And then I think only a year or two later I finally switched and gave it a try.

**Jerod Santo:** And what did you find? Was there an a-ha moment, or was there a feature, or a thing that it did that you appreciated? Because you're big into Nix at this point. You're doing the Nix.dev website, you've got the weekly newsletter... You came to us and said "Hey, let's talk about Nix", so this is something you're excited about. What was it that got you a year later?

**Domen Kožar:** I think my first a-ha moment was -- you know, I was back then doing consulting, and we had a client in Finland. I used to use Gentoo. In Gentoo, when you rebuild everything, you have to recompile (it's called) the world. And at that client I needed to upgrade in order to have the newest package, and I needed to compile for like ten hours...

Then I switched to Ubuntu at the time, and I really didn't like the inflexibility of it. So when I went into Nix, I was like "Oh, this is the best of two worlds. I can have this source distribution, and binary distribution model at the same time."

So when I tried Nix after Florian introduced it to me, and I saw that you can roll back, and there is a binary cache for all the packages from open search, that you just download everything instead of compiling, but you can apply a patch and it switches to the source model, I was like "Oh, this is what I need", so I can have both the convenience and hackability, if I may say...

On top of that, the design - you know, one of the biggest features advertised is the rollback. So the way Nix does -- it uses a symlink to switch between the previous and the current version, which is an atomic operation on Linux... So essentially, you can always roll back to the previous version of a system that you've activated. And the switch is atomic, because of the symlink primitive. And that was two things that really clicked in my head. I was like "Oh, this is something really better than what we have today."

**Adam Stacoviak:** If you're on Linux, is this in some cases a replacement or an augmentation of apt-get, or apt, or is this sort of like a whole separate thing where it's purely for building and delivering software? How do those two worlds play together, between like an apt, or an apt-get, or something like that? Are they completely different?

**Domen Kožar:** \[00:08:11.17\] Yeah, they're completely different. Nix replaces the whole stack... It exposes a so-called imperative package management model, which is what you are familiar with apt-get; so we can, say, install a package, or uninstall a package, and so on. But behind the scenes it works very differently. There is a folder called /nix/store, and in that folder it will put packages prefixed by a hash, the hash of all inputs that nix needed to build this package. So the idea there is that nix will always guarantee that the result of the binary output when you build a package is the result of all the inputs that it needed to build this package. Then it will expose, like I said, a command line interface over that, so you can uninstall and search packages.

What allows this flexibility of rollbacks is that these packages are completely installed in separate folders. In make you have prefix, where you can say where it will install something, and this is the nix store, slash, and then that hash. It's called a global store, where you have all the packages then.

**Jerod Santo:** Right. I think some of the confusion with Nix is because -- and I like the way you describe it as an ecosystem, is because there are different aspects to this. So there's NixOS, there's Nix Packages, there's Nix which appears to be a language, there's a Nix language that you use in order to configure things, and then there's also a shell, which maybe that's part of all that...

Maybe explain the ecosystem and the different bits, because when I read about NixOS, I think "Is this a Linux distribution, or is this a package manager?" And kind of where Adam is like "Can I use it with Debian and replace apt-get, or do I need to be using NixOS?" So help us understand the ecosystem better.

**Domen Kožar:** Usually, the answer to this question is "Yes, everything." \[laughter\]

**Jerod Santo:** Okay, okay. Ultimate flexibility.

**Domen Kožar:** Yeah. So at the very core, it's a bunch of design concepts and a language. The language allows you to write something to this Nix store and create a folder or a file, and so on. But then there are building blocks on top. So we have, as we said, the language, the package manager, which officially is supported on any Linux distribution, and macOS as well. And there's people who ported it to FreeBSD, there's people in high-performance computing, there's some people who are trying to use it there... There's a few blockers, but it's been successfully used. So besides the FreeBSD, and -- yeah, there's a bunch of smaller projects that people use it in some niche areas... But yeah, the main supported one is Linux and macOS.

Then there's the OS, which is a Linux distribution built on top of the package manager. So you can deploy -- it's for desktop and server, so you can have... For example, I run NixOS on my desktop and my servers. You have GNOME and KDE as two desktop environments, and there's a few others as well. And the servers - it's even bigger; there's tools to deploy with Terraform, or there's a Nix-specific tool called NixOps, and you can deploy to Amazon AWS, and Google, and a bunch of other providers. So it's big on the dev ops side.

And then there's different smaller parts of the ecosystem, like Home Manager, which allows you to manage home files, dotfiles. That's a separate project, but still, it's done by Nix. And yeah, people do all kinds of crazy stuff with the Nix API to build and deploy software, so it can be applied to any of these things.

**Jerod Santo:** \[00:12:18.03\] It's kind of nice, because it's approachable in that way. If you're already just running macOS, or maybe running Ubuntu as your development environment and you want to use Nix package manager, and have your own little isolated Nix environment, you can do that, so you don't have to go all-in. But if you wanna go all-in maybe a year later, you're loving it and you're wondering "Why don't I just use Nix for everything?", you can set it up as your desktop environment and run an entire distribution of Linux that has Nix at its core.

**Domen Kožar:** Yeah, exactly. I think the easiest way to get started is to use the nix-shell, which allows you to -- it's kind of like virtualenv, but system level, or  Ruby environment, or all these language-specific tools. And you can expose then a shell environment for your project with a bunch of tooling, which is reproducible, and you always get the same kind of tools... And it's pretty nice, because you can share that between Linux and MacOS. So we just drop that file in, and that's a really good start, I would say.

And yeah, the other one is to be able to install a bunch of software that otherwise the Linux distribution doesn't expose it, or something else... Those are the two common paths.

**Jerod Santo:** So at the core of Nix is this package management system, which is purely functional, as it says on the tin. So in addition to that, you have Nix packages, and this, I assume, is similar to what we'd expect with an apt-get, or with a Homebrew, where you have a package ecosystem of packages that you can install. Tell us about that - are they precompiled binaries? You said that most of them are, but you can patch them, and you can do all this different stuff... I did find the package management website and started searching for a few packages... Some newer ones, and I thought, "Well, maybe it's not in there yet." Like Deno... I was like "Oh, sure enough, there's a Deno package." So what all is in there, and maybe what kind of stuff isn't in there? Tell us about that ecosystem. Because when you buy into something and you wanna use some packages, then you're gonna want them to be there... And there's a lot of packages in the world. So how does a package become a Nix package? Talk about that side of the things.

**Domen Kožar:** Okay. So this is called the Nix Packages part of the ecosystem, which I've kind of left out... But yeah, it's on GitHub, so it's kind of easy to contribute. You just open a pull request. Now, we're not there yet, but we should hit 100,000 pull requests pretty soon. That's probably one of the biggest projects on GitHub right now. I would say it's pretty easy to contribute. And there is a project called Repology, where we track different distributions and package managers. As far as I know, Nix Packages is the biggest project out there.

Now, to be fair, Debian and others are pretty strict what goes in and what doesn't, and Nix Packages is just kind of like an ever-growing one... But I would say almost any package you wanted to install is in the Nix Packages collection.

And everything that is free is also built from source, and there is a binary for it, unless it's broken, or some other -- but yeah, by default we build all the packages on a part of the ecosystem called Hydra, which is kind of like a CI system, also built for Nix. It's the build farm, which has macOS, Linux, and also ARM v8 machines to compile these things and provide binaries for everyone.

**Adam Stacoviak:** \[00:16:00.03\] It seems like the core tenet of it really is about reproducible builds. It seems like that's the core feature that everything sort of hangs upon. Even in the documentation, when it talks about Nix, it says -- you know, a lot of what you've already said here, but it says "This means that it treats packages like values, and in purely functional programming languages such as Haskell, they are built by functions that don't have side effects, and they never change after they've been built. So really around this reproducible builds scenario, where you wanna ensure that the package you're using has never been changed, it hasn't been altered... And then some other features, such as rollbacks, or as you mentioned, atomic upgrades and rollbacks seem like other core tenets to why you might use it, and everything else is sort of like similar in nature to, say apt-get, or apt, or Homebrew. A lot of the reasons why you use it is very similar to that, but the core tenet being reproducible builds; being sure that the thing you're using in fact has never been changed, and what compiled it didn't inject any sort of side effects as a process.

**Domen Kožar:** Yeah, that's correct. I think there is a lot of benefits, and one of the jobs that we haven't been doing that great as a community is really enumerating all of them... Because one side of it is this page of reproducible builds, because of the purely functional model... But I don't like to explain it that way, because I think a lot of people might not be familiar with these terms and what it means in the context of package management. And we haven't been really able to put up a good way of "What are the benefits, the consequences of that design."

So yeah, you've enumerated a few, and there's a bunch of others... So on Nix.dev I've come up with a list that is incomplete... But yeah, rollbacks are the number one feature.

One of the cool things is that you can build your whole system remotely, on a different machine than yours, and then just copy everything to a different system, and just say activate, and in a matter of seconds you have the new system running there. So the build and deploy or activate phase are completely separate, which is especially nice when you have more than one machine, and so on.

So Nix as a language evaluates to so-called derivations. These are the instructions how to build a package, and then you can copy those to another machine, and then you can realize them - that's the term, which goes from this derivation into the actual build, which then produces the output.

On the way, you can also, instead of building substitutes - that's the technical term we use when, say, you download a package for this hash, which is then the binary you get, instead of building. That's a kind of pretty nice benefit, I think.

**Break:** \[00:19:06.17\]

**Jerod Santo:** So let's say I wanna use Nix to install Firefox, and I type "nix install firefox", or you can tell us what you would type... Or what do I do? And then tell us what Nix would do, and then we'll go from there and talk through what that provides, and why I might wanna do it that way.

**Domen Kožar:** Alright. Well, there's quite a lot going on behind the scenes, so let's go through each step. If you say "nix install firefox", Nix will first of all try to see where you're trying to install Firefox from... And by default, it will use Nix packages, which is the official, one of the sources it can install from. But it can be anything, so we'll skip that part for now; by default, it will use Nix Packages.

Then there is a top-level file in Nix Packages called all-packages. You can imagine this -- you know Nix language is kind of like JSON with functions... So in there you'll see a key Firefox, and it will point then to a file, which will import that file.

Inside the Firefox file (firefox.nix, wherever it is), there is a description of how to build Firefox. In the Nix language there is a primitive called derivation, which is kind of like the core of the whole concept. In the Firefox case, it will say -- you know, there's a bunch of dependencies, you have to run make with these flags, and a bunch of other things. And this derivation function is really the core of it... And what it will do is it will first go through all of the dependencies and build those, of course... You know, all to the bottom of it, which is something we call the bootstrap, where we build the minimum possible environment. Then it will build the minimum possible environment. Then it will build all those dependencies up to Firefox. And all of those dependencies go through this derivation function.

What happens in there is the derivation function gets a bunch of inputs, which you can imagine as like key-value pairs, essentially... And it passes that to a builder, which is some kind of an executable. By default in Nix all the builders are done in Bash, but you can have an executable as a builder, essentially, and pass all the inputs to it.

This builder, once it will be executed, is run in a sandbox environment; you can imagine this as something like a Docker environment, where it will not have access to the internet, it will be completely isolated from the file system, and so on.

The idea of this sandboxing is, of course, for the build to be reproducible, and only dependent on these inputs. That is one of the core design decisions. And as I've previously mentioned, all these inputs are then calculated -- there is a hash calculate out of these inputs, and this uniquely identifies how this package was built, and what is the source of this package. So not just the source, the binary of the thing, but also all the instructions for it.

So the builder will take care of the building part, and this is where I previously talked about evaluation and building separation kicks in. When you will install Firefox, it will find a Firefox file, it will evaluate this first... So it will evaluate the Firefox derivation, and then everything up to the bootstrapping bit. And then once that's done, it will start to build.

\[00:24:14.07\] And the building phase is not that interesting. There's essentially two parts to it. One is that it will use these derivation files to call this builder, as I've mentioned... But before it does that, it will also check with this hash if there exists a binary package for it, and it will substitute it if there is one. And if not, and if not, then it will go and build it.

How that works is that when the package is built, as I've mentioned, Nix will put it in the /nix/store/, and then hash and the name of the package, and then everything goes in there. And the same for all the dependencies.

So let's assume now that Nix downloaded some binaries as a dependency of Firefox, and then it builds the Firefox. Now it just has a bunch of folders in /nix/store, and now it will link those into something we would call file system hierarchy, which is the standard you're used to in Debian, for example, so /user and /opt, and so on. And it will just layer these things essentially together into something Nix calls profile. And this profile is really just one snapshot of when you installed a package, or a group of packages completely linked together.

So that's how Nix goes from this global store into an actual file system hierarchy that we're used to. It's one big assembling farm, the way to imagine it... This is then how you go through -- if you install something, it will install all the packages you had before, and then this package on top of it. So it's kind of like immutable; you build up these things. That's how I like to imagine this.

And the same when you uninstall, it will not remove the Firefox from the /nix/store directory, but it will just create a new profile version without Firefox linked in. And this is very typical in memory management, where you essentially just allocate, and then you garbage-collect when you want to. Nix works in a similar way. So then actually deleting packages would be an explicit garbage collect operation, where you go through these profile versions and you can say "Oh, keep just the last one", for example.

So that's the garbage collection bit... But let's go back to installing. Now we have this profile where Firefox was installed in, and Nix will activate it, which means that the specific snapshot of the profile is now the activated one. And these profiles can be stacked one upon another as well, and there is like the user profile, so each user can have a profile; each user can install their own set of packages, and then on NixOS, the distribution, there is also a system profile, which is the actual OS profile, that then represents the environment that you access, and then Nix exposes in a typical package manager Firefox in the path variable, for example.

**Jerod Santo:** So how does it accomplish that? So I understand completely, because it has /nix/store/unique-hash-firefox, or whatever... I understand how that provides for multiple versions installed on the same system, right? And I can also understand how once you have this ever-adding system where you're just adding a new install Firefox, and you still have the old ones (unless you garbage-collect), how you could do your atomic upgrades at that point... Because now you're just swapping a symlink between those versions. And like you said, that's an atomic operation in Linux, so it happens in a split-second, and so that's really good...

\[00:28:15.02\] It doesn't explain to me the multi-user support. So you said there's profiles... Is everything stored in the Nix store, and then it's just like the profiles are elsewhere, and point to which versions you are using? Or how does it know when it's garbage-collecting that Adam's profile has this Firefox, but my profile has a different Firefox? How are those segregated?

**Domen Kožar:** The easiest way to imagine it is, Debian installation would be one profile, and then you have different profiles in your system. The way Nix stacks those together is - if I understand your question - it will just append the path by the hierarchy of the profiles you have activated. So if you have a user one and a system one, then the user one will append the bin path of the user profile first, and then the system profile bin path will come second. So then all the packages that are installed in the user profiles come from the user profile bin path, and then the system one follows.

**Jerod Santo:** Yeah, that much I understand, but how does it know not to garbage-collect my profile's version of Firefox when you run garbage collect?

**Domen Kožar:** Oh, okay.

**Jerod Santo:** Is there some sort of registry of who's using what, where?

**Domen Kožar:** Yeah, so the profiles are symlinks as well. They're installed in the /nix/wire/profiles, I think... And for each profile there is a name, and then there is something called profile, and then the version of it (1, 2, and so on; you count linearly). And inside there, that's the symlink then to the file system hierarchy.

So when you run garbage collect, you can do it for the user, or you can do it globally. Oh, yeah, you can pass a link to (if I remember correctly) to the profile you want to garbage-collect, otherwise it will garbage-collect everything. And the way the garbage collection works is you can say "garbage-collect everything that is not in the profiles." For example, when you build something, not everything ends up in the profile, because they're just tools that were needed when you built something, but are not actually part then of the runtime paths... So you can just garbage-collect those. Or you can garbage-collect to say "Delete everything so that 20 gigabytes is freed", and so on. There's quite some flexibility in there.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** So the profiles essentially bless what's installed, and when you garbage-collect, if it's present in a profile, then it's like "Hey, I'm not gonna touch that, because that's necessary, based upon somebody's profile." That's established, whether it's Jerod's user or my user...

**Domen Kožar:** Exactly.

**Adam Stacoviak:** And then likewise, if Jerod wants to install something that I've already installed, it's not gonna redownload, recompile and rebuild that a second time. It's gonna just use what's already there, which is secure, because you can't go in and change that. It's got that hash, it's already been built... It can't be muted, essentially. It can't be changed and then a Trojan horse be dropped in, or something like that.

**Domen Kožar:** Exactly, yeah. Nix store is mounted as a read-only, and so on. Nix is allowed to manage it, essentially. So that's the guarantee you get.

**Adam Stacoviak:** So since we compared Nix as analogous to how somebody might be familiar with apt or apt-get - does apt, or apt-get, or Homebrew, are they not in this kind of world where it's reproducible? Is that not a concern in those worlds? Or is that not a scenario? When I run apt-get install git, for example -- I suppose I can apt-get install firefox, or something like that... If that's the case, am I just grabbing what's in the registry and pulling that to my machine? Because I'm not making or building there, in most cases, right? ...unless it's something that needs to be built.

**Domen Kožar:** \[00:32:09.18\] Right.

**Adam Stacoviak:** So Nix runs on reproducible builds, and the fact that it makes these builds hashes, secure by nature, because you can prove the complete dependencies, you know what's involved... All that good stuff. And that hash proves it, and that's the way it works by design. How does that compare to apt or apt-get? Do they not do that?

**Domen Kožar:** Yeah, that's a very good question. I think there are actually two kinds of reproducibility that are usually, I would say, mentioned in the package management world. So Nix does the reproducibility where it goes from source to a binary by ensuring that you always get the same binary, and this is then minus some discrepencies of system time getting into the binary output, and so on. But the guarantee is that using the same hash, the same sources and inputs, you always get the same binary.

On Debian, they have also the reproducibility project, but that is more about the binary output, so that the actual binaries you get are identical each time you build something.

The difference is that in Debian, as far as I know - maybe the infrastructure has changed recently, but it used to be at least the case that when you build something, it will pick up libraries from your system.

Let's say you build Firefox - it will pick up OpenSSL from your system. Now, how this OpenSSL was built is not -- there is no guarantee. Something built it, and of course, if you use Debian to install OpenSSL, then you kind of have this guarantee implicitly on your system. But you could easily swap out OpenSSL with the newer version, or the lower version, and so on. So there is no tracking of it.

The ways I reasoned about Debian is it's just some kind of a file system state where you installed OpenSSL, and then you install another library that depends on it, and so on. And then you stack these... But yeah, as I've said, there is nothing tracking what's used to install this.

So of course, Debian probably has some servers where they build this in a sandbox environment, and so on... But when you do it locally, you kind of lose that guarantee.

In Nix everything is sandboxed by default, so everyone that's building anything on Nix gets this guarantee, and it's enforced. So yeah, that's the main difference between the two.

**Break:** \[00:34:46.02\]

**Jerod Santo:** Domen, one of the things you said at the top, and also you say on Nix ecosystem is a DevOps toolkit; so there's a DevOps focus in what Nix is providing. So not just merely installing Firefox on my local Linux box so I can browse the web, but using this for getting your DevOps, getting your stuff out there in the world; taking your software, putting it out there, whether it's a web app stack, or whatever it happens to be... So that makes me wonder how it fits in with other devopsy things, and would you use Nix plus this configuration language to create these isolated installs, similar to a universal binary kind of idea, where you're like "Just take this folder and put it on another machine and it runs"? Would you use it instead of Docker, would you use it with Docker and Docker Compose? Help us understand where Nix fits in as a DevOps thing, where I might use it to deploy some software.

**Domen Kožar:** That's a great question. Yeah, I don't think there's a definitely answer to it. Essentially, there's all the options.

**Jerod Santo:** The answer is yes...

**Domen Kožar:** The answer is yes, again... \[laughter\] So the way I would say it, at least first compared to Docker, Nix is really good with the configuration and build part. And once you build something, then when you run it, it's just an executable. So Docker is, I would say, complementary to that. Docker provides the runtime isolation between things.

In the NixOS we use systemd since the very early days, so that one kind of manages the whole runtime bit, if you use the OS bit. But if you use containers, then -- there's people who are using Nix to build containers for Nomad, and Kubernetes as well... You can build Docker images with Nix...

I think that's a pretty nice combination as well, because one thing I forgot to mention is in Nix you have two kinds of derivations. One is called fixed output derivation, and the other one is just a derivation, or a dynamic derivation. The dynamic derivation is the one that hashes all the inputs. The fixed output derivation is the one that has the hash upfront, so you can say "Oh, this is a SHA-something." And that one actually has now network access. Whatever it will build, the SHA you provide it should be the hash of the content that this builder will do. So this a pretty nice guarantee that everything you get from the internet has a predefined hash of it, and everything else that doesn't access the internet then depends on that.

In the Docker world, this is not the case. If you have a Docker image that downloads something from the internet, essentially if you run it twice and that content changes, there is no guarantee whatsoever that this will -- this will be a completely different image, with a different output.

The reason why people don't really notice that is because Docker Hub has the history of all the images, and people don't usually build them themselves. But yeah, that's where I think Nix shines better, so in this reproducibility aspect... And then Docker for runtime for sure, and all the container stuff we have built recently helps a lot.

**Jerod Santo:** So you're effectively running Nix alongside Docker, or inside of Docker, to do all the package stuff. Is that the way you would use it, together?

**Domen Kožar:** Yeah, yeah.

**Jerod Santo:** You said they're complementary, and you use them together that way.

**Domen Kožar:** So there is an official Nix image where you have Nix installed, and you can build stuff inside the Docker containers. But there is also an API in Nix language, so that you can build images with Nix... Which is pretty cool as well, because you will get very minimal images compared to stacking them up, as people usually do.

\[00:40:09.03\] You have whatever you build, which depends on something else, and which depends on Alpine, Linux and so on. So this quickly adds up. Whereas if you go through the Nix route, you just build your thing, and then you copy that into the Docker container, and it has nothing else, essentially. It's also potentially faster, but yeah... Let's not go into those details.

**Jerod Santo:** Yeah, I saw a cool example on the examples screencast, where it was setting up a Docker image that had a specific tool, where it showed three versions. It was like the stock Nix version, stock Debian, and then the Alpine Linux; these were the containers, the images. And at first, the Alpine Linux one was just teeny-tiny, of course, because it's just a stripped-down version... And the Nix one was somewhere in the middle of the other two. And then, the screencast goes in to show how it could, instead of taking just the default package, the Nix package for this particular piece of software -- I can't remember the software; NGINX maybe, or maybe it was simpler than that... And instead of merely using the precompiled binary and putting that in its image, it would go in there and just tweak a couple flags; a compile flag... And then it removed some sort of subdirectory that it didn't care about, and it was able to achieve an image that was even smaller than Alpine Linux's, just through those couple of tweaks.

That kind of speaks to the thing that you like about it - it's convenient by default, but then it also has the customizability where you can have the pre-built binaries, you can just use that, no big deal; you don't have to compile everything, but when it comes time to say "You know what - I really wanna strip this thing down and make it as tiny as possible, and I know I don't need these sets of files, or I don't need to compile for these seven whatevers", I can go in and through that Nix configuration language just make a couple of changes to the way that that particular piece of software is compiled; pass it some flags, have it compiled for you, and reap the benefits. That was pretty cool.

**Domen Kožar:** That is one of the most powerful things... For example, going back to the Firefox -- let's say you would package Firefox in a Docker container... Each package is essentially just a function of all the dependencies it needs. OpenSSL is a parameter in that function, and so on. So you could, say, `openssl.override`, flip a flag or apply a patch, that's the most common one, like "Here is a patch." And you could apply a patch to OpenSSL, which then is provided as an argument to build Firefox, and that's like one line to tweak.

So I think that's really powerful, compared to if you then go tweak those Docker images and trying to rebuild them, which are not exactly reproducible, and so on. It becomes a mess pretty quickly.

**Jerod Santo:** A couple of the other features that I'm not sure we've hit on exactly, that I think play into the ops side, is you list remote builds and remote deployments. What exactly do you mean by remote deployments?

**Domen Kožar:** Yeah, maybe that's a weird way to put it... As I said previously, you can control where it's built, and you can then deploy from one machine to 20 others, for example. Now, Nix will either copy what it needs there from your local machine, or it will substitute from a binary cache. So really, remote there means that you're not really doing anything on that machine except copying them and then activating the NixOS. I'm talking about the OS bit here... There's also these only two profiles, but that's not as convenient by default. So that's the remote part.

**Jerod Santo:** \[00:44:03.23\] And what would be an example of why you'd wanna do that? Would it be for cost savings on the wire, or caching? For what reason would you want to do that?

**Domen Kožar:** So you're saving all the research. Usually, the way you're deploying is optimized for the runtime features of your thing... A very good example of this is if you have a Raspberry Pi - you kind of don't want to compile stuff on Raspberry Pi. You would want to compile on an EC2 ARMv8 machine.

**Jerod Santo:** Right...

**Domen Kožar:** So then, essentially, it doesn't require any extra disk space. The thing you copy to the Raspberry Pi is exactly what the system needs, so it's really fast... This is as fast as it gets from getting a system up and running. You copy it over and you activate it, you start a script and that's it. You don't use any of the CPU or memory resources besides the constant memory copying.

**Jerod Santo:** Right.

**Domen Kožar:** Also, it doesn't interfere with the system that much... So if something's running there and it's really on the edge, it's essentially untouched that way.

**Jerod Santo:** Gotcha. That Raspberry Pi is a very good example; that clarifies to me why that would make sense to wanna do that. Cool.

**Adam Stacoviak:** Where's the interesting things happening around Nix? If Nix has been around for 20 years, and we're now at roughly year 20(ish) of its inception, when you look at the ecosystem at large, where are the cool things happening? What's happening, what's being done that's sort of bleeding edge around things, that's really got you personally excited, or the community excited?

**Domen Kožar:** Right. That's a pretty broad question. One of the things that I've been doing in the last 4-5 years is -- I think we need to build infrastructure and documentation. Those are the two main things I'm working on. In other words, I think we should go into commercialization, or what I like to put it, to go mainstream by really making it easy and accessible for people... And it's also this idea of building infrastructure so that deployments, builds and all these things are done very easily, and companies can just subscribe or pay for a subscription and roll their own stack. That's one part of it that I'm mostly concerned about.

Also, on the community side there's a lot going on. We had a couple of conferences... So the community is growing pretty fast. We are having issues with actually a lot of people coming in, so we're trying to do more policy stuff, so that we can grow faster and less chaotic... And on the research side, there is a bunch of new things coming in. One thing is called content-addressable store. This is quite similar to what Bazel does. I'm not sure if I should go into explaining that, because it's really in the phase of development right now... But essentially, it's an optimization of when you build -- in Nix, if you rebuild something that is in the beginning of the dependency tree (let's say Bash), you have to then rebuild everything that depends on Bash. What a content-addressable approach allows you to say is if the derivation output of Bash is the same as it was previously, then you don't need to rebuild the rest that depends on it. And this completely needs a different design.

\[00:47:56.13\] So maybe Bash is not the best example, but let's say if you would modify Git, and then Firefox depends on Git, then Firefox output probably wouldn't change, even though you have changed Git... So Firefox wouldn't change, and anything that depends on Firefox then wouldn't need to be recompiled, for example.

There is a really cool paper called Build Systems a la Carte, that unfortunately doesn't have Nix inside, but it compares different build systems and different features they have, and Nix will then tick all the feature boxes once this feature is complete... And be, essentially, I would say, better than Bazel in that sense. So that's one of the areas.

Another thing is there is a bunch of work on the usability side... It was clear that it was a research project, so Eelco Dolstra and also a bunch of people from the community are redesigning the command line so that it's easier to use. So I think we're kind of, again, in the phase of bringing it closer to the wider audience... And yeah, a command line redesign was a big part of it.

**Adam Stacoviak:** Gotcha. You mentioned a lot of growth is happening now in terms of community... Are you familiar with where that growth is happening, potentially? Like, where it might be coming from... I know that a lot more people are using Raspberry Pi's, for example; I know that Nix has that support. A lot of home labs are sort of build around Raspberry Pi's, and things like that... Where do you see the support, or where do you see the growth happening? What areas of the Nix ecosystem seem to be the most on fire, so to speak, in terms of growth?

**Domen Kožar:** I think the biggest one right now is actually the Haskell community, because it's so closed, conceptually, to Nix. I would say most - this is probably a hard statement, but most of Haskell teams are using Nix to deploy or build Haskell, one way or another.

A bunch of other languages where this is useful, as well... I would say there's a bunch of people in the Rust community, and other languages as well. And I think in dev ops, especially deploying and managing systems - I think there are more and more companies using Nix, because of this reproducibility part and just assurance in general is useful to them.

Well, actually, my friend Nate told me this one, and I really like this concept - you know, Nix is kind of like when we had PHP and you would hack on the live server, and all of that. That was back in the day considered as an accepted practice. It's the same with Nix now... So if you go to a Nix machine and you just try to edit some files, it won't work. You have to edit the Nix files and redeploy. This usually creates a bit of resistance from people who are used to Debian, for example.

\[00:51:00.14\] So Nix kind of turns operational tasks into development tasks, so you kind of have to pay this cost upfront, of actually describing your system in one file, and so on, which takes some time... But once you do that, you save a lot of operational problems. We see a lot of people figuring this out in the wild, and then coming to Nix as a lessons learned.

**Adam Stacoviak:** Gotcha. If someone's listened this far, they're like "Man, this is interesting/somewhat interesting to me", whatever, what's your go-to place to get started? Is it nix.dev, is it another place? Where do you send people to -- obviously, they've maybe gotten past the reproducible builds, understanding the reliability of that, potentially even the extra security of what that means... Where do you send people to get started? If they're dev ops, do you send them to a certain place? If they're from Haskell, do you send them to other places? Is there a different place for a different camp? What is a good place to kick the tires, begin, get started play around, and maybe fall in love?

**Domen Kožar:** Yeah, I'm still working on Nix.dev. I think it is a great place to start, although it's not complete yet, so there are parts that are missing... The typical place to start is to read the NixOS manuals; there is a Nix manual which is specific to the language and package manager, and a NixOS manual which is about the OS bit.

But those manuals are not tutorial-like. They're more like reference documentation, and description of different bits of NixOS and how it works... And that's where I would like Nix.dev to be the middle ground, where you have tutorials to get started with.

So I think between those two, if you wanna go really deep into Nix as a language and how it works, there is something called Nix Pills, where it kind of goes into different parts of Nix and explains the concept behind it...

And there's on YouTube a few people who have recorded videos, and there's Nix Shorts, which is like short tutorials of getting started with doing stuff with Nix... I think that's everything that comes to mind right now. The main one I would still say NixOS manuals, if you wanna get your hands dirty.

**Adam Stacoviak:** Gotcha. We'll link those up in the show notes. NixOS.org is kind of a good landing page, but we'll link deeper into, say, manuals, and Pills, and obviously link up Nix.dev, and we'll look up Nix shorts on YouTube.

I've found something else - I think it may be a false positive, but we'll dig further and provide awesome links. Listeners, you can find that in the show notes...

Domen, thank you so much for this deep-dive on Nix. It's interesting... I've never personally used it, but I can certainly see the reproducible builds idea around it, especially the usability around ops, and you want systems you're putting out into production to be secure and stable, and be able to count on those, so I can see where Nix really plays a role there... But thank you so much for your time today, and I appreciate you sharing your wisdom here. Thank you.

**Domen Kožar:** Thank you for hosting me.
