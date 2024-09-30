**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. She's not here right now... We've been doing these shorter intros just to kind of intro the person we're interviewing... I think we're going to drop these in a little bit, and we're just going to do proper intros with everyone in future shows... But we haven't been doing that, and we've already been recording some of these shows... So I'm just going to introduce it. Autumn's here on the interview, and we also have Jorge Castro. And Jorge created a project called Universal Blue, which is a foundation for a bunch of Linux distros based on Fedora Silverblue. We go into it in depth. If you don't know what any of what that is, Jorge is very careful to call Bluefin and Bazzite not distros, because they're flavors of Fedora Silverblue... They're basically just more opinionated Linux distros.

I have been using Bluefin on my developer desktop for over a year now. I have been using Bazzite on my Steam Deck for probably the same amount of time... I love them both. I think they're great projects. They have Chrome OS-ified Linux distro for me, and that's been wonderful. So if you want to learn more about it, stick around for the interview with Jorge, and check out the links in the show notes.

\[00:05:13.12\]

**Justin Garrison:** Hello and welcome to the show, Jorge Castro. Jorge is a part of developer relations with the CNCF or the Linux Foundation, one and the same, for some parts... Jorge -- but that's not what we're going to talk about. Today we're talking about your side project, this thing that you started and now it's taken over a lot of things... And I love it, and I've been using it for a year. Why don't you tell us about UBlue?

**Jorge Castro:** Yeah, and we are going to bring up the cloud-native thing at the end, because that's the mission part at the end. But let's talk about the nerds stuff first. Yeah, so me and some friends started Universal Blue, which is an umbrella organization that publishes Bazzite and Project Bluefin, which are operating systems for your computer. Bazzite is for gamers, for handhelds, and all the fun stuff. The new Asus ROG Ally you can run on your Steam Deck... You can run it on your CPC, and it's got this cool big picture mode style thing... And then Project Bluefin was my passion project, which is originally what I started with, which is I wanted to make the world's greatest Linux workstation for people us. And distros weren't really filling that need, and then at some point Fedora gained the capability to map it all with cloud-native tools. That made it really easy for me, and that helped me get people you, Justin, to help me finish it out and kind of build what we want.

Now we are on year three, we're about to make a release, again, this fall... And things are going great. We're about to hit 20 million pulls on our images, so I'm pretty happy about that... And yeah, that's what brings me here.

**Justin Garrison:** That's awesome. And I remember the first time you told me about it, you told me the domain first. It's the letter U, blue the color, and .it. It was the very first domain that you're ublue.it. And I was "Yeah, you're going to blow it if you create a new distro." What are you doing? Why are you doing this?

**Jorge Castro:** Yeah, well, for getting domains is hard... And at the time it's "Will this even work? I don't know..." So you point at laptop and you say "You blew that one. You blew it!", pointing at your ThinkPad. So it was actually intended to be a slug, and then one day when we actually realized that the model would work - because you had to figure out if the model is going to work in the first place before making a product. And once the model started to work, it became more clear that it wasn't going to be a weekend project anymore. It originally was a weekend project, and now we're on year three.

**Justin Garrison:** Describe the model. Describe what you mean by "You have to make that side of it."

**Jorge Castro:** Yeah. So the model basically is -- Red Hat and Fedora had this thing called RPM OS3, which I don't really want to get into... It's basically just an operating system in a Git-like structure. So imagine that your entire operating system is just in Git.

**Justin Garrison:** \[00:08:01.12\] I always describe people go to the root of your file system, do git init, and git \[unintelligible 00:08:02.07\] and that is basically --

**Jorge Castro:** Exactly.

**Justin Garrison:** And then you go check out that in another folder, and you say "Oh, this one's main, and that one's for--" whatever branch you're on. That's basically OS3 in a nutshell.

**Jorge Castro:** So what's cool about that is the entire OS in there - the kernel all that stuff. So it was around for a while... People use it in embedded systems, and stuff. And it was neat, but it was decidedly niche. There's always that bit of embedded tech where you're "Well, that's pretty cool. I can't really use that anywhere else." And then at some point at KubeCon I ran into Colin, the author, Colin Walters, at a KubeCon... And he goes "Hey, what do you think about this? I made it so you could use all that stuff, but you can model it inside a Docker file." So your Docker -- you just make a Docker file, and then you say "from Fedora", and then you do RPM OS 3 install your packages, and then you add a few extra commands - there's a few extra differences - and an operating system came out. I was "Really? That's weird." So I did that, I added a different text editor, and then I made a copy statement you would in a normal container, except I copied a wallpaper over... And I put that in GitHub, in a GitHub Action, and some friends helped me, and an operating system container came out.

It was eight gigs, because it has a kernel, it has the full system... And I built it in GitHub, and then GitHub shoves it into the GitHub registry. And then my laptop pulls from it as if it was pulling from your app repository. So it gives -- now anyone who can make a Docker file can customize operating systems. And at first -- usually we'd talk to server people, "Oh man, I know exactly what I'm going to make." Right? So I don't think that was the tough sell, but I always kind of to do things the hard way; it's "Hey, wait a minute... I want to make a Linux desktop with this." Because Linux desktops are still kind of traditionally package-based. They never really went through their cloud-native journey... So when you're used to working with cloud-native tech and you go back to the Linux distro, it's literally going back to the '90s, it feels like, sometimes. But there's a lot of good stuff there...

So this allowed us to basically take a lot of the good stuff that we love about Linux distros, but shove it into a cloud-native model, that now I can use all the tools that I have in GitHub... So I spent about a decade at Canonical, building Ubuntu and Ubuntu Server. And the amount of infrastructure it took back then to make an operating system was immense. You had to build Launchpad... Which is -- before GitHub, everyone was trying to make one of these. And the infrastructure it takes to make an operating system and all that stuff is really hard. But now, because Fedora just made it that it's just a Docker file, I can use the same tools and stuff that people just used to make their Node app containers, except I can put an operating system in there.

So that's what we did. We started publishing base images, and then people Kyle came along and said "It'd be really cool if I were to stick gaming stuff in there", because trying to get gaming on Linux is hard. There's multiple configurations, tons of distros... It's just -- you've all used Linux beforel; it's just a hot mess, you know?

So the pattern really enables what we were able to do at work with cloud-native, which is why I still kind of mentioned the cloud-native stuff... It lets distribution people who don't want to deal with RPMs, and all this low-level stuff. You let Fedora and the distros handle that. And then we handle the customization bits, the kind of SRE style things, in the same way that your developers develop the app, and whatnot. And then at some point that gets git pushed, and then there's a container, and then there's an ops team that you work together with to get that to production.

Those are the patterns that I wanted to bring to the Linux desktop. Because the value isn't actually in the artifact. It's the fact that you can gather experts around a Git repo, and apply that to your workstation so that when I fire up my VS Code, I just want my VS Code to be the good one.

\[00:12:01.17\] Brian Ketelsen, who's on the team, when we were hanging out, I was like "Show me your VS Code setup." Did you ever get to know someone, and you're like "Show me your VS Code setups"?

**Justin Garrison:** Once you know them enough, you're like "Hey, what's your vimrc?"

**Jorge Castro:** Yeah, exactly. You're doing the nerd stuff. And then you're like "Wow, let me nick this. Let me nick that. Let me put this in my toolkit. Let me introduce some tools to you." Atuin is one of my favorite tools, which is a shell history thing. And we just started to collect all these little nerd tools or whatever. And it's like "Well, why don't distros ship this out of the box?" Well, it's an opinion. So if we can make a thing -- I made a thing that's called Project Bluefin. This is going to be Linux for the rest of us, and we're going to have the cool Linux tools. Brian's VS Code config is basically what we ship, with the dev containers and stuff already installed, ready to go... So we wanted to kind of prove that the same level of efficiency and stuff that you've got from cloud, you can bring to your workstation, and then just have it set up out of the box.

**Autumn Nash:** See, I love that so much, because I have a Mac, and I run Linux on a dev desktop, but I use my Mac for everything else, because I don't want to deal with -- how you said, it's like going back to the '90s sometimes. So I'm just like, I could run Linux all the time if I use Bluefin; that'd be cool.

**Justin Garrison:** And how much of that is -- you're shipping opinions, right? One of the best things that people like is "Oh, look at all this choice we have on Linux." Linux desktop... I can pick anything I want. And in this case, you're like "Well, no, we're just going to give you what we think works well", especially in this sort of like - I don't wanna say cloud-native space, but... If you're familiar with containers and you're doing that sort of stuff, this might fit your model better than something like Nix. Because Nix has its own set of opinions and how to manage things... And if you're doing Docker files on top of Nix, you have two layers of -- this is more opinions, and more complex sometimes. You have to kind of switch your model around how things work.

**Jorge Castro:** Yeah. I grew up on traditional Linux. I grew up on Enlightenment and Window Maker, and stuff.

**Justin Garrison:** I mean, I loved Enlightenment.

**Jorge Castro:** And in the early days when you're very first getting started, you're very much focused on "I'm going to make the perfect thing for me. It's going to have --"

**Justin Garrison:** I was getting my wifi drivers. That's what I was focused on.

**Jorge Castro:** Well, also that. Okay, so assuming -- so after the first two years of getting the right hardware...

**Justin Garrison:** XConfig and wifi drivers, that's it.

**Jorge Castro:** So when we are growing up though, it is all about finding your perfect setup. And we grow up seeing all these Linux screenshots, and it's all about the individualism.

**Justin Garrison:** It's like Compiz, Beryl, that stuff...

**Jorge Castro:** You want to express yourself. And Linux is -- all the other kids have their traditional desktops... Your coworker has his golden image from Work IT, or whatever, and Linux is like your hot rod. It becomes part of your identity. But as we got older and the open source movement gets -- new people are coming in, people are cycling out. Now that the real long-term sustainability is our issue, at some point you're like "Okay, who's got the best one of these? Brian? Okay, we're going to start with you, and then we're going to make parameters for all of the things that we want an opinion on, that we feel is important, but let's go into it saying that 90% of the stuff we're just going to manage out of our lives."

So for us with Bluefin - you like Gnome, but you want Ubuntu-style Gnome; sort of the 1990s X-Men. I like to think of old Ubuntu as the '90s X-Men...

**Autumn Nash:** I love that.

**Jorge Castro:** That's my X-Men. That's the X-Men I identify with the most. It's the same way with technology. Because it's the same, but it's also different, like what multiverse of your favorite superheroes... You have that with Star Wars, what era is your favorite, sports teams or whatever... So if you grew up in this kind of classic Ubuntu era, \[unintelligible 00:15:56.00\] that's kind of awesome for you.

\[00:16:00.13\] But you're looking for something more modern, something more standard space, something that really -- what I try to do, especially with Bluefin DX, is set people up for success. Pretend, when they open that laptop and there's Bluefin on it, that they're at a workshop, learning their first deployment of something.

**Autumn Nash:** I was just going to say that it makes it more accessible. And then you can learn to change all of those different opinions as you go on. If you took, I don't know, different students that we teach at Milspouse Coders, or different kids - there's some people who really want to be in those weeds, and they really want to change everything and learn every little piece. And there's some people where they're going to get frustrated and not want to even try if it's so down in the weeds. So it's that's really cool, that you're giving people the options and making it more accessible for maybe somebody who wants to get started.

Also, sometimes -- at work, I want all the different opinions, and stuff. But when you're at home and you're using your laptop and you want to do something fun - dude, I just want it to work, and then I want to change what I want to change.

**Justin Garrison:** Well, and as a user of both these products -- I installed Bazzite on my Steam Deck more than a year ago now. And I haven't changed anything. I just keep doing updates... And my son runs it on his Steam Deck, and it's his main computer; that's his school computer, but he also games on it. It's just "Yeah, it's just Bazzite." Because you get all the flatpak stuff, you get the things that Steam didn't really integrate well into SteamOS, because the desktop environment was definitely an afterthought. It was like "Yeah, you could also do that other stuff if you wanted to. But you probably don't want to."

And then on my desktop, with Bluefin, when you told me there was an NVIDIA build of it, where it's just like "Oh yeah, I just want the developer NVIDIA", I was just like -- I just rebased off of it, basically. It was like a rebase reboot, and I'm like "Wait, I have NVIDIA now? Hold on a second. I didn't go through any install process, I didn't have to do all this--"

**Jorge Castro:** It's like building the module locally, on your computer... It just doesn't make sense. It's very interesting to me, because if you were to come out with a traditional Linux desktop today, it'd be the worst product, and people will call you out on it. But it's been around for so long.

So the idea that you have -- let's say your Linux distribution has a hundred thousand NVIDIA users, and you're expecting 100,000 people, computers of different manufacturers, to all compile a kernel module, to load a binary driver, and you have 100 shots at it. What are the chances you're going to get 100 out of 100? Keeping in mind that sometimes you don't even know what's happening, and you might turn off your computer and it absolutely fails.

Whereas the cloud-native model is like "Well, let's build it one place in CI, and if that passes, it passes. If it breaks--"

**Justin Garrison:** Don't promote.

**Jorge Castro:** Yeah, don't promote. Exactly.

**Justin Garrison:** What is that infrastructure? Where are all the builds taking place? How are you distributing this? This is a Linux distro, and like you said, distributing Ubuntu took a lot of services and products, and now you have a modern Linux distro. What are you doing with it?

**Jorge Castro:** Everything's in GitHub. You can run your own personal image out of GitHub as well. We pay, because we want more concurrent builders, so it costs about $70 to run the entire project, a month. And we take in about $80 in donations. So for me, that's the perfect -- you know, just enough budget over in case there's an emergency.

So we actually went into it with a "We don't want to make infrastructure." Because one of the things I did learn about making a Linux distribution is it's hard, and everyone falls into the trap. "Oh, we're going to need our own web server. We're going to need our own mirrors. We're going to need our own this. We're going to need our own that." Where our mentality was "Let's leverage as much SaaS as we can to get what we need done." And then our ISOs are served by CloudFlare, which is R2, and the cost is fantastic.

**Justin Garrison:** 0 dollar egress. Yup.

**Jorge Castro:** \[00:19:55.20\] I think we pay $8 a month for all of Bluefin's ISOs. It's such a great deal. And a lot of these companies, they have fantastic open source programs that we take advantage of, which -- we try to do our part, too; recognize when companies are supporting open source. So Discourse, that runs our forum, has just a great open source program for communities that meet a certain size. You don't just get it right away. You've got to earn it. And that really helped us. It kind of gave us -- when we reach a certain size, we know that we'll be able to leverage these kinds of things.

So we really do try to run it as much as possible with SaaS, and things like that. That helps us keep it lean, because it does take a lot of effort to run a Linux distro, and we want to leverage as much goodness from Fedora, but we want to give our users what they want, in the most efficient way possible. We could definitely set up a lot of infrastructure. We say no to ourselves all the time.

Equinix gave us a really nice ARM builder. It's just awesome. But trying to get bare metal up and running for your own build... At some point we're like "Okay, we're just going to wait for GitHub runners."

**Autumn Nash:** Yeah. I feel like that's working smarter, not harder sometimes, because sometimes you get so into the infrastructure and doing everything yourself that it takes away from building the main product that you want to build. And you can always go build the infrastructure later if you wanted to.

**Justin Garrison:** Well, and by keeping all of this SaaS-based, what's the process for me to go make my own fork or build of Bazzite? You can just do that, because I don't need to have a dedicated runner. Like, I'm still using GitHub.

**Jorge Castro:** Yeah. So in the old days you'd have to fork all of Bazzite, and then keeping up with that thing. Not awesome. These days we have an image template that we made, that literally says "from", and then we commented out all the sections, and then you would do Bazzite.

**Autumn Nash:** Oh, that's smart.

**Jorge Castro:** And then you would add the packages that you want. Removing packages is kind of weird, because it is a layer...

**Justin Garrison:** Because it's Git?

**Jorge Castro:** No, because it's an OCI container. So if I give you Bazzite --

**Justin Garrison:** Oh, popping the -- yeah, yeah.

**Jorge Castro:** Yeah. Because that's a layer up. You can't remove things. However, we have this fella Amtheus, who's been figuring out a re-chunker that will go back and reorganize all the layers and remove all the stuff that you're not using, to get the image size down. So the image size and the updates are still not optimized, but Red Hat is productizing this for their enterprise stuff, so as they figure that out, we get the advantages. Because their \[unintelligible 00:22:18.08\] containers are like 300 gigs, or something. And we think Bazzite is bloated because it's 20. \[laughs\]

Again, by using things OCI containers we could just leverage existing tools, optimization tools. On your OS image, you could run Gripe, the tool that you use to find the CVE vulnerabilities in your app containers... You can run that on your OS container and it's smart enough to give you all of the versions of the packages, and stuff. They did a really good job normalizing the OS and what it would look in a container, in my opinion, which leads to our success.

**Autumn Nash:** It's really cool. Just the way that you took all these different building blocks and used them together... It's my favorite part of programming. It's like building Legos, but with computers.

**Jorge Castro:** Yeah.

**Justin Garrison:** And this is the first distro that I've ever seen that encouraged you to go make a fork. Because the fork is not maintenance for me. It's not like you have to go maintain this whole thing. No, I can just keep pulling upstream, rebuild it, and I can rebase off of my own published image, with the 10 or 15 packages that I want... And then I pull them in and I'm staying one level behind what upstream is.

**Jorge Castro:** Yeah. And really the only maintenance is - you'll find this out - GitHub, if you don't make a Git commit to your repository and you're running Actions, if you don't make a commit, it assumes that you abandoned it, and gives you a warning "We're going to turn your Action off", which would actually turn off your OS. But yeah, literally, other than checking in every once in a while to see how your build is doing, it is very low maintenance.

\[00:23:55.03\] Although what we are finding is initially, I think, because people were also learning how to use a Linux in this manner, instead of their traditional way, I think a lot of people go into it thinking that they need to make a custom image, and a lot of people do follow that pattern. But what we did find is a lot of people do end up, even after you do your own image, being like "Wow, I'd rather have someone else do this anyway." And as we bring in new tools, it alleviates a lot of the need to do a custom image. So getting Homebrew, I think, in there was a huge win. I know a lot of Linux traditionalists don't like Homebrew, but --

**Justin Garrison:** They can stay in their old-school -- I've been using Homebrew for four or five years on Linux, and it's fantastic.

**Jorge Castro:** Yeah. And then for us, because we're -- obviously, with Bluefin especially, I'm going after Mac people. Especially our open source people.

**Autumn Nash:** You are going to convert this Mac person, because I'm sitting here like "This sounds amazing." For instance, some people really get into that wanting to do all the really lower level stuff. I was a kid who wanted to customize things, but at a different level. So you're speaking to -- I feel like you're speaking to so many different people, and making it such a big audience, because now you get to choose the level of abstraction of getting to pick those things.

So to me this sounds great for development and for personal, because I get to pick where I'm -- if I just want to do something and I want it to work, it does that. When I want to customize it, it does that, and it gives me all the pluses of Linux.

**Jorge Castro:** Right. Or your brew file.

**Autumn Nash:** So you're converting me as a user.

**Justin Garrison:** You're right, your brew file just works. You just install it.

**Jorge Castro:** Yeah. The GUIs don't. One of the things I want to do - if there's any Rails nerds or Ruby nerds out there, is I would love to have a cask that lets you use a brew file. And you know, on a Mac it installs the Mac GUI applications... I would love a cask for Linux, that would let me define my flatpak applications in a brew file, so that I can just brew install Firefox and it will get the right flatpak.

I need a little bit of duct tape there, if anyone's interested. These are the kinds of little things that you're going to find, where you're like "Oh yeah, brew and Linux sounds amazing." But then you're also missing a few things.

**Autumn Nash:** But that's not missing something that would be a huge blocker, because I think a lot of people want to get into Linux, but sometimes it can be a little intimidating.

**Justin Garrison:** And there's too much choice. All of the benefits of all that choice is paralyzing.

**Autumn Nash:** Yes. Sometimes you just want to start, you know... And I think this is a great way to bridge that gap and to give people the start. But still, you can learn, and you can go and look and experiment, but it's enough to get you started.

**Break**: \[00:26:39.23\]

**Autumn Nash:** Is your sticker the one with the little raptor on it?

**Jorge Castro:** The little dinosaur. Yeah.

**Autumn Nash:** Oh, my God. My kids are obsessed. Those stickers are all over my house. Justin gave them stickers, and they're like --

**Jorge Castro:** Oh, I'll bring you some. We're getting new dinosaurs, and stuff. I work with paleoartists, because that's the whole dinosaur evolution thing, and...

**Autumn Nash:** We're about to be your biggest customer, because I want to try your product, and my kids are obsessed. They're all over their little laptops. They got their first Chromebooks this year, and it's all over their iPads, and they love your stickers.

**Jorge Castro:** That is so validating. Thank you. I can't wait to \[unintelligible 00:29:52.26\]

**Autumn Nash:** I just want you to know that they're little dinosauroholics and tech nerds, and they love your stuff.

**Jorge Castro:** Yeah. I've got a whole species...

**Justin Garrison:** Oh, that's a new one. That's so good.

**Jorge Castro:** Yeah. This was called Markovinator. This one is --

**Justin Garrison:** This is an audio show, so we can't --

**Jorge Castro:** Oh, I'm sorry. So I got one called Carl... This is on the website. This is the big, towering one.

**Autumn Nash:** Do you have an Instagram, or anything?

**Jorge Castro:** No, but you can buy them directly from the artist. I'll make sure I send you all links, and things like that.

**Autumn Nash:** Okay. If you guys ever make shirts, I just want you to know I have tiny models, and I will buy the shirts, because each of them got for their birthday their own little Chromebooks, and you know how my computer laptop has so many stickers, so then as soon as we got back from Scale, they started putting all the GitHub stickers and all the Bluefin stickers... So they're so into it. They think they're baby devs now. It's adorable.

**Jorge Castro:** Not to do any spoilers, but I do have a plan bringing my kid to Scale, and then there's little dinosaurs, and stuff, and they've got their --

**Justin Garrison:** My son's going to be there next year.

**Autumn Nash:** I'm bringing my kids, too.

**Jorge Castro:** Oh, okay.

**Autumn Nash:** We're rolling up with a gang of kids, because I'm bringing my kids, Carrie's bringing her kids... We're trying to get the two college students to give talks...

**Justin Garrison:** Scale is the best place for families. It's the best conference for --

**Jorge Castro:** I love Scale.

**Autumn Nash:** And their dad lives in California, so I'm going to be like "Okay, come for one day", and then I'm going to do fun nerd stuff with my friends.

**Jorge Castro:** Yeah, that sounds fun.

**Autumn Nash:** I'm so excited.

**Justin Garrison:** FYI, just a side, too - anyone that's interested in Scale, the CFP opened for Scale last week, or something like that. So if you want to submit a talk, it's a great first time place to speak, because it's a small community conference, there's not a lot of pressure...

**Autumn Nash:** It is the most welcoming, kind... You can ask questions, nobody acts like you're stupid for asking questions... It's like nerd spring break over there. I have never thoroughly enjoyed a conference -- it's not fancy, but it is all the good parts of just like...

**Justin Garrison:** Yeah. And it's affordable.

**Autumn Nash:** Yes.

**Justin Garrison:** It's a community thing.

**Jorge Castro:** One hundred percent.

**Justin Garrison:** It's a hundred bucks, or something like that. It's in Pasadena in March...

**Autumn Nash:** But it's accessible, too. Do you know how exciting it is to be a mom who's a software engineer? People are always like "You can't be a mom and a software engineer." I walked up, there were babies in talks. People brought their kids; you get to bring your whole self to Scale. You know what I mean? And I love that. Also, if you guys need any help, I'll totally jump on helping this year, too. I'm about to submit my talk. I'm going to submit my Barbie CI/CD talk to Scale this year.

**Jorge Castro:** That would be amazing. Yeah, the team's going to try to go to Scale. A bunch of them went last year, but I wasn't able to go. So this year I'm fighting to go.

**Autumn Nash:** Okay, but we need cool shirts, because Meta's sweatshirts last year were fire, and I'm so jealous. We need to make some --

**Jorge Castro:** It's so hard to do good swag, because -- we could do shirts. It's literally the last thing; I'm putting it off, because I don't want to mess up the opportunity with the dinosaur to come out with a bummer shirt.

**Autumn Nash:** But you have such a great -- you have dinosaurs in Linux. Fire.

**Jorge Castro:** I know. I've got the ingredients... I'm waiting for the right vendor, and... It's just one of those things that we have to buckle down and doing it. But the day job is --

**Autumn Nash:** I don't know if we're going to ever get on Meta's level. They have Linux sweatshirts, and there's little --

**Justin Garrison:** That tucks inside the hood?

**Autumn Nash:** Yeah. There's penguins inside the hood... Fire.

**Jorge Castro:** Oh, don't worry. See, I have access to really, really good marketing people, who've already given me the ideas.

**Autumn Nash:** Dinosaurs in the hood. \[unintelligible 00:33:23.11\]

**Jorge Castro:** No, we're talking about the hoodie, but it's the raptor, and then she's got a tail in the back; you know the feather tail, the fan tail?

**Autumn Nash:** Oh, my goodness. Can I work there? Hire me. Can I just volunteer?

**Jorge Castro:** See, you made me give the surprise away. In the pockets, what you do is you put the little raptor claws are in the pockets.

**Justin Garrison:** Oh, man.

**Autumn Nash:** You are selling a big sale.

**Justin Garrison:** That's like a $300 hoodie right there.

**Autumn Nash:** Okay. I'll pay for that though.

**Jorge Castro:** Drew, who's like the vendor who makes all the KubeCon swag... He's like "What CNCF project is this for?" And I was like "Hey man, look, I'm just trying to get a ballpark on what you're doing." I was like "Man, this is going to be expensive."

**Autumn Nash:** Look, my kid and me, we will be your first customers, and we will walk around Scale looking like raptors. It'll be great.

**Jorge Castro:** \[00:34:09.27\] Oh, I know. We'll figure it out. Yeah, the kids love it. And it also, I think it teaches -- one of the things about the project is we really want to teach people the on-ramp to go onto into the profession. Because Scale is relatively cheap. And for a lot of enthusiasts -- KubeCon is not. For a lot of people, unless their \[unintelligible 00:34:29.02\] they can't go to KubeCon. They can't go to OSS Summit, you know?

**Autumn Nash:** Not just that, but if you're a single mom like me, you can't take your kids to KubeCon and all these other places.

**Jorge Castro:** Actually, we \[unintelligible 00:34:37.26\]

**Justin Garrison:** \[unintelligible 00:34:39.14\] has childcare.

**Autumn Nash:** What?!

**Jorge Castro:** Yeah, they have childcare. That's how I met my future boss. We met in childcare and we're like "Wow, it's so amazing."

**Autumn Nash:** You know what? I'm leaving Java and going to Kubernetes.

**Jorge Castro:** Yeah, exactly.

**Autumn Nash:** Look, y'all are my people. Fire.

**Jorge Castro:** I know. I knew the minute I joined. I knew it.

**Autumn Nash:** I'm coming to the Linux Kubernetes side. I don't know if I want to play with Kubernetes, but Linux, I'm all for it.

**Jorge Castro:** Yeah. So part of the idea there was -- alright, so we'll do the best we can to get as many people packed into a KubeCon and OSS Summits and stuff. That's our mission. But also, if we could use the enthusiast market, the people who like their Steam Decks, they want to play with a Raspberry Pi with their mom, they can learn these skills using the same tools that we use. And use that as an on-ramp to get the people that are interested in getting jobs, and doing this.

**Justin Garrison:** And I think that's one of the things that a lot of people get confused about in the website marketing material for UBlue and Bazzite, and everything... Because you keep saying cloud-native in it, and everyone's like "What is cloud-native about a Linux distro?"

**Jorge Castro:** Oh, that pisses off so many people. It's amazing. I love it.

**Justin Garrison:** Yeah. Obviously, containers are building this system, but people don't care about that. They care about "How am I going to get work done?" or "How does this enable me to do something else?" Because most people, they pop open code, and they're like "There's nothing cloud-native about this. It's just an editor. I'm just writing some code. I'm learning a couple of things." What are the components there that make that tie-back in for you, where you're like "This is why we call it cloud-native. This is what we're trying to encourage people to learn"?

**Jorge Castro:** Right. Because you Open VS Code, and then you'll be like "Alright, I'm ready to install Node. How do I install Node on this thing?" You don't. Usually, for developers that don't come from that cloud mindset, this is initially their friction. And this is one of the reasons that I wanted to create the things -- with default Fedora, they make their own choices, because they're trying to make a generic Linux distro. So it was very clear to my target audience, I was like "Okay, if someone's the kind of person that would be interested in going to \[unintelligible 00:36:41.22\] KubeCon, what tools would they use?" So for six months I was just walking around randomly, "Hey, if someone were to give you the perfect Linux hookup, what does it look like?" VS Code overwhelmingly is the tool people use, although everyone's talking about Zed right now... And Zed installs awesome on Bluefin, by the way, and it's totally --

**Justin Garrison:** I just installed it yesterday.

**Jorge Castro:** Yeah, it's perfect. \[unintelligible 00:37:01.23\] to get all the tools. Someone was like "I've got to have Kind on there, so I can have a cluster." People had to have brew, because all the \[unintelligible 00:37:08.08\] tools for all the associated projects and stuff are all in brew, because our community are Mac people. Macs overwhelmingly are used in open source development, which is a topic for another day. But I want to help fix that.

So as people were saying, it was like "Well, I kind of have my own messed up way..." And it's like "Well, how would you teach your kid to do it?" They're like "Oh yeah, just start them off this way." And then someone at some point was like "You need to talk to Craig Peters, who's the dev containers guy." I don't know if he's still the dev containers guy. And that's just a little snippet of JSON that you could put in your Git repo that defines your containers for you. And it's built into VS Code, Jetbrains has support for it...

**Autumn Nash:** I love Jetbrains so much. I am such a Jetbrains fan.

**Jorge Castro:** \[00:37:52.14\] Yeah. Their Toolbox tool is what we use to install it on a Bluefin system, and it works fantastic. It updates for you, it handles everything... So our challenge really has been developers who aren't used to that workflow to get them used to -- you don't app get install Node and app get install MySQL, right? You have a file in your Git repo that says "I want from Ubuntu 24.04, from MySQL \[unintelligible 00:38:17.01\] or whatever. And then you work with it in that way as the container first primitive. And I would also say that that's the thing that probably trips up people the most, there are developers that some of them really don't want to change their bad habit.

**Justin Garrison:** Well, it's just a habit.

**Jorge Castro:** I call it a bad habit. Some people are going to say I make a living with that, shut up...

**Justin Garrison:** A traditional habit, for sure. A traditional habit when you have a full package manager, and you have write access to the full system, and the things that make it unsafe to do upgrades... All the things that later on you're like "Oh, this is going to bite me in a year when I have to upgrade this system, or I have to reinstall."

**Jorge Castro:** Yeah. It's like a \[unintelligible 00:39:00.18\] on your host. Like, don't do that.

**Autumn Nash:** Especially when it starts as not a huge problem when you have a few hosts, and then all of a sudden the more you scale, that bites you so hard later. Another thing I was thinking too is we have -- sometimes it's really hard when you're teaching... I teach military spouses through Milspouse Coders, but I also work with rewriting the code in different nonprofits to teach college students, or kids, and stuff. This would be great to teach people who are really new, but to do Linux. We did capture the flag with CLI, and just trying to find creative ways to help people learn Linux, and to learn the skills that you don't necessarily learn in college or through bootcamps; they'll teach you how to code, but there's so many other skills that you really need, and I think this would be such a wonderful product to bridge that gap for the industry skills that you need.

**Justin Garrison:** I have someone I know that I'm encouraging them to learn how to code, just to be able to learn that skill... And they're like "I don't have a computer. I have my phone, I have a tablet... I don't have an actual computer." So I had an old Lenovo that I'm like "Here. Here's Bluefin." They don't care about any of that -- like, "Here's a computer with an editor. Go have at it." And I'm not worried about him breaking it, I'm not worried about him -- you get a bunch of the tools out of the box, you're going to get those habits... But you just need to go through some freeCode Camp for a little while, and you can ignore all that other stuff.

**Autumn Nash:** But see, we've learned that in this market that's not enough; not for you, but... You know what I mean? You can learn how to code, but when you get to be a developer, for one, you're usually using a codebase that is really big, and that you're adding to it, too. There's a lot of little skills that you need, like being able to work in Linux, being able to use the command line. So being able to teach these skills that you may not -- learning how to code is such a small part of being a developer, and learning all the little skills that go with it to make them more marketable candidates...

**Jorge Castro:** How to work as a team.

**Autumn Nash:** Yes. See, most military spouses, they can solve some problems. Moms can solve problems. But we got to the point where people were like -- during the COVID hiring, everybody was willing to take a chance on people. And now it's getting to "Well, you don't have 30 out of the 30 skills, so now we can't hire you. We can't take a chance." So making sure that we're giving them a complete, rounded skill set is really important. So I think this would be a great product to utilize.

**Jorge Castro:** And you totally hit the thesis statement... It's "We need you." We need your students in open source. Open source maintainership -- open source took over everything.

**Autumn Nash:** If you would like to do a partnership, I would love that, because we're trying to get them to contribute to open source, because it's a great way to learn real development, and to be able to do development as a team. Working with people around the world, and being able to add, and to use version control, and stuff... Because that is another thing that is not taught. And just being able to work in a community, and to be able to work remotely... But a lot of places won't give you a shot if you haven't done it before; open source can be very gatekeepy.

**Justin Garrison:** \[00:42:14.01\] And going to the right open source. Because you can have a lot of people --

**Autumn Nash:** Dude, we are bringing a gang of Milspouse Coders to Scale because of that community. No, for real, because they're kind, and they're not going to judge them. It's so refreshing to -- even talking to Garrett and just people there; you guys have been in tech for so long, but you're some of the kindest people who've been in tech for so long, you know? So that community is so important.

**Justin Garrison:** My very first open source pull request was actually to Ubuntu.

**Jorge Castro:** Really?

**Justin Garrison:** Way back when I was in college. Yeah, yeah. It was denied. They told me "No. Actually, we don't want this."

**Jorge Castro:** What was it? Do you remember?

**Justin Garrison:** I was updating an SSH copy ID; the script that copies your \[unintelligible 00:42:54.10\]

**Jorge Castro:** Love that tool.

**Justin Garrison:** It's a great tool. But I kept doing it, and I kept getting duplicates on the authenticated -- and I was just like "Oh, this will just remove the duplicates." It just looks at "Hey, is there a duplicate there? Don't add it. And if it's not there, then add it." It was just a three-line Bash -- but it took me two days to learn how to open an account for Launchpad, to be able to send the PR, to be able to do all that other stuff. I fixed the thing for myself. I'm like "I want to contribute this back." And that was the very first time that I was like "I'm going to open-source this thing. I'm going to contribute back to a thing that already exists."

And it took a week before anyone even saw it... And they're like "Yeah, no, this doesn't make sense. It's not a big file. We're just going to write it twice." And they denied it. And I was heartbroken, because I was just like "Oh, man." That was such a bad taste of open source, because it wasn't -- and obviously, now I don't care. It was just like \[unintelligible 00:43:43.24\] I probably would also deny that, looking back, if someone contributed. But there was no feedback on it, there was no "Oh, let's talk about it." Like, "No we don't want this. It's fine. It's closed."

**Jorge Castro:** Yeah. It's one of those things -- sometimes you've got to tell people that the failure of something getting merged is still a win for you. You're not learning -- it's kind of like when F1 drivers race to learn experience. In your juniors, you don't care -- we're not judging your performance based on that. We're judging your ability to learn how to learn, you know? And that's a tthing I think as we go into the second and third decade of open source... Ubuntu in the early days, especially for me -- what was the groundbreaking thing in Ubuntu? We had a code of conduct. It was one of the first big ones. And that's how far back we're talking about.

Now, imagine if we were to have that interaction today and you have GitHub templates, you have a bot that says "Hey, welcome to your contribution", it adds the tags for you...

I think a lot of us maintain -- we want to be efficient, but I encourage maintainers to be less efficient when it comes to interacting with the community. You could say thanks when you accept a pull request. There's a field there for a reason. Would it hurt to put a picture of your dog in there every once in a while? I try to encourage these kinds of fun, happy, kind of bring the hacker --

**Justin Garrison:** The humanity behind open source.

**Jorge Castro:** ...the humanity back into it. And bring some of the little humor. I have this coin that \[unintelligible 00:45:21.17\] gives to people... It says "The strongest steel is forged in the fire of a dumpster." I just go "Hey, welcome to the project. It's a hot mess. Do you want to hang out and talk about Linux?" And that's really the value I think people are looking for. They want to see someone, and they want access to someone.

**Autumn Nash:** I want to be a part of your project. I just think that is -- I wish people were more like that, whether it's in business, where you're actually working as a developer, or open source. If you want to not have to do so much work, you teach other people and allow other people to come in to spread that work. And if you're not welcoming, you're just taking on more and more work by yourself.

**Justin Garrison:** \[00:46:03.11\] Before we go into the how to get involved here, what's going on with the hardware support? Because you have an unofficial community distro for the framework laptop... It's getting bigger, and you're starting to \[unintelligible 00:46:13.24\] If someone wants to install it, where should they be installing stuff, or are there things they can just go buy?

**Jorge Castro:** Yeah. So we are an unofficial community supported option on the framework. We get to work with those folks. I got to meet them in OSS Summit. Matt Hartley's been a Linux person in the community for at least as long as I have, over 20 years. And when I found out that framework, I was very interested in -- I mean, they outright are just saying... In the beginning they were like "We may do Linux or not", but now, as time goes on, they're like "We want to offer a Linux that's an alternative to Mac. But we want to do it in a sustainable way, with hardware that brings the cost down for everyone. Commodity stuff." And as a Linux nerd, that just lines up with everything that I want.

And I think by now we we've realized that we can't get there with a traditional operating system, Linux distribution. That model just has failed for so long that people have... Sometimes I -- try Linux again; I promise, it's getting better. But when you have that hardware, it removes so much uncertainty from it that -- I've been rocking Bluefin on my framework as my work laptop for over a year now, and it shreds. It is the best Unix system I've ever used. \[unintelligible 00:47:29.27\] battery life, but you know, hardware gets better over time... And Mac M3s are fantastic products. The bar continues to raise. So it's just not good enough for Linux to be an alternative. We have to offer something else, which is why we're also investing in the in the software part, the sustainability of the people. If we could tie it all in together, in kind of like a narrative that's about you figuring out what you want out of technology, at a time where more and more control of our systems are being taken away from us... I feel like the market is kind of ready for a little bit of an alternative reality. I've tried both both monopolies in mobile, and at some point you want to go back. But that doesn't mean I want to go back to compiling kernels, and things like that. And I want to take that success that Linux has had in the rest of the industry and help that catch up to desktop, so that we have something that we could be proud, that I can give my kid... Because I can give my kid a Chromebook. I cannot give my kid a traditional Linux. And that's really what we want to fix. And if we can do that in a way that helps people get into the industry and gets them into open source, and meet more people y'all, that's how we help solve sustainability in open source and all computing. That's my pitch for sustainability.

**Autumn Nash:** I also think it's interesting when they came out with the AI in a lot of the laptops that they're releasing now, and everyone was like "We're all running to Linux." This makes Linux more accessible.

**Justin Garrison:** I mean, the amount of work that Steam did with the Steam Deck, and putting Linux and Proton into gaming, and the amount of garbage that Apple and Microsoft have been putting into their operating systems has been coming up to this head of like "Actually, Linux is really good for a lot of things." And even the last two years, every developer survey you go look at - Stack Overflow, GitHub - they both have developer surveys... Linux is the number one used OS.

**Jorge Castro:** Can you imagine once it gets good?

**Justin Garrison:** This is people struggling with it. This isn't even -- this is people finding some old machine, and... Yeah.

**Jorge Castro:** Yeah. Because I think people go into it like "Well, you're never going to replace Photoshop." I was like "Okay, well, don't replace Photoshop then. Why don't you handle --" My local university has pallets of old computers they're trying to get rid of; they can run Kubernetes. Absolutely they can. Modern hardware can run Kubernetes.

And on the AI thing I think it's very interesting, because Bluefin does ship AI tools. But you're going to get Ollama, and you're going to do it locally, and you're going to use open-weighted models, and you can pull from everyone, and there's a little GTK app that gives you the ChatGPT experience...

**Autumn Nash:** \[00:50:05.12\] See, that makes me excited, because now you're also -- the fact that you said you can get old computers, that means it's accessible for the next person to learn, and for someone to be able to start off without spending... I always get the questions, "Do I need to spend a thousand dollars on a MacBook to be a developer?" No, you don't. But stuff like this is going to make it even more accessible for somebody, and give you those options. So that just makes me excited, because I'm all about trying to get people in tech, and to get different perspectives, and help people learn, and I just I love that.

**Jorge Castro:** I love it. I love it. Now we've just got to finish the thing for you. It always feels like it's never finished. It's been good enough for a while, but you know how it is, Justin... It's my baby, and I want every -- that brew thing that you're like "That's not a big deal", it constantly bothers me.

**Autumn Nash:** Yeah. That's how it is, though. That's because it's your baby.

**Justin Garrison:** As far as I know, you're the only distro that ships with brew.

**Jorge Castro:** Yeah, that's another thing. It's a fantastic competitive advantage, because distributions are incentivized to have you use their package ecosystems. And I'm done with package ecosystems. I love that stuff for work, which is why when I need Ubuntu 24.04, from Ubuntu 24.04, in a container, and then my host remains clean, and I get the latest stuff from brew... It's all \[unintelligible 00:51:19.29\] GitHub, everything is automated... They're adding all the SIG source stuff, so you'll be able to verify that, it's built in... It's just really nice to just bolt onto what the rest of the industry is doing, and use that to make my Linux desktop better. And that's what we concentrate on.

**Justin Garrison:** So where do people get involved? Where do they get started?

**Jorge Castro:** Well, you can go to universal-blue.org, or projectbluefin.io, or bazzite.gg. Depending on whether you're a gamer, or interested in base images. We're always looking for people. You don't have to know Linux; if you know ops stuff, GitHub Actions...

**Justin Garrison:** I keep telling people that are like "I need to get experience." I'm like "Go find an open source community... A lot of them run infrastructure, and they will give you the experience." You can show up for -- Kubernetes has a SIG for infrastructure, Fedora does, Nix does... All these people run infrastructure, they're open source, and they want more volunteers. Go find the community, go show up to a couple of meetings and say "Hey, I can take that issue if someone could walk me through it." I guarantee someone will say "Yes, I will help you take over that."

**Jorge Castro:** Yeah. And we keep everything Bash, and there's a little bit of Python there. We purposely ensure -- because the end product is a stamped thing, so it doesn't matter how you make it. There's some people that are like "Oh, this is just a bunch of Bash", and I'm like "Exactly. I don't need to learn --"

**Justin Garrison:** It runs the world. It's fine.

**Autumn Nash:** It does.

**Jorge Castro:** I don't need to learn Nix to install Vim. I can just use Bash for that. So yeah, we purposely keep it low, and then people just hang out. There's some people who just show up to hang out with the other video gamers, because they have those devices, and they're talking about getting every last frame per second out of it... There's a community of just hot rodders that might not even contribute. They're just "I ran the game today on this new version, and I got five FPSs more than I did yesterday. Just letting you know." That kind of hot rod vibe is what we're looking for.

**Justin Garrison:** And your Discord is crazy active.

**Jorge Castro:** Yeah.

**Justin Garrison:** You have so much stuff going on in Discord... I can never keep up.

**Jorge Castro:** Yeah. We just crossed 8,000, and unfortunately -- well, fortunately; or unfortunately, the rate of acceleration is going... Bazzite has finally found its spot, I think, now that we're enabling the Asus devices, and the Legion Gos and all these that have come out, because it's just Linux nerds figuring out stuff. So it's opened up a new audience. Like, we don't get a lot of coverage from Linux YouTubers and things like that, but we do get a lot of coverage from gaming channels that may not be Linux channels, but mention the educational Steam Deck news. And that's the audience we want. We want new people. R2 users, you know what you want already. I'm not trying to convert you. \[laughter\]

So that's the spiel. Give it a shot. Find a laptop and... Always happy to help, especially if you have experience in developer stuff, developer relations, putting together bundles of -- I would love to have a better story for data scientists, that includes better tools, things like that. So if you're deep in the industry, you can help out just by telling me what to ship. \[laughs\]

**Autumn Nash:** \[00:54:18.29\] I love that you're actually listening to your audience, because some people just want to build something cool and then they just don't listen to any other opinions.

**Jorge Castro:** Yeah. You want to listen to your audience. We generally don't listen to generic Linux people... Because if you ask people, they'll just ask for a better horse, you know? So we do take some choices that are opinionated, but... You know, it worked for Kubernetes, so... \[laughs\]

**Justin Garrison:** Jorge, thanks so much for coming on the show today, and for talking to us all about UBlue and all the distros, non-distros, the flavors of things that you're building over there.

**Jorge Castro:** Yeah. The custom images... Yeah.

**Justin Garrison:** Yeah. I have been a fan for a little while, and I hope to see more people coming into it.

**Jorge Castro:** Yeah. It's really awesome, and I hope you find it all useful. And if not... It'll just get better over time. Open source is -- the slow march of progress continues.

**Justin Garrison:** Alright, thanks so much.

**Break**: \[00:55:20.10\]

**Justin Garrison:** Thank you so much, Jorge, for coming on the show and talking to us all about Bluefin, and Bazzite, and UBlue, and what you're doing with the modern Linux distro. I've been running Linux on my computers since - I believe it was 2002. 2002 was when I got my first computer. So yeah, that was when I started running a Linux distro, because it was an old computer from an old company, and it didn't run Windows ME, or 2000 at the time... So I installed -- I don't remember what I installed. It was \[unintelligible 00:59:20.05\] Anyway, I've been using the UBlue stuff, I had a fork of it myself... I actually have a couple videos of getting started with Bazzite and Bluefin on my YouTube channel, because I've been involved with it. Really friendly folks. I have some PRs into it. It's a lot of fun. I just want to spread it to more people, because I think it's great.

**Autumn Nash:** I think it's great, and the community seems great, so I'm very excited about this.

**Justin Garrison:** Yes. It's a lot of people that came over from Kubernetes, at least the people that I was involved with... And so if you like the Kubernetes community, you're probably going to this community, too.

**Autumn Nash:** Look, Kubernetes, - I don't know if I want to run it, but the community is fire, so maybe this is my in. I'm going to go do Linux stuff; that I can get with.

**Justin Garrison:** There you go. So for today's outro, Autumn, I have a couple of links to share and talk about, and just go over... And I'll go first with mine, just because it's a really short one... Where in the year of 2024, when you think that a lot of the things that we've learned lessons from to not do on the internet would kind of be done with...

**Autumn Nash:** Wow...

**Jorge Castro:** There's plenty of things that you used to see happen, and you're like "Wow, why would that ever happen that way?" Someone found at TSA, at the airports...

**Autumn Nash:** Oh wow, this just keeps getting worse...

**Justin Garrison:** All the pilots and staff and crew people, they go through online. They all work there, they don't have to go through the TSA line. They're checked out, they're ready to go. That system is called KCM, Known Crew Member. And apparently, it's also just available on the internet. And someone found out that it's also vulnerable to SQL injection.

**Autumn Nash:** Okay, but low-key though, there's so many things that are vulnerable to SQL injection, and people just pretend like "Oh, that's beginner level", and I'm like...

**Justin Garrison:** And that is exactly this beginner level. Because if you've ever done SQL injection, the very first thing they're going to tell you to do... Autumn, have you ever done it before?

**Autumn Nash:** I've done it in white hacking classes in school, and it was very, very fun.

**Justin Garrison:** Yeah. And you're just like "This works? How is this possible?" So the first --

**Autumn Nash:** Put some characters in there, do some weird stuff...

**Justin Garrison:** The first thing they usually tell you to do is a single quote space or, and then number one equals one. They're like "Hey, just trick SQL and say "Hey, the password didn't match", or "One equals one, get me in." And that's exactly what worked on this website.

**Autumn Nash:** Okay, but we've been literally saying this for years. It's never a super-fancy security attack.

**Justin Garrison:** No, it's not.

**Autumn Nash:** It's always -- people will always be like "Oh, well, we've already accounted for all these things", and it's like "That's beginner stuff." And I'm like "That's how they get it, every time."

**Justin Garrison:** \[01:02:07.07\] All of the fancy scanners, and all that stuff, and then just the very basics of open up your certified hacker manual, and like "Let me just type in these characters", and you're like "Oh, I'm in."

**Autumn Nash:** Not even certified hacking manual. Literally, the first three days in any security class... My whole degrees in --

**Justin Garrison:** Sanitize your inputs, folks. Sanitize your inputs.

**Autumn Nash:** Yes. There's sanitizers that are so easy. It's just not that hard. And I was reading a thing on Linux -- not on Linux, but on LinkedIn... And it was like "What do you recommend people put in their Java code?" And I'm like "Check for injections." They think that things are so complicated, but sometimes it's always like they walked right in the front door, guys.

**Justin Garrison:** Right. It's not even like "Oh, I had to reverse-engineer something" or "I had to go convince someone with a phishing attack to give me their credentials." No, it's just a field that I filled out, and I just filled it out with something that was different than what you expected." And that was it.

**Autumn Nash:** My son's dad and him - they were putting in his new password on his new Chromebook, and it's like 123456, and it's like "No...!" It's like, "Guys, stop it."

**Justin Garrison:** Yeah. So I wanted to share that. I also found it interesting, of course, that being a large corporation of TSA, they wouldn't let them write this up, and they kept telling them to take it down, and they kept denying the fact... So there's all this politics of like --

**Autumn Nash:** Okay, but TSA I feel like should be on it.

**Justin Garrison:** Right?

**Autumn Nash:** Like, you make us take our shoes off...

**Justin Garrison:** I got global entry this year for the first time. I literally signed up for global entry before COVID happened in 2019, but I didn't have an appointment, and then everything shut down for four years. And so I got it when I came back into the country, and I didn't have to take off my shoes the last time I traveled. And I was like "Oh, this is why it's fancy for people." I didn't have to take my laptop out of my bag. I was like "Okay, that was worth the 70 bucks right there." I'm going to take five flights a year, and I get to leave my shoes on...

**Autumn Nash:** You fancy rich tech people...

**Justin Garrison:** $70. It was a time thing. Yeah. But I definitely was like "I'm never going to use this. This is a waste of money." And absolutely, I flew twice...

**Autumn Nash:** And then it changed your life, and then you're over here like "I'm never going back."

**Justin Garrison:** Yeah. It wasn't even the shorter line. It was like "Oh, I didn't have to unpack everything." And I travel with more computers than most people should... Because I've got my Steam Deck, I've got my laptop, I've got my iPad, I've got my Kubernetes Cube... I'm just like "Just let me leave it all in the bag."

**Autumn Nash:** Do you really take the Cube with you.

**Justin Garrison:** If I'm going for demos, yeah.

**Autumn Nash:** I love you so much...

**Justin Garrison:** It has a Pelican case, and everything. I had to unpack --

**Autumn Nash:** Really?

**Justin Garrison:** Yeah. I had to unpack it last time, and I was just like, all the cables, and power supply, and it was... Yeah, no, TSA PreCheck -- or Global Entry was fantastic for that.

**Autumn Nash:** I think you need it more than anyone does.

**Justin Garrison:** So what have you got? What do you have for this week?

**Autumn Nash:** So mine is YubiKeys cryptographic flaw let attackers clone devices by extracting private keys. So some security researchers were testing the YubiKeys and looking for vulnerabilities, and apparently the YubiKeys series 5 has a vulnerability that lets you clone the device and extract the keys stored, which is like, how many huge enterprises do use YubiKeys? That is a wild. And it's a side channel exploitation, which is just... Wow. This is such an interesting way to -- you're using a YubiKey to be more secure, and then there's such a huge vulnerability in the YubiKey, which just shows that we keep getting better, and then there's new ways to do crazy security things.

**Justin Garrison:** I love side channel attacks of just like "Hey, I looked at how long it took to process that command, versus this command, and now I have your secret key."

**Autumn Nash:** \[01:06:05.26\] But that is just such a -- it's such a creative way.

**Justin Garrison:** Props. You earned that one.

**Autumn Nash:** Yeah. It's like the dude who did the backdoor into the -- and that got himself to be an open source maintainer. You were like "That was wrong, but also, it was so creative. I'd almost give you props, but - bad. Don't do that."

**Justin Garrison:** And we recently talked about the RSA hack. That was - I don't remember, a few weeks ago from this recording... But yeah, they literally hacked into RSA to go get the secret keys off of the server, and all this stuff... And then someone's over here with a YubiKey, and they're like "I have physical access to this. I can do whatever I want. And now I could just see all the processing, and all this other stuff."

And what was the -- Heartbleed. The very first big Heartbleed CVE that I think made people aware that CVEs existed was like "Oh, I'm just going to read memory outside of where you think I'm reading, and you're going to send me your private key eventually." And it's just like "Oh, yeah." It's not even a side channel. It's just like "Oh, just give me more information. That wasn't it. Give me some more."

**Autumn Nash:** I feel like side channels are so interesting, because they're a roundabout way that you wouldn't think about it. Like, how we were just saying - most of them are walking right through the front door. Side channels are actually a really creative, interesting way to go about it, that you wouldn't necessarily think is a way for someone to hack you, which I'm just like, chef's kisses on creativity.

**Justin Garrison:** I don't remember if it was a white paper, or whatever... It was "How to hear into a room of people using a laser."

**Autumn Nash:** Oh, wow.

**Justin Garrison:** You shine a laser at a window, and the vibrations of what they're saying inside the room vibrate the window, and then you can read back the laser timing to reverse-engineer what they are saying inside the room, with not a microphone, not a -- you're looking at the laser and measuring the light.

**Autumn Nash:** See, that is -- should you do these things? No. Is that absolutely creative, and I almost want to high five you? Yes.

**Justin Garrison:** That is just straight up like Hollywood level "Oh, I don't believe that", and then someone's out there doing it, and you're like "Oh, okay."

**Autumn Nash:** Yes. You shouldn't go and steal information, but you almost deserved it afterwards. Just... Wow. Props, dude.

**Justin Garrison:** Yeah. And the YubiKey thing too - hardware is hard.

**Autumn Nash:** It is so hard.

**Justin Garrison:** Not only do you have to get people new YubiKeys that aren't vulnerable to this, but also a lot of them are like - you need to input those into a system for centralized management, and all this other... It's not just a mail you out a YubiKey from Amazon...

**Autumn Nash:** Not just that, but you tell people that "Hey, this is bad", and it's always going to be people who take forever to switch out their hardware... And so they're going to be like "Oh, I have to reprogram it." And the amount of people that use these in enterprise settings is going to be such pain. I feel bad for those IT departments in advance.

**Justin Garrison:** Yeah. But also it's -- I don't know, you can't fight against those things in the future, and nothing is secure today.

**Autumn Nash:** \[01:09:08.06\] That's what I'm saying. This is actually creative, like "Wow, how do you solve this problem" type of deal. And for it to be a whole series five... That is a lot of YubiKeys.

**Justin Garrison:** I've gotta go look at my YubiKeys now... But also, these are targeted attacks. Someone has to be able to like --

**Autumn Nash:** Physically...

**Justin Garrison:** ...get your key... And if someone wants to get into a lot of systems and they're targeting one person or one organization... I don't know, I've read so many stories that it's just like, they're getting in. I don't know how to do this stuff.

**Autumn Nash:** But it's just wild... When somebody is sitting there and they're thinking about different ways to do something, and they have enough time, and they have enough expertise, it is amazing what people will come up with.

**Justin Garrison:** If you have the resources, there's not a lot you can't do.

**Autumn Nash:** Especially now that you can learn so much online for free... It's amazing.

**Justin Garrison:** But also we encourage people to go learn more stuff online.

**Autumn Nash:** Ethical hacking, people. Ethical.

**Justin Garrison:** Come to Scale and go to the CTF. There's a CTF at scale every year, and it's a fantastic way to learn things. And even if you're not participating -- my first CTF, I did nothing. I didn't get any flags... I watched people, and I'm like "How'd you use that tool? What was that thing you just did?" And I'd look at the leaderboard, and I'd go watch over their shoulder, and it was a fantastic way to learn.

**Autumn Nash:** Sometimes that's the best way to learn, just to get the context that you need to start contributing, and...

**Justin Garrison:** Just to know what you don't know.

**Autumn Nash:** Exactly.

**Justin Garrison:** You're just like "What is the world of this?", and you can get that from watching over the shoulder, or you can get it from something like YouBlue, and where we just bake in a lot of those defaults, and say "This is probably better."

**Autumn Nash:** I'm so excited about that product.

**Justin Garrison:** Thanks everyone for listening to the show. We've been getting a lot of feedback, and we appreciate people sending feedback, hearing it on Reddit, and email, comments on episodes... This has been great just to hear from the community. Also, our Slack channel is a wonderful community. Again, people just supporting everyone else in the channel has been awesome to see. Thank you so much everyone for doing that.

I am getting through a backlog of some of the requests for things... We have some people scheduled, but there are some more requests of people that want topics... I need to go back through and reply to a lot of those, but we are scheduling more people. We have probably a couple of months already scheduled out, and so we're getting to it. But keep sending the feedback, email us at shipit \[at\] changelog.com. If you want something, a topic on the show, you can suggest an episode or topic through the website. There's a Suggest button. And that's some of the stuff that I'm still learning how to do this podcasting stuff, especially in a way that has more features than my last podcast that I ran in 2007, which was just me with a microphone and Audacity.

So it's wonderful to hear from the community, and we thank you all for listening... And we will talk to you again next week.
