**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Good. How are you?

**Justin Garrison:** I hear it's humid right now in Seattle?

**Autumn Nash:** Um, you know we're not used to sun. I mean, I don't know if it's humid versus other places, but it's 78 today...

**Justin Garrison:** But you have six weeks of sunlight, right? You need to take advantage.

**Autumn Nash:** I'm a vampire. Oh, my God. Outside there's sun.

**Justin Garrison:** I guess if you want clouds most of the year, when it comes out, you have to kind of acclimate back into it.

**Autumn Nash:** Yeah.

**Justin Garrison:** For today's show we have Gareth Greenaway, who is a core maintainer for the Salt program, a configuration management program, open source, written in Python, and so we talk to him all about -- we kind of went all over the place, which was fun. It started off with "How do you get started?" and then into open source, and how corporations do open source, and foundations, and all sorts of stuff.

**Autumn Nash:** Gareth is one of the nicest people... For all the cool things that he's done, he's just really humble, you know? He doesn't talk down to people...

**Justin Garrison:** Well, except for the fact that he's 6'7".

**Autumn Nash:** Okay, he talks down in a literal way, but not a smart people way... When I was standing next to him, I was going "You're so very tall..." He's a very kind, tall person.

**Justin Garrison:** Exactly. When I first met him, he was very welcoming, just being able to talk to him, and just sit down and talk about anything, really. It's "Oh, is technology cool?" "Yeah, maybe. But what else are you doing?" He's very approachable and fun. Yeah.

**Autumn Nash:** Yes. He's one of those people who's a legit dope human, and not just for his technical contributions; the actual, just being a good human, that happens to be smart. And I think people him are what make the Kubernetes system/Linux area a really cool community.

**Justin Garrison:** Yeah, for sure. And having him involved in conferences, and just being available in places that I've seen him... He lives in SoCal, so I've seen him around at meetups and whatnot over the years, because we've both been in the area for so long. It's always nice to see "Oh, if Gareth is there, then this is probably a pretty good community." Because I also know that he --

**Autumn Nash:** Dude, that is so true. There's some people that you know that are little beacons of light in tech... And if they're involved, you'll probably want to be there in that room, or at that conference. Even when I'm looking for conferences to speak at, or to book, or whatever, when there's certain people there... Half the time I'm "I'm just gonna go to Render, and I don't even do JavaScript, but I know who's gonna show up."

**Justin Garrison:** I had so much FOMO from Render... I wish I was there.

**Autumn Nash:** The Render FOMO was real. It was so real.

**Justin Garrison:** Yeah. I do zero -- well, I do some JavaScript, but I do not do it with a smile on my face. But I wanted to be a part of that community, and be in Atlanta. It looked amazing. So let's go ahead and jump into the interview with Gareth, and then we will talk to everyone after.

**Break:** \[07:53\]

**Justin Garrison:** Alright, welcome to the show, Gareth Greenaway. Thank you so much for joining us.

**Gareth Greenaway:** Yeah, thanks for having me. Glad to be here.

**Autumn Nash:** It's a Scale reunion!

**Justin Garrison:** Gareth, you and I have known each other for a little while now, because -- just through the Scale conference, right? We met -- I don't know how long ago.

**Gareth Greenaway:** Yeah, it's been a while. I think your first Scale was Scale...

**Justin Garrison:** 9?

**Gareth Greenaway:** 9. Okay.

**Justin Garrison:** 8 or 9, somewhere there.

**Gareth Greenaway:** I usually think of them in terms of where the Scale events happened, what venue it was, and that's kind of how I gauge "Okay, that's how long ago it was, that's how long I've known this person."

**Justin Garrison:** I was at the Westin, so I don't remember which version that was, but it was a while ago.

**Gareth Greenaway:** Yeah, that was probably 9. It sounds about right.

**Justin Garrison:** Yeah, it was somewhere in there. And I don't that the Scale conferences don't line up with yours... That still always throws me off, that 9 wasn't in 2009... Because I always think of it as somewhere around that time. But it's one or two years off.

**Gareth Greenaway:** Yeah. Originally, it was supposed to be -- so the very first Scale was in November, I want to say 2021. It was at the USC Davidson Conference Center.

**Justin Garrison:** 2001.

**Gareth Greenaway:** I believe it was 2001, yeah. But for whatever reason, we decided to shift to earlier in the year for the next one. So we basically had a year gap between the next one. So the next one I don't believe happened until possibly 2023... But it was early 2023.

**Justin Garrison:** But you're saying extra 20s in there, because that was last year, 2023.

**Gareth Greenaway:** Oh, sorry. 2003. Yeah.

**Justin Garrison:** So let's start with what software are you responsible for, or have you been responsible for?

**Gareth Greenaway:** So up until January of this year I was a member of the Salt core team. So previously -- a lot of people will probably notice SaltStack; that was the original name of the project and the company that was kind of behind the project. So I was working for SaltStack the company, and then we were acquired by VMware. So I was continuing to kind of work on and maintain the Salt project. And then Broadcom decided to by VMware, and let go a majority of the team that I was on, including myself. So I unfortunately am no longer one of the core maintainers of the Salt project as of January.

**Justin Garrison:** How did you get involved? What started you going down -- why Salt? What were you doing?

**Gareth Greenaway:** I was working for -- I was working as a DevOps engineer at a small company, and we were using Puppet for a lot of our automation and our deployments and whatnot... And a friend of mine had mentioned this new project that he was involved with, or had kind of started using, called Salt. And I kind of looked at it, it was really early days, and they had three to four months into actually the actual start of the project. And it was really -- it didn't work, for lack of a better word. It just didn't work. It was really early.

So then fast-forward a few months, maybe six months later, I was actually one of the rotating co-hosts for a podcast called Floss Weekly. And we had two guests kind of back to back, that I was the co-host for. One of them was the founder, the guy that started Ansible. And so we did the interview, learned about Ansible, asked some fun questions... And then kind of -- I started playing around with Ansible a little bit, I was "Yeah, this is kind of interesting." A week or two later we interviewed the founder, the guy that started at Salt. And afterwards I kind of -- I started playing around with it again... And again I was familiar with it, so I had looked at it early on, but it wasn't quite there. And so this time around I kind of started exploring it more, and it had made significant strides since I last looked at it. I just started kind of playing around with it.

\[11:57\] One of the things I noticed early on was that a particular -- I was running through the tutorial of how to use it, and one of the things that it walked you through initially was setting up networking, I think it was. And I was "Okay, let's walk through this." And it wasn't working, for whatever reason... And I realized it was because no one had written the support for the operating system that I was using, that I was trying to test it with. But it wasn't obvious, it wasn't looking back saying "Oh, you're using Ubuntu. It's not going to work."

So once I discovered that, I was "Okay, what would it take to kind of add support for Ubuntu - or Debian it was - into Salt, in order to be able to do this?" So it turned out it was fairly easy. This was actually my first contribution to the project, and I believe when I left it still held the record for the most lint errors of any Python contribution. Lint was checking formatting, checking if you have the right number of spaces, tabs, or whatever... And my lint error count was something -- I think it was a 200-line contribution, and it had something 500 lint errors... \[laughter\]

**Justin Garrison:** That's impressive, actually.

**Autumn Nash:** Can you tell us more about what Salt is? Just a brief summary, in case somebody hasn't used it before?

**Gareth Greenaway:** Yeah, it's a good question. So Salt is often categorized -- like, I mentioned Ansible... It's put in the same categories as tools Ansible, and Chef, and Puppet... Or CFEngine, if you go way back. So those tools are often referred to as configuration management systems. So if you want to perform the same tasks across many different systems, so you have tens of hundreds or thousands of systems, rather than going to each individual one and doing the same task over and over again manually, a configuration management system allows you to define your rules, define your configuration once, and then apply it across the board to all those systems fairly easily.

So Salt is a configuration management system, but it's also a remote execution system. So in addition to the configuration management, you can also run commands outside of configuration management. Salt uses YAML as its default - states, they're called. With Puppet it's manifests, and Chef it's recipes. Salt's are states. And the states are written in YAML.

**Justin Garrison:** And Ansible is YOLOs, right?

**Gareth Greenaway:** Ansible is YOLOs, yeah.

**Autumn Nash:** Is it really called YOLOs?

**Justin Garrison:** It should be... It feels it, everytime you --

**Autumn Nash:** See? One-liners. This proves that Justin --

**Gareth Greenaway:** Ansible's is playbooks.

**Justin Garrison:** Playbooks, that's what it's called. That's right.

**Gareth Greenaway:** Yeah. So beyond that configuration management, it's got the remote execution portion of it, which allows you to just run -- say you want to run an RM command, remove a particular file off 100 different servers. Rather than Go and "Okay, I wanted to find a YAML thing that runs this command", you can just run the commands across all of the systems. So think of it -- back in the day if we wanted to do that, you'd write a for loop and a Bash script.

**Justin Garrison:** SSH and a for loop, baby. That's it.

**Gareth Greenaway:** SSH and a for loop, exactly.

**Autumn Nash:** End up in Bash hell forever...

**Gareth Greenaway:** Yes.

**Justin Garrison:** I remember my exposure to it back in the day. I was looking at Puppet at my first sysadmin job, and I got Puppet-trained, and everything. I was deploying, and I was "I need to deploy this faster." And then I went with Ansible, because I'm "Oh, I can SSH into all these boxes and install Puppet." And so I had an Ansible playbook, an Ansible YOLO, as they're called now, that would deploy Puppet for me. But then Puppet didn't have a way to do those executions. They had MCollective, which was a bolt-on; it was a config management thing that would then do this message bus sidecar thing that's "Oh, you could also do this sother thing." But Salt was the other way. Salt was a remote execution, really fast remote execution, highly scalable remote execution environment, but also could do configuration management stuff.

\[16:01\] And Ansible felt somewhere in the middle, where it was like "Oh, SSH is there. It's just kinda a convenience factor", that it was mainly remote execution over SSH, and you could shove these playbooks in. But it was super-slow. And once you'd get over a few hundred servers, you're kind of "I'm not waiting for SSH for this." All that back and forth... And Salt ZeroMQ - I don't know if it's ZeroMQ, but it was at the time - message bus was just so fast.

At multiple jobs, I ended up doing -- I think I had Ansible deploy Puppet, and then Puppet deploy Salt, so I could do remote execution... Because EmCollective was terrible. And even at another job, we had Puppet in place, and we actually had Salt trigger a local-only -- what do they call it, the client-side only apply, because Puppet wouldn't scale on the backend, because all the manifests were compiled on the servers, and to scale those servers was really annoying. So I love that Salt did that on the clients already. So I was a big fan. And I also liked writing Python more than Ruby. Were you doing development in Python beforehand, before you started getting involved with Salt? Or was that you're learning as you go?

**Gareth Greenaway:** I had done a few little side projects using Python... Mostly just if I needed to to write some scripts, or write something like a simple tool, and kind of gone beyond the capabilities of Bash, I would turn to Python. But contributing to Salt was really my first kind of exposure to really writing large Python projects.

**Justin Garrison:** Yeah. There's a big difference once you're like "Oh, I have this script that's a few hundred lines" and then you're like "Oh, no, I'm already libraries that get imported and do all this other stuff and compile together."

**Gareth Greenaway:** Yeah. I mean, it's especially different too when you're writing stuff that you are the only consumer, versus you're writing stuff that hundreds and thousands of people are using and relying on. There was a moment - this was after I joined the company, and we used to do a yearly conference, hilariously called SaltConf, obviously... And I was sitting with one of my co-workers, I think during the keynote one morning... These big companies were coming and talking about their reliance on the software that we were writing. And I just turned to her and I said "This is a Fortune 500 company that's using the software that we're running." I said "That is awesome, and at the same time, it's terrifying."

**Autumn Nash:** It's a lot of pressure.

**Gareth Greenaway:** Yeah.

**Justin Garrison:** Now, joining the company... Because pretty much every config management product started as like "I could do this thing, and we're going to open source it, and it's just going to be fun." And then people are like "I need to pay for support, because that my production is running on this." And so all of them that I know of - Chef, Puppet, Salt, Ansible - all started as independent companies based around a project, and then all of them got bought by another big company, who for whatever reasons it's not making enough money, didn't continue it, whatever. All of them kind of floundered, in my opinion, in whatever parent company they had. Why did you decide to join a company based around an open source project?

**Gareth Greenaway:** I mean, before I joined, that really wasn't happening as much as it has recently. It's funny when you were describing kind of the progression of the various tools... I was thinking of the history a little different. The very first one I remember - I kind of mentioned it early on, it was CFEngine. And I remember seeing and reading about the reason that Puppet came about was because the person that started Puppet was trying to get contributions into CFEngine, and they weren't getting into it. So he was just like "Screw you guys. I'm gonna go do my own thing." And then years later, the person that started Chef - it was a similar thing. He wanted some changes put into Puppet for him some of the work he was doing... And got similar reaction, like "No, no, that's not the direction we want to go with."

**Justin Garrison:** \[20:05\] Well, it's the same way with Ansible.

**Gareth Greenaway:** Exactly, yes.

**Justin Garrison:** Luke worked at Puppet, and I think Michael started Ansible. He was working at Puppet, and Luke was like "Oh, this is an SSH in a for loop." And he's like "Yes, it is. I'll show it to you." And Ansible was born.

**Gareth Greenaway:** Yeah. And the same thing happened with Salt as well. Tom Hatch, the person that created Salt originally, he was originally contributing to Puppet as well. And it was like "Oh, this isn't doing what I want it to do. I want a remote execution system", so he went off and wrote one.

Back to your original question about the companies, the reason I joined was like "Hey, I have this opportunity to work on open source software, and contribute to a project that I use and love." And I wasn't even thinking of "Okay, at some point this company might get acquired by another company, that would basically kind of shelve the project. Because most companies that, if it was happening -- a good example is when Red Hat bought Ansible; they didn't simply shelve the project. It was just like "Okay, this is great. We're going to keep using it, we're going to bake it into a lot of our other software."

And even when originally no one bought Puppet, if I remember right, Puppet went public, so everyone celebrated, because it's like "Oh, the company went public. We made millions." And then later, someone bought it and was just kind of like "Okay, we're gonna do some nefarious things with this project, that are not so open sourcy." So yeah, I mean, I didn't even think about that.

**Autumn Nash:** Usually, acquisitions pay off for small companies... But now we're kind of in this weird -- how do you think this affects open source going forward though, and how we get people to contribute and join these companies? Because about 70% of infrastructure is open source, and companies and teams need these things to make their jobs easier. But how do we get people to contribute and join these companies, and make that risk if this is the possibility of their future? And how do we get companies, and how do us as engineers and teams trust open source when we don't know if they're going to fire half of the team that we depend on? Because when you bake in dependencies to a large architecture, all of a sudden you are now married to that, you know? So if you are like "This product is awesome, and I love using it. It's gonna make my life so much easier", and then all of a sudden somebody cans it in two years, and it's still running in your production, and now you have to figure out what you do with it... How does this affect software going forward?

**Gareth Greenaway:** One f the nice things that's kind of baked into the idea of -- once a project is open source, it's always open source, as long as there's people there to maintain it, to keep it going. So even if a company no longer -- if they try and make a project no longer open source, the community itself can fork that project and run with it.

I mean, we've seen an example of that with TerraForm. HashiCorp tried to change their license, or did change their license, and then the community was like "We don't agree with that. We're going to fork and make OpenTofu." I mean, where it gets complicated is when the lawyers at HashiCorp then got involved and said "You're stealing our code", simply because it was similar enough that they thought they had taken the code...

**Autumn Nash:** ...which is gonna get complicated, because there's only so many ways you can do things.

**Gareth Greenaway:** Exactly. Yeah.

**Justin Garrison:** I mean, the rebuttal to that was fire. The "No, this code was open source before you changed the license. You can't re-change this license and then come sue us."

**Gareth Greenaway:** Yeah, exactly.

**Autumn Nash:** \[23:45\] Yeah, that was open source too right there. I got coffee, I sat \[unintelligible 00:23:47.08\] Well, because it's gonna set a precedent, right? From now on, every time somebody goes and licenses something that was open source... These things didn't happen before, and all of a sudden, the more this happens, this is going to become the playbook of either "How do you fight back? How do you keep something open source \[unintelligible 00:24:04.24\] forked?" So it's almost like being -- we're watching the new revolution of open source and how it's going to survive in this new environment.

**Gareth Greenaway:** I mean, one of the things that I've thought about since being let go from VMWare, and watching kind of the progression of what's happening with the project that I used to work on, is whether or not corporations, whether or not companies themselves should be the sole owner of a project. I mean, Justin mentioned all of the kind of configuration, all the tools in the configuration management space kind of formed companies around them, and only a couple of them still exists today, because the companies eventually got bought out, and then the companies that bought them out shelved them. So I'm starting to wonder, I've started to think whether or not the company itself should be the sole owner of a project. I'm not saying it necessarily needs to be a foundation, because foundations I think have had their own sort of problems... Not naming any names specifically.

**Justin Garrison:** But I think that's a big thing you're putting out here, especially, like both the pieces that you're talking about here are like -- we could talk about Broadcom; with the open source Salt project it's like "Hey, if this gets shelved or put on maintenance mode, or doesn't get --", like, many people can survive on it for a very, very long time. And that's fine. And if they need to, they can fork it, and they can start from whatever the last open source thing is. The other side of that is VMware. The actual hypervisor. The closed source thing.

**Autumn Nash:** I was gonna say, that's like the littlest part of their problem. There's so many different problems there...

**Justin Garrison:** Right. And that's the other -- the benefit of having something open source of like "Hey, I can still see this code, and I can fork it", versus "I have no access to this thing." Instead of being locked in, you're locked out. You're like "I can't do anything." And that's how compilers used to work. That's how a lot of stuff used work. It was all private, it was not open source... And we moved into this "Things should be open source at this layer", and we kind of ignored some of those pieces, like VMware, and in my opinion, current cloud providers. There's nothing open source about GCP.

**Autumn Nash:** Yeah, but it's wild, though... It's wild, because you can see the way that new startups are starting to build it. They're building things that are easier to lift and shift. That was a complete -- Google Next was full of talks and different startups that were making it, for one, being able to monitor multicloud, and to be able to do the same, I guess, system work in multiple clouds at the same time, and to be able to monitor it properly was the bulk of the startups.... Unless you're talking about AI. But interesting startups - that was the bulk of it, right?

**Justin Garrison:** Well, I mean, GCP gets some benefit about telling people multicloud is easy, right?

**Autumn Nash:** No, no, but I mean --

**Justin Garrison:** As the smallest major cloud provider, they want you to come move to them.

**Autumn Nash:** ...but people. Like, people that are a bit building these startups - that is the new solution that they are trying to... You know what I mean? And I'm not saying GCP specifically, but it seems like that is the new subject that people are trying to account for, because they're not sure what to do when it comes to cloud and on-prem and what they want to go back and forth with, or even just what they're using. So now they're kind of trying to find a way to build their \[unintelligible 00:27:19.28\]

**Justin Garrison:** Well, and there's new layers that have exposed -- containers was a big change; with configuration management, with infrastructure, as like "Oh, I have this portable artifact that can run in more places", and Kubernetes being the new VMware, to some extent, of like "Hey, this is portable across these cloud environments." I mean, to a large degree -- OpenStack was probably just a little too early. It was just like "Hey, this might come around again." But it didn't work for a lot of reasons.

\[27:53\] But going back to, Gareth, what you were saying about foundations versus companies, one of the things that I think that we are beyond the point of independent projects becoming large is because of the legal problems as well. Foundations are there to also help protect against the legal aspects of like "Oh, someone's going to sue me." If I start a project and someone sues me, forget it. I don't have any funds or any time to do this, to defend myself. I'll just shut it down, or say "Okay, yeah, you're right. Never mind, I don't care."

**Autumn Nash:** One thing that seems to be working really well is when multiple big companies join foundations to contribute.

**Justin Garrison:** Well, that's the only way they can join a project, right?

**Autumn Nash:** But I'm saying, it seems like they're more successful when there's multiple big voices in the room, you know?

**Justin Garrison:** Yes. And they have to have a third party to say the same voice. The reason CNCF exists is because Google and Red Hat wanted to work on Kubernetes together. It's like, they're never gonna get their lawyers on the same page, to say "Oh, we're gonna do this together. Oh, let's just actually make a foundation." CNCF was created, and then we can get more companies to join. And the CNCF owns that legal responsibility, and trademarks, and all that other stuff.

**Autumn Nash:** But it seems like the way that we can contribute to get open source funded, and contribute to get people to work on it full-time, but also it keeps it where one company can't come and eat the entire thing. There's more of a community, or board, or maintainers have to be able to all agree on the features, whether that works well, or, you know, politically...

**Justin Garrison:** And there's problems with all those models, right?

**Autumn Nash:** But it seems like it's the one that keeps, I don't know, power equally distributed more... Sort of.

**Justin Garrison:** I just watched the Node.js documentary on YouTube. I know almost nothing about Node.js. I knew none of the drama, none of this stuff. And it was really about Joyent the company owned Node.js as the trademark, as the project, and they were not doing what they should have been doing to maintain that... And a lot of people just forked it. And then Joyent's like "Hold on, wait, we want to actually still own this." And they ended up in the end having a foundation, and putting the trademark and everything else in this foundation. It's like, hey, it's a third party... But it all came around open governance. Gareth, where do you think that fits in as this project's/company's sort of balance? Why might that be important over just an open source license for code?

**Gareth Greenaway:** Yeah, I mean, one of the things I was thinking about when you and Autumn were just talking about some of the things around foundations... I mean, Justin, you mentioned the CN CF, and kind of the Google and Red Hat wanted to work together on Kubernetes... And without kind of a third party there, they wouldn't have been able to do that. But one of the things I was thinking about in terms of governance, I think one of the things that's most important about it is ensuring that everyone is on a level playing field.

Using Google and Red Hat, for example, if they're within the same foundation - they're two massive companies. And if you have a third company, that's not as massive, they should also have an equal say in the direction of that project. It shouldn't be simply an opportunity for Google and Red Hat, or IBM, or whoever else is out there, to simply say "Okay, we're the 800-pound gorilla now. We're going to have our say in this." It should be an equal footing, allowing everyone to kind of ensure the benefit of the project, not simply the benefit of the project for the 800-pound gorilla.

**Justin Garrison:** I don't know enough about some of the foundations to know how that's actually played out. I know with CNCF, even with Kubernetes early days -- it's 10 years old this year, and we're still ripping out stuff that's GCP-specific. There's still a lot of backend of Kubernetes that only works in Google, because Google had the infrastructure to run it, and they're like "Oh, we're just gonna run these tests on our infrastructure, because we have employees dedicated to it." And if Google had said they weren't interested anymore, I don't know what would happen to all that infrastructure, and all those tests. It still costs -- it's part of the SIG infra. It's millions of dollars a year of hosted resources that have to run tests, and validate things for something, like you said, Gareth, is code that lots and lots of companies depend on. And you can't just throw that out there and say "Oh, well, it's a Python with some linting errors. I don't care." It's like, no, no, you have to validate this stuff if you want to gain that trust.

**Gareth Greenaway:** \[32:27\] Right. That's one of the interesting things that I've noticed over the course of my interest, my involvement in the open source community at large, is how it shifted from -- I mean, one example that I often go to is Apache. One of the most probably popular, most prevalent web servers in the world at this point... And just thinking, like, it was -- I think it was a long time before the people that actually worked on it were paid to work on it. It was very much a hobbyist project. And in order -- like, if you wanted to go and download and install Apache, you would go to a website or an FTP site somewhere, and you would go and download the package, unpack it, you'd do all your stuff... Now we have projects - not necessarily Apache, but I'm sure they fit into this realm as well... We have projects, as you said, that you have infrastructure bills that are millions of dollars. When we were maintaining Salt, when I was still part of the group maintaining Salt, we would have AWS bills that were in the tens of thousands of dollars every month. Sometimes -- I think the max we hit was probably something like pushing $40,000 just for running tests.

**Justin Garrison:** And that's just overhead.

**Gareth Greenaway:** Just our tests. Yes, exactly. And that's not even hosting costs, that's on even like salaries...

**Justin Garrison:** Yeah. You're not making money from that. That's just the cost of doing business.

**Gareth Greenaway:** Exactly.

**Justin Garrison:** As I was watching the Node.js documentary, I was thinking -- if any listeners know, I want to talk to people that run a large-ish repo, apt -- like, what's the backend of... I want to talk to them like "What are you running your web servers on?" And some people from npm, right? Like, what's the backend of that? I love hearing from that side. Because not only is that interesting just as like a large web scaling problem, but also from a getting started in open source, when people are like "Hey, how do I get started? I don't have job experience." I'm like "Go find the open source project that hosts a repo somewhere that has a service." Because not a lot of open source projects have services, but some definitely do. Kubernetes, a lot of these package managers, they're all out there, and they all run a web server, or web servers with caching, and all this stuff, and you have to learn that. And that is absolutely on the job training, but it's open source, and you get the money for free. If you want to join SIG infrastructure for Kubernetes, you can come join, and you get access -- I mean, you have to gain some trust, but it's millions of dollars of infrastructure spend. I was like "That is on the job, hands-on experience, that actually has financial responsibility." Even if you're not paid for it, you can get experience in those areas, which I think is really fascinating.

**Gareth Greenaway:** That's one thing that is -- for longest time, if you wanted... Like, a good example, a good way to get experience, a good way to get a bullet point on your resume was contributing to an open source project. But most of those contributions were code. It was just like, your only avenue into contributing to an open source project was code. And so it's good to see other ways that people -- who aren't necessarily either prolific, aren't good at writing code, or not interested in writing code, to contribute to those projects; either through infrastructure, or through documentation, or through testing... Because people have other interests, and it's good to see the projects kind of adopting ways for those people to contribute as well.

**Justin Garrison:** I've talked to so many people over the years about trying to get into tech, and they're like "I need to have an open source project to show off I can code." I'm like "No, you don't." Go find a popular-ish project and go contribute to it.

**Autumn Nash:** \[36:02\] But guys, do you think that's still a thing, though? Because people who are impressive developers are having a hard time getting jobs right now.

**Justin Garrison:** Oh, it's not a for sure thing at all.

**Autumn Nash:** Well, not a for sure thing, but is it still a thing? Nothing's for sure. But you know what I mean? And also, it's hard to get into open source.

**Justin Garrison:** It takes time, for sure.

**Autumn Nash:** Open source - not even time, but people... Like, it's hard to get people to take you seriously and to be able to find an environment where you can learn, where people are willing to let you make mistakes and to teach you, so you can get in there. You can't just magically start contributing to crazy infrastructure.

**Justin Garrison:** I mean, if I wanted to do woodworking, what are my options to go learn woodworking? If YouTube didn't exist, I would just go to trial and error in my garage, cutting some wood, and like "Ah, that didn't work." And I'd learn pretty much all the wrong ways to do it, and we rehash a lot of stuff. What I usually recommend for people getting into an open source project is like go do one contribution to the docs. Because they all love doc contributions, and you're going to learn if the community is welcoming, if there's someone that can help you, and how much resources they have available to help you get started. Like, "Hey, I want to make this change. Where the heck is that in the codebase?" You have to go find it, you have to learn how to do git, all this stuff... You might have to do code signing... And all that stuff is a side of like "Oh, I just need to make a one-line change to a documentation." And then go contribute, and then figure out if you want to stick around. Figure out if the community is welcoming, if someone's helping you learn, if you're growing, if you still want to do it... And I've done, I don't know how many projects, just individual documentation updates throughout my life of like "Oh, I don't want to be in this community", because I didn't have a good experience with that. And that's fine.

**Autumn Nash:** Do you think -- the way things are going with open source right now, would you do anything differently about your start in open source, and the amount of contributions? I'd also love to know how you got into Scale, and how you got involved... But you've contributed so much of your life to open source. And the way it's going, would you do the same things again? And what is your outlook on where open source is going?

**Gareth Greenaway:** Yeah, I think I probably would. I can't think of anything as far as my contributions or my involvement that I would change... One thing I wanted to say, kind of to your point, and one of the things that Justin said that I think is most important when you're looking for like how do you get involved, is looking to see what communities, what projects are welcoming. Because there's unfortunately a lot out there that are not. I don't necessarily think that they are unwelcoming on purpose. I think it's just the way that the project is structured, and the people that it's made up of.

**Autumn Nash:** There are definitely some communities that are not warm and fuzzy.

**Gareth Greenaway:** Yeah. No, for sure. For sure. And that comes down to the people that are leading those projects. I mean, there's -- the Linux Kernel is infamous for not being a necessarily welcoming community. And that stems from the top, from Linus himself.

**Autumn Nash:** There's a lot of old, grouchy people killing the vibes of open source... But it's wild, because a person that's never been at Scale before, who's never used Kubernetes... The community at Scale and Kubernetes, and the people that I've met - I so badly want to join the SIG release team, or somehow find a way to contribute... Because I want to be around those people. And I think that may eventually set open source projects apart. Because when one community makes you just want to hang out with these people, and want to be a part of something... If you're working for free, you're gonna pick the people that are willing to teach you and that make you want to show up and do it. And it is amazing the community that you guys have created.

**Gareth Greenaway:** \[39:54\] The Kubernetes community at large is -- I think there's many subcommunities within that community at large, but I would say they are probably one of the most welcoming, friendly community out there. There was a comment that I made to a few people... I made it a couple times, it was more of like a question, when we were all at Scale this past year; either the week before or the week after Scale, there was supposed to be a KubeCon event in Paris. And a lot of people missed Scale because they were going at KubeCon, and a lot of people were leaving Scale right after to go to KubeCon... And so I posed a question to some people a couple of times, of like "How many people do you think are going to KubeCon because they're actively using Kubernetes, they're actively contributing to Kubernetes? Or they just want to go to KubeCon to hang out with people that are using Kubernetes." And a few people kind of -- I don't know, took the comments, took the question kind of not the way I intended it. "Well, why shouldn't they go to KubeCon?" And I said no, no, it's a genuine question, because I want to know how many people are going because they're actively using Kubernetes? Or how many people are going simply because they like the vibe of hanging out with people in the Kubernetes community?

**Autumn Nash:** No, honestly, as someone who's never touched Kubernetes in their life, if I can find the time and if somebody had a project, I would literally contribute to it, and it would be one of the -- with all the things that I have to do, it would be something that would motivate me to still want to fit that extra time into my day because of the community I met at Scale.

**Justin Garrison:** I think that wraps up a lot of this too, where back in the day, open source - you would do it because it was fun. And you would find people that were having fun on the internet, and they were welcoming, and you would join them.

**Autumn Nash:** Yes... And tech is not fun right now.

**Justin Garrison:** A lot of it has changed, because it has shifted from this "Wow, I'm just hanging out at night, having fun hacking on something" to "I'm working for a company for free."

**Autumn Nash:** That's true. Because think about what we were talking about with Rich, and even in other episodes... It was stuff that people just did in their free time, and they're like "Oh, my God --"

**Justin Garrison:** Yeah. They had fun. You were scratching your own itch, you were learning something... And you were just hanging out, having fun. You become friends, and I have so many internet friends from projects over the years... I'm just like "Well, no, we had fun online."

**Autumn Nash:** Someone on Twitter said their wife asked him if it was their real friend or their internet friend, and he was like "What do you mean...?!" I felt that so hard...

**Justin Garrison:** No, I have a code for this... With my wife, I call any internet friend -- if I haven't met them in person, they're a friendly, versus a friend.

**Autumn Nash:** See? This proves Justin's one-liners.

**Justin Garrison:** We're like "You need to tell me if you know this person in physical -- in meatspace, and you've known them, or they're just someone you met online." I'm like "Well, I've known them for a long time. I've known them online." But it's a big change right now. Today, in 2024, it's not about going online and having fun with projects. You are working for other companies to make money off of your free labor. And that has shifted so much of open source and infrastructure.

**Autumn Nash:** It's sad, dude... It's just made the vibe horrible. But you know what, though? Maybe we've just figured the secret out. Community is what's going to save open source. They're gonna be the only projects that people show up to.

**Justin Garrison:** For me personally, I have just shifted to "I'm just gonna have fun on the internet, and if other people come have fun with me, it's great. Let's all have fun on the internet. And if interests change, it's okay." People can come and go, and everyone can still have fun, in certain areas... Which is, again, why I really BlueSky. Because BlueSky have the most fun.

**Autumn Nash:** That's sure.

**Justin Garrison:** It's the place that I'm spending my time. Twitter, and Mastodon, and all these other places, I'm like "No, I'm not having fun there."

**Autumn Nash:** It's still weird.

**Justin Garrison:** It is very weird.

**Autumn Nash:** You know what I mean? It's not like -- I wouldn't even say corporate-y. It's not that perfectionist of the internet. It's not where people just show up to just make everybody miserable. Twitter, I swear to God, every time a woman that's in tech goes on Twitter, somebody just wants to show up to have a pissing contest with you. When I go on BlueSky, I'm like "What weirdness are we getting into?"

**Justin Garrison:** \[43:53\] It's very weird, and it's so fun. And it's just so strange.

**Autumn Nash:** It's so fun. Yes. And people are -- they're being their weird self that we all want to be a part of. It's like finding your people, your community. But naturally.

**Justin Garrison:** And a lot of that comes down to moderation, because those are all pieces of this puzzle, where BlueSky has the best individual moderation that exists. And that's what used to be in AOL chat rooms, in IRC...

**Autumn Nash:** I also think it's just like -- it's the people that wanna get away from the other stuff. You know what I mean? It's the people that are there, and it's attracting a certain type of people, maybe...

**Gareth Greenaway:** I mean, that is what originally sites Twitter and Facebook were.

**Autumn Nash:** I know. I'm so sad. I love Twitter. I've met some of the best -- it's just, I don't know how to even mourn what Twitter was, because it's like "How do you replicate that?"

**Gareth Greenaway:** I mean, Facebook -- when Facebook first started launching... I don't remember if MySpace was still kind of the hot site. I think it was...

**Autumn Nash:** That's how I learned how to code...

**Gareth Greenaway:** Yeah.

**Justin Garrison:** HTML.

**Gareth Greenaway:** A lot of people did. You could view source, you could copy-paste it, and then modify it to your heart's content. But Facebook was the place you went, because you were -- honestly, your parents weren't there. Your relatives weren't there.

**Autumn Nash:** Yes...!

**Gareth Greenaway:** But your friends were there.

**Autumn Nash:** That's why I loved Tumblr and Twitter.

**Gareth Greenaway:** Once everyone started showing up on Facebook, it was like "Okay, we need somewhere new." And that's what Twitter was, for the longest time. And then all the advertisements and the companies started showing up, and...

**Justin Garrison:** But I mean, just like open source, you're not writing code for a company for free anymore. All these social networks turned into -- we all realized that we were working for them for free. We were making content.

**Autumn Nash:** Yeah. We were their content creators.

**Justin Garrison:** And that was why I left X. Nilay Patel on the Vergecast said "If you are still on X, you are working for Elon Musk for free." And I was like "I will not do that. I cannot not do that."

**Autumn Nash:** And you're not wrong. It's just like, man, how do we get -- there's no other point where we're all together. There's no other -- and the visibility of being able to find other people... It's such a good way to passively learn things, but now it's just like -- it makes me sad every time I log on.

**Justin Garrison:** They're all businesses.

**Autumn Nash:** I'm just like "What are they going to say now?"

**Justin Garrison:** Yes. And that is where community-run things -- you have to have that investment. Because IRC servers back in the day - that was someone's computer in their basement. "I'm the sysadmin for this. I'm going to be on call." And for a lot of people, they don't want to do that anymore. They don't have time, and that is completely reasonable.

The younger generation doesn't know what an open ecosystem is like. I'm 40, and in that 30 to 40, 50 range we had this wave of projects in infrastructure that was open. And we could access those things, and we could run them, and we could invest our time. Now everything has been closed source, and it's all Instagram, and Snap. All closed source systems. But yeah, all that has shifted. Gareth, where are you spending time and having fun online?

**Gareth Greenaway:** Currently, I'm spending time -- and I don't know if I would say having fun, but I'm spending time on LinkedIn. Because I'm actively looking for my next adventure in the realm of employment.

**Justin Garrison:** And LinkedIn has gotten a little wild, too.

**Gareth Greenaway:** LinkedIn - it's funny. I have noticed, since looking - and I'm not the only one; a lot of people are looking for their next adventure, apparently... But I've noticed that traffic and activity on LinkedIn has definitely picked up. I suspect a lot of that has to do with people who share your feelings and opinions on what's happening with X. But yeah, I've seen a lot of things on LinkedIn that previously would seem like other -- LinkedIn has been come become more of like a social media than it previously had.

**Justin Garrison:** Yeah. I mean, it's still a lot of people that start their posts that says "I'm excited to announce." That is still 50% of what I see, is people excited... And that is so overused, and kind of annoying at this point. But yes, I agree.

**Gareth Greenaway:** The ones that get me are the ones where it looks like it's a short couple sentences --

**Justin Garrison:** And you expand it...

**Gareth Greenaway:** \[unintelligible 00:47:54.28\] and it's like "Oh, no. This should have been a blog post that you linked to, and then I could decide..."

**Justin Garrison:** \[48:01\] I still think more people should own a website and write a blog. Just put it out there on a blog post. It doesn't have to be -- you can relink it to somewhere else. But the social media -- don't write the content and let it exist in these walled gardens by themselves. That's why I stopped doing my newsletter. I had a newsletter for a long time. And I was like "I don't want all this content trapped in someone's email." Because that is the worst place for it to live, because no one's ever gonna be able to find it or see it again. And newsletters all have that same problem - if it doesn't exist online in a searchable, open platform on a website, it's just gonna get lost and disappear at some point.

**Gareth Greenaway:** Especially if someone goes to -- which I do; I'm actually due to do it again... Purge your email inbox every few months, and get rid of stuff... Like, "Okay, I haven't looked at that in years. I don't need that."

**Justin Garrison:** I do think that back in the day email, before Gmail, when things were limited to like 10 megs or 100 megs of storage was actually probably a good thing... Because now that we have infinite storage, it gets abused so much, by every newsletter that we never check, and it's just like "Hey, you know what? Limitations have benefits sometimes."

**Gareth Greenaway:** Yeah, you had the motivation to keep your inbox down to a manageable amount.

**Justin Garrison:** Yeah. And not subscribe to every newsletter and not read it, and all these email marketing campaigns, and everything else that comes. Like, "No, I have 10 megs. Get out of here. This is my space." MySpace. We're back to MySpace.

**Gareth Greenaway:** Bring back MySpace.

**Justin Garrison:** Gareth, thank you so much for coming on and talking to us all about open source and Salt and your journey there. If anyone is looking, you're on LinkedIn, people can reach out to you, and we'll have a link in the show notes.

**Gareth Greenaway:** Alright, sounds good. Thanks for having me.

**Justin Garrison:** Thanks.

**Break**: \[49:42\]

**Justin Garrison:** Thank you so much, Gareth, for coming on the show and talking to us all about Salt, and generally just open source and foundations. It was a lot of fun.

**Autumn Nash:** It was a very appropriate interview for the times of open source that we are currently living in. And technology.

**Justin Garrison:** Yeah. The world is looking different. We don't know what it's gonna look like on the other side, but right now we're in this weird place.

**Autumn Nash:** I swear to God, tech is in like a sunken place right now... It's so weird. I'm like, I don't know how this all shakes out.

**Justin Garrison:** So for today's outro we're kind of bringing back a little bit of links of the week, but really it was just I had a couple of links that I wanted to talk about... And more broadly than just the links themselves. One of them was called "The serverless illusion." And this is a very thoughtful piece, not just about serverless. It starts off as what serverless is, but there's one sentence in here that grabbed me so immediately that I had to read more. And it's by Gregor, and he says "Illusions happen when abstraction hide relevant concepts, and therefore set false expectations." And I had to read that four or five times.

Essentially, what we're saying is "Hey, we all want to build these abstractions to not deal with the lower-level stuff." But sometimes you need the lower-level stuff. Sometimes you have to know what's happening under your code, in the server, on the network, something like that. And if the abstraction hides that from you, and says "Oh, you don't need to worry about that. I got this", but it actually becomes a problem, then he's calling that an illusion. And I really how that kind of sets that out as like "Oh, if there's something that I need, that's one layer below me or two layers below me, but I can't get to it, then I have this false sense of like "Oh, this should just work", and I can't solve it if it doesn't."

He goes on to say this isn't just a serverless problem. This is an abstractions in general. And this is any platform, and even things like Kubernetes... We always try to balance this, like, what is the abstraction we want and need, and what is the access to lower-level knobs that make the platform or the abstraction less abstractiony. The more settings you have, the less it looks like an abstraction. But sometimes you need those things.

**Autumn Nash:** I don't know how to feel about this. Here's why. Because I feel like we do this thing where we get really excited about the newest technology that's supposed to make our lives easier... And then everybody jumps on board and puts it in everything, and is obsessed with it, and we put it in things we need, we put it in things we don't need, we lose our whole minds about it... And then all of a sudden, we turn on it and cannibalize it, and everybody hates it, and it becomes -- intead of the bandwagon of usage, it becomes the bandwagon of hate. And I don't really think that either necessary. It's like cloud - everybody wanted to use it for things we didn't need, but also \[unintelligible 00:57:06.19\] cloud is still very much useful in its own way, but now it's like "Let's do everything on-prem", and you're like "Bro..." Both are valuable. And then now it's like -- I don't think everything needs to be serverless, but it's wild. People wanted to put serverless everywhere...

**Justin Garrison:** Yeah.

**Autumn Nash:** And now it's like "Serverless is bad." And I'm like "It's really not."

**Justin Garrison:** Well, I don't think -- he's not necessarily calling out "Serverless is the bad thing."

**Autumn Nash:** No, no, I know. His actual sentiment I agree with, but it just seems like it is still somewhat bandwagoning the "Let's eat serverless." I think the sentiment that he's saying, we've all been saying. I think that you could apply the same to AI and a bunch of things, and a lot of services. But I think you almost have to get a title that people will click on, o people will read your stuff... And I think right now it's "Let's all poop on serverless" this week. So that was the cool topic that would make people open the article. But I agree with the sentiment of the article, you know...

**Justin Garrison:** \[58:13\] The other two things he points out was one that I've talked about a lot, where serverless doesn't hide operations, it makes operations part of your application. It used to be I had a message queue somewhere else; the ops team ran the message queue. I didn't want to do that, because that was ops stuff. But now you have like EventBridge as part of your application, and it's like "Oh, we just pulled the infrastructure into the application." And that is like, just move the infrastructure components around a little bit. You're like "Oh, no, which part is actually my app and which part's the infrastructure?" And in a more, I would say truer serverless kind of approach, where like "Oh, everything should be in one repo with the application", and I have all these step functions, and lambda, and then all these components... The infrastructure of the app is just one thing, and you can't think of it as separations of concern... Which is also why I see a lot of enterprises used to have problems adopting serverless, because they had an ops team. And when they had the serverless application developers like "Oh, well, I need an S3 bucket." "Oh, you've gotta go and talk to the ops team, because you don't have access to that." It's like "Well, no, the S3 bucket's part of my app now. I need to have access to those things." And you had to kind of shrink ownership around, like, if it's a serverless application and the infrastructure is part of the app, you have to be able to have access to do the things with it.

**Autumn Nash:** I think this is going to get worse though... Because the more that we try to do at scale with the least amount of people... Like, really, automation, AI, all of these things, serverless - all of this is ways to do more with less developers. But the more you automate something, the less information you have into how it's automated. So yes, one person can go and automate all these things, but how does everyone else on your team know how it works? It's like that saying when you over-automate and stop documenting stuff, and then you don't know how it works underneath the hood. So yes, it's working for that amount of time, but how do you continue to scale? And it's just like, the more we abstract away, people don't know how to run that infrastructure. The more we automate, abstract, the more that we use serverless, all these things... But then to a certain extent, we have to do more with less. So it's like you need those things, but trying to figure out how to utilize them to get more done without handicapping your team is this constant battle.

**Justin Garrison:** That's the balance of like an abstraction versus an illusion, right? Because it's like "Oh, I need access to know what port I'm connecting to." Some platforms, you just say it's a web server, and they figured out the port. But at some point you need to debug it, and you're like "Oh, actually, I needed port 8085." And they're like "Oh, well, you don't have access to that." So that piece of it is a problem.

**Autumn Nash:** And I think that's going to drastically get worse in the era of AI and firing developers and layoffs... Because for one, so much of infrastructure was either abstracted and automated, but those people that built it or applied it knew what it was. And yeah, everything's still running, but eventually you're gonna get into the point where it either needs to be redone, or modified, or fixed... And we're going to continue to try to do more with less, and eventually it will come back to bite us. So I think it's like --

**Justin Garrison:** And if you want to talk about a piece of technology that no one knows how it works, LLMs are --

**Autumn Nash:** That's what I'm saying.

**Justin Garrison:** How did this output get here? Uhhh...

**Autumn Nash:** Be real, we're going to use that, right? And then we're going to have it -- people are like "We'll have it do security for us, we'll have it build infrastructure." That is a terrible idea, because nobody will then know how to fix that infrastructure or why those decisions were made. And then what happens when that doesn't know the answer, and it just does something? And then you have a \[unintelligible 01:01:49.07\] So it's not that --

**Justin Garrison:** But \[unintelligible 01:01:54.04\] still call it a person? That's the problem.

**Autumn Nash:** But the person has no idea how it got there.

**Justin Garrison:** \[unintelligible 01:01:58.22\] the robots, and then we'll talk.

**Autumn Nash:** It's like, you have to pay either way. Do you want to pay up front and you teach humans, and you onboard humans and do that? You can either pay up front, or you can pay later. And I call this the "mess around and find out" era of tech. We're about to mess around and find out.

**Justin Garrison:** \[01:02:18.03\] That's actually a really good point. Don't let LLMs write your code until LLMs can handle your pages. Let's handle that side first. Like "Hey, once we \[unintelligible 01:02:24.28\] all the pages, and they know the run books that are documented and exist, and we know how to solve those problems" - send that to the robots first. Let's do that one first, and then we'll have them write some code for us.

**Autumn Nash:** And when it's their butts on the line to talk to stakeholders when that code goes in the toilet and we don't meet SLAs... You know what I mean? It's not that the technology isn't going to be useful, but you still need humans to use it. Use it to teach humans how to onboard; use it to teach humans how to do that, so you have the best of both worlds. You're making them faster, maybe you even make them faster to figure out the reason this could be. Maybe you make it faster for them to find the solution in on-call. But to take humans out of the equation will only hurt you later.

**Justin Garrison:** I mean, humans are so -- I am so lazy. If there is something that's going to automate a portion of that, I'm not going to bother learning it.

**Autumn Nash:** But I mean, we have IDEs. There are ways that we can incorporate a way to be more effective, faster, without it taking our ability to know what we're doing.

**Justin Garrison:** There's a certain amount of automation that is acceptable... But the "Hey, Copilot, write this chunk of code for me" I think is too much, especially for onboarding. Because if it spits out a thing, no one's gonna go back there and be like "Oh, which line was that in?" It's like my cruise control for my car. I use it all the time. I'm on the freeway - guess what, I know how to drive a car. I have a license.

**Autumn Nash:** But I was gonna say, you have to know how to drive first.

**Justin Garrison:** I've learned how to drive the car, and now I could just go straight.

**Autumn Nash:** But think about it - right now nobody wants to invest in junior developers. That kind of one to five year range... It's either they don't want people who are really, really expensive, and they don't want people that either are new, or have just enough experience, but need to grow to senior... And eventually, we will pay for that gap. Because if we're not willing to invest in teaching people, AI is not going to solve that problem. And having just the same senior developers - they have to retire at some point; they're not going to be able to scale.

So if you're not investing in the next generation, or moving that person who knows some, but not all... It's a cycle. That's the reason why senior engineers have to be good teachers. And the more that we're like "Oh, we don't need developers. We don't need to invest in people. We can get all these things to automate." Like... Until when? So I think that all of this is kind of going to come home to roost at some point.

**Justin Garrison:** I saw a thread recently of someone saying that hiring junior engineers make your senior engineers better, because they have to teach.

**Autumn Nash:** It is. Dude, one of the best ways to learn a complicated thing is to go and teach it to someone else. For Milspouse Coders there was a point where we would have people teach concepts, and then record themselves. But we would give an opportunity -- so they'd have a lightning talk, and they could teach it. But we would also do it where it'd be like "Explain this to me like I'm a five-year-old and I don't understand it." Because the level of understanding that you have to be apt to explain something to someone, and answer questions will raise your knowledge on that subject.

**Justin Garrison:** That is literally the reason I started doing conference talks. I did my first conference talk back in Scale, that \[unintelligible 01:05:29.21\]

**Autumn Nash:** And people are always like "You need to pay your dues first", and all this stuff, and I'm like "No, but it's a great way to learn." That's why people should allow open source people to contribute to documentation, because your documentation might suck. If you made it, and then you have to go tell people how to use it, you know everything about it. But for a newb...

**Justin Garrison:** Yeah. The person who wrote the code is the worst one to write the docs.

**Autumn Nash:** Thank you. You start with the doc, and then you have to -- dude, I love having somebody... Like, I'll write a documentation, or a readme, or a wiki, and then have somebody use whatever form of automation or thing that I built, and then go through it, and you always find gaps. Because you thought you included that part. And then when they go over it...

**Justin Garrison:** \[01:06:14.17\] And some gaps are intentional. Because not every documentation can start from the beginning. And so you have these gaps that are like "Hey, if you're here-- let's say you're running Kubernetes. We assume you know how to containerize something." There are assumptions; you have to make some of that. But those assumptions have to change over time, as the industry moves, and as abstractions move, and hype cycles move. Some of that has to just adjust to what we should expect someone to be able to do.

**Autumn Nash:** Also, the more bigger picture that senior engineers need to be able to operate on, they can't get this full scoping and big picture if they don't remember where people started, and how much a junior developer knows... You know what I mean? So they can properly break down work to give them.

**Justin Garrison:** Yeah. And you don't know what the starting point -- I just literally... On LinkedIn, I put out a message, like "Anyone that has never used the Talos operating system that I work on, let's do a live stream." Because I want to learn from the beginners again. If you've never used this before, let's jump on a live stream, and I will help you through it. We will make sure we get through the whole thing. And I was looking for one or two people. I have 20 streams that are coming. It's amazing. This is great, because I get to learn from all of the beginners again... Because I can't be a beginner.

**Autumn Nash:** And you'll make your product better, because you're going to find the holes; you're going to find out how to make it better.

**Justin Garrison:** Yeah. It's going to help with the docks, it's going to help with command lines, and so many other things.

**Autumn Nash:** And when you do that on a team, the more you are used to onboarding new people and being able to get people up to speed, you make your processes better.

**Justin Garrison:** One of the last things I did at Disney Plus was I created a Scala Hello World... Because we were mostly a Scala application. And we wrote platforms. We wrote the whole platform for all these developers to deploy their applications. And it's like "Okay, here's my GitHub repo. Go deploy it with our tools. You have four days." No one did it. We had all this automations, we did all of the Jenkins stuff, we had deployment pipelines, we had the infrastructure, we had all this stuff... Not a single person completed it in the time limit that I set. It was like "Hey, don't spend all day, four days... But spend a couple hours on it. I want to see how long it takes." We assumed that our tools would allow somebody to get up and running and deployed in about four hours, and no one did it in eight.

**Autumn Nash:** And another thing that also -- it helps you to get better at estimating tasks for your entire team for grooming and planning... Because when --

**Justin Garrison:** Right. Prioritization.

**Autumn Nash:** Exactly. Because if somebody who's been doing it for 20 years, and has been on this team for 56 million years, and they wrote all of the infrastructure automation and every tool that you've ever had, they're going to do something in a faster speed than everybody else. So if only that one person is scoping everything, everything's always going to take longer, and you're never going to have true estimates.

So I hope we remember the value that new people bring to this industry before we're out of luck. Yeah. Because it's like, dude, every time you take a gap in that cycle, you need juniors to become more senior, and more senior people to become -- because it keeps that field alive, and the amount of which we're cutting people and losing that experience, it's going to be sad.

**Justin Garrison:** I don't know where to go from here... I'll put the links in the show notes for what started this conversation, but...

**Autumn Nash:** Let's go get ice cream. I need something to cheer me up.

**Justin Garrison:** So thank you, everyone, for listening to the episode. If you have someone that you would like to come on the show or a topic you'd like us to cover, please email us, shipit \[at\] changelog.com. I have a couple of people that did email us and already reaching out; we're getting some of those things scheduled. So it's actually great to hear feedback on what other people are interested in, or just a cool person to talk to.

I also really want to talk to people with the -- what we call the retro episodes. If you ran infrastructure in the late '90s or early 2000s, reach out. We have one coming up. I've been teasing right now. It's not gonna be for a little while, but it's about mainframes. I had never touched a mainframe. I want to learn more. And this is gonna be great to hear how it worked to ship code and run it on it.

**Autumn Nash:** I have also never touched a mainframe. This is very exciting.

**Justin Garrison:** I'm excited for it. So if you have some of those retro, or you yourself are interested in coming on and have done old technology that should have been retired a long time ago, please let us know.

**Autumn Nash:** You said "Should have been retired a long time ago..." Do you have tech debt?

**Justin Garrison:** Is that Bash script still running in prod? Reach out to us.

**Autumn Nash:** Does anybody know what it does...?

**Justin Garrison:** No docs!

**Autumn Nash:** This is how you know we've gone through too much trauma.

**Justin Garrison:** Alright, thank you, everyone. We'll talk to you again soon.
