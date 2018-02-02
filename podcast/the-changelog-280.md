**Jerod Santo:** So Jeremy, the obvious first question when we speak with somebody -- I don't know if we've spoken to too many people who are writing an operating system, but I always just ask "Why? Why this huge undertaking?" Why are you (and others) writing Redox?

**Jeremy Soller:** Well, that in many ways is the question people will ask, especially in the early days when there's not much work that has gone into it. When it was first announced, I didn't even know it would be announced... But someone announced it on Reddit; the first user of the operating system called Ticki, who also set up the chat server - he put up a Reddit post saying "Hey, look at this operating system written in Rust." I was not ready at all. And to be honest, at that point I'm not sure I even had a direction.

To get started in the why I wanted to do this, a long time ago I was making operating systems in my free time using Assembler, just as a hobby, and to try to get to understand how computers work at a lower level. And Rust, when I first encountered it, really struck me as a language that would make all of the headaches that I had writing operating system-level stuff in Assembler go away. So I just started toying around with the Rust \[unintelligible 00:03:48.10\], then I wrote a little graphics stack, had mouse input, keyboard input, and it kind of ballooned from there. But now I think we do have a purpose.

\[00:04:01.25\] The purpose of Redox is not to replace Linux or to replace the desktop operating systems that are currently out there, but to augment them. It's to provide an alternative that is secure from the ground up, that's built in a language that has some provable security aspects, and also has an architecture - because it is a microkernel - that's designed to be a little more secure and reliable with the default settings. So most of it comes out of security, at least for the official reason. But for the unofficial reason, it is a lot of fun to write in Rust, and it is a lot of fun to write stuff at a low level.

**Jerod Santo:** It's interesting, I was thinking back when I said "I don't think we talked to too many operating systems developers", the last one that we did, Adam - the show hasn't aired yet, because we have to re-record, because we had Steve Klabnik on talking about intermezzOS, which is another operating system that has probably extremely different goals than what you're doing, but interesting to see how much is happening in the Rust community around OS's.

I wanna go back to Ticki, because I was \[unintelligible 00:05:10.01\] the Redox book today in preparation for this, and Ticki's name is all over that. So it sounds like he's been a part of the community since day one, huh?

**Jeremy Soller:** That's right. He started the community with that Reddit post, and the first commit to the repository was on April 20th 2015, and only a couple months later Ticki posted, and it kind of exploded from there. He set up the chat server, he started writing a bunch of this... He's got his code in the core utils, in additional utilities we have called "extra utils" inside the shell, in the kernel, and now he's working on the file system.
He wrote some very popular Rust libraries like Termion, that is a terminal control library that quite a lot of people are using for outputting stuff to the terminal and using control characters and making nice, pretty terminal interfaces.

**Jerod Santo:** So after that initial Reddit post and the interest flared up, did you have a sense of dread, or just joy that all these people were suddenly interested in this operating system which was fledgling at the moment (not ready to even be announced)? Was there a sense of dread, or was it mostly just excitement and spurring you on to move forward.

**Jeremy Soller:** Definitely both. Because what there ends up being is you know that there's so many problems that need to be fixed, because you're still working on it. At the time, it was a unikernel, and everything was running in the kernel, including all of the programs - they were just hardcoded kernel functions. I was just literally trying to figure out how to compile Rust at the kernel level and run it. That was it. I hadn't figured out how to launch applications in the user space with Rust, and all these other things hadn't been figured out. So the fact that there was so much, even at that state in development there was so much interest in it really probably changed the course of the project from being simply a hobby to being my second job.

**Jerod Santo:** Were you looking for a second job?

**Jeremy Soller:** Not at the time... \[laughter\] But that's what it became. Like most programmers, it's hard to turn it off, to stop programming... So you have side-projects. And this ended up soaking up every single side-project I was working on. If it wasn't Redox, then there really wasn't a place for it, so it had to fit into that paradigm.

\[00:07:52.05\] It's been a timesink, that's for sure. Sometimes I think I might work on it more than my real job, but... Yeah, it was enlightening just how many people wanted a Rust operating system, so immediately from there I started working on the things that it needed to have. It needed to have separation, where drivers and processes were running in the user space; it needed to have a kernel that wasn't a hack... So we actually had to rewrite the kernel about a year and a half ago, because all the memory management had been done incorrectly. And one I started trying to introduce concurrency, where more than one core would be running kernel code at the same time; things started breaking all over the place, so I scrapped the kernel code and rewrote it.

A lot of that was -- Steve Klabnik has actually been very helpful in some of these areas, as well as Phil Oppermann, who wrote a blog about writing Rust operating systems... I actually ripped off quite a lot of his memory management code for Redox. Hopefully, he ripped off a lot of the stuff I had been working on in the early days to figure out how to set up the build environment.

**Jerod Santo:** \[unintelligible 00:09:15.05\] It sounds like there's a lot of that going on in programming, especially when somebody trailblazes; there's no problem in walking down that hidden down trail. Nothing wrong with that.

**Jeremy Soller:** Yeah. There are very few communities that really believe in sharing as much as the Rust community, too. Most everything is free software; there are only a few proprietary programs written in Rust that I know of, and those are in-house programs that we use to manage firmware here at System76. The majority of stuff out there though is open source and MIT-licensed, so it's permissively licensed.

**Jerod Santo:** So you started off, you were tinkering, it was a hobby; still, I guess, you would call it a hobby, although like you said, it's a second job at this point. It's a very large hobby, one that probably takes most of your free time. You didn't really have a goal in mind until you realized that you had to have a goal. Now I'll read a little bit from just the opening section of the book here, \[unintelligible 00:10:18.27\] There's a very nice statement here, "Redox is an attempt to make a complete, fully-functioning general purpose operating system with a focus on safety, freedom, reliability, correctness and pragmatism." I think that encapsulates it very well. That sounds like a very almost Serious Business, with capital S, capital B...

Has the breadth of it and have the principles in this attempt to build this, has it made the scope of the project sprawl? Because that's why I always ask, "Why build an operating system?", because not only is there depth in the technical expertise required - I'll ask you to describe the microkernel and stuff like that here in a little bit - but just the breadth of things needed when you're starting from scratch, so to speak. To me, it is an overwhelming thought.

**Jeremy Soller:** Absolutely, and there are probably 10,000 hours of work just from my time into things that I've written for Redox. It's an immense amount of labor. But the undertaking of that labor does have an end goal that all the code that's written, provided it follows the coding style that we use, which is Safe Rust, ends up being something we can verify more easily for security properties than other code.

**Jerod Santo:** Tell us about Safe Rust, as opposed to a different style.

**Jeremy Soller:** \[00:11:54.29\] The coding style is very important in Rust, and actually what people don't realize is that Rust enforces your coding style, whereas other languages don't. Rust comes in and prevents certain things from happening, to an extreme. Passing around mutable pointers is trivial in every other language. In Java, you can crash a program very easily - concurrent memory access exception, right? In Rust, this is not possible. In Rust you have to structure things the way the language forces you to. In some ways that's a negative, because that takes a lot more effort to learn the language, but once you do, you start to get in the habit of writing things with Safe Rust, and using abstractions that are performant and safe at the same time.

This especially is important in the kernel, where things can be run at any time in the kernel, because interrupts can be triggered by hardware, and they're services immediately by the kernel. It's a lot like signals in a user space application, code gets run in the middle of other code. So if you end up having to lock things, and then you hold that lock when the code that also requires to hold that lock, it's called you have a deadlock. Rust prevents these kinds of things from happening, unless you try really hard. So people end up falling into a coding style that I will call "the Rust coding style." It's not as though that coding style can't be translated to other languages; in fact, I would say my C now has more of a Rust coding style than it did before I learned Rust. That coding style is to check errors when they happen, and to return from the function when they happen; where that coding style is to check for the validity of pointers before using them, thinking about how things are being aliased... All of these things enter into your thinking in other languages.

The only way that this could happen for an operating system is to rewrite significant parts of it, in a language that had very strong static analysis, like Rust does. Other operating systems, like if you look at seL4, they attempt to go even further with verification techniques. That takes a tremendous amount of time. Rust is one of the things that can bring a certain amount of verification into your program, but can be done in polynomial time; you can actually write a program, as opposed to having to write a program, write a specification, learn a lot about formalism, and basically end up having to say, "Well, this program is formally verified, unless the hardware operates incorrectly, or the operating system returns the wrong stuff from a system call, or the other libraries on the computer are not operating correctly", or this or that.

By writing a lot of things in Rust at a low level, we have a form of guarantee that certain classes of errors are going to be thrown out. Those classes are double frees, invalid pointers, buffer overflows, things like that. So it was necessary to rewrite a significant amount of things to get those advantages.

**Jerod Santo:** Yeah, especially when you say buffer overflows - it's probably the most common cause of exploit out there against many programs, I guess... Unless you're talking about the web; then probably cross-site scripting is number one.

**Jeremy Soller:** Yeah, absolutely.

**Jerod Santo:** Yeah, so getting rid of buffer overflows is hugely advantageous for security.

**Jeremy Soller:** Yeah.

**Jerod Santo:** \[00:15:49.08\] So let's talk about the -- we stated the goal... And by the way, before we get into the design, because that's probably where we'll camp out most of the time, I always like to ask people what success looks like. Maybe Redox already is a success as it is, but for you personally, you've got so much time into it, so many lines of code, so much thought and effort or part of your life - what would success look like when you say that it's an attempt to make a general purpose operating system? What would success look like?

**Jeremy Soller:** Success to me looks like I and only myself can run this operating system on my own machine, without having to worry about features missing. That would be success for me. I really am pretty selfish about this. I started developing an operating system for myself, based on the thoughts of what I wanted on my computer. I can't really dictate what other people will want. The lucky thing is though that most people in the Rust community want the exact same thing. They wanna run a secure and free operating system, so if I can deliver on that goal and I can have something that runs on my machines, can build itself from source, so it needs to be self-hosting - which we're very close to doing - and has a browser, has internet access, has hardware access to all the hardware that I need to use, then that would be a success.

Then from that success I think it would grow to other people's forms of success, which would be "this is a widespread, widely used operating system in at least one sector." If that was, you know, "90% of IoT devices are running Redox", that would be an example. I'm not looking for the desktop, or server market, or any of that. I'm not looking for any market, I'm trying to write something for my own computer, so that I can feel secure, and so that I can tinker with things, and stuff like that. It just happens that a lot of other people want the same thing.

**Jerod Santo:** What I like about that measure of success is that's completely in your control... Whereas you can't control market share, you can't control traction and adoption and these other things that are required.

**Jeremy Soller:** That's what everyone else measures success by.

**Jerod Santo:** Right, and if it's like "I can run it on my own machine", that's a very -- I'm not gonna say it's an easily achieved goal, but it's like a clear goal that you are in control of, you and the community.

**Jeremy Soller:** Right.

**Jerod Santo:** So I said one last question before we dive into the design, but now I have another one, so I lied... How close are you to that? You said you're almost self-hosting, but how close are you to getting to your vision of success?

**Jeremy Soller:** So I already run Redox on all of my machines, partially. It's not full-time, that's the issue. To get to full-time, I need to be able to compile Redox on Redox, and I need network drivers for wireless hardware. Those would be the two things that I would need. We would get a browser at some point; I think the quality of that browser might be debatable, but once this system is self-hosting, we should be able to work harder on porting software... And I can always use my phone if I need to go to Facebook, or whatever.

**Jerod Santo:** There you go.

**Adam Stacoviak:** I'm curious about the secure aspect of this. What does that stem from? What did you use prior to this and how is it not secure enough for you?

**Jeremy Soller:** \[00:19:40.04\] So I've been using Linux for a very long time. I've been using Linux probably since I was 12 years old, maybe 10... And it has always been a stable and reliable operating system, and it's always been thought of as a secure operating system, and in many ways it is. Any Linux-based operating system is more secure than Windows; that's end of story, the truth. But there are flaws in the way that most Linux distributions handle security, and the way in which the Linux kernel itself handles security. There are about 400 system calls in Linux, whereas there are about 50 in Redox. Each one has, I would say, mathematical attributes around it in its use; in specific cases you use this specific syscall. It will not be duplicated. There won't be another syscall that does the same thing. That kind of design already yields itself to more security, because you have less surface area.

Then, if you go further to some of the things we're trying to do with OS-level virtualization and with schemes, what you have is a file system that can be reliably contained, whereas with Linux, any process running in any user level can access certain hardware devices, either through ioctl's or through the dev file system, and most users have the ability to gain superuser access, at least what you run your browser as. In Redox all of the drivers run in user space, and all of the drivers run in a special container mode whereby they release privileges to access any hardware after they've gained access to the hardware that they need to control. What this means is that for example the disk driver will open the disk device, and then it will disable its ability to gain access to any other devices at any time in the future. A vulnerability in the disk driver now went from a privilege escalation allowing any system to be accessed, to a privilege escalation allowing the disk to be read and written. Just as bad, perhaps, you could rewrite things on disk, of course, you could rewrite the kernel, but you've contained that piece of functionality.

An even better example is a network stack. A network stack that gets compromised on Redox is only able to access the network device that it's operating on. So it can send bad packets and it can lie about received packets. That's it. Whereas if you have a network stack that's compromised on Linux, it gains access to the entire kernel... Depending on how it's compromised, of course, but there have been privilege escalations in the Linux kernel that have been remote vulnerabilities, that have allowed remote attackers through accessing the network devices of another machine, access to the kernel and running arbitrary code at a kernel level, which is clearly a worse vulnerability.

So firstly, the microkernel architecture divides devices into separate spaces; each one is in some process space. Secondly, OS-level virtualization prevents those processes from accessing any devices after they get into a working state. They open the devices they need, they disable their ability to access any more.

Thirdly, everything is written in Rust. I hate to have to go to that point, because I think -- people who are on the fence about Rust, when you say "Well, you should rewrite it in Rust", they will look back at you and they will ask "How will that improve my coding quality? How will that prevent logic errors? How will that prevent programmer failures that happen in Rust anyways?", and it won't. They're right that Rust is not the magic bullet that people seem to keep pushing it as. Rust is simply one part of the puzzle. That's why we have to have a microkernel design.

\[00:24:10.26\] Some people have asked "Why not do a unikernel design? If everything's written in Rust, it should be completely sane to have everything run in a kernel space, because you have protection from a language level." It's not true. It's not true at all. Rust is not perfect. Rust cannot protect against every single vulnerability, and so in this method you need to have different levels. You need to have the microkernel for protecting device drivers and services, keeping them separate. You need to have OS-level containerization, so that processes run in an even more containerized form than by default. Not only do they have memory access being prevented across process spaces, but you also have file access being prevented across process spaces. And finally, Rust to protect against programmer error, to prevent (but not completely eliminate) the possibility of buffer overflows, of bad pointers, and of double frees and things like that. Those three together are the reason why Redox is potentially more secure.

**Break:** \[00:25:30.15\]

**Jerod Santo:** Jeremy, let's pick back up with the microkernel you mentioned at the tailend of the "why Rust" portion there. Can you describe that in detail? The rewrite, what a microkernel exactly is... And then you mentioned the security benefits, but maybe if there are other pros and cons to that sort of a design...

**Jeremy Soller:** Yeah, so the strictest definition of a microkernel is a kernel that only does what is necessary in the kernel space to make a functional user space. That is the strictest definition. By that definition, Redox is not a microkernel. But the definition that's typically used is drivers and services run in user space. By that definition, Redox is a microkernel. It isn't a seven system call microkernel like the L4 microkernel, but it is a microkernel. It's 10,000 lines of code, and what it does is provide a framework for filesystems that then user space can use to create file systems and to perform file system operations. That's essentially what it does.

\[00:28:02.15\] The older kernel before the rewrite had drivers included, so it wasn't a microkernel; it was a monolithic kernel. And even older than that, if you go all the way back to the original write, the original Git commit, it was a unikernel. So the first thing that happened was to be able to run processes in user space, the next thing that happened was moving drivers into user space. In order to do that, we had to write some special system calls for drivers to hook into, but the majority of system calls in the Redox kernel are file system related. Opening files, reading, writing, seeking, closing and duplicating; that's pretty much it.

There are some timing system calls, and there are some process control system calls, like exec and sleep, things like that. Well, actually clock nanosleep, or something like that; whichever one has the highest resolution is the one we implement. What this means is that in user space in Redox you have disk drivers, file system drivers, the network stack, network drivers, the graphic stack, graphics drivers, the input stack, input drivers are all programs. This is very different from other operating systems, especially other operating systems that are at this level of development. Because if you do look at other microkernels, they have tended to lag behind, in part because it's difficult to write a microkernel. And also, in part because there isn't a lot of interest in microkernels. But I think after realizing the security benefits, again there will be a renaissance in microkernels and Redox will be one of them.

**Jerod Santo:** Does that architecture put more strain and slowdown on the development of these specific -- like the networking stack in user space, does it make writing that portion of the operating system more difficult because it doesn't have kernel level access? Or once you get the microkernel setup it's really six in one hand, half a dozen in the other...?

**Jeremy Soller:** I think that was the most difficult part, choosing what needed to be in the kernel, so that it would be easy to write drivers. Because I think now drivers are actually really easy to write. I've written several drivers for networking devices. Each one takes about a day of research and implementation effort, and most of that is looking at hardware-specific things, like registers, because actually getting to the point where you're accessing hardware is not too difficult anymore. The reason why user space drivers are so hard, and -- well, we could take Linux for example, because there are user space drivers, especially for the USB stack. There's libusb, there's lots of different programs that use libusb and implement user space drivers for devices. Things like fingerprint readers use user space drivers.

What you don't have in Linux that is available for a user space driver programmer is the ability to get hardware interrupts delivered to the process. This does not exist. So you can't write drivers for PCI express devices, for example. You can only write drivers at a higher level, like for USB. This has been fixed in Redox by having a file system for interrupt delivery. So a device driver simply opens a file for that interrupt, and then gets a file event and can read the interrupt information when the interrupt occurs. So it's all event-based. They get messages from the kernel indicating that an interrupt happened and they can handle certain hardware operations. And this is fairly low latency.

\[00:32:01.24\] There has been a lot of optimization in modern x86 CPU's to handle context-switching efficiently, which also lended itself to making microkernels easier to develop in. Now I would say for a new driver the things you have to do are create the file system to access that device, write hardware-specific code to access the registers of the device, and then link the two together so that you have something come in from user space from another process. It tries to open, for example, disk;0. You give it back a handle. When it reads from that handle, you read from the disk. Implementing this with the scheme mechanism in Redox has been fairly simple and straightforward.

**Jerod Santo:** Another aspect of Redox's design that interested me right away is this concept of everything is a URL, which those of us well-versed in Linux remember "everything is a file", or are familiar with that; "everything is a URL" seems like a take on that that seems more holistic or global. Can you talk about that design decision and its implications in the OS?

**Jeremy Soller:** Yes. So I would say that "everything is a file" is still the methodology. Unfortunately, these two things are conflated. When people hear "everything is a file" in terms of Unix, what the original meaning was is everything can be treated as a file handle, not that everything had a path on the file system. What that meant was that maybe it would open a network socket. You would not open it from the file system in most Unixes. You would open it with a socket call, but you would read from it with a read call, you would write to it with a write call and you would close it with a close call. What Redox has done is unify all of this into the open call, and it's something very similar to what Plan9 did.

First, we have everything as a file descriptor, now we have everything is on the file system, like Plan9, where every networking is accessed through the file system. You create files, you read from them, you destroy them... From the file system you are able to do networking operations, you are able to interact with the windowing system. Everything you can do in Plan9 you can do from the file system, with a file path. So now everything is a file descriptor and it's referenced by a file path.

Now, in Redox it goes one step further. Both of those are true, and we add on segmented file systems. What this means is that the beginning of a path identifies a file system to interact with. This file system is implemented by either the kernel in the case of some of the low-level file systems like interrupt handling, or mostly by a user space process. And in order to create a scheme - which is what this level is called - a user space process opens a file. It creates a file in what's called the root scheme, so everything is file-based... Or at least file path-based.

The reason why I say "everything is a URL" - the easiest way to conceptualize this for most people is the word "URL", because at the beginning of the URL you have an identifier of the protocol called "the scheme", and you have after that a path. So what happens in Redox is that path gets sent to whatever handles that specific scheme, and then it returns a file handler which the kernel holds on to.

\[00:36:06.18\] And the kernel arbitrates between the two processes. It passes all of the system calls that utilize that file descriptor to the scheme handler, which then passes the results of each file descriptor operation back to the kernel, which then forwards it to the process that started the system call.

**Jerod Santo:** So do specific user space programs register as scheme handlers, or something? They say "I can handle this scheme..."

**Jeremy Soller:** Exactly. So each scheme is typically owned by one process. So one process for each scheme. A process can have more than one scheme. Usually, they don't, but sometimes they can, in the event -- for example, the network stack, especially the new version of the network stack has TCP and UDP and IP all implemented by the same process. So any operations on those file systems gets sent to the same process. But what this means is that you can easily audit all of the open file descriptors and all of the available paths on the system. Who supplies them, what is happening to them - all of that can be audited from the kernel level. So by asking the kernel for all the open file descriptors, and for who created them and who is using them and all of those things, you can also design a more secure system. You can say "Well, that file descriptor shouldn't be open. I'm gonna modify this process to close that file descriptor." Or "This program should not have access to this file system. I'm gonna modify the permissions that it gets launched with", things like that.

**Jerod Santo:** Yeah, it's like everything gets passed through this one waypoint, or this one -- like a canal, or something, so you can enforce restrictions right there.

**Jeremy Soller:** Right, and it makes it super easy to do namespaces, which are a critical Redox concept for OS-level virtualization.

**Jerod Santo:** Okay, tell me more about namespaces.

**Jeremy Soller:** So a namespace is created by a process much like a chroot is created in other Unix operating systems... Except in this case, since everything is going through the file system (everything), a namespace allows a user space process to control other user space processes almost entirely. So if you can control every access to the file system, you can redirect it to a different place; that's what a chroot is. But if you can control every access to the networking file system, then you can firewall a process. If you can control all the accesses to the graphics file system, the windowing file system, you can have remote windowing. You can do windowing over the network, for example. So VNC could simply be implemented as running a process in a windowing container, basically. Things like that. Every single thing a process can do can be watched by a process that spawned that process. We have a method of doing Docker basically, a method of doing chroots or jails that is more general, because every single thing that can be done by a process goes through this file system mechanism, so it can be intercepted by a higher privilege process and then redirected or modified.

**Jerod Santo:** That sounds pretty cool. So is this all -- maybe "hypothetical" is not the best word, but is there any of this tested out in practice, or are you speaking of the possibilities given this architecture?

**Jeremy Soller:** \[00:40:01.12\] It is implemented, and there are usages of it. Right now we do have a chroot example that will do this in order to enable chroots. It will basically redirect file system calls to a different folder. We also have a method of processes entering a restricted mode where they can't open any file descriptors at all. This restricted mode is implemented using namespaces. So if a process enters into the null namespace, they lose the ability to access any file paths, and by doing so if they're compromised, their damage to the system that they can cause is limited.

We do need to implement a more complex example, which I think would be to run multiple versions of Redox at different IP addresses and then do virtual networking in a user space process that then outputs them to the real network. Basically, doing LXC, which is Linux containers. They are OS-level, which means that it isn't virtualization; it is real 100% speed processes running on one kernel, but certain processes have different rights, and those rights are controlled by other processes. So doing something like Docker would probably be the best proof of this system, but we do have things using it already.

**Jerod Santo:** Very cool. Anything else at the core to Redox's design that you wanna touch on before we broaden the conversation and talk about the ecosystem? Because there's a lot of other stuff going along around and in Redox that are notable.

**Jeremy Soller:** I think that's pretty much it. We've talked about microkernels, we've talked about the file system... The kernel is the file system arbitrator, so I think that's most of it.

**Jerod Santo:** Okay. So expanding the conversation and looking beyond the kernel and the file system, there's obviously a lot more that goes into a functional general purpose operating system, and you have a lot of other things going on, many maintained by you, many maintained by other people in the community... Where do we start? I mean, you've got the little editor, you've got the Ion Shell, you've got utilities, Orbital... There's so many things we could talk about. What's the best place to start there?

**Jeremy Soller:** Well, the biggest and most important thing right now I think is Ion. It's seen the most work, it's not maintained by myself, although I was involved in the earlier implementation... I have been involved in implementing Redox-related things for it. It's maintained by Michael Murphy, who spends a lot of time and effort on updating Ion and making it work really well. It has better performance than other shells, for a lot of tasks, the syntax is not insane (like Bash syntax often ends up being), and it's written in Rust. What more could you ask for?

**Jerod Santo:** Is it ready to go, is it usable? \[laughter\] I guess -- what else can you ask for? Using it...

**Jeremy Soller:** For the most part, yeah. For the most part it's usable. I think the remaining thing is to verify that things like Shellshock are not present in Ion, to verify the syntax and to formalize the syntax... Because right now the syntax has not been formalized. It's been implemented, but there's not a document identifying exactly what the syntax is.

\[00:43:53.13\] That's not to say that the syntax is difficult to learn. We have tutorials, we have things identifying what the syntax is, there's just not a formal specification of it. So what we're working on right now is to fuzz Ion, to basically pass it valid syntax from a syntax generator that has different code, that has a different implementation of the syntax, creates what should be valid syntax for Ion, feeds it into Ion, and then validates the behavior... And does this automatically and randomly. If we have something like that, I think we could stamp it ready for general use.

**Jerod Santo:** Are you familiar to people who may be using Bash or C shell?

**Jeremy Soller:** Yeah, I think so. So much of it comes from the Bash syntax - the way variables are handled, the way you call functions in pipe, and pipe into files, and pipe to other processes, the way that you background things, ctrl+C and ctrl+Z - all of those things are the same in Ion.

The differences come out when you start doing if statements and loops, where we've simplified the syntax of the POSIX; it's not following the POSIX specification. So scripts that do need to follow that can use Bash. And I've been thinking about maybe implementing a compliant mode in Ion where it can act as Bash and it can run POSIX syntax scripts, or Bash syntax, which is slightly different.

**Jerod Santo:** I guess that's a point -- we haven't really pointed a finger at this \[unintelligible 00:45:36.15\] but it's -- Redox is Unix-like, but it's not POSIX-compliant, and it doesn't want to be.

**Jeremy Soller:** Right.

**Jerod Santo:** It's close to POSIX-compliant...

**Jeremy Soller:** It's to the point where most things that are simple will probably compile. But the thing it is compliant with is the Rust standard library, and it is compliant with a number of things at the C level, but not all. Not all. Because some of those things would invalidate the design. We don't have ioctl's, for example, because that would violate the file system design. We don't have -- certain networking calls have to be done differently. We've implemented BSD sockets, but the way it's implemented in the C library is not like other Unixes... And a lot of things are different. But those things that are different are usually for much more complicated use cases.

We've ported Bash, for example. So all of the terminal control stuff is different at a lower level, but we have access to those interfaces at the C library level. I think the reason why we don't say POSIX-compatible, mostly it's because some design decisions force it to not be POSIX-compatible. The file system can never be POSIX compatible if it uses schemes. It has to be a single file system hierarchy for it to be compatible... Things like that, they throw out the possibility. So Unix-like because it implements most of the things you expect on a Unix, not POSIX-compatible because we can't possibly be... Although we don't break POSIX compatibility on purpose. We try to follow it as much as possible so that porting software is easy.

**Break:** \[00:47:36.24\]

**Adam Stacoviak:** So Jeremy, we talked earlier about security, and you talked about why you went that route with Rust, why it was important to you, and you'd mentioned essentially how Linux didn't fit your bill... I'm kind of curious, why not just contribute to Linux, BSD, the other operating systems out there? Why not just do that, versus essentially go it alone (accidentally, in some cases), and we're here right now with Redox? Why not go that route?

**Jeremy Soller:** The major reason is because the design goals don't align... And at the very beginning, the design goal didn't exist, but when it did gain popularity, when this idea of a Rust operating system gained popularity, the design goals started to become more permanent... Those being a microkernel and Rust. Rust is possible in the Linux Kernel and in BSD; you can link to Rust, you can compile Rust, you can use it; the issue is that the microkernel architecture is not one that will be accepted. Those are monolithic by design. I don't want to change their design. I want to live alongside it, I want to attempt to develop something that may or may not work for a secure future based on a microkernel based on Rust.

There are however microkernels that maybe I should have been contributing to, like Minix3, that do have aligned design goals... And I think the major reason is that the microkernels like Minix3 and Hurd don't feel very professional and very developed at this point. There haven't been a lot of people working on them, and they've been achieving things very slowly. It kind of bears the question -- you kind of ask the question "Why?" Why are these other microkernels not doing so well? Why are they developing slowly, why are they not being utilized? Why does it look like a ghost town when you try to find people who are working on Minix or working on Hurd? And I think it's because the interest died. Because these projects, in one way or another, kept hitting problems with microkernels, that perhaps were solved by hardware, perhaps were solved by software, but at the time were not solved.

Hurd for 20 years stagnated. Very recently, Debian has had a version of Debian that runs on the Hurd kernel, which is a great achievement. It's probably more usable than Redox in terms of all of the software that's available, but it's not as promising as Redox. The reason is that the architecture of Redox I believe had to be designed for the time - for the software at the time, the hardware at the time, the architecture had to be designed from the ground up to produce a platform that could then burst into a fully-fledged general purpose operating system.

**Jerod Santo:** \[00:51:59.28\] So we talked about what you're up to and how you have this second job now... What we haven't mentioned is that you do have a Patreon campaign, so you're giving it a go at people supporting your work on Redox. Not doing that bad, by the way - 123 patrons giving you $1,085/month to work on this \[unintelligible 00:52:21.24\] Tell us about your decision to hop on Patreon, how it's going and some of your goals for your personal sustainability on this project.

**Jeremy Soller:** So before I started working at System76, I left the job that I was working at before - I was working at a very small company, at a startup, self-employed, basically... And we were working on computer vision. It didn't end up doing so well, so I left. At that point, I started investigating whether or not Redox could be my full-time job and what it would take to be my full-time job. The Patreon was created out of that, and I posted in the Rust Reddit asking for people to donate, and they did, in mass. It got up to about $1,000 at the same time that I had found another job. That money is used to significantly improve the amount of time that I can dedicate to Redox.

I dedicate about 20 hours a week to Redox. Every single night, almost every hour of the night I spend working on Redox. And I feel like the more that the Patreon grows, the more that time will be Redox-related. Eventually, I may be able to dedicate all of my time to Redox if it becomes large enough.

Patreon is a way for people to give back to the project what they feel they want to. There's no obligations whatsoever. You can leave at any time, you can join at any time, but I do have a couple goals that I'm working on achieving anyway. But as I stated before, my personal goal is to make it run on my personal machine. When that happens, these other use cases will be available.

Number one in the Patreon is to run it on virtualized hardware. We're very close to doing that. The only thing left is self hosting and a better network stack. The better network stack is already, I would say, 90% of the way there. I'm using it in my own builds of Redox. The only reason I'm not pushing it out is because it lacks DHCP support. And self-hosting is incredibly close. I've gotten to the point where I can utilize Cargo, which is the Rust compilation and packaging system, from within Redox. So very few things are left before Redox will be able to compile itself, and potentially the build system will move to Redox.

After that, the first goal I think will have been achieved. Running on virtualized hardware already works very well. Delivering an image to different cloud providers would be part of that, and that's something that I would see about doing once we have self-hosting. The final one, the final goal is the $4,000/month goal, which those numbers, by the way -- I had to put numbers there. I'm going to work towards those goals no matter what.

**Adam Stacoviak:** That was another question - is the dollar per month contingent, or the goals being reached contingent on the dollar per month?

**Jeremy Soller:** No.

**Adam Stacoviak:** Because it seems like you've got momentum based on your recent posts, and the feedback, like "Wow, the releases are coming in thick and fast", "Great to see project momentum!" It seems like you're going at it no matter what.

**Jeremy Soller:** \[00:55:57.04\] I'm going no matter what. If people leave the Patreon, I'm going no matter what. If I get $6,000/month from the Patreon I'm going no matter what. \[laughter\] If it's successful or unsuccessful doesn't matter; it's extra money that goes into funding development of Redox directly. What I did with the amount of money I made on Patreon up until the point where Google Summer of Code happened - I took $6,500 and I funded the development of our ACPI stack in Redox, as a separate Google Summer of Code project, not affiliated with Google Summer of Code. So we actually had two students working during the summer.

I didn't tell anybody publicly that I've done this. The idea is if you give any money through the Patreon, it goes back into Redox development, as soon as possible and as efficiently as possible. We now have an AML and ACPI subsystem developed from the funds that were raised with Patreon.

The second project was self-hosting, and it made significant progress. Both of these projects ended up being extremely beneficial for Redox.

**Jerod Santo:** That' awesome. When those Google Summer of Codes happen and the student works on a project - I guess in your case you had two of them - do they continue with the community? Are they still into Rust and Redox, or is it like "See you later"?

**Jeremy Soller:** Yeah, they are. And they're still very important members of the community. I have read though that other projects have had issues with Google Summer of Code because these are students, they go back to school at the end of the summer. It's just a fact, they have other things to work on, and they're trying to start their career and get their degree and things like that. But they remain in the Redox community.

We haven't lost anybody, but we have had school interfere to say one thing or the other, which is very important that -- Ticki for example is pursuing his degree right now, and he's been pretty quiet, but he still checks in from time to time. I don't think we lose anybody, which is another indicator of where this project is going. We've been gaining contributors and very few have dropped out. The two that participated in Google Summer of Code are still working on things in Redox. I had even more contributions to the ACPI stack after the Summer of Code had ended. I had more contributions to the self-hosting, we're almost done.

Now Ian Douglas-Scott, one of the Google Summer of Code people -- well, THE one, because the other one was unofficial, funded from the Redox Patreon... He is working on porting the cookbook to Ion, so that it no longer needs Bash as a dependency. Things like that.

There are a lot of students working on Redox actually, which has been surprising. I don't think you would see that with other projects. I think if you had a new C project, you would see older contributors, because the more experienced contributors are going to be older in age, they're gonna be out of school, they're gonna have careers and backgrounds. But with Redox and with Rust, we've seen a new language bring with it a lot of new talent. People who are in school who are really looking for something new and exciting to learn, and I think Rust has really been that language, more than anything else.

**Jerod Santo:** \[00:59:48.10\] That's pretty awesome, and I think a great use of those funds coming in through your Patreon, just redistributing them back and really investing back into the project with that money, so props on doing that. It sounds like its paying dividends already.

**Jeremy Soller:** Yup.

**Jerod Santo:** Let's talk about getting started and getting involved... What does a potential contributor -- what does their roadmap or their onboarding look like?

**Jeremy Soller:** Yeah, the best place to get started is to go to the GitHub repo. The GitHub repo is a link to everything else. The thing that you should do though if you really wanna become involved in development is ask for an invite to the chat. It's invite-only simply because it prevents spam. If you send me an e-mail at info@redox-os.org, then I will send you an invite back. If you send me other things, I may respond; I may not, I may forget it. I have like 100 e-mails that I haven't replied to yet unfortunately. But if you get on the chat, you'll have access to the (I think) 250 people who are already there, and probably a dozen people who are usually online, responding to things.

If you wanna develop, you don't have to download all of Redox, because obviously, building an operating system from source is not something that -- it takes a lot of bandwidth, it takes a lot of time. I would estimate it takes about 2 GB of disk space and network downloads, and about 30 minutes of time to build it from source, the entire operating system.

To contribute to a single project though, you can check out Ion, for example. It's a very small codebase, very easy to get into and very easy to start contributing to. Other projects are similar. Documentation varies by project. Some projects are one-offs that had to be written and probably don't have good documentation. An example is \[unintelligible 01:02:01.18\] driver. I have not documented it yet. So we need help in terms of documentation, we need help in terms of coding, and we need help in terms of just utilizing the system and telling us what you want, as a contributor. All of that you can do by joining the chat.

**Adam Stacoviak:** So it's interesting, I'm curious about how you balance your focus. One, you've got development of Redox. But then you've also got the contributing community coming into play, you've got a chat, you've got Discourse, you've got a book, you've got various resources that people can tap into. It seems like in Discourse there's some people mentioning some Trellos being created to kind of give people things to do, like Help Wanted tags, for example... Where do you centralize that? How do you balance your focus, how do you map out how the community communicates?

**Jeremy Soller:** Well, for the most part Redox has ADHD. \[laughter\]

**Adam Stacoviak:** I was reading into that a little bit... I didn't wanna say it, but it seems like that. Because it seems like it's not centralized.

**Jeremy Soller:** No, and that's why being on the chat is so important. We plan things in a "What should I work on next?" kind of way. Especially what I do, it ends up being holes that I find in the system, or something that I want to improve. And when a new contributor comes in and they ask "What should I work on?", I respond "What do you want to work on? What feels nice? This is an operating system, there's a whole world of opportunity. Any piece of the system you can pick and choose to improve or to change. What do you wanna do?"

I think that yields better results than planning. You do have to plan, obviously. We planned the system calls, and we continue to iterate on what should be the stable version of the syscall API, because we will have to stabilize it at some point in the very near future... And we have to plan certain things, but usually that planning process takes place in the chat, at some point in time, and we reference GitHub issues.

\[01:04:21.19\] Discourse is not very active; it's why at the top of the Discourse page I say "The chat is more active. Send an e-mail to this address to get invited." The Trello is something that someone made, but probably will not be kept up to date with what we have in the chat and what we have in GitHub.

**Adam Stacoviak:** Yeah, it seems sparse, the Trellos being made.

**Jeremy Soller:** It's not official, and in order to make it official, we'd have to develop a process around how to keep it up to date. So I think the best thing for a new contributor to do is to get into the chat and to start reading through the source code, and start utilizing the system and see what they think. Because in most cases, I think if you drive people to specific things, you can make mistakes by giving the wrong task to the wrong person, whereas if they're self-motivated and a task really appeals to them, and a piece of code really appeals to them, then they're much more likely to have good results.

**Adam Stacoviak:** The reason why I asked that was because I see a question around Redox on public clouds that aligns with one of your funding goals on Patreon. And it's unanswered, and... The chat is sort of real-time, you have to sort of pay attention to it all the time, and I was just curious, how difficult it is to go from where you were at before, wanting to work on this full-time, getting a full-time job, and then now you're at 20 hours a week and you're \[unintelligible 01:05:51.18\] so you're gonna get there, and I'm just curious how difficult it is to pull the community along with you, or establish a community... Because this is a pretty important question; August 6th, from AnxiousModernMan, about public clouds, and it's unanswered.

**Jeremy Soller:** What's the question?

**Adam Stacoviak:** Essentially, how can we demonstrate to cloud providers the safety of deploying Redox? Maybe it's answered somewhere, but here's a contributor...

**Jerod Santo:** If you answer it now, then we can just send the person a link and say "You need to listen to the last few minutes of this episode of this podcast, and you'll have your answer."

**Adam Stacoviak:** Yeah. Well, it's less on the answer, and more on community management and just nurturing... And I'm not trying to call you out, I'm just trying to figure out where your pain points are and how people can step in.

**Jeremy Soller:** The pain point is definitely keeping these things up to date, especially Discourse. I don't visit Discourse. If I was able to, I'd probably take it down, because we have a Reddit, we have GitHub issues, and we have the chat, so we already have real-time communication, and with the GitHub issues, we have not real-time communication... And that works better, because GitHub is tied directly to the source.

So yeah, the Discourse is a poor example of the Redox community. In my opinion, it was a mistake, because we had a duplicate form already with GitHub issues. So I do have issues answering things on Discourse in a reasonable timeframe, but if something gets on the GitHub issues, it will be answered very quickly.

**Adam Stacoviak:** Why can't you change the main navigation to drop forum?

**Jeremy Soller:** What do you mean?

**Adam Stacoviak:** You can't change it, or is it out of your hands?

**Jeremy Soller:** Change the what...?

**Adam Stacoviak:** So here's how I got there -- I was... You know, this is a pattern we see; this isn't your fault, this isn't a thing you've done wrong. This is a pattern I see happening across any open source that's garnering or gaining community and doing its best to drive forward and sustain, and build a community around it at the same time.

**Jeremy Soller:** \[01:08:12.07\] Right, right.

**Adam Stacoviak:** You've got all these different waypoints - you've got you as an individual trying to create Redox and create Patreon support, so you have that. Then on Patreon you have this Community tab, which is basically blank. But then you go to your homepage, which is great, but you have no community tab or no community navigation, so I was thinking "If I'm on Redox-os.org, how do I onboard? How do I find community if I wanna join?" Is it on Twitter? Probably not...

**Jeremy Soller:** That's a great point.

**Adam Stacoviak:** So I was like, "Well, a forum is the next best thing", so I went there, and like you said, it's a ghost town, because you're not hanging out there, and important questions aren't getting answered, and it's not exactly your fault, it's just a fractured community system. You've got GitHub issues, you've got Patreon, you've got Twitter, you've got real-time chat...

**Jeremy Soller:** How about this for a plan - how about the Discourse forum goes away; there's a Community tab on the homepage, and underneath that Community tab it says "How to get to the SubReddit, the GitHub issues, the chat and the Patreon page." And then the Patreon community page links back to the website, or Patreon links back to the website. Because I think it is pretty fractured right now, and especially -- there's so many different ways in... From the website we have links to documentation, the book and the forum, but not to the chat.

**Adam Stacoviak:** Yeah. It's nonexistent to this site.

**Jeremy Soller:** And then the forum simply has this banner at the top to try and get people to go to the chat, but it doesn't always work, and there are a lot more people signed up for the forum actually than the chat, because we have (I think) 5,000 people in the forum...

**Adam Stacoviak:** Wow.

**Jeremy Soller:** ...and because it's so easy to sign up, they just hit GitHub Login... I'm sure a lot of them left and probably won't come back, but with the chat, we have 250. So if every single person who went to the forum had signed up in the chat, well, it'd be pretty busy, but I'm sure it would be more useful for the whole community.

**Adam Stacoviak:** Right, it would be more involved. \[unintelligible 01:10:18.13\] and just more encompassing of truly what the community is. You've got the developer chat, which is invite-only, which is fine, except for it's like "Well, how do I get the invite? Where's the secret password? Where is the door at?" As you're trying to do what you're doing by any means necessary, you're trying to build a thriving community along with it - or maybe not... But if you are, then you've got to give people better waypoints to get involved.

**Jeremy Soller:** True, true.

**Adam Stacoviak:** And it's not saying you're doing it wrong, it's just saying it's the plan of any sustainable open source project. That's a thing they have to do, and every project has their own challenges to do that.

**Jeremy Soller:** I appreciate that feedback, because I think you're absolutely right that it needs to be improved. So with the invites though, the way they work - I get the invites, and I screen. Sometimes, for some reason, I may not send back an invite to the chat. I think that's probably a negative if that was the only communication mechanism that people could use... Because I don't want spam in the developer chat. And also, the developer chat is not really attuned to every single user. So I guess the problem with the forum is it was set up because we wanted somewhere for the general community to be, but then the developers don't use it.

**Adam Stacoviak:** You can't have a segmented community though. I would actually flip that in reverse, because I think what you're trying to do with the invite system is for a good purpose, but I think you kind of have it backwards.

\[01:12:05.23\] I would let everyone in and have a code of conduct that you can point back to and say "Hey, if you're involved in this, you adhere to this conduct, which means no spamming, you're part of the community, you respect...", all these things that are common when it comes to that. And then, if they step out of those bounds... Rather than put the barrier up at first, you give them a guidance, you set an expectation and let them fail with that, and then say "Hey, you've gotta go, because you've failed at meeting the community expectation." That's probably a better way to go than...

**Jeremy Soller:** Yeah, we could probably do open invites.

**Adam Stacoviak:** And it's probably putting a lot of burden on you too, to be that gatekeeper. And that's the last thing you wanna be. You wanna be welcoming to anybody that wants to step in and get involved.

**Jeremy Soller:** Well, in general, if they send an e-mail to me, they will get an invite back almost immediately. The only times I've done screening is when it goes into my spam folder, which is a problem for whoever sent it, but... Or when it looks weird, which sometimes it does. I think that process scares people away. I think the process of sending an e-mail rather than simply going to the site and setting things up scares people away from it, because it's an asynchronous process...

**Adam Stacoviak:** It's confrontational.

**Jeremy Soller:** ...where you have to wait, and... Yeah.

**Adam Stacoviak:** Somebody's gotta confront you personally to get involved, and that can be a scary first step.

**Jeremy Soller:** That's why I wanted to have it, actually. I thought that having the confrontation would prove -- and it does; like, there has been no spam in the developer chat, ever. Not a single person has sent a message that I've seen that has been something that made me want to ban that person. Very few chats for open source project work that way. Like, if you hang around the GNOME IRC, since you can just join it, there are regularly really horrific spam messages that get sent out there. Or in the Ubuntu IRC. And then they have to kick that person, and ban them... But I think if we have the right process, probably -- because for the chat we're using for the System76 operating system, it's Mattermost, just like the chat for Redox, but it's open invite. And we haven't had any issues with that.

\[01:14:39.24\] So we could probably set it up similarly, and maybe make a community page where it says "For real-time chat you go here. This is where the developers hang out. If you want any issues solved, you should go talk to them here. For issues, go to GitHub issues. For a forum-like structure, go to the SubReddit." That way there is less fragmentation, everything is available from the website, the invite system is fixed for the chat... Does that sound good?

**Adam Stacoviak:** I like it.

**Jerod Santo:** Yeah. I just think that just having clear signage up... Like, "These people go here, you go there...", and then people just know. I mean, even just that clarity will go a long way for you.

**Adam Stacoviak:** Yeah. So in closing, the folks who are listening and wanna get involved, the best way is to e-mail you at the e-mail address you've mentioned to get into the private chat; that's to prevent spam. What's the e-mail address again?

**Jeremy Soller:** It is info@redox-os.org.

**Adam Stacoviak:** Okay. So e-mail that if you want in the private chat... Which is private to prevent spam, and then also this is where most of the real-time chat is happening, so that you can organize and plan out what's coming next, and ask questions, and all that good stuff. Any closing thoughts for those listening? It could be going to the Patreon page, which we'll link up in the show notes, of course... What's the best way you can ask for support? Not just money support, but support in general, to keep Redox going and keep you on your mission.

**Jeremy Soller:** Well, I would actually throw something a little weird out there.

**Adam Stacoviak:** Okay.

**Jeremy Soller:** Redox is going where it's going, no matter what. I'm not going to stop working on it, and neither is the community built around it. If you wanna be a part of that, I love that; come join us, come join the chat. Don't feel like you have to give anything. It is a free software project; I hope that people download parts of it and enjoy it. I hope eventually people can install it and enjoy it. I hope that we can work to make it better. But no matter what, it's going forward, and I hope you can join me and be a part of that.

**Adam Stacoviak:** Awesome. Jeremy, thank you so much, man, for your initiative and your tenacity. You definitely have a drive, and that's to be appreciated. Thank you so much for your time today.

**Jeremy Soller:** Thanks, guys. Thanks for having me on.
