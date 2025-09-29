**Adam Stacoviak:** Well, friends, we're here with our good friend, Carl George... Steeped in Linux, works for Red Hat...

**Jerod Santo:** Steeped?

**Adam Stacoviak:** Just kidding, I love Red Hat. \[laughs\]

**Jerod Santo:** What was that? The fangs are out.

**Adam Stacoviak:** Principal software engineer at Red Hat... The last time you were on the show you schooled us about, I think, just this separation that was kind of happening. That was about a year ago... Not really happening, but just this war in Linux between CentOS, Red Hat, RHEL, Rocky... I don't want to talk about any of that today. None of it. Zero.

**Jerod Santo:** None of it. Go back and listen to a year ago. Who cares what's going on now? What do you want to talk about?

**Adam Stacoviak:** Well, the biggest news I've seen come out -- but we have Texas LinuxFest, so we're going to talk about that, too.

**Jerod Santo:** Okay.

**Carl George:** It's what I'm here for...

**Adam Stacoviak:** But the biggest news I've seen come out of Linux recently has been around Arch Linux, Omarchy, and this resurgence of the desktop Linux. Are we there? Is it this close? Is that the thing? I know Ubuntu desktop has been out there, but is Omarchy... What do you think about Omarchy? Is it the right way to say it, Omarchy?

**Carl George:** I have no idea what the right pronunciation is.

**Jerod Santo:** Nobody knows.

**Carl George:** I'm happy to see it. I haven't tried it myself, I'm not really interested, but I'm glad that people are taking an interest in trying new things... And so much stuff in open source in general is just "I'm going to try this and see if it sticks. See if it gets traction, see if it gets contributors..." Some people try stuff, it never catches on, and it just kind of fades, or it stays as a single-person project for like 30 years... But yeah, I definitely like seeing experimentation like that, and what people can come up with.

**Jerod Santo:** So Omarchy, I think, is effectively a configuration script that configures Arch in an opinionated way, out of the box, to have an awesome Arch setup. And I don't think that's -- okay, so DHH started it, and he has a loud microphone, and he also has taste that a lot of people appreciate, and so he's gotten traction behind it. And of course, lots of people like Arch Linux. There's other Linuxes as well, as Carl is well aware... Are there other Omarchy-like setup scripts that exist for other distros? Is there a Red Hat thing? Is there a CentOS thing? I don't know. Carl, first of all, what distro are you rocking in your personal life?

**Carl George:** I use Fedora pretty much everywhere. That just fits in naturally with my work that I do, naturally for working on CentOS and RHEL, and in Fedora itself.

**Jerod Santo:** So is there a Fedora out-of-the-box setup script where it's like "Boom, Fedora-y"?

**Carl George:** There's dozens of them. Lots of people have made things like that.

**Jerod Santo:** Yeah, I assumed there would be, right?

**Carl George:** Probably the one that's got the most traction, interest, the hot topic right now is a project called Universal Blue. An ex-Canonical guy, George Castro, he decided that he wanted to create a pre-configured Fedora setup using the - pick the term of the week: immutable, image mode, atomic, whatever... I think Fedora's branding is centering itself around atomic workstations. Some people still like the term immutable, even though not everything's immutable, so it's kind of a weird thing... A little identity crisis on the naming, but engineers love naming things, and arguing about names. But yeah, they're a way to take boot C images where you can boot up an image, and you don't apply updates to packages individually, you just boot into a new image and you carry forward your home directory and any configurations you've set up. They've got a good structure now where they've got an image template, and you build it, put everything in GitHub with GitHub Actions to build the images, it stores it in GitHub Container Registry... And they're doing all kinds of different pre-configured desktops the way they see it. Opinionated desktops. Kind of a similar thing as the Omarchy stuff, it's just they're delivering it as ready-to-go images. Bazzite's in that same family, if you've heard of that. It's pre-configured, ready-to-go for gaming in general.

**Jerod Santo:** Gotcha.

**Carl George:** Bluefin's the other real popular one they have, that is a GNOME workstation, pre-configured, basically the way that George likes it... And a few other people that have gotten involved with it, but things that they think definitely need to be installed on a workstation to make it a day-to-day driver.

**Jerod Santo:** So that's cool... What do you do? What do you use? How do you configure your stuff? I'm sure you have years and years of doing it.

**Carl George:** I am an old-school sysadmin, so I use Ansible for my workstation.

**Jerod Santo:** Oh, man. Hardcore.

**Carl George:** What's that?

**Jerod Santo:** That's hardcore, man. You're just writing your own Ansible stuff.

**Carl George:** I thought you said "What for?" I was like "Because it's just what I know."

**Jerod Santo:** No, hardcore. Not "What for". I'll give you what for...

**Carl George:** You know, it works for me. It fits in my brain. I use the GNOME desktop, and they have actually an interesting... The backend for all the settings is a thing called deconf. I've heard it kind of compared to the Windows registry. It's not like a configuration file, like most people like on Linux, but it's got an Ansible module that's really well-integrated. So I can, in my Ansible playbook, just set up and say -- instead of doing 24-hour time, use AM/PM. And that's just a single key in a little chunk of YAML that I put in a playbook, and then I run that along with all the other little things that I have set up to go... And so that's how I'll configure my systems. I'll be getting ready to do that here in the next month or so. I've got a hardware refresh coming from my work laptop, and I'll just run that playbook, copy over... Run the playbook, sign into my Firefox profile, and just double-check that there's any files loose, stuff in Git repos I haven't committed yet, things like that, and then I'll be good to go.

**Adam Stacoviak:** Have you played with Ansible in a while, Jerod? I don't have a ton of experience with it, personally. I want to, but I haven't done it yet. But do you have any?

**Jerod Santo:** I have some experience, but just back when... So we used to use Ansible with deploying Changelog probably six, seven years ago... And so I learned it then. And I did a little bit of Ansible when I was doing network administration decades ago. And it always made sense to me. It seemed like, for my uses back then it was slightly too much for what I needed, which was really just a couple of scripts... But once you get over the learning curve, as Carl, I'm sure, can confess, it's all very simple and straightforward. And that makes it worth the lift.

**Adam Stacoviak:** \[07:57\] It requires a client server, right? You still have to have a main Ansible hub where you run your playbooks, right? Isn't that how it works?

**Carl George:** It can work that way, but there's a lot of flexibility. The way that I'll usually do it is I just have the playbooks in a Git repo, I'll clone the Git repo, and then I'll apply it to localhost. You can also do it where -- like, if you're configuring servers, your local machine is kind of the hub, the control. I think the official terminology is the control node. But you can have it where your local laptop is the control node setting up a server, you can have the control node set up itself... You can do any number of things. There's a lot of flexibility. And that's probably the hardest part of it, is that there's enough flexibility that there could be multiple ways to do a thing. That can get you confused, especially if you hear about one way to do it, and you try and do it, and then you find another way and then you're like "Okay, well, what's the most correct way I want to do this?" Or at least that's where I'll get hung up on it. Other people just go with the first thing they find that works and they say, "Okay, good enough. I don't really care."

**Adam Stacoviak:** Yeah. I think correctness is subjective in things like that. It's like "This works for me, so - cool." Can you give us a deep look? Well, not like deep-deep, but a deep enough look where it's not too shallow, of how you go from fresh Fedora install, clone a GitHub repo down - boom, Ansible. Is that roughly how it works? Did I paraphrase a good version of it? That's pretty much what I'll do.

**Adam Stacoviak:** Okay...

**Carl George:** The things that I haven't figured with Ansible quite right is syncthing setup. I use that kind of like an open source Dropbox thing... And the way that is configured is you open up a browser and go to a port on localhost to do the setup in a web browser. I'm not really sure of a way yet to put that into Ansible, so I'm still doing that by hand. Then I already mentioned signing into my Firefox profile and syncing all that stuff down for all my bookmarks and history.

**Jerod Santo:** Are you happy with syncthing?

**Carl George:** I like it a lot.

**Jerod Santo:** Because we are not happy with Dropbox at the moment.

**Carl George:** Most of the time I completely forget syncthing. I'm even using it, I just have a directory called sync that is just the same on all my systems, even my server, so I can just shuffle files back and forth really quick, or just always have my directory of notes, or those memes that I wanted to share... Most of the time I forget that I'm even using it, because there's not like a -- well, there's a tray icon that you can get. I don't use that. I just periodically go pull it up in the web browser and make sure everything's happy and working.

**Jerod Santo:** Gotcha.

**Carl George:** So I'll forget that I'm even using it.

**Jerod Santo:** Do you use that for collab at all, or is it all just your own stuff?

**Carl George:** It's just for my own stuff, personal.

**Jerod Santo:** Because if we were to replace Dropbox - which I would love to at this point... It's been so flaky, just even the desktop app. And it just stops syncing, and I have to force-quit a bunch of processes, and then if it starts again... Just like nonstop trouble. We would need the collaboration features, because that's how I use it, is to share... And how does it work with large files? Good stuff? Or are you mostly sharing memes? How big are your files?

**Carl George:** I don't share very large files. Certainly not like podcast size video recordings. But videos that I have put in there in larger files have all worked just fine. I haven't had any issues with it. But there may be a certain file size where it starts getting problematic.

**Jerod Santo:** Yeah.

**Carl George:** But like with the experimentation thing early on with the Omarchy, the only way to find out is to try it.

**Jerod Santo:** It's to try it. Yeah, totally.

**Carl George:** I also don't know what the collaboration features look like. I'm sure that if they are lacking, there's probably lots of requests to improve those, and ideas about how to improve those. Since it's open source, everyone's got -- there's a lot more opinions than people willing to do the work, usually.

**Jerod Santo:** \[laughs\] That's a fact. That's not just the open source world, though. In a proprietary world they hire employees to work on stuff that nobody else wants to. But in open source, you have to either convince somebody that it's worth their time, or you have to roll up your sleeves and do it yourself.

**Adam Stacoviak:** \[11:53\] I wonder if syncthing has a token, like Tailscale does. I was trying to think about one other tool I use that requires -- well, it sometimes requires browser intervention. And Tailscale is one of them, where it makes you click a link... But if you know or you have an auth key or a token kind of key, then you can sort of just use that when you instantiate it. It's like "Okay, this is really me." I don't have to ever go to the browser and prove who I am.

**Carl George:** Like an activation key type thing?

**Adam Stacoviak:** Yeah, it's kind of like that. I wonder if syncthing has that kind of thing, because... So many things are things, you know? That's it. I said "thing" like 17 times just now. I was like, I'm just going to stop saying thing, okay? No more things for me...

**Jerod Santo:** And here you are saying it a few more times, just in case...

**Adam Stacoviak:** Just in case...

**Jerod Santo:** So I think the reason why Omarchy is catching on is because I think a lot of people want to experiment with Linux, but they're so intimidated, you know? And just like OhMyZSH, I assume Omarchy is like O -- maybe the O is like from OhMyZSH. I don't know where the O is coming from, but we try to infer what these names are about.

**Carl George:** That sounds like a reasonable guess. I never thought about that, but yeah.

**Jerod Santo:** Because it's kind of the same thing, right? Like, OhMyZSH...

**Carl George:** I think you're probably right. I would bet five bucks you're right. That sounds correct.

**Jerod Santo:** Thank you. Let's not go search out the truth, let's just assume I'm correct. That's always more fun. The thing about OhMyZSH, what it does is it just like gives you an awesome setup, and then you can just use it. And then once you're using it, you start to formulate opinions, and I want to tweak, I want to go from there. But you do not have to start from a blank canvas.

**Carl George:** It gives you a starting point.

**Jerod Santo:** Exactly. And I think that's what these setup scripts are so awesome for, is it lets you use it out of the box in a way that's not just stock, in like an opinionated "These are good settings." Not like "These are default settings", which aren't always good, especially for development. And then you can start to tweak and configure and go from there. And it sounds like Fedora has an ample number of projects like that. I'm sure every major distro has people that have wanted to provide that for others, and maybe they're just lacking the signal to ratio that DHH has, and which is why he's gotten so much... Because there's a lot of steam around that at the moment. But that's cool, because it brings people in and then they can get their feet under them and they can try it out, and then they can go off and do their own thing, or they can switch from Arch, they can go distro hopping, as so many of us do in the early days of Linux... And then they can settle in and really sit with the same distro for years, as it sounds like you've done.

**Carl George:** Oh, yeah. I think another aspect of the Omarchy stuff is that -- I don't think there's a ton of stuff out there yet for Hyprland, which is the desktop environment or shell thing that it's using... It's relatively new, and a lot of people are -- it's very, very configurable; a lot more than GNOME. I don't know if it'd be more or less than KDE. That's another one that's very configurable. But KDE 's been out there a long time, so there's a lot of opinionated KDE setups out there. Hyprland's a lot on the newer side, so I think there's an appetite... One of the reasons it's getting so much traction is that there's an appetite for -- people have heard of Hyprland, they want to try it, and they go and they say "Okay, well, I don't want to start from scratch", because when you saw Hyprland from scratch, it is pretty bare bones. It's just right there, and it's like "Okay, write your config to put stuff where you want it." So people are looking for an out of the box, ready to go set up to start from and change, not necessarily start from scratch.

**Adam Stacoviak:** Yeah. \[unintelligible 00:15:19.17\] kind of thing. Omarchy actually extends from Omakub.

**Jerod Santo:** \[unintelligible 00:15:27.16\]

**Adam Stacoviak:** Sorry, I already knew this though, that's why I had to look it up.

**Jerod Santo:** I'm just kidding. Yeah, go ahead. I just like Carl betting on me.

**Adam Stacoviak:** Yeah, my bad.

**Jerod Santo:** Omakub?

**Adam Stacoviak:** Omakub. This is the thing that DHH made as well. It's like a Kubernetes -- I wouldn't say that. It's probably like a deployment thing. I haven't played with it enough to know exactly what it is, but it says "Turning fresh Ubuntu installation into a fully configured, beautiful and modern web development system." So he kind of took the same thing I guess he had done with Ubuntu and turned it into...

**Jerod Santo:** \[16:01\] And that one didn't connect. But maybe Carl's right then on the Hyprland. Now I'm knowing where it comes from originally. The etymology is now complete. Omakase. That's his thing, right?

**Adam Stacoviak:** That's right. The Omakase spirit. The idea that the entire setup experience can benefit from being tailored up front by someone with strong opinions. That's basically DHH in a nutshell, right?

**Jerod Santo:** Right.

**Adam Stacoviak:** Convention over configuration, but that convention is kind of pre-configuration... That is very strongly opinionated.

**Jerod Santo:** Alright. So now we have that figured out. Sorry, OhMyZsh. I gave you credit where it was not due.

**Carl George:** And I lost five bucks.

**Jerod Santo:** Yeah, Carl... I guess, who does he give it to? Adam maybe, or just...

**Adam Stacoviak:** DHH.

**Jerod Santo:** ...let's hold on to that.

**Adam Stacoviak:** He gets all the money.

**Carl George:** I was offering the bet, nobody took me up on it, so I'm good.

**Jerod Santo:** That's a good point. That's a good point. So Hyprland - I'm not super-familiar with that, Carl. Is it a windowing manager? What is it? Is it a --

**Carl George:** Yes, I think that sounds about like the right term. Like Linux desktop stuff, you've got the idea of a desktop environment that's kind of "This should be..." Maybe it's not as opinionated as something like Omarchy, but it is a design where you install it and it has all the components, there's nothing missing out of the box... You've got your file manager, you've got your sound settings... A basic desktop may be kind of minimal, but a more or less complete setup. KDE out of the box, I think, is the same way. KDE Plasma.

**Jerod Santo:** Okay.

**Carl George:** XFCE... There's other desktop environments like that that advertise themselves as desktop environments. And then you've got the things like Hyprland, i3, Sway is another one... There's a whole bunch of these other things that - they don't really describe themselves as whole desktop environments. They're more like -- like you said, I think window manager was the term you used...

**Jerod Santo:** Yeah.

**Carl George:** And so those, they're definitely expecting you to come in and make a lot of your own choices, like "I want to use this window manager, and I want to use the file manager from GNOME, and I want to use the image viewer from XFCE, and piece together things by hand." Long, long ago I used to do that, I tinkered a lot more... I was like "Yeah, I like this app, and this app, and I'm going to piece together my own little stone soup of a desktop." And then after a certain point, I was just like "GNOME's good enough. I'll just use this." This is what most people are using... You run into enough random weird issues with things not working together that you want to go down a path that is more common, where if you have a problem, you know that other people have run into the same problem...

So I think that's where desktop environments fit in, versus people that do want to tinker and come up with something that is extremely custom, and exactly the pieces they want and nothing else. They'll go down the route of the window managers, which is where Hyprland fits in, I think.

**Jerod Santo:** Gotcha. On their website, Hypr.land, it says they provide the latest Wayland features. Now, I don't even know what Wayland is. Do you know what Wayland is?

**Carl George:** Well, that is a whole thing...

**Jerod Santo:** This is why Linux can be a little bit of a deep-dive, right?

**Carl George:** Yeah. This is why I would say Hyprland is probably not great for beginners, because right off the bat you're asking "What even is this Wayland thing?"

**Jerod Santo:** Right.

**Carl George:** It raises more questions than answers.

**Jerod Santo:** It's like "The tagline is Wayland" and I'm like "I don't know what that is."

**Carl George:** Yeah. For people that have been using the Linux desktop for a while, a lot of times you'll see strong opinions about it. At least on Fedora, I forget what version it was, but Fedora switched over to Wayland by default. Some things didn't work. It was fairly early on whenever it switched up... But let me back up a little more.

**Jerod Santo:** Sure.

**Carl George:** You've got to have something that draws all the windows on your screen, handles all of that stuff. For a long time, that was Xorg server, or X11 is what a lot of people call it. I think technically X11 is the protocol, and the project is X.org, and then the thing people are calling X11 is Xorg server. I think it's the actual correct term. These are often used interchangeably, though. People just throw those around and say "I have to use X11."

\[19:58\] Well, the Xorg developers, the people that worked on that project, they realized that their 20-30 years of technical debt around that server, that thing to draw everything on the screen was piling up, and it wasn't really working great for them, so one of the developers said "Okay, well, if we started this over from scratch, how do we change it?" And did a lot of different things, a lot of it around security. Xorg has a long history of security vulnerabilities and things because of the design and lots of technical debt, security problems arising... And then the developers decided "Okay, well if we started over, how can we design this where we wouldn't run into this category of issues?" And what they came up with was Wayland, that is this new way to do it.

The difference is where in the old Xorg server days all these desktops would use the same Xorg server and then they would talk to that through those APIs, Wayland is just the protocol; kind of like X11 is for Xorg server. And so with Wayland, the idea is that all of these clients are going to talk to the Wayland protocol and be the equivalent of the Xorg server. So in GNOME's setup they have a thing called Mudder as one of the components of GNOME, and that serves as the Wayland compositor, I think is the term.

**Jerod Santo:** Okay.

**Carl George:** Hyprland is also a Wayland compositor. Sway is another one. KDE has one, I forget what it's actually called, but it's similar to GNOME where it's one of the components as part of the whole Plasma desktop experience they have.

So that has been a big shift. For many, many years, people have said "Xorg server is eventually going away. Wayland is the future. It fixes all of these security problems. It's more maintainable. It doesn't have 30-year-old code in it for things that don't even matter anymore." But then, like with anything else, you tell people "This is going to be an eventual change you have to accept", you have people that try to come up with reasons why they have to stay on the old one. "Well, I've got this one particular bug on Wayland that doesn't happen on Xorg server." But that's not really a fair comparison, because there's many bugs that are only on Xorg server and don't even exist on Wayland.

**Jerod Santo:** Sure.

**Carl George:** So it's really just -- if you want to look at only the negatives, you're swapping one set of problems for the other. The theory is that the Wayland problems are easier to fix and more maintainable long-term.

**Jerod Santo:** Yeah. So where was the pressure to migrate placed? Because the Xorg server team, they came up with Wayland. But Wayland's a protocol. So they write a protocol and they just brush their shoulder off now? Or do they give a reference implementation? Is it on the GNOME team and the KDE team, or I guess the Hyprland folks? Like, who actually has to implement these Wayland compositors?

**Carl George:** It's definitely anyone that wants to consume it. And a lot of those Wayland developers, they're working on some of these other projects as well. Some of them work in both GNOME and Wayland, some of them work in Wayland and KDE, and they're working together, implementing this...

**Jerod Santo:** Group efforts.

**Carl George:** I also heard of another project recently, I think it's called Wayback. And the idea is that they are going to write a Wayland compositor that can basically act as a translation layer, and servers that were designed to work with Xorg server, like XFCE or i3, can just talk to Wayback, and Wayback will basically lie to it and say that it's Xorg server, but then also be a Wayland compositor, and just kind of be like a translation layer in between, so there won't be as much porting work. That's a really new project though, so I don't know how well it works yet, or if it works at all, or it may be working perfectly already. But yeah, it's definitely on each individual project to just adapt to the new protocols.

And that's some of the pushback I think, is that people see "Oh, well this there's work involved in this, this is going to change... But I like this desktop that works on Xorg server. Why do I have to do anything?" And... Yeah, that's just open source in a nutshell.

**Jerod Santo:** \[24:01\] Because the times are changing, yeah. Interesting.

**Carl George:** Underlying stuff changes. Nothing stays the same forever.

**Jerod Santo:** So am I tracking this right? And maybe Adam, let me know if you're tracking this too, because it's complicated, right? So Omarchy is a configuration script that installs Hyprland into Arch Linux. And Hyprland is a compositor that implements the Wayland protocol... Which means it's also a windows server? Like, it's a windowing server then? Because Xorg isn't there. Xorg server is not there. So Hyprland is then its own windowing server in that way, because it implements the Wayland compositor?

**Carl George:** I think so, yeah.

**Jerod Santo:** Okay.

**Carl George:** That sounds accurate.

**Jerod Santo:** Okay, so that's alright...

**Carl George:** It matches with how I understand it.

**Jerod Santo:** Then bring it over to --

**Carl George:** I'm not a developer on these things, so I don't fully understand them, but that all sounds correct.

**Jerod Santo:** But you're like three classes ahead of us in school, you know?

**Carl George:** True.

**Jerod Santo:** Yeah, so we're just checking our work against yours... We still might all be wrong, but probably Carl's more right than I am. And so bring that over to GNOME. Where does Wayland compositor, Wayland protocol, and a windowing server fit into GNOME? Is it like built into GNOME now?

**Carl George:** Essentially, yeah. I know the component in GNOME is called Mudder. That is the Wayland compositor. It runs as a separate process, but it's integrated as part of the GNOME project, and that's where all of the Wayland things happen for GNOME. And then all of the other GNOME components just integrate into Mudder to work together as one desktop environment.

**Jerod Santo:** Okay.

**Carl George:** The good thing is -- because with GNOME, it's not really designed for that piecemeal, like "I'm going to take this piece and that piece." They're really designed to be like one cohesive unit and work together. So really, you use a distribution that has GNOME either pre-installed, or you can -- even in Arch, you can install the GNOME... I think they call them groups in GNOME. In Arch also. You install the GNOME group, and you get all of the design components of GNOME that work together. And you don't really have to even understand that "Okay, well, Mudder's handling this part, and GNOME shell's handling this part." It's all just "You install GNOME, and this collection of pieces work together." Versus something like Hyprland or any of the other various windowing managers, you do have to kind of understand "Okay, well, I got all this working. Oh, but I don't have a file manager. How do I read my files? And now I've got to install that." Or "This part's working" or "That part's not working." GNOME's definitely designed to be a lot closer to the "It's ready to go." It works out of the box for the most part, but at a cost of you don't have as much choice with it in configuration.

**Jerod Santo:** So yeah, it's kind of like buying an entire set of Lego, where it's like "This is what you get." It's all packaged. It has all the things for you to build this particular thing. I'm talking about GNOME now. So as a Fedora maintainer - I'm not saying you are one, but... Are you one? Are you a Fedora maintainer?

**Carl George:** Yes.

**Jerod Santo:** Okay. So as a Fedora maintainer -- and does Fedora ship GNOME by default? Is that the default environment in Fedora?

**Carl George:** Yes for what we call Fedora Workstation. There are certain deliverables that are called editions, I think is the right term... And kind of the flagship edition for a long time was Fedora Workstation, which defaults to GNOME. More recently, I think about a year, a year and a half ago, we have... Let me back up a little. Besides the main Fedora Workstation edition, there's also a Fedora server edition, which - obviously for servers; not meant to have like a graphical environment on it. But there's also Fedora Spins, that would have things like KDE Plasma, XFCE, and other desktop environments. A lot of people would use those.

Farther back, it was decided that KDE Plasma was popular enough and important enough to be what we call a release blocking deliverable, meaning that if something's broken in the KDE Plasma spin, Fedora could delay the release to get that working before pushing out a new version. A release blocking spin wasn't really that different than an edition. So basically, they said "We need to promote this from a spin to an edition, and give KDE a little bit more love, and feature it better on the front page."

\[28:06\] Now, for desktops, Fedora has two editions. There's the Workstation, which is GNOME, and then - Plasma desktop I think is the name they went with. A lot of people -- engineers and naming things; there's lots of talk of "Well, we should have Plasma Workstation and GNOME Workstation, and have it more right in the name." And then other people said, "No, Workstation is GNOME." Lots of different opinions and fighting about that, but... Eventually, what they landed on was "We still have Fedora Workstation, that is GNOME... And if you want to call it a default, sure." But also the Plasma desktop is also featured as a leading variant on the front page, one of the choices you can download, and that has KDE Plasma in it.

**Jerod Santo:** Gotcha. Alright, so my last question, and then I'm going to make sure Adam's with us and has further thoughts... Because I'm still getting clarifying questions. So as a Fedora maintainer then, with regards to GNOME, do you have to care at all about Wayland X11, those kinds of things? Or you just make sure GNOME is packaged and installed and configured by default, and they're black box to you?

**Carl George:** It's mostly a black box to me, but that's also because I'm not a maintainer of the GNOME packages, or any of the Wayland packages, or anything like that.

**Jerod Santo:** Well, by you I mean the royal you. The group of maintainers that maintain that part.

**Carl George:** Yeah. And that's part of the difference, is that we have the collection of Fedora maintainers, but then you work on the specific things that are interesting to you, the packages you care about. I mentioned my sysadmin background, so I have a lot of like server-oriented and Python library stuff that I'll interact with. A few desktop apps... But I don't maintain any desktop environments. For the royal we though, you're correct, that generally Fedora makes sure that GNOME is packaged and working. That's a lot of the -- a lot of the GNOME developers from upstream also work in Fedora, and package it there and make sure it's all working correctly. And then everyone else can just kind of maintain applications and libraries and whatever else, or even GNOME extensions, that integrate with that base desktop, and they'll just adjust to whatever changes.

That is one thing that people can fairly criticized GNOME for, is that the extensions API isn't -- there's not really an API for it. There's a lot of GNOME extensions, and they're well-known for basically breaking with every GNOME version, or every other GNOME version... Which can be pretty painful. And then you have some GNOME developers that will just go out of their way and say that extensions are a niche thing. Which is weird, because every distribution that ships GNOME has at least one or two extensions pre-installed. They're not niche at all. Maybe some of these smaller ones are, but...

That is one of the things in GNOME that nobody's really figured out how to do yet, is to have a stable extensions API where you can have an extension that works well for an extended period of time... Because GNOME releases a new major version every six months, which does line up pretty well with Fedora's release schedule, which is the same, a new major every six months. So every new major version of Fedora has the next major version of GNOME. But it can be painful for those extension developers whenever the thing's changing out from under them.

**Jerod Santo:** For sure. Alright, Adam, are you with us? Are you tracking?

**Adam Stacoviak:** I'm tracking, I'm just overwhelmed, I would say. It's not that hard to follow, necessarily... I think for me in particular, I would love to use -- I love Linux server. Linux servers of all types. And I would love to try and use Linux as a desktop, but because I'm a creative and we do video and audio, there's always something that stops me. I can build machines, I love that stuff... But man, all these distros, all these configs, all this -- it's just so hard to map your mind around. It's no wonder why we haven't experienced the year of the Linux desktop. Because the sand is always shifting underneath you, I feel. As someone who knows the lay of the land well, or at least to some degree - you're a couple of classes ahead, as Jerod said...

**Jerod Santo:** \[32:10\] That's probably underselling Carl. I don't want to undersell you, Carl.

**Adam Stacoviak:** Sure. Sure. I'm just reusing your words.

**Jerod Santo:** We're in elementary school, he's in college.

**Adam Stacoviak:** Okay, that's a lot of classes. Okay... \[laughter\] That's not a few. You're being generous there. For creatives who want to build their own PC and they don't want to use Windows - OMG, please stop. Don't make me use Windows. I've tried it, it wasn't the worst ever...

**Jerod Santo:** Hold on a second, Adam... Is this your first time publicly saying this? I know you told it to me last week privately, but... Do you want to make a stance here? Because you were pretty gung-ho on Windows about --

**Adam Stacoviak:** You know, I've got a lot of \[unintelligible 00:32:40.06\] You know this, right? I'll love it this week and I'll hate it next, you know... But I'm an experimenter. I love to tinker, I love to try... And I think that if you want to go the easiest road possible ever, and have your GPU drivers and your IGP drivers and all the drivers ever right there at your fingertips, use Windows, because that's what it does well. It is not extremely configurable, to my knowledge. It install a ton of stuff on top of it; it's getting littered with Copilot-esque things... I don't even know what they're doing with it. There's a lot of ways you can remove that stuff, but... I think Windows is a super-easy user experience, unless you're a developer. If you want to SSH into, or you want to do things you could do on a Unix Linux system, it's just not as easy and smooth. It's not like installing another flavor of an OS that's very popular out there and being able to treat it like a thing like that. I had a lot of opposition, and I'm also not steeped in it, so it could have been user error, but... It was challenging.

But the real question is, if I'm using Linux, or I want to use Linux, and I want to be a creative who does video or audio, or podcasts and things like this... I don't even know, I guess Figma is a web app, so you can probably Figma on Linux, no problem. But what distro do I choose? What windowing server? It seems like maybe Wayland is probably the route, because Xorg's got issues, let's just say... Where do you go, to be a creative and use Linux?

**Carl George:** Well, obviously I'm biased, and will say you can do all on Fedora...

**Adam Stacoviak:** Okay...

**Carl George:** ...but the real answer is that's just the wrong question to ask. The real question is use what works for you. If you try something and it doesn't work... The thing that people love about Linux is that you can just change it out, because most distributions are free of cost. You can just go and install a new one. The famous -- not really meme, but people call it like distro hopping. You can just swap out and change one.

People overdo that a bit, where they run into any problem and instead of trying to solve it, they'll switch to another distribution, and then have the same problem after hours of reinstalling and whatever... Not everyone has that quick setup script with Omarchy, or Ansible Playbooks, or whatever. So they'll spend a weekend getting a new distribution set up, and then run into the exact same problem and realize this isn't anything to do with any particular distribution. This is, say, a bug in GNOME, or a bug in KDE, or whatever. Or a bug in Wayland, or a bug in Xorg server, from the old stuff.

The main thing is, I would say, get out to the events... A little future segue to what we should talk about... \[laughter\] Get out to events, talk to other Linux people... There's a ton of people doing podcasts on Linux, doing creative work videos, and streaming, and all kinds of that stuff. Talk to them, see which ones they like.

I have some friends that -- I won't shout-out all the other podcasts out there, but I know that there's some podcasting friends that use NixOS...

**Jerod Santo:** Shout them out, man...

**Adam Stacoviak:** Yeah, shout them out.

**Carl George:** \[35:53\] My buddies over at Jupiter Broadcasting. They do a lot of stuff -- they are big fans of NixOS, which is a... If you think that Hyperland is really configurable, NixOS is that kind of for your whole OS. Just like, everything is extremely configurable. I don't know a whole lot about it, I haven't tried it myself, but they are big fans of NixOS. My friend Michael over with Destination Linux, he uses Fedora for all his podcast production stuff. But then there's other people on his show that use other stuff... So I would say get out and talk to these people. I'm sure you've probably met some of these folks before.

**Adam Stacoviak:** Never...

**Carl George:** If you haven't, if we see them at a show together, I'll be happy to introduce you. Just talk to other people, see what tools they're using. Besides distributions, you might find out about other applications. You may think, "Oh, well, here's this Mac app that's really good, that I would have a hard time doing without", and they could tell you about "Oh yeah, I used to use that. This Apple Linux works better for that", or "It's good enough for that, but then there's this other app that helps fill in the gap." Just talk to people, network and find out what can work for you.

At the end of the day, I don't really benefit or care about switching people to Linux anymore... There was a time in my life when I was like "Oh yeah, everyone should use Linux", and "I need to convert people." Nah... Use whatever works for you. If you're happy on Mac and don't really have interest or curiosity in changing, don't. If you're happy and satisfied on Windows, then keep using it. It's not my problem. But for me personally, I know that I want to use an operating system that I can contribute to, and change, and affect. I can't do that with Windows, I can't do that with Mac. I can do that with Fedora, which is why I use it.

**Adam Stacoviak:** That's true. That's good points there. Well, I would say - hey, if you're listening to this on YouTube, wherever you're listening to that, drop a comment if you're on YouTube; if you're out there not on YouTube and listening on the audio podcast, we're on X. You can email us, editors \[at\] changelog.com. I would love to hear from creators - creatives, whatever you want to call yourself - anyone doing this kind of stuff, because I just haven't gotten that far into it. And I feel like the next layer of experimentation for me truly is building a creator PC that does not run Windows, let's just say. So that'd be my next major fun project. I'd film it, I'd talk about it... I would love that. I love building machines, and I have no desire to build one more, because I would have to put Windows on it. And I just don't want to do that. It wasn't that bad, though... It really wasn't that bad.

**Carl George:** It sounds like you're pretty curious, so... You know, honestly, if I could just give one credit to Windows, it's that they've got so many applications... And I think once you're past a few things and you're using, let's just say like Notion, or you're in Slack, or you're in Zulip or something like that, at that point the operating system sort of just goes away, and it doesn't feel like you're somewhere wrong. There's some things I really liked about Windows, but it was mostly UX things. And that's because I had taken so much of the bad stuff away that is by default. Chris Titus's script - I forget what it was called, but it's really awesome for helping you fine-tune, install, configure and deconfigure Windows to be more enjoyable. If it wasn't for that Windows, would have sucked bad for me.

**Carl George:** I think you bring up a good point with the apps. I mentioned in the past trying to convert people to Linux. Huge waste of time. But what I would run into is I would say "What do you do on a computer?" and they're like "Oh, I get on Facebook and check my email." And I'm like "What else do you do?" "That's it. Maybe I'll look at some photos..."

**Adam Stacoviak:** You should buy a Mac.

**Carl George:** And I'm like "Okay, well, if you're just in a browser and don't have any specific application needs other than like a photo viewer... Yeah, here's XYZ Linux distribution. Try this out for a while." And then they would always do it, and then they would call me up like a month later or whatever and say "Hey, I bought this camera at Walmart and it comes with an application, and it doesn't install." And I'm like "What's the camera." And I'll look it up. "Yup, that's a Windows only app." And inevitably, something would happen like that.

\[40:02\] Nowadays, I think that would be a less common thing, just because of the move to web apps over like native applications. So the problem has gotten better, but still, it's a problem where I wouldn't necessarily recommend Linux to friends and family unless they actually want to get involved and learn it." Like, you're asking questions and want to know. If I have a family member that wants to know and learn, then sure, I'll help them get started in whatever... But I'm not going to try and convince anyone that's perfectly happy using windows or Mac or anything else that they need to change to anything.

**Jerod Santo:** Especially because you become the de facto tech support, don't you?

**Carl George:** Yes.

**Jerod Santo:** I mean, once you've done that...

**Carl George:** Yes... I have gotten to the point in my life where family call me, asking Windows questions... They're like "You work with computers, right?" And I'm like "The last time I used Windows was Windows Vista. Sorry. Can't help you." \[laughter\]

**Jerod Santo:** The best Windows there was the best. That was the best Windows.

**Adam Stacoviak:** That's pretty accurate. One more thing on this note... I think the thing that bugs me is like when you use -- even when you build your own PC, you run into these issues with... You know, going back to the camera kind of thing. Is there software for it on the platform? Corsair - pretty popular brand; they have a really cool power supply for your PC, a really good liquid cooler for the CPU... And they both have -- I'm not sure what they call IQ. It's more of a system. IQ is this information system you can get from the PSU, like how much power is it using, what's the constant power draw... And the application is pretty much a Windows app. It's not for Mac, because you can't really use Mac unless you're doing, I guess, Hackintosh stuff, which is not something I do... So you're pretty much relegated to a Windows application to leverage IQ, which is diagnostics and information. So if you're building a system on Linux, the API for it is not published. And yeah, you can probably reverse engineer one and have fun with that... But by and large, if you're using Corsair as a power supply or a water cooler, you're not getting the IQ goodies in Linux, to my knowledge. So it's kind of a bummer. You're building a PC... You're probably building a Linux PC, because that's kind of, to some degree more popular these days, but yet you don't have access to APIs, or a CLI for this stuff, and it's just a shame.

**Carl George:** Yeah. You'll see sometimes third party projects that'll come up for things like that, where they'll say -- I don't know if there's an equivalent for the one you gave, the Corsair IQ. But for example, someone could say "Here, Corsair IQ is a Windows-only app. Here is a GTK app that is designed for GNOME, that does sort of the same thing, that works on Linux." But it'll be like just somebody's hobby project, that maybe it works today, maybe it breaks tomorrow, and it's just an as is thing.
Getting more manufacturers interested to make native applications... I mean, we've got the great example of Steam there, and that's been just a huge boon for -- Linux desktop is having... Whatever, I don't know what the percentage is, but say 50% to 80% of the Steam library just works on Linux now without any problems.

**Jerod Santo:** Right.

**Carl George:** There's still some games that don't, but people can game all day long with Steam on Linux. And as long as they stick to those games that are compatible, that's not a blocker for them anymore. It's a slow and steady drumbeat of getting manufacturers on board, getting more hardware manufacturers on board that will ship Linux pre-installed. We're getting better at that. Frameworks real popular these days, they don't ship Linux pre-installed, but they have devices where they'll advertise it as "Bring your own OS", which is kind of code for "Go install whichever distro you want on here." We've got Lenovo offering pre-installed Ubuntu and Fedora laptops now... So I think the more of those we get, the better this application problem will get long-term. But it's certainly been a long time coming, getting to the point where we're at now, and we're still not in a great place with it, so it's probably going to be a lot longer trek up this hill, getting it more popular.

**Adam Stacoviak:** \[44:09\] Yeah. In my case, I'm using IQ as more of a diagnostic thing. I'm not trying to view the window and check out the power draw. I'm trying to capture that in Prometheus, and just monitor across the server. So in this case, it's a power supply on a server, the GPU is on the server... The CPU is obviously the CPU of the server. And I want to look at those things, I want to understand how the CPU is performing, which cores are active, things like that; how cool it is... Those are things you can get from the actual CPU. But in terms of its cooling, there's things you can tell about like "What is the constant temperature of the water in the AIO?" And whether or not that pump is about to go away... There's things you can do just to ensure durability of your server, and that IQ system or the diagnostics in there is sort of stuck. And I'm thinking about not making it stuck, but I've got to make some software, and I don't want to do that. I'd rather them just do it, make it easy. But that's how it works...
**Carl George:** If you don't care about the graphical part, I imagine there's probably something on Linux that could reach into that data. Usually, those type of things are not -- it's not like special secret data where you have to have the one special proprietary app to access it. It's usually just normal, industry-standard stuff exposed via the hardware. I mean, servers do this anyways that don't have any graphical environments at all, so... There's usually a standard that you can plug into and find some kind of app. It might just be a matter of finding the right term to google for.

**Adam Stacoviak:** Maybe there is a standard.

**Carl George:** I think this space used to be known as monitoring. Now observability is the hot term. Kind of like a lot of sysadmins went from sysadmin to DevOps to SRE. Observability is now the new lingo. So maybe look into some of that observability and then the exact thing you're trying to monitor, like watercooling loop temperature. Maybe that one's too specific, and it might not be out there, but there's probably something you can find. Some kind of open hardware sensor that you'll be able to plug in.

**Adam Stacoviak:** There was an IQ kind of Linux -- I'm not even sure what to call it. Probably a package, if you want to call it that... But it was unmaintained. So it was written in C and unmaintained, and probably for good reason. I'm not knocking C, but whatever.

**Break**: \[46:21\]

**Adam Stacoviak:** Let's talk about Texas Linux Fest before I put my foot in my mouth on C... So we've got at the UT Campus -- is it this month, in like a couple of weeks, basically? 16 days...
**Carl George:** Yes. Very soon.

**Adam Stacoviak:** As of Friday, it's like 13 days. So if you're going to go to this, go to 2025.texaslinuxfest.org. I assume you're an organizer, because you reached out on LinkedIn and you said "Hey Adam, what do you think about Texas Linux Fest? You didn't come last year. Are you coming this year?" And I said, "Well, the best case I could do here is pod about it. Maybe I can come at least one day, maybe not two..." But let's talk about this awesome fest called Texas Linux Fest.

What is it?

**Carl George:** So it is an all volunteer-run community event. The backing organization's a nonprofit. We're actually under the same nonprofit umbrella as the Scale Conference out in California. We have some of the same organizers that help out with both. We use the same registration system... But it's a really fun event. I got going to it, met some good people there... And at one point I made a suggestion -- I don't even remember what the suggestion was about, but I made a suggestion about something about how the conference operated, and they said "That's a good idea. You should come and help us with that." And they hooked me in. And so kind of a -- that's the motto I'll tell people a lot of times when they give me ideas for the conferences, I'll tell them the same thing. Like, good ideas require volunteer time to implement it. Like, I'm not just taking all the good ideas from the good idea fair. You've got to come help us do this.

And I've looped in a few volunteers to help make things happen that way... Some people -- it's kind of like open source, right? Like, everyone's got an idea, but very few people are willing to do the work to make it happen. The person that told me that, it resonated with me, so I've been involved ever since then. I think the first year I got involved was maybe 2017, 2018.

**Adam Stacoviak:** It's a while.

**Carl George:** We took a bit of a hiatus for COVID. We had the 2019 event, the 2020 event we canceled outright, just because that was right when COVID was kicking off the pandemic... And then we were trying hard to bring it back in 2022, it didn't really come together, 2023 the same thing... And then last year, 2024 was our first year back after the long break. Like many conferences in the years post pandemic, the attendance was down a little bit... But we had a good number of people come out. It was about 300 people that year. We've had somewhere between 400 and 800 in the years before that, so we're hoping to get the attendance back up to pre-pandemic levels this year... And talking to other organizers with other events. I've heard good things, that conference attendance overall is trending up across community events, so that's a good sign. It's part of the reason I brought it up to you, Adam, to help talk about it on the show, let more people know about it.

**Adam Stacoviak:** Yeah. Happy to do so, for sure.

**Carl George:** Some people haven't ever heard about it, and they would be very interested... It seems like every year we have the event, someone will reach out a month afterwards and say "I had no idea this existed. If I had known about it, I would have come." And so we try to get the word out, but... We don't really have a marketing department, so it was all just kind of word of mouth stuff, and podcast interviews, and talking to other people at other events, just to try and get the word out and let people know.

**Jerod Santo:** Well, we're happy to help. Is this getting put on at the university?

**Carl George:** \[52:05\] It's not at the -- yeah, you mentioned the UT campus. It's not the main campus, it is an ancillary venue called the J. J. Pickle Research Campus.

**Jerod Santo:** Okay.

**Carl George:** It's called the Commons Conference Center at the J. J. Pickle Research Campus. The map is on the conference website that you already mentioned the link to. It's also pretty easy to find in Google Maps... Yeah, it's our first time in this venue.

**Jerod Santo:** I just noticed on the schedule that you have different venues, and one is the stadium. I was like, "Is that actually the football stadium, or...?" That'd be cool...

**Carl George:** No, no, no. Those are the names of the rooms inside that building.

**Jerod Santo:** Oh, the stadium room inside of the Pickle Center.

**Carl George:** Yes.

**Jerod Santo:** Okay.

**Carl George:** When I was filling that out -- I actually wrote in that part of the schedule, and I worried about that, about the name being a little weird...

**Jerod Santo:** I was like "Dang, they're going to have the setup in this..." I'd go to that.

**Carl George:** I was hoping people would look at the other names... Maybe venue is not the right term for that.

**Jerod Santo:** Well, I didn't know atrium, so I'm like "Okay, there could be an atrium, there could be a stadium... And then Bevo - I have no idea what Bevo is, so I'm going to skip that one."

**Carl George:** These are all just room names in the building, and it's all kind of UT-themed...

**Jerod Santo:** Okay, stricken from the record...
**Carl George:** \[laughs\] But no, that's a good point. I actually thought about that, that the venue column on the website was a little confusing, and I should change it to room instead of venue. That was something from the website thing that we have... But that should be a pretty easy tweak tweak to change.

**Jerod Santo:** So what kind of stuff is being discussed?

**Carl George:** It's a Linux conference, but it's not only Linux. We don't really have tracks for every room. We do kind of keep some of the same topics on themes, so they're not conflicting at the same time... So in the main room we'll have pretty much Linux talks the whole way, a lot of distribution stuff, and then one talk about Linux kernel upgrades. We have another room that I think the whole afternoon is all Kubernetes stuff, another one where the whole afternoon is AI stuff. That's real hot topic right now. I think we have one room where in the morning it's two observability talks back to back, so like monitoring type things...

So those are some of the leading ones. We have some stuff that's more developer-oriented. We have a workshop on the Friday of the event. It's a Friday, Saturday thing. One workshop about WebAssembly, another workshop about WSL, using the Windows Subsystem for Linux, which is a Linux sort of thing layer on Windows... So yeah, lots of topics, all around the -- at least tangentially related to Linux and/or open source in some way.

One interesting talk we had on the schedule this year was about Darwin, which is, as I understand it, kind of the underlying operating system for Mac. So I'm pretty interested in -- I don't know if I'll be able to actually watch any of the talks live, but we're hoping to get the talks recorded this year and be able to go back and watch that... Because I'm curious -- the title is the design and implementation of the Darwin operating system. And that's interesting to me. One, that someone would propose that at a Linux open source conference. And two, I want to know what he has to talk about it. I'm sure there'll be a lot of comparisons to Linux itself.

**Adam Stacoviak:** Who should come to this thing? It seems varied... Who would come?

**Carl George:** Anyone interested in Linux and open source. I mentioned that there's a lot of AI talks this year, so I know that's a hot topic people that want to learn more about that... We've got people working specifically in observability. Some of the topics are things that you work with in your day to day job; it's certainly applicable. Maybe you can get your employer to pay for the ticket. The tickets are pretty reasonable. The entry level tickets -- we actually just ended the early bird pricing, unfortunately. That's been open for a while. It was $50 tickets. But now the entry level ticket is $75, and you can upgrade to a hundred dollar ticket to get the swag pack that includes a T-shirt.

\[55:54\] But yeah, if it's related to your job at all, if any of the topics on the schedule sound good, I would definitely pitch it to your employer. And if your employer is interested in sponsoring the conference, since this is run by a nonprofit, we don't actually have big budgets for any of this stuff, so we are completely reliant on our sponsors helping make the conference happen.

This year, my ex employer, Rackspace, down in San Antonio, is our platinum sponsor, and they haven't -- they sponsored in years past and they haven't in a while, so it was nice to see them come back around and want to be involved in community events. We've also got a Red Hat, my current employer, and Percona and Elastic as our gold sponsors. And a few more silver ones... And we're looking for more sponsors. If anyone's interested in helping make the event happen this year and in future years, that'll definitely come in handy. But having lots of sponsors also helps us control that ticket price and not have to charge too much, so that attendees can come and it's affordable for everyone.

**Adam Stacoviak:** Yeah. I'm seeing speaker slots with "Sponsored by Red Hat" in those examples... How does that work? I'd imagine it's, obviously -- in the cases I looked at it was a Red Hat employee. But is there like a promotion kind of thing there? Or is it simply kind of covering that person's costs to be there, to give that talk, and it's not like an advertisement, it's more like "We enabled that person, while they may work here, to have the freedom to go to this conference and give this talk and share their love and knowledge with the community"? How does that work?

**Carl George:** So the latter, what you said is going to be more like for my case, where I'm an organizer, but I'm not doing one of these sponsored talks, so I don't have "Sponsored by Red Hat" on any of this stuff. But I will be helping coordinate some of the stuff at the actual Red Hat booth. The actual sponsors - there's different sponsor levels. That's all listed on the website. Many of the sponsor levels will include what we call a sponsored workshop, and then the sponsors get to split that up however they like.

I think the gold level comes with a half day workshop, which works out to about three hours. The platinum gets a full day workshop, that comes out to a total of six hours... The sponsor can use that time however they want to. Many years ago -- actually, the first time I spoke at Texas Linux Fest I was still a Rackspace employee, and the way that I spoke was in the sponsored workshop. They had a session that was basically part of their sponsorship, and they could fill it however they wanted to. And so among employees, they said "Who would like to present at the conference, about any topic?" And then I got to get on with that and do a little small talk there, and that was... I think that might've been my first public speaking thing.

**Adam Stacoviak:** That's cool.

**Carl George:** It's not always that. It's not always just employers paying for their employees to have a spot. Sometimes it might be sales engineers trying to talk about how their products are working with an upstream open source thing... We definitely try to have an upstream and community angle on it as much as possible. But because the sponsors are putting up money for this, we like to give them a little bit of the audience time as part of the benefit for the sponsors to come in.

So any of the talks that are part of a sponsored thing, we disclose that right there in the title. "sponsored by" whoever. So far, Red Hat's the only ones you see there, but that's only because Red Hat's the only one that has given me the titles for any of those sessions so far.

**Adam Stacoviak:** There you go.

**Carl George:** I'm waiting to get those back from the other sponsors, and then once they give those to me, I'll add them up on the website. You'll see Percona, and Rackspace, and Elastic on there in the schedule as well. All those workshops are on the Friday. The Saturday is -- there's no sponsored content. The Saturday is all talks from our call for papers, which ended last month, I believe, in August. And that's just talks that people have submitted. Nobody is paying for the spot, it's all just submit your ideas, and then we have a committee of reviewers. I participated in that also. We go through and read all of the submissions, rate them, and then we look through the top ranked ones and then try to come up with sort of tracks. Like I mentioned, we have like a full day of Linux distribution stuff and kernels, and then like a half a day, an afternoon of like AI, and then like an afternoon of observability stuff.

\[01:00:13.01\] So we'll look through all of those submissions, and the ones that we like we'll put together into themes that make sense for the conference, and then have all the community members speak in that. Some of those speakers do happen to have their employers paying their way to come speak. Not all of them. A lot of the speakers are local and don't have any travel at all. For me, I'm just driving up from San Antonio, so it's just like a short two-hour drive for me, basically. We have a lot of people local in Austin. Some people that come down from Dallas, or over from Houston...

**Jerod Santo:** A longer drive for Carl than it is for you, Adam.

**Adam Stacoviak:** Oh, yeah. Well, San Antonio is far away comparative to where I'm at. I'm 40-ish minutes from downtown... Ish, with traffic. You just never know about traffic, man. It can get you.

**Carl George:** We're a little further for you this year then, because last year we were at the Palmer Event Center, which is right by Terry Black's Barbecue, just South of downtown, just South of the Lady Bird Lake this year. This year that J.J. Pickle Research Campus is a little bit further North in Austin, but it's still in Austin, so it's not far.

**Adam Stacoviak:** I was thinking downtown UT. Yeah.

**Jerod Santo:** Is there still a barbecue nearby?

**Adam Stacoviak:** Always.

**Carl George:** Yeah. There's one I haven't tried yet called Interstellar that's out a little -- I think about 10 or 15 minutes Northwest from there.

**Adam Stacoviak:** That's probably good.

**Jerod Santo:** Sounds cool.

**Carl George:** I really want to try that one. The one or two times I've gone out there, the line was really long, which I don't terribly mind, but the group that I was with was like "Oh, I don't want to wait an hour or two." And I'm like "Oh, but it's like one of the top-ranked ones. I've got to try it." Adam, did you ever go out to a Sagin to try Burnt Bean?

**Adam Stacoviak:** No. That's Sagin's... I mean, you might as well just go in the middle of nowhere to go to Sagin, right? \[laughter\]

**Carl George:** That one's like an hour for me.

**Adam Stacoviak:** It's like a timewarp.

**Carl George:** They won number one on Texas Monthly this past rankings that they put out.

**Adam Stacoviak:** Really?

**Carl George:** Yeah.

**Adam Stacoviak:** Well, that's a prestigious honor right there. Number one.

**Carl George:** They're really good. One of my favorites.

**Adam Stacoviak:** Ooh. What's it called again?

**Carl George:** Burnt Bean.

**Adam Stacoviak:** Burnt Bean. Alright, I'm putting it on my list. On Adam's list. Adam's Texas Monthly List. There you go.

**Carl George:** Yeah, they were number four on the top 50 four years ago when they did the last list, and they went from number four to number one... Which I was kind of bummed about, because I was like "Okay, the food's going to be still be great. All that means is the line's going to be longer. More people know about it, because they want to have number one."

**Jerod Santo:** Oh, good for them, I guess. They get the business. Give us the Carl George list. Give us the top three Carl George barbecue in the - do you want to do San Antonio and Austin? Or do you want to do just Austin? Or do you want to do just San Antonio?

**Carl George:** They're all over...
**Jerod Santo:** Top three. The one that I like going to, that I ended up going to more often than any in Austin probably is Terry Black's. It's not the best barbecue in Austin, it's really good, but the best thing about them is that they are cooking 24/7. They're only open like during normal business hours, but they still have barbecue at seven, eight o'clock at night. Most of these other places, they start cooking the day before, and then they close when they sell out, which will be at noon, or one or two. So a lot of them you can't get barbecue for dinner.

**Jerod Santo:** That's early in the day to sell out, man... It's crazy.

**Carl George:** Yes. So that's one of the things I love about Terry Black's, is you can still reliably go get barbecue for dinner. And they're basically cooking 24/7 to accomplish that. There may be sometimes late in the evening where they run out of particular things, but it's not too bad.

Another one I really like is la Barbecue. They're really good. That's in Austin. There's another one... What is the name of it? They have a brisket taco that I really love. I'll think of the name of it in a minute. \[unintelligible 01:03:38.15\] They're outside of Austin. They're about halfway between Austin and Houston. And they were number one years ago on the list. They actually got featured on a -- if you go onto Netflix, there's a documentary about barbecue, and one of the episodes is all about Snow's barbecue. If you've ever seen it and forgot, it was the one where they had the little old lady that's the janitor at the high school is the pit master at the barbecue restaurant.

**Jerod Santo:** \[01:04:07.17\] Really? That's cool.

**Carl George:** It's a great story. Fantastic.

**Adam Stacoviak:** Oh my gosh, that does make sense, too. I mean -

**Jerod Santo:** You know it's good if you're going to buy a hat for it. It's gotta be good.

**Carl George:** They're only open one day a week too, so they definitely drive up their own demand.

**Jerod Santo:** Really? How big is the line?

**Carl George:** It is in a town called Lexington.

**Jerod Santo:** Very small. I think the population of the town is like 200, normally. And then on the weekends, the day they're open, it swells up to however many people are in line, which is well more than 200.

**Jerod Santo:** Which day of the week is it open? Saturday?

**Carl George:** Saturdays. Yes.

**Adam Stacoviak:** Gosh. Get there 5 AM kind of thing, camp out all night?

**Carl George:** Yes. Well, maybe not all night...

**Adam Stacoviak:** Is it Black Friday every Saturday?

**Carl George:** I think when I've gone out there it was like - yeah, five, five thirty when I went out there... And I would be one hundredth in line, or so.

**Jerod Santo:** We should do a barbecue crawl around Tajas someday, Adam. That'd be fun.

**Adam Stacoviak:** It would be fun. There's a lot of good barbecue. I mean, an endless supply of places to go. I mean, I could name my own list, which would not be exhaustive comparative, but...

**Jerod Santo:** Not as good as Carl's list. Is that what you're saying?

**Adam Stacoviak:** Well, I used to live in Tomball, Texas, as you know, Jerod. You should call it Tomball, not Tomball.

**Carl George:** I know what you're about to bring up...

**Adam Stacoviak:** There's a slight difference.

**Carl George:** Tajas...

**Adam Stacoviak:** Yeah, Tajas. But see, I knew Tajas before it was in Texas Monthly. And you can go at any given time, there was always barbecue, and there was no line. And then the moment they hit Texas Monthly, because they have chocolate and barbecue - it's a very unique place. They're chocolatiers, so it's a - what do they call it? Chocolary, or something like that? I don't know what they call it, but you can go there and get really good all sorts of chocolates. And you've got really good carrot -- I think my favorite side there is carrot soufflé. I've yet to find any place to carry carrot soufflé.

**Carl George:** I've never even heard of that before.

**Adam Stacoviak:** I know. Well, that's the reason to go there, because they have it. It's a signature thing, and it's really, really good.

**Carl George:** I'll check it out the next time. My sister doesn't live far from there, so when I go visit her, I'm like "Hey, you in the mood for barbecue? Let's go." Have you been to the Tajas Burger place? The same business, but just different building.

**Adam Stacoviak:** I was going to say, yeah, the Tajas burger joint... It's literally called Tajas Burger Joint, and Tajas is spelled T-A-J-A-S. That's solid, too.

**Carl George:** It's fantastic.

**Adam Stacoviak:** I mean, they have smoked burgers there, smoked brisket burgers there, they've got amazing smashed burgers there, which is something I personally have really worked hard in the last two years, maybe three years of my life to perfect, and I've finally got it down... So if ever you're in my neck of the woods and I have some good beef, I will make you a good smashed burger... But it would be Tajas Barbecue... And near me, right here in Dripping Springs, I would say Pig Pen, which is good for downtown. My other favorite, which is better - shh; don't tell them - is the Switch.

**Carl George:** Oh, the switch is good.

**Adam Stacoviak:** Yeah. I mean, they've done some real special -- they have a really good menu across the board, from turkey, to ribs, to brisket...

**Carl George:** I like the specialty stuff the Switch will come out with, like the Tomahawk steaks, and other stuff... Lamb ribs, other specialty items. The other one out near you, Adam, is -- it's not the best barbecue, but I love it, just because I like their sauce... Salt Lick.

**Adam Stacoviak:** Ah, dang...

**Carl George:** That was one of the early ones I was going to. Controversial statements... Some people are like "Oh, no, all these other ones are better."

**Adam Stacoviak:** It is controversial.

**Carl George:** But it's a great social hangout place, and I do like their barbecue sauce. Not many Texas places do a mustard-based sauce.

**Adam Stacoviak:** Well, I go for the barbecue and stay for the pecan pie, you know? And back when I drank beer, they would have a few good beers there, but I don't drink beer anymore. But the pecan pie is awesome. I think the cool thing about Salt Lick is that if you want to go to OG barbecue, it is the OG Salt Lick. And so this is like a property that was probably somebody's backyard at some point, turned barbecue joint. And that's the kind of site. It's a destination. It's a landmark. It's not just a place to go get barbecue, it's a place to go see barbecue.

\[01:08:04.16\] And in particular, if you get a chance to go there, what's cool about it is you get to walk by -- when you order, you get to walk by where they actually like roast, and smoke a lot of the things. And so you can see the years, decades, decades upon decades seasoning around their pit. It's just really, really insane. It's an open fire pit... They'll give you a tour of the place if you ask nice, and it's an experience, for sure.

**Carl George:** That's what I was going to use, experience. I like it. I haven't been out there in a couple of years, but I do want to go back. And you're right that it's the original one. They have another location up further North in Austin, that is -- it's good, but it's not the same. You're not getting the same environment.

**Adam Stacoviak:** Yeah. I mean, it's just not the same as the OG location. And in fact --

**Carl George:** Beautiful area, too.

**Adam Stacoviak:** ...when we became friends a year or so back, we had said "Hey, we live close to each other. Let's meet at Salt Licks."

And that never happened.

**Carl George:** We should.

**Adam Stacoviak:** I'm kind of sad about that.

**Carl George:** It's a much shorter drive for you. \[laughs\]

**Adam Stacoviak:** Well, you know, on your way to something called Texas Linux Fest...

**Jerod Santo:** Oh.

**Adam Stacoviak:** ...there you go.

**Carl George:** It pretty much is on my way.

**Adam Stacoviak:** It is. You'll go 150 to get here. I'm sure you'll probably go 150, 12, 290...

**Jerod Santo:** Miles per hour?

**Adam Stacoviak:** No, the road.

**Carl George:** Or both. Speed \[unintelligible 01:09:20.10\]

**Jerod Santo:** 150 on 150.

**Adam Stacoviak:** You could go 150 on -- well, I mean, maybe... If you wanted to, you could. You might die.

**Carl George:** Yeah. Anything to avoid I35.

**Adam Stacoviak:** Yeah... What I love most about where we live is the back roads. Unless you want to, you don't have to, really -- not if you're going downtown; you have to take some highways. But if I'm going between here and San Antonio, except for once I actually get into San Antonio, I don't have to drive a lot of highways to get there. It's a lot of really cool, fun, adventurous, beautiful back roads with just views; just beautiful views.

**Carl George:** Hill country.

**Adam Stacoviak:** Yeah, I love that. So Texas Linux Fest, second year back officially since the vid... Is there any particular talk that you're looking forward to? One thing I noted actually was that I didn't hear you say "home lab". And that kind of made me sad. It's kind of like all home lab in a way, but are there any particular home lab flavored conversations happening?

**Carl George:** Let me see... I know last year my friend Alex that works at Tailscale gave a talk, but he wasn't able to make it this year. I know Tailscale's real popular among homelabbers.

**Adam Stacoviak:** Mm-hm. For good reason.

**Carl George:** One of those NixOS fans from the JB network, my friend Wes Payne, he's given a talk "Mesh network sidecars for NixOS services." So if you're getting into NixOS for your home lab setup, that is something -- he mentions Tailscale in the mesh network clients in the talk description. So I'm sure he'll delve into that, and probably talk about ways that it can fit in home lab type stuff.

Let's see... There's an NGINX talk that may be applicable, depending on what you have set up. I don't know how often home labbers get into observability type stuff, and monitoring...

**Adam Stacoviak:** All the time, man.

**Carl George:** I'm sure some home lab setups are just like "Oh, whatever. If it goes down, my kids will tell me the Plex ain't working", or whatever. But other people get all into it and want to know real-time analytics and other things like that. So definitely the monitoring talks and observability talks will be applicable to this, to that.

**Adam Stacoviak:** Yeah, that's what I'm doing, more so of -- I want to do a little bit more, I would say metrics tracking, which is observability, in a way. I just want to see how it's performing. I guess it is observability, now that I think about it. I'm not trying to build dashboards and go crazy with it, I'm just trying to monitor what's happening there, and just kind of get feedback. More so kind of like the pilot feeling the rudder. Like, I just want to feel it. I want to feel how it feels. That's really what I'm trying to do.

**Carl George:** \[01:11:53.00\] We do have a talk about getting started with Ansible, so homelabbers that might want to improve the repeatability of their setup, that might be applicable for them. We do have a SteamOS talk on the schedule. That's one that I am really interested in, that I'll be bummed if I can't sneak away from organizing duties to go watch live. I was chatting with the presenter and he was asking details about the presentation setup. And a little spoiler - it's about SteamOS on the Lenovo Go S hardware, and he was trying to figure out if he'd be able to do his presentation about it from SteamOS on the Lenovo Go. And I was just like "That's a fantastic idea. I would love to help you get that working. Hopefully you can bring any adapters you might need presentation-wise, and I'll try to help you get it set up and going."

**Adam Stacoviak:** Yeah.

**Carl George:** There's a databases talk, there's a NoSQL talk... A good number of Kubernetes things, if you're getting into Kubernetes in your home lab... Yeah, lots of various things. Nothing that is exactly home lab-specific, but you know... Home lab's just the environment. It's all the other technology we're using in it anyways.

**Adam Stacoviak:** Yeah, sometimes it's like, "Well, I'm trying to use this in enterprise." And it's like, "Well, can we talk about it in a home lab?"

**Carl George:** We do have a CI pipeline workshop on Friday. That might be for home labbers that want to automate their deploys at home. That might come in handy.

**Adam Stacoviak:** Yeah, absolutely. I've been running -- is it pronounced Git Tea, or is it Gitea? I don't know.

**Carl George:** I've heard both.

**Adam Stacoviak:** It's G-I-T-E-A, and I'm just not sure, is it Git Tea, or is it Gitea? Just not sure.

**Carl George:** I've never heard an official ruling on that.

**Adam Stacoviak:** Okay. Me neither.

**Carl George:** I know sometimes people ask me about Cent OS versus CentOS, and I'm like "Sure, choose whichever you want. There's no official pronunciation."

**Adam Stacoviak:** Very cool. Well, glad to have you on the pod again. A friend, of course... 2025.linuxdest.org. Tickets are now $75. If you want some swag, it's $100. I might know somebody. Can you give out a coupon? Is it too late for that? Or you just can't do that.

**Carl George:** Ooh, a coupon. That would have been a good idea like yesterday, to get ready.

**Adam Stacoviak:** Maybe a short-lived one, like 10. The first 10 get a bonus, kind of thing. I don't know, $10 off, or something. Anything.

**Carl George:** We had a coupon code for people that submitted to the CFP, to basically give them the $50 ticket even late; like basically let them get the early bird pricing continuously if they submitted a talk and didn't get accepted. So I would definitely encourage people to do that next year. Submit a talk, even if it's your first talk. This is, I would say, a really good event for first-time speakers. The organizers -- we've got several first-time speakers on the schedule. We try to be supportive, help people get started.

A lot of regular conference presenters help organize, so we're familiar with all the little things that you would need, things we wish someone told us when we were getting started. So if you've never presented at a conference before, the community events like this, whether you're in Austin, or can travel to Austin, or you have another community event in your neck of the woods, like LinuxFest Northwest, or Southeast LinuxFest, those other conferences - if you've got something near you that advertises itself as a smaller community event, submit a talk, see if you can get it accepted.

\[01:15:13.11\] The hardest part a lot of times isn't the presentation itself. That's one that I tell people -- they're like "Oh, do you get nervous when you present?" I'm like "Yeah, every time, still." But the thing is you just figure out how to just move forward and present in spite of being nervous, and it's just part of the -- part of the thing is "Okay, I've got my talk jitters now." The harder part is coming up with a good idea that will look good in that call for papers, where the reviewers look at it and say "Yeah, our audience does want to hear about SteamOS on the Lenovo Go S", or "Smart cities built with Kubernetes", or whatever it is topic-wise that you have.

So coming up with an interesting pitch, send it out there, and then a lot of conferences will -- if they accept your talk as a speaker, you can pretty much guarantee you're getting a free pass for that, as a speaker; you're part of the content. A lot of conferences, including us, will also give free passes to speaker alternates, and that is where -- like, we accept so many talks right off the bat, and then a certain percentage of those will drop off. Just scheduling conflicts, or they don't show up at all, or whatever. Hopefully, it's a small percentage, it's not too bad... But we have to plan for it. So right off the bat, the next, whatever, 20 or 30 talks that we would have accepted, we put on the wait list and tell them, "Something may open up and we'll fit you in." And we've already pulled up, I think, four or five talks from the wait list and put them on... But all of the speakers that we put on the wait list, we gave them free passes as well, mainly to encourage them to be there present in case we have a day of cancellation, I want to be able to tap one of them on the shoulder and say "You've got that talk ready, right? And you're already here, because you got a free ticket..." But anyone that we rejected in the CFP, we gave the $50 price ticket, the early word pricing, permanently, so they can still get in.

So I definitely encourage people to do that. I wish I'd have had the forethought to get a special coupon code just for your listeners... If I did get that later on, is there a good way to push that out to people, maybe in the show notes?

**Adam Stacoviak:** We can easily sprinkle it in there. It's not a problem.

**Jerod Santo:** Yeah. Stay tuned, listener, to the outro, where you'll hear that coupon code if we get one.

**Carl George:** I will harass some people today about giving me a coupon code for the Changelog listeners.

**Jerod Santo:** Sweet.

**Carl George:** Maybe a code like Changelog might work, possibly. We'll see.

**Adam Stacoviak:** Maybe.

**Jerod Santo:** That sounds pretty complicated. Can we make it easier than that? Easier to remember? Cool.

**Carl George:** We'll see.

**Jerod Santo:** Yeah. We'll look forward to that. Stay tuned to the outro.

**Adam Stacoviak:** Right on. Bye, Carl. Thank you.

**Jerod Santo:** Awesome. Thanks, Carl.

**Carl George:** Well, thanks for having me on, guys.

**Adam Stacoviak:** Bye, friends.
